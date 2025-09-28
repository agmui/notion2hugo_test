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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XN5MZ7T%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCC8%2F9e5lKy%2BB6yoxHOO24aeoAf5YWaI%2BGBtntyiAXPIwIgPWlrE8qLcKvKSCmxcWQdpX1lCVG1iEibQ1VJj5CySTQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxF31cE4AWYB%2B6SOyrcAzCHeK1o8QYR%2BU%2FwN9J%2BIvNWlqdTArVm3w9h%2BK%2F0XWRQarCrBFKMdPe4z6JtO9fkj8tryZn9SC%2BVbI%2FuBJvQKt2CvLFOWNDUQsSfy5GJ56%2FBREQeNZd7gmwJOOwLEjmNNaYYWbS1bZ6fpZ8sb1iilBsJLTjGRcjQCFlNytrpEpvmvM1GbzrRzc3A4vHgXQ6vUWsfprn6IAku49Zm9O2BGt5FQZ%2BILFGr0NLmogBWMEamZepP1lYP5umDgLj79eVSLiOiDNyFFyOqturPKm9L3xTKmSRc9RHMHQ9GWUWZ64ltXRWc6QZFunwdKcD3Bca7Gibf6f01KRM5ZDWnvLfgBhpo9lnLws6bO2FbK%2BVf9g01VT42qbDwc9JVBsNWTPMf0xc5z5w6LkhcYvv0DmXvS8%2FM%2F5Nt0N7TRb1HU%2Fh1rPvaD0%2FmaOh1BAYCT9OF4q%2FwlpSZTCqGdcAXeqApbaOg4m%2FMvH79FGrGkP4Klc5%2Br1f%2FhWk5HWPQBcQlJ9lZtIMpSZ%2BgLimtMlv6QcbSaCoVCAEWnPOaOnRsQdtnVc1Bwad1XH0CAMrBu1tTP178XTOR3am%2BXFcz7NZzFu0YP5MCMo%2B47Rnn7xbQ6cZO1TCJPPLWOoVusZYYZYu0gAfGMJ%2B%2B4cYGOqUBSU4pmP4xABBAnJXzHq%2F6m2%2FDdk3KchKLwTcNNU9UTQOBuJgZIgSKG1GkIefeGb%2BCnynsK%2BBZDdInIc%2BLcruAxeuN21IeABVoULpIb1ZkUOkum7J37OtYpTZFVjcUQk5BToPb0FT8Q%2F91ZySBS%2BXURgOdwD9RqYWHeub7DATpXg6%2BDb8yKYeQOROlNjWg2GJq9EZbckVKD7p8VFHUMEfk9Z8qsPAY&X-Amz-Signature=f15ff04a9be05f6b018e538e54c3a75ec755295f7e47e0be67cf59b0a6618088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
