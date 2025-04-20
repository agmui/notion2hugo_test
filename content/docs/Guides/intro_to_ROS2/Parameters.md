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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GS46CZT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCftDrlFCNtDcXWFVJGraCW5KyW2MJLY%2B5yxCKXVwqhxAIhANS8d9fXaxa0bdMBqZ6kJ3zj8NdGNZtVQXE12tvF%2BHF0KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwn64EXgIcNd0BE8O0q3AMNiJjlwitu3jYh4Qb08MPA6kHImpyMrOr%2B0vaxirIVQ1TkskOA8thDI9sM%2Fda3h6iRWw8HDtUWoaE6%2F53uafmraPlj7PJDSP3TwqvjXI3nDaMPDGMRqxz1z9pfyYzByof0tf1HRnPcE8kWpPoP%2Bb%2BCXm%2BJz0wJaLidUbHHaCOyyxUu0qG47%2BtLFsG%2FRf26jXFaWeuhDW6OoFnBtXsGOsVdhGzQaGUS30SmuJYlt%2Fq%2FA9PHTxXV4czLc5npKPlEkusG6cStzYA83T0TX%2BtcFJWL5Dpfgd%2F%2B8UCkytEygvKU4LmjwvQFMw0dR2AkJ3cMPGfW7UtRsCLEO35s26iVyCkfMcZ05kBhOoZHSvMbKJPtkiM%2FPyi4SdvNthk4CCUs1ph3C5p3RKBmbq9NqOoGHNdXW9VWxbeC7Irs93luGEuj0weRkWXBIOAA02UHa5T2kJQnj63m%2Flbeue2GNfFW47JOiH1%2BY%2B2NyBpTiCOzWfMvsE1qg%2BXZtM8G7ENX3DgSBZ371Y6M77Rr0IFxIZHbDbLBgdFtOJAYUg3WIuFEmkFMqSRwW4hRXMZR5vKZ2o3nqiKvHFTszv2G%2F6VURoVmEMtJks7w0mNcVTthWeiafLKlXJgriI1xpKYBjyNveTC425XABjqkAb5%2B2q%2B%2FkHGyGmQnOhzxP7Nqn4NS8GAq5xyz8CiG5P26hb%2FxPI2FIMZ6ngFRdI7DemSbsAp6grLMHdOj3LkWjUSG0Yl91KeV6zovshsiOjONts5oHulmteldpOAjvDnSYGg1DejEPHfP0mRB5u1LSTTKtfFrdSlI0ghMGvl0xkJ9hs%2BZsnB1pvV%2BlSb3%2B37ADx2l7I0TEk2ZOMCBHtdxmvK9RyVS&X-Amz-Signature=9c5b128a5581107c7dca8f14694ced1ddf5082e78c83104ad5d6979950da4937&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
