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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2STJVL%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCID%2FYOfRgLKEI%2FVFaR8VXx8cypPkudp1j9RS8jqPxtLBgAiEA64OgS90rUeiVy1hxTrP%2BVhvGMwx4lusJBRSoNnOC5zAq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDLHT6M9GPXdfyhxTSircA5FrMuP2pIA3mlV1tJP7G1MVi25cwSXrsoNcVr4VZPYIx7kxRbctOSK9kiGHdl8vAvMvY6OK0EZpQYYUonzaau1vUFEWRmVKs6BD%2BZhgDF%2BmJsLhmjsaiyi%2Ft1kQ27w2W3lvDCM9dWnQc58jKMZxAx%2F1e8%2FOqh2Ru%2FDBuAv2KCeFGwc8N0W5E%2F94caMBwhq%2F983mzfk7kvKKFjrBc30ib3Zft%2FjWMm07kxcrPO%2B5iyOYH3kzOCXt2XYhfftpZE8mRpuYRZErQdrrNMFEBEs9CghwG1RALlE6HPCfCFYojj3dF8XFjglSzjwgEQsvof35m3PneC7Bu6EP8x9%2BtZU2mqBcQ8IoSo22nWz%2BQV9KV5uswZwsYbYIRns3z%2B4aRrrpgicobf1HRRG7rYGlvmvQ77Tss1LqnhTQ8zj6zsB4%2FjIzfWKKBw%2B6c5yWWNdroabqRGL%2B391fn58DFZ99sYU70IYM9w5H%2BrtP2YJc%2FAsEPrZG9K3PSTr2QbDyGTRL8ZN8fzATS9FgE216ixacL3OfbPP34TYT7nK%2FKZj%2FWSaAb3PG3KvmIxGxcLuzH5VChQ1TRodnKjYa0QR%2BCHp1l1OLg9vSuZ2uxZl%2BcHrLAmI8AcAKylkNAEXjEEPol5YbMNPJ%2BMIGOqUBSgekOZ523D7R30Jle4fvRvMGTH5XexhKW%2FTO34h4K68w7pe2xtooONAL09Xho6Sb%2FJvr4eATi9pzLB8vyjrZ0CvA4DY5NkeUANG%2BiP5Z9R3j93LStoirVhr9cjk0RbpqN4yuMsymTXBTgK5fh%2F7XgLJq8Dhqtcb12nQpHTgXAolg3qgpp4AbDYh4GJDbw3ECNmUtHFLg44D7fOynu0r1zkB902Sa&X-Amz-Signature=b1b411e24668014de9a8eaaa21fe054510b96db8da9e2a6a55630996c815a761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
