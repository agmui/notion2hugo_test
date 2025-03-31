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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DXLXONG%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEoBNCc8L%2BrE4locr7MiAN%2F47kc2pUZaLxSg5wFgEAlXAiEAwzHkPx4fKvxI6urrE8QQVzMtavLMuCkxFlA7ZNdna7UqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2R7QhTt4DJcOwDVCrcAw0WunBwYCU%2BlPTNz9%2FEFlb2RzZON9RnHnXTIYmByHs4opa270nnQMspvpm%2FiAGVdQCKBYNPgezCBBA%2FUPB37XSbWruOce%2FfeerP0I4FtOGBetLnuhexLC5df3aDv659zHCXDuV1HQdNI2qJaP%2BI8mpyYhYHh0VLqjYZOU5090QZ9nK9dcSlXgOuMzSHc%2BYwHQy1OwJB4gqyDexPN7Azs7cZSqa%2F4vbMAM7JrkKULA0pg%2FtD2rKp4uHu%2BsGfY4IsBHAfYB4Zmr7loUvIiP%2BstvqMOJ1fctcwz1W1yo7cFNPqLHqzAgKOe4YkYMFirGu88AYUfGAL6YlE6mwP5VPLPl%2FAAKfL26b3OBC73ei0%2F5k%2FhQS6%2F7fayL5eHwqEkvvaYoW8cdQlB72QTGAsKWOTiqa8q8zTA097AQiUQ1DULB4ioefpSDcHmOUoRMUe62keQw6rTotZqw%2F7iV8sEpotTTU86Tro5OIBg50PWnvCWudePCYRVcaTfATRpUVG1UvefcjKHU4A%2FrbEnlGp8pWULS%2Br7rsyi3I9NfMkYRUUgeh5Qoe7xbCjife6c54mAcUjJ1riUDa7qaLg8u0loA27zOnbe%2FSWHOQyjJsUsC%2F9NHCcksa%2BUJ0xhIsYJZX2MJmvqL8GOqUBaK6jYQMa%2FbbKwu6v4DwIgQZBj4ZwwpnqhtFVAAeY%2FS1r1uDAEgjxZiQIs7AeAgH8fZuB7fZeTdIQvK59QIiPTa3albzRYR2txlxDFVEF9VGzTdQ8QwRlv4RpUra3u%2FJAXjG0skaJbcuYeDVmol0to53USi%2Bs77pZtAyE7S1VrylRMyHtM5qOp3za2Zv4WtscAfos6x2wVlSBp%2FGU3HNrJh7Dik7Q&X-Amz-Signature=af6bd6a2d6585002a1abe537ab080b9073a7f3e4f9eb91e6a14d061df069ec3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
