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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CQFRR2J%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0m%2BQsMdhWk%2F3ud6jr5X3U7lVh5OdLQ0MmjdnAFTZUOAIhAJd8KcgdUxClrYSYYMvJLqzHi40CrZMbLUqOrUFxtJqzKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0MMKwitWaqPmQF%2FQq3AOSWVYJkKjnNheaUVddsHFa3%2B3pVEnxwwyzUW4cac3%2B3KR5PjFKLEo3dd%2FknUdiwUbGiDEdIFCMVe5CW%2BkSgn2rBnc4%2BIgfatPd3w%2FUMANOCF4HWqaeg7gI6Pir%2Bo9%2FWIfiB6%2BrqYtqQdo%2BMDd4WPNroh26nRnYlAhPbTj4xY7Y8YYk%2BIvu7qN6iwhv3oRxggDAWsZuhSpOMyRKRDeEAxQoHvdNkj58rv8bFx7ug8u78exNGS7T2nNOu24XF%2FRvkVjTYUl69iIaQRnYPwIKdTN1niB8YZV%2Bf9BmC3ffeEZJSHqClhqb4kK3poZ5gs7iZCpnPR%2F3K86XPOBKBo8HlrnYzINp2urEDlrSPWDNpqIUDt4nJaoZvLWi2uIiDUH8sZX52QYS%2BBXzNDg0GMQyLsyLRuL3prynZNp8XgqTc6%2BId2PFYgSKmO1sJSRN4Busu7QoVcrB7%2BbO4LTXwwZ4gtIARRsKmpYwF44IdeyfrAa93IZ%2FiEw7%2FBgzZeDh2jvcwMcnGALi6Qgm6PNezOEvvF1JusQSgN29GzVOMx13A%2BOPhvTDZNofMdH%2BL7cwjTnfC%2BFWCrd6m2hyJNFv6Iod28OxCMZ93ieQ77y0BzOCjfIzEofmq1mkOfsajpgmpjDQt%2FLDBjqkAQvBnEIsClv7RWleefnoFmDHZmTUvsjPa3I1iQKMTE7e5PiiZqO0JSyElc3jAww2B73fr2SlU%2BRd2CG10HX0YYejnYUUKpTa6o1UyWQ2pEigglWLeTxwmSZqoBwgbskPp2wkppLDR%2FfE7l3vLG%2B%2Bfjf6tYa9hFmFzfF%2FzQDxK9CjN4DKAoWvAavHUJVJ4k5D7XXfEoRqpIMhM5he7dvbpUCt2FWe&X-Amz-Signature=b221530762e355974e87a5521c985ee168c6f26e531cbbe3aef849d7d3450b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
