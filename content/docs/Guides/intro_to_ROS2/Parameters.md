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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6MYLDG3%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T071416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQClf17lkhhzwbyEM5O2g7l%2FtKkx3U5mSuCt9D5z549AhAIhAP8ndvNpM84XXfm%2FN680fcZa6E197110%2BIIvBXyIKPyvKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymFKNGe6oKOU4nWdoq3APVxqB4%2FRWFPH5eSHVLDz9p0D8Nq2s%2BKysGbv%2B5nvghJN1hQFHAGpFmJkx9K%2FiPjy2HaIsBvuu5vEG6g7J0B%2F18ij3ZYWo4qs23b8lwFGyGD%2BXOplWj4RkgWIxCz1AkGdez31qepYqr7g%2B2da2jRZswCASsYrX6%2BYAg5PxuYeSefyPS%2BPYI9zyPKCMZF04CJalj6Jznl4MnVNtXs1mv6VTHxXbhZAgP4%2FJn%2F2Wm3ulQO6dCSRip4yP0PnRdl5rZlZEOzmA3uDG3LFc%2FtRKAEBEo7p%2Frhd5PtKFVpz3Sk0G5sPtUu0WLQDXHMPa4x5BDPsmQkQ%2FvND15Bpxes2HPpu3VZlTjGi4o%2B4NGRipkbN6wwPSpuZQA06LZCp0ZhZJWF8p%2BmMZtvOX9LvvYIPbpm3wnEg2Gcx4yuie0DdeOujXvRYkgdh%2FyhzV%2FdPBgeGdRDK8qieBH9nQnW1VnkWppeQT91XMlv4ebHUtdV3y4Qnase34e9IqHvvAPQoVkxUpLQvi9TFa7PrEmtKs866Iuv0uf33o%2FZMXoOhxY4pV%2Fs%2FzBwCiTOhdTyD%2FHrIcGMeuvh0LYj1MZwmJTGjnFCQD5uuNdwIQSTrxA1Ua5XjiBCGYCDyavkCVp9Sk0v1I%2BYDDC1ufDBjqkASkRjlbDcQ%2FfE2a8aBcV5qkLvbl8vQ4eIqgzPsZipjkQB8B3bG5ptuWqkrmQjG6iLrp0y%2Fr8JXgs3rKScvjh5GCYTzX4f%2Butqh0r9uuNVaXOkSru%2F7VsE4Qi1Eb%2Fhz9cX%2Fv9JoXjCpPCZ%2FjZIX7kIaAoFdVWSaqW3C5%2FjsXJVx2lrtvfVAu4CHF6FbFgKhP0bYoizpqCWtaMrMQa1UFF%2BkwgOSrT&X-Amz-Signature=a7b7344fd18c554650828315a1f6bbe2f2fca45194df212a370455ef4e2939cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
