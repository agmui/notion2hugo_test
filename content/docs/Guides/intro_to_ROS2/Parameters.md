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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G64OGQT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEe6I2k6sMdBYzzq%2BTiWk5lmklt7p1n4zEHC6K7rJWzAiBcfCGsFBitWeJOHWPeJOpRLSPgP8amVx27jRHHtnXR4iqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdNXV8jAFUc5IOYutKtwDsTDVZAvRHEMWkZ5BU9dfeH30gWOZILYkfrMzUAeHWePuDZdfq88m4YKd1Fc8TjrgswDatiyWb9kff394e409LSag6pBxs4NPrnfgjN3XwCfoiYnBKdDoZPbKZMaaAlqI4nX%2BsGJbOG9uwIWQb5INkvg00AcGEISJKbBoO97hfkZdlnGXs2eDHHhT5u3prSC6lFKN8MerD0r3T9ZL4n4VInvXWAjtMrznU3lI7RXYH0D0fi86TdI10qE8jYzT5T2yEuBbqf%2FIXqPzhj8ZFl77S4PyzFiYG91cMyjhy2P4xffQrlnEKxD%2FqbEvEUSok4jO3On8Lxj3Q3rYtbScJO07MQpN6uEBjPH4bEosn8p4V4kKcsf7He8LdOCNUua%2FwCHwPICp6M46pMhZJCW1bJO0MGQXPrDIipxgu7onrCmp4f8ELySZUngdkCwZJ3Gmh70GrSdbbRhlyNVG1BnMAttURBUD4k%2B3gXbUDcp8TPE5TgqAoHndXNzAoVPrJ8f7G%2BwAhRncW3WZDzi8xSLYgxHykcOMHbpgY%2BQg1FGhPrYBMxap1qOStmhj9GQOh4uDXyNoqrzvJOzctCdon%2FpPxoioMQsO3uqnGsYmoc9sJCk6d4TaObh9pfx6xgeVFnMwz9W9wwY6pgEDsmjengntoSboo3AH7P1HK5pM74inpwMG8kTxyiV3naN2whhu4HTUOM2dxYg%2BZXhD3ipPw6S%2FrW8V4VtuP2hd%2B8o7RAtTDWI%2F7gQST0wDeXS58n%2BNo4d5mhJW%2FVT5gQH872vWMoo9w3K%2F8UgGZ4O19JolS52nIKbJoGuQu0JSYB1RLlVReNomU2jdcFqKQxWSb%2BRr7JS56611oRk1MbAAirBKShJO&X-Amz-Signature=5d911dbe2c322b6192020aa9afed27670fa582a37de81c87dcc7b405845a3974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
