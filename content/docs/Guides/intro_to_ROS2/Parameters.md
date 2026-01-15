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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTM6FHO%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCcLzrDLxbMQ7V1s90beRD%2FlvJl%2FFzP%2Bx4%2BeRCToHXaugIgLqD2eNAfqS4mLMvd0WAe2X%2B%2Bgk%2F4jxiROXPdc9GHkkoq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPSZRiLqbOqgA%2BadOircA1HyaQPKPtMEkq9zBWugJJU%2FCsd2pgs9zkYlrkypUFkjMEb2A%2FYg%2Bce3iq4lvvIcB03uq5rqDLuL4Eymu9Cci4vLpBpQRnsXamOPyk5P7yvErfsAZNsu8p113tK9zjvt43fDvrTaaUlitDruFRmfBieG650AuAg6hJFUr6XFIKVd8x3XnfMj2ata%2BzYWn1tVvq2o6KYkIj1gEpE8WKULCYty7qBhI0N3Bb63wTkk4DWR7RFk0fjDWIiYDFxzTqx0uDSpd5hLmfKNEiGh2oOdFeBijRPcq1F5ju1XhZMJ4mwQrpB5G5vosgVoNXZZkuc3%2BJv3DLtZLb2XgDPrAsyMFp%2BoGHsDryiDXNi3iDp94XWQuOZkNp1vLP76QXvOdzcjhfI9xlZS%2BhCYb%2BJj6yZLTqELLa1fsn9ARzasbu540ZtK3k5OCtsvbrP3T5%2FleuQ0creceDzIJEKAOPTermHJrrLu7dpLOsiJTOsQwTmOtGgCCinf83E0TlVTkBblkilS9uRwlY5JEaOXMzCiiKWgBio3msKfuDErN0R8aT%2BOXDRcn4QjuV9cZRatHsRzlKWpncYkZHfHO0FvEtYAE433ECgTMAI9nBoOJLZ9xw7oz3SQjSQg1aSs54a43uuRMI%2BAocsGOqUBTPp8d%2B%2FsGTFqMwV%2B4dHZdwp4S4qMuEfJBcPMJZmFpxUbfblXEF9GgJTmI%2Fqenjt9zxo3rnpAqwbTMmtyIYsj7MJ7IiVGtnoH4bg4DEtL8Ca6rKxf8OlvsL0tffUsrgmoP3LP14tc5AAAApNuan1CSghO9uER81s32OtSBN86dos9X9DKDUGj40m%2FaDmZIMdue%2F1lUzgek6rqCmBDuVwaQZ8KD0A1&X-Amz-Signature=473a9740b4104329b8ae0fca4f684116d0cd2f6314e6cb8f11ed81e162924984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
