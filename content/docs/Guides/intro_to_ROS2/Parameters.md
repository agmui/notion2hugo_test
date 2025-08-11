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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY22IR4A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T061609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApCdPU5GBhNzSxDD7slY2xZLIE3%2BfEgwoKMeo0jRyyEAiEA%2B7WBtbmcM0iZx2VAqPjkLHUiEn74RTQ0YHh934JO9dgqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBi2gGlB4%2FFhp1w%2ByrcA9gWRFCGZWXr4xpyp5zBRaPzx%2FtNKHyTW2N3BWl1QawtOsW8pGkZ1nq8aOE0E66jcJCGEZh1Mtr%2BVF7Dws3auPpcPnDDl9uArkmhBj9P%2FdQB3WM%2F1kS8dvGW1cUi%2FP4yJxN1Q6nybI2CfQ3hFd%2F8VqocMSpzOITcH%2FHCiV44W02Qc5OIWEfVlRRFs1Aqxv4xFFhfu2wndoVdyr0Akh0QpLrjl4%2BmuRnQyWH6IwLmC7Nq3NSwlgjTrBRcD3NZ2QfUUDvwi6EEQarrJWnfOfXBhq3GJqujmo%2FWUkwDJhD0LXhhfPzB09BhfYGlscOLWYxwtnEjCKTx0VyAg7RciiksSxzuRBP1hwXBYaxmxSOUnAmucUMesqRwDCoay1%2FA0pD3j6QavPmLvT5TCkUI%2FlWc3WmbwQ8GerP0TahhlJsrjD4bpSAjMto0B2Dgw8t7KTEHATiULtniNBZc4DK7wZUGUyrRf5CacRr%2FSUktCojBcls%2BwPNenTOEok2HshijwZ6qUsl%2ForJf29qIhqzUT8ZJd5fu1%2FWNxPemmEcnbiGQSg7MMUrCCC8zEvatmCObuqYdiyNtU0vLhpllLv2rGsNwkOT3xIH6pi7jKC%2FRhGVq3wJ8MD8%2F%2FeHOdW6qG34aMMP35cQGOqUBTb1%2BQBIWjbs9QqHRa8KZoAwGfo0GLyJR7UQMvTPQkxcP1I8ykAy3lFV7DNoyQqNrPE2rQrBHcRVw5hH9i5m5p6m0S1JmxuJ758BuytevdL0i1zfY8UTjV9v7t10lQMWS2fZHIudNG7TCa7cj5voA4S2SzywOzK3y5NpOmgU9O11ZXDlkCYfNtPJqctAKe0NF4AmwNTD35CwWwChZXMhOZ6d%2BDYZU&X-Amz-Signature=2c330d8b323c19a527ef6955cbde25473ad5055721590d98342cec63bf3cff0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
