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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CDDGOK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBxwRSUpkVwURmAvhovdFq3FrvcUL1ABoGkF4121%2BVCUAiEA7%2BO3laVk3LCy2%2FY31ft28IjrI%2Fbgq55feftscMBwMF0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEYmHRc7LbPE4%2FlU0yrcAx0u%2FPVHK0wJ9UZ1JmThYp6qofIHCM3yY%2BzRzK2dP4FCvUPNBUG%2BWTPTP3EsWdhQRERkZ0VJmxsZlIxE7E41MtONIikptuVJacnETk4yYUPc81yNI%2FU%2FF94KRFP%2BntglGluk1zU3Z1mFOtnPl5eOYwksBEeOCHf3N6M6bOF8F9zZVWFzfo5lgN8r8w%2FFya8jpJBt7UffdwiLkSJbFlmg9UNxoPxmywezC0D%2Bqdn%2BMQDpIVKkXwq4zPfJnw4JHNY0ukRQ1qMrd2dlfkSchPjgSkKnrQpq8xZR%2BoZhpu0pUM%2B5z1i3fhoPBkpqtiaAFSAH8kCL5qnsbMZVZt6MIDwl8fF58BxHwYj2gdAnquBH%2F6Uuaf7F%2BeZUe02F5N8eNqUV4dMEF7Uq0nd02zuteh3ydekJt8cE6EjIADJ2OGhdK4eW%2BqLmwZsuoUmP4DENeQwgT2hBMKJEeV1o%2FTP8pQQMxDTyqDvHEGB8xZVuGNde6nKh7DIWhvwtWKwgRnMlMg3b9PWprgMk%2FNdjX4C%2BCGsfUh%2BH0OPIsU1MomUf0ZfXlh%2Fz%2BkAV6uHyhhthkf9MxJhRFNcX31Ekm9eMjdQaSky2QCHSeAJwaHzSM7ViZ94qH8M0B2Gb4MgepNWQjB5MMNjY%2FsQGOqUBCkUBN36mFm6ohSuhYcIlRvBDkUBQf4YNYurLuMys1DEjVw7x1wVwyOkbkwkfTg3OVbytkpwDaxD7jR%2Bmhnh2l8p7Rbq9zv5vfswHwYqUrkuRoI0aX4DTv02pZfae6pDgbiGmRao8apRXZhsH2Xo%2ByO08fxBXVvbpOuPmwheb0%2B1pDsqfHO6t%2BA0KnJnE9GMvwur0YmyIRThauVOxq%2F%2FEPDLtrnIr&X-Amz-Signature=5b3b441cb5a7d344b8edc0dc90bf8999ea92203869ffc1461f5b7c26b6169b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CDDGOK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBxwRSUpkVwURmAvhovdFq3FrvcUL1ABoGkF4121%2BVCUAiEA7%2BO3laVk3LCy2%2FY31ft28IjrI%2Fbgq55feftscMBwMF0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEYmHRc7LbPE4%2FlU0yrcAx0u%2FPVHK0wJ9UZ1JmThYp6qofIHCM3yY%2BzRzK2dP4FCvUPNBUG%2BWTPTP3EsWdhQRERkZ0VJmxsZlIxE7E41MtONIikptuVJacnETk4yYUPc81yNI%2FU%2FF94KRFP%2BntglGluk1zU3Z1mFOtnPl5eOYwksBEeOCHf3N6M6bOF8F9zZVWFzfo5lgN8r8w%2FFya8jpJBt7UffdwiLkSJbFlmg9UNxoPxmywezC0D%2Bqdn%2BMQDpIVKkXwq4zPfJnw4JHNY0ukRQ1qMrd2dlfkSchPjgSkKnrQpq8xZR%2BoZhpu0pUM%2B5z1i3fhoPBkpqtiaAFSAH8kCL5qnsbMZVZt6MIDwl8fF58BxHwYj2gdAnquBH%2F6Uuaf7F%2BeZUe02F5N8eNqUV4dMEF7Uq0nd02zuteh3ydekJt8cE6EjIADJ2OGhdK4eW%2BqLmwZsuoUmP4DENeQwgT2hBMKJEeV1o%2FTP8pQQMxDTyqDvHEGB8xZVuGNde6nKh7DIWhvwtWKwgRnMlMg3b9PWprgMk%2FNdjX4C%2BCGsfUh%2BH0OPIsU1MomUf0ZfXlh%2Fz%2BkAV6uHyhhthkf9MxJhRFNcX31Ekm9eMjdQaSky2QCHSeAJwaHzSM7ViZ94qH8M0B2Gb4MgepNWQjB5MMNjY%2FsQGOqUBCkUBN36mFm6ohSuhYcIlRvBDkUBQf4YNYurLuMys1DEjVw7x1wVwyOkbkwkfTg3OVbytkpwDaxD7jR%2Bmhnh2l8p7Rbq9zv5vfswHwYqUrkuRoI0aX4DTv02pZfae6pDgbiGmRao8apRXZhsH2Xo%2ByO08fxBXVvbpOuPmwheb0%2B1pDsqfHO6t%2BA0KnJnE9GMvwur0YmyIRThauVOxq%2F%2FEPDLtrnIr&X-Amz-Signature=6e3f2ed107f17fde0874a001b9724ee2d4ab110223200deda9a87f485b8b24b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CDDGOK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBxwRSUpkVwURmAvhovdFq3FrvcUL1ABoGkF4121%2BVCUAiEA7%2BO3laVk3LCy2%2FY31ft28IjrI%2Fbgq55feftscMBwMF0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEYmHRc7LbPE4%2FlU0yrcAx0u%2FPVHK0wJ9UZ1JmThYp6qofIHCM3yY%2BzRzK2dP4FCvUPNBUG%2BWTPTP3EsWdhQRERkZ0VJmxsZlIxE7E41MtONIikptuVJacnETk4yYUPc81yNI%2FU%2FF94KRFP%2BntglGluk1zU3Z1mFOtnPl5eOYwksBEeOCHf3N6M6bOF8F9zZVWFzfo5lgN8r8w%2FFya8jpJBt7UffdwiLkSJbFlmg9UNxoPxmywezC0D%2Bqdn%2BMQDpIVKkXwq4zPfJnw4JHNY0ukRQ1qMrd2dlfkSchPjgSkKnrQpq8xZR%2BoZhpu0pUM%2B5z1i3fhoPBkpqtiaAFSAH8kCL5qnsbMZVZt6MIDwl8fF58BxHwYj2gdAnquBH%2F6Uuaf7F%2BeZUe02F5N8eNqUV4dMEF7Uq0nd02zuteh3ydekJt8cE6EjIADJ2OGhdK4eW%2BqLmwZsuoUmP4DENeQwgT2hBMKJEeV1o%2FTP8pQQMxDTyqDvHEGB8xZVuGNde6nKh7DIWhvwtWKwgRnMlMg3b9PWprgMk%2FNdjX4C%2BCGsfUh%2BH0OPIsU1MomUf0ZfXlh%2Fz%2BkAV6uHyhhthkf9MxJhRFNcX31Ekm9eMjdQaSky2QCHSeAJwaHzSM7ViZ94qH8M0B2Gb4MgepNWQjB5MMNjY%2FsQGOqUBCkUBN36mFm6ohSuhYcIlRvBDkUBQf4YNYurLuMys1DEjVw7x1wVwyOkbkwkfTg3OVbytkpwDaxD7jR%2Bmhnh2l8p7Rbq9zv5vfswHwYqUrkuRoI0aX4DTv02pZfae6pDgbiGmRao8apRXZhsH2Xo%2ByO08fxBXVvbpOuPmwheb0%2B1pDsqfHO6t%2BA0KnJnE9GMvwur0YmyIRThauVOxq%2F%2FEPDLtrnIr&X-Amz-Signature=404823f6d0bf0dc0b4c102c1b8444bf1e33eff65a45023f2bee7dd512a8dba6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CDDGOK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBxwRSUpkVwURmAvhovdFq3FrvcUL1ABoGkF4121%2BVCUAiEA7%2BO3laVk3LCy2%2FY31ft28IjrI%2Fbgq55feftscMBwMF0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEYmHRc7LbPE4%2FlU0yrcAx0u%2FPVHK0wJ9UZ1JmThYp6qofIHCM3yY%2BzRzK2dP4FCvUPNBUG%2BWTPTP3EsWdhQRERkZ0VJmxsZlIxE7E41MtONIikptuVJacnETk4yYUPc81yNI%2FU%2FF94KRFP%2BntglGluk1zU3Z1mFOtnPl5eOYwksBEeOCHf3N6M6bOF8F9zZVWFzfo5lgN8r8w%2FFya8jpJBt7UffdwiLkSJbFlmg9UNxoPxmywezC0D%2Bqdn%2BMQDpIVKkXwq4zPfJnw4JHNY0ukRQ1qMrd2dlfkSchPjgSkKnrQpq8xZR%2BoZhpu0pUM%2B5z1i3fhoPBkpqtiaAFSAH8kCL5qnsbMZVZt6MIDwl8fF58BxHwYj2gdAnquBH%2F6Uuaf7F%2BeZUe02F5N8eNqUV4dMEF7Uq0nd02zuteh3ydekJt8cE6EjIADJ2OGhdK4eW%2BqLmwZsuoUmP4DENeQwgT2hBMKJEeV1o%2FTP8pQQMxDTyqDvHEGB8xZVuGNde6nKh7DIWhvwtWKwgRnMlMg3b9PWprgMk%2FNdjX4C%2BCGsfUh%2BH0OPIsU1MomUf0ZfXlh%2Fz%2BkAV6uHyhhthkf9MxJhRFNcX31Ekm9eMjdQaSky2QCHSeAJwaHzSM7ViZ94qH8M0B2Gb4MgepNWQjB5MMNjY%2FsQGOqUBCkUBN36mFm6ohSuhYcIlRvBDkUBQf4YNYurLuMys1DEjVw7x1wVwyOkbkwkfTg3OVbytkpwDaxD7jR%2Bmhnh2l8p7Rbq9zv5vfswHwYqUrkuRoI0aX4DTv02pZfae6pDgbiGmRao8apRXZhsH2Xo%2ByO08fxBXVvbpOuPmwheb0%2B1pDsqfHO6t%2BA0KnJnE9GMvwur0YmyIRThauVOxq%2F%2FEPDLtrnIr&X-Amz-Signature=4dbf99be1c0d37ca947464471bc621e880fece600ff0fd51f3b0468c80d198c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CDDGOK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBxwRSUpkVwURmAvhovdFq3FrvcUL1ABoGkF4121%2BVCUAiEA7%2BO3laVk3LCy2%2FY31ft28IjrI%2Fbgq55feftscMBwMF0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEYmHRc7LbPE4%2FlU0yrcAx0u%2FPVHK0wJ9UZ1JmThYp6qofIHCM3yY%2BzRzK2dP4FCvUPNBUG%2BWTPTP3EsWdhQRERkZ0VJmxsZlIxE7E41MtONIikptuVJacnETk4yYUPc81yNI%2FU%2FF94KRFP%2BntglGluk1zU3Z1mFOtnPl5eOYwksBEeOCHf3N6M6bOF8F9zZVWFzfo5lgN8r8w%2FFya8jpJBt7UffdwiLkSJbFlmg9UNxoPxmywezC0D%2Bqdn%2BMQDpIVKkXwq4zPfJnw4JHNY0ukRQ1qMrd2dlfkSchPjgSkKnrQpq8xZR%2BoZhpu0pUM%2B5z1i3fhoPBkpqtiaAFSAH8kCL5qnsbMZVZt6MIDwl8fF58BxHwYj2gdAnquBH%2F6Uuaf7F%2BeZUe02F5N8eNqUV4dMEF7Uq0nd02zuteh3ydekJt8cE6EjIADJ2OGhdK4eW%2BqLmwZsuoUmP4DENeQwgT2hBMKJEeV1o%2FTP8pQQMxDTyqDvHEGB8xZVuGNde6nKh7DIWhvwtWKwgRnMlMg3b9PWprgMk%2FNdjX4C%2BCGsfUh%2BH0OPIsU1MomUf0ZfXlh%2Fz%2BkAV6uHyhhthkf9MxJhRFNcX31Ekm9eMjdQaSky2QCHSeAJwaHzSM7ViZ94qH8M0B2Gb4MgepNWQjB5MMNjY%2FsQGOqUBCkUBN36mFm6ohSuhYcIlRvBDkUBQf4YNYurLuMys1DEjVw7x1wVwyOkbkwkfTg3OVbytkpwDaxD7jR%2Bmhnh2l8p7Rbq9zv5vfswHwYqUrkuRoI0aX4DTv02pZfae6pDgbiGmRao8apRXZhsH2Xo%2ByO08fxBXVvbpOuPmwheb0%2B1pDsqfHO6t%2BA0KnJnE9GMvwur0YmyIRThauVOxq%2F%2FEPDLtrnIr&X-Amz-Signature=db8bd8aa770ccd1cc70af5f3e2e0e43c35cdb794ed01d23cadf976a5b027d94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CDDGOK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBxwRSUpkVwURmAvhovdFq3FrvcUL1ABoGkF4121%2BVCUAiEA7%2BO3laVk3LCy2%2FY31ft28IjrI%2Fbgq55feftscMBwMF0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEYmHRc7LbPE4%2FlU0yrcAx0u%2FPVHK0wJ9UZ1JmThYp6qofIHCM3yY%2BzRzK2dP4FCvUPNBUG%2BWTPTP3EsWdhQRERkZ0VJmxsZlIxE7E41MtONIikptuVJacnETk4yYUPc81yNI%2FU%2FF94KRFP%2BntglGluk1zU3Z1mFOtnPl5eOYwksBEeOCHf3N6M6bOF8F9zZVWFzfo5lgN8r8w%2FFya8jpJBt7UffdwiLkSJbFlmg9UNxoPxmywezC0D%2Bqdn%2BMQDpIVKkXwq4zPfJnw4JHNY0ukRQ1qMrd2dlfkSchPjgSkKnrQpq8xZR%2BoZhpu0pUM%2B5z1i3fhoPBkpqtiaAFSAH8kCL5qnsbMZVZt6MIDwl8fF58BxHwYj2gdAnquBH%2F6Uuaf7F%2BeZUe02F5N8eNqUV4dMEF7Uq0nd02zuteh3ydekJt8cE6EjIADJ2OGhdK4eW%2BqLmwZsuoUmP4DENeQwgT2hBMKJEeV1o%2FTP8pQQMxDTyqDvHEGB8xZVuGNde6nKh7DIWhvwtWKwgRnMlMg3b9PWprgMk%2FNdjX4C%2BCGsfUh%2BH0OPIsU1MomUf0ZfXlh%2Fz%2BkAV6uHyhhthkf9MxJhRFNcX31Ekm9eMjdQaSky2QCHSeAJwaHzSM7ViZ94qH8M0B2Gb4MgepNWQjB5MMNjY%2FsQGOqUBCkUBN36mFm6ohSuhYcIlRvBDkUBQf4YNYurLuMys1DEjVw7x1wVwyOkbkwkfTg3OVbytkpwDaxD7jR%2Bmhnh2l8p7Rbq9zv5vfswHwYqUrkuRoI0aX4DTv02pZfae6pDgbiGmRao8apRXZhsH2Xo%2ByO08fxBXVvbpOuPmwheb0%2B1pDsqfHO6t%2BA0KnJnE9GMvwur0YmyIRThauVOxq%2F%2FEPDLtrnIr&X-Amz-Signature=7b60480897b9cec9ac11fe788f2ac5561c676a1a0a5b138392b9dbdd47691245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CDDGOK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBxwRSUpkVwURmAvhovdFq3FrvcUL1ABoGkF4121%2BVCUAiEA7%2BO3laVk3LCy2%2FY31ft28IjrI%2Fbgq55feftscMBwMF0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEYmHRc7LbPE4%2FlU0yrcAx0u%2FPVHK0wJ9UZ1JmThYp6qofIHCM3yY%2BzRzK2dP4FCvUPNBUG%2BWTPTP3EsWdhQRERkZ0VJmxsZlIxE7E41MtONIikptuVJacnETk4yYUPc81yNI%2FU%2FF94KRFP%2BntglGluk1zU3Z1mFOtnPl5eOYwksBEeOCHf3N6M6bOF8F9zZVWFzfo5lgN8r8w%2FFya8jpJBt7UffdwiLkSJbFlmg9UNxoPxmywezC0D%2Bqdn%2BMQDpIVKkXwq4zPfJnw4JHNY0ukRQ1qMrd2dlfkSchPjgSkKnrQpq8xZR%2BoZhpu0pUM%2B5z1i3fhoPBkpqtiaAFSAH8kCL5qnsbMZVZt6MIDwl8fF58BxHwYj2gdAnquBH%2F6Uuaf7F%2BeZUe02F5N8eNqUV4dMEF7Uq0nd02zuteh3ydekJt8cE6EjIADJ2OGhdK4eW%2BqLmwZsuoUmP4DENeQwgT2hBMKJEeV1o%2FTP8pQQMxDTyqDvHEGB8xZVuGNde6nKh7DIWhvwtWKwgRnMlMg3b9PWprgMk%2FNdjX4C%2BCGsfUh%2BH0OPIsU1MomUf0ZfXlh%2Fz%2BkAV6uHyhhthkf9MxJhRFNcX31Ekm9eMjdQaSky2QCHSeAJwaHzSM7ViZ94qH8M0B2Gb4MgepNWQjB5MMNjY%2FsQGOqUBCkUBN36mFm6ohSuhYcIlRvBDkUBQf4YNYurLuMys1DEjVw7x1wVwyOkbkwkfTg3OVbytkpwDaxD7jR%2Bmhnh2l8p7Rbq9zv5vfswHwYqUrkuRoI0aX4DTv02pZfae6pDgbiGmRao8apRXZhsH2Xo%2ByO08fxBXVvbpOuPmwheb0%2B1pDsqfHO6t%2BA0KnJnE9GMvwur0YmyIRThauVOxq%2F%2FEPDLtrnIr&X-Amz-Signature=6e17c14ff69399ef5d18954b873e77cc4c6a99445caaf005fea4d062a7367bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CDDGOK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBxwRSUpkVwURmAvhovdFq3FrvcUL1ABoGkF4121%2BVCUAiEA7%2BO3laVk3LCy2%2FY31ft28IjrI%2Fbgq55feftscMBwMF0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEYmHRc7LbPE4%2FlU0yrcAx0u%2FPVHK0wJ9UZ1JmThYp6qofIHCM3yY%2BzRzK2dP4FCvUPNBUG%2BWTPTP3EsWdhQRERkZ0VJmxsZlIxE7E41MtONIikptuVJacnETk4yYUPc81yNI%2FU%2FF94KRFP%2BntglGluk1zU3Z1mFOtnPl5eOYwksBEeOCHf3N6M6bOF8F9zZVWFzfo5lgN8r8w%2FFya8jpJBt7UffdwiLkSJbFlmg9UNxoPxmywezC0D%2Bqdn%2BMQDpIVKkXwq4zPfJnw4JHNY0ukRQ1qMrd2dlfkSchPjgSkKnrQpq8xZR%2BoZhpu0pUM%2B5z1i3fhoPBkpqtiaAFSAH8kCL5qnsbMZVZt6MIDwl8fF58BxHwYj2gdAnquBH%2F6Uuaf7F%2BeZUe02F5N8eNqUV4dMEF7Uq0nd02zuteh3ydekJt8cE6EjIADJ2OGhdK4eW%2BqLmwZsuoUmP4DENeQwgT2hBMKJEeV1o%2FTP8pQQMxDTyqDvHEGB8xZVuGNde6nKh7DIWhvwtWKwgRnMlMg3b9PWprgMk%2FNdjX4C%2BCGsfUh%2BH0OPIsU1MomUf0ZfXlh%2Fz%2BkAV6uHyhhthkf9MxJhRFNcX31Ekm9eMjdQaSky2QCHSeAJwaHzSM7ViZ94qH8M0B2Gb4MgepNWQjB5MMNjY%2FsQGOqUBCkUBN36mFm6ohSuhYcIlRvBDkUBQf4YNYurLuMys1DEjVw7x1wVwyOkbkwkfTg3OVbytkpwDaxD7jR%2Bmhnh2l8p7Rbq9zv5vfswHwYqUrkuRoI0aX4DTv02pZfae6pDgbiGmRao8apRXZhsH2Xo%2ByO08fxBXVvbpOuPmwheb0%2B1pDsqfHO6t%2BA0KnJnE9GMvwur0YmyIRThauVOxq%2F%2FEPDLtrnIr&X-Amz-Signature=c3f73732ed56b8c81278730dd0e1ef20f370ec68ff11fc1c9c60c926046693e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CDDGOK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBxwRSUpkVwURmAvhovdFq3FrvcUL1ABoGkF4121%2BVCUAiEA7%2BO3laVk3LCy2%2FY31ft28IjrI%2Fbgq55feftscMBwMF0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEYmHRc7LbPE4%2FlU0yrcAx0u%2FPVHK0wJ9UZ1JmThYp6qofIHCM3yY%2BzRzK2dP4FCvUPNBUG%2BWTPTP3EsWdhQRERkZ0VJmxsZlIxE7E41MtONIikptuVJacnETk4yYUPc81yNI%2FU%2FF94KRFP%2BntglGluk1zU3Z1mFOtnPl5eOYwksBEeOCHf3N6M6bOF8F9zZVWFzfo5lgN8r8w%2FFya8jpJBt7UffdwiLkSJbFlmg9UNxoPxmywezC0D%2Bqdn%2BMQDpIVKkXwq4zPfJnw4JHNY0ukRQ1qMrd2dlfkSchPjgSkKnrQpq8xZR%2BoZhpu0pUM%2B5z1i3fhoPBkpqtiaAFSAH8kCL5qnsbMZVZt6MIDwl8fF58BxHwYj2gdAnquBH%2F6Uuaf7F%2BeZUe02F5N8eNqUV4dMEF7Uq0nd02zuteh3ydekJt8cE6EjIADJ2OGhdK4eW%2BqLmwZsuoUmP4DENeQwgT2hBMKJEeV1o%2FTP8pQQMxDTyqDvHEGB8xZVuGNde6nKh7DIWhvwtWKwgRnMlMg3b9PWprgMk%2FNdjX4C%2BCGsfUh%2BH0OPIsU1MomUf0ZfXlh%2Fz%2BkAV6uHyhhthkf9MxJhRFNcX31Ekm9eMjdQaSky2QCHSeAJwaHzSM7ViZ94qH8M0B2Gb4MgepNWQjB5MMNjY%2FsQGOqUBCkUBN36mFm6ohSuhYcIlRvBDkUBQf4YNYurLuMys1DEjVw7x1wVwyOkbkwkfTg3OVbytkpwDaxD7jR%2Bmhnh2l8p7Rbq9zv5vfswHwYqUrkuRoI0aX4DTv02pZfae6pDgbiGmRao8apRXZhsH2Xo%2ByO08fxBXVvbpOuPmwheb0%2B1pDsqfHO6t%2BA0KnJnE9GMvwur0YmyIRThauVOxq%2F%2FEPDLtrnIr&X-Amz-Signature=7823094b499883acad9761b0a0e7e38b5061c520d5680abeb6e42b520fbe039f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7CDDGOK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBxwRSUpkVwURmAvhovdFq3FrvcUL1ABoGkF4121%2BVCUAiEA7%2BO3laVk3LCy2%2FY31ft28IjrI%2Fbgq55feftscMBwMF0q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEYmHRc7LbPE4%2FlU0yrcAx0u%2FPVHK0wJ9UZ1JmThYp6qofIHCM3yY%2BzRzK2dP4FCvUPNBUG%2BWTPTP3EsWdhQRERkZ0VJmxsZlIxE7E41MtONIikptuVJacnETk4yYUPc81yNI%2FU%2FF94KRFP%2BntglGluk1zU3Z1mFOtnPl5eOYwksBEeOCHf3N6M6bOF8F9zZVWFzfo5lgN8r8w%2FFya8jpJBt7UffdwiLkSJbFlmg9UNxoPxmywezC0D%2Bqdn%2BMQDpIVKkXwq4zPfJnw4JHNY0ukRQ1qMrd2dlfkSchPjgSkKnrQpq8xZR%2BoZhpu0pUM%2B5z1i3fhoPBkpqtiaAFSAH8kCL5qnsbMZVZt6MIDwl8fF58BxHwYj2gdAnquBH%2F6Uuaf7F%2BeZUe02F5N8eNqUV4dMEF7Uq0nd02zuteh3ydekJt8cE6EjIADJ2OGhdK4eW%2BqLmwZsuoUmP4DENeQwgT2hBMKJEeV1o%2FTP8pQQMxDTyqDvHEGB8xZVuGNde6nKh7DIWhvwtWKwgRnMlMg3b9PWprgMk%2FNdjX4C%2BCGsfUh%2BH0OPIsU1MomUf0ZfXlh%2Fz%2BkAV6uHyhhthkf9MxJhRFNcX31Ekm9eMjdQaSky2QCHSeAJwaHzSM7ViZ94qH8M0B2Gb4MgepNWQjB5MMNjY%2FsQGOqUBCkUBN36mFm6ohSuhYcIlRvBDkUBQf4YNYurLuMys1DEjVw7x1wVwyOkbkwkfTg3OVbytkpwDaxD7jR%2Bmhnh2l8p7Rbq9zv5vfswHwYqUrkuRoI0aX4DTv02pZfae6pDgbiGmRao8apRXZhsH2Xo%2ByO08fxBXVvbpOuPmwheb0%2B1pDsqfHO6t%2BA0KnJnE9GMvwur0YmyIRThauVOxq%2F%2FEPDLtrnIr&X-Amz-Signature=cf0834478872cd98802a1b2344a0983d443a218fa825fa38296073c53d16d10a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXFW72QP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAvO2W3uTUdxmobiXUqyg53Uggo%2Bfoc9bf3qE1D51HEFAiEA9ZSbepoQHQwmk1iqdpUQYWRUKoM4J75HZta5P636LWMq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHVWcMleOpknZ%2Bn3jircA5bubReBRxV6a%2B6CwmdufrITD1TBRqGGWeHdDYlcphq3FmP2FHnti%2F%2F88GqKjmSp3b0GCbew74n9%2FIqkwkuR2%2FRHr%2BdtYTfHrJgVpg8OkRyJiWY08JVgEsLfY4J5rPxAlouwnUobyK8QZeI4MMG5XltnyjzneJtA2HlJ3F19IXEXsk24joD5dgh%2BklpXoI%2FiajZgteJed49PPS4hOUi7OHPdfaeZjAkDPbyoI477f%2BjppFfAxjJXQDIgtgsWwNHcrmNYB7xSFBJkJrIOs5%2BuJCZB1Yh4btONKgmP5yRue0Pws%2BAs%2FYKT44pquWeXwb3YzOQJpaCBpITYA4SZNB2IS%2BUJ05OOM95Ildtf587zKDTS3s9PWbGQTc82hBxmjocj7gRUD7YSby1JI5WIldMBmRDnYZVW%2Frcq5M6vh%2F%2FB0ePG9S6A9FT4SyBB1p26R6ictGug2gnlLVMb2t0UkhxxwkAgpffvw9%2B48v6pBdKz8T1algh%2BDwJuRREpXqWkmBuB2Qg8Zd7CEvQCnB4YInb3UtfTjEscbU4PvWzsmiM0%2BL8na7hecmgFx7Wc8gXI2clwcwjzeHMyXu02N1YDblUvAABqmx6rcmzSb1lVOiS3nEUtDv%2FG3karSGhb8yJdMNrX%2FsQGOqUBUHbVimorsT8hifdTEEMYaOfIOyOrumKDHGcNQG5Oz0o5%2F8jbE43ptzTolX%2FEuIqUFnlY0%2Fhr%2BeuKM5frXukLVhv7Bvx9vQvhg9StToxbl%2BUvzIvuSGf%2Fa%2BuQ1vH0DmynncII5RGd1%2FmPMUarcdLTsw%2BfpsrBpj0LZAOAKEgWfxHbNgF43hRvRIvnE%2Fn9TEOkeXnqq9iRoJB57s%2Byt%2BoG3uL7jRfe&X-Amz-Signature=8ccfaf45299c03dc494cc3b463cc41feccc4d0f57493e1a66925de28a0da9706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTC7NUS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCSXr88dp6kQr%2BVSYQYB8wMjtlJT7bEtMliFPKw6vN3NQIgOO23%2Fm2c6lJEpW6qLwV8WjZxcZhXL9ixlZykPiyHCaAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDXr4LiH3ZLYaFrw6SrcA9RQIhD%2FQlIDcnVZtFj7IVFuxlMgJxDmzUfgfXZLaeQaJizg2vSLe%2FDKTiP7UxEVt7UwiGlIRiUheJsqG90CO%2Bu7UAc8nWzoKdFpZl7cl19ttSEBhx%2FYZ1Cowaz2iMyhhvxo%2FoSuOrWuwrHtEdShsdk42yiSCwvDKDacMJjHf5u82wCholyL9i3rTQPPAR4QKT7KZc9XRrq%2Bz2ftWW8yfgjQg33LmaFYxOqm0UKPCgGuLcVHYbkvGjbCVPalnqjB9MflU87OPIyaYJz3uBFSOovSATg77GxRaS9Pr9V3cGjtT57N4XYdcfEl6C9sPrHwtQNhN1jNYywOpCsENpkMzq0Pe1qfyHSIbuUpE%2Fh%2FDNw0S4cKSO6iLxS5G9Ue6EkD0x7bmbx9qMXXJ4pzK0YdappksEACXRdptYXk4VNKHwB52dMcGtujUZPPTt%2FSpoQ%2Fic9Mk5sQ0EzhYx%2FM8%2FAovqTO5iFeGIRkKS7Eks1O5gzT3pJooiMhKYqTlr7JueKuARY%2FMneiLVU%2FHHHTxewcgYbCRNn6DCpS%2FDVgt5bmxaGswSK4RUk7K6rkdv5polqEEtIQGJd2GLngooBkM0BxY1RVjLIB5fEbM31xMB0zBAICF666TR9D%2B3BvSM1YMJzY%2FsQGOqUBpe%2Bjbz6lGpSuUrCx0H3OD9ee%2FD%2FC1P%2BwfB8VCX9KM4Cf1Tq2WsLo8rJGRxVph2O7YkgvIKS0O%2BA3Yiy926Um%2Bv0foJ5TAcF5VDeisvEoePqwtf86Z3AdC3EJllPujNAPb0Yym4%2FiDdp%2FIl62uHtx%2FKMEzjxgJ6L7HrGJDut3bKmWIdGqFh9vMFq0aD3U9yJcRZ16clctLis%2FBUPRGXydAD8uMgMn&X-Amz-Signature=5945e2a3e0fc40bca1e36d11a3e385a24b0450e00ee081fb0c15d5399661c7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTC7NUS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCSXr88dp6kQr%2BVSYQYB8wMjtlJT7bEtMliFPKw6vN3NQIgOO23%2Fm2c6lJEpW6qLwV8WjZxcZhXL9ixlZykPiyHCaAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDXr4LiH3ZLYaFrw6SrcA9RQIhD%2FQlIDcnVZtFj7IVFuxlMgJxDmzUfgfXZLaeQaJizg2vSLe%2FDKTiP7UxEVt7UwiGlIRiUheJsqG90CO%2Bu7UAc8nWzoKdFpZl7cl19ttSEBhx%2FYZ1Cowaz2iMyhhvxo%2FoSuOrWuwrHtEdShsdk42yiSCwvDKDacMJjHf5u82wCholyL9i3rTQPPAR4QKT7KZc9XRrq%2Bz2ftWW8yfgjQg33LmaFYxOqm0UKPCgGuLcVHYbkvGjbCVPalnqjB9MflU87OPIyaYJz3uBFSOovSATg77GxRaS9Pr9V3cGjtT57N4XYdcfEl6C9sPrHwtQNhN1jNYywOpCsENpkMzq0Pe1qfyHSIbuUpE%2Fh%2FDNw0S4cKSO6iLxS5G9Ue6EkD0x7bmbx9qMXXJ4pzK0YdappksEACXRdptYXk4VNKHwB52dMcGtujUZPPTt%2FSpoQ%2Fic9Mk5sQ0EzhYx%2FM8%2FAovqTO5iFeGIRkKS7Eks1O5gzT3pJooiMhKYqTlr7JueKuARY%2FMneiLVU%2FHHHTxewcgYbCRNn6DCpS%2FDVgt5bmxaGswSK4RUk7K6rkdv5polqEEtIQGJd2GLngooBkM0BxY1RVjLIB5fEbM31xMB0zBAICF666TR9D%2B3BvSM1YMJzY%2FsQGOqUBpe%2Bjbz6lGpSuUrCx0H3OD9ee%2FD%2FC1P%2BwfB8VCX9KM4Cf1Tq2WsLo8rJGRxVph2O7YkgvIKS0O%2BA3Yiy926Um%2Bv0foJ5TAcF5VDeisvEoePqwtf86Z3AdC3EJllPujNAPb0Yym4%2FiDdp%2FIl62uHtx%2FKMEzjxgJ6L7HrGJDut3bKmWIdGqFh9vMFq0aD3U9yJcRZ16clctLis%2FBUPRGXydAD8uMgMn&X-Amz-Signature=0c2c0cadedf212b03e634776aeb0beb53ddd9dc586bbf14d74168db585d2d6d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTC7NUS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCSXr88dp6kQr%2BVSYQYB8wMjtlJT7bEtMliFPKw6vN3NQIgOO23%2Fm2c6lJEpW6qLwV8WjZxcZhXL9ixlZykPiyHCaAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDXr4LiH3ZLYaFrw6SrcA9RQIhD%2FQlIDcnVZtFj7IVFuxlMgJxDmzUfgfXZLaeQaJizg2vSLe%2FDKTiP7UxEVt7UwiGlIRiUheJsqG90CO%2Bu7UAc8nWzoKdFpZl7cl19ttSEBhx%2FYZ1Cowaz2iMyhhvxo%2FoSuOrWuwrHtEdShsdk42yiSCwvDKDacMJjHf5u82wCholyL9i3rTQPPAR4QKT7KZc9XRrq%2Bz2ftWW8yfgjQg33LmaFYxOqm0UKPCgGuLcVHYbkvGjbCVPalnqjB9MflU87OPIyaYJz3uBFSOovSATg77GxRaS9Pr9V3cGjtT57N4XYdcfEl6C9sPrHwtQNhN1jNYywOpCsENpkMzq0Pe1qfyHSIbuUpE%2Fh%2FDNw0S4cKSO6iLxS5G9Ue6EkD0x7bmbx9qMXXJ4pzK0YdappksEACXRdptYXk4VNKHwB52dMcGtujUZPPTt%2FSpoQ%2Fic9Mk5sQ0EzhYx%2FM8%2FAovqTO5iFeGIRkKS7Eks1O5gzT3pJooiMhKYqTlr7JueKuARY%2FMneiLVU%2FHHHTxewcgYbCRNn6DCpS%2FDVgt5bmxaGswSK4RUk7K6rkdv5polqEEtIQGJd2GLngooBkM0BxY1RVjLIB5fEbM31xMB0zBAICF666TR9D%2B3BvSM1YMJzY%2FsQGOqUBpe%2Bjbz6lGpSuUrCx0H3OD9ee%2FD%2FC1P%2BwfB8VCX9KM4Cf1Tq2WsLo8rJGRxVph2O7YkgvIKS0O%2BA3Yiy926Um%2Bv0foJ5TAcF5VDeisvEoePqwtf86Z3AdC3EJllPujNAPb0Yym4%2FiDdp%2FIl62uHtx%2FKMEzjxgJ6L7HrGJDut3bKmWIdGqFh9vMFq0aD3U9yJcRZ16clctLis%2FBUPRGXydAD8uMgMn&X-Amz-Signature=7b99ec601e03b30c2aaf8d92bd4c04c6db6f4294662cc1cd853686671a9be3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTC7NUS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCSXr88dp6kQr%2BVSYQYB8wMjtlJT7bEtMliFPKw6vN3NQIgOO23%2Fm2c6lJEpW6qLwV8WjZxcZhXL9ixlZykPiyHCaAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDXr4LiH3ZLYaFrw6SrcA9RQIhD%2FQlIDcnVZtFj7IVFuxlMgJxDmzUfgfXZLaeQaJizg2vSLe%2FDKTiP7UxEVt7UwiGlIRiUheJsqG90CO%2Bu7UAc8nWzoKdFpZl7cl19ttSEBhx%2FYZ1Cowaz2iMyhhvxo%2FoSuOrWuwrHtEdShsdk42yiSCwvDKDacMJjHf5u82wCholyL9i3rTQPPAR4QKT7KZc9XRrq%2Bz2ftWW8yfgjQg33LmaFYxOqm0UKPCgGuLcVHYbkvGjbCVPalnqjB9MflU87OPIyaYJz3uBFSOovSATg77GxRaS9Pr9V3cGjtT57N4XYdcfEl6C9sPrHwtQNhN1jNYywOpCsENpkMzq0Pe1qfyHSIbuUpE%2Fh%2FDNw0S4cKSO6iLxS5G9Ue6EkD0x7bmbx9qMXXJ4pzK0YdappksEACXRdptYXk4VNKHwB52dMcGtujUZPPTt%2FSpoQ%2Fic9Mk5sQ0EzhYx%2FM8%2FAovqTO5iFeGIRkKS7Eks1O5gzT3pJooiMhKYqTlr7JueKuARY%2FMneiLVU%2FHHHTxewcgYbCRNn6DCpS%2FDVgt5bmxaGswSK4RUk7K6rkdv5polqEEtIQGJd2GLngooBkM0BxY1RVjLIB5fEbM31xMB0zBAICF666TR9D%2B3BvSM1YMJzY%2FsQGOqUBpe%2Bjbz6lGpSuUrCx0H3OD9ee%2FD%2FC1P%2BwfB8VCX9KM4Cf1Tq2WsLo8rJGRxVph2O7YkgvIKS0O%2BA3Yiy926Um%2Bv0foJ5TAcF5VDeisvEoePqwtf86Z3AdC3EJllPujNAPb0Yym4%2FiDdp%2FIl62uHtx%2FKMEzjxgJ6L7HrGJDut3bKmWIdGqFh9vMFq0aD3U9yJcRZ16clctLis%2FBUPRGXydAD8uMgMn&X-Amz-Signature=92ceb2bb6244f2acf8a8fe74315f7742718b054af9d6d29fea3f8f7c93baeef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTC7NUS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCSXr88dp6kQr%2BVSYQYB8wMjtlJT7bEtMliFPKw6vN3NQIgOO23%2Fm2c6lJEpW6qLwV8WjZxcZhXL9ixlZykPiyHCaAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDXr4LiH3ZLYaFrw6SrcA9RQIhD%2FQlIDcnVZtFj7IVFuxlMgJxDmzUfgfXZLaeQaJizg2vSLe%2FDKTiP7UxEVt7UwiGlIRiUheJsqG90CO%2Bu7UAc8nWzoKdFpZl7cl19ttSEBhx%2FYZ1Cowaz2iMyhhvxo%2FoSuOrWuwrHtEdShsdk42yiSCwvDKDacMJjHf5u82wCholyL9i3rTQPPAR4QKT7KZc9XRrq%2Bz2ftWW8yfgjQg33LmaFYxOqm0UKPCgGuLcVHYbkvGjbCVPalnqjB9MflU87OPIyaYJz3uBFSOovSATg77GxRaS9Pr9V3cGjtT57N4XYdcfEl6C9sPrHwtQNhN1jNYywOpCsENpkMzq0Pe1qfyHSIbuUpE%2Fh%2FDNw0S4cKSO6iLxS5G9Ue6EkD0x7bmbx9qMXXJ4pzK0YdappksEACXRdptYXk4VNKHwB52dMcGtujUZPPTt%2FSpoQ%2Fic9Mk5sQ0EzhYx%2FM8%2FAovqTO5iFeGIRkKS7Eks1O5gzT3pJooiMhKYqTlr7JueKuARY%2FMneiLVU%2FHHHTxewcgYbCRNn6DCpS%2FDVgt5bmxaGswSK4RUk7K6rkdv5polqEEtIQGJd2GLngooBkM0BxY1RVjLIB5fEbM31xMB0zBAICF666TR9D%2B3BvSM1YMJzY%2FsQGOqUBpe%2Bjbz6lGpSuUrCx0H3OD9ee%2FD%2FC1P%2BwfB8VCX9KM4Cf1Tq2WsLo8rJGRxVph2O7YkgvIKS0O%2BA3Yiy926Um%2Bv0foJ5TAcF5VDeisvEoePqwtf86Z3AdC3EJllPujNAPb0Yym4%2FiDdp%2FIl62uHtx%2FKMEzjxgJ6L7HrGJDut3bKmWIdGqFh9vMFq0aD3U9yJcRZ16clctLis%2FBUPRGXydAD8uMgMn&X-Amz-Signature=5b1897796bab3a1580e1f5181a3076223262213f0e1f2e59a76160e2f6c895b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTC7NUS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCSXr88dp6kQr%2BVSYQYB8wMjtlJT7bEtMliFPKw6vN3NQIgOO23%2Fm2c6lJEpW6qLwV8WjZxcZhXL9ixlZykPiyHCaAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDXr4LiH3ZLYaFrw6SrcA9RQIhD%2FQlIDcnVZtFj7IVFuxlMgJxDmzUfgfXZLaeQaJizg2vSLe%2FDKTiP7UxEVt7UwiGlIRiUheJsqG90CO%2Bu7UAc8nWzoKdFpZl7cl19ttSEBhx%2FYZ1Cowaz2iMyhhvxo%2FoSuOrWuwrHtEdShsdk42yiSCwvDKDacMJjHf5u82wCholyL9i3rTQPPAR4QKT7KZc9XRrq%2Bz2ftWW8yfgjQg33LmaFYxOqm0UKPCgGuLcVHYbkvGjbCVPalnqjB9MflU87OPIyaYJz3uBFSOovSATg77GxRaS9Pr9V3cGjtT57N4XYdcfEl6C9sPrHwtQNhN1jNYywOpCsENpkMzq0Pe1qfyHSIbuUpE%2Fh%2FDNw0S4cKSO6iLxS5G9Ue6EkD0x7bmbx9qMXXJ4pzK0YdappksEACXRdptYXk4VNKHwB52dMcGtujUZPPTt%2FSpoQ%2Fic9Mk5sQ0EzhYx%2FM8%2FAovqTO5iFeGIRkKS7Eks1O5gzT3pJooiMhKYqTlr7JueKuARY%2FMneiLVU%2FHHHTxewcgYbCRNn6DCpS%2FDVgt5bmxaGswSK4RUk7K6rkdv5polqEEtIQGJd2GLngooBkM0BxY1RVjLIB5fEbM31xMB0zBAICF666TR9D%2B3BvSM1YMJzY%2FsQGOqUBpe%2Bjbz6lGpSuUrCx0H3OD9ee%2FD%2FC1P%2BwfB8VCX9KM4Cf1Tq2WsLo8rJGRxVph2O7YkgvIKS0O%2BA3Yiy926Um%2Bv0foJ5TAcF5VDeisvEoePqwtf86Z3AdC3EJllPujNAPb0Yym4%2FiDdp%2FIl62uHtx%2FKMEzjxgJ6L7HrGJDut3bKmWIdGqFh9vMFq0aD3U9yJcRZ16clctLis%2FBUPRGXydAD8uMgMn&X-Amz-Signature=dcb4e35a834007d96584df878cd4dd0175956b062cffbd23e3aa7f20412f765a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTC7NUS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCSXr88dp6kQr%2BVSYQYB8wMjtlJT7bEtMliFPKw6vN3NQIgOO23%2Fm2c6lJEpW6qLwV8WjZxcZhXL9ixlZykPiyHCaAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDXr4LiH3ZLYaFrw6SrcA9RQIhD%2FQlIDcnVZtFj7IVFuxlMgJxDmzUfgfXZLaeQaJizg2vSLe%2FDKTiP7UxEVt7UwiGlIRiUheJsqG90CO%2Bu7UAc8nWzoKdFpZl7cl19ttSEBhx%2FYZ1Cowaz2iMyhhvxo%2FoSuOrWuwrHtEdShsdk42yiSCwvDKDacMJjHf5u82wCholyL9i3rTQPPAR4QKT7KZc9XRrq%2Bz2ftWW8yfgjQg33LmaFYxOqm0UKPCgGuLcVHYbkvGjbCVPalnqjB9MflU87OPIyaYJz3uBFSOovSATg77GxRaS9Pr9V3cGjtT57N4XYdcfEl6C9sPrHwtQNhN1jNYywOpCsENpkMzq0Pe1qfyHSIbuUpE%2Fh%2FDNw0S4cKSO6iLxS5G9Ue6EkD0x7bmbx9qMXXJ4pzK0YdappksEACXRdptYXk4VNKHwB52dMcGtujUZPPTt%2FSpoQ%2Fic9Mk5sQ0EzhYx%2FM8%2FAovqTO5iFeGIRkKS7Eks1O5gzT3pJooiMhKYqTlr7JueKuARY%2FMneiLVU%2FHHHTxewcgYbCRNn6DCpS%2FDVgt5bmxaGswSK4RUk7K6rkdv5polqEEtIQGJd2GLngooBkM0BxY1RVjLIB5fEbM31xMB0zBAICF666TR9D%2B3BvSM1YMJzY%2FsQGOqUBpe%2Bjbz6lGpSuUrCx0H3OD9ee%2FD%2FC1P%2BwfB8VCX9KM4Cf1Tq2WsLo8rJGRxVph2O7YkgvIKS0O%2BA3Yiy926Um%2Bv0foJ5TAcF5VDeisvEoePqwtf86Z3AdC3EJllPujNAPb0Yym4%2FiDdp%2FIl62uHtx%2FKMEzjxgJ6L7HrGJDut3bKmWIdGqFh9vMFq0aD3U9yJcRZ16clctLis%2FBUPRGXydAD8uMgMn&X-Amz-Signature=730ad4940d47461ca5662cff8cb8d9ea0c1df07c1942d0ed8852284600f4b65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTC7NUS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCSXr88dp6kQr%2BVSYQYB8wMjtlJT7bEtMliFPKw6vN3NQIgOO23%2Fm2c6lJEpW6qLwV8WjZxcZhXL9ixlZykPiyHCaAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDXr4LiH3ZLYaFrw6SrcA9RQIhD%2FQlIDcnVZtFj7IVFuxlMgJxDmzUfgfXZLaeQaJizg2vSLe%2FDKTiP7UxEVt7UwiGlIRiUheJsqG90CO%2Bu7UAc8nWzoKdFpZl7cl19ttSEBhx%2FYZ1Cowaz2iMyhhvxo%2FoSuOrWuwrHtEdShsdk42yiSCwvDKDacMJjHf5u82wCholyL9i3rTQPPAR4QKT7KZc9XRrq%2Bz2ftWW8yfgjQg33LmaFYxOqm0UKPCgGuLcVHYbkvGjbCVPalnqjB9MflU87OPIyaYJz3uBFSOovSATg77GxRaS9Pr9V3cGjtT57N4XYdcfEl6C9sPrHwtQNhN1jNYywOpCsENpkMzq0Pe1qfyHSIbuUpE%2Fh%2FDNw0S4cKSO6iLxS5G9Ue6EkD0x7bmbx9qMXXJ4pzK0YdappksEACXRdptYXk4VNKHwB52dMcGtujUZPPTt%2FSpoQ%2Fic9Mk5sQ0EzhYx%2FM8%2FAovqTO5iFeGIRkKS7Eks1O5gzT3pJooiMhKYqTlr7JueKuARY%2FMneiLVU%2FHHHTxewcgYbCRNn6DCpS%2FDVgt5bmxaGswSK4RUk7K6rkdv5polqEEtIQGJd2GLngooBkM0BxY1RVjLIB5fEbM31xMB0zBAICF666TR9D%2B3BvSM1YMJzY%2FsQGOqUBpe%2Bjbz6lGpSuUrCx0H3OD9ee%2FD%2FC1P%2BwfB8VCX9KM4Cf1Tq2WsLo8rJGRxVph2O7YkgvIKS0O%2BA3Yiy926Um%2Bv0foJ5TAcF5VDeisvEoePqwtf86Z3AdC3EJllPujNAPb0Yym4%2FiDdp%2FIl62uHtx%2FKMEzjxgJ6L7HrGJDut3bKmWIdGqFh9vMFq0aD3U9yJcRZ16clctLis%2FBUPRGXydAD8uMgMn&X-Amz-Signature=433841aacb2f91a7861e33116945fc3f9448d5d51ef21d162ad4fcb42cd5622c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZTC7NUS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T022821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCSXr88dp6kQr%2BVSYQYB8wMjtlJT7bEtMliFPKw6vN3NQIgOO23%2Fm2c6lJEpW6qLwV8WjZxcZhXL9ixlZykPiyHCaAq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDXr4LiH3ZLYaFrw6SrcA9RQIhD%2FQlIDcnVZtFj7IVFuxlMgJxDmzUfgfXZLaeQaJizg2vSLe%2FDKTiP7UxEVt7UwiGlIRiUheJsqG90CO%2Bu7UAc8nWzoKdFpZl7cl19ttSEBhx%2FYZ1Cowaz2iMyhhvxo%2FoSuOrWuwrHtEdShsdk42yiSCwvDKDacMJjHf5u82wCholyL9i3rTQPPAR4QKT7KZc9XRrq%2Bz2ftWW8yfgjQg33LmaFYxOqm0UKPCgGuLcVHYbkvGjbCVPalnqjB9MflU87OPIyaYJz3uBFSOovSATg77GxRaS9Pr9V3cGjtT57N4XYdcfEl6C9sPrHwtQNhN1jNYywOpCsENpkMzq0Pe1qfyHSIbuUpE%2Fh%2FDNw0S4cKSO6iLxS5G9Ue6EkD0x7bmbx9qMXXJ4pzK0YdappksEACXRdptYXk4VNKHwB52dMcGtujUZPPTt%2FSpoQ%2Fic9Mk5sQ0EzhYx%2FM8%2FAovqTO5iFeGIRkKS7Eks1O5gzT3pJooiMhKYqTlr7JueKuARY%2FMneiLVU%2FHHHTxewcgYbCRNn6DCpS%2FDVgt5bmxaGswSK4RUk7K6rkdv5polqEEtIQGJd2GLngooBkM0BxY1RVjLIB5fEbM31xMB0zBAICF666TR9D%2B3BvSM1YMJzY%2FsQGOqUBpe%2Bjbz6lGpSuUrCx0H3OD9ee%2FD%2FC1P%2BwfB8VCX9KM4Cf1Tq2WsLo8rJGRxVph2O7YkgvIKS0O%2BA3Yiy926Um%2Bv0foJ5TAcF5VDeisvEoePqwtf86Z3AdC3EJllPujNAPb0Yym4%2FiDdp%2FIl62uHtx%2FKMEzjxgJ6L7HrGJDut3bKmWIdGqFh9vMFq0aD3U9yJcRZ16clctLis%2FBUPRGXydAD8uMgMn&X-Amz-Signature=7bfc2f7ad5bd0aec93a87dc345d7bb20f602d380df85e441fa729bac6dd1ac27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
