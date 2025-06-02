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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMYTXOSZ%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIBIX5fd4cW%2Bt8%2FI4XvtEuHL8znt1Fv1CQR22HJflBorPAiEAjncr00leWjMJP3dQnNLUWRborPDDZoXnh18nick03loqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0XmLQo95EayS2s0ircA7JycVm5cRCWAd5aNRyv%2FAY%2BGq%2BjJ%2FFeyMat786cFpmTFdfS4F0jNbX2AZT1lUPF1pZhDOGgkNojAvAUojnSacSyl5UoTDgcuoM0vNe%2BWPS6ZHzeSvhxWnt4Jz3SNXABm0iCSozJmaZ9eYz%2BXf%2Faq70xg3w2cHAE4J5P7zKJKkzfL%2Bcks1l00mAwhfVhRyNm39c%2FjnJbb3TSyYiP35NlZ2T1wOAcE1SYoNQz2LFPQ6lwAbjE3HzabI8d5EfUPRtV5gyZWG8mRHgwiwelcs1Z3SsLEbIt6JCwEBad2F87Hu47EI7gt9Hen68PB6%2Fkcx%2Bfy%2F8NdkyhPdZMJaT%2B2FBK%2BKvPt2GfJI%2FoynoX%2BwnOMBTFWtMlStYi3tvR%2F3y39ee9JXZpHA4nhQxCxZJ33PyO5A3ll01HokY%2BfEAnUnmgag3AriEhqNWDT5fQAcEYwBSNq1Y7XWaZ1QdcbNl6nt5y5EozELM1TOcG9RN0D701mAZq7TeNXMVzbIH3SPYCVSQpqwHPcUJZ7zc8d20byj62hsUjdlKGwHliis2uwqW1ACUluLSqB5U53AOqIqEctvmwJE%2F30JGuvSougkbF5MX1ZqbDARsRtMaAlwuTEqkRW%2BNVInUkK6bplPL9Y5F3MKri98EGOqUBNrbeMm68AWNPI86JJMbjuvc%2BMjRRx8oJzdFx4Z4QagDbuMp2a38kqWkoNALNd2gdQF3lt85xjL3iWgEUw%2FaJDxEV8o3%2FviSfebvxkWG7vRQUGv5Jlq%2FiiTOcCch8hbVLgclNtncrilEbbqN3ICqfzzpjHMgH68K0Q9rJKQGGSOORLlZHUNrvoogoh8Pki7k3xoHt%2BvlEvP4ZRrhGGYTBzvmJmmLo&X-Amz-Signature=faa35479653463cb10de81a7bd3d165bd7e9edfc6eb68f3bd750d181c1eb34e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
