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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSIUBON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFUclOhyNiy9Oy0MtiM9PR6Fx6u1ChZPMZELXbJ%2FY42MAiBFDiaMY9FxlQ3sBa3t0Nxnyho2cuzhjcPoXBcIPR8GfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMwNXkvuZ3XT7Npm%2F3KtwDcJLc6rEliKKw4L5m6x%2FdMTzBOHbjwNfLVfXD%2BZoqyYwacAq8JVAfX0Y%2B5p1tT0583Ufoap5uw%2FzqphIzFYfu9hrbmYZQOawsRvNi0SW4Of4otpW66AEQGa%2BYuDg4WD0IStB%2BbRDirviINuu9POioLs%2BT2fT4531Thz5ZOSEPrmeQkLpg7XhDTlCCREgtkw8sU4d5%2FUpff0lpu51sr%2Bt1dvHEgppliOnZWX%2BIgYzPuAcUOCnpaFlzBC%2BuRds2jWO3q3Rz7%2BEMLqdL5sX2bOdTk7ENI1O6jKs2VJbvRfFVgJly5b5sB7r3x9AcTv3qSaAEOmfL%2FQLIak22aGgIwatCae4ObkZs3PMEkpy%2BM1hw29Rvv%2FD%2BVg8u6JqanTjRet2qSzteRVgtLF5N7V9RRvzfApqKbvsJ7NGTvYmw0vw3udmBZ6yqcV%2FmzOZxkr7JCZKyBL9dGWAKC2OyQ%2FVKgVr9%2B1SJoNqIfPmPeG88juLNTiPvbjQOoRGhbNcinqOv%2F4dj8RQRJUlB4PCnS%2FUkNNiTQc1meV4MBxY1PwIe3VGSbGbQdzrK5gifYkVRIpZ5t%2B2vNn9ErlRY%2FFYBvQOBQQ9eYOXgY0PMs3aGL6VZgQhByfpr9bE7qtCYm0sONIYwhdv9xAY6pgFpA%2Bs1ISLkOPVaPSAzhw4qvWv4W4iJz8Lj2VF8Uo9mSel9YNUWvGHUPLIIQHjMlOGSutmQjzi28EyaFI8rGKi5bV%2Fh3rVEjYrgzFL%2Fu9p%2BhOFX4eZYTxB%2Fvo0xNeCrq%2FlHHDGlmADbjFg4L7br5QJZq8RvD1lg257u8SNVF6jP94rsiFxV0OCVW1KMf0k4VtiIQQoirUXUvkDShC1kK1Snt85Ut6SX&X-Amz-Signature=f3861cba9303594ec8a31b319dcc0002b8845adb727c52e73b419998086390d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSIUBON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFUclOhyNiy9Oy0MtiM9PR6Fx6u1ChZPMZELXbJ%2FY42MAiBFDiaMY9FxlQ3sBa3t0Nxnyho2cuzhjcPoXBcIPR8GfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMwNXkvuZ3XT7Npm%2F3KtwDcJLc6rEliKKw4L5m6x%2FdMTzBOHbjwNfLVfXD%2BZoqyYwacAq8JVAfX0Y%2B5p1tT0583Ufoap5uw%2FzqphIzFYfu9hrbmYZQOawsRvNi0SW4Of4otpW66AEQGa%2BYuDg4WD0IStB%2BbRDirviINuu9POioLs%2BT2fT4531Thz5ZOSEPrmeQkLpg7XhDTlCCREgtkw8sU4d5%2FUpff0lpu51sr%2Bt1dvHEgppliOnZWX%2BIgYzPuAcUOCnpaFlzBC%2BuRds2jWO3q3Rz7%2BEMLqdL5sX2bOdTk7ENI1O6jKs2VJbvRfFVgJly5b5sB7r3x9AcTv3qSaAEOmfL%2FQLIak22aGgIwatCae4ObkZs3PMEkpy%2BM1hw29Rvv%2FD%2BVg8u6JqanTjRet2qSzteRVgtLF5N7V9RRvzfApqKbvsJ7NGTvYmw0vw3udmBZ6yqcV%2FmzOZxkr7JCZKyBL9dGWAKC2OyQ%2FVKgVr9%2B1SJoNqIfPmPeG88juLNTiPvbjQOoRGhbNcinqOv%2F4dj8RQRJUlB4PCnS%2FUkNNiTQc1meV4MBxY1PwIe3VGSbGbQdzrK5gifYkVRIpZ5t%2B2vNn9ErlRY%2FFYBvQOBQQ9eYOXgY0PMs3aGL6VZgQhByfpr9bE7qtCYm0sONIYwhdv9xAY6pgFpA%2Bs1ISLkOPVaPSAzhw4qvWv4W4iJz8Lj2VF8Uo9mSel9YNUWvGHUPLIIQHjMlOGSutmQjzi28EyaFI8rGKi5bV%2Fh3rVEjYrgzFL%2Fu9p%2BhOFX4eZYTxB%2Fvo0xNeCrq%2FlHHDGlmADbjFg4L7br5QJZq8RvD1lg257u8SNVF6jP94rsiFxV0OCVW1KMf0k4VtiIQQoirUXUvkDShC1kK1Snt85Ut6SX&X-Amz-Signature=65b28ce722efc922ba84ab53c66f97398c6c7aba1413e6fff10de06684f0d51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSIUBON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFUclOhyNiy9Oy0MtiM9PR6Fx6u1ChZPMZELXbJ%2FY42MAiBFDiaMY9FxlQ3sBa3t0Nxnyho2cuzhjcPoXBcIPR8GfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMwNXkvuZ3XT7Npm%2F3KtwDcJLc6rEliKKw4L5m6x%2FdMTzBOHbjwNfLVfXD%2BZoqyYwacAq8JVAfX0Y%2B5p1tT0583Ufoap5uw%2FzqphIzFYfu9hrbmYZQOawsRvNi0SW4Of4otpW66AEQGa%2BYuDg4WD0IStB%2BbRDirviINuu9POioLs%2BT2fT4531Thz5ZOSEPrmeQkLpg7XhDTlCCREgtkw8sU4d5%2FUpff0lpu51sr%2Bt1dvHEgppliOnZWX%2BIgYzPuAcUOCnpaFlzBC%2BuRds2jWO3q3Rz7%2BEMLqdL5sX2bOdTk7ENI1O6jKs2VJbvRfFVgJly5b5sB7r3x9AcTv3qSaAEOmfL%2FQLIak22aGgIwatCae4ObkZs3PMEkpy%2BM1hw29Rvv%2FD%2BVg8u6JqanTjRet2qSzteRVgtLF5N7V9RRvzfApqKbvsJ7NGTvYmw0vw3udmBZ6yqcV%2FmzOZxkr7JCZKyBL9dGWAKC2OyQ%2FVKgVr9%2B1SJoNqIfPmPeG88juLNTiPvbjQOoRGhbNcinqOv%2F4dj8RQRJUlB4PCnS%2FUkNNiTQc1meV4MBxY1PwIe3VGSbGbQdzrK5gifYkVRIpZ5t%2B2vNn9ErlRY%2FFYBvQOBQQ9eYOXgY0PMs3aGL6VZgQhByfpr9bE7qtCYm0sONIYwhdv9xAY6pgFpA%2Bs1ISLkOPVaPSAzhw4qvWv4W4iJz8Lj2VF8Uo9mSel9YNUWvGHUPLIIQHjMlOGSutmQjzi28EyaFI8rGKi5bV%2Fh3rVEjYrgzFL%2Fu9p%2BhOFX4eZYTxB%2Fvo0xNeCrq%2FlHHDGlmADbjFg4L7br5QJZq8RvD1lg257u8SNVF6jP94rsiFxV0OCVW1KMf0k4VtiIQQoirUXUvkDShC1kK1Snt85Ut6SX&X-Amz-Signature=9fd851de25afc5a4649f1da9d7fdd21ebea58110022958468753c693662f9bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSIUBON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFUclOhyNiy9Oy0MtiM9PR6Fx6u1ChZPMZELXbJ%2FY42MAiBFDiaMY9FxlQ3sBa3t0Nxnyho2cuzhjcPoXBcIPR8GfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMwNXkvuZ3XT7Npm%2F3KtwDcJLc6rEliKKw4L5m6x%2FdMTzBOHbjwNfLVfXD%2BZoqyYwacAq8JVAfX0Y%2B5p1tT0583Ufoap5uw%2FzqphIzFYfu9hrbmYZQOawsRvNi0SW4Of4otpW66AEQGa%2BYuDg4WD0IStB%2BbRDirviINuu9POioLs%2BT2fT4531Thz5ZOSEPrmeQkLpg7XhDTlCCREgtkw8sU4d5%2FUpff0lpu51sr%2Bt1dvHEgppliOnZWX%2BIgYzPuAcUOCnpaFlzBC%2BuRds2jWO3q3Rz7%2BEMLqdL5sX2bOdTk7ENI1O6jKs2VJbvRfFVgJly5b5sB7r3x9AcTv3qSaAEOmfL%2FQLIak22aGgIwatCae4ObkZs3PMEkpy%2BM1hw29Rvv%2FD%2BVg8u6JqanTjRet2qSzteRVgtLF5N7V9RRvzfApqKbvsJ7NGTvYmw0vw3udmBZ6yqcV%2FmzOZxkr7JCZKyBL9dGWAKC2OyQ%2FVKgVr9%2B1SJoNqIfPmPeG88juLNTiPvbjQOoRGhbNcinqOv%2F4dj8RQRJUlB4PCnS%2FUkNNiTQc1meV4MBxY1PwIe3VGSbGbQdzrK5gifYkVRIpZ5t%2B2vNn9ErlRY%2FFYBvQOBQQ9eYOXgY0PMs3aGL6VZgQhByfpr9bE7qtCYm0sONIYwhdv9xAY6pgFpA%2Bs1ISLkOPVaPSAzhw4qvWv4W4iJz8Lj2VF8Uo9mSel9YNUWvGHUPLIIQHjMlOGSutmQjzi28EyaFI8rGKi5bV%2Fh3rVEjYrgzFL%2Fu9p%2BhOFX4eZYTxB%2Fvo0xNeCrq%2FlHHDGlmADbjFg4L7br5QJZq8RvD1lg257u8SNVF6jP94rsiFxV0OCVW1KMf0k4VtiIQQoirUXUvkDShC1kK1Snt85Ut6SX&X-Amz-Signature=d85f133c52a7f763d2c888c184434c24da21f58aa5c32194d01c20ade23330c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSIUBON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFUclOhyNiy9Oy0MtiM9PR6Fx6u1ChZPMZELXbJ%2FY42MAiBFDiaMY9FxlQ3sBa3t0Nxnyho2cuzhjcPoXBcIPR8GfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMwNXkvuZ3XT7Npm%2F3KtwDcJLc6rEliKKw4L5m6x%2FdMTzBOHbjwNfLVfXD%2BZoqyYwacAq8JVAfX0Y%2B5p1tT0583Ufoap5uw%2FzqphIzFYfu9hrbmYZQOawsRvNi0SW4Of4otpW66AEQGa%2BYuDg4WD0IStB%2BbRDirviINuu9POioLs%2BT2fT4531Thz5ZOSEPrmeQkLpg7XhDTlCCREgtkw8sU4d5%2FUpff0lpu51sr%2Bt1dvHEgppliOnZWX%2BIgYzPuAcUOCnpaFlzBC%2BuRds2jWO3q3Rz7%2BEMLqdL5sX2bOdTk7ENI1O6jKs2VJbvRfFVgJly5b5sB7r3x9AcTv3qSaAEOmfL%2FQLIak22aGgIwatCae4ObkZs3PMEkpy%2BM1hw29Rvv%2FD%2BVg8u6JqanTjRet2qSzteRVgtLF5N7V9RRvzfApqKbvsJ7NGTvYmw0vw3udmBZ6yqcV%2FmzOZxkr7JCZKyBL9dGWAKC2OyQ%2FVKgVr9%2B1SJoNqIfPmPeG88juLNTiPvbjQOoRGhbNcinqOv%2F4dj8RQRJUlB4PCnS%2FUkNNiTQc1meV4MBxY1PwIe3VGSbGbQdzrK5gifYkVRIpZ5t%2B2vNn9ErlRY%2FFYBvQOBQQ9eYOXgY0PMs3aGL6VZgQhByfpr9bE7qtCYm0sONIYwhdv9xAY6pgFpA%2Bs1ISLkOPVaPSAzhw4qvWv4W4iJz8Lj2VF8Uo9mSel9YNUWvGHUPLIIQHjMlOGSutmQjzi28EyaFI8rGKi5bV%2Fh3rVEjYrgzFL%2Fu9p%2BhOFX4eZYTxB%2Fvo0xNeCrq%2FlHHDGlmADbjFg4L7br5QJZq8RvD1lg257u8SNVF6jP94rsiFxV0OCVW1KMf0k4VtiIQQoirUXUvkDShC1kK1Snt85Ut6SX&X-Amz-Signature=9250e6e9305491dff9c1d6bda026af481f7a7eb7bb084123e779165490d24217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSIUBON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFUclOhyNiy9Oy0MtiM9PR6Fx6u1ChZPMZELXbJ%2FY42MAiBFDiaMY9FxlQ3sBa3t0Nxnyho2cuzhjcPoXBcIPR8GfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMwNXkvuZ3XT7Npm%2F3KtwDcJLc6rEliKKw4L5m6x%2FdMTzBOHbjwNfLVfXD%2BZoqyYwacAq8JVAfX0Y%2B5p1tT0583Ufoap5uw%2FzqphIzFYfu9hrbmYZQOawsRvNi0SW4Of4otpW66AEQGa%2BYuDg4WD0IStB%2BbRDirviINuu9POioLs%2BT2fT4531Thz5ZOSEPrmeQkLpg7XhDTlCCREgtkw8sU4d5%2FUpff0lpu51sr%2Bt1dvHEgppliOnZWX%2BIgYzPuAcUOCnpaFlzBC%2BuRds2jWO3q3Rz7%2BEMLqdL5sX2bOdTk7ENI1O6jKs2VJbvRfFVgJly5b5sB7r3x9AcTv3qSaAEOmfL%2FQLIak22aGgIwatCae4ObkZs3PMEkpy%2BM1hw29Rvv%2FD%2BVg8u6JqanTjRet2qSzteRVgtLF5N7V9RRvzfApqKbvsJ7NGTvYmw0vw3udmBZ6yqcV%2FmzOZxkr7JCZKyBL9dGWAKC2OyQ%2FVKgVr9%2B1SJoNqIfPmPeG88juLNTiPvbjQOoRGhbNcinqOv%2F4dj8RQRJUlB4PCnS%2FUkNNiTQc1meV4MBxY1PwIe3VGSbGbQdzrK5gifYkVRIpZ5t%2B2vNn9ErlRY%2FFYBvQOBQQ9eYOXgY0PMs3aGL6VZgQhByfpr9bE7qtCYm0sONIYwhdv9xAY6pgFpA%2Bs1ISLkOPVaPSAzhw4qvWv4W4iJz8Lj2VF8Uo9mSel9YNUWvGHUPLIIQHjMlOGSutmQjzi28EyaFI8rGKi5bV%2Fh3rVEjYrgzFL%2Fu9p%2BhOFX4eZYTxB%2Fvo0xNeCrq%2FlHHDGlmADbjFg4L7br5QJZq8RvD1lg257u8SNVF6jP94rsiFxV0OCVW1KMf0k4VtiIQQoirUXUvkDShC1kK1Snt85Ut6SX&X-Amz-Signature=e24742ac999c9f1a001b21a06a1a652dda343b61f95343881362aa5d4554d06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSIUBON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFUclOhyNiy9Oy0MtiM9PR6Fx6u1ChZPMZELXbJ%2FY42MAiBFDiaMY9FxlQ3sBa3t0Nxnyho2cuzhjcPoXBcIPR8GfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMwNXkvuZ3XT7Npm%2F3KtwDcJLc6rEliKKw4L5m6x%2FdMTzBOHbjwNfLVfXD%2BZoqyYwacAq8JVAfX0Y%2B5p1tT0583Ufoap5uw%2FzqphIzFYfu9hrbmYZQOawsRvNi0SW4Of4otpW66AEQGa%2BYuDg4WD0IStB%2BbRDirviINuu9POioLs%2BT2fT4531Thz5ZOSEPrmeQkLpg7XhDTlCCREgtkw8sU4d5%2FUpff0lpu51sr%2Bt1dvHEgppliOnZWX%2BIgYzPuAcUOCnpaFlzBC%2BuRds2jWO3q3Rz7%2BEMLqdL5sX2bOdTk7ENI1O6jKs2VJbvRfFVgJly5b5sB7r3x9AcTv3qSaAEOmfL%2FQLIak22aGgIwatCae4ObkZs3PMEkpy%2BM1hw29Rvv%2FD%2BVg8u6JqanTjRet2qSzteRVgtLF5N7V9RRvzfApqKbvsJ7NGTvYmw0vw3udmBZ6yqcV%2FmzOZxkr7JCZKyBL9dGWAKC2OyQ%2FVKgVr9%2B1SJoNqIfPmPeG88juLNTiPvbjQOoRGhbNcinqOv%2F4dj8RQRJUlB4PCnS%2FUkNNiTQc1meV4MBxY1PwIe3VGSbGbQdzrK5gifYkVRIpZ5t%2B2vNn9ErlRY%2FFYBvQOBQQ9eYOXgY0PMs3aGL6VZgQhByfpr9bE7qtCYm0sONIYwhdv9xAY6pgFpA%2Bs1ISLkOPVaPSAzhw4qvWv4W4iJz8Lj2VF8Uo9mSel9YNUWvGHUPLIIQHjMlOGSutmQjzi28EyaFI8rGKi5bV%2Fh3rVEjYrgzFL%2Fu9p%2BhOFX4eZYTxB%2Fvo0xNeCrq%2FlHHDGlmADbjFg4L7br5QJZq8RvD1lg257u8SNVF6jP94rsiFxV0OCVW1KMf0k4VtiIQQoirUXUvkDShC1kK1Snt85Ut6SX&X-Amz-Signature=66dd6402ac0fd1b0b98d42529d8e87bb260d69dc8ebbfc10aec12c2d375d2ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSIUBON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFUclOhyNiy9Oy0MtiM9PR6Fx6u1ChZPMZELXbJ%2FY42MAiBFDiaMY9FxlQ3sBa3t0Nxnyho2cuzhjcPoXBcIPR8GfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMwNXkvuZ3XT7Npm%2F3KtwDcJLc6rEliKKw4L5m6x%2FdMTzBOHbjwNfLVfXD%2BZoqyYwacAq8JVAfX0Y%2B5p1tT0583Ufoap5uw%2FzqphIzFYfu9hrbmYZQOawsRvNi0SW4Of4otpW66AEQGa%2BYuDg4WD0IStB%2BbRDirviINuu9POioLs%2BT2fT4531Thz5ZOSEPrmeQkLpg7XhDTlCCREgtkw8sU4d5%2FUpff0lpu51sr%2Bt1dvHEgppliOnZWX%2BIgYzPuAcUOCnpaFlzBC%2BuRds2jWO3q3Rz7%2BEMLqdL5sX2bOdTk7ENI1O6jKs2VJbvRfFVgJly5b5sB7r3x9AcTv3qSaAEOmfL%2FQLIak22aGgIwatCae4ObkZs3PMEkpy%2BM1hw29Rvv%2FD%2BVg8u6JqanTjRet2qSzteRVgtLF5N7V9RRvzfApqKbvsJ7NGTvYmw0vw3udmBZ6yqcV%2FmzOZxkr7JCZKyBL9dGWAKC2OyQ%2FVKgVr9%2B1SJoNqIfPmPeG88juLNTiPvbjQOoRGhbNcinqOv%2F4dj8RQRJUlB4PCnS%2FUkNNiTQc1meV4MBxY1PwIe3VGSbGbQdzrK5gifYkVRIpZ5t%2B2vNn9ErlRY%2FFYBvQOBQQ9eYOXgY0PMs3aGL6VZgQhByfpr9bE7qtCYm0sONIYwhdv9xAY6pgFpA%2Bs1ISLkOPVaPSAzhw4qvWv4W4iJz8Lj2VF8Uo9mSel9YNUWvGHUPLIIQHjMlOGSutmQjzi28EyaFI8rGKi5bV%2Fh3rVEjYrgzFL%2Fu9p%2BhOFX4eZYTxB%2Fvo0xNeCrq%2FlHHDGlmADbjFg4L7br5QJZq8RvD1lg257u8SNVF6jP94rsiFxV0OCVW1KMf0k4VtiIQQoirUXUvkDShC1kK1Snt85Ut6SX&X-Amz-Signature=a61440d9fe72d5dd184d3e7f2ada212047e19597d4fafa2852dc0912690d8bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSIUBON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFUclOhyNiy9Oy0MtiM9PR6Fx6u1ChZPMZELXbJ%2FY42MAiBFDiaMY9FxlQ3sBa3t0Nxnyho2cuzhjcPoXBcIPR8GfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMwNXkvuZ3XT7Npm%2F3KtwDcJLc6rEliKKw4L5m6x%2FdMTzBOHbjwNfLVfXD%2BZoqyYwacAq8JVAfX0Y%2B5p1tT0583Ufoap5uw%2FzqphIzFYfu9hrbmYZQOawsRvNi0SW4Of4otpW66AEQGa%2BYuDg4WD0IStB%2BbRDirviINuu9POioLs%2BT2fT4531Thz5ZOSEPrmeQkLpg7XhDTlCCREgtkw8sU4d5%2FUpff0lpu51sr%2Bt1dvHEgppliOnZWX%2BIgYzPuAcUOCnpaFlzBC%2BuRds2jWO3q3Rz7%2BEMLqdL5sX2bOdTk7ENI1O6jKs2VJbvRfFVgJly5b5sB7r3x9AcTv3qSaAEOmfL%2FQLIak22aGgIwatCae4ObkZs3PMEkpy%2BM1hw29Rvv%2FD%2BVg8u6JqanTjRet2qSzteRVgtLF5N7V9RRvzfApqKbvsJ7NGTvYmw0vw3udmBZ6yqcV%2FmzOZxkr7JCZKyBL9dGWAKC2OyQ%2FVKgVr9%2B1SJoNqIfPmPeG88juLNTiPvbjQOoRGhbNcinqOv%2F4dj8RQRJUlB4PCnS%2FUkNNiTQc1meV4MBxY1PwIe3VGSbGbQdzrK5gifYkVRIpZ5t%2B2vNn9ErlRY%2FFYBvQOBQQ9eYOXgY0PMs3aGL6VZgQhByfpr9bE7qtCYm0sONIYwhdv9xAY6pgFpA%2Bs1ISLkOPVaPSAzhw4qvWv4W4iJz8Lj2VF8Uo9mSel9YNUWvGHUPLIIQHjMlOGSutmQjzi28EyaFI8rGKi5bV%2Fh3rVEjYrgzFL%2Fu9p%2BhOFX4eZYTxB%2Fvo0xNeCrq%2FlHHDGlmADbjFg4L7br5QJZq8RvD1lg257u8SNVF6jP94rsiFxV0OCVW1KMf0k4VtiIQQoirUXUvkDShC1kK1Snt85Ut6SX&X-Amz-Signature=38813166e9fe8795d0f1cece9a7a7983e7a5f4de720a67fc77a9cb7c84455b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSIUBON%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFUclOhyNiy9Oy0MtiM9PR6Fx6u1ChZPMZELXbJ%2FY42MAiBFDiaMY9FxlQ3sBa3t0Nxnyho2cuzhjcPoXBcIPR8GfCr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMwNXkvuZ3XT7Npm%2F3KtwDcJLc6rEliKKw4L5m6x%2FdMTzBOHbjwNfLVfXD%2BZoqyYwacAq8JVAfX0Y%2B5p1tT0583Ufoap5uw%2FzqphIzFYfu9hrbmYZQOawsRvNi0SW4Of4otpW66AEQGa%2BYuDg4WD0IStB%2BbRDirviINuu9POioLs%2BT2fT4531Thz5ZOSEPrmeQkLpg7XhDTlCCREgtkw8sU4d5%2FUpff0lpu51sr%2Bt1dvHEgppliOnZWX%2BIgYzPuAcUOCnpaFlzBC%2BuRds2jWO3q3Rz7%2BEMLqdL5sX2bOdTk7ENI1O6jKs2VJbvRfFVgJly5b5sB7r3x9AcTv3qSaAEOmfL%2FQLIak22aGgIwatCae4ObkZs3PMEkpy%2BM1hw29Rvv%2FD%2BVg8u6JqanTjRet2qSzteRVgtLF5N7V9RRvzfApqKbvsJ7NGTvYmw0vw3udmBZ6yqcV%2FmzOZxkr7JCZKyBL9dGWAKC2OyQ%2FVKgVr9%2B1SJoNqIfPmPeG88juLNTiPvbjQOoRGhbNcinqOv%2F4dj8RQRJUlB4PCnS%2FUkNNiTQc1meV4MBxY1PwIe3VGSbGbQdzrK5gifYkVRIpZ5t%2B2vNn9ErlRY%2FFYBvQOBQQ9eYOXgY0PMs3aGL6VZgQhByfpr9bE7qtCYm0sONIYwhdv9xAY6pgFpA%2Bs1ISLkOPVaPSAzhw4qvWv4W4iJz8Lj2VF8Uo9mSel9YNUWvGHUPLIIQHjMlOGSutmQjzi28EyaFI8rGKi5bV%2Fh3rVEjYrgzFL%2Fu9p%2BhOFX4eZYTxB%2Fvo0xNeCrq%2FlHHDGlmADbjFg4L7br5QJZq8RvD1lg257u8SNVF6jP94rsiFxV0OCVW1KMf0k4VtiIQQoirUXUvkDShC1kK1Snt85Ut6SX&X-Amz-Signature=e194d24ee8310bed60de70b222d8b27475f881fcaced3a5d7d3b149dce54c7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4EDLMT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCsYX0MJiAHmehk2KLYel53Wt9up2tiW2q09lUnzUFx0QIgRNA6P2%2BsGTwQi%2FiWl91UUAfUtETRUOnH3KkSqHTlArgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDHTFyoem0HPulzxjkircA9lz25SXGwaSVnv5h9vEZpTaTSC8N41I5XuQzI98MLKdlt%2BQa6TJF8QkTApbJrLROHzYdk6CPrj4TuNu2qJpQ2FCDWCS5pKGOHKSvDwuj5Ew10djwgSjvHId1QM19ocMdd46u%2B%2FLjB1gsQuwu6JiJchhM4TpejccVOAGaTIUk96gnVV4qRJeoyqgJRc3gSU1yHuNcJC7rH6aDjlRpW9sSuQXxthpLqhNrQkOyw5JnKwENpyt9RpV3L1TBTqBUru9Sh76oPtpPb3sWfObX9410cstS%2FRNzfXxLtkQGdjzf0V9Pkk4uZX%2FPsDvjNjwMJakXcyerMZXCS0ENsQHWHRmGVcJjd854qVng2nTZq6wdHrvBC2Hu9ZWsgEcJCsUp06LZilpoFQiz%2FQYPYsZ5XFhV%2FrwR2jHl7bmOx3hg%2Be0UfTo1QuMiFfKCXerWNyL2CPY%2FlHVOY7GLGVBoj%2Fv9p6vQ%2BX2CGzbRDLq%2BIpTPQAdZhQRfoIWq%2FxD7crY3u2q3q%2BgbO4ZSiJVjAdxjlL3hU03qrltNtye5RrXhUz218og2C0tnEFW3CvltSaz45O92oWUMYuvohvw9ruWLVS3tey8d8z66RU6Sf7hakgMjaApLp8Vdcgr9DHzgHopL5SNMODa%2FcQGOqUBvF23VEcbujhGup4Az5Vt7j6E5tKsJbZy7bZGm6Tk%2BUSNiH02utuySgRXlOl6SD%2FiiXuiaGhbuIV1H8G58HUnzDXf4YIx49XOPkPlu8nCwAYK5USj0289K39BGev%2Bxfry55v%2FGd%2FMUC9rS5DPJculD689s%2BePnMZ9AuYyjHTk81AVwO%2FKhz5%2FtY7ohQVFDSo6GasTzzhWIUnB%2F45%2FPlGcDSe5UTvZ&X-Amz-Signature=f0aa830037730a720673f03d7d3b47b3c1696716ce3db627d1619b366872d811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P37JG6T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCCSh%2FrMnf50EcgxZ30tEAPbdBnVpcsDmJaoS4k4xTAXgIgdqU80CxikDlp%2Ba2nYXjFL9xvJum4aiIPsYi9CntWyMIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKsdAAvStaufZia53ircAwZ%2FrmE55BujnZe5tzmfpHYtr3wntfvZaIusQEAh%2F%2BWzgta%2BvruMUjAUx%2FYZcxRCVSIddGeYnWoK0cxjSzUPODBrv5GfZOnIXhHhcC1MmjA8gn6%2FY5MZH7eU48HuQFYnWtlSoqd%2BXMda%2F9SUVHKfjS9rLx91FEDNcK6ZogO6qRGoDLXX7Kw76C9oKQn7Pw5t4mKFaMuRuTWQyInjhjaeoguIH7UMnY266GlnYpE67Gonkr5sQvvVWKRAlOAJNoQ5coE61gXeWwqfFuVeBPGgF4j05SLVsvBfumRhqYLIwS1ECDgXPUzSg8eKFx57SGieTp%2BSnZZiOX3SkfzC64REWsrzMyC2SyLfTf27AGQ07Mdy18GK%2B437H%2BYgYnPXr81za2%2Biim5pUjDbwxP42k5ZXJT9WVut3LCnJ2rI9awxA2nEo2XURF%2FU0TUoB1IvDVltsUZ3VA6vpJiyyNXQeDEYHuFTRWWdfOyMnwQtG4csAam%2B5OVrUZP3RNAqqRVNpmQ6dSrC%2Fq34X6ymQch0vfXPqVpT0TDf1PFNHw0YfHzYwTXXxSVDW%2BM22jBuppMzy1uqRhcuZy2m6wtzR7lwlflISZC9o5wp6iGBrupxk8goaUSY7HKIJgs64rGd2HxcMKTa%2FcQGOqUBpEd9ZJmCc1RJJnAv9jyw0nBKEAn6iBfNG1646pjGAu0B26V97CSvPv3Mv0c2h7KBgmSyO%2BE3j6RWkZTV9hXHC43s6lR63sTYZ5T6wfnl8DyeRRNxgmzdbeglTz3ee7MroSTNbKfXRbfXtK7r%2BoclVklhi3kNdK9DvvF8fGSsrDLj3WO2FfxgP3fAozKJno%2BJuaB9GjSMzHcsAU3kOg186plcV1y2&X-Amz-Signature=73b16e6ee3e82a21e2399d77fcb7a7cce36947a683019b664e604b4879d49086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P37JG6T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCCSh%2FrMnf50EcgxZ30tEAPbdBnVpcsDmJaoS4k4xTAXgIgdqU80CxikDlp%2Ba2nYXjFL9xvJum4aiIPsYi9CntWyMIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKsdAAvStaufZia53ircAwZ%2FrmE55BujnZe5tzmfpHYtr3wntfvZaIusQEAh%2F%2BWzgta%2BvruMUjAUx%2FYZcxRCVSIddGeYnWoK0cxjSzUPODBrv5GfZOnIXhHhcC1MmjA8gn6%2FY5MZH7eU48HuQFYnWtlSoqd%2BXMda%2F9SUVHKfjS9rLx91FEDNcK6ZogO6qRGoDLXX7Kw76C9oKQn7Pw5t4mKFaMuRuTWQyInjhjaeoguIH7UMnY266GlnYpE67Gonkr5sQvvVWKRAlOAJNoQ5coE61gXeWwqfFuVeBPGgF4j05SLVsvBfumRhqYLIwS1ECDgXPUzSg8eKFx57SGieTp%2BSnZZiOX3SkfzC64REWsrzMyC2SyLfTf27AGQ07Mdy18GK%2B437H%2BYgYnPXr81za2%2Biim5pUjDbwxP42k5ZXJT9WVut3LCnJ2rI9awxA2nEo2XURF%2FU0TUoB1IvDVltsUZ3VA6vpJiyyNXQeDEYHuFTRWWdfOyMnwQtG4csAam%2B5OVrUZP3RNAqqRVNpmQ6dSrC%2Fq34X6ymQch0vfXPqVpT0TDf1PFNHw0YfHzYwTXXxSVDW%2BM22jBuppMzy1uqRhcuZy2m6wtzR7lwlflISZC9o5wp6iGBrupxk8goaUSY7HKIJgs64rGd2HxcMKTa%2FcQGOqUBpEd9ZJmCc1RJJnAv9jyw0nBKEAn6iBfNG1646pjGAu0B26V97CSvPv3Mv0c2h7KBgmSyO%2BE3j6RWkZTV9hXHC43s6lR63sTYZ5T6wfnl8DyeRRNxgmzdbeglTz3ee7MroSTNbKfXRbfXtK7r%2BoclVklhi3kNdK9DvvF8fGSsrDLj3WO2FfxgP3fAozKJno%2BJuaB9GjSMzHcsAU3kOg186plcV1y2&X-Amz-Signature=dfd4a0d41425621d49b8de7b26d6b2585d128dcb24d74c7750d2da8b38d758ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P37JG6T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCCSh%2FrMnf50EcgxZ30tEAPbdBnVpcsDmJaoS4k4xTAXgIgdqU80CxikDlp%2Ba2nYXjFL9xvJum4aiIPsYi9CntWyMIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKsdAAvStaufZia53ircAwZ%2FrmE55BujnZe5tzmfpHYtr3wntfvZaIusQEAh%2F%2BWzgta%2BvruMUjAUx%2FYZcxRCVSIddGeYnWoK0cxjSzUPODBrv5GfZOnIXhHhcC1MmjA8gn6%2FY5MZH7eU48HuQFYnWtlSoqd%2BXMda%2F9SUVHKfjS9rLx91FEDNcK6ZogO6qRGoDLXX7Kw76C9oKQn7Pw5t4mKFaMuRuTWQyInjhjaeoguIH7UMnY266GlnYpE67Gonkr5sQvvVWKRAlOAJNoQ5coE61gXeWwqfFuVeBPGgF4j05SLVsvBfumRhqYLIwS1ECDgXPUzSg8eKFx57SGieTp%2BSnZZiOX3SkfzC64REWsrzMyC2SyLfTf27AGQ07Mdy18GK%2B437H%2BYgYnPXr81za2%2Biim5pUjDbwxP42k5ZXJT9WVut3LCnJ2rI9awxA2nEo2XURF%2FU0TUoB1IvDVltsUZ3VA6vpJiyyNXQeDEYHuFTRWWdfOyMnwQtG4csAam%2B5OVrUZP3RNAqqRVNpmQ6dSrC%2Fq34X6ymQch0vfXPqVpT0TDf1PFNHw0YfHzYwTXXxSVDW%2BM22jBuppMzy1uqRhcuZy2m6wtzR7lwlflISZC9o5wp6iGBrupxk8goaUSY7HKIJgs64rGd2HxcMKTa%2FcQGOqUBpEd9ZJmCc1RJJnAv9jyw0nBKEAn6iBfNG1646pjGAu0B26V97CSvPv3Mv0c2h7KBgmSyO%2BE3j6RWkZTV9hXHC43s6lR63sTYZ5T6wfnl8DyeRRNxgmzdbeglTz3ee7MroSTNbKfXRbfXtK7r%2BoclVklhi3kNdK9DvvF8fGSsrDLj3WO2FfxgP3fAozKJno%2BJuaB9GjSMzHcsAU3kOg186plcV1y2&X-Amz-Signature=db75f141f49ac32f45fa5ff2dac1b07ff7afcad23594be54fd3e4fb94ab93992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P37JG6T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCCSh%2FrMnf50EcgxZ30tEAPbdBnVpcsDmJaoS4k4xTAXgIgdqU80CxikDlp%2Ba2nYXjFL9xvJum4aiIPsYi9CntWyMIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKsdAAvStaufZia53ircAwZ%2FrmE55BujnZe5tzmfpHYtr3wntfvZaIusQEAh%2F%2BWzgta%2BvruMUjAUx%2FYZcxRCVSIddGeYnWoK0cxjSzUPODBrv5GfZOnIXhHhcC1MmjA8gn6%2FY5MZH7eU48HuQFYnWtlSoqd%2BXMda%2F9SUVHKfjS9rLx91FEDNcK6ZogO6qRGoDLXX7Kw76C9oKQn7Pw5t4mKFaMuRuTWQyInjhjaeoguIH7UMnY266GlnYpE67Gonkr5sQvvVWKRAlOAJNoQ5coE61gXeWwqfFuVeBPGgF4j05SLVsvBfumRhqYLIwS1ECDgXPUzSg8eKFx57SGieTp%2BSnZZiOX3SkfzC64REWsrzMyC2SyLfTf27AGQ07Mdy18GK%2B437H%2BYgYnPXr81za2%2Biim5pUjDbwxP42k5ZXJT9WVut3LCnJ2rI9awxA2nEo2XURF%2FU0TUoB1IvDVltsUZ3VA6vpJiyyNXQeDEYHuFTRWWdfOyMnwQtG4csAam%2B5OVrUZP3RNAqqRVNpmQ6dSrC%2Fq34X6ymQch0vfXPqVpT0TDf1PFNHw0YfHzYwTXXxSVDW%2BM22jBuppMzy1uqRhcuZy2m6wtzR7lwlflISZC9o5wp6iGBrupxk8goaUSY7HKIJgs64rGd2HxcMKTa%2FcQGOqUBpEd9ZJmCc1RJJnAv9jyw0nBKEAn6iBfNG1646pjGAu0B26V97CSvPv3Mv0c2h7KBgmSyO%2BE3j6RWkZTV9hXHC43s6lR63sTYZ5T6wfnl8DyeRRNxgmzdbeglTz3ee7MroSTNbKfXRbfXtK7r%2BoclVklhi3kNdK9DvvF8fGSsrDLj3WO2FfxgP3fAozKJno%2BJuaB9GjSMzHcsAU3kOg186plcV1y2&X-Amz-Signature=98dafdab13e0dea61bc2eff56eb812b5f6e5404ef1fe0b754665a5905db8d5ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P37JG6T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCCSh%2FrMnf50EcgxZ30tEAPbdBnVpcsDmJaoS4k4xTAXgIgdqU80CxikDlp%2Ba2nYXjFL9xvJum4aiIPsYi9CntWyMIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKsdAAvStaufZia53ircAwZ%2FrmE55BujnZe5tzmfpHYtr3wntfvZaIusQEAh%2F%2BWzgta%2BvruMUjAUx%2FYZcxRCVSIddGeYnWoK0cxjSzUPODBrv5GfZOnIXhHhcC1MmjA8gn6%2FY5MZH7eU48HuQFYnWtlSoqd%2BXMda%2F9SUVHKfjS9rLx91FEDNcK6ZogO6qRGoDLXX7Kw76C9oKQn7Pw5t4mKFaMuRuTWQyInjhjaeoguIH7UMnY266GlnYpE67Gonkr5sQvvVWKRAlOAJNoQ5coE61gXeWwqfFuVeBPGgF4j05SLVsvBfumRhqYLIwS1ECDgXPUzSg8eKFx57SGieTp%2BSnZZiOX3SkfzC64REWsrzMyC2SyLfTf27AGQ07Mdy18GK%2B437H%2BYgYnPXr81za2%2Biim5pUjDbwxP42k5ZXJT9WVut3LCnJ2rI9awxA2nEo2XURF%2FU0TUoB1IvDVltsUZ3VA6vpJiyyNXQeDEYHuFTRWWdfOyMnwQtG4csAam%2B5OVrUZP3RNAqqRVNpmQ6dSrC%2Fq34X6ymQch0vfXPqVpT0TDf1PFNHw0YfHzYwTXXxSVDW%2BM22jBuppMzy1uqRhcuZy2m6wtzR7lwlflISZC9o5wp6iGBrupxk8goaUSY7HKIJgs64rGd2HxcMKTa%2FcQGOqUBpEd9ZJmCc1RJJnAv9jyw0nBKEAn6iBfNG1646pjGAu0B26V97CSvPv3Mv0c2h7KBgmSyO%2BE3j6RWkZTV9hXHC43s6lR63sTYZ5T6wfnl8DyeRRNxgmzdbeglTz3ee7MroSTNbKfXRbfXtK7r%2BoclVklhi3kNdK9DvvF8fGSsrDLj3WO2FfxgP3fAozKJno%2BJuaB9GjSMzHcsAU3kOg186plcV1y2&X-Amz-Signature=6e1bacb38aa1daaedb6d4bf087318a2c1f61da1582d6a11467e321fa8df7d8d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P37JG6T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCCSh%2FrMnf50EcgxZ30tEAPbdBnVpcsDmJaoS4k4xTAXgIgdqU80CxikDlp%2Ba2nYXjFL9xvJum4aiIPsYi9CntWyMIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKsdAAvStaufZia53ircAwZ%2FrmE55BujnZe5tzmfpHYtr3wntfvZaIusQEAh%2F%2BWzgta%2BvruMUjAUx%2FYZcxRCVSIddGeYnWoK0cxjSzUPODBrv5GfZOnIXhHhcC1MmjA8gn6%2FY5MZH7eU48HuQFYnWtlSoqd%2BXMda%2F9SUVHKfjS9rLx91FEDNcK6ZogO6qRGoDLXX7Kw76C9oKQn7Pw5t4mKFaMuRuTWQyInjhjaeoguIH7UMnY266GlnYpE67Gonkr5sQvvVWKRAlOAJNoQ5coE61gXeWwqfFuVeBPGgF4j05SLVsvBfumRhqYLIwS1ECDgXPUzSg8eKFx57SGieTp%2BSnZZiOX3SkfzC64REWsrzMyC2SyLfTf27AGQ07Mdy18GK%2B437H%2BYgYnPXr81za2%2Biim5pUjDbwxP42k5ZXJT9WVut3LCnJ2rI9awxA2nEo2XURF%2FU0TUoB1IvDVltsUZ3VA6vpJiyyNXQeDEYHuFTRWWdfOyMnwQtG4csAam%2B5OVrUZP3RNAqqRVNpmQ6dSrC%2Fq34X6ymQch0vfXPqVpT0TDf1PFNHw0YfHzYwTXXxSVDW%2BM22jBuppMzy1uqRhcuZy2m6wtzR7lwlflISZC9o5wp6iGBrupxk8goaUSY7HKIJgs64rGd2HxcMKTa%2FcQGOqUBpEd9ZJmCc1RJJnAv9jyw0nBKEAn6iBfNG1646pjGAu0B26V97CSvPv3Mv0c2h7KBgmSyO%2BE3j6RWkZTV9hXHC43s6lR63sTYZ5T6wfnl8DyeRRNxgmzdbeglTz3ee7MroSTNbKfXRbfXtK7r%2BoclVklhi3kNdK9DvvF8fGSsrDLj3WO2FfxgP3fAozKJno%2BJuaB9GjSMzHcsAU3kOg186plcV1y2&X-Amz-Signature=9be9f4ad324a5ae6f9e239fadfc308893cf6cbb7c3b52092322f73493dfd5a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P37JG6T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCCSh%2FrMnf50EcgxZ30tEAPbdBnVpcsDmJaoS4k4xTAXgIgdqU80CxikDlp%2Ba2nYXjFL9xvJum4aiIPsYi9CntWyMIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKsdAAvStaufZia53ircAwZ%2FrmE55BujnZe5tzmfpHYtr3wntfvZaIusQEAh%2F%2BWzgta%2BvruMUjAUx%2FYZcxRCVSIddGeYnWoK0cxjSzUPODBrv5GfZOnIXhHhcC1MmjA8gn6%2FY5MZH7eU48HuQFYnWtlSoqd%2BXMda%2F9SUVHKfjS9rLx91FEDNcK6ZogO6qRGoDLXX7Kw76C9oKQn7Pw5t4mKFaMuRuTWQyInjhjaeoguIH7UMnY266GlnYpE67Gonkr5sQvvVWKRAlOAJNoQ5coE61gXeWwqfFuVeBPGgF4j05SLVsvBfumRhqYLIwS1ECDgXPUzSg8eKFx57SGieTp%2BSnZZiOX3SkfzC64REWsrzMyC2SyLfTf27AGQ07Mdy18GK%2B437H%2BYgYnPXr81za2%2Biim5pUjDbwxP42k5ZXJT9WVut3LCnJ2rI9awxA2nEo2XURF%2FU0TUoB1IvDVltsUZ3VA6vpJiyyNXQeDEYHuFTRWWdfOyMnwQtG4csAam%2B5OVrUZP3RNAqqRVNpmQ6dSrC%2Fq34X6ymQch0vfXPqVpT0TDf1PFNHw0YfHzYwTXXxSVDW%2BM22jBuppMzy1uqRhcuZy2m6wtzR7lwlflISZC9o5wp6iGBrupxk8goaUSY7HKIJgs64rGd2HxcMKTa%2FcQGOqUBpEd9ZJmCc1RJJnAv9jyw0nBKEAn6iBfNG1646pjGAu0B26V97CSvPv3Mv0c2h7KBgmSyO%2BE3j6RWkZTV9hXHC43s6lR63sTYZ5T6wfnl8DyeRRNxgmzdbeglTz3ee7MroSTNbKfXRbfXtK7r%2BoclVklhi3kNdK9DvvF8fGSsrDLj3WO2FfxgP3fAozKJno%2BJuaB9GjSMzHcsAU3kOg186plcV1y2&X-Amz-Signature=643d00ec95e9e9efc4ee0afa7bf213b727144f5017b9a1926ac525499869a91b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P37JG6T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCCSh%2FrMnf50EcgxZ30tEAPbdBnVpcsDmJaoS4k4xTAXgIgdqU80CxikDlp%2Ba2nYXjFL9xvJum4aiIPsYi9CntWyMIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKsdAAvStaufZia53ircAwZ%2FrmE55BujnZe5tzmfpHYtr3wntfvZaIusQEAh%2F%2BWzgta%2BvruMUjAUx%2FYZcxRCVSIddGeYnWoK0cxjSzUPODBrv5GfZOnIXhHhcC1MmjA8gn6%2FY5MZH7eU48HuQFYnWtlSoqd%2BXMda%2F9SUVHKfjS9rLx91FEDNcK6ZogO6qRGoDLXX7Kw76C9oKQn7Pw5t4mKFaMuRuTWQyInjhjaeoguIH7UMnY266GlnYpE67Gonkr5sQvvVWKRAlOAJNoQ5coE61gXeWwqfFuVeBPGgF4j05SLVsvBfumRhqYLIwS1ECDgXPUzSg8eKFx57SGieTp%2BSnZZiOX3SkfzC64REWsrzMyC2SyLfTf27AGQ07Mdy18GK%2B437H%2BYgYnPXr81za2%2Biim5pUjDbwxP42k5ZXJT9WVut3LCnJ2rI9awxA2nEo2XURF%2FU0TUoB1IvDVltsUZ3VA6vpJiyyNXQeDEYHuFTRWWdfOyMnwQtG4csAam%2B5OVrUZP3RNAqqRVNpmQ6dSrC%2Fq34X6ymQch0vfXPqVpT0TDf1PFNHw0YfHzYwTXXxSVDW%2BM22jBuppMzy1uqRhcuZy2m6wtzR7lwlflISZC9o5wp6iGBrupxk8goaUSY7HKIJgs64rGd2HxcMKTa%2FcQGOqUBpEd9ZJmCc1RJJnAv9jyw0nBKEAn6iBfNG1646pjGAu0B26V97CSvPv3Mv0c2h7KBgmSyO%2BE3j6RWkZTV9hXHC43s6lR63sTYZ5T6wfnl8DyeRRNxgmzdbeglTz3ee7MroSTNbKfXRbfXtK7r%2BoclVklhi3kNdK9DvvF8fGSsrDLj3WO2FfxgP3fAozKJno%2BJuaB9GjSMzHcsAU3kOg186plcV1y2&X-Amz-Signature=6504f432d72d9e63a10f7f63487eaf0727ed68dd7a2c6dbfcd93ac2d33a1f346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P37JG6T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCCSh%2FrMnf50EcgxZ30tEAPbdBnVpcsDmJaoS4k4xTAXgIgdqU80CxikDlp%2Ba2nYXjFL9xvJum4aiIPsYi9CntWyMIq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKsdAAvStaufZia53ircAwZ%2FrmE55BujnZe5tzmfpHYtr3wntfvZaIusQEAh%2F%2BWzgta%2BvruMUjAUx%2FYZcxRCVSIddGeYnWoK0cxjSzUPODBrv5GfZOnIXhHhcC1MmjA8gn6%2FY5MZH7eU48HuQFYnWtlSoqd%2BXMda%2F9SUVHKfjS9rLx91FEDNcK6ZogO6qRGoDLXX7Kw76C9oKQn7Pw5t4mKFaMuRuTWQyInjhjaeoguIH7UMnY266GlnYpE67Gonkr5sQvvVWKRAlOAJNoQ5coE61gXeWwqfFuVeBPGgF4j05SLVsvBfumRhqYLIwS1ECDgXPUzSg8eKFx57SGieTp%2BSnZZiOX3SkfzC64REWsrzMyC2SyLfTf27AGQ07Mdy18GK%2B437H%2BYgYnPXr81za2%2Biim5pUjDbwxP42k5ZXJT9WVut3LCnJ2rI9awxA2nEo2XURF%2FU0TUoB1IvDVltsUZ3VA6vpJiyyNXQeDEYHuFTRWWdfOyMnwQtG4csAam%2B5OVrUZP3RNAqqRVNpmQ6dSrC%2Fq34X6ymQch0vfXPqVpT0TDf1PFNHw0YfHzYwTXXxSVDW%2BM22jBuppMzy1uqRhcuZy2m6wtzR7lwlflISZC9o5wp6iGBrupxk8goaUSY7HKIJgs64rGd2HxcMKTa%2FcQGOqUBpEd9ZJmCc1RJJnAv9jyw0nBKEAn6iBfNG1646pjGAu0B26V97CSvPv3Mv0c2h7KBgmSyO%2BE3j6RWkZTV9hXHC43s6lR63sTYZ5T6wfnl8DyeRRNxgmzdbeglTz3ee7MroSTNbKfXRbfXtK7r%2BoclVklhi3kNdK9DvvF8fGSsrDLj3WO2FfxgP3fAozKJno%2BJuaB9GjSMzHcsAU3kOg186plcV1y2&X-Amz-Signature=0d9d0bb6237906b8ef9c9c247174a567cbb347c694228528d6004c7a8de7ff5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
