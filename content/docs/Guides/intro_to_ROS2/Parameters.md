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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNJHJGQJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIDhAF1PJelRVZ92UNOzyuuK%2BeKtmVgWj9sNhOAL6AU5GAiAafaKURelSkYvuYM0rsQ8Sf3Bdy9MEGiGePdmDqZpvtyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMhFX7mv9xGMTf7W%2F7KtwD9WKrmZVLagPtHaZvCR4SEgvwIaWiC03z81yLsTJXe0KYtCpCZD5vqbJH3dEbxUdqECwc7pWFIpDsZ8yNR%2FMV4MJNrFoVI%2FURoPK9qTEYDpesXaNQlfLeUpxW56XPgGvFnqZEGvr5il6T5y3ljW5aoHX2eaGxAs5koBQqB3FTlWrt39syAtG2wfsfSMUD5SfpTn38I4vK8vBVZCKtFpyv08DAR6f8EvD1Fgiyy%2Fjcqxv2YGHz3g1bGFugkbLTw9kMEY9%2FH4UQF9t3ahnN4jkUNCOhj7wKX%2B%2BXV5pHCROD%2BTWnhLmDH8qeSwF5VqAO9vXHPaRQew6ylMMMwouOJJwxYRS6z3xIXdms5IovciimBbTFOi3RA7yOELTYTq4%2By%2FxWJstWMtL7dqFLuXensJqG16FypL7icnoLpV2sH9LZRoSzl6dOvTqnaLxP17ulYyDkzoroVLOTPeCtNVbw7gVq62WkbFaQeJRT2Zto8XQTmgJrMm0t2UmBAJ2Hb6%2FiIjyRH3fDgsnpl%2B%2BavLRS4u5vZ4fO12N8hoRXddH6FD3c83Bxr44OBZnKZq38yRrg7b974SQiWig8MDQZ%2FMXCS8%2FTQ5VLoqmiyacAkO2ofUc8%2BwAx8hkxZKDAcJHgQz0wi%2B2BvgY6pgHdRqQFju2xk8SK5u2URGesl3R%2BAttj14bQ26aRhj1gzE4FwS6qjjgySPfqmGdXa49wCLgcZ2eljsKn5CxqaYh80P5ixcGCgrOQUE%2FeZBuRSXd8xUJesrirBTuLspddXrJym8RuLJXQtDa%2BN9gL%2B64N0ZRu7kBnmeQnHeTQehdYCouvOboldPXrHR68H%2FsK3yw2GKnKjvclzpp5F3GxjsJcXp4vpRqh&X-Amz-Signature=6b1bf541891ef35cb8ae13c699d31cab33db6b03a2d529718fd2db7c29c14bac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
