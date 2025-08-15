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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666CMOQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDJElv6NzCgzmNNPQrqSVKQ5l34lpLUf%2BeDSohlw9m%2BgIhAKUtqpkqA6xZ%2BCMLJdeivv8dMBTL1ZfH17emhZOBO60QKv8DCFMQABoMNjM3NDIzMTgzODA1IgyX%2BurT4AQCwMDNFbIq3AP30MwFFtx95FXGVPPnZASZo4gxX5XE5fHNj7HEUPqp3jYRDD4K8T7T5NuLv38ABEwXwi32bewqLW4LH9lTVgrC7aVOcbafq4HDGl18boCJNmbx4CTpNup5u5wDIzdpuwcEi6MJ%2BlXt%2BAepWIrt%2Bao110%2BL5%2BqBZekKO18qO%2BBLXGPSKh2TrISFecpTbzni%2FqHn%2BNC7sNunpLkg%2FU6EJD7BhGrNIbxd50Q2UcoZbOBZHMyBmCTJ%2FtNApQR%2FDlpwPg%2FgV%2BWlhSvJKvBRAvgzz%2FBESDhl8F4iKccIxC2u4IpzMosEr9TTLxmLePQMhf1p6ZsXPBX7PPUW2J%2FJ9xH0BBHOfyMYkXUAko2H4jwUlMBXpn%2FbAELfHPkppmlovOytBBlol6kBVe79%2Fwl5gqauy5GNd4LIVkAGWurbrzooRc5mLtRCi7OhrNKAMNFTyDBsyAJ8grZPOZlRaZauMbZOLY21RBhQVeASLv%2Bt%2FcLMuwImKiscmFELmEaOlv5eReUd1HHs6I2ZIWq8HAFb%2FDPWc40%2F4BuUx5Y7FvfZwg5OjTfx6u7mfF89mEREmcor%2BtvTMhiHwOk5DCGyL%2FerRV0zd4WaWpJmVipT1IFhqVl%2FPffGJDLf5zwvYimI1JIu0jD6ovrEBjqkATZGIDg0vPV%2FwqVy5%2FguH1hOz0lz%2FeXANMlgFmo%2BujcoKCDIOWciJW1E6mNFuWdj31EP5sRJydD9pyVBKCqrIFQORm6R7jq809A9BosGL2hTrYpDoySq7vdYpK4nsltvkanNLsLP79lYNsohurwSZuSIznBOVhJ%2BzhGUnXB%2BoyCjcq1anqsr5xvVPIjnwnVC%2B18IR%2FFNA8Bsn%2Fsa%2BXgBylZ%2FCidO&X-Amz-Signature=d9b5b08de4552b062290470e7e7cb39fd0f0f7db4108771706a8e28710de9f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666CMOQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDJElv6NzCgzmNNPQrqSVKQ5l34lpLUf%2BeDSohlw9m%2BgIhAKUtqpkqA6xZ%2BCMLJdeivv8dMBTL1ZfH17emhZOBO60QKv8DCFMQABoMNjM3NDIzMTgzODA1IgyX%2BurT4AQCwMDNFbIq3AP30MwFFtx95FXGVPPnZASZo4gxX5XE5fHNj7HEUPqp3jYRDD4K8T7T5NuLv38ABEwXwi32bewqLW4LH9lTVgrC7aVOcbafq4HDGl18boCJNmbx4CTpNup5u5wDIzdpuwcEi6MJ%2BlXt%2BAepWIrt%2Bao110%2BL5%2BqBZekKO18qO%2BBLXGPSKh2TrISFecpTbzni%2FqHn%2BNC7sNunpLkg%2FU6EJD7BhGrNIbxd50Q2UcoZbOBZHMyBmCTJ%2FtNApQR%2FDlpwPg%2FgV%2BWlhSvJKvBRAvgzz%2FBESDhl8F4iKccIxC2u4IpzMosEr9TTLxmLePQMhf1p6ZsXPBX7PPUW2J%2FJ9xH0BBHOfyMYkXUAko2H4jwUlMBXpn%2FbAELfHPkppmlovOytBBlol6kBVe79%2Fwl5gqauy5GNd4LIVkAGWurbrzooRc5mLtRCi7OhrNKAMNFTyDBsyAJ8grZPOZlRaZauMbZOLY21RBhQVeASLv%2Bt%2FcLMuwImKiscmFELmEaOlv5eReUd1HHs6I2ZIWq8HAFb%2FDPWc40%2F4BuUx5Y7FvfZwg5OjTfx6u7mfF89mEREmcor%2BtvTMhiHwOk5DCGyL%2FerRV0zd4WaWpJmVipT1IFhqVl%2FPffGJDLf5zwvYimI1JIu0jD6ovrEBjqkATZGIDg0vPV%2FwqVy5%2FguH1hOz0lz%2FeXANMlgFmo%2BujcoKCDIOWciJW1E6mNFuWdj31EP5sRJydD9pyVBKCqrIFQORm6R7jq809A9BosGL2hTrYpDoySq7vdYpK4nsltvkanNLsLP79lYNsohurwSZuSIznBOVhJ%2BzhGUnXB%2BoyCjcq1anqsr5xvVPIjnwnVC%2B18IR%2FFNA8Bsn%2Fsa%2BXgBylZ%2FCidO&X-Amz-Signature=0bc1a3492c8bd492ce8fcb801c7ef285806d67b79d21e6a0c496a5443bc974fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666CMOQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDJElv6NzCgzmNNPQrqSVKQ5l34lpLUf%2BeDSohlw9m%2BgIhAKUtqpkqA6xZ%2BCMLJdeivv8dMBTL1ZfH17emhZOBO60QKv8DCFMQABoMNjM3NDIzMTgzODA1IgyX%2BurT4AQCwMDNFbIq3AP30MwFFtx95FXGVPPnZASZo4gxX5XE5fHNj7HEUPqp3jYRDD4K8T7T5NuLv38ABEwXwi32bewqLW4LH9lTVgrC7aVOcbafq4HDGl18boCJNmbx4CTpNup5u5wDIzdpuwcEi6MJ%2BlXt%2BAepWIrt%2Bao110%2BL5%2BqBZekKO18qO%2BBLXGPSKh2TrISFecpTbzni%2FqHn%2BNC7sNunpLkg%2FU6EJD7BhGrNIbxd50Q2UcoZbOBZHMyBmCTJ%2FtNApQR%2FDlpwPg%2FgV%2BWlhSvJKvBRAvgzz%2FBESDhl8F4iKccIxC2u4IpzMosEr9TTLxmLePQMhf1p6ZsXPBX7PPUW2J%2FJ9xH0BBHOfyMYkXUAko2H4jwUlMBXpn%2FbAELfHPkppmlovOytBBlol6kBVe79%2Fwl5gqauy5GNd4LIVkAGWurbrzooRc5mLtRCi7OhrNKAMNFTyDBsyAJ8grZPOZlRaZauMbZOLY21RBhQVeASLv%2Bt%2FcLMuwImKiscmFELmEaOlv5eReUd1HHs6I2ZIWq8HAFb%2FDPWc40%2F4BuUx5Y7FvfZwg5OjTfx6u7mfF89mEREmcor%2BtvTMhiHwOk5DCGyL%2FerRV0zd4WaWpJmVipT1IFhqVl%2FPffGJDLf5zwvYimI1JIu0jD6ovrEBjqkATZGIDg0vPV%2FwqVy5%2FguH1hOz0lz%2FeXANMlgFmo%2BujcoKCDIOWciJW1E6mNFuWdj31EP5sRJydD9pyVBKCqrIFQORm6R7jq809A9BosGL2hTrYpDoySq7vdYpK4nsltvkanNLsLP79lYNsohurwSZuSIznBOVhJ%2BzhGUnXB%2BoyCjcq1anqsr5xvVPIjnwnVC%2B18IR%2FFNA8Bsn%2Fsa%2BXgBylZ%2FCidO&X-Amz-Signature=6e8609ca95a549d914a279c421b4864f3a3c357f27adfce5770fc929d8d3f46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666CMOQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDJElv6NzCgzmNNPQrqSVKQ5l34lpLUf%2BeDSohlw9m%2BgIhAKUtqpkqA6xZ%2BCMLJdeivv8dMBTL1ZfH17emhZOBO60QKv8DCFMQABoMNjM3NDIzMTgzODA1IgyX%2BurT4AQCwMDNFbIq3AP30MwFFtx95FXGVPPnZASZo4gxX5XE5fHNj7HEUPqp3jYRDD4K8T7T5NuLv38ABEwXwi32bewqLW4LH9lTVgrC7aVOcbafq4HDGl18boCJNmbx4CTpNup5u5wDIzdpuwcEi6MJ%2BlXt%2BAepWIrt%2Bao110%2BL5%2BqBZekKO18qO%2BBLXGPSKh2TrISFecpTbzni%2FqHn%2BNC7sNunpLkg%2FU6EJD7BhGrNIbxd50Q2UcoZbOBZHMyBmCTJ%2FtNApQR%2FDlpwPg%2FgV%2BWlhSvJKvBRAvgzz%2FBESDhl8F4iKccIxC2u4IpzMosEr9TTLxmLePQMhf1p6ZsXPBX7PPUW2J%2FJ9xH0BBHOfyMYkXUAko2H4jwUlMBXpn%2FbAELfHPkppmlovOytBBlol6kBVe79%2Fwl5gqauy5GNd4LIVkAGWurbrzooRc5mLtRCi7OhrNKAMNFTyDBsyAJ8grZPOZlRaZauMbZOLY21RBhQVeASLv%2Bt%2FcLMuwImKiscmFELmEaOlv5eReUd1HHs6I2ZIWq8HAFb%2FDPWc40%2F4BuUx5Y7FvfZwg5OjTfx6u7mfF89mEREmcor%2BtvTMhiHwOk5DCGyL%2FerRV0zd4WaWpJmVipT1IFhqVl%2FPffGJDLf5zwvYimI1JIu0jD6ovrEBjqkATZGIDg0vPV%2FwqVy5%2FguH1hOz0lz%2FeXANMlgFmo%2BujcoKCDIOWciJW1E6mNFuWdj31EP5sRJydD9pyVBKCqrIFQORm6R7jq809A9BosGL2hTrYpDoySq7vdYpK4nsltvkanNLsLP79lYNsohurwSZuSIznBOVhJ%2BzhGUnXB%2BoyCjcq1anqsr5xvVPIjnwnVC%2B18IR%2FFNA8Bsn%2Fsa%2BXgBylZ%2FCidO&X-Amz-Signature=939e39a226f42f6e66680ed88cea32a3963b9e5b7dcab886649e63c98a24b856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666CMOQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDJElv6NzCgzmNNPQrqSVKQ5l34lpLUf%2BeDSohlw9m%2BgIhAKUtqpkqA6xZ%2BCMLJdeivv8dMBTL1ZfH17emhZOBO60QKv8DCFMQABoMNjM3NDIzMTgzODA1IgyX%2BurT4AQCwMDNFbIq3AP30MwFFtx95FXGVPPnZASZo4gxX5XE5fHNj7HEUPqp3jYRDD4K8T7T5NuLv38ABEwXwi32bewqLW4LH9lTVgrC7aVOcbafq4HDGl18boCJNmbx4CTpNup5u5wDIzdpuwcEi6MJ%2BlXt%2BAepWIrt%2Bao110%2BL5%2BqBZekKO18qO%2BBLXGPSKh2TrISFecpTbzni%2FqHn%2BNC7sNunpLkg%2FU6EJD7BhGrNIbxd50Q2UcoZbOBZHMyBmCTJ%2FtNApQR%2FDlpwPg%2FgV%2BWlhSvJKvBRAvgzz%2FBESDhl8F4iKccIxC2u4IpzMosEr9TTLxmLePQMhf1p6ZsXPBX7PPUW2J%2FJ9xH0BBHOfyMYkXUAko2H4jwUlMBXpn%2FbAELfHPkppmlovOytBBlol6kBVe79%2Fwl5gqauy5GNd4LIVkAGWurbrzooRc5mLtRCi7OhrNKAMNFTyDBsyAJ8grZPOZlRaZauMbZOLY21RBhQVeASLv%2Bt%2FcLMuwImKiscmFELmEaOlv5eReUd1HHs6I2ZIWq8HAFb%2FDPWc40%2F4BuUx5Y7FvfZwg5OjTfx6u7mfF89mEREmcor%2BtvTMhiHwOk5DCGyL%2FerRV0zd4WaWpJmVipT1IFhqVl%2FPffGJDLf5zwvYimI1JIu0jD6ovrEBjqkATZGIDg0vPV%2FwqVy5%2FguH1hOz0lz%2FeXANMlgFmo%2BujcoKCDIOWciJW1E6mNFuWdj31EP5sRJydD9pyVBKCqrIFQORm6R7jq809A9BosGL2hTrYpDoySq7vdYpK4nsltvkanNLsLP79lYNsohurwSZuSIznBOVhJ%2BzhGUnXB%2BoyCjcq1anqsr5xvVPIjnwnVC%2B18IR%2FFNA8Bsn%2Fsa%2BXgBylZ%2FCidO&X-Amz-Signature=40690944b354cf159a3d6d93775389d1a5bcc6261313f1efb17dc627572cfec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666CMOQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDJElv6NzCgzmNNPQrqSVKQ5l34lpLUf%2BeDSohlw9m%2BgIhAKUtqpkqA6xZ%2BCMLJdeivv8dMBTL1ZfH17emhZOBO60QKv8DCFMQABoMNjM3NDIzMTgzODA1IgyX%2BurT4AQCwMDNFbIq3AP30MwFFtx95FXGVPPnZASZo4gxX5XE5fHNj7HEUPqp3jYRDD4K8T7T5NuLv38ABEwXwi32bewqLW4LH9lTVgrC7aVOcbafq4HDGl18boCJNmbx4CTpNup5u5wDIzdpuwcEi6MJ%2BlXt%2BAepWIrt%2Bao110%2BL5%2BqBZekKO18qO%2BBLXGPSKh2TrISFecpTbzni%2FqHn%2BNC7sNunpLkg%2FU6EJD7BhGrNIbxd50Q2UcoZbOBZHMyBmCTJ%2FtNApQR%2FDlpwPg%2FgV%2BWlhSvJKvBRAvgzz%2FBESDhl8F4iKccIxC2u4IpzMosEr9TTLxmLePQMhf1p6ZsXPBX7PPUW2J%2FJ9xH0BBHOfyMYkXUAko2H4jwUlMBXpn%2FbAELfHPkppmlovOytBBlol6kBVe79%2Fwl5gqauy5GNd4LIVkAGWurbrzooRc5mLtRCi7OhrNKAMNFTyDBsyAJ8grZPOZlRaZauMbZOLY21RBhQVeASLv%2Bt%2FcLMuwImKiscmFELmEaOlv5eReUd1HHs6I2ZIWq8HAFb%2FDPWc40%2F4BuUx5Y7FvfZwg5OjTfx6u7mfF89mEREmcor%2BtvTMhiHwOk5DCGyL%2FerRV0zd4WaWpJmVipT1IFhqVl%2FPffGJDLf5zwvYimI1JIu0jD6ovrEBjqkATZGIDg0vPV%2FwqVy5%2FguH1hOz0lz%2FeXANMlgFmo%2BujcoKCDIOWciJW1E6mNFuWdj31EP5sRJydD9pyVBKCqrIFQORm6R7jq809A9BosGL2hTrYpDoySq7vdYpK4nsltvkanNLsLP79lYNsohurwSZuSIznBOVhJ%2BzhGUnXB%2BoyCjcq1anqsr5xvVPIjnwnVC%2B18IR%2FFNA8Bsn%2Fsa%2BXgBylZ%2FCidO&X-Amz-Signature=75118e1a0e795c94471d390b4b487045c0d0d206253dd1c8f7af93e0fe8701a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666CMOQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDJElv6NzCgzmNNPQrqSVKQ5l34lpLUf%2BeDSohlw9m%2BgIhAKUtqpkqA6xZ%2BCMLJdeivv8dMBTL1ZfH17emhZOBO60QKv8DCFMQABoMNjM3NDIzMTgzODA1IgyX%2BurT4AQCwMDNFbIq3AP30MwFFtx95FXGVPPnZASZo4gxX5XE5fHNj7HEUPqp3jYRDD4K8T7T5NuLv38ABEwXwi32bewqLW4LH9lTVgrC7aVOcbafq4HDGl18boCJNmbx4CTpNup5u5wDIzdpuwcEi6MJ%2BlXt%2BAepWIrt%2Bao110%2BL5%2BqBZekKO18qO%2BBLXGPSKh2TrISFecpTbzni%2FqHn%2BNC7sNunpLkg%2FU6EJD7BhGrNIbxd50Q2UcoZbOBZHMyBmCTJ%2FtNApQR%2FDlpwPg%2FgV%2BWlhSvJKvBRAvgzz%2FBESDhl8F4iKccIxC2u4IpzMosEr9TTLxmLePQMhf1p6ZsXPBX7PPUW2J%2FJ9xH0BBHOfyMYkXUAko2H4jwUlMBXpn%2FbAELfHPkppmlovOytBBlol6kBVe79%2Fwl5gqauy5GNd4LIVkAGWurbrzooRc5mLtRCi7OhrNKAMNFTyDBsyAJ8grZPOZlRaZauMbZOLY21RBhQVeASLv%2Bt%2FcLMuwImKiscmFELmEaOlv5eReUd1HHs6I2ZIWq8HAFb%2FDPWc40%2F4BuUx5Y7FvfZwg5OjTfx6u7mfF89mEREmcor%2BtvTMhiHwOk5DCGyL%2FerRV0zd4WaWpJmVipT1IFhqVl%2FPffGJDLf5zwvYimI1JIu0jD6ovrEBjqkATZGIDg0vPV%2FwqVy5%2FguH1hOz0lz%2FeXANMlgFmo%2BujcoKCDIOWciJW1E6mNFuWdj31EP5sRJydD9pyVBKCqrIFQORm6R7jq809A9BosGL2hTrYpDoySq7vdYpK4nsltvkanNLsLP79lYNsohurwSZuSIznBOVhJ%2BzhGUnXB%2BoyCjcq1anqsr5xvVPIjnwnVC%2B18IR%2FFNA8Bsn%2Fsa%2BXgBylZ%2FCidO&X-Amz-Signature=b6f45c8479481e1c7cc5f2128d8af0b13eaa3c2c3f0f6ba84e33dd4ec3b44609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666CMOQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDJElv6NzCgzmNNPQrqSVKQ5l34lpLUf%2BeDSohlw9m%2BgIhAKUtqpkqA6xZ%2BCMLJdeivv8dMBTL1ZfH17emhZOBO60QKv8DCFMQABoMNjM3NDIzMTgzODA1IgyX%2BurT4AQCwMDNFbIq3AP30MwFFtx95FXGVPPnZASZo4gxX5XE5fHNj7HEUPqp3jYRDD4K8T7T5NuLv38ABEwXwi32bewqLW4LH9lTVgrC7aVOcbafq4HDGl18boCJNmbx4CTpNup5u5wDIzdpuwcEi6MJ%2BlXt%2BAepWIrt%2Bao110%2BL5%2BqBZekKO18qO%2BBLXGPSKh2TrISFecpTbzni%2FqHn%2BNC7sNunpLkg%2FU6EJD7BhGrNIbxd50Q2UcoZbOBZHMyBmCTJ%2FtNApQR%2FDlpwPg%2FgV%2BWlhSvJKvBRAvgzz%2FBESDhl8F4iKccIxC2u4IpzMosEr9TTLxmLePQMhf1p6ZsXPBX7PPUW2J%2FJ9xH0BBHOfyMYkXUAko2H4jwUlMBXpn%2FbAELfHPkppmlovOytBBlol6kBVe79%2Fwl5gqauy5GNd4LIVkAGWurbrzooRc5mLtRCi7OhrNKAMNFTyDBsyAJ8grZPOZlRaZauMbZOLY21RBhQVeASLv%2Bt%2FcLMuwImKiscmFELmEaOlv5eReUd1HHs6I2ZIWq8HAFb%2FDPWc40%2F4BuUx5Y7FvfZwg5OjTfx6u7mfF89mEREmcor%2BtvTMhiHwOk5DCGyL%2FerRV0zd4WaWpJmVipT1IFhqVl%2FPffGJDLf5zwvYimI1JIu0jD6ovrEBjqkATZGIDg0vPV%2FwqVy5%2FguH1hOz0lz%2FeXANMlgFmo%2BujcoKCDIOWciJW1E6mNFuWdj31EP5sRJydD9pyVBKCqrIFQORm6R7jq809A9BosGL2hTrYpDoySq7vdYpK4nsltvkanNLsLP79lYNsohurwSZuSIznBOVhJ%2BzhGUnXB%2BoyCjcq1anqsr5xvVPIjnwnVC%2B18IR%2FFNA8Bsn%2Fsa%2BXgBylZ%2FCidO&X-Amz-Signature=6fd2ae2a75244f2748020e3cd9c58584b26879050ffd7c897e67a481f2fe70ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666CMOQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDJElv6NzCgzmNNPQrqSVKQ5l34lpLUf%2BeDSohlw9m%2BgIhAKUtqpkqA6xZ%2BCMLJdeivv8dMBTL1ZfH17emhZOBO60QKv8DCFMQABoMNjM3NDIzMTgzODA1IgyX%2BurT4AQCwMDNFbIq3AP30MwFFtx95FXGVPPnZASZo4gxX5XE5fHNj7HEUPqp3jYRDD4K8T7T5NuLv38ABEwXwi32bewqLW4LH9lTVgrC7aVOcbafq4HDGl18boCJNmbx4CTpNup5u5wDIzdpuwcEi6MJ%2BlXt%2BAepWIrt%2Bao110%2BL5%2BqBZekKO18qO%2BBLXGPSKh2TrISFecpTbzni%2FqHn%2BNC7sNunpLkg%2FU6EJD7BhGrNIbxd50Q2UcoZbOBZHMyBmCTJ%2FtNApQR%2FDlpwPg%2FgV%2BWlhSvJKvBRAvgzz%2FBESDhl8F4iKccIxC2u4IpzMosEr9TTLxmLePQMhf1p6ZsXPBX7PPUW2J%2FJ9xH0BBHOfyMYkXUAko2H4jwUlMBXpn%2FbAELfHPkppmlovOytBBlol6kBVe79%2Fwl5gqauy5GNd4LIVkAGWurbrzooRc5mLtRCi7OhrNKAMNFTyDBsyAJ8grZPOZlRaZauMbZOLY21RBhQVeASLv%2Bt%2FcLMuwImKiscmFELmEaOlv5eReUd1HHs6I2ZIWq8HAFb%2FDPWc40%2F4BuUx5Y7FvfZwg5OjTfx6u7mfF89mEREmcor%2BtvTMhiHwOk5DCGyL%2FerRV0zd4WaWpJmVipT1IFhqVl%2FPffGJDLf5zwvYimI1JIu0jD6ovrEBjqkATZGIDg0vPV%2FwqVy5%2FguH1hOz0lz%2FeXANMlgFmo%2BujcoKCDIOWciJW1E6mNFuWdj31EP5sRJydD9pyVBKCqrIFQORm6R7jq809A9BosGL2hTrYpDoySq7vdYpK4nsltvkanNLsLP79lYNsohurwSZuSIznBOVhJ%2BzhGUnXB%2BoyCjcq1anqsr5xvVPIjnwnVC%2B18IR%2FFNA8Bsn%2Fsa%2BXgBylZ%2FCidO&X-Amz-Signature=9cb9f6e387abe6b0ad0037ab9859357b4202ceb46e768e9037dbcbc3a4585de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666CMOQT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCDJElv6NzCgzmNNPQrqSVKQ5l34lpLUf%2BeDSohlw9m%2BgIhAKUtqpkqA6xZ%2BCMLJdeivv8dMBTL1ZfH17emhZOBO60QKv8DCFMQABoMNjM3NDIzMTgzODA1IgyX%2BurT4AQCwMDNFbIq3AP30MwFFtx95FXGVPPnZASZo4gxX5XE5fHNj7HEUPqp3jYRDD4K8T7T5NuLv38ABEwXwi32bewqLW4LH9lTVgrC7aVOcbafq4HDGl18boCJNmbx4CTpNup5u5wDIzdpuwcEi6MJ%2BlXt%2BAepWIrt%2Bao110%2BL5%2BqBZekKO18qO%2BBLXGPSKh2TrISFecpTbzni%2FqHn%2BNC7sNunpLkg%2FU6EJD7BhGrNIbxd50Q2UcoZbOBZHMyBmCTJ%2FtNApQR%2FDlpwPg%2FgV%2BWlhSvJKvBRAvgzz%2FBESDhl8F4iKccIxC2u4IpzMosEr9TTLxmLePQMhf1p6ZsXPBX7PPUW2J%2FJ9xH0BBHOfyMYkXUAko2H4jwUlMBXpn%2FbAELfHPkppmlovOytBBlol6kBVe79%2Fwl5gqauy5GNd4LIVkAGWurbrzooRc5mLtRCi7OhrNKAMNFTyDBsyAJ8grZPOZlRaZauMbZOLY21RBhQVeASLv%2Bt%2FcLMuwImKiscmFELmEaOlv5eReUd1HHs6I2ZIWq8HAFb%2FDPWc40%2F4BuUx5Y7FvfZwg5OjTfx6u7mfF89mEREmcor%2BtvTMhiHwOk5DCGyL%2FerRV0zd4WaWpJmVipT1IFhqVl%2FPffGJDLf5zwvYimI1JIu0jD6ovrEBjqkATZGIDg0vPV%2FwqVy5%2FguH1hOz0lz%2FeXANMlgFmo%2BujcoKCDIOWciJW1E6mNFuWdj31EP5sRJydD9pyVBKCqrIFQORm6R7jq809A9BosGL2hTrYpDoySq7vdYpK4nsltvkanNLsLP79lYNsohurwSZuSIznBOVhJ%2BzhGUnXB%2BoyCjcq1anqsr5xvVPIjnwnVC%2B18IR%2FFNA8Bsn%2Fsa%2BXgBylZ%2FCidO&X-Amz-Signature=89ac6b4e360763f612dacab796d4693a2c62842c3b1293508ea47e3b3155ef52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MVJURD4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCqDVVEk2kixbP7Z2Hb4v9JPoKVhboaaMlJaTr%2Bx3olIwIgKf9GRFYjgcvEO9%2Bo2Pu8ZktG4Zzj0UFPlkFFY5m2uukq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOzx1OoG0ULdEEmdtCrcA8RQRdIAzqAt%2Fby9zYxCySV%2FgZLxsDqv6%2FTGu276zYmzi6aj%2FvIvLGfoAv%2BdSkDp6wywrttYY4JKCOQWb%2Bv6rGrNO0DJLvZXkzrAbnqtnkOIPF%2BPR799T6XDn5phz%2F3eqkpbtsf4S%2BDKWIeCG755jVz3Ne8oIaSB3sH%2FYUsltjLHBAmAdvW8C3Ql%2BUiehuKTPhzVWf6GG2jSYRXY0sRssdc8rFJY3ZsBAiFeMeOaBYiV79E%2BXHrggqgxRtxo38QPwEkUfKGcgG3blMfeevSLJMwTkeZOF8ARSkBgwCHuzI4sZyMF%2BwtGwf3aSXJRXyRa43Mh7p3YM9OO9Jezn9tbqJMtC%2Be5tQUAyhrjqAr5CFPnQ4W9pDi6Lgr9tUdRHjmw5l004Xg6iAsQ7ta9JbuJe6h0HEF6Cm5muo75EOVZFkb1EWscThc91xOxC2D2SIzXAtHf6UH9qDj9RUzqaxtIFxfjlTGAxhgEl%2BChTerWymPwRMxy9wQ6CblhCKqkCjdVCle%2BFCnP8owJIcan4i3YwWAmS82m%2FWmmGueikEqDuziP12HPtiJVIHVTJdU66qSt18jAz1ZtW3o%2F3zu%2FwJR8FxgP%2B%2FKlAi5up9vzlnnaFmw%2BwqRbfQrcnxgrGJ4FMIuj%2BsQGOqUBMQpjqlQmkfGAglXJaFSNyTQS%2BoGCkxmu54FRezIVR%2FQkIL5DbSa9TJRtwrghG7hEnNGrHjTbu07ZVygFlF1ZFiY26yE%2BqUHrvOo7ZjQqpgjvaO0QOg1qsmxBw6sbQphcSJ3ObtwPhkWIV7p6s5VZak%2FMbD8VguG6ZW4aGBGJGgfkXFIqpEQJ0mnxTru3T1F%2B4dYQSJWwOKfZrARibraBQtbKumDg&X-Amz-Signature=500c99184647bd4bea1a53a11f0a2c7fad6c88834cb1a06c582703bc6d4e0f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWDCKST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCdBKDIjwLGgC6pGCg2HUsM2mjR9KUrWz1jri23LIp8gIgC0JvWf4idF7vuAx0rWcX4SiqtsR%2BwD73slXPo5CK9fIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGYMJJ86vChtIUtYbyrcA7yIcNnb9%2B5fwscoW5EQ7LKDWc%2BkSbRh2qvaHdzOZOh8cjxt1Ii%2FFohBlD2RQluc65cfdSHw4uvORzuydE6vHd8yQQiu8jSyV9ubg8sQDVfJH3Im5kGNF0jKE6uR4CrXT6g7Fxp%2Fa%2FSk%2FaB2SvpOWo5H15EdaM%2FLGB4TaPlGmBoazLRqTSOJg3XmunFFPFQXQmfBddusb7nCyoGdm9IFZP1YTRpnYCPZ%2B90zhBiUAjic2JCH%2FN38FaTXiWBl88xnZKlgmcLK8XJQD7LZ3%2FVEJjalLTBTYceXMdJrAwUc2%2FDOCjlUWYCDiRpfvnsEsPmgRfq1%2FlolhGRCzjKxBDXxH6JVlzXvcfNuN%2BTRiaw%2FIF95kGb068zjkw5J1NM5tDhVivndXfgIlwLIqhKXHFLEtlfrjjC0TWz4y2NHMgZzGOe9WiWAqX0RogVFc8iBi09Dg4cBoNTR3o%2FqFpvPhHy04T9qkJ8n1ibFxiD5%2BQ1bzzpBzPH%2BcvI6aOOtyHTr%2BntZh%2FqCurUQYOvPXCWu1DsC%2BPSShvZKwOnb5KiVj2%2Bf%2FskeR0o32H%2B0Cawwc1xUchbXIy4MXFC2pUMCajwRcz3TySYTOEYjyIEIrTYfxpVljCl0tNKyC8dlJG6Ztu7WMIuj%2BsQGOqUB%2Btuj0LAfWQhdphxqcaMuWtea3NibqL1KgNL43Z5w4fT%2BTbespCcSYOO4m7oPbghGsEBlopMk15WxMemKjO6f%2BfHN6b8Tq7OxR%2B3jSdQY6Njgh2WkguE1ZPpbLLxa0Yx3BJ1ZxU2zRYZ8KEGMMEuyM7T9hRAteLPvpx4Jr4hz8%2Fsu2mTjObeDMz4wchtU8TbsmWEsVjGkK7bqkLWMfc%2F8KNCcJ1nL&X-Amz-Signature=0fd930c2839ff7964923ccef71e7a84e51795b242c7536bcc7e2bf6fad4d1af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWDCKST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCdBKDIjwLGgC6pGCg2HUsM2mjR9KUrWz1jri23LIp8gIgC0JvWf4idF7vuAx0rWcX4SiqtsR%2BwD73slXPo5CK9fIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGYMJJ86vChtIUtYbyrcA7yIcNnb9%2B5fwscoW5EQ7LKDWc%2BkSbRh2qvaHdzOZOh8cjxt1Ii%2FFohBlD2RQluc65cfdSHw4uvORzuydE6vHd8yQQiu8jSyV9ubg8sQDVfJH3Im5kGNF0jKE6uR4CrXT6g7Fxp%2Fa%2FSk%2FaB2SvpOWo5H15EdaM%2FLGB4TaPlGmBoazLRqTSOJg3XmunFFPFQXQmfBddusb7nCyoGdm9IFZP1YTRpnYCPZ%2B90zhBiUAjic2JCH%2FN38FaTXiWBl88xnZKlgmcLK8XJQD7LZ3%2FVEJjalLTBTYceXMdJrAwUc2%2FDOCjlUWYCDiRpfvnsEsPmgRfq1%2FlolhGRCzjKxBDXxH6JVlzXvcfNuN%2BTRiaw%2FIF95kGb068zjkw5J1NM5tDhVivndXfgIlwLIqhKXHFLEtlfrjjC0TWz4y2NHMgZzGOe9WiWAqX0RogVFc8iBi09Dg4cBoNTR3o%2FqFpvPhHy04T9qkJ8n1ibFxiD5%2BQ1bzzpBzPH%2BcvI6aOOtyHTr%2BntZh%2FqCurUQYOvPXCWu1DsC%2BPSShvZKwOnb5KiVj2%2Bf%2FskeR0o32H%2B0Cawwc1xUchbXIy4MXFC2pUMCajwRcz3TySYTOEYjyIEIrTYfxpVljCl0tNKyC8dlJG6Ztu7WMIuj%2BsQGOqUB%2Btuj0LAfWQhdphxqcaMuWtea3NibqL1KgNL43Z5w4fT%2BTbespCcSYOO4m7oPbghGsEBlopMk15WxMemKjO6f%2BfHN6b8Tq7OxR%2B3jSdQY6Njgh2WkguE1ZPpbLLxa0Yx3BJ1ZxU2zRYZ8KEGMMEuyM7T9hRAteLPvpx4Jr4hz8%2Fsu2mTjObeDMz4wchtU8TbsmWEsVjGkK7bqkLWMfc%2F8KNCcJ1nL&X-Amz-Signature=b9473a9111ade1722abc830e1fff124cdcfd9c7187c64cd261b1227be20bb3c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWDCKST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCdBKDIjwLGgC6pGCg2HUsM2mjR9KUrWz1jri23LIp8gIgC0JvWf4idF7vuAx0rWcX4SiqtsR%2BwD73slXPo5CK9fIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGYMJJ86vChtIUtYbyrcA7yIcNnb9%2B5fwscoW5EQ7LKDWc%2BkSbRh2qvaHdzOZOh8cjxt1Ii%2FFohBlD2RQluc65cfdSHw4uvORzuydE6vHd8yQQiu8jSyV9ubg8sQDVfJH3Im5kGNF0jKE6uR4CrXT6g7Fxp%2Fa%2FSk%2FaB2SvpOWo5H15EdaM%2FLGB4TaPlGmBoazLRqTSOJg3XmunFFPFQXQmfBddusb7nCyoGdm9IFZP1YTRpnYCPZ%2B90zhBiUAjic2JCH%2FN38FaTXiWBl88xnZKlgmcLK8XJQD7LZ3%2FVEJjalLTBTYceXMdJrAwUc2%2FDOCjlUWYCDiRpfvnsEsPmgRfq1%2FlolhGRCzjKxBDXxH6JVlzXvcfNuN%2BTRiaw%2FIF95kGb068zjkw5J1NM5tDhVivndXfgIlwLIqhKXHFLEtlfrjjC0TWz4y2NHMgZzGOe9WiWAqX0RogVFc8iBi09Dg4cBoNTR3o%2FqFpvPhHy04T9qkJ8n1ibFxiD5%2BQ1bzzpBzPH%2BcvI6aOOtyHTr%2BntZh%2FqCurUQYOvPXCWu1DsC%2BPSShvZKwOnb5KiVj2%2Bf%2FskeR0o32H%2B0Cawwc1xUchbXIy4MXFC2pUMCajwRcz3TySYTOEYjyIEIrTYfxpVljCl0tNKyC8dlJG6Ztu7WMIuj%2BsQGOqUB%2Btuj0LAfWQhdphxqcaMuWtea3NibqL1KgNL43Z5w4fT%2BTbespCcSYOO4m7oPbghGsEBlopMk15WxMemKjO6f%2BfHN6b8Tq7OxR%2B3jSdQY6Njgh2WkguE1ZPpbLLxa0Yx3BJ1ZxU2zRYZ8KEGMMEuyM7T9hRAteLPvpx4Jr4hz8%2Fsu2mTjObeDMz4wchtU8TbsmWEsVjGkK7bqkLWMfc%2F8KNCcJ1nL&X-Amz-Signature=7b0d37270e8febaa3d671ed1658bb6caa54231342c00814a8df30e9fac228fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWDCKST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCdBKDIjwLGgC6pGCg2HUsM2mjR9KUrWz1jri23LIp8gIgC0JvWf4idF7vuAx0rWcX4SiqtsR%2BwD73slXPo5CK9fIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGYMJJ86vChtIUtYbyrcA7yIcNnb9%2B5fwscoW5EQ7LKDWc%2BkSbRh2qvaHdzOZOh8cjxt1Ii%2FFohBlD2RQluc65cfdSHw4uvORzuydE6vHd8yQQiu8jSyV9ubg8sQDVfJH3Im5kGNF0jKE6uR4CrXT6g7Fxp%2Fa%2FSk%2FaB2SvpOWo5H15EdaM%2FLGB4TaPlGmBoazLRqTSOJg3XmunFFPFQXQmfBddusb7nCyoGdm9IFZP1YTRpnYCPZ%2B90zhBiUAjic2JCH%2FN38FaTXiWBl88xnZKlgmcLK8XJQD7LZ3%2FVEJjalLTBTYceXMdJrAwUc2%2FDOCjlUWYCDiRpfvnsEsPmgRfq1%2FlolhGRCzjKxBDXxH6JVlzXvcfNuN%2BTRiaw%2FIF95kGb068zjkw5J1NM5tDhVivndXfgIlwLIqhKXHFLEtlfrjjC0TWz4y2NHMgZzGOe9WiWAqX0RogVFc8iBi09Dg4cBoNTR3o%2FqFpvPhHy04T9qkJ8n1ibFxiD5%2BQ1bzzpBzPH%2BcvI6aOOtyHTr%2BntZh%2FqCurUQYOvPXCWu1DsC%2BPSShvZKwOnb5KiVj2%2Bf%2FskeR0o32H%2B0Cawwc1xUchbXIy4MXFC2pUMCajwRcz3TySYTOEYjyIEIrTYfxpVljCl0tNKyC8dlJG6Ztu7WMIuj%2BsQGOqUB%2Btuj0LAfWQhdphxqcaMuWtea3NibqL1KgNL43Z5w4fT%2BTbespCcSYOO4m7oPbghGsEBlopMk15WxMemKjO6f%2BfHN6b8Tq7OxR%2B3jSdQY6Njgh2WkguE1ZPpbLLxa0Yx3BJ1ZxU2zRYZ8KEGMMEuyM7T9hRAteLPvpx4Jr4hz8%2Fsu2mTjObeDMz4wchtU8TbsmWEsVjGkK7bqkLWMfc%2F8KNCcJ1nL&X-Amz-Signature=3c6bd75b62d98f0eebc832e23985e7cd88e874c51684cf80df7eb6e0f06fffbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWDCKST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCdBKDIjwLGgC6pGCg2HUsM2mjR9KUrWz1jri23LIp8gIgC0JvWf4idF7vuAx0rWcX4SiqtsR%2BwD73slXPo5CK9fIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGYMJJ86vChtIUtYbyrcA7yIcNnb9%2B5fwscoW5EQ7LKDWc%2BkSbRh2qvaHdzOZOh8cjxt1Ii%2FFohBlD2RQluc65cfdSHw4uvORzuydE6vHd8yQQiu8jSyV9ubg8sQDVfJH3Im5kGNF0jKE6uR4CrXT6g7Fxp%2Fa%2FSk%2FaB2SvpOWo5H15EdaM%2FLGB4TaPlGmBoazLRqTSOJg3XmunFFPFQXQmfBddusb7nCyoGdm9IFZP1YTRpnYCPZ%2B90zhBiUAjic2JCH%2FN38FaTXiWBl88xnZKlgmcLK8XJQD7LZ3%2FVEJjalLTBTYceXMdJrAwUc2%2FDOCjlUWYCDiRpfvnsEsPmgRfq1%2FlolhGRCzjKxBDXxH6JVlzXvcfNuN%2BTRiaw%2FIF95kGb068zjkw5J1NM5tDhVivndXfgIlwLIqhKXHFLEtlfrjjC0TWz4y2NHMgZzGOe9WiWAqX0RogVFc8iBi09Dg4cBoNTR3o%2FqFpvPhHy04T9qkJ8n1ibFxiD5%2BQ1bzzpBzPH%2BcvI6aOOtyHTr%2BntZh%2FqCurUQYOvPXCWu1DsC%2BPSShvZKwOnb5KiVj2%2Bf%2FskeR0o32H%2B0Cawwc1xUchbXIy4MXFC2pUMCajwRcz3TySYTOEYjyIEIrTYfxpVljCl0tNKyC8dlJG6Ztu7WMIuj%2BsQGOqUB%2Btuj0LAfWQhdphxqcaMuWtea3NibqL1KgNL43Z5w4fT%2BTbespCcSYOO4m7oPbghGsEBlopMk15WxMemKjO6f%2BfHN6b8Tq7OxR%2B3jSdQY6Njgh2WkguE1ZPpbLLxa0Yx3BJ1ZxU2zRYZ8KEGMMEuyM7T9hRAteLPvpx4Jr4hz8%2Fsu2mTjObeDMz4wchtU8TbsmWEsVjGkK7bqkLWMfc%2F8KNCcJ1nL&X-Amz-Signature=51b776e86ac166d769cf724220ed3b52d84d10d24c108db5b716829f0a4d62f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWDCKST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCdBKDIjwLGgC6pGCg2HUsM2mjR9KUrWz1jri23LIp8gIgC0JvWf4idF7vuAx0rWcX4SiqtsR%2BwD73slXPo5CK9fIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGYMJJ86vChtIUtYbyrcA7yIcNnb9%2B5fwscoW5EQ7LKDWc%2BkSbRh2qvaHdzOZOh8cjxt1Ii%2FFohBlD2RQluc65cfdSHw4uvORzuydE6vHd8yQQiu8jSyV9ubg8sQDVfJH3Im5kGNF0jKE6uR4CrXT6g7Fxp%2Fa%2FSk%2FaB2SvpOWo5H15EdaM%2FLGB4TaPlGmBoazLRqTSOJg3XmunFFPFQXQmfBddusb7nCyoGdm9IFZP1YTRpnYCPZ%2B90zhBiUAjic2JCH%2FN38FaTXiWBl88xnZKlgmcLK8XJQD7LZ3%2FVEJjalLTBTYceXMdJrAwUc2%2FDOCjlUWYCDiRpfvnsEsPmgRfq1%2FlolhGRCzjKxBDXxH6JVlzXvcfNuN%2BTRiaw%2FIF95kGb068zjkw5J1NM5tDhVivndXfgIlwLIqhKXHFLEtlfrjjC0TWz4y2NHMgZzGOe9WiWAqX0RogVFc8iBi09Dg4cBoNTR3o%2FqFpvPhHy04T9qkJ8n1ibFxiD5%2BQ1bzzpBzPH%2BcvI6aOOtyHTr%2BntZh%2FqCurUQYOvPXCWu1DsC%2BPSShvZKwOnb5KiVj2%2Bf%2FskeR0o32H%2B0Cawwc1xUchbXIy4MXFC2pUMCajwRcz3TySYTOEYjyIEIrTYfxpVljCl0tNKyC8dlJG6Ztu7WMIuj%2BsQGOqUB%2Btuj0LAfWQhdphxqcaMuWtea3NibqL1KgNL43Z5w4fT%2BTbespCcSYOO4m7oPbghGsEBlopMk15WxMemKjO6f%2BfHN6b8Tq7OxR%2B3jSdQY6Njgh2WkguE1ZPpbLLxa0Yx3BJ1ZxU2zRYZ8KEGMMEuyM7T9hRAteLPvpx4Jr4hz8%2Fsu2mTjObeDMz4wchtU8TbsmWEsVjGkK7bqkLWMfc%2F8KNCcJ1nL&X-Amz-Signature=5331d6548f03d199550fcb77d56b8754d42178265f246b748aaa9c7b80229c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWDCKST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCdBKDIjwLGgC6pGCg2HUsM2mjR9KUrWz1jri23LIp8gIgC0JvWf4idF7vuAx0rWcX4SiqtsR%2BwD73slXPo5CK9fIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGYMJJ86vChtIUtYbyrcA7yIcNnb9%2B5fwscoW5EQ7LKDWc%2BkSbRh2qvaHdzOZOh8cjxt1Ii%2FFohBlD2RQluc65cfdSHw4uvORzuydE6vHd8yQQiu8jSyV9ubg8sQDVfJH3Im5kGNF0jKE6uR4CrXT6g7Fxp%2Fa%2FSk%2FaB2SvpOWo5H15EdaM%2FLGB4TaPlGmBoazLRqTSOJg3XmunFFPFQXQmfBddusb7nCyoGdm9IFZP1YTRpnYCPZ%2B90zhBiUAjic2JCH%2FN38FaTXiWBl88xnZKlgmcLK8XJQD7LZ3%2FVEJjalLTBTYceXMdJrAwUc2%2FDOCjlUWYCDiRpfvnsEsPmgRfq1%2FlolhGRCzjKxBDXxH6JVlzXvcfNuN%2BTRiaw%2FIF95kGb068zjkw5J1NM5tDhVivndXfgIlwLIqhKXHFLEtlfrjjC0TWz4y2NHMgZzGOe9WiWAqX0RogVFc8iBi09Dg4cBoNTR3o%2FqFpvPhHy04T9qkJ8n1ibFxiD5%2BQ1bzzpBzPH%2BcvI6aOOtyHTr%2BntZh%2FqCurUQYOvPXCWu1DsC%2BPSShvZKwOnb5KiVj2%2Bf%2FskeR0o32H%2B0Cawwc1xUchbXIy4MXFC2pUMCajwRcz3TySYTOEYjyIEIrTYfxpVljCl0tNKyC8dlJG6Ztu7WMIuj%2BsQGOqUB%2Btuj0LAfWQhdphxqcaMuWtea3NibqL1KgNL43Z5w4fT%2BTbespCcSYOO4m7oPbghGsEBlopMk15WxMemKjO6f%2BfHN6b8Tq7OxR%2B3jSdQY6Njgh2WkguE1ZPpbLLxa0Yx3BJ1ZxU2zRYZ8KEGMMEuyM7T9hRAteLPvpx4Jr4hz8%2Fsu2mTjObeDMz4wchtU8TbsmWEsVjGkK7bqkLWMfc%2F8KNCcJ1nL&X-Amz-Signature=1d2f7eda21f14648edc96b641d7565e01a291e92d965845908a85da3472a9ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWDCKST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCdBKDIjwLGgC6pGCg2HUsM2mjR9KUrWz1jri23LIp8gIgC0JvWf4idF7vuAx0rWcX4SiqtsR%2BwD73slXPo5CK9fIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGYMJJ86vChtIUtYbyrcA7yIcNnb9%2B5fwscoW5EQ7LKDWc%2BkSbRh2qvaHdzOZOh8cjxt1Ii%2FFohBlD2RQluc65cfdSHw4uvORzuydE6vHd8yQQiu8jSyV9ubg8sQDVfJH3Im5kGNF0jKE6uR4CrXT6g7Fxp%2Fa%2FSk%2FaB2SvpOWo5H15EdaM%2FLGB4TaPlGmBoazLRqTSOJg3XmunFFPFQXQmfBddusb7nCyoGdm9IFZP1YTRpnYCPZ%2B90zhBiUAjic2JCH%2FN38FaTXiWBl88xnZKlgmcLK8XJQD7LZ3%2FVEJjalLTBTYceXMdJrAwUc2%2FDOCjlUWYCDiRpfvnsEsPmgRfq1%2FlolhGRCzjKxBDXxH6JVlzXvcfNuN%2BTRiaw%2FIF95kGb068zjkw5J1NM5tDhVivndXfgIlwLIqhKXHFLEtlfrjjC0TWz4y2NHMgZzGOe9WiWAqX0RogVFc8iBi09Dg4cBoNTR3o%2FqFpvPhHy04T9qkJ8n1ibFxiD5%2BQ1bzzpBzPH%2BcvI6aOOtyHTr%2BntZh%2FqCurUQYOvPXCWu1DsC%2BPSShvZKwOnb5KiVj2%2Bf%2FskeR0o32H%2B0Cawwc1xUchbXIy4MXFC2pUMCajwRcz3TySYTOEYjyIEIrTYfxpVljCl0tNKyC8dlJG6Ztu7WMIuj%2BsQGOqUB%2Btuj0LAfWQhdphxqcaMuWtea3NibqL1KgNL43Z5w4fT%2BTbespCcSYOO4m7oPbghGsEBlopMk15WxMemKjO6f%2BfHN6b8Tq7OxR%2B3jSdQY6Njgh2WkguE1ZPpbLLxa0Yx3BJ1ZxU2zRYZ8KEGMMEuyM7T9hRAteLPvpx4Jr4hz8%2Fsu2mTjObeDMz4wchtU8TbsmWEsVjGkK7bqkLWMfc%2F8KNCcJ1nL&X-Amz-Signature=fa34b5d7858a7734bbbd2ef10c283ac9b846585e3cde7f9b63d37ed7ed0798db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNWDCKST%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCCdBKDIjwLGgC6pGCg2HUsM2mjR9KUrWz1jri23LIp8gIgC0JvWf4idF7vuAx0rWcX4SiqtsR%2BwD73slXPo5CK9fIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDGYMJJ86vChtIUtYbyrcA7yIcNnb9%2B5fwscoW5EQ7LKDWc%2BkSbRh2qvaHdzOZOh8cjxt1Ii%2FFohBlD2RQluc65cfdSHw4uvORzuydE6vHd8yQQiu8jSyV9ubg8sQDVfJH3Im5kGNF0jKE6uR4CrXT6g7Fxp%2Fa%2FSk%2FaB2SvpOWo5H15EdaM%2FLGB4TaPlGmBoazLRqTSOJg3XmunFFPFQXQmfBddusb7nCyoGdm9IFZP1YTRpnYCPZ%2B90zhBiUAjic2JCH%2FN38FaTXiWBl88xnZKlgmcLK8XJQD7LZ3%2FVEJjalLTBTYceXMdJrAwUc2%2FDOCjlUWYCDiRpfvnsEsPmgRfq1%2FlolhGRCzjKxBDXxH6JVlzXvcfNuN%2BTRiaw%2FIF95kGb068zjkw5J1NM5tDhVivndXfgIlwLIqhKXHFLEtlfrjjC0TWz4y2NHMgZzGOe9WiWAqX0RogVFc8iBi09Dg4cBoNTR3o%2FqFpvPhHy04T9qkJ8n1ibFxiD5%2BQ1bzzpBzPH%2BcvI6aOOtyHTr%2BntZh%2FqCurUQYOvPXCWu1DsC%2BPSShvZKwOnb5KiVj2%2Bf%2FskeR0o32H%2B0Cawwc1xUchbXIy4MXFC2pUMCajwRcz3TySYTOEYjyIEIrTYfxpVljCl0tNKyC8dlJG6Ztu7WMIuj%2BsQGOqUB%2Btuj0LAfWQhdphxqcaMuWtea3NibqL1KgNL43Z5w4fT%2BTbespCcSYOO4m7oPbghGsEBlopMk15WxMemKjO6f%2BfHN6b8Tq7OxR%2B3jSdQY6Njgh2WkguE1ZPpbLLxa0Yx3BJ1ZxU2zRYZ8KEGMMEuyM7T9hRAteLPvpx4Jr4hz8%2Fsu2mTjObeDMz4wchtU8TbsmWEsVjGkK7bqkLWMfc%2F8KNCcJ1nL&X-Amz-Signature=46523d489f83fc29c45205912f842311d05b7033680f4776fcbd1ad4c5809e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
