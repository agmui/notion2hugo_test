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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV2MLHT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXsV%2FeRJhNdEXks14HwDVo%2BohXms7H36NUoGQWhVFPhAiEAgjj6nALPiZt%2FFqpr7Db03oIAKout%2BtywJLNpvRdJa6oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEW1zt%2FD7yKz5mWKSrcA1XgBFGxOSyyXWPc0MphLwKgbOFgULjOB2X5VW82FX6n3sBpL%2BEGSUx6%2F1HbswpRnEEgFhIjylY7jjUJr2%2Fu2MHZDWy8uwHyU43ojF1uNU%2FNhZAeuit8cayOYk243jxpomJxon4s2k%2BO11QyD7eTDNQxFhO4NEWHSsZK8MJqv1mIN08m%2F5mRlg9a6Ku8SoII%2BNX8UNiV6Z8KUKLBReMJbydv%2BZBvJ%2FY71w%2Bup%2FGWBtPoWiwZnz43KkB8lyR0IJJg4t5%2BjeJurHiR%2BBxiyGkcWNvAMOPpuHnuFYO1YTTUOtCe52eIWNaBUi%2BW7oXJxBempoxiRQkL2nguDVIB9Ty4pucGGkFUAYnS2upa%2Bi%2B07rTPNZxjt8NtV8HlF1sAvIqXim6d2XKBc17%2BgG0Ol5bjeYKAUlV9RgPvv605%2BdEgxYwUqgdXq78Ab4V3bqmXvCuAta0aA1M2geArP1rxZp2HTfY5sqnP9cUSvJ%2BHe2aRMrAG3w8qcHgK68QOqZ6UTZQJ8zFyEJabHdSk58gj5bMqIyEfH4xndFbTr2Lo1kTPp%2FHdx%2FqDh90Pwx9cti75CVlETY1FJBY%2FMrQwfqmWvqiIn2vMSVZeaW8zFNuLXgTRXi0CWx2SGuKn1uN0dJvhML%2By38QGOqUBXSvXjIODBDkXJHa%2F36okUwcodnRPhUgNLF8IfJZQ4C418xoSKO0hN%2FbqppkLv3YOSHFhjkzEoe%2FvnfUz6pcMfWNGZ6YVKnwZcQwdF%2FXaymxTDRnV9EhksF%2BlpyeTd2uhYC2CSxqnetzqseceUR5%2B%2F2cTb7irg7oo%2BGMUrDfN0xnguUy0Xl63YdaV2myNjlOZjgjYytnOElbwbaZZ1jFLlC153WXp&X-Amz-Signature=720cd4f49c2de1b895150c96b012e296cff86df5a392fac9f33c63ba3a581c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV2MLHT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXsV%2FeRJhNdEXks14HwDVo%2BohXms7H36NUoGQWhVFPhAiEAgjj6nALPiZt%2FFqpr7Db03oIAKout%2BtywJLNpvRdJa6oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEW1zt%2FD7yKz5mWKSrcA1XgBFGxOSyyXWPc0MphLwKgbOFgULjOB2X5VW82FX6n3sBpL%2BEGSUx6%2F1HbswpRnEEgFhIjylY7jjUJr2%2Fu2MHZDWy8uwHyU43ojF1uNU%2FNhZAeuit8cayOYk243jxpomJxon4s2k%2BO11QyD7eTDNQxFhO4NEWHSsZK8MJqv1mIN08m%2F5mRlg9a6Ku8SoII%2BNX8UNiV6Z8KUKLBReMJbydv%2BZBvJ%2FY71w%2Bup%2FGWBtPoWiwZnz43KkB8lyR0IJJg4t5%2BjeJurHiR%2BBxiyGkcWNvAMOPpuHnuFYO1YTTUOtCe52eIWNaBUi%2BW7oXJxBempoxiRQkL2nguDVIB9Ty4pucGGkFUAYnS2upa%2Bi%2B07rTPNZxjt8NtV8HlF1sAvIqXim6d2XKBc17%2BgG0Ol5bjeYKAUlV9RgPvv605%2BdEgxYwUqgdXq78Ab4V3bqmXvCuAta0aA1M2geArP1rxZp2HTfY5sqnP9cUSvJ%2BHe2aRMrAG3w8qcHgK68QOqZ6UTZQJ8zFyEJabHdSk58gj5bMqIyEfH4xndFbTr2Lo1kTPp%2FHdx%2FqDh90Pwx9cti75CVlETY1FJBY%2FMrQwfqmWvqiIn2vMSVZeaW8zFNuLXgTRXi0CWx2SGuKn1uN0dJvhML%2By38QGOqUBXSvXjIODBDkXJHa%2F36okUwcodnRPhUgNLF8IfJZQ4C418xoSKO0hN%2FbqppkLv3YOSHFhjkzEoe%2FvnfUz6pcMfWNGZ6YVKnwZcQwdF%2FXaymxTDRnV9EhksF%2BlpyeTd2uhYC2CSxqnetzqseceUR5%2B%2F2cTb7irg7oo%2BGMUrDfN0xnguUy0Xl63YdaV2myNjlOZjgjYytnOElbwbaZZ1jFLlC153WXp&X-Amz-Signature=5cdbb080d423346c5270c399b948c37daddebd5265d0324aa3dbe9e63abe17c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV2MLHT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXsV%2FeRJhNdEXks14HwDVo%2BohXms7H36NUoGQWhVFPhAiEAgjj6nALPiZt%2FFqpr7Db03oIAKout%2BtywJLNpvRdJa6oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEW1zt%2FD7yKz5mWKSrcA1XgBFGxOSyyXWPc0MphLwKgbOFgULjOB2X5VW82FX6n3sBpL%2BEGSUx6%2F1HbswpRnEEgFhIjylY7jjUJr2%2Fu2MHZDWy8uwHyU43ojF1uNU%2FNhZAeuit8cayOYk243jxpomJxon4s2k%2BO11QyD7eTDNQxFhO4NEWHSsZK8MJqv1mIN08m%2F5mRlg9a6Ku8SoII%2BNX8UNiV6Z8KUKLBReMJbydv%2BZBvJ%2FY71w%2Bup%2FGWBtPoWiwZnz43KkB8lyR0IJJg4t5%2BjeJurHiR%2BBxiyGkcWNvAMOPpuHnuFYO1YTTUOtCe52eIWNaBUi%2BW7oXJxBempoxiRQkL2nguDVIB9Ty4pucGGkFUAYnS2upa%2Bi%2B07rTPNZxjt8NtV8HlF1sAvIqXim6d2XKBc17%2BgG0Ol5bjeYKAUlV9RgPvv605%2BdEgxYwUqgdXq78Ab4V3bqmXvCuAta0aA1M2geArP1rxZp2HTfY5sqnP9cUSvJ%2BHe2aRMrAG3w8qcHgK68QOqZ6UTZQJ8zFyEJabHdSk58gj5bMqIyEfH4xndFbTr2Lo1kTPp%2FHdx%2FqDh90Pwx9cti75CVlETY1FJBY%2FMrQwfqmWvqiIn2vMSVZeaW8zFNuLXgTRXi0CWx2SGuKn1uN0dJvhML%2By38QGOqUBXSvXjIODBDkXJHa%2F36okUwcodnRPhUgNLF8IfJZQ4C418xoSKO0hN%2FbqppkLv3YOSHFhjkzEoe%2FvnfUz6pcMfWNGZ6YVKnwZcQwdF%2FXaymxTDRnV9EhksF%2BlpyeTd2uhYC2CSxqnetzqseceUR5%2B%2F2cTb7irg7oo%2BGMUrDfN0xnguUy0Xl63YdaV2myNjlOZjgjYytnOElbwbaZZ1jFLlC153WXp&X-Amz-Signature=8de3b1ce46eb9f51a2e4acc996ccb9c98002049fe876edad298f5562cd080c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV2MLHT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXsV%2FeRJhNdEXks14HwDVo%2BohXms7H36NUoGQWhVFPhAiEAgjj6nALPiZt%2FFqpr7Db03oIAKout%2BtywJLNpvRdJa6oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEW1zt%2FD7yKz5mWKSrcA1XgBFGxOSyyXWPc0MphLwKgbOFgULjOB2X5VW82FX6n3sBpL%2BEGSUx6%2F1HbswpRnEEgFhIjylY7jjUJr2%2Fu2MHZDWy8uwHyU43ojF1uNU%2FNhZAeuit8cayOYk243jxpomJxon4s2k%2BO11QyD7eTDNQxFhO4NEWHSsZK8MJqv1mIN08m%2F5mRlg9a6Ku8SoII%2BNX8UNiV6Z8KUKLBReMJbydv%2BZBvJ%2FY71w%2Bup%2FGWBtPoWiwZnz43KkB8lyR0IJJg4t5%2BjeJurHiR%2BBxiyGkcWNvAMOPpuHnuFYO1YTTUOtCe52eIWNaBUi%2BW7oXJxBempoxiRQkL2nguDVIB9Ty4pucGGkFUAYnS2upa%2Bi%2B07rTPNZxjt8NtV8HlF1sAvIqXim6d2XKBc17%2BgG0Ol5bjeYKAUlV9RgPvv605%2BdEgxYwUqgdXq78Ab4V3bqmXvCuAta0aA1M2geArP1rxZp2HTfY5sqnP9cUSvJ%2BHe2aRMrAG3w8qcHgK68QOqZ6UTZQJ8zFyEJabHdSk58gj5bMqIyEfH4xndFbTr2Lo1kTPp%2FHdx%2FqDh90Pwx9cti75CVlETY1FJBY%2FMrQwfqmWvqiIn2vMSVZeaW8zFNuLXgTRXi0CWx2SGuKn1uN0dJvhML%2By38QGOqUBXSvXjIODBDkXJHa%2F36okUwcodnRPhUgNLF8IfJZQ4C418xoSKO0hN%2FbqppkLv3YOSHFhjkzEoe%2FvnfUz6pcMfWNGZ6YVKnwZcQwdF%2FXaymxTDRnV9EhksF%2BlpyeTd2uhYC2CSxqnetzqseceUR5%2B%2F2cTb7irg7oo%2BGMUrDfN0xnguUy0Xl63YdaV2myNjlOZjgjYytnOElbwbaZZ1jFLlC153WXp&X-Amz-Signature=08303a99d4128ba52775cd0b195f52cb559371bb5bf3a0a9eaa210ab5a1a5695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV2MLHT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXsV%2FeRJhNdEXks14HwDVo%2BohXms7H36NUoGQWhVFPhAiEAgjj6nALPiZt%2FFqpr7Db03oIAKout%2BtywJLNpvRdJa6oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEW1zt%2FD7yKz5mWKSrcA1XgBFGxOSyyXWPc0MphLwKgbOFgULjOB2X5VW82FX6n3sBpL%2BEGSUx6%2F1HbswpRnEEgFhIjylY7jjUJr2%2Fu2MHZDWy8uwHyU43ojF1uNU%2FNhZAeuit8cayOYk243jxpomJxon4s2k%2BO11QyD7eTDNQxFhO4NEWHSsZK8MJqv1mIN08m%2F5mRlg9a6Ku8SoII%2BNX8UNiV6Z8KUKLBReMJbydv%2BZBvJ%2FY71w%2Bup%2FGWBtPoWiwZnz43KkB8lyR0IJJg4t5%2BjeJurHiR%2BBxiyGkcWNvAMOPpuHnuFYO1YTTUOtCe52eIWNaBUi%2BW7oXJxBempoxiRQkL2nguDVIB9Ty4pucGGkFUAYnS2upa%2Bi%2B07rTPNZxjt8NtV8HlF1sAvIqXim6d2XKBc17%2BgG0Ol5bjeYKAUlV9RgPvv605%2BdEgxYwUqgdXq78Ab4V3bqmXvCuAta0aA1M2geArP1rxZp2HTfY5sqnP9cUSvJ%2BHe2aRMrAG3w8qcHgK68QOqZ6UTZQJ8zFyEJabHdSk58gj5bMqIyEfH4xndFbTr2Lo1kTPp%2FHdx%2FqDh90Pwx9cti75CVlETY1FJBY%2FMrQwfqmWvqiIn2vMSVZeaW8zFNuLXgTRXi0CWx2SGuKn1uN0dJvhML%2By38QGOqUBXSvXjIODBDkXJHa%2F36okUwcodnRPhUgNLF8IfJZQ4C418xoSKO0hN%2FbqppkLv3YOSHFhjkzEoe%2FvnfUz6pcMfWNGZ6YVKnwZcQwdF%2FXaymxTDRnV9EhksF%2BlpyeTd2uhYC2CSxqnetzqseceUR5%2B%2F2cTb7irg7oo%2BGMUrDfN0xnguUy0Xl63YdaV2myNjlOZjgjYytnOElbwbaZZ1jFLlC153WXp&X-Amz-Signature=ef81a8055f5d671a3d66fabbac6f8c2e48aaf5c360e32ea46a59850770609b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV2MLHT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXsV%2FeRJhNdEXks14HwDVo%2BohXms7H36NUoGQWhVFPhAiEAgjj6nALPiZt%2FFqpr7Db03oIAKout%2BtywJLNpvRdJa6oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEW1zt%2FD7yKz5mWKSrcA1XgBFGxOSyyXWPc0MphLwKgbOFgULjOB2X5VW82FX6n3sBpL%2BEGSUx6%2F1HbswpRnEEgFhIjylY7jjUJr2%2Fu2MHZDWy8uwHyU43ojF1uNU%2FNhZAeuit8cayOYk243jxpomJxon4s2k%2BO11QyD7eTDNQxFhO4NEWHSsZK8MJqv1mIN08m%2F5mRlg9a6Ku8SoII%2BNX8UNiV6Z8KUKLBReMJbydv%2BZBvJ%2FY71w%2Bup%2FGWBtPoWiwZnz43KkB8lyR0IJJg4t5%2BjeJurHiR%2BBxiyGkcWNvAMOPpuHnuFYO1YTTUOtCe52eIWNaBUi%2BW7oXJxBempoxiRQkL2nguDVIB9Ty4pucGGkFUAYnS2upa%2Bi%2B07rTPNZxjt8NtV8HlF1sAvIqXim6d2XKBc17%2BgG0Ol5bjeYKAUlV9RgPvv605%2BdEgxYwUqgdXq78Ab4V3bqmXvCuAta0aA1M2geArP1rxZp2HTfY5sqnP9cUSvJ%2BHe2aRMrAG3w8qcHgK68QOqZ6UTZQJ8zFyEJabHdSk58gj5bMqIyEfH4xndFbTr2Lo1kTPp%2FHdx%2FqDh90Pwx9cti75CVlETY1FJBY%2FMrQwfqmWvqiIn2vMSVZeaW8zFNuLXgTRXi0CWx2SGuKn1uN0dJvhML%2By38QGOqUBXSvXjIODBDkXJHa%2F36okUwcodnRPhUgNLF8IfJZQ4C418xoSKO0hN%2FbqppkLv3YOSHFhjkzEoe%2FvnfUz6pcMfWNGZ6YVKnwZcQwdF%2FXaymxTDRnV9EhksF%2BlpyeTd2uhYC2CSxqnetzqseceUR5%2B%2F2cTb7irg7oo%2BGMUrDfN0xnguUy0Xl63YdaV2myNjlOZjgjYytnOElbwbaZZ1jFLlC153WXp&X-Amz-Signature=403f4ad9fa7aa0bfc642dbdb550171a2d11a53f61444b671a1513e009403c495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV2MLHT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXsV%2FeRJhNdEXks14HwDVo%2BohXms7H36NUoGQWhVFPhAiEAgjj6nALPiZt%2FFqpr7Db03oIAKout%2BtywJLNpvRdJa6oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEW1zt%2FD7yKz5mWKSrcA1XgBFGxOSyyXWPc0MphLwKgbOFgULjOB2X5VW82FX6n3sBpL%2BEGSUx6%2F1HbswpRnEEgFhIjylY7jjUJr2%2Fu2MHZDWy8uwHyU43ojF1uNU%2FNhZAeuit8cayOYk243jxpomJxon4s2k%2BO11QyD7eTDNQxFhO4NEWHSsZK8MJqv1mIN08m%2F5mRlg9a6Ku8SoII%2BNX8UNiV6Z8KUKLBReMJbydv%2BZBvJ%2FY71w%2Bup%2FGWBtPoWiwZnz43KkB8lyR0IJJg4t5%2BjeJurHiR%2BBxiyGkcWNvAMOPpuHnuFYO1YTTUOtCe52eIWNaBUi%2BW7oXJxBempoxiRQkL2nguDVIB9Ty4pucGGkFUAYnS2upa%2Bi%2B07rTPNZxjt8NtV8HlF1sAvIqXim6d2XKBc17%2BgG0Ol5bjeYKAUlV9RgPvv605%2BdEgxYwUqgdXq78Ab4V3bqmXvCuAta0aA1M2geArP1rxZp2HTfY5sqnP9cUSvJ%2BHe2aRMrAG3w8qcHgK68QOqZ6UTZQJ8zFyEJabHdSk58gj5bMqIyEfH4xndFbTr2Lo1kTPp%2FHdx%2FqDh90Pwx9cti75CVlETY1FJBY%2FMrQwfqmWvqiIn2vMSVZeaW8zFNuLXgTRXi0CWx2SGuKn1uN0dJvhML%2By38QGOqUBXSvXjIODBDkXJHa%2F36okUwcodnRPhUgNLF8IfJZQ4C418xoSKO0hN%2FbqppkLv3YOSHFhjkzEoe%2FvnfUz6pcMfWNGZ6YVKnwZcQwdF%2FXaymxTDRnV9EhksF%2BlpyeTd2uhYC2CSxqnetzqseceUR5%2B%2F2cTb7irg7oo%2BGMUrDfN0xnguUy0Xl63YdaV2myNjlOZjgjYytnOElbwbaZZ1jFLlC153WXp&X-Amz-Signature=5d073ea8ea1a5545118db44e61d445635ca9d3d66df756eaf95565e1fc403ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV2MLHT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXsV%2FeRJhNdEXks14HwDVo%2BohXms7H36NUoGQWhVFPhAiEAgjj6nALPiZt%2FFqpr7Db03oIAKout%2BtywJLNpvRdJa6oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEW1zt%2FD7yKz5mWKSrcA1XgBFGxOSyyXWPc0MphLwKgbOFgULjOB2X5VW82FX6n3sBpL%2BEGSUx6%2F1HbswpRnEEgFhIjylY7jjUJr2%2Fu2MHZDWy8uwHyU43ojF1uNU%2FNhZAeuit8cayOYk243jxpomJxon4s2k%2BO11QyD7eTDNQxFhO4NEWHSsZK8MJqv1mIN08m%2F5mRlg9a6Ku8SoII%2BNX8UNiV6Z8KUKLBReMJbydv%2BZBvJ%2FY71w%2Bup%2FGWBtPoWiwZnz43KkB8lyR0IJJg4t5%2BjeJurHiR%2BBxiyGkcWNvAMOPpuHnuFYO1YTTUOtCe52eIWNaBUi%2BW7oXJxBempoxiRQkL2nguDVIB9Ty4pucGGkFUAYnS2upa%2Bi%2B07rTPNZxjt8NtV8HlF1sAvIqXim6d2XKBc17%2BgG0Ol5bjeYKAUlV9RgPvv605%2BdEgxYwUqgdXq78Ab4V3bqmXvCuAta0aA1M2geArP1rxZp2HTfY5sqnP9cUSvJ%2BHe2aRMrAG3w8qcHgK68QOqZ6UTZQJ8zFyEJabHdSk58gj5bMqIyEfH4xndFbTr2Lo1kTPp%2FHdx%2FqDh90Pwx9cti75CVlETY1FJBY%2FMrQwfqmWvqiIn2vMSVZeaW8zFNuLXgTRXi0CWx2SGuKn1uN0dJvhML%2By38QGOqUBXSvXjIODBDkXJHa%2F36okUwcodnRPhUgNLF8IfJZQ4C418xoSKO0hN%2FbqppkLv3YOSHFhjkzEoe%2FvnfUz6pcMfWNGZ6YVKnwZcQwdF%2FXaymxTDRnV9EhksF%2BlpyeTd2uhYC2CSxqnetzqseceUR5%2B%2F2cTb7irg7oo%2BGMUrDfN0xnguUy0Xl63YdaV2myNjlOZjgjYytnOElbwbaZZ1jFLlC153WXp&X-Amz-Signature=c9a4156f5fdcdfff7312cb73dbea6efa486c37e6ee32a7299c2e86b9d4a47734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV2MLHT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXsV%2FeRJhNdEXks14HwDVo%2BohXms7H36NUoGQWhVFPhAiEAgjj6nALPiZt%2FFqpr7Db03oIAKout%2BtywJLNpvRdJa6oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEW1zt%2FD7yKz5mWKSrcA1XgBFGxOSyyXWPc0MphLwKgbOFgULjOB2X5VW82FX6n3sBpL%2BEGSUx6%2F1HbswpRnEEgFhIjylY7jjUJr2%2Fu2MHZDWy8uwHyU43ojF1uNU%2FNhZAeuit8cayOYk243jxpomJxon4s2k%2BO11QyD7eTDNQxFhO4NEWHSsZK8MJqv1mIN08m%2F5mRlg9a6Ku8SoII%2BNX8UNiV6Z8KUKLBReMJbydv%2BZBvJ%2FY71w%2Bup%2FGWBtPoWiwZnz43KkB8lyR0IJJg4t5%2BjeJurHiR%2BBxiyGkcWNvAMOPpuHnuFYO1YTTUOtCe52eIWNaBUi%2BW7oXJxBempoxiRQkL2nguDVIB9Ty4pucGGkFUAYnS2upa%2Bi%2B07rTPNZxjt8NtV8HlF1sAvIqXim6d2XKBc17%2BgG0Ol5bjeYKAUlV9RgPvv605%2BdEgxYwUqgdXq78Ab4V3bqmXvCuAta0aA1M2geArP1rxZp2HTfY5sqnP9cUSvJ%2BHe2aRMrAG3w8qcHgK68QOqZ6UTZQJ8zFyEJabHdSk58gj5bMqIyEfH4xndFbTr2Lo1kTPp%2FHdx%2FqDh90Pwx9cti75CVlETY1FJBY%2FMrQwfqmWvqiIn2vMSVZeaW8zFNuLXgTRXi0CWx2SGuKn1uN0dJvhML%2By38QGOqUBXSvXjIODBDkXJHa%2F36okUwcodnRPhUgNLF8IfJZQ4C418xoSKO0hN%2FbqppkLv3YOSHFhjkzEoe%2FvnfUz6pcMfWNGZ6YVKnwZcQwdF%2FXaymxTDRnV9EhksF%2BlpyeTd2uhYC2CSxqnetzqseceUR5%2B%2F2cTb7irg7oo%2BGMUrDfN0xnguUy0Xl63YdaV2myNjlOZjgjYytnOElbwbaZZ1jFLlC153WXp&X-Amz-Signature=f9880d840d00d41a94fa624cc51b1b90bb113d61682495d8a34f306722f90075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXV2MLHT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHXsV%2FeRJhNdEXks14HwDVo%2BohXms7H36NUoGQWhVFPhAiEAgjj6nALPiZt%2FFqpr7Db03oIAKout%2BtywJLNpvRdJa6oqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEW1zt%2FD7yKz5mWKSrcA1XgBFGxOSyyXWPc0MphLwKgbOFgULjOB2X5VW82FX6n3sBpL%2BEGSUx6%2F1HbswpRnEEgFhIjylY7jjUJr2%2Fu2MHZDWy8uwHyU43ojF1uNU%2FNhZAeuit8cayOYk243jxpomJxon4s2k%2BO11QyD7eTDNQxFhO4NEWHSsZK8MJqv1mIN08m%2F5mRlg9a6Ku8SoII%2BNX8UNiV6Z8KUKLBReMJbydv%2BZBvJ%2FY71w%2Bup%2FGWBtPoWiwZnz43KkB8lyR0IJJg4t5%2BjeJurHiR%2BBxiyGkcWNvAMOPpuHnuFYO1YTTUOtCe52eIWNaBUi%2BW7oXJxBempoxiRQkL2nguDVIB9Ty4pucGGkFUAYnS2upa%2Bi%2B07rTPNZxjt8NtV8HlF1sAvIqXim6d2XKBc17%2BgG0Ol5bjeYKAUlV9RgPvv605%2BdEgxYwUqgdXq78Ab4V3bqmXvCuAta0aA1M2geArP1rxZp2HTfY5sqnP9cUSvJ%2BHe2aRMrAG3w8qcHgK68QOqZ6UTZQJ8zFyEJabHdSk58gj5bMqIyEfH4xndFbTr2Lo1kTPp%2FHdx%2FqDh90Pwx9cti75CVlETY1FJBY%2FMrQwfqmWvqiIn2vMSVZeaW8zFNuLXgTRXi0CWx2SGuKn1uN0dJvhML%2By38QGOqUBXSvXjIODBDkXJHa%2F36okUwcodnRPhUgNLF8IfJZQ4C418xoSKO0hN%2FbqppkLv3YOSHFhjkzEoe%2FvnfUz6pcMfWNGZ6YVKnwZcQwdF%2FXaymxTDRnV9EhksF%2BlpyeTd2uhYC2CSxqnetzqseceUR5%2B%2F2cTb7irg7oo%2BGMUrDfN0xnguUy0Xl63YdaV2myNjlOZjgjYytnOElbwbaZZ1jFLlC153WXp&X-Amz-Signature=2a16a939da740f5af3eb267004eff9418106b44ce8782bd742796387dfce996d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQC25JNU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK8pMfZMXDoOx7TbrOr3T2XkJVXoU6kk1%2FjcktOVNsHwIhAIsUceU7Fkef049sBvJwu5YeZG8tpe3cxgKMYKa3D7zJKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa%2FOCjqf4j9rMO0pEq3ANdcntLUNO8IWL1yUJ3dxxTl1fxWgj4xC0oeKAkWMw%2FxzmkEk1uD1%2F6qfdnz4ahWzQlN2L%2FiZFRNPQmaCl5aS1uRMz1uSbgYM10LJZ8FBtvgY28YWr10RAKafMSGVPLVckR6v0UbDz%2Fjpaxi4vJ4JTGzL37sPTi9CDk%2BhXAxlKH0Xk9QGyLOkfTHKhfZNaeDb1ioxZWRaIDNIssyIhdvhJlEbh1bPWCCUQQ%2BWxSKV6IR6cVucWAGf8tEsKo5DnlKPH%2Fp8jp7dbEOLXZ4pD57vPq5%2FvX%2B97LhqvkuBCjuJI1FMwJd2EOC5ZMWZBNWNYURWHCLtMNWEossgmBTTLPrAWDXF3UmVsWmgxsAvKu0J64OG%2Byy2FWC%2Fhzt2yiGVAnWpEgnc6yi%2Bm5SYewpN6e06omtQS%2BmJq6W8Tgj8B%2F0S3XWcHSYOw8RAjO1GtsHL1g1zlQ0zq4Qb5Sk%2Bp%2FB%2B4PwTIL4IjaYYS2t2jukVHY2q2Fjv6NlRGvvyu4YD1KWc2B8Vn5FsW2Vj3i5O70m7OBXO88VLL8bpRy%2F4R7q4LsCfiuLL2OuyJ8fxQQ4CdoylVgYQ%2B3DI6CvRX6AaUhHWnQvdmOl9iLqks4kbdFDBhLSjyiK3hvUdDdE5cx1tDQIjCost%2FEBjqkAfRp3sneqS9qOPtXkzuJJ5KWkA7uJQWBofLGdQoGDGUnpblk2ZD8yiQAYrI0X4qCST1Kqp5EzkVhl4JweDDcIe4e1nxBslPnYL6TR7KBPfM59IUK5NFlVEPMyUsjkzLm2pEy1ndJOMHveBGrUJVaeHiM4Xc8Jd%2FC6b3%2FTp5jT5Xrjo7NTkMuZ97y0EkC5OiipFp34KGY6gG2YBQFRw8UfBDcdFTm&X-Amz-Signature=6a23a94b9af68d4a6b6e5776390a0ab70c3a4f02ad7415d90c23136c965ac8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMDALJL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMdqYdYRxuJ%2BknHiGuGHAx9QUOIpF2%2BmGEIqajDz%2BcQIhAOI0CDznK4RYVkzZDwuRhiFv3qjHADib1SMGMMgDBgMxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL36fahezF9lWspGkq3AM7fZpQ%2FKl9L%2B5eb6Gg3IpYbVJmliKg1OPg8rwv%2FGjz%2FRs2I6uHiplfvowy09wKMfJpf3k%2B7b1kn1G%2BOfaxAGDGGLeP0bUO%2F6wElmisqJjE7Ntp%2F15o2Yt3LQ3nldh7jMQ4q690LQvINvFbRvX6xbks1wodiJNIy2Nqb7bibYrFS197b0SSNJXJOO5jZ906H1CdwfSURRXws2g%2FhElvTATvMpx5dIeNAORCjlegp%2B15eOoMhejdDi5RuOPPJJ7%2F7C9IwTF7shOZQ1kFTm664zO0he0hbwa7R%2BqMQ2NKw3A40XAHLOMWMDe0jS7BdA4QsCWvUrsmt%2FhEzTh9iDbn5lWdxrtjWfRRV5fW%2FT0VS2PsKOny3ozycfcErg1BZE8Fnhwrm18SZAs%2FFLlQRG6P5Uh521fI%2BZV1oxXR4NumJfqqofFubaIlWUg70HUXaZwvnqBrOTrFp%2Fml6urXr2t2C4uImhxcdk6lKJ9DT9K2r%2BfLsyeRBQY5QlJ8RhRntuO4lbkWmj678pzH4sqoNCnoqUEiidi7kjANlxAt6Rii6LIAM6DRlGELyviAOQJZY%2B1Ilw%2FKcCZtdvsOOFK4tBX8hR6bqjcwSuwafEBrrJ4nKvmI7Lmdrc4jaLTjCoX1ZjDCst%2FEBjqkAU2a36MO5%2F5gR8cd4VdancFwJTBuWUK8P0jFwww1bcBhmZ%2FrwexQ1g5GqPJ1KCK%2FDajTzh4w9Ap%2FOojOfbjApyPh%2BB4K6kHocv5rRjb7ooFKdkItAGyvxStdMpZR%2FGsRP4MuHVXNfdv%2Biku%2BljBncb%2BgzdI%2B1dDORf0MRpbmzmaG6VzpIKwYuanmtkQGvHUpXmfd0RjdzddlbfkEBceRtY7ZAkSQ&X-Amz-Signature=f1cc0d71166a1feb52c7ffa686532f5d7f1b586e5bc86a3110fb9eb07c8518f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMDALJL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMdqYdYRxuJ%2BknHiGuGHAx9QUOIpF2%2BmGEIqajDz%2BcQIhAOI0CDznK4RYVkzZDwuRhiFv3qjHADib1SMGMMgDBgMxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL36fahezF9lWspGkq3AM7fZpQ%2FKl9L%2B5eb6Gg3IpYbVJmliKg1OPg8rwv%2FGjz%2FRs2I6uHiplfvowy09wKMfJpf3k%2B7b1kn1G%2BOfaxAGDGGLeP0bUO%2F6wElmisqJjE7Ntp%2F15o2Yt3LQ3nldh7jMQ4q690LQvINvFbRvX6xbks1wodiJNIy2Nqb7bibYrFS197b0SSNJXJOO5jZ906H1CdwfSURRXws2g%2FhElvTATvMpx5dIeNAORCjlegp%2B15eOoMhejdDi5RuOPPJJ7%2F7C9IwTF7shOZQ1kFTm664zO0he0hbwa7R%2BqMQ2NKw3A40XAHLOMWMDe0jS7BdA4QsCWvUrsmt%2FhEzTh9iDbn5lWdxrtjWfRRV5fW%2FT0VS2PsKOny3ozycfcErg1BZE8Fnhwrm18SZAs%2FFLlQRG6P5Uh521fI%2BZV1oxXR4NumJfqqofFubaIlWUg70HUXaZwvnqBrOTrFp%2Fml6urXr2t2C4uImhxcdk6lKJ9DT9K2r%2BfLsyeRBQY5QlJ8RhRntuO4lbkWmj678pzH4sqoNCnoqUEiidi7kjANlxAt6Rii6LIAM6DRlGELyviAOQJZY%2B1Ilw%2FKcCZtdvsOOFK4tBX8hR6bqjcwSuwafEBrrJ4nKvmI7Lmdrc4jaLTjCoX1ZjDCst%2FEBjqkAU2a36MO5%2F5gR8cd4VdancFwJTBuWUK8P0jFwww1bcBhmZ%2FrwexQ1g5GqPJ1KCK%2FDajTzh4w9Ap%2FOojOfbjApyPh%2BB4K6kHocv5rRjb7ooFKdkItAGyvxStdMpZR%2FGsRP4MuHVXNfdv%2Biku%2BljBncb%2BgzdI%2B1dDORf0MRpbmzmaG6VzpIKwYuanmtkQGvHUpXmfd0RjdzddlbfkEBceRtY7ZAkSQ&X-Amz-Signature=1976bc2a353e9ab738ddd54d083479b49f0dee9c8e07abd4deb7e939dac0bb4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMDALJL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMdqYdYRxuJ%2BknHiGuGHAx9QUOIpF2%2BmGEIqajDz%2BcQIhAOI0CDznK4RYVkzZDwuRhiFv3qjHADib1SMGMMgDBgMxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL36fahezF9lWspGkq3AM7fZpQ%2FKl9L%2B5eb6Gg3IpYbVJmliKg1OPg8rwv%2FGjz%2FRs2I6uHiplfvowy09wKMfJpf3k%2B7b1kn1G%2BOfaxAGDGGLeP0bUO%2F6wElmisqJjE7Ntp%2F15o2Yt3LQ3nldh7jMQ4q690LQvINvFbRvX6xbks1wodiJNIy2Nqb7bibYrFS197b0SSNJXJOO5jZ906H1CdwfSURRXws2g%2FhElvTATvMpx5dIeNAORCjlegp%2B15eOoMhejdDi5RuOPPJJ7%2F7C9IwTF7shOZQ1kFTm664zO0he0hbwa7R%2BqMQ2NKw3A40XAHLOMWMDe0jS7BdA4QsCWvUrsmt%2FhEzTh9iDbn5lWdxrtjWfRRV5fW%2FT0VS2PsKOny3ozycfcErg1BZE8Fnhwrm18SZAs%2FFLlQRG6P5Uh521fI%2BZV1oxXR4NumJfqqofFubaIlWUg70HUXaZwvnqBrOTrFp%2Fml6urXr2t2C4uImhxcdk6lKJ9DT9K2r%2BfLsyeRBQY5QlJ8RhRntuO4lbkWmj678pzH4sqoNCnoqUEiidi7kjANlxAt6Rii6LIAM6DRlGELyviAOQJZY%2B1Ilw%2FKcCZtdvsOOFK4tBX8hR6bqjcwSuwafEBrrJ4nKvmI7Lmdrc4jaLTjCoX1ZjDCst%2FEBjqkAU2a36MO5%2F5gR8cd4VdancFwJTBuWUK8P0jFwww1bcBhmZ%2FrwexQ1g5GqPJ1KCK%2FDajTzh4w9Ap%2FOojOfbjApyPh%2BB4K6kHocv5rRjb7ooFKdkItAGyvxStdMpZR%2FGsRP4MuHVXNfdv%2Biku%2BljBncb%2BgzdI%2B1dDORf0MRpbmzmaG6VzpIKwYuanmtkQGvHUpXmfd0RjdzddlbfkEBceRtY7ZAkSQ&X-Amz-Signature=6b15dc7fc771fda5f2e056a14fe3cf65d955b7e29d0dd915aa0a3075af803054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMDALJL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMdqYdYRxuJ%2BknHiGuGHAx9QUOIpF2%2BmGEIqajDz%2BcQIhAOI0CDznK4RYVkzZDwuRhiFv3qjHADib1SMGMMgDBgMxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL36fahezF9lWspGkq3AM7fZpQ%2FKl9L%2B5eb6Gg3IpYbVJmliKg1OPg8rwv%2FGjz%2FRs2I6uHiplfvowy09wKMfJpf3k%2B7b1kn1G%2BOfaxAGDGGLeP0bUO%2F6wElmisqJjE7Ntp%2F15o2Yt3LQ3nldh7jMQ4q690LQvINvFbRvX6xbks1wodiJNIy2Nqb7bibYrFS197b0SSNJXJOO5jZ906H1CdwfSURRXws2g%2FhElvTATvMpx5dIeNAORCjlegp%2B15eOoMhejdDi5RuOPPJJ7%2F7C9IwTF7shOZQ1kFTm664zO0he0hbwa7R%2BqMQ2NKw3A40XAHLOMWMDe0jS7BdA4QsCWvUrsmt%2FhEzTh9iDbn5lWdxrtjWfRRV5fW%2FT0VS2PsKOny3ozycfcErg1BZE8Fnhwrm18SZAs%2FFLlQRG6P5Uh521fI%2BZV1oxXR4NumJfqqofFubaIlWUg70HUXaZwvnqBrOTrFp%2Fml6urXr2t2C4uImhxcdk6lKJ9DT9K2r%2BfLsyeRBQY5QlJ8RhRntuO4lbkWmj678pzH4sqoNCnoqUEiidi7kjANlxAt6Rii6LIAM6DRlGELyviAOQJZY%2B1Ilw%2FKcCZtdvsOOFK4tBX8hR6bqjcwSuwafEBrrJ4nKvmI7Lmdrc4jaLTjCoX1ZjDCst%2FEBjqkAU2a36MO5%2F5gR8cd4VdancFwJTBuWUK8P0jFwww1bcBhmZ%2FrwexQ1g5GqPJ1KCK%2FDajTzh4w9Ap%2FOojOfbjApyPh%2BB4K6kHocv5rRjb7ooFKdkItAGyvxStdMpZR%2FGsRP4MuHVXNfdv%2Biku%2BljBncb%2BgzdI%2B1dDORf0MRpbmzmaG6VzpIKwYuanmtkQGvHUpXmfd0RjdzddlbfkEBceRtY7ZAkSQ&X-Amz-Signature=740ada28c80b6c04c221a42f50c64d9f2eb44198601bf24ce652ecd7763d5338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMDALJL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMdqYdYRxuJ%2BknHiGuGHAx9QUOIpF2%2BmGEIqajDz%2BcQIhAOI0CDznK4RYVkzZDwuRhiFv3qjHADib1SMGMMgDBgMxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL36fahezF9lWspGkq3AM7fZpQ%2FKl9L%2B5eb6Gg3IpYbVJmliKg1OPg8rwv%2FGjz%2FRs2I6uHiplfvowy09wKMfJpf3k%2B7b1kn1G%2BOfaxAGDGGLeP0bUO%2F6wElmisqJjE7Ntp%2F15o2Yt3LQ3nldh7jMQ4q690LQvINvFbRvX6xbks1wodiJNIy2Nqb7bibYrFS197b0SSNJXJOO5jZ906H1CdwfSURRXws2g%2FhElvTATvMpx5dIeNAORCjlegp%2B15eOoMhejdDi5RuOPPJJ7%2F7C9IwTF7shOZQ1kFTm664zO0he0hbwa7R%2BqMQ2NKw3A40XAHLOMWMDe0jS7BdA4QsCWvUrsmt%2FhEzTh9iDbn5lWdxrtjWfRRV5fW%2FT0VS2PsKOny3ozycfcErg1BZE8Fnhwrm18SZAs%2FFLlQRG6P5Uh521fI%2BZV1oxXR4NumJfqqofFubaIlWUg70HUXaZwvnqBrOTrFp%2Fml6urXr2t2C4uImhxcdk6lKJ9DT9K2r%2BfLsyeRBQY5QlJ8RhRntuO4lbkWmj678pzH4sqoNCnoqUEiidi7kjANlxAt6Rii6LIAM6DRlGELyviAOQJZY%2B1Ilw%2FKcCZtdvsOOFK4tBX8hR6bqjcwSuwafEBrrJ4nKvmI7Lmdrc4jaLTjCoX1ZjDCst%2FEBjqkAU2a36MO5%2F5gR8cd4VdancFwJTBuWUK8P0jFwww1bcBhmZ%2FrwexQ1g5GqPJ1KCK%2FDajTzh4w9Ap%2FOojOfbjApyPh%2BB4K6kHocv5rRjb7ooFKdkItAGyvxStdMpZR%2FGsRP4MuHVXNfdv%2Biku%2BljBncb%2BgzdI%2B1dDORf0MRpbmzmaG6VzpIKwYuanmtkQGvHUpXmfd0RjdzddlbfkEBceRtY7ZAkSQ&X-Amz-Signature=22f26ea6f876390970125687701168a448e98a0ff59879cdefca9cdf2dc522b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMDALJL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMdqYdYRxuJ%2BknHiGuGHAx9QUOIpF2%2BmGEIqajDz%2BcQIhAOI0CDznK4RYVkzZDwuRhiFv3qjHADib1SMGMMgDBgMxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL36fahezF9lWspGkq3AM7fZpQ%2FKl9L%2B5eb6Gg3IpYbVJmliKg1OPg8rwv%2FGjz%2FRs2I6uHiplfvowy09wKMfJpf3k%2B7b1kn1G%2BOfaxAGDGGLeP0bUO%2F6wElmisqJjE7Ntp%2F15o2Yt3LQ3nldh7jMQ4q690LQvINvFbRvX6xbks1wodiJNIy2Nqb7bibYrFS197b0SSNJXJOO5jZ906H1CdwfSURRXws2g%2FhElvTATvMpx5dIeNAORCjlegp%2B15eOoMhejdDi5RuOPPJJ7%2F7C9IwTF7shOZQ1kFTm664zO0he0hbwa7R%2BqMQ2NKw3A40XAHLOMWMDe0jS7BdA4QsCWvUrsmt%2FhEzTh9iDbn5lWdxrtjWfRRV5fW%2FT0VS2PsKOny3ozycfcErg1BZE8Fnhwrm18SZAs%2FFLlQRG6P5Uh521fI%2BZV1oxXR4NumJfqqofFubaIlWUg70HUXaZwvnqBrOTrFp%2Fml6urXr2t2C4uImhxcdk6lKJ9DT9K2r%2BfLsyeRBQY5QlJ8RhRntuO4lbkWmj678pzH4sqoNCnoqUEiidi7kjANlxAt6Rii6LIAM6DRlGELyviAOQJZY%2B1Ilw%2FKcCZtdvsOOFK4tBX8hR6bqjcwSuwafEBrrJ4nKvmI7Lmdrc4jaLTjCoX1ZjDCst%2FEBjqkAU2a36MO5%2F5gR8cd4VdancFwJTBuWUK8P0jFwww1bcBhmZ%2FrwexQ1g5GqPJ1KCK%2FDajTzh4w9Ap%2FOojOfbjApyPh%2BB4K6kHocv5rRjb7ooFKdkItAGyvxStdMpZR%2FGsRP4MuHVXNfdv%2Biku%2BljBncb%2BgzdI%2B1dDORf0MRpbmzmaG6VzpIKwYuanmtkQGvHUpXmfd0RjdzddlbfkEBceRtY7ZAkSQ&X-Amz-Signature=172f4838febc7f4d683101eb0679dde5119b391a484f4bd94aa9caaa64442790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMDALJL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMdqYdYRxuJ%2BknHiGuGHAx9QUOIpF2%2BmGEIqajDz%2BcQIhAOI0CDznK4RYVkzZDwuRhiFv3qjHADib1SMGMMgDBgMxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL36fahezF9lWspGkq3AM7fZpQ%2FKl9L%2B5eb6Gg3IpYbVJmliKg1OPg8rwv%2FGjz%2FRs2I6uHiplfvowy09wKMfJpf3k%2B7b1kn1G%2BOfaxAGDGGLeP0bUO%2F6wElmisqJjE7Ntp%2F15o2Yt3LQ3nldh7jMQ4q690LQvINvFbRvX6xbks1wodiJNIy2Nqb7bibYrFS197b0SSNJXJOO5jZ906H1CdwfSURRXws2g%2FhElvTATvMpx5dIeNAORCjlegp%2B15eOoMhejdDi5RuOPPJJ7%2F7C9IwTF7shOZQ1kFTm664zO0he0hbwa7R%2BqMQ2NKw3A40XAHLOMWMDe0jS7BdA4QsCWvUrsmt%2FhEzTh9iDbn5lWdxrtjWfRRV5fW%2FT0VS2PsKOny3ozycfcErg1BZE8Fnhwrm18SZAs%2FFLlQRG6P5Uh521fI%2BZV1oxXR4NumJfqqofFubaIlWUg70HUXaZwvnqBrOTrFp%2Fml6urXr2t2C4uImhxcdk6lKJ9DT9K2r%2BfLsyeRBQY5QlJ8RhRntuO4lbkWmj678pzH4sqoNCnoqUEiidi7kjANlxAt6Rii6LIAM6DRlGELyviAOQJZY%2B1Ilw%2FKcCZtdvsOOFK4tBX8hR6bqjcwSuwafEBrrJ4nKvmI7Lmdrc4jaLTjCoX1ZjDCst%2FEBjqkAU2a36MO5%2F5gR8cd4VdancFwJTBuWUK8P0jFwww1bcBhmZ%2FrwexQ1g5GqPJ1KCK%2FDajTzh4w9Ap%2FOojOfbjApyPh%2BB4K6kHocv5rRjb7ooFKdkItAGyvxStdMpZR%2FGsRP4MuHVXNfdv%2Biku%2BljBncb%2BgzdI%2B1dDORf0MRpbmzmaG6VzpIKwYuanmtkQGvHUpXmfd0RjdzddlbfkEBceRtY7ZAkSQ&X-Amz-Signature=be931b99e160eaacd8f85f481caca6f10b085c6f4284877fc935d4215f291b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMDALJL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMdqYdYRxuJ%2BknHiGuGHAx9QUOIpF2%2BmGEIqajDz%2BcQIhAOI0CDznK4RYVkzZDwuRhiFv3qjHADib1SMGMMgDBgMxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL36fahezF9lWspGkq3AM7fZpQ%2FKl9L%2B5eb6Gg3IpYbVJmliKg1OPg8rwv%2FGjz%2FRs2I6uHiplfvowy09wKMfJpf3k%2B7b1kn1G%2BOfaxAGDGGLeP0bUO%2F6wElmisqJjE7Ntp%2F15o2Yt3LQ3nldh7jMQ4q690LQvINvFbRvX6xbks1wodiJNIy2Nqb7bibYrFS197b0SSNJXJOO5jZ906H1CdwfSURRXws2g%2FhElvTATvMpx5dIeNAORCjlegp%2B15eOoMhejdDi5RuOPPJJ7%2F7C9IwTF7shOZQ1kFTm664zO0he0hbwa7R%2BqMQ2NKw3A40XAHLOMWMDe0jS7BdA4QsCWvUrsmt%2FhEzTh9iDbn5lWdxrtjWfRRV5fW%2FT0VS2PsKOny3ozycfcErg1BZE8Fnhwrm18SZAs%2FFLlQRG6P5Uh521fI%2BZV1oxXR4NumJfqqofFubaIlWUg70HUXaZwvnqBrOTrFp%2Fml6urXr2t2C4uImhxcdk6lKJ9DT9K2r%2BfLsyeRBQY5QlJ8RhRntuO4lbkWmj678pzH4sqoNCnoqUEiidi7kjANlxAt6Rii6LIAM6DRlGELyviAOQJZY%2B1Ilw%2FKcCZtdvsOOFK4tBX8hR6bqjcwSuwafEBrrJ4nKvmI7Lmdrc4jaLTjCoX1ZjDCst%2FEBjqkAU2a36MO5%2F5gR8cd4VdancFwJTBuWUK8P0jFwww1bcBhmZ%2FrwexQ1g5GqPJ1KCK%2FDajTzh4w9Ap%2FOojOfbjApyPh%2BB4K6kHocv5rRjb7ooFKdkItAGyvxStdMpZR%2FGsRP4MuHVXNfdv%2Biku%2BljBncb%2BgzdI%2B1dDORf0MRpbmzmaG6VzpIKwYuanmtkQGvHUpXmfd0RjdzddlbfkEBceRtY7ZAkSQ&X-Amz-Signature=dd01e5d82e3a0fa7759f6b20379987c1c985d43670787e4fbb315210f5968c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMDALJL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMdqYdYRxuJ%2BknHiGuGHAx9QUOIpF2%2BmGEIqajDz%2BcQIhAOI0CDznK4RYVkzZDwuRhiFv3qjHADib1SMGMMgDBgMxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzL36fahezF9lWspGkq3AM7fZpQ%2FKl9L%2B5eb6Gg3IpYbVJmliKg1OPg8rwv%2FGjz%2FRs2I6uHiplfvowy09wKMfJpf3k%2B7b1kn1G%2BOfaxAGDGGLeP0bUO%2F6wElmisqJjE7Ntp%2F15o2Yt3LQ3nldh7jMQ4q690LQvINvFbRvX6xbks1wodiJNIy2Nqb7bibYrFS197b0SSNJXJOO5jZ906H1CdwfSURRXws2g%2FhElvTATvMpx5dIeNAORCjlegp%2B15eOoMhejdDi5RuOPPJJ7%2F7C9IwTF7shOZQ1kFTm664zO0he0hbwa7R%2BqMQ2NKw3A40XAHLOMWMDe0jS7BdA4QsCWvUrsmt%2FhEzTh9iDbn5lWdxrtjWfRRV5fW%2FT0VS2PsKOny3ozycfcErg1BZE8Fnhwrm18SZAs%2FFLlQRG6P5Uh521fI%2BZV1oxXR4NumJfqqofFubaIlWUg70HUXaZwvnqBrOTrFp%2Fml6urXr2t2C4uImhxcdk6lKJ9DT9K2r%2BfLsyeRBQY5QlJ8RhRntuO4lbkWmj678pzH4sqoNCnoqUEiidi7kjANlxAt6Rii6LIAM6DRlGELyviAOQJZY%2B1Ilw%2FKcCZtdvsOOFK4tBX8hR6bqjcwSuwafEBrrJ4nKvmI7Lmdrc4jaLTjCoX1ZjDCst%2FEBjqkAU2a36MO5%2F5gR8cd4VdancFwJTBuWUK8P0jFwww1bcBhmZ%2FrwexQ1g5GqPJ1KCK%2FDajTzh4w9Ap%2FOojOfbjApyPh%2BB4K6kHocv5rRjb7ooFKdkItAGyvxStdMpZR%2FGsRP4MuHVXNfdv%2Biku%2BljBncb%2BgzdI%2B1dDORf0MRpbmzmaG6VzpIKwYuanmtkQGvHUpXmfd0RjdzddlbfkEBceRtY7ZAkSQ&X-Amz-Signature=ed5b13b35091ac57c593c0f39b0610ede990e2e3eca860f801b8e92ffce57a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
