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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667736VVVF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDikgpFaXl8stXEs9vu2QjhiYB3dCbVJV42qQpPhCLESQIhAI4kxxnMXynPG0GmVH2k54NaW%2F9jDymaAs%2Faqj17Hle0KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5RmPF03YpT9Hx38gq3AN8YXnfrHjfu3bJUgRLNwWhUHT3%2BUjstAK1izvs%2BN8jiaM%2Bsh9xD6sqdccs%2B7bIqC3rgAwkT%2FBeik3gk50WW5li9dvwCyTz%2B5s1zsBYSuR01kIuKV1qmgmHR9TFuM4puRhpcC8AmTfq6boYp6sNlOREnUunXSexakrnqEXzsKLLabbZTjHlobrijujNSDupP6rffOyr3XI6vL9vVAeQGErztpBw3a0laxLTkahro2EItv1zH9Y0oLuZwUm3Ei2WRg2B7m6ODYvp3rYcQR1CyvbUcdKqEfI7z60b56gPpy1mSHKfo4VrLL6mU%2B3KtuFsnrAGTChlkBOvyMIKUpJFH34rak%2BdYAhFSUwa4Q90n7C1ymuGkHShwSeP05Jwg1erKOekSHEGs9jQnUi8jk%2BD8qq0%2FD969GopfDip7OXqF7vF3SeWsFC%2FP1Oawxt%2BkZIoBx%2BPoM1AEY8wSDhH1aEJX1wE1jBsvz0Zt9iJnMHb%2FM9Jmao2KWxTnoQX%2Fwa296VWjkYv%2B%2F8%2Bxrr77SeZBlS7kTMFvlOeqjxCIeHBQKHPH8VMP7qM%2FEng8b6Xefe6U3udLPdsWE5Ks8f%2FiUwpM4u4Bl2%2BteBYr%2FfWPFBekuTawVbbUHyfrx1MUC%2FTEh5fFTCkoYPBBjqkAa1JaIMpxVSyZyeYIMklBTJ%2FcP%2FS2wUvxbfxuhzgAZsJAAgrDGXOSxkRwbh6UD2taql8JgiUPiBFvmF8Cyuw8Gi6WOPI9fb0clOy9dV3uYbFb0f6%2BXfylTO0%2F1jvkROve6kW58jwuw8oi%2BfWFW83cQUG%2BX6vZoKqta4aH0inK2SgQR827tURx8aqzPs40RzpW7yBhrvGnzfq985FyyNTupx%2Bsgqp&X-Amz-Signature=f37cd9939fbca4a427d0bbf95fb97dc2217947d2e2ac31117c0c903dd470427b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
