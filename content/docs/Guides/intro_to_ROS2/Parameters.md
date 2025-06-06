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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPILFXOM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIANQ8undUeZXYThMVQE4wuKxOtcFi8ZzHV7IjK2MM8jNAiEAjD6xjpZSE77AnxPWU0d%2BpOur%2F0tpY2EqDNAPvoEA7xEq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNG7hmenm%2Fv8NpsFMSrcA0VuVx4Kvp8kV033K9XHikZSci4KONZzxVYNJWWnZeyBN%2BJGn1oIwCMRE%2BQ91C9GyRZbk1wjHw8DbeNoQyOzevS3j%2BFaxy%2FujG46fJ45U7rnKTF2Y4fCMPET%2BjX0WUFU%2FiDFMW9Kd1atPSZ3u7M3JXUCKRwEB7E2R2KmMiCKXCH5LZbQu3pxpTCKUwVkP7s0MoESrZhh%2BxxJgnbvT8X5Azif%2FrRwWlT%2BSEf%2FRb2LJlDOSszVOpasntl8BzNdClmySRNchSoxqlDQazWGeadpJHuBVfdtiqTblmvEn2A9de%2FSa7y%2BuqZ8DDLwrAEN%2BP%2BdGHlv7rdLgUNxhpJ29jjqfNGLDhYGR24KsdN74zLV3WQxL1V9Oad7JN5Lbj4aTYOecw9YhvioRmq8z2ZDUfVUlQac9PQ5bD6PoUtxtaCSrtXgVeOAMm52xyEU8AyXnJlBJ9ScV1INApUmJz%2BrexsWTnGYmrVbkYfQ6dChotbiJcMi8GYw4Uy6JuIHO68mJT38ZNz8ivu2G78zrZ8S6lERUIap2Zz4FdEKWKgb1cWWfJLL3DFScl28E7eTt2sqf9%2F22%2By5UqMic%2BRX6p3gY%2Fz96apFyadrMS4ICxkgjzDjLH5HE3%2B%2F4ZU8OCabZFcHMIDYh8IGOqUBE%2FXmSHdbfqDwoTaXBBA4hJ8JXJglULh7KpEnlEmyPOQRgX8%2BHOYCqwvbW2cA54DizMhydA6mf9G1xN4x0u43lGW5yOWAhXp3jAllg9XKKf6Mu5x2KE%2B3AeadzvW7XYc%2BJvHVfGRalrvMV%2BppGhGesG92TeUGzaQOvdwdISsYOYngsr5FEhNbKD0KO7uVNaFIULvIj4vCTSyuFijGq%2B%2BcSEFKF00f&X-Amz-Signature=df6aa0bb87eefd07fe16a5a4c8826ffe0b754d41b5ca01731bec67e018b19a38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
