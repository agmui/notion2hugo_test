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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634VT5DLX%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqmFFK4B07IwRw%2FTwALKlBziHkk4VhQ8U%2BQjZVgJ20LAiEA93e2hsbQZYHfgwXycivmLpx9cVL%2F2zTJywGzriJvc54qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNhyI6rbIuLLtFcMPSrcA7yJ%2FNoHABnAR%2BDqN%2FasDDAVLVfT8jj1Fgb7Hi1pAtV7mK46XntcBza%2BKwaq7QW85kthkfw9ufHslrGcBR3z4l6r%2FpegvINficGTqmtN9%2F1lpSfQG5hXm7lkcjDrlEXeEE5iD4beciqNmFyQqYJV%2Bg%2Boh1PT3NDKLFvOxZ9amU1re1HhdEwTgOmjg3QsutLRhHFPYtUfD18d7VASM2XBMkt%2BEUfEVuaYJ6ijmGL%2BaRklD3MT67cSt6F5LA1HbFx%2BAPATuN2tvc7Sc5rfYICLEdH1GLOT%2B6RKZWcg0%2Fbb91zPhDlcAL%2FnL9MZJOpbIRmsQDDaiSozVqgd2LCKuYn0fGiI%2FKpn83qJjtVSxae51Ort9%2FQoT2yVkWP4urLMq%2BEvvQNxD9m5v9rTo9Q3DyOGbREsGC1guIvRrTDMEvB8%2BX7tPQxtINMzCOT6mlevLa0TliQ4oNiSuFpLO%2BPyu7faAOtJhktXFAtj2umBdUfo8mzBbU8AEYhEtU%2Bks8dIe0ku6gY453ax7rtrxFVTyjM0AICaH49FjoGZRoD7UT6pnvYwjVh1bMgA655dpSybEWOOivO5U2WLc%2BrkNzhZ87sqMnSs%2Fz9UB2xEHrSWuspnJdJNL3RshIRXvI6iLb5qMPOj1cIGOqUBxYrPDqI0jgDAis%2BiQQpOwuHO2sEh%2FCtuJ3mlXlsF0AXkG8CGEv%2B2tacYYCPMSzTTsoEOyhloWUwfqAfzK4FQFC6NZJ%2B4Vtg38XPlz0GxaDEkgkT%2FlB5N39DSv4pRgz0oxUuNwsp5sQ5gGvGVOgKJ89pXjlEgcfIymmjMV1yojbltPRblefbxqQmITitJUTzdqyNe2%2BSrwH%2BGkRxncv6tRbglkriM&X-Amz-Signature=4987cd81578b5fc44d3702bada94c9416925100823193683cdf1e3ab3fa2ca9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
