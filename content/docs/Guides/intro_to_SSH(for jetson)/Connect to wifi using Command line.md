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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJHE5HAW%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLK4iOvq4q4MXNeMlGGKuYts%2FzcQpPeoC0XLW4GvPAKAiA0BTUV3gsCnpUR%2BvwCslENR%2Fz%2BoUl6nHTL1vurxBqKJSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlaETI7LlMVmUF3uEKtwDCJPEMs4bNnQN0T55KdNDMf4hfMkokwp5zIs1cTQTR%2B7bPYZQhHWhooaorKmWK2TCVS6jRaN3aZ1fcA0G12esYkiOjCpQIryUwXRk4FFW4nwdheI0qI0yJtkDbujbAXTlA07LwegsGzdcj3RDONfMBoFQSdqeT5CirQyc4CFknXUE40SjSuMNZl2y6ZQhB70ptPCu2NP4HO1SikXqEo8NPJnK4X25rmRI%2B3jLDJRRzJj1H4EhLogGx7FiP2Jy%2FHiHv1JplRDJw%2Bg13qaezpzmO6QJ7voRMACJ2PcNHPek%2BO4H9UMCTcmx%2F%2Bm72SEU%2BaOKKphq0BvhedlEBE5%2FGGQlYCiIyJsvxhwy6RI7YJNh5Ykud9zwh%2FgpGazt6uBtfGItxibmQVcE1Whr8Xd%2BSJzm2CGJMg%2FFnvfwitj02RXqB0XY3%2B0Rew9UVYB3lQqA1VxA%2FVFQ7WVCkgn5ru35hwKgB%2Bx%2BGuLoDcc78Z%2BIU34uJizPI%2BmbqbHMszEeWGdfN7AxtYvBHa9xO%2BxcOU%2BNDc9OwI5m%2B3GS3wUEgYxtxY5kuScr0N8HAW8MfpUZbt1Eg1TiIk1ugdNJRN7ymKsc%2BJVLHHzCpXQUd32igok9E6F7MwZlA9VV74ryNw5zGXMwlvSMzgY6pgEBOuGNSjmDwk5MmA7VNYGIjfJuFnXfr1WoJ5%2FpnwktX%2FO%2BPnP5gwXQ%2FwYeEEwRytVGdMDDPyC7EA12O9PZyv7eY2j7aaHYGBXHKAndqt49ye44EqYFlTLKyw08cOjzKd4aXzFhzw80qF4KqIsVOpIKZ9YP8FCY8UXqfJmIhLfC5krCGLFL6vq82f%2FX9mwK6NEB3sFKjUh8tZf9GSmSBPyVM%2FX0FvAp&X-Amz-Signature=36a7a265ee6315a0520f539a383d83b61c2b29c2308a210cb3f9d2067849c599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
