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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEXAOPD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T022646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0aLeCVsOgNOU%2FkRiH%2Br%2BCmF%2Bc5bwIsXGBy9A2D55MXgIgdHwJ2TM7hclNnU%2BqRDNdggkCHApI8g6Vmm6cSWdSl9oq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDIz9%2FVvwDcKdDISR2yrcA8fn3M9tOkwodX3tufUlyANHLp7a9z0UDxXuRPJ5pjGi%2FJBGWIuxnCaeQGuzJJT9tQcg0TbC%2BqZyjMCadl4l9CMhz39ZsYveXc6uo7wB47BC05bqPAAYL0UOP4wclkyRS4i4uLWb%2FRGCCxvpS1vj4nTgvBX4dLKaMLFWeEJYQkCalfk9%2F3OVldkURv8B4ucxqxy69FtTXf8RsuVgrQb76s6HD04GrT8vxRjCiBduWw12ZfS9YRY3bJ5dF1WRyGzb4Hr9E0vRKibF0yJ%2BGuV7Nf3TNZ36gtRmIiCw8gBuoBIgnqWeec2CGLoABzdWi0IFHGM7STwKhUvfFLhBq%2BBOniRIQCzO5nM7rx9eX%2BZuNXmmVWW3laWEdGDN759SCkL%2FUafPchkuyItw7lXs8YPQtOMj160bOt8aJqKU5KCB2rzOdG5UqyjUK%2BgbirFn8FVBVXlKGFLsk8bcSzkcTNubjeTncQeZaIFrns4PD%2FKTnWAH4vaf4P53JD9p3FjHg5qXxnMc5dOPxQFDJS7epiv8O9%2FmmLc5UnD1J7oae%2FKZvm42NsflCcWoi3LkOF9DAi%2B%2BbydPINXQpGQCObsMG6DYL3AiGCs6F5R3OLsufdskBftRWm7Lo1oFQdVbSrZcMJ6X1MEGOqUBSbEtAvcITJTsUmZVN6EXrRdIPmLngXrJNU9u2RXi7ges4bEB3bbxQr2ldF%2BfpEme%2BQZXHQeXScrlWabjCaYSOFJepiAAKj426fN5igPr210TkyYj8%2FGUh8JsrdRnW1tpSsaO8yMRAl3OaNy06Cy7gVSOpvTWDM6pjRVEa1XvYD1wCphJY6oDX4LdG6%2B8mVUoBwcPjxfQn1Fdn9Q3EWIYl1N3jZ7V&X-Amz-Signature=0bfdafb348f0d20fc491a450dc6283c2172c202cdcd04da145c3c4796d791b05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
