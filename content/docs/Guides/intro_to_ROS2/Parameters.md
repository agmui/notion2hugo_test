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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677HNAAU5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIER1dospak1P%2BmFso27flwQ91b7o2lH7t3JPe4P6U1KwAiEAg3lRDsF3SlJy6OM%2FTZ5YLAtp1uysso%2FuM1IZjalrj6AqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjRSnK5eD%2F2hx1AxircAwAnReHrKjRQ7nDVqlj9I5NpVDsX%2FuEpL77KeKxZRCau68dE8j9N5h8OJxhKtx5nqMBmn1biNq97a%2FN3EYNp7BY3rBUU7J9aB2vHpaMomMGIb1I60mIC0gmSnvxn%2BeK4he2qAb90jCwcnKbX440xnUpVxn39uRcWau70uMMolFnTuOJ12EM7kuRiW4KykPTH8K%2BJkcDrWd8u72zGyCTGvGBSgE1mWCnLjm0ZIRkVMeuUuyeuc8VCbs6kvKFITWJtL0P72c6rSWOnVIgo33d8lLebGNDKb2VuHxYW1bnkdVBv84%2Bl8bhQzR4Ve1JR288yoBtt%2BN151JH33xNfmC58%2F5HQ0ye0p%2F5gRRcpBRSp0h5wnx253seNGAnXPVpr5gL4VMetuqIIM6YgzgPb%2Ffcdqip5UMxyXFQDdcvxdAB%2BDcC5J9DquDEPRJVkmfjk2ANIM1mWCt9NsF1tlalGqugEuiHvbTN0s0FQTokbdbUTJp6AZo8eCyusj3NQIU%2FbArAXh8HePoBZOT0hQ77l%2BCeB5PlWYYbV68oWcp1i9%2F4pISTnd0azfnJidKZFuHkOZ6aRJDh7I3qKqGHAyseR5bpOGt%2BFjrQz1mHRsU7p80pKq4m96dUoZH8tQACEUopcMMevusEGOqUBvk9jJRlosWlCFB2pQIJRrIfC1XfA2CST4nm0MSAcl4XPwB183FS18rKQuH5Tj6R2zbvUbzrXbG2%2F%2B%2Be23X%2BWliANXLOmkV3PUIWTX%2BzlGekaM1xhflffPsoau3ox1drK8TeSS95U6xX6T2k5GEQOX2Q2eQvFw0UlZvxwN3LJ9vP48HWCLQ4cX%2BXgrIZBd6zQhUrt4vvjh%2FEBym9L79jjqEMtmIbd&X-Amz-Signature=9a9588758ea68415145124feef32af142c61e7b15b114b4b231075a207f76f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
