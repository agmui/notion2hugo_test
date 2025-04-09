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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466643C7SDC%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCkPHnXWf0myZxxRfcNACA1TvMM87XK8STQE%2BFZe9CaZwIhANtQczNieyTXLpPeWprKw6fG4S5RqCvURUZ6vqgNS3HHKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVcGclej2oRiLJDRIq3AOYAiItSFqFLcffDe4bXalGSK%2B05eZrVi9pNMRRBxb8awVw%2BMCZBrfeGyHmD4OTLqjZOuWuuq4YFIYWy2qtp1RX%2FmyNkOBllwp04j5Dh3fJHBMyxAbQcA2DZjiHkz%2Fd9w1CgxmOVdlcGerdg9Fl8lPyzuIqNz3WCT7XbjgGq5GksuiLdprRw2y2eP7BYcuNko2ZJRPXLbIXqErGIaqj30fh1B0MKHsh3akd5HMySRDX37mUWVNF%2FhcHB4qy%2Frh2o9%2FNKmn8AnqVvGjIwFkrqthMom0PK1CwuDil1F7gLrQiOSzcKgLSzZbSq8BEdSQYbthGgoRy25lx6BFOHsoRGMXYyMN4W05%2FIlVcEMlJmwXWwkNS8Uy%2F%2B2gVBcrSbmGCiAn8MQx9JxSEpNucehnGV47cvWDQpOlTh2ozvQHt5ZE7HRACuTJq%2FJl2KOr%2FNI8W4GTPodUMAtWHx9O%2B3unWf2AghDHq1OPbidImgrWtQcM4sfajZpRs2hqGcAuP8gCQq%2BxTfVJ%2FhiwMT7me8Lk1vCWilGfCvkM%2FLcpwvazD%2BQY0sstU60R7EVXgbuRXs3AkMhif2canMx2WJ4tNmYioXREUvqi2cbeapNnw6dKBGNR7SpWVB1C9LN19k6L55TD2o9e%2FBjqkAapS8woy6R7%2BxkynRUt8HeSx3G%2FVdaKuc29gz%2Bv0vH2Ze3zYV%2FHLuaE8f3mErh3ST3X3NqbFg3LFo6kpzPDTv3fq10ZBoe7ucUabu9AypERJlEbJFrspnhIEl9RlW68oJKeQS%2F9XCluKkAagsajXjkV7IgmQYRshIWjrOV%2Bnjo5%2BHbaMHEsOj3I6AfnFEJ8J%2F%2F3kGIrQCdQBIeq5w1Zqr69OFhwh&X-Amz-Signature=ae7050318df0b1fa9f0e3bc66f43c7d535988e755b1136f0349ee8a9fcbb3212&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
