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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LIHY2R7%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpliAHYLHMqCDezotvip6uURlYFxJyrF7Xqkuc9M%2BBgIhALEtIJxl%2FVXq0BhYQA%2Bi95pd3FrAigrNr%2FfZgMAvz7ssKv8DCDEQABoMNjM3NDIzMTgzODA1IgwTa6pqOkG1walVUDYq3AMfWHbSPDXAbFBUKpLdCkSZ1UgH7wUzdrTSd1kp8H%2F4eBQXhip%2FI1gGfHqT0wwqVW7R%2Fr5f2w48POwKNzPx%2BSF1CcctMvJAFSX85qorWthQPdrfP5NLwx0U7V9IJt6ERkpFeakZC5j3EPjBNxrk664JxTIBjtXc6MXVkfRLTcGrSXhJe4vM%2FFU1k5W4DTKQPhaJOAtk6tErmn8c8ywiYmIX5xwmyC3z1f7%2BkqAFW5xlv6ia%2FDIE8oPLYmCiMNvj7nfjDlD%2F1ze%2B7lh1JAiWVXM3hFHVPnVcUdd477oc%2FkZ3Tnd5s0%2BRNux4z9LUKd2ns%2FWh9%2BA%2B7iSDUpIDeE6vt1X%2FMeiE8NVeP0oevnAsYBF8vOffi299foXZuooK3EHGT8BzRbN3V1IRUH%2FLwyiuyXLPb1RL0NVnztkXKliQf9Zh%2BDhw9qwqQiliXDtojUBQHClgD6J0OsEn8IbucUfMZlty7uPmEtuQuRbv8WddIW1iUK3x2g8a7dJyHtKMTGauLs%2F5e71b4DccZb8Mnktg9XUlPlhy0s7ryfBxbX5xSR9GMgmoz4gFVZjptQAqCJyrVSWHE%2Be%2BntSUD9aq9Cz4cyVyr0y8VwQiwaTZEDpJLOdk3HqLMhALj4ukSEvPxjCBpMW%2FBjqkAQiTJUBUUfIeTWZJM39KT3Qv70s3lkV%2BQ9i89SuXbfbEO49TA11TVPrBJQRcl723i%2BtAmc%2BwEDbOLCnHD85cVcHJ3oiqnju8Qsoeh1DeD%2B6oK1yard9T7ACHzX%2FIJIxC5RLrXJlGkZ4YVgoCkY5clzAs9s5aOArEWzq5XGPuxh5qFQU1zjUO8H%2BZkkwLTJ%2FdgF5%2BP1x5njMWEvPZuB8rUUkOUOQy&X-Amz-Signature=5e6e192a2c09bcbf22b33f648eba5d4379987882509d4ffe22d8e4bb2d1aaa8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
