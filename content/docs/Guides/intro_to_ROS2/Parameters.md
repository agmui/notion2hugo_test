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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPTDE3XO%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5Pvi8J18MP0KMc%2FfpjxpVt%2BUqKuJUBDPKgVr0su8zZQIga6CpNOBHA7P0PnBjlDifnWv%2BAWt4Jw4VKADI4DMtCnQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJDcuspJ3yTbHFLKUyrcA1nYJ2n9kWrMRareLTtGjhgKGSDatyC6X37VI5jIF1mMXnJ7eKcEmuKyi5usts5IKTC%2Bv06tKTZJTCk6Rd3y1R5lfhZOfu5K9QSXA27VuTxEkEzbXZ9I7GWprnaGROp7ngFs6JAfV3jip4OJtnnCeVaYKW8m7MP6MgWct%2B6g43ENYKXaMtlT3GN5A7c0CQ2ZvGbYz7rTC255ZJ2C600anUZd55hzA5ArtvQI%2BZqdYDR%2Bqrf4Wp0Y3xyM8XP%2BA1%2Bnxvu1PPqW8LK0DblxyyfOWYKGlHDBOcvGQObYhT2ri7o4fCxyMNc9DnJoRj8OaozNieAWlUVDdVooiroDup8k%2FHD19z%2FCatD3%2B5XiJQkDfulpr54mLOH29CwZkjxMGyutul5ZMaxQ55ikJZkKsUvm6N4aJJ0EkVUfzibw34Ct%2Fq4tZC4JLcpf%2BG%2BkswxoZtKm63OIS04yqu55XVFfjvgWMfq9twifAQ4PddWACKf4Y9alF9IpN%2B3sodhH8KUM4fLE9NWPJCHo1oiyDUIzAoSLi5WoxYuNzq2pNppvq9WEwXTYJGsCfciEv0T2NYYi656NQEoznrP3RTHVrNzgyk2HKXZMgSsDzddCD5EjNJVoWR345wKy27ZLXKsHk6hEMP%2Fxpb4GOqUBjiKvBgc49GCyJ68kmsB9uSfq%2BnKTtZ5tR2rNv3ZfviHYtjxfEuBSWtko32Xcn0lk35YLbJ222aqr2AKpEPHazOVOxk6AiBbNUZ8QnA8sbQqSTlNrWC%2FHGxqKvyqsI%2BW4sVG0Tx18m3UrVgDEVW1Th71JC34e9NLb4uX9hjaYTZwZY4Wv2tixj84gyrnS9QCLSwITX74vsA2pCeQJ9kqF8qbcnpkz&X-Amz-Signature=9da8b7ade6175ebb8f334d65ae4e05f9703766620659742ecab47a2cee3c7a33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
