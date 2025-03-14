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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRYDHQB%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCqfeFNKJRCNK3zgF79%2BfsbBMWaoOWD4TMuGWZhphRZQIgFHo7CzmRUYRtnLyvvPOcVd02GjYOVgpi8ruyj5f9nk8qiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbAH3kqh70LGgm1SrcAygxX8tq%2BUG4SVcB9PuQBOQ1YebtiF%2B4pAyhhT4daYp3gF61gP8p7aFlYprF5V8zkapRnI8ZmUCxukl9CaFOfnQAKVEaaa755yOGaFWcwHXG1Paw9%2FjXYbPsBrA2KB949jhmA5wpyNIIoY3m1wEto%2BPdd3WQJrhX%2BdYo1EgtIGGAi5CVmZVpgOYJum5wl4ftULaXqa52iZ1vzQXm5P%2F0YAhrQIBSUVLyoLmCVFpoL5LPKXyCX30w5ih%2F0NJZLz81PUwtHK1RWWsESSWiU%2BBRFDLJ6yB6n36FfSllpqniTp8raxWm%2BU9tBu5einlg%2FieSi2%2F93MjEB545LkMsYyVLhhgPmSkL6Ls9SP06aK3TmgMD8B6gJrP3h9wzdpkebzGq2cGBWK%2FxU9Pt1Jlb9wdei2pyQyzNMCE3vDdbQtdDIShRvdr5NKlesvrayWXEcrBFMZRSDG37IFkHlC1ZLe7JQB5jhU%2Fzn4qRYvYYZj36NJp2X8l07MnYPG16te8k8ZRIIUOf6oDRTts5KQdszFikorB9EGt1NOm2t0zBPhuL5IQksgq7cvyjfGT32xxEEnDAzMRWhgdMLaSdsWYmMOSRYpeTCQ4V9c3mHIYCbYR9vB6KHlrN%2FW5DJG3TPkB3MMS%2F0b4GOqUBOk5u9t%2B9tGi5qKkYtiOI2xNkNfP%2FMPhyuY5W1iBHYFvSU6zdl1iD1qPEp17GxV%2BxSEvDLgDiIKPPgSVdpf1N3C7V0oMCzvEqBz59GrzM%2FwL6S06eJwM%2FgCS%2Bb%2BVPlZ5p4AnrXNZEAnQe3UB81tuAOLU8taO21M7%2BL90rp%2BMgQPCS0eycBuJNMHg4J2ZEtfm7i6vvA45fZQzdG%2B2Fdy3ErDw3Df0m&X-Amz-Signature=44796c299a85e8ebff1c960d803a91833a3c443e53e1c4deea1b9901e77629b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
