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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNHRH6TC%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7Zyp1dy5MuE70VdMncFZhMD3Yr7oTq0PDy15Lnk0dPAiBPG0ZmEjERmS23dOeEM9bIJTQOCn2SreaNiJeWnSR5Syr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMWePdnSFUU%2BJgRJ1jKtwDsGOGRojTJFDbNx5MPvXik9cf6GD9EUFl%2F%2BUXXmX5Ngd7xMNvTxSVP%2BhSFB95dSPFou5pD%2BNfImmKd7%2Fi2TC4igdjObTUiXo1Jsr8OWDn6vSMziYa4JbVb%2BktHfvfKkPu6loAT4UPkbaHSwLvivASvJ4flV1PtytUJ4PIttzF9XwFbKC4z5vs2%2BRNHleERvEFncRZfEOtDPwMSqaeg4KltjEclVLsQlSWspU41Xm49Xm0RR%2FpuPu5ZpKHGSEGXNMmmjwqFEmFilnN9goQBjVgtwpz5BtU%2FgjHvOwoPpbzyJ4fmBq9lkLyBSK%2FtHqY39kAb6M7rHuxs%2Bwk4ccz8fJAkRp5XHKQH5bpBi8MzbbmsKTJXzElZEoEyb6J4QlC06YubKzosmKH1PrYB9kfaNAF92GRt9K5QUXd1%2F4giJFkHMdQBA8fkTOtYBA7%2FRM81C12WZo3i6Y2p%2F7vGU5DDrHkel2DOzCQBm%2B1DuFaAoMnX2DMnhTf3%2BGbM3iEwaKhlW%2FBVcFBwLo13ugs7WR5vPJoitXtYLf85iplcOfg51686D3HP0jN%2B3tJvEBSQL4cCLeCcYdDu%2BYHNFbKDi5Nbtrom7ObqiE91ZTRkpTqZ2OK1jHKa7gOMNGJqxHtzBowqonHwgY6pgHNnLFKGtwNAPS4QYTc8IGYxGfQbnPm2b3amyZE5PYha67wVykItyJW0xVC3yVv68RRAtp5TefHQ9LxhRRue8xqPt9AFiu5alqqTuWTI8MyLzzILgKOcdBy2H4iTf%2FcgIZcXHfoF2KPP1oeTpNatQG66plHnXxahqnUzds5Nrfe%2Fb1GQub5IU%2BeSlzx1w%2Fd%2FmNA4Av4QANpGpNaWKlMaumXVDrm6u35&X-Amz-Signature=f674ee6c68a468b385c3484e1e52a458daab1f1e92082139a427ec930b030947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
