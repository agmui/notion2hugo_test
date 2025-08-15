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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SPQ66Q%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICBSOXXV%2FKg7fA92k0iWoSvfREpy2LwdDNI0A5jQHMiVAiAudXYkWb52lDLxtOVefbbKaj5VydDeE5J0LNge1ikHGir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqmPf3OYxulV5SFMOKtwDcAvzBP5r%2Fw145l0Tbs7GlZFQtGPcKGeQKrE2fN2Dt8LCkWaFo0P5crRtlkuCh91U0zZZIs5T9vY%2BWyCu87ij%2FRcKeq%2BVlginyDjME07YLqvMQbQtf73va%2Fsi%2B79oEqRVYGKc%2BgDbF3B7fMp%2F3zMiOoRzfdeb9JZX671Bm9W%2BTiimOuqFkQFRudef%2Fs%2FtY%2Fj6LCVSpQ4PONv4YoJPyv3ETdPx0rrBeveSf9DnbzlaR6rcm6I65LI8vJfT6HoVwl0E4szjeRSdtyPx43myWcFYAOOfQzLAuAdZT7FKpEDs9aqqiT7f5JS4GfGUyQf8JVLc96pq0xdTxrRfY3F146mQ09GxB2nu3H2cn%2Fp2qaRjTOTeAiM7KftP2vURVRihUIc2DAg4QKKdZNzjFaStuM7JpnpM6a5lGwiht3m7w2wH5d4rjWcoakxUd6bw09569OwpPpCNas3fhpEcRxideGLD0AncquJAvatJcvZo0s4IDTkTP1uEzS7fl4tx7TVAuhpwYZABSeXeMCUSp%2FuLITQ9TO7MYFB863FAYB53CZuZuq9xAlhpiqm7IVwuz%2BwS8AgWeSVpU6gj%2BTdKI8TFAXeBCGay%2BV%2BoPn73COveW79nD5CN8gwm73GN4qaMPj4wlLX9xAY6pgEmLlFjw71mO3NK0VztL4pvY46gOYVF%2FCW2xTf78GnqSjhYPZqX0A3OxqDnGf3471dujwCqCPDV2JZGxaxESjy0tYi45l%2BOUo4vAZDNHJsId8PXBrnu32SKaK3X4f3GPrEFcRVZljUEN82W7pJii%2FhyC%2BZUWgK7I1SJ3rb6kLx7EfWoLa6QKff20llD7do%2BKMrIEUboYIKutYGZNh5s6ZN6kRyDjfjt&X-Amz-Signature=62b4dc344789dfb45cf9052cd95f5c4aea8c7e4019e4c9ed5351337e14ba22f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SPQ66Q%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICBSOXXV%2FKg7fA92k0iWoSvfREpy2LwdDNI0A5jQHMiVAiAudXYkWb52lDLxtOVefbbKaj5VydDeE5J0LNge1ikHGir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqmPf3OYxulV5SFMOKtwDcAvzBP5r%2Fw145l0Tbs7GlZFQtGPcKGeQKrE2fN2Dt8LCkWaFo0P5crRtlkuCh91U0zZZIs5T9vY%2BWyCu87ij%2FRcKeq%2BVlginyDjME07YLqvMQbQtf73va%2Fsi%2B79oEqRVYGKc%2BgDbF3B7fMp%2F3zMiOoRzfdeb9JZX671Bm9W%2BTiimOuqFkQFRudef%2Fs%2FtY%2Fj6LCVSpQ4PONv4YoJPyv3ETdPx0rrBeveSf9DnbzlaR6rcm6I65LI8vJfT6HoVwl0E4szjeRSdtyPx43myWcFYAOOfQzLAuAdZT7FKpEDs9aqqiT7f5JS4GfGUyQf8JVLc96pq0xdTxrRfY3F146mQ09GxB2nu3H2cn%2Fp2qaRjTOTeAiM7KftP2vURVRihUIc2DAg4QKKdZNzjFaStuM7JpnpM6a5lGwiht3m7w2wH5d4rjWcoakxUd6bw09569OwpPpCNas3fhpEcRxideGLD0AncquJAvatJcvZo0s4IDTkTP1uEzS7fl4tx7TVAuhpwYZABSeXeMCUSp%2FuLITQ9TO7MYFB863FAYB53CZuZuq9xAlhpiqm7IVwuz%2BwS8AgWeSVpU6gj%2BTdKI8TFAXeBCGay%2BV%2BoPn73COveW79nD5CN8gwm73GN4qaMPj4wlLX9xAY6pgEmLlFjw71mO3NK0VztL4pvY46gOYVF%2FCW2xTf78GnqSjhYPZqX0A3OxqDnGf3471dujwCqCPDV2JZGxaxESjy0tYi45l%2BOUo4vAZDNHJsId8PXBrnu32SKaK3X4f3GPrEFcRVZljUEN82W7pJii%2FhyC%2BZUWgK7I1SJ3rb6kLx7EfWoLa6QKff20llD7do%2BKMrIEUboYIKutYGZNh5s6ZN6kRyDjfjt&X-Amz-Signature=8ee5f403b07cf64606cd2b08697bb33db39ec10d64ff6c8320a4618b5d34993f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SPQ66Q%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICBSOXXV%2FKg7fA92k0iWoSvfREpy2LwdDNI0A5jQHMiVAiAudXYkWb52lDLxtOVefbbKaj5VydDeE5J0LNge1ikHGir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqmPf3OYxulV5SFMOKtwDcAvzBP5r%2Fw145l0Tbs7GlZFQtGPcKGeQKrE2fN2Dt8LCkWaFo0P5crRtlkuCh91U0zZZIs5T9vY%2BWyCu87ij%2FRcKeq%2BVlginyDjME07YLqvMQbQtf73va%2Fsi%2B79oEqRVYGKc%2BgDbF3B7fMp%2F3zMiOoRzfdeb9JZX671Bm9W%2BTiimOuqFkQFRudef%2Fs%2FtY%2Fj6LCVSpQ4PONv4YoJPyv3ETdPx0rrBeveSf9DnbzlaR6rcm6I65LI8vJfT6HoVwl0E4szjeRSdtyPx43myWcFYAOOfQzLAuAdZT7FKpEDs9aqqiT7f5JS4GfGUyQf8JVLc96pq0xdTxrRfY3F146mQ09GxB2nu3H2cn%2Fp2qaRjTOTeAiM7KftP2vURVRihUIc2DAg4QKKdZNzjFaStuM7JpnpM6a5lGwiht3m7w2wH5d4rjWcoakxUd6bw09569OwpPpCNas3fhpEcRxideGLD0AncquJAvatJcvZo0s4IDTkTP1uEzS7fl4tx7TVAuhpwYZABSeXeMCUSp%2FuLITQ9TO7MYFB863FAYB53CZuZuq9xAlhpiqm7IVwuz%2BwS8AgWeSVpU6gj%2BTdKI8TFAXeBCGay%2BV%2BoPn73COveW79nD5CN8gwm73GN4qaMPj4wlLX9xAY6pgEmLlFjw71mO3NK0VztL4pvY46gOYVF%2FCW2xTf78GnqSjhYPZqX0A3OxqDnGf3471dujwCqCPDV2JZGxaxESjy0tYi45l%2BOUo4vAZDNHJsId8PXBrnu32SKaK3X4f3GPrEFcRVZljUEN82W7pJii%2FhyC%2BZUWgK7I1SJ3rb6kLx7EfWoLa6QKff20llD7do%2BKMrIEUboYIKutYGZNh5s6ZN6kRyDjfjt&X-Amz-Signature=30d9e9f857b434ebe4f0ddaf676dea7fc8958750fed5a63f62091296edb10af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SPQ66Q%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICBSOXXV%2FKg7fA92k0iWoSvfREpy2LwdDNI0A5jQHMiVAiAudXYkWb52lDLxtOVefbbKaj5VydDeE5J0LNge1ikHGir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqmPf3OYxulV5SFMOKtwDcAvzBP5r%2Fw145l0Tbs7GlZFQtGPcKGeQKrE2fN2Dt8LCkWaFo0P5crRtlkuCh91U0zZZIs5T9vY%2BWyCu87ij%2FRcKeq%2BVlginyDjME07YLqvMQbQtf73va%2Fsi%2B79oEqRVYGKc%2BgDbF3B7fMp%2F3zMiOoRzfdeb9JZX671Bm9W%2BTiimOuqFkQFRudef%2Fs%2FtY%2Fj6LCVSpQ4PONv4YoJPyv3ETdPx0rrBeveSf9DnbzlaR6rcm6I65LI8vJfT6HoVwl0E4szjeRSdtyPx43myWcFYAOOfQzLAuAdZT7FKpEDs9aqqiT7f5JS4GfGUyQf8JVLc96pq0xdTxrRfY3F146mQ09GxB2nu3H2cn%2Fp2qaRjTOTeAiM7KftP2vURVRihUIc2DAg4QKKdZNzjFaStuM7JpnpM6a5lGwiht3m7w2wH5d4rjWcoakxUd6bw09569OwpPpCNas3fhpEcRxideGLD0AncquJAvatJcvZo0s4IDTkTP1uEzS7fl4tx7TVAuhpwYZABSeXeMCUSp%2FuLITQ9TO7MYFB863FAYB53CZuZuq9xAlhpiqm7IVwuz%2BwS8AgWeSVpU6gj%2BTdKI8TFAXeBCGay%2BV%2BoPn73COveW79nD5CN8gwm73GN4qaMPj4wlLX9xAY6pgEmLlFjw71mO3NK0VztL4pvY46gOYVF%2FCW2xTf78GnqSjhYPZqX0A3OxqDnGf3471dujwCqCPDV2JZGxaxESjy0tYi45l%2BOUo4vAZDNHJsId8PXBrnu32SKaK3X4f3GPrEFcRVZljUEN82W7pJii%2FhyC%2BZUWgK7I1SJ3rb6kLx7EfWoLa6QKff20llD7do%2BKMrIEUboYIKutYGZNh5s6ZN6kRyDjfjt&X-Amz-Signature=93114240842e758a2122df42ae53a624dd0ae832b803569f059faae5761b54be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SPQ66Q%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICBSOXXV%2FKg7fA92k0iWoSvfREpy2LwdDNI0A5jQHMiVAiAudXYkWb52lDLxtOVefbbKaj5VydDeE5J0LNge1ikHGir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqmPf3OYxulV5SFMOKtwDcAvzBP5r%2Fw145l0Tbs7GlZFQtGPcKGeQKrE2fN2Dt8LCkWaFo0P5crRtlkuCh91U0zZZIs5T9vY%2BWyCu87ij%2FRcKeq%2BVlginyDjME07YLqvMQbQtf73va%2Fsi%2B79oEqRVYGKc%2BgDbF3B7fMp%2F3zMiOoRzfdeb9JZX671Bm9W%2BTiimOuqFkQFRudef%2Fs%2FtY%2Fj6LCVSpQ4PONv4YoJPyv3ETdPx0rrBeveSf9DnbzlaR6rcm6I65LI8vJfT6HoVwl0E4szjeRSdtyPx43myWcFYAOOfQzLAuAdZT7FKpEDs9aqqiT7f5JS4GfGUyQf8JVLc96pq0xdTxrRfY3F146mQ09GxB2nu3H2cn%2Fp2qaRjTOTeAiM7KftP2vURVRihUIc2DAg4QKKdZNzjFaStuM7JpnpM6a5lGwiht3m7w2wH5d4rjWcoakxUd6bw09569OwpPpCNas3fhpEcRxideGLD0AncquJAvatJcvZo0s4IDTkTP1uEzS7fl4tx7TVAuhpwYZABSeXeMCUSp%2FuLITQ9TO7MYFB863FAYB53CZuZuq9xAlhpiqm7IVwuz%2BwS8AgWeSVpU6gj%2BTdKI8TFAXeBCGay%2BV%2BoPn73COveW79nD5CN8gwm73GN4qaMPj4wlLX9xAY6pgEmLlFjw71mO3NK0VztL4pvY46gOYVF%2FCW2xTf78GnqSjhYPZqX0A3OxqDnGf3471dujwCqCPDV2JZGxaxESjy0tYi45l%2BOUo4vAZDNHJsId8PXBrnu32SKaK3X4f3GPrEFcRVZljUEN82W7pJii%2FhyC%2BZUWgK7I1SJ3rb6kLx7EfWoLa6QKff20llD7do%2BKMrIEUboYIKutYGZNh5s6ZN6kRyDjfjt&X-Amz-Signature=b1b6fd3882b67b9b6ae18e54e5f5af1f593fc59b3cc1f8a0253489cc9e058e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SPQ66Q%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICBSOXXV%2FKg7fA92k0iWoSvfREpy2LwdDNI0A5jQHMiVAiAudXYkWb52lDLxtOVefbbKaj5VydDeE5J0LNge1ikHGir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqmPf3OYxulV5SFMOKtwDcAvzBP5r%2Fw145l0Tbs7GlZFQtGPcKGeQKrE2fN2Dt8LCkWaFo0P5crRtlkuCh91U0zZZIs5T9vY%2BWyCu87ij%2FRcKeq%2BVlginyDjME07YLqvMQbQtf73va%2Fsi%2B79oEqRVYGKc%2BgDbF3B7fMp%2F3zMiOoRzfdeb9JZX671Bm9W%2BTiimOuqFkQFRudef%2Fs%2FtY%2Fj6LCVSpQ4PONv4YoJPyv3ETdPx0rrBeveSf9DnbzlaR6rcm6I65LI8vJfT6HoVwl0E4szjeRSdtyPx43myWcFYAOOfQzLAuAdZT7FKpEDs9aqqiT7f5JS4GfGUyQf8JVLc96pq0xdTxrRfY3F146mQ09GxB2nu3H2cn%2Fp2qaRjTOTeAiM7KftP2vURVRihUIc2DAg4QKKdZNzjFaStuM7JpnpM6a5lGwiht3m7w2wH5d4rjWcoakxUd6bw09569OwpPpCNas3fhpEcRxideGLD0AncquJAvatJcvZo0s4IDTkTP1uEzS7fl4tx7TVAuhpwYZABSeXeMCUSp%2FuLITQ9TO7MYFB863FAYB53CZuZuq9xAlhpiqm7IVwuz%2BwS8AgWeSVpU6gj%2BTdKI8TFAXeBCGay%2BV%2BoPn73COveW79nD5CN8gwm73GN4qaMPj4wlLX9xAY6pgEmLlFjw71mO3NK0VztL4pvY46gOYVF%2FCW2xTf78GnqSjhYPZqX0A3OxqDnGf3471dujwCqCPDV2JZGxaxESjy0tYi45l%2BOUo4vAZDNHJsId8PXBrnu32SKaK3X4f3GPrEFcRVZljUEN82W7pJii%2FhyC%2BZUWgK7I1SJ3rb6kLx7EfWoLa6QKff20llD7do%2BKMrIEUboYIKutYGZNh5s6ZN6kRyDjfjt&X-Amz-Signature=b0fc100ce025b75528d63602034c5402675c9e926bce7b7e70958eb1e4899f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SPQ66Q%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICBSOXXV%2FKg7fA92k0iWoSvfREpy2LwdDNI0A5jQHMiVAiAudXYkWb52lDLxtOVefbbKaj5VydDeE5J0LNge1ikHGir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqmPf3OYxulV5SFMOKtwDcAvzBP5r%2Fw145l0Tbs7GlZFQtGPcKGeQKrE2fN2Dt8LCkWaFo0P5crRtlkuCh91U0zZZIs5T9vY%2BWyCu87ij%2FRcKeq%2BVlginyDjME07YLqvMQbQtf73va%2Fsi%2B79oEqRVYGKc%2BgDbF3B7fMp%2F3zMiOoRzfdeb9JZX671Bm9W%2BTiimOuqFkQFRudef%2Fs%2FtY%2Fj6LCVSpQ4PONv4YoJPyv3ETdPx0rrBeveSf9DnbzlaR6rcm6I65LI8vJfT6HoVwl0E4szjeRSdtyPx43myWcFYAOOfQzLAuAdZT7FKpEDs9aqqiT7f5JS4GfGUyQf8JVLc96pq0xdTxrRfY3F146mQ09GxB2nu3H2cn%2Fp2qaRjTOTeAiM7KftP2vURVRihUIc2DAg4QKKdZNzjFaStuM7JpnpM6a5lGwiht3m7w2wH5d4rjWcoakxUd6bw09569OwpPpCNas3fhpEcRxideGLD0AncquJAvatJcvZo0s4IDTkTP1uEzS7fl4tx7TVAuhpwYZABSeXeMCUSp%2FuLITQ9TO7MYFB863FAYB53CZuZuq9xAlhpiqm7IVwuz%2BwS8AgWeSVpU6gj%2BTdKI8TFAXeBCGay%2BV%2BoPn73COveW79nD5CN8gwm73GN4qaMPj4wlLX9xAY6pgEmLlFjw71mO3NK0VztL4pvY46gOYVF%2FCW2xTf78GnqSjhYPZqX0A3OxqDnGf3471dujwCqCPDV2JZGxaxESjy0tYi45l%2BOUo4vAZDNHJsId8PXBrnu32SKaK3X4f3GPrEFcRVZljUEN82W7pJii%2FhyC%2BZUWgK7I1SJ3rb6kLx7EfWoLa6QKff20llD7do%2BKMrIEUboYIKutYGZNh5s6ZN6kRyDjfjt&X-Amz-Signature=e5e73569779bf029d279ced0f678f6be8120d47662a0764c3015e354d9f9ceb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SPQ66Q%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICBSOXXV%2FKg7fA92k0iWoSvfREpy2LwdDNI0A5jQHMiVAiAudXYkWb52lDLxtOVefbbKaj5VydDeE5J0LNge1ikHGir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqmPf3OYxulV5SFMOKtwDcAvzBP5r%2Fw145l0Tbs7GlZFQtGPcKGeQKrE2fN2Dt8LCkWaFo0P5crRtlkuCh91U0zZZIs5T9vY%2BWyCu87ij%2FRcKeq%2BVlginyDjME07YLqvMQbQtf73va%2Fsi%2B79oEqRVYGKc%2BgDbF3B7fMp%2F3zMiOoRzfdeb9JZX671Bm9W%2BTiimOuqFkQFRudef%2Fs%2FtY%2Fj6LCVSpQ4PONv4YoJPyv3ETdPx0rrBeveSf9DnbzlaR6rcm6I65LI8vJfT6HoVwl0E4szjeRSdtyPx43myWcFYAOOfQzLAuAdZT7FKpEDs9aqqiT7f5JS4GfGUyQf8JVLc96pq0xdTxrRfY3F146mQ09GxB2nu3H2cn%2Fp2qaRjTOTeAiM7KftP2vURVRihUIc2DAg4QKKdZNzjFaStuM7JpnpM6a5lGwiht3m7w2wH5d4rjWcoakxUd6bw09569OwpPpCNas3fhpEcRxideGLD0AncquJAvatJcvZo0s4IDTkTP1uEzS7fl4tx7TVAuhpwYZABSeXeMCUSp%2FuLITQ9TO7MYFB863FAYB53CZuZuq9xAlhpiqm7IVwuz%2BwS8AgWeSVpU6gj%2BTdKI8TFAXeBCGay%2BV%2BoPn73COveW79nD5CN8gwm73GN4qaMPj4wlLX9xAY6pgEmLlFjw71mO3NK0VztL4pvY46gOYVF%2FCW2xTf78GnqSjhYPZqX0A3OxqDnGf3471dujwCqCPDV2JZGxaxESjy0tYi45l%2BOUo4vAZDNHJsId8PXBrnu32SKaK3X4f3GPrEFcRVZljUEN82W7pJii%2FhyC%2BZUWgK7I1SJ3rb6kLx7EfWoLa6QKff20llD7do%2BKMrIEUboYIKutYGZNh5s6ZN6kRyDjfjt&X-Amz-Signature=40d3607af715f7907551ba93579eb85e30c0388d65b3d32fd7b5307d1d4f9021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SPQ66Q%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICBSOXXV%2FKg7fA92k0iWoSvfREpy2LwdDNI0A5jQHMiVAiAudXYkWb52lDLxtOVefbbKaj5VydDeE5J0LNge1ikHGir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqmPf3OYxulV5SFMOKtwDcAvzBP5r%2Fw145l0Tbs7GlZFQtGPcKGeQKrE2fN2Dt8LCkWaFo0P5crRtlkuCh91U0zZZIs5T9vY%2BWyCu87ij%2FRcKeq%2BVlginyDjME07YLqvMQbQtf73va%2Fsi%2B79oEqRVYGKc%2BgDbF3B7fMp%2F3zMiOoRzfdeb9JZX671Bm9W%2BTiimOuqFkQFRudef%2Fs%2FtY%2Fj6LCVSpQ4PONv4YoJPyv3ETdPx0rrBeveSf9DnbzlaR6rcm6I65LI8vJfT6HoVwl0E4szjeRSdtyPx43myWcFYAOOfQzLAuAdZT7FKpEDs9aqqiT7f5JS4GfGUyQf8JVLc96pq0xdTxrRfY3F146mQ09GxB2nu3H2cn%2Fp2qaRjTOTeAiM7KftP2vURVRihUIc2DAg4QKKdZNzjFaStuM7JpnpM6a5lGwiht3m7w2wH5d4rjWcoakxUd6bw09569OwpPpCNas3fhpEcRxideGLD0AncquJAvatJcvZo0s4IDTkTP1uEzS7fl4tx7TVAuhpwYZABSeXeMCUSp%2FuLITQ9TO7MYFB863FAYB53CZuZuq9xAlhpiqm7IVwuz%2BwS8AgWeSVpU6gj%2BTdKI8TFAXeBCGay%2BV%2BoPn73COveW79nD5CN8gwm73GN4qaMPj4wlLX9xAY6pgEmLlFjw71mO3NK0VztL4pvY46gOYVF%2FCW2xTf78GnqSjhYPZqX0A3OxqDnGf3471dujwCqCPDV2JZGxaxESjy0tYi45l%2BOUo4vAZDNHJsId8PXBrnu32SKaK3X4f3GPrEFcRVZljUEN82W7pJii%2FhyC%2BZUWgK7I1SJ3rb6kLx7EfWoLa6QKff20llD7do%2BKMrIEUboYIKutYGZNh5s6ZN6kRyDjfjt&X-Amz-Signature=2e7318ef9d88316bc8ee4068af935a36c037f998a68e656aca0fdbeaa8ff1f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3SPQ66Q%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCICBSOXXV%2FKg7fA92k0iWoSvfREpy2LwdDNI0A5jQHMiVAiAudXYkWb52lDLxtOVefbbKaj5VydDeE5J0LNge1ikHGir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMqmPf3OYxulV5SFMOKtwDcAvzBP5r%2Fw145l0Tbs7GlZFQtGPcKGeQKrE2fN2Dt8LCkWaFo0P5crRtlkuCh91U0zZZIs5T9vY%2BWyCu87ij%2FRcKeq%2BVlginyDjME07YLqvMQbQtf73va%2Fsi%2B79oEqRVYGKc%2BgDbF3B7fMp%2F3zMiOoRzfdeb9JZX671Bm9W%2BTiimOuqFkQFRudef%2Fs%2FtY%2Fj6LCVSpQ4PONv4YoJPyv3ETdPx0rrBeveSf9DnbzlaR6rcm6I65LI8vJfT6HoVwl0E4szjeRSdtyPx43myWcFYAOOfQzLAuAdZT7FKpEDs9aqqiT7f5JS4GfGUyQf8JVLc96pq0xdTxrRfY3F146mQ09GxB2nu3H2cn%2Fp2qaRjTOTeAiM7KftP2vURVRihUIc2DAg4QKKdZNzjFaStuM7JpnpM6a5lGwiht3m7w2wH5d4rjWcoakxUd6bw09569OwpPpCNas3fhpEcRxideGLD0AncquJAvatJcvZo0s4IDTkTP1uEzS7fl4tx7TVAuhpwYZABSeXeMCUSp%2FuLITQ9TO7MYFB863FAYB53CZuZuq9xAlhpiqm7IVwuz%2BwS8AgWeSVpU6gj%2BTdKI8TFAXeBCGay%2BV%2BoPn73COveW79nD5CN8gwm73GN4qaMPj4wlLX9xAY6pgEmLlFjw71mO3NK0VztL4pvY46gOYVF%2FCW2xTf78GnqSjhYPZqX0A3OxqDnGf3471dujwCqCPDV2JZGxaxESjy0tYi45l%2BOUo4vAZDNHJsId8PXBrnu32SKaK3X4f3GPrEFcRVZljUEN82W7pJii%2FhyC%2BZUWgK7I1SJ3rb6kLx7EfWoLa6QKff20llD7do%2BKMrIEUboYIKutYGZNh5s6ZN6kRyDjfjt&X-Amz-Signature=ae4ee1434151d4b888d357338b41db1440d208067a798d61cfd3b1b440a73463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XK5HFLF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkI%2BVR5le4wWHHdfD29YJ3auw%2FtokG7L6gVrUU7sFpxwIgHQsa6exHzao9uJonmAHPiFOrWLIOZG8%2BbIBYwKQjwL4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDL5yYnPHjY7vizJF1SrcA9VgfjrB87zRuaqGzdxYkeS1f1k4fssnNiFgTCAAZS%2BlvQhwc8ScKTLYbef3TUk%2FBDx3%2FJtnA7ECAHbMtR3L%2FnMd8jXBQ6aztT3xteClQrnLYzKfSACAl7B1A41sqDM32VwXQztMHmnarBPcf051qVTTnSqW9uinQ4dIy1r9Y%2B%2F8nCl5VVXoVScaNpZ9Sp4WZAdHNk23cJ86weEarHtKtgZJ8rmqMN5vcyDUP%2FGzuPOYtxT74qBXhxl7E0qbr3zuGJeFSXvASt6W4IKZrLg%2B73YmlnNtRnb37fMh6V37NiKMnwICMg0TbiIWh2jpnatW6FRDQv9mJPXFySDhlYAdn%2F2fIXexSQ4zvwJOTR9vMHBKr4JDD6hJRvAXHaEWsLCFhMt%2FNGSp7pSKOSg134h1hQqpc12rj7mUOQ9nMoak72q45i77qeGftoVUnGRyDDqXIFsjxbf8lKkTdl9q2mohJvcJd0qk04MAzOrYz0%2FZdbCzP2QZp9cedk8PcEg1HIFwu%2FrB2lgdD0oa2ouBECwI8bni8mcOubt0uWqeAwNQFZxxYa833pKHTTG0zu9wFt36ku85EnXErBo8VLoANwTAV16rhgzFvR5dfCZLp2SNC1%2FgMoA2aayLmAB0DotzMMa0%2FcQGOqUB9w9PljqejB7cmY1ntWj%2FloFskN1dyTt47MotYM5xWwbq0ex68ztNE60ySkIkJLmkI259CPfxgb9h1dybxdGEhuh7ab%2FrC0G94hGokMDIHXy7vuScC6zVkkPnP%2FE5RZ7hqrXQai2AFb0tHevgUNH0lXADGdQgCVjEgO20yE8CtbF4h%2FeAPhxh5KPov%2FAxWRxV1W1HUxCj689PPt3LPTpUYPLop3mK&X-Amz-Signature=a064aaef3fd376f8c6fe9f3076ee19b5b26fea64fe6b5a91883dc7db2a472d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFYUS4P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCNQU%2BIG53%2Buxck919zVo7HienBuQv1F3Wp6KQD9Prh0gIgWAEIPwV2DED79tvBnbs3hPIyXeu%2F0glYi8Jhdmck7SEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFOwlLNYtmWh%2B0r4MCrcA7V2ddOv%2F0rrqujq7SCm37QmE48JfymbCnXEMwoaCIlUjXfV9MCO2j26PUyjVax1DwIJUJ3OHkEgYucu9%2BXxym%2BT0CwJ%2FV5zTK3vsTQ7%2B1R696c0zg2KaMVDxAbO3jw7YsutwK8RCC2shba%2FyQ3ObOKdLVhX4ZucsFAZ36hZWhycjOE4qMRoZ2ZPFy80gnhJFbA5wDpbn2jzA%2FNLKOEyUWVPoyN3tXanKDGoVyNGSLYzF1jxu0e0ARGyEnA2bzdpi108rRYgGcraOb9Xpinq1E2yZGh7PztrNTN%2Bwd36cMtjPWPTEDUkc4fGoVTiW5Vb3NqTuASEBAHsnrJ%2B6ZNKaUW%2FyWIoxLWq5DnQ14UDgN4u5c6BaFj4KoQqblymvJ1eumzGJREie2%2FQues5uN2SpCsmEFOBLDEMc35YS0M76M7SRPhjynIprpyYNJuwl7mMh0hV0pAgNFGGoq6ouZgbCxmALEnjlJQBWIPFntwo2DOQvmo7PsRemA5wxfW9XBlNL02ec0O6SJFVWzRm19uRzME6NsYSmGjiw%2BqniPf5wlZeETtBkxZ%2B2FK%2BbOMlaSTFYFVDEZUHA4iDxEvMt0BcSQUcA3hjLVw7ma7R1b7E4LSoIClkniK0Fm6El%2B8xMKu1%2FcQGOqUBBnJS5HEPpHQujyOPCgi0%2F9sbABx3E83ZoPI1I4M9t1ZPjDc4n8CS8HypwmvnFp8EDQMgSihEf21n2DV0BtBEzSmM15s7NqHtkhgAG3HGYHR9cwPwRKUpOQSW0THjUwUBtk9FPGBRqG86t5cmucjJiJikiBn89mCP7eXRX1xdICyJACwRMzWCaUBmOA%2F%2BdPyuQkZlvGO7QNIvnQNjwdAENpWTPAZK&X-Amz-Signature=f1af46e2ff58f3181ad6a55d22f4c7cc8523df7bff1eea918a4f163c58054c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFYUS4P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCNQU%2BIG53%2Buxck919zVo7HienBuQv1F3Wp6KQD9Prh0gIgWAEIPwV2DED79tvBnbs3hPIyXeu%2F0glYi8Jhdmck7SEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFOwlLNYtmWh%2B0r4MCrcA7V2ddOv%2F0rrqujq7SCm37QmE48JfymbCnXEMwoaCIlUjXfV9MCO2j26PUyjVax1DwIJUJ3OHkEgYucu9%2BXxym%2BT0CwJ%2FV5zTK3vsTQ7%2B1R696c0zg2KaMVDxAbO3jw7YsutwK8RCC2shba%2FyQ3ObOKdLVhX4ZucsFAZ36hZWhycjOE4qMRoZ2ZPFy80gnhJFbA5wDpbn2jzA%2FNLKOEyUWVPoyN3tXanKDGoVyNGSLYzF1jxu0e0ARGyEnA2bzdpi108rRYgGcraOb9Xpinq1E2yZGh7PztrNTN%2Bwd36cMtjPWPTEDUkc4fGoVTiW5Vb3NqTuASEBAHsnrJ%2B6ZNKaUW%2FyWIoxLWq5DnQ14UDgN4u5c6BaFj4KoQqblymvJ1eumzGJREie2%2FQues5uN2SpCsmEFOBLDEMc35YS0M76M7SRPhjynIprpyYNJuwl7mMh0hV0pAgNFGGoq6ouZgbCxmALEnjlJQBWIPFntwo2DOQvmo7PsRemA5wxfW9XBlNL02ec0O6SJFVWzRm19uRzME6NsYSmGjiw%2BqniPf5wlZeETtBkxZ%2B2FK%2BbOMlaSTFYFVDEZUHA4iDxEvMt0BcSQUcA3hjLVw7ma7R1b7E4LSoIClkniK0Fm6El%2B8xMKu1%2FcQGOqUBBnJS5HEPpHQujyOPCgi0%2F9sbABx3E83ZoPI1I4M9t1ZPjDc4n8CS8HypwmvnFp8EDQMgSihEf21n2DV0BtBEzSmM15s7NqHtkhgAG3HGYHR9cwPwRKUpOQSW0THjUwUBtk9FPGBRqG86t5cmucjJiJikiBn89mCP7eXRX1xdICyJACwRMzWCaUBmOA%2F%2BdPyuQkZlvGO7QNIvnQNjwdAENpWTPAZK&X-Amz-Signature=16d4da6f65876f08ac51d2dfbbd94093d851842cd2bf42081802cf1c5534b6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFYUS4P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCNQU%2BIG53%2Buxck919zVo7HienBuQv1F3Wp6KQD9Prh0gIgWAEIPwV2DED79tvBnbs3hPIyXeu%2F0glYi8Jhdmck7SEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFOwlLNYtmWh%2B0r4MCrcA7V2ddOv%2F0rrqujq7SCm37QmE48JfymbCnXEMwoaCIlUjXfV9MCO2j26PUyjVax1DwIJUJ3OHkEgYucu9%2BXxym%2BT0CwJ%2FV5zTK3vsTQ7%2B1R696c0zg2KaMVDxAbO3jw7YsutwK8RCC2shba%2FyQ3ObOKdLVhX4ZucsFAZ36hZWhycjOE4qMRoZ2ZPFy80gnhJFbA5wDpbn2jzA%2FNLKOEyUWVPoyN3tXanKDGoVyNGSLYzF1jxu0e0ARGyEnA2bzdpi108rRYgGcraOb9Xpinq1E2yZGh7PztrNTN%2Bwd36cMtjPWPTEDUkc4fGoVTiW5Vb3NqTuASEBAHsnrJ%2B6ZNKaUW%2FyWIoxLWq5DnQ14UDgN4u5c6BaFj4KoQqblymvJ1eumzGJREie2%2FQues5uN2SpCsmEFOBLDEMc35YS0M76M7SRPhjynIprpyYNJuwl7mMh0hV0pAgNFGGoq6ouZgbCxmALEnjlJQBWIPFntwo2DOQvmo7PsRemA5wxfW9XBlNL02ec0O6SJFVWzRm19uRzME6NsYSmGjiw%2BqniPf5wlZeETtBkxZ%2B2FK%2BbOMlaSTFYFVDEZUHA4iDxEvMt0BcSQUcA3hjLVw7ma7R1b7E4LSoIClkniK0Fm6El%2B8xMKu1%2FcQGOqUBBnJS5HEPpHQujyOPCgi0%2F9sbABx3E83ZoPI1I4M9t1ZPjDc4n8CS8HypwmvnFp8EDQMgSihEf21n2DV0BtBEzSmM15s7NqHtkhgAG3HGYHR9cwPwRKUpOQSW0THjUwUBtk9FPGBRqG86t5cmucjJiJikiBn89mCP7eXRX1xdICyJACwRMzWCaUBmOA%2F%2BdPyuQkZlvGO7QNIvnQNjwdAENpWTPAZK&X-Amz-Signature=f23e98997810c113b58f4e8b1ea096241616e10895c3b87571730f7f4c27b6f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFYUS4P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCNQU%2BIG53%2Buxck919zVo7HienBuQv1F3Wp6KQD9Prh0gIgWAEIPwV2DED79tvBnbs3hPIyXeu%2F0glYi8Jhdmck7SEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFOwlLNYtmWh%2B0r4MCrcA7V2ddOv%2F0rrqujq7SCm37QmE48JfymbCnXEMwoaCIlUjXfV9MCO2j26PUyjVax1DwIJUJ3OHkEgYucu9%2BXxym%2BT0CwJ%2FV5zTK3vsTQ7%2B1R696c0zg2KaMVDxAbO3jw7YsutwK8RCC2shba%2FyQ3ObOKdLVhX4ZucsFAZ36hZWhycjOE4qMRoZ2ZPFy80gnhJFbA5wDpbn2jzA%2FNLKOEyUWVPoyN3tXanKDGoVyNGSLYzF1jxu0e0ARGyEnA2bzdpi108rRYgGcraOb9Xpinq1E2yZGh7PztrNTN%2Bwd36cMtjPWPTEDUkc4fGoVTiW5Vb3NqTuASEBAHsnrJ%2B6ZNKaUW%2FyWIoxLWq5DnQ14UDgN4u5c6BaFj4KoQqblymvJ1eumzGJREie2%2FQues5uN2SpCsmEFOBLDEMc35YS0M76M7SRPhjynIprpyYNJuwl7mMh0hV0pAgNFGGoq6ouZgbCxmALEnjlJQBWIPFntwo2DOQvmo7PsRemA5wxfW9XBlNL02ec0O6SJFVWzRm19uRzME6NsYSmGjiw%2BqniPf5wlZeETtBkxZ%2B2FK%2BbOMlaSTFYFVDEZUHA4iDxEvMt0BcSQUcA3hjLVw7ma7R1b7E4LSoIClkniK0Fm6El%2B8xMKu1%2FcQGOqUBBnJS5HEPpHQujyOPCgi0%2F9sbABx3E83ZoPI1I4M9t1ZPjDc4n8CS8HypwmvnFp8EDQMgSihEf21n2DV0BtBEzSmM15s7NqHtkhgAG3HGYHR9cwPwRKUpOQSW0THjUwUBtk9FPGBRqG86t5cmucjJiJikiBn89mCP7eXRX1xdICyJACwRMzWCaUBmOA%2F%2BdPyuQkZlvGO7QNIvnQNjwdAENpWTPAZK&X-Amz-Signature=5bc700306689426e91613c1775f9e782ceb1fd00bfd2ace8db0cdde36375ca23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFYUS4P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCNQU%2BIG53%2Buxck919zVo7HienBuQv1F3Wp6KQD9Prh0gIgWAEIPwV2DED79tvBnbs3hPIyXeu%2F0glYi8Jhdmck7SEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFOwlLNYtmWh%2B0r4MCrcA7V2ddOv%2F0rrqujq7SCm37QmE48JfymbCnXEMwoaCIlUjXfV9MCO2j26PUyjVax1DwIJUJ3OHkEgYucu9%2BXxym%2BT0CwJ%2FV5zTK3vsTQ7%2B1R696c0zg2KaMVDxAbO3jw7YsutwK8RCC2shba%2FyQ3ObOKdLVhX4ZucsFAZ36hZWhycjOE4qMRoZ2ZPFy80gnhJFbA5wDpbn2jzA%2FNLKOEyUWVPoyN3tXanKDGoVyNGSLYzF1jxu0e0ARGyEnA2bzdpi108rRYgGcraOb9Xpinq1E2yZGh7PztrNTN%2Bwd36cMtjPWPTEDUkc4fGoVTiW5Vb3NqTuASEBAHsnrJ%2B6ZNKaUW%2FyWIoxLWq5DnQ14UDgN4u5c6BaFj4KoQqblymvJ1eumzGJREie2%2FQues5uN2SpCsmEFOBLDEMc35YS0M76M7SRPhjynIprpyYNJuwl7mMh0hV0pAgNFGGoq6ouZgbCxmALEnjlJQBWIPFntwo2DOQvmo7PsRemA5wxfW9XBlNL02ec0O6SJFVWzRm19uRzME6NsYSmGjiw%2BqniPf5wlZeETtBkxZ%2B2FK%2BbOMlaSTFYFVDEZUHA4iDxEvMt0BcSQUcA3hjLVw7ma7R1b7E4LSoIClkniK0Fm6El%2B8xMKu1%2FcQGOqUBBnJS5HEPpHQujyOPCgi0%2F9sbABx3E83ZoPI1I4M9t1ZPjDc4n8CS8HypwmvnFp8EDQMgSihEf21n2DV0BtBEzSmM15s7NqHtkhgAG3HGYHR9cwPwRKUpOQSW0THjUwUBtk9FPGBRqG86t5cmucjJiJikiBn89mCP7eXRX1xdICyJACwRMzWCaUBmOA%2F%2BdPyuQkZlvGO7QNIvnQNjwdAENpWTPAZK&X-Amz-Signature=bc85f5bf39d77b349903418c5279e62a8142183d7d0db542aec4114d2a60a5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFYUS4P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCNQU%2BIG53%2Buxck919zVo7HienBuQv1F3Wp6KQD9Prh0gIgWAEIPwV2DED79tvBnbs3hPIyXeu%2F0glYi8Jhdmck7SEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFOwlLNYtmWh%2B0r4MCrcA7V2ddOv%2F0rrqujq7SCm37QmE48JfymbCnXEMwoaCIlUjXfV9MCO2j26PUyjVax1DwIJUJ3OHkEgYucu9%2BXxym%2BT0CwJ%2FV5zTK3vsTQ7%2B1R696c0zg2KaMVDxAbO3jw7YsutwK8RCC2shba%2FyQ3ObOKdLVhX4ZucsFAZ36hZWhycjOE4qMRoZ2ZPFy80gnhJFbA5wDpbn2jzA%2FNLKOEyUWVPoyN3tXanKDGoVyNGSLYzF1jxu0e0ARGyEnA2bzdpi108rRYgGcraOb9Xpinq1E2yZGh7PztrNTN%2Bwd36cMtjPWPTEDUkc4fGoVTiW5Vb3NqTuASEBAHsnrJ%2B6ZNKaUW%2FyWIoxLWq5DnQ14UDgN4u5c6BaFj4KoQqblymvJ1eumzGJREie2%2FQues5uN2SpCsmEFOBLDEMc35YS0M76M7SRPhjynIprpyYNJuwl7mMh0hV0pAgNFGGoq6ouZgbCxmALEnjlJQBWIPFntwo2DOQvmo7PsRemA5wxfW9XBlNL02ec0O6SJFVWzRm19uRzME6NsYSmGjiw%2BqniPf5wlZeETtBkxZ%2B2FK%2BbOMlaSTFYFVDEZUHA4iDxEvMt0BcSQUcA3hjLVw7ma7R1b7E4LSoIClkniK0Fm6El%2B8xMKu1%2FcQGOqUBBnJS5HEPpHQujyOPCgi0%2F9sbABx3E83ZoPI1I4M9t1ZPjDc4n8CS8HypwmvnFp8EDQMgSihEf21n2DV0BtBEzSmM15s7NqHtkhgAG3HGYHR9cwPwRKUpOQSW0THjUwUBtk9FPGBRqG86t5cmucjJiJikiBn89mCP7eXRX1xdICyJACwRMzWCaUBmOA%2F%2BdPyuQkZlvGO7QNIvnQNjwdAENpWTPAZK&X-Amz-Signature=b5447924706c7fc435c4d92df2d160381b2e761d4f334828cb649ec254069510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFYUS4P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCNQU%2BIG53%2Buxck919zVo7HienBuQv1F3Wp6KQD9Prh0gIgWAEIPwV2DED79tvBnbs3hPIyXeu%2F0glYi8Jhdmck7SEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFOwlLNYtmWh%2B0r4MCrcA7V2ddOv%2F0rrqujq7SCm37QmE48JfymbCnXEMwoaCIlUjXfV9MCO2j26PUyjVax1DwIJUJ3OHkEgYucu9%2BXxym%2BT0CwJ%2FV5zTK3vsTQ7%2B1R696c0zg2KaMVDxAbO3jw7YsutwK8RCC2shba%2FyQ3ObOKdLVhX4ZucsFAZ36hZWhycjOE4qMRoZ2ZPFy80gnhJFbA5wDpbn2jzA%2FNLKOEyUWVPoyN3tXanKDGoVyNGSLYzF1jxu0e0ARGyEnA2bzdpi108rRYgGcraOb9Xpinq1E2yZGh7PztrNTN%2Bwd36cMtjPWPTEDUkc4fGoVTiW5Vb3NqTuASEBAHsnrJ%2B6ZNKaUW%2FyWIoxLWq5DnQ14UDgN4u5c6BaFj4KoQqblymvJ1eumzGJREie2%2FQues5uN2SpCsmEFOBLDEMc35YS0M76M7SRPhjynIprpyYNJuwl7mMh0hV0pAgNFGGoq6ouZgbCxmALEnjlJQBWIPFntwo2DOQvmo7PsRemA5wxfW9XBlNL02ec0O6SJFVWzRm19uRzME6NsYSmGjiw%2BqniPf5wlZeETtBkxZ%2B2FK%2BbOMlaSTFYFVDEZUHA4iDxEvMt0BcSQUcA3hjLVw7ma7R1b7E4LSoIClkniK0Fm6El%2B8xMKu1%2FcQGOqUBBnJS5HEPpHQujyOPCgi0%2F9sbABx3E83ZoPI1I4M9t1ZPjDc4n8CS8HypwmvnFp8EDQMgSihEf21n2DV0BtBEzSmM15s7NqHtkhgAG3HGYHR9cwPwRKUpOQSW0THjUwUBtk9FPGBRqG86t5cmucjJiJikiBn89mCP7eXRX1xdICyJACwRMzWCaUBmOA%2F%2BdPyuQkZlvGO7QNIvnQNjwdAENpWTPAZK&X-Amz-Signature=01d88625a8276e6daef8aca621a9e5b2fb49fc1c0ef588f1c08a43a60642c0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFYUS4P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCNQU%2BIG53%2Buxck919zVo7HienBuQv1F3Wp6KQD9Prh0gIgWAEIPwV2DED79tvBnbs3hPIyXeu%2F0glYi8Jhdmck7SEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFOwlLNYtmWh%2B0r4MCrcA7V2ddOv%2F0rrqujq7SCm37QmE48JfymbCnXEMwoaCIlUjXfV9MCO2j26PUyjVax1DwIJUJ3OHkEgYucu9%2BXxym%2BT0CwJ%2FV5zTK3vsTQ7%2B1R696c0zg2KaMVDxAbO3jw7YsutwK8RCC2shba%2FyQ3ObOKdLVhX4ZucsFAZ36hZWhycjOE4qMRoZ2ZPFy80gnhJFbA5wDpbn2jzA%2FNLKOEyUWVPoyN3tXanKDGoVyNGSLYzF1jxu0e0ARGyEnA2bzdpi108rRYgGcraOb9Xpinq1E2yZGh7PztrNTN%2Bwd36cMtjPWPTEDUkc4fGoVTiW5Vb3NqTuASEBAHsnrJ%2B6ZNKaUW%2FyWIoxLWq5DnQ14UDgN4u5c6BaFj4KoQqblymvJ1eumzGJREie2%2FQues5uN2SpCsmEFOBLDEMc35YS0M76M7SRPhjynIprpyYNJuwl7mMh0hV0pAgNFGGoq6ouZgbCxmALEnjlJQBWIPFntwo2DOQvmo7PsRemA5wxfW9XBlNL02ec0O6SJFVWzRm19uRzME6NsYSmGjiw%2BqniPf5wlZeETtBkxZ%2B2FK%2BbOMlaSTFYFVDEZUHA4iDxEvMt0BcSQUcA3hjLVw7ma7R1b7E4LSoIClkniK0Fm6El%2B8xMKu1%2FcQGOqUBBnJS5HEPpHQujyOPCgi0%2F9sbABx3E83ZoPI1I4M9t1ZPjDc4n8CS8HypwmvnFp8EDQMgSihEf21n2DV0BtBEzSmM15s7NqHtkhgAG3HGYHR9cwPwRKUpOQSW0THjUwUBtk9FPGBRqG86t5cmucjJiJikiBn89mCP7eXRX1xdICyJACwRMzWCaUBmOA%2F%2BdPyuQkZlvGO7QNIvnQNjwdAENpWTPAZK&X-Amz-Signature=8be3f38f0f5454a7e0dacc33b28869f12ae7143c18f497f34abbd672d26c6eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFYUS4P%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCNQU%2BIG53%2Buxck919zVo7HienBuQv1F3Wp6KQD9Prh0gIgWAEIPwV2DED79tvBnbs3hPIyXeu%2F0glYi8Jhdmck7SEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFOwlLNYtmWh%2B0r4MCrcA7V2ddOv%2F0rrqujq7SCm37QmE48JfymbCnXEMwoaCIlUjXfV9MCO2j26PUyjVax1DwIJUJ3OHkEgYucu9%2BXxym%2BT0CwJ%2FV5zTK3vsTQ7%2B1R696c0zg2KaMVDxAbO3jw7YsutwK8RCC2shba%2FyQ3ObOKdLVhX4ZucsFAZ36hZWhycjOE4qMRoZ2ZPFy80gnhJFbA5wDpbn2jzA%2FNLKOEyUWVPoyN3tXanKDGoVyNGSLYzF1jxu0e0ARGyEnA2bzdpi108rRYgGcraOb9Xpinq1E2yZGh7PztrNTN%2Bwd36cMtjPWPTEDUkc4fGoVTiW5Vb3NqTuASEBAHsnrJ%2B6ZNKaUW%2FyWIoxLWq5DnQ14UDgN4u5c6BaFj4KoQqblymvJ1eumzGJREie2%2FQues5uN2SpCsmEFOBLDEMc35YS0M76M7SRPhjynIprpyYNJuwl7mMh0hV0pAgNFGGoq6ouZgbCxmALEnjlJQBWIPFntwo2DOQvmo7PsRemA5wxfW9XBlNL02ec0O6SJFVWzRm19uRzME6NsYSmGjiw%2BqniPf5wlZeETtBkxZ%2B2FK%2BbOMlaSTFYFVDEZUHA4iDxEvMt0BcSQUcA3hjLVw7ma7R1b7E4LSoIClkniK0Fm6El%2B8xMKu1%2FcQGOqUBBnJS5HEPpHQujyOPCgi0%2F9sbABx3E83ZoPI1I4M9t1ZPjDc4n8CS8HypwmvnFp8EDQMgSihEf21n2DV0BtBEzSmM15s7NqHtkhgAG3HGYHR9cwPwRKUpOQSW0THjUwUBtk9FPGBRqG86t5cmucjJiJikiBn89mCP7eXRX1xdICyJACwRMzWCaUBmOA%2F%2BdPyuQkZlvGO7QNIvnQNjwdAENpWTPAZK&X-Amz-Signature=4d2eab5774434767c6fd3c21f2353d43f22987fa010096d7fdaeec9ad969bd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
