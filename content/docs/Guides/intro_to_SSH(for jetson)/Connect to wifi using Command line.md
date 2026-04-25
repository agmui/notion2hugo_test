---
sys:
  pageId: "253da3bc-6297-80c8-93a9-f467dcefd643"
  createdTime: "2025-08-18T10:18:00.000Z"
  lastEditedTime: "2025-08-19T10:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/Connect to wifi using Command line.md"
title: "Connect to wifi using Command line"
date: "2025-08-19T10:27:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 194
toc: false
icon: ""
---

# connecting to wifi with CLI

To list all wifi connections available run:

```bash
nmcli device wifi list
```

To connect to a wifi run:

```bash
sudo nmcli device wifi connect <wifi name> password <wifi password>
```

### example:

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLID45ST%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWm746gv3bi4YsiVnLH9gZWLzIANH2Xq4NsibzdEjpOQIgYxlHq822EQvahgggyhSMof%2B96yv5AiaDn33%2FiH5P36UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6bDTP49ruPJmsACyrcA5q2G9YCPBS3TJ81rk7kOLPMEpca9Z3HCQE1rIF4SxEi7teG7rsco9ovoZPSIUuQj7mpl%2BwZ22eSrQoXECHazZnxb8a3V9ZzH1FEuk0RfxqtyHo22PjNfQblPJDZoK3v2RE9KlLQrlMN1YiooffzWdfs5EHVnX8afmGYsJdeopUUXH2RA95EBL7EQWdfgsdh5%2FUfmL10NXxLz0IwbgGIcRXsJvtS0yfu0hO0qYHMZrKKtm8rG5dDmTmDzHdDRtwRkck5YN2YCyD%2FcGU0CkFtYWn4gpUCxzXnIXP1aaBRrCHtJEmNLmPBSzKFPOl6dE29WsS4OTt7EONqBzkaXHwYUxzYtD0ypHs%2B5V%2F5BS9S7VtVG9ugMNkz8n3d3%2FnpJlSnvy5iSGMV7%2BOO0ZKrfG6ifCZk%2FZquHwc6Sac1kEDA3%2Bzyo2k%2FRk%2BODOzsLdqFzwYQrC%2BmIey5Z6IinnrSjCMEeT4eLKKFd69LJ7iSZidTIhAQsIzbQyRQYl%2B3uGxk6cChFA1uRYYudUhskZyikGBJUlPNJwriPUGsu%2FbiAX85UxjfrEL508OSMgOuVgaun8wJx%2BjO1E5ERdoc5FcJeVJTyEaeDaN4epsuDGEt47rtWL%2Boc4jmAjIRkE71G9N0MPS4sM8GOqUBWELHcceAKr6rt5sKtjtFxQBrbpKQ%2F6pGbdQ9xplbtQRNUoupOtFHJgNKF1TcjuQk4M%2B2rUtrMySsSfSZqBTZc9zIxC1iY7X1vybb8UBckK0llEbQtXjJYg5WDiL%2BEwRtyXk%2FLlyPkvELuAVLEs9deBY7rxOET6FKle0t6p%2FXkLzof%2BrUdoesSIvXl1JQlCgtDwQA3WwWVCOTard17%2BBo8kQx8So0&X-Amz-Signature=2302d08c88364c4049679b178acfaeea2c4d2c798cd03deae5ffae37a3cfbc2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
