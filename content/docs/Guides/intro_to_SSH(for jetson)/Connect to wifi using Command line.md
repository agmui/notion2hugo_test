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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXKEHHQB%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCwsmKzkRLbnazodIm4KML1zxyJZRu5mf5J3p%2FBB0tTdAIgZ41fvXJv1iIuRx1jVEHrVLX3MccSeCElxH9nNhKPbX0q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDEKN5CudQBEZsuFCSrcAwEuIEu2IXpjeX6QZvSuhefw%2FwKT2ideDt%2BsMn5nazmspW4nc2cemsiP1qHpXjkjyST01DbDMWYiwyQ3VQpHQR7bMQq40kk7RojVG%2BiKvZL9GoU82puoN0wvFD2zgpK9duRCzFUXR57wZpCDMiAU4i%2BMUc0PYMTM6Hii6V41U6usN0CqVTOAvp1EH1ZG5EtKPpQ9UqqKzj6IsiPci%2BzGopRcRPmCSZO2FKxcj6xObZxKYw%2BjDWdydJgTGXhil9KyTTUuA30sN0HEgiRDvlmasXXORUHfxJlSZK8ZugqlSgHvQ%2F7ZImFjgDkjNctU1HKjWL40EtLlQC9ukuKTTxcsuBmFAWnIg8qdiqCTu%2B%2FHpi4JYjD%2BT%2BCXCLuPLGZl6Lc8J9JZS5dfTzxzyld7Aa7TG%2BuhiJ872PMMU%2BH2ZV0HQJXQS0zdCE9lYxUnWBZX36ZM0bvOlaYjNKsZFCc4un1OprFXjzL9cMv7ED4xi4oaEu4Z%2B62B4rXAxoyr9rXOtaZqevTNvU4c%2BmSjuxeAeZJKqHXg2dbA%2BmWy7drbSy9r6lGoBVmhFdXC3YtRADYE74wEE3pPu%2BMGn4byBZ6ftIyuMGZpYRUCyXBKbbIJ0SD8XDg8v9mWztkbyuPHqymkMPTK980GOqUBQX8C%2F3dXOzvrnakjbjv4QmChY4O2m4zwt2iGv9I2dLz1CytfHZ6vI98gFVDWxUtuWTfyK1NrHiwOJSHU4lA5jlVuIKSLdCOVXJ%2Bg8JqCNhxltkIO7Y2wZaI2Dwnzx15KOQk0lsaygxYpqMM2IcXlalB%2BchGqt1gccZ7UAuTQ09AzNQIq2K2YHXKoYleehVqu9axum5paW%2F6oBgbnmx3C%2FO6mSMbr&X-Amz-Signature=599be798944d81c06c9ab37dc2358bee26e6a16b692ccf577ec5c8d38e2214e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
