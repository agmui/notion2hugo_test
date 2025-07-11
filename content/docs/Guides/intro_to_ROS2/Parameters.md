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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677KCOB6V%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHigIbnrkABQ10m%2BxyFD4E4EO%2FpPB2BUUK3cOdUBilvCAiEAirkeMJ7M7w559NqZbQkXyK7%2F%2BnG1p2jQeNrZTRrVrfAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEE5mAxVokqschrECrcA0%2FX7xm%2BEGkfMLEzxh%2B5NO0NRFpZWTi8h9EPtWnwWDLMpKDm6zj3D8A9qj1mAWk2ZqLeyIDs86HLNcl3gdqoAV9cXCDWWGtVa7TjFEWxaymPJCT%2Fj9COjCwxZyL0GTYIzDoYx0gEc7FQ5gOlyFWk2ZK8JbGCl6sFRocCy0NlbWr%2Fwdpo2CD4MBW33eou8hszGSQTR6YiFD%2FQhjH%2BedANRUk6cRQKfQlXa%2FRfvTlE5mzAJ%2Fw6bwC04OpEXGjl9IuPAuSA7zB5y6Ty65EktK5hkJ7um3ZJcRp5oAFMM2PU%2FQWT13TyrNkX%2Fo4vh9OtDOJgIwIBN4%2FX3VzZ8uHjIzzfB1W%2F%2FK8OwGO9SjP4RbMfOuyh1AW%2F7RULZWMK6WHlT58DQOL9kw75FYukhpVTPq9vPZsLdy9ox1s1HgG%2BP%2BjVwsbtgcmLLAoRbBGHjqodSebhoWdWYUy1BZ%2F8x5pssJ%2Fapex856DFfjKnwAO7Gwo%2FRli2Wf2q8%2Bv9rsPm0tiSuigrCnHjQxtZeC6vb15%2F0bgP56CSbxe%2BXUHNQ8YuuYhNiLx2E3hWHxdjYWspHle30XeilXb92Ut2GnW%2B5aQh7EdCo5tFRsM6oVdoaa7hFGPaRJe4Yw1hz2xjAyvlFUHMMP3%2Bw8MGOqUBwdHpyGTj8HM%2FlNQWeA%2B8%2Bc1jrUwohg2%2FaL5g6IOunE3HLuDDzdFkmI3rT3IhCfzIhVq530copY8sTb595on%2Fa1q1NwdvtZB3crLF0sX8x6CVQioWCAx%2Bb6ARDVYkg6sL0Pir5EmEtbO72j0GgxWiLqBFNxdOEpOEbtVU4yxK5W9yBtq9RiTvv1ILk2DVgGA%2BnOo76tTwzkejMWwz76XV7T3embxB&X-Amz-Signature=6d945a5f6f6610e1c66dc40fc2f2ff44c1caad2831325cafb6394af36347a185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
