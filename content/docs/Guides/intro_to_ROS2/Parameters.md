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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VJRI46C%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvghUfbcjCdEkZxeXbHrHe6nGud8srIguVjBfAldpxLQIhAMKPSdJvdl3l%2FqlnSl6UuI8qT5MCJ9CMB%2FrgKq5ev3dJKv8DCEMQABoMNjM3NDIzMTgzODA1IgyOfb4TBzoaVhrh7EQq3AOj3cTqmxbl5CtaDLYpSEX%2BQfFK%2FA9%2B9yYMeJ6zLNfZMf9Fg9fUWg9F6Cu9QX4%2FwObFjZcnLd0ENefMa6d%2BvxqM0QeggVU%2FjBnuhN59rfXQL%2BZvJx7%2FDTdmf4cYW5XEfTzF7bZumP%2ByPcE%2BH5Q0o7xjmMeJhDlnN73YW35rZNmgtbZX6dVvg6lM2cuVPRb2BI3WehRTGgAb0tKyJJuoZhdWznxWlYVWrIfkT7XIsLd9U%2BpUj3LtzqwWjvIfVQfXvRW05xyPXMe6AflDg12zFRw7jszjoQG1lgyrw0n4IcCWB82mLmp8TMZ4DSdyEVB0mUsMjbU0HDOiUDEMvgCk7LnHollhfgrpgApCcebz2eBaRwyPb6zSxt5fQUrulovLffnJZcVKII8h%2FVQe1ZGgJ3Wp8n9JxEO3P3mZeeMbbBKKz6CGKR3fPJYydQZPPBB1iGyKR2wcTslrBb5TEWFNSghgxHC0uHMQA9I06LqN4yi0VhC0c7492nZzCM0rmCgTFilwG5hYuDVyAIYn5Z4450IYUeSZzjHjL1gepVaQtS5LmKOa8bOm6L8%2FsmPj57TNDl1KhbKdPsgnClUQo%2B76fzDxRBQ9dyEyXi1HHpZ2Y6Jhzw71G%2FPOD3iTKC5mZjDNwufABjqkASWGaHB6dlzvTHbyU47xmcE7KLtemNxJ5CnkrId2mMuuZo6YMAbAg3orlVna73eqcXbwutWrlxDDCsLhUnecZkynpzGJoc7B3iq441b5OgT1%2B2uUXaX2rE7b7m8odNJqkpUqEVusZg65cRhVTlVd78Dk1n0%2Bkx8uaOSit0V3NyOtxKyRtFmLwF3yy9eRB3rDbTME402RQQkZH34Vgwq1zCLufyls&X-Amz-Signature=5cbcbf55aee65356c8ae55655686d9014a1a6a8dd7ee13d207e7f39bdf37d6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
