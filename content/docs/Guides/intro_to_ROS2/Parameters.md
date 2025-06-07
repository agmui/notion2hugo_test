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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z5LHYZ6%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T170545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFoWjLbn%2Bqs%2Fum0jh%2FWZJNTqRm7yFN5LjjTGvS111L3UAiEAtglLrJINutbCp2S7ieusxVPlascTRfQSRcp84qh22cMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFzQz2ZalG%2FZrCbwACrcAzGeoKztUH48vTa5jTfyU8ITwOWetfnry8%2FB13nLgruBRBh8QcQfciTy9Vo0rtI9hmYGKLroJehPNkyO6osxjG48fTD9FjthB%2F%2BvAKkqPYkVufEgPhhR1PwqI8fUv4aqrK%2FCCb1hwwRI1gmEfVFeP6w6FOW46ICEGh3LXCyMYvP2z30YKGUcSroU1Jl%2FqwvQ0hEUMdMhNXUnyirbKIutwtEZNVeEh5Sab04ppdBW6Z%2Bl6k391l1jRuPYCcnnPRDxvD86Vu3CXGqOazVr%2Bq%2BzWGztY5iLHpPIrrK4IphuDxWueij8kEDm52gaKIxt0k1FtW3GnUXfFeMMvkYfxs8ffP0Sxe7UVgOPGB09tv5uPSalcFfv2akfX9BbVUbDXlGl8dFRYBCzlIy%2FWeXfDjjAdJzVtZcpttE%2ByODdJLWA6I5OZ90fFohzoJ4wy6m%2BIJ2Wy4Jsb3ibK9Aj2OxM9uq4dMdE9TomHQK0WbPGJYyp1QepTF3E5cGs%2BPr%2FKxvJmCoN2fn%2B0ENIwz3T1S5lrkbQjSs0WdWE7hu1Bl%2BW11FKMc1OzdxBpRVTLrQKKS0chpY4KjCPfZYmeYCqvbjdbjuaCOiKLZ3b6d2YlQMqPzyYs%2BzVySdOrF7ZqEuzbuoLMKuBkcIGOqUBvCQiZEL09ElzRNPAA3r1249eFnkBY%2BOhVqsJxH5Up0pY3oF2ms%2Fd9Bl494JXMMjyWmn7EydsP%2BwOpHfHWyITROvK4LOA5QnPXb01aKOs4ocVBTAWk%2B%2FceOynhnY%2FoxP%2Fz%2FfEk8i7N%2F3EwiQPXGcbgesN1fwKpjA5TqWiRyzlyPLsqz7gS1n0vPlE3THMMuynz%2FJgd1qo7%2BfO5WUKVQfh4VLi7lUu&X-Amz-Signature=80bed4e825910de4033a4f1bf1ccc86fda501c4f21c258a84974bfab11b52540&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
