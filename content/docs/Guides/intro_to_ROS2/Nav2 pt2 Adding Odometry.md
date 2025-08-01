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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASJNC5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRHo0pNGLyh9uTrVub1kk5fKZo1Riz3k77QGrZgWjmAiEA3T0IdZqKQf%2Fc0DyCk%2Fa8EXx4q7GOjmDLc5BKZOpMYPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnX4BT1oFVO3fvEFSrcA2JCR31PPuRof5%2BDkwD%2BYuoiord09Z9oHciissVFMFPV2yPTCnY070iyEWiFAbqGvM2L0O%2FfAPaOP46YMhq9aFR50J2okRmmJL9pBf2YC2Jz8dulkDwmbKZNkvfTt1V022e%2Bm%2F%2B8LJD97dak6PCGLeqKbTRtOpvXWSxxyzUSsYyn%2B02JgGPhJ89jJUfehWac8NoEJrY29KBxA0Ttacx0zUkU7XmudWUOxFD7eedqh44srj4y9M6qdIYc3EjCQzksaQFKpXUSjamUPIJFwVihlJialY7qkbWgKZfmFyuFQ9dEyifCEpTDzS%2FERsElwi5icR8l6ut5SjKxtlAffDMoMYHBKdnCTIHprG1qGRoByBrUfM%2FJt5%2Bc%2Bq2sCJq%2BcEePX4pHrD0m9HBjZS%2FD95C35vDPRNcjWKkIz%2FyAz0YlgL5TrJzw7mOLA022h5VM7waBR5obdXIOVYYKZb%2FIHu%2BH%2BT7zUG6wTP%2FoArLcMKorQvuvJpZ%2FVxybD%2BymtjIwzXw424hJp5nwh9%2BclZYxoTsZkZx%2B9zh6lNwEaszfXUkyBAEUrkz1dxItIOi2jpGvUViCw%2BJ2OP42eu9OpnVATR0yCfPdLL3dslPJRjrrE1V6YhKfaEGTjzzVNmU1VW0yMPybscQGOqUBPceNsvw4bmo0YeGuVyDfLdMfXJTGg9eYIFsaYig1GJL6wL%2Bt2bmF%2BUj8qU3TcP99884DHh6NSIW%2BI1e74z58HaexabkTijgWS5Q907L%2FsRfhOMkhIOikT0r7SPWJSQbzF9OYqUZ1QmjqT73Q%2BPySPQTr1jQsMP1JLljsLimszT5QFhStW9sMb2MYeVgr1mN%2F3DlkKKoxRU%2FF%2FstWEhZdOrEraMez&X-Amz-Signature=a2cc99f788371decc4c42d2a4ac594dad78682afb3d6f7ceda95fbb0774b8444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASJNC5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRHo0pNGLyh9uTrVub1kk5fKZo1Riz3k77QGrZgWjmAiEA3T0IdZqKQf%2Fc0DyCk%2Fa8EXx4q7GOjmDLc5BKZOpMYPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnX4BT1oFVO3fvEFSrcA2JCR31PPuRof5%2BDkwD%2BYuoiord09Z9oHciissVFMFPV2yPTCnY070iyEWiFAbqGvM2L0O%2FfAPaOP46YMhq9aFR50J2okRmmJL9pBf2YC2Jz8dulkDwmbKZNkvfTt1V022e%2Bm%2F%2B8LJD97dak6PCGLeqKbTRtOpvXWSxxyzUSsYyn%2B02JgGPhJ89jJUfehWac8NoEJrY29KBxA0Ttacx0zUkU7XmudWUOxFD7eedqh44srj4y9M6qdIYc3EjCQzksaQFKpXUSjamUPIJFwVihlJialY7qkbWgKZfmFyuFQ9dEyifCEpTDzS%2FERsElwi5icR8l6ut5SjKxtlAffDMoMYHBKdnCTIHprG1qGRoByBrUfM%2FJt5%2Bc%2Bq2sCJq%2BcEePX4pHrD0m9HBjZS%2FD95C35vDPRNcjWKkIz%2FyAz0YlgL5TrJzw7mOLA022h5VM7waBR5obdXIOVYYKZb%2FIHu%2BH%2BT7zUG6wTP%2FoArLcMKorQvuvJpZ%2FVxybD%2BymtjIwzXw424hJp5nwh9%2BclZYxoTsZkZx%2B9zh6lNwEaszfXUkyBAEUrkz1dxItIOi2jpGvUViCw%2BJ2OP42eu9OpnVATR0yCfPdLL3dslPJRjrrE1V6YhKfaEGTjzzVNmU1VW0yMPybscQGOqUBPceNsvw4bmo0YeGuVyDfLdMfXJTGg9eYIFsaYig1GJL6wL%2Bt2bmF%2BUj8qU3TcP99884DHh6NSIW%2BI1e74z58HaexabkTijgWS5Q907L%2FsRfhOMkhIOikT0r7SPWJSQbzF9OYqUZ1QmjqT73Q%2BPySPQTr1jQsMP1JLljsLimszT5QFhStW9sMb2MYeVgr1mN%2F3DlkKKoxRU%2FF%2FstWEhZdOrEraMez&X-Amz-Signature=65ef9088ebc54e10ae3eb948499b1388d5eef9cfa807d8990e59b1fcecf9dca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASJNC5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRHo0pNGLyh9uTrVub1kk5fKZo1Riz3k77QGrZgWjmAiEA3T0IdZqKQf%2Fc0DyCk%2Fa8EXx4q7GOjmDLc5BKZOpMYPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnX4BT1oFVO3fvEFSrcA2JCR31PPuRof5%2BDkwD%2BYuoiord09Z9oHciissVFMFPV2yPTCnY070iyEWiFAbqGvM2L0O%2FfAPaOP46YMhq9aFR50J2okRmmJL9pBf2YC2Jz8dulkDwmbKZNkvfTt1V022e%2Bm%2F%2B8LJD97dak6PCGLeqKbTRtOpvXWSxxyzUSsYyn%2B02JgGPhJ89jJUfehWac8NoEJrY29KBxA0Ttacx0zUkU7XmudWUOxFD7eedqh44srj4y9M6qdIYc3EjCQzksaQFKpXUSjamUPIJFwVihlJialY7qkbWgKZfmFyuFQ9dEyifCEpTDzS%2FERsElwi5icR8l6ut5SjKxtlAffDMoMYHBKdnCTIHprG1qGRoByBrUfM%2FJt5%2Bc%2Bq2sCJq%2BcEePX4pHrD0m9HBjZS%2FD95C35vDPRNcjWKkIz%2FyAz0YlgL5TrJzw7mOLA022h5VM7waBR5obdXIOVYYKZb%2FIHu%2BH%2BT7zUG6wTP%2FoArLcMKorQvuvJpZ%2FVxybD%2BymtjIwzXw424hJp5nwh9%2BclZYxoTsZkZx%2B9zh6lNwEaszfXUkyBAEUrkz1dxItIOi2jpGvUViCw%2BJ2OP42eu9OpnVATR0yCfPdLL3dslPJRjrrE1V6YhKfaEGTjzzVNmU1VW0yMPybscQGOqUBPceNsvw4bmo0YeGuVyDfLdMfXJTGg9eYIFsaYig1GJL6wL%2Bt2bmF%2BUj8qU3TcP99884DHh6NSIW%2BI1e74z58HaexabkTijgWS5Q907L%2FsRfhOMkhIOikT0r7SPWJSQbzF9OYqUZ1QmjqT73Q%2BPySPQTr1jQsMP1JLljsLimszT5QFhStW9sMb2MYeVgr1mN%2F3DlkKKoxRU%2FF%2FstWEhZdOrEraMez&X-Amz-Signature=83b5150f69f8ebfd519f696fdff7c2403bfda5eff2470bbff84da011c943fc4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASJNC5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRHo0pNGLyh9uTrVub1kk5fKZo1Riz3k77QGrZgWjmAiEA3T0IdZqKQf%2Fc0DyCk%2Fa8EXx4q7GOjmDLc5BKZOpMYPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnX4BT1oFVO3fvEFSrcA2JCR31PPuRof5%2BDkwD%2BYuoiord09Z9oHciissVFMFPV2yPTCnY070iyEWiFAbqGvM2L0O%2FfAPaOP46YMhq9aFR50J2okRmmJL9pBf2YC2Jz8dulkDwmbKZNkvfTt1V022e%2Bm%2F%2B8LJD97dak6PCGLeqKbTRtOpvXWSxxyzUSsYyn%2B02JgGPhJ89jJUfehWac8NoEJrY29KBxA0Ttacx0zUkU7XmudWUOxFD7eedqh44srj4y9M6qdIYc3EjCQzksaQFKpXUSjamUPIJFwVihlJialY7qkbWgKZfmFyuFQ9dEyifCEpTDzS%2FERsElwi5icR8l6ut5SjKxtlAffDMoMYHBKdnCTIHprG1qGRoByBrUfM%2FJt5%2Bc%2Bq2sCJq%2BcEePX4pHrD0m9HBjZS%2FD95C35vDPRNcjWKkIz%2FyAz0YlgL5TrJzw7mOLA022h5VM7waBR5obdXIOVYYKZb%2FIHu%2BH%2BT7zUG6wTP%2FoArLcMKorQvuvJpZ%2FVxybD%2BymtjIwzXw424hJp5nwh9%2BclZYxoTsZkZx%2B9zh6lNwEaszfXUkyBAEUrkz1dxItIOi2jpGvUViCw%2BJ2OP42eu9OpnVATR0yCfPdLL3dslPJRjrrE1V6YhKfaEGTjzzVNmU1VW0yMPybscQGOqUBPceNsvw4bmo0YeGuVyDfLdMfXJTGg9eYIFsaYig1GJL6wL%2Bt2bmF%2BUj8qU3TcP99884DHh6NSIW%2BI1e74z58HaexabkTijgWS5Q907L%2FsRfhOMkhIOikT0r7SPWJSQbzF9OYqUZ1QmjqT73Q%2BPySPQTr1jQsMP1JLljsLimszT5QFhStW9sMb2MYeVgr1mN%2F3DlkKKoxRU%2FF%2FstWEhZdOrEraMez&X-Amz-Signature=363d96c1045b41163044fbe375431debcb5a845d94b859a7774bc11226fc252c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASJNC5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRHo0pNGLyh9uTrVub1kk5fKZo1Riz3k77QGrZgWjmAiEA3T0IdZqKQf%2Fc0DyCk%2Fa8EXx4q7GOjmDLc5BKZOpMYPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnX4BT1oFVO3fvEFSrcA2JCR31PPuRof5%2BDkwD%2BYuoiord09Z9oHciissVFMFPV2yPTCnY070iyEWiFAbqGvM2L0O%2FfAPaOP46YMhq9aFR50J2okRmmJL9pBf2YC2Jz8dulkDwmbKZNkvfTt1V022e%2Bm%2F%2B8LJD97dak6PCGLeqKbTRtOpvXWSxxyzUSsYyn%2B02JgGPhJ89jJUfehWac8NoEJrY29KBxA0Ttacx0zUkU7XmudWUOxFD7eedqh44srj4y9M6qdIYc3EjCQzksaQFKpXUSjamUPIJFwVihlJialY7qkbWgKZfmFyuFQ9dEyifCEpTDzS%2FERsElwi5icR8l6ut5SjKxtlAffDMoMYHBKdnCTIHprG1qGRoByBrUfM%2FJt5%2Bc%2Bq2sCJq%2BcEePX4pHrD0m9HBjZS%2FD95C35vDPRNcjWKkIz%2FyAz0YlgL5TrJzw7mOLA022h5VM7waBR5obdXIOVYYKZb%2FIHu%2BH%2BT7zUG6wTP%2FoArLcMKorQvuvJpZ%2FVxybD%2BymtjIwzXw424hJp5nwh9%2BclZYxoTsZkZx%2B9zh6lNwEaszfXUkyBAEUrkz1dxItIOi2jpGvUViCw%2BJ2OP42eu9OpnVATR0yCfPdLL3dslPJRjrrE1V6YhKfaEGTjzzVNmU1VW0yMPybscQGOqUBPceNsvw4bmo0YeGuVyDfLdMfXJTGg9eYIFsaYig1GJL6wL%2Bt2bmF%2BUj8qU3TcP99884DHh6NSIW%2BI1e74z58HaexabkTijgWS5Q907L%2FsRfhOMkhIOikT0r7SPWJSQbzF9OYqUZ1QmjqT73Q%2BPySPQTr1jQsMP1JLljsLimszT5QFhStW9sMb2MYeVgr1mN%2F3DlkKKoxRU%2FF%2FstWEhZdOrEraMez&X-Amz-Signature=a888f0e56c7d2eb07d4a83fbaab35135a302101890e44f5242b442ebb2856d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASJNC5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRHo0pNGLyh9uTrVub1kk5fKZo1Riz3k77QGrZgWjmAiEA3T0IdZqKQf%2Fc0DyCk%2Fa8EXx4q7GOjmDLc5BKZOpMYPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnX4BT1oFVO3fvEFSrcA2JCR31PPuRof5%2BDkwD%2BYuoiord09Z9oHciissVFMFPV2yPTCnY070iyEWiFAbqGvM2L0O%2FfAPaOP46YMhq9aFR50J2okRmmJL9pBf2YC2Jz8dulkDwmbKZNkvfTt1V022e%2Bm%2F%2B8LJD97dak6PCGLeqKbTRtOpvXWSxxyzUSsYyn%2B02JgGPhJ89jJUfehWac8NoEJrY29KBxA0Ttacx0zUkU7XmudWUOxFD7eedqh44srj4y9M6qdIYc3EjCQzksaQFKpXUSjamUPIJFwVihlJialY7qkbWgKZfmFyuFQ9dEyifCEpTDzS%2FERsElwi5icR8l6ut5SjKxtlAffDMoMYHBKdnCTIHprG1qGRoByBrUfM%2FJt5%2Bc%2Bq2sCJq%2BcEePX4pHrD0m9HBjZS%2FD95C35vDPRNcjWKkIz%2FyAz0YlgL5TrJzw7mOLA022h5VM7waBR5obdXIOVYYKZb%2FIHu%2BH%2BT7zUG6wTP%2FoArLcMKorQvuvJpZ%2FVxybD%2BymtjIwzXw424hJp5nwh9%2BclZYxoTsZkZx%2B9zh6lNwEaszfXUkyBAEUrkz1dxItIOi2jpGvUViCw%2BJ2OP42eu9OpnVATR0yCfPdLL3dslPJRjrrE1V6YhKfaEGTjzzVNmU1VW0yMPybscQGOqUBPceNsvw4bmo0YeGuVyDfLdMfXJTGg9eYIFsaYig1GJL6wL%2Bt2bmF%2BUj8qU3TcP99884DHh6NSIW%2BI1e74z58HaexabkTijgWS5Q907L%2FsRfhOMkhIOikT0r7SPWJSQbzF9OYqUZ1QmjqT73Q%2BPySPQTr1jQsMP1JLljsLimszT5QFhStW9sMb2MYeVgr1mN%2F3DlkKKoxRU%2FF%2FstWEhZdOrEraMez&X-Amz-Signature=ba57a56e46fa40d45cb5941b7835c6ee38f52762cffe45c2dd4d7ad5d69d05dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASJNC5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRHo0pNGLyh9uTrVub1kk5fKZo1Riz3k77QGrZgWjmAiEA3T0IdZqKQf%2Fc0DyCk%2Fa8EXx4q7GOjmDLc5BKZOpMYPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnX4BT1oFVO3fvEFSrcA2JCR31PPuRof5%2BDkwD%2BYuoiord09Z9oHciissVFMFPV2yPTCnY070iyEWiFAbqGvM2L0O%2FfAPaOP46YMhq9aFR50J2okRmmJL9pBf2YC2Jz8dulkDwmbKZNkvfTt1V022e%2Bm%2F%2B8LJD97dak6PCGLeqKbTRtOpvXWSxxyzUSsYyn%2B02JgGPhJ89jJUfehWac8NoEJrY29KBxA0Ttacx0zUkU7XmudWUOxFD7eedqh44srj4y9M6qdIYc3EjCQzksaQFKpXUSjamUPIJFwVihlJialY7qkbWgKZfmFyuFQ9dEyifCEpTDzS%2FERsElwi5icR8l6ut5SjKxtlAffDMoMYHBKdnCTIHprG1qGRoByBrUfM%2FJt5%2Bc%2Bq2sCJq%2BcEePX4pHrD0m9HBjZS%2FD95C35vDPRNcjWKkIz%2FyAz0YlgL5TrJzw7mOLA022h5VM7waBR5obdXIOVYYKZb%2FIHu%2BH%2BT7zUG6wTP%2FoArLcMKorQvuvJpZ%2FVxybD%2BymtjIwzXw424hJp5nwh9%2BclZYxoTsZkZx%2B9zh6lNwEaszfXUkyBAEUrkz1dxItIOi2jpGvUViCw%2BJ2OP42eu9OpnVATR0yCfPdLL3dslPJRjrrE1V6YhKfaEGTjzzVNmU1VW0yMPybscQGOqUBPceNsvw4bmo0YeGuVyDfLdMfXJTGg9eYIFsaYig1GJL6wL%2Bt2bmF%2BUj8qU3TcP99884DHh6NSIW%2BI1e74z58HaexabkTijgWS5Q907L%2FsRfhOMkhIOikT0r7SPWJSQbzF9OYqUZ1QmjqT73Q%2BPySPQTr1jQsMP1JLljsLimszT5QFhStW9sMb2MYeVgr1mN%2F3DlkKKoxRU%2FF%2FstWEhZdOrEraMez&X-Amz-Signature=2c450d16435a607e8050b4382e3d0fd2700d4be56aca60308d836fc35d42dbcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASJNC5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRHo0pNGLyh9uTrVub1kk5fKZo1Riz3k77QGrZgWjmAiEA3T0IdZqKQf%2Fc0DyCk%2Fa8EXx4q7GOjmDLc5BKZOpMYPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnX4BT1oFVO3fvEFSrcA2JCR31PPuRof5%2BDkwD%2BYuoiord09Z9oHciissVFMFPV2yPTCnY070iyEWiFAbqGvM2L0O%2FfAPaOP46YMhq9aFR50J2okRmmJL9pBf2YC2Jz8dulkDwmbKZNkvfTt1V022e%2Bm%2F%2B8LJD97dak6PCGLeqKbTRtOpvXWSxxyzUSsYyn%2B02JgGPhJ89jJUfehWac8NoEJrY29KBxA0Ttacx0zUkU7XmudWUOxFD7eedqh44srj4y9M6qdIYc3EjCQzksaQFKpXUSjamUPIJFwVihlJialY7qkbWgKZfmFyuFQ9dEyifCEpTDzS%2FERsElwi5icR8l6ut5SjKxtlAffDMoMYHBKdnCTIHprG1qGRoByBrUfM%2FJt5%2Bc%2Bq2sCJq%2BcEePX4pHrD0m9HBjZS%2FD95C35vDPRNcjWKkIz%2FyAz0YlgL5TrJzw7mOLA022h5VM7waBR5obdXIOVYYKZb%2FIHu%2BH%2BT7zUG6wTP%2FoArLcMKorQvuvJpZ%2FVxybD%2BymtjIwzXw424hJp5nwh9%2BclZYxoTsZkZx%2B9zh6lNwEaszfXUkyBAEUrkz1dxItIOi2jpGvUViCw%2BJ2OP42eu9OpnVATR0yCfPdLL3dslPJRjrrE1V6YhKfaEGTjzzVNmU1VW0yMPybscQGOqUBPceNsvw4bmo0YeGuVyDfLdMfXJTGg9eYIFsaYig1GJL6wL%2Bt2bmF%2BUj8qU3TcP99884DHh6NSIW%2BI1e74z58HaexabkTijgWS5Q907L%2FsRfhOMkhIOikT0r7SPWJSQbzF9OYqUZ1QmjqT73Q%2BPySPQTr1jQsMP1JLljsLimszT5QFhStW9sMb2MYeVgr1mN%2F3DlkKKoxRU%2FF%2FstWEhZdOrEraMez&X-Amz-Signature=71bbccc123d23e4dc157264bf39aa35bb388f58926609a4888c53027d6facef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASJNC5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRHo0pNGLyh9uTrVub1kk5fKZo1Riz3k77QGrZgWjmAiEA3T0IdZqKQf%2Fc0DyCk%2Fa8EXx4q7GOjmDLc5BKZOpMYPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnX4BT1oFVO3fvEFSrcA2JCR31PPuRof5%2BDkwD%2BYuoiord09Z9oHciissVFMFPV2yPTCnY070iyEWiFAbqGvM2L0O%2FfAPaOP46YMhq9aFR50J2okRmmJL9pBf2YC2Jz8dulkDwmbKZNkvfTt1V022e%2Bm%2F%2B8LJD97dak6PCGLeqKbTRtOpvXWSxxyzUSsYyn%2B02JgGPhJ89jJUfehWac8NoEJrY29KBxA0Ttacx0zUkU7XmudWUOxFD7eedqh44srj4y9M6qdIYc3EjCQzksaQFKpXUSjamUPIJFwVihlJialY7qkbWgKZfmFyuFQ9dEyifCEpTDzS%2FERsElwi5icR8l6ut5SjKxtlAffDMoMYHBKdnCTIHprG1qGRoByBrUfM%2FJt5%2Bc%2Bq2sCJq%2BcEePX4pHrD0m9HBjZS%2FD95C35vDPRNcjWKkIz%2FyAz0YlgL5TrJzw7mOLA022h5VM7waBR5obdXIOVYYKZb%2FIHu%2BH%2BT7zUG6wTP%2FoArLcMKorQvuvJpZ%2FVxybD%2BymtjIwzXw424hJp5nwh9%2BclZYxoTsZkZx%2B9zh6lNwEaszfXUkyBAEUrkz1dxItIOi2jpGvUViCw%2BJ2OP42eu9OpnVATR0yCfPdLL3dslPJRjrrE1V6YhKfaEGTjzzVNmU1VW0yMPybscQGOqUBPceNsvw4bmo0YeGuVyDfLdMfXJTGg9eYIFsaYig1GJL6wL%2Bt2bmF%2BUj8qU3TcP99884DHh6NSIW%2BI1e74z58HaexabkTijgWS5Q907L%2FsRfhOMkhIOikT0r7SPWJSQbzF9OYqUZ1QmjqT73Q%2BPySPQTr1jQsMP1JLljsLimszT5QFhStW9sMb2MYeVgr1mN%2F3DlkKKoxRU%2FF%2FstWEhZdOrEraMez&X-Amz-Signature=a92eb960e86107ca73b2a42663f2df239828ce2e46abda31e31ccc04ccdce283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OJ5HRVV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEq44zfB4Avk%2FZXkmb2WIjpgopkIuP7%2BSBGEOwlqbgvCAiEA3YxvJcCqPB4ow1Pff5KX6EoCMG%2BiyjMBzfhABFfhsAEqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK8h%2Fhz4CcBn1CX0jircA9o5XXQuj97pY5hjXZYsXF8PjFLowWbhP8xLLQffu3EB38H%2Fh%2FRMOZx1EXxmCxeQSKXWPKCTgu9LLG9gNCvGQgwpnDMqlgYBEbNON0%2BiFzX9wQD8fsVNCsIO30eMexam%2FtOfvC1RqiCsJ4fxsZu2ibYVrdEz1wTkMcscU1MxpPUXpt2wySD5Cv1g7kDq7tG%2B58oScTc%2F%2FCMjSCg%2BxWvkEbSfzKbZRjhZ4VPxCaxeYYKOGtDnM6zQMgZQa4rLsKBa1tXvPjdl7o5PMHsyF%2BUgoq7T8Zw8NDYn7Fs4gXZpVxTS4lIo%2BpqN7l7VSceKM1c%2FpMLJJy%2FvQwFeUKDMDVFj6YaQSLoVUHRa9THLizf%2FAhyBs7o8JjCJCHTC7Jc9sfscXyzViFSNM7urYrav6Es6zooQ4rHFy77yZw0nxlvJODHCWLbYtbivsaaI9ZgSjAkh8x26M2H6m71SoGUJHSMsID61O8BIkTecEIvvDWm7AIaFAKQxN0dn85aOB3v%2BpcT61jf5y%2FohA%2BBdGexwzHC8yNlT1McuLAExGAcBtHMGtZrP5p1he1AcYXqaUPu2oHqK8q7D9wXbIMVs4jgZoiXiM8qS6%2Bx2pRIiJvQxg8l9%2BdQhf6VKYiuwehFs%2BokRMJKcscQGOqUBjcAUfdXUOFZ8GxO%2FjASwTtEwXlQN%2Bo2cXEqEBErAkYokPPJr%2FpMqu0cgh0erCaF5JCUh4wXLGBBaYjNMa8hODKohcAi6SWfBp1lWIXOHwYKtVP%2BeRyYnZ8O9zf4P8Tz36mfZRvJ935ZGMs%2Fctk3iMpKGnr%2BEIR1%2Bf4vonZYNk6soybt4J6yG5xzGbfU6FGyvkaqz6Zf2OwjM%2FPG5QzNzbQ1z10ii&X-Amz-Signature=b74195264110d74f12602fc51e7f69a7567df51bf13010d02aa1da1f86c20064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ASJNC5Z%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVRHo0pNGLyh9uTrVub1kk5fKZo1Riz3k77QGrZgWjmAiEA3T0IdZqKQf%2Fc0DyCk%2Fa8EXx4q7GOjmDLc5BKZOpMYPYqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnX4BT1oFVO3fvEFSrcA2JCR31PPuRof5%2BDkwD%2BYuoiord09Z9oHciissVFMFPV2yPTCnY070iyEWiFAbqGvM2L0O%2FfAPaOP46YMhq9aFR50J2okRmmJL9pBf2YC2Jz8dulkDwmbKZNkvfTt1V022e%2Bm%2F%2B8LJD97dak6PCGLeqKbTRtOpvXWSxxyzUSsYyn%2B02JgGPhJ89jJUfehWac8NoEJrY29KBxA0Ttacx0zUkU7XmudWUOxFD7eedqh44srj4y9M6qdIYc3EjCQzksaQFKpXUSjamUPIJFwVihlJialY7qkbWgKZfmFyuFQ9dEyifCEpTDzS%2FERsElwi5icR8l6ut5SjKxtlAffDMoMYHBKdnCTIHprG1qGRoByBrUfM%2FJt5%2Bc%2Bq2sCJq%2BcEePX4pHrD0m9HBjZS%2FD95C35vDPRNcjWKkIz%2FyAz0YlgL5TrJzw7mOLA022h5VM7waBR5obdXIOVYYKZb%2FIHu%2BH%2BT7zUG6wTP%2FoArLcMKorQvuvJpZ%2FVxybD%2BymtjIwzXw424hJp5nwh9%2BclZYxoTsZkZx%2B9zh6lNwEaszfXUkyBAEUrkz1dxItIOi2jpGvUViCw%2BJ2OP42eu9OpnVATR0yCfPdLL3dslPJRjrrE1V6YhKfaEGTjzzVNmU1VW0yMPybscQGOqUBPceNsvw4bmo0YeGuVyDfLdMfXJTGg9eYIFsaYig1GJL6wL%2Bt2bmF%2BUj8qU3TcP99884DHh6NSIW%2BI1e74z58HaexabkTijgWS5Q907L%2FsRfhOMkhIOikT0r7SPWJSQbzF9OYqUZ1QmjqT73Q%2BPySPQTr1jQsMP1JLljsLimszT5QFhStW9sMb2MYeVgr1mN%2F3DlkKKoxRU%2FF%2FstWEhZdOrEraMez&X-Amz-Signature=5c47ba237bd2f579827fab84f167a4ec680e2f6df4fe1f751b54ab2dc41cc832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBGESZ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNUXD1x1OkxJBV888hElDM024qeu6orSUWH2nho%2BEZAIgUW%2F%2FVlW2WDjWTVcde%2B5sW3HuUtV6ROXEY5yGdAq%2F2d8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcpgRWOQrArCM9BGSrcAxzb61%2BgOIIV5gMSKFMb5GMsreIajtMFjsSTVzXH5j57oWla%2FWSO8z4O3L5pKXLbNTvIoCXrjVrWLHdLHsSQVTwYYPE0yGxf0qDUCgtaU8p8U6viBkjM%2F%2Ft3OyRkTFzKMZX7gDK8VNT9JwyX0U%2BsXhSOA5rVLQC40MnLSQr5XjcmzyuYmBfZzQ2FxwRYctjR2ziDKL7X5aRMX3Gzc0iyQY9ohwob80xQngzk9IzB2btf5RjXV2NqBSU%2FP16GjH1Qpk%2FJAd2k%2FFtiz6yHh0bG%2FTj3fL2lyq1j%2Fuj3o2wiDBp2aU18zezHQeviVe6giqKXVkOzS9mHOa%2BqSMzuvlvMJfZPjraENQ7KGscdAZaFdJ6oXDclp2EfkSmR29WPnZ62HW87BeFu%2F9coW3LjfghiayyFqQJNmuTvhkzRfMswMp8L%2F60aft0TpmiuEgsr6CM2Aio5yz%2BnnrTT8IGhhygaQLPyf0P0EWyybSfXKQaaB9L3oXw95VR4jVZ5cwbVI8fjawl4o0e%2BqXpfiuS7AuNdm8wLfuyrTnd4BYw3EGLa5g2QnuODvMTP2ugHe9SIHQELeEfb5yC0T6UkXyM61M1erjJzI7owN8jasDYBIs04ig4wwfv3QauFMc7E5iLeML%2BbscQGOqUB5Co%2BTc4343OXyiqbsLq8I3Y44gKPAGm8cXTimX%2FxLCm5Dsg4p%2BmexW%2BSatMz7ANdobMrPfXXbo37i80pSw0T0LceCAtHt%2FR1m8LZX37feJWiRb9Dm8U6y%2BaynNx0YVp3GdY1LiM7rWpZQn3yZHs%2F3lRJLuAc2syHqiGdrRZma0puBpQxXRh4I8wD%2BxksuNbdAC%2F91xfAndjjl%2FXf6sj2uioZRFjZ&X-Amz-Signature=1d4f474ae0ba3656506d5eef9ecd57d85616dc333558d1af07da4e3452c8fad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBGESZ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNUXD1x1OkxJBV888hElDM024qeu6orSUWH2nho%2BEZAIgUW%2F%2FVlW2WDjWTVcde%2B5sW3HuUtV6ROXEY5yGdAq%2F2d8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcpgRWOQrArCM9BGSrcAxzb61%2BgOIIV5gMSKFMb5GMsreIajtMFjsSTVzXH5j57oWla%2FWSO8z4O3L5pKXLbNTvIoCXrjVrWLHdLHsSQVTwYYPE0yGxf0qDUCgtaU8p8U6viBkjM%2F%2Ft3OyRkTFzKMZX7gDK8VNT9JwyX0U%2BsXhSOA5rVLQC40MnLSQr5XjcmzyuYmBfZzQ2FxwRYctjR2ziDKL7X5aRMX3Gzc0iyQY9ohwob80xQngzk9IzB2btf5RjXV2NqBSU%2FP16GjH1Qpk%2FJAd2k%2FFtiz6yHh0bG%2FTj3fL2lyq1j%2Fuj3o2wiDBp2aU18zezHQeviVe6giqKXVkOzS9mHOa%2BqSMzuvlvMJfZPjraENQ7KGscdAZaFdJ6oXDclp2EfkSmR29WPnZ62HW87BeFu%2F9coW3LjfghiayyFqQJNmuTvhkzRfMswMp8L%2F60aft0TpmiuEgsr6CM2Aio5yz%2BnnrTT8IGhhygaQLPyf0P0EWyybSfXKQaaB9L3oXw95VR4jVZ5cwbVI8fjawl4o0e%2BqXpfiuS7AuNdm8wLfuyrTnd4BYw3EGLa5g2QnuODvMTP2ugHe9SIHQELeEfb5yC0T6UkXyM61M1erjJzI7owN8jasDYBIs04ig4wwfv3QauFMc7E5iLeML%2BbscQGOqUB5Co%2BTc4343OXyiqbsLq8I3Y44gKPAGm8cXTimX%2FxLCm5Dsg4p%2BmexW%2BSatMz7ANdobMrPfXXbo37i80pSw0T0LceCAtHt%2FR1m8LZX37feJWiRb9Dm8U6y%2BaynNx0YVp3GdY1LiM7rWpZQn3yZHs%2F3lRJLuAc2syHqiGdrRZma0puBpQxXRh4I8wD%2BxksuNbdAC%2F91xfAndjjl%2FXf6sj2uioZRFjZ&X-Amz-Signature=d91edaad0eac43245295402237aec1ff874b9d6bae7bb8cd10fb8d67d1886417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBGESZ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNUXD1x1OkxJBV888hElDM024qeu6orSUWH2nho%2BEZAIgUW%2F%2FVlW2WDjWTVcde%2B5sW3HuUtV6ROXEY5yGdAq%2F2d8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcpgRWOQrArCM9BGSrcAxzb61%2BgOIIV5gMSKFMb5GMsreIajtMFjsSTVzXH5j57oWla%2FWSO8z4O3L5pKXLbNTvIoCXrjVrWLHdLHsSQVTwYYPE0yGxf0qDUCgtaU8p8U6viBkjM%2F%2Ft3OyRkTFzKMZX7gDK8VNT9JwyX0U%2BsXhSOA5rVLQC40MnLSQr5XjcmzyuYmBfZzQ2FxwRYctjR2ziDKL7X5aRMX3Gzc0iyQY9ohwob80xQngzk9IzB2btf5RjXV2NqBSU%2FP16GjH1Qpk%2FJAd2k%2FFtiz6yHh0bG%2FTj3fL2lyq1j%2Fuj3o2wiDBp2aU18zezHQeviVe6giqKXVkOzS9mHOa%2BqSMzuvlvMJfZPjraENQ7KGscdAZaFdJ6oXDclp2EfkSmR29WPnZ62HW87BeFu%2F9coW3LjfghiayyFqQJNmuTvhkzRfMswMp8L%2F60aft0TpmiuEgsr6CM2Aio5yz%2BnnrTT8IGhhygaQLPyf0P0EWyybSfXKQaaB9L3oXw95VR4jVZ5cwbVI8fjawl4o0e%2BqXpfiuS7AuNdm8wLfuyrTnd4BYw3EGLa5g2QnuODvMTP2ugHe9SIHQELeEfb5yC0T6UkXyM61M1erjJzI7owN8jasDYBIs04ig4wwfv3QauFMc7E5iLeML%2BbscQGOqUB5Co%2BTc4343OXyiqbsLq8I3Y44gKPAGm8cXTimX%2FxLCm5Dsg4p%2BmexW%2BSatMz7ANdobMrPfXXbo37i80pSw0T0LceCAtHt%2FR1m8LZX37feJWiRb9Dm8U6y%2BaynNx0YVp3GdY1LiM7rWpZQn3yZHs%2F3lRJLuAc2syHqiGdrRZma0puBpQxXRh4I8wD%2BxksuNbdAC%2F91xfAndjjl%2FXf6sj2uioZRFjZ&X-Amz-Signature=94e7b11d64b64b7c8f71f13d032123d6ec9555c98ebd1967cf94fb358b353df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBGESZ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNUXD1x1OkxJBV888hElDM024qeu6orSUWH2nho%2BEZAIgUW%2F%2FVlW2WDjWTVcde%2B5sW3HuUtV6ROXEY5yGdAq%2F2d8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcpgRWOQrArCM9BGSrcAxzb61%2BgOIIV5gMSKFMb5GMsreIajtMFjsSTVzXH5j57oWla%2FWSO8z4O3L5pKXLbNTvIoCXrjVrWLHdLHsSQVTwYYPE0yGxf0qDUCgtaU8p8U6viBkjM%2F%2Ft3OyRkTFzKMZX7gDK8VNT9JwyX0U%2BsXhSOA5rVLQC40MnLSQr5XjcmzyuYmBfZzQ2FxwRYctjR2ziDKL7X5aRMX3Gzc0iyQY9ohwob80xQngzk9IzB2btf5RjXV2NqBSU%2FP16GjH1Qpk%2FJAd2k%2FFtiz6yHh0bG%2FTj3fL2lyq1j%2Fuj3o2wiDBp2aU18zezHQeviVe6giqKXVkOzS9mHOa%2BqSMzuvlvMJfZPjraENQ7KGscdAZaFdJ6oXDclp2EfkSmR29WPnZ62HW87BeFu%2F9coW3LjfghiayyFqQJNmuTvhkzRfMswMp8L%2F60aft0TpmiuEgsr6CM2Aio5yz%2BnnrTT8IGhhygaQLPyf0P0EWyybSfXKQaaB9L3oXw95VR4jVZ5cwbVI8fjawl4o0e%2BqXpfiuS7AuNdm8wLfuyrTnd4BYw3EGLa5g2QnuODvMTP2ugHe9SIHQELeEfb5yC0T6UkXyM61M1erjJzI7owN8jasDYBIs04ig4wwfv3QauFMc7E5iLeML%2BbscQGOqUB5Co%2BTc4343OXyiqbsLq8I3Y44gKPAGm8cXTimX%2FxLCm5Dsg4p%2BmexW%2BSatMz7ANdobMrPfXXbo37i80pSw0T0LceCAtHt%2FR1m8LZX37feJWiRb9Dm8U6y%2BaynNx0YVp3GdY1LiM7rWpZQn3yZHs%2F3lRJLuAc2syHqiGdrRZma0puBpQxXRh4I8wD%2BxksuNbdAC%2F91xfAndjjl%2FXf6sj2uioZRFjZ&X-Amz-Signature=78842ff83a458b9e25a900d7d70ba56c7780dbe1a1dc81c9d38a25dd09568a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBGESZ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNUXD1x1OkxJBV888hElDM024qeu6orSUWH2nho%2BEZAIgUW%2F%2FVlW2WDjWTVcde%2B5sW3HuUtV6ROXEY5yGdAq%2F2d8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcpgRWOQrArCM9BGSrcAxzb61%2BgOIIV5gMSKFMb5GMsreIajtMFjsSTVzXH5j57oWla%2FWSO8z4O3L5pKXLbNTvIoCXrjVrWLHdLHsSQVTwYYPE0yGxf0qDUCgtaU8p8U6viBkjM%2F%2Ft3OyRkTFzKMZX7gDK8VNT9JwyX0U%2BsXhSOA5rVLQC40MnLSQr5XjcmzyuYmBfZzQ2FxwRYctjR2ziDKL7X5aRMX3Gzc0iyQY9ohwob80xQngzk9IzB2btf5RjXV2NqBSU%2FP16GjH1Qpk%2FJAd2k%2FFtiz6yHh0bG%2FTj3fL2lyq1j%2Fuj3o2wiDBp2aU18zezHQeviVe6giqKXVkOzS9mHOa%2BqSMzuvlvMJfZPjraENQ7KGscdAZaFdJ6oXDclp2EfkSmR29WPnZ62HW87BeFu%2F9coW3LjfghiayyFqQJNmuTvhkzRfMswMp8L%2F60aft0TpmiuEgsr6CM2Aio5yz%2BnnrTT8IGhhygaQLPyf0P0EWyybSfXKQaaB9L3oXw95VR4jVZ5cwbVI8fjawl4o0e%2BqXpfiuS7AuNdm8wLfuyrTnd4BYw3EGLa5g2QnuODvMTP2ugHe9SIHQELeEfb5yC0T6UkXyM61M1erjJzI7owN8jasDYBIs04ig4wwfv3QauFMc7E5iLeML%2BbscQGOqUB5Co%2BTc4343OXyiqbsLq8I3Y44gKPAGm8cXTimX%2FxLCm5Dsg4p%2BmexW%2BSatMz7ANdobMrPfXXbo37i80pSw0T0LceCAtHt%2FR1m8LZX37feJWiRb9Dm8U6y%2BaynNx0YVp3GdY1LiM7rWpZQn3yZHs%2F3lRJLuAc2syHqiGdrRZma0puBpQxXRh4I8wD%2BxksuNbdAC%2F91xfAndjjl%2FXf6sj2uioZRFjZ&X-Amz-Signature=6e98475ff6b77bf9d91815250b476d42ba234cb3b9d50dc0a92681d41011b706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBGESZ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNUXD1x1OkxJBV888hElDM024qeu6orSUWH2nho%2BEZAIgUW%2F%2FVlW2WDjWTVcde%2B5sW3HuUtV6ROXEY5yGdAq%2F2d8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcpgRWOQrArCM9BGSrcAxzb61%2BgOIIV5gMSKFMb5GMsreIajtMFjsSTVzXH5j57oWla%2FWSO8z4O3L5pKXLbNTvIoCXrjVrWLHdLHsSQVTwYYPE0yGxf0qDUCgtaU8p8U6viBkjM%2F%2Ft3OyRkTFzKMZX7gDK8VNT9JwyX0U%2BsXhSOA5rVLQC40MnLSQr5XjcmzyuYmBfZzQ2FxwRYctjR2ziDKL7X5aRMX3Gzc0iyQY9ohwob80xQngzk9IzB2btf5RjXV2NqBSU%2FP16GjH1Qpk%2FJAd2k%2FFtiz6yHh0bG%2FTj3fL2lyq1j%2Fuj3o2wiDBp2aU18zezHQeviVe6giqKXVkOzS9mHOa%2BqSMzuvlvMJfZPjraENQ7KGscdAZaFdJ6oXDclp2EfkSmR29WPnZ62HW87BeFu%2F9coW3LjfghiayyFqQJNmuTvhkzRfMswMp8L%2F60aft0TpmiuEgsr6CM2Aio5yz%2BnnrTT8IGhhygaQLPyf0P0EWyybSfXKQaaB9L3oXw95VR4jVZ5cwbVI8fjawl4o0e%2BqXpfiuS7AuNdm8wLfuyrTnd4BYw3EGLa5g2QnuODvMTP2ugHe9SIHQELeEfb5yC0T6UkXyM61M1erjJzI7owN8jasDYBIs04ig4wwfv3QauFMc7E5iLeML%2BbscQGOqUB5Co%2BTc4343OXyiqbsLq8I3Y44gKPAGm8cXTimX%2FxLCm5Dsg4p%2BmexW%2BSatMz7ANdobMrPfXXbo37i80pSw0T0LceCAtHt%2FR1m8LZX37feJWiRb9Dm8U6y%2BaynNx0YVp3GdY1LiM7rWpZQn3yZHs%2F3lRJLuAc2syHqiGdrRZma0puBpQxXRh4I8wD%2BxksuNbdAC%2F91xfAndjjl%2FXf6sj2uioZRFjZ&X-Amz-Signature=e7be831cc3384d453cfd8eb977d7f4894bb6209d93507076fbb442fdc26cd668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBGESZ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNUXD1x1OkxJBV888hElDM024qeu6orSUWH2nho%2BEZAIgUW%2F%2FVlW2WDjWTVcde%2B5sW3HuUtV6ROXEY5yGdAq%2F2d8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcpgRWOQrArCM9BGSrcAxzb61%2BgOIIV5gMSKFMb5GMsreIajtMFjsSTVzXH5j57oWla%2FWSO8z4O3L5pKXLbNTvIoCXrjVrWLHdLHsSQVTwYYPE0yGxf0qDUCgtaU8p8U6viBkjM%2F%2Ft3OyRkTFzKMZX7gDK8VNT9JwyX0U%2BsXhSOA5rVLQC40MnLSQr5XjcmzyuYmBfZzQ2FxwRYctjR2ziDKL7X5aRMX3Gzc0iyQY9ohwob80xQngzk9IzB2btf5RjXV2NqBSU%2FP16GjH1Qpk%2FJAd2k%2FFtiz6yHh0bG%2FTj3fL2lyq1j%2Fuj3o2wiDBp2aU18zezHQeviVe6giqKXVkOzS9mHOa%2BqSMzuvlvMJfZPjraENQ7KGscdAZaFdJ6oXDclp2EfkSmR29WPnZ62HW87BeFu%2F9coW3LjfghiayyFqQJNmuTvhkzRfMswMp8L%2F60aft0TpmiuEgsr6CM2Aio5yz%2BnnrTT8IGhhygaQLPyf0P0EWyybSfXKQaaB9L3oXw95VR4jVZ5cwbVI8fjawl4o0e%2BqXpfiuS7AuNdm8wLfuyrTnd4BYw3EGLa5g2QnuODvMTP2ugHe9SIHQELeEfb5yC0T6UkXyM61M1erjJzI7owN8jasDYBIs04ig4wwfv3QauFMc7E5iLeML%2BbscQGOqUB5Co%2BTc4343OXyiqbsLq8I3Y44gKPAGm8cXTimX%2FxLCm5Dsg4p%2BmexW%2BSatMz7ANdobMrPfXXbo37i80pSw0T0LceCAtHt%2FR1m8LZX37feJWiRb9Dm8U6y%2BaynNx0YVp3GdY1LiM7rWpZQn3yZHs%2F3lRJLuAc2syHqiGdrRZma0puBpQxXRh4I8wD%2BxksuNbdAC%2F91xfAndjjl%2FXf6sj2uioZRFjZ&X-Amz-Signature=f1f2ac51a7feb303528a6f87960bf8c885e7178762f87c7874a43f4f6733dbe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IBGESZ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T061712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvNUXD1x1OkxJBV888hElDM024qeu6orSUWH2nho%2BEZAIgUW%2F%2FVlW2WDjWTVcde%2B5sW3HuUtV6ROXEY5yGdAq%2F2d8qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcpgRWOQrArCM9BGSrcAxzb61%2BgOIIV5gMSKFMb5GMsreIajtMFjsSTVzXH5j57oWla%2FWSO8z4O3L5pKXLbNTvIoCXrjVrWLHdLHsSQVTwYYPE0yGxf0qDUCgtaU8p8U6viBkjM%2F%2Ft3OyRkTFzKMZX7gDK8VNT9JwyX0U%2BsXhSOA5rVLQC40MnLSQr5XjcmzyuYmBfZzQ2FxwRYctjR2ziDKL7X5aRMX3Gzc0iyQY9ohwob80xQngzk9IzB2btf5RjXV2NqBSU%2FP16GjH1Qpk%2FJAd2k%2FFtiz6yHh0bG%2FTj3fL2lyq1j%2Fuj3o2wiDBp2aU18zezHQeviVe6giqKXVkOzS9mHOa%2BqSMzuvlvMJfZPjraENQ7KGscdAZaFdJ6oXDclp2EfkSmR29WPnZ62HW87BeFu%2F9coW3LjfghiayyFqQJNmuTvhkzRfMswMp8L%2F60aft0TpmiuEgsr6CM2Aio5yz%2BnnrTT8IGhhygaQLPyf0P0EWyybSfXKQaaB9L3oXw95VR4jVZ5cwbVI8fjawl4o0e%2BqXpfiuS7AuNdm8wLfuyrTnd4BYw3EGLa5g2QnuODvMTP2ugHe9SIHQELeEfb5yC0T6UkXyM61M1erjJzI7owN8jasDYBIs04ig4wwfv3QauFMc7E5iLeML%2BbscQGOqUB5Co%2BTc4343OXyiqbsLq8I3Y44gKPAGm8cXTimX%2FxLCm5Dsg4p%2BmexW%2BSatMz7ANdobMrPfXXbo37i80pSw0T0LceCAtHt%2FR1m8LZX37feJWiRb9Dm8U6y%2BaynNx0YVp3GdY1LiM7rWpZQn3yZHs%2F3lRJLuAc2syHqiGdrRZma0puBpQxXRh4I8wD%2BxksuNbdAC%2F91xfAndjjl%2FXf6sj2uioZRFjZ&X-Amz-Signature=5205b560fc4c51e54138eb018ad0ad94cbdb80959a76707fe591a8339bce3ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
