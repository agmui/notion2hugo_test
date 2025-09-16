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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUUHGY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICAU6YXiQF7FgyMCKEHvDXsnmq%2Bsp2SHZNe2biP6vSmDAiBSkElQu4pdOhC4mHVhB%2FCiiB5%2F%2Fk47Q7gJa%2F9XDoD7eCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T15Nz7edHJHIOJmKtwDs4npS8HXAjqINVBSq5fnRyxlL4%2BWZuU9Hf%2FF9j9dZ%2FG9owlNr8xBQTKPsOv9dWOV4HmMtU1c6XE4CqLSX3WlGPU483uxfT6cSWNjYCASFh2bSgZbKCBQWEZ08hwV%2F6%2FL4cq3ThaJaGZ5GJmYoQK7U5wFUBZFLQhjhi3rhPKYI7sN0%2FQ7SFmnwBvhErR4Y%2FlxMwKHxbU7ckjQwvS5QFtyfyrLFr1bj%2Ftza9hvtMtFJUTcxW5%2FDwnIQ3Fm%2F5xw5srJChEOilrlfB9wBqRv2h3W6ZU%2ByJQ4xopUflJ%2BIJdLjpA%2BvF2V163Pbzg6MtvD%2B4e9nNFGy8l37mSil8DtWe7k2FGf%2FTQba3cVeA60bZiWfghzosS8yOlIz04h2ejza65uq00ypcVaN4eahJSJPE96UE8RXcBHcvUPUXdtlncMBs6vnS47ZtT6XifXotvMZCkpXxVzS4yvPCTQwbEP9YYmdL5WKanFXOtPCSXRRYMZ%2BssUnUOQmPoVyHF9u868FiIBi6iUBlbOB7M38I4Myn6vPUiVkp5fvLm38fnLH4OmhnYSTEJI8DORms2Yc2Ywrb9tIifWTOZ4N5rwEE8XGxowTClISzT%2BLh6mePATQsWFJgGAnqJIgtzTriDlLSww7%2B%2BixgY6pgGhaqvAXI17ZWzUF5h%2Bery%2F%2B81jLGs3cY2FuLC1j7pd2D9x5Y9AcFhY%2FhtUzxX5jAbwWXJgqr88YUM4%2BJf%2BkrCbetPwD2tP4n12bHHBCkTAlF%2B1E3dcCgsR1uB4OGbj8F7izodwoyR9EodYCIs2xYG6d%2FiYwgLt2HgVUHXKhgR%2FOT9qEfo4WG%2BNydPhAsVtmTg1zkxk%2FL4PqtEVBclKOzix614QbuUn&X-Amz-Signature=bf01fc4cc389d64fb2d826149ddb56a9bc116898712c5916ac60bd26ae2a3c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUUHGY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICAU6YXiQF7FgyMCKEHvDXsnmq%2Bsp2SHZNe2biP6vSmDAiBSkElQu4pdOhC4mHVhB%2FCiiB5%2F%2Fk47Q7gJa%2F9XDoD7eCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T15Nz7edHJHIOJmKtwDs4npS8HXAjqINVBSq5fnRyxlL4%2BWZuU9Hf%2FF9j9dZ%2FG9owlNr8xBQTKPsOv9dWOV4HmMtU1c6XE4CqLSX3WlGPU483uxfT6cSWNjYCASFh2bSgZbKCBQWEZ08hwV%2F6%2FL4cq3ThaJaGZ5GJmYoQK7U5wFUBZFLQhjhi3rhPKYI7sN0%2FQ7SFmnwBvhErR4Y%2FlxMwKHxbU7ckjQwvS5QFtyfyrLFr1bj%2Ftza9hvtMtFJUTcxW5%2FDwnIQ3Fm%2F5xw5srJChEOilrlfB9wBqRv2h3W6ZU%2ByJQ4xopUflJ%2BIJdLjpA%2BvF2V163Pbzg6MtvD%2B4e9nNFGy8l37mSil8DtWe7k2FGf%2FTQba3cVeA60bZiWfghzosS8yOlIz04h2ejza65uq00ypcVaN4eahJSJPE96UE8RXcBHcvUPUXdtlncMBs6vnS47ZtT6XifXotvMZCkpXxVzS4yvPCTQwbEP9YYmdL5WKanFXOtPCSXRRYMZ%2BssUnUOQmPoVyHF9u868FiIBi6iUBlbOB7M38I4Myn6vPUiVkp5fvLm38fnLH4OmhnYSTEJI8DORms2Yc2Ywrb9tIifWTOZ4N5rwEE8XGxowTClISzT%2BLh6mePATQsWFJgGAnqJIgtzTriDlLSww7%2B%2BixgY6pgGhaqvAXI17ZWzUF5h%2Bery%2F%2B81jLGs3cY2FuLC1j7pd2D9x5Y9AcFhY%2FhtUzxX5jAbwWXJgqr88YUM4%2BJf%2BkrCbetPwD2tP4n12bHHBCkTAlF%2B1E3dcCgsR1uB4OGbj8F7izodwoyR9EodYCIs2xYG6d%2FiYwgLt2HgVUHXKhgR%2FOT9qEfo4WG%2BNydPhAsVtmTg1zkxk%2FL4PqtEVBclKOzix614QbuUn&X-Amz-Signature=44d186fba5adef44adb4c6e0c10d4edf36659b2f72120b2eba97a84f5de66694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUUHGY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICAU6YXiQF7FgyMCKEHvDXsnmq%2Bsp2SHZNe2biP6vSmDAiBSkElQu4pdOhC4mHVhB%2FCiiB5%2F%2Fk47Q7gJa%2F9XDoD7eCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T15Nz7edHJHIOJmKtwDs4npS8HXAjqINVBSq5fnRyxlL4%2BWZuU9Hf%2FF9j9dZ%2FG9owlNr8xBQTKPsOv9dWOV4HmMtU1c6XE4CqLSX3WlGPU483uxfT6cSWNjYCASFh2bSgZbKCBQWEZ08hwV%2F6%2FL4cq3ThaJaGZ5GJmYoQK7U5wFUBZFLQhjhi3rhPKYI7sN0%2FQ7SFmnwBvhErR4Y%2FlxMwKHxbU7ckjQwvS5QFtyfyrLFr1bj%2Ftza9hvtMtFJUTcxW5%2FDwnIQ3Fm%2F5xw5srJChEOilrlfB9wBqRv2h3W6ZU%2ByJQ4xopUflJ%2BIJdLjpA%2BvF2V163Pbzg6MtvD%2B4e9nNFGy8l37mSil8DtWe7k2FGf%2FTQba3cVeA60bZiWfghzosS8yOlIz04h2ejza65uq00ypcVaN4eahJSJPE96UE8RXcBHcvUPUXdtlncMBs6vnS47ZtT6XifXotvMZCkpXxVzS4yvPCTQwbEP9YYmdL5WKanFXOtPCSXRRYMZ%2BssUnUOQmPoVyHF9u868FiIBi6iUBlbOB7M38I4Myn6vPUiVkp5fvLm38fnLH4OmhnYSTEJI8DORms2Yc2Ywrb9tIifWTOZ4N5rwEE8XGxowTClISzT%2BLh6mePATQsWFJgGAnqJIgtzTriDlLSww7%2B%2BixgY6pgGhaqvAXI17ZWzUF5h%2Bery%2F%2B81jLGs3cY2FuLC1j7pd2D9x5Y9AcFhY%2FhtUzxX5jAbwWXJgqr88YUM4%2BJf%2BkrCbetPwD2tP4n12bHHBCkTAlF%2B1E3dcCgsR1uB4OGbj8F7izodwoyR9EodYCIs2xYG6d%2FiYwgLt2HgVUHXKhgR%2FOT9qEfo4WG%2BNydPhAsVtmTg1zkxk%2FL4PqtEVBclKOzix614QbuUn&X-Amz-Signature=3115f054a589b4a731c9f30cde6f3c33ca9052e0794d6f704a67a0b750fc8079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUUHGY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICAU6YXiQF7FgyMCKEHvDXsnmq%2Bsp2SHZNe2biP6vSmDAiBSkElQu4pdOhC4mHVhB%2FCiiB5%2F%2Fk47Q7gJa%2F9XDoD7eCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T15Nz7edHJHIOJmKtwDs4npS8HXAjqINVBSq5fnRyxlL4%2BWZuU9Hf%2FF9j9dZ%2FG9owlNr8xBQTKPsOv9dWOV4HmMtU1c6XE4CqLSX3WlGPU483uxfT6cSWNjYCASFh2bSgZbKCBQWEZ08hwV%2F6%2FL4cq3ThaJaGZ5GJmYoQK7U5wFUBZFLQhjhi3rhPKYI7sN0%2FQ7SFmnwBvhErR4Y%2FlxMwKHxbU7ckjQwvS5QFtyfyrLFr1bj%2Ftza9hvtMtFJUTcxW5%2FDwnIQ3Fm%2F5xw5srJChEOilrlfB9wBqRv2h3W6ZU%2ByJQ4xopUflJ%2BIJdLjpA%2BvF2V163Pbzg6MtvD%2B4e9nNFGy8l37mSil8DtWe7k2FGf%2FTQba3cVeA60bZiWfghzosS8yOlIz04h2ejza65uq00ypcVaN4eahJSJPE96UE8RXcBHcvUPUXdtlncMBs6vnS47ZtT6XifXotvMZCkpXxVzS4yvPCTQwbEP9YYmdL5WKanFXOtPCSXRRYMZ%2BssUnUOQmPoVyHF9u868FiIBi6iUBlbOB7M38I4Myn6vPUiVkp5fvLm38fnLH4OmhnYSTEJI8DORms2Yc2Ywrb9tIifWTOZ4N5rwEE8XGxowTClISzT%2BLh6mePATQsWFJgGAnqJIgtzTriDlLSww7%2B%2BixgY6pgGhaqvAXI17ZWzUF5h%2Bery%2F%2B81jLGs3cY2FuLC1j7pd2D9x5Y9AcFhY%2FhtUzxX5jAbwWXJgqr88YUM4%2BJf%2BkrCbetPwD2tP4n12bHHBCkTAlF%2B1E3dcCgsR1uB4OGbj8F7izodwoyR9EodYCIs2xYG6d%2FiYwgLt2HgVUHXKhgR%2FOT9qEfo4WG%2BNydPhAsVtmTg1zkxk%2FL4PqtEVBclKOzix614QbuUn&X-Amz-Signature=c7d2ce61976f257ecca88a4ccbae677debc3d182b98ed984086a29f6cce5dd00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUUHGY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICAU6YXiQF7FgyMCKEHvDXsnmq%2Bsp2SHZNe2biP6vSmDAiBSkElQu4pdOhC4mHVhB%2FCiiB5%2F%2Fk47Q7gJa%2F9XDoD7eCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T15Nz7edHJHIOJmKtwDs4npS8HXAjqINVBSq5fnRyxlL4%2BWZuU9Hf%2FF9j9dZ%2FG9owlNr8xBQTKPsOv9dWOV4HmMtU1c6XE4CqLSX3WlGPU483uxfT6cSWNjYCASFh2bSgZbKCBQWEZ08hwV%2F6%2FL4cq3ThaJaGZ5GJmYoQK7U5wFUBZFLQhjhi3rhPKYI7sN0%2FQ7SFmnwBvhErR4Y%2FlxMwKHxbU7ckjQwvS5QFtyfyrLFr1bj%2Ftza9hvtMtFJUTcxW5%2FDwnIQ3Fm%2F5xw5srJChEOilrlfB9wBqRv2h3W6ZU%2ByJQ4xopUflJ%2BIJdLjpA%2BvF2V163Pbzg6MtvD%2B4e9nNFGy8l37mSil8DtWe7k2FGf%2FTQba3cVeA60bZiWfghzosS8yOlIz04h2ejza65uq00ypcVaN4eahJSJPE96UE8RXcBHcvUPUXdtlncMBs6vnS47ZtT6XifXotvMZCkpXxVzS4yvPCTQwbEP9YYmdL5WKanFXOtPCSXRRYMZ%2BssUnUOQmPoVyHF9u868FiIBi6iUBlbOB7M38I4Myn6vPUiVkp5fvLm38fnLH4OmhnYSTEJI8DORms2Yc2Ywrb9tIifWTOZ4N5rwEE8XGxowTClISzT%2BLh6mePATQsWFJgGAnqJIgtzTriDlLSww7%2B%2BixgY6pgGhaqvAXI17ZWzUF5h%2Bery%2F%2B81jLGs3cY2FuLC1j7pd2D9x5Y9AcFhY%2FhtUzxX5jAbwWXJgqr88YUM4%2BJf%2BkrCbetPwD2tP4n12bHHBCkTAlF%2B1E3dcCgsR1uB4OGbj8F7izodwoyR9EodYCIs2xYG6d%2FiYwgLt2HgVUHXKhgR%2FOT9qEfo4WG%2BNydPhAsVtmTg1zkxk%2FL4PqtEVBclKOzix614QbuUn&X-Amz-Signature=c550733c0d01d9880c43397887ea72cf3aba68617be5ecc2f31cd2623a67e1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUUHGY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICAU6YXiQF7FgyMCKEHvDXsnmq%2Bsp2SHZNe2biP6vSmDAiBSkElQu4pdOhC4mHVhB%2FCiiB5%2F%2Fk47Q7gJa%2F9XDoD7eCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T15Nz7edHJHIOJmKtwDs4npS8HXAjqINVBSq5fnRyxlL4%2BWZuU9Hf%2FF9j9dZ%2FG9owlNr8xBQTKPsOv9dWOV4HmMtU1c6XE4CqLSX3WlGPU483uxfT6cSWNjYCASFh2bSgZbKCBQWEZ08hwV%2F6%2FL4cq3ThaJaGZ5GJmYoQK7U5wFUBZFLQhjhi3rhPKYI7sN0%2FQ7SFmnwBvhErR4Y%2FlxMwKHxbU7ckjQwvS5QFtyfyrLFr1bj%2Ftza9hvtMtFJUTcxW5%2FDwnIQ3Fm%2F5xw5srJChEOilrlfB9wBqRv2h3W6ZU%2ByJQ4xopUflJ%2BIJdLjpA%2BvF2V163Pbzg6MtvD%2B4e9nNFGy8l37mSil8DtWe7k2FGf%2FTQba3cVeA60bZiWfghzosS8yOlIz04h2ejza65uq00ypcVaN4eahJSJPE96UE8RXcBHcvUPUXdtlncMBs6vnS47ZtT6XifXotvMZCkpXxVzS4yvPCTQwbEP9YYmdL5WKanFXOtPCSXRRYMZ%2BssUnUOQmPoVyHF9u868FiIBi6iUBlbOB7M38I4Myn6vPUiVkp5fvLm38fnLH4OmhnYSTEJI8DORms2Yc2Ywrb9tIifWTOZ4N5rwEE8XGxowTClISzT%2BLh6mePATQsWFJgGAnqJIgtzTriDlLSww7%2B%2BixgY6pgGhaqvAXI17ZWzUF5h%2Bery%2F%2B81jLGs3cY2FuLC1j7pd2D9x5Y9AcFhY%2FhtUzxX5jAbwWXJgqr88YUM4%2BJf%2BkrCbetPwD2tP4n12bHHBCkTAlF%2B1E3dcCgsR1uB4OGbj8F7izodwoyR9EodYCIs2xYG6d%2FiYwgLt2HgVUHXKhgR%2FOT9qEfo4WG%2BNydPhAsVtmTg1zkxk%2FL4PqtEVBclKOzix614QbuUn&X-Amz-Signature=bff5f3502e8cba271d17d525c5290ae0dad8ae5147fc5ffa2969a0531ebc8ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUUHGY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICAU6YXiQF7FgyMCKEHvDXsnmq%2Bsp2SHZNe2biP6vSmDAiBSkElQu4pdOhC4mHVhB%2FCiiB5%2F%2Fk47Q7gJa%2F9XDoD7eCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T15Nz7edHJHIOJmKtwDs4npS8HXAjqINVBSq5fnRyxlL4%2BWZuU9Hf%2FF9j9dZ%2FG9owlNr8xBQTKPsOv9dWOV4HmMtU1c6XE4CqLSX3WlGPU483uxfT6cSWNjYCASFh2bSgZbKCBQWEZ08hwV%2F6%2FL4cq3ThaJaGZ5GJmYoQK7U5wFUBZFLQhjhi3rhPKYI7sN0%2FQ7SFmnwBvhErR4Y%2FlxMwKHxbU7ckjQwvS5QFtyfyrLFr1bj%2Ftza9hvtMtFJUTcxW5%2FDwnIQ3Fm%2F5xw5srJChEOilrlfB9wBqRv2h3W6ZU%2ByJQ4xopUflJ%2BIJdLjpA%2BvF2V163Pbzg6MtvD%2B4e9nNFGy8l37mSil8DtWe7k2FGf%2FTQba3cVeA60bZiWfghzosS8yOlIz04h2ejza65uq00ypcVaN4eahJSJPE96UE8RXcBHcvUPUXdtlncMBs6vnS47ZtT6XifXotvMZCkpXxVzS4yvPCTQwbEP9YYmdL5WKanFXOtPCSXRRYMZ%2BssUnUOQmPoVyHF9u868FiIBi6iUBlbOB7M38I4Myn6vPUiVkp5fvLm38fnLH4OmhnYSTEJI8DORms2Yc2Ywrb9tIifWTOZ4N5rwEE8XGxowTClISzT%2BLh6mePATQsWFJgGAnqJIgtzTriDlLSww7%2B%2BixgY6pgGhaqvAXI17ZWzUF5h%2Bery%2F%2B81jLGs3cY2FuLC1j7pd2D9x5Y9AcFhY%2FhtUzxX5jAbwWXJgqr88YUM4%2BJf%2BkrCbetPwD2tP4n12bHHBCkTAlF%2B1E3dcCgsR1uB4OGbj8F7izodwoyR9EodYCIs2xYG6d%2FiYwgLt2HgVUHXKhgR%2FOT9qEfo4WG%2BNydPhAsVtmTg1zkxk%2FL4PqtEVBclKOzix614QbuUn&X-Amz-Signature=69088d5fba9b9db498d32262d563b5dab00900c51525d3363b05cb8daef46ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUUHGY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICAU6YXiQF7FgyMCKEHvDXsnmq%2Bsp2SHZNe2biP6vSmDAiBSkElQu4pdOhC4mHVhB%2FCiiB5%2F%2Fk47Q7gJa%2F9XDoD7eCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T15Nz7edHJHIOJmKtwDs4npS8HXAjqINVBSq5fnRyxlL4%2BWZuU9Hf%2FF9j9dZ%2FG9owlNr8xBQTKPsOv9dWOV4HmMtU1c6XE4CqLSX3WlGPU483uxfT6cSWNjYCASFh2bSgZbKCBQWEZ08hwV%2F6%2FL4cq3ThaJaGZ5GJmYoQK7U5wFUBZFLQhjhi3rhPKYI7sN0%2FQ7SFmnwBvhErR4Y%2FlxMwKHxbU7ckjQwvS5QFtyfyrLFr1bj%2Ftza9hvtMtFJUTcxW5%2FDwnIQ3Fm%2F5xw5srJChEOilrlfB9wBqRv2h3W6ZU%2ByJQ4xopUflJ%2BIJdLjpA%2BvF2V163Pbzg6MtvD%2B4e9nNFGy8l37mSil8DtWe7k2FGf%2FTQba3cVeA60bZiWfghzosS8yOlIz04h2ejza65uq00ypcVaN4eahJSJPE96UE8RXcBHcvUPUXdtlncMBs6vnS47ZtT6XifXotvMZCkpXxVzS4yvPCTQwbEP9YYmdL5WKanFXOtPCSXRRYMZ%2BssUnUOQmPoVyHF9u868FiIBi6iUBlbOB7M38I4Myn6vPUiVkp5fvLm38fnLH4OmhnYSTEJI8DORms2Yc2Ywrb9tIifWTOZ4N5rwEE8XGxowTClISzT%2BLh6mePATQsWFJgGAnqJIgtzTriDlLSww7%2B%2BixgY6pgGhaqvAXI17ZWzUF5h%2Bery%2F%2B81jLGs3cY2FuLC1j7pd2D9x5Y9AcFhY%2FhtUzxX5jAbwWXJgqr88YUM4%2BJf%2BkrCbetPwD2tP4n12bHHBCkTAlF%2B1E3dcCgsR1uB4OGbj8F7izodwoyR9EodYCIs2xYG6d%2FiYwgLt2HgVUHXKhgR%2FOT9qEfo4WG%2BNydPhAsVtmTg1zkxk%2FL4PqtEVBclKOzix614QbuUn&X-Amz-Signature=959097a193a88a3ecc5b0255eab81cec4845148141f4943fc22a145bffc0d1af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUUHGY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICAU6YXiQF7FgyMCKEHvDXsnmq%2Bsp2SHZNe2biP6vSmDAiBSkElQu4pdOhC4mHVhB%2FCiiB5%2F%2Fk47Q7gJa%2F9XDoD7eCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T15Nz7edHJHIOJmKtwDs4npS8HXAjqINVBSq5fnRyxlL4%2BWZuU9Hf%2FF9j9dZ%2FG9owlNr8xBQTKPsOv9dWOV4HmMtU1c6XE4CqLSX3WlGPU483uxfT6cSWNjYCASFh2bSgZbKCBQWEZ08hwV%2F6%2FL4cq3ThaJaGZ5GJmYoQK7U5wFUBZFLQhjhi3rhPKYI7sN0%2FQ7SFmnwBvhErR4Y%2FlxMwKHxbU7ckjQwvS5QFtyfyrLFr1bj%2Ftza9hvtMtFJUTcxW5%2FDwnIQ3Fm%2F5xw5srJChEOilrlfB9wBqRv2h3W6ZU%2ByJQ4xopUflJ%2BIJdLjpA%2BvF2V163Pbzg6MtvD%2B4e9nNFGy8l37mSil8DtWe7k2FGf%2FTQba3cVeA60bZiWfghzosS8yOlIz04h2ejza65uq00ypcVaN4eahJSJPE96UE8RXcBHcvUPUXdtlncMBs6vnS47ZtT6XifXotvMZCkpXxVzS4yvPCTQwbEP9YYmdL5WKanFXOtPCSXRRYMZ%2BssUnUOQmPoVyHF9u868FiIBi6iUBlbOB7M38I4Myn6vPUiVkp5fvLm38fnLH4OmhnYSTEJI8DORms2Yc2Ywrb9tIifWTOZ4N5rwEE8XGxowTClISzT%2BLh6mePATQsWFJgGAnqJIgtzTriDlLSww7%2B%2BixgY6pgGhaqvAXI17ZWzUF5h%2Bery%2F%2B81jLGs3cY2FuLC1j7pd2D9x5Y9AcFhY%2FhtUzxX5jAbwWXJgqr88YUM4%2BJf%2BkrCbetPwD2tP4n12bHHBCkTAlF%2B1E3dcCgsR1uB4OGbj8F7izodwoyR9EodYCIs2xYG6d%2FiYwgLt2HgVUHXKhgR%2FOT9qEfo4WG%2BNydPhAsVtmTg1zkxk%2FL4PqtEVBclKOzix614QbuUn&X-Amz-Signature=c7d2156c536a658697844aa714b92beabd27f6065fa77beb836e4c59f18f1b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YBUUHGY%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICAU6YXiQF7FgyMCKEHvDXsnmq%2Bsp2SHZNe2biP6vSmDAiBSkElQu4pdOhC4mHVhB%2FCiiB5%2F%2Fk47Q7gJa%2F9XDoD7eCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6T15Nz7edHJHIOJmKtwDs4npS8HXAjqINVBSq5fnRyxlL4%2BWZuU9Hf%2FF9j9dZ%2FG9owlNr8xBQTKPsOv9dWOV4HmMtU1c6XE4CqLSX3WlGPU483uxfT6cSWNjYCASFh2bSgZbKCBQWEZ08hwV%2F6%2FL4cq3ThaJaGZ5GJmYoQK7U5wFUBZFLQhjhi3rhPKYI7sN0%2FQ7SFmnwBvhErR4Y%2FlxMwKHxbU7ckjQwvS5QFtyfyrLFr1bj%2Ftza9hvtMtFJUTcxW5%2FDwnIQ3Fm%2F5xw5srJChEOilrlfB9wBqRv2h3W6ZU%2ByJQ4xopUflJ%2BIJdLjpA%2BvF2V163Pbzg6MtvD%2B4e9nNFGy8l37mSil8DtWe7k2FGf%2FTQba3cVeA60bZiWfghzosS8yOlIz04h2ejza65uq00ypcVaN4eahJSJPE96UE8RXcBHcvUPUXdtlncMBs6vnS47ZtT6XifXotvMZCkpXxVzS4yvPCTQwbEP9YYmdL5WKanFXOtPCSXRRYMZ%2BssUnUOQmPoVyHF9u868FiIBi6iUBlbOB7M38I4Myn6vPUiVkp5fvLm38fnLH4OmhnYSTEJI8DORms2Yc2Ywrb9tIifWTOZ4N5rwEE8XGxowTClISzT%2BLh6mePATQsWFJgGAnqJIgtzTriDlLSww7%2B%2BixgY6pgGhaqvAXI17ZWzUF5h%2Bery%2F%2B81jLGs3cY2FuLC1j7pd2D9x5Y9AcFhY%2FhtUzxX5jAbwWXJgqr88YUM4%2BJf%2BkrCbetPwD2tP4n12bHHBCkTAlF%2B1E3dcCgsR1uB4OGbj8F7izodwoyR9EodYCIs2xYG6d%2FiYwgLt2HgVUHXKhgR%2FOT9qEfo4WG%2BNydPhAsVtmTg1zkxk%2FL4PqtEVBclKOzix614QbuUn&X-Amz-Signature=cbe659e13640f48e86afa71654bfda0570fa19091f1d343860980e91951c212c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4YVBG63%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDFP2Ii8f1FpxgZfmgXwAfXdetivt2zMckFXJkyx7JBHAiEA05EYzr22Bz9%2FejwfW06EmUz0j7OO4YDOFEgdiLeW0t0qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOm6NUOhk9nUpyTQWCrcAwHXgVfm1A5A1oeGQHT6ZRfi6A8TI3d6%2FJC6ECXVNpgRckmRwI%2B59nLgfEyvvLSNznss%2B7d%2BsI1g2%2FOM%2BY9bBsRO71sKw%2Bf5xR0WDY7lXKEqKmAJHMrk5vrKt9rWgQP5HtymxTWDZYq6asneGe0Z6%2FKrvsBn8Nm1W003adAY2G3m%2FWyC%2BfdhBogw6JQ0QVlROdcdEq3cN1Y7bjluQvGXte2Fhrrkkym7HJP1x7Qx3E47LF%2FV%2BNwYav688E49JJHN0nIQY0tPMxxKF178W8G3YDfE9wGpdqbV8RyG0BP0UUP2UrKxP4dzXokqfJpTqq08XObvrE67dRXATVHSHEHTJYNiCXm5%2BKQSUgj7hx1tPkfy914MY6O5QGSjzl6AAhUsmxLtQ%2Bdol5VZQwsgnAjaBbNG0yE72%2BaLxKHpKepNxLmUD9x4DjhUPhO8GkliJ1%2FSpLc33F%2BvTJjQjV3%2BEBci1FzE7Z0JelyTRgonBKsVmdpanCV65EG%2FTcOQfInn2pGBs2WoT0%2FzXl0zPLvxsQK0y2p5UcX2lUorgjSVMwxkoQQMYaPYuVQtL4Yv0FiFbRGxxn6LK3wTLvUpbU3Mq%2FseNgAYO0r6bWIwDlWWJ6edhOl7R7sxI%2BSDhXGxPjRQMLDwosYGOqUBpUoHTcaDR9jZ%2BT%2BhHQu0e43IPfGjVtT6%2Fj7fcwx7GlkYmgiXA%2B5Zr4R7HznnyEaIUBSEKAPFQp8lnFAC5zGbjdy6fnq0MtMGhgWO4G8EMVp6tnyqT1h2Q%2B6soC%2B9rSvfKoQKpNml%2Br6MaGAcUQZKK6XOSIgM4gJfLY1xChC%2Ftoe6prJ106gDOoc8vL73su61ctuhzKmKlLq%2BMWyF5%2F%2B7MHGEHQxN&X-Amz-Signature=619446e53fbc48347b30e6a349856d69c2683bef9699d6d79375070419f64c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYOQTKD%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD7dGSGLBbltzWwadhseEkLhhZbE9q1%2BhzR7OOZmcwDwwIgIIRyxGuWNxInL8hUJsiBVR%2FeOyrmFwi1Ay%2BIgTFRBGYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2FhLPN%2FPXOhh2YYSrcA64Lhv%2FCu9wgVBpxX%2BBwxP%2BXH7f5xB1GnAaN%2FixBXvgM6iTSZW7kgB%2FxGmsvS5wtqr%2Fs%2BJTvJzboOA6RbOgC2j1SHwIji%2B5RplBJJijZZU3X5TLhlFZa93yZiqVd9c7v6ovw05OSe9LnHPnphCmJYq48JnIuhWWWznovcyJ37tiiw0teak2r5iWbQiHH4VMf6ex1dnlnwHtSFOMddUNW6JT7D%2FwFi5rC68QW1uOj62sPSV7HbDAuM%2B%2B09lqGeHCmpRyoGgrnLYrIvYSDRnSVBs3KUj0XJaprsd%2Bhm1V6Hk9UaQE3YtGMXeiDdo6STLCxBEzrz9IseuAiDzwwmbb%2FeDvXGOFrnAwCxUfKiVogseyQk%2Fwt8Yfrt%2FPPS0LGP4m8TCaX50lBKhslx7iW3X6x5ZRWl2Qca8gUvG%2F9WgO27yaOP7Wjvh7yDVKm4lwNVbBPEdJ3E495fknWCuhyIpYt5gUHGKce3EwWTouaBrfhzQ5f2JXcW533h9fvoOHcgMhVxbeQBnbgrfNKBzrWV4xuJMGb6GP9NUIuFQcEt4VDf0Q5P%2BJC6xzAnt1xVVwysYCgJAJZltvGHvO1V6lQzT94ODt9cj09d4qur4drCBfGrvq2rfxUOt2qQ%2F5%2BYIwwMKfvosYGOqUBFFeVKJfQLpBzfEo%2F%2FyJUrFp0aT9LGzdkM7yM4rY0lP52%2BbnG4ws77CRTZgfYnLj9vf%2F%2BJ87I7sV3yro6bFHCsGWk4H31qm2HQgsRT%2F8ptYtiLiyFsoUN1uqEdTSH86h%2BqTVXmO07c94v%2BREhX2V%2BZt7hqvEJaQWeE8UF9N0zrmCurH3oA1aXdWaEc33bFpVKtRSe0MI%2BUzMcu1iBSX%2Bps6fGopI5&X-Amz-Signature=bf585f51bebbd80264469b03cfd3879216546610a57ad34ff85f63b1986b0d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYOQTKD%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD7dGSGLBbltzWwadhseEkLhhZbE9q1%2BhzR7OOZmcwDwwIgIIRyxGuWNxInL8hUJsiBVR%2FeOyrmFwi1Ay%2BIgTFRBGYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2FhLPN%2FPXOhh2YYSrcA64Lhv%2FCu9wgVBpxX%2BBwxP%2BXH7f5xB1GnAaN%2FixBXvgM6iTSZW7kgB%2FxGmsvS5wtqr%2Fs%2BJTvJzboOA6RbOgC2j1SHwIji%2B5RplBJJijZZU3X5TLhlFZa93yZiqVd9c7v6ovw05OSe9LnHPnphCmJYq48JnIuhWWWznovcyJ37tiiw0teak2r5iWbQiHH4VMf6ex1dnlnwHtSFOMddUNW6JT7D%2FwFi5rC68QW1uOj62sPSV7HbDAuM%2B%2B09lqGeHCmpRyoGgrnLYrIvYSDRnSVBs3KUj0XJaprsd%2Bhm1V6Hk9UaQE3YtGMXeiDdo6STLCxBEzrz9IseuAiDzwwmbb%2FeDvXGOFrnAwCxUfKiVogseyQk%2Fwt8Yfrt%2FPPS0LGP4m8TCaX50lBKhslx7iW3X6x5ZRWl2Qca8gUvG%2F9WgO27yaOP7Wjvh7yDVKm4lwNVbBPEdJ3E495fknWCuhyIpYt5gUHGKce3EwWTouaBrfhzQ5f2JXcW533h9fvoOHcgMhVxbeQBnbgrfNKBzrWV4xuJMGb6GP9NUIuFQcEt4VDf0Q5P%2BJC6xzAnt1xVVwysYCgJAJZltvGHvO1V6lQzT94ODt9cj09d4qur4drCBfGrvq2rfxUOt2qQ%2F5%2BYIwwMKfvosYGOqUBFFeVKJfQLpBzfEo%2F%2FyJUrFp0aT9LGzdkM7yM4rY0lP52%2BbnG4ws77CRTZgfYnLj9vf%2F%2BJ87I7sV3yro6bFHCsGWk4H31qm2HQgsRT%2F8ptYtiLiyFsoUN1uqEdTSH86h%2BqTVXmO07c94v%2BREhX2V%2BZt7hqvEJaQWeE8UF9N0zrmCurH3oA1aXdWaEc33bFpVKtRSe0MI%2BUzMcu1iBSX%2Bps6fGopI5&X-Amz-Signature=b85b369a2991bc7f6f33bfa26c26face5f8ec42ffb580f7789e79d770c68b263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYOQTKD%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD7dGSGLBbltzWwadhseEkLhhZbE9q1%2BhzR7OOZmcwDwwIgIIRyxGuWNxInL8hUJsiBVR%2FeOyrmFwi1Ay%2BIgTFRBGYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2FhLPN%2FPXOhh2YYSrcA64Lhv%2FCu9wgVBpxX%2BBwxP%2BXH7f5xB1GnAaN%2FixBXvgM6iTSZW7kgB%2FxGmsvS5wtqr%2Fs%2BJTvJzboOA6RbOgC2j1SHwIji%2B5RplBJJijZZU3X5TLhlFZa93yZiqVd9c7v6ovw05OSe9LnHPnphCmJYq48JnIuhWWWznovcyJ37tiiw0teak2r5iWbQiHH4VMf6ex1dnlnwHtSFOMddUNW6JT7D%2FwFi5rC68QW1uOj62sPSV7HbDAuM%2B%2B09lqGeHCmpRyoGgrnLYrIvYSDRnSVBs3KUj0XJaprsd%2Bhm1V6Hk9UaQE3YtGMXeiDdo6STLCxBEzrz9IseuAiDzwwmbb%2FeDvXGOFrnAwCxUfKiVogseyQk%2Fwt8Yfrt%2FPPS0LGP4m8TCaX50lBKhslx7iW3X6x5ZRWl2Qca8gUvG%2F9WgO27yaOP7Wjvh7yDVKm4lwNVbBPEdJ3E495fknWCuhyIpYt5gUHGKce3EwWTouaBrfhzQ5f2JXcW533h9fvoOHcgMhVxbeQBnbgrfNKBzrWV4xuJMGb6GP9NUIuFQcEt4VDf0Q5P%2BJC6xzAnt1xVVwysYCgJAJZltvGHvO1V6lQzT94ODt9cj09d4qur4drCBfGrvq2rfxUOt2qQ%2F5%2BYIwwMKfvosYGOqUBFFeVKJfQLpBzfEo%2F%2FyJUrFp0aT9LGzdkM7yM4rY0lP52%2BbnG4ws77CRTZgfYnLj9vf%2F%2BJ87I7sV3yro6bFHCsGWk4H31qm2HQgsRT%2F8ptYtiLiyFsoUN1uqEdTSH86h%2BqTVXmO07c94v%2BREhX2V%2BZt7hqvEJaQWeE8UF9N0zrmCurH3oA1aXdWaEc33bFpVKtRSe0MI%2BUzMcu1iBSX%2Bps6fGopI5&X-Amz-Signature=603f446694d4f6465ecef20a840848a2173f61cdd94624acb8bd424680098a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYOQTKD%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD7dGSGLBbltzWwadhseEkLhhZbE9q1%2BhzR7OOZmcwDwwIgIIRyxGuWNxInL8hUJsiBVR%2FeOyrmFwi1Ay%2BIgTFRBGYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2FhLPN%2FPXOhh2YYSrcA64Lhv%2FCu9wgVBpxX%2BBwxP%2BXH7f5xB1GnAaN%2FixBXvgM6iTSZW7kgB%2FxGmsvS5wtqr%2Fs%2BJTvJzboOA6RbOgC2j1SHwIji%2B5RplBJJijZZU3X5TLhlFZa93yZiqVd9c7v6ovw05OSe9LnHPnphCmJYq48JnIuhWWWznovcyJ37tiiw0teak2r5iWbQiHH4VMf6ex1dnlnwHtSFOMddUNW6JT7D%2FwFi5rC68QW1uOj62sPSV7HbDAuM%2B%2B09lqGeHCmpRyoGgrnLYrIvYSDRnSVBs3KUj0XJaprsd%2Bhm1V6Hk9UaQE3YtGMXeiDdo6STLCxBEzrz9IseuAiDzwwmbb%2FeDvXGOFrnAwCxUfKiVogseyQk%2Fwt8Yfrt%2FPPS0LGP4m8TCaX50lBKhslx7iW3X6x5ZRWl2Qca8gUvG%2F9WgO27yaOP7Wjvh7yDVKm4lwNVbBPEdJ3E495fknWCuhyIpYt5gUHGKce3EwWTouaBrfhzQ5f2JXcW533h9fvoOHcgMhVxbeQBnbgrfNKBzrWV4xuJMGb6GP9NUIuFQcEt4VDf0Q5P%2BJC6xzAnt1xVVwysYCgJAJZltvGHvO1V6lQzT94ODt9cj09d4qur4drCBfGrvq2rfxUOt2qQ%2F5%2BYIwwMKfvosYGOqUBFFeVKJfQLpBzfEo%2F%2FyJUrFp0aT9LGzdkM7yM4rY0lP52%2BbnG4ws77CRTZgfYnLj9vf%2F%2BJ87I7sV3yro6bFHCsGWk4H31qm2HQgsRT%2F8ptYtiLiyFsoUN1uqEdTSH86h%2BqTVXmO07c94v%2BREhX2V%2BZt7hqvEJaQWeE8UF9N0zrmCurH3oA1aXdWaEc33bFpVKtRSe0MI%2BUzMcu1iBSX%2Bps6fGopI5&X-Amz-Signature=7da0e9fb4c6f5684b71d5cc855c7cd2b9bd1fa140c635ce8a70a1b77f845755c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYOQTKD%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD7dGSGLBbltzWwadhseEkLhhZbE9q1%2BhzR7OOZmcwDwwIgIIRyxGuWNxInL8hUJsiBVR%2FeOyrmFwi1Ay%2BIgTFRBGYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2FhLPN%2FPXOhh2YYSrcA64Lhv%2FCu9wgVBpxX%2BBwxP%2BXH7f5xB1GnAaN%2FixBXvgM6iTSZW7kgB%2FxGmsvS5wtqr%2Fs%2BJTvJzboOA6RbOgC2j1SHwIji%2B5RplBJJijZZU3X5TLhlFZa93yZiqVd9c7v6ovw05OSe9LnHPnphCmJYq48JnIuhWWWznovcyJ37tiiw0teak2r5iWbQiHH4VMf6ex1dnlnwHtSFOMddUNW6JT7D%2FwFi5rC68QW1uOj62sPSV7HbDAuM%2B%2B09lqGeHCmpRyoGgrnLYrIvYSDRnSVBs3KUj0XJaprsd%2Bhm1V6Hk9UaQE3YtGMXeiDdo6STLCxBEzrz9IseuAiDzwwmbb%2FeDvXGOFrnAwCxUfKiVogseyQk%2Fwt8Yfrt%2FPPS0LGP4m8TCaX50lBKhslx7iW3X6x5ZRWl2Qca8gUvG%2F9WgO27yaOP7Wjvh7yDVKm4lwNVbBPEdJ3E495fknWCuhyIpYt5gUHGKce3EwWTouaBrfhzQ5f2JXcW533h9fvoOHcgMhVxbeQBnbgrfNKBzrWV4xuJMGb6GP9NUIuFQcEt4VDf0Q5P%2BJC6xzAnt1xVVwysYCgJAJZltvGHvO1V6lQzT94ODt9cj09d4qur4drCBfGrvq2rfxUOt2qQ%2F5%2BYIwwMKfvosYGOqUBFFeVKJfQLpBzfEo%2F%2FyJUrFp0aT9LGzdkM7yM4rY0lP52%2BbnG4ws77CRTZgfYnLj9vf%2F%2BJ87I7sV3yro6bFHCsGWk4H31qm2HQgsRT%2F8ptYtiLiyFsoUN1uqEdTSH86h%2BqTVXmO07c94v%2BREhX2V%2BZt7hqvEJaQWeE8UF9N0zrmCurH3oA1aXdWaEc33bFpVKtRSe0MI%2BUzMcu1iBSX%2Bps6fGopI5&X-Amz-Signature=c5ee3b9dc0495c3378f0bded0be1eada1477ba3f3c2917bcf8cfafcd32d62601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYOQTKD%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD7dGSGLBbltzWwadhseEkLhhZbE9q1%2BhzR7OOZmcwDwwIgIIRyxGuWNxInL8hUJsiBVR%2FeOyrmFwi1Ay%2BIgTFRBGYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2FhLPN%2FPXOhh2YYSrcA64Lhv%2FCu9wgVBpxX%2BBwxP%2BXH7f5xB1GnAaN%2FixBXvgM6iTSZW7kgB%2FxGmsvS5wtqr%2Fs%2BJTvJzboOA6RbOgC2j1SHwIji%2B5RplBJJijZZU3X5TLhlFZa93yZiqVd9c7v6ovw05OSe9LnHPnphCmJYq48JnIuhWWWznovcyJ37tiiw0teak2r5iWbQiHH4VMf6ex1dnlnwHtSFOMddUNW6JT7D%2FwFi5rC68QW1uOj62sPSV7HbDAuM%2B%2B09lqGeHCmpRyoGgrnLYrIvYSDRnSVBs3KUj0XJaprsd%2Bhm1V6Hk9UaQE3YtGMXeiDdo6STLCxBEzrz9IseuAiDzwwmbb%2FeDvXGOFrnAwCxUfKiVogseyQk%2Fwt8Yfrt%2FPPS0LGP4m8TCaX50lBKhslx7iW3X6x5ZRWl2Qca8gUvG%2F9WgO27yaOP7Wjvh7yDVKm4lwNVbBPEdJ3E495fknWCuhyIpYt5gUHGKce3EwWTouaBrfhzQ5f2JXcW533h9fvoOHcgMhVxbeQBnbgrfNKBzrWV4xuJMGb6GP9NUIuFQcEt4VDf0Q5P%2BJC6xzAnt1xVVwysYCgJAJZltvGHvO1V6lQzT94ODt9cj09d4qur4drCBfGrvq2rfxUOt2qQ%2F5%2BYIwwMKfvosYGOqUBFFeVKJfQLpBzfEo%2F%2FyJUrFp0aT9LGzdkM7yM4rY0lP52%2BbnG4ws77CRTZgfYnLj9vf%2F%2BJ87I7sV3yro6bFHCsGWk4H31qm2HQgsRT%2F8ptYtiLiyFsoUN1uqEdTSH86h%2BqTVXmO07c94v%2BREhX2V%2BZt7hqvEJaQWeE8UF9N0zrmCurH3oA1aXdWaEc33bFpVKtRSe0MI%2BUzMcu1iBSX%2Bps6fGopI5&X-Amz-Signature=6e37f8b2c682823d722320d585753a9c7696284644b575cf37435a0447fccb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYOQTKD%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD7dGSGLBbltzWwadhseEkLhhZbE9q1%2BhzR7OOZmcwDwwIgIIRyxGuWNxInL8hUJsiBVR%2FeOyrmFwi1Ay%2BIgTFRBGYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2FhLPN%2FPXOhh2YYSrcA64Lhv%2FCu9wgVBpxX%2BBwxP%2BXH7f5xB1GnAaN%2FixBXvgM6iTSZW7kgB%2FxGmsvS5wtqr%2Fs%2BJTvJzboOA6RbOgC2j1SHwIji%2B5RplBJJijZZU3X5TLhlFZa93yZiqVd9c7v6ovw05OSe9LnHPnphCmJYq48JnIuhWWWznovcyJ37tiiw0teak2r5iWbQiHH4VMf6ex1dnlnwHtSFOMddUNW6JT7D%2FwFi5rC68QW1uOj62sPSV7HbDAuM%2B%2B09lqGeHCmpRyoGgrnLYrIvYSDRnSVBs3KUj0XJaprsd%2Bhm1V6Hk9UaQE3YtGMXeiDdo6STLCxBEzrz9IseuAiDzwwmbb%2FeDvXGOFrnAwCxUfKiVogseyQk%2Fwt8Yfrt%2FPPS0LGP4m8TCaX50lBKhslx7iW3X6x5ZRWl2Qca8gUvG%2F9WgO27yaOP7Wjvh7yDVKm4lwNVbBPEdJ3E495fknWCuhyIpYt5gUHGKce3EwWTouaBrfhzQ5f2JXcW533h9fvoOHcgMhVxbeQBnbgrfNKBzrWV4xuJMGb6GP9NUIuFQcEt4VDf0Q5P%2BJC6xzAnt1xVVwysYCgJAJZltvGHvO1V6lQzT94ODt9cj09d4qur4drCBfGrvq2rfxUOt2qQ%2F5%2BYIwwMKfvosYGOqUBFFeVKJfQLpBzfEo%2F%2FyJUrFp0aT9LGzdkM7yM4rY0lP52%2BbnG4ws77CRTZgfYnLj9vf%2F%2BJ87I7sV3yro6bFHCsGWk4H31qm2HQgsRT%2F8ptYtiLiyFsoUN1uqEdTSH86h%2BqTVXmO07c94v%2BREhX2V%2BZt7hqvEJaQWeE8UF9N0zrmCurH3oA1aXdWaEc33bFpVKtRSe0MI%2BUzMcu1iBSX%2Bps6fGopI5&X-Amz-Signature=148acbbcb6d9fc76a287e0ef7a0b9c7b12cbb6a734c773507d85a7fe1018a099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYOQTKD%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD7dGSGLBbltzWwadhseEkLhhZbE9q1%2BhzR7OOZmcwDwwIgIIRyxGuWNxInL8hUJsiBVR%2FeOyrmFwi1Ay%2BIgTFRBGYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2FhLPN%2FPXOhh2YYSrcA64Lhv%2FCu9wgVBpxX%2BBwxP%2BXH7f5xB1GnAaN%2FixBXvgM6iTSZW7kgB%2FxGmsvS5wtqr%2Fs%2BJTvJzboOA6RbOgC2j1SHwIji%2B5RplBJJijZZU3X5TLhlFZa93yZiqVd9c7v6ovw05OSe9LnHPnphCmJYq48JnIuhWWWznovcyJ37tiiw0teak2r5iWbQiHH4VMf6ex1dnlnwHtSFOMddUNW6JT7D%2FwFi5rC68QW1uOj62sPSV7HbDAuM%2B%2B09lqGeHCmpRyoGgrnLYrIvYSDRnSVBs3KUj0XJaprsd%2Bhm1V6Hk9UaQE3YtGMXeiDdo6STLCxBEzrz9IseuAiDzwwmbb%2FeDvXGOFrnAwCxUfKiVogseyQk%2Fwt8Yfrt%2FPPS0LGP4m8TCaX50lBKhslx7iW3X6x5ZRWl2Qca8gUvG%2F9WgO27yaOP7Wjvh7yDVKm4lwNVbBPEdJ3E495fknWCuhyIpYt5gUHGKce3EwWTouaBrfhzQ5f2JXcW533h9fvoOHcgMhVxbeQBnbgrfNKBzrWV4xuJMGb6GP9NUIuFQcEt4VDf0Q5P%2BJC6xzAnt1xVVwysYCgJAJZltvGHvO1V6lQzT94ODt9cj09d4qur4drCBfGrvq2rfxUOt2qQ%2F5%2BYIwwMKfvosYGOqUBFFeVKJfQLpBzfEo%2F%2FyJUrFp0aT9LGzdkM7yM4rY0lP52%2BbnG4ws77CRTZgfYnLj9vf%2F%2BJ87I7sV3yro6bFHCsGWk4H31qm2HQgsRT%2F8ptYtiLiyFsoUN1uqEdTSH86h%2BqTVXmO07c94v%2BREhX2V%2BZt7hqvEJaQWeE8UF9N0zrmCurH3oA1aXdWaEc33bFpVKtRSe0MI%2BUzMcu1iBSX%2Bps6fGopI5&X-Amz-Signature=0a68997d09923ce0c0fadbb7fe4a995133b4d0a48e5fc58703f7ae4174bce9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYOQTKD%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD7dGSGLBbltzWwadhseEkLhhZbE9q1%2BhzR7OOZmcwDwwIgIIRyxGuWNxInL8hUJsiBVR%2FeOyrmFwi1Ay%2BIgTFRBGYqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6%2FhLPN%2FPXOhh2YYSrcA64Lhv%2FCu9wgVBpxX%2BBwxP%2BXH7f5xB1GnAaN%2FixBXvgM6iTSZW7kgB%2FxGmsvS5wtqr%2Fs%2BJTvJzboOA6RbOgC2j1SHwIji%2B5RplBJJijZZU3X5TLhlFZa93yZiqVd9c7v6ovw05OSe9LnHPnphCmJYq48JnIuhWWWznovcyJ37tiiw0teak2r5iWbQiHH4VMf6ex1dnlnwHtSFOMddUNW6JT7D%2FwFi5rC68QW1uOj62sPSV7HbDAuM%2B%2B09lqGeHCmpRyoGgrnLYrIvYSDRnSVBs3KUj0XJaprsd%2Bhm1V6Hk9UaQE3YtGMXeiDdo6STLCxBEzrz9IseuAiDzwwmbb%2FeDvXGOFrnAwCxUfKiVogseyQk%2Fwt8Yfrt%2FPPS0LGP4m8TCaX50lBKhslx7iW3X6x5ZRWl2Qca8gUvG%2F9WgO27yaOP7Wjvh7yDVKm4lwNVbBPEdJ3E495fknWCuhyIpYt5gUHGKce3EwWTouaBrfhzQ5f2JXcW533h9fvoOHcgMhVxbeQBnbgrfNKBzrWV4xuJMGb6GP9NUIuFQcEt4VDf0Q5P%2BJC6xzAnt1xVVwysYCgJAJZltvGHvO1V6lQzT94ODt9cj09d4qur4drCBfGrvq2rfxUOt2qQ%2F5%2BYIwwMKfvosYGOqUBFFeVKJfQLpBzfEo%2F%2FyJUrFp0aT9LGzdkM7yM4rY0lP52%2BbnG4ws77CRTZgfYnLj9vf%2F%2BJ87I7sV3yro6bFHCsGWk4H31qm2HQgsRT%2F8ptYtiLiyFsoUN1uqEdTSH86h%2BqTVXmO07c94v%2BREhX2V%2BZt7hqvEJaQWeE8UF9N0zrmCurH3oA1aXdWaEc33bFpVKtRSe0MI%2BUzMcu1iBSX%2Bps6fGopI5&X-Amz-Signature=61d012b3544a0242d1e7e6e5207a6306775dd56fd4633c5528a55e24cf41ba98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
