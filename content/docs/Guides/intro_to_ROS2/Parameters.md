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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLNLOQR%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnkCnUL5H37uKyyWR7l7Zp4hYHOmdXklCNusQQ1mm0eAiBFUPigrMGicA5OGNS9eyfx5bjFBIfsIartVKIivhfEpCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMimAss2Qvnk1CqktHKtwDEEpeUKTT7h1NIi%2FKOt4V6HASxxa%2BcGofZE6JE8G%2BWFsNQoVwN6h40U6hlZ9S2MAfmNt2urLFbbuP%2FpA2%2FbPDjqoST1i8fEwnWQ2P77YJqo6uursGXKJQLkzA%2FLCuWYdAumTLr8Cs0wEkA6RPobqQcb4pkh7Mr757d%2BEiElKnn1GJrL5BV1Lc9fst4Hlf5pI%2BIWO70423neFGuBPC1OhACG%2BhNCCtlrOpkormH8Ic7XB58v1tDhffCzUhAslVd6WEuJDHwo9fWl%2BkzwnUJNV%2Flk9DKe%2BizGu6qN%2FTFQWSZLqsX1si0pVIPJipJCig8Y%2FA1nbt%2FHnmWGihlBT5XxsEfJT8SRy2hhOXndFUKQIQ7b6FPyl%2FceTR%2F0wLGcw8ohhGVM6IYUPvBAFC6oyjiXf9G2BhlXBpdZMX6Fbj7oNkzbBR98wE%2FgN9aodkbdZj4OmANI4mWcRyaYQqdLlk0pnO4We4Bpn2J7JaQlKMj5jHFiao6Uzvm4fng830Xkem40%2FE%2FM7yhFWnih4TdWYUllrDnSNMc7pA%2FtHmBYo1PHUFyNGoA4Ord2NGOHWVFpuDbYZVwSky9O7VAPafQ3ZEm9Td9Ph8bbCORCQuvtRDvw27YS3HThSbDaNB3v74Ow4wmv%2FzwAY6pgGC2P1R6%2Bon5gf%2Feut2agJdOun9eCAS5hTLYtGpCMiHwn3YFlf1bxepsBYjX3%2Fd1PY%2By1TbelNm5sfBzOO7e01TOQlwvaZ6a6sA2rGjlaSD8AhQ9JAyXHTplBoZ28%2BpC1DTkWq2wySKVFDBlib7q6VETAPXvd5Qd%2BBZc4AA%2BtMBIBSqEpZeXBCWfnQfm4gvXJmWpSgW%2BzD9RRST6a2M3XjVWLMzhfhi&X-Amz-Signature=9b3cf48c64163486ca375435c5314500375cde7435a86ec441e304633b406003&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
