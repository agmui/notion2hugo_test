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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPIURY2%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T060925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH5NfG1c3GRBR1lKX5UW7B6%2BjQY2ICZH087ST3nWMDkwAiEA6gnN86gPI%2Fas9NkXw0Q0e%2FOExIEkwiZEWyQQURgQLhgqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuKqmpNbCBDq%2Fvi2yrcA%2FSzfcNstUKqN0zm%2Bw5DgwBAFgdJJGms3jlKT5QLuDLS%2F%2Fx3GUPx3jrvmkr86FJYWq5RxuKUTdw1tSYF%2FEQcg5mxHRkX%2ByxyeFrhbFyzfs%2BnTIeIq2cQcQ%2BjGbyS5dVv%2F5Cqis0AU9fGk0cClmTFCRqA1xNMP1ClLiQTAv1ncuRSBuIUxStGwrNiiAXSTuOmAafWZwB7%2BvWA15iAohnX19YqDO2znK6ra6t7Ynw4vjUK4vyw4jV1dGZNdTd4xwqJT5d21f%2BRjimeG8d08cCfiD2SGWj%2FwlVxRR%2BxesZCo8mSOoTwRbYjtdqIvEGs95COwF5ph1NnNZAypdXCDbyxiryLzXDnobX4dSU4ALJIGYz9d6gakHaJcpZVB3NinOOtp2YYxnE0wFFPZL6%2FxSpmLyZ6Awk5CMasY0CXkditD%2FP7n4gxHqvRE32irOXqPzoJzUswovm8jxRMrPf2uga01k%2BQH0qlSC1IpRSePbzk3%2BX1v5IdmMRRCCSPYaC73jhwljSXxtzuPGETHCsvmW923k1ByilmiEud4B3%2BB23dHWRq4%2Bb%2FgQzkdo8T%2FhDf2J9Ue9RAFaXbUduzfJasuq8JopNm2ZtDFqniVnN7VEbWnMEoVy9VG94cllOXlprOMKTf9rwGOqUBjJKlBEOH7tzOTawnbt8Q7hEHtFwcTAW4ZfJt0AZ2Qcz562ZMH8gV0zYij5hsL5zX8vcz%2BK508oyCX6S4rFMoDVPe5hWrRCN9LEQ7u9wfc%2FWmU7lZx1zy4c98jHoOanpMY5eXJAg5z1HFJhbKkucKzfU8YnI8iF045thPzLTyqgf54S6ioGQVkF8t64AI%2BIR7Me6K2i7XOEkOPfVuzkP7O3WfWyAN&X-Amz-Signature=b16f6dbfa2249686af48e9723dd29de8e7413b1f5fac1f1e67eae2a1049a5bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
