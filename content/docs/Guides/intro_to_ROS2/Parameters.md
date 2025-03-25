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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJXK5GLC%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNEPVIfG6yWQnNmhZdgqrxc3hBkX58pINBjgGknC8YNAiEAr%2F2RWO7O%2FkI8TDfels3uE12HUwbz3SS9TyMwy2zwq38q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDILgaKq76CiVEHk3ZCrcAxzgeJ32aYB9HqMnDIkcWQ%2BVoippAUI6M5f8mHqMdps2Ffkd9CXkqYxl6DSJFmKuOlkjSn1kP7coN6hBgjo1XbkZwJ%2F1KnM6JH479F7sDakLJHqSqm4e7V54fh4BEyzaf0wWdxX1xn4em%2FotR%2F5qYveJ3rRDFOFyWIxmhfe%2BSALygifBclxBQvSFavkR0RD1mGVn1urQvot7RjydD1lb3ofUf%2BMBuFbu9%2FTAQozGPXHbbo%2B4pmDLB1QfRY2LfMZGw19HBySwRN99KARdIxwmgPeHhRFzwIPoa6QcT57jDebNOPVIiYKZoodVKU7TfmkrbT2fxV5Gr5Z7FeBS%2FhlTDyDC%2FXGIBHP2vu00k%2BC%2FDXCeCDNmuh9tSZHgfAR0I7hNShcmKWOLcKO%2FYD%2Fbirug30cxjEYSjWNmPM1vKGhNrkIUpoSK0Q5c%2FpY4bNn6Y5mRm5fbx6%2Bc3SBepcjGEHKDoi9YKQ1K8gUw59vJXIJFqYuC1%2BbXJ%2BNbyQDv9pnbKkUkGM3L%2FmbvDDJss8zIW93zXiIoy9hCdG4GCcWea6s%2F6Hkft1rmiGjltHDPwe33XUcqLjV5Lpe1fhsPWErh5nwsYqHVW%2BpV4PVZFOQof%2FTv%2Bui2TWTC9%2BSoKUwX2JArMJTsib8GOqUBKu56GjDiPd9UMj5GvJ0OTepN6ViU8p3%2F6n29u9G0o23nzezi6K9AVB9pLJfs%2FY9sKXNT7oo9L48Z4nFwFGvaLyNrW0AWRcVwAUgd0LCVsrOxc401f70m%2F3uTXohBCEn6zgU5cBlpzmubJLBe5YJ%2FvEZXWsUMzg%2BFGjz7A8%2FAAeD6PQUp9s6N1qPmezxBnZt4OuOC6n%2FcYvihEp41lXZWfKp66qMx&X-Amz-Signature=58a04c45b78f6e81efcac5110acca56855e452c68b921a620788d6e0fdb19a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
