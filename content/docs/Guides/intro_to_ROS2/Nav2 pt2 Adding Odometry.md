---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T10:24:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T10:24:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY6HPWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YCkzy8922rYFzo4Jix0ABwkC6FtD90dIY6DxKY3uYAiEAvMLxfexQ7KAxzz6HeV30JB2mg7OVKPm6YrisjeMiKq8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDL8j%2Bkg22Ez6%2BJ1EUSrcA9Lzz%2BkcEuASA80fQpjg2hmKFV2knR7yR1AAHnTZuB3ORO6msdnC3szcy1BqZru9iHvaWEpg5yH%2B8sojqcKpf91EP1kDFMqsCgiTXaSlhoWyrHvl6mQjWwLj%2FMXhhrnoauVeMYMYgkY7VjP4F5o545bzuxA%2Bs%2F1P8khW1Njj6VNkCzgBn3dHRhCjv00WcDTdkcBs2%2B9V%2FSqkBnW%2FD6%2B16DWchSAdrEchGNvHy25tGmoMripSnpP4KOCp%2BiegzFaN7%2FaKXCs0R%2BevWgsmgWxWXwEEgwwzYdBqEIK9%2BkqK6yAKv8EIU9pVkFU7wz%2FL7pNTDspRCYjRj2CcxIx9n2uS4hPOuj2fM1cFIKoxSLgfMqY52GIeR4jsmKLMh%2FSzoelCsLqrse4Ch5yUIpwmcVqpNTmnef5l6lRRZhAHBRLKMeLBjzhuIz3wSP8r0aMaJZAAstgNmuAnulV6FohScTsWadIr3813Z0ZctJ5axIxDs9yLDP8Ls9vcanYPtFi%2FOXQ8iN0D3rLbcPRvk7xCg4AmaiKQV5trbMLmxJ1PCix1YDJyE1i%2FiH9pQ0yZFeu%2FiZGCZkRpCdyaK8vqX3WHNIHGPPqcJyPn7xQvA0e1bILuHoNxsiQidpAddgjTnXlBMOfvtsQGOqUBqn4XMKlclsyAz7UtDb36XUxuG06bggFr07eLhjW8lbce8o6Euitql0%2FhrajQijTCkemObJo6drNZhfHeSZHUI%2BCandt3hy%2Fq%2FwooO2M20FQIrA0V7gUuhgqBcaOMGxQFIwc57L2T2QDLduFa4r%2BAUgL1hGPu5cc0F9jGjDdDj0GoiT0hl1syE6OJTXMKQ6wjOCdPIkY94e7%2FekV7xDuGSCrU9oTX&X-Amz-Signature=63af36a7b03dc2c838e581f4a1879bf5e19dedb90dda3268bed914c67e6cf186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY6HPWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YCkzy8922rYFzo4Jix0ABwkC6FtD90dIY6DxKY3uYAiEAvMLxfexQ7KAxzz6HeV30JB2mg7OVKPm6YrisjeMiKq8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDL8j%2Bkg22Ez6%2BJ1EUSrcA9Lzz%2BkcEuASA80fQpjg2hmKFV2knR7yR1AAHnTZuB3ORO6msdnC3szcy1BqZru9iHvaWEpg5yH%2B8sojqcKpf91EP1kDFMqsCgiTXaSlhoWyrHvl6mQjWwLj%2FMXhhrnoauVeMYMYgkY7VjP4F5o545bzuxA%2Bs%2F1P8khW1Njj6VNkCzgBn3dHRhCjv00WcDTdkcBs2%2B9V%2FSqkBnW%2FD6%2B16DWchSAdrEchGNvHy25tGmoMripSnpP4KOCp%2BiegzFaN7%2FaKXCs0R%2BevWgsmgWxWXwEEgwwzYdBqEIK9%2BkqK6yAKv8EIU9pVkFU7wz%2FL7pNTDspRCYjRj2CcxIx9n2uS4hPOuj2fM1cFIKoxSLgfMqY52GIeR4jsmKLMh%2FSzoelCsLqrse4Ch5yUIpwmcVqpNTmnef5l6lRRZhAHBRLKMeLBjzhuIz3wSP8r0aMaJZAAstgNmuAnulV6FohScTsWadIr3813Z0ZctJ5axIxDs9yLDP8Ls9vcanYPtFi%2FOXQ8iN0D3rLbcPRvk7xCg4AmaiKQV5trbMLmxJ1PCix1YDJyE1i%2FiH9pQ0yZFeu%2FiZGCZkRpCdyaK8vqX3WHNIHGPPqcJyPn7xQvA0e1bILuHoNxsiQidpAddgjTnXlBMOfvtsQGOqUBqn4XMKlclsyAz7UtDb36XUxuG06bggFr07eLhjW8lbce8o6Euitql0%2FhrajQijTCkemObJo6drNZhfHeSZHUI%2BCandt3hy%2Fq%2FwooO2M20FQIrA0V7gUuhgqBcaOMGxQFIwc57L2T2QDLduFa4r%2BAUgL1hGPu5cc0F9jGjDdDj0GoiT0hl1syE6OJTXMKQ6wjOCdPIkY94e7%2FekV7xDuGSCrU9oTX&X-Amz-Signature=f1b1615e6117a7ff87e23e0fd0c4c34b935a24132a856cc7806bbb952ede2ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY6HPWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YCkzy8922rYFzo4Jix0ABwkC6FtD90dIY6DxKY3uYAiEAvMLxfexQ7KAxzz6HeV30JB2mg7OVKPm6YrisjeMiKq8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDL8j%2Bkg22Ez6%2BJ1EUSrcA9Lzz%2BkcEuASA80fQpjg2hmKFV2knR7yR1AAHnTZuB3ORO6msdnC3szcy1BqZru9iHvaWEpg5yH%2B8sojqcKpf91EP1kDFMqsCgiTXaSlhoWyrHvl6mQjWwLj%2FMXhhrnoauVeMYMYgkY7VjP4F5o545bzuxA%2Bs%2F1P8khW1Njj6VNkCzgBn3dHRhCjv00WcDTdkcBs2%2B9V%2FSqkBnW%2FD6%2B16DWchSAdrEchGNvHy25tGmoMripSnpP4KOCp%2BiegzFaN7%2FaKXCs0R%2BevWgsmgWxWXwEEgwwzYdBqEIK9%2BkqK6yAKv8EIU9pVkFU7wz%2FL7pNTDspRCYjRj2CcxIx9n2uS4hPOuj2fM1cFIKoxSLgfMqY52GIeR4jsmKLMh%2FSzoelCsLqrse4Ch5yUIpwmcVqpNTmnef5l6lRRZhAHBRLKMeLBjzhuIz3wSP8r0aMaJZAAstgNmuAnulV6FohScTsWadIr3813Z0ZctJ5axIxDs9yLDP8Ls9vcanYPtFi%2FOXQ8iN0D3rLbcPRvk7xCg4AmaiKQV5trbMLmxJ1PCix1YDJyE1i%2FiH9pQ0yZFeu%2FiZGCZkRpCdyaK8vqX3WHNIHGPPqcJyPn7xQvA0e1bILuHoNxsiQidpAddgjTnXlBMOfvtsQGOqUBqn4XMKlclsyAz7UtDb36XUxuG06bggFr07eLhjW8lbce8o6Euitql0%2FhrajQijTCkemObJo6drNZhfHeSZHUI%2BCandt3hy%2Fq%2FwooO2M20FQIrA0V7gUuhgqBcaOMGxQFIwc57L2T2QDLduFa4r%2BAUgL1hGPu5cc0F9jGjDdDj0GoiT0hl1syE6OJTXMKQ6wjOCdPIkY94e7%2FekV7xDuGSCrU9oTX&X-Amz-Signature=f8cfda8ea2e23bc6b63b08654ee12fa177d5d3ec359850701bd2089d6a70310a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY6HPWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YCkzy8922rYFzo4Jix0ABwkC6FtD90dIY6DxKY3uYAiEAvMLxfexQ7KAxzz6HeV30JB2mg7OVKPm6YrisjeMiKq8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDL8j%2Bkg22Ez6%2BJ1EUSrcA9Lzz%2BkcEuASA80fQpjg2hmKFV2knR7yR1AAHnTZuB3ORO6msdnC3szcy1BqZru9iHvaWEpg5yH%2B8sojqcKpf91EP1kDFMqsCgiTXaSlhoWyrHvl6mQjWwLj%2FMXhhrnoauVeMYMYgkY7VjP4F5o545bzuxA%2Bs%2F1P8khW1Njj6VNkCzgBn3dHRhCjv00WcDTdkcBs2%2B9V%2FSqkBnW%2FD6%2B16DWchSAdrEchGNvHy25tGmoMripSnpP4KOCp%2BiegzFaN7%2FaKXCs0R%2BevWgsmgWxWXwEEgwwzYdBqEIK9%2BkqK6yAKv8EIU9pVkFU7wz%2FL7pNTDspRCYjRj2CcxIx9n2uS4hPOuj2fM1cFIKoxSLgfMqY52GIeR4jsmKLMh%2FSzoelCsLqrse4Ch5yUIpwmcVqpNTmnef5l6lRRZhAHBRLKMeLBjzhuIz3wSP8r0aMaJZAAstgNmuAnulV6FohScTsWadIr3813Z0ZctJ5axIxDs9yLDP8Ls9vcanYPtFi%2FOXQ8iN0D3rLbcPRvk7xCg4AmaiKQV5trbMLmxJ1PCix1YDJyE1i%2FiH9pQ0yZFeu%2FiZGCZkRpCdyaK8vqX3WHNIHGPPqcJyPn7xQvA0e1bILuHoNxsiQidpAddgjTnXlBMOfvtsQGOqUBqn4XMKlclsyAz7UtDb36XUxuG06bggFr07eLhjW8lbce8o6Euitql0%2FhrajQijTCkemObJo6drNZhfHeSZHUI%2BCandt3hy%2Fq%2FwooO2M20FQIrA0V7gUuhgqBcaOMGxQFIwc57L2T2QDLduFa4r%2BAUgL1hGPu5cc0F9jGjDdDj0GoiT0hl1syE6OJTXMKQ6wjOCdPIkY94e7%2FekV7xDuGSCrU9oTX&X-Amz-Signature=92f3d2e6e4908a164bea21a74445c307cfcf3c98c9b95210cb87687fa3a1ef24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY6HPWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YCkzy8922rYFzo4Jix0ABwkC6FtD90dIY6DxKY3uYAiEAvMLxfexQ7KAxzz6HeV30JB2mg7OVKPm6YrisjeMiKq8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDL8j%2Bkg22Ez6%2BJ1EUSrcA9Lzz%2BkcEuASA80fQpjg2hmKFV2knR7yR1AAHnTZuB3ORO6msdnC3szcy1BqZru9iHvaWEpg5yH%2B8sojqcKpf91EP1kDFMqsCgiTXaSlhoWyrHvl6mQjWwLj%2FMXhhrnoauVeMYMYgkY7VjP4F5o545bzuxA%2Bs%2F1P8khW1Njj6VNkCzgBn3dHRhCjv00WcDTdkcBs2%2B9V%2FSqkBnW%2FD6%2B16DWchSAdrEchGNvHy25tGmoMripSnpP4KOCp%2BiegzFaN7%2FaKXCs0R%2BevWgsmgWxWXwEEgwwzYdBqEIK9%2BkqK6yAKv8EIU9pVkFU7wz%2FL7pNTDspRCYjRj2CcxIx9n2uS4hPOuj2fM1cFIKoxSLgfMqY52GIeR4jsmKLMh%2FSzoelCsLqrse4Ch5yUIpwmcVqpNTmnef5l6lRRZhAHBRLKMeLBjzhuIz3wSP8r0aMaJZAAstgNmuAnulV6FohScTsWadIr3813Z0ZctJ5axIxDs9yLDP8Ls9vcanYPtFi%2FOXQ8iN0D3rLbcPRvk7xCg4AmaiKQV5trbMLmxJ1PCix1YDJyE1i%2FiH9pQ0yZFeu%2FiZGCZkRpCdyaK8vqX3WHNIHGPPqcJyPn7xQvA0e1bILuHoNxsiQidpAddgjTnXlBMOfvtsQGOqUBqn4XMKlclsyAz7UtDb36XUxuG06bggFr07eLhjW8lbce8o6Euitql0%2FhrajQijTCkemObJo6drNZhfHeSZHUI%2BCandt3hy%2Fq%2FwooO2M20FQIrA0V7gUuhgqBcaOMGxQFIwc57L2T2QDLduFa4r%2BAUgL1hGPu5cc0F9jGjDdDj0GoiT0hl1syE6OJTXMKQ6wjOCdPIkY94e7%2FekV7xDuGSCrU9oTX&X-Amz-Signature=9b8b02c07dc180a31adfeee015692e4bd66b17627c3f470c28283a32da8a2f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      ```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY6HPWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YCkzy8922rYFzo4Jix0ABwkC6FtD90dIY6DxKY3uYAiEAvMLxfexQ7KAxzz6HeV30JB2mg7OVKPm6YrisjeMiKq8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDL8j%2Bkg22Ez6%2BJ1EUSrcA9Lzz%2BkcEuASA80fQpjg2hmKFV2knR7yR1AAHnTZuB3ORO6msdnC3szcy1BqZru9iHvaWEpg5yH%2B8sojqcKpf91EP1kDFMqsCgiTXaSlhoWyrHvl6mQjWwLj%2FMXhhrnoauVeMYMYgkY7VjP4F5o545bzuxA%2Bs%2F1P8khW1Njj6VNkCzgBn3dHRhCjv00WcDTdkcBs2%2B9V%2FSqkBnW%2FD6%2B16DWchSAdrEchGNvHy25tGmoMripSnpP4KOCp%2BiegzFaN7%2FaKXCs0R%2BevWgsmgWxWXwEEgwwzYdBqEIK9%2BkqK6yAKv8EIU9pVkFU7wz%2FL7pNTDspRCYjRj2CcxIx9n2uS4hPOuj2fM1cFIKoxSLgfMqY52GIeR4jsmKLMh%2FSzoelCsLqrse4Ch5yUIpwmcVqpNTmnef5l6lRRZhAHBRLKMeLBjzhuIz3wSP8r0aMaJZAAstgNmuAnulV6FohScTsWadIr3813Z0ZctJ5axIxDs9yLDP8Ls9vcanYPtFi%2FOXQ8iN0D3rLbcPRvk7xCg4AmaiKQV5trbMLmxJ1PCix1YDJyE1i%2FiH9pQ0yZFeu%2FiZGCZkRpCdyaK8vqX3WHNIHGPPqcJyPn7xQvA0e1bILuHoNxsiQidpAddgjTnXlBMOfvtsQGOqUBqn4XMKlclsyAz7UtDb36XUxuG06bggFr07eLhjW8lbce8o6Euitql0%2FhrajQijTCkemObJo6drNZhfHeSZHUI%2BCandt3hy%2Fq%2FwooO2M20FQIrA0V7gUuhgqBcaOMGxQFIwc57L2T2QDLduFa4r%2BAUgL1hGPu5cc0F9jGjDdDj0GoiT0hl1syE6OJTXMKQ6wjOCdPIkY94e7%2FekV7xDuGSCrU9oTX&X-Amz-Signature=d70b79ef47f3174436cf83e7e85ba677c39c380a8207f77fccd52cd0a2bc72e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY6HPWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YCkzy8922rYFzo4Jix0ABwkC6FtD90dIY6DxKY3uYAiEAvMLxfexQ7KAxzz6HeV30JB2mg7OVKPm6YrisjeMiKq8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDL8j%2Bkg22Ez6%2BJ1EUSrcA9Lzz%2BkcEuASA80fQpjg2hmKFV2knR7yR1AAHnTZuB3ORO6msdnC3szcy1BqZru9iHvaWEpg5yH%2B8sojqcKpf91EP1kDFMqsCgiTXaSlhoWyrHvl6mQjWwLj%2FMXhhrnoauVeMYMYgkY7VjP4F5o545bzuxA%2Bs%2F1P8khW1Njj6VNkCzgBn3dHRhCjv00WcDTdkcBs2%2B9V%2FSqkBnW%2FD6%2B16DWchSAdrEchGNvHy25tGmoMripSnpP4KOCp%2BiegzFaN7%2FaKXCs0R%2BevWgsmgWxWXwEEgwwzYdBqEIK9%2BkqK6yAKv8EIU9pVkFU7wz%2FL7pNTDspRCYjRj2CcxIx9n2uS4hPOuj2fM1cFIKoxSLgfMqY52GIeR4jsmKLMh%2FSzoelCsLqrse4Ch5yUIpwmcVqpNTmnef5l6lRRZhAHBRLKMeLBjzhuIz3wSP8r0aMaJZAAstgNmuAnulV6FohScTsWadIr3813Z0ZctJ5axIxDs9yLDP8Ls9vcanYPtFi%2FOXQ8iN0D3rLbcPRvk7xCg4AmaiKQV5trbMLmxJ1PCix1YDJyE1i%2FiH9pQ0yZFeu%2FiZGCZkRpCdyaK8vqX3WHNIHGPPqcJyPn7xQvA0e1bILuHoNxsiQidpAddgjTnXlBMOfvtsQGOqUBqn4XMKlclsyAz7UtDb36XUxuG06bggFr07eLhjW8lbce8o6Euitql0%2FhrajQijTCkemObJo6drNZhfHeSZHUI%2BCandt3hy%2Fq%2FwooO2M20FQIrA0V7gUuhgqBcaOMGxQFIwc57L2T2QDLduFa4r%2BAUgL1hGPu5cc0F9jGjDdDj0GoiT0hl1syE6OJTXMKQ6wjOCdPIkY94e7%2FekV7xDuGSCrU9oTX&X-Amz-Signature=d9a4b1fa6009b3aff67591e8de0b6006bc94369fc853d9de77ccf713108f6a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY6HPWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YCkzy8922rYFzo4Jix0ABwkC6FtD90dIY6DxKY3uYAiEAvMLxfexQ7KAxzz6HeV30JB2mg7OVKPm6YrisjeMiKq8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDL8j%2Bkg22Ez6%2BJ1EUSrcA9Lzz%2BkcEuASA80fQpjg2hmKFV2knR7yR1AAHnTZuB3ORO6msdnC3szcy1BqZru9iHvaWEpg5yH%2B8sojqcKpf91EP1kDFMqsCgiTXaSlhoWyrHvl6mQjWwLj%2FMXhhrnoauVeMYMYgkY7VjP4F5o545bzuxA%2Bs%2F1P8khW1Njj6VNkCzgBn3dHRhCjv00WcDTdkcBs2%2B9V%2FSqkBnW%2FD6%2B16DWchSAdrEchGNvHy25tGmoMripSnpP4KOCp%2BiegzFaN7%2FaKXCs0R%2BevWgsmgWxWXwEEgwwzYdBqEIK9%2BkqK6yAKv8EIU9pVkFU7wz%2FL7pNTDspRCYjRj2CcxIx9n2uS4hPOuj2fM1cFIKoxSLgfMqY52GIeR4jsmKLMh%2FSzoelCsLqrse4Ch5yUIpwmcVqpNTmnef5l6lRRZhAHBRLKMeLBjzhuIz3wSP8r0aMaJZAAstgNmuAnulV6FohScTsWadIr3813Z0ZctJ5axIxDs9yLDP8Ls9vcanYPtFi%2FOXQ8iN0D3rLbcPRvk7xCg4AmaiKQV5trbMLmxJ1PCix1YDJyE1i%2FiH9pQ0yZFeu%2FiZGCZkRpCdyaK8vqX3WHNIHGPPqcJyPn7xQvA0e1bILuHoNxsiQidpAddgjTnXlBMOfvtsQGOqUBqn4XMKlclsyAz7UtDb36XUxuG06bggFr07eLhjW8lbce8o6Euitql0%2FhrajQijTCkemObJo6drNZhfHeSZHUI%2BCandt3hy%2Fq%2FwooO2M20FQIrA0V7gUuhgqBcaOMGxQFIwc57L2T2QDLduFa4r%2BAUgL1hGPu5cc0F9jGjDdDj0GoiT0hl1syE6OJTXMKQ6wjOCdPIkY94e7%2FekV7xDuGSCrU9oTX&X-Amz-Signature=648f52eef543d2e23c4c962c3a30e218ffed4eebcd59f0eb07e9e6a9c36f5760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY6HPWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YCkzy8922rYFzo4Jix0ABwkC6FtD90dIY6DxKY3uYAiEAvMLxfexQ7KAxzz6HeV30JB2mg7OVKPm6YrisjeMiKq8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDL8j%2Bkg22Ez6%2BJ1EUSrcA9Lzz%2BkcEuASA80fQpjg2hmKFV2knR7yR1AAHnTZuB3ORO6msdnC3szcy1BqZru9iHvaWEpg5yH%2B8sojqcKpf91EP1kDFMqsCgiTXaSlhoWyrHvl6mQjWwLj%2FMXhhrnoauVeMYMYgkY7VjP4F5o545bzuxA%2Bs%2F1P8khW1Njj6VNkCzgBn3dHRhCjv00WcDTdkcBs2%2B9V%2FSqkBnW%2FD6%2B16DWchSAdrEchGNvHy25tGmoMripSnpP4KOCp%2BiegzFaN7%2FaKXCs0R%2BevWgsmgWxWXwEEgwwzYdBqEIK9%2BkqK6yAKv8EIU9pVkFU7wz%2FL7pNTDspRCYjRj2CcxIx9n2uS4hPOuj2fM1cFIKoxSLgfMqY52GIeR4jsmKLMh%2FSzoelCsLqrse4Ch5yUIpwmcVqpNTmnef5l6lRRZhAHBRLKMeLBjzhuIz3wSP8r0aMaJZAAstgNmuAnulV6FohScTsWadIr3813Z0ZctJ5axIxDs9yLDP8Ls9vcanYPtFi%2FOXQ8iN0D3rLbcPRvk7xCg4AmaiKQV5trbMLmxJ1PCix1YDJyE1i%2FiH9pQ0yZFeu%2FiZGCZkRpCdyaK8vqX3WHNIHGPPqcJyPn7xQvA0e1bILuHoNxsiQidpAddgjTnXlBMOfvtsQGOqUBqn4XMKlclsyAz7UtDb36XUxuG06bggFr07eLhjW8lbce8o6Euitql0%2FhrajQijTCkemObJo6drNZhfHeSZHUI%2BCandt3hy%2Fq%2FwooO2M20FQIrA0V7gUuhgqBcaOMGxQFIwc57L2T2QDLduFa4r%2BAUgL1hGPu5cc0F9jGjDdDj0GoiT0hl1syE6OJTXMKQ6wjOCdPIkY94e7%2FekV7xDuGSCrU9oTX&X-Amz-Signature=ea5b92456b8feb373717fcd8c1b52d62e44459db76e8044c0be1d32b2d76c78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY6HPWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YCkzy8922rYFzo4Jix0ABwkC6FtD90dIY6DxKY3uYAiEAvMLxfexQ7KAxzz6HeV30JB2mg7OVKPm6YrisjeMiKq8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDL8j%2Bkg22Ez6%2BJ1EUSrcA9Lzz%2BkcEuASA80fQpjg2hmKFV2knR7yR1AAHnTZuB3ORO6msdnC3szcy1BqZru9iHvaWEpg5yH%2B8sojqcKpf91EP1kDFMqsCgiTXaSlhoWyrHvl6mQjWwLj%2FMXhhrnoauVeMYMYgkY7VjP4F5o545bzuxA%2Bs%2F1P8khW1Njj6VNkCzgBn3dHRhCjv00WcDTdkcBs2%2B9V%2FSqkBnW%2FD6%2B16DWchSAdrEchGNvHy25tGmoMripSnpP4KOCp%2BiegzFaN7%2FaKXCs0R%2BevWgsmgWxWXwEEgwwzYdBqEIK9%2BkqK6yAKv8EIU9pVkFU7wz%2FL7pNTDspRCYjRj2CcxIx9n2uS4hPOuj2fM1cFIKoxSLgfMqY52GIeR4jsmKLMh%2FSzoelCsLqrse4Ch5yUIpwmcVqpNTmnef5l6lRRZhAHBRLKMeLBjzhuIz3wSP8r0aMaJZAAstgNmuAnulV6FohScTsWadIr3813Z0ZctJ5axIxDs9yLDP8Ls9vcanYPtFi%2FOXQ8iN0D3rLbcPRvk7xCg4AmaiKQV5trbMLmxJ1PCix1YDJyE1i%2FiH9pQ0yZFeu%2FiZGCZkRpCdyaK8vqX3WHNIHGPPqcJyPn7xQvA0e1bILuHoNxsiQidpAddgjTnXlBMOfvtsQGOqUBqn4XMKlclsyAz7UtDb36XUxuG06bggFr07eLhjW8lbce8o6Euitql0%2FhrajQijTCkemObJo6drNZhfHeSZHUI%2BCandt3hy%2Fq%2FwooO2M20FQIrA0V7gUuhgqBcaOMGxQFIwc57L2T2QDLduFa4r%2BAUgL1hGPu5cc0F9jGjDdDj0GoiT0hl1syE6OJTXMKQ6wjOCdPIkY94e7%2FekV7xDuGSCrU9oTX&X-Amz-Signature=4ef066eb156f8060ae02679a530794575bc24f31e85f72e25590a51be231d6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH3NM6O6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjs5wQU871yqu58J8%2BSpYkxujbngA9JY9ur%2BTA2tkxjwIhAKk%2FwuPbPH32SjSAJ4SPCbGKg1xWltN9o2%2Fy1h%2FRZL91Kv8DCBAQABoMNjM3NDIzMTgzODA1IgxD3GhX9rn3MRlzBeAq3ANQ86yDFb8fpmmi%2FEYLjCBuntOtk8ji2j7QnocTfw%2FesWz72SdvPymQAXlCmdxFwonUwZgY8r9s5g3zugKAHnwWIlD0x6pN4Aas1UKcrUBnHMgFmO8lhEgbg5zmQhJ8cFFYfS3BBZ3B%2BEafIF9TclJAad%2Bi%2FR41xkNw1rQOSCZa%2FkgwzYCpQMdhBnM9hfKs1J6yFh1rw%2BfEdqeFJqan502yX9qdp2XmMfV3CkNd2icfc%2FSaFSUFIfhcdiUZokeSrGKwHW50mnOslWyuuNWYUGirGW5erDEvbyJ9o%2F8JR1gooo8y%2FiNZx4BidU3439OdW5LXrENDmyiw1kljYIitCJAifh3%2Fv7KELI0iPo%2FCR0m1BsPGFFRbxDOWn1TUsHDqWfNTlhK2YvXgnhi3o0alccuZEEJV1gR%2FPJQAc9%2F23CxvbCxiM1wCTWMvxfNVhGlrm0jCcCsEGx%2FfMiO7pP8%2FC3rYVxNOjG8bSSdJ5VCZRAzmjDwmMK1MMhItjq3%2B%2BF9D%2F6ypXQj00G3J4hCEK%2FJLx2MPt5wxo2GQKrvuR%2FyH7QGyaCSGyHdW8XltJBgrMNatARZ1KiY1WkbqynPCcxHTtIPP46en4fpxRCaLZ5I4DJ5kDAFrInRYeVT92xZaUjDT77bEBjqkAW3AM92UPmAUl2y55Vo39oJKxiKtAFOAdNcdu%2F0c3%2FMvkUSu4BVYoWSDdICHmsBHIycgvGnOM5l7tj8VqZJQR3gRVVwT2RhvXuE1bA39T1TKmzesfELncUbf3GN5dvBpB1FBUfDvYeuyApotPmk7xKTjzQ%2BR22aXn%2B2uHJvcZjcXowtWzhqErQmYH6%2BPA6jujNjG2x7DwrhckCoqP3%2BPbRreD3Cb&X-Amz-Signature=7aac09e5f182cc5561f9bcd133df46d9a74118643115121e1c81009b6dcaa1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XY6HPWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0YCkzy8922rYFzo4Jix0ABwkC6FtD90dIY6DxKY3uYAiEAvMLxfexQ7KAxzz6HeV30JB2mg7OVKPm6YrisjeMiKq8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDL8j%2Bkg22Ez6%2BJ1EUSrcA9Lzz%2BkcEuASA80fQpjg2hmKFV2knR7yR1AAHnTZuB3ORO6msdnC3szcy1BqZru9iHvaWEpg5yH%2B8sojqcKpf91EP1kDFMqsCgiTXaSlhoWyrHvl6mQjWwLj%2FMXhhrnoauVeMYMYgkY7VjP4F5o545bzuxA%2Bs%2F1P8khW1Njj6VNkCzgBn3dHRhCjv00WcDTdkcBs2%2B9V%2FSqkBnW%2FD6%2B16DWchSAdrEchGNvHy25tGmoMripSnpP4KOCp%2BiegzFaN7%2FaKXCs0R%2BevWgsmgWxWXwEEgwwzYdBqEIK9%2BkqK6yAKv8EIU9pVkFU7wz%2FL7pNTDspRCYjRj2CcxIx9n2uS4hPOuj2fM1cFIKoxSLgfMqY52GIeR4jsmKLMh%2FSzoelCsLqrse4Ch5yUIpwmcVqpNTmnef5l6lRRZhAHBRLKMeLBjzhuIz3wSP8r0aMaJZAAstgNmuAnulV6FohScTsWadIr3813Z0ZctJ5axIxDs9yLDP8Ls9vcanYPtFi%2FOXQ8iN0D3rLbcPRvk7xCg4AmaiKQV5trbMLmxJ1PCix1YDJyE1i%2FiH9pQ0yZFeu%2FiZGCZkRpCdyaK8vqX3WHNIHGPPqcJyPn7xQvA0e1bILuHoNxsiQidpAddgjTnXlBMOfvtsQGOqUBqn4XMKlclsyAz7UtDb36XUxuG06bggFr07eLhjW8lbce8o6Euitql0%2FhrajQijTCkemObJo6drNZhfHeSZHUI%2BCandt3hy%2Fq%2FwooO2M20FQIrA0V7gUuhgqBcaOMGxQFIwc57L2T2QDLduFa4r%2BAUgL1hGPu5cc0F9jGjDdDj0GoiT0hl1syE6OJTXMKQ6wjOCdPIkY94e7%2FekV7xDuGSCrU9oTX&X-Amz-Signature=7ccf0cff454519aad46f380eb6ae5c0a97269c3e96810588d12ec6bedb6c92e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEPKQIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCowaJYPD0iLNuaFp%2FRdSPYBUppWKhQ0N2n7uPONcGHLAIgJDJ4wz2SvVyILfZc2Mjk%2BpPKv3U6od21cM8PhgV1%2FG0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCJ9IvaskeDhjzuTASrcAwTZzPJNbKHGkWbFSkmWDxtlnzrIm%2Fl40b8E9Rjlsh2MsSJ1Ly3COjGgRLaBh16Y%2F8DG71Lu42Qn2JzTY3pN0uVqGfZxyacf3gVzOhWhH7wmy7NmYfeXKH3uRrAQV9%2FFSyytJN6cRah4ObcIOCY%2FT0Otm8%2FGikTf%2Bw82wUQF%2BrGa9ngZut%2BUJEE2HKTsOXgAHZHK4I9ICp8Q%2B5VIHDOD2r%2BVCA90uLg2vYsIzEKcMYsYoDcayBUb4qLVCOdIehP4OCuEehXU3dsp%2Fg5cdJEwsxDYmeFRzFh3Rz6ykNalkDMVJlwJnkrBLKYkdg%2BPXiXZfb0tyzWIW73zlaHngrVlqpxEZ9MUjGPJpjgm9ei2%2FpjrXo22xmik4ZtYPwpO9fP8TLIh4V8jUuh5ra8Au3nyvNAXKYAm69JLPZwa54JrVZ9j8IW2n9Ieea2S2e4cePNLTgi7SwbZbnIUaObABXVA0dDphTRZJEOOy3hlrnYTsaP55X935Gmbl3SMU3BausPAB4UhL3UpshatbukGPsFDRApecqPhHB6vWkOcqwkU1%2FQExVLDMYd2zqo%2BU7jsW3MPkKP2DZ%2B2Sox4xNSSC4s%2By%2FgANspaie2FhhLEkhVKr8sMnxRryhDZhmRK7EvjMKnwtsQGOqUB%2FLFXbck6doSMk6sLgWDex3TLizy9SuiQ2cDBKkHqxIhU6dqtzOfyhXVIRHeQ2jeemMgpPAu%2F5XPdWMPzFN%2Fz5%2F9EU5fXkk5lduP1TGkbmFoJQ4ULGp%2Frp6XWJtx4quJ2gTIeep0WDvz6nxd%2FiRDhh6kOOlZEJeHlNZeUXTFshsbdV2sp8ITkwt34%2BM%2FvnN9S42Tdz0Ee3aa2frNpyWfRfun91qnY&X-Amz-Signature=cfc3d89a388600fb4b361b01ae78e0461d2f0b9b3d87a8f717452009536416b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEPKQIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCowaJYPD0iLNuaFp%2FRdSPYBUppWKhQ0N2n7uPONcGHLAIgJDJ4wz2SvVyILfZc2Mjk%2BpPKv3U6od21cM8PhgV1%2FG0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCJ9IvaskeDhjzuTASrcAwTZzPJNbKHGkWbFSkmWDxtlnzrIm%2Fl40b8E9Rjlsh2MsSJ1Ly3COjGgRLaBh16Y%2F8DG71Lu42Qn2JzTY3pN0uVqGfZxyacf3gVzOhWhH7wmy7NmYfeXKH3uRrAQV9%2FFSyytJN6cRah4ObcIOCY%2FT0Otm8%2FGikTf%2Bw82wUQF%2BrGa9ngZut%2BUJEE2HKTsOXgAHZHK4I9ICp8Q%2B5VIHDOD2r%2BVCA90uLg2vYsIzEKcMYsYoDcayBUb4qLVCOdIehP4OCuEehXU3dsp%2Fg5cdJEwsxDYmeFRzFh3Rz6ykNalkDMVJlwJnkrBLKYkdg%2BPXiXZfb0tyzWIW73zlaHngrVlqpxEZ9MUjGPJpjgm9ei2%2FpjrXo22xmik4ZtYPwpO9fP8TLIh4V8jUuh5ra8Au3nyvNAXKYAm69JLPZwa54JrVZ9j8IW2n9Ieea2S2e4cePNLTgi7SwbZbnIUaObABXVA0dDphTRZJEOOy3hlrnYTsaP55X935Gmbl3SMU3BausPAB4UhL3UpshatbukGPsFDRApecqPhHB6vWkOcqwkU1%2FQExVLDMYd2zqo%2BU7jsW3MPkKP2DZ%2B2Sox4xNSSC4s%2By%2FgANspaie2FhhLEkhVKr8sMnxRryhDZhmRK7EvjMKnwtsQGOqUB%2FLFXbck6doSMk6sLgWDex3TLizy9SuiQ2cDBKkHqxIhU6dqtzOfyhXVIRHeQ2jeemMgpPAu%2F5XPdWMPzFN%2Fz5%2F9EU5fXkk5lduP1TGkbmFoJQ4ULGp%2Frp6XWJtx4quJ2gTIeep0WDvz6nxd%2FiRDhh6kOOlZEJeHlNZeUXTFshsbdV2sp8ITkwt34%2BM%2FvnN9S42Tdz0Ee3aa2frNpyWfRfun91qnY&X-Amz-Signature=6ca22d752de7b637c07e59ae22f5d148e95c127cd0049f02323bb7353f0007c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEPKQIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCowaJYPD0iLNuaFp%2FRdSPYBUppWKhQ0N2n7uPONcGHLAIgJDJ4wz2SvVyILfZc2Mjk%2BpPKv3U6od21cM8PhgV1%2FG0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCJ9IvaskeDhjzuTASrcAwTZzPJNbKHGkWbFSkmWDxtlnzrIm%2Fl40b8E9Rjlsh2MsSJ1Ly3COjGgRLaBh16Y%2F8DG71Lu42Qn2JzTY3pN0uVqGfZxyacf3gVzOhWhH7wmy7NmYfeXKH3uRrAQV9%2FFSyytJN6cRah4ObcIOCY%2FT0Otm8%2FGikTf%2Bw82wUQF%2BrGa9ngZut%2BUJEE2HKTsOXgAHZHK4I9ICp8Q%2B5VIHDOD2r%2BVCA90uLg2vYsIzEKcMYsYoDcayBUb4qLVCOdIehP4OCuEehXU3dsp%2Fg5cdJEwsxDYmeFRzFh3Rz6ykNalkDMVJlwJnkrBLKYkdg%2BPXiXZfb0tyzWIW73zlaHngrVlqpxEZ9MUjGPJpjgm9ei2%2FpjrXo22xmik4ZtYPwpO9fP8TLIh4V8jUuh5ra8Au3nyvNAXKYAm69JLPZwa54JrVZ9j8IW2n9Ieea2S2e4cePNLTgi7SwbZbnIUaObABXVA0dDphTRZJEOOy3hlrnYTsaP55X935Gmbl3SMU3BausPAB4UhL3UpshatbukGPsFDRApecqPhHB6vWkOcqwkU1%2FQExVLDMYd2zqo%2BU7jsW3MPkKP2DZ%2B2Sox4xNSSC4s%2By%2FgANspaie2FhhLEkhVKr8sMnxRryhDZhmRK7EvjMKnwtsQGOqUB%2FLFXbck6doSMk6sLgWDex3TLizy9SuiQ2cDBKkHqxIhU6dqtzOfyhXVIRHeQ2jeemMgpPAu%2F5XPdWMPzFN%2Fz5%2F9EU5fXkk5lduP1TGkbmFoJQ4ULGp%2Frp6XWJtx4quJ2gTIeep0WDvz6nxd%2FiRDhh6kOOlZEJeHlNZeUXTFshsbdV2sp8ITkwt34%2BM%2FvnN9S42Tdz0Ee3aa2frNpyWfRfun91qnY&X-Amz-Signature=11cb0dd16f1931107d6b852a17a20545ecbb3c36efdd5708ce1114491fe59f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEPKQIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCowaJYPD0iLNuaFp%2FRdSPYBUppWKhQ0N2n7uPONcGHLAIgJDJ4wz2SvVyILfZc2Mjk%2BpPKv3U6od21cM8PhgV1%2FG0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCJ9IvaskeDhjzuTASrcAwTZzPJNbKHGkWbFSkmWDxtlnzrIm%2Fl40b8E9Rjlsh2MsSJ1Ly3COjGgRLaBh16Y%2F8DG71Lu42Qn2JzTY3pN0uVqGfZxyacf3gVzOhWhH7wmy7NmYfeXKH3uRrAQV9%2FFSyytJN6cRah4ObcIOCY%2FT0Otm8%2FGikTf%2Bw82wUQF%2BrGa9ngZut%2BUJEE2HKTsOXgAHZHK4I9ICp8Q%2B5VIHDOD2r%2BVCA90uLg2vYsIzEKcMYsYoDcayBUb4qLVCOdIehP4OCuEehXU3dsp%2Fg5cdJEwsxDYmeFRzFh3Rz6ykNalkDMVJlwJnkrBLKYkdg%2BPXiXZfb0tyzWIW73zlaHngrVlqpxEZ9MUjGPJpjgm9ei2%2FpjrXo22xmik4ZtYPwpO9fP8TLIh4V8jUuh5ra8Au3nyvNAXKYAm69JLPZwa54JrVZ9j8IW2n9Ieea2S2e4cePNLTgi7SwbZbnIUaObABXVA0dDphTRZJEOOy3hlrnYTsaP55X935Gmbl3SMU3BausPAB4UhL3UpshatbukGPsFDRApecqPhHB6vWkOcqwkU1%2FQExVLDMYd2zqo%2BU7jsW3MPkKP2DZ%2B2Sox4xNSSC4s%2By%2FgANspaie2FhhLEkhVKr8sMnxRryhDZhmRK7EvjMKnwtsQGOqUB%2FLFXbck6doSMk6sLgWDex3TLizy9SuiQ2cDBKkHqxIhU6dqtzOfyhXVIRHeQ2jeemMgpPAu%2F5XPdWMPzFN%2Fz5%2F9EU5fXkk5lduP1TGkbmFoJQ4ULGp%2Frp6XWJtx4quJ2gTIeep0WDvz6nxd%2FiRDhh6kOOlZEJeHlNZeUXTFshsbdV2sp8ITkwt34%2BM%2FvnN9S42Tdz0Ee3aa2frNpyWfRfun91qnY&X-Amz-Signature=9aae9c3643fba1760b13efc3203f0b2654a871503044dd23c4006f0db94c9a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEPKQIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCowaJYPD0iLNuaFp%2FRdSPYBUppWKhQ0N2n7uPONcGHLAIgJDJ4wz2SvVyILfZc2Mjk%2BpPKv3U6od21cM8PhgV1%2FG0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCJ9IvaskeDhjzuTASrcAwTZzPJNbKHGkWbFSkmWDxtlnzrIm%2Fl40b8E9Rjlsh2MsSJ1Ly3COjGgRLaBh16Y%2F8DG71Lu42Qn2JzTY3pN0uVqGfZxyacf3gVzOhWhH7wmy7NmYfeXKH3uRrAQV9%2FFSyytJN6cRah4ObcIOCY%2FT0Otm8%2FGikTf%2Bw82wUQF%2BrGa9ngZut%2BUJEE2HKTsOXgAHZHK4I9ICp8Q%2B5VIHDOD2r%2BVCA90uLg2vYsIzEKcMYsYoDcayBUb4qLVCOdIehP4OCuEehXU3dsp%2Fg5cdJEwsxDYmeFRzFh3Rz6ykNalkDMVJlwJnkrBLKYkdg%2BPXiXZfb0tyzWIW73zlaHngrVlqpxEZ9MUjGPJpjgm9ei2%2FpjrXo22xmik4ZtYPwpO9fP8TLIh4V8jUuh5ra8Au3nyvNAXKYAm69JLPZwa54JrVZ9j8IW2n9Ieea2S2e4cePNLTgi7SwbZbnIUaObABXVA0dDphTRZJEOOy3hlrnYTsaP55X935Gmbl3SMU3BausPAB4UhL3UpshatbukGPsFDRApecqPhHB6vWkOcqwkU1%2FQExVLDMYd2zqo%2BU7jsW3MPkKP2DZ%2B2Sox4xNSSC4s%2By%2FgANspaie2FhhLEkhVKr8sMnxRryhDZhmRK7EvjMKnwtsQGOqUB%2FLFXbck6doSMk6sLgWDex3TLizy9SuiQ2cDBKkHqxIhU6dqtzOfyhXVIRHeQ2jeemMgpPAu%2F5XPdWMPzFN%2Fz5%2F9EU5fXkk5lduP1TGkbmFoJQ4ULGp%2Frp6XWJtx4quJ2gTIeep0WDvz6nxd%2FiRDhh6kOOlZEJeHlNZeUXTFshsbdV2sp8ITkwt34%2BM%2FvnN9S42Tdz0Ee3aa2frNpyWfRfun91qnY&X-Amz-Signature=ed5dde6b0f7d094fee1af7ec23b52b1faf04be3449a29005f71a4facbf64776d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEPKQIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCowaJYPD0iLNuaFp%2FRdSPYBUppWKhQ0N2n7uPONcGHLAIgJDJ4wz2SvVyILfZc2Mjk%2BpPKv3U6od21cM8PhgV1%2FG0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCJ9IvaskeDhjzuTASrcAwTZzPJNbKHGkWbFSkmWDxtlnzrIm%2Fl40b8E9Rjlsh2MsSJ1Ly3COjGgRLaBh16Y%2F8DG71Lu42Qn2JzTY3pN0uVqGfZxyacf3gVzOhWhH7wmy7NmYfeXKH3uRrAQV9%2FFSyytJN6cRah4ObcIOCY%2FT0Otm8%2FGikTf%2Bw82wUQF%2BrGa9ngZut%2BUJEE2HKTsOXgAHZHK4I9ICp8Q%2B5VIHDOD2r%2BVCA90uLg2vYsIzEKcMYsYoDcayBUb4qLVCOdIehP4OCuEehXU3dsp%2Fg5cdJEwsxDYmeFRzFh3Rz6ykNalkDMVJlwJnkrBLKYkdg%2BPXiXZfb0tyzWIW73zlaHngrVlqpxEZ9MUjGPJpjgm9ei2%2FpjrXo22xmik4ZtYPwpO9fP8TLIh4V8jUuh5ra8Au3nyvNAXKYAm69JLPZwa54JrVZ9j8IW2n9Ieea2S2e4cePNLTgi7SwbZbnIUaObABXVA0dDphTRZJEOOy3hlrnYTsaP55X935Gmbl3SMU3BausPAB4UhL3UpshatbukGPsFDRApecqPhHB6vWkOcqwkU1%2FQExVLDMYd2zqo%2BU7jsW3MPkKP2DZ%2B2Sox4xNSSC4s%2By%2FgANspaie2FhhLEkhVKr8sMnxRryhDZhmRK7EvjMKnwtsQGOqUB%2FLFXbck6doSMk6sLgWDex3TLizy9SuiQ2cDBKkHqxIhU6dqtzOfyhXVIRHeQ2jeemMgpPAu%2F5XPdWMPzFN%2Fz5%2F9EU5fXkk5lduP1TGkbmFoJQ4ULGp%2Frp6XWJtx4quJ2gTIeep0WDvz6nxd%2FiRDhh6kOOlZEJeHlNZeUXTFshsbdV2sp8ITkwt34%2BM%2FvnN9S42Tdz0Ee3aa2frNpyWfRfun91qnY&X-Amz-Signature=2df8e71d5e6d9c509951f1bd9a956b69a30ab5a0156e0912fd6bfd949dd3f2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEPKQIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCowaJYPD0iLNuaFp%2FRdSPYBUppWKhQ0N2n7uPONcGHLAIgJDJ4wz2SvVyILfZc2Mjk%2BpPKv3U6od21cM8PhgV1%2FG0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCJ9IvaskeDhjzuTASrcAwTZzPJNbKHGkWbFSkmWDxtlnzrIm%2Fl40b8E9Rjlsh2MsSJ1Ly3COjGgRLaBh16Y%2F8DG71Lu42Qn2JzTY3pN0uVqGfZxyacf3gVzOhWhH7wmy7NmYfeXKH3uRrAQV9%2FFSyytJN6cRah4ObcIOCY%2FT0Otm8%2FGikTf%2Bw82wUQF%2BrGa9ngZut%2BUJEE2HKTsOXgAHZHK4I9ICp8Q%2B5VIHDOD2r%2BVCA90uLg2vYsIzEKcMYsYoDcayBUb4qLVCOdIehP4OCuEehXU3dsp%2Fg5cdJEwsxDYmeFRzFh3Rz6ykNalkDMVJlwJnkrBLKYkdg%2BPXiXZfb0tyzWIW73zlaHngrVlqpxEZ9MUjGPJpjgm9ei2%2FpjrXo22xmik4ZtYPwpO9fP8TLIh4V8jUuh5ra8Au3nyvNAXKYAm69JLPZwa54JrVZ9j8IW2n9Ieea2S2e4cePNLTgi7SwbZbnIUaObABXVA0dDphTRZJEOOy3hlrnYTsaP55X935Gmbl3SMU3BausPAB4UhL3UpshatbukGPsFDRApecqPhHB6vWkOcqwkU1%2FQExVLDMYd2zqo%2BU7jsW3MPkKP2DZ%2B2Sox4xNSSC4s%2By%2FgANspaie2FhhLEkhVKr8sMnxRryhDZhmRK7EvjMKnwtsQGOqUB%2FLFXbck6doSMk6sLgWDex3TLizy9SuiQ2cDBKkHqxIhU6dqtzOfyhXVIRHeQ2jeemMgpPAu%2F5XPdWMPzFN%2Fz5%2F9EU5fXkk5lduP1TGkbmFoJQ4ULGp%2Frp6XWJtx4quJ2gTIeep0WDvz6nxd%2FiRDhh6kOOlZEJeHlNZeUXTFshsbdV2sp8ITkwt34%2BM%2FvnN9S42Tdz0Ee3aa2frNpyWfRfun91qnY&X-Amz-Signature=ca2614ce725743b76e60b544412daf28db4c590572347744e3724bc74767a28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEPKQIN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCowaJYPD0iLNuaFp%2FRdSPYBUppWKhQ0N2n7uPONcGHLAIgJDJ4wz2SvVyILfZc2Mjk%2BpPKv3U6od21cM8PhgV1%2FG0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCJ9IvaskeDhjzuTASrcAwTZzPJNbKHGkWbFSkmWDxtlnzrIm%2Fl40b8E9Rjlsh2MsSJ1Ly3COjGgRLaBh16Y%2F8DG71Lu42Qn2JzTY3pN0uVqGfZxyacf3gVzOhWhH7wmy7NmYfeXKH3uRrAQV9%2FFSyytJN6cRah4ObcIOCY%2FT0Otm8%2FGikTf%2Bw82wUQF%2BrGa9ngZut%2BUJEE2HKTsOXgAHZHK4I9ICp8Q%2B5VIHDOD2r%2BVCA90uLg2vYsIzEKcMYsYoDcayBUb4qLVCOdIehP4OCuEehXU3dsp%2Fg5cdJEwsxDYmeFRzFh3Rz6ykNalkDMVJlwJnkrBLKYkdg%2BPXiXZfb0tyzWIW73zlaHngrVlqpxEZ9MUjGPJpjgm9ei2%2FpjrXo22xmik4ZtYPwpO9fP8TLIh4V8jUuh5ra8Au3nyvNAXKYAm69JLPZwa54JrVZ9j8IW2n9Ieea2S2e4cePNLTgi7SwbZbnIUaObABXVA0dDphTRZJEOOy3hlrnYTsaP55X935Gmbl3SMU3BausPAB4UhL3UpshatbukGPsFDRApecqPhHB6vWkOcqwkU1%2FQExVLDMYd2zqo%2BU7jsW3MPkKP2DZ%2B2Sox4xNSSC4s%2By%2FgANspaie2FhhLEkhVKr8sMnxRryhDZhmRK7EvjMKnwtsQGOqUB%2FLFXbck6doSMk6sLgWDex3TLizy9SuiQ2cDBKkHqxIhU6dqtzOfyhXVIRHeQ2jeemMgpPAu%2F5XPdWMPzFN%2Fz5%2F9EU5fXkk5lduP1TGkbmFoJQ4ULGp%2Frp6XWJtx4quJ2gTIeep0WDvz6nxd%2FiRDhh6kOOlZEJeHlNZeUXTFshsbdV2sp8ITkwt34%2BM%2FvnN9S42Tdz0Ee3aa2frNpyWfRfun91qnY&X-Amz-Signature=269201f3e70ac3393777cfc706082812bb2d39fe4695c952d635e18ffdfe54f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
