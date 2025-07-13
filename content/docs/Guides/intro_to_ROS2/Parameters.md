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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6UPNX45%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiJwwxfrrFZfPtlLIVW0oxbNFqsG%2BE24HuEtA4AsJEGgIgQFySfXHFmAlHlzAApbF8gsqhSlZLY1HEJqvrwUY4CD0qiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRdwYJKef0FdX0h0yrcA4UHtWFIHA07twiU5PVx%2BJz4CV0Dqd8U99odmat1GS2S%2B%2BNXqGQBSHXnzV0ansqFZcJET3b6zqyWXHl8bCqkmzQedDgDucvGTqyUUK3hLLlvEO8Ri5b6CspOPlGBpYkCuauFfCev6DMisgznU4b%2F5gf6pPKgF5GcCirR69gYsK86XRREghY6vWJ3%2B6I2go2J6ZIYoPyeF8%2FBBHrELhb6c7ucSLQWlurULRk4EjSVDYZl5Afn3sxP1fRt7z0a6%2FWfPfFCMmlty%2FTgiUW4bCklWZBplbTymNSGWYB7OeEhl5JfkmOMJ94qBVi%2FJItZjdyd6ZTuaoLCMrslFol5ZZAIC4VtTe9NXTrkGdLm0Kgb9bBApGtaIg4yqAUem%2BCmt%2FVZwODUyEiZgNS7P0m4X%2FOi%2Fpb70izbpGwyw3ox79fyJwB6WM0WT%2BaxDDPrmE0Pkqjc89IaGICpPqdGBXRkBV33BdENsh9SHqE%2B8ExVDzvNnk9mUj6vODv%2FsXF4Y2S1HKKvyYdbEUBQBgDwFp6xQHcPX28B8%2F2DJ9uk4YgqumqzOnYeWfo2RpckC0MlGdRJKU18sAESbBNfxNWT0cXDqysHeuNtzvHfeU45B%2B3kBNDjqmKcgmY%2BJs8DR1ikhPKgMODYzMMGOqUBrJ%2FBtGT5lQm2wI1PtDBtGt3hZnz7LxqueI4PARoe%2FSmBJsg60FW8ZJKEdTCEju9YVXIjQMXQPOdfFcooE2apwid%2FlRb%2B%2FOoe15iwVmYcrenu9vIhY28cjwjj8HN6GnvZrlE298AWDW6pO3l2%2BMprI1daY3NmoyQEVyi0uiktqi3NA5adMO0%2FHWatXqa0FkH2SU0iY6vSTWp4CwxnxSKMYlbiEVc3&X-Amz-Signature=f9f0df6f7c9bf300ed4ab994a161f7c36c64d404fb7d39299a988ab978ecb2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
