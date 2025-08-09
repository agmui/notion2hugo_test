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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634O6C5OR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF0WSjf1BwGah%2BGzIpvrpePEksS2Kg6ChFaqSlz9NjBQIhAOkgqvdx40hDvMJLTVmvjRLq%2B0FPzSC2GbNk45MFDhGYKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvR7UQdwKU0KuR2zMq3ANZZQb9v5WniuoyBhvIj5YX0RXGnMdkAwLiZC%2BpmWiTVCK1IhUPnkRtjXgqmg3hX64dtJmZwcesVR%2FwzhMofFdTkXNNf%2FmTDEqyJ8Z5fOgDiKnyVZHO9QmhHzK5HwbL0%2FyzcYG%2BQlGH%2Btp3X0dJ4CA26Fx6s3B3zdbCFuF2qSVZtHNmJP86TeO2ECzAeeBJgaCng6iEaOrBRgESK4J2jen2sP%2FgMKn03tqiwVKPaGoK7tVxHqhQvCGsbq%2FpyTDOo2tENqe7rV3csiKD1zwdc3z6xLyKT%2FNZQRjdUja6a0EVOIFEui0RWAn8%2Fcnd05U0x1dqcuKb95YqBoCFVtfZS1rXGWXettEPDIJCZu2WqpzycEbxD3PGxCC4d820v4iX%2BrzKtb%2FUGvC73AoyhZHoh9lv71%2F0JyYQKhva9hsCqGChLCrNOSPQ9AErBVdO4AgzrJ%2FjNWHnhI4%2BwGVhI5oiItNc3d74CEq3BgByHuwOyOtzw0XFXlXk%2Fh5fhfvM%2BtXk0l7UR%2BAPoWlXdkHhPmTRAOcZ6uHTz%2FbEpcsqy%2FTolNNcHQUgkFKEVT%2BVCqv%2Bpft9xA%2FGNIuebHX9HYqyP%2BrD7G3iRHcFqjOP9pIBUNrPMiPHw6vyvcNF2buBnbAYrzCg5tzEBjqkAdijzHTmfp4FqaugLr1uuLsHofuoVmseHDE5OzHI7VhQCyzDhO1bb%2FSQNwrqQtiY69sRO3R5qLM08dhcnVWN%2FqN%2ByrIrjStxk%2B%2BZacNnfgXe9frrp2VptJJccLatE5r9yXlooNLbajav0k6SoLqunVP7H1L6oFxj5v%2FLUHo7XU3zXcgTDPK98uyl5hS2aHDghkBJu2vYrLmIodVm%2FrIdl4ytQ1%2BY&X-Amz-Signature=4e0d40d254d86108823cffd8c857f0bb196989ffaf071a7516f9ae963af1925d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
