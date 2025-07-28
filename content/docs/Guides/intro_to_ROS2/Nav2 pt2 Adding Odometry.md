---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZPTB6S%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCmQRQxJV65YR1k9DVl3m4UigGsrCVOi5tZPbFFCTPLNAIhALjFRK9lGi4q9N8PLFivx3eAz%2BYCmLSymx%2B8uoz%2B7AiWKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoI00fWuMmJOOtjbYq3APb7PGgJGa99yEZvOfL4ECHENbDYWfmCRSNb4JHZ84BE23tkUWyaFCtWAfa1NvHut5zAMYsKAOKuqN2eJzjdEQGI3dw8HbhbjZGO9cqD6pMMafV8FMn9Pm7T4PuE7WIqYzhPoWeiDtZJm%2FWbS8MCFgH7H2wkUD5Ra9skjIXgNJ666pd8sWxe2tUpbv4ZmEgDncoqVMhhHLL9pFgJt6U%2FnlDhw%2BIZy5Xh6HuAL5gspJK%2BPlNeUPRp9OUik2aoBmI0KbuWE5wANbnjlXVQ9Be7f9pE0p7X7zaR%2BBjnIIk9X%2Ff6nDBZiwHzaH70pnqzef6v1D8Vv%2F359FS5kMYK5GrX0TeiQXwWWdrJJMEL5tDF56Z0RFRKQgqMlobuTjvJViBRCkEdHwuFvP%2FDl%2F4skK8tjkcHAF7fEw%2Bvm5srVX50ZKO4cIhwv46UBE8FuEaVRk%2FWTBKsiNi1ImgXifbNZgAvUHCRUSg%2BUSd9hX38G1oT8ZkYc5j%2FHkJYUkacsJpfQIb4ybrQVNTivBfIkIlu6dtr%2B%2FuzFOjpbFwSTC%2F85psBCfxQdelEekDqEiNRbtp2Fkqwew%2FvU%2BI9k2FwW4cQC0%2Bofw37TLGXaa4PgoQvKaEwyDdSXBIHcpahKuALPdxqDCR6pzEBjqkAYCIDDKrUwYzcvES%2BMr7Dko87Um53seMUVe4tWlzcCKT4d08K0%2Bpq4VgWc0gkgYFc3yblpqDWo7O2qx9FkDPAccHj%2B%2BYi2EkrHAyBn5lkuO39rwtPXv5Cpi4AuEkrkhyauXDnWQEBH4n78z%2FDih7kvc9FsOyi79c34jEx%2FsUVxBETcAqLCiJxVHKwwpS8lRh4LfrEpwNQjk382VxJhJvNZV5Vqqk&X-Amz-Signature=1cced239ebbf1df88d8303b11d54a9b2d30e21014ff27bd83f38745beeee14cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZPTB6S%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCmQRQxJV65YR1k9DVl3m4UigGsrCVOi5tZPbFFCTPLNAIhALjFRK9lGi4q9N8PLFivx3eAz%2BYCmLSymx%2B8uoz%2B7AiWKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoI00fWuMmJOOtjbYq3APb7PGgJGa99yEZvOfL4ECHENbDYWfmCRSNb4JHZ84BE23tkUWyaFCtWAfa1NvHut5zAMYsKAOKuqN2eJzjdEQGI3dw8HbhbjZGO9cqD6pMMafV8FMn9Pm7T4PuE7WIqYzhPoWeiDtZJm%2FWbS8MCFgH7H2wkUD5Ra9skjIXgNJ666pd8sWxe2tUpbv4ZmEgDncoqVMhhHLL9pFgJt6U%2FnlDhw%2BIZy5Xh6HuAL5gspJK%2BPlNeUPRp9OUik2aoBmI0KbuWE5wANbnjlXVQ9Be7f9pE0p7X7zaR%2BBjnIIk9X%2Ff6nDBZiwHzaH70pnqzef6v1D8Vv%2F359FS5kMYK5GrX0TeiQXwWWdrJJMEL5tDF56Z0RFRKQgqMlobuTjvJViBRCkEdHwuFvP%2FDl%2F4skK8tjkcHAF7fEw%2Bvm5srVX50ZKO4cIhwv46UBE8FuEaVRk%2FWTBKsiNi1ImgXifbNZgAvUHCRUSg%2BUSd9hX38G1oT8ZkYc5j%2FHkJYUkacsJpfQIb4ybrQVNTivBfIkIlu6dtr%2B%2FuzFOjpbFwSTC%2F85psBCfxQdelEekDqEiNRbtp2Fkqwew%2FvU%2BI9k2FwW4cQC0%2Bofw37TLGXaa4PgoQvKaEwyDdSXBIHcpahKuALPdxqDCR6pzEBjqkAYCIDDKrUwYzcvES%2BMr7Dko87Um53seMUVe4tWlzcCKT4d08K0%2Bpq4VgWc0gkgYFc3yblpqDWo7O2qx9FkDPAccHj%2B%2BYi2EkrHAyBn5lkuO39rwtPXv5Cpi4AuEkrkhyauXDnWQEBH4n78z%2FDih7kvc9FsOyi79c34jEx%2FsUVxBETcAqLCiJxVHKwwpS8lRh4LfrEpwNQjk382VxJhJvNZV5Vqqk&X-Amz-Signature=21363d84c9c439c77c16be21e75f98246b20e35d864b1959e6a82fe5fbc619ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZPTB6S%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCmQRQxJV65YR1k9DVl3m4UigGsrCVOi5tZPbFFCTPLNAIhALjFRK9lGi4q9N8PLFivx3eAz%2BYCmLSymx%2B8uoz%2B7AiWKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoI00fWuMmJOOtjbYq3APb7PGgJGa99yEZvOfL4ECHENbDYWfmCRSNb4JHZ84BE23tkUWyaFCtWAfa1NvHut5zAMYsKAOKuqN2eJzjdEQGI3dw8HbhbjZGO9cqD6pMMafV8FMn9Pm7T4PuE7WIqYzhPoWeiDtZJm%2FWbS8MCFgH7H2wkUD5Ra9skjIXgNJ666pd8sWxe2tUpbv4ZmEgDncoqVMhhHLL9pFgJt6U%2FnlDhw%2BIZy5Xh6HuAL5gspJK%2BPlNeUPRp9OUik2aoBmI0KbuWE5wANbnjlXVQ9Be7f9pE0p7X7zaR%2BBjnIIk9X%2Ff6nDBZiwHzaH70pnqzef6v1D8Vv%2F359FS5kMYK5GrX0TeiQXwWWdrJJMEL5tDF56Z0RFRKQgqMlobuTjvJViBRCkEdHwuFvP%2FDl%2F4skK8tjkcHAF7fEw%2Bvm5srVX50ZKO4cIhwv46UBE8FuEaVRk%2FWTBKsiNi1ImgXifbNZgAvUHCRUSg%2BUSd9hX38G1oT8ZkYc5j%2FHkJYUkacsJpfQIb4ybrQVNTivBfIkIlu6dtr%2B%2FuzFOjpbFwSTC%2F85psBCfxQdelEekDqEiNRbtp2Fkqwew%2FvU%2BI9k2FwW4cQC0%2Bofw37TLGXaa4PgoQvKaEwyDdSXBIHcpahKuALPdxqDCR6pzEBjqkAYCIDDKrUwYzcvES%2BMr7Dko87Um53seMUVe4tWlzcCKT4d08K0%2Bpq4VgWc0gkgYFc3yblpqDWo7O2qx9FkDPAccHj%2B%2BYi2EkrHAyBn5lkuO39rwtPXv5Cpi4AuEkrkhyauXDnWQEBH4n78z%2FDih7kvc9FsOyi79c34jEx%2FsUVxBETcAqLCiJxVHKwwpS8lRh4LfrEpwNQjk382VxJhJvNZV5Vqqk&X-Amz-Signature=40fdb480dabd8d877b2206b2bb10dbd60b3f21629d9d71f586739fa323ca6002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZPTB6S%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCmQRQxJV65YR1k9DVl3m4UigGsrCVOi5tZPbFFCTPLNAIhALjFRK9lGi4q9N8PLFivx3eAz%2BYCmLSymx%2B8uoz%2B7AiWKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoI00fWuMmJOOtjbYq3APb7PGgJGa99yEZvOfL4ECHENbDYWfmCRSNb4JHZ84BE23tkUWyaFCtWAfa1NvHut5zAMYsKAOKuqN2eJzjdEQGI3dw8HbhbjZGO9cqD6pMMafV8FMn9Pm7T4PuE7WIqYzhPoWeiDtZJm%2FWbS8MCFgH7H2wkUD5Ra9skjIXgNJ666pd8sWxe2tUpbv4ZmEgDncoqVMhhHLL9pFgJt6U%2FnlDhw%2BIZy5Xh6HuAL5gspJK%2BPlNeUPRp9OUik2aoBmI0KbuWE5wANbnjlXVQ9Be7f9pE0p7X7zaR%2BBjnIIk9X%2Ff6nDBZiwHzaH70pnqzef6v1D8Vv%2F359FS5kMYK5GrX0TeiQXwWWdrJJMEL5tDF56Z0RFRKQgqMlobuTjvJViBRCkEdHwuFvP%2FDl%2F4skK8tjkcHAF7fEw%2Bvm5srVX50ZKO4cIhwv46UBE8FuEaVRk%2FWTBKsiNi1ImgXifbNZgAvUHCRUSg%2BUSd9hX38G1oT8ZkYc5j%2FHkJYUkacsJpfQIb4ybrQVNTivBfIkIlu6dtr%2B%2FuzFOjpbFwSTC%2F85psBCfxQdelEekDqEiNRbtp2Fkqwew%2FvU%2BI9k2FwW4cQC0%2Bofw37TLGXaa4PgoQvKaEwyDdSXBIHcpahKuALPdxqDCR6pzEBjqkAYCIDDKrUwYzcvES%2BMr7Dko87Um53seMUVe4tWlzcCKT4d08K0%2Bpq4VgWc0gkgYFc3yblpqDWo7O2qx9FkDPAccHj%2B%2BYi2EkrHAyBn5lkuO39rwtPXv5Cpi4AuEkrkhyauXDnWQEBH4n78z%2FDih7kvc9FsOyi79c34jEx%2FsUVxBETcAqLCiJxVHKwwpS8lRh4LfrEpwNQjk382VxJhJvNZV5Vqqk&X-Amz-Signature=62fadb1e7a45451a3eefb6644a55fb7cc16b9ff82f7538671002d2e8d26570a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZPTB6S%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCmQRQxJV65YR1k9DVl3m4UigGsrCVOi5tZPbFFCTPLNAIhALjFRK9lGi4q9N8PLFivx3eAz%2BYCmLSymx%2B8uoz%2B7AiWKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoI00fWuMmJOOtjbYq3APb7PGgJGa99yEZvOfL4ECHENbDYWfmCRSNb4JHZ84BE23tkUWyaFCtWAfa1NvHut5zAMYsKAOKuqN2eJzjdEQGI3dw8HbhbjZGO9cqD6pMMafV8FMn9Pm7T4PuE7WIqYzhPoWeiDtZJm%2FWbS8MCFgH7H2wkUD5Ra9skjIXgNJ666pd8sWxe2tUpbv4ZmEgDncoqVMhhHLL9pFgJt6U%2FnlDhw%2BIZy5Xh6HuAL5gspJK%2BPlNeUPRp9OUik2aoBmI0KbuWE5wANbnjlXVQ9Be7f9pE0p7X7zaR%2BBjnIIk9X%2Ff6nDBZiwHzaH70pnqzef6v1D8Vv%2F359FS5kMYK5GrX0TeiQXwWWdrJJMEL5tDF56Z0RFRKQgqMlobuTjvJViBRCkEdHwuFvP%2FDl%2F4skK8tjkcHAF7fEw%2Bvm5srVX50ZKO4cIhwv46UBE8FuEaVRk%2FWTBKsiNi1ImgXifbNZgAvUHCRUSg%2BUSd9hX38G1oT8ZkYc5j%2FHkJYUkacsJpfQIb4ybrQVNTivBfIkIlu6dtr%2B%2FuzFOjpbFwSTC%2F85psBCfxQdelEekDqEiNRbtp2Fkqwew%2FvU%2BI9k2FwW4cQC0%2Bofw37TLGXaa4PgoQvKaEwyDdSXBIHcpahKuALPdxqDCR6pzEBjqkAYCIDDKrUwYzcvES%2BMr7Dko87Um53seMUVe4tWlzcCKT4d08K0%2Bpq4VgWc0gkgYFc3yblpqDWo7O2qx9FkDPAccHj%2B%2BYi2EkrHAyBn5lkuO39rwtPXv5Cpi4AuEkrkhyauXDnWQEBH4n78z%2FDih7kvc9FsOyi79c34jEx%2FsUVxBETcAqLCiJxVHKwwpS8lRh4LfrEpwNQjk382VxJhJvNZV5Vqqk&X-Amz-Signature=f3acc6216202c2d9df1276bdabd59713b7f8ec222e0c84510543ae1d41ed3f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZPTB6S%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCmQRQxJV65YR1k9DVl3m4UigGsrCVOi5tZPbFFCTPLNAIhALjFRK9lGi4q9N8PLFivx3eAz%2BYCmLSymx%2B8uoz%2B7AiWKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoI00fWuMmJOOtjbYq3APb7PGgJGa99yEZvOfL4ECHENbDYWfmCRSNb4JHZ84BE23tkUWyaFCtWAfa1NvHut5zAMYsKAOKuqN2eJzjdEQGI3dw8HbhbjZGO9cqD6pMMafV8FMn9Pm7T4PuE7WIqYzhPoWeiDtZJm%2FWbS8MCFgH7H2wkUD5Ra9skjIXgNJ666pd8sWxe2tUpbv4ZmEgDncoqVMhhHLL9pFgJt6U%2FnlDhw%2BIZy5Xh6HuAL5gspJK%2BPlNeUPRp9OUik2aoBmI0KbuWE5wANbnjlXVQ9Be7f9pE0p7X7zaR%2BBjnIIk9X%2Ff6nDBZiwHzaH70pnqzef6v1D8Vv%2F359FS5kMYK5GrX0TeiQXwWWdrJJMEL5tDF56Z0RFRKQgqMlobuTjvJViBRCkEdHwuFvP%2FDl%2F4skK8tjkcHAF7fEw%2Bvm5srVX50ZKO4cIhwv46UBE8FuEaVRk%2FWTBKsiNi1ImgXifbNZgAvUHCRUSg%2BUSd9hX38G1oT8ZkYc5j%2FHkJYUkacsJpfQIb4ybrQVNTivBfIkIlu6dtr%2B%2FuzFOjpbFwSTC%2F85psBCfxQdelEekDqEiNRbtp2Fkqwew%2FvU%2BI9k2FwW4cQC0%2Bofw37TLGXaa4PgoQvKaEwyDdSXBIHcpahKuALPdxqDCR6pzEBjqkAYCIDDKrUwYzcvES%2BMr7Dko87Um53seMUVe4tWlzcCKT4d08K0%2Bpq4VgWc0gkgYFc3yblpqDWo7O2qx9FkDPAccHj%2B%2BYi2EkrHAyBn5lkuO39rwtPXv5Cpi4AuEkrkhyauXDnWQEBH4n78z%2FDih7kvc9FsOyi79c34jEx%2FsUVxBETcAqLCiJxVHKwwpS8lRh4LfrEpwNQjk382VxJhJvNZV5Vqqk&X-Amz-Signature=d813159f1448ab294d60d78ede0c4770960a496f30fc9783a7e94129de50bdbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZPTB6S%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCmQRQxJV65YR1k9DVl3m4UigGsrCVOi5tZPbFFCTPLNAIhALjFRK9lGi4q9N8PLFivx3eAz%2BYCmLSymx%2B8uoz%2B7AiWKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoI00fWuMmJOOtjbYq3APb7PGgJGa99yEZvOfL4ECHENbDYWfmCRSNb4JHZ84BE23tkUWyaFCtWAfa1NvHut5zAMYsKAOKuqN2eJzjdEQGI3dw8HbhbjZGO9cqD6pMMafV8FMn9Pm7T4PuE7WIqYzhPoWeiDtZJm%2FWbS8MCFgH7H2wkUD5Ra9skjIXgNJ666pd8sWxe2tUpbv4ZmEgDncoqVMhhHLL9pFgJt6U%2FnlDhw%2BIZy5Xh6HuAL5gspJK%2BPlNeUPRp9OUik2aoBmI0KbuWE5wANbnjlXVQ9Be7f9pE0p7X7zaR%2BBjnIIk9X%2Ff6nDBZiwHzaH70pnqzef6v1D8Vv%2F359FS5kMYK5GrX0TeiQXwWWdrJJMEL5tDF56Z0RFRKQgqMlobuTjvJViBRCkEdHwuFvP%2FDl%2F4skK8tjkcHAF7fEw%2Bvm5srVX50ZKO4cIhwv46UBE8FuEaVRk%2FWTBKsiNi1ImgXifbNZgAvUHCRUSg%2BUSd9hX38G1oT8ZkYc5j%2FHkJYUkacsJpfQIb4ybrQVNTivBfIkIlu6dtr%2B%2FuzFOjpbFwSTC%2F85psBCfxQdelEekDqEiNRbtp2Fkqwew%2FvU%2BI9k2FwW4cQC0%2Bofw37TLGXaa4PgoQvKaEwyDdSXBIHcpahKuALPdxqDCR6pzEBjqkAYCIDDKrUwYzcvES%2BMr7Dko87Um53seMUVe4tWlzcCKT4d08K0%2Bpq4VgWc0gkgYFc3yblpqDWo7O2qx9FkDPAccHj%2B%2BYi2EkrHAyBn5lkuO39rwtPXv5Cpi4AuEkrkhyauXDnWQEBH4n78z%2FDih7kvc9FsOyi79c34jEx%2FsUVxBETcAqLCiJxVHKwwpS8lRh4LfrEpwNQjk382VxJhJvNZV5Vqqk&X-Amz-Signature=a8445664b20ea2c0f55edae47dee7628541a225a40f5211968e7808c33993111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZPTB6S%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCmQRQxJV65YR1k9DVl3m4UigGsrCVOi5tZPbFFCTPLNAIhALjFRK9lGi4q9N8PLFivx3eAz%2BYCmLSymx%2B8uoz%2B7AiWKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoI00fWuMmJOOtjbYq3APb7PGgJGa99yEZvOfL4ECHENbDYWfmCRSNb4JHZ84BE23tkUWyaFCtWAfa1NvHut5zAMYsKAOKuqN2eJzjdEQGI3dw8HbhbjZGO9cqD6pMMafV8FMn9Pm7T4PuE7WIqYzhPoWeiDtZJm%2FWbS8MCFgH7H2wkUD5Ra9skjIXgNJ666pd8sWxe2tUpbv4ZmEgDncoqVMhhHLL9pFgJt6U%2FnlDhw%2BIZy5Xh6HuAL5gspJK%2BPlNeUPRp9OUik2aoBmI0KbuWE5wANbnjlXVQ9Be7f9pE0p7X7zaR%2BBjnIIk9X%2Ff6nDBZiwHzaH70pnqzef6v1D8Vv%2F359FS5kMYK5GrX0TeiQXwWWdrJJMEL5tDF56Z0RFRKQgqMlobuTjvJViBRCkEdHwuFvP%2FDl%2F4skK8tjkcHAF7fEw%2Bvm5srVX50ZKO4cIhwv46UBE8FuEaVRk%2FWTBKsiNi1ImgXifbNZgAvUHCRUSg%2BUSd9hX38G1oT8ZkYc5j%2FHkJYUkacsJpfQIb4ybrQVNTivBfIkIlu6dtr%2B%2FuzFOjpbFwSTC%2F85psBCfxQdelEekDqEiNRbtp2Fkqwew%2FvU%2BI9k2FwW4cQC0%2Bofw37TLGXaa4PgoQvKaEwyDdSXBIHcpahKuALPdxqDCR6pzEBjqkAYCIDDKrUwYzcvES%2BMr7Dko87Um53seMUVe4tWlzcCKT4d08K0%2Bpq4VgWc0gkgYFc3yblpqDWo7O2qx9FkDPAccHj%2B%2BYi2EkrHAyBn5lkuO39rwtPXv5Cpi4AuEkrkhyauXDnWQEBH4n78z%2FDih7kvc9FsOyi79c34jEx%2FsUVxBETcAqLCiJxVHKwwpS8lRh4LfrEpwNQjk382VxJhJvNZV5Vqqk&X-Amz-Signature=df810df6d58629e6b73a70f6dc262383f1b1c02a74fa205ba308fb6da9a7f272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZPTB6S%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCmQRQxJV65YR1k9DVl3m4UigGsrCVOi5tZPbFFCTPLNAIhALjFRK9lGi4q9N8PLFivx3eAz%2BYCmLSymx%2B8uoz%2B7AiWKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoI00fWuMmJOOtjbYq3APb7PGgJGa99yEZvOfL4ECHENbDYWfmCRSNb4JHZ84BE23tkUWyaFCtWAfa1NvHut5zAMYsKAOKuqN2eJzjdEQGI3dw8HbhbjZGO9cqD6pMMafV8FMn9Pm7T4PuE7WIqYzhPoWeiDtZJm%2FWbS8MCFgH7H2wkUD5Ra9skjIXgNJ666pd8sWxe2tUpbv4ZmEgDncoqVMhhHLL9pFgJt6U%2FnlDhw%2BIZy5Xh6HuAL5gspJK%2BPlNeUPRp9OUik2aoBmI0KbuWE5wANbnjlXVQ9Be7f9pE0p7X7zaR%2BBjnIIk9X%2Ff6nDBZiwHzaH70pnqzef6v1D8Vv%2F359FS5kMYK5GrX0TeiQXwWWdrJJMEL5tDF56Z0RFRKQgqMlobuTjvJViBRCkEdHwuFvP%2FDl%2F4skK8tjkcHAF7fEw%2Bvm5srVX50ZKO4cIhwv46UBE8FuEaVRk%2FWTBKsiNi1ImgXifbNZgAvUHCRUSg%2BUSd9hX38G1oT8ZkYc5j%2FHkJYUkacsJpfQIb4ybrQVNTivBfIkIlu6dtr%2B%2FuzFOjpbFwSTC%2F85psBCfxQdelEekDqEiNRbtp2Fkqwew%2FvU%2BI9k2FwW4cQC0%2Bofw37TLGXaa4PgoQvKaEwyDdSXBIHcpahKuALPdxqDCR6pzEBjqkAYCIDDKrUwYzcvES%2BMr7Dko87Um53seMUVe4tWlzcCKT4d08K0%2Bpq4VgWc0gkgYFc3yblpqDWo7O2qx9FkDPAccHj%2B%2BYi2EkrHAyBn5lkuO39rwtPXv5Cpi4AuEkrkhyauXDnWQEBH4n78z%2FDih7kvc9FsOyi79c34jEx%2FsUVxBETcAqLCiJxVHKwwpS8lRh4LfrEpwNQjk382VxJhJvNZV5Vqqk&X-Amz-Signature=d2e2e3453f9a90b11537dfb2e0dd74dc2294e73a856d75052940f1bd82ff306a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625VQNCGI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCNiRdR6T%2Beemi%2FmEXeRU1UnrhPhIfmlmezaxhNaPw%2B2wIgZm0Bkz6KJPOThMrtO5n%2BAu1Z1Yd00hnK680bPApPAsMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABw29hvRh2g0%2F2ROCrcA42Qlq8XPeoPpA1WCMAt79mO4NjLx0kHgVtYYJ3hlDutgCgqimFVdkRRHjIv83PvaIDEdOipYL6EB13ssv2oAXD02Byon3vySFwL16gYg16%2FUbuAwb2JLOmNlAMgO7aGhr%2BGGWgWZC12Rixm%2Bf984xq6tpTay%2FMae%2BwXvSn40Rm%2FCdZbMvHZO6n7SUAF34l9ln1QA6JtFazK6Y2NL8mTRKOyRw1O13AXPYEbaQ1yt5UorJTvI5bmJVfVjxqHrBYWItalqqtGNTzV7WVZJ0pT1vgaJC7yjmQJCeD3yYsBVglDlTa8lDOgW2MQ7Xk0Q%2BKcWKc%2BVkbSUk9GkJcehnFtG2hEsyeBDHMcnhQc4qZNMEkD4uc5MM1rkBqQJgb3qR4t29JJljHmUmeyo4oiC3dTHqplS3vJbjDNz%2B%2B4h9mAM6aajNoJ6D5jZCyUsrrUZF5aAcuDHPZg0Eh2w5HImcXLJNj0o1FlOfDje1%2BHyqM6fxFIPNmvTYTG2Pa%2F9v8Y9IITd288QdK6OoFJiEfU96JkLpwn7hafn7uX78gmooRm1RjsmMTGWVVPFXQdqDKhpdq68wCKfrkb7tNTdyNeaEORzvNxyjRQNcybJIvJO%2FJq3m8VLliq2nw2OMfMfySzMPLpnMQGOqUBJZbyOiSyIxhpsZy3tECjBsvfzFlNowgrIxzBaUHITeRPW4qCM8CKrn2TaZ2yB%2FNzPGCsgVscdxK47LmOA%2BREmvz52AVbq4c4h4ieZ61BVjZUFA4gK6b36ycFBG2GR3ZzaFYLNWXb8CrxCB5ujRdE0htSKEd1%2BGh4ZCVsWXyd99PMgnFqerTC3p9TM2rjAxqg%2FUtsZ82BfFWRhppTSYK5Dpduvvj9&X-Amz-Signature=3a2a4ca01a19b7b2f859732c1bdcd0a2bae9d2e47d5cdd7d7751ce98ecf22cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

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

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMZPTB6S%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCmQRQxJV65YR1k9DVl3m4UigGsrCVOi5tZPbFFCTPLNAIhALjFRK9lGi4q9N8PLFivx3eAz%2BYCmLSymx%2B8uoz%2B7AiWKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoI00fWuMmJOOtjbYq3APb7PGgJGa99yEZvOfL4ECHENbDYWfmCRSNb4JHZ84BE23tkUWyaFCtWAfa1NvHut5zAMYsKAOKuqN2eJzjdEQGI3dw8HbhbjZGO9cqD6pMMafV8FMn9Pm7T4PuE7WIqYzhPoWeiDtZJm%2FWbS8MCFgH7H2wkUD5Ra9skjIXgNJ666pd8sWxe2tUpbv4ZmEgDncoqVMhhHLL9pFgJt6U%2FnlDhw%2BIZy5Xh6HuAL5gspJK%2BPlNeUPRp9OUik2aoBmI0KbuWE5wANbnjlXVQ9Be7f9pE0p7X7zaR%2BBjnIIk9X%2Ff6nDBZiwHzaH70pnqzef6v1D8Vv%2F359FS5kMYK5GrX0TeiQXwWWdrJJMEL5tDF56Z0RFRKQgqMlobuTjvJViBRCkEdHwuFvP%2FDl%2F4skK8tjkcHAF7fEw%2Bvm5srVX50ZKO4cIhwv46UBE8FuEaVRk%2FWTBKsiNi1ImgXifbNZgAvUHCRUSg%2BUSd9hX38G1oT8ZkYc5j%2FHkJYUkacsJpfQIb4ybrQVNTivBfIkIlu6dtr%2B%2FuzFOjpbFwSTC%2F85psBCfxQdelEekDqEiNRbtp2Fkqwew%2FvU%2BI9k2FwW4cQC0%2Bofw37TLGXaa4PgoQvKaEwyDdSXBIHcpahKuALPdxqDCR6pzEBjqkAYCIDDKrUwYzcvES%2BMr7Dko87Um53seMUVe4tWlzcCKT4d08K0%2Bpq4VgWc0gkgYFc3yblpqDWo7O2qx9FkDPAccHj%2B%2BYi2EkrHAyBn5lkuO39rwtPXv5Cpi4AuEkrkhyauXDnWQEBH4n78z%2FDih7kvc9FsOyi79c34jEx%2FsUVxBETcAqLCiJxVHKwwpS8lRh4LfrEpwNQjk382VxJhJvNZV5Vqqk&X-Amz-Signature=14e68231cb7f4e444d2fc9cacdc32e0d1b6095aa86ae44576128b7cd9e0f0fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLU7XCB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDH7Xb04goBUKymRFv4S9EutgW5GOO%2FhfzK7OxvMxDB2AIgTmQ5GNxDa3yfuIxyfyxB8CxtqaIsxOCE5hhu9mF3gKcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1MJ9urbqFKJXXc2ircA3fR8lb8ecfVk1K%2F2IXnFpzgUnK9fZ3IaeaQSnYiPN1D0%2BJ6R4Q5GhXkl%2BhIDdcjI%2FN61bq%2FxQpGNCKhS%2B50ZO6pbXnVxXV1qVhc%2F67S3rtVqjKutFW5KbRC9vbqFnoljabgTi2EvAVrQ6wxEc6FU3K00OYjM9%2FBmS7ipOiIbuyuqPZhooY%2BhbZxvP5xulDPHrwG10Tckkrbb0lgCuh0ljEIuo3kfmXwOx5TD%2FQa9ola8PuizTrZG9YnxHa4WeRhgAE%2B4LY2TMzzLHhfrXkKFCndfs44Tyxx7jHMHjpSo3FvmjydO85Gy18AVJrbSLKXjkFAVpt4b4nNbNJ0C1qFYRnKXdLs6avE6mQ6vsK9GAH8GG2kaVuvA617ket3qkaA0GbYjRH5V4Sj6LYigDd73hJR6Y2cf7c%2BBk5OcN686yIV8H2B2Ya9yreozY0EohPcTuBGfjLm29C79EYpkCo%2Bph55sIEZSpnsrjLZgpc%2Bh20KeCofjWpnZIIl%2Byba3NtCuFSxKJKODibuAxI02naJ72puH%2F6xgZk4yztWlfotK41gjwdG4rC29NVVCBbCkjxGZvrqCeM3qcJVxlB5%2FGgh4w8off1ene4cDg8YqS6vNcw4J%2FKJTdpY78WARe6eMJHqnMQGOqUB40BL4YbgBdeqLkq9OQl5HSAbP%2FYv1%2BJQ%2BaAm1bSS0oWYIx1jxw174v%2BA2qzUNN%2FZBIJtBHHCIcCVbgO6cdTLczqWBBLzvw0BP9NQymq8P%2B89UznXTeyRLGpoXWMyQk%2B0oQv8EyhKIXMjOfSI23zQj8jNnH%2BPpAGPnfAuXTWRnPDidXGUJ6TOpG1BaoN0TBQorV5o8Lo7M5efnmSlV966gbRRT5ha&X-Amz-Signature=33134ade4f6756efb1537e334f21870675a5f506c1c048962f88fca1df91efe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLU7XCB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDH7Xb04goBUKymRFv4S9EutgW5GOO%2FhfzK7OxvMxDB2AIgTmQ5GNxDa3yfuIxyfyxB8CxtqaIsxOCE5hhu9mF3gKcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1MJ9urbqFKJXXc2ircA3fR8lb8ecfVk1K%2F2IXnFpzgUnK9fZ3IaeaQSnYiPN1D0%2BJ6R4Q5GhXkl%2BhIDdcjI%2FN61bq%2FxQpGNCKhS%2B50ZO6pbXnVxXV1qVhc%2F67S3rtVqjKutFW5KbRC9vbqFnoljabgTi2EvAVrQ6wxEc6FU3K00OYjM9%2FBmS7ipOiIbuyuqPZhooY%2BhbZxvP5xulDPHrwG10Tckkrbb0lgCuh0ljEIuo3kfmXwOx5TD%2FQa9ola8PuizTrZG9YnxHa4WeRhgAE%2B4LY2TMzzLHhfrXkKFCndfs44Tyxx7jHMHjpSo3FvmjydO85Gy18AVJrbSLKXjkFAVpt4b4nNbNJ0C1qFYRnKXdLs6avE6mQ6vsK9GAH8GG2kaVuvA617ket3qkaA0GbYjRH5V4Sj6LYigDd73hJR6Y2cf7c%2BBk5OcN686yIV8H2B2Ya9yreozY0EohPcTuBGfjLm29C79EYpkCo%2Bph55sIEZSpnsrjLZgpc%2Bh20KeCofjWpnZIIl%2Byba3NtCuFSxKJKODibuAxI02naJ72puH%2F6xgZk4yztWlfotK41gjwdG4rC29NVVCBbCkjxGZvrqCeM3qcJVxlB5%2FGgh4w8off1ene4cDg8YqS6vNcw4J%2FKJTdpY78WARe6eMJHqnMQGOqUB40BL4YbgBdeqLkq9OQl5HSAbP%2FYv1%2BJQ%2BaAm1bSS0oWYIx1jxw174v%2BA2qzUNN%2FZBIJtBHHCIcCVbgO6cdTLczqWBBLzvw0BP9NQymq8P%2B89UznXTeyRLGpoXWMyQk%2B0oQv8EyhKIXMjOfSI23zQj8jNnH%2BPpAGPnfAuXTWRnPDidXGUJ6TOpG1BaoN0TBQorV5o8Lo7M5efnmSlV966gbRRT5ha&X-Amz-Signature=28625a49a03b28b99693f723cdc536f1b7dcdaac100f5235315803ed0b7a92a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLU7XCB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDH7Xb04goBUKymRFv4S9EutgW5GOO%2FhfzK7OxvMxDB2AIgTmQ5GNxDa3yfuIxyfyxB8CxtqaIsxOCE5hhu9mF3gKcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1MJ9urbqFKJXXc2ircA3fR8lb8ecfVk1K%2F2IXnFpzgUnK9fZ3IaeaQSnYiPN1D0%2BJ6R4Q5GhXkl%2BhIDdcjI%2FN61bq%2FxQpGNCKhS%2B50ZO6pbXnVxXV1qVhc%2F67S3rtVqjKutFW5KbRC9vbqFnoljabgTi2EvAVrQ6wxEc6FU3K00OYjM9%2FBmS7ipOiIbuyuqPZhooY%2BhbZxvP5xulDPHrwG10Tckkrbb0lgCuh0ljEIuo3kfmXwOx5TD%2FQa9ola8PuizTrZG9YnxHa4WeRhgAE%2B4LY2TMzzLHhfrXkKFCndfs44Tyxx7jHMHjpSo3FvmjydO85Gy18AVJrbSLKXjkFAVpt4b4nNbNJ0C1qFYRnKXdLs6avE6mQ6vsK9GAH8GG2kaVuvA617ket3qkaA0GbYjRH5V4Sj6LYigDd73hJR6Y2cf7c%2BBk5OcN686yIV8H2B2Ya9yreozY0EohPcTuBGfjLm29C79EYpkCo%2Bph55sIEZSpnsrjLZgpc%2Bh20KeCofjWpnZIIl%2Byba3NtCuFSxKJKODibuAxI02naJ72puH%2F6xgZk4yztWlfotK41gjwdG4rC29NVVCBbCkjxGZvrqCeM3qcJVxlB5%2FGgh4w8off1ene4cDg8YqS6vNcw4J%2FKJTdpY78WARe6eMJHqnMQGOqUB40BL4YbgBdeqLkq9OQl5HSAbP%2FYv1%2BJQ%2BaAm1bSS0oWYIx1jxw174v%2BA2qzUNN%2FZBIJtBHHCIcCVbgO6cdTLczqWBBLzvw0BP9NQymq8P%2B89UznXTeyRLGpoXWMyQk%2B0oQv8EyhKIXMjOfSI23zQj8jNnH%2BPpAGPnfAuXTWRnPDidXGUJ6TOpG1BaoN0TBQorV5o8Lo7M5efnmSlV966gbRRT5ha&X-Amz-Signature=ee19adcfcf9ef0f344b0295f21e2028927deae2a336e8df0dc62e75e5debd4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLU7XCB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDH7Xb04goBUKymRFv4S9EutgW5GOO%2FhfzK7OxvMxDB2AIgTmQ5GNxDa3yfuIxyfyxB8CxtqaIsxOCE5hhu9mF3gKcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1MJ9urbqFKJXXc2ircA3fR8lb8ecfVk1K%2F2IXnFpzgUnK9fZ3IaeaQSnYiPN1D0%2BJ6R4Q5GhXkl%2BhIDdcjI%2FN61bq%2FxQpGNCKhS%2B50ZO6pbXnVxXV1qVhc%2F67S3rtVqjKutFW5KbRC9vbqFnoljabgTi2EvAVrQ6wxEc6FU3K00OYjM9%2FBmS7ipOiIbuyuqPZhooY%2BhbZxvP5xulDPHrwG10Tckkrbb0lgCuh0ljEIuo3kfmXwOx5TD%2FQa9ola8PuizTrZG9YnxHa4WeRhgAE%2B4LY2TMzzLHhfrXkKFCndfs44Tyxx7jHMHjpSo3FvmjydO85Gy18AVJrbSLKXjkFAVpt4b4nNbNJ0C1qFYRnKXdLs6avE6mQ6vsK9GAH8GG2kaVuvA617ket3qkaA0GbYjRH5V4Sj6LYigDd73hJR6Y2cf7c%2BBk5OcN686yIV8H2B2Ya9yreozY0EohPcTuBGfjLm29C79EYpkCo%2Bph55sIEZSpnsrjLZgpc%2Bh20KeCofjWpnZIIl%2Byba3NtCuFSxKJKODibuAxI02naJ72puH%2F6xgZk4yztWlfotK41gjwdG4rC29NVVCBbCkjxGZvrqCeM3qcJVxlB5%2FGgh4w8off1ene4cDg8YqS6vNcw4J%2FKJTdpY78WARe6eMJHqnMQGOqUB40BL4YbgBdeqLkq9OQl5HSAbP%2FYv1%2BJQ%2BaAm1bSS0oWYIx1jxw174v%2BA2qzUNN%2FZBIJtBHHCIcCVbgO6cdTLczqWBBLzvw0BP9NQymq8P%2B89UznXTeyRLGpoXWMyQk%2B0oQv8EyhKIXMjOfSI23zQj8jNnH%2BPpAGPnfAuXTWRnPDidXGUJ6TOpG1BaoN0TBQorV5o8Lo7M5efnmSlV966gbRRT5ha&X-Amz-Signature=9a8a16c7c13bb51bea107e5ca3e58434b004c42eab2ca469c41448081ac60e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLU7XCB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDH7Xb04goBUKymRFv4S9EutgW5GOO%2FhfzK7OxvMxDB2AIgTmQ5GNxDa3yfuIxyfyxB8CxtqaIsxOCE5hhu9mF3gKcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1MJ9urbqFKJXXc2ircA3fR8lb8ecfVk1K%2F2IXnFpzgUnK9fZ3IaeaQSnYiPN1D0%2BJ6R4Q5GhXkl%2BhIDdcjI%2FN61bq%2FxQpGNCKhS%2B50ZO6pbXnVxXV1qVhc%2F67S3rtVqjKutFW5KbRC9vbqFnoljabgTi2EvAVrQ6wxEc6FU3K00OYjM9%2FBmS7ipOiIbuyuqPZhooY%2BhbZxvP5xulDPHrwG10Tckkrbb0lgCuh0ljEIuo3kfmXwOx5TD%2FQa9ola8PuizTrZG9YnxHa4WeRhgAE%2B4LY2TMzzLHhfrXkKFCndfs44Tyxx7jHMHjpSo3FvmjydO85Gy18AVJrbSLKXjkFAVpt4b4nNbNJ0C1qFYRnKXdLs6avE6mQ6vsK9GAH8GG2kaVuvA617ket3qkaA0GbYjRH5V4Sj6LYigDd73hJR6Y2cf7c%2BBk5OcN686yIV8H2B2Ya9yreozY0EohPcTuBGfjLm29C79EYpkCo%2Bph55sIEZSpnsrjLZgpc%2Bh20KeCofjWpnZIIl%2Byba3NtCuFSxKJKODibuAxI02naJ72puH%2F6xgZk4yztWlfotK41gjwdG4rC29NVVCBbCkjxGZvrqCeM3qcJVxlB5%2FGgh4w8off1ene4cDg8YqS6vNcw4J%2FKJTdpY78WARe6eMJHqnMQGOqUB40BL4YbgBdeqLkq9OQl5HSAbP%2FYv1%2BJQ%2BaAm1bSS0oWYIx1jxw174v%2BA2qzUNN%2FZBIJtBHHCIcCVbgO6cdTLczqWBBLzvw0BP9NQymq8P%2B89UznXTeyRLGpoXWMyQk%2B0oQv8EyhKIXMjOfSI23zQj8jNnH%2BPpAGPnfAuXTWRnPDidXGUJ6TOpG1BaoN0TBQorV5o8Lo7M5efnmSlV966gbRRT5ha&X-Amz-Signature=997ee51b47f497d6de91c1da55542f5f4fdfaea64690deaad6b0c3e8afb269bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLU7XCB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDH7Xb04goBUKymRFv4S9EutgW5GOO%2FhfzK7OxvMxDB2AIgTmQ5GNxDa3yfuIxyfyxB8CxtqaIsxOCE5hhu9mF3gKcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1MJ9urbqFKJXXc2ircA3fR8lb8ecfVk1K%2F2IXnFpzgUnK9fZ3IaeaQSnYiPN1D0%2BJ6R4Q5GhXkl%2BhIDdcjI%2FN61bq%2FxQpGNCKhS%2B50ZO6pbXnVxXV1qVhc%2F67S3rtVqjKutFW5KbRC9vbqFnoljabgTi2EvAVrQ6wxEc6FU3K00OYjM9%2FBmS7ipOiIbuyuqPZhooY%2BhbZxvP5xulDPHrwG10Tckkrbb0lgCuh0ljEIuo3kfmXwOx5TD%2FQa9ola8PuizTrZG9YnxHa4WeRhgAE%2B4LY2TMzzLHhfrXkKFCndfs44Tyxx7jHMHjpSo3FvmjydO85Gy18AVJrbSLKXjkFAVpt4b4nNbNJ0C1qFYRnKXdLs6avE6mQ6vsK9GAH8GG2kaVuvA617ket3qkaA0GbYjRH5V4Sj6LYigDd73hJR6Y2cf7c%2BBk5OcN686yIV8H2B2Ya9yreozY0EohPcTuBGfjLm29C79EYpkCo%2Bph55sIEZSpnsrjLZgpc%2Bh20KeCofjWpnZIIl%2Byba3NtCuFSxKJKODibuAxI02naJ72puH%2F6xgZk4yztWlfotK41gjwdG4rC29NVVCBbCkjxGZvrqCeM3qcJVxlB5%2FGgh4w8off1ene4cDg8YqS6vNcw4J%2FKJTdpY78WARe6eMJHqnMQGOqUB40BL4YbgBdeqLkq9OQl5HSAbP%2FYv1%2BJQ%2BaAm1bSS0oWYIx1jxw174v%2BA2qzUNN%2FZBIJtBHHCIcCVbgO6cdTLczqWBBLzvw0BP9NQymq8P%2B89UznXTeyRLGpoXWMyQk%2B0oQv8EyhKIXMjOfSI23zQj8jNnH%2BPpAGPnfAuXTWRnPDidXGUJ6TOpG1BaoN0TBQorV5o8Lo7M5efnmSlV966gbRRT5ha&X-Amz-Signature=6b2945347addba33113902d5293553708dbd590c1d9348a2b736ad9437d34c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNLU7XCB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDH7Xb04goBUKymRFv4S9EutgW5GOO%2FhfzK7OxvMxDB2AIgTmQ5GNxDa3yfuIxyfyxB8CxtqaIsxOCE5hhu9mF3gKcqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM1MJ9urbqFKJXXc2ircA3fR8lb8ecfVk1K%2F2IXnFpzgUnK9fZ3IaeaQSnYiPN1D0%2BJ6R4Q5GhXkl%2BhIDdcjI%2FN61bq%2FxQpGNCKhS%2B50ZO6pbXnVxXV1qVhc%2F67S3rtVqjKutFW5KbRC9vbqFnoljabgTi2EvAVrQ6wxEc6FU3K00OYjM9%2FBmS7ipOiIbuyuqPZhooY%2BhbZxvP5xulDPHrwG10Tckkrbb0lgCuh0ljEIuo3kfmXwOx5TD%2FQa9ola8PuizTrZG9YnxHa4WeRhgAE%2B4LY2TMzzLHhfrXkKFCndfs44Tyxx7jHMHjpSo3FvmjydO85Gy18AVJrbSLKXjkFAVpt4b4nNbNJ0C1qFYRnKXdLs6avE6mQ6vsK9GAH8GG2kaVuvA617ket3qkaA0GbYjRH5V4Sj6LYigDd73hJR6Y2cf7c%2BBk5OcN686yIV8H2B2Ya9yreozY0EohPcTuBGfjLm29C79EYpkCo%2Bph55sIEZSpnsrjLZgpc%2Bh20KeCofjWpnZIIl%2Byba3NtCuFSxKJKODibuAxI02naJ72puH%2F6xgZk4yztWlfotK41gjwdG4rC29NVVCBbCkjxGZvrqCeM3qcJVxlB5%2FGgh4w8off1ene4cDg8YqS6vNcw4J%2FKJTdpY78WARe6eMJHqnMQGOqUB40BL4YbgBdeqLkq9OQl5HSAbP%2FYv1%2BJQ%2BaAm1bSS0oWYIx1jxw174v%2BA2qzUNN%2FZBIJtBHHCIcCVbgO6cdTLczqWBBLzvw0BP9NQymq8P%2B89UznXTeyRLGpoXWMyQk%2B0oQv8EyhKIXMjOfSI23zQj8jNnH%2BPpAGPnfAuXTWRnPDidXGUJ6TOpG1BaoN0TBQorV5o8Lo7M5efnmSlV966gbRRT5ha&X-Amz-Signature=c6ddb8e94e99a96fd72aac4738e73f4da6bccad76a685a6672f2b1c054c3b9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: idk mention + link Robot Localization node
