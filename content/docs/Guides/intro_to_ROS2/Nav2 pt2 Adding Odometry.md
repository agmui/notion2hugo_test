---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X6QOFY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75Sxwk8Zk2FcPD8h1RYi9rgbTjKsE0e%2BVdu%2BzGse7QQIgXYJDgn8jgXhOQZHBvXldrUbt%2BNW2IvF4P8OBQ22Xe3MqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ27Pr%2FqHxfoLpE87CrcA9Shjzka2pgCjFD24jw5X0vw1i3hZDPf0ObKwQipcha9V2eRlgx%2BBO%2BjV1EE2YNt4lm431oaFuLmmDhwdVYI11wxptaWE6s1TYyJjMNN34MXCCPlgdXZMgA5YW5hiKK6%2FEcVsF5ccyq87i1I1PykhXmhKKVpX9Ts5XUQ%2BZPHsn1JrRyvg558Xyafgkic5AegiiOjQSXK36VQ77jGVfBhQDrEH1ee8MZ1pXOAyxR8llr%2BzTK%2BplC%2BTEkA9eo%2FlVg%2Frc0%2FRLQqB9gRF5uJvsinZtQjrSpPSK%2B%2BRpv1tdsDAzKi3H5oceqwa8Sh2X5oTpb6NOyOPuDLQ4VyBJ0p7iMJQB43ZnoRApNQTc85sT6CpSwfn1ORZ08B4nFmcaWmopfmMqR0L5z8ulB2j3dkL5OGCl%2BEETBgKpn1S77Sx6%2Fh4FCo76zpnKBx5ONShaWLi7OflbOL4ecJavUI3HNiw0aLAjVF2rvvj%2FXM7%2BQSYupw6Mp8wyCbsbb7wAkAtGe0CQz%2FFDF7b9UCXAdnsPGXsQa%2FhwqqKolu10PpGicEnXY2Ys%2FP2o%2B%2Ba0IY2i1ZSrdIX46r690O9JFbBtc%2FO5cCKcRGb%2BK1NuoFul7ShDrOGbnV06t0cvBRygeVPN1Ibh0zMNjcpMQGOqUBOcXUV8vS037jQNJjTJJc3pJs52%2BakFlgNYdneNedYWTL5VhR86lVEdWu2nUzb3EKRPo4u%2BwGDlaa8IY%2FCJvl%2FQakQM1FQ%2FRUmXsdu6mvZbXEc%2BV71ImrkhNOaUFERxfMLVJT1Wvw1kw5hFM3PFpy%2BWOb7iFl6ObdUQeUDnP1lSTSJv%2BcbIZ2TdaI5d4xTpZ4RkcCoSkrCAxaq2Cxd80hOyUn0n4A&X-Amz-Signature=9a1e36463f7fcf023b4fbcbde637c36f76631b8a4996bfa7957224f8fb83f581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X6QOFY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75Sxwk8Zk2FcPD8h1RYi9rgbTjKsE0e%2BVdu%2BzGse7QQIgXYJDgn8jgXhOQZHBvXldrUbt%2BNW2IvF4P8OBQ22Xe3MqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ27Pr%2FqHxfoLpE87CrcA9Shjzka2pgCjFD24jw5X0vw1i3hZDPf0ObKwQipcha9V2eRlgx%2BBO%2BjV1EE2YNt4lm431oaFuLmmDhwdVYI11wxptaWE6s1TYyJjMNN34MXCCPlgdXZMgA5YW5hiKK6%2FEcVsF5ccyq87i1I1PykhXmhKKVpX9Ts5XUQ%2BZPHsn1JrRyvg558Xyafgkic5AegiiOjQSXK36VQ77jGVfBhQDrEH1ee8MZ1pXOAyxR8llr%2BzTK%2BplC%2BTEkA9eo%2FlVg%2Frc0%2FRLQqB9gRF5uJvsinZtQjrSpPSK%2B%2BRpv1tdsDAzKi3H5oceqwa8Sh2X5oTpb6NOyOPuDLQ4VyBJ0p7iMJQB43ZnoRApNQTc85sT6CpSwfn1ORZ08B4nFmcaWmopfmMqR0L5z8ulB2j3dkL5OGCl%2BEETBgKpn1S77Sx6%2Fh4FCo76zpnKBx5ONShaWLi7OflbOL4ecJavUI3HNiw0aLAjVF2rvvj%2FXM7%2BQSYupw6Mp8wyCbsbb7wAkAtGe0CQz%2FFDF7b9UCXAdnsPGXsQa%2FhwqqKolu10PpGicEnXY2Ys%2FP2o%2B%2Ba0IY2i1ZSrdIX46r690O9JFbBtc%2FO5cCKcRGb%2BK1NuoFul7ShDrOGbnV06t0cvBRygeVPN1Ibh0zMNjcpMQGOqUBOcXUV8vS037jQNJjTJJc3pJs52%2BakFlgNYdneNedYWTL5VhR86lVEdWu2nUzb3EKRPo4u%2BwGDlaa8IY%2FCJvl%2FQakQM1FQ%2FRUmXsdu6mvZbXEc%2BV71ImrkhNOaUFERxfMLVJT1Wvw1kw5hFM3PFpy%2BWOb7iFl6ObdUQeUDnP1lSTSJv%2BcbIZ2TdaI5d4xTpZ4RkcCoSkrCAxaq2Cxd80hOyUn0n4A&X-Amz-Signature=86ba8deb7a67d0ca58d7e520de882e3dcaff5e92b4e4abb6938aeb10aecb087b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X6QOFY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75Sxwk8Zk2FcPD8h1RYi9rgbTjKsE0e%2BVdu%2BzGse7QQIgXYJDgn8jgXhOQZHBvXldrUbt%2BNW2IvF4P8OBQ22Xe3MqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ27Pr%2FqHxfoLpE87CrcA9Shjzka2pgCjFD24jw5X0vw1i3hZDPf0ObKwQipcha9V2eRlgx%2BBO%2BjV1EE2YNt4lm431oaFuLmmDhwdVYI11wxptaWE6s1TYyJjMNN34MXCCPlgdXZMgA5YW5hiKK6%2FEcVsF5ccyq87i1I1PykhXmhKKVpX9Ts5XUQ%2BZPHsn1JrRyvg558Xyafgkic5AegiiOjQSXK36VQ77jGVfBhQDrEH1ee8MZ1pXOAyxR8llr%2BzTK%2BplC%2BTEkA9eo%2FlVg%2Frc0%2FRLQqB9gRF5uJvsinZtQjrSpPSK%2B%2BRpv1tdsDAzKi3H5oceqwa8Sh2X5oTpb6NOyOPuDLQ4VyBJ0p7iMJQB43ZnoRApNQTc85sT6CpSwfn1ORZ08B4nFmcaWmopfmMqR0L5z8ulB2j3dkL5OGCl%2BEETBgKpn1S77Sx6%2Fh4FCo76zpnKBx5ONShaWLi7OflbOL4ecJavUI3HNiw0aLAjVF2rvvj%2FXM7%2BQSYupw6Mp8wyCbsbb7wAkAtGe0CQz%2FFDF7b9UCXAdnsPGXsQa%2FhwqqKolu10PpGicEnXY2Ys%2FP2o%2B%2Ba0IY2i1ZSrdIX46r690O9JFbBtc%2FO5cCKcRGb%2BK1NuoFul7ShDrOGbnV06t0cvBRygeVPN1Ibh0zMNjcpMQGOqUBOcXUV8vS037jQNJjTJJc3pJs52%2BakFlgNYdneNedYWTL5VhR86lVEdWu2nUzb3EKRPo4u%2BwGDlaa8IY%2FCJvl%2FQakQM1FQ%2FRUmXsdu6mvZbXEc%2BV71ImrkhNOaUFERxfMLVJT1Wvw1kw5hFM3PFpy%2BWOb7iFl6ObdUQeUDnP1lSTSJv%2BcbIZ2TdaI5d4xTpZ4RkcCoSkrCAxaq2Cxd80hOyUn0n4A&X-Amz-Signature=fb99998994b2e1c041d33b9e1be07a5341d4189753a4d74a4f1540e990d3186f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X6QOFY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75Sxwk8Zk2FcPD8h1RYi9rgbTjKsE0e%2BVdu%2BzGse7QQIgXYJDgn8jgXhOQZHBvXldrUbt%2BNW2IvF4P8OBQ22Xe3MqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ27Pr%2FqHxfoLpE87CrcA9Shjzka2pgCjFD24jw5X0vw1i3hZDPf0ObKwQipcha9V2eRlgx%2BBO%2BjV1EE2YNt4lm431oaFuLmmDhwdVYI11wxptaWE6s1TYyJjMNN34MXCCPlgdXZMgA5YW5hiKK6%2FEcVsF5ccyq87i1I1PykhXmhKKVpX9Ts5XUQ%2BZPHsn1JrRyvg558Xyafgkic5AegiiOjQSXK36VQ77jGVfBhQDrEH1ee8MZ1pXOAyxR8llr%2BzTK%2BplC%2BTEkA9eo%2FlVg%2Frc0%2FRLQqB9gRF5uJvsinZtQjrSpPSK%2B%2BRpv1tdsDAzKi3H5oceqwa8Sh2X5oTpb6NOyOPuDLQ4VyBJ0p7iMJQB43ZnoRApNQTc85sT6CpSwfn1ORZ08B4nFmcaWmopfmMqR0L5z8ulB2j3dkL5OGCl%2BEETBgKpn1S77Sx6%2Fh4FCo76zpnKBx5ONShaWLi7OflbOL4ecJavUI3HNiw0aLAjVF2rvvj%2FXM7%2BQSYupw6Mp8wyCbsbb7wAkAtGe0CQz%2FFDF7b9UCXAdnsPGXsQa%2FhwqqKolu10PpGicEnXY2Ys%2FP2o%2B%2Ba0IY2i1ZSrdIX46r690O9JFbBtc%2FO5cCKcRGb%2BK1NuoFul7ShDrOGbnV06t0cvBRygeVPN1Ibh0zMNjcpMQGOqUBOcXUV8vS037jQNJjTJJc3pJs52%2BakFlgNYdneNedYWTL5VhR86lVEdWu2nUzb3EKRPo4u%2BwGDlaa8IY%2FCJvl%2FQakQM1FQ%2FRUmXsdu6mvZbXEc%2BV71ImrkhNOaUFERxfMLVJT1Wvw1kw5hFM3PFpy%2BWOb7iFl6ObdUQeUDnP1lSTSJv%2BcbIZ2TdaI5d4xTpZ4RkcCoSkrCAxaq2Cxd80hOyUn0n4A&X-Amz-Signature=f179604ff1a257d2d37cb42b617d150828e9aa9506754ef309eb5e15f323d7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X6QOFY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75Sxwk8Zk2FcPD8h1RYi9rgbTjKsE0e%2BVdu%2BzGse7QQIgXYJDgn8jgXhOQZHBvXldrUbt%2BNW2IvF4P8OBQ22Xe3MqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ27Pr%2FqHxfoLpE87CrcA9Shjzka2pgCjFD24jw5X0vw1i3hZDPf0ObKwQipcha9V2eRlgx%2BBO%2BjV1EE2YNt4lm431oaFuLmmDhwdVYI11wxptaWE6s1TYyJjMNN34MXCCPlgdXZMgA5YW5hiKK6%2FEcVsF5ccyq87i1I1PykhXmhKKVpX9Ts5XUQ%2BZPHsn1JrRyvg558Xyafgkic5AegiiOjQSXK36VQ77jGVfBhQDrEH1ee8MZ1pXOAyxR8llr%2BzTK%2BplC%2BTEkA9eo%2FlVg%2Frc0%2FRLQqB9gRF5uJvsinZtQjrSpPSK%2B%2BRpv1tdsDAzKi3H5oceqwa8Sh2X5oTpb6NOyOPuDLQ4VyBJ0p7iMJQB43ZnoRApNQTc85sT6CpSwfn1ORZ08B4nFmcaWmopfmMqR0L5z8ulB2j3dkL5OGCl%2BEETBgKpn1S77Sx6%2Fh4FCo76zpnKBx5ONShaWLi7OflbOL4ecJavUI3HNiw0aLAjVF2rvvj%2FXM7%2BQSYupw6Mp8wyCbsbb7wAkAtGe0CQz%2FFDF7b9UCXAdnsPGXsQa%2FhwqqKolu10PpGicEnXY2Ys%2FP2o%2B%2Ba0IY2i1ZSrdIX46r690O9JFbBtc%2FO5cCKcRGb%2BK1NuoFul7ShDrOGbnV06t0cvBRygeVPN1Ibh0zMNjcpMQGOqUBOcXUV8vS037jQNJjTJJc3pJs52%2BakFlgNYdneNedYWTL5VhR86lVEdWu2nUzb3EKRPo4u%2BwGDlaa8IY%2FCJvl%2FQakQM1FQ%2FRUmXsdu6mvZbXEc%2BV71ImrkhNOaUFERxfMLVJT1Wvw1kw5hFM3PFpy%2BWOb7iFl6ObdUQeUDnP1lSTSJv%2BcbIZ2TdaI5d4xTpZ4RkcCoSkrCAxaq2Cxd80hOyUn0n4A&X-Amz-Signature=06245c5281d59557bb5e5b717912b487afa97a26757e9feb60eaa611f7bb7eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X6QOFY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75Sxwk8Zk2FcPD8h1RYi9rgbTjKsE0e%2BVdu%2BzGse7QQIgXYJDgn8jgXhOQZHBvXldrUbt%2BNW2IvF4P8OBQ22Xe3MqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ27Pr%2FqHxfoLpE87CrcA9Shjzka2pgCjFD24jw5X0vw1i3hZDPf0ObKwQipcha9V2eRlgx%2BBO%2BjV1EE2YNt4lm431oaFuLmmDhwdVYI11wxptaWE6s1TYyJjMNN34MXCCPlgdXZMgA5YW5hiKK6%2FEcVsF5ccyq87i1I1PykhXmhKKVpX9Ts5XUQ%2BZPHsn1JrRyvg558Xyafgkic5AegiiOjQSXK36VQ77jGVfBhQDrEH1ee8MZ1pXOAyxR8llr%2BzTK%2BplC%2BTEkA9eo%2FlVg%2Frc0%2FRLQqB9gRF5uJvsinZtQjrSpPSK%2B%2BRpv1tdsDAzKi3H5oceqwa8Sh2X5oTpb6NOyOPuDLQ4VyBJ0p7iMJQB43ZnoRApNQTc85sT6CpSwfn1ORZ08B4nFmcaWmopfmMqR0L5z8ulB2j3dkL5OGCl%2BEETBgKpn1S77Sx6%2Fh4FCo76zpnKBx5ONShaWLi7OflbOL4ecJavUI3HNiw0aLAjVF2rvvj%2FXM7%2BQSYupw6Mp8wyCbsbb7wAkAtGe0CQz%2FFDF7b9UCXAdnsPGXsQa%2FhwqqKolu10PpGicEnXY2Ys%2FP2o%2B%2Ba0IY2i1ZSrdIX46r690O9JFbBtc%2FO5cCKcRGb%2BK1NuoFul7ShDrOGbnV06t0cvBRygeVPN1Ibh0zMNjcpMQGOqUBOcXUV8vS037jQNJjTJJc3pJs52%2BakFlgNYdneNedYWTL5VhR86lVEdWu2nUzb3EKRPo4u%2BwGDlaa8IY%2FCJvl%2FQakQM1FQ%2FRUmXsdu6mvZbXEc%2BV71ImrkhNOaUFERxfMLVJT1Wvw1kw5hFM3PFpy%2BWOb7iFl6ObdUQeUDnP1lSTSJv%2BcbIZ2TdaI5d4xTpZ4RkcCoSkrCAxaq2Cxd80hOyUn0n4A&X-Amz-Signature=b5fdea6eeab1112f34316b769f6ec3aac716c80b8fbfcf586ff44bd6c602074c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X6QOFY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75Sxwk8Zk2FcPD8h1RYi9rgbTjKsE0e%2BVdu%2BzGse7QQIgXYJDgn8jgXhOQZHBvXldrUbt%2BNW2IvF4P8OBQ22Xe3MqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ27Pr%2FqHxfoLpE87CrcA9Shjzka2pgCjFD24jw5X0vw1i3hZDPf0ObKwQipcha9V2eRlgx%2BBO%2BjV1EE2YNt4lm431oaFuLmmDhwdVYI11wxptaWE6s1TYyJjMNN34MXCCPlgdXZMgA5YW5hiKK6%2FEcVsF5ccyq87i1I1PykhXmhKKVpX9Ts5XUQ%2BZPHsn1JrRyvg558Xyafgkic5AegiiOjQSXK36VQ77jGVfBhQDrEH1ee8MZ1pXOAyxR8llr%2BzTK%2BplC%2BTEkA9eo%2FlVg%2Frc0%2FRLQqB9gRF5uJvsinZtQjrSpPSK%2B%2BRpv1tdsDAzKi3H5oceqwa8Sh2X5oTpb6NOyOPuDLQ4VyBJ0p7iMJQB43ZnoRApNQTc85sT6CpSwfn1ORZ08B4nFmcaWmopfmMqR0L5z8ulB2j3dkL5OGCl%2BEETBgKpn1S77Sx6%2Fh4FCo76zpnKBx5ONShaWLi7OflbOL4ecJavUI3HNiw0aLAjVF2rvvj%2FXM7%2BQSYupw6Mp8wyCbsbb7wAkAtGe0CQz%2FFDF7b9UCXAdnsPGXsQa%2FhwqqKolu10PpGicEnXY2Ys%2FP2o%2B%2Ba0IY2i1ZSrdIX46r690O9JFbBtc%2FO5cCKcRGb%2BK1NuoFul7ShDrOGbnV06t0cvBRygeVPN1Ibh0zMNjcpMQGOqUBOcXUV8vS037jQNJjTJJc3pJs52%2BakFlgNYdneNedYWTL5VhR86lVEdWu2nUzb3EKRPo4u%2BwGDlaa8IY%2FCJvl%2FQakQM1FQ%2FRUmXsdu6mvZbXEc%2BV71ImrkhNOaUFERxfMLVJT1Wvw1kw5hFM3PFpy%2BWOb7iFl6ObdUQeUDnP1lSTSJv%2BcbIZ2TdaI5d4xTpZ4RkcCoSkrCAxaq2Cxd80hOyUn0n4A&X-Amz-Signature=0f6b6d29443814500857b639e8b6074bafda33223dfb0941096ad937ed21b132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X6QOFY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75Sxwk8Zk2FcPD8h1RYi9rgbTjKsE0e%2BVdu%2BzGse7QQIgXYJDgn8jgXhOQZHBvXldrUbt%2BNW2IvF4P8OBQ22Xe3MqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ27Pr%2FqHxfoLpE87CrcA9Shjzka2pgCjFD24jw5X0vw1i3hZDPf0ObKwQipcha9V2eRlgx%2BBO%2BjV1EE2YNt4lm431oaFuLmmDhwdVYI11wxptaWE6s1TYyJjMNN34MXCCPlgdXZMgA5YW5hiKK6%2FEcVsF5ccyq87i1I1PykhXmhKKVpX9Ts5XUQ%2BZPHsn1JrRyvg558Xyafgkic5AegiiOjQSXK36VQ77jGVfBhQDrEH1ee8MZ1pXOAyxR8llr%2BzTK%2BplC%2BTEkA9eo%2FlVg%2Frc0%2FRLQqB9gRF5uJvsinZtQjrSpPSK%2B%2BRpv1tdsDAzKi3H5oceqwa8Sh2X5oTpb6NOyOPuDLQ4VyBJ0p7iMJQB43ZnoRApNQTc85sT6CpSwfn1ORZ08B4nFmcaWmopfmMqR0L5z8ulB2j3dkL5OGCl%2BEETBgKpn1S77Sx6%2Fh4FCo76zpnKBx5ONShaWLi7OflbOL4ecJavUI3HNiw0aLAjVF2rvvj%2FXM7%2BQSYupw6Mp8wyCbsbb7wAkAtGe0CQz%2FFDF7b9UCXAdnsPGXsQa%2FhwqqKolu10PpGicEnXY2Ys%2FP2o%2B%2Ba0IY2i1ZSrdIX46r690O9JFbBtc%2FO5cCKcRGb%2BK1NuoFul7ShDrOGbnV06t0cvBRygeVPN1Ibh0zMNjcpMQGOqUBOcXUV8vS037jQNJjTJJc3pJs52%2BakFlgNYdneNedYWTL5VhR86lVEdWu2nUzb3EKRPo4u%2BwGDlaa8IY%2FCJvl%2FQakQM1FQ%2FRUmXsdu6mvZbXEc%2BV71ImrkhNOaUFERxfMLVJT1Wvw1kw5hFM3PFpy%2BWOb7iFl6ObdUQeUDnP1lSTSJv%2BcbIZ2TdaI5d4xTpZ4RkcCoSkrCAxaq2Cxd80hOyUn0n4A&X-Amz-Signature=957e59ae260784a744b6eb07eb7928056f7f9bee73658c3a1388e5f7846c52d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X6QOFY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75Sxwk8Zk2FcPD8h1RYi9rgbTjKsE0e%2BVdu%2BzGse7QQIgXYJDgn8jgXhOQZHBvXldrUbt%2BNW2IvF4P8OBQ22Xe3MqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ27Pr%2FqHxfoLpE87CrcA9Shjzka2pgCjFD24jw5X0vw1i3hZDPf0ObKwQipcha9V2eRlgx%2BBO%2BjV1EE2YNt4lm431oaFuLmmDhwdVYI11wxptaWE6s1TYyJjMNN34MXCCPlgdXZMgA5YW5hiKK6%2FEcVsF5ccyq87i1I1PykhXmhKKVpX9Ts5XUQ%2BZPHsn1JrRyvg558Xyafgkic5AegiiOjQSXK36VQ77jGVfBhQDrEH1ee8MZ1pXOAyxR8llr%2BzTK%2BplC%2BTEkA9eo%2FlVg%2Frc0%2FRLQqB9gRF5uJvsinZtQjrSpPSK%2B%2BRpv1tdsDAzKi3H5oceqwa8Sh2X5oTpb6NOyOPuDLQ4VyBJ0p7iMJQB43ZnoRApNQTc85sT6CpSwfn1ORZ08B4nFmcaWmopfmMqR0L5z8ulB2j3dkL5OGCl%2BEETBgKpn1S77Sx6%2Fh4FCo76zpnKBx5ONShaWLi7OflbOL4ecJavUI3HNiw0aLAjVF2rvvj%2FXM7%2BQSYupw6Mp8wyCbsbb7wAkAtGe0CQz%2FFDF7b9UCXAdnsPGXsQa%2FhwqqKolu10PpGicEnXY2Ys%2FP2o%2B%2Ba0IY2i1ZSrdIX46r690O9JFbBtc%2FO5cCKcRGb%2BK1NuoFul7ShDrOGbnV06t0cvBRygeVPN1Ibh0zMNjcpMQGOqUBOcXUV8vS037jQNJjTJJc3pJs52%2BakFlgNYdneNedYWTL5VhR86lVEdWu2nUzb3EKRPo4u%2BwGDlaa8IY%2FCJvl%2FQakQM1FQ%2FRUmXsdu6mvZbXEc%2BV71ImrkhNOaUFERxfMLVJT1Wvw1kw5hFM3PFpy%2BWOb7iFl6ObdUQeUDnP1lSTSJv%2BcbIZ2TdaI5d4xTpZ4RkcCoSkrCAxaq2Cxd80hOyUn0n4A&X-Amz-Signature=ec11786482c145a305aa79f2d73b9a5e39be3871f0ab9648af43d1025bdddd1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M24YSYB%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6%2FEkx8kW9D9NVOzU%2B76dS3%2Bkl5AcJPRW6EPDldR1zYAiBsScIsAG7LhefjJKWF4iO279vkqqtq6lXw9kiGb%2F2pXyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7C9iG8GyEzhIW3UKtwDHaQsnMEpFN4%2FbFAqEU715D4UNaDhij%2BPFT2%2FxclcX5JsJDFurLMdEmkmHOFLDmWIb4KoesaqLp0%2F0XPChta%2FnWgwYYGANuH678sXq%2FUH4NVFaKXilLCORKz%2F1UqRSEV67dVmHLiPazdUFcgwsEDV8rTNyMLOE7fhiC8nvxBb5cFiCb1HIvtrVqxTR38aGr5GEo2wi868LQmOMZWFCROGpAm%2BVCAMVnFDQQDTVjQLCmOaHPvj1AsEhyA2MK6eSoUa714b%2F4kk5TOngwM98syXDvd1DPFA6ZOSSdRLMntQvCL%2BgknGefVgSOSdBauHI57Cc9Ksy0B8d4dDH6x4aI2v%2BraECS7R9raeNKEZzTyqSxbGVi7SIGgDAZRp6veCgw3HcJ7OuwKrwjfOv6btzBQHyy1047uCUKZzrbawSlHUmQfQxQJCdyI1UMjfTNA7aJ9ee%2BScmsjlKc%2FVZqU6Kt%2BR5enQdiuBOJpy6NHj1fjBCqw%2Ffp1JRG0Hw7NZCeFu0oCI%2B3BL4yi2K1tmioS0Xfa%2BvMHP0SL8cxDQ9Z0F7SrPHAwx6JTLOZIWPaCivAGDnwasBpZrgMycH2NNDX2CyzdjM%2BtR%2BHo%2FBcIq%2BA0AVhcoTVLjPiVo0fRY1%2BhM0L8wv92kxAY6pgEQ8qnqbqwVHB%2FR24ZXolZeEOIWvC86NJIAhhVMZ5IUIs2tN8pjKubV2V%2BTyAsJ%2BFAx3QRwZEfeyRTnCyx4bdYfepZakKXfABEX6C6m4R5zVWMdVcjUvmLbI%2B93qEMcHnQCU6YXh2BDDI9h5pj5qXJqpQyr7PeTZGGuNIQ0wsUquqCOXV77IBAReFf8%2F5pytkch71BNVVkDGfY2PSJxsqDz%2Bzsc1RK9&X-Amz-Signature=88be9ea4569d159c646b6d151c82a24ed8876b058aa46436a84b65abba53b95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2X6QOFY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC75Sxwk8Zk2FcPD8h1RYi9rgbTjKsE0e%2BVdu%2BzGse7QQIgXYJDgn8jgXhOQZHBvXldrUbt%2BNW2IvF4P8OBQ22Xe3MqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ27Pr%2FqHxfoLpE87CrcA9Shjzka2pgCjFD24jw5X0vw1i3hZDPf0ObKwQipcha9V2eRlgx%2BBO%2BjV1EE2YNt4lm431oaFuLmmDhwdVYI11wxptaWE6s1TYyJjMNN34MXCCPlgdXZMgA5YW5hiKK6%2FEcVsF5ccyq87i1I1PykhXmhKKVpX9Ts5XUQ%2BZPHsn1JrRyvg558Xyafgkic5AegiiOjQSXK36VQ77jGVfBhQDrEH1ee8MZ1pXOAyxR8llr%2BzTK%2BplC%2BTEkA9eo%2FlVg%2Frc0%2FRLQqB9gRF5uJvsinZtQjrSpPSK%2B%2BRpv1tdsDAzKi3H5oceqwa8Sh2X5oTpb6NOyOPuDLQ4VyBJ0p7iMJQB43ZnoRApNQTc85sT6CpSwfn1ORZ08B4nFmcaWmopfmMqR0L5z8ulB2j3dkL5OGCl%2BEETBgKpn1S77Sx6%2Fh4FCo76zpnKBx5ONShaWLi7OflbOL4ecJavUI3HNiw0aLAjVF2rvvj%2FXM7%2BQSYupw6Mp8wyCbsbb7wAkAtGe0CQz%2FFDF7b9UCXAdnsPGXsQa%2FhwqqKolu10PpGicEnXY2Ys%2FP2o%2B%2Ba0IY2i1ZSrdIX46r690O9JFbBtc%2FO5cCKcRGb%2BK1NuoFul7ShDrOGbnV06t0cvBRygeVPN1Ibh0zMNjcpMQGOqUBOcXUV8vS037jQNJjTJJc3pJs52%2BakFlgNYdneNedYWTL5VhR86lVEdWu2nUzb3EKRPo4u%2BwGDlaa8IY%2FCJvl%2FQakQM1FQ%2FRUmXsdu6mvZbXEc%2BV71ImrkhNOaUFERxfMLVJT1Wvw1kw5hFM3PFpy%2BWOb7iFl6ObdUQeUDnP1lSTSJv%2BcbIZ2TdaI5d4xTpZ4RkcCoSkrCAxaq2Cxd80hOyUn0n4A&X-Amz-Signature=887a18ed36543a7a3f2c8b566fd3327a3929b7b8d6667f614e6bcbec925cbdf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IG2U4W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ27BnC%2Bx7l6CALMmByExqRPH4L1ONwERuMB4pC7KcvAiEAgjGNw6Yvz%2BUeOpQuWjjfKxlSuwTjx1QVHOjlLRRdk%2BEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTmLoKZRRkkPr4TByrcAxfxhkDPG0tbw6unleXXhZNZNbIFx%2FuYxKQWKM5Mlgq707K%2B5%2BzYh9kLks7Y4pUbZBmg3zKaYBb6F09hUah1ZlOBAAUyeMhYuc8FcHT%2FkXr4yxyndGO9Pf2Eq%2FLPQh4BE%2FPH1q%2FmHXf5dbagPgdTAMl9yVR6X%2F4F7wPsOglbenhqOX1JyAVVZ9VwQ3wQpQBkgVEik03nDzFeI%2FIjmAhxrC8mAizd8SjwXcY6mwbS8CWk0UQKZqTFbYmmeE5Wdl8XRdc0RxV8tRYEpGZ%2Fjv0f62LHyNCcDccOGIOA3bM6URMR5sy5PmIIPDasGtwVVQqXQLyndcrnJs35P8EExez3jAgGuDnruEjkSyFrBXmgy%2BEigPv6hjZMdOReREpb%2FdXYM0qFA7AWZTu6CKwvMY5K19YNE%2FUBRG60UAVC%2BS%2Fya9oYNE%2BKWNrzqGGG445QzuHH06LZlPQ7YdHcRyug8PCS6V7xgstQWoNpxo%2BY3uGq9h4dWJYyPO0ofHxTLFe9ZSiQR5Rqk0j5U%2FmUM45Cx9lSyRIeF59KCkzbEwL%2FjPnUA3zE9DfXI3KMTszCAx9mn7S6BVW7%2BomgxjiqPGmfW8nbmqS7cOYwhMscsSkZ5YFZDn%2BJuyKDIHj%2BYLVuzQ4MMODcpMQGOqUBdEHM%2BKUORQePtN%2BJjb5ljUfaa9udSXrX1CfJB4EmovG58PHeHkZR78p7AkKcUzpi%2Fq2sx%2BTiEyoWt6xWd3HDqNnqjoWJqYch%2BPclmhSMAqB9OzIH5%2FIVFf6ZLIHulQ1of1BKFMmq7sbCGgUKHbg3mmIC5XKfj%2FqMQasmhTfdNfYBXr41hY3AjqxA29GAbw6IyLksmJhU5HXx4tNJ3fs0lCXUcDJg&X-Amz-Signature=edee0c872b263aa0c96d4465f2b212695d2bfe6a6e535f3b51d98f441854e028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IG2U4W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ27BnC%2Bx7l6CALMmByExqRPH4L1ONwERuMB4pC7KcvAiEAgjGNw6Yvz%2BUeOpQuWjjfKxlSuwTjx1QVHOjlLRRdk%2BEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTmLoKZRRkkPr4TByrcAxfxhkDPG0tbw6unleXXhZNZNbIFx%2FuYxKQWKM5Mlgq707K%2B5%2BzYh9kLks7Y4pUbZBmg3zKaYBb6F09hUah1ZlOBAAUyeMhYuc8FcHT%2FkXr4yxyndGO9Pf2Eq%2FLPQh4BE%2FPH1q%2FmHXf5dbagPgdTAMl9yVR6X%2F4F7wPsOglbenhqOX1JyAVVZ9VwQ3wQpQBkgVEik03nDzFeI%2FIjmAhxrC8mAizd8SjwXcY6mwbS8CWk0UQKZqTFbYmmeE5Wdl8XRdc0RxV8tRYEpGZ%2Fjv0f62LHyNCcDccOGIOA3bM6URMR5sy5PmIIPDasGtwVVQqXQLyndcrnJs35P8EExez3jAgGuDnruEjkSyFrBXmgy%2BEigPv6hjZMdOReREpb%2FdXYM0qFA7AWZTu6CKwvMY5K19YNE%2FUBRG60UAVC%2BS%2Fya9oYNE%2BKWNrzqGGG445QzuHH06LZlPQ7YdHcRyug8PCS6V7xgstQWoNpxo%2BY3uGq9h4dWJYyPO0ofHxTLFe9ZSiQR5Rqk0j5U%2FmUM45Cx9lSyRIeF59KCkzbEwL%2FjPnUA3zE9DfXI3KMTszCAx9mn7S6BVW7%2BomgxjiqPGmfW8nbmqS7cOYwhMscsSkZ5YFZDn%2BJuyKDIHj%2BYLVuzQ4MMODcpMQGOqUBdEHM%2BKUORQePtN%2BJjb5ljUfaa9udSXrX1CfJB4EmovG58PHeHkZR78p7AkKcUzpi%2Fq2sx%2BTiEyoWt6xWd3HDqNnqjoWJqYch%2BPclmhSMAqB9OzIH5%2FIVFf6ZLIHulQ1of1BKFMmq7sbCGgUKHbg3mmIC5XKfj%2FqMQasmhTfdNfYBXr41hY3AjqxA29GAbw6IyLksmJhU5HXx4tNJ3fs0lCXUcDJg&X-Amz-Signature=aeb0755ae11341c7157d513268c18184ee3f6984891cb8e08f7d3fc3a02b83d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IG2U4W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ27BnC%2Bx7l6CALMmByExqRPH4L1ONwERuMB4pC7KcvAiEAgjGNw6Yvz%2BUeOpQuWjjfKxlSuwTjx1QVHOjlLRRdk%2BEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTmLoKZRRkkPr4TByrcAxfxhkDPG0tbw6unleXXhZNZNbIFx%2FuYxKQWKM5Mlgq707K%2B5%2BzYh9kLks7Y4pUbZBmg3zKaYBb6F09hUah1ZlOBAAUyeMhYuc8FcHT%2FkXr4yxyndGO9Pf2Eq%2FLPQh4BE%2FPH1q%2FmHXf5dbagPgdTAMl9yVR6X%2F4F7wPsOglbenhqOX1JyAVVZ9VwQ3wQpQBkgVEik03nDzFeI%2FIjmAhxrC8mAizd8SjwXcY6mwbS8CWk0UQKZqTFbYmmeE5Wdl8XRdc0RxV8tRYEpGZ%2Fjv0f62LHyNCcDccOGIOA3bM6URMR5sy5PmIIPDasGtwVVQqXQLyndcrnJs35P8EExez3jAgGuDnruEjkSyFrBXmgy%2BEigPv6hjZMdOReREpb%2FdXYM0qFA7AWZTu6CKwvMY5K19YNE%2FUBRG60UAVC%2BS%2Fya9oYNE%2BKWNrzqGGG445QzuHH06LZlPQ7YdHcRyug8PCS6V7xgstQWoNpxo%2BY3uGq9h4dWJYyPO0ofHxTLFe9ZSiQR5Rqk0j5U%2FmUM45Cx9lSyRIeF59KCkzbEwL%2FjPnUA3zE9DfXI3KMTszCAx9mn7S6BVW7%2BomgxjiqPGmfW8nbmqS7cOYwhMscsSkZ5YFZDn%2BJuyKDIHj%2BYLVuzQ4MMODcpMQGOqUBdEHM%2BKUORQePtN%2BJjb5ljUfaa9udSXrX1CfJB4EmovG58PHeHkZR78p7AkKcUzpi%2Fq2sx%2BTiEyoWt6xWd3HDqNnqjoWJqYch%2BPclmhSMAqB9OzIH5%2FIVFf6ZLIHulQ1of1BKFMmq7sbCGgUKHbg3mmIC5XKfj%2FqMQasmhTfdNfYBXr41hY3AjqxA29GAbw6IyLksmJhU5HXx4tNJ3fs0lCXUcDJg&X-Amz-Signature=08afddcdd33cd690a7f2c0d6137b3633b2eb2752695e4f3b27623b730d459f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IG2U4W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ27BnC%2Bx7l6CALMmByExqRPH4L1ONwERuMB4pC7KcvAiEAgjGNw6Yvz%2BUeOpQuWjjfKxlSuwTjx1QVHOjlLRRdk%2BEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTmLoKZRRkkPr4TByrcAxfxhkDPG0tbw6unleXXhZNZNbIFx%2FuYxKQWKM5Mlgq707K%2B5%2BzYh9kLks7Y4pUbZBmg3zKaYBb6F09hUah1ZlOBAAUyeMhYuc8FcHT%2FkXr4yxyndGO9Pf2Eq%2FLPQh4BE%2FPH1q%2FmHXf5dbagPgdTAMl9yVR6X%2F4F7wPsOglbenhqOX1JyAVVZ9VwQ3wQpQBkgVEik03nDzFeI%2FIjmAhxrC8mAizd8SjwXcY6mwbS8CWk0UQKZqTFbYmmeE5Wdl8XRdc0RxV8tRYEpGZ%2Fjv0f62LHyNCcDccOGIOA3bM6URMR5sy5PmIIPDasGtwVVQqXQLyndcrnJs35P8EExez3jAgGuDnruEjkSyFrBXmgy%2BEigPv6hjZMdOReREpb%2FdXYM0qFA7AWZTu6CKwvMY5K19YNE%2FUBRG60UAVC%2BS%2Fya9oYNE%2BKWNrzqGGG445QzuHH06LZlPQ7YdHcRyug8PCS6V7xgstQWoNpxo%2BY3uGq9h4dWJYyPO0ofHxTLFe9ZSiQR5Rqk0j5U%2FmUM45Cx9lSyRIeF59KCkzbEwL%2FjPnUA3zE9DfXI3KMTszCAx9mn7S6BVW7%2BomgxjiqPGmfW8nbmqS7cOYwhMscsSkZ5YFZDn%2BJuyKDIHj%2BYLVuzQ4MMODcpMQGOqUBdEHM%2BKUORQePtN%2BJjb5ljUfaa9udSXrX1CfJB4EmovG58PHeHkZR78p7AkKcUzpi%2Fq2sx%2BTiEyoWt6xWd3HDqNnqjoWJqYch%2BPclmhSMAqB9OzIH5%2FIVFf6ZLIHulQ1of1BKFMmq7sbCGgUKHbg3mmIC5XKfj%2FqMQasmhTfdNfYBXr41hY3AjqxA29GAbw6IyLksmJhU5HXx4tNJ3fs0lCXUcDJg&X-Amz-Signature=374648a9fe3a3fe78fb79d2443b475af56245ff0b42c93a9e3a0e35113e12765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IG2U4W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ27BnC%2Bx7l6CALMmByExqRPH4L1ONwERuMB4pC7KcvAiEAgjGNw6Yvz%2BUeOpQuWjjfKxlSuwTjx1QVHOjlLRRdk%2BEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTmLoKZRRkkPr4TByrcAxfxhkDPG0tbw6unleXXhZNZNbIFx%2FuYxKQWKM5Mlgq707K%2B5%2BzYh9kLks7Y4pUbZBmg3zKaYBb6F09hUah1ZlOBAAUyeMhYuc8FcHT%2FkXr4yxyndGO9Pf2Eq%2FLPQh4BE%2FPH1q%2FmHXf5dbagPgdTAMl9yVR6X%2F4F7wPsOglbenhqOX1JyAVVZ9VwQ3wQpQBkgVEik03nDzFeI%2FIjmAhxrC8mAizd8SjwXcY6mwbS8CWk0UQKZqTFbYmmeE5Wdl8XRdc0RxV8tRYEpGZ%2Fjv0f62LHyNCcDccOGIOA3bM6URMR5sy5PmIIPDasGtwVVQqXQLyndcrnJs35P8EExez3jAgGuDnruEjkSyFrBXmgy%2BEigPv6hjZMdOReREpb%2FdXYM0qFA7AWZTu6CKwvMY5K19YNE%2FUBRG60UAVC%2BS%2Fya9oYNE%2BKWNrzqGGG445QzuHH06LZlPQ7YdHcRyug8PCS6V7xgstQWoNpxo%2BY3uGq9h4dWJYyPO0ofHxTLFe9ZSiQR5Rqk0j5U%2FmUM45Cx9lSyRIeF59KCkzbEwL%2FjPnUA3zE9DfXI3KMTszCAx9mn7S6BVW7%2BomgxjiqPGmfW8nbmqS7cOYwhMscsSkZ5YFZDn%2BJuyKDIHj%2BYLVuzQ4MMODcpMQGOqUBdEHM%2BKUORQePtN%2BJjb5ljUfaa9udSXrX1CfJB4EmovG58PHeHkZR78p7AkKcUzpi%2Fq2sx%2BTiEyoWt6xWd3HDqNnqjoWJqYch%2BPclmhSMAqB9OzIH5%2FIVFf6ZLIHulQ1of1BKFMmq7sbCGgUKHbg3mmIC5XKfj%2FqMQasmhTfdNfYBXr41hY3AjqxA29GAbw6IyLksmJhU5HXx4tNJ3fs0lCXUcDJg&X-Amz-Signature=fdd00fc6c2718cd7c68692a2c426293f06a819ce71a3d997c3f04664089a5f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IG2U4W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ27BnC%2Bx7l6CALMmByExqRPH4L1ONwERuMB4pC7KcvAiEAgjGNw6Yvz%2BUeOpQuWjjfKxlSuwTjx1QVHOjlLRRdk%2BEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTmLoKZRRkkPr4TByrcAxfxhkDPG0tbw6unleXXhZNZNbIFx%2FuYxKQWKM5Mlgq707K%2B5%2BzYh9kLks7Y4pUbZBmg3zKaYBb6F09hUah1ZlOBAAUyeMhYuc8FcHT%2FkXr4yxyndGO9Pf2Eq%2FLPQh4BE%2FPH1q%2FmHXf5dbagPgdTAMl9yVR6X%2F4F7wPsOglbenhqOX1JyAVVZ9VwQ3wQpQBkgVEik03nDzFeI%2FIjmAhxrC8mAizd8SjwXcY6mwbS8CWk0UQKZqTFbYmmeE5Wdl8XRdc0RxV8tRYEpGZ%2Fjv0f62LHyNCcDccOGIOA3bM6URMR5sy5PmIIPDasGtwVVQqXQLyndcrnJs35P8EExez3jAgGuDnruEjkSyFrBXmgy%2BEigPv6hjZMdOReREpb%2FdXYM0qFA7AWZTu6CKwvMY5K19YNE%2FUBRG60UAVC%2BS%2Fya9oYNE%2BKWNrzqGGG445QzuHH06LZlPQ7YdHcRyug8PCS6V7xgstQWoNpxo%2BY3uGq9h4dWJYyPO0ofHxTLFe9ZSiQR5Rqk0j5U%2FmUM45Cx9lSyRIeF59KCkzbEwL%2FjPnUA3zE9DfXI3KMTszCAx9mn7S6BVW7%2BomgxjiqPGmfW8nbmqS7cOYwhMscsSkZ5YFZDn%2BJuyKDIHj%2BYLVuzQ4MMODcpMQGOqUBdEHM%2BKUORQePtN%2BJjb5ljUfaa9udSXrX1CfJB4EmovG58PHeHkZR78p7AkKcUzpi%2Fq2sx%2BTiEyoWt6xWd3HDqNnqjoWJqYch%2BPclmhSMAqB9OzIH5%2FIVFf6ZLIHulQ1of1BKFMmq7sbCGgUKHbg3mmIC5XKfj%2FqMQasmhTfdNfYBXr41hY3AjqxA29GAbw6IyLksmJhU5HXx4tNJ3fs0lCXUcDJg&X-Amz-Signature=b03ad729657b76c973219e04cf348c68a6960fcc2bea38ef9cf9514bcc649eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IG2U4W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ27BnC%2Bx7l6CALMmByExqRPH4L1ONwERuMB4pC7KcvAiEAgjGNw6Yvz%2BUeOpQuWjjfKxlSuwTjx1QVHOjlLRRdk%2BEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTmLoKZRRkkPr4TByrcAxfxhkDPG0tbw6unleXXhZNZNbIFx%2FuYxKQWKM5Mlgq707K%2B5%2BzYh9kLks7Y4pUbZBmg3zKaYBb6F09hUah1ZlOBAAUyeMhYuc8FcHT%2FkXr4yxyndGO9Pf2Eq%2FLPQh4BE%2FPH1q%2FmHXf5dbagPgdTAMl9yVR6X%2F4F7wPsOglbenhqOX1JyAVVZ9VwQ3wQpQBkgVEik03nDzFeI%2FIjmAhxrC8mAizd8SjwXcY6mwbS8CWk0UQKZqTFbYmmeE5Wdl8XRdc0RxV8tRYEpGZ%2Fjv0f62LHyNCcDccOGIOA3bM6URMR5sy5PmIIPDasGtwVVQqXQLyndcrnJs35P8EExez3jAgGuDnruEjkSyFrBXmgy%2BEigPv6hjZMdOReREpb%2FdXYM0qFA7AWZTu6CKwvMY5K19YNE%2FUBRG60UAVC%2BS%2Fya9oYNE%2BKWNrzqGGG445QzuHH06LZlPQ7YdHcRyug8PCS6V7xgstQWoNpxo%2BY3uGq9h4dWJYyPO0ofHxTLFe9ZSiQR5Rqk0j5U%2FmUM45Cx9lSyRIeF59KCkzbEwL%2FjPnUA3zE9DfXI3KMTszCAx9mn7S6BVW7%2BomgxjiqPGmfW8nbmqS7cOYwhMscsSkZ5YFZDn%2BJuyKDIHj%2BYLVuzQ4MMODcpMQGOqUBdEHM%2BKUORQePtN%2BJjb5ljUfaa9udSXrX1CfJB4EmovG58PHeHkZR78p7AkKcUzpi%2Fq2sx%2BTiEyoWt6xWd3HDqNnqjoWJqYch%2BPclmhSMAqB9OzIH5%2FIVFf6ZLIHulQ1of1BKFMmq7sbCGgUKHbg3mmIC5XKfj%2FqMQasmhTfdNfYBXr41hY3AjqxA29GAbw6IyLksmJhU5HXx4tNJ3fs0lCXUcDJg&X-Amz-Signature=c0be88bd03154d1b8a16baac036d4ffe6362c5368d5c1b564a53a8483239178a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5IG2U4W%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQ27BnC%2Bx7l6CALMmByExqRPH4L1ONwERuMB4pC7KcvAiEAgjGNw6Yvz%2BUeOpQuWjjfKxlSuwTjx1QVHOjlLRRdk%2BEqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTmLoKZRRkkPr4TByrcAxfxhkDPG0tbw6unleXXhZNZNbIFx%2FuYxKQWKM5Mlgq707K%2B5%2BzYh9kLks7Y4pUbZBmg3zKaYBb6F09hUah1ZlOBAAUyeMhYuc8FcHT%2FkXr4yxyndGO9Pf2Eq%2FLPQh4BE%2FPH1q%2FmHXf5dbagPgdTAMl9yVR6X%2F4F7wPsOglbenhqOX1JyAVVZ9VwQ3wQpQBkgVEik03nDzFeI%2FIjmAhxrC8mAizd8SjwXcY6mwbS8CWk0UQKZqTFbYmmeE5Wdl8XRdc0RxV8tRYEpGZ%2Fjv0f62LHyNCcDccOGIOA3bM6URMR5sy5PmIIPDasGtwVVQqXQLyndcrnJs35P8EExez3jAgGuDnruEjkSyFrBXmgy%2BEigPv6hjZMdOReREpb%2FdXYM0qFA7AWZTu6CKwvMY5K19YNE%2FUBRG60UAVC%2BS%2Fya9oYNE%2BKWNrzqGGG445QzuHH06LZlPQ7YdHcRyug8PCS6V7xgstQWoNpxo%2BY3uGq9h4dWJYyPO0ofHxTLFe9ZSiQR5Rqk0j5U%2FmUM45Cx9lSyRIeF59KCkzbEwL%2FjPnUA3zE9DfXI3KMTszCAx9mn7S6BVW7%2BomgxjiqPGmfW8nbmqS7cOYwhMscsSkZ5YFZDn%2BJuyKDIHj%2BYLVuzQ4MMODcpMQGOqUBdEHM%2BKUORQePtN%2BJjb5ljUfaa9udSXrX1CfJB4EmovG58PHeHkZR78p7AkKcUzpi%2Fq2sx%2BTiEyoWt6xWd3HDqNnqjoWJqYch%2BPclmhSMAqB9OzIH5%2FIVFf6ZLIHulQ1of1BKFMmq7sbCGgUKHbg3mmIC5XKfj%2FqMQasmhTfdNfYBXr41hY3AjqxA29GAbw6IyLksmJhU5HXx4tNJ3fs0lCXUcDJg&X-Amz-Signature=83abd5dda712f0a51931b9ad23b566c37f4def059b212119f72d90574a85ef4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
