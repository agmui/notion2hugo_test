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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VVRJE3W%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuY26kh3IKgQsuutz5qk45qfj5gDswsTuzul65fa50pgIhAPhUWHIpo3Kg4wMBap2cpfK4HI42OpZHIHOB9S3opkleKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3EksnR7WINKccRbMq3AM5msiYdIzfhp0vPnEk1aj11KEx%2Bk9IZ%2FbjBC3l9zO6dtc3VoHIMzLQvfiNFsaUNvJ1KpZhEdosSofxxywKs728uTbfLpqd%2FEzsRPWq4X2rtpErM3340xmpMOcle6%2B8k4nUCZCc8wwQu4SwSJF93dqmHX2NxcV5jCH1P0tQ2pCUBTtU8mz%2FbUUX1VnKJpq%2BR8G2fxzZy9afwqbCqiy5n71ElehhCCpxzib%2BPL5yNEYK%2F%2Fm4y9HHPGt%2FYUV5ohm%2FRuhH2fPeRFBrpSeFpyMXdiF0FgggxS3V5UCfBRDQmBiOuIU4uNbI9IsGAh2zxKT%2Be6Rg1QWuTF5tp6vsSeVfCzqTCHXZYGs%2Fm2HGutVb4Sa4isj2jFMTaIbQuFZSssQvNzSLU1Q1HdfFHT2QSmGyAGPQrYwGetTIgcM9IDPtPfoyopgFEKZLvpdNY9UncSE719B%2FWHXSu%2BRCDAiGMtcsXYuJNXuFiEXnU9%2BF1rLyMVGCe9utm%2Fs3ym209mcowBRlirq%2ByrYsDUd470DGbKRMEXoPRUx%2Bstq0OWqjcWAPICzeiUEFYhlT5qLljso0ukjtPg9ASfMLfTXMsq7ds4o1ef2zTjKszQ2MJjH2qlFCHoYepZzOwsMWdVjkGHF5WTCtks%2FCBjqkAW7ySxa1LZ6jnWgUk2q5nDZJNRnBEVspbCpgTSjnL0jyp0nqKu6P5u39g1Mw3VYstFhyx0%2BWwCup%2F2RA8XIOpYwMGTDj5%2Box2ixaAd2gMbqd97kq6OerCrXYgysMZrj7NYIMBZLvymOptqgonB8MMUgGc9ygR0pbI8lUDfqTSuoKOyRtOdvPJh3uAi1mcVks1HKr%2F%2FIt9pvA7PJ8EFG40%2FfDfuEi&X-Amz-Signature=db9b560e79f3405bd10a1c0b132bdf0c1bfd2445f1b7d2dc6afd9dc0c9400d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
