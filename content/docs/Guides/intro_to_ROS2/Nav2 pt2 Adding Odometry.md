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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHLDF4S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXf0IkUSPo%2BRBbX66hAMf9wmjBcHzckfYynC7XHuxFgIhAOwx6f67Ex0%2FcXhwJrzVUobnyrg9HeivNrBTMCaty9FsKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dkSDUPDafp%2FeHpIq3APLFttjQJPw8L4RFzFgsnfZRVgBVYkYB%2FZ8JHTMz39kpqBqOgY4tXvB7MFxAwd%2FMQ2vl6n%2BUsahVco6VNyZDsZ6GQyOZ0J3QloTNABLmSfTIp0YETvvYCw5cjHsP%2FfqcoiuguxhpiE3LQLQ43F%2BrDpe5JIPtS5WoIDXG%2B4leSlhCKD%2BDJrMM6A%2FjVqziT%2BKBo1ikjVnH7EIiPDDOFDz8CdUFCn59TVd45do9spLTy4iKh1jpCwlRukTmETkyTYPX%2BdscxBTZzJPlrwty%2F%2FPq0pd4tz1Sau6p%2BAgqo%2BL5TiAd94BqELRb8%2BPi2JIL%2BfYNPlqT7tr3qCwywfbxaKiK1ooC0YB2e8WY4WUBk53Ip%2FCCt9EqoccTP1gdD0%2FgSmvWl4epBAXaoWBctaBNFnejX0uL%2BIXSnI7O8iQ4kqH1SHFmOafuxIR7wYO90NDXH4qzWgHCKLPr%2F%2BMQgPBjvN9dEidr8hwGmKONaM0f76vqmqJG64Kkt%2FxA5mrjnd38DwMAPIxU2l%2BHUJ2nw1L7z3%2BTZ0xy6nJZaO2tPd01H2qIVRR2E%2BMjq7hcAMgdfynp6KqGJV87OjGpjAoOhVXXaXunCbLaj7DCbAjo9ODaUUBsGguN%2BptPBQQ3Pgtda%2F%2BczCCo6jEBjqkAY%2FQv%2F5hpPI2CznKAQ%2BykZWP7zNnSHX1oLR6jSiri85a%2FxKgUhew5Nfr7bE2dilbX7EDFtU12%2F3MO4oX6d4KOKaAu%2BIeMFMChSY20yGY5k%2FuWPXpX7J%2BxLToxn9AgqNbOxUBt12cZ%2B2%2BxLIr9Ayi8N6n3pUVKtEfeLKNZTlnrKPEJNoGqMwd9bCKi3d5hVbkQJDDXmStP%2F45FEKv8A8kNGKnyFk4&X-Amz-Signature=7dd884e320b5a913f83d8131346ebf5770ff695bbdcf9424bee9e605d3a5023a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHLDF4S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXf0IkUSPo%2BRBbX66hAMf9wmjBcHzckfYynC7XHuxFgIhAOwx6f67Ex0%2FcXhwJrzVUobnyrg9HeivNrBTMCaty9FsKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dkSDUPDafp%2FeHpIq3APLFttjQJPw8L4RFzFgsnfZRVgBVYkYB%2FZ8JHTMz39kpqBqOgY4tXvB7MFxAwd%2FMQ2vl6n%2BUsahVco6VNyZDsZ6GQyOZ0J3QloTNABLmSfTIp0YETvvYCw5cjHsP%2FfqcoiuguxhpiE3LQLQ43F%2BrDpe5JIPtS5WoIDXG%2B4leSlhCKD%2BDJrMM6A%2FjVqziT%2BKBo1ikjVnH7EIiPDDOFDz8CdUFCn59TVd45do9spLTy4iKh1jpCwlRukTmETkyTYPX%2BdscxBTZzJPlrwty%2F%2FPq0pd4tz1Sau6p%2BAgqo%2BL5TiAd94BqELRb8%2BPi2JIL%2BfYNPlqT7tr3qCwywfbxaKiK1ooC0YB2e8WY4WUBk53Ip%2FCCt9EqoccTP1gdD0%2FgSmvWl4epBAXaoWBctaBNFnejX0uL%2BIXSnI7O8iQ4kqH1SHFmOafuxIR7wYO90NDXH4qzWgHCKLPr%2F%2BMQgPBjvN9dEidr8hwGmKONaM0f76vqmqJG64Kkt%2FxA5mrjnd38DwMAPIxU2l%2BHUJ2nw1L7z3%2BTZ0xy6nJZaO2tPd01H2qIVRR2E%2BMjq7hcAMgdfynp6KqGJV87OjGpjAoOhVXXaXunCbLaj7DCbAjo9ODaUUBsGguN%2BptPBQQ3Pgtda%2F%2BczCCo6jEBjqkAY%2FQv%2F5hpPI2CznKAQ%2BykZWP7zNnSHX1oLR6jSiri85a%2FxKgUhew5Nfr7bE2dilbX7EDFtU12%2F3MO4oX6d4KOKaAu%2BIeMFMChSY20yGY5k%2FuWPXpX7J%2BxLToxn9AgqNbOxUBt12cZ%2B2%2BxLIr9Ayi8N6n3pUVKtEfeLKNZTlnrKPEJNoGqMwd9bCKi3d5hVbkQJDDXmStP%2F45FEKv8A8kNGKnyFk4&X-Amz-Signature=f920767c8fdb1831b95f0dde48491621289d07aa1498115240f7623d51849130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHLDF4S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXf0IkUSPo%2BRBbX66hAMf9wmjBcHzckfYynC7XHuxFgIhAOwx6f67Ex0%2FcXhwJrzVUobnyrg9HeivNrBTMCaty9FsKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dkSDUPDafp%2FeHpIq3APLFttjQJPw8L4RFzFgsnfZRVgBVYkYB%2FZ8JHTMz39kpqBqOgY4tXvB7MFxAwd%2FMQ2vl6n%2BUsahVco6VNyZDsZ6GQyOZ0J3QloTNABLmSfTIp0YETvvYCw5cjHsP%2FfqcoiuguxhpiE3LQLQ43F%2BrDpe5JIPtS5WoIDXG%2B4leSlhCKD%2BDJrMM6A%2FjVqziT%2BKBo1ikjVnH7EIiPDDOFDz8CdUFCn59TVd45do9spLTy4iKh1jpCwlRukTmETkyTYPX%2BdscxBTZzJPlrwty%2F%2FPq0pd4tz1Sau6p%2BAgqo%2BL5TiAd94BqELRb8%2BPi2JIL%2BfYNPlqT7tr3qCwywfbxaKiK1ooC0YB2e8WY4WUBk53Ip%2FCCt9EqoccTP1gdD0%2FgSmvWl4epBAXaoWBctaBNFnejX0uL%2BIXSnI7O8iQ4kqH1SHFmOafuxIR7wYO90NDXH4qzWgHCKLPr%2F%2BMQgPBjvN9dEidr8hwGmKONaM0f76vqmqJG64Kkt%2FxA5mrjnd38DwMAPIxU2l%2BHUJ2nw1L7z3%2BTZ0xy6nJZaO2tPd01H2qIVRR2E%2BMjq7hcAMgdfynp6KqGJV87OjGpjAoOhVXXaXunCbLaj7DCbAjo9ODaUUBsGguN%2BptPBQQ3Pgtda%2F%2BczCCo6jEBjqkAY%2FQv%2F5hpPI2CznKAQ%2BykZWP7zNnSHX1oLR6jSiri85a%2FxKgUhew5Nfr7bE2dilbX7EDFtU12%2F3MO4oX6d4KOKaAu%2BIeMFMChSY20yGY5k%2FuWPXpX7J%2BxLToxn9AgqNbOxUBt12cZ%2B2%2BxLIr9Ayi8N6n3pUVKtEfeLKNZTlnrKPEJNoGqMwd9bCKi3d5hVbkQJDDXmStP%2F45FEKv8A8kNGKnyFk4&X-Amz-Signature=57bc56eaf03e40ed21d209b08aa18d991ee283ff52e6bc1875626080e142f31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHLDF4S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXf0IkUSPo%2BRBbX66hAMf9wmjBcHzckfYynC7XHuxFgIhAOwx6f67Ex0%2FcXhwJrzVUobnyrg9HeivNrBTMCaty9FsKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dkSDUPDafp%2FeHpIq3APLFttjQJPw8L4RFzFgsnfZRVgBVYkYB%2FZ8JHTMz39kpqBqOgY4tXvB7MFxAwd%2FMQ2vl6n%2BUsahVco6VNyZDsZ6GQyOZ0J3QloTNABLmSfTIp0YETvvYCw5cjHsP%2FfqcoiuguxhpiE3LQLQ43F%2BrDpe5JIPtS5WoIDXG%2B4leSlhCKD%2BDJrMM6A%2FjVqziT%2BKBo1ikjVnH7EIiPDDOFDz8CdUFCn59TVd45do9spLTy4iKh1jpCwlRukTmETkyTYPX%2BdscxBTZzJPlrwty%2F%2FPq0pd4tz1Sau6p%2BAgqo%2BL5TiAd94BqELRb8%2BPi2JIL%2BfYNPlqT7tr3qCwywfbxaKiK1ooC0YB2e8WY4WUBk53Ip%2FCCt9EqoccTP1gdD0%2FgSmvWl4epBAXaoWBctaBNFnejX0uL%2BIXSnI7O8iQ4kqH1SHFmOafuxIR7wYO90NDXH4qzWgHCKLPr%2F%2BMQgPBjvN9dEidr8hwGmKONaM0f76vqmqJG64Kkt%2FxA5mrjnd38DwMAPIxU2l%2BHUJ2nw1L7z3%2BTZ0xy6nJZaO2tPd01H2qIVRR2E%2BMjq7hcAMgdfynp6KqGJV87OjGpjAoOhVXXaXunCbLaj7DCbAjo9ODaUUBsGguN%2BptPBQQ3Pgtda%2F%2BczCCo6jEBjqkAY%2FQv%2F5hpPI2CznKAQ%2BykZWP7zNnSHX1oLR6jSiri85a%2FxKgUhew5Nfr7bE2dilbX7EDFtU12%2F3MO4oX6d4KOKaAu%2BIeMFMChSY20yGY5k%2FuWPXpX7J%2BxLToxn9AgqNbOxUBt12cZ%2B2%2BxLIr9Ayi8N6n3pUVKtEfeLKNZTlnrKPEJNoGqMwd9bCKi3d5hVbkQJDDXmStP%2F45FEKv8A8kNGKnyFk4&X-Amz-Signature=7dd7b5952a6ac438f52a6bd3bfea0f5f89c696453e3a60443afa3739fc9f5a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHLDF4S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXf0IkUSPo%2BRBbX66hAMf9wmjBcHzckfYynC7XHuxFgIhAOwx6f67Ex0%2FcXhwJrzVUobnyrg9HeivNrBTMCaty9FsKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dkSDUPDafp%2FeHpIq3APLFttjQJPw8L4RFzFgsnfZRVgBVYkYB%2FZ8JHTMz39kpqBqOgY4tXvB7MFxAwd%2FMQ2vl6n%2BUsahVco6VNyZDsZ6GQyOZ0J3QloTNABLmSfTIp0YETvvYCw5cjHsP%2FfqcoiuguxhpiE3LQLQ43F%2BrDpe5JIPtS5WoIDXG%2B4leSlhCKD%2BDJrMM6A%2FjVqziT%2BKBo1ikjVnH7EIiPDDOFDz8CdUFCn59TVd45do9spLTy4iKh1jpCwlRukTmETkyTYPX%2BdscxBTZzJPlrwty%2F%2FPq0pd4tz1Sau6p%2BAgqo%2BL5TiAd94BqELRb8%2BPi2JIL%2BfYNPlqT7tr3qCwywfbxaKiK1ooC0YB2e8WY4WUBk53Ip%2FCCt9EqoccTP1gdD0%2FgSmvWl4epBAXaoWBctaBNFnejX0uL%2BIXSnI7O8iQ4kqH1SHFmOafuxIR7wYO90NDXH4qzWgHCKLPr%2F%2BMQgPBjvN9dEidr8hwGmKONaM0f76vqmqJG64Kkt%2FxA5mrjnd38DwMAPIxU2l%2BHUJ2nw1L7z3%2BTZ0xy6nJZaO2tPd01H2qIVRR2E%2BMjq7hcAMgdfynp6KqGJV87OjGpjAoOhVXXaXunCbLaj7DCbAjo9ODaUUBsGguN%2BptPBQQ3Pgtda%2F%2BczCCo6jEBjqkAY%2FQv%2F5hpPI2CznKAQ%2BykZWP7zNnSHX1oLR6jSiri85a%2FxKgUhew5Nfr7bE2dilbX7EDFtU12%2F3MO4oX6d4KOKaAu%2BIeMFMChSY20yGY5k%2FuWPXpX7J%2BxLToxn9AgqNbOxUBt12cZ%2B2%2BxLIr9Ayi8N6n3pUVKtEfeLKNZTlnrKPEJNoGqMwd9bCKi3d5hVbkQJDDXmStP%2F45FEKv8A8kNGKnyFk4&X-Amz-Signature=27b86066c25da4fa4217370202ba85ea02254ba4a1cd76c532d597b496b9a9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHLDF4S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXf0IkUSPo%2BRBbX66hAMf9wmjBcHzckfYynC7XHuxFgIhAOwx6f67Ex0%2FcXhwJrzVUobnyrg9HeivNrBTMCaty9FsKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dkSDUPDafp%2FeHpIq3APLFttjQJPw8L4RFzFgsnfZRVgBVYkYB%2FZ8JHTMz39kpqBqOgY4tXvB7MFxAwd%2FMQ2vl6n%2BUsahVco6VNyZDsZ6GQyOZ0J3QloTNABLmSfTIp0YETvvYCw5cjHsP%2FfqcoiuguxhpiE3LQLQ43F%2BrDpe5JIPtS5WoIDXG%2B4leSlhCKD%2BDJrMM6A%2FjVqziT%2BKBo1ikjVnH7EIiPDDOFDz8CdUFCn59TVd45do9spLTy4iKh1jpCwlRukTmETkyTYPX%2BdscxBTZzJPlrwty%2F%2FPq0pd4tz1Sau6p%2BAgqo%2BL5TiAd94BqELRb8%2BPi2JIL%2BfYNPlqT7tr3qCwywfbxaKiK1ooC0YB2e8WY4WUBk53Ip%2FCCt9EqoccTP1gdD0%2FgSmvWl4epBAXaoWBctaBNFnejX0uL%2BIXSnI7O8iQ4kqH1SHFmOafuxIR7wYO90NDXH4qzWgHCKLPr%2F%2BMQgPBjvN9dEidr8hwGmKONaM0f76vqmqJG64Kkt%2FxA5mrjnd38DwMAPIxU2l%2BHUJ2nw1L7z3%2BTZ0xy6nJZaO2tPd01H2qIVRR2E%2BMjq7hcAMgdfynp6KqGJV87OjGpjAoOhVXXaXunCbLaj7DCbAjo9ODaUUBsGguN%2BptPBQQ3Pgtda%2F%2BczCCo6jEBjqkAY%2FQv%2F5hpPI2CznKAQ%2BykZWP7zNnSHX1oLR6jSiri85a%2FxKgUhew5Nfr7bE2dilbX7EDFtU12%2F3MO4oX6d4KOKaAu%2BIeMFMChSY20yGY5k%2FuWPXpX7J%2BxLToxn9AgqNbOxUBt12cZ%2B2%2BxLIr9Ayi8N6n3pUVKtEfeLKNZTlnrKPEJNoGqMwd9bCKi3d5hVbkQJDDXmStP%2F45FEKv8A8kNGKnyFk4&X-Amz-Signature=0166cd1ca700c4482d6d5c787862bf470c5f51a5ccc41441ebe817493da257b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHLDF4S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXf0IkUSPo%2BRBbX66hAMf9wmjBcHzckfYynC7XHuxFgIhAOwx6f67Ex0%2FcXhwJrzVUobnyrg9HeivNrBTMCaty9FsKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dkSDUPDafp%2FeHpIq3APLFttjQJPw8L4RFzFgsnfZRVgBVYkYB%2FZ8JHTMz39kpqBqOgY4tXvB7MFxAwd%2FMQ2vl6n%2BUsahVco6VNyZDsZ6GQyOZ0J3QloTNABLmSfTIp0YETvvYCw5cjHsP%2FfqcoiuguxhpiE3LQLQ43F%2BrDpe5JIPtS5WoIDXG%2B4leSlhCKD%2BDJrMM6A%2FjVqziT%2BKBo1ikjVnH7EIiPDDOFDz8CdUFCn59TVd45do9spLTy4iKh1jpCwlRukTmETkyTYPX%2BdscxBTZzJPlrwty%2F%2FPq0pd4tz1Sau6p%2BAgqo%2BL5TiAd94BqELRb8%2BPi2JIL%2BfYNPlqT7tr3qCwywfbxaKiK1ooC0YB2e8WY4WUBk53Ip%2FCCt9EqoccTP1gdD0%2FgSmvWl4epBAXaoWBctaBNFnejX0uL%2BIXSnI7O8iQ4kqH1SHFmOafuxIR7wYO90NDXH4qzWgHCKLPr%2F%2BMQgPBjvN9dEidr8hwGmKONaM0f76vqmqJG64Kkt%2FxA5mrjnd38DwMAPIxU2l%2BHUJ2nw1L7z3%2BTZ0xy6nJZaO2tPd01H2qIVRR2E%2BMjq7hcAMgdfynp6KqGJV87OjGpjAoOhVXXaXunCbLaj7DCbAjo9ODaUUBsGguN%2BptPBQQ3Pgtda%2F%2BczCCo6jEBjqkAY%2FQv%2F5hpPI2CznKAQ%2BykZWP7zNnSHX1oLR6jSiri85a%2FxKgUhew5Nfr7bE2dilbX7EDFtU12%2F3MO4oX6d4KOKaAu%2BIeMFMChSY20yGY5k%2FuWPXpX7J%2BxLToxn9AgqNbOxUBt12cZ%2B2%2BxLIr9Ayi8N6n3pUVKtEfeLKNZTlnrKPEJNoGqMwd9bCKi3d5hVbkQJDDXmStP%2F45FEKv8A8kNGKnyFk4&X-Amz-Signature=f3de5d01b4bc46e427628f9d98a8ce45e5234125b7943813ab76f5b6540bde30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHLDF4S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXf0IkUSPo%2BRBbX66hAMf9wmjBcHzckfYynC7XHuxFgIhAOwx6f67Ex0%2FcXhwJrzVUobnyrg9HeivNrBTMCaty9FsKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dkSDUPDafp%2FeHpIq3APLFttjQJPw8L4RFzFgsnfZRVgBVYkYB%2FZ8JHTMz39kpqBqOgY4tXvB7MFxAwd%2FMQ2vl6n%2BUsahVco6VNyZDsZ6GQyOZ0J3QloTNABLmSfTIp0YETvvYCw5cjHsP%2FfqcoiuguxhpiE3LQLQ43F%2BrDpe5JIPtS5WoIDXG%2B4leSlhCKD%2BDJrMM6A%2FjVqziT%2BKBo1ikjVnH7EIiPDDOFDz8CdUFCn59TVd45do9spLTy4iKh1jpCwlRukTmETkyTYPX%2BdscxBTZzJPlrwty%2F%2FPq0pd4tz1Sau6p%2BAgqo%2BL5TiAd94BqELRb8%2BPi2JIL%2BfYNPlqT7tr3qCwywfbxaKiK1ooC0YB2e8WY4WUBk53Ip%2FCCt9EqoccTP1gdD0%2FgSmvWl4epBAXaoWBctaBNFnejX0uL%2BIXSnI7O8iQ4kqH1SHFmOafuxIR7wYO90NDXH4qzWgHCKLPr%2F%2BMQgPBjvN9dEidr8hwGmKONaM0f76vqmqJG64Kkt%2FxA5mrjnd38DwMAPIxU2l%2BHUJ2nw1L7z3%2BTZ0xy6nJZaO2tPd01H2qIVRR2E%2BMjq7hcAMgdfynp6KqGJV87OjGpjAoOhVXXaXunCbLaj7DCbAjo9ODaUUBsGguN%2BptPBQQ3Pgtda%2F%2BczCCo6jEBjqkAY%2FQv%2F5hpPI2CznKAQ%2BykZWP7zNnSHX1oLR6jSiri85a%2FxKgUhew5Nfr7bE2dilbX7EDFtU12%2F3MO4oX6d4KOKaAu%2BIeMFMChSY20yGY5k%2FuWPXpX7J%2BxLToxn9AgqNbOxUBt12cZ%2B2%2BxLIr9Ayi8N6n3pUVKtEfeLKNZTlnrKPEJNoGqMwd9bCKi3d5hVbkQJDDXmStP%2F45FEKv8A8kNGKnyFk4&X-Amz-Signature=afad94cc7199d4d3540203a7000d3c82190fb6c6e938a5e27499c8a9c59d104a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHLDF4S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXf0IkUSPo%2BRBbX66hAMf9wmjBcHzckfYynC7XHuxFgIhAOwx6f67Ex0%2FcXhwJrzVUobnyrg9HeivNrBTMCaty9FsKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dkSDUPDafp%2FeHpIq3APLFttjQJPw8L4RFzFgsnfZRVgBVYkYB%2FZ8JHTMz39kpqBqOgY4tXvB7MFxAwd%2FMQ2vl6n%2BUsahVco6VNyZDsZ6GQyOZ0J3QloTNABLmSfTIp0YETvvYCw5cjHsP%2FfqcoiuguxhpiE3LQLQ43F%2BrDpe5JIPtS5WoIDXG%2B4leSlhCKD%2BDJrMM6A%2FjVqziT%2BKBo1ikjVnH7EIiPDDOFDz8CdUFCn59TVd45do9spLTy4iKh1jpCwlRukTmETkyTYPX%2BdscxBTZzJPlrwty%2F%2FPq0pd4tz1Sau6p%2BAgqo%2BL5TiAd94BqELRb8%2BPi2JIL%2BfYNPlqT7tr3qCwywfbxaKiK1ooC0YB2e8WY4WUBk53Ip%2FCCt9EqoccTP1gdD0%2FgSmvWl4epBAXaoWBctaBNFnejX0uL%2BIXSnI7O8iQ4kqH1SHFmOafuxIR7wYO90NDXH4qzWgHCKLPr%2F%2BMQgPBjvN9dEidr8hwGmKONaM0f76vqmqJG64Kkt%2FxA5mrjnd38DwMAPIxU2l%2BHUJ2nw1L7z3%2BTZ0xy6nJZaO2tPd01H2qIVRR2E%2BMjq7hcAMgdfynp6KqGJV87OjGpjAoOhVXXaXunCbLaj7DCbAjo9ODaUUBsGguN%2BptPBQQ3Pgtda%2F%2BczCCo6jEBjqkAY%2FQv%2F5hpPI2CznKAQ%2BykZWP7zNnSHX1oLR6jSiri85a%2FxKgUhew5Nfr7bE2dilbX7EDFtU12%2F3MO4oX6d4KOKaAu%2BIeMFMChSY20yGY5k%2FuWPXpX7J%2BxLToxn9AgqNbOxUBt12cZ%2B2%2BxLIr9Ayi8N6n3pUVKtEfeLKNZTlnrKPEJNoGqMwd9bCKi3d5hVbkQJDDXmStP%2F45FEKv8A8kNGKnyFk4&X-Amz-Signature=76c2966db12a50ca7c46062ff7763ac3d7d7a5897976cabfa5c05c60a3a7031b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFVNF3FV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCluwIwYo1p2%2BKyybg0IEQpiedn8M%2FEt1ty%2BiL%2F9%2BRj3gIgUj8KGsJWN6dx1C7FKc2t26Mg2OdC5DUwmoIGMK4KiLkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJg58RsBsxzg4HwCKircA7JkEGz6jM6GwVTUsRj0XDt3w7Jl5LzWEOTVP4%2FSeldJ07nAJxX9uUb1cqIbvv2jRUQYeSI8jQIXIByROeTJYt1%2BKdPzdJ92OsivVAipeGSv9ay%2FlTFHL3he1ziCrICFDuQMBMINxus2L2HJQDZepv6ZB43BdyYsMKwltVXaLXF7SuW9zxxKq0CwuyX38r3dHBMEzikysE5iQEmOtAXc%2B5FnCSOCKVRcJ2V8sgrKt%2B60BUOK%2BmfJwRHSV9DoiFhO8HG0U%2BJ6ZJUGSXbQqQfnjJWnFr62e%2BQB1g66gq8gRXIoJdYcBo5svSuZABlSG84FTA9Y8IWp1Z9UWEkfjl%2FJiH3pr1g%2BCr%2FE5QJfGuYNttk6H0wzrwS4DhoT22MZbx1L4frA97ADi%2BtJzcQL0p9qOhRBCqjsqiuQNDrGY%2FvzjZ4PYMR19ueEUqDEN%2FRxQd6mDo1oIEF4o%2BIIa23ucrD7gLX1ep2eBsfE6IP00gPkiVCTm%2FFBYXvSONpxeDd4ndr4JfByA9T3n5pgklMOZs%2F%2FqDLMM1fIKMtGf0MlKyEr%2FIVFzlGGnwTKw4K11xNDbcyk9BKwSjMJ1Q8sbb43aIa5edWxNqidI9Ab4Ykq7r%2F5hgw1jXBWyyOQWgVgJOBWMJ2iqMQGOqUBxXVXzYbfitLjQ6wfSLUnjERzLG7EeEpdO0X9skD0g6R79YOm3SvyZkTUAq5bDE5nRdZZgAzCxkcGw3CLHtLAhP5DqQL2RsxACUvty2bCNSN%2Fq8yYgOfdOUKDq6VLpjZFHV8ppnWHDkirpvuHMWpSPkvhnfjH0UP%2BuH%2FZ906jxGh50iUcLEKpLFkTlBsjnk1TpMBDDNqvSvuH3sYGtJGMon2Ifz4I&X-Amz-Signature=bb97fea3dd4aef6f1aaad2f4c8cbc5439b5dbb57f0c7caf99603b765863898c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IHLDF4S%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXf0IkUSPo%2BRBbX66hAMf9wmjBcHzckfYynC7XHuxFgIhAOwx6f67Ex0%2FcXhwJrzVUobnyrg9HeivNrBTMCaty9FsKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3dkSDUPDafp%2FeHpIq3APLFttjQJPw8L4RFzFgsnfZRVgBVYkYB%2FZ8JHTMz39kpqBqOgY4tXvB7MFxAwd%2FMQ2vl6n%2BUsahVco6VNyZDsZ6GQyOZ0J3QloTNABLmSfTIp0YETvvYCw5cjHsP%2FfqcoiuguxhpiE3LQLQ43F%2BrDpe5JIPtS5WoIDXG%2B4leSlhCKD%2BDJrMM6A%2FjVqziT%2BKBo1ikjVnH7EIiPDDOFDz8CdUFCn59TVd45do9spLTy4iKh1jpCwlRukTmETkyTYPX%2BdscxBTZzJPlrwty%2F%2FPq0pd4tz1Sau6p%2BAgqo%2BL5TiAd94BqELRb8%2BPi2JIL%2BfYNPlqT7tr3qCwywfbxaKiK1ooC0YB2e8WY4WUBk53Ip%2FCCt9EqoccTP1gdD0%2FgSmvWl4epBAXaoWBctaBNFnejX0uL%2BIXSnI7O8iQ4kqH1SHFmOafuxIR7wYO90NDXH4qzWgHCKLPr%2F%2BMQgPBjvN9dEidr8hwGmKONaM0f76vqmqJG64Kkt%2FxA5mrjnd38DwMAPIxU2l%2BHUJ2nw1L7z3%2BTZ0xy6nJZaO2tPd01H2qIVRR2E%2BMjq7hcAMgdfynp6KqGJV87OjGpjAoOhVXXaXunCbLaj7DCbAjo9ODaUUBsGguN%2BptPBQQ3Pgtda%2F%2BczCCo6jEBjqkAY%2FQv%2F5hpPI2CznKAQ%2BykZWP7zNnSHX1oLR6jSiri85a%2FxKgUhew5Nfr7bE2dilbX7EDFtU12%2F3MO4oX6d4KOKaAu%2BIeMFMChSY20yGY5k%2FuWPXpX7J%2BxLToxn9AgqNbOxUBt12cZ%2B2%2BxLIr9Ayi8N6n3pUVKtEfeLKNZTlnrKPEJNoGqMwd9bCKi3d5hVbkQJDDXmStP%2F45FEKv8A8kNGKnyFk4&X-Amz-Signature=f0291c3c4274b133ea6b16b992c46f24114ea90fc16183240dd4f14344375d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCA5GNJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUkPVz%2FzCq2iTbt30cNkaGl3KhkawhbjOudenQ6i9BQIgZMMEYsgU1seybw9yNjStyNR%2FsAx%2FhkiOdhmEbodAvNkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjQC4wb4wLBnsKomircA1VypacssMmsytwQ2oM22EfCwJMFAO6rV%2BOZ35xz0fewMLcmO8rmiIPJ4KZnwuT0MBdGc1URJZuLMlQoEIRmiY41stPh8EjW54pEVLxpdER6L3iL93ZzrnoPq3c0XJeJCKAjHyQ%2Bkr%2BwjlExgUZcS%2BQRYmfm7Z6oYDdbBG3uLd8Xc%2FO6p0MxyHeihwJji3%2F%2FvtI2omFSvNegDSDM7pByHVb3V2D84bCPYSZv3xtRcz%2FcsXoLqGjuwJyKV5tSJgE%2BE8bhI%2FlbyHJ5RruiFySxQ5XlDi0xjXvbnJRBI8GIucuWLaqEJCl%2BzU%2BzmQtkSBAO%2BMfqGWvbjQRdbOZunsRIOsViK5M3grH6MUSD1W2%2BfmTyYhCl9VHSnmTK8RirH33L1%2FbCL%2BywssGAh%2FkxYwZQLEhLCYW9b9a3vkSLD9CraBmTeaMuvdA%2BcZXONCyFPSmRxUncvpdTB4ZlNgykZmJyl62se%2F4RuTJpzwe4DZRBV1UHMKcb708GCdvr9YFCOBJp46OzisvdmreePHURgwubDnvqoer7CmdU5HOyRvDFGNC%2FGESBKJA54eaRvmglEFEVXCnOrG3nasXiZDcnCjeCp33%2FiiIKhD4NqdPNc0OYewGzh7DcEnicIgbcf58bMO2jqMQGOqUBdLEkc38iZr%2BRIJ%2FNe4%2FrNE%2Ffc3mPdvgYQ60ADYQ5FMxsPSzmbETyJHMmL8R%2Bd1Mq6yS4FLAJ3lrtzVjs48eJ2jJiyk0Wr8UvBa7QHOwav3mFKTu7YYAWu%2Fyf%2F%2FuMHdWwyQS7F9ynR%2Bjr2zoOxXRwWmMd9y7FM%2FM3fqvIrXQHH2ELuKWDPA2bXjycPZDlw%2F6CcjY97NPecJLVIgZf4gaNJFXLMNs4&X-Amz-Signature=108d2a395b62d72c05ff398837f8250590fc00fc7dc32444d5f3acef29d9b739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCA5GNJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUkPVz%2FzCq2iTbt30cNkaGl3KhkawhbjOudenQ6i9BQIgZMMEYsgU1seybw9yNjStyNR%2FsAx%2FhkiOdhmEbodAvNkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjQC4wb4wLBnsKomircA1VypacssMmsytwQ2oM22EfCwJMFAO6rV%2BOZ35xz0fewMLcmO8rmiIPJ4KZnwuT0MBdGc1URJZuLMlQoEIRmiY41stPh8EjW54pEVLxpdER6L3iL93ZzrnoPq3c0XJeJCKAjHyQ%2Bkr%2BwjlExgUZcS%2BQRYmfm7Z6oYDdbBG3uLd8Xc%2FO6p0MxyHeihwJji3%2F%2FvtI2omFSvNegDSDM7pByHVb3V2D84bCPYSZv3xtRcz%2FcsXoLqGjuwJyKV5tSJgE%2BE8bhI%2FlbyHJ5RruiFySxQ5XlDi0xjXvbnJRBI8GIucuWLaqEJCl%2BzU%2BzmQtkSBAO%2BMfqGWvbjQRdbOZunsRIOsViK5M3grH6MUSD1W2%2BfmTyYhCl9VHSnmTK8RirH33L1%2FbCL%2BywssGAh%2FkxYwZQLEhLCYW9b9a3vkSLD9CraBmTeaMuvdA%2BcZXONCyFPSmRxUncvpdTB4ZlNgykZmJyl62se%2F4RuTJpzwe4DZRBV1UHMKcb708GCdvr9YFCOBJp46OzisvdmreePHURgwubDnvqoer7CmdU5HOyRvDFGNC%2FGESBKJA54eaRvmglEFEVXCnOrG3nasXiZDcnCjeCp33%2FiiIKhD4NqdPNc0OYewGzh7DcEnicIgbcf58bMO2jqMQGOqUBdLEkc38iZr%2BRIJ%2FNe4%2FrNE%2Ffc3mPdvgYQ60ADYQ5FMxsPSzmbETyJHMmL8R%2Bd1Mq6yS4FLAJ3lrtzVjs48eJ2jJiyk0Wr8UvBa7QHOwav3mFKTu7YYAWu%2Fyf%2F%2FuMHdWwyQS7F9ynR%2Bjr2zoOxXRwWmMd9y7FM%2FM3fqvIrXQHH2ELuKWDPA2bXjycPZDlw%2F6CcjY97NPecJLVIgZf4gaNJFXLMNs4&X-Amz-Signature=2b6ab620676f8e25cdbef093a3ae4dcbe29e80b6cb4155c380900e27afc9ca59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCA5GNJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUkPVz%2FzCq2iTbt30cNkaGl3KhkawhbjOudenQ6i9BQIgZMMEYsgU1seybw9yNjStyNR%2FsAx%2FhkiOdhmEbodAvNkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjQC4wb4wLBnsKomircA1VypacssMmsytwQ2oM22EfCwJMFAO6rV%2BOZ35xz0fewMLcmO8rmiIPJ4KZnwuT0MBdGc1URJZuLMlQoEIRmiY41stPh8EjW54pEVLxpdER6L3iL93ZzrnoPq3c0XJeJCKAjHyQ%2Bkr%2BwjlExgUZcS%2BQRYmfm7Z6oYDdbBG3uLd8Xc%2FO6p0MxyHeihwJji3%2F%2FvtI2omFSvNegDSDM7pByHVb3V2D84bCPYSZv3xtRcz%2FcsXoLqGjuwJyKV5tSJgE%2BE8bhI%2FlbyHJ5RruiFySxQ5XlDi0xjXvbnJRBI8GIucuWLaqEJCl%2BzU%2BzmQtkSBAO%2BMfqGWvbjQRdbOZunsRIOsViK5M3grH6MUSD1W2%2BfmTyYhCl9VHSnmTK8RirH33L1%2FbCL%2BywssGAh%2FkxYwZQLEhLCYW9b9a3vkSLD9CraBmTeaMuvdA%2BcZXONCyFPSmRxUncvpdTB4ZlNgykZmJyl62se%2F4RuTJpzwe4DZRBV1UHMKcb708GCdvr9YFCOBJp46OzisvdmreePHURgwubDnvqoer7CmdU5HOyRvDFGNC%2FGESBKJA54eaRvmglEFEVXCnOrG3nasXiZDcnCjeCp33%2FiiIKhD4NqdPNc0OYewGzh7DcEnicIgbcf58bMO2jqMQGOqUBdLEkc38iZr%2BRIJ%2FNe4%2FrNE%2Ffc3mPdvgYQ60ADYQ5FMxsPSzmbETyJHMmL8R%2Bd1Mq6yS4FLAJ3lrtzVjs48eJ2jJiyk0Wr8UvBa7QHOwav3mFKTu7YYAWu%2Fyf%2F%2FuMHdWwyQS7F9ynR%2Bjr2zoOxXRwWmMd9y7FM%2FM3fqvIrXQHH2ELuKWDPA2bXjycPZDlw%2F6CcjY97NPecJLVIgZf4gaNJFXLMNs4&X-Amz-Signature=bfff13ef529bcb2eb3c5a5ef44d62bf89681a10c07804619539cb0dd41013423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCA5GNJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUkPVz%2FzCq2iTbt30cNkaGl3KhkawhbjOudenQ6i9BQIgZMMEYsgU1seybw9yNjStyNR%2FsAx%2FhkiOdhmEbodAvNkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjQC4wb4wLBnsKomircA1VypacssMmsytwQ2oM22EfCwJMFAO6rV%2BOZ35xz0fewMLcmO8rmiIPJ4KZnwuT0MBdGc1URJZuLMlQoEIRmiY41stPh8EjW54pEVLxpdER6L3iL93ZzrnoPq3c0XJeJCKAjHyQ%2Bkr%2BwjlExgUZcS%2BQRYmfm7Z6oYDdbBG3uLd8Xc%2FO6p0MxyHeihwJji3%2F%2FvtI2omFSvNegDSDM7pByHVb3V2D84bCPYSZv3xtRcz%2FcsXoLqGjuwJyKV5tSJgE%2BE8bhI%2FlbyHJ5RruiFySxQ5XlDi0xjXvbnJRBI8GIucuWLaqEJCl%2BzU%2BzmQtkSBAO%2BMfqGWvbjQRdbOZunsRIOsViK5M3grH6MUSD1W2%2BfmTyYhCl9VHSnmTK8RirH33L1%2FbCL%2BywssGAh%2FkxYwZQLEhLCYW9b9a3vkSLD9CraBmTeaMuvdA%2BcZXONCyFPSmRxUncvpdTB4ZlNgykZmJyl62se%2F4RuTJpzwe4DZRBV1UHMKcb708GCdvr9YFCOBJp46OzisvdmreePHURgwubDnvqoer7CmdU5HOyRvDFGNC%2FGESBKJA54eaRvmglEFEVXCnOrG3nasXiZDcnCjeCp33%2FiiIKhD4NqdPNc0OYewGzh7DcEnicIgbcf58bMO2jqMQGOqUBdLEkc38iZr%2BRIJ%2FNe4%2FrNE%2Ffc3mPdvgYQ60ADYQ5FMxsPSzmbETyJHMmL8R%2Bd1Mq6yS4FLAJ3lrtzVjs48eJ2jJiyk0Wr8UvBa7QHOwav3mFKTu7YYAWu%2Fyf%2F%2FuMHdWwyQS7F9ynR%2Bjr2zoOxXRwWmMd9y7FM%2FM3fqvIrXQHH2ELuKWDPA2bXjycPZDlw%2F6CcjY97NPecJLVIgZf4gaNJFXLMNs4&X-Amz-Signature=a21359f8473568dfc703000e5355c62f74a275bc0cb856c972974115a2e7df25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCA5GNJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUkPVz%2FzCq2iTbt30cNkaGl3KhkawhbjOudenQ6i9BQIgZMMEYsgU1seybw9yNjStyNR%2FsAx%2FhkiOdhmEbodAvNkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjQC4wb4wLBnsKomircA1VypacssMmsytwQ2oM22EfCwJMFAO6rV%2BOZ35xz0fewMLcmO8rmiIPJ4KZnwuT0MBdGc1URJZuLMlQoEIRmiY41stPh8EjW54pEVLxpdER6L3iL93ZzrnoPq3c0XJeJCKAjHyQ%2Bkr%2BwjlExgUZcS%2BQRYmfm7Z6oYDdbBG3uLd8Xc%2FO6p0MxyHeihwJji3%2F%2FvtI2omFSvNegDSDM7pByHVb3V2D84bCPYSZv3xtRcz%2FcsXoLqGjuwJyKV5tSJgE%2BE8bhI%2FlbyHJ5RruiFySxQ5XlDi0xjXvbnJRBI8GIucuWLaqEJCl%2BzU%2BzmQtkSBAO%2BMfqGWvbjQRdbOZunsRIOsViK5M3grH6MUSD1W2%2BfmTyYhCl9VHSnmTK8RirH33L1%2FbCL%2BywssGAh%2FkxYwZQLEhLCYW9b9a3vkSLD9CraBmTeaMuvdA%2BcZXONCyFPSmRxUncvpdTB4ZlNgykZmJyl62se%2F4RuTJpzwe4DZRBV1UHMKcb708GCdvr9YFCOBJp46OzisvdmreePHURgwubDnvqoer7CmdU5HOyRvDFGNC%2FGESBKJA54eaRvmglEFEVXCnOrG3nasXiZDcnCjeCp33%2FiiIKhD4NqdPNc0OYewGzh7DcEnicIgbcf58bMO2jqMQGOqUBdLEkc38iZr%2BRIJ%2FNe4%2FrNE%2Ffc3mPdvgYQ60ADYQ5FMxsPSzmbETyJHMmL8R%2Bd1Mq6yS4FLAJ3lrtzVjs48eJ2jJiyk0Wr8UvBa7QHOwav3mFKTu7YYAWu%2Fyf%2F%2FuMHdWwyQS7F9ynR%2Bjr2zoOxXRwWmMd9y7FM%2FM3fqvIrXQHH2ELuKWDPA2bXjycPZDlw%2F6CcjY97NPecJLVIgZf4gaNJFXLMNs4&X-Amz-Signature=be6aa5686564d8d35ae3ba40d561c6768e24ae74ccf7807977299e14e597a844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCA5GNJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUkPVz%2FzCq2iTbt30cNkaGl3KhkawhbjOudenQ6i9BQIgZMMEYsgU1seybw9yNjStyNR%2FsAx%2FhkiOdhmEbodAvNkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjQC4wb4wLBnsKomircA1VypacssMmsytwQ2oM22EfCwJMFAO6rV%2BOZ35xz0fewMLcmO8rmiIPJ4KZnwuT0MBdGc1URJZuLMlQoEIRmiY41stPh8EjW54pEVLxpdER6L3iL93ZzrnoPq3c0XJeJCKAjHyQ%2Bkr%2BwjlExgUZcS%2BQRYmfm7Z6oYDdbBG3uLd8Xc%2FO6p0MxyHeihwJji3%2F%2FvtI2omFSvNegDSDM7pByHVb3V2D84bCPYSZv3xtRcz%2FcsXoLqGjuwJyKV5tSJgE%2BE8bhI%2FlbyHJ5RruiFySxQ5XlDi0xjXvbnJRBI8GIucuWLaqEJCl%2BzU%2BzmQtkSBAO%2BMfqGWvbjQRdbOZunsRIOsViK5M3grH6MUSD1W2%2BfmTyYhCl9VHSnmTK8RirH33L1%2FbCL%2BywssGAh%2FkxYwZQLEhLCYW9b9a3vkSLD9CraBmTeaMuvdA%2BcZXONCyFPSmRxUncvpdTB4ZlNgykZmJyl62se%2F4RuTJpzwe4DZRBV1UHMKcb708GCdvr9YFCOBJp46OzisvdmreePHURgwubDnvqoer7CmdU5HOyRvDFGNC%2FGESBKJA54eaRvmglEFEVXCnOrG3nasXiZDcnCjeCp33%2FiiIKhD4NqdPNc0OYewGzh7DcEnicIgbcf58bMO2jqMQGOqUBdLEkc38iZr%2BRIJ%2FNe4%2FrNE%2Ffc3mPdvgYQ60ADYQ5FMxsPSzmbETyJHMmL8R%2Bd1Mq6yS4FLAJ3lrtzVjs48eJ2jJiyk0Wr8UvBa7QHOwav3mFKTu7YYAWu%2Fyf%2F%2FuMHdWwyQS7F9ynR%2Bjr2zoOxXRwWmMd9y7FM%2FM3fqvIrXQHH2ELuKWDPA2bXjycPZDlw%2F6CcjY97NPecJLVIgZf4gaNJFXLMNs4&X-Amz-Signature=8ef6d42cb197e1d56fbb76fb69e972aa198e40f04171caa10e589453dac2c400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCA5GNJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUkPVz%2FzCq2iTbt30cNkaGl3KhkawhbjOudenQ6i9BQIgZMMEYsgU1seybw9yNjStyNR%2FsAx%2FhkiOdhmEbodAvNkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjQC4wb4wLBnsKomircA1VypacssMmsytwQ2oM22EfCwJMFAO6rV%2BOZ35xz0fewMLcmO8rmiIPJ4KZnwuT0MBdGc1URJZuLMlQoEIRmiY41stPh8EjW54pEVLxpdER6L3iL93ZzrnoPq3c0XJeJCKAjHyQ%2Bkr%2BwjlExgUZcS%2BQRYmfm7Z6oYDdbBG3uLd8Xc%2FO6p0MxyHeihwJji3%2F%2FvtI2omFSvNegDSDM7pByHVb3V2D84bCPYSZv3xtRcz%2FcsXoLqGjuwJyKV5tSJgE%2BE8bhI%2FlbyHJ5RruiFySxQ5XlDi0xjXvbnJRBI8GIucuWLaqEJCl%2BzU%2BzmQtkSBAO%2BMfqGWvbjQRdbOZunsRIOsViK5M3grH6MUSD1W2%2BfmTyYhCl9VHSnmTK8RirH33L1%2FbCL%2BywssGAh%2FkxYwZQLEhLCYW9b9a3vkSLD9CraBmTeaMuvdA%2BcZXONCyFPSmRxUncvpdTB4ZlNgykZmJyl62se%2F4RuTJpzwe4DZRBV1UHMKcb708GCdvr9YFCOBJp46OzisvdmreePHURgwubDnvqoer7CmdU5HOyRvDFGNC%2FGESBKJA54eaRvmglEFEVXCnOrG3nasXiZDcnCjeCp33%2FiiIKhD4NqdPNc0OYewGzh7DcEnicIgbcf58bMO2jqMQGOqUBdLEkc38iZr%2BRIJ%2FNe4%2FrNE%2Ffc3mPdvgYQ60ADYQ5FMxsPSzmbETyJHMmL8R%2Bd1Mq6yS4FLAJ3lrtzVjs48eJ2jJiyk0Wr8UvBa7QHOwav3mFKTu7YYAWu%2Fyf%2F%2FuMHdWwyQS7F9ynR%2Bjr2zoOxXRwWmMd9y7FM%2FM3fqvIrXQHH2ELuKWDPA2bXjycPZDlw%2F6CcjY97NPecJLVIgZf4gaNJFXLMNs4&X-Amz-Signature=faea18a1c9e8e5d586fae7f8ea09d2c23351703d8c33a6ef52d265655517ca67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCA5GNJ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUkPVz%2FzCq2iTbt30cNkaGl3KhkawhbjOudenQ6i9BQIgZMMEYsgU1seybw9yNjStyNR%2FsAx%2FhkiOdhmEbodAvNkqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjQC4wb4wLBnsKomircA1VypacssMmsytwQ2oM22EfCwJMFAO6rV%2BOZ35xz0fewMLcmO8rmiIPJ4KZnwuT0MBdGc1URJZuLMlQoEIRmiY41stPh8EjW54pEVLxpdER6L3iL93ZzrnoPq3c0XJeJCKAjHyQ%2Bkr%2BwjlExgUZcS%2BQRYmfm7Z6oYDdbBG3uLd8Xc%2FO6p0MxyHeihwJji3%2F%2FvtI2omFSvNegDSDM7pByHVb3V2D84bCPYSZv3xtRcz%2FcsXoLqGjuwJyKV5tSJgE%2BE8bhI%2FlbyHJ5RruiFySxQ5XlDi0xjXvbnJRBI8GIucuWLaqEJCl%2BzU%2BzmQtkSBAO%2BMfqGWvbjQRdbOZunsRIOsViK5M3grH6MUSD1W2%2BfmTyYhCl9VHSnmTK8RirH33L1%2FbCL%2BywssGAh%2FkxYwZQLEhLCYW9b9a3vkSLD9CraBmTeaMuvdA%2BcZXONCyFPSmRxUncvpdTB4ZlNgykZmJyl62se%2F4RuTJpzwe4DZRBV1UHMKcb708GCdvr9YFCOBJp46OzisvdmreePHURgwubDnvqoer7CmdU5HOyRvDFGNC%2FGESBKJA54eaRvmglEFEVXCnOrG3nasXiZDcnCjeCp33%2FiiIKhD4NqdPNc0OYewGzh7DcEnicIgbcf58bMO2jqMQGOqUBdLEkc38iZr%2BRIJ%2FNe4%2FrNE%2Ffc3mPdvgYQ60ADYQ5FMxsPSzmbETyJHMmL8R%2Bd1Mq6yS4FLAJ3lrtzVjs48eJ2jJiyk0Wr8UvBa7QHOwav3mFKTu7YYAWu%2Fyf%2F%2FuMHdWwyQS7F9ynR%2Bjr2zoOxXRwWmMd9y7FM%2FM3fqvIrXQHH2ELuKWDPA2bXjycPZDlw%2F6CcjY97NPecJLVIgZf4gaNJFXLMNs4&X-Amz-Signature=b2c4062dea415800fd22a862f5747fcaba544a2bd7d4784f38b807d2285cc063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
