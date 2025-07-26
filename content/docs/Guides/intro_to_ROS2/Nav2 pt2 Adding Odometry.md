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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WXEMMG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG7%2FEssNWKQmhcjkrwHQsoS4U9%2F3mDiSkS0Kt%2Fj2YAdyAiEA6dW0hUK7yp1IH3in2J9q2fJ34IjiDwBAzq2McQaS8hUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ4DgDdERc%2BOokOatyrcA91FfRw%2FMnc5KERc2qyFCmxB6zX7hCPHi0ZwOvAIDHU3dbjE%2BQ4dJBp4fRbbeaL9fzQo52rN6k47O6Uy9fvD1l6FLSrinGNGgKOwW01PFQGZ%2F%2BkkNm399smO2qDU%2B6Yv7sb06LS2PDZEAz1vN6vKVvDGbLh0Zr2c3m0t48lN61LqQG5Ya16Dy0WZ6%2B2CaX4thqR6%2BJSdS1%2BL5DMD28SCwYUMVMiFkOrUNvYrxfRhlVk%2BHwRz1imFE4JfNuUoueK%2BV1f7wZ3lNSdGmPNyoSiomuKWvdiYSZGcESOvcP0sE9r5Axki0oxWwWPvKik7G6AsMDKVxvCHoFhSiZV%2BbPdpJizeiR%2FCBCei7DAsxHwzr%2BDLUeHQ2vy7W8oKGz78GFL3aCWFZfKVlOt1n%2B4yZody3JePdWTP9p92DJxt3XglA8n4G4QF%2Bh7NHl3%2BxxHqtRbZDtjnnuh594CqFix9adEn%2B2mStjA%2By7wj%2F0MIVwI9Z0fWcQ9RuaGhqgbAc5plm%2FZwVc0Ahc2Da0Q8DResii%2F1%2FlT77yOQ3xtWyn9Lem2CEe8EQBtkMjAcSfKpJyLtDN1OMFuaTtXCBWtaWXEXBVqMFitk4XdD%2FaK0AkFV5nvTr%2FNaYJDR4fJ6stgjwbjZMJirksQGOqUBFmeUuSu16Rw7fT93CYouGa9D%2FNRU9hMsUsLsCu%2B3MhkILfeh%2Fu0l6bVDEQkBpbmA6vXO%2Bvi3f6mAzZ8dsFns%2BTRU64HbmyEU2muQEO67ssFhGbohwfXd%2F%2BjlY1esRvuxAEkJxs%2BgUUJdeLak%2FlCf2J50%2Bm29X3QJuen7KGjxJaafgJvCjxYzHUNJKwqERgNg891wn%2F3JnvYIR1Kap9AiQuKTVKks&X-Amz-Signature=4dddd5398a35c9ea668c7db1c1db027ee44795e4867d512c593bbb3e0229c1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WXEMMG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG7%2FEssNWKQmhcjkrwHQsoS4U9%2F3mDiSkS0Kt%2Fj2YAdyAiEA6dW0hUK7yp1IH3in2J9q2fJ34IjiDwBAzq2McQaS8hUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ4DgDdERc%2BOokOatyrcA91FfRw%2FMnc5KERc2qyFCmxB6zX7hCPHi0ZwOvAIDHU3dbjE%2BQ4dJBp4fRbbeaL9fzQo52rN6k47O6Uy9fvD1l6FLSrinGNGgKOwW01PFQGZ%2F%2BkkNm399smO2qDU%2B6Yv7sb06LS2PDZEAz1vN6vKVvDGbLh0Zr2c3m0t48lN61LqQG5Ya16Dy0WZ6%2B2CaX4thqR6%2BJSdS1%2BL5DMD28SCwYUMVMiFkOrUNvYrxfRhlVk%2BHwRz1imFE4JfNuUoueK%2BV1f7wZ3lNSdGmPNyoSiomuKWvdiYSZGcESOvcP0sE9r5Axki0oxWwWPvKik7G6AsMDKVxvCHoFhSiZV%2BbPdpJizeiR%2FCBCei7DAsxHwzr%2BDLUeHQ2vy7W8oKGz78GFL3aCWFZfKVlOt1n%2B4yZody3JePdWTP9p92DJxt3XglA8n4G4QF%2Bh7NHl3%2BxxHqtRbZDtjnnuh594CqFix9adEn%2B2mStjA%2By7wj%2F0MIVwI9Z0fWcQ9RuaGhqgbAc5plm%2FZwVc0Ahc2Da0Q8DResii%2F1%2FlT77yOQ3xtWyn9Lem2CEe8EQBtkMjAcSfKpJyLtDN1OMFuaTtXCBWtaWXEXBVqMFitk4XdD%2FaK0AkFV5nvTr%2FNaYJDR4fJ6stgjwbjZMJirksQGOqUBFmeUuSu16Rw7fT93CYouGa9D%2FNRU9hMsUsLsCu%2B3MhkILfeh%2Fu0l6bVDEQkBpbmA6vXO%2Bvi3f6mAzZ8dsFns%2BTRU64HbmyEU2muQEO67ssFhGbohwfXd%2F%2BjlY1esRvuxAEkJxs%2BgUUJdeLak%2FlCf2J50%2Bm29X3QJuen7KGjxJaafgJvCjxYzHUNJKwqERgNg891wn%2F3JnvYIR1Kap9AiQuKTVKks&X-Amz-Signature=bb7ea6620aaa786b08a01e65585312715f98822114dd78ab9514497f466490f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WXEMMG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG7%2FEssNWKQmhcjkrwHQsoS4U9%2F3mDiSkS0Kt%2Fj2YAdyAiEA6dW0hUK7yp1IH3in2J9q2fJ34IjiDwBAzq2McQaS8hUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ4DgDdERc%2BOokOatyrcA91FfRw%2FMnc5KERc2qyFCmxB6zX7hCPHi0ZwOvAIDHU3dbjE%2BQ4dJBp4fRbbeaL9fzQo52rN6k47O6Uy9fvD1l6FLSrinGNGgKOwW01PFQGZ%2F%2BkkNm399smO2qDU%2B6Yv7sb06LS2PDZEAz1vN6vKVvDGbLh0Zr2c3m0t48lN61LqQG5Ya16Dy0WZ6%2B2CaX4thqR6%2BJSdS1%2BL5DMD28SCwYUMVMiFkOrUNvYrxfRhlVk%2BHwRz1imFE4JfNuUoueK%2BV1f7wZ3lNSdGmPNyoSiomuKWvdiYSZGcESOvcP0sE9r5Axki0oxWwWPvKik7G6AsMDKVxvCHoFhSiZV%2BbPdpJizeiR%2FCBCei7DAsxHwzr%2BDLUeHQ2vy7W8oKGz78GFL3aCWFZfKVlOt1n%2B4yZody3JePdWTP9p92DJxt3XglA8n4G4QF%2Bh7NHl3%2BxxHqtRbZDtjnnuh594CqFix9adEn%2B2mStjA%2By7wj%2F0MIVwI9Z0fWcQ9RuaGhqgbAc5plm%2FZwVc0Ahc2Da0Q8DResii%2F1%2FlT77yOQ3xtWyn9Lem2CEe8EQBtkMjAcSfKpJyLtDN1OMFuaTtXCBWtaWXEXBVqMFitk4XdD%2FaK0AkFV5nvTr%2FNaYJDR4fJ6stgjwbjZMJirksQGOqUBFmeUuSu16Rw7fT93CYouGa9D%2FNRU9hMsUsLsCu%2B3MhkILfeh%2Fu0l6bVDEQkBpbmA6vXO%2Bvi3f6mAzZ8dsFns%2BTRU64HbmyEU2muQEO67ssFhGbohwfXd%2F%2BjlY1esRvuxAEkJxs%2BgUUJdeLak%2FlCf2J50%2Bm29X3QJuen7KGjxJaafgJvCjxYzHUNJKwqERgNg891wn%2F3JnvYIR1Kap9AiQuKTVKks&X-Amz-Signature=a8c3951fb3c961209507ecdd5947de5386c7e15258a84d8621533b05ffbb84c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WXEMMG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG7%2FEssNWKQmhcjkrwHQsoS4U9%2F3mDiSkS0Kt%2Fj2YAdyAiEA6dW0hUK7yp1IH3in2J9q2fJ34IjiDwBAzq2McQaS8hUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ4DgDdERc%2BOokOatyrcA91FfRw%2FMnc5KERc2qyFCmxB6zX7hCPHi0ZwOvAIDHU3dbjE%2BQ4dJBp4fRbbeaL9fzQo52rN6k47O6Uy9fvD1l6FLSrinGNGgKOwW01PFQGZ%2F%2BkkNm399smO2qDU%2B6Yv7sb06LS2PDZEAz1vN6vKVvDGbLh0Zr2c3m0t48lN61LqQG5Ya16Dy0WZ6%2B2CaX4thqR6%2BJSdS1%2BL5DMD28SCwYUMVMiFkOrUNvYrxfRhlVk%2BHwRz1imFE4JfNuUoueK%2BV1f7wZ3lNSdGmPNyoSiomuKWvdiYSZGcESOvcP0sE9r5Axki0oxWwWPvKik7G6AsMDKVxvCHoFhSiZV%2BbPdpJizeiR%2FCBCei7DAsxHwzr%2BDLUeHQ2vy7W8oKGz78GFL3aCWFZfKVlOt1n%2B4yZody3JePdWTP9p92DJxt3XglA8n4G4QF%2Bh7NHl3%2BxxHqtRbZDtjnnuh594CqFix9adEn%2B2mStjA%2By7wj%2F0MIVwI9Z0fWcQ9RuaGhqgbAc5plm%2FZwVc0Ahc2Da0Q8DResii%2F1%2FlT77yOQ3xtWyn9Lem2CEe8EQBtkMjAcSfKpJyLtDN1OMFuaTtXCBWtaWXEXBVqMFitk4XdD%2FaK0AkFV5nvTr%2FNaYJDR4fJ6stgjwbjZMJirksQGOqUBFmeUuSu16Rw7fT93CYouGa9D%2FNRU9hMsUsLsCu%2B3MhkILfeh%2Fu0l6bVDEQkBpbmA6vXO%2Bvi3f6mAzZ8dsFns%2BTRU64HbmyEU2muQEO67ssFhGbohwfXd%2F%2BjlY1esRvuxAEkJxs%2BgUUJdeLak%2FlCf2J50%2Bm29X3QJuen7KGjxJaafgJvCjxYzHUNJKwqERgNg891wn%2F3JnvYIR1Kap9AiQuKTVKks&X-Amz-Signature=1cca13830203237a9ea547ce51c6b2acc36464f13918f9b1acf3fd2d10d1b7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WXEMMG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG7%2FEssNWKQmhcjkrwHQsoS4U9%2F3mDiSkS0Kt%2Fj2YAdyAiEA6dW0hUK7yp1IH3in2J9q2fJ34IjiDwBAzq2McQaS8hUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ4DgDdERc%2BOokOatyrcA91FfRw%2FMnc5KERc2qyFCmxB6zX7hCPHi0ZwOvAIDHU3dbjE%2BQ4dJBp4fRbbeaL9fzQo52rN6k47O6Uy9fvD1l6FLSrinGNGgKOwW01PFQGZ%2F%2BkkNm399smO2qDU%2B6Yv7sb06LS2PDZEAz1vN6vKVvDGbLh0Zr2c3m0t48lN61LqQG5Ya16Dy0WZ6%2B2CaX4thqR6%2BJSdS1%2BL5DMD28SCwYUMVMiFkOrUNvYrxfRhlVk%2BHwRz1imFE4JfNuUoueK%2BV1f7wZ3lNSdGmPNyoSiomuKWvdiYSZGcESOvcP0sE9r5Axki0oxWwWPvKik7G6AsMDKVxvCHoFhSiZV%2BbPdpJizeiR%2FCBCei7DAsxHwzr%2BDLUeHQ2vy7W8oKGz78GFL3aCWFZfKVlOt1n%2B4yZody3JePdWTP9p92DJxt3XglA8n4G4QF%2Bh7NHl3%2BxxHqtRbZDtjnnuh594CqFix9adEn%2B2mStjA%2By7wj%2F0MIVwI9Z0fWcQ9RuaGhqgbAc5plm%2FZwVc0Ahc2Da0Q8DResii%2F1%2FlT77yOQ3xtWyn9Lem2CEe8EQBtkMjAcSfKpJyLtDN1OMFuaTtXCBWtaWXEXBVqMFitk4XdD%2FaK0AkFV5nvTr%2FNaYJDR4fJ6stgjwbjZMJirksQGOqUBFmeUuSu16Rw7fT93CYouGa9D%2FNRU9hMsUsLsCu%2B3MhkILfeh%2Fu0l6bVDEQkBpbmA6vXO%2Bvi3f6mAzZ8dsFns%2BTRU64HbmyEU2muQEO67ssFhGbohwfXd%2F%2BjlY1esRvuxAEkJxs%2BgUUJdeLak%2FlCf2J50%2Bm29X3QJuen7KGjxJaafgJvCjxYzHUNJKwqERgNg891wn%2F3JnvYIR1Kap9AiQuKTVKks&X-Amz-Signature=d28222232a3266c22a4cb84c3476778a5b9be591ca91b885e6aebd9063ec82ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WXEMMG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG7%2FEssNWKQmhcjkrwHQsoS4U9%2F3mDiSkS0Kt%2Fj2YAdyAiEA6dW0hUK7yp1IH3in2J9q2fJ34IjiDwBAzq2McQaS8hUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ4DgDdERc%2BOokOatyrcA91FfRw%2FMnc5KERc2qyFCmxB6zX7hCPHi0ZwOvAIDHU3dbjE%2BQ4dJBp4fRbbeaL9fzQo52rN6k47O6Uy9fvD1l6FLSrinGNGgKOwW01PFQGZ%2F%2BkkNm399smO2qDU%2B6Yv7sb06LS2PDZEAz1vN6vKVvDGbLh0Zr2c3m0t48lN61LqQG5Ya16Dy0WZ6%2B2CaX4thqR6%2BJSdS1%2BL5DMD28SCwYUMVMiFkOrUNvYrxfRhlVk%2BHwRz1imFE4JfNuUoueK%2BV1f7wZ3lNSdGmPNyoSiomuKWvdiYSZGcESOvcP0sE9r5Axki0oxWwWPvKik7G6AsMDKVxvCHoFhSiZV%2BbPdpJizeiR%2FCBCei7DAsxHwzr%2BDLUeHQ2vy7W8oKGz78GFL3aCWFZfKVlOt1n%2B4yZody3JePdWTP9p92DJxt3XglA8n4G4QF%2Bh7NHl3%2BxxHqtRbZDtjnnuh594CqFix9adEn%2B2mStjA%2By7wj%2F0MIVwI9Z0fWcQ9RuaGhqgbAc5plm%2FZwVc0Ahc2Da0Q8DResii%2F1%2FlT77yOQ3xtWyn9Lem2CEe8EQBtkMjAcSfKpJyLtDN1OMFuaTtXCBWtaWXEXBVqMFitk4XdD%2FaK0AkFV5nvTr%2FNaYJDR4fJ6stgjwbjZMJirksQGOqUBFmeUuSu16Rw7fT93CYouGa9D%2FNRU9hMsUsLsCu%2B3MhkILfeh%2Fu0l6bVDEQkBpbmA6vXO%2Bvi3f6mAzZ8dsFns%2BTRU64HbmyEU2muQEO67ssFhGbohwfXd%2F%2BjlY1esRvuxAEkJxs%2BgUUJdeLak%2FlCf2J50%2Bm29X3QJuen7KGjxJaafgJvCjxYzHUNJKwqERgNg891wn%2F3JnvYIR1Kap9AiQuKTVKks&X-Amz-Signature=8bc6f3c12ac476940a9e62140b720e63f6566679501b1649cab5c5d521fc76ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WXEMMG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG7%2FEssNWKQmhcjkrwHQsoS4U9%2F3mDiSkS0Kt%2Fj2YAdyAiEA6dW0hUK7yp1IH3in2J9q2fJ34IjiDwBAzq2McQaS8hUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ4DgDdERc%2BOokOatyrcA91FfRw%2FMnc5KERc2qyFCmxB6zX7hCPHi0ZwOvAIDHU3dbjE%2BQ4dJBp4fRbbeaL9fzQo52rN6k47O6Uy9fvD1l6FLSrinGNGgKOwW01PFQGZ%2F%2BkkNm399smO2qDU%2B6Yv7sb06LS2PDZEAz1vN6vKVvDGbLh0Zr2c3m0t48lN61LqQG5Ya16Dy0WZ6%2B2CaX4thqR6%2BJSdS1%2BL5DMD28SCwYUMVMiFkOrUNvYrxfRhlVk%2BHwRz1imFE4JfNuUoueK%2BV1f7wZ3lNSdGmPNyoSiomuKWvdiYSZGcESOvcP0sE9r5Axki0oxWwWPvKik7G6AsMDKVxvCHoFhSiZV%2BbPdpJizeiR%2FCBCei7DAsxHwzr%2BDLUeHQ2vy7W8oKGz78GFL3aCWFZfKVlOt1n%2B4yZody3JePdWTP9p92DJxt3XglA8n4G4QF%2Bh7NHl3%2BxxHqtRbZDtjnnuh594CqFix9adEn%2B2mStjA%2By7wj%2F0MIVwI9Z0fWcQ9RuaGhqgbAc5plm%2FZwVc0Ahc2Da0Q8DResii%2F1%2FlT77yOQ3xtWyn9Lem2CEe8EQBtkMjAcSfKpJyLtDN1OMFuaTtXCBWtaWXEXBVqMFitk4XdD%2FaK0AkFV5nvTr%2FNaYJDR4fJ6stgjwbjZMJirksQGOqUBFmeUuSu16Rw7fT93CYouGa9D%2FNRU9hMsUsLsCu%2B3MhkILfeh%2Fu0l6bVDEQkBpbmA6vXO%2Bvi3f6mAzZ8dsFns%2BTRU64HbmyEU2muQEO67ssFhGbohwfXd%2F%2BjlY1esRvuxAEkJxs%2BgUUJdeLak%2FlCf2J50%2Bm29X3QJuen7KGjxJaafgJvCjxYzHUNJKwqERgNg891wn%2F3JnvYIR1Kap9AiQuKTVKks&X-Amz-Signature=a6a0e7639416f09818c207a4a45176cc76bc1efd7394df1c83f99a8a7ee76909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WXEMMG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG7%2FEssNWKQmhcjkrwHQsoS4U9%2F3mDiSkS0Kt%2Fj2YAdyAiEA6dW0hUK7yp1IH3in2J9q2fJ34IjiDwBAzq2McQaS8hUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ4DgDdERc%2BOokOatyrcA91FfRw%2FMnc5KERc2qyFCmxB6zX7hCPHi0ZwOvAIDHU3dbjE%2BQ4dJBp4fRbbeaL9fzQo52rN6k47O6Uy9fvD1l6FLSrinGNGgKOwW01PFQGZ%2F%2BkkNm399smO2qDU%2B6Yv7sb06LS2PDZEAz1vN6vKVvDGbLh0Zr2c3m0t48lN61LqQG5Ya16Dy0WZ6%2B2CaX4thqR6%2BJSdS1%2BL5DMD28SCwYUMVMiFkOrUNvYrxfRhlVk%2BHwRz1imFE4JfNuUoueK%2BV1f7wZ3lNSdGmPNyoSiomuKWvdiYSZGcESOvcP0sE9r5Axki0oxWwWPvKik7G6AsMDKVxvCHoFhSiZV%2BbPdpJizeiR%2FCBCei7DAsxHwzr%2BDLUeHQ2vy7W8oKGz78GFL3aCWFZfKVlOt1n%2B4yZody3JePdWTP9p92DJxt3XglA8n4G4QF%2Bh7NHl3%2BxxHqtRbZDtjnnuh594CqFix9adEn%2B2mStjA%2By7wj%2F0MIVwI9Z0fWcQ9RuaGhqgbAc5plm%2FZwVc0Ahc2Da0Q8DResii%2F1%2FlT77yOQ3xtWyn9Lem2CEe8EQBtkMjAcSfKpJyLtDN1OMFuaTtXCBWtaWXEXBVqMFitk4XdD%2FaK0AkFV5nvTr%2FNaYJDR4fJ6stgjwbjZMJirksQGOqUBFmeUuSu16Rw7fT93CYouGa9D%2FNRU9hMsUsLsCu%2B3MhkILfeh%2Fu0l6bVDEQkBpbmA6vXO%2Bvi3f6mAzZ8dsFns%2BTRU64HbmyEU2muQEO67ssFhGbohwfXd%2F%2BjlY1esRvuxAEkJxs%2BgUUJdeLak%2FlCf2J50%2Bm29X3QJuen7KGjxJaafgJvCjxYzHUNJKwqERgNg891wn%2F3JnvYIR1Kap9AiQuKTVKks&X-Amz-Signature=2f3e07d0215cad4abae923589de87204bcdb548832053140c281c6e3341e0d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WXEMMG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG7%2FEssNWKQmhcjkrwHQsoS4U9%2F3mDiSkS0Kt%2Fj2YAdyAiEA6dW0hUK7yp1IH3in2J9q2fJ34IjiDwBAzq2McQaS8hUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ4DgDdERc%2BOokOatyrcA91FfRw%2FMnc5KERc2qyFCmxB6zX7hCPHi0ZwOvAIDHU3dbjE%2BQ4dJBp4fRbbeaL9fzQo52rN6k47O6Uy9fvD1l6FLSrinGNGgKOwW01PFQGZ%2F%2BkkNm399smO2qDU%2B6Yv7sb06LS2PDZEAz1vN6vKVvDGbLh0Zr2c3m0t48lN61LqQG5Ya16Dy0WZ6%2B2CaX4thqR6%2BJSdS1%2BL5DMD28SCwYUMVMiFkOrUNvYrxfRhlVk%2BHwRz1imFE4JfNuUoueK%2BV1f7wZ3lNSdGmPNyoSiomuKWvdiYSZGcESOvcP0sE9r5Axki0oxWwWPvKik7G6AsMDKVxvCHoFhSiZV%2BbPdpJizeiR%2FCBCei7DAsxHwzr%2BDLUeHQ2vy7W8oKGz78GFL3aCWFZfKVlOt1n%2B4yZody3JePdWTP9p92DJxt3XglA8n4G4QF%2Bh7NHl3%2BxxHqtRbZDtjnnuh594CqFix9adEn%2B2mStjA%2By7wj%2F0MIVwI9Z0fWcQ9RuaGhqgbAc5plm%2FZwVc0Ahc2Da0Q8DResii%2F1%2FlT77yOQ3xtWyn9Lem2CEe8EQBtkMjAcSfKpJyLtDN1OMFuaTtXCBWtaWXEXBVqMFitk4XdD%2FaK0AkFV5nvTr%2FNaYJDR4fJ6stgjwbjZMJirksQGOqUBFmeUuSu16Rw7fT93CYouGa9D%2FNRU9hMsUsLsCu%2B3MhkILfeh%2Fu0l6bVDEQkBpbmA6vXO%2Bvi3f6mAzZ8dsFns%2BTRU64HbmyEU2muQEO67ssFhGbohwfXd%2F%2BjlY1esRvuxAEkJxs%2BgUUJdeLak%2FlCf2J50%2Bm29X3QJuen7KGjxJaafgJvCjxYzHUNJKwqERgNg891wn%2F3JnvYIR1Kap9AiQuKTVKks&X-Amz-Signature=22a0e3316062b9621f5149e7d2d84031f3de412349e930b04b6f424d420d8593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2NZVNZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFcEM4XSqp3P4vQ1WhB5wLEJI1RKzIFr5i6Gsp8ZNO5dAiEAvl7ETagr%2F8IPFLsEd2AHnvKOdmDCcvm%2F%2FPiR6Co01Kgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDMT9Wn3%2FUIMM9SAxircA3outnM4tMPfE5oF0xcXPaSXpl3JEijuU0Tr5XdVIx%2B1iVIHRZgliLqeDLiTyMX3S9B9owQoQEE%2BSurhZi8KMjiun6a5Jze9%2B%2BhCOkKhdW5576knNiM5C17%2F3poaKvcjO30qudQb1zj9XWv7bF7tnRaJDrFEc5Nu8r%2FVXvbk2%2BWHbqTz%2F91l52ECuCSkglsIXT4uWhz%2F9yqmfPf%2B%2BJF7Y2tgZbEZnQHCqxbgt%2FhalFop2e9%2F9JyQDUA0aA8wJ9rtYCWnM08%2FCzv0qVKtyOUoJfznW49EoplYYrzzgcE4Ch5R%2BtnC8DXPBEPO6maVxdesbE1L2HZqV9%2FBmlt%2F6miJLuDe47PLOY0bdlN7KlKahD0oddAC8zsJ7k9rxQ%2FqLSUKANbiXwPJlTiCaXeu3Reo6X0sVVIS%2BExkMMG8qDMBR4UcpbjM%2F2TVH5tegJsgDk%2BZdct%2FsZuZLM2GyyC0nh30GXPIpcRTTF9IV5c0RRkatFkdQ9bkUNJuR2AZnq8bcCVCFHkw3jYZdtQTl%2F5yt7PXkX63l8NibMf%2B7JtOmfbl%2BKSB6z6TxbdP7QPYjaaKX4146PM5voUdKS1mO4IvSSJbRwjK42Za5UJiNkHQhTFc0fnBLPf3BZLXfGcOrnsjMNOrksQGOqUBF%2BqdWMdIVRKW5pEf0yP4y9boPEybhkezfRUenSdhwhvS4ZJmzOfCHu5Vk5LT5BMGots8rhbUutmi5o%2FIZ7wbAq6C83lFiwPJPRSJlkuT%2B6JxM0HeC61MawLtQXO9LtvW%2BqZ1tNXTBvqTRlNtK4bj7MTXWGZ83LjGJV96YMXllSXz4Mr3cD06v9wBAVzXvcmEqbyP6%2B%2Fh4aYyD8q5ev5ArEwXUPkD&X-Amz-Signature=cfeb3cb61cbd37b30fcb650e9c4d8cbfaa9167fce51223b56d87e6c300db5c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WXEMMG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIG7%2FEssNWKQmhcjkrwHQsoS4U9%2F3mDiSkS0Kt%2Fj2YAdyAiEA6dW0hUK7yp1IH3in2J9q2fJ34IjiDwBAzq2McQaS8hUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJ4DgDdERc%2BOokOatyrcA91FfRw%2FMnc5KERc2qyFCmxB6zX7hCPHi0ZwOvAIDHU3dbjE%2BQ4dJBp4fRbbeaL9fzQo52rN6k47O6Uy9fvD1l6FLSrinGNGgKOwW01PFQGZ%2F%2BkkNm399smO2qDU%2B6Yv7sb06LS2PDZEAz1vN6vKVvDGbLh0Zr2c3m0t48lN61LqQG5Ya16Dy0WZ6%2B2CaX4thqR6%2BJSdS1%2BL5DMD28SCwYUMVMiFkOrUNvYrxfRhlVk%2BHwRz1imFE4JfNuUoueK%2BV1f7wZ3lNSdGmPNyoSiomuKWvdiYSZGcESOvcP0sE9r5Axki0oxWwWPvKik7G6AsMDKVxvCHoFhSiZV%2BbPdpJizeiR%2FCBCei7DAsxHwzr%2BDLUeHQ2vy7W8oKGz78GFL3aCWFZfKVlOt1n%2B4yZody3JePdWTP9p92DJxt3XglA8n4G4QF%2Bh7NHl3%2BxxHqtRbZDtjnnuh594CqFix9adEn%2B2mStjA%2By7wj%2F0MIVwI9Z0fWcQ9RuaGhqgbAc5plm%2FZwVc0Ahc2Da0Q8DResii%2F1%2FlT77yOQ3xtWyn9Lem2CEe8EQBtkMjAcSfKpJyLtDN1OMFuaTtXCBWtaWXEXBVqMFitk4XdD%2FaK0AkFV5nvTr%2FNaYJDR4fJ6stgjwbjZMJirksQGOqUBFmeUuSu16Rw7fT93CYouGa9D%2FNRU9hMsUsLsCu%2B3MhkILfeh%2Fu0l6bVDEQkBpbmA6vXO%2Bvi3f6mAzZ8dsFns%2BTRU64HbmyEU2muQEO67ssFhGbohwfXd%2F%2BjlY1esRvuxAEkJxs%2BgUUJdeLak%2FlCf2J50%2Bm29X3QJuen7KGjxJaafgJvCjxYzHUNJKwqERgNg891wn%2F3JnvYIR1Kap9AiQuKTVKks&X-Amz-Signature=ddc70d180408214d0cd22d3bc53b1a3cad307a85e43724ab33829f038fd97a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2PGW54%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICvD0%2F1jpxZys%2BTAHMumhRFEnpA0ZOIuYNNQZ%2B%2FNGZC%2BAiBxwXL5FI47TmDLHhbmt7I2avsy13tQ69sIceXK7%2FBoyir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2B9MqBoLCWGceItIFKtwD2AkNtbAi%2BJr0oAkQJ9qpkPcnB7dDAWmA9WnG%2F5e5z2Bt2Wii3tcNUoP7zfSl106nsBbkPKOX4Zroi7l%2FjzVelta5zI5KNuHHgzlxUJCMbOdyEI5IYzcgXWiyRRcPBG65%2B9%2FYXF40NcU4li5ZlA07R8s0Hy%2BRjqQ5zZEqcL0qLZqUcFhSrgaaNtG43qD0wqMgW%2F%2FLLmhGNCNOuRffsf3sZTmTbWIwIgYAm6j6Buigm6nLK9NfmyImH8xQN6MRNIlPfjC%2BHsO%2BlPFA0PQDKhvJ7oKBeOOJv30C8jWC5gXi45iCjPZcOmUBQydFcp234A4%2BVndCdcEHELopciD2zrdgbNZQweFbSZ04P2O7y6hG1dIqomOfvIV%2FC%2Fsci8NhdrRXNbee0a0MoY1zTeo7UC9%2Fl16LxCjNVRtmLVeMBD1Ori0IXW7GXoQe4mVMdH%2Bu4gV5GT2ey6InKx%2FTG1sob8YOfjrhFIwJ%2FosfZtvKBeJMATrKMgGlAkhNCV0K%2FrFiegQYrAaMO%2FhDT8nr%2FqgL%2FsOTCk0fysbSYfkVfHkQHl2ssPMWIJyD%2BGoGpL0xs7o1mD7V8bX%2F4m32mCs5yxjRk2VoC7bdWE5y1xySpd56UM0mWDPjtutDqao%2BVPmWipQwlKuSxAY6pgHOP4z6nCKSzszMu%2BmCv4rJLbMkjNGlqGehzqgRG%2Fc%2BLJqdpWn2kqk6s6saPvCH77r4PVy2BJGz828HKN0stogOqiJmkGvkPqX27XxqYsD7Ck12gRwRZitebiSRzD%2FyI%2BL6DR6%2BPOYrKN1bk1y4Etl2PFsix7JnHDsI2Ta2NBftrUuGO0mM721Tsypkg0NF8MqxCsdF21vSrUMCq%2F6H8RHJVkR5HQoT&X-Amz-Signature=de20068c0aed2fe31161d533da45703c677cdec1581498826a1125b4c46c1913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2PGW54%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICvD0%2F1jpxZys%2BTAHMumhRFEnpA0ZOIuYNNQZ%2B%2FNGZC%2BAiBxwXL5FI47TmDLHhbmt7I2avsy13tQ69sIceXK7%2FBoyir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2B9MqBoLCWGceItIFKtwD2AkNtbAi%2BJr0oAkQJ9qpkPcnB7dDAWmA9WnG%2F5e5z2Bt2Wii3tcNUoP7zfSl106nsBbkPKOX4Zroi7l%2FjzVelta5zI5KNuHHgzlxUJCMbOdyEI5IYzcgXWiyRRcPBG65%2B9%2FYXF40NcU4li5ZlA07R8s0Hy%2BRjqQ5zZEqcL0qLZqUcFhSrgaaNtG43qD0wqMgW%2F%2FLLmhGNCNOuRffsf3sZTmTbWIwIgYAm6j6Buigm6nLK9NfmyImH8xQN6MRNIlPfjC%2BHsO%2BlPFA0PQDKhvJ7oKBeOOJv30C8jWC5gXi45iCjPZcOmUBQydFcp234A4%2BVndCdcEHELopciD2zrdgbNZQweFbSZ04P2O7y6hG1dIqomOfvIV%2FC%2Fsci8NhdrRXNbee0a0MoY1zTeo7UC9%2Fl16LxCjNVRtmLVeMBD1Ori0IXW7GXoQe4mVMdH%2Bu4gV5GT2ey6InKx%2FTG1sob8YOfjrhFIwJ%2FosfZtvKBeJMATrKMgGlAkhNCV0K%2FrFiegQYrAaMO%2FhDT8nr%2FqgL%2FsOTCk0fysbSYfkVfHkQHl2ssPMWIJyD%2BGoGpL0xs7o1mD7V8bX%2F4m32mCs5yxjRk2VoC7bdWE5y1xySpd56UM0mWDPjtutDqao%2BVPmWipQwlKuSxAY6pgHOP4z6nCKSzszMu%2BmCv4rJLbMkjNGlqGehzqgRG%2Fc%2BLJqdpWn2kqk6s6saPvCH77r4PVy2BJGz828HKN0stogOqiJmkGvkPqX27XxqYsD7Ck12gRwRZitebiSRzD%2FyI%2BL6DR6%2BPOYrKN1bk1y4Etl2PFsix7JnHDsI2Ta2NBftrUuGO0mM721Tsypkg0NF8MqxCsdF21vSrUMCq%2F6H8RHJVkR5HQoT&X-Amz-Signature=55b8f4b6617c15999e7eeb2c7eed581517d9db96c1d62a913d90074cd264bd35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2PGW54%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICvD0%2F1jpxZys%2BTAHMumhRFEnpA0ZOIuYNNQZ%2B%2FNGZC%2BAiBxwXL5FI47TmDLHhbmt7I2avsy13tQ69sIceXK7%2FBoyir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2B9MqBoLCWGceItIFKtwD2AkNtbAi%2BJr0oAkQJ9qpkPcnB7dDAWmA9WnG%2F5e5z2Bt2Wii3tcNUoP7zfSl106nsBbkPKOX4Zroi7l%2FjzVelta5zI5KNuHHgzlxUJCMbOdyEI5IYzcgXWiyRRcPBG65%2B9%2FYXF40NcU4li5ZlA07R8s0Hy%2BRjqQ5zZEqcL0qLZqUcFhSrgaaNtG43qD0wqMgW%2F%2FLLmhGNCNOuRffsf3sZTmTbWIwIgYAm6j6Buigm6nLK9NfmyImH8xQN6MRNIlPfjC%2BHsO%2BlPFA0PQDKhvJ7oKBeOOJv30C8jWC5gXi45iCjPZcOmUBQydFcp234A4%2BVndCdcEHELopciD2zrdgbNZQweFbSZ04P2O7y6hG1dIqomOfvIV%2FC%2Fsci8NhdrRXNbee0a0MoY1zTeo7UC9%2Fl16LxCjNVRtmLVeMBD1Ori0IXW7GXoQe4mVMdH%2Bu4gV5GT2ey6InKx%2FTG1sob8YOfjrhFIwJ%2FosfZtvKBeJMATrKMgGlAkhNCV0K%2FrFiegQYrAaMO%2FhDT8nr%2FqgL%2FsOTCk0fysbSYfkVfHkQHl2ssPMWIJyD%2BGoGpL0xs7o1mD7V8bX%2F4m32mCs5yxjRk2VoC7bdWE5y1xySpd56UM0mWDPjtutDqao%2BVPmWipQwlKuSxAY6pgHOP4z6nCKSzszMu%2BmCv4rJLbMkjNGlqGehzqgRG%2Fc%2BLJqdpWn2kqk6s6saPvCH77r4PVy2BJGz828HKN0stogOqiJmkGvkPqX27XxqYsD7Ck12gRwRZitebiSRzD%2FyI%2BL6DR6%2BPOYrKN1bk1y4Etl2PFsix7JnHDsI2Ta2NBftrUuGO0mM721Tsypkg0NF8MqxCsdF21vSrUMCq%2F6H8RHJVkR5HQoT&X-Amz-Signature=483f14494c018e4fc7cfef2200a181e6ec415c7e03ee5fdad2745326e1c9b6bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2PGW54%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICvD0%2F1jpxZys%2BTAHMumhRFEnpA0ZOIuYNNQZ%2B%2FNGZC%2BAiBxwXL5FI47TmDLHhbmt7I2avsy13tQ69sIceXK7%2FBoyir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2B9MqBoLCWGceItIFKtwD2AkNtbAi%2BJr0oAkQJ9qpkPcnB7dDAWmA9WnG%2F5e5z2Bt2Wii3tcNUoP7zfSl106nsBbkPKOX4Zroi7l%2FjzVelta5zI5KNuHHgzlxUJCMbOdyEI5IYzcgXWiyRRcPBG65%2B9%2FYXF40NcU4li5ZlA07R8s0Hy%2BRjqQ5zZEqcL0qLZqUcFhSrgaaNtG43qD0wqMgW%2F%2FLLmhGNCNOuRffsf3sZTmTbWIwIgYAm6j6Buigm6nLK9NfmyImH8xQN6MRNIlPfjC%2BHsO%2BlPFA0PQDKhvJ7oKBeOOJv30C8jWC5gXi45iCjPZcOmUBQydFcp234A4%2BVndCdcEHELopciD2zrdgbNZQweFbSZ04P2O7y6hG1dIqomOfvIV%2FC%2Fsci8NhdrRXNbee0a0MoY1zTeo7UC9%2Fl16LxCjNVRtmLVeMBD1Ori0IXW7GXoQe4mVMdH%2Bu4gV5GT2ey6InKx%2FTG1sob8YOfjrhFIwJ%2FosfZtvKBeJMATrKMgGlAkhNCV0K%2FrFiegQYrAaMO%2FhDT8nr%2FqgL%2FsOTCk0fysbSYfkVfHkQHl2ssPMWIJyD%2BGoGpL0xs7o1mD7V8bX%2F4m32mCs5yxjRk2VoC7bdWE5y1xySpd56UM0mWDPjtutDqao%2BVPmWipQwlKuSxAY6pgHOP4z6nCKSzszMu%2BmCv4rJLbMkjNGlqGehzqgRG%2Fc%2BLJqdpWn2kqk6s6saPvCH77r4PVy2BJGz828HKN0stogOqiJmkGvkPqX27XxqYsD7Ck12gRwRZitebiSRzD%2FyI%2BL6DR6%2BPOYrKN1bk1y4Etl2PFsix7JnHDsI2Ta2NBftrUuGO0mM721Tsypkg0NF8MqxCsdF21vSrUMCq%2F6H8RHJVkR5HQoT&X-Amz-Signature=34c054bca97e0aef8bd0f03c1e11628dd5a924d51081ed58d6078a1c38cbba8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2PGW54%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICvD0%2F1jpxZys%2BTAHMumhRFEnpA0ZOIuYNNQZ%2B%2FNGZC%2BAiBxwXL5FI47TmDLHhbmt7I2avsy13tQ69sIceXK7%2FBoyir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2B9MqBoLCWGceItIFKtwD2AkNtbAi%2BJr0oAkQJ9qpkPcnB7dDAWmA9WnG%2F5e5z2Bt2Wii3tcNUoP7zfSl106nsBbkPKOX4Zroi7l%2FjzVelta5zI5KNuHHgzlxUJCMbOdyEI5IYzcgXWiyRRcPBG65%2B9%2FYXF40NcU4li5ZlA07R8s0Hy%2BRjqQ5zZEqcL0qLZqUcFhSrgaaNtG43qD0wqMgW%2F%2FLLmhGNCNOuRffsf3sZTmTbWIwIgYAm6j6Buigm6nLK9NfmyImH8xQN6MRNIlPfjC%2BHsO%2BlPFA0PQDKhvJ7oKBeOOJv30C8jWC5gXi45iCjPZcOmUBQydFcp234A4%2BVndCdcEHELopciD2zrdgbNZQweFbSZ04P2O7y6hG1dIqomOfvIV%2FC%2Fsci8NhdrRXNbee0a0MoY1zTeo7UC9%2Fl16LxCjNVRtmLVeMBD1Ori0IXW7GXoQe4mVMdH%2Bu4gV5GT2ey6InKx%2FTG1sob8YOfjrhFIwJ%2FosfZtvKBeJMATrKMgGlAkhNCV0K%2FrFiegQYrAaMO%2FhDT8nr%2FqgL%2FsOTCk0fysbSYfkVfHkQHl2ssPMWIJyD%2BGoGpL0xs7o1mD7V8bX%2F4m32mCs5yxjRk2VoC7bdWE5y1xySpd56UM0mWDPjtutDqao%2BVPmWipQwlKuSxAY6pgHOP4z6nCKSzszMu%2BmCv4rJLbMkjNGlqGehzqgRG%2Fc%2BLJqdpWn2kqk6s6saPvCH77r4PVy2BJGz828HKN0stogOqiJmkGvkPqX27XxqYsD7Ck12gRwRZitebiSRzD%2FyI%2BL6DR6%2BPOYrKN1bk1y4Etl2PFsix7JnHDsI2Ta2NBftrUuGO0mM721Tsypkg0NF8MqxCsdF21vSrUMCq%2F6H8RHJVkR5HQoT&X-Amz-Signature=6dc25e7c0bc8895ab7e908eabe387ef8d8219c51d620ab2652fbff6e2e982d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2PGW54%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICvD0%2F1jpxZys%2BTAHMumhRFEnpA0ZOIuYNNQZ%2B%2FNGZC%2BAiBxwXL5FI47TmDLHhbmt7I2avsy13tQ69sIceXK7%2FBoyir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2B9MqBoLCWGceItIFKtwD2AkNtbAi%2BJr0oAkQJ9qpkPcnB7dDAWmA9WnG%2F5e5z2Bt2Wii3tcNUoP7zfSl106nsBbkPKOX4Zroi7l%2FjzVelta5zI5KNuHHgzlxUJCMbOdyEI5IYzcgXWiyRRcPBG65%2B9%2FYXF40NcU4li5ZlA07R8s0Hy%2BRjqQ5zZEqcL0qLZqUcFhSrgaaNtG43qD0wqMgW%2F%2FLLmhGNCNOuRffsf3sZTmTbWIwIgYAm6j6Buigm6nLK9NfmyImH8xQN6MRNIlPfjC%2BHsO%2BlPFA0PQDKhvJ7oKBeOOJv30C8jWC5gXi45iCjPZcOmUBQydFcp234A4%2BVndCdcEHELopciD2zrdgbNZQweFbSZ04P2O7y6hG1dIqomOfvIV%2FC%2Fsci8NhdrRXNbee0a0MoY1zTeo7UC9%2Fl16LxCjNVRtmLVeMBD1Ori0IXW7GXoQe4mVMdH%2Bu4gV5GT2ey6InKx%2FTG1sob8YOfjrhFIwJ%2FosfZtvKBeJMATrKMgGlAkhNCV0K%2FrFiegQYrAaMO%2FhDT8nr%2FqgL%2FsOTCk0fysbSYfkVfHkQHl2ssPMWIJyD%2BGoGpL0xs7o1mD7V8bX%2F4m32mCs5yxjRk2VoC7bdWE5y1xySpd56UM0mWDPjtutDqao%2BVPmWipQwlKuSxAY6pgHOP4z6nCKSzszMu%2BmCv4rJLbMkjNGlqGehzqgRG%2Fc%2BLJqdpWn2kqk6s6saPvCH77r4PVy2BJGz828HKN0stogOqiJmkGvkPqX27XxqYsD7Ck12gRwRZitebiSRzD%2FyI%2BL6DR6%2BPOYrKN1bk1y4Etl2PFsix7JnHDsI2Ta2NBftrUuGO0mM721Tsypkg0NF8MqxCsdF21vSrUMCq%2F6H8RHJVkR5HQoT&X-Amz-Signature=772485b53beaee28590f462138076eab0d5593b236ba3d824551a525ba18fc03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2PGW54%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICvD0%2F1jpxZys%2BTAHMumhRFEnpA0ZOIuYNNQZ%2B%2FNGZC%2BAiBxwXL5FI47TmDLHhbmt7I2avsy13tQ69sIceXK7%2FBoyir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2B9MqBoLCWGceItIFKtwD2AkNtbAi%2BJr0oAkQJ9qpkPcnB7dDAWmA9WnG%2F5e5z2Bt2Wii3tcNUoP7zfSl106nsBbkPKOX4Zroi7l%2FjzVelta5zI5KNuHHgzlxUJCMbOdyEI5IYzcgXWiyRRcPBG65%2B9%2FYXF40NcU4li5ZlA07R8s0Hy%2BRjqQ5zZEqcL0qLZqUcFhSrgaaNtG43qD0wqMgW%2F%2FLLmhGNCNOuRffsf3sZTmTbWIwIgYAm6j6Buigm6nLK9NfmyImH8xQN6MRNIlPfjC%2BHsO%2BlPFA0PQDKhvJ7oKBeOOJv30C8jWC5gXi45iCjPZcOmUBQydFcp234A4%2BVndCdcEHELopciD2zrdgbNZQweFbSZ04P2O7y6hG1dIqomOfvIV%2FC%2Fsci8NhdrRXNbee0a0MoY1zTeo7UC9%2Fl16LxCjNVRtmLVeMBD1Ori0IXW7GXoQe4mVMdH%2Bu4gV5GT2ey6InKx%2FTG1sob8YOfjrhFIwJ%2FosfZtvKBeJMATrKMgGlAkhNCV0K%2FrFiegQYrAaMO%2FhDT8nr%2FqgL%2FsOTCk0fysbSYfkVfHkQHl2ssPMWIJyD%2BGoGpL0xs7o1mD7V8bX%2F4m32mCs5yxjRk2VoC7bdWE5y1xySpd56UM0mWDPjtutDqao%2BVPmWipQwlKuSxAY6pgHOP4z6nCKSzszMu%2BmCv4rJLbMkjNGlqGehzqgRG%2Fc%2BLJqdpWn2kqk6s6saPvCH77r4PVy2BJGz828HKN0stogOqiJmkGvkPqX27XxqYsD7Ck12gRwRZitebiSRzD%2FyI%2BL6DR6%2BPOYrKN1bk1y4Etl2PFsix7JnHDsI2Ta2NBftrUuGO0mM721Tsypkg0NF8MqxCsdF21vSrUMCq%2F6H8RHJVkR5HQoT&X-Amz-Signature=6a0569caec9912a51adc23950cf4a09cd41f3e99236e417468830420ccb0080f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
