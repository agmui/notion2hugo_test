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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRKQKXN%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzP2qHPNfmSZ5xjthgA5QRZdOO%2BqSaDF%2BbtVRqWRBmkwIhAL1d367P%2FdOw2k%2FvMVfhs%2BrJTovcaS39PgRDcGcpq4JMKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXqpjGaoFZltZKyhgq3AN04JrL7yCGxf5pwA69uhm5yq0RYW3C1Nge41mitvF7LpNwHcIPBL%2B36BM%2FsM7Hf8ygV4MiYeOXok9qhh%2BE5eGRtFd6Ri%2B%2BcpsRV0oCsHttn2UBJQ0Ip7FrMH5c1Rv8UvTfZMktfLlhRTR9lqAm5YcyAQ%2FrF67AgeNQAYkyLn%2Fc93woCuXqs9ZR4OQJRuA0pv1NPInVQrmHbjIp4n5LnJ%2BMdE5Qbxh3ctIFRvfjy1zQKiZvt5lLBkO5EvF%2B8DLV517Q6CRHNvv0L%2FYR2SMRC2a3Xzasieug61%2FOKmGvk6%2BGfF0rdp4WEyyIwTK8LT26PjvE1ZZ2V4aXV6iqep3ppdJPltGs9jqNpQJoETieIZ9A4uK95Yc0RCleuNl2fWB3syKig%2FgOcexPljllT5IlNOt2OhN4kEbEyZucJ2PbwubFUxeiYm9uCpZ%2FonMOY3RPo5VoYET0CukcWjngROjA1WuSfNyLkbQiI%2BM8Y%2BDl6vmY2Ple8szfHz9TIvqaWlgO9bbTDCYkluZCzmIZYYV3iCmLXeHm4KYdGeTz%2BsQIFxs5wh9GRJ4bdHX64WXvvbGYB7HQ409bK%2Bgim0Z1CRdpL%2FQlaVLIILnHeVbkx2b1Hcv5yacIa0Nfw24nqhxl9jDc5u7TBjqkAcWEJK1hIJrtqSTNF6IIX6Eeb58y8GKj46Gti5Bgqsoq07FYWZE7S%2BtfEK4Nb7zhJidi0%2FKl57FZUlBh7S5stM%2FH9VTX%2Fzy1bKe45U9gttjTdkV7IwYwGlFa6E9JU0lLa2W52Zezn%2FHrJAHV4uEWeQzT08BGwkjivAcDaegqs6er%2BxGzJdaWjFOBO6STFVvaUsKE1HH0F0FDzHARzR7FaRYpDVHj&X-Amz-Signature=10fe50f5ee6612483e39e8669e06063c9cfc889950b129b7f8bec76e2f5ae1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRKQKXN%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzP2qHPNfmSZ5xjthgA5QRZdOO%2BqSaDF%2BbtVRqWRBmkwIhAL1d367P%2FdOw2k%2FvMVfhs%2BrJTovcaS39PgRDcGcpq4JMKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXqpjGaoFZltZKyhgq3AN04JrL7yCGxf5pwA69uhm5yq0RYW3C1Nge41mitvF7LpNwHcIPBL%2B36BM%2FsM7Hf8ygV4MiYeOXok9qhh%2BE5eGRtFd6Ri%2B%2BcpsRV0oCsHttn2UBJQ0Ip7FrMH5c1Rv8UvTfZMktfLlhRTR9lqAm5YcyAQ%2FrF67AgeNQAYkyLn%2Fc93woCuXqs9ZR4OQJRuA0pv1NPInVQrmHbjIp4n5LnJ%2BMdE5Qbxh3ctIFRvfjy1zQKiZvt5lLBkO5EvF%2B8DLV517Q6CRHNvv0L%2FYR2SMRC2a3Xzasieug61%2FOKmGvk6%2BGfF0rdp4WEyyIwTK8LT26PjvE1ZZ2V4aXV6iqep3ppdJPltGs9jqNpQJoETieIZ9A4uK95Yc0RCleuNl2fWB3syKig%2FgOcexPljllT5IlNOt2OhN4kEbEyZucJ2PbwubFUxeiYm9uCpZ%2FonMOY3RPo5VoYET0CukcWjngROjA1WuSfNyLkbQiI%2BM8Y%2BDl6vmY2Ple8szfHz9TIvqaWlgO9bbTDCYkluZCzmIZYYV3iCmLXeHm4KYdGeTz%2BsQIFxs5wh9GRJ4bdHX64WXvvbGYB7HQ409bK%2Bgim0Z1CRdpL%2FQlaVLIILnHeVbkx2b1Hcv5yacIa0Nfw24nqhxl9jDc5u7TBjqkAcWEJK1hIJrtqSTNF6IIX6Eeb58y8GKj46Gti5Bgqsoq07FYWZE7S%2BtfEK4Nb7zhJidi0%2FKl57FZUlBh7S5stM%2FH9VTX%2Fzy1bKe45U9gttjTdkV7IwYwGlFa6E9JU0lLa2W52Zezn%2FHrJAHV4uEWeQzT08BGwkjivAcDaegqs6er%2BxGzJdaWjFOBO6STFVvaUsKE1HH0F0FDzHARzR7FaRYpDVHj&X-Amz-Signature=f2d32e239d859fc0ddbea2dbd4b59a310eed375818dccff29e91dd58ac1d059f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRKQKXN%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzP2qHPNfmSZ5xjthgA5QRZdOO%2BqSaDF%2BbtVRqWRBmkwIhAL1d367P%2FdOw2k%2FvMVfhs%2BrJTovcaS39PgRDcGcpq4JMKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXqpjGaoFZltZKyhgq3AN04JrL7yCGxf5pwA69uhm5yq0RYW3C1Nge41mitvF7LpNwHcIPBL%2B36BM%2FsM7Hf8ygV4MiYeOXok9qhh%2BE5eGRtFd6Ri%2B%2BcpsRV0oCsHttn2UBJQ0Ip7FrMH5c1Rv8UvTfZMktfLlhRTR9lqAm5YcyAQ%2FrF67AgeNQAYkyLn%2Fc93woCuXqs9ZR4OQJRuA0pv1NPInVQrmHbjIp4n5LnJ%2BMdE5Qbxh3ctIFRvfjy1zQKiZvt5lLBkO5EvF%2B8DLV517Q6CRHNvv0L%2FYR2SMRC2a3Xzasieug61%2FOKmGvk6%2BGfF0rdp4WEyyIwTK8LT26PjvE1ZZ2V4aXV6iqep3ppdJPltGs9jqNpQJoETieIZ9A4uK95Yc0RCleuNl2fWB3syKig%2FgOcexPljllT5IlNOt2OhN4kEbEyZucJ2PbwubFUxeiYm9uCpZ%2FonMOY3RPo5VoYET0CukcWjngROjA1WuSfNyLkbQiI%2BM8Y%2BDl6vmY2Ple8szfHz9TIvqaWlgO9bbTDCYkluZCzmIZYYV3iCmLXeHm4KYdGeTz%2BsQIFxs5wh9GRJ4bdHX64WXvvbGYB7HQ409bK%2Bgim0Z1CRdpL%2FQlaVLIILnHeVbkx2b1Hcv5yacIa0Nfw24nqhxl9jDc5u7TBjqkAcWEJK1hIJrtqSTNF6IIX6Eeb58y8GKj46Gti5Bgqsoq07FYWZE7S%2BtfEK4Nb7zhJidi0%2FKl57FZUlBh7S5stM%2FH9VTX%2Fzy1bKe45U9gttjTdkV7IwYwGlFa6E9JU0lLa2W52Zezn%2FHrJAHV4uEWeQzT08BGwkjivAcDaegqs6er%2BxGzJdaWjFOBO6STFVvaUsKE1HH0F0FDzHARzR7FaRYpDVHj&X-Amz-Signature=6b9a20989146f0f96dbe2427ea1fcb6b9f0ee01bdf22073a17310772df8dee82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRKQKXN%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzP2qHPNfmSZ5xjthgA5QRZdOO%2BqSaDF%2BbtVRqWRBmkwIhAL1d367P%2FdOw2k%2FvMVfhs%2BrJTovcaS39PgRDcGcpq4JMKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXqpjGaoFZltZKyhgq3AN04JrL7yCGxf5pwA69uhm5yq0RYW3C1Nge41mitvF7LpNwHcIPBL%2B36BM%2FsM7Hf8ygV4MiYeOXok9qhh%2BE5eGRtFd6Ri%2B%2BcpsRV0oCsHttn2UBJQ0Ip7FrMH5c1Rv8UvTfZMktfLlhRTR9lqAm5YcyAQ%2FrF67AgeNQAYkyLn%2Fc93woCuXqs9ZR4OQJRuA0pv1NPInVQrmHbjIp4n5LnJ%2BMdE5Qbxh3ctIFRvfjy1zQKiZvt5lLBkO5EvF%2B8DLV517Q6CRHNvv0L%2FYR2SMRC2a3Xzasieug61%2FOKmGvk6%2BGfF0rdp4WEyyIwTK8LT26PjvE1ZZ2V4aXV6iqep3ppdJPltGs9jqNpQJoETieIZ9A4uK95Yc0RCleuNl2fWB3syKig%2FgOcexPljllT5IlNOt2OhN4kEbEyZucJ2PbwubFUxeiYm9uCpZ%2FonMOY3RPo5VoYET0CukcWjngROjA1WuSfNyLkbQiI%2BM8Y%2BDl6vmY2Ple8szfHz9TIvqaWlgO9bbTDCYkluZCzmIZYYV3iCmLXeHm4KYdGeTz%2BsQIFxs5wh9GRJ4bdHX64WXvvbGYB7HQ409bK%2Bgim0Z1CRdpL%2FQlaVLIILnHeVbkx2b1Hcv5yacIa0Nfw24nqhxl9jDc5u7TBjqkAcWEJK1hIJrtqSTNF6IIX6Eeb58y8GKj46Gti5Bgqsoq07FYWZE7S%2BtfEK4Nb7zhJidi0%2FKl57FZUlBh7S5stM%2FH9VTX%2Fzy1bKe45U9gttjTdkV7IwYwGlFa6E9JU0lLa2W52Zezn%2FHrJAHV4uEWeQzT08BGwkjivAcDaegqs6er%2BxGzJdaWjFOBO6STFVvaUsKE1HH0F0FDzHARzR7FaRYpDVHj&X-Amz-Signature=fd953119e710289a79dff021e6aaedc9fd09cf8326829c13a087cace86fb452f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRKQKXN%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzP2qHPNfmSZ5xjthgA5QRZdOO%2BqSaDF%2BbtVRqWRBmkwIhAL1d367P%2FdOw2k%2FvMVfhs%2BrJTovcaS39PgRDcGcpq4JMKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXqpjGaoFZltZKyhgq3AN04JrL7yCGxf5pwA69uhm5yq0RYW3C1Nge41mitvF7LpNwHcIPBL%2B36BM%2FsM7Hf8ygV4MiYeOXok9qhh%2BE5eGRtFd6Ri%2B%2BcpsRV0oCsHttn2UBJQ0Ip7FrMH5c1Rv8UvTfZMktfLlhRTR9lqAm5YcyAQ%2FrF67AgeNQAYkyLn%2Fc93woCuXqs9ZR4OQJRuA0pv1NPInVQrmHbjIp4n5LnJ%2BMdE5Qbxh3ctIFRvfjy1zQKiZvt5lLBkO5EvF%2B8DLV517Q6CRHNvv0L%2FYR2SMRC2a3Xzasieug61%2FOKmGvk6%2BGfF0rdp4WEyyIwTK8LT26PjvE1ZZ2V4aXV6iqep3ppdJPltGs9jqNpQJoETieIZ9A4uK95Yc0RCleuNl2fWB3syKig%2FgOcexPljllT5IlNOt2OhN4kEbEyZucJ2PbwubFUxeiYm9uCpZ%2FonMOY3RPo5VoYET0CukcWjngROjA1WuSfNyLkbQiI%2BM8Y%2BDl6vmY2Ple8szfHz9TIvqaWlgO9bbTDCYkluZCzmIZYYV3iCmLXeHm4KYdGeTz%2BsQIFxs5wh9GRJ4bdHX64WXvvbGYB7HQ409bK%2Bgim0Z1CRdpL%2FQlaVLIILnHeVbkx2b1Hcv5yacIa0Nfw24nqhxl9jDc5u7TBjqkAcWEJK1hIJrtqSTNF6IIX6Eeb58y8GKj46Gti5Bgqsoq07FYWZE7S%2BtfEK4Nb7zhJidi0%2FKl57FZUlBh7S5stM%2FH9VTX%2Fzy1bKe45U9gttjTdkV7IwYwGlFa6E9JU0lLa2W52Zezn%2FHrJAHV4uEWeQzT08BGwkjivAcDaegqs6er%2BxGzJdaWjFOBO6STFVvaUsKE1HH0F0FDzHARzR7FaRYpDVHj&X-Amz-Signature=bb1547a65398ebcebccf98c0755c9ac04125098cb4173d3c2a7ab7fbacd0a86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRKQKXN%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzP2qHPNfmSZ5xjthgA5QRZdOO%2BqSaDF%2BbtVRqWRBmkwIhAL1d367P%2FdOw2k%2FvMVfhs%2BrJTovcaS39PgRDcGcpq4JMKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXqpjGaoFZltZKyhgq3AN04JrL7yCGxf5pwA69uhm5yq0RYW3C1Nge41mitvF7LpNwHcIPBL%2B36BM%2FsM7Hf8ygV4MiYeOXok9qhh%2BE5eGRtFd6Ri%2B%2BcpsRV0oCsHttn2UBJQ0Ip7FrMH5c1Rv8UvTfZMktfLlhRTR9lqAm5YcyAQ%2FrF67AgeNQAYkyLn%2Fc93woCuXqs9ZR4OQJRuA0pv1NPInVQrmHbjIp4n5LnJ%2BMdE5Qbxh3ctIFRvfjy1zQKiZvt5lLBkO5EvF%2B8DLV517Q6CRHNvv0L%2FYR2SMRC2a3Xzasieug61%2FOKmGvk6%2BGfF0rdp4WEyyIwTK8LT26PjvE1ZZ2V4aXV6iqep3ppdJPltGs9jqNpQJoETieIZ9A4uK95Yc0RCleuNl2fWB3syKig%2FgOcexPljllT5IlNOt2OhN4kEbEyZucJ2PbwubFUxeiYm9uCpZ%2FonMOY3RPo5VoYET0CukcWjngROjA1WuSfNyLkbQiI%2BM8Y%2BDl6vmY2Ple8szfHz9TIvqaWlgO9bbTDCYkluZCzmIZYYV3iCmLXeHm4KYdGeTz%2BsQIFxs5wh9GRJ4bdHX64WXvvbGYB7HQ409bK%2Bgim0Z1CRdpL%2FQlaVLIILnHeVbkx2b1Hcv5yacIa0Nfw24nqhxl9jDc5u7TBjqkAcWEJK1hIJrtqSTNF6IIX6Eeb58y8GKj46Gti5Bgqsoq07FYWZE7S%2BtfEK4Nb7zhJidi0%2FKl57FZUlBh7S5stM%2FH9VTX%2Fzy1bKe45U9gttjTdkV7IwYwGlFa6E9JU0lLa2W52Zezn%2FHrJAHV4uEWeQzT08BGwkjivAcDaegqs6er%2BxGzJdaWjFOBO6STFVvaUsKE1HH0F0FDzHARzR7FaRYpDVHj&X-Amz-Signature=d6d614b639488f9b306d6da41cacc41b27504f0a18c44b58a9dc2765521fb50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRKQKXN%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzP2qHPNfmSZ5xjthgA5QRZdOO%2BqSaDF%2BbtVRqWRBmkwIhAL1d367P%2FdOw2k%2FvMVfhs%2BrJTovcaS39PgRDcGcpq4JMKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXqpjGaoFZltZKyhgq3AN04JrL7yCGxf5pwA69uhm5yq0RYW3C1Nge41mitvF7LpNwHcIPBL%2B36BM%2FsM7Hf8ygV4MiYeOXok9qhh%2BE5eGRtFd6Ri%2B%2BcpsRV0oCsHttn2UBJQ0Ip7FrMH5c1Rv8UvTfZMktfLlhRTR9lqAm5YcyAQ%2FrF67AgeNQAYkyLn%2Fc93woCuXqs9ZR4OQJRuA0pv1NPInVQrmHbjIp4n5LnJ%2BMdE5Qbxh3ctIFRvfjy1zQKiZvt5lLBkO5EvF%2B8DLV517Q6CRHNvv0L%2FYR2SMRC2a3Xzasieug61%2FOKmGvk6%2BGfF0rdp4WEyyIwTK8LT26PjvE1ZZ2V4aXV6iqep3ppdJPltGs9jqNpQJoETieIZ9A4uK95Yc0RCleuNl2fWB3syKig%2FgOcexPljllT5IlNOt2OhN4kEbEyZucJ2PbwubFUxeiYm9uCpZ%2FonMOY3RPo5VoYET0CukcWjngROjA1WuSfNyLkbQiI%2BM8Y%2BDl6vmY2Ple8szfHz9TIvqaWlgO9bbTDCYkluZCzmIZYYV3iCmLXeHm4KYdGeTz%2BsQIFxs5wh9GRJ4bdHX64WXvvbGYB7HQ409bK%2Bgim0Z1CRdpL%2FQlaVLIILnHeVbkx2b1Hcv5yacIa0Nfw24nqhxl9jDc5u7TBjqkAcWEJK1hIJrtqSTNF6IIX6Eeb58y8GKj46Gti5Bgqsoq07FYWZE7S%2BtfEK4Nb7zhJidi0%2FKl57FZUlBh7S5stM%2FH9VTX%2Fzy1bKe45U9gttjTdkV7IwYwGlFa6E9JU0lLa2W52Zezn%2FHrJAHV4uEWeQzT08BGwkjivAcDaegqs6er%2BxGzJdaWjFOBO6STFVvaUsKE1HH0F0FDzHARzR7FaRYpDVHj&X-Amz-Signature=213ef5455cbbd7373d2176c08c0bb667c1c4bba567c3b19ced09c1a9f9cb89aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRKQKXN%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzP2qHPNfmSZ5xjthgA5QRZdOO%2BqSaDF%2BbtVRqWRBmkwIhAL1d367P%2FdOw2k%2FvMVfhs%2BrJTovcaS39PgRDcGcpq4JMKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXqpjGaoFZltZKyhgq3AN04JrL7yCGxf5pwA69uhm5yq0RYW3C1Nge41mitvF7LpNwHcIPBL%2B36BM%2FsM7Hf8ygV4MiYeOXok9qhh%2BE5eGRtFd6Ri%2B%2BcpsRV0oCsHttn2UBJQ0Ip7FrMH5c1Rv8UvTfZMktfLlhRTR9lqAm5YcyAQ%2FrF67AgeNQAYkyLn%2Fc93woCuXqs9ZR4OQJRuA0pv1NPInVQrmHbjIp4n5LnJ%2BMdE5Qbxh3ctIFRvfjy1zQKiZvt5lLBkO5EvF%2B8DLV517Q6CRHNvv0L%2FYR2SMRC2a3Xzasieug61%2FOKmGvk6%2BGfF0rdp4WEyyIwTK8LT26PjvE1ZZ2V4aXV6iqep3ppdJPltGs9jqNpQJoETieIZ9A4uK95Yc0RCleuNl2fWB3syKig%2FgOcexPljllT5IlNOt2OhN4kEbEyZucJ2PbwubFUxeiYm9uCpZ%2FonMOY3RPo5VoYET0CukcWjngROjA1WuSfNyLkbQiI%2BM8Y%2BDl6vmY2Ple8szfHz9TIvqaWlgO9bbTDCYkluZCzmIZYYV3iCmLXeHm4KYdGeTz%2BsQIFxs5wh9GRJ4bdHX64WXvvbGYB7HQ409bK%2Bgim0Z1CRdpL%2FQlaVLIILnHeVbkx2b1Hcv5yacIa0Nfw24nqhxl9jDc5u7TBjqkAcWEJK1hIJrtqSTNF6IIX6Eeb58y8GKj46Gti5Bgqsoq07FYWZE7S%2BtfEK4Nb7zhJidi0%2FKl57FZUlBh7S5stM%2FH9VTX%2Fzy1bKe45U9gttjTdkV7IwYwGlFa6E9JU0lLa2W52Zezn%2FHrJAHV4uEWeQzT08BGwkjivAcDaegqs6er%2BxGzJdaWjFOBO6STFVvaUsKE1HH0F0FDzHARzR7FaRYpDVHj&X-Amz-Signature=20a195b4ec0e87518d733883f4a660ca79694be69fef4fe6d3435b06199a711b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRKQKXN%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzP2qHPNfmSZ5xjthgA5QRZdOO%2BqSaDF%2BbtVRqWRBmkwIhAL1d367P%2FdOw2k%2FvMVfhs%2BrJTovcaS39PgRDcGcpq4JMKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXqpjGaoFZltZKyhgq3AN04JrL7yCGxf5pwA69uhm5yq0RYW3C1Nge41mitvF7LpNwHcIPBL%2B36BM%2FsM7Hf8ygV4MiYeOXok9qhh%2BE5eGRtFd6Ri%2B%2BcpsRV0oCsHttn2UBJQ0Ip7FrMH5c1Rv8UvTfZMktfLlhRTR9lqAm5YcyAQ%2FrF67AgeNQAYkyLn%2Fc93woCuXqs9ZR4OQJRuA0pv1NPInVQrmHbjIp4n5LnJ%2BMdE5Qbxh3ctIFRvfjy1zQKiZvt5lLBkO5EvF%2B8DLV517Q6CRHNvv0L%2FYR2SMRC2a3Xzasieug61%2FOKmGvk6%2BGfF0rdp4WEyyIwTK8LT26PjvE1ZZ2V4aXV6iqep3ppdJPltGs9jqNpQJoETieIZ9A4uK95Yc0RCleuNl2fWB3syKig%2FgOcexPljllT5IlNOt2OhN4kEbEyZucJ2PbwubFUxeiYm9uCpZ%2FonMOY3RPo5VoYET0CukcWjngROjA1WuSfNyLkbQiI%2BM8Y%2BDl6vmY2Ple8szfHz9TIvqaWlgO9bbTDCYkluZCzmIZYYV3iCmLXeHm4KYdGeTz%2BsQIFxs5wh9GRJ4bdHX64WXvvbGYB7HQ409bK%2Bgim0Z1CRdpL%2FQlaVLIILnHeVbkx2b1Hcv5yacIa0Nfw24nqhxl9jDc5u7TBjqkAcWEJK1hIJrtqSTNF6IIX6Eeb58y8GKj46Gti5Bgqsoq07FYWZE7S%2BtfEK4Nb7zhJidi0%2FKl57FZUlBh7S5stM%2FH9VTX%2Fzy1bKe45U9gttjTdkV7IwYwGlFa6E9JU0lLa2W52Zezn%2FHrJAHV4uEWeQzT08BGwkjivAcDaegqs6er%2BxGzJdaWjFOBO6STFVvaUsKE1HH0F0FDzHARzR7FaRYpDVHj&X-Amz-Signature=a6566dbd2c283f80b1e0b3f2431f3c3cdb8f4d3fa4225d8a3847c8343ab84a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TRKQKXN%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzP2qHPNfmSZ5xjthgA5QRZdOO%2BqSaDF%2BbtVRqWRBmkwIhAL1d367P%2FdOw2k%2FvMVfhs%2BrJTovcaS39PgRDcGcpq4JMKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXqpjGaoFZltZKyhgq3AN04JrL7yCGxf5pwA69uhm5yq0RYW3C1Nge41mitvF7LpNwHcIPBL%2B36BM%2FsM7Hf8ygV4MiYeOXok9qhh%2BE5eGRtFd6Ri%2B%2BcpsRV0oCsHttn2UBJQ0Ip7FrMH5c1Rv8UvTfZMktfLlhRTR9lqAm5YcyAQ%2FrF67AgeNQAYkyLn%2Fc93woCuXqs9ZR4OQJRuA0pv1NPInVQrmHbjIp4n5LnJ%2BMdE5Qbxh3ctIFRvfjy1zQKiZvt5lLBkO5EvF%2B8DLV517Q6CRHNvv0L%2FYR2SMRC2a3Xzasieug61%2FOKmGvk6%2BGfF0rdp4WEyyIwTK8LT26PjvE1ZZ2V4aXV6iqep3ppdJPltGs9jqNpQJoETieIZ9A4uK95Yc0RCleuNl2fWB3syKig%2FgOcexPljllT5IlNOt2OhN4kEbEyZucJ2PbwubFUxeiYm9uCpZ%2FonMOY3RPo5VoYET0CukcWjngROjA1WuSfNyLkbQiI%2BM8Y%2BDl6vmY2Ple8szfHz9TIvqaWlgO9bbTDCYkluZCzmIZYYV3iCmLXeHm4KYdGeTz%2BsQIFxs5wh9GRJ4bdHX64WXvvbGYB7HQ409bK%2Bgim0Z1CRdpL%2FQlaVLIILnHeVbkx2b1Hcv5yacIa0Nfw24nqhxl9jDc5u7TBjqkAcWEJK1hIJrtqSTNF6IIX6Eeb58y8GKj46Gti5Bgqsoq07FYWZE7S%2BtfEK4Nb7zhJidi0%2FKl57FZUlBh7S5stM%2FH9VTX%2Fzy1bKe45U9gttjTdkV7IwYwGlFa6E9JU0lLa2W52Zezn%2FHrJAHV4uEWeQzT08BGwkjivAcDaegqs6er%2BxGzJdaWjFOBO6STFVvaUsKE1HH0F0FDzHARzR7FaRYpDVHj&X-Amz-Signature=42de95e1da461c6a8b0dbfd6ac275eae77b3854b641b788a26e185b8efa15c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSYDD3I%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfKEqb8pMvEj12fJEoiEpjpUbm2ZoqTG9%2F%2B7NZDiqzQIhANBWPtWI%2BQqBwV%2FWavtPk9iZPXJkdk1J60FmI%2FDBkNRYKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxetrjZseXu3FJ9QGkq3AOFzJYBCv%2BNO1ABYMqhVvpoA65TM0bUHJtNBiSganas2akrIOh582VddJeYAWqPDajLY9syfmqat%2ByLfRfu172wsdVw4KgqFH3sTMCIjus6rjmX0SwE32jFW%2F8PCxkHFKpZtV20hn7fGSMiK5k8%2BfEL%2B%2FtsMPPq%2BqMw20O1APXDrlRpEkfrUso922fHF4V%2FyZT7U28RRLHQ%2Bl7VJpzkeZ1U4bNnBSDdAKWtvsilEZkVPsIEuQ8UU3skywt2cZKpiSdCXQO7FsuP0GZpaj8%2BMZ29pwb8TGKyhgStDBkz08hUbsGeVpNg18qqtl1QBMDk%2BQmY%2FPfNe9YUDDvDek5KErE5H42G1ftMrUpWXL0qZcUB%2FKlrpt8by3ha5wcnx%2FHy%2FpR5CRbFZeVZN5gfsnKNLLgQJmxLBkit9eYyVfQyNM6E3DVlxxMevz2bFYW7Pm%2Fdkh4hszEsdni292hIj4fNfMmJLVOlpHdtGYu%2Bw2dRK9MUPf7lmKfv4eeh0Cqm8ueem%2FVK0ecQ4%2BYASKzi%2BJ9PSrvnsXXzp7v%2F1KCfh8cUbqJI3aKwIDH0Jo9ToHmaQZY3XnRLXJ%2BySC%2BIPB7xm47RWt3ZwVDKYA23BsFVajlSUjLNkvFft1fqysa6WVhXAzCI6u7TBjqkAc6%2BpCt0dtaNWIWMc1DlRDh6tVI%2B7VasaqO1KhEM2sl1Ge9Sb6KQ3sQsxhFDIPGgcOyVEHvwC6PXHIydjG9UiMGho8RLBkEq7om0wCxdb9cj5xTe3RmHlOnCljYhtFMJIHPasARugoZS8RbfMLviD3c13ZYUmk%2F5%2BegoYIW1jPw3qywH4%2FIZO54arWhdGJfxqFYFD2IZmw74oXqzkt1pGG18%2BfeK&X-Amz-Signature=f69ed0dfddef321dd8011cf877b1a43f95b7a905f4924f572e2d1222a1ba6960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOJZ3XX%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGL7Jq471fdwv4abHW7H6gqoxtJomXgB%2B5Xa3sPdN0MAiEA2JiY9iH88EBatUpYMothDHRaBq97vh5gZsFk5FOmX4EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmt8%2Fli8jN0OIa5NSrcA1L%2B5XkdbGUos8uQnO0qDAZvHJkTELJ9heJTaSFKB2Yh6ohHuRZT3O5glSFCKGi92XrHk%2FqUqNbtjMr0n0j%2FdkI2B2gg7FfctmjLhnRR%2F%2Fy2Fs1bQLTZsMQLTtsxglCZciK2IMDLwQF%2BA73jJzmVuXZhuikoZMm7y%2FdOLoXCsUuV7v7PBusqHx7jw0AP9lxOeG6IVmaxnWIrRg7f3pwzzzXO7QDRkoBQoWl3tSQ5j%2FZQzF2LrWCOczrsi42xRi%2FSOhl2wd2z%2BV5OTetDedLMPc%2FFaT6P87%2F91Y9Y5Okdr06HcIYCN4p3GbblzwS9koQVrzmfRI5nw8jHTgWAXHmk556UlCw0HDC0Wqan00Rjo3KzuIbzdUCB26YMIeKWpQ7uC1ommGagK%2BphKXl7AgubvNMy4R59N8vIduadUgzKr5xDVTl3lT4ZtTLxbFhQU17zEHf2qX1sFuEJRRGDUQKxl6VwQBSqinndr1wHd%2Fg4IYyqtZSijUi52e1om%2Bl5vY0qR4FTTdssYCO00xboD6mFNx4pXoyl1XTgycQC4VtNsBn2aGFvfVSSupz2%2B52OS4lI8tBXI7LX%2B70gwk%2FuVxc2OXw9JIjzSMsgxXMSD9Ph3Aldq7Puo4%2FdYWjNjPshMKjm7tMGOqUBQvs4YPGjxSrOuDpywVZso%2BSmWrliVAz9pKRwmqI1JoMu8MJe4B98lbsxpRyI9TAANRquUuMh7illjF3W2693WdhXyFP%2Fr84DilPuZMwQ27GboFjdowy%2FNRIzXgyrl1l0LQZdjPArW803SDOhh0zLFUpAjblAb3bltDLMBqeyVfX8ZGZzhJ%2ButkM%2Fyf2hOMh8Z7oHyz%2BUOqYujLUqiJsHjbsb%2FbrG&X-Amz-Signature=890f296c18475e18464dfda6a74cb99bdd13d22e9972a83690bcbc8ef9828db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOJZ3XX%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGL7Jq471fdwv4abHW7H6gqoxtJomXgB%2B5Xa3sPdN0MAiEA2JiY9iH88EBatUpYMothDHRaBq97vh5gZsFk5FOmX4EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmt8%2Fli8jN0OIa5NSrcA1L%2B5XkdbGUos8uQnO0qDAZvHJkTELJ9heJTaSFKB2Yh6ohHuRZT3O5glSFCKGi92XrHk%2FqUqNbtjMr0n0j%2FdkI2B2gg7FfctmjLhnRR%2F%2Fy2Fs1bQLTZsMQLTtsxglCZciK2IMDLwQF%2BA73jJzmVuXZhuikoZMm7y%2FdOLoXCsUuV7v7PBusqHx7jw0AP9lxOeG6IVmaxnWIrRg7f3pwzzzXO7QDRkoBQoWl3tSQ5j%2FZQzF2LrWCOczrsi42xRi%2FSOhl2wd2z%2BV5OTetDedLMPc%2FFaT6P87%2F91Y9Y5Okdr06HcIYCN4p3GbblzwS9koQVrzmfRI5nw8jHTgWAXHmk556UlCw0HDC0Wqan00Rjo3KzuIbzdUCB26YMIeKWpQ7uC1ommGagK%2BphKXl7AgubvNMy4R59N8vIduadUgzKr5xDVTl3lT4ZtTLxbFhQU17zEHf2qX1sFuEJRRGDUQKxl6VwQBSqinndr1wHd%2Fg4IYyqtZSijUi52e1om%2Bl5vY0qR4FTTdssYCO00xboD6mFNx4pXoyl1XTgycQC4VtNsBn2aGFvfVSSupz2%2B52OS4lI8tBXI7LX%2B70gwk%2FuVxc2OXw9JIjzSMsgxXMSD9Ph3Aldq7Puo4%2FdYWjNjPshMKjm7tMGOqUBQvs4YPGjxSrOuDpywVZso%2BSmWrliVAz9pKRwmqI1JoMu8MJe4B98lbsxpRyI9TAANRquUuMh7illjF3W2693WdhXyFP%2Fr84DilPuZMwQ27GboFjdowy%2FNRIzXgyrl1l0LQZdjPArW803SDOhh0zLFUpAjblAb3bltDLMBqeyVfX8ZGZzhJ%2ButkM%2Fyf2hOMh8Z7oHyz%2BUOqYujLUqiJsHjbsb%2FbrG&X-Amz-Signature=a428882265658703cd65a7642ae11ae1800cfc395c6d9541d9e11e066324bc65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOJZ3XX%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGL7Jq471fdwv4abHW7H6gqoxtJomXgB%2B5Xa3sPdN0MAiEA2JiY9iH88EBatUpYMothDHRaBq97vh5gZsFk5FOmX4EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmt8%2Fli8jN0OIa5NSrcA1L%2B5XkdbGUos8uQnO0qDAZvHJkTELJ9heJTaSFKB2Yh6ohHuRZT3O5glSFCKGi92XrHk%2FqUqNbtjMr0n0j%2FdkI2B2gg7FfctmjLhnRR%2F%2Fy2Fs1bQLTZsMQLTtsxglCZciK2IMDLwQF%2BA73jJzmVuXZhuikoZMm7y%2FdOLoXCsUuV7v7PBusqHx7jw0AP9lxOeG6IVmaxnWIrRg7f3pwzzzXO7QDRkoBQoWl3tSQ5j%2FZQzF2LrWCOczrsi42xRi%2FSOhl2wd2z%2BV5OTetDedLMPc%2FFaT6P87%2F91Y9Y5Okdr06HcIYCN4p3GbblzwS9koQVrzmfRI5nw8jHTgWAXHmk556UlCw0HDC0Wqan00Rjo3KzuIbzdUCB26YMIeKWpQ7uC1ommGagK%2BphKXl7AgubvNMy4R59N8vIduadUgzKr5xDVTl3lT4ZtTLxbFhQU17zEHf2qX1sFuEJRRGDUQKxl6VwQBSqinndr1wHd%2Fg4IYyqtZSijUi52e1om%2Bl5vY0qR4FTTdssYCO00xboD6mFNx4pXoyl1XTgycQC4VtNsBn2aGFvfVSSupz2%2B52OS4lI8tBXI7LX%2B70gwk%2FuVxc2OXw9JIjzSMsgxXMSD9Ph3Aldq7Puo4%2FdYWjNjPshMKjm7tMGOqUBQvs4YPGjxSrOuDpywVZso%2BSmWrliVAz9pKRwmqI1JoMu8MJe4B98lbsxpRyI9TAANRquUuMh7illjF3W2693WdhXyFP%2Fr84DilPuZMwQ27GboFjdowy%2FNRIzXgyrl1l0LQZdjPArW803SDOhh0zLFUpAjblAb3bltDLMBqeyVfX8ZGZzhJ%2ButkM%2Fyf2hOMh8Z7oHyz%2BUOqYujLUqiJsHjbsb%2FbrG&X-Amz-Signature=d6c64ed12b555e90e03d374b303ea62083d3bc7d24d0dbd75db8e080877f18fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOJZ3XX%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGL7Jq471fdwv4abHW7H6gqoxtJomXgB%2B5Xa3sPdN0MAiEA2JiY9iH88EBatUpYMothDHRaBq97vh5gZsFk5FOmX4EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmt8%2Fli8jN0OIa5NSrcA1L%2B5XkdbGUos8uQnO0qDAZvHJkTELJ9heJTaSFKB2Yh6ohHuRZT3O5glSFCKGi92XrHk%2FqUqNbtjMr0n0j%2FdkI2B2gg7FfctmjLhnRR%2F%2Fy2Fs1bQLTZsMQLTtsxglCZciK2IMDLwQF%2BA73jJzmVuXZhuikoZMm7y%2FdOLoXCsUuV7v7PBusqHx7jw0AP9lxOeG6IVmaxnWIrRg7f3pwzzzXO7QDRkoBQoWl3tSQ5j%2FZQzF2LrWCOczrsi42xRi%2FSOhl2wd2z%2BV5OTetDedLMPc%2FFaT6P87%2F91Y9Y5Okdr06HcIYCN4p3GbblzwS9koQVrzmfRI5nw8jHTgWAXHmk556UlCw0HDC0Wqan00Rjo3KzuIbzdUCB26YMIeKWpQ7uC1ommGagK%2BphKXl7AgubvNMy4R59N8vIduadUgzKr5xDVTl3lT4ZtTLxbFhQU17zEHf2qX1sFuEJRRGDUQKxl6VwQBSqinndr1wHd%2Fg4IYyqtZSijUi52e1om%2Bl5vY0qR4FTTdssYCO00xboD6mFNx4pXoyl1XTgycQC4VtNsBn2aGFvfVSSupz2%2B52OS4lI8tBXI7LX%2B70gwk%2FuVxc2OXw9JIjzSMsgxXMSD9Ph3Aldq7Puo4%2FdYWjNjPshMKjm7tMGOqUBQvs4YPGjxSrOuDpywVZso%2BSmWrliVAz9pKRwmqI1JoMu8MJe4B98lbsxpRyI9TAANRquUuMh7illjF3W2693WdhXyFP%2Fr84DilPuZMwQ27GboFjdowy%2FNRIzXgyrl1l0LQZdjPArW803SDOhh0zLFUpAjblAb3bltDLMBqeyVfX8ZGZzhJ%2ButkM%2Fyf2hOMh8Z7oHyz%2BUOqYujLUqiJsHjbsb%2FbrG&X-Amz-Signature=cae720cd2fefe49d53a1d9806b66f2e36fea552fe2f33b09d9d0b51f3fd760ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOJZ3XX%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGL7Jq471fdwv4abHW7H6gqoxtJomXgB%2B5Xa3sPdN0MAiEA2JiY9iH88EBatUpYMothDHRaBq97vh5gZsFk5FOmX4EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmt8%2Fli8jN0OIa5NSrcA1L%2B5XkdbGUos8uQnO0qDAZvHJkTELJ9heJTaSFKB2Yh6ohHuRZT3O5glSFCKGi92XrHk%2FqUqNbtjMr0n0j%2FdkI2B2gg7FfctmjLhnRR%2F%2Fy2Fs1bQLTZsMQLTtsxglCZciK2IMDLwQF%2BA73jJzmVuXZhuikoZMm7y%2FdOLoXCsUuV7v7PBusqHx7jw0AP9lxOeG6IVmaxnWIrRg7f3pwzzzXO7QDRkoBQoWl3tSQ5j%2FZQzF2LrWCOczrsi42xRi%2FSOhl2wd2z%2BV5OTetDedLMPc%2FFaT6P87%2F91Y9Y5Okdr06HcIYCN4p3GbblzwS9koQVrzmfRI5nw8jHTgWAXHmk556UlCw0HDC0Wqan00Rjo3KzuIbzdUCB26YMIeKWpQ7uC1ommGagK%2BphKXl7AgubvNMy4R59N8vIduadUgzKr5xDVTl3lT4ZtTLxbFhQU17zEHf2qX1sFuEJRRGDUQKxl6VwQBSqinndr1wHd%2Fg4IYyqtZSijUi52e1om%2Bl5vY0qR4FTTdssYCO00xboD6mFNx4pXoyl1XTgycQC4VtNsBn2aGFvfVSSupz2%2B52OS4lI8tBXI7LX%2B70gwk%2FuVxc2OXw9JIjzSMsgxXMSD9Ph3Aldq7Puo4%2FdYWjNjPshMKjm7tMGOqUBQvs4YPGjxSrOuDpywVZso%2BSmWrliVAz9pKRwmqI1JoMu8MJe4B98lbsxpRyI9TAANRquUuMh7illjF3W2693WdhXyFP%2Fr84DilPuZMwQ27GboFjdowy%2FNRIzXgyrl1l0LQZdjPArW803SDOhh0zLFUpAjblAb3bltDLMBqeyVfX8ZGZzhJ%2ButkM%2Fyf2hOMh8Z7oHyz%2BUOqYujLUqiJsHjbsb%2FbrG&X-Amz-Signature=764d2fed130ee1b89c6c310ff410a2ab19adcaff92f1c8c3535fc7b619a42749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOJZ3XX%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGL7Jq471fdwv4abHW7H6gqoxtJomXgB%2B5Xa3sPdN0MAiEA2JiY9iH88EBatUpYMothDHRaBq97vh5gZsFk5FOmX4EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmt8%2Fli8jN0OIa5NSrcA1L%2B5XkdbGUos8uQnO0qDAZvHJkTELJ9heJTaSFKB2Yh6ohHuRZT3O5glSFCKGi92XrHk%2FqUqNbtjMr0n0j%2FdkI2B2gg7FfctmjLhnRR%2F%2Fy2Fs1bQLTZsMQLTtsxglCZciK2IMDLwQF%2BA73jJzmVuXZhuikoZMm7y%2FdOLoXCsUuV7v7PBusqHx7jw0AP9lxOeG6IVmaxnWIrRg7f3pwzzzXO7QDRkoBQoWl3tSQ5j%2FZQzF2LrWCOczrsi42xRi%2FSOhl2wd2z%2BV5OTetDedLMPc%2FFaT6P87%2F91Y9Y5Okdr06HcIYCN4p3GbblzwS9koQVrzmfRI5nw8jHTgWAXHmk556UlCw0HDC0Wqan00Rjo3KzuIbzdUCB26YMIeKWpQ7uC1ommGagK%2BphKXl7AgubvNMy4R59N8vIduadUgzKr5xDVTl3lT4ZtTLxbFhQU17zEHf2qX1sFuEJRRGDUQKxl6VwQBSqinndr1wHd%2Fg4IYyqtZSijUi52e1om%2Bl5vY0qR4FTTdssYCO00xboD6mFNx4pXoyl1XTgycQC4VtNsBn2aGFvfVSSupz2%2B52OS4lI8tBXI7LX%2B70gwk%2FuVxc2OXw9JIjzSMsgxXMSD9Ph3Aldq7Puo4%2FdYWjNjPshMKjm7tMGOqUBQvs4YPGjxSrOuDpywVZso%2BSmWrliVAz9pKRwmqI1JoMu8MJe4B98lbsxpRyI9TAANRquUuMh7illjF3W2693WdhXyFP%2Fr84DilPuZMwQ27GboFjdowy%2FNRIzXgyrl1l0LQZdjPArW803SDOhh0zLFUpAjblAb3bltDLMBqeyVfX8ZGZzhJ%2ButkM%2Fyf2hOMh8Z7oHyz%2BUOqYujLUqiJsHjbsb%2FbrG&X-Amz-Signature=a2956471edb03b96750952e15a4b29f4a0ab056501d5f458c6914451dde16b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOJZ3XX%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGL7Jq471fdwv4abHW7H6gqoxtJomXgB%2B5Xa3sPdN0MAiEA2JiY9iH88EBatUpYMothDHRaBq97vh5gZsFk5FOmX4EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmt8%2Fli8jN0OIa5NSrcA1L%2B5XkdbGUos8uQnO0qDAZvHJkTELJ9heJTaSFKB2Yh6ohHuRZT3O5glSFCKGi92XrHk%2FqUqNbtjMr0n0j%2FdkI2B2gg7FfctmjLhnRR%2F%2Fy2Fs1bQLTZsMQLTtsxglCZciK2IMDLwQF%2BA73jJzmVuXZhuikoZMm7y%2FdOLoXCsUuV7v7PBusqHx7jw0AP9lxOeG6IVmaxnWIrRg7f3pwzzzXO7QDRkoBQoWl3tSQ5j%2FZQzF2LrWCOczrsi42xRi%2FSOhl2wd2z%2BV5OTetDedLMPc%2FFaT6P87%2F91Y9Y5Okdr06HcIYCN4p3GbblzwS9koQVrzmfRI5nw8jHTgWAXHmk556UlCw0HDC0Wqan00Rjo3KzuIbzdUCB26YMIeKWpQ7uC1ommGagK%2BphKXl7AgubvNMy4R59N8vIduadUgzKr5xDVTl3lT4ZtTLxbFhQU17zEHf2qX1sFuEJRRGDUQKxl6VwQBSqinndr1wHd%2Fg4IYyqtZSijUi52e1om%2Bl5vY0qR4FTTdssYCO00xboD6mFNx4pXoyl1XTgycQC4VtNsBn2aGFvfVSSupz2%2B52OS4lI8tBXI7LX%2B70gwk%2FuVxc2OXw9JIjzSMsgxXMSD9Ph3Aldq7Puo4%2FdYWjNjPshMKjm7tMGOqUBQvs4YPGjxSrOuDpywVZso%2BSmWrliVAz9pKRwmqI1JoMu8MJe4B98lbsxpRyI9TAANRquUuMh7illjF3W2693WdhXyFP%2Fr84DilPuZMwQ27GboFjdowy%2FNRIzXgyrl1l0LQZdjPArW803SDOhh0zLFUpAjblAb3bltDLMBqeyVfX8ZGZzhJ%2ButkM%2Fyf2hOMh8Z7oHyz%2BUOqYujLUqiJsHjbsb%2FbrG&X-Amz-Signature=46ce67f6df6ec894ba9140568324391e4d65c455ad442676f90194d2d000e9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOJZ3XX%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGL7Jq471fdwv4abHW7H6gqoxtJomXgB%2B5Xa3sPdN0MAiEA2JiY9iH88EBatUpYMothDHRaBq97vh5gZsFk5FOmX4EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmt8%2Fli8jN0OIa5NSrcA1L%2B5XkdbGUos8uQnO0qDAZvHJkTELJ9heJTaSFKB2Yh6ohHuRZT3O5glSFCKGi92XrHk%2FqUqNbtjMr0n0j%2FdkI2B2gg7FfctmjLhnRR%2F%2Fy2Fs1bQLTZsMQLTtsxglCZciK2IMDLwQF%2BA73jJzmVuXZhuikoZMm7y%2FdOLoXCsUuV7v7PBusqHx7jw0AP9lxOeG6IVmaxnWIrRg7f3pwzzzXO7QDRkoBQoWl3tSQ5j%2FZQzF2LrWCOczrsi42xRi%2FSOhl2wd2z%2BV5OTetDedLMPc%2FFaT6P87%2F91Y9Y5Okdr06HcIYCN4p3GbblzwS9koQVrzmfRI5nw8jHTgWAXHmk556UlCw0HDC0Wqan00Rjo3KzuIbzdUCB26YMIeKWpQ7uC1ommGagK%2BphKXl7AgubvNMy4R59N8vIduadUgzKr5xDVTl3lT4ZtTLxbFhQU17zEHf2qX1sFuEJRRGDUQKxl6VwQBSqinndr1wHd%2Fg4IYyqtZSijUi52e1om%2Bl5vY0qR4FTTdssYCO00xboD6mFNx4pXoyl1XTgycQC4VtNsBn2aGFvfVSSupz2%2B52OS4lI8tBXI7LX%2B70gwk%2FuVxc2OXw9JIjzSMsgxXMSD9Ph3Aldq7Puo4%2FdYWjNjPshMKjm7tMGOqUBQvs4YPGjxSrOuDpywVZso%2BSmWrliVAz9pKRwmqI1JoMu8MJe4B98lbsxpRyI9TAANRquUuMh7illjF3W2693WdhXyFP%2Fr84DilPuZMwQ27GboFjdowy%2FNRIzXgyrl1l0LQZdjPArW803SDOhh0zLFUpAjblAb3bltDLMBqeyVfX8ZGZzhJ%2ButkM%2Fyf2hOMh8Z7oHyz%2BUOqYujLUqiJsHjbsb%2FbrG&X-Amz-Signature=54ec76a088f6dc68f7250ee3c680d7efa00b32e18f3d3a1102b6efdd4b876b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVOJZ3XX%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGL7Jq471fdwv4abHW7H6gqoxtJomXgB%2B5Xa3sPdN0MAiEA2JiY9iH88EBatUpYMothDHRaBq97vh5gZsFk5FOmX4EqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmt8%2Fli8jN0OIa5NSrcA1L%2B5XkdbGUos8uQnO0qDAZvHJkTELJ9heJTaSFKB2Yh6ohHuRZT3O5glSFCKGi92XrHk%2FqUqNbtjMr0n0j%2FdkI2B2gg7FfctmjLhnRR%2F%2Fy2Fs1bQLTZsMQLTtsxglCZciK2IMDLwQF%2BA73jJzmVuXZhuikoZMm7y%2FdOLoXCsUuV7v7PBusqHx7jw0AP9lxOeG6IVmaxnWIrRg7f3pwzzzXO7QDRkoBQoWl3tSQ5j%2FZQzF2LrWCOczrsi42xRi%2FSOhl2wd2z%2BV5OTetDedLMPc%2FFaT6P87%2F91Y9Y5Okdr06HcIYCN4p3GbblzwS9koQVrzmfRI5nw8jHTgWAXHmk556UlCw0HDC0Wqan00Rjo3KzuIbzdUCB26YMIeKWpQ7uC1ommGagK%2BphKXl7AgubvNMy4R59N8vIduadUgzKr5xDVTl3lT4ZtTLxbFhQU17zEHf2qX1sFuEJRRGDUQKxl6VwQBSqinndr1wHd%2Fg4IYyqtZSijUi52e1om%2Bl5vY0qR4FTTdssYCO00xboD6mFNx4pXoyl1XTgycQC4VtNsBn2aGFvfVSSupz2%2B52OS4lI8tBXI7LX%2B70gwk%2FuVxc2OXw9JIjzSMsgxXMSD9Ph3Aldq7Puo4%2FdYWjNjPshMKjm7tMGOqUBQvs4YPGjxSrOuDpywVZso%2BSmWrliVAz9pKRwmqI1JoMu8MJe4B98lbsxpRyI9TAANRquUuMh7illjF3W2693WdhXyFP%2Fr84DilPuZMwQ27GboFjdowy%2FNRIzXgyrl1l0LQZdjPArW803SDOhh0zLFUpAjblAb3bltDLMBqeyVfX8ZGZzhJ%2ButkM%2Fyf2hOMh8Z7oHyz%2BUOqYujLUqiJsHjbsb%2FbrG&X-Amz-Signature=c722ca38506a3ae0f0804f958d4c06842855c7367a2d21b4b31c0010f5660e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
