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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFPH2FA%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T131450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDwegmXdUxUH0YeLeMcmGBVu4NX2ST%2FyQiN54k4i%2BtzDQIgbEpaHtwXCheFV6%2FePc%2BLIuvhBSLPYo%2BtpIHobspQJ%2BIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXR%2F8cg1h8xwLsyXircA%2BQAF4vBmOiLeKKvxISgoT675U3O1Us%2B0DlmTb7rb%2FkD7ZQMUG%2FSR7CkGpL6fUb3QsP40TjL8c5C93u0Rpkp2LllG01RM4lBPps7NVlvlN6V1wla9AfHWtAvA0joFQRGVb%2FLcLdSqIbobizpd4JDrbqQR2X%2FoWePyyXPEjSp1c%2FcxGqwwkmHmhzEG%2BgoQZFQqNCxd%2BV2jw%2FHi43n4JRIhnPHvDemmRT8TmEPXLlDPylYaYsrebeixtvrB9g7WbopZyq1lnE%2FYh7NPERQfhPx8YQB5DD8kYF6%2FRDKjyUqY9sJGHKvR0XX4Ju2C4agSj5rcNORSz%2BMe%2Bfj2%2BQxHv3Nut66Dd5OSJSF2GVNCR%2Fd%2FHl2QTj1jGpyY91dbsi9nR9cCiAxKCzkQBrqBfI%2FzkK7drGKuCS6vuJQkBMp3Eld76pAdCAlIi1fNcmwmJjte4sUspbJd7pBbOWx5kPwWHtuxC8Zd1h6iXWiz4QIj1NHBXzIUeSgO6M8sUQ5NnxYAxknwqFeVuhGztBrQdmoAi96xooYsKqnzJimki2xkloFHXJCxRxh5%2BWHjjWFmhFy7yMd6qEGtf%2FJrIFRSvMBgkwMQVpSnuaDuchDzxBdgmV3MPpK93jOTy6E5T8IUls2MK6djsAGOqUBpBlXUJqgcmsIYgmLwUL9cy5FqghH1pa8RR8qBdXWhz74VWEX%2By8owlutd8Z4jm85mB%2F15Tjb%2FK65wTg1zgy6%2Bxbsf8ul85tVzUWL2E0eBvAb43gNPTAgGAeo2%2F%2FXbr9sSI%2FESp4WF7BIO0Ms1OMnMBh6w4LRZqQyNiiLChtYIkqUNjSdWC4lHnfPtOyobLkUWjhuVMORhCeukZcmHoEP5OlXbQWG&X-Amz-Signature=4cb0519db24e42483f3d731396e22b42d16f8df04b0c99436ff139ed3dc3e629&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
