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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZAUJJCT%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDPQvGx0MJ0nfwaoB8yp62RNZP9sr8SnofKOOddAo8%2BqwIgRozGQ1iodz9naqMHBpLeLEw%2FcCH9gfWa4CwfBFSkPKQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDA6q8T5PhaFap4eJ6CrcA%2F6BILjyALShIQ%2BiuIgemEqoxQuAywYMrr2eawRj7mTNW2UriYWxOeta1ndg4QSMdIR9KX7iDP6S5EhewQGJSBxSUUJyg2TyrXJ998%2BgAkJuBwKNY%2FPPy2JtL2GXQ1%2ByKmo7%2BgBqeobhSthpE6TS48273JjFuAQ%2FksS8F9E4L%2F6f2jG%2BmFpx76sLSA7co%2FhBvy4bnVcureOodLWPRtQJ80czzH83HAxAeHHqQ4o613wo9n7zzySrgAjSl9IU%2FUQoR1QeYS4rYHopsNI1fKrPdyW9EoC90zN647fHcaZosx2Wv%2FA%2FEpGP%2BhV0%2BV%2BQSOT5S1%2FhN775w%2B2uDletOD%2F58W6Qg9q3ZwESgKqlMgVApjzYqSNltu9PoyhnLm20pjYQh4HJ4dA87Y0mNo2griNODbHgs4STkQUicg2ryIWZjXjQZfK1sqLkf5yj3b7bm%2Bc9w0WBmkv2SbjQrpx%2FcPsfVMg0jEGJdIoJWLcgJ%2FX8gf9753fu0HiL%2ByLIVHeMNk%2BT5eV309%2FW55eRuORLhpUi844PUFypSPBv1I3OiMjRcuXSK4kF%2Fx32Fzj9Qi%2FcYady5L2L3%2FJdCpjC%2Fzhtb3kmGkyyIb%2BmhhbDVi1RDDg4x5sdQdqQy2t4AqnFMxjzMNTehcIGOqUBVYZ8iB0rL28epFmqLSir0%2BLF5Plzf0m8IZnpAmwj65xoMjVIHMbIzuZLdtVzg6Ca%2FgiV%2FCVDSMeANKOLbfJmxcfguG%2F6LBlnlXBY5vWNUBZDgjpM5b7lP0T4I4uwlu%2BHSOP8Dr1nT3r4kTLOuJFKE%2BQa9OsbheX2RF5q3152wASBlaWgM1i627eXlBIwJykrrJUHCE1RDJCs%2FuaLh3X0gDOSKEZ4&X-Amz-Signature=36e7c6eee80c03d76cf00a06f6fc760c372c6700b1e0decde0d12c9297f1427c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
