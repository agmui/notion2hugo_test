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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5AGP7AB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIEAS%2F2SsuZyznbIIetjVLUpedjOU3f0NbA7bZAV%2FGqIoAiB0h%2F1A29eDN70BzaWvaJIfFiQ781GY0QjWpRLTxaSssyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWNkLtE4JXbiGvUDcKtwDHJERNX93nCSoy%2BYijAv1DRyjTJYk5OoUwCo%2BYphxgm%2Fnsy%2FXDGk0oWIpynKmjS4THHird28bt2ljN3p%2F6lzSLCmg33LUSa1vSkhGWXWKNKT0rO%2FXB0GROE7FssGXm7HUu%2BxOgDZevGxfVhgcCwyfv3AfR%2F%2F0ZIOBSoraADPGnDczMUA%2B38SntFzk5j%2FEkwciwET72wChbRA30VQnA7lz%2FMxxH5ojxYdE2PrVPVXQq9ZRDN%2FNJ0JcWazG362Yg1Hbnj7WFLkXYODZ5D6rxLaBWpewa1A5jdYJp%2FK%2BFMYf4p30uyuig9Zy4R25QpJlhDg32wv4SHXNDhqtddqdSs8IDK9195XDfoHXEOIjoPNmg4kA5JuXIsIuFxLb%2Fsi9j2qYR3h1jivgERa2OIaukvc7Jx1DWiAy4xpyGMsme8mGIfbfl1iliFEOEjyZ%2FCosyRPecvcf6m5hask5RrcYIoYkU0dYLM8ppujgAHVEij%2BVYcXF%2Fyfm0fkU4Xv3yZ3OKzoPuL%2ByIrzIf1t2AgzqIpXHYF2ZFOzvmTv%2FZg%2FEcRnIheheOArWiGKTH2TrbvGKZ4ePlgB%2BVzQ6DuovMg8jFRO5gHYN%2FqC7khiGHerSza2udmlD5NTAFBCCq1e3zTQwn42xvwY6pgG4Ahxs9oMct7DNsDAEXINE4dY62cHrY5S10aUti4won2Q%2F4EpNTtYK%2B4HaZJPGQZYmlfOYWXyYzM95gfxtH6cybS8nRHnjIosHUnaKX3LI8H%2FGcWWH3ucyYBP%2BRJC5ZCimzcEzyy3iyWgroxFvO8mqXE9eneaiKjri9kpoFzTR7KOjDRATi5778y5pM5datLLleDE8O%2BzuuwzPye92Al5I%2FAGIknAq&X-Amz-Signature=72b5cb2fc85da4e5c13a83b12ce8ec45b8a6a35b3088d1646211568180b64b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
