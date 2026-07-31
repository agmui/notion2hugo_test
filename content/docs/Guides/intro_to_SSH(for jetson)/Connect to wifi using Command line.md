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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVSF2SZ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuSiqlBCxlZzDnwurXGilp%2FLd2nLms6cpQcEkTgGJSggIhAOEW2g0pDOQlxpVvhrp4HPR15H0CKzw17zjJ8t5icIOeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw81%2BLokXACFbZ4SWQq3APTF7ivf3LhohIPeCeKoWaSi%2F6XlPMX1RMRbgXqsEoEdgY8N3lor7XknyVC%2FfVEuSA9aqjaGCNSl4B4%2FKGZlSxXcKDzG8sU8kqu%2B6tKpuksmXRUrTLbn8PpbWr4YeoiNOpyroANAcR3QJQNTY7bWoqkNcDCZktEPYdfTwG64OyqjVoenpz9cKwJzejOnpj47spARi4vmWfH9A%2B6Whar%2BwdOHCWLFnhbT5%2FdgB427Fq1T%2FV%2FYPjUrj9XJ9f6kRsX3U1KNHC4p%2BBwKinBkC6DN04KTi1%2Bzi4elyMpg%2FNvRac5O86RxGm9nO76Et5PBXNPqiK8%2F07fZfupo5DgBSo1ZkkX3HCsiKCr7fbhsf2Y%2FLGY32ncA4gpfKGUQ9EcG76OZ5bOeBbTIz72b6Z3jEE5iOZQxJoCmjgwwZUS8IUUoXJsEa9NoHqm4fNSCu0OswIvrXg0%2BVJZCAIyPmbXW2xLrNAq%2B0jlqcJrEXMsqVvS3aZuFsEkdIdVj7J7ERwF3D4ENImke7CRMEHao3bs%2B8fuq77MexUTxrlOm6Sr5BFj3Ch4VX8dp69M6XoyL7utrUR%2FJAhKar0j827wYpqDeNTKt4EhYPXM0WRLDUsDKIKnuOTqtSqGkuGOo8OcJPd%2FBTC0lrDTBjqkATUgoQa8FWKGmHB%2Bsvm9SYw7IncrAbJ3C9%2BK4qASxtJqepu4EUsFJa36GpVbCOHjaew6lf97V%2BMI1UnOSRoutNDPULEBsDeEnrMQ2EqQMIIfkCnguY28etR1vhb7f%2BRbSB7cMrBHqpxC84qLuXhnB0SfqPusvHGi%2B8MxHikX64MuCPLyw%2F%2Fq5TbBYDYuJndEqNqbXMNqEYxyNiirKvHbRODROzq7&X-Amz-Signature=4b77951bc969860f7844e77d633593b4c7865105ddb8f33746ab1985552e269a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
