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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RTEJBEU%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T190556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNiW%2FibWBmk%2FEf7%2Fq1pof7w8zB4shlRTfO5slwbnrVvAiB30JVEL9bpEd%2BIVL6gcGnT%2BQv4ZYBMnJHztUpVM6aKnyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMscUWhkObzaDonghZKtwDW%2BJ1MfvqfM1IihOevxxV%2BQQ6wMQF9h6MYW0%2FobwwfY0QSOgFhsxmEUtXot3rswo7F4MAlZJzogbj5uZnsn1eMAvXN8527GjNTeRC%2B20tyMG%2Bgq2K9AS7Qk4Ux9XOic0473bt6lur97Oqe6MDzEI8FGeHVLzWcWFhhgxirwrgGmSqhmR1u0dWAM7ibc1%2B1LX6wB0oBHtA04KSHOznjFcp2XSmJLtJX5Q2PntAN0hDV7qf3Hrx7MmJ8KWa90uUgUgdvC4seJTrHp46nOYgbiBdCD6vBPhX9Dl%2B4ndReT7ShkwUBFzzz%2B5T5IFcWBOe7ooXk76crTSC93BztvMMdFWqYKhgAJuM77C1Vy6%2FzTEJdfAA5JZVyU4vSO8j4vAxmMrJVLGqxlSce%2BthJPBhaNX5HLHsGMfgaZOeFCxidK9tNkeMMLiYyIV9Ozt6CdoTuEJMCeCf0KlAvUUlLCbKxbcDSTdryiUzyzxhcRl4eMJlMywf41RjL8XlEP%2BOZyq1J8v6W37fyy0Bv0%2BxeaAdWtnzstywempW9GUhK5tbig34yKcrVdHS0HTV9%2BPADz8sA1HR86%2FgVxFI8o2%2BvBhT1QAmpL0k9AwILTHr%2Bcyq78mV1v8e1yfoSVfDmK%2B%2FPw4wj9b6vwY6pgE0LHRxrxpAr3cHk6K%2FctW%2BySQTfjAFzbgqvksI8W8I7sFXTNaMHOG65tjRYeApLTHl7wZncXw1ybsu7HAnQKKq7ghAzg0ktAnqWCIJ8nFRwnbu0BWb1T4yfMWLIiX7sozmb5pfEENL58OqmNlGnwQbzqcUFtkT0BYC6nUGQslKZbDInSAqwTlhbZ6j7LEULtC15r%2BdaLUMhH5dIiUBy6KyL73oIomy&X-Amz-Signature=b56b3920c7498ac843b895ad721c51556142daa3dafffba6525562a56a48e707&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
