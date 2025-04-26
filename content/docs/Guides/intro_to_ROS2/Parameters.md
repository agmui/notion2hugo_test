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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3BW2H7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqiacuQhZo18Lau6uRt5UTitLTiFOAIk9IHObCAMrm%2FAiEA1x%2F9p%2BmHRotzjWcMxoAuo0jXoZaB1EkWzogHAPuTGiUq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDFzHYULs0r%2FCCuoXoCrcA2Vkle1NTp1MkRRP2NLsC9dTBdWGwaAVqDt541M4WMBprWSJJkwYMU7y8L%2BgpV3jo5%2BH0Ow%2F%2BnM%2B5y%2BhKV1KC3RqnCrNgJmAOSUw6GyV2%2FLc4MHqBoFlGSGCPmzTqVacaVxsT%2FsrN4es%2Bas6oNm5CqQjtDtvpcS3UgAguma8MROjrGOA9WZUCX%2BlEqE3e3TWSLS%2BzMeYTNmek2Lbr3cDtpjPR%2FeWP29FkRKRZ9Gy2Q1RjnqkHoaovY3Sbv%2FanLMCAEdJOZFJ6C6%2FOMj3U6XN0Wn7cXT00qYKU7f1iAn8wVdBzRtPErU0eY4tpkERgv5Sg8hathRM2u%2BaCvu41RqNiWBpdXAUOM%2BtEbXqv3mf%2Bjh9gfvThAQg8xOo4SqALyy6%2FRkOoGgJyASc3c9WUGjU%2BgUlQd3Y4W3r%2BIFzc3ZIVRq%2FDw89yeHr%2B9Gx62pXxjOMjswt7d68jPW9cIz7yZ3sFNd7O8pfvRcIY70AXxeI0cKDYyMRj89QzfMnw8E665%2FL0vPDQyhGa2STLcUBFYKxxEZ7DsyFjLRAwvjc6ZEVv2zNNPnYeXgrTckAolJn0TAwhxx9ymLAv96qJ9RHKgOnpXzaxEs3zVV%2B79BrCrE6S72CEWwAMlD2NGRmsIlAMKC8sMAGOqUBjhxD812VfdjrEoUjfXquLcJSAbnekhmEpGFaIQWHJXB0E3vleNjxB3zszh%2FK%2BZQ%2FuchhedmmFF7Ov8QVom3A%2FzKLgjFe9amlURrK5XAmuGF%2BLcEVawk4Mr4pm%2FAfBa0R%2FyQhX5vHUz67vD6t%2F0w9HmyfLfjcMfmItqPB2fir6LDbh%2FC5f0I3PycEJIyfJv4dpu7TcUBZMrzZmeUxTSuCRgZljkzx&X-Amz-Signature=2e3e4515a152fbd6d5d77590bcc7274ea0275852cb3da500cb48c433e7f209fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
