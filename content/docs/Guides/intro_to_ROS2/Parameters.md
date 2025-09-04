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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HGKTS4Z%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqCWt8iYa%2Bqg4Jh%2BWUwa2AMgtQpkENfkBzQTNiBCpU6AIga7%2BgebN41Qb2C3rrRvZxGVWxbUsea9V2EfWvJUhLfXgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDETejitrsH707cMrZircA1cPu1ACSwE8LFgJS6NUun%2Bv6n9N2AKjDQMx2AC%2F%2BM%2FmnP%2BYwr5LohtSr%2BAUJVGWPFynv%2F5ottSDeYQCSUuGGna9Ks2zN%2BG1zqj7TAowanvfKS4mQMXroRWSdIhF7VEW%2FnJP2go%2BGPllO0MprylMMEAYNbiWfWQVpXFvpOyvseuPiNSyXglyocNbS%2BJ5muIxSgETT%2B5OvIHiV%2BtZI9n4Apk%2BhaNrsL6%2BMwKgRkmUPHovm0Qveoogkjx3HTXr4HaGqiRBP0DRJL1u%2BeiIztS5b3yVBscREvg9a41WBX0Y3kfrvipLr76o0NFV2k9KQcEyDS0t6tVuFBdhQjO7V2q3DG237USZhZAj5TMcMiH5Lg8fc1IHWZBrL2KKTWNjreb1rnRR7Q9hw24Vi%2FNvA7X8fzvFOQ2ht31k%2F1loQVNTchJfyD0If0SL3Ln%2B6uak%2BsycR6uOggfHu%2BZ091lCtS9Y9rXzPBV63TK7Dep1%2Br3fGgmTvECDpJSkhO0v9VjJMLTPUIZ98mGVtvUqLaDNmUuZGd%2FvtHA%2BDSz5BE%2FKO%2B6TVmjQ8JYVSFlJLlPz5RwPc7Z0Jn8wB1yp%2Fw5P3yj67%2FVs8%2FWZMfnAHeomRmqFJ9TbaV9BJYGS%2F2laOSMF7trkMIW348UGOqUBD5iUXQLn%2BysUNdJBU6v0kN1AVjjOJA1xqhuyGyq6nCeIhkIFsEZKhKuZ8msUi7onzkAwb%2BQq%2F0m9AHQIFeslU8vjkUdzuglsI67NRuGUzKblJF%2F0qPVNFyAgE%2FIsPTpCsmXcQVPhEsgY5mUEDPeQqZpfhrRzvtKVUYRh725ZzzT6tee%2FYUAAa1vjLDq00l3KgapTSS0vqVoVDyz1a4eFrAuuOHmL&X-Amz-Signature=5c27ed662b7006297d6957d776f5f346ae32f4b0b9ffe033401b3762b56e58b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
