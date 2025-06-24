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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDONWVI%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T081324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIB0Ofk8Wq0fpaU28xyrUel1RS%2Bsw75DJ67uNB3CNK2aSAiAIRzj0ove3uSaZVRaGbd4nH2qEGJCL5CIULIjXMwKzOCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMEjL6Z5DEW2uNXlsxKtwDLIMtzeoQG%2BzUXWJFWMkwRr%2BDvkraxkdoAsqQ1v27p0p5vUJNJTSvN4ZACKIwRmVOKi4E0SBDBov6SwIT%2F7YymQ9CPxk6C2yJGDImIJdqmfbUfuPcyBjQRWlTUeZClC97GztGadVZlubas%2B8qqYaHaMEzZZqPkkvjK%2FUzpC7Rp8Ler5YS0oAUZgIVE3dFgGo974vXF5Sqx5B4Xu8fQr2n1ti7fM7p4ejU4mB1JKNJdhkza3938nUihRd52f%2FBp1CslcfF%2BjWdHE6Hh2f1Ou9oDECZ%2ByQjT8bqWqQ3e4UDdgO%2FSJixzJkaWI37uAxMpo44%2FBPxUyjuBSe2VjGzE6fB4y8E97IBFG4YxnptLokzBYsGemgtZKB5rRXCc44R06Gl%2FMCuciH81T5jxQJ0%2Fw9OGhSxADuY8qxrRqzSOTTV6%2FP7TR2nGgoms1czqN1seOLnwkD0ERTbIrL9hCZ9fdz2Z1Kz8B%2FKKQE7eIFgXsHezHM7YsL9hfn9uV5%2FvNScbXxTNCwGWYFNZD3AAKrXF9e2xgRJVLidzptdq9NEQp0sl1p0k8TSDqEDfrnMWXzw1yTp6vc%2FJ%2FK%2FcV%2F6m1Xj1JiIpoD91kqheU75bo%2Fzero48X3vpP9cnxReCkCmvpAwm7LpwgY6pgGfD%2FC4G1Ks5NTwk0ZktW3Bh5Bhqm4g8Qnc%2BzrmWjsgSymB2uFaslsURUl5jKuMQnDmsZ9Wh2oi3E3fQXz20BZuGCXH%2F40iZr7PbZ9DSwAWXk5mohLf9tJiwDQXjL7C%2B06%2FJOIwnCt6KY%2FG7qyIc1BHbYDP7aQV7f4lm%2Fm0ldcYYFDdH4oGRIaRZ1dMKC3U6%2BTcRTFK6yrVU8kCegxyqslykVDP4l2%2B&X-Amz-Signature=759f2fa173015e6ae1f7d8d3f4fd41cdb3153528655f5ad173d5cc8c2a601f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
