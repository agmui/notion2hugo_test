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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GUL6YY%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQCJGg2cK7bWGRnbznvq9rTuHl4dT4AbeVdZlcuu9JoCpAIgL8UNXHu5TTOdAxQ%2F1Lggac9qttR7ak43v%2Fdx4Kqk3hkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmlcBKt8M611l0esSrcA5fZbEssCV8blcwdLEcL9ZOGdltdN0gdMv%2Frw1HJGNrw%2FvKntBXS3Qj0O8NFcB%2F9gt7ctm%2F4rwNgHyrfUAFDv5EuH1UEpApKwy%2BXMdjwUCY92jRrlNnYDVXPUEZhIbSI65jcYuoo0MdDRUR3yIrAXQ9atQvXlNhXi2ZR%2BvTI1jpAvMkeaVSlJseo6cwWLV3TjT6jJN7r7mOlj1MBxR4B%2Bnmy4XG5iwZWIInkojNlfkUEf22y8p4R0DFcuow43kzy5gcOw6JN77fAtBc0jcxNpQueKMut%2FNM6hoCb3J2UFka561TZ2Wq3W3KZCqCIiLHESzF3KFyHLC%2FAmtOVbQk7nFPeoZcP3WIRtt%2BZi2rRdKCGYHyMqDHYVHinXDE2ElQcARW9d4sTV3%2FV08L95Z2EE1ZzGlNcdXYYobRKEa4j0lNdIUL%2B8XVTvlspAonqOIsPyelJ%2BNpux%2BnGJQylddpwOdRbQZZrIZaSwrca2ktS1AhC3Mlqc5JsFyx%2BM%2Fdiq59iE5pXDoSX%2BHIxlED4QqQGtIg4YtjmqSE5QQnbueZFRdd4serVNIp9%2BXkOe5gBPHxkiab%2BABEYk2C3HeYQGC1D0xPawf0dLjvKFHCnfIgLLQ61jnuRtCObKM9lUOpyMIeNjcEGOqUBJLsTTfde9ekcdb6ulI5fL%2FiZA1%2FQhhR%2BFAybg1%2Fh3eLZTk3IQk09lQQZVNt8FLJ09%2B8HWY%2BnHexzo8MQzbKmODli5FntgU%2BpGvqXlVPwZr75PSkay%2FbhKV0nNYMzjTZ3aWI4352V%2B0hMdejtMnZHmXEWaeaqlB6n3E%2FHfpc3wIrTu9Q7zMXVCP8OxOoQ8d0HxwrowFzWsXHCo8%2Bg9cUI9f07Vpct&X-Amz-Signature=b89f3735a01435f7800cc7c4b84009fac7d3c3e8adc0a576d9534a3718c53250&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
