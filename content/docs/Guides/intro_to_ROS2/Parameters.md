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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QPFQHZB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T031103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCQW6wY7HexSTE9U0JNJM4GqttaMR4U0G%2B1ZW1Xtm8YqQIhALkbn6HDQ5jBKAQlqhMhMqktHfohpz92iAMI2wVxIJuHKv8DCDkQABoMNjM3NDIzMTgzODA1IgxO650UXDXuqtbFEYIq3AOme3a1hPHefCiLyOXeRQWRvLOR8ui3VQ%2FNyGdaw0dH1%2BbK4SDEwgnrbN8PEc1FjFWwZFl5XsdZSipdkrkiJ%2BPJOAV8nSzeCqbMssHUBVeqcQrc0KbV%2FV3q6cr1QTWS9FyOkmXTXjX%2FAGNYi%2FJ6Qn6JFHPhjG7FeIu%2BID7dklxmcBOj4ifelr%2FQCCdIZHRlF0s1BNKBRj8t%2BT7idpVm2jQ1N45sm7ooEedXZq9gOSn0B1KnTLqxfi5x0wEV5KD2UhN%2BWGt2%2BsT%2Fdt%2BkhocXfUArjV5hNxxWM3eCm%2BPEBS1vVLkpZKkaqj46dNPK3piku0ORa3QHydwnbo3xJvVzwLJmx8aNsCfVvk4OjZJqN93NzAY8LhiZb6DKL8IZyoWmMDCC%2FU1PcEec8aeKUFASOcTtDZjAsyWE4OmrPHZur6NjbGbLIP%2B%2F8uaCUZmfJ0mQ8DjyhDupTcTFSJHmg2LUBnzU7wFPqw5Mip4gUrVVbb5ZK%2BVfjwE3xPw%2F71N%2Btmu6o2QEvI9CR8F5F6IYPzgjXCdndjy6WtF8d3OLdwGGDVDbJH6XjO5%2BxbkJKgR0D%2B37qeHJLNbFb9TpjiLHXOd%2BeVzQb5swexb6sBNBvvy%2B8rADn9xRP0DxFGHh1me%2FdTCutL%2B9BjqkAToL50AzMdn6jHfwq7rXU2qKEnx3AzHrWWdMSvhTN2BxXtcgA47vfBSQ%2FOW3BdbeJ2lNTuALJH4vQd80DK0XRUfD7MTOmf%2FKYPfGSz4cEgKNVgDqYqrDEpIQCvJvXUGXDSFDdMMyaMCKxRoAuWPWoRx4MnubZIrS%2BD8sKLmx%2FFLIWVP6IjZhumias0q%2FAKnmGuwKQ571%2BIKs7%2Fn3hVElOP1fIjAN&X-Amz-Signature=5328b2d8ede4816f5c1e63cf4967a7638aa63655a7cf94c7caf9076f29d0e2f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
