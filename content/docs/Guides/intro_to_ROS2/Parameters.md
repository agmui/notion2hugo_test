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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHBYOM3L%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEeg8FZm7MViaD8auwF4Rf%2FjFRDYMIuLW7tVnRI9yVmuAiBgpxM1upvagDX8ccsLN7kOBFd6vmGA7FTJxPVxnIds%2ByqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz1evirIsAJRhqm7FKtwDx8YT1oSjHRrVLCXESm6KvSkhXUFEJVuLy2iLmNaIb6WYtnSaghc378jWXimEF%2BsmNPpN4Z2vk2AavVxfDQJPgIHiBmgaRy0lMKTejK0Kda3s1mrQx8jL6Y9oOnAMN8m0TB759FnwHsGiWfXXAV%2BnFPlkSLU4JorocVUOF8Vv0%2FTo1lnSwgfTzam%2B4aXQR%2FiFdDk%2Bi15j8gaJfFx8uv%2FK1fzIRjRWftqlD7C9ZXik%2BMsk4GLw0ckPnR0u6N%2FkIH8DKlM0Fstvv3DxCaIjM%2B5bwIcZ4N04xXGcIMhoye36671JokL9tVIe858gUHfOOWVamQyRELxj%2BHThsc3JmWjRSP6gZ9xaxU8FYw%2BF481b7sTu9P5JCaDkeDdiH2sqXBX8177CX%2FQXYBFqFAKYFvTOPYFrDWzUrlXIQ5RTc9l%2FjgXH%2FVQXjfmyjLxuMh8nGLen%2F2SgU6h0JDRWByMePugo8C%2BsakapLWNdTkLcEp8xz8RLkc9Ou%2BIvmz0u6lIInyie1k2LjXQ0OLZv%2FdIyMBLnRBfRmV5yJI9NeNAKVHJhrdZ9AWlpuDDInOxwiQr4KRxgRIpum%2F7RCGWq3ZGofrIcqFZTReu72Nqm9LZH0hzkZ6t%2FjHT6MULjYkHmHzEwxqTVwgY6pgE0%2BbXwAiX031pboAxUjmyTTussFoPrbzYr%2Ff83vnkNt65b1l%2BXLh%2FeF%2FMRb7y1chnFLJ44x9kcoVmzZItmuGhLJxO4vdoXypYrBo%2FYO8HvrFBVlqdpa6ZzGXsNbH1OHuwvHYlsKAWYJ%2FSITIRkNC%2FFe3%2BjwGc82WBsn23sqkDXV6K9x3FxVGNGy7uZniRMY6QLpDmU2PfoRrrA%2FTG4IcDL%2BapjXb1B&X-Amz-Signature=099f5c1f53859dcb21512216f1e4a978e9ba9172c94ccaad934725be7beeeea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
