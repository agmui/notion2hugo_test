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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRMOQ3K%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T161042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFqnGJgcPbXWP4lqFDVkIIGsAPvtdX7ftc2%2BfM1cq6H4AiBDURDaW2PHSTW904CRUARdKBuKd9C4G8w1LF7UuoKPmCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMTUDFX39%2BNCH99vICKtwD%2BZ5MM5iHh0VAGGMx5IF0iB5cyly%2FvjIUx0jJOgtDk%2B6K8UEFrpMYPTKMMhjzyF%2FzleM9GGeoAmqk7nut7l4ZAEMToppc8qHWask9riLnOhLv16mAkQ212o9brHaq6eMekgSDG8EfzNpTZbTTEgGPa70%2F9VwBmGzCZcWEruybKBsimllfO64g1N7cOXqG0oI74WGok%2FpXKqBJ%2BzyXrOuEM9CEOuVHc4KbpdrC8Lb1OwaxAn%2F%2FLa2EGrgkklTUXZjvlUvtMLHFN%2Bse5l2y4Jakd1dUsaR0MD69%2FXnML%2FfA5e%2BBjW0eJtwZ0sjkXGNVZRHBFFwcJpimhsmq7VrvLWMgtqU4jXyl3Ch1DIYiV6L%2B9qvOlUTTT1kvIzddVg536bfN6q7WbP7JZpYNsaxJGSzCFn3OVH8KEjPoali4dTExWvIE%2FlspDkOpvHqlju%2BiCSgl1rifzVjn2RxNX4sfxozdw9kXB%2BNnP2nxNAXD4nAnctDShJ9pRPpzSxeFtwI%2FEJByyeh2gLe0UBL2KU1eNksmv5MY2ZVJRBTuFhLaJTP0DVY0LUhOkdFrm9D3QPr2rXo2upvlD4SCXYkZrynqH71VmRXC6VCdSGUFzB7GbQt90YfOoR9vd5CJ0OfpQWgwruyfwwY6pgGuNnPcTtGsNHIix%2B7HNsWS6%2BpEl6%2FuRyq%2FdmLCQCGRnrrLTFtYzWqz4YkF8iE7ZGe4mz6HUhJh%2B1Px1uiapl%2BsVEWYBUYw78FtK%2FTwrh%2FOXmoL9RX1BTeAfBALv2KpobY62ClDuuFfH2Mo3lpvz%2Fe1gIVbltXPs5beFykHBMCBnoUFBCMtz%2BG1zP8VilpSXOR9kRTAtsUf46TS7H72tqGzDRsFFUWq&X-Amz-Signature=993e228f2d5480e2218304b48463b3a19c8dd8dde2543a60b959cd2751919be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
