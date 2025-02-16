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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLNJKQXL%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIG7RYM5WXCkqUF5bs2%2FjRJ9D%2F8MzTA4DBeKWGOHQZYHeAiEA%2FJvDEge4FAuknQQRGsMDj7nENo8o1ovIpn6FSgRYdx0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDPFx3xujvrPNI5zOeSrcA020LzSvyqoyocxhj8fvllWU%2FdAASbBO%2Fnu5OhEnNg%2BZ4%2F1QengRY5HcmGfM%2B0tuyoS7yRI2WIZUZ5Yv9FTFdsnTeVDDT2XD3m8qncLkBeWlYLM16MzaOiBL3SGSq2OjS6r7wFwxnwTAUcmuoAjLGUI9LW7Ff8m3qDU%2FkkTlkCWFtUdU4cRybbKtWKciDYKMF9bXC2O3U7FlkeH96h%2F0T5Y%2FvOlz61RUie6YqKGYGWaitx7PcWbY3DyE7plRcVkJvnErvhFQbUz%2Fzfgtl99K2cm7zWEBSTQAx5vMylNaMuUHvIcEuERnL3DFafHdfqY74tH3peQbUzlOov053r9iwyg2CDhAzp45Voc8%2FyYc0K0L5kTe%2BgnX5dQPMpM2cjCf1spydoZ8Rj960ydP7wVJUodJlAfLfJirGGCmc%2B442SpIjW%2BOWxxnh9GWCDaaCaOWwU0bzGisGN1Jr1L7QvAaRqQbSobkMKnRxiKdaeQBviENCBEut4oIu4ZhzXbwSW1osc7ynmUrAZLC8yNKptDHT6IFtZkDn4DlKEdiu4Rn6HZIji7zFQD4pvjCtiESHfJWVD%2FubJfUQ5JUSfqpTtpoXyL5FP0PgSs%2BUxO%2FW%2FTx15jx1CMS53D0Pvg6LvhgMImqxb0GOqUBup2WU%2BXyOcwER1knjfFmz%2F6QsHq0seH1u7zpOa7nh41a8NPqiiqcKWpaACCZUTYK7DwQrSbYK2Zjl2V68qutaoQwdznn%2By1tCbG0Z68d3wCFvk0OfFf5Gg9SOXZdUR9%2B%2FTYehuvhWa2H7CjzlPFyJDnrK7PK93zLjrF4LpzUewVyLPsuxRoZLtDUABNstGXWevzZvly7JMN37vn1FzrmQCRcAbCs&X-Amz-Signature=09d472f1ee66ca7d8980532df9a672ef65efb67ed41c501f0da41050f8c296fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
