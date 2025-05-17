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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZTUY2XI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKgIdRp%2Bu10iZBXPRl1LlFmeVxhWRmC%2FkZpC4JltU2JwIgbbWZEIcvISOK0TfGQAN6JQn%2FGPxc5c4qURXNPmrsM%2Bsq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDN6kLQiZRz%2Bcj1lolCrcA4RRs%2BQenGgP4hQmIxHuDCF7XIWrx%2FWC%2BSQCtIYROrZFWftjaEe0fc1wNYdwJWzg8h9AJg1Ek%2FgxSE8BTs9xO5r%2FvHZtDhjpPdzyXKrMY7FOLe8ocH4ux0MS88iyo3Nj6c0z9u16afa2voRu%2B0ewXp0iIc0RGz4Hhqi0cY124BG%2Bqg6Fd9znJ58f5PJJdYdYcacNzIJWBnmWY2TqgDoc20NCGzVW5cxVufi7IEl51TImKpzOxsHp%2FXdonW4VzR3gRQI18FBzgV3sJaujhK2Xx%2BhGj6NcCVUDOpqcRCAhSFbSgtn1KZL%2FfS9BujbHdRD31DiYCtmnGVw9G0bhV55%2BJaVHbw3KrLGcTlrDCh1ogPi77XdXF%2FGQ4Gd2w7zTxmU4B8t6jfQIcFLkz78TQY2qNQICMF0smFYkavJ%2FwESvOij%2BWSNfIiRMzIxLZy1eMba2ZuTqiR3y%2BjOGX%2B%2Bn6noR6EyIpK3OE3jW3tN3U3icocPLYScljv8BgiSSuRQuxJCS9uZiLI3nC6exc2WgbJ6c9vCXzS9mNgu7VeNdFPUf4nkb95ThLpcQhoY0GXCC7NaWAAj3REucQWppLkbDejxG07yM%2F8wi4ZWKKrAm7xQX0o0bnYl3cqoLr0aEAbLKMLK8ocEGOqUBLerlAC7xCne38LQ7yPEU3cxpUC07zOO0ewW56czSJZmWpZE8tAOTRn8fR0%2F4MenLFyMTb5t2K7JXFpLach7eKjB%2Bfg2TvIrRpQU70BVXxXBuSN5MMfP3eC84diLAlNFnd4sdMkXJo9K9EBs9oExA7xp1uzqHOMKSzYcAHtJEKCdp0k2pAeDPwCAiYmm2Sbfxvcd1Y1jJu0FqQp5zKxvxii%2FlC9jB&X-Amz-Signature=e84994a27f1905d10203341722937e9e2e9b6ccbd3990d7157d6b8159e95344b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
