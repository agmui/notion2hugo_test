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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RDJ2RTN%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCICcZDTonqIjRne0YjEMTxLwKXlLyFnbZsGpY9KX81tExAiEAredvXvjqihPPoB5sY%2BdiliHnYVpTt%2BkdojRnRGY6lCkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJEhdPAfyIPmopi4WyrcAxFFD%2FNXlZzsdYSj5xJFjR%2Fi2tu5WdRi4Tztz%2FkjxpWZK6iRLNKGNJoqPdb426pIFd7V%2FInjjwIswCEDQTTe3uGmGqlIOVATykIdRWNPxqfeY0v0StPc5%2B%2Bs7v1m30ib1cJPt9dnAU2mE%2BSvNSNuEfRJwR5HHLREZGcq2ZT8JzD6%2Fo8wFShHBNncFtLJuB7R4tA4l3Emt4RIejYn4AZxnH53sPDkHDpBwqeLc2mn44DCePZr2v8xhSF%2FJEOgm79%2BkgBYjtaJ%2FioU4HMyvqH4by4uLHVkPyjTA8BlWvfOOu8eiHHkSgXH6Fyoi%2BAmjuhbsQs068kxEXzcCHOX2DyA6ZqIzTWPybnEbjDPCb3CGKJdtbpvq6ZLuJSW%2BhJmDdTVdGSk6UQVpCnWFbuzKC1LzNaglItzD9RdlKGZPlMDU8ohC4pMkeDUUkwmSXpqtabnbN1fAN8MStAIQ5sk01M1Hm5FCkXpxpQ3OkGg%2FFFGRWa2vkxzrZbxnbVQEQ3FxnssVn6VRyoH%2FKFoF57JvTxcwNi07etynEO%2B9700grzFSmXaDcT9zdKMiM2at5yqUywObIkZpZ2rNsf824wZVD5OlxTjlqhYDXQo8NG%2FDPWWUgjrbk%2B8%2Bc%2FX4aVRX6CoMImVhb0GOqUB8uOYwOFmCEU%2FuOccWEFjAEW8gXC5olACNgvjg6iYk6ALk9UpToolrEl60iDU2r6fLCaMqm0ZNPMDld3hOK8%2BwNZbasdaSJD%2ByxrNzykCGLJVFttgc7mNz4gdPq%2BYbd%2B%2FGJHlLIm3a8kcP%2FtJBYIBrDZ85YYcc7YdNHYnV79c%2BKMEOZdqO4xTL4wZn5XrKNIB7Xgfl5LGbVshR8kffxVjfxSFcQQ0&X-Amz-Signature=41ef6443968d11100740be7115d14bd4b9e6b5314862438944ac9b35329104fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
