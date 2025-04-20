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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BEEGX3V%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDa8W1B8DpjwGfS93VPicQ5vMKwn5xP9Dx5BsEpCfUfdgIgEHICmxauGASRmBilDYYqQjA1kX2Rgab2boNzYaybIYkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8gWlFOy1B1f%2Feo1SrcA8ZWmlhoArxKYnrqdGGaUkLwc1DtpGfzNRtmJ0kSNEhS%2BODPGUKbgcMBmBm6JbXkab2QsQ1SwY%2BhrBB41cXdFP1YdZcghCz5DHBgXMKf%2BD2YXQ9%2FkXJ5I7IhVXgm6mvhEunUU5kUzTU51%2FzSK8UHDPb%2B%2FmFzqlUJV%2BGV%2BX%2BJtkFqhnsHgfW6jEiRAe%2BxZWPzblpZp02f2byaV4qU6dYkrS9BKyItcAGmyjzt1tHk29kJhb8QHR1QbTXaJhozZfku0bK7kyrwO1QumUOTv47p%2B%2B7azdeXx8llNFlFHidwVdjblkzWfQn7MCLzx4UBPIphbAXX%2BA3pLGX14xG5cH5V%2B1tcRVChNsMk3I4o76C%2BXm%2BDY0zkfok9OWDNakK5v%2BicOt2t8C1xYRNsY7oyXc4AvQz24xus2xQhOe4BUvPQQ6Q2kO6NQP3MDSagDIkX80MPwDsNtYMFKMLm4v2OH2Jwuj3dzRXUi3THfXqEouXJEUniHDaCyNyFdxi67uc5%2FawRCN3WzBM9E14wJYv0fUkZ%2FhFa1yh1Ds8MUaf5yoynm%2B0E%2BYt1NsIYsw28oiu5c6lypbPjDpk6di69UjRLqAergT9QkztFrxrK0GVrlWwFcbv6yJRWL%2BVGco8ucerXMJ2CkcAGOqUBR8ltOG5grPg3e3Qgi60RvXymYw2ZtOI4cWIFG%2BPMbXCc5CG%2FTXaIhDNEPHS2L%2BpiR6z%2BjSlH6HDVZBehHa%2FBpdzhD78w8Gm5LSgkmyAwhWDLCH7sY%2BFlmqx5VFY%2BXmqcVIPsb34QjU6xKmbwEpjtbM1vHdmwCVGZRMTDrcQZF5Po3DW9Q46%2FNEncXcLfRsbtLh7QyXd%2BumMomQBVlK4KVyQIrsz3&X-Amz-Signature=cbb2af86cc7431b0a47dfafeb5c3388a850f191520933d85a79cd6392b017f27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
