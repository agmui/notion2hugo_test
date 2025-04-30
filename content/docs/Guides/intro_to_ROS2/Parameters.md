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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I5DYKZR%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCICZ50NPTwq1pzKzpiZMBY7RJ5zxZyGHZzDQTN%2B%2FoUn9cAiAVnyZ9OqxIcNd7Zgy8bcKYTTypzS6E476skrBhehPLUSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMygVvAzKNqEP4iVHvKtwDAtLdlEBnF6KzndeAOFIG10w35%2B%2FKWY1HjysnuzTSfV3A1vZwGsdrch0aiHxgmCr%2Fcc1TuFZ5LV%2BkUpECR7YL7aXz5hRHweL%2Fshtplza8W9cCgCoydM5TMZ29wMq7b6SqOfO8%2BE0qpIxWBDq38RMrAuX50s0yn39pRnivUTnwqTmsYyOjmSC7EtoVcvneCpG5PnuNDWjXmhHNFRbylO0hr9tXabl5XKq623J3%2F2C%2Fl8ezCCiXdadHSaX0zhDGHN0oVSEcVdrmD9Tp3K%2BRbNlR7%2FVVWPyGE43%2Bqc6HCHyFlqevECwiQequS457m%2FIvjh37Hfe%2BDEvZmD2PR3gyzj%2BSzFslIFMAGTun5FA8guVFDjMzsmNd6iN1o5GdcHAgMaGcwcoHyc5wfZf3UWQ5bnJ1MtLmkcm9S72LeyKLIIAtGgldhvkedvlzc04Kps%2FP6hlN1DE94L9OUMn%2Bw8DkzG0SRA7OBOdxE9yj9haEf78qlzk6ASBxxpscIdgqBR3O4hdXBY0AsIUkMxfdXvVdJIQdO02LqEIelioewRZ%2BCVUaISbG4p79Ns6CAvu2GkAwoeS2gjOw0wZvED2FdVMBQSlVikZzB1P5s646QLh8ngUdvhLJ5j%2BVlfgCKLkv9M4wzMTIwAY6pgFVVYAgvozR0pWyO3dpvXSTGJ11JHfCHZJtMkpxHCOav2BJEEKGMsRz9G%2BGQ01O3gtDQB9Ez5lZ3ljipVVmveu%2F0GSBfAIMc%2Bo92nIlKSjTVE4V%2FNvWC1w0xtTDruGWg2hbKSX2q%2Bm75p5vxN7IvWDUS6DaL%2F3%2BucheSAILWPIydwiP4J3BDpVbAbAzdufaog8Wt1ipaeL6yrvmKUh%2Bs0NbMUK6yYyb&X-Amz-Signature=0ffc4e1712146a36c8665ac6cd425af7a54709bb10b61a0a319a28c9ff808d90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
