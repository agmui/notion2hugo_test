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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDUMZG3X%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T041222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQCKxedBJrARlKvAk33LFEBCtxQ50wT9fH8QyBVdOUPjqwIgf3UmGTlp6MQYVW5m2rEvKq%2BUSUzHp8bwB5U2ZfaiGm8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBRR%2B6kfKK7RIr%2FovyrcAyLwsg6MbnoiNmmX3RqD6zsc0n3%2Bxge4gtKa65r2DGvVAb%2Bn0X6Gj0Bo%2Fooyi%2Bw7I1jCTTRc1eHlBx2Yh90aH%2FPE4CdpPAxl2RhLSmwftEF77qOpD9JRIFcIVBGLKg%2FEAWSa%2BfKCweMgdaDdZF2LLAM%2FVkgtm5vr8zF3COxcCF4r0hqsOXNj3wAS6BFdouko4tcSWVxUxXV4fIgWzd7bYQr4JDJoZSRGIM4zfSpIcVqZYkgr8PmyzKtPgOpKMwl0ULAncXkPTskYwl1YN6i69LbX04iqoMKJEFNf6CqBoMd%2F4oYk4VtbQAZWqYjCy%2FTCWmsPR%2FzCbdzl7Z7k7egcmPElvlztcEnvv5aYFIHZ9SeheW1YDaw6c7mVcBDF6fAb4m5WyyAbQmmuUNeYeuTkYBv%2FJL7lLuggn6%2FenaYVcePYWItL4eRcE1cabQ7iydaEKmJjh9aOWI%2BeymWCuSZ3qhj3vjA1si%2B%2FWY05q6utorv7DJB4kvoEWdvdS6aPCxnKQ7FbpPc4dbep%2B71rh%2FR%2FkJtIpwufww4w5Z9OcD3j02Vk6FMBmSSoq7nIdDMLo0xqlT3ImIF%2Fie5rPRkirXbQ8GAAgRgivSwSADI794O60FtvQpRl99fHBfOeuhPFMKXSlcEGOqUBYZKTxVu5XmqcCLTLvTFxN9%2F%2Fl2etdWn9Uyz3kFwhEHpXleum4t3SIwWVcb7xDWPi8cPrjMxBY1fNCL3U%2BZTk51Hs%2Fi4WFocqtBiktxNRoh9VqWZckxaC5o7zVdbkdNSOVRK2pP3Q28e6tCvJoDvzxzpfe3b2zeUzhlSSOSrtNcu1qIO12Z1RVHHfDzRcokL5ijEeqEPpZAsCDslLHY7ucvtMTBiB&X-Amz-Signature=59dbed0101b55b4097b60dfab084f1ab707e70ce4e892feb4bf6ef6b27024e18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
