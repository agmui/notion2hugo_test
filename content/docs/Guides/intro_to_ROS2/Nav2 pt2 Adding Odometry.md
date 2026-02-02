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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZ54B2J%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG66VNGginHYmc0WLWNJgcNHIZIU%2Bbl1rxmdylj6r2MKAiAL6fa%2B7voJ4RElHmVHTudWbYVm5jgoxGiSR6SQ7hImxyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5PM5bjIRaRgb53MKtwD1Qh1HHUX1XThbu%2FkDXNC797X%2BtHrPOwvT2T%2B%2BwuyeaA4w2Z9tbMERuZy5QWeM%2B7Bka6S42bQ2qBxL5NG0FmCCdEDNF3p%2BKut3lFObOoFv14lYd2EuIUSjiYFd0HK2hrtib26%2FNhaxFoKOyjM%2BRZkKFddfmusUGcO3UO2s%2FZXFY5sGZ%2Fs%2BPGgzB6JATt4zod0BMin%2B6WAqS6evAYTr9GXGJj2pKL9oTtlWVlpGogrcPerMojotvnKYAMfRC0a7T04WDtHucv2YhCFnsplcal99v0GSKwp3dc6Lb67vZ%2BGAxebWapZ5HOlXAZmo%2Bw3cOYsIAGiqOpSE7x%2BNTxVXbETrTYTUzkxwTD0qPz071L87c81A4oPDPB9%2Blesye21xS7veXCrG1uuT8nSDZI3X3JpT%2Bt%2FChA1SAzlTWQmHe5YtCRucLHVP01gohpxH%2FpYBLYsI9kR9TOnSzRFUiPvFdtAXKO86%2Bl1Zt3QdlzrLbcm1kfCRbkIXlbJpVtJbzSBsGbCzJXxgAE08NsgoBv1BXb3XOiAhu%2FZEHShiC0118Y%2FLQ6ZW%2FoH2FBs0nX25i1a3TMvV%2Fk0KtjuAKpCuBSwhyQNPkw7FQjEbV6%2BF6Ko%2B4dDsQwhVMeUl%2B0Kwiijk3cw4IeAzAY6pgGwhsw1yVm%2F%2BGCnKrrjglNGnHDpgvM2EJbsHYaY0vg9k0C8wDR5TqoqpkYrXc5MuZ%2Feb1toaD8pWNtWA6I8mIW8lrpyZFuGG1JaT8HUUl78hypXsBSIEMCbYI0AJyyHVwQyxS8soOUVl2h%2FnoOifu66hKoi1NFAXsRPeyY3zJualCi%2BAAMQHOWzg3Tmn%2FbLTxn9BHKr5vMEE0YfYTpQPom7M5fg%2FvQd&X-Amz-Signature=f7773ead52220c671611a099e9570a7a9f56fa1eb63926d97736396e6d6982ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZ54B2J%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG66VNGginHYmc0WLWNJgcNHIZIU%2Bbl1rxmdylj6r2MKAiAL6fa%2B7voJ4RElHmVHTudWbYVm5jgoxGiSR6SQ7hImxyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5PM5bjIRaRgb53MKtwD1Qh1HHUX1XThbu%2FkDXNC797X%2BtHrPOwvT2T%2B%2BwuyeaA4w2Z9tbMERuZy5QWeM%2B7Bka6S42bQ2qBxL5NG0FmCCdEDNF3p%2BKut3lFObOoFv14lYd2EuIUSjiYFd0HK2hrtib26%2FNhaxFoKOyjM%2BRZkKFddfmusUGcO3UO2s%2FZXFY5sGZ%2Fs%2BPGgzB6JATt4zod0BMin%2B6WAqS6evAYTr9GXGJj2pKL9oTtlWVlpGogrcPerMojotvnKYAMfRC0a7T04WDtHucv2YhCFnsplcal99v0GSKwp3dc6Lb67vZ%2BGAxebWapZ5HOlXAZmo%2Bw3cOYsIAGiqOpSE7x%2BNTxVXbETrTYTUzkxwTD0qPz071L87c81A4oPDPB9%2Blesye21xS7veXCrG1uuT8nSDZI3X3JpT%2Bt%2FChA1SAzlTWQmHe5YtCRucLHVP01gohpxH%2FpYBLYsI9kR9TOnSzRFUiPvFdtAXKO86%2Bl1Zt3QdlzrLbcm1kfCRbkIXlbJpVtJbzSBsGbCzJXxgAE08NsgoBv1BXb3XOiAhu%2FZEHShiC0118Y%2FLQ6ZW%2FoH2FBs0nX25i1a3TMvV%2Fk0KtjuAKpCuBSwhyQNPkw7FQjEbV6%2BF6Ko%2B4dDsQwhVMeUl%2B0Kwiijk3cw4IeAzAY6pgGwhsw1yVm%2F%2BGCnKrrjglNGnHDpgvM2EJbsHYaY0vg9k0C8wDR5TqoqpkYrXc5MuZ%2Feb1toaD8pWNtWA6I8mIW8lrpyZFuGG1JaT8HUUl78hypXsBSIEMCbYI0AJyyHVwQyxS8soOUVl2h%2FnoOifu66hKoi1NFAXsRPeyY3zJualCi%2BAAMQHOWzg3Tmn%2FbLTxn9BHKr5vMEE0YfYTpQPom7M5fg%2FvQd&X-Amz-Signature=96409f9b7dc294aedfd2342ff2f0be3518cce970982df84f42dac6adcf5dcb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZ54B2J%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG66VNGginHYmc0WLWNJgcNHIZIU%2Bbl1rxmdylj6r2MKAiAL6fa%2B7voJ4RElHmVHTudWbYVm5jgoxGiSR6SQ7hImxyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5PM5bjIRaRgb53MKtwD1Qh1HHUX1XThbu%2FkDXNC797X%2BtHrPOwvT2T%2B%2BwuyeaA4w2Z9tbMERuZy5QWeM%2B7Bka6S42bQ2qBxL5NG0FmCCdEDNF3p%2BKut3lFObOoFv14lYd2EuIUSjiYFd0HK2hrtib26%2FNhaxFoKOyjM%2BRZkKFddfmusUGcO3UO2s%2FZXFY5sGZ%2Fs%2BPGgzB6JATt4zod0BMin%2B6WAqS6evAYTr9GXGJj2pKL9oTtlWVlpGogrcPerMojotvnKYAMfRC0a7T04WDtHucv2YhCFnsplcal99v0GSKwp3dc6Lb67vZ%2BGAxebWapZ5HOlXAZmo%2Bw3cOYsIAGiqOpSE7x%2BNTxVXbETrTYTUzkxwTD0qPz071L87c81A4oPDPB9%2Blesye21xS7veXCrG1uuT8nSDZI3X3JpT%2Bt%2FChA1SAzlTWQmHe5YtCRucLHVP01gohpxH%2FpYBLYsI9kR9TOnSzRFUiPvFdtAXKO86%2Bl1Zt3QdlzrLbcm1kfCRbkIXlbJpVtJbzSBsGbCzJXxgAE08NsgoBv1BXb3XOiAhu%2FZEHShiC0118Y%2FLQ6ZW%2FoH2FBs0nX25i1a3TMvV%2Fk0KtjuAKpCuBSwhyQNPkw7FQjEbV6%2BF6Ko%2B4dDsQwhVMeUl%2B0Kwiijk3cw4IeAzAY6pgGwhsw1yVm%2F%2BGCnKrrjglNGnHDpgvM2EJbsHYaY0vg9k0C8wDR5TqoqpkYrXc5MuZ%2Feb1toaD8pWNtWA6I8mIW8lrpyZFuGG1JaT8HUUl78hypXsBSIEMCbYI0AJyyHVwQyxS8soOUVl2h%2FnoOifu66hKoi1NFAXsRPeyY3zJualCi%2BAAMQHOWzg3Tmn%2FbLTxn9BHKr5vMEE0YfYTpQPom7M5fg%2FvQd&X-Amz-Signature=3a82fd98fb32c685c5c85fde8acef2d1e615980c3a8b90f201dd9022a8656661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZ54B2J%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG66VNGginHYmc0WLWNJgcNHIZIU%2Bbl1rxmdylj6r2MKAiAL6fa%2B7voJ4RElHmVHTudWbYVm5jgoxGiSR6SQ7hImxyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5PM5bjIRaRgb53MKtwD1Qh1HHUX1XThbu%2FkDXNC797X%2BtHrPOwvT2T%2B%2BwuyeaA4w2Z9tbMERuZy5QWeM%2B7Bka6S42bQ2qBxL5NG0FmCCdEDNF3p%2BKut3lFObOoFv14lYd2EuIUSjiYFd0HK2hrtib26%2FNhaxFoKOyjM%2BRZkKFddfmusUGcO3UO2s%2FZXFY5sGZ%2Fs%2BPGgzB6JATt4zod0BMin%2B6WAqS6evAYTr9GXGJj2pKL9oTtlWVlpGogrcPerMojotvnKYAMfRC0a7T04WDtHucv2YhCFnsplcal99v0GSKwp3dc6Lb67vZ%2BGAxebWapZ5HOlXAZmo%2Bw3cOYsIAGiqOpSE7x%2BNTxVXbETrTYTUzkxwTD0qPz071L87c81A4oPDPB9%2Blesye21xS7veXCrG1uuT8nSDZI3X3JpT%2Bt%2FChA1SAzlTWQmHe5YtCRucLHVP01gohpxH%2FpYBLYsI9kR9TOnSzRFUiPvFdtAXKO86%2Bl1Zt3QdlzrLbcm1kfCRbkIXlbJpVtJbzSBsGbCzJXxgAE08NsgoBv1BXb3XOiAhu%2FZEHShiC0118Y%2FLQ6ZW%2FoH2FBs0nX25i1a3TMvV%2Fk0KtjuAKpCuBSwhyQNPkw7FQjEbV6%2BF6Ko%2B4dDsQwhVMeUl%2B0Kwiijk3cw4IeAzAY6pgGwhsw1yVm%2F%2BGCnKrrjglNGnHDpgvM2EJbsHYaY0vg9k0C8wDR5TqoqpkYrXc5MuZ%2Feb1toaD8pWNtWA6I8mIW8lrpyZFuGG1JaT8HUUl78hypXsBSIEMCbYI0AJyyHVwQyxS8soOUVl2h%2FnoOifu66hKoi1NFAXsRPeyY3zJualCi%2BAAMQHOWzg3Tmn%2FbLTxn9BHKr5vMEE0YfYTpQPom7M5fg%2FvQd&X-Amz-Signature=e64cf0fe0b4f77e3ae5c8ab341335ec3b69888bc567411841352c2274a962f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZ54B2J%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG66VNGginHYmc0WLWNJgcNHIZIU%2Bbl1rxmdylj6r2MKAiAL6fa%2B7voJ4RElHmVHTudWbYVm5jgoxGiSR6SQ7hImxyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5PM5bjIRaRgb53MKtwD1Qh1HHUX1XThbu%2FkDXNC797X%2BtHrPOwvT2T%2B%2BwuyeaA4w2Z9tbMERuZy5QWeM%2B7Bka6S42bQ2qBxL5NG0FmCCdEDNF3p%2BKut3lFObOoFv14lYd2EuIUSjiYFd0HK2hrtib26%2FNhaxFoKOyjM%2BRZkKFddfmusUGcO3UO2s%2FZXFY5sGZ%2Fs%2BPGgzB6JATt4zod0BMin%2B6WAqS6evAYTr9GXGJj2pKL9oTtlWVlpGogrcPerMojotvnKYAMfRC0a7T04WDtHucv2YhCFnsplcal99v0GSKwp3dc6Lb67vZ%2BGAxebWapZ5HOlXAZmo%2Bw3cOYsIAGiqOpSE7x%2BNTxVXbETrTYTUzkxwTD0qPz071L87c81A4oPDPB9%2Blesye21xS7veXCrG1uuT8nSDZI3X3JpT%2Bt%2FChA1SAzlTWQmHe5YtCRucLHVP01gohpxH%2FpYBLYsI9kR9TOnSzRFUiPvFdtAXKO86%2Bl1Zt3QdlzrLbcm1kfCRbkIXlbJpVtJbzSBsGbCzJXxgAE08NsgoBv1BXb3XOiAhu%2FZEHShiC0118Y%2FLQ6ZW%2FoH2FBs0nX25i1a3TMvV%2Fk0KtjuAKpCuBSwhyQNPkw7FQjEbV6%2BF6Ko%2B4dDsQwhVMeUl%2B0Kwiijk3cw4IeAzAY6pgGwhsw1yVm%2F%2BGCnKrrjglNGnHDpgvM2EJbsHYaY0vg9k0C8wDR5TqoqpkYrXc5MuZ%2Feb1toaD8pWNtWA6I8mIW8lrpyZFuGG1JaT8HUUl78hypXsBSIEMCbYI0AJyyHVwQyxS8soOUVl2h%2FnoOifu66hKoi1NFAXsRPeyY3zJualCi%2BAAMQHOWzg3Tmn%2FbLTxn9BHKr5vMEE0YfYTpQPom7M5fg%2FvQd&X-Amz-Signature=6508180a695bae3ef63a0a80ab47a2c7f04e6f3062860f24641cfebde923f391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZ54B2J%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG66VNGginHYmc0WLWNJgcNHIZIU%2Bbl1rxmdylj6r2MKAiAL6fa%2B7voJ4RElHmVHTudWbYVm5jgoxGiSR6SQ7hImxyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5PM5bjIRaRgb53MKtwD1Qh1HHUX1XThbu%2FkDXNC797X%2BtHrPOwvT2T%2B%2BwuyeaA4w2Z9tbMERuZy5QWeM%2B7Bka6S42bQ2qBxL5NG0FmCCdEDNF3p%2BKut3lFObOoFv14lYd2EuIUSjiYFd0HK2hrtib26%2FNhaxFoKOyjM%2BRZkKFddfmusUGcO3UO2s%2FZXFY5sGZ%2Fs%2BPGgzB6JATt4zod0BMin%2B6WAqS6evAYTr9GXGJj2pKL9oTtlWVlpGogrcPerMojotvnKYAMfRC0a7T04WDtHucv2YhCFnsplcal99v0GSKwp3dc6Lb67vZ%2BGAxebWapZ5HOlXAZmo%2Bw3cOYsIAGiqOpSE7x%2BNTxVXbETrTYTUzkxwTD0qPz071L87c81A4oPDPB9%2Blesye21xS7veXCrG1uuT8nSDZI3X3JpT%2Bt%2FChA1SAzlTWQmHe5YtCRucLHVP01gohpxH%2FpYBLYsI9kR9TOnSzRFUiPvFdtAXKO86%2Bl1Zt3QdlzrLbcm1kfCRbkIXlbJpVtJbzSBsGbCzJXxgAE08NsgoBv1BXb3XOiAhu%2FZEHShiC0118Y%2FLQ6ZW%2FoH2FBs0nX25i1a3TMvV%2Fk0KtjuAKpCuBSwhyQNPkw7FQjEbV6%2BF6Ko%2B4dDsQwhVMeUl%2B0Kwiijk3cw4IeAzAY6pgGwhsw1yVm%2F%2BGCnKrrjglNGnHDpgvM2EJbsHYaY0vg9k0C8wDR5TqoqpkYrXc5MuZ%2Feb1toaD8pWNtWA6I8mIW8lrpyZFuGG1JaT8HUUl78hypXsBSIEMCbYI0AJyyHVwQyxS8soOUVl2h%2FnoOifu66hKoi1NFAXsRPeyY3zJualCi%2BAAMQHOWzg3Tmn%2FbLTxn9BHKr5vMEE0YfYTpQPom7M5fg%2FvQd&X-Amz-Signature=8df2cf58edfcb648d1cc78d83bdd93b33a987baa8f3707a1c70353f4c72967ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZ54B2J%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG66VNGginHYmc0WLWNJgcNHIZIU%2Bbl1rxmdylj6r2MKAiAL6fa%2B7voJ4RElHmVHTudWbYVm5jgoxGiSR6SQ7hImxyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5PM5bjIRaRgb53MKtwD1Qh1HHUX1XThbu%2FkDXNC797X%2BtHrPOwvT2T%2B%2BwuyeaA4w2Z9tbMERuZy5QWeM%2B7Bka6S42bQ2qBxL5NG0FmCCdEDNF3p%2BKut3lFObOoFv14lYd2EuIUSjiYFd0HK2hrtib26%2FNhaxFoKOyjM%2BRZkKFddfmusUGcO3UO2s%2FZXFY5sGZ%2Fs%2BPGgzB6JATt4zod0BMin%2B6WAqS6evAYTr9GXGJj2pKL9oTtlWVlpGogrcPerMojotvnKYAMfRC0a7T04WDtHucv2YhCFnsplcal99v0GSKwp3dc6Lb67vZ%2BGAxebWapZ5HOlXAZmo%2Bw3cOYsIAGiqOpSE7x%2BNTxVXbETrTYTUzkxwTD0qPz071L87c81A4oPDPB9%2Blesye21xS7veXCrG1uuT8nSDZI3X3JpT%2Bt%2FChA1SAzlTWQmHe5YtCRucLHVP01gohpxH%2FpYBLYsI9kR9TOnSzRFUiPvFdtAXKO86%2Bl1Zt3QdlzrLbcm1kfCRbkIXlbJpVtJbzSBsGbCzJXxgAE08NsgoBv1BXb3XOiAhu%2FZEHShiC0118Y%2FLQ6ZW%2FoH2FBs0nX25i1a3TMvV%2Fk0KtjuAKpCuBSwhyQNPkw7FQjEbV6%2BF6Ko%2B4dDsQwhVMeUl%2B0Kwiijk3cw4IeAzAY6pgGwhsw1yVm%2F%2BGCnKrrjglNGnHDpgvM2EJbsHYaY0vg9k0C8wDR5TqoqpkYrXc5MuZ%2Feb1toaD8pWNtWA6I8mIW8lrpyZFuGG1JaT8HUUl78hypXsBSIEMCbYI0AJyyHVwQyxS8soOUVl2h%2FnoOifu66hKoi1NFAXsRPeyY3zJualCi%2BAAMQHOWzg3Tmn%2FbLTxn9BHKr5vMEE0YfYTpQPom7M5fg%2FvQd&X-Amz-Signature=8bf79d7eb6f93bcbe8bae0aeaded3b81e9fa0e36f005cdd7eb8575b5d20fb5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZ54B2J%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG66VNGginHYmc0WLWNJgcNHIZIU%2Bbl1rxmdylj6r2MKAiAL6fa%2B7voJ4RElHmVHTudWbYVm5jgoxGiSR6SQ7hImxyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5PM5bjIRaRgb53MKtwD1Qh1HHUX1XThbu%2FkDXNC797X%2BtHrPOwvT2T%2B%2BwuyeaA4w2Z9tbMERuZy5QWeM%2B7Bka6S42bQ2qBxL5NG0FmCCdEDNF3p%2BKut3lFObOoFv14lYd2EuIUSjiYFd0HK2hrtib26%2FNhaxFoKOyjM%2BRZkKFddfmusUGcO3UO2s%2FZXFY5sGZ%2Fs%2BPGgzB6JATt4zod0BMin%2B6WAqS6evAYTr9GXGJj2pKL9oTtlWVlpGogrcPerMojotvnKYAMfRC0a7T04WDtHucv2YhCFnsplcal99v0GSKwp3dc6Lb67vZ%2BGAxebWapZ5HOlXAZmo%2Bw3cOYsIAGiqOpSE7x%2BNTxVXbETrTYTUzkxwTD0qPz071L87c81A4oPDPB9%2Blesye21xS7veXCrG1uuT8nSDZI3X3JpT%2Bt%2FChA1SAzlTWQmHe5YtCRucLHVP01gohpxH%2FpYBLYsI9kR9TOnSzRFUiPvFdtAXKO86%2Bl1Zt3QdlzrLbcm1kfCRbkIXlbJpVtJbzSBsGbCzJXxgAE08NsgoBv1BXb3XOiAhu%2FZEHShiC0118Y%2FLQ6ZW%2FoH2FBs0nX25i1a3TMvV%2Fk0KtjuAKpCuBSwhyQNPkw7FQjEbV6%2BF6Ko%2B4dDsQwhVMeUl%2B0Kwiijk3cw4IeAzAY6pgGwhsw1yVm%2F%2BGCnKrrjglNGnHDpgvM2EJbsHYaY0vg9k0C8wDR5TqoqpkYrXc5MuZ%2Feb1toaD8pWNtWA6I8mIW8lrpyZFuGG1JaT8HUUl78hypXsBSIEMCbYI0AJyyHVwQyxS8soOUVl2h%2FnoOifu66hKoi1NFAXsRPeyY3zJualCi%2BAAMQHOWzg3Tmn%2FbLTxn9BHKr5vMEE0YfYTpQPom7M5fg%2FvQd&X-Amz-Signature=043a9d21b8f6671b420979dc954430a3b785b459a9bff6592678deb5718d16d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZ54B2J%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG66VNGginHYmc0WLWNJgcNHIZIU%2Bbl1rxmdylj6r2MKAiAL6fa%2B7voJ4RElHmVHTudWbYVm5jgoxGiSR6SQ7hImxyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5PM5bjIRaRgb53MKtwD1Qh1HHUX1XThbu%2FkDXNC797X%2BtHrPOwvT2T%2B%2BwuyeaA4w2Z9tbMERuZy5QWeM%2B7Bka6S42bQ2qBxL5NG0FmCCdEDNF3p%2BKut3lFObOoFv14lYd2EuIUSjiYFd0HK2hrtib26%2FNhaxFoKOyjM%2BRZkKFddfmusUGcO3UO2s%2FZXFY5sGZ%2Fs%2BPGgzB6JATt4zod0BMin%2B6WAqS6evAYTr9GXGJj2pKL9oTtlWVlpGogrcPerMojotvnKYAMfRC0a7T04WDtHucv2YhCFnsplcal99v0GSKwp3dc6Lb67vZ%2BGAxebWapZ5HOlXAZmo%2Bw3cOYsIAGiqOpSE7x%2BNTxVXbETrTYTUzkxwTD0qPz071L87c81A4oPDPB9%2Blesye21xS7veXCrG1uuT8nSDZI3X3JpT%2Bt%2FChA1SAzlTWQmHe5YtCRucLHVP01gohpxH%2FpYBLYsI9kR9TOnSzRFUiPvFdtAXKO86%2Bl1Zt3QdlzrLbcm1kfCRbkIXlbJpVtJbzSBsGbCzJXxgAE08NsgoBv1BXb3XOiAhu%2FZEHShiC0118Y%2FLQ6ZW%2FoH2FBs0nX25i1a3TMvV%2Fk0KtjuAKpCuBSwhyQNPkw7FQjEbV6%2BF6Ko%2B4dDsQwhVMeUl%2B0Kwiijk3cw4IeAzAY6pgGwhsw1yVm%2F%2BGCnKrrjglNGnHDpgvM2EJbsHYaY0vg9k0C8wDR5TqoqpkYrXc5MuZ%2Feb1toaD8pWNtWA6I8mIW8lrpyZFuGG1JaT8HUUl78hypXsBSIEMCbYI0AJyyHVwQyxS8soOUVl2h%2FnoOifu66hKoi1NFAXsRPeyY3zJualCi%2BAAMQHOWzg3Tmn%2FbLTxn9BHKr5vMEE0YfYTpQPom7M5fg%2FvQd&X-Amz-Signature=43d3718505a9bd0fa07626bb3c82e1119338cd54342bc3f17782b2e2481681c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZ54B2J%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIG66VNGginHYmc0WLWNJgcNHIZIU%2Bbl1rxmdylj6r2MKAiAL6fa%2B7voJ4RElHmVHTudWbYVm5jgoxGiSR6SQ7hImxyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw5PM5bjIRaRgb53MKtwD1Qh1HHUX1XThbu%2FkDXNC797X%2BtHrPOwvT2T%2B%2BwuyeaA4w2Z9tbMERuZy5QWeM%2B7Bka6S42bQ2qBxL5NG0FmCCdEDNF3p%2BKut3lFObOoFv14lYd2EuIUSjiYFd0HK2hrtib26%2FNhaxFoKOyjM%2BRZkKFddfmusUGcO3UO2s%2FZXFY5sGZ%2Fs%2BPGgzB6JATt4zod0BMin%2B6WAqS6evAYTr9GXGJj2pKL9oTtlWVlpGogrcPerMojotvnKYAMfRC0a7T04WDtHucv2YhCFnsplcal99v0GSKwp3dc6Lb67vZ%2BGAxebWapZ5HOlXAZmo%2Bw3cOYsIAGiqOpSE7x%2BNTxVXbETrTYTUzkxwTD0qPz071L87c81A4oPDPB9%2Blesye21xS7veXCrG1uuT8nSDZI3X3JpT%2Bt%2FChA1SAzlTWQmHe5YtCRucLHVP01gohpxH%2FpYBLYsI9kR9TOnSzRFUiPvFdtAXKO86%2Bl1Zt3QdlzrLbcm1kfCRbkIXlbJpVtJbzSBsGbCzJXxgAE08NsgoBv1BXb3XOiAhu%2FZEHShiC0118Y%2FLQ6ZW%2FoH2FBs0nX25i1a3TMvV%2Fk0KtjuAKpCuBSwhyQNPkw7FQjEbV6%2BF6Ko%2B4dDsQwhVMeUl%2B0Kwiijk3cw4IeAzAY6pgGwhsw1yVm%2F%2BGCnKrrjglNGnHDpgvM2EJbsHYaY0vg9k0C8wDR5TqoqpkYrXc5MuZ%2Feb1toaD8pWNtWA6I8mIW8lrpyZFuGG1JaT8HUUl78hypXsBSIEMCbYI0AJyyHVwQyxS8soOUVl2h%2FnoOifu66hKoi1NFAXsRPeyY3zJualCi%2BAAMQHOWzg3Tmn%2FbLTxn9BHKr5vMEE0YfYTpQPom7M5fg%2FvQd&X-Amz-Signature=c87fe8eec852039cb80ae38488a662cb84b6d44b7c61fb94e614729c9c4474ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T6UWXER%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDDpc4Me8DmJ1dHJwvfcCB%2BBjwtQHD89995vnv86FXqXwIgYZe1q1NDKZ0GuW%2FsEkUO9M6SqSaM3Rz6QHDbcBnSx50qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYm%2FNHagilJ3cl6ZSrcA4Q1sDe0xEywYrgjWOnFYd27G3k4wJ8w%2Bp4rkB5eA0oHyr8wZANEgMqT2Jc6Fb%2BucdQ0rVo1RKE%2Brtx9Q1od%2FpLbysgnTR68elbPNCOXcbtTAZkMFhv0iNNI4gyb%2FGwfR2ZTBY582r5M%2BEYM7Lnk1%2BQFtK1XzgEkGkgA%2Bhsy9T50m2OeA1Sshytd66TDAhmSBwFnj9naMImz%2FTAOHOH969uG2dHPoy7DH0kmEwQaAPXQxhDU%2F97ddZlvPBQrkFUel%2FieZMwgYMXtBKNs%2Fe2HrY5gwIFLk30%2FneTa6yTT%2FDKYxfxZGTQ93YsHMPC3gQD7LJv%2BzuNvN%2BmNjZuN%2Fp9jWvA%2Bku829hE3AYMvqKoAMGnD7O9Gw2lxxf0hR8fUfA3l0%2Bm9y4pQKlqJJQY99gaB%2FvykwXtI4UjKGa3JMbvoEyxSa%2BwRU%2BIUAxCLpzEZeu3S3Y%2FbGpRlgWb9aQgp4%2BcBPEjcJ1v0qUa7NiMolJmOFOchJxz90mgfJyS5JZhAl3fnthICRlStUnt%2FguyzvHedZRB6%2FSTfeF3dwh2Fy0iDSNVYkt%2BmJyEx9%2BMofqffmyV5kHk0AL%2BbY7XoBrduCk8CBHLDyMrN%2F0KnD4%2Bk9sFNpmPUgTl4fvICX%2BNlJpeXMImIgMwGOqUBM6AKjsXG0DQGsmHXJhra5YznJg95jjryuyZLKYbUWemTZFsi7FQj%2Ba2r3AN9ReESkHUn3og5knoKPJVlPJgEmgwQBpT1Yc2mbGKxy7xaZVTVLoXIYvHAejnB78OSI8Vltf7TKaxQa1qYDEF16LDQqg9O0xsHJuunJV1DM5LWeduApHJJkyWyQ6G1tj3oIV3N7j1DTgSX9Z%2BetsspKh8XLq%2FmVvE5&X-Amz-Signature=55fe0d8907b0b6f21a2fd603fa8e5ac131f21335218d8514dfb4f92fabb47933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVD553A%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD0M7NNe%2FHl3AWnRHLSs%2By9Hu%2B0VLMTJTfTCs29HIwQywIhAMyHvSWCegqNao2S0bzI02hs0BKiRsO1KGgHUvaKvZKCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLifcVsrzHEIGdMBkq3AOV%2FwwU7waegflw%2BynfvzODVTGvnj2Lr1IV4M%2FSGTbOEHzzjlza5gRKFSlXpUTP%2B%2FAJ%2BSfto6KrWOZthaDsqmzZlqD78nrMcPN9KiXHLRhA8rofKk9FUah3fpMfykedrmIY8KuxOJlQz4bha%2FMisrZkDTY4OZd9c4JVDOq2NUMwhumNpCiVqiwYLjdcYIntARd4atPW5bl%2BcJnxUBs5XDSNzbvK8crOpR2%2Bu5Sye4oYZezfWHHCcieN32%2FwN0Px0QNOhiJuVgUo9nvXlLBvOC7TsqOqmruIHL%2Fsb9PFG5Ow2y4adVsS2bVHqVY3Bm5so8Fnokrmml8b%2F8j%2BSAeim%2F2jmr7RlKfoDgUpd9qjRBoePi3FJZhJrCms%2BsuPWhsUEmdM3YTXTaG6s3J3q4Zdw6vs7KYkWj7gjdurEDBXVD39yokvZ4XmLxhQ8vdiPthl6irjWPvNar7IA7PBFyNubRY2IBLYs7QmonYSdHFc7FCmp7as%2FxZ8gj8dH8IFnQpgsL1fIYa7hlyNotv0l0NkWvrZ9gbsnBajKSH7YveDHE5N%2FOCPH%2BBjyL9sQt1Z9lb9lkRkFzgOrUu%2FbIDbbOgQbu7GT9Z2jrCEVL1u45%2FQVHX8tUSfWZ72aM4YY2LxSjDJhoDMBjqkAe5rBa7Hvjqf1eEtjgdqXIuKLYKmyIV9XjG6dWhX4GFsw%2By10hILnAZcurJrHCWxmFruelbRhLi9dhw%2FcOp0I8A84P0%2Bj6IkqJbrqTxxDfQ4%2FK%2BbaW9zmLp8gEBSBgnkHt7YNvGSGeGDC4mB55QjqluaIl%2FOI2WMrpTQ%2BmPNbJp%2BWGvFDxl8dXStKdQhdaTqt1JNiAa54UBLqbLjVgVoULHYSimW&X-Amz-Signature=5b10d0aa88a1905319bf0f86db0e5c6a974600f42833eb29d8eacfaa00e082ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVD553A%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD0M7NNe%2FHl3AWnRHLSs%2By9Hu%2B0VLMTJTfTCs29HIwQywIhAMyHvSWCegqNao2S0bzI02hs0BKiRsO1KGgHUvaKvZKCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLifcVsrzHEIGdMBkq3AOV%2FwwU7waegflw%2BynfvzODVTGvnj2Lr1IV4M%2FSGTbOEHzzjlza5gRKFSlXpUTP%2B%2FAJ%2BSfto6KrWOZthaDsqmzZlqD78nrMcPN9KiXHLRhA8rofKk9FUah3fpMfykedrmIY8KuxOJlQz4bha%2FMisrZkDTY4OZd9c4JVDOq2NUMwhumNpCiVqiwYLjdcYIntARd4atPW5bl%2BcJnxUBs5XDSNzbvK8crOpR2%2Bu5Sye4oYZezfWHHCcieN32%2FwN0Px0QNOhiJuVgUo9nvXlLBvOC7TsqOqmruIHL%2Fsb9PFG5Ow2y4adVsS2bVHqVY3Bm5so8Fnokrmml8b%2F8j%2BSAeim%2F2jmr7RlKfoDgUpd9qjRBoePi3FJZhJrCms%2BsuPWhsUEmdM3YTXTaG6s3J3q4Zdw6vs7KYkWj7gjdurEDBXVD39yokvZ4XmLxhQ8vdiPthl6irjWPvNar7IA7PBFyNubRY2IBLYs7QmonYSdHFc7FCmp7as%2FxZ8gj8dH8IFnQpgsL1fIYa7hlyNotv0l0NkWvrZ9gbsnBajKSH7YveDHE5N%2FOCPH%2BBjyL9sQt1Z9lb9lkRkFzgOrUu%2FbIDbbOgQbu7GT9Z2jrCEVL1u45%2FQVHX8tUSfWZ72aM4YY2LxSjDJhoDMBjqkAe5rBa7Hvjqf1eEtjgdqXIuKLYKmyIV9XjG6dWhX4GFsw%2By10hILnAZcurJrHCWxmFruelbRhLi9dhw%2FcOp0I8A84P0%2Bj6IkqJbrqTxxDfQ4%2FK%2BbaW9zmLp8gEBSBgnkHt7YNvGSGeGDC4mB55QjqluaIl%2FOI2WMrpTQ%2BmPNbJp%2BWGvFDxl8dXStKdQhdaTqt1JNiAa54UBLqbLjVgVoULHYSimW&X-Amz-Signature=0a14dab647e88f6f4b02b52d8073ee2ca71e08c5ebda64abf7496477c0e272af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVD553A%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD0M7NNe%2FHl3AWnRHLSs%2By9Hu%2B0VLMTJTfTCs29HIwQywIhAMyHvSWCegqNao2S0bzI02hs0BKiRsO1KGgHUvaKvZKCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLifcVsrzHEIGdMBkq3AOV%2FwwU7waegflw%2BynfvzODVTGvnj2Lr1IV4M%2FSGTbOEHzzjlza5gRKFSlXpUTP%2B%2FAJ%2BSfto6KrWOZthaDsqmzZlqD78nrMcPN9KiXHLRhA8rofKk9FUah3fpMfykedrmIY8KuxOJlQz4bha%2FMisrZkDTY4OZd9c4JVDOq2NUMwhumNpCiVqiwYLjdcYIntARd4atPW5bl%2BcJnxUBs5XDSNzbvK8crOpR2%2Bu5Sye4oYZezfWHHCcieN32%2FwN0Px0QNOhiJuVgUo9nvXlLBvOC7TsqOqmruIHL%2Fsb9PFG5Ow2y4adVsS2bVHqVY3Bm5so8Fnokrmml8b%2F8j%2BSAeim%2F2jmr7RlKfoDgUpd9qjRBoePi3FJZhJrCms%2BsuPWhsUEmdM3YTXTaG6s3J3q4Zdw6vs7KYkWj7gjdurEDBXVD39yokvZ4XmLxhQ8vdiPthl6irjWPvNar7IA7PBFyNubRY2IBLYs7QmonYSdHFc7FCmp7as%2FxZ8gj8dH8IFnQpgsL1fIYa7hlyNotv0l0NkWvrZ9gbsnBajKSH7YveDHE5N%2FOCPH%2BBjyL9sQt1Z9lb9lkRkFzgOrUu%2FbIDbbOgQbu7GT9Z2jrCEVL1u45%2FQVHX8tUSfWZ72aM4YY2LxSjDJhoDMBjqkAe5rBa7Hvjqf1eEtjgdqXIuKLYKmyIV9XjG6dWhX4GFsw%2By10hILnAZcurJrHCWxmFruelbRhLi9dhw%2FcOp0I8A84P0%2Bj6IkqJbrqTxxDfQ4%2FK%2BbaW9zmLp8gEBSBgnkHt7YNvGSGeGDC4mB55QjqluaIl%2FOI2WMrpTQ%2BmPNbJp%2BWGvFDxl8dXStKdQhdaTqt1JNiAa54UBLqbLjVgVoULHYSimW&X-Amz-Signature=44da03506e4b45b9d54c31779dc6ba8e2a630591b24db11cadb0a2f46d273969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVD553A%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD0M7NNe%2FHl3AWnRHLSs%2By9Hu%2B0VLMTJTfTCs29HIwQywIhAMyHvSWCegqNao2S0bzI02hs0BKiRsO1KGgHUvaKvZKCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLifcVsrzHEIGdMBkq3AOV%2FwwU7waegflw%2BynfvzODVTGvnj2Lr1IV4M%2FSGTbOEHzzjlza5gRKFSlXpUTP%2B%2FAJ%2BSfto6KrWOZthaDsqmzZlqD78nrMcPN9KiXHLRhA8rofKk9FUah3fpMfykedrmIY8KuxOJlQz4bha%2FMisrZkDTY4OZd9c4JVDOq2NUMwhumNpCiVqiwYLjdcYIntARd4atPW5bl%2BcJnxUBs5XDSNzbvK8crOpR2%2Bu5Sye4oYZezfWHHCcieN32%2FwN0Px0QNOhiJuVgUo9nvXlLBvOC7TsqOqmruIHL%2Fsb9PFG5Ow2y4adVsS2bVHqVY3Bm5so8Fnokrmml8b%2F8j%2BSAeim%2F2jmr7RlKfoDgUpd9qjRBoePi3FJZhJrCms%2BsuPWhsUEmdM3YTXTaG6s3J3q4Zdw6vs7KYkWj7gjdurEDBXVD39yokvZ4XmLxhQ8vdiPthl6irjWPvNar7IA7PBFyNubRY2IBLYs7QmonYSdHFc7FCmp7as%2FxZ8gj8dH8IFnQpgsL1fIYa7hlyNotv0l0NkWvrZ9gbsnBajKSH7YveDHE5N%2FOCPH%2BBjyL9sQt1Z9lb9lkRkFzgOrUu%2FbIDbbOgQbu7GT9Z2jrCEVL1u45%2FQVHX8tUSfWZ72aM4YY2LxSjDJhoDMBjqkAe5rBa7Hvjqf1eEtjgdqXIuKLYKmyIV9XjG6dWhX4GFsw%2By10hILnAZcurJrHCWxmFruelbRhLi9dhw%2FcOp0I8A84P0%2Bj6IkqJbrqTxxDfQ4%2FK%2BbaW9zmLp8gEBSBgnkHt7YNvGSGeGDC4mB55QjqluaIl%2FOI2WMrpTQ%2BmPNbJp%2BWGvFDxl8dXStKdQhdaTqt1JNiAa54UBLqbLjVgVoULHYSimW&X-Amz-Signature=474887e178317061bfc5ba10036119dbbd5676830b6f1d7e3598915f7d480203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVD553A%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD0M7NNe%2FHl3AWnRHLSs%2By9Hu%2B0VLMTJTfTCs29HIwQywIhAMyHvSWCegqNao2S0bzI02hs0BKiRsO1KGgHUvaKvZKCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLifcVsrzHEIGdMBkq3AOV%2FwwU7waegflw%2BynfvzODVTGvnj2Lr1IV4M%2FSGTbOEHzzjlza5gRKFSlXpUTP%2B%2FAJ%2BSfto6KrWOZthaDsqmzZlqD78nrMcPN9KiXHLRhA8rofKk9FUah3fpMfykedrmIY8KuxOJlQz4bha%2FMisrZkDTY4OZd9c4JVDOq2NUMwhumNpCiVqiwYLjdcYIntARd4atPW5bl%2BcJnxUBs5XDSNzbvK8crOpR2%2Bu5Sye4oYZezfWHHCcieN32%2FwN0Px0QNOhiJuVgUo9nvXlLBvOC7TsqOqmruIHL%2Fsb9PFG5Ow2y4adVsS2bVHqVY3Bm5so8Fnokrmml8b%2F8j%2BSAeim%2F2jmr7RlKfoDgUpd9qjRBoePi3FJZhJrCms%2BsuPWhsUEmdM3YTXTaG6s3J3q4Zdw6vs7KYkWj7gjdurEDBXVD39yokvZ4XmLxhQ8vdiPthl6irjWPvNar7IA7PBFyNubRY2IBLYs7QmonYSdHFc7FCmp7as%2FxZ8gj8dH8IFnQpgsL1fIYa7hlyNotv0l0NkWvrZ9gbsnBajKSH7YveDHE5N%2FOCPH%2BBjyL9sQt1Z9lb9lkRkFzgOrUu%2FbIDbbOgQbu7GT9Z2jrCEVL1u45%2FQVHX8tUSfWZ72aM4YY2LxSjDJhoDMBjqkAe5rBa7Hvjqf1eEtjgdqXIuKLYKmyIV9XjG6dWhX4GFsw%2By10hILnAZcurJrHCWxmFruelbRhLi9dhw%2FcOp0I8A84P0%2Bj6IkqJbrqTxxDfQ4%2FK%2BbaW9zmLp8gEBSBgnkHt7YNvGSGeGDC4mB55QjqluaIl%2FOI2WMrpTQ%2BmPNbJp%2BWGvFDxl8dXStKdQhdaTqt1JNiAa54UBLqbLjVgVoULHYSimW&X-Amz-Signature=77991acbba14ff93f5eda08dbdc902fed3ca2630775b671c1d34bd9096cb209d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVD553A%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD0M7NNe%2FHl3AWnRHLSs%2By9Hu%2B0VLMTJTfTCs29HIwQywIhAMyHvSWCegqNao2S0bzI02hs0BKiRsO1KGgHUvaKvZKCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLifcVsrzHEIGdMBkq3AOV%2FwwU7waegflw%2BynfvzODVTGvnj2Lr1IV4M%2FSGTbOEHzzjlza5gRKFSlXpUTP%2B%2FAJ%2BSfto6KrWOZthaDsqmzZlqD78nrMcPN9KiXHLRhA8rofKk9FUah3fpMfykedrmIY8KuxOJlQz4bha%2FMisrZkDTY4OZd9c4JVDOq2NUMwhumNpCiVqiwYLjdcYIntARd4atPW5bl%2BcJnxUBs5XDSNzbvK8crOpR2%2Bu5Sye4oYZezfWHHCcieN32%2FwN0Px0QNOhiJuVgUo9nvXlLBvOC7TsqOqmruIHL%2Fsb9PFG5Ow2y4adVsS2bVHqVY3Bm5so8Fnokrmml8b%2F8j%2BSAeim%2F2jmr7RlKfoDgUpd9qjRBoePi3FJZhJrCms%2BsuPWhsUEmdM3YTXTaG6s3J3q4Zdw6vs7KYkWj7gjdurEDBXVD39yokvZ4XmLxhQ8vdiPthl6irjWPvNar7IA7PBFyNubRY2IBLYs7QmonYSdHFc7FCmp7as%2FxZ8gj8dH8IFnQpgsL1fIYa7hlyNotv0l0NkWvrZ9gbsnBajKSH7YveDHE5N%2FOCPH%2BBjyL9sQt1Z9lb9lkRkFzgOrUu%2FbIDbbOgQbu7GT9Z2jrCEVL1u45%2FQVHX8tUSfWZ72aM4YY2LxSjDJhoDMBjqkAe5rBa7Hvjqf1eEtjgdqXIuKLYKmyIV9XjG6dWhX4GFsw%2By10hILnAZcurJrHCWxmFruelbRhLi9dhw%2FcOp0I8A84P0%2Bj6IkqJbrqTxxDfQ4%2FK%2BbaW9zmLp8gEBSBgnkHt7YNvGSGeGDC4mB55QjqluaIl%2FOI2WMrpTQ%2BmPNbJp%2BWGvFDxl8dXStKdQhdaTqt1JNiAa54UBLqbLjVgVoULHYSimW&X-Amz-Signature=420824ffc62e4c6c08d105407fbabe9570a604b9688915eb364380461640482e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVD553A%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD0M7NNe%2FHl3AWnRHLSs%2By9Hu%2B0VLMTJTfTCs29HIwQywIhAMyHvSWCegqNao2S0bzI02hs0BKiRsO1KGgHUvaKvZKCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLifcVsrzHEIGdMBkq3AOV%2FwwU7waegflw%2BynfvzODVTGvnj2Lr1IV4M%2FSGTbOEHzzjlza5gRKFSlXpUTP%2B%2FAJ%2BSfto6KrWOZthaDsqmzZlqD78nrMcPN9KiXHLRhA8rofKk9FUah3fpMfykedrmIY8KuxOJlQz4bha%2FMisrZkDTY4OZd9c4JVDOq2NUMwhumNpCiVqiwYLjdcYIntARd4atPW5bl%2BcJnxUBs5XDSNzbvK8crOpR2%2Bu5Sye4oYZezfWHHCcieN32%2FwN0Px0QNOhiJuVgUo9nvXlLBvOC7TsqOqmruIHL%2Fsb9PFG5Ow2y4adVsS2bVHqVY3Bm5so8Fnokrmml8b%2F8j%2BSAeim%2F2jmr7RlKfoDgUpd9qjRBoePi3FJZhJrCms%2BsuPWhsUEmdM3YTXTaG6s3J3q4Zdw6vs7KYkWj7gjdurEDBXVD39yokvZ4XmLxhQ8vdiPthl6irjWPvNar7IA7PBFyNubRY2IBLYs7QmonYSdHFc7FCmp7as%2FxZ8gj8dH8IFnQpgsL1fIYa7hlyNotv0l0NkWvrZ9gbsnBajKSH7YveDHE5N%2FOCPH%2BBjyL9sQt1Z9lb9lkRkFzgOrUu%2FbIDbbOgQbu7GT9Z2jrCEVL1u45%2FQVHX8tUSfWZ72aM4YY2LxSjDJhoDMBjqkAe5rBa7Hvjqf1eEtjgdqXIuKLYKmyIV9XjG6dWhX4GFsw%2By10hILnAZcurJrHCWxmFruelbRhLi9dhw%2FcOp0I8A84P0%2Bj6IkqJbrqTxxDfQ4%2FK%2BbaW9zmLp8gEBSBgnkHt7YNvGSGeGDC4mB55QjqluaIl%2FOI2WMrpTQ%2BmPNbJp%2BWGvFDxl8dXStKdQhdaTqt1JNiAa54UBLqbLjVgVoULHYSimW&X-Amz-Signature=3a07ef2b4cfbd9f13c64640ffa6c41cdab6a144d77133525f7dc17a2935fb729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVD553A%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD0M7NNe%2FHl3AWnRHLSs%2By9Hu%2B0VLMTJTfTCs29HIwQywIhAMyHvSWCegqNao2S0bzI02hs0BKiRsO1KGgHUvaKvZKCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLifcVsrzHEIGdMBkq3AOV%2FwwU7waegflw%2BynfvzODVTGvnj2Lr1IV4M%2FSGTbOEHzzjlza5gRKFSlXpUTP%2B%2FAJ%2BSfto6KrWOZthaDsqmzZlqD78nrMcPN9KiXHLRhA8rofKk9FUah3fpMfykedrmIY8KuxOJlQz4bha%2FMisrZkDTY4OZd9c4JVDOq2NUMwhumNpCiVqiwYLjdcYIntARd4atPW5bl%2BcJnxUBs5XDSNzbvK8crOpR2%2Bu5Sye4oYZezfWHHCcieN32%2FwN0Px0QNOhiJuVgUo9nvXlLBvOC7TsqOqmruIHL%2Fsb9PFG5Ow2y4adVsS2bVHqVY3Bm5so8Fnokrmml8b%2F8j%2BSAeim%2F2jmr7RlKfoDgUpd9qjRBoePi3FJZhJrCms%2BsuPWhsUEmdM3YTXTaG6s3J3q4Zdw6vs7KYkWj7gjdurEDBXVD39yokvZ4XmLxhQ8vdiPthl6irjWPvNar7IA7PBFyNubRY2IBLYs7QmonYSdHFc7FCmp7as%2FxZ8gj8dH8IFnQpgsL1fIYa7hlyNotv0l0NkWvrZ9gbsnBajKSH7YveDHE5N%2FOCPH%2BBjyL9sQt1Z9lb9lkRkFzgOrUu%2FbIDbbOgQbu7GT9Z2jrCEVL1u45%2FQVHX8tUSfWZ72aM4YY2LxSjDJhoDMBjqkAe5rBa7Hvjqf1eEtjgdqXIuKLYKmyIV9XjG6dWhX4GFsw%2By10hILnAZcurJrHCWxmFruelbRhLi9dhw%2FcOp0I8A84P0%2Bj6IkqJbrqTxxDfQ4%2FK%2BbaW9zmLp8gEBSBgnkHt7YNvGSGeGDC4mB55QjqluaIl%2FOI2WMrpTQ%2BmPNbJp%2BWGvFDxl8dXStKdQhdaTqt1JNiAa54UBLqbLjVgVoULHYSimW&X-Amz-Signature=2a8af1ba85cb3152e8fefb857583e5d10f646fd1ed214cb1b11328b484988b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZVD553A%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQD0M7NNe%2FHl3AWnRHLSs%2By9Hu%2B0VLMTJTfTCs29HIwQywIhAMyHvSWCegqNao2S0bzI02hs0BKiRsO1KGgHUvaKvZKCKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLifcVsrzHEIGdMBkq3AOV%2FwwU7waegflw%2BynfvzODVTGvnj2Lr1IV4M%2FSGTbOEHzzjlza5gRKFSlXpUTP%2B%2FAJ%2BSfto6KrWOZthaDsqmzZlqD78nrMcPN9KiXHLRhA8rofKk9FUah3fpMfykedrmIY8KuxOJlQz4bha%2FMisrZkDTY4OZd9c4JVDOq2NUMwhumNpCiVqiwYLjdcYIntARd4atPW5bl%2BcJnxUBs5XDSNzbvK8crOpR2%2Bu5Sye4oYZezfWHHCcieN32%2FwN0Px0QNOhiJuVgUo9nvXlLBvOC7TsqOqmruIHL%2Fsb9PFG5Ow2y4adVsS2bVHqVY3Bm5so8Fnokrmml8b%2F8j%2BSAeim%2F2jmr7RlKfoDgUpd9qjRBoePi3FJZhJrCms%2BsuPWhsUEmdM3YTXTaG6s3J3q4Zdw6vs7KYkWj7gjdurEDBXVD39yokvZ4XmLxhQ8vdiPthl6irjWPvNar7IA7PBFyNubRY2IBLYs7QmonYSdHFc7FCmp7as%2FxZ8gj8dH8IFnQpgsL1fIYa7hlyNotv0l0NkWvrZ9gbsnBajKSH7YveDHE5N%2FOCPH%2BBjyL9sQt1Z9lb9lkRkFzgOrUu%2FbIDbbOgQbu7GT9Z2jrCEVL1u45%2FQVHX8tUSfWZ72aM4YY2LxSjDJhoDMBjqkAe5rBa7Hvjqf1eEtjgdqXIuKLYKmyIV9XjG6dWhX4GFsw%2By10hILnAZcurJrHCWxmFruelbRhLi9dhw%2FcOp0I8A84P0%2Bj6IkqJbrqTxxDfQ4%2FK%2BbaW9zmLp8gEBSBgnkHt7YNvGSGeGDC4mB55QjqluaIl%2FOI2WMrpTQ%2BmPNbJp%2BWGvFDxl8dXStKdQhdaTqt1JNiAa54UBLqbLjVgVoULHYSimW&X-Amz-Signature=f5b2c3797a0d2b07aad12b8c0ceda0db8fad2735a66f38736757d1b2a86514b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
