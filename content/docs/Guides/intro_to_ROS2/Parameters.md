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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C6UMYMB%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoxY8NV0KTNzjKDEESBOZIF05Wmj9eQfbb5T%2FgR91jtAiEA2UchXC9sY8fyaEsIDUzJhSsUkcYPxGuLzspb59FSG%2F4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmJKuPGNVbeR%2BHxWSrcA8lMczHigDkXduv2GKH6C4MjOZJMmVTxSpTygK59%2FOTAFOH42FryJNLZTCmPaLP51r22yjz20LLYTXTJ8qDJNokG0zLbjzP%2B%2B5%2FT3aC21MJJ%2BdPVCe6b4oJqEhREmVKwX%2FvO4d69iDFxC6hP55IrCq4iM%2FC2GEZXJqP4wvIM99757xZZBSvamp2kQiLHQaU0vfYEBDMP0oYtvGrxrJRXi2J7MLJtAUehaHQCY4%2BnxIHpFKb0n%2BiFOL7tLl8MXtY7ccQ7vYZIFTcSHF7cahYCFc51F%2Ba%2Fi73B%2FgFX3XVYxSfLKnf6fl2JSfxrbGIcdC92sALrsMG74GhDavJ64Hd1pVJiMXypGulGDSCdY52FLCvT2xiVHmptdU%2BSfSkwI%2BNGcn6bh8ZkVQ1aZU97DNepTnRzAXO0QeK0nAYwFBE9wmJOZZmgi6z83Mafxc%2F%2BzhQmeJP%2BatGYQ%2FKQvvJxIT4hwCpzFHQaInY0eMmNbYjXHc9YluIv6d6B2faqcY1BLJAjKfAv9qyBAfwmTeoiomjD3pP718upy7I1znumMHo5lKLF4K9gE51aYGTwcBzVCWPuzHPYY2a4jr6ejCRLThYFqJ03MYBnf1rI8YjUr6XEv2rXnA6gucO44UlSu0u9MIfOjsMGOqUBwb1jAqzemoZ5j4jWMaVawnZVJACF5wSXSzwUeAWiL0F5EZKv4RGItcCWJvpw65N%2BjX5DMnHdaXMDjGu1tFRT%2BXGlcasel75heLn5WONr8i1rAbY9qh%2BRhPQd6rVoWLLknqxZmtq4av61e3oxiCe12q5BJpx2cHEfYzBEwVR7F3rdbk0zolVtc0AEcR%2BA8vG1edzx686SSJATqteBPux5dDJ%2FufNX&X-Amz-Signature=b8b9d64974120c04a971f9d639c155da1517031407df4bb41dcf6299b427bc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
