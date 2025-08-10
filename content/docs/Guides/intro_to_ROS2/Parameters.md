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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RDFWWNZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID3XuRTMIfEOlA81qiRgZ6TQGH6wOVwea%2Fjxwl05h7axAiByWIooYqDTIyPafUQKFbLMDqpux84SsqOcfk9EgbredSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtYjGcYoFpGvqGcrGKtwDzRfqFCx747%2FYvwUms4kqKSQF2t1ZMtNVL6E96Audbha6SD88NCKcGlhVn7ubbev78JvKpKUTvC7Or862qAw5funbo1%2FU3vg7Uqnpfs9m%2FG6cB%2F%2Bnps86B9ne0Memrpn4kEctaU4KcHlH%2FE3i7p6oHxRrTKfHQxjUVCHNKuzQ05wswyYwF%2BSfjvKcdhedOnNWHO60jcAympKu1jOU4yQcmVW8jeOIaoVm3%2BDuU5bT3mE3F7%2Fn58RvQUskkFcznbZ9RtJtIai%2F3qbkpVAHUfAcEMllKfq%2Fn5miS5yGaa7gViN87fDBUepZyU%2FwZp%2BtdWIjUBFuk5knPiN38Abxp%2FRJlHcsY64jSt3H5LLuR2ZfPw2sv%2FtmG8gjRIHBpBYUZ8r8KChjoR%2FWs64tz0wCgSQ6VFbsCb4UVjvppiWpScJq8TeNOzWNk4eqHQ%2BCIdmBleDEZQwTP1vGE4T4%2FgTu3JLrqzu8RCBiARwL09GiMjBW2eLzDHnlZUuNMVYCrMz%2BWcFIssrBI4bS711rxusXBE9qn1DCLmFyCv%2FVLyk1R14jJLBG%2BUVwqozwb0Nlcpt%2B9VrOM6bF87G8PUEVriU1VFffxRZt1v6ynBkSfMVw12RZiwdlI7zXrC%2Fjk3pSph0wvLrjxAY6pgF0jIsFTn9K2hnklVAfb8fnJYnh0TEidVPV%2F5Z7FzRczvSlmytaSVLWLPMaIdnqsdHI%2FQzAvfIEm%2BEPNRul7hbFLhsJDHqZI8SB%2BgzMm2JDDs2vxu%2FCv8jZcTq4ZCw%2BYpBu0VDj54OjiWYTlmEZzrEb2ZFeq31d3SE4Ia0m5SDITnp7sBx6DJF%2Fwwkd%2FAfpWwTnwSmRTkjBGKjobY17wA3qdrc1M%2FN2&X-Amz-Signature=eaa6aa73a3567db9c45c650fb6093f381a38c0634cdf71a22b27d61a27573e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
