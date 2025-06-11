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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4FBJJ2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Q%2FHbLaVlzrqzLQO97%2B58b8gprXj%2B0aWSAo03QY4uagIhAPm7%2BV%2BeomjrT2ptXM%2F4GN2oR%2B7SFrT%2Ff1v8%2F5ppa0B9KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZgaWu%2BaLM4pYfC5Aq3AOBWAdhJU5SMH7puknPPcwCwivjIBSxHMkmsE%2FVd45o%2FeP75VyoNTmll%2B47ci78IqYiB57XbIO%2Ba64WSRgbYvRKyzgpr6A8LPH6Oqbj6ZemBV1I0l63FiHQkCMFZIG4WkguBksKqj3TPb5bt8e1zZf%2F0xBdYy2UHUDVJZQXr0v42m6T4oV4E7zKLHMBbze4LsoTHourZvHTu9WOzVJPB6AJYb9NGE7%2FYkfkHv9a3dTbaPDlfSX8M7p0cmnhZtm%2B09Gw3ARp2eWSEAwWh60ZM52g9aWni8A%2FTf%2FyzYcps20A9a9bHwi9ce2GlYrFLlqVXuzuh52qISmbr8sY8Zdrq3HSdwkXxKad7zLxPsr8FBfLcDJ55h3NklwjsLyQYOi55C6QcFyBTNrJ%2F9ekVzMHlz5TbVzMlTCJhHP3QfMAy51RBp5pv1%2FqC%2FeTAlfGbD%2B2gqHWgvS8e75HqLlEYi%2Fg3SqcGsXaWv81eeUxvz%2FNd1vomVprf2LiX5Ru47cndR3wASeOZGk2uBpOULCWSywDLBr2nTrR4ll2ueZaftYsPk4HwsLRSa0uKhDJHSkFXY5Bb0HkG4q17%2F24ByoM46ehPDVxumeWgt01KTZpmSjTcflZHCUGMmVPUshXHUwZ8TC7lqTCBjqkAY1c6K1fTRuFXm3JpEMMomotDYBqItsFedPqpAhgf6SnoPojMeSII3pHZQrOhs%2FjwOSoFSgoEGghLyDiWiobYrTrC2vpE71JfpTG5IpmzjrDe1MGAmFN8sa7bl0fzY2nwt9mgOcbiQAujn%2Fv9oBjxZR4VFlMwaqRjEVnWEAI6Dn%2BCiEvqwhvn59LBMFz4979RhC3O5jiEbLEe1vRocsOM9dPSIXH&X-Amz-Signature=cb0af70df205c1b729a25e075378c567f9f75ebac4515f48a66783d39e98ade9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
