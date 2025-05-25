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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWL4GSTX%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIF2vXxRTXaR1KldSimulDBJO6tfE5j3Pg5CMqO5O9ajaAiEA2%2FUE0ZRG7I6vi%2B7Ytruc2lirGs5v1PtqHjPOKJMDhPcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDEqzJRAYYdPIPXZjLCrcA%2BQ2Tt%2B55pqISZYhj7RG0Om95bI9J188OLTDII2MIIP0CCRuioTzDoAtT0NlkukrUH2yt7VzaKuH8pMY0xna7DXvjuDWZuJ%2BhKGIIQcpgdXIHNd0nW6riUSjwn%2FHdsQNWn%2FJ%2Fm%2F6yRN4sUiHeECRZcAX0i6aDliXkNP31h6fa0Oj5Mi%2BjISZS8uWK0HwIc%2FKTVoMjJYgEjBH84HiVJjVBZ1IpiDHLTquEjakoW9sw7OEaAXZtTPkcYPO%2FK0j2AA3TUM6iz0TlYk9n2eOpOk9DPveEOPG5%2BlHW%2FrDdFapj9MBx0a3K8PHBc7K%2FTHTBN52pWQ%2FmfWmP6YvIqOfR%2FiC4U2ZEhAsRu6CiTh6%2F2zcO6uhDysbdaZNzfocoE0oZnYOEyfQ39yC5OqJB8B1Xd7t6B%2B6h6b73n2kxhUoh2P8cLKcUmgXD%2Fpy7v9I3aoLAsqTvprYzYZ7m89cQl%2Bb9hb9WWXQGOqICrZWVhA1jW87ZRCBPf7FQSQhnaxTy6L%2BH3tGUb6u9TqleFOf0yZhAvXtKcE6%2Fw8KI4uNgFaI00MRQvP%2Bilgl95Wie7j5X5nou79HpMQKXOUt6qr41TFEQRJaA02zxXaOWRNo9ckjel5nHol34c1QrMkSJ20iJzSLMMuNzMEGOqUB9fhxifqjwunpvX5KoDKIVyaeNV7R%2FkQZTmMDHqy%2Fv7cPvl7IwrWzpVvXtySPAPQ%2BUIGBvQxOrnq%2B2NyzGkaxyb3jbPIYFboVe56P9KJCHa4OodIVSIoDkrKTpSCdHXKA77egh4AQAi5LUTmmPO9pxdzv5%2BaxhBztCfP17zGzcXJSZnieO2CnZnhrmur6IQudxiWi2l6FZ7qgoDl73M3T49S%2BHEEX&X-Amz-Signature=b4605ffa9ed429fe32df57465e32c30ed3ec47c862f8b03459d219319ad2bbbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
