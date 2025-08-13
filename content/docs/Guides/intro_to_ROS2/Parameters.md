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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6TSOG7W%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8O48JGRbUdHYl9qIxy4792CVAOeLbiOJKfMfL%2FrIpLwIhAJiZLy5XIb9fhA%2F265lvhcM8zXcHSxymh8qkmVBN2VKwKv8DCCsQABoMNjM3NDIzMTgzODA1IgzDAVH3JNlb3JrS2Fgq3AOa5vV9otWiirdg20sOIXybvNI2ohLJGkucoW6GOUekbBl05TfzpWMGzcPmQXuDOfaHMVEqHLd1cUaeSfWKXz9BD7ajo0cNtP7wGdmhe%2Fu%2F2Vnq6Oz0BFesJrUEWJSRydJpXU1R9pQQ3AVhddFAI%2FdecYk9EM03z1UbIegikjB%2FobK8yhLy%2BTB1GtpZjEbbi88jrMtn2Ljvqe6%2F22tXpiA%2B%2FNfJ6odEgmXAYMmQfRyWNUTVdz2c5GDamf5ze7kfz%2BCzQvwD0vNiYoTa5v2T8DkNmZ3ncCdJdWbmc3WA2tm0%2BWwJwKsS2NvmPQIXyKhSb6cPZtMTZbK%2FDIHXejUy9e2JVwzHYo5TuREHgqRg5N0e7NFpQWYRGpOld01BHLN3%2BAOWKknfPzj%2BsOvHClYUTUezVdwnh8FyBtJUPuneLJy7%2FvOJgI0PTa%2ByQZC92hG9%2B1IXs1LnGRoHb00yZx65Kzim1tLz9PNdwv%2Bfy1ZIwK9SbjEv1xnja1tO%2Bq7EtW9MFBlbNDbwKdSWQkUFbDt0pF3KIJkjg32v2QN0sodLh%2FDtyL0cJrh%2BnlAEz7ont45F7h7eSr0ZHCsPnEteGoOIYkWppw1pzvJLpBh1kN2fjTQMQTH3ibvpJ%2F1n3eMaOTCfxvHEBjqkAVNSySKLhTpzy%2BVSDAsUP2b4VpB0jobohLDAilIs1o6tx2yDk2MdEd7z64bhMk5TNKuzPnshBtQCJpqyidrEN%2BkrvEserR%2FmJl85L3l2PnYd1uHSIc5j15HNcQbSrrua0FAUJRLCco8FuxORzoh0Q9CTLAsdpJrfQernxjxJBR3l4YXEbs%2FBYI5PgnlFuCS8SVWekXFflKQj%2FNOnCMnsFTl2X7IC&X-Amz-Signature=3f9bb011ee0801e7a75d527bf838f12cb2dac74ce3d40452687dc5ec7e2049c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
