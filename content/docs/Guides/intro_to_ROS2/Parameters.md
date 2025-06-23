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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZOKCUW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQCAHs1RS1Xx2HEwUiPKJxOwAVP%2BhWG%2B2D57HI2Ki9uocgIgEBZzlcCe7MwyLgz5erg5%2Fd8o2lfhuZ%2B8rR%2B%2B2eyNa6kqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvKzaJ6eNNl9ivArircA0ikezOJ0qsLGgKzOqW2iwQfUr7rbl7dnZTIiGpo330om030TJnYyH8%2BDt89oWmASSHBK86t0Eo6TjyajIGmmy99OBJITtdZjd6dRQ70HSeNH553%2FSXfNUEJz%2BubcRB1eQS7lvefJfr2Xxh5TyfhWacWSzbWolptv8YysT1d7oKZvKlM2CjhfOzNMuqX5xeVCp9IseZqXZoSkMNYhJRlB5z%2FFghy%2BaiBTVAZpT9lXpK7c1NRiQbhlHnqoLwY57bHGjVXCxpfTpohe7s5blfYRIfvSdwOL1qfi1nmzrSd2chF%2BEidqcLMGkIUfx1vQEDGTtKrEpmw4w%2Ftqf5lYZIGi23M%2FYTLF5oPDWk5pHegDkukverNe1jThLniDu32xj%2BmtqKAp3exer6%2BXqQaAGfkzXpAes9FnAcKwST4DhWw1hNTeaPy%2BeYUAB6tnKjSsbbd0b20eAfgjUzR%2ByzaKJvASAC67ZRrhhT%2FWSbdjXOj6JKbeF7xmgo7qjoIj9Utp3Zs92TUO2%2BzLzx8jafNOnU0ta17hox5hkXPGEQiDrtgAT897jqSQ3lhDl6h89N2m7vtQ49Yl4GIrgCFY4La7oxutvJQaYcAM42kEUdMw30ONSa%2B%2FcgbeHZ%2FWr%2BAtR3BMNS248IGOqUBRsivcyKghnQXuvrJNn7cqrHhCT1q9jhs3KgVQLwbXfsMXPhXy9Xoi%2F7aOwWoYeHFi7wFA7tvrWLU5EX2%2F6oUP3hbX1QUGFq4sv8pWp7rcUs6rBm%2FGcDYj8nLCTtM3DS5HwQenASrRRvO9NM8aDSc%2FPPT8fXT%2FHl3MKWhLOAV0mltBc%2F2PctrZeAcnI0V%2B0oJaEhbTAHxi5yi5vnNY7ni4FtGv6V0&X-Amz-Signature=12e8c3c3fbe1645a4cf7b6c01a2d3d5a94bcaebde71b4458eb2493ec5b6e86b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
