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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXXJP4JL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T161000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIGWGeM3ttohs95nyACfzFBoQW5%2FhMesdnyslu7kyksdfAiEAlw8%2BYFMC2a034s131T1z6Dpm1OEDJd174yh403TcMg0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDH%2FV72RyRVo72w79EircA1U%2BjHWU7VS5XIAW%2BMf7OrKyZU4WbGwKBpaFhFsSe3xgrBhrGaZQK2VmB5ykYLXkSM%2F6or%2B8mFdSelLVQiwjjSFnDCFgV%2BNjZ4D64iYNxcaBQUOeQoD33eU27Qv2lwCXO3UuwBzhJL4j%2BEV3AlRqp0ExuGV89zbg%2BjxEnX9%2Fw1EYf0bkOcp3YOiaUVwsi%2FfN283r4KhPQkrJJaO4J9tRFuym10B%2BFkCCaUZvpeVY%2BSXUjIPtuGl9paI4%2B7HeBixGXdOojNaKNTe3hhz4D1dxGfmAjrV0dLscKANrepGW6veg%2BeXcXIw6fsFqkU4HZBzSWIWs%2Ft%2BQqXc7sY1vJL6fnMZaZkzj7b00RcarAG1fDwANRhK6sSf6rvvZq3BJA9FfYCvx9pdcGIRQ21zGPhk3atMdN2c8x1Oe7tpc1cVi6Qbz87LzxWCzggIrnsM6W3H%2FGslA0IzyFL7Z%2Femd0yu6Dl92N2PnaZ76SVEUboXr6rriyNuvAxQ7be53ZrdO%2Bf8NRW02JQNujolQJpGdryEMC0HJX85jXCcfw8rJEagpWF1yMElk0tKDaDp2VeEi7gTdUhOkXo9T2wPH797V32oxEVot%2B5B8xBgQCyedZxKhRZGHajozQXbp8NLCLwPxMO%2BH%2FL0GOqUBq0ZTmgY%2FjE6Sl5sK5kmmLNHTnVHRq49YiXTGLct09Zgiq4WuWeJjZETCDVeHJ%2FWIXXEF8qnEH5sjM5u%2BYfwYzQ1F2mh7IHgpkAM5g2OhDh5oCYyx95NtpYhp0A1vPiuhateR3XQAL3srgQDsOaKmiiuD70hFAv2vNYXOeDqWAm56ALodeNMAb%2BZPjV5xnpycX00ANHKnqDo2ARHrjeRhYATbNDX6&X-Amz-Signature=de0e96ff1fc0947492397c6167084e73878f6197a6ad27961e1420e582066a24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
