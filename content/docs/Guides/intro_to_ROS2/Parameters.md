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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPRDVN7I%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHla7kCVEy45JBsyi8vKYcGCbN5BXJw1b7V%2F7nD1PgaHAiBAt7r57O%2B7ZJ3KaXNUxhKrtKHkgpr7YGshNneIojroiSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBwbruld0aM76imk7KtwDfSf6vdgJBQWnS45qBv5LdmAEv5%2F2WEyjessr9OBGzQ3%2B64ztb9DzYSADNYNKHPyTWMozL68sXSd%2F6JgWJAaG0prq6Y8J56oD8hZZV0LZ%2BY0Xnis8fQz3jeRLvLQlU7MPrzMSglIy4ot2MVuHAk%2FR0o6HmYLN%2Fdx18%2FMh4g2FbXI43FAphUiOLWVVdRDsnDi%2BGdNNbP96XHbV6Llz9O01fhlr5bqHQ%2BKcPjg9dtMlSJwVcBoiF%2BVPVCswNAU6RJHtVrFvTbqjEAqptIdBeQ7C1SUdNqhCJb6QvAtqhk6WLKC2xfbSp8stWKjyp%2FOPGd%2BX8WDPY5cxnheY57jwhyuoVjGdcwPGNfDTtNFM%2FuxK0D6QojoF25xCZVvd0BBSlFRapmMDOejxFRC1cPQ24kLRRPRAp%2BI%2FBPLMLlewdiFQlw%2BECu%2BQFoLoD3hNBm9bdIXHKfP1J%2FFe3enVfZNmVlJ9Dge8p7U4nhCxRFz3VE7InqnFB2klUccKvsAdVv%2BMyv8val1WEp0LSADxx7Ktu6StWmlAfds6qj%2FiuzovArUiL%2FAGTAuewqxDhjyBXH9tSSeKT7JLciVK52pbxVmTR7QMIj8paEdMfLI1hftry9QiULNN5WYOrdnYYcvVeV4wopTEwAY6pgGmFwh9a3Go%2FDv0eEXcvelJOmKNbrhf8cLAkVRE7kauqP6UQ0%2B3GTuSE7AGKzBN7MtuqDMywaP48cqkCFTLrqbqqqFTCizAeTlS9%2B44N0U3%2FhLp0xk%2Fw2xJvKJAdJve7RM9bY2nPCFbdvTP5DsoUrx4ks5%2FKkVxFzm1hFaiz4cuzyPY1BkeE%2Bcd5dvMy4i1mMXyiyj5GlIJnmvOpX%2Fiipp4klc19cNv&X-Amz-Signature=853cc953b240277fd26e4a18016ba07c169058714c1081b62af15228d048992e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
