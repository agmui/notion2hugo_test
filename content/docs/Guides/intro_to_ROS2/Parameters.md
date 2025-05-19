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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHCMDO6K%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuFz37fVNBaQJTpc1iR1KVWvVLcchjxN1vL77ZPdptmAiAsERViuvvEFYEKdeZi616saybwUeXQb2%2FU69htMrUK3SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm1EdnQdxYo17h%2FjRKtwDpeZadWDxQmTKnBJSpVKzvxpKMEFY2%2FwSX6W1Atk0YDKlL%2B2H8eVKYbMoTU17%2BR%2FZFS31u29NcuVT%2FsvMfuHPgrZmllNRHyGdl3sg0RjzCaOMBn5swhuwK6T7EJgR%2BSwUJABA1U14SRJrH8cLwbR52XF8ZQvqp4K0L7mR01VaIvXuRskP1SE%2FhyMnwyF73sTP%2FTGm1ufJBfiFrBY%2BV9jQvLN7IADFopH5Q3929o602c3o%2BMotnB6o0SUKio6vuTymzZWzuG9js%2BwgiMyqTvTtwJnZymbGcEuwZ5d5uWCdcWZgxDMril%2Bzij8bfrPO2FObwm3TRNTKPT0ng2fPscPgmD7V856McNDaf7qWi30QZMzkwjO%2FsdwV5YhKt27sCCPzMRJnyK2S1dXCMXjfRmr54yTEKZoaeoT8PZxXAs2zIMDuSxVJ5gqVZ4cEgCPKaCUvdHT%2BYrRKZK8q4vfz9WxNNM4T2bgc0DNfi8k%2BsVt9R8fByPVbniiFD5f%2BSuRX9IG6HnZAfuSgoBhsmnRe6u3XhD%2BZsqq%2BZR2Y2%2FB7uKTF3r3YRNQpfncy9MzJD91h859haOLWxLlB6jfaFLJoNzjVBgRlAmgftMk9SiaEaZaJYvN5gEDDHEz8YQB9cy8wm4KswQY6pgGsCjR7WGMC28YleN7AufYzjBCI4%2F7tGUgVZwoybEFj157lCJk9eEqu5yliWgJb029DzbVFK%2Ba4WDUbvUQG6UnGwSQU36E%2F7pwRIyCiLSOW9MGYSWm3ih8nHd3WSX7eOXS8AP7Io%2F%2BBZL9U7WO5gYxJOwiRwfsk1orwdtOvRlw94X6G%2FI4RyfsD85w55IJywpm5RmHBFscdmseT9KaPKk%2FuMUk%2Bu9jv&X-Amz-Signature=a98a585f957002ec30b8bda24222ea5df996c223548862f8e89001c9c3cd7cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
