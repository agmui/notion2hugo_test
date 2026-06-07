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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXJF4ZJG%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsr84uWKVydQ0ZyyCFKbandJjg1NIbY8rvsRhpckVWwwIhANMQYiI3Y2kgKH3I9tDIldDYZ8JA8BKlP9%2FiYMrcG5ZoKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6IX%2Bs6rv7bZQNQZQq3AOo1dThnldSG%2Bf8395yjhEv3gBpeDPoImXX6NZtuvJTe%2FuMvWsxXZGMhetttt2ftybn%2BQD6Y4zmUfemPmOjfuWDeyX1wHIeLcfRn99o3jdpAOKWVa9kOwRT4ud8wfT2MRvejBSNTcHYksejyvX9uCdrLMCLj%2FMBGv2n%2FzhLnmyWBlJ%2FFF%2BxIYOfXZqSY7lgmqQnMtMT5j1AmT9kVepAhnmCvhuN2GSlR4qVS6%2BOAHSHtsNG22T%2B9jlhXwA9RjWGPRAPD5FeQgtHFqynH9OG6t6rHL73ca%2FyjcGB59CXv%2B502SObZHiUfY3VcgVMMFC0WukYNI63F5FuZu7EKgMtfR6wppT5BoHkPLttWMnxSRBRQV0%2Bqd6dFkKgpbAyrcSPk0J%2FVUGNseuwy5QMz2dTABlb9Tgad5hM4CggxBjAotQFrqbj%2Bxmy7MuQBzplBCQKL2WqSSMAlJCAQmfFp0CBhn6Wn7c5DRbwyn5v7vD%2FKi5O%2B%2B%2FQoiUtoNSvvkaR1Bo2iw3x%2BNXuTg81fnnVEwuTEdHZh%2FAXVwpYB40bCYdQl9i84C0IMFszLEQFGwvIbPbmJ68omenS8UlFwUJqFp1dZr2Jzpf6gtMoCVdHsJKLN6HLxX%2FCJaY8FoOWAIdXKDCI0pPRBjqkAYG2Audr8WIzMkYRW7jJyoOEjpP13P8cDP6dSF%2FmY67Mc6lwDJW8%2FrshM8hmZQ7%2FD1w0BinKl2TTcY60y6qDQg2oQm3HrdUY7NQqW2iz1ekRdgbaeXNtk3h0lclRG01xcIOMYdaQlN1YED7GW59T8kPKM8H5tEVDR5gSW6ODHYF1RE6W9ffEOcN9vRtkg9lQQQbXSAgNz9hWbY6RVdm%2BNSmXvU7W&X-Amz-Signature=b5ba4d680686cb62e243af9fdd8a46995da17dfc68b18dcc8803da0229ca88b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
