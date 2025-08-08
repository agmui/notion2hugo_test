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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XGRGHBV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDEggF7rhgAK5N6hqa6BirDS0zM1mxWyPeqny9mmLrFbQIgXlV6fwwGSE796RQ9shQQD863NbrAzM%2B7qWHw%2FiekJNgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3mWE54nC76YDmW5yrcAz1bRC2eWQC5G4ZkOuFy%2BWfONBLXnu%2FFvKa4is9pxhkU7Z%2FVkFVTZFXxcSG74jCX87ocbh7KmnfX81OVDI8YLOESFbZ8vpDvM2Rp6M4SPymxc6ZETGSRcZMNOGQVgFqR5pCtoP2IiaYubV28QSZDmxwAZ%2Fhc1li%2BeZZ3%2F5akY7hEk2mw7%2Fbr%2FG3puZ1MmJ1vI2uGwZaLEia5eq%2BM0bAn%2B5cS5BcvNR6gz4ao80L0CLbYeweYCIMg32jKdTDERH8KCjttoot2iNavQsOmaDC32oE5Jx6Fr251VnwW%2BGXBlKXvUJaeHxeJQ05DiCT9ZLGyiA4VhK3tTmsD9k7ozCM7Syzyq5LQ6hCja9taD28QcuNAd7zzt1U3QSCSF2UmkBpjGNrvdoB5pTatnLwbVWMVrPhZnR90YvITzt5eOeSPSB5rHKkJsfDzBJ7I%2FydtbuDL%2B%2BwBSBOiVqBJrRXnFwzsvTeJQzBiI71hJMPX5ShtXlXllzO%2BJHT3tz4MqYmIVHY5iHjreFZwM2kfShKtamNnodnPOhBCcbvD0f%2BPCJbIfgX%2Fidd4KaPBzXrHhwFaV64Oe0cEeUvhU%2BHPRzcTn4PSNF8La7dyMOwQ7gfpMuguGALr2rXHM5IEmr3N1AmeMLrs1sQGOqUBHOsYmepiRWGGD%2FkWxZ8gv9fwEphmin71dUEKDb4dfHLrAFhuGcusQvk4dMj5L8Mx5H3oM1Jg594C4eE5Vc0xK9gvunCQzZN0LkVBeHqCMMLzBeGMJjh%2FwKh0UKxNaFTPYaCg6rbO136%2BlVZqZVT4RFRz4D7obpZ6vz4jzY9S%2Bj09bDRh1X6aosP8G3bA%2FgUcFjywgqTvxtW59PE5tFz%2Fx4UJp%2FQP&X-Amz-Signature=f353773a56e3232a1759673c7ba7f13347e0afaf798b7b9329e1268de410eb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
