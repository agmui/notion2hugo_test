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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVNEOQQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICym%2B8lP0AdozWGKBbbVHD6LHsgl5l27nYORgVJjFYMvAiEAnRsqGqfA5LxmODA5nac4FHK8CGeRUnywNXyNjgRC6wwqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkXd4ra3VRPDv8VdSrcA68JtdkPVEAIj%2FnDLZVzJy2YV4cnI28tYMyhI1qUEp1GZFQ2SvaoA%2BkMrMRlJu76zT9coVwP%2B3Ytk%2FqlUAsB19hUvIjXNhavD7XTy%2BMQSmB4PmxEs%2BiJk6pq%2BUje%2BiiCgRsa7bN%2FRP2sT1tSC4P9gVI1KQrBrnkwVNsvPQzjnDIwAFSo%2BQ5TVZ3dRTGGDAr6cEVg0loNnTOP0SbjKMheyPMNXhw1KXVJrZ8oLdpb2ywg5l4aamSz1XiJf%2Fd4h7YZc0Nm8mvdWxKe2wweMUcLPxkt59M86R6ZYx2w0Ny6faWnKLQFI5R1SjLq9sjWKTL%2BTUxVa8%2BOKThwSbxt19v0GyDN6oGE5l7vdNSbnlk02b2L5dcKd%2BJIkw%2FIxcSw5K7K55EF69F4xRf1kHYaiQqRHh%2B3Tdvo6eIY3%2Fg4zafTGH7o9BogcwAfhxBRd471Ld233v17zCw6evjY%2B%2BLxvH%2BoHigLerMi%2B29TO6otucLNQimdLggehAS783b3MamoQCcyom2FuiDLTb0qUuoXz5cr0eG4AlJSobZie65e7g%2BUCNh1OLG33yQWW%2FageZmy7m2ubMq96CQABPxSv5wAe6vPWLVamGo7LSZKOV89dgbkKLlt%2BSpUuwOTyZVMJsudMJTKycIGOqUBCQiYqnVoq%2FOgU3TDLw%2BCS56JHN0c5BXiuvLDXJ7cJd73vmtKTAEAME7L3wLPcdvExXDWjQPYsBP35hBF3iQKYJx3tvHSWF3PHkjiVA6D%2Fw07tKOyLwXLyoBdMVcZm8k6nVNthKp5idFOc1n783TUUjtQgURKwy6xkfTu34gioI81GPODZohMTmQJBiqELG0JnIcYDSTxC%2B860RqYQV%2F4d535SE7y&X-Amz-Signature=187dad85d9cd7b550f6a6706caae58d3559a21ee043ef92d68fee58b4f3d9e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
