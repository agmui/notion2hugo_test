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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVSP3CL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDoITmVLIpy0Gku4JK1gkE4KFyRIyIWWrHUcqBoVt22vwIhALTA87yST2vBB7chjnnZLHHCzQK0Ukf2%2BoEXOpgvdt%2FuKv8DCGgQABoMNjM3NDIzMTgzODA1IgyMZjTl%2FuRIFGmoOcYq3AP1msZ7pGawO3CbueGc2pUA4InNdIX6kysLpAbd3cE9te%2Fwbljx8apC0oXuF5sVMlUAMN2hyfFlP%2FuuO1iEpJWSzHSNwH4q2f3QvJN4vGAhqfOb2ItYc0yGbrYqpXJvcv4WV3KMaEIK61DBKX6jBl%2BOK8opFErNAN3zdrVKMdvoHa3vCn53B9wBPhrAOnesgavsaXmTuJ4jvhrB1cZ7tv3abecZvh%2B0vgXRtFt8eFQvYR%2BdJKF89I%2FdcDu95B8xTM%2BljUxYrt1aEi1PFYcLCbRgQeoBBWZ4XLS6IY2IZE1hYanEtWzK7WlMSz21W3LsgE0Jw2wCn3NumhDb4%2BN09qPKNcCPaUVY6iSBiJ3zbroRD1VJUq4y5tPMLWiX7vDMziz0B6Kvv78C%2F7Jbxk%2BgbVEuNteeRr3vwbwd49VAUlzY4I9%2Fgltq0aCW857Y2tVbTc%2Fq8cVLno%2BN4gzLH8l763TIGxDCaJ6wu8i0%2F7Gza%2BaAE6AhHRNAn6VV6em3YHLk62nzo%2BMIw0ixMchMf%2FiAgrVz6MYEGEhakH%2BSHcRI1MwBfjW2%2FEKpTxYXGozZB8Ut9PPTkt48tkuc%2FeuvfghvcjckST5P64TijcSNAVGxr6u4eTinCRGewLxE5DAsMTDOwpXEBjqkAR5B4uvVz972ZJMOdWpMdZ0ggrYP9EsRhn%2BXk91kLK4d2H%2FPG3O4%2B%2F9X2CvpH07fVYDKKtjeHqdDq0jeuRT2FuJgxOkiKXBMURyLYdS1xm22gVja11KuEc1XkuvZqg0pHbebdPFfINOa8oEt1GsDj8XXTDZdx8r53ulix4Vv7Ju1a9swgqYIU0O9jgeeLiawgeuuRbtld7PcYw81Wag61BqjTpuS&X-Amz-Signature=182ca3e49dafa3d511357dcad43f5dea893834226b086af5239f5524e9347c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
