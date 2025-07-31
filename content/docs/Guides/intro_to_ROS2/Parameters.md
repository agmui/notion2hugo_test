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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RNHWPCB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnv7yVgt%2BDhkFDdWYp9UIdpeVIiWntJBoL7bKAVhN5yAiEA%2BgGYHhge0MvYS9M%2BYd3x2LqlOIjTnEon05K%2BEnuszukqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPi9eCyFZT2m3mg9CrcA%2BytFeyU6rUAA7Fo1jrJGe1CbLiDmydQYBcTjH8piWq4uOHcO1yPzTAJ49DJWLinM5hKWEAiAd7ipnYsfpYPqdrR7Wuq0NRMfRFW1XgHFrvD9LkZUYxv%2BfZFNM0UV%2B%2FmBx7%2FbmpXKSRztuNFVYlVt2ujb0hitI2T9xXrkMzcflzZrwpAnfLbUiCbJFVGkRiAgEBgrZp6qxZQuvLxpR68sIgmGsuP%2ByIT%2BHb3VeRUIP2SYyB5OCdx%2BNBFH0W0A5Eo7Ui0m3SIxmy02sQWiS1NS1rXHxqlff7KW0Nk4QWRZqheDcv8Rv7oc%2FXHBjanJvPbIvFtwHBh0%2B%2FVSl12YL1pgCtLG0Zgp9OrtGVfrZXyNaRJFuqQosEFRadWch7mx%2FeRhiM7w67ufdWrZ%2BhLtc7px2LPrJapP7KncdxtFOmhgbRFCnOoQI2zQOpT1SWSY%2FV6EjPJNJMOEJBZ5JicBNpE%2Fop%2FXcMoLMwGXW04DS421H6FOgR3zIcKcPXt73zUwi3OtnFHaECsgM8lffNEb7hsEyKKHtK2hiA5oZvgloFpYz9xb0AfYIfwtnrVgPZNXAbOooJbONWZDGydIwk4%2FISDPUrI9%2FHG2pRquHvIX6j35OA4pD%2FpdtZzAB%2FgM547MKvcrsQGOqUB4zG%2Fm9EinnbTjx2Opfc%2F9C7UpTUT24mNFLlIZV4WX3g7dUjWUSWk6hc0MskkzwHmRwQm8lA8l1MVOhARhocOOu%2Bfs3IyD78SE2OfE38CaoJhquO1Sa986rzgJz4BCqUnEn%2BNCEn9GLkrdtae%2FhPtN15LjtFgaMlXOiU0BpK84HIOc0z5nDpI3i4Fy7z1XTpbgQFa33YIWM6NlBNiPWGqUsCXDB%2Bx&X-Amz-Signature=f11e5f8eb362c0079f078be8ab31de3065fe4f69a622428e0351cc884fd83646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
