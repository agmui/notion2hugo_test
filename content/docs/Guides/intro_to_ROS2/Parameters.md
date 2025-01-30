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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKKS673O%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIyuTtHsNQIg2KgHogfrPffEulrhsGyWX4PmGE8HObQIgEAcJoNEWX%2Fenwrq%2B75FBi8Mives3ZK0t7I4toZjH%2BGoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNILSY6coO0lHWs2ySrcAzU6Gw25jDrPw6L8ewWLdWRb0rmjb9n2LJjQ5OCg0%2Bzytapu%2BkuAd3mZd3R%2BhV1%2BENr43eOL91WXRxRV76UcNGBkwXyg6AJXub6z42CBIujHZ6vr1rUoQCMpbsgv8HV8rgE%2By%2B5s0G0CJ3pZbl%2BNwTvoa5TquFDpjBk%2BcaJDe%2FgnxdhBwyYDbRturv4bcxVQJu7ERWTQEHAY5FsuzolYOWL1GcvTYXeKSTucB16WIZ4c3h4l7GeE2aeWYHn2EWKClAo%2Bm9dyWAzil%2BgQfxzCRgg1pAVPUDofwl5N%2FYVgC9ZlwFlkN8q%2F0bHjtdGg2hq4O%2BDZgArjTL7kePQZivOhW8GgZE1b07S7SbXY5lptbFyK%2BqAGFcWl80SGFVYbePTCgHbcVXLj9l3KSm7q60JoOyQ7WUrqZ2Mu6VBy8smHmzbO9BJsI8XB54ObPxDynSKOqMY4BJ9Pk7hA1Kwb2cwmqY85v3tZbijSoTnj2XJmRFEIzZo66XHgL9RzEWF3lCQF%2FZbbeJp98FurffbEabaXpajdqDdTzXiA5eL3TTFVUdsocahTd3JW59geVeNXmGW16b3JkO%2FJH1cKz8lLK8qH0IwUd80PJjJvTP3bMRJwXSQLCtuPvu3%2FOiolQ%2BYaMO%2FY7rwGOqUBrWIo4MTdhI0aBjUWklerXAmNS5247k%2BCph1u4Id9NuYuXeYaxpRoVRNsmco4IWqo%2F%2Bo9sPdpqnXoOvSdhzlR5mKO78%2Bj5ZILUYJdxv4obS9PGccAxuM8AHxCcsrLhIsHtuWznMJDKNMHO4Jme9WQP9B3pgBN%2FO5CJXopWRN3zgLNxXqx8JMy2zfk7%2Bybx%2F08OWoXX4MTxYrdg9ZwCJU1WG4I7Xix&X-Amz-Signature=f55a4b9681c67f2f30d4778cacae6c77444b17fb9209aefd691aea9faa9bb347&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
