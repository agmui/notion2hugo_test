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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJSGMDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDgMTzyEx8MssPhsCmJI8tUkHPgqPWsHxitsGzl0vSiggIhALIYBX%2BOXu6T3ZIzy9eriKfzUmALJkqk2WFHwGWditrAKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrmS5p66lYVBFWQ6Uq3AOCOhdfUFqv0Ja9g372M%2FaRyDz3wKrl%2Fz%2FnMhHrnmVuYh4jmDRKyNzpqsP2FctsNlqz16cJ2cMhJ4B%2BMVFuZhm9MyvoYQImN8R6k6q1WkArsNl3sCk%2BPJCTxppflFhFwXry4yRLplbpOAJEYOtRlOrwGKmHuZpo8Pr8xVa7I%2BPw1QqRx7GE4O9gbG9BFqR5NZCrZqbWPz%2FeLWH5KTzXkQtQy%2BVzpEB%2F6Y0lXbt6ANKqBPIayLCCKr0CLzZ0ODlltt%2Fn%2BMRYZ6V2jRmoSH5yrTlrgdZXNPRpmIIc7wZCUNzLuCF%2FMNR3rg4ht8eTlAfzbccb2nnsaWV2tEt4AdlNpWn3SNhyH080Stfj%2FJJa5SYhIPgBDU8dONCR5CvUPGxBj4dRJR78f5kqsFC%2BzTfmOG878qcZuJxkotkX0uGTrJgwz33SrWtOtLU9XW34Vs8yD0P%2FgUgxxOknGsZ5A54TksovSab9tG2F2B%2FbWJM7bQQUHagIjuTN%2BZB7NmfGRb5w96vhSCibDjAriHeef14hGyh%2FlS%2B4cMKL4kvgFsnEsVK0y9caVAwLgss06uYlUByEKb4cTzrSOOQjDSVn0OIPwBReqrG9tNSdC4Jmm%2BUNr%2BgIVf3LY6bo35HS2ZddCTCMo%2FrEBjqkAReF%2FCIOzgPb1U4JSfsKtdY2zLt7TdKegk6OlV1sN3wxTNtJV3YiUQmn5oShxz7RYLsp2eS4Q%2Fk4WL3FhDI%2BT1Eikefrt3lFpeAyO%2BymsqKKlOSKLGvJ%2FlP5%2FqjuIqD0zrQrgZW1LJByBA0lqC3hfbfZpjDhJr%2FQ4LPbGm2WvSBbab0BC9NYLAcnE97BvcBbGno5GP8FPmp9In8oLTUJIDUTEnia&X-Amz-Signature=df514c08abd58563483813d58dbaab8d2489354e4ea20e95dd98e1891c23743f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJSGMDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDgMTzyEx8MssPhsCmJI8tUkHPgqPWsHxitsGzl0vSiggIhALIYBX%2BOXu6T3ZIzy9eriKfzUmALJkqk2WFHwGWditrAKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrmS5p66lYVBFWQ6Uq3AOCOhdfUFqv0Ja9g372M%2FaRyDz3wKrl%2Fz%2FnMhHrnmVuYh4jmDRKyNzpqsP2FctsNlqz16cJ2cMhJ4B%2BMVFuZhm9MyvoYQImN8R6k6q1WkArsNl3sCk%2BPJCTxppflFhFwXry4yRLplbpOAJEYOtRlOrwGKmHuZpo8Pr8xVa7I%2BPw1QqRx7GE4O9gbG9BFqR5NZCrZqbWPz%2FeLWH5KTzXkQtQy%2BVzpEB%2F6Y0lXbt6ANKqBPIayLCCKr0CLzZ0ODlltt%2Fn%2BMRYZ6V2jRmoSH5yrTlrgdZXNPRpmIIc7wZCUNzLuCF%2FMNR3rg4ht8eTlAfzbccb2nnsaWV2tEt4AdlNpWn3SNhyH080Stfj%2FJJa5SYhIPgBDU8dONCR5CvUPGxBj4dRJR78f5kqsFC%2BzTfmOG878qcZuJxkotkX0uGTrJgwz33SrWtOtLU9XW34Vs8yD0P%2FgUgxxOknGsZ5A54TksovSab9tG2F2B%2FbWJM7bQQUHagIjuTN%2BZB7NmfGRb5w96vhSCibDjAriHeef14hGyh%2FlS%2B4cMKL4kvgFsnEsVK0y9caVAwLgss06uYlUByEKb4cTzrSOOQjDSVn0OIPwBReqrG9tNSdC4Jmm%2BUNr%2BgIVf3LY6bo35HS2ZddCTCMo%2FrEBjqkAReF%2FCIOzgPb1U4JSfsKtdY2zLt7TdKegk6OlV1sN3wxTNtJV3YiUQmn5oShxz7RYLsp2eS4Q%2Fk4WL3FhDI%2BT1Eikefrt3lFpeAyO%2BymsqKKlOSKLGvJ%2FlP5%2FqjuIqD0zrQrgZW1LJByBA0lqC3hfbfZpjDhJr%2FQ4LPbGm2WvSBbab0BC9NYLAcnE97BvcBbGno5GP8FPmp9In8oLTUJIDUTEnia&X-Amz-Signature=983b5c73e5ca29a3eaf8d1249c9b0cb9217c54ba72ca29eeff902eb8759ec329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJSGMDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDgMTzyEx8MssPhsCmJI8tUkHPgqPWsHxitsGzl0vSiggIhALIYBX%2BOXu6T3ZIzy9eriKfzUmALJkqk2WFHwGWditrAKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrmS5p66lYVBFWQ6Uq3AOCOhdfUFqv0Ja9g372M%2FaRyDz3wKrl%2Fz%2FnMhHrnmVuYh4jmDRKyNzpqsP2FctsNlqz16cJ2cMhJ4B%2BMVFuZhm9MyvoYQImN8R6k6q1WkArsNl3sCk%2BPJCTxppflFhFwXry4yRLplbpOAJEYOtRlOrwGKmHuZpo8Pr8xVa7I%2BPw1QqRx7GE4O9gbG9BFqR5NZCrZqbWPz%2FeLWH5KTzXkQtQy%2BVzpEB%2F6Y0lXbt6ANKqBPIayLCCKr0CLzZ0ODlltt%2Fn%2BMRYZ6V2jRmoSH5yrTlrgdZXNPRpmIIc7wZCUNzLuCF%2FMNR3rg4ht8eTlAfzbccb2nnsaWV2tEt4AdlNpWn3SNhyH080Stfj%2FJJa5SYhIPgBDU8dONCR5CvUPGxBj4dRJR78f5kqsFC%2BzTfmOG878qcZuJxkotkX0uGTrJgwz33SrWtOtLU9XW34Vs8yD0P%2FgUgxxOknGsZ5A54TksovSab9tG2F2B%2FbWJM7bQQUHagIjuTN%2BZB7NmfGRb5w96vhSCibDjAriHeef14hGyh%2FlS%2B4cMKL4kvgFsnEsVK0y9caVAwLgss06uYlUByEKb4cTzrSOOQjDSVn0OIPwBReqrG9tNSdC4Jmm%2BUNr%2BgIVf3LY6bo35HS2ZddCTCMo%2FrEBjqkAReF%2FCIOzgPb1U4JSfsKtdY2zLt7TdKegk6OlV1sN3wxTNtJV3YiUQmn5oShxz7RYLsp2eS4Q%2Fk4WL3FhDI%2BT1Eikefrt3lFpeAyO%2BymsqKKlOSKLGvJ%2FlP5%2FqjuIqD0zrQrgZW1LJByBA0lqC3hfbfZpjDhJr%2FQ4LPbGm2WvSBbab0BC9NYLAcnE97BvcBbGno5GP8FPmp9In8oLTUJIDUTEnia&X-Amz-Signature=5918fe7a792e3369485964df1321f1151330f5d2d4d6e65d6c8b0d103cca83c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJSGMDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDgMTzyEx8MssPhsCmJI8tUkHPgqPWsHxitsGzl0vSiggIhALIYBX%2BOXu6T3ZIzy9eriKfzUmALJkqk2WFHwGWditrAKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrmS5p66lYVBFWQ6Uq3AOCOhdfUFqv0Ja9g372M%2FaRyDz3wKrl%2Fz%2FnMhHrnmVuYh4jmDRKyNzpqsP2FctsNlqz16cJ2cMhJ4B%2BMVFuZhm9MyvoYQImN8R6k6q1WkArsNl3sCk%2BPJCTxppflFhFwXry4yRLplbpOAJEYOtRlOrwGKmHuZpo8Pr8xVa7I%2BPw1QqRx7GE4O9gbG9BFqR5NZCrZqbWPz%2FeLWH5KTzXkQtQy%2BVzpEB%2F6Y0lXbt6ANKqBPIayLCCKr0CLzZ0ODlltt%2Fn%2BMRYZ6V2jRmoSH5yrTlrgdZXNPRpmIIc7wZCUNzLuCF%2FMNR3rg4ht8eTlAfzbccb2nnsaWV2tEt4AdlNpWn3SNhyH080Stfj%2FJJa5SYhIPgBDU8dONCR5CvUPGxBj4dRJR78f5kqsFC%2BzTfmOG878qcZuJxkotkX0uGTrJgwz33SrWtOtLU9XW34Vs8yD0P%2FgUgxxOknGsZ5A54TksovSab9tG2F2B%2FbWJM7bQQUHagIjuTN%2BZB7NmfGRb5w96vhSCibDjAriHeef14hGyh%2FlS%2B4cMKL4kvgFsnEsVK0y9caVAwLgss06uYlUByEKb4cTzrSOOQjDSVn0OIPwBReqrG9tNSdC4Jmm%2BUNr%2BgIVf3LY6bo35HS2ZddCTCMo%2FrEBjqkAReF%2FCIOzgPb1U4JSfsKtdY2zLt7TdKegk6OlV1sN3wxTNtJV3YiUQmn5oShxz7RYLsp2eS4Q%2Fk4WL3FhDI%2BT1Eikefrt3lFpeAyO%2BymsqKKlOSKLGvJ%2FlP5%2FqjuIqD0zrQrgZW1LJByBA0lqC3hfbfZpjDhJr%2FQ4LPbGm2WvSBbab0BC9NYLAcnE97BvcBbGno5GP8FPmp9In8oLTUJIDUTEnia&X-Amz-Signature=66e44e8c9b27c4fbf19d92f66fbb75596a001e56b887fd258be9afbd2f2e08b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJSGMDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDgMTzyEx8MssPhsCmJI8tUkHPgqPWsHxitsGzl0vSiggIhALIYBX%2BOXu6T3ZIzy9eriKfzUmALJkqk2WFHwGWditrAKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrmS5p66lYVBFWQ6Uq3AOCOhdfUFqv0Ja9g372M%2FaRyDz3wKrl%2Fz%2FnMhHrnmVuYh4jmDRKyNzpqsP2FctsNlqz16cJ2cMhJ4B%2BMVFuZhm9MyvoYQImN8R6k6q1WkArsNl3sCk%2BPJCTxppflFhFwXry4yRLplbpOAJEYOtRlOrwGKmHuZpo8Pr8xVa7I%2BPw1QqRx7GE4O9gbG9BFqR5NZCrZqbWPz%2FeLWH5KTzXkQtQy%2BVzpEB%2F6Y0lXbt6ANKqBPIayLCCKr0CLzZ0ODlltt%2Fn%2BMRYZ6V2jRmoSH5yrTlrgdZXNPRpmIIc7wZCUNzLuCF%2FMNR3rg4ht8eTlAfzbccb2nnsaWV2tEt4AdlNpWn3SNhyH080Stfj%2FJJa5SYhIPgBDU8dONCR5CvUPGxBj4dRJR78f5kqsFC%2BzTfmOG878qcZuJxkotkX0uGTrJgwz33SrWtOtLU9XW34Vs8yD0P%2FgUgxxOknGsZ5A54TksovSab9tG2F2B%2FbWJM7bQQUHagIjuTN%2BZB7NmfGRb5w96vhSCibDjAriHeef14hGyh%2FlS%2B4cMKL4kvgFsnEsVK0y9caVAwLgss06uYlUByEKb4cTzrSOOQjDSVn0OIPwBReqrG9tNSdC4Jmm%2BUNr%2BgIVf3LY6bo35HS2ZddCTCMo%2FrEBjqkAReF%2FCIOzgPb1U4JSfsKtdY2zLt7TdKegk6OlV1sN3wxTNtJV3YiUQmn5oShxz7RYLsp2eS4Q%2Fk4WL3FhDI%2BT1Eikefrt3lFpeAyO%2BymsqKKlOSKLGvJ%2FlP5%2FqjuIqD0zrQrgZW1LJByBA0lqC3hfbfZpjDhJr%2FQ4LPbGm2WvSBbab0BC9NYLAcnE97BvcBbGno5GP8FPmp9In8oLTUJIDUTEnia&X-Amz-Signature=f5dac311ffc9bfb563d925ea073fc1e1f43f794f4d48506a36356df4b66ea515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJSGMDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDgMTzyEx8MssPhsCmJI8tUkHPgqPWsHxitsGzl0vSiggIhALIYBX%2BOXu6T3ZIzy9eriKfzUmALJkqk2WFHwGWditrAKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrmS5p66lYVBFWQ6Uq3AOCOhdfUFqv0Ja9g372M%2FaRyDz3wKrl%2Fz%2FnMhHrnmVuYh4jmDRKyNzpqsP2FctsNlqz16cJ2cMhJ4B%2BMVFuZhm9MyvoYQImN8R6k6q1WkArsNl3sCk%2BPJCTxppflFhFwXry4yRLplbpOAJEYOtRlOrwGKmHuZpo8Pr8xVa7I%2BPw1QqRx7GE4O9gbG9BFqR5NZCrZqbWPz%2FeLWH5KTzXkQtQy%2BVzpEB%2F6Y0lXbt6ANKqBPIayLCCKr0CLzZ0ODlltt%2Fn%2BMRYZ6V2jRmoSH5yrTlrgdZXNPRpmIIc7wZCUNzLuCF%2FMNR3rg4ht8eTlAfzbccb2nnsaWV2tEt4AdlNpWn3SNhyH080Stfj%2FJJa5SYhIPgBDU8dONCR5CvUPGxBj4dRJR78f5kqsFC%2BzTfmOG878qcZuJxkotkX0uGTrJgwz33SrWtOtLU9XW34Vs8yD0P%2FgUgxxOknGsZ5A54TksovSab9tG2F2B%2FbWJM7bQQUHagIjuTN%2BZB7NmfGRb5w96vhSCibDjAriHeef14hGyh%2FlS%2B4cMKL4kvgFsnEsVK0y9caVAwLgss06uYlUByEKb4cTzrSOOQjDSVn0OIPwBReqrG9tNSdC4Jmm%2BUNr%2BgIVf3LY6bo35HS2ZddCTCMo%2FrEBjqkAReF%2FCIOzgPb1U4JSfsKtdY2zLt7TdKegk6OlV1sN3wxTNtJV3YiUQmn5oShxz7RYLsp2eS4Q%2Fk4WL3FhDI%2BT1Eikefrt3lFpeAyO%2BymsqKKlOSKLGvJ%2FlP5%2FqjuIqD0zrQrgZW1LJByBA0lqC3hfbfZpjDhJr%2FQ4LPbGm2WvSBbab0BC9NYLAcnE97BvcBbGno5GP8FPmp9In8oLTUJIDUTEnia&X-Amz-Signature=0df666528fd3bb9bb13f1a37982cc2ab57cf9ee6b54302c4577c92278b47054e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJSGMDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDgMTzyEx8MssPhsCmJI8tUkHPgqPWsHxitsGzl0vSiggIhALIYBX%2BOXu6T3ZIzy9eriKfzUmALJkqk2WFHwGWditrAKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrmS5p66lYVBFWQ6Uq3AOCOhdfUFqv0Ja9g372M%2FaRyDz3wKrl%2Fz%2FnMhHrnmVuYh4jmDRKyNzpqsP2FctsNlqz16cJ2cMhJ4B%2BMVFuZhm9MyvoYQImN8R6k6q1WkArsNl3sCk%2BPJCTxppflFhFwXry4yRLplbpOAJEYOtRlOrwGKmHuZpo8Pr8xVa7I%2BPw1QqRx7GE4O9gbG9BFqR5NZCrZqbWPz%2FeLWH5KTzXkQtQy%2BVzpEB%2F6Y0lXbt6ANKqBPIayLCCKr0CLzZ0ODlltt%2Fn%2BMRYZ6V2jRmoSH5yrTlrgdZXNPRpmIIc7wZCUNzLuCF%2FMNR3rg4ht8eTlAfzbccb2nnsaWV2tEt4AdlNpWn3SNhyH080Stfj%2FJJa5SYhIPgBDU8dONCR5CvUPGxBj4dRJR78f5kqsFC%2BzTfmOG878qcZuJxkotkX0uGTrJgwz33SrWtOtLU9XW34Vs8yD0P%2FgUgxxOknGsZ5A54TksovSab9tG2F2B%2FbWJM7bQQUHagIjuTN%2BZB7NmfGRb5w96vhSCibDjAriHeef14hGyh%2FlS%2B4cMKL4kvgFsnEsVK0y9caVAwLgss06uYlUByEKb4cTzrSOOQjDSVn0OIPwBReqrG9tNSdC4Jmm%2BUNr%2BgIVf3LY6bo35HS2ZddCTCMo%2FrEBjqkAReF%2FCIOzgPb1U4JSfsKtdY2zLt7TdKegk6OlV1sN3wxTNtJV3YiUQmn5oShxz7RYLsp2eS4Q%2Fk4WL3FhDI%2BT1Eikefrt3lFpeAyO%2BymsqKKlOSKLGvJ%2FlP5%2FqjuIqD0zrQrgZW1LJByBA0lqC3hfbfZpjDhJr%2FQ4LPbGm2WvSBbab0BC9NYLAcnE97BvcBbGno5GP8FPmp9In8oLTUJIDUTEnia&X-Amz-Signature=eae3c10a3512d7dbe6443fd38304fbcdb210c33beb6d24e9ef4f87eb565d3eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJSGMDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDgMTzyEx8MssPhsCmJI8tUkHPgqPWsHxitsGzl0vSiggIhALIYBX%2BOXu6T3ZIzy9eriKfzUmALJkqk2WFHwGWditrAKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrmS5p66lYVBFWQ6Uq3AOCOhdfUFqv0Ja9g372M%2FaRyDz3wKrl%2Fz%2FnMhHrnmVuYh4jmDRKyNzpqsP2FctsNlqz16cJ2cMhJ4B%2BMVFuZhm9MyvoYQImN8R6k6q1WkArsNl3sCk%2BPJCTxppflFhFwXry4yRLplbpOAJEYOtRlOrwGKmHuZpo8Pr8xVa7I%2BPw1QqRx7GE4O9gbG9BFqR5NZCrZqbWPz%2FeLWH5KTzXkQtQy%2BVzpEB%2F6Y0lXbt6ANKqBPIayLCCKr0CLzZ0ODlltt%2Fn%2BMRYZ6V2jRmoSH5yrTlrgdZXNPRpmIIc7wZCUNzLuCF%2FMNR3rg4ht8eTlAfzbccb2nnsaWV2tEt4AdlNpWn3SNhyH080Stfj%2FJJa5SYhIPgBDU8dONCR5CvUPGxBj4dRJR78f5kqsFC%2BzTfmOG878qcZuJxkotkX0uGTrJgwz33SrWtOtLU9XW34Vs8yD0P%2FgUgxxOknGsZ5A54TksovSab9tG2F2B%2FbWJM7bQQUHagIjuTN%2BZB7NmfGRb5w96vhSCibDjAriHeef14hGyh%2FlS%2B4cMKL4kvgFsnEsVK0y9caVAwLgss06uYlUByEKb4cTzrSOOQjDSVn0OIPwBReqrG9tNSdC4Jmm%2BUNr%2BgIVf3LY6bo35HS2ZddCTCMo%2FrEBjqkAReF%2FCIOzgPb1U4JSfsKtdY2zLt7TdKegk6OlV1sN3wxTNtJV3YiUQmn5oShxz7RYLsp2eS4Q%2Fk4WL3FhDI%2BT1Eikefrt3lFpeAyO%2BymsqKKlOSKLGvJ%2FlP5%2FqjuIqD0zrQrgZW1LJByBA0lqC3hfbfZpjDhJr%2FQ4LPbGm2WvSBbab0BC9NYLAcnE97BvcBbGno5GP8FPmp9In8oLTUJIDUTEnia&X-Amz-Signature=171a4878a3fd046ebcd53f8fe932cbaf421990d4ce761413d0779bdc62adb2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJSGMDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDgMTzyEx8MssPhsCmJI8tUkHPgqPWsHxitsGzl0vSiggIhALIYBX%2BOXu6T3ZIzy9eriKfzUmALJkqk2WFHwGWditrAKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrmS5p66lYVBFWQ6Uq3AOCOhdfUFqv0Ja9g372M%2FaRyDz3wKrl%2Fz%2FnMhHrnmVuYh4jmDRKyNzpqsP2FctsNlqz16cJ2cMhJ4B%2BMVFuZhm9MyvoYQImN8R6k6q1WkArsNl3sCk%2BPJCTxppflFhFwXry4yRLplbpOAJEYOtRlOrwGKmHuZpo8Pr8xVa7I%2BPw1QqRx7GE4O9gbG9BFqR5NZCrZqbWPz%2FeLWH5KTzXkQtQy%2BVzpEB%2F6Y0lXbt6ANKqBPIayLCCKr0CLzZ0ODlltt%2Fn%2BMRYZ6V2jRmoSH5yrTlrgdZXNPRpmIIc7wZCUNzLuCF%2FMNR3rg4ht8eTlAfzbccb2nnsaWV2tEt4AdlNpWn3SNhyH080Stfj%2FJJa5SYhIPgBDU8dONCR5CvUPGxBj4dRJR78f5kqsFC%2BzTfmOG878qcZuJxkotkX0uGTrJgwz33SrWtOtLU9XW34Vs8yD0P%2FgUgxxOknGsZ5A54TksovSab9tG2F2B%2FbWJM7bQQUHagIjuTN%2BZB7NmfGRb5w96vhSCibDjAriHeef14hGyh%2FlS%2B4cMKL4kvgFsnEsVK0y9caVAwLgss06uYlUByEKb4cTzrSOOQjDSVn0OIPwBReqrG9tNSdC4Jmm%2BUNr%2BgIVf3LY6bo35HS2ZddCTCMo%2FrEBjqkAReF%2FCIOzgPb1U4JSfsKtdY2zLt7TdKegk6OlV1sN3wxTNtJV3YiUQmn5oShxz7RYLsp2eS4Q%2Fk4WL3FhDI%2BT1Eikefrt3lFpeAyO%2BymsqKKlOSKLGvJ%2FlP5%2FqjuIqD0zrQrgZW1LJByBA0lqC3hfbfZpjDhJr%2FQ4LPbGm2WvSBbab0BC9NYLAcnE97BvcBbGno5GP8FPmp9In8oLTUJIDUTEnia&X-Amz-Signature=4d7042f1dc18b7e60c701ce4dc42ffa6d56fdb722fe0fb84a05ffa321fc7de56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGJSGMDJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDgMTzyEx8MssPhsCmJI8tUkHPgqPWsHxitsGzl0vSiggIhALIYBX%2BOXu6T3ZIzy9eriKfzUmALJkqk2WFHwGWditrAKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrmS5p66lYVBFWQ6Uq3AOCOhdfUFqv0Ja9g372M%2FaRyDz3wKrl%2Fz%2FnMhHrnmVuYh4jmDRKyNzpqsP2FctsNlqz16cJ2cMhJ4B%2BMVFuZhm9MyvoYQImN8R6k6q1WkArsNl3sCk%2BPJCTxppflFhFwXry4yRLplbpOAJEYOtRlOrwGKmHuZpo8Pr8xVa7I%2BPw1QqRx7GE4O9gbG9BFqR5NZCrZqbWPz%2FeLWH5KTzXkQtQy%2BVzpEB%2F6Y0lXbt6ANKqBPIayLCCKr0CLzZ0ODlltt%2Fn%2BMRYZ6V2jRmoSH5yrTlrgdZXNPRpmIIc7wZCUNzLuCF%2FMNR3rg4ht8eTlAfzbccb2nnsaWV2tEt4AdlNpWn3SNhyH080Stfj%2FJJa5SYhIPgBDU8dONCR5CvUPGxBj4dRJR78f5kqsFC%2BzTfmOG878qcZuJxkotkX0uGTrJgwz33SrWtOtLU9XW34Vs8yD0P%2FgUgxxOknGsZ5A54TksovSab9tG2F2B%2FbWJM7bQQUHagIjuTN%2BZB7NmfGRb5w96vhSCibDjAriHeef14hGyh%2FlS%2B4cMKL4kvgFsnEsVK0y9caVAwLgss06uYlUByEKb4cTzrSOOQjDSVn0OIPwBReqrG9tNSdC4Jmm%2BUNr%2BgIVf3LY6bo35HS2ZddCTCMo%2FrEBjqkAReF%2FCIOzgPb1U4JSfsKtdY2zLt7TdKegk6OlV1sN3wxTNtJV3YiUQmn5oShxz7RYLsp2eS4Q%2Fk4WL3FhDI%2BT1Eikefrt3lFpeAyO%2BymsqKKlOSKLGvJ%2FlP5%2FqjuIqD0zrQrgZW1LJByBA0lqC3hfbfZpjDhJr%2FQ4LPbGm2WvSBbab0BC9NYLAcnE97BvcBbGno5GP8FPmp9In8oLTUJIDUTEnia&X-Amz-Signature=df3062f696a513359215863e1846bb05901469e20f488032d0704281bfdf4fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPD4DTS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDf%2FuXr9tjftbb0RgPxEbVcs1KsFk%2F7hPf68vHws9RkEAIgOHSSFYEaoQcv%2Fkf5AMeAXSuZIz2G7IHQUegKBvahwi0q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDDNtC8R4Y4s%2BuXq%2BPCrcA5P%2BVH8LzdrDIAHJWUwBYaQOUHaa9F6ccs3rGgbFamGuR%2B6SXjDEDrCldbdXIVlRr25lV5Gwr63sKcuH6Si4Giv4ZXBxaivzcIQ1E2cs8x09EQyrU8SKWxWBdxBZu4aE5j7or9L%2FDT0tqaWX%2BYosUyvqAtE%2FubYT8gBQqaCYoB6ajogGjcCCOlUMOOgXv5nWdZyVvPKaxMS2bKVsP7Jvo%2Bt4PYY97wuxFrGLUUWRQrAObCKjkKdtHqLVr9m1SQtHNTc7R%2FMtGgXgxdKI9ksxUz29cnP4oH8G4huVaaMdJi4nVMw6bIhpzdhF1mAs7edQkpF2krvqGQDz2j58hILzVBz7Oj%2FskAHuqtSRV2iTd6tTy556WSfj3cxHk0l4qYprHQOtphBUp58gAv3P%2BXoJdmpJBInFIiNoBLModc0rX%2BN3FRYuPCUe%2FTCxtYe8c7b%2FW5GBLP5%2FcQiurLtME83tynZy3LZMgrTwvhZKRhYbf8Za0XNxOpCQgeAYm0%2FraDmS1Y4rZ%2BhoX25vjVGFRS0ELLDQqvyY7CV9EBtCwPifqmQDTqJaoHjbM8xUzAwR4%2BVdQdjgE9u5xip4BpjwsYqhK2RWNjo6oj1ImfbrwqVRHG7o1Qiw%2FKuqpTKmEPIuMPii%2BsQGOqUBw6fwjfd8mnMgYb5WxCGYos3oAWusIx2ZksDUGaqjwwXvyS%2F9Pzf3zwl2vCDGCSYRzso4XFnLMZO9Lmqjbhrs8mXGO%2B7XOY7Lhr7aXIrN%2B5gik0%2FGhgwdlyYgowtIRUDW%2BbpOZbUe%2FJVObk4gRkZesHC4ipEn10DFxMfBvn3zpCMN%2FuJv0tPiY%2BdrLw7vw8cYiKyI9KKaLQ42gHjFpI5U003CFBG9&X-Amz-Signature=dc49185319f4c3778e66dd2e84239de55ba8abea1df1c43d384919cb218235f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565VNSVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B38aB5OnyOaN%2FCxR8%2FNJ2zkFhKVqa4huRxI1oywA2cAIgY2KZqdNVApW5EXPeslNyt8pNRzHL7srkNdpcvVBSE20q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB%2BLooJmYlOH8%2F1KUyrcA3ic66teBAbF0QnsiTdC6MYMfTzgdw%2F6%2FAMPvgvq5y6ttAsdfHk4XDvFaZvFboJnnv7GVa3Yjouos5AuGtP%2FOg1JUtd%2FBLPCWQsSyX5FGAnIm9ws6c4l%2BhEv3%2BOPg%2Fl6yNNAROSAx6qMZia5HoIIiXzvZCHQYxi5vQT7tebNdZsvDhpjzBPyBdb1w1qZxl2fiPuORWUpdZ7x6vAdYs%2FJEJAKp1srtZtArMn%2FUP1iVBLQUgOQO%2FXeDVUjvRcoJAsafOUKFgQUgtygX1A6kJ53z3Yw0pYwneq2OXr2OxYoGcSOjDsVoCou01mC4Uq17KKfn4M17E14OgHvAFlyfXo71Zr5jG7oWTIetgxM7SS0pttwr5rBGB0xfidb%2FiU%2BGqrcasnymUniqwqguyIB2320ts4kgs7YoBJzSNPFsQXlPN1nDkVNhdZvAvp9Ts5%2FzGRP3CKNqMc%2BuUiBcN3p2550UpzJ4pg%2FIwqg3MeKYXtJ8aTlswuy%2BR4HG2PICPxefeWiCZXF1WqTFCXtJpjrn%2F4hE4mD6LiiFpfDh9w%2BB0zUtqWOmVrvPhyJZfs3FqgVo3xOcI%2Ff6YRZepqYK7Z0T3J9d7z6Dfps71xMF1Uk4Q1coCGkPaduXh4qgM315S9DMO2i%2BsQGOqUBWmJfQWlzThlc6oOAGPcgjafnDYq3SGEmyY1TTG%2B5KBpQ1Bihz1P92%2FfalpzWSoRAyYtUwrWj3OY%2BhLG%2Bo%2FwoVjGTWrSskRrj2K1cux3mF3IY6tdsAqjL0JwjoyqZy7uMI5LV3ounJ9IrsU2TiXXdI%2FTSfEcPU9YAMh9pDDt6UqgvIALSABVvxpxuLnVKqoiBEKq73Z3rPwVhoHwiGZXQHYDc2Ug3&X-Amz-Signature=4ca2932b61d0642a552c6c160ef756f734963906ed5256a7ebf183f2f216244e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565VNSVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B38aB5OnyOaN%2FCxR8%2FNJ2zkFhKVqa4huRxI1oywA2cAIgY2KZqdNVApW5EXPeslNyt8pNRzHL7srkNdpcvVBSE20q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB%2BLooJmYlOH8%2F1KUyrcA3ic66teBAbF0QnsiTdC6MYMfTzgdw%2F6%2FAMPvgvq5y6ttAsdfHk4XDvFaZvFboJnnv7GVa3Yjouos5AuGtP%2FOg1JUtd%2FBLPCWQsSyX5FGAnIm9ws6c4l%2BhEv3%2BOPg%2Fl6yNNAROSAx6qMZia5HoIIiXzvZCHQYxi5vQT7tebNdZsvDhpjzBPyBdb1w1qZxl2fiPuORWUpdZ7x6vAdYs%2FJEJAKp1srtZtArMn%2FUP1iVBLQUgOQO%2FXeDVUjvRcoJAsafOUKFgQUgtygX1A6kJ53z3Yw0pYwneq2OXr2OxYoGcSOjDsVoCou01mC4Uq17KKfn4M17E14OgHvAFlyfXo71Zr5jG7oWTIetgxM7SS0pttwr5rBGB0xfidb%2FiU%2BGqrcasnymUniqwqguyIB2320ts4kgs7YoBJzSNPFsQXlPN1nDkVNhdZvAvp9Ts5%2FzGRP3CKNqMc%2BuUiBcN3p2550UpzJ4pg%2FIwqg3MeKYXtJ8aTlswuy%2BR4HG2PICPxefeWiCZXF1WqTFCXtJpjrn%2F4hE4mD6LiiFpfDh9w%2BB0zUtqWOmVrvPhyJZfs3FqgVo3xOcI%2Ff6YRZepqYK7Z0T3J9d7z6Dfps71xMF1Uk4Q1coCGkPaduXh4qgM315S9DMO2i%2BsQGOqUBWmJfQWlzThlc6oOAGPcgjafnDYq3SGEmyY1TTG%2B5KBpQ1Bihz1P92%2FfalpzWSoRAyYtUwrWj3OY%2BhLG%2Bo%2FwoVjGTWrSskRrj2K1cux3mF3IY6tdsAqjL0JwjoyqZy7uMI5LV3ounJ9IrsU2TiXXdI%2FTSfEcPU9YAMh9pDDt6UqgvIALSABVvxpxuLnVKqoiBEKq73Z3rPwVhoHwiGZXQHYDc2Ug3&X-Amz-Signature=d7925da4718c5914293897b0e28685d2f94fac3d5b42b582956bde948595fb73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565VNSVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B38aB5OnyOaN%2FCxR8%2FNJ2zkFhKVqa4huRxI1oywA2cAIgY2KZqdNVApW5EXPeslNyt8pNRzHL7srkNdpcvVBSE20q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB%2BLooJmYlOH8%2F1KUyrcA3ic66teBAbF0QnsiTdC6MYMfTzgdw%2F6%2FAMPvgvq5y6ttAsdfHk4XDvFaZvFboJnnv7GVa3Yjouos5AuGtP%2FOg1JUtd%2FBLPCWQsSyX5FGAnIm9ws6c4l%2BhEv3%2BOPg%2Fl6yNNAROSAx6qMZia5HoIIiXzvZCHQYxi5vQT7tebNdZsvDhpjzBPyBdb1w1qZxl2fiPuORWUpdZ7x6vAdYs%2FJEJAKp1srtZtArMn%2FUP1iVBLQUgOQO%2FXeDVUjvRcoJAsafOUKFgQUgtygX1A6kJ53z3Yw0pYwneq2OXr2OxYoGcSOjDsVoCou01mC4Uq17KKfn4M17E14OgHvAFlyfXo71Zr5jG7oWTIetgxM7SS0pttwr5rBGB0xfidb%2FiU%2BGqrcasnymUniqwqguyIB2320ts4kgs7YoBJzSNPFsQXlPN1nDkVNhdZvAvp9Ts5%2FzGRP3CKNqMc%2BuUiBcN3p2550UpzJ4pg%2FIwqg3MeKYXtJ8aTlswuy%2BR4HG2PICPxefeWiCZXF1WqTFCXtJpjrn%2F4hE4mD6LiiFpfDh9w%2BB0zUtqWOmVrvPhyJZfs3FqgVo3xOcI%2Ff6YRZepqYK7Z0T3J9d7z6Dfps71xMF1Uk4Q1coCGkPaduXh4qgM315S9DMO2i%2BsQGOqUBWmJfQWlzThlc6oOAGPcgjafnDYq3SGEmyY1TTG%2B5KBpQ1Bihz1P92%2FfalpzWSoRAyYtUwrWj3OY%2BhLG%2Bo%2FwoVjGTWrSskRrj2K1cux3mF3IY6tdsAqjL0JwjoyqZy7uMI5LV3ounJ9IrsU2TiXXdI%2FTSfEcPU9YAMh9pDDt6UqgvIALSABVvxpxuLnVKqoiBEKq73Z3rPwVhoHwiGZXQHYDc2Ug3&X-Amz-Signature=4d180db50ddea520c180b9135ce7b90474f23ddb021433206b836e82ef2a9890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565VNSVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B38aB5OnyOaN%2FCxR8%2FNJ2zkFhKVqa4huRxI1oywA2cAIgY2KZqdNVApW5EXPeslNyt8pNRzHL7srkNdpcvVBSE20q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB%2BLooJmYlOH8%2F1KUyrcA3ic66teBAbF0QnsiTdC6MYMfTzgdw%2F6%2FAMPvgvq5y6ttAsdfHk4XDvFaZvFboJnnv7GVa3Yjouos5AuGtP%2FOg1JUtd%2FBLPCWQsSyX5FGAnIm9ws6c4l%2BhEv3%2BOPg%2Fl6yNNAROSAx6qMZia5HoIIiXzvZCHQYxi5vQT7tebNdZsvDhpjzBPyBdb1w1qZxl2fiPuORWUpdZ7x6vAdYs%2FJEJAKp1srtZtArMn%2FUP1iVBLQUgOQO%2FXeDVUjvRcoJAsafOUKFgQUgtygX1A6kJ53z3Yw0pYwneq2OXr2OxYoGcSOjDsVoCou01mC4Uq17KKfn4M17E14OgHvAFlyfXo71Zr5jG7oWTIetgxM7SS0pttwr5rBGB0xfidb%2FiU%2BGqrcasnymUniqwqguyIB2320ts4kgs7YoBJzSNPFsQXlPN1nDkVNhdZvAvp9Ts5%2FzGRP3CKNqMc%2BuUiBcN3p2550UpzJ4pg%2FIwqg3MeKYXtJ8aTlswuy%2BR4HG2PICPxefeWiCZXF1WqTFCXtJpjrn%2F4hE4mD6LiiFpfDh9w%2BB0zUtqWOmVrvPhyJZfs3FqgVo3xOcI%2Ff6YRZepqYK7Z0T3J9d7z6Dfps71xMF1Uk4Q1coCGkPaduXh4qgM315S9DMO2i%2BsQGOqUBWmJfQWlzThlc6oOAGPcgjafnDYq3SGEmyY1TTG%2B5KBpQ1Bihz1P92%2FfalpzWSoRAyYtUwrWj3OY%2BhLG%2Bo%2FwoVjGTWrSskRrj2K1cux3mF3IY6tdsAqjL0JwjoyqZy7uMI5LV3ounJ9IrsU2TiXXdI%2FTSfEcPU9YAMh9pDDt6UqgvIALSABVvxpxuLnVKqoiBEKq73Z3rPwVhoHwiGZXQHYDc2Ug3&X-Amz-Signature=4ba5800060ed15830570b9ffa186c443ad61d97a14950dc4079d1f2d38a71828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565VNSVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B38aB5OnyOaN%2FCxR8%2FNJ2zkFhKVqa4huRxI1oywA2cAIgY2KZqdNVApW5EXPeslNyt8pNRzHL7srkNdpcvVBSE20q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB%2BLooJmYlOH8%2F1KUyrcA3ic66teBAbF0QnsiTdC6MYMfTzgdw%2F6%2FAMPvgvq5y6ttAsdfHk4XDvFaZvFboJnnv7GVa3Yjouos5AuGtP%2FOg1JUtd%2FBLPCWQsSyX5FGAnIm9ws6c4l%2BhEv3%2BOPg%2Fl6yNNAROSAx6qMZia5HoIIiXzvZCHQYxi5vQT7tebNdZsvDhpjzBPyBdb1w1qZxl2fiPuORWUpdZ7x6vAdYs%2FJEJAKp1srtZtArMn%2FUP1iVBLQUgOQO%2FXeDVUjvRcoJAsafOUKFgQUgtygX1A6kJ53z3Yw0pYwneq2OXr2OxYoGcSOjDsVoCou01mC4Uq17KKfn4M17E14OgHvAFlyfXo71Zr5jG7oWTIetgxM7SS0pttwr5rBGB0xfidb%2FiU%2BGqrcasnymUniqwqguyIB2320ts4kgs7YoBJzSNPFsQXlPN1nDkVNhdZvAvp9Ts5%2FzGRP3CKNqMc%2BuUiBcN3p2550UpzJ4pg%2FIwqg3MeKYXtJ8aTlswuy%2BR4HG2PICPxefeWiCZXF1WqTFCXtJpjrn%2F4hE4mD6LiiFpfDh9w%2BB0zUtqWOmVrvPhyJZfs3FqgVo3xOcI%2Ff6YRZepqYK7Z0T3J9d7z6Dfps71xMF1Uk4Q1coCGkPaduXh4qgM315S9DMO2i%2BsQGOqUBWmJfQWlzThlc6oOAGPcgjafnDYq3SGEmyY1TTG%2B5KBpQ1Bihz1P92%2FfalpzWSoRAyYtUwrWj3OY%2BhLG%2Bo%2FwoVjGTWrSskRrj2K1cux3mF3IY6tdsAqjL0JwjoyqZy7uMI5LV3ounJ9IrsU2TiXXdI%2FTSfEcPU9YAMh9pDDt6UqgvIALSABVvxpxuLnVKqoiBEKq73Z3rPwVhoHwiGZXQHYDc2Ug3&X-Amz-Signature=f6ffebb2521bc293acf19f6314e663ada0f21db1b959b9373efb7c5b168460d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565VNSVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B38aB5OnyOaN%2FCxR8%2FNJ2zkFhKVqa4huRxI1oywA2cAIgY2KZqdNVApW5EXPeslNyt8pNRzHL7srkNdpcvVBSE20q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB%2BLooJmYlOH8%2F1KUyrcA3ic66teBAbF0QnsiTdC6MYMfTzgdw%2F6%2FAMPvgvq5y6ttAsdfHk4XDvFaZvFboJnnv7GVa3Yjouos5AuGtP%2FOg1JUtd%2FBLPCWQsSyX5FGAnIm9ws6c4l%2BhEv3%2BOPg%2Fl6yNNAROSAx6qMZia5HoIIiXzvZCHQYxi5vQT7tebNdZsvDhpjzBPyBdb1w1qZxl2fiPuORWUpdZ7x6vAdYs%2FJEJAKp1srtZtArMn%2FUP1iVBLQUgOQO%2FXeDVUjvRcoJAsafOUKFgQUgtygX1A6kJ53z3Yw0pYwneq2OXr2OxYoGcSOjDsVoCou01mC4Uq17KKfn4M17E14OgHvAFlyfXo71Zr5jG7oWTIetgxM7SS0pttwr5rBGB0xfidb%2FiU%2BGqrcasnymUniqwqguyIB2320ts4kgs7YoBJzSNPFsQXlPN1nDkVNhdZvAvp9Ts5%2FzGRP3CKNqMc%2BuUiBcN3p2550UpzJ4pg%2FIwqg3MeKYXtJ8aTlswuy%2BR4HG2PICPxefeWiCZXF1WqTFCXtJpjrn%2F4hE4mD6LiiFpfDh9w%2BB0zUtqWOmVrvPhyJZfs3FqgVo3xOcI%2Ff6YRZepqYK7Z0T3J9d7z6Dfps71xMF1Uk4Q1coCGkPaduXh4qgM315S9DMO2i%2BsQGOqUBWmJfQWlzThlc6oOAGPcgjafnDYq3SGEmyY1TTG%2B5KBpQ1Bihz1P92%2FfalpzWSoRAyYtUwrWj3OY%2BhLG%2Bo%2FwoVjGTWrSskRrj2K1cux3mF3IY6tdsAqjL0JwjoyqZy7uMI5LV3ounJ9IrsU2TiXXdI%2FTSfEcPU9YAMh9pDDt6UqgvIALSABVvxpxuLnVKqoiBEKq73Z3rPwVhoHwiGZXQHYDc2Ug3&X-Amz-Signature=4408c8b41eb61ab172fdbbc4985b6699e152a25966bdf44980b273b6a6700bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565VNSVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B38aB5OnyOaN%2FCxR8%2FNJ2zkFhKVqa4huRxI1oywA2cAIgY2KZqdNVApW5EXPeslNyt8pNRzHL7srkNdpcvVBSE20q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB%2BLooJmYlOH8%2F1KUyrcA3ic66teBAbF0QnsiTdC6MYMfTzgdw%2F6%2FAMPvgvq5y6ttAsdfHk4XDvFaZvFboJnnv7GVa3Yjouos5AuGtP%2FOg1JUtd%2FBLPCWQsSyX5FGAnIm9ws6c4l%2BhEv3%2BOPg%2Fl6yNNAROSAx6qMZia5HoIIiXzvZCHQYxi5vQT7tebNdZsvDhpjzBPyBdb1w1qZxl2fiPuORWUpdZ7x6vAdYs%2FJEJAKp1srtZtArMn%2FUP1iVBLQUgOQO%2FXeDVUjvRcoJAsafOUKFgQUgtygX1A6kJ53z3Yw0pYwneq2OXr2OxYoGcSOjDsVoCou01mC4Uq17KKfn4M17E14OgHvAFlyfXo71Zr5jG7oWTIetgxM7SS0pttwr5rBGB0xfidb%2FiU%2BGqrcasnymUniqwqguyIB2320ts4kgs7YoBJzSNPFsQXlPN1nDkVNhdZvAvp9Ts5%2FzGRP3CKNqMc%2BuUiBcN3p2550UpzJ4pg%2FIwqg3MeKYXtJ8aTlswuy%2BR4HG2PICPxefeWiCZXF1WqTFCXtJpjrn%2F4hE4mD6LiiFpfDh9w%2BB0zUtqWOmVrvPhyJZfs3FqgVo3xOcI%2Ff6YRZepqYK7Z0T3J9d7z6Dfps71xMF1Uk4Q1coCGkPaduXh4qgM315S9DMO2i%2BsQGOqUBWmJfQWlzThlc6oOAGPcgjafnDYq3SGEmyY1TTG%2B5KBpQ1Bihz1P92%2FfalpzWSoRAyYtUwrWj3OY%2BhLG%2Bo%2FwoVjGTWrSskRrj2K1cux3mF3IY6tdsAqjL0JwjoyqZy7uMI5LV3ounJ9IrsU2TiXXdI%2FTSfEcPU9YAMh9pDDt6UqgvIALSABVvxpxuLnVKqoiBEKq73Z3rPwVhoHwiGZXQHYDc2Ug3&X-Amz-Signature=09f5773a7cfd085ae6d474bdd9a8c835133f591a8b8e32a38d3e779f883fee14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565VNSVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B38aB5OnyOaN%2FCxR8%2FNJ2zkFhKVqa4huRxI1oywA2cAIgY2KZqdNVApW5EXPeslNyt8pNRzHL7srkNdpcvVBSE20q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB%2BLooJmYlOH8%2F1KUyrcA3ic66teBAbF0QnsiTdC6MYMfTzgdw%2F6%2FAMPvgvq5y6ttAsdfHk4XDvFaZvFboJnnv7GVa3Yjouos5AuGtP%2FOg1JUtd%2FBLPCWQsSyX5FGAnIm9ws6c4l%2BhEv3%2BOPg%2Fl6yNNAROSAx6qMZia5HoIIiXzvZCHQYxi5vQT7tebNdZsvDhpjzBPyBdb1w1qZxl2fiPuORWUpdZ7x6vAdYs%2FJEJAKp1srtZtArMn%2FUP1iVBLQUgOQO%2FXeDVUjvRcoJAsafOUKFgQUgtygX1A6kJ53z3Yw0pYwneq2OXr2OxYoGcSOjDsVoCou01mC4Uq17KKfn4M17E14OgHvAFlyfXo71Zr5jG7oWTIetgxM7SS0pttwr5rBGB0xfidb%2FiU%2BGqrcasnymUniqwqguyIB2320ts4kgs7YoBJzSNPFsQXlPN1nDkVNhdZvAvp9Ts5%2FzGRP3CKNqMc%2BuUiBcN3p2550UpzJ4pg%2FIwqg3MeKYXtJ8aTlswuy%2BR4HG2PICPxefeWiCZXF1WqTFCXtJpjrn%2F4hE4mD6LiiFpfDh9w%2BB0zUtqWOmVrvPhyJZfs3FqgVo3xOcI%2Ff6YRZepqYK7Z0T3J9d7z6Dfps71xMF1Uk4Q1coCGkPaduXh4qgM315S9DMO2i%2BsQGOqUBWmJfQWlzThlc6oOAGPcgjafnDYq3SGEmyY1TTG%2B5KBpQ1Bihz1P92%2FfalpzWSoRAyYtUwrWj3OY%2BhLG%2Bo%2FwoVjGTWrSskRrj2K1cux3mF3IY6tdsAqjL0JwjoyqZy7uMI5LV3ounJ9IrsU2TiXXdI%2FTSfEcPU9YAMh9pDDt6UqgvIALSABVvxpxuLnVKqoiBEKq73Z3rPwVhoHwiGZXQHYDc2Ug3&X-Amz-Signature=021791ddafb30bd4a66b20c89ff92a1080863e5a93a73d4e27af8cc8e104cc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466565VNSVJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD%2B38aB5OnyOaN%2FCxR8%2FNJ2zkFhKVqa4huRxI1oywA2cAIgY2KZqdNVApW5EXPeslNyt8pNRzHL7srkNdpcvVBSE20q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB%2BLooJmYlOH8%2F1KUyrcA3ic66teBAbF0QnsiTdC6MYMfTzgdw%2F6%2FAMPvgvq5y6ttAsdfHk4XDvFaZvFboJnnv7GVa3Yjouos5AuGtP%2FOg1JUtd%2FBLPCWQsSyX5FGAnIm9ws6c4l%2BhEv3%2BOPg%2Fl6yNNAROSAx6qMZia5HoIIiXzvZCHQYxi5vQT7tebNdZsvDhpjzBPyBdb1w1qZxl2fiPuORWUpdZ7x6vAdYs%2FJEJAKp1srtZtArMn%2FUP1iVBLQUgOQO%2FXeDVUjvRcoJAsafOUKFgQUgtygX1A6kJ53z3Yw0pYwneq2OXr2OxYoGcSOjDsVoCou01mC4Uq17KKfn4M17E14OgHvAFlyfXo71Zr5jG7oWTIetgxM7SS0pttwr5rBGB0xfidb%2FiU%2BGqrcasnymUniqwqguyIB2320ts4kgs7YoBJzSNPFsQXlPN1nDkVNhdZvAvp9Ts5%2FzGRP3CKNqMc%2BuUiBcN3p2550UpzJ4pg%2FIwqg3MeKYXtJ8aTlswuy%2BR4HG2PICPxefeWiCZXF1WqTFCXtJpjrn%2F4hE4mD6LiiFpfDh9w%2BB0zUtqWOmVrvPhyJZfs3FqgVo3xOcI%2Ff6YRZepqYK7Z0T3J9d7z6Dfps71xMF1Uk4Q1coCGkPaduXh4qgM315S9DMO2i%2BsQGOqUBWmJfQWlzThlc6oOAGPcgjafnDYq3SGEmyY1TTG%2B5KBpQ1Bihz1P92%2FfalpzWSoRAyYtUwrWj3OY%2BhLG%2Bo%2FwoVjGTWrSskRrj2K1cux3mF3IY6tdsAqjL0JwjoyqZy7uMI5LV3ounJ9IrsU2TiXXdI%2FTSfEcPU9YAMh9pDDt6UqgvIALSABVvxpxuLnVKqoiBEKq73Z3rPwVhoHwiGZXQHYDc2Ug3&X-Amz-Signature=eaebdcfa1b5751303d0bb3e5bdbd4efcafad44153c2c0967fa24dbeae81a5733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
