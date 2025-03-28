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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KBWJNS4%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOCNLDstlcChZ3tZYJ8Y77K92o1ryZAgvSs3QicnTF%2BAiBx%2BaDTPsy8klCLhRtpg4z6xeyCju5DJnZarNfdL1Iomir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMsC6TSbtwAzZfELbNKtwDN0GalEp6poFxxf6ce4pEp5Ao4AtVeuhJw%2F3AtM57N9k5EDgzC6OzFMR%2FlvRKoh3GH1DkxHl7pW0g5MM7e293npEbMi9tvs285NnAXOdI3OYGRHD4BE5Hm30kOmL2cT0efhrv0M5EsGVArrHC2J5DkyFc5Q8bRjqW9q0nwsqR7rEQ6cBq54AAish8kzcY%2FNiIZcqR%2F2AQgcCrtpMoBYwwh1schiilWESsqBZqOYEX6TWzW8H1h4DSfEtT%2FKE6wd7zt5IAW3dgqig97586jTQZArWqCnbPf1KM4LdUVED1lPxlTICxev8gtNEEt%2F1JR%2BgVg%2BvNXcS5YcMj%2BjtvOckjCWzR%2FPi7zHMM5baxtUpI06yQrOw1tVmSC6qymo%2BLI9AjSvReqQscoMa5XShd1alU%2BdE4Z2lB5SI5dSJY2kLZLowI7e2Wnje9k3sLkmVbPiArJxaGyTPXsPq6hSTsm6FlZ9HOqgpFUgCDWze8ceBLgs846iKOhkUDcSg11iarx0x4kCLkz%2BHzsRNtM8%2BZLeaSCCBh%2BPEhiktXjvPtoLuVafRCThXjNRu1qI%2FoNhy0jvd8jz35eEmDJz6lbV2t4RYr4Xjvt2h6WHJqzcwzX%2FM3TnrJRlfMGussiLNb1wkwwfSbvwY6pgEf%2Fh7v%2BH8%2B8Ocd6rkxUFGnemB8kJ45U%2BlRsxJJ1Im95re%2BsUrqjxnil9pSRojM9aC9qts6pEYpgaQljStjfkj8RFl9eh91ZtCl7mhTt9KDyD%2BUcX1ryRV2JY0%2BT%2B5LN3VD%2BoOuWuQFzqe3r5V9HWRMfVOn8uN1TgF%2BVjDafxmqbiD0ab5sNXjW%2BN1ck0R%2BUHZ2GuIgksRgP0gVxYcDYSYh2RbyMvHS&X-Amz-Signature=3ac461fbb3ed7f17778500236635bfc0af2ab5f07a14cf32b7d3cedb51dfe236&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
