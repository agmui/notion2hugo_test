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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V45D5ZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsJFeN6eCEbZ7Q7UzfCujI1zzsTUVjJmjeZ412FhGDAiEA1065w9sufRS54g55pZnP87BBj5axKKOiwpfycez1CVkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7I64iIcWM2hXIZircA8hxH0%2B53K7G%2BUjXWb%2BmYpaOyF3bNNdEcmzZAX%2F5U5VfTJtaczfFKbChL2t4sUhDBs9bxaEw7euoSTFPBh2Ua%2BT7YzBT3YefpnoWbmShtH8Q6iK2q3LTMBcAd8%2BQXHss0Hs5gzpTN2RvZjob033XKR%2Flob%2F2HQIwGDJSlhXNkBH5l6LFp2vcOdVVnrfg7P82K4vsUZDWSOwwP2i2ie08vc%2FBiHcIK853GSw0aXHPj4XLLRs43liRzrwqeXOuY%2FMvnWouajY5vVgw2g4BeN5DJD1uiIk%2BQK6ZlCq3reIp2YrupreSWvskROG64rzOr%2BG%2FZ3yD79I2hqqKWAeW4cQIfXdBPZ6zbSRs57xVAb8ZiHkXww%2BRElwJ%2BZKPOzV%2FaKtZFWFkAuVkSR8MW%2B2669jNfAv1QYXL0nAPk4QwltvvMIhuImK4TDQtBYO80GSprArIDIeC3mIaX7Ueo5G2%2F38UnIdNlnYoEYNaiQhcyk1Pa2N1y3iDd89fiiGNfqLgbbM9nYGaC%2BbRd9pW10tjsoDu7Cd8vTf5MM4j2VxWfNVGXFfVOnHfq2IJae3WFyFwTG2JZrnhFnJxTX3U9HWb%2Fdg3PvRxq2DanTSlUy1fhjOOfJE1iwsx2C7vvcGVDwZAMML1q8QGOqUBvLMl99d7JpN0XdpwieA4yRI1d%2BEcFgzwnrn8OpUrdmgf5RDIwr4s9KIltrapZaG6M%2BO1%2BOIxQFOfgzKLZ1B%2FFO6%2BP%2F3YDG81im51BMKrWNXYIUnAfD2SigbVEQ5fYXwrt2lm9fKA1HP6pjzm9WEBptWx0IHtVRd05WYXOMPn4QAqdRD57yX4GE5meq5sYe41pu3TB57jdj2cNDHUDrZBZqeyBROO&X-Amz-Signature=f84bb30351a9ce6fcc703ffef8b7ff154ef26d94d86f08623058861280dda1ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V45D5ZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsJFeN6eCEbZ7Q7UzfCujI1zzsTUVjJmjeZ412FhGDAiEA1065w9sufRS54g55pZnP87BBj5axKKOiwpfycez1CVkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7I64iIcWM2hXIZircA8hxH0%2B53K7G%2BUjXWb%2BmYpaOyF3bNNdEcmzZAX%2F5U5VfTJtaczfFKbChL2t4sUhDBs9bxaEw7euoSTFPBh2Ua%2BT7YzBT3YefpnoWbmShtH8Q6iK2q3LTMBcAd8%2BQXHss0Hs5gzpTN2RvZjob033XKR%2Flob%2F2HQIwGDJSlhXNkBH5l6LFp2vcOdVVnrfg7P82K4vsUZDWSOwwP2i2ie08vc%2FBiHcIK853GSw0aXHPj4XLLRs43liRzrwqeXOuY%2FMvnWouajY5vVgw2g4BeN5DJD1uiIk%2BQK6ZlCq3reIp2YrupreSWvskROG64rzOr%2BG%2FZ3yD79I2hqqKWAeW4cQIfXdBPZ6zbSRs57xVAb8ZiHkXww%2BRElwJ%2BZKPOzV%2FaKtZFWFkAuVkSR8MW%2B2669jNfAv1QYXL0nAPk4QwltvvMIhuImK4TDQtBYO80GSprArIDIeC3mIaX7Ueo5G2%2F38UnIdNlnYoEYNaiQhcyk1Pa2N1y3iDd89fiiGNfqLgbbM9nYGaC%2BbRd9pW10tjsoDu7Cd8vTf5MM4j2VxWfNVGXFfVOnHfq2IJae3WFyFwTG2JZrnhFnJxTX3U9HWb%2Fdg3PvRxq2DanTSlUy1fhjOOfJE1iwsx2C7vvcGVDwZAMML1q8QGOqUBvLMl99d7JpN0XdpwieA4yRI1d%2BEcFgzwnrn8OpUrdmgf5RDIwr4s9KIltrapZaG6M%2BO1%2BOIxQFOfgzKLZ1B%2FFO6%2BP%2F3YDG81im51BMKrWNXYIUnAfD2SigbVEQ5fYXwrt2lm9fKA1HP6pjzm9WEBptWx0IHtVRd05WYXOMPn4QAqdRD57yX4GE5meq5sYe41pu3TB57jdj2cNDHUDrZBZqeyBROO&X-Amz-Signature=510337816b3df8333ca578bb12511911bd449edc33dd9a416641a33e559b188d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V45D5ZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsJFeN6eCEbZ7Q7UzfCujI1zzsTUVjJmjeZ412FhGDAiEA1065w9sufRS54g55pZnP87BBj5axKKOiwpfycez1CVkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7I64iIcWM2hXIZircA8hxH0%2B53K7G%2BUjXWb%2BmYpaOyF3bNNdEcmzZAX%2F5U5VfTJtaczfFKbChL2t4sUhDBs9bxaEw7euoSTFPBh2Ua%2BT7YzBT3YefpnoWbmShtH8Q6iK2q3LTMBcAd8%2BQXHss0Hs5gzpTN2RvZjob033XKR%2Flob%2F2HQIwGDJSlhXNkBH5l6LFp2vcOdVVnrfg7P82K4vsUZDWSOwwP2i2ie08vc%2FBiHcIK853GSw0aXHPj4XLLRs43liRzrwqeXOuY%2FMvnWouajY5vVgw2g4BeN5DJD1uiIk%2BQK6ZlCq3reIp2YrupreSWvskROG64rzOr%2BG%2FZ3yD79I2hqqKWAeW4cQIfXdBPZ6zbSRs57xVAb8ZiHkXww%2BRElwJ%2BZKPOzV%2FaKtZFWFkAuVkSR8MW%2B2669jNfAv1QYXL0nAPk4QwltvvMIhuImK4TDQtBYO80GSprArIDIeC3mIaX7Ueo5G2%2F38UnIdNlnYoEYNaiQhcyk1Pa2N1y3iDd89fiiGNfqLgbbM9nYGaC%2BbRd9pW10tjsoDu7Cd8vTf5MM4j2VxWfNVGXFfVOnHfq2IJae3WFyFwTG2JZrnhFnJxTX3U9HWb%2Fdg3PvRxq2DanTSlUy1fhjOOfJE1iwsx2C7vvcGVDwZAMML1q8QGOqUBvLMl99d7JpN0XdpwieA4yRI1d%2BEcFgzwnrn8OpUrdmgf5RDIwr4s9KIltrapZaG6M%2BO1%2BOIxQFOfgzKLZ1B%2FFO6%2BP%2F3YDG81im51BMKrWNXYIUnAfD2SigbVEQ5fYXwrt2lm9fKA1HP6pjzm9WEBptWx0IHtVRd05WYXOMPn4QAqdRD57yX4GE5meq5sYe41pu3TB57jdj2cNDHUDrZBZqeyBROO&X-Amz-Signature=8d117bdf6a50ddaff45874aafe83032b3884676e497447dc0bf9b4e9305e790e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V45D5ZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsJFeN6eCEbZ7Q7UzfCujI1zzsTUVjJmjeZ412FhGDAiEA1065w9sufRS54g55pZnP87BBj5axKKOiwpfycez1CVkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7I64iIcWM2hXIZircA8hxH0%2B53K7G%2BUjXWb%2BmYpaOyF3bNNdEcmzZAX%2F5U5VfTJtaczfFKbChL2t4sUhDBs9bxaEw7euoSTFPBh2Ua%2BT7YzBT3YefpnoWbmShtH8Q6iK2q3LTMBcAd8%2BQXHss0Hs5gzpTN2RvZjob033XKR%2Flob%2F2HQIwGDJSlhXNkBH5l6LFp2vcOdVVnrfg7P82K4vsUZDWSOwwP2i2ie08vc%2FBiHcIK853GSw0aXHPj4XLLRs43liRzrwqeXOuY%2FMvnWouajY5vVgw2g4BeN5DJD1uiIk%2BQK6ZlCq3reIp2YrupreSWvskROG64rzOr%2BG%2FZ3yD79I2hqqKWAeW4cQIfXdBPZ6zbSRs57xVAb8ZiHkXww%2BRElwJ%2BZKPOzV%2FaKtZFWFkAuVkSR8MW%2B2669jNfAv1QYXL0nAPk4QwltvvMIhuImK4TDQtBYO80GSprArIDIeC3mIaX7Ueo5G2%2F38UnIdNlnYoEYNaiQhcyk1Pa2N1y3iDd89fiiGNfqLgbbM9nYGaC%2BbRd9pW10tjsoDu7Cd8vTf5MM4j2VxWfNVGXFfVOnHfq2IJae3WFyFwTG2JZrnhFnJxTX3U9HWb%2Fdg3PvRxq2DanTSlUy1fhjOOfJE1iwsx2C7vvcGVDwZAMML1q8QGOqUBvLMl99d7JpN0XdpwieA4yRI1d%2BEcFgzwnrn8OpUrdmgf5RDIwr4s9KIltrapZaG6M%2BO1%2BOIxQFOfgzKLZ1B%2FFO6%2BP%2F3YDG81im51BMKrWNXYIUnAfD2SigbVEQ5fYXwrt2lm9fKA1HP6pjzm9WEBptWx0IHtVRd05WYXOMPn4QAqdRD57yX4GE5meq5sYe41pu3TB57jdj2cNDHUDrZBZqeyBROO&X-Amz-Signature=49e543b60bb7db933b51b4c874a5d5b984a06c57f4f1f263f6c9e2de0c679b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V45D5ZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsJFeN6eCEbZ7Q7UzfCujI1zzsTUVjJmjeZ412FhGDAiEA1065w9sufRS54g55pZnP87BBj5axKKOiwpfycez1CVkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7I64iIcWM2hXIZircA8hxH0%2B53K7G%2BUjXWb%2BmYpaOyF3bNNdEcmzZAX%2F5U5VfTJtaczfFKbChL2t4sUhDBs9bxaEw7euoSTFPBh2Ua%2BT7YzBT3YefpnoWbmShtH8Q6iK2q3LTMBcAd8%2BQXHss0Hs5gzpTN2RvZjob033XKR%2Flob%2F2HQIwGDJSlhXNkBH5l6LFp2vcOdVVnrfg7P82K4vsUZDWSOwwP2i2ie08vc%2FBiHcIK853GSw0aXHPj4XLLRs43liRzrwqeXOuY%2FMvnWouajY5vVgw2g4BeN5DJD1uiIk%2BQK6ZlCq3reIp2YrupreSWvskROG64rzOr%2BG%2FZ3yD79I2hqqKWAeW4cQIfXdBPZ6zbSRs57xVAb8ZiHkXww%2BRElwJ%2BZKPOzV%2FaKtZFWFkAuVkSR8MW%2B2669jNfAv1QYXL0nAPk4QwltvvMIhuImK4TDQtBYO80GSprArIDIeC3mIaX7Ueo5G2%2F38UnIdNlnYoEYNaiQhcyk1Pa2N1y3iDd89fiiGNfqLgbbM9nYGaC%2BbRd9pW10tjsoDu7Cd8vTf5MM4j2VxWfNVGXFfVOnHfq2IJae3WFyFwTG2JZrnhFnJxTX3U9HWb%2Fdg3PvRxq2DanTSlUy1fhjOOfJE1iwsx2C7vvcGVDwZAMML1q8QGOqUBvLMl99d7JpN0XdpwieA4yRI1d%2BEcFgzwnrn8OpUrdmgf5RDIwr4s9KIltrapZaG6M%2BO1%2BOIxQFOfgzKLZ1B%2FFO6%2BP%2F3YDG81im51BMKrWNXYIUnAfD2SigbVEQ5fYXwrt2lm9fKA1HP6pjzm9WEBptWx0IHtVRd05WYXOMPn4QAqdRD57yX4GE5meq5sYe41pu3TB57jdj2cNDHUDrZBZqeyBROO&X-Amz-Signature=b62dccc4fb02634f30337d21c22290e5ff9ce1f1706112eba98fdd469b94d2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V45D5ZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsJFeN6eCEbZ7Q7UzfCujI1zzsTUVjJmjeZ412FhGDAiEA1065w9sufRS54g55pZnP87BBj5axKKOiwpfycez1CVkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7I64iIcWM2hXIZircA8hxH0%2B53K7G%2BUjXWb%2BmYpaOyF3bNNdEcmzZAX%2F5U5VfTJtaczfFKbChL2t4sUhDBs9bxaEw7euoSTFPBh2Ua%2BT7YzBT3YefpnoWbmShtH8Q6iK2q3LTMBcAd8%2BQXHss0Hs5gzpTN2RvZjob033XKR%2Flob%2F2HQIwGDJSlhXNkBH5l6LFp2vcOdVVnrfg7P82K4vsUZDWSOwwP2i2ie08vc%2FBiHcIK853GSw0aXHPj4XLLRs43liRzrwqeXOuY%2FMvnWouajY5vVgw2g4BeN5DJD1uiIk%2BQK6ZlCq3reIp2YrupreSWvskROG64rzOr%2BG%2FZ3yD79I2hqqKWAeW4cQIfXdBPZ6zbSRs57xVAb8ZiHkXww%2BRElwJ%2BZKPOzV%2FaKtZFWFkAuVkSR8MW%2B2669jNfAv1QYXL0nAPk4QwltvvMIhuImK4TDQtBYO80GSprArIDIeC3mIaX7Ueo5G2%2F38UnIdNlnYoEYNaiQhcyk1Pa2N1y3iDd89fiiGNfqLgbbM9nYGaC%2BbRd9pW10tjsoDu7Cd8vTf5MM4j2VxWfNVGXFfVOnHfq2IJae3WFyFwTG2JZrnhFnJxTX3U9HWb%2Fdg3PvRxq2DanTSlUy1fhjOOfJE1iwsx2C7vvcGVDwZAMML1q8QGOqUBvLMl99d7JpN0XdpwieA4yRI1d%2BEcFgzwnrn8OpUrdmgf5RDIwr4s9KIltrapZaG6M%2BO1%2BOIxQFOfgzKLZ1B%2FFO6%2BP%2F3YDG81im51BMKrWNXYIUnAfD2SigbVEQ5fYXwrt2lm9fKA1HP6pjzm9WEBptWx0IHtVRd05WYXOMPn4QAqdRD57yX4GE5meq5sYe41pu3TB57jdj2cNDHUDrZBZqeyBROO&X-Amz-Signature=32ea8c1c12a39fdd64d54a6f492bf7f58b5664637dcf2878a943c4586b7372f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V45D5ZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsJFeN6eCEbZ7Q7UzfCujI1zzsTUVjJmjeZ412FhGDAiEA1065w9sufRS54g55pZnP87BBj5axKKOiwpfycez1CVkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7I64iIcWM2hXIZircA8hxH0%2B53K7G%2BUjXWb%2BmYpaOyF3bNNdEcmzZAX%2F5U5VfTJtaczfFKbChL2t4sUhDBs9bxaEw7euoSTFPBh2Ua%2BT7YzBT3YefpnoWbmShtH8Q6iK2q3LTMBcAd8%2BQXHss0Hs5gzpTN2RvZjob033XKR%2Flob%2F2HQIwGDJSlhXNkBH5l6LFp2vcOdVVnrfg7P82K4vsUZDWSOwwP2i2ie08vc%2FBiHcIK853GSw0aXHPj4XLLRs43liRzrwqeXOuY%2FMvnWouajY5vVgw2g4BeN5DJD1uiIk%2BQK6ZlCq3reIp2YrupreSWvskROG64rzOr%2BG%2FZ3yD79I2hqqKWAeW4cQIfXdBPZ6zbSRs57xVAb8ZiHkXww%2BRElwJ%2BZKPOzV%2FaKtZFWFkAuVkSR8MW%2B2669jNfAv1QYXL0nAPk4QwltvvMIhuImK4TDQtBYO80GSprArIDIeC3mIaX7Ueo5G2%2F38UnIdNlnYoEYNaiQhcyk1Pa2N1y3iDd89fiiGNfqLgbbM9nYGaC%2BbRd9pW10tjsoDu7Cd8vTf5MM4j2VxWfNVGXFfVOnHfq2IJae3WFyFwTG2JZrnhFnJxTX3U9HWb%2Fdg3PvRxq2DanTSlUy1fhjOOfJE1iwsx2C7vvcGVDwZAMML1q8QGOqUBvLMl99d7JpN0XdpwieA4yRI1d%2BEcFgzwnrn8OpUrdmgf5RDIwr4s9KIltrapZaG6M%2BO1%2BOIxQFOfgzKLZ1B%2FFO6%2BP%2F3YDG81im51BMKrWNXYIUnAfD2SigbVEQ5fYXwrt2lm9fKA1HP6pjzm9WEBptWx0IHtVRd05WYXOMPn4QAqdRD57yX4GE5meq5sYe41pu3TB57jdj2cNDHUDrZBZqeyBROO&X-Amz-Signature=9f695d3871d66c6bae8b2c47c210987ebde9ede7026c12e09c6ae7617aba1385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V45D5ZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsJFeN6eCEbZ7Q7UzfCujI1zzsTUVjJmjeZ412FhGDAiEA1065w9sufRS54g55pZnP87BBj5axKKOiwpfycez1CVkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7I64iIcWM2hXIZircA8hxH0%2B53K7G%2BUjXWb%2BmYpaOyF3bNNdEcmzZAX%2F5U5VfTJtaczfFKbChL2t4sUhDBs9bxaEw7euoSTFPBh2Ua%2BT7YzBT3YefpnoWbmShtH8Q6iK2q3LTMBcAd8%2BQXHss0Hs5gzpTN2RvZjob033XKR%2Flob%2F2HQIwGDJSlhXNkBH5l6LFp2vcOdVVnrfg7P82K4vsUZDWSOwwP2i2ie08vc%2FBiHcIK853GSw0aXHPj4XLLRs43liRzrwqeXOuY%2FMvnWouajY5vVgw2g4BeN5DJD1uiIk%2BQK6ZlCq3reIp2YrupreSWvskROG64rzOr%2BG%2FZ3yD79I2hqqKWAeW4cQIfXdBPZ6zbSRs57xVAb8ZiHkXww%2BRElwJ%2BZKPOzV%2FaKtZFWFkAuVkSR8MW%2B2669jNfAv1QYXL0nAPk4QwltvvMIhuImK4TDQtBYO80GSprArIDIeC3mIaX7Ueo5G2%2F38UnIdNlnYoEYNaiQhcyk1Pa2N1y3iDd89fiiGNfqLgbbM9nYGaC%2BbRd9pW10tjsoDu7Cd8vTf5MM4j2VxWfNVGXFfVOnHfq2IJae3WFyFwTG2JZrnhFnJxTX3U9HWb%2Fdg3PvRxq2DanTSlUy1fhjOOfJE1iwsx2C7vvcGVDwZAMML1q8QGOqUBvLMl99d7JpN0XdpwieA4yRI1d%2BEcFgzwnrn8OpUrdmgf5RDIwr4s9KIltrapZaG6M%2BO1%2BOIxQFOfgzKLZ1B%2FFO6%2BP%2F3YDG81im51BMKrWNXYIUnAfD2SigbVEQ5fYXwrt2lm9fKA1HP6pjzm9WEBptWx0IHtVRd05WYXOMPn4QAqdRD57yX4GE5meq5sYe41pu3TB57jdj2cNDHUDrZBZqeyBROO&X-Amz-Signature=ce2608e7187b55bd032726ce1a4dee32fb86a411d362f9ccb3dfdfe5c76fe238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V45D5ZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsJFeN6eCEbZ7Q7UzfCujI1zzsTUVjJmjeZ412FhGDAiEA1065w9sufRS54g55pZnP87BBj5axKKOiwpfycez1CVkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7I64iIcWM2hXIZircA8hxH0%2B53K7G%2BUjXWb%2BmYpaOyF3bNNdEcmzZAX%2F5U5VfTJtaczfFKbChL2t4sUhDBs9bxaEw7euoSTFPBh2Ua%2BT7YzBT3YefpnoWbmShtH8Q6iK2q3LTMBcAd8%2BQXHss0Hs5gzpTN2RvZjob033XKR%2Flob%2F2HQIwGDJSlhXNkBH5l6LFp2vcOdVVnrfg7P82K4vsUZDWSOwwP2i2ie08vc%2FBiHcIK853GSw0aXHPj4XLLRs43liRzrwqeXOuY%2FMvnWouajY5vVgw2g4BeN5DJD1uiIk%2BQK6ZlCq3reIp2YrupreSWvskROG64rzOr%2BG%2FZ3yD79I2hqqKWAeW4cQIfXdBPZ6zbSRs57xVAb8ZiHkXww%2BRElwJ%2BZKPOzV%2FaKtZFWFkAuVkSR8MW%2B2669jNfAv1QYXL0nAPk4QwltvvMIhuImK4TDQtBYO80GSprArIDIeC3mIaX7Ueo5G2%2F38UnIdNlnYoEYNaiQhcyk1Pa2N1y3iDd89fiiGNfqLgbbM9nYGaC%2BbRd9pW10tjsoDu7Cd8vTf5MM4j2VxWfNVGXFfVOnHfq2IJae3WFyFwTG2JZrnhFnJxTX3U9HWb%2Fdg3PvRxq2DanTSlUy1fhjOOfJE1iwsx2C7vvcGVDwZAMML1q8QGOqUBvLMl99d7JpN0XdpwieA4yRI1d%2BEcFgzwnrn8OpUrdmgf5RDIwr4s9KIltrapZaG6M%2BO1%2BOIxQFOfgzKLZ1B%2FFO6%2BP%2F3YDG81im51BMKrWNXYIUnAfD2SigbVEQ5fYXwrt2lm9fKA1HP6pjzm9WEBptWx0IHtVRd05WYXOMPn4QAqdRD57yX4GE5meq5sYe41pu3TB57jdj2cNDHUDrZBZqeyBROO&X-Amz-Signature=fab823594f7ddfa70f3988d1f6613d5182f13b2f5f2800a10539c3432470b0c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQOVOX7K%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH20G5KOinMdsmJMVx6VYigSGTMDInIJXOyK6oZwtoNGAiAt5%2FKfpaUUmkN11lJT5el256jVZuOaLdBpylnl3sTT0yqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyiWLLWiaZr0Z5fXtKtwDp48fzCXF7l01SoztXLuxBjl%2BijkbSXBT1K9dgH6LaiqCOqReEOJTtIaA6%2FMPLyNoisu9JFpdcneAPPAGG%2BKVQPHSFBy23tfp8IV8UKNOCUKjHJJSHOE5nqOdXg9J6p2qJ6%2BNz8a2SAGqJGN%2FGywlqifTdzwSyl7DyuSwWgjp1vGwRVeu2d5sElySeCAks7LAYe0Z2eBIGjFHLcSkYZDYDCgfcZ%2BxxWTa%2F8S1JWXbRIuA9VAog27sDj93CXANr3Z5fEQS0x9EXY9M1IqNFg0nZtuLIjlVpgKmzhy4voPn09Y9Ee18zjZU%2B5pcsx7pR4AJScXMoO4U7gKr9bj96RpJhGJx6CnagB5lSLTbXT3r4wmU1nZ5P3U3UNSwb5Cq52b5TSqlg%2FA47SOvC0GNTFKif8erMFezApbDxa49s4cuL5XjWs48AW1Xk60CYZRmv1vz%2F%2BvWdiC0sStiI6BwkF78vCVlj3fV2Cxmen5NvE%2FxueYGhGxAAEyBgiyhG7vHh1RIfBtlKzzq9pidowQhRTCtcIs3J3V39FXWijQaJAjjTsLVS2WUNilszXSsk5CuWA3b8n2id84mhHf%2B2BVeu7h7YmP51TtwwxQiLoAOeSX%2B%2BSfyAq%2F6Q%2FNv7A9fiZwwh%2FarxAY6pgF10k7S5xBZxSZo5WJu6qtFTd%2BUsEVAkNoksZD8k7MQ7C82EVgY1rdbwfIvXygnmsZIJts4sgi9gSzJmZZr3nNwqFo1M8cdbw4y9MUTcRR8ln7R0TfdCL6dyqDeK1M%2FkyzVHilqjPzDOKaIlfMKUShrEj2P8me46YM%2BBMA7%2BP9lCgMFJ%2BZXOz%2BdJWtBjrUCIQlGJvL20JIJl8a26BePOJ5X1snKC1Eb&X-Amz-Signature=ed6e7c0c5131349c86fda6d324c64a3a3070a571f7f7d8a061e626d95a443f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V45D5ZN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUsJFeN6eCEbZ7Q7UzfCujI1zzsTUVjJmjeZ412FhGDAiEA1065w9sufRS54g55pZnP87BBj5axKKOiwpfycez1CVkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCy7I64iIcWM2hXIZircA8hxH0%2B53K7G%2BUjXWb%2BmYpaOyF3bNNdEcmzZAX%2F5U5VfTJtaczfFKbChL2t4sUhDBs9bxaEw7euoSTFPBh2Ua%2BT7YzBT3YefpnoWbmShtH8Q6iK2q3LTMBcAd8%2BQXHss0Hs5gzpTN2RvZjob033XKR%2Flob%2F2HQIwGDJSlhXNkBH5l6LFp2vcOdVVnrfg7P82K4vsUZDWSOwwP2i2ie08vc%2FBiHcIK853GSw0aXHPj4XLLRs43liRzrwqeXOuY%2FMvnWouajY5vVgw2g4BeN5DJD1uiIk%2BQK6ZlCq3reIp2YrupreSWvskROG64rzOr%2BG%2FZ3yD79I2hqqKWAeW4cQIfXdBPZ6zbSRs57xVAb8ZiHkXww%2BRElwJ%2BZKPOzV%2FaKtZFWFkAuVkSR8MW%2B2669jNfAv1QYXL0nAPk4QwltvvMIhuImK4TDQtBYO80GSprArIDIeC3mIaX7Ueo5G2%2F38UnIdNlnYoEYNaiQhcyk1Pa2N1y3iDd89fiiGNfqLgbbM9nYGaC%2BbRd9pW10tjsoDu7Cd8vTf5MM4j2VxWfNVGXFfVOnHfq2IJae3WFyFwTG2JZrnhFnJxTX3U9HWb%2Fdg3PvRxq2DanTSlUy1fhjOOfJE1iwsx2C7vvcGVDwZAMML1q8QGOqUBvLMl99d7JpN0XdpwieA4yRI1d%2BEcFgzwnrn8OpUrdmgf5RDIwr4s9KIltrapZaG6M%2BO1%2BOIxQFOfgzKLZ1B%2FFO6%2BP%2F3YDG81im51BMKrWNXYIUnAfD2SigbVEQ5fYXwrt2lm9fKA1HP6pjzm9WEBptWx0IHtVRd05WYXOMPn4QAqdRD57yX4GE5meq5sYe41pu3TB57jdj2cNDHUDrZBZqeyBROO&X-Amz-Signature=87f9b85964eb2e953ba9519a06cc77613367a5dacc714601e656f7e63314d42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4F47V4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFC0LCEZS69PfpL%2FX3gXu%2BCjCokPzHQ8L2q%2B5APApeMQIgSrpSiOh%2B%2FIBZSqFcXTpaUDukiMMUbK7LY%2FoaS1t8un0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFV4Btk9nYDcvYOYircA%2F%2BtwuIANRuVwG5UUtJkOGFKXls5BTK00xlKfSY97Yz%2B4JO5hYLztN5oTTbbKwkZv4nGq4bs3o9uSSu%2FXe2It2ykUIP2ysdPNHlB0yamZfdtbTeh2plFkjt6yYwcaeBlR5Z6QcmF9Eo2RGW%2B%2BXz%2Bx4o%2BgtU7kR0PncmO8JJf4fZ9gxdVXYZlGe3OXjHiI0dbZZGOyTksufUtw%2BNnlAA%2F52re%2BCOowAPofv49G2VmCi1F%2FYGdmB2gPC1MUXn9YbxUir3h1gMNdC85BlUhlePmT7szp2fcV9yGtaasHNe6U5HzMZFE3OwoGxmNWTO1joqo4lEd0JEmuR2B9qm0haNi3iiuuLmvTsXlzV88WznspqGX43pgH3TCXUfdkxSnSkFj5tf8PoN3Q%2Fnc0TND0U%2FOyp0txg3mmecLDt2%2FI1bNcUeFq%2BV4xeQIDGnFMSGjQXRWaJ0QS1Cjflba5gVNn9VOPedegcLi%2F52sEE1aMe7swRj45ulWr8oElENH58rzEp%2F2OhYrEv0g%2FC7l%2BRWgt7pNWTMNdIpgRWPV1TQOfr2FtHk1UH9jyl%2BeLzBqMg%2Bu3oKd8FWFeZV6xhCPf5%2Bfiwli9lp5FGhsFpNyYtZktqeG2kUKmqPh87dzlxmH362uMO71q8QGOqUBTKWYU%2BWEzHyHYqIxXZc8U8IQNhueqhnPihR7U7iW%2FbKUwQ9cM1h0ulhwdUyI%2FnYIRbF%2B46F%2BfpfMwn6FlMAUydc25%2BzkvVvqTsRbVYYQt30n8UJmaWR%2FI1xTJy6%2FidM1DIXjfoa%2FHtEjNc6s3NmhMT9I0KfcRBfx5gpX7aknqE%2B%2BvcQ2GFRKyu5C9Nb2d3cssu1%2BKVsc3yRtoe4w6kRUCQ30AnFw&X-Amz-Signature=954d4016878b6333b77a0005b460341a7aa9cf1d99756b3b7d6d5f6616e54bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4F47V4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFC0LCEZS69PfpL%2FX3gXu%2BCjCokPzHQ8L2q%2B5APApeMQIgSrpSiOh%2B%2FIBZSqFcXTpaUDukiMMUbK7LY%2FoaS1t8un0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFV4Btk9nYDcvYOYircA%2F%2BtwuIANRuVwG5UUtJkOGFKXls5BTK00xlKfSY97Yz%2B4JO5hYLztN5oTTbbKwkZv4nGq4bs3o9uSSu%2FXe2It2ykUIP2ysdPNHlB0yamZfdtbTeh2plFkjt6yYwcaeBlR5Z6QcmF9Eo2RGW%2B%2BXz%2Bx4o%2BgtU7kR0PncmO8JJf4fZ9gxdVXYZlGe3OXjHiI0dbZZGOyTksufUtw%2BNnlAA%2F52re%2BCOowAPofv49G2VmCi1F%2FYGdmB2gPC1MUXn9YbxUir3h1gMNdC85BlUhlePmT7szp2fcV9yGtaasHNe6U5HzMZFE3OwoGxmNWTO1joqo4lEd0JEmuR2B9qm0haNi3iiuuLmvTsXlzV88WznspqGX43pgH3TCXUfdkxSnSkFj5tf8PoN3Q%2Fnc0TND0U%2FOyp0txg3mmecLDt2%2FI1bNcUeFq%2BV4xeQIDGnFMSGjQXRWaJ0QS1Cjflba5gVNn9VOPedegcLi%2F52sEE1aMe7swRj45ulWr8oElENH58rzEp%2F2OhYrEv0g%2FC7l%2BRWgt7pNWTMNdIpgRWPV1TQOfr2FtHk1UH9jyl%2BeLzBqMg%2Bu3oKd8FWFeZV6xhCPf5%2Bfiwli9lp5FGhsFpNyYtZktqeG2kUKmqPh87dzlxmH362uMO71q8QGOqUBTKWYU%2BWEzHyHYqIxXZc8U8IQNhueqhnPihR7U7iW%2FbKUwQ9cM1h0ulhwdUyI%2FnYIRbF%2B46F%2BfpfMwn6FlMAUydc25%2BzkvVvqTsRbVYYQt30n8UJmaWR%2FI1xTJy6%2FidM1DIXjfoa%2FHtEjNc6s3NmhMT9I0KfcRBfx5gpX7aknqE%2B%2BvcQ2GFRKyu5C9Nb2d3cssu1%2BKVsc3yRtoe4w6kRUCQ30AnFw&X-Amz-Signature=56dbffb3e2e3cde4b13d02f6407a6ff327ad2e89fe193bed49146659e0da8ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4F47V4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFC0LCEZS69PfpL%2FX3gXu%2BCjCokPzHQ8L2q%2B5APApeMQIgSrpSiOh%2B%2FIBZSqFcXTpaUDukiMMUbK7LY%2FoaS1t8un0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFV4Btk9nYDcvYOYircA%2F%2BtwuIANRuVwG5UUtJkOGFKXls5BTK00xlKfSY97Yz%2B4JO5hYLztN5oTTbbKwkZv4nGq4bs3o9uSSu%2FXe2It2ykUIP2ysdPNHlB0yamZfdtbTeh2plFkjt6yYwcaeBlR5Z6QcmF9Eo2RGW%2B%2BXz%2Bx4o%2BgtU7kR0PncmO8JJf4fZ9gxdVXYZlGe3OXjHiI0dbZZGOyTksufUtw%2BNnlAA%2F52re%2BCOowAPofv49G2VmCi1F%2FYGdmB2gPC1MUXn9YbxUir3h1gMNdC85BlUhlePmT7szp2fcV9yGtaasHNe6U5HzMZFE3OwoGxmNWTO1joqo4lEd0JEmuR2B9qm0haNi3iiuuLmvTsXlzV88WznspqGX43pgH3TCXUfdkxSnSkFj5tf8PoN3Q%2Fnc0TND0U%2FOyp0txg3mmecLDt2%2FI1bNcUeFq%2BV4xeQIDGnFMSGjQXRWaJ0QS1Cjflba5gVNn9VOPedegcLi%2F52sEE1aMe7swRj45ulWr8oElENH58rzEp%2F2OhYrEv0g%2FC7l%2BRWgt7pNWTMNdIpgRWPV1TQOfr2FtHk1UH9jyl%2BeLzBqMg%2Bu3oKd8FWFeZV6xhCPf5%2Bfiwli9lp5FGhsFpNyYtZktqeG2kUKmqPh87dzlxmH362uMO71q8QGOqUBTKWYU%2BWEzHyHYqIxXZc8U8IQNhueqhnPihR7U7iW%2FbKUwQ9cM1h0ulhwdUyI%2FnYIRbF%2B46F%2BfpfMwn6FlMAUydc25%2BzkvVvqTsRbVYYQt30n8UJmaWR%2FI1xTJy6%2FidM1DIXjfoa%2FHtEjNc6s3NmhMT9I0KfcRBfx5gpX7aknqE%2B%2BvcQ2GFRKyu5C9Nb2d3cssu1%2BKVsc3yRtoe4w6kRUCQ30AnFw&X-Amz-Signature=5e368fa5d1f02e9c2a89e99bd72be34ba08a095e61b89d968b59a42a357fcfde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4F47V4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFC0LCEZS69PfpL%2FX3gXu%2BCjCokPzHQ8L2q%2B5APApeMQIgSrpSiOh%2B%2FIBZSqFcXTpaUDukiMMUbK7LY%2FoaS1t8un0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFV4Btk9nYDcvYOYircA%2F%2BtwuIANRuVwG5UUtJkOGFKXls5BTK00xlKfSY97Yz%2B4JO5hYLztN5oTTbbKwkZv4nGq4bs3o9uSSu%2FXe2It2ykUIP2ysdPNHlB0yamZfdtbTeh2plFkjt6yYwcaeBlR5Z6QcmF9Eo2RGW%2B%2BXz%2Bx4o%2BgtU7kR0PncmO8JJf4fZ9gxdVXYZlGe3OXjHiI0dbZZGOyTksufUtw%2BNnlAA%2F52re%2BCOowAPofv49G2VmCi1F%2FYGdmB2gPC1MUXn9YbxUir3h1gMNdC85BlUhlePmT7szp2fcV9yGtaasHNe6U5HzMZFE3OwoGxmNWTO1joqo4lEd0JEmuR2B9qm0haNi3iiuuLmvTsXlzV88WznspqGX43pgH3TCXUfdkxSnSkFj5tf8PoN3Q%2Fnc0TND0U%2FOyp0txg3mmecLDt2%2FI1bNcUeFq%2BV4xeQIDGnFMSGjQXRWaJ0QS1Cjflba5gVNn9VOPedegcLi%2F52sEE1aMe7swRj45ulWr8oElENH58rzEp%2F2OhYrEv0g%2FC7l%2BRWgt7pNWTMNdIpgRWPV1TQOfr2FtHk1UH9jyl%2BeLzBqMg%2Bu3oKd8FWFeZV6xhCPf5%2Bfiwli9lp5FGhsFpNyYtZktqeG2kUKmqPh87dzlxmH362uMO71q8QGOqUBTKWYU%2BWEzHyHYqIxXZc8U8IQNhueqhnPihR7U7iW%2FbKUwQ9cM1h0ulhwdUyI%2FnYIRbF%2B46F%2BfpfMwn6FlMAUydc25%2BzkvVvqTsRbVYYQt30n8UJmaWR%2FI1xTJy6%2FidM1DIXjfoa%2FHtEjNc6s3NmhMT9I0KfcRBfx5gpX7aknqE%2B%2BvcQ2GFRKyu5C9Nb2d3cssu1%2BKVsc3yRtoe4w6kRUCQ30AnFw&X-Amz-Signature=7509eced01887db1c3d7bd41826b0f5c62ae63264c431b66caef375791ffe68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4F47V4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFC0LCEZS69PfpL%2FX3gXu%2BCjCokPzHQ8L2q%2B5APApeMQIgSrpSiOh%2B%2FIBZSqFcXTpaUDukiMMUbK7LY%2FoaS1t8un0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFV4Btk9nYDcvYOYircA%2F%2BtwuIANRuVwG5UUtJkOGFKXls5BTK00xlKfSY97Yz%2B4JO5hYLztN5oTTbbKwkZv4nGq4bs3o9uSSu%2FXe2It2ykUIP2ysdPNHlB0yamZfdtbTeh2plFkjt6yYwcaeBlR5Z6QcmF9Eo2RGW%2B%2BXz%2Bx4o%2BgtU7kR0PncmO8JJf4fZ9gxdVXYZlGe3OXjHiI0dbZZGOyTksufUtw%2BNnlAA%2F52re%2BCOowAPofv49G2VmCi1F%2FYGdmB2gPC1MUXn9YbxUir3h1gMNdC85BlUhlePmT7szp2fcV9yGtaasHNe6U5HzMZFE3OwoGxmNWTO1joqo4lEd0JEmuR2B9qm0haNi3iiuuLmvTsXlzV88WznspqGX43pgH3TCXUfdkxSnSkFj5tf8PoN3Q%2Fnc0TND0U%2FOyp0txg3mmecLDt2%2FI1bNcUeFq%2BV4xeQIDGnFMSGjQXRWaJ0QS1Cjflba5gVNn9VOPedegcLi%2F52sEE1aMe7swRj45ulWr8oElENH58rzEp%2F2OhYrEv0g%2FC7l%2BRWgt7pNWTMNdIpgRWPV1TQOfr2FtHk1UH9jyl%2BeLzBqMg%2Bu3oKd8FWFeZV6xhCPf5%2Bfiwli9lp5FGhsFpNyYtZktqeG2kUKmqPh87dzlxmH362uMO71q8QGOqUBTKWYU%2BWEzHyHYqIxXZc8U8IQNhueqhnPihR7U7iW%2FbKUwQ9cM1h0ulhwdUyI%2FnYIRbF%2B46F%2BfpfMwn6FlMAUydc25%2BzkvVvqTsRbVYYQt30n8UJmaWR%2FI1xTJy6%2FidM1DIXjfoa%2FHtEjNc6s3NmhMT9I0KfcRBfx5gpX7aknqE%2B%2BvcQ2GFRKyu5C9Nb2d3cssu1%2BKVsc3yRtoe4w6kRUCQ30AnFw&X-Amz-Signature=97aa62e3242f371669deaa77487160eaacfd18c04786b23c850d37b5dbe39b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4F47V4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFC0LCEZS69PfpL%2FX3gXu%2BCjCokPzHQ8L2q%2B5APApeMQIgSrpSiOh%2B%2FIBZSqFcXTpaUDukiMMUbK7LY%2FoaS1t8un0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFV4Btk9nYDcvYOYircA%2F%2BtwuIANRuVwG5UUtJkOGFKXls5BTK00xlKfSY97Yz%2B4JO5hYLztN5oTTbbKwkZv4nGq4bs3o9uSSu%2FXe2It2ykUIP2ysdPNHlB0yamZfdtbTeh2plFkjt6yYwcaeBlR5Z6QcmF9Eo2RGW%2B%2BXz%2Bx4o%2BgtU7kR0PncmO8JJf4fZ9gxdVXYZlGe3OXjHiI0dbZZGOyTksufUtw%2BNnlAA%2F52re%2BCOowAPofv49G2VmCi1F%2FYGdmB2gPC1MUXn9YbxUir3h1gMNdC85BlUhlePmT7szp2fcV9yGtaasHNe6U5HzMZFE3OwoGxmNWTO1joqo4lEd0JEmuR2B9qm0haNi3iiuuLmvTsXlzV88WznspqGX43pgH3TCXUfdkxSnSkFj5tf8PoN3Q%2Fnc0TND0U%2FOyp0txg3mmecLDt2%2FI1bNcUeFq%2BV4xeQIDGnFMSGjQXRWaJ0QS1Cjflba5gVNn9VOPedegcLi%2F52sEE1aMe7swRj45ulWr8oElENH58rzEp%2F2OhYrEv0g%2FC7l%2BRWgt7pNWTMNdIpgRWPV1TQOfr2FtHk1UH9jyl%2BeLzBqMg%2Bu3oKd8FWFeZV6xhCPf5%2Bfiwli9lp5FGhsFpNyYtZktqeG2kUKmqPh87dzlxmH362uMO71q8QGOqUBTKWYU%2BWEzHyHYqIxXZc8U8IQNhueqhnPihR7U7iW%2FbKUwQ9cM1h0ulhwdUyI%2FnYIRbF%2B46F%2BfpfMwn6FlMAUydc25%2BzkvVvqTsRbVYYQt30n8UJmaWR%2FI1xTJy6%2FidM1DIXjfoa%2FHtEjNc6s3NmhMT9I0KfcRBfx5gpX7aknqE%2B%2BvcQ2GFRKyu5C9Nb2d3cssu1%2BKVsc3yRtoe4w6kRUCQ30AnFw&X-Amz-Signature=d563a5f855768b73388902ed5a81f7073981f2632c4f16a23a7a9273afc064d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4F47V4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFC0LCEZS69PfpL%2FX3gXu%2BCjCokPzHQ8L2q%2B5APApeMQIgSrpSiOh%2B%2FIBZSqFcXTpaUDukiMMUbK7LY%2FoaS1t8un0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFV4Btk9nYDcvYOYircA%2F%2BtwuIANRuVwG5UUtJkOGFKXls5BTK00xlKfSY97Yz%2B4JO5hYLztN5oTTbbKwkZv4nGq4bs3o9uSSu%2FXe2It2ykUIP2ysdPNHlB0yamZfdtbTeh2plFkjt6yYwcaeBlR5Z6QcmF9Eo2RGW%2B%2BXz%2Bx4o%2BgtU7kR0PncmO8JJf4fZ9gxdVXYZlGe3OXjHiI0dbZZGOyTksufUtw%2BNnlAA%2F52re%2BCOowAPofv49G2VmCi1F%2FYGdmB2gPC1MUXn9YbxUir3h1gMNdC85BlUhlePmT7szp2fcV9yGtaasHNe6U5HzMZFE3OwoGxmNWTO1joqo4lEd0JEmuR2B9qm0haNi3iiuuLmvTsXlzV88WznspqGX43pgH3TCXUfdkxSnSkFj5tf8PoN3Q%2Fnc0TND0U%2FOyp0txg3mmecLDt2%2FI1bNcUeFq%2BV4xeQIDGnFMSGjQXRWaJ0QS1Cjflba5gVNn9VOPedegcLi%2F52sEE1aMe7swRj45ulWr8oElENH58rzEp%2F2OhYrEv0g%2FC7l%2BRWgt7pNWTMNdIpgRWPV1TQOfr2FtHk1UH9jyl%2BeLzBqMg%2Bu3oKd8FWFeZV6xhCPf5%2Bfiwli9lp5FGhsFpNyYtZktqeG2kUKmqPh87dzlxmH362uMO71q8QGOqUBTKWYU%2BWEzHyHYqIxXZc8U8IQNhueqhnPihR7U7iW%2FbKUwQ9cM1h0ulhwdUyI%2FnYIRbF%2B46F%2BfpfMwn6FlMAUydc25%2BzkvVvqTsRbVYYQt30n8UJmaWR%2FI1xTJy6%2FidM1DIXjfoa%2FHtEjNc6s3NmhMT9I0KfcRBfx5gpX7aknqE%2B%2BvcQ2GFRKyu5C9Nb2d3cssu1%2BKVsc3yRtoe4w6kRUCQ30AnFw&X-Amz-Signature=18120bff8fb03f70d62cf697873f960fa74fb78ed2bda4b8f58986fbc4970564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4F47V4X%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFC0LCEZS69PfpL%2FX3gXu%2BCjCokPzHQ8L2q%2B5APApeMQIgSrpSiOh%2B%2FIBZSqFcXTpaUDukiMMUbK7LY%2FoaS1t8un0qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFV4Btk9nYDcvYOYircA%2F%2BtwuIANRuVwG5UUtJkOGFKXls5BTK00xlKfSY97Yz%2B4JO5hYLztN5oTTbbKwkZv4nGq4bs3o9uSSu%2FXe2It2ykUIP2ysdPNHlB0yamZfdtbTeh2plFkjt6yYwcaeBlR5Z6QcmF9Eo2RGW%2B%2BXz%2Bx4o%2BgtU7kR0PncmO8JJf4fZ9gxdVXYZlGe3OXjHiI0dbZZGOyTksufUtw%2BNnlAA%2F52re%2BCOowAPofv49G2VmCi1F%2FYGdmB2gPC1MUXn9YbxUir3h1gMNdC85BlUhlePmT7szp2fcV9yGtaasHNe6U5HzMZFE3OwoGxmNWTO1joqo4lEd0JEmuR2B9qm0haNi3iiuuLmvTsXlzV88WznspqGX43pgH3TCXUfdkxSnSkFj5tf8PoN3Q%2Fnc0TND0U%2FOyp0txg3mmecLDt2%2FI1bNcUeFq%2BV4xeQIDGnFMSGjQXRWaJ0QS1Cjflba5gVNn9VOPedegcLi%2F52sEE1aMe7swRj45ulWr8oElENH58rzEp%2F2OhYrEv0g%2FC7l%2BRWgt7pNWTMNdIpgRWPV1TQOfr2FtHk1UH9jyl%2BeLzBqMg%2Bu3oKd8FWFeZV6xhCPf5%2Bfiwli9lp5FGhsFpNyYtZktqeG2kUKmqPh87dzlxmH362uMO71q8QGOqUBTKWYU%2BWEzHyHYqIxXZc8U8IQNhueqhnPihR7U7iW%2FbKUwQ9cM1h0ulhwdUyI%2FnYIRbF%2B46F%2BfpfMwn6FlMAUydc25%2BzkvVvqTsRbVYYQt30n8UJmaWR%2FI1xTJy6%2FidM1DIXjfoa%2FHtEjNc6s3NmhMT9I0KfcRBfx5gpX7aknqE%2B%2BvcQ2GFRKyu5C9Nb2d3cssu1%2BKVsc3yRtoe4w6kRUCQ30AnFw&X-Amz-Signature=c783bf01aa14d4bc04c4328f3e0f42ac3e0683332941ce2b7feadf6a6c84bf04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
