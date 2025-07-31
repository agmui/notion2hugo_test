---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTYIYNB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6ISpWw7ebHrlNFIc0FXHVOIb0Mwv53odw2mnrw9o7VAiAnKOGT6EQm%2FDjfoeKTgJrfsxRhTNHdBCG52Zb3KiH0RSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3B8RF3owq7fn%2B7VPKtwD1ouxKZ3z%2B3iIz4OJaCb8cDkh0tO1vfjEqIqf1WCDsZEV3YfhiUR8lKSn7nTAti6egIYaUvnsggQr%2BVVissCtyLcH8Ocp%2FQNq4DcJUsPj6dXpcC6YaNHCmazGmrlSo1taNSVe%2Fu3Eu9d4uiszi6w6NA4jaVL1WjSNWyW%2FMYFWMayUbN7HWyuI684HdZUzwuHCk%2BeU3r66FjGFThvCnjiT45PNA8AtJ7a6bo34PhErJoVUdap%2BcD7Bm0M55g4wSAVSSOQ0SPJjqFtxRgmc4UbNB%2BkBrqZG48sD%2BggbrpgICpqUY7zS2KGVAGVMazO36L3cBYustwm0jEMBh6eOj9a6XPx7KX%2FWuxsYt4et7jfbpuH0PkroAOmqY6%2FURbMDamiG1kVkHW7UlnOk7%2BBz5qfSUewu34FcFenLUccjZ2Fo7MY8TatZbZo7lqyVAjzb%2BVzVBW%2BwzWpZ4VVUS20%2FQs09IlohOH03V9itlRpiWc77n0eJUqVsd1HtB9QX9A0VJKYhkezmvG09Hgqs6ZDp84GYeHbHw1rqhoKkmI9spXFxuPAIYVg2W8%2Bwq1ykEsp1HG%2FCqtpm%2B4E9TDpahfk%2Bt5nkhPzfxgGgmPOv5ZkPZx7hVzdlPzAD09BhB68sAXgw5OqtxAY6pgFn%2FBaz%2BrEVj2H5hZeF2Tom%2BAlUhBYzJ0ULHnmNcCQMh21kJ3oX7L4BFNBKs8GtjdWfnrR2%2FLMxStT3YHZG9qygWBUIWC%2BePOaSYPM3nwenjcGqRdm4qjARwFqy%2BjzEvW038lLD8%2FtSmaU4nsTiTUdL2R4R3%2FrgLQUWBcjGLXRJenN2doxALJfl600lkNJw%2BJR7J6PwN6K44WVKosWatW%2F0w9MpzgWA&X-Amz-Signature=6be9d578823118db3b908a03f0d8d91fe245f4c33d5be308f1fe6c5c3d488aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTYIYNB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6ISpWw7ebHrlNFIc0FXHVOIb0Mwv53odw2mnrw9o7VAiAnKOGT6EQm%2FDjfoeKTgJrfsxRhTNHdBCG52Zb3KiH0RSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3B8RF3owq7fn%2B7VPKtwD1ouxKZ3z%2B3iIz4OJaCb8cDkh0tO1vfjEqIqf1WCDsZEV3YfhiUR8lKSn7nTAti6egIYaUvnsggQr%2BVVissCtyLcH8Ocp%2FQNq4DcJUsPj6dXpcC6YaNHCmazGmrlSo1taNSVe%2Fu3Eu9d4uiszi6w6NA4jaVL1WjSNWyW%2FMYFWMayUbN7HWyuI684HdZUzwuHCk%2BeU3r66FjGFThvCnjiT45PNA8AtJ7a6bo34PhErJoVUdap%2BcD7Bm0M55g4wSAVSSOQ0SPJjqFtxRgmc4UbNB%2BkBrqZG48sD%2BggbrpgICpqUY7zS2KGVAGVMazO36L3cBYustwm0jEMBh6eOj9a6XPx7KX%2FWuxsYt4et7jfbpuH0PkroAOmqY6%2FURbMDamiG1kVkHW7UlnOk7%2BBz5qfSUewu34FcFenLUccjZ2Fo7MY8TatZbZo7lqyVAjzb%2BVzVBW%2BwzWpZ4VVUS20%2FQs09IlohOH03V9itlRpiWc77n0eJUqVsd1HtB9QX9A0VJKYhkezmvG09Hgqs6ZDp84GYeHbHw1rqhoKkmI9spXFxuPAIYVg2W8%2Bwq1ykEsp1HG%2FCqtpm%2B4E9TDpahfk%2Bt5nkhPzfxgGgmPOv5ZkPZx7hVzdlPzAD09BhB68sAXgw5OqtxAY6pgFn%2FBaz%2BrEVj2H5hZeF2Tom%2BAlUhBYzJ0ULHnmNcCQMh21kJ3oX7L4BFNBKs8GtjdWfnrR2%2FLMxStT3YHZG9qygWBUIWC%2BePOaSYPM3nwenjcGqRdm4qjARwFqy%2BjzEvW038lLD8%2FtSmaU4nsTiTUdL2R4R3%2FrgLQUWBcjGLXRJenN2doxALJfl600lkNJw%2BJR7J6PwN6K44WVKosWatW%2F0w9MpzgWA&X-Amz-Signature=7f366a6fe3ba6b4fc06c60a7b8a2f4465417860c88cef727aca41d7d4fc72932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTYIYNB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6ISpWw7ebHrlNFIc0FXHVOIb0Mwv53odw2mnrw9o7VAiAnKOGT6EQm%2FDjfoeKTgJrfsxRhTNHdBCG52Zb3KiH0RSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3B8RF3owq7fn%2B7VPKtwD1ouxKZ3z%2B3iIz4OJaCb8cDkh0tO1vfjEqIqf1WCDsZEV3YfhiUR8lKSn7nTAti6egIYaUvnsggQr%2BVVissCtyLcH8Ocp%2FQNq4DcJUsPj6dXpcC6YaNHCmazGmrlSo1taNSVe%2Fu3Eu9d4uiszi6w6NA4jaVL1WjSNWyW%2FMYFWMayUbN7HWyuI684HdZUzwuHCk%2BeU3r66FjGFThvCnjiT45PNA8AtJ7a6bo34PhErJoVUdap%2BcD7Bm0M55g4wSAVSSOQ0SPJjqFtxRgmc4UbNB%2BkBrqZG48sD%2BggbrpgICpqUY7zS2KGVAGVMazO36L3cBYustwm0jEMBh6eOj9a6XPx7KX%2FWuxsYt4et7jfbpuH0PkroAOmqY6%2FURbMDamiG1kVkHW7UlnOk7%2BBz5qfSUewu34FcFenLUccjZ2Fo7MY8TatZbZo7lqyVAjzb%2BVzVBW%2BwzWpZ4VVUS20%2FQs09IlohOH03V9itlRpiWc77n0eJUqVsd1HtB9QX9A0VJKYhkezmvG09Hgqs6ZDp84GYeHbHw1rqhoKkmI9spXFxuPAIYVg2W8%2Bwq1ykEsp1HG%2FCqtpm%2B4E9TDpahfk%2Bt5nkhPzfxgGgmPOv5ZkPZx7hVzdlPzAD09BhB68sAXgw5OqtxAY6pgFn%2FBaz%2BrEVj2H5hZeF2Tom%2BAlUhBYzJ0ULHnmNcCQMh21kJ3oX7L4BFNBKs8GtjdWfnrR2%2FLMxStT3YHZG9qygWBUIWC%2BePOaSYPM3nwenjcGqRdm4qjARwFqy%2BjzEvW038lLD8%2FtSmaU4nsTiTUdL2R4R3%2FrgLQUWBcjGLXRJenN2doxALJfl600lkNJw%2BJR7J6PwN6K44WVKosWatW%2F0w9MpzgWA&X-Amz-Signature=4fef0277eb01a6fbec28f816b7d52f446f9ccc84d005c2b7f785b69b5e614b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTYIYNB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6ISpWw7ebHrlNFIc0FXHVOIb0Mwv53odw2mnrw9o7VAiAnKOGT6EQm%2FDjfoeKTgJrfsxRhTNHdBCG52Zb3KiH0RSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3B8RF3owq7fn%2B7VPKtwD1ouxKZ3z%2B3iIz4OJaCb8cDkh0tO1vfjEqIqf1WCDsZEV3YfhiUR8lKSn7nTAti6egIYaUvnsggQr%2BVVissCtyLcH8Ocp%2FQNq4DcJUsPj6dXpcC6YaNHCmazGmrlSo1taNSVe%2Fu3Eu9d4uiszi6w6NA4jaVL1WjSNWyW%2FMYFWMayUbN7HWyuI684HdZUzwuHCk%2BeU3r66FjGFThvCnjiT45PNA8AtJ7a6bo34PhErJoVUdap%2BcD7Bm0M55g4wSAVSSOQ0SPJjqFtxRgmc4UbNB%2BkBrqZG48sD%2BggbrpgICpqUY7zS2KGVAGVMazO36L3cBYustwm0jEMBh6eOj9a6XPx7KX%2FWuxsYt4et7jfbpuH0PkroAOmqY6%2FURbMDamiG1kVkHW7UlnOk7%2BBz5qfSUewu34FcFenLUccjZ2Fo7MY8TatZbZo7lqyVAjzb%2BVzVBW%2BwzWpZ4VVUS20%2FQs09IlohOH03V9itlRpiWc77n0eJUqVsd1HtB9QX9A0VJKYhkezmvG09Hgqs6ZDp84GYeHbHw1rqhoKkmI9spXFxuPAIYVg2W8%2Bwq1ykEsp1HG%2FCqtpm%2B4E9TDpahfk%2Bt5nkhPzfxgGgmPOv5ZkPZx7hVzdlPzAD09BhB68sAXgw5OqtxAY6pgFn%2FBaz%2BrEVj2H5hZeF2Tom%2BAlUhBYzJ0ULHnmNcCQMh21kJ3oX7L4BFNBKs8GtjdWfnrR2%2FLMxStT3YHZG9qygWBUIWC%2BePOaSYPM3nwenjcGqRdm4qjARwFqy%2BjzEvW038lLD8%2FtSmaU4nsTiTUdL2R4R3%2FrgLQUWBcjGLXRJenN2doxALJfl600lkNJw%2BJR7J6PwN6K44WVKosWatW%2F0w9MpzgWA&X-Amz-Signature=f904a7dc71515e2972242b7ca3e6b2548ceace17f211ec34a8b0a7a9d5d2ea94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTYIYNB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6ISpWw7ebHrlNFIc0FXHVOIb0Mwv53odw2mnrw9o7VAiAnKOGT6EQm%2FDjfoeKTgJrfsxRhTNHdBCG52Zb3KiH0RSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3B8RF3owq7fn%2B7VPKtwD1ouxKZ3z%2B3iIz4OJaCb8cDkh0tO1vfjEqIqf1WCDsZEV3YfhiUR8lKSn7nTAti6egIYaUvnsggQr%2BVVissCtyLcH8Ocp%2FQNq4DcJUsPj6dXpcC6YaNHCmazGmrlSo1taNSVe%2Fu3Eu9d4uiszi6w6NA4jaVL1WjSNWyW%2FMYFWMayUbN7HWyuI684HdZUzwuHCk%2BeU3r66FjGFThvCnjiT45PNA8AtJ7a6bo34PhErJoVUdap%2BcD7Bm0M55g4wSAVSSOQ0SPJjqFtxRgmc4UbNB%2BkBrqZG48sD%2BggbrpgICpqUY7zS2KGVAGVMazO36L3cBYustwm0jEMBh6eOj9a6XPx7KX%2FWuxsYt4et7jfbpuH0PkroAOmqY6%2FURbMDamiG1kVkHW7UlnOk7%2BBz5qfSUewu34FcFenLUccjZ2Fo7MY8TatZbZo7lqyVAjzb%2BVzVBW%2BwzWpZ4VVUS20%2FQs09IlohOH03V9itlRpiWc77n0eJUqVsd1HtB9QX9A0VJKYhkezmvG09Hgqs6ZDp84GYeHbHw1rqhoKkmI9spXFxuPAIYVg2W8%2Bwq1ykEsp1HG%2FCqtpm%2B4E9TDpahfk%2Bt5nkhPzfxgGgmPOv5ZkPZx7hVzdlPzAD09BhB68sAXgw5OqtxAY6pgFn%2FBaz%2BrEVj2H5hZeF2Tom%2BAlUhBYzJ0ULHnmNcCQMh21kJ3oX7L4BFNBKs8GtjdWfnrR2%2FLMxStT3YHZG9qygWBUIWC%2BePOaSYPM3nwenjcGqRdm4qjARwFqy%2BjzEvW038lLD8%2FtSmaU4nsTiTUdL2R4R3%2FrgLQUWBcjGLXRJenN2doxALJfl600lkNJw%2BJR7J6PwN6K44WVKosWatW%2F0w9MpzgWA&X-Amz-Signature=1ce622f9095d5017fae927bd9970b1442ad3b5873a776d1d94c24b90a0f97cde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTYIYNB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6ISpWw7ebHrlNFIc0FXHVOIb0Mwv53odw2mnrw9o7VAiAnKOGT6EQm%2FDjfoeKTgJrfsxRhTNHdBCG52Zb3KiH0RSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3B8RF3owq7fn%2B7VPKtwD1ouxKZ3z%2B3iIz4OJaCb8cDkh0tO1vfjEqIqf1WCDsZEV3YfhiUR8lKSn7nTAti6egIYaUvnsggQr%2BVVissCtyLcH8Ocp%2FQNq4DcJUsPj6dXpcC6YaNHCmazGmrlSo1taNSVe%2Fu3Eu9d4uiszi6w6NA4jaVL1WjSNWyW%2FMYFWMayUbN7HWyuI684HdZUzwuHCk%2BeU3r66FjGFThvCnjiT45PNA8AtJ7a6bo34PhErJoVUdap%2BcD7Bm0M55g4wSAVSSOQ0SPJjqFtxRgmc4UbNB%2BkBrqZG48sD%2BggbrpgICpqUY7zS2KGVAGVMazO36L3cBYustwm0jEMBh6eOj9a6XPx7KX%2FWuxsYt4et7jfbpuH0PkroAOmqY6%2FURbMDamiG1kVkHW7UlnOk7%2BBz5qfSUewu34FcFenLUccjZ2Fo7MY8TatZbZo7lqyVAjzb%2BVzVBW%2BwzWpZ4VVUS20%2FQs09IlohOH03V9itlRpiWc77n0eJUqVsd1HtB9QX9A0VJKYhkezmvG09Hgqs6ZDp84GYeHbHw1rqhoKkmI9spXFxuPAIYVg2W8%2Bwq1ykEsp1HG%2FCqtpm%2B4E9TDpahfk%2Bt5nkhPzfxgGgmPOv5ZkPZx7hVzdlPzAD09BhB68sAXgw5OqtxAY6pgFn%2FBaz%2BrEVj2H5hZeF2Tom%2BAlUhBYzJ0ULHnmNcCQMh21kJ3oX7L4BFNBKs8GtjdWfnrR2%2FLMxStT3YHZG9qygWBUIWC%2BePOaSYPM3nwenjcGqRdm4qjARwFqy%2BjzEvW038lLD8%2FtSmaU4nsTiTUdL2R4R3%2FrgLQUWBcjGLXRJenN2doxALJfl600lkNJw%2BJR7J6PwN6K44WVKosWatW%2F0w9MpzgWA&X-Amz-Signature=b298cbed3f716f767c7e0cdca55fa84786d1d13fb88d265b623ad67fedf7b787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTYIYNB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6ISpWw7ebHrlNFIc0FXHVOIb0Mwv53odw2mnrw9o7VAiAnKOGT6EQm%2FDjfoeKTgJrfsxRhTNHdBCG52Zb3KiH0RSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3B8RF3owq7fn%2B7VPKtwD1ouxKZ3z%2B3iIz4OJaCb8cDkh0tO1vfjEqIqf1WCDsZEV3YfhiUR8lKSn7nTAti6egIYaUvnsggQr%2BVVissCtyLcH8Ocp%2FQNq4DcJUsPj6dXpcC6YaNHCmazGmrlSo1taNSVe%2Fu3Eu9d4uiszi6w6NA4jaVL1WjSNWyW%2FMYFWMayUbN7HWyuI684HdZUzwuHCk%2BeU3r66FjGFThvCnjiT45PNA8AtJ7a6bo34PhErJoVUdap%2BcD7Bm0M55g4wSAVSSOQ0SPJjqFtxRgmc4UbNB%2BkBrqZG48sD%2BggbrpgICpqUY7zS2KGVAGVMazO36L3cBYustwm0jEMBh6eOj9a6XPx7KX%2FWuxsYt4et7jfbpuH0PkroAOmqY6%2FURbMDamiG1kVkHW7UlnOk7%2BBz5qfSUewu34FcFenLUccjZ2Fo7MY8TatZbZo7lqyVAjzb%2BVzVBW%2BwzWpZ4VVUS20%2FQs09IlohOH03V9itlRpiWc77n0eJUqVsd1HtB9QX9A0VJKYhkezmvG09Hgqs6ZDp84GYeHbHw1rqhoKkmI9spXFxuPAIYVg2W8%2Bwq1ykEsp1HG%2FCqtpm%2B4E9TDpahfk%2Bt5nkhPzfxgGgmPOv5ZkPZx7hVzdlPzAD09BhB68sAXgw5OqtxAY6pgFn%2FBaz%2BrEVj2H5hZeF2Tom%2BAlUhBYzJ0ULHnmNcCQMh21kJ3oX7L4BFNBKs8GtjdWfnrR2%2FLMxStT3YHZG9qygWBUIWC%2BePOaSYPM3nwenjcGqRdm4qjARwFqy%2BjzEvW038lLD8%2FtSmaU4nsTiTUdL2R4R3%2FrgLQUWBcjGLXRJenN2doxALJfl600lkNJw%2BJR7J6PwN6K44WVKosWatW%2F0w9MpzgWA&X-Amz-Signature=b9ed619f84dac05ebd1709a52c977ea5990ea2ad09ebb82d6e89423b83fc27bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTYIYNB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6ISpWw7ebHrlNFIc0FXHVOIb0Mwv53odw2mnrw9o7VAiAnKOGT6EQm%2FDjfoeKTgJrfsxRhTNHdBCG52Zb3KiH0RSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3B8RF3owq7fn%2B7VPKtwD1ouxKZ3z%2B3iIz4OJaCb8cDkh0tO1vfjEqIqf1WCDsZEV3YfhiUR8lKSn7nTAti6egIYaUvnsggQr%2BVVissCtyLcH8Ocp%2FQNq4DcJUsPj6dXpcC6YaNHCmazGmrlSo1taNSVe%2Fu3Eu9d4uiszi6w6NA4jaVL1WjSNWyW%2FMYFWMayUbN7HWyuI684HdZUzwuHCk%2BeU3r66FjGFThvCnjiT45PNA8AtJ7a6bo34PhErJoVUdap%2BcD7Bm0M55g4wSAVSSOQ0SPJjqFtxRgmc4UbNB%2BkBrqZG48sD%2BggbrpgICpqUY7zS2KGVAGVMazO36L3cBYustwm0jEMBh6eOj9a6XPx7KX%2FWuxsYt4et7jfbpuH0PkroAOmqY6%2FURbMDamiG1kVkHW7UlnOk7%2BBz5qfSUewu34FcFenLUccjZ2Fo7MY8TatZbZo7lqyVAjzb%2BVzVBW%2BwzWpZ4VVUS20%2FQs09IlohOH03V9itlRpiWc77n0eJUqVsd1HtB9QX9A0VJKYhkezmvG09Hgqs6ZDp84GYeHbHw1rqhoKkmI9spXFxuPAIYVg2W8%2Bwq1ykEsp1HG%2FCqtpm%2B4E9TDpahfk%2Bt5nkhPzfxgGgmPOv5ZkPZx7hVzdlPzAD09BhB68sAXgw5OqtxAY6pgFn%2FBaz%2BrEVj2H5hZeF2Tom%2BAlUhBYzJ0ULHnmNcCQMh21kJ3oX7L4BFNBKs8GtjdWfnrR2%2FLMxStT3YHZG9qygWBUIWC%2BePOaSYPM3nwenjcGqRdm4qjARwFqy%2BjzEvW038lLD8%2FtSmaU4nsTiTUdL2R4R3%2FrgLQUWBcjGLXRJenN2doxALJfl600lkNJw%2BJR7J6PwN6K44WVKosWatW%2F0w9MpzgWA&X-Amz-Signature=97849b6eb4f2a5003ea0c8fb1b4297bd6191027567e66b48ef9caae8c8579fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTYIYNB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6ISpWw7ebHrlNFIc0FXHVOIb0Mwv53odw2mnrw9o7VAiAnKOGT6EQm%2FDjfoeKTgJrfsxRhTNHdBCG52Zb3KiH0RSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3B8RF3owq7fn%2B7VPKtwD1ouxKZ3z%2B3iIz4OJaCb8cDkh0tO1vfjEqIqf1WCDsZEV3YfhiUR8lKSn7nTAti6egIYaUvnsggQr%2BVVissCtyLcH8Ocp%2FQNq4DcJUsPj6dXpcC6YaNHCmazGmrlSo1taNSVe%2Fu3Eu9d4uiszi6w6NA4jaVL1WjSNWyW%2FMYFWMayUbN7HWyuI684HdZUzwuHCk%2BeU3r66FjGFThvCnjiT45PNA8AtJ7a6bo34PhErJoVUdap%2BcD7Bm0M55g4wSAVSSOQ0SPJjqFtxRgmc4UbNB%2BkBrqZG48sD%2BggbrpgICpqUY7zS2KGVAGVMazO36L3cBYustwm0jEMBh6eOj9a6XPx7KX%2FWuxsYt4et7jfbpuH0PkroAOmqY6%2FURbMDamiG1kVkHW7UlnOk7%2BBz5qfSUewu34FcFenLUccjZ2Fo7MY8TatZbZo7lqyVAjzb%2BVzVBW%2BwzWpZ4VVUS20%2FQs09IlohOH03V9itlRpiWc77n0eJUqVsd1HtB9QX9A0VJKYhkezmvG09Hgqs6ZDp84GYeHbHw1rqhoKkmI9spXFxuPAIYVg2W8%2Bwq1ykEsp1HG%2FCqtpm%2B4E9TDpahfk%2Bt5nkhPzfxgGgmPOv5ZkPZx7hVzdlPzAD09BhB68sAXgw5OqtxAY6pgFn%2FBaz%2BrEVj2H5hZeF2Tom%2BAlUhBYzJ0ULHnmNcCQMh21kJ3oX7L4BFNBKs8GtjdWfnrR2%2FLMxStT3YHZG9qygWBUIWC%2BePOaSYPM3nwenjcGqRdm4qjARwFqy%2BjzEvW038lLD8%2FtSmaU4nsTiTUdL2R4R3%2FrgLQUWBcjGLXRJenN2doxALJfl600lkNJw%2BJR7J6PwN6K44WVKosWatW%2F0w9MpzgWA&X-Amz-Signature=7e0c533e7b2d4eed783abe515fca78f39f7f09993ad1afd0c0ce5bc7f9fc7fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDSACT2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjBSANy%2BT541ldt8ZZOJAZJQPAQC%2BMOXikP7TYo85yUQIhAL25wZhUG34FTgkJD6upcbw3xcjlxVHi05JuVwbUEwDVKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybwnTOFeCpO%2B%2FTDzUq3AOENtK6f0CiUnTBciQ7zQA8Cn4e%2Bwa7DEyTB6o%2B92KpDHePXuv921GwmDU5PWgQmvxeT6W1vQ7KvXiU8Wjo%2B4maKGFrp3%2FTTwrt2IEtNPft6al%2BGQ9YS7bkMEOh0RCQ2cWZ0ByFsAAPWqFSNHhRrkWM0XmHwMnFLVhmVnLJdQTr0oLHHuCGlD7A9D8JVurlsYB1UAfGXDDIsI2G4rMDOlNJ9DbmK7nHBpYROn7vWuuXN25Q%2BbSImWClTDcBkj7m4RR6NUGpqnWWbqdba0%2FVtBI8a2x4lP4l%2BfOtQgS1lXw7FwAPn3a7L9jS6qTEHpOl4OlQRJ%2BM9ucLCPa4AfzsGqDRKCZm%2FhTMlE31Rl1qoXGzLf6Q4DPqhRP2CozqVWeELPNFXTwEk7OlVEFlNVSzOCGLzo0tvSCdPgtlV4eJU5uv3JKxyq1KTXx%2FEsVulnbt%2Bbkd5v1myGV4Q7pITTHHHzh74UfeTAQgdt5B6SwRJfhPYP4yTNVbAuHBxlX5FAkkvp%2BFJlngINM1iH3Lqcaj8aqRmhbJDv%2BniJlXr2wL%2FHpIo11BKKU1L6V9nVl0mHtdICBJIGbSQ0CtBJYXfRcDE%2FlSYyVqyJmvapLsIcQJ0TRBHk62IIw%2BoKhh3LkUrjCv6q3EBjqkAQqvjyIFopd7%2BSTMbSKRZCzJwgYKNSpZaaqyDwIXPA2f2%2BEpgOEjWrOKLHfJ56j5E69TToSoNcrfsjeN86BxTH%2BUwOFC41oczpQwy34oTQBON5zpI0r7I1TwWL6DoQQdrq1m5vhMFWBznhPHaN5JOzea2fQ66Rd6kgESbPPPQprnG%2BKqwpDDSAhbIHEWJ%2B6T4VIN%2Fsmnp15spDotC%2FFVJY%2BfPIkN&X-Amz-Signature=2d9598dbbfd8c778ae8b6e780c131232b79496ab0be5b73c596d2eb285897620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTYIYNB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6ISpWw7ebHrlNFIc0FXHVOIb0Mwv53odw2mnrw9o7VAiAnKOGT6EQm%2FDjfoeKTgJrfsxRhTNHdBCG52Zb3KiH0RSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3B8RF3owq7fn%2B7VPKtwD1ouxKZ3z%2B3iIz4OJaCb8cDkh0tO1vfjEqIqf1WCDsZEV3YfhiUR8lKSn7nTAti6egIYaUvnsggQr%2BVVissCtyLcH8Ocp%2FQNq4DcJUsPj6dXpcC6YaNHCmazGmrlSo1taNSVe%2Fu3Eu9d4uiszi6w6NA4jaVL1WjSNWyW%2FMYFWMayUbN7HWyuI684HdZUzwuHCk%2BeU3r66FjGFThvCnjiT45PNA8AtJ7a6bo34PhErJoVUdap%2BcD7Bm0M55g4wSAVSSOQ0SPJjqFtxRgmc4UbNB%2BkBrqZG48sD%2BggbrpgICpqUY7zS2KGVAGVMazO36L3cBYustwm0jEMBh6eOj9a6XPx7KX%2FWuxsYt4et7jfbpuH0PkroAOmqY6%2FURbMDamiG1kVkHW7UlnOk7%2BBz5qfSUewu34FcFenLUccjZ2Fo7MY8TatZbZo7lqyVAjzb%2BVzVBW%2BwzWpZ4VVUS20%2FQs09IlohOH03V9itlRpiWc77n0eJUqVsd1HtB9QX9A0VJKYhkezmvG09Hgqs6ZDp84GYeHbHw1rqhoKkmI9spXFxuPAIYVg2W8%2Bwq1ykEsp1HG%2FCqtpm%2B4E9TDpahfk%2Bt5nkhPzfxgGgmPOv5ZkPZx7hVzdlPzAD09BhB68sAXgw5OqtxAY6pgFn%2FBaz%2BrEVj2H5hZeF2Tom%2BAlUhBYzJ0ULHnmNcCQMh21kJ3oX7L4BFNBKs8GtjdWfnrR2%2FLMxStT3YHZG9qygWBUIWC%2BePOaSYPM3nwenjcGqRdm4qjARwFqy%2BjzEvW038lLD8%2FtSmaU4nsTiTUdL2R4R3%2FrgLQUWBcjGLXRJenN2doxALJfl600lkNJw%2BJR7J6PwN6K44WVKosWatW%2F0w9MpzgWA&X-Amz-Signature=54dd3a93294c2a593adec90b9fa620f94c9cf8d15e3dc13186946756d140bd15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63HC4BO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRi22rz7%2FDP6yBZ8gHvDuR9X0JwxlJN4XQTcYolHWyIAiBhaAAKcgfynUozX3%2FGYrlxoZom8ISaFxkr2hWaIFOp7iqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDQe1pZaAKIgBdMPGKtwDwm4oEwlESuo%2F0pqNH1bseCtuLracqub7dIx32TcmPklxHqd9N7VArTRwUGaGt2CVo4U5A4KEoRreiW7wtCBk%2Fn5cRz9EhQkysLX9hbFEmxZe7q%2Bs%2Fqa9PupBl9BwfnUvOSg9h2D6prg8HgnOGJ6jkHSOuKUJhRJpjrS1pmQSugnXB4aY%2F2t6XeUGxxqlLUMA428ExOf%2FclI3jnk7bgHe67luk0qmCFME6LbeFV1XHeWmLhNQ6r7%2BPmVnoKzCuKP6iHOdOhnCBuJ5aydwkClLC8b2P90rE0H1PWDJNQrejyRUv8SzUaknh7EbswUOCRLmEJvZaM5rPxoEUz5lrY6L%2FHxwxgGLXkowRH7fumu9mumY%2FSwNfODMqtBY1TXjrrizkXx8vDOTTe2Ku2FsxnTqdCCtHPlwm8t963u58GHs%2FQOraqEwPcfwYqmMkhktBT15NkSTq0xc10VPDoPFCMboyic11rV03V6rbv5x9XdjGr1x8%2FPl%2BwR5rByK101%2B52uvIeG2QzdXYQdvWQbS%2F8OhFTEJdxMLYqFeVK7TYEGM%2FXapjkchvOy%2Bj3Ppu%2BDbfQbEHz9BGztEmKB3pCvSZ6IJ4VGviMfmH3L7abI6YGGAPR3AGAoYOotBz99%2F6wgwnOmtxAY6pgFceEQg4p9SrX%2F5uEYbfWZ%2Fh1MWeemm8Bandrm8kJNuVcDq%2Fym65e%2F0X2PpLTC6RaSHg2Y6QncwTh%2BjgDdpetDI7UxwaJEvqE%2FUdnWYUKvqWJB%2BuljRZyvFnp6fv8RrmvbSRVMLMkL0TQZQE0Y62j527sWn5HB1Z9vyxA%2FEk4ieVWSFa%2FF0%2F0QB8T2zGG9vNl1DpOzyJrsQbz%2BIlHvIRLoXvhL51KC2&X-Amz-Signature=5b3279676403c68e723396bff499b1a9e32d4247d5e279d55b2f0581cdfe7e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63HC4BO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRi22rz7%2FDP6yBZ8gHvDuR9X0JwxlJN4XQTcYolHWyIAiBhaAAKcgfynUozX3%2FGYrlxoZom8ISaFxkr2hWaIFOp7iqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDQe1pZaAKIgBdMPGKtwDwm4oEwlESuo%2F0pqNH1bseCtuLracqub7dIx32TcmPklxHqd9N7VArTRwUGaGt2CVo4U5A4KEoRreiW7wtCBk%2Fn5cRz9EhQkysLX9hbFEmxZe7q%2Bs%2Fqa9PupBl9BwfnUvOSg9h2D6prg8HgnOGJ6jkHSOuKUJhRJpjrS1pmQSugnXB4aY%2F2t6XeUGxxqlLUMA428ExOf%2FclI3jnk7bgHe67luk0qmCFME6LbeFV1XHeWmLhNQ6r7%2BPmVnoKzCuKP6iHOdOhnCBuJ5aydwkClLC8b2P90rE0H1PWDJNQrejyRUv8SzUaknh7EbswUOCRLmEJvZaM5rPxoEUz5lrY6L%2FHxwxgGLXkowRH7fumu9mumY%2FSwNfODMqtBY1TXjrrizkXx8vDOTTe2Ku2FsxnTqdCCtHPlwm8t963u58GHs%2FQOraqEwPcfwYqmMkhktBT15NkSTq0xc10VPDoPFCMboyic11rV03V6rbv5x9XdjGr1x8%2FPl%2BwR5rByK101%2B52uvIeG2QzdXYQdvWQbS%2F8OhFTEJdxMLYqFeVK7TYEGM%2FXapjkchvOy%2Bj3Ppu%2BDbfQbEHz9BGztEmKB3pCvSZ6IJ4VGviMfmH3L7abI6YGGAPR3AGAoYOotBz99%2F6wgwnOmtxAY6pgFceEQg4p9SrX%2F5uEYbfWZ%2Fh1MWeemm8Bandrm8kJNuVcDq%2Fym65e%2F0X2PpLTC6RaSHg2Y6QncwTh%2BjgDdpetDI7UxwaJEvqE%2FUdnWYUKvqWJB%2BuljRZyvFnp6fv8RrmvbSRVMLMkL0TQZQE0Y62j527sWn5HB1Z9vyxA%2FEk4ieVWSFa%2FF0%2F0QB8T2zGG9vNl1DpOzyJrsQbz%2BIlHvIRLoXvhL51KC2&X-Amz-Signature=707222501c39bb7714d5b0501720e564d74ebc8402c42da713b4e074baeb2b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63HC4BO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRi22rz7%2FDP6yBZ8gHvDuR9X0JwxlJN4XQTcYolHWyIAiBhaAAKcgfynUozX3%2FGYrlxoZom8ISaFxkr2hWaIFOp7iqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDQe1pZaAKIgBdMPGKtwDwm4oEwlESuo%2F0pqNH1bseCtuLracqub7dIx32TcmPklxHqd9N7VArTRwUGaGt2CVo4U5A4KEoRreiW7wtCBk%2Fn5cRz9EhQkysLX9hbFEmxZe7q%2Bs%2Fqa9PupBl9BwfnUvOSg9h2D6prg8HgnOGJ6jkHSOuKUJhRJpjrS1pmQSugnXB4aY%2F2t6XeUGxxqlLUMA428ExOf%2FclI3jnk7bgHe67luk0qmCFME6LbeFV1XHeWmLhNQ6r7%2BPmVnoKzCuKP6iHOdOhnCBuJ5aydwkClLC8b2P90rE0H1PWDJNQrejyRUv8SzUaknh7EbswUOCRLmEJvZaM5rPxoEUz5lrY6L%2FHxwxgGLXkowRH7fumu9mumY%2FSwNfODMqtBY1TXjrrizkXx8vDOTTe2Ku2FsxnTqdCCtHPlwm8t963u58GHs%2FQOraqEwPcfwYqmMkhktBT15NkSTq0xc10VPDoPFCMboyic11rV03V6rbv5x9XdjGr1x8%2FPl%2BwR5rByK101%2B52uvIeG2QzdXYQdvWQbS%2F8OhFTEJdxMLYqFeVK7TYEGM%2FXapjkchvOy%2Bj3Ppu%2BDbfQbEHz9BGztEmKB3pCvSZ6IJ4VGviMfmH3L7abI6YGGAPR3AGAoYOotBz99%2F6wgwnOmtxAY6pgFceEQg4p9SrX%2F5uEYbfWZ%2Fh1MWeemm8Bandrm8kJNuVcDq%2Fym65e%2F0X2PpLTC6RaSHg2Y6QncwTh%2BjgDdpetDI7UxwaJEvqE%2FUdnWYUKvqWJB%2BuljRZyvFnp6fv8RrmvbSRVMLMkL0TQZQE0Y62j527sWn5HB1Z9vyxA%2FEk4ieVWSFa%2FF0%2F0QB8T2zGG9vNl1DpOzyJrsQbz%2BIlHvIRLoXvhL51KC2&X-Amz-Signature=ceb9ab3dfd1a133138e903cd0ad7e483528d440c849d74fc83e0295c0e11680b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63HC4BO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRi22rz7%2FDP6yBZ8gHvDuR9X0JwxlJN4XQTcYolHWyIAiBhaAAKcgfynUozX3%2FGYrlxoZom8ISaFxkr2hWaIFOp7iqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDQe1pZaAKIgBdMPGKtwDwm4oEwlESuo%2F0pqNH1bseCtuLracqub7dIx32TcmPklxHqd9N7VArTRwUGaGt2CVo4U5A4KEoRreiW7wtCBk%2Fn5cRz9EhQkysLX9hbFEmxZe7q%2Bs%2Fqa9PupBl9BwfnUvOSg9h2D6prg8HgnOGJ6jkHSOuKUJhRJpjrS1pmQSugnXB4aY%2F2t6XeUGxxqlLUMA428ExOf%2FclI3jnk7bgHe67luk0qmCFME6LbeFV1XHeWmLhNQ6r7%2BPmVnoKzCuKP6iHOdOhnCBuJ5aydwkClLC8b2P90rE0H1PWDJNQrejyRUv8SzUaknh7EbswUOCRLmEJvZaM5rPxoEUz5lrY6L%2FHxwxgGLXkowRH7fumu9mumY%2FSwNfODMqtBY1TXjrrizkXx8vDOTTe2Ku2FsxnTqdCCtHPlwm8t963u58GHs%2FQOraqEwPcfwYqmMkhktBT15NkSTq0xc10VPDoPFCMboyic11rV03V6rbv5x9XdjGr1x8%2FPl%2BwR5rByK101%2B52uvIeG2QzdXYQdvWQbS%2F8OhFTEJdxMLYqFeVK7TYEGM%2FXapjkchvOy%2Bj3Ppu%2BDbfQbEHz9BGztEmKB3pCvSZ6IJ4VGviMfmH3L7abI6YGGAPR3AGAoYOotBz99%2F6wgwnOmtxAY6pgFceEQg4p9SrX%2F5uEYbfWZ%2Fh1MWeemm8Bandrm8kJNuVcDq%2Fym65e%2F0X2PpLTC6RaSHg2Y6QncwTh%2BjgDdpetDI7UxwaJEvqE%2FUdnWYUKvqWJB%2BuljRZyvFnp6fv8RrmvbSRVMLMkL0TQZQE0Y62j527sWn5HB1Z9vyxA%2FEk4ieVWSFa%2FF0%2F0QB8T2zGG9vNl1DpOzyJrsQbz%2BIlHvIRLoXvhL51KC2&X-Amz-Signature=aac40fadef3468615e2d5c850896c4a57fc76f3b6ea3821cf58903fecc068ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63HC4BO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRi22rz7%2FDP6yBZ8gHvDuR9X0JwxlJN4XQTcYolHWyIAiBhaAAKcgfynUozX3%2FGYrlxoZom8ISaFxkr2hWaIFOp7iqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDQe1pZaAKIgBdMPGKtwDwm4oEwlESuo%2F0pqNH1bseCtuLracqub7dIx32TcmPklxHqd9N7VArTRwUGaGt2CVo4U5A4KEoRreiW7wtCBk%2Fn5cRz9EhQkysLX9hbFEmxZe7q%2Bs%2Fqa9PupBl9BwfnUvOSg9h2D6prg8HgnOGJ6jkHSOuKUJhRJpjrS1pmQSugnXB4aY%2F2t6XeUGxxqlLUMA428ExOf%2FclI3jnk7bgHe67luk0qmCFME6LbeFV1XHeWmLhNQ6r7%2BPmVnoKzCuKP6iHOdOhnCBuJ5aydwkClLC8b2P90rE0H1PWDJNQrejyRUv8SzUaknh7EbswUOCRLmEJvZaM5rPxoEUz5lrY6L%2FHxwxgGLXkowRH7fumu9mumY%2FSwNfODMqtBY1TXjrrizkXx8vDOTTe2Ku2FsxnTqdCCtHPlwm8t963u58GHs%2FQOraqEwPcfwYqmMkhktBT15NkSTq0xc10VPDoPFCMboyic11rV03V6rbv5x9XdjGr1x8%2FPl%2BwR5rByK101%2B52uvIeG2QzdXYQdvWQbS%2F8OhFTEJdxMLYqFeVK7TYEGM%2FXapjkchvOy%2Bj3Ppu%2BDbfQbEHz9BGztEmKB3pCvSZ6IJ4VGviMfmH3L7abI6YGGAPR3AGAoYOotBz99%2F6wgwnOmtxAY6pgFceEQg4p9SrX%2F5uEYbfWZ%2Fh1MWeemm8Bandrm8kJNuVcDq%2Fym65e%2F0X2PpLTC6RaSHg2Y6QncwTh%2BjgDdpetDI7UxwaJEvqE%2FUdnWYUKvqWJB%2BuljRZyvFnp6fv8RrmvbSRVMLMkL0TQZQE0Y62j527sWn5HB1Z9vyxA%2FEk4ieVWSFa%2FF0%2F0QB8T2zGG9vNl1DpOzyJrsQbz%2BIlHvIRLoXvhL51KC2&X-Amz-Signature=bd5549ff4b911fdf23031277ace05c2cb7265af5d3d9df0ddf375b96a33bfcc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63HC4BO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRi22rz7%2FDP6yBZ8gHvDuR9X0JwxlJN4XQTcYolHWyIAiBhaAAKcgfynUozX3%2FGYrlxoZom8ISaFxkr2hWaIFOp7iqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDQe1pZaAKIgBdMPGKtwDwm4oEwlESuo%2F0pqNH1bseCtuLracqub7dIx32TcmPklxHqd9N7VArTRwUGaGt2CVo4U5A4KEoRreiW7wtCBk%2Fn5cRz9EhQkysLX9hbFEmxZe7q%2Bs%2Fqa9PupBl9BwfnUvOSg9h2D6prg8HgnOGJ6jkHSOuKUJhRJpjrS1pmQSugnXB4aY%2F2t6XeUGxxqlLUMA428ExOf%2FclI3jnk7bgHe67luk0qmCFME6LbeFV1XHeWmLhNQ6r7%2BPmVnoKzCuKP6iHOdOhnCBuJ5aydwkClLC8b2P90rE0H1PWDJNQrejyRUv8SzUaknh7EbswUOCRLmEJvZaM5rPxoEUz5lrY6L%2FHxwxgGLXkowRH7fumu9mumY%2FSwNfODMqtBY1TXjrrizkXx8vDOTTe2Ku2FsxnTqdCCtHPlwm8t963u58GHs%2FQOraqEwPcfwYqmMkhktBT15NkSTq0xc10VPDoPFCMboyic11rV03V6rbv5x9XdjGr1x8%2FPl%2BwR5rByK101%2B52uvIeG2QzdXYQdvWQbS%2F8OhFTEJdxMLYqFeVK7TYEGM%2FXapjkchvOy%2Bj3Ppu%2BDbfQbEHz9BGztEmKB3pCvSZ6IJ4VGviMfmH3L7abI6YGGAPR3AGAoYOotBz99%2F6wgwnOmtxAY6pgFceEQg4p9SrX%2F5uEYbfWZ%2Fh1MWeemm8Bandrm8kJNuVcDq%2Fym65e%2F0X2PpLTC6RaSHg2Y6QncwTh%2BjgDdpetDI7UxwaJEvqE%2FUdnWYUKvqWJB%2BuljRZyvFnp6fv8RrmvbSRVMLMkL0TQZQE0Y62j527sWn5HB1Z9vyxA%2FEk4ieVWSFa%2FF0%2F0QB8T2zGG9vNl1DpOzyJrsQbz%2BIlHvIRLoXvhL51KC2&X-Amz-Signature=61ecd570c601a805f62d95185e515d1e4feb63b5a1776b13527dd4dcb30c6daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63HC4BO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRi22rz7%2FDP6yBZ8gHvDuR9X0JwxlJN4XQTcYolHWyIAiBhaAAKcgfynUozX3%2FGYrlxoZom8ISaFxkr2hWaIFOp7iqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDQe1pZaAKIgBdMPGKtwDwm4oEwlESuo%2F0pqNH1bseCtuLracqub7dIx32TcmPklxHqd9N7VArTRwUGaGt2CVo4U5A4KEoRreiW7wtCBk%2Fn5cRz9EhQkysLX9hbFEmxZe7q%2Bs%2Fqa9PupBl9BwfnUvOSg9h2D6prg8HgnOGJ6jkHSOuKUJhRJpjrS1pmQSugnXB4aY%2F2t6XeUGxxqlLUMA428ExOf%2FclI3jnk7bgHe67luk0qmCFME6LbeFV1XHeWmLhNQ6r7%2BPmVnoKzCuKP6iHOdOhnCBuJ5aydwkClLC8b2P90rE0H1PWDJNQrejyRUv8SzUaknh7EbswUOCRLmEJvZaM5rPxoEUz5lrY6L%2FHxwxgGLXkowRH7fumu9mumY%2FSwNfODMqtBY1TXjrrizkXx8vDOTTe2Ku2FsxnTqdCCtHPlwm8t963u58GHs%2FQOraqEwPcfwYqmMkhktBT15NkSTq0xc10VPDoPFCMboyic11rV03V6rbv5x9XdjGr1x8%2FPl%2BwR5rByK101%2B52uvIeG2QzdXYQdvWQbS%2F8OhFTEJdxMLYqFeVK7TYEGM%2FXapjkchvOy%2Bj3Ppu%2BDbfQbEHz9BGztEmKB3pCvSZ6IJ4VGviMfmH3L7abI6YGGAPR3AGAoYOotBz99%2F6wgwnOmtxAY6pgFceEQg4p9SrX%2F5uEYbfWZ%2Fh1MWeemm8Bandrm8kJNuVcDq%2Fym65e%2F0X2PpLTC6RaSHg2Y6QncwTh%2BjgDdpetDI7UxwaJEvqE%2FUdnWYUKvqWJB%2BuljRZyvFnp6fv8RrmvbSRVMLMkL0TQZQE0Y62j527sWn5HB1Z9vyxA%2FEk4ieVWSFa%2FF0%2F0QB8T2zGG9vNl1DpOzyJrsQbz%2BIlHvIRLoXvhL51KC2&X-Amz-Signature=64f7ca796d3c8bce2fb29ec93fd1c1e64343e191e446a8f7e86e1b942e97757f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z63HC4BO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRi22rz7%2FDP6yBZ8gHvDuR9X0JwxlJN4XQTcYolHWyIAiBhaAAKcgfynUozX3%2FGYrlxoZom8ISaFxkr2hWaIFOp7iqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDQe1pZaAKIgBdMPGKtwDwm4oEwlESuo%2F0pqNH1bseCtuLracqub7dIx32TcmPklxHqd9N7VArTRwUGaGt2CVo4U5A4KEoRreiW7wtCBk%2Fn5cRz9EhQkysLX9hbFEmxZe7q%2Bs%2Fqa9PupBl9BwfnUvOSg9h2D6prg8HgnOGJ6jkHSOuKUJhRJpjrS1pmQSugnXB4aY%2F2t6XeUGxxqlLUMA428ExOf%2FclI3jnk7bgHe67luk0qmCFME6LbeFV1XHeWmLhNQ6r7%2BPmVnoKzCuKP6iHOdOhnCBuJ5aydwkClLC8b2P90rE0H1PWDJNQrejyRUv8SzUaknh7EbswUOCRLmEJvZaM5rPxoEUz5lrY6L%2FHxwxgGLXkowRH7fumu9mumY%2FSwNfODMqtBY1TXjrrizkXx8vDOTTe2Ku2FsxnTqdCCtHPlwm8t963u58GHs%2FQOraqEwPcfwYqmMkhktBT15NkSTq0xc10VPDoPFCMboyic11rV03V6rbv5x9XdjGr1x8%2FPl%2BwR5rByK101%2B52uvIeG2QzdXYQdvWQbS%2F8OhFTEJdxMLYqFeVK7TYEGM%2FXapjkchvOy%2Bj3Ppu%2BDbfQbEHz9BGztEmKB3pCvSZ6IJ4VGviMfmH3L7abI6YGGAPR3AGAoYOotBz99%2F6wgwnOmtxAY6pgFceEQg4p9SrX%2F5uEYbfWZ%2Fh1MWeemm8Bandrm8kJNuVcDq%2Fym65e%2F0X2PpLTC6RaSHg2Y6QncwTh%2BjgDdpetDI7UxwaJEvqE%2FUdnWYUKvqWJB%2BuljRZyvFnp6fv8RrmvbSRVMLMkL0TQZQE0Y62j527sWn5HB1Z9vyxA%2FEk4ieVWSFa%2FF0%2F0QB8T2zGG9vNl1DpOzyJrsQbz%2BIlHvIRLoXvhL51KC2&X-Amz-Signature=a9453cb9f2aed3738be2ddd1b997702eedff87a689d4e5907ae1d0fdcf1134df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
