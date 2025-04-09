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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAQN2ZM3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDIDf2jWUowFN9aOpAnilQo5PRmUV%2FBzt68DctLdAey5QIhAJPhZYYTMb40AudLrLrdWZx%2B7zBQk9XclhHHB25fdWicKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzfo4kXT37m1WE3bFsq3AOxrTTnD6nKskVHcEBoparc9g44uUIbZ%2F0H7pHS6VNPJ2%2FN9Ne6UtvItExIpejJsxHy1WjCFLGeiOgW%2F2wbRlHT1dtpkDq8MJyrfz1M4pa7JJWaVszommmp2qc1GUs2utGpWd5%2FW5QUX0X%2B0KeM81%2Bx9dCSrn6%2BtrpZvYlmU3R0QSPDMxbiXKlCzgniexuj175xzdpycfjzPML%2BKJgGlN4WySeGdedms%2Fy%2B99Oz33OOxt0dNWH1b8Y5k5N9IsYNkCtEiCnLdT6NgXc%2F8ZuDXFZyDZbp%2BuAHJyrLVW1Vej7y1QTiDzdOGsOLInbElVtbZ%2F61tpwppvAppiMQawrnGyPLPX1yo%2F7B86yj2u0fRBgnk3bwWXVN%2BRBrINE6YxuCTBGbUNNF1QLrfUcTWgWUfRnTAPlYyiaEKA7jY4%2FuEjOk8hT3WC%2FOM3vtElOmCG1b2l2cIgpD%2BrrLhkpzKDN1gSpvohT1isC2r1QO4rSKDtCCuyozxeT5GUNJ%2BctJ%2F5LwkHSRtfFDVOO38majF2ac2CdsClHSbGhJFV7YwXyrMFb6zzsWXgazXX%2FVaO9EVizFkW6Bvaajhsnxi1FcuZb%2FAYAo%2FSpyMddLSGO6yJyOIMNjoYHgU237idMSGNZ0LjDOr9u%2FBjqkAS9UeQa0U1bLf5uJuRbIMRT0HNN6sjgPAtUudxiCTSIf%2BDEU%2Fb8YGShfUdIkqdi5piUxIqoMIeh5oTAu4095EIwiI3CgpYINk1Beh7z58jQ75zS%2BPIvVeS7xrhvF399%2BGcif8TcNEK9DDuTqLyvTK%2BnBIuP7lafUsywdOqL3v69uoAXf383%2FS1TGknwwZapdpOdc4j2uEsmG6SL8sC33lNotbqDR&X-Amz-Signature=d1fd35458be8b4949ac02ef1fea96c4784b76552fabb5cf81bfa19eb049bbde1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
