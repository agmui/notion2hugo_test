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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634E6MHIT%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T190316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDOewzcl1ZrkF8dRFBbg31gwIiQXvvyq2xetHwnoTRTHAIgfnnBsQjRAoCFa33o2Se5wrtRAFpzc5nLVPurIypYKHoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDIlHnaRjBGCSitFt1ircA0NAgOOHUOahF1BDqNdCeQ5qD77zFVn1pgtR4Fsc6a%2Bpxp1jh3sQmhodMOidYEBH9ygyFtHrRx5V4dGgYR0%2Fr4PnxQeml9p6lvvOh%2BY0D4LNoG3asqpBAzSSobLn6Kucr%2FwrBiU2vFvMObPQg8dwCP1G5ZSc6sifm8XLSKHxTZsfELLULdUX%2BWxCBOjVA0zJt3S4ZZVuHkTup6nbKuQy7v4KmH7rhgBELxQOO%2BEtpa3%2B5J91tqjFSG2p%2BhU6RJ4vA3zylDZixSGbsUKYeudSUIJ%2FyXzKfnRTxGwr9nMbxjavFcOLpYHGNxiQjeel9vusoLYYOh%2Fv%2FCxNlT601O7gWdPOKJtgCPgGW83FfnB1ZbzBykkxnTPTlIQYXgYrjGyUn8xy3%2FC9CClOOv10f6Juj44ky6wpIoox6kL3eaHxxYvuow0uBWaxSx6ZhQWEgJHC4Auf8nqTEtieUYaOBzMvCsj3bse2IGafSATBkaBNkisdeov5Q8gxLVlUK2ABbedYOtwer9IxgwZC%2FU%2FbkPcxqlbxFnXnDjR7tQnHHbp6kXAaN0G3ofaZVNSV2Ur8WNYS2PDw64tqFY7Q8gB66L8VCEKbnOJrKJnYaJNtVIqidO6tE97y2PPHjv7w0weyMPPz5r4GOqUB473JGgsNSv%2B%2B88nKcxQJmVLMp5EXZ5h%2FW5dVAR7HpjmfObCyke3GfQAqw1Dt%2Bry7bgg2S%2FIdirxroQybvNai9a1fVUMp1wpDw9SQKSb7IbBDOBQ0s9tnd1%2FE%2B8cDYenQiEMZBXxgyjK6x7r%2BtoRZBygWcoblUbY1jnCDYn3UWed9xLQTzFxbvxnwwK%2BioF08YvEaMm1Vols6yBa%2FVImJlcoLjuqX&X-Amz-Signature=4616193ffee1620c72a1925140fd75a1757c422a0ba66123f13cd42e75948fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
