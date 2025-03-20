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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3QQMGI4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCrixBJcnla5g%2FKKlj4FVuiay%2FijqlYfjjU9flljipSxQIhALH2OupDt4wV%2FaRIzKc7YTIL5LQXnl%2FyRL69lt2gWGa1KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHauVpupaMa87InBwq3APgG1jXy7KIXYYGO30sF4Jw2URgz6xRDpEwc%2Bsk1xfnWxOP9tOqF1omtwIhk82vMPbZ%2F%2BDFE1YqroPlCpMMLUBN3%2BKYnMDelmTESdkbwRHerizLeWzp5QduAJrQi36WiCIHOhbuscN3RxwMTTGGKOyDWg8lWoRGuZcNGvzr%2B%2BjLcKXX4fJExc%2FJ%2F4BEFSNXbSWE0KSuSG657QlduDltHMRaTwbWAQbTMQEu6cWJkvV3OU4rHI%2FrxsHksY7YA1BIcUakIaKVRLowEafRwBy14yTLLyVFTPNrKnxtANAM1Dame56SdxJlvsJujOMiTIPLlcWB99qcjtUrqkE%2BYrJkUne83bHHI%2Fi0BNKT5cHQL5J0CiHddFduKyM3A5fbySS7lZ5FMK3cQPm4kLpe6y5HDBeJkvP9Pwl57NJLkJYijafCdd8RLbOo7XjC6nO7qdjMYhZ6HGcY4SKgOVrLt9KCsP15VwCmV8tO%2BBd%2Bin0mkUJiaKdmAEgG1nJt2gbu9s%2BqDW6EI%2Buz0LUCOL4bbP7g8pteCXJPi5KxUIp8mnt5h3JM6tvZ%2FiKqCo%2BwsQL4iI7lkB0FKNfjwLgSyLCLq%2BKBhCXRTe9254uzXdqz7W3i3sqfoIVff3priAgXpRIsIzDQxPG%2BBjqkAYTstOQqFhlG%2FDX4izC%2FxF7xyuuZAxR3FdjO87YaRagSyWN9jsy07q%2B%2BIfHzYgLrfK5pGsYrskn7%2FAhyYPXav6iWc1oU9nPzG%2FuVDiGOrcJ0WgonXR5IxvKWVaRBAGF6P5ExTDp9Jq%2B89xXZ2RMNteyDELHk%2FkFnLI3xYshxCjyXWLvbtjMnecSTklghUN10Nq5MCDpjC6LxmMfHRttAlcGgi2X%2B&X-Amz-Signature=65cbefed171675a93f31db0d8057818113ec46065f60270d2c494a1cca9e1411&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
