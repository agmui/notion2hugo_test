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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQMBAWR7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcYHuw4zJx0qMIRSEiFODYITZsD4x4upCeXHeAHSQyUQIgTwjH9EQavrgU9IuDY3%2F3xdRKBGQn3Fe3DdBK8qpZHj8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAxXJC3rnUeex66s%2FircA4ZnccGQQWd%2FxjZ3YrntKoSB5zkFfnsQXTsXWGArw97saGu1nHvLgIMxhCh45Ir7X9%2FKJmxNd1uY9bpceE%2FTHtlkWz6IIAaQ3DLVYQLsf4DAhBF9xOdQ6ZUhEfD8m7FT50S%2BLoiaAsJ%2BamogCrwQmLuhXhlBnNl0VcILvPcE5JO4veXy8D5Un21H2Q5Fjyl%2BhqQeqi0PaXCD6NSdeRnp4JN2W5TS%2FlGPcmmr43sk7fXsbLakwc6U0tZ6ubRF9VN%2B%2F3SREgbC42Ny14PGnprYVFlK6xvr%2BR5HGWoOqzTR%2Fi6mbL0%2F0q38gR2adqTe3pi%2BwGQtZKwNrJx7lEeN3KY3ALwVyQJufhFRqbXFzcdtTG2IvNOChqZjP6rP5%2FabUWuVf%2Bj5ujc3i7NlMcrHPHXLhicvge5rxSg%2Beib6UPPIRwgPU7JgPzlYaygIz94mrAgfOh6saPiIHMqWuuFvfDxyypw5kCDcqTrJW3vFME2hH55deKMaNuolu396UfuxFZPjl3L6vQAx0Dng9ugQhZB9pxoQORLGNwLxi8dLIu7gQxoiY%2ByK1JvxQgZ2DpKWkEWSxWRxqnG3F0HcmVCUhgWIzge%2FqtKpS9jN4lYWzg7rqVpJXHe218ab0oAkLYOqMLWc78AGOqUBmcqtj5Ha8heZgJ3Bl8rMRZLU7pi306Rl%2Bxo1YQ7fE1FIFJjJNldHdygl37K74JaDksqSUZjW%2FrVpW%2B2SMIPWlYt1McRvlOBpVj3pYECYsj0MO%2BGhibwVuq3z2HI8pN8N3twskwa%2Fo9Q%2FVNjXiCw9phvO7MhwVPNRPkD11ABkAr4iJxJ2wLMPHHbdA75u4ANA4KbPQG%2FV%2Bb%2FYqB93eEqsFfi%2F4dri&X-Amz-Signature=db1dc475122de38b0d782e7d9957cf6633edd8150c0b13ef53b914cac99ee935&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
