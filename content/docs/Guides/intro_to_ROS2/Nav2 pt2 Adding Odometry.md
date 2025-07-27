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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZD5526W%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGtaje6tSUe06LalCsXhEB1rUxhTtIijJqVjMTZOs52hAiAKObESraHcS8JPnsk8qkyv62z4%2FgDGYKIX53L05Ycs%2FSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzAbKVj6nNzQdYV51KtwDj0ucIbbetQzWlqmsp87KQo15Vw3lqI9ngm4dfEp4atOYnOprgSkI60JzEuhzIYE11d5Ndj15RZBytfSYUqAlZsDBHqnJyhk8ZaDZ3KNNW6qhgFY899yHLnh0wciCnRrPC44AdepdECxghd68p99KVb6bKnmVdOeWYrEWD8T1FxGIBBnieIt4QON4dXNnK6eC8FZD0wh5pXkSFU57oIW3s2YEIJnoBetOPweeetA4PZ6qHvpHRlCNFuKqE4OnRjTTuUH125burIPUUY1GVFbWB%2B7wtAE0%2BpBhhLnBeUXZV2vsW7i3WaB8HvxHza%2Fs%2BVE7cZG9h%2BwfHbovbR3wPSkQpf4TAddula9tP9ZfTUlCaVWGwqNO7NjMOeQEpBJgdT1TnVNxoSCbN%2F%2FStp4erUl2peAtxHsMJvEnc7iWDjegEj%2BELdlFlPs9skXRZvATKa%2BcteopZ4RRR3wf8pe2nXSXIz8w%2BYZOBMCwjjV%2BaVpyc0F4%2B1Lv1XuhH68JqRmskKCQSZLhW6QJVRRKX%2B9pMSFwhQ1qaxaDRuvV%2F5fwhXDhqP6%2B%2Bj%2FEaaAnBUOeNHkIm59OOJ5fCOU2JqYjcdf4mx3oaqJ7SQ8C1ZNQu7wLW%2FzFngpQQg2OxTnZTVeiSZUw77qWxAY6pgGPh8VIThCMvkcCx9ToukeecCY2gywpDChesVMa2wdgO%2B8KiQiJx2KrFbKIErW8fpnyAx%2BIeK1ADO013p9ROxleQAaZsQicrm761hqnFoetByoZl6O5%2FPA%2B87Ty0%2FBt1sf8m9qyYkmGF91VpREhfyb9XZrjeG%2BQZtEVeJHM5tiNMRIMMpLu3YW4YCw53cm76SPq4Wkg4cTydq1rrmCHqMW8t1VzCVQa&X-Amz-Signature=d443f30eb8f3b1c84dcae00716f0f34f259eda2aa7b2261732f2f88be9edf1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZD5526W%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGtaje6tSUe06LalCsXhEB1rUxhTtIijJqVjMTZOs52hAiAKObESraHcS8JPnsk8qkyv62z4%2FgDGYKIX53L05Ycs%2FSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzAbKVj6nNzQdYV51KtwDj0ucIbbetQzWlqmsp87KQo15Vw3lqI9ngm4dfEp4atOYnOprgSkI60JzEuhzIYE11d5Ndj15RZBytfSYUqAlZsDBHqnJyhk8ZaDZ3KNNW6qhgFY899yHLnh0wciCnRrPC44AdepdECxghd68p99KVb6bKnmVdOeWYrEWD8T1FxGIBBnieIt4QON4dXNnK6eC8FZD0wh5pXkSFU57oIW3s2YEIJnoBetOPweeetA4PZ6qHvpHRlCNFuKqE4OnRjTTuUH125burIPUUY1GVFbWB%2B7wtAE0%2BpBhhLnBeUXZV2vsW7i3WaB8HvxHza%2Fs%2BVE7cZG9h%2BwfHbovbR3wPSkQpf4TAddula9tP9ZfTUlCaVWGwqNO7NjMOeQEpBJgdT1TnVNxoSCbN%2F%2FStp4erUl2peAtxHsMJvEnc7iWDjegEj%2BELdlFlPs9skXRZvATKa%2BcteopZ4RRR3wf8pe2nXSXIz8w%2BYZOBMCwjjV%2BaVpyc0F4%2B1Lv1XuhH68JqRmskKCQSZLhW6QJVRRKX%2B9pMSFwhQ1qaxaDRuvV%2F5fwhXDhqP6%2B%2Bj%2FEaaAnBUOeNHkIm59OOJ5fCOU2JqYjcdf4mx3oaqJ7SQ8C1ZNQu7wLW%2FzFngpQQg2OxTnZTVeiSZUw77qWxAY6pgGPh8VIThCMvkcCx9ToukeecCY2gywpDChesVMa2wdgO%2B8KiQiJx2KrFbKIErW8fpnyAx%2BIeK1ADO013p9ROxleQAaZsQicrm761hqnFoetByoZl6O5%2FPA%2B87Ty0%2FBt1sf8m9qyYkmGF91VpREhfyb9XZrjeG%2BQZtEVeJHM5tiNMRIMMpLu3YW4YCw53cm76SPq4Wkg4cTydq1rrmCHqMW8t1VzCVQa&X-Amz-Signature=b91e03ef21fd72c0aa267a437b06498849cf259f27ea1ee4f3171ad79576b430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZD5526W%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGtaje6tSUe06LalCsXhEB1rUxhTtIijJqVjMTZOs52hAiAKObESraHcS8JPnsk8qkyv62z4%2FgDGYKIX53L05Ycs%2FSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzAbKVj6nNzQdYV51KtwDj0ucIbbetQzWlqmsp87KQo15Vw3lqI9ngm4dfEp4atOYnOprgSkI60JzEuhzIYE11d5Ndj15RZBytfSYUqAlZsDBHqnJyhk8ZaDZ3KNNW6qhgFY899yHLnh0wciCnRrPC44AdepdECxghd68p99KVb6bKnmVdOeWYrEWD8T1FxGIBBnieIt4QON4dXNnK6eC8FZD0wh5pXkSFU57oIW3s2YEIJnoBetOPweeetA4PZ6qHvpHRlCNFuKqE4OnRjTTuUH125burIPUUY1GVFbWB%2B7wtAE0%2BpBhhLnBeUXZV2vsW7i3WaB8HvxHza%2Fs%2BVE7cZG9h%2BwfHbovbR3wPSkQpf4TAddula9tP9ZfTUlCaVWGwqNO7NjMOeQEpBJgdT1TnVNxoSCbN%2F%2FStp4erUl2peAtxHsMJvEnc7iWDjegEj%2BELdlFlPs9skXRZvATKa%2BcteopZ4RRR3wf8pe2nXSXIz8w%2BYZOBMCwjjV%2BaVpyc0F4%2B1Lv1XuhH68JqRmskKCQSZLhW6QJVRRKX%2B9pMSFwhQ1qaxaDRuvV%2F5fwhXDhqP6%2B%2Bj%2FEaaAnBUOeNHkIm59OOJ5fCOU2JqYjcdf4mx3oaqJ7SQ8C1ZNQu7wLW%2FzFngpQQg2OxTnZTVeiSZUw77qWxAY6pgGPh8VIThCMvkcCx9ToukeecCY2gywpDChesVMa2wdgO%2B8KiQiJx2KrFbKIErW8fpnyAx%2BIeK1ADO013p9ROxleQAaZsQicrm761hqnFoetByoZl6O5%2FPA%2B87Ty0%2FBt1sf8m9qyYkmGF91VpREhfyb9XZrjeG%2BQZtEVeJHM5tiNMRIMMpLu3YW4YCw53cm76SPq4Wkg4cTydq1rrmCHqMW8t1VzCVQa&X-Amz-Signature=a36102824092142bbb7691fd739f77ff6b959a819a235cc1a5d90cbdbc02cd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZD5526W%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGtaje6tSUe06LalCsXhEB1rUxhTtIijJqVjMTZOs52hAiAKObESraHcS8JPnsk8qkyv62z4%2FgDGYKIX53L05Ycs%2FSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzAbKVj6nNzQdYV51KtwDj0ucIbbetQzWlqmsp87KQo15Vw3lqI9ngm4dfEp4atOYnOprgSkI60JzEuhzIYE11d5Ndj15RZBytfSYUqAlZsDBHqnJyhk8ZaDZ3KNNW6qhgFY899yHLnh0wciCnRrPC44AdepdECxghd68p99KVb6bKnmVdOeWYrEWD8T1FxGIBBnieIt4QON4dXNnK6eC8FZD0wh5pXkSFU57oIW3s2YEIJnoBetOPweeetA4PZ6qHvpHRlCNFuKqE4OnRjTTuUH125burIPUUY1GVFbWB%2B7wtAE0%2BpBhhLnBeUXZV2vsW7i3WaB8HvxHza%2Fs%2BVE7cZG9h%2BwfHbovbR3wPSkQpf4TAddula9tP9ZfTUlCaVWGwqNO7NjMOeQEpBJgdT1TnVNxoSCbN%2F%2FStp4erUl2peAtxHsMJvEnc7iWDjegEj%2BELdlFlPs9skXRZvATKa%2BcteopZ4RRR3wf8pe2nXSXIz8w%2BYZOBMCwjjV%2BaVpyc0F4%2B1Lv1XuhH68JqRmskKCQSZLhW6QJVRRKX%2B9pMSFwhQ1qaxaDRuvV%2F5fwhXDhqP6%2B%2Bj%2FEaaAnBUOeNHkIm59OOJ5fCOU2JqYjcdf4mx3oaqJ7SQ8C1ZNQu7wLW%2FzFngpQQg2OxTnZTVeiSZUw77qWxAY6pgGPh8VIThCMvkcCx9ToukeecCY2gywpDChesVMa2wdgO%2B8KiQiJx2KrFbKIErW8fpnyAx%2BIeK1ADO013p9ROxleQAaZsQicrm761hqnFoetByoZl6O5%2FPA%2B87Ty0%2FBt1sf8m9qyYkmGF91VpREhfyb9XZrjeG%2BQZtEVeJHM5tiNMRIMMpLu3YW4YCw53cm76SPq4Wkg4cTydq1rrmCHqMW8t1VzCVQa&X-Amz-Signature=92803d0d022c8d2cfbcad46efbb748673254a5c515bdff913657152050e07f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZD5526W%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGtaje6tSUe06LalCsXhEB1rUxhTtIijJqVjMTZOs52hAiAKObESraHcS8JPnsk8qkyv62z4%2FgDGYKIX53L05Ycs%2FSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzAbKVj6nNzQdYV51KtwDj0ucIbbetQzWlqmsp87KQo15Vw3lqI9ngm4dfEp4atOYnOprgSkI60JzEuhzIYE11d5Ndj15RZBytfSYUqAlZsDBHqnJyhk8ZaDZ3KNNW6qhgFY899yHLnh0wciCnRrPC44AdepdECxghd68p99KVb6bKnmVdOeWYrEWD8T1FxGIBBnieIt4QON4dXNnK6eC8FZD0wh5pXkSFU57oIW3s2YEIJnoBetOPweeetA4PZ6qHvpHRlCNFuKqE4OnRjTTuUH125burIPUUY1GVFbWB%2B7wtAE0%2BpBhhLnBeUXZV2vsW7i3WaB8HvxHza%2Fs%2BVE7cZG9h%2BwfHbovbR3wPSkQpf4TAddula9tP9ZfTUlCaVWGwqNO7NjMOeQEpBJgdT1TnVNxoSCbN%2F%2FStp4erUl2peAtxHsMJvEnc7iWDjegEj%2BELdlFlPs9skXRZvATKa%2BcteopZ4RRR3wf8pe2nXSXIz8w%2BYZOBMCwjjV%2BaVpyc0F4%2B1Lv1XuhH68JqRmskKCQSZLhW6QJVRRKX%2B9pMSFwhQ1qaxaDRuvV%2F5fwhXDhqP6%2B%2Bj%2FEaaAnBUOeNHkIm59OOJ5fCOU2JqYjcdf4mx3oaqJ7SQ8C1ZNQu7wLW%2FzFngpQQg2OxTnZTVeiSZUw77qWxAY6pgGPh8VIThCMvkcCx9ToukeecCY2gywpDChesVMa2wdgO%2B8KiQiJx2KrFbKIErW8fpnyAx%2BIeK1ADO013p9ROxleQAaZsQicrm761hqnFoetByoZl6O5%2FPA%2B87Ty0%2FBt1sf8m9qyYkmGF91VpREhfyb9XZrjeG%2BQZtEVeJHM5tiNMRIMMpLu3YW4YCw53cm76SPq4Wkg4cTydq1rrmCHqMW8t1VzCVQa&X-Amz-Signature=4e755b5ba1b834c26a47e77b669d2c44283c7bf8e783759cb5f2d48b0c88b618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZD5526W%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGtaje6tSUe06LalCsXhEB1rUxhTtIijJqVjMTZOs52hAiAKObESraHcS8JPnsk8qkyv62z4%2FgDGYKIX53L05Ycs%2FSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzAbKVj6nNzQdYV51KtwDj0ucIbbetQzWlqmsp87KQo15Vw3lqI9ngm4dfEp4atOYnOprgSkI60JzEuhzIYE11d5Ndj15RZBytfSYUqAlZsDBHqnJyhk8ZaDZ3KNNW6qhgFY899yHLnh0wciCnRrPC44AdepdECxghd68p99KVb6bKnmVdOeWYrEWD8T1FxGIBBnieIt4QON4dXNnK6eC8FZD0wh5pXkSFU57oIW3s2YEIJnoBetOPweeetA4PZ6qHvpHRlCNFuKqE4OnRjTTuUH125burIPUUY1GVFbWB%2B7wtAE0%2BpBhhLnBeUXZV2vsW7i3WaB8HvxHza%2Fs%2BVE7cZG9h%2BwfHbovbR3wPSkQpf4TAddula9tP9ZfTUlCaVWGwqNO7NjMOeQEpBJgdT1TnVNxoSCbN%2F%2FStp4erUl2peAtxHsMJvEnc7iWDjegEj%2BELdlFlPs9skXRZvATKa%2BcteopZ4RRR3wf8pe2nXSXIz8w%2BYZOBMCwjjV%2BaVpyc0F4%2B1Lv1XuhH68JqRmskKCQSZLhW6QJVRRKX%2B9pMSFwhQ1qaxaDRuvV%2F5fwhXDhqP6%2B%2Bj%2FEaaAnBUOeNHkIm59OOJ5fCOU2JqYjcdf4mx3oaqJ7SQ8C1ZNQu7wLW%2FzFngpQQg2OxTnZTVeiSZUw77qWxAY6pgGPh8VIThCMvkcCx9ToukeecCY2gywpDChesVMa2wdgO%2B8KiQiJx2KrFbKIErW8fpnyAx%2BIeK1ADO013p9ROxleQAaZsQicrm761hqnFoetByoZl6O5%2FPA%2B87Ty0%2FBt1sf8m9qyYkmGF91VpREhfyb9XZrjeG%2BQZtEVeJHM5tiNMRIMMpLu3YW4YCw53cm76SPq4Wkg4cTydq1rrmCHqMW8t1VzCVQa&X-Amz-Signature=67fc81cac8a84ed8d61787fe39b89e68c6b3e7afa8505375bdebc5298291c014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZD5526W%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGtaje6tSUe06LalCsXhEB1rUxhTtIijJqVjMTZOs52hAiAKObESraHcS8JPnsk8qkyv62z4%2FgDGYKIX53L05Ycs%2FSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzAbKVj6nNzQdYV51KtwDj0ucIbbetQzWlqmsp87KQo15Vw3lqI9ngm4dfEp4atOYnOprgSkI60JzEuhzIYE11d5Ndj15RZBytfSYUqAlZsDBHqnJyhk8ZaDZ3KNNW6qhgFY899yHLnh0wciCnRrPC44AdepdECxghd68p99KVb6bKnmVdOeWYrEWD8T1FxGIBBnieIt4QON4dXNnK6eC8FZD0wh5pXkSFU57oIW3s2YEIJnoBetOPweeetA4PZ6qHvpHRlCNFuKqE4OnRjTTuUH125burIPUUY1GVFbWB%2B7wtAE0%2BpBhhLnBeUXZV2vsW7i3WaB8HvxHza%2Fs%2BVE7cZG9h%2BwfHbovbR3wPSkQpf4TAddula9tP9ZfTUlCaVWGwqNO7NjMOeQEpBJgdT1TnVNxoSCbN%2F%2FStp4erUl2peAtxHsMJvEnc7iWDjegEj%2BELdlFlPs9skXRZvATKa%2BcteopZ4RRR3wf8pe2nXSXIz8w%2BYZOBMCwjjV%2BaVpyc0F4%2B1Lv1XuhH68JqRmskKCQSZLhW6QJVRRKX%2B9pMSFwhQ1qaxaDRuvV%2F5fwhXDhqP6%2B%2Bj%2FEaaAnBUOeNHkIm59OOJ5fCOU2JqYjcdf4mx3oaqJ7SQ8C1ZNQu7wLW%2FzFngpQQg2OxTnZTVeiSZUw77qWxAY6pgGPh8VIThCMvkcCx9ToukeecCY2gywpDChesVMa2wdgO%2B8KiQiJx2KrFbKIErW8fpnyAx%2BIeK1ADO013p9ROxleQAaZsQicrm761hqnFoetByoZl6O5%2FPA%2B87Ty0%2FBt1sf8m9qyYkmGF91VpREhfyb9XZrjeG%2BQZtEVeJHM5tiNMRIMMpLu3YW4YCw53cm76SPq4Wkg4cTydq1rrmCHqMW8t1VzCVQa&X-Amz-Signature=ae18bcf0e6fb31ca095f2f5895bf7ae152f6bc667b01cb1a7e9f9e625b5794f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZD5526W%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGtaje6tSUe06LalCsXhEB1rUxhTtIijJqVjMTZOs52hAiAKObESraHcS8JPnsk8qkyv62z4%2FgDGYKIX53L05Ycs%2FSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzAbKVj6nNzQdYV51KtwDj0ucIbbetQzWlqmsp87KQo15Vw3lqI9ngm4dfEp4atOYnOprgSkI60JzEuhzIYE11d5Ndj15RZBytfSYUqAlZsDBHqnJyhk8ZaDZ3KNNW6qhgFY899yHLnh0wciCnRrPC44AdepdECxghd68p99KVb6bKnmVdOeWYrEWD8T1FxGIBBnieIt4QON4dXNnK6eC8FZD0wh5pXkSFU57oIW3s2YEIJnoBetOPweeetA4PZ6qHvpHRlCNFuKqE4OnRjTTuUH125burIPUUY1GVFbWB%2B7wtAE0%2BpBhhLnBeUXZV2vsW7i3WaB8HvxHza%2Fs%2BVE7cZG9h%2BwfHbovbR3wPSkQpf4TAddula9tP9ZfTUlCaVWGwqNO7NjMOeQEpBJgdT1TnVNxoSCbN%2F%2FStp4erUl2peAtxHsMJvEnc7iWDjegEj%2BELdlFlPs9skXRZvATKa%2BcteopZ4RRR3wf8pe2nXSXIz8w%2BYZOBMCwjjV%2BaVpyc0F4%2B1Lv1XuhH68JqRmskKCQSZLhW6QJVRRKX%2B9pMSFwhQ1qaxaDRuvV%2F5fwhXDhqP6%2B%2Bj%2FEaaAnBUOeNHkIm59OOJ5fCOU2JqYjcdf4mx3oaqJ7SQ8C1ZNQu7wLW%2FzFngpQQg2OxTnZTVeiSZUw77qWxAY6pgGPh8VIThCMvkcCx9ToukeecCY2gywpDChesVMa2wdgO%2B8KiQiJx2KrFbKIErW8fpnyAx%2BIeK1ADO013p9ROxleQAaZsQicrm761hqnFoetByoZl6O5%2FPA%2B87Ty0%2FBt1sf8m9qyYkmGF91VpREhfyb9XZrjeG%2BQZtEVeJHM5tiNMRIMMpLu3YW4YCw53cm76SPq4Wkg4cTydq1rrmCHqMW8t1VzCVQa&X-Amz-Signature=ef782afe5663d1f603c4d173c7f2638d83280d475bb3a21365881a41ad6648a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZD5526W%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGtaje6tSUe06LalCsXhEB1rUxhTtIijJqVjMTZOs52hAiAKObESraHcS8JPnsk8qkyv62z4%2FgDGYKIX53L05Ycs%2FSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzAbKVj6nNzQdYV51KtwDj0ucIbbetQzWlqmsp87KQo15Vw3lqI9ngm4dfEp4atOYnOprgSkI60JzEuhzIYE11d5Ndj15RZBytfSYUqAlZsDBHqnJyhk8ZaDZ3KNNW6qhgFY899yHLnh0wciCnRrPC44AdepdECxghd68p99KVb6bKnmVdOeWYrEWD8T1FxGIBBnieIt4QON4dXNnK6eC8FZD0wh5pXkSFU57oIW3s2YEIJnoBetOPweeetA4PZ6qHvpHRlCNFuKqE4OnRjTTuUH125burIPUUY1GVFbWB%2B7wtAE0%2BpBhhLnBeUXZV2vsW7i3WaB8HvxHza%2Fs%2BVE7cZG9h%2BwfHbovbR3wPSkQpf4TAddula9tP9ZfTUlCaVWGwqNO7NjMOeQEpBJgdT1TnVNxoSCbN%2F%2FStp4erUl2peAtxHsMJvEnc7iWDjegEj%2BELdlFlPs9skXRZvATKa%2BcteopZ4RRR3wf8pe2nXSXIz8w%2BYZOBMCwjjV%2BaVpyc0F4%2B1Lv1XuhH68JqRmskKCQSZLhW6QJVRRKX%2B9pMSFwhQ1qaxaDRuvV%2F5fwhXDhqP6%2B%2Bj%2FEaaAnBUOeNHkIm59OOJ5fCOU2JqYjcdf4mx3oaqJ7SQ8C1ZNQu7wLW%2FzFngpQQg2OxTnZTVeiSZUw77qWxAY6pgGPh8VIThCMvkcCx9ToukeecCY2gywpDChesVMa2wdgO%2B8KiQiJx2KrFbKIErW8fpnyAx%2BIeK1ADO013p9ROxleQAaZsQicrm761hqnFoetByoZl6O5%2FPA%2B87Ty0%2FBt1sf8m9qyYkmGF91VpREhfyb9XZrjeG%2BQZtEVeJHM5tiNMRIMMpLu3YW4YCw53cm76SPq4Wkg4cTydq1rrmCHqMW8t1VzCVQa&X-Amz-Signature=8ec6560c6c0cf6e33a3530e5bf62a5d635b727856ad1aab7a8934b258e30d1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BHO4RUP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAjAvbo7Qs%2FWdGqwHrw17D%2B5LP1l8h6RF82G61FfImWsAiBubZaOrK6xLBEOMb7A9D0NXwiosxQDM0XZ4XkQ4YZZbyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMXcG9LLJE0oh55dCvKtwDLzR5x1X45uhNeTmoGuiAtdH9cJZwyWCsZxL9mkzMfWgYropGjoJw0br7UvZ0zoaLwbOUckJguOyln0x84%2FLujuD7zlWwYRiMSiXOSYwWtH7VxGQjpFmGAm%2FZzaT3eXOdlJQMEiY8Cy2x8HO68YwSQcD4kDrqW%2ByQ0MkVjWbbn6SrfPjJJWiXhrextfaOBIqG68Thxz9Zai85sh%2BBidPlnVEuinPlI9oPMj6oGJnJ8fKFXBv3W56KE%2BYJbWrvccUxN3nGvGHxFC%2FXCryDOxWuz4ozg7Kj65js9GGg1OQGgXN1MSkAE8MS2PvNlY%2FNSU6dvj6PH%2B5yDL%2FkKxSoaIaDZeAXgqlTmZsv6MUcuzhJT1%2FovthrXOmpQQlBlgy6JXUIDHpGP3zw%2F3fE37abdXPno9xmgyypahwRqXJ1oOVdOukaGVnPKTANKG8d2ESDlGTbX8uDApxKq6M4Q24NOSOMABdPcNmRX0w0ZxeYe%2Bgywhh%2F5j%2F8%2BVqnrXqag8P%2BIYkx%2BNPj2QLZ9a6sx1IUmCzTRiXpEgEFZjHkbLTr3KFfBuE6go08GsbdzDS93%2FYNYtfuqmTGXBCep2hHeEij4t6JSuKlI75N7hAY1Oe1C9kUOv3%2BC%2BqpZf%2B3yB9t110wyLuWxAY6pgGP%2BeFOvZWwqaewz%2B0AvP07HqtoDen0LxSpvfCa%2F0IfTh7XHNktldp6m%2Ff%2BYbtZDzM%2B0UtC9bYGZ8Afw2%2F5lnwI8U1aabYfyF0uIHdZopj10FfYn9OP2IeBxHfISw%2BJqEP2RSIayaEJDqQmQSABaiN9w4rv5CJLm0y8aOwnxPHEtYKSb%2BwW0ZprDWzM5xAglzMOkgLiN0xKcpyl9QsuXTXEx7YbhChT&X-Amz-Signature=707e77f07a169a940b74fe2c51284b3af5d16446ecdb6c0d5bf344d44b8293d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZD5526W%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGtaje6tSUe06LalCsXhEB1rUxhTtIijJqVjMTZOs52hAiAKObESraHcS8JPnsk8qkyv62z4%2FgDGYKIX53L05Ycs%2FSr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMzAbKVj6nNzQdYV51KtwDj0ucIbbetQzWlqmsp87KQo15Vw3lqI9ngm4dfEp4atOYnOprgSkI60JzEuhzIYE11d5Ndj15RZBytfSYUqAlZsDBHqnJyhk8ZaDZ3KNNW6qhgFY899yHLnh0wciCnRrPC44AdepdECxghd68p99KVb6bKnmVdOeWYrEWD8T1FxGIBBnieIt4QON4dXNnK6eC8FZD0wh5pXkSFU57oIW3s2YEIJnoBetOPweeetA4PZ6qHvpHRlCNFuKqE4OnRjTTuUH125burIPUUY1GVFbWB%2B7wtAE0%2BpBhhLnBeUXZV2vsW7i3WaB8HvxHza%2Fs%2BVE7cZG9h%2BwfHbovbR3wPSkQpf4TAddula9tP9ZfTUlCaVWGwqNO7NjMOeQEpBJgdT1TnVNxoSCbN%2F%2FStp4erUl2peAtxHsMJvEnc7iWDjegEj%2BELdlFlPs9skXRZvATKa%2BcteopZ4RRR3wf8pe2nXSXIz8w%2BYZOBMCwjjV%2BaVpyc0F4%2B1Lv1XuhH68JqRmskKCQSZLhW6QJVRRKX%2B9pMSFwhQ1qaxaDRuvV%2F5fwhXDhqP6%2B%2Bj%2FEaaAnBUOeNHkIm59OOJ5fCOU2JqYjcdf4mx3oaqJ7SQ8C1ZNQu7wLW%2FzFngpQQg2OxTnZTVeiSZUw77qWxAY6pgGPh8VIThCMvkcCx9ToukeecCY2gywpDChesVMa2wdgO%2B8KiQiJx2KrFbKIErW8fpnyAx%2BIeK1ADO013p9ROxleQAaZsQicrm761hqnFoetByoZl6O5%2FPA%2B87Ty0%2FBt1sf8m9qyYkmGF91VpREhfyb9XZrjeG%2BQZtEVeJHM5tiNMRIMMpLu3YW4YCw53cm76SPq4Wkg4cTydq1rrmCHqMW8t1VzCVQa&X-Amz-Signature=26a9feaea1ea40d6e9d8a4828b768ca7468a4d93ce6c92d7dd9a1e1660a230ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3ENG5M%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3XPPzob3xA5vU7NLQx6PysecbWBwADPZ%2BbjD88vPeJwIgNtXfQjOPflOOr5TaQDDqKGakxNZjgsrdJB6V58dFgncq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOj40cDxMXxyE%2FqZFyrcA9ZvQ6VQYP1c0%2BOgL4U70hCK0pdznQQcpIf7VlJxFQj%2B7dPM5MC3etYOSbNXwW2VQleUW6OXkyDnURyu0kKMKFC%2BBeDva%2FzE4MocRl2W080MMc3eAun1q9oxzr3SQuMRsCux10b%2FCwmw%2BQEd7r%2F87bCz%2BhUYlnKkuRqqinWk0ViV4l4%2BdRLpIOnXpIZio3CRt%2Fkao7Tw%2BuRf2na2%2B4gmSwfZMXZSq%2BvlS6wwwbIb2HIL7oM14OzMS%2FtTtbSCnKgGLa5S6S8qEmIZa0ckDaYS1J%2FhL6Zy5saZQiHXpIGG290d4FZayIJCWtMX5xf86KbLMEokA7Va5RjOXg%2FREkaeIMwjIqPOzwhXtWFO1%2FoiGq13EKQEemuzt7mi5HDAYq6EGCMhw4AovTxNv4JHNhBw%2F72mmd37RHejjWkSThLG4akqoY6GrZiSzkLq0Z26Xubsb9LNtJQNbDiTwLZwOyP6XnJRAoEqRFyDgMOOhX8WUoEl8ZUQ8swSvMn8Ka03eBXqlTu%2FILeI1%2FhiwK%2FJ5fZoggmrMpbPoa5%2BauFGCYOJk%2BQE5XbLU81%2BMRubgPE64Mw8KkmdxchQWiV2u1REnF6%2FXXkEHxhdAOXir%2F%2BvboQw9Ose8nbGwhsfMqg%2Bg5zNMMS6lsQGOqUB%2FqAuqn2HM6PqrGVYHovdQoZE9K5SgIMtJzeJqcTnXNdtjag7n%2Bbt3AYueRpQIjD43KzHaGKkG%2FtLRV2KcfHZfeupESJTE7h1UPr%2BMWhoD3iJ0w3MTHtu5j5g4TXClKIFd4wbULSZIn2ctSlImn40YjApKTQd9Z1ow7QERIx5tMVAXihH3YGpnml2of%2BQ3qU9AAKNGqVw1ZNxuiCTO1sTjT1tMfh6&X-Amz-Signature=a13caa9ffde5e002d8c5c80e1fc43c742a47c08bca07f84773300eb9c85a06c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3ENG5M%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3XPPzob3xA5vU7NLQx6PysecbWBwADPZ%2BbjD88vPeJwIgNtXfQjOPflOOr5TaQDDqKGakxNZjgsrdJB6V58dFgncq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOj40cDxMXxyE%2FqZFyrcA9ZvQ6VQYP1c0%2BOgL4U70hCK0pdznQQcpIf7VlJxFQj%2B7dPM5MC3etYOSbNXwW2VQleUW6OXkyDnURyu0kKMKFC%2BBeDva%2FzE4MocRl2W080MMc3eAun1q9oxzr3SQuMRsCux10b%2FCwmw%2BQEd7r%2F87bCz%2BhUYlnKkuRqqinWk0ViV4l4%2BdRLpIOnXpIZio3CRt%2Fkao7Tw%2BuRf2na2%2B4gmSwfZMXZSq%2BvlS6wwwbIb2HIL7oM14OzMS%2FtTtbSCnKgGLa5S6S8qEmIZa0ckDaYS1J%2FhL6Zy5saZQiHXpIGG290d4FZayIJCWtMX5xf86KbLMEokA7Va5RjOXg%2FREkaeIMwjIqPOzwhXtWFO1%2FoiGq13EKQEemuzt7mi5HDAYq6EGCMhw4AovTxNv4JHNhBw%2F72mmd37RHejjWkSThLG4akqoY6GrZiSzkLq0Z26Xubsb9LNtJQNbDiTwLZwOyP6XnJRAoEqRFyDgMOOhX8WUoEl8ZUQ8swSvMn8Ka03eBXqlTu%2FILeI1%2FhiwK%2FJ5fZoggmrMpbPoa5%2BauFGCYOJk%2BQE5XbLU81%2BMRubgPE64Mw8KkmdxchQWiV2u1REnF6%2FXXkEHxhdAOXir%2F%2BvboQw9Ose8nbGwhsfMqg%2Bg5zNMMS6lsQGOqUB%2FqAuqn2HM6PqrGVYHovdQoZE9K5SgIMtJzeJqcTnXNdtjag7n%2Bbt3AYueRpQIjD43KzHaGKkG%2FtLRV2KcfHZfeupESJTE7h1UPr%2BMWhoD3iJ0w3MTHtu5j5g4TXClKIFd4wbULSZIn2ctSlImn40YjApKTQd9Z1ow7QERIx5tMVAXihH3YGpnml2of%2BQ3qU9AAKNGqVw1ZNxuiCTO1sTjT1tMfh6&X-Amz-Signature=feaae88467a4e4be754a0dfc2515a0ef8dd4f967cea83c35e797cc6836b88a76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3ENG5M%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3XPPzob3xA5vU7NLQx6PysecbWBwADPZ%2BbjD88vPeJwIgNtXfQjOPflOOr5TaQDDqKGakxNZjgsrdJB6V58dFgncq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOj40cDxMXxyE%2FqZFyrcA9ZvQ6VQYP1c0%2BOgL4U70hCK0pdznQQcpIf7VlJxFQj%2B7dPM5MC3etYOSbNXwW2VQleUW6OXkyDnURyu0kKMKFC%2BBeDva%2FzE4MocRl2W080MMc3eAun1q9oxzr3SQuMRsCux10b%2FCwmw%2BQEd7r%2F87bCz%2BhUYlnKkuRqqinWk0ViV4l4%2BdRLpIOnXpIZio3CRt%2Fkao7Tw%2BuRf2na2%2B4gmSwfZMXZSq%2BvlS6wwwbIb2HIL7oM14OzMS%2FtTtbSCnKgGLa5S6S8qEmIZa0ckDaYS1J%2FhL6Zy5saZQiHXpIGG290d4FZayIJCWtMX5xf86KbLMEokA7Va5RjOXg%2FREkaeIMwjIqPOzwhXtWFO1%2FoiGq13EKQEemuzt7mi5HDAYq6EGCMhw4AovTxNv4JHNhBw%2F72mmd37RHejjWkSThLG4akqoY6GrZiSzkLq0Z26Xubsb9LNtJQNbDiTwLZwOyP6XnJRAoEqRFyDgMOOhX8WUoEl8ZUQ8swSvMn8Ka03eBXqlTu%2FILeI1%2FhiwK%2FJ5fZoggmrMpbPoa5%2BauFGCYOJk%2BQE5XbLU81%2BMRubgPE64Mw8KkmdxchQWiV2u1REnF6%2FXXkEHxhdAOXir%2F%2BvboQw9Ose8nbGwhsfMqg%2Bg5zNMMS6lsQGOqUB%2FqAuqn2HM6PqrGVYHovdQoZE9K5SgIMtJzeJqcTnXNdtjag7n%2Bbt3AYueRpQIjD43KzHaGKkG%2FtLRV2KcfHZfeupESJTE7h1UPr%2BMWhoD3iJ0w3MTHtu5j5g4TXClKIFd4wbULSZIn2ctSlImn40YjApKTQd9Z1ow7QERIx5tMVAXihH3YGpnml2of%2BQ3qU9AAKNGqVw1ZNxuiCTO1sTjT1tMfh6&X-Amz-Signature=e6e8bfc74acbf67286d7608d73f66cb8d7b61f9fb7777158625e47b1191ccb4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3ENG5M%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3XPPzob3xA5vU7NLQx6PysecbWBwADPZ%2BbjD88vPeJwIgNtXfQjOPflOOr5TaQDDqKGakxNZjgsrdJB6V58dFgncq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOj40cDxMXxyE%2FqZFyrcA9ZvQ6VQYP1c0%2BOgL4U70hCK0pdznQQcpIf7VlJxFQj%2B7dPM5MC3etYOSbNXwW2VQleUW6OXkyDnURyu0kKMKFC%2BBeDva%2FzE4MocRl2W080MMc3eAun1q9oxzr3SQuMRsCux10b%2FCwmw%2BQEd7r%2F87bCz%2BhUYlnKkuRqqinWk0ViV4l4%2BdRLpIOnXpIZio3CRt%2Fkao7Tw%2BuRf2na2%2B4gmSwfZMXZSq%2BvlS6wwwbIb2HIL7oM14OzMS%2FtTtbSCnKgGLa5S6S8qEmIZa0ckDaYS1J%2FhL6Zy5saZQiHXpIGG290d4FZayIJCWtMX5xf86KbLMEokA7Va5RjOXg%2FREkaeIMwjIqPOzwhXtWFO1%2FoiGq13EKQEemuzt7mi5HDAYq6EGCMhw4AovTxNv4JHNhBw%2F72mmd37RHejjWkSThLG4akqoY6GrZiSzkLq0Z26Xubsb9LNtJQNbDiTwLZwOyP6XnJRAoEqRFyDgMOOhX8WUoEl8ZUQ8swSvMn8Ka03eBXqlTu%2FILeI1%2FhiwK%2FJ5fZoggmrMpbPoa5%2BauFGCYOJk%2BQE5XbLU81%2BMRubgPE64Mw8KkmdxchQWiV2u1REnF6%2FXXkEHxhdAOXir%2F%2BvboQw9Ose8nbGwhsfMqg%2Bg5zNMMS6lsQGOqUB%2FqAuqn2HM6PqrGVYHovdQoZE9K5SgIMtJzeJqcTnXNdtjag7n%2Bbt3AYueRpQIjD43KzHaGKkG%2FtLRV2KcfHZfeupESJTE7h1UPr%2BMWhoD3iJ0w3MTHtu5j5g4TXClKIFd4wbULSZIn2ctSlImn40YjApKTQd9Z1ow7QERIx5tMVAXihH3YGpnml2of%2BQ3qU9AAKNGqVw1ZNxuiCTO1sTjT1tMfh6&X-Amz-Signature=359e1dbfd840144261ae6eb35d458f1d33bc36853d6b8fd5ba17369dba04d0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3ENG5M%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3XPPzob3xA5vU7NLQx6PysecbWBwADPZ%2BbjD88vPeJwIgNtXfQjOPflOOr5TaQDDqKGakxNZjgsrdJB6V58dFgncq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOj40cDxMXxyE%2FqZFyrcA9ZvQ6VQYP1c0%2BOgL4U70hCK0pdznQQcpIf7VlJxFQj%2B7dPM5MC3etYOSbNXwW2VQleUW6OXkyDnURyu0kKMKFC%2BBeDva%2FzE4MocRl2W080MMc3eAun1q9oxzr3SQuMRsCux10b%2FCwmw%2BQEd7r%2F87bCz%2BhUYlnKkuRqqinWk0ViV4l4%2BdRLpIOnXpIZio3CRt%2Fkao7Tw%2BuRf2na2%2B4gmSwfZMXZSq%2BvlS6wwwbIb2HIL7oM14OzMS%2FtTtbSCnKgGLa5S6S8qEmIZa0ckDaYS1J%2FhL6Zy5saZQiHXpIGG290d4FZayIJCWtMX5xf86KbLMEokA7Va5RjOXg%2FREkaeIMwjIqPOzwhXtWFO1%2FoiGq13EKQEemuzt7mi5HDAYq6EGCMhw4AovTxNv4JHNhBw%2F72mmd37RHejjWkSThLG4akqoY6GrZiSzkLq0Z26Xubsb9LNtJQNbDiTwLZwOyP6XnJRAoEqRFyDgMOOhX8WUoEl8ZUQ8swSvMn8Ka03eBXqlTu%2FILeI1%2FhiwK%2FJ5fZoggmrMpbPoa5%2BauFGCYOJk%2BQE5XbLU81%2BMRubgPE64Mw8KkmdxchQWiV2u1REnF6%2FXXkEHxhdAOXir%2F%2BvboQw9Ose8nbGwhsfMqg%2Bg5zNMMS6lsQGOqUB%2FqAuqn2HM6PqrGVYHovdQoZE9K5SgIMtJzeJqcTnXNdtjag7n%2Bbt3AYueRpQIjD43KzHaGKkG%2FtLRV2KcfHZfeupESJTE7h1UPr%2BMWhoD3iJ0w3MTHtu5j5g4TXClKIFd4wbULSZIn2ctSlImn40YjApKTQd9Z1ow7QERIx5tMVAXihH3YGpnml2of%2BQ3qU9AAKNGqVw1ZNxuiCTO1sTjT1tMfh6&X-Amz-Signature=e97d3d02c978192cdf4624fd57f27d32727b716d1d7175a2fbd7626bd08a5ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3ENG5M%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3XPPzob3xA5vU7NLQx6PysecbWBwADPZ%2BbjD88vPeJwIgNtXfQjOPflOOr5TaQDDqKGakxNZjgsrdJB6V58dFgncq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOj40cDxMXxyE%2FqZFyrcA9ZvQ6VQYP1c0%2BOgL4U70hCK0pdznQQcpIf7VlJxFQj%2B7dPM5MC3etYOSbNXwW2VQleUW6OXkyDnURyu0kKMKFC%2BBeDva%2FzE4MocRl2W080MMc3eAun1q9oxzr3SQuMRsCux10b%2FCwmw%2BQEd7r%2F87bCz%2BhUYlnKkuRqqinWk0ViV4l4%2BdRLpIOnXpIZio3CRt%2Fkao7Tw%2BuRf2na2%2B4gmSwfZMXZSq%2BvlS6wwwbIb2HIL7oM14OzMS%2FtTtbSCnKgGLa5S6S8qEmIZa0ckDaYS1J%2FhL6Zy5saZQiHXpIGG290d4FZayIJCWtMX5xf86KbLMEokA7Va5RjOXg%2FREkaeIMwjIqPOzwhXtWFO1%2FoiGq13EKQEemuzt7mi5HDAYq6EGCMhw4AovTxNv4JHNhBw%2F72mmd37RHejjWkSThLG4akqoY6GrZiSzkLq0Z26Xubsb9LNtJQNbDiTwLZwOyP6XnJRAoEqRFyDgMOOhX8WUoEl8ZUQ8swSvMn8Ka03eBXqlTu%2FILeI1%2FhiwK%2FJ5fZoggmrMpbPoa5%2BauFGCYOJk%2BQE5XbLU81%2BMRubgPE64Mw8KkmdxchQWiV2u1REnF6%2FXXkEHxhdAOXir%2F%2BvboQw9Ose8nbGwhsfMqg%2Bg5zNMMS6lsQGOqUB%2FqAuqn2HM6PqrGVYHovdQoZE9K5SgIMtJzeJqcTnXNdtjag7n%2Bbt3AYueRpQIjD43KzHaGKkG%2FtLRV2KcfHZfeupESJTE7h1UPr%2BMWhoD3iJ0w3MTHtu5j5g4TXClKIFd4wbULSZIn2ctSlImn40YjApKTQd9Z1ow7QERIx5tMVAXihH3YGpnml2of%2BQ3qU9AAKNGqVw1ZNxuiCTO1sTjT1tMfh6&X-Amz-Signature=4d6fb12527c4c0fc238550f646af9f07341ba1cdc3a5a6e0923a5087c742a9f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3ENG5M%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQC3XPPzob3xA5vU7NLQx6PysecbWBwADPZ%2BbjD88vPeJwIgNtXfQjOPflOOr5TaQDDqKGakxNZjgsrdJB6V58dFgncq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOj40cDxMXxyE%2FqZFyrcA9ZvQ6VQYP1c0%2BOgL4U70hCK0pdznQQcpIf7VlJxFQj%2B7dPM5MC3etYOSbNXwW2VQleUW6OXkyDnURyu0kKMKFC%2BBeDva%2FzE4MocRl2W080MMc3eAun1q9oxzr3SQuMRsCux10b%2FCwmw%2BQEd7r%2F87bCz%2BhUYlnKkuRqqinWk0ViV4l4%2BdRLpIOnXpIZio3CRt%2Fkao7Tw%2BuRf2na2%2B4gmSwfZMXZSq%2BvlS6wwwbIb2HIL7oM14OzMS%2FtTtbSCnKgGLa5S6S8qEmIZa0ckDaYS1J%2FhL6Zy5saZQiHXpIGG290d4FZayIJCWtMX5xf86KbLMEokA7Va5RjOXg%2FREkaeIMwjIqPOzwhXtWFO1%2FoiGq13EKQEemuzt7mi5HDAYq6EGCMhw4AovTxNv4JHNhBw%2F72mmd37RHejjWkSThLG4akqoY6GrZiSzkLq0Z26Xubsb9LNtJQNbDiTwLZwOyP6XnJRAoEqRFyDgMOOhX8WUoEl8ZUQ8swSvMn8Ka03eBXqlTu%2FILeI1%2FhiwK%2FJ5fZoggmrMpbPoa5%2BauFGCYOJk%2BQE5XbLU81%2BMRubgPE64Mw8KkmdxchQWiV2u1REnF6%2FXXkEHxhdAOXir%2F%2BvboQw9Ose8nbGwhsfMqg%2Bg5zNMMS6lsQGOqUB%2FqAuqn2HM6PqrGVYHovdQoZE9K5SgIMtJzeJqcTnXNdtjag7n%2Bbt3AYueRpQIjD43KzHaGKkG%2FtLRV2KcfHZfeupESJTE7h1UPr%2BMWhoD3iJ0w3MTHtu5j5g4TXClKIFd4wbULSZIn2ctSlImn40YjApKTQd9Z1ow7QERIx5tMVAXihH3YGpnml2of%2BQ3qU9AAKNGqVw1ZNxuiCTO1sTjT1tMfh6&X-Amz-Signature=72177571e9d5b7749af85b69402bc62121ba3441b0c29833e7544e30d155ef7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
