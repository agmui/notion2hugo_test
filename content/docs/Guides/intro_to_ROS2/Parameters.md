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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVABCU7H%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T061052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfO2PHx2TJkJ3VJEVl1PBGooarlfdxp3nSAS9ktgUw9AIgXDSFl3jncO8kQQmqD0OWlb1vQd1gCMvUdsUDPcUwBy8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLpBewZBtcLY0yvGwSrcA9%2FPbJk0iZBj29aAa5f7mXk6erzMrJJKsk8ytWQImCUWutree64mLRCuf3lKsQfMs9Cx1h%2FPBI16h5NfS4C9smk5Gh0ZGnrIkXiwY28YVDffFsJM%2FYQTtlKc2f5YtxmbFmoXA9Afm79Mh1jV6qJVTkx5m%2FS7oFxSuyi4vwGCnDL2uqQDEXlVE18g8ASj%2Ff8lCJ91olFr8CWb4LxygYDSHtPaQJ%2FX3oyXHSYLph9PhDm%2ByeHFoeXhhe2NLgIsMeMcbLOg81U632mm4MY%2FTv32OOa4QkgkoUQmB4O6TjsvuWFyN%2Fu54kAD5tyFu3%2FZ3QK1mPzR0xqJh1tY6bESZZF8Cdu3f%2BBZlem1NGOJzbriHUEEIkw53OuvePkUkGNujtQgox7r%2BctYpyOHoKG5lHAa44LiMkYmuuN%2Bp2iKV%2FCKKhTSG7wLEGGpjGqqx31UwccvIED5AKqNWE7OmL%2Bl5DPckkxxx3hPBRV%2B3Ab6qCN2bRKxNtzKwayk7xfM5025kOTbTJo2z8v0YIFdV7ZumcYHDqrtFkcVDH9ekX1P%2BR2DFRMjkHPS3o0IaFnk0YyP1eEPH%2BF5ZdeO1e5d5n6JnGCqXB3zuQQxOKK6ZZt3K4K4C0DzMrKIV5jtyL3rDLsDMP%2F%2Fx78GOqUB3uXWmP9uSh4oFD9c0GwA64xhSYez2aWiTMQPrXQ8Zcsgu2hDtxsy8fybq%2B4Jlwah%2BjB8Fmbuf%2B%2FEcLxPPryQP36wLUc6vuq0faIyqlpJLXEEb0%2B%2B3cpJgdBJygds5KrWnvAIijEt9Yc6Gf8cuTCz4LDEETRH1mJdS5V7dn8kYHHOzFwH7jS83bnaTZlxoCWevLlkPpXy0SdIPk0qR4Xnbq8GqJC%2F&X-Amz-Signature=cb57be45425345bea3f7262fb09208b30b6358d5a4830c257afc272ecc12fa8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
