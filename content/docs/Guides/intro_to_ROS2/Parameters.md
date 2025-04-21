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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634IO7JFH%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICMnM%2BReBkJBmCIZJT3H8NPPfhR0LEgVi7lAnTT49hDMAiEAuJbtOfJjmjicaJqY%2FmgE1VBzswjePpHI8OVYNdaEa8wqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FwIjAhcF0X1CYkfSrcAwHOU2K0ck6CcmOQToj2gF5HLk1NcmGuzdDeWE%2Bw3GdtGTvM0vcZ4pFqiQujjKgRDytPEnxShPBo6hAHbnY98l%2FJoh9fXCs7pLG7fV99VAG0OpH4mHohhJUsGzvjOG%2FgpuWUnum13BU5WdUF25jpuckxYrVKYy8t%2FsVzXGYhnbNSgVTmz1%2BfsgVpYYNKQYEUKv6wibcsgzNgZe0HbtavZcI8%2F9QTwNOF82XA3T5u2T%2FnHK4fNOm7QMpClQq9PrQkSf5%2FCKe9FDHUFfqpMhhdfqk4ItsRj7xS%2FoaNdWL84NksZlr8NPGAzOlMnE8bI8uW3YR%2BK6nUO0tXhgHQeS3T0nlL5bldxw18lxqP%2BiS9hWSpkCA580GI7L6NSURzl%2FT%2FPpVHZMxgaxogNKm0Hh3SUZslTP3nUt6%2BnqEzxPeBlryI46psyhQMBAt6bAq4Ii28kuHm0rhenl7Ru%2FsL85peY3MiO9TMbODxI0h0y4Yq6rVofBvMSl9nh08VVob1gSuSLRKxOLmWgJNHQ277KhnotfqJ7DS73poKu4kch8Z6BF4Y5rljwRhWCymyCWUEij63rLxpPOQzzphi4H5tFruktEwPphWwVIJOgV7%2BkyZYqHePRoRGzjIDdqcblvbIMOCAl8AGOqUBuXAIBeJfE%2BpoNVwcVnr3XJiJreiWzFifxfs9OWt0xx0Lr3X5Fq3bzNK5FN6mhVfeAiYWe1Ws0nJO7LhOSJSEMVoeY1jOpznpUOVuH2lfgpqR4PeMuQiY3R2qqhVTeT%2FTc9j6J7qrXf3lPYUaINHkCI6HA9nHdBBaxvZkXg1yvrjMUajhIhxKz0eBnLBvQn0OkKYOkujWftrK1Kd23iQQ4zr1BO%2BM&X-Amz-Signature=87ba490881defbd784c93d906760c6ebdda406d773eecf28d1934072684fe8de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
