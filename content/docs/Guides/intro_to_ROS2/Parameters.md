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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHNEUZIG%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIAYHkODmqW1lPj4p%2F%2FtGOoufFZ19aGpmUH7pa42kYTsOAiAmQD3s7vKhQ%2FztxaFAXhYkc1V32Miv4LxNHOs8%2BGDI9ir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMFnDTMUaHOvCyfISQKtwDeGjID%2BW4rzed9%2FiCpW2xFTwa%2F%2B00IlOPDMLDCYAXAgJIV9JbaEaVC4Csuk5LB%2BDdzIVbqlFWFz3eoWyjQv8qfMEv1axnF69C%2BMBf51uQQmEcP3zzb8wpacPFRQdEOR5zuI7XGymkl7JlYxOkdMZjN3tQYM6H4J9OQ6khbO4%2FOKW%2FVFvhx9MY6eW1jrnDmNPDQrb9yix9VPvVApD2SOpeGb6RwS78XaIIzQ20Cs4XZsj8vcvzSUQNhUa9kjuLg%2BgenbkO31GOQXZjnDOemBGMph53WkmppV5tsnioySFvPCGe4cp7Rop1Gu33rXfTuDAZkinfHEcopBHlsGHw7ZDM82fcOS3efbsc0BjzMYI6d4vbH02waQXoN5EYX3lDZY6igIBKAcUTZV133ihagaJuu6TfsTX8YVrZvJZ2g4gW7ks7CEX2kjvv%2FQmxfPt44GLEokTCKpEyxG7GoOkYiamkx%2B86vT2kpHKA23j9VozIQbPDAQMr4yJD%2FE8NLdWSNTP18hZQuyr6qiaOmEbtNnJcogaQCPl5rfZ0g%2BPdrLkGm7GBwvmmWWHihL4yf3eaQtmH%2B2m7ylTvedA3mi7AzvdIYSpLwr5UZOHjwiaK45oYSnEXauDQ4FIesyiBDq0wntWpwwY6pgHw1wpLvz92fnU532vazAiRSJulT3jdaDaWQruuBdn0iaBxBg8MfB8aHNs75u%2F5nTVkMcunojnvBOv5TxtkRd6ZCABvOFQ6j02oLclZx7aPV0cmFcZ44JXq5hTuOZjbFnskz76NqtBl1Ze6Xf8cLy5z11knIzfNobF5POxVamk3DW3pDh2rI86Mzf0NTaUobIOZT7SAxDxvnIjJ1yPG90vfa78TJfkf&X-Amz-Signature=530a0e1f20a3f41d22ba442c459393184550535cacf09b66107eb840269ca7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
