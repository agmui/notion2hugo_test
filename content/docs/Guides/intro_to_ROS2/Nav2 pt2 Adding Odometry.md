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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ6F3SR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapxe3WcMKYClP8vIM3pOLM62D4dnqgG%2B01ymGJJanSgIhAMMCYIDHfgCm3uMzSjNCpX6kpQZPjIzm5ow61ZgaDt%2FpKv8DCCsQABoMNjM3NDIzMTgzODA1IgxM25fGY%2Fb75df4%2F9Eq3APWJy%2FVoYqMc0KBW9PvmxBNB6fbE4%2BErIbpWFgc06DEoVmPPo8cJgm5KrC4LflmwPQFuLSlPcNy5ze%2BXOi34zLgWZ4jWUcqLHd8GWiZWSPioGzpcd15aKx9o1QkiN9D0y6v1j5MLeHAP84PCmzJ1qoc1ek1oeOn9lyL8Bu2bWWs4lDg2Iip1Mn%2F9JMXnHJ%2BDhfBbni08mJB62LbSAP0tgi9bhlhceM6UARUnzB8Acl4iqQyBwVlL8TewfHGFMWzX1QBPrfNWvb7Hbq00Z1v9cXo%2FQ5E9DaGnsRda6t1k1oXAl97neKdDO7GqqbyhidDJ%2F0Qa0Cu2WnIsDvz58P%2BcN8OR6iCVgEOCqnRvLsGGuERapNWG3f7C%2FZbTiNGFOsFPpRoUCICMgyMBfEqaYzBOYgOS%2BnPK5TmsyA19GoMNLjnN08rZENbWSzDqiUd0y1PgOlubdv2ltwEDCdyiszkSc8SgpilTSDSfJpsvjr0ba8JTkTehqzjRNSRJCBsohCUlAKAknVCEBv91wOtSDCtB%2FP7qmhRSy0jmGnzNaGdE2bk0Ad15RLmY8d9393yhkQehQ7FjNi3kkcf4eDNBLV2SAFyRs9MTH9PxZ%2FBt4FObRF3UBiF1zno8YvXgVjPrTDlxvHEBjqkAYW6DF1Q9AYAwiXQSoaY3Nw6RIBSAPQnb8xyhgdqntPyykzuofLh1IV6VZqFh2Sjzi8fTjYSrWoC7euDpdEDiAzax2RsmASQGyGi2bHJKMd2yOJO65nxPBBBNUDFbi3dLOdM%2FCWIO14UqSa8vjHcGniTxF1i4hYzjjseBRFM5ymKQZqdpdQDxrthediTy6JHpGJa%2FB3tP266HM5yl7%2Fk6mhZJiSR&X-Amz-Signature=8a8b8311d5520edc67a6b5bb7ab7fe29d101657591d9f68936265d645f10d51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ6F3SR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapxe3WcMKYClP8vIM3pOLM62D4dnqgG%2B01ymGJJanSgIhAMMCYIDHfgCm3uMzSjNCpX6kpQZPjIzm5ow61ZgaDt%2FpKv8DCCsQABoMNjM3NDIzMTgzODA1IgxM25fGY%2Fb75df4%2F9Eq3APWJy%2FVoYqMc0KBW9PvmxBNB6fbE4%2BErIbpWFgc06DEoVmPPo8cJgm5KrC4LflmwPQFuLSlPcNy5ze%2BXOi34zLgWZ4jWUcqLHd8GWiZWSPioGzpcd15aKx9o1QkiN9D0y6v1j5MLeHAP84PCmzJ1qoc1ek1oeOn9lyL8Bu2bWWs4lDg2Iip1Mn%2F9JMXnHJ%2BDhfBbni08mJB62LbSAP0tgi9bhlhceM6UARUnzB8Acl4iqQyBwVlL8TewfHGFMWzX1QBPrfNWvb7Hbq00Z1v9cXo%2FQ5E9DaGnsRda6t1k1oXAl97neKdDO7GqqbyhidDJ%2F0Qa0Cu2WnIsDvz58P%2BcN8OR6iCVgEOCqnRvLsGGuERapNWG3f7C%2FZbTiNGFOsFPpRoUCICMgyMBfEqaYzBOYgOS%2BnPK5TmsyA19GoMNLjnN08rZENbWSzDqiUd0y1PgOlubdv2ltwEDCdyiszkSc8SgpilTSDSfJpsvjr0ba8JTkTehqzjRNSRJCBsohCUlAKAknVCEBv91wOtSDCtB%2FP7qmhRSy0jmGnzNaGdE2bk0Ad15RLmY8d9393yhkQehQ7FjNi3kkcf4eDNBLV2SAFyRs9MTH9PxZ%2FBt4FObRF3UBiF1zno8YvXgVjPrTDlxvHEBjqkAYW6DF1Q9AYAwiXQSoaY3Nw6RIBSAPQnb8xyhgdqntPyykzuofLh1IV6VZqFh2Sjzi8fTjYSrWoC7euDpdEDiAzax2RsmASQGyGi2bHJKMd2yOJO65nxPBBBNUDFbi3dLOdM%2FCWIO14UqSa8vjHcGniTxF1i4hYzjjseBRFM5ymKQZqdpdQDxrthediTy6JHpGJa%2FB3tP266HM5yl7%2Fk6mhZJiSR&X-Amz-Signature=fdb952893016f0c4d2e45e1f6518896e8cc1fb0cef34df50f93d6a275e20eed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ6F3SR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapxe3WcMKYClP8vIM3pOLM62D4dnqgG%2B01ymGJJanSgIhAMMCYIDHfgCm3uMzSjNCpX6kpQZPjIzm5ow61ZgaDt%2FpKv8DCCsQABoMNjM3NDIzMTgzODA1IgxM25fGY%2Fb75df4%2F9Eq3APWJy%2FVoYqMc0KBW9PvmxBNB6fbE4%2BErIbpWFgc06DEoVmPPo8cJgm5KrC4LflmwPQFuLSlPcNy5ze%2BXOi34zLgWZ4jWUcqLHd8GWiZWSPioGzpcd15aKx9o1QkiN9D0y6v1j5MLeHAP84PCmzJ1qoc1ek1oeOn9lyL8Bu2bWWs4lDg2Iip1Mn%2F9JMXnHJ%2BDhfBbni08mJB62LbSAP0tgi9bhlhceM6UARUnzB8Acl4iqQyBwVlL8TewfHGFMWzX1QBPrfNWvb7Hbq00Z1v9cXo%2FQ5E9DaGnsRda6t1k1oXAl97neKdDO7GqqbyhidDJ%2F0Qa0Cu2WnIsDvz58P%2BcN8OR6iCVgEOCqnRvLsGGuERapNWG3f7C%2FZbTiNGFOsFPpRoUCICMgyMBfEqaYzBOYgOS%2BnPK5TmsyA19GoMNLjnN08rZENbWSzDqiUd0y1PgOlubdv2ltwEDCdyiszkSc8SgpilTSDSfJpsvjr0ba8JTkTehqzjRNSRJCBsohCUlAKAknVCEBv91wOtSDCtB%2FP7qmhRSy0jmGnzNaGdE2bk0Ad15RLmY8d9393yhkQehQ7FjNi3kkcf4eDNBLV2SAFyRs9MTH9PxZ%2FBt4FObRF3UBiF1zno8YvXgVjPrTDlxvHEBjqkAYW6DF1Q9AYAwiXQSoaY3Nw6RIBSAPQnb8xyhgdqntPyykzuofLh1IV6VZqFh2Sjzi8fTjYSrWoC7euDpdEDiAzax2RsmASQGyGi2bHJKMd2yOJO65nxPBBBNUDFbi3dLOdM%2FCWIO14UqSa8vjHcGniTxF1i4hYzjjseBRFM5ymKQZqdpdQDxrthediTy6JHpGJa%2FB3tP266HM5yl7%2Fk6mhZJiSR&X-Amz-Signature=010e5559ff7617fe9b1f91e48c097eac2f273a45216aa94095defa6a1a21d609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ6F3SR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapxe3WcMKYClP8vIM3pOLM62D4dnqgG%2B01ymGJJanSgIhAMMCYIDHfgCm3uMzSjNCpX6kpQZPjIzm5ow61ZgaDt%2FpKv8DCCsQABoMNjM3NDIzMTgzODA1IgxM25fGY%2Fb75df4%2F9Eq3APWJy%2FVoYqMc0KBW9PvmxBNB6fbE4%2BErIbpWFgc06DEoVmPPo8cJgm5KrC4LflmwPQFuLSlPcNy5ze%2BXOi34zLgWZ4jWUcqLHd8GWiZWSPioGzpcd15aKx9o1QkiN9D0y6v1j5MLeHAP84PCmzJ1qoc1ek1oeOn9lyL8Bu2bWWs4lDg2Iip1Mn%2F9JMXnHJ%2BDhfBbni08mJB62LbSAP0tgi9bhlhceM6UARUnzB8Acl4iqQyBwVlL8TewfHGFMWzX1QBPrfNWvb7Hbq00Z1v9cXo%2FQ5E9DaGnsRda6t1k1oXAl97neKdDO7GqqbyhidDJ%2F0Qa0Cu2WnIsDvz58P%2BcN8OR6iCVgEOCqnRvLsGGuERapNWG3f7C%2FZbTiNGFOsFPpRoUCICMgyMBfEqaYzBOYgOS%2BnPK5TmsyA19GoMNLjnN08rZENbWSzDqiUd0y1PgOlubdv2ltwEDCdyiszkSc8SgpilTSDSfJpsvjr0ba8JTkTehqzjRNSRJCBsohCUlAKAknVCEBv91wOtSDCtB%2FP7qmhRSy0jmGnzNaGdE2bk0Ad15RLmY8d9393yhkQehQ7FjNi3kkcf4eDNBLV2SAFyRs9MTH9PxZ%2FBt4FObRF3UBiF1zno8YvXgVjPrTDlxvHEBjqkAYW6DF1Q9AYAwiXQSoaY3Nw6RIBSAPQnb8xyhgdqntPyykzuofLh1IV6VZqFh2Sjzi8fTjYSrWoC7euDpdEDiAzax2RsmASQGyGi2bHJKMd2yOJO65nxPBBBNUDFbi3dLOdM%2FCWIO14UqSa8vjHcGniTxF1i4hYzjjseBRFM5ymKQZqdpdQDxrthediTy6JHpGJa%2FB3tP266HM5yl7%2Fk6mhZJiSR&X-Amz-Signature=ebb6f04fd26f77dd64f60afbda01bfc2a0eed4604b5c1ec3e862d4351ef61919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ6F3SR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapxe3WcMKYClP8vIM3pOLM62D4dnqgG%2B01ymGJJanSgIhAMMCYIDHfgCm3uMzSjNCpX6kpQZPjIzm5ow61ZgaDt%2FpKv8DCCsQABoMNjM3NDIzMTgzODA1IgxM25fGY%2Fb75df4%2F9Eq3APWJy%2FVoYqMc0KBW9PvmxBNB6fbE4%2BErIbpWFgc06DEoVmPPo8cJgm5KrC4LflmwPQFuLSlPcNy5ze%2BXOi34zLgWZ4jWUcqLHd8GWiZWSPioGzpcd15aKx9o1QkiN9D0y6v1j5MLeHAP84PCmzJ1qoc1ek1oeOn9lyL8Bu2bWWs4lDg2Iip1Mn%2F9JMXnHJ%2BDhfBbni08mJB62LbSAP0tgi9bhlhceM6UARUnzB8Acl4iqQyBwVlL8TewfHGFMWzX1QBPrfNWvb7Hbq00Z1v9cXo%2FQ5E9DaGnsRda6t1k1oXAl97neKdDO7GqqbyhidDJ%2F0Qa0Cu2WnIsDvz58P%2BcN8OR6iCVgEOCqnRvLsGGuERapNWG3f7C%2FZbTiNGFOsFPpRoUCICMgyMBfEqaYzBOYgOS%2BnPK5TmsyA19GoMNLjnN08rZENbWSzDqiUd0y1PgOlubdv2ltwEDCdyiszkSc8SgpilTSDSfJpsvjr0ba8JTkTehqzjRNSRJCBsohCUlAKAknVCEBv91wOtSDCtB%2FP7qmhRSy0jmGnzNaGdE2bk0Ad15RLmY8d9393yhkQehQ7FjNi3kkcf4eDNBLV2SAFyRs9MTH9PxZ%2FBt4FObRF3UBiF1zno8YvXgVjPrTDlxvHEBjqkAYW6DF1Q9AYAwiXQSoaY3Nw6RIBSAPQnb8xyhgdqntPyykzuofLh1IV6VZqFh2Sjzi8fTjYSrWoC7euDpdEDiAzax2RsmASQGyGi2bHJKMd2yOJO65nxPBBBNUDFbi3dLOdM%2FCWIO14UqSa8vjHcGniTxF1i4hYzjjseBRFM5ymKQZqdpdQDxrthediTy6JHpGJa%2FB3tP266HM5yl7%2Fk6mhZJiSR&X-Amz-Signature=fd70cbfd022753730ca51736d2e0e3350c6991cebe0ebedc3347a4990a6399b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ6F3SR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapxe3WcMKYClP8vIM3pOLM62D4dnqgG%2B01ymGJJanSgIhAMMCYIDHfgCm3uMzSjNCpX6kpQZPjIzm5ow61ZgaDt%2FpKv8DCCsQABoMNjM3NDIzMTgzODA1IgxM25fGY%2Fb75df4%2F9Eq3APWJy%2FVoYqMc0KBW9PvmxBNB6fbE4%2BErIbpWFgc06DEoVmPPo8cJgm5KrC4LflmwPQFuLSlPcNy5ze%2BXOi34zLgWZ4jWUcqLHd8GWiZWSPioGzpcd15aKx9o1QkiN9D0y6v1j5MLeHAP84PCmzJ1qoc1ek1oeOn9lyL8Bu2bWWs4lDg2Iip1Mn%2F9JMXnHJ%2BDhfBbni08mJB62LbSAP0tgi9bhlhceM6UARUnzB8Acl4iqQyBwVlL8TewfHGFMWzX1QBPrfNWvb7Hbq00Z1v9cXo%2FQ5E9DaGnsRda6t1k1oXAl97neKdDO7GqqbyhidDJ%2F0Qa0Cu2WnIsDvz58P%2BcN8OR6iCVgEOCqnRvLsGGuERapNWG3f7C%2FZbTiNGFOsFPpRoUCICMgyMBfEqaYzBOYgOS%2BnPK5TmsyA19GoMNLjnN08rZENbWSzDqiUd0y1PgOlubdv2ltwEDCdyiszkSc8SgpilTSDSfJpsvjr0ba8JTkTehqzjRNSRJCBsohCUlAKAknVCEBv91wOtSDCtB%2FP7qmhRSy0jmGnzNaGdE2bk0Ad15RLmY8d9393yhkQehQ7FjNi3kkcf4eDNBLV2SAFyRs9MTH9PxZ%2FBt4FObRF3UBiF1zno8YvXgVjPrTDlxvHEBjqkAYW6DF1Q9AYAwiXQSoaY3Nw6RIBSAPQnb8xyhgdqntPyykzuofLh1IV6VZqFh2Sjzi8fTjYSrWoC7euDpdEDiAzax2RsmASQGyGi2bHJKMd2yOJO65nxPBBBNUDFbi3dLOdM%2FCWIO14UqSa8vjHcGniTxF1i4hYzjjseBRFM5ymKQZqdpdQDxrthediTy6JHpGJa%2FB3tP266HM5yl7%2Fk6mhZJiSR&X-Amz-Signature=93663451372e6379559b0986d925b811bbbd17011e394c4d7471d182652628ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ6F3SR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapxe3WcMKYClP8vIM3pOLM62D4dnqgG%2B01ymGJJanSgIhAMMCYIDHfgCm3uMzSjNCpX6kpQZPjIzm5ow61ZgaDt%2FpKv8DCCsQABoMNjM3NDIzMTgzODA1IgxM25fGY%2Fb75df4%2F9Eq3APWJy%2FVoYqMc0KBW9PvmxBNB6fbE4%2BErIbpWFgc06DEoVmPPo8cJgm5KrC4LflmwPQFuLSlPcNy5ze%2BXOi34zLgWZ4jWUcqLHd8GWiZWSPioGzpcd15aKx9o1QkiN9D0y6v1j5MLeHAP84PCmzJ1qoc1ek1oeOn9lyL8Bu2bWWs4lDg2Iip1Mn%2F9JMXnHJ%2BDhfBbni08mJB62LbSAP0tgi9bhlhceM6UARUnzB8Acl4iqQyBwVlL8TewfHGFMWzX1QBPrfNWvb7Hbq00Z1v9cXo%2FQ5E9DaGnsRda6t1k1oXAl97neKdDO7GqqbyhidDJ%2F0Qa0Cu2WnIsDvz58P%2BcN8OR6iCVgEOCqnRvLsGGuERapNWG3f7C%2FZbTiNGFOsFPpRoUCICMgyMBfEqaYzBOYgOS%2BnPK5TmsyA19GoMNLjnN08rZENbWSzDqiUd0y1PgOlubdv2ltwEDCdyiszkSc8SgpilTSDSfJpsvjr0ba8JTkTehqzjRNSRJCBsohCUlAKAknVCEBv91wOtSDCtB%2FP7qmhRSy0jmGnzNaGdE2bk0Ad15RLmY8d9393yhkQehQ7FjNi3kkcf4eDNBLV2SAFyRs9MTH9PxZ%2FBt4FObRF3UBiF1zno8YvXgVjPrTDlxvHEBjqkAYW6DF1Q9AYAwiXQSoaY3Nw6RIBSAPQnb8xyhgdqntPyykzuofLh1IV6VZqFh2Sjzi8fTjYSrWoC7euDpdEDiAzax2RsmASQGyGi2bHJKMd2yOJO65nxPBBBNUDFbi3dLOdM%2FCWIO14UqSa8vjHcGniTxF1i4hYzjjseBRFM5ymKQZqdpdQDxrthediTy6JHpGJa%2FB3tP266HM5yl7%2Fk6mhZJiSR&X-Amz-Signature=70f4133986e12713f9e86b8277e7aa4ac6faaf1fbbe926001a8b224c42ee5cc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ6F3SR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapxe3WcMKYClP8vIM3pOLM62D4dnqgG%2B01ymGJJanSgIhAMMCYIDHfgCm3uMzSjNCpX6kpQZPjIzm5ow61ZgaDt%2FpKv8DCCsQABoMNjM3NDIzMTgzODA1IgxM25fGY%2Fb75df4%2F9Eq3APWJy%2FVoYqMc0KBW9PvmxBNB6fbE4%2BErIbpWFgc06DEoVmPPo8cJgm5KrC4LflmwPQFuLSlPcNy5ze%2BXOi34zLgWZ4jWUcqLHd8GWiZWSPioGzpcd15aKx9o1QkiN9D0y6v1j5MLeHAP84PCmzJ1qoc1ek1oeOn9lyL8Bu2bWWs4lDg2Iip1Mn%2F9JMXnHJ%2BDhfBbni08mJB62LbSAP0tgi9bhlhceM6UARUnzB8Acl4iqQyBwVlL8TewfHGFMWzX1QBPrfNWvb7Hbq00Z1v9cXo%2FQ5E9DaGnsRda6t1k1oXAl97neKdDO7GqqbyhidDJ%2F0Qa0Cu2WnIsDvz58P%2BcN8OR6iCVgEOCqnRvLsGGuERapNWG3f7C%2FZbTiNGFOsFPpRoUCICMgyMBfEqaYzBOYgOS%2BnPK5TmsyA19GoMNLjnN08rZENbWSzDqiUd0y1PgOlubdv2ltwEDCdyiszkSc8SgpilTSDSfJpsvjr0ba8JTkTehqzjRNSRJCBsohCUlAKAknVCEBv91wOtSDCtB%2FP7qmhRSy0jmGnzNaGdE2bk0Ad15RLmY8d9393yhkQehQ7FjNi3kkcf4eDNBLV2SAFyRs9MTH9PxZ%2FBt4FObRF3UBiF1zno8YvXgVjPrTDlxvHEBjqkAYW6DF1Q9AYAwiXQSoaY3Nw6RIBSAPQnb8xyhgdqntPyykzuofLh1IV6VZqFh2Sjzi8fTjYSrWoC7euDpdEDiAzax2RsmASQGyGi2bHJKMd2yOJO65nxPBBBNUDFbi3dLOdM%2FCWIO14UqSa8vjHcGniTxF1i4hYzjjseBRFM5ymKQZqdpdQDxrthediTy6JHpGJa%2FB3tP266HM5yl7%2Fk6mhZJiSR&X-Amz-Signature=fcc14c5620ab31a970d91cf6ccd949d4b10fec789de29df715534ac3129719d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ6F3SR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapxe3WcMKYClP8vIM3pOLM62D4dnqgG%2B01ymGJJanSgIhAMMCYIDHfgCm3uMzSjNCpX6kpQZPjIzm5ow61ZgaDt%2FpKv8DCCsQABoMNjM3NDIzMTgzODA1IgxM25fGY%2Fb75df4%2F9Eq3APWJy%2FVoYqMc0KBW9PvmxBNB6fbE4%2BErIbpWFgc06DEoVmPPo8cJgm5KrC4LflmwPQFuLSlPcNy5ze%2BXOi34zLgWZ4jWUcqLHd8GWiZWSPioGzpcd15aKx9o1QkiN9D0y6v1j5MLeHAP84PCmzJ1qoc1ek1oeOn9lyL8Bu2bWWs4lDg2Iip1Mn%2F9JMXnHJ%2BDhfBbni08mJB62LbSAP0tgi9bhlhceM6UARUnzB8Acl4iqQyBwVlL8TewfHGFMWzX1QBPrfNWvb7Hbq00Z1v9cXo%2FQ5E9DaGnsRda6t1k1oXAl97neKdDO7GqqbyhidDJ%2F0Qa0Cu2WnIsDvz58P%2BcN8OR6iCVgEOCqnRvLsGGuERapNWG3f7C%2FZbTiNGFOsFPpRoUCICMgyMBfEqaYzBOYgOS%2BnPK5TmsyA19GoMNLjnN08rZENbWSzDqiUd0y1PgOlubdv2ltwEDCdyiszkSc8SgpilTSDSfJpsvjr0ba8JTkTehqzjRNSRJCBsohCUlAKAknVCEBv91wOtSDCtB%2FP7qmhRSy0jmGnzNaGdE2bk0Ad15RLmY8d9393yhkQehQ7FjNi3kkcf4eDNBLV2SAFyRs9MTH9PxZ%2FBt4FObRF3UBiF1zno8YvXgVjPrTDlxvHEBjqkAYW6DF1Q9AYAwiXQSoaY3Nw6RIBSAPQnb8xyhgdqntPyykzuofLh1IV6VZqFh2Sjzi8fTjYSrWoC7euDpdEDiAzax2RsmASQGyGi2bHJKMd2yOJO65nxPBBBNUDFbi3dLOdM%2FCWIO14UqSa8vjHcGniTxF1i4hYzjjseBRFM5ymKQZqdpdQDxrthediTy6JHpGJa%2FB3tP266HM5yl7%2Fk6mhZJiSR&X-Amz-Signature=8285d38e859e106207b4472e8b3ba4e15c3e3437a358d2416987865933e0f93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAQ6F3SR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapxe3WcMKYClP8vIM3pOLM62D4dnqgG%2B01ymGJJanSgIhAMMCYIDHfgCm3uMzSjNCpX6kpQZPjIzm5ow61ZgaDt%2FpKv8DCCsQABoMNjM3NDIzMTgzODA1IgxM25fGY%2Fb75df4%2F9Eq3APWJy%2FVoYqMc0KBW9PvmxBNB6fbE4%2BErIbpWFgc06DEoVmPPo8cJgm5KrC4LflmwPQFuLSlPcNy5ze%2BXOi34zLgWZ4jWUcqLHd8GWiZWSPioGzpcd15aKx9o1QkiN9D0y6v1j5MLeHAP84PCmzJ1qoc1ek1oeOn9lyL8Bu2bWWs4lDg2Iip1Mn%2F9JMXnHJ%2BDhfBbni08mJB62LbSAP0tgi9bhlhceM6UARUnzB8Acl4iqQyBwVlL8TewfHGFMWzX1QBPrfNWvb7Hbq00Z1v9cXo%2FQ5E9DaGnsRda6t1k1oXAl97neKdDO7GqqbyhidDJ%2F0Qa0Cu2WnIsDvz58P%2BcN8OR6iCVgEOCqnRvLsGGuERapNWG3f7C%2FZbTiNGFOsFPpRoUCICMgyMBfEqaYzBOYgOS%2BnPK5TmsyA19GoMNLjnN08rZENbWSzDqiUd0y1PgOlubdv2ltwEDCdyiszkSc8SgpilTSDSfJpsvjr0ba8JTkTehqzjRNSRJCBsohCUlAKAknVCEBv91wOtSDCtB%2FP7qmhRSy0jmGnzNaGdE2bk0Ad15RLmY8d9393yhkQehQ7FjNi3kkcf4eDNBLV2SAFyRs9MTH9PxZ%2FBt4FObRF3UBiF1zno8YvXgVjPrTDlxvHEBjqkAYW6DF1Q9AYAwiXQSoaY3Nw6RIBSAPQnb8xyhgdqntPyykzuofLh1IV6VZqFh2Sjzi8fTjYSrWoC7euDpdEDiAzax2RsmASQGyGi2bHJKMd2yOJO65nxPBBBNUDFbi3dLOdM%2FCWIO14UqSa8vjHcGniTxF1i4hYzjjseBRFM5ymKQZqdpdQDxrthediTy6JHpGJa%2FB3tP266HM5yl7%2Fk6mhZJiSR&X-Amz-Signature=a50210fdb12c2df827691f4f45dd6bd32b8b4c1b669fd555dcf6380e2c2809b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIOLQEBR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZWtfoP%2Be%2B6rSMPo8sZiI8hTxWlmn1oi%2BASvHGnDHD6AiAg2GRQJuVsrM4%2BBqssvmd7WupgQzcAb8tDxs3PVNP%2FSSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMX32J6OKC%2BZscbCzqKtwDFMimz488VHIPp0q9gKGpYSd%2BrkbuoAlkc3T3kZE0RgsnMjeCy4yyFAXK9KDnlq4j3LFS1aMM8SE%2FWpdv6dB0UyWccNEWYnvdEq7vKQW%2BuZGSgPRdvIbBQmiqhY6jczqeeE7uu466iaQm6zOPjFfT16ZAWklcJ88DZ1q%2FMQpf6Mwd4Mmg6axqpSjbsKKOy4DOCB8fFPdJ2TfV1m9M5OGHPUj1SyVk0qztLtUAH4GlwGxrxHPqozO%2BqOuwbYwG3AQr2zjPOS2xRLG2pBduSc5mNbFK88pDrlrXZG16qaICEBRrGdHKaJ7vPT639gnpmZj%2F9QdrxIEg7WdZbOpGCwI%2FJCalQNwOFjVu8akY12cmou8NNmdYm7GMQL3RcSbWcGvyqGYqz36r34Ay2MiFa27M%2BsGNbkTDj6XCCqsF1UCEiAcRO%2Bmbx3Z2rkosWrpnQUClPlAEe7cOgKtuCIA7AhY579FTT6gwAcq8tMtkW1GupbUAWgDY00o9PFshXrQmBfty9NFTQipkNT5cpadKVD3CPsRswHqLz49S66gzsccjpuHNmf%2BtVR5cewV7Mcu8yow2kbx3HUhrEq24SVrmkhTrjJ3lsM9yMsu9XFuqt6u2Lj1nh5G21YPQDbDghdMwxMbxxAY6pgFW%2FiwV7%2BeMnMAz05fnzARTbb94c85jhKtlTXuc%2FCPF8vq9QLXs%2B%2B2BzJJdgKc1VStFJUsAl9wbOfL2urypTXSF9w%2By7%2F8MEmCPuZ972Oc%2FISPAnp8E%2BGs5y3%2FOrtqbNMQQ2HQwtgJfdZ1k0Y%2B1s22B5l2ZH1I%2FPRjRfA4TxgLwD5ZlMrp7Y%2FSwzGRCcHuqcf4kO2cDLPJQmaCRGNaYzuOWJwT%2Bz7I7&X-Amz-Signature=4ff10cd734a2483b0263515e54b8de5f36233778fe61e988a8a9157b0f4310d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQVND3B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn0twbRDToHcwYv84zakYadmWoACfDE5ACVgE0e4B%2F%2BAIhAOYyywu2gfPWa%2BS4y74EUwRn2b2hhfSwvqmN4QlpHg6DKv8DCCsQABoMNjM3NDIzMTgzODA1IgxPKXzQa7kjTmU3SJ8q3ANJtg7QV7bDJ9yJx0CxCAHu0Ys6t3IgFzMW5KARa2d9gM4yEo2sgDnfS5d3%2FSCFtO9HHqwSpZa57jEN3N7s3UkcgS9UalMZCgF4S%2B7IYLAPIp9edV4J6ts5KAAF9TR90bwGO4P9RM4LBEMKO2s0sL0Qbr0yFcx0%2FSrJ7ioYb9Rx%2FkBdcBP8AICI27AMHPZW2tGT4c%2B6HuKcG9cnAOy9e6cOvT3bJIQKGiVaHxiC%2Fx%2BUvC9zcYCYE676aRquGEc4xW%2BITIthtVFkuvGK9aAs6ifFFqFzdMn%2FkM8rhzBk%2BBnIjnPMJvVISneQLEfVtzDL7hyThuvFHeDPkzUyKhiiRKlPvoW1mjo5nEoFcnJMAPUEeVTZ1IohwTI26C3hu%2F2%2BXdKSeiOD6qX1%2FQjXJsojIfig0JFYqNBEa7j7XusX7D1MZVbHL0%2FSrgjjrodjG1Xv7BluTYKDH1Wzcz7KusZ01MaPrslhAq%2BaG5Yk268wp27KZMXzYP3BRHeoGJexw9Ko%2F8mLCFOM1gLox8rp06FcqR1EZUSokGD%2FdSJLgSZ22YvI%2F4I10D08EM4kgBK%2Fuk9mWnvQy1A7ds8EkgFo%2FLa8RR%2FThMgqd%2BR71757gZ%2BBEuOJ7bVX5Lhjw8wEhncQCzDZxvHEBjqkATZ%2BgEv0LsDmhXCddTnQGCZFyRpS0E2EFbcXk0UeT3lQq9XdffzF0mwpugsjtT5HEDu13LceoP6oLntvs%2F%2Fl%2FkRoZVUUjaKWPezZDp8z1S56U%2FH2tJQ2IvCxT19qKBZsx9UNB0hqp4eO8AcCB04tMKzQhRPHzPs%2B2Xr7pAYfrMOpBz10IqAU9IVWoJ8nXXmXheJmFVOD798WLe1gABz3yRB55OVg&X-Amz-Signature=bad9ac449f02fd5af5ec5e4611e95ef7908c6cd5ff9957e341afc8872f7f8801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQVND3B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn0twbRDToHcwYv84zakYadmWoACfDE5ACVgE0e4B%2F%2BAIhAOYyywu2gfPWa%2BS4y74EUwRn2b2hhfSwvqmN4QlpHg6DKv8DCCsQABoMNjM3NDIzMTgzODA1IgxPKXzQa7kjTmU3SJ8q3ANJtg7QV7bDJ9yJx0CxCAHu0Ys6t3IgFzMW5KARa2d9gM4yEo2sgDnfS5d3%2FSCFtO9HHqwSpZa57jEN3N7s3UkcgS9UalMZCgF4S%2B7IYLAPIp9edV4J6ts5KAAF9TR90bwGO4P9RM4LBEMKO2s0sL0Qbr0yFcx0%2FSrJ7ioYb9Rx%2FkBdcBP8AICI27AMHPZW2tGT4c%2B6HuKcG9cnAOy9e6cOvT3bJIQKGiVaHxiC%2Fx%2BUvC9zcYCYE676aRquGEc4xW%2BITIthtVFkuvGK9aAs6ifFFqFzdMn%2FkM8rhzBk%2BBnIjnPMJvVISneQLEfVtzDL7hyThuvFHeDPkzUyKhiiRKlPvoW1mjo5nEoFcnJMAPUEeVTZ1IohwTI26C3hu%2F2%2BXdKSeiOD6qX1%2FQjXJsojIfig0JFYqNBEa7j7XusX7D1MZVbHL0%2FSrgjjrodjG1Xv7BluTYKDH1Wzcz7KusZ01MaPrslhAq%2BaG5Yk268wp27KZMXzYP3BRHeoGJexw9Ko%2F8mLCFOM1gLox8rp06FcqR1EZUSokGD%2FdSJLgSZ22YvI%2F4I10D08EM4kgBK%2Fuk9mWnvQy1A7ds8EkgFo%2FLa8RR%2FThMgqd%2BR71757gZ%2BBEuOJ7bVX5Lhjw8wEhncQCzDZxvHEBjqkATZ%2BgEv0LsDmhXCddTnQGCZFyRpS0E2EFbcXk0UeT3lQq9XdffzF0mwpugsjtT5HEDu13LceoP6oLntvs%2F%2Fl%2FkRoZVUUjaKWPezZDp8z1S56U%2FH2tJQ2IvCxT19qKBZsx9UNB0hqp4eO8AcCB04tMKzQhRPHzPs%2B2Xr7pAYfrMOpBz10IqAU9IVWoJ8nXXmXheJmFVOD798WLe1gABz3yRB55OVg&X-Amz-Signature=8a0cbdb534d03951c43e70faf7903868f72ae9cafd91da82d6cc2e55a5a4d189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQVND3B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn0twbRDToHcwYv84zakYadmWoACfDE5ACVgE0e4B%2F%2BAIhAOYyywu2gfPWa%2BS4y74EUwRn2b2hhfSwvqmN4QlpHg6DKv8DCCsQABoMNjM3NDIzMTgzODA1IgxPKXzQa7kjTmU3SJ8q3ANJtg7QV7bDJ9yJx0CxCAHu0Ys6t3IgFzMW5KARa2d9gM4yEo2sgDnfS5d3%2FSCFtO9HHqwSpZa57jEN3N7s3UkcgS9UalMZCgF4S%2B7IYLAPIp9edV4J6ts5KAAF9TR90bwGO4P9RM4LBEMKO2s0sL0Qbr0yFcx0%2FSrJ7ioYb9Rx%2FkBdcBP8AICI27AMHPZW2tGT4c%2B6HuKcG9cnAOy9e6cOvT3bJIQKGiVaHxiC%2Fx%2BUvC9zcYCYE676aRquGEc4xW%2BITIthtVFkuvGK9aAs6ifFFqFzdMn%2FkM8rhzBk%2BBnIjnPMJvVISneQLEfVtzDL7hyThuvFHeDPkzUyKhiiRKlPvoW1mjo5nEoFcnJMAPUEeVTZ1IohwTI26C3hu%2F2%2BXdKSeiOD6qX1%2FQjXJsojIfig0JFYqNBEa7j7XusX7D1MZVbHL0%2FSrgjjrodjG1Xv7BluTYKDH1Wzcz7KusZ01MaPrslhAq%2BaG5Yk268wp27KZMXzYP3BRHeoGJexw9Ko%2F8mLCFOM1gLox8rp06FcqR1EZUSokGD%2FdSJLgSZ22YvI%2F4I10D08EM4kgBK%2Fuk9mWnvQy1A7ds8EkgFo%2FLa8RR%2FThMgqd%2BR71757gZ%2BBEuOJ7bVX5Lhjw8wEhncQCzDZxvHEBjqkATZ%2BgEv0LsDmhXCddTnQGCZFyRpS0E2EFbcXk0UeT3lQq9XdffzF0mwpugsjtT5HEDu13LceoP6oLntvs%2F%2Fl%2FkRoZVUUjaKWPezZDp8z1S56U%2FH2tJQ2IvCxT19qKBZsx9UNB0hqp4eO8AcCB04tMKzQhRPHzPs%2B2Xr7pAYfrMOpBz10IqAU9IVWoJ8nXXmXheJmFVOD798WLe1gABz3yRB55OVg&X-Amz-Signature=b08280df161535a9e4be5386b4ca61c375f626cd502f0b0257f600817361e846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQVND3B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn0twbRDToHcwYv84zakYadmWoACfDE5ACVgE0e4B%2F%2BAIhAOYyywu2gfPWa%2BS4y74EUwRn2b2hhfSwvqmN4QlpHg6DKv8DCCsQABoMNjM3NDIzMTgzODA1IgxPKXzQa7kjTmU3SJ8q3ANJtg7QV7bDJ9yJx0CxCAHu0Ys6t3IgFzMW5KARa2d9gM4yEo2sgDnfS5d3%2FSCFtO9HHqwSpZa57jEN3N7s3UkcgS9UalMZCgF4S%2B7IYLAPIp9edV4J6ts5KAAF9TR90bwGO4P9RM4LBEMKO2s0sL0Qbr0yFcx0%2FSrJ7ioYb9Rx%2FkBdcBP8AICI27AMHPZW2tGT4c%2B6HuKcG9cnAOy9e6cOvT3bJIQKGiVaHxiC%2Fx%2BUvC9zcYCYE676aRquGEc4xW%2BITIthtVFkuvGK9aAs6ifFFqFzdMn%2FkM8rhzBk%2BBnIjnPMJvVISneQLEfVtzDL7hyThuvFHeDPkzUyKhiiRKlPvoW1mjo5nEoFcnJMAPUEeVTZ1IohwTI26C3hu%2F2%2BXdKSeiOD6qX1%2FQjXJsojIfig0JFYqNBEa7j7XusX7D1MZVbHL0%2FSrgjjrodjG1Xv7BluTYKDH1Wzcz7KusZ01MaPrslhAq%2BaG5Yk268wp27KZMXzYP3BRHeoGJexw9Ko%2F8mLCFOM1gLox8rp06FcqR1EZUSokGD%2FdSJLgSZ22YvI%2F4I10D08EM4kgBK%2Fuk9mWnvQy1A7ds8EkgFo%2FLa8RR%2FThMgqd%2BR71757gZ%2BBEuOJ7bVX5Lhjw8wEhncQCzDZxvHEBjqkATZ%2BgEv0LsDmhXCddTnQGCZFyRpS0E2EFbcXk0UeT3lQq9XdffzF0mwpugsjtT5HEDu13LceoP6oLntvs%2F%2Fl%2FkRoZVUUjaKWPezZDp8z1S56U%2FH2tJQ2IvCxT19qKBZsx9UNB0hqp4eO8AcCB04tMKzQhRPHzPs%2B2Xr7pAYfrMOpBz10IqAU9IVWoJ8nXXmXheJmFVOD798WLe1gABz3yRB55OVg&X-Amz-Signature=d34bb51fffe9f948f6abe36e6cb5cecaf9aebce51b8b8a4a881630f89f55bd79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQVND3B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn0twbRDToHcwYv84zakYadmWoACfDE5ACVgE0e4B%2F%2BAIhAOYyywu2gfPWa%2BS4y74EUwRn2b2hhfSwvqmN4QlpHg6DKv8DCCsQABoMNjM3NDIzMTgzODA1IgxPKXzQa7kjTmU3SJ8q3ANJtg7QV7bDJ9yJx0CxCAHu0Ys6t3IgFzMW5KARa2d9gM4yEo2sgDnfS5d3%2FSCFtO9HHqwSpZa57jEN3N7s3UkcgS9UalMZCgF4S%2B7IYLAPIp9edV4J6ts5KAAF9TR90bwGO4P9RM4LBEMKO2s0sL0Qbr0yFcx0%2FSrJ7ioYb9Rx%2FkBdcBP8AICI27AMHPZW2tGT4c%2B6HuKcG9cnAOy9e6cOvT3bJIQKGiVaHxiC%2Fx%2BUvC9zcYCYE676aRquGEc4xW%2BITIthtVFkuvGK9aAs6ifFFqFzdMn%2FkM8rhzBk%2BBnIjnPMJvVISneQLEfVtzDL7hyThuvFHeDPkzUyKhiiRKlPvoW1mjo5nEoFcnJMAPUEeVTZ1IohwTI26C3hu%2F2%2BXdKSeiOD6qX1%2FQjXJsojIfig0JFYqNBEa7j7XusX7D1MZVbHL0%2FSrgjjrodjG1Xv7BluTYKDH1Wzcz7KusZ01MaPrslhAq%2BaG5Yk268wp27KZMXzYP3BRHeoGJexw9Ko%2F8mLCFOM1gLox8rp06FcqR1EZUSokGD%2FdSJLgSZ22YvI%2F4I10D08EM4kgBK%2Fuk9mWnvQy1A7ds8EkgFo%2FLa8RR%2FThMgqd%2BR71757gZ%2BBEuOJ7bVX5Lhjw8wEhncQCzDZxvHEBjqkATZ%2BgEv0LsDmhXCddTnQGCZFyRpS0E2EFbcXk0UeT3lQq9XdffzF0mwpugsjtT5HEDu13LceoP6oLntvs%2F%2Fl%2FkRoZVUUjaKWPezZDp8z1S56U%2FH2tJQ2IvCxT19qKBZsx9UNB0hqp4eO8AcCB04tMKzQhRPHzPs%2B2Xr7pAYfrMOpBz10IqAU9IVWoJ8nXXmXheJmFVOD798WLe1gABz3yRB55OVg&X-Amz-Signature=3a0c561dcc26ce9ee0ee91921ef3c815587aa6d87bc1f8169d9be8a52fd30a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQVND3B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn0twbRDToHcwYv84zakYadmWoACfDE5ACVgE0e4B%2F%2BAIhAOYyywu2gfPWa%2BS4y74EUwRn2b2hhfSwvqmN4QlpHg6DKv8DCCsQABoMNjM3NDIzMTgzODA1IgxPKXzQa7kjTmU3SJ8q3ANJtg7QV7bDJ9yJx0CxCAHu0Ys6t3IgFzMW5KARa2d9gM4yEo2sgDnfS5d3%2FSCFtO9HHqwSpZa57jEN3N7s3UkcgS9UalMZCgF4S%2B7IYLAPIp9edV4J6ts5KAAF9TR90bwGO4P9RM4LBEMKO2s0sL0Qbr0yFcx0%2FSrJ7ioYb9Rx%2FkBdcBP8AICI27AMHPZW2tGT4c%2B6HuKcG9cnAOy9e6cOvT3bJIQKGiVaHxiC%2Fx%2BUvC9zcYCYE676aRquGEc4xW%2BITIthtVFkuvGK9aAs6ifFFqFzdMn%2FkM8rhzBk%2BBnIjnPMJvVISneQLEfVtzDL7hyThuvFHeDPkzUyKhiiRKlPvoW1mjo5nEoFcnJMAPUEeVTZ1IohwTI26C3hu%2F2%2BXdKSeiOD6qX1%2FQjXJsojIfig0JFYqNBEa7j7XusX7D1MZVbHL0%2FSrgjjrodjG1Xv7BluTYKDH1Wzcz7KusZ01MaPrslhAq%2BaG5Yk268wp27KZMXzYP3BRHeoGJexw9Ko%2F8mLCFOM1gLox8rp06FcqR1EZUSokGD%2FdSJLgSZ22YvI%2F4I10D08EM4kgBK%2Fuk9mWnvQy1A7ds8EkgFo%2FLa8RR%2FThMgqd%2BR71757gZ%2BBEuOJ7bVX5Lhjw8wEhncQCzDZxvHEBjqkATZ%2BgEv0LsDmhXCddTnQGCZFyRpS0E2EFbcXk0UeT3lQq9XdffzF0mwpugsjtT5HEDu13LceoP6oLntvs%2F%2Fl%2FkRoZVUUjaKWPezZDp8z1S56U%2FH2tJQ2IvCxT19qKBZsx9UNB0hqp4eO8AcCB04tMKzQhRPHzPs%2B2Xr7pAYfrMOpBz10IqAU9IVWoJ8nXXmXheJmFVOD798WLe1gABz3yRB55OVg&X-Amz-Signature=4415e41466fd4f0d1c670fb2ed15a7e981afa7fc4f20304dbf4b2d27d54558cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQVND3B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn0twbRDToHcwYv84zakYadmWoACfDE5ACVgE0e4B%2F%2BAIhAOYyywu2gfPWa%2BS4y74EUwRn2b2hhfSwvqmN4QlpHg6DKv8DCCsQABoMNjM3NDIzMTgzODA1IgxPKXzQa7kjTmU3SJ8q3ANJtg7QV7bDJ9yJx0CxCAHu0Ys6t3IgFzMW5KARa2d9gM4yEo2sgDnfS5d3%2FSCFtO9HHqwSpZa57jEN3N7s3UkcgS9UalMZCgF4S%2B7IYLAPIp9edV4J6ts5KAAF9TR90bwGO4P9RM4LBEMKO2s0sL0Qbr0yFcx0%2FSrJ7ioYb9Rx%2FkBdcBP8AICI27AMHPZW2tGT4c%2B6HuKcG9cnAOy9e6cOvT3bJIQKGiVaHxiC%2Fx%2BUvC9zcYCYE676aRquGEc4xW%2BITIthtVFkuvGK9aAs6ifFFqFzdMn%2FkM8rhzBk%2BBnIjnPMJvVISneQLEfVtzDL7hyThuvFHeDPkzUyKhiiRKlPvoW1mjo5nEoFcnJMAPUEeVTZ1IohwTI26C3hu%2F2%2BXdKSeiOD6qX1%2FQjXJsojIfig0JFYqNBEa7j7XusX7D1MZVbHL0%2FSrgjjrodjG1Xv7BluTYKDH1Wzcz7KusZ01MaPrslhAq%2BaG5Yk268wp27KZMXzYP3BRHeoGJexw9Ko%2F8mLCFOM1gLox8rp06FcqR1EZUSokGD%2FdSJLgSZ22YvI%2F4I10D08EM4kgBK%2Fuk9mWnvQy1A7ds8EkgFo%2FLa8RR%2FThMgqd%2BR71757gZ%2BBEuOJ7bVX5Lhjw8wEhncQCzDZxvHEBjqkATZ%2BgEv0LsDmhXCddTnQGCZFyRpS0E2EFbcXk0UeT3lQq9XdffzF0mwpugsjtT5HEDu13LceoP6oLntvs%2F%2Fl%2FkRoZVUUjaKWPezZDp8z1S56U%2FH2tJQ2IvCxT19qKBZsx9UNB0hqp4eO8AcCB04tMKzQhRPHzPs%2B2Xr7pAYfrMOpBz10IqAU9IVWoJ8nXXmXheJmFVOD798WLe1gABz3yRB55OVg&X-Amz-Signature=517ea3dd6e7e7073d084f7ae3fd49d05fda489e64286351391e3dda87b700821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQVND3B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn0twbRDToHcwYv84zakYadmWoACfDE5ACVgE0e4B%2F%2BAIhAOYyywu2gfPWa%2BS4y74EUwRn2b2hhfSwvqmN4QlpHg6DKv8DCCsQABoMNjM3NDIzMTgzODA1IgxPKXzQa7kjTmU3SJ8q3ANJtg7QV7bDJ9yJx0CxCAHu0Ys6t3IgFzMW5KARa2d9gM4yEo2sgDnfS5d3%2FSCFtO9HHqwSpZa57jEN3N7s3UkcgS9UalMZCgF4S%2B7IYLAPIp9edV4J6ts5KAAF9TR90bwGO4P9RM4LBEMKO2s0sL0Qbr0yFcx0%2FSrJ7ioYb9Rx%2FkBdcBP8AICI27AMHPZW2tGT4c%2B6HuKcG9cnAOy9e6cOvT3bJIQKGiVaHxiC%2Fx%2BUvC9zcYCYE676aRquGEc4xW%2BITIthtVFkuvGK9aAs6ifFFqFzdMn%2FkM8rhzBk%2BBnIjnPMJvVISneQLEfVtzDL7hyThuvFHeDPkzUyKhiiRKlPvoW1mjo5nEoFcnJMAPUEeVTZ1IohwTI26C3hu%2F2%2BXdKSeiOD6qX1%2FQjXJsojIfig0JFYqNBEa7j7XusX7D1MZVbHL0%2FSrgjjrodjG1Xv7BluTYKDH1Wzcz7KusZ01MaPrslhAq%2BaG5Yk268wp27KZMXzYP3BRHeoGJexw9Ko%2F8mLCFOM1gLox8rp06FcqR1EZUSokGD%2FdSJLgSZ22YvI%2F4I10D08EM4kgBK%2Fuk9mWnvQy1A7ds8EkgFo%2FLa8RR%2FThMgqd%2BR71757gZ%2BBEuOJ7bVX5Lhjw8wEhncQCzDZxvHEBjqkATZ%2BgEv0LsDmhXCddTnQGCZFyRpS0E2EFbcXk0UeT3lQq9XdffzF0mwpugsjtT5HEDu13LceoP6oLntvs%2F%2Fl%2FkRoZVUUjaKWPezZDp8z1S56U%2FH2tJQ2IvCxT19qKBZsx9UNB0hqp4eO8AcCB04tMKzQhRPHzPs%2B2Xr7pAYfrMOpBz10IqAU9IVWoJ8nXXmXheJmFVOD798WLe1gABz3yRB55OVg&X-Amz-Signature=2f03a20528c7892a45e76ee76eaaca40bf1a298b19be5bd5881d726cc21cdf13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQVND3B%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn0twbRDToHcwYv84zakYadmWoACfDE5ACVgE0e4B%2F%2BAIhAOYyywu2gfPWa%2BS4y74EUwRn2b2hhfSwvqmN4QlpHg6DKv8DCCsQABoMNjM3NDIzMTgzODA1IgxPKXzQa7kjTmU3SJ8q3ANJtg7QV7bDJ9yJx0CxCAHu0Ys6t3IgFzMW5KARa2d9gM4yEo2sgDnfS5d3%2FSCFtO9HHqwSpZa57jEN3N7s3UkcgS9UalMZCgF4S%2B7IYLAPIp9edV4J6ts5KAAF9TR90bwGO4P9RM4LBEMKO2s0sL0Qbr0yFcx0%2FSrJ7ioYb9Rx%2FkBdcBP8AICI27AMHPZW2tGT4c%2B6HuKcG9cnAOy9e6cOvT3bJIQKGiVaHxiC%2Fx%2BUvC9zcYCYE676aRquGEc4xW%2BITIthtVFkuvGK9aAs6ifFFqFzdMn%2FkM8rhzBk%2BBnIjnPMJvVISneQLEfVtzDL7hyThuvFHeDPkzUyKhiiRKlPvoW1mjo5nEoFcnJMAPUEeVTZ1IohwTI26C3hu%2F2%2BXdKSeiOD6qX1%2FQjXJsojIfig0JFYqNBEa7j7XusX7D1MZVbHL0%2FSrgjjrodjG1Xv7BluTYKDH1Wzcz7KusZ01MaPrslhAq%2BaG5Yk268wp27KZMXzYP3BRHeoGJexw9Ko%2F8mLCFOM1gLox8rp06FcqR1EZUSokGD%2FdSJLgSZ22YvI%2F4I10D08EM4kgBK%2Fuk9mWnvQy1A7ds8EkgFo%2FLa8RR%2FThMgqd%2BR71757gZ%2BBEuOJ7bVX5Lhjw8wEhncQCzDZxvHEBjqkATZ%2BgEv0LsDmhXCddTnQGCZFyRpS0E2EFbcXk0UeT3lQq9XdffzF0mwpugsjtT5HEDu13LceoP6oLntvs%2F%2Fl%2FkRoZVUUjaKWPezZDp8z1S56U%2FH2tJQ2IvCxT19qKBZsx9UNB0hqp4eO8AcCB04tMKzQhRPHzPs%2B2Xr7pAYfrMOpBz10IqAU9IVWoJ8nXXmXheJmFVOD798WLe1gABz3yRB55OVg&X-Amz-Signature=2b84ce05101b45c2be9735173e3e58e6d9c55f0b72a57c13adf30370c272be4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
