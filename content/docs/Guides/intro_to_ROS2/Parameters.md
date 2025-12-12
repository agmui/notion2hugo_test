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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYPDI3Q%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD5sxGbYgvUxee3hlqWnOQ2nxiEJ7lUz9MGNasgZDIllgIgOMVYt1fmBgpAAwn7HsJGCfXCq8Ng9Vw14tavnNf%2BNa0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs5tPPUYj7Dp3yUryrcA4n%2FMl5glBFC5kxhS1uj39LjWcSJojlMVAubsm1ALh2A%2FK50oY6iH2W5OmN2T7oRjhTPvdl4fuGTET4ZYlTJc8sFqiysautsKVjuaunNGAXBFJKg3oM43YmU0vffnODK3CnkSCyBGrQ2fAYuLczq2F0XL6kLKbcXJg4UMLhimD8ybrEd5V9OVxn7aITFu2HluoAUeI05EXjSj%2BGBVP9uaiaLGvwSP12VkHMxb2PMdsvjjN5yQ9g2gmaqc8svd9LnveK%2Fy2LrTENIO3D%2ByVEmYV867lYq5PjhzBhZtzJVAR3gtuzjdqjyUTm95tnPv7s0do0HojBS8OXZ5Edpl8fsHbFP8JUW3DweMNp4fkUgCynBqycA4m1w3rtha6v3oVH12x54%2BGw0jscS4r%2Fb%2F2eHiJHYNyCsL1ddT8OLVpqlsh4UCWYVMdgas5XPLT04IofWVlyJIwI7c3AyUNm46gj3LLNzEp%2FcIvJZJTZfyShME5ObzPqIF3AjvzhOeOmRc5b1deMOHviUoXiXoLI8htZ6QeMhELBmVrlure%2FnXD1vqXH63h9IajVFdTt%2FGElfQlv7fZWVIWYEuLgtt0%2BKdJ9q8c0IDb%2FMe8%2Bo01E%2FfK2t%2BpesU%2FugrqrMU0oMVuw0MMzU7ckGOqUBAtgJII%2B8RMoi3ws2bX%2BkYA6MhrSokekjAB3tr%2BzhUreWeQ2Moeye9RlVkRN3vOH8n3tPp7K89O3Juyboz8SqvHr%2BQ8IJfOrCf3Au4bNl24z%2FU3WHVTwOfl6CGOWNuWQcJFWbx0f3ocwb%2FyZk8FgcjFdj186yg6Y31iXyNWZmNS3ki4PgkbUevaa09HHyfpRY2Yx9ch97zNL6Z%2Bcka82NEQXc1CZQ&X-Amz-Signature=7a219c9e44349a851533e72ffbfffecc18872768af22979df145003ada6318b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
