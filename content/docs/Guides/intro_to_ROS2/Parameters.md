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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M6SAYH7%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T081012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt8qMRjz%2BdEoqTToGXYPgTS1zoreJZdN1ZlnRL09QtyAIhAPuHX2lCTCSPNEhSN0KzUWxe3ikvynGztk0T5MTUZ5%2FBKv8DCEAQABoMNjM3NDIzMTgzODA1IgwNMS%2B%2FUgfrNFlSIioq3AO2Es7BK0ZsbPHHh8TFS6a4125dzMB0V%2FcsmubnS1KdEIoTFyEDKuGN2SS0WKQVv%2FP%2Fw%2Bn2Kelam4heW26nmTSytMoxa7kU%2F8zT%2FrSY%2B6Q1vZLNEFLouQvDsONfcrMYRcq6oCzqSDHmmq0kjkfa4KrDzG4cpjKheefge9JZWns6SitJ30fWPHUZdZCIXACPEfrnU6hm39MBFog1uuuxzIOXnc8wbS7U7W39qjg3J%2FfnDA7nZVmhtnXASfhxhRpB1erc3xTvw4Q3MJvlS%2B9MtWa0uUinVE1wMlmZzzXmQSI0RWgFRo%2BGeqe0LWGl7RK9cAFQljdPfxqB5E0RGgi086uDBb01yGkeVtQ6VfpEV8UE0zGds8sKGI94t7p3nJ65X%2FxFHjkJ%2FPBW5j3VqRpAR9%2BTeDfwih1aAZ82dQihG7f4is66%2BvTm8rLZCFrVIMDfmLUDMk1ad6UtSpsduTKKyARQnS3m1O8IB7HSGxh2zajz%2FPYtCQkVjYyKJeDUj7xeNV9K%2FKHXgtahFeYOONLMyTJa35jMpPndEsNYOgIp6zPsEbF11oxFO3OnTROFhu9KoEFfEbDkWhvsSL0oRWUwVz%2Fev4959Z7nH0qirLzjsvIlmo%2FZukBX0np4bCFb7TC0hLLABjqkAdLH6Ao72BgOwb1A%2F4RSsC%2BGfyiDjNjlSXb0pTT5emfAxjJORvlYgcHsdzuNUGTX6gKHAuWrgPgtEeIQWpo0Al5Kx2P1mrrwSbD4ub%2FOWtUs%2B5zbfocwhBn1mkgiBWWuISoaNoqNg8LwaASnI9AFYzu2hU0IM%2F4LdxxqZ5t7CtFo6564Ffi%2F11h%2BXKMGT3cIBN90GfrqRHhbLFDsYBEIt6ZYMRNq&X-Amz-Signature=b77aa4269dc234dfbeef847ae81bd40c5cb5c71365234ecdeda5c66133d8538a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
