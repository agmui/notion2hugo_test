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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XREBERT%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T160917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDchp18umCAxwJXvQsS1a%2Bim0NIDkiTAKZArFDUIZ48EwIgSVPOzgMVKxNfy3TJOzNwrGcevvkKP3Z66B6k3XjGnFgqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMyIX2WWJ1i2azOzTyrcAwrW%2FeNPkhteuiC8pkrKnC0oRNrI9M8rLzuMB6zsD8JnjJO53yUyogiuCAbrSxZMyFY9CO%2FAECRUzx0nm1kHWZDz%2FVwL%2B2AmPdlzGBoMBQhOwoMGQcnKCrBFEdHttDg7DgyKN2z1%2FcJw5UxmkmHiRFyGl4wJnO3eBwFsKpU6BZhZ%2FtG%2BsCCxXyrsPthpKEyHWQuyLVB51Pydn474%2B6jEorS3ylFoin1zDLyrRk7QvcmBPYELOUWeOtB1n7eEhFW4rGhEkQWQs8JoQOuDR5nOyGIyn6ThBhnE9maRlrMqLewTGiOfD3r6%2FrQ1oX52KSkdQ5wHMYXb1IsNiFBGOpuHOGNxtPe04Tu1GlOsjagxM1dPfcBcskOsJY49mtotx0xJo%2BbYFS87jd3Nj6g2hRRNC8oI9RCcKZXRZpgq9wlQg017bxPjr8cMe8cgjhiFa6DEFYg5hLc5%2BEID%2BhvGRPH2U3I20dDqufEBM%2BGByY7SPEnA%2BcPjtNViWZhOIFy2veVWkduDmDG1PYJ%2Fu%2FAOEpcc5vE73eIHigDKYOIBy%2B%2BLWQ0JG%2BVi1PtAksc6kMtKi0v0VTF18NSvYh2Pef%2FRrZLj1ifYnI69q0gjNK60xQ8bNJHKU3mkG%2FNSGpj7uvnrMIDVgsEGOqUBQsgDtS2KC4YHDTFt%2Fv1peRrxMr5dHwxlA3g0x0s7vJ9ezfQ3qjB6%2BKaKn9VfRg4VRZnNiMFCUwz9v0W6%2F1khuvdhyATP1hxbBXgSmXrrFFJUctWRoLC9WrfTIoTcJUKipDbNx0%2Ffpzho39juaR6QuedLXh7CxYYnnSAk9FJu%2BLgX0kB9thr5ufbRTykl054wzApXmpjrcfe5D6nMbdtt%2F1sPWbce&X-Amz-Signature=76be28d77e3e1961d7ec9f9499bfb85bb61c9e7fba0b5406638bb538cad1cdd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
