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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3T3GVD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICsTysx3tnn2Uf2HVdYtz6UEyLx3g8obbzXPSvmG%2FzWgAiEAu8q5YBKg6jdpkH8R%2FfAhIzmvoJTPwgISlnJUFbkEqiYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDKDX6%2FK%2F88ddufAEPCrcA3WnsnSmDJfPGsBvJaVLrgA4iyjsJp%2BIl8Eoj7MCQ6jM56Uu0NA9Cj9gUG08c8VQOQmHsX9Z5nRNr3xEcqTMfza7KX2GuOazko2B1x%2F8lwKvfYHTn3WpV2ezHxUgCV6jLgdQfHkLFcbV4WA65%2FNKEavJtTQBoJZeB1TiZ8ud0ya3fUk%2BohOzpdnfyVLXh5fZ69HnCu3CLRHMSgXLWK1dprvcjgSue4wUn8S8hMRdB%2Fme5eswhVN%2FYyS%2FeIJdjwkm8KGYWhCcAct7p8I%2Bka9Ygos93Y5KJEXYqdwKkSIyZmWsxtNiBHG2FtBMZPgApOE6sv7y7Hsw7C87slhWuxQlTUDMsjepqH7Kulp0j88nStmSSsTJAoWXWUcdPy3Sn6nXUlp5Yq8W7UJ0Pp12oHq%2B4HZsveLdkPAf%2BGZ7cZCxe6EaWXU3qZhtGFbudJWerl6mmLizW5POPjPFayF%2BOWSzN0w%2BfkwFHp62axoruWEnUFBsJInMNxnBYxQ%2BoasGiyj9WFs1aY9sL3Ndj4n8RGfesNHfDIpKVF9x1TtSJdRDoqS%2Ff%2BhTcS9qYSNaQEuHToGW6J%2FZ8R76uFdYIJ4l%2BuO8MXMaZHui2D6%2B7gewxKHY%2FQlpN3UOLbHSU3lK%2Ff%2BfMLWbhdAGOqUBWrRoUEUCF6G6R4uGa20pkquYCEvqH4J9f%2B1c0VJmw1Lx4Cih3wmg1YX2QyoYrMDDoEQiH7Be%2BpE0Z8EBzw1ZAZBpoNWH4YprkhKPjnBxNZ6GWC4%2FQ26V9WlS4KLUNsyEno%2BUvIGvUtRoeH2mBxR59wv3IM8ek1IL5bZEqd%2BaVcFO%2BH4mPfkO1kK2vfz%2Fp7ncBRE5gKDT%2B0ukhbwh7fTcKz6%2BhmXL&X-Amz-Signature=05c634373edb2a4e5e6fba9d84a93eeeadd57750f03f5ab8ce819a03ab2b8fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3T3GVD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICsTysx3tnn2Uf2HVdYtz6UEyLx3g8obbzXPSvmG%2FzWgAiEAu8q5YBKg6jdpkH8R%2FfAhIzmvoJTPwgISlnJUFbkEqiYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDKDX6%2FK%2F88ddufAEPCrcA3WnsnSmDJfPGsBvJaVLrgA4iyjsJp%2BIl8Eoj7MCQ6jM56Uu0NA9Cj9gUG08c8VQOQmHsX9Z5nRNr3xEcqTMfza7KX2GuOazko2B1x%2F8lwKvfYHTn3WpV2ezHxUgCV6jLgdQfHkLFcbV4WA65%2FNKEavJtTQBoJZeB1TiZ8ud0ya3fUk%2BohOzpdnfyVLXh5fZ69HnCu3CLRHMSgXLWK1dprvcjgSue4wUn8S8hMRdB%2Fme5eswhVN%2FYyS%2FeIJdjwkm8KGYWhCcAct7p8I%2Bka9Ygos93Y5KJEXYqdwKkSIyZmWsxtNiBHG2FtBMZPgApOE6sv7y7Hsw7C87slhWuxQlTUDMsjepqH7Kulp0j88nStmSSsTJAoWXWUcdPy3Sn6nXUlp5Yq8W7UJ0Pp12oHq%2B4HZsveLdkPAf%2BGZ7cZCxe6EaWXU3qZhtGFbudJWerl6mmLizW5POPjPFayF%2BOWSzN0w%2BfkwFHp62axoruWEnUFBsJInMNxnBYxQ%2BoasGiyj9WFs1aY9sL3Ndj4n8RGfesNHfDIpKVF9x1TtSJdRDoqS%2Ff%2BhTcS9qYSNaQEuHToGW6J%2FZ8R76uFdYIJ4l%2BuO8MXMaZHui2D6%2B7gewxKHY%2FQlpN3UOLbHSU3lK%2Ff%2BfMLWbhdAGOqUBWrRoUEUCF6G6R4uGa20pkquYCEvqH4J9f%2B1c0VJmw1Lx4Cih3wmg1YX2QyoYrMDDoEQiH7Be%2BpE0Z8EBzw1ZAZBpoNWH4YprkhKPjnBxNZ6GWC4%2FQ26V9WlS4KLUNsyEno%2BUvIGvUtRoeH2mBxR59wv3IM8ek1IL5bZEqd%2BaVcFO%2BH4mPfkO1kK2vfz%2Fp7ncBRE5gKDT%2B0ukhbwh7fTcKz6%2BhmXL&X-Amz-Signature=7f5f91e2d89f313d02ae7acdddb01a192cc07321c2dae7e4ca316d861aa185d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3T3GVD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICsTysx3tnn2Uf2HVdYtz6UEyLx3g8obbzXPSvmG%2FzWgAiEAu8q5YBKg6jdpkH8R%2FfAhIzmvoJTPwgISlnJUFbkEqiYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDKDX6%2FK%2F88ddufAEPCrcA3WnsnSmDJfPGsBvJaVLrgA4iyjsJp%2BIl8Eoj7MCQ6jM56Uu0NA9Cj9gUG08c8VQOQmHsX9Z5nRNr3xEcqTMfza7KX2GuOazko2B1x%2F8lwKvfYHTn3WpV2ezHxUgCV6jLgdQfHkLFcbV4WA65%2FNKEavJtTQBoJZeB1TiZ8ud0ya3fUk%2BohOzpdnfyVLXh5fZ69HnCu3CLRHMSgXLWK1dprvcjgSue4wUn8S8hMRdB%2Fme5eswhVN%2FYyS%2FeIJdjwkm8KGYWhCcAct7p8I%2Bka9Ygos93Y5KJEXYqdwKkSIyZmWsxtNiBHG2FtBMZPgApOE6sv7y7Hsw7C87slhWuxQlTUDMsjepqH7Kulp0j88nStmSSsTJAoWXWUcdPy3Sn6nXUlp5Yq8W7UJ0Pp12oHq%2B4HZsveLdkPAf%2BGZ7cZCxe6EaWXU3qZhtGFbudJWerl6mmLizW5POPjPFayF%2BOWSzN0w%2BfkwFHp62axoruWEnUFBsJInMNxnBYxQ%2BoasGiyj9WFs1aY9sL3Ndj4n8RGfesNHfDIpKVF9x1TtSJdRDoqS%2Ff%2BhTcS9qYSNaQEuHToGW6J%2FZ8R76uFdYIJ4l%2BuO8MXMaZHui2D6%2B7gewxKHY%2FQlpN3UOLbHSU3lK%2Ff%2BfMLWbhdAGOqUBWrRoUEUCF6G6R4uGa20pkquYCEvqH4J9f%2B1c0VJmw1Lx4Cih3wmg1YX2QyoYrMDDoEQiH7Be%2BpE0Z8EBzw1ZAZBpoNWH4YprkhKPjnBxNZ6GWC4%2FQ26V9WlS4KLUNsyEno%2BUvIGvUtRoeH2mBxR59wv3IM8ek1IL5bZEqd%2BaVcFO%2BH4mPfkO1kK2vfz%2Fp7ncBRE5gKDT%2B0ukhbwh7fTcKz6%2BhmXL&X-Amz-Signature=5a70b7843667660cd020301b32c2f978c2ce1fb467fb8172a1e94bc48703321c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3T3GVD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICsTysx3tnn2Uf2HVdYtz6UEyLx3g8obbzXPSvmG%2FzWgAiEAu8q5YBKg6jdpkH8R%2FfAhIzmvoJTPwgISlnJUFbkEqiYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDKDX6%2FK%2F88ddufAEPCrcA3WnsnSmDJfPGsBvJaVLrgA4iyjsJp%2BIl8Eoj7MCQ6jM56Uu0NA9Cj9gUG08c8VQOQmHsX9Z5nRNr3xEcqTMfza7KX2GuOazko2B1x%2F8lwKvfYHTn3WpV2ezHxUgCV6jLgdQfHkLFcbV4WA65%2FNKEavJtTQBoJZeB1TiZ8ud0ya3fUk%2BohOzpdnfyVLXh5fZ69HnCu3CLRHMSgXLWK1dprvcjgSue4wUn8S8hMRdB%2Fme5eswhVN%2FYyS%2FeIJdjwkm8KGYWhCcAct7p8I%2Bka9Ygos93Y5KJEXYqdwKkSIyZmWsxtNiBHG2FtBMZPgApOE6sv7y7Hsw7C87slhWuxQlTUDMsjepqH7Kulp0j88nStmSSsTJAoWXWUcdPy3Sn6nXUlp5Yq8W7UJ0Pp12oHq%2B4HZsveLdkPAf%2BGZ7cZCxe6EaWXU3qZhtGFbudJWerl6mmLizW5POPjPFayF%2BOWSzN0w%2BfkwFHp62axoruWEnUFBsJInMNxnBYxQ%2BoasGiyj9WFs1aY9sL3Ndj4n8RGfesNHfDIpKVF9x1TtSJdRDoqS%2Ff%2BhTcS9qYSNaQEuHToGW6J%2FZ8R76uFdYIJ4l%2BuO8MXMaZHui2D6%2B7gewxKHY%2FQlpN3UOLbHSU3lK%2Ff%2BfMLWbhdAGOqUBWrRoUEUCF6G6R4uGa20pkquYCEvqH4J9f%2B1c0VJmw1Lx4Cih3wmg1YX2QyoYrMDDoEQiH7Be%2BpE0Z8EBzw1ZAZBpoNWH4YprkhKPjnBxNZ6GWC4%2FQ26V9WlS4KLUNsyEno%2BUvIGvUtRoeH2mBxR59wv3IM8ek1IL5bZEqd%2BaVcFO%2BH4mPfkO1kK2vfz%2Fp7ncBRE5gKDT%2B0ukhbwh7fTcKz6%2BhmXL&X-Amz-Signature=d5da78de0d9972aa01d04750a9395cf857347843b0f98c610979f81fdf4812c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3T3GVD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICsTysx3tnn2Uf2HVdYtz6UEyLx3g8obbzXPSvmG%2FzWgAiEAu8q5YBKg6jdpkH8R%2FfAhIzmvoJTPwgISlnJUFbkEqiYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDKDX6%2FK%2F88ddufAEPCrcA3WnsnSmDJfPGsBvJaVLrgA4iyjsJp%2BIl8Eoj7MCQ6jM56Uu0NA9Cj9gUG08c8VQOQmHsX9Z5nRNr3xEcqTMfza7KX2GuOazko2B1x%2F8lwKvfYHTn3WpV2ezHxUgCV6jLgdQfHkLFcbV4WA65%2FNKEavJtTQBoJZeB1TiZ8ud0ya3fUk%2BohOzpdnfyVLXh5fZ69HnCu3CLRHMSgXLWK1dprvcjgSue4wUn8S8hMRdB%2Fme5eswhVN%2FYyS%2FeIJdjwkm8KGYWhCcAct7p8I%2Bka9Ygos93Y5KJEXYqdwKkSIyZmWsxtNiBHG2FtBMZPgApOE6sv7y7Hsw7C87slhWuxQlTUDMsjepqH7Kulp0j88nStmSSsTJAoWXWUcdPy3Sn6nXUlp5Yq8W7UJ0Pp12oHq%2B4HZsveLdkPAf%2BGZ7cZCxe6EaWXU3qZhtGFbudJWerl6mmLizW5POPjPFayF%2BOWSzN0w%2BfkwFHp62axoruWEnUFBsJInMNxnBYxQ%2BoasGiyj9WFs1aY9sL3Ndj4n8RGfesNHfDIpKVF9x1TtSJdRDoqS%2Ff%2BhTcS9qYSNaQEuHToGW6J%2FZ8R76uFdYIJ4l%2BuO8MXMaZHui2D6%2B7gewxKHY%2FQlpN3UOLbHSU3lK%2Ff%2BfMLWbhdAGOqUBWrRoUEUCF6G6R4uGa20pkquYCEvqH4J9f%2B1c0VJmw1Lx4Cih3wmg1YX2QyoYrMDDoEQiH7Be%2BpE0Z8EBzw1ZAZBpoNWH4YprkhKPjnBxNZ6GWC4%2FQ26V9WlS4KLUNsyEno%2BUvIGvUtRoeH2mBxR59wv3IM8ek1IL5bZEqd%2BaVcFO%2BH4mPfkO1kK2vfz%2Fp7ncBRE5gKDT%2B0ukhbwh7fTcKz6%2BhmXL&X-Amz-Signature=f9ac78b6637080d6509dafeaa673c1123a11d9429bc3d535ade53db9dd324410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3T3GVD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICsTysx3tnn2Uf2HVdYtz6UEyLx3g8obbzXPSvmG%2FzWgAiEAu8q5YBKg6jdpkH8R%2FfAhIzmvoJTPwgISlnJUFbkEqiYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDKDX6%2FK%2F88ddufAEPCrcA3WnsnSmDJfPGsBvJaVLrgA4iyjsJp%2BIl8Eoj7MCQ6jM56Uu0NA9Cj9gUG08c8VQOQmHsX9Z5nRNr3xEcqTMfza7KX2GuOazko2B1x%2F8lwKvfYHTn3WpV2ezHxUgCV6jLgdQfHkLFcbV4WA65%2FNKEavJtTQBoJZeB1TiZ8ud0ya3fUk%2BohOzpdnfyVLXh5fZ69HnCu3CLRHMSgXLWK1dprvcjgSue4wUn8S8hMRdB%2Fme5eswhVN%2FYyS%2FeIJdjwkm8KGYWhCcAct7p8I%2Bka9Ygos93Y5KJEXYqdwKkSIyZmWsxtNiBHG2FtBMZPgApOE6sv7y7Hsw7C87slhWuxQlTUDMsjepqH7Kulp0j88nStmSSsTJAoWXWUcdPy3Sn6nXUlp5Yq8W7UJ0Pp12oHq%2B4HZsveLdkPAf%2BGZ7cZCxe6EaWXU3qZhtGFbudJWerl6mmLizW5POPjPFayF%2BOWSzN0w%2BfkwFHp62axoruWEnUFBsJInMNxnBYxQ%2BoasGiyj9WFs1aY9sL3Ndj4n8RGfesNHfDIpKVF9x1TtSJdRDoqS%2Ff%2BhTcS9qYSNaQEuHToGW6J%2FZ8R76uFdYIJ4l%2BuO8MXMaZHui2D6%2B7gewxKHY%2FQlpN3UOLbHSU3lK%2Ff%2BfMLWbhdAGOqUBWrRoUEUCF6G6R4uGa20pkquYCEvqH4J9f%2B1c0VJmw1Lx4Cih3wmg1YX2QyoYrMDDoEQiH7Be%2BpE0Z8EBzw1ZAZBpoNWH4YprkhKPjnBxNZ6GWC4%2FQ26V9WlS4KLUNsyEno%2BUvIGvUtRoeH2mBxR59wv3IM8ek1IL5bZEqd%2BaVcFO%2BH4mPfkO1kK2vfz%2Fp7ncBRE5gKDT%2B0ukhbwh7fTcKz6%2BhmXL&X-Amz-Signature=98ef55c2fbf653d05cf52788904e26a15cd6479423ae6f8265cc5923734dc53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3T3GVD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICsTysx3tnn2Uf2HVdYtz6UEyLx3g8obbzXPSvmG%2FzWgAiEAu8q5YBKg6jdpkH8R%2FfAhIzmvoJTPwgISlnJUFbkEqiYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDKDX6%2FK%2F88ddufAEPCrcA3WnsnSmDJfPGsBvJaVLrgA4iyjsJp%2BIl8Eoj7MCQ6jM56Uu0NA9Cj9gUG08c8VQOQmHsX9Z5nRNr3xEcqTMfza7KX2GuOazko2B1x%2F8lwKvfYHTn3WpV2ezHxUgCV6jLgdQfHkLFcbV4WA65%2FNKEavJtTQBoJZeB1TiZ8ud0ya3fUk%2BohOzpdnfyVLXh5fZ69HnCu3CLRHMSgXLWK1dprvcjgSue4wUn8S8hMRdB%2Fme5eswhVN%2FYyS%2FeIJdjwkm8KGYWhCcAct7p8I%2Bka9Ygos93Y5KJEXYqdwKkSIyZmWsxtNiBHG2FtBMZPgApOE6sv7y7Hsw7C87slhWuxQlTUDMsjepqH7Kulp0j88nStmSSsTJAoWXWUcdPy3Sn6nXUlp5Yq8W7UJ0Pp12oHq%2B4HZsveLdkPAf%2BGZ7cZCxe6EaWXU3qZhtGFbudJWerl6mmLizW5POPjPFayF%2BOWSzN0w%2BfkwFHp62axoruWEnUFBsJInMNxnBYxQ%2BoasGiyj9WFs1aY9sL3Ndj4n8RGfesNHfDIpKVF9x1TtSJdRDoqS%2Ff%2BhTcS9qYSNaQEuHToGW6J%2FZ8R76uFdYIJ4l%2BuO8MXMaZHui2D6%2B7gewxKHY%2FQlpN3UOLbHSU3lK%2Ff%2BfMLWbhdAGOqUBWrRoUEUCF6G6R4uGa20pkquYCEvqH4J9f%2B1c0VJmw1Lx4Cih3wmg1YX2QyoYrMDDoEQiH7Be%2BpE0Z8EBzw1ZAZBpoNWH4YprkhKPjnBxNZ6GWC4%2FQ26V9WlS4KLUNsyEno%2BUvIGvUtRoeH2mBxR59wv3IM8ek1IL5bZEqd%2BaVcFO%2BH4mPfkO1kK2vfz%2Fp7ncBRE5gKDT%2B0ukhbwh7fTcKz6%2BhmXL&X-Amz-Signature=1750573a8e7ef45eb1d32772236c84acb9955bf8286e55f86bda618d2ff2f869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3T3GVD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICsTysx3tnn2Uf2HVdYtz6UEyLx3g8obbzXPSvmG%2FzWgAiEAu8q5YBKg6jdpkH8R%2FfAhIzmvoJTPwgISlnJUFbkEqiYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDKDX6%2FK%2F88ddufAEPCrcA3WnsnSmDJfPGsBvJaVLrgA4iyjsJp%2BIl8Eoj7MCQ6jM56Uu0NA9Cj9gUG08c8VQOQmHsX9Z5nRNr3xEcqTMfza7KX2GuOazko2B1x%2F8lwKvfYHTn3WpV2ezHxUgCV6jLgdQfHkLFcbV4WA65%2FNKEavJtTQBoJZeB1TiZ8ud0ya3fUk%2BohOzpdnfyVLXh5fZ69HnCu3CLRHMSgXLWK1dprvcjgSue4wUn8S8hMRdB%2Fme5eswhVN%2FYyS%2FeIJdjwkm8KGYWhCcAct7p8I%2Bka9Ygos93Y5KJEXYqdwKkSIyZmWsxtNiBHG2FtBMZPgApOE6sv7y7Hsw7C87slhWuxQlTUDMsjepqH7Kulp0j88nStmSSsTJAoWXWUcdPy3Sn6nXUlp5Yq8W7UJ0Pp12oHq%2B4HZsveLdkPAf%2BGZ7cZCxe6EaWXU3qZhtGFbudJWerl6mmLizW5POPjPFayF%2BOWSzN0w%2BfkwFHp62axoruWEnUFBsJInMNxnBYxQ%2BoasGiyj9WFs1aY9sL3Ndj4n8RGfesNHfDIpKVF9x1TtSJdRDoqS%2Ff%2BhTcS9qYSNaQEuHToGW6J%2FZ8R76uFdYIJ4l%2BuO8MXMaZHui2D6%2B7gewxKHY%2FQlpN3UOLbHSU3lK%2Ff%2BfMLWbhdAGOqUBWrRoUEUCF6G6R4uGa20pkquYCEvqH4J9f%2B1c0VJmw1Lx4Cih3wmg1YX2QyoYrMDDoEQiH7Be%2BpE0Z8EBzw1ZAZBpoNWH4YprkhKPjnBxNZ6GWC4%2FQ26V9WlS4KLUNsyEno%2BUvIGvUtRoeH2mBxR59wv3IM8ek1IL5bZEqd%2BaVcFO%2BH4mPfkO1kK2vfz%2Fp7ncBRE5gKDT%2B0ukhbwh7fTcKz6%2BhmXL&X-Amz-Signature=1469aa889a2e792255e0b430d0820c70f9f2da12d28f6a04b7cf9b6a49d16f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3T3GVD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICsTysx3tnn2Uf2HVdYtz6UEyLx3g8obbzXPSvmG%2FzWgAiEAu8q5YBKg6jdpkH8R%2FfAhIzmvoJTPwgISlnJUFbkEqiYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDKDX6%2FK%2F88ddufAEPCrcA3WnsnSmDJfPGsBvJaVLrgA4iyjsJp%2BIl8Eoj7MCQ6jM56Uu0NA9Cj9gUG08c8VQOQmHsX9Z5nRNr3xEcqTMfza7KX2GuOazko2B1x%2F8lwKvfYHTn3WpV2ezHxUgCV6jLgdQfHkLFcbV4WA65%2FNKEavJtTQBoJZeB1TiZ8ud0ya3fUk%2BohOzpdnfyVLXh5fZ69HnCu3CLRHMSgXLWK1dprvcjgSue4wUn8S8hMRdB%2Fme5eswhVN%2FYyS%2FeIJdjwkm8KGYWhCcAct7p8I%2Bka9Ygos93Y5KJEXYqdwKkSIyZmWsxtNiBHG2FtBMZPgApOE6sv7y7Hsw7C87slhWuxQlTUDMsjepqH7Kulp0j88nStmSSsTJAoWXWUcdPy3Sn6nXUlp5Yq8W7UJ0Pp12oHq%2B4HZsveLdkPAf%2BGZ7cZCxe6EaWXU3qZhtGFbudJWerl6mmLizW5POPjPFayF%2BOWSzN0w%2BfkwFHp62axoruWEnUFBsJInMNxnBYxQ%2BoasGiyj9WFs1aY9sL3Ndj4n8RGfesNHfDIpKVF9x1TtSJdRDoqS%2Ff%2BhTcS9qYSNaQEuHToGW6J%2FZ8R76uFdYIJ4l%2BuO8MXMaZHui2D6%2B7gewxKHY%2FQlpN3UOLbHSU3lK%2Ff%2BfMLWbhdAGOqUBWrRoUEUCF6G6R4uGa20pkquYCEvqH4J9f%2B1c0VJmw1Lx4Cih3wmg1YX2QyoYrMDDoEQiH7Be%2BpE0Z8EBzw1ZAZBpoNWH4YprkhKPjnBxNZ6GWC4%2FQ26V9WlS4KLUNsyEno%2BUvIGvUtRoeH2mBxR59wv3IM8ek1IL5bZEqd%2BaVcFO%2BH4mPfkO1kK2vfz%2Fp7ncBRE5gKDT%2B0ukhbwh7fTcKz6%2BhmXL&X-Amz-Signature=a0ea2fc838463eb353779b90119baed32ca05a87c67b7ac9bb6fc5400723563f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL3T3GVD%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICsTysx3tnn2Uf2HVdYtz6UEyLx3g8obbzXPSvmG%2FzWgAiEAu8q5YBKg6jdpkH8R%2FfAhIzmvoJTPwgISlnJUFbkEqiYq%2FwMIDRAAGgw2Mzc0MjMxODM4MDUiDKDX6%2FK%2F88ddufAEPCrcA3WnsnSmDJfPGsBvJaVLrgA4iyjsJp%2BIl8Eoj7MCQ6jM56Uu0NA9Cj9gUG08c8VQOQmHsX9Z5nRNr3xEcqTMfza7KX2GuOazko2B1x%2F8lwKvfYHTn3WpV2ezHxUgCV6jLgdQfHkLFcbV4WA65%2FNKEavJtTQBoJZeB1TiZ8ud0ya3fUk%2BohOzpdnfyVLXh5fZ69HnCu3CLRHMSgXLWK1dprvcjgSue4wUn8S8hMRdB%2Fme5eswhVN%2FYyS%2FeIJdjwkm8KGYWhCcAct7p8I%2Bka9Ygos93Y5KJEXYqdwKkSIyZmWsxtNiBHG2FtBMZPgApOE6sv7y7Hsw7C87slhWuxQlTUDMsjepqH7Kulp0j88nStmSSsTJAoWXWUcdPy3Sn6nXUlp5Yq8W7UJ0Pp12oHq%2B4HZsveLdkPAf%2BGZ7cZCxe6EaWXU3qZhtGFbudJWerl6mmLizW5POPjPFayF%2BOWSzN0w%2BfkwFHp62axoruWEnUFBsJInMNxnBYxQ%2BoasGiyj9WFs1aY9sL3Ndj4n8RGfesNHfDIpKVF9x1TtSJdRDoqS%2Ff%2BhTcS9qYSNaQEuHToGW6J%2FZ8R76uFdYIJ4l%2BuO8MXMaZHui2D6%2B7gewxKHY%2FQlpN3UOLbHSU3lK%2Ff%2BfMLWbhdAGOqUBWrRoUEUCF6G6R4uGa20pkquYCEvqH4J9f%2B1c0VJmw1Lx4Cih3wmg1YX2QyoYrMDDoEQiH7Be%2BpE0Z8EBzw1ZAZBpoNWH4YprkhKPjnBxNZ6GWC4%2FQ26V9WlS4KLUNsyEno%2BUvIGvUtRoeH2mBxR59wv3IM8ek1IL5bZEqd%2BaVcFO%2BH4mPfkO1kK2vfz%2Fp7ncBRE5gKDT%2B0ukhbwh7fTcKz6%2BhmXL&X-Amz-Signature=bb55a05b2ab4e25a51aa8ce514069eaa71b7db05c53ebd21f2291a068461ac78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CC4XI7A%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIDzeuLPCBqkjTruTAfXu4gbvTY7HhuKePg5gzjwxn9%2BhAiEAz08fse%2FWoxdpPLgHQjqY4z%2BlcT45D8fX7My5c5SJ3k0q%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDB4NiwdiU%2Fk52FCZqircA9hwKONFeK4f96SLeFjPJOKvpthaM%2Bz7KyYvBu5nRv0ea94kOhvNMqlLAFxvwvOp6D17RC3woTHHYszxM0g3Jzr7ez6X3nUG8Ojkd1NLtyv0IhzCRt7ZyxQhiURy9yAhU7EFpU4dDougQtRtgO30wHIQGPW8KmU2lXByCod6IGYX8jSEjvKvqSHHd8WleFAVWF3aHdpG4iJmqaqASKqYrygAXwaRl70OZmULPCurXj%2F%2FwOanUr0wm1x9AWJiqspRQZy87x65Tgj6g0lcXBba7p%2FdHtI0C4KPIJHcVABWt835PY%2BZcFH%2FvCy7%2B2oZj7ILAFHWMRMkGKAA1zXZz6MtaAk2L26Nhg%2FbxmREjzoM3LAw7vAQKnIgMCkpXj8Z2W9fcezfxQN%2F6vEkD1uHVNNlNX5TkakwKi1pyrrP5I2dCgRbuSlTsEAag%2FS2pcZoCWZZNnAhqQCWqCh3RFTRocGlOEx6IHEfytRmZXKD4kP5bdxaRh3n%2FIyzxCEr6SMGnwt0IoU5P4rH4CUtPhsZ%2Fb1b0CZzrIuGqMkqjuAmWm7HWkgEbiFPKhXVCzOhW2S2XZdbJqHVKHwJmqYj5aDVQ2jN%2BMjvWouhUtMgOGaq1EPD5BDIVczunYEGShg0RO9tMJuDhdAGOqUB7angHEm1P8bi%2BLGfB8MTyWUXwACA2JD0808KQPlDdKMJ30Yae5h00rxBs%2Brg6qvYArCwyN6HJu4i8HIkCh98kSS3F7mB%2ByJivNIdM%2FVrgvyKVRQIE2RBHopDKGvv%2FWEjj2DoyeSj373gtQqUA%2FLiEcm%2BXHQa6tZcxp4VVaiemsn1%2BmQaIbT0UvQmUDSwiyT8x3OWDB091ME3jUVrbU0HJQQVKssY&X-Amz-Signature=f8e04d38ec4326da92f1f790a0c16630b4dcec861e5c6575b39a86617cf68cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4TJVS%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAfqX%2Fyf83qWQgBLWtz9YsbRD7VZrjaChXc1vW5CiM%2FEAiAieAoM37k1KS7cm%2BkjzzVBdwTEX3KyRAuE9HCR8WMvqir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMO8rxmXlGgrQyWHsoKtwDHO5%2BeDj4C6hPNJjZPfxLF%2BItEly4hyGRLk42kzjHutBuhD4qvAEsdkSBFtgUjsp3QJNVS2kdus%2BrEjJdg24LYQZAGN2xgInHUw%2FbnMvhh4XFBkirrFJB3O82BRsPeLtI%2BOxGjNKa5TqHR9mXLcqDA96VV7rUoSdUSN78MfvVE6v2V2XLZF5UdvrqmkbYYmks0aWSg2nMWqIC0QaRdxPGLJh%2BDy68CZ3rfWuL8Wn5sy3au%2BG9ZljCJ6VccSu9M457jjoPZOjrZ3j7w6pMFDTxY7IR7VIYEKvxADD3N4TgbvAJ04Pfs8hwyxzanqJk%2B4tj87WkgCuugwZL5JSfDleAdWa66mHwK0hlkRs7%2BsFiz67Ru4FjrjyXsXgsEwS6Jhf87E8SWGQYeumgq1H%2Fq94R0lJeBHsMvQGUOLO39JTq0Vj4IuFOD%2FmFrXmtD5v9z8SLy6YEL0spPn02qCcrT9PVtedMxi5BFYrDd1WzrCR2oyG3vNtcpywejsW5El0gUqSuK7210%2BLhiSGa90oRZaZ4uevwWiTSjb%2Fu5PY5NWEWoUWg%2Fc5YO5PoCUZpgGFBjK6cnQLj77M0kGnBT5AS4QcWH6o3lol%2FdXVE036JmQcXOsZUCu2btmnbakDnt7Yw74OF0AY6pgFY4vPRa1juRi3SU8X3Ad%2FPZIDBdntKobpPR%2FOEQjW0VXEvVTozQVVfWYvQq4iuOLHKcgn3l70OV4jz0nnS6b1w9dAbbcOvMP1GDENt%2Bei2sUIrHP70XU4Ux8w2wUykDJr4FBL1%2BWUp8dgpszlEyGFL2mntrfKKkBP%2BEe8XZeMy2f%2Bm46wBHkOVPXcjHPeDDRqkZ2vIn6MqrYkI2Pa6F%2FFSag5MkniZ&X-Amz-Signature=dd077e6c03668a753f7eb3e9c215d2aec5702714a893a7d8ee83389fc89203a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4TJVS%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAfqX%2Fyf83qWQgBLWtz9YsbRD7VZrjaChXc1vW5CiM%2FEAiAieAoM37k1KS7cm%2BkjzzVBdwTEX3KyRAuE9HCR8WMvqir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMO8rxmXlGgrQyWHsoKtwDHO5%2BeDj4C6hPNJjZPfxLF%2BItEly4hyGRLk42kzjHutBuhD4qvAEsdkSBFtgUjsp3QJNVS2kdus%2BrEjJdg24LYQZAGN2xgInHUw%2FbnMvhh4XFBkirrFJB3O82BRsPeLtI%2BOxGjNKa5TqHR9mXLcqDA96VV7rUoSdUSN78MfvVE6v2V2XLZF5UdvrqmkbYYmks0aWSg2nMWqIC0QaRdxPGLJh%2BDy68CZ3rfWuL8Wn5sy3au%2BG9ZljCJ6VccSu9M457jjoPZOjrZ3j7w6pMFDTxY7IR7VIYEKvxADD3N4TgbvAJ04Pfs8hwyxzanqJk%2B4tj87WkgCuugwZL5JSfDleAdWa66mHwK0hlkRs7%2BsFiz67Ru4FjrjyXsXgsEwS6Jhf87E8SWGQYeumgq1H%2Fq94R0lJeBHsMvQGUOLO39JTq0Vj4IuFOD%2FmFrXmtD5v9z8SLy6YEL0spPn02qCcrT9PVtedMxi5BFYrDd1WzrCR2oyG3vNtcpywejsW5El0gUqSuK7210%2BLhiSGa90oRZaZ4uevwWiTSjb%2Fu5PY5NWEWoUWg%2Fc5YO5PoCUZpgGFBjK6cnQLj77M0kGnBT5AS4QcWH6o3lol%2FdXVE036JmQcXOsZUCu2btmnbakDnt7Yw74OF0AY6pgFY4vPRa1juRi3SU8X3Ad%2FPZIDBdntKobpPR%2FOEQjW0VXEvVTozQVVfWYvQq4iuOLHKcgn3l70OV4jz0nnS6b1w9dAbbcOvMP1GDENt%2Bei2sUIrHP70XU4Ux8w2wUykDJr4FBL1%2BWUp8dgpszlEyGFL2mntrfKKkBP%2BEe8XZeMy2f%2Bm46wBHkOVPXcjHPeDDRqkZ2vIn6MqrYkI2Pa6F%2FFSag5MkniZ&X-Amz-Signature=07e7ae0429de1e8daf15ff95495c12145044dfc49dc7ed2e660b27ffc24e218e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4TJVS%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAfqX%2Fyf83qWQgBLWtz9YsbRD7VZrjaChXc1vW5CiM%2FEAiAieAoM37k1KS7cm%2BkjzzVBdwTEX3KyRAuE9HCR8WMvqir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMO8rxmXlGgrQyWHsoKtwDHO5%2BeDj4C6hPNJjZPfxLF%2BItEly4hyGRLk42kzjHutBuhD4qvAEsdkSBFtgUjsp3QJNVS2kdus%2BrEjJdg24LYQZAGN2xgInHUw%2FbnMvhh4XFBkirrFJB3O82BRsPeLtI%2BOxGjNKa5TqHR9mXLcqDA96VV7rUoSdUSN78MfvVE6v2V2XLZF5UdvrqmkbYYmks0aWSg2nMWqIC0QaRdxPGLJh%2BDy68CZ3rfWuL8Wn5sy3au%2BG9ZljCJ6VccSu9M457jjoPZOjrZ3j7w6pMFDTxY7IR7VIYEKvxADD3N4TgbvAJ04Pfs8hwyxzanqJk%2B4tj87WkgCuugwZL5JSfDleAdWa66mHwK0hlkRs7%2BsFiz67Ru4FjrjyXsXgsEwS6Jhf87E8SWGQYeumgq1H%2Fq94R0lJeBHsMvQGUOLO39JTq0Vj4IuFOD%2FmFrXmtD5v9z8SLy6YEL0spPn02qCcrT9PVtedMxi5BFYrDd1WzrCR2oyG3vNtcpywejsW5El0gUqSuK7210%2BLhiSGa90oRZaZ4uevwWiTSjb%2Fu5PY5NWEWoUWg%2Fc5YO5PoCUZpgGFBjK6cnQLj77M0kGnBT5AS4QcWH6o3lol%2FdXVE036JmQcXOsZUCu2btmnbakDnt7Yw74OF0AY6pgFY4vPRa1juRi3SU8X3Ad%2FPZIDBdntKobpPR%2FOEQjW0VXEvVTozQVVfWYvQq4iuOLHKcgn3l70OV4jz0nnS6b1w9dAbbcOvMP1GDENt%2Bei2sUIrHP70XU4Ux8w2wUykDJr4FBL1%2BWUp8dgpszlEyGFL2mntrfKKkBP%2BEe8XZeMy2f%2Bm46wBHkOVPXcjHPeDDRqkZ2vIn6MqrYkI2Pa6F%2FFSag5MkniZ&X-Amz-Signature=2dd966ea93f77a93c4d830cac7d2b94a2f1f9892bba8f9fc371bbfb2573772d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4TJVS%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAfqX%2Fyf83qWQgBLWtz9YsbRD7VZrjaChXc1vW5CiM%2FEAiAieAoM37k1KS7cm%2BkjzzVBdwTEX3KyRAuE9HCR8WMvqir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMO8rxmXlGgrQyWHsoKtwDHO5%2BeDj4C6hPNJjZPfxLF%2BItEly4hyGRLk42kzjHutBuhD4qvAEsdkSBFtgUjsp3QJNVS2kdus%2BrEjJdg24LYQZAGN2xgInHUw%2FbnMvhh4XFBkirrFJB3O82BRsPeLtI%2BOxGjNKa5TqHR9mXLcqDA96VV7rUoSdUSN78MfvVE6v2V2XLZF5UdvrqmkbYYmks0aWSg2nMWqIC0QaRdxPGLJh%2BDy68CZ3rfWuL8Wn5sy3au%2BG9ZljCJ6VccSu9M457jjoPZOjrZ3j7w6pMFDTxY7IR7VIYEKvxADD3N4TgbvAJ04Pfs8hwyxzanqJk%2B4tj87WkgCuugwZL5JSfDleAdWa66mHwK0hlkRs7%2BsFiz67Ru4FjrjyXsXgsEwS6Jhf87E8SWGQYeumgq1H%2Fq94R0lJeBHsMvQGUOLO39JTq0Vj4IuFOD%2FmFrXmtD5v9z8SLy6YEL0spPn02qCcrT9PVtedMxi5BFYrDd1WzrCR2oyG3vNtcpywejsW5El0gUqSuK7210%2BLhiSGa90oRZaZ4uevwWiTSjb%2Fu5PY5NWEWoUWg%2Fc5YO5PoCUZpgGFBjK6cnQLj77M0kGnBT5AS4QcWH6o3lol%2FdXVE036JmQcXOsZUCu2btmnbakDnt7Yw74OF0AY6pgFY4vPRa1juRi3SU8X3Ad%2FPZIDBdntKobpPR%2FOEQjW0VXEvVTozQVVfWYvQq4iuOLHKcgn3l70OV4jz0nnS6b1w9dAbbcOvMP1GDENt%2Bei2sUIrHP70XU4Ux8w2wUykDJr4FBL1%2BWUp8dgpszlEyGFL2mntrfKKkBP%2BEe8XZeMy2f%2Bm46wBHkOVPXcjHPeDDRqkZ2vIn6MqrYkI2Pa6F%2FFSag5MkniZ&X-Amz-Signature=7c961c1586adc9ca610b26c3314c7f3fbcc4d79a7b02d52ff93708f25eef2cc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4TJVS%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAfqX%2Fyf83qWQgBLWtz9YsbRD7VZrjaChXc1vW5CiM%2FEAiAieAoM37k1KS7cm%2BkjzzVBdwTEX3KyRAuE9HCR8WMvqir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMO8rxmXlGgrQyWHsoKtwDHO5%2BeDj4C6hPNJjZPfxLF%2BItEly4hyGRLk42kzjHutBuhD4qvAEsdkSBFtgUjsp3QJNVS2kdus%2BrEjJdg24LYQZAGN2xgInHUw%2FbnMvhh4XFBkirrFJB3O82BRsPeLtI%2BOxGjNKa5TqHR9mXLcqDA96VV7rUoSdUSN78MfvVE6v2V2XLZF5UdvrqmkbYYmks0aWSg2nMWqIC0QaRdxPGLJh%2BDy68CZ3rfWuL8Wn5sy3au%2BG9ZljCJ6VccSu9M457jjoPZOjrZ3j7w6pMFDTxY7IR7VIYEKvxADD3N4TgbvAJ04Pfs8hwyxzanqJk%2B4tj87WkgCuugwZL5JSfDleAdWa66mHwK0hlkRs7%2BsFiz67Ru4FjrjyXsXgsEwS6Jhf87E8SWGQYeumgq1H%2Fq94R0lJeBHsMvQGUOLO39JTq0Vj4IuFOD%2FmFrXmtD5v9z8SLy6YEL0spPn02qCcrT9PVtedMxi5BFYrDd1WzrCR2oyG3vNtcpywejsW5El0gUqSuK7210%2BLhiSGa90oRZaZ4uevwWiTSjb%2Fu5PY5NWEWoUWg%2Fc5YO5PoCUZpgGFBjK6cnQLj77M0kGnBT5AS4QcWH6o3lol%2FdXVE036JmQcXOsZUCu2btmnbakDnt7Yw74OF0AY6pgFY4vPRa1juRi3SU8X3Ad%2FPZIDBdntKobpPR%2FOEQjW0VXEvVTozQVVfWYvQq4iuOLHKcgn3l70OV4jz0nnS6b1w9dAbbcOvMP1GDENt%2Bei2sUIrHP70XU4Ux8w2wUykDJr4FBL1%2BWUp8dgpszlEyGFL2mntrfKKkBP%2BEe8XZeMy2f%2Bm46wBHkOVPXcjHPeDDRqkZ2vIn6MqrYkI2Pa6F%2FFSag5MkniZ&X-Amz-Signature=45bcb4cdfff908325096c4d30300973855b61ee478ecd1e27af717f3d5ab27ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4TJVS%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAfqX%2Fyf83qWQgBLWtz9YsbRD7VZrjaChXc1vW5CiM%2FEAiAieAoM37k1KS7cm%2BkjzzVBdwTEX3KyRAuE9HCR8WMvqir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMO8rxmXlGgrQyWHsoKtwDHO5%2BeDj4C6hPNJjZPfxLF%2BItEly4hyGRLk42kzjHutBuhD4qvAEsdkSBFtgUjsp3QJNVS2kdus%2BrEjJdg24LYQZAGN2xgInHUw%2FbnMvhh4XFBkirrFJB3O82BRsPeLtI%2BOxGjNKa5TqHR9mXLcqDA96VV7rUoSdUSN78MfvVE6v2V2XLZF5UdvrqmkbYYmks0aWSg2nMWqIC0QaRdxPGLJh%2BDy68CZ3rfWuL8Wn5sy3au%2BG9ZljCJ6VccSu9M457jjoPZOjrZ3j7w6pMFDTxY7IR7VIYEKvxADD3N4TgbvAJ04Pfs8hwyxzanqJk%2B4tj87WkgCuugwZL5JSfDleAdWa66mHwK0hlkRs7%2BsFiz67Ru4FjrjyXsXgsEwS6Jhf87E8SWGQYeumgq1H%2Fq94R0lJeBHsMvQGUOLO39JTq0Vj4IuFOD%2FmFrXmtD5v9z8SLy6YEL0spPn02qCcrT9PVtedMxi5BFYrDd1WzrCR2oyG3vNtcpywejsW5El0gUqSuK7210%2BLhiSGa90oRZaZ4uevwWiTSjb%2Fu5PY5NWEWoUWg%2Fc5YO5PoCUZpgGFBjK6cnQLj77M0kGnBT5AS4QcWH6o3lol%2FdXVE036JmQcXOsZUCu2btmnbakDnt7Yw74OF0AY6pgFY4vPRa1juRi3SU8X3Ad%2FPZIDBdntKobpPR%2FOEQjW0VXEvVTozQVVfWYvQq4iuOLHKcgn3l70OV4jz0nnS6b1w9dAbbcOvMP1GDENt%2Bei2sUIrHP70XU4Ux8w2wUykDJr4FBL1%2BWUp8dgpszlEyGFL2mntrfKKkBP%2BEe8XZeMy2f%2Bm46wBHkOVPXcjHPeDDRqkZ2vIn6MqrYkI2Pa6F%2FFSag5MkniZ&X-Amz-Signature=126c7e157c07fe06e806885e24dd1ea7b13b07822e2a27163d483c9d43c53523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4TJVS%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAfqX%2Fyf83qWQgBLWtz9YsbRD7VZrjaChXc1vW5CiM%2FEAiAieAoM37k1KS7cm%2BkjzzVBdwTEX3KyRAuE9HCR8WMvqir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMO8rxmXlGgrQyWHsoKtwDHO5%2BeDj4C6hPNJjZPfxLF%2BItEly4hyGRLk42kzjHutBuhD4qvAEsdkSBFtgUjsp3QJNVS2kdus%2BrEjJdg24LYQZAGN2xgInHUw%2FbnMvhh4XFBkirrFJB3O82BRsPeLtI%2BOxGjNKa5TqHR9mXLcqDA96VV7rUoSdUSN78MfvVE6v2V2XLZF5UdvrqmkbYYmks0aWSg2nMWqIC0QaRdxPGLJh%2BDy68CZ3rfWuL8Wn5sy3au%2BG9ZljCJ6VccSu9M457jjoPZOjrZ3j7w6pMFDTxY7IR7VIYEKvxADD3N4TgbvAJ04Pfs8hwyxzanqJk%2B4tj87WkgCuugwZL5JSfDleAdWa66mHwK0hlkRs7%2BsFiz67Ru4FjrjyXsXgsEwS6Jhf87E8SWGQYeumgq1H%2Fq94R0lJeBHsMvQGUOLO39JTq0Vj4IuFOD%2FmFrXmtD5v9z8SLy6YEL0spPn02qCcrT9PVtedMxi5BFYrDd1WzrCR2oyG3vNtcpywejsW5El0gUqSuK7210%2BLhiSGa90oRZaZ4uevwWiTSjb%2Fu5PY5NWEWoUWg%2Fc5YO5PoCUZpgGFBjK6cnQLj77M0kGnBT5AS4QcWH6o3lol%2FdXVE036JmQcXOsZUCu2btmnbakDnt7Yw74OF0AY6pgFY4vPRa1juRi3SU8X3Ad%2FPZIDBdntKobpPR%2FOEQjW0VXEvVTozQVVfWYvQq4iuOLHKcgn3l70OV4jz0nnS6b1w9dAbbcOvMP1GDENt%2Bei2sUIrHP70XU4Ux8w2wUykDJr4FBL1%2BWUp8dgpszlEyGFL2mntrfKKkBP%2BEe8XZeMy2f%2Bm46wBHkOVPXcjHPeDDRqkZ2vIn6MqrYkI2Pa6F%2FFSag5MkniZ&X-Amz-Signature=8e726ba5fb49e155cffa17f199200ea6351d2d520407bc41006e8ed236fa2402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4TJVS%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAfqX%2Fyf83qWQgBLWtz9YsbRD7VZrjaChXc1vW5CiM%2FEAiAieAoM37k1KS7cm%2BkjzzVBdwTEX3KyRAuE9HCR8WMvqir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMO8rxmXlGgrQyWHsoKtwDHO5%2BeDj4C6hPNJjZPfxLF%2BItEly4hyGRLk42kzjHutBuhD4qvAEsdkSBFtgUjsp3QJNVS2kdus%2BrEjJdg24LYQZAGN2xgInHUw%2FbnMvhh4XFBkirrFJB3O82BRsPeLtI%2BOxGjNKa5TqHR9mXLcqDA96VV7rUoSdUSN78MfvVE6v2V2XLZF5UdvrqmkbYYmks0aWSg2nMWqIC0QaRdxPGLJh%2BDy68CZ3rfWuL8Wn5sy3au%2BG9ZljCJ6VccSu9M457jjoPZOjrZ3j7w6pMFDTxY7IR7VIYEKvxADD3N4TgbvAJ04Pfs8hwyxzanqJk%2B4tj87WkgCuugwZL5JSfDleAdWa66mHwK0hlkRs7%2BsFiz67Ru4FjrjyXsXgsEwS6Jhf87E8SWGQYeumgq1H%2Fq94R0lJeBHsMvQGUOLO39JTq0Vj4IuFOD%2FmFrXmtD5v9z8SLy6YEL0spPn02qCcrT9PVtedMxi5BFYrDd1WzrCR2oyG3vNtcpywejsW5El0gUqSuK7210%2BLhiSGa90oRZaZ4uevwWiTSjb%2Fu5PY5NWEWoUWg%2Fc5YO5PoCUZpgGFBjK6cnQLj77M0kGnBT5AS4QcWH6o3lol%2FdXVE036JmQcXOsZUCu2btmnbakDnt7Yw74OF0AY6pgFY4vPRa1juRi3SU8X3Ad%2FPZIDBdntKobpPR%2FOEQjW0VXEvVTozQVVfWYvQq4iuOLHKcgn3l70OV4jz0nnS6b1w9dAbbcOvMP1GDENt%2Bei2sUIrHP70XU4Ux8w2wUykDJr4FBL1%2BWUp8dgpszlEyGFL2mntrfKKkBP%2BEe8XZeMy2f%2Bm46wBHkOVPXcjHPeDDRqkZ2vIn6MqrYkI2Pa6F%2FFSag5MkniZ&X-Amz-Signature=3ca607e449336dacb8c2b960fe7adb0c4c6912f5db8d74137e755761222f9f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3A4TJVS%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAfqX%2Fyf83qWQgBLWtz9YsbRD7VZrjaChXc1vW5CiM%2FEAiAieAoM37k1KS7cm%2BkjzzVBdwTEX3KyRAuE9HCR8WMvqir%2FAwgMEAAaDDYzNzQyMzE4MzgwNSIMO8rxmXlGgrQyWHsoKtwDHO5%2BeDj4C6hPNJjZPfxLF%2BItEly4hyGRLk42kzjHutBuhD4qvAEsdkSBFtgUjsp3QJNVS2kdus%2BrEjJdg24LYQZAGN2xgInHUw%2FbnMvhh4XFBkirrFJB3O82BRsPeLtI%2BOxGjNKa5TqHR9mXLcqDA96VV7rUoSdUSN78MfvVE6v2V2XLZF5UdvrqmkbYYmks0aWSg2nMWqIC0QaRdxPGLJh%2BDy68CZ3rfWuL8Wn5sy3au%2BG9ZljCJ6VccSu9M457jjoPZOjrZ3j7w6pMFDTxY7IR7VIYEKvxADD3N4TgbvAJ04Pfs8hwyxzanqJk%2B4tj87WkgCuugwZL5JSfDleAdWa66mHwK0hlkRs7%2BsFiz67Ru4FjrjyXsXgsEwS6Jhf87E8SWGQYeumgq1H%2Fq94R0lJeBHsMvQGUOLO39JTq0Vj4IuFOD%2FmFrXmtD5v9z8SLy6YEL0spPn02qCcrT9PVtedMxi5BFYrDd1WzrCR2oyG3vNtcpywejsW5El0gUqSuK7210%2BLhiSGa90oRZaZ4uevwWiTSjb%2Fu5PY5NWEWoUWg%2Fc5YO5PoCUZpgGFBjK6cnQLj77M0kGnBT5AS4QcWH6o3lol%2FdXVE036JmQcXOsZUCu2btmnbakDnt7Yw74OF0AY6pgFY4vPRa1juRi3SU8X3Ad%2FPZIDBdntKobpPR%2FOEQjW0VXEvVTozQVVfWYvQq4iuOLHKcgn3l70OV4jz0nnS6b1w9dAbbcOvMP1GDENt%2Bei2sUIrHP70XU4Ux8w2wUykDJr4FBL1%2BWUp8dgpszlEyGFL2mntrfKKkBP%2BEe8XZeMy2f%2Bm46wBHkOVPXcjHPeDDRqkZ2vIn6MqrYkI2Pa6F%2FFSag5MkniZ&X-Amz-Signature=26e3d7f106432b326d0e6780ff9bfc216f3bde42d99ea309684477e79a830b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
