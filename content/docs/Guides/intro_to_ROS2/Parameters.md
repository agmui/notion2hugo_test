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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B5FIJVB%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDPJI0PX852M4QO1RwN8ezFsfIIhSo3jdQLeknmsvZ04AIgTrNj0o%2F0fa4MjHBDO%2B1Pq%2FEpfcsgogqVWpKLg7bI21EqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI9X9W09N%2FydBjslqSrcA9NhPCnUd8UJLuSyKm4GOY3%2BB0wxJFzIMyDibIGzy%2BBrP4%2FtHqpQQ79sSkgpLQErCutYqYmS2aSBGvBYFhaFK8X1rafmz1fFSDBBbJw927LqtPNfSpHCGn6s8JO1D2QqMJZcIh5g59WT3yIih%2B9X2VW4ZkJLkQVMYfAOWcAOLhMIfgh4OXzNiJZuc91eH9Bloqy7F6gtK1hgBzbUW%2FpCpmR07470Q0%2FVGuLlhNINU%2B%2FszJiiY90rMNK2qXPqbFj245AWITM4G0cZf%2F%2FdhRt%2BGsmLXhiR7hgc1DRCD85mtdZ9KLB%2F406iCbP0U77XkDm%2FFQKMw9pe5syMTTCAd8y6At0oYQg%2BL%2F9GbpI9IfsiDqUc9biPMHhZek1O7iQqQQDnPHVxbFrDOjJ1eqkEAtVaimFXC72IdIKXuwzLWYUdrO0IDxdwZO1bkgxl34nvKfaerCzEJPwo6R%2BoUL0NQ8Avere5hLKnUHyZkvpPEXI%2BVPeO60cWtSkGcCl5GTrG7O2qrCRVjF8S8meNrE3ckXbqd5cPq3BTcNe71TwLu8JuwPjpl6f%2Bdx%2B6J%2FZZoTqn6ki%2BLlvnSQYdis%2FfW%2Bx48bIoQzoJKffalDzmaRA%2FfPAoC2N%2B6uQG59SW8Z4F86owMLqd%2B74GOqUBv3RqMdwRXGgL6iUPwOa3vkSsjqZlstK7jv%2FHUG%2FMVsRF9T%2BLVm5Y64c0aOhiTqHbFfzVZaE5dKqE%2F5iScc9g%2BBkKB8R%2Fz4LKtrDt9SEFjNKNDwMp4bfOwEkIZp7oqKuKqzHe03FYpkewIMjhSYS4pmxwY1tLThGqL3Z77e494rEXeyi%2BDhKLzYRUurV9vGOUm496BTSBZ2jBXj%2F88YlrqOl3Z22%2B&X-Amz-Signature=0f9a74214f0146b17c1dc043680ac39ced369bbeaafa67fc6b1b6cc783e28aec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
