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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVLJMWH%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDVcwW4Che3U3P9zrYcIC5bAfE%2BSrEtAF8ULmiJfAft4QIgUoV5uP9Pz%2BnyWXtmO0%2BDy9%2BwGpgZ%2B6wadTKu95rPhiEq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDL%2BbrFRju4Ta7VoPfCrcA%2BJyBazoHRvOtdGkMmw2dAfpeat0AVdNqHjtHBrohhj6uxBlm4KZqVVYdLNeI263lu5RfxJWTe6wuSm0HZZuWrCVY9StM8eXXLuJBYa19loGpryybYCchDhPgIfMtWFsq0%2BM0hAv6ueyDQE2SquG1vlcbhaXFl6lN5nc%2BO84PhnKTrtM8iWfk87N29hXb7DxktS5hQQ8nkvkZ53DuIqVJPk%2FRbpcRMCN%2BRe%2BEV3%2BlRq9CIELkHUUeO%2FpxlLUBVM381u3Dvk7TT6oNfXDRc3TmM3nzjCS3%2FY5YgBq%2FSRFsgztKg9pywf%2FyWA9Qr1pWxYsj48XBH2PvPqOaH4lMB6KuE1cbyu9ex2NZ7kLP7rzM6Dc4Wj%2BtJOZrtH8Yjvtd7obOmUL%2B7DwgYxMzDUqfW26pBZ%2B0MWSwKB%2BD8jMZY0fHXlQ1C3fH4E2GEhchnUkq2OEZjT9ia2dnQemC%2FjVSDWZl8RL51vecXD%2BM%2Bug1OaDgT7wIeoe%2BruXuhzoDjtV0cz1zzqIzES3no1gadBzBg3W5ILPjcqU9yPcLKomMSHgUzld1jqZUqcHIE0HL%2BqlQJrRFtmGkpvWGQ3%2Bzqyn%2BqDRhISGzvA82uboMmrW0Lo7XdKIh4t8Yn4RQfNFYX%2BjMIOMjb0GOqUBrhpzy%2F04nhguUJU2xlKvLT%2FVPcvmQRdsLVRpOOzBL09x97ItMKNvZ8XtKArZmjXSiwi%2BU3l5I2UFer0E9tUUays39rHs5JEFleDGBpCQaBo%2BMjzEhCEoh%2BmqxDHB1TOcg2pzG1K%2BU9gJzwfaS%2Bq7o%2F97QxYEc1exEFsYbpsqd1NQrGG0Ktp8LrTamPWJjXycy9s87olnShQU113TJrhHQ3H7OB%2BG&X-Amz-Signature=6e7f54c8eeee20dc90a6257568cbf06b19fbc8a8da1da6ac7e0e892a6a7776c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
