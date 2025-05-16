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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKWM2EYU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T033639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH17ui5F4DiJXeAkIM6etTFiU37oM64IQfFiCy45%2FOnmAiBmiLngsBWynLsgE%2F%2F4tlw9fWa0b0%2BYcf%2F8jViBoUvYeSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMD7SvNEM3iDoglkscKtwD41H05%2FoIuewib8Ho2B7hVNuxqOUpbvvD6Sv3L54MsBIFi6%2FntjTx1pacIJcUf1J7SlUC3IBYYQbzOnzwnxBLMtXnrkJFZm7L6wqi6ZfEvfdlmkHLiOi4%2B9ehbT3ZDR6f%2Fmi3ti%2FKaEXtlsDYda7x3DT2XQdvFUwVz9DYZQQnbZRAkkh7SlYzrJAEOHHe%2F38fIX%2Bgr9Evzr7vMwOaKDbd0skl%2FrB6r%2FixZ4%2BC3LYKoe%2BD9kY3cPJsq0YiqO4L1w9G1Xn3EtKICxg78aNCtZOcExCQ8SpAOAvq%2FAWA63w0lNpmhemTYTHOPK6AO3AVpT9u%2F7fc5PIJ1QXYO%2F0AkseBASBIsWuZzEBBhPq0o10C4AsahDU1w64M5MjixugEDkr%2FUS6ZApHfvigdWwwzbVpoRKyy7LqP7oFBoW5RbGWRKvayKOsoiCflRXNo2CkOQbkKTdyqKFzuhTTyEWpCbPZbA%2F3McCqCH8htxIMY0WqnGgn7e64A5LAHPP%2BqnxE%2Fo5XMyE64VPZz1jRQVHNhajFsOYKMT5zBRAAD35vtePAdVE%2FMQKsO3oolh6fWDkNYlksNdMlG12uXGYFjGozANb1f6W3AVZZ59iiToUOL7SoYij5LQTx4zD8hatd4EhEwm9SawQY6pgEHTkklO6cr9cAnfIgGunwHDOoQEZJFodiV2Z7V3wSRPHVxG8pjhxubDGSSSyKGhmVYks0q6dMqeTO0yoyUQsJEZq6fbUlAVjXqE9CGNEBTUj9kufo170iSgI3c2tkkpRy63fzXpEY6RL9ma4i8DH0npBmraUQLM4rbQPUHvY3B%2FK%2FWVhmZOLH5X7kVU0nxG%2BsfBJWxPESQAIChSPW3Zp64CaeT7a2M&X-Amz-Signature=b0d0c070387d9039d1ab03ecd6c0e3d9cc2f70c86c5ab2dc130e54d92488fccc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
