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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V7DBWWG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T190153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDennCYQUY3pmIJ%2BZlXTqjHvxT%2BcKiDnpBqRo9ySITvBwIgRw4Ykmv45wDX91I63kxpGjQQ97U8iXUlqV9%2FTBK0iycq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDID7blSlezt1jbZnkyrcA22ATCfXDebH05vcQUjofZLrTm3fKZUkIKFI4jNed7nSeVq0kXrOOOT2QZSaz4LEcgmLYJMdUCTp7mLd5lI4hyXz110LQQStXn%2BQIBcofXR3tKWLB%2FjIcjHMeKSbKAppwQst%2BfsBiPkC9TcEhCIP7lRB19d1I%2FCOShkTl4RLktgEXIo%2BkOkdGMXdvgff%2B%2BuX137kOP9HaN%2F29GArY%2FJl9hyDzmec%2BwVgwQNgcfT6B83CBOh7VirnQtxbZZkdLDLdWDDHXei0NOQRQewrjGeMYd2qtyhsrJLHM%2BOgxfvEd1OQX5ehfVts2TryDUxxu6d318T71knrKypiDsEktPulsj8IBn6kUFqqUOzTPftK19%2BbE6WZLgdQML5UWPwzvLoWRG026meRR3ho0XMCftDKMbmJNime4sLKy0p8aFzW01MhP1F9GLcAvZ%2BAGNCiZBTNddAdCxcSjd7BMHxZS6i697evUAd%2B1nZhXHTca6WN96P59bNoAhOlPoV2XyjjKO7GLelxfc0Oo9r9LIWUO3LybXWxhLi9xMCtOeN2UPCsNlFw%2BcLXx25RWW1ejMz8aBFGgndDxsCKr55xkjN9yJgrEzYUeidDearCDew5aWxE3%2BxKLhXpT%2FiQuilNY37rMI33%2F78GOqUBD9C3aF0AQEtigyUkTnWsDpiqKeL8kD9pI3yITG%2FFZO2BShfUPvZhXspHAZYCDJtyieLnL8yHdWXR5GKicIbd8qSw3SfKFf0PJP5h%2FRWjGbJ2v%2FYaAhvf4%2BzU2SSLFlZurmR6nudHZMsLA0SM%2FLBPPzvtYgGn02i%2F4q2csEMbFMW%2FrgbdSfWvjh7lyWMywy8f2FXiAoZmmzyvYnFPlROM8%2BJm%2FDXT&X-Amz-Signature=451231fc7e7f8cd6ba847bec6d0957af38e32358818fb1f613dfd4b768a5c408&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
