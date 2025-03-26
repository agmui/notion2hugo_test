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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLF6UB7V%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T090901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNGnW9q6nVuc0EyB3bbrt256rI2qBGhUWHfLbKh0NUQwIhAK9cKb36UelI%2F%2Fkqwv5ETRtgkTJCK7dhyXC2qgez%2BlBNKv8DCCkQABoMNjM3NDIzMTgzODA1IgzSYSMCZpUdxcEhtikq3ANw9wShf6RBCLXH4TEr6qWv413j%2Fe6WsWJsXw2jhq0OIsSzt9ZX6IlUQUbj%2BWeER4bX3gUXCVkdMf4HQsgTBtMAj%2Bfw8jsn2sFWdfV6pjVGq1zhupLUQ0yKrxsDGjQmhpJZwLeblZf0z2N1YX%2FYoB1y6G5ka6w4dpGCIVE9y%2BlZ%2FuOLFWT3l7N39cUKT4HQEzTMrO6Af5puHz1xqPtusTZA7RHDHKyaoAd08yG9hJB5TynWdNdhK%2FPQi3TBdU2ge40MS%2BXY0D0t%2F%2BO4m%2BSuRZEqiNkuNIhriom3bzq1V9OUk6USFCkQTembCtJsDeIW9LX9MMk%2BgnINZU0u2J2hU6cq3DJt5WS2u%2FckPJllVw%2F9zOORnGpOUA6yszraaYXAzdVojIuq8%2BmuTZq4Hj%2BjSRlz2VD19C0NED3uddK37CbGycOH9AeMjn6ciSwtNJfBVYoJ02nGTeTWrGVlITAaTWHeZZiP%2FPiWnyuI7v6065o5MHHNUAiMXkKFVSjsYV%2BQ7Ewt3uOuopmwFuNACrZdyx7Y5Rj0rWvIoOgHaM0gura6S6gwL%2BR%2FpjWQYOGYk6STrJXWa%2FGLuCHlHFzhRzKTM61G85ng5itBeOV5HeVeo0D16qq5L%2FLWaP7NOm93ujCE7I6%2FBjqkAeadQQcQvwGJAJjQPei1BZ24F6Ob4webjUxepEEpR%2BqXDZFu2QnfEGr9ciaRsuX4c%2Fksbar9PKYeMFysqEp%2B6L5p5ADxggY1RKTSWSmVMUxr8Y2dgtRpCIYDXbVSCDJ8oMtgQ3j9saMznKzuONGkFOUQhZ75s2RX17Mykx%2FgbUUQ6ZQLU%2BI9YsMcuTgREQ2Gkq0yPbtoLfbaVLa1Pk30ka2Ht4Co&X-Amz-Signature=1d27b88d5ae34e0c5b4b102fbf3d5414b68e215ab79f17904c177b28950ef481&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
