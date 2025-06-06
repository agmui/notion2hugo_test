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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU7UJMVU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtJSKJTnKqQb0J8GAZOugSQrb7bLnPbM28wxTZM7BZtAiBaQOHX6iBz2oAKkdZiE4H0Qj5CrXsqvKcNO7COXD3mwyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIM%2BZCnw0QdzRTFxwsuKtwD%2B9kZU7hfGbZnEsmqrHZbYqoA9WlpNZ6F2Nczp%2BAw3kaJbZN0c4gJNyhI0ZACTTHoIGcUc%2FNRG%2B%2BuLPoZKd5zeym4qO3adf39vV5DpAVfVjp2lMNuHy002kx%2Fx58hTcEl4Zgv0kYEA9Ng7Jgvujsmn2sGEvGsGc5wT%2FzEJn8q1FNEucarE3lU0yRDWvzKW7rTOADOjHtIXqVQyjO1oZs8FprkCmX3UzdyIbm1Y%2FNij3KzamgFZmwGF62O07jFdACJwuOqZacd6V8W6zb6dOR8fssIGaTDPIT%2Fs7Haw399HCu1CUAW%2FJoY5ZBEBlqjGfH8Cay86IaC1qsZg2HMPVguWOHx2qjf4CVYUnNVj0r7xuxp7KA57PueknMX%2BmkVAT9FIefYhXu52PjNbTqEdP7d9R3pRL2X%2B1tVwhZXsqvmVgrXMHTct0R9dP%2FzTMIiQ13JqgIUp3k%2FLNHtXgiUtDpnX9LGky50N%2B%2FXNzfA5Axt%2B9qtKDJ%2FW76Bcd8xxWpl45PEuLOEbw%2FC9u9eRYzeQloCLSRLw2UaiMAzvlVeNuZz%2BI0U5UZbLFqhWtI6kTE6a6DahTN%2Fhjj7DEhQtwzy3k0MA9EEr7xGQURx42mb1Agl7%2B1mfzYw%2BWt8OFKoOuow25KLwgY6pgGvXQx7iD3ZzHbFwQil86sJX0cJBXhmmAWQMbaFc%2FLOkR5ViB%2BoYWprONEUyeDANOTyAAmSoRSx%2BrbqMAlRj%2F6gsWlqHaFXmNtnql2rgZCYogfW9l%2F79soOHxB8apqz%2FySiqNTVw2Ff%2BZV%2BlzT%2Fz4hGgrbYpTnHacfdJYa8mGjnEAtIvbEV%2ByuoEC97IahqRMewOiQszM5Sf2oRHQDK9wJmb4pJGFWK&X-Amz-Signature=0d8d5aafadbe7ed8bd5b90604d45fd38083b5a42914e444c8a0f08f45058094a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
