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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLKDY2WD%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEFPpIgkv33cEJ9Zaqi8Vv1CLzvukuhXJgFLTiPsCFXzAiEAimKAGKZpq8x4SbCE%2BjAXqtOzlvDrcZ7iIcmWUS6hucoqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrH2z%2BpMZSNriAA2CrcA2TxIAPNfPO8QxF4w6mhOjJRgHsHc%2FOolsJBSIYPOPLwja7XaOELWbDofdE4YrJrLo4nnRbslTiS7%2FZQdrxg%2BC%2F4AMWHFFtvSU9zOq9l5aluwaCbKOzkuYutc2QY%2Foo9UzrG9sMPLd9ixGYso9AYyespwwAGBaCtt2tBE7oeRe8qFwEXKW8T55OV76yUGjjMPE1caFa8JTu4pV8sdP7I4P6Q1gUVQL%2BP9FVxUxR%2F0vud2fB4GiI7WqWhra9Zb2E%2BYeYYZ6xZU3TD2eZdrbV%2BpDTsMc3HLmNEhx46Ty0ExKdb%2BVeBVOI%2FVbeAhporvm6IgpisuHOoWA2ZsOOnZe8AI2glBYDqj2Y%2FS8T2BfGM%2BQ5BomaCEhTFFq6Qtde4kBr%2BinYZhAq%2Fl7EQGXWto96UI0R1YUWpvrkHKbzR%2FDm43RV3QaquwF2pxitMJ%2BHPUeTXGyBZTyyVyelZrdEcstNFGTtsfMj%2FvgWCYL6JhkzqK2a1k5vzlr0BaBSri02U8uBtvMG%2BfjhnR3NstJKuN9qLDXxsfFHjzEO90MynfdglUaVXww9HyqHnYk3zJMXTuEwKtaN9yPeDdZyJ0eGgAFy2Zf%2B%2FCqDxEf%2Ff%2BxvT35a6huzlI%2Bvmw4gRbeoh73RrMLrwo78GOqUBjmDuWmPULSyHD3AQXXs3LDYcIeoeb9hqPXCi0bwBxQBXk1JgZdvfSm35ALrFrV7Exl9saQ7UqzzBXTwgSwanc4LlqXChtfaO0ptvfilN9mQBi8nI404JIbeGsUkcA%2F1UxKFI%2BGfVqFt2xeW1tb22l%2Fa6y%2BeIaAOj3jDHzSdjZi7YfrBNbI7W%2FxYot%2BM%2Bszf7BCRVTZjZFxGDZgdchz8jG3xHmLFo&X-Amz-Signature=bb2fe9a9b7a4d6e710a1098d17bedfe964f60a032732590dc54139923da39a95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
