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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NY3Y4HN%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T190346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQSfqQ8Uw6MLOpHi6IDwb6Vlpb7u6BtaQ8Sc48VnIsWgIgfkyQ5tVBtTbSNL6FII4mzwha5pSitvxAkxjGB5diUVYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDDgh1DKYtSkCqgEetSrcAwnq8in6lrHO6zrB78qvBIxM%2FGlFvop9awCG5XI%2F7a3X7VPC5Nj8SXRIJbRROVxs7L1Ocfti6ipTkfaynwMhKjOyznp3zauROlFxk%2Bqgdnw0RtunDayVo77UqjVds7UmZjNd0rVZOdLiLYEYbK6NTIzHoUwEiy7knMJbZ%2BB8fNSE%2BjNFzKPqgn7HUpclvyC1wKDE3USl9SIYArda7Q761VpvRhBeQBIZ%2BnEAXlono%2BA0t2y104gYQCJhfczZ8gbSwg8iuTdb%2BgoqiuwbTLVVD4eCvikJxxfKNnQPfrLNPKOlhaBQPdd%2FQe01uRsCee2GME9NvuNnhX5qOH4AhpnJW8dzk8gra8S9HJLaYRSK9YZg8r1Y7D0ZFveiN9t0XJwbMtx%2BYhbvgL0WA8wONe1HH%2F4y74ImWG6mm4K6N%2BGGuSp03cI0%2BF83xcdCvZiPwRHKKjAYiVDUL63%2FWOeKxIFmlV4Uu42fUANWWau2DON4XGNi0L8sRjWxJjXeIQe%2BlVXShkVZhb92IDRwVfArhu%2FevAVB92VF4IN6V1wMFzER%2Fv7kaZLmKuYkfOX73cRb7TZqTtbh1UwQ4KO6yxZRl2OQYbmhQvyQ9J2ZcpeqE8grYx7iobhwMV6q2WylR6HuMLGchcAGOqUB0ChMFeCobo%2FmIBdQfUe2UYcBNG2ERqT5bXWegNHp3RBst7jGo61xaGfDhjxep5K6Gi%2Fvi6dY6NhlCkXRLt1HxAamRW0VAQFntrG9w0INYYX0wa9j00vimHS90j6Dla98oEWJ3NBam%2FuyTbUFB85%2FvE1vlelYWFYaPCpnPhwLAeYYw7KQaGIg%2BWIzaQWHkEJnuuAkLw0IVCpYEySrD62cUwE1W26A&X-Amz-Signature=e594f4557889e9751a56698702d4d12885f9e34fb77398836f7dd1a326e2ab47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
