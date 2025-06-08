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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5WFRGV%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2a%2FQSlcTZkJNacorgAF02s9Yo3eCqr2jiJO240J2b8AiEAu8PRtqMuxmbquVE2S%2Bhr2S%2FUuvBMwO7U6a9icT5ovt4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNaJs9nF7LuwKAIxCrcA%2B9jYu1AdymtHKr90gHs5O60cKjrWJuQWT3JVui9E1CzhVyKhSafARZwt3yhHOpWhb0YCQpH5besYXhyrHPOsVh4z9X7EBMbFdVXL7WqCbVXZoRnhNCX3wSCpkw4b5LmJnTCgIKgH62dOJVlaJdEKlfMYIj4V7lZTd9uf0Axe2UO6QVvahC83DoeSsL%2FWBVOVPIhg14v1%2BR8%2FeX2tcFzaOv9sU301WBeC4tWr2LJp0hzwarsfZalW%2F3xFDFQKKJbL0onGRBPHBWVxZm4OSo4aiPYAyBnltDj203sfNv7ZHHpItRypd%2Bbs2unI9nSoF%2Bdwvmqd5JShRHLpesFyMl3UmubxC7J80RWGRML27PjH1iLhScy29yW6UT5i0%2B5sXNERft86lej78N8i%2FHmPfWz5bVQZEm1yNufFVvBq8XNxp67vJtASMoc8Ojj0L3oPU5H1fOKClDRL76dI3usXmwiAetN8WToPZqj%2FFnaepsG9QmEmdIGuhgSyJICa9U6M9pQ44hfrYhMi6dlld2i%2F8AOVF%2BXjVqPNLG6yi2esT50n%2BG2nzuWFGjuoV1P8cO%2BFlJJ%2BlyJYxMrWQP2zjYa5SGvFVarahiZniKgSwwhlyVQ319p4dst8D%2FqDgBV6ADZMOyck8IGOqUBn6X39Kylat7HZoT%2FhD5NMwo4MKQ7icowxuo2gNIf4grm1smxWT2VsLz1FRo2yLST6eO8X5oSK7HgcQYT5UzH%2BAhST7vaL5hhg5mOqbrOEOWhjAzapb3j8HDYjxIyTHjyT%2F5bMeeZcSPXF4nLynyq6D9RJikYtYZMGtShDKDnASbuecp2gTrKBRDZYFPE0eIuK7tOaUSDK6ZoAdFEocVUy6%2BD%2BbYK&X-Amz-Signature=14f1178e1f69239306ee10a3c26b07a556086f74affef69184f637c07e5f9762&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
