<?php

declare(strict_types=1);

/**
 * @file
 * Theme settings form for BCL responsive theme theme.
 */

use Drupal\Core\Form\FormState;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function bcltheme_form_system_theme_settings_alter(array &$form, FormState $form_state): void {

  $form['bcltheme'] = [
    '#type' => 'details',
    '#title' => t('BCL responsive theme'),
    '#open' => TRUE,
  ];

  $form['bcltheme']['example'] = [
    '#type' => 'textfield',
    '#title' => t('Example'),
    '#default_value' => theme_get_setting('example'),
  ];

}
