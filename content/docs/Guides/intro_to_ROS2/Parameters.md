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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IQ65ZH7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAOxMIn5pV892HZZm7cojpnTPI8g5k%2B8TWXdMo5E%2F%2BdPAiAzGh2spB4fSfoNeNMcnBv62m4WK%2F1U4fx61eiFw9%2BbliqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVDL%2B9xGUC7Kc2NY2KtwDVN9P1wxC%2Brz4vgBI5omiq7z%2FWR120s1Mxdt46Gpe56kGne7FGPaQM62LTxZ%2BrToViGFXIS%2FDp09NN9k%2FfqoHZv%2BbLPYbK8FlPbvla%2FTocA520rzmW1SP91WKj7E7BYBe7DUZFqXf%2F%2BYUg4%2BScnfAA%2BrQhZJBXYQG7%2B3PHlA9IJAF50TrwJ8DeH7JZg7ffmbpzsUWxfHa%2FWcAHwWkHqRVgVa9wStrSXRLWcjFUOrGmz2SAdq12pXDLqnK1n3CvZhkgy7m%2B6l8yYzbbdweCqna1TeseHAq3v62h%2BQ2k7FDgQ5uYtqQTBHxazouVvKChA3rW0fQTElCqHVQlJ1r7guYaIRwk5InKTWA7NUMCxzdAvu5ZfRPUa3qGnmlntZ2e7NyVkeC2%2FdiSMIm3Mg%2BvLT0E93dvqeeKkryAsdpBO68XrBtr15Gp8sY8CVtkSB1Lop%2FWQXS0dktkxt2DfhEwlqBB2a9beYJN9WdX8yV2PY5GgN3X90C%2FSiI%2BB0BL%2FbH1e4EipceQY8vHoB%2FFxukOAYT5AEgzzoSnow%2B7b28G%2F9Q56CehBGrVlFZ76TmhgmIhSzSDYWfkVZD%2BcERfxHPg01v%2BM6cXcFy7%2Fd9aR97dUEsHIF44w4GnGGpjKlXN2Awvtf6wwY6pgElcRW6KtvSvagVE%2FK4GSmZ3Ibtqe%2FMtInaDbS7sl4MRS4fmaJNrnHFDkscJ07nURxOymrTqiYni78bG5vwd7CbI4kogdHJtINu%2B1ZlSp4RqxNNNJKqHjgrXdgT%2F8VXp90xSH2VyHS1yQB6C12BVEC0arJigAMr5rGkQsKhXSz1T2aeD5Mo%2Brgey5VR3UTiIv6KBTpjOKjdVE%2F784iW6UVEy21OW%2FU%2B&X-Amz-Signature=b1fe9c87b613b7965eb70ac1148053aac7209fff066e746fb112b3bd7e5b8593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
