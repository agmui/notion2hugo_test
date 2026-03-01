---
sys:
  pageId: "253da3bc-6297-8011-841f-f88fbe0b7d30"
  createdTime: "2025-08-18T10:37:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Jetson with Wifi antena.md"
title: "Jetson with Wifi antena"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 196
toc: false
icon: ""
---

## Jetson with tp-link AC600 antena

If your jetson does not come with a wifi card then you are able to buy a usb wifi antenna

> In Robomasters it is not allowed to have any WiFi antenna on the field so most teams buy something small that is easily removable right before we head to inspection.

[TP-Link AC600 USB WiFi Adapter](https://www.amazon.com/wireless-USB-WiFi-Adapter-PC/dp/B07P5PRK7J?crid=2A6KL18KI5SF3&dib=eyJ2IjoiMSJ9.Cpk9qEaP8FCv_AaXO1Xwmdj1GYqoa_EkhJ_amXLEabU7PLZMP8AzZEneLC-Q_nogRud0oO5wwc5VQh2Kqoq3H1Hdn97Su2NZg-V3jVWFKL5XL0lN7kGrMrWCY37kt6mFuCclHRHH5Rp3UA9D9gQYdBOUaSa3tI9rAB_biVS9DtI4c1LuYY-yQwoMmGm6ZVzHJPqlysQMd8U0TXJzxeWErZM9QvsEkeqeSMLB-9PStd8.ioFKhTTYaaA_uoO79flxMMDpEKAsdkgsyHzxQBjnf-o&dib_tag=se&keywords=tp%2Blink%2BAC%2B600&qid=1749570822&sprefix=tp%2Blink%2Bac%2B600%2Caps%2C119&sr=8-1&th=1):

Here are the [drivers for TP-Link AC600](https://github.com/lwfinger/rtw88#installation-using-dkms-)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/afb94d1c-8d91-4c8e-b0bd-0b81bfc77719/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCGPEVY3%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTgVws0ME8yDCnnqC58zyV2koItskyFsoJ5uxoEeg4pAiEAxHakOmuYhrG3lXXtcRTW39goKpTHgUR80cPAW53ltLYq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCidqon2y7VaxtY26ircAwdgUiwObg%2FxP1kTdpD5dXFozv6V38vsxmzo7VmB37c0zdKA1HkyxFbUy74MT0tIXV4rT0BTqHdvuqWlOWONAZ6ZTY5omeBhIJZxRdTNNNzjfonMk9T0UEY5SKVkyP2EntrVD2wVTh3bpAamy7DCHIMuaSkCltrPc9QzcVGX8YS6BN7coPemExlZKmLulAm2dylHy3W%2B8GysXQqyMUTio9eKW%2BceeDpazbZpTuLf1E3UHNEYp1CWOjLP0vR65UyjJ%2Bp8VlIfzpbHPpwVBs8wUoD%2B6H2dzGLcCyvd7pzKRqpKD7vGk0jJiAHoesnjtPbMZWCpiwSj%2BTYhRWn1AguYwDeoCynLO5ZhycbOluh44qkseGz9l67qUdD3rk8rl7KTdLIRx6q%2BpsGqDREcD1%2FgDWwxhxhiXsUSPcnit3ydadijgUYop%2FNyLGQB34zKsKLl%2FKW1%2Bxv1rFvQ2oh9BuEezuHfGDwtlM7wKtkHBfi4E0uME5%2FKEdgOrO2xu37awYXlGjV7Cx3E5l2V1dFtg0Q9YPUrqZFHzCmR8rrX451YbOOT%2FFayv8LJm76ph6t9D1YzFDfJxyFXaEjOm6GHm%2F3Z5rmgAp9vaTbadZODL2hxbdHafaL1Prf7XkkZgAMNMK%2Bvjs0GOqUBnH7QGbLinCeLYkqxAaL4WfVgoZGKrb8hwGyxHYShK%2BEMG5GigpWLdWtq1tMuQgtsJtKgbBcXXa5%2BMc0w3QazGjkja1%2F5sfLLadH6jFM%2BotdKm49l8f36ABhWlijw65%2BGG%2FLwQSkI4DFXNMj3ahUkuOlQzqD6VacRCYYydrMfef3BQy6fzNGLXnZfKVi5FwA69VEzcTABRf767WHytaiKGmplXSsl&X-Amz-Signature=721028458089c1d634ca008726a03adc78a296bb839ae98a3122662731bdd35e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
