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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263YZ6E2%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrI674OkwrSQyX%2BtcPgpANaseBOkRGsd3NmKiVyegSrgIhAK20JeSRTvEXwroNnegUZjDYw%2FLqiiabWYoanD479G1ZKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE7KRFuOkoaobuIJoq3APQOKnpnkiMO%2FKRGXU2X3T2Yqi32h0MDNZx18S85dGI4PySdXiG4t%2B9dy%2FkGdOSGdAWFVM98kw7DuX%2B6dau0Z68D9vY24FQseUIuZxo0LlXBDIcwoB%2FfY8YBQ43Kxpmz%2FqQZgnQx2eoIMd6HIDYybLVHMWEs%2F0FxHc1eXEVQDPzIdFPt6v%2BL2CD4TNeP40Unfp0Vzeuex13d35sF12RsS3IxVB8foKDcqC7R5Z1WmUnvZ%2BWzUfyK050VKw2Ze5dnR3IEZrGdHR2RFRi2Rlx5azTH7i2tKv4wUkwAXC1uoTY1bqGMzj1DoWW2Vr8sN8MnPfl0%2F5G4DbADHBDn%2FLBQs7YpwIrefhrH413wccyyySB5k8uUbAfR2fTtRdD1QmxglG%2BsOhmsUyJ0m4R31Idyq9%2FvTFtV%2BHyRkhwoQOQsmitW4UW%2FB9BubJ%2BCrTjPWRLa7GwqD%2B2UCU8qacMsuZmlRtDL0%2F9uf5y%2Bp1bHsP%2F6FcHtl38gDpTgle%2BxxyvhLsuqU%2Bi%2BYPumyH0oDeqLQeb3ONa7XAStg3ftoU6hD3niBpoeciz%2F2kwpL316ZvlEOuHSJz1RoRgolFYlQT%2BQskuY%2FSryjYudmlkgW2ibJFJEVTzqs4vn3qyF6Jy6WGzXTDFj4W%2FBjqkAexbqMVhI6v773tz9zLoIBx4d5dqmXSZPRzT5MAM%2FBNFbM%2FyQaxa51co9UdQl2iaAifChEdaOZjbsgo9t%2FboBCIxxMGbtMeMk2kTkUtHWnXOdyg4FSxYL%2Fi%2FxbSpBsk2Dfs5QtHr50BlNOlRn48%2FcimdcqRRXTiYI8TepI3Zfp2BnAGd3HAAu%2B92j30IhJ%2BTosY93eu7xiF5yx7%2BkS0aH60iv3xM&X-Amz-Signature=a7a00d3de54320ab8c7a2ca10bf55c5656351b50246277a77e5f231784b0ae88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
