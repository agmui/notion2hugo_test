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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPUOIQP2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIApC3z2VSdj633tt20oCAt5zzO%2BGZxMpQpuL8U841WKWAiBE3fbAviXOdMI54H7s142t30XFl1%2BMYhu63SKUFxZ%2FIir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMsfjAVBX6mYLMRdwGKtwDZgLLneGi5Zzfz8AyQi66vh8jy8w5DvgQa0y51xURKc1tvfTjFNRUGpzFSo73hWcuMTZA%2FoqAserXbgNLGx8plp0L896oI80gEhCeq%2BpSnBsM%2B8eQtPtC2yrqVZmv6cP1DkST%2FYrkKuA%2FzKJGkhQnQtmXTDkDf5rsmbpTr2PwQqZ8HMXzi%2B6vjiAWR54etcHJ2u5b5YzIWJi9j5X2LrklP2lk9aOCmfJOnHhNNOTV0DWQcykPhfNGeFKnwJudIVoMzyhGpQHVSygP0ORF759OrYK8fsoWIPztCnkcvcvP6bbbSqcqDSJz3NlrEMa2frBCS5ME6RuOXRuja4VsMbpESx7SFN%2FdABSuq4WnOd8pAxdTliIyT7Q3ExGwKeK6zJLyDMqz1qdBazV2FsnzNPFdF4Z74z6KZHVLmqVc4BANibl5FNycsLFur71YVwZb%2BxJc5DJHP5RnRA7KHJUXtPNMHsFKs1wsY5UlKx733PIyaMmqu7WPYAUkyG6Cbkp%2FVggqDJY4Pi5GEPwh1WiskPK1RLDq%2BmOIdg0kNlSbTaaEm0kbSH4CiVDnGTDQqpVCDYcSSaCDjPAfBdtFjQY%2BzEOpRXl0BPMc%2BfF8OqdsgznSaAWiq4uMr%2FAkahLe5%2FEw%2FZzExAY6pgGn6HNcznJLLosDLlyFkvBZFZ8nVKMF9kXIDun60C3sRqgEA8Pwv2enYOj7hAuztC2unjo08pug9comHBw6%2BqCymrwqwSUdMMZrdlOi5tT1GiyunVlYy41A93sxai7xsoAqOl0RCK%2FvO1dVGDiZkxx5HUAqXxBthZYOTLEUmWKZwxE946JMYAgB9s0kcJ1tvJgwzlfCQvbE%2Bivo2Ia4iwjM3%2F78FbVO&X-Amz-Signature=a585fdeb127a3792c2bb44b1f0858bf42359eb7cb15a41445d418285b4201223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
