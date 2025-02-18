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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466656ZLSXW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDN66vtWok35v8h3MMegNu%2BIJMa5znusoNTD%2BBHaU46xgIhAKvE0YoSCT1szO1A5afG9i9sBxLO0Bjv3xqmHJQiBuPhKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvzkzI69LIlXNQOPMq3AMIvMx4XRFPypAa1gxxoVGSnKApWuesNGWd1FnOXD19JTpuJ5F5w0%2BNa%2F%2BJuJlBJEtldPyci21%2B%2FIF%2FCP6jzQSrczqFZg%2BdW0Bf19DALB7LD%2Fwg8rzDB5420GIRVJfIW2Bx8Wqig%2FkBfmHWgs5uUIWTOitByZVM071xhWVzMAYIR%2F1VXsjNSLq%2F%2F2BztQV2UnIECA57LI2AkfANBBO%2FQSCW6OwTe1qMVVWnXsqgo6qopAbDS9%2FzWuH65Q67Q6PAzoK0fJZOOzU%2BhEkvk19CGorTPVwtbfVlCaN%2BFM7aCKdjUXc%2FzmWrnlpj8dwUPiR8m4gy%2F2r6FS1Hq0US42dTMeESbcmJj6TB8pqQvpTvKUFDuDz3vG3w5Psp2VTlQqazLK7yez0EHKGFoi2ZyZ9XdFpf1uOheU%2BJwTGOFVU%2Brsfyy7rIPHijNM2KLgdYG83lF79leWer9u%2Fd3hUQ75SmjNTQdrTwqEkTfbhgoILiyHR5Xr7uEb1RK2MVaMMfP9oXB8S5dHq7%2FCYgEkIF3DxTpQDH6pCe0%2FU2LovnV%2BwLAktwxdgtp2ZQKiyUQ%2BqwLTmHa1EIrHjdAov6CqCiQCnCWJuFE5vlDPVjmRVhX5Vh1nkO8USaRzQyuWvtBIDOeDDj2dO9BjqkAeSp7PGEVwCtMxz2ECr1Vh2gsqzkRAAlbwP%2BMWTjusD7KCVi9uQwph52Q3qbKZjP4kkNYoOcZAmH8ZF533a2ObWzP4Bt6suZ1v%2BDpGUhWqIdeLQPd2COOl1LjdAzf4qoyKdrgKgPjoviA7%2FpsM7RS2QlbMGNX7jnFtMGYoUH4nExRsOP0IlcjE95GmVL0%2BVOqW2Kxo8OH3oUg%2Bc8h%2BYQTFkYKfKY&X-Amz-Signature=2b63125bb949a098cc5ec2f3d97b94166689de60b3ac42b2f179443aa9f6089c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
