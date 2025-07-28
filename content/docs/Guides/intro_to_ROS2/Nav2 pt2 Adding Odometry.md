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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TB475A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCrCOV2NR9Dbvjbpsq5UijLcmRjM0v%2FDlv94gYqHNKnVQIgCNqa1IOpEh%2BPpe%2FyPuKDBmOR0ZCmbDOKnp1pjmINgp0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW7t1asdVY4fBqODSrcAybe8OX61YoLiwUKv8zDIhhzomU9ylNRgkkca5E3%2ByAY8PuyhCcO7wxe4UwmvTgxHGZNMX4w%2BhB4Kqqjt3DzvLdykFP7jCHxIc3M3jyEjUeMCTpG9awiIlywMSLJsuvSCMaFO5jOjx8nNVnD5cGeVttZtfvAZubib5%2FBX%2FKeTAnj%2Bnk90J%2Fr23NmpMdTSMJSE5r1v3zvcTABEDQXEPebSRPYxBnbih1OG8sW7SBtj3Kno6%2ByskFmTo3paFrKuPf46hkxJbqYD0Q%2B5ZZ1oye4OZeukuy4of7ed7j49TudJGlS7xwU1yMljlxGozSqB8YkZwkpy2eCWgfJmI77o82sA%2FkGGbapXfmeNzVCo6Uh%2Bh5DzfYzWwn8GMzdbgOEF5PC6dbjpstpZdjmdyJ5KLktin3QvMKFG%2F1b9LCNsI18jZXeEUtz4K4m%2FLA9fHwf2GcWISDPkLQM7BkoEXpbDyh3eBTkseSlg80PSfmThBku9otaoxiruk4r0nFeIYPnWCEjHT1ODoC2x9CgX37cWbcJcNgl57nU7g5XJDLd1O2WrdcvY4uNOnxtrUu3%2FJuYfm5qDRH6Y1FmimxO9T7NxZmEgrRdNi%2BFScUTBMV8t0tkB6OeqqQAk7AoyW34xUetMKS0ncQGOqUBdT7knHFPsVA5N28Twc7p%2FGEdJL%2BYPXWlK63BB9BHpf1JZYuEZyUXoErhbE%2F8%2BnRchp1ZQy4%2BDw1WmpmI4H1Y68mInU9WIXawFlCZAx5MqQpwWHUtVDlBwFEzDMwymy3siJXw1ZAMrsECbB9GIcDqDCiA%2FkHuphYXaBgH%2BgJjqFxvWmcnJngxkC3EDb3JweXD0evwDsP2m4tsNh3%2BgaonQ0d%2FvBIZ&X-Amz-Signature=56c5995cf97ce394b0148121d9d5ec647a6ca61d220442323ec76b83c18e0283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TB475A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCrCOV2NR9Dbvjbpsq5UijLcmRjM0v%2FDlv94gYqHNKnVQIgCNqa1IOpEh%2BPpe%2FyPuKDBmOR0ZCmbDOKnp1pjmINgp0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW7t1asdVY4fBqODSrcAybe8OX61YoLiwUKv8zDIhhzomU9ylNRgkkca5E3%2ByAY8PuyhCcO7wxe4UwmvTgxHGZNMX4w%2BhB4Kqqjt3DzvLdykFP7jCHxIc3M3jyEjUeMCTpG9awiIlywMSLJsuvSCMaFO5jOjx8nNVnD5cGeVttZtfvAZubib5%2FBX%2FKeTAnj%2Bnk90J%2Fr23NmpMdTSMJSE5r1v3zvcTABEDQXEPebSRPYxBnbih1OG8sW7SBtj3Kno6%2ByskFmTo3paFrKuPf46hkxJbqYD0Q%2B5ZZ1oye4OZeukuy4of7ed7j49TudJGlS7xwU1yMljlxGozSqB8YkZwkpy2eCWgfJmI77o82sA%2FkGGbapXfmeNzVCo6Uh%2Bh5DzfYzWwn8GMzdbgOEF5PC6dbjpstpZdjmdyJ5KLktin3QvMKFG%2F1b9LCNsI18jZXeEUtz4K4m%2FLA9fHwf2GcWISDPkLQM7BkoEXpbDyh3eBTkseSlg80PSfmThBku9otaoxiruk4r0nFeIYPnWCEjHT1ODoC2x9CgX37cWbcJcNgl57nU7g5XJDLd1O2WrdcvY4uNOnxtrUu3%2FJuYfm5qDRH6Y1FmimxO9T7NxZmEgrRdNi%2BFScUTBMV8t0tkB6OeqqQAk7AoyW34xUetMKS0ncQGOqUBdT7knHFPsVA5N28Twc7p%2FGEdJL%2BYPXWlK63BB9BHpf1JZYuEZyUXoErhbE%2F8%2BnRchp1ZQy4%2BDw1WmpmI4H1Y68mInU9WIXawFlCZAx5MqQpwWHUtVDlBwFEzDMwymy3siJXw1ZAMrsECbB9GIcDqDCiA%2FkHuphYXaBgH%2BgJjqFxvWmcnJngxkC3EDb3JweXD0evwDsP2m4tsNh3%2BgaonQ0d%2FvBIZ&X-Amz-Signature=b5366a143ffd961dac904e1e962c7d46b90565de5128d8b6f0743ec8f7d9e332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TB475A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCrCOV2NR9Dbvjbpsq5UijLcmRjM0v%2FDlv94gYqHNKnVQIgCNqa1IOpEh%2BPpe%2FyPuKDBmOR0ZCmbDOKnp1pjmINgp0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW7t1asdVY4fBqODSrcAybe8OX61YoLiwUKv8zDIhhzomU9ylNRgkkca5E3%2ByAY8PuyhCcO7wxe4UwmvTgxHGZNMX4w%2BhB4Kqqjt3DzvLdykFP7jCHxIc3M3jyEjUeMCTpG9awiIlywMSLJsuvSCMaFO5jOjx8nNVnD5cGeVttZtfvAZubib5%2FBX%2FKeTAnj%2Bnk90J%2Fr23NmpMdTSMJSE5r1v3zvcTABEDQXEPebSRPYxBnbih1OG8sW7SBtj3Kno6%2ByskFmTo3paFrKuPf46hkxJbqYD0Q%2B5ZZ1oye4OZeukuy4of7ed7j49TudJGlS7xwU1yMljlxGozSqB8YkZwkpy2eCWgfJmI77o82sA%2FkGGbapXfmeNzVCo6Uh%2Bh5DzfYzWwn8GMzdbgOEF5PC6dbjpstpZdjmdyJ5KLktin3QvMKFG%2F1b9LCNsI18jZXeEUtz4K4m%2FLA9fHwf2GcWISDPkLQM7BkoEXpbDyh3eBTkseSlg80PSfmThBku9otaoxiruk4r0nFeIYPnWCEjHT1ODoC2x9CgX37cWbcJcNgl57nU7g5XJDLd1O2WrdcvY4uNOnxtrUu3%2FJuYfm5qDRH6Y1FmimxO9T7NxZmEgrRdNi%2BFScUTBMV8t0tkB6OeqqQAk7AoyW34xUetMKS0ncQGOqUBdT7knHFPsVA5N28Twc7p%2FGEdJL%2BYPXWlK63BB9BHpf1JZYuEZyUXoErhbE%2F8%2BnRchp1ZQy4%2BDw1WmpmI4H1Y68mInU9WIXawFlCZAx5MqQpwWHUtVDlBwFEzDMwymy3siJXw1ZAMrsECbB9GIcDqDCiA%2FkHuphYXaBgH%2BgJjqFxvWmcnJngxkC3EDb3JweXD0evwDsP2m4tsNh3%2BgaonQ0d%2FvBIZ&X-Amz-Signature=45926727f6e95e5012a0a4dfb5ae64ed12c292c034022cfcf1acfadbfb719ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TB475A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCrCOV2NR9Dbvjbpsq5UijLcmRjM0v%2FDlv94gYqHNKnVQIgCNqa1IOpEh%2BPpe%2FyPuKDBmOR0ZCmbDOKnp1pjmINgp0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW7t1asdVY4fBqODSrcAybe8OX61YoLiwUKv8zDIhhzomU9ylNRgkkca5E3%2ByAY8PuyhCcO7wxe4UwmvTgxHGZNMX4w%2BhB4Kqqjt3DzvLdykFP7jCHxIc3M3jyEjUeMCTpG9awiIlywMSLJsuvSCMaFO5jOjx8nNVnD5cGeVttZtfvAZubib5%2FBX%2FKeTAnj%2Bnk90J%2Fr23NmpMdTSMJSE5r1v3zvcTABEDQXEPebSRPYxBnbih1OG8sW7SBtj3Kno6%2ByskFmTo3paFrKuPf46hkxJbqYD0Q%2B5ZZ1oye4OZeukuy4of7ed7j49TudJGlS7xwU1yMljlxGozSqB8YkZwkpy2eCWgfJmI77o82sA%2FkGGbapXfmeNzVCo6Uh%2Bh5DzfYzWwn8GMzdbgOEF5PC6dbjpstpZdjmdyJ5KLktin3QvMKFG%2F1b9LCNsI18jZXeEUtz4K4m%2FLA9fHwf2GcWISDPkLQM7BkoEXpbDyh3eBTkseSlg80PSfmThBku9otaoxiruk4r0nFeIYPnWCEjHT1ODoC2x9CgX37cWbcJcNgl57nU7g5XJDLd1O2WrdcvY4uNOnxtrUu3%2FJuYfm5qDRH6Y1FmimxO9T7NxZmEgrRdNi%2BFScUTBMV8t0tkB6OeqqQAk7AoyW34xUetMKS0ncQGOqUBdT7knHFPsVA5N28Twc7p%2FGEdJL%2BYPXWlK63BB9BHpf1JZYuEZyUXoErhbE%2F8%2BnRchp1ZQy4%2BDw1WmpmI4H1Y68mInU9WIXawFlCZAx5MqQpwWHUtVDlBwFEzDMwymy3siJXw1ZAMrsECbB9GIcDqDCiA%2FkHuphYXaBgH%2BgJjqFxvWmcnJngxkC3EDb3JweXD0evwDsP2m4tsNh3%2BgaonQ0d%2FvBIZ&X-Amz-Signature=8b949f447b5fea442c7465928f9e64050b07ac5bb69d1f51b347ea831d6d080e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TB475A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCrCOV2NR9Dbvjbpsq5UijLcmRjM0v%2FDlv94gYqHNKnVQIgCNqa1IOpEh%2BPpe%2FyPuKDBmOR0ZCmbDOKnp1pjmINgp0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW7t1asdVY4fBqODSrcAybe8OX61YoLiwUKv8zDIhhzomU9ylNRgkkca5E3%2ByAY8PuyhCcO7wxe4UwmvTgxHGZNMX4w%2BhB4Kqqjt3DzvLdykFP7jCHxIc3M3jyEjUeMCTpG9awiIlywMSLJsuvSCMaFO5jOjx8nNVnD5cGeVttZtfvAZubib5%2FBX%2FKeTAnj%2Bnk90J%2Fr23NmpMdTSMJSE5r1v3zvcTABEDQXEPebSRPYxBnbih1OG8sW7SBtj3Kno6%2ByskFmTo3paFrKuPf46hkxJbqYD0Q%2B5ZZ1oye4OZeukuy4of7ed7j49TudJGlS7xwU1yMljlxGozSqB8YkZwkpy2eCWgfJmI77o82sA%2FkGGbapXfmeNzVCo6Uh%2Bh5DzfYzWwn8GMzdbgOEF5PC6dbjpstpZdjmdyJ5KLktin3QvMKFG%2F1b9LCNsI18jZXeEUtz4K4m%2FLA9fHwf2GcWISDPkLQM7BkoEXpbDyh3eBTkseSlg80PSfmThBku9otaoxiruk4r0nFeIYPnWCEjHT1ODoC2x9CgX37cWbcJcNgl57nU7g5XJDLd1O2WrdcvY4uNOnxtrUu3%2FJuYfm5qDRH6Y1FmimxO9T7NxZmEgrRdNi%2BFScUTBMV8t0tkB6OeqqQAk7AoyW34xUetMKS0ncQGOqUBdT7knHFPsVA5N28Twc7p%2FGEdJL%2BYPXWlK63BB9BHpf1JZYuEZyUXoErhbE%2F8%2BnRchp1ZQy4%2BDw1WmpmI4H1Y68mInU9WIXawFlCZAx5MqQpwWHUtVDlBwFEzDMwymy3siJXw1ZAMrsECbB9GIcDqDCiA%2FkHuphYXaBgH%2BgJjqFxvWmcnJngxkC3EDb3JweXD0evwDsP2m4tsNh3%2BgaonQ0d%2FvBIZ&X-Amz-Signature=34089fe0592a8630f621868f5ea5c74eac98f68aefab9ceb122f0d87e9fbc3cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TB475A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCrCOV2NR9Dbvjbpsq5UijLcmRjM0v%2FDlv94gYqHNKnVQIgCNqa1IOpEh%2BPpe%2FyPuKDBmOR0ZCmbDOKnp1pjmINgp0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW7t1asdVY4fBqODSrcAybe8OX61YoLiwUKv8zDIhhzomU9ylNRgkkca5E3%2ByAY8PuyhCcO7wxe4UwmvTgxHGZNMX4w%2BhB4Kqqjt3DzvLdykFP7jCHxIc3M3jyEjUeMCTpG9awiIlywMSLJsuvSCMaFO5jOjx8nNVnD5cGeVttZtfvAZubib5%2FBX%2FKeTAnj%2Bnk90J%2Fr23NmpMdTSMJSE5r1v3zvcTABEDQXEPebSRPYxBnbih1OG8sW7SBtj3Kno6%2ByskFmTo3paFrKuPf46hkxJbqYD0Q%2B5ZZ1oye4OZeukuy4of7ed7j49TudJGlS7xwU1yMljlxGozSqB8YkZwkpy2eCWgfJmI77o82sA%2FkGGbapXfmeNzVCo6Uh%2Bh5DzfYzWwn8GMzdbgOEF5PC6dbjpstpZdjmdyJ5KLktin3QvMKFG%2F1b9LCNsI18jZXeEUtz4K4m%2FLA9fHwf2GcWISDPkLQM7BkoEXpbDyh3eBTkseSlg80PSfmThBku9otaoxiruk4r0nFeIYPnWCEjHT1ODoC2x9CgX37cWbcJcNgl57nU7g5XJDLd1O2WrdcvY4uNOnxtrUu3%2FJuYfm5qDRH6Y1FmimxO9T7NxZmEgrRdNi%2BFScUTBMV8t0tkB6OeqqQAk7AoyW34xUetMKS0ncQGOqUBdT7knHFPsVA5N28Twc7p%2FGEdJL%2BYPXWlK63BB9BHpf1JZYuEZyUXoErhbE%2F8%2BnRchp1ZQy4%2BDw1WmpmI4H1Y68mInU9WIXawFlCZAx5MqQpwWHUtVDlBwFEzDMwymy3siJXw1ZAMrsECbB9GIcDqDCiA%2FkHuphYXaBgH%2BgJjqFxvWmcnJngxkC3EDb3JweXD0evwDsP2m4tsNh3%2BgaonQ0d%2FvBIZ&X-Amz-Signature=436c224ef81f14f2dfc10fb7c485e58de3f1bd129a8b421bfdea6d7209bb6325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TB475A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCrCOV2NR9Dbvjbpsq5UijLcmRjM0v%2FDlv94gYqHNKnVQIgCNqa1IOpEh%2BPpe%2FyPuKDBmOR0ZCmbDOKnp1pjmINgp0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW7t1asdVY4fBqODSrcAybe8OX61YoLiwUKv8zDIhhzomU9ylNRgkkca5E3%2ByAY8PuyhCcO7wxe4UwmvTgxHGZNMX4w%2BhB4Kqqjt3DzvLdykFP7jCHxIc3M3jyEjUeMCTpG9awiIlywMSLJsuvSCMaFO5jOjx8nNVnD5cGeVttZtfvAZubib5%2FBX%2FKeTAnj%2Bnk90J%2Fr23NmpMdTSMJSE5r1v3zvcTABEDQXEPebSRPYxBnbih1OG8sW7SBtj3Kno6%2ByskFmTo3paFrKuPf46hkxJbqYD0Q%2B5ZZ1oye4OZeukuy4of7ed7j49TudJGlS7xwU1yMljlxGozSqB8YkZwkpy2eCWgfJmI77o82sA%2FkGGbapXfmeNzVCo6Uh%2Bh5DzfYzWwn8GMzdbgOEF5PC6dbjpstpZdjmdyJ5KLktin3QvMKFG%2F1b9LCNsI18jZXeEUtz4K4m%2FLA9fHwf2GcWISDPkLQM7BkoEXpbDyh3eBTkseSlg80PSfmThBku9otaoxiruk4r0nFeIYPnWCEjHT1ODoC2x9CgX37cWbcJcNgl57nU7g5XJDLd1O2WrdcvY4uNOnxtrUu3%2FJuYfm5qDRH6Y1FmimxO9T7NxZmEgrRdNi%2BFScUTBMV8t0tkB6OeqqQAk7AoyW34xUetMKS0ncQGOqUBdT7knHFPsVA5N28Twc7p%2FGEdJL%2BYPXWlK63BB9BHpf1JZYuEZyUXoErhbE%2F8%2BnRchp1ZQy4%2BDw1WmpmI4H1Y68mInU9WIXawFlCZAx5MqQpwWHUtVDlBwFEzDMwymy3siJXw1ZAMrsECbB9GIcDqDCiA%2FkHuphYXaBgH%2BgJjqFxvWmcnJngxkC3EDb3JweXD0evwDsP2m4tsNh3%2BgaonQ0d%2FvBIZ&X-Amz-Signature=a92c78852a6c97d63df215c2da00307aa3a34e1e9055e1c6318e883f19208174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TB475A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCrCOV2NR9Dbvjbpsq5UijLcmRjM0v%2FDlv94gYqHNKnVQIgCNqa1IOpEh%2BPpe%2FyPuKDBmOR0ZCmbDOKnp1pjmINgp0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW7t1asdVY4fBqODSrcAybe8OX61YoLiwUKv8zDIhhzomU9ylNRgkkca5E3%2ByAY8PuyhCcO7wxe4UwmvTgxHGZNMX4w%2BhB4Kqqjt3DzvLdykFP7jCHxIc3M3jyEjUeMCTpG9awiIlywMSLJsuvSCMaFO5jOjx8nNVnD5cGeVttZtfvAZubib5%2FBX%2FKeTAnj%2Bnk90J%2Fr23NmpMdTSMJSE5r1v3zvcTABEDQXEPebSRPYxBnbih1OG8sW7SBtj3Kno6%2ByskFmTo3paFrKuPf46hkxJbqYD0Q%2B5ZZ1oye4OZeukuy4of7ed7j49TudJGlS7xwU1yMljlxGozSqB8YkZwkpy2eCWgfJmI77o82sA%2FkGGbapXfmeNzVCo6Uh%2Bh5DzfYzWwn8GMzdbgOEF5PC6dbjpstpZdjmdyJ5KLktin3QvMKFG%2F1b9LCNsI18jZXeEUtz4K4m%2FLA9fHwf2GcWISDPkLQM7BkoEXpbDyh3eBTkseSlg80PSfmThBku9otaoxiruk4r0nFeIYPnWCEjHT1ODoC2x9CgX37cWbcJcNgl57nU7g5XJDLd1O2WrdcvY4uNOnxtrUu3%2FJuYfm5qDRH6Y1FmimxO9T7NxZmEgrRdNi%2BFScUTBMV8t0tkB6OeqqQAk7AoyW34xUetMKS0ncQGOqUBdT7knHFPsVA5N28Twc7p%2FGEdJL%2BYPXWlK63BB9BHpf1JZYuEZyUXoErhbE%2F8%2BnRchp1ZQy4%2BDw1WmpmI4H1Y68mInU9WIXawFlCZAx5MqQpwWHUtVDlBwFEzDMwymy3siJXw1ZAMrsECbB9GIcDqDCiA%2FkHuphYXaBgH%2BgJjqFxvWmcnJngxkC3EDb3JweXD0evwDsP2m4tsNh3%2BgaonQ0d%2FvBIZ&X-Amz-Signature=6c471b7decc5467ba42fd8bdf1697437a152ce3586be18880b392d4e287462bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TB475A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCrCOV2NR9Dbvjbpsq5UijLcmRjM0v%2FDlv94gYqHNKnVQIgCNqa1IOpEh%2BPpe%2FyPuKDBmOR0ZCmbDOKnp1pjmINgp0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW7t1asdVY4fBqODSrcAybe8OX61YoLiwUKv8zDIhhzomU9ylNRgkkca5E3%2ByAY8PuyhCcO7wxe4UwmvTgxHGZNMX4w%2BhB4Kqqjt3DzvLdykFP7jCHxIc3M3jyEjUeMCTpG9awiIlywMSLJsuvSCMaFO5jOjx8nNVnD5cGeVttZtfvAZubib5%2FBX%2FKeTAnj%2Bnk90J%2Fr23NmpMdTSMJSE5r1v3zvcTABEDQXEPebSRPYxBnbih1OG8sW7SBtj3Kno6%2ByskFmTo3paFrKuPf46hkxJbqYD0Q%2B5ZZ1oye4OZeukuy4of7ed7j49TudJGlS7xwU1yMljlxGozSqB8YkZwkpy2eCWgfJmI77o82sA%2FkGGbapXfmeNzVCo6Uh%2Bh5DzfYzWwn8GMzdbgOEF5PC6dbjpstpZdjmdyJ5KLktin3QvMKFG%2F1b9LCNsI18jZXeEUtz4K4m%2FLA9fHwf2GcWISDPkLQM7BkoEXpbDyh3eBTkseSlg80PSfmThBku9otaoxiruk4r0nFeIYPnWCEjHT1ODoC2x9CgX37cWbcJcNgl57nU7g5XJDLd1O2WrdcvY4uNOnxtrUu3%2FJuYfm5qDRH6Y1FmimxO9T7NxZmEgrRdNi%2BFScUTBMV8t0tkB6OeqqQAk7AoyW34xUetMKS0ncQGOqUBdT7knHFPsVA5N28Twc7p%2FGEdJL%2BYPXWlK63BB9BHpf1JZYuEZyUXoErhbE%2F8%2BnRchp1ZQy4%2BDw1WmpmI4H1Y68mInU9WIXawFlCZAx5MqQpwWHUtVDlBwFEzDMwymy3siJXw1ZAMrsECbB9GIcDqDCiA%2FkHuphYXaBgH%2BgJjqFxvWmcnJngxkC3EDb3JweXD0evwDsP2m4tsNh3%2BgaonQ0d%2FvBIZ&X-Amz-Signature=06f05f95724a396a22238c27daa2615f45a8513492b1bab8634182d693ed8395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TMEQ245%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGvUr%2BLJWnOgXCbYkV70fYWB%2BR3dCO5FGI9sc6cp4oqJAiEA4u%2BaPUwuv5bnDM%2FcRcSV5nvGu6gGj%2FqhSqA3xeqLB0IqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtAUox86LRrzAgebSrcA4mpQkeo%2FP5uPjTsd0DxmCLqijGvWzuj5%2BQqpCa9igmlCBBKhbnXJgV95%2FvoZZ5vm139RQAaQbz4l8AhcKjGSh6yOpFxcXw82KtMbcTH9nva2KGkKnlAa8cQwYkY%2FRKQocqVOePTigL4PKN4cFSLeFhOaybgboKFJZtGAcQej6NX3w4RB7Cn3uqDRrJFxUxG8ikbrHiUOeD50COsk9Hr%2FUoJy2QJDrGi6I5KugNgLrA9yT7VhCy7zf9E8fUArqguqtJx4WWcioAQRb53htCZ2BgIeV5Xh4QI2aUcoM%2F9%2Bfy1FnDWgaV0YWKazAxTqhIgAt%2BKs3WN1sigXY1cGO7zXiHgTlR020x0bdAMCXyAk7pBDqmdPEzr2Dht7U4LWJ9CIqqOalkyKTAIL4X5lK0d0g8Xnl86wmRMI6cNZl%2BzNFYoD%2B5AJOy7%2B7XWbCZSkrYEHsCRdCqeNr7GUqlKvme5j1OIGCsMxAL47z45a69UEmSuKs3xRJej%2FMTkW1cGCKlPrFDj8iBIWyx0p2hxfdb3Dinmjackp0PiSyTvQp%2F0QqpRUCI9vboMdsBZsjxMyyYFv3Lau%2Fzf1mrb%2BBJVLWW36W5CvIfs7lJNZvaTuVwAeqoTTChIcZHI0tJBKXWVMLe0ncQGOqUBXh07YbBlEmBn5B7F5ddr0AoDccqj6nFH4ku7%2Bd4lwiwTm%2B9sKzYwi42tJYNa%2BfHcSXAyUJHJPiP1uxZBVlviHz2fyWoGVlWLXfW3A8qQfvxuokiXtppNxFtyvpLBDfCvVrp36EtBJ7biDY5L1GoQgRZk6F4rNAMzq169zd4G5xjgwOgU1QsXGD6d1rjCq%2Bw3Xyjx8k%2FTDHQoGGBn%2BOfDx%2Fb0EMU%2F&X-Amz-Signature=aea59266b938d45fb860451c567c1145983d921c2c2b19c40fabdcffe9f79730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673TB475A%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCrCOV2NR9Dbvjbpsq5UijLcmRjM0v%2FDlv94gYqHNKnVQIgCNqa1IOpEh%2BPpe%2FyPuKDBmOR0ZCmbDOKnp1pjmINgp0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCW7t1asdVY4fBqODSrcAybe8OX61YoLiwUKv8zDIhhzomU9ylNRgkkca5E3%2ByAY8PuyhCcO7wxe4UwmvTgxHGZNMX4w%2BhB4Kqqjt3DzvLdykFP7jCHxIc3M3jyEjUeMCTpG9awiIlywMSLJsuvSCMaFO5jOjx8nNVnD5cGeVttZtfvAZubib5%2FBX%2FKeTAnj%2Bnk90J%2Fr23NmpMdTSMJSE5r1v3zvcTABEDQXEPebSRPYxBnbih1OG8sW7SBtj3Kno6%2ByskFmTo3paFrKuPf46hkxJbqYD0Q%2B5ZZ1oye4OZeukuy4of7ed7j49TudJGlS7xwU1yMljlxGozSqB8YkZwkpy2eCWgfJmI77o82sA%2FkGGbapXfmeNzVCo6Uh%2Bh5DzfYzWwn8GMzdbgOEF5PC6dbjpstpZdjmdyJ5KLktin3QvMKFG%2F1b9LCNsI18jZXeEUtz4K4m%2FLA9fHwf2GcWISDPkLQM7BkoEXpbDyh3eBTkseSlg80PSfmThBku9otaoxiruk4r0nFeIYPnWCEjHT1ODoC2x9CgX37cWbcJcNgl57nU7g5XJDLd1O2WrdcvY4uNOnxtrUu3%2FJuYfm5qDRH6Y1FmimxO9T7NxZmEgrRdNi%2BFScUTBMV8t0tkB6OeqqQAk7AoyW34xUetMKS0ncQGOqUBdT7knHFPsVA5N28Twc7p%2FGEdJL%2BYPXWlK63BB9BHpf1JZYuEZyUXoErhbE%2F8%2BnRchp1ZQy4%2BDw1WmpmI4H1Y68mInU9WIXawFlCZAx5MqQpwWHUtVDlBwFEzDMwymy3siJXw1ZAMrsECbB9GIcDqDCiA%2FkHuphYXaBgH%2BgJjqFxvWmcnJngxkC3EDb3JweXD0evwDsP2m4tsNh3%2BgaonQ0d%2FvBIZ&X-Amz-Signature=746dfe7caf2f1bb070fa3cfe27456079a6aef624df52585679ab9058d4542df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5KUY3Z%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDyySy1OjaGOpAiN5BilLnUhiJkzqeCH76QrDcr1gjRtQIhAMl2pp6xY0c%2BAQIBeo8mWjpdGMkOtoGNtiEjkKm2UUMmKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9zb4CG1TO%2FvcYx5sq3AM9Gwj9rTVphoTQ7%2BKhTbee0DOh5QRywKxtTcnuwzeocagFvmkePyTdEhR83UYW5SnQ%2Fs8WHXMBViMG%2F%2B1TfTZ88BOcfnUk37nsyXsLhajKdB3THFI4KObfhoNcAs8%2FtbG1oyU%2FPnvjHhAekgRPNFM5iiBm8TjPGnvZ4tlPdFzDeyunNI%2FBXaskWZKnFxngecl2chkcItfwkJLEKHemrWq4vZ3gqTOpYd28Bmk0tFQbH4R0uhde7N5yWezl3iRPQ%2BFnD5YWu3G3eNh2bm6janFUXvl6MDXpqghf8dDDQI4uTDNiFPKYuHy%2BLWqEpi%2Fky0GIO7fpN8qtsdEMkr2dMc3tDeAzM6DiENKnKuqqDNjODMGWgVUcmc2zqZnFDRyZl%2BPfffZUvwhC3Ws7RLY37OUNThBvxaT%2F6gdOoyTbumYYGnbV2MLbjm97HvfK4n2dUbcmOUK84jvYmt7qfzf0uQ%2F7la%2FcuJQSIMqROZiqA%2BoVKpcn0OLm0XOlq9HMOmUNxmeTK50qxyxIguL%2BAP4eaev9GagZ2RHID7T%2FlWvzwnvskwvrOBQix6u6xY0xKjop8zKPWeGfCtyqkMmJs1onrc9eYk3koAy3FKjzMDCpslW66r1%2FizTNStCIx6A7rTDCtJ3EBjqkAXtIj9txgRPIEs5IMYM%2FxM%2Fm8b7JvuQ%2BcnUA1TTIoqck8%2BQA%2F0YhYNTGQh9CfqYXnnrSWIWrrIuvKBhPEVGynHvlJPDwUmblgi%2BYXpRqv07JymLLmAq80CYixg9TQyhXordBR7CSUc87nRdQmTPB7uyVSalx70zsPzyoXF0y%2BpIjEJ14XwyLNlTfpPqixvg3XzngLDit%2B5JvW2HgxhgQj0mJr4KT&X-Amz-Signature=bb4253ae93082bab0afb11fe3ee3d57acec9a6f970ef67688b15b197fac0e816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5KUY3Z%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDyySy1OjaGOpAiN5BilLnUhiJkzqeCH76QrDcr1gjRtQIhAMl2pp6xY0c%2BAQIBeo8mWjpdGMkOtoGNtiEjkKm2UUMmKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9zb4CG1TO%2FvcYx5sq3AM9Gwj9rTVphoTQ7%2BKhTbee0DOh5QRywKxtTcnuwzeocagFvmkePyTdEhR83UYW5SnQ%2Fs8WHXMBViMG%2F%2B1TfTZ88BOcfnUk37nsyXsLhajKdB3THFI4KObfhoNcAs8%2FtbG1oyU%2FPnvjHhAekgRPNFM5iiBm8TjPGnvZ4tlPdFzDeyunNI%2FBXaskWZKnFxngecl2chkcItfwkJLEKHemrWq4vZ3gqTOpYd28Bmk0tFQbH4R0uhde7N5yWezl3iRPQ%2BFnD5YWu3G3eNh2bm6janFUXvl6MDXpqghf8dDDQI4uTDNiFPKYuHy%2BLWqEpi%2Fky0GIO7fpN8qtsdEMkr2dMc3tDeAzM6DiENKnKuqqDNjODMGWgVUcmc2zqZnFDRyZl%2BPfffZUvwhC3Ws7RLY37OUNThBvxaT%2F6gdOoyTbumYYGnbV2MLbjm97HvfK4n2dUbcmOUK84jvYmt7qfzf0uQ%2F7la%2FcuJQSIMqROZiqA%2BoVKpcn0OLm0XOlq9HMOmUNxmeTK50qxyxIguL%2BAP4eaev9GagZ2RHID7T%2FlWvzwnvskwvrOBQix6u6xY0xKjop8zKPWeGfCtyqkMmJs1onrc9eYk3koAy3FKjzMDCpslW66r1%2FizTNStCIx6A7rTDCtJ3EBjqkAXtIj9txgRPIEs5IMYM%2FxM%2Fm8b7JvuQ%2BcnUA1TTIoqck8%2BQA%2F0YhYNTGQh9CfqYXnnrSWIWrrIuvKBhPEVGynHvlJPDwUmblgi%2BYXpRqv07JymLLmAq80CYixg9TQyhXordBR7CSUc87nRdQmTPB7uyVSalx70zsPzyoXF0y%2BpIjEJ14XwyLNlTfpPqixvg3XzngLDit%2B5JvW2HgxhgQj0mJr4KT&X-Amz-Signature=9abfcd7191d73ffffb379d2e42fc531dc50b767262def00bfa75d2b22123c96f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5KUY3Z%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDyySy1OjaGOpAiN5BilLnUhiJkzqeCH76QrDcr1gjRtQIhAMl2pp6xY0c%2BAQIBeo8mWjpdGMkOtoGNtiEjkKm2UUMmKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9zb4CG1TO%2FvcYx5sq3AM9Gwj9rTVphoTQ7%2BKhTbee0DOh5QRywKxtTcnuwzeocagFvmkePyTdEhR83UYW5SnQ%2Fs8WHXMBViMG%2F%2B1TfTZ88BOcfnUk37nsyXsLhajKdB3THFI4KObfhoNcAs8%2FtbG1oyU%2FPnvjHhAekgRPNFM5iiBm8TjPGnvZ4tlPdFzDeyunNI%2FBXaskWZKnFxngecl2chkcItfwkJLEKHemrWq4vZ3gqTOpYd28Bmk0tFQbH4R0uhde7N5yWezl3iRPQ%2BFnD5YWu3G3eNh2bm6janFUXvl6MDXpqghf8dDDQI4uTDNiFPKYuHy%2BLWqEpi%2Fky0GIO7fpN8qtsdEMkr2dMc3tDeAzM6DiENKnKuqqDNjODMGWgVUcmc2zqZnFDRyZl%2BPfffZUvwhC3Ws7RLY37OUNThBvxaT%2F6gdOoyTbumYYGnbV2MLbjm97HvfK4n2dUbcmOUK84jvYmt7qfzf0uQ%2F7la%2FcuJQSIMqROZiqA%2BoVKpcn0OLm0XOlq9HMOmUNxmeTK50qxyxIguL%2BAP4eaev9GagZ2RHID7T%2FlWvzwnvskwvrOBQix6u6xY0xKjop8zKPWeGfCtyqkMmJs1onrc9eYk3koAy3FKjzMDCpslW66r1%2FizTNStCIx6A7rTDCtJ3EBjqkAXtIj9txgRPIEs5IMYM%2FxM%2Fm8b7JvuQ%2BcnUA1TTIoqck8%2BQA%2F0YhYNTGQh9CfqYXnnrSWIWrrIuvKBhPEVGynHvlJPDwUmblgi%2BYXpRqv07JymLLmAq80CYixg9TQyhXordBR7CSUc87nRdQmTPB7uyVSalx70zsPzyoXF0y%2BpIjEJ14XwyLNlTfpPqixvg3XzngLDit%2B5JvW2HgxhgQj0mJr4KT&X-Amz-Signature=a47ea8c039aec5648ae40e37f638a31d1a98b1b37d6cd9d8cc81711bed0667b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5KUY3Z%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDyySy1OjaGOpAiN5BilLnUhiJkzqeCH76QrDcr1gjRtQIhAMl2pp6xY0c%2BAQIBeo8mWjpdGMkOtoGNtiEjkKm2UUMmKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9zb4CG1TO%2FvcYx5sq3AM9Gwj9rTVphoTQ7%2BKhTbee0DOh5QRywKxtTcnuwzeocagFvmkePyTdEhR83UYW5SnQ%2Fs8WHXMBViMG%2F%2B1TfTZ88BOcfnUk37nsyXsLhajKdB3THFI4KObfhoNcAs8%2FtbG1oyU%2FPnvjHhAekgRPNFM5iiBm8TjPGnvZ4tlPdFzDeyunNI%2FBXaskWZKnFxngecl2chkcItfwkJLEKHemrWq4vZ3gqTOpYd28Bmk0tFQbH4R0uhde7N5yWezl3iRPQ%2BFnD5YWu3G3eNh2bm6janFUXvl6MDXpqghf8dDDQI4uTDNiFPKYuHy%2BLWqEpi%2Fky0GIO7fpN8qtsdEMkr2dMc3tDeAzM6DiENKnKuqqDNjODMGWgVUcmc2zqZnFDRyZl%2BPfffZUvwhC3Ws7RLY37OUNThBvxaT%2F6gdOoyTbumYYGnbV2MLbjm97HvfK4n2dUbcmOUK84jvYmt7qfzf0uQ%2F7la%2FcuJQSIMqROZiqA%2BoVKpcn0OLm0XOlq9HMOmUNxmeTK50qxyxIguL%2BAP4eaev9GagZ2RHID7T%2FlWvzwnvskwvrOBQix6u6xY0xKjop8zKPWeGfCtyqkMmJs1onrc9eYk3koAy3FKjzMDCpslW66r1%2FizTNStCIx6A7rTDCtJ3EBjqkAXtIj9txgRPIEs5IMYM%2FxM%2Fm8b7JvuQ%2BcnUA1TTIoqck8%2BQA%2F0YhYNTGQh9CfqYXnnrSWIWrrIuvKBhPEVGynHvlJPDwUmblgi%2BYXpRqv07JymLLmAq80CYixg9TQyhXordBR7CSUc87nRdQmTPB7uyVSalx70zsPzyoXF0y%2BpIjEJ14XwyLNlTfpPqixvg3XzngLDit%2B5JvW2HgxhgQj0mJr4KT&X-Amz-Signature=85c033812d5277e291ef07091cc2da9aace2795f14dc215d07f518c78a918519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5KUY3Z%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDyySy1OjaGOpAiN5BilLnUhiJkzqeCH76QrDcr1gjRtQIhAMl2pp6xY0c%2BAQIBeo8mWjpdGMkOtoGNtiEjkKm2UUMmKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9zb4CG1TO%2FvcYx5sq3AM9Gwj9rTVphoTQ7%2BKhTbee0DOh5QRywKxtTcnuwzeocagFvmkePyTdEhR83UYW5SnQ%2Fs8WHXMBViMG%2F%2B1TfTZ88BOcfnUk37nsyXsLhajKdB3THFI4KObfhoNcAs8%2FtbG1oyU%2FPnvjHhAekgRPNFM5iiBm8TjPGnvZ4tlPdFzDeyunNI%2FBXaskWZKnFxngecl2chkcItfwkJLEKHemrWq4vZ3gqTOpYd28Bmk0tFQbH4R0uhde7N5yWezl3iRPQ%2BFnD5YWu3G3eNh2bm6janFUXvl6MDXpqghf8dDDQI4uTDNiFPKYuHy%2BLWqEpi%2Fky0GIO7fpN8qtsdEMkr2dMc3tDeAzM6DiENKnKuqqDNjODMGWgVUcmc2zqZnFDRyZl%2BPfffZUvwhC3Ws7RLY37OUNThBvxaT%2F6gdOoyTbumYYGnbV2MLbjm97HvfK4n2dUbcmOUK84jvYmt7qfzf0uQ%2F7la%2FcuJQSIMqROZiqA%2BoVKpcn0OLm0XOlq9HMOmUNxmeTK50qxyxIguL%2BAP4eaev9GagZ2RHID7T%2FlWvzwnvskwvrOBQix6u6xY0xKjop8zKPWeGfCtyqkMmJs1onrc9eYk3koAy3FKjzMDCpslW66r1%2FizTNStCIx6A7rTDCtJ3EBjqkAXtIj9txgRPIEs5IMYM%2FxM%2Fm8b7JvuQ%2BcnUA1TTIoqck8%2BQA%2F0YhYNTGQh9CfqYXnnrSWIWrrIuvKBhPEVGynHvlJPDwUmblgi%2BYXpRqv07JymLLmAq80CYixg9TQyhXordBR7CSUc87nRdQmTPB7uyVSalx70zsPzyoXF0y%2BpIjEJ14XwyLNlTfpPqixvg3XzngLDit%2B5JvW2HgxhgQj0mJr4KT&X-Amz-Signature=9e30940a6fa090daf7437d96234ccc5436eae60cd16403fcd2f885af38e707a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5KUY3Z%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDyySy1OjaGOpAiN5BilLnUhiJkzqeCH76QrDcr1gjRtQIhAMl2pp6xY0c%2BAQIBeo8mWjpdGMkOtoGNtiEjkKm2UUMmKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9zb4CG1TO%2FvcYx5sq3AM9Gwj9rTVphoTQ7%2BKhTbee0DOh5QRywKxtTcnuwzeocagFvmkePyTdEhR83UYW5SnQ%2Fs8WHXMBViMG%2F%2B1TfTZ88BOcfnUk37nsyXsLhajKdB3THFI4KObfhoNcAs8%2FtbG1oyU%2FPnvjHhAekgRPNFM5iiBm8TjPGnvZ4tlPdFzDeyunNI%2FBXaskWZKnFxngecl2chkcItfwkJLEKHemrWq4vZ3gqTOpYd28Bmk0tFQbH4R0uhde7N5yWezl3iRPQ%2BFnD5YWu3G3eNh2bm6janFUXvl6MDXpqghf8dDDQI4uTDNiFPKYuHy%2BLWqEpi%2Fky0GIO7fpN8qtsdEMkr2dMc3tDeAzM6DiENKnKuqqDNjODMGWgVUcmc2zqZnFDRyZl%2BPfffZUvwhC3Ws7RLY37OUNThBvxaT%2F6gdOoyTbumYYGnbV2MLbjm97HvfK4n2dUbcmOUK84jvYmt7qfzf0uQ%2F7la%2FcuJQSIMqROZiqA%2BoVKpcn0OLm0XOlq9HMOmUNxmeTK50qxyxIguL%2BAP4eaev9GagZ2RHID7T%2FlWvzwnvskwvrOBQix6u6xY0xKjop8zKPWeGfCtyqkMmJs1onrc9eYk3koAy3FKjzMDCpslW66r1%2FizTNStCIx6A7rTDCtJ3EBjqkAXtIj9txgRPIEs5IMYM%2FxM%2Fm8b7JvuQ%2BcnUA1TTIoqck8%2BQA%2F0YhYNTGQh9CfqYXnnrSWIWrrIuvKBhPEVGynHvlJPDwUmblgi%2BYXpRqv07JymLLmAq80CYixg9TQyhXordBR7CSUc87nRdQmTPB7uyVSalx70zsPzyoXF0y%2BpIjEJ14XwyLNlTfpPqixvg3XzngLDit%2B5JvW2HgxhgQj0mJr4KT&X-Amz-Signature=a088785bdec3bae316b84ba8238435d42daf0a8d16e96e58b6e0e4c1c8e9a707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ5KUY3Z%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDyySy1OjaGOpAiN5BilLnUhiJkzqeCH76QrDcr1gjRtQIhAMl2pp6xY0c%2BAQIBeo8mWjpdGMkOtoGNtiEjkKm2UUMmKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9zb4CG1TO%2FvcYx5sq3AM9Gwj9rTVphoTQ7%2BKhTbee0DOh5QRywKxtTcnuwzeocagFvmkePyTdEhR83UYW5SnQ%2Fs8WHXMBViMG%2F%2B1TfTZ88BOcfnUk37nsyXsLhajKdB3THFI4KObfhoNcAs8%2FtbG1oyU%2FPnvjHhAekgRPNFM5iiBm8TjPGnvZ4tlPdFzDeyunNI%2FBXaskWZKnFxngecl2chkcItfwkJLEKHemrWq4vZ3gqTOpYd28Bmk0tFQbH4R0uhde7N5yWezl3iRPQ%2BFnD5YWu3G3eNh2bm6janFUXvl6MDXpqghf8dDDQI4uTDNiFPKYuHy%2BLWqEpi%2Fky0GIO7fpN8qtsdEMkr2dMc3tDeAzM6DiENKnKuqqDNjODMGWgVUcmc2zqZnFDRyZl%2BPfffZUvwhC3Ws7RLY37OUNThBvxaT%2F6gdOoyTbumYYGnbV2MLbjm97HvfK4n2dUbcmOUK84jvYmt7qfzf0uQ%2F7la%2FcuJQSIMqROZiqA%2BoVKpcn0OLm0XOlq9HMOmUNxmeTK50qxyxIguL%2BAP4eaev9GagZ2RHID7T%2FlWvzwnvskwvrOBQix6u6xY0xKjop8zKPWeGfCtyqkMmJs1onrc9eYk3koAy3FKjzMDCpslW66r1%2FizTNStCIx6A7rTDCtJ3EBjqkAXtIj9txgRPIEs5IMYM%2FxM%2Fm8b7JvuQ%2BcnUA1TTIoqck8%2BQA%2F0YhYNTGQh9CfqYXnnrSWIWrrIuvKBhPEVGynHvlJPDwUmblgi%2BYXpRqv07JymLLmAq80CYixg9TQyhXordBR7CSUc87nRdQmTPB7uyVSalx70zsPzyoXF0y%2BpIjEJ14XwyLNlTfpPqixvg3XzngLDit%2B5JvW2HgxhgQj0mJr4KT&X-Amz-Signature=2e9c008127d96f88cd36a9ad4562d4521162a6541fe5e65ad9539a46ceb613ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
