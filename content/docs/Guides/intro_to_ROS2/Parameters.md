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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR2QXDDN%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCswxjtvQgwtp3v4KQC0RU4ElA138iT45jcxpGiUSJCzQIgIIqHLqHhsx5K9GTV7F0tgDZQN3wZrQLyLBc57y%2F8198qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGiAqW0wglcBGO2B5SrcA2l5kGWYWx1spxJU2WM11iyqmEEY36mEyZdMSzSkGVCa2WqpMWJudEDL6U8%2Ba3XLtriol0RijDS9UOMtJfOiqYt2RjGve9oiBHjEMRmnMKm7RgIw4n8tLastCghBgHc4kSBuOOiOMNXy6x8NIBCkg9Uo7MYoJaiFvQxtSoIElS%2F4M11UEijCkd7NGmSJXbscJ1LkVYbYsV%2BDy%2FMbIYWVLrW77%2BUUDB1ClFPQtY%2B817cZodGsfNVkfUYZbfMk0PMx0lzZLkKpvfLmPn%2FtPKg3651FBDxCVVgfT8OKX5iwaJBbvmp%2FRziWdEsGKl9XSUdiLVttWAIc1aJI8oetry15m%2FTSi28GA2murouRtjAxUmCDHfRa1lq606fYVuh9unXoc8wL61NB99ZcTwOEB7XZhQDqdJ4ZpGTyNjCJ5gPWs8Ox487apMIILU0P6i5MXOcSmBCYLgqpdDgq61ZNAvjk3wjtt%2FVuVF%2Fr3IxfIm5a2vh37IzFxwUlY3OrNNnYg7XP8xK8KzYXu4YhhpeRrz9wXmfph%2Fbyhm9cEZyZlIZSDGSrpW27BXlSOlgjXtePKfiVMDIQaOw4ulHhUPy8OPqq%2F1%2B4iMXx9tM1M7VoQZh6C2HGqyAOJhqB%2FLfF6uOHMLnfhcMGOqUBlgO1TV0ox3wRcY7EoEMybzLTRfwF%2BF6ImILC9pviX7YrU43aO2cxUsIf0yuHvAOUqoBzriOLGF4cRt3ffpQRQZNjNwbLCsM6kc0H8SNjHJsU6lerjIPgd8nZv8hTMXc5aat9oOEn8YlrR0zGV1MiKm2M2O84qfbRV%2FdH%2FrWLri0QiWKnfIEAbMEQsWFvu0VgJLTciGcn25EM%2FSE9jiiQwga8P%2BTY&X-Amz-Signature=8e9d7437ad0c5b7b9c6b0890d26a73b66485d28adcbe1d246ee6c83b7690c839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
