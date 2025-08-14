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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOGOFMA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFx9vl5Buky2%2B7cBNzDbL3yxO9pjouBODdjhxbd8C7ptAiEA0iaPdPBnEbDnnRNrfL3A9Y0LyPPzs1qx%2BO7Nq1tuJl0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMJxEza%2Bn%2FdlyPl20CrcAxfVyRH%2FRAuCftMx5BxrmBai58G8mRz2TSumxUj6xsEl%2B%2F%2BsC9O95nNs5Dvzj0jGZK7iZqzYJD5zCTyTMbbhKiU4%2Fvqta6QRnakNzEPhpzg3aB%2Buz0WNZZ%2F7xOdhmTHiVejlXqsIi0UD9s22HPc5j%2FkM%2BpyDTkRefj8yvCZBElBOAaRzEcdoCM5i1ekJNI0xpASs3oFE8gC138Z7rLxLOlILDXJB%2FriBTvgjdIHtCsC3QMs1xzg5pGajdELicL%2FfteBaf3HDX4UKgbWVSFEflAy6v6nMyKTnJax3E1iKk5t6SfVFWHL5uz403oJ9sVrZ3utCwAklaz%2BfRkFrcUVtqUhCuynARQmyiF6dd%2BetoxsdDvf2pZwR%2BHxHo41acFwOK9LiHgBMT9lifd7eLKdyfZenR6rhRLe8eFLqRE%2Bj4IDlUCWPPf1%2BXn11a%2BYAwa1DjXnFtA8WbVwjziGtrFB3GU%2FdYzVRZxdYcQ%2BRIcIvgBVi8T%2FiZPzMbcNati%2BHIp5Yi7nJQigsdei%2F2XWudl7Yt%2FhiC4tExtwRL1sej2mI751v4xAfTzravjMx7An1unqTaBzCbClpt3JoLtOFYZC09aTFla4Ftu8z85IdnqYnIgau2oYaNhRSsfhaKiWsMJ6F98QGOqUBkxjd%2FZ%2F%2FYaAm%2BEcg0gL7Mo43Td%2B4TTO7NPXIb5Tc2mqnjDqtmVfbAVCcKMx4pvF9mR%2B3BhGNWL3MgkZYUDExVk8yGSjERvG0r4GK%2BvMH2An7bFw8f96tdMcecaeTpbxfUMJosM5E%2Boc9QhKJtU1Qoyg0vcDdhTvYkhQsoQ5QkFQrn5e7%2BaVMN5Z2LDrYMmidy2eXoQTMvgfvxSg3JKqTitCEtzzI&X-Amz-Signature=29750f7be2ceb494e279ca5cf6a1cd3caca45ad78c7b01505f40c13933c1a653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
