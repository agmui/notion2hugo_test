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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLVFLCIC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCyGwwNeP2nI8IkG4mPDnSwJh3TfWiKu4PpWcOU7vB5KAIhAJw8XQqAFqVNkajuJKsz4w%2BV1pg8iOsm5bwp6eN%2B8lOhKv8DCC4QABoMNjM3NDIzMTgzODA1IgzOWlkUQ3MkwYtKgJkq3APNx4VxHENtIqfWXzsUAnSRrE6AWiH579MJxyw8m7vyQb5iL9NKoHUlMgTx3cfVxvAPmbOL3uGSoSSVWpZjSxdFjtoNYxUg9Zr%2FyLQRqj2qClhQmspuvXutHKNpKcF7iNOvxewzkO7iHy5QxzX21s4mylAYG7sFhPZi5%2F%2FUaVJDxb%2FaGcSnwonhy%2F%2BavW9SP70YESqe%2Fc7W5tpUQ6JbKjXQA56i6aSDk1%2B4BKucdWf2oiadVeiVDXHnUhmrpLFYZc2UPUKnbc5Gqyn8eaB2NyYhwLMqycY2OLN%2BmDuwYcnrsZnd%2FaBPTuTgtx%2Fws97w0gGwz%2FNzqbkN19q%2B58NZOHmk1V%2BWYeMBNgXyO9IPoM9%2F0DEmcUiIV641qU4NSBwHDxzqQwrFAndALD%2BCFNX6559PqliGNGZNgTMYR9QEdyZFaoX9fALRbwxP2JIUto3rdb7Etckjq7qf5OO2SPBTdbCtrHhbSG0L0vQLh%2Bsrzam3hX6AE8XAIBJPlC4BxDL0NqCwskpplSntsg32HlxhR27pc1Qx7F4D3Q38FEgGpsq2RXFNDG12h7ZX83GdKIs7XAzqeuGQ9RgmBvv72ghySfO7oeprf5nx%2BMDjyEK9nDR04aCWuz9TkhlcWH3i5jDIhdTDBjqkAQr%2BHUjV9xO4taMc35sk%2BegMaiYK%2FSIBW4mnb32LndU1jTez61ts6zoO1lchpzuCulo9sq2J9LXM5wi90Noo38d4Dokbwa2IlSkDH6h%2FJFm9a8hiqk01PEWYH5Fpun5HoICf71nVnkImrG6puQLjFxXFzMt4exDd6V%2B8jhCg4YWBcHzaFgXl6c9ueru8ivyuf%2Fb9XuXCj5msSMX19ETYnqj20p%2BU&X-Amz-Signature=a852fd6fc5a3e20b89bc1b84bbc5adb7a6260f20ebfa53ba61c6c071b5f89c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
