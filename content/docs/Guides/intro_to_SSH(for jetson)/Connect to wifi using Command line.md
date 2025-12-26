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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PGF6VPH%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDHda0NEyHK5U8WfzdEXJ0MNVZ%2BTWNNCAth84m8%2FNYjzgIhAKvXev9MugxlpybQgeu8rBB9P8ZLuVeuBlaH6i8C8iKsKv8DCEUQABoMNjM3NDIzMTgzODA1IgxAHwhxhkCBYUXVgfcq3AM%2BVEUBYMnUzBYNVkYmDk%2BwZ7U40%2BVqcCBPHo5W9SqgJscEbl%2B8G2mTWUJRv0l3O%2BudiceQZyJKz99MK%2Bg38L15Gz502wjt8tMFZClpKE5ovmAMZJAnmqTs129JfDwyTPpNa242NHYtjw368s6M8CJJL264szP%2BZyVLW9YKsV2eN%2FbW9r%2BViAZuXXzuWN9uUsB6vwzn8GQIoTt%2FgqadM7%2FGwX%2FEyKzQ7oTySI0Js93ocs7ajujEYLJsjoChhWvJz%2BuZjZsreXxid%2B2JTglGszZDSxvWq5P494FM4qhtuL5Hfzmdf3ZCa7j7hXXifl1b35DpJFVhmsOD4f7cM%2FxuJbITyS0wNOjUJthSRwuqUTHtNiLsk6WeZhQ%2F1LU%2FBo1lu8Q3zCQ6U3J%2BE5p3FpowTClqqTFuV2yMArV3rg09F72nxcHzxM9ifLxgqrEDZKx%2F6nbVPKd1LEMJk4RC5vuKw6W1MCkwQPz9M2ThQXY9qJOi8vSXUblSZnp2vyOED2R%2BnlpxPZ2OxE8AvlO1bcps3PER%2F7paFSPw14IuEqTR5mfVovTJChhIhVhnibXuefo5ogTf7X0f2FhpNPhzCgnzGDXrPe4XS0PvUcf3XIBs%2BUM6ke5i0xMwbZLC85EHfzDtsbbKBjqkATekSLQi4PubCbl21cT2tmXsFmNf7Vg2E1WyqjAIhVvD8fvtAC1dqz18EUMSIAkwqRfA7J%2BsxHDGk2FIxMESXl23FOccPP6lkh%2FJ9oZNiDtneS7omiJfXUpEXmrLOIcpXC5J4byrGe92s4K4E1xwFRBfQ4H%2BSuIqCLEJvvN6LPwX0oe4zY1UU%2FkCtnHMGCvaatr6aqjIzIxb2oj5lUganG7gM37u&X-Amz-Signature=b18516c8dcc4d7bf283fb1f0d754edbf51b71544a01f3c9816d87f2f3fedec3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
