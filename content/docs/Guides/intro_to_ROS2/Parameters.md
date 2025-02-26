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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLSNOWOW%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQC3orJ0%2B1X%2FgOwe3skE%2FbZqFH8BHN1BdQcsu6cKdzXaiQIgekzic619RQdUOlmuP3Wbxh91kCrpM9Qz5QSJovujg9gq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHKzjgHyImXSGIwPayrcAz8sFm37jtC%2Flmnkn2tKNi0%2FoQewKuXmzYqGaZmwRgUlj%2BswSFB4F%2BMtMJu%2B%2B88JEXQ42uc50w41eB10PweW9wfbJbXkec7h4%2FwmmiHwZSHC9E7p9rI8LCTRHICJkatsCZQYt5SfL4n9PnfBrIS1z5XgPagRnRqtYvsj8Rk%2FZ5P3DyIl7sgydFY%2F7%2FYhl7Q1u3Ul2ogsr53hySYX8DkvXGsDuneL1a2twWJraB8lkF%2BHRLZqPz3aA8zIxnUxBALip5qFnzZkFOeqp8wn8hkSHe2aK4H0Ox0kDDG4swRW%2FggInQ7VF4RY5Z2Dpvh0XCqvhMo9NC1VVxiCZJPu%2FjsEDwtx%2B3VyR0RzrTMdU1OOgi0a4RIkGiwvtUofeYir4pzwDg8cLAnH0cvX0u8UXrqWRS8inpPTgycpu3SpMtMjzKxQHGjh1K2YC7AV%2B6olHVOBfhlKTlFr79RzlMNQFuQKYZ3lDrfl3LphIK4Ui97GmhdoLdxwiprds%2FIgogWYIe9Bmoq%2Ft8x8avBMaBdit7liX0j1MBONm0yBbmxjOnZryzrIsgN6y8REMcfsTNWcg4G5awS90msXWH618rkCC6ydlV2VDvy84Y5JWYvO9kbJe2eBqdAS2bmQMe%2FH8qgeMM2j%2Br0GOqUB0sDjR8R01kR3U6xazjdHSSINqrBBPNR1ZC7c3GTSk%2BWHltYoWjnfFucJM82NqRoFmKjgnqktNSFxN1WfNf69HIG1%2FwX3qmXm54R1alAMi2KaCETBQc%2Bo3KeB%2FibJM0L39H1%2Bw6Tt3nIEu%2FGOiZvBy9yRiimCY0xu9WSxZhQG7G68oKqDtW%2FMKp2SYB%2BujvJX3KZGH%2Fj7RHVTpDlw2mSbqzIwIfEE&X-Amz-Signature=2231f4e5cb4c58f2d5f1770cbda3d27ed7187effefb2dfd540645a9db4577246&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
