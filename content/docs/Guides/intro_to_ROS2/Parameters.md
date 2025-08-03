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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X54RZQR%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmc8DXy3za6cbi4sW%2Ft%2FAVAKEeoG4EmBquQ4AhAi95hAiEAygl7jzZQwbwHS6Jsn%2F6xR7CSxKOc%2FSzf%2B9nFL9KHrhsq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDImugFYNhzJybFkd3SrcA8PVlDZDxNOOJ6DX%2FDFXZfrsDK4UJO3QFqAqYcwS3wJviQadePt2OwuWtu69PLUx5pqh%2FReyCuVIbMMnBYOFyo52sOuLFx2l7TVMGYQM%2BBr64hwFrbSme97bm5EBmy8NR0fuLZ0IDB8n7NKVvcIA5aRCU%2FoyksICWsPuJ6Fo2vLBu73FeA0ofCaYyXOGqKME9mE1qQBI5qjgO%2Fvrqe9JTVADq42VrC4YZNOCIbBeKrsa1q%2FN2ZVlLtEwtqz7Js8nDVHUzE6vEgfdjFROCnGnT08WAshWIf3Nbq6STfHdpjxwOwqge9MtJL7mxgMRytXLFqptyvTWiJsN%2BBlnYTWoYmqaFp5JZCNCNPXySrDkjXj6d%2BsuteY5InrVNisTCZ361gd1KuC02IBLNGW0Hf74Pe07Yhgvyt4qk9LKNmcuxkfKXwlhP7VBGXygcLlkNEDhRO%2FnZ3aMPa62eGMRp61YWdhGtqdqAXeZ585bv9eXXS2zJg5UciWnUlkqREemFct33vhRcLnAedxjvTZTzyfvDxC%2BhYPIgRdVF8eEPaD6F5ldfWreqG%2FqD8BXizURxhe928wUuLG625Dg%2FH6y%2BFtGsgbXztuFcsMfmk%2FuIQDOvObWBwVvhLyFmRuTCoJ3MKOBusQGOqUB%2FeESq0w%2FRfSeqO%2BO1utmTRGs6Cnest0rwThFYxOvPG1%2BjBnMN4ZnxgEwoyk%2BI%2FafIKcwmiJYMgTymLwCJxnpCpFt6Q1eCjcmwGVOAb7eQyuGOlqO5DDeeKMstlKLCvtc8iK%2BE1PqpKoKi916pV5ZnNxdxA3QH2VObnuGQns%2Fx0erxJnlt2P9IxdqnCPnNIIog6EjSBn0%2Fth0YHqJXTheN2Y2sd6p&X-Amz-Signature=23f1880d96177343e1d366e77b967bf9427cccd2aba0027eaa11ca432d9aa764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
