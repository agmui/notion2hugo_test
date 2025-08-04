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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XQPRVGE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQC1lDH7Dr9wuTuLamDdVqjNC1VybcknO4tkNBU%2BIsxR5wIhAPyKJUF4S7aSHFd321Krv%2Bi4nQhFYeOUXwdfpVP91SKcKv8DCEQQABoMNjM3NDIzMTgzODA1IgwaLUkNMYt5lDa%2FHUYq3APdVwf2AYcmX%2B%2FLgfaiXBIWr7W1oke9Sw5oZG%2FupaP3DNiv67DpCGhEPY2FgV0YggbrGIRwCf7i4WuPqj2JFlP65ZDmCpVFkCITGYmsmaq1U%2BwSVnHnCasP7WI4YNVshaRFUIUZ7pMkAkq4C6p2%2BTzOsnHrIE%2BftoM5EKJZBtb195K2eCIBarRKDaXZziNfGDnuPWQzRCIz1%2BgwEsO8HKmWzkgaGtzF%2Fw8IywpFWsKJm1PisBZCP5kwjsJq0bDrWs%2BGL8XTQvfGOlGRrGMG76If90ATmaHY1PQ9T7bx5v8xX9YmIvymnw3EcysC9xe5dP%2BYh1JaZ86soJpKD4a6y6NuMi782qMRw7xFREFR68DHwOo%2FeJl%2F5ytkHEJME2vRUgliF%2BTacqRzt%2BIQRocbJcX2ZnD1CWtCnvcRWwxvIQXj64nUqEX74miR5gFnChvbag%2FQVjIuqPSOa8GPt4TYWS58b9lilar3WaZDWsmqfrNj7yWiZEtX0Fzd8M00PmPFzg4b4cpnYPS4Ytpm%2BX%2BU3I24heXDbnJlg7seNAc2Rk9kCNPtVIN%2FdYCMa2Hg8Qk3ufiQ%2Bz0eTWllQI03xRkb4lK95k2cOmmA1BTwbFjFzBtrocBQX%2F%2BFku5HQfqdmjCcp8LEBjqkAcoGcwwiutackDZDe8mN76a23DIS24rFda1FxeDOq06H%2Fx7TGONVAbgwM5kOJbXA7iCrCHx8ZQywcolGtBXjWQeWaOz2HeME5wR2p9Tepf8KJPkpYMIqmqR1F7zvyBVXomWw%2Fj1R7PH%2BYyE3Fok%2BNxBw%2BYPImTwRoe29LQ%2F9NdGrF6rjxIzEVm8SM9bdj2E9yDpiExuC4XchFObhgjKUokz3aPR5&X-Amz-Signature=f8b48974e7ff2b06f0bdbc5bc0648ecfdf4ba618bac32363eab41881936f9faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
