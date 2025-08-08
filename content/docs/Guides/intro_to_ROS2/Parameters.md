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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646NHXSVF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFBZGF9CqBnaJ5PzSFRITkZCxmm8X9%2FCmXr5m4tbOM%2FNAiEAxtfeLu89j8TOA3KePXQI68aLe%2Bc3lbKVmdNqAF%2BPkkMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF9nmpSclluRwFMLJSrcA8dtNAjAcKkip%2FbpPx8mo5mlhyxgmRFkIRvKgZDSW5nYoUwazB5kMMxr08Xj0XfvirhBrVilyzTNJ3wJJ3oIUXKBkLmdR4oIrE63ZL9gglntk%2BNOEnS%2FOHNk0fZf5mq3CNx%2B8ARlgIpNaNB5A8i0N%2F2zC0OBDFTM6oIbiHKeeHO85Zsjp5RJ3kDO6fPMCEwPBebPh%2BxbjszuHAWDIzho95qEc%2BPUXyNDZJCom2lv%2FCC7jSRkMDfNRRh0OP00sC123UqVpsKdVKYPQ%2BPzw4oaOCx0sCI59JNwvEg6VnXL5X03%2FXyI5FrtynF6Clqt3cSnOEaLU8sixxaebK8MLT7tDTciMOkYAkcj01218ll6UuId4Ek6%2BiXGY8fqbhpQXFgm4qMioEkuHrDJfckfNetIY6TMzEQg%2BsEidzT%2FGVwsfOXo8%2FG74LatGJBFOVrXHNitsyahjgib%2FftXUAxiXqn5HUPx4dzNrflg4ubITUH5CU5HMkUUEtoa%2B1Kohj0S0Dl2YqBoKil7bZOo1Nelw82Ep3CXIbMapUzS%2FdsTy6eeL0P7%2BX9Fet6rEx%2BMaksQagHIOEYSnuoVGkXn0XKM2Zrvd%2FaUJzfKUxLd2b7gwc%2BDQDyj9N8Dd%2F1ttwNsfy2EMP3a18QGOqUBVsWPsqL3ISLx7oy8qK%2FezAJ7cCyL3H1yKsBpX9lHAWW3vDSGG5kJu72yJQH%2F267lDzdhpO2C5r%2FsWPBLM6zWU0NvGLfYJoEWxGYfmsqMsKWUTOhfHlPQUEIntgoYdksrfie73vKAgNaDvBOzQZ5V8XWRA87aojX41bSDISyYgvpqo3harOtcxfODdlYeIK88DinENX97hWgnOt8sD3QFzEbnDJyl&X-Amz-Signature=b33d355ffb0f3b42422650245858364d17836339d140b5c8ce630922fd4516ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
