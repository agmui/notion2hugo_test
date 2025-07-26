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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CGMHI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENg%2FNT7Lih3n5jDt9vuQBLeSBFS9Px757uNRcJHxVHSAiEAkW3BHIfhs2XRzjUUvj%2FuKSgvq92nfc7HeoE%2BbFmpnKAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO8%2B2kDKg52m%2BfMQVCrcAyOIGlOaBeGhMn2cA12kMU7KhZnQVCZ8WQjNd7h5MU28IfFegrRmbpOwAdlrCuAa2YuD%2FHw9hpTrSsJHHbbtjPsiq2XRTB%2Bzt1iUBSXSUln7pepgTBtqH5LaiWqFEjSSPeE6rVGjbyPpwYFFLKoapCErYGCowrN0ibzbz80FlQBubSF8oWo2LHzz0cwHS5RaSHP%2FTIvOy4LMWt41aptF1enx9aoJiHVhKb4J9q6UAOLQq45XOwnAW1RJjDVoDj59E5AQS2jXu4N51slwDoSKPXlCNuihEecYIixOIsDxqFSBh2SOu7fTwkO%2Bz3kMz2UR0eDs%2BREpFvjPZJjPvQ0nKMhlDfptHZRPrh54e8o4oexTnIY%2B450PJd3RvPfs%2Fg833VuBnYV16i8WrTHYqG%2BbS9Cl0ub8lJoeqQYh%2FvPbDcD%2FIZS0eNI%2FOb8w3KMl3eWW166SaorrMzxU49XLxlPTTFIT7htW2lWrHTvhEyXamsxV%2BhgYKSaYGgiC1kW4F1dptiZINJbLoQ2kQtT1uW3ApyrcJP7eATU8AdDADbxXuIhpQr%2BOX2YxK44WbpMPWaDUotohA4Nav9ybW2FQyEo9bs5uPrkh8iwXTKcc1UDWoy5T6NfzYYFa%2FtZIdVZyMIr6ksQGOqUBby9sqlvga%2BxIBbWE%2BVyxDxNfGPc9iXw8i6iyHO1%2B6jZWdYth2nF%2Fr2uuCxdHftDGB4SE8%2FH5Ah5SQQM5YTGCQhypIWmgx02pVORlOITAs1DSZH9lonRJ8fwDgVZSHz3DA4CYqOALjSy8Td7zdjH%2BWDyMmXXDDEHAhR0MV%2Ff5dpPNFx6jzn3NwPXp755jf79XQzPxg%2BwCdfEPSlx02bvR08Kzlihp&X-Amz-Signature=eb0a074db0e121eec4a2c4f24ed16f3fe41e71b4d314a67eff5ed745e25484b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CGMHI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENg%2FNT7Lih3n5jDt9vuQBLeSBFS9Px757uNRcJHxVHSAiEAkW3BHIfhs2XRzjUUvj%2FuKSgvq92nfc7HeoE%2BbFmpnKAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO8%2B2kDKg52m%2BfMQVCrcAyOIGlOaBeGhMn2cA12kMU7KhZnQVCZ8WQjNd7h5MU28IfFegrRmbpOwAdlrCuAa2YuD%2FHw9hpTrSsJHHbbtjPsiq2XRTB%2Bzt1iUBSXSUln7pepgTBtqH5LaiWqFEjSSPeE6rVGjbyPpwYFFLKoapCErYGCowrN0ibzbz80FlQBubSF8oWo2LHzz0cwHS5RaSHP%2FTIvOy4LMWt41aptF1enx9aoJiHVhKb4J9q6UAOLQq45XOwnAW1RJjDVoDj59E5AQS2jXu4N51slwDoSKPXlCNuihEecYIixOIsDxqFSBh2SOu7fTwkO%2Bz3kMz2UR0eDs%2BREpFvjPZJjPvQ0nKMhlDfptHZRPrh54e8o4oexTnIY%2B450PJd3RvPfs%2Fg833VuBnYV16i8WrTHYqG%2BbS9Cl0ub8lJoeqQYh%2FvPbDcD%2FIZS0eNI%2FOb8w3KMl3eWW166SaorrMzxU49XLxlPTTFIT7htW2lWrHTvhEyXamsxV%2BhgYKSaYGgiC1kW4F1dptiZINJbLoQ2kQtT1uW3ApyrcJP7eATU8AdDADbxXuIhpQr%2BOX2YxK44WbpMPWaDUotohA4Nav9ybW2FQyEo9bs5uPrkh8iwXTKcc1UDWoy5T6NfzYYFa%2FtZIdVZyMIr6ksQGOqUBby9sqlvga%2BxIBbWE%2BVyxDxNfGPc9iXw8i6iyHO1%2B6jZWdYth2nF%2Fr2uuCxdHftDGB4SE8%2FH5Ah5SQQM5YTGCQhypIWmgx02pVORlOITAs1DSZH9lonRJ8fwDgVZSHz3DA4CYqOALjSy8Td7zdjH%2BWDyMmXXDDEHAhR0MV%2Ff5dpPNFx6jzn3NwPXp755jf79XQzPxg%2BwCdfEPSlx02bvR08Kzlihp&X-Amz-Signature=82d7d220bc313a47fa617bc581a60114d26ebf21f4c5a8196a61456f6e0ac034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CGMHI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENg%2FNT7Lih3n5jDt9vuQBLeSBFS9Px757uNRcJHxVHSAiEAkW3BHIfhs2XRzjUUvj%2FuKSgvq92nfc7HeoE%2BbFmpnKAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO8%2B2kDKg52m%2BfMQVCrcAyOIGlOaBeGhMn2cA12kMU7KhZnQVCZ8WQjNd7h5MU28IfFegrRmbpOwAdlrCuAa2YuD%2FHw9hpTrSsJHHbbtjPsiq2XRTB%2Bzt1iUBSXSUln7pepgTBtqH5LaiWqFEjSSPeE6rVGjbyPpwYFFLKoapCErYGCowrN0ibzbz80FlQBubSF8oWo2LHzz0cwHS5RaSHP%2FTIvOy4LMWt41aptF1enx9aoJiHVhKb4J9q6UAOLQq45XOwnAW1RJjDVoDj59E5AQS2jXu4N51slwDoSKPXlCNuihEecYIixOIsDxqFSBh2SOu7fTwkO%2Bz3kMz2UR0eDs%2BREpFvjPZJjPvQ0nKMhlDfptHZRPrh54e8o4oexTnIY%2B450PJd3RvPfs%2Fg833VuBnYV16i8WrTHYqG%2BbS9Cl0ub8lJoeqQYh%2FvPbDcD%2FIZS0eNI%2FOb8w3KMl3eWW166SaorrMzxU49XLxlPTTFIT7htW2lWrHTvhEyXamsxV%2BhgYKSaYGgiC1kW4F1dptiZINJbLoQ2kQtT1uW3ApyrcJP7eATU8AdDADbxXuIhpQr%2BOX2YxK44WbpMPWaDUotohA4Nav9ybW2FQyEo9bs5uPrkh8iwXTKcc1UDWoy5T6NfzYYFa%2FtZIdVZyMIr6ksQGOqUBby9sqlvga%2BxIBbWE%2BVyxDxNfGPc9iXw8i6iyHO1%2B6jZWdYth2nF%2Fr2uuCxdHftDGB4SE8%2FH5Ah5SQQM5YTGCQhypIWmgx02pVORlOITAs1DSZH9lonRJ8fwDgVZSHz3DA4CYqOALjSy8Td7zdjH%2BWDyMmXXDDEHAhR0MV%2Ff5dpPNFx6jzn3NwPXp755jf79XQzPxg%2BwCdfEPSlx02bvR08Kzlihp&X-Amz-Signature=d810555db9def3897e519e14ff532a9aaa302119f223701be954b1b2cf1aa580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CGMHI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENg%2FNT7Lih3n5jDt9vuQBLeSBFS9Px757uNRcJHxVHSAiEAkW3BHIfhs2XRzjUUvj%2FuKSgvq92nfc7HeoE%2BbFmpnKAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO8%2B2kDKg52m%2BfMQVCrcAyOIGlOaBeGhMn2cA12kMU7KhZnQVCZ8WQjNd7h5MU28IfFegrRmbpOwAdlrCuAa2YuD%2FHw9hpTrSsJHHbbtjPsiq2XRTB%2Bzt1iUBSXSUln7pepgTBtqH5LaiWqFEjSSPeE6rVGjbyPpwYFFLKoapCErYGCowrN0ibzbz80FlQBubSF8oWo2LHzz0cwHS5RaSHP%2FTIvOy4LMWt41aptF1enx9aoJiHVhKb4J9q6UAOLQq45XOwnAW1RJjDVoDj59E5AQS2jXu4N51slwDoSKPXlCNuihEecYIixOIsDxqFSBh2SOu7fTwkO%2Bz3kMz2UR0eDs%2BREpFvjPZJjPvQ0nKMhlDfptHZRPrh54e8o4oexTnIY%2B450PJd3RvPfs%2Fg833VuBnYV16i8WrTHYqG%2BbS9Cl0ub8lJoeqQYh%2FvPbDcD%2FIZS0eNI%2FOb8w3KMl3eWW166SaorrMzxU49XLxlPTTFIT7htW2lWrHTvhEyXamsxV%2BhgYKSaYGgiC1kW4F1dptiZINJbLoQ2kQtT1uW3ApyrcJP7eATU8AdDADbxXuIhpQr%2BOX2YxK44WbpMPWaDUotohA4Nav9ybW2FQyEo9bs5uPrkh8iwXTKcc1UDWoy5T6NfzYYFa%2FtZIdVZyMIr6ksQGOqUBby9sqlvga%2BxIBbWE%2BVyxDxNfGPc9iXw8i6iyHO1%2B6jZWdYth2nF%2Fr2uuCxdHftDGB4SE8%2FH5Ah5SQQM5YTGCQhypIWmgx02pVORlOITAs1DSZH9lonRJ8fwDgVZSHz3DA4CYqOALjSy8Td7zdjH%2BWDyMmXXDDEHAhR0MV%2Ff5dpPNFx6jzn3NwPXp755jf79XQzPxg%2BwCdfEPSlx02bvR08Kzlihp&X-Amz-Signature=5e72bae20d2906545aa77da30068fb68550827ea650a87bf4b3cb764bdfafd08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CGMHI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENg%2FNT7Lih3n5jDt9vuQBLeSBFS9Px757uNRcJHxVHSAiEAkW3BHIfhs2XRzjUUvj%2FuKSgvq92nfc7HeoE%2BbFmpnKAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO8%2B2kDKg52m%2BfMQVCrcAyOIGlOaBeGhMn2cA12kMU7KhZnQVCZ8WQjNd7h5MU28IfFegrRmbpOwAdlrCuAa2YuD%2FHw9hpTrSsJHHbbtjPsiq2XRTB%2Bzt1iUBSXSUln7pepgTBtqH5LaiWqFEjSSPeE6rVGjbyPpwYFFLKoapCErYGCowrN0ibzbz80FlQBubSF8oWo2LHzz0cwHS5RaSHP%2FTIvOy4LMWt41aptF1enx9aoJiHVhKb4J9q6UAOLQq45XOwnAW1RJjDVoDj59E5AQS2jXu4N51slwDoSKPXlCNuihEecYIixOIsDxqFSBh2SOu7fTwkO%2Bz3kMz2UR0eDs%2BREpFvjPZJjPvQ0nKMhlDfptHZRPrh54e8o4oexTnIY%2B450PJd3RvPfs%2Fg833VuBnYV16i8WrTHYqG%2BbS9Cl0ub8lJoeqQYh%2FvPbDcD%2FIZS0eNI%2FOb8w3KMl3eWW166SaorrMzxU49XLxlPTTFIT7htW2lWrHTvhEyXamsxV%2BhgYKSaYGgiC1kW4F1dptiZINJbLoQ2kQtT1uW3ApyrcJP7eATU8AdDADbxXuIhpQr%2BOX2YxK44WbpMPWaDUotohA4Nav9ybW2FQyEo9bs5uPrkh8iwXTKcc1UDWoy5T6NfzYYFa%2FtZIdVZyMIr6ksQGOqUBby9sqlvga%2BxIBbWE%2BVyxDxNfGPc9iXw8i6iyHO1%2B6jZWdYth2nF%2Fr2uuCxdHftDGB4SE8%2FH5Ah5SQQM5YTGCQhypIWmgx02pVORlOITAs1DSZH9lonRJ8fwDgVZSHz3DA4CYqOALjSy8Td7zdjH%2BWDyMmXXDDEHAhR0MV%2Ff5dpPNFx6jzn3NwPXp755jf79XQzPxg%2BwCdfEPSlx02bvR08Kzlihp&X-Amz-Signature=90952631121a4a807b152d5993788274500a484383a69138a08bd1d11035e41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CGMHI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENg%2FNT7Lih3n5jDt9vuQBLeSBFS9Px757uNRcJHxVHSAiEAkW3BHIfhs2XRzjUUvj%2FuKSgvq92nfc7HeoE%2BbFmpnKAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO8%2B2kDKg52m%2BfMQVCrcAyOIGlOaBeGhMn2cA12kMU7KhZnQVCZ8WQjNd7h5MU28IfFegrRmbpOwAdlrCuAa2YuD%2FHw9hpTrSsJHHbbtjPsiq2XRTB%2Bzt1iUBSXSUln7pepgTBtqH5LaiWqFEjSSPeE6rVGjbyPpwYFFLKoapCErYGCowrN0ibzbz80FlQBubSF8oWo2LHzz0cwHS5RaSHP%2FTIvOy4LMWt41aptF1enx9aoJiHVhKb4J9q6UAOLQq45XOwnAW1RJjDVoDj59E5AQS2jXu4N51slwDoSKPXlCNuihEecYIixOIsDxqFSBh2SOu7fTwkO%2Bz3kMz2UR0eDs%2BREpFvjPZJjPvQ0nKMhlDfptHZRPrh54e8o4oexTnIY%2B450PJd3RvPfs%2Fg833VuBnYV16i8WrTHYqG%2BbS9Cl0ub8lJoeqQYh%2FvPbDcD%2FIZS0eNI%2FOb8w3KMl3eWW166SaorrMzxU49XLxlPTTFIT7htW2lWrHTvhEyXamsxV%2BhgYKSaYGgiC1kW4F1dptiZINJbLoQ2kQtT1uW3ApyrcJP7eATU8AdDADbxXuIhpQr%2BOX2YxK44WbpMPWaDUotohA4Nav9ybW2FQyEo9bs5uPrkh8iwXTKcc1UDWoy5T6NfzYYFa%2FtZIdVZyMIr6ksQGOqUBby9sqlvga%2BxIBbWE%2BVyxDxNfGPc9iXw8i6iyHO1%2B6jZWdYth2nF%2Fr2uuCxdHftDGB4SE8%2FH5Ah5SQQM5YTGCQhypIWmgx02pVORlOITAs1DSZH9lonRJ8fwDgVZSHz3DA4CYqOALjSy8Td7zdjH%2BWDyMmXXDDEHAhR0MV%2Ff5dpPNFx6jzn3NwPXp755jf79XQzPxg%2BwCdfEPSlx02bvR08Kzlihp&X-Amz-Signature=15300bd6409de65b756d9dc1fafbbc8c2c0daa17159c1a3cbe0372b0ce38b0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CGMHI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENg%2FNT7Lih3n5jDt9vuQBLeSBFS9Px757uNRcJHxVHSAiEAkW3BHIfhs2XRzjUUvj%2FuKSgvq92nfc7HeoE%2BbFmpnKAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO8%2B2kDKg52m%2BfMQVCrcAyOIGlOaBeGhMn2cA12kMU7KhZnQVCZ8WQjNd7h5MU28IfFegrRmbpOwAdlrCuAa2YuD%2FHw9hpTrSsJHHbbtjPsiq2XRTB%2Bzt1iUBSXSUln7pepgTBtqH5LaiWqFEjSSPeE6rVGjbyPpwYFFLKoapCErYGCowrN0ibzbz80FlQBubSF8oWo2LHzz0cwHS5RaSHP%2FTIvOy4LMWt41aptF1enx9aoJiHVhKb4J9q6UAOLQq45XOwnAW1RJjDVoDj59E5AQS2jXu4N51slwDoSKPXlCNuihEecYIixOIsDxqFSBh2SOu7fTwkO%2Bz3kMz2UR0eDs%2BREpFvjPZJjPvQ0nKMhlDfptHZRPrh54e8o4oexTnIY%2B450PJd3RvPfs%2Fg833VuBnYV16i8WrTHYqG%2BbS9Cl0ub8lJoeqQYh%2FvPbDcD%2FIZS0eNI%2FOb8w3KMl3eWW166SaorrMzxU49XLxlPTTFIT7htW2lWrHTvhEyXamsxV%2BhgYKSaYGgiC1kW4F1dptiZINJbLoQ2kQtT1uW3ApyrcJP7eATU8AdDADbxXuIhpQr%2BOX2YxK44WbpMPWaDUotohA4Nav9ybW2FQyEo9bs5uPrkh8iwXTKcc1UDWoy5T6NfzYYFa%2FtZIdVZyMIr6ksQGOqUBby9sqlvga%2BxIBbWE%2BVyxDxNfGPc9iXw8i6iyHO1%2B6jZWdYth2nF%2Fr2uuCxdHftDGB4SE8%2FH5Ah5SQQM5YTGCQhypIWmgx02pVORlOITAs1DSZH9lonRJ8fwDgVZSHz3DA4CYqOALjSy8Td7zdjH%2BWDyMmXXDDEHAhR0MV%2Ff5dpPNFx6jzn3NwPXp755jf79XQzPxg%2BwCdfEPSlx02bvR08Kzlihp&X-Amz-Signature=9517dbcab23448f55146824b555be15a7173ac8d5fb081c42d2ee3feb13034ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CGMHI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENg%2FNT7Lih3n5jDt9vuQBLeSBFS9Px757uNRcJHxVHSAiEAkW3BHIfhs2XRzjUUvj%2FuKSgvq92nfc7HeoE%2BbFmpnKAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO8%2B2kDKg52m%2BfMQVCrcAyOIGlOaBeGhMn2cA12kMU7KhZnQVCZ8WQjNd7h5MU28IfFegrRmbpOwAdlrCuAa2YuD%2FHw9hpTrSsJHHbbtjPsiq2XRTB%2Bzt1iUBSXSUln7pepgTBtqH5LaiWqFEjSSPeE6rVGjbyPpwYFFLKoapCErYGCowrN0ibzbz80FlQBubSF8oWo2LHzz0cwHS5RaSHP%2FTIvOy4LMWt41aptF1enx9aoJiHVhKb4J9q6UAOLQq45XOwnAW1RJjDVoDj59E5AQS2jXu4N51slwDoSKPXlCNuihEecYIixOIsDxqFSBh2SOu7fTwkO%2Bz3kMz2UR0eDs%2BREpFvjPZJjPvQ0nKMhlDfptHZRPrh54e8o4oexTnIY%2B450PJd3RvPfs%2Fg833VuBnYV16i8WrTHYqG%2BbS9Cl0ub8lJoeqQYh%2FvPbDcD%2FIZS0eNI%2FOb8w3KMl3eWW166SaorrMzxU49XLxlPTTFIT7htW2lWrHTvhEyXamsxV%2BhgYKSaYGgiC1kW4F1dptiZINJbLoQ2kQtT1uW3ApyrcJP7eATU8AdDADbxXuIhpQr%2BOX2YxK44WbpMPWaDUotohA4Nav9ybW2FQyEo9bs5uPrkh8iwXTKcc1UDWoy5T6NfzYYFa%2FtZIdVZyMIr6ksQGOqUBby9sqlvga%2BxIBbWE%2BVyxDxNfGPc9iXw8i6iyHO1%2B6jZWdYth2nF%2Fr2uuCxdHftDGB4SE8%2FH5Ah5SQQM5YTGCQhypIWmgx02pVORlOITAs1DSZH9lonRJ8fwDgVZSHz3DA4CYqOALjSy8Td7zdjH%2BWDyMmXXDDEHAhR0MV%2Ff5dpPNFx6jzn3NwPXp755jf79XQzPxg%2BwCdfEPSlx02bvR08Kzlihp&X-Amz-Signature=db8a18961cc8dbe23a39c498ddcbf4f81c6f8ce3f2607ca4afa8de76c7db1efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CGMHI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENg%2FNT7Lih3n5jDt9vuQBLeSBFS9Px757uNRcJHxVHSAiEAkW3BHIfhs2XRzjUUvj%2FuKSgvq92nfc7HeoE%2BbFmpnKAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO8%2B2kDKg52m%2BfMQVCrcAyOIGlOaBeGhMn2cA12kMU7KhZnQVCZ8WQjNd7h5MU28IfFegrRmbpOwAdlrCuAa2YuD%2FHw9hpTrSsJHHbbtjPsiq2XRTB%2Bzt1iUBSXSUln7pepgTBtqH5LaiWqFEjSSPeE6rVGjbyPpwYFFLKoapCErYGCowrN0ibzbz80FlQBubSF8oWo2LHzz0cwHS5RaSHP%2FTIvOy4LMWt41aptF1enx9aoJiHVhKb4J9q6UAOLQq45XOwnAW1RJjDVoDj59E5AQS2jXu4N51slwDoSKPXlCNuihEecYIixOIsDxqFSBh2SOu7fTwkO%2Bz3kMz2UR0eDs%2BREpFvjPZJjPvQ0nKMhlDfptHZRPrh54e8o4oexTnIY%2B450PJd3RvPfs%2Fg833VuBnYV16i8WrTHYqG%2BbS9Cl0ub8lJoeqQYh%2FvPbDcD%2FIZS0eNI%2FOb8w3KMl3eWW166SaorrMzxU49XLxlPTTFIT7htW2lWrHTvhEyXamsxV%2BhgYKSaYGgiC1kW4F1dptiZINJbLoQ2kQtT1uW3ApyrcJP7eATU8AdDADbxXuIhpQr%2BOX2YxK44WbpMPWaDUotohA4Nav9ybW2FQyEo9bs5uPrkh8iwXTKcc1UDWoy5T6NfzYYFa%2FtZIdVZyMIr6ksQGOqUBby9sqlvga%2BxIBbWE%2BVyxDxNfGPc9iXw8i6iyHO1%2B6jZWdYth2nF%2Fr2uuCxdHftDGB4SE8%2FH5Ah5SQQM5YTGCQhypIWmgx02pVORlOITAs1DSZH9lonRJ8fwDgVZSHz3DA4CYqOALjSy8Td7zdjH%2BWDyMmXXDDEHAhR0MV%2Ff5dpPNFx6jzn3NwPXp755jf79XQzPxg%2BwCdfEPSlx02bvR08Kzlihp&X-Amz-Signature=ef84cd7e43eda48cff1d8fa85fe127ee01dd7e69059e81d7420ea88e5be28a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMVOJ6IQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBZrorNzUsVGuEmccmXwxdA2bc1ObJl0IX8yfrmPuuAsAiAep9oXh4vsLMbDzOWZNW2bCV%2FWgZaaIEUDd25mgVVm%2BCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMNVRzWCXBFkGHInm%2BKtwD%2FlwG2m4FGozPh%2B4%2BHDfJqH%2FFDYHfE4pOPyPbpja0mB65eWI46q3DLyf5pC9KlHibsxJGMlCj3JdhPXEC8MCg%2BZjEo%2Bu1%2FBatiB%2B4kbhYJUhXHIxBgYby1yLgyfOX1MM7jadLR9%2FONMCh41ucBa8gZI8i9hm8kqVRy%2FDQtcaBV9%2Fh3asUW9oNpIvS7Od3LPgbB%2F4O4xoIM7rXp8UzQaz9%2Bb4zlZ0%2F%2FxpXnqfImFzDe%2F1Q2hDYO7hI56%2Fo0sP2ZmgjPiYBTBqiCfDguIE5tjYDWIjDmginONObxZ2sZHlZ3mDjjLJySjOFMIYsOgLyALVhYOc6aYUXsQjGsCGTQO5jkzB4RnfAhnr3pAJGYKAXx28I02old16PS366w7pP7tcy8pxklDjkMdO79XGrYmpFKyHfIYdNx9VCyRXCPCXu%2FwtqEA8sqPvm9uXJxi64kvg4tT0hZH8rO1mEZkf2FkM3q4hDcSnqE540KL0zpIrt8UAwRGy8M6JzG%2BGJzOjHbZTpFmwwoimrCicDQyAWtkjZkT5nXA4EYiRJ%2F3WYXxQaDndohtz3N0Ab4U3yTKJUY35cgErqLDO6dWTw2cIuSAez4RzZOhdMtHWAoWve8oSBosdRre7xaQ%2F3op6EQxAw9%2FqSxAY6pgEfs9X4%2FuNM1HImTyK5hRa7ZQOwHDv2dR2DlHZZqxqN4Aepo6gBGkf5eVhdX3fsUOgMi5q9BjLuX%2Bscf7FTSzBKuSqYad6soz5XMvx5LwqDqa8xE9g4KfS4Ma0tsRjkliF9Zs7XkKMuVVGlTmLaGdsidHr9SZA5ywqi4TA7SVpLp4Rf4GdelJTDd4AZ5%2FNqUKpgd9oSaiwJcWMb5AMaVXb5Y2HqSuQS&X-Amz-Signature=2976dac9e50e1bd70f73fe0d34e70dab71614a179989f218deff90485972ace4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3CGMHI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIENg%2FNT7Lih3n5jDt9vuQBLeSBFS9Px757uNRcJHxVHSAiEAkW3BHIfhs2XRzjUUvj%2FuKSgvq92nfc7HeoE%2BbFmpnKAq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDO8%2B2kDKg52m%2BfMQVCrcAyOIGlOaBeGhMn2cA12kMU7KhZnQVCZ8WQjNd7h5MU28IfFegrRmbpOwAdlrCuAa2YuD%2FHw9hpTrSsJHHbbtjPsiq2XRTB%2Bzt1iUBSXSUln7pepgTBtqH5LaiWqFEjSSPeE6rVGjbyPpwYFFLKoapCErYGCowrN0ibzbz80FlQBubSF8oWo2LHzz0cwHS5RaSHP%2FTIvOy4LMWt41aptF1enx9aoJiHVhKb4J9q6UAOLQq45XOwnAW1RJjDVoDj59E5AQS2jXu4N51slwDoSKPXlCNuihEecYIixOIsDxqFSBh2SOu7fTwkO%2Bz3kMz2UR0eDs%2BREpFvjPZJjPvQ0nKMhlDfptHZRPrh54e8o4oexTnIY%2B450PJd3RvPfs%2Fg833VuBnYV16i8WrTHYqG%2BbS9Cl0ub8lJoeqQYh%2FvPbDcD%2FIZS0eNI%2FOb8w3KMl3eWW166SaorrMzxU49XLxlPTTFIT7htW2lWrHTvhEyXamsxV%2BhgYKSaYGgiC1kW4F1dptiZINJbLoQ2kQtT1uW3ApyrcJP7eATU8AdDADbxXuIhpQr%2BOX2YxK44WbpMPWaDUotohA4Nav9ybW2FQyEo9bs5uPrkh8iwXTKcc1UDWoy5T6NfzYYFa%2FtZIdVZyMIr6ksQGOqUBby9sqlvga%2BxIBbWE%2BVyxDxNfGPc9iXw8i6iyHO1%2B6jZWdYth2nF%2Fr2uuCxdHftDGB4SE8%2FH5Ah5SQQM5YTGCQhypIWmgx02pVORlOITAs1DSZH9lonRJ8fwDgVZSHz3DA4CYqOALjSy8Td7zdjH%2BWDyMmXXDDEHAhR0MV%2Ff5dpPNFx6jzn3NwPXp755jf79XQzPxg%2BwCdfEPSlx02bvR08Kzlihp&X-Amz-Signature=04ecab671f2c21633abbca048bf900e1112be9d2b102acf6a02fe08d3543fa7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUMBPM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FZqybrO46OXInjkrclKFHpltutRe7LdPRz%2FOTec9J7AIhAIXaFHx16Xe%2Fc96wYbSMZupu8wnCzGnKlef0Win6nyViKv8DCF0QABoMNjM3NDIzMTgzODA1Igx0yTNFAggbqtIWNR4q3AOibB59o69NjXq2k8sJp6W0%2F0rPSDn7lG6mFzNhGglw9ZwN5bs4B1ssABU8KWgciY%2FoqJOyFc0AfvXF3I7%2Bzo9KnfZUg00IOj88j9nKxrlvUfwJe5zP1f63uAHLRrToDQT8VSEyLta7XtbjIR1ILkakilsrt4hiVXUhge8X%2BB6Sz19ZHh6EO7WuL4aopH5oJCOzvn%2F1UlRErnIsaNRoHlUCzVOnbWhW2EZMZYz8NYl1H6bVs%2FKhr8bfw4tdATucuaGwyfppStswLwcpFn0E9c8y97slSamD0yHtAanKNX6Bp2vD5%2B90dqoUlozHqC2Q1nDl8wkRlBv9MD4BO0K02UdoWNEU2ojxma1X%2BiLepPWZ6S7P3Db3Xdtc9Olm50R91KVMcS%2FAZUGtikDb5eAgB%2BHmD9s7EwT0SjVSqf6cjZKKmigr%2BP2ao2o5RDKnDwc5rbPx9csKyaYKElexb4tjm7Nb0OfAtZaObNEgTE5wb8s9mZeRHtbfio%2Fpv1nF7eZMijtI%2BiAtFLNGDBVT8a2wfdDzwSKDC46Vtgkzn19oXQzzOcJf5JYoZLmEs8k8NUc4sion7Ezgab6YqistND%2FNWpBOXFf%2BMoC9fdTFU64HEaFXOoNHfJlM7eSVsBNEizDi%2BZLEBjqkAcgesY26hxALeHO4S8NAe0A5IgHMe0jGvSGlg6RrhmB2v0%2B0e6Tfe%2BOkJ2oyxRYyDxnSR2tlYNiDRBL6pp4D6yTPyie2GkAzc8BUAL1B9BOH06Q77ANAi%2BTNVY4j5pEt7AMJrO%2BncxplaxB079ysDTY48IUwd1fHunieHuAzdLrTGeZuAG8XovUhCaYSEOHc9gV%2BxpEQX4YNOZz7c%2BpbR6z8sRHc&X-Amz-Signature=8dd9c1551645facdeab12408f64bcfeef935196515588c1e4771fcc1dc76bf3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUMBPM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FZqybrO46OXInjkrclKFHpltutRe7LdPRz%2FOTec9J7AIhAIXaFHx16Xe%2Fc96wYbSMZupu8wnCzGnKlef0Win6nyViKv8DCF0QABoMNjM3NDIzMTgzODA1Igx0yTNFAggbqtIWNR4q3AOibB59o69NjXq2k8sJp6W0%2F0rPSDn7lG6mFzNhGglw9ZwN5bs4B1ssABU8KWgciY%2FoqJOyFc0AfvXF3I7%2Bzo9KnfZUg00IOj88j9nKxrlvUfwJe5zP1f63uAHLRrToDQT8VSEyLta7XtbjIR1ILkakilsrt4hiVXUhge8X%2BB6Sz19ZHh6EO7WuL4aopH5oJCOzvn%2F1UlRErnIsaNRoHlUCzVOnbWhW2EZMZYz8NYl1H6bVs%2FKhr8bfw4tdATucuaGwyfppStswLwcpFn0E9c8y97slSamD0yHtAanKNX6Bp2vD5%2B90dqoUlozHqC2Q1nDl8wkRlBv9MD4BO0K02UdoWNEU2ojxma1X%2BiLepPWZ6S7P3Db3Xdtc9Olm50R91KVMcS%2FAZUGtikDb5eAgB%2BHmD9s7EwT0SjVSqf6cjZKKmigr%2BP2ao2o5RDKnDwc5rbPx9csKyaYKElexb4tjm7Nb0OfAtZaObNEgTE5wb8s9mZeRHtbfio%2Fpv1nF7eZMijtI%2BiAtFLNGDBVT8a2wfdDzwSKDC46Vtgkzn19oXQzzOcJf5JYoZLmEs8k8NUc4sion7Ezgab6YqistND%2FNWpBOXFf%2BMoC9fdTFU64HEaFXOoNHfJlM7eSVsBNEizDi%2BZLEBjqkAcgesY26hxALeHO4S8NAe0A5IgHMe0jGvSGlg6RrhmB2v0%2B0e6Tfe%2BOkJ2oyxRYyDxnSR2tlYNiDRBL6pp4D6yTPyie2GkAzc8BUAL1B9BOH06Q77ANAi%2BTNVY4j5pEt7AMJrO%2BncxplaxB079ysDTY48IUwd1fHunieHuAzdLrTGeZuAG8XovUhCaYSEOHc9gV%2BxpEQX4YNOZz7c%2BpbR6z8sRHc&X-Amz-Signature=a6142bcd591a004c72e504984be1ee5ac95d46272aa4b685053d245dd780c36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUMBPM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FZqybrO46OXInjkrclKFHpltutRe7LdPRz%2FOTec9J7AIhAIXaFHx16Xe%2Fc96wYbSMZupu8wnCzGnKlef0Win6nyViKv8DCF0QABoMNjM3NDIzMTgzODA1Igx0yTNFAggbqtIWNR4q3AOibB59o69NjXq2k8sJp6W0%2F0rPSDn7lG6mFzNhGglw9ZwN5bs4B1ssABU8KWgciY%2FoqJOyFc0AfvXF3I7%2Bzo9KnfZUg00IOj88j9nKxrlvUfwJe5zP1f63uAHLRrToDQT8VSEyLta7XtbjIR1ILkakilsrt4hiVXUhge8X%2BB6Sz19ZHh6EO7WuL4aopH5oJCOzvn%2F1UlRErnIsaNRoHlUCzVOnbWhW2EZMZYz8NYl1H6bVs%2FKhr8bfw4tdATucuaGwyfppStswLwcpFn0E9c8y97slSamD0yHtAanKNX6Bp2vD5%2B90dqoUlozHqC2Q1nDl8wkRlBv9MD4BO0K02UdoWNEU2ojxma1X%2BiLepPWZ6S7P3Db3Xdtc9Olm50R91KVMcS%2FAZUGtikDb5eAgB%2BHmD9s7EwT0SjVSqf6cjZKKmigr%2BP2ao2o5RDKnDwc5rbPx9csKyaYKElexb4tjm7Nb0OfAtZaObNEgTE5wb8s9mZeRHtbfio%2Fpv1nF7eZMijtI%2BiAtFLNGDBVT8a2wfdDzwSKDC46Vtgkzn19oXQzzOcJf5JYoZLmEs8k8NUc4sion7Ezgab6YqistND%2FNWpBOXFf%2BMoC9fdTFU64HEaFXOoNHfJlM7eSVsBNEizDi%2BZLEBjqkAcgesY26hxALeHO4S8NAe0A5IgHMe0jGvSGlg6RrhmB2v0%2B0e6Tfe%2BOkJ2oyxRYyDxnSR2tlYNiDRBL6pp4D6yTPyie2GkAzc8BUAL1B9BOH06Q77ANAi%2BTNVY4j5pEt7AMJrO%2BncxplaxB079ysDTY48IUwd1fHunieHuAzdLrTGeZuAG8XovUhCaYSEOHc9gV%2BxpEQX4YNOZz7c%2BpbR6z8sRHc&X-Amz-Signature=cf6981e953f9b7d3f579ecd7c67a1c06f369e0e13e1173d813b27419e5141df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUMBPM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FZqybrO46OXInjkrclKFHpltutRe7LdPRz%2FOTec9J7AIhAIXaFHx16Xe%2Fc96wYbSMZupu8wnCzGnKlef0Win6nyViKv8DCF0QABoMNjM3NDIzMTgzODA1Igx0yTNFAggbqtIWNR4q3AOibB59o69NjXq2k8sJp6W0%2F0rPSDn7lG6mFzNhGglw9ZwN5bs4B1ssABU8KWgciY%2FoqJOyFc0AfvXF3I7%2Bzo9KnfZUg00IOj88j9nKxrlvUfwJe5zP1f63uAHLRrToDQT8VSEyLta7XtbjIR1ILkakilsrt4hiVXUhge8X%2BB6Sz19ZHh6EO7WuL4aopH5oJCOzvn%2F1UlRErnIsaNRoHlUCzVOnbWhW2EZMZYz8NYl1H6bVs%2FKhr8bfw4tdATucuaGwyfppStswLwcpFn0E9c8y97slSamD0yHtAanKNX6Bp2vD5%2B90dqoUlozHqC2Q1nDl8wkRlBv9MD4BO0K02UdoWNEU2ojxma1X%2BiLepPWZ6S7P3Db3Xdtc9Olm50R91KVMcS%2FAZUGtikDb5eAgB%2BHmD9s7EwT0SjVSqf6cjZKKmigr%2BP2ao2o5RDKnDwc5rbPx9csKyaYKElexb4tjm7Nb0OfAtZaObNEgTE5wb8s9mZeRHtbfio%2Fpv1nF7eZMijtI%2BiAtFLNGDBVT8a2wfdDzwSKDC46Vtgkzn19oXQzzOcJf5JYoZLmEs8k8NUc4sion7Ezgab6YqistND%2FNWpBOXFf%2BMoC9fdTFU64HEaFXOoNHfJlM7eSVsBNEizDi%2BZLEBjqkAcgesY26hxALeHO4S8NAe0A5IgHMe0jGvSGlg6RrhmB2v0%2B0e6Tfe%2BOkJ2oyxRYyDxnSR2tlYNiDRBL6pp4D6yTPyie2GkAzc8BUAL1B9BOH06Q77ANAi%2BTNVY4j5pEt7AMJrO%2BncxplaxB079ysDTY48IUwd1fHunieHuAzdLrTGeZuAG8XovUhCaYSEOHc9gV%2BxpEQX4YNOZz7c%2BpbR6z8sRHc&X-Amz-Signature=816434d398938718175b153c3d36b5013c1a52e0f1bac7ab730b93bd3af1f50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUMBPM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FZqybrO46OXInjkrclKFHpltutRe7LdPRz%2FOTec9J7AIhAIXaFHx16Xe%2Fc96wYbSMZupu8wnCzGnKlef0Win6nyViKv8DCF0QABoMNjM3NDIzMTgzODA1Igx0yTNFAggbqtIWNR4q3AOibB59o69NjXq2k8sJp6W0%2F0rPSDn7lG6mFzNhGglw9ZwN5bs4B1ssABU8KWgciY%2FoqJOyFc0AfvXF3I7%2Bzo9KnfZUg00IOj88j9nKxrlvUfwJe5zP1f63uAHLRrToDQT8VSEyLta7XtbjIR1ILkakilsrt4hiVXUhge8X%2BB6Sz19ZHh6EO7WuL4aopH5oJCOzvn%2F1UlRErnIsaNRoHlUCzVOnbWhW2EZMZYz8NYl1H6bVs%2FKhr8bfw4tdATucuaGwyfppStswLwcpFn0E9c8y97slSamD0yHtAanKNX6Bp2vD5%2B90dqoUlozHqC2Q1nDl8wkRlBv9MD4BO0K02UdoWNEU2ojxma1X%2BiLepPWZ6S7P3Db3Xdtc9Olm50R91KVMcS%2FAZUGtikDb5eAgB%2BHmD9s7EwT0SjVSqf6cjZKKmigr%2BP2ao2o5RDKnDwc5rbPx9csKyaYKElexb4tjm7Nb0OfAtZaObNEgTE5wb8s9mZeRHtbfio%2Fpv1nF7eZMijtI%2BiAtFLNGDBVT8a2wfdDzwSKDC46Vtgkzn19oXQzzOcJf5JYoZLmEs8k8NUc4sion7Ezgab6YqistND%2FNWpBOXFf%2BMoC9fdTFU64HEaFXOoNHfJlM7eSVsBNEizDi%2BZLEBjqkAcgesY26hxALeHO4S8NAe0A5IgHMe0jGvSGlg6RrhmB2v0%2B0e6Tfe%2BOkJ2oyxRYyDxnSR2tlYNiDRBL6pp4D6yTPyie2GkAzc8BUAL1B9BOH06Q77ANAi%2BTNVY4j5pEt7AMJrO%2BncxplaxB079ysDTY48IUwd1fHunieHuAzdLrTGeZuAG8XovUhCaYSEOHc9gV%2BxpEQX4YNOZz7c%2BpbR6z8sRHc&X-Amz-Signature=8d6d7c0bd4af1760e9d1e3156df984b418a7043a74b463f6be3bcdaf71a7631d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUMBPM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FZqybrO46OXInjkrclKFHpltutRe7LdPRz%2FOTec9J7AIhAIXaFHx16Xe%2Fc96wYbSMZupu8wnCzGnKlef0Win6nyViKv8DCF0QABoMNjM3NDIzMTgzODA1Igx0yTNFAggbqtIWNR4q3AOibB59o69NjXq2k8sJp6W0%2F0rPSDn7lG6mFzNhGglw9ZwN5bs4B1ssABU8KWgciY%2FoqJOyFc0AfvXF3I7%2Bzo9KnfZUg00IOj88j9nKxrlvUfwJe5zP1f63uAHLRrToDQT8VSEyLta7XtbjIR1ILkakilsrt4hiVXUhge8X%2BB6Sz19ZHh6EO7WuL4aopH5oJCOzvn%2F1UlRErnIsaNRoHlUCzVOnbWhW2EZMZYz8NYl1H6bVs%2FKhr8bfw4tdATucuaGwyfppStswLwcpFn0E9c8y97slSamD0yHtAanKNX6Bp2vD5%2B90dqoUlozHqC2Q1nDl8wkRlBv9MD4BO0K02UdoWNEU2ojxma1X%2BiLepPWZ6S7P3Db3Xdtc9Olm50R91KVMcS%2FAZUGtikDb5eAgB%2BHmD9s7EwT0SjVSqf6cjZKKmigr%2BP2ao2o5RDKnDwc5rbPx9csKyaYKElexb4tjm7Nb0OfAtZaObNEgTE5wb8s9mZeRHtbfio%2Fpv1nF7eZMijtI%2BiAtFLNGDBVT8a2wfdDzwSKDC46Vtgkzn19oXQzzOcJf5JYoZLmEs8k8NUc4sion7Ezgab6YqistND%2FNWpBOXFf%2BMoC9fdTFU64HEaFXOoNHfJlM7eSVsBNEizDi%2BZLEBjqkAcgesY26hxALeHO4S8NAe0A5IgHMe0jGvSGlg6RrhmB2v0%2B0e6Tfe%2BOkJ2oyxRYyDxnSR2tlYNiDRBL6pp4D6yTPyie2GkAzc8BUAL1B9BOH06Q77ANAi%2BTNVY4j5pEt7AMJrO%2BncxplaxB079ysDTY48IUwd1fHunieHuAzdLrTGeZuAG8XovUhCaYSEOHc9gV%2BxpEQX4YNOZz7c%2BpbR6z8sRHc&X-Amz-Signature=3ea826a9ed249ddf7f69b1e1feb05fc2b6cf24df990578884d10ab4c47847f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHWUMBPM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQD%2FZqybrO46OXInjkrclKFHpltutRe7LdPRz%2FOTec9J7AIhAIXaFHx16Xe%2Fc96wYbSMZupu8wnCzGnKlef0Win6nyViKv8DCF0QABoMNjM3NDIzMTgzODA1Igx0yTNFAggbqtIWNR4q3AOibB59o69NjXq2k8sJp6W0%2F0rPSDn7lG6mFzNhGglw9ZwN5bs4B1ssABU8KWgciY%2FoqJOyFc0AfvXF3I7%2Bzo9KnfZUg00IOj88j9nKxrlvUfwJe5zP1f63uAHLRrToDQT8VSEyLta7XtbjIR1ILkakilsrt4hiVXUhge8X%2BB6Sz19ZHh6EO7WuL4aopH5oJCOzvn%2F1UlRErnIsaNRoHlUCzVOnbWhW2EZMZYz8NYl1H6bVs%2FKhr8bfw4tdATucuaGwyfppStswLwcpFn0E9c8y97slSamD0yHtAanKNX6Bp2vD5%2B90dqoUlozHqC2Q1nDl8wkRlBv9MD4BO0K02UdoWNEU2ojxma1X%2BiLepPWZ6S7P3Db3Xdtc9Olm50R91KVMcS%2FAZUGtikDb5eAgB%2BHmD9s7EwT0SjVSqf6cjZKKmigr%2BP2ao2o5RDKnDwc5rbPx9csKyaYKElexb4tjm7Nb0OfAtZaObNEgTE5wb8s9mZeRHtbfio%2Fpv1nF7eZMijtI%2BiAtFLNGDBVT8a2wfdDzwSKDC46Vtgkzn19oXQzzOcJf5JYoZLmEs8k8NUc4sion7Ezgab6YqistND%2FNWpBOXFf%2BMoC9fdTFU64HEaFXOoNHfJlM7eSVsBNEizDi%2BZLEBjqkAcgesY26hxALeHO4S8NAe0A5IgHMe0jGvSGlg6RrhmB2v0%2B0e6Tfe%2BOkJ2oyxRYyDxnSR2tlYNiDRBL6pp4D6yTPyie2GkAzc8BUAL1B9BOH06Q77ANAi%2BTNVY4j5pEt7AMJrO%2BncxplaxB079ysDTY48IUwd1fHunieHuAzdLrTGeZuAG8XovUhCaYSEOHc9gV%2BxpEQX4YNOZz7c%2BpbR6z8sRHc&X-Amz-Signature=f3fe433cc7e303ffdc994ab450379c687f22910779740d93c80819698f467a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
