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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WJ4DKEY%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYQBbJ%2BpePqaMQYdPIILNLltKLFwF47xtnIOKhoSF3hQIhAP54kx1WVaWUMNayVzC5k9sNkGF32t7F7C%2FR8623LzfHKv8DCCwQABoMNjM3NDIzMTgzODA1Igy5SkKfu%2B98FdkrOpIq3AOkHADejUVTlT7EwPuZ5fwfnNTnmPh96sfa50YlScJrQnfiRw3klueZdFlVIIMy713CcIiiasJ9mMb%2BhrtPY%2B68WD8gwiz4QP7mJL%2BKN2dG5IIAS9vPvgvFVTIZEgqCbfRljG%2BgSZhFsaBXHvpr9wroO0aUts05D%2B6GdSGImrKD84Z2IIDMOsJLd4IpDQJ4hDv4OzmyAB3O8Fzc72lGABfzHHWcHzrRgpTWnzLbqX7pQ1bTBRS%2B6HGIfMNJYIvl4I8PPuHJ3u%2B9f%2FPtxCpszPdpiwoRARh%2FnK25LsNpSISNwz4qR0WboSacgD%2Fv8yq%2FtW5c62LdjYDXvr26ZlRgCDdobpL4cB5G9XhfN8Qtthm37wGdyKmuu8IoPfPqDjMwOCjtX2%2BO82tSJyWQ8b5DFjo0Q%2FXqMRDrwObdSpXBNnQmy1ek%2BWr3nhrPsyo25cX9lDl5YAuMSdHBMj5iho5fbB%2BQHHBhPk1rcybXhRSazYSIHgyqJzWx1rfzFA97ZKZ7Md9sHCq5GNEAOve28WilJmd%2FatZ2KGaEkT68EDwu%2B7rcPwgDKYx1Veq8a2kXfitHGHC0u%2FKmgMytiOcEwfs84akaqilkZ8%2FZ%2F1U2BB6YMW93XVaW4MzATD4X0R5%2FsTCIyK3ABjqkAW471zeUGvy8C5HAdYy49YAi3rA4q9oFp5X3NxdSsQuL%2F0ZGA9dZ4xfAMLcbJenCSHd91bY0%2FpJdPPyO6eLFxzcZOUwvhTaM6WBohm2If6C4zfj%2FwkkXFNgB6qpBW571Jg7TStSZiGIJwC4kwHeMlhjaJ5kIfZvaYsx3nGHNzknc8D3N%2BZX3d9gyBJB8u%2FWCOD7pYhGe7elLqswnFPK6knKETk%2Fw&X-Amz-Signature=14c2cf62f1f4e38116805f03f6e8ca739c5e0095e9dfbe271c0fa7bf9da6e238&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
