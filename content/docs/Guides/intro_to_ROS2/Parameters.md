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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RZXC4DW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T061137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2F7gBmV9dKsU%2FHoXH37lFuahoC6GXj9izfxKJS%2Bv49bAiEA2v3zaVJ821h98Y8nknbnWfB5m6uYMNqmeTW9%2FbHU0pcqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5Nkedido61XzRDQircA7YAqCXSgDt8VhmWHgbSulMseaSd2vaZKF%2BRK1Gl%2FWHs9pmJcnlFQ7VJPPNLYfsi2XG2P5qybZYo%2Flc8NhhfGDiDsgzshHY%2BUGCTvsWb3StvDhr2a5Y9SN2Q5PNlVlGM5iuaM7YFxQLzGudtzRZVjtvc7LLNc8D%2FpK5XXi%2FjA%2F1Mv8Fmmjaw1fMmG4BUGiyjoUjarLPJY1iTNRVcFO%2B0j8fP5F%2FSBii7JQSjHo9MhiBzyaw5RlehU74YVsesH9lVxeERubFpGUSZlYw0dbURB%2B9PLlLlgKDE25sJ8NRuEc5VoiEuuPd0t54yXLNrj8Y9MCNTVklXS3sdDmCRtg6dWWUkZ7crzXW3Ca05HcgiaT2eLBuV%2F0QChbW7tmARX1c3LefXg2a3AJSoTtsTmzquq3q0OPpSrvAjHSU1rgm4ahgTyHOE%2FxQ4zE%2FA4irX%2FsN7IYJnKSzAK5MBpwPEAq%2Fe9waRD4enYh1yNTp1zvsT%2Bmbov%2FuV3OfHvRP1xpG5Rf3NStOeKsOSnvz7q%2FSa1DsQtK3Z7LGmYoO9cnBhM5lToJcSe35ctvDBWhlofPuye0MZeGlHwFvMNKdiuGjGmJfr1KiUCbCedPg40wPW2H%2FgcsN8zH3BBnmGQ2yfI9CMMIfmyb4GOqUBftOgpJgtFlfpw0ND%2BuT%2BXEcXvNo0RBte8wYGji8s148tkK8sG9cp1%2FNYR6ZsysSIqdG85VNCWTKPqJhFxg%2FUnZOCJAlrA0bvOiKkcayNRp1COf36Bpt1ymMoRHU9Rinq5AVXsdVH3sp452F%2FKF%2Fc0r0LxBRuYmmlHdpuws6%2F3B50HCWCJ0IqRJM5ikEHt%2Bhz%2BrNkRkRONwrlPeJ6XjjeORDXllKW&X-Amz-Signature=f6be09e42927fa0b78dba8e8e78fd6ee3d0e4f21848e979b5480abbe08bb0bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
