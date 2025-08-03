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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNZQUF53%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFWRp%2F1nvsqx3u1trsVGwArpPYuUaXEciQuOqdVB7w6gIhALxxAyRZZXrGavZKgZrqC068ZDnpSNMv8ft624JgL%2Bj1Kv8DCDIQABoMNjM3NDIzMTgzODA1Igz6HvDw1ggokE1s40sq3AMHH5VoqJI9ANULLez%2BblqApVxvERnf2k%2BUJqiMTBlsr4P%2B9eK8JFWtW4yDS6E280C8gnlTKst6Q0NX0iWdPLEWtmOyPwDIavWIBCzYA0mr9ULA8x6nYwwAXWZipGQaamcsxvehT%2FGohsUnL%2FQyxiUdNhV%2BkGfRqLnl8W2P73JEvTtXCEdsy%2FIZ%2BUbSUa07Rfte6%2B245Xzv%2BRtEFeP1tK1cOxw9J4c%2BcK2HRyc6KEQC85JszZeZ%2B6huInqMIevpwDVj%2B3FH8IM334BrwY6HBL1nhC2Ch6Mr4RN7Fs3rXR4jTSzRoGmsovhYY%2B%2FfQ5ls3s0y7UUnzyWJw24Vcm1vTAdVBvE5OdHkYGUc6A1V6zZxjtHXA8JggYDtWQ%2BfvC5CxL1GiEccdIQeGfIDvavDO1R%2B4fVK2EjBpnAGSmR5yeXMG7IJCknkDUh3jPZDWG3IwKZ0LtKjTrUg3s8KuyM81UE26oTxhVVrK71AlgGwQreQfWGikQMUmU1CeOh3xHo%2FbFNjfewgfqxjwmUhBroMui%2BQmKAGsBfL8AwPNE77YBQgsxcd6mMLk8M%2B7U1WtYob1ob2MbXhZhLh7BCAXuKtHvvem2zd35l8jahFNxja38fdKsRwggO2FNNIhXztDjDjq77EBjqkAdipFv1chYqFjQgmkkMrmFLkqsttFfnngsR1SobEZLXUYzVzD7CQ%2FrglY7ialzlqgP9w95VMdZP07xebcjeu5Pzh2%2BOic3OBnijD6jsOCJkIDTYM48UkOKDX0gAUd1FGfTAnUMzCfiRJyDmoUCoOd25qU5UTO3zuOLgqCGhT5r35v4QRXFYCa4LAJksvk1oTDIRXYrFNGTvFtXNQSg94D1hHVZT8&X-Amz-Signature=a376fed5a85b63fb1ea1a0e69870c28df2b5c560cb34ee57285d14649e8e8002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
