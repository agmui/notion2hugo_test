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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6XOYD7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCzU1%2FbAuORyebs1yAn2%2B5Z8DSnBIzYuHmhrFd1SHQehQIhAONAkDUHLhhppKGHXA2%2B1TBprK9isNt6191up511g9WdKv8DCGwQABoMNjM3NDIzMTgzODA1IgzgDSgxotOW%2FkDRTjoq3AN8lGvdR4Evc%2FeG5EDzHOsnATThVv3wQdqAscTDf2Tx0i9fJYL5GcmuHmlk2RugEBxjg7e16O1wz9l2ngN0%2B1Bde7sxHDo2mCL35onFhAzgRYdMZGLku68hcvhApeNF6d%2FVne5UtkwI8yCZMU801y8%2FCZvLnlRPlqkbDf6D9jdisVWjmPiV7Qp%2Fp8sgiaEbBM5AIrACJxyQsbXHCZ4UVjJLeEHc9jzGSFB4z2W8IVGOmBPSAiJH8qFfDK4oJJHxZLAD5O9mkH9iDJsXwWCzN71hI0vyZtkjpeGxpscGDMNxzUMlq2mpLJjyFLuIdgcLkY6VG5PZuk%2FXquaCJPAxnLCmuLzIfin0wa6MhGSjxCJ0knlBgq0fBvrPsq0wkKSXUJuDgblemaR%2F2RQPk07b4%2Fgh2xPFXv9lTm%2BuDEJaluBICCrp56bY9%2BtYpGPqLXrSmZDcrlCIHLhCKwlgBKoAvT3NHjXyZdax1vZsRpGojkO5NaFYpdp6xPQIKun8twYoL%2BtetqsuZky8DzRuDp5QHAkiOxVx52d%2B1BxXF1pRtvbzU%2FrOHR%2By58M4I7%2F%2F2A3BX2FzahcfEWLDhK%2BiJmAOWjHE%2F9mpZzk0I3N06%2FSZbPmcMYGlWZ4qDmnDFcMXwjD94%2F%2FEBjqkAcBjbLxuNGwwh17EnPTrTHdt0ZqJ1KecIy5pU3qY6aoOAJiy4ljpuMEy5FZ2q%2F2T7jWn8lN45pBkl901DbZOGZptIGZikbtpX%2Bi9jGWfSYbgHJnB8jls%2F5%2FRpqz%2FYmkWTgNPfBEn2Pj29IRLeuB99cLbCFurE6PRg2so8s6H0dxFkQJiNHGwWyXuWvd2Wd1SFCekvBdgjtwAPhNSXW7hMyZ8WOYn&X-Amz-Signature=4cf216f6396dccbae245f386ef9ae86ce3ee63f755eb28225f2aa52957247b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
