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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXXHBNJG%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQChki2Ee20%2FhqhjHZBVVqW7OOrWUAy01f4sGCltlWvWswIhAM3Cmc0ie1RQNaOFhMQNxZUFMJAZvKsEzjKp%2Bz6wZEr4Kv8DCCQQABoMNjM3NDIzMTgzODA1IgwBKyZqaO9ziAOFRioq3AMCU%2FpFA2dT8%2Bm1UH%2Bu9PO216NiC2XZOEzNk2H5BLOorCIImnkHRj35yRDx03Ux%2FoFnSg%2FScvQN1SIquvtIsKIf7b%2FSzFXuXd4skaNRrxwqVqbCLMAFAZOCQ4mA%2FGDUjdpASCsRg6d%2BZNc88rJlvik77rXLYl6PRtAci31inVUOayzCfyUJPbi1MJRpZ6AvRMjYB%2BK40gERdWbDkHgTHfEj220gp0c8yTzn0u0pdjX%2BRVTy9LBD%2Bed7QYsuw9ERJPr277s%2FmBF5LUTH%2B05K6y7yKVh3Zd0damOOYeb97Z%2BEW3QO1DAfuNtQuHrb1fXSoeOcyHFSEtASyMEusCEFoSCZC%2FFw2P1NR1NpJD2cvFcSZYTVdWbDSfl%2FdTChPtc4%2FexR03Nxi7AA1HQg389eHn1s%2B504MHaQesJNiIaib%2BiJHHb5%2BrWRtEUOczXhd0ASeMfPKJxuYKEEd67Wg4xM3pS2%2BMxsSdvYvyFt7HbtCBk6SsxGHL6DwBAijc9ilRYiIBlf1EE9h7BJELIMOpFwSo%2F8e4yFCgY5e68t8QM2dDS3uKxsp1BHkHw%2FJ1X8A%2BgT7BIW3kdwKdOzzVDpa83VE8pZbukrLjBu9WyN53eTmFh2M0NXf3qO43h3gpIgyjD5hoa9BjqkAfdK9%2FrDI9oV8%2Fh0CBXWn3ixMps8Kvur%2F6W5x%2BH2z3uCkR%2Bw2Z5EZR%2FXOGxZO76nqixP3veg1OcSli0KoDmZc17i6CTaqAjJfzJl509d9bOd7AtUkFe6QKq2pKdi3FiGK%2B19gUdSl6hz7WepDJOuYJCUfZyMoyLp4ciiLc31w0GaZZb2gak%2Bht%2BiHw0klcpdpGHVuB1N9wtaLEanumkMyXBXyYof&X-Amz-Signature=d74337ec76ac7cd3d0a255dce135ae23cb96b1a3ff5cd356a349aa846ce6eb4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
