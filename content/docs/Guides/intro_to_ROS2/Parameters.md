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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7ZHUWTC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDK0OlcdXEfETA%2BsdI%2Bj4nTQZC3NGj5s53HE68%2FJY%2FR%2FAIhAILiQ98doqcuDM4J%2BkJTcN9fUI5ViB8JAxGym%2BTy9QDZKv8DCDoQABoMNjM3NDIzMTgzODA1IgwVbIPs%2BYAxz0xpfr8q3AMKntqSmpg9lZIBTZcPeD%2FthkIANU9hSyO2oUJkgbCihUcukagYF6hmVIaCMr67TssnM%2B0ezJt3yT2ggiJXYeR0A0%2FtMDi%2Fh1b4ZO0fu8mxDdCZpqcngq4XyFfnDxUnyvl5s9pZB1Y%2BeLWsxVNC7cPbDfzfWORAFsT6uxTUabpaIUlr4ljfkDexc%2F1HGrc5J5tqim7jmCWHujzSDgMNHO842P5OSd%2BDIHEX2Caenywc0%2BSd9jvqEtu7pelduiMWAZK4ZZbu67jF494bMJ3FZQHlnvMdTHWE1sSL7V4EGtT2vpiQDAtU0BHw%2FtfzvxHmNTfgGfD1iBHUyAzpFIVs2WUANJvlae6rwLTzHJo3tFRkt7EHBS8QSQZstIcc4fiQWb854NPAzb0X1sthlCneIROfpsUfG3QPGPlfn5CBqm9kKMszXPfGLsG59yZeFQznBJK4tw7tyrXU4l23Bp%2BMQLsghg%2Fi%2FcO11FXheyPReaspJFhe7dp%2B%2FkntbOGpO5%2BbxSSs3TJFT5puDptFX2i80pxTlS6QZX%2B3QDVZq8hwiiDUljzur7Iwsj8z%2F5wjs0rTJ%2By0R8d7kT0LTjFxTSRUoOlNsmaxQxL7L%2BbqJblEsalbQvzpO%2FmcynRJqmhxEzCByoPCBjqkAUX973d7WsRcl1KRokO9sZYQfErFihQiKEODm4iH4mnKLjFntmZAJHTXaDdvWwUeuxNGCkVsZKrsspwtbFooqAmGyhDkdBF5%2BodQlflhWY512OdS6hKwpTwaGaXv8zFTDHVFNv60fHvqCSytO6VQkJKO6o1NHVQ5BejCN05KfF%2BKYSihG6HzysrEp%2FQ4vmjUUk3a%2FFUQRuZNvHQqhjrAnz%2BUnV3i&X-Amz-Signature=0ad251a4c7ef09b1f2728a7c21a685404b53caa47557bdf9f846bef682ea5a49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
