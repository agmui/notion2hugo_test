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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2FKCUD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQD00tKQ3oEIcPBnxfEcVRRjbJc48NVLeDk1F%2BuVKa1q7QIhANajMAYwAz%2FgxPi8zi0h6Kwf6u2qiLCqk2lHY0S62WQ9Kv8DCEgQABoMNjM3NDIzMTgzODA1IgxL%2Bm7xZOChMiBYG5wq3AMo%2B%2BdaaZ%2BF36KGX2vOdogwmjyWK5NZgD3Dr5IAAKlR4zJP%2B00nO7Ink6wZLs8TTMrWKFQUMyBjR%2BAbDOVw7ccjrcIZFLjca13BPBOT4u4iJCw5TNxqgrBIJ6l%2Bn91Xc9rLZdwlVNT6CeqWG7r04b2XIynV4ZAJy0bHeBxMZKePlw7VzCS9qv3ggTTub7U5WyyX0JnwNQ7WwLg6invqj55PnY9pxTpaEhlfSJ8Vm%2BTSQ5DAmusDBusIDfdzREtsfk741lAlM6celKnOgKwut3SiDR7zN1wwGuWRBgLLUbdNthqLugvrQ7Xdhz34g516yeetxeuclYwJtE6fReLvCu4Gr%2FE81a%2BBmnxYGF0nMops6Q%2BAXMfVn3k3sfr2PsRqLH7NK0wJ%2B0JzMm2kCsJl5exsB8QNjEn7Qcg0hGxc3EZBWuGIIKjPEoAAoqE1HCk8QbvFvhh3BjPM7vCSlyXfgxT0i4j7aJ%2B1AxIxR0oT6l%2F2sExlqA%2BzIC060IKFBZauGVDpvKL%2BoCelD8Tj8DTR8ZK2TSgql96WaC6pipI36k9stcHefa%2BI0rQqnRxCqe%2B2FyyRppq4c4xcD%2B02yle6jfQsTtN5x5p5dBxQSXpFnr4rX2JlVwvDw5XiC97v0jDsgY69BjqkAfu5hurPiUSvvhgF1%2BQ68QLmkhHh7h40lCXR%2BB64sa02EeJVEv1vRqy3EL8DeYZrKK7yHvkjwDOZYeql0JNSS3io%2FV0Yonv5XHrWblJNEIalNkK04bXKuFvUizeMil8VJhnQ1pJyYXnW8iQIBMaGAnrtXrYcvSp%2BcPU0L2mD%2BrUbOwFDRfwL0DISR2aXNtZ6Ulsp6P1JMXeGvaI81qKELKogXQW6&X-Amz-Signature=e6f1429230c3a80bee00330ac846c12bc1926c2c06c44afafccb186f3e334e18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
