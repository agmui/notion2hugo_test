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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RUIP5QO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIGJ9Ts1Zx%2FQMFA2JuPl3arAYAPZcV8RhclXZEi%2Ft7xyyAiEA%2BdCfo%2F%2FZeobrXTBXBagQ%2FgryJ7jTZuWb7J4I7Pcf%2Fr0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcVYqFVPXmUTeZwTCrcA0iqTJuI3ILIiwzsC%2BSWMFTG1p4ufYDrbuu4Vto9iPAHLYYG9ExlN%2FBEnaR0gbtw6R7TjhIwl0eSw32%2FXtnc%2BRJpoSxKVbe2TT1TUDbVueb3b6bbnH7XZMo0BiaM8H5g13tCCH58Vbd%2BrZEGwXIekMOkLQVFLhbx31xaLadz%2BVKafWYB%2FL4yyH%2FAYKXZN8uuoJn765b%2BXBpIYbS%2BlXB1dSUPXkG7BYFAL%2BYTObJCodrPNf%2FvMP%2FlpD5kBleJdcsK%2FMxUElv2MhBaZo%2BfyVunqCHcNTWxBYyb3R5yUb%2BW3ZBUybJQGXLQxcO%2FBqD6Z5nb6Idt9looLk4PIXrPhlVxLoSFmOctrM9hze74Z0l2PNSqviv4TPZiXFIXH6YjDI%2BnZUeoqOUN2CAMld%2Boa7nvlcce284GWVCx0AhnCGoXOrrKIjVfDNrEGugl%2FpgU9s7OEldZ865hhGMzmLdUaes%2BoBb90VEYbuHzEzEw6GSjT3IlVtpHE5PyFJaRZc3%2BsQ9Yr5gkGRyYqjqwdHegRHXYieWXApyQt3GFnNPTBRHYq20Fvi8gdUAuyuRtJ9vcGCeNvk3Wmql5%2FLTJWTYuOXQl7Ar4SzzhGbQqS%2FCYCAv1ngCiLVZFHFsnxrPmugvsMJaqwcEGOqUBegG6HVzu58OQDSi9VExXufzFj6NIUIzgYY%2FkzFMQ5%2FrwdOfdHoV2dwG%2Fq1EgDF1VKCH2EouoNd8LV6jBvtIENnJ6nH9ZW5fZIexdlSyPQWYR4fbfej183uCom2Mb897Q6lakaF6TzQFNX56vyGwby7qd1YIOZj%2FTZL9xZuhV29ocOhnaYis2VDt8xU1jblOWs5O2GMYPePcFpQrkhDcpp1YLvEHa&X-Amz-Signature=93ec7876a125a6ebfb64c391113716be6e9c6a3d73eeba7e1afdd98f9828b977&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
