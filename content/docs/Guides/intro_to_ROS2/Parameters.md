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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YTLRG4D%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnbXu85yFGyFjFcLan5r6TZJKz43NrWCgohvHVMs9lOAiEAim5gMcdHvc0lzi%2FhV0lsAdmdyULZGMDn5fZyZJEiXWcq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDHg8ydAHT5uk3ScoYyrcAwQbFuz4PXXk%2F5%2BBscikVtI4CoWm8p6lUArD22DU8uf%2F%2FiGhXYAwcviZytS5XO55RYIn3ZLEdb%2FZPlZStLZyH1jJbntmf2JYZYHLTaJ384BaD%2FjDxY95i4fNAzIwV1tbmFMS2%2FCcEjDVKg2YRSKVRiSJ7jwkE7%2FUkpGTjOm3lAv%2FSwi4%2BkOD2GottjCBSw6sJaPk%2BJqZEONfEkzVy%2BzKaWHt6BqNlqz%2Bst0b0zxlaw7rwSkWkpfihvhNTWx2J6fIyY%2FRTBsRmg26eMo2CudD1lF%2B1JvjZcSY9BnlomgOBYq1YoBksbAKMwbDoQjjYQ08uDxF6mg0pclWD2iAqd%2Fv7sMFv19q4Qrr3FJDe6wRAEA1RaX2ZYJbLuUk0d74JhJwsQK9XUBBMNg4dAcRNsJewvT9kX6PKuhxPju9lxJGmkysh1tjReS2UhR6gkNXDMVhouz7kZRA7MaSpVibtJyFFnW5rOncvku%2F6lafL262JTH5uwrBjLh9eTzeYKrf0F404NF6JeSKFc3QGKCJjIb7Ijb63INYeaSD45ijs9Y6zidi75ufU%2B95PLGSTtZKxuB5KvOWoeQym8IbwT5m%2FqBJx5t%2B19Sc%2BIMg8BSqy%2Baq1H68tTDeqynk1GTnZixpMNDV5sAGOqUB7bK429NO6jI%2BzPofXqIwj%2BFqAoCea37KP2HCnPcz98f3JclTve0H1NYhDZA0y%2FP3sAZgWWRKIIMn%2FlNmjic7SFzEf9DptnlPcA79iUYiUqdSs3UuPyDL9kTe5qQwGsBeQpevcpi9dbBWd1zLwYQbnr5VBYwQEOKrobocAocWk61zILEEC3iz%2FI%2FK3Amqk1wT1q88o6jMMx53SAJlFRCRvqlFba9d&X-Amz-Signature=13616dcd86fbc402f5a2c9198e1196287554c28a765657f597e0fef1a8b98970&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
