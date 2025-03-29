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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZDIKDFH%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIF%2FFbulwjLWqwvEM3yZmLZN9V%2F1LxyVenvBmg1R1W7g%2BAiB9WSqcWRFo6L4W0UsnJmN5tcTbD0uifxEJ1rylvB9z%2Fyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMZnyddUx9k%2B4k4nhXKtwD49egxY7aOXJv65%2BzR8Qo%2F5%2FBfjqe0ruhCsuzTtqFXmOvdfsJjIa9K5fQDqpTG1x7smOlghpt9xuGhnvwfxwbat6nyqlDuqVqXa7GjjR7dRuGM3Nif%2Bp2p2NMk46bHIAeFlUG5c0fD4DBAwOrEMVNv2v3UI7Kitoaj9tQe37hVw4yyAuREhIWZHNSDxY1JfW2f3MhqzcpRIFr4iIhelRJ2hE%2B2QNrOCVnm2qeTFbp3TaTUp%2FDtw0tZDuCTBlVFGmjsX%2Fgr%2FuzEfbfbeO6%2FTZWAo4jA570y1xcHn52inqjmX%2Bz0q5D%2BlPiA4s4nuuVOFE%2F59FSgEBHs8JwP5QWY8vZAt0ocByVFKRkPhUywlZGSp36b9Tl6vIUcn1rROgKvZBip4EineP9JLs550kMpBl8q%2Bgp%2FLHGZhw84ufLzIshEIh%2B5MUmxMUhHksA4mvPbpQaJzTGv%2FjWjNWIetBj4hEBDiYUDiefzDf0xVyO8AFZClW%2FCJ963UL%2BrgiJClazIx%2BuquNUEjyg2MyRxEaBo7n4Zmpixdkg9FNPzCJHdVJCXF5nYePVrRmKTaCEfKIJbjtUEpZ0j%2FRwHIulReT75W56zOMh0pkhQNXofrrhqvSlma3uvIm6jxJD5l%2BVnsgw%2FtuhvwY6pgEXnHX1b0i3BFmUfWAdedvTecPMmZvUc2miL5GaAuhlkaSiKlQn69J8Ng7%2FWDWDj28OMBTKvF0s8oEuRr%2FblDXRGODEmqYONsj%2FDt6YEB3LNdA1sr9hj%2BzO7k9L7vGh7c5rz4NkQsiT%2BZNsDFur%2ByGFOzzi%2BMDEx9XzhkWjxrUmtFvdgX6ROZif%2Fa%2BauPqGUyq%2Fz5Zz7ScevyzMzmLcXP8D9poNp7B6&X-Amz-Signature=4ff3909efe3febacd9478f9d66a039fd26c025d732d78d51325f41edc7273189&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
