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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4Q74TL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T050827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAeka4bLwy6kHBGYf3V8FKo29Ekr9ivlaoPPtAVuF%2BtgIhAMFaBWODUNS5B2ps%2Bbpv%2Bt4bwCSYAqAiayizAC1OvHzYKv8DCFYQABoMNjM3NDIzMTgzODA1Igy3KEJkQ%2BE5l6KSrNAq3APERluwQLGft0Z97RiqkIlMq9G1jQ6CHcA2bu%2Byp247%2FkncUr%2Fe%2Bql6qHTgRj8WWYchH%2FIEfmXTLKDllmexq%2FxFAluFiLvw%2B72cNsCbymzKcqdBNmXXaVdqXRmsQch1PO2IeOp8eIlbeZgl90tESjiW2WqxuhWlTr9GwIqm%2BqwNFxyUFbZHsdGNO%2B0bySytJRJ3Hr8R3ErvZcDpq11g2jbosODIGV03aaLLnxjykRWKDRBq23K8YG5SgqJvu76ZK8iMpW3nh44M6uz8ASNIlWcoPxoau2b6WimNHeWoEAGuk2D1%2FFMb2cmY4tk3KhTmh3%2BPHwXGEPu5IE2OSdL9C9JoMdZpO%2FNt%2FWqLoDfdT2bAkUPfsUEA8S%2Fp1eu5FjFZOcA1rg2ElarOKEteVXniPup%2BMJaeI4tM0cVvDBTHYIBqV9ImfhgTDvA19SbJAMpJBuRqXjf7qb5O6YQ5HePgthR54BQ6oHXO%2FL%2BxrPyuvAV%2FprWd8flNn1DCjBdu9Oo51C%2F0vd54Jop0i7v9vDL%2BfeJt%2BfL%2Be19jbavi99ffP2OLYvn8vqDbN3cfrmd2NjG32FgaTgKvA66OmRKo4mJOG03Pik4vJVSiXtrgTIoEngZfF10sPylP7fSfbI%2BsuTD28rbABjqkAUD0sG6HJfLFBeHEc%2BVSQydHxbLHyepJbGIriovu%2BB5yqZj18jgYRtMdmZqreyrQAhBftqF5RvHUeo3w2fXXhpssZ5LTozFMUecZdBsFux19WRsyYyzJirYPUzy4rKXCp4LlkeVeuE7%2FDM%2FiDMCjYz%2FUFVF867t4Kyy9x64LXCuNI8%2BF%2FEcwStxoXkfEFZLr0XIqK5n%2BjujU2nVt2kJ%2BrMUfeLBi&X-Amz-Signature=b3be29dfa02a245e4c077954e5ead752b44891198bced432b2ea4dc4d6971d13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
