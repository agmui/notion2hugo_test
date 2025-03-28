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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7WW7KU%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLe%2B8bbGD7VclBvYLXhBa55%2BUM7yCcXHuR58ByuSJikAiEA2o7BD3b%2BekvA2tFuo26XDRZQrKqCIw79%2FkLnlFUzANIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDD3D3Itl5k%2BVJsQP3yrcA2Tt2XkBIdoQafV9hLgGlNneEH2okqZhcYAbvVE1GbI4Thl25s9sHkas9pPa5U3%2F8oeCGqWXthZKfNpNMK2tOQtWl8D8jZyX96%2Bga%2BLa8ZmhNlDGeGtB5qss7oL%2B7QoUFEIIl4YS2wYBoCQyE%2BmaNGO5f3Rd8Ocr0fpddIxeKlMZH0%2BB2Qc%2BmFX7XhdaboDtjAvqPRqdqwkeJpxmn4EY8%2F%2F1TeFWeE9zJIN8RbfMWJPkwmOSvBUzEwMtqkl2mcnwQC3Fn5eWVn5rWJXIAd1hFuxol0rbMjIkp3LMTh2RHDRpnXF6z3MjI8q8iPivFBB9lDmuZavsOe6jweojs3zaYT8MfsPHaO13WDuFe3pngMORsryBwXg46YH%2F1t5SIt2JmzdnHUzWAtA7qb%2BedyhAyf%2BG1W%2BQjl7sBC6ikv48HBcSqQ7Mqjh4C2dVFydOPeidkUQyARtOLGO1iaNH4SZbFw%2F8SHlscYmMAF0%2FkyTDAKODs%2FQZCWcmInN9h4wj7YCffjM3octTWDA4GlRD71On0t3cgtNhibhP%2BJGnzBaA3aSCgJ0ATV7v0FMp9DOeDEdc5nykaNO10LIvN0dfwAJa2%2F8sDNSGThL5EcIYq%2BoaahWrlbIOkiSQATzkmXGIMLaUmL8GOqUBInhcsmjPLIKgP7oW5oaCppeq%2BeK5S9hhLMb0RkCquVskmTj8GHCmlXhfnthWsV3Jr0BPFputaPHS%2B8%2Blj%2FMTHTgHYZPMlpZ0yX%2FFgejfz3NPsnsD8ZvGjYMm6XpqS%2BdqZ6ci68rY5SEnS%2FfLQjrRdxL1D7wN0oeovAZMKXAXVJ9YhRLuX5Qs0va2IkHayOXdIjr2p08LRtdEE2H2au6XcUyYqegB&X-Amz-Signature=75a55ebc8a2559dd8931b92d58654acdc945d9dd2dc46228ad7cc739e2b0f8d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
