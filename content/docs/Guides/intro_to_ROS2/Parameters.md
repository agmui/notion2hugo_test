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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPD4NFAC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQC%2BxAH0DhTi%2BaoLLLJYo1dwqXuqZ772vcHnplUWh3HngwIgIpkP4%2FkUXG8NdeOMTknDPePSOotQMKo%2FJq7gqplO%2F3Mq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDNlKyUhpqilJXy5RHircA67hbbZePXAhsqKwjb4sSMvbuNK%2B5aUAv%2Fv8ec42XywvQZbE9SgxwswlGXWmAak1GD1%2BMbv3x3JF1Kl1KogG1ZxP26YrkBjZIGXBypDCn2dYdgO%2FxyGat5sOPtleRvrYG6MMoPkoek6vjEzDzjM%2BHnMTBTYQks5GHoW0tIVswfFfg95tqK8IMYKsMgT%2FFhE3rhkG37ctNuU8GGFkyU4aypQrVnSzPe6GG3QWUizsl52wBZnoZudLTan%2FpHzH5vnKmlwCuTL9p30sC1yaFNDnFhBBAZVO%2FL9wUPPznczabBHh4yX2cGhY74FrdiHeKqFz%2ByrWyztk7GAhdGVxKYnZHQNeoj3O67i5rLyn0Q%2BkTMmJUbtFt2%2B8WCLzhDSlUbfXzcub8QyI4jHB1lZxlf6%2Fl9%2BsznjIVxvwozAosBgsnm2Kztk%2BRADWPkjrNJFHu3pu3IHZa3Dqpl18q5QJSphiHNvnx72I%2BxxsECtdArc%2Fw7tAP0K7XLE8sFr8Ytc6Lf1oiBc2saGlrI5ydy5zZs3niJc0c3nRAlJEDKYNDiH84vlV4J4K5hpgAc3beLYG6Aqy73lpxVHGmrV83vRmH%2FSd3L8s6cexArfd7lNAAv63EghClq7mpZuqia3iwzL8MK3A4sMGOqUBr8OAYeJ8mV30%2Fn6nirmm%2Fn%2Fy6LA64G2Wj0tPRu7YzTgws5u%2FxQa6M21GWntRFpW493x8UsiZyPwPYQ6YhObbIc9SmHbpdg43LNO3ciJbybJkO4Wm5NAnE3ixuAC0jqzs2l3bxiLGm1xIbyCawB8B%2FXaXq%2FeH%2FpWyw%2FXgyVTEG7Agh%2BZCQW2PA%2FIDdUQE1BbMXf8MUJ8N3u%2F404CSUPKUkhW%2FQPbn&X-Amz-Signature=60aebc8cca7933cbcf78e36fefddf74207115651245ffa37e40598729671de99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
