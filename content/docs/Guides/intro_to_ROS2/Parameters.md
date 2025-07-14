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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U7TQCFW%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIA4DzspjftSwzPvc1nuD%2Bvu5Q%2Bu4Em38%2FLeSUmh4TPbGAiAdmam4ikIlU32og%2FRqqWwtZyoKIFz4XQxAWDjGW6wY3Cr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMI2%2FMs0JExz9%2BNTR8KtwDVw0vut5EcHURHIeUhYvgDqbL%2B9jGSKZmJB1auebbfxoh2veWDvL%2FC2bL3MZ6LBdsaKP4OdKtpXAQDrnMkENvU8uw9nsy8JOq%2B1mJxQctrJh3G4nEpvuKU13pGYbRl068IhivKdHV9iEfZ80XsNB3qe4ynQ79pXVetLPVrs6ygqDrkZecta3Ozb0Uwil9nLRBr84fpptNNpZ8gLPFdwPjHSborqyXZ%2FL%2Fl1OakC23FrZpnhs9DhLWUIdTJUynI0KP0822hHY4Otgk6n%2BHOFRG9%2BHDfRs4TSPXHPCZcNMFm%2B1tHstomNX7BgAduqx0own8lbaQlNlBMQsekLZangXD1W3UOHgicNVAKMPfA0Y7tAPxCw2K%2BaYNbAmqPBIfhFzdOFvgUbvDy9OI1VsRfrRDa0PAIDosJtkSF36CrwgfEftr5kC2bB5nipoutOQdqRmb7ffdxRtb1sgi0qw4o7M6kWRYasXgck5AnnnGop4kAu1qF5ETLhtwtXR0v76qhAZhf%2FSZGzyyJXvA45k1cbqf0ZSSFbQeIeWGhIesSYqzTkBOK%2BBcbn1wZAldb%2FOh5odQ6okbR3FrpOqlwfxYG6aPrcunHiEwdrRiAJKgyFkBNczGnv8%2BY%2FRlVw9ovQwwu9zTwwY6pgHgzPOrG7dCnqMZQQYk35Yst5JmNMIHfskz9Vmbyu%2FkZDU%2FMLAF%2FdXVBKCPf7LfRDxKQi5YnNkDvb2VPn%2FdI%2BmIMPPv6Vw10lVDuv4b9yce5I6tT5UYUXO3IhKUHKdUvvISprpk1HPVCTJrvvdQ0vmJa4lU5g%2BPpeMANDv4cA4CZWuRI89bjk0zO%2FL%2FZA7xphZ03emIgBObKZLRi%2B45qlL%2FiGiBjDM%2B&X-Amz-Signature=8f8c396d62f5a9d0c47a117153b9a43b4a91f884e5a1b09c8e362076da6aa2d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
