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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNREJYTZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC6INe7xmmEcTuHhRbJG5bF%2FfRGW5jD7sqn9L3DXXrFZAiEAwuZiJOBxTdjCf41E76XDXix0sqRv8iBpLBDdA9v7Ttgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFBy%2BmxURWtwytED%2FSrcA8DFELdJcWleTqA4PJsqvw9cPdKC%2FNSI20Kl0k2hrx36lni1ZiM%2FD7d7kKGJI86133YBbT9fh2N8vfD6e5usSTWE4kY7t7BibFspfKuIt3V4b0PrECym4GJZP5jb5mAKlCs9FQBPiHpFOGR2mOFWtY54Qlb1XjtQEOtSe8y%2BuSOF8IoQ07EYhiQ8upWgVYTFXi0o%2FwneMH8giMkBQo4pfOUO2cIUoh9kVfuRLGOL7rp3KvdFacC8wjvaWoxqOO1pAO2HTw6ijNiRvkes1S0TicyUsuOauDmynHir1Iet4Tmi0PhDAutej9ZcuTTX8tRoKJ8oVHmLW5mHoI9szArEXqUMR6hTE711eIRMEn6kcTanAXXVjhUpllCVMqpXJ6DTN9hyx%2F9Y8h0lERFKuuAfCCdGgPMudhAcn8yrwtI2bcHr0%2BjDT5W%2BkFTHh0c0X2B0SHLGUz4oSKBzyfCdNe%2FCTtZppYqJHy0L%2BHPHZio%2BTiez7zkfAfEj7NEaHyGldSUqvC00idXNWYrz0vd2DU9CTLd8RXnAwsbHmZ%2BipsXOkWaOjApWC0lRQMOoKYhz7ekA27ofZPem5HP8esin6g4rBqJk4wfT8%2FmxGq9WKtF0flLHYm9YNwehikh4RSMoMJj3kMQGOqUBf5XGtcyCa%2F4iWRNGp4dI%2BqPS5IT62mdRMZJ%2BJP6aocOX8NNbpQPgBfmikG6BHzYw%2FjhH4uhjVCNkJVCZ4mD1uuyNtims826FH5CcLj1cjZRRrBF%2FVWk8oHvHnyxCNl3vE1VjOY7fA0zAo7dUsGclPq2x4gXBGKYf5qdqI8Edak%2FdTj4%2BZQ1MTVBpQNCS3Tzbf%2BVfTVEHO0Vqjd7JC4cIzGWNJpxB&X-Amz-Signature=69574d89d31af5771a8e588b53f2b9a4d311910d6dab1585f8ed594f6284006e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNREJYTZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC6INe7xmmEcTuHhRbJG5bF%2FfRGW5jD7sqn9L3DXXrFZAiEAwuZiJOBxTdjCf41E76XDXix0sqRv8iBpLBDdA9v7Ttgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFBy%2BmxURWtwytED%2FSrcA8DFELdJcWleTqA4PJsqvw9cPdKC%2FNSI20Kl0k2hrx36lni1ZiM%2FD7d7kKGJI86133YBbT9fh2N8vfD6e5usSTWE4kY7t7BibFspfKuIt3V4b0PrECym4GJZP5jb5mAKlCs9FQBPiHpFOGR2mOFWtY54Qlb1XjtQEOtSe8y%2BuSOF8IoQ07EYhiQ8upWgVYTFXi0o%2FwneMH8giMkBQo4pfOUO2cIUoh9kVfuRLGOL7rp3KvdFacC8wjvaWoxqOO1pAO2HTw6ijNiRvkes1S0TicyUsuOauDmynHir1Iet4Tmi0PhDAutej9ZcuTTX8tRoKJ8oVHmLW5mHoI9szArEXqUMR6hTE711eIRMEn6kcTanAXXVjhUpllCVMqpXJ6DTN9hyx%2F9Y8h0lERFKuuAfCCdGgPMudhAcn8yrwtI2bcHr0%2BjDT5W%2BkFTHh0c0X2B0SHLGUz4oSKBzyfCdNe%2FCTtZppYqJHy0L%2BHPHZio%2BTiez7zkfAfEj7NEaHyGldSUqvC00idXNWYrz0vd2DU9CTLd8RXnAwsbHmZ%2BipsXOkWaOjApWC0lRQMOoKYhz7ekA27ofZPem5HP8esin6g4rBqJk4wfT8%2FmxGq9WKtF0flLHYm9YNwehikh4RSMoMJj3kMQGOqUBf5XGtcyCa%2F4iWRNGp4dI%2BqPS5IT62mdRMZJ%2BJP6aocOX8NNbpQPgBfmikG6BHzYw%2FjhH4uhjVCNkJVCZ4mD1uuyNtims826FH5CcLj1cjZRRrBF%2FVWk8oHvHnyxCNl3vE1VjOY7fA0zAo7dUsGclPq2x4gXBGKYf5qdqI8Edak%2FdTj4%2BZQ1MTVBpQNCS3Tzbf%2BVfTVEHO0Vqjd7JC4cIzGWNJpxB&X-Amz-Signature=e6ebe130a42e46e2e22c63a999b41c69e5fc92787b39bfa089966bb305d2d048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNREJYTZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC6INe7xmmEcTuHhRbJG5bF%2FfRGW5jD7sqn9L3DXXrFZAiEAwuZiJOBxTdjCf41E76XDXix0sqRv8iBpLBDdA9v7Ttgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFBy%2BmxURWtwytED%2FSrcA8DFELdJcWleTqA4PJsqvw9cPdKC%2FNSI20Kl0k2hrx36lni1ZiM%2FD7d7kKGJI86133YBbT9fh2N8vfD6e5usSTWE4kY7t7BibFspfKuIt3V4b0PrECym4GJZP5jb5mAKlCs9FQBPiHpFOGR2mOFWtY54Qlb1XjtQEOtSe8y%2BuSOF8IoQ07EYhiQ8upWgVYTFXi0o%2FwneMH8giMkBQo4pfOUO2cIUoh9kVfuRLGOL7rp3KvdFacC8wjvaWoxqOO1pAO2HTw6ijNiRvkes1S0TicyUsuOauDmynHir1Iet4Tmi0PhDAutej9ZcuTTX8tRoKJ8oVHmLW5mHoI9szArEXqUMR6hTE711eIRMEn6kcTanAXXVjhUpllCVMqpXJ6DTN9hyx%2F9Y8h0lERFKuuAfCCdGgPMudhAcn8yrwtI2bcHr0%2BjDT5W%2BkFTHh0c0X2B0SHLGUz4oSKBzyfCdNe%2FCTtZppYqJHy0L%2BHPHZio%2BTiez7zkfAfEj7NEaHyGldSUqvC00idXNWYrz0vd2DU9CTLd8RXnAwsbHmZ%2BipsXOkWaOjApWC0lRQMOoKYhz7ekA27ofZPem5HP8esin6g4rBqJk4wfT8%2FmxGq9WKtF0flLHYm9YNwehikh4RSMoMJj3kMQGOqUBf5XGtcyCa%2F4iWRNGp4dI%2BqPS5IT62mdRMZJ%2BJP6aocOX8NNbpQPgBfmikG6BHzYw%2FjhH4uhjVCNkJVCZ4mD1uuyNtims826FH5CcLj1cjZRRrBF%2FVWk8oHvHnyxCNl3vE1VjOY7fA0zAo7dUsGclPq2x4gXBGKYf5qdqI8Edak%2FdTj4%2BZQ1MTVBpQNCS3Tzbf%2BVfTVEHO0Vqjd7JC4cIzGWNJpxB&X-Amz-Signature=543f7331a171032547c12624fdb86d15aebc20c6e379129543afc58272296d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNREJYTZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC6INe7xmmEcTuHhRbJG5bF%2FfRGW5jD7sqn9L3DXXrFZAiEAwuZiJOBxTdjCf41E76XDXix0sqRv8iBpLBDdA9v7Ttgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFBy%2BmxURWtwytED%2FSrcA8DFELdJcWleTqA4PJsqvw9cPdKC%2FNSI20Kl0k2hrx36lni1ZiM%2FD7d7kKGJI86133YBbT9fh2N8vfD6e5usSTWE4kY7t7BibFspfKuIt3V4b0PrECym4GJZP5jb5mAKlCs9FQBPiHpFOGR2mOFWtY54Qlb1XjtQEOtSe8y%2BuSOF8IoQ07EYhiQ8upWgVYTFXi0o%2FwneMH8giMkBQo4pfOUO2cIUoh9kVfuRLGOL7rp3KvdFacC8wjvaWoxqOO1pAO2HTw6ijNiRvkes1S0TicyUsuOauDmynHir1Iet4Tmi0PhDAutej9ZcuTTX8tRoKJ8oVHmLW5mHoI9szArEXqUMR6hTE711eIRMEn6kcTanAXXVjhUpllCVMqpXJ6DTN9hyx%2F9Y8h0lERFKuuAfCCdGgPMudhAcn8yrwtI2bcHr0%2BjDT5W%2BkFTHh0c0X2B0SHLGUz4oSKBzyfCdNe%2FCTtZppYqJHy0L%2BHPHZio%2BTiez7zkfAfEj7NEaHyGldSUqvC00idXNWYrz0vd2DU9CTLd8RXnAwsbHmZ%2BipsXOkWaOjApWC0lRQMOoKYhz7ekA27ofZPem5HP8esin6g4rBqJk4wfT8%2FmxGq9WKtF0flLHYm9YNwehikh4RSMoMJj3kMQGOqUBf5XGtcyCa%2F4iWRNGp4dI%2BqPS5IT62mdRMZJ%2BJP6aocOX8NNbpQPgBfmikG6BHzYw%2FjhH4uhjVCNkJVCZ4mD1uuyNtims826FH5CcLj1cjZRRrBF%2FVWk8oHvHnyxCNl3vE1VjOY7fA0zAo7dUsGclPq2x4gXBGKYf5qdqI8Edak%2FdTj4%2BZQ1MTVBpQNCS3Tzbf%2BVfTVEHO0Vqjd7JC4cIzGWNJpxB&X-Amz-Signature=8d72227aeaefefce6e1831450709787c1133c39257f0d55a0aac236f8029facc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNREJYTZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC6INe7xmmEcTuHhRbJG5bF%2FfRGW5jD7sqn9L3DXXrFZAiEAwuZiJOBxTdjCf41E76XDXix0sqRv8iBpLBDdA9v7Ttgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFBy%2BmxURWtwytED%2FSrcA8DFELdJcWleTqA4PJsqvw9cPdKC%2FNSI20Kl0k2hrx36lni1ZiM%2FD7d7kKGJI86133YBbT9fh2N8vfD6e5usSTWE4kY7t7BibFspfKuIt3V4b0PrECym4GJZP5jb5mAKlCs9FQBPiHpFOGR2mOFWtY54Qlb1XjtQEOtSe8y%2BuSOF8IoQ07EYhiQ8upWgVYTFXi0o%2FwneMH8giMkBQo4pfOUO2cIUoh9kVfuRLGOL7rp3KvdFacC8wjvaWoxqOO1pAO2HTw6ijNiRvkes1S0TicyUsuOauDmynHir1Iet4Tmi0PhDAutej9ZcuTTX8tRoKJ8oVHmLW5mHoI9szArEXqUMR6hTE711eIRMEn6kcTanAXXVjhUpllCVMqpXJ6DTN9hyx%2F9Y8h0lERFKuuAfCCdGgPMudhAcn8yrwtI2bcHr0%2BjDT5W%2BkFTHh0c0X2B0SHLGUz4oSKBzyfCdNe%2FCTtZppYqJHy0L%2BHPHZio%2BTiez7zkfAfEj7NEaHyGldSUqvC00idXNWYrz0vd2DU9CTLd8RXnAwsbHmZ%2BipsXOkWaOjApWC0lRQMOoKYhz7ekA27ofZPem5HP8esin6g4rBqJk4wfT8%2FmxGq9WKtF0flLHYm9YNwehikh4RSMoMJj3kMQGOqUBf5XGtcyCa%2F4iWRNGp4dI%2BqPS5IT62mdRMZJ%2BJP6aocOX8NNbpQPgBfmikG6BHzYw%2FjhH4uhjVCNkJVCZ4mD1uuyNtims826FH5CcLj1cjZRRrBF%2FVWk8oHvHnyxCNl3vE1VjOY7fA0zAo7dUsGclPq2x4gXBGKYf5qdqI8Edak%2FdTj4%2BZQ1MTVBpQNCS3Tzbf%2BVfTVEHO0Vqjd7JC4cIzGWNJpxB&X-Amz-Signature=39e58df1f08b108a9d08198504756877e3267e3935616abae8b1b6edeffca13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNREJYTZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC6INe7xmmEcTuHhRbJG5bF%2FfRGW5jD7sqn9L3DXXrFZAiEAwuZiJOBxTdjCf41E76XDXix0sqRv8iBpLBDdA9v7Ttgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFBy%2BmxURWtwytED%2FSrcA8DFELdJcWleTqA4PJsqvw9cPdKC%2FNSI20Kl0k2hrx36lni1ZiM%2FD7d7kKGJI86133YBbT9fh2N8vfD6e5usSTWE4kY7t7BibFspfKuIt3V4b0PrECym4GJZP5jb5mAKlCs9FQBPiHpFOGR2mOFWtY54Qlb1XjtQEOtSe8y%2BuSOF8IoQ07EYhiQ8upWgVYTFXi0o%2FwneMH8giMkBQo4pfOUO2cIUoh9kVfuRLGOL7rp3KvdFacC8wjvaWoxqOO1pAO2HTw6ijNiRvkes1S0TicyUsuOauDmynHir1Iet4Tmi0PhDAutej9ZcuTTX8tRoKJ8oVHmLW5mHoI9szArEXqUMR6hTE711eIRMEn6kcTanAXXVjhUpllCVMqpXJ6DTN9hyx%2F9Y8h0lERFKuuAfCCdGgPMudhAcn8yrwtI2bcHr0%2BjDT5W%2BkFTHh0c0X2B0SHLGUz4oSKBzyfCdNe%2FCTtZppYqJHy0L%2BHPHZio%2BTiez7zkfAfEj7NEaHyGldSUqvC00idXNWYrz0vd2DU9CTLd8RXnAwsbHmZ%2BipsXOkWaOjApWC0lRQMOoKYhz7ekA27ofZPem5HP8esin6g4rBqJk4wfT8%2FmxGq9WKtF0flLHYm9YNwehikh4RSMoMJj3kMQGOqUBf5XGtcyCa%2F4iWRNGp4dI%2BqPS5IT62mdRMZJ%2BJP6aocOX8NNbpQPgBfmikG6BHzYw%2FjhH4uhjVCNkJVCZ4mD1uuyNtims826FH5CcLj1cjZRRrBF%2FVWk8oHvHnyxCNl3vE1VjOY7fA0zAo7dUsGclPq2x4gXBGKYf5qdqI8Edak%2FdTj4%2BZQ1MTVBpQNCS3Tzbf%2BVfTVEHO0Vqjd7JC4cIzGWNJpxB&X-Amz-Signature=4565b6efc3f31418e857ea28b398c9d45885fc2a72e30e97a88514da0a8ada3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNREJYTZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC6INe7xmmEcTuHhRbJG5bF%2FfRGW5jD7sqn9L3DXXrFZAiEAwuZiJOBxTdjCf41E76XDXix0sqRv8iBpLBDdA9v7Ttgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFBy%2BmxURWtwytED%2FSrcA8DFELdJcWleTqA4PJsqvw9cPdKC%2FNSI20Kl0k2hrx36lni1ZiM%2FD7d7kKGJI86133YBbT9fh2N8vfD6e5usSTWE4kY7t7BibFspfKuIt3V4b0PrECym4GJZP5jb5mAKlCs9FQBPiHpFOGR2mOFWtY54Qlb1XjtQEOtSe8y%2BuSOF8IoQ07EYhiQ8upWgVYTFXi0o%2FwneMH8giMkBQo4pfOUO2cIUoh9kVfuRLGOL7rp3KvdFacC8wjvaWoxqOO1pAO2HTw6ijNiRvkes1S0TicyUsuOauDmynHir1Iet4Tmi0PhDAutej9ZcuTTX8tRoKJ8oVHmLW5mHoI9szArEXqUMR6hTE711eIRMEn6kcTanAXXVjhUpllCVMqpXJ6DTN9hyx%2F9Y8h0lERFKuuAfCCdGgPMudhAcn8yrwtI2bcHr0%2BjDT5W%2BkFTHh0c0X2B0SHLGUz4oSKBzyfCdNe%2FCTtZppYqJHy0L%2BHPHZio%2BTiez7zkfAfEj7NEaHyGldSUqvC00idXNWYrz0vd2DU9CTLd8RXnAwsbHmZ%2BipsXOkWaOjApWC0lRQMOoKYhz7ekA27ofZPem5HP8esin6g4rBqJk4wfT8%2FmxGq9WKtF0flLHYm9YNwehikh4RSMoMJj3kMQGOqUBf5XGtcyCa%2F4iWRNGp4dI%2BqPS5IT62mdRMZJ%2BJP6aocOX8NNbpQPgBfmikG6BHzYw%2FjhH4uhjVCNkJVCZ4mD1uuyNtims826FH5CcLj1cjZRRrBF%2FVWk8oHvHnyxCNl3vE1VjOY7fA0zAo7dUsGclPq2x4gXBGKYf5qdqI8Edak%2FdTj4%2BZQ1MTVBpQNCS3Tzbf%2BVfTVEHO0Vqjd7JC4cIzGWNJpxB&X-Amz-Signature=80faf6e8501b0eae51b64f2ee362a4d27ca9f134f2996d71e3625a38ec90699e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNREJYTZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC6INe7xmmEcTuHhRbJG5bF%2FfRGW5jD7sqn9L3DXXrFZAiEAwuZiJOBxTdjCf41E76XDXix0sqRv8iBpLBDdA9v7Ttgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFBy%2BmxURWtwytED%2FSrcA8DFELdJcWleTqA4PJsqvw9cPdKC%2FNSI20Kl0k2hrx36lni1ZiM%2FD7d7kKGJI86133YBbT9fh2N8vfD6e5usSTWE4kY7t7BibFspfKuIt3V4b0PrECym4GJZP5jb5mAKlCs9FQBPiHpFOGR2mOFWtY54Qlb1XjtQEOtSe8y%2BuSOF8IoQ07EYhiQ8upWgVYTFXi0o%2FwneMH8giMkBQo4pfOUO2cIUoh9kVfuRLGOL7rp3KvdFacC8wjvaWoxqOO1pAO2HTw6ijNiRvkes1S0TicyUsuOauDmynHir1Iet4Tmi0PhDAutej9ZcuTTX8tRoKJ8oVHmLW5mHoI9szArEXqUMR6hTE711eIRMEn6kcTanAXXVjhUpllCVMqpXJ6DTN9hyx%2F9Y8h0lERFKuuAfCCdGgPMudhAcn8yrwtI2bcHr0%2BjDT5W%2BkFTHh0c0X2B0SHLGUz4oSKBzyfCdNe%2FCTtZppYqJHy0L%2BHPHZio%2BTiez7zkfAfEj7NEaHyGldSUqvC00idXNWYrz0vd2DU9CTLd8RXnAwsbHmZ%2BipsXOkWaOjApWC0lRQMOoKYhz7ekA27ofZPem5HP8esin6g4rBqJk4wfT8%2FmxGq9WKtF0flLHYm9YNwehikh4RSMoMJj3kMQGOqUBf5XGtcyCa%2F4iWRNGp4dI%2BqPS5IT62mdRMZJ%2BJP6aocOX8NNbpQPgBfmikG6BHzYw%2FjhH4uhjVCNkJVCZ4mD1uuyNtims826FH5CcLj1cjZRRrBF%2FVWk8oHvHnyxCNl3vE1VjOY7fA0zAo7dUsGclPq2x4gXBGKYf5qdqI8Edak%2FdTj4%2BZQ1MTVBpQNCS3Tzbf%2BVfTVEHO0Vqjd7JC4cIzGWNJpxB&X-Amz-Signature=b1d63b348ff32a9ae1c5a545a54061af159a54c7ba7de893aac2099c919b0c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNREJYTZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC6INe7xmmEcTuHhRbJG5bF%2FfRGW5jD7sqn9L3DXXrFZAiEAwuZiJOBxTdjCf41E76XDXix0sqRv8iBpLBDdA9v7Ttgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFBy%2BmxURWtwytED%2FSrcA8DFELdJcWleTqA4PJsqvw9cPdKC%2FNSI20Kl0k2hrx36lni1ZiM%2FD7d7kKGJI86133YBbT9fh2N8vfD6e5usSTWE4kY7t7BibFspfKuIt3V4b0PrECym4GJZP5jb5mAKlCs9FQBPiHpFOGR2mOFWtY54Qlb1XjtQEOtSe8y%2BuSOF8IoQ07EYhiQ8upWgVYTFXi0o%2FwneMH8giMkBQo4pfOUO2cIUoh9kVfuRLGOL7rp3KvdFacC8wjvaWoxqOO1pAO2HTw6ijNiRvkes1S0TicyUsuOauDmynHir1Iet4Tmi0PhDAutej9ZcuTTX8tRoKJ8oVHmLW5mHoI9szArEXqUMR6hTE711eIRMEn6kcTanAXXVjhUpllCVMqpXJ6DTN9hyx%2F9Y8h0lERFKuuAfCCdGgPMudhAcn8yrwtI2bcHr0%2BjDT5W%2BkFTHh0c0X2B0SHLGUz4oSKBzyfCdNe%2FCTtZppYqJHy0L%2BHPHZio%2BTiez7zkfAfEj7NEaHyGldSUqvC00idXNWYrz0vd2DU9CTLd8RXnAwsbHmZ%2BipsXOkWaOjApWC0lRQMOoKYhz7ekA27ofZPem5HP8esin6g4rBqJk4wfT8%2FmxGq9WKtF0flLHYm9YNwehikh4RSMoMJj3kMQGOqUBf5XGtcyCa%2F4iWRNGp4dI%2BqPS5IT62mdRMZJ%2BJP6aocOX8NNbpQPgBfmikG6BHzYw%2FjhH4uhjVCNkJVCZ4mD1uuyNtims826FH5CcLj1cjZRRrBF%2FVWk8oHvHnyxCNl3vE1VjOY7fA0zAo7dUsGclPq2x4gXBGKYf5qdqI8Edak%2FdTj4%2BZQ1MTVBpQNCS3Tzbf%2BVfTVEHO0Vqjd7JC4cIzGWNJpxB&X-Amz-Signature=a56726a92ade55658820cd037a132edac856e9d493d407e8e843ff945a27c228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4WT2A6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCqhRYSGvmRBYDL8JlX57JvNFE1F7wI%2BGJ1GHu93XGQ6gIgC%2FT6BUvEjeQ5rzGG0Zvo%2BSpWvaYw0AeA8LUnZTtjNzIq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLjwMQg%2BufaYqDq1YircA1Wq0YE9AwNV4MNjjosFg1Lhfhs01efSNyTJTY2HXCy8O4HQmk1FRHtA75ivGi0v2fR8Dd6VtSsXgWAaEc%2FzoZbHGGhBuCKN1ZgpxOzWJfgFJZ%2B8ateBxJOwAVGfvD74GS0TZ2tmr5EgprFaj456qBzXnbqQF%2FarpTqy1EWdiazQUmVU6645LW2nnZgA5FOU5svQ%2BjYuWyoWpopItJKROJg%2FQXV2fMrGM1Ob%2FTULOmLf0%2FZw%2BWpStWxvfvEZmOjbrROG9OMQnH2kMIe7iwM7Jjy30eMpbw4rcXCaaNMbYMkdn0hkws0ooJCSK6eEq%2B5A0d9Se3bJrIlkz5Nb656iESvCXUi%2FzQdRUCj%2FGw6jwI4%2BAQqile4QxYmQgMkq3L5IxEp0mSybwQCAsrZOvQ%2B96y7bVXWmsLWKncAMEjlLGvZ7k6nUV6tBMZhsZCjrMmPiBcL5fp7Wyiq11VxUI5qyod8dd%2Fpl%2FzZ5VHK8qC2Gp1KdKW0fwQ4Br97ApoBb%2FZULSnYEYDh3uZI7phmylbRPjmWh3jba0Yh%2BDDCCPyj2JJq7LGCvuDpLVdS6AAmCc6IXtU9Kfc0bk%2FCpDcVL%2F44A6WItzkbLnAKArOWboevZvJd4lQIy4pstMPi4pMIgMJPxkMQGOqUBM8ksKEO%2FHBvNNaBOYQSKCAiEAWvxI7L0YztvSyonSMYbhdbgQjnVrydehffQvh5KXoICLc82pq3%2BOsPaTxg8zmbita5O919ErgPgMcVHwZ5f583XE0%2F2khORE%2BfE2xLpsAJaOSsEiftxuS7C%2FETAwTJo5QQzcqhyqdPIZVUvsFpv1Ev5L69WNaWOdhgq%2Bbrj6SaE7fiAWDZav6D3bJ0RpKtY0ggq&X-Amz-Signature=c15bbfba96c5132f370d461a7dfeb7bb70254460f9f32529333e0b5418aa6878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNREJYTZ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC6INe7xmmEcTuHhRbJG5bF%2FfRGW5jD7sqn9L3DXXrFZAiEAwuZiJOBxTdjCf41E76XDXix0sqRv8iBpLBDdA9v7Ttgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDFBy%2BmxURWtwytED%2FSrcA8DFELdJcWleTqA4PJsqvw9cPdKC%2FNSI20Kl0k2hrx36lni1ZiM%2FD7d7kKGJI86133YBbT9fh2N8vfD6e5usSTWE4kY7t7BibFspfKuIt3V4b0PrECym4GJZP5jb5mAKlCs9FQBPiHpFOGR2mOFWtY54Qlb1XjtQEOtSe8y%2BuSOF8IoQ07EYhiQ8upWgVYTFXi0o%2FwneMH8giMkBQo4pfOUO2cIUoh9kVfuRLGOL7rp3KvdFacC8wjvaWoxqOO1pAO2HTw6ijNiRvkes1S0TicyUsuOauDmynHir1Iet4Tmi0PhDAutej9ZcuTTX8tRoKJ8oVHmLW5mHoI9szArEXqUMR6hTE711eIRMEn6kcTanAXXVjhUpllCVMqpXJ6DTN9hyx%2F9Y8h0lERFKuuAfCCdGgPMudhAcn8yrwtI2bcHr0%2BjDT5W%2BkFTHh0c0X2B0SHLGUz4oSKBzyfCdNe%2FCTtZppYqJHy0L%2BHPHZio%2BTiez7zkfAfEj7NEaHyGldSUqvC00idXNWYrz0vd2DU9CTLd8RXnAwsbHmZ%2BipsXOkWaOjApWC0lRQMOoKYhz7ekA27ofZPem5HP8esin6g4rBqJk4wfT8%2FmxGq9WKtF0flLHYm9YNwehikh4RSMoMJj3kMQGOqUBf5XGtcyCa%2F4iWRNGp4dI%2BqPS5IT62mdRMZJ%2BJP6aocOX8NNbpQPgBfmikG6BHzYw%2FjhH4uhjVCNkJVCZ4mD1uuyNtims826FH5CcLj1cjZRRrBF%2FVWk8oHvHnyxCNl3vE1VjOY7fA0zAo7dUsGclPq2x4gXBGKYf5qdqI8Edak%2FdTj4%2BZQ1MTVBpQNCS3Tzbf%2BVfTVEHO0Vqjd7JC4cIzGWNJpxB&X-Amz-Signature=b4e7aaaae98d353284ae2ed4257fa444f41cf15a17333df8dee94807a469c7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IK24CPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCilFOFs7HYbyeaLVJEAv1SwBTFYFMQZ6mjhwoGj3YeXgIhAN7ia3br4qVEWbnfTaOKqXx7AofM8XAsgq96OWv2JYG9Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxAs%2BuePDSmS%2FCZwWcq3AMsx7tqMYxWaJJQXLIaOfLpRKu8A8XV2vX4QTvXttaOnq7%2BB5aY6J59EVjc7f%2BSQAr%2Bp2mTEmUSX%2BX8zvFzZ0IIIYEdyQ2txmaTfnjeABM%2F4xAonl%2F4fLMieB7xoLkIhTN7qGYvEcFm1YQ5m1Nz%2B2WoEuGaiScnJu0RF8941ArPkkq65VFwC4a2mSEglSZcDuwVBEITWjYhYyiDYZxj2oX8Lgfggtn6N4%2BpVkChniLbfHU6YxFNDVFo%2B0xfv6w4Kk9VqlsbN9NWfTN48TNkwoBl8dAQoaSqRAeq1QOYVVCLAgZvIydqaWW2jLEO%2FxfY0xDEnM%2F2RVyHRdYzAgmEi6AEeYFVe%2FCqCyzUGFsd87nviLAs%2Ff8i3iOpeU3PJG8LTNV6EcBddyyqJU7XZcHBJqf4EGW34evggUQMHed9ui1kdcnkYNQJjF%2BDTDeqZcupxmVFBQQf6QcfTUJyU6C%2FvFiWjSb81jjh43WkFzYDAlqC5KtOpexQEMwwdFC2eAKzSiKZsHkUILis23gZOLWZJuQfsZRDrQG3%2Bu5MmmtnIXp8NLozmebG5wtz8RFwlfMmiGRc1dII6kI1zcQXTPqFM0EOHlpP5aaZl0X7sjLd6OLOsUDgh18Ep3BQCvVtITCeo5HEBjqkAbA1eBGo6kPERrdD%2BHAG3pXw0XSGJ2R2W4oewzDJYtxuy7yCdoVm6QPTh7MV49d2BsCf1GpeYc398UXF1pLypPCwLn0COu%2FPsJWHBH184%2FjOQorfWS5rnqiu%2BgndelYsVKdv76vJX6oftrQ0qj%2Bcy%2FLyvX4cMe4A5GsUlwiV0vhJVYfdksvPAvVHXPCaAJonekJSpmJo4xtIMHpZbVZjRTYktGj%2F&X-Amz-Signature=a16f3baad240ea0fe398761741ff3cb78aea2fb9f482618049542fd0f9c86c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IK24CPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCilFOFs7HYbyeaLVJEAv1SwBTFYFMQZ6mjhwoGj3YeXgIhAN7ia3br4qVEWbnfTaOKqXx7AofM8XAsgq96OWv2JYG9Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxAs%2BuePDSmS%2FCZwWcq3AMsx7tqMYxWaJJQXLIaOfLpRKu8A8XV2vX4QTvXttaOnq7%2BB5aY6J59EVjc7f%2BSQAr%2Bp2mTEmUSX%2BX8zvFzZ0IIIYEdyQ2txmaTfnjeABM%2F4xAonl%2F4fLMieB7xoLkIhTN7qGYvEcFm1YQ5m1Nz%2B2WoEuGaiScnJu0RF8941ArPkkq65VFwC4a2mSEglSZcDuwVBEITWjYhYyiDYZxj2oX8Lgfggtn6N4%2BpVkChniLbfHU6YxFNDVFo%2B0xfv6w4Kk9VqlsbN9NWfTN48TNkwoBl8dAQoaSqRAeq1QOYVVCLAgZvIydqaWW2jLEO%2FxfY0xDEnM%2F2RVyHRdYzAgmEi6AEeYFVe%2FCqCyzUGFsd87nviLAs%2Ff8i3iOpeU3PJG8LTNV6EcBddyyqJU7XZcHBJqf4EGW34evggUQMHed9ui1kdcnkYNQJjF%2BDTDeqZcupxmVFBQQf6QcfTUJyU6C%2FvFiWjSb81jjh43WkFzYDAlqC5KtOpexQEMwwdFC2eAKzSiKZsHkUILis23gZOLWZJuQfsZRDrQG3%2Bu5MmmtnIXp8NLozmebG5wtz8RFwlfMmiGRc1dII6kI1zcQXTPqFM0EOHlpP5aaZl0X7sjLd6OLOsUDgh18Ep3BQCvVtITCeo5HEBjqkAbA1eBGo6kPERrdD%2BHAG3pXw0XSGJ2R2W4oewzDJYtxuy7yCdoVm6QPTh7MV49d2BsCf1GpeYc398UXF1pLypPCwLn0COu%2FPsJWHBH184%2FjOQorfWS5rnqiu%2BgndelYsVKdv76vJX6oftrQ0qj%2Bcy%2FLyvX4cMe4A5GsUlwiV0vhJVYfdksvPAvVHXPCaAJonekJSpmJo4xtIMHpZbVZjRTYktGj%2F&X-Amz-Signature=4a8c28f1461bdcfb109cd00f8222b4cb57c60f93a4b7c3596a53c19ab66e8798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IK24CPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCilFOFs7HYbyeaLVJEAv1SwBTFYFMQZ6mjhwoGj3YeXgIhAN7ia3br4qVEWbnfTaOKqXx7AofM8XAsgq96OWv2JYG9Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxAs%2BuePDSmS%2FCZwWcq3AMsx7tqMYxWaJJQXLIaOfLpRKu8A8XV2vX4QTvXttaOnq7%2BB5aY6J59EVjc7f%2BSQAr%2Bp2mTEmUSX%2BX8zvFzZ0IIIYEdyQ2txmaTfnjeABM%2F4xAonl%2F4fLMieB7xoLkIhTN7qGYvEcFm1YQ5m1Nz%2B2WoEuGaiScnJu0RF8941ArPkkq65VFwC4a2mSEglSZcDuwVBEITWjYhYyiDYZxj2oX8Lgfggtn6N4%2BpVkChniLbfHU6YxFNDVFo%2B0xfv6w4Kk9VqlsbN9NWfTN48TNkwoBl8dAQoaSqRAeq1QOYVVCLAgZvIydqaWW2jLEO%2FxfY0xDEnM%2F2RVyHRdYzAgmEi6AEeYFVe%2FCqCyzUGFsd87nviLAs%2Ff8i3iOpeU3PJG8LTNV6EcBddyyqJU7XZcHBJqf4EGW34evggUQMHed9ui1kdcnkYNQJjF%2BDTDeqZcupxmVFBQQf6QcfTUJyU6C%2FvFiWjSb81jjh43WkFzYDAlqC5KtOpexQEMwwdFC2eAKzSiKZsHkUILis23gZOLWZJuQfsZRDrQG3%2Bu5MmmtnIXp8NLozmebG5wtz8RFwlfMmiGRc1dII6kI1zcQXTPqFM0EOHlpP5aaZl0X7sjLd6OLOsUDgh18Ep3BQCvVtITCeo5HEBjqkAbA1eBGo6kPERrdD%2BHAG3pXw0XSGJ2R2W4oewzDJYtxuy7yCdoVm6QPTh7MV49d2BsCf1GpeYc398UXF1pLypPCwLn0COu%2FPsJWHBH184%2FjOQorfWS5rnqiu%2BgndelYsVKdv76vJX6oftrQ0qj%2Bcy%2FLyvX4cMe4A5GsUlwiV0vhJVYfdksvPAvVHXPCaAJonekJSpmJo4xtIMHpZbVZjRTYktGj%2F&X-Amz-Signature=e2b2b0553c683fe01b3777765f2983a7c8a9a338169b7ff991c93cf2e824d324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IK24CPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCilFOFs7HYbyeaLVJEAv1SwBTFYFMQZ6mjhwoGj3YeXgIhAN7ia3br4qVEWbnfTaOKqXx7AofM8XAsgq96OWv2JYG9Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxAs%2BuePDSmS%2FCZwWcq3AMsx7tqMYxWaJJQXLIaOfLpRKu8A8XV2vX4QTvXttaOnq7%2BB5aY6J59EVjc7f%2BSQAr%2Bp2mTEmUSX%2BX8zvFzZ0IIIYEdyQ2txmaTfnjeABM%2F4xAonl%2F4fLMieB7xoLkIhTN7qGYvEcFm1YQ5m1Nz%2B2WoEuGaiScnJu0RF8941ArPkkq65VFwC4a2mSEglSZcDuwVBEITWjYhYyiDYZxj2oX8Lgfggtn6N4%2BpVkChniLbfHU6YxFNDVFo%2B0xfv6w4Kk9VqlsbN9NWfTN48TNkwoBl8dAQoaSqRAeq1QOYVVCLAgZvIydqaWW2jLEO%2FxfY0xDEnM%2F2RVyHRdYzAgmEi6AEeYFVe%2FCqCyzUGFsd87nviLAs%2Ff8i3iOpeU3PJG8LTNV6EcBddyyqJU7XZcHBJqf4EGW34evggUQMHed9ui1kdcnkYNQJjF%2BDTDeqZcupxmVFBQQf6QcfTUJyU6C%2FvFiWjSb81jjh43WkFzYDAlqC5KtOpexQEMwwdFC2eAKzSiKZsHkUILis23gZOLWZJuQfsZRDrQG3%2Bu5MmmtnIXp8NLozmebG5wtz8RFwlfMmiGRc1dII6kI1zcQXTPqFM0EOHlpP5aaZl0X7sjLd6OLOsUDgh18Ep3BQCvVtITCeo5HEBjqkAbA1eBGo6kPERrdD%2BHAG3pXw0XSGJ2R2W4oewzDJYtxuy7yCdoVm6QPTh7MV49d2BsCf1GpeYc398UXF1pLypPCwLn0COu%2FPsJWHBH184%2FjOQorfWS5rnqiu%2BgndelYsVKdv76vJX6oftrQ0qj%2Bcy%2FLyvX4cMe4A5GsUlwiV0vhJVYfdksvPAvVHXPCaAJonekJSpmJo4xtIMHpZbVZjRTYktGj%2F&X-Amz-Signature=0dcd85ddc0462a9fb25e7db38d342902ca409ccb19d51ad70e381294efb1e6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IK24CPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCilFOFs7HYbyeaLVJEAv1SwBTFYFMQZ6mjhwoGj3YeXgIhAN7ia3br4qVEWbnfTaOKqXx7AofM8XAsgq96OWv2JYG9Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxAs%2BuePDSmS%2FCZwWcq3AMsx7tqMYxWaJJQXLIaOfLpRKu8A8XV2vX4QTvXttaOnq7%2BB5aY6J59EVjc7f%2BSQAr%2Bp2mTEmUSX%2BX8zvFzZ0IIIYEdyQ2txmaTfnjeABM%2F4xAonl%2F4fLMieB7xoLkIhTN7qGYvEcFm1YQ5m1Nz%2B2WoEuGaiScnJu0RF8941ArPkkq65VFwC4a2mSEglSZcDuwVBEITWjYhYyiDYZxj2oX8Lgfggtn6N4%2BpVkChniLbfHU6YxFNDVFo%2B0xfv6w4Kk9VqlsbN9NWfTN48TNkwoBl8dAQoaSqRAeq1QOYVVCLAgZvIydqaWW2jLEO%2FxfY0xDEnM%2F2RVyHRdYzAgmEi6AEeYFVe%2FCqCyzUGFsd87nviLAs%2Ff8i3iOpeU3PJG8LTNV6EcBddyyqJU7XZcHBJqf4EGW34evggUQMHed9ui1kdcnkYNQJjF%2BDTDeqZcupxmVFBQQf6QcfTUJyU6C%2FvFiWjSb81jjh43WkFzYDAlqC5KtOpexQEMwwdFC2eAKzSiKZsHkUILis23gZOLWZJuQfsZRDrQG3%2Bu5MmmtnIXp8NLozmebG5wtz8RFwlfMmiGRc1dII6kI1zcQXTPqFM0EOHlpP5aaZl0X7sjLd6OLOsUDgh18Ep3BQCvVtITCeo5HEBjqkAbA1eBGo6kPERrdD%2BHAG3pXw0XSGJ2R2W4oewzDJYtxuy7yCdoVm6QPTh7MV49d2BsCf1GpeYc398UXF1pLypPCwLn0COu%2FPsJWHBH184%2FjOQorfWS5rnqiu%2BgndelYsVKdv76vJX6oftrQ0qj%2Bcy%2FLyvX4cMe4A5GsUlwiV0vhJVYfdksvPAvVHXPCaAJonekJSpmJo4xtIMHpZbVZjRTYktGj%2F&X-Amz-Signature=4b66ee91ea9813df3d1684c0336a9e0aebff612e6a475b2948b9c5482cefbf5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IK24CPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCilFOFs7HYbyeaLVJEAv1SwBTFYFMQZ6mjhwoGj3YeXgIhAN7ia3br4qVEWbnfTaOKqXx7AofM8XAsgq96OWv2JYG9Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxAs%2BuePDSmS%2FCZwWcq3AMsx7tqMYxWaJJQXLIaOfLpRKu8A8XV2vX4QTvXttaOnq7%2BB5aY6J59EVjc7f%2BSQAr%2Bp2mTEmUSX%2BX8zvFzZ0IIIYEdyQ2txmaTfnjeABM%2F4xAonl%2F4fLMieB7xoLkIhTN7qGYvEcFm1YQ5m1Nz%2B2WoEuGaiScnJu0RF8941ArPkkq65VFwC4a2mSEglSZcDuwVBEITWjYhYyiDYZxj2oX8Lgfggtn6N4%2BpVkChniLbfHU6YxFNDVFo%2B0xfv6w4Kk9VqlsbN9NWfTN48TNkwoBl8dAQoaSqRAeq1QOYVVCLAgZvIydqaWW2jLEO%2FxfY0xDEnM%2F2RVyHRdYzAgmEi6AEeYFVe%2FCqCyzUGFsd87nviLAs%2Ff8i3iOpeU3PJG8LTNV6EcBddyyqJU7XZcHBJqf4EGW34evggUQMHed9ui1kdcnkYNQJjF%2BDTDeqZcupxmVFBQQf6QcfTUJyU6C%2FvFiWjSb81jjh43WkFzYDAlqC5KtOpexQEMwwdFC2eAKzSiKZsHkUILis23gZOLWZJuQfsZRDrQG3%2Bu5MmmtnIXp8NLozmebG5wtz8RFwlfMmiGRc1dII6kI1zcQXTPqFM0EOHlpP5aaZl0X7sjLd6OLOsUDgh18Ep3BQCvVtITCeo5HEBjqkAbA1eBGo6kPERrdD%2BHAG3pXw0XSGJ2R2W4oewzDJYtxuy7yCdoVm6QPTh7MV49d2BsCf1GpeYc398UXF1pLypPCwLn0COu%2FPsJWHBH184%2FjOQorfWS5rnqiu%2BgndelYsVKdv76vJX6oftrQ0qj%2Bcy%2FLyvX4cMe4A5GsUlwiV0vhJVYfdksvPAvVHXPCaAJonekJSpmJo4xtIMHpZbVZjRTYktGj%2F&X-Amz-Signature=2d0b9065cc8c90066acf5c942872d3743c5d39e77708c7b099e90e412be8b9a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IK24CPQ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCilFOFs7HYbyeaLVJEAv1SwBTFYFMQZ6mjhwoGj3YeXgIhAN7ia3br4qVEWbnfTaOKqXx7AofM8XAsgq96OWv2JYG9Kv8DCFUQABoMNjM3NDIzMTgzODA1IgxAs%2BuePDSmS%2FCZwWcq3AMsx7tqMYxWaJJQXLIaOfLpRKu8A8XV2vX4QTvXttaOnq7%2BB5aY6J59EVjc7f%2BSQAr%2Bp2mTEmUSX%2BX8zvFzZ0IIIYEdyQ2txmaTfnjeABM%2F4xAonl%2F4fLMieB7xoLkIhTN7qGYvEcFm1YQ5m1Nz%2B2WoEuGaiScnJu0RF8941ArPkkq65VFwC4a2mSEglSZcDuwVBEITWjYhYyiDYZxj2oX8Lgfggtn6N4%2BpVkChniLbfHU6YxFNDVFo%2B0xfv6w4Kk9VqlsbN9NWfTN48TNkwoBl8dAQoaSqRAeq1QOYVVCLAgZvIydqaWW2jLEO%2FxfY0xDEnM%2F2RVyHRdYzAgmEi6AEeYFVe%2FCqCyzUGFsd87nviLAs%2Ff8i3iOpeU3PJG8LTNV6EcBddyyqJU7XZcHBJqf4EGW34evggUQMHed9ui1kdcnkYNQJjF%2BDTDeqZcupxmVFBQQf6QcfTUJyU6C%2FvFiWjSb81jjh43WkFzYDAlqC5KtOpexQEMwwdFC2eAKzSiKZsHkUILis23gZOLWZJuQfsZRDrQG3%2Bu5MmmtnIXp8NLozmebG5wtz8RFwlfMmiGRc1dII6kI1zcQXTPqFM0EOHlpP5aaZl0X7sjLd6OLOsUDgh18Ep3BQCvVtITCeo5HEBjqkAbA1eBGo6kPERrdD%2BHAG3pXw0XSGJ2R2W4oewzDJYtxuy7yCdoVm6QPTh7MV49d2BsCf1GpeYc398UXF1pLypPCwLn0COu%2FPsJWHBH184%2FjOQorfWS5rnqiu%2BgndelYsVKdv76vJX6oftrQ0qj%2Bcy%2FLyvX4cMe4A5GsUlwiV0vhJVYfdksvPAvVHXPCaAJonekJSpmJo4xtIMHpZbVZjRTYktGj%2F&X-Amz-Signature=6dcad663758b0859e0d4716d42fb27c80285d68c7e0160ad9498be788e79b66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
