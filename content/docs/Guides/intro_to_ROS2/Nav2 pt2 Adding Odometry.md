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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546AKYQU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC6%2FNarUh07Glf30bDJVA97lHoUIEip9SLqgxnewK0e6AiEArbdL13i8mh2mNXC9xaLY8yC%2BntcxQr5hThgSNr39bNkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAXY%2FvBH7TZPSdYjUircAwNiCzdq5Dd4GaNEgMbWFF6FGqH1PwEmkLmLGRYzxLQvNW07hhWOB3wgtD%2BAzr7Ex%2FOSwrh83vzTTJvcTr%2FKImo%2BM%2BeYFWBM9j%2FoWC6uNUzEp8GPV2aoq8GZVySMSh%2B2CN1h9f9tFAaZi0Im9Do4mLwJrf1C9TP420hnq4Nq7QYJfVQyz8mD2Ir6LNLRUF%2FKU3ygSO%2BQWxwNoHsp5Lgatc5ctUxtRF%2B0o9uMsWHziZzfvquvvx0jSQ9dVnkdQuOhAlwzU6LNjLlmbQd7rf%2F6%2BEkj%2BYtR1IF7ueGX80GT1b4PeqmgprLjiXvxy7aKK%2FTBQBhBQMj4LxpM7C%2BzTEyVSAf%2FQjvFk9tbiXz8pSBOxlqsD4aficm%2FWUYP%2BOhEuAv%2B58btxR8Aa95yhAPw3AZuqCWMOOz5fF0lqfpi8Ltu%2FBdGMp8mb8%2F1VcxjHJeGMrfpFVkCPIFP1k8RopMRZ%2Bi136HExuMaLMgAyTAU4Uw%2FMXM%2BvLMTHr2zdnASw6UfZu9JvU8kcp%2FwJT1lWOXMQsY5ADZbCcBlEBlVzo3cXXKJ3mNXfTSfl0LUMwbn5n%2FQj4632nC4Q9sQvDDS3LE8UGHESpyKb4qp9rG8O%2Btiih7pcpWU7FzJXV0ygc3uClosMOfv1csGOqUBBe1N6yFIYUbeOB%2FSbeI2O5XC2cOHx6UknBKcDiki%2B%2FkCDH3ZDzm0CAP7E3LJ9zhJV1OSe2mB%2BeIBouaWGH1BsmQ3iUNjlOV8RguKIp7GzzSQPsH5pWEXZQIXfcP24fH%2BD%2FMoQeBiF2sn%2F9re3oxBS6fXA4VH8m5mAbM4JxmDZFOiOVxU6KD1%2BSfpBjeU5V1hHSE8yKibfSS1ZsI%2Fs5XxqRjcPE0W&X-Amz-Signature=60a4e1c98f442ba39286d2d24434539d3b473d3d2e5d5b61922a220014404a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546AKYQU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC6%2FNarUh07Glf30bDJVA97lHoUIEip9SLqgxnewK0e6AiEArbdL13i8mh2mNXC9xaLY8yC%2BntcxQr5hThgSNr39bNkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAXY%2FvBH7TZPSdYjUircAwNiCzdq5Dd4GaNEgMbWFF6FGqH1PwEmkLmLGRYzxLQvNW07hhWOB3wgtD%2BAzr7Ex%2FOSwrh83vzTTJvcTr%2FKImo%2BM%2BeYFWBM9j%2FoWC6uNUzEp8GPV2aoq8GZVySMSh%2B2CN1h9f9tFAaZi0Im9Do4mLwJrf1C9TP420hnq4Nq7QYJfVQyz8mD2Ir6LNLRUF%2FKU3ygSO%2BQWxwNoHsp5Lgatc5ctUxtRF%2B0o9uMsWHziZzfvquvvx0jSQ9dVnkdQuOhAlwzU6LNjLlmbQd7rf%2F6%2BEkj%2BYtR1IF7ueGX80GT1b4PeqmgprLjiXvxy7aKK%2FTBQBhBQMj4LxpM7C%2BzTEyVSAf%2FQjvFk9tbiXz8pSBOxlqsD4aficm%2FWUYP%2BOhEuAv%2B58btxR8Aa95yhAPw3AZuqCWMOOz5fF0lqfpi8Ltu%2FBdGMp8mb8%2F1VcxjHJeGMrfpFVkCPIFP1k8RopMRZ%2Bi136HExuMaLMgAyTAU4Uw%2FMXM%2BvLMTHr2zdnASw6UfZu9JvU8kcp%2FwJT1lWOXMQsY5ADZbCcBlEBlVzo3cXXKJ3mNXfTSfl0LUMwbn5n%2FQj4632nC4Q9sQvDDS3LE8UGHESpyKb4qp9rG8O%2Btiih7pcpWU7FzJXV0ygc3uClosMOfv1csGOqUBBe1N6yFIYUbeOB%2FSbeI2O5XC2cOHx6UknBKcDiki%2B%2FkCDH3ZDzm0CAP7E3LJ9zhJV1OSe2mB%2BeIBouaWGH1BsmQ3iUNjlOV8RguKIp7GzzSQPsH5pWEXZQIXfcP24fH%2BD%2FMoQeBiF2sn%2F9re3oxBS6fXA4VH8m5mAbM4JxmDZFOiOVxU6KD1%2BSfpBjeU5V1hHSE8yKibfSS1ZsI%2Fs5XxqRjcPE0W&X-Amz-Signature=1e800f1b5c011d6b66aa43f99f48f6d8734daec836391a689dff00666054a583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546AKYQU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC6%2FNarUh07Glf30bDJVA97lHoUIEip9SLqgxnewK0e6AiEArbdL13i8mh2mNXC9xaLY8yC%2BntcxQr5hThgSNr39bNkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAXY%2FvBH7TZPSdYjUircAwNiCzdq5Dd4GaNEgMbWFF6FGqH1PwEmkLmLGRYzxLQvNW07hhWOB3wgtD%2BAzr7Ex%2FOSwrh83vzTTJvcTr%2FKImo%2BM%2BeYFWBM9j%2FoWC6uNUzEp8GPV2aoq8GZVySMSh%2B2CN1h9f9tFAaZi0Im9Do4mLwJrf1C9TP420hnq4Nq7QYJfVQyz8mD2Ir6LNLRUF%2FKU3ygSO%2BQWxwNoHsp5Lgatc5ctUxtRF%2B0o9uMsWHziZzfvquvvx0jSQ9dVnkdQuOhAlwzU6LNjLlmbQd7rf%2F6%2BEkj%2BYtR1IF7ueGX80GT1b4PeqmgprLjiXvxy7aKK%2FTBQBhBQMj4LxpM7C%2BzTEyVSAf%2FQjvFk9tbiXz8pSBOxlqsD4aficm%2FWUYP%2BOhEuAv%2B58btxR8Aa95yhAPw3AZuqCWMOOz5fF0lqfpi8Ltu%2FBdGMp8mb8%2F1VcxjHJeGMrfpFVkCPIFP1k8RopMRZ%2Bi136HExuMaLMgAyTAU4Uw%2FMXM%2BvLMTHr2zdnASw6UfZu9JvU8kcp%2FwJT1lWOXMQsY5ADZbCcBlEBlVzo3cXXKJ3mNXfTSfl0LUMwbn5n%2FQj4632nC4Q9sQvDDS3LE8UGHESpyKb4qp9rG8O%2Btiih7pcpWU7FzJXV0ygc3uClosMOfv1csGOqUBBe1N6yFIYUbeOB%2FSbeI2O5XC2cOHx6UknBKcDiki%2B%2FkCDH3ZDzm0CAP7E3LJ9zhJV1OSe2mB%2BeIBouaWGH1BsmQ3iUNjlOV8RguKIp7GzzSQPsH5pWEXZQIXfcP24fH%2BD%2FMoQeBiF2sn%2F9re3oxBS6fXA4VH8m5mAbM4JxmDZFOiOVxU6KD1%2BSfpBjeU5V1hHSE8yKibfSS1ZsI%2Fs5XxqRjcPE0W&X-Amz-Signature=82df87e82ad2ec1c545c76bdec7103bdb8517be51a5e2e24b3e26766496e790e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546AKYQU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC6%2FNarUh07Glf30bDJVA97lHoUIEip9SLqgxnewK0e6AiEArbdL13i8mh2mNXC9xaLY8yC%2BntcxQr5hThgSNr39bNkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAXY%2FvBH7TZPSdYjUircAwNiCzdq5Dd4GaNEgMbWFF6FGqH1PwEmkLmLGRYzxLQvNW07hhWOB3wgtD%2BAzr7Ex%2FOSwrh83vzTTJvcTr%2FKImo%2BM%2BeYFWBM9j%2FoWC6uNUzEp8GPV2aoq8GZVySMSh%2B2CN1h9f9tFAaZi0Im9Do4mLwJrf1C9TP420hnq4Nq7QYJfVQyz8mD2Ir6LNLRUF%2FKU3ygSO%2BQWxwNoHsp5Lgatc5ctUxtRF%2B0o9uMsWHziZzfvquvvx0jSQ9dVnkdQuOhAlwzU6LNjLlmbQd7rf%2F6%2BEkj%2BYtR1IF7ueGX80GT1b4PeqmgprLjiXvxy7aKK%2FTBQBhBQMj4LxpM7C%2BzTEyVSAf%2FQjvFk9tbiXz8pSBOxlqsD4aficm%2FWUYP%2BOhEuAv%2B58btxR8Aa95yhAPw3AZuqCWMOOz5fF0lqfpi8Ltu%2FBdGMp8mb8%2F1VcxjHJeGMrfpFVkCPIFP1k8RopMRZ%2Bi136HExuMaLMgAyTAU4Uw%2FMXM%2BvLMTHr2zdnASw6UfZu9JvU8kcp%2FwJT1lWOXMQsY5ADZbCcBlEBlVzo3cXXKJ3mNXfTSfl0LUMwbn5n%2FQj4632nC4Q9sQvDDS3LE8UGHESpyKb4qp9rG8O%2Btiih7pcpWU7FzJXV0ygc3uClosMOfv1csGOqUBBe1N6yFIYUbeOB%2FSbeI2O5XC2cOHx6UknBKcDiki%2B%2FkCDH3ZDzm0CAP7E3LJ9zhJV1OSe2mB%2BeIBouaWGH1BsmQ3iUNjlOV8RguKIp7GzzSQPsH5pWEXZQIXfcP24fH%2BD%2FMoQeBiF2sn%2F9re3oxBS6fXA4VH8m5mAbM4JxmDZFOiOVxU6KD1%2BSfpBjeU5V1hHSE8yKibfSS1ZsI%2Fs5XxqRjcPE0W&X-Amz-Signature=aa74f6f63a2c014fab6709182987a8d5a360319272dc0772b432e0bf77cc8261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546AKYQU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC6%2FNarUh07Glf30bDJVA97lHoUIEip9SLqgxnewK0e6AiEArbdL13i8mh2mNXC9xaLY8yC%2BntcxQr5hThgSNr39bNkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAXY%2FvBH7TZPSdYjUircAwNiCzdq5Dd4GaNEgMbWFF6FGqH1PwEmkLmLGRYzxLQvNW07hhWOB3wgtD%2BAzr7Ex%2FOSwrh83vzTTJvcTr%2FKImo%2BM%2BeYFWBM9j%2FoWC6uNUzEp8GPV2aoq8GZVySMSh%2B2CN1h9f9tFAaZi0Im9Do4mLwJrf1C9TP420hnq4Nq7QYJfVQyz8mD2Ir6LNLRUF%2FKU3ygSO%2BQWxwNoHsp5Lgatc5ctUxtRF%2B0o9uMsWHziZzfvquvvx0jSQ9dVnkdQuOhAlwzU6LNjLlmbQd7rf%2F6%2BEkj%2BYtR1IF7ueGX80GT1b4PeqmgprLjiXvxy7aKK%2FTBQBhBQMj4LxpM7C%2BzTEyVSAf%2FQjvFk9tbiXz8pSBOxlqsD4aficm%2FWUYP%2BOhEuAv%2B58btxR8Aa95yhAPw3AZuqCWMOOz5fF0lqfpi8Ltu%2FBdGMp8mb8%2F1VcxjHJeGMrfpFVkCPIFP1k8RopMRZ%2Bi136HExuMaLMgAyTAU4Uw%2FMXM%2BvLMTHr2zdnASw6UfZu9JvU8kcp%2FwJT1lWOXMQsY5ADZbCcBlEBlVzo3cXXKJ3mNXfTSfl0LUMwbn5n%2FQj4632nC4Q9sQvDDS3LE8UGHESpyKb4qp9rG8O%2Btiih7pcpWU7FzJXV0ygc3uClosMOfv1csGOqUBBe1N6yFIYUbeOB%2FSbeI2O5XC2cOHx6UknBKcDiki%2B%2FkCDH3ZDzm0CAP7E3LJ9zhJV1OSe2mB%2BeIBouaWGH1BsmQ3iUNjlOV8RguKIp7GzzSQPsH5pWEXZQIXfcP24fH%2BD%2FMoQeBiF2sn%2F9re3oxBS6fXA4VH8m5mAbM4JxmDZFOiOVxU6KD1%2BSfpBjeU5V1hHSE8yKibfSS1ZsI%2Fs5XxqRjcPE0W&X-Amz-Signature=75d4ba2e596905a023ed98b7e4c81eed9823f43f7ca71d5598cbc93ca9342d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546AKYQU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC6%2FNarUh07Glf30bDJVA97lHoUIEip9SLqgxnewK0e6AiEArbdL13i8mh2mNXC9xaLY8yC%2BntcxQr5hThgSNr39bNkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAXY%2FvBH7TZPSdYjUircAwNiCzdq5Dd4GaNEgMbWFF6FGqH1PwEmkLmLGRYzxLQvNW07hhWOB3wgtD%2BAzr7Ex%2FOSwrh83vzTTJvcTr%2FKImo%2BM%2BeYFWBM9j%2FoWC6uNUzEp8GPV2aoq8GZVySMSh%2B2CN1h9f9tFAaZi0Im9Do4mLwJrf1C9TP420hnq4Nq7QYJfVQyz8mD2Ir6LNLRUF%2FKU3ygSO%2BQWxwNoHsp5Lgatc5ctUxtRF%2B0o9uMsWHziZzfvquvvx0jSQ9dVnkdQuOhAlwzU6LNjLlmbQd7rf%2F6%2BEkj%2BYtR1IF7ueGX80GT1b4PeqmgprLjiXvxy7aKK%2FTBQBhBQMj4LxpM7C%2BzTEyVSAf%2FQjvFk9tbiXz8pSBOxlqsD4aficm%2FWUYP%2BOhEuAv%2B58btxR8Aa95yhAPw3AZuqCWMOOz5fF0lqfpi8Ltu%2FBdGMp8mb8%2F1VcxjHJeGMrfpFVkCPIFP1k8RopMRZ%2Bi136HExuMaLMgAyTAU4Uw%2FMXM%2BvLMTHr2zdnASw6UfZu9JvU8kcp%2FwJT1lWOXMQsY5ADZbCcBlEBlVzo3cXXKJ3mNXfTSfl0LUMwbn5n%2FQj4632nC4Q9sQvDDS3LE8UGHESpyKb4qp9rG8O%2Btiih7pcpWU7FzJXV0ygc3uClosMOfv1csGOqUBBe1N6yFIYUbeOB%2FSbeI2O5XC2cOHx6UknBKcDiki%2B%2FkCDH3ZDzm0CAP7E3LJ9zhJV1OSe2mB%2BeIBouaWGH1BsmQ3iUNjlOV8RguKIp7GzzSQPsH5pWEXZQIXfcP24fH%2BD%2FMoQeBiF2sn%2F9re3oxBS6fXA4VH8m5mAbM4JxmDZFOiOVxU6KD1%2BSfpBjeU5V1hHSE8yKibfSS1ZsI%2Fs5XxqRjcPE0W&X-Amz-Signature=abe47fde2d5e4ee3e33315008c9ab17e2d0c93b5b6e71cf60a6156440ee5fced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546AKYQU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC6%2FNarUh07Glf30bDJVA97lHoUIEip9SLqgxnewK0e6AiEArbdL13i8mh2mNXC9xaLY8yC%2BntcxQr5hThgSNr39bNkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAXY%2FvBH7TZPSdYjUircAwNiCzdq5Dd4GaNEgMbWFF6FGqH1PwEmkLmLGRYzxLQvNW07hhWOB3wgtD%2BAzr7Ex%2FOSwrh83vzTTJvcTr%2FKImo%2BM%2BeYFWBM9j%2FoWC6uNUzEp8GPV2aoq8GZVySMSh%2B2CN1h9f9tFAaZi0Im9Do4mLwJrf1C9TP420hnq4Nq7QYJfVQyz8mD2Ir6LNLRUF%2FKU3ygSO%2BQWxwNoHsp5Lgatc5ctUxtRF%2B0o9uMsWHziZzfvquvvx0jSQ9dVnkdQuOhAlwzU6LNjLlmbQd7rf%2F6%2BEkj%2BYtR1IF7ueGX80GT1b4PeqmgprLjiXvxy7aKK%2FTBQBhBQMj4LxpM7C%2BzTEyVSAf%2FQjvFk9tbiXz8pSBOxlqsD4aficm%2FWUYP%2BOhEuAv%2B58btxR8Aa95yhAPw3AZuqCWMOOz5fF0lqfpi8Ltu%2FBdGMp8mb8%2F1VcxjHJeGMrfpFVkCPIFP1k8RopMRZ%2Bi136HExuMaLMgAyTAU4Uw%2FMXM%2BvLMTHr2zdnASw6UfZu9JvU8kcp%2FwJT1lWOXMQsY5ADZbCcBlEBlVzo3cXXKJ3mNXfTSfl0LUMwbn5n%2FQj4632nC4Q9sQvDDS3LE8UGHESpyKb4qp9rG8O%2Btiih7pcpWU7FzJXV0ygc3uClosMOfv1csGOqUBBe1N6yFIYUbeOB%2FSbeI2O5XC2cOHx6UknBKcDiki%2B%2FkCDH3ZDzm0CAP7E3LJ9zhJV1OSe2mB%2BeIBouaWGH1BsmQ3iUNjlOV8RguKIp7GzzSQPsH5pWEXZQIXfcP24fH%2BD%2FMoQeBiF2sn%2F9re3oxBS6fXA4VH8m5mAbM4JxmDZFOiOVxU6KD1%2BSfpBjeU5V1hHSE8yKibfSS1ZsI%2Fs5XxqRjcPE0W&X-Amz-Signature=9b90f2b24ae33a3054c9e36c9553f334bff1002150b9428398136c2710aa77bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546AKYQU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC6%2FNarUh07Glf30bDJVA97lHoUIEip9SLqgxnewK0e6AiEArbdL13i8mh2mNXC9xaLY8yC%2BntcxQr5hThgSNr39bNkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAXY%2FvBH7TZPSdYjUircAwNiCzdq5Dd4GaNEgMbWFF6FGqH1PwEmkLmLGRYzxLQvNW07hhWOB3wgtD%2BAzr7Ex%2FOSwrh83vzTTJvcTr%2FKImo%2BM%2BeYFWBM9j%2FoWC6uNUzEp8GPV2aoq8GZVySMSh%2B2CN1h9f9tFAaZi0Im9Do4mLwJrf1C9TP420hnq4Nq7QYJfVQyz8mD2Ir6LNLRUF%2FKU3ygSO%2BQWxwNoHsp5Lgatc5ctUxtRF%2B0o9uMsWHziZzfvquvvx0jSQ9dVnkdQuOhAlwzU6LNjLlmbQd7rf%2F6%2BEkj%2BYtR1IF7ueGX80GT1b4PeqmgprLjiXvxy7aKK%2FTBQBhBQMj4LxpM7C%2BzTEyVSAf%2FQjvFk9tbiXz8pSBOxlqsD4aficm%2FWUYP%2BOhEuAv%2B58btxR8Aa95yhAPw3AZuqCWMOOz5fF0lqfpi8Ltu%2FBdGMp8mb8%2F1VcxjHJeGMrfpFVkCPIFP1k8RopMRZ%2Bi136HExuMaLMgAyTAU4Uw%2FMXM%2BvLMTHr2zdnASw6UfZu9JvU8kcp%2FwJT1lWOXMQsY5ADZbCcBlEBlVzo3cXXKJ3mNXfTSfl0LUMwbn5n%2FQj4632nC4Q9sQvDDS3LE8UGHESpyKb4qp9rG8O%2Btiih7pcpWU7FzJXV0ygc3uClosMOfv1csGOqUBBe1N6yFIYUbeOB%2FSbeI2O5XC2cOHx6UknBKcDiki%2B%2FkCDH3ZDzm0CAP7E3LJ9zhJV1OSe2mB%2BeIBouaWGH1BsmQ3iUNjlOV8RguKIp7GzzSQPsH5pWEXZQIXfcP24fH%2BD%2FMoQeBiF2sn%2F9re3oxBS6fXA4VH8m5mAbM4JxmDZFOiOVxU6KD1%2BSfpBjeU5V1hHSE8yKibfSS1ZsI%2Fs5XxqRjcPE0W&X-Amz-Signature=b552b73b419847544f2b34c485fe7abc61588e2b271b28895296737b9faa9512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546AKYQU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC6%2FNarUh07Glf30bDJVA97lHoUIEip9SLqgxnewK0e6AiEArbdL13i8mh2mNXC9xaLY8yC%2BntcxQr5hThgSNr39bNkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAXY%2FvBH7TZPSdYjUircAwNiCzdq5Dd4GaNEgMbWFF6FGqH1PwEmkLmLGRYzxLQvNW07hhWOB3wgtD%2BAzr7Ex%2FOSwrh83vzTTJvcTr%2FKImo%2BM%2BeYFWBM9j%2FoWC6uNUzEp8GPV2aoq8GZVySMSh%2B2CN1h9f9tFAaZi0Im9Do4mLwJrf1C9TP420hnq4Nq7QYJfVQyz8mD2Ir6LNLRUF%2FKU3ygSO%2BQWxwNoHsp5Lgatc5ctUxtRF%2B0o9uMsWHziZzfvquvvx0jSQ9dVnkdQuOhAlwzU6LNjLlmbQd7rf%2F6%2BEkj%2BYtR1IF7ueGX80GT1b4PeqmgprLjiXvxy7aKK%2FTBQBhBQMj4LxpM7C%2BzTEyVSAf%2FQjvFk9tbiXz8pSBOxlqsD4aficm%2FWUYP%2BOhEuAv%2B58btxR8Aa95yhAPw3AZuqCWMOOz5fF0lqfpi8Ltu%2FBdGMp8mb8%2F1VcxjHJeGMrfpFVkCPIFP1k8RopMRZ%2Bi136HExuMaLMgAyTAU4Uw%2FMXM%2BvLMTHr2zdnASw6UfZu9JvU8kcp%2FwJT1lWOXMQsY5ADZbCcBlEBlVzo3cXXKJ3mNXfTSfl0LUMwbn5n%2FQj4632nC4Q9sQvDDS3LE8UGHESpyKb4qp9rG8O%2Btiih7pcpWU7FzJXV0ygc3uClosMOfv1csGOqUBBe1N6yFIYUbeOB%2FSbeI2O5XC2cOHx6UknBKcDiki%2B%2FkCDH3ZDzm0CAP7E3LJ9zhJV1OSe2mB%2BeIBouaWGH1BsmQ3iUNjlOV8RguKIp7GzzSQPsH5pWEXZQIXfcP24fH%2BD%2FMoQeBiF2sn%2F9re3oxBS6fXA4VH8m5mAbM4JxmDZFOiOVxU6KD1%2BSfpBjeU5V1hHSE8yKibfSS1ZsI%2Fs5XxqRjcPE0W&X-Amz-Signature=780de2e70b995f1a98e84affa99d4172be9042a766b1d1546e7dbff3e8c93868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466546AKYQU%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC6%2FNarUh07Glf30bDJVA97lHoUIEip9SLqgxnewK0e6AiEArbdL13i8mh2mNXC9xaLY8yC%2BntcxQr5hThgSNr39bNkq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAXY%2FvBH7TZPSdYjUircAwNiCzdq5Dd4GaNEgMbWFF6FGqH1PwEmkLmLGRYzxLQvNW07hhWOB3wgtD%2BAzr7Ex%2FOSwrh83vzTTJvcTr%2FKImo%2BM%2BeYFWBM9j%2FoWC6uNUzEp8GPV2aoq8GZVySMSh%2B2CN1h9f9tFAaZi0Im9Do4mLwJrf1C9TP420hnq4Nq7QYJfVQyz8mD2Ir6LNLRUF%2FKU3ygSO%2BQWxwNoHsp5Lgatc5ctUxtRF%2B0o9uMsWHziZzfvquvvx0jSQ9dVnkdQuOhAlwzU6LNjLlmbQd7rf%2F6%2BEkj%2BYtR1IF7ueGX80GT1b4PeqmgprLjiXvxy7aKK%2FTBQBhBQMj4LxpM7C%2BzTEyVSAf%2FQjvFk9tbiXz8pSBOxlqsD4aficm%2FWUYP%2BOhEuAv%2B58btxR8Aa95yhAPw3AZuqCWMOOz5fF0lqfpi8Ltu%2FBdGMp8mb8%2F1VcxjHJeGMrfpFVkCPIFP1k8RopMRZ%2Bi136HExuMaLMgAyTAU4Uw%2FMXM%2BvLMTHr2zdnASw6UfZu9JvU8kcp%2FwJT1lWOXMQsY5ADZbCcBlEBlVzo3cXXKJ3mNXfTSfl0LUMwbn5n%2FQj4632nC4Q9sQvDDS3LE8UGHESpyKb4qp9rG8O%2Btiih7pcpWU7FzJXV0ygc3uClosMOfv1csGOqUBBe1N6yFIYUbeOB%2FSbeI2O5XC2cOHx6UknBKcDiki%2B%2FkCDH3ZDzm0CAP7E3LJ9zhJV1OSe2mB%2BeIBouaWGH1BsmQ3iUNjlOV8RguKIp7GzzSQPsH5pWEXZQIXfcP24fH%2BD%2FMoQeBiF2sn%2F9re3oxBS6fXA4VH8m5mAbM4JxmDZFOiOVxU6KD1%2BSfpBjeU5V1hHSE8yKibfSS1ZsI%2Fs5XxqRjcPE0W&X-Amz-Signature=90b9a4535afc480f5168e0cad1d087ae1f44dd2590de18f77212bed87c44b473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOEVVED%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCH8DmGVHZU5iWMKvxEM07Fx5MLhxkaZqvZ7GIhruxOXwIgZQkc5Lx8fHiPmi1lMSNmfDfBowYOH4UThw1LpKPTfp8q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDL1HXvjyZPwwA1NYFCrcA%2BbbRP7bfPaYe0wwuPEBdDMfUVbS%2F%2FRH5K28qPDVWZqE3C0ibt9ZBV5ZGg%2FXN%2BehnP2TOOEjhsVuAi11bLxc9dcfZj6Vb4gv0caynVccM%2B3QJ5gK5h%2BY%2FoY7SeBB08L9BHNMXLWiVoK7W5H%2FYIWEJuOasx9KyBtyrT3ODTTv6Dng5yTxlE32Y1MkMD0Dv54Iqa6JNaej6YA8nEToUYa939u582XyTgER%2B82YSFxTJT9bt6nm%2Bh6alSo63Ys77bWHA8fX5WZ%2FxEYCMV7J7kay6k0kYNU335tLGign0Ch27JdHXWALxhczg%2BXdlEPOLuNJufm1rmRkJrPyQcqQP%2Fasjnn%2FVwxupP6C4KvTkvYK3bH8ECJauY9xHPNkfESQbZDPvQp41gaVH6ta3BXHbzSrCzNrJlHvlCRjSI%2Fyl0B0DikI83rRuheo0d%2FlG7V6b7b1rTJSW3wAwGnMaEPo4593yUg7PwlsWjZfq4%2FKMdXhUzBB2L9P5wUfPiH5%2F90xWLbXwa6SF5u3Yd%2FCfvvdv15Sq5sfXNfEx23Tlbc9xImY8SdNoeoAfKALm5d0UvJQCAskjCJCJAQS9zFWLMdVvBiCRoagn9Au0wpeRexmWT5%2B1igv5LPPS6jOzvSlU2LfMOju1csGOqUBq%2Fc0S%2BFRvaI%2F9U4f9hYNEzykXWr8xcCDM9G5iKa7YHjyw%2FNy%2F2HcSU1Am7AIke9BZKEzY5vGBeqJsSxjIYkUsrr0YiM9QTcI83L3ufPL9GubOy4QjGZ8zDUokEn0kOO386u8A7TmOL7dO2kb7AiB2OoRLmkgX3ZXLxr2eIbvqem8xaE0GX1timFgio7YvyWiVO7%2BdJV65dlWdLOAaTWF1px1VAkQ&X-Amz-Signature=3dd9fc4a39257921f20a23f18e41e2dc62870c40ae8c08ac11bd4418a9a75dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HO7NJ6%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC%2B2Qj%2Byn7Nw9P4NZLyyH2MPE23FWbsySvdbbEPomlvFQIhAL5oMvgOjWTjrnbEq3MPnOdsphfkAFsTsG9L%2B45IbnLcKv8DCBsQABoMNjM3NDIzMTgzODA1Igw72Eqb5WFtKjvBIUYq3ANik%2FfKzNn%2B1KBzZAP9bKlEBPfanAgpqyEmpbtJWdyIMIUQoEowzQHPgIaxWGC7dEI9bxT0Cnxjte%2Bz9fGXLgOzXXwclgA2VVJfS4GpH%2B6WGh71IZWVw%2BMjfDHXAaPeIITYHPWPiPdAJLOJLlCNdl3wVpjgkZgtnGU3uBbo5qjIUllJcxC47iyFbBptSG76eUvo1JJ54fphZPz2G5T9KA3gA%2BJIUmBhND7P%2FGoqAo9xPl5GF32j9JcXI8KBvriOYWaoKNMghLG9hozJl%2FYaG90%2FQKYwknmBoznSJsQVW0r4fcTeBNGfgjT0DqNuoNLAQYZY15RpBuVKJmugZTHXaeFXxdbfaXAYNPI%2BLIP4zbsgG53AV6fAigbr0BB0LLHUxbtbY4af%2Fu%2FFuxyj80ccttEXAkMz5UHQJhFo2QMrFjzY0zIAW3G%2B2SjgUXl84rS2i0MgBLzv5MkLzVj5cskfoe9eNP2VvxU0b5vYDWIi4sE5cDKP5t03lh6cQPmmVnPhTnL0pa%2FCjDS5%2F7d1cA5h0s9IbYhDP82n2KAWT6Nn%2FjX9RY2BxfifuuXxUbSHS2BYY7KoIxPOkgjJ%2BN6LLxZh%2BP8TSVNneuH8ahJDTGlSJ7UceJMU1Lt5dh%2BkLAiF4TDo79XLBjqkAe38%2BupNcBw33jrStRDYAeS1oYUuiAZUjY2pvgIFojMuyDLBY1WEhRjaiY0am6930oiP4weIOB%2BKaa8NLOFVOEUIuIdEr1RkRzLNpA5aiQEOQ6GS5%2FNBXAjQQeOdlrilT1J3m2VlK6yij%2FSnjoSKxzArMjQrNskR89qrdmfsX%2BJz7v3%2BgQ4Mxn2VJURV5yii25pXSI6uthQAM2OcTAtfzMPsJfJQ&X-Amz-Signature=d7c8d2bcae975f36e8a8777146e3005e7c15e5c6242c255af9ef28b7f3b274bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HO7NJ6%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC%2B2Qj%2Byn7Nw9P4NZLyyH2MPE23FWbsySvdbbEPomlvFQIhAL5oMvgOjWTjrnbEq3MPnOdsphfkAFsTsG9L%2B45IbnLcKv8DCBsQABoMNjM3NDIzMTgzODA1Igw72Eqb5WFtKjvBIUYq3ANik%2FfKzNn%2B1KBzZAP9bKlEBPfanAgpqyEmpbtJWdyIMIUQoEowzQHPgIaxWGC7dEI9bxT0Cnxjte%2Bz9fGXLgOzXXwclgA2VVJfS4GpH%2B6WGh71IZWVw%2BMjfDHXAaPeIITYHPWPiPdAJLOJLlCNdl3wVpjgkZgtnGU3uBbo5qjIUllJcxC47iyFbBptSG76eUvo1JJ54fphZPz2G5T9KA3gA%2BJIUmBhND7P%2FGoqAo9xPl5GF32j9JcXI8KBvriOYWaoKNMghLG9hozJl%2FYaG90%2FQKYwknmBoznSJsQVW0r4fcTeBNGfgjT0DqNuoNLAQYZY15RpBuVKJmugZTHXaeFXxdbfaXAYNPI%2BLIP4zbsgG53AV6fAigbr0BB0LLHUxbtbY4af%2Fu%2FFuxyj80ccttEXAkMz5UHQJhFo2QMrFjzY0zIAW3G%2B2SjgUXl84rS2i0MgBLzv5MkLzVj5cskfoe9eNP2VvxU0b5vYDWIi4sE5cDKP5t03lh6cQPmmVnPhTnL0pa%2FCjDS5%2F7d1cA5h0s9IbYhDP82n2KAWT6Nn%2FjX9RY2BxfifuuXxUbSHS2BYY7KoIxPOkgjJ%2BN6LLxZh%2BP8TSVNneuH8ahJDTGlSJ7UceJMU1Lt5dh%2BkLAiF4TDo79XLBjqkAe38%2BupNcBw33jrStRDYAeS1oYUuiAZUjY2pvgIFojMuyDLBY1WEhRjaiY0am6930oiP4weIOB%2BKaa8NLOFVOEUIuIdEr1RkRzLNpA5aiQEOQ6GS5%2FNBXAjQQeOdlrilT1J3m2VlK6yij%2FSnjoSKxzArMjQrNskR89qrdmfsX%2BJz7v3%2BgQ4Mxn2VJURV5yii25pXSI6uthQAM2OcTAtfzMPsJfJQ&X-Amz-Signature=283ff201e8d3dcd6e2a399738dd0c1acdc4dc28c6df15d7a33ad368008ac2e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HO7NJ6%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC%2B2Qj%2Byn7Nw9P4NZLyyH2MPE23FWbsySvdbbEPomlvFQIhAL5oMvgOjWTjrnbEq3MPnOdsphfkAFsTsG9L%2B45IbnLcKv8DCBsQABoMNjM3NDIzMTgzODA1Igw72Eqb5WFtKjvBIUYq3ANik%2FfKzNn%2B1KBzZAP9bKlEBPfanAgpqyEmpbtJWdyIMIUQoEowzQHPgIaxWGC7dEI9bxT0Cnxjte%2Bz9fGXLgOzXXwclgA2VVJfS4GpH%2B6WGh71IZWVw%2BMjfDHXAaPeIITYHPWPiPdAJLOJLlCNdl3wVpjgkZgtnGU3uBbo5qjIUllJcxC47iyFbBptSG76eUvo1JJ54fphZPz2G5T9KA3gA%2BJIUmBhND7P%2FGoqAo9xPl5GF32j9JcXI8KBvriOYWaoKNMghLG9hozJl%2FYaG90%2FQKYwknmBoznSJsQVW0r4fcTeBNGfgjT0DqNuoNLAQYZY15RpBuVKJmugZTHXaeFXxdbfaXAYNPI%2BLIP4zbsgG53AV6fAigbr0BB0LLHUxbtbY4af%2Fu%2FFuxyj80ccttEXAkMz5UHQJhFo2QMrFjzY0zIAW3G%2B2SjgUXl84rS2i0MgBLzv5MkLzVj5cskfoe9eNP2VvxU0b5vYDWIi4sE5cDKP5t03lh6cQPmmVnPhTnL0pa%2FCjDS5%2F7d1cA5h0s9IbYhDP82n2KAWT6Nn%2FjX9RY2BxfifuuXxUbSHS2BYY7KoIxPOkgjJ%2BN6LLxZh%2BP8TSVNneuH8ahJDTGlSJ7UceJMU1Lt5dh%2BkLAiF4TDo79XLBjqkAe38%2BupNcBw33jrStRDYAeS1oYUuiAZUjY2pvgIFojMuyDLBY1WEhRjaiY0am6930oiP4weIOB%2BKaa8NLOFVOEUIuIdEr1RkRzLNpA5aiQEOQ6GS5%2FNBXAjQQeOdlrilT1J3m2VlK6yij%2FSnjoSKxzArMjQrNskR89qrdmfsX%2BJz7v3%2BgQ4Mxn2VJURV5yii25pXSI6uthQAM2OcTAtfzMPsJfJQ&X-Amz-Signature=c91b8e2e37db00ab23e3aba653f33e9c8a78f423df05fc6468b86cf631b867d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HO7NJ6%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC%2B2Qj%2Byn7Nw9P4NZLyyH2MPE23FWbsySvdbbEPomlvFQIhAL5oMvgOjWTjrnbEq3MPnOdsphfkAFsTsG9L%2B45IbnLcKv8DCBsQABoMNjM3NDIzMTgzODA1Igw72Eqb5WFtKjvBIUYq3ANik%2FfKzNn%2B1KBzZAP9bKlEBPfanAgpqyEmpbtJWdyIMIUQoEowzQHPgIaxWGC7dEI9bxT0Cnxjte%2Bz9fGXLgOzXXwclgA2VVJfS4GpH%2B6WGh71IZWVw%2BMjfDHXAaPeIITYHPWPiPdAJLOJLlCNdl3wVpjgkZgtnGU3uBbo5qjIUllJcxC47iyFbBptSG76eUvo1JJ54fphZPz2G5T9KA3gA%2BJIUmBhND7P%2FGoqAo9xPl5GF32j9JcXI8KBvriOYWaoKNMghLG9hozJl%2FYaG90%2FQKYwknmBoznSJsQVW0r4fcTeBNGfgjT0DqNuoNLAQYZY15RpBuVKJmugZTHXaeFXxdbfaXAYNPI%2BLIP4zbsgG53AV6fAigbr0BB0LLHUxbtbY4af%2Fu%2FFuxyj80ccttEXAkMz5UHQJhFo2QMrFjzY0zIAW3G%2B2SjgUXl84rS2i0MgBLzv5MkLzVj5cskfoe9eNP2VvxU0b5vYDWIi4sE5cDKP5t03lh6cQPmmVnPhTnL0pa%2FCjDS5%2F7d1cA5h0s9IbYhDP82n2KAWT6Nn%2FjX9RY2BxfifuuXxUbSHS2BYY7KoIxPOkgjJ%2BN6LLxZh%2BP8TSVNneuH8ahJDTGlSJ7UceJMU1Lt5dh%2BkLAiF4TDo79XLBjqkAe38%2BupNcBw33jrStRDYAeS1oYUuiAZUjY2pvgIFojMuyDLBY1WEhRjaiY0am6930oiP4weIOB%2BKaa8NLOFVOEUIuIdEr1RkRzLNpA5aiQEOQ6GS5%2FNBXAjQQeOdlrilT1J3m2VlK6yij%2FSnjoSKxzArMjQrNskR89qrdmfsX%2BJz7v3%2BgQ4Mxn2VJURV5yii25pXSI6uthQAM2OcTAtfzMPsJfJQ&X-Amz-Signature=6503511857430d8665b372d4df76cb1cd4adef0c3ccaf58a0d34bd1512a15996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HO7NJ6%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC%2B2Qj%2Byn7Nw9P4NZLyyH2MPE23FWbsySvdbbEPomlvFQIhAL5oMvgOjWTjrnbEq3MPnOdsphfkAFsTsG9L%2B45IbnLcKv8DCBsQABoMNjM3NDIzMTgzODA1Igw72Eqb5WFtKjvBIUYq3ANik%2FfKzNn%2B1KBzZAP9bKlEBPfanAgpqyEmpbtJWdyIMIUQoEowzQHPgIaxWGC7dEI9bxT0Cnxjte%2Bz9fGXLgOzXXwclgA2VVJfS4GpH%2B6WGh71IZWVw%2BMjfDHXAaPeIITYHPWPiPdAJLOJLlCNdl3wVpjgkZgtnGU3uBbo5qjIUllJcxC47iyFbBptSG76eUvo1JJ54fphZPz2G5T9KA3gA%2BJIUmBhND7P%2FGoqAo9xPl5GF32j9JcXI8KBvriOYWaoKNMghLG9hozJl%2FYaG90%2FQKYwknmBoznSJsQVW0r4fcTeBNGfgjT0DqNuoNLAQYZY15RpBuVKJmugZTHXaeFXxdbfaXAYNPI%2BLIP4zbsgG53AV6fAigbr0BB0LLHUxbtbY4af%2Fu%2FFuxyj80ccttEXAkMz5UHQJhFo2QMrFjzY0zIAW3G%2B2SjgUXl84rS2i0MgBLzv5MkLzVj5cskfoe9eNP2VvxU0b5vYDWIi4sE5cDKP5t03lh6cQPmmVnPhTnL0pa%2FCjDS5%2F7d1cA5h0s9IbYhDP82n2KAWT6Nn%2FjX9RY2BxfifuuXxUbSHS2BYY7KoIxPOkgjJ%2BN6LLxZh%2BP8TSVNneuH8ahJDTGlSJ7UceJMU1Lt5dh%2BkLAiF4TDo79XLBjqkAe38%2BupNcBw33jrStRDYAeS1oYUuiAZUjY2pvgIFojMuyDLBY1WEhRjaiY0am6930oiP4weIOB%2BKaa8NLOFVOEUIuIdEr1RkRzLNpA5aiQEOQ6GS5%2FNBXAjQQeOdlrilT1J3m2VlK6yij%2FSnjoSKxzArMjQrNskR89qrdmfsX%2BJz7v3%2BgQ4Mxn2VJURV5yii25pXSI6uthQAM2OcTAtfzMPsJfJQ&X-Amz-Signature=5bc4ce0f471f035ee1a85efda62ebdaabaa8962c0a7464fea23f52ed80ac2346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HO7NJ6%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC%2B2Qj%2Byn7Nw9P4NZLyyH2MPE23FWbsySvdbbEPomlvFQIhAL5oMvgOjWTjrnbEq3MPnOdsphfkAFsTsG9L%2B45IbnLcKv8DCBsQABoMNjM3NDIzMTgzODA1Igw72Eqb5WFtKjvBIUYq3ANik%2FfKzNn%2B1KBzZAP9bKlEBPfanAgpqyEmpbtJWdyIMIUQoEowzQHPgIaxWGC7dEI9bxT0Cnxjte%2Bz9fGXLgOzXXwclgA2VVJfS4GpH%2B6WGh71IZWVw%2BMjfDHXAaPeIITYHPWPiPdAJLOJLlCNdl3wVpjgkZgtnGU3uBbo5qjIUllJcxC47iyFbBptSG76eUvo1JJ54fphZPz2G5T9KA3gA%2BJIUmBhND7P%2FGoqAo9xPl5GF32j9JcXI8KBvriOYWaoKNMghLG9hozJl%2FYaG90%2FQKYwknmBoznSJsQVW0r4fcTeBNGfgjT0DqNuoNLAQYZY15RpBuVKJmugZTHXaeFXxdbfaXAYNPI%2BLIP4zbsgG53AV6fAigbr0BB0LLHUxbtbY4af%2Fu%2FFuxyj80ccttEXAkMz5UHQJhFo2QMrFjzY0zIAW3G%2B2SjgUXl84rS2i0MgBLzv5MkLzVj5cskfoe9eNP2VvxU0b5vYDWIi4sE5cDKP5t03lh6cQPmmVnPhTnL0pa%2FCjDS5%2F7d1cA5h0s9IbYhDP82n2KAWT6Nn%2FjX9RY2BxfifuuXxUbSHS2BYY7KoIxPOkgjJ%2BN6LLxZh%2BP8TSVNneuH8ahJDTGlSJ7UceJMU1Lt5dh%2BkLAiF4TDo79XLBjqkAe38%2BupNcBw33jrStRDYAeS1oYUuiAZUjY2pvgIFojMuyDLBY1WEhRjaiY0am6930oiP4weIOB%2BKaa8NLOFVOEUIuIdEr1RkRzLNpA5aiQEOQ6GS5%2FNBXAjQQeOdlrilT1J3m2VlK6yij%2FSnjoSKxzArMjQrNskR89qrdmfsX%2BJz7v3%2BgQ4Mxn2VJURV5yii25pXSI6uthQAM2OcTAtfzMPsJfJQ&X-Amz-Signature=26b5ab8bb9f79f01640fbe67c34b6e062b4595f0ce51f026057dc5155900fd22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HO7NJ6%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC%2B2Qj%2Byn7Nw9P4NZLyyH2MPE23FWbsySvdbbEPomlvFQIhAL5oMvgOjWTjrnbEq3MPnOdsphfkAFsTsG9L%2B45IbnLcKv8DCBsQABoMNjM3NDIzMTgzODA1Igw72Eqb5WFtKjvBIUYq3ANik%2FfKzNn%2B1KBzZAP9bKlEBPfanAgpqyEmpbtJWdyIMIUQoEowzQHPgIaxWGC7dEI9bxT0Cnxjte%2Bz9fGXLgOzXXwclgA2VVJfS4GpH%2B6WGh71IZWVw%2BMjfDHXAaPeIITYHPWPiPdAJLOJLlCNdl3wVpjgkZgtnGU3uBbo5qjIUllJcxC47iyFbBptSG76eUvo1JJ54fphZPz2G5T9KA3gA%2BJIUmBhND7P%2FGoqAo9xPl5GF32j9JcXI8KBvriOYWaoKNMghLG9hozJl%2FYaG90%2FQKYwknmBoznSJsQVW0r4fcTeBNGfgjT0DqNuoNLAQYZY15RpBuVKJmugZTHXaeFXxdbfaXAYNPI%2BLIP4zbsgG53AV6fAigbr0BB0LLHUxbtbY4af%2Fu%2FFuxyj80ccttEXAkMz5UHQJhFo2QMrFjzY0zIAW3G%2B2SjgUXl84rS2i0MgBLzv5MkLzVj5cskfoe9eNP2VvxU0b5vYDWIi4sE5cDKP5t03lh6cQPmmVnPhTnL0pa%2FCjDS5%2F7d1cA5h0s9IbYhDP82n2KAWT6Nn%2FjX9RY2BxfifuuXxUbSHS2BYY7KoIxPOkgjJ%2BN6LLxZh%2BP8TSVNneuH8ahJDTGlSJ7UceJMU1Lt5dh%2BkLAiF4TDo79XLBjqkAe38%2BupNcBw33jrStRDYAeS1oYUuiAZUjY2pvgIFojMuyDLBY1WEhRjaiY0am6930oiP4weIOB%2BKaa8NLOFVOEUIuIdEr1RkRzLNpA5aiQEOQ6GS5%2FNBXAjQQeOdlrilT1J3m2VlK6yij%2FSnjoSKxzArMjQrNskR89qrdmfsX%2BJz7v3%2BgQ4Mxn2VJURV5yii25pXSI6uthQAM2OcTAtfzMPsJfJQ&X-Amz-Signature=44884905dd5f9dc4abdb73cd7d46972213508dbb3447f612f411afb492642a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HO7NJ6%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC%2B2Qj%2Byn7Nw9P4NZLyyH2MPE23FWbsySvdbbEPomlvFQIhAL5oMvgOjWTjrnbEq3MPnOdsphfkAFsTsG9L%2B45IbnLcKv8DCBsQABoMNjM3NDIzMTgzODA1Igw72Eqb5WFtKjvBIUYq3ANik%2FfKzNn%2B1KBzZAP9bKlEBPfanAgpqyEmpbtJWdyIMIUQoEowzQHPgIaxWGC7dEI9bxT0Cnxjte%2Bz9fGXLgOzXXwclgA2VVJfS4GpH%2B6WGh71IZWVw%2BMjfDHXAaPeIITYHPWPiPdAJLOJLlCNdl3wVpjgkZgtnGU3uBbo5qjIUllJcxC47iyFbBptSG76eUvo1JJ54fphZPz2G5T9KA3gA%2BJIUmBhND7P%2FGoqAo9xPl5GF32j9JcXI8KBvriOYWaoKNMghLG9hozJl%2FYaG90%2FQKYwknmBoznSJsQVW0r4fcTeBNGfgjT0DqNuoNLAQYZY15RpBuVKJmugZTHXaeFXxdbfaXAYNPI%2BLIP4zbsgG53AV6fAigbr0BB0LLHUxbtbY4af%2Fu%2FFuxyj80ccttEXAkMz5UHQJhFo2QMrFjzY0zIAW3G%2B2SjgUXl84rS2i0MgBLzv5MkLzVj5cskfoe9eNP2VvxU0b5vYDWIi4sE5cDKP5t03lh6cQPmmVnPhTnL0pa%2FCjDS5%2F7d1cA5h0s9IbYhDP82n2KAWT6Nn%2FjX9RY2BxfifuuXxUbSHS2BYY7KoIxPOkgjJ%2BN6LLxZh%2BP8TSVNneuH8ahJDTGlSJ7UceJMU1Lt5dh%2BkLAiF4TDo79XLBjqkAe38%2BupNcBw33jrStRDYAeS1oYUuiAZUjY2pvgIFojMuyDLBY1WEhRjaiY0am6930oiP4weIOB%2BKaa8NLOFVOEUIuIdEr1RkRzLNpA5aiQEOQ6GS5%2FNBXAjQQeOdlrilT1J3m2VlK6yij%2FSnjoSKxzArMjQrNskR89qrdmfsX%2BJz7v3%2BgQ4Mxn2VJURV5yii25pXSI6uthQAM2OcTAtfzMPsJfJQ&X-Amz-Signature=d284e50b538e4a16a99d68bab1024e60fafa07419ff050684ad8334725f7f0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3HO7NJ6%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC%2B2Qj%2Byn7Nw9P4NZLyyH2MPE23FWbsySvdbbEPomlvFQIhAL5oMvgOjWTjrnbEq3MPnOdsphfkAFsTsG9L%2B45IbnLcKv8DCBsQABoMNjM3NDIzMTgzODA1Igw72Eqb5WFtKjvBIUYq3ANik%2FfKzNn%2B1KBzZAP9bKlEBPfanAgpqyEmpbtJWdyIMIUQoEowzQHPgIaxWGC7dEI9bxT0Cnxjte%2Bz9fGXLgOzXXwclgA2VVJfS4GpH%2B6WGh71IZWVw%2BMjfDHXAaPeIITYHPWPiPdAJLOJLlCNdl3wVpjgkZgtnGU3uBbo5qjIUllJcxC47iyFbBptSG76eUvo1JJ54fphZPz2G5T9KA3gA%2BJIUmBhND7P%2FGoqAo9xPl5GF32j9JcXI8KBvriOYWaoKNMghLG9hozJl%2FYaG90%2FQKYwknmBoznSJsQVW0r4fcTeBNGfgjT0DqNuoNLAQYZY15RpBuVKJmugZTHXaeFXxdbfaXAYNPI%2BLIP4zbsgG53AV6fAigbr0BB0LLHUxbtbY4af%2Fu%2FFuxyj80ccttEXAkMz5UHQJhFo2QMrFjzY0zIAW3G%2B2SjgUXl84rS2i0MgBLzv5MkLzVj5cskfoe9eNP2VvxU0b5vYDWIi4sE5cDKP5t03lh6cQPmmVnPhTnL0pa%2FCjDS5%2F7d1cA5h0s9IbYhDP82n2KAWT6Nn%2FjX9RY2BxfifuuXxUbSHS2BYY7KoIxPOkgjJ%2BN6LLxZh%2BP8TSVNneuH8ahJDTGlSJ7UceJMU1Lt5dh%2BkLAiF4TDo79XLBjqkAe38%2BupNcBw33jrStRDYAeS1oYUuiAZUjY2pvgIFojMuyDLBY1WEhRjaiY0am6930oiP4weIOB%2BKaa8NLOFVOEUIuIdEr1RkRzLNpA5aiQEOQ6GS5%2FNBXAjQQeOdlrilT1J3m2VlK6yij%2FSnjoSKxzArMjQrNskR89qrdmfsX%2BJz7v3%2BgQ4Mxn2VJURV5yii25pXSI6uthQAM2OcTAtfzMPsJfJQ&X-Amz-Signature=845feb4ffcb2a49228a3fc2abd576eb8b5c1afd8c8de34facbc7da6862ebcd05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
