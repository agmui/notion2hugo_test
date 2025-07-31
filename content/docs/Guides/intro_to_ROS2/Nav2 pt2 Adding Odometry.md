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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH27IJB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FGVCZlJridGnh69twYUrBT6Y0ym%2BLqvuMI2z%2Bt7tDGAiEA0FpTDMCyfjs6z%2BuAdkasxS9FDJ9ZGGWFVpo6aazQaVUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxdtOcB2J7KCSggtircA2SPGA8NBblRyfXqDZJUgH42iSwnUMYgn7CSp1qjg8EiWaVm7MRcruGolB%2B8OhSO5ad9VmadYVUaQNFpaRbTAofx8uLKiXZRQZrKMuSGr%2BRPD5AFOYAdJlJKwdIaft4qheUEtsV0NVyqhYIEhMUfOh%2BnD2d9c7I%2BdWdyFjHBJZfF3icVMYuEgi4DxkJGv1vq8O8qu2skc0YPB4m6TFjYorUIv2y80WUwwGD5DSIcE7LSmywZCu25foKNgrj9lbbBYMAiyWjhcubOTHl8oh3CjYCqFHrpJn6ulPUo1PEmUdwWiEnv%2FIm6BBeTKqy0S51SjoRtBgG3X5JcYj9IxwM8JUuSXUugqahlGGK9KossRbaCQ484ui6iEtW4L%2Bp0avcdjy51DwU2ubb%2FCWkziWoUDrRcLefnr4kVQMouAJYC3Qcg9hWmjQS%2Fp6dSX10N%2BwDrOdaYbL%2F2xORLo3wwqgc%2B6DAQcUcZk9846%2Bc%2BYiMfuKt97xuEo9bV5VDUmsBvgj53ZdAU31PceF9S%2BsCeTFN64FdNKVq7Vbk9J584RKMNO2dKJdZ4ALO6pCmnOkqkMcdxVB2Fmq6wPAUoCEvlpmRNktUdCWEKoL15xZYg0quGDAPSHy%2B4NFe7XY8pZyuuMLiRrsQGOqUBB2W%2FVan%2BR5W605FmxgHQTwflg%2BoQN1xdOL9wbMxH%2FSOPUUco84iwyPNKuXZsweZ%2B2XPXwI3%2BQe92u%2FTju0i8ZHmozxGzUp2jGDz5AyYF%2Fya9v42FhS3arAhDdcivmDbl9cR2rLl2XjBeJIejPN9lEKhYDcJg3KRSmsBoefSqldaa5kTmH94uZlTSGTatkWXtbq69eANcj99%2FqqTxNPPiPZHkut07&X-Amz-Signature=600a771d7e9f54d21ac08ba0342e3bda55531571454979c6cc9af20afb46c04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH27IJB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FGVCZlJridGnh69twYUrBT6Y0ym%2BLqvuMI2z%2Bt7tDGAiEA0FpTDMCyfjs6z%2BuAdkasxS9FDJ9ZGGWFVpo6aazQaVUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxdtOcB2J7KCSggtircA2SPGA8NBblRyfXqDZJUgH42iSwnUMYgn7CSp1qjg8EiWaVm7MRcruGolB%2B8OhSO5ad9VmadYVUaQNFpaRbTAofx8uLKiXZRQZrKMuSGr%2BRPD5AFOYAdJlJKwdIaft4qheUEtsV0NVyqhYIEhMUfOh%2BnD2d9c7I%2BdWdyFjHBJZfF3icVMYuEgi4DxkJGv1vq8O8qu2skc0YPB4m6TFjYorUIv2y80WUwwGD5DSIcE7LSmywZCu25foKNgrj9lbbBYMAiyWjhcubOTHl8oh3CjYCqFHrpJn6ulPUo1PEmUdwWiEnv%2FIm6BBeTKqy0S51SjoRtBgG3X5JcYj9IxwM8JUuSXUugqahlGGK9KossRbaCQ484ui6iEtW4L%2Bp0avcdjy51DwU2ubb%2FCWkziWoUDrRcLefnr4kVQMouAJYC3Qcg9hWmjQS%2Fp6dSX10N%2BwDrOdaYbL%2F2xORLo3wwqgc%2B6DAQcUcZk9846%2Bc%2BYiMfuKt97xuEo9bV5VDUmsBvgj53ZdAU31PceF9S%2BsCeTFN64FdNKVq7Vbk9J584RKMNO2dKJdZ4ALO6pCmnOkqkMcdxVB2Fmq6wPAUoCEvlpmRNktUdCWEKoL15xZYg0quGDAPSHy%2B4NFe7XY8pZyuuMLiRrsQGOqUBB2W%2FVan%2BR5W605FmxgHQTwflg%2BoQN1xdOL9wbMxH%2FSOPUUco84iwyPNKuXZsweZ%2B2XPXwI3%2BQe92u%2FTju0i8ZHmozxGzUp2jGDz5AyYF%2Fya9v42FhS3arAhDdcivmDbl9cR2rLl2XjBeJIejPN9lEKhYDcJg3KRSmsBoefSqldaa5kTmH94uZlTSGTatkWXtbq69eANcj99%2FqqTxNPPiPZHkut07&X-Amz-Signature=31223358ac7e83564846dc34f143e17b2e3fd8c224598bd769de48b7c0d3917c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH27IJB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FGVCZlJridGnh69twYUrBT6Y0ym%2BLqvuMI2z%2Bt7tDGAiEA0FpTDMCyfjs6z%2BuAdkasxS9FDJ9ZGGWFVpo6aazQaVUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxdtOcB2J7KCSggtircA2SPGA8NBblRyfXqDZJUgH42iSwnUMYgn7CSp1qjg8EiWaVm7MRcruGolB%2B8OhSO5ad9VmadYVUaQNFpaRbTAofx8uLKiXZRQZrKMuSGr%2BRPD5AFOYAdJlJKwdIaft4qheUEtsV0NVyqhYIEhMUfOh%2BnD2d9c7I%2BdWdyFjHBJZfF3icVMYuEgi4DxkJGv1vq8O8qu2skc0YPB4m6TFjYorUIv2y80WUwwGD5DSIcE7LSmywZCu25foKNgrj9lbbBYMAiyWjhcubOTHl8oh3CjYCqFHrpJn6ulPUo1PEmUdwWiEnv%2FIm6BBeTKqy0S51SjoRtBgG3X5JcYj9IxwM8JUuSXUugqahlGGK9KossRbaCQ484ui6iEtW4L%2Bp0avcdjy51DwU2ubb%2FCWkziWoUDrRcLefnr4kVQMouAJYC3Qcg9hWmjQS%2Fp6dSX10N%2BwDrOdaYbL%2F2xORLo3wwqgc%2B6DAQcUcZk9846%2Bc%2BYiMfuKt97xuEo9bV5VDUmsBvgj53ZdAU31PceF9S%2BsCeTFN64FdNKVq7Vbk9J584RKMNO2dKJdZ4ALO6pCmnOkqkMcdxVB2Fmq6wPAUoCEvlpmRNktUdCWEKoL15xZYg0quGDAPSHy%2B4NFe7XY8pZyuuMLiRrsQGOqUBB2W%2FVan%2BR5W605FmxgHQTwflg%2BoQN1xdOL9wbMxH%2FSOPUUco84iwyPNKuXZsweZ%2B2XPXwI3%2BQe92u%2FTju0i8ZHmozxGzUp2jGDz5AyYF%2Fya9v42FhS3arAhDdcivmDbl9cR2rLl2XjBeJIejPN9lEKhYDcJg3KRSmsBoefSqldaa5kTmH94uZlTSGTatkWXtbq69eANcj99%2FqqTxNPPiPZHkut07&X-Amz-Signature=ddf9107d97614e0d38f5378c18c62f9ccbdbbf2abbefab8d7a5994b29d8d2993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH27IJB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FGVCZlJridGnh69twYUrBT6Y0ym%2BLqvuMI2z%2Bt7tDGAiEA0FpTDMCyfjs6z%2BuAdkasxS9FDJ9ZGGWFVpo6aazQaVUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxdtOcB2J7KCSggtircA2SPGA8NBblRyfXqDZJUgH42iSwnUMYgn7CSp1qjg8EiWaVm7MRcruGolB%2B8OhSO5ad9VmadYVUaQNFpaRbTAofx8uLKiXZRQZrKMuSGr%2BRPD5AFOYAdJlJKwdIaft4qheUEtsV0NVyqhYIEhMUfOh%2BnD2d9c7I%2BdWdyFjHBJZfF3icVMYuEgi4DxkJGv1vq8O8qu2skc0YPB4m6TFjYorUIv2y80WUwwGD5DSIcE7LSmywZCu25foKNgrj9lbbBYMAiyWjhcubOTHl8oh3CjYCqFHrpJn6ulPUo1PEmUdwWiEnv%2FIm6BBeTKqy0S51SjoRtBgG3X5JcYj9IxwM8JUuSXUugqahlGGK9KossRbaCQ484ui6iEtW4L%2Bp0avcdjy51DwU2ubb%2FCWkziWoUDrRcLefnr4kVQMouAJYC3Qcg9hWmjQS%2Fp6dSX10N%2BwDrOdaYbL%2F2xORLo3wwqgc%2B6DAQcUcZk9846%2Bc%2BYiMfuKt97xuEo9bV5VDUmsBvgj53ZdAU31PceF9S%2BsCeTFN64FdNKVq7Vbk9J584RKMNO2dKJdZ4ALO6pCmnOkqkMcdxVB2Fmq6wPAUoCEvlpmRNktUdCWEKoL15xZYg0quGDAPSHy%2B4NFe7XY8pZyuuMLiRrsQGOqUBB2W%2FVan%2BR5W605FmxgHQTwflg%2BoQN1xdOL9wbMxH%2FSOPUUco84iwyPNKuXZsweZ%2B2XPXwI3%2BQe92u%2FTju0i8ZHmozxGzUp2jGDz5AyYF%2Fya9v42FhS3arAhDdcivmDbl9cR2rLl2XjBeJIejPN9lEKhYDcJg3KRSmsBoefSqldaa5kTmH94uZlTSGTatkWXtbq69eANcj99%2FqqTxNPPiPZHkut07&X-Amz-Signature=86fcc1bd927f630aed6dbcb7465117cedebbd9bf151220d0c3bc2e3e1f7c7ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH27IJB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FGVCZlJridGnh69twYUrBT6Y0ym%2BLqvuMI2z%2Bt7tDGAiEA0FpTDMCyfjs6z%2BuAdkasxS9FDJ9ZGGWFVpo6aazQaVUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxdtOcB2J7KCSggtircA2SPGA8NBblRyfXqDZJUgH42iSwnUMYgn7CSp1qjg8EiWaVm7MRcruGolB%2B8OhSO5ad9VmadYVUaQNFpaRbTAofx8uLKiXZRQZrKMuSGr%2BRPD5AFOYAdJlJKwdIaft4qheUEtsV0NVyqhYIEhMUfOh%2BnD2d9c7I%2BdWdyFjHBJZfF3icVMYuEgi4DxkJGv1vq8O8qu2skc0YPB4m6TFjYorUIv2y80WUwwGD5DSIcE7LSmywZCu25foKNgrj9lbbBYMAiyWjhcubOTHl8oh3CjYCqFHrpJn6ulPUo1PEmUdwWiEnv%2FIm6BBeTKqy0S51SjoRtBgG3X5JcYj9IxwM8JUuSXUugqahlGGK9KossRbaCQ484ui6iEtW4L%2Bp0avcdjy51DwU2ubb%2FCWkziWoUDrRcLefnr4kVQMouAJYC3Qcg9hWmjQS%2Fp6dSX10N%2BwDrOdaYbL%2F2xORLo3wwqgc%2B6DAQcUcZk9846%2Bc%2BYiMfuKt97xuEo9bV5VDUmsBvgj53ZdAU31PceF9S%2BsCeTFN64FdNKVq7Vbk9J584RKMNO2dKJdZ4ALO6pCmnOkqkMcdxVB2Fmq6wPAUoCEvlpmRNktUdCWEKoL15xZYg0quGDAPSHy%2B4NFe7XY8pZyuuMLiRrsQGOqUBB2W%2FVan%2BR5W605FmxgHQTwflg%2BoQN1xdOL9wbMxH%2FSOPUUco84iwyPNKuXZsweZ%2B2XPXwI3%2BQe92u%2FTju0i8ZHmozxGzUp2jGDz5AyYF%2Fya9v42FhS3arAhDdcivmDbl9cR2rLl2XjBeJIejPN9lEKhYDcJg3KRSmsBoefSqldaa5kTmH94uZlTSGTatkWXtbq69eANcj99%2FqqTxNPPiPZHkut07&X-Amz-Signature=d619472a5aa429340fc42c03e941a53470ebd43cef4acad7a9aac82487d956a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH27IJB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FGVCZlJridGnh69twYUrBT6Y0ym%2BLqvuMI2z%2Bt7tDGAiEA0FpTDMCyfjs6z%2BuAdkasxS9FDJ9ZGGWFVpo6aazQaVUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxdtOcB2J7KCSggtircA2SPGA8NBblRyfXqDZJUgH42iSwnUMYgn7CSp1qjg8EiWaVm7MRcruGolB%2B8OhSO5ad9VmadYVUaQNFpaRbTAofx8uLKiXZRQZrKMuSGr%2BRPD5AFOYAdJlJKwdIaft4qheUEtsV0NVyqhYIEhMUfOh%2BnD2d9c7I%2BdWdyFjHBJZfF3icVMYuEgi4DxkJGv1vq8O8qu2skc0YPB4m6TFjYorUIv2y80WUwwGD5DSIcE7LSmywZCu25foKNgrj9lbbBYMAiyWjhcubOTHl8oh3CjYCqFHrpJn6ulPUo1PEmUdwWiEnv%2FIm6BBeTKqy0S51SjoRtBgG3X5JcYj9IxwM8JUuSXUugqahlGGK9KossRbaCQ484ui6iEtW4L%2Bp0avcdjy51DwU2ubb%2FCWkziWoUDrRcLefnr4kVQMouAJYC3Qcg9hWmjQS%2Fp6dSX10N%2BwDrOdaYbL%2F2xORLo3wwqgc%2B6DAQcUcZk9846%2Bc%2BYiMfuKt97xuEo9bV5VDUmsBvgj53ZdAU31PceF9S%2BsCeTFN64FdNKVq7Vbk9J584RKMNO2dKJdZ4ALO6pCmnOkqkMcdxVB2Fmq6wPAUoCEvlpmRNktUdCWEKoL15xZYg0quGDAPSHy%2B4NFe7XY8pZyuuMLiRrsQGOqUBB2W%2FVan%2BR5W605FmxgHQTwflg%2BoQN1xdOL9wbMxH%2FSOPUUco84iwyPNKuXZsweZ%2B2XPXwI3%2BQe92u%2FTju0i8ZHmozxGzUp2jGDz5AyYF%2Fya9v42FhS3arAhDdcivmDbl9cR2rLl2XjBeJIejPN9lEKhYDcJg3KRSmsBoefSqldaa5kTmH94uZlTSGTatkWXtbq69eANcj99%2FqqTxNPPiPZHkut07&X-Amz-Signature=6cde819e7614f039d8e800dfe13e6000e290d741cf5a06886b5e77bf9c95740a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH27IJB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FGVCZlJridGnh69twYUrBT6Y0ym%2BLqvuMI2z%2Bt7tDGAiEA0FpTDMCyfjs6z%2BuAdkasxS9FDJ9ZGGWFVpo6aazQaVUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxdtOcB2J7KCSggtircA2SPGA8NBblRyfXqDZJUgH42iSwnUMYgn7CSp1qjg8EiWaVm7MRcruGolB%2B8OhSO5ad9VmadYVUaQNFpaRbTAofx8uLKiXZRQZrKMuSGr%2BRPD5AFOYAdJlJKwdIaft4qheUEtsV0NVyqhYIEhMUfOh%2BnD2d9c7I%2BdWdyFjHBJZfF3icVMYuEgi4DxkJGv1vq8O8qu2skc0YPB4m6TFjYorUIv2y80WUwwGD5DSIcE7LSmywZCu25foKNgrj9lbbBYMAiyWjhcubOTHl8oh3CjYCqFHrpJn6ulPUo1PEmUdwWiEnv%2FIm6BBeTKqy0S51SjoRtBgG3X5JcYj9IxwM8JUuSXUugqahlGGK9KossRbaCQ484ui6iEtW4L%2Bp0avcdjy51DwU2ubb%2FCWkziWoUDrRcLefnr4kVQMouAJYC3Qcg9hWmjQS%2Fp6dSX10N%2BwDrOdaYbL%2F2xORLo3wwqgc%2B6DAQcUcZk9846%2Bc%2BYiMfuKt97xuEo9bV5VDUmsBvgj53ZdAU31PceF9S%2BsCeTFN64FdNKVq7Vbk9J584RKMNO2dKJdZ4ALO6pCmnOkqkMcdxVB2Fmq6wPAUoCEvlpmRNktUdCWEKoL15xZYg0quGDAPSHy%2B4NFe7XY8pZyuuMLiRrsQGOqUBB2W%2FVan%2BR5W605FmxgHQTwflg%2BoQN1xdOL9wbMxH%2FSOPUUco84iwyPNKuXZsweZ%2B2XPXwI3%2BQe92u%2FTju0i8ZHmozxGzUp2jGDz5AyYF%2Fya9v42FhS3arAhDdcivmDbl9cR2rLl2XjBeJIejPN9lEKhYDcJg3KRSmsBoefSqldaa5kTmH94uZlTSGTatkWXtbq69eANcj99%2FqqTxNPPiPZHkut07&X-Amz-Signature=d56653bac4ff57a5eecc4eae756efa3618fbebbb19bc27eb0c815b2ffc874a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH27IJB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FGVCZlJridGnh69twYUrBT6Y0ym%2BLqvuMI2z%2Bt7tDGAiEA0FpTDMCyfjs6z%2BuAdkasxS9FDJ9ZGGWFVpo6aazQaVUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxdtOcB2J7KCSggtircA2SPGA8NBblRyfXqDZJUgH42iSwnUMYgn7CSp1qjg8EiWaVm7MRcruGolB%2B8OhSO5ad9VmadYVUaQNFpaRbTAofx8uLKiXZRQZrKMuSGr%2BRPD5AFOYAdJlJKwdIaft4qheUEtsV0NVyqhYIEhMUfOh%2BnD2d9c7I%2BdWdyFjHBJZfF3icVMYuEgi4DxkJGv1vq8O8qu2skc0YPB4m6TFjYorUIv2y80WUwwGD5DSIcE7LSmywZCu25foKNgrj9lbbBYMAiyWjhcubOTHl8oh3CjYCqFHrpJn6ulPUo1PEmUdwWiEnv%2FIm6BBeTKqy0S51SjoRtBgG3X5JcYj9IxwM8JUuSXUugqahlGGK9KossRbaCQ484ui6iEtW4L%2Bp0avcdjy51DwU2ubb%2FCWkziWoUDrRcLefnr4kVQMouAJYC3Qcg9hWmjQS%2Fp6dSX10N%2BwDrOdaYbL%2F2xORLo3wwqgc%2B6DAQcUcZk9846%2Bc%2BYiMfuKt97xuEo9bV5VDUmsBvgj53ZdAU31PceF9S%2BsCeTFN64FdNKVq7Vbk9J584RKMNO2dKJdZ4ALO6pCmnOkqkMcdxVB2Fmq6wPAUoCEvlpmRNktUdCWEKoL15xZYg0quGDAPSHy%2B4NFe7XY8pZyuuMLiRrsQGOqUBB2W%2FVan%2BR5W605FmxgHQTwflg%2BoQN1xdOL9wbMxH%2FSOPUUco84iwyPNKuXZsweZ%2B2XPXwI3%2BQe92u%2FTju0i8ZHmozxGzUp2jGDz5AyYF%2Fya9v42FhS3arAhDdcivmDbl9cR2rLl2XjBeJIejPN9lEKhYDcJg3KRSmsBoefSqldaa5kTmH94uZlTSGTatkWXtbq69eANcj99%2FqqTxNPPiPZHkut07&X-Amz-Signature=9508e00c5a439b89916db32d3bff08b1114465718ae1b959218ffbc9905f4a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH27IJB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FGVCZlJridGnh69twYUrBT6Y0ym%2BLqvuMI2z%2Bt7tDGAiEA0FpTDMCyfjs6z%2BuAdkasxS9FDJ9ZGGWFVpo6aazQaVUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxdtOcB2J7KCSggtircA2SPGA8NBblRyfXqDZJUgH42iSwnUMYgn7CSp1qjg8EiWaVm7MRcruGolB%2B8OhSO5ad9VmadYVUaQNFpaRbTAofx8uLKiXZRQZrKMuSGr%2BRPD5AFOYAdJlJKwdIaft4qheUEtsV0NVyqhYIEhMUfOh%2BnD2d9c7I%2BdWdyFjHBJZfF3icVMYuEgi4DxkJGv1vq8O8qu2skc0YPB4m6TFjYorUIv2y80WUwwGD5DSIcE7LSmywZCu25foKNgrj9lbbBYMAiyWjhcubOTHl8oh3CjYCqFHrpJn6ulPUo1PEmUdwWiEnv%2FIm6BBeTKqy0S51SjoRtBgG3X5JcYj9IxwM8JUuSXUugqahlGGK9KossRbaCQ484ui6iEtW4L%2Bp0avcdjy51DwU2ubb%2FCWkziWoUDrRcLefnr4kVQMouAJYC3Qcg9hWmjQS%2Fp6dSX10N%2BwDrOdaYbL%2F2xORLo3wwqgc%2B6DAQcUcZk9846%2Bc%2BYiMfuKt97xuEo9bV5VDUmsBvgj53ZdAU31PceF9S%2BsCeTFN64FdNKVq7Vbk9J584RKMNO2dKJdZ4ALO6pCmnOkqkMcdxVB2Fmq6wPAUoCEvlpmRNktUdCWEKoL15xZYg0quGDAPSHy%2B4NFe7XY8pZyuuMLiRrsQGOqUBB2W%2FVan%2BR5W605FmxgHQTwflg%2BoQN1xdOL9wbMxH%2FSOPUUco84iwyPNKuXZsweZ%2B2XPXwI3%2BQe92u%2FTju0i8ZHmozxGzUp2jGDz5AyYF%2Fya9v42FhS3arAhDdcivmDbl9cR2rLl2XjBeJIejPN9lEKhYDcJg3KRSmsBoefSqldaa5kTmH94uZlTSGTatkWXtbq69eANcj99%2FqqTxNPPiPZHkut07&X-Amz-Signature=0df044ab0b118cffaacd0666b934ec1de03daa08bb75f7d98453787e96accf6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W23QOTT%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgzQZkdgzLGpY6jb5EnU9xTElNOx67mtnfAXRpNRDRiAiEAvdPCKqDyQekGF%2FcFTs6NWz11IZd3W2eD%2FrUUUFBh6%2FcqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMChV0nscXfQ1qZjiSrcA6Bv9IOkBgQQP1Rxju5OPGI1PMAsMkcNf3Dw%2BZ3dNC%2FRy%2Fq%2BTMJJCRBZPTdP51t8j1veJTH3iNDyzUP%2FMYCCIOACQp6lhg4Rz9844A%2FXqNnTqTG%2BcKvn2C5bkRwNGFc9cUrePGxltvMRXVDuTumdIXkFWuyCeQu%2BxB9zHiP9iecDNtw0bY6bVTaSd%2Bx8m48QqLEtje3FkWN2Jh0FAWIMLXJ77azh8piJoSzVUIsNOrWtM8i3wE0Iz8TkgJKFvNOBvh5SZ2b2gh%2Brtl0%2Bg%2FBqbaDUFbQ%2FB%2FEi8fV16zT%2B24L5YDph7KnPrMHcRpwvGuM9%2BGiFReu1cqeWYjVPPy6iJlfAeaX9J3w1B8tab%2F0zdfRIA4JCHfR5otUU5mk%2B0EfVzTrX96SelJUspkDoCzOdvJNetrs%2F1XbDTcLmYzvVQx5GWOmZ%2BH5%2B7BVuozE0%2Bo3IKY5izdrOIBJ%2BNo1WPajXfbjbjpbNyRsb%2FQWKZuzVK4X%2FO9pg4RqknAcaaKjjT6ZG6fKTSo1Kk3xt8lHP7426%2BHnbt0utRGPX4G%2B%2F0HbjdShlKECUC6uzWGwmI19csFf78Ym%2FQgEURvOhRWFwW4rW0LZTEm76ZqrwNN4wm%2FwtAorBRWAv2N4LMQSTGJsFML6QrsQGOqUBmX8umgwmqXlljdjWNdAX%2FzKvLLtS%2F4dJBjeHMowbKJCptjITWNGszrBGZjp9RrdtfA8flJjhZbj7mLMxOTwOL0RjQezzYYUcaCmX%2FGEgnSv%2FBOSmh%2BLxZkmJGgUNLNJxne157lLrBoL10cAY1wS7EDkM3esbhVvpsR0XcRbr9%2BvAttTcbq8tLT74OAdOsVhikqygG0ahfEybBduDs8ZaJ6o%2Fhzwe&X-Amz-Signature=a04bef2219623417f7db4034e4ca448772a1fc7a71a9231522b6910ac04cd22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XH27IJB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FGVCZlJridGnh69twYUrBT6Y0ym%2BLqvuMI2z%2Bt7tDGAiEA0FpTDMCyfjs6z%2BuAdkasxS9FDJ9ZGGWFVpo6aazQaVUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxdtOcB2J7KCSggtircA2SPGA8NBblRyfXqDZJUgH42iSwnUMYgn7CSp1qjg8EiWaVm7MRcruGolB%2B8OhSO5ad9VmadYVUaQNFpaRbTAofx8uLKiXZRQZrKMuSGr%2BRPD5AFOYAdJlJKwdIaft4qheUEtsV0NVyqhYIEhMUfOh%2BnD2d9c7I%2BdWdyFjHBJZfF3icVMYuEgi4DxkJGv1vq8O8qu2skc0YPB4m6TFjYorUIv2y80WUwwGD5DSIcE7LSmywZCu25foKNgrj9lbbBYMAiyWjhcubOTHl8oh3CjYCqFHrpJn6ulPUo1PEmUdwWiEnv%2FIm6BBeTKqy0S51SjoRtBgG3X5JcYj9IxwM8JUuSXUugqahlGGK9KossRbaCQ484ui6iEtW4L%2Bp0avcdjy51DwU2ubb%2FCWkziWoUDrRcLefnr4kVQMouAJYC3Qcg9hWmjQS%2Fp6dSX10N%2BwDrOdaYbL%2F2xORLo3wwqgc%2B6DAQcUcZk9846%2Bc%2BYiMfuKt97xuEo9bV5VDUmsBvgj53ZdAU31PceF9S%2BsCeTFN64FdNKVq7Vbk9J584RKMNO2dKJdZ4ALO6pCmnOkqkMcdxVB2Fmq6wPAUoCEvlpmRNktUdCWEKoL15xZYg0quGDAPSHy%2B4NFe7XY8pZyuuMLiRrsQGOqUBB2W%2FVan%2BR5W605FmxgHQTwflg%2BoQN1xdOL9wbMxH%2FSOPUUco84iwyPNKuXZsweZ%2B2XPXwI3%2BQe92u%2FTju0i8ZHmozxGzUp2jGDz5AyYF%2Fya9v42FhS3arAhDdcivmDbl9cR2rLl2XjBeJIejPN9lEKhYDcJg3KRSmsBoefSqldaa5kTmH94uZlTSGTatkWXtbq69eANcj99%2FqqTxNPPiPZHkut07&X-Amz-Signature=3be1562ed8a9e17a89a6450a9549407508701e44c6eb3b1be4f9666451e58781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WF6QX7H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54cXoHp9KVJWxuqg%2FO7%2BM%2FI0dfdZK3AVHCfypVNfgSAIgLyPySfa7IP%2BUKOMih9uvM8PF8zI%2FMug0kDwopM6onukqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgJgZDs4jtid%2FlD5SrcA%2BiV6PEt1T9fmft%2BIn5U883k3XHQSgYyNY1ERN1Q5RbRurQ7HcayS6TiN7SirUIWQufPZK%2BEpxb%2FX5XXy5Za0A00wuyLmQKy6gjThxtv%2Bs72%2BAefzlletvLT2%2BXjwuf%2FYHNHEm1NUNOJZkerWY9M0m4iviHqEsreH%2FirVI50RsfBnYQ%2FJFdODlNYp10988llCAtQoukkA7KBZKsLIaTP4wVKX5HOq1Hd410myCn4IcvC2GV2XTg3Y5CTm6OATRmoq6aclpzmgXn%2FwBOkVl7Hxg0xfupqgH1TA1aVpbuaZ1gQKeTzBMd1k5A0MIGVjKFIKH2%2BPUkOF5ajXghHnU3ohoCy4MVHylIY%2BC%2F81YQtXk%2Bvdk6GrTemr6%2FCI%2FKjFO2vihdA1kdxq%2FV3Ab0NzdULpGC9%2BOAfEYK0Q%2FrPWhHBPvDc1aVzo6vNts8gX%2FhpChs5aQu5HhALIfbe%2BPAg89wbrMGsX6QMa0KhOqMiwd5XOXlQsuMcowfi2YBOqty5uua0oXo6yFnpZgWOneRp4towR0NsgCgBoeErGeaMZ3ceoE%2FHrtZvepvo7XUpCEaGUtJZeN%2F%2FcneAbKPV%2BjP4SB3ICIOYcloT1K1Axdp%2FJ%2FS5QComB%2F%2F1ljTb9FfLQaxpMPaQrsQGOqUBzDzRXM9TqGvOokKxQknQXQ4eSh0H%2F4pQiEKkKdPHTrmoxYJe7Jy1JqvSeiPb956LxyusG9M9CUOWEwXrKiiu7jGJixUHuDHBlSQ48Fj0ZXYHQcGrmWfNMjSH57bILQJSxvEMx95JpL9HXGNKhu8%2BE9MAzvCfgLPEvn%2FrAuKfBkmMoXwqqj%2BAoyNHAOay1n1IRTt2dPHoAzoYHoRrcZHnEFc9vlWm&X-Amz-Signature=0e30d997478da6e4d6bd70cb670fc6c64f067c3245baa6e3aaa3179feb697378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WF6QX7H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54cXoHp9KVJWxuqg%2FO7%2BM%2FI0dfdZK3AVHCfypVNfgSAIgLyPySfa7IP%2BUKOMih9uvM8PF8zI%2FMug0kDwopM6onukqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgJgZDs4jtid%2FlD5SrcA%2BiV6PEt1T9fmft%2BIn5U883k3XHQSgYyNY1ERN1Q5RbRurQ7HcayS6TiN7SirUIWQufPZK%2BEpxb%2FX5XXy5Za0A00wuyLmQKy6gjThxtv%2Bs72%2BAefzlletvLT2%2BXjwuf%2FYHNHEm1NUNOJZkerWY9M0m4iviHqEsreH%2FirVI50RsfBnYQ%2FJFdODlNYp10988llCAtQoukkA7KBZKsLIaTP4wVKX5HOq1Hd410myCn4IcvC2GV2XTg3Y5CTm6OATRmoq6aclpzmgXn%2FwBOkVl7Hxg0xfupqgH1TA1aVpbuaZ1gQKeTzBMd1k5A0MIGVjKFIKH2%2BPUkOF5ajXghHnU3ohoCy4MVHylIY%2BC%2F81YQtXk%2Bvdk6GrTemr6%2FCI%2FKjFO2vihdA1kdxq%2FV3Ab0NzdULpGC9%2BOAfEYK0Q%2FrPWhHBPvDc1aVzo6vNts8gX%2FhpChs5aQu5HhALIfbe%2BPAg89wbrMGsX6QMa0KhOqMiwd5XOXlQsuMcowfi2YBOqty5uua0oXo6yFnpZgWOneRp4towR0NsgCgBoeErGeaMZ3ceoE%2FHrtZvepvo7XUpCEaGUtJZeN%2F%2FcneAbKPV%2BjP4SB3ICIOYcloT1K1Axdp%2FJ%2FS5QComB%2F%2F1ljTb9FfLQaxpMPaQrsQGOqUBzDzRXM9TqGvOokKxQknQXQ4eSh0H%2F4pQiEKkKdPHTrmoxYJe7Jy1JqvSeiPb956LxyusG9M9CUOWEwXrKiiu7jGJixUHuDHBlSQ48Fj0ZXYHQcGrmWfNMjSH57bILQJSxvEMx95JpL9HXGNKhu8%2BE9MAzvCfgLPEvn%2FrAuKfBkmMoXwqqj%2BAoyNHAOay1n1IRTt2dPHoAzoYHoRrcZHnEFc9vlWm&X-Amz-Signature=374db5882d295d82e2aadc9ca23b6c01ac5fde25c6946a33592374faf3776cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WF6QX7H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54cXoHp9KVJWxuqg%2FO7%2BM%2FI0dfdZK3AVHCfypVNfgSAIgLyPySfa7IP%2BUKOMih9uvM8PF8zI%2FMug0kDwopM6onukqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgJgZDs4jtid%2FlD5SrcA%2BiV6PEt1T9fmft%2BIn5U883k3XHQSgYyNY1ERN1Q5RbRurQ7HcayS6TiN7SirUIWQufPZK%2BEpxb%2FX5XXy5Za0A00wuyLmQKy6gjThxtv%2Bs72%2BAefzlletvLT2%2BXjwuf%2FYHNHEm1NUNOJZkerWY9M0m4iviHqEsreH%2FirVI50RsfBnYQ%2FJFdODlNYp10988llCAtQoukkA7KBZKsLIaTP4wVKX5HOq1Hd410myCn4IcvC2GV2XTg3Y5CTm6OATRmoq6aclpzmgXn%2FwBOkVl7Hxg0xfupqgH1TA1aVpbuaZ1gQKeTzBMd1k5A0MIGVjKFIKH2%2BPUkOF5ajXghHnU3ohoCy4MVHylIY%2BC%2F81YQtXk%2Bvdk6GrTemr6%2FCI%2FKjFO2vihdA1kdxq%2FV3Ab0NzdULpGC9%2BOAfEYK0Q%2FrPWhHBPvDc1aVzo6vNts8gX%2FhpChs5aQu5HhALIfbe%2BPAg89wbrMGsX6QMa0KhOqMiwd5XOXlQsuMcowfi2YBOqty5uua0oXo6yFnpZgWOneRp4towR0NsgCgBoeErGeaMZ3ceoE%2FHrtZvepvo7XUpCEaGUtJZeN%2F%2FcneAbKPV%2BjP4SB3ICIOYcloT1K1Axdp%2FJ%2FS5QComB%2F%2F1ljTb9FfLQaxpMPaQrsQGOqUBzDzRXM9TqGvOokKxQknQXQ4eSh0H%2F4pQiEKkKdPHTrmoxYJe7Jy1JqvSeiPb956LxyusG9M9CUOWEwXrKiiu7jGJixUHuDHBlSQ48Fj0ZXYHQcGrmWfNMjSH57bILQJSxvEMx95JpL9HXGNKhu8%2BE9MAzvCfgLPEvn%2FrAuKfBkmMoXwqqj%2BAoyNHAOay1n1IRTt2dPHoAzoYHoRrcZHnEFc9vlWm&X-Amz-Signature=f118d0863effff59610141bdb7205b3e65b204ede3b8f4a268823ed397751d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WF6QX7H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54cXoHp9KVJWxuqg%2FO7%2BM%2FI0dfdZK3AVHCfypVNfgSAIgLyPySfa7IP%2BUKOMih9uvM8PF8zI%2FMug0kDwopM6onukqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgJgZDs4jtid%2FlD5SrcA%2BiV6PEt1T9fmft%2BIn5U883k3XHQSgYyNY1ERN1Q5RbRurQ7HcayS6TiN7SirUIWQufPZK%2BEpxb%2FX5XXy5Za0A00wuyLmQKy6gjThxtv%2Bs72%2BAefzlletvLT2%2BXjwuf%2FYHNHEm1NUNOJZkerWY9M0m4iviHqEsreH%2FirVI50RsfBnYQ%2FJFdODlNYp10988llCAtQoukkA7KBZKsLIaTP4wVKX5HOq1Hd410myCn4IcvC2GV2XTg3Y5CTm6OATRmoq6aclpzmgXn%2FwBOkVl7Hxg0xfupqgH1TA1aVpbuaZ1gQKeTzBMd1k5A0MIGVjKFIKH2%2BPUkOF5ajXghHnU3ohoCy4MVHylIY%2BC%2F81YQtXk%2Bvdk6GrTemr6%2FCI%2FKjFO2vihdA1kdxq%2FV3Ab0NzdULpGC9%2BOAfEYK0Q%2FrPWhHBPvDc1aVzo6vNts8gX%2FhpChs5aQu5HhALIfbe%2BPAg89wbrMGsX6QMa0KhOqMiwd5XOXlQsuMcowfi2YBOqty5uua0oXo6yFnpZgWOneRp4towR0NsgCgBoeErGeaMZ3ceoE%2FHrtZvepvo7XUpCEaGUtJZeN%2F%2FcneAbKPV%2BjP4SB3ICIOYcloT1K1Axdp%2FJ%2FS5QComB%2F%2F1ljTb9FfLQaxpMPaQrsQGOqUBzDzRXM9TqGvOokKxQknQXQ4eSh0H%2F4pQiEKkKdPHTrmoxYJe7Jy1JqvSeiPb956LxyusG9M9CUOWEwXrKiiu7jGJixUHuDHBlSQ48Fj0ZXYHQcGrmWfNMjSH57bILQJSxvEMx95JpL9HXGNKhu8%2BE9MAzvCfgLPEvn%2FrAuKfBkmMoXwqqj%2BAoyNHAOay1n1IRTt2dPHoAzoYHoRrcZHnEFc9vlWm&X-Amz-Signature=44e80946e2efc9f04bc5d027b18de64637614dfbefb3f7a9d7629fc0b24dde32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WF6QX7H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54cXoHp9KVJWxuqg%2FO7%2BM%2FI0dfdZK3AVHCfypVNfgSAIgLyPySfa7IP%2BUKOMih9uvM8PF8zI%2FMug0kDwopM6onukqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgJgZDs4jtid%2FlD5SrcA%2BiV6PEt1T9fmft%2BIn5U883k3XHQSgYyNY1ERN1Q5RbRurQ7HcayS6TiN7SirUIWQufPZK%2BEpxb%2FX5XXy5Za0A00wuyLmQKy6gjThxtv%2Bs72%2BAefzlletvLT2%2BXjwuf%2FYHNHEm1NUNOJZkerWY9M0m4iviHqEsreH%2FirVI50RsfBnYQ%2FJFdODlNYp10988llCAtQoukkA7KBZKsLIaTP4wVKX5HOq1Hd410myCn4IcvC2GV2XTg3Y5CTm6OATRmoq6aclpzmgXn%2FwBOkVl7Hxg0xfupqgH1TA1aVpbuaZ1gQKeTzBMd1k5A0MIGVjKFIKH2%2BPUkOF5ajXghHnU3ohoCy4MVHylIY%2BC%2F81YQtXk%2Bvdk6GrTemr6%2FCI%2FKjFO2vihdA1kdxq%2FV3Ab0NzdULpGC9%2BOAfEYK0Q%2FrPWhHBPvDc1aVzo6vNts8gX%2FhpChs5aQu5HhALIfbe%2BPAg89wbrMGsX6QMa0KhOqMiwd5XOXlQsuMcowfi2YBOqty5uua0oXo6yFnpZgWOneRp4towR0NsgCgBoeErGeaMZ3ceoE%2FHrtZvepvo7XUpCEaGUtJZeN%2F%2FcneAbKPV%2BjP4SB3ICIOYcloT1K1Axdp%2FJ%2FS5QComB%2F%2F1ljTb9FfLQaxpMPaQrsQGOqUBzDzRXM9TqGvOokKxQknQXQ4eSh0H%2F4pQiEKkKdPHTrmoxYJe7Jy1JqvSeiPb956LxyusG9M9CUOWEwXrKiiu7jGJixUHuDHBlSQ48Fj0ZXYHQcGrmWfNMjSH57bILQJSxvEMx95JpL9HXGNKhu8%2BE9MAzvCfgLPEvn%2FrAuKfBkmMoXwqqj%2BAoyNHAOay1n1IRTt2dPHoAzoYHoRrcZHnEFc9vlWm&X-Amz-Signature=d56833b59cf2fee42a29a1554a82f217144c72947981f69aa088ef0d8dab171c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WF6QX7H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54cXoHp9KVJWxuqg%2FO7%2BM%2FI0dfdZK3AVHCfypVNfgSAIgLyPySfa7IP%2BUKOMih9uvM8PF8zI%2FMug0kDwopM6onukqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgJgZDs4jtid%2FlD5SrcA%2BiV6PEt1T9fmft%2BIn5U883k3XHQSgYyNY1ERN1Q5RbRurQ7HcayS6TiN7SirUIWQufPZK%2BEpxb%2FX5XXy5Za0A00wuyLmQKy6gjThxtv%2Bs72%2BAefzlletvLT2%2BXjwuf%2FYHNHEm1NUNOJZkerWY9M0m4iviHqEsreH%2FirVI50RsfBnYQ%2FJFdODlNYp10988llCAtQoukkA7KBZKsLIaTP4wVKX5HOq1Hd410myCn4IcvC2GV2XTg3Y5CTm6OATRmoq6aclpzmgXn%2FwBOkVl7Hxg0xfupqgH1TA1aVpbuaZ1gQKeTzBMd1k5A0MIGVjKFIKH2%2BPUkOF5ajXghHnU3ohoCy4MVHylIY%2BC%2F81YQtXk%2Bvdk6GrTemr6%2FCI%2FKjFO2vihdA1kdxq%2FV3Ab0NzdULpGC9%2BOAfEYK0Q%2FrPWhHBPvDc1aVzo6vNts8gX%2FhpChs5aQu5HhALIfbe%2BPAg89wbrMGsX6QMa0KhOqMiwd5XOXlQsuMcowfi2YBOqty5uua0oXo6yFnpZgWOneRp4towR0NsgCgBoeErGeaMZ3ceoE%2FHrtZvepvo7XUpCEaGUtJZeN%2F%2FcneAbKPV%2BjP4SB3ICIOYcloT1K1Axdp%2FJ%2FS5QComB%2F%2F1ljTb9FfLQaxpMPaQrsQGOqUBzDzRXM9TqGvOokKxQknQXQ4eSh0H%2F4pQiEKkKdPHTrmoxYJe7Jy1JqvSeiPb956LxyusG9M9CUOWEwXrKiiu7jGJixUHuDHBlSQ48Fj0ZXYHQcGrmWfNMjSH57bILQJSxvEMx95JpL9HXGNKhu8%2BE9MAzvCfgLPEvn%2FrAuKfBkmMoXwqqj%2BAoyNHAOay1n1IRTt2dPHoAzoYHoRrcZHnEFc9vlWm&X-Amz-Signature=c4584b75ed91015b1b147474979ec9c62847a3126a810dccc5f1624d6dd95234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WF6QX7H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54cXoHp9KVJWxuqg%2FO7%2BM%2FI0dfdZK3AVHCfypVNfgSAIgLyPySfa7IP%2BUKOMih9uvM8PF8zI%2FMug0kDwopM6onukqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgJgZDs4jtid%2FlD5SrcA%2BiV6PEt1T9fmft%2BIn5U883k3XHQSgYyNY1ERN1Q5RbRurQ7HcayS6TiN7SirUIWQufPZK%2BEpxb%2FX5XXy5Za0A00wuyLmQKy6gjThxtv%2Bs72%2BAefzlletvLT2%2BXjwuf%2FYHNHEm1NUNOJZkerWY9M0m4iviHqEsreH%2FirVI50RsfBnYQ%2FJFdODlNYp10988llCAtQoukkA7KBZKsLIaTP4wVKX5HOq1Hd410myCn4IcvC2GV2XTg3Y5CTm6OATRmoq6aclpzmgXn%2FwBOkVl7Hxg0xfupqgH1TA1aVpbuaZ1gQKeTzBMd1k5A0MIGVjKFIKH2%2BPUkOF5ajXghHnU3ohoCy4MVHylIY%2BC%2F81YQtXk%2Bvdk6GrTemr6%2FCI%2FKjFO2vihdA1kdxq%2FV3Ab0NzdULpGC9%2BOAfEYK0Q%2FrPWhHBPvDc1aVzo6vNts8gX%2FhpChs5aQu5HhALIfbe%2BPAg89wbrMGsX6QMa0KhOqMiwd5XOXlQsuMcowfi2YBOqty5uua0oXo6yFnpZgWOneRp4towR0NsgCgBoeErGeaMZ3ceoE%2FHrtZvepvo7XUpCEaGUtJZeN%2F%2FcneAbKPV%2BjP4SB3ICIOYcloT1K1Axdp%2FJ%2FS5QComB%2F%2F1ljTb9FfLQaxpMPaQrsQGOqUBzDzRXM9TqGvOokKxQknQXQ4eSh0H%2F4pQiEKkKdPHTrmoxYJe7Jy1JqvSeiPb956LxyusG9M9CUOWEwXrKiiu7jGJixUHuDHBlSQ48Fj0ZXYHQcGrmWfNMjSH57bILQJSxvEMx95JpL9HXGNKhu8%2BE9MAzvCfgLPEvn%2FrAuKfBkmMoXwqqj%2BAoyNHAOay1n1IRTt2dPHoAzoYHoRrcZHnEFc9vlWm&X-Amz-Signature=cc2c4956d2e18eab4cb8e5c7d387a1478c5220a4396e049f46c5a1e94d8d1fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WF6QX7H%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD54cXoHp9KVJWxuqg%2FO7%2BM%2FI0dfdZK3AVHCfypVNfgSAIgLyPySfa7IP%2BUKOMih9uvM8PF8zI%2FMug0kDwopM6onukqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMgJgZDs4jtid%2FlD5SrcA%2BiV6PEt1T9fmft%2BIn5U883k3XHQSgYyNY1ERN1Q5RbRurQ7HcayS6TiN7SirUIWQufPZK%2BEpxb%2FX5XXy5Za0A00wuyLmQKy6gjThxtv%2Bs72%2BAefzlletvLT2%2BXjwuf%2FYHNHEm1NUNOJZkerWY9M0m4iviHqEsreH%2FirVI50RsfBnYQ%2FJFdODlNYp10988llCAtQoukkA7KBZKsLIaTP4wVKX5HOq1Hd410myCn4IcvC2GV2XTg3Y5CTm6OATRmoq6aclpzmgXn%2FwBOkVl7Hxg0xfupqgH1TA1aVpbuaZ1gQKeTzBMd1k5A0MIGVjKFIKH2%2BPUkOF5ajXghHnU3ohoCy4MVHylIY%2BC%2F81YQtXk%2Bvdk6GrTemr6%2FCI%2FKjFO2vihdA1kdxq%2FV3Ab0NzdULpGC9%2BOAfEYK0Q%2FrPWhHBPvDc1aVzo6vNts8gX%2FhpChs5aQu5HhALIfbe%2BPAg89wbrMGsX6QMa0KhOqMiwd5XOXlQsuMcowfi2YBOqty5uua0oXo6yFnpZgWOneRp4towR0NsgCgBoeErGeaMZ3ceoE%2FHrtZvepvo7XUpCEaGUtJZeN%2F%2FcneAbKPV%2BjP4SB3ICIOYcloT1K1Axdp%2FJ%2FS5QComB%2F%2F1ljTb9FfLQaxpMPaQrsQGOqUBzDzRXM9TqGvOokKxQknQXQ4eSh0H%2F4pQiEKkKdPHTrmoxYJe7Jy1JqvSeiPb956LxyusG9M9CUOWEwXrKiiu7jGJixUHuDHBlSQ48Fj0ZXYHQcGrmWfNMjSH57bILQJSxvEMx95JpL9HXGNKhu8%2BE9MAzvCfgLPEvn%2FrAuKfBkmMoXwqqj%2BAoyNHAOay1n1IRTt2dPHoAzoYHoRrcZHnEFc9vlWm&X-Amz-Signature=5dedd55335d6d6a0831262091a2924a2fb794e525272cd0754f505ff9135da57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
