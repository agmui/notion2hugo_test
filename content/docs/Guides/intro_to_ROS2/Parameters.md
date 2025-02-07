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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MYL2WPW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIAYJpCx1JBTLPqG2ZOAQ91IBJDBnCcsoNDq9DhTfn8WQAiEAttspzy0KSQyJvpHQ4EIUPeSc%2BF%2F5ge0tCURLoHK3ajMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGWBRMbnTLunKGwDQSrcA1wrehR1LgtxrxuFTCCU34%2FOimm%2Fugo2A37quSCf6xfzP0hFKruSxJbP%2BE5kAPJDvawnuK1ZCFRVB%2Ffd3D%2F2z7rSAuLuF5PZhgyBZVAPZAwvOc8%2FCNOqqMwY2v1YUMo3URFFlfBFcmmBhArFzQmDBNAVOws%2FsC%2BxuoIXWO9wkTfGdKP4sCD43%2FB3MZPbxDJu%2BrsdHAv%2ByLD7XVF4BjNMJceT%2BBvi7fur9OO2eGUlo7uL88B5xzVocDrkagevfPTr6i%2FhfuzHMKxaQS0W%2FgrWm7jHsxs1jpDv9QnFerud3GgRqs62LWgZSbY52yEhZV8eNwrEOYm%2BdqYv4brnmEXFzGRnHQVhVif7zYXm7kwixz6XhkkoHHRZKE7VrIcUkFepGg2yejBoNzqWXx5W%2B5OK9lYqoeKXmjdWiCXrWsPqgskWTo%2Binr%2FPt%2B5PG%2B7w17xUYyPHi0RFztiKhXBT3hcUO2HnGvMoEd2UtsH1R9DxSpR3pdKsQ71R6xKGLVl1xPPaJ%2BPaw%2BF0y%2B%2FXEoWKvpmxQkYVk1oP9gYQCLElTmY6OxKEaRIeFGBvWXS%2BZ7HpjqTFrLrHl%2BUdJW33GgY%2BQ656uFPlRwJHX2T99mCHfoACrPVGqrHEvwzi6CITjCSBMNWblb0GOqUBlFtt4WU3EKZiefIg4o3rKpye9C7J2UjbclY9Ppuo%2BP1f4q6WqlilCWm38jEleDAMMMk0WRyMNA6qEVdvcc6zCPKrbQIYdHbbRz91ylJWFsgtMMH9MgIvevGqXAKUr0xtOIhurNzwtj4WXKYGcjyl1YADGv8PQ8UfMVoEHC%2FvMquNxv%2Fj2DDPVV06LPZV2roIrTccd8Mvx74Gp0YxywfjsCJVO%2BEd&X-Amz-Signature=23df6cdb1e574baab4e066572e4c1ad68df1844bd2a76339c5d131ecfb6cf7cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
