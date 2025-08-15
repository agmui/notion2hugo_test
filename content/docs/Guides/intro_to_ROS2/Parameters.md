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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3CVZYMS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIHZG%2F%2FN1qrKAZU8wxGq5QhY9IGzyUIrwbmpTwYdwdRcDAiA3eBsLRTkHuJd82q%2FaTD8tCQ6rkqrA56NHcJxx4N772yr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM82XPeDBAGCBjYzxLKtwD06Kr5qMIp0E5GwsC5Doq1ta%2Fms%2F1VI28R%2FnY4CN2BUNzWkyaPzrno2lyE9BLm7hohOT3GiiLUOnGbI7obqgNmA0gJzqDAyBIVAEvQiRWHqMTcKVeiqqWrtEXIhut2Fk7SWXG1qovuYROfRzcUgghLp4LWuMHP%2BeYPJHzNEhhiY0sdDl66tUI0uh6h0DoxUx2t0NH7fH%2Byd%2BIzN8xYNIC0BjiWuOo7XkfOSXoCGTCWu%2BLe%2Bzmh8l5qT7Phx2inV7k2iWngY3fw%2Fi0MjeP8s24%2FrlDEcCi%2FgUFMfFtJ%2BGU1imJHdoUVwt6LXxTgw%2BqgjJSw9mvR1geiNe2lUQXG75DnYqNuOoQFKFHnNtp1VOSFehmzyMDN3FcCueQkOay1gn1g1mRHTzBCSm3PthfE8c8pyEeshECzpQqwR9kv2ZqjaEkhtc0ClcBKgLPTJAc3tYHI7Vn2oEgjqD81xwQ8cL7KdUZPSeq9UtT2%2BlPv00sUTChqVFU6OdZR4mKN5Mr0vzBpD3CB5EDgda3P4yqUXPX2NuBXtqZCoc1%2B88YW3I6tA%2FBlG%2B%2FMrLCH3VIJ4RUFrs5zFQHqRzPBwdMgxt2Jm1SornjeciBUgtyPxpHpf%2BJbWS2S1wX6TIMtA3IUEgw5aP7xAY6pgGxaLtn28Ui5YOcvv5hzdCifSHqUwWReVztrAMGfwvmhKQoUcdkLvFlFUhZYcfHNB55TMXfxXi4OjJ7kvuHIBvlceKHuI9EgKv%2BBdLvdnmI45jXa6sfTyRY3offbtA9QqebFUovPkMyFHQAPdoO5Mxfv4IECIb2xaFnWujHHy93r3JcSZdh2A4f3kKMeOcFlXWUW1Xc5z8kUYuwdla5AKQ3y1SyMa2o&X-Amz-Signature=f986de4c1c843ce1fb61e1ed5dded796b1c91f684552aca6dbe4e9f75e7d3327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
