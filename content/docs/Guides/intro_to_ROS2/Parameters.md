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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BHKOW2%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDo5P9GyyVnyQoMcp6tK7OtVhUT6QjUrbHRypybMcjKvQIhAIR0Pu0cm4dy6%2BPSU0thORBxpylwKJVNmj24v7Wz0NpVKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMbvnxgdzmMP5IHUYq3AORqvh%2BFRHbPdRHAec73Ct2JzU%2FOm%2FsAkqIolevGDqK%2BR82QqYg25cGqtvqq8nY%2B7nAUORbwBUHiNBO7shv%2Bk5XS0b%2BVa29cqt%2Fr3ZCweRhdd6uRbp2K27AcSScC1S7T2FKRqlAq5g6urNf2uaHRREDTMUqGdyqZIc7w2G7PR7JkvW00Qhyx0JDjTwUwItq9hOGbdY6H8DMPFQqC2EGzPy5OqYNpbZ8B4jJr%2Bgv0C3rZP%2FsqlL3vDXa%2Fx7WeGsv4vkrKpE7tVCXrs7S%2FOn6tQOSnCajn%2F1C2Vwz%2FzvcuN6nZ52vnr4qEVcBonM%2BxIFKdJPVyK5izuUSQmAv0%2F2qfMRhlW%2FsQ%2BbLfQqx39XW1nRj7rfuk%2BhkIwlcAD6DUY0rN%2BXu9kWnHUmM%2BhVIrY%2BwngnxHKkRhYkr7mNp%2BSww4818cPsCLji%2BM4mf0rttiigM184C1YiawVC2mPUk7DY3G1C6pJQo1E%2BQmmNAfjzXdZbp4JqZhYk45fbZ%2BKwfk8yySPlO%2FpycsrJAy9yha%2Bt%2FfsLll0I0C%2FArtnWQzjCcOQe1Ms5yyvNBVQKu%2BrRdz8NBFhPR%2BIKszJNh8iXk8x5%2BcvATFc2TvjeGGRc%2FzlAlowBPuSuVAb1jL1aWktg%2FXTCIzYTFBjqkAbhmGWMjTFFLc5A4MpPSB9gMbVRUVRdn4J6IlvNRzZiOWAChEWNG5wlzrF8M7vm9hM1bAROeyQOZ4XELHJwCBQUXPOlTrfIIwbo6UQ6PgMYOAQP7f20be5dAKDh8hbZziHrLLObEK%2FqPVfe8UHFfw085RfX7T6u0NLDlB0a6eQCmW0s39bl5B%2BMw4lOndsoC71Iq%2Bo87l9up2OwVo5l7vz339xMC&X-Amz-Signature=8a4fe1cc0a0a5bfd805df5f34a8b7dd271b8dff7461d4f111dc47c4a12eea2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
