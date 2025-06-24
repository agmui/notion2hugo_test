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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U2TFLIK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T151009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCpDSNA1ZusUw9pK3fvhIvP%2F%2FLVe6uKrgMbUXWLZ6NVvgIhAMLJecX7r7YB2H0nJgTzud3pPscbfK%2Fr8e6FYuu20Pg2Kv8DCC8QABoMNjM3NDIzMTgzODA1Igx6sqi8niO0J5GRobgq3AMznXekqfEy8ojBhxsMaKclN0NuVgBbE4COQPvNed56Par3vIGJTX7GetWAzseCLi6AaiWnt6dQnki2Z8%2BuBmaVZaAnxKp5daz896pYnrBCZd4w8G9IOxsTP9l7XFmaQvRMJ8jBQIZpH2fdBqXs%2FnpnrYmUvQhgrRMFU7luu1G3GJarDBRSy4570ICuv16c3BSmAkF1LhGVk3Ubk7UEFL0m4UCY9WlWRieJjQ2EHV4AzODnkwcaB3REE5ooZpns4ljfR%2F%2FRs9CG8AQPGG%2FPJ%2B%2BeFAKGUuuquEzeIfrNcHaju5SwcByS7CjmU5L0%2FCOSweFwi6TxzGd4cwmDPbolSPBRxoIkEdFaW4UFrps8%2FotZn6LxGptczVzgWs7vab4JLPM6JCln2uTu7pJG6hO%2Fu3d2w4%2F6WUkZazo78dOxhNT0ibuT%2Ba%2BjdoZ5icuvy2bKrUAsYqSKoqVu1V%2FMh0NrZASgRcnH%2BmWdsOMx8D6Nmax7ar0XI6iJvC6LR9ZCxeY2kBkHYS7m8%2Fw9WPda5GPI27QsSyWmC%2BzGr7cGcODxU692H6bXAVjDTrzBBwavGASbnzVlr9dqzs1WHqK8paalzMz%2BhuAcgNAzw4m9h7%2Bw9bGbj31oAj43oj89LfkssDDV3OrCBjqkAfPZiUCogNuwBz4I9NLaqpgz%2BIyzU67o3GXyRBlTsWnCsS4OD20WPwSSL1ANVtrsXRNbffYq2%2FQ96h35J8%2Bvr3GvkHDjY1GpBICo8dPQoI61nLyMKe0Sw%2FTt96TRZ0LqxILiKMo2cTp51oq9BKtS6c59nVPEqafIePS9tY7P4r8r57vmU6SR1sCeYpq7BXBnh%2FhnTt%2FL2gc6VOQzpiymmAkEMeRN&X-Amz-Signature=a5c6b05047347915c1f5b7a972840d7901e9c82ee68cb2fc3d2e873e56469eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
