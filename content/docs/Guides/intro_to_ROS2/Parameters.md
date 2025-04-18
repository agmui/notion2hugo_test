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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PSJYXEP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2Pff3IHsFXbM9743fE94%2FAIUs8i2svkADug2EkIgKngIhAOtcSiHPhhsmBvlqQzUFwiNXlUpjtygqw7Ty9pwGEX%2BLKv8DCGwQABoMNjM3NDIzMTgzODA1IgwNMta5eGfvC%2BC0YDwq3ANyA3Z7Y3fXA%2BRAEyxEJcE2TkluHGvtTvZqTw6w02KwNAa6SLby9ftXsndOodt9%2FgC0AIkGOiabUVZHzERtOEbZeOzxPNPstO5x8a5C8XXmh2v7foBs0jDwY1AynGWF5HQ4yYM8htrP6mdGOUfCXrqJvWfmYyndNDWPZXpKjsGkApwn8zA5csXI3VZBTxaTQRowjNl%2FINcMsGPbumrFJPvcoKqhIKUB0sbMtowVmg5AVElgcDkuGXD9cU5HxzZnXv8bANaffy37c72HomPZBWZpBcjfeloRwYOeMgBzF0eCvpgepxyak2QRNK3sXAFpIRcu7Hv8Q3mHnaOIhmw9m02YeoZTFlMty%2FnLqaM%2BPymnO8818a6T5NPbpISllTdhBfmQLxaa5ms25m3GmZP5YxUyfg5b9C6hZe5n0MkQf0fGQYr78TFg%2BV7i%2BAEd0u7QBL7JbnAtSd1hSHb5kNrIcUQ1BWKRZzdM19RVSQdvW7k2JILuLcaaNd4utl0S2Q33GmN2eoeGXX8SZIUXOC%2FP3pu5wkwG6WeGoQ9npr3XH50X9NhvrqqNC1Cv1ixqIFNqUdpED%2FJSdZKXFXtzLiO6nhdCc60yqi5AJUTa%2FkoeExMdRZkET4pslYcyYEN7njC49YbABjqkAa9cJwvnoefkJqLUAwblt2%2BFkjnmPmOH%2F1MM3rOzmE5EOtL6C4yuARSU%2Fovkjmo22f2PyWyGoV%2BI4O0S6JeUnAI3qE62ts4X8V33iVwaUXA4KV4Z1S5UgOx42%2F6Iod9mPlbnCDTZ%2BDEYt%2FdGJ%2FhuF2%2FzrugHRahCdulNW7LbFBgb4l4DswDy4ASzIOY4e3vDrVqdkSMBdKXQdLvjH1IDW1tijYt0&X-Amz-Signature=666197eb375319f4e356371b8980ae8abc7162a1d475ed031bb1c5fc42fd1917&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
