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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YIHQZKS%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T161023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD3vmhFTU%2BhO4pwdgeqUak1S1LLYUfOBtcvQXge14WQBQIhAMdMzo%2BYrOJ0cwROOTjLXUcYDDpZoeSbxE81BLlPmuyuKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVWuiMhU5yucfw0UMq3AOici6aWiVBztY1AouvFrfGb1pbKfOul6F4yq%2FDTWu2fY%2F2MVdmFaNadubr%2Bi2JR40vzojNizeLJzwFpgWvux5cBoZjESLYtziQuE%2Fzg2km5wenm6%2FFpJcDxjSoUX2fz2VSDKEXgeBORuBY%2Fqb2WckHOBaaXkSOUM3uuB9wR0YCi3%2F9bG67IOHajMxT7dv0Vi0gyhahX78ogaRUCGnLQHnhE5J2C8ijXcVaWGVzEjwq3m6%2FALorXOHFOu8mgGkWwR79X%2FRcrL69AlADwoSnFojg5CI2dnBU%2Byp%2FnBIBJbx64zKcMz8lPB7VXxRsCDgVnkHOmfvyGuc7ToA2tkaIeaEG4JnGQWCjWIg9Ng2iOIr63uwCoiuUuySpMqOrA8XAYQi%2F%2FOWTFmthdehN5N1ni4ACICwgOFZP1OMQTgkptyDXmUqMfYBdtxz7tyfTZ5wYcerPLZRfkXxcr84QqsyozxUb0Vb6QJuJ%2Boyg%2BJkMd303PZIpwO1cMIvQWOqg0AJEPLGMWSEocH6fC3YSNDGh%2F%2FGhq3S%2FdLISNITNGm9wCRiz6mPOlU4gataawhaaZdYx0QiaHsHmO6qTuXAB3krj6qwZHQBGQBHtTkQH8rjP%2F6XKs2VggjRd%2BML7cCWI1jCv56q%2FBjqkAZNPu7CG%2BYY0xr1CiFp9MWz0ovtWv%2F2Law7FplW%2B0hPfzY44II0NZTgUEQe54TgTW2mL8vjZZXSNG4AYhzzIP88diGO9YdWkTWV2pA0kEOlKTX3mtCcmoK0uvA%2F2SXFmzqDO4YPfbLQl%2BYsNZ%2Bah8KmNl%2BjIssWay1TjcI8KYLix8zZAS3i6sBR5OY3CyRVIaRmgOd821mmi61vw3b66NbLcClSi&X-Amz-Signature=5c3a5396ebf73b386b0940ee971965fca66bf9f292d4ac3d4f5e1edc3f061bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
