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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5RMXEU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCjTwX2S3f9%2FUw2iFXXRq1CIhIeSZ3crxhbwiRMjdbFOgIgTLyT0f4EbYU3aClVCuSA0qvyh0J2JOzNZ59QtJjsAmYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBY9VxTvetFlaJKKTSrcA0QV5Th1UXcF1sOaFnPr8C57IaC9o8i%2Bg2Tu%2FXxnA%2Fwy%2F0fwIOkxOlUBWXgoQKlUv3OMHcQgx8dCn3h%2BPKFEEIX9V3s23x7uaTuEicYWiVW1ThflBDXRWPZOPV1N%2ByXAVKDc6LHqTWWEOxvavTZ02ABeNup%2BlqxDjPZhZIBzlSCdi762k2a2lQRd7yThi1JQFmSw834ElIe8UdOMWwhxn22CasIdDXTPqef2fmINHV%2BqXXKm9AjtEj99ENZwuH1GkBBlKU6nuY8e0D9Q3WrFunRKE%2Ft78y8ON%2BAcNiEMnTttecfTAUcJthh3j7wucLVuCR4q2Ivo6rTpUePS5mIDHSrP4XAcPpNoS%2F%2F1VETY6nHtvqbM9eFsGwS%2FrHuQcT5BLZx5jMNGZkV0l7x11oYUl1j4hp3nBvjfCTHaDhZ3vz8pdTsHcXUiUkNL31xxs%2FdboS1xxkO6bYpjzp%2BLrJUKWFfJPn4CHj7TnTHxPc2X82UWIe7%2BzUsa737GVOIxQpepjotnUG%2BvoAU%2BjqsXwqIZjE9djRF0rMsToB4ta8lmNAHYIsmNMsGw0TEfr%2B5EyknBH1BYYg%2FDeSGOKkrKPOSMliEzTLJsbH%2BSLh5Xq%2FumAlAn0qOLhGzrDfxwTXK%2FMI2OwsIGOqUBW63Y6kCBmLrxYsYEKE6261XbAB%2BBmB8FbZStl9lVRG4oWqOVQ%2FIPlcnmic6%2FrqE%2Ba%2FzMz3ORW57v9SnIlDOYCRSfb8fCP6T0%2FqOPu2sd1h3BH3nyIRRdDMkHqTO0m2EG3Pn%2B84XCwNyQnvjAR1ejdm9Zd6psqJ0nzmQvrLZGVdaQcvmlJwFgdprXcpiYHtSL%2FstwrYRRMBAY92LFpksyd9ga3pKo&X-Amz-Signature=65329918e32f0e610d1cac0d6d482280176fee934c5b5f40f9803fd548d903e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
