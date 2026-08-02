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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPA2Z6S%2F20260802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260802T024705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQC4tI%2FD5V8r0Hh%2FvhtNf2Gy1lotmXQXeV2kbJd%2BLvqEyAIgH3wtiNcFx2JSS6D%2BGEE3ZyrqtYpnVCpulL0lnsV7z74qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW53xY83oa%2FfxMiUircA%2FFSoYsHGu5w%2B9GuV7ps3TtwBZckhK%2FwSRBM0FpvodY9T2l3LLTtChNUZCSQHcV6K64otwUUAQ1gczjiZdC%2FzBYqTDzm2TLXdX8lyv5aNtE0ZDdCOCIsgG0lAubMP8nVkpSoYtvq2VAekOCrFBNJSOEikQggz4PZ7ib5vag7mVmxHyH0d7Gxhcw%2Fn13pJz%2Bh%2FTvUjFb9FAfJqzptsexwBCea%2Fps%2BmqapevX6WBxekClOuZd%2BWPM%2BMA5sqfDLu80ylvnNQgPy1R6fCIKr3t3Tq04EkGducKcgZ3HE5qjriy6dOvN5dT%2FVHbvzpkQvfpbHLMHuL%2BxYuf08Rsh3dBTWBtpO2S6NcflpSYfOWpcL3tsalMkowCFtwqIxUJ4z6H0ab4ipirxdIc5lhkdqIjHKx4%2BjkHtLTLcFHv0ajWPprqoMM144XLeakfPBwChzOEgaDNlwEWc234imbfVE5rA%2BkTsIZbyEMDBcancke%2FOl8%2Bwgb199TWJHfwK3B%2FnQSzZeJr2L5NvMGXSjzeFzg%2B7CFKmL45pXTD3MmdOmTedISQB3WQQgB1A45rJtDhCAlPTf05VS6YMq5A1U6%2FgNoM0IWZcRjW8LUvBFyj80o6DqhqNyeh9UFHbdVAofvs8oMKXButMGOqUBcAsfqVQMkMrE6%2Fsn05nQpdp%2FnSNy90a4sue2KL8D%2FB%2F5EcD9MBmSHO6g8IlKrdeb48nsedrP5MouUE4qY4XCb81pr%2F%2BhNTjvXnzzCWRgRhKypGlgwHl2a%2ByK2fH15BaeEU4ZNxHlGcNTy%2F9NnujdCR8st%2F%2BFEvetuPib7kMF5kLHEqKM2IOsMN7I1X0nHVfFFiDANcKC%2F4g9jpf9zD7sLmOIwaHs&X-Amz-Signature=ccd0232f3053962397a2f4ac7aa6eb23c88d42165b773a318ff7d1b8b2b9aad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
