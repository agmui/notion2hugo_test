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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HVF3MZS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDjEC78%2FZgHbRys6jKKU0bgQFXq4njHaFHRaICN%2FqejowIhAJ0Qk210Vz6fXGftJF9Oa2gFUcTRw0%2F%2BIcn8tm%2FE5Fc8KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7%2BFKjc98pg8%2Beo1kq3ANo6XJgcah4yxfJklB6C5V7d2RQhmGcg09I4R0gIjc3gqLpS4ROmPHeQUaaAo1gnTXF%2BvKqW6HoTbeHknsq8tH8Wb8fhi0cxrldGyn5k8Iju6UtA1KOSHiizw0kldRQXWeuUl2Vxzkw%2BQRE8%2Be4YCQpdXFesgQHzTzMzN6Gel3YC7zcJDtAkA8jcwOO2hVzOHQHR0S%2B3EGpE8ljFpjTOI3Gv2AIPaIte8YXRCcjrgQv1OHZGHK2S5UEGO75UoAMKXypfvtDI7Bn15qoVs%2FWcdX4NnuPoorIDwmH3GeM%2BSJETT8MpYJDxqzotpGWT%2B9E1hX54qqB69HJU1Ls%2B4Mur4gwKhCGbIlBoLnNIUZcgHHZgaPyQ3EhFT80kJOt6nKGpdrFSngYZcrTdHxaZ4p3nSoFQkptEVLlwqwVAeevkaOyB9j7iEfJaQJKe4HRF2BaSGL%2FVzZvtcMJDCm5ImagtKuITZrb%2F7qVSUihVDs299mXO0fLOfuvcSlw%2BphMviuchzwa%2BXmVYuc8D3iKDZmrKT2OozeHpvk2fnXCpMzqMfywwO%2BYvSFWi0RLIlczwCEwgT8CzGLe%2F%2Fy%2B4SPHmVWiyR6L9kXodP%2FMw86UCl3n9W8n5NfvM4GWx1h2oDxQ8jD47ZrABjqkAZWZmvre7eYIdexbVunkJP1eE32ZQ9z0rjZfUUOk2G82nfZ6wIO1MUKUlTfO0f%2BzRBPNXQN07l8RZyKiGFcBHEbkRQjGAnrcJ45TFsW9ZoVIEHIdvo2T%2Bng30XhoDYiEEYkmoyyNm3xF4UtDVGp%2FKRwhghA28DzwccoN7lLW%2BgeoP3CmEYh%2FdoTNLrWLtQMRFF336wKp3hdBj0lfYAM8OElrqA8n&X-Amz-Signature=a6dbf6ba579bb0b4f950fd13f4b51add803eb0469e3a90509269886d53bf25ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
