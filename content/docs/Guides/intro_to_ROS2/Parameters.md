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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSILMWA%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKiXcit8%2Bs7%2BOKf45Uce6acVFBbz3jMap76w240hzeAiEA5OvtYR6PvoJsZ9xftEMn8WONfmjUnXGEO7ee%2BBkBhkgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKavPrSprpEQsvU4BircA9UFUsf8WjRrB25jq4Hezf9ycYa%2BEkG99RQpzNmogWfWwzAUigX2OkWbJoV1Fo7eYTAT5XnqWMK%2F4teqDOcPdjFscpGeLiGZC93wtmfEMhd8%2B6gJEzocDDzbPD54zi8oh7NRNQNqVYqJQCnljIYnNvOLZCZgtH1PyBwvAWButXXKIDMEDpBjVMHNjo8xk63VwD5UL2DyjBp1OY28%2FrflwZasRX7nUNxZme3yuYRfrpKZty3itCjMRcrk51IoRmgliWZrA6scySjlFF3DP%2BDF7Iqryn%2BSjoaGGPAjXYr9AIagmK2Tpwk4d%2FgrA4UW9cPGehvFYaIvDhUIzu5AjxW6WChdoTZR44lKGIiywMuZmImoWnPayv7xk36nEHhq7bnInMiUX9YBH%2Fesvl2zPKkD%2BtWlFSWMm5Y4jCY%2BIeUVEy2H9Jb8n8gvHt9sHvrQuYtbNYNkK9h3rjnC%2B%2FWdSvP5hNVWArKTozy%2B5%2Bbx3hyqM%2BkFHxibUmZb99jyZtqJnVxqgDgVo0NOLiKxE8AGPxV9CNzfnc8Ji4oYhjq4IyYTmR4bEDfy8q8%2FHRlfjhEZZmLbgrx7GeNWSot38SWo675upL9rrFd1ACf1Cv7QUOOZW%2FEQ1wCq5HmsBvdP3NBwMLyQ48EGOqUBeHxczL3uxgEJbutJfLAHlPBPsSJ7YX6blXdbt67DpCIiA6%2BG1ns3Ssin1HN36jFt%2Bo7y5GGDqS2wePz%2FvHx%2BqTzpV2vrcfiPpImmtyyj7DTgkN8439LypgHbL7Xmn7MWTFHkDyX7R2xagnGGGOMOcls7p72CBCX2IGZg32IW5gjMTR%2Fotom897IP53Vfk9wuhaTQYD%2FKZEs%2BhGC06x1W9B%2FXPAOs&X-Amz-Signature=5b75f997d4d862e91a3fd62b79e4e16b15ef7dfa1d58d931cee6902def5b9d89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
