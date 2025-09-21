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

![credit from: https://askubuntu.com/questions/567006/how-can-i-display-the-list-of-available-wi-fi-networks](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e151c8b4-4202-40f3-8769-5f0ae166efca/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGWSWUYQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FtzhV0t9vgUxInUjcwmiEjvHk2bE80Zxf1iVQmEY9GgIhAIdOwoOpUSi7qLUv%2BWuGLTFoTA81G4%2FPUkOskUnQ5s0QKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXxT9nm3v6zlU%2BK%2Bkq3ANucAZNyjcNc2i4HPXqH70DKQF3jGlis%2Bd40CxAZVVTZDUat6tV65QDozai3Rql9%2BttIscQe8bOnFeXO%2BSN7q%2FpLlex68IOxxfMbxRSMGqZAljnNT1b6lc7s90s%2FCvWJgxJTHtHJZH08edJ1Xt2afmzLgqzLbrJZ5zCSdYL%2BI1D7Gbn4xkFoFiNVAsIBsPiuUk3XbVW5jV5FRw89wk79czrTec2KMGerQYqwaKiYSUCwyiTfXPYj0J9iGCZuJcXxO0ZrBdF%2B6NfaGB2fh8Y5PQR66K8z25k5ViiD7Oug0OY3sGeAD4AgWvOCo3%2FQdSuKdaBCT2RLkEKZAZdi3%2B0c4TOQzC96bBihUKMtGAxYU02srXYxifDGzFkISpBB2ajjR95XbEegmQ5Jj7%2F9pdHth%2FOo%2BuiO3FcfxgiNshE%2Bkbu9qgid8BecWj1hfeAxLZn6XmF5ViBKQSJTTXvuKTtXhIYo%2BU8hD3vmJE18moMK%2FPdEZ3d1OplYVjXtzghvMH6wsxZu%2B596X2j%2FRYBiLOSh13%2FmM3yWxNapsdCPCihCm93cRWJ6qkyu55dL5kfFp37VZF3vO9a8AXCy4zqSJUzDrmQCWygixuaorpDMcM%2Bqqv0a2MdUU7VJBRaDvBz9zCXnr3GBjqkAefJCDKcQXHxUSwTH7r3OfWo4PFJZhI%2FbA9eCkrD7e421Ef%2BQk0oaW2XYjmROEb57BH3gvNpBlH33kryo57sF4wZGq75PhxqPpU4hL9KvlmlU%2BW8QzF3MfS9dbHhzRQwefy684vs%2FIhzuP6XRer1LTLlznR58aO0bv864EJJ3ch3HoPicNOonjvV6zOybrFBLnXesVwJLqMLRcPajvu7jBTow91F&X-Amz-Signature=96c281d94a687ebf3eb1f15afda858c2fba50409f4b73750585279e4834e11f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Note: for Rose students if this is the first time connecting the jetson to eduroam follow this [guide](https://rose-hulman.microsoftcrmportals.com/knowledgebase/article/KA-01010/en-us) and register the device properly.

To connect to eduroam though the CLI follow this [guide](https://wiki.ritlug.com/eduroam/nmcli.html)

The nice part of eduroam is that when traveling to different competitions the jetson sometimes auto connects to the eduroam of the other colleges

{{% /alert %}}
