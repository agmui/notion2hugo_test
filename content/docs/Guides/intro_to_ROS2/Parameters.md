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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUXAHB32%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0TO%2BHjt0%2BuKsgSjRRrZgmSsTf6JpRG5dy4uyxvi5KQAiAnyUETQUz10amvBaotUwPKadcMBkdoehvKozdBiB%2FFQyqIBAjU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfw%2F9LjM7u%2FLSDt8zKtwDI55AMNiYk88zPYDjKty%2Bxdig5J8tI0M85skne6c1iR93dnoIHZEnfcal8386Km%2F%2F71QVJMYqCqyFnJioNHelntS%2ByRoOqhepnJwXf5870nbFbeJb1h3oqqjru10vsWMq%2FGXcrPWs4abpuNnQcwQVc0AKArJAx2X8qpYnrVj2fZSu0HxL52ahJHmsIefQyXpiZQcUmQLhLmdgRp4kGnvd3nTqAwpOF9FabeH93cx9iKKAYXS4yTT9drZpJ%2BbDJQ2%2Fpxg1hwiy6%2Bk0%2FZgysqxFuUaIzVK8bVw5XMfivb7zaaulg4qoNp4R96BlrvgKEHJroW%2FJL%2BSZTje%2BR48%2FSGiLVU0gOiK8esM1llzaENPJhmYn3hPDOST5j2xICEyLQfJpaouHJeeC3W6WtmDIBPFEPkjF4ExgcEV8mFrVGTjIYNOjqeOlfnLzGairca9AEkn%2BtSdTr3XKY3LXVS1vaNSzSDhfM%2FNjeI9Da%2FjpnkJcmrgwXYaX0Rv7kg5TjgcsqN1IIiYU95W8bIFmqFXAOPMCt%2FSAUl7Rv2Ms%2FtSRfaLFNxF4WeJ4aeYef%2FG0mao7Fs4RY8mtYngo0S1h%2B26i5B%2FxTBhegzaNFUzcmaiY0Q3o2FlpX38ZJkQO47HgZ3QwjqnawgY6pgGYiJgTpRHPw3gDLVJgHtAPtSKts1KKmJTr3T2Z%2BujEyOK4YtsOenMuCAN86yxEHsGD4R4TZrky42T8GirF%2BGbXQA9fBFDxi1iKd2h5LRN4fr28d1SlownNgoX35%2BPTP1Db6IcwrSWIWdX90rupG5PIDnrCj99ZZ4hWr%2B4X3qoyiVCffvyYAIPdRDf2VuD27mjyPLinpVvs9Hmod%2FpB20Y%2BPHiXxQWF&X-Amz-Signature=039948e17f52cdb38742b5bb8be6f9ee71d659822d75b40f2a911251f9bf75b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
