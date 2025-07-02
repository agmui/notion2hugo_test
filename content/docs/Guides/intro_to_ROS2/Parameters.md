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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYU6X7SV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENrNEEeJ17WSW7hjS1hJl8ten6kMXHgjcBa6qBwSmHEAiAjIJrOxbQENodQEH4CXjCkhXBjPNgG9I2bsUAwDYugvyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpULPUGwLV%2Fz8lWvHKtwDeZz4qHLrz7oOM765Fg1SyRo6x3ItEiVezLkgEkeUyVziRjWZVGm7hdZSqzAu4WB3H6KBdl1t65xPYKLTF%2BomjbQgXo7aXePR8EcCBV8yazfVNloyJPzGwrFjuVKYL%2B6HRYQXfdOpm8jLNWuN7VIqlbp08yNAbncZiAL%2F%2FNaVNepImywm%2Bz3xURAdmagySj6Ooib9E9%2FvwMX03UZFFgvgUWBoNAhMJmhm%2FMUGoWdYEDdHSmGEB2amAFj6COBOl2pxn2V1910XqFP9exvEsziXcilQr1ENr1eWfT9hLz13hGrfTiQa%2FWe6lzuaPHP4x%2FES%2FyaJbO3xv7rpsqO4c366wOgzfEIQ25sQlzlMb%2FHv6Q5mT9cPUe%2BrOozfhPhu0s9hiKhZ843wdbbWvEVDbJi4wojjOt3btXLJr9HONdtWfZYIbv77qxov%2BxLcAJxM9tUwAAeKjAWnfstnUGAc1gUEk5oR58aEYfOxkdPzlcopR1XCkV3MGkOgWNd7IIISXgbSZhjI2HcSicVbtiW9rrB9uc%2FmDeGYS6EkbolzIw4oixyNbUv8MtM3%2BJ2TAKsS2j%2FmDjYtHiHFY%2BkPVx%2BOAek9Cr6cm5blFJozyDio2DulkCV9oBwy7ZQv%2Fl%2Fcpo8wopOVwwY6pgGGchI2fUF8Drma6rgW82mTkJU2Os5EX9P6OlIphAxVVvcfI6vPPcvZcKf6ZCbT4meH8lf9%2BpjVc27kD2NcQL8hPZkTpWEonS4Xv7JrjxBV0eJK9XD1azrhvnfNgV8%2BCR5Mm%2BgiFW%2BEWZDKZV%2FHUMN5AqUd%2BKEi9fbU%2BspyIlm1m105ceMzGR0dRqDgtQtrm%2FHogM5LrdwYQLS3Tu2GfTvR40D3K5mx&X-Amz-Signature=89cae4b4fd92ef977fc41aca19315b92fd80f68db1aab64607db439a3494ecaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
