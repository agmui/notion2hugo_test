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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASQYJQ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD8nh0XZWqiuD4jpkBGDi5ueVrVZGXChd5%2BkvYq7YQT2gIgZ8KvZ51d2pg5505KVgaleL6siAFrHv8DZQ5d37EJND8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIx%2B%2FhMAXxAEod9%2FCrcAyAF%2BmXksxj3xADSefl58TJUUb%2FLbuCbp9AUoe8R7Uzbr%2Bd%2BSRra7%2Bk4%2BHFWbYB%2BBglFeP%2Bi3APd11NFXf1LiejgQ7ICb2bw4Nkf7zeerMyOna%2FnGkNk%2BDSz4niMQLPUSTQUm%2BwvJP%2B%2BklnNRqQvreJ63TIVF0EnDz7bmcMKvTH2aKZUCxX5lqjA1IWTafwMMs7nRKpVqX%2BuENGVItyQO31vig8kHIbvVkmi5mUusDVJfcOniyiaZ9uuM09gbyGAoalTLaclWJtL80RZfwlmGiVyy1ITLFSZx7z5qbR4JERMV169Gli%2FdQq7Rwat4AbbdzD6ydTBRgDkYDwubzOtEbDIHDPEvMoXo3XFxh%2BVayuAr5dRj12UN2ofe9YuoIgxw1a5Wv8IHXROwrJmRZDudAxMwKWZGkN6ms%2BL3dN5ddx9m1Z2rVZpk%2BQhu4WcuEEpdPiYacafNvTYYk30Wv5%2Bd%2BGAq7guvj%2Bn%2F7tQflBf0H%2F4%2FCUDKGiIC%2BRytTbSui3wL2W0HRip9hDG5RTVoxOAVq3RapAMKe7455dbvs9tfsrMJCJNtpADfySK6ECPJ5TZ6ZS9jgDDqKT8ECP3mM7EWFURY27MkynRcT63ZqZh0OcIHqGxApFCVWGu7tJyMOTt08QGOqUBtjJbGh37kUoGJjSrlzNNkvk%2BlmZwdiQwr2u731t8xhb3bq4x99rTIovU7%2Ba5%2FuC9lQtkeupV%2BYZ0CyBnc7588JNKP1ed8%2F%2BHsbrsfM%2FmeY6077qXUbfCiGMZFnlSFGGASSP3ZOi4KYy3G1dSrNRIvSTjf%2FA%2F5pyiad3YkUQ%2FKgwnzFBSLYqmpH6EHWrEPvFstNqtP%2BDIJKeciKMHHhwc7WIbP3Je&X-Amz-Signature=f75259a7f798a79f3f3c02c93914099325920326538d9202c1d865dd64d4fb23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASQYJQ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD8nh0XZWqiuD4jpkBGDi5ueVrVZGXChd5%2BkvYq7YQT2gIgZ8KvZ51d2pg5505KVgaleL6siAFrHv8DZQ5d37EJND8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIx%2B%2FhMAXxAEod9%2FCrcAyAF%2BmXksxj3xADSefl58TJUUb%2FLbuCbp9AUoe8R7Uzbr%2Bd%2BSRra7%2Bk4%2BHFWbYB%2BBglFeP%2Bi3APd11NFXf1LiejgQ7ICb2bw4Nkf7zeerMyOna%2FnGkNk%2BDSz4niMQLPUSTQUm%2BwvJP%2B%2BklnNRqQvreJ63TIVF0EnDz7bmcMKvTH2aKZUCxX5lqjA1IWTafwMMs7nRKpVqX%2BuENGVItyQO31vig8kHIbvVkmi5mUusDVJfcOniyiaZ9uuM09gbyGAoalTLaclWJtL80RZfwlmGiVyy1ITLFSZx7z5qbR4JERMV169Gli%2FdQq7Rwat4AbbdzD6ydTBRgDkYDwubzOtEbDIHDPEvMoXo3XFxh%2BVayuAr5dRj12UN2ofe9YuoIgxw1a5Wv8IHXROwrJmRZDudAxMwKWZGkN6ms%2BL3dN5ddx9m1Z2rVZpk%2BQhu4WcuEEpdPiYacafNvTYYk30Wv5%2Bd%2BGAq7guvj%2Bn%2F7tQflBf0H%2F4%2FCUDKGiIC%2BRytTbSui3wL2W0HRip9hDG5RTVoxOAVq3RapAMKe7455dbvs9tfsrMJCJNtpADfySK6ECPJ5TZ6ZS9jgDDqKT8ECP3mM7EWFURY27MkynRcT63ZqZh0OcIHqGxApFCVWGu7tJyMOTt08QGOqUBtjJbGh37kUoGJjSrlzNNkvk%2BlmZwdiQwr2u731t8xhb3bq4x99rTIovU7%2Ba5%2FuC9lQtkeupV%2BYZ0CyBnc7588JNKP1ed8%2F%2BHsbrsfM%2FmeY6077qXUbfCiGMZFnlSFGGASSP3ZOi4KYy3G1dSrNRIvSTjf%2FA%2F5pyiad3YkUQ%2FKgwnzFBSLYqmpH6EHWrEPvFstNqtP%2BDIJKeciKMHHhwc7WIbP3Je&X-Amz-Signature=b867432e6beb7812d540d4936f538a1bf3954750a978c155320d701c9feb21d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASQYJQ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD8nh0XZWqiuD4jpkBGDi5ueVrVZGXChd5%2BkvYq7YQT2gIgZ8KvZ51d2pg5505KVgaleL6siAFrHv8DZQ5d37EJND8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIx%2B%2FhMAXxAEod9%2FCrcAyAF%2BmXksxj3xADSefl58TJUUb%2FLbuCbp9AUoe8R7Uzbr%2Bd%2BSRra7%2Bk4%2BHFWbYB%2BBglFeP%2Bi3APd11NFXf1LiejgQ7ICb2bw4Nkf7zeerMyOna%2FnGkNk%2BDSz4niMQLPUSTQUm%2BwvJP%2B%2BklnNRqQvreJ63TIVF0EnDz7bmcMKvTH2aKZUCxX5lqjA1IWTafwMMs7nRKpVqX%2BuENGVItyQO31vig8kHIbvVkmi5mUusDVJfcOniyiaZ9uuM09gbyGAoalTLaclWJtL80RZfwlmGiVyy1ITLFSZx7z5qbR4JERMV169Gli%2FdQq7Rwat4AbbdzD6ydTBRgDkYDwubzOtEbDIHDPEvMoXo3XFxh%2BVayuAr5dRj12UN2ofe9YuoIgxw1a5Wv8IHXROwrJmRZDudAxMwKWZGkN6ms%2BL3dN5ddx9m1Z2rVZpk%2BQhu4WcuEEpdPiYacafNvTYYk30Wv5%2Bd%2BGAq7guvj%2Bn%2F7tQflBf0H%2F4%2FCUDKGiIC%2BRytTbSui3wL2W0HRip9hDG5RTVoxOAVq3RapAMKe7455dbvs9tfsrMJCJNtpADfySK6ECPJ5TZ6ZS9jgDDqKT8ECP3mM7EWFURY27MkynRcT63ZqZh0OcIHqGxApFCVWGu7tJyMOTt08QGOqUBtjJbGh37kUoGJjSrlzNNkvk%2BlmZwdiQwr2u731t8xhb3bq4x99rTIovU7%2Ba5%2FuC9lQtkeupV%2BYZ0CyBnc7588JNKP1ed8%2F%2BHsbrsfM%2FmeY6077qXUbfCiGMZFnlSFGGASSP3ZOi4KYy3G1dSrNRIvSTjf%2FA%2F5pyiad3YkUQ%2FKgwnzFBSLYqmpH6EHWrEPvFstNqtP%2BDIJKeciKMHHhwc7WIbP3Je&X-Amz-Signature=29b7c56cffb47f0b6e49ca8e4d63eddb8095bbc3d8c42c60aa3cc41bc009436e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASQYJQ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD8nh0XZWqiuD4jpkBGDi5ueVrVZGXChd5%2BkvYq7YQT2gIgZ8KvZ51d2pg5505KVgaleL6siAFrHv8DZQ5d37EJND8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIx%2B%2FhMAXxAEod9%2FCrcAyAF%2BmXksxj3xADSefl58TJUUb%2FLbuCbp9AUoe8R7Uzbr%2Bd%2BSRra7%2Bk4%2BHFWbYB%2BBglFeP%2Bi3APd11NFXf1LiejgQ7ICb2bw4Nkf7zeerMyOna%2FnGkNk%2BDSz4niMQLPUSTQUm%2BwvJP%2B%2BklnNRqQvreJ63TIVF0EnDz7bmcMKvTH2aKZUCxX5lqjA1IWTafwMMs7nRKpVqX%2BuENGVItyQO31vig8kHIbvVkmi5mUusDVJfcOniyiaZ9uuM09gbyGAoalTLaclWJtL80RZfwlmGiVyy1ITLFSZx7z5qbR4JERMV169Gli%2FdQq7Rwat4AbbdzD6ydTBRgDkYDwubzOtEbDIHDPEvMoXo3XFxh%2BVayuAr5dRj12UN2ofe9YuoIgxw1a5Wv8IHXROwrJmRZDudAxMwKWZGkN6ms%2BL3dN5ddx9m1Z2rVZpk%2BQhu4WcuEEpdPiYacafNvTYYk30Wv5%2Bd%2BGAq7guvj%2Bn%2F7tQflBf0H%2F4%2FCUDKGiIC%2BRytTbSui3wL2W0HRip9hDG5RTVoxOAVq3RapAMKe7455dbvs9tfsrMJCJNtpADfySK6ECPJ5TZ6ZS9jgDDqKT8ECP3mM7EWFURY27MkynRcT63ZqZh0OcIHqGxApFCVWGu7tJyMOTt08QGOqUBtjJbGh37kUoGJjSrlzNNkvk%2BlmZwdiQwr2u731t8xhb3bq4x99rTIovU7%2Ba5%2FuC9lQtkeupV%2BYZ0CyBnc7588JNKP1ed8%2F%2BHsbrsfM%2FmeY6077qXUbfCiGMZFnlSFGGASSP3ZOi4KYy3G1dSrNRIvSTjf%2FA%2F5pyiad3YkUQ%2FKgwnzFBSLYqmpH6EHWrEPvFstNqtP%2BDIJKeciKMHHhwc7WIbP3Je&X-Amz-Signature=deb6e0f956aa2a5dfb715e2e99ab1fe4a6ba858bac354335da1a5843083498ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASQYJQ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD8nh0XZWqiuD4jpkBGDi5ueVrVZGXChd5%2BkvYq7YQT2gIgZ8KvZ51d2pg5505KVgaleL6siAFrHv8DZQ5d37EJND8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIx%2B%2FhMAXxAEod9%2FCrcAyAF%2BmXksxj3xADSefl58TJUUb%2FLbuCbp9AUoe8R7Uzbr%2Bd%2BSRra7%2Bk4%2BHFWbYB%2BBglFeP%2Bi3APd11NFXf1LiejgQ7ICb2bw4Nkf7zeerMyOna%2FnGkNk%2BDSz4niMQLPUSTQUm%2BwvJP%2B%2BklnNRqQvreJ63TIVF0EnDz7bmcMKvTH2aKZUCxX5lqjA1IWTafwMMs7nRKpVqX%2BuENGVItyQO31vig8kHIbvVkmi5mUusDVJfcOniyiaZ9uuM09gbyGAoalTLaclWJtL80RZfwlmGiVyy1ITLFSZx7z5qbR4JERMV169Gli%2FdQq7Rwat4AbbdzD6ydTBRgDkYDwubzOtEbDIHDPEvMoXo3XFxh%2BVayuAr5dRj12UN2ofe9YuoIgxw1a5Wv8IHXROwrJmRZDudAxMwKWZGkN6ms%2BL3dN5ddx9m1Z2rVZpk%2BQhu4WcuEEpdPiYacafNvTYYk30Wv5%2Bd%2BGAq7guvj%2Bn%2F7tQflBf0H%2F4%2FCUDKGiIC%2BRytTbSui3wL2W0HRip9hDG5RTVoxOAVq3RapAMKe7455dbvs9tfsrMJCJNtpADfySK6ECPJ5TZ6ZS9jgDDqKT8ECP3mM7EWFURY27MkynRcT63ZqZh0OcIHqGxApFCVWGu7tJyMOTt08QGOqUBtjJbGh37kUoGJjSrlzNNkvk%2BlmZwdiQwr2u731t8xhb3bq4x99rTIovU7%2Ba5%2FuC9lQtkeupV%2BYZ0CyBnc7588JNKP1ed8%2F%2BHsbrsfM%2FmeY6077qXUbfCiGMZFnlSFGGASSP3ZOi4KYy3G1dSrNRIvSTjf%2FA%2F5pyiad3YkUQ%2FKgwnzFBSLYqmpH6EHWrEPvFstNqtP%2BDIJKeciKMHHhwc7WIbP3Je&X-Amz-Signature=bd314cb94e73bdb336f5c63aabacb003bff538ebfb23ea97682960fa2890a1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASQYJQ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD8nh0XZWqiuD4jpkBGDi5ueVrVZGXChd5%2BkvYq7YQT2gIgZ8KvZ51d2pg5505KVgaleL6siAFrHv8DZQ5d37EJND8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIx%2B%2FhMAXxAEod9%2FCrcAyAF%2BmXksxj3xADSefl58TJUUb%2FLbuCbp9AUoe8R7Uzbr%2Bd%2BSRra7%2Bk4%2BHFWbYB%2BBglFeP%2Bi3APd11NFXf1LiejgQ7ICb2bw4Nkf7zeerMyOna%2FnGkNk%2BDSz4niMQLPUSTQUm%2BwvJP%2B%2BklnNRqQvreJ63TIVF0EnDz7bmcMKvTH2aKZUCxX5lqjA1IWTafwMMs7nRKpVqX%2BuENGVItyQO31vig8kHIbvVkmi5mUusDVJfcOniyiaZ9uuM09gbyGAoalTLaclWJtL80RZfwlmGiVyy1ITLFSZx7z5qbR4JERMV169Gli%2FdQq7Rwat4AbbdzD6ydTBRgDkYDwubzOtEbDIHDPEvMoXo3XFxh%2BVayuAr5dRj12UN2ofe9YuoIgxw1a5Wv8IHXROwrJmRZDudAxMwKWZGkN6ms%2BL3dN5ddx9m1Z2rVZpk%2BQhu4WcuEEpdPiYacafNvTYYk30Wv5%2Bd%2BGAq7guvj%2Bn%2F7tQflBf0H%2F4%2FCUDKGiIC%2BRytTbSui3wL2W0HRip9hDG5RTVoxOAVq3RapAMKe7455dbvs9tfsrMJCJNtpADfySK6ECPJ5TZ6ZS9jgDDqKT8ECP3mM7EWFURY27MkynRcT63ZqZh0OcIHqGxApFCVWGu7tJyMOTt08QGOqUBtjJbGh37kUoGJjSrlzNNkvk%2BlmZwdiQwr2u731t8xhb3bq4x99rTIovU7%2Ba5%2FuC9lQtkeupV%2BYZ0CyBnc7588JNKP1ed8%2F%2BHsbrsfM%2FmeY6077qXUbfCiGMZFnlSFGGASSP3ZOi4KYy3G1dSrNRIvSTjf%2FA%2F5pyiad3YkUQ%2FKgwnzFBSLYqmpH6EHWrEPvFstNqtP%2BDIJKeciKMHHhwc7WIbP3Je&X-Amz-Signature=c302c92e8679a9c41d18439287a4df921eefab8db34b6b8d2329cd32191f942e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASQYJQ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD8nh0XZWqiuD4jpkBGDi5ueVrVZGXChd5%2BkvYq7YQT2gIgZ8KvZ51d2pg5505KVgaleL6siAFrHv8DZQ5d37EJND8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIx%2B%2FhMAXxAEod9%2FCrcAyAF%2BmXksxj3xADSefl58TJUUb%2FLbuCbp9AUoe8R7Uzbr%2Bd%2BSRra7%2Bk4%2BHFWbYB%2BBglFeP%2Bi3APd11NFXf1LiejgQ7ICb2bw4Nkf7zeerMyOna%2FnGkNk%2BDSz4niMQLPUSTQUm%2BwvJP%2B%2BklnNRqQvreJ63TIVF0EnDz7bmcMKvTH2aKZUCxX5lqjA1IWTafwMMs7nRKpVqX%2BuENGVItyQO31vig8kHIbvVkmi5mUusDVJfcOniyiaZ9uuM09gbyGAoalTLaclWJtL80RZfwlmGiVyy1ITLFSZx7z5qbR4JERMV169Gli%2FdQq7Rwat4AbbdzD6ydTBRgDkYDwubzOtEbDIHDPEvMoXo3XFxh%2BVayuAr5dRj12UN2ofe9YuoIgxw1a5Wv8IHXROwrJmRZDudAxMwKWZGkN6ms%2BL3dN5ddx9m1Z2rVZpk%2BQhu4WcuEEpdPiYacafNvTYYk30Wv5%2Bd%2BGAq7guvj%2Bn%2F7tQflBf0H%2F4%2FCUDKGiIC%2BRytTbSui3wL2W0HRip9hDG5RTVoxOAVq3RapAMKe7455dbvs9tfsrMJCJNtpADfySK6ECPJ5TZ6ZS9jgDDqKT8ECP3mM7EWFURY27MkynRcT63ZqZh0OcIHqGxApFCVWGu7tJyMOTt08QGOqUBtjJbGh37kUoGJjSrlzNNkvk%2BlmZwdiQwr2u731t8xhb3bq4x99rTIovU7%2Ba5%2FuC9lQtkeupV%2BYZ0CyBnc7588JNKP1ed8%2F%2BHsbrsfM%2FmeY6077qXUbfCiGMZFnlSFGGASSP3ZOi4KYy3G1dSrNRIvSTjf%2FA%2F5pyiad3YkUQ%2FKgwnzFBSLYqmpH6EHWrEPvFstNqtP%2BDIJKeciKMHHhwc7WIbP3Je&X-Amz-Signature=8b0847c20278936a7721987843535b94985910f176cff6bfa88bd3b5599ec36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASQYJQ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD8nh0XZWqiuD4jpkBGDi5ueVrVZGXChd5%2BkvYq7YQT2gIgZ8KvZ51d2pg5505KVgaleL6siAFrHv8DZQ5d37EJND8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIx%2B%2FhMAXxAEod9%2FCrcAyAF%2BmXksxj3xADSefl58TJUUb%2FLbuCbp9AUoe8R7Uzbr%2Bd%2BSRra7%2Bk4%2BHFWbYB%2BBglFeP%2Bi3APd11NFXf1LiejgQ7ICb2bw4Nkf7zeerMyOna%2FnGkNk%2BDSz4niMQLPUSTQUm%2BwvJP%2B%2BklnNRqQvreJ63TIVF0EnDz7bmcMKvTH2aKZUCxX5lqjA1IWTafwMMs7nRKpVqX%2BuENGVItyQO31vig8kHIbvVkmi5mUusDVJfcOniyiaZ9uuM09gbyGAoalTLaclWJtL80RZfwlmGiVyy1ITLFSZx7z5qbR4JERMV169Gli%2FdQq7Rwat4AbbdzD6ydTBRgDkYDwubzOtEbDIHDPEvMoXo3XFxh%2BVayuAr5dRj12UN2ofe9YuoIgxw1a5Wv8IHXROwrJmRZDudAxMwKWZGkN6ms%2BL3dN5ddx9m1Z2rVZpk%2BQhu4WcuEEpdPiYacafNvTYYk30Wv5%2Bd%2BGAq7guvj%2Bn%2F7tQflBf0H%2F4%2FCUDKGiIC%2BRytTbSui3wL2W0HRip9hDG5RTVoxOAVq3RapAMKe7455dbvs9tfsrMJCJNtpADfySK6ECPJ5TZ6ZS9jgDDqKT8ECP3mM7EWFURY27MkynRcT63ZqZh0OcIHqGxApFCVWGu7tJyMOTt08QGOqUBtjJbGh37kUoGJjSrlzNNkvk%2BlmZwdiQwr2u731t8xhb3bq4x99rTIovU7%2Ba5%2FuC9lQtkeupV%2BYZ0CyBnc7588JNKP1ed8%2F%2BHsbrsfM%2FmeY6077qXUbfCiGMZFnlSFGGASSP3ZOi4KYy3G1dSrNRIvSTjf%2FA%2F5pyiad3YkUQ%2FKgwnzFBSLYqmpH6EHWrEPvFstNqtP%2BDIJKeciKMHHhwc7WIbP3Je&X-Amz-Signature=c287cdf0cba3482d55686715f2a12c712b85d9e066eac0264981b5a6af24ab5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASQYJQ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD8nh0XZWqiuD4jpkBGDi5ueVrVZGXChd5%2BkvYq7YQT2gIgZ8KvZ51d2pg5505KVgaleL6siAFrHv8DZQ5d37EJND8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIx%2B%2FhMAXxAEod9%2FCrcAyAF%2BmXksxj3xADSefl58TJUUb%2FLbuCbp9AUoe8R7Uzbr%2Bd%2BSRra7%2Bk4%2BHFWbYB%2BBglFeP%2Bi3APd11NFXf1LiejgQ7ICb2bw4Nkf7zeerMyOna%2FnGkNk%2BDSz4niMQLPUSTQUm%2BwvJP%2B%2BklnNRqQvreJ63TIVF0EnDz7bmcMKvTH2aKZUCxX5lqjA1IWTafwMMs7nRKpVqX%2BuENGVItyQO31vig8kHIbvVkmi5mUusDVJfcOniyiaZ9uuM09gbyGAoalTLaclWJtL80RZfwlmGiVyy1ITLFSZx7z5qbR4JERMV169Gli%2FdQq7Rwat4AbbdzD6ydTBRgDkYDwubzOtEbDIHDPEvMoXo3XFxh%2BVayuAr5dRj12UN2ofe9YuoIgxw1a5Wv8IHXROwrJmRZDudAxMwKWZGkN6ms%2BL3dN5ddx9m1Z2rVZpk%2BQhu4WcuEEpdPiYacafNvTYYk30Wv5%2Bd%2BGAq7guvj%2Bn%2F7tQflBf0H%2F4%2FCUDKGiIC%2BRytTbSui3wL2W0HRip9hDG5RTVoxOAVq3RapAMKe7455dbvs9tfsrMJCJNtpADfySK6ECPJ5TZ6ZS9jgDDqKT8ECP3mM7EWFURY27MkynRcT63ZqZh0OcIHqGxApFCVWGu7tJyMOTt08QGOqUBtjJbGh37kUoGJjSrlzNNkvk%2BlmZwdiQwr2u731t8xhb3bq4x99rTIovU7%2Ba5%2FuC9lQtkeupV%2BYZ0CyBnc7588JNKP1ed8%2F%2BHsbrsfM%2FmeY6077qXUbfCiGMZFnlSFGGASSP3ZOi4KYy3G1dSrNRIvSTjf%2FA%2F5pyiad3YkUQ%2FKgwnzFBSLYqmpH6EHWrEPvFstNqtP%2BDIJKeciKMHHhwc7WIbP3Je&X-Amz-Signature=46128d5c4e4c183beb910870a8143937ad6e67217a2acf90ef7829087152641b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WASQYJQ2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQD8nh0XZWqiuD4jpkBGDi5ueVrVZGXChd5%2BkvYq7YQT2gIgZ8KvZ51d2pg5505KVgaleL6siAFrHv8DZQ5d37EJND8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIx%2B%2FhMAXxAEod9%2FCrcAyAF%2BmXksxj3xADSefl58TJUUb%2FLbuCbp9AUoe8R7Uzbr%2Bd%2BSRra7%2Bk4%2BHFWbYB%2BBglFeP%2Bi3APd11NFXf1LiejgQ7ICb2bw4Nkf7zeerMyOna%2FnGkNk%2BDSz4niMQLPUSTQUm%2BwvJP%2B%2BklnNRqQvreJ63TIVF0EnDz7bmcMKvTH2aKZUCxX5lqjA1IWTafwMMs7nRKpVqX%2BuENGVItyQO31vig8kHIbvVkmi5mUusDVJfcOniyiaZ9uuM09gbyGAoalTLaclWJtL80RZfwlmGiVyy1ITLFSZx7z5qbR4JERMV169Gli%2FdQq7Rwat4AbbdzD6ydTBRgDkYDwubzOtEbDIHDPEvMoXo3XFxh%2BVayuAr5dRj12UN2ofe9YuoIgxw1a5Wv8IHXROwrJmRZDudAxMwKWZGkN6ms%2BL3dN5ddx9m1Z2rVZpk%2BQhu4WcuEEpdPiYacafNvTYYk30Wv5%2Bd%2BGAq7guvj%2Bn%2F7tQflBf0H%2F4%2FCUDKGiIC%2BRytTbSui3wL2W0HRip9hDG5RTVoxOAVq3RapAMKe7455dbvs9tfsrMJCJNtpADfySK6ECPJ5TZ6ZS9jgDDqKT8ECP3mM7EWFURY27MkynRcT63ZqZh0OcIHqGxApFCVWGu7tJyMOTt08QGOqUBtjJbGh37kUoGJjSrlzNNkvk%2BlmZwdiQwr2u731t8xhb3bq4x99rTIovU7%2Ba5%2FuC9lQtkeupV%2BYZ0CyBnc7588JNKP1ed8%2F%2BHsbrsfM%2FmeY6077qXUbfCiGMZFnlSFGGASSP3ZOi4KYy3G1dSrNRIvSTjf%2FA%2F5pyiad3YkUQ%2FKgwnzFBSLYqmpH6EHWrEPvFstNqtP%2BDIJKeciKMHHhwc7WIbP3Je&X-Amz-Signature=d6aa262efdb3a4687977c6b50ab4cf1e5011137db00e3b84b7a08006a0fb65cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QN6GNKR%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGAKB%2BEZjWamh9%2B29TtiUEFkVWEfy0y09qBwFsdNJlpuAiEAgQ3oKDYE6A1tt32CizJ%2BmFJP5tmoTS4mgQ7BhbX7jI8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgMGAg9mJvVb3d9TSrcA3pdqcdY1q8ihlp7dSbu%2FVIbXJ3dbul10ozEAniaXwnOb8O9unWJBYMDGrLBCrFDQXt6aT1cYq46Bbp%2BAefBYsZ%2BEmQdFDtT6VySgEXflhtN4WlhNZoIPev6CXyi8zhMxtGLRQgFFA3lokqp%2BD2XY9BqjdV0tmbx77XWYBoD9VQVqj%2FQ0Sdj0xNBHhhJR5eR3ZEUJW50Xzy2E%2BpM5rfGeFXNmAVWDKZDfFlw9U4nOb1REvLPD2cMTEWLQdjdu56kudMGasziqZmDPlIib02AAgUjTrkswu4xYEOWqjTXJhQDcLdQucmLjZcjT91kaVwDbnKprzvmFu%2FseaLFKh5tskzeybED0CYF4p9TGqSWLSE3tSb4aNRe91SXa1R6zH%2Bnfp2UMrvnnfbo90g3k1or1UOR5Zpb2qMMK5ba1S7iJq%2FNIUzL2d34ZEVs444vNIVmafGJAt6L8NzWqHqeMPly7jM%2FvOTs4nE%2BAg6nfO5T9tTvYpm17IaZhN5hSl44DFbQWzsD91BEPr%2B3f0dCHdE69rsJaGOsLES6CgX1%2Bdyd%2BEoZ%2F8uaOHZHWfoRwo0ifgFah3BZXAQNsxjKerYCj8VR7TC0k4V5TAALjWXhtLw%2BQsob1djiGb7ryETf7MHZMNLt08QGOqUBp7VOVDmzL8KJyHoZ5xqnGFcphfxGu7iarfNtBGRwbrJcg8YmVnczREkN1eEMQJJ3scYL1LQMj16JVFdj8WVi4%2FOtblN7%2B8J8FHqJflpj2Gx%2F5Zu3cB73WHH6MqDnuuIRO0AQhpNERvQO5Km2kyXhWM1BUbOZYy0hRQJ8tsEdh79YZ%2FHEJ75HMpFoUQ4Pekx572zrMtsqCU%2FGfPZj6WOleeX14tQg&X-Amz-Signature=285032358ce716883c813db38912f1a5989fa953091ebb6d350f7f746d57234f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PETXD2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGNP5EdQWjWiTI0NCPCfJJiqYFn8C5jmPm%2FUNUw8TqRiAiEAmKVGSvp9GRSCrZ6x9gfUo9qdBKSzmGqOPCwjriCwTDkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsVQt%2B%2FvclZ8LkyECrcA1VyVqhlJzQ6eKw0IQ%2BAWDOD9MB15%2FJ5PpsE0Yh32wstN1Uv5KnuDm%2BqqLGbRrntlFHzH0Oy3HM9Psxw6oSfLySAzmnaB%2Fd51q7S0W7Bt9222%2BQhdFqQsFhzO96V0IOp53A8zaE8YjWRjztzP%2FrpdXefoXlIDLb1Z67I91d7BwMbBnjSK2PiP%2BMigP4BJIYGKSLYpPFIMiREEoCGKMk%2B1r4X%2Bg4jAfodGVKDTmDuVC2iJl5SuhnBL6p81wyQXgI4S%2BvxaUuYEEfP3w7T7uPPJ4U%2FmMy0HliABQtsRese0KFtaW1QlRxdGa1UNV3HAWO7gDOGBedfwZLTgnWHRnrApTHFtIGeffBxWDk4RhgjcPltnwENd5OChmfn9Kn%2FKC1jXybpanmzHA3uG1OavMAzdNU1AjXHGpfD%2FbB%2BMv6veMxoq0b3cRlBqaQrUNuX1wyuaC82SbV5lASNCxgdyvWBeRmvyFTgDmzz1P6raIo7DhO2251PCIp2CfwroUkvci1Hv31XgX1QOZOE9FTTxp6fvynkbBgVrKWjZjPcEAqsQyya3qRlUMUP2JKA1NFymK9N5iapaeHRA8chbNZebsQslrtPjBZNpqFJ4y4oIUlGigwBJIkNlGATs9qxA%2BJaMIfu08QGOqUBZtxfn6FmdFEBdFW%2B%2Ff7rYNnmvG0jdHNpmKxc6SKkQ5BxDvg%2B75ZNgmqWxnp6FSO32UEX0JPCEPJAgmwyT6e%2BlG7LfNccn9onD2aJiQBoWDAy8T6d%2F3fqmkPorpmo%2BWiUhK%2FcLYqXE0laq5CUcSvu2LP%2BiGGIZIX2bqmfruCD1HvAJZLI%2F1HSBwE2F5jDhAiIZaeFPOBfYf1SbOSDv1%2BzBriOsHX4&X-Amz-Signature=ae3981b7d3d68ba6af1e2287e1ad795c2dd1e352a9c5ab6fa2e3ad178d971966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PETXD2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGNP5EdQWjWiTI0NCPCfJJiqYFn8C5jmPm%2FUNUw8TqRiAiEAmKVGSvp9GRSCrZ6x9gfUo9qdBKSzmGqOPCwjriCwTDkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsVQt%2B%2FvclZ8LkyECrcA1VyVqhlJzQ6eKw0IQ%2BAWDOD9MB15%2FJ5PpsE0Yh32wstN1Uv5KnuDm%2BqqLGbRrntlFHzH0Oy3HM9Psxw6oSfLySAzmnaB%2Fd51q7S0W7Bt9222%2BQhdFqQsFhzO96V0IOp53A8zaE8YjWRjztzP%2FrpdXefoXlIDLb1Z67I91d7BwMbBnjSK2PiP%2BMigP4BJIYGKSLYpPFIMiREEoCGKMk%2B1r4X%2Bg4jAfodGVKDTmDuVC2iJl5SuhnBL6p81wyQXgI4S%2BvxaUuYEEfP3w7T7uPPJ4U%2FmMy0HliABQtsRese0KFtaW1QlRxdGa1UNV3HAWO7gDOGBedfwZLTgnWHRnrApTHFtIGeffBxWDk4RhgjcPltnwENd5OChmfn9Kn%2FKC1jXybpanmzHA3uG1OavMAzdNU1AjXHGpfD%2FbB%2BMv6veMxoq0b3cRlBqaQrUNuX1wyuaC82SbV5lASNCxgdyvWBeRmvyFTgDmzz1P6raIo7DhO2251PCIp2CfwroUkvci1Hv31XgX1QOZOE9FTTxp6fvynkbBgVrKWjZjPcEAqsQyya3qRlUMUP2JKA1NFymK9N5iapaeHRA8chbNZebsQslrtPjBZNpqFJ4y4oIUlGigwBJIkNlGATs9qxA%2BJaMIfu08QGOqUBZtxfn6FmdFEBdFW%2B%2Ff7rYNnmvG0jdHNpmKxc6SKkQ5BxDvg%2B75ZNgmqWxnp6FSO32UEX0JPCEPJAgmwyT6e%2BlG7LfNccn9onD2aJiQBoWDAy8T6d%2F3fqmkPorpmo%2BWiUhK%2FcLYqXE0laq5CUcSvu2LP%2BiGGIZIX2bqmfruCD1HvAJZLI%2F1HSBwE2F5jDhAiIZaeFPOBfYf1SbOSDv1%2BzBriOsHX4&X-Amz-Signature=8895f6e1006a97b94bd3e62205f4066c3cc775e0bbdb14eccd71d03020227b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PETXD2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGNP5EdQWjWiTI0NCPCfJJiqYFn8C5jmPm%2FUNUw8TqRiAiEAmKVGSvp9GRSCrZ6x9gfUo9qdBKSzmGqOPCwjriCwTDkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsVQt%2B%2FvclZ8LkyECrcA1VyVqhlJzQ6eKw0IQ%2BAWDOD9MB15%2FJ5PpsE0Yh32wstN1Uv5KnuDm%2BqqLGbRrntlFHzH0Oy3HM9Psxw6oSfLySAzmnaB%2Fd51q7S0W7Bt9222%2BQhdFqQsFhzO96V0IOp53A8zaE8YjWRjztzP%2FrpdXefoXlIDLb1Z67I91d7BwMbBnjSK2PiP%2BMigP4BJIYGKSLYpPFIMiREEoCGKMk%2B1r4X%2Bg4jAfodGVKDTmDuVC2iJl5SuhnBL6p81wyQXgI4S%2BvxaUuYEEfP3w7T7uPPJ4U%2FmMy0HliABQtsRese0KFtaW1QlRxdGa1UNV3HAWO7gDOGBedfwZLTgnWHRnrApTHFtIGeffBxWDk4RhgjcPltnwENd5OChmfn9Kn%2FKC1jXybpanmzHA3uG1OavMAzdNU1AjXHGpfD%2FbB%2BMv6veMxoq0b3cRlBqaQrUNuX1wyuaC82SbV5lASNCxgdyvWBeRmvyFTgDmzz1P6raIo7DhO2251PCIp2CfwroUkvci1Hv31XgX1QOZOE9FTTxp6fvynkbBgVrKWjZjPcEAqsQyya3qRlUMUP2JKA1NFymK9N5iapaeHRA8chbNZebsQslrtPjBZNpqFJ4y4oIUlGigwBJIkNlGATs9qxA%2BJaMIfu08QGOqUBZtxfn6FmdFEBdFW%2B%2Ff7rYNnmvG0jdHNpmKxc6SKkQ5BxDvg%2B75ZNgmqWxnp6FSO32UEX0JPCEPJAgmwyT6e%2BlG7LfNccn9onD2aJiQBoWDAy8T6d%2F3fqmkPorpmo%2BWiUhK%2FcLYqXE0laq5CUcSvu2LP%2BiGGIZIX2bqmfruCD1HvAJZLI%2F1HSBwE2F5jDhAiIZaeFPOBfYf1SbOSDv1%2BzBriOsHX4&X-Amz-Signature=552010eca1a0f574acb69a3dab314bf319622d5e3b5d618523556bb1ecfe9e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PETXD2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGNP5EdQWjWiTI0NCPCfJJiqYFn8C5jmPm%2FUNUw8TqRiAiEAmKVGSvp9GRSCrZ6x9gfUo9qdBKSzmGqOPCwjriCwTDkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsVQt%2B%2FvclZ8LkyECrcA1VyVqhlJzQ6eKw0IQ%2BAWDOD9MB15%2FJ5PpsE0Yh32wstN1Uv5KnuDm%2BqqLGbRrntlFHzH0Oy3HM9Psxw6oSfLySAzmnaB%2Fd51q7S0W7Bt9222%2BQhdFqQsFhzO96V0IOp53A8zaE8YjWRjztzP%2FrpdXefoXlIDLb1Z67I91d7BwMbBnjSK2PiP%2BMigP4BJIYGKSLYpPFIMiREEoCGKMk%2B1r4X%2Bg4jAfodGVKDTmDuVC2iJl5SuhnBL6p81wyQXgI4S%2BvxaUuYEEfP3w7T7uPPJ4U%2FmMy0HliABQtsRese0KFtaW1QlRxdGa1UNV3HAWO7gDOGBedfwZLTgnWHRnrApTHFtIGeffBxWDk4RhgjcPltnwENd5OChmfn9Kn%2FKC1jXybpanmzHA3uG1OavMAzdNU1AjXHGpfD%2FbB%2BMv6veMxoq0b3cRlBqaQrUNuX1wyuaC82SbV5lASNCxgdyvWBeRmvyFTgDmzz1P6raIo7DhO2251PCIp2CfwroUkvci1Hv31XgX1QOZOE9FTTxp6fvynkbBgVrKWjZjPcEAqsQyya3qRlUMUP2JKA1NFymK9N5iapaeHRA8chbNZebsQslrtPjBZNpqFJ4y4oIUlGigwBJIkNlGATs9qxA%2BJaMIfu08QGOqUBZtxfn6FmdFEBdFW%2B%2Ff7rYNnmvG0jdHNpmKxc6SKkQ5BxDvg%2B75ZNgmqWxnp6FSO32UEX0JPCEPJAgmwyT6e%2BlG7LfNccn9onD2aJiQBoWDAy8T6d%2F3fqmkPorpmo%2BWiUhK%2FcLYqXE0laq5CUcSvu2LP%2BiGGIZIX2bqmfruCD1HvAJZLI%2F1HSBwE2F5jDhAiIZaeFPOBfYf1SbOSDv1%2BzBriOsHX4&X-Amz-Signature=9f91ad54b5e33b32af18445975a8f855a3afbbc830118e15ec784a55c12f9e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PETXD2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGNP5EdQWjWiTI0NCPCfJJiqYFn8C5jmPm%2FUNUw8TqRiAiEAmKVGSvp9GRSCrZ6x9gfUo9qdBKSzmGqOPCwjriCwTDkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsVQt%2B%2FvclZ8LkyECrcA1VyVqhlJzQ6eKw0IQ%2BAWDOD9MB15%2FJ5PpsE0Yh32wstN1Uv5KnuDm%2BqqLGbRrntlFHzH0Oy3HM9Psxw6oSfLySAzmnaB%2Fd51q7S0W7Bt9222%2BQhdFqQsFhzO96V0IOp53A8zaE8YjWRjztzP%2FrpdXefoXlIDLb1Z67I91d7BwMbBnjSK2PiP%2BMigP4BJIYGKSLYpPFIMiREEoCGKMk%2B1r4X%2Bg4jAfodGVKDTmDuVC2iJl5SuhnBL6p81wyQXgI4S%2BvxaUuYEEfP3w7T7uPPJ4U%2FmMy0HliABQtsRese0KFtaW1QlRxdGa1UNV3HAWO7gDOGBedfwZLTgnWHRnrApTHFtIGeffBxWDk4RhgjcPltnwENd5OChmfn9Kn%2FKC1jXybpanmzHA3uG1OavMAzdNU1AjXHGpfD%2FbB%2BMv6veMxoq0b3cRlBqaQrUNuX1wyuaC82SbV5lASNCxgdyvWBeRmvyFTgDmzz1P6raIo7DhO2251PCIp2CfwroUkvci1Hv31XgX1QOZOE9FTTxp6fvynkbBgVrKWjZjPcEAqsQyya3qRlUMUP2JKA1NFymK9N5iapaeHRA8chbNZebsQslrtPjBZNpqFJ4y4oIUlGigwBJIkNlGATs9qxA%2BJaMIfu08QGOqUBZtxfn6FmdFEBdFW%2B%2Ff7rYNnmvG0jdHNpmKxc6SKkQ5BxDvg%2B75ZNgmqWxnp6FSO32UEX0JPCEPJAgmwyT6e%2BlG7LfNccn9onD2aJiQBoWDAy8T6d%2F3fqmkPorpmo%2BWiUhK%2FcLYqXE0laq5CUcSvu2LP%2BiGGIZIX2bqmfruCD1HvAJZLI%2F1HSBwE2F5jDhAiIZaeFPOBfYf1SbOSDv1%2BzBriOsHX4&X-Amz-Signature=7eca0cf8b32bb279c711ffc5d454492d18904305967f5d2fcb1f04feb860bd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PETXD2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGNP5EdQWjWiTI0NCPCfJJiqYFn8C5jmPm%2FUNUw8TqRiAiEAmKVGSvp9GRSCrZ6x9gfUo9qdBKSzmGqOPCwjriCwTDkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsVQt%2B%2FvclZ8LkyECrcA1VyVqhlJzQ6eKw0IQ%2BAWDOD9MB15%2FJ5PpsE0Yh32wstN1Uv5KnuDm%2BqqLGbRrntlFHzH0Oy3HM9Psxw6oSfLySAzmnaB%2Fd51q7S0W7Bt9222%2BQhdFqQsFhzO96V0IOp53A8zaE8YjWRjztzP%2FrpdXefoXlIDLb1Z67I91d7BwMbBnjSK2PiP%2BMigP4BJIYGKSLYpPFIMiREEoCGKMk%2B1r4X%2Bg4jAfodGVKDTmDuVC2iJl5SuhnBL6p81wyQXgI4S%2BvxaUuYEEfP3w7T7uPPJ4U%2FmMy0HliABQtsRese0KFtaW1QlRxdGa1UNV3HAWO7gDOGBedfwZLTgnWHRnrApTHFtIGeffBxWDk4RhgjcPltnwENd5OChmfn9Kn%2FKC1jXybpanmzHA3uG1OavMAzdNU1AjXHGpfD%2FbB%2BMv6veMxoq0b3cRlBqaQrUNuX1wyuaC82SbV5lASNCxgdyvWBeRmvyFTgDmzz1P6raIo7DhO2251PCIp2CfwroUkvci1Hv31XgX1QOZOE9FTTxp6fvynkbBgVrKWjZjPcEAqsQyya3qRlUMUP2JKA1NFymK9N5iapaeHRA8chbNZebsQslrtPjBZNpqFJ4y4oIUlGigwBJIkNlGATs9qxA%2BJaMIfu08QGOqUBZtxfn6FmdFEBdFW%2B%2Ff7rYNnmvG0jdHNpmKxc6SKkQ5BxDvg%2B75ZNgmqWxnp6FSO32UEX0JPCEPJAgmwyT6e%2BlG7LfNccn9onD2aJiQBoWDAy8T6d%2F3fqmkPorpmo%2BWiUhK%2FcLYqXE0laq5CUcSvu2LP%2BiGGIZIX2bqmfruCD1HvAJZLI%2F1HSBwE2F5jDhAiIZaeFPOBfYf1SbOSDv1%2BzBriOsHX4&X-Amz-Signature=7a9bfb8c051012085f1094570104db47e91086f1de7144b2816d13fff03231ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PETXD2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGNP5EdQWjWiTI0NCPCfJJiqYFn8C5jmPm%2FUNUw8TqRiAiEAmKVGSvp9GRSCrZ6x9gfUo9qdBKSzmGqOPCwjriCwTDkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsVQt%2B%2FvclZ8LkyECrcA1VyVqhlJzQ6eKw0IQ%2BAWDOD9MB15%2FJ5PpsE0Yh32wstN1Uv5KnuDm%2BqqLGbRrntlFHzH0Oy3HM9Psxw6oSfLySAzmnaB%2Fd51q7S0W7Bt9222%2BQhdFqQsFhzO96V0IOp53A8zaE8YjWRjztzP%2FrpdXefoXlIDLb1Z67I91d7BwMbBnjSK2PiP%2BMigP4BJIYGKSLYpPFIMiREEoCGKMk%2B1r4X%2Bg4jAfodGVKDTmDuVC2iJl5SuhnBL6p81wyQXgI4S%2BvxaUuYEEfP3w7T7uPPJ4U%2FmMy0HliABQtsRese0KFtaW1QlRxdGa1UNV3HAWO7gDOGBedfwZLTgnWHRnrApTHFtIGeffBxWDk4RhgjcPltnwENd5OChmfn9Kn%2FKC1jXybpanmzHA3uG1OavMAzdNU1AjXHGpfD%2FbB%2BMv6veMxoq0b3cRlBqaQrUNuX1wyuaC82SbV5lASNCxgdyvWBeRmvyFTgDmzz1P6raIo7DhO2251PCIp2CfwroUkvci1Hv31XgX1QOZOE9FTTxp6fvynkbBgVrKWjZjPcEAqsQyya3qRlUMUP2JKA1NFymK9N5iapaeHRA8chbNZebsQslrtPjBZNpqFJ4y4oIUlGigwBJIkNlGATs9qxA%2BJaMIfu08QGOqUBZtxfn6FmdFEBdFW%2B%2Ff7rYNnmvG0jdHNpmKxc6SKkQ5BxDvg%2B75ZNgmqWxnp6FSO32UEX0JPCEPJAgmwyT6e%2BlG7LfNccn9onD2aJiQBoWDAy8T6d%2F3fqmkPorpmo%2BWiUhK%2FcLYqXE0laq5CUcSvu2LP%2BiGGIZIX2bqmfruCD1HvAJZLI%2F1HSBwE2F5jDhAiIZaeFPOBfYf1SbOSDv1%2BzBriOsHX4&X-Amz-Signature=39f948c27f8bc4b452c106234a7afef0a4ac708891c44046e1a00fb597a3a0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PETXD2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGNP5EdQWjWiTI0NCPCfJJiqYFn8C5jmPm%2FUNUw8TqRiAiEAmKVGSvp9GRSCrZ6x9gfUo9qdBKSzmGqOPCwjriCwTDkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsVQt%2B%2FvclZ8LkyECrcA1VyVqhlJzQ6eKw0IQ%2BAWDOD9MB15%2FJ5PpsE0Yh32wstN1Uv5KnuDm%2BqqLGbRrntlFHzH0Oy3HM9Psxw6oSfLySAzmnaB%2Fd51q7S0W7Bt9222%2BQhdFqQsFhzO96V0IOp53A8zaE8YjWRjztzP%2FrpdXefoXlIDLb1Z67I91d7BwMbBnjSK2PiP%2BMigP4BJIYGKSLYpPFIMiREEoCGKMk%2B1r4X%2Bg4jAfodGVKDTmDuVC2iJl5SuhnBL6p81wyQXgI4S%2BvxaUuYEEfP3w7T7uPPJ4U%2FmMy0HliABQtsRese0KFtaW1QlRxdGa1UNV3HAWO7gDOGBedfwZLTgnWHRnrApTHFtIGeffBxWDk4RhgjcPltnwENd5OChmfn9Kn%2FKC1jXybpanmzHA3uG1OavMAzdNU1AjXHGpfD%2FbB%2BMv6veMxoq0b3cRlBqaQrUNuX1wyuaC82SbV5lASNCxgdyvWBeRmvyFTgDmzz1P6raIo7DhO2251PCIp2CfwroUkvci1Hv31XgX1QOZOE9FTTxp6fvynkbBgVrKWjZjPcEAqsQyya3qRlUMUP2JKA1NFymK9N5iapaeHRA8chbNZebsQslrtPjBZNpqFJ4y4oIUlGigwBJIkNlGATs9qxA%2BJaMIfu08QGOqUBZtxfn6FmdFEBdFW%2B%2Ff7rYNnmvG0jdHNpmKxc6SKkQ5BxDvg%2B75ZNgmqWxnp6FSO32UEX0JPCEPJAgmwyT6e%2BlG7LfNccn9onD2aJiQBoWDAy8T6d%2F3fqmkPorpmo%2BWiUhK%2FcLYqXE0laq5CUcSvu2LP%2BiGGIZIX2bqmfruCD1HvAJZLI%2F1HSBwE2F5jDhAiIZaeFPOBfYf1SbOSDv1%2BzBriOsHX4&X-Amz-Signature=8f3829a242f2204820ad86f96052e626d3b75752b1eacd6484de78b3c6d11fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622PETXD2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIGNP5EdQWjWiTI0NCPCfJJiqYFn8C5jmPm%2FUNUw8TqRiAiEAmKVGSvp9GRSCrZ6x9gfUo9qdBKSzmGqOPCwjriCwTDkqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsVQt%2B%2FvclZ8LkyECrcA1VyVqhlJzQ6eKw0IQ%2BAWDOD9MB15%2FJ5PpsE0Yh32wstN1Uv5KnuDm%2BqqLGbRrntlFHzH0Oy3HM9Psxw6oSfLySAzmnaB%2Fd51q7S0W7Bt9222%2BQhdFqQsFhzO96V0IOp53A8zaE8YjWRjztzP%2FrpdXefoXlIDLb1Z67I91d7BwMbBnjSK2PiP%2BMigP4BJIYGKSLYpPFIMiREEoCGKMk%2B1r4X%2Bg4jAfodGVKDTmDuVC2iJl5SuhnBL6p81wyQXgI4S%2BvxaUuYEEfP3w7T7uPPJ4U%2FmMy0HliABQtsRese0KFtaW1QlRxdGa1UNV3HAWO7gDOGBedfwZLTgnWHRnrApTHFtIGeffBxWDk4RhgjcPltnwENd5OChmfn9Kn%2FKC1jXybpanmzHA3uG1OavMAzdNU1AjXHGpfD%2FbB%2BMv6veMxoq0b3cRlBqaQrUNuX1wyuaC82SbV5lASNCxgdyvWBeRmvyFTgDmzz1P6raIo7DhO2251PCIp2CfwroUkvci1Hv31XgX1QOZOE9FTTxp6fvynkbBgVrKWjZjPcEAqsQyya3qRlUMUP2JKA1NFymK9N5iapaeHRA8chbNZebsQslrtPjBZNpqFJ4y4oIUlGigwBJIkNlGATs9qxA%2BJaMIfu08QGOqUBZtxfn6FmdFEBdFW%2B%2Ff7rYNnmvG0jdHNpmKxc6SKkQ5BxDvg%2B75ZNgmqWxnp6FSO32UEX0JPCEPJAgmwyT6e%2BlG7LfNccn9onD2aJiQBoWDAy8T6d%2F3fqmkPorpmo%2BWiUhK%2FcLYqXE0laq5CUcSvu2LP%2BiGGIZIX2bqmfruCD1HvAJZLI%2F1HSBwE2F5jDhAiIZaeFPOBfYf1SbOSDv1%2BzBriOsHX4&X-Amz-Signature=05b1cdfcc99f9b16ac412834c9f182c50b84b9b2c673be31035f21f7c392c524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
