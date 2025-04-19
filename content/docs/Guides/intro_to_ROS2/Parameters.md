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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GPSVGLU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T140254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDQcmZbT0%2FaT7dxdlXuTYK39DoMp2q5FhJPrii%2FjUW4%2BgIgNeaZgdSuJo1lGE%2BPcqajLLbbBuk1NUy8rGCO0dY4MQwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINX3skgf0RxPpdxsCrcA1IKYfQXfJzSkFHns6xbRGgqGwjxk%2B0tdK67FJsa2xZ1MpBgehVaSMchRhBn7GibEwOu7HCu9cPghH%2FTm6LdjItBkY0bMh4BBMvFrbjZJHs4XIur0KLOiXfltNlAxYS%2FlGeL6gXjwtfm5eE181oc8NzkmT0c0P0WTs8ouc7%2Fb%2BaQ7c%2BuL19NhILLVScqRKqclp9pwHOtmKFjZIvVAYDhGNzze2OERjFDOWUMagLY7zuqixyvKjzkyCSammjdoj6fI80S6j1LcnoYRDc8OUO4vNFRNxhrOH%2BhqNPblkxuIb6EhvhRiL9CjUmZvByGNGaukmk5w7PYDd%2F5h%2FJkL1edtioHt%2Fd%2FlEHd9vIf6q6pXp%2BDQpFQqha9sTt0asyttDG%2BOU0bgjh9%2BHka4j7lBbvBDAig13wjducHBVGKxZHcf1lErbTV348ARA7rbYSGuz331ZY8r0koXMZr49OjINT8YWU9maqFXuqUihFh3K3WQeMfQ%2BEaBEt7aOPM63A48pH%2B%2BEDuhwONdjW9W%2BP3JOcQFnGAxPN4OSyxAmPMWw3c8j8bs4RqQCl4ee0YNCt7LxtYiVsMNIZriAdNWEzacL9r2Ak%2FG6LgxQolrDY4Ll6NF55xVo79MIJMGqbvOiuvMK6djsAGOqUB0MXKxRQMyiw79qfA3dT5l5R7xCsoGovN1cmqeFNnYgx%2BdBtHXd9I1mMpSsYcHxAJugV2sjacEt%2FYJasvCwW8ELx0W6BEUDiNAJ%2B%2Bbmn7yV6J%2BLHLvNmT%2B9yaGjMDvRIBDERWIRcvARX0c3UsU9yS%2BMVMPjawxUQXkstTPgYLBUKtg9XneOXcoSdvHEzE%2BTFzR8cCrMrL8iYlaY3BWPxh92OGrz7a&X-Amz-Signature=987280b865ce5c6a24fdd3e9eacf9e07a08c7cbb6db0f2829d1fa84a2c4d1c48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
