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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMUYU2V2%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAWNZkEG1gRFk6oSFGlsxdQ6mbswbQAhjfbL0PbhwlY3AiAPqjHNNL4icK6b0FmqLmhg1Vh71tlMB32mqQJ3vk4xrSqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0odHlgjnMoho53oCKtwDXCW8pD3SDhor4E4YAXhoCXtyFDfwZFSfDdD%2F0rxDHGm1ZZezUbiyqv8qn%2Bi%2BDcqQ%2B0WN8RKB5mTpN%2FHMd%2FQvAd8eXnnRLeSKmcnbitNmY3%2B%2FEyafIcZ%2B%2BGBCqStnpdDHyJDw8xo3gCzoYNLPhBaU1yZ0RS0oTKeLSVNsEIn22Qh9GrUVeg%2BYGXzceoDoiflr47um7MAjKXHmsVuAo8LhF8j1y2tBZplx%2Bj5wawJ%2BGI6OS44NGrSRtu%2BVXu%2FnKX4W5s89ntwizGsTrHuNLIqDLRp04EdlFkAaJfmYj7%2FgE7L9d61XtBt7xnaD%2FB%2FN81w0o9lDNXjg%2FeS4FQBq%2FAqgdRjGNKne6e2ilZLplMP6dNfePD92CRDIy%2BvFDi%2Fm6jEaKRJVKemz2Pfz%2BmZ3H8B8ZW9r%2F%2BKUEBnvfXmvheQSt4lqTmJFIIkBMOiM3unFNGYsk4fDTyQylEe8V9QRBMPOfMiXFYb93mfsjASZjahsfsKpDyBde9K8BqmXPpQRxInUbKkp7gFLz%2BGt4JWZbo7qWs63Ziu6gtuO3coykFBB1ih%2BG0619bEeyYWmI0cU%2Bu49Vo6no%2FOSK7%2FxgVtK97C8pJDVd5e9wZ4IN4y2C91GNjn4E0uSGwJYYWfg6fEwoZHYzQY6pgF8oJvJClW3U4DBjWjKTYjjmP8hU%2BDxVPl2TglUGEWlsVQVo15QaWkvozRt3fzXnS1KpSJzc5Qhw9OTzzkJQfezuRRFayoPdt3CeVyy0JRZ893jCE1gVskKnwaFm85eLPOG0jW6meTixV0Ja0YW95WLeWrJP7AL6xvE4SeYzIDV%2BW5w4e6bPkBPv3JFxY5NzE%2FKBf%2B3s19137kUWtJEBEHXsUvJ1Zqy&X-Amz-Signature=28338e31a44d145b2395274b211f2a8e54b4bb2c54aadd113e1c13825b91411e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
