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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BX5BD6C%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T140241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDUiEY8izNxS%2BB%2FZrvlM7iWdkhBwkHDFeCM3DmN9fWySwIhALCo%2B9U3rmwHHK39m2Oh3dDguMbLM2sO0pIcjJhbMs%2F7KogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUeA5isHuhvlluL3cq3AMFgSHraPrK5bvH7lr0WjTv6iWIRc6GYsWUsHw4HLss00%2B7vtc%2FtDbqWljt5sRPCKSnC0pYFLAxjq%2BFDT4Ojk8DpvDgQv7KnXPDua9CAqOGMKIm2oY7P3x4XapFYABJ%2B1qyYmBIn9OZuEHPKlTJ5lsNkI2ikXGP48oZ5bCXM4bA0QO7yaRlJZFOUOEV2O%2FiV3dMQBMqtKVXlRLy9SfOjqfo2j17x%2BbqPJcer5zohh9r%2Frdy8BmpDRvtjJuKD1KGAi34r5FSZOJ0L9nU1jRiTpe0DD65Xacwxwd%2BM0WzUol%2FQq%2BflwlB%2B%2FFdMPcf55EjTusHuFFaSiyRrRppYy2KWScw9oJiIrnmtco7KDoujOjmJ1vhlnqK8eT1BrDviHq5InszYthobFDFLMaYF%2FOJ%2B%2FkavgG5SfX0mNsjfmI38v7kEythLTvujsEZNk3GPMkVaNTe2RSrSMIRiERXzGI55X2sQnQugElQGDoH3G62LhKoOTaNyIeIp6mF3PPYV6j56HXrdVCptDWdzclwAdUkxuLA8rM3Rwx55HSFZvXaF0JOogI%2Bemt%2FGSNO02MQwiPhQNitL09e0p%2FVffKcVKiZwZESMOUPTHpvv0NFu9ysdAeXC7of3CytbIuvNKO0FzDzi6W%2FBjqkAU24twwr7NSs2%2BZVylmMwVedEtZbX8pO3S0dPAprfgvwjCXFCQJ3pJ0Z5mBom8V%2FO13JlQU7C0qzXJwmX5%2BS1QlY%2F4kMJBaqYO0KGdJsBuFCi3LNWMCfwJz45bHVcPfzRksqq%2BYa0Wpr%2B4wv7gphHw43ueE2gZCidFMooxnBhQsuFkIdgiSBjosS8rfR7O6TZ6QZceeDtAcYjOZfBTPkXAa6RdJB&X-Amz-Signature=64e99aa9b7f64c1d30c0b893501fd415effbfeca0040cec6f4f65a292fa0d59a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
