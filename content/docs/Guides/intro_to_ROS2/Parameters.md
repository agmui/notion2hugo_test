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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMUP3JYT%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzBADGvDSQj2U2ByNQg%2FpbhgCjcXSGdQCpUaMH%2FfJVTgIhALu%2FmuCFhpU%2FzCK6y3Wc3HY6eiOmRvduEYDINRol31QUKv8DCD4QABoMNjM3NDIzMTgzODA1IgwJ6%2BgsX77vm4ak5Hsq3AP81pclscMltAXo3a1RQKFtNk0V0RKgfAYclE4E2K0OHG6xCg4VOAx%2Bg2bc6isM%2FIXrrRkn%2FrkLqjU0mJZZC9dBZFqv6z6t5jpnpCOvnE5fvXARaELm%2FYzKN1xwf5%2BNH9nwTHRfd8Ux2%2FdvJVN80lHEMCMTVQ3ScueulwxqFYMAodMbRPjH9OroaWZsEpJ2M732jEGDHvswPZrglW9RCbAJ0UVlIDlc4Rq4mjvTbtFrgO2JXg4bBErRuYEuIR6%2BsrfOqbAIgvOQUQR939HDFpNNrzOuZLNQVEd3BPvkH8BykaEDR9NBxpBMtlbrfeepTwTqFXw148bkp8BFVREsk5FjiFZk9Q0HdknPfzf4ktE9X9JyCocg4UGZA9obXTty4%2Br7LeQg%2BTDUnDe0PKeaf1oeGVLK89SVGdVf3ijO1wD8Bw6%2Br1WVYNtZC5zZrddWPKwamVvZjxbhFi2c%2Ba1KjmnSET7Frn8wV2bryuTqNevwGwrelbvWpH%2FIlQVaXPQnDUXTQ6fHUlfNBhhTCU7qynURYn01yx%2BNebYjcyqp1Ny4WZPY5ouU7gs7gPlMAKgJB7%2FExCznOJfwkWwA7qAYB8KWQX85te7EUEioqbL%2FQ2lCoeZu%2BLABi%2BdTEGlTUzCA296%2BBjqkAYwEsNhiBUQQtpGiIFIb6QFDRcayEX0sIdwJm29tOYqoiyjAwi3ERoB2t9sh2J3y9HJnrpyFhsZPP1%2BHx%2F3DWMWr%2B%2FlHZ58sTm%2BktkTBTy8R3BwQD9KvX6FmqYu1oK4vnPgiCUZfJNfsTLQE%2B2c%2F69iRMl7mCSTCCuOg3QinzCRApbpUmMfdyKqcPMXmIhNv6gicNzYHhEcjlG1WDvGZydBKA6XK&X-Amz-Signature=f67269c4e0d5474d5280c2a5ea20b8bc393c861564f85e4563647987e55acc7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
