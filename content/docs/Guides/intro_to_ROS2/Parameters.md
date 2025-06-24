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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOST3GO%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDgso00dNrWDVhnW6RlI6dBDMVnIIpIbS2zGU4FNBRxcwIgAlBWESbkMoxjiRcpQPfF4W9Rdy8%2BeAl1nxeIUx%2BVaSgq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDBGwCLbkDoT%2F0YiBNSrcA0bL2p0Tt1HWL%2BcBIjP7BBCd2uB64yv8dbVDokWz2OtOm%2B7IePTUWKfmskYyJAeQTfgIHX%2BIr1cgZZOHFRO%2FDFjBO7Zt4HKYi9MSvu%2FKr6hqhWinYBDisGglgkwedV%2FNCnoIbafJqrLnJ1TV67NohBSSVWz9Pf5anDZ4HG%2FvshPhc%2F1bZ%2B0MUDsfAxovzXTOVzzz%2Fo8aaNF%2B47K39IpbXx69PsiblrDEwWJLjiFkovcSEDW%2B6xInS3jyl%2FOu%2FI3en4E1KghaWMOO280HeK88HQ1W6EemTccK6sug0RIY%2B4umdHayzRQQT5TeWDk8%2B6xkeoKZ5zibIzP6y%2FNwSDUqTke4rUXBx9%2FyJNyRlHpkz50295kMXlcpWKMThdUw8aSY5idY7knuV5%2FZ8RjjTmcg1qa5ZgL%2BnKIRqvvMCdKdCDan0KQ8beyLETMcSMyC8%2BagtlDcXOTMEQ5ks5SVQZCBiVhoaijJgvFTwI4dM%2FTSHJgox7u3N7paJFzJL%2FYbaNpvaGBxoLzxC1%2BSvywiIVqliuJs3N4ziYo%2FM5rOoK4Xj8uV9eo%2F4UucAH0vrK0nWRA4ZI%2BdqapzX9JRz4XDrSgP8%2FgZuSNO8bUDaWJWbCEHbTBmzlXB6VzrKaE%2FvaulMLmM7MIGOqUB9oXqZ1acazh%2BQPcrkE87F9TY79LQnkB5naeza7qF1ZRQukcLixCecBBmPXl0joo%2FoDKYMwU9bJ5e%2Ba4uTzO6BjJSsYHl3sl1JUM%2B9lnZg3SDDX7pEYOdDp5%2Fh5d%2BiFmBGvdQWLrr%2BPk0jDm5hAVcFy%2BGdQc1Q9buj3sx%2BYr0YSDcFHw3hOY7B8NmGTyU6%2B7pjXhaC4bHca6MsNCnPe9x715BgSFD&X-Amz-Signature=6d0f77b508ccd4dec5259781f27e41b7f5344ff4f24b1b5efba69a948e44a1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
