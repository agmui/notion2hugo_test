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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROVW7H7C%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDp5aIdXIhClvnTF%2FfYwqlTMaUo2FmU772yj133pVIWWwIhAK15LSKf5YZ61le09TTnx6vh3To%2BHUmLlD%2BeDnBhHXJdKv8DCEIQABoMNjM3NDIzMTgzODA1IgysNlM3PtlL%2FmG%2Bff0q3AOLDUGLcoIulACUSg0RnVCwV4sTaI0GDSOVlp0zqHGtX1GhAvKNH%2Fi5DTNqltQIKh%2B4vDTsUJZjeOdwfHBY7A79Dt7%2FH%2Br8K3LCD0bpcgcRSv7V0WL53jqKl96DYbJaAZ4KYZS9mVAnUXRziI6JxMvs4J2KPC1ZrlchJBtSZkKSzEq1QZ8jut4esat088D3LfiVeG7Z7lzo%2FKaFgJcBaIaaJygdgYY0GYV8cRtGKID7uT3zPTT1ynkuVbJ4Y476KiTmm7UKc9%2FLaHUzWWgR4u7hAfnT68Ci7MRSOa%2BP8i2AQj%2FgBokN7QkiuJVcATQjPz1n6Do2fpOo%2FwXP4GrWjMS6qoaK3aKu0CCsPMeKe3ZuEB2UlWBSnCJ5cxyBtZuebGoOxbFfKQvnm4ipQH2mgvAADIkc3awRI1K1TbmLWmquKv2A3ZSUUozSvsWIAUH5UzY2zyAEvjotgOGI188cbsxT5g1boBlui87ELWF7%2BznlO8pv%2Bn%2Fv1ToMdodvKjT8R0JWkcO2483SdTx1mTjxdYjNXvCs4M6i34JhtfGHvLPmGm9EUky7OBA9JkKvFWFpvV44KlxoFX8I37HW4tOFwIr1ZIB0h6DAPMYnfWoJ%2FZwnAMh2Lf9ZdqN0u2ygEDCD1tDBBjqkATV1Vch8%2B9dCMnymleHeJkpcyjkVYsQG62HDCpn49LgwZtqAXGpckeQxVnqGbja3B4d6UHSzG4Nw1cFzu8jtMrXMLlUpGShC770B2hlFGaX7RAFmK3Ucyny32wZ203KFKjsCbLxyiS0LT0kGZcBIzWZlvepe2YzK8yN5mJrfqu4tebBYjOQ%2BMqU9ZOH3qIU82sIG75m5qd0Xc37sV%2BTT%2FIGVDRvS&X-Amz-Signature=80fa26d0a007283320353ae1b5259aba75ad4092d8960e6a492474672a357103&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
