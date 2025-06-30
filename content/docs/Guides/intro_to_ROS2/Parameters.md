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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E3G3FH6%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0qaKzfzdbe9VvX1zSpjb0u3%2FEqF8McSyMcUIhZKLSMAiB8nbXrWuk79y3wHKZvyq0lQxDOlhxDaycxrO9dy75e3yqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSX9h3KThJPPYurF%2FKtwDLEdUad%2BFtBHhKppX938LlAAI8AbeYkvqXEymWlAkTfZ0NBE0WVZTNvAR712N%2FgOl%2BIasMTRU12j5j5mBLP%2BwxdFVVquzltoiYDsRK7sN9hwYmjmY2rxX4T4we2YbAcjsjI2UPcUyGyt8SJjMQ4jyup6cLnmU5m0JMDq9jv%2FXUDHULEEnPU7xF3iEzw6qvterOaSUdOT3DoVaKmWLC3FKrcqgU1KUlcF3M1cbxhvPpbXXiAAhxvXwaZU58A8yCpi82MDoAQLyaXFeKtwNsephKVmiOQdwIVOQqQdH%2FHOvsAM%2FuTzTbNq9%2B%2BYBYapiUZ3dosc%2FUYtMtUF%2FhWyuejC3GQNTm1l0baFDbTQup8DFnsJqK9S3pdvmwKgvYE6Hbkkq6SaLmr1We1Tec9TDeN%2F5zsRUTtPdpc6D%2BDHrMkZtzWui1GjqloQf3QXUm36J65hPlFprE%2B3%2FN7H4VLZRaLvPLRS%2Bap74CXd8G5f3KOO62W1XL0EHjxyowulELSfPnUnTWhdGjWfsgD1RRNpQ8%2B2kgKVq9GdIFGvexDtnEBbJYaTmE0dgegsqeV6h7gdbzrBL0zbDQ8ksPfMM0pCPjRHl5gYWzj9cdeFPyW79d3e0phxGOlmm93vqJAhDipYwzOyHwwY6pgFgZtct4WpIbfHMwpQNaAGmi3vyKzHnKBjw0aP%2BQkIyKV5jqqwXOih%2BSuUNS8ZS7idwS4zH6qAXW8VVKYib1F3HGhF67IMbYN4djT2Q8rSiN%2Bbp15ClPqCeuNaYgDQd6m1ouIoNAdp%2FmcZEOwzbZL%2Flabj63XTOMFC8AN8WakiRFz9GlFJIUD%2FzRGBoDI4KodwlVOwjRHr%2B%2BZngyXlIwCk0gf9F3hBQ&X-Amz-Signature=d30575936c20a62141d5e27052538bc6c79c1cdd70a8f487d93f51c39ea7c4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
