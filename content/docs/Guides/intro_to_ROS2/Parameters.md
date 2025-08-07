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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVL4DZUN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDkQ%2F1%2Bcb0TwFcuKtxK1sFsv1J7gTnoY%2Fi4GEcTo0gobgIgGOVTc9pG7uUEdgIJTHxyMG1TnysB5cxm6dY7fys4ECIqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM5RVlnuFYDN5FsdGyrcAxtLOe7Zkm6pRtddYiI%2Bxruu5rg2c%2Bctm%2BMR7aW8l9suJBQBTXr2Y8V61ANaj65a2oFahNcauYESraPp77eKL9qBes61qwrgLIfw1IbhtOs%2Ffrw17M0y7pRuCgGQPMgJA9mMM%2F0dbkhNrX0upucztVIC6O%2FY9Lzx973XEebkz5dmliHGougl%2FN0jQUmfcoLbSJ91%2Fv99KC8HYFRq0tB9MRXVoz3KI1UbzoKAQQE3LzxOGv9L9gOGwd457t2q2r4TZCXfgPWJlqLWRvg%2BbuWv2C4xPmEYdYsfDz1bLHtsWAwMsw0evThGsTUJ5152cLP0Dwe5jr%2BNlrR6JkLBAM6tCsq2v6Fo9166Ny6WpA5fYtkj6%2F5D%2Bmlf6d4YBLE69vrFpEjRvPitvYg1%2FS6eCLoMxkHA0w6quUGU0k6laU0ftXuZbR%2FIXoT47vwcS10q1G9%2ByKfNoxQoHXQQduCaqH6k7MNePF%2B9Hxc9dUPavPjxFw%2BHxu8aVDVDf01RCC1YHO2t1Wj7J%2BYMp%2BZzyEKDu8o0cCtUfMKBXTauNFWPg%2Fj185eoh%2FAjlPw6YFQtLPtCrhVW%2FKWUM3e1pZ3RMUDCuDhZnL1XJFSVjhOYmpEHK0kH04R2ha2f2S3oLC2wePSUMNWH0sQGOqUBTRXKPUGRMYRILPNPx0jaWQy3llmc%2BgTZE68Fzv8EQF44a4oZ1qyy04ctT0La2R0%2BDCPq9XUeBnrZ9nD1abr1tAZiiG2HXFq2JL4HNQhlsmVGW75UAsRZZXuILh%2BDRkLuktRCTE8q76Pct6AeABIX2VqKlR6mrSlMX34CWBVzvKndP5Z%2FYBwO2l2mMD1l%2FVUic1QWWEFx2Io77%2FMYVOYEnbvdrj8W&X-Amz-Signature=787b276b0acf3a3412c628e216f30b353de0cbe1c717eb632883832cf8ce378f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
