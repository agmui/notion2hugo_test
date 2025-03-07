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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLPXRAN%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIZElvY4Y0H6qasDRSYgQKOO1jWGXSSjgtKlqNL%2BUPBAiB0XY7EZWOqweXo%2BlqFNWuxlCtx8UBvW27sfzYRAc7cPCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMo7oEvYGDzyf3FHMMKtwDQIy1BZA4HHCg7N6kBQAUWSVX1me5Ues0anbLyhBJ2J6qIOO%2BVJ96j7jB%2BpL0JmuBJyyIeUA%2BwW4QLp9XGAIu0K5ijzxrd3l9rIy7%2FmHNfUDosH6qTRqmZ4tzsInFX18z7k1C%2BOdHByFb764M7tDEvSZqVvLWQYY1vuYMy7yQnbbCB4ba6YI4zk3kYV0lJphEIawC4lQ53jDwCsBElTGzcL%2BC2o6WeO8F2baH3bGG7u0Nvm8ji%2BK6UA6bqilMcN1QRgB0q9Mw55%2Bp8luQ%2B74FwWSXCZ%2FpM05S87VPjLBfMgySHUFqyouS17bgF84f0oa4LoKqc9J%2BgD%2FxAJVQHd5dehxmHg1HpDEsxOqAMSWatpXjxtV0uOkvOCUacGK24RsRlCxAa7bDAgYNG6FkAZjgpDAkg3W8fe%2BGSyAB4jlaUCy31ycwb7G7seHMyvtE7HmAS%2F3DLqtmO16hRvea%2FkyTrYlPp%2FiHn1yXwmelhdgWNENYgRRsAtPchD4RraIdDh0RGdLKag7%2BqygWp96i94f4OBxQmmTQBGJhFs8ZifcWJg6vorCqpurRCG6ihUSQio6HWoMSwRm0h%2FElLP2mIg0Ts78l%2B1bhQTEFaUYCDvMJVZbhJk%2FOx6kBAhAt%2Bn4w09%2BrvgY6pgGj0lGUNalLZ%2F4QG9XzdxO9LpCHC0te877bdkbs8gwAmI%2BhGan58jeK3p0LDawTXhT97yKfL8mlksJtyBipvT3DieXRmT%2BEQsJv9iD5i9SOe3kHHVBuVwQypTqnXyI%2FA6pjZOPT4LKkinomsXN7Tt%2F4NSX4fmu4Ldgy3WA89XaUmowh9NXX6hSXjRHLJZJE5%2BlxfgsFF%2F5y51YZ%2BsbPUC27Hvh93XuX&X-Amz-Signature=7a9cf1476efa69024fb01eca1a5b2913bfb53f7bcc0e9906c968e57671842ade&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
