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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIM55NEF%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr%2BRDKKRGtCcToZrNCpx3SPFhmgh%2FViozYEbG2b2klUwIgE%2F6PoJq1ncCbduftbJukcUgy1X%2FIwoMKrmAbs%2FObaPsq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDABKnD0YJ1kK4bONCrcA0OZMTbU3RAeMHlo0llTlMlZxdPh9xX1eePbc5sGMWsGsYhfG6MYObW7JXQhEnNxbh5yKvq7tE2efKbNEPetJ1f5uD%2BoblvIcG11we0EonbZyMGR9YPWv2lzXLxbeJGdG4b%2BeMTSjPH5kDf4UeCbhRSZdXvIu52PIDTnvDIuAnVufYOmUi%2B6oQrxWc1P8DU96jytxKwAnrGyi%2FNXrETXUYmif4U7jbujEJ3zIHBS0oBzQ9GmVaLihK99GztIzC6krDJxqhJ773OBzG%2BLt%2FWNXScNotolt%2BlKJRNze0nLquDyn4nubJS9TpfNZ2fcWxgcLt2RW%2FdKlp5x9vWtzn%2BikmGJCaukkqb4b379JVLa2jD180nIdGzhqQ7RE%2FTHdz0yHPy88F4FBirXh%2FQ1WoP%2FJQvY85ZluSe3RLQW7PqKLgcvoGQCkaPf%2BRJOwHIp41Bg2a8vRLhzDU7bABxbpM7ksj6e%2FWXY6i7NHjyWKInmqnifQy1mrTsKWTyxoNMAnR5Cl%2BHxNYncG0Wnuyq94oqf4i3tGwaVmMKiXXPEbHcL1ocE6sJ%2FIyu9adNg%2BtTdy7BZHA3x7yU3SwlAd6WeMwj4MV%2FHZOkIgsbNeLHtzcrXA18pSxyYlsuWmV73uWX2MLH2pL4GOqUB1M7VebrRW4442VNadKxPJoPZ6BNGTkISTululDxnuqbaPYc8Brr8o4lq8Lk1KHUH3WKUuW%2F8tvF3KFjatuCGJEjkqvcNjSu1ijTwYNWjcZtdKAedGdEQ78F6tFJ8VwHFpjTV1hrEDnjqwywmR%2Fg6Wk9cDadtQpkoAtV1NQebbbDjyeupeMrxcKasbyuHPctEFPBmPz1i9UaU9RjtUjyHlAklz6L8&X-Amz-Signature=b408c524ac4fa23ac9b73184f720aefdfaf8adf5eeb36ee34fddb0bed720f734&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
