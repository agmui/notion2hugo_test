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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWRNK7LV%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCrtnsrImmdOtFRoNUi10ba%2F%2BeuSiBhfilmza1P63JEWwIgQZ1eyWBaZCkYaDspJvCfxaI8iXln%2F9%2Fm0nA44mMw6KgqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHXZ6YM12HgIXoLhSrcAxYBjQXYP%2FulCJ5HvSNS0znnTv%2FZ5HYp3u2K%2FQFM%2BmleWr%2B2mLwZGLbE%2FCgDX0zOh3qpyCMluluFujueLv86ZAI6UROZc8YH307y2fTYA993ouOKsiYt03WEEbCEaUHQkLx7eUu53aI1m8pdS7QQIWNFseNgYLPifEgJPVyXL8O64eN3Kk3TNxLvOTNtQkAmNxYPahLcCdPjUS%2BDSdXVjKJH2OCoilD%2BFkStm5yC9tv6aoXRnVbOMOG%2FnSNRY9R6QCczFqJqZ3mkfbo3KYF%2FH7rImpp3hct174d4eQdZT4c5JLEsLbJMsXFajZoVcMTzatDR0FfC%2BHHax3kKYE2%2BQ5pYQ5Myf7Ys5aKPQrgtOjpy5AcSdEPFmK8nrwt5wviGrDbw9R3arzB%2FSTd9S569U5IyFi4rCDanYct4bFbcegw5rHepvabnk2T714Ew2TyB4UE918aymgUY4e90SEER%2BkfbeYTF24C%2FDdyv2OD0CO4NM1wg%2BoFrFZWrgOtMzlhqHmSvY8fOXMgSXCicJF5YHiqB6HAgXGbUkBEaVS73Q2RxAqnu9eTnO2Q1FV6Y2OjiCxa%2FF%2BQwq5zOVE%2F9URr7hC8xGFaieqQAGoVtesfYj2rX5PQR6oPolTGGkYrzMMunwsEGOqUBCQLy0KzuSqzw4ldt8kA%2BOL6pdZpE0Dtcz85VJupwITP0mKqlktLpcEoC8NMEnAEHORBC4pqdc1CYFfFccqC44qItS6D%2F02mB5LgCDonAFX%2Fe8uJaAc3zvBIFSfmfe2uCMNE%2BJXBvjFoScrHQd%2FIDWTryNETIQIxVMpcvcygtHCE2zBYvSzoczJibreFs2bajQYQNA9hF9%2F8ATFYj4hp2KTAzL6aN&X-Amz-Signature=5ac853b8755aec3b27029f13dba5c3cdb8d465281b1adae06696f84863a5f45f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
