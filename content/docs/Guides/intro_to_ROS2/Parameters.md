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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVVVJPF%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC3sh7EsRWM31A2Al%2BKTHrHnBgwb8%2FMSxJtCZlLgAUymQIgDOBIx1CINQ6zLZsfFvEfAHDI21DyVPyWCZ7ScRqTBmgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLQXpxlVnIOpbR2CCrcA6HBk57aFlXAIAkeZfJGsBrudTmmNYlPTtJwVyQuY6VViJzIDfVhZM3on4QjMJpKEJWhgvxeqxvqX8GeePMjeQxw6T01Vd%2B%2BZG5EMmoh6%2F8iQofvL%2BgXfmrTCVO2nu9aphg%2BIc15Io2sp2W5ADrkn7exoBfg9DMuR0lc2rpp%2BLh6xA0b4V1u%2BtXFoiC2odeEYRu2giAZ%2Bm2rYwN81wHCLsG02xM4t9EVeW%2FMgCeOOn2zwZERDxKOos59iXRoSlHqjZiQlFX0MqmIwjYyvQ07jMIvvZBuOC6mdZ9uWbg1kbLL2lcZWtRw9LgC1D0ojbXm7IMZoqhyYDkrIWLPgE2bxaFjw%2Ftab8VcNVrIikGsRBAD3cfL9X13pNo6x9InGX8Pt65LBSxYYNwRMNWGnLLa7VLUiBjdgrsaR8Z23AHBQj4lAHF7SZehSx9L2l5F7Dvm10a9NTBe%2BUgO8ArKLRpxVAjGuAipa0YAmJ7qg%2BfuKPRJH06Nl5Z7tcVxK9lnFb6WPaWWoO2HAlOYxuT1A%2B9Xp5jIoTOKQm886cocXmMJNdDEYtqk%2BM62eHCqWNPfO0ZrmI9vcKVpyubXnjqfels%2FpCHEKAFng6N%2F8qxBj7FzLLIwsyyiSB2MYcKBm%2BvYMInI0MQGOqUBc%2BhA5XR3hNkJ2p%2FjYf9MY2iAp678p8G3jRJSHZr7oFA3fqSJX4kVoMdJMJBxrk%2ByN4nP70SAk%2BXE3VBObFufmP5YmzB4EJRFjl1jaDcj%2F6yw4mA25IHWGGVsPkYyCNBME3uR98qLicbKKE6kC3Okw29Jha60UsMdSSBq0%2BrrjoLJ6kJ6aWcjfhadA%2FYQiaxJF1b4fsNBHaClfwlDoLUjoH8lJGus&X-Amz-Signature=adf96c5e95b3ce410a5ef679a972ad704276a48d782d90def71901c68fc9e8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
