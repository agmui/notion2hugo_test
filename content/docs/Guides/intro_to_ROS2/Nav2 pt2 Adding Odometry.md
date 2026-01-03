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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOOISG2%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC0jcA%2F8lJqd28c4X7z686aTQ48qCDSoQ1%2BTZY%2FZi50pQIhAMzqANhn%2FuGFzCaXuMqRYRz5ozYlsoVwYWUVPg58PbqPKv8DCAUQABoMNjM3NDIzMTgzODA1Igwqst3tHSNAJAm0gjcq3ANOcHNDJSyMuSxiAwJHgEd2gTfEtPY6Up4%2BqGAMb1%2BdQojXmgy9RJNgcK3FSNxG86m8QoWiZwO6Knx7Kc6NkR3Xor3ruvuLfuDtwpbI9nJlPRli3zFIXsDNUljAEdrgyYrBRmXF%2FTwXApPW%2BAlCo9PUJZ7%2Bl2SUEN4NeJZCUjNOxL07j6aJ518oFDMKU7Az3NoUY2Njw73q7cn6%2BS3EmFaI91iobVk47dn121rwy56eKz%2F4GPSIYB%2FheX7R%2F57u%2BnQK4OqwQt%2F%2B6RjQ7zZ1sr30k6XI%2BAbLv0EfU5cJTuCYwsoQmbfC2BarE645XR9E7clXQ%2BCrzPapjbMeIPi%2F20fIWpr9%2Fsqeooz9jsoYQbhG4f9LVGpf28CM7HyAcVRjT4AJprtdmiPbwxHhNpRX4KkMa7l78iOUk9i1qLZuemM8DyngfDyjt%2FE5r8PMXTJ%2BuI1JC3%2BsoxvqeDZkuR33upKJalIBApezSX3bjIzl6cFyqMyLbvAOvUO1K5T99a2ZIhTj1y3jY1XQ%2BHM26g9sDCSba25ezGymPq0zWEROUMLFcZewod8ooedrpZAivqFJJw%2Bbj37%2ByEgvAcmuCzyUnGtdKBtBow5OSJ6FelUv9hrXaa%2FWiOtGPZ22A9UyszCNx%2BDKBjqkAXafxc9JTLNCXd7XoB%2B%2BGWHZoYnWdu7cP8BKrKFF%2FFugX4U39r12XShDR3Fwo65DrSjCCN%2FPxL5MBWmwQ9c2CYeSeybSl%2Ff8pQR7zMa0kZ5Jbn6Pv4052bFv0oDfbayHAx1XCaj0FVi1oflmFQz60U155QcgajHbaTJvsVC4bTCpkpM3bdSj5wuQRu8%2FgTtPBYifUahSxCdyGbyr4aSxnOprxRvi&X-Amz-Signature=79633f2bf5516d34b2c434d421dc50eb9a82b9e2eb262c91a5060e64e6dfa24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOOISG2%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC0jcA%2F8lJqd28c4X7z686aTQ48qCDSoQ1%2BTZY%2FZi50pQIhAMzqANhn%2FuGFzCaXuMqRYRz5ozYlsoVwYWUVPg58PbqPKv8DCAUQABoMNjM3NDIzMTgzODA1Igwqst3tHSNAJAm0gjcq3ANOcHNDJSyMuSxiAwJHgEd2gTfEtPY6Up4%2BqGAMb1%2BdQojXmgy9RJNgcK3FSNxG86m8QoWiZwO6Knx7Kc6NkR3Xor3ruvuLfuDtwpbI9nJlPRli3zFIXsDNUljAEdrgyYrBRmXF%2FTwXApPW%2BAlCo9PUJZ7%2Bl2SUEN4NeJZCUjNOxL07j6aJ518oFDMKU7Az3NoUY2Njw73q7cn6%2BS3EmFaI91iobVk47dn121rwy56eKz%2F4GPSIYB%2FheX7R%2F57u%2BnQK4OqwQt%2F%2B6RjQ7zZ1sr30k6XI%2BAbLv0EfU5cJTuCYwsoQmbfC2BarE645XR9E7clXQ%2BCrzPapjbMeIPi%2F20fIWpr9%2Fsqeooz9jsoYQbhG4f9LVGpf28CM7HyAcVRjT4AJprtdmiPbwxHhNpRX4KkMa7l78iOUk9i1qLZuemM8DyngfDyjt%2FE5r8PMXTJ%2BuI1JC3%2BsoxvqeDZkuR33upKJalIBApezSX3bjIzl6cFyqMyLbvAOvUO1K5T99a2ZIhTj1y3jY1XQ%2BHM26g9sDCSba25ezGymPq0zWEROUMLFcZewod8ooedrpZAivqFJJw%2Bbj37%2ByEgvAcmuCzyUnGtdKBtBow5OSJ6FelUv9hrXaa%2FWiOtGPZ22A9UyszCNx%2BDKBjqkAXafxc9JTLNCXd7XoB%2B%2BGWHZoYnWdu7cP8BKrKFF%2FFugX4U39r12XShDR3Fwo65DrSjCCN%2FPxL5MBWmwQ9c2CYeSeybSl%2Ff8pQR7zMa0kZ5Jbn6Pv4052bFv0oDfbayHAx1XCaj0FVi1oflmFQz60U155QcgajHbaTJvsVC4bTCpkpM3bdSj5wuQRu8%2FgTtPBYifUahSxCdyGbyr4aSxnOprxRvi&X-Amz-Signature=75e47d9ed41382225216f54dd7aca6c2951d7d6373cbd2cdbfdd2c5b7dd28a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOOISG2%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC0jcA%2F8lJqd28c4X7z686aTQ48qCDSoQ1%2BTZY%2FZi50pQIhAMzqANhn%2FuGFzCaXuMqRYRz5ozYlsoVwYWUVPg58PbqPKv8DCAUQABoMNjM3NDIzMTgzODA1Igwqst3tHSNAJAm0gjcq3ANOcHNDJSyMuSxiAwJHgEd2gTfEtPY6Up4%2BqGAMb1%2BdQojXmgy9RJNgcK3FSNxG86m8QoWiZwO6Knx7Kc6NkR3Xor3ruvuLfuDtwpbI9nJlPRli3zFIXsDNUljAEdrgyYrBRmXF%2FTwXApPW%2BAlCo9PUJZ7%2Bl2SUEN4NeJZCUjNOxL07j6aJ518oFDMKU7Az3NoUY2Njw73q7cn6%2BS3EmFaI91iobVk47dn121rwy56eKz%2F4GPSIYB%2FheX7R%2F57u%2BnQK4OqwQt%2F%2B6RjQ7zZ1sr30k6XI%2BAbLv0EfU5cJTuCYwsoQmbfC2BarE645XR9E7clXQ%2BCrzPapjbMeIPi%2F20fIWpr9%2Fsqeooz9jsoYQbhG4f9LVGpf28CM7HyAcVRjT4AJprtdmiPbwxHhNpRX4KkMa7l78iOUk9i1qLZuemM8DyngfDyjt%2FE5r8PMXTJ%2BuI1JC3%2BsoxvqeDZkuR33upKJalIBApezSX3bjIzl6cFyqMyLbvAOvUO1K5T99a2ZIhTj1y3jY1XQ%2BHM26g9sDCSba25ezGymPq0zWEROUMLFcZewod8ooedrpZAivqFJJw%2Bbj37%2ByEgvAcmuCzyUnGtdKBtBow5OSJ6FelUv9hrXaa%2FWiOtGPZ22A9UyszCNx%2BDKBjqkAXafxc9JTLNCXd7XoB%2B%2BGWHZoYnWdu7cP8BKrKFF%2FFugX4U39r12XShDR3Fwo65DrSjCCN%2FPxL5MBWmwQ9c2CYeSeybSl%2Ff8pQR7zMa0kZ5Jbn6Pv4052bFv0oDfbayHAx1XCaj0FVi1oflmFQz60U155QcgajHbaTJvsVC4bTCpkpM3bdSj5wuQRu8%2FgTtPBYifUahSxCdyGbyr4aSxnOprxRvi&X-Amz-Signature=42e4b124b955a790d468b80b9e66350bce2824ad8bb101937e8871bcae383dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOOISG2%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC0jcA%2F8lJqd28c4X7z686aTQ48qCDSoQ1%2BTZY%2FZi50pQIhAMzqANhn%2FuGFzCaXuMqRYRz5ozYlsoVwYWUVPg58PbqPKv8DCAUQABoMNjM3NDIzMTgzODA1Igwqst3tHSNAJAm0gjcq3ANOcHNDJSyMuSxiAwJHgEd2gTfEtPY6Up4%2BqGAMb1%2BdQojXmgy9RJNgcK3FSNxG86m8QoWiZwO6Knx7Kc6NkR3Xor3ruvuLfuDtwpbI9nJlPRli3zFIXsDNUljAEdrgyYrBRmXF%2FTwXApPW%2BAlCo9PUJZ7%2Bl2SUEN4NeJZCUjNOxL07j6aJ518oFDMKU7Az3NoUY2Njw73q7cn6%2BS3EmFaI91iobVk47dn121rwy56eKz%2F4GPSIYB%2FheX7R%2F57u%2BnQK4OqwQt%2F%2B6RjQ7zZ1sr30k6XI%2BAbLv0EfU5cJTuCYwsoQmbfC2BarE645XR9E7clXQ%2BCrzPapjbMeIPi%2F20fIWpr9%2Fsqeooz9jsoYQbhG4f9LVGpf28CM7HyAcVRjT4AJprtdmiPbwxHhNpRX4KkMa7l78iOUk9i1qLZuemM8DyngfDyjt%2FE5r8PMXTJ%2BuI1JC3%2BsoxvqeDZkuR33upKJalIBApezSX3bjIzl6cFyqMyLbvAOvUO1K5T99a2ZIhTj1y3jY1XQ%2BHM26g9sDCSba25ezGymPq0zWEROUMLFcZewod8ooedrpZAivqFJJw%2Bbj37%2ByEgvAcmuCzyUnGtdKBtBow5OSJ6FelUv9hrXaa%2FWiOtGPZ22A9UyszCNx%2BDKBjqkAXafxc9JTLNCXd7XoB%2B%2BGWHZoYnWdu7cP8BKrKFF%2FFugX4U39r12XShDR3Fwo65DrSjCCN%2FPxL5MBWmwQ9c2CYeSeybSl%2Ff8pQR7zMa0kZ5Jbn6Pv4052bFv0oDfbayHAx1XCaj0FVi1oflmFQz60U155QcgajHbaTJvsVC4bTCpkpM3bdSj5wuQRu8%2FgTtPBYifUahSxCdyGbyr4aSxnOprxRvi&X-Amz-Signature=d466763379761014ac1d5d6ca8ff1d8bcd8932fc0491b0c6101c809c35d675fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOOISG2%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC0jcA%2F8lJqd28c4X7z686aTQ48qCDSoQ1%2BTZY%2FZi50pQIhAMzqANhn%2FuGFzCaXuMqRYRz5ozYlsoVwYWUVPg58PbqPKv8DCAUQABoMNjM3NDIzMTgzODA1Igwqst3tHSNAJAm0gjcq3ANOcHNDJSyMuSxiAwJHgEd2gTfEtPY6Up4%2BqGAMb1%2BdQojXmgy9RJNgcK3FSNxG86m8QoWiZwO6Knx7Kc6NkR3Xor3ruvuLfuDtwpbI9nJlPRli3zFIXsDNUljAEdrgyYrBRmXF%2FTwXApPW%2BAlCo9PUJZ7%2Bl2SUEN4NeJZCUjNOxL07j6aJ518oFDMKU7Az3NoUY2Njw73q7cn6%2BS3EmFaI91iobVk47dn121rwy56eKz%2F4GPSIYB%2FheX7R%2F57u%2BnQK4OqwQt%2F%2B6RjQ7zZ1sr30k6XI%2BAbLv0EfU5cJTuCYwsoQmbfC2BarE645XR9E7clXQ%2BCrzPapjbMeIPi%2F20fIWpr9%2Fsqeooz9jsoYQbhG4f9LVGpf28CM7HyAcVRjT4AJprtdmiPbwxHhNpRX4KkMa7l78iOUk9i1qLZuemM8DyngfDyjt%2FE5r8PMXTJ%2BuI1JC3%2BsoxvqeDZkuR33upKJalIBApezSX3bjIzl6cFyqMyLbvAOvUO1K5T99a2ZIhTj1y3jY1XQ%2BHM26g9sDCSba25ezGymPq0zWEROUMLFcZewod8ooedrpZAivqFJJw%2Bbj37%2ByEgvAcmuCzyUnGtdKBtBow5OSJ6FelUv9hrXaa%2FWiOtGPZ22A9UyszCNx%2BDKBjqkAXafxc9JTLNCXd7XoB%2B%2BGWHZoYnWdu7cP8BKrKFF%2FFugX4U39r12XShDR3Fwo65DrSjCCN%2FPxL5MBWmwQ9c2CYeSeybSl%2Ff8pQR7zMa0kZ5Jbn6Pv4052bFv0oDfbayHAx1XCaj0FVi1oflmFQz60U155QcgajHbaTJvsVC4bTCpkpM3bdSj5wuQRu8%2FgTtPBYifUahSxCdyGbyr4aSxnOprxRvi&X-Amz-Signature=9e7948684625775e9f17c6dfe90a831b6a909b8ace7e945514a9042751bb93ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOOISG2%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC0jcA%2F8lJqd28c4X7z686aTQ48qCDSoQ1%2BTZY%2FZi50pQIhAMzqANhn%2FuGFzCaXuMqRYRz5ozYlsoVwYWUVPg58PbqPKv8DCAUQABoMNjM3NDIzMTgzODA1Igwqst3tHSNAJAm0gjcq3ANOcHNDJSyMuSxiAwJHgEd2gTfEtPY6Up4%2BqGAMb1%2BdQojXmgy9RJNgcK3FSNxG86m8QoWiZwO6Knx7Kc6NkR3Xor3ruvuLfuDtwpbI9nJlPRli3zFIXsDNUljAEdrgyYrBRmXF%2FTwXApPW%2BAlCo9PUJZ7%2Bl2SUEN4NeJZCUjNOxL07j6aJ518oFDMKU7Az3NoUY2Njw73q7cn6%2BS3EmFaI91iobVk47dn121rwy56eKz%2F4GPSIYB%2FheX7R%2F57u%2BnQK4OqwQt%2F%2B6RjQ7zZ1sr30k6XI%2BAbLv0EfU5cJTuCYwsoQmbfC2BarE645XR9E7clXQ%2BCrzPapjbMeIPi%2F20fIWpr9%2Fsqeooz9jsoYQbhG4f9LVGpf28CM7HyAcVRjT4AJprtdmiPbwxHhNpRX4KkMa7l78iOUk9i1qLZuemM8DyngfDyjt%2FE5r8PMXTJ%2BuI1JC3%2BsoxvqeDZkuR33upKJalIBApezSX3bjIzl6cFyqMyLbvAOvUO1K5T99a2ZIhTj1y3jY1XQ%2BHM26g9sDCSba25ezGymPq0zWEROUMLFcZewod8ooedrpZAivqFJJw%2Bbj37%2ByEgvAcmuCzyUnGtdKBtBow5OSJ6FelUv9hrXaa%2FWiOtGPZ22A9UyszCNx%2BDKBjqkAXafxc9JTLNCXd7XoB%2B%2BGWHZoYnWdu7cP8BKrKFF%2FFugX4U39r12XShDR3Fwo65DrSjCCN%2FPxL5MBWmwQ9c2CYeSeybSl%2Ff8pQR7zMa0kZ5Jbn6Pv4052bFv0oDfbayHAx1XCaj0FVi1oflmFQz60U155QcgajHbaTJvsVC4bTCpkpM3bdSj5wuQRu8%2FgTtPBYifUahSxCdyGbyr4aSxnOprxRvi&X-Amz-Signature=ec52fc477db5335e8da034ad864810a6761f242da47b6d9fad6aa0c4a87375a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOOISG2%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC0jcA%2F8lJqd28c4X7z686aTQ48qCDSoQ1%2BTZY%2FZi50pQIhAMzqANhn%2FuGFzCaXuMqRYRz5ozYlsoVwYWUVPg58PbqPKv8DCAUQABoMNjM3NDIzMTgzODA1Igwqst3tHSNAJAm0gjcq3ANOcHNDJSyMuSxiAwJHgEd2gTfEtPY6Up4%2BqGAMb1%2BdQojXmgy9RJNgcK3FSNxG86m8QoWiZwO6Knx7Kc6NkR3Xor3ruvuLfuDtwpbI9nJlPRli3zFIXsDNUljAEdrgyYrBRmXF%2FTwXApPW%2BAlCo9PUJZ7%2Bl2SUEN4NeJZCUjNOxL07j6aJ518oFDMKU7Az3NoUY2Njw73q7cn6%2BS3EmFaI91iobVk47dn121rwy56eKz%2F4GPSIYB%2FheX7R%2F57u%2BnQK4OqwQt%2F%2B6RjQ7zZ1sr30k6XI%2BAbLv0EfU5cJTuCYwsoQmbfC2BarE645XR9E7clXQ%2BCrzPapjbMeIPi%2F20fIWpr9%2Fsqeooz9jsoYQbhG4f9LVGpf28CM7HyAcVRjT4AJprtdmiPbwxHhNpRX4KkMa7l78iOUk9i1qLZuemM8DyngfDyjt%2FE5r8PMXTJ%2BuI1JC3%2BsoxvqeDZkuR33upKJalIBApezSX3bjIzl6cFyqMyLbvAOvUO1K5T99a2ZIhTj1y3jY1XQ%2BHM26g9sDCSba25ezGymPq0zWEROUMLFcZewod8ooedrpZAivqFJJw%2Bbj37%2ByEgvAcmuCzyUnGtdKBtBow5OSJ6FelUv9hrXaa%2FWiOtGPZ22A9UyszCNx%2BDKBjqkAXafxc9JTLNCXd7XoB%2B%2BGWHZoYnWdu7cP8BKrKFF%2FFugX4U39r12XShDR3Fwo65DrSjCCN%2FPxL5MBWmwQ9c2CYeSeybSl%2Ff8pQR7zMa0kZ5Jbn6Pv4052bFv0oDfbayHAx1XCaj0FVi1oflmFQz60U155QcgajHbaTJvsVC4bTCpkpM3bdSj5wuQRu8%2FgTtPBYifUahSxCdyGbyr4aSxnOprxRvi&X-Amz-Signature=0bc7f545888177516352d16ce0bf77d6038a588ff0be26c54407db3c17688b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOOISG2%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC0jcA%2F8lJqd28c4X7z686aTQ48qCDSoQ1%2BTZY%2FZi50pQIhAMzqANhn%2FuGFzCaXuMqRYRz5ozYlsoVwYWUVPg58PbqPKv8DCAUQABoMNjM3NDIzMTgzODA1Igwqst3tHSNAJAm0gjcq3ANOcHNDJSyMuSxiAwJHgEd2gTfEtPY6Up4%2BqGAMb1%2BdQojXmgy9RJNgcK3FSNxG86m8QoWiZwO6Knx7Kc6NkR3Xor3ruvuLfuDtwpbI9nJlPRli3zFIXsDNUljAEdrgyYrBRmXF%2FTwXApPW%2BAlCo9PUJZ7%2Bl2SUEN4NeJZCUjNOxL07j6aJ518oFDMKU7Az3NoUY2Njw73q7cn6%2BS3EmFaI91iobVk47dn121rwy56eKz%2F4GPSIYB%2FheX7R%2F57u%2BnQK4OqwQt%2F%2B6RjQ7zZ1sr30k6XI%2BAbLv0EfU5cJTuCYwsoQmbfC2BarE645XR9E7clXQ%2BCrzPapjbMeIPi%2F20fIWpr9%2Fsqeooz9jsoYQbhG4f9LVGpf28CM7HyAcVRjT4AJprtdmiPbwxHhNpRX4KkMa7l78iOUk9i1qLZuemM8DyngfDyjt%2FE5r8PMXTJ%2BuI1JC3%2BsoxvqeDZkuR33upKJalIBApezSX3bjIzl6cFyqMyLbvAOvUO1K5T99a2ZIhTj1y3jY1XQ%2BHM26g9sDCSba25ezGymPq0zWEROUMLFcZewod8ooedrpZAivqFJJw%2Bbj37%2ByEgvAcmuCzyUnGtdKBtBow5OSJ6FelUv9hrXaa%2FWiOtGPZ22A9UyszCNx%2BDKBjqkAXafxc9JTLNCXd7XoB%2B%2BGWHZoYnWdu7cP8BKrKFF%2FFugX4U39r12XShDR3Fwo65DrSjCCN%2FPxL5MBWmwQ9c2CYeSeybSl%2Ff8pQR7zMa0kZ5Jbn6Pv4052bFv0oDfbayHAx1XCaj0FVi1oflmFQz60U155QcgajHbaTJvsVC4bTCpkpM3bdSj5wuQRu8%2FgTtPBYifUahSxCdyGbyr4aSxnOprxRvi&X-Amz-Signature=b2f9e9a54762fe1da386cef4a1da5d9f7df9a9f7820f3bf6b92720bc36bae46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOOISG2%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC0jcA%2F8lJqd28c4X7z686aTQ48qCDSoQ1%2BTZY%2FZi50pQIhAMzqANhn%2FuGFzCaXuMqRYRz5ozYlsoVwYWUVPg58PbqPKv8DCAUQABoMNjM3NDIzMTgzODA1Igwqst3tHSNAJAm0gjcq3ANOcHNDJSyMuSxiAwJHgEd2gTfEtPY6Up4%2BqGAMb1%2BdQojXmgy9RJNgcK3FSNxG86m8QoWiZwO6Knx7Kc6NkR3Xor3ruvuLfuDtwpbI9nJlPRli3zFIXsDNUljAEdrgyYrBRmXF%2FTwXApPW%2BAlCo9PUJZ7%2Bl2SUEN4NeJZCUjNOxL07j6aJ518oFDMKU7Az3NoUY2Njw73q7cn6%2BS3EmFaI91iobVk47dn121rwy56eKz%2F4GPSIYB%2FheX7R%2F57u%2BnQK4OqwQt%2F%2B6RjQ7zZ1sr30k6XI%2BAbLv0EfU5cJTuCYwsoQmbfC2BarE645XR9E7clXQ%2BCrzPapjbMeIPi%2F20fIWpr9%2Fsqeooz9jsoYQbhG4f9LVGpf28CM7HyAcVRjT4AJprtdmiPbwxHhNpRX4KkMa7l78iOUk9i1qLZuemM8DyngfDyjt%2FE5r8PMXTJ%2BuI1JC3%2BsoxvqeDZkuR33upKJalIBApezSX3bjIzl6cFyqMyLbvAOvUO1K5T99a2ZIhTj1y3jY1XQ%2BHM26g9sDCSba25ezGymPq0zWEROUMLFcZewod8ooedrpZAivqFJJw%2Bbj37%2ByEgvAcmuCzyUnGtdKBtBow5OSJ6FelUv9hrXaa%2FWiOtGPZ22A9UyszCNx%2BDKBjqkAXafxc9JTLNCXd7XoB%2B%2BGWHZoYnWdu7cP8BKrKFF%2FFugX4U39r12XShDR3Fwo65DrSjCCN%2FPxL5MBWmwQ9c2CYeSeybSl%2Ff8pQR7zMa0kZ5Jbn6Pv4052bFv0oDfbayHAx1XCaj0FVi1oflmFQz60U155QcgajHbaTJvsVC4bTCpkpM3bdSj5wuQRu8%2FgTtPBYifUahSxCdyGbyr4aSxnOprxRvi&X-Amz-Signature=d5badf2e07bc5289d176e57e8534c503c09b555b8330736637af8b0306781abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FOOISG2%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQC0jcA%2F8lJqd28c4X7z686aTQ48qCDSoQ1%2BTZY%2FZi50pQIhAMzqANhn%2FuGFzCaXuMqRYRz5ozYlsoVwYWUVPg58PbqPKv8DCAUQABoMNjM3NDIzMTgzODA1Igwqst3tHSNAJAm0gjcq3ANOcHNDJSyMuSxiAwJHgEd2gTfEtPY6Up4%2BqGAMb1%2BdQojXmgy9RJNgcK3FSNxG86m8QoWiZwO6Knx7Kc6NkR3Xor3ruvuLfuDtwpbI9nJlPRli3zFIXsDNUljAEdrgyYrBRmXF%2FTwXApPW%2BAlCo9PUJZ7%2Bl2SUEN4NeJZCUjNOxL07j6aJ518oFDMKU7Az3NoUY2Njw73q7cn6%2BS3EmFaI91iobVk47dn121rwy56eKz%2F4GPSIYB%2FheX7R%2F57u%2BnQK4OqwQt%2F%2B6RjQ7zZ1sr30k6XI%2BAbLv0EfU5cJTuCYwsoQmbfC2BarE645XR9E7clXQ%2BCrzPapjbMeIPi%2F20fIWpr9%2Fsqeooz9jsoYQbhG4f9LVGpf28CM7HyAcVRjT4AJprtdmiPbwxHhNpRX4KkMa7l78iOUk9i1qLZuemM8DyngfDyjt%2FE5r8PMXTJ%2BuI1JC3%2BsoxvqeDZkuR33upKJalIBApezSX3bjIzl6cFyqMyLbvAOvUO1K5T99a2ZIhTj1y3jY1XQ%2BHM26g9sDCSba25ezGymPq0zWEROUMLFcZewod8ooedrpZAivqFJJw%2Bbj37%2ByEgvAcmuCzyUnGtdKBtBow5OSJ6FelUv9hrXaa%2FWiOtGPZ22A9UyszCNx%2BDKBjqkAXafxc9JTLNCXd7XoB%2B%2BGWHZoYnWdu7cP8BKrKFF%2FFugX4U39r12XShDR3Fwo65DrSjCCN%2FPxL5MBWmwQ9c2CYeSeybSl%2Ff8pQR7zMa0kZ5Jbn6Pv4052bFv0oDfbayHAx1XCaj0FVi1oflmFQz60U155QcgajHbaTJvsVC4bTCpkpM3bdSj5wuQRu8%2FgTtPBYifUahSxCdyGbyr4aSxnOprxRvi&X-Amz-Signature=fdd885657cb61d4ebecee7778790d949b6da1ac5f8491a6941f3237d51035382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVWM2KK2%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIDk87zV%2FFpu3w9SJR37%2F4jCpe5%2Fvc%2BsHGvbWouLSPLZCAiBvu0xueplbf5d1tX3lliDtucO%2B36DZnIBxAd3qWKBe0ir%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIM%2FgVp668iOREKdcVgKtwDcxv%2FaAEDAdN9NNA8Av8d6sTQVu%2FGIYVb%2FY1ckpXB37etz3nKnohu6%2BNHpaDjLV99JGyDsR4%2FZq3tkIHavimfdnRIWoQqIVd2rFDnhaYt2c2uUBR5k2KIJt0xEGlMPjWgS%2F9RF8H3TVii9fJ4mTtWSSy835svSursQJff7CxNkfamL%2Bmf9kVV5Gi%2BsVrfbhXP4bE9CvwktU8hWPPHzzDcuTCEYitogx24NbIefVQ%2F2fdL0lJdmjR3A5mPWsEoV6SjN%2BRd2xoF8zXfpWMzqCBjh5r%2FLJIIuAR7uemhY4aua85RBbPu1uV24Th34Tl2wILdjhidYQ4%2BwNMM0hTPgvq08yTIzKg3UeXiHLrtYioekwxpX41HayotYcc1nI8pcl8ys5QIG%2FIglKAdhZGQmOZZY97oiq5256yLhjGceU3Xk4PATeisuXMVB26Rid3%2BQb0AZ9TLu7sIrkiw2PF0Up8h4Pc8BptI0d4%2BE%2F9PZm8VCMaQjHZ%2B%2FC0%2BYY85ht9YCO3nnx8nU176f2msjAv4xsNriMdbYj7Lkl4oZ7g7G0PHb0R%2Fuja9hyyGEifhuUdsOXj%2FotYaq5K4D1JSWFAKZCqHjqg7z2wakP9lcQxbj20jogbnVIrzYcmw5VgAqDkw%2Bs3gygY6pgFWHtnjmGRZVKnIEHwtfadokM%2FFVvMZqTZIho8N7A8lrFsFlvN9HKOjuHV7xAsDqlu0uTbuuLWdOHS7y9LyuLxWkLTmEfkShGjpYFO7RRqUwSY5%2F6aQIVj09VYmXfBOCJ0z5OTBqHihLQfsMgWAX0mnR%2Ff0zZh3AFZLVWBg76X9%2FRBMLMQIHkPd8qyq7%2B46VCeoLhoQmQeu5xswtmTLRhrsYesHqZow&X-Amz-Signature=475f84652b83c1d02c62551dfc7b37481de48ba30a17c71f1719a6a783fae76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSF7HN6%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCXhDMryc3c%2BS4O7a6T3Pc5qrk3goaH8y1HlqGMuiHptgIgG6Rznew2lDIVYkn%2FrEJXr8aL7X%2BjQKTgWsnL8zvniKUq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDNnFSTxCgApGd5XKSrcAx5kfJaOn1Ro7g62wgEOjLaoPhh%2BzJ5JSKtwakABwS7oE0Gtsz3nqHm5Wyu4zK0BGNnQrm9Oxpe2O1NRa2GUj%2Fgt6D0FKDtfX0rUNylJwrjXhdqIpmsv5cEyp7PK4PNIBc1%2FMy2I11nEWHXL34eIOPBtFwn1kbcuTx7ESGftjO5JHxzOBjld8CRmKzqxNkP19ctB0iuBfNtH8rGBkmGTxrfST3SZ3XltIMZtRMG9cmiLfQeA9Pb5pmE58BpLOkyz4Eiy93Xwmj0RCjSuOBM%2B16OlxnJOLHpWWXrvUvrpAd8oG0UZC8R5KT15%2FZd9enpfVNkKqt8cPZlsl6UOygD2k9aaMx%2FTMIABZ0ssuxR2UDjGHJHotrCHV0pnTFieKUyRk3cBvvFCHD8ew1LGbNHxUPerI9qdQjIbU5K7W%2BwbxTfmiqrpK1DnFhkyhuQCodtcnio0eFejn4vP1zdbbRIQz2GsYKpfRKqcmYKSMCXdWRVLZibJs7cd6IS3Gk0zRTVDEq4NUTcZp7Fw38zkD1dAKpdJPdQTmLRIVcFWhdE1wlfgvH8cZhifWMTDR7IKwz%2FMiy2sE4IGrLjCq9jN494LXo7tdC5algXbheSsDVqAWn4mQhhmjCsY3cB3cNeqMNrO4MoGOqUBY3WegbX3Oup6fEgKPy1eBRMCW6tXuQIPszK8GEq1qjMumnOVRjuVc9s7rU3%2FBfl28EiEOgtHGUSrjJtIW%2F8bmLRKhfxj8FBghKJP0h618ZYB%2B6wI5x9g1BSTMHf9EAOx%2BFwFql0deZO4eArRWmN%2BmJvbYS%2B3DfVdDao5ZwY7wn5Ht2OiN8O3YRFj7vWZcV2w9I2UNosRJmHQmhVV2Q4izBHpsgSx&X-Amz-Signature=140788fdd8712df1c6202e4f5712df06479d3df78bd5dd6ba24acee40db65f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSF7HN6%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCXhDMryc3c%2BS4O7a6T3Pc5qrk3goaH8y1HlqGMuiHptgIgG6Rznew2lDIVYkn%2FrEJXr8aL7X%2BjQKTgWsnL8zvniKUq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDNnFSTxCgApGd5XKSrcAx5kfJaOn1Ro7g62wgEOjLaoPhh%2BzJ5JSKtwakABwS7oE0Gtsz3nqHm5Wyu4zK0BGNnQrm9Oxpe2O1NRa2GUj%2Fgt6D0FKDtfX0rUNylJwrjXhdqIpmsv5cEyp7PK4PNIBc1%2FMy2I11nEWHXL34eIOPBtFwn1kbcuTx7ESGftjO5JHxzOBjld8CRmKzqxNkP19ctB0iuBfNtH8rGBkmGTxrfST3SZ3XltIMZtRMG9cmiLfQeA9Pb5pmE58BpLOkyz4Eiy93Xwmj0RCjSuOBM%2B16OlxnJOLHpWWXrvUvrpAd8oG0UZC8R5KT15%2FZd9enpfVNkKqt8cPZlsl6UOygD2k9aaMx%2FTMIABZ0ssuxR2UDjGHJHotrCHV0pnTFieKUyRk3cBvvFCHD8ew1LGbNHxUPerI9qdQjIbU5K7W%2BwbxTfmiqrpK1DnFhkyhuQCodtcnio0eFejn4vP1zdbbRIQz2GsYKpfRKqcmYKSMCXdWRVLZibJs7cd6IS3Gk0zRTVDEq4NUTcZp7Fw38zkD1dAKpdJPdQTmLRIVcFWhdE1wlfgvH8cZhifWMTDR7IKwz%2FMiy2sE4IGrLjCq9jN494LXo7tdC5algXbheSsDVqAWn4mQhhmjCsY3cB3cNeqMNrO4MoGOqUBY3WegbX3Oup6fEgKPy1eBRMCW6tXuQIPszK8GEq1qjMumnOVRjuVc9s7rU3%2FBfl28EiEOgtHGUSrjJtIW%2F8bmLRKhfxj8FBghKJP0h618ZYB%2B6wI5x9g1BSTMHf9EAOx%2BFwFql0deZO4eArRWmN%2BmJvbYS%2B3DfVdDao5ZwY7wn5Ht2OiN8O3YRFj7vWZcV2w9I2UNosRJmHQmhVV2Q4izBHpsgSx&X-Amz-Signature=a6540020aba238d7fb8002d58181f5bf24a963ffc7aec2535befe00346593ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSF7HN6%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCXhDMryc3c%2BS4O7a6T3Pc5qrk3goaH8y1HlqGMuiHptgIgG6Rznew2lDIVYkn%2FrEJXr8aL7X%2BjQKTgWsnL8zvniKUq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDNnFSTxCgApGd5XKSrcAx5kfJaOn1Ro7g62wgEOjLaoPhh%2BzJ5JSKtwakABwS7oE0Gtsz3nqHm5Wyu4zK0BGNnQrm9Oxpe2O1NRa2GUj%2Fgt6D0FKDtfX0rUNylJwrjXhdqIpmsv5cEyp7PK4PNIBc1%2FMy2I11nEWHXL34eIOPBtFwn1kbcuTx7ESGftjO5JHxzOBjld8CRmKzqxNkP19ctB0iuBfNtH8rGBkmGTxrfST3SZ3XltIMZtRMG9cmiLfQeA9Pb5pmE58BpLOkyz4Eiy93Xwmj0RCjSuOBM%2B16OlxnJOLHpWWXrvUvrpAd8oG0UZC8R5KT15%2FZd9enpfVNkKqt8cPZlsl6UOygD2k9aaMx%2FTMIABZ0ssuxR2UDjGHJHotrCHV0pnTFieKUyRk3cBvvFCHD8ew1LGbNHxUPerI9qdQjIbU5K7W%2BwbxTfmiqrpK1DnFhkyhuQCodtcnio0eFejn4vP1zdbbRIQz2GsYKpfRKqcmYKSMCXdWRVLZibJs7cd6IS3Gk0zRTVDEq4NUTcZp7Fw38zkD1dAKpdJPdQTmLRIVcFWhdE1wlfgvH8cZhifWMTDR7IKwz%2FMiy2sE4IGrLjCq9jN494LXo7tdC5algXbheSsDVqAWn4mQhhmjCsY3cB3cNeqMNrO4MoGOqUBY3WegbX3Oup6fEgKPy1eBRMCW6tXuQIPszK8GEq1qjMumnOVRjuVc9s7rU3%2FBfl28EiEOgtHGUSrjJtIW%2F8bmLRKhfxj8FBghKJP0h618ZYB%2B6wI5x9g1BSTMHf9EAOx%2BFwFql0deZO4eArRWmN%2BmJvbYS%2B3DfVdDao5ZwY7wn5Ht2OiN8O3YRFj7vWZcV2w9I2UNosRJmHQmhVV2Q4izBHpsgSx&X-Amz-Signature=996f3dbbccf5d0b28f39f32b29f3cc96aae0f2a1f973507b3a1b7266e33c3374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSF7HN6%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCXhDMryc3c%2BS4O7a6T3Pc5qrk3goaH8y1HlqGMuiHptgIgG6Rznew2lDIVYkn%2FrEJXr8aL7X%2BjQKTgWsnL8zvniKUq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDNnFSTxCgApGd5XKSrcAx5kfJaOn1Ro7g62wgEOjLaoPhh%2BzJ5JSKtwakABwS7oE0Gtsz3nqHm5Wyu4zK0BGNnQrm9Oxpe2O1NRa2GUj%2Fgt6D0FKDtfX0rUNylJwrjXhdqIpmsv5cEyp7PK4PNIBc1%2FMy2I11nEWHXL34eIOPBtFwn1kbcuTx7ESGftjO5JHxzOBjld8CRmKzqxNkP19ctB0iuBfNtH8rGBkmGTxrfST3SZ3XltIMZtRMG9cmiLfQeA9Pb5pmE58BpLOkyz4Eiy93Xwmj0RCjSuOBM%2B16OlxnJOLHpWWXrvUvrpAd8oG0UZC8R5KT15%2FZd9enpfVNkKqt8cPZlsl6UOygD2k9aaMx%2FTMIABZ0ssuxR2UDjGHJHotrCHV0pnTFieKUyRk3cBvvFCHD8ew1LGbNHxUPerI9qdQjIbU5K7W%2BwbxTfmiqrpK1DnFhkyhuQCodtcnio0eFejn4vP1zdbbRIQz2GsYKpfRKqcmYKSMCXdWRVLZibJs7cd6IS3Gk0zRTVDEq4NUTcZp7Fw38zkD1dAKpdJPdQTmLRIVcFWhdE1wlfgvH8cZhifWMTDR7IKwz%2FMiy2sE4IGrLjCq9jN494LXo7tdC5algXbheSsDVqAWn4mQhhmjCsY3cB3cNeqMNrO4MoGOqUBY3WegbX3Oup6fEgKPy1eBRMCW6tXuQIPszK8GEq1qjMumnOVRjuVc9s7rU3%2FBfl28EiEOgtHGUSrjJtIW%2F8bmLRKhfxj8FBghKJP0h618ZYB%2B6wI5x9g1BSTMHf9EAOx%2BFwFql0deZO4eArRWmN%2BmJvbYS%2B3DfVdDao5ZwY7wn5Ht2OiN8O3YRFj7vWZcV2w9I2UNosRJmHQmhVV2Q4izBHpsgSx&X-Amz-Signature=5533d8270480590ede9c281d0df87517dbdfee9f8940a6647f6a43461dc2eff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSF7HN6%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCXhDMryc3c%2BS4O7a6T3Pc5qrk3goaH8y1HlqGMuiHptgIgG6Rznew2lDIVYkn%2FrEJXr8aL7X%2BjQKTgWsnL8zvniKUq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDNnFSTxCgApGd5XKSrcAx5kfJaOn1Ro7g62wgEOjLaoPhh%2BzJ5JSKtwakABwS7oE0Gtsz3nqHm5Wyu4zK0BGNnQrm9Oxpe2O1NRa2GUj%2Fgt6D0FKDtfX0rUNylJwrjXhdqIpmsv5cEyp7PK4PNIBc1%2FMy2I11nEWHXL34eIOPBtFwn1kbcuTx7ESGftjO5JHxzOBjld8CRmKzqxNkP19ctB0iuBfNtH8rGBkmGTxrfST3SZ3XltIMZtRMG9cmiLfQeA9Pb5pmE58BpLOkyz4Eiy93Xwmj0RCjSuOBM%2B16OlxnJOLHpWWXrvUvrpAd8oG0UZC8R5KT15%2FZd9enpfVNkKqt8cPZlsl6UOygD2k9aaMx%2FTMIABZ0ssuxR2UDjGHJHotrCHV0pnTFieKUyRk3cBvvFCHD8ew1LGbNHxUPerI9qdQjIbU5K7W%2BwbxTfmiqrpK1DnFhkyhuQCodtcnio0eFejn4vP1zdbbRIQz2GsYKpfRKqcmYKSMCXdWRVLZibJs7cd6IS3Gk0zRTVDEq4NUTcZp7Fw38zkD1dAKpdJPdQTmLRIVcFWhdE1wlfgvH8cZhifWMTDR7IKwz%2FMiy2sE4IGrLjCq9jN494LXo7tdC5algXbheSsDVqAWn4mQhhmjCsY3cB3cNeqMNrO4MoGOqUBY3WegbX3Oup6fEgKPy1eBRMCW6tXuQIPszK8GEq1qjMumnOVRjuVc9s7rU3%2FBfl28EiEOgtHGUSrjJtIW%2F8bmLRKhfxj8FBghKJP0h618ZYB%2B6wI5x9g1BSTMHf9EAOx%2BFwFql0deZO4eArRWmN%2BmJvbYS%2B3DfVdDao5ZwY7wn5Ht2OiN8O3YRFj7vWZcV2w9I2UNosRJmHQmhVV2Q4izBHpsgSx&X-Amz-Signature=4b20462f2763993ae37ab39e9bbb6bf2b978f6d314aa56d7799a16294f247571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSF7HN6%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCXhDMryc3c%2BS4O7a6T3Pc5qrk3goaH8y1HlqGMuiHptgIgG6Rznew2lDIVYkn%2FrEJXr8aL7X%2BjQKTgWsnL8zvniKUq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDNnFSTxCgApGd5XKSrcAx5kfJaOn1Ro7g62wgEOjLaoPhh%2BzJ5JSKtwakABwS7oE0Gtsz3nqHm5Wyu4zK0BGNnQrm9Oxpe2O1NRa2GUj%2Fgt6D0FKDtfX0rUNylJwrjXhdqIpmsv5cEyp7PK4PNIBc1%2FMy2I11nEWHXL34eIOPBtFwn1kbcuTx7ESGftjO5JHxzOBjld8CRmKzqxNkP19ctB0iuBfNtH8rGBkmGTxrfST3SZ3XltIMZtRMG9cmiLfQeA9Pb5pmE58BpLOkyz4Eiy93Xwmj0RCjSuOBM%2B16OlxnJOLHpWWXrvUvrpAd8oG0UZC8R5KT15%2FZd9enpfVNkKqt8cPZlsl6UOygD2k9aaMx%2FTMIABZ0ssuxR2UDjGHJHotrCHV0pnTFieKUyRk3cBvvFCHD8ew1LGbNHxUPerI9qdQjIbU5K7W%2BwbxTfmiqrpK1DnFhkyhuQCodtcnio0eFejn4vP1zdbbRIQz2GsYKpfRKqcmYKSMCXdWRVLZibJs7cd6IS3Gk0zRTVDEq4NUTcZp7Fw38zkD1dAKpdJPdQTmLRIVcFWhdE1wlfgvH8cZhifWMTDR7IKwz%2FMiy2sE4IGrLjCq9jN494LXo7tdC5algXbheSsDVqAWn4mQhhmjCsY3cB3cNeqMNrO4MoGOqUBY3WegbX3Oup6fEgKPy1eBRMCW6tXuQIPszK8GEq1qjMumnOVRjuVc9s7rU3%2FBfl28EiEOgtHGUSrjJtIW%2F8bmLRKhfxj8FBghKJP0h618ZYB%2B6wI5x9g1BSTMHf9EAOx%2BFwFql0deZO4eArRWmN%2BmJvbYS%2B3DfVdDao5ZwY7wn5Ht2OiN8O3YRFj7vWZcV2w9I2UNosRJmHQmhVV2Q4izBHpsgSx&X-Amz-Signature=1b3d6cadf922bca75deac1864d8e306de2fbef0a322101df76bd3bd7a71bb9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSF7HN6%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCXhDMryc3c%2BS4O7a6T3Pc5qrk3goaH8y1HlqGMuiHptgIgG6Rznew2lDIVYkn%2FrEJXr8aL7X%2BjQKTgWsnL8zvniKUq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDNnFSTxCgApGd5XKSrcAx5kfJaOn1Ro7g62wgEOjLaoPhh%2BzJ5JSKtwakABwS7oE0Gtsz3nqHm5Wyu4zK0BGNnQrm9Oxpe2O1NRa2GUj%2Fgt6D0FKDtfX0rUNylJwrjXhdqIpmsv5cEyp7PK4PNIBc1%2FMy2I11nEWHXL34eIOPBtFwn1kbcuTx7ESGftjO5JHxzOBjld8CRmKzqxNkP19ctB0iuBfNtH8rGBkmGTxrfST3SZ3XltIMZtRMG9cmiLfQeA9Pb5pmE58BpLOkyz4Eiy93Xwmj0RCjSuOBM%2B16OlxnJOLHpWWXrvUvrpAd8oG0UZC8R5KT15%2FZd9enpfVNkKqt8cPZlsl6UOygD2k9aaMx%2FTMIABZ0ssuxR2UDjGHJHotrCHV0pnTFieKUyRk3cBvvFCHD8ew1LGbNHxUPerI9qdQjIbU5K7W%2BwbxTfmiqrpK1DnFhkyhuQCodtcnio0eFejn4vP1zdbbRIQz2GsYKpfRKqcmYKSMCXdWRVLZibJs7cd6IS3Gk0zRTVDEq4NUTcZp7Fw38zkD1dAKpdJPdQTmLRIVcFWhdE1wlfgvH8cZhifWMTDR7IKwz%2FMiy2sE4IGrLjCq9jN494LXo7tdC5algXbheSsDVqAWn4mQhhmjCsY3cB3cNeqMNrO4MoGOqUBY3WegbX3Oup6fEgKPy1eBRMCW6tXuQIPszK8GEq1qjMumnOVRjuVc9s7rU3%2FBfl28EiEOgtHGUSrjJtIW%2F8bmLRKhfxj8FBghKJP0h618ZYB%2B6wI5x9g1BSTMHf9EAOx%2BFwFql0deZO4eArRWmN%2BmJvbYS%2B3DfVdDao5ZwY7wn5Ht2OiN8O3YRFj7vWZcV2w9I2UNosRJmHQmhVV2Q4izBHpsgSx&X-Amz-Signature=4f7fb426a3c81910f8846734f486e61c85afac9096d3420140283465fef4a114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSF7HN6%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCXhDMryc3c%2BS4O7a6T3Pc5qrk3goaH8y1HlqGMuiHptgIgG6Rznew2lDIVYkn%2FrEJXr8aL7X%2BjQKTgWsnL8zvniKUq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDNnFSTxCgApGd5XKSrcAx5kfJaOn1Ro7g62wgEOjLaoPhh%2BzJ5JSKtwakABwS7oE0Gtsz3nqHm5Wyu4zK0BGNnQrm9Oxpe2O1NRa2GUj%2Fgt6D0FKDtfX0rUNylJwrjXhdqIpmsv5cEyp7PK4PNIBc1%2FMy2I11nEWHXL34eIOPBtFwn1kbcuTx7ESGftjO5JHxzOBjld8CRmKzqxNkP19ctB0iuBfNtH8rGBkmGTxrfST3SZ3XltIMZtRMG9cmiLfQeA9Pb5pmE58BpLOkyz4Eiy93Xwmj0RCjSuOBM%2B16OlxnJOLHpWWXrvUvrpAd8oG0UZC8R5KT15%2FZd9enpfVNkKqt8cPZlsl6UOygD2k9aaMx%2FTMIABZ0ssuxR2UDjGHJHotrCHV0pnTFieKUyRk3cBvvFCHD8ew1LGbNHxUPerI9qdQjIbU5K7W%2BwbxTfmiqrpK1DnFhkyhuQCodtcnio0eFejn4vP1zdbbRIQz2GsYKpfRKqcmYKSMCXdWRVLZibJs7cd6IS3Gk0zRTVDEq4NUTcZp7Fw38zkD1dAKpdJPdQTmLRIVcFWhdE1wlfgvH8cZhifWMTDR7IKwz%2FMiy2sE4IGrLjCq9jN494LXo7tdC5algXbheSsDVqAWn4mQhhmjCsY3cB3cNeqMNrO4MoGOqUBY3WegbX3Oup6fEgKPy1eBRMCW6tXuQIPszK8GEq1qjMumnOVRjuVc9s7rU3%2FBfl28EiEOgtHGUSrjJtIW%2F8bmLRKhfxj8FBghKJP0h618ZYB%2B6wI5x9g1BSTMHf9EAOx%2BFwFql0deZO4eArRWmN%2BmJvbYS%2B3DfVdDao5ZwY7wn5Ht2OiN8O3YRFj7vWZcV2w9I2UNosRJmHQmhVV2Q4izBHpsgSx&X-Amz-Signature=6f00f41be85537b844bc135a566fab73e446ccad34ceb3027a11b75cc23fa444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGSF7HN6%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQCXhDMryc3c%2BS4O7a6T3Pc5qrk3goaH8y1HlqGMuiHptgIgG6Rznew2lDIVYkn%2FrEJXr8aL7X%2BjQKTgWsnL8zvniKUq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDDNnFSTxCgApGd5XKSrcAx5kfJaOn1Ro7g62wgEOjLaoPhh%2BzJ5JSKtwakABwS7oE0Gtsz3nqHm5Wyu4zK0BGNnQrm9Oxpe2O1NRa2GUj%2Fgt6D0FKDtfX0rUNylJwrjXhdqIpmsv5cEyp7PK4PNIBc1%2FMy2I11nEWHXL34eIOPBtFwn1kbcuTx7ESGftjO5JHxzOBjld8CRmKzqxNkP19ctB0iuBfNtH8rGBkmGTxrfST3SZ3XltIMZtRMG9cmiLfQeA9Pb5pmE58BpLOkyz4Eiy93Xwmj0RCjSuOBM%2B16OlxnJOLHpWWXrvUvrpAd8oG0UZC8R5KT15%2FZd9enpfVNkKqt8cPZlsl6UOygD2k9aaMx%2FTMIABZ0ssuxR2UDjGHJHotrCHV0pnTFieKUyRk3cBvvFCHD8ew1LGbNHxUPerI9qdQjIbU5K7W%2BwbxTfmiqrpK1DnFhkyhuQCodtcnio0eFejn4vP1zdbbRIQz2GsYKpfRKqcmYKSMCXdWRVLZibJs7cd6IS3Gk0zRTVDEq4NUTcZp7Fw38zkD1dAKpdJPdQTmLRIVcFWhdE1wlfgvH8cZhifWMTDR7IKwz%2FMiy2sE4IGrLjCq9jN494LXo7tdC5algXbheSsDVqAWn4mQhhmjCsY3cB3cNeqMNrO4MoGOqUBY3WegbX3Oup6fEgKPy1eBRMCW6tXuQIPszK8GEq1qjMumnOVRjuVc9s7rU3%2FBfl28EiEOgtHGUSrjJtIW%2F8bmLRKhfxj8FBghKJP0h618ZYB%2B6wI5x9g1BSTMHf9EAOx%2BFwFql0deZO4eArRWmN%2BmJvbYS%2B3DfVdDao5ZwY7wn5Ht2OiN8O3YRFj7vWZcV2w9I2UNosRJmHQmhVV2Q4izBHpsgSx&X-Amz-Signature=d815f214cbfb1f03f5c225e36b166fc7fe8be0f5cc65778468dbb80e1b527a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
