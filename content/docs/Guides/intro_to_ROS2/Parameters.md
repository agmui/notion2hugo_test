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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623Z4DXYE%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXeGsXrz0RGwonTTQ7AE3kLwYIPhbnVRpcv45iC%2BlBjAiEAhGLCitSbmvllzxjJHamDA4waR8vUxf43hFqMW0u3V8MqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSPnZoRmO2ZWbZymircA4L9UK1%2F56c4zwoEENubI4q5EcVo5%2BAzbKi1PtCRbNd9PIbeWUcdSPfKFTIqeZC20UsauZZAdDRLeQlkPqt8H6mB3I8g3YRf4%2B7Eyr3ymHPBUYvVjeQJgpHur1QdOqDxPDP%2F0y%2BJXtdt4D4LTM7luHiWiggG1FLRC%2F3RhW%2BA%2Fs8AX1Z7%2FceTeYR0dPSqcOJne%2Bck%2FcIG6A%2BvnhC1D7j%2FkIfWrFit8FBMrPyhZgA0HopM%2BEgM0a%2F9K506lLmpE3JZNGqOb6V2AffBEtygEczSwvjCl2OAvRMSd%2B1U2ledrThDQ3xW2SD2foAwL%2FmqkxFK5AHo5mHSd%2BvLzfl37zPU0uLLiJ3UHJbPASOM2AOBrhbjwEmapbFYV%2FR8mujSHB303OPHA9mf%2B54otStWEHp%2FFEGPxL0sQZ4kD5lkYDhYVysNebSkSMtaAZyx2fU4aDYdxZbUJyIHVeNIXU2MZZp0WzojLY9MTi%2BkkGYAG8aebdjyn2NB4kbKRbszzDNPObcOJ%2Fr8wOfJGPn4LgRSj9NTFzjeWTAaYfb%2BbM8foIyGOQiIiioKvJUXnhCDzQmcPIR01leDAj%2BU7QOP3T%2F495wNZ6HABfwKcx304S25LE5fY48SI%2FXppKNID7q5eeZoMIud5cQGOqUB352AFxszL3Gx6yleuW1FL0hkyhAvK%2FCwCpRnahvo8Gd9mAcn1s9sspWOK8PDP3wJ%2BwmTJEdHoNlXntT10S78T1qSGAPTrHAtscicN%2Fw0horAQrFF2citt%2BYRLjZ5V5rgfsZCzslSUcZmRSZyPoqwSc4fUfctGg7B8l%2Ff8gUh3ELI9E%2FG39%2BHriNVHo6IB2Jj79tmHjEfY5G1C69UsOYa8GLYVoig&X-Amz-Signature=2cbc6a7955560e7b639ddedd17d27c2d227f93d7658ebd92c94a89e766bbba61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
