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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXHAYK4J%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T080901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5%2BnfbQN4eR0%2BDHbbE143ajdoAT6r3Oxv0cNSZx5PrYAiAa3D2TsLqvz1q7EUDsGUrn4Tbe2L1fbCxlHRHe2WEPniqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg1YOnXAt%2FilCJEB1KtwDiPTX2IEETeqv1MuIaKm87JnpZGDZpi%2BncKnnC5XHBSzF6CZRYt8UpS6orqE7CJE%2BvElkUgoOJNyGMsZokFQicUZCQQhNEmwrahtvd6qx56CamaX7UNms1HZxPYRPhwKZ4m%2B00%2BQqEx5zeUGlu4vTjKczeYWjQ0AV4RjHKa%2FxoZVdAJVVN0yhR8PY07KGbwVB9%2ByFYcqKPCQWTLQsYQwY7yTAuP4XuozMrnm4Sm%2BuRJ%2FmvnExLnsEGZmqch3UWIvttV%2F94P5oCDBo0WtdtHHj%2FxasFlpPyr2JeCWSE%2FYw%2FEKfHUDti9J%2B%2B5fNOWnrj7hSZPAb%2BTwleCcXMFAFyaTKCRRpI7E3kBQzxvcg1Nf%2Bu7FfnXUKB%2B5zE%2F5aokvpFYb33c4IUkb7xBBRRP%2FRtNEqxF3uEMDudWmwKuc56yZ5V4fgJ%2Bl5bvoetuS%2FkKiYeAkKtjPmWnDH96yvud72I20cyJnF%2FOjii%2FaCHPv0B6L4YyAHCrXjofjgSFwa9MISRl0hzQGwlaDBpD7f2VSpfBVFDfvHUVaoX0XQbhSp2b8RlKGaiGG5m27WAOT4ibOrjncLvEBu%2F%2B5OIeFPnKmHb4qiI9dq2pg%2B6tc26VIOPO5ojiId654ZK%2F1PcMiWAcEw7J38vAY6pgFNXaHIo7XvxeSar2zEpAeD18QW1SzLrkumM661dDO0wREDUZKea%2BZ3p8kHYZd0mDpy%2BM3a1gIeVSD3mVckWDqV8RNazJbnCzdUMa%2BbwqA8hkGQcoqu9P0fJnViLg8%2FkZeCzuOsIRR9u4nTPGeN1Kpu%2FLPwAc5F%2FrufIX2UTdQkoy7mZ%2B50vaRArBbKCy8MIZ403OjXOgRlgl%2FEFbr7e5XSQlmw%2Fhhw&X-Amz-Signature=b7ef7145f4c7de03dad26ca98d374ddef9fd139e7c5ba0f8c6f1f7f3e6125b30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
