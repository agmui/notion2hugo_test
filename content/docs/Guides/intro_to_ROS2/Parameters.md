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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTPBAH62%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0g1swlQYRcixK%2BJGsa%2Fd%2BTsdz7hM7mVnsWn7n9%2F3uxwIgMB872YyRI2%2BYTgfXu1nkP9GyP3%2B3oehzNPTek8vSl5AqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJXriFDjb9%2F%2Fse%2FqCrcA8749pYFvkOSWC1Nwa8qMH%2FocceQWuRRZyDAnGIJqB1iJmgu5PBprdypZV%2FQ3FXapUbbsp3uEbOi4ksTwt116MgSq%2FKUXQdzUuq2F3KQVHdGUVqIGqo4j%2BhETuczhUxu6bGDz9WVv06gMw2B%2FalimUMX3dkQRbQEBATrReNvQI%2Foz7%2FPjMiXpd9XIiFS7ZvfpJZ9pTBJInaFtvgBLVzhGGWI3t2kmuPj1srN8fcTi1lie%2BuF6ewidgD8OO3WX7C6Ka%2F%2Bj1nFVcmmf%2FFdbmFzQQUTEPN8bPOEAK6QbMTp0lAnxivVrPvwzSo9oTMLiqgYLmlSRk2ahr7Rng4N%2FIzA9Zm2MOFuRmTsszaBvtfwgw1QHSAUXcWOV%2F4OgdvhjLSKelY7pjwll5%2B5pFPcBzI5qOTAJH3s%2Bh4VEw8UsKujnmIGzF6IhyXzbL2em9GzwmuEiJPubXfSerBSspwVKuSiS0oLDYKaZ8M3ZU%2BQeeqkW%2FYhvxxD7ADfx2zCYFwhIsJkQslMRV8WRurrOFNTt9XBFG3gc8WazHTno3fBVAnZflTB%2BL%2FSR7nsMGLsCS5wvNMun%2F5Jo12NqwRvBDLX7iKrleAws4bwcqTEDnxD6diTjP30l64TstAzivIyPQ1cMNTV0sIGOqUBy%2FCOC857HsLZp8%2B%2F7E7mMcyprOjop%2FX%2BmLefe50RgJ6hYDXeuKiR9LW6cEZC6lsvqUU6LMeLITiIB8ALKkOssuhmsfUbQJxj6fuIJaOFRY2hFg9GvMwQ7nD9rpl39lKlUR9Ha%2F0MAJ5Pt52qvVw5uK8Ehdi1JE%2FQWwJudooPG5mArIUshYhJp2yTVSpkBg8w7phrTB1UD7p%2B3djW6SDJhBA5QPYt&X-Amz-Signature=04c14ca1070842111117d3d2de483f33783a43fb1ea116fd181d9b3f2947b94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
