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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXLYDIX5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIDngjOCRfrKUdIjAE8clE7wkf7BrWdImZr5lcnbeOQwVAiAb%2F8th9BdGI5hhQE9jDz%2BobPB1lBPVG5HAUlVZssKcdCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMFxOX1rMNi0krR%2BnqKtwDLraSdGfQQqAIgqCHjTVnwLDGM59B5gniRp1XqD2rmKZulEbp2IQBkJ16BtbNoJFVIOGTR457JPc5SbNepPWPXEInUUU72M0R%2FWyEfTnNHOPBNgFnCePIftigDyp%2FbijJFIy2uFoyZEHUIueyezpfv1sm9H5vBLrl6jqw7zWzbINeS%2FpuL4R2YSXAzjCjDjKyIahVjtC1PQiIixYCpEiRXSNUm35%2FwIONy%2F6a1AdiqGNt%2B7nGFY9aB92EcGc%2FWjvyc1S84IuWuI6G%2BJYAR69OpGLxHfs544RbAu0fzq6DPBjpx%2BKzqctnM5qPe3zSHLCV7bLaAJhYlad3lcyAXTrk%2BBgLgNdLUOe7ENqa%2Bz9vqD6zpIPCMQR8ZmyMHwCbX5e%2FfqTfqwMdBD7ZPu2XXwJjeGAVWy%2BcMCE%2FCoBf%2FDINgOdbTTfYq62ID2nzJE6j4fIc4DjpWbvkG%2BBNeYCQEypf%2B8xwAUW4A6rwljmy4PXuz3CNKpCsQys1jkUqXc4r%2FGqcH9BbnvAlpOKBO9x7rPUcRDuKnVgPQ%2BmVPMffH3LJF%2FjrNYwzXzkGykdfj%2FqFPplcG0w0bxDNNwnYfy0FI2e3F81Oo5dE09ntdHhANuGhbtgyim%2F2Pvopcmey6ekwloaPxAY6pgFlm91oL537orkub76GdDoe3Uxa%2FcOB4Ze%2FaKqCRWFcdaDqXlomuwBf%2F1BCOYUGkVdR3oakYOmDjb4Izm4QvVMhf3SXyC5x%2F8NUSDrtCGe31s1eMu9m2vnhNEqET%2FSYb1X1aTE7L9E1VVmGsZV50uK6NNBPtKLJ%2FQeR0KeM8pIpEsNFEPjDjlO%2BPtoZU5qFrhh5hZRmXjVfd%2BGv5C33gUr096KQAnce&X-Amz-Signature=edd6f68bdfeee7d37f6e5e506866b8c44446f2c74739c009b7374b9fc771216b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
