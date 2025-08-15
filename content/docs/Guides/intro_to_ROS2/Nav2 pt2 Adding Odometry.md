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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=7289de44b60d5017199351f4dc658001fe5319aafa1c7b7835c5d2e1b01109a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=592ebe2175d55b4b2c0423e026f4469d13a44f01d11b319e1e41a80d2127cee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=d3a60cad30266d31e2319c823cd00211c42e85602c252fec8152c391ed24e5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=0765790756b4154755631ca77709bc0264eecc1f61c82f55b2289bd1314d459e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=36c2ce9964cf7ead2cb220ce6635214331da678014c3e4c2d2bfb5758332aa39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=d22ce7b2bff117abbc13cdd98e7fdef16ca0e9736a49c1582630faa20fee5a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=61c32ab0654daa50a91b32e9efe9f7e9c85b1b0336248c4d3e63feea3c6fbd05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=4f38f99e8b35d1945f7cf0292e038616e3b41723e3b6c8ba1d55c9482f13d603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=bba448e20a71adc7ca14fff1ecbd784fe72c663a300dbd12f734b31bedb70cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZE2DZBU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCeCg0Ja9k6raN%2Bq4h26u%2Bt77mHNH%2B31XhDPHylNZWxcQIhAP1QSYB1NJ8SRTrp7BPPfyC0Knj7qAGvfDAa39eemvQnKv8DCFMQABoMNjM3NDIzMTgzODA1IgwZysbtmwtzendQEMwq3APjRW5ezDcol1OyIe6u4VQBOnFgNp4Y5be9WaGAbTZYCSe86JeA3khFnqin%2FVLbl%2FpSk05cSaw%2BKrmRJMqngPHfVoP7VSRigKqWi4H25WfpWJ72t7uhqhZt3Uk8PG7pIXTzer8JPSdEZZ6S%2FsZR%2F3kj8ICCZxp6PryeFew6EgTFPrLMvd0I2fBLX7uJ%2Fom3dJGFQXSOhwa%2Fnx4%2BjCY47yQt9Jinw7%2FuIOY50InGuI0ZBjp5RiiivOOOmCOitjTay8pwCjF6OUBRMkKKnNedxkDdYiOmNSiEE1odkedoZglVQJLAltYeVkmg17%2Btsh0EV9Qsa%2B7ebQ9L8kjhDZyTMmFOd7rNMDkKFPz64UifRh8VUT1C4k7WdgtMTxDzoo8rhuVLGgV%2F%2FsXczJv0zvH6jVogmruGR9Sf%2BMC7LoGsc8dILd1mRjKlNwowSWSKrz7qpwV2IdC%2BYAdZvhs7wXG45PTK30nHs%2FjrjRNBQk2w0wmWpO%2F11hHULk%2Bi5Sat7aylqkLmOCdbZnafTOXct50NqocWPPpHbjW9ldG%2FmcHaitsRY5S5JN6qPm%2BaetP16wsO38Wn7yrXDmIWxvMm24ZWLIkGT06%2F8enak5rzTvpExaWrDonEm8Ma6HWJyn0t2DDmovrEBjqkAaSmJzcejEmfVYzAQLtH9lpI3IWN4U5U13Zaoyz9%2FuvvCusPQ%2FhmOLYimHLBxOwsN7D5tGYVNw4RVx3ItJO90AgJbt3uM8Bm4YVoegQY%2FqmYmqbPdJ8xCBF0K5Q00zqpPMFpWYNBqPIfdzvx0ISdS0fIBzp%2Fy1dUxgSR2BonEXSm8QowwPcPcJc1QYtng5401rmFhIWnIlMegkthf5%2FJ9XSRdGae&X-Amz-Signature=5c307d09379f79a6a54831e7bf42d09fa0ec51f11bf83141a4fbd9301149bad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHEOCG7O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCH9X1XNwNhPUBVbGuTqDD5sSt8W48ABwISSL1WxQN8DAIhAKqVQjxeB1NnW%2BmZ5KMZkU1RdCCHSEvtnm9HrcMvQlvzKv8DCFMQABoMNjM3NDIzMTgzODA1IgySqq8NfJJHjt6xtGUq3APwcVOPjUbr%2Blr5%2FbjhYe8ztAeuEjrk%2FpVjalK82jlL7JFQmzjL5%2BJT5wjmW2pZaoJPd6MBbr%2FL%2FfpOs9IUi00oEWOobOJgbjrM8QqyqJ%2BrFA2nkC5BjVFylVKah%2B3cMvRHJn%2FwBdiaU5Egbsq3bvsuYOVXF0tXGDJF18jA2IYxhCBk0u13pY5o7mp8i1VQ7sWpomDJDUAPr8iGu2nQdEBZhALLGQPFF8ff2UUbD2Aa6D3F%2BMznGTdzEFiUG4cT7uEoRbOoHHHTmYXaR9MOG9xeKgoPkNNrBTDbuIoNfQXHZPzFqmycqhI%2FBXOyhwEy%2BBsjFR8cdejT3Q2I66R5UqtoaNx6FBRezoLFGT30zyYr3MI9SGfqLQiQj1QCpvm6GKSRHnvVu5dvcNxYnAO0CbYzDgAIcKyFMQfM1j%2BUkVwch38GQgSJOIYMpJW378B8rLCPi44unCNrHDGB1bmA5T9cZQ5kM1S%2FJu2ZUBfO3S92c9CLgJD9SCGzSVpamCF3IGAgTKZhOFDnVh3svF3JggazR%2BIgW0qAwnxx%2F96NlNoP3MbJ9f1ds8fRls7s7YaMe67Fqx%2B7CG0jaFgfJgr%2BzOJ%2FCTLrcyfTxpNkMkszNzbjNDMSF1khhh8vkiAzXTCto%2FrEBjqkASbr05oIa4f3%2BfSgOVC1CO6pmtYCtuZ5DWtWM2s0jcURZ7wNQWSYQrfXEzceu9kaRgER8zRAfwqc9iYS4fK6sArMFetWPbfM58L5T9TgjzXwuLzVgZVyrR%2FeAUeGHJ2BII7a7ffax929hwkHO5ukUnUivbD%2F7r2eiFEnOBUochNhLLNeTzHOcf44MpjbPVVT0Xvt5mdUJI%2B%2BQo5BP8hexOLbv0Jx&X-Amz-Signature=22f620bc52d13cb9cd7241ac42069f635eb9f2c4cc20e38d7ee1c9e625d75ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIAYPJV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCsF%2FVd%2BMiC9harFKmHLjs3LmUc8rbfQfpfxSCDFHbeswIgLYB%2BKLJ14UyWsxCADP5XqnaaqsxAUopoDjoqWSUZBMQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOMW3scm4zAWCxPCdCrcA29rEvxcHMB0yhH4C0bwu%2FB0T2cE%2Fx8g4kqRLIOPumUb2PNEU%2FR7RcB86g5RA59Z8YOTabJj%2BnMZlX6wBKjB5suQintBq7ZRya5DFwLu1wyAbQZbz%2BGn1zcePxP5vf3DF4FnyuVbSPYx%2BWT6ASU9pdu7YGK05jyf7Nd%2FlLxxAFEHyemvzj%2BmP5dDG4vlrxitq4fe40YrRtdckM6ESJ8FA7avDSG49K3TVErsbn%2F750sc3Zi1nDoK2nZlpMpF8VsNgUwlLd0yO4jjRZwxQye8vneMhW1g4ZEnsEtaHQHpHAwLu%2BweexUH1bZNjCpbSsdCNLBgq9cq7g0kWBZe5ubDQm5eXZb0CuMOVlxK6HiRthTxguQVj658CHNXw%2Fmsx%2Fm9r9HfkRzuGLG1UFCCOFFVDtzX6LcwxFq9Y%2FhQjea97r7%2BXz9wwZDow%2BNr5WRhsDjk01DnlOnzlKktBazlFQ3699xBL%2B2aJgPHWr5uIOpyRhg62JnfDFYhRfQrHQcGbzL%2FnXU99IDE7%2Bv70LYlbz3TRsxgYJaaleIix1rOxiGeSrTD7n9XCj4Xyf5M5k%2BH9ubOtqvsy%2FxyW0ZVdGZXAVLMQ3SOjtIpd1ZIfCpdD6eWdUzEtIB4D4nBh3mOGhRxMJij%2BsQGOqUBxor%2B9lfWMgreRocuhGZiu%2BRgyRO606346bO9kqdihZqeurbTcM65L7I9DVFsPAIJ4tASUc9WlZm1qIIT15x1Sj0mn90pA7Ec2wNzncbZh0UFww8JmSbP3hjfmkNSKpeqa7509zTOwYrnLQcUnuks%2BXkoysBazSFhIoUugy5FoTaqxkr6BTI6aW1seA4Ks%2B%2FwRHLfJpJ6tGkCL%2BVuMM5U0x%2FvsLuP&X-Amz-Signature=dbd9686f92bc204cbe9cabfd6b8a99f97492514dd0c4e786c7f534b62b847fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIAYPJV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCsF%2FVd%2BMiC9harFKmHLjs3LmUc8rbfQfpfxSCDFHbeswIgLYB%2BKLJ14UyWsxCADP5XqnaaqsxAUopoDjoqWSUZBMQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOMW3scm4zAWCxPCdCrcA29rEvxcHMB0yhH4C0bwu%2FB0T2cE%2Fx8g4kqRLIOPumUb2PNEU%2FR7RcB86g5RA59Z8YOTabJj%2BnMZlX6wBKjB5suQintBq7ZRya5DFwLu1wyAbQZbz%2BGn1zcePxP5vf3DF4FnyuVbSPYx%2BWT6ASU9pdu7YGK05jyf7Nd%2FlLxxAFEHyemvzj%2BmP5dDG4vlrxitq4fe40YrRtdckM6ESJ8FA7avDSG49K3TVErsbn%2F750sc3Zi1nDoK2nZlpMpF8VsNgUwlLd0yO4jjRZwxQye8vneMhW1g4ZEnsEtaHQHpHAwLu%2BweexUH1bZNjCpbSsdCNLBgq9cq7g0kWBZe5ubDQm5eXZb0CuMOVlxK6HiRthTxguQVj658CHNXw%2Fmsx%2Fm9r9HfkRzuGLG1UFCCOFFVDtzX6LcwxFq9Y%2FhQjea97r7%2BXz9wwZDow%2BNr5WRhsDjk01DnlOnzlKktBazlFQ3699xBL%2B2aJgPHWr5uIOpyRhg62JnfDFYhRfQrHQcGbzL%2FnXU99IDE7%2Bv70LYlbz3TRsxgYJaaleIix1rOxiGeSrTD7n9XCj4Xyf5M5k%2BH9ubOtqvsy%2FxyW0ZVdGZXAVLMQ3SOjtIpd1ZIfCpdD6eWdUzEtIB4D4nBh3mOGhRxMJij%2BsQGOqUBxor%2B9lfWMgreRocuhGZiu%2BRgyRO606346bO9kqdihZqeurbTcM65L7I9DVFsPAIJ4tASUc9WlZm1qIIT15x1Sj0mn90pA7Ec2wNzncbZh0UFww8JmSbP3hjfmkNSKpeqa7509zTOwYrnLQcUnuks%2BXkoysBazSFhIoUugy5FoTaqxkr6BTI6aW1seA4Ks%2B%2FwRHLfJpJ6tGkCL%2BVuMM5U0x%2FvsLuP&X-Amz-Signature=9bfcd0d21d25e04e25c1ee55b85b4b24333442ea161c54fea1dd2863a794ee4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIAYPJV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCsF%2FVd%2BMiC9harFKmHLjs3LmUc8rbfQfpfxSCDFHbeswIgLYB%2BKLJ14UyWsxCADP5XqnaaqsxAUopoDjoqWSUZBMQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOMW3scm4zAWCxPCdCrcA29rEvxcHMB0yhH4C0bwu%2FB0T2cE%2Fx8g4kqRLIOPumUb2PNEU%2FR7RcB86g5RA59Z8YOTabJj%2BnMZlX6wBKjB5suQintBq7ZRya5DFwLu1wyAbQZbz%2BGn1zcePxP5vf3DF4FnyuVbSPYx%2BWT6ASU9pdu7YGK05jyf7Nd%2FlLxxAFEHyemvzj%2BmP5dDG4vlrxitq4fe40YrRtdckM6ESJ8FA7avDSG49K3TVErsbn%2F750sc3Zi1nDoK2nZlpMpF8VsNgUwlLd0yO4jjRZwxQye8vneMhW1g4ZEnsEtaHQHpHAwLu%2BweexUH1bZNjCpbSsdCNLBgq9cq7g0kWBZe5ubDQm5eXZb0CuMOVlxK6HiRthTxguQVj658CHNXw%2Fmsx%2Fm9r9HfkRzuGLG1UFCCOFFVDtzX6LcwxFq9Y%2FhQjea97r7%2BXz9wwZDow%2BNr5WRhsDjk01DnlOnzlKktBazlFQ3699xBL%2B2aJgPHWr5uIOpyRhg62JnfDFYhRfQrHQcGbzL%2FnXU99IDE7%2Bv70LYlbz3TRsxgYJaaleIix1rOxiGeSrTD7n9XCj4Xyf5M5k%2BH9ubOtqvsy%2FxyW0ZVdGZXAVLMQ3SOjtIpd1ZIfCpdD6eWdUzEtIB4D4nBh3mOGhRxMJij%2BsQGOqUBxor%2B9lfWMgreRocuhGZiu%2BRgyRO606346bO9kqdihZqeurbTcM65L7I9DVFsPAIJ4tASUc9WlZm1qIIT15x1Sj0mn90pA7Ec2wNzncbZh0UFww8JmSbP3hjfmkNSKpeqa7509zTOwYrnLQcUnuks%2BXkoysBazSFhIoUugy5FoTaqxkr6BTI6aW1seA4Ks%2B%2FwRHLfJpJ6tGkCL%2BVuMM5U0x%2FvsLuP&X-Amz-Signature=b7bac34f242bfa981db2b627aa2489a524ccc80697e24c850bb9aa3f74a21aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIAYPJV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCsF%2FVd%2BMiC9harFKmHLjs3LmUc8rbfQfpfxSCDFHbeswIgLYB%2BKLJ14UyWsxCADP5XqnaaqsxAUopoDjoqWSUZBMQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOMW3scm4zAWCxPCdCrcA29rEvxcHMB0yhH4C0bwu%2FB0T2cE%2Fx8g4kqRLIOPumUb2PNEU%2FR7RcB86g5RA59Z8YOTabJj%2BnMZlX6wBKjB5suQintBq7ZRya5DFwLu1wyAbQZbz%2BGn1zcePxP5vf3DF4FnyuVbSPYx%2BWT6ASU9pdu7YGK05jyf7Nd%2FlLxxAFEHyemvzj%2BmP5dDG4vlrxitq4fe40YrRtdckM6ESJ8FA7avDSG49K3TVErsbn%2F750sc3Zi1nDoK2nZlpMpF8VsNgUwlLd0yO4jjRZwxQye8vneMhW1g4ZEnsEtaHQHpHAwLu%2BweexUH1bZNjCpbSsdCNLBgq9cq7g0kWBZe5ubDQm5eXZb0CuMOVlxK6HiRthTxguQVj658CHNXw%2Fmsx%2Fm9r9HfkRzuGLG1UFCCOFFVDtzX6LcwxFq9Y%2FhQjea97r7%2BXz9wwZDow%2BNr5WRhsDjk01DnlOnzlKktBazlFQ3699xBL%2B2aJgPHWr5uIOpyRhg62JnfDFYhRfQrHQcGbzL%2FnXU99IDE7%2Bv70LYlbz3TRsxgYJaaleIix1rOxiGeSrTD7n9XCj4Xyf5M5k%2BH9ubOtqvsy%2FxyW0ZVdGZXAVLMQ3SOjtIpd1ZIfCpdD6eWdUzEtIB4D4nBh3mOGhRxMJij%2BsQGOqUBxor%2B9lfWMgreRocuhGZiu%2BRgyRO606346bO9kqdihZqeurbTcM65L7I9DVFsPAIJ4tASUc9WlZm1qIIT15x1Sj0mn90pA7Ec2wNzncbZh0UFww8JmSbP3hjfmkNSKpeqa7509zTOwYrnLQcUnuks%2BXkoysBazSFhIoUugy5FoTaqxkr6BTI6aW1seA4Ks%2B%2FwRHLfJpJ6tGkCL%2BVuMM5U0x%2FvsLuP&X-Amz-Signature=ccb2705cce56d1224531abc61acd3a1ddbebf7bcd7b9c8150d7cdc0bdbd37d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIAYPJV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCsF%2FVd%2BMiC9harFKmHLjs3LmUc8rbfQfpfxSCDFHbeswIgLYB%2BKLJ14UyWsxCADP5XqnaaqsxAUopoDjoqWSUZBMQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOMW3scm4zAWCxPCdCrcA29rEvxcHMB0yhH4C0bwu%2FB0T2cE%2Fx8g4kqRLIOPumUb2PNEU%2FR7RcB86g5RA59Z8YOTabJj%2BnMZlX6wBKjB5suQintBq7ZRya5DFwLu1wyAbQZbz%2BGn1zcePxP5vf3DF4FnyuVbSPYx%2BWT6ASU9pdu7YGK05jyf7Nd%2FlLxxAFEHyemvzj%2BmP5dDG4vlrxitq4fe40YrRtdckM6ESJ8FA7avDSG49K3TVErsbn%2F750sc3Zi1nDoK2nZlpMpF8VsNgUwlLd0yO4jjRZwxQye8vneMhW1g4ZEnsEtaHQHpHAwLu%2BweexUH1bZNjCpbSsdCNLBgq9cq7g0kWBZe5ubDQm5eXZb0CuMOVlxK6HiRthTxguQVj658CHNXw%2Fmsx%2Fm9r9HfkRzuGLG1UFCCOFFVDtzX6LcwxFq9Y%2FhQjea97r7%2BXz9wwZDow%2BNr5WRhsDjk01DnlOnzlKktBazlFQ3699xBL%2B2aJgPHWr5uIOpyRhg62JnfDFYhRfQrHQcGbzL%2FnXU99IDE7%2Bv70LYlbz3TRsxgYJaaleIix1rOxiGeSrTD7n9XCj4Xyf5M5k%2BH9ubOtqvsy%2FxyW0ZVdGZXAVLMQ3SOjtIpd1ZIfCpdD6eWdUzEtIB4D4nBh3mOGhRxMJij%2BsQGOqUBxor%2B9lfWMgreRocuhGZiu%2BRgyRO606346bO9kqdihZqeurbTcM65L7I9DVFsPAIJ4tASUc9WlZm1qIIT15x1Sj0mn90pA7Ec2wNzncbZh0UFww8JmSbP3hjfmkNSKpeqa7509zTOwYrnLQcUnuks%2BXkoysBazSFhIoUugy5FoTaqxkr6BTI6aW1seA4Ks%2B%2FwRHLfJpJ6tGkCL%2BVuMM5U0x%2FvsLuP&X-Amz-Signature=b813e3d0d1e0c347d0d33becca23f58d6824f6fdd6fe01b94f3f5fc3e8caf019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIAYPJV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCsF%2FVd%2BMiC9harFKmHLjs3LmUc8rbfQfpfxSCDFHbeswIgLYB%2BKLJ14UyWsxCADP5XqnaaqsxAUopoDjoqWSUZBMQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOMW3scm4zAWCxPCdCrcA29rEvxcHMB0yhH4C0bwu%2FB0T2cE%2Fx8g4kqRLIOPumUb2PNEU%2FR7RcB86g5RA59Z8YOTabJj%2BnMZlX6wBKjB5suQintBq7ZRya5DFwLu1wyAbQZbz%2BGn1zcePxP5vf3DF4FnyuVbSPYx%2BWT6ASU9pdu7YGK05jyf7Nd%2FlLxxAFEHyemvzj%2BmP5dDG4vlrxitq4fe40YrRtdckM6ESJ8FA7avDSG49K3TVErsbn%2F750sc3Zi1nDoK2nZlpMpF8VsNgUwlLd0yO4jjRZwxQye8vneMhW1g4ZEnsEtaHQHpHAwLu%2BweexUH1bZNjCpbSsdCNLBgq9cq7g0kWBZe5ubDQm5eXZb0CuMOVlxK6HiRthTxguQVj658CHNXw%2Fmsx%2Fm9r9HfkRzuGLG1UFCCOFFVDtzX6LcwxFq9Y%2FhQjea97r7%2BXz9wwZDow%2BNr5WRhsDjk01DnlOnzlKktBazlFQ3699xBL%2B2aJgPHWr5uIOpyRhg62JnfDFYhRfQrHQcGbzL%2FnXU99IDE7%2Bv70LYlbz3TRsxgYJaaleIix1rOxiGeSrTD7n9XCj4Xyf5M5k%2BH9ubOtqvsy%2FxyW0ZVdGZXAVLMQ3SOjtIpd1ZIfCpdD6eWdUzEtIB4D4nBh3mOGhRxMJij%2BsQGOqUBxor%2B9lfWMgreRocuhGZiu%2BRgyRO606346bO9kqdihZqeurbTcM65L7I9DVFsPAIJ4tASUc9WlZm1qIIT15x1Sj0mn90pA7Ec2wNzncbZh0UFww8JmSbP3hjfmkNSKpeqa7509zTOwYrnLQcUnuks%2BXkoysBazSFhIoUugy5FoTaqxkr6BTI6aW1seA4Ks%2B%2FwRHLfJpJ6tGkCL%2BVuMM5U0x%2FvsLuP&X-Amz-Signature=477739f1a7d016e475114f31fc6231ff0b766d525f9f0ca7bd4ed242d95d7781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIAYPJV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCsF%2FVd%2BMiC9harFKmHLjs3LmUc8rbfQfpfxSCDFHbeswIgLYB%2BKLJ14UyWsxCADP5XqnaaqsxAUopoDjoqWSUZBMQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOMW3scm4zAWCxPCdCrcA29rEvxcHMB0yhH4C0bwu%2FB0T2cE%2Fx8g4kqRLIOPumUb2PNEU%2FR7RcB86g5RA59Z8YOTabJj%2BnMZlX6wBKjB5suQintBq7ZRya5DFwLu1wyAbQZbz%2BGn1zcePxP5vf3DF4FnyuVbSPYx%2BWT6ASU9pdu7YGK05jyf7Nd%2FlLxxAFEHyemvzj%2BmP5dDG4vlrxitq4fe40YrRtdckM6ESJ8FA7avDSG49K3TVErsbn%2F750sc3Zi1nDoK2nZlpMpF8VsNgUwlLd0yO4jjRZwxQye8vneMhW1g4ZEnsEtaHQHpHAwLu%2BweexUH1bZNjCpbSsdCNLBgq9cq7g0kWBZe5ubDQm5eXZb0CuMOVlxK6HiRthTxguQVj658CHNXw%2Fmsx%2Fm9r9HfkRzuGLG1UFCCOFFVDtzX6LcwxFq9Y%2FhQjea97r7%2BXz9wwZDow%2BNr5WRhsDjk01DnlOnzlKktBazlFQ3699xBL%2B2aJgPHWr5uIOpyRhg62JnfDFYhRfQrHQcGbzL%2FnXU99IDE7%2Bv70LYlbz3TRsxgYJaaleIix1rOxiGeSrTD7n9XCj4Xyf5M5k%2BH9ubOtqvsy%2FxyW0ZVdGZXAVLMQ3SOjtIpd1ZIfCpdD6eWdUzEtIB4D4nBh3mOGhRxMJij%2BsQGOqUBxor%2B9lfWMgreRocuhGZiu%2BRgyRO606346bO9kqdihZqeurbTcM65L7I9DVFsPAIJ4tASUc9WlZm1qIIT15x1Sj0mn90pA7Ec2wNzncbZh0UFww8JmSbP3hjfmkNSKpeqa7509zTOwYrnLQcUnuks%2BXkoysBazSFhIoUugy5FoTaqxkr6BTI6aW1seA4Ks%2B%2FwRHLfJpJ6tGkCL%2BVuMM5U0x%2FvsLuP&X-Amz-Signature=68d665a5cf945d161be116c1c205b446928bb68d62bf376e071796e8183921ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIAYPJV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCsF%2FVd%2BMiC9harFKmHLjs3LmUc8rbfQfpfxSCDFHbeswIgLYB%2BKLJ14UyWsxCADP5XqnaaqsxAUopoDjoqWSUZBMQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOMW3scm4zAWCxPCdCrcA29rEvxcHMB0yhH4C0bwu%2FB0T2cE%2Fx8g4kqRLIOPumUb2PNEU%2FR7RcB86g5RA59Z8YOTabJj%2BnMZlX6wBKjB5suQintBq7ZRya5DFwLu1wyAbQZbz%2BGn1zcePxP5vf3DF4FnyuVbSPYx%2BWT6ASU9pdu7YGK05jyf7Nd%2FlLxxAFEHyemvzj%2BmP5dDG4vlrxitq4fe40YrRtdckM6ESJ8FA7avDSG49K3TVErsbn%2F750sc3Zi1nDoK2nZlpMpF8VsNgUwlLd0yO4jjRZwxQye8vneMhW1g4ZEnsEtaHQHpHAwLu%2BweexUH1bZNjCpbSsdCNLBgq9cq7g0kWBZe5ubDQm5eXZb0CuMOVlxK6HiRthTxguQVj658CHNXw%2Fmsx%2Fm9r9HfkRzuGLG1UFCCOFFVDtzX6LcwxFq9Y%2FhQjea97r7%2BXz9wwZDow%2BNr5WRhsDjk01DnlOnzlKktBazlFQ3699xBL%2B2aJgPHWr5uIOpyRhg62JnfDFYhRfQrHQcGbzL%2FnXU99IDE7%2Bv70LYlbz3TRsxgYJaaleIix1rOxiGeSrTD7n9XCj4Xyf5M5k%2BH9ubOtqvsy%2FxyW0ZVdGZXAVLMQ3SOjtIpd1ZIfCpdD6eWdUzEtIB4D4nBh3mOGhRxMJij%2BsQGOqUBxor%2B9lfWMgreRocuhGZiu%2BRgyRO606346bO9kqdihZqeurbTcM65L7I9DVFsPAIJ4tASUc9WlZm1qIIT15x1Sj0mn90pA7Ec2wNzncbZh0UFww8JmSbP3hjfmkNSKpeqa7509zTOwYrnLQcUnuks%2BXkoysBazSFhIoUugy5FoTaqxkr6BTI6aW1seA4Ks%2B%2FwRHLfJpJ6tGkCL%2BVuMM5U0x%2FvsLuP&X-Amz-Signature=e4ec03c9ecd6cab70f3f2944efb22976f8e53d48405db7a08e48440972b26cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIAYPJV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCsF%2FVd%2BMiC9harFKmHLjs3LmUc8rbfQfpfxSCDFHbeswIgLYB%2BKLJ14UyWsxCADP5XqnaaqsxAUopoDjoqWSUZBMQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOMW3scm4zAWCxPCdCrcA29rEvxcHMB0yhH4C0bwu%2FB0T2cE%2Fx8g4kqRLIOPumUb2PNEU%2FR7RcB86g5RA59Z8YOTabJj%2BnMZlX6wBKjB5suQintBq7ZRya5DFwLu1wyAbQZbz%2BGn1zcePxP5vf3DF4FnyuVbSPYx%2BWT6ASU9pdu7YGK05jyf7Nd%2FlLxxAFEHyemvzj%2BmP5dDG4vlrxitq4fe40YrRtdckM6ESJ8FA7avDSG49K3TVErsbn%2F750sc3Zi1nDoK2nZlpMpF8VsNgUwlLd0yO4jjRZwxQye8vneMhW1g4ZEnsEtaHQHpHAwLu%2BweexUH1bZNjCpbSsdCNLBgq9cq7g0kWBZe5ubDQm5eXZb0CuMOVlxK6HiRthTxguQVj658CHNXw%2Fmsx%2Fm9r9HfkRzuGLG1UFCCOFFVDtzX6LcwxFq9Y%2FhQjea97r7%2BXz9wwZDow%2BNr5WRhsDjk01DnlOnzlKktBazlFQ3699xBL%2B2aJgPHWr5uIOpyRhg62JnfDFYhRfQrHQcGbzL%2FnXU99IDE7%2Bv70LYlbz3TRsxgYJaaleIix1rOxiGeSrTD7n9XCj4Xyf5M5k%2BH9ubOtqvsy%2FxyW0ZVdGZXAVLMQ3SOjtIpd1ZIfCpdD6eWdUzEtIB4D4nBh3mOGhRxMJij%2BsQGOqUBxor%2B9lfWMgreRocuhGZiu%2BRgyRO606346bO9kqdihZqeurbTcM65L7I9DVFsPAIJ4tASUc9WlZm1qIIT15x1Sj0mn90pA7Ec2wNzncbZh0UFww8JmSbP3hjfmkNSKpeqa7509zTOwYrnLQcUnuks%2BXkoysBazSFhIoUugy5FoTaqxkr6BTI6aW1seA4Ks%2B%2FwRHLfJpJ6tGkCL%2BVuMM5U0x%2FvsLuP&X-Amz-Signature=0a5bdddc26e3a6f0e59c960e3a3aa1a9a9679f189c0472751eff5f5bf53d3e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
