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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG5RSEV%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIF2w%2FeZQupEyh6padZvbi%2Be%2BQoWjM%2FTILJ7fQ7M6f%2FTSAiEA3pbC91xTaBptyNDjlks5hZ%2FesPjhNfBhjl%2FJb9sevQAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAey3%2FByFM9i0TCoSCrcAzIdNjyF1sOcJtLqJGK5dvXTVB7k6cq403DhKBuY7g1DsRe9eb6WF7WZHbq%2FqBcCf1V%2B4rucn%2Fzxhv8B11FE8UIVDSNiiSjBKufHntKL7PtIBXeeV0C%2BLvsGykDHjoy6krnOwrzL3Xs4fg3N2JNzIPs6Wsb3HmGr4dUV1MC7jcPbkMDd4d0lm%2F2tLZpG%2FUDr6o9NiAZKUssMhe4UTHvCvQ3Nx5Ta5pKN16H%2F7EG5jCkWgX4RqVQ6AL%2Fil5spuJqhe89SRD8HgLrol%2FSokPkMqfKo8hwc2S7d%2B3nLDu8I5NVJcqhBUPJ3xf61SNJ5AGoBD8KF7PZV0%2BiwRcg3PbKr%2BYtXntXMCFoZHbxn3%2FjuJOBT8Ru5kjbd6B7nfwMbcnNuUSlwufg1Nrqdgs7ybtrJRNzpZDSq5cZh1LXhv6tlEuXTf39T1UN7iMPI6%2FhEIva6LIFg7BZw61GYs3hHR6F%2FkqougLrA2E%2BY4p2hpEIOUbFSkUoAJxLKeJ3tbXwfcBAgcAifWBTj5l81HLq3K5Mr4sw4tDEYQvlhHkYTVI7W%2Fj8pNmWgN%2FN5VQDS0wh9Jt7CC5YEeu8x93jThKy9OlkaPiEkk%2B09p4m141cx3K4SRfGE8DpZOkNC%2FfxIzry4MOiX9L4GOqUB8VN0G4O6KbKY7H8fGZLxgsaNllQaBvAoGAxMPcwQQ%2F7GkRD2zKxmO5%2BEjCrNW9%2BQA12%2F%2FonhJh68m2edJRtFTgPMneGMBykoPdVo%2FuGH12re4NFGFwLZq5oY5ZcqUqGdzHKF%2FfQDkYtOLBdfE2V%2BiuHNlMEtHGHX11jx%2BuJxD8H7mRbjrMJI03i9JdPnMhFOHiWJixtoVDNEcEnb%2BjcJJvs86kmT&X-Amz-Signature=2c14b29edd84f02d503eec2004748cba55d71a2aaa84ee80cfbcb337a792cbad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
