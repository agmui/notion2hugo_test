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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBHN7WI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyFe3tE24DEjhTG8mcTYJbmybkrEo6ol%2BAr%2F%2FzV1fJWAIhAJI1vecuX019x3unLUJ9heEn3UKg4t7sw400UQZGeQ6gKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO225DALz75yXODLcq3AM8PstoaKNudW3Qh6g5TyHHVWQS5709fiO3WWECjMdywzMlLcowg4YuYptxS%2Fh9M0uExLFnYitogngfiYbemIVw2Ll9PDfmgwBsujvfSsOlNiGUYWLmeFPwAEAMEo907vCDTWgdZzKomUurF%2BXJKIAhawF2aLPWaGGZT%2BvPl63B1Vz14Faxv3hZhUrm0X715AHIh95EVmqvkxeXvkZ7u%2Bn%2B69IstP6kzirVSJQAqEeScW%2F4cPoGHx1q%2BHHbLUHm%2Fded4D%2B1zA%2FG8CLRY38ETN3m54CJVOGyH%2Bk2ssZxy975IQNSR1QhxiXgpzqZEYZl7HuAMk7IWaZtlCrWCm%2FSCHG2WrLM5PcGJr3iBI1ZFX39nyJNWZUYvhSBbx5F1NMtQuqyahXbzfS6IQS%2BYa6XwIlxxhIw%2FLcsm6sPsH0pmw8s5DY4e79K7AiG5qmg5VpM7KZ7RtrQQUleirtlqFo5izxRG4aLIzb%2BDeRKNYjGqkLNuxpYf2r5UPr6ByuX%2BtBBU1cMJa%2F%2FCdyNDpVJZOqArRma8vN3pBLwt%2BEUx2pfG3l0Ab%2BXz2nt4o3SsaXrSn0WC882JbljWeIfZFQ6vK6nDQ3lJUY%2B3dDAFkMp0Wb0Qn2B04zwjQEDGiLX0SbkZjDnsKLEBjqkAefjs3aLen%2FqgNqGgOUIOKlbqmYnFPNQg7bUK41aa7N%2FH5BztLZ6GWZpqXlxObcyl9z8BJx86cP7JOHGmE45JJn09Zv9z7T5EqKt1bFLkyj9dsiLWuyGc9txaauRaDvMoQtSjanCuwk%2Bw0jN9C6%2BHl0jjavk7Q9NQdOa937lvxXO9F%2BUzb8j6%2FNkd2AXFd6TdVrHT8VKm16ga%2BbJH26r%2F4g9OLl%2B&X-Amz-Signature=d5ec955d3612113c4bd642be0888aa0571b71dcbdee35eb2435accb17e81c014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBHN7WI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyFe3tE24DEjhTG8mcTYJbmybkrEo6ol%2BAr%2F%2FzV1fJWAIhAJI1vecuX019x3unLUJ9heEn3UKg4t7sw400UQZGeQ6gKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO225DALz75yXODLcq3AM8PstoaKNudW3Qh6g5TyHHVWQS5709fiO3WWECjMdywzMlLcowg4YuYptxS%2Fh9M0uExLFnYitogngfiYbemIVw2Ll9PDfmgwBsujvfSsOlNiGUYWLmeFPwAEAMEo907vCDTWgdZzKomUurF%2BXJKIAhawF2aLPWaGGZT%2BvPl63B1Vz14Faxv3hZhUrm0X715AHIh95EVmqvkxeXvkZ7u%2Bn%2B69IstP6kzirVSJQAqEeScW%2F4cPoGHx1q%2BHHbLUHm%2Fded4D%2B1zA%2FG8CLRY38ETN3m54CJVOGyH%2Bk2ssZxy975IQNSR1QhxiXgpzqZEYZl7HuAMk7IWaZtlCrWCm%2FSCHG2WrLM5PcGJr3iBI1ZFX39nyJNWZUYvhSBbx5F1NMtQuqyahXbzfS6IQS%2BYa6XwIlxxhIw%2FLcsm6sPsH0pmw8s5DY4e79K7AiG5qmg5VpM7KZ7RtrQQUleirtlqFo5izxRG4aLIzb%2BDeRKNYjGqkLNuxpYf2r5UPr6ByuX%2BtBBU1cMJa%2F%2FCdyNDpVJZOqArRma8vN3pBLwt%2BEUx2pfG3l0Ab%2BXz2nt4o3SsaXrSn0WC882JbljWeIfZFQ6vK6nDQ3lJUY%2B3dDAFkMp0Wb0Qn2B04zwjQEDGiLX0SbkZjDnsKLEBjqkAefjs3aLen%2FqgNqGgOUIOKlbqmYnFPNQg7bUK41aa7N%2FH5BztLZ6GWZpqXlxObcyl9z8BJx86cP7JOHGmE45JJn09Zv9z7T5EqKt1bFLkyj9dsiLWuyGc9txaauRaDvMoQtSjanCuwk%2Bw0jN9C6%2BHl0jjavk7Q9NQdOa937lvxXO9F%2BUzb8j6%2FNkd2AXFd6TdVrHT8VKm16ga%2BbJH26r%2F4g9OLl%2B&X-Amz-Signature=56b16f44cb960e8c592926ef6caaf5ba22712feab7eb43864d74ce61cfa66305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBHN7WI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyFe3tE24DEjhTG8mcTYJbmybkrEo6ol%2BAr%2F%2FzV1fJWAIhAJI1vecuX019x3unLUJ9heEn3UKg4t7sw400UQZGeQ6gKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO225DALz75yXODLcq3AM8PstoaKNudW3Qh6g5TyHHVWQS5709fiO3WWECjMdywzMlLcowg4YuYptxS%2Fh9M0uExLFnYitogngfiYbemIVw2Ll9PDfmgwBsujvfSsOlNiGUYWLmeFPwAEAMEo907vCDTWgdZzKomUurF%2BXJKIAhawF2aLPWaGGZT%2BvPl63B1Vz14Faxv3hZhUrm0X715AHIh95EVmqvkxeXvkZ7u%2Bn%2B69IstP6kzirVSJQAqEeScW%2F4cPoGHx1q%2BHHbLUHm%2Fded4D%2B1zA%2FG8CLRY38ETN3m54CJVOGyH%2Bk2ssZxy975IQNSR1QhxiXgpzqZEYZl7HuAMk7IWaZtlCrWCm%2FSCHG2WrLM5PcGJr3iBI1ZFX39nyJNWZUYvhSBbx5F1NMtQuqyahXbzfS6IQS%2BYa6XwIlxxhIw%2FLcsm6sPsH0pmw8s5DY4e79K7AiG5qmg5VpM7KZ7RtrQQUleirtlqFo5izxRG4aLIzb%2BDeRKNYjGqkLNuxpYf2r5UPr6ByuX%2BtBBU1cMJa%2F%2FCdyNDpVJZOqArRma8vN3pBLwt%2BEUx2pfG3l0Ab%2BXz2nt4o3SsaXrSn0WC882JbljWeIfZFQ6vK6nDQ3lJUY%2B3dDAFkMp0Wb0Qn2B04zwjQEDGiLX0SbkZjDnsKLEBjqkAefjs3aLen%2FqgNqGgOUIOKlbqmYnFPNQg7bUK41aa7N%2FH5BztLZ6GWZpqXlxObcyl9z8BJx86cP7JOHGmE45JJn09Zv9z7T5EqKt1bFLkyj9dsiLWuyGc9txaauRaDvMoQtSjanCuwk%2Bw0jN9C6%2BHl0jjavk7Q9NQdOa937lvxXO9F%2BUzb8j6%2FNkd2AXFd6TdVrHT8VKm16ga%2BbJH26r%2F4g9OLl%2B&X-Amz-Signature=637d8d0deec2898b9556ff859bad4818ab3ce593c79aa9ad3c147c9cf567a93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBHN7WI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyFe3tE24DEjhTG8mcTYJbmybkrEo6ol%2BAr%2F%2FzV1fJWAIhAJI1vecuX019x3unLUJ9heEn3UKg4t7sw400UQZGeQ6gKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO225DALz75yXODLcq3AM8PstoaKNudW3Qh6g5TyHHVWQS5709fiO3WWECjMdywzMlLcowg4YuYptxS%2Fh9M0uExLFnYitogngfiYbemIVw2Ll9PDfmgwBsujvfSsOlNiGUYWLmeFPwAEAMEo907vCDTWgdZzKomUurF%2BXJKIAhawF2aLPWaGGZT%2BvPl63B1Vz14Faxv3hZhUrm0X715AHIh95EVmqvkxeXvkZ7u%2Bn%2B69IstP6kzirVSJQAqEeScW%2F4cPoGHx1q%2BHHbLUHm%2Fded4D%2B1zA%2FG8CLRY38ETN3m54CJVOGyH%2Bk2ssZxy975IQNSR1QhxiXgpzqZEYZl7HuAMk7IWaZtlCrWCm%2FSCHG2WrLM5PcGJr3iBI1ZFX39nyJNWZUYvhSBbx5F1NMtQuqyahXbzfS6IQS%2BYa6XwIlxxhIw%2FLcsm6sPsH0pmw8s5DY4e79K7AiG5qmg5VpM7KZ7RtrQQUleirtlqFo5izxRG4aLIzb%2BDeRKNYjGqkLNuxpYf2r5UPr6ByuX%2BtBBU1cMJa%2F%2FCdyNDpVJZOqArRma8vN3pBLwt%2BEUx2pfG3l0Ab%2BXz2nt4o3SsaXrSn0WC882JbljWeIfZFQ6vK6nDQ3lJUY%2B3dDAFkMp0Wb0Qn2B04zwjQEDGiLX0SbkZjDnsKLEBjqkAefjs3aLen%2FqgNqGgOUIOKlbqmYnFPNQg7bUK41aa7N%2FH5BztLZ6GWZpqXlxObcyl9z8BJx86cP7JOHGmE45JJn09Zv9z7T5EqKt1bFLkyj9dsiLWuyGc9txaauRaDvMoQtSjanCuwk%2Bw0jN9C6%2BHl0jjavk7Q9NQdOa937lvxXO9F%2BUzb8j6%2FNkd2AXFd6TdVrHT8VKm16ga%2BbJH26r%2F4g9OLl%2B&X-Amz-Signature=9beabadb0174cc73cd072ae2f72ce1f6042563e51212672ec6add63e440c3ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBHN7WI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyFe3tE24DEjhTG8mcTYJbmybkrEo6ol%2BAr%2F%2FzV1fJWAIhAJI1vecuX019x3unLUJ9heEn3UKg4t7sw400UQZGeQ6gKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO225DALz75yXODLcq3AM8PstoaKNudW3Qh6g5TyHHVWQS5709fiO3WWECjMdywzMlLcowg4YuYptxS%2Fh9M0uExLFnYitogngfiYbemIVw2Ll9PDfmgwBsujvfSsOlNiGUYWLmeFPwAEAMEo907vCDTWgdZzKomUurF%2BXJKIAhawF2aLPWaGGZT%2BvPl63B1Vz14Faxv3hZhUrm0X715AHIh95EVmqvkxeXvkZ7u%2Bn%2B69IstP6kzirVSJQAqEeScW%2F4cPoGHx1q%2BHHbLUHm%2Fded4D%2B1zA%2FG8CLRY38ETN3m54CJVOGyH%2Bk2ssZxy975IQNSR1QhxiXgpzqZEYZl7HuAMk7IWaZtlCrWCm%2FSCHG2WrLM5PcGJr3iBI1ZFX39nyJNWZUYvhSBbx5F1NMtQuqyahXbzfS6IQS%2BYa6XwIlxxhIw%2FLcsm6sPsH0pmw8s5DY4e79K7AiG5qmg5VpM7KZ7RtrQQUleirtlqFo5izxRG4aLIzb%2BDeRKNYjGqkLNuxpYf2r5UPr6ByuX%2BtBBU1cMJa%2F%2FCdyNDpVJZOqArRma8vN3pBLwt%2BEUx2pfG3l0Ab%2BXz2nt4o3SsaXrSn0WC882JbljWeIfZFQ6vK6nDQ3lJUY%2B3dDAFkMp0Wb0Qn2B04zwjQEDGiLX0SbkZjDnsKLEBjqkAefjs3aLen%2FqgNqGgOUIOKlbqmYnFPNQg7bUK41aa7N%2FH5BztLZ6GWZpqXlxObcyl9z8BJx86cP7JOHGmE45JJn09Zv9z7T5EqKt1bFLkyj9dsiLWuyGc9txaauRaDvMoQtSjanCuwk%2Bw0jN9C6%2BHl0jjavk7Q9NQdOa937lvxXO9F%2BUzb8j6%2FNkd2AXFd6TdVrHT8VKm16ga%2BbJH26r%2F4g9OLl%2B&X-Amz-Signature=5a0d779e246f157a3a2f0a076f7943993845bd92ff90f38513735b7650edd86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBHN7WI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyFe3tE24DEjhTG8mcTYJbmybkrEo6ol%2BAr%2F%2FzV1fJWAIhAJI1vecuX019x3unLUJ9heEn3UKg4t7sw400UQZGeQ6gKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO225DALz75yXODLcq3AM8PstoaKNudW3Qh6g5TyHHVWQS5709fiO3WWECjMdywzMlLcowg4YuYptxS%2Fh9M0uExLFnYitogngfiYbemIVw2Ll9PDfmgwBsujvfSsOlNiGUYWLmeFPwAEAMEo907vCDTWgdZzKomUurF%2BXJKIAhawF2aLPWaGGZT%2BvPl63B1Vz14Faxv3hZhUrm0X715AHIh95EVmqvkxeXvkZ7u%2Bn%2B69IstP6kzirVSJQAqEeScW%2F4cPoGHx1q%2BHHbLUHm%2Fded4D%2B1zA%2FG8CLRY38ETN3m54CJVOGyH%2Bk2ssZxy975IQNSR1QhxiXgpzqZEYZl7HuAMk7IWaZtlCrWCm%2FSCHG2WrLM5PcGJr3iBI1ZFX39nyJNWZUYvhSBbx5F1NMtQuqyahXbzfS6IQS%2BYa6XwIlxxhIw%2FLcsm6sPsH0pmw8s5DY4e79K7AiG5qmg5VpM7KZ7RtrQQUleirtlqFo5izxRG4aLIzb%2BDeRKNYjGqkLNuxpYf2r5UPr6ByuX%2BtBBU1cMJa%2F%2FCdyNDpVJZOqArRma8vN3pBLwt%2BEUx2pfG3l0Ab%2BXz2nt4o3SsaXrSn0WC882JbljWeIfZFQ6vK6nDQ3lJUY%2B3dDAFkMp0Wb0Qn2B04zwjQEDGiLX0SbkZjDnsKLEBjqkAefjs3aLen%2FqgNqGgOUIOKlbqmYnFPNQg7bUK41aa7N%2FH5BztLZ6GWZpqXlxObcyl9z8BJx86cP7JOHGmE45JJn09Zv9z7T5EqKt1bFLkyj9dsiLWuyGc9txaauRaDvMoQtSjanCuwk%2Bw0jN9C6%2BHl0jjavk7Q9NQdOa937lvxXO9F%2BUzb8j6%2FNkd2AXFd6TdVrHT8VKm16ga%2BbJH26r%2F4g9OLl%2B&X-Amz-Signature=250a7cbf7d272a1949430708beb3e66b541f2692302d8a955d5d81cea3a06ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBHN7WI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyFe3tE24DEjhTG8mcTYJbmybkrEo6ol%2BAr%2F%2FzV1fJWAIhAJI1vecuX019x3unLUJ9heEn3UKg4t7sw400UQZGeQ6gKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO225DALz75yXODLcq3AM8PstoaKNudW3Qh6g5TyHHVWQS5709fiO3WWECjMdywzMlLcowg4YuYptxS%2Fh9M0uExLFnYitogngfiYbemIVw2Ll9PDfmgwBsujvfSsOlNiGUYWLmeFPwAEAMEo907vCDTWgdZzKomUurF%2BXJKIAhawF2aLPWaGGZT%2BvPl63B1Vz14Faxv3hZhUrm0X715AHIh95EVmqvkxeXvkZ7u%2Bn%2B69IstP6kzirVSJQAqEeScW%2F4cPoGHx1q%2BHHbLUHm%2Fded4D%2B1zA%2FG8CLRY38ETN3m54CJVOGyH%2Bk2ssZxy975IQNSR1QhxiXgpzqZEYZl7HuAMk7IWaZtlCrWCm%2FSCHG2WrLM5PcGJr3iBI1ZFX39nyJNWZUYvhSBbx5F1NMtQuqyahXbzfS6IQS%2BYa6XwIlxxhIw%2FLcsm6sPsH0pmw8s5DY4e79K7AiG5qmg5VpM7KZ7RtrQQUleirtlqFo5izxRG4aLIzb%2BDeRKNYjGqkLNuxpYf2r5UPr6ByuX%2BtBBU1cMJa%2F%2FCdyNDpVJZOqArRma8vN3pBLwt%2BEUx2pfG3l0Ab%2BXz2nt4o3SsaXrSn0WC882JbljWeIfZFQ6vK6nDQ3lJUY%2B3dDAFkMp0Wb0Qn2B04zwjQEDGiLX0SbkZjDnsKLEBjqkAefjs3aLen%2FqgNqGgOUIOKlbqmYnFPNQg7bUK41aa7N%2FH5BztLZ6GWZpqXlxObcyl9z8BJx86cP7JOHGmE45JJn09Zv9z7T5EqKt1bFLkyj9dsiLWuyGc9txaauRaDvMoQtSjanCuwk%2Bw0jN9C6%2BHl0jjavk7Q9NQdOa937lvxXO9F%2BUzb8j6%2FNkd2AXFd6TdVrHT8VKm16ga%2BbJH26r%2F4g9OLl%2B&X-Amz-Signature=e90e6316f515abdb4cb1e463ba6f7af751af5be0293076497457021190b391d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBHN7WI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyFe3tE24DEjhTG8mcTYJbmybkrEo6ol%2BAr%2F%2FzV1fJWAIhAJI1vecuX019x3unLUJ9heEn3UKg4t7sw400UQZGeQ6gKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO225DALz75yXODLcq3AM8PstoaKNudW3Qh6g5TyHHVWQS5709fiO3WWECjMdywzMlLcowg4YuYptxS%2Fh9M0uExLFnYitogngfiYbemIVw2Ll9PDfmgwBsujvfSsOlNiGUYWLmeFPwAEAMEo907vCDTWgdZzKomUurF%2BXJKIAhawF2aLPWaGGZT%2BvPl63B1Vz14Faxv3hZhUrm0X715AHIh95EVmqvkxeXvkZ7u%2Bn%2B69IstP6kzirVSJQAqEeScW%2F4cPoGHx1q%2BHHbLUHm%2Fded4D%2B1zA%2FG8CLRY38ETN3m54CJVOGyH%2Bk2ssZxy975IQNSR1QhxiXgpzqZEYZl7HuAMk7IWaZtlCrWCm%2FSCHG2WrLM5PcGJr3iBI1ZFX39nyJNWZUYvhSBbx5F1NMtQuqyahXbzfS6IQS%2BYa6XwIlxxhIw%2FLcsm6sPsH0pmw8s5DY4e79K7AiG5qmg5VpM7KZ7RtrQQUleirtlqFo5izxRG4aLIzb%2BDeRKNYjGqkLNuxpYf2r5UPr6ByuX%2BtBBU1cMJa%2F%2FCdyNDpVJZOqArRma8vN3pBLwt%2BEUx2pfG3l0Ab%2BXz2nt4o3SsaXrSn0WC882JbljWeIfZFQ6vK6nDQ3lJUY%2B3dDAFkMp0Wb0Qn2B04zwjQEDGiLX0SbkZjDnsKLEBjqkAefjs3aLen%2FqgNqGgOUIOKlbqmYnFPNQg7bUK41aa7N%2FH5BztLZ6GWZpqXlxObcyl9z8BJx86cP7JOHGmE45JJn09Zv9z7T5EqKt1bFLkyj9dsiLWuyGc9txaauRaDvMoQtSjanCuwk%2Bw0jN9C6%2BHl0jjavk7Q9NQdOa937lvxXO9F%2BUzb8j6%2FNkd2AXFd6TdVrHT8VKm16ga%2BbJH26r%2F4g9OLl%2B&X-Amz-Signature=801378f687d36a5535ba2a351ef9886bd09da559b3e2640b19e0d302141327a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBHN7WI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyFe3tE24DEjhTG8mcTYJbmybkrEo6ol%2BAr%2F%2FzV1fJWAIhAJI1vecuX019x3unLUJ9heEn3UKg4t7sw400UQZGeQ6gKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO225DALz75yXODLcq3AM8PstoaKNudW3Qh6g5TyHHVWQS5709fiO3WWECjMdywzMlLcowg4YuYptxS%2Fh9M0uExLFnYitogngfiYbemIVw2Ll9PDfmgwBsujvfSsOlNiGUYWLmeFPwAEAMEo907vCDTWgdZzKomUurF%2BXJKIAhawF2aLPWaGGZT%2BvPl63B1Vz14Faxv3hZhUrm0X715AHIh95EVmqvkxeXvkZ7u%2Bn%2B69IstP6kzirVSJQAqEeScW%2F4cPoGHx1q%2BHHbLUHm%2Fded4D%2B1zA%2FG8CLRY38ETN3m54CJVOGyH%2Bk2ssZxy975IQNSR1QhxiXgpzqZEYZl7HuAMk7IWaZtlCrWCm%2FSCHG2WrLM5PcGJr3iBI1ZFX39nyJNWZUYvhSBbx5F1NMtQuqyahXbzfS6IQS%2BYa6XwIlxxhIw%2FLcsm6sPsH0pmw8s5DY4e79K7AiG5qmg5VpM7KZ7RtrQQUleirtlqFo5izxRG4aLIzb%2BDeRKNYjGqkLNuxpYf2r5UPr6ByuX%2BtBBU1cMJa%2F%2FCdyNDpVJZOqArRma8vN3pBLwt%2BEUx2pfG3l0Ab%2BXz2nt4o3SsaXrSn0WC882JbljWeIfZFQ6vK6nDQ3lJUY%2B3dDAFkMp0Wb0Qn2B04zwjQEDGiLX0SbkZjDnsKLEBjqkAefjs3aLen%2FqgNqGgOUIOKlbqmYnFPNQg7bUK41aa7N%2FH5BztLZ6GWZpqXlxObcyl9z8BJx86cP7JOHGmE45JJn09Zv9z7T5EqKt1bFLkyj9dsiLWuyGc9txaauRaDvMoQtSjanCuwk%2Bw0jN9C6%2BHl0jjavk7Q9NQdOa937lvxXO9F%2BUzb8j6%2FNkd2AXFd6TdVrHT8VKm16ga%2BbJH26r%2F4g9OLl%2B&X-Amz-Signature=7f34abe1a3eea98cb1b3577de5af287e50ab2375154e6367fca49512148c49eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AI5CSDD%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCOB1igsIZSP3xabg7UbnmD69MjmMSzYkofMZKMKP8r1wIgC4xx91lVjfpoYrT63BgEOcv4SgF6b080n0pGcuGML%2FoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXDM7LAr3Z6l7F3PircA21TUEDe4YacWI2ZZyC7IIonjZoQFLj5a7KHNQ8q%2FIbZKymoLOlZO0uUctgTpdlCgehAlvwWCFQtkQvoGCucUCPqputwZogEobmMRT1%2BRaz4thAqSJuo2M%2BLxI5B27IcfVXVwUZdC9lq4kZt54usCxkDvbV2%2BM%2BynhShv5WvcMmziF8I4ecUCu4ud9ZRd2342T2Rj0StxRSQDDEtvVdJrGAEu1pP9lZZoUk6zHmDWLMvJqcT%2B0KlpFOR1muf3yMeK3UKWNGddFkgr8O5J28tAYeqWpr%2Bk88Cvml97LJD5Tvb7QU1h7tiY0Lba934GrirnKBdgNhGk85NaPCnDppytiLQ0wnzR6%2FjDs4A0cXLStWdXFy7e2fWWEk%2F7X4DI5n%2Brf%2BR3Ab80n5vwtt8f3ElSGNS%2BVIXVsMdTAHqJkuAXRKZ4aHhvrtx2egvnsA3Gs9WVHC1H3x%2FiVRdQLc7rf1rNgwKrgyQy5U3QI4lBSfOy3PKcyVkFP5F08h1wKvRxs34KlbgSHsN6ZL%2FMEXx2H0SpmmXBIKtWgOrEse2TfnGgYBcDyqdWLjdWgB3DUmmOdtm46XwvSP8efVWzkX01TM4RicthxPdYMotOlMgL5J5OScd5gPcDsyDchmEOwpTMIyxosQGOqUBCnt%2FR87byI3cyTbCwBG5lUqUYScUszaJO6YpliXqtGREmaamzkRm4pgo4uaZ9mpEBmWsMWXSwVomK4XvyyeQ5jhKL%2FtayuA8gA25cb%2FjZCaPnEG%2B6xgdyL6vk9uMxXC%2FvtrKu0jhMeb2uj76JA%2FNnMgxdPWWVz2TxRMZ9EhMYXw%2F0V%2FNPPsxqTVvktpV%2BrLs7ATgyqC559Ft7yCQ6RedOTYVbIKu&X-Amz-Signature=cec2888a39cadb2131f284becb13a478e44dc101ce1d401209f3572889308f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBHN7WI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDyFe3tE24DEjhTG8mcTYJbmybkrEo6ol%2BAr%2F%2FzV1fJWAIhAJI1vecuX019x3unLUJ9heEn3UKg4t7sw400UQZGeQ6gKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO225DALz75yXODLcq3AM8PstoaKNudW3Qh6g5TyHHVWQS5709fiO3WWECjMdywzMlLcowg4YuYptxS%2Fh9M0uExLFnYitogngfiYbemIVw2Ll9PDfmgwBsujvfSsOlNiGUYWLmeFPwAEAMEo907vCDTWgdZzKomUurF%2BXJKIAhawF2aLPWaGGZT%2BvPl63B1Vz14Faxv3hZhUrm0X715AHIh95EVmqvkxeXvkZ7u%2Bn%2B69IstP6kzirVSJQAqEeScW%2F4cPoGHx1q%2BHHbLUHm%2Fded4D%2B1zA%2FG8CLRY38ETN3m54CJVOGyH%2Bk2ssZxy975IQNSR1QhxiXgpzqZEYZl7HuAMk7IWaZtlCrWCm%2FSCHG2WrLM5PcGJr3iBI1ZFX39nyJNWZUYvhSBbx5F1NMtQuqyahXbzfS6IQS%2BYa6XwIlxxhIw%2FLcsm6sPsH0pmw8s5DY4e79K7AiG5qmg5VpM7KZ7RtrQQUleirtlqFo5izxRG4aLIzb%2BDeRKNYjGqkLNuxpYf2r5UPr6ByuX%2BtBBU1cMJa%2F%2FCdyNDpVJZOqArRma8vN3pBLwt%2BEUx2pfG3l0Ab%2BXz2nt4o3SsaXrSn0WC882JbljWeIfZFQ6vK6nDQ3lJUY%2B3dDAFkMp0Wb0Qn2B04zwjQEDGiLX0SbkZjDnsKLEBjqkAefjs3aLen%2FqgNqGgOUIOKlbqmYnFPNQg7bUK41aa7N%2FH5BztLZ6GWZpqXlxObcyl9z8BJx86cP7JOHGmE45JJn09Zv9z7T5EqKt1bFLkyj9dsiLWuyGc9txaauRaDvMoQtSjanCuwk%2Bw0jN9C6%2BHl0jjavk7Q9NQdOa937lvxXO9F%2BUzb8j6%2FNkd2AXFd6TdVrHT8VKm16ga%2BbJH26r%2F4g9OLl%2B&X-Amz-Signature=627e5d369d6e2133e371262b2518f99af1888e94d63abb17b7edf459c895ac7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAWHWJT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFwdGdgsq2s%2BWGygCB%2BfUCKakRzdyTevUZoH0eBqaiuXAiApOVcba4d%2BHq6y3K7Br76GErAKDl%2BxLvGbrSi4v5%2FC%2FCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcBwAwgJVpAFWuwqKtwDpQKnd0QQzVLVw8KT86O8xQKne35CuATZJaar15rkF8XYuErZfcR3OwY5L3qk9%2BzDbFcS8xS%2BhQYG%2FERlWEtPOBBNbTiJjLVYJsP576FdoAdVDzwYueLfIg7gey0FkDq20OxP0vLjMbH8370kN2jqb0a90iHrh9AbxVHgNdHgP4kn4KyaI9rOEO9v405Z3uM279Aq2VEwB4ve5wR2wDY9zBRpOlNkUjqTe%2Bp8upg7VvZkQsaWCN1MomJz4YcHNUjTVH%2BYCsAJUWYp1r%2F3fn954XO%2FA4jJ%2BApMhEsUn64RjMoJpwWdHfYKjk2qD1z00nL1JQGpIAWnzxcztnRMoaUMt2jcVIDMjtRhBy8FySGIHUgRPqWARIaACj6LqzedX23S625cfdB9JSskssKEbOwcvPiCwgf0ZIqIx3o%2FkiuycHZXxP55Pq%2FG%2BcZ0C%2Fk2jiNn8s1Ht%2Fc%2BDpm%2BCaLGnfuV7S4BnOwwUgRgStlg0f7XZCx5TQqDrOt2l38gRd2BLGQ9nqU52mmKkBUCOB5jG7F59SPa%2BLWDqSApjjyrSdWZ7Hpqn7APOWXWaNJukxiHDjdxUSsTZ5XIDcSvPrjQbhVt8AqhLPdsQBoiUhnq3AqQUEIrttoA2j6iSFET%2BvEw9rCixAY6pgGPKAW3qOV8uYdVyFMjOQJIT6Z8EkJmrF37UxfO4p7Wgh%2BLSQFyxJVQZg3kju%2FkPFdoTzaH7OsuGHj1hOrt49feI5dJMFMnrzazxgABBoDIbYnonXzY9RAgYAwjdqTu4g4e1xoDyxety0zDEWh7w15OQCpqcInSIiDcUiRm1IUDGRiAtjB60IBAz%2BfBYSszT0BBPX6Dn2EiNKi5beECD%2BqPkDOxgMA6&X-Amz-Signature=b836ae2b555bc48d1f49276ae32107e185fda5541a470c4c5626b5f10840e863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAWHWJT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFwdGdgsq2s%2BWGygCB%2BfUCKakRzdyTevUZoH0eBqaiuXAiApOVcba4d%2BHq6y3K7Br76GErAKDl%2BxLvGbrSi4v5%2FC%2FCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcBwAwgJVpAFWuwqKtwDpQKnd0QQzVLVw8KT86O8xQKne35CuATZJaar15rkF8XYuErZfcR3OwY5L3qk9%2BzDbFcS8xS%2BhQYG%2FERlWEtPOBBNbTiJjLVYJsP576FdoAdVDzwYueLfIg7gey0FkDq20OxP0vLjMbH8370kN2jqb0a90iHrh9AbxVHgNdHgP4kn4KyaI9rOEO9v405Z3uM279Aq2VEwB4ve5wR2wDY9zBRpOlNkUjqTe%2Bp8upg7VvZkQsaWCN1MomJz4YcHNUjTVH%2BYCsAJUWYp1r%2F3fn954XO%2FA4jJ%2BApMhEsUn64RjMoJpwWdHfYKjk2qD1z00nL1JQGpIAWnzxcztnRMoaUMt2jcVIDMjtRhBy8FySGIHUgRPqWARIaACj6LqzedX23S625cfdB9JSskssKEbOwcvPiCwgf0ZIqIx3o%2FkiuycHZXxP55Pq%2FG%2BcZ0C%2Fk2jiNn8s1Ht%2Fc%2BDpm%2BCaLGnfuV7S4BnOwwUgRgStlg0f7XZCx5TQqDrOt2l38gRd2BLGQ9nqU52mmKkBUCOB5jG7F59SPa%2BLWDqSApjjyrSdWZ7Hpqn7APOWXWaNJukxiHDjdxUSsTZ5XIDcSvPrjQbhVt8AqhLPdsQBoiUhnq3AqQUEIrttoA2j6iSFET%2BvEw9rCixAY6pgGPKAW3qOV8uYdVyFMjOQJIT6Z8EkJmrF37UxfO4p7Wgh%2BLSQFyxJVQZg3kju%2FkPFdoTzaH7OsuGHj1hOrt49feI5dJMFMnrzazxgABBoDIbYnonXzY9RAgYAwjdqTu4g4e1xoDyxety0zDEWh7w15OQCpqcInSIiDcUiRm1IUDGRiAtjB60IBAz%2BfBYSszT0BBPX6Dn2EiNKi5beECD%2BqPkDOxgMA6&X-Amz-Signature=e3902a79e1bc10d246577e965576d24f6d28926b703ffed6e399e928fa1ffc6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAWHWJT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFwdGdgsq2s%2BWGygCB%2BfUCKakRzdyTevUZoH0eBqaiuXAiApOVcba4d%2BHq6y3K7Br76GErAKDl%2BxLvGbrSi4v5%2FC%2FCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcBwAwgJVpAFWuwqKtwDpQKnd0QQzVLVw8KT86O8xQKne35CuATZJaar15rkF8XYuErZfcR3OwY5L3qk9%2BzDbFcS8xS%2BhQYG%2FERlWEtPOBBNbTiJjLVYJsP576FdoAdVDzwYueLfIg7gey0FkDq20OxP0vLjMbH8370kN2jqb0a90iHrh9AbxVHgNdHgP4kn4KyaI9rOEO9v405Z3uM279Aq2VEwB4ve5wR2wDY9zBRpOlNkUjqTe%2Bp8upg7VvZkQsaWCN1MomJz4YcHNUjTVH%2BYCsAJUWYp1r%2F3fn954XO%2FA4jJ%2BApMhEsUn64RjMoJpwWdHfYKjk2qD1z00nL1JQGpIAWnzxcztnRMoaUMt2jcVIDMjtRhBy8FySGIHUgRPqWARIaACj6LqzedX23S625cfdB9JSskssKEbOwcvPiCwgf0ZIqIx3o%2FkiuycHZXxP55Pq%2FG%2BcZ0C%2Fk2jiNn8s1Ht%2Fc%2BDpm%2BCaLGnfuV7S4BnOwwUgRgStlg0f7XZCx5TQqDrOt2l38gRd2BLGQ9nqU52mmKkBUCOB5jG7F59SPa%2BLWDqSApjjyrSdWZ7Hpqn7APOWXWaNJukxiHDjdxUSsTZ5XIDcSvPrjQbhVt8AqhLPdsQBoiUhnq3AqQUEIrttoA2j6iSFET%2BvEw9rCixAY6pgGPKAW3qOV8uYdVyFMjOQJIT6Z8EkJmrF37UxfO4p7Wgh%2BLSQFyxJVQZg3kju%2FkPFdoTzaH7OsuGHj1hOrt49feI5dJMFMnrzazxgABBoDIbYnonXzY9RAgYAwjdqTu4g4e1xoDyxety0zDEWh7w15OQCpqcInSIiDcUiRm1IUDGRiAtjB60IBAz%2BfBYSszT0BBPX6Dn2EiNKi5beECD%2BqPkDOxgMA6&X-Amz-Signature=f1640da2c28eb7e5e216976d59911fa2c6d80d847a567027bbbb1a1bc8f79d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAWHWJT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFwdGdgsq2s%2BWGygCB%2BfUCKakRzdyTevUZoH0eBqaiuXAiApOVcba4d%2BHq6y3K7Br76GErAKDl%2BxLvGbrSi4v5%2FC%2FCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcBwAwgJVpAFWuwqKtwDpQKnd0QQzVLVw8KT86O8xQKne35CuATZJaar15rkF8XYuErZfcR3OwY5L3qk9%2BzDbFcS8xS%2BhQYG%2FERlWEtPOBBNbTiJjLVYJsP576FdoAdVDzwYueLfIg7gey0FkDq20OxP0vLjMbH8370kN2jqb0a90iHrh9AbxVHgNdHgP4kn4KyaI9rOEO9v405Z3uM279Aq2VEwB4ve5wR2wDY9zBRpOlNkUjqTe%2Bp8upg7VvZkQsaWCN1MomJz4YcHNUjTVH%2BYCsAJUWYp1r%2F3fn954XO%2FA4jJ%2BApMhEsUn64RjMoJpwWdHfYKjk2qD1z00nL1JQGpIAWnzxcztnRMoaUMt2jcVIDMjtRhBy8FySGIHUgRPqWARIaACj6LqzedX23S625cfdB9JSskssKEbOwcvPiCwgf0ZIqIx3o%2FkiuycHZXxP55Pq%2FG%2BcZ0C%2Fk2jiNn8s1Ht%2Fc%2BDpm%2BCaLGnfuV7S4BnOwwUgRgStlg0f7XZCx5TQqDrOt2l38gRd2BLGQ9nqU52mmKkBUCOB5jG7F59SPa%2BLWDqSApjjyrSdWZ7Hpqn7APOWXWaNJukxiHDjdxUSsTZ5XIDcSvPrjQbhVt8AqhLPdsQBoiUhnq3AqQUEIrttoA2j6iSFET%2BvEw9rCixAY6pgGPKAW3qOV8uYdVyFMjOQJIT6Z8EkJmrF37UxfO4p7Wgh%2BLSQFyxJVQZg3kju%2FkPFdoTzaH7OsuGHj1hOrt49feI5dJMFMnrzazxgABBoDIbYnonXzY9RAgYAwjdqTu4g4e1xoDyxety0zDEWh7w15OQCpqcInSIiDcUiRm1IUDGRiAtjB60IBAz%2BfBYSszT0BBPX6Dn2EiNKi5beECD%2BqPkDOxgMA6&X-Amz-Signature=a89a87c3fb03c27f78d8aca836eb65552450678d0200087de50d8724e5d27c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAWHWJT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFwdGdgsq2s%2BWGygCB%2BfUCKakRzdyTevUZoH0eBqaiuXAiApOVcba4d%2BHq6y3K7Br76GErAKDl%2BxLvGbrSi4v5%2FC%2FCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcBwAwgJVpAFWuwqKtwDpQKnd0QQzVLVw8KT86O8xQKne35CuATZJaar15rkF8XYuErZfcR3OwY5L3qk9%2BzDbFcS8xS%2BhQYG%2FERlWEtPOBBNbTiJjLVYJsP576FdoAdVDzwYueLfIg7gey0FkDq20OxP0vLjMbH8370kN2jqb0a90iHrh9AbxVHgNdHgP4kn4KyaI9rOEO9v405Z3uM279Aq2VEwB4ve5wR2wDY9zBRpOlNkUjqTe%2Bp8upg7VvZkQsaWCN1MomJz4YcHNUjTVH%2BYCsAJUWYp1r%2F3fn954XO%2FA4jJ%2BApMhEsUn64RjMoJpwWdHfYKjk2qD1z00nL1JQGpIAWnzxcztnRMoaUMt2jcVIDMjtRhBy8FySGIHUgRPqWARIaACj6LqzedX23S625cfdB9JSskssKEbOwcvPiCwgf0ZIqIx3o%2FkiuycHZXxP55Pq%2FG%2BcZ0C%2Fk2jiNn8s1Ht%2Fc%2BDpm%2BCaLGnfuV7S4BnOwwUgRgStlg0f7XZCx5TQqDrOt2l38gRd2BLGQ9nqU52mmKkBUCOB5jG7F59SPa%2BLWDqSApjjyrSdWZ7Hpqn7APOWXWaNJukxiHDjdxUSsTZ5XIDcSvPrjQbhVt8AqhLPdsQBoiUhnq3AqQUEIrttoA2j6iSFET%2BvEw9rCixAY6pgGPKAW3qOV8uYdVyFMjOQJIT6Z8EkJmrF37UxfO4p7Wgh%2BLSQFyxJVQZg3kju%2FkPFdoTzaH7OsuGHj1hOrt49feI5dJMFMnrzazxgABBoDIbYnonXzY9RAgYAwjdqTu4g4e1xoDyxety0zDEWh7w15OQCpqcInSIiDcUiRm1IUDGRiAtjB60IBAz%2BfBYSszT0BBPX6Dn2EiNKi5beECD%2BqPkDOxgMA6&X-Amz-Signature=981263f4091812f7dd9bb1643cc539aeba13f68c2aa7b43ccfb7d539f23da04c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAWHWJT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFwdGdgsq2s%2BWGygCB%2BfUCKakRzdyTevUZoH0eBqaiuXAiApOVcba4d%2BHq6y3K7Br76GErAKDl%2BxLvGbrSi4v5%2FC%2FCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcBwAwgJVpAFWuwqKtwDpQKnd0QQzVLVw8KT86O8xQKne35CuATZJaar15rkF8XYuErZfcR3OwY5L3qk9%2BzDbFcS8xS%2BhQYG%2FERlWEtPOBBNbTiJjLVYJsP576FdoAdVDzwYueLfIg7gey0FkDq20OxP0vLjMbH8370kN2jqb0a90iHrh9AbxVHgNdHgP4kn4KyaI9rOEO9v405Z3uM279Aq2VEwB4ve5wR2wDY9zBRpOlNkUjqTe%2Bp8upg7VvZkQsaWCN1MomJz4YcHNUjTVH%2BYCsAJUWYp1r%2F3fn954XO%2FA4jJ%2BApMhEsUn64RjMoJpwWdHfYKjk2qD1z00nL1JQGpIAWnzxcztnRMoaUMt2jcVIDMjtRhBy8FySGIHUgRPqWARIaACj6LqzedX23S625cfdB9JSskssKEbOwcvPiCwgf0ZIqIx3o%2FkiuycHZXxP55Pq%2FG%2BcZ0C%2Fk2jiNn8s1Ht%2Fc%2BDpm%2BCaLGnfuV7S4BnOwwUgRgStlg0f7XZCx5TQqDrOt2l38gRd2BLGQ9nqU52mmKkBUCOB5jG7F59SPa%2BLWDqSApjjyrSdWZ7Hpqn7APOWXWaNJukxiHDjdxUSsTZ5XIDcSvPrjQbhVt8AqhLPdsQBoiUhnq3AqQUEIrttoA2j6iSFET%2BvEw9rCixAY6pgGPKAW3qOV8uYdVyFMjOQJIT6Z8EkJmrF37UxfO4p7Wgh%2BLSQFyxJVQZg3kju%2FkPFdoTzaH7OsuGHj1hOrt49feI5dJMFMnrzazxgABBoDIbYnonXzY9RAgYAwjdqTu4g4e1xoDyxety0zDEWh7w15OQCpqcInSIiDcUiRm1IUDGRiAtjB60IBAz%2BfBYSszT0BBPX6Dn2EiNKi5beECD%2BqPkDOxgMA6&X-Amz-Signature=3430baaafb5a4e1c443e8e278f472900e04db013428759890355e6d48d0d8f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAWHWJT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFwdGdgsq2s%2BWGygCB%2BfUCKakRzdyTevUZoH0eBqaiuXAiApOVcba4d%2BHq6y3K7Br76GErAKDl%2BxLvGbrSi4v5%2FC%2FCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcBwAwgJVpAFWuwqKtwDpQKnd0QQzVLVw8KT86O8xQKne35CuATZJaar15rkF8XYuErZfcR3OwY5L3qk9%2BzDbFcS8xS%2BhQYG%2FERlWEtPOBBNbTiJjLVYJsP576FdoAdVDzwYueLfIg7gey0FkDq20OxP0vLjMbH8370kN2jqb0a90iHrh9AbxVHgNdHgP4kn4KyaI9rOEO9v405Z3uM279Aq2VEwB4ve5wR2wDY9zBRpOlNkUjqTe%2Bp8upg7VvZkQsaWCN1MomJz4YcHNUjTVH%2BYCsAJUWYp1r%2F3fn954XO%2FA4jJ%2BApMhEsUn64RjMoJpwWdHfYKjk2qD1z00nL1JQGpIAWnzxcztnRMoaUMt2jcVIDMjtRhBy8FySGIHUgRPqWARIaACj6LqzedX23S625cfdB9JSskssKEbOwcvPiCwgf0ZIqIx3o%2FkiuycHZXxP55Pq%2FG%2BcZ0C%2Fk2jiNn8s1Ht%2Fc%2BDpm%2BCaLGnfuV7S4BnOwwUgRgStlg0f7XZCx5TQqDrOt2l38gRd2BLGQ9nqU52mmKkBUCOB5jG7F59SPa%2BLWDqSApjjyrSdWZ7Hpqn7APOWXWaNJukxiHDjdxUSsTZ5XIDcSvPrjQbhVt8AqhLPdsQBoiUhnq3AqQUEIrttoA2j6iSFET%2BvEw9rCixAY6pgGPKAW3qOV8uYdVyFMjOQJIT6Z8EkJmrF37UxfO4p7Wgh%2BLSQFyxJVQZg3kju%2FkPFdoTzaH7OsuGHj1hOrt49feI5dJMFMnrzazxgABBoDIbYnonXzY9RAgYAwjdqTu4g4e1xoDyxety0zDEWh7w15OQCpqcInSIiDcUiRm1IUDGRiAtjB60IBAz%2BfBYSszT0BBPX6Dn2EiNKi5beECD%2BqPkDOxgMA6&X-Amz-Signature=afdadaa6be2d9d0dd46a15bfb90670ed80f99c2d636a848a11c30b2e2c2a45ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USAWHWJT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIFwdGdgsq2s%2BWGygCB%2BfUCKakRzdyTevUZoH0eBqaiuXAiApOVcba4d%2BHq6y3K7Br76GErAKDl%2BxLvGbrSi4v5%2FC%2FCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdcBwAwgJVpAFWuwqKtwDpQKnd0QQzVLVw8KT86O8xQKne35CuATZJaar15rkF8XYuErZfcR3OwY5L3qk9%2BzDbFcS8xS%2BhQYG%2FERlWEtPOBBNbTiJjLVYJsP576FdoAdVDzwYueLfIg7gey0FkDq20OxP0vLjMbH8370kN2jqb0a90iHrh9AbxVHgNdHgP4kn4KyaI9rOEO9v405Z3uM279Aq2VEwB4ve5wR2wDY9zBRpOlNkUjqTe%2Bp8upg7VvZkQsaWCN1MomJz4YcHNUjTVH%2BYCsAJUWYp1r%2F3fn954XO%2FA4jJ%2BApMhEsUn64RjMoJpwWdHfYKjk2qD1z00nL1JQGpIAWnzxcztnRMoaUMt2jcVIDMjtRhBy8FySGIHUgRPqWARIaACj6LqzedX23S625cfdB9JSskssKEbOwcvPiCwgf0ZIqIx3o%2FkiuycHZXxP55Pq%2FG%2BcZ0C%2Fk2jiNn8s1Ht%2Fc%2BDpm%2BCaLGnfuV7S4BnOwwUgRgStlg0f7XZCx5TQqDrOt2l38gRd2BLGQ9nqU52mmKkBUCOB5jG7F59SPa%2BLWDqSApjjyrSdWZ7Hpqn7APOWXWaNJukxiHDjdxUSsTZ5XIDcSvPrjQbhVt8AqhLPdsQBoiUhnq3AqQUEIrttoA2j6iSFET%2BvEw9rCixAY6pgGPKAW3qOV8uYdVyFMjOQJIT6Z8EkJmrF37UxfO4p7Wgh%2BLSQFyxJVQZg3kju%2FkPFdoTzaH7OsuGHj1hOrt49feI5dJMFMnrzazxgABBoDIbYnonXzY9RAgYAwjdqTu4g4e1xoDyxety0zDEWh7w15OQCpqcInSIiDcUiRm1IUDGRiAtjB60IBAz%2BfBYSszT0BBPX6Dn2EiNKi5beECD%2BqPkDOxgMA6&X-Amz-Signature=33985b66b3b3d1e843895d5705ba076987d7dfae61ffa1d379dc9e6bf6a9616c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
