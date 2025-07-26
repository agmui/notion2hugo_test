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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FNT23US%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQDb2CtpyM7pYh0U9COrjUcFDlYlLjR4rLKAUWBTy7guIAIgSTchwyiI3JTwZJ1f1CcFOfKCcXoM%2BHpo22EJvAa4kM0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAJRDF3BZc2mDOGNSyrcA%2Ft9BQemRgPxUL6oEZY9%2FPjFAGT8FZYtjFBVgVa%2FxGE5aEQXJMAEO%2BXtvVD1LJ%2FwZgr%2BJNFK2jnfFP1HO%2FIpWZo%2FcFXrSjjao1TDb2KY4jepWLOoKflSztwUinKjuEiwroiCFOuyRKD8Z96XbHZoLc9cOscREEEI8jVsqfHmu%2Bs50NsJ6JnUr5GC%2B51aK7ogYqwMVdEuMPPm99nfw%2BErF0KdDGzTL5sDTPUus0dNv8kzIwVp1goyBeyeavQFIdge2SZ0QIdYl1TH%2BeQH1OlfrNM89xE8onHPnfsFHYt7Cv3xuMtTNu%2FnTGEJAThnqu%2Fe7PJsCxmh1KmEPn4ESwlWvnBNWl%2B7Acyz3ikC0ZERSnxz6wa0BB7b9puw6qLzHcJRxLZ%2BQKIqrEmcRcQ3xVI6A0pV07HqGD4pFHEFH27PLCap4Lxnr0780KpqvOQ64hd24sxJCGAUddQpq%2FtyzsGZLmThoAadc6XTcrDW7Q0FwJaJoZbw9btfgNx1BMTODpLbRGT0EeGXWKyncL8zO9C3AQFGW5wWDKZsD3sQgieRd2eWKyCJyfnQ%2BDo6bsNwsl7KOBycLwdTrQEoTsgbggmOzIc43L2zlZ1PDgKgDRoeYrUdfimolHRWYy5XYOPqMNbtkMQGOqUBDIBfrGmXJoUXlY9EXo0n6rNJN3kpunKD5dHQPnoZ0qWJJ%2FwsdAouZocG%2BCj54IwApXwZfvsCC7Q9bivMD0JCQTNCkeY95kuyhMYu63t3KUTuifYIMEfNylP%2FAGXr4B8jPSXPpgkdZ4arSCEk4G4GTTqE4l4rliNU07RytDkx3K9G8cGBJycZDtSUfVZ3WHgPzRzifuNnGVY0Yamzqt6l3UhqL8jX&X-Amz-Signature=a60e4ca18a79c157cca8234d3bbe8d652aac80a9b6b8a9ada82bb1ed3de8723a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
