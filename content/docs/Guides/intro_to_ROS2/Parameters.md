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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIAAJ5IS%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQDL8w2wK3sNrF059kfKCMUM00tMnyeSALMQmtln0db4JAIgHToOk%2BswTAKP6SxdjSQczTc%2FK3tm1UcLVNbEY4Inwb4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDORgclVovrNOXJqf5ircA4dGsCLPHInXBx%2F9Gqzw3n%2Bfl4GJy2SqC1r75foWoS9clXJ5bTqjChCVgoWCpE0A%2BGMu9XFPJv6zHC811KsAhD5hoMnk%2BgX6SpO8O96nnAR2pWSvpHEpJICgtRfN%2Fq%2B7o%2FVXPP7EKhhAKYtv9emsn7Pca2w2L24rh9hm%2B%2B7oG48cHgVyr%2Fb6wuADdoDuaxZDOU9naWNDdkfXepM1n040ey9EUR2Wi%2FQW9YgnnyCehQtyfCydoZYOCjvCD80VWh4%2FQPLZU2KxEfVWWsFybvM0gWfLNUt%2F8wcfe0u9qrzaipB1%2BYRivnmQeImhHCmeduS%2B4hfjY9JeA0g8g%2BIRGrhQ3UjiQRfptlTU%2BhXo%2FqwmeyLOQRD3gpLMO4Ga8Erc5Em4eByGutzJKlgYGn5c2lUZA50ROCOoIYlwRgdDXR%2BCrM6J6Pzkmk%2BYdKz%2FfAUMGNdV%2BBaqkXpOx5bHHUMzF8CfFp8H5rL9VEEALr1Q%2BmotQsDkphZ0gJC%2BjT2n3W3GImRxhprjvEK9hem5IwQJ4MNYNakpGEJD9lKkc84NUKDdOx%2FgEIUrSrJzsvORjTE9iZDtDEPZBUQeU4%2BlKKCRDzIfxqtp5kzMz3XCVJh%2FOZDf4TosWbJ4umFj4i0C3shfMMrSgr4GOqUBROf89bsyCI%2F0wIW0nVEgJ5ubWxtVr5LaW4BKiIdo5zJY%2BlEczeq3kKD%2FTtJBF8sStIiWS4EmYyT0bffNBefHUuc3XmcFsCC3bgBdj7oCwg07opKvHZAsqwFLVTfhjFkYVMVUptxbCjHi0aEMKHO3WjZODhuCkHnxZHk%2BiyWbeQXf%2BOj2%2BjxgHZQPY2s6vbg4rP5bBNWj5%2FLZdzuBeV8NtMa3BJMX&X-Amz-Signature=00881c06a28532eedce5027e2d86db8c7a4d9ddccf06998b0486ffb849417fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
