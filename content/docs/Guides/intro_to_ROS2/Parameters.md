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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YEILIOL%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbry7j0fFW0qV8PipDrvTVEKqjt999T16OMxMOV3Jd4AiEAhdftVUFfJ5BWWYJ5hBP3Rv1yJZOmyLCEXzfAUWLTaloqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSuraABNQlgsbW%2BLyrcA8beSbN1c7%2BJVWNANm5jXvpGHPR%2B%2FlCVwV4d57EiIRUCrb7J8dvfEmpBx4FfvakUeO8EpiJXfqCa9tt5PQFdWnMBeG4vzb1VPN1sWFWk7sFRlsmZMbJ6gAt%2Ftr0tEdmwpVtzUs8LzsBMUv9rH8RRfo7qVhE8BwiKfEgh4Uo8f4Hn5TL1dR1RhYfgBM9ORvqKRZGAEm8mN2nV3SdPDBK6LojFfESUtPU%2FxgHDnf6iE7876Kr77sX2fEQtt6noQBc0OpPgMn2%2BKQe0rBgvMrkW%2BSIY4CyfnG2gO%2FOFAZC%2BDTc0kZi4IxNXClDI1d21H7UL1ZtJnB%2FE4JaqAVzLzp6q1vX8B2kFsFlBu%2FOdFhXYGwxWGK9u81xiKeT8KPUmkqrJ%2FYKWWk5taZt3POiennAD8si%2BNmaOKGzx933iMXloPkwqpiVORP8YtyA%2BPiFGPUaVHS%2FgOjK6aw1RSp2JGO0QjnQdIQMKujwa%2FBT1R1f%2B9v1GYTgMvMxydw3uxl5ladNWJnw2ihFd31MtilKn5Tk9sc1f02Erv2PMgiyEaIqtXYnrDI87%2BSWFWFTYrQjps9vmE6B6J1ml8av3PkiTCY%2F18iIZYjEK1PMjs3y6nuORpBFLE9zEVjCimtfEINTHMIebu8MGOqUB8EwS8OWzynkHD9GeKzD4hgytlJ%2FmX%2F%2FzbyaeTMSQ1Smdu6IPGPZ7ifSpQlKyxgXwLKFyWP%2F5evrpLZJBs%2FioMtfZ2f3dB0pZiq5pNkiYrufdwqcUua%2B9tgjpb9ZdBl9DgMvhU7K5Bmv5jKdhBXVPOmrMMDQiM8G1Mp8W27yRau6KR5UVMzoB7DJxY3A7Q3ArAFz73Sv3Z5txkWqoGbTSY8NnhOe4&X-Amz-Signature=dae9dcdaec22b04f7defe205254c8f08a4417297b1607a9836ce1f967b840b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
