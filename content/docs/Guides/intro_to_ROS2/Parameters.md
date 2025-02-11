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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466646V6OJ2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T210713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVitZsmZEDlpjKopdExkk%2BKJwdgFczXe0Jd6kMQ4i8VAiBvPI%2BHHQhaocLGQF23qa4rra2LDetGMqGNj3LrfY3MqiqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD6lXdSDZsDqkSpItKtwDUu8ZZd6HAlGHaFUxDLcYHSShV2OjqUylLJxtOa2KJzMdJb6W6SNAMPMX7UEcroMqL0DqGztpRd2VB6fgEDQRPgFVeNt84UedQQCWD4U4GrLwKfG6W7JAH%2BfvvR1a62Zdai7n4iR4GT9gyIDrMfJb%2F%2F3cxe6SS7uqkUAvMr9vkCps0DWckIs3p%2Fd%2FdMhEn6iJWfRcJvQp%2FPMSNxwxifPk6uKEndbCNiEiZbJjD66%2F%2FsQ9Zc%2FKCjZ%2FjmMJQOPWVnCrXipcRVtoI8txYhmQEv8PMwPpOIw0Ic2DtnZor82dJvPq3OLLDHH2%2BNP8hQhvSqJaW5siuMjjUGvZxInuX9dDgJe9we88sznviK4Xm42WGchV7Cz6e%2FiMZJ9OYVj0jiJ3OpkwUE6xVj5s8Ip14d91ylagApMhJ5aKvKGqYz1W30CLLN0BS%2BoSmQlXFq%2BM78tS0pQPEibWW1fsR5%2FFixCEa1q9YAatEuz8c8OxqAx2Ovp0B4PbtjiZg01k2IE%2F4%2FYTHm2v1YDzhbGovew8v%2FQ%2FGfS13%2BnpdKn%2BmtRe6JU%2Bro4%2FFsaunpWCfhAYxXxvybHzKjTDHEyGUfBAzWEqC3eGmBAfGqhy60U9LOxs5Iel3AF1OQHOZDq31W4EM8owtciuvQY6pgE016%2FOenRH7iwrkbTqeXKbxcMJBYn1R2Kfk%2F%2B%2Fi22D0FkYVPVEKy6Rmr3R11KUcE8EGkJpYtmp5rN6T89BOw3foTf1yBsY98jdmvk426MdD8TZ1PQj4wZbH4csT200KYIo7O9IaSvp9rsUgwSAO%2FlDOkEpZWSeE0GQzl5H%2Fdl7QxWlyhUs4EMBI0RguBoen9zKqj4x%2FmfA3DQ13I2SP5w50YLpeMPl&X-Amz-Signature=dc540940d4c1aeb6ddc62a50855192203f20ee687f1cc70b66dbf2fa3ff8deff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
