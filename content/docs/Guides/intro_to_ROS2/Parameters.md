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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V2H6VK4%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T004152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFbQoCbG57gLcV1PGboBLK%2FiY6BlTPr2pgYy2iDoUX4lAiBWLzAb%2FtH9qYbes8ex83rC3yblZRqTnbRwrIAjuxlu5iqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8XilKEh%2Fur7FSe4QKtwDcJkJb0ro%2BOP%2BBAbeU2UMJgSQxA3eR66O5viGicwGleUM6lmqI5mGlZp4S8ri5nj%2FVtFCm6EPJvdbm%2B5HVBkWn%2F3nADaRAxLLitj168Ph1mS5wqR5K0Lszjzu%2FA8WuhHSs5YhqGnBDkgT%2Beze%2BOYZXkdP8TchO30ABDhAmjjM926A1SiXOh%2BmKnKTkPmtgrM0zquWlGCpmTehvcHfjZ2mkBgfYmnEWUHUgwB9ydWbb3SoPh1TC1JuHISfEMrb0NX40bWoGrv3Bj72JuZUKxIPIz%2Bwj2sLo0l3VlVuCxfGoC65Yd278Z6LSDGIJbhgiR8tBhtvNYh77om2CXk9%2BUWk0zkAeOWvmNBJBivnMvRlwh%2B8aTFifKvGhGzWJh%2BK0c%2FeQpFHLA17iI5%2BrhyyeCJZ7dsUm0Rxy4Mem0s2xHCaACOqdA%2F4YFLNmW4v9J7cM%2B2eS1jwTCmnq3Oj0PQxSXAYLnxSTSSIoT70bIY52wVEzpvM%2FMrQ8W5ANDcovLbtrzG%2BMAOk1ooCkE15hlIDYRbVyi1QSB9rZ1luAELk4eFVcO0%2B3fiHkRrPefpmNDveTXY5Qv5HRyLbLT10Hjzz1VqpgaWkbQH3qpRvar2XCoMuPNUp9K%2FDwgDoCiu4SVgw2pGKwQY6pgFe0MfAjrSVxgkTOllDbXWAIJSno6zu3C3ncjOm2BoKdMNuzgK%2FCoI7kdwA5pYBrKvUempg5b9Rdk73ShneDXkdzCbnUsDqNCkAsxu53IUUoaIrFr4YSYqf4iJ%2BV4mv4a9JzofjF8JQqW5YgJSlJagK4TVGs34ThBZ6vpffo2wOy%2FgcQJosmEwo4jKvgR%2Fo3gez4BCeVRagcJV8vjlD1T%2FWLrjHo3ys&X-Amz-Signature=c71731b9c7572f1b23becd6609d203ed774372e0259c78b91a075c16727ff8c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
