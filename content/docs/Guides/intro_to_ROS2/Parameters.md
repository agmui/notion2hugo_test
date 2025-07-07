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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BGWDHOA%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQC1w4hodRXAs0TTFNMxZuwlTLRgZph9oxUOiiqdugrFSwIhAPY%2BQSntFzYj71KouQiWJ7AbKM%2BOPoru25f5bcoeSUW2Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxGjvqYqQ9FMzBiJoMq3AOcBhSM9Ktb0%2BoW2fMgc%2BqJ7D5bHPyS7SVYM%2B%2Fj%2FSpGTn5G2oa0fTb61EbVbiQGvPi%2BM5bnWUHy0fP1ZRi0%2BEwEjlHrhC6OPsGvPHsJ%2FSXwv57NTI2OSrHqzG5VadirrUN%2F2PgwcXNx9FDRBRzEW2bYVp0a5Ku%2Bm6zCcfgno313r1qLaPwlykJusWkXRF9S12O9ucPf8BrGCYTCVJOiezRjCc0alQsEASU1nPV%2FtgH0aH5CN%2FcX9jn5h0hwadGNO36r0xUUuTJVCL6W0SvAwedi038quPIdtguXdlJWz2TsYvFNjwMiDtWI2yu%2BmUMY2d4qc%2B7pMB35QEkhWnzrE%2Bxht3WQN2jLv66YzEBNiNDgEmUt92uLFfaGVdILrCId2weM1z9dNr63R%2BUy3NbcH2MkgDcLJZa48Pe9A3s5XOvNcyV44Q0J2qKeE5K7ayNoyKOTkFITDVZWybHDL49METXWo5%2BiAZDCkkKrkyY6e8sqFBFfo4s3%2F%2FCRiqZAWK5ZX9ZZoAMD06dr2GGkLKKTi9RTz2yEihHQMhz%2BfV4JqXsdXnO%2FfOnxT68YmbvNgBDA3TGQELz9MaYsJ3fm03Py0ytk9QZfR%2FJS%2FgCX9xRe%2BZW%2FgMpeGPcXQSZMdkt8DjCC6q%2FDBjqkAZ9hnf193CHerZDiV%2FriuL6lSP%2F07slFMLx%2FF2DWemyIikTMvLw3AvyRFea51vH5DRYDjKwjuPn%2B4PpLR2%2BTzPt1%2FQHjxlrqHI1C08%2Bc3p%2B6qwyrhqkXQ5%2BRmcIH4o5sr4zhh9%2F%2BVY1fyytmsWHAyCHvk06HyCS%2FXq03O81q4EEVSxOtfG%2BY0j6XByENVrKqTv1TQ6LYEf1DcvCSVtnyZKdsxyFG&X-Amz-Signature=40fa982322c781acf64958c95087d0adf0c7072271d94f3bc6f8eb2f54c99245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
