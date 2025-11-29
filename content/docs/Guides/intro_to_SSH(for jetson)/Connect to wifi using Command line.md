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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRHHCUIV%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFCWU3XhcTsB1Cr7C65fmSgFoOLv52LCpuxOiW%2BX2pfgIgTMVwkPR2iGO727bmwzhz9Wg0B3fpYmJQai8kJXU0XSwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM7WeT0iZs%2B5lgXjhSrcA%2F8QRU%2BigC3iYYiEG1VSBuxCQNu%2BNlt6pes72rPpiHFo5TgtPLGICgx%2BdzwT%2B57KjPEysw2YTSJFn8FUUvPpZfPATQfOGbF%2F%2F10gCljsvNG86YTMIlS0MpyCZ4dUi%2B48p8CIfc%2FXEkE1OnV760jCUSnt%2BykPtF%2F6jMBVnU%2FdS8UE8uPKmdbLZF2081SHw6zxMpq64WRk1jQot67GJ420Ekgo1kTUeV2xwrWDZjvdDi6PSTuwc0lftqvcsJb%2BNWoUhUnsrlCDcagiqEhqfS9r2uCNHkQkBeFXahp0V5DUzFFe7Xb6JkdQLeOlC357x%2FNweh6hQh6nVNV20SKaEriR6ziXk8vcCHjAs8s%2BQCk5GZWsTeN1Pig6JLdFLqEe%2B%2FosFlYnn3CjYWOOjWZxm6RTVf3BlDHoBXJ8tgWJZGjrZN9J%2BJ54N94Lzci6x%2FDAyl0RUus0V6uY25Nh%2BXqOdo8%2Brnu54qRCCrgNZHmE989Q5cyyJuvsCSTA46rxzpUri2gZq8EG1%2BA684o6iEO8sIEdQBTJGZcg5G0o94FgI0hGdC8NUO3AOOWGKaaEo4vfJl%2BVCVh4WD2hNYF5MMwN3f1yOhfkvq00jEqZRCmoXR0dJDPbXZo6bIzYc4GviF%2FRMIf%2Fp8kGOqUBB2lsrjLHE3coxzQCp7CcrsV%2FAJ7xYTXeV7X45fCDYwgwN%2F38n%2Bs47UxFFHQ0PHb8T7WjXyMMicE2IvlYMUsdPy6Hw7m2Lqn1rr8B2cAmIT9XouNlKfla8H%2Fj83gKgiolKMTlfYxIrgwfm6u2cgdhDI2qW80k%2Bjmh12Dk1WRFjk8ZC3148qh5O%2BN5a0FeBdu0Wijowrxqmqv4JV3Crbch0bRpnaRu&X-Amz-Signature=a5c882b54995c769eb8813af6f8bf0044f639adbffa5003846f761023e5c8e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
