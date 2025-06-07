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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQ6DIC3%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqfa76tGoG3hUk9LPwWz2y23D2FPWfSlpQQ4P9nv%2BnNAiEAmEcA3VIo%2BtKdsR6c1cLG3ZRFCTGK%2FUGxiJCpNcDfhCAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKjYn5VaFaRvzkXwASrcA3THOXHVPIlqPL3zxw6VLW3guRW9bIqh%2FTwcUXJsXMHkO2eNLlurrS3%2BgCpXKO2Mkw293caOpSdmQGz3%2F0yi60Kiv6LuiHAKwMMLAycnQvOxszhERq7mwDyxiGmY9eoy22sw9nm2c9AcT57fyvHD28lEZZIdBYiP7tUWgGPIBa9JeuDogGXL8a9B2WE9wnWMie8imlMYbsQAmsCTIIpysaWno5oBmwzl0AZiGswXggwSsqy1CEAngVxVRciMifWijZUpJT4zRKxHAcoCVOmDrURLf73Ofn%2BItQeJ28iPRGnwuh%2FspapByhzPmJ0TVFXViQVBT27LXeanC1GPbAmtsVfZGAbkMGPE32rknPwGYOe9Stgj5qMZPc3JqIaFg8n8qVE6RnPLCC%2FjNTJDDuhbZkjhOHN9JnVxZ%2FvGHVYUt1MVpSvZ1fsBVR8jkQerLQ%2BbxhW4hGijfODUqm6e8hGgqWCTDTcnzkJKUVK6M14mzocJYZlS9GU1XkfN3EszGgg7Z8DCu%2Fdq3xNpOcUKq%2BvCDytmPlNbgnqxMmx329KkHIt%2Brhnyekeq7QnUcZ96QrtW2rqnJBYCwJbuFjw5bzFRVULzy8qLiMtURtuZUaN9KmFOPE6a48VI%2FBadnac7MMj6j8IGOqUBgfEMDVCbWETpaTYZjbfGaP9OJqWZPjCxl6Eo%2FR9ugmJv6X6JdKV20yaC61I%2BJD99dWF4NQC%2BiI2LrH9irat6Rg3v6XWhfQCMsDn5mOJ%2BaTevLNvvaKRGTOMJbYsJUUvoKmQ%2FzQNzoFaxBcvu%2BnGjl9tbKNQPMrvzM95Wc90N8ji2pQb%2FssIYrTWx13J%2FiQ6ksyHqo%2FXsgKhikWFzar%2B8YJoA8R9z&X-Amz-Signature=e8a3090058cd70c33aadd2c6eba39bbf940fc9fdf4e4442c2287e57113f2e9cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
