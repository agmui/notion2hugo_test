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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5OQPSTB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHQvhbGjkxaLF9wOEd8qxNffnwUO2ufn4ZkywG3hXcMAiBzseVI7VEzrsw3SHgbsr%2FRmvINZgTXTryvKXDFqg12nyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhY7o7MTT1Zelj8Y3KtwDcU6U3DS3H7nBxcA9ooNp%2FCy%2BFfya7gPZOz%2FxT5JorFMM64AiWt9sB8VJIra9jpnE91rCLQ5ErC5LGwzisZQeIsEQ%2FMnH1lmIM1unuvCuXk7vukm%2B9mCzs4dKHij%2BWB55iCNOabSeN%2F04ZVU0wyaB4mRpVZAOjvtGUG7UGhn15pE71%2Bi5ttCVITGmYbTM9h1o%2Be29nlwQTS49eCYGNbmnGHlIL2D6IPjDhgeEIgBUtMqDjPxJ%2BIXPdyFOmr%2BuNTGwXpDpFZHf9tN4hT8TEH91xURNN5izVy54qMzf3Lon8Wf5IiJpUspOF16lWDIE%2BGz1DmjrgKrCW16AjZctYRTAjRAtzI9wBFv%2Bce1xcLH2o9S0cNfROjCsuNu8%2FvcSl%2FhiCPvobrq82PsA4oub7N086Gh8BCPJKGC6L79PJK53F3HbWfWotZ7xSIy9qq5fVfYaU5Zl4qBXBdmVqt0ghjZ4CKkSNcTP71mIIgwwVRiD%2FrniCYzSnOE6Ec6Y53PMkLm1wZeVjGGIJi2kqIgD5P93jlu%2FKVtem7K%2F3%2FUXHSX2nnA6w8KyVKxd90KzYHxiOdxSICcHJy6qHom7hEvpxNjVhdEYqj0%2FuB7W8yhLKbdJrmXyIUIWE6y06ZtHX7gw6reuxAY6pgFIUfYoj9eVQIDqtSHKqPcXPh9yUb1e28fd71MYRbDDWBx4TkNLVgaum6X3CwIIxAruhQ3OgGkRHAY473pRXokabe3MKHrHPSWBmKB5ZRYptksJzS3DlmngCtBOsXZsclF0O4mn8IXaw9YcrYTJhxfY5yiL2ll91P7qeWjxBAp3M8wTAla6KwMXy1q%2Fpbv9B%2BVouEWrnSO64sfsM6HOD1md3%2FupX8Bn&X-Amz-Signature=a6d86119ed6b80347ca8d8bbbdd6f80270c7b3d0638dc806fe5d30b377e4cb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
