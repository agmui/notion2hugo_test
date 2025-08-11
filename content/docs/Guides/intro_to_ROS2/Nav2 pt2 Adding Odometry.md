---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXCFEBR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FQ%2FsdyDg95Sj0vqhywOCvRYPNwht0ZmSndL%2Bn%2Fbc9QIhAOnD6IHirtlv0Mk6Mn8Ro%2B%2FotH%2BIkl%2BexCk5uxeXFw1NKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCae6NVK7j%2Fv79efkq3AOTku6DB7SL3%2Fh84aMcmtAGynzH9xsarOvd4rIuO%2F6AJxjq7neHooBL5WSh8%2F9jejvSOzF8cWGj%2BiXMvoB%2BGPhVlTkqORwdlIjPLQkQyv2d%2FZ7nhVBndKinahgYKxUJQD3q7t57hKPYcIoSRlQhjkN6eJTtKGM198qoA45OwPNb30IBYtKahRSp6JAZ2z%2BSCbG0vPbEUaudb07YeW7X7N5c%2Fc7Seo8KJ9bT6XcWgUONnHOFcRTkiS%2FfZ4MDB6J5KTreuXSrbowlPRQJ62GFsNmCE8ZUPNwjkY%2BSD%2FmW1fBy9cyQHM82ujCiB4m1ujonzKUFZX0%2FbmZ5id5Vw7yHqYHmPfhFr1%2BJE1b4e0VIh2bywVEgQPm3wg9ytpdjO6lEHh8SUALLYjLUhXcQEMJwD3b28tO9BbFYsNZldJS8TXIr67RArnY92T%2Fl3FmFc%2B%2Bm9an8OzWePrlFxMLInASv03pRAHkHm4FE%2FkoPGTNxB0dTYbtZ0ErhDjt5RGa6AJPKQPUCMqmnfWkif31%2BsjbFiNDo%2FjPs6IIMbJuslipYdDwVxeYh2tHsxj%2FUMPR%2Fmkko1HJXx%2FKPgxSYEzkIsNtTKPfZDnywP0xAAmTM%2FUEDzNMfVYvXLRigOZmqovvX6TDIq%2BbEBjqkAafBHNp7tKO8vW8aYgNX2zy%2BvG2mHuFmAwqX%2B1rPIPH8j8A3kM0v1TMgfBDB06JupG3TTV%2BK1kWsMoIHl%2FEGtyYahVRahAJ4wvoaOX%2BFgxUGhEe8KwKlHvt7VupSWpTMBqr9ZFk4YKqWZZzVsu0ETQ9t1NoixcNhGaEnooW31V6qqEbMpHcrNoQwOoT2zcunnevAGZX161G6wA68Zg1LPzR%2BIK1K&X-Amz-Signature=920d4e1080802e0cf34a07476caf92fa43adaa418fbf2ac7ac05d79a572ddb2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXCFEBR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FQ%2FsdyDg95Sj0vqhywOCvRYPNwht0ZmSndL%2Bn%2Fbc9QIhAOnD6IHirtlv0Mk6Mn8Ro%2B%2FotH%2BIkl%2BexCk5uxeXFw1NKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCae6NVK7j%2Fv79efkq3AOTku6DB7SL3%2Fh84aMcmtAGynzH9xsarOvd4rIuO%2F6AJxjq7neHooBL5WSh8%2F9jejvSOzF8cWGj%2BiXMvoB%2BGPhVlTkqORwdlIjPLQkQyv2d%2FZ7nhVBndKinahgYKxUJQD3q7t57hKPYcIoSRlQhjkN6eJTtKGM198qoA45OwPNb30IBYtKahRSp6JAZ2z%2BSCbG0vPbEUaudb07YeW7X7N5c%2Fc7Seo8KJ9bT6XcWgUONnHOFcRTkiS%2FfZ4MDB6J5KTreuXSrbowlPRQJ62GFsNmCE8ZUPNwjkY%2BSD%2FmW1fBy9cyQHM82ujCiB4m1ujonzKUFZX0%2FbmZ5id5Vw7yHqYHmPfhFr1%2BJE1b4e0VIh2bywVEgQPm3wg9ytpdjO6lEHh8SUALLYjLUhXcQEMJwD3b28tO9BbFYsNZldJS8TXIr67RArnY92T%2Fl3FmFc%2B%2Bm9an8OzWePrlFxMLInASv03pRAHkHm4FE%2FkoPGTNxB0dTYbtZ0ErhDjt5RGa6AJPKQPUCMqmnfWkif31%2BsjbFiNDo%2FjPs6IIMbJuslipYdDwVxeYh2tHsxj%2FUMPR%2Fmkko1HJXx%2FKPgxSYEzkIsNtTKPfZDnywP0xAAmTM%2FUEDzNMfVYvXLRigOZmqovvX6TDIq%2BbEBjqkAafBHNp7tKO8vW8aYgNX2zy%2BvG2mHuFmAwqX%2B1rPIPH8j8A3kM0v1TMgfBDB06JupG3TTV%2BK1kWsMoIHl%2FEGtyYahVRahAJ4wvoaOX%2BFgxUGhEe8KwKlHvt7VupSWpTMBqr9ZFk4YKqWZZzVsu0ETQ9t1NoixcNhGaEnooW31V6qqEbMpHcrNoQwOoT2zcunnevAGZX161G6wA68Zg1LPzR%2BIK1K&X-Amz-Signature=3811b3f700203cc13d74659f30c699ecbb727ea465c6cd9f619e55a177eadbc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXCFEBR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FQ%2FsdyDg95Sj0vqhywOCvRYPNwht0ZmSndL%2Bn%2Fbc9QIhAOnD6IHirtlv0Mk6Mn8Ro%2B%2FotH%2BIkl%2BexCk5uxeXFw1NKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCae6NVK7j%2Fv79efkq3AOTku6DB7SL3%2Fh84aMcmtAGynzH9xsarOvd4rIuO%2F6AJxjq7neHooBL5WSh8%2F9jejvSOzF8cWGj%2BiXMvoB%2BGPhVlTkqORwdlIjPLQkQyv2d%2FZ7nhVBndKinahgYKxUJQD3q7t57hKPYcIoSRlQhjkN6eJTtKGM198qoA45OwPNb30IBYtKahRSp6JAZ2z%2BSCbG0vPbEUaudb07YeW7X7N5c%2Fc7Seo8KJ9bT6XcWgUONnHOFcRTkiS%2FfZ4MDB6J5KTreuXSrbowlPRQJ62GFsNmCE8ZUPNwjkY%2BSD%2FmW1fBy9cyQHM82ujCiB4m1ujonzKUFZX0%2FbmZ5id5Vw7yHqYHmPfhFr1%2BJE1b4e0VIh2bywVEgQPm3wg9ytpdjO6lEHh8SUALLYjLUhXcQEMJwD3b28tO9BbFYsNZldJS8TXIr67RArnY92T%2Fl3FmFc%2B%2Bm9an8OzWePrlFxMLInASv03pRAHkHm4FE%2FkoPGTNxB0dTYbtZ0ErhDjt5RGa6AJPKQPUCMqmnfWkif31%2BsjbFiNDo%2FjPs6IIMbJuslipYdDwVxeYh2tHsxj%2FUMPR%2Fmkko1HJXx%2FKPgxSYEzkIsNtTKPfZDnywP0xAAmTM%2FUEDzNMfVYvXLRigOZmqovvX6TDIq%2BbEBjqkAafBHNp7tKO8vW8aYgNX2zy%2BvG2mHuFmAwqX%2B1rPIPH8j8A3kM0v1TMgfBDB06JupG3TTV%2BK1kWsMoIHl%2FEGtyYahVRahAJ4wvoaOX%2BFgxUGhEe8KwKlHvt7VupSWpTMBqr9ZFk4YKqWZZzVsu0ETQ9t1NoixcNhGaEnooW31V6qqEbMpHcrNoQwOoT2zcunnevAGZX161G6wA68Zg1LPzR%2BIK1K&X-Amz-Signature=49e6c5bfbfb6782899b5a878bcd23cfe171f485b51d9ea935c7dc71727aca57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXCFEBR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FQ%2FsdyDg95Sj0vqhywOCvRYPNwht0ZmSndL%2Bn%2Fbc9QIhAOnD6IHirtlv0Mk6Mn8Ro%2B%2FotH%2BIkl%2BexCk5uxeXFw1NKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCae6NVK7j%2Fv79efkq3AOTku6DB7SL3%2Fh84aMcmtAGynzH9xsarOvd4rIuO%2F6AJxjq7neHooBL5WSh8%2F9jejvSOzF8cWGj%2BiXMvoB%2BGPhVlTkqORwdlIjPLQkQyv2d%2FZ7nhVBndKinahgYKxUJQD3q7t57hKPYcIoSRlQhjkN6eJTtKGM198qoA45OwPNb30IBYtKahRSp6JAZ2z%2BSCbG0vPbEUaudb07YeW7X7N5c%2Fc7Seo8KJ9bT6XcWgUONnHOFcRTkiS%2FfZ4MDB6J5KTreuXSrbowlPRQJ62GFsNmCE8ZUPNwjkY%2BSD%2FmW1fBy9cyQHM82ujCiB4m1ujonzKUFZX0%2FbmZ5id5Vw7yHqYHmPfhFr1%2BJE1b4e0VIh2bywVEgQPm3wg9ytpdjO6lEHh8SUALLYjLUhXcQEMJwD3b28tO9BbFYsNZldJS8TXIr67RArnY92T%2Fl3FmFc%2B%2Bm9an8OzWePrlFxMLInASv03pRAHkHm4FE%2FkoPGTNxB0dTYbtZ0ErhDjt5RGa6AJPKQPUCMqmnfWkif31%2BsjbFiNDo%2FjPs6IIMbJuslipYdDwVxeYh2tHsxj%2FUMPR%2Fmkko1HJXx%2FKPgxSYEzkIsNtTKPfZDnywP0xAAmTM%2FUEDzNMfVYvXLRigOZmqovvX6TDIq%2BbEBjqkAafBHNp7tKO8vW8aYgNX2zy%2BvG2mHuFmAwqX%2B1rPIPH8j8A3kM0v1TMgfBDB06JupG3TTV%2BK1kWsMoIHl%2FEGtyYahVRahAJ4wvoaOX%2BFgxUGhEe8KwKlHvt7VupSWpTMBqr9ZFk4YKqWZZzVsu0ETQ9t1NoixcNhGaEnooW31V6qqEbMpHcrNoQwOoT2zcunnevAGZX161G6wA68Zg1LPzR%2BIK1K&X-Amz-Signature=ffbce2d47e196aeeba34ae0d0aa3fbd1044d188ddc2bf0323d3ccdf46074323c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXCFEBR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FQ%2FsdyDg95Sj0vqhywOCvRYPNwht0ZmSndL%2Bn%2Fbc9QIhAOnD6IHirtlv0Mk6Mn8Ro%2B%2FotH%2BIkl%2BexCk5uxeXFw1NKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCae6NVK7j%2Fv79efkq3AOTku6DB7SL3%2Fh84aMcmtAGynzH9xsarOvd4rIuO%2F6AJxjq7neHooBL5WSh8%2F9jejvSOzF8cWGj%2BiXMvoB%2BGPhVlTkqORwdlIjPLQkQyv2d%2FZ7nhVBndKinahgYKxUJQD3q7t57hKPYcIoSRlQhjkN6eJTtKGM198qoA45OwPNb30IBYtKahRSp6JAZ2z%2BSCbG0vPbEUaudb07YeW7X7N5c%2Fc7Seo8KJ9bT6XcWgUONnHOFcRTkiS%2FfZ4MDB6J5KTreuXSrbowlPRQJ62GFsNmCE8ZUPNwjkY%2BSD%2FmW1fBy9cyQHM82ujCiB4m1ujonzKUFZX0%2FbmZ5id5Vw7yHqYHmPfhFr1%2BJE1b4e0VIh2bywVEgQPm3wg9ytpdjO6lEHh8SUALLYjLUhXcQEMJwD3b28tO9BbFYsNZldJS8TXIr67RArnY92T%2Fl3FmFc%2B%2Bm9an8OzWePrlFxMLInASv03pRAHkHm4FE%2FkoPGTNxB0dTYbtZ0ErhDjt5RGa6AJPKQPUCMqmnfWkif31%2BsjbFiNDo%2FjPs6IIMbJuslipYdDwVxeYh2tHsxj%2FUMPR%2Fmkko1HJXx%2FKPgxSYEzkIsNtTKPfZDnywP0xAAmTM%2FUEDzNMfVYvXLRigOZmqovvX6TDIq%2BbEBjqkAafBHNp7tKO8vW8aYgNX2zy%2BvG2mHuFmAwqX%2B1rPIPH8j8A3kM0v1TMgfBDB06JupG3TTV%2BK1kWsMoIHl%2FEGtyYahVRahAJ4wvoaOX%2BFgxUGhEe8KwKlHvt7VupSWpTMBqr9ZFk4YKqWZZzVsu0ETQ9t1NoixcNhGaEnooW31V6qqEbMpHcrNoQwOoT2zcunnevAGZX161G6wA68Zg1LPzR%2BIK1K&X-Amz-Signature=841de631f29f386437c781c2963a13191826f74dffead8929766bdfb28602743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXCFEBR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FQ%2FsdyDg95Sj0vqhywOCvRYPNwht0ZmSndL%2Bn%2Fbc9QIhAOnD6IHirtlv0Mk6Mn8Ro%2B%2FotH%2BIkl%2BexCk5uxeXFw1NKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCae6NVK7j%2Fv79efkq3AOTku6DB7SL3%2Fh84aMcmtAGynzH9xsarOvd4rIuO%2F6AJxjq7neHooBL5WSh8%2F9jejvSOzF8cWGj%2BiXMvoB%2BGPhVlTkqORwdlIjPLQkQyv2d%2FZ7nhVBndKinahgYKxUJQD3q7t57hKPYcIoSRlQhjkN6eJTtKGM198qoA45OwPNb30IBYtKahRSp6JAZ2z%2BSCbG0vPbEUaudb07YeW7X7N5c%2Fc7Seo8KJ9bT6XcWgUONnHOFcRTkiS%2FfZ4MDB6J5KTreuXSrbowlPRQJ62GFsNmCE8ZUPNwjkY%2BSD%2FmW1fBy9cyQHM82ujCiB4m1ujonzKUFZX0%2FbmZ5id5Vw7yHqYHmPfhFr1%2BJE1b4e0VIh2bywVEgQPm3wg9ytpdjO6lEHh8SUALLYjLUhXcQEMJwD3b28tO9BbFYsNZldJS8TXIr67RArnY92T%2Fl3FmFc%2B%2Bm9an8OzWePrlFxMLInASv03pRAHkHm4FE%2FkoPGTNxB0dTYbtZ0ErhDjt5RGa6AJPKQPUCMqmnfWkif31%2BsjbFiNDo%2FjPs6IIMbJuslipYdDwVxeYh2tHsxj%2FUMPR%2Fmkko1HJXx%2FKPgxSYEzkIsNtTKPfZDnywP0xAAmTM%2FUEDzNMfVYvXLRigOZmqovvX6TDIq%2BbEBjqkAafBHNp7tKO8vW8aYgNX2zy%2BvG2mHuFmAwqX%2B1rPIPH8j8A3kM0v1TMgfBDB06JupG3TTV%2BK1kWsMoIHl%2FEGtyYahVRahAJ4wvoaOX%2BFgxUGhEe8KwKlHvt7VupSWpTMBqr9ZFk4YKqWZZzVsu0ETQ9t1NoixcNhGaEnooW31V6qqEbMpHcrNoQwOoT2zcunnevAGZX161G6wA68Zg1LPzR%2BIK1K&X-Amz-Signature=16bc972629b2c4c81832d6e5e7542ca2025194732ea13e872e1d1b3540538a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXCFEBR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FQ%2FsdyDg95Sj0vqhywOCvRYPNwht0ZmSndL%2Bn%2Fbc9QIhAOnD6IHirtlv0Mk6Mn8Ro%2B%2FotH%2BIkl%2BexCk5uxeXFw1NKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCae6NVK7j%2Fv79efkq3AOTku6DB7SL3%2Fh84aMcmtAGynzH9xsarOvd4rIuO%2F6AJxjq7neHooBL5WSh8%2F9jejvSOzF8cWGj%2BiXMvoB%2BGPhVlTkqORwdlIjPLQkQyv2d%2FZ7nhVBndKinahgYKxUJQD3q7t57hKPYcIoSRlQhjkN6eJTtKGM198qoA45OwPNb30IBYtKahRSp6JAZ2z%2BSCbG0vPbEUaudb07YeW7X7N5c%2Fc7Seo8KJ9bT6XcWgUONnHOFcRTkiS%2FfZ4MDB6J5KTreuXSrbowlPRQJ62GFsNmCE8ZUPNwjkY%2BSD%2FmW1fBy9cyQHM82ujCiB4m1ujonzKUFZX0%2FbmZ5id5Vw7yHqYHmPfhFr1%2BJE1b4e0VIh2bywVEgQPm3wg9ytpdjO6lEHh8SUALLYjLUhXcQEMJwD3b28tO9BbFYsNZldJS8TXIr67RArnY92T%2Fl3FmFc%2B%2Bm9an8OzWePrlFxMLInASv03pRAHkHm4FE%2FkoPGTNxB0dTYbtZ0ErhDjt5RGa6AJPKQPUCMqmnfWkif31%2BsjbFiNDo%2FjPs6IIMbJuslipYdDwVxeYh2tHsxj%2FUMPR%2Fmkko1HJXx%2FKPgxSYEzkIsNtTKPfZDnywP0xAAmTM%2FUEDzNMfVYvXLRigOZmqovvX6TDIq%2BbEBjqkAafBHNp7tKO8vW8aYgNX2zy%2BvG2mHuFmAwqX%2B1rPIPH8j8A3kM0v1TMgfBDB06JupG3TTV%2BK1kWsMoIHl%2FEGtyYahVRahAJ4wvoaOX%2BFgxUGhEe8KwKlHvt7VupSWpTMBqr9ZFk4YKqWZZzVsu0ETQ9t1NoixcNhGaEnooW31V6qqEbMpHcrNoQwOoT2zcunnevAGZX161G6wA68Zg1LPzR%2BIK1K&X-Amz-Signature=3173c5d38cc7815016c11ef6f3b80ce0630b5b1c229e300b175705dd2c41b33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXCFEBR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FQ%2FsdyDg95Sj0vqhywOCvRYPNwht0ZmSndL%2Bn%2Fbc9QIhAOnD6IHirtlv0Mk6Mn8Ro%2B%2FotH%2BIkl%2BexCk5uxeXFw1NKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCae6NVK7j%2Fv79efkq3AOTku6DB7SL3%2Fh84aMcmtAGynzH9xsarOvd4rIuO%2F6AJxjq7neHooBL5WSh8%2F9jejvSOzF8cWGj%2BiXMvoB%2BGPhVlTkqORwdlIjPLQkQyv2d%2FZ7nhVBndKinahgYKxUJQD3q7t57hKPYcIoSRlQhjkN6eJTtKGM198qoA45OwPNb30IBYtKahRSp6JAZ2z%2BSCbG0vPbEUaudb07YeW7X7N5c%2Fc7Seo8KJ9bT6XcWgUONnHOFcRTkiS%2FfZ4MDB6J5KTreuXSrbowlPRQJ62GFsNmCE8ZUPNwjkY%2BSD%2FmW1fBy9cyQHM82ujCiB4m1ujonzKUFZX0%2FbmZ5id5Vw7yHqYHmPfhFr1%2BJE1b4e0VIh2bywVEgQPm3wg9ytpdjO6lEHh8SUALLYjLUhXcQEMJwD3b28tO9BbFYsNZldJS8TXIr67RArnY92T%2Fl3FmFc%2B%2Bm9an8OzWePrlFxMLInASv03pRAHkHm4FE%2FkoPGTNxB0dTYbtZ0ErhDjt5RGa6AJPKQPUCMqmnfWkif31%2BsjbFiNDo%2FjPs6IIMbJuslipYdDwVxeYh2tHsxj%2FUMPR%2Fmkko1HJXx%2FKPgxSYEzkIsNtTKPfZDnywP0xAAmTM%2FUEDzNMfVYvXLRigOZmqovvX6TDIq%2BbEBjqkAafBHNp7tKO8vW8aYgNX2zy%2BvG2mHuFmAwqX%2B1rPIPH8j8A3kM0v1TMgfBDB06JupG3TTV%2BK1kWsMoIHl%2FEGtyYahVRahAJ4wvoaOX%2BFgxUGhEe8KwKlHvt7VupSWpTMBqr9ZFk4YKqWZZzVsu0ETQ9t1NoixcNhGaEnooW31V6qqEbMpHcrNoQwOoT2zcunnevAGZX161G6wA68Zg1LPzR%2BIK1K&X-Amz-Signature=b58ac4eb46de7e07b1d6eea19b17fd9948582095720f1f7864d7a79377e9e51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXCFEBR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FQ%2FsdyDg95Sj0vqhywOCvRYPNwht0ZmSndL%2Bn%2Fbc9QIhAOnD6IHirtlv0Mk6Mn8Ro%2B%2FotH%2BIkl%2BexCk5uxeXFw1NKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCae6NVK7j%2Fv79efkq3AOTku6DB7SL3%2Fh84aMcmtAGynzH9xsarOvd4rIuO%2F6AJxjq7neHooBL5WSh8%2F9jejvSOzF8cWGj%2BiXMvoB%2BGPhVlTkqORwdlIjPLQkQyv2d%2FZ7nhVBndKinahgYKxUJQD3q7t57hKPYcIoSRlQhjkN6eJTtKGM198qoA45OwPNb30IBYtKahRSp6JAZ2z%2BSCbG0vPbEUaudb07YeW7X7N5c%2Fc7Seo8KJ9bT6XcWgUONnHOFcRTkiS%2FfZ4MDB6J5KTreuXSrbowlPRQJ62GFsNmCE8ZUPNwjkY%2BSD%2FmW1fBy9cyQHM82ujCiB4m1ujonzKUFZX0%2FbmZ5id5Vw7yHqYHmPfhFr1%2BJE1b4e0VIh2bywVEgQPm3wg9ytpdjO6lEHh8SUALLYjLUhXcQEMJwD3b28tO9BbFYsNZldJS8TXIr67RArnY92T%2Fl3FmFc%2B%2Bm9an8OzWePrlFxMLInASv03pRAHkHm4FE%2FkoPGTNxB0dTYbtZ0ErhDjt5RGa6AJPKQPUCMqmnfWkif31%2BsjbFiNDo%2FjPs6IIMbJuslipYdDwVxeYh2tHsxj%2FUMPR%2Fmkko1HJXx%2FKPgxSYEzkIsNtTKPfZDnywP0xAAmTM%2FUEDzNMfVYvXLRigOZmqovvX6TDIq%2BbEBjqkAafBHNp7tKO8vW8aYgNX2zy%2BvG2mHuFmAwqX%2B1rPIPH8j8A3kM0v1TMgfBDB06JupG3TTV%2BK1kWsMoIHl%2FEGtyYahVRahAJ4wvoaOX%2BFgxUGhEe8KwKlHvt7VupSWpTMBqr9ZFk4YKqWZZzVsu0ETQ9t1NoixcNhGaEnooW31V6qqEbMpHcrNoQwOoT2zcunnevAGZX161G6wA68Zg1LPzR%2BIK1K&X-Amz-Signature=9aae80880164c7997291db2eb74725e9c1570c003985bc7dd8dbf961b1deef05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGXCFEBR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf%2FQ%2FsdyDg95Sj0vqhywOCvRYPNwht0ZmSndL%2Bn%2Fbc9QIhAOnD6IHirtlv0Mk6Mn8Ro%2B%2FotH%2BIkl%2BexCk5uxeXFw1NKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCae6NVK7j%2Fv79efkq3AOTku6DB7SL3%2Fh84aMcmtAGynzH9xsarOvd4rIuO%2F6AJxjq7neHooBL5WSh8%2F9jejvSOzF8cWGj%2BiXMvoB%2BGPhVlTkqORwdlIjPLQkQyv2d%2FZ7nhVBndKinahgYKxUJQD3q7t57hKPYcIoSRlQhjkN6eJTtKGM198qoA45OwPNb30IBYtKahRSp6JAZ2z%2BSCbG0vPbEUaudb07YeW7X7N5c%2Fc7Seo8KJ9bT6XcWgUONnHOFcRTkiS%2FfZ4MDB6J5KTreuXSrbowlPRQJ62GFsNmCE8ZUPNwjkY%2BSD%2FmW1fBy9cyQHM82ujCiB4m1ujonzKUFZX0%2FbmZ5id5Vw7yHqYHmPfhFr1%2BJE1b4e0VIh2bywVEgQPm3wg9ytpdjO6lEHh8SUALLYjLUhXcQEMJwD3b28tO9BbFYsNZldJS8TXIr67RArnY92T%2Fl3FmFc%2B%2Bm9an8OzWePrlFxMLInASv03pRAHkHm4FE%2FkoPGTNxB0dTYbtZ0ErhDjt5RGa6AJPKQPUCMqmnfWkif31%2BsjbFiNDo%2FjPs6IIMbJuslipYdDwVxeYh2tHsxj%2FUMPR%2Fmkko1HJXx%2FKPgxSYEzkIsNtTKPfZDnywP0xAAmTM%2FUEDzNMfVYvXLRigOZmqovvX6TDIq%2BbEBjqkAafBHNp7tKO8vW8aYgNX2zy%2BvG2mHuFmAwqX%2B1rPIPH8j8A3kM0v1TMgfBDB06JupG3TTV%2BK1kWsMoIHl%2FEGtyYahVRahAJ4wvoaOX%2BFgxUGhEe8KwKlHvt7VupSWpTMBqr9ZFk4YKqWZZzVsu0ETQ9t1NoixcNhGaEnooW31V6qqEbMpHcrNoQwOoT2zcunnevAGZX161G6wA68Zg1LPzR%2BIK1K&X-Amz-Signature=5083d1efd29d8085b1a14e020ed429a37d580606ed85ac4e590be2e0a5c137ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z2BDYO4%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFu8KOf48z9%2Br3zJo9MT1MqQ02YsmTpNrbV0B2QLyvEQAiEA21BXNgGbc8Mad364Y%2F9nsL07bFkAxbUeu6eBd0w%2BXPMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkGU33ypVb2gmS4EyrcA0JP8h23y8hE%2FqROgsv2JU7%2B5yXh3rFI2ep7aH1ScVXpuXPmbjcPeh3t4YbVpHCpjK2YfXZMd5WsQRAD4qNw7jBPjMJ5%2FGSf6tGmc9zAUInml%2BW%2Bj7743BcDR6zSePaKSiJFOUnCsQDmGBex96fovlq%2FntJbvCWuQpzJMvsr8anEoAc%2F3g2oJs3rSFXV6%2BxB3C%2F3Inx9Pqhf%2FxX4vdZCp3zUW4ZZFO%2Fu2CJ7skUN5Svof6yqS9QsYaHgKjghjnRd5LchHV90yuA9Yt%2BGnT%2FT3iGb6Xl4P3yb1woV6EiomykQlRMxZrDdZinEf%2BWf%2FM6U%2BIoHh8egs63z7hHX3UFBrVoLCNv7Wnvq1rJg%2FSMtTkVkU5Aw6NH4j1ZwQFVkDbmjpcY%2FWxdUBdrea7NXOU1%2FYPwJq1i4E8akJBeU%2BWpF4gtVYj3gQidE3MEaoGxu7h2AtAWip6M69tqhofbxkW1qtAoOJeb8RKjxJlEORb%2BqlfofG%2F5ZsqrK8ky4Ha6na0ZjBGLn9NXwc%2BOvAfR1XE0kJuf1Nw4mxQqEGEmLd1MCf%2FGGZexVfhLpGPQnGr%2Bla3GIlixMcFfUccgjT3nmeVENRj2Hj6FWcsD0%2FpuglDpaIeZXgXPP5iqz%2F5TAWfOFMKqr5sQGOqUBZ1IlrUm2m0VzGVwV9wl6e%2BRUPW0Uce8nGcrw3bD0U4ThithtgwFf6PQ8X5l89KFMZ6sMKGV5CnVPnijLrzvhYF%2Fdah7T6G14EP41n45xnhgYZj6bGZDdhl2Bu%2FYEtMTnvV35xDadcc907g25Lo67KoIk1QnJQjXh6O95p7cWHkMtUshrpL1ix8abnJ%2F%2BHi8MIXyUwUr%2F%2BJ1lBIHJCJbN7B%2BNnuvO&X-Amz-Signature=33bd2d9ebd8ee45bbdc1b9d438dd9e13ee78f1a42c604bd64bc21752c8992510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEEZOTK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAKE4UNyNwU8KXqHHtF43yt82n8Il6qMZ4Sm2STBh82gIhAJ0F0KgXocgz2NMoj9ujr1CLqwgtbTDTIwk%2FVyfFzK8%2FKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKa8JiNvFpX3zGl8oq3AO21MuP%2B1LJBhw8RgFCus0ENRkc8F9qko%2FAzQFtK1oiT90%2B98SnFYN7oGopn1yvzID5Js7xj1Fze6N1hYSki1MpTsoljUQTuPeDRmVI9DPLYDnOCvq7adWRb4ZSSo5ic5HsPROd5IKgtYFI9czIewZcvXhvC%2FydnXFOPi4btUNWD63AumIVEVh2EhkOnWUJKlo4CrKllDXn5kODy2fWuCYRM2V8gDgfr4oCrfpvNkhG6rIeZaPu4bvl4t%2Bt%2BhgVTOtnT7mQnFjnL7%2F6oekclGj49HsqlS7sKCIZaajAJXSG60g9NQVCPL4cMPxNmbmdcJ1VJhuwr7Leo59EmqBJ7gsGkRT%2Fjg2cuWsRLtG0va9Hqgt6C4MkvGM8%2F0kmitQ9aHnE6NqtXb3hieh10cZZosNfQZ0UPc6uGHdIkkSme6ZaxXxBzHGYDTT0tuPAfAKtC3IXWYRBlPIap011C2GJ1JwkkRAXEz%2FoNR0uXix9CDDmUdk4Cdv90%2FGgbLDEG7Zwcw%2FwI3DA4qGYjQdbOJJoJE8di2cjvcfbsyqSge9UW1MK295pLqQnBDDJq%2FA8EveE8JqE73IBhfdXNEWWD0Qx54Exk35xO97CRydMrbFh3w0bHOxaJzEAj0ww43P05jD1qubEBjqkARi8ThGkOvo4oLf5YiwKWGloQa0pN5aQN9kqTDOe1zTLvyVcFFE7ew7TFC0r%2B%2F72Gjq06cn%2B%2FnDugU114NgGY1OLxwgbxSwp1hoS05wqZo%2FQASFrWqeXG7cnSxN1LAY2gaptUQC0vHfsc6lrHoHj9c00bWs%2Fj%2F3FytD9fmqesRVrwF4U2sbiZ0%2B%2BPt1NcFZvt4wVYpZsEHmuRW6dfZWSf8ddyx3E&X-Amz-Signature=3f144bf2fad4d2d9ca266ee7668d9e29c0d75e8493019e9dfcb2956c4103241c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEEZOTK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAKE4UNyNwU8KXqHHtF43yt82n8Il6qMZ4Sm2STBh82gIhAJ0F0KgXocgz2NMoj9ujr1CLqwgtbTDTIwk%2FVyfFzK8%2FKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKa8JiNvFpX3zGl8oq3AO21MuP%2B1LJBhw8RgFCus0ENRkc8F9qko%2FAzQFtK1oiT90%2B98SnFYN7oGopn1yvzID5Js7xj1Fze6N1hYSki1MpTsoljUQTuPeDRmVI9DPLYDnOCvq7adWRb4ZSSo5ic5HsPROd5IKgtYFI9czIewZcvXhvC%2FydnXFOPi4btUNWD63AumIVEVh2EhkOnWUJKlo4CrKllDXn5kODy2fWuCYRM2V8gDgfr4oCrfpvNkhG6rIeZaPu4bvl4t%2Bt%2BhgVTOtnT7mQnFjnL7%2F6oekclGj49HsqlS7sKCIZaajAJXSG60g9NQVCPL4cMPxNmbmdcJ1VJhuwr7Leo59EmqBJ7gsGkRT%2Fjg2cuWsRLtG0va9Hqgt6C4MkvGM8%2F0kmitQ9aHnE6NqtXb3hieh10cZZosNfQZ0UPc6uGHdIkkSme6ZaxXxBzHGYDTT0tuPAfAKtC3IXWYRBlPIap011C2GJ1JwkkRAXEz%2FoNR0uXix9CDDmUdk4Cdv90%2FGgbLDEG7Zwcw%2FwI3DA4qGYjQdbOJJoJE8di2cjvcfbsyqSge9UW1MK295pLqQnBDDJq%2FA8EveE8JqE73IBhfdXNEWWD0Qx54Exk35xO97CRydMrbFh3w0bHOxaJzEAj0ww43P05jD1qubEBjqkARi8ThGkOvo4oLf5YiwKWGloQa0pN5aQN9kqTDOe1zTLvyVcFFE7ew7TFC0r%2B%2F72Gjq06cn%2B%2FnDugU114NgGY1OLxwgbxSwp1hoS05wqZo%2FQASFrWqeXG7cnSxN1LAY2gaptUQC0vHfsc6lrHoHj9c00bWs%2Fj%2F3FytD9fmqesRVrwF4U2sbiZ0%2B%2BPt1NcFZvt4wVYpZsEHmuRW6dfZWSf8ddyx3E&X-Amz-Signature=65cd52062509cf2cea37c44fb51ce90f38b045be9041f5bf5431f2b4e9317b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEEZOTK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAKE4UNyNwU8KXqHHtF43yt82n8Il6qMZ4Sm2STBh82gIhAJ0F0KgXocgz2NMoj9ujr1CLqwgtbTDTIwk%2FVyfFzK8%2FKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKa8JiNvFpX3zGl8oq3AO21MuP%2B1LJBhw8RgFCus0ENRkc8F9qko%2FAzQFtK1oiT90%2B98SnFYN7oGopn1yvzID5Js7xj1Fze6N1hYSki1MpTsoljUQTuPeDRmVI9DPLYDnOCvq7adWRb4ZSSo5ic5HsPROd5IKgtYFI9czIewZcvXhvC%2FydnXFOPi4btUNWD63AumIVEVh2EhkOnWUJKlo4CrKllDXn5kODy2fWuCYRM2V8gDgfr4oCrfpvNkhG6rIeZaPu4bvl4t%2Bt%2BhgVTOtnT7mQnFjnL7%2F6oekclGj49HsqlS7sKCIZaajAJXSG60g9NQVCPL4cMPxNmbmdcJ1VJhuwr7Leo59EmqBJ7gsGkRT%2Fjg2cuWsRLtG0va9Hqgt6C4MkvGM8%2F0kmitQ9aHnE6NqtXb3hieh10cZZosNfQZ0UPc6uGHdIkkSme6ZaxXxBzHGYDTT0tuPAfAKtC3IXWYRBlPIap011C2GJ1JwkkRAXEz%2FoNR0uXix9CDDmUdk4Cdv90%2FGgbLDEG7Zwcw%2FwI3DA4qGYjQdbOJJoJE8di2cjvcfbsyqSge9UW1MK295pLqQnBDDJq%2FA8EveE8JqE73IBhfdXNEWWD0Qx54Exk35xO97CRydMrbFh3w0bHOxaJzEAj0ww43P05jD1qubEBjqkARi8ThGkOvo4oLf5YiwKWGloQa0pN5aQN9kqTDOe1zTLvyVcFFE7ew7TFC0r%2B%2F72Gjq06cn%2B%2FnDugU114NgGY1OLxwgbxSwp1hoS05wqZo%2FQASFrWqeXG7cnSxN1LAY2gaptUQC0vHfsc6lrHoHj9c00bWs%2Fj%2F3FytD9fmqesRVrwF4U2sbiZ0%2B%2BPt1NcFZvt4wVYpZsEHmuRW6dfZWSf8ddyx3E&X-Amz-Signature=b7990b564a4f0e22a09ae0b4b1bed14cc7f0a04bb71d59dc30d666ccb4301127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEEZOTK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAKE4UNyNwU8KXqHHtF43yt82n8Il6qMZ4Sm2STBh82gIhAJ0F0KgXocgz2NMoj9ujr1CLqwgtbTDTIwk%2FVyfFzK8%2FKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKa8JiNvFpX3zGl8oq3AO21MuP%2B1LJBhw8RgFCus0ENRkc8F9qko%2FAzQFtK1oiT90%2B98SnFYN7oGopn1yvzID5Js7xj1Fze6N1hYSki1MpTsoljUQTuPeDRmVI9DPLYDnOCvq7adWRb4ZSSo5ic5HsPROd5IKgtYFI9czIewZcvXhvC%2FydnXFOPi4btUNWD63AumIVEVh2EhkOnWUJKlo4CrKllDXn5kODy2fWuCYRM2V8gDgfr4oCrfpvNkhG6rIeZaPu4bvl4t%2Bt%2BhgVTOtnT7mQnFjnL7%2F6oekclGj49HsqlS7sKCIZaajAJXSG60g9NQVCPL4cMPxNmbmdcJ1VJhuwr7Leo59EmqBJ7gsGkRT%2Fjg2cuWsRLtG0va9Hqgt6C4MkvGM8%2F0kmitQ9aHnE6NqtXb3hieh10cZZosNfQZ0UPc6uGHdIkkSme6ZaxXxBzHGYDTT0tuPAfAKtC3IXWYRBlPIap011C2GJ1JwkkRAXEz%2FoNR0uXix9CDDmUdk4Cdv90%2FGgbLDEG7Zwcw%2FwI3DA4qGYjQdbOJJoJE8di2cjvcfbsyqSge9UW1MK295pLqQnBDDJq%2FA8EveE8JqE73IBhfdXNEWWD0Qx54Exk35xO97CRydMrbFh3w0bHOxaJzEAj0ww43P05jD1qubEBjqkARi8ThGkOvo4oLf5YiwKWGloQa0pN5aQN9kqTDOe1zTLvyVcFFE7ew7TFC0r%2B%2F72Gjq06cn%2B%2FnDugU114NgGY1OLxwgbxSwp1hoS05wqZo%2FQASFrWqeXG7cnSxN1LAY2gaptUQC0vHfsc6lrHoHj9c00bWs%2Fj%2F3FytD9fmqesRVrwF4U2sbiZ0%2B%2BPt1NcFZvt4wVYpZsEHmuRW6dfZWSf8ddyx3E&X-Amz-Signature=456fcdcf2672ac438858d726d770b5d23ee4e7e0cabdab469b29189ae88cc9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEEZOTK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAKE4UNyNwU8KXqHHtF43yt82n8Il6qMZ4Sm2STBh82gIhAJ0F0KgXocgz2NMoj9ujr1CLqwgtbTDTIwk%2FVyfFzK8%2FKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKa8JiNvFpX3zGl8oq3AO21MuP%2B1LJBhw8RgFCus0ENRkc8F9qko%2FAzQFtK1oiT90%2B98SnFYN7oGopn1yvzID5Js7xj1Fze6N1hYSki1MpTsoljUQTuPeDRmVI9DPLYDnOCvq7adWRb4ZSSo5ic5HsPROd5IKgtYFI9czIewZcvXhvC%2FydnXFOPi4btUNWD63AumIVEVh2EhkOnWUJKlo4CrKllDXn5kODy2fWuCYRM2V8gDgfr4oCrfpvNkhG6rIeZaPu4bvl4t%2Bt%2BhgVTOtnT7mQnFjnL7%2F6oekclGj49HsqlS7sKCIZaajAJXSG60g9NQVCPL4cMPxNmbmdcJ1VJhuwr7Leo59EmqBJ7gsGkRT%2Fjg2cuWsRLtG0va9Hqgt6C4MkvGM8%2F0kmitQ9aHnE6NqtXb3hieh10cZZosNfQZ0UPc6uGHdIkkSme6ZaxXxBzHGYDTT0tuPAfAKtC3IXWYRBlPIap011C2GJ1JwkkRAXEz%2FoNR0uXix9CDDmUdk4Cdv90%2FGgbLDEG7Zwcw%2FwI3DA4qGYjQdbOJJoJE8di2cjvcfbsyqSge9UW1MK295pLqQnBDDJq%2FA8EveE8JqE73IBhfdXNEWWD0Qx54Exk35xO97CRydMrbFh3w0bHOxaJzEAj0ww43P05jD1qubEBjqkARi8ThGkOvo4oLf5YiwKWGloQa0pN5aQN9kqTDOe1zTLvyVcFFE7ew7TFC0r%2B%2F72Gjq06cn%2B%2FnDugU114NgGY1OLxwgbxSwp1hoS05wqZo%2FQASFrWqeXG7cnSxN1LAY2gaptUQC0vHfsc6lrHoHj9c00bWs%2Fj%2F3FytD9fmqesRVrwF4U2sbiZ0%2B%2BPt1NcFZvt4wVYpZsEHmuRW6dfZWSf8ddyx3E&X-Amz-Signature=26638014fd4d05a25e78d516ac58c706f02d0500948797b8a9c47b11c04bad05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEEZOTK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAKE4UNyNwU8KXqHHtF43yt82n8Il6qMZ4Sm2STBh82gIhAJ0F0KgXocgz2NMoj9ujr1CLqwgtbTDTIwk%2FVyfFzK8%2FKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKa8JiNvFpX3zGl8oq3AO21MuP%2B1LJBhw8RgFCus0ENRkc8F9qko%2FAzQFtK1oiT90%2B98SnFYN7oGopn1yvzID5Js7xj1Fze6N1hYSki1MpTsoljUQTuPeDRmVI9DPLYDnOCvq7adWRb4ZSSo5ic5HsPROd5IKgtYFI9czIewZcvXhvC%2FydnXFOPi4btUNWD63AumIVEVh2EhkOnWUJKlo4CrKllDXn5kODy2fWuCYRM2V8gDgfr4oCrfpvNkhG6rIeZaPu4bvl4t%2Bt%2BhgVTOtnT7mQnFjnL7%2F6oekclGj49HsqlS7sKCIZaajAJXSG60g9NQVCPL4cMPxNmbmdcJ1VJhuwr7Leo59EmqBJ7gsGkRT%2Fjg2cuWsRLtG0va9Hqgt6C4MkvGM8%2F0kmitQ9aHnE6NqtXb3hieh10cZZosNfQZ0UPc6uGHdIkkSme6ZaxXxBzHGYDTT0tuPAfAKtC3IXWYRBlPIap011C2GJ1JwkkRAXEz%2FoNR0uXix9CDDmUdk4Cdv90%2FGgbLDEG7Zwcw%2FwI3DA4qGYjQdbOJJoJE8di2cjvcfbsyqSge9UW1MK295pLqQnBDDJq%2FA8EveE8JqE73IBhfdXNEWWD0Qx54Exk35xO97CRydMrbFh3w0bHOxaJzEAj0ww43P05jD1qubEBjqkARi8ThGkOvo4oLf5YiwKWGloQa0pN5aQN9kqTDOe1zTLvyVcFFE7ew7TFC0r%2B%2F72Gjq06cn%2B%2FnDugU114NgGY1OLxwgbxSwp1hoS05wqZo%2FQASFrWqeXG7cnSxN1LAY2gaptUQC0vHfsc6lrHoHj9c00bWs%2Fj%2F3FytD9fmqesRVrwF4U2sbiZ0%2B%2BPt1NcFZvt4wVYpZsEHmuRW6dfZWSf8ddyx3E&X-Amz-Signature=3a8abf9e61d536f51d4a98a05c2cbe171f69d8bbab0e71ad654bb19205a8544c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEEZOTK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAKE4UNyNwU8KXqHHtF43yt82n8Il6qMZ4Sm2STBh82gIhAJ0F0KgXocgz2NMoj9ujr1CLqwgtbTDTIwk%2FVyfFzK8%2FKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKa8JiNvFpX3zGl8oq3AO21MuP%2B1LJBhw8RgFCus0ENRkc8F9qko%2FAzQFtK1oiT90%2B98SnFYN7oGopn1yvzID5Js7xj1Fze6N1hYSki1MpTsoljUQTuPeDRmVI9DPLYDnOCvq7adWRb4ZSSo5ic5HsPROd5IKgtYFI9czIewZcvXhvC%2FydnXFOPi4btUNWD63AumIVEVh2EhkOnWUJKlo4CrKllDXn5kODy2fWuCYRM2V8gDgfr4oCrfpvNkhG6rIeZaPu4bvl4t%2Bt%2BhgVTOtnT7mQnFjnL7%2F6oekclGj49HsqlS7sKCIZaajAJXSG60g9NQVCPL4cMPxNmbmdcJ1VJhuwr7Leo59EmqBJ7gsGkRT%2Fjg2cuWsRLtG0va9Hqgt6C4MkvGM8%2F0kmitQ9aHnE6NqtXb3hieh10cZZosNfQZ0UPc6uGHdIkkSme6ZaxXxBzHGYDTT0tuPAfAKtC3IXWYRBlPIap011C2GJ1JwkkRAXEz%2FoNR0uXix9CDDmUdk4Cdv90%2FGgbLDEG7Zwcw%2FwI3DA4qGYjQdbOJJoJE8di2cjvcfbsyqSge9UW1MK295pLqQnBDDJq%2FA8EveE8JqE73IBhfdXNEWWD0Qx54Exk35xO97CRydMrbFh3w0bHOxaJzEAj0ww43P05jD1qubEBjqkARi8ThGkOvo4oLf5YiwKWGloQa0pN5aQN9kqTDOe1zTLvyVcFFE7ew7TFC0r%2B%2F72Gjq06cn%2B%2FnDugU114NgGY1OLxwgbxSwp1hoS05wqZo%2FQASFrWqeXG7cnSxN1LAY2gaptUQC0vHfsc6lrHoHj9c00bWs%2Fj%2F3FytD9fmqesRVrwF4U2sbiZ0%2B%2BPt1NcFZvt4wVYpZsEHmuRW6dfZWSf8ddyx3E&X-Amz-Signature=46031c1838d604148defde3ae3b1d8cafbefc6f0f35c22016846afb6a2263752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEEZOTK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAKE4UNyNwU8KXqHHtF43yt82n8Il6qMZ4Sm2STBh82gIhAJ0F0KgXocgz2NMoj9ujr1CLqwgtbTDTIwk%2FVyfFzK8%2FKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKa8JiNvFpX3zGl8oq3AO21MuP%2B1LJBhw8RgFCus0ENRkc8F9qko%2FAzQFtK1oiT90%2B98SnFYN7oGopn1yvzID5Js7xj1Fze6N1hYSki1MpTsoljUQTuPeDRmVI9DPLYDnOCvq7adWRb4ZSSo5ic5HsPROd5IKgtYFI9czIewZcvXhvC%2FydnXFOPi4btUNWD63AumIVEVh2EhkOnWUJKlo4CrKllDXn5kODy2fWuCYRM2V8gDgfr4oCrfpvNkhG6rIeZaPu4bvl4t%2Bt%2BhgVTOtnT7mQnFjnL7%2F6oekclGj49HsqlS7sKCIZaajAJXSG60g9NQVCPL4cMPxNmbmdcJ1VJhuwr7Leo59EmqBJ7gsGkRT%2Fjg2cuWsRLtG0va9Hqgt6C4MkvGM8%2F0kmitQ9aHnE6NqtXb3hieh10cZZosNfQZ0UPc6uGHdIkkSme6ZaxXxBzHGYDTT0tuPAfAKtC3IXWYRBlPIap011C2GJ1JwkkRAXEz%2FoNR0uXix9CDDmUdk4Cdv90%2FGgbLDEG7Zwcw%2FwI3DA4qGYjQdbOJJoJE8di2cjvcfbsyqSge9UW1MK295pLqQnBDDJq%2FA8EveE8JqE73IBhfdXNEWWD0Qx54Exk35xO97CRydMrbFh3w0bHOxaJzEAj0ww43P05jD1qubEBjqkARi8ThGkOvo4oLf5YiwKWGloQa0pN5aQN9kqTDOe1zTLvyVcFFE7ew7TFC0r%2B%2F72Gjq06cn%2B%2FnDugU114NgGY1OLxwgbxSwp1hoS05wqZo%2FQASFrWqeXG7cnSxN1LAY2gaptUQC0vHfsc6lrHoHj9c00bWs%2Fj%2F3FytD9fmqesRVrwF4U2sbiZ0%2B%2BPt1NcFZvt4wVYpZsEHmuRW6dfZWSf8ddyx3E&X-Amz-Signature=8d6926d9e77b051a7b3cce912ee62e26380367f18c38ad28aaf4db6860900ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBEEZOTK%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAKE4UNyNwU8KXqHHtF43yt82n8Il6qMZ4Sm2STBh82gIhAJ0F0KgXocgz2NMoj9ujr1CLqwgtbTDTIwk%2FVyfFzK8%2FKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKa8JiNvFpX3zGl8oq3AO21MuP%2B1LJBhw8RgFCus0ENRkc8F9qko%2FAzQFtK1oiT90%2B98SnFYN7oGopn1yvzID5Js7xj1Fze6N1hYSki1MpTsoljUQTuPeDRmVI9DPLYDnOCvq7adWRb4ZSSo5ic5HsPROd5IKgtYFI9czIewZcvXhvC%2FydnXFOPi4btUNWD63AumIVEVh2EhkOnWUJKlo4CrKllDXn5kODy2fWuCYRM2V8gDgfr4oCrfpvNkhG6rIeZaPu4bvl4t%2Bt%2BhgVTOtnT7mQnFjnL7%2F6oekclGj49HsqlS7sKCIZaajAJXSG60g9NQVCPL4cMPxNmbmdcJ1VJhuwr7Leo59EmqBJ7gsGkRT%2Fjg2cuWsRLtG0va9Hqgt6C4MkvGM8%2F0kmitQ9aHnE6NqtXb3hieh10cZZosNfQZ0UPc6uGHdIkkSme6ZaxXxBzHGYDTT0tuPAfAKtC3IXWYRBlPIap011C2GJ1JwkkRAXEz%2FoNR0uXix9CDDmUdk4Cdv90%2FGgbLDEG7Zwcw%2FwI3DA4qGYjQdbOJJoJE8di2cjvcfbsyqSge9UW1MK295pLqQnBDDJq%2FA8EveE8JqE73IBhfdXNEWWD0Qx54Exk35xO97CRydMrbFh3w0bHOxaJzEAj0ww43P05jD1qubEBjqkARi8ThGkOvo4oLf5YiwKWGloQa0pN5aQN9kqTDOe1zTLvyVcFFE7ew7TFC0r%2B%2F72Gjq06cn%2B%2FnDugU114NgGY1OLxwgbxSwp1hoS05wqZo%2FQASFrWqeXG7cnSxN1LAY2gaptUQC0vHfsc6lrHoHj9c00bWs%2Fj%2F3FytD9fmqesRVrwF4U2sbiZ0%2B%2BPt1NcFZvt4wVYpZsEHmuRW6dfZWSf8ddyx3E&X-Amz-Signature=04351899492414ed7de16b9138e3c3dae24cecf1e3e3716a36a9fe0c45baf6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
