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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PDJ46EE%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy4Klh4YRTDvxWiyM0w6u8kwszkxhCpXY5wTv6npzsLQIhALHkLEM3eOaBspEcoFQvaH0es%2BxNAFWXLe8Cqoj1MXBdKv8DCCEQABoMNjM3NDIzMTgzODA1Igx%2Fqsbds02nrPgr9bsq3ANwwTdVs7B103BMDAstnWGAXLstJVfc%2FiMVaofgFyKGi1zaHHXHTsz3ZqeMoCgEl18kssI2IluxOa3ZuzXGAb6O4Xs8avuBn1oZNxABXvYLmtMIEXvceekuLMYJzOm8PYztWtue5EArOoEB1b38CW2l5zubYZhYYZIdGvhtaTGMUYH81L378MMb8JCDSptxw7TKpgPcDhoz%2FTq9pMEI0xaqcpkiJGhE0mNWel14VJDeUL4WWpGI7zHT5cV6TX67TdDHQMdZHa4HbiNapdm5lQJ7ZiqrOLEXOMeQZyZG%2FMl%2BrbeJ6rQ2Ik%2B6VzgbOB8Ne%2BAFV1J43XulvM%2FbqU6C72vQYEfPpwyLUBtfYSYDiDhU0YzEwWA2A%2BAy58WgKy7T0wlOWwAe4K0O5U70L0Fxu56zeVFQVQz4ihISVxCfhJv4o%2FhYOo7xuA4pusNUEbTu%2Bbet%2FgIbvpkYvcW9zTuTXMe4yjk%2Fe2owo43fVP8tbQx8hgCaBmAykO2vWHx2GxxcLUag7O4xf%2BMJF%2BjU3CT2a7RLDByOcfPSUVPzGT%2B5hfN43I8M7GZUb57wTRpkZembIrcFgLnWe0mSiA%2FsYZrQ35J4Vci18sCyvkm7d7yq7qWEyVjpuAepUdcUfXHrpDDKjqTFBjqkAcxqDpdd2Dl1S3QQpChlFj2Q5qrcziavjxKEGelJKn5UyhNUnX9kEiEOmlWdUVrm1k74Suys3vxLZQHMBNKO9Gswg46hPOWC4KNCXwbWim5FlGL%2F%2BiR6a6%2BtK3FCwy32GGqo33hGtpVHwv0Br%2By%2FgLfAfgRwvWyawqG6i5seJpPMhb1uOJLoletydyZAH5o2mIjv8avmmI6sQqDcDeQbXqZNn7hi&X-Amz-Signature=f8d4a8c70e4512675e0f77e6d7a01304c3055e1a327738e1d6270c5fcf5fa93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
