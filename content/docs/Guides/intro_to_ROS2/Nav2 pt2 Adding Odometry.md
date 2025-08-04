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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKU7B7O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDIFeXLISN56w%2BEaJckXXxLpDR5O%2BlgaFe4ialVUq%2FO%2BQIgPY%2FZ5v4N5CTZFU92fx9m00YSShoPYIdYMaaS85%2FBA4Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKjXRFTnOOO2pAKeTircA7XMY2rEvt9VSn8GCgGYRUZWRpGkIKZqUjiX6E2WutiSii4KdgtrM3AKEZ5DqVSvvimSbuj%2FyTWz%2FOy5MGzPF1ibiCC4b2Mkqt%2BX0mT9fpTFcFYhSxWVEcvw0tT9NedR%2B%2BtX7cSz8ZlTUW6jZGMks3VJmYO%2FLgyjZ6auin0XuM3s1AuRGPRMORSG3YSP8z9DlqYT%2BtuEHeRyil94TlZNdukHaPkafRLWvN3NgsmMQoPup4T2eU97Fq5pwyVrP7TvHmzWicgrQbmhgAMMQVG9ADp9I5FlQ2PT8VLDWVdF6g4PudlGmrHt4R2Iy62G%2F490o0rH%2FPll4biBooKq45pWkMNQKjz0EeZ83vMG5gLf5y0%2BtBNK6xnZlaGYRqcgiRcGKvGrZ8NY%2FR3O0ynAe7umFmE42T7GtZOJmniFxxuXX6VoXbO5ePJyZBoj6W6BP0ufFWsOYwFuLvyb1OJHjCIhIvIQE9rD%2BeykQF8fNhR8wKBmDwg7jA8vMOsE6N%2BoMpsCpCGlWCjjTyu1HHKfJBPaaI84dl9de9ZM0Zd1tc8v6auv3BB%2Buq6BGkSGBT2jy%2BvjGlSZ9LKb5C2%2F3e%2FLxbQNJB7JDmzgROPcjOPkRFuFDdMOzKbjT5vw%2BmFVQh5hMILcwcQGOqUBZhmT0kCyRkHTPdg0KV2b%2FHVVG9Jt9nw85sNgTBUh0YK4nmAzcNFd%2FP6srAau02UAlKod%2BKSjDBUskyf0%2Be6N%2BpDsRPJa%2BTn8GgZeTLQQrVPYa1JnYeH%2BxtRhV4kRpLViLwWSaBb1iQVSDxP78%2B6osyuACsonJ7sDRfXFukmS3GOyNoqtdVzk15X4B%2BrW826rkydWNgCB2TG1knKpSRfFLWPlceMI&X-Amz-Signature=86a16beda9a9156c6cff99bcd83839bb6bfc28faa6add5151dba5a75722a0b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKU7B7O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDIFeXLISN56w%2BEaJckXXxLpDR5O%2BlgaFe4ialVUq%2FO%2BQIgPY%2FZ5v4N5CTZFU92fx9m00YSShoPYIdYMaaS85%2FBA4Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKjXRFTnOOO2pAKeTircA7XMY2rEvt9VSn8GCgGYRUZWRpGkIKZqUjiX6E2WutiSii4KdgtrM3AKEZ5DqVSvvimSbuj%2FyTWz%2FOy5MGzPF1ibiCC4b2Mkqt%2BX0mT9fpTFcFYhSxWVEcvw0tT9NedR%2B%2BtX7cSz8ZlTUW6jZGMks3VJmYO%2FLgyjZ6auin0XuM3s1AuRGPRMORSG3YSP8z9DlqYT%2BtuEHeRyil94TlZNdukHaPkafRLWvN3NgsmMQoPup4T2eU97Fq5pwyVrP7TvHmzWicgrQbmhgAMMQVG9ADp9I5FlQ2PT8VLDWVdF6g4PudlGmrHt4R2Iy62G%2F490o0rH%2FPll4biBooKq45pWkMNQKjz0EeZ83vMG5gLf5y0%2BtBNK6xnZlaGYRqcgiRcGKvGrZ8NY%2FR3O0ynAe7umFmE42T7GtZOJmniFxxuXX6VoXbO5ePJyZBoj6W6BP0ufFWsOYwFuLvyb1OJHjCIhIvIQE9rD%2BeykQF8fNhR8wKBmDwg7jA8vMOsE6N%2BoMpsCpCGlWCjjTyu1HHKfJBPaaI84dl9de9ZM0Zd1tc8v6auv3BB%2Buq6BGkSGBT2jy%2BvjGlSZ9LKb5C2%2F3e%2FLxbQNJB7JDmzgROPcjOPkRFuFDdMOzKbjT5vw%2BmFVQh5hMILcwcQGOqUBZhmT0kCyRkHTPdg0KV2b%2FHVVG9Jt9nw85sNgTBUh0YK4nmAzcNFd%2FP6srAau02UAlKod%2BKSjDBUskyf0%2Be6N%2BpDsRPJa%2BTn8GgZeTLQQrVPYa1JnYeH%2BxtRhV4kRpLViLwWSaBb1iQVSDxP78%2B6osyuACsonJ7sDRfXFukmS3GOyNoqtdVzk15X4B%2BrW826rkydWNgCB2TG1knKpSRfFLWPlceMI&X-Amz-Signature=3b8d3aeb23a3b4a1485baeb36ac666b3fe02d5e3575f920d7997450543468fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKU7B7O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDIFeXLISN56w%2BEaJckXXxLpDR5O%2BlgaFe4ialVUq%2FO%2BQIgPY%2FZ5v4N5CTZFU92fx9m00YSShoPYIdYMaaS85%2FBA4Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKjXRFTnOOO2pAKeTircA7XMY2rEvt9VSn8GCgGYRUZWRpGkIKZqUjiX6E2WutiSii4KdgtrM3AKEZ5DqVSvvimSbuj%2FyTWz%2FOy5MGzPF1ibiCC4b2Mkqt%2BX0mT9fpTFcFYhSxWVEcvw0tT9NedR%2B%2BtX7cSz8ZlTUW6jZGMks3VJmYO%2FLgyjZ6auin0XuM3s1AuRGPRMORSG3YSP8z9DlqYT%2BtuEHeRyil94TlZNdukHaPkafRLWvN3NgsmMQoPup4T2eU97Fq5pwyVrP7TvHmzWicgrQbmhgAMMQVG9ADp9I5FlQ2PT8VLDWVdF6g4PudlGmrHt4R2Iy62G%2F490o0rH%2FPll4biBooKq45pWkMNQKjz0EeZ83vMG5gLf5y0%2BtBNK6xnZlaGYRqcgiRcGKvGrZ8NY%2FR3O0ynAe7umFmE42T7GtZOJmniFxxuXX6VoXbO5ePJyZBoj6W6BP0ufFWsOYwFuLvyb1OJHjCIhIvIQE9rD%2BeykQF8fNhR8wKBmDwg7jA8vMOsE6N%2BoMpsCpCGlWCjjTyu1HHKfJBPaaI84dl9de9ZM0Zd1tc8v6auv3BB%2Buq6BGkSGBT2jy%2BvjGlSZ9LKb5C2%2F3e%2FLxbQNJB7JDmzgROPcjOPkRFuFDdMOzKbjT5vw%2BmFVQh5hMILcwcQGOqUBZhmT0kCyRkHTPdg0KV2b%2FHVVG9Jt9nw85sNgTBUh0YK4nmAzcNFd%2FP6srAau02UAlKod%2BKSjDBUskyf0%2Be6N%2BpDsRPJa%2BTn8GgZeTLQQrVPYa1JnYeH%2BxtRhV4kRpLViLwWSaBb1iQVSDxP78%2B6osyuACsonJ7sDRfXFukmS3GOyNoqtdVzk15X4B%2BrW826rkydWNgCB2TG1knKpSRfFLWPlceMI&X-Amz-Signature=ddf62c6d8c52c307a24c4c715844c59abcd952b75d4b6b9586b946b9091cdc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKU7B7O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDIFeXLISN56w%2BEaJckXXxLpDR5O%2BlgaFe4ialVUq%2FO%2BQIgPY%2FZ5v4N5CTZFU92fx9m00YSShoPYIdYMaaS85%2FBA4Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKjXRFTnOOO2pAKeTircA7XMY2rEvt9VSn8GCgGYRUZWRpGkIKZqUjiX6E2WutiSii4KdgtrM3AKEZ5DqVSvvimSbuj%2FyTWz%2FOy5MGzPF1ibiCC4b2Mkqt%2BX0mT9fpTFcFYhSxWVEcvw0tT9NedR%2B%2BtX7cSz8ZlTUW6jZGMks3VJmYO%2FLgyjZ6auin0XuM3s1AuRGPRMORSG3YSP8z9DlqYT%2BtuEHeRyil94TlZNdukHaPkafRLWvN3NgsmMQoPup4T2eU97Fq5pwyVrP7TvHmzWicgrQbmhgAMMQVG9ADp9I5FlQ2PT8VLDWVdF6g4PudlGmrHt4R2Iy62G%2F490o0rH%2FPll4biBooKq45pWkMNQKjz0EeZ83vMG5gLf5y0%2BtBNK6xnZlaGYRqcgiRcGKvGrZ8NY%2FR3O0ynAe7umFmE42T7GtZOJmniFxxuXX6VoXbO5ePJyZBoj6W6BP0ufFWsOYwFuLvyb1OJHjCIhIvIQE9rD%2BeykQF8fNhR8wKBmDwg7jA8vMOsE6N%2BoMpsCpCGlWCjjTyu1HHKfJBPaaI84dl9de9ZM0Zd1tc8v6auv3BB%2Buq6BGkSGBT2jy%2BvjGlSZ9LKb5C2%2F3e%2FLxbQNJB7JDmzgROPcjOPkRFuFDdMOzKbjT5vw%2BmFVQh5hMILcwcQGOqUBZhmT0kCyRkHTPdg0KV2b%2FHVVG9Jt9nw85sNgTBUh0YK4nmAzcNFd%2FP6srAau02UAlKod%2BKSjDBUskyf0%2Be6N%2BpDsRPJa%2BTn8GgZeTLQQrVPYa1JnYeH%2BxtRhV4kRpLViLwWSaBb1iQVSDxP78%2B6osyuACsonJ7sDRfXFukmS3GOyNoqtdVzk15X4B%2BrW826rkydWNgCB2TG1knKpSRfFLWPlceMI&X-Amz-Signature=42cea3beecc08287b12a681d6593b0f9992810a65c529f415c26edac88c1467e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKU7B7O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDIFeXLISN56w%2BEaJckXXxLpDR5O%2BlgaFe4ialVUq%2FO%2BQIgPY%2FZ5v4N5CTZFU92fx9m00YSShoPYIdYMaaS85%2FBA4Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKjXRFTnOOO2pAKeTircA7XMY2rEvt9VSn8GCgGYRUZWRpGkIKZqUjiX6E2WutiSii4KdgtrM3AKEZ5DqVSvvimSbuj%2FyTWz%2FOy5MGzPF1ibiCC4b2Mkqt%2BX0mT9fpTFcFYhSxWVEcvw0tT9NedR%2B%2BtX7cSz8ZlTUW6jZGMks3VJmYO%2FLgyjZ6auin0XuM3s1AuRGPRMORSG3YSP8z9DlqYT%2BtuEHeRyil94TlZNdukHaPkafRLWvN3NgsmMQoPup4T2eU97Fq5pwyVrP7TvHmzWicgrQbmhgAMMQVG9ADp9I5FlQ2PT8VLDWVdF6g4PudlGmrHt4R2Iy62G%2F490o0rH%2FPll4biBooKq45pWkMNQKjz0EeZ83vMG5gLf5y0%2BtBNK6xnZlaGYRqcgiRcGKvGrZ8NY%2FR3O0ynAe7umFmE42T7GtZOJmniFxxuXX6VoXbO5ePJyZBoj6W6BP0ufFWsOYwFuLvyb1OJHjCIhIvIQE9rD%2BeykQF8fNhR8wKBmDwg7jA8vMOsE6N%2BoMpsCpCGlWCjjTyu1HHKfJBPaaI84dl9de9ZM0Zd1tc8v6auv3BB%2Buq6BGkSGBT2jy%2BvjGlSZ9LKb5C2%2F3e%2FLxbQNJB7JDmzgROPcjOPkRFuFDdMOzKbjT5vw%2BmFVQh5hMILcwcQGOqUBZhmT0kCyRkHTPdg0KV2b%2FHVVG9Jt9nw85sNgTBUh0YK4nmAzcNFd%2FP6srAau02UAlKod%2BKSjDBUskyf0%2Be6N%2BpDsRPJa%2BTn8GgZeTLQQrVPYa1JnYeH%2BxtRhV4kRpLViLwWSaBb1iQVSDxP78%2B6osyuACsonJ7sDRfXFukmS3GOyNoqtdVzk15X4B%2BrW826rkydWNgCB2TG1knKpSRfFLWPlceMI&X-Amz-Signature=88211d536fd38d4e51af1a8bedce85f3a6bee4f126352e2d96d34c45533ba767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKU7B7O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDIFeXLISN56w%2BEaJckXXxLpDR5O%2BlgaFe4ialVUq%2FO%2BQIgPY%2FZ5v4N5CTZFU92fx9m00YSShoPYIdYMaaS85%2FBA4Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKjXRFTnOOO2pAKeTircA7XMY2rEvt9VSn8GCgGYRUZWRpGkIKZqUjiX6E2WutiSii4KdgtrM3AKEZ5DqVSvvimSbuj%2FyTWz%2FOy5MGzPF1ibiCC4b2Mkqt%2BX0mT9fpTFcFYhSxWVEcvw0tT9NedR%2B%2BtX7cSz8ZlTUW6jZGMks3VJmYO%2FLgyjZ6auin0XuM3s1AuRGPRMORSG3YSP8z9DlqYT%2BtuEHeRyil94TlZNdukHaPkafRLWvN3NgsmMQoPup4T2eU97Fq5pwyVrP7TvHmzWicgrQbmhgAMMQVG9ADp9I5FlQ2PT8VLDWVdF6g4PudlGmrHt4R2Iy62G%2F490o0rH%2FPll4biBooKq45pWkMNQKjz0EeZ83vMG5gLf5y0%2BtBNK6xnZlaGYRqcgiRcGKvGrZ8NY%2FR3O0ynAe7umFmE42T7GtZOJmniFxxuXX6VoXbO5ePJyZBoj6W6BP0ufFWsOYwFuLvyb1OJHjCIhIvIQE9rD%2BeykQF8fNhR8wKBmDwg7jA8vMOsE6N%2BoMpsCpCGlWCjjTyu1HHKfJBPaaI84dl9de9ZM0Zd1tc8v6auv3BB%2Buq6BGkSGBT2jy%2BvjGlSZ9LKb5C2%2F3e%2FLxbQNJB7JDmzgROPcjOPkRFuFDdMOzKbjT5vw%2BmFVQh5hMILcwcQGOqUBZhmT0kCyRkHTPdg0KV2b%2FHVVG9Jt9nw85sNgTBUh0YK4nmAzcNFd%2FP6srAau02UAlKod%2BKSjDBUskyf0%2Be6N%2BpDsRPJa%2BTn8GgZeTLQQrVPYa1JnYeH%2BxtRhV4kRpLViLwWSaBb1iQVSDxP78%2B6osyuACsonJ7sDRfXFukmS3GOyNoqtdVzk15X4B%2BrW826rkydWNgCB2TG1knKpSRfFLWPlceMI&X-Amz-Signature=68649fe073b9782964db48c56a1796b61da775d4f1f69fe557e5ef925fbee05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKU7B7O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDIFeXLISN56w%2BEaJckXXxLpDR5O%2BlgaFe4ialVUq%2FO%2BQIgPY%2FZ5v4N5CTZFU92fx9m00YSShoPYIdYMaaS85%2FBA4Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKjXRFTnOOO2pAKeTircA7XMY2rEvt9VSn8GCgGYRUZWRpGkIKZqUjiX6E2WutiSii4KdgtrM3AKEZ5DqVSvvimSbuj%2FyTWz%2FOy5MGzPF1ibiCC4b2Mkqt%2BX0mT9fpTFcFYhSxWVEcvw0tT9NedR%2B%2BtX7cSz8ZlTUW6jZGMks3VJmYO%2FLgyjZ6auin0XuM3s1AuRGPRMORSG3YSP8z9DlqYT%2BtuEHeRyil94TlZNdukHaPkafRLWvN3NgsmMQoPup4T2eU97Fq5pwyVrP7TvHmzWicgrQbmhgAMMQVG9ADp9I5FlQ2PT8VLDWVdF6g4PudlGmrHt4R2Iy62G%2F490o0rH%2FPll4biBooKq45pWkMNQKjz0EeZ83vMG5gLf5y0%2BtBNK6xnZlaGYRqcgiRcGKvGrZ8NY%2FR3O0ynAe7umFmE42T7GtZOJmniFxxuXX6VoXbO5ePJyZBoj6W6BP0ufFWsOYwFuLvyb1OJHjCIhIvIQE9rD%2BeykQF8fNhR8wKBmDwg7jA8vMOsE6N%2BoMpsCpCGlWCjjTyu1HHKfJBPaaI84dl9de9ZM0Zd1tc8v6auv3BB%2Buq6BGkSGBT2jy%2BvjGlSZ9LKb5C2%2F3e%2FLxbQNJB7JDmzgROPcjOPkRFuFDdMOzKbjT5vw%2BmFVQh5hMILcwcQGOqUBZhmT0kCyRkHTPdg0KV2b%2FHVVG9Jt9nw85sNgTBUh0YK4nmAzcNFd%2FP6srAau02UAlKod%2BKSjDBUskyf0%2Be6N%2BpDsRPJa%2BTn8GgZeTLQQrVPYa1JnYeH%2BxtRhV4kRpLViLwWSaBb1iQVSDxP78%2B6osyuACsonJ7sDRfXFukmS3GOyNoqtdVzk15X4B%2BrW826rkydWNgCB2TG1knKpSRfFLWPlceMI&X-Amz-Signature=8faf775463c530600132d3301219094a784ce51abf816a78c95ab0fd36b495bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKU7B7O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDIFeXLISN56w%2BEaJckXXxLpDR5O%2BlgaFe4ialVUq%2FO%2BQIgPY%2FZ5v4N5CTZFU92fx9m00YSShoPYIdYMaaS85%2FBA4Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKjXRFTnOOO2pAKeTircA7XMY2rEvt9VSn8GCgGYRUZWRpGkIKZqUjiX6E2WutiSii4KdgtrM3AKEZ5DqVSvvimSbuj%2FyTWz%2FOy5MGzPF1ibiCC4b2Mkqt%2BX0mT9fpTFcFYhSxWVEcvw0tT9NedR%2B%2BtX7cSz8ZlTUW6jZGMks3VJmYO%2FLgyjZ6auin0XuM3s1AuRGPRMORSG3YSP8z9DlqYT%2BtuEHeRyil94TlZNdukHaPkafRLWvN3NgsmMQoPup4T2eU97Fq5pwyVrP7TvHmzWicgrQbmhgAMMQVG9ADp9I5FlQ2PT8VLDWVdF6g4PudlGmrHt4R2Iy62G%2F490o0rH%2FPll4biBooKq45pWkMNQKjz0EeZ83vMG5gLf5y0%2BtBNK6xnZlaGYRqcgiRcGKvGrZ8NY%2FR3O0ynAe7umFmE42T7GtZOJmniFxxuXX6VoXbO5ePJyZBoj6W6BP0ufFWsOYwFuLvyb1OJHjCIhIvIQE9rD%2BeykQF8fNhR8wKBmDwg7jA8vMOsE6N%2BoMpsCpCGlWCjjTyu1HHKfJBPaaI84dl9de9ZM0Zd1tc8v6auv3BB%2Buq6BGkSGBT2jy%2BvjGlSZ9LKb5C2%2F3e%2FLxbQNJB7JDmzgROPcjOPkRFuFDdMOzKbjT5vw%2BmFVQh5hMILcwcQGOqUBZhmT0kCyRkHTPdg0KV2b%2FHVVG9Jt9nw85sNgTBUh0YK4nmAzcNFd%2FP6srAau02UAlKod%2BKSjDBUskyf0%2Be6N%2BpDsRPJa%2BTn8GgZeTLQQrVPYa1JnYeH%2BxtRhV4kRpLViLwWSaBb1iQVSDxP78%2B6osyuACsonJ7sDRfXFukmS3GOyNoqtdVzk15X4B%2BrW826rkydWNgCB2TG1knKpSRfFLWPlceMI&X-Amz-Signature=37359831a405859d77d44ba9b9fb0e69a354dfba14f21aa4dbb9a16f3906d43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKU7B7O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDIFeXLISN56w%2BEaJckXXxLpDR5O%2BlgaFe4ialVUq%2FO%2BQIgPY%2FZ5v4N5CTZFU92fx9m00YSShoPYIdYMaaS85%2FBA4Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKjXRFTnOOO2pAKeTircA7XMY2rEvt9VSn8GCgGYRUZWRpGkIKZqUjiX6E2WutiSii4KdgtrM3AKEZ5DqVSvvimSbuj%2FyTWz%2FOy5MGzPF1ibiCC4b2Mkqt%2BX0mT9fpTFcFYhSxWVEcvw0tT9NedR%2B%2BtX7cSz8ZlTUW6jZGMks3VJmYO%2FLgyjZ6auin0XuM3s1AuRGPRMORSG3YSP8z9DlqYT%2BtuEHeRyil94TlZNdukHaPkafRLWvN3NgsmMQoPup4T2eU97Fq5pwyVrP7TvHmzWicgrQbmhgAMMQVG9ADp9I5FlQ2PT8VLDWVdF6g4PudlGmrHt4R2Iy62G%2F490o0rH%2FPll4biBooKq45pWkMNQKjz0EeZ83vMG5gLf5y0%2BtBNK6xnZlaGYRqcgiRcGKvGrZ8NY%2FR3O0ynAe7umFmE42T7GtZOJmniFxxuXX6VoXbO5ePJyZBoj6W6BP0ufFWsOYwFuLvyb1OJHjCIhIvIQE9rD%2BeykQF8fNhR8wKBmDwg7jA8vMOsE6N%2BoMpsCpCGlWCjjTyu1HHKfJBPaaI84dl9de9ZM0Zd1tc8v6auv3BB%2Buq6BGkSGBT2jy%2BvjGlSZ9LKb5C2%2F3e%2FLxbQNJB7JDmzgROPcjOPkRFuFDdMOzKbjT5vw%2BmFVQh5hMILcwcQGOqUBZhmT0kCyRkHTPdg0KV2b%2FHVVG9Jt9nw85sNgTBUh0YK4nmAzcNFd%2FP6srAau02UAlKod%2BKSjDBUskyf0%2Be6N%2BpDsRPJa%2BTn8GgZeTLQQrVPYa1JnYeH%2BxtRhV4kRpLViLwWSaBb1iQVSDxP78%2B6osyuACsonJ7sDRfXFukmS3GOyNoqtdVzk15X4B%2BrW826rkydWNgCB2TG1knKpSRfFLWPlceMI&X-Amz-Signature=d9867097e1329912fdd073f1934d28cb3afb5fb1d4d4e117506e573c3228f246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAKU7B7O%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDIFeXLISN56w%2BEaJckXXxLpDR5O%2BlgaFe4ialVUq%2FO%2BQIgPY%2FZ5v4N5CTZFU92fx9m00YSShoPYIdYMaaS85%2FBA4Qq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKjXRFTnOOO2pAKeTircA7XMY2rEvt9VSn8GCgGYRUZWRpGkIKZqUjiX6E2WutiSii4KdgtrM3AKEZ5DqVSvvimSbuj%2FyTWz%2FOy5MGzPF1ibiCC4b2Mkqt%2BX0mT9fpTFcFYhSxWVEcvw0tT9NedR%2B%2BtX7cSz8ZlTUW6jZGMks3VJmYO%2FLgyjZ6auin0XuM3s1AuRGPRMORSG3YSP8z9DlqYT%2BtuEHeRyil94TlZNdukHaPkafRLWvN3NgsmMQoPup4T2eU97Fq5pwyVrP7TvHmzWicgrQbmhgAMMQVG9ADp9I5FlQ2PT8VLDWVdF6g4PudlGmrHt4R2Iy62G%2F490o0rH%2FPll4biBooKq45pWkMNQKjz0EeZ83vMG5gLf5y0%2BtBNK6xnZlaGYRqcgiRcGKvGrZ8NY%2FR3O0ynAe7umFmE42T7GtZOJmniFxxuXX6VoXbO5ePJyZBoj6W6BP0ufFWsOYwFuLvyb1OJHjCIhIvIQE9rD%2BeykQF8fNhR8wKBmDwg7jA8vMOsE6N%2BoMpsCpCGlWCjjTyu1HHKfJBPaaI84dl9de9ZM0Zd1tc8v6auv3BB%2Buq6BGkSGBT2jy%2BvjGlSZ9LKb5C2%2F3e%2FLxbQNJB7JDmzgROPcjOPkRFuFDdMOzKbjT5vw%2BmFVQh5hMILcwcQGOqUBZhmT0kCyRkHTPdg0KV2b%2FHVVG9Jt9nw85sNgTBUh0YK4nmAzcNFd%2FP6srAau02UAlKod%2BKSjDBUskyf0%2Be6N%2BpDsRPJa%2BTn8GgZeTLQQrVPYa1JnYeH%2BxtRhV4kRpLViLwWSaBb1iQVSDxP78%2B6osyuACsonJ7sDRfXFukmS3GOyNoqtdVzk15X4B%2BrW826rkydWNgCB2TG1knKpSRfFLWPlceMI&X-Amz-Signature=f073312f2ba019842468d492cc61261377a045d69c1b196b15fdd66ed5350736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWLMXQG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T092012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDh9N%2BSPZoV%2BKX6N9ByL0E7xFtfgoyyoRbrFQYvLM%2FHAAIgBJu0a3H8HkkNzvNS%2F4gDfTDHb5oWloqWdayjAX9TLLIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDNAhhmodZc%2FSOnqG3yrcA4XOCRtQa3jclG%2Bk8NQuTpLfOqIdKCEQuhvrSsIZLtJepcbd0whGbS11UNXl5c4%2F%2FWOX%2FJF0gJmWZfhWG6oyu7SyKknP1DEbvw4yecwTmfKr6YnUfn%2FUL8rUel4%2BPLnDjnZN8j8St8eAR%2F8l%2F2FmshX0i5jGnL43n20fLtL%2FkLeOrxBm4XXk575Tzr8LnZkE0PECzqwK4AP0Z%2BbF2b3U%2Bg6Lnf1QwfDMnd5t%2Bw6AUpYkzjq%2BXsYymGZ55oW43lbVaGXyvGqjeN9bSZa%2FonDcGliqdlUeN%2FCoTBQ9feTohPIGnX2CvAitX4whA%2BJix%2F8ILqN%2FqxPOlhk0sczUBVrQWL2%2FHwwpkZ4Kniz6GtS51aPnuaVBTFvo4fyJ6vdMIT3Kvw%2F%2BjqtyUeKCPDzbSH13DoNUVNkneJqKLvix0Ah%2BuBIVRRXSr5%2FyW4Tc4wwVVEWETN%2FYDBQdPlShQJy1%2BspDsXHEj9F%2FjLFb55p7z%2BXukYaSkz64PXEaAeXFNXmikMNwjpz18hBTm41exQ91Lm6r%2Bj9ICFvdu1SCGVUne4jneGk1DyXB86jzVib0m2UlpYxFaFx3gALmWjmyDt%2B7OytwFV8X2BnG3C39RW3EWTnDB%2Bubkrb1IEf6%2Fzau254dMLjcwcQGOqUBmSoEbGNo%2BsxEVhl4B0x8CotlU%2BTcjxEB4NFWur7ZB68lYxS8hKX6iT28ftqBj1B49oxSTZrOToJQurU38Tm8VkUWJfmZbwMM9huy6iWWhdESTPd1EaH2Umm%2BvCW7pPdGUaz6nQ76eE7R6oCmokyZQZG4jjzlTGq8vl%2FtB6q6CPjO0V7NTM1nWx4AXOcmpGgUS8soIxlCCVINkX%2BBvUYju%2Bvnq%2BJE&X-Amz-Signature=2fe38e9308934ddb3cf68e3a13bf0305d90096aa7837caa860be4f120be71394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVMGZXG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDgXEBOTXdYRbr6mCLnpzC2mOSnY6lLbyV0Qj6ZveMEUQIhAKk5G3d%2BuuNBBdL%2Bjc68fLO3KbM96mIiuM%2FC6jst38JQKv8DCEIQABoMNjM3NDIzMTgzODA1IgxHvpskos%2BVu%2BT%2B%2F%2F8q3ANVHKQIWGUCTzR7U6ROVE%2B%2FhhPUQ9MAm4c3XQyShV%2BfAL3uNtQvJ5brdx0NtzKnpRUfJNViUP9Qiq6g9jGRyxxwBKsEqWdtNOIsT9sjn4bcicz8nGUCcZnMBs0RRwbT%2BLk8u8bxJoJ9Y891imDc1Yl3YXeg6GzNEUsx8IljSINWkLyTZVCfpelCJX3Cpdxr0xR7g5vF0XSE4W%2FVpKIQZXXwLNtVV5BhjfgZlMzcaImnbEZRcfppOhm1DM5p6VBeTmhZZAdnXsnuGlX%2BRU8AzBFt%2FKM7aojDa6PRDrvXyWZWZMLJAuZRATWU2kHhTVOVtTR%2FP62GavQi1bOkYj%2F%2FUMa7F4JEybFJWmixTeBX1hMRYcdQSKYXFID1F4qtHMroQkgLx%2FA4P6MtYeECoz7PR8FEqMf%2Bs28ReXRdlr6nvybGDdzHFO8GOtCtfN5QygB12bY7RfAajL0uf0dBPz0kXXvTi0Xk2BDZSlIOl5iVenk4l2mBzhx9se1QLvOeYr6rK788VSmxJJFAMns0iAeABELTPjhLyDO%2B0XHVyDtgzfB7vOAQu%2FGkBkvOcpwYwbVjI70VAzgGmvEzTfn0iOxlziUE1Ck7iVhGtyrnajfW7Sa%2F5wZjPxTLXn7dBkyr3TCs3cHEBjqkAQud7lLFEvUdyqBI%2BndMuwgVr7HfWylmoFxa5v%2BekE6kCQQg7IiEihbyqQTog2AH%2FaFfhD8dt6XWc6fAeEEA7A9YDY%2Bcc3lDA7SIzy%2FPywsSDuaD%2BJzkH9LJxuZYryDeeS9ha7Laa9BVPKjD790hx1u45W1VvtqHWdDkFfYPipRscT7CE2gpoxYCO2Et11bmdhEh7XMN9ckBRxTSo97jNJU0CTiW&X-Amz-Signature=48e977cb33ccc6bb7e5f6c8d847e2dc64fe01640d7200fa3329a2fc07cb4e43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVMGZXG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDgXEBOTXdYRbr6mCLnpzC2mOSnY6lLbyV0Qj6ZveMEUQIhAKk5G3d%2BuuNBBdL%2Bjc68fLO3KbM96mIiuM%2FC6jst38JQKv8DCEIQABoMNjM3NDIzMTgzODA1IgxHvpskos%2BVu%2BT%2B%2F%2F8q3ANVHKQIWGUCTzR7U6ROVE%2B%2FhhPUQ9MAm4c3XQyShV%2BfAL3uNtQvJ5brdx0NtzKnpRUfJNViUP9Qiq6g9jGRyxxwBKsEqWdtNOIsT9sjn4bcicz8nGUCcZnMBs0RRwbT%2BLk8u8bxJoJ9Y891imDc1Yl3YXeg6GzNEUsx8IljSINWkLyTZVCfpelCJX3Cpdxr0xR7g5vF0XSE4W%2FVpKIQZXXwLNtVV5BhjfgZlMzcaImnbEZRcfppOhm1DM5p6VBeTmhZZAdnXsnuGlX%2BRU8AzBFt%2FKM7aojDa6PRDrvXyWZWZMLJAuZRATWU2kHhTVOVtTR%2FP62GavQi1bOkYj%2F%2FUMa7F4JEybFJWmixTeBX1hMRYcdQSKYXFID1F4qtHMroQkgLx%2FA4P6MtYeECoz7PR8FEqMf%2Bs28ReXRdlr6nvybGDdzHFO8GOtCtfN5QygB12bY7RfAajL0uf0dBPz0kXXvTi0Xk2BDZSlIOl5iVenk4l2mBzhx9se1QLvOeYr6rK788VSmxJJFAMns0iAeABELTPjhLyDO%2B0XHVyDtgzfB7vOAQu%2FGkBkvOcpwYwbVjI70VAzgGmvEzTfn0iOxlziUE1Ck7iVhGtyrnajfW7Sa%2F5wZjPxTLXn7dBkyr3TCs3cHEBjqkAQud7lLFEvUdyqBI%2BndMuwgVr7HfWylmoFxa5v%2BekE6kCQQg7IiEihbyqQTog2AH%2FaFfhD8dt6XWc6fAeEEA7A9YDY%2Bcc3lDA7SIzy%2FPywsSDuaD%2BJzkH9LJxuZYryDeeS9ha7Laa9BVPKjD790hx1u45W1VvtqHWdDkFfYPipRscT7CE2gpoxYCO2Et11bmdhEh7XMN9ckBRxTSo97jNJU0CTiW&X-Amz-Signature=ec15d0568a7da9c180902be6e514237d50c7696dc7fdb99c857acde186a1ff7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVMGZXG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDgXEBOTXdYRbr6mCLnpzC2mOSnY6lLbyV0Qj6ZveMEUQIhAKk5G3d%2BuuNBBdL%2Bjc68fLO3KbM96mIiuM%2FC6jst38JQKv8DCEIQABoMNjM3NDIzMTgzODA1IgxHvpskos%2BVu%2BT%2B%2F%2F8q3ANVHKQIWGUCTzR7U6ROVE%2B%2FhhPUQ9MAm4c3XQyShV%2BfAL3uNtQvJ5brdx0NtzKnpRUfJNViUP9Qiq6g9jGRyxxwBKsEqWdtNOIsT9sjn4bcicz8nGUCcZnMBs0RRwbT%2BLk8u8bxJoJ9Y891imDc1Yl3YXeg6GzNEUsx8IljSINWkLyTZVCfpelCJX3Cpdxr0xR7g5vF0XSE4W%2FVpKIQZXXwLNtVV5BhjfgZlMzcaImnbEZRcfppOhm1DM5p6VBeTmhZZAdnXsnuGlX%2BRU8AzBFt%2FKM7aojDa6PRDrvXyWZWZMLJAuZRATWU2kHhTVOVtTR%2FP62GavQi1bOkYj%2F%2FUMa7F4JEybFJWmixTeBX1hMRYcdQSKYXFID1F4qtHMroQkgLx%2FA4P6MtYeECoz7PR8FEqMf%2Bs28ReXRdlr6nvybGDdzHFO8GOtCtfN5QygB12bY7RfAajL0uf0dBPz0kXXvTi0Xk2BDZSlIOl5iVenk4l2mBzhx9se1QLvOeYr6rK788VSmxJJFAMns0iAeABELTPjhLyDO%2B0XHVyDtgzfB7vOAQu%2FGkBkvOcpwYwbVjI70VAzgGmvEzTfn0iOxlziUE1Ck7iVhGtyrnajfW7Sa%2F5wZjPxTLXn7dBkyr3TCs3cHEBjqkAQud7lLFEvUdyqBI%2BndMuwgVr7HfWylmoFxa5v%2BekE6kCQQg7IiEihbyqQTog2AH%2FaFfhD8dt6XWc6fAeEEA7A9YDY%2Bcc3lDA7SIzy%2FPywsSDuaD%2BJzkH9LJxuZYryDeeS9ha7Laa9BVPKjD790hx1u45W1VvtqHWdDkFfYPipRscT7CE2gpoxYCO2Et11bmdhEh7XMN9ckBRxTSo97jNJU0CTiW&X-Amz-Signature=f0f80fffed4fd137b0e172ff133f1d7d4406d955b65656c99d894ef498e92a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVMGZXG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDgXEBOTXdYRbr6mCLnpzC2mOSnY6lLbyV0Qj6ZveMEUQIhAKk5G3d%2BuuNBBdL%2Bjc68fLO3KbM96mIiuM%2FC6jst38JQKv8DCEIQABoMNjM3NDIzMTgzODA1IgxHvpskos%2BVu%2BT%2B%2F%2F8q3ANVHKQIWGUCTzR7U6ROVE%2B%2FhhPUQ9MAm4c3XQyShV%2BfAL3uNtQvJ5brdx0NtzKnpRUfJNViUP9Qiq6g9jGRyxxwBKsEqWdtNOIsT9sjn4bcicz8nGUCcZnMBs0RRwbT%2BLk8u8bxJoJ9Y891imDc1Yl3YXeg6GzNEUsx8IljSINWkLyTZVCfpelCJX3Cpdxr0xR7g5vF0XSE4W%2FVpKIQZXXwLNtVV5BhjfgZlMzcaImnbEZRcfppOhm1DM5p6VBeTmhZZAdnXsnuGlX%2BRU8AzBFt%2FKM7aojDa6PRDrvXyWZWZMLJAuZRATWU2kHhTVOVtTR%2FP62GavQi1bOkYj%2F%2FUMa7F4JEybFJWmixTeBX1hMRYcdQSKYXFID1F4qtHMroQkgLx%2FA4P6MtYeECoz7PR8FEqMf%2Bs28ReXRdlr6nvybGDdzHFO8GOtCtfN5QygB12bY7RfAajL0uf0dBPz0kXXvTi0Xk2BDZSlIOl5iVenk4l2mBzhx9se1QLvOeYr6rK788VSmxJJFAMns0iAeABELTPjhLyDO%2B0XHVyDtgzfB7vOAQu%2FGkBkvOcpwYwbVjI70VAzgGmvEzTfn0iOxlziUE1Ck7iVhGtyrnajfW7Sa%2F5wZjPxTLXn7dBkyr3TCs3cHEBjqkAQud7lLFEvUdyqBI%2BndMuwgVr7HfWylmoFxa5v%2BekE6kCQQg7IiEihbyqQTog2AH%2FaFfhD8dt6XWc6fAeEEA7A9YDY%2Bcc3lDA7SIzy%2FPywsSDuaD%2BJzkH9LJxuZYryDeeS9ha7Laa9BVPKjD790hx1u45W1VvtqHWdDkFfYPipRscT7CE2gpoxYCO2Et11bmdhEh7XMN9ckBRxTSo97jNJU0CTiW&X-Amz-Signature=f1a011578664df48ce77498e5ae71e9e881d9de8b12585447be0497f0060b0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVMGZXG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDgXEBOTXdYRbr6mCLnpzC2mOSnY6lLbyV0Qj6ZveMEUQIhAKk5G3d%2BuuNBBdL%2Bjc68fLO3KbM96mIiuM%2FC6jst38JQKv8DCEIQABoMNjM3NDIzMTgzODA1IgxHvpskos%2BVu%2BT%2B%2F%2F8q3ANVHKQIWGUCTzR7U6ROVE%2B%2FhhPUQ9MAm4c3XQyShV%2BfAL3uNtQvJ5brdx0NtzKnpRUfJNViUP9Qiq6g9jGRyxxwBKsEqWdtNOIsT9sjn4bcicz8nGUCcZnMBs0RRwbT%2BLk8u8bxJoJ9Y891imDc1Yl3YXeg6GzNEUsx8IljSINWkLyTZVCfpelCJX3Cpdxr0xR7g5vF0XSE4W%2FVpKIQZXXwLNtVV5BhjfgZlMzcaImnbEZRcfppOhm1DM5p6VBeTmhZZAdnXsnuGlX%2BRU8AzBFt%2FKM7aojDa6PRDrvXyWZWZMLJAuZRATWU2kHhTVOVtTR%2FP62GavQi1bOkYj%2F%2FUMa7F4JEybFJWmixTeBX1hMRYcdQSKYXFID1F4qtHMroQkgLx%2FA4P6MtYeECoz7PR8FEqMf%2Bs28ReXRdlr6nvybGDdzHFO8GOtCtfN5QygB12bY7RfAajL0uf0dBPz0kXXvTi0Xk2BDZSlIOl5iVenk4l2mBzhx9se1QLvOeYr6rK788VSmxJJFAMns0iAeABELTPjhLyDO%2B0XHVyDtgzfB7vOAQu%2FGkBkvOcpwYwbVjI70VAzgGmvEzTfn0iOxlziUE1Ck7iVhGtyrnajfW7Sa%2F5wZjPxTLXn7dBkyr3TCs3cHEBjqkAQud7lLFEvUdyqBI%2BndMuwgVr7HfWylmoFxa5v%2BekE6kCQQg7IiEihbyqQTog2AH%2FaFfhD8dt6XWc6fAeEEA7A9YDY%2Bcc3lDA7SIzy%2FPywsSDuaD%2BJzkH9LJxuZYryDeeS9ha7Laa9BVPKjD790hx1u45W1VvtqHWdDkFfYPipRscT7CE2gpoxYCO2Et11bmdhEh7XMN9ckBRxTSo97jNJU0CTiW&X-Amz-Signature=30a3b150c12206f8549d4970e4bcf3aa5965029164a28ab8f1bcd47a9803e426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVMGZXG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDgXEBOTXdYRbr6mCLnpzC2mOSnY6lLbyV0Qj6ZveMEUQIhAKk5G3d%2BuuNBBdL%2Bjc68fLO3KbM96mIiuM%2FC6jst38JQKv8DCEIQABoMNjM3NDIzMTgzODA1IgxHvpskos%2BVu%2BT%2B%2F%2F8q3ANVHKQIWGUCTzR7U6ROVE%2B%2FhhPUQ9MAm4c3XQyShV%2BfAL3uNtQvJ5brdx0NtzKnpRUfJNViUP9Qiq6g9jGRyxxwBKsEqWdtNOIsT9sjn4bcicz8nGUCcZnMBs0RRwbT%2BLk8u8bxJoJ9Y891imDc1Yl3YXeg6GzNEUsx8IljSINWkLyTZVCfpelCJX3Cpdxr0xR7g5vF0XSE4W%2FVpKIQZXXwLNtVV5BhjfgZlMzcaImnbEZRcfppOhm1DM5p6VBeTmhZZAdnXsnuGlX%2BRU8AzBFt%2FKM7aojDa6PRDrvXyWZWZMLJAuZRATWU2kHhTVOVtTR%2FP62GavQi1bOkYj%2F%2FUMa7F4JEybFJWmixTeBX1hMRYcdQSKYXFID1F4qtHMroQkgLx%2FA4P6MtYeECoz7PR8FEqMf%2Bs28ReXRdlr6nvybGDdzHFO8GOtCtfN5QygB12bY7RfAajL0uf0dBPz0kXXvTi0Xk2BDZSlIOl5iVenk4l2mBzhx9se1QLvOeYr6rK788VSmxJJFAMns0iAeABELTPjhLyDO%2B0XHVyDtgzfB7vOAQu%2FGkBkvOcpwYwbVjI70VAzgGmvEzTfn0iOxlziUE1Ck7iVhGtyrnajfW7Sa%2F5wZjPxTLXn7dBkyr3TCs3cHEBjqkAQud7lLFEvUdyqBI%2BndMuwgVr7HfWylmoFxa5v%2BekE6kCQQg7IiEihbyqQTog2AH%2FaFfhD8dt6XWc6fAeEEA7A9YDY%2Bcc3lDA7SIzy%2FPywsSDuaD%2BJzkH9LJxuZYryDeeS9ha7Laa9BVPKjD790hx1u45W1VvtqHWdDkFfYPipRscT7CE2gpoxYCO2Et11bmdhEh7XMN9ckBRxTSo97jNJU0CTiW&X-Amz-Signature=bf79c293eb7b90e34c499c9c8f05e56133a77cd10b94d7eb27d3885bad722ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVMGZXG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDgXEBOTXdYRbr6mCLnpzC2mOSnY6lLbyV0Qj6ZveMEUQIhAKk5G3d%2BuuNBBdL%2Bjc68fLO3KbM96mIiuM%2FC6jst38JQKv8DCEIQABoMNjM3NDIzMTgzODA1IgxHvpskos%2BVu%2BT%2B%2F%2F8q3ANVHKQIWGUCTzR7U6ROVE%2B%2FhhPUQ9MAm4c3XQyShV%2BfAL3uNtQvJ5brdx0NtzKnpRUfJNViUP9Qiq6g9jGRyxxwBKsEqWdtNOIsT9sjn4bcicz8nGUCcZnMBs0RRwbT%2BLk8u8bxJoJ9Y891imDc1Yl3YXeg6GzNEUsx8IljSINWkLyTZVCfpelCJX3Cpdxr0xR7g5vF0XSE4W%2FVpKIQZXXwLNtVV5BhjfgZlMzcaImnbEZRcfppOhm1DM5p6VBeTmhZZAdnXsnuGlX%2BRU8AzBFt%2FKM7aojDa6PRDrvXyWZWZMLJAuZRATWU2kHhTVOVtTR%2FP62GavQi1bOkYj%2F%2FUMa7F4JEybFJWmixTeBX1hMRYcdQSKYXFID1F4qtHMroQkgLx%2FA4P6MtYeECoz7PR8FEqMf%2Bs28ReXRdlr6nvybGDdzHFO8GOtCtfN5QygB12bY7RfAajL0uf0dBPz0kXXvTi0Xk2BDZSlIOl5iVenk4l2mBzhx9se1QLvOeYr6rK788VSmxJJFAMns0iAeABELTPjhLyDO%2B0XHVyDtgzfB7vOAQu%2FGkBkvOcpwYwbVjI70VAzgGmvEzTfn0iOxlziUE1Ck7iVhGtyrnajfW7Sa%2F5wZjPxTLXn7dBkyr3TCs3cHEBjqkAQud7lLFEvUdyqBI%2BndMuwgVr7HfWylmoFxa5v%2BekE6kCQQg7IiEihbyqQTog2AH%2FaFfhD8dt6XWc6fAeEEA7A9YDY%2Bcc3lDA7SIzy%2FPywsSDuaD%2BJzkH9LJxuZYryDeeS9ha7Laa9BVPKjD790hx1u45W1VvtqHWdDkFfYPipRscT7CE2gpoxYCO2Et11bmdhEh7XMN9ckBRxTSo97jNJU0CTiW&X-Amz-Signature=a6a865d7f35ab97b6155183a44c90b0b5d3488c85cf4383212048ebaff8900af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVMGZXG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDgXEBOTXdYRbr6mCLnpzC2mOSnY6lLbyV0Qj6ZveMEUQIhAKk5G3d%2BuuNBBdL%2Bjc68fLO3KbM96mIiuM%2FC6jst38JQKv8DCEIQABoMNjM3NDIzMTgzODA1IgxHvpskos%2BVu%2BT%2B%2F%2F8q3ANVHKQIWGUCTzR7U6ROVE%2B%2FhhPUQ9MAm4c3XQyShV%2BfAL3uNtQvJ5brdx0NtzKnpRUfJNViUP9Qiq6g9jGRyxxwBKsEqWdtNOIsT9sjn4bcicz8nGUCcZnMBs0RRwbT%2BLk8u8bxJoJ9Y891imDc1Yl3YXeg6GzNEUsx8IljSINWkLyTZVCfpelCJX3Cpdxr0xR7g5vF0XSE4W%2FVpKIQZXXwLNtVV5BhjfgZlMzcaImnbEZRcfppOhm1DM5p6VBeTmhZZAdnXsnuGlX%2BRU8AzBFt%2FKM7aojDa6PRDrvXyWZWZMLJAuZRATWU2kHhTVOVtTR%2FP62GavQi1bOkYj%2F%2FUMa7F4JEybFJWmixTeBX1hMRYcdQSKYXFID1F4qtHMroQkgLx%2FA4P6MtYeECoz7PR8FEqMf%2Bs28ReXRdlr6nvybGDdzHFO8GOtCtfN5QygB12bY7RfAajL0uf0dBPz0kXXvTi0Xk2BDZSlIOl5iVenk4l2mBzhx9se1QLvOeYr6rK788VSmxJJFAMns0iAeABELTPjhLyDO%2B0XHVyDtgzfB7vOAQu%2FGkBkvOcpwYwbVjI70VAzgGmvEzTfn0iOxlziUE1Ck7iVhGtyrnajfW7Sa%2F5wZjPxTLXn7dBkyr3TCs3cHEBjqkAQud7lLFEvUdyqBI%2BndMuwgVr7HfWylmoFxa5v%2BekE6kCQQg7IiEihbyqQTog2AH%2FaFfhD8dt6XWc6fAeEEA7A9YDY%2Bcc3lDA7SIzy%2FPywsSDuaD%2BJzkH9LJxuZYryDeeS9ha7Laa9BVPKjD790hx1u45W1VvtqHWdDkFfYPipRscT7CE2gpoxYCO2Et11bmdhEh7XMN9ckBRxTSo97jNJU0CTiW&X-Amz-Signature=0c450f43667b8c1d9a824730434ffe902868eb40fba354240aac5f7818490920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVMGZXG%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDgXEBOTXdYRbr6mCLnpzC2mOSnY6lLbyV0Qj6ZveMEUQIhAKk5G3d%2BuuNBBdL%2Bjc68fLO3KbM96mIiuM%2FC6jst38JQKv8DCEIQABoMNjM3NDIzMTgzODA1IgxHvpskos%2BVu%2BT%2B%2F%2F8q3ANVHKQIWGUCTzR7U6ROVE%2B%2FhhPUQ9MAm4c3XQyShV%2BfAL3uNtQvJ5brdx0NtzKnpRUfJNViUP9Qiq6g9jGRyxxwBKsEqWdtNOIsT9sjn4bcicz8nGUCcZnMBs0RRwbT%2BLk8u8bxJoJ9Y891imDc1Yl3YXeg6GzNEUsx8IljSINWkLyTZVCfpelCJX3Cpdxr0xR7g5vF0XSE4W%2FVpKIQZXXwLNtVV5BhjfgZlMzcaImnbEZRcfppOhm1DM5p6VBeTmhZZAdnXsnuGlX%2BRU8AzBFt%2FKM7aojDa6PRDrvXyWZWZMLJAuZRATWU2kHhTVOVtTR%2FP62GavQi1bOkYj%2F%2FUMa7F4JEybFJWmixTeBX1hMRYcdQSKYXFID1F4qtHMroQkgLx%2FA4P6MtYeECoz7PR8FEqMf%2Bs28ReXRdlr6nvybGDdzHFO8GOtCtfN5QygB12bY7RfAajL0uf0dBPz0kXXvTi0Xk2BDZSlIOl5iVenk4l2mBzhx9se1QLvOeYr6rK788VSmxJJFAMns0iAeABELTPjhLyDO%2B0XHVyDtgzfB7vOAQu%2FGkBkvOcpwYwbVjI70VAzgGmvEzTfn0iOxlziUE1Ck7iVhGtyrnajfW7Sa%2F5wZjPxTLXn7dBkyr3TCs3cHEBjqkAQud7lLFEvUdyqBI%2BndMuwgVr7HfWylmoFxa5v%2BekE6kCQQg7IiEihbyqQTog2AH%2FaFfhD8dt6XWc6fAeEEA7A9YDY%2Bcc3lDA7SIzy%2FPywsSDuaD%2BJzkH9LJxuZYryDeeS9ha7Laa9BVPKjD790hx1u45W1VvtqHWdDkFfYPipRscT7CE2gpoxYCO2Et11bmdhEh7XMN9ckBRxTSo97jNJU0CTiW&X-Amz-Signature=4ce3a0bf0d87c69c4869041d11aa354e21a4bad91866f13c5f83ab7600e17f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
