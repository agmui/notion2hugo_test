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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VMFUG4R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCSO2pI4oCRiv%2BpfQPquieRB4YI7D40phbMXL18NtYlmgIhALlhLB8FYeWgXL84soCAj%2FyzD8Kfb8pcL%2FV8ZfpIfp1vKv8DCCIQABoMNjM3NDIzMTgzODA1IgwGwTSWKubsSQUFBuUq3AM7F%2FdAiJuWSqokTmnniSCpkD%2BXAloS2saideNoJNUP%2BG3L6KXPOcyzbbeh56msPN6ytfNi7CboqVUIsjHmJgHRR%2FVrvlaT5xw9f0bFNc7GWCWIJc0KokkLbeys%2Bc03XlSMwpLEFqG3F9NOFS3yf%2F4SrohjZiLl9WqY8dTjpDCs6ghSImyCjzleOjDqyHfHC76lTLNh3T65EAq%2BgL%2Firds5nbTuFzPmgo6CKr%2FM29SVjoFkNEJa7YPHaMNd9iUcWrFTiNEI8ZH5izAzJVhfLYY99XU4r12sJ2WRnlwDZUh8fOM%2B63%2B7uJrlLh3%2BtC8%2Bidq6PhcUUm8MiT06Lk31Is8b6wc%2Fiah8o%2BDW5ZmWqBzFLcXpzQdyf4CS80PZGYiuKfp%2F9O8YNNs07V7J%2FztH7Nz5jYNW0aG%2Fzh9OMhU8KLt5QmQeU2GCIbM0INgmQ3sgVyH%2BZ%2BrrYS3GFiso3koXBODTQ5A2BTiKjrIa9FP4ivPsdSACNB%2BXMvv%2B57xrbqMPCVRwtCkcGqrQzU%2FhdOLxnU5faJHCMN%2BBq%2Fbw9w4pj3qZA65dD%2BMhiKIMHMq46k0cPotdQL8OFMQgTyT0MX0yqSgfwqhFFAC8bD4LBFuBiGqnYsUKrgLHgkMBNC5UdzCrlr7JBjqkAUpZs%2BM28MEN8y9TCt1BcNAN3%2Bgwm6YtUoOVzxM4PfikUYvt2ICBKY4521%2FKo9iKd8lp5RMN8xygyRsR1HPG8KyKDr0aGYRTn0UhxlfUy2NBL8PmWx5JXKofatNAGG4tdnSdchBIL9lda7WzfLglfyJVp8q%2BEBLnfWXipZ1AX0svrFRyNg5lFW363hETci9I2yBvPFaDIgbHmUtUNyMUwmm6e8GS&X-Amz-Signature=b0aa5c0108e2d2087e2ad652c1209d838cdb85afee3ea3adc3ec84bd95aba99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
