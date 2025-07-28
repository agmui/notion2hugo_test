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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKMAEI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDQfABufcy2fiw7PEyOaGB42iiMBv7QlVtWhUPqv1CBCAiEAreRHpUg9S1zCcXZNtRAMPooqryZdHzk6MJWkNW4K5YsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BWI1z6Au9p4vca%2FCrcA%2B8XXDnTnCdzEQTmp%2Fv2EXJfGEepXm3q1yOEQMqj6KbYda1whqCxe7vimiNoUqR3DHO%2FAk1XhBbk8HDUrCyrt53PpRq9z6ecnH9WSB5f54aNqf4M1mDm30b1StvHHtWtkDTucPx2zFfO8PDbSEfqO3BPgROTUSzMl%2F3p5pPD6m%2BLlTeF8jUjFK91fZtxphy1MZ8YjoH4m98yM%2BQDAcLUmbMCyK384DZKYH%2FlZxvdvVLn9PGfnRUkvVyTTOwaj9UQcN%2FkUZRJC4DNHSHgntPgNLEBlkzlM2l7gNPJocJTlmMQcK0Gkxrkf%2BBNcdKh5yJMIwsSFOvgQfWqdnD2bPYk0VfmD15UBgQG8h7elGFlDV0Hz5pZgZq3Sy6hHehq%2Fn%2FaSQ6vREIIEzHr8V46jGrTo6wDeY9QqTAiso7SCoUpSifcPNh6b3gtvvSs7ph12hU2GxUOwPcWMRCurOROlOa4tWN96IYDaHqv0v7Hojw2B5HUVGpypALUTBpleIHCoiIt5MNTzJc4QySy8XRvEZenYGTqNmXnzjjD4uUZqIIOKE7rSqfumyBC2LwEchoMAOR3j8hydbTDVO0jqGmiAo%2Foe%2B2IajFDjsL6i%2FnSMuRiNuFyXIliyOLAqe2uTn1cMJLSnsQGOqUBX2atEAIvuumnV8V94JE4KSIiQ1QXKg4EjaZmr44LD0mKP5m681ZYO4tE%2FPfjLih3jUVGAtz1itHAvA5Ge9frB4NxROMOgcSnNnqrDOIMnD%2F%2Bn%2FanPc6tOPVA5ThHRUv2RW1qak53MTGe0%2Bp87hseIxOp%2FbIyjtgJ0ierUUjpXcLUBqesy4viNFAdWHGLTamwAyGPoyOeH8JvOkRLS7uo5qDC%2Bmpa&X-Amz-Signature=b6ed4c0e62c1f9f1938c3c00e9dcb640674c337b3484dde8750f9b3e0ba70e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKMAEI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDQfABufcy2fiw7PEyOaGB42iiMBv7QlVtWhUPqv1CBCAiEAreRHpUg9S1zCcXZNtRAMPooqryZdHzk6MJWkNW4K5YsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BWI1z6Au9p4vca%2FCrcA%2B8XXDnTnCdzEQTmp%2Fv2EXJfGEepXm3q1yOEQMqj6KbYda1whqCxe7vimiNoUqR3DHO%2FAk1XhBbk8HDUrCyrt53PpRq9z6ecnH9WSB5f54aNqf4M1mDm30b1StvHHtWtkDTucPx2zFfO8PDbSEfqO3BPgROTUSzMl%2F3p5pPD6m%2BLlTeF8jUjFK91fZtxphy1MZ8YjoH4m98yM%2BQDAcLUmbMCyK384DZKYH%2FlZxvdvVLn9PGfnRUkvVyTTOwaj9UQcN%2FkUZRJC4DNHSHgntPgNLEBlkzlM2l7gNPJocJTlmMQcK0Gkxrkf%2BBNcdKh5yJMIwsSFOvgQfWqdnD2bPYk0VfmD15UBgQG8h7elGFlDV0Hz5pZgZq3Sy6hHehq%2Fn%2FaSQ6vREIIEzHr8V46jGrTo6wDeY9QqTAiso7SCoUpSifcPNh6b3gtvvSs7ph12hU2GxUOwPcWMRCurOROlOa4tWN96IYDaHqv0v7Hojw2B5HUVGpypALUTBpleIHCoiIt5MNTzJc4QySy8XRvEZenYGTqNmXnzjjD4uUZqIIOKE7rSqfumyBC2LwEchoMAOR3j8hydbTDVO0jqGmiAo%2Foe%2B2IajFDjsL6i%2FnSMuRiNuFyXIliyOLAqe2uTn1cMJLSnsQGOqUBX2atEAIvuumnV8V94JE4KSIiQ1QXKg4EjaZmr44LD0mKP5m681ZYO4tE%2FPfjLih3jUVGAtz1itHAvA5Ge9frB4NxROMOgcSnNnqrDOIMnD%2F%2Bn%2FanPc6tOPVA5ThHRUv2RW1qak53MTGe0%2Bp87hseIxOp%2FbIyjtgJ0ierUUjpXcLUBqesy4viNFAdWHGLTamwAyGPoyOeH8JvOkRLS7uo5qDC%2Bmpa&X-Amz-Signature=22854f127b75b7c55a838e7fdffe2802c187c0485ca54c8752c02719df7cf78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKMAEI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDQfABufcy2fiw7PEyOaGB42iiMBv7QlVtWhUPqv1CBCAiEAreRHpUg9S1zCcXZNtRAMPooqryZdHzk6MJWkNW4K5YsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BWI1z6Au9p4vca%2FCrcA%2B8XXDnTnCdzEQTmp%2Fv2EXJfGEepXm3q1yOEQMqj6KbYda1whqCxe7vimiNoUqR3DHO%2FAk1XhBbk8HDUrCyrt53PpRq9z6ecnH9WSB5f54aNqf4M1mDm30b1StvHHtWtkDTucPx2zFfO8PDbSEfqO3BPgROTUSzMl%2F3p5pPD6m%2BLlTeF8jUjFK91fZtxphy1MZ8YjoH4m98yM%2BQDAcLUmbMCyK384DZKYH%2FlZxvdvVLn9PGfnRUkvVyTTOwaj9UQcN%2FkUZRJC4DNHSHgntPgNLEBlkzlM2l7gNPJocJTlmMQcK0Gkxrkf%2BBNcdKh5yJMIwsSFOvgQfWqdnD2bPYk0VfmD15UBgQG8h7elGFlDV0Hz5pZgZq3Sy6hHehq%2Fn%2FaSQ6vREIIEzHr8V46jGrTo6wDeY9QqTAiso7SCoUpSifcPNh6b3gtvvSs7ph12hU2GxUOwPcWMRCurOROlOa4tWN96IYDaHqv0v7Hojw2B5HUVGpypALUTBpleIHCoiIt5MNTzJc4QySy8XRvEZenYGTqNmXnzjjD4uUZqIIOKE7rSqfumyBC2LwEchoMAOR3j8hydbTDVO0jqGmiAo%2Foe%2B2IajFDjsL6i%2FnSMuRiNuFyXIliyOLAqe2uTn1cMJLSnsQGOqUBX2atEAIvuumnV8V94JE4KSIiQ1QXKg4EjaZmr44LD0mKP5m681ZYO4tE%2FPfjLih3jUVGAtz1itHAvA5Ge9frB4NxROMOgcSnNnqrDOIMnD%2F%2Bn%2FanPc6tOPVA5ThHRUv2RW1qak53MTGe0%2Bp87hseIxOp%2FbIyjtgJ0ierUUjpXcLUBqesy4viNFAdWHGLTamwAyGPoyOeH8JvOkRLS7uo5qDC%2Bmpa&X-Amz-Signature=74634354845406c129f8d17f76b1c7301d4b0d3fe01f09a740f9e68eefa30541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKMAEI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDQfABufcy2fiw7PEyOaGB42iiMBv7QlVtWhUPqv1CBCAiEAreRHpUg9S1zCcXZNtRAMPooqryZdHzk6MJWkNW4K5YsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BWI1z6Au9p4vca%2FCrcA%2B8XXDnTnCdzEQTmp%2Fv2EXJfGEepXm3q1yOEQMqj6KbYda1whqCxe7vimiNoUqR3DHO%2FAk1XhBbk8HDUrCyrt53PpRq9z6ecnH9WSB5f54aNqf4M1mDm30b1StvHHtWtkDTucPx2zFfO8PDbSEfqO3BPgROTUSzMl%2F3p5pPD6m%2BLlTeF8jUjFK91fZtxphy1MZ8YjoH4m98yM%2BQDAcLUmbMCyK384DZKYH%2FlZxvdvVLn9PGfnRUkvVyTTOwaj9UQcN%2FkUZRJC4DNHSHgntPgNLEBlkzlM2l7gNPJocJTlmMQcK0Gkxrkf%2BBNcdKh5yJMIwsSFOvgQfWqdnD2bPYk0VfmD15UBgQG8h7elGFlDV0Hz5pZgZq3Sy6hHehq%2Fn%2FaSQ6vREIIEzHr8V46jGrTo6wDeY9QqTAiso7SCoUpSifcPNh6b3gtvvSs7ph12hU2GxUOwPcWMRCurOROlOa4tWN96IYDaHqv0v7Hojw2B5HUVGpypALUTBpleIHCoiIt5MNTzJc4QySy8XRvEZenYGTqNmXnzjjD4uUZqIIOKE7rSqfumyBC2LwEchoMAOR3j8hydbTDVO0jqGmiAo%2Foe%2B2IajFDjsL6i%2FnSMuRiNuFyXIliyOLAqe2uTn1cMJLSnsQGOqUBX2atEAIvuumnV8V94JE4KSIiQ1QXKg4EjaZmr44LD0mKP5m681ZYO4tE%2FPfjLih3jUVGAtz1itHAvA5Ge9frB4NxROMOgcSnNnqrDOIMnD%2F%2Bn%2FanPc6tOPVA5ThHRUv2RW1qak53MTGe0%2Bp87hseIxOp%2FbIyjtgJ0ierUUjpXcLUBqesy4viNFAdWHGLTamwAyGPoyOeH8JvOkRLS7uo5qDC%2Bmpa&X-Amz-Signature=92c42ef9199e21a6c6cacd7b2a0242844bd4d964ec9a7e28f99f2cf4b1313dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKMAEI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDQfABufcy2fiw7PEyOaGB42iiMBv7QlVtWhUPqv1CBCAiEAreRHpUg9S1zCcXZNtRAMPooqryZdHzk6MJWkNW4K5YsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BWI1z6Au9p4vca%2FCrcA%2B8XXDnTnCdzEQTmp%2Fv2EXJfGEepXm3q1yOEQMqj6KbYda1whqCxe7vimiNoUqR3DHO%2FAk1XhBbk8HDUrCyrt53PpRq9z6ecnH9WSB5f54aNqf4M1mDm30b1StvHHtWtkDTucPx2zFfO8PDbSEfqO3BPgROTUSzMl%2F3p5pPD6m%2BLlTeF8jUjFK91fZtxphy1MZ8YjoH4m98yM%2BQDAcLUmbMCyK384DZKYH%2FlZxvdvVLn9PGfnRUkvVyTTOwaj9UQcN%2FkUZRJC4DNHSHgntPgNLEBlkzlM2l7gNPJocJTlmMQcK0Gkxrkf%2BBNcdKh5yJMIwsSFOvgQfWqdnD2bPYk0VfmD15UBgQG8h7elGFlDV0Hz5pZgZq3Sy6hHehq%2Fn%2FaSQ6vREIIEzHr8V46jGrTo6wDeY9QqTAiso7SCoUpSifcPNh6b3gtvvSs7ph12hU2GxUOwPcWMRCurOROlOa4tWN96IYDaHqv0v7Hojw2B5HUVGpypALUTBpleIHCoiIt5MNTzJc4QySy8XRvEZenYGTqNmXnzjjD4uUZqIIOKE7rSqfumyBC2LwEchoMAOR3j8hydbTDVO0jqGmiAo%2Foe%2B2IajFDjsL6i%2FnSMuRiNuFyXIliyOLAqe2uTn1cMJLSnsQGOqUBX2atEAIvuumnV8V94JE4KSIiQ1QXKg4EjaZmr44LD0mKP5m681ZYO4tE%2FPfjLih3jUVGAtz1itHAvA5Ge9frB4NxROMOgcSnNnqrDOIMnD%2F%2Bn%2FanPc6tOPVA5ThHRUv2RW1qak53MTGe0%2Bp87hseIxOp%2FbIyjtgJ0ierUUjpXcLUBqesy4viNFAdWHGLTamwAyGPoyOeH8JvOkRLS7uo5qDC%2Bmpa&X-Amz-Signature=071357b68ff7f36ec806842a83a1163f1d9196fcd503f5098c37eec0bca284ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKMAEI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDQfABufcy2fiw7PEyOaGB42iiMBv7QlVtWhUPqv1CBCAiEAreRHpUg9S1zCcXZNtRAMPooqryZdHzk6MJWkNW4K5YsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BWI1z6Au9p4vca%2FCrcA%2B8XXDnTnCdzEQTmp%2Fv2EXJfGEepXm3q1yOEQMqj6KbYda1whqCxe7vimiNoUqR3DHO%2FAk1XhBbk8HDUrCyrt53PpRq9z6ecnH9WSB5f54aNqf4M1mDm30b1StvHHtWtkDTucPx2zFfO8PDbSEfqO3BPgROTUSzMl%2F3p5pPD6m%2BLlTeF8jUjFK91fZtxphy1MZ8YjoH4m98yM%2BQDAcLUmbMCyK384DZKYH%2FlZxvdvVLn9PGfnRUkvVyTTOwaj9UQcN%2FkUZRJC4DNHSHgntPgNLEBlkzlM2l7gNPJocJTlmMQcK0Gkxrkf%2BBNcdKh5yJMIwsSFOvgQfWqdnD2bPYk0VfmD15UBgQG8h7elGFlDV0Hz5pZgZq3Sy6hHehq%2Fn%2FaSQ6vREIIEzHr8V46jGrTo6wDeY9QqTAiso7SCoUpSifcPNh6b3gtvvSs7ph12hU2GxUOwPcWMRCurOROlOa4tWN96IYDaHqv0v7Hojw2B5HUVGpypALUTBpleIHCoiIt5MNTzJc4QySy8XRvEZenYGTqNmXnzjjD4uUZqIIOKE7rSqfumyBC2LwEchoMAOR3j8hydbTDVO0jqGmiAo%2Foe%2B2IajFDjsL6i%2FnSMuRiNuFyXIliyOLAqe2uTn1cMJLSnsQGOqUBX2atEAIvuumnV8V94JE4KSIiQ1QXKg4EjaZmr44LD0mKP5m681ZYO4tE%2FPfjLih3jUVGAtz1itHAvA5Ge9frB4NxROMOgcSnNnqrDOIMnD%2F%2Bn%2FanPc6tOPVA5ThHRUv2RW1qak53MTGe0%2Bp87hseIxOp%2FbIyjtgJ0ierUUjpXcLUBqesy4viNFAdWHGLTamwAyGPoyOeH8JvOkRLS7uo5qDC%2Bmpa&X-Amz-Signature=4b741143318c00217507e9c530b93f5e91f083effecc6cd37dafbd9a3c929d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKMAEI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDQfABufcy2fiw7PEyOaGB42iiMBv7QlVtWhUPqv1CBCAiEAreRHpUg9S1zCcXZNtRAMPooqryZdHzk6MJWkNW4K5YsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BWI1z6Au9p4vca%2FCrcA%2B8XXDnTnCdzEQTmp%2Fv2EXJfGEepXm3q1yOEQMqj6KbYda1whqCxe7vimiNoUqR3DHO%2FAk1XhBbk8HDUrCyrt53PpRq9z6ecnH9WSB5f54aNqf4M1mDm30b1StvHHtWtkDTucPx2zFfO8PDbSEfqO3BPgROTUSzMl%2F3p5pPD6m%2BLlTeF8jUjFK91fZtxphy1MZ8YjoH4m98yM%2BQDAcLUmbMCyK384DZKYH%2FlZxvdvVLn9PGfnRUkvVyTTOwaj9UQcN%2FkUZRJC4DNHSHgntPgNLEBlkzlM2l7gNPJocJTlmMQcK0Gkxrkf%2BBNcdKh5yJMIwsSFOvgQfWqdnD2bPYk0VfmD15UBgQG8h7elGFlDV0Hz5pZgZq3Sy6hHehq%2Fn%2FaSQ6vREIIEzHr8V46jGrTo6wDeY9QqTAiso7SCoUpSifcPNh6b3gtvvSs7ph12hU2GxUOwPcWMRCurOROlOa4tWN96IYDaHqv0v7Hojw2B5HUVGpypALUTBpleIHCoiIt5MNTzJc4QySy8XRvEZenYGTqNmXnzjjD4uUZqIIOKE7rSqfumyBC2LwEchoMAOR3j8hydbTDVO0jqGmiAo%2Foe%2B2IajFDjsL6i%2FnSMuRiNuFyXIliyOLAqe2uTn1cMJLSnsQGOqUBX2atEAIvuumnV8V94JE4KSIiQ1QXKg4EjaZmr44LD0mKP5m681ZYO4tE%2FPfjLih3jUVGAtz1itHAvA5Ge9frB4NxROMOgcSnNnqrDOIMnD%2F%2Bn%2FanPc6tOPVA5ThHRUv2RW1qak53MTGe0%2Bp87hseIxOp%2FbIyjtgJ0ierUUjpXcLUBqesy4viNFAdWHGLTamwAyGPoyOeH8JvOkRLS7uo5qDC%2Bmpa&X-Amz-Signature=1685a16c5f7b7d102e6b76c8043c6c92f221e574bfe717756a8c42c5d1542cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKMAEI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDQfABufcy2fiw7PEyOaGB42iiMBv7QlVtWhUPqv1CBCAiEAreRHpUg9S1zCcXZNtRAMPooqryZdHzk6MJWkNW4K5YsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BWI1z6Au9p4vca%2FCrcA%2B8XXDnTnCdzEQTmp%2Fv2EXJfGEepXm3q1yOEQMqj6KbYda1whqCxe7vimiNoUqR3DHO%2FAk1XhBbk8HDUrCyrt53PpRq9z6ecnH9WSB5f54aNqf4M1mDm30b1StvHHtWtkDTucPx2zFfO8PDbSEfqO3BPgROTUSzMl%2F3p5pPD6m%2BLlTeF8jUjFK91fZtxphy1MZ8YjoH4m98yM%2BQDAcLUmbMCyK384DZKYH%2FlZxvdvVLn9PGfnRUkvVyTTOwaj9UQcN%2FkUZRJC4DNHSHgntPgNLEBlkzlM2l7gNPJocJTlmMQcK0Gkxrkf%2BBNcdKh5yJMIwsSFOvgQfWqdnD2bPYk0VfmD15UBgQG8h7elGFlDV0Hz5pZgZq3Sy6hHehq%2Fn%2FaSQ6vREIIEzHr8V46jGrTo6wDeY9QqTAiso7SCoUpSifcPNh6b3gtvvSs7ph12hU2GxUOwPcWMRCurOROlOa4tWN96IYDaHqv0v7Hojw2B5HUVGpypALUTBpleIHCoiIt5MNTzJc4QySy8XRvEZenYGTqNmXnzjjD4uUZqIIOKE7rSqfumyBC2LwEchoMAOR3j8hydbTDVO0jqGmiAo%2Foe%2B2IajFDjsL6i%2FnSMuRiNuFyXIliyOLAqe2uTn1cMJLSnsQGOqUBX2atEAIvuumnV8V94JE4KSIiQ1QXKg4EjaZmr44LD0mKP5m681ZYO4tE%2FPfjLih3jUVGAtz1itHAvA5Ge9frB4NxROMOgcSnNnqrDOIMnD%2F%2Bn%2FanPc6tOPVA5ThHRUv2RW1qak53MTGe0%2Bp87hseIxOp%2FbIyjtgJ0ierUUjpXcLUBqesy4viNFAdWHGLTamwAyGPoyOeH8JvOkRLS7uo5qDC%2Bmpa&X-Amz-Signature=8f653b2bc946b08ad2f811bd63c32687a9ae9cb4956fdf435f9abb347ed7c487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKMAEI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDQfABufcy2fiw7PEyOaGB42iiMBv7QlVtWhUPqv1CBCAiEAreRHpUg9S1zCcXZNtRAMPooqryZdHzk6MJWkNW4K5YsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BWI1z6Au9p4vca%2FCrcA%2B8XXDnTnCdzEQTmp%2Fv2EXJfGEepXm3q1yOEQMqj6KbYda1whqCxe7vimiNoUqR3DHO%2FAk1XhBbk8HDUrCyrt53PpRq9z6ecnH9WSB5f54aNqf4M1mDm30b1StvHHtWtkDTucPx2zFfO8PDbSEfqO3BPgROTUSzMl%2F3p5pPD6m%2BLlTeF8jUjFK91fZtxphy1MZ8YjoH4m98yM%2BQDAcLUmbMCyK384DZKYH%2FlZxvdvVLn9PGfnRUkvVyTTOwaj9UQcN%2FkUZRJC4DNHSHgntPgNLEBlkzlM2l7gNPJocJTlmMQcK0Gkxrkf%2BBNcdKh5yJMIwsSFOvgQfWqdnD2bPYk0VfmD15UBgQG8h7elGFlDV0Hz5pZgZq3Sy6hHehq%2Fn%2FaSQ6vREIIEzHr8V46jGrTo6wDeY9QqTAiso7SCoUpSifcPNh6b3gtvvSs7ph12hU2GxUOwPcWMRCurOROlOa4tWN96IYDaHqv0v7Hojw2B5HUVGpypALUTBpleIHCoiIt5MNTzJc4QySy8XRvEZenYGTqNmXnzjjD4uUZqIIOKE7rSqfumyBC2LwEchoMAOR3j8hydbTDVO0jqGmiAo%2Foe%2B2IajFDjsL6i%2FnSMuRiNuFyXIliyOLAqe2uTn1cMJLSnsQGOqUBX2atEAIvuumnV8V94JE4KSIiQ1QXKg4EjaZmr44LD0mKP5m681ZYO4tE%2FPfjLih3jUVGAtz1itHAvA5Ge9frB4NxROMOgcSnNnqrDOIMnD%2F%2Bn%2FanPc6tOPVA5ThHRUv2RW1qak53MTGe0%2Bp87hseIxOp%2FbIyjtgJ0ierUUjpXcLUBqesy4viNFAdWHGLTamwAyGPoyOeH8JvOkRLS7uo5qDC%2Bmpa&X-Amz-Signature=f8724ffdb51dae809f92043d510783135a152d22a385e8726f383bad6eadeaf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OMGLULQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIH%2FA4bT8WvnxGJiV3%2FMwrlEsjSpmPAnOJ4gCUa2%2Bsf3dAiBo1%2BsdMpSrkCu5xcqn4mxAdQNthyebGkfZzWlDrg61SSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMamzS5mQPCGJoU5EcKtwDe2CiiT0O9WgC34w2McSMvkmZJN4vCus%2FbKwK7%2FEMCBGkzc2LrXWSCDAw22LUewbzxX0XXdHXv%2FA7%2FTXKar63nIh9R2uwuMhvIvkX0efBlJJc65K4t6wcFb9LpHxp0yBtITxpDW1TJDgnbb%2BSTNNou9SyRpv0DmbWrVwk4QOVaylOc229E8idpnI4MgCCSroxsqQBProk7GWuFvIJSwZeLdqDPBkp%2FdAg9KSLkmftDHZOqdH2XcJRRoDZT6FnxoqeAs4C3aXdsna0KT7bmNCISj2fKq5j6JGfl0GsMRGeh%2FEKEAQQDEkY5JNUGCGK967HBPOi2kfeCJgQm7Bm%2BtgSAtVNbroxEaKNeND0DN0pv1uRHEzBLcbC413bZX58eummoP6AIEbVMRBOH26xpCrel%2BryFpmAEmIqauOsHwFNLpPoQ03qZk53WYX6Qeb95Yts4lArnQYTRLrVaFKTvkS81L2cFhIOcQZAcMibQe9CcsfWwrkxzRI66DTbTGc0h0Is98LrhEfYqFCKNOW8NBIoM2602R70qLTUIK2laQIvDkZilh02YU7QQnUGcuXZXmjRi49zPYqjbgGO4iQnT09XPKu0%2FyFtFJ4eq35G74wATb0DED214yoBemng42gw59GexAY6pgGtGno0LzAm%2By5rbaIJ1lNH2cW1bTKzHwhL0Y625mJehN5o42LzRj973gsea%2BFwc%2BEhHtYQxzQp1mMlVBvVRATVcYaD2sqr3QKLX%2BkY1X%2FHvD%2BWXjAKXL48PGBtQSzFgViqdWSI79iloAs403PTNjNra4E9dTNwxLVqrGtrDX9DRerWGBQaOKnhssP5jWvswrgTcnS6zx%2BcQyRTYdIyilTptxkqQ%2Bgu&X-Amz-Signature=d3fee7f6bff06ec5a5accf77f0698e95ec0548334ced63c02c700c92f47e3cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPNKMAEI%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDQfABufcy2fiw7PEyOaGB42iiMBv7QlVtWhUPqv1CBCAiEAreRHpUg9S1zCcXZNtRAMPooqryZdHzk6MJWkNW4K5YsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BWI1z6Au9p4vca%2FCrcA%2B8XXDnTnCdzEQTmp%2Fv2EXJfGEepXm3q1yOEQMqj6KbYda1whqCxe7vimiNoUqR3DHO%2FAk1XhBbk8HDUrCyrt53PpRq9z6ecnH9WSB5f54aNqf4M1mDm30b1StvHHtWtkDTucPx2zFfO8PDbSEfqO3BPgROTUSzMl%2F3p5pPD6m%2BLlTeF8jUjFK91fZtxphy1MZ8YjoH4m98yM%2BQDAcLUmbMCyK384DZKYH%2FlZxvdvVLn9PGfnRUkvVyTTOwaj9UQcN%2FkUZRJC4DNHSHgntPgNLEBlkzlM2l7gNPJocJTlmMQcK0Gkxrkf%2BBNcdKh5yJMIwsSFOvgQfWqdnD2bPYk0VfmD15UBgQG8h7elGFlDV0Hz5pZgZq3Sy6hHehq%2Fn%2FaSQ6vREIIEzHr8V46jGrTo6wDeY9QqTAiso7SCoUpSifcPNh6b3gtvvSs7ph12hU2GxUOwPcWMRCurOROlOa4tWN96IYDaHqv0v7Hojw2B5HUVGpypALUTBpleIHCoiIt5MNTzJc4QySy8XRvEZenYGTqNmXnzjjD4uUZqIIOKE7rSqfumyBC2LwEchoMAOR3j8hydbTDVO0jqGmiAo%2Foe%2B2IajFDjsL6i%2FnSMuRiNuFyXIliyOLAqe2uTn1cMJLSnsQGOqUBX2atEAIvuumnV8V94JE4KSIiQ1QXKg4EjaZmr44LD0mKP5m681ZYO4tE%2FPfjLih3jUVGAtz1itHAvA5Ge9frB4NxROMOgcSnNnqrDOIMnD%2F%2Bn%2FanPc6tOPVA5ThHRUv2RW1qak53MTGe0%2Bp87hseIxOp%2FbIyjtgJ0ierUUjpXcLUBqesy4viNFAdWHGLTamwAyGPoyOeH8JvOkRLS7uo5qDC%2Bmpa&X-Amz-Signature=bb4981f55b4d18089f94552ea7189c35f3f251088b86f72d3d3a42b1e0922453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3ERJG7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBDz3K0nGXblAmY2kDovHGRHFn5WfB4ES5zTk9pUYkZqAiBnQFzqV8dALG7WVtDJOzv7pV35FNcLZ29SyNiyebACeSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNdLeDVvMUSlKnbdxKtwDmv59omPywn1cIzno34ZkvS8bODiLfWWEhgTV8W06DjLEBXMLt5sfvS%2FcWxfemMEF8hDD8AR%2B0apYLY3w%2BcAbhjLHi%2FymSMKn%2FrPncU8YE3nnW1w080eiMY6QZF%2FQ0P84HqIa%2B9z20AJEu9Cnlijn1C4CtoQugwxansLnYKqdWN9fNJV75KzH12Ik5RbgD9Vq8AzMClvdOhMHYgD3vbnXcgVEBF1TtdQ7nFOLMvWbWbxm6rGQ0H5waY1Q8dXpIhYw8C5LfInn8i5aU1rOI0iyEKNAgJuw5r1kCp6YmHx17CTpSvFii65ILBYgxXVqnEg6TRyOCW50d2%2BApM5SxX3H6K8Qqcd9IH2WNn57liRDRatbX3Wrpk6cnm%2BjUl47KPBgQYg9FrC9%2Fs0iQcSI6OSSmKmgQw0cSmEAxyPjsZ%2BiqziPLV%2Bb%2FM6Q7TA%2FD6qUNUSDU7NnIxg%2FCiA%2F97rJ7%2FmOW%2Fby32RHMxyUeNR20kxyFxllLdkRuX8cPL%2BGLkE7%2BVfE91SI6U1U%2FTRj%2FFtqeEwl5J4Rw0BhLMMfEAPbHNe99e0DUOThiSAIee2AAM8BkHHfmFAsuH0Q6gfWIIGkybz4Y8vFN9vdQK6Et89p0szxGYY68HXNSPr7GvuGu5MwjdKexAY6pgG%2FD0X4y18Wh%2F3EQbMQu3tU%2FJtw2IRr%2B3aCNfTZ1fqQCu2G9Fr%2BB3IgIKyAOX%2BFtFQMi0%2FSBagtTwDHdqV31jlLwpYMgkbw4JkKWX64Xj7JQdLAV7kEUlfjFvSGHgXwNFSX99qJX1VfJeWfIEtDnK3fdGmgdfgQkjrg49b%2F8sLADGIJ4gHn4fJvFIZ0nM0T0ToPkf5njfuAKosWn4qIHvMXOG4xpySv&X-Amz-Signature=e3e526cb67c112693b0f61941de5674ea56903ccbce3ed2b8494e715aae1d5a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3ERJG7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBDz3K0nGXblAmY2kDovHGRHFn5WfB4ES5zTk9pUYkZqAiBnQFzqV8dALG7WVtDJOzv7pV35FNcLZ29SyNiyebACeSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNdLeDVvMUSlKnbdxKtwDmv59omPywn1cIzno34ZkvS8bODiLfWWEhgTV8W06DjLEBXMLt5sfvS%2FcWxfemMEF8hDD8AR%2B0apYLY3w%2BcAbhjLHi%2FymSMKn%2FrPncU8YE3nnW1w080eiMY6QZF%2FQ0P84HqIa%2B9z20AJEu9Cnlijn1C4CtoQugwxansLnYKqdWN9fNJV75KzH12Ik5RbgD9Vq8AzMClvdOhMHYgD3vbnXcgVEBF1TtdQ7nFOLMvWbWbxm6rGQ0H5waY1Q8dXpIhYw8C5LfInn8i5aU1rOI0iyEKNAgJuw5r1kCp6YmHx17CTpSvFii65ILBYgxXVqnEg6TRyOCW50d2%2BApM5SxX3H6K8Qqcd9IH2WNn57liRDRatbX3Wrpk6cnm%2BjUl47KPBgQYg9FrC9%2Fs0iQcSI6OSSmKmgQw0cSmEAxyPjsZ%2BiqziPLV%2Bb%2FM6Q7TA%2FD6qUNUSDU7NnIxg%2FCiA%2F97rJ7%2FmOW%2Fby32RHMxyUeNR20kxyFxllLdkRuX8cPL%2BGLkE7%2BVfE91SI6U1U%2FTRj%2FFtqeEwl5J4Rw0BhLMMfEAPbHNe99e0DUOThiSAIee2AAM8BkHHfmFAsuH0Q6gfWIIGkybz4Y8vFN9vdQK6Et89p0szxGYY68HXNSPr7GvuGu5MwjdKexAY6pgG%2FD0X4y18Wh%2F3EQbMQu3tU%2FJtw2IRr%2B3aCNfTZ1fqQCu2G9Fr%2BB3IgIKyAOX%2BFtFQMi0%2FSBagtTwDHdqV31jlLwpYMgkbw4JkKWX64Xj7JQdLAV7kEUlfjFvSGHgXwNFSX99qJX1VfJeWfIEtDnK3fdGmgdfgQkjrg49b%2F8sLADGIJ4gHn4fJvFIZ0nM0T0ToPkf5njfuAKosWn4qIHvMXOG4xpySv&X-Amz-Signature=25a18ab8040fa342241e8238389fbf01ce43ef635dfd6d75954dc155a0da2f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3ERJG7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBDz3K0nGXblAmY2kDovHGRHFn5WfB4ES5zTk9pUYkZqAiBnQFzqV8dALG7WVtDJOzv7pV35FNcLZ29SyNiyebACeSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNdLeDVvMUSlKnbdxKtwDmv59omPywn1cIzno34ZkvS8bODiLfWWEhgTV8W06DjLEBXMLt5sfvS%2FcWxfemMEF8hDD8AR%2B0apYLY3w%2BcAbhjLHi%2FymSMKn%2FrPncU8YE3nnW1w080eiMY6QZF%2FQ0P84HqIa%2B9z20AJEu9Cnlijn1C4CtoQugwxansLnYKqdWN9fNJV75KzH12Ik5RbgD9Vq8AzMClvdOhMHYgD3vbnXcgVEBF1TtdQ7nFOLMvWbWbxm6rGQ0H5waY1Q8dXpIhYw8C5LfInn8i5aU1rOI0iyEKNAgJuw5r1kCp6YmHx17CTpSvFii65ILBYgxXVqnEg6TRyOCW50d2%2BApM5SxX3H6K8Qqcd9IH2WNn57liRDRatbX3Wrpk6cnm%2BjUl47KPBgQYg9FrC9%2Fs0iQcSI6OSSmKmgQw0cSmEAxyPjsZ%2BiqziPLV%2Bb%2FM6Q7TA%2FD6qUNUSDU7NnIxg%2FCiA%2F97rJ7%2FmOW%2Fby32RHMxyUeNR20kxyFxllLdkRuX8cPL%2BGLkE7%2BVfE91SI6U1U%2FTRj%2FFtqeEwl5J4Rw0BhLMMfEAPbHNe99e0DUOThiSAIee2AAM8BkHHfmFAsuH0Q6gfWIIGkybz4Y8vFN9vdQK6Et89p0szxGYY68HXNSPr7GvuGu5MwjdKexAY6pgG%2FD0X4y18Wh%2F3EQbMQu3tU%2FJtw2IRr%2B3aCNfTZ1fqQCu2G9Fr%2BB3IgIKyAOX%2BFtFQMi0%2FSBagtTwDHdqV31jlLwpYMgkbw4JkKWX64Xj7JQdLAV7kEUlfjFvSGHgXwNFSX99qJX1VfJeWfIEtDnK3fdGmgdfgQkjrg49b%2F8sLADGIJ4gHn4fJvFIZ0nM0T0ToPkf5njfuAKosWn4qIHvMXOG4xpySv&X-Amz-Signature=54639bd751334c938048d212ff18002a04e8c0eaad31917c393f8fb05447b9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3ERJG7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBDz3K0nGXblAmY2kDovHGRHFn5WfB4ES5zTk9pUYkZqAiBnQFzqV8dALG7WVtDJOzv7pV35FNcLZ29SyNiyebACeSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNdLeDVvMUSlKnbdxKtwDmv59omPywn1cIzno34ZkvS8bODiLfWWEhgTV8W06DjLEBXMLt5sfvS%2FcWxfemMEF8hDD8AR%2B0apYLY3w%2BcAbhjLHi%2FymSMKn%2FrPncU8YE3nnW1w080eiMY6QZF%2FQ0P84HqIa%2B9z20AJEu9Cnlijn1C4CtoQugwxansLnYKqdWN9fNJV75KzH12Ik5RbgD9Vq8AzMClvdOhMHYgD3vbnXcgVEBF1TtdQ7nFOLMvWbWbxm6rGQ0H5waY1Q8dXpIhYw8C5LfInn8i5aU1rOI0iyEKNAgJuw5r1kCp6YmHx17CTpSvFii65ILBYgxXVqnEg6TRyOCW50d2%2BApM5SxX3H6K8Qqcd9IH2WNn57liRDRatbX3Wrpk6cnm%2BjUl47KPBgQYg9FrC9%2Fs0iQcSI6OSSmKmgQw0cSmEAxyPjsZ%2BiqziPLV%2Bb%2FM6Q7TA%2FD6qUNUSDU7NnIxg%2FCiA%2F97rJ7%2FmOW%2Fby32RHMxyUeNR20kxyFxllLdkRuX8cPL%2BGLkE7%2BVfE91SI6U1U%2FTRj%2FFtqeEwl5J4Rw0BhLMMfEAPbHNe99e0DUOThiSAIee2AAM8BkHHfmFAsuH0Q6gfWIIGkybz4Y8vFN9vdQK6Et89p0szxGYY68HXNSPr7GvuGu5MwjdKexAY6pgG%2FD0X4y18Wh%2F3EQbMQu3tU%2FJtw2IRr%2B3aCNfTZ1fqQCu2G9Fr%2BB3IgIKyAOX%2BFtFQMi0%2FSBagtTwDHdqV31jlLwpYMgkbw4JkKWX64Xj7JQdLAV7kEUlfjFvSGHgXwNFSX99qJX1VfJeWfIEtDnK3fdGmgdfgQkjrg49b%2F8sLADGIJ4gHn4fJvFIZ0nM0T0ToPkf5njfuAKosWn4qIHvMXOG4xpySv&X-Amz-Signature=9e6c9d3619fd8e422cd6bef6064a1cb31ec0a245ff5b35cf6f06ae44bc412706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3ERJG7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBDz3K0nGXblAmY2kDovHGRHFn5WfB4ES5zTk9pUYkZqAiBnQFzqV8dALG7WVtDJOzv7pV35FNcLZ29SyNiyebACeSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNdLeDVvMUSlKnbdxKtwDmv59omPywn1cIzno34ZkvS8bODiLfWWEhgTV8W06DjLEBXMLt5sfvS%2FcWxfemMEF8hDD8AR%2B0apYLY3w%2BcAbhjLHi%2FymSMKn%2FrPncU8YE3nnW1w080eiMY6QZF%2FQ0P84HqIa%2B9z20AJEu9Cnlijn1C4CtoQugwxansLnYKqdWN9fNJV75KzH12Ik5RbgD9Vq8AzMClvdOhMHYgD3vbnXcgVEBF1TtdQ7nFOLMvWbWbxm6rGQ0H5waY1Q8dXpIhYw8C5LfInn8i5aU1rOI0iyEKNAgJuw5r1kCp6YmHx17CTpSvFii65ILBYgxXVqnEg6TRyOCW50d2%2BApM5SxX3H6K8Qqcd9IH2WNn57liRDRatbX3Wrpk6cnm%2BjUl47KPBgQYg9FrC9%2Fs0iQcSI6OSSmKmgQw0cSmEAxyPjsZ%2BiqziPLV%2Bb%2FM6Q7TA%2FD6qUNUSDU7NnIxg%2FCiA%2F97rJ7%2FmOW%2Fby32RHMxyUeNR20kxyFxllLdkRuX8cPL%2BGLkE7%2BVfE91SI6U1U%2FTRj%2FFtqeEwl5J4Rw0BhLMMfEAPbHNe99e0DUOThiSAIee2AAM8BkHHfmFAsuH0Q6gfWIIGkybz4Y8vFN9vdQK6Et89p0szxGYY68HXNSPr7GvuGu5MwjdKexAY6pgG%2FD0X4y18Wh%2F3EQbMQu3tU%2FJtw2IRr%2B3aCNfTZ1fqQCu2G9Fr%2BB3IgIKyAOX%2BFtFQMi0%2FSBagtTwDHdqV31jlLwpYMgkbw4JkKWX64Xj7JQdLAV7kEUlfjFvSGHgXwNFSX99qJX1VfJeWfIEtDnK3fdGmgdfgQkjrg49b%2F8sLADGIJ4gHn4fJvFIZ0nM0T0ToPkf5njfuAKosWn4qIHvMXOG4xpySv&X-Amz-Signature=bad012f2ccc161a471280c8eea2d83a53d710191e8fccb0144207343fdcf9785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3ERJG7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBDz3K0nGXblAmY2kDovHGRHFn5WfB4ES5zTk9pUYkZqAiBnQFzqV8dALG7WVtDJOzv7pV35FNcLZ29SyNiyebACeSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNdLeDVvMUSlKnbdxKtwDmv59omPywn1cIzno34ZkvS8bODiLfWWEhgTV8W06DjLEBXMLt5sfvS%2FcWxfemMEF8hDD8AR%2B0apYLY3w%2BcAbhjLHi%2FymSMKn%2FrPncU8YE3nnW1w080eiMY6QZF%2FQ0P84HqIa%2B9z20AJEu9Cnlijn1C4CtoQugwxansLnYKqdWN9fNJV75KzH12Ik5RbgD9Vq8AzMClvdOhMHYgD3vbnXcgVEBF1TtdQ7nFOLMvWbWbxm6rGQ0H5waY1Q8dXpIhYw8C5LfInn8i5aU1rOI0iyEKNAgJuw5r1kCp6YmHx17CTpSvFii65ILBYgxXVqnEg6TRyOCW50d2%2BApM5SxX3H6K8Qqcd9IH2WNn57liRDRatbX3Wrpk6cnm%2BjUl47KPBgQYg9FrC9%2Fs0iQcSI6OSSmKmgQw0cSmEAxyPjsZ%2BiqziPLV%2Bb%2FM6Q7TA%2FD6qUNUSDU7NnIxg%2FCiA%2F97rJ7%2FmOW%2Fby32RHMxyUeNR20kxyFxllLdkRuX8cPL%2BGLkE7%2BVfE91SI6U1U%2FTRj%2FFtqeEwl5J4Rw0BhLMMfEAPbHNe99e0DUOThiSAIee2AAM8BkHHfmFAsuH0Q6gfWIIGkybz4Y8vFN9vdQK6Et89p0szxGYY68HXNSPr7GvuGu5MwjdKexAY6pgG%2FD0X4y18Wh%2F3EQbMQu3tU%2FJtw2IRr%2B3aCNfTZ1fqQCu2G9Fr%2BB3IgIKyAOX%2BFtFQMi0%2FSBagtTwDHdqV31jlLwpYMgkbw4JkKWX64Xj7JQdLAV7kEUlfjFvSGHgXwNFSX99qJX1VfJeWfIEtDnK3fdGmgdfgQkjrg49b%2F8sLADGIJ4gHn4fJvFIZ0nM0T0ToPkf5njfuAKosWn4qIHvMXOG4xpySv&X-Amz-Signature=674c7a03de5d0f4e7c6c8c059a6b7d63aec3f0dc0c327f63f129239419df375f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR3ERJG7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIBDz3K0nGXblAmY2kDovHGRHFn5WfB4ES5zTk9pUYkZqAiBnQFzqV8dALG7WVtDJOzv7pV35FNcLZ29SyNiyebACeSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNdLeDVvMUSlKnbdxKtwDmv59omPywn1cIzno34ZkvS8bODiLfWWEhgTV8W06DjLEBXMLt5sfvS%2FcWxfemMEF8hDD8AR%2B0apYLY3w%2BcAbhjLHi%2FymSMKn%2FrPncU8YE3nnW1w080eiMY6QZF%2FQ0P84HqIa%2B9z20AJEu9Cnlijn1C4CtoQugwxansLnYKqdWN9fNJV75KzH12Ik5RbgD9Vq8AzMClvdOhMHYgD3vbnXcgVEBF1TtdQ7nFOLMvWbWbxm6rGQ0H5waY1Q8dXpIhYw8C5LfInn8i5aU1rOI0iyEKNAgJuw5r1kCp6YmHx17CTpSvFii65ILBYgxXVqnEg6TRyOCW50d2%2BApM5SxX3H6K8Qqcd9IH2WNn57liRDRatbX3Wrpk6cnm%2BjUl47KPBgQYg9FrC9%2Fs0iQcSI6OSSmKmgQw0cSmEAxyPjsZ%2BiqziPLV%2Bb%2FM6Q7TA%2FD6qUNUSDU7NnIxg%2FCiA%2F97rJ7%2FmOW%2Fby32RHMxyUeNR20kxyFxllLdkRuX8cPL%2BGLkE7%2BVfE91SI6U1U%2FTRj%2FFtqeEwl5J4Rw0BhLMMfEAPbHNe99e0DUOThiSAIee2AAM8BkHHfmFAsuH0Q6gfWIIGkybz4Y8vFN9vdQK6Et89p0szxGYY68HXNSPr7GvuGu5MwjdKexAY6pgG%2FD0X4y18Wh%2F3EQbMQu3tU%2FJtw2IRr%2B3aCNfTZ1fqQCu2G9Fr%2BB3IgIKyAOX%2BFtFQMi0%2FSBagtTwDHdqV31jlLwpYMgkbw4JkKWX64Xj7JQdLAV7kEUlfjFvSGHgXwNFSX99qJX1VfJeWfIEtDnK3fdGmgdfgQkjrg49b%2F8sLADGIJ4gHn4fJvFIZ0nM0T0ToPkf5njfuAKosWn4qIHvMXOG4xpySv&X-Amz-Signature=f4ca37c3adbbf7c6c336b4f3b10735c17873faef277951f30cd04cfc1b6d5f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
