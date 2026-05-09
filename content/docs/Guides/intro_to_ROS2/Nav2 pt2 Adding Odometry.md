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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6TH6D%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDLTyytHQLLZ%2F574GLW%2BiVhB%2B1EIfCk9ls0hY8W8%2FDa3gIgQbUEc3vVmxMW7xa%2F9U0T4IGPH1PzrU4U5H%2FDKCfkf3EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH9X4tYQcYefUed%2BircAxEjdLqoSxHTmx2m8oGsx7apwClm9hGAE5upgdrLyjf8DOdWBjdzRUE891dfXlneWJHpLWB4MBteGuBo6TftG%2F1dCHjfFlf6OaeutV8a9xConVhtG80H%2BwplQ6ZsATegli0QYgVrXnjLYJuvWmcGqF6fIBBA5LTsRbasoMIYEg9cfDwpSZhmS38iIAHojj3iJ5VbRhMvF3Bq0rTH2KVEs%2BT%2Fb8hOtdxGGqVJ21Ou1sXKmK4gnn9GtEBGEpIqKM%2BRUyHcdAUMD%2F4DfwfF4UKyVLYqRyykNsnnvzZchqeJMfaRdyYfYAW09duST0KlpZyWPuoe2oGISwNRgNAcL7khxRIN6txAgRtEWClQYVpVafY1z1m%2F94cTlL4ERc6SHqrsK%2BKfsGebzfKxN8hHUSO9j4fDkfXqMIM%2BFEwb%2BNakddloX81SAprPhUH1feDEngQEtqHQ6fVBKze0hzb01tVAAxTWnTE3XejjpJzjDH6RJKa893p9dwdGA%2B%2Bv8sTe4FWoWuWDJlTh6bmusvVhStRidMn3eztqyznyJYhn%2Fz7nbQ2XWmihXt7nIdd553ucLEZhWk2CRjfr80Py05o2sTAqrMa0TOcvielS%2BFDVDdpJShZaYGhES6r00D%2BhgNpmMLOx%2Bs8GOqUBh646CztJzN3zwP%2B8QETE1NvqeWLtIEu0aGbPh9WmQ1zvlBpH1EV9%2BtQ5jL0XgiKHQTVxiL6XZmmrtu%2Bd6n3VMb%2F7TTfRYzWaKFT1ITNS41TLPI3IjTTnlsESR3b5gokrkqR%2BZJKD7ZBuz5MMj0WXjvQi3hS20X7fGQQHOeaTn6zLldra2evBbTS%2FQQzXMbBIkEbsSZ93Mbyv1lZMZF1n2Yq8YNVj&X-Amz-Signature=31258249f64d0fb86e012938e66625fe077307b16d747d41b1f0436a7592a136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6TH6D%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDLTyytHQLLZ%2F574GLW%2BiVhB%2B1EIfCk9ls0hY8W8%2FDa3gIgQbUEc3vVmxMW7xa%2F9U0T4IGPH1PzrU4U5H%2FDKCfkf3EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH9X4tYQcYefUed%2BircAxEjdLqoSxHTmx2m8oGsx7apwClm9hGAE5upgdrLyjf8DOdWBjdzRUE891dfXlneWJHpLWB4MBteGuBo6TftG%2F1dCHjfFlf6OaeutV8a9xConVhtG80H%2BwplQ6ZsATegli0QYgVrXnjLYJuvWmcGqF6fIBBA5LTsRbasoMIYEg9cfDwpSZhmS38iIAHojj3iJ5VbRhMvF3Bq0rTH2KVEs%2BT%2Fb8hOtdxGGqVJ21Ou1sXKmK4gnn9GtEBGEpIqKM%2BRUyHcdAUMD%2F4DfwfF4UKyVLYqRyykNsnnvzZchqeJMfaRdyYfYAW09duST0KlpZyWPuoe2oGISwNRgNAcL7khxRIN6txAgRtEWClQYVpVafY1z1m%2F94cTlL4ERc6SHqrsK%2BKfsGebzfKxN8hHUSO9j4fDkfXqMIM%2BFEwb%2BNakddloX81SAprPhUH1feDEngQEtqHQ6fVBKze0hzb01tVAAxTWnTE3XejjpJzjDH6RJKa893p9dwdGA%2B%2Bv8sTe4FWoWuWDJlTh6bmusvVhStRidMn3eztqyznyJYhn%2Fz7nbQ2XWmihXt7nIdd553ucLEZhWk2CRjfr80Py05o2sTAqrMa0TOcvielS%2BFDVDdpJShZaYGhES6r00D%2BhgNpmMLOx%2Bs8GOqUBh646CztJzN3zwP%2B8QETE1NvqeWLtIEu0aGbPh9WmQ1zvlBpH1EV9%2BtQ5jL0XgiKHQTVxiL6XZmmrtu%2Bd6n3VMb%2F7TTfRYzWaKFT1ITNS41TLPI3IjTTnlsESR3b5gokrkqR%2BZJKD7ZBuz5MMj0WXjvQi3hS20X7fGQQHOeaTn6zLldra2evBbTS%2FQQzXMbBIkEbsSZ93Mbyv1lZMZF1n2Yq8YNVj&X-Amz-Signature=6fe0f0aee0333872d0b8bd948cb5f67e93296971e9309a75ae1c3990040044e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6TH6D%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDLTyytHQLLZ%2F574GLW%2BiVhB%2B1EIfCk9ls0hY8W8%2FDa3gIgQbUEc3vVmxMW7xa%2F9U0T4IGPH1PzrU4U5H%2FDKCfkf3EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH9X4tYQcYefUed%2BircAxEjdLqoSxHTmx2m8oGsx7apwClm9hGAE5upgdrLyjf8DOdWBjdzRUE891dfXlneWJHpLWB4MBteGuBo6TftG%2F1dCHjfFlf6OaeutV8a9xConVhtG80H%2BwplQ6ZsATegli0QYgVrXnjLYJuvWmcGqF6fIBBA5LTsRbasoMIYEg9cfDwpSZhmS38iIAHojj3iJ5VbRhMvF3Bq0rTH2KVEs%2BT%2Fb8hOtdxGGqVJ21Ou1sXKmK4gnn9GtEBGEpIqKM%2BRUyHcdAUMD%2F4DfwfF4UKyVLYqRyykNsnnvzZchqeJMfaRdyYfYAW09duST0KlpZyWPuoe2oGISwNRgNAcL7khxRIN6txAgRtEWClQYVpVafY1z1m%2F94cTlL4ERc6SHqrsK%2BKfsGebzfKxN8hHUSO9j4fDkfXqMIM%2BFEwb%2BNakddloX81SAprPhUH1feDEngQEtqHQ6fVBKze0hzb01tVAAxTWnTE3XejjpJzjDH6RJKa893p9dwdGA%2B%2Bv8sTe4FWoWuWDJlTh6bmusvVhStRidMn3eztqyznyJYhn%2Fz7nbQ2XWmihXt7nIdd553ucLEZhWk2CRjfr80Py05o2sTAqrMa0TOcvielS%2BFDVDdpJShZaYGhES6r00D%2BhgNpmMLOx%2Bs8GOqUBh646CztJzN3zwP%2B8QETE1NvqeWLtIEu0aGbPh9WmQ1zvlBpH1EV9%2BtQ5jL0XgiKHQTVxiL6XZmmrtu%2Bd6n3VMb%2F7TTfRYzWaKFT1ITNS41TLPI3IjTTnlsESR3b5gokrkqR%2BZJKD7ZBuz5MMj0WXjvQi3hS20X7fGQQHOeaTn6zLldra2evBbTS%2FQQzXMbBIkEbsSZ93Mbyv1lZMZF1n2Yq8YNVj&X-Amz-Signature=50912255e01fa99398ffede275a9fa377e17e81c0d9c452b361f718a1db668da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6TH6D%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDLTyytHQLLZ%2F574GLW%2BiVhB%2B1EIfCk9ls0hY8W8%2FDa3gIgQbUEc3vVmxMW7xa%2F9U0T4IGPH1PzrU4U5H%2FDKCfkf3EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH9X4tYQcYefUed%2BircAxEjdLqoSxHTmx2m8oGsx7apwClm9hGAE5upgdrLyjf8DOdWBjdzRUE891dfXlneWJHpLWB4MBteGuBo6TftG%2F1dCHjfFlf6OaeutV8a9xConVhtG80H%2BwplQ6ZsATegli0QYgVrXnjLYJuvWmcGqF6fIBBA5LTsRbasoMIYEg9cfDwpSZhmS38iIAHojj3iJ5VbRhMvF3Bq0rTH2KVEs%2BT%2Fb8hOtdxGGqVJ21Ou1sXKmK4gnn9GtEBGEpIqKM%2BRUyHcdAUMD%2F4DfwfF4UKyVLYqRyykNsnnvzZchqeJMfaRdyYfYAW09duST0KlpZyWPuoe2oGISwNRgNAcL7khxRIN6txAgRtEWClQYVpVafY1z1m%2F94cTlL4ERc6SHqrsK%2BKfsGebzfKxN8hHUSO9j4fDkfXqMIM%2BFEwb%2BNakddloX81SAprPhUH1feDEngQEtqHQ6fVBKze0hzb01tVAAxTWnTE3XejjpJzjDH6RJKa893p9dwdGA%2B%2Bv8sTe4FWoWuWDJlTh6bmusvVhStRidMn3eztqyznyJYhn%2Fz7nbQ2XWmihXt7nIdd553ucLEZhWk2CRjfr80Py05o2sTAqrMa0TOcvielS%2BFDVDdpJShZaYGhES6r00D%2BhgNpmMLOx%2Bs8GOqUBh646CztJzN3zwP%2B8QETE1NvqeWLtIEu0aGbPh9WmQ1zvlBpH1EV9%2BtQ5jL0XgiKHQTVxiL6XZmmrtu%2Bd6n3VMb%2F7TTfRYzWaKFT1ITNS41TLPI3IjTTnlsESR3b5gokrkqR%2BZJKD7ZBuz5MMj0WXjvQi3hS20X7fGQQHOeaTn6zLldra2evBbTS%2FQQzXMbBIkEbsSZ93Mbyv1lZMZF1n2Yq8YNVj&X-Amz-Signature=eeaac86427708d9381da3542833eab7bd4569ea32cd196b051a98579e0a21c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6TH6D%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDLTyytHQLLZ%2F574GLW%2BiVhB%2B1EIfCk9ls0hY8W8%2FDa3gIgQbUEc3vVmxMW7xa%2F9U0T4IGPH1PzrU4U5H%2FDKCfkf3EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH9X4tYQcYefUed%2BircAxEjdLqoSxHTmx2m8oGsx7apwClm9hGAE5upgdrLyjf8DOdWBjdzRUE891dfXlneWJHpLWB4MBteGuBo6TftG%2F1dCHjfFlf6OaeutV8a9xConVhtG80H%2BwplQ6ZsATegli0QYgVrXnjLYJuvWmcGqF6fIBBA5LTsRbasoMIYEg9cfDwpSZhmS38iIAHojj3iJ5VbRhMvF3Bq0rTH2KVEs%2BT%2Fb8hOtdxGGqVJ21Ou1sXKmK4gnn9GtEBGEpIqKM%2BRUyHcdAUMD%2F4DfwfF4UKyVLYqRyykNsnnvzZchqeJMfaRdyYfYAW09duST0KlpZyWPuoe2oGISwNRgNAcL7khxRIN6txAgRtEWClQYVpVafY1z1m%2F94cTlL4ERc6SHqrsK%2BKfsGebzfKxN8hHUSO9j4fDkfXqMIM%2BFEwb%2BNakddloX81SAprPhUH1feDEngQEtqHQ6fVBKze0hzb01tVAAxTWnTE3XejjpJzjDH6RJKa893p9dwdGA%2B%2Bv8sTe4FWoWuWDJlTh6bmusvVhStRidMn3eztqyznyJYhn%2Fz7nbQ2XWmihXt7nIdd553ucLEZhWk2CRjfr80Py05o2sTAqrMa0TOcvielS%2BFDVDdpJShZaYGhES6r00D%2BhgNpmMLOx%2Bs8GOqUBh646CztJzN3zwP%2B8QETE1NvqeWLtIEu0aGbPh9WmQ1zvlBpH1EV9%2BtQ5jL0XgiKHQTVxiL6XZmmrtu%2Bd6n3VMb%2F7TTfRYzWaKFT1ITNS41TLPI3IjTTnlsESR3b5gokrkqR%2BZJKD7ZBuz5MMj0WXjvQi3hS20X7fGQQHOeaTn6zLldra2evBbTS%2FQQzXMbBIkEbsSZ93Mbyv1lZMZF1n2Yq8YNVj&X-Amz-Signature=1a5daac39a728c86e1dc885cb5e6f33972a2e7f4cd56b74b778bcf5caa60931d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6TH6D%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDLTyytHQLLZ%2F574GLW%2BiVhB%2B1EIfCk9ls0hY8W8%2FDa3gIgQbUEc3vVmxMW7xa%2F9U0T4IGPH1PzrU4U5H%2FDKCfkf3EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH9X4tYQcYefUed%2BircAxEjdLqoSxHTmx2m8oGsx7apwClm9hGAE5upgdrLyjf8DOdWBjdzRUE891dfXlneWJHpLWB4MBteGuBo6TftG%2F1dCHjfFlf6OaeutV8a9xConVhtG80H%2BwplQ6ZsATegli0QYgVrXnjLYJuvWmcGqF6fIBBA5LTsRbasoMIYEg9cfDwpSZhmS38iIAHojj3iJ5VbRhMvF3Bq0rTH2KVEs%2BT%2Fb8hOtdxGGqVJ21Ou1sXKmK4gnn9GtEBGEpIqKM%2BRUyHcdAUMD%2F4DfwfF4UKyVLYqRyykNsnnvzZchqeJMfaRdyYfYAW09duST0KlpZyWPuoe2oGISwNRgNAcL7khxRIN6txAgRtEWClQYVpVafY1z1m%2F94cTlL4ERc6SHqrsK%2BKfsGebzfKxN8hHUSO9j4fDkfXqMIM%2BFEwb%2BNakddloX81SAprPhUH1feDEngQEtqHQ6fVBKze0hzb01tVAAxTWnTE3XejjpJzjDH6RJKa893p9dwdGA%2B%2Bv8sTe4FWoWuWDJlTh6bmusvVhStRidMn3eztqyznyJYhn%2Fz7nbQ2XWmihXt7nIdd553ucLEZhWk2CRjfr80Py05o2sTAqrMa0TOcvielS%2BFDVDdpJShZaYGhES6r00D%2BhgNpmMLOx%2Bs8GOqUBh646CztJzN3zwP%2B8QETE1NvqeWLtIEu0aGbPh9WmQ1zvlBpH1EV9%2BtQ5jL0XgiKHQTVxiL6XZmmrtu%2Bd6n3VMb%2F7TTfRYzWaKFT1ITNS41TLPI3IjTTnlsESR3b5gokrkqR%2BZJKD7ZBuz5MMj0WXjvQi3hS20X7fGQQHOeaTn6zLldra2evBbTS%2FQQzXMbBIkEbsSZ93Mbyv1lZMZF1n2Yq8YNVj&X-Amz-Signature=3e421b2a74e2880e6c52fb7002599aba13d445a683700825967f8d64439f2abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6TH6D%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDLTyytHQLLZ%2F574GLW%2BiVhB%2B1EIfCk9ls0hY8W8%2FDa3gIgQbUEc3vVmxMW7xa%2F9U0T4IGPH1PzrU4U5H%2FDKCfkf3EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH9X4tYQcYefUed%2BircAxEjdLqoSxHTmx2m8oGsx7apwClm9hGAE5upgdrLyjf8DOdWBjdzRUE891dfXlneWJHpLWB4MBteGuBo6TftG%2F1dCHjfFlf6OaeutV8a9xConVhtG80H%2BwplQ6ZsATegli0QYgVrXnjLYJuvWmcGqF6fIBBA5LTsRbasoMIYEg9cfDwpSZhmS38iIAHojj3iJ5VbRhMvF3Bq0rTH2KVEs%2BT%2Fb8hOtdxGGqVJ21Ou1sXKmK4gnn9GtEBGEpIqKM%2BRUyHcdAUMD%2F4DfwfF4UKyVLYqRyykNsnnvzZchqeJMfaRdyYfYAW09duST0KlpZyWPuoe2oGISwNRgNAcL7khxRIN6txAgRtEWClQYVpVafY1z1m%2F94cTlL4ERc6SHqrsK%2BKfsGebzfKxN8hHUSO9j4fDkfXqMIM%2BFEwb%2BNakddloX81SAprPhUH1feDEngQEtqHQ6fVBKze0hzb01tVAAxTWnTE3XejjpJzjDH6RJKa893p9dwdGA%2B%2Bv8sTe4FWoWuWDJlTh6bmusvVhStRidMn3eztqyznyJYhn%2Fz7nbQ2XWmihXt7nIdd553ucLEZhWk2CRjfr80Py05o2sTAqrMa0TOcvielS%2BFDVDdpJShZaYGhES6r00D%2BhgNpmMLOx%2Bs8GOqUBh646CztJzN3zwP%2B8QETE1NvqeWLtIEu0aGbPh9WmQ1zvlBpH1EV9%2BtQ5jL0XgiKHQTVxiL6XZmmrtu%2Bd6n3VMb%2F7TTfRYzWaKFT1ITNS41TLPI3IjTTnlsESR3b5gokrkqR%2BZJKD7ZBuz5MMj0WXjvQi3hS20X7fGQQHOeaTn6zLldra2evBbTS%2FQQzXMbBIkEbsSZ93Mbyv1lZMZF1n2Yq8YNVj&X-Amz-Signature=6a74e6240fe2beb5d0370cf38ebb79e1e351459736acfe7b328ea8fa6a6f4b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6TH6D%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDLTyytHQLLZ%2F574GLW%2BiVhB%2B1EIfCk9ls0hY8W8%2FDa3gIgQbUEc3vVmxMW7xa%2F9U0T4IGPH1PzrU4U5H%2FDKCfkf3EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH9X4tYQcYefUed%2BircAxEjdLqoSxHTmx2m8oGsx7apwClm9hGAE5upgdrLyjf8DOdWBjdzRUE891dfXlneWJHpLWB4MBteGuBo6TftG%2F1dCHjfFlf6OaeutV8a9xConVhtG80H%2BwplQ6ZsATegli0QYgVrXnjLYJuvWmcGqF6fIBBA5LTsRbasoMIYEg9cfDwpSZhmS38iIAHojj3iJ5VbRhMvF3Bq0rTH2KVEs%2BT%2Fb8hOtdxGGqVJ21Ou1sXKmK4gnn9GtEBGEpIqKM%2BRUyHcdAUMD%2F4DfwfF4UKyVLYqRyykNsnnvzZchqeJMfaRdyYfYAW09duST0KlpZyWPuoe2oGISwNRgNAcL7khxRIN6txAgRtEWClQYVpVafY1z1m%2F94cTlL4ERc6SHqrsK%2BKfsGebzfKxN8hHUSO9j4fDkfXqMIM%2BFEwb%2BNakddloX81SAprPhUH1feDEngQEtqHQ6fVBKze0hzb01tVAAxTWnTE3XejjpJzjDH6RJKa893p9dwdGA%2B%2Bv8sTe4FWoWuWDJlTh6bmusvVhStRidMn3eztqyznyJYhn%2Fz7nbQ2XWmihXt7nIdd553ucLEZhWk2CRjfr80Py05o2sTAqrMa0TOcvielS%2BFDVDdpJShZaYGhES6r00D%2BhgNpmMLOx%2Bs8GOqUBh646CztJzN3zwP%2B8QETE1NvqeWLtIEu0aGbPh9WmQ1zvlBpH1EV9%2BtQ5jL0XgiKHQTVxiL6XZmmrtu%2Bd6n3VMb%2F7TTfRYzWaKFT1ITNS41TLPI3IjTTnlsESR3b5gokrkqR%2BZJKD7ZBuz5MMj0WXjvQi3hS20X7fGQQHOeaTn6zLldra2evBbTS%2FQQzXMbBIkEbsSZ93Mbyv1lZMZF1n2Yq8YNVj&X-Amz-Signature=444830dd4f7ca3cd717292280839f080440b744fbc7a703c7660ab4803d09788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6TH6D%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDLTyytHQLLZ%2F574GLW%2BiVhB%2B1EIfCk9ls0hY8W8%2FDa3gIgQbUEc3vVmxMW7xa%2F9U0T4IGPH1PzrU4U5H%2FDKCfkf3EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH9X4tYQcYefUed%2BircAxEjdLqoSxHTmx2m8oGsx7apwClm9hGAE5upgdrLyjf8DOdWBjdzRUE891dfXlneWJHpLWB4MBteGuBo6TftG%2F1dCHjfFlf6OaeutV8a9xConVhtG80H%2BwplQ6ZsATegli0QYgVrXnjLYJuvWmcGqF6fIBBA5LTsRbasoMIYEg9cfDwpSZhmS38iIAHojj3iJ5VbRhMvF3Bq0rTH2KVEs%2BT%2Fb8hOtdxGGqVJ21Ou1sXKmK4gnn9GtEBGEpIqKM%2BRUyHcdAUMD%2F4DfwfF4UKyVLYqRyykNsnnvzZchqeJMfaRdyYfYAW09duST0KlpZyWPuoe2oGISwNRgNAcL7khxRIN6txAgRtEWClQYVpVafY1z1m%2F94cTlL4ERc6SHqrsK%2BKfsGebzfKxN8hHUSO9j4fDkfXqMIM%2BFEwb%2BNakddloX81SAprPhUH1feDEngQEtqHQ6fVBKze0hzb01tVAAxTWnTE3XejjpJzjDH6RJKa893p9dwdGA%2B%2Bv8sTe4FWoWuWDJlTh6bmusvVhStRidMn3eztqyznyJYhn%2Fz7nbQ2XWmihXt7nIdd553ucLEZhWk2CRjfr80Py05o2sTAqrMa0TOcvielS%2BFDVDdpJShZaYGhES6r00D%2BhgNpmMLOx%2Bs8GOqUBh646CztJzN3zwP%2B8QETE1NvqeWLtIEu0aGbPh9WmQ1zvlBpH1EV9%2BtQ5jL0XgiKHQTVxiL6XZmmrtu%2Bd6n3VMb%2F7TTfRYzWaKFT1ITNS41TLPI3IjTTnlsESR3b5gokrkqR%2BZJKD7ZBuz5MMj0WXjvQi3hS20X7fGQQHOeaTn6zLldra2evBbTS%2FQQzXMbBIkEbsSZ93Mbyv1lZMZF1n2Yq8YNVj&X-Amz-Signature=beb2c8063f900a6c5a1e7f7212e1b7137a7b2578ae8c840547a665b24080330b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6TH6D%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDLTyytHQLLZ%2F574GLW%2BiVhB%2B1EIfCk9ls0hY8W8%2FDa3gIgQbUEc3vVmxMW7xa%2F9U0T4IGPH1PzrU4U5H%2FDKCfkf3EqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMH9X4tYQcYefUed%2BircAxEjdLqoSxHTmx2m8oGsx7apwClm9hGAE5upgdrLyjf8DOdWBjdzRUE891dfXlneWJHpLWB4MBteGuBo6TftG%2F1dCHjfFlf6OaeutV8a9xConVhtG80H%2BwplQ6ZsATegli0QYgVrXnjLYJuvWmcGqF6fIBBA5LTsRbasoMIYEg9cfDwpSZhmS38iIAHojj3iJ5VbRhMvF3Bq0rTH2KVEs%2BT%2Fb8hOtdxGGqVJ21Ou1sXKmK4gnn9GtEBGEpIqKM%2BRUyHcdAUMD%2F4DfwfF4UKyVLYqRyykNsnnvzZchqeJMfaRdyYfYAW09duST0KlpZyWPuoe2oGISwNRgNAcL7khxRIN6txAgRtEWClQYVpVafY1z1m%2F94cTlL4ERc6SHqrsK%2BKfsGebzfKxN8hHUSO9j4fDkfXqMIM%2BFEwb%2BNakddloX81SAprPhUH1feDEngQEtqHQ6fVBKze0hzb01tVAAxTWnTE3XejjpJzjDH6RJKa893p9dwdGA%2B%2Bv8sTe4FWoWuWDJlTh6bmusvVhStRidMn3eztqyznyJYhn%2Fz7nbQ2XWmihXt7nIdd553ucLEZhWk2CRjfr80Py05o2sTAqrMa0TOcvielS%2BFDVDdpJShZaYGhES6r00D%2BhgNpmMLOx%2Bs8GOqUBh646CztJzN3zwP%2B8QETE1NvqeWLtIEu0aGbPh9WmQ1zvlBpH1EV9%2BtQ5jL0XgiKHQTVxiL6XZmmrtu%2Bd6n3VMb%2F7TTfRYzWaKFT1ITNS41TLPI3IjTTnlsESR3b5gokrkqR%2BZJKD7ZBuz5MMj0WXjvQi3hS20X7fGQQHOeaTn6zLldra2evBbTS%2FQQzXMbBIkEbsSZ93Mbyv1lZMZF1n2Yq8YNVj&X-Amz-Signature=a9519cc070785f6e330866d7fa1a4791891fa10ab6b139b27a9a258129db5809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZQYYATH%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIEG%2BGV8qmLGPalmMhuRnzxoSJc7ReimDgfRGRVzbw8d2AiEAwt%2BMsF0e403Sn9yvmKobDcV01uA6U4dabi1mcKbZaTgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHznI%2F7tiwuu64nJZSrcAxEmX6r5cpl5FAygMcuiTjK2%2F7FcW4HRivYs6zK6%2Bz8cAq%2B0xmmVROqbBjvl7KY9y6UeTwLa%2BmlCvcLRv4osd9Pb8rHcc2%2FsJ9qX%2Bi4C%2FTE5aE4XyDR6yLMclRquo1mj3k3029oUGLAlxayAXsmiXF%2BcG8Ykq0IcGdQNXNq8uZYCVtIxQrNOrX1sP5%2BLs%2FUsVVeyXWsHV9gPfh8DIEITfe%2FzRzwr%2FhZDIv7s7s8PrWn5fK0PVGY3TvQoXFboYozG1OGQbWrW8zF2acJ%2B68%2BrFoAkhN9bdKTXDmw9m8xaVl41%2BYGoQbWdg0PbIbD7d9kNAbc7uCQcfFa7DuT3jYh6ruuAyChPL6dZTGOmohWdvY46BZVr13D0gAx5dytNBV6CAslkBo7xSHtcXTLjA8EhPynmdoBf%2B%2BDabYsLo8jyAzReGkEXQ0yh%2B0J4NiBHspbCxQqOHQkPkzXv0oliDlNkgSamgbIJBIEGqZqkyYfgXHC3X3W8f0pkPz6TLpTGuCyCmK5esWVJHcEWiPmchaMk9gACHtKFRkLQt1EY0ONrS5vWCBPnvM8UgLfYqcARH%2Fg%2FxzmoEH%2BiptP8KMD%2Fi2OgC%2FrmIYKsCENESGxo8F8kUZpnSlSrtSdiskKzpVV%2FMLSx%2Bs8GOqUBXgG2xiPAVhyqV%2BPFWniY4S2AT2%2F5t5qJkJW8nD3zn4LZzWtxsdFG7HEqc7Q9ScUr1XD3uJ%2BY17xO0Ni%2BqhQWOgZI%2BDucjGHGjSAbc9Lji%2FsKYoA9MqJTxGayxakpF%2F64%2BIldDrQ2uS9C0cmUmCCexbv3uZrfHEg7z%2Fjl9uOMBeCRisfevL8OfrUGMgxV1kAYbbkz7gzhJ%2FyOHXOEEchHZjXw6xcs&X-Amz-Signature=3c6ecc08dcbcd73d1acd340c988c7dc6f4be8310ee333ddc577577f3be7ce4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYORUGA%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQC9Jy2jEuCzdtuV9z39vEFW%2B8bJgjtzRl4wChG%2FfTIehAIhAIl1ENAksqsq9U9DYMZTghaE62z%2BzvhCoWj%2Fil8rsX5AKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO7aH%2BVzl28AUlk%2FEq3AP2ZdNe6IJ6%2FWg3Pm30k13C3ZsaEO%2FY6Yb750G2SlRsP0iRLwuBYeWdJxrVHgO9I5ZnKeCQMpZa3vLwaazUfBdnVNywoT4QgFNW3Aj16F6DaU7hXnzkZVKS1fuKrPBKPwbK7NlfmhmJiFqs%2BDB6%2BhEonNK5coSgkEyaklW9%2BIOql19SPHjitlQG9InstyDFBGOQj8XLWpd9%2FFxErYTaH950aQuw96CUK4vbMyjc5tRYB5wW7JxFpZF5G4HqbHiM6hLl8DuXIBJkExl9W60oSv8y%2Fk9NG2uPbuPeaTVAr7I2f5rm27oFHVwCi4f9ZSLZa1KYNeb2iSfT6X2zdtldyOrPbxRTy29CfKMISnxbflAuevvKL2tk1869I49RLHao5WLe%2BJiyywlT84Cz3HCWUZXZ0TDw9XOaXA4x4jOmDUEPsNMNA%2FYicWCuOF7e%2FhY8qMdoS4k0mrSr6ouS58JS4D9cjwhq0QAb93MS%2FKCRU1Q2sCcT5ugdfIH6xOhJ64hzmLUDhv6o179BNNECH6CtJJ84bRCJVI7z5LSdRfTxQer50cWGp36jhUM2Icv2KwGSmSFn9feFA5VmyumdOSCiFf65vXh%2Ff0yn8jIX11Ojmc2lq%2BSdj0Jw9FZY%2FBHVgzDWs%2FrPBjqkATDj5wx1OC9ELiNXnD9W4LztQtOwAA5jbH3%2FOZooaKxvliK2kgKyeaRyB%2FY27CMXiHiGMCDmBKNLT8TPIpbZ8wT7qqDiLdvPA8xXB%2Bd9GvjhGelFaKq0%2F2e9CUFxXnd%2ByLmoqdEVCDdrjF3HFE4I6NDAjcJ4rImRc6IDnJf7PWo2Zkr5sqaS1sgbLPqfvkngvK9bcUXH0pTl9nBFxwlA9mX4AZ65&X-Amz-Signature=4e277af2b69c9d8d7b22ca4e7d3b2a72f2a19f7be9432e33ae94826f69886e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYORUGA%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQC9Jy2jEuCzdtuV9z39vEFW%2B8bJgjtzRl4wChG%2FfTIehAIhAIl1ENAksqsq9U9DYMZTghaE62z%2BzvhCoWj%2Fil8rsX5AKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO7aH%2BVzl28AUlk%2FEq3AP2ZdNe6IJ6%2FWg3Pm30k13C3ZsaEO%2FY6Yb750G2SlRsP0iRLwuBYeWdJxrVHgO9I5ZnKeCQMpZa3vLwaazUfBdnVNywoT4QgFNW3Aj16F6DaU7hXnzkZVKS1fuKrPBKPwbK7NlfmhmJiFqs%2BDB6%2BhEonNK5coSgkEyaklW9%2BIOql19SPHjitlQG9InstyDFBGOQj8XLWpd9%2FFxErYTaH950aQuw96CUK4vbMyjc5tRYB5wW7JxFpZF5G4HqbHiM6hLl8DuXIBJkExl9W60oSv8y%2Fk9NG2uPbuPeaTVAr7I2f5rm27oFHVwCi4f9ZSLZa1KYNeb2iSfT6X2zdtldyOrPbxRTy29CfKMISnxbflAuevvKL2tk1869I49RLHao5WLe%2BJiyywlT84Cz3HCWUZXZ0TDw9XOaXA4x4jOmDUEPsNMNA%2FYicWCuOF7e%2FhY8qMdoS4k0mrSr6ouS58JS4D9cjwhq0QAb93MS%2FKCRU1Q2sCcT5ugdfIH6xOhJ64hzmLUDhv6o179BNNECH6CtJJ84bRCJVI7z5LSdRfTxQer50cWGp36jhUM2Icv2KwGSmSFn9feFA5VmyumdOSCiFf65vXh%2Ff0yn8jIX11Ojmc2lq%2BSdj0Jw9FZY%2FBHVgzDWs%2FrPBjqkATDj5wx1OC9ELiNXnD9W4LztQtOwAA5jbH3%2FOZooaKxvliK2kgKyeaRyB%2FY27CMXiHiGMCDmBKNLT8TPIpbZ8wT7qqDiLdvPA8xXB%2Bd9GvjhGelFaKq0%2F2e9CUFxXnd%2ByLmoqdEVCDdrjF3HFE4I6NDAjcJ4rImRc6IDnJf7PWo2Zkr5sqaS1sgbLPqfvkngvK9bcUXH0pTl9nBFxwlA9mX4AZ65&X-Amz-Signature=c67be18136f41f4ec964920203101cfe9a8f10dc1f228db16cff2e00c1f60d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYORUGA%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQC9Jy2jEuCzdtuV9z39vEFW%2B8bJgjtzRl4wChG%2FfTIehAIhAIl1ENAksqsq9U9DYMZTghaE62z%2BzvhCoWj%2Fil8rsX5AKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO7aH%2BVzl28AUlk%2FEq3AP2ZdNe6IJ6%2FWg3Pm30k13C3ZsaEO%2FY6Yb750G2SlRsP0iRLwuBYeWdJxrVHgO9I5ZnKeCQMpZa3vLwaazUfBdnVNywoT4QgFNW3Aj16F6DaU7hXnzkZVKS1fuKrPBKPwbK7NlfmhmJiFqs%2BDB6%2BhEonNK5coSgkEyaklW9%2BIOql19SPHjitlQG9InstyDFBGOQj8XLWpd9%2FFxErYTaH950aQuw96CUK4vbMyjc5tRYB5wW7JxFpZF5G4HqbHiM6hLl8DuXIBJkExl9W60oSv8y%2Fk9NG2uPbuPeaTVAr7I2f5rm27oFHVwCi4f9ZSLZa1KYNeb2iSfT6X2zdtldyOrPbxRTy29CfKMISnxbflAuevvKL2tk1869I49RLHao5WLe%2BJiyywlT84Cz3HCWUZXZ0TDw9XOaXA4x4jOmDUEPsNMNA%2FYicWCuOF7e%2FhY8qMdoS4k0mrSr6ouS58JS4D9cjwhq0QAb93MS%2FKCRU1Q2sCcT5ugdfIH6xOhJ64hzmLUDhv6o179BNNECH6CtJJ84bRCJVI7z5LSdRfTxQer50cWGp36jhUM2Icv2KwGSmSFn9feFA5VmyumdOSCiFf65vXh%2Ff0yn8jIX11Ojmc2lq%2BSdj0Jw9FZY%2FBHVgzDWs%2FrPBjqkATDj5wx1OC9ELiNXnD9W4LztQtOwAA5jbH3%2FOZooaKxvliK2kgKyeaRyB%2FY27CMXiHiGMCDmBKNLT8TPIpbZ8wT7qqDiLdvPA8xXB%2Bd9GvjhGelFaKq0%2F2e9CUFxXnd%2ByLmoqdEVCDdrjF3HFE4I6NDAjcJ4rImRc6IDnJf7PWo2Zkr5sqaS1sgbLPqfvkngvK9bcUXH0pTl9nBFxwlA9mX4AZ65&X-Amz-Signature=707c57ee439ebfd8c711273e2f2dc5336cd4520022ba5c153ea518742968fdd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYORUGA%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQC9Jy2jEuCzdtuV9z39vEFW%2B8bJgjtzRl4wChG%2FfTIehAIhAIl1ENAksqsq9U9DYMZTghaE62z%2BzvhCoWj%2Fil8rsX5AKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO7aH%2BVzl28AUlk%2FEq3AP2ZdNe6IJ6%2FWg3Pm30k13C3ZsaEO%2FY6Yb750G2SlRsP0iRLwuBYeWdJxrVHgO9I5ZnKeCQMpZa3vLwaazUfBdnVNywoT4QgFNW3Aj16F6DaU7hXnzkZVKS1fuKrPBKPwbK7NlfmhmJiFqs%2BDB6%2BhEonNK5coSgkEyaklW9%2BIOql19SPHjitlQG9InstyDFBGOQj8XLWpd9%2FFxErYTaH950aQuw96CUK4vbMyjc5tRYB5wW7JxFpZF5G4HqbHiM6hLl8DuXIBJkExl9W60oSv8y%2Fk9NG2uPbuPeaTVAr7I2f5rm27oFHVwCi4f9ZSLZa1KYNeb2iSfT6X2zdtldyOrPbxRTy29CfKMISnxbflAuevvKL2tk1869I49RLHao5WLe%2BJiyywlT84Cz3HCWUZXZ0TDw9XOaXA4x4jOmDUEPsNMNA%2FYicWCuOF7e%2FhY8qMdoS4k0mrSr6ouS58JS4D9cjwhq0QAb93MS%2FKCRU1Q2sCcT5ugdfIH6xOhJ64hzmLUDhv6o179BNNECH6CtJJ84bRCJVI7z5LSdRfTxQer50cWGp36jhUM2Icv2KwGSmSFn9feFA5VmyumdOSCiFf65vXh%2Ff0yn8jIX11Ojmc2lq%2BSdj0Jw9FZY%2FBHVgzDWs%2FrPBjqkATDj5wx1OC9ELiNXnD9W4LztQtOwAA5jbH3%2FOZooaKxvliK2kgKyeaRyB%2FY27CMXiHiGMCDmBKNLT8TPIpbZ8wT7qqDiLdvPA8xXB%2Bd9GvjhGelFaKq0%2F2e9CUFxXnd%2ByLmoqdEVCDdrjF3HFE4I6NDAjcJ4rImRc6IDnJf7PWo2Zkr5sqaS1sgbLPqfvkngvK9bcUXH0pTl9nBFxwlA9mX4AZ65&X-Amz-Signature=0a698df7b4258d6cdba3b5a3c0f25d38c7678f9e2d5f21831218ae16cdc93ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYORUGA%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQC9Jy2jEuCzdtuV9z39vEFW%2B8bJgjtzRl4wChG%2FfTIehAIhAIl1ENAksqsq9U9DYMZTghaE62z%2BzvhCoWj%2Fil8rsX5AKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO7aH%2BVzl28AUlk%2FEq3AP2ZdNe6IJ6%2FWg3Pm30k13C3ZsaEO%2FY6Yb750G2SlRsP0iRLwuBYeWdJxrVHgO9I5ZnKeCQMpZa3vLwaazUfBdnVNywoT4QgFNW3Aj16F6DaU7hXnzkZVKS1fuKrPBKPwbK7NlfmhmJiFqs%2BDB6%2BhEonNK5coSgkEyaklW9%2BIOql19SPHjitlQG9InstyDFBGOQj8XLWpd9%2FFxErYTaH950aQuw96CUK4vbMyjc5tRYB5wW7JxFpZF5G4HqbHiM6hLl8DuXIBJkExl9W60oSv8y%2Fk9NG2uPbuPeaTVAr7I2f5rm27oFHVwCi4f9ZSLZa1KYNeb2iSfT6X2zdtldyOrPbxRTy29CfKMISnxbflAuevvKL2tk1869I49RLHao5WLe%2BJiyywlT84Cz3HCWUZXZ0TDw9XOaXA4x4jOmDUEPsNMNA%2FYicWCuOF7e%2FhY8qMdoS4k0mrSr6ouS58JS4D9cjwhq0QAb93MS%2FKCRU1Q2sCcT5ugdfIH6xOhJ64hzmLUDhv6o179BNNECH6CtJJ84bRCJVI7z5LSdRfTxQer50cWGp36jhUM2Icv2KwGSmSFn9feFA5VmyumdOSCiFf65vXh%2Ff0yn8jIX11Ojmc2lq%2BSdj0Jw9FZY%2FBHVgzDWs%2FrPBjqkATDj5wx1OC9ELiNXnD9W4LztQtOwAA5jbH3%2FOZooaKxvliK2kgKyeaRyB%2FY27CMXiHiGMCDmBKNLT8TPIpbZ8wT7qqDiLdvPA8xXB%2Bd9GvjhGelFaKq0%2F2e9CUFxXnd%2ByLmoqdEVCDdrjF3HFE4I6NDAjcJ4rImRc6IDnJf7PWo2Zkr5sqaS1sgbLPqfvkngvK9bcUXH0pTl9nBFxwlA9mX4AZ65&X-Amz-Signature=e3db365366b2368d95e7f0762faf76ebbd83c2d77be46ffc34960ca5d78a5bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYORUGA%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQC9Jy2jEuCzdtuV9z39vEFW%2B8bJgjtzRl4wChG%2FfTIehAIhAIl1ENAksqsq9U9DYMZTghaE62z%2BzvhCoWj%2Fil8rsX5AKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO7aH%2BVzl28AUlk%2FEq3AP2ZdNe6IJ6%2FWg3Pm30k13C3ZsaEO%2FY6Yb750G2SlRsP0iRLwuBYeWdJxrVHgO9I5ZnKeCQMpZa3vLwaazUfBdnVNywoT4QgFNW3Aj16F6DaU7hXnzkZVKS1fuKrPBKPwbK7NlfmhmJiFqs%2BDB6%2BhEonNK5coSgkEyaklW9%2BIOql19SPHjitlQG9InstyDFBGOQj8XLWpd9%2FFxErYTaH950aQuw96CUK4vbMyjc5tRYB5wW7JxFpZF5G4HqbHiM6hLl8DuXIBJkExl9W60oSv8y%2Fk9NG2uPbuPeaTVAr7I2f5rm27oFHVwCi4f9ZSLZa1KYNeb2iSfT6X2zdtldyOrPbxRTy29CfKMISnxbflAuevvKL2tk1869I49RLHao5WLe%2BJiyywlT84Cz3HCWUZXZ0TDw9XOaXA4x4jOmDUEPsNMNA%2FYicWCuOF7e%2FhY8qMdoS4k0mrSr6ouS58JS4D9cjwhq0QAb93MS%2FKCRU1Q2sCcT5ugdfIH6xOhJ64hzmLUDhv6o179BNNECH6CtJJ84bRCJVI7z5LSdRfTxQer50cWGp36jhUM2Icv2KwGSmSFn9feFA5VmyumdOSCiFf65vXh%2Ff0yn8jIX11Ojmc2lq%2BSdj0Jw9FZY%2FBHVgzDWs%2FrPBjqkATDj5wx1OC9ELiNXnD9W4LztQtOwAA5jbH3%2FOZooaKxvliK2kgKyeaRyB%2FY27CMXiHiGMCDmBKNLT8TPIpbZ8wT7qqDiLdvPA8xXB%2Bd9GvjhGelFaKq0%2F2e9CUFxXnd%2ByLmoqdEVCDdrjF3HFE4I6NDAjcJ4rImRc6IDnJf7PWo2Zkr5sqaS1sgbLPqfvkngvK9bcUXH0pTl9nBFxwlA9mX4AZ65&X-Amz-Signature=953be2f85d1b919ec73ffffa221b5f81f6b81196f0ed3f491308cb8713060d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYORUGA%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQC9Jy2jEuCzdtuV9z39vEFW%2B8bJgjtzRl4wChG%2FfTIehAIhAIl1ENAksqsq9U9DYMZTghaE62z%2BzvhCoWj%2Fil8rsX5AKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO7aH%2BVzl28AUlk%2FEq3AP2ZdNe6IJ6%2FWg3Pm30k13C3ZsaEO%2FY6Yb750G2SlRsP0iRLwuBYeWdJxrVHgO9I5ZnKeCQMpZa3vLwaazUfBdnVNywoT4QgFNW3Aj16F6DaU7hXnzkZVKS1fuKrPBKPwbK7NlfmhmJiFqs%2BDB6%2BhEonNK5coSgkEyaklW9%2BIOql19SPHjitlQG9InstyDFBGOQj8XLWpd9%2FFxErYTaH950aQuw96CUK4vbMyjc5tRYB5wW7JxFpZF5G4HqbHiM6hLl8DuXIBJkExl9W60oSv8y%2Fk9NG2uPbuPeaTVAr7I2f5rm27oFHVwCi4f9ZSLZa1KYNeb2iSfT6X2zdtldyOrPbxRTy29CfKMISnxbflAuevvKL2tk1869I49RLHao5WLe%2BJiyywlT84Cz3HCWUZXZ0TDw9XOaXA4x4jOmDUEPsNMNA%2FYicWCuOF7e%2FhY8qMdoS4k0mrSr6ouS58JS4D9cjwhq0QAb93MS%2FKCRU1Q2sCcT5ugdfIH6xOhJ64hzmLUDhv6o179BNNECH6CtJJ84bRCJVI7z5LSdRfTxQer50cWGp36jhUM2Icv2KwGSmSFn9feFA5VmyumdOSCiFf65vXh%2Ff0yn8jIX11Ojmc2lq%2BSdj0Jw9FZY%2FBHVgzDWs%2FrPBjqkATDj5wx1OC9ELiNXnD9W4LztQtOwAA5jbH3%2FOZooaKxvliK2kgKyeaRyB%2FY27CMXiHiGMCDmBKNLT8TPIpbZ8wT7qqDiLdvPA8xXB%2Bd9GvjhGelFaKq0%2F2e9CUFxXnd%2ByLmoqdEVCDdrjF3HFE4I6NDAjcJ4rImRc6IDnJf7PWo2Zkr5sqaS1sgbLPqfvkngvK9bcUXH0pTl9nBFxwlA9mX4AZ65&X-Amz-Signature=725cdb1343cb0b992301f016781d1e93c22ace80856cc3b328287dc6943b2465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYORUGA%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQC9Jy2jEuCzdtuV9z39vEFW%2B8bJgjtzRl4wChG%2FfTIehAIhAIl1ENAksqsq9U9DYMZTghaE62z%2BzvhCoWj%2Fil8rsX5AKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO7aH%2BVzl28AUlk%2FEq3AP2ZdNe6IJ6%2FWg3Pm30k13C3ZsaEO%2FY6Yb750G2SlRsP0iRLwuBYeWdJxrVHgO9I5ZnKeCQMpZa3vLwaazUfBdnVNywoT4QgFNW3Aj16F6DaU7hXnzkZVKS1fuKrPBKPwbK7NlfmhmJiFqs%2BDB6%2BhEonNK5coSgkEyaklW9%2BIOql19SPHjitlQG9InstyDFBGOQj8XLWpd9%2FFxErYTaH950aQuw96CUK4vbMyjc5tRYB5wW7JxFpZF5G4HqbHiM6hLl8DuXIBJkExl9W60oSv8y%2Fk9NG2uPbuPeaTVAr7I2f5rm27oFHVwCi4f9ZSLZa1KYNeb2iSfT6X2zdtldyOrPbxRTy29CfKMISnxbflAuevvKL2tk1869I49RLHao5WLe%2BJiyywlT84Cz3HCWUZXZ0TDw9XOaXA4x4jOmDUEPsNMNA%2FYicWCuOF7e%2FhY8qMdoS4k0mrSr6ouS58JS4D9cjwhq0QAb93MS%2FKCRU1Q2sCcT5ugdfIH6xOhJ64hzmLUDhv6o179BNNECH6CtJJ84bRCJVI7z5LSdRfTxQer50cWGp36jhUM2Icv2KwGSmSFn9feFA5VmyumdOSCiFf65vXh%2Ff0yn8jIX11Ojmc2lq%2BSdj0Jw9FZY%2FBHVgzDWs%2FrPBjqkATDj5wx1OC9ELiNXnD9W4LztQtOwAA5jbH3%2FOZooaKxvliK2kgKyeaRyB%2FY27CMXiHiGMCDmBKNLT8TPIpbZ8wT7qqDiLdvPA8xXB%2Bd9GvjhGelFaKq0%2F2e9CUFxXnd%2ByLmoqdEVCDdrjF3HFE4I6NDAjcJ4rImRc6IDnJf7PWo2Zkr5sqaS1sgbLPqfvkngvK9bcUXH0pTl9nBFxwlA9mX4AZ65&X-Amz-Signature=d0089aa0bae394937d2d2f6382d62b638ab3bb848f16e75b81b4dae31c35b22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZYORUGA%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQC9Jy2jEuCzdtuV9z39vEFW%2B8bJgjtzRl4wChG%2FfTIehAIhAIl1ENAksqsq9U9DYMZTghaE62z%2BzvhCoWj%2Fil8rsX5AKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO7aH%2BVzl28AUlk%2FEq3AP2ZdNe6IJ6%2FWg3Pm30k13C3ZsaEO%2FY6Yb750G2SlRsP0iRLwuBYeWdJxrVHgO9I5ZnKeCQMpZa3vLwaazUfBdnVNywoT4QgFNW3Aj16F6DaU7hXnzkZVKS1fuKrPBKPwbK7NlfmhmJiFqs%2BDB6%2BhEonNK5coSgkEyaklW9%2BIOql19SPHjitlQG9InstyDFBGOQj8XLWpd9%2FFxErYTaH950aQuw96CUK4vbMyjc5tRYB5wW7JxFpZF5G4HqbHiM6hLl8DuXIBJkExl9W60oSv8y%2Fk9NG2uPbuPeaTVAr7I2f5rm27oFHVwCi4f9ZSLZa1KYNeb2iSfT6X2zdtldyOrPbxRTy29CfKMISnxbflAuevvKL2tk1869I49RLHao5WLe%2BJiyywlT84Cz3HCWUZXZ0TDw9XOaXA4x4jOmDUEPsNMNA%2FYicWCuOF7e%2FhY8qMdoS4k0mrSr6ouS58JS4D9cjwhq0QAb93MS%2FKCRU1Q2sCcT5ugdfIH6xOhJ64hzmLUDhv6o179BNNECH6CtJJ84bRCJVI7z5LSdRfTxQer50cWGp36jhUM2Icv2KwGSmSFn9feFA5VmyumdOSCiFf65vXh%2Ff0yn8jIX11Ojmc2lq%2BSdj0Jw9FZY%2FBHVgzDWs%2FrPBjqkATDj5wx1OC9ELiNXnD9W4LztQtOwAA5jbH3%2FOZooaKxvliK2kgKyeaRyB%2FY27CMXiHiGMCDmBKNLT8TPIpbZ8wT7qqDiLdvPA8xXB%2Bd9GvjhGelFaKq0%2F2e9CUFxXnd%2ByLmoqdEVCDdrjF3HFE4I6NDAjcJ4rImRc6IDnJf7PWo2Zkr5sqaS1sgbLPqfvkngvK9bcUXH0pTl9nBFxwlA9mX4AZ65&X-Amz-Signature=910477d81ef7133b54d0452885fbf12846de5c91fbfa3cd189267d3997d2f405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
