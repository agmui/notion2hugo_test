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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFEEIGBZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAMHVxO1aCSeq6PJ9efLC%2FoH%2Beh7Cqr8quldLaTfm2NWAiEAlyD5iqd2N5Mg55DkzoSyk9qAZISPq83X02LQ1O48Oc0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCouSSpFcdC%2FTDN2kyrcA20Ka8Bn0%2BfFEEspD4LInTCECEDFQLdP3yzVvnxyVLofb6uCls3%2BOMdrildgFPSkYudxAaQGVQYE0%2FIWJVeF7HvetGcz19rlSYAE6deNu1v5PR2sHnautvSceIjEvwmqFgJUtG76fuiiuZzDnYls%2FMIOli3aFD%2BHZuWUSIDm8JB1ZQhaW9DnYK7kN2Jjz9SbM%2FFS8UxWlj7%2FGAUQ7G4kg4hMB0gckTte5T7KIbahaGcHd9wsEYc560gWD5ogRhVoWB82LZ80IZh8q6mcbbCpo8Ack6JR0QrXA43kLqwrdnZXleNnh7Evq%2BhtGYaMVmV9uEzxhIrZLujC5Eg1XsZmyvLir7XX1%2FUUzOovHErYWk0apu9hfcnZt%2B003xs2dfHof28WV6dPnLZqNEiMJPWYZ6Fr%2BFySdIXUFlPdmyCl7COW9gMPUB0jS8T2uTx%2BFSMvvWp4FHsP0xq3Zoyr5UxR9Ge4Ay3rtj6FjZ8x43C2l0ZySzflZXMpZECjc2ZOGG2NwQChuxcwXTGi%2BD4fL9cOb19VVgGz35LRIX5jBq9105Clh3ZyZ1FggEdPrBwbnX5fg4ZqbxyKB%2B66rHD6WX1FOwLRcOkMvchaTtv2UNP5ybzHjtKrnyAgNUyx63vwMPauh74GOqUBZvVpnZ1XOVmz4fSCE2jTCt1%2BAmVKPxBu%2BoF1W5Z9byxhIwt9Xk19M1XuFfuMRTvnl7OeEilp1jzLBUYsqnJ4SVLMcFd2nECfjNTJJyz5bBOYTK1a5ZrTjuisvR2S6KTKg757ws%2Fxa2uHmT7QE0xjqte4D8x4PA78POBeJyUlBnkOYyfEf5jElyAoo8DB8J0JC8R28WssZnqQnPFY%2FuthrnizSjHR&X-Amz-Signature=30ad751d1cd0aecbbbeb73677c43a4f5676d33204a92fb57f06db4fd31f32849&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
