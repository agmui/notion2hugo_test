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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A74NYPV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7f%2B6%2BPeAuO3hUkEZXqsAJK1oasUYoU96arxEdvcuJwAIgCcDRevvQ0xiGOdb%2B8F80F%2BgJgZrwU8d3Cdsz1j97TqEqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbXGzROozWNEVnvGSrcA%2FyAOegrzD9TbRa2IkU0MpP2OUgRWbqt0y73%2B6GNVH0FGPDU7HR4elqmOdk6%2BllgqnOeC8za%2FmXYG1AIqz9DuXgFAM3KRspLTKjXMHe7Eo5mW7S2ry%2B7a%2FxKFwdVN6nBQzwdTbuwuW7U6%2By3322QShEhj%2FsuQP%2Br0oiIbV%2BcEp9maoRwYeuLFmiCSMGdJo7gpA2ytSfnfUyXMiO2z%2FuTjxo5iITVBGqyyDQA7CbeD8%2B0Kg8d2jrTr2CgpoRCFUaymFKK2%2B26qjn0SBCy%2B8%2BQvFBR0EPOelnkxNDN%2BsUcWAGE8Y8SLpeviM%2FcZImU04p8t3nIF69cbW4ySMbjmbMOvWHaT0kMCXGoWIMRmDF9ZIgzZbvhqlWBRoVv%2BKsQre%2FlUo1pUMGoOrmxbzDgu%2BeAJYKb3vbgkWA3hMhNqqDAAmvTxtb6cAqr%2FamSHSo6o1ZInCu8w8lENL86Dma6ZwG9OXbiD8BH4pJTGgYi%2BRli%2BJv4ESryva55qpKg4gqSgHqZLQWkQGXMlHqd%2FdaHkxR0eJEQcEOARLIp5fAdfdknKEt64BdT4JvkRYzM1rvxGx24gDerTYufOAKhSudsTMmE%2FjFVFr20lbEljm8nouTcfFkbioO60Zlo8fiZKib%2BMKvstcEGOqUBKjDuUKVIfFI%2Fq%2BHRpnNVbfCyRdpzUTaqjfKvsdnNE8p0G%2FSyBMHsNBo0C7ERG4pbwOabBrEHfSMLt8zeZ21shcO77DTM1onUMYBIIddcPvSigWm5NvIHsUO7QV%2BRcfRzYS2oUJUITlZcK08yDDVPy6gwhqTcnAlUDB4Om6ktMNfjDLXj7P2VumXWwyTCE0rjiq2H18hb7KIrGaqp26NCnX59uZyw&X-Amz-Signature=890f88288bc617140e444887e8561386340aebb8108825c7ed155fec38543044&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
