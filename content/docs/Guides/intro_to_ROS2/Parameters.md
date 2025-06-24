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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4XE6O4W%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDYETnnwfNgGuyryS77zz%2BDgjfoUDAV1QkVvjkq9C814QIgFPBQqGj%2Bv1KHPAeGtV3aFgvHZdIgSePezjaNgGbSg%2BAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNdInARpLoJRqHCJ3yrcA27jyVubkVW7HCc99GYTTHMulK1YIf9GL8HGfpx55r7t1us6kuRWWPrdNRAmGQg4TunqWJa7WDTjbVY6gqocNWBEGazJvkG4YetVNR5o6yXfJBNt5NEGR2bHjCSIqkeHie9V8mEG8yAYbodzIWl%2BayKy%2BCBOKVsLiEHXOgpAnQybsV5av0tZr%2BbD12rrYsEmNcKCEiaVuNtht%2Bazz0jItRDcCSjr9f9OB0OSnrRXvzMOPQMcaiI%2FT7A9IgXATP60hYhNSgaEZe%2FLfwk%2FhzORnq0nqCriFZDMglD6vU8WMtDKUmfu80ntmyKL3%2FJ%2Bl93OdQTZsPEiQ19X%2BTIwaJ8gJLhKPw1FzozbaChmo%2FIt7xWBxcypC16g2EJbAmp78NvO3Au29lGJ1WJjBS%2BK3plWAhvj6POTCbcvIlyiNXGbQpItTFVLN456aAs4Trt8LvOIABpmV%2B1mcEYlfBPY1XijWFIzm%2FHz8uhR5c8mTuDRd20wBxRQJ05eH1DbcRqrjZXqINmEwmS5mIz9lDf9c2%2FCbBfDiNVlNiEgSF7cQEaC2WVmQcmhwTSAgBw1JYkj%2BnQ4jZHfpvoWiiiMwZrhiZeUVzxcMNaVtiEBWJDzVJDOjm0L93l6lXOXCtrRtNVNMIOy6cIGOqUBQ96EvqO9irb%2FAKnv9LJuFNzHpoW6jnneppQtndiUCCRbrbgUzagDfO0gqdWLqIjT9WJ%2BA20b8V0R8tETjpATWXMjC00fit6dxBQDDckGXCvprItW1lG0NqVmVKIzMBGPtN2I54AQ6PB5yUMmFlQAdbtyHqJSV0dm93BSaGwM%2BAC5UlzK6OH5bHT4aFBFfkmujxtKmRHCe8ZQAhLDYhw3xsW8A1hr&X-Amz-Signature=a4e80c83aa11a526bca381f56972914d393ae5cef10a84f864402c8b00fc08d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
