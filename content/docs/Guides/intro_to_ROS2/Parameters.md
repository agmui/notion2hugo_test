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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRN2OLIO%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCoFQkwALXo7Z1UJWtKPbTNjNaNU95b58BqsEw2YFmd1wIgTkmTKtmmfNv5y%2BwwiHnaTKmGvjLKPq9STr0%2FZhiHLCwqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVjhouTwXt5mqQceircA8ZndWbcJHZOGB81sbjrLusGboo%2F0ktin9481AXDOa%2FM4FDriLwvBFGrDr%2BC2hiffAuibrbr7c3hCCRAdP13Xg1v1aJymNtJPPYl4%2BpPxRULzg0%2Fsv%2FgAJ8xMdbo3QpT%2BVMaBsl1ujlq1pxQIpqNMFW6eTevjqsfmOSF%2BuqP7h82UEGq4H%2F42EeYcQv5olVTE9mnVbMTnAhL46Kbo0%2BzwSGTmPnBIKLBNclbFuvnAowkC8VdDcgVqK2DEEH3H8ftcLZHpdxV4tZu%2FVvTxszEeFHyQoXHGpR1jh6rd7EYhfdJnm1TOoxyw%2FdghfeXPTprQ3lMoKUimeDOsaW6jdmBJm2cj0flIKh3J1XpiMc2npsbM6SUowQQOLlSI2sEiV3dgNKep7idfcqPzwp1T4Rfw2QXoH3oeCXQrmdHxLKajRE9x%2BazTvym93rNtLpsqJcCswaO3UyFA7QblMezYSYGsQB6QvHfQW00kni2wgsZunBcNIqiv3xjk8IXpd9fOe2UQnp2eCxu%2F97zTN1NdZtMd5Pm8HH8nEIuy%2FpPUWH0zxdXxcBB4CIV0dEACSgruVbyMIDPKrHorJkMd2%2BBCGyU9s8qgHHw5kYay8tAMZaS9joprZ4BmGtjivHXApc6ML3k8b4GOqUBg0uyyJoaebKFZXOHtp13GQ%2Bp5HoGGJxc5Dy144wERRortwJLShh40cjXPlWmFUIZJ9uME%2B4tkm6AueZqD58CHDwbZIJ7nKDXx%2B5r0OFSJBFw3ZcoUNlRcVorwsLD0YCbPRFiJd7YZUhl%2FLpH5hb%2FbKf3no97Xj26y1iaTC0z39VzKIM7wpfhAPd24WLFIbSN%2Beh%2BAMEQpFfGCXEJ5%2Bfi5TMUFhvo&X-Amz-Signature=76d7121b7046568da1f988ad835469ff05f3454297eaa74b81c6eaaec80fbc14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
