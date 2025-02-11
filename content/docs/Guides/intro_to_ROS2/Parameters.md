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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJHKVM7%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZa4PT0bPhkAgypiK2XlOS1s0tUUvilIeeg5nn8begZgIgeoGl%2BVOw72bfGtMgARF%2BBB4n7fKa6OTnYyeqTHGIy0UqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCUcOWeVXd78Ln0tircA8BmdHX7CmSLGhp2%2B2IasrWdY%2BGK8CNahJfnpiBkmDtAqUYkDOzVO8N4O5TJNFoC4%2BpjH5GT0N2NhfvOilNY53W4XH9Q4OgmJTvxugoQ0hU53a7fudtHVo6Qo7VyuVKhw5HQCg0XleYY%2FGKlqYvsk0tLCKejKLGEskaPWd%2BMtUmOV5SdjA%2BrDoBimSR2p2jJ33HDAc8xexHCD4mDREyjdlhbA4jDeHaDDV8sajyN2%2FrGdcoqMJTLk54RfGxkT5uYtv3rE%2BRq6XQbih180pTaENgJLUurCaqHRDj%2Fra1%2FqD1Fr3c%2FWtLFV8dO%2B6EyUN83kO0HYnU%2FFhDYx4%2BJP8VPj%2B%2FkGsuLEzNwH8wmTf6CRO8QMIo%2FAph4neON485xfZKJBITDrVozUZY9o7WBYhl5KNaWwbOSk6dsuSVyGgIw1CNXFyFBQ2sPoBPwa%2Fcm4CI%2Bw8dC8xwuVfBRS7KGtGhy0hCC02emBIM41vza4erWHUNNtiVwFY1EbnLCiFnDtRWp0C57LAVsEFp2z4ovUfX55vEdwjD2Fl4ik7ZLEkFsdWcNxZ8HEylBDy5TmcnWKrSzMBPj8qBkrqaQ8tNKhUdRTAQn29%2BT5pyO4%2BwfGJL8ctYi6SJiG3spBzEXJk41MN2Srr0GOqUBKLiKqkCFdzOvtYX2g6nVVggM3A6injdHWnDRo%2Fba93r09r8EiCKOrLiFxa5OJe2tZ6Zw7YizfgGyNRQ%2BGfK4MwMprgcw3myBNP6QmG39zhHj5ybDzu6S5rjSLzP7%2FgGsYUWpB5ke0WWVZ%2BDcyhtV%2BbJZEXfa0qCRHCpCMwjwRi8QfPWEjEZ7z08xUhI1f7uslunjbt2CHw6ySXyKlKZ4fefvTZd4&X-Amz-Signature=32df16eeb1d5f5aa5d942435b233f2a465c8f036af76fbb60ac08871e1bab1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
