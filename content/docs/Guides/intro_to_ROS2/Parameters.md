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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAVN4PEP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCUgpxY1%2FHoqhfGTGN675t3iorL34UnCvZsO06Gj5%2FkWwIhALIq0hWewNELJduGM77Ru0lVp3bTijyhXADiTnsANq2EKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNk8zMq%2Be9YabysPAq3AMBsmq%2BS8uNUo1WJMbJALzeFVLbJ21skRd38cTkjiJqEKlnnBC3kx5G8QiomQYVB83vCtODAPcJ%2B2C5vO8rIpPJNc2jbQ6J7Ak5mPotQcYWaleXIsMZEVyEeYxe45TjFufn6f3fYPSIVVEpU22GjmEDgeAMTPSmjK18KdB9LgYQZJ0sGZwqz4miWaQgPep82HagZ7JmmVNey3MqGWwb04a9P2Yhh72qZqa2CDjer1y1b6BXm%2Fj7wIrDu5N0KubktkyaF0FhdgIvAVxws0EX2CGOkSuVHyyTkUUACIO119W1s%2FkgN5GcaS2eY%2B04Rc7craVs5FjWsrLGxIMCw4ECo6tjl5D2TI%2BEqFMA6kFpbXKPKMKldoNVoFDRRtVGSvrGeQbBJq2p1bY5Ec1g9m8A9D3fGshKy7z6gTiZXOWh1jIiRz2yEN0LJDV4jxbiVSJcTQpOqTVGz3BRFb4RxY5ylEdUdrXcwKZGPY0XbBqDNk%2B75EbUPUcttxtCXk6tDQEwCe5Fj2s73yB3inQ0AcDxCS93nMmihPgLk1fDsv6fP1XUtiQfpDRCFMT0UE65W%2BHSFmsLdRczaB07CDMqKV%2B%2F72lrBzikoWiMpwmBKsOVe11Mc1whrG6djnUGSdXNMDCC4%2F2%2BBjqkAW5Tq0HLj%2BBG%2B8zSLOfIHzhHTLKe3mP5aYL9tqlvYKKV8dbzo7Sj5a282O0%2B9eLRT2dzjPyUmSygScbd4x%2Bo5rikBbStutue47GLbeA06%2F5dV8BXDe29Zy59oR5zW%2FF%2FYTSAOolJv21LHyW3vYqZCyHqeA6ue4OxexCnWWR0wkIxHhojYEhOgO5coPGerUHeOElmvKrVytHTANAwCeE4ps3XjMUe&X-Amz-Signature=ff4f644ad18fe429f4d0f29706e0015c97869bf7f4e0422fa1a2d97d649f1973&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
