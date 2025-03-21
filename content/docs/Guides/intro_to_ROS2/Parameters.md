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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YM3OSOC%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T050847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJIMEYCIQC0xOkcEqYWvt78qEZehh82Uio%2FsWkSrnI8wTpIqOuKRAIhALc7kHIa9E24%2B1%2BsHKuUsXMMISQ%2FYRrtuOIm4efMkxrgKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyex%2F5PBeEEHgU8J9Mq3AOjk6m4vG6zSFAi%2B7s2e%2BHPE9nUzzn551CKCNhAqed9dS2v2xqO2a%2BP%2Fh7hP%2FtC6UoxJU6Dfnzh7u5mcPWwnhsZpcA3sHeErpD9JRPsHfoRujykZEOYEXWnxKN08XZMQ7fuZWa%2BOTQDzcBtCGq33hK%2Fzi0jL5wRCBkvucl3x3fvmOh6pVjJiBJc9k5dxntCRETRCecYKC5CMJuu2855RZ9Vz6ho%2FUDU61YqhUdUmR%2FLAhIoXc5m6fxKHl1zwnt14OXFkbxRygEV1C6%2F7D%2Bk2iM4zMXmEsK%2BWNkGD%2FNRqTKUXQQ%2FoFsvpE%2FrnIORw4CDUGTN619w6OSg0kQoWF4sVNyd%2BrFzPbgmbvKVuuldxGk2tcXFT%2BK32MHFnXOzOIrdolTAdNg55rRwUcOz1nV4REqAHS0wrrevHe5w1gJu%2BphZhdEbnDVnyqkDmhX%2FoSQOecUYkrW4FARNCbFHKkj3%2FyG1oqfzDSwTtybmAY3Hb%2Box%2F1Luh2%2Fa6MOHBbMuEXWWWrs5eUHKEMsReL03wD8k5tn9CTdzTY622TbNOFXpW1M920z6x5U%2F%2BhRZjVQ5tAw0YC1QW8bPdovDJ1JxI3xHcl2kR5g18KGnrrdgdv1MjIQmDI6kmVz8xuxClgwpsjD32PO%2BBjqkAcCgE8u3GFEtpCnUig8hGIiQKSLgbs%2BROqzPFowrU26Z9YLfB14XId%2FWcuz%2Bw1eGN5dt8IyKRlX1q2mHdmLjBKGay51TFSi8qhF%2FSzr4cLuanA%2FARdB9V1macEffsUeTNK3AAg6WnCb1XZiVN%2BFUhASGG89%2B%2B83pHrjcLMgsG2VmDRBC2w08Z5mNWcY53ReRlua1twynvVJJ2ktxYngbc7NqV5CK&X-Amz-Signature=d70241c86639bbcfdac0fc5f400ca79f4472038652ca37c165938981e7ee7eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
