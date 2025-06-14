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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMQM37O%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHytvaSJU%2FdN7hCRIYbGy%2BIoEc6NnRpLORQpZYPV0bSYAiEAlNQSt%2BGK1vJ93QqDgyaKDjoqAQufxN6BNirc%2BO%2Fe8ssq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPjOWw2lNZPyF5QkqCrcA4Bc8W%2BW8Nzm4UGRdEkZgTpxj0rwJxhrg3zhehNBRVCW5G0YWBod8ypoU9G4f49cnYkpDVezZbQYHfxpIHRQ7mTe7M4ZcgR0u4CrF8qxIduUPka8tFLpy077Kkp8FAeu8Mx%2Fd7S5H%2FrofAT4nTIBIkEjqT2ms6uTgJ%2B5qa2WVtfviC5JdvY9kK%2B4ThV%2BIwQGpp4c6Wq1AmpjQ6%2FSAakZyaxP9FCoNT2A6NAy2hJORaeipPl7AS34B%2Fgu%2FpQwxbbr%2B0NK3J1ZslI5f%2BOIqWkGx%2BshuInnB%2BEb2%2BEcXMQ222K46Uw1fOB5ht6N7I9I5zPIuOCXe9Nh%2FZpewqVYRH9Tx3Oi2CazdAKpuKTL3hw%2BbfkCYbCel6gE4JdCJRT1uiX83GJwGgdSYAPWiqNOKQyXe%2BKleDUyZFR9XZsgOWWOGHWze6LB8TF9qv4tcv2s5Ju9qC0SDjIunBJnyCuUHgqS0cZri%2F3PZyu5Is%2BQwsHTkujJpf5zYgNa7xfOgs4tZG%2F0FRN7OW0sGuuCPwAAPvm45W97ZV3DLIr3JqC2Eb5yVza8uKTTI7842663oxp6YQJR59MaNpK%2Bx6Q9DvPqX8Ki9Fb%2FETLS3ZMqVGQ9SaR%2FBB%2FruYpKnrRM7S5msPzDMLm8tMIGOqUBAMAB8smuBONWWL9NqUoMdo9hfdGSjeGtaKtxtR0h6NjHVEuH1o25pR%2F24AlecM0OJf%2Fx8Wv0wBLA6N3nT%2BFEAVbyc9VPuj94xOnLtNLvCAWK17RJ2d%2BZmqrDsAHYzoULa5AaTbUENoWBU8TY8VEvKctL8O%2F95hIGv8WvNKhhEKx9JoBqok6M%2BfNLme8OGlL5AI0v4toB6KfXYup653W5v86dUBK8&X-Amz-Signature=48c4bc65531b9b27de33c4ffeb67c095c2200c507d024c709edbdfeb8510e322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
