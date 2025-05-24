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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MSUMQDA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDfjSbf3ZYo5WAMCFDmqdzKbpUke6%2Fjw0DYptT1WWBuAAIhAI522xkLIqg%2FY76huNDcT2m45alGfktfk3eBetsHW%2BwiKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxcxvu%2BQ3lXWyC%2Bx8Eq3ANsBpsrSSyHH2kYE1I0GAoz52kvBORibhLppNYj7MC5fVa5ibSdcPUQNbA%2BIlGEG%2B%2FgSx4gnIfoupqUHt9ykLElHM40OAiDqUYXAcia%2FCZCMhdEEXZKvH237wFHgbhZgc%2BhHylBq3%2BuNkZJUrdRamgp%2Fw3NA5Xw5OFkSZSHn7sxhsaHQOlb1FWj2W8lJvk%2Fn%2FlFn3FFy9lQP0wn9ZXegDo1IqHQ0%2Fxst%2F%2F13mHa4YuTRclbJlcCzWteNX2PkjXRDaIexkq%2F5q7QxTZ2OT8IOOXSLJ76AX%2FDyqUQ8e1S5stp273OJ2RhB6mW7a82HSwl4QE0nYymvBz5IY748QHWw%2FKjmANhhZ6gTbqk2k1poAfOKNzDAXsXZEaY6Bnu9gHNWc244fKMO4EpEf5ocT9TWMPO9BwfmYQK0ebMktP1omKTBP4T%2F%2FgszF9ActTkA5wRCtf8egQmjwRQF4Sbb4dpOaVKx02F0D9Y7iH8ZtNtcII2OlN9f%2B5384t8TxT9fEiGVz6RS1FHrFVm2M1RF4SuGVwF%2Bqmiq08moZ4zsDC7pZzPHd23Cx3sH9scoevM4d%2B6QMp3%2B2pOF2NDLbdW9ln11M1xsTHzs3%2Bqup9fNwH7ypL%2Bgk2OzZYqRL1rUKK0NjDu98TBBjqkARG2YimMvp955fvHJYFLGLGEC3Wo1Vdr3bCvtKQEoXKg3KtpHvkT0VG7nV4ok0cNBgujug8saJGEZJaCu19oaq%2F7IPfM2ZNkQBkObTnVVq4Euk2ZD%2FYyXtO6q6TKUzjQGG2eSLUHZ59gPtyJNQraWuJpi6Lnulk3NX3FaIJNs3OB%2BiT5IGAaVCPE4fJQvu7KeWFIU4Vr1wXSKiLytHepFvk0Pboy&X-Amz-Signature=327e50c131d9821a453d8f172a544463a8d5236da774ed41234c3f825e373df1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
