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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THNHX5R%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSUS4OL0C15d3Wc%2BmPNGd9VSjAhtswiPOcuS0PfiLxWAiEAlBLus1V1KvgL487OF1mIXu3Ui2Tppz3uQUZ5mLEp8uAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYW55MgzJc%2Ff91CyyrcA%2FSxMIz9mOaQeQxq2ur0ilJHXcF9V47ih%2FCJ8RRUhDkNm2Ltf1tcecf%2Bmq%2BM%2BAWYfDKdDCTfB4d4rsC3BfkCgSNgZtSuPm9dEe57euXPWaCKDVDh2K3Sy81o%2Bn%2BP156j2rpgoMHVNQ5ZkHRnD0AstTLOAlQKS06QLxXiRoqEHhB7vqL4tBnBA%2BSlpCamAVq%2BjeUaZwELIZGX9rB6vEgKYbHA3W4z3mhua1Nb19rYp%2BTH0seBv5g2K0JVbTk8ztQ2e7K0lbZQvUqUwL%2FwIMLII9hPm%2FUBtyNbAhtZVIB6SPkmhyD7ACpyiXxdl47neS3NuLpdlDCEzkVkUPrvknv%2Bc9AWN7A%2F%2FyPMDjtdzw6Wjts%2BkNlnlKvVHA6wo%2B%2BmhKmxAWjCAJzV40zKAuxC9%2FNmWZBreIyLq%2Fb5SJTuj7RP7qP3vXumgZ3ePc1CGoXEPyoiqa6H6Hqk4j4DD5AceIxEp40uP6bGYE15B%2BsBYPCIfQniB6AI17VJj%2Bwhe39acSYirMnYBXdUbZVyyNjsrVvxZA9h3v%2BD%2BBs0BkmoEqupReRDRrXNF8gk4SeJ6vFj5UXwkDg3AjSOP98kOLob3ULTtW3l3%2F7fT2X8yEQswpMOKKjLEOAh4BKs4GugyaFDMPD5pb0GOqUB3sPXxzP6zLap9xda773YcSZ1Iu6LqN8aCDQE9UEvNtWF0APJOK8y%2BnO40JEi%2FwoKflwINzuFMYgUfK%2F1PrZB%2BMPu%2FvD%2BkilIrJaiyiL%2F6czNyYDPeOxomEdxYVYsF9gFvURHwV5WHi7wN%2FOQ%2F3NLiWOU%2FY5INbUB2AEDcuDJOFBmahiykqCXTy5vY7ZjcEPUEqFNmbVqHbBjYQOs2Rc6HKe7Bi5L&X-Amz-Signature=aeb6d6c080631941f62af68dc788aa05851c8ea072d01b3efaace2c3b80c3f01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
