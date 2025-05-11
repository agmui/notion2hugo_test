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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNAFF46%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFIq6Xx2mhSdl8yu1HqiLdTvD5SIqFOeb%2FQBPdFuwhFkAiBTnG28a%2BXK9k1tT8J8lNAFQ1WqcUuTeLiX%2FYUbAAhuUyqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5LRKzrrCSY6mOPEDKtwD1KSasMG5S0FG3fAimy1uMUAZ9bZa5TQ9FMESGD7jRV%2FVKZfnUzq2tXcQHV2yOpljeu9xjv70W7pPneVuRFHfew33UEj0l5qfHIzvEy3uO7ZekYAXYve%2BM5bfg48A7jjr5ic2T%2BFka1zQosHzPUHGsfWt8IQshAhRMcMQ5XIM4bye8nD1cD84kwOmYf5mnLBexPJsBvdQbZ0twQ0DHm0jsgVVBleYOHWTcmh%2FBe0nTWEAkzVXyrduafYOhunaJPMzkK70SsbD6KheIZn7w8xBLxNgLQl8ho%2FFKoH03djjkyxLW5V1c6DtvwUvQyAJjTydbO%2BbmufB9zDRXdcj6z6tRWGY3pBa1GadzQv%2BrevwZYAr2dICCCAnRyRIaH9UY10NA2f28f0J7T396O74KhZVEp8XuCPKzXop8ubUjti3NcmSqb9k9wyNKhlbXClbGK1K2hPj5BtaAR5rmjTf5gD3iNPET252E4vzZGsh%2B3tQQmrAxuSLjOUbtuRLBpPL6rcOw9CYTObH8Ebsg6IRYPIzYBHTBZwddRw1D17x0P2FBCYTjZqxWobV8tU4vMCMks2oD3zpn221U4Ca6OCKr5u9KVkZB4396bTUPZBG3NrkZR5kEH%2BUdNXdJKTPIJ4wlruEwQY6pgHMsDqXvYcOeB8%2B1PxZe7aWLDr4OoPfb4WLMuNw1JNILI8HjzsiR7QkYLxTEoIh1A%2F9MveD66THR4bKIQDSa03zKUNJip34gov8VDmSMDJI%2BvpArcZE3FqGUDj7f6d3Abn9nrus8fTgpIjCZo7v56HEWRo2xFaJMeLn4kbP4vDTkchk3zhn8cAyYb8BwJNxs2DHheNUaebwBau2nxxuTLieKKLRwW%2B6&X-Amz-Signature=5d64aaa2afe7636bf785c64b86a2a4b7a93467445f2bcaa40fff8c8a827aae7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
