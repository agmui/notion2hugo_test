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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHSL3LOY%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T081303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDvq9WwEyecDFOtVdKfAqUIz4JCfBh07q366pq4mnPf6wIgYK8oYZh84r%2Bgha9p7Wg0QH08rDLwG%2BwdjER%2F3JPeDNUqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjPv1HkLw2qi%2F4cMyrcA6YAx9l5Z6iahxkgBVyb4HKcupEXXiAtJ8li7k4WAQ4RzR2lhuLG%2B1d9M7lGL7JORGrjBWP95ZPStMKpfMEefJc5kSqoENJIghLCKBvVMKQ1kMGI%2Bnw3nJ5xw0lcfqV3tlyqCvcQHs%2FBhOnTuSTeY20mLLiWokeLpuAfqm8SuHJxrik08qcPJTWMu2rxkpC6pQ1t11%2BesHHZo0XxzlnIhylFePnckEB8L2xGXdfTtPDowQhOkTHOlAthGr1yIKvPG%2BAzvxuSuDk%2FXieYWygVmgExlVIZ1tVMtZPllECx9xkHur3PhUDvxk2oY9Q7cgc45EZIKY9HzLojaa2EtAFq5wbJS4F0ztyxMUsvDPQh1Xtfbq95vMb1nTtbVzBtHoL9fVyxaf1RTkJfM0vuDcgqB3Ch%2FgeSA3X0AZXHWcezJiiRXUiv0HGXwSMezuh6byZy7l8DJMVRkG73qLzPQExAO0Nqpk6nA%2BiiQySusIn4Y8kqGQde8AIlBZuk7Jb2Os9yzH%2F1SluJUz5JwLT4JSK06V%2Fv5yIUkiXHu43awHw0tsc2RSD5N5LDFW59hNzABIwSyetqS3RdGto7Jrcu4Aj3szKZJsCH%2F7czXgBiJiK3PIGXRWwbecD%2FIzS6xquMMOGHqsIGOqUBxL4oW3aeq3tmGTKbQgfPfWN4Opu4LaO4bl0LgrVsmD5JQDry65wRSvpirMA0ubzfNIfJSndhEC87bXZkLBEb7SRXN914DuvgLaBUKoqE40zOB9XMn%2BLePR11OZ6%2FQaUnL2QQI0xFGO%2Fknd6YX3DsYXQl5l0zkoBpiNZP3wamArT4zVhJGFpubZS9yn2470ZQXOzqd1tvbpn%2BoRnlAeuJfPX%2FlvLC&X-Amz-Signature=b84d15bc8c61d4e5b5c30cb5c75e40e5964b3c8429ee507366523d61b9f63db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
