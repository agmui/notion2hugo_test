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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PR4OU5I%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T004315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKJZGxw5d7F0hQC1pTKlXXm3AqQlUlVZLQqKSXU%2BSsNAIgWKWZsRAwOwD34wcMuNopBdT4SGkTBoYATe2lbCdQ7TQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBg1pvTQiUkIaNoMircA4apzaS0UEA%2BG6I42VVeTCJQOJITBiEGvMeMi4jQmHnqLazXgQbhuxi87O6PkVJkokq29PvTv3ZNuYf7QiXzEegbunPdr1xxQs312tBls0t7fS%2BZeOdeFgwhZ4dKIOiIbeODjqGolWq0JvZLomH1XQLo%2B%2BIVWwT%2Bsun%2B8pAuhtMNM8WneYEjGE%2FnHrCZ7fteLSvcErWwbDMhP7l99pODQ7jjiFmmnfLl089PzuRJA3Wj6BDlNBdQH5F4ZeDaUcFHG%2BGF0BMRuqAQoSTA2zazwFq2AB4OaLgIL4v0ZhVVo3bgtMt2LNEvv7yh%2B4qBLTasChhCtEK5YFcd5VODgRdYvly7gSuoZJ1oFJ44hCMMvPbpNBe3Opg6G2TZZlljoh7%2BJDeUfICmKl37YExPFGEGcKGSFQVlxUBBnekRiKRGG8besAJ8PLjGhyz%2FeYwFmXfWpgYeJWA7iFdSZWsClNzcS%2FICM%2Bk3mBg3Gpa8gQfmqqk3U4rOYG9NdRrEY4R1c%2BKhFzP7roa9p3haEFr%2FieE7IrTciRAwPpIGU%2BvLWz0SvirrvRF9T5AZCP%2FmOAe2Gnlk9Xar2HjDPOWpo%2FtgVPndY0zUqk7tJVamary%2FhRN0Qtb5ltTe8Yc6IS1XZWlgMK7sx8IGOqUBq2BxhZr4Fo7xIRRBRuZZuapCtoVcw6%2Ff3%2Bq9G4Zwk4%2BkR2L7BMOwD8JQdkj3OGDA7Flx6bAfZ6F9rxmA%2BOjGAgxphGn15jNCRSQUzEsHqHRmRbFcmIWTgKvy%2BY3i%2BjTteR3UAuHFtPM%2FYGEEiA9%2BvH6vk295KLHVzZ%2FDEteES40EnS3NA9j8lCKBkYzEYp8qP%2FLxgy6JM3A5NTisGeN8PnOUcMOZ&X-Amz-Signature=e5e0bc18d9ae0a4df494fcc13809438c9325ccb7086d0ac4269b8bfbcf569bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
