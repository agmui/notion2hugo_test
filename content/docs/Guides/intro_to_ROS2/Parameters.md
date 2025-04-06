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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKSBL67P%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKV3ViCOPHphqX3QZMYxLWyecwAoyMFVbkTL6MRJ1dYQIgbz7kMlkX7MrDBBZRprw3xKV1H%2FotNsQDIs5j92nomoQq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDJJYMHE5T6c96dP%2FPSrcA2Fq0%2BJWA3ZxmvWRCPR%2BquK30hkIK%2BM8Pqmpp6BJ0OxifqD1Noxw%2Bn8gurZj7PnW%2BU1HRiB%2FjPCqq0Q7lVi8fyDG6SQKVfQjvV86g142k0bCeVnCL70bC%2BAg6LoIP6N%2BmYn%2BRhZbpcESVgcG59%2Bl8t7H7OwEQubHhtdyIIYxd28IHxbDr%2F5TypO427P9255oD%2Feq2f9non7OO%2FD05dSOCwSOKPRzbzywJORktwyNnlH01BhZTrevQvGxmsYEa9Y%2BYGfhZBg92XhYCg9IpzYVUurX60NK4VvBDNGcADv0w5gqNILG4DqNZiz1%2BIM%2BLMZaO8kOqvXVTqDOdHrnFVWQYPxm4m%2Ff5Wrsw1adhwMKqOiOA3fJhSu20AueuY8EpJvM8cCB60eiGvzXXevgoiPiJ15QwXn3wri3WdsPGVopgY%2F3Y9p2Hiq5F1avLnmI5cR0V9yx3ekzwM2rdflt4%2BYtdFZe1Cf8PolH9CAVFbmv1rlPxtsy91juA%2Bq6%2FP%2Fz2N56Q8iqM3d2BLvSw6qnzB53dsSkcWwhSXiM42R7GO1vThlr53%2BKNnxBEtu5J37T5sC%2B9srs4nhSxKNB8cDVKdB4syRY6TpPAle3H97iIoM477irkgSmJHmWSYZIjncyMPv%2Fx78GOqUBb8Ns885ZtJeykYS%2BqvTQ59Ru75WAkzxJhT79KHAh391clcmtDAwtFiRUaPzg%2FzxkZj8U2eiUUwprYzRIJy%2FPhWsIVlsiFTsZTC6cYSgCLS1yO7LmBPQH%2FLb2SYnpKmBydNKfVe66ti7yyHbo8cJutwduYN9MhC4hGnS0kvxI3lA%2F%2Fb71zpKAGnNP0sGXdB%2B9X%2FieRcKGywP6sbxrXedULtJTcEyi&X-Amz-Signature=11c5d4525846a4365d92617b544b52c4611d25e2fbe72400fc1077e6ac4b6b82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
