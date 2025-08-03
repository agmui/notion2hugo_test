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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPALKF6%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7JVu4KFdzQ3UdPl6zTRHMa3ayzzBxif%2BaB8JDNYrLoAiA5WSrOMKjA3wI3nC8zwBPrzqedqAMP7T1v5vJSsDfDBir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMiTC0leNc8mmOxeP%2BKtwDnckk1TubClBtJSbApHxtr8BEFiiej219WTtcjCmq12fnAw%2BmlNcxAUQ%2BMMBDpilGCMblnaBkwzZhMBArvVclxe9EW0vpSTFFx8PV4RsSk94VqnVLoXs3dRYHpmKJC%2FEFQZgTFKBEAxZSk%2BXz1dPHv2D4SRtPybeURrYSZKris0HEL6%2FZ3QBsc4se%2F306oTnzZlSdDhBX4sdZuGTjKbrVTZ4mazoyzV%2Fk6rV65SaTY3PGc9PAHUhZbxP%2BGztiLa2Xkoroim%2FKXTrTm%2BNgFqMXZuAB1NM3Ib1lRMu42SadpoBXR1Q6abZh8YPRpEPpA%2BM5aLeklBiRA4k%2FP%2BVg3ipw3NuD9f53op2fRCF5KSgKEZKGrf%2By9KDTEdA7FtP7pUATxT7h9CvY5uJtLjWDUaUTgYfm6t8zAMwI3MsS%2FWcNaPBJTM1p5UbMx13A%2FVspbV%2BsQSM5yt0unISnQbbfpKC0rBBrug0b5gtG8rOOS2wZrzo9m0d65okqfCY4zF2PyiR%2BP7vSjY%2BY3ua85uxiLGEoj7vtsWYeU%2BSn9gkjUUgSXWCN6KlvVd4xuqw0mUgF4pSLIQWd1N2VNyOzXD23PyujARqSsGkFM4AoXAV81VqvEuPkFLNCVB3X0%2FL13Wowx9K9xAY6pgEWVseRC6Hjij%2FeG%2FplMHh2CLp4IV4cNjIFGV10uGgr%2B7A76jCgqrwo8VO0BMt9RObEwXSsP7DhoSTMB3YkHpWnZpxQW%2FP6BPFahMlle0rp2OYDwKbc63iijOsIen7KGZyzU2EiHKtXtbB3EypWk36XHdk44FTqQ9FVXP6FpKC4O880x14pOteLMBv0mZrK3DBofwECUNKv9UvfAQxyLzs%2B4DP4LrZJ&X-Amz-Signature=98985be76d2d09473f40cb9d4333abc809ac52483e2caccf3b86faad388684f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
