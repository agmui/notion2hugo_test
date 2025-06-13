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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RO5SIDF5%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIHK0DuynqfA45gdjXbSrNGtMJ%2BgsTh%2FDOigIcVMu%2FGh3AiEAmntaBQnSxZvvrSl4tcaok1q%2FZSn5JdoeBYqBOau5cf0q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLL2oaWVSiIXt5O%2FSCrcAy2rJ8OQRvyUharhn5pOAq26fvhtiKxnXrM5Y2U8clbvF2k6aRKa2rEMgsqJ9LHbX21EK63QALjAkuXvwngUlKpt4J1W8ss0XW6wKOL78y0QIBN6jnq4kpn2%2BN%2FfN0MbUNVTpTjT4B5SF4YuKdM4zfIUPKBZ22vubPA1wwtYJVH1x5Icm%2F56e6f3kZAMj%2B93JvOQwmosSUaQ1xRZXgIJpdwP4oW%2FC3PGu%2FJoxyUxB6sB39DuWv424Y0Tq4sfTn9P9%2Fqa9RlCOIQI6%2B5ULrUFH%2BhrT%2B5ioSVufI6fh4bOgdbZNuLT9vVRck%2FPYNBVIig3x9ukPR%2FfAPdGeudPd%2B8L7gqNu9SrW8A90nKMojIqIuLkbX4qMEQGS2IM9xGwGA%2BNOdJ1DG3M5JgVDQSOMc3FlQL7HOCHX9duamo%2FGEdrew3Dr9atCg2mGXkq7kzKhxauZTAWgAm2flRKR%2FvRKj7RO7DdEyO6qJhzNIIqe3gItrdPwknST2Y2HvY247Bh53VDegc3WWTRTpnRV9oeUyTRdfmUz35OytZoENxSJuGAduH1QilyIv2BMZ3Hyo9IbGWdypu%2BTd5j252ABhgxV%2BHF9oEMzz%2BPpP%2F%2FWnjqpa5EyJO9UolJpVBM37%2FYeqUXMN2SssIGOqUBpWofAaSs3t3cuQOnmP%2B4DH0JQuLJ5ScpSlzy0n1LxJ18%2B2OU7scbxmEH1EltIptZRfAklqxAOOoEy8z40a%2FJBYkFxl6nx9zZSe9i6ii4xkgLmVvRbahWZMxeFV13%2B09u82Ts8Gc5qyMmaLKRGId%2Bv1J5xjullQjzHwAi8OlZl9EI5uF%2Fv8AMxms8jwGEBQcFDwMN47zrgGhMlGhvk6%2BKZjfhved2&X-Amz-Signature=c696ea8bccc16235ac2b274c034e07352c4925f19e325097341a17cdef4ca90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
