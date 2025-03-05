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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXJ7P7C2%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEM%2FBhE5XAri%2BRQHkkK7oS4LcdEpEoeU1s%2BbR6dHz%2F3YAiEAstZ%2F3wkKcn4xnd2Lcv2rR2cW3Vwz%2FG8sFVookko%2FHUoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDHXdRfqLattoN504ZSrcA4WJD3fzGhIB8XAsz%2Bx7gIjgrYXgaDfTph6hrgw7XaNp7gaQXvVZxFGPvmWGCpp0Oe81hpcxaRUnHx6Ls2RxazXZ94cy9597%2FdOXl%2FKW2Ix1fKBXwYy%2B50rvE3uRGrv0TwUM2q6JIzlZtNVbPXl30E4kfK9lxt0%2Bu271Q%2BQm%2BfXp2FOAxiQiHEePQAbddc98FDt4H%2FW3vPYm5qd3uHvsrESj2fNZ8cnqEL87BGLrMVgTjrEghutEpB1FcKc805HRFDoY3xONcfXfSCoxc4HJX1wYwIGMHXoOlD457I0Rc%2FJ%2FxH7vq7vjuZdBTldU3DT3VBisEqJfp15Ts6iChutSCULKJFgAKy%2FobAtFaly49x8yW713iM8WF6mBzkg%2BxbkIdaGyQbevcnQpdir523cyOsJzb8X5M4uc0LLyeLzD1ovKisv0VAsdm4SyXyJEnb3rPpLcSd%2FMVzFsDV1m%2B1faHnZUsDiK3Jw73DBdpRMq4D7kG5JIkxmvRkpdrvDTDDdbiCcZBnb2POYJPfEz2X6QPz6UqHEKzKljc%2BtY696SPxUK4MK5d19Xxl9PTLIRkuD1rPbvgcl2PxQoaMpImuUP6hIupUoHumULrfWwL7Thmm3BX4Y5bBJ41Qi58XUPMOuEor4GOqUBRAeZn6SykbCY5eQqSZ5h5G3voQ6rnNFLdT7YxmNSh3XMl90m60iCqdoBTXEv1UIZ2BsqQ7ainCDMO3Jog1N7va7WcOLZsmgbxqIydQCwn9uRhlMoe9kpx0SysLIjpHPPHhpjb5dHvv9klEALeWxNMeEBKwDMMfm3pjz38G7nM52j5%2Byk5E4mUjnm4nCS80HUoLFgYBYK2CNLU8vu4lUu2S7em3Bw&X-Amz-Signature=8a85551f3efb6b9f0507f69993208837f44474df1b4dc0207f638d956be10b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
