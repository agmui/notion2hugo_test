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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644OOJGWN%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT5b%2B2zJkuIv4FD1tdf2KNNgclzUbsvVDxteKdV48zDwIhAJspccOfO0BK2H0rlOUTBP3IyXi48yMth6xnvACPRTlyKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy35lWP7SHQL6%2FjHMcq3APwQcrzZvZDzq2PFSbl%2BMQUiXvcdigyYtGGsI6iGOtsGMa3IXudkCBeI459%2F6F8UUCLQXfZIpCNdaDIeufbEZJrn1prouFtHVT%2F01tNgLZ4t6hum%2FUHtYJCgspNEHgJV4upOwjXNKbHKiZj3EjrA3PmhTgL2r9oFn61CbzTMVOSMG3tT68sconl2P83NMo4kOtUPCjPu4lqSSD0GGTSxNbLQ4rx23hzrK2OWUKX9bNLr4lha6%2B5Y8Cw5PClydnW8d25%2BOcKs7CfpFV%2FwpBT4TlD4kElXBPYILLCH%2B7fma80JywUZR4eyka8U16BEphK55CXhssZvL4Db5Qy53zuG%2FYhM7KWA4kB6IXP2T6yK8kaiWQNWnjZA%2BsSCKvubXGLkMFqro9mCkPlH5MNOQoLXhHtHomxBJvLhj5uGoHVm%2BlCceQbAReNOPCqrtXRsqCejH0Fh0tXukVMAWJqLOctOUA0lE1XF8NNAUY8kZ%2FQ98r8GybcSmYkSNyjzKg92%2F5wJdX5d59%2BlRExPeu29Ustrx2dX3lHhgu7SQu4EKmMoadn3Z6gZrPtSLObQfdQsFZ5RqaBnfiZWDnMgrZNmP719uw6h%2FLxt9ajVZFJfDKgLCMl5U33%2Bf4SnsNHktAc5zCYxZ3CBjqkAU2urWRyE45IDSsnntjYSukpRbeD1RFsu%2BMym%2BE7Qs5TxHbcgDVY6Plm%2B8nPP6IQJvYIWqQY1HnzidTpBbyV7pjl62nrwtTJhU7SOM6hrXRc3gyzWG8WmBVFce5Il9LRWTckxXKAC4dvIvDI6noRd6HxSCfPQXHK%2FyrzRiW0VCqZNMf3A%2F9c2ZLjTwHH1MnlXO6rLIPrQIOfk9T%2BgHVUp4%2BPfQmi&X-Amz-Signature=45275821d342afaf686d1b35c5bf0932358982e87ef6280fad59b74c7f03fd70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
