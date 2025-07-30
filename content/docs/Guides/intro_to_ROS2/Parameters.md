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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFYSRKIZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T220932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbvNRhy08U0b3UqnqP2hjNUxmUGzOPU4LSG29t7fyMnAiEA%2Bsw3HRCvBt7mGAZO3q6saBxOJyRkUZEY8SSzFOWDthYqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESdv9ASI282c%2FoMpCrcA9sIOkXZZOP63blHGjSoVCSfMuz2M7Up06QC1dMWXwa4w3vmMwNs7sIHGYwOrTPIqwR93Oaj%2FY0GM32lDE65TfwwjtFXde8zMh24fi%2Frlaz%2FtTIOdpXXhcu1Mo1EvXl6i4JkoLddrP4aAhtK9OqoKTrG4g4O19cxxruNaVhdhk71dZbHrhviTVbGCsVZgc7uNe74vl4A0104eeO3dtBlpKctlQExmjwI62722sMR1oAqUwsHALhuXTvdS69HooZ2%2F9lnFYknpUmqN6eqBSogegH4yjBCc8uauHULUxzzl4pABFK8z5olTMyIIp958yEYWWzMfznqJCND8LGseZP4F1g%2FLLAgYpFiwTpm8WIeyWwguLBo1IuWwrq4IAZa95G%2BcF%2F2pAPDCuIsdmK2kYp1sKKgArxGdHnhH70vGysQ6jqpyYGSkI4lLzEO8YvB9PKkQsnVUAwbWbqP%2BEIBtmjYmsv%2F9Oo9iCuV6cyBqFwX32B74K0bxZJER2io8qSWeuIf1E236KF%2BIDaIbkcQfSxE24nAg2UrOO87ZfF58brG8RtoCy8oFbDCWzAU5iIMqIWkAKuZUYwnLq9vXvzRT35qUhH72EZ1cL6EE3dLWE5QLVz38qECajMk3RMTG1keMKOgqsQGOqUBpqVK0hDOO1VAM%2F0dskywEevY4NINt4aYSxO6kODfOIUlLZM13QKxcDp7aHJUI1q03ucm0IjHUclA96GAxxmMyul43DNkmE%2BEIvF9YK5drvD%2BR8pIDFhXfycMCSYxxUwq8sNPsU94uBCcUV2yuP4C8qB%2Foke7l2zfdWU%2BDz3x1YkLxV3E%2Fsl3JXLGeGZsU4tf0pxWdbFw5b43CKaYG37%2B7x%2FKg1a1&X-Amz-Signature=47f40eccbdd8644b01a644568129bf851b15989aa7ec9177489a1e0b1a6fcf72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
