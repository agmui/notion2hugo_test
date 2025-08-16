---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FH6YJUK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T110216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIH%2FBOyss6O022Hw%2BJGjW59Wc1a7Ouc8SA3cP0Ys79SyKAiEAgOcKeMqLuQJjaeYVBWsqD5Qji3KOqYlFclCyQJyVf10q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFumeK1KHId0iffLKSrcA0PdRrJpoxNmjWc2UaoKiwnRBW6frkQ6bPCunbZx%2FpMEGrPEYMRiDY3tDvKwSzuIP9ROWc4DvgGmXljkmWAA8bMY%2BqgSlfMgSgXfGFi6PjYaW8DNebO89lW1S7VlX%2FStyT7H3BJjKar8gfUmDWgRhrnFpER33F07qUsRGv%2B0zPzA04XZI3j6FcdsXpC7NJ4e8aPKujT6qwwwcxOJ8ujMmeF4%2Fp9m2gcyaNympJH%2FckuqZHxS8MJFVf%2Fh%2FmUHTS8z%2B5P86hqbJdbbTaoDyEj5wYirNou%2FG%2F%2BzpIvOZWd5j0k2qh4kbMm27wkTXiHzFNj3BedJRGKY3MiQ0W2C%2Bis4ybI9tFFeRHT%2F0rQHaSJJjX551ZH979%2FGzWhOCBMoU6pWnCvKgQHJnmBkE5kCMyS6pxjhcSocVTY0MD7kryUhNEJDvrAVIdjqDSqJtbmyEnbk%2BGVUJkaYYd9mmc%2FOiLdvzupkMjJTvPeKi%2FgTnLqYb5MfylkY1UQO4clMAY4xs%2Fz3IibEA9IngYdiSfzVa8%2Fq7GuT8%2Fxm2u8R%2FIoEkwkybLN54oYfv2rN5gtYHa72ulYtIS8iCCWfT87jS2SOeMRrv5rhk7pRKDneompsmJ61JEseWGxkbx0xAYrL%2BWP9MIX4gMUGOqUBqvxms%2FMlTMMjso%2Fety5iDTBMqtMnCpYD%2FJKl5OrSmMgUCFJjWp2fvp4%2B5VPih3rsQo2vWj893jCXY09b%2BkDr08o9ijChdlTy1JkoL9JukLsDHCNAoLj60lDyWQbvWOQfscEoo6SU%2BPRVPr9h4j%2BwLmC1v2eiqxf1l8b0PO4hzxxyQFYJLaheQMZKy0tbhNlf0AsV1V4mSu6DazQWiQkHLPpteYyl&X-Amz-Signature=29c57a90bf3f2fbedbb0259a56cf611d8faa4be1242bb99fd8d4754ce45d6c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
