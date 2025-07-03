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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GRGDATZ%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCSczPyecCfPqmCoxRGAnjhvNue598neOZMQHyFaItq2wIhAIx9bXL54I6KPRpLFyt0TfVmnsIN0NMXAzJl5%2BQ%2BrpNPKv8DCBAQABoMNjM3NDIzMTgzODA1IgyTqJpkOl22%2BURxHGsq3APQ%2B1wtmcQpU64%2Fmc1dfn2ZN616fz68%2FZGyj0hArvgw75D6ZtSMalxtc3gQ%2B2FdVtYeQHEBAHLFx%2FTmcIJDiQdCJdgZItzh4%2BabI8eTEx9mV%2FsHxnsHtCUObTywn2h3FHWfr1WJP9xRnI4kYTJ4G9cYSaG4d4DnAn6JHZdCZ6yBVF2fxMNHKHz0Ydbo4gLLtWna1wcsI%2FTVvU6Ij1mEKQ7ppTd6MsVVmW4aKkB1I2AOQABSxBlYl6pBZSwBQBoPQH3M9GaibTqb9a78GUNSJzKnKnelGoE4PEsZoMAttSn9VmnOyjHCHUrK5Dywgz4jAL%2B1qnGlhkhMcehpKz73MiKxU4WRWAaZgI%2F50IKT03CKyiyebWh2wGeAqVJDoTRlfi%2BL%2Bq7M13IIZ9CJ%2B%2Fxmu8RmNqRmX9yCICNrDW8MNZaVtOhFEFTGAZk3HjRO2D3gKuVquouGhHdQyqgi13lF6kUpqRJ22lGLO5TH2Q0%2FJgVCerhBMbmxWmsTmDErjAVS47j8ygTyUOurvbxJkld7EUQziTixffpWRHxZxUSsnC%2FAPjJ%2BvAi8EIWuBZPJ2bptkYNyfG4FjkgjA05arxq9BTfjGefX%2BDlbkv3k28oRizuM1rsY8H2yWUPbyOG0LDC43pjDBjqkAbauDEVtgCA9qPJ1hsSma5WDcSekH1IEqqpRzQCVv5rYgl9p%2BY6bp%2BYgd%2F%2BZEl%2BGiNwv%2Fu8%2BJP3862sR4bVxoboqBlLnWSohI94ucdTMv%2FqrjK8GrarXT3Bs8dEEcOadGW3ScfKluJUFzmfLR1Ip1MQHvGukTLJuIdnKLYu1bMH8e7niBWF5SI%2BbeJ29E21q6kUdQzW3M36nR3Pm4q8TjeSZsjD1&X-Amz-Signature=06a807a15b7ac036f3babcda4b0c3bb4c6d9d76ef130e65351a671316c956347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
