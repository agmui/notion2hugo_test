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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEM5Z76D%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCP6V2qnIHVfo23lnPztOCHIEcGXu3yMo04kHmN%2BbHyNwIgXn32B3yNZAQJkIN1wYmxvWa1%2ByY7gJC14nEtFc6GMSEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG6UMpGy4zUp%2BFjApSrcA1I140y9WfzYzB5nuuk2rqApQin0dqdlS79hCEVjOTvrncTRwAh3Vc8PI9nWir5RuoLsqy%2B8031MqkRJZ%2FgFDHxxRHn70jtsP72RCR51%2BZIGoHGOi19J9L%2BrSrCtLBg7TcJcxTLsU%2BupagTjZxcKutaWGYK%2Fqo2YFald0Nv49dCKWKcSVySUOC9IcTwL0L%2BRIoMR2UD0Mq1Gq%2BH9KShCk%2FjnmNigJLStox0JV9qABIW2BMrHA70XcQjeTjH3noUJZ0Na3tBJbULKO%2B7lKrHGo24PG%2FkaqdDa8AA0a%2FJi04FQe1ZbjcWEq%2BgqsS%2FuiJK2Wge4%2F9hX5EtQ4b%2FLqohnrOoyg6BYXtq4vxLqqBNBQi2Ru7KzKlU%2B%2BPw9QNgjzeG6tS7ZfT2bYJNydAfgq97wXHcTotA8O5zxAntSgpLvp0oru5XMOtCEE3AbjIdUTfW6JCRp6XO7uYi1lTBfDTCBOxNOGoCiPPFwIVjtnz07z0AXd0LJNF6GdxofnmGVVatkr99e%2FL0pWgp6C6Q35lpc0nmdwidUUJb7n1phjI9TDVtgPEj7ux3zqgXmo0kFLwfj1hFYvi7rCaBwaso7ZWDBndsCoY0dvCzBZFbnhRdt1d%2Btt3pkPkUw5nPnKJ26MPel774GOqUBMQ4AiMiB3L7%2BBNmAt3GYZnF4bf0wWdtsPcl4nd%2FoC3lmGf9bOEo2eiI3HQt1%2BoxVyfAsr6%2FYGSDibGZ7L1DnW7fWi1Z2RT93QUQpduHZDZH2LjsZmPziZrKywepcQOgN9YlgJq%2Fa%2FsfCS34zi%2BvegNEtSLxF3OiHGhC45QKnp3Sm4vnvkINVNxllYqI7ORQ4%2BQ9LP%2FJrNPldUncA5uMWcKrnvEv6&X-Amz-Signature=9134183b70d2883fdae88e4d39151b94194dc9f38aba6495e4310da4f371633a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
