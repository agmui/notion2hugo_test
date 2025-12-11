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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK5P4HNX%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIFNHELHwMRvGRtOHm%2Ft35hRv2jj9WMGn4ogprhWn5rxhAiEA%2BPtJ3JfO26NHGKZVKGFw14Zrg6BgWFsWFVXYlVweCeUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwEMimCjx0KVR%2FuBircA%2Bhxa7a%2B1UNxqIYoWLXnit%2FSmos0cBLklfQs%2BJa9KnL5qtokUddjXDAear8TCE6RAQVXCFOvHO2Oy5bQh56z8SvVMriHcf7KBNSNpZ6yu39euWKn%2FnkT8KEoaR0%2BmryncO%2BsUhviYNaOL4Cjo%2Fz5p6iXY9XzlkT1%2FajXmBUG%2BbjJ7aWoJSuyYqV%2Fe%2FS2yQOcj03metnT3u5X1Z316PkMneUVxUWrngczlOruID8x89%2FQViUmUGkhTanJg993OZmPoF9c%2FeAFlkGYH7OdjVQ9zm3J7WiZuk%2FcAbfcGycAgLBJioWJrb%2BbSPE4Xtb6yR5jiDYxKOikOl25%2BlfSlF03ERNzZBSndTDU2xazLAU7%2B4pe6kt3wBev%2Fiz2Q8f2MXPaW9V7Sv8UQ%2BuClKJKtwRE%2FbbCfD%2Femogm3XaJUVlrdWsw5HU8hTnMQKhu%2BtwKL7mIRfAXdY1%2BXZW00EfsD5mOVg20DhI5H%2FNg67bV1CuISEnZu2Pr%2F9tS%2B8BNU%2BHYJan3tV3BrPR4AMk2MNxKz0jE7hLLOTFuDfFTNkJoXoUKq%2FmtEyyfnhw7NxFqt9ZTOB0X76I2%2BxM%2FUbmuagCIo1Krq6RiwfVKdUSuG4w01LVIg1y6cRthWAeezM7pNRuUML626MkGOqUByJyhFpxWh9j90e0wBJZ0STJjuBGs0ZxEEKstytCoums%2BJjFjrdQvwD8VhNKj3slrmmf35aGKVRcq6ue5Axs%2BiNy%2FPZp%2BjGVk8kh91fPxSLbnLR5my27pikM1st0CawLhfesXUNaXRi1B2i7O3YP89FYkPrCvNhmKj5qFwB%2FbMRBnFgGydjArDJRy1uoAv6pfnj8Yq0aleQlnyEwBLAAGYaY5JktF&X-Amz-Signature=fe4020172d3c5cc8ac84d1360d9d3f48a8125b4089cb96a7b703b496b140d76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
