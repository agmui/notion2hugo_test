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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A74IKKP%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICYIwZVtDwQDRh9q2zjFm1m0XvPdG8m8ok94%2Bq2RNvXLAiEAm3PtLiPg7%2FXgJc3PNbdITSzgxl9%2FBbxs2j7EXJuv6NkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM63BzzSYtVIGLZx3CrcA4SJ7X2Fua%2BOOIvEzWIjpxqWIjMsCzEezoy44c020bsFOMCgFakDjBiRKe8OQrAwgS890o2phR%2FBdLILsE39ROnSK2gnY342HCcQX%2FeyYeaFk7TYBKPSKro41LKw4SM5hO%2Bgpc1cXlUpJAIPTMHREmo6G%2B8QaTeECpRfMLiHWoF9awjn%2BmDUNwtLXXzJCfzNe3uLP1LYadRid0gCtsQ4QQK1oa3Z3ePra1mFs%2B0rZ%2FjH7MQF2b3eLhmJ%2FFABMLnjt8kqmG4%2F9NBmrB2IVykomNaYI%2FboOXGPhqmdBsYI2LB7kjk8alA1LSXiJ%2FlCIbmQOSGTvK058rnFLWWmmcwsS5A95CYFq9ejYd3YQXY3DL0O0wuZ6wAg4Ra4m%2FkB1lJ7Awfh90L8rnHIelt%2BAU4gkS%2BHdcTpEM6Du9pFlRUPbt84qmTkfwkUMYTAcRH8tyk5mpxmU%2BMJnEkktgYwA7EDg6oP8bL7fOOVIhxtNNswu42oWGd9qbI2E5fgZQGUVHmAUSGZkGLugZOSHEBngUOwoK5R%2Bn%2B0b%2BWSiZOk9YfNOFgKoPmLFgRmlfI3MFsoSZ%2Bp6NOltZPTtKdB4ZjNPXHYtdHAvdu8nddYSBvsZ76VQBYosvvFO6sQl%2FLZYCSGMLuTv8wGOqUBdNLv%2FbsiNR6T5a9G4Q3TJgW8ZisO7HAoDnKy8SPJq9EGd84grNbkeZ5SgTpan3eZ6bqBZoJRnyd16%2FFMngQzF7wUUWCvEynE1eIYfHniKyGth%2B5kMGX05trbtN1lbw5gjqFepck5UN7Cdc9AxTMo9p5yTNVmwpxa83OYmLmI4dIBe%2F%2Bg4%2F6GqFH85oWRK2EVXcyNZoGrVm3lwrNDajizflNtwgWk&X-Amz-Signature=329c5bc99425ba869fe19abce97f49f3804aa85b264cf8ab1cfa2a393902a812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
