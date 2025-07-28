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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5I6KEI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCd943H7RKMIhyR64Ycp4jrdYdGGZ0VCJh2ISrsF6QMzQIhAMp9qu6wphRPP4x6IDxVkH2SL0UJRWXu3eBX56aRpzANKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB398%2BS9q51atG1yoq3AOyIWQ2Jm7m9E09mWm9IzNqOo49CLecJ5vExoeLktbMiJU4k8W%2BjlLPuwMp26DnWBikYL2oj87Ta1VsPtpyZmhrB9iIZG6988zXYErSSp%2BK9HdzSwssrARs0cVPW1CPEaU9hngS3sLfswGiHFinuPzAV2aMK7Id7%2BAMwk0SzVCGcAvG%2Bg3kOSo8yvpBsZQduMO9oVh4V5pDnwH4OM1ASUR3cuK1nYPXh43lnOBBsXkQWdACi8ocy1oHD9s5BQ3xxlUCcUn6xLUNsj8oo8V9%2BmEbCswg5FWmKUwBfytwBp1RKZwzpAeFmAdYJgsSoToY5F0FwHuWb%2BOlLE3KsTTOri8EfYnFmd4OSZGUml5vxtD3OvyEbeq%2FbUB7DTDX8jKcI%2FOwkkw2%2FqtXx87o8ZSQbRtahxThUJZUvmoiN6%2Bhe8HEm%2FIYWns8RqcXtGfMm7%2Be1xTAQoTtLtd3j8kFqFnmmIv8ZjYFY51OaB7nNZ0MswIqpOJI%2BCV6GD%2BqaBoBm70IGhFARDESUw5DOQ660cP1wamRFcnXrftle6p8pkuO4nIkUD6u3RDQRjMer%2BfmscTud789yp6bJ5KMbNZ6kFtgQq0QtcB8xRAWo9rdGJCv7%2FYFo6Lo6vaxVSV05ZMyWTCGxpzEBjqkAbVZd9QUQB086%2FQMsfE1iB2uCH07pBu95vzpRGmlOpGbD5rakXOPPQPGpC0VMTGRoVWvfH%2Bo6WRYuIONsY1sCuvAVbHSvahD9QP3Nv5S39G6wo4O5Rfod6xs1BvsYiIoLT40lvUGlcEEWQ4UPPc%2FzSOgi8HjLPqpLoiwDwjQE4%2BzTcyyERyzV9q7URpIYiaYPN%2BKzbFbmxACvDg6UtkdH2frWk%2FE&X-Amz-Signature=f886283078f9279290543d52f0496c8c01f5322afbdfa7022936c722fe441ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
