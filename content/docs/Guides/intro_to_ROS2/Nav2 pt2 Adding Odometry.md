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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7WGVWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD8c%2FOhaTlpJQ2F%2B3zUzth4kjqTcYYY%2FW8rIHfGZaMsXAIhAJhROt5xOi%2Fwn%2BVhXjaYld%2BQeEDNetv9ptpC9kmNuME7Kv8DCD0QABoMNjM3NDIzMTgzODA1Igy1GzJKLZHXpfcxcFgq3AMrcVmkNbPHYh5jtgWTXwBZNrKKRX9I705hUbOmczzYxkcarY%2B%2Fo4U%2FMF07iMA1BX7o1V9bURlEV6PUDtKt7EZRH6H9WtLwGR2ShVCo5PzvCh8eOHxSQXwIE88%2BejtObzdR73ZjIFeJMNbHFW99iN%2BASqCahaTLxvsAXWEoQVn7klHOW11nbd%2FiUd8XoPnjjehEcLN5i7YNlndW1cYw47Zjw%2F657iFCV4oEqPywl0KKnua3vJk%2FjJpBtUXGRdSjQRK0NOMuYgroehHhrn6XGvCG877QnfdMUuIGY557Yl0y0bFyYCgzSq70nPol8uLDFjDlz3%2B4bwEfZgCXvtJ8PpA%2BwIl9G6ZkC7gGFx2GJrrEJQ2cWXOsJhRveILCKrQKNsaaGFwiKpC2LuI1EUmqduf6KQsMqgEYcbC9TX3J1HZXeFiRBJpFY%2BW%2Bh6j8fDS1IchlKGpQl6j9vZT4jdCUSZzzo1tTZ11wvlVX%2F1ZcTNxB2%2BQq5pK0E6tHenepsX9qKsKmANnNWSUH5D7IBgLMJQ4gZ3q7wl5szltgFJxuPmrf2yi48MCdLI1AkLn0Yx2Gtw7pI6SEMGcz63zKgN%2Bt5XXYUmqpRN%2Faol%2BsFNwZlu86Cv6SPTJnNNX3DTeFwTCS%2BIvEBjqkAcnBLmktbfiorncZVq9zmypK7mzh5WpXXhw1PlulQI2Nj1PiNHiGi5SA1MM1FeXDnf2GHTutzQKrHktharc7JN4f9h%2FmGOr8p0IrvMl0ABfkqQcttszrf1GxaZ9A8g6Yc%2BdOH9nD9gEmKhzsCC%2Br5s7SeGEeotzhBNFmvCRrzvK4WsrOiYOw5iutizpmJRpFCgW019wEWSTT3pwuBSFcQ%2B2MFhrn&X-Amz-Signature=2c7ab98b7a94f26b0d708b8647d5ca8b6df8edd94ffdb9599aa0c84cb0a7ff2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7WGVWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD8c%2FOhaTlpJQ2F%2B3zUzth4kjqTcYYY%2FW8rIHfGZaMsXAIhAJhROt5xOi%2Fwn%2BVhXjaYld%2BQeEDNetv9ptpC9kmNuME7Kv8DCD0QABoMNjM3NDIzMTgzODA1Igy1GzJKLZHXpfcxcFgq3AMrcVmkNbPHYh5jtgWTXwBZNrKKRX9I705hUbOmczzYxkcarY%2B%2Fo4U%2FMF07iMA1BX7o1V9bURlEV6PUDtKt7EZRH6H9WtLwGR2ShVCo5PzvCh8eOHxSQXwIE88%2BejtObzdR73ZjIFeJMNbHFW99iN%2BASqCahaTLxvsAXWEoQVn7klHOW11nbd%2FiUd8XoPnjjehEcLN5i7YNlndW1cYw47Zjw%2F657iFCV4oEqPywl0KKnua3vJk%2FjJpBtUXGRdSjQRK0NOMuYgroehHhrn6XGvCG877QnfdMUuIGY557Yl0y0bFyYCgzSq70nPol8uLDFjDlz3%2B4bwEfZgCXvtJ8PpA%2BwIl9G6ZkC7gGFx2GJrrEJQ2cWXOsJhRveILCKrQKNsaaGFwiKpC2LuI1EUmqduf6KQsMqgEYcbC9TX3J1HZXeFiRBJpFY%2BW%2Bh6j8fDS1IchlKGpQl6j9vZT4jdCUSZzzo1tTZ11wvlVX%2F1ZcTNxB2%2BQq5pK0E6tHenepsX9qKsKmANnNWSUH5D7IBgLMJQ4gZ3q7wl5szltgFJxuPmrf2yi48MCdLI1AkLn0Yx2Gtw7pI6SEMGcz63zKgN%2Bt5XXYUmqpRN%2Faol%2BsFNwZlu86Cv6SPTJnNNX3DTeFwTCS%2BIvEBjqkAcnBLmktbfiorncZVq9zmypK7mzh5WpXXhw1PlulQI2Nj1PiNHiGi5SA1MM1FeXDnf2GHTutzQKrHktharc7JN4f9h%2FmGOr8p0IrvMl0ABfkqQcttszrf1GxaZ9A8g6Yc%2BdOH9nD9gEmKhzsCC%2Br5s7SeGEeotzhBNFmvCRrzvK4WsrOiYOw5iutizpmJRpFCgW019wEWSTT3pwuBSFcQ%2B2MFhrn&X-Amz-Signature=ad8c48a457d959e0e86ce3a356c1da14b1602637bdc5b3bb4d59f587d5fdad5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7WGVWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD8c%2FOhaTlpJQ2F%2B3zUzth4kjqTcYYY%2FW8rIHfGZaMsXAIhAJhROt5xOi%2Fwn%2BVhXjaYld%2BQeEDNetv9ptpC9kmNuME7Kv8DCD0QABoMNjM3NDIzMTgzODA1Igy1GzJKLZHXpfcxcFgq3AMrcVmkNbPHYh5jtgWTXwBZNrKKRX9I705hUbOmczzYxkcarY%2B%2Fo4U%2FMF07iMA1BX7o1V9bURlEV6PUDtKt7EZRH6H9WtLwGR2ShVCo5PzvCh8eOHxSQXwIE88%2BejtObzdR73ZjIFeJMNbHFW99iN%2BASqCahaTLxvsAXWEoQVn7klHOW11nbd%2FiUd8XoPnjjehEcLN5i7YNlndW1cYw47Zjw%2F657iFCV4oEqPywl0KKnua3vJk%2FjJpBtUXGRdSjQRK0NOMuYgroehHhrn6XGvCG877QnfdMUuIGY557Yl0y0bFyYCgzSq70nPol8uLDFjDlz3%2B4bwEfZgCXvtJ8PpA%2BwIl9G6ZkC7gGFx2GJrrEJQ2cWXOsJhRveILCKrQKNsaaGFwiKpC2LuI1EUmqduf6KQsMqgEYcbC9TX3J1HZXeFiRBJpFY%2BW%2Bh6j8fDS1IchlKGpQl6j9vZT4jdCUSZzzo1tTZ11wvlVX%2F1ZcTNxB2%2BQq5pK0E6tHenepsX9qKsKmANnNWSUH5D7IBgLMJQ4gZ3q7wl5szltgFJxuPmrf2yi48MCdLI1AkLn0Yx2Gtw7pI6SEMGcz63zKgN%2Bt5XXYUmqpRN%2Faol%2BsFNwZlu86Cv6SPTJnNNX3DTeFwTCS%2BIvEBjqkAcnBLmktbfiorncZVq9zmypK7mzh5WpXXhw1PlulQI2Nj1PiNHiGi5SA1MM1FeXDnf2GHTutzQKrHktharc7JN4f9h%2FmGOr8p0IrvMl0ABfkqQcttszrf1GxaZ9A8g6Yc%2BdOH9nD9gEmKhzsCC%2Br5s7SeGEeotzhBNFmvCRrzvK4WsrOiYOw5iutizpmJRpFCgW019wEWSTT3pwuBSFcQ%2B2MFhrn&X-Amz-Signature=5549f1bb9273fb396dfe134fc1bab12fa68e2ec1a63484816afdbf9447a20523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7WGVWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD8c%2FOhaTlpJQ2F%2B3zUzth4kjqTcYYY%2FW8rIHfGZaMsXAIhAJhROt5xOi%2Fwn%2BVhXjaYld%2BQeEDNetv9ptpC9kmNuME7Kv8DCD0QABoMNjM3NDIzMTgzODA1Igy1GzJKLZHXpfcxcFgq3AMrcVmkNbPHYh5jtgWTXwBZNrKKRX9I705hUbOmczzYxkcarY%2B%2Fo4U%2FMF07iMA1BX7o1V9bURlEV6PUDtKt7EZRH6H9WtLwGR2ShVCo5PzvCh8eOHxSQXwIE88%2BejtObzdR73ZjIFeJMNbHFW99iN%2BASqCahaTLxvsAXWEoQVn7klHOW11nbd%2FiUd8XoPnjjehEcLN5i7YNlndW1cYw47Zjw%2F657iFCV4oEqPywl0KKnua3vJk%2FjJpBtUXGRdSjQRK0NOMuYgroehHhrn6XGvCG877QnfdMUuIGY557Yl0y0bFyYCgzSq70nPol8uLDFjDlz3%2B4bwEfZgCXvtJ8PpA%2BwIl9G6ZkC7gGFx2GJrrEJQ2cWXOsJhRveILCKrQKNsaaGFwiKpC2LuI1EUmqduf6KQsMqgEYcbC9TX3J1HZXeFiRBJpFY%2BW%2Bh6j8fDS1IchlKGpQl6j9vZT4jdCUSZzzo1tTZ11wvlVX%2F1ZcTNxB2%2BQq5pK0E6tHenepsX9qKsKmANnNWSUH5D7IBgLMJQ4gZ3q7wl5szltgFJxuPmrf2yi48MCdLI1AkLn0Yx2Gtw7pI6SEMGcz63zKgN%2Bt5XXYUmqpRN%2Faol%2BsFNwZlu86Cv6SPTJnNNX3DTeFwTCS%2BIvEBjqkAcnBLmktbfiorncZVq9zmypK7mzh5WpXXhw1PlulQI2Nj1PiNHiGi5SA1MM1FeXDnf2GHTutzQKrHktharc7JN4f9h%2FmGOr8p0IrvMl0ABfkqQcttszrf1GxaZ9A8g6Yc%2BdOH9nD9gEmKhzsCC%2Br5s7SeGEeotzhBNFmvCRrzvK4WsrOiYOw5iutizpmJRpFCgW019wEWSTT3pwuBSFcQ%2B2MFhrn&X-Amz-Signature=7d70027feb215eee573787b637df16ec3e2024fb42b253853d69635a806a8258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7WGVWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD8c%2FOhaTlpJQ2F%2B3zUzth4kjqTcYYY%2FW8rIHfGZaMsXAIhAJhROt5xOi%2Fwn%2BVhXjaYld%2BQeEDNetv9ptpC9kmNuME7Kv8DCD0QABoMNjM3NDIzMTgzODA1Igy1GzJKLZHXpfcxcFgq3AMrcVmkNbPHYh5jtgWTXwBZNrKKRX9I705hUbOmczzYxkcarY%2B%2Fo4U%2FMF07iMA1BX7o1V9bURlEV6PUDtKt7EZRH6H9WtLwGR2ShVCo5PzvCh8eOHxSQXwIE88%2BejtObzdR73ZjIFeJMNbHFW99iN%2BASqCahaTLxvsAXWEoQVn7klHOW11nbd%2FiUd8XoPnjjehEcLN5i7YNlndW1cYw47Zjw%2F657iFCV4oEqPywl0KKnua3vJk%2FjJpBtUXGRdSjQRK0NOMuYgroehHhrn6XGvCG877QnfdMUuIGY557Yl0y0bFyYCgzSq70nPol8uLDFjDlz3%2B4bwEfZgCXvtJ8PpA%2BwIl9G6ZkC7gGFx2GJrrEJQ2cWXOsJhRveILCKrQKNsaaGFwiKpC2LuI1EUmqduf6KQsMqgEYcbC9TX3J1HZXeFiRBJpFY%2BW%2Bh6j8fDS1IchlKGpQl6j9vZT4jdCUSZzzo1tTZ11wvlVX%2F1ZcTNxB2%2BQq5pK0E6tHenepsX9qKsKmANnNWSUH5D7IBgLMJQ4gZ3q7wl5szltgFJxuPmrf2yi48MCdLI1AkLn0Yx2Gtw7pI6SEMGcz63zKgN%2Bt5XXYUmqpRN%2Faol%2BsFNwZlu86Cv6SPTJnNNX3DTeFwTCS%2BIvEBjqkAcnBLmktbfiorncZVq9zmypK7mzh5WpXXhw1PlulQI2Nj1PiNHiGi5SA1MM1FeXDnf2GHTutzQKrHktharc7JN4f9h%2FmGOr8p0IrvMl0ABfkqQcttszrf1GxaZ9A8g6Yc%2BdOH9nD9gEmKhzsCC%2Br5s7SeGEeotzhBNFmvCRrzvK4WsrOiYOw5iutizpmJRpFCgW019wEWSTT3pwuBSFcQ%2B2MFhrn&X-Amz-Signature=b0939de838b52bb27dcbd8689a66c652a9227ab1c19c703cb50f5d50750ac7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7WGVWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD8c%2FOhaTlpJQ2F%2B3zUzth4kjqTcYYY%2FW8rIHfGZaMsXAIhAJhROt5xOi%2Fwn%2BVhXjaYld%2BQeEDNetv9ptpC9kmNuME7Kv8DCD0QABoMNjM3NDIzMTgzODA1Igy1GzJKLZHXpfcxcFgq3AMrcVmkNbPHYh5jtgWTXwBZNrKKRX9I705hUbOmczzYxkcarY%2B%2Fo4U%2FMF07iMA1BX7o1V9bURlEV6PUDtKt7EZRH6H9WtLwGR2ShVCo5PzvCh8eOHxSQXwIE88%2BejtObzdR73ZjIFeJMNbHFW99iN%2BASqCahaTLxvsAXWEoQVn7klHOW11nbd%2FiUd8XoPnjjehEcLN5i7YNlndW1cYw47Zjw%2F657iFCV4oEqPywl0KKnua3vJk%2FjJpBtUXGRdSjQRK0NOMuYgroehHhrn6XGvCG877QnfdMUuIGY557Yl0y0bFyYCgzSq70nPol8uLDFjDlz3%2B4bwEfZgCXvtJ8PpA%2BwIl9G6ZkC7gGFx2GJrrEJQ2cWXOsJhRveILCKrQKNsaaGFwiKpC2LuI1EUmqduf6KQsMqgEYcbC9TX3J1HZXeFiRBJpFY%2BW%2Bh6j8fDS1IchlKGpQl6j9vZT4jdCUSZzzo1tTZ11wvlVX%2F1ZcTNxB2%2BQq5pK0E6tHenepsX9qKsKmANnNWSUH5D7IBgLMJQ4gZ3q7wl5szltgFJxuPmrf2yi48MCdLI1AkLn0Yx2Gtw7pI6SEMGcz63zKgN%2Bt5XXYUmqpRN%2Faol%2BsFNwZlu86Cv6SPTJnNNX3DTeFwTCS%2BIvEBjqkAcnBLmktbfiorncZVq9zmypK7mzh5WpXXhw1PlulQI2Nj1PiNHiGi5SA1MM1FeXDnf2GHTutzQKrHktharc7JN4f9h%2FmGOr8p0IrvMl0ABfkqQcttszrf1GxaZ9A8g6Yc%2BdOH9nD9gEmKhzsCC%2Br5s7SeGEeotzhBNFmvCRrzvK4WsrOiYOw5iutizpmJRpFCgW019wEWSTT3pwuBSFcQ%2B2MFhrn&X-Amz-Signature=38414801d906d4c858221f52d11eca75d06db0589d1188c261aed99611d40c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7WGVWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD8c%2FOhaTlpJQ2F%2B3zUzth4kjqTcYYY%2FW8rIHfGZaMsXAIhAJhROt5xOi%2Fwn%2BVhXjaYld%2BQeEDNetv9ptpC9kmNuME7Kv8DCD0QABoMNjM3NDIzMTgzODA1Igy1GzJKLZHXpfcxcFgq3AMrcVmkNbPHYh5jtgWTXwBZNrKKRX9I705hUbOmczzYxkcarY%2B%2Fo4U%2FMF07iMA1BX7o1V9bURlEV6PUDtKt7EZRH6H9WtLwGR2ShVCo5PzvCh8eOHxSQXwIE88%2BejtObzdR73ZjIFeJMNbHFW99iN%2BASqCahaTLxvsAXWEoQVn7klHOW11nbd%2FiUd8XoPnjjehEcLN5i7YNlndW1cYw47Zjw%2F657iFCV4oEqPywl0KKnua3vJk%2FjJpBtUXGRdSjQRK0NOMuYgroehHhrn6XGvCG877QnfdMUuIGY557Yl0y0bFyYCgzSq70nPol8uLDFjDlz3%2B4bwEfZgCXvtJ8PpA%2BwIl9G6ZkC7gGFx2GJrrEJQ2cWXOsJhRveILCKrQKNsaaGFwiKpC2LuI1EUmqduf6KQsMqgEYcbC9TX3J1HZXeFiRBJpFY%2BW%2Bh6j8fDS1IchlKGpQl6j9vZT4jdCUSZzzo1tTZ11wvlVX%2F1ZcTNxB2%2BQq5pK0E6tHenepsX9qKsKmANnNWSUH5D7IBgLMJQ4gZ3q7wl5szltgFJxuPmrf2yi48MCdLI1AkLn0Yx2Gtw7pI6SEMGcz63zKgN%2Bt5XXYUmqpRN%2Faol%2BsFNwZlu86Cv6SPTJnNNX3DTeFwTCS%2BIvEBjqkAcnBLmktbfiorncZVq9zmypK7mzh5WpXXhw1PlulQI2Nj1PiNHiGi5SA1MM1FeXDnf2GHTutzQKrHktharc7JN4f9h%2FmGOr8p0IrvMl0ABfkqQcttszrf1GxaZ9A8g6Yc%2BdOH9nD9gEmKhzsCC%2Br5s7SeGEeotzhBNFmvCRrzvK4WsrOiYOw5iutizpmJRpFCgW019wEWSTT3pwuBSFcQ%2B2MFhrn&X-Amz-Signature=8dc8b4893350ca38496c5ca337a9590771bc57517345bf39ab377f00bbbfe599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7WGVWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD8c%2FOhaTlpJQ2F%2B3zUzth4kjqTcYYY%2FW8rIHfGZaMsXAIhAJhROt5xOi%2Fwn%2BVhXjaYld%2BQeEDNetv9ptpC9kmNuME7Kv8DCD0QABoMNjM3NDIzMTgzODA1Igy1GzJKLZHXpfcxcFgq3AMrcVmkNbPHYh5jtgWTXwBZNrKKRX9I705hUbOmczzYxkcarY%2B%2Fo4U%2FMF07iMA1BX7o1V9bURlEV6PUDtKt7EZRH6H9WtLwGR2ShVCo5PzvCh8eOHxSQXwIE88%2BejtObzdR73ZjIFeJMNbHFW99iN%2BASqCahaTLxvsAXWEoQVn7klHOW11nbd%2FiUd8XoPnjjehEcLN5i7YNlndW1cYw47Zjw%2F657iFCV4oEqPywl0KKnua3vJk%2FjJpBtUXGRdSjQRK0NOMuYgroehHhrn6XGvCG877QnfdMUuIGY557Yl0y0bFyYCgzSq70nPol8uLDFjDlz3%2B4bwEfZgCXvtJ8PpA%2BwIl9G6ZkC7gGFx2GJrrEJQ2cWXOsJhRveILCKrQKNsaaGFwiKpC2LuI1EUmqduf6KQsMqgEYcbC9TX3J1HZXeFiRBJpFY%2BW%2Bh6j8fDS1IchlKGpQl6j9vZT4jdCUSZzzo1tTZ11wvlVX%2F1ZcTNxB2%2BQq5pK0E6tHenepsX9qKsKmANnNWSUH5D7IBgLMJQ4gZ3q7wl5szltgFJxuPmrf2yi48MCdLI1AkLn0Yx2Gtw7pI6SEMGcz63zKgN%2Bt5XXYUmqpRN%2Faol%2BsFNwZlu86Cv6SPTJnNNX3DTeFwTCS%2BIvEBjqkAcnBLmktbfiorncZVq9zmypK7mzh5WpXXhw1PlulQI2Nj1PiNHiGi5SA1MM1FeXDnf2GHTutzQKrHktharc7JN4f9h%2FmGOr8p0IrvMl0ABfkqQcttszrf1GxaZ9A8g6Yc%2BdOH9nD9gEmKhzsCC%2Br5s7SeGEeotzhBNFmvCRrzvK4WsrOiYOw5iutizpmJRpFCgW019wEWSTT3pwuBSFcQ%2B2MFhrn&X-Amz-Signature=441c1ad25b1745e83d927114962c5e303351a231c821a6a2b564cf4dfb5dade5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7WGVWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD8c%2FOhaTlpJQ2F%2B3zUzth4kjqTcYYY%2FW8rIHfGZaMsXAIhAJhROt5xOi%2Fwn%2BVhXjaYld%2BQeEDNetv9ptpC9kmNuME7Kv8DCD0QABoMNjM3NDIzMTgzODA1Igy1GzJKLZHXpfcxcFgq3AMrcVmkNbPHYh5jtgWTXwBZNrKKRX9I705hUbOmczzYxkcarY%2B%2Fo4U%2FMF07iMA1BX7o1V9bURlEV6PUDtKt7EZRH6H9WtLwGR2ShVCo5PzvCh8eOHxSQXwIE88%2BejtObzdR73ZjIFeJMNbHFW99iN%2BASqCahaTLxvsAXWEoQVn7klHOW11nbd%2FiUd8XoPnjjehEcLN5i7YNlndW1cYw47Zjw%2F657iFCV4oEqPywl0KKnua3vJk%2FjJpBtUXGRdSjQRK0NOMuYgroehHhrn6XGvCG877QnfdMUuIGY557Yl0y0bFyYCgzSq70nPol8uLDFjDlz3%2B4bwEfZgCXvtJ8PpA%2BwIl9G6ZkC7gGFx2GJrrEJQ2cWXOsJhRveILCKrQKNsaaGFwiKpC2LuI1EUmqduf6KQsMqgEYcbC9TX3J1HZXeFiRBJpFY%2BW%2Bh6j8fDS1IchlKGpQl6j9vZT4jdCUSZzzo1tTZ11wvlVX%2F1ZcTNxB2%2BQq5pK0E6tHenepsX9qKsKmANnNWSUH5D7IBgLMJQ4gZ3q7wl5szltgFJxuPmrf2yi48MCdLI1AkLn0Yx2Gtw7pI6SEMGcz63zKgN%2Bt5XXYUmqpRN%2Faol%2BsFNwZlu86Cv6SPTJnNNX3DTeFwTCS%2BIvEBjqkAcnBLmktbfiorncZVq9zmypK7mzh5WpXXhw1PlulQI2Nj1PiNHiGi5SA1MM1FeXDnf2GHTutzQKrHktharc7JN4f9h%2FmGOr8p0IrvMl0ABfkqQcttszrf1GxaZ9A8g6Yc%2BdOH9nD9gEmKhzsCC%2Br5s7SeGEeotzhBNFmvCRrzvK4WsrOiYOw5iutizpmJRpFCgW019wEWSTT3pwuBSFcQ%2B2MFhrn&X-Amz-Signature=71b43c307fb56a4481dff67950d1134c7568888875b8e7cef0ab26e24199c381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTSNPNOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T043008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIEdhG8TP0PwYZezwIPdIPrYmGO6USdknn63er2tPVmwYAiEAg35oPpFhhqm2fZcClaWquxs6NTZ6%2BUEUGH75EFZwXBAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDLW%2FJ122yR7pLaaAgyrcA3itoyQHCUybpxL9XTj0X4gz5r5jDe4LYsSaeU4F2k1AAcNmEX6WxmNtbzO3xFIHrwsESTyRIRwnDD6ZjSDdeWZHEBQeIvcI7rF4hwERhgh3P%2B0OaZnnWkIDrS8XkSSojY6bnBmvOoM3fr6uV4GOWMeH%2BTBXWCYTQkrPPW9pYPka14sl7nXgvi%2FxQoSNMVtXnmasrcvU%2BphGI0ychsVjWrQ4Yp%2FxpwS6obWP4dh0DAh8NtQwRjarj3xla9PFgFqCb1S%2BS7YnCpNRNg5iy%2BoHJj7d84SjiPge7prZMor07KMFFgn0q63EQp8l7Tv%2FgBc5NOXdXsoYEgOyjgtEIzg%2BbVmHO5usvps8i1qzZidh4qVR34VIB%2BIvyGKbnUlL7xH2gykriqS1Cpw6bn0zwTnp1HYgSUV2XIQaNf5aSWwtirR1T4Wvl%2FA%2F%2BZauX2uO9gqze4kKIcyJPgcLNWSyer2bBQO1RsN2D1CZJvQLLAOyV7eUKO6XUJi3Y1o1%2F5Czrvua0B2PeUj5Z0cqASACaALi0Vl%2BEvyqbf8HyDOgRGtpXXiShQGAYwjQdWBcVSnP5uqhCntNDolWqUzMgN2IXvToKhpf7aWFjKFgfxwcTP0RxX1Q6ybdwJ7RnvWM%2FtvWMKX4i8QGOqUBaPi1PlGFDWOqobU4GDTU%2Fhg4i%2FgCRdFo5V85%2BgDeci4hE%2FmjpAfIoOkLZt%2FeQUkvKkG7KObFeHPGIPdtKSV%2Fr367UnN2zidR954HnOfcnyHgD1umI3f0oe%2F4BcWgwVl4fp5pkfa0lGFtKkW0qk%2BrRdu%2FgI1VlRJ8AcgHC8M5q6IUG%2FTmYx%2FCHx%2F8f0FEAtP4ksf18qrl7jtCA%2BOusN9DqJOryvvN&X-Amz-Signature=7b2e61df2b6d7c5ebd09b96334d6cb9f15000d4350d5d83eabba712bf175c824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O7WGVWA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQD8c%2FOhaTlpJQ2F%2B3zUzth4kjqTcYYY%2FW8rIHfGZaMsXAIhAJhROt5xOi%2Fwn%2BVhXjaYld%2BQeEDNetv9ptpC9kmNuME7Kv8DCD0QABoMNjM3NDIzMTgzODA1Igy1GzJKLZHXpfcxcFgq3AMrcVmkNbPHYh5jtgWTXwBZNrKKRX9I705hUbOmczzYxkcarY%2B%2Fo4U%2FMF07iMA1BX7o1V9bURlEV6PUDtKt7EZRH6H9WtLwGR2ShVCo5PzvCh8eOHxSQXwIE88%2BejtObzdR73ZjIFeJMNbHFW99iN%2BASqCahaTLxvsAXWEoQVn7klHOW11nbd%2FiUd8XoPnjjehEcLN5i7YNlndW1cYw47Zjw%2F657iFCV4oEqPywl0KKnua3vJk%2FjJpBtUXGRdSjQRK0NOMuYgroehHhrn6XGvCG877QnfdMUuIGY557Yl0y0bFyYCgzSq70nPol8uLDFjDlz3%2B4bwEfZgCXvtJ8PpA%2BwIl9G6ZkC7gGFx2GJrrEJQ2cWXOsJhRveILCKrQKNsaaGFwiKpC2LuI1EUmqduf6KQsMqgEYcbC9TX3J1HZXeFiRBJpFY%2BW%2Bh6j8fDS1IchlKGpQl6j9vZT4jdCUSZzzo1tTZ11wvlVX%2F1ZcTNxB2%2BQq5pK0E6tHenepsX9qKsKmANnNWSUH5D7IBgLMJQ4gZ3q7wl5szltgFJxuPmrf2yi48MCdLI1AkLn0Yx2Gtw7pI6SEMGcz63zKgN%2Bt5XXYUmqpRN%2Faol%2BsFNwZlu86Cv6SPTJnNNX3DTeFwTCS%2BIvEBjqkAcnBLmktbfiorncZVq9zmypK7mzh5WpXXhw1PlulQI2Nj1PiNHiGi5SA1MM1FeXDnf2GHTutzQKrHktharc7JN4f9h%2FmGOr8p0IrvMl0ABfkqQcttszrf1GxaZ9A8g6Yc%2BdOH9nD9gEmKhzsCC%2Br5s7SeGEeotzhBNFmvCRrzvK4WsrOiYOw5iutizpmJRpFCgW019wEWSTT3pwuBSFcQ%2B2MFhrn&X-Amz-Signature=1d776ae91269b46257651ee85dc47089939f7c3cb94d82e61b30f2a4a3387e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC6CSSP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCF6C9C9EVcek2gOM%2FrzWHrJIrjUEic6clmSM3i4vq8PwIhANOvrZI%2F%2BvtVA9J6E68kMPJ%2BYCaHt1norcJy8sSlNskEKv8DCD0QABoMNjM3NDIzMTgzODA1IgxsBmPMC8HSYwwVBggq3AOQV9ff4LpH668hqc02U0Vub5MHnPBzmCeaS340FoFQcGsxkrWFlESOgjfWlJmlcaFSUrSm56SgtyshKtK5IvMcLNsOSpZxxIyC7uuJ07YiyL7eNrWmLtYesCprvILxw1JFvWP5fqKKDwuz5qE22go0sWDWzKoi%2BovoXEiqCfbf6JQqCM7vW%2FP%2FMq4C1e1Y6y7rn2FGLJZTWjqRS6VcClRb9JN%2BOYs73yiWOqNGxKMa%2FsC8KsIg0eA1n2UBTYjJonZTCwpXYyex7iDKPMJQfouJODCzQK4c%2Fp8aoeOa4uoKVwT5GCjYs2tFOdKJx5F%2F%2BEpQwjJHaH5yXHtAtmMp6QsI7jAbY4bTUqAMTwVjCVa0nUWQK8dcd7R9LCfd%2F7k0uFOB3f8dlst%2BNCrJWHey4y3ueQgM9qJgHYjxaHC%2F8Rb9SH9Xh5r7hYwypr2kCFTW4yaYpsgiYaAtqgM1yUnKU0uxTSOWAna2lLYAj1lFtISKzHCj5yk4wOwjFVwP0v%2BSR2EbMDkynQXAbQdzqd9ekKED0hSsJZWQB7Hoog7W9kLdKLPr40PjcSxApHYo7sUpM%2BYqHWaaC%2FC4ZnkoB4Tk9VsoqojfRG1LU6Q7kxELfkVzCYZZe9Sx%2B6iuHVGpQTC6%2BIvEBjqkAZNxBvvxr5fxqDF2j06ur7OtoKxof5ocMPAFnRCnbThsBEwX3EriSMDhNKypRI82NKx1oBi%2ByFeZGTzEzus9nIqAb6TD9sXXfywxeOTiVBYNisVBLeDOoWbpeqIOmO7x23kE11oHJU0%2Ff0tEFdW5WuFKjWU81HeNr3MyE1ngnyjaSTkzgq%2FrOqwhL6E6NZX1m%2BBGU%2Fj8Lp%2BcUF9MjGPxcK5IkxVv&X-Amz-Signature=54e7d0de1da7c911edf19836124d28fe9ccb4398274ec93667a3c24e1cc05076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC6CSSP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCF6C9C9EVcek2gOM%2FrzWHrJIrjUEic6clmSM3i4vq8PwIhANOvrZI%2F%2BvtVA9J6E68kMPJ%2BYCaHt1norcJy8sSlNskEKv8DCD0QABoMNjM3NDIzMTgzODA1IgxsBmPMC8HSYwwVBggq3AOQV9ff4LpH668hqc02U0Vub5MHnPBzmCeaS340FoFQcGsxkrWFlESOgjfWlJmlcaFSUrSm56SgtyshKtK5IvMcLNsOSpZxxIyC7uuJ07YiyL7eNrWmLtYesCprvILxw1JFvWP5fqKKDwuz5qE22go0sWDWzKoi%2BovoXEiqCfbf6JQqCM7vW%2FP%2FMq4C1e1Y6y7rn2FGLJZTWjqRS6VcClRb9JN%2BOYs73yiWOqNGxKMa%2FsC8KsIg0eA1n2UBTYjJonZTCwpXYyex7iDKPMJQfouJODCzQK4c%2Fp8aoeOa4uoKVwT5GCjYs2tFOdKJx5F%2F%2BEpQwjJHaH5yXHtAtmMp6QsI7jAbY4bTUqAMTwVjCVa0nUWQK8dcd7R9LCfd%2F7k0uFOB3f8dlst%2BNCrJWHey4y3ueQgM9qJgHYjxaHC%2F8Rb9SH9Xh5r7hYwypr2kCFTW4yaYpsgiYaAtqgM1yUnKU0uxTSOWAna2lLYAj1lFtISKzHCj5yk4wOwjFVwP0v%2BSR2EbMDkynQXAbQdzqd9ekKED0hSsJZWQB7Hoog7W9kLdKLPr40PjcSxApHYo7sUpM%2BYqHWaaC%2FC4ZnkoB4Tk9VsoqojfRG1LU6Q7kxELfkVzCYZZe9Sx%2B6iuHVGpQTC6%2BIvEBjqkAZNxBvvxr5fxqDF2j06ur7OtoKxof5ocMPAFnRCnbThsBEwX3EriSMDhNKypRI82NKx1oBi%2ByFeZGTzEzus9nIqAb6TD9sXXfywxeOTiVBYNisVBLeDOoWbpeqIOmO7x23kE11oHJU0%2Ff0tEFdW5WuFKjWU81HeNr3MyE1ngnyjaSTkzgq%2FrOqwhL6E6NZX1m%2BBGU%2Fj8Lp%2BcUF9MjGPxcK5IkxVv&X-Amz-Signature=0ffb3674b9244821767a9422caafa9ec94bfeca69192301b406401ef8ee7d5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC6CSSP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCF6C9C9EVcek2gOM%2FrzWHrJIrjUEic6clmSM3i4vq8PwIhANOvrZI%2F%2BvtVA9J6E68kMPJ%2BYCaHt1norcJy8sSlNskEKv8DCD0QABoMNjM3NDIzMTgzODA1IgxsBmPMC8HSYwwVBggq3AOQV9ff4LpH668hqc02U0Vub5MHnPBzmCeaS340FoFQcGsxkrWFlESOgjfWlJmlcaFSUrSm56SgtyshKtK5IvMcLNsOSpZxxIyC7uuJ07YiyL7eNrWmLtYesCprvILxw1JFvWP5fqKKDwuz5qE22go0sWDWzKoi%2BovoXEiqCfbf6JQqCM7vW%2FP%2FMq4C1e1Y6y7rn2FGLJZTWjqRS6VcClRb9JN%2BOYs73yiWOqNGxKMa%2FsC8KsIg0eA1n2UBTYjJonZTCwpXYyex7iDKPMJQfouJODCzQK4c%2Fp8aoeOa4uoKVwT5GCjYs2tFOdKJx5F%2F%2BEpQwjJHaH5yXHtAtmMp6QsI7jAbY4bTUqAMTwVjCVa0nUWQK8dcd7R9LCfd%2F7k0uFOB3f8dlst%2BNCrJWHey4y3ueQgM9qJgHYjxaHC%2F8Rb9SH9Xh5r7hYwypr2kCFTW4yaYpsgiYaAtqgM1yUnKU0uxTSOWAna2lLYAj1lFtISKzHCj5yk4wOwjFVwP0v%2BSR2EbMDkynQXAbQdzqd9ekKED0hSsJZWQB7Hoog7W9kLdKLPr40PjcSxApHYo7sUpM%2BYqHWaaC%2FC4ZnkoB4Tk9VsoqojfRG1LU6Q7kxELfkVzCYZZe9Sx%2B6iuHVGpQTC6%2BIvEBjqkAZNxBvvxr5fxqDF2j06ur7OtoKxof5ocMPAFnRCnbThsBEwX3EriSMDhNKypRI82NKx1oBi%2ByFeZGTzEzus9nIqAb6TD9sXXfywxeOTiVBYNisVBLeDOoWbpeqIOmO7x23kE11oHJU0%2Ff0tEFdW5WuFKjWU81HeNr3MyE1ngnyjaSTkzgq%2FrOqwhL6E6NZX1m%2BBGU%2Fj8Lp%2BcUF9MjGPxcK5IkxVv&X-Amz-Signature=354d24b38e0c8865c8dac81d2572a1dccdb37556ffb6ef0d8b11f154e383c302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC6CSSP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCF6C9C9EVcek2gOM%2FrzWHrJIrjUEic6clmSM3i4vq8PwIhANOvrZI%2F%2BvtVA9J6E68kMPJ%2BYCaHt1norcJy8sSlNskEKv8DCD0QABoMNjM3NDIzMTgzODA1IgxsBmPMC8HSYwwVBggq3AOQV9ff4LpH668hqc02U0Vub5MHnPBzmCeaS340FoFQcGsxkrWFlESOgjfWlJmlcaFSUrSm56SgtyshKtK5IvMcLNsOSpZxxIyC7uuJ07YiyL7eNrWmLtYesCprvILxw1JFvWP5fqKKDwuz5qE22go0sWDWzKoi%2BovoXEiqCfbf6JQqCM7vW%2FP%2FMq4C1e1Y6y7rn2FGLJZTWjqRS6VcClRb9JN%2BOYs73yiWOqNGxKMa%2FsC8KsIg0eA1n2UBTYjJonZTCwpXYyex7iDKPMJQfouJODCzQK4c%2Fp8aoeOa4uoKVwT5GCjYs2tFOdKJx5F%2F%2BEpQwjJHaH5yXHtAtmMp6QsI7jAbY4bTUqAMTwVjCVa0nUWQK8dcd7R9LCfd%2F7k0uFOB3f8dlst%2BNCrJWHey4y3ueQgM9qJgHYjxaHC%2F8Rb9SH9Xh5r7hYwypr2kCFTW4yaYpsgiYaAtqgM1yUnKU0uxTSOWAna2lLYAj1lFtISKzHCj5yk4wOwjFVwP0v%2BSR2EbMDkynQXAbQdzqd9ekKED0hSsJZWQB7Hoog7W9kLdKLPr40PjcSxApHYo7sUpM%2BYqHWaaC%2FC4ZnkoB4Tk9VsoqojfRG1LU6Q7kxELfkVzCYZZe9Sx%2B6iuHVGpQTC6%2BIvEBjqkAZNxBvvxr5fxqDF2j06ur7OtoKxof5ocMPAFnRCnbThsBEwX3EriSMDhNKypRI82NKx1oBi%2ByFeZGTzEzus9nIqAb6TD9sXXfywxeOTiVBYNisVBLeDOoWbpeqIOmO7x23kE11oHJU0%2Ff0tEFdW5WuFKjWU81HeNr3MyE1ngnyjaSTkzgq%2FrOqwhL6E6NZX1m%2BBGU%2Fj8Lp%2BcUF9MjGPxcK5IkxVv&X-Amz-Signature=cf7a34bcaa388243c9d66373d6f57523801ac47dc21b6e1e77c0623bf0a3c7f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC6CSSP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCF6C9C9EVcek2gOM%2FrzWHrJIrjUEic6clmSM3i4vq8PwIhANOvrZI%2F%2BvtVA9J6E68kMPJ%2BYCaHt1norcJy8sSlNskEKv8DCD0QABoMNjM3NDIzMTgzODA1IgxsBmPMC8HSYwwVBggq3AOQV9ff4LpH668hqc02U0Vub5MHnPBzmCeaS340FoFQcGsxkrWFlESOgjfWlJmlcaFSUrSm56SgtyshKtK5IvMcLNsOSpZxxIyC7uuJ07YiyL7eNrWmLtYesCprvILxw1JFvWP5fqKKDwuz5qE22go0sWDWzKoi%2BovoXEiqCfbf6JQqCM7vW%2FP%2FMq4C1e1Y6y7rn2FGLJZTWjqRS6VcClRb9JN%2BOYs73yiWOqNGxKMa%2FsC8KsIg0eA1n2UBTYjJonZTCwpXYyex7iDKPMJQfouJODCzQK4c%2Fp8aoeOa4uoKVwT5GCjYs2tFOdKJx5F%2F%2BEpQwjJHaH5yXHtAtmMp6QsI7jAbY4bTUqAMTwVjCVa0nUWQK8dcd7R9LCfd%2F7k0uFOB3f8dlst%2BNCrJWHey4y3ueQgM9qJgHYjxaHC%2F8Rb9SH9Xh5r7hYwypr2kCFTW4yaYpsgiYaAtqgM1yUnKU0uxTSOWAna2lLYAj1lFtISKzHCj5yk4wOwjFVwP0v%2BSR2EbMDkynQXAbQdzqd9ekKED0hSsJZWQB7Hoog7W9kLdKLPr40PjcSxApHYo7sUpM%2BYqHWaaC%2FC4ZnkoB4Tk9VsoqojfRG1LU6Q7kxELfkVzCYZZe9Sx%2B6iuHVGpQTC6%2BIvEBjqkAZNxBvvxr5fxqDF2j06ur7OtoKxof5ocMPAFnRCnbThsBEwX3EriSMDhNKypRI82NKx1oBi%2ByFeZGTzEzus9nIqAb6TD9sXXfywxeOTiVBYNisVBLeDOoWbpeqIOmO7x23kE11oHJU0%2Ff0tEFdW5WuFKjWU81HeNr3MyE1ngnyjaSTkzgq%2FrOqwhL6E6NZX1m%2BBGU%2Fj8Lp%2BcUF9MjGPxcK5IkxVv&X-Amz-Signature=74a1674bf4b2a69909baf4ca7247155e597b276bdc55e674b8dd485d9de1c8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC6CSSP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCF6C9C9EVcek2gOM%2FrzWHrJIrjUEic6clmSM3i4vq8PwIhANOvrZI%2F%2BvtVA9J6E68kMPJ%2BYCaHt1norcJy8sSlNskEKv8DCD0QABoMNjM3NDIzMTgzODA1IgxsBmPMC8HSYwwVBggq3AOQV9ff4LpH668hqc02U0Vub5MHnPBzmCeaS340FoFQcGsxkrWFlESOgjfWlJmlcaFSUrSm56SgtyshKtK5IvMcLNsOSpZxxIyC7uuJ07YiyL7eNrWmLtYesCprvILxw1JFvWP5fqKKDwuz5qE22go0sWDWzKoi%2BovoXEiqCfbf6JQqCM7vW%2FP%2FMq4C1e1Y6y7rn2FGLJZTWjqRS6VcClRb9JN%2BOYs73yiWOqNGxKMa%2FsC8KsIg0eA1n2UBTYjJonZTCwpXYyex7iDKPMJQfouJODCzQK4c%2Fp8aoeOa4uoKVwT5GCjYs2tFOdKJx5F%2F%2BEpQwjJHaH5yXHtAtmMp6QsI7jAbY4bTUqAMTwVjCVa0nUWQK8dcd7R9LCfd%2F7k0uFOB3f8dlst%2BNCrJWHey4y3ueQgM9qJgHYjxaHC%2F8Rb9SH9Xh5r7hYwypr2kCFTW4yaYpsgiYaAtqgM1yUnKU0uxTSOWAna2lLYAj1lFtISKzHCj5yk4wOwjFVwP0v%2BSR2EbMDkynQXAbQdzqd9ekKED0hSsJZWQB7Hoog7W9kLdKLPr40PjcSxApHYo7sUpM%2BYqHWaaC%2FC4ZnkoB4Tk9VsoqojfRG1LU6Q7kxELfkVzCYZZe9Sx%2B6iuHVGpQTC6%2BIvEBjqkAZNxBvvxr5fxqDF2j06ur7OtoKxof5ocMPAFnRCnbThsBEwX3EriSMDhNKypRI82NKx1oBi%2ByFeZGTzEzus9nIqAb6TD9sXXfywxeOTiVBYNisVBLeDOoWbpeqIOmO7x23kE11oHJU0%2Ff0tEFdW5WuFKjWU81HeNr3MyE1ngnyjaSTkzgq%2FrOqwhL6E6NZX1m%2BBGU%2Fj8Lp%2BcUF9MjGPxcK5IkxVv&X-Amz-Signature=7fb9a30a9f97d9e004e79987faaa6cf5d7fc5213a9310804ef1ab46b997a3835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKC6CSSP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCF6C9C9EVcek2gOM%2FrzWHrJIrjUEic6clmSM3i4vq8PwIhANOvrZI%2F%2BvtVA9J6E68kMPJ%2BYCaHt1norcJy8sSlNskEKv8DCD0QABoMNjM3NDIzMTgzODA1IgxsBmPMC8HSYwwVBggq3AOQV9ff4LpH668hqc02U0Vub5MHnPBzmCeaS340FoFQcGsxkrWFlESOgjfWlJmlcaFSUrSm56SgtyshKtK5IvMcLNsOSpZxxIyC7uuJ07YiyL7eNrWmLtYesCprvILxw1JFvWP5fqKKDwuz5qE22go0sWDWzKoi%2BovoXEiqCfbf6JQqCM7vW%2FP%2FMq4C1e1Y6y7rn2FGLJZTWjqRS6VcClRb9JN%2BOYs73yiWOqNGxKMa%2FsC8KsIg0eA1n2UBTYjJonZTCwpXYyex7iDKPMJQfouJODCzQK4c%2Fp8aoeOa4uoKVwT5GCjYs2tFOdKJx5F%2F%2BEpQwjJHaH5yXHtAtmMp6QsI7jAbY4bTUqAMTwVjCVa0nUWQK8dcd7R9LCfd%2F7k0uFOB3f8dlst%2BNCrJWHey4y3ueQgM9qJgHYjxaHC%2F8Rb9SH9Xh5r7hYwypr2kCFTW4yaYpsgiYaAtqgM1yUnKU0uxTSOWAna2lLYAj1lFtISKzHCj5yk4wOwjFVwP0v%2BSR2EbMDkynQXAbQdzqd9ekKED0hSsJZWQB7Hoog7W9kLdKLPr40PjcSxApHYo7sUpM%2BYqHWaaC%2FC4ZnkoB4Tk9VsoqojfRG1LU6Q7kxELfkVzCYZZe9Sx%2B6iuHVGpQTC6%2BIvEBjqkAZNxBvvxr5fxqDF2j06ur7OtoKxof5ocMPAFnRCnbThsBEwX3EriSMDhNKypRI82NKx1oBi%2ByFeZGTzEzus9nIqAb6TD9sXXfywxeOTiVBYNisVBLeDOoWbpeqIOmO7x23kE11oHJU0%2Ff0tEFdW5WuFKjWU81HeNr3MyE1ngnyjaSTkzgq%2FrOqwhL6E6NZX1m%2BBGU%2Fj8Lp%2BcUF9MjGPxcK5IkxVv&X-Amz-Signature=f03968faa442db47e85f670ab07418f4346cfaf2b82a8c48342bf3ebc0a4cd75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
