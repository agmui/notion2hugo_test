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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JX57I4S%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEINUyt2pw0su2YIZPluXklcVnBoiMuctm6oEU0vGT%2FiAiBdpAsix%2Fhw2wg7eBYZ4D78Qz7Xi7cF%2F2fKNXUmIHJ3Vyr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMOF9r2gITJPVqxezrKtwDCqECuxS52WuVvWJPnOpnCr0UWndbIy6Oc6EaRj08azus9suByEum0SN9JPmd%2FSBoIiPg6f7fqK%2BOal1dbrobRLmCp%2FiIGPoWD4JczQ1fZcPq3xYKySibYYe%2FvnRH5jUEUIZkQ5jd0vBlOTxH%2FqtRiAue1sNPyQoMV40hsH7GPg31hnBLe4ZzZuR%2BrHHIMcAqqbJ2JMLtyyxra50EJI%2BpUmpOt2xrV6VsRvyH3PcfdBJhgzWBZtTTGVqWn7HJOpplHc8pq4zZqfxUAch60LPU3xz%2FglUsHJs6fy40vpwKWz1naVM4wYwVYJhI%2FMx%2Fy%2FgoNJUE146wHoyVaiixX1uBJOHIgQMXlNMf%2F8yNFLUM0gDSoWsNWMkPyU1iqcXxLgmFUdkWGpKt0ScrGt3t6Pa7Nk0KL2klDLxOK80eIptL%2FY3yY0dn5VVzzaoSUdCZYaMN7Q0ZbeT3bO%2BdK2l3dzKXanTH%2BmzT7l8MV4yItQzXfu6J7wLGG%2FLhtVt0JsUVSUZnLM3lgemKyuUm%2FtbBeo%2BYI4OETGuIcVewgqo3qJGjaBaMIHyXXCHbag7ubHl3DraYkvEkLUms2jYP1CRmkdPREudc82mFhqQPOP%2BlXR%2FCs5gIJg0LRzxKUBwlpVswotGNxgY6pgGlW4moIkcOPH7tLwtV3TLqDtiqIefbTNshYwTbpkq%2B8YAO8OQyIdLTW3iZ%2F6VtrRIjAIqOV8IHgaNMwJ2tzKNd94ZnkIWKxpF5vy1zIvXfpZT4u5jC%2BbbndBg2qNHfaOpKZbSKH09iNawnc7za1EKuGZCgGdKewwH11Yp%2B0Y%2Bg1ucNZd7a6BKK0ogB7PpOMMvysp9ExV6i2kO6LDd7%2B3LHWI1AaO98&X-Amz-Signature=d39807aaa9e303b4e44a728fb52a70f6576c148de499ece3a89a1f8f33b36f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
