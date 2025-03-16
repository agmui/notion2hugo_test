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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVW6M422%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOEtfDkrIxrwsRvlBZXt5WiLIBy1xbLFXzvdVOd%2BWQPAiEAufOH%2Fl4zB6XDjeuEI00ZDWgGlY4sLI8olBKERl15WZAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDzdZEvV0QlbaB4ajCrcA8XH2s5RZZRvy3nm%2FKId64MEQKjzue8J%2Fh79ZTb1I9Z8iDRlUQr6OGzuemjlEJSbBEwvX6%2FrlgdpvTf%2FAoK53nvJ1rUysdMUYdFcifzlWfeurpNIE%2FmVoC2JhFhtFITTGb4Y89KWgX2siwuQfkn26EKu4%2BRfO%2FiqGqplFshgKA%2FvT%2BJo7G8fzkG19p6O6y75oblvlfHJMBEuQq%2ByM%2F%2BjMDefKQ1aDyMjSjsanoGqnXDeN8sNKFWTROGG%2FdnCvMnkZcnBOzqAQnZZ1udEi3CEppsv2QIUqR7r8aYPqJfBTdgPRJMgegl9ckXlDgXbq8bclqE38RQ69IwOvRunhFyk%2BkZptWLXqLuKu%2BEyY014P9fjN31ggIsMt6WL%2BIiZW369uiu2qaOa5%2ByQ%2B%2FE7slvGgAP4Z4ZGyajzEbQ4fd4cDkA8cnS4By963G6xJQDsxHH%2F5BvFdaRYiSZM1X%2F4nhm7DzRJ1B2WqTvadq8OaST3dmkTM%2BDuEqzy%2Bi0tUUhyRTJmjdij66ztPpi8tVFfm4XDuubjOOGj6rDPpA4Lb6L5PI4AjvwzINvfHwYHxWmfIdSiIdRWD1LtJqgdpP3YlY%2BHhsYYJz2No90odgv%2FVt6ZkJZ03f7%2BD%2BFYqPTfS3NrMJid3b4GOqUBYjgDFXBpiM2HyZAbrIhzlwaYmCBCunp0rO4Vl0HYmGXtH%2BdjN%2BTDvjpdeAEB3je0z9spfnoM%2Fp5bXDXuHfBJOgkYo98%2BLN%2FLXwvVtZDy9Z6JxJtyE5N7QKBZPR3qFFXBzfjseKRzg5cm80KIzwqcMdEVyCAt5%2FRZwhI6rEpgBAOUXXPK4VhjqnM50Koen%2BoBHhUQ0FWKtm2aSYbX5JQXRUqI1lTo&X-Amz-Signature=4029590e8d6c39c85ca195b1309029de8cf714535d2af2f15f4eb4e428b84d98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
