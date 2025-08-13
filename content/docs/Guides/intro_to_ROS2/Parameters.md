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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466255XWE7I%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T024233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr24K73G2wxUW5kZUsNJKZrFhufCm56ZCwuA4KO5qFCAiEA%2BvZbM7XsOD9UQms7cuVAkDZ6J%2Bzm%2BrCaVzwGHE7F9Icq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDABVK4E%2BLCCmI46UcircA6vIQx3wTKSOxahw2X6HUwy1RggBU4YJhVxkK%2FOTtBHBQanEq76lyJMuLkyX%2FPwjyH9Q6iTf6h4hsNHHk7AO5Q4pkI%2BSdUCkeTQjLa8ugXUr83kDD%2BhdFkHoy%2FxjXFk9miHiOiOCbpOtOEvUv8zWTHnB%2Besc8qfUfEXsFKwd3YX49jna4x7r6HC6f%2FwtEmOcD91mofXKoYj7LyWYchSBeXv9UttQX0LA87I46JJHjLJN8z5RGt2GBNctZycTh1ioly0vMSVUJHSUg3acaR8WxSInv7qHz4VnEuzfoCPGCiIwRlZij39JTqI%2BA%2BUH2OJbkYQZtVX9fAPi3%2FgYHt5MPjqrpTdveavc%2Bbg0w3%2B3BN0l%2F5c0UNYs9oB2kZfremOHQ3B2f49gS%2BtLyiWXA3rSjn5nO11Kuij25VFFApXBkWTMxwetA%2BsaMg3NhcP22k1ECh53jukNo%2BOD6avgm40%2BfzFac6ifockf4qUv8NrNjyORtjxQyDRDw7wEVLcycCNm1OhstfOnD%2BHJFTe9AYlKVxo76CSzc9oGrdHAwcXtrviJa54e22SocZiU%2Bd8aTD7YCG4TeZe77lRqBHL%2BGwLYO%2Bw2REDNR9Fb5clsT%2FF6c2nQ05cB6aHv6yKHJ9vvMOXZ78QGOqUBugeLbL%2Bd8aPxN%2BrTNWuLkyJh1L34%2Fk7%2FZ8MYYEDCCwHm8xF60GAFoF2hjRDQ7pRDf7Ve58Lgp8xyDntKo59%2F7xrSJe7cEyFvN3haxGN96aaSxCJFfQmegjEECFZIdHAA%2Fd%2BoQl91h2Sf4wiRVf1efzwo75MLiEzg%2FoNvAhYmQd4o%2FRPZp9Iu%2FRjUrA3XflxLL%2FzFVNw1u6oHW6pMQMB0zceIwq9y&X-Amz-Signature=8191b5a3951e2ff75a4e9bf3255230b835a90de8b34ce34d3bc03f09c1215c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
