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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644LTWGLW%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T070933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDE1EeY0QGbIBB%2B9Ny%2FfMvQWiQTlTmpBAwWwDzPICCiBAIhAIJE0wUmQNbXUt%2BOS0Y%2FkKYjj2dqNH4RN48CDyuGh984KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwci0Q4xMkymuPUqt0q3AMaTN%2FI7WkTIMHOoLKTOlPgUJC5Nw5%2BEsmUuHsW%2B5lbEHJDA4YmF92MNs9HXqsPNY%2FD2jqzgiH1ip%2B1VB9Vym%2FeCysqTNK3EfQLCcw2OxovsNyjbJAYLRyiI5A2Wkq%2BbJNukhezClesMG5IfMUEFYoKsnjneSIPac1FqlD7%2BNXKH7h4KjGGjHl0tALVX7U3RJTHLaelRCTXBZIV0YXb3DJaqfBbo3iyBbRm%2BM6A5yQFxKIpjzLF4DRhwFAipAWofIBV%2BblmSVhVkAuBL9mfM6YZXeYUPqP3JXF2Voyfl4vB%2FygFhCrM3JmFhUml8poVTXks%2FGL%2FArcU42v%2FIHJT2jPwrDR26aaTxFlURr28STKYrT4OaddGh14RiFL2nUo8j8XX3TWxUkExWHZoM9LQZRJ0DbTAriZ6fj42p4os6z8ylBaXVYIZwBQTB2LAOD1V78P4FdAl1hGcdBjHUZZ3P8K%2FSKRX0uljaal8sj%2BMyHwqibzUcGqGnvFoDuR1nZgobNnRpib8e3Gwx9UFEtQEOYk0tNPtwLzXB5y1xzl6wgUYDRPjEEypxeUOx8TbmejIqsEOYFyGNBFZJd%2FPMRfORjEtPZL7%2Fm1vybrYhUCWg3cu8Hl0KtXG04r1sLUxzTCY97rBBjqkAVrh89eM8CytxqKYbB%2BSRwEOxMaBf8yPhxvlAjOR34VSJ2p8NZMb1ldWz%2FMMcbYOWA4E28z5iGZ4TpAi%2BaSaWof4h3e5YeltE1KPkib6Mc5oxWl%2BAEZWbrH4MbphX0Kybc9yq8zQSR7X6CU4a5wVmxgB9IyNvfK5BE%2Fp9MApgHP6csGEkIE4pBkvgcd%2FmAKw9%2BNSV53SQhh40zKsbsBbXoPKywrr&X-Amz-Signature=d310186d092170bbd6cbd023a2a06a8f36fb1ba281631e944bd49544c20bf002&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
