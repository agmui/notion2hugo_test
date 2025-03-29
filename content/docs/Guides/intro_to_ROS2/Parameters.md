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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4VNAZJH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T070741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFOVM26OUrylvMcUSwtgjVIuw0x68ZXup9Ljeko%2Fc%2BkSAiA5EUT1jHMAdcgT8DRFVDdLMQ1rQbtZEFcyyv%2FRghK40Cr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMCSzlFJdA8h%2BlnqVkKtwD0BxWB1U8J7YNeB8zp0vuJ1pk9L0JiDHiRR6TXy5%2FmaxPQ5tmqSkaPPSCvLH2rcBnGJ85jcgsSaFRQ4MfkYacR06g%2BATnZfRGljhRGk%2BNXMJF1cd8NjUVeQXETvGJQnK96phA7EI84cO7DPF0XAFVLs2KQ98HTiTziiiMOdA%2BN3l%2BU0zBy%2BInGeXd8dcQuma5TD4L9Ay35WeQJt3GmdJSsmtz6GzyAnPOib8aZCOZIgRO1sf7yTtNFc7e0bqApEQH7Z6JjkS%2BXsw3qbenZL1t%2BGhiCR%2FIRsqdlsftYG7Mj0BmJ0xBXOgSuGka41xzu3MoU6GBQ9YYUouQNmrBJzC8j%2FiZt0jD04LnKiX5FJDa0kDyxzbKMYkZ1MyxJpmULDUQJoj5laxsZFX0CXt3ogDYz%2BE%2BTxvENOCZwflWO5jzoAPYZEvS1kREqYzo9%2FViMJgfXqmqttq9fQ02BMxmct7HkvE1%2B8tOHsStgdBMiq2xyDFm7WPMiFhuTYeZvxqEbW6UyStvselbkYRkw0Ca6gl9NP4fZv6T4cWugYOwuuyJnpzq3TAfoRP%2FcuBPihP%2FAjYax5WlAnVSbHe6CuT6Tipd2REZzh2J5PcgnjObqLdNSKBgMVReyVopAIddvwgwuKqevwY6pgGdvEKeEDRFikFPy4qqrQ0IpbTp4fj4xaRwqKYj5258mOI3PopGdAMi%2BJRvXJl2cAm7vXFIKqf2ykDOSJLyPSTD4Mp%2Fa9mGjHWDTMzn9fM01v2qzOGK2zJU%2B%2BfeFKxvx27eqCCcftnr%2FK8WC2Flywdnk2X0RLZEJ6ycl%2BWEA3f9XFkjhgNnVql0d2CXTptC9GdBLQW88SiEdbpeqD6JZK%2F3M4JZ7GWe&X-Amz-Signature=f172e1db9176c32e40752175e8345e3036090e87e90fbbe32f7dadd1ff39dbd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
