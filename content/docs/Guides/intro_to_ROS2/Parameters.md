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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHYIVU5F%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYZUYTY2DbCQwbrICPoUj5JCr6d1YygxzcRGyxnAHU9AiAgQmL3%2FM3fbU5zkEmHiU4Sv%2BZxXxzpGIxiEGAb%2BrcTrCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZaX1SMrwwdFEc4vfKtwDi5g6m5gkZ6GBBPMf1qhoeA8ktk0kRT%2BO%2BnkRAf3tTN1m%2BGIf4bBIolrdn2GVDxItYNFr9Gy5HScAacdF8L70l6bJCrXFudoG172qTMlw0jK67GkoCLNdnukGjViWOzmgVZSQqZLfi2uWR6XnXaaWUc0I2JUEjAmEtqv8%2F9c02RM37D1h2QxVbM6gMO2cX3sq3z5RcaEmROVxnoPsMbdD0CDvJMpWlhZ2hiyUHdaSUQt%2BUrf1eXIwLlvaKVUnNKLbgKE1yfDWsh%2BZEwzA6GBFLbX%2BXyyEtkgmOIHN75chR%2BMw8XWsRDrTPuGAHnCapWUuGFqmFTldeDBTA03o1Be5ov2JfGjBshsRz5KS2a426K7G8yc18NcYzTucATeM9DQzryIZdL2MIfKFhD22FEo3AOZdlaYtyIAajb2GkRBuciEdRx5oXQKUie%2Bs8iORHtAFLt4vIvc9ecB90nwxNopz3DK6lS8KzF2ug6xVCfvY5CNwex9laj3v%2BVbrs4JPp6bjQyTsNZb8gy7PK8%2Fbsj29TJPdY8upt%2FcBFZwJwV62XJI8Yyco2yrmAEIiukatazPZxP5b2O%2FfotwgdbEXEmfcU3xFVAdXyOO93wL0Yo3wcjXEAOJ7mlyBeMcUuqIwsPjQvgY6pgHQtFW%2FfE2Z6N12XpjxhJSd7MVUARkXlVpTRmmosBjrDbT5H9%2B%2FD8LdyqdsLh6ZjJPGnGohzdyJ0rncPk29JDzzlaVKzUQi89yub%2FAC%2Bqk3csn7p3KWM6Chy%2BG%2Bn3CaybMZAtn9soJ10pUf62P4IEuw3mTQcrpWZX%2BNchJYT%2Fl2CIEfxt6OLmyjHV8gx7h7BU7QoNJdISS46mcW7DjU%2BMf%2BqFNDm92p&X-Amz-Signature=f43a5ce45d791ccc52d469915c6e3dc7521a3a9de43acf33663408aac87b6a42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
