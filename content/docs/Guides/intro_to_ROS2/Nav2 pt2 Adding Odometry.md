---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXNSE57%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGYrFn5Wjiy29uDh%2F0U7KmuJZbeF7Ypz%2FdedXHnuRlJzAiBV1nTigi1KdjRx5s2bORnUvnsn6MufiJ6g1etmN8WP2iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwz5%2FIJPsvzeiKYqIKtwD5vRM4QCLoJIDLKekwWV9H1R14dtJCzO88KBd%2F%2FLt8ZQcWbE2tOjBMwjUkDa6Y9imTy%2Fdd%2FKHW2DLM%2BSMhevApfC4Qs%2F4OojIHUESsxyMwVHmJQ6qd19kDvcfAHrP4aZjZKGvLiaASQI9wDk2MR1UNCIlzEMMhJOtXjTdn6vBs6vUYSsh6WdxO1sFW%2BHvWpGsfisS70Xt0vzy8Rm2Nk29XHouFYJclcStYOwENzymwojZoRKxtjJHu5mQU5%2F2f%2Fy88EFbFcN3G4FwoUDjZ%2FFETwcZzGq%2FSzImLpOE1gsLk0V66wzcBD2UjRRtlP4f6udqy68R0TIKWC6JPnJyQv4JGcLthUvTO%2BXq3rg0jx6utgVnF0m%2BhuSmr8qQabtE2IWog4AdHPTwH6dq%2FTKbeU4ws5%2Bdr973Bm1c3nsMeZ1y5ddgfQHcv6klQx32os4vSE1b1toUYdYJNR4BKKbn4zFLdmRa%2B3FuXf7XcYaMa1gaTQ4gGTKjW18MXgQnt%2FdbX7Ekph6R5SFmcLUSBlqOPoR%2BO7iWrIqV%2FFgzMZ1nXLC5HZ%2BY0q%2BReIbUnYQ%2BqSvZipr3Gg%2FHB16NyfyB%2FjUvwMRCxXWGk87H9Vs397eRBG%2FLn3T53FJo71hDtuLiqx0wofKfxAY6pgE6aQ7RDT%2Bav4I5E91Juz%2FoIaC6FQ6GdT1huzOg4TPp7I0cPyelZ0iqH%2F0TCg%2F4W6OWLmyKPNMNVaB1Mzd0IHRGsfgOF9xx3rH%2BMDpmNvP3c0ktEx8ao%2B439uGrEQiwbQ4rgJK3qt20DVuVgrUoZIFTHJOE6aAh5%2FJ5hzpCw9kIUqAKGZck0EpqC865Ruw4JBBow6KPEg%2FHGvTbLnHozN%2FrJ2h%2FEWXS&X-Amz-Signature=f74e87a3b4804e665112ea6851073776367c807552f07719e5ad929e29a99930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXNSE57%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGYrFn5Wjiy29uDh%2F0U7KmuJZbeF7Ypz%2FdedXHnuRlJzAiBV1nTigi1KdjRx5s2bORnUvnsn6MufiJ6g1etmN8WP2iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwz5%2FIJPsvzeiKYqIKtwD5vRM4QCLoJIDLKekwWV9H1R14dtJCzO88KBd%2F%2FLt8ZQcWbE2tOjBMwjUkDa6Y9imTy%2Fdd%2FKHW2DLM%2BSMhevApfC4Qs%2F4OojIHUESsxyMwVHmJQ6qd19kDvcfAHrP4aZjZKGvLiaASQI9wDk2MR1UNCIlzEMMhJOtXjTdn6vBs6vUYSsh6WdxO1sFW%2BHvWpGsfisS70Xt0vzy8Rm2Nk29XHouFYJclcStYOwENzymwojZoRKxtjJHu5mQU5%2F2f%2Fy88EFbFcN3G4FwoUDjZ%2FFETwcZzGq%2FSzImLpOE1gsLk0V66wzcBD2UjRRtlP4f6udqy68R0TIKWC6JPnJyQv4JGcLthUvTO%2BXq3rg0jx6utgVnF0m%2BhuSmr8qQabtE2IWog4AdHPTwH6dq%2FTKbeU4ws5%2Bdr973Bm1c3nsMeZ1y5ddgfQHcv6klQx32os4vSE1b1toUYdYJNR4BKKbn4zFLdmRa%2B3FuXf7XcYaMa1gaTQ4gGTKjW18MXgQnt%2FdbX7Ekph6R5SFmcLUSBlqOPoR%2BO7iWrIqV%2FFgzMZ1nXLC5HZ%2BY0q%2BReIbUnYQ%2BqSvZipr3Gg%2FHB16NyfyB%2FjUvwMRCxXWGk87H9Vs397eRBG%2FLn3T53FJo71hDtuLiqx0wofKfxAY6pgE6aQ7RDT%2Bav4I5E91Juz%2FoIaC6FQ6GdT1huzOg4TPp7I0cPyelZ0iqH%2F0TCg%2F4W6OWLmyKPNMNVaB1Mzd0IHRGsfgOF9xx3rH%2BMDpmNvP3c0ktEx8ao%2B439uGrEQiwbQ4rgJK3qt20DVuVgrUoZIFTHJOE6aAh5%2FJ5hzpCw9kIUqAKGZck0EpqC865Ruw4JBBow6KPEg%2FHGvTbLnHozN%2FrJ2h%2FEWXS&X-Amz-Signature=cf5028753b1f466d132dc14d218f88a0a1b5f197dcfda45552daabe4ca754fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXNSE57%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGYrFn5Wjiy29uDh%2F0U7KmuJZbeF7Ypz%2FdedXHnuRlJzAiBV1nTigi1KdjRx5s2bORnUvnsn6MufiJ6g1etmN8WP2iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwz5%2FIJPsvzeiKYqIKtwD5vRM4QCLoJIDLKekwWV9H1R14dtJCzO88KBd%2F%2FLt8ZQcWbE2tOjBMwjUkDa6Y9imTy%2Fdd%2FKHW2DLM%2BSMhevApfC4Qs%2F4OojIHUESsxyMwVHmJQ6qd19kDvcfAHrP4aZjZKGvLiaASQI9wDk2MR1UNCIlzEMMhJOtXjTdn6vBs6vUYSsh6WdxO1sFW%2BHvWpGsfisS70Xt0vzy8Rm2Nk29XHouFYJclcStYOwENzymwojZoRKxtjJHu5mQU5%2F2f%2Fy88EFbFcN3G4FwoUDjZ%2FFETwcZzGq%2FSzImLpOE1gsLk0V66wzcBD2UjRRtlP4f6udqy68R0TIKWC6JPnJyQv4JGcLthUvTO%2BXq3rg0jx6utgVnF0m%2BhuSmr8qQabtE2IWog4AdHPTwH6dq%2FTKbeU4ws5%2Bdr973Bm1c3nsMeZ1y5ddgfQHcv6klQx32os4vSE1b1toUYdYJNR4BKKbn4zFLdmRa%2B3FuXf7XcYaMa1gaTQ4gGTKjW18MXgQnt%2FdbX7Ekph6R5SFmcLUSBlqOPoR%2BO7iWrIqV%2FFgzMZ1nXLC5HZ%2BY0q%2BReIbUnYQ%2BqSvZipr3Gg%2FHB16NyfyB%2FjUvwMRCxXWGk87H9Vs397eRBG%2FLn3T53FJo71hDtuLiqx0wofKfxAY6pgE6aQ7RDT%2Bav4I5E91Juz%2FoIaC6FQ6GdT1huzOg4TPp7I0cPyelZ0iqH%2F0TCg%2F4W6OWLmyKPNMNVaB1Mzd0IHRGsfgOF9xx3rH%2BMDpmNvP3c0ktEx8ao%2B439uGrEQiwbQ4rgJK3qt20DVuVgrUoZIFTHJOE6aAh5%2FJ5hzpCw9kIUqAKGZck0EpqC865Ruw4JBBow6KPEg%2FHGvTbLnHozN%2FrJ2h%2FEWXS&X-Amz-Signature=61665b2077a6709e3669ce13a54f9f43de90faf3db50db2d275397683bd475df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXNSE57%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGYrFn5Wjiy29uDh%2F0U7KmuJZbeF7Ypz%2FdedXHnuRlJzAiBV1nTigi1KdjRx5s2bORnUvnsn6MufiJ6g1etmN8WP2iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwz5%2FIJPsvzeiKYqIKtwD5vRM4QCLoJIDLKekwWV9H1R14dtJCzO88KBd%2F%2FLt8ZQcWbE2tOjBMwjUkDa6Y9imTy%2Fdd%2FKHW2DLM%2BSMhevApfC4Qs%2F4OojIHUESsxyMwVHmJQ6qd19kDvcfAHrP4aZjZKGvLiaASQI9wDk2MR1UNCIlzEMMhJOtXjTdn6vBs6vUYSsh6WdxO1sFW%2BHvWpGsfisS70Xt0vzy8Rm2Nk29XHouFYJclcStYOwENzymwojZoRKxtjJHu5mQU5%2F2f%2Fy88EFbFcN3G4FwoUDjZ%2FFETwcZzGq%2FSzImLpOE1gsLk0V66wzcBD2UjRRtlP4f6udqy68R0TIKWC6JPnJyQv4JGcLthUvTO%2BXq3rg0jx6utgVnF0m%2BhuSmr8qQabtE2IWog4AdHPTwH6dq%2FTKbeU4ws5%2Bdr973Bm1c3nsMeZ1y5ddgfQHcv6klQx32os4vSE1b1toUYdYJNR4BKKbn4zFLdmRa%2B3FuXf7XcYaMa1gaTQ4gGTKjW18MXgQnt%2FdbX7Ekph6R5SFmcLUSBlqOPoR%2BO7iWrIqV%2FFgzMZ1nXLC5HZ%2BY0q%2BReIbUnYQ%2BqSvZipr3Gg%2FHB16NyfyB%2FjUvwMRCxXWGk87H9Vs397eRBG%2FLn3T53FJo71hDtuLiqx0wofKfxAY6pgE6aQ7RDT%2Bav4I5E91Juz%2FoIaC6FQ6GdT1huzOg4TPp7I0cPyelZ0iqH%2F0TCg%2F4W6OWLmyKPNMNVaB1Mzd0IHRGsfgOF9xx3rH%2BMDpmNvP3c0ktEx8ao%2B439uGrEQiwbQ4rgJK3qt20DVuVgrUoZIFTHJOE6aAh5%2FJ5hzpCw9kIUqAKGZck0EpqC865Ruw4JBBow6KPEg%2FHGvTbLnHozN%2FrJ2h%2FEWXS&X-Amz-Signature=fa54bef905c568b5f914f5dda875fe441cdb8b76a8dd5fdd80ae5f60f26ed3f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXNSE57%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGYrFn5Wjiy29uDh%2F0U7KmuJZbeF7Ypz%2FdedXHnuRlJzAiBV1nTigi1KdjRx5s2bORnUvnsn6MufiJ6g1etmN8WP2iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwz5%2FIJPsvzeiKYqIKtwD5vRM4QCLoJIDLKekwWV9H1R14dtJCzO88KBd%2F%2FLt8ZQcWbE2tOjBMwjUkDa6Y9imTy%2Fdd%2FKHW2DLM%2BSMhevApfC4Qs%2F4OojIHUESsxyMwVHmJQ6qd19kDvcfAHrP4aZjZKGvLiaASQI9wDk2MR1UNCIlzEMMhJOtXjTdn6vBs6vUYSsh6WdxO1sFW%2BHvWpGsfisS70Xt0vzy8Rm2Nk29XHouFYJclcStYOwENzymwojZoRKxtjJHu5mQU5%2F2f%2Fy88EFbFcN3G4FwoUDjZ%2FFETwcZzGq%2FSzImLpOE1gsLk0V66wzcBD2UjRRtlP4f6udqy68R0TIKWC6JPnJyQv4JGcLthUvTO%2BXq3rg0jx6utgVnF0m%2BhuSmr8qQabtE2IWog4AdHPTwH6dq%2FTKbeU4ws5%2Bdr973Bm1c3nsMeZ1y5ddgfQHcv6klQx32os4vSE1b1toUYdYJNR4BKKbn4zFLdmRa%2B3FuXf7XcYaMa1gaTQ4gGTKjW18MXgQnt%2FdbX7Ekph6R5SFmcLUSBlqOPoR%2BO7iWrIqV%2FFgzMZ1nXLC5HZ%2BY0q%2BReIbUnYQ%2BqSvZipr3Gg%2FHB16NyfyB%2FjUvwMRCxXWGk87H9Vs397eRBG%2FLn3T53FJo71hDtuLiqx0wofKfxAY6pgE6aQ7RDT%2Bav4I5E91Juz%2FoIaC6FQ6GdT1huzOg4TPp7I0cPyelZ0iqH%2F0TCg%2F4W6OWLmyKPNMNVaB1Mzd0IHRGsfgOF9xx3rH%2BMDpmNvP3c0ktEx8ao%2B439uGrEQiwbQ4rgJK3qt20DVuVgrUoZIFTHJOE6aAh5%2FJ5hzpCw9kIUqAKGZck0EpqC865Ruw4JBBow6KPEg%2FHGvTbLnHozN%2FrJ2h%2FEWXS&X-Amz-Signature=cd7adbba382c15b91e516016330b6b476ef942de673dc323c41f5d95876d37fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXNSE57%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGYrFn5Wjiy29uDh%2F0U7KmuJZbeF7Ypz%2FdedXHnuRlJzAiBV1nTigi1KdjRx5s2bORnUvnsn6MufiJ6g1etmN8WP2iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwz5%2FIJPsvzeiKYqIKtwD5vRM4QCLoJIDLKekwWV9H1R14dtJCzO88KBd%2F%2FLt8ZQcWbE2tOjBMwjUkDa6Y9imTy%2Fdd%2FKHW2DLM%2BSMhevApfC4Qs%2F4OojIHUESsxyMwVHmJQ6qd19kDvcfAHrP4aZjZKGvLiaASQI9wDk2MR1UNCIlzEMMhJOtXjTdn6vBs6vUYSsh6WdxO1sFW%2BHvWpGsfisS70Xt0vzy8Rm2Nk29XHouFYJclcStYOwENzymwojZoRKxtjJHu5mQU5%2F2f%2Fy88EFbFcN3G4FwoUDjZ%2FFETwcZzGq%2FSzImLpOE1gsLk0V66wzcBD2UjRRtlP4f6udqy68R0TIKWC6JPnJyQv4JGcLthUvTO%2BXq3rg0jx6utgVnF0m%2BhuSmr8qQabtE2IWog4AdHPTwH6dq%2FTKbeU4ws5%2Bdr973Bm1c3nsMeZ1y5ddgfQHcv6klQx32os4vSE1b1toUYdYJNR4BKKbn4zFLdmRa%2B3FuXf7XcYaMa1gaTQ4gGTKjW18MXgQnt%2FdbX7Ekph6R5SFmcLUSBlqOPoR%2BO7iWrIqV%2FFgzMZ1nXLC5HZ%2BY0q%2BReIbUnYQ%2BqSvZipr3Gg%2FHB16NyfyB%2FjUvwMRCxXWGk87H9Vs397eRBG%2FLn3T53FJo71hDtuLiqx0wofKfxAY6pgE6aQ7RDT%2Bav4I5E91Juz%2FoIaC6FQ6GdT1huzOg4TPp7I0cPyelZ0iqH%2F0TCg%2F4W6OWLmyKPNMNVaB1Mzd0IHRGsfgOF9xx3rH%2BMDpmNvP3c0ktEx8ao%2B439uGrEQiwbQ4rgJK3qt20DVuVgrUoZIFTHJOE6aAh5%2FJ5hzpCw9kIUqAKGZck0EpqC865Ruw4JBBow6KPEg%2FHGvTbLnHozN%2FrJ2h%2FEWXS&X-Amz-Signature=cb43d99979808b074b6c934ef30375111c0a5fb9d19d3371b1145bce6a86f299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXNSE57%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGYrFn5Wjiy29uDh%2F0U7KmuJZbeF7Ypz%2FdedXHnuRlJzAiBV1nTigi1KdjRx5s2bORnUvnsn6MufiJ6g1etmN8WP2iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwz5%2FIJPsvzeiKYqIKtwD5vRM4QCLoJIDLKekwWV9H1R14dtJCzO88KBd%2F%2FLt8ZQcWbE2tOjBMwjUkDa6Y9imTy%2Fdd%2FKHW2DLM%2BSMhevApfC4Qs%2F4OojIHUESsxyMwVHmJQ6qd19kDvcfAHrP4aZjZKGvLiaASQI9wDk2MR1UNCIlzEMMhJOtXjTdn6vBs6vUYSsh6WdxO1sFW%2BHvWpGsfisS70Xt0vzy8Rm2Nk29XHouFYJclcStYOwENzymwojZoRKxtjJHu5mQU5%2F2f%2Fy88EFbFcN3G4FwoUDjZ%2FFETwcZzGq%2FSzImLpOE1gsLk0V66wzcBD2UjRRtlP4f6udqy68R0TIKWC6JPnJyQv4JGcLthUvTO%2BXq3rg0jx6utgVnF0m%2BhuSmr8qQabtE2IWog4AdHPTwH6dq%2FTKbeU4ws5%2Bdr973Bm1c3nsMeZ1y5ddgfQHcv6klQx32os4vSE1b1toUYdYJNR4BKKbn4zFLdmRa%2B3FuXf7XcYaMa1gaTQ4gGTKjW18MXgQnt%2FdbX7Ekph6R5SFmcLUSBlqOPoR%2BO7iWrIqV%2FFgzMZ1nXLC5HZ%2BY0q%2BReIbUnYQ%2BqSvZipr3Gg%2FHB16NyfyB%2FjUvwMRCxXWGk87H9Vs397eRBG%2FLn3T53FJo71hDtuLiqx0wofKfxAY6pgE6aQ7RDT%2Bav4I5E91Juz%2FoIaC6FQ6GdT1huzOg4TPp7I0cPyelZ0iqH%2F0TCg%2F4W6OWLmyKPNMNVaB1Mzd0IHRGsfgOF9xx3rH%2BMDpmNvP3c0ktEx8ao%2B439uGrEQiwbQ4rgJK3qt20DVuVgrUoZIFTHJOE6aAh5%2FJ5hzpCw9kIUqAKGZck0EpqC865Ruw4JBBow6KPEg%2FHGvTbLnHozN%2FrJ2h%2FEWXS&X-Amz-Signature=76d0cb1e7663c2e45e4233a7868ffd5f78af9eac1357d0b7f1564ca2afaa6c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXNSE57%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGYrFn5Wjiy29uDh%2F0U7KmuJZbeF7Ypz%2FdedXHnuRlJzAiBV1nTigi1KdjRx5s2bORnUvnsn6MufiJ6g1etmN8WP2iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwz5%2FIJPsvzeiKYqIKtwD5vRM4QCLoJIDLKekwWV9H1R14dtJCzO88KBd%2F%2FLt8ZQcWbE2tOjBMwjUkDa6Y9imTy%2Fdd%2FKHW2DLM%2BSMhevApfC4Qs%2F4OojIHUESsxyMwVHmJQ6qd19kDvcfAHrP4aZjZKGvLiaASQI9wDk2MR1UNCIlzEMMhJOtXjTdn6vBs6vUYSsh6WdxO1sFW%2BHvWpGsfisS70Xt0vzy8Rm2Nk29XHouFYJclcStYOwENzymwojZoRKxtjJHu5mQU5%2F2f%2Fy88EFbFcN3G4FwoUDjZ%2FFETwcZzGq%2FSzImLpOE1gsLk0V66wzcBD2UjRRtlP4f6udqy68R0TIKWC6JPnJyQv4JGcLthUvTO%2BXq3rg0jx6utgVnF0m%2BhuSmr8qQabtE2IWog4AdHPTwH6dq%2FTKbeU4ws5%2Bdr973Bm1c3nsMeZ1y5ddgfQHcv6klQx32os4vSE1b1toUYdYJNR4BKKbn4zFLdmRa%2B3FuXf7XcYaMa1gaTQ4gGTKjW18MXgQnt%2FdbX7Ekph6R5SFmcLUSBlqOPoR%2BO7iWrIqV%2FFgzMZ1nXLC5HZ%2BY0q%2BReIbUnYQ%2BqSvZipr3Gg%2FHB16NyfyB%2FjUvwMRCxXWGk87H9Vs397eRBG%2FLn3T53FJo71hDtuLiqx0wofKfxAY6pgE6aQ7RDT%2Bav4I5E91Juz%2FoIaC6FQ6GdT1huzOg4TPp7I0cPyelZ0iqH%2F0TCg%2F4W6OWLmyKPNMNVaB1Mzd0IHRGsfgOF9xx3rH%2BMDpmNvP3c0ktEx8ao%2B439uGrEQiwbQ4rgJK3qt20DVuVgrUoZIFTHJOE6aAh5%2FJ5hzpCw9kIUqAKGZck0EpqC865Ruw4JBBow6KPEg%2FHGvTbLnHozN%2FrJ2h%2FEWXS&X-Amz-Signature=f7c67bd4005348b2b5ad76b0f7c734263889c0d6858110139639559d8c6bceb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXNSE57%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGYrFn5Wjiy29uDh%2F0U7KmuJZbeF7Ypz%2FdedXHnuRlJzAiBV1nTigi1KdjRx5s2bORnUvnsn6MufiJ6g1etmN8WP2iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwz5%2FIJPsvzeiKYqIKtwD5vRM4QCLoJIDLKekwWV9H1R14dtJCzO88KBd%2F%2FLt8ZQcWbE2tOjBMwjUkDa6Y9imTy%2Fdd%2FKHW2DLM%2BSMhevApfC4Qs%2F4OojIHUESsxyMwVHmJQ6qd19kDvcfAHrP4aZjZKGvLiaASQI9wDk2MR1UNCIlzEMMhJOtXjTdn6vBs6vUYSsh6WdxO1sFW%2BHvWpGsfisS70Xt0vzy8Rm2Nk29XHouFYJclcStYOwENzymwojZoRKxtjJHu5mQU5%2F2f%2Fy88EFbFcN3G4FwoUDjZ%2FFETwcZzGq%2FSzImLpOE1gsLk0V66wzcBD2UjRRtlP4f6udqy68R0TIKWC6JPnJyQv4JGcLthUvTO%2BXq3rg0jx6utgVnF0m%2BhuSmr8qQabtE2IWog4AdHPTwH6dq%2FTKbeU4ws5%2Bdr973Bm1c3nsMeZ1y5ddgfQHcv6klQx32os4vSE1b1toUYdYJNR4BKKbn4zFLdmRa%2B3FuXf7XcYaMa1gaTQ4gGTKjW18MXgQnt%2FdbX7Ekph6R5SFmcLUSBlqOPoR%2BO7iWrIqV%2FFgzMZ1nXLC5HZ%2BY0q%2BReIbUnYQ%2BqSvZipr3Gg%2FHB16NyfyB%2FjUvwMRCxXWGk87H9Vs397eRBG%2FLn3T53FJo71hDtuLiqx0wofKfxAY6pgE6aQ7RDT%2Bav4I5E91Juz%2FoIaC6FQ6GdT1huzOg4TPp7I0cPyelZ0iqH%2F0TCg%2F4W6OWLmyKPNMNVaB1Mzd0IHRGsfgOF9xx3rH%2BMDpmNvP3c0ktEx8ao%2B439uGrEQiwbQ4rgJK3qt20DVuVgrUoZIFTHJOE6aAh5%2FJ5hzpCw9kIUqAKGZck0EpqC865Ruw4JBBow6KPEg%2FHGvTbLnHozN%2FrJ2h%2FEWXS&X-Amz-Signature=5b67877267fe0daaea8c9a706ca06a1f84ae34f0d1a3035688f1a4937fdf1c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO23ED4B%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCJ0rbZdmvVtNhIFtz4rJwYK7jSgNFRSFMLTmviLAkYawIhAIuwlpLrmjbZ%2F5wcOOb4sO45nqg%2FvyNtriHX1ATEIubqKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEULNhbuMjCHczQTsq3AOstljE6iOMgeGvP%2BvUQOyt8E7kOqOD6BUxcajlDScE25v4wsU0e%2BLjN0Doy8xIUgV1EQ1vKKZWtp2Dw360Rb%2FrlYlwt%2Fx54IKmBfAtQHw%2BSBU3Aknp8cGgcY6LnUYGDErzwwlhXyzGQIXajX4MFTBGR5SIW9RBVEqB4SBbCwkHFfJCgYLD5qtfeYdprl1o5L%2BdjGqXcRDB0KfmfRx7V8WX%2Be8iVURsIEse3K6ZzAvAkBkhqKzbk%2B%2FuX%2Fv60%2BuiPKra6SB7N2oJNJm%2F1ceTevKZ9w23OWZH3tdFinpXBRFOfTNFVMONMH2%2F2%2FkQj3iNesZriaXCGNlKTfD%2BwwqFu7FULJcSTHFhgWMIq2GACxZE4ZLR22gqotsL%2Bl2lrovTUq%2B%2F4GoI%2FK4KO2j%2B2cHeFC%2FvjGIYHbLS8sQJbp9aWB8ZdluoD%2F5XB078hfJiEc1Wjed%2FkYmkcbeoX51UVaXSquoTBmUN6LQrpMpcBe%2F%2BAsWekgVOmVaEohgPH4N%2Ffz5taLx0WMuIxFEfqSQJKr%2BHKMIMSzWQKhWN3CCKG9fU6WahBergJpVwPmAafJEKOF8vtiWky44F5G0bIAiEH2coNkgUdbqNJExmChM76eJBPvC%2FHh2uwwdMvY6oqyUCKzDS8Z%2FEBjqkAcHkBQgaTWx%2FjOKR8d6uF8Da%2FWNVrr80R0w9ocNCrY%2F%2F3GpYeN7%2B3jo%2BNdbnl0h0yQ2T7KRQRT196N9E9Fh0jyucaCwL7AZWzSC664UOFJFsRI%2FtfiLK3UZoMxUXlY5UDEahw0JV3keXDGYiYZDu3T2nQgbNS4XIcEqQl%2FdnyKfpZdXoV7dfhtwWjCcWUaebxcVTfKrlpCdOUMvhT%2BqnJOXD9jer&X-Amz-Signature=9bff20c5c3275edb78bc862af2f3205ca46f6f114f25de70326a3d4746e734f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDXNSE57%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGYrFn5Wjiy29uDh%2F0U7KmuJZbeF7Ypz%2FdedXHnuRlJzAiBV1nTigi1KdjRx5s2bORnUvnsn6MufiJ6g1etmN8WP2iqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwz5%2FIJPsvzeiKYqIKtwD5vRM4QCLoJIDLKekwWV9H1R14dtJCzO88KBd%2F%2FLt8ZQcWbE2tOjBMwjUkDa6Y9imTy%2Fdd%2FKHW2DLM%2BSMhevApfC4Qs%2F4OojIHUESsxyMwVHmJQ6qd19kDvcfAHrP4aZjZKGvLiaASQI9wDk2MR1UNCIlzEMMhJOtXjTdn6vBs6vUYSsh6WdxO1sFW%2BHvWpGsfisS70Xt0vzy8Rm2Nk29XHouFYJclcStYOwENzymwojZoRKxtjJHu5mQU5%2F2f%2Fy88EFbFcN3G4FwoUDjZ%2FFETwcZzGq%2FSzImLpOE1gsLk0V66wzcBD2UjRRtlP4f6udqy68R0TIKWC6JPnJyQv4JGcLthUvTO%2BXq3rg0jx6utgVnF0m%2BhuSmr8qQabtE2IWog4AdHPTwH6dq%2FTKbeU4ws5%2Bdr973Bm1c3nsMeZ1y5ddgfQHcv6klQx32os4vSE1b1toUYdYJNR4BKKbn4zFLdmRa%2B3FuXf7XcYaMa1gaTQ4gGTKjW18MXgQnt%2FdbX7Ekph6R5SFmcLUSBlqOPoR%2BO7iWrIqV%2FFgzMZ1nXLC5HZ%2BY0q%2BReIbUnYQ%2BqSvZipr3Gg%2FHB16NyfyB%2FjUvwMRCxXWGk87H9Vs397eRBG%2FLn3T53FJo71hDtuLiqx0wofKfxAY6pgE6aQ7RDT%2Bav4I5E91Juz%2FoIaC6FQ6GdT1huzOg4TPp7I0cPyelZ0iqH%2F0TCg%2F4W6OWLmyKPNMNVaB1Mzd0IHRGsfgOF9xx3rH%2BMDpmNvP3c0ktEx8ao%2B439uGrEQiwbQ4rgJK3qt20DVuVgrUoZIFTHJOE6aAh5%2FJ5hzpCw9kIUqAKGZck0EpqC865Ruw4JBBow6KPEg%2FHGvTbLnHozN%2FrJ2h%2FEWXS&X-Amz-Signature=f4067fc417754c9c17f5312462a6b00ab823becc6064ab9f18a6edcd66fddb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4DDT7U%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD3b2Zoe3NIJ8WK3DTAH89j%2BWSBxwMlbcGm6lHBPRCQTwIgcwgN3p4N9%2FuR%2FrJ9Oowft35ahUT7Ndaj%2BLJ%2BIYyNapsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVpn3QNZvi24XyQ3ircAz0Wm%2BvuT109UVj36MdkB4Md6q0CtvYisj6rnZdednBFxwNyEzDlMIDbt%2BWMT36uxCZuXWSh75otDwzDj1Ip0nTr6Kx%2FU9AWvLGJS3PY204dkrXTdRxlpovedvnqZtJQtCKgEZsOYgpxCiwJlwML4KzX4niEhs99PM2vGYTTc7kTCFD3co21gvtYcy4A5qqQc0LgPBaFK8eTU2gkYLT1kcOwCFE2BGLAyBnkYL2XbDB1VkKe0JqIOkth2rOsJmbAOAp2cDpMQNVkorLyWVdM4pjeDh9TMlCxo6HB7FpzzzF25DCLnreQCNDrhANOohVyO4pBxjBT20s5Pocb%2B4VCcXKYoK%2BMwD7dfg8sDeGmz2grWxwknoDGsUKPfo%2FhrLf5vhmQ4%2FpM5GhfuHJ0jhzNLcO1qZqawQvXe7YwKSlUiRM5oFPmamUNEswyxjulk6ZgyA0gaspuRF58NphobVG0iIy1LbQJFDayj8y3Lh4smxnv4WPXUBzEPRBZmCFtf5QyULTzlpuzgQpRBRJmnz4IgWeRwZaxDoNnez9BSxetcY%2FZWTea8wpiaUnSQx3FFC5EeP7nJfh3uyjQQSJ5jqOPO4TqM0%2Fd4djkCHUEw%2FVNVoiFo7KIO5ZdG9LtYcPtMObxn8QGOqUBMIL48h%2Bmx1nLhqJX%2BKdqg%2FLTpw8hrfim0USSp3jatPcBI2LUQe1sw%2FIXutwATuPmGSlU6r1qk%2FypU%2FNm6xZdEUv6zFi2Igh064ZAISgusJuQok3%2B0TFac6exJtHiXyfvn0yrUuMAaPuj7%2F7wWmfmPvB%2BaYisZ1%2BF6yFuL8yyuRZSQ56dgj2iLpjyywEaoaGZWHdSKDIQ8DhxJt7ud2x125FVAyyJ&X-Amz-Signature=9a438402fc8b54c71bd19f7be591767df31ff5a9d9a553ebf4320e333d051824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4DDT7U%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD3b2Zoe3NIJ8WK3DTAH89j%2BWSBxwMlbcGm6lHBPRCQTwIgcwgN3p4N9%2FuR%2FrJ9Oowft35ahUT7Ndaj%2BLJ%2BIYyNapsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVpn3QNZvi24XyQ3ircAz0Wm%2BvuT109UVj36MdkB4Md6q0CtvYisj6rnZdednBFxwNyEzDlMIDbt%2BWMT36uxCZuXWSh75otDwzDj1Ip0nTr6Kx%2FU9AWvLGJS3PY204dkrXTdRxlpovedvnqZtJQtCKgEZsOYgpxCiwJlwML4KzX4niEhs99PM2vGYTTc7kTCFD3co21gvtYcy4A5qqQc0LgPBaFK8eTU2gkYLT1kcOwCFE2BGLAyBnkYL2XbDB1VkKe0JqIOkth2rOsJmbAOAp2cDpMQNVkorLyWVdM4pjeDh9TMlCxo6HB7FpzzzF25DCLnreQCNDrhANOohVyO4pBxjBT20s5Pocb%2B4VCcXKYoK%2BMwD7dfg8sDeGmz2grWxwknoDGsUKPfo%2FhrLf5vhmQ4%2FpM5GhfuHJ0jhzNLcO1qZqawQvXe7YwKSlUiRM5oFPmamUNEswyxjulk6ZgyA0gaspuRF58NphobVG0iIy1LbQJFDayj8y3Lh4smxnv4WPXUBzEPRBZmCFtf5QyULTzlpuzgQpRBRJmnz4IgWeRwZaxDoNnez9BSxetcY%2FZWTea8wpiaUnSQx3FFC5EeP7nJfh3uyjQQSJ5jqOPO4TqM0%2Fd4djkCHUEw%2FVNVoiFo7KIO5ZdG9LtYcPtMObxn8QGOqUBMIL48h%2Bmx1nLhqJX%2BKdqg%2FLTpw8hrfim0USSp3jatPcBI2LUQe1sw%2FIXutwATuPmGSlU6r1qk%2FypU%2FNm6xZdEUv6zFi2Igh064ZAISgusJuQok3%2B0TFac6exJtHiXyfvn0yrUuMAaPuj7%2F7wWmfmPvB%2BaYisZ1%2BF6yFuL8yyuRZSQ56dgj2iLpjyywEaoaGZWHdSKDIQ8DhxJt7ud2x125FVAyyJ&X-Amz-Signature=7955c347018b5b6f6d0f783d65a17bbe5038a93d33ed678b6cb95380692a7526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4DDT7U%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD3b2Zoe3NIJ8WK3DTAH89j%2BWSBxwMlbcGm6lHBPRCQTwIgcwgN3p4N9%2FuR%2FrJ9Oowft35ahUT7Ndaj%2BLJ%2BIYyNapsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVpn3QNZvi24XyQ3ircAz0Wm%2BvuT109UVj36MdkB4Md6q0CtvYisj6rnZdednBFxwNyEzDlMIDbt%2BWMT36uxCZuXWSh75otDwzDj1Ip0nTr6Kx%2FU9AWvLGJS3PY204dkrXTdRxlpovedvnqZtJQtCKgEZsOYgpxCiwJlwML4KzX4niEhs99PM2vGYTTc7kTCFD3co21gvtYcy4A5qqQc0LgPBaFK8eTU2gkYLT1kcOwCFE2BGLAyBnkYL2XbDB1VkKe0JqIOkth2rOsJmbAOAp2cDpMQNVkorLyWVdM4pjeDh9TMlCxo6HB7FpzzzF25DCLnreQCNDrhANOohVyO4pBxjBT20s5Pocb%2B4VCcXKYoK%2BMwD7dfg8sDeGmz2grWxwknoDGsUKPfo%2FhrLf5vhmQ4%2FpM5GhfuHJ0jhzNLcO1qZqawQvXe7YwKSlUiRM5oFPmamUNEswyxjulk6ZgyA0gaspuRF58NphobVG0iIy1LbQJFDayj8y3Lh4smxnv4WPXUBzEPRBZmCFtf5QyULTzlpuzgQpRBRJmnz4IgWeRwZaxDoNnez9BSxetcY%2FZWTea8wpiaUnSQx3FFC5EeP7nJfh3uyjQQSJ5jqOPO4TqM0%2Fd4djkCHUEw%2FVNVoiFo7KIO5ZdG9LtYcPtMObxn8QGOqUBMIL48h%2Bmx1nLhqJX%2BKdqg%2FLTpw8hrfim0USSp3jatPcBI2LUQe1sw%2FIXutwATuPmGSlU6r1qk%2FypU%2FNm6xZdEUv6zFi2Igh064ZAISgusJuQok3%2B0TFac6exJtHiXyfvn0yrUuMAaPuj7%2F7wWmfmPvB%2BaYisZ1%2BF6yFuL8yyuRZSQ56dgj2iLpjyywEaoaGZWHdSKDIQ8DhxJt7ud2x125FVAyyJ&X-Amz-Signature=411207d328d8905bccdc7225e9278d755f0c85ba5bd76f7f70affb2e806c9017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4DDT7U%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD3b2Zoe3NIJ8WK3DTAH89j%2BWSBxwMlbcGm6lHBPRCQTwIgcwgN3p4N9%2FuR%2FrJ9Oowft35ahUT7Ndaj%2BLJ%2BIYyNapsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVpn3QNZvi24XyQ3ircAz0Wm%2BvuT109UVj36MdkB4Md6q0CtvYisj6rnZdednBFxwNyEzDlMIDbt%2BWMT36uxCZuXWSh75otDwzDj1Ip0nTr6Kx%2FU9AWvLGJS3PY204dkrXTdRxlpovedvnqZtJQtCKgEZsOYgpxCiwJlwML4KzX4niEhs99PM2vGYTTc7kTCFD3co21gvtYcy4A5qqQc0LgPBaFK8eTU2gkYLT1kcOwCFE2BGLAyBnkYL2XbDB1VkKe0JqIOkth2rOsJmbAOAp2cDpMQNVkorLyWVdM4pjeDh9TMlCxo6HB7FpzzzF25DCLnreQCNDrhANOohVyO4pBxjBT20s5Pocb%2B4VCcXKYoK%2BMwD7dfg8sDeGmz2grWxwknoDGsUKPfo%2FhrLf5vhmQ4%2FpM5GhfuHJ0jhzNLcO1qZqawQvXe7YwKSlUiRM5oFPmamUNEswyxjulk6ZgyA0gaspuRF58NphobVG0iIy1LbQJFDayj8y3Lh4smxnv4WPXUBzEPRBZmCFtf5QyULTzlpuzgQpRBRJmnz4IgWeRwZaxDoNnez9BSxetcY%2FZWTea8wpiaUnSQx3FFC5EeP7nJfh3uyjQQSJ5jqOPO4TqM0%2Fd4djkCHUEw%2FVNVoiFo7KIO5ZdG9LtYcPtMObxn8QGOqUBMIL48h%2Bmx1nLhqJX%2BKdqg%2FLTpw8hrfim0USSp3jatPcBI2LUQe1sw%2FIXutwATuPmGSlU6r1qk%2FypU%2FNm6xZdEUv6zFi2Igh064ZAISgusJuQok3%2B0TFac6exJtHiXyfvn0yrUuMAaPuj7%2F7wWmfmPvB%2BaYisZ1%2BF6yFuL8yyuRZSQ56dgj2iLpjyywEaoaGZWHdSKDIQ8DhxJt7ud2x125FVAyyJ&X-Amz-Signature=52222c2e9f5a575db695bb2bc8bf995f054261700a9de622bcbc04b0ab2d72de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4DDT7U%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD3b2Zoe3NIJ8WK3DTAH89j%2BWSBxwMlbcGm6lHBPRCQTwIgcwgN3p4N9%2FuR%2FrJ9Oowft35ahUT7Ndaj%2BLJ%2BIYyNapsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVpn3QNZvi24XyQ3ircAz0Wm%2BvuT109UVj36MdkB4Md6q0CtvYisj6rnZdednBFxwNyEzDlMIDbt%2BWMT36uxCZuXWSh75otDwzDj1Ip0nTr6Kx%2FU9AWvLGJS3PY204dkrXTdRxlpovedvnqZtJQtCKgEZsOYgpxCiwJlwML4KzX4niEhs99PM2vGYTTc7kTCFD3co21gvtYcy4A5qqQc0LgPBaFK8eTU2gkYLT1kcOwCFE2BGLAyBnkYL2XbDB1VkKe0JqIOkth2rOsJmbAOAp2cDpMQNVkorLyWVdM4pjeDh9TMlCxo6HB7FpzzzF25DCLnreQCNDrhANOohVyO4pBxjBT20s5Pocb%2B4VCcXKYoK%2BMwD7dfg8sDeGmz2grWxwknoDGsUKPfo%2FhrLf5vhmQ4%2FpM5GhfuHJ0jhzNLcO1qZqawQvXe7YwKSlUiRM5oFPmamUNEswyxjulk6ZgyA0gaspuRF58NphobVG0iIy1LbQJFDayj8y3Lh4smxnv4WPXUBzEPRBZmCFtf5QyULTzlpuzgQpRBRJmnz4IgWeRwZaxDoNnez9BSxetcY%2FZWTea8wpiaUnSQx3FFC5EeP7nJfh3uyjQQSJ5jqOPO4TqM0%2Fd4djkCHUEw%2FVNVoiFo7KIO5ZdG9LtYcPtMObxn8QGOqUBMIL48h%2Bmx1nLhqJX%2BKdqg%2FLTpw8hrfim0USSp3jatPcBI2LUQe1sw%2FIXutwATuPmGSlU6r1qk%2FypU%2FNm6xZdEUv6zFi2Igh064ZAISgusJuQok3%2B0TFac6exJtHiXyfvn0yrUuMAaPuj7%2F7wWmfmPvB%2BaYisZ1%2BF6yFuL8yyuRZSQ56dgj2iLpjyywEaoaGZWHdSKDIQ8DhxJt7ud2x125FVAyyJ&X-Amz-Signature=13ea676ec408f5995ff7b28a71db2ca83a22168a49ad7c9399d867b4356e78db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4DDT7U%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD3b2Zoe3NIJ8WK3DTAH89j%2BWSBxwMlbcGm6lHBPRCQTwIgcwgN3p4N9%2FuR%2FrJ9Oowft35ahUT7Ndaj%2BLJ%2BIYyNapsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVpn3QNZvi24XyQ3ircAz0Wm%2BvuT109UVj36MdkB4Md6q0CtvYisj6rnZdednBFxwNyEzDlMIDbt%2BWMT36uxCZuXWSh75otDwzDj1Ip0nTr6Kx%2FU9AWvLGJS3PY204dkrXTdRxlpovedvnqZtJQtCKgEZsOYgpxCiwJlwML4KzX4niEhs99PM2vGYTTc7kTCFD3co21gvtYcy4A5qqQc0LgPBaFK8eTU2gkYLT1kcOwCFE2BGLAyBnkYL2XbDB1VkKe0JqIOkth2rOsJmbAOAp2cDpMQNVkorLyWVdM4pjeDh9TMlCxo6HB7FpzzzF25DCLnreQCNDrhANOohVyO4pBxjBT20s5Pocb%2B4VCcXKYoK%2BMwD7dfg8sDeGmz2grWxwknoDGsUKPfo%2FhrLf5vhmQ4%2FpM5GhfuHJ0jhzNLcO1qZqawQvXe7YwKSlUiRM5oFPmamUNEswyxjulk6ZgyA0gaspuRF58NphobVG0iIy1LbQJFDayj8y3Lh4smxnv4WPXUBzEPRBZmCFtf5QyULTzlpuzgQpRBRJmnz4IgWeRwZaxDoNnez9BSxetcY%2FZWTea8wpiaUnSQx3FFC5EeP7nJfh3uyjQQSJ5jqOPO4TqM0%2Fd4djkCHUEw%2FVNVoiFo7KIO5ZdG9LtYcPtMObxn8QGOqUBMIL48h%2Bmx1nLhqJX%2BKdqg%2FLTpw8hrfim0USSp3jatPcBI2LUQe1sw%2FIXutwATuPmGSlU6r1qk%2FypU%2FNm6xZdEUv6zFi2Igh064ZAISgusJuQok3%2B0TFac6exJtHiXyfvn0yrUuMAaPuj7%2F7wWmfmPvB%2BaYisZ1%2BF6yFuL8yyuRZSQ56dgj2iLpjyywEaoaGZWHdSKDIQ8DhxJt7ud2x125FVAyyJ&X-Amz-Signature=633cf2a350118267796e47d59808bdbaf2213048e2786cc87040992d2cbf5422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4DDT7U%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD3b2Zoe3NIJ8WK3DTAH89j%2BWSBxwMlbcGm6lHBPRCQTwIgcwgN3p4N9%2FuR%2FrJ9Oowft35ahUT7Ndaj%2BLJ%2BIYyNapsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVpn3QNZvi24XyQ3ircAz0Wm%2BvuT109UVj36MdkB4Md6q0CtvYisj6rnZdednBFxwNyEzDlMIDbt%2BWMT36uxCZuXWSh75otDwzDj1Ip0nTr6Kx%2FU9AWvLGJS3PY204dkrXTdRxlpovedvnqZtJQtCKgEZsOYgpxCiwJlwML4KzX4niEhs99PM2vGYTTc7kTCFD3co21gvtYcy4A5qqQc0LgPBaFK8eTU2gkYLT1kcOwCFE2BGLAyBnkYL2XbDB1VkKe0JqIOkth2rOsJmbAOAp2cDpMQNVkorLyWVdM4pjeDh9TMlCxo6HB7FpzzzF25DCLnreQCNDrhANOohVyO4pBxjBT20s5Pocb%2B4VCcXKYoK%2BMwD7dfg8sDeGmz2grWxwknoDGsUKPfo%2FhrLf5vhmQ4%2FpM5GhfuHJ0jhzNLcO1qZqawQvXe7YwKSlUiRM5oFPmamUNEswyxjulk6ZgyA0gaspuRF58NphobVG0iIy1LbQJFDayj8y3Lh4smxnv4WPXUBzEPRBZmCFtf5QyULTzlpuzgQpRBRJmnz4IgWeRwZaxDoNnez9BSxetcY%2FZWTea8wpiaUnSQx3FFC5EeP7nJfh3uyjQQSJ5jqOPO4TqM0%2Fd4djkCHUEw%2FVNVoiFo7KIO5ZdG9LtYcPtMObxn8QGOqUBMIL48h%2Bmx1nLhqJX%2BKdqg%2FLTpw8hrfim0USSp3jatPcBI2LUQe1sw%2FIXutwATuPmGSlU6r1qk%2FypU%2FNm6xZdEUv6zFi2Igh064ZAISgusJuQok3%2B0TFac6exJtHiXyfvn0yrUuMAaPuj7%2F7wWmfmPvB%2BaYisZ1%2BF6yFuL8yyuRZSQ56dgj2iLpjyywEaoaGZWHdSKDIQ8DhxJt7ud2x125FVAyyJ&X-Amz-Signature=b1ee5f1097ac1eed68ae124847e1db2de57347665ceff6b27f021e2ed35d0d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4DDT7U%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQD3b2Zoe3NIJ8WK3DTAH89j%2BWSBxwMlbcGm6lHBPRCQTwIgcwgN3p4N9%2FuR%2FrJ9Oowft35ahUT7Ndaj%2BLJ%2BIYyNapsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVpn3QNZvi24XyQ3ircAz0Wm%2BvuT109UVj36MdkB4Md6q0CtvYisj6rnZdednBFxwNyEzDlMIDbt%2BWMT36uxCZuXWSh75otDwzDj1Ip0nTr6Kx%2FU9AWvLGJS3PY204dkrXTdRxlpovedvnqZtJQtCKgEZsOYgpxCiwJlwML4KzX4niEhs99PM2vGYTTc7kTCFD3co21gvtYcy4A5qqQc0LgPBaFK8eTU2gkYLT1kcOwCFE2BGLAyBnkYL2XbDB1VkKe0JqIOkth2rOsJmbAOAp2cDpMQNVkorLyWVdM4pjeDh9TMlCxo6HB7FpzzzF25DCLnreQCNDrhANOohVyO4pBxjBT20s5Pocb%2B4VCcXKYoK%2BMwD7dfg8sDeGmz2grWxwknoDGsUKPfo%2FhrLf5vhmQ4%2FpM5GhfuHJ0jhzNLcO1qZqawQvXe7YwKSlUiRM5oFPmamUNEswyxjulk6ZgyA0gaspuRF58NphobVG0iIy1LbQJFDayj8y3Lh4smxnv4WPXUBzEPRBZmCFtf5QyULTzlpuzgQpRBRJmnz4IgWeRwZaxDoNnez9BSxetcY%2FZWTea8wpiaUnSQx3FFC5EeP7nJfh3uyjQQSJ5jqOPO4TqM0%2Fd4djkCHUEw%2FVNVoiFo7KIO5ZdG9LtYcPtMObxn8QGOqUBMIL48h%2Bmx1nLhqJX%2BKdqg%2FLTpw8hrfim0USSp3jatPcBI2LUQe1sw%2FIXutwATuPmGSlU6r1qk%2FypU%2FNm6xZdEUv6zFi2Igh064ZAISgusJuQok3%2B0TFac6exJtHiXyfvn0yrUuMAaPuj7%2F7wWmfmPvB%2BaYisZ1%2BF6yFuL8yyuRZSQ56dgj2iLpjyywEaoaGZWHdSKDIQ8DhxJt7ud2x125FVAyyJ&X-Amz-Signature=9819cbb648d30f68b80135d5be1ddc01ed1d31469f8e7ef686704f60d49b5130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
