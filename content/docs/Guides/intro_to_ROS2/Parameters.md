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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGZLTAK%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1EQ4aq2Yie%2FwXx0Fq88M55U4aexEshmsuxuqfRUmywAiEAtmyd%2FkjjooZwK4Ntrhh2gT1HgmyjxpMCG%2B3806qQpZwqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FoZK6TERRs7zWC%2BSrcA2WAhDz8c4kUQ7JOpjexIvTuzK5kcF%2BjXdu6UnRMfVsNOwD13BUeal2ZpUgli8ftCPYcLhdmOdWRB6MHC0Pjj0pPKIetowgRJFtwyHgeAeDzrdrUxykh2b4t%2Bvkibv1xt1s4igFXA0VUzvuCstcH9iWpWknFi7OW4zddGqzcekMZB1xmH5kmEZvsxXlNRR6hFqTbdWHzbI30LCNwvvPHjvuFI9KzqNNzzysetty1oKVHH%2FRh9kjUs6gw3HHWmPSklp7X5bZg8FThyjVPuFiIzsRacNB4VK%2FF3QNeHEYX7FNUr%2F%2BviMr%2FYL4%2BR6cicag7eFAZ0QWFppn%2BvbGp3c1PE9SF6%2B%2FmGRFgt1uSuSLkRhxHlSKl6EDB7MwenQNToXcSXrQeyt97a%2F9HK3WFeocjoRdKHoSWe1oASGjN7lj0Ek9eD0jbfYw5w2Ys4PtBOH9HXGcv3Jha905s6v0HvmIinKbE2UdS38So40G9gBwr%2Fii7CHKlC6D0gJTz2MeLvaCNFdcVwOq21F25sESmTM%2FkuRAaF%2FuRSocHY4Ymowwud1olGGN5lQb%2B%2BNkYcLRAoPUTyfr9TrQegNPxgCusUKAUia2MA%2FG212pp1Exo6Qc6BRITk%2BkyDX1GUjMz6zTAMP6j1cIGOqUBHQpTzEtvpJFvuyGPeITmAsf1HYROf2dTl%2BCVKUurOpQWrCU7xnIYGpi5rkkzpxVV0MghcRpKvuw6d9rd50naIRGkLIYQhA8MEW%2FpCh02Zk5IqdXPCjqdkTIJ8iFmNqCnNEgOzrzO7owzjT3tVtXotzVxWU8euAb0qPbLa4XmaHLtTGoIonNORQVsmqAcXSYN5Xndzffzk89%2FzSxY%2F%2FUXcepiHdlC&X-Amz-Signature=82d884229b03b6bee92e0f5f5ee39fe6ff123f07eab33982225c43e912d59624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
