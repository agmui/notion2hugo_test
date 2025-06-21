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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6TFFWIN%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsxvSx035BWsAB55rRsebzUOsutEKSSiUiYqz15k%2FLIgIhAKGPitlBVLo19CLTmx9ponueo8Yr7vjE%2B4CjyPbwk0zEKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1GYfqNpJTznE0QYwq3AO%2B4dGG2yPNTE2FBDGPYIxTIKuC6t1AuExEu%2FzbjImUdCLsPm9F98%2BGOCu4Y%2BmgncX10Lf%2BNZOMyrfmdARdNx6jAQwABwFF0Ln2uJJ30Hk60NOqLrnZHz%2FzqTWO2FsZ8f3tiwqF0H%2BoN1FqCjEOColfIRO1K2JGRgO7t%2FV1DpW62%2FPhgwctQ8KChIZXK3L4KGxDZQRD2c0HaKsWZDE2sYqoyX%2BUmP%2FQrUTCZfD6SsDr8zbaCTZ1KTCUkx6moj0oyDnfcB45WOfe4GaUbhr8%2BQ1rjVWVTgiLbfIK7Xfd%2BZcq3adix2sSotfPQH76vBJUly1whtg7GXE%2FHiWi5p9CupKM7azPsG1HkjzJ3lUUisCpFYndofGzOfvH%2BdX4wVo4%2BgKPPzGRoKnssEjXmMAhiLralpi%2FjTe6UGf0klFJhJB27TkJXg8IDswD9Lai1i1%2FivZwuGF5B5Ax36ovMh44eMle5K209BZlvEEg9b4nFqLyML5N3HqqWJ6p9BPknEqzg3ymFi40zt%2FGOISPjUEa3xtr2FmIqtLzGL1f%2BslhqCiKlIWtUZ4dt%2BzmNsB49cg7UTCppW7LYPLEjEdqhncbi5sxSN8xgUzEYcCgG6%2By1wWsddHaBqQfVqtINDwh2TD13dzCBjqkAXw%2BnwyKOW85KVyLcDIiWhXQqpcWQJBqpS7%2FGKqxkmvTllH1%2FOfOgHhk8Ac%2Bs4uW2%2F8aM2wBnugHo2lXzcU%2F9oA%2BMvLe2XgpmcvtEwJIJ%2BPtl%2FKmN9dertjFDiPeQQvhxH2ToJvWk7T%2BPCl4XOBtrbiO2zukppt%2BPWN5HXsh1ri7E%2BYfh3yqQIiptf56z7dVvh832uzkvB6ElGWy3cnTTcfeBUiY&X-Amz-Signature=07d89c6cad5e7f47fa88d40d0380f1ff984bf3ba9e5a91065a846e19030574c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
