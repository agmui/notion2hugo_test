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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKMW7WGZ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixppK1gjL4G1mN7BA1bth80RZD3bIthbDFO3Y42cS5QIgG1Cd8%2FgHlBcjl%2B6pFdo%2BV8IebPBnsY%2BBXofp3xzbYvgq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFrNtNWHV81GK5OHHircA3BN09AmYTTx%2FA0OF83nAWAy3IpYqDjIBLTeL9lNZ34AHEjuKbYgJQ31C3WLv9c37r%2F07x%2FjyiStXcggMENsx0SzJROILTb4pRX9yMM0Om3hxBiJUxmaMVzoORiWCDUMupkqKVRMkqQD%2BalblRZH96fYp%2Be538lSCvfWyEBhqFKj0Ff%2B5o9elPPd5bCv6ITXgpmTuc0Pkl0lPJHiq85jKRppcLljgOma3Srol%2BR5GVqqfskqK6naenCchYpdKvvwth3xY%2Fq%2BnXPLV6QtliFeeM2tC783ZixxVllK0crXXqgvUpDyCmLypPFd2eoYrHpSqQCw%2FtqSTdHRpFCgwAgVpSdfvJPyi3TmKAkZDeP%2FR6Z1zicVU5ulKFZPmG5iTvGd5M22JiIUa1Rqq6q%2B9Wh6d%2BWZZiVuxYOeqiMlFAZTIyzjPNPCw6JfUY0MoqA8Q4QyApHpm9s1KbHwsxCu6b%2FMvVceKOJ5hFHsfFqFktv2eDmYg6i%2BJOWX%2BKAVrq34cUYJY3yyoAxC4j%2FHw4%2Fg8844ii4tLtVf4mAzukLgELCb5jII602Zuykr9yir7LSizL7OFy6xntI1mTxfsdjT6CRJmL24a55HBOaahaw2T%2Bpb%2BEzgnbagZFjuf%2BChTRL7MJaIq74GOqUBC96slveivZ8HnM9LXycDi9pv1IQPfJsiXh8ni7nRrTMSh7j4Phmhp9f3RfsGdNmtLg4jJVzgcfXwl%2F8Hph9LbVBwUOambxuqw%2Fl%2B1VHf6wxNYZ%2F1ajkp22FIWxo%2B5AtyAKSrjoN7knk2gEzbpm3gnAm33vE59ZFKZs4jc2dWh07Xch5KIiyAcqYG4x4QrFudd18gJeTTfzPQ2zGHLgoxINa7jdjb&X-Amz-Signature=c5085e1206ef1d49be254c167f1473a576f84d5c2cbb0794a5787c6596c38d35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
