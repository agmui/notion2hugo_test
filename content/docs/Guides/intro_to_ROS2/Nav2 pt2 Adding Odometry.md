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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G7ULH2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHihuF4C1PVG8VsvLAN%2BAgOGQ5Y8e%2FHek3bhYevlBiIDAiEAosLXI8fjwVK5mfW5Wr3geKsZOMe8Sawn%2BDRvXRfifVEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCHoefu2hJArSlEckSrcAynQ9FY2wCLsQdGH%2B%2BDgsNLy7Yz6RES9Fy2TBvw6fqmzETaAPMNV6LRt8dOchjkog%2BQWIWXtbFIP5RPPgCYA40yOqAsqHu3L2iG%2FiDZRk2ZXA9yTtZYztZzI%2BtJ3se%2Fx1a%2F0R4XgslSJEK0dmyoJwBGmh8bdrfKe3vVMOyhxaMpMquD63TEozeFwrGBOoymhHYw5d8nLH6uViTFMyHPQzkhsXyyirUoZw4VcNpbWL3aW2hv7mb59OwXEYXGgMposVb5MCNKI9uFVc9dQuHzPmOpJWejAz7j1HhBB8aPCFtAlx4pH%2FSczaBqQGTGgy3y1WpkcsNXf3Ae1Og%2Fo%2BFOz6S8Zm3uYEqDRi7DnfyvzWMyHKIFqusNhnmHUSV%2BHXbiWCakXQmf4zD4csw1UpZPsDvn6eTgICLuzFtwa8rU0b0%2BBFnjWggJsg3kqUx6aM2nPOSFNEaTPwAdxBRr9V66jKXqm8%2FGklli%2BsbbQUeoja3M7hjAhMpGwSzntS75n3VEqqhOvqnivgtxUrDuo3XvpQ7c8OIIqgsGJcUwKTm8HyecxSloGR3Xd0CqzAc%2B2fg5tNbTOJEC7neBv4iaElNXMfF2OSUAHUIGwHEtjbUboxGK1W0QCBtJ%2BX7P%2BeVTeMM68ycQGOqUB2PCr9j%2Bgp1NPfiaC0QkopvLFpIH350rcWrxzpvfe1ioPeWRHRFJoAFXivjmFKiQm4gLAsVAnJzuLOTP2IMZffdKOpYBOShKeM1PRKZW9SS6htTZRHUC269Bysfy882sj6ZRvn2UC7tLDeQgybgP3w2GFsMDaweBVIpwdulnllax5GwjCsO1pcIyPEHzPa4%2BNSZBYXxh6CvMPJ2EcWnXqpsXmVfAy&X-Amz-Signature=edf5669cfef61869c2afa4c8cdc2dd2915d92c3837b99d470e7c58c0719240cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G7ULH2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHihuF4C1PVG8VsvLAN%2BAgOGQ5Y8e%2FHek3bhYevlBiIDAiEAosLXI8fjwVK5mfW5Wr3geKsZOMe8Sawn%2BDRvXRfifVEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCHoefu2hJArSlEckSrcAynQ9FY2wCLsQdGH%2B%2BDgsNLy7Yz6RES9Fy2TBvw6fqmzETaAPMNV6LRt8dOchjkog%2BQWIWXtbFIP5RPPgCYA40yOqAsqHu3L2iG%2FiDZRk2ZXA9yTtZYztZzI%2BtJ3se%2Fx1a%2F0R4XgslSJEK0dmyoJwBGmh8bdrfKe3vVMOyhxaMpMquD63TEozeFwrGBOoymhHYw5d8nLH6uViTFMyHPQzkhsXyyirUoZw4VcNpbWL3aW2hv7mb59OwXEYXGgMposVb5MCNKI9uFVc9dQuHzPmOpJWejAz7j1HhBB8aPCFtAlx4pH%2FSczaBqQGTGgy3y1WpkcsNXf3Ae1Og%2Fo%2BFOz6S8Zm3uYEqDRi7DnfyvzWMyHKIFqusNhnmHUSV%2BHXbiWCakXQmf4zD4csw1UpZPsDvn6eTgICLuzFtwa8rU0b0%2BBFnjWggJsg3kqUx6aM2nPOSFNEaTPwAdxBRr9V66jKXqm8%2FGklli%2BsbbQUeoja3M7hjAhMpGwSzntS75n3VEqqhOvqnivgtxUrDuo3XvpQ7c8OIIqgsGJcUwKTm8HyecxSloGR3Xd0CqzAc%2B2fg5tNbTOJEC7neBv4iaElNXMfF2OSUAHUIGwHEtjbUboxGK1W0QCBtJ%2BX7P%2BeVTeMM68ycQGOqUB2PCr9j%2Bgp1NPfiaC0QkopvLFpIH350rcWrxzpvfe1ioPeWRHRFJoAFXivjmFKiQm4gLAsVAnJzuLOTP2IMZffdKOpYBOShKeM1PRKZW9SS6htTZRHUC269Bysfy882sj6ZRvn2UC7tLDeQgybgP3w2GFsMDaweBVIpwdulnllax5GwjCsO1pcIyPEHzPa4%2BNSZBYXxh6CvMPJ2EcWnXqpsXmVfAy&X-Amz-Signature=b3cd62c01d34c6765d89a831424cc65391618a16c015b8112c5fd803085bf905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G7ULH2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHihuF4C1PVG8VsvLAN%2BAgOGQ5Y8e%2FHek3bhYevlBiIDAiEAosLXI8fjwVK5mfW5Wr3geKsZOMe8Sawn%2BDRvXRfifVEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCHoefu2hJArSlEckSrcAynQ9FY2wCLsQdGH%2B%2BDgsNLy7Yz6RES9Fy2TBvw6fqmzETaAPMNV6LRt8dOchjkog%2BQWIWXtbFIP5RPPgCYA40yOqAsqHu3L2iG%2FiDZRk2ZXA9yTtZYztZzI%2BtJ3se%2Fx1a%2F0R4XgslSJEK0dmyoJwBGmh8bdrfKe3vVMOyhxaMpMquD63TEozeFwrGBOoymhHYw5d8nLH6uViTFMyHPQzkhsXyyirUoZw4VcNpbWL3aW2hv7mb59OwXEYXGgMposVb5MCNKI9uFVc9dQuHzPmOpJWejAz7j1HhBB8aPCFtAlx4pH%2FSczaBqQGTGgy3y1WpkcsNXf3Ae1Og%2Fo%2BFOz6S8Zm3uYEqDRi7DnfyvzWMyHKIFqusNhnmHUSV%2BHXbiWCakXQmf4zD4csw1UpZPsDvn6eTgICLuzFtwa8rU0b0%2BBFnjWggJsg3kqUx6aM2nPOSFNEaTPwAdxBRr9V66jKXqm8%2FGklli%2BsbbQUeoja3M7hjAhMpGwSzntS75n3VEqqhOvqnivgtxUrDuo3XvpQ7c8OIIqgsGJcUwKTm8HyecxSloGR3Xd0CqzAc%2B2fg5tNbTOJEC7neBv4iaElNXMfF2OSUAHUIGwHEtjbUboxGK1W0QCBtJ%2BX7P%2BeVTeMM68ycQGOqUB2PCr9j%2Bgp1NPfiaC0QkopvLFpIH350rcWrxzpvfe1ioPeWRHRFJoAFXivjmFKiQm4gLAsVAnJzuLOTP2IMZffdKOpYBOShKeM1PRKZW9SS6htTZRHUC269Bysfy882sj6ZRvn2UC7tLDeQgybgP3w2GFsMDaweBVIpwdulnllax5GwjCsO1pcIyPEHzPa4%2BNSZBYXxh6CvMPJ2EcWnXqpsXmVfAy&X-Amz-Signature=3091ff4727e283d76c13eecba2292302d3dbd9477b2d4fa382377086a83f0349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G7ULH2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHihuF4C1PVG8VsvLAN%2BAgOGQ5Y8e%2FHek3bhYevlBiIDAiEAosLXI8fjwVK5mfW5Wr3geKsZOMe8Sawn%2BDRvXRfifVEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCHoefu2hJArSlEckSrcAynQ9FY2wCLsQdGH%2B%2BDgsNLy7Yz6RES9Fy2TBvw6fqmzETaAPMNV6LRt8dOchjkog%2BQWIWXtbFIP5RPPgCYA40yOqAsqHu3L2iG%2FiDZRk2ZXA9yTtZYztZzI%2BtJ3se%2Fx1a%2F0R4XgslSJEK0dmyoJwBGmh8bdrfKe3vVMOyhxaMpMquD63TEozeFwrGBOoymhHYw5d8nLH6uViTFMyHPQzkhsXyyirUoZw4VcNpbWL3aW2hv7mb59OwXEYXGgMposVb5MCNKI9uFVc9dQuHzPmOpJWejAz7j1HhBB8aPCFtAlx4pH%2FSczaBqQGTGgy3y1WpkcsNXf3Ae1Og%2Fo%2BFOz6S8Zm3uYEqDRi7DnfyvzWMyHKIFqusNhnmHUSV%2BHXbiWCakXQmf4zD4csw1UpZPsDvn6eTgICLuzFtwa8rU0b0%2BBFnjWggJsg3kqUx6aM2nPOSFNEaTPwAdxBRr9V66jKXqm8%2FGklli%2BsbbQUeoja3M7hjAhMpGwSzntS75n3VEqqhOvqnivgtxUrDuo3XvpQ7c8OIIqgsGJcUwKTm8HyecxSloGR3Xd0CqzAc%2B2fg5tNbTOJEC7neBv4iaElNXMfF2OSUAHUIGwHEtjbUboxGK1W0QCBtJ%2BX7P%2BeVTeMM68ycQGOqUB2PCr9j%2Bgp1NPfiaC0QkopvLFpIH350rcWrxzpvfe1ioPeWRHRFJoAFXivjmFKiQm4gLAsVAnJzuLOTP2IMZffdKOpYBOShKeM1PRKZW9SS6htTZRHUC269Bysfy882sj6ZRvn2UC7tLDeQgybgP3w2GFsMDaweBVIpwdulnllax5GwjCsO1pcIyPEHzPa4%2BNSZBYXxh6CvMPJ2EcWnXqpsXmVfAy&X-Amz-Signature=48fdf7ca04c0f9809f40b89cf0570e4e46da4c4b93fa4f9116c88a6809878401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G7ULH2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHihuF4C1PVG8VsvLAN%2BAgOGQ5Y8e%2FHek3bhYevlBiIDAiEAosLXI8fjwVK5mfW5Wr3geKsZOMe8Sawn%2BDRvXRfifVEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCHoefu2hJArSlEckSrcAynQ9FY2wCLsQdGH%2B%2BDgsNLy7Yz6RES9Fy2TBvw6fqmzETaAPMNV6LRt8dOchjkog%2BQWIWXtbFIP5RPPgCYA40yOqAsqHu3L2iG%2FiDZRk2ZXA9yTtZYztZzI%2BtJ3se%2Fx1a%2F0R4XgslSJEK0dmyoJwBGmh8bdrfKe3vVMOyhxaMpMquD63TEozeFwrGBOoymhHYw5d8nLH6uViTFMyHPQzkhsXyyirUoZw4VcNpbWL3aW2hv7mb59OwXEYXGgMposVb5MCNKI9uFVc9dQuHzPmOpJWejAz7j1HhBB8aPCFtAlx4pH%2FSczaBqQGTGgy3y1WpkcsNXf3Ae1Og%2Fo%2BFOz6S8Zm3uYEqDRi7DnfyvzWMyHKIFqusNhnmHUSV%2BHXbiWCakXQmf4zD4csw1UpZPsDvn6eTgICLuzFtwa8rU0b0%2BBFnjWggJsg3kqUx6aM2nPOSFNEaTPwAdxBRr9V66jKXqm8%2FGklli%2BsbbQUeoja3M7hjAhMpGwSzntS75n3VEqqhOvqnivgtxUrDuo3XvpQ7c8OIIqgsGJcUwKTm8HyecxSloGR3Xd0CqzAc%2B2fg5tNbTOJEC7neBv4iaElNXMfF2OSUAHUIGwHEtjbUboxGK1W0QCBtJ%2BX7P%2BeVTeMM68ycQGOqUB2PCr9j%2Bgp1NPfiaC0QkopvLFpIH350rcWrxzpvfe1ioPeWRHRFJoAFXivjmFKiQm4gLAsVAnJzuLOTP2IMZffdKOpYBOShKeM1PRKZW9SS6htTZRHUC269Bysfy882sj6ZRvn2UC7tLDeQgybgP3w2GFsMDaweBVIpwdulnllax5GwjCsO1pcIyPEHzPa4%2BNSZBYXxh6CvMPJ2EcWnXqpsXmVfAy&X-Amz-Signature=247a2612c0b9a2cb2b2977339ba4ba4cc20941687c85c7d1f859ef97e3f5d787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G7ULH2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHihuF4C1PVG8VsvLAN%2BAgOGQ5Y8e%2FHek3bhYevlBiIDAiEAosLXI8fjwVK5mfW5Wr3geKsZOMe8Sawn%2BDRvXRfifVEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCHoefu2hJArSlEckSrcAynQ9FY2wCLsQdGH%2B%2BDgsNLy7Yz6RES9Fy2TBvw6fqmzETaAPMNV6LRt8dOchjkog%2BQWIWXtbFIP5RPPgCYA40yOqAsqHu3L2iG%2FiDZRk2ZXA9yTtZYztZzI%2BtJ3se%2Fx1a%2F0R4XgslSJEK0dmyoJwBGmh8bdrfKe3vVMOyhxaMpMquD63TEozeFwrGBOoymhHYw5d8nLH6uViTFMyHPQzkhsXyyirUoZw4VcNpbWL3aW2hv7mb59OwXEYXGgMposVb5MCNKI9uFVc9dQuHzPmOpJWejAz7j1HhBB8aPCFtAlx4pH%2FSczaBqQGTGgy3y1WpkcsNXf3Ae1Og%2Fo%2BFOz6S8Zm3uYEqDRi7DnfyvzWMyHKIFqusNhnmHUSV%2BHXbiWCakXQmf4zD4csw1UpZPsDvn6eTgICLuzFtwa8rU0b0%2BBFnjWggJsg3kqUx6aM2nPOSFNEaTPwAdxBRr9V66jKXqm8%2FGklli%2BsbbQUeoja3M7hjAhMpGwSzntS75n3VEqqhOvqnivgtxUrDuo3XvpQ7c8OIIqgsGJcUwKTm8HyecxSloGR3Xd0CqzAc%2B2fg5tNbTOJEC7neBv4iaElNXMfF2OSUAHUIGwHEtjbUboxGK1W0QCBtJ%2BX7P%2BeVTeMM68ycQGOqUB2PCr9j%2Bgp1NPfiaC0QkopvLFpIH350rcWrxzpvfe1ioPeWRHRFJoAFXivjmFKiQm4gLAsVAnJzuLOTP2IMZffdKOpYBOShKeM1PRKZW9SS6htTZRHUC269Bysfy882sj6ZRvn2UC7tLDeQgybgP3w2GFsMDaweBVIpwdulnllax5GwjCsO1pcIyPEHzPa4%2BNSZBYXxh6CvMPJ2EcWnXqpsXmVfAy&X-Amz-Signature=ff3d7d63858b31e5ec4d70a0b7d4b04d6766bda30b3f434a37674b0c0e875e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G7ULH2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHihuF4C1PVG8VsvLAN%2BAgOGQ5Y8e%2FHek3bhYevlBiIDAiEAosLXI8fjwVK5mfW5Wr3geKsZOMe8Sawn%2BDRvXRfifVEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCHoefu2hJArSlEckSrcAynQ9FY2wCLsQdGH%2B%2BDgsNLy7Yz6RES9Fy2TBvw6fqmzETaAPMNV6LRt8dOchjkog%2BQWIWXtbFIP5RPPgCYA40yOqAsqHu3L2iG%2FiDZRk2ZXA9yTtZYztZzI%2BtJ3se%2Fx1a%2F0R4XgslSJEK0dmyoJwBGmh8bdrfKe3vVMOyhxaMpMquD63TEozeFwrGBOoymhHYw5d8nLH6uViTFMyHPQzkhsXyyirUoZw4VcNpbWL3aW2hv7mb59OwXEYXGgMposVb5MCNKI9uFVc9dQuHzPmOpJWejAz7j1HhBB8aPCFtAlx4pH%2FSczaBqQGTGgy3y1WpkcsNXf3Ae1Og%2Fo%2BFOz6S8Zm3uYEqDRi7DnfyvzWMyHKIFqusNhnmHUSV%2BHXbiWCakXQmf4zD4csw1UpZPsDvn6eTgICLuzFtwa8rU0b0%2BBFnjWggJsg3kqUx6aM2nPOSFNEaTPwAdxBRr9V66jKXqm8%2FGklli%2BsbbQUeoja3M7hjAhMpGwSzntS75n3VEqqhOvqnivgtxUrDuo3XvpQ7c8OIIqgsGJcUwKTm8HyecxSloGR3Xd0CqzAc%2B2fg5tNbTOJEC7neBv4iaElNXMfF2OSUAHUIGwHEtjbUboxGK1W0QCBtJ%2BX7P%2BeVTeMM68ycQGOqUB2PCr9j%2Bgp1NPfiaC0QkopvLFpIH350rcWrxzpvfe1ioPeWRHRFJoAFXivjmFKiQm4gLAsVAnJzuLOTP2IMZffdKOpYBOShKeM1PRKZW9SS6htTZRHUC269Bysfy882sj6ZRvn2UC7tLDeQgybgP3w2GFsMDaweBVIpwdulnllax5GwjCsO1pcIyPEHzPa4%2BNSZBYXxh6CvMPJ2EcWnXqpsXmVfAy&X-Amz-Signature=f3717d3bf3a0aa01c832d716096fada11fae2487b361b227b31f56719474d1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G7ULH2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHihuF4C1PVG8VsvLAN%2BAgOGQ5Y8e%2FHek3bhYevlBiIDAiEAosLXI8fjwVK5mfW5Wr3geKsZOMe8Sawn%2BDRvXRfifVEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCHoefu2hJArSlEckSrcAynQ9FY2wCLsQdGH%2B%2BDgsNLy7Yz6RES9Fy2TBvw6fqmzETaAPMNV6LRt8dOchjkog%2BQWIWXtbFIP5RPPgCYA40yOqAsqHu3L2iG%2FiDZRk2ZXA9yTtZYztZzI%2BtJ3se%2Fx1a%2F0R4XgslSJEK0dmyoJwBGmh8bdrfKe3vVMOyhxaMpMquD63TEozeFwrGBOoymhHYw5d8nLH6uViTFMyHPQzkhsXyyirUoZw4VcNpbWL3aW2hv7mb59OwXEYXGgMposVb5MCNKI9uFVc9dQuHzPmOpJWejAz7j1HhBB8aPCFtAlx4pH%2FSczaBqQGTGgy3y1WpkcsNXf3Ae1Og%2Fo%2BFOz6S8Zm3uYEqDRi7DnfyvzWMyHKIFqusNhnmHUSV%2BHXbiWCakXQmf4zD4csw1UpZPsDvn6eTgICLuzFtwa8rU0b0%2BBFnjWggJsg3kqUx6aM2nPOSFNEaTPwAdxBRr9V66jKXqm8%2FGklli%2BsbbQUeoja3M7hjAhMpGwSzntS75n3VEqqhOvqnivgtxUrDuo3XvpQ7c8OIIqgsGJcUwKTm8HyecxSloGR3Xd0CqzAc%2B2fg5tNbTOJEC7neBv4iaElNXMfF2OSUAHUIGwHEtjbUboxGK1W0QCBtJ%2BX7P%2BeVTeMM68ycQGOqUB2PCr9j%2Bgp1NPfiaC0QkopvLFpIH350rcWrxzpvfe1ioPeWRHRFJoAFXivjmFKiQm4gLAsVAnJzuLOTP2IMZffdKOpYBOShKeM1PRKZW9SS6htTZRHUC269Bysfy882sj6ZRvn2UC7tLDeQgybgP3w2GFsMDaweBVIpwdulnllax5GwjCsO1pcIyPEHzPa4%2BNSZBYXxh6CvMPJ2EcWnXqpsXmVfAy&X-Amz-Signature=1527f8e9e56a543dfc1c011165dfc3d0c4c8fc2652575fb4df11dfd550a59c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G7ULH2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHihuF4C1PVG8VsvLAN%2BAgOGQ5Y8e%2FHek3bhYevlBiIDAiEAosLXI8fjwVK5mfW5Wr3geKsZOMe8Sawn%2BDRvXRfifVEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCHoefu2hJArSlEckSrcAynQ9FY2wCLsQdGH%2B%2BDgsNLy7Yz6RES9Fy2TBvw6fqmzETaAPMNV6LRt8dOchjkog%2BQWIWXtbFIP5RPPgCYA40yOqAsqHu3L2iG%2FiDZRk2ZXA9yTtZYztZzI%2BtJ3se%2Fx1a%2F0R4XgslSJEK0dmyoJwBGmh8bdrfKe3vVMOyhxaMpMquD63TEozeFwrGBOoymhHYw5d8nLH6uViTFMyHPQzkhsXyyirUoZw4VcNpbWL3aW2hv7mb59OwXEYXGgMposVb5MCNKI9uFVc9dQuHzPmOpJWejAz7j1HhBB8aPCFtAlx4pH%2FSczaBqQGTGgy3y1WpkcsNXf3Ae1Og%2Fo%2BFOz6S8Zm3uYEqDRi7DnfyvzWMyHKIFqusNhnmHUSV%2BHXbiWCakXQmf4zD4csw1UpZPsDvn6eTgICLuzFtwa8rU0b0%2BBFnjWggJsg3kqUx6aM2nPOSFNEaTPwAdxBRr9V66jKXqm8%2FGklli%2BsbbQUeoja3M7hjAhMpGwSzntS75n3VEqqhOvqnivgtxUrDuo3XvpQ7c8OIIqgsGJcUwKTm8HyecxSloGR3Xd0CqzAc%2B2fg5tNbTOJEC7neBv4iaElNXMfF2OSUAHUIGwHEtjbUboxGK1W0QCBtJ%2BX7P%2BeVTeMM68ycQGOqUB2PCr9j%2Bgp1NPfiaC0QkopvLFpIH350rcWrxzpvfe1ioPeWRHRFJoAFXivjmFKiQm4gLAsVAnJzuLOTP2IMZffdKOpYBOShKeM1PRKZW9SS6htTZRHUC269Bysfy882sj6ZRvn2UC7tLDeQgybgP3w2GFsMDaweBVIpwdulnllax5GwjCsO1pcIyPEHzPa4%2BNSZBYXxh6CvMPJ2EcWnXqpsXmVfAy&X-Amz-Signature=a12fac84349f4193cf4cf5fd42890ee77ccc65489bf61f7f69fff75d1696d2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4G7ULH2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIHihuF4C1PVG8VsvLAN%2BAgOGQ5Y8e%2FHek3bhYevlBiIDAiEAosLXI8fjwVK5mfW5Wr3geKsZOMe8Sawn%2BDRvXRfifVEq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDCHoefu2hJArSlEckSrcAynQ9FY2wCLsQdGH%2B%2BDgsNLy7Yz6RES9Fy2TBvw6fqmzETaAPMNV6LRt8dOchjkog%2BQWIWXtbFIP5RPPgCYA40yOqAsqHu3L2iG%2FiDZRk2ZXA9yTtZYztZzI%2BtJ3se%2Fx1a%2F0R4XgslSJEK0dmyoJwBGmh8bdrfKe3vVMOyhxaMpMquD63TEozeFwrGBOoymhHYw5d8nLH6uViTFMyHPQzkhsXyyirUoZw4VcNpbWL3aW2hv7mb59OwXEYXGgMposVb5MCNKI9uFVc9dQuHzPmOpJWejAz7j1HhBB8aPCFtAlx4pH%2FSczaBqQGTGgy3y1WpkcsNXf3Ae1Og%2Fo%2BFOz6S8Zm3uYEqDRi7DnfyvzWMyHKIFqusNhnmHUSV%2BHXbiWCakXQmf4zD4csw1UpZPsDvn6eTgICLuzFtwa8rU0b0%2BBFnjWggJsg3kqUx6aM2nPOSFNEaTPwAdxBRr9V66jKXqm8%2FGklli%2BsbbQUeoja3M7hjAhMpGwSzntS75n3VEqqhOvqnivgtxUrDuo3XvpQ7c8OIIqgsGJcUwKTm8HyecxSloGR3Xd0CqzAc%2B2fg5tNbTOJEC7neBv4iaElNXMfF2OSUAHUIGwHEtjbUboxGK1W0QCBtJ%2BX7P%2BeVTeMM68ycQGOqUB2PCr9j%2Bgp1NPfiaC0QkopvLFpIH350rcWrxzpvfe1ioPeWRHRFJoAFXivjmFKiQm4gLAsVAnJzuLOTP2IMZffdKOpYBOShKeM1PRKZW9SS6htTZRHUC269Bysfy882sj6ZRvn2UC7tLDeQgybgP3w2GFsMDaweBVIpwdulnllax5GwjCsO1pcIyPEHzPa4%2BNSZBYXxh6CvMPJ2EcWnXqpsXmVfAy&X-Amz-Signature=3ea48d2c63f9c65798a01b819cc13c57012732cf0ea8b1dfb5620fe6350daf8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX44NZ5K%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIC3eW250GzmzHppYmbsyfOk3yzbGL3EZSwVwXlB7nxcPAiAyyhkLDLT%2FY6USctqXMlZXEGQlGTMPJIbDpvXEbCOEdyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMAMBHkhK%2BWALNoy1NKtwDmIPiv25M58O5h1rHhspipcLHGsQO2fmwfH8y1Dd%2Fr6sBFXAWeC%2F92bKvAe7HCh5YT2ADNLMDfwxsk5bXXUN4FOv2%2FZI8dT4%2BJJFWPIasuzGb6sDBACXr%2BJ64ZGYNKqUqaDgfMh2mWM65t8y%2FR6rzPIsAxPSzCVy7qi6EgjeP543bm0hYGaFiZ%2B7QH4n41y8IniPs6EpCsQESRpJCbZsUn8u55TDDeS6f%2FEajft8puGEukiogtlGCzfnHqNTjEfvonBqsetINeKA%2BI32Hk%2BjREtq5d9ZGeesDWjXcrmCOoUfJp%2FBDNc1EF5DaoeHvMcyfZPegrgGFuc9DH8G7J0n%2F3Q0ItyvDqNLDqIHDtkEfxG5KYAPlkWmNQUVlEfstjpRRNb93vA1RBhljacZrLSPSMqnqbOxgHQ3t%2BsTZk%2FBE88LdhlI3ok%2Foqm6yXftf5qlNEVwEakIHN8osPffkPNiEhZOkN9UD0cpLasUH1y28ObQ9jB82HHP4oQPSOoVs3IH3Zd7UxvxyZ36EjLvNZLpDKB9XiX4RgSpyybRLn5ZZ1Eafz81SXiAm9sS7Q2Uo59BkNYQt6Rhw8h9RhLJRqqFTs8UPmOOQQHx1uVUfHTfjQSHUidCcFT%2BPBM84XdUw7rzJxAY6pgGQVjRJPzmsEixloO5yQ9RTEN6wDXKgTFbPwntf%2BgIpWl6FEVGIX4%2FG%2Btisf35W5VHEFZ0406MTBmJJxTvi9LHUexlmEkFFvU6RRhT0eaQQty%2F1vVdhdtZov6YrBITC%2FEf2w%2B6hDVjva5grpaWxoWx0HY%2BnbdLLR8CnzGVLVOKCdvpfF9fzOY7dMyQ1evwR6w9mA5QC%2FpLTJ1AdIR1BrV08hogj1hYn&X-Amz-Signature=93747619ab5d352fbe32903e314f44671f8ab25952b34abc544f3e1105570794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GZZFZA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIC1JzTD2S9Y2qHq9fti2RFi1%2FXP%2BuM%2Bv9dMThylbif6GAiEA%2BwEuJiVo2PuYHV919RZ%2B1A5x6smAaVh5t6N%2BDFqf0oUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMvp8xhLcW%2Fu0cwitCrcAyQ6v7qWTI%2BimK8vOSVLN1cizhP1SSClauxWTMYHo2oRGBf6oWD4m92R6S0Fg%2Bbd%2Fk1ztkSkXJBb91H80NmDjgXZCK7RTqAn6xabOGkdVpyuoMOz6ZcIzVYovUXqNa2CQi6XqfeylYBiVOY6KBF0OAHH%2BF%2BLa3bhC%2BqcRwV2j7mAPG5Jtk5Z%2FUuWKEwtDzdeJH8Rb9qvE7r4fehc%2B6cY7f7PeGEyDm9CvPdCKCQMCiygVLVKi5pZgWg06JcgP6olPATcOGKXOz79ukLfUtG9uuMyzfLge3QA8693n6xoZql%2Bz5hvFmYzjTe3dSHoE94kx%2BobNlooEzNRWdS2hGbyurYtNP0nIgfqBh9w2ll%2Bg%2BtOMksgTakpMYKgficSfxLRv%2F8uupK2NbX%2Bu%2BEhdA%2FEySgpOxXpAbvlMtOQgCHW61%2FGcAxh4WJ%2FexnKkTbfhKRZO5sSbrH505G3uBI2U3XrPsyQ4mqidTautRx2tRQJ0DHsDIA7%2BYklguVa5pBY8DX1Wx0aJwm45OWHGUUt3rUrFECeHKoDkd5rou5xUTtgmrRrxf%2B2rqNOiZB5bPd%2BXJqr1PPy3MKNvsrotMIaqBIqL7mG2W1Gjg3gqtfEIms5tkia7EakhaoFD5m0JqONMN28ycQGOqUBHMnTRqmdWhe%2BJvBMI7dFXnbEPi%2BG7%2FoXdOXMURD0NDSC3dtUTKtWzp8Hi5yIMhU2j4rpBVAAy3NDjHdBar6eGVoDMbG0%2F7WL8XVTjiEVKqP5UjGlabUxlkZOImrmZvH%2FSHf6ctgrhPGuqT6XDzrybxgpVWb3ib4L6XfsxTv%2BuS2KPNxxLNDDGY5WvQLJzqxgVT6A%2BRIbOQt6PD7UkUR6R6seKvgw&X-Amz-Signature=a087b6d8991e2a3db44a2a379eb14cf5d6b4c88ed6fdea5e4941e6846074c4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GZZFZA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIC1JzTD2S9Y2qHq9fti2RFi1%2FXP%2BuM%2Bv9dMThylbif6GAiEA%2BwEuJiVo2PuYHV919RZ%2B1A5x6smAaVh5t6N%2BDFqf0oUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMvp8xhLcW%2Fu0cwitCrcAyQ6v7qWTI%2BimK8vOSVLN1cizhP1SSClauxWTMYHo2oRGBf6oWD4m92R6S0Fg%2Bbd%2Fk1ztkSkXJBb91H80NmDjgXZCK7RTqAn6xabOGkdVpyuoMOz6ZcIzVYovUXqNa2CQi6XqfeylYBiVOY6KBF0OAHH%2BF%2BLa3bhC%2BqcRwV2j7mAPG5Jtk5Z%2FUuWKEwtDzdeJH8Rb9qvE7r4fehc%2B6cY7f7PeGEyDm9CvPdCKCQMCiygVLVKi5pZgWg06JcgP6olPATcOGKXOz79ukLfUtG9uuMyzfLge3QA8693n6xoZql%2Bz5hvFmYzjTe3dSHoE94kx%2BobNlooEzNRWdS2hGbyurYtNP0nIgfqBh9w2ll%2Bg%2BtOMksgTakpMYKgficSfxLRv%2F8uupK2NbX%2Bu%2BEhdA%2FEySgpOxXpAbvlMtOQgCHW61%2FGcAxh4WJ%2FexnKkTbfhKRZO5sSbrH505G3uBI2U3XrPsyQ4mqidTautRx2tRQJ0DHsDIA7%2BYklguVa5pBY8DX1Wx0aJwm45OWHGUUt3rUrFECeHKoDkd5rou5xUTtgmrRrxf%2B2rqNOiZB5bPd%2BXJqr1PPy3MKNvsrotMIaqBIqL7mG2W1Gjg3gqtfEIms5tkia7EakhaoFD5m0JqONMN28ycQGOqUBHMnTRqmdWhe%2BJvBMI7dFXnbEPi%2BG7%2FoXdOXMURD0NDSC3dtUTKtWzp8Hi5yIMhU2j4rpBVAAy3NDjHdBar6eGVoDMbG0%2F7WL8XVTjiEVKqP5UjGlabUxlkZOImrmZvH%2FSHf6ctgrhPGuqT6XDzrybxgpVWb3ib4L6XfsxTv%2BuS2KPNxxLNDDGY5WvQLJzqxgVT6A%2BRIbOQt6PD7UkUR6R6seKvgw&X-Amz-Signature=95b81d5189168b1fb8407c11f4d1ff81e8df6f9820ec8deda7482082bdeaf2b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GZZFZA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIC1JzTD2S9Y2qHq9fti2RFi1%2FXP%2BuM%2Bv9dMThylbif6GAiEA%2BwEuJiVo2PuYHV919RZ%2B1A5x6smAaVh5t6N%2BDFqf0oUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMvp8xhLcW%2Fu0cwitCrcAyQ6v7qWTI%2BimK8vOSVLN1cizhP1SSClauxWTMYHo2oRGBf6oWD4m92R6S0Fg%2Bbd%2Fk1ztkSkXJBb91H80NmDjgXZCK7RTqAn6xabOGkdVpyuoMOz6ZcIzVYovUXqNa2CQi6XqfeylYBiVOY6KBF0OAHH%2BF%2BLa3bhC%2BqcRwV2j7mAPG5Jtk5Z%2FUuWKEwtDzdeJH8Rb9qvE7r4fehc%2B6cY7f7PeGEyDm9CvPdCKCQMCiygVLVKi5pZgWg06JcgP6olPATcOGKXOz79ukLfUtG9uuMyzfLge3QA8693n6xoZql%2Bz5hvFmYzjTe3dSHoE94kx%2BobNlooEzNRWdS2hGbyurYtNP0nIgfqBh9w2ll%2Bg%2BtOMksgTakpMYKgficSfxLRv%2F8uupK2NbX%2Bu%2BEhdA%2FEySgpOxXpAbvlMtOQgCHW61%2FGcAxh4WJ%2FexnKkTbfhKRZO5sSbrH505G3uBI2U3XrPsyQ4mqidTautRx2tRQJ0DHsDIA7%2BYklguVa5pBY8DX1Wx0aJwm45OWHGUUt3rUrFECeHKoDkd5rou5xUTtgmrRrxf%2B2rqNOiZB5bPd%2BXJqr1PPy3MKNvsrotMIaqBIqL7mG2W1Gjg3gqtfEIms5tkia7EakhaoFD5m0JqONMN28ycQGOqUBHMnTRqmdWhe%2BJvBMI7dFXnbEPi%2BG7%2FoXdOXMURD0NDSC3dtUTKtWzp8Hi5yIMhU2j4rpBVAAy3NDjHdBar6eGVoDMbG0%2F7WL8XVTjiEVKqP5UjGlabUxlkZOImrmZvH%2FSHf6ctgrhPGuqT6XDzrybxgpVWb3ib4L6XfsxTv%2BuS2KPNxxLNDDGY5WvQLJzqxgVT6A%2BRIbOQt6PD7UkUR6R6seKvgw&X-Amz-Signature=1b1f70603de91cd008c072488b9ff4093d4d4b4f0d6a95cedbfe5fc7a0534a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GZZFZA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIC1JzTD2S9Y2qHq9fti2RFi1%2FXP%2BuM%2Bv9dMThylbif6GAiEA%2BwEuJiVo2PuYHV919RZ%2B1A5x6smAaVh5t6N%2BDFqf0oUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMvp8xhLcW%2Fu0cwitCrcAyQ6v7qWTI%2BimK8vOSVLN1cizhP1SSClauxWTMYHo2oRGBf6oWD4m92R6S0Fg%2Bbd%2Fk1ztkSkXJBb91H80NmDjgXZCK7RTqAn6xabOGkdVpyuoMOz6ZcIzVYovUXqNa2CQi6XqfeylYBiVOY6KBF0OAHH%2BF%2BLa3bhC%2BqcRwV2j7mAPG5Jtk5Z%2FUuWKEwtDzdeJH8Rb9qvE7r4fehc%2B6cY7f7PeGEyDm9CvPdCKCQMCiygVLVKi5pZgWg06JcgP6olPATcOGKXOz79ukLfUtG9uuMyzfLge3QA8693n6xoZql%2Bz5hvFmYzjTe3dSHoE94kx%2BobNlooEzNRWdS2hGbyurYtNP0nIgfqBh9w2ll%2Bg%2BtOMksgTakpMYKgficSfxLRv%2F8uupK2NbX%2Bu%2BEhdA%2FEySgpOxXpAbvlMtOQgCHW61%2FGcAxh4WJ%2FexnKkTbfhKRZO5sSbrH505G3uBI2U3XrPsyQ4mqidTautRx2tRQJ0DHsDIA7%2BYklguVa5pBY8DX1Wx0aJwm45OWHGUUt3rUrFECeHKoDkd5rou5xUTtgmrRrxf%2B2rqNOiZB5bPd%2BXJqr1PPy3MKNvsrotMIaqBIqL7mG2W1Gjg3gqtfEIms5tkia7EakhaoFD5m0JqONMN28ycQGOqUBHMnTRqmdWhe%2BJvBMI7dFXnbEPi%2BG7%2FoXdOXMURD0NDSC3dtUTKtWzp8Hi5yIMhU2j4rpBVAAy3NDjHdBar6eGVoDMbG0%2F7WL8XVTjiEVKqP5UjGlabUxlkZOImrmZvH%2FSHf6ctgrhPGuqT6XDzrybxgpVWb3ib4L6XfsxTv%2BuS2KPNxxLNDDGY5WvQLJzqxgVT6A%2BRIbOQt6PD7UkUR6R6seKvgw&X-Amz-Signature=7958fcff7d747e9940e5b8ce922b4eff6dd63b5bda31154b64953f2f544dc063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GZZFZA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIC1JzTD2S9Y2qHq9fti2RFi1%2FXP%2BuM%2Bv9dMThylbif6GAiEA%2BwEuJiVo2PuYHV919RZ%2B1A5x6smAaVh5t6N%2BDFqf0oUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMvp8xhLcW%2Fu0cwitCrcAyQ6v7qWTI%2BimK8vOSVLN1cizhP1SSClauxWTMYHo2oRGBf6oWD4m92R6S0Fg%2Bbd%2Fk1ztkSkXJBb91H80NmDjgXZCK7RTqAn6xabOGkdVpyuoMOz6ZcIzVYovUXqNa2CQi6XqfeylYBiVOY6KBF0OAHH%2BF%2BLa3bhC%2BqcRwV2j7mAPG5Jtk5Z%2FUuWKEwtDzdeJH8Rb9qvE7r4fehc%2B6cY7f7PeGEyDm9CvPdCKCQMCiygVLVKi5pZgWg06JcgP6olPATcOGKXOz79ukLfUtG9uuMyzfLge3QA8693n6xoZql%2Bz5hvFmYzjTe3dSHoE94kx%2BobNlooEzNRWdS2hGbyurYtNP0nIgfqBh9w2ll%2Bg%2BtOMksgTakpMYKgficSfxLRv%2F8uupK2NbX%2Bu%2BEhdA%2FEySgpOxXpAbvlMtOQgCHW61%2FGcAxh4WJ%2FexnKkTbfhKRZO5sSbrH505G3uBI2U3XrPsyQ4mqidTautRx2tRQJ0DHsDIA7%2BYklguVa5pBY8DX1Wx0aJwm45OWHGUUt3rUrFECeHKoDkd5rou5xUTtgmrRrxf%2B2rqNOiZB5bPd%2BXJqr1PPy3MKNvsrotMIaqBIqL7mG2W1Gjg3gqtfEIms5tkia7EakhaoFD5m0JqONMN28ycQGOqUBHMnTRqmdWhe%2BJvBMI7dFXnbEPi%2BG7%2FoXdOXMURD0NDSC3dtUTKtWzp8Hi5yIMhU2j4rpBVAAy3NDjHdBar6eGVoDMbG0%2F7WL8XVTjiEVKqP5UjGlabUxlkZOImrmZvH%2FSHf6ctgrhPGuqT6XDzrybxgpVWb3ib4L6XfsxTv%2BuS2KPNxxLNDDGY5WvQLJzqxgVT6A%2BRIbOQt6PD7UkUR6R6seKvgw&X-Amz-Signature=b6cdeb4f5b4288132bce2c6d198ae90817707b40a146955bf8cf54d61de03a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GZZFZA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIC1JzTD2S9Y2qHq9fti2RFi1%2FXP%2BuM%2Bv9dMThylbif6GAiEA%2BwEuJiVo2PuYHV919RZ%2B1A5x6smAaVh5t6N%2BDFqf0oUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMvp8xhLcW%2Fu0cwitCrcAyQ6v7qWTI%2BimK8vOSVLN1cizhP1SSClauxWTMYHo2oRGBf6oWD4m92R6S0Fg%2Bbd%2Fk1ztkSkXJBb91H80NmDjgXZCK7RTqAn6xabOGkdVpyuoMOz6ZcIzVYovUXqNa2CQi6XqfeylYBiVOY6KBF0OAHH%2BF%2BLa3bhC%2BqcRwV2j7mAPG5Jtk5Z%2FUuWKEwtDzdeJH8Rb9qvE7r4fehc%2B6cY7f7PeGEyDm9CvPdCKCQMCiygVLVKi5pZgWg06JcgP6olPATcOGKXOz79ukLfUtG9uuMyzfLge3QA8693n6xoZql%2Bz5hvFmYzjTe3dSHoE94kx%2BobNlooEzNRWdS2hGbyurYtNP0nIgfqBh9w2ll%2Bg%2BtOMksgTakpMYKgficSfxLRv%2F8uupK2NbX%2Bu%2BEhdA%2FEySgpOxXpAbvlMtOQgCHW61%2FGcAxh4WJ%2FexnKkTbfhKRZO5sSbrH505G3uBI2U3XrPsyQ4mqidTautRx2tRQJ0DHsDIA7%2BYklguVa5pBY8DX1Wx0aJwm45OWHGUUt3rUrFECeHKoDkd5rou5xUTtgmrRrxf%2B2rqNOiZB5bPd%2BXJqr1PPy3MKNvsrotMIaqBIqL7mG2W1Gjg3gqtfEIms5tkia7EakhaoFD5m0JqONMN28ycQGOqUBHMnTRqmdWhe%2BJvBMI7dFXnbEPi%2BG7%2FoXdOXMURD0NDSC3dtUTKtWzp8Hi5yIMhU2j4rpBVAAy3NDjHdBar6eGVoDMbG0%2F7WL8XVTjiEVKqP5UjGlabUxlkZOImrmZvH%2FSHf6ctgrhPGuqT6XDzrybxgpVWb3ib4L6XfsxTv%2BuS2KPNxxLNDDGY5WvQLJzqxgVT6A%2BRIbOQt6PD7UkUR6R6seKvgw&X-Amz-Signature=69eb2410ab856cbe30953328ed9e4eb9003f08c6d117b4886f3d84aa4b25b188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GZZFZA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIC1JzTD2S9Y2qHq9fti2RFi1%2FXP%2BuM%2Bv9dMThylbif6GAiEA%2BwEuJiVo2PuYHV919RZ%2B1A5x6smAaVh5t6N%2BDFqf0oUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMvp8xhLcW%2Fu0cwitCrcAyQ6v7qWTI%2BimK8vOSVLN1cizhP1SSClauxWTMYHo2oRGBf6oWD4m92R6S0Fg%2Bbd%2Fk1ztkSkXJBb91H80NmDjgXZCK7RTqAn6xabOGkdVpyuoMOz6ZcIzVYovUXqNa2CQi6XqfeylYBiVOY6KBF0OAHH%2BF%2BLa3bhC%2BqcRwV2j7mAPG5Jtk5Z%2FUuWKEwtDzdeJH8Rb9qvE7r4fehc%2B6cY7f7PeGEyDm9CvPdCKCQMCiygVLVKi5pZgWg06JcgP6olPATcOGKXOz79ukLfUtG9uuMyzfLge3QA8693n6xoZql%2Bz5hvFmYzjTe3dSHoE94kx%2BobNlooEzNRWdS2hGbyurYtNP0nIgfqBh9w2ll%2Bg%2BtOMksgTakpMYKgficSfxLRv%2F8uupK2NbX%2Bu%2BEhdA%2FEySgpOxXpAbvlMtOQgCHW61%2FGcAxh4WJ%2FexnKkTbfhKRZO5sSbrH505G3uBI2U3XrPsyQ4mqidTautRx2tRQJ0DHsDIA7%2BYklguVa5pBY8DX1Wx0aJwm45OWHGUUt3rUrFECeHKoDkd5rou5xUTtgmrRrxf%2B2rqNOiZB5bPd%2BXJqr1PPy3MKNvsrotMIaqBIqL7mG2W1Gjg3gqtfEIms5tkia7EakhaoFD5m0JqONMN28ycQGOqUBHMnTRqmdWhe%2BJvBMI7dFXnbEPi%2BG7%2FoXdOXMURD0NDSC3dtUTKtWzp8Hi5yIMhU2j4rpBVAAy3NDjHdBar6eGVoDMbG0%2F7WL8XVTjiEVKqP5UjGlabUxlkZOImrmZvH%2FSHf6ctgrhPGuqT6XDzrybxgpVWb3ib4L6XfsxTv%2BuS2KPNxxLNDDGY5WvQLJzqxgVT6A%2BRIbOQt6PD7UkUR6R6seKvgw&X-Amz-Signature=21af3521c4d4849d26ae596e9b182a18a6a4841e47b06e6932f788d1c67b62f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GZZFZA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIC1JzTD2S9Y2qHq9fti2RFi1%2FXP%2BuM%2Bv9dMThylbif6GAiEA%2BwEuJiVo2PuYHV919RZ%2B1A5x6smAaVh5t6N%2BDFqf0oUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMvp8xhLcW%2Fu0cwitCrcAyQ6v7qWTI%2BimK8vOSVLN1cizhP1SSClauxWTMYHo2oRGBf6oWD4m92R6S0Fg%2Bbd%2Fk1ztkSkXJBb91H80NmDjgXZCK7RTqAn6xabOGkdVpyuoMOz6ZcIzVYovUXqNa2CQi6XqfeylYBiVOY6KBF0OAHH%2BF%2BLa3bhC%2BqcRwV2j7mAPG5Jtk5Z%2FUuWKEwtDzdeJH8Rb9qvE7r4fehc%2B6cY7f7PeGEyDm9CvPdCKCQMCiygVLVKi5pZgWg06JcgP6olPATcOGKXOz79ukLfUtG9uuMyzfLge3QA8693n6xoZql%2Bz5hvFmYzjTe3dSHoE94kx%2BobNlooEzNRWdS2hGbyurYtNP0nIgfqBh9w2ll%2Bg%2BtOMksgTakpMYKgficSfxLRv%2F8uupK2NbX%2Bu%2BEhdA%2FEySgpOxXpAbvlMtOQgCHW61%2FGcAxh4WJ%2FexnKkTbfhKRZO5sSbrH505G3uBI2U3XrPsyQ4mqidTautRx2tRQJ0DHsDIA7%2BYklguVa5pBY8DX1Wx0aJwm45OWHGUUt3rUrFECeHKoDkd5rou5xUTtgmrRrxf%2B2rqNOiZB5bPd%2BXJqr1PPy3MKNvsrotMIaqBIqL7mG2W1Gjg3gqtfEIms5tkia7EakhaoFD5m0JqONMN28ycQGOqUBHMnTRqmdWhe%2BJvBMI7dFXnbEPi%2BG7%2FoXdOXMURD0NDSC3dtUTKtWzp8Hi5yIMhU2j4rpBVAAy3NDjHdBar6eGVoDMbG0%2F7WL8XVTjiEVKqP5UjGlabUxlkZOImrmZvH%2FSHf6ctgrhPGuqT6XDzrybxgpVWb3ib4L6XfsxTv%2BuS2KPNxxLNDDGY5WvQLJzqxgVT6A%2BRIbOQt6PD7UkUR6R6seKvgw&X-Amz-Signature=b150db1e7049bbe9ac516f7ec862951b868c33c420b05c16918e6e161c77a2dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GZZFZA%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIC1JzTD2S9Y2qHq9fti2RFi1%2FXP%2BuM%2Bv9dMThylbif6GAiEA%2BwEuJiVo2PuYHV919RZ%2B1A5x6smAaVh5t6N%2BDFqf0oUq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDMvp8xhLcW%2Fu0cwitCrcAyQ6v7qWTI%2BimK8vOSVLN1cizhP1SSClauxWTMYHo2oRGBf6oWD4m92R6S0Fg%2Bbd%2Fk1ztkSkXJBb91H80NmDjgXZCK7RTqAn6xabOGkdVpyuoMOz6ZcIzVYovUXqNa2CQi6XqfeylYBiVOY6KBF0OAHH%2BF%2BLa3bhC%2BqcRwV2j7mAPG5Jtk5Z%2FUuWKEwtDzdeJH8Rb9qvE7r4fehc%2B6cY7f7PeGEyDm9CvPdCKCQMCiygVLVKi5pZgWg06JcgP6olPATcOGKXOz79ukLfUtG9uuMyzfLge3QA8693n6xoZql%2Bz5hvFmYzjTe3dSHoE94kx%2BobNlooEzNRWdS2hGbyurYtNP0nIgfqBh9w2ll%2Bg%2BtOMksgTakpMYKgficSfxLRv%2F8uupK2NbX%2Bu%2BEhdA%2FEySgpOxXpAbvlMtOQgCHW61%2FGcAxh4WJ%2FexnKkTbfhKRZO5sSbrH505G3uBI2U3XrPsyQ4mqidTautRx2tRQJ0DHsDIA7%2BYklguVa5pBY8DX1Wx0aJwm45OWHGUUt3rUrFECeHKoDkd5rou5xUTtgmrRrxf%2B2rqNOiZB5bPd%2BXJqr1PPy3MKNvsrotMIaqBIqL7mG2W1Gjg3gqtfEIms5tkia7EakhaoFD5m0JqONMN28ycQGOqUBHMnTRqmdWhe%2BJvBMI7dFXnbEPi%2BG7%2FoXdOXMURD0NDSC3dtUTKtWzp8Hi5yIMhU2j4rpBVAAy3NDjHdBar6eGVoDMbG0%2F7WL8XVTjiEVKqP5UjGlabUxlkZOImrmZvH%2FSHf6ctgrhPGuqT6XDzrybxgpVWb3ib4L6XfsxTv%2BuS2KPNxxLNDDGY5WvQLJzqxgVT6A%2BRIbOQt6PD7UkUR6R6seKvgw&X-Amz-Signature=83b133b44247c77165a4f73d4d60d19dfde9670bb46a0e8dbf46ad3f13f7ca83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
