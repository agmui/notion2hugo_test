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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YKZVCKT%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD1Y8U0P6SPMBTcNuvW0vZh0V7TJ0UAwgAcCQZLpBsI%2FwIgYDP0BPVuarlgWdqzSmjJbSqQWQdYAOGZYW%2BkQePXqpEqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr17H%2BBL4NC8PIV0CrcA700tAk6GtiNmDIbwJVyNgh7bd%2FwGuvwz2gvINu2RCyWe4shxh1aLz3TMj5pdn1FVaX79wu8OOftcP2BYXP3rWe3Hh62xyOiTnkR%2B6EfFhaaMeRyY4zLXTN0CaPZ92Pd%2FvKvKkYffw%2BSt76HUBseTPUbo169F7qtYdQMnLyJaffuP18h3VJ9xtutgrY7I1bGh3PvSaWH9V53C3IaKKR6xls0VJdT5jEU7M5PBvbZ%2Blt%2FhLQ7OPO6sSBxLq5bssG9cmu5QA%2FWg%2FBCvPTBvyhso5NSkNOjNWLRB0RRuZHZIOxQ9RpXceXBLOm6O%2BGyparK%2F%2BWSbxo%2BpvBA8pT4kCJfp%2Fa8bz3dWFoo%2BlfCtsiQxfFp7%2B5yjqhI3AnTyHZKapI4gmHhtu%2FFXS%2B8KG%2BNuWJODn0PEOO7uW3Djr4ImAIHtiPdd77TbHP8b%2BWyStETu4I4US03QPoW4KCOxMEEieFhVK5Bkjc3lJwIi1xudMIPbj0Lg66nYlkPchaLEFUeEjgXASGmqAXXgC%2FYenlQNH5OoMAeFfO7yF8S5VYk94ck%2B5ryV4gMgy8TDO36LxFrRXseC0FOb4d%2BptHRY%2Fo7URHf0rUDS%2F5%2F9QbFjp%2FJnTnCH7Snm0oQSFTwaXyVr54yMN3g778GOqUBFukUSkLXt2dL%2B9V2pxwRivWCWAZxaMrfpvNnK8W%2F%2B6f4bkiduno75ZKU0R4yM1QXlWasBjpWKMZKmrDEIEkrGDiw8tugrI%2BX2iMEE4wEMyQ5bMOWSjL1e%2B5Rm2%2BG14eHxdGlorvOU2QMlnKw1s7p0YMkN%2BHGdrBBqCqGbQUTviHmdmtPbn5X4shfCj8masG2A4HO%2Bw3PkegjyBCZoT8KNqbiT72O&X-Amz-Signature=90676daa9c0af06b195c3a48da7d1fc2bd48a42582cb4eb9c5e7aba2484cf6d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
