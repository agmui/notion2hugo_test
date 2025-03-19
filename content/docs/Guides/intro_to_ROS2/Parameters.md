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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRL3AYO%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCY7CInU%2BfKmtB75NzaUn%2BnFgLhni7gklJDH%2BC67D1F1gIgEdkcZJ%2BCMPvs5M0cNzFPzZWlrxhFrDzMTeHh%2BhMyPpIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGQojVhL0720SUzuKyrcAwTJv0KcMBGTOnlM70j9BtT4onlWP4qhMHxOfNHkzpqZW%2FFc0Qf7HFPYWufzlCR5R7HCWyjhEG%2B8QzBozLkdgakbbsUHRaavcGPFdj3QFCN2IklvqewZdBNjhqPOgY2SkInEnKcauKmQ0oRIGLu4gz8YDz097vDs53biXk4%2BN14PgxF3EF5W2%2FcokzgwNOsCA8WPwC%2BihaaW8bogzxKPbfzf%2F5EKP6FeiaZ4JvcNCFIGeA4dLe1m1KRN5XKnAQeZJPq73Gxdy1aGYaOg63Tkl%2F0Z2ulbiImSC6grl3QbyI%2FwQ1kvqhworq6Xhuky0cFR7AJvAUnyTCG463AuCESb3%2FAQBEZ2ir4bAfhmRBIAFgtiCftiEXRR6yp4Oj%2FME32HUHGlr9K5ManaFS2DaEI%2B6W3D%2FEsBAi0U65TL5qfT5fWTfBQxagEI%2FKNN%2FbViZKljUiG0k53W6g84E0MWrZvuvOGSUMODL5y%2BQV%2Fq2zY2dpM%2FUrfVIBdyNRoxcmw88hU28lPowdKUueK3KRWHXawDY6thcgPr8C34jx%2Bm01EAdW7GAeNbMrbSzrQT9%2F4qxCk1hNZy1jOB8NwLFpohPP479Ifcblge07bAm90vX1JZu7OnP93ZeFRs%2F7y%2F%2BVt3MMid674GOqUBXtCJuVLfMrQ1tNOyOEcyyjiE8aq1JkGQLqmT4dqjTe5d29rxW5CPxXFOEgLZezWCCK1Qzlr6QQBvOYTfa89lHbVZKCaJFW1uSztcoiqNqfH8jRcnSrH8houzlmJT4unWz%2F4d96v%2Bf%2BhSuuUZeXZU2c7ggHj0PtcJlt23WyOZisNki5%2BahRWxhjiRZwReRDVmMBuVLuIppLRKI6MGduy9NtmF3Vdk&X-Amz-Signature=5de2a4a4f52d645dbe2e257613a1a995a401f6bf60f621442c6be065e29a3013&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
