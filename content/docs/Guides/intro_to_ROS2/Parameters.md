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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRH3JOM2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrJf1fONPeE7kEBIQPMS0btNXHvS8DAcq9xFLisW6IsAiAHfTNCkH17k0Nbgid0oKlQFme5Oeia%2F%2FO0s20Y8GxzdCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGsQhqDJdsd%2FcHvxEKtwDh8G7zl3GsiB8lGzO6g38j0Pp5HhhaOkZVIU528NdTrsLw7ip2Jo0veifb%2Fdeq%2BuJ7ZwmYMfZjncSfhwwfqDjNXuV5Gc1vXMznB9bIyig1xCkYxgr8pmKgZi6XgmopvH7wk9f2sOcB07mk%2BR9I2VTypcV4BS1wYzPYgh4VVkXsuEGcZ4oCWuRGDST7de05t%2B8hfXrMDutxYckZrNAed9mLi18VdYtD1Jruxh0Gy4qIwMITnLc9ASYx5myiOmr%2F26wNFz3RMGInSbnnv1f2yOI%2Bwr1jaMFrABDZ7%2F%2FK1JMQEnZOxG9fws5bJDBocI59LydjmgE25hyVlCBVemgU6B2AW98KCgy6OCFsW6flY%2B66ZhpLJ33e%2BJ7xsnPs6ma12QOEqf8wAaeObxEAT%2F8y5TLvZZPvA4D0PUik9is1%2BgULuQfX5xvEeBakzjmtY%2FUs6ngcIjTarRI7muDsa%2F5dihKqzwW6swqe3U63mDHzmbxfRcVApY8o8irgPva6JBsud%2F79uQwCUYsnlbyPJYmyw5xVYVF1%2BQIb31b1sSCn1bFVAIANY10XiGPq0uNFzrqLGJVxz%2BO9%2F9EBQDf1G4vt9oa2ds0BNGSEFI3RsS2oECZ%2F4MaZdcJZUIMeAGjDJAwvKaVwgY6pgGF45K6RpPv5oDn3I%2FzRS9%2FI2MZQOx7jmHwAL6g2Xgrw%2F30ckcXPgOCTGXnIOnzghXlloXtNQsPdP68VgvCaIeo3%2B2Byhfpf3oZBu5QgIxgwJyz5WoBSR2fP75Y1Oea%2BQNtOvYCABMV%2BcZpMcBPW09%2FMkjujPS0oHCS%2FkqwP2NU8%2FykM%2BElv5cyVKkqpVuFy6fRPYg4qWbTjzHQygmdsNODpeaNQIsl&X-Amz-Signature=d11771e19cd97c763bf95b7dfa49618bd5a05ef8d57768bfe5c7acf427b61eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
