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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XPHRNCQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfTLib8BcPWFZstPt9YP7sBNv924XYjXTiTdG0tKoNwAIhAPigmvyYw%2FkW5mOcHaYelaRqf8%2BiYSze0qA2a1G6UfMUKv8DCDAQABoMNjM3NDIzMTgzODA1IgwV5Tsn8R%2F10Rt6dsEq3APT9QWLq9m3sx0HPD3k33BZ7hdGVfT5KUSdq4vxGYxa5IKOAJLmaMeqA8o8NvWcs0Tdbw%2FkmtnKmvckHiCd5d%2BxbOUY9mffCPl%2B1KcSV%2Fvwpmfcitoa4KyGF%2FkOvrZTqkd%2BMxssnRZ01FUKH%2Bd%2BazNxX3ZU9JXRx6I52DanhzIfea4hBveQFxSDBqRcA4wfPbn8jR%2BMh4sgU7PmEFIXgdE8%2FZcCVVLHQe7qcUpi9vQbsA%2FcCt9zNiyuJCQB4Qdb1cvXCtU1pj5SXciGSRCpy5L2emcXtCU0DFP56M0ajdo1e8kDmJzRGzvQY2WKzhYUgvGScgJziWe1uXQ6k6MfOX%2F%2FoptJO1cVTH6HV7Mzi%2FqGtnpQ4TXKPIHjhFMXnM6vITqYVjT2DxrU3APauQHTvCbpCuo69cCVnX122zH92t5fWWUbhajzu6wtVmsVI788qs372qanXAHlXnLGHJlXtJU3pK16uPfNagU4irnWqtfwYPKfXwyjPLdjyDCu%2FCBhMCZyqmPSuu3bKAMazSJaC5sCA5PDQ9uumFzS7IrNkPEI5crmZND3SsOA5miN%2Fs7JjllUkQDk3CBBlVtQjnrOpSAvQGvG1LxN3ZnzkOR6Q3MA7L1FhIb64gMYO5esOTDBsePABjqkAZ%2Fbp4hFy1BUBixtPW7hydCWR7xM4Y6QtXKxa5LxwinqYVmzm9zUe6nCNfgjcEjxy76qv5Oua3KyF0ReYR1I1RTEccV%2BrIPoDlUN0PqDt3m7niwNEAX1Ay508rZCBmN01%2BiuQHX5%2BThuc%2BDmaPIqMiTXzpJlVSVoJZ2wSPtq77Xt2WhHjZcgZPpTmZstOw44FkNRDOtfMlMV6arph06vlQpXb0tc&X-Amz-Signature=89d58747666de96c230de0eb7ca5177872cfc7ac957eb3dc14aea225d30d5d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
