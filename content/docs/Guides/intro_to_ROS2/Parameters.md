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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBO3W65C%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRkc7AM66rbbccXonxdtDbs%2FQpxnOa%2BaJWdAZEx5tFoQIgYpmx%2BHP2c5%2Fcj0t68Owdb5yQQxL5firizdBOIGevXQAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDL7ElGBJNtk82Dj1FyrcA9VW372u5Z7XEPcTJEUpbu3J0R4Gk9s8du8bQ%2BWw6JCGBBgdQZNc5E%2FInDhR6VZUozF7oB03km6DAUa84f70V%2FOqL6ydEBKyzBSVSMxdreG%2BZI%2FjICpaPrKazaJyw68zpc1%2BTCfjL3JPBsazql2d8WSJrt2CHSD15pNMO0oDujMnMjoHugGRmnBSqnKZ9pGgUeGj37YQGQCxRziIUFLXhaSHnOGxpbrapK91GHb1roh%2FeiEsQ3VE04RrWTMG2KV3l9HlKKx%2BMSB0bGZNUmxp%2FnrdEZ37dh%2BsupTIHypS3c%2BPqWoCAW%2BdvKpkKttdET%2FPv4lkYO4ssbFtw97f7mMa73zsFVFLd48wi1uJSALaRYiWIb%2FCu7%2F%2FEx%2FKWPTIhS6eeToyUHC6SfQTpaAHHLNQbETQvush8kL6tBh0%2Bed1YfFQdS7VSAdRdRvOqzQW96k4KgsTMvJwCuZZofaupSb%2BUZGtIVRWFjvCoiszMF55ZCg%2FD2XLtiRNRd91ZOiBv%2BESRCpFuktYuHZSlqQhQj9VTipI0FRbpqzw%2BK244xAKgre3U04Kldr91ALiYmRnIkkCB997UIjadthrmTeoRdJrplf2JtXQlk6jgFljdDT7rZSZ%2Bi%2BiqXSyuXETnn5AMMra1cEGOqUBQ1k3xqLY69TQ9P7poxAbl%2FbDBHdswi2rn4vtzAZfb38ODzbYTUOQ7ozmFnR6FUf79JRpZi0me0l3iwGIWNTnZXuoFA4AcUfBWK9qhpvPsfeWj6XZFhQdZ44XgGIbzoaTHUXsjoicj2oUcsfTDtYEWWAjWu870MNdRt36v0yFLUJvgtWB1xcB1U4Kr6QWCIavqbKUD84gnfz5FvrA0LXLVwy9jpNT&X-Amz-Signature=effd94abf4d9d543e0c6f79cf5ea05530314fc12506ae80acdc3d904de8a8953&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
