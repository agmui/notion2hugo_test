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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6BUYSL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG1HMGp6YhUZONELRazlZTv1GZFtwIK8z0Yy7EfyQg5SAiAX6JZdkUHLKKrzqKOl%2B6TUaGjSvYxdZVc55TXqKuqQHSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt387Ok3ZXMu7jGRBKtwDogPcZ9EsSq4oPAphP4UNOaUKO%2F61o1%2FEkTKaaQkFxhSOiy%2B9Vf09baAtDD%2F6Yp4BjrmBC54Vf9MFWQIlwd5W1Od9bcoGT3BohOSVSNUJGyB5nMPzXTFDWAUqahKoVPfGID2WsUWbsJdW7I0GZpNubTnDCNOI%2B%2F08GbpFLTy9bAzEZMineBc2VLmZvKcGHXEkcIcj7M5Ny%2FfLAbO1%2FR7axod8ItdlowIjW6gfy6%2FQ9d91rmdQjwyeFfLBnbSyMAIToT%2BKLq6Iv%2BC0lRiRbU%2B3vGnxuSjENhoaPZfRHD5D6Aow%2FQgG%2Fd44tGCMslNQCTJJXKM0vKntJ7hLI3LHY4nU5I0HfLOWTDx06TRKPn%2BeDPBw%2BX8qcyyC1o%2BF5wKCV2ZDuyM9OCUrkK7jHlVGUW8JK1g3aa94QGHunYGZ20t0kDYo0MdA74kdg0aGHJ2FHpozwwE63sq0uAZ2Pl6iO1RqHpsscWlSfUCX1czWw1C26qA76KXTnYo%2FwqLpYbMsQ74LmJjAy8KQw2ddqfP8zkyU6VOozhxJIS1DdLlBwzDOU%2Bhzmvh5zMm5tZxVX2Z2fw7DR3Zb3yl4wnsGrj%2BwtVunzbW%2BmH5KbhP7oZQXH2MT1v5flIGefVLHOK2zm5gwkpCcxAY6pgFpj3pwCJm8FSzd1LU8zBDB9fmbikavHf8xwzaiWZ2syP1bp1%2BdJRC6x1LVvJbgL0HoQ2aEFdn4E%2FoYln2NjlDrN7izMcBC7OiYAWw47pxpuy6eAlomLdTRJ3hsr4VrW8lOsq6R8yjUzeVHDenZhnDPtFx75FjX%2Fust2piz3zNBBv9Grw%2BTerfqXqEsoCFtMdqrSg0wea0HYSVQdQL1W8hakH0pn3K4&X-Amz-Signature=424d411bea78334f9a82b375a5710f6a9af249a3c3ebe422bdf569738f689848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6BUYSL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG1HMGp6YhUZONELRazlZTv1GZFtwIK8z0Yy7EfyQg5SAiAX6JZdkUHLKKrzqKOl%2B6TUaGjSvYxdZVc55TXqKuqQHSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt387Ok3ZXMu7jGRBKtwDogPcZ9EsSq4oPAphP4UNOaUKO%2F61o1%2FEkTKaaQkFxhSOiy%2B9Vf09baAtDD%2F6Yp4BjrmBC54Vf9MFWQIlwd5W1Od9bcoGT3BohOSVSNUJGyB5nMPzXTFDWAUqahKoVPfGID2WsUWbsJdW7I0GZpNubTnDCNOI%2B%2F08GbpFLTy9bAzEZMineBc2VLmZvKcGHXEkcIcj7M5Ny%2FfLAbO1%2FR7axod8ItdlowIjW6gfy6%2FQ9d91rmdQjwyeFfLBnbSyMAIToT%2BKLq6Iv%2BC0lRiRbU%2B3vGnxuSjENhoaPZfRHD5D6Aow%2FQgG%2Fd44tGCMslNQCTJJXKM0vKntJ7hLI3LHY4nU5I0HfLOWTDx06TRKPn%2BeDPBw%2BX8qcyyC1o%2BF5wKCV2ZDuyM9OCUrkK7jHlVGUW8JK1g3aa94QGHunYGZ20t0kDYo0MdA74kdg0aGHJ2FHpozwwE63sq0uAZ2Pl6iO1RqHpsscWlSfUCX1czWw1C26qA76KXTnYo%2FwqLpYbMsQ74LmJjAy8KQw2ddqfP8zkyU6VOozhxJIS1DdLlBwzDOU%2Bhzmvh5zMm5tZxVX2Z2fw7DR3Zb3yl4wnsGrj%2BwtVunzbW%2BmH5KbhP7oZQXH2MT1v5flIGefVLHOK2zm5gwkpCcxAY6pgFpj3pwCJm8FSzd1LU8zBDB9fmbikavHf8xwzaiWZ2syP1bp1%2BdJRC6x1LVvJbgL0HoQ2aEFdn4E%2FoYln2NjlDrN7izMcBC7OiYAWw47pxpuy6eAlomLdTRJ3hsr4VrW8lOsq6R8yjUzeVHDenZhnDPtFx75FjX%2Fust2piz3zNBBv9Grw%2BTerfqXqEsoCFtMdqrSg0wea0HYSVQdQL1W8hakH0pn3K4&X-Amz-Signature=9c9843f88e81ece9967d7f3c42947918f46757db7e96cb379f5bdd30393a7a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6BUYSL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG1HMGp6YhUZONELRazlZTv1GZFtwIK8z0Yy7EfyQg5SAiAX6JZdkUHLKKrzqKOl%2B6TUaGjSvYxdZVc55TXqKuqQHSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt387Ok3ZXMu7jGRBKtwDogPcZ9EsSq4oPAphP4UNOaUKO%2F61o1%2FEkTKaaQkFxhSOiy%2B9Vf09baAtDD%2F6Yp4BjrmBC54Vf9MFWQIlwd5W1Od9bcoGT3BohOSVSNUJGyB5nMPzXTFDWAUqahKoVPfGID2WsUWbsJdW7I0GZpNubTnDCNOI%2B%2F08GbpFLTy9bAzEZMineBc2VLmZvKcGHXEkcIcj7M5Ny%2FfLAbO1%2FR7axod8ItdlowIjW6gfy6%2FQ9d91rmdQjwyeFfLBnbSyMAIToT%2BKLq6Iv%2BC0lRiRbU%2B3vGnxuSjENhoaPZfRHD5D6Aow%2FQgG%2Fd44tGCMslNQCTJJXKM0vKntJ7hLI3LHY4nU5I0HfLOWTDx06TRKPn%2BeDPBw%2BX8qcyyC1o%2BF5wKCV2ZDuyM9OCUrkK7jHlVGUW8JK1g3aa94QGHunYGZ20t0kDYo0MdA74kdg0aGHJ2FHpozwwE63sq0uAZ2Pl6iO1RqHpsscWlSfUCX1czWw1C26qA76KXTnYo%2FwqLpYbMsQ74LmJjAy8KQw2ddqfP8zkyU6VOozhxJIS1DdLlBwzDOU%2Bhzmvh5zMm5tZxVX2Z2fw7DR3Zb3yl4wnsGrj%2BwtVunzbW%2BmH5KbhP7oZQXH2MT1v5flIGefVLHOK2zm5gwkpCcxAY6pgFpj3pwCJm8FSzd1LU8zBDB9fmbikavHf8xwzaiWZ2syP1bp1%2BdJRC6x1LVvJbgL0HoQ2aEFdn4E%2FoYln2NjlDrN7izMcBC7OiYAWw47pxpuy6eAlomLdTRJ3hsr4VrW8lOsq6R8yjUzeVHDenZhnDPtFx75FjX%2Fust2piz3zNBBv9Grw%2BTerfqXqEsoCFtMdqrSg0wea0HYSVQdQL1W8hakH0pn3K4&X-Amz-Signature=3f6107ed22d0ee1321ab136da0f31a1f60887056438c7f9b844aaa6b47abc9d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6BUYSL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG1HMGp6YhUZONELRazlZTv1GZFtwIK8z0Yy7EfyQg5SAiAX6JZdkUHLKKrzqKOl%2B6TUaGjSvYxdZVc55TXqKuqQHSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt387Ok3ZXMu7jGRBKtwDogPcZ9EsSq4oPAphP4UNOaUKO%2F61o1%2FEkTKaaQkFxhSOiy%2B9Vf09baAtDD%2F6Yp4BjrmBC54Vf9MFWQIlwd5W1Od9bcoGT3BohOSVSNUJGyB5nMPzXTFDWAUqahKoVPfGID2WsUWbsJdW7I0GZpNubTnDCNOI%2B%2F08GbpFLTy9bAzEZMineBc2VLmZvKcGHXEkcIcj7M5Ny%2FfLAbO1%2FR7axod8ItdlowIjW6gfy6%2FQ9d91rmdQjwyeFfLBnbSyMAIToT%2BKLq6Iv%2BC0lRiRbU%2B3vGnxuSjENhoaPZfRHD5D6Aow%2FQgG%2Fd44tGCMslNQCTJJXKM0vKntJ7hLI3LHY4nU5I0HfLOWTDx06TRKPn%2BeDPBw%2BX8qcyyC1o%2BF5wKCV2ZDuyM9OCUrkK7jHlVGUW8JK1g3aa94QGHunYGZ20t0kDYo0MdA74kdg0aGHJ2FHpozwwE63sq0uAZ2Pl6iO1RqHpsscWlSfUCX1czWw1C26qA76KXTnYo%2FwqLpYbMsQ74LmJjAy8KQw2ddqfP8zkyU6VOozhxJIS1DdLlBwzDOU%2Bhzmvh5zMm5tZxVX2Z2fw7DR3Zb3yl4wnsGrj%2BwtVunzbW%2BmH5KbhP7oZQXH2MT1v5flIGefVLHOK2zm5gwkpCcxAY6pgFpj3pwCJm8FSzd1LU8zBDB9fmbikavHf8xwzaiWZ2syP1bp1%2BdJRC6x1LVvJbgL0HoQ2aEFdn4E%2FoYln2NjlDrN7izMcBC7OiYAWw47pxpuy6eAlomLdTRJ3hsr4VrW8lOsq6R8yjUzeVHDenZhnDPtFx75FjX%2Fust2piz3zNBBv9Grw%2BTerfqXqEsoCFtMdqrSg0wea0HYSVQdQL1W8hakH0pn3K4&X-Amz-Signature=46f06c676be0753ffd9765a6d640dc558be904576be7a2289a98239120c64666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6BUYSL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG1HMGp6YhUZONELRazlZTv1GZFtwIK8z0Yy7EfyQg5SAiAX6JZdkUHLKKrzqKOl%2B6TUaGjSvYxdZVc55TXqKuqQHSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt387Ok3ZXMu7jGRBKtwDogPcZ9EsSq4oPAphP4UNOaUKO%2F61o1%2FEkTKaaQkFxhSOiy%2B9Vf09baAtDD%2F6Yp4BjrmBC54Vf9MFWQIlwd5W1Od9bcoGT3BohOSVSNUJGyB5nMPzXTFDWAUqahKoVPfGID2WsUWbsJdW7I0GZpNubTnDCNOI%2B%2F08GbpFLTy9bAzEZMineBc2VLmZvKcGHXEkcIcj7M5Ny%2FfLAbO1%2FR7axod8ItdlowIjW6gfy6%2FQ9d91rmdQjwyeFfLBnbSyMAIToT%2BKLq6Iv%2BC0lRiRbU%2B3vGnxuSjENhoaPZfRHD5D6Aow%2FQgG%2Fd44tGCMslNQCTJJXKM0vKntJ7hLI3LHY4nU5I0HfLOWTDx06TRKPn%2BeDPBw%2BX8qcyyC1o%2BF5wKCV2ZDuyM9OCUrkK7jHlVGUW8JK1g3aa94QGHunYGZ20t0kDYo0MdA74kdg0aGHJ2FHpozwwE63sq0uAZ2Pl6iO1RqHpsscWlSfUCX1czWw1C26qA76KXTnYo%2FwqLpYbMsQ74LmJjAy8KQw2ddqfP8zkyU6VOozhxJIS1DdLlBwzDOU%2Bhzmvh5zMm5tZxVX2Z2fw7DR3Zb3yl4wnsGrj%2BwtVunzbW%2BmH5KbhP7oZQXH2MT1v5flIGefVLHOK2zm5gwkpCcxAY6pgFpj3pwCJm8FSzd1LU8zBDB9fmbikavHf8xwzaiWZ2syP1bp1%2BdJRC6x1LVvJbgL0HoQ2aEFdn4E%2FoYln2NjlDrN7izMcBC7OiYAWw47pxpuy6eAlomLdTRJ3hsr4VrW8lOsq6R8yjUzeVHDenZhnDPtFx75FjX%2Fust2piz3zNBBv9Grw%2BTerfqXqEsoCFtMdqrSg0wea0HYSVQdQL1W8hakH0pn3K4&X-Amz-Signature=9244aeeaedbcd3616aa879df247a941a4d8c1a3d4ecc0b148e06b1c7e192392e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6BUYSL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG1HMGp6YhUZONELRazlZTv1GZFtwIK8z0Yy7EfyQg5SAiAX6JZdkUHLKKrzqKOl%2B6TUaGjSvYxdZVc55TXqKuqQHSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt387Ok3ZXMu7jGRBKtwDogPcZ9EsSq4oPAphP4UNOaUKO%2F61o1%2FEkTKaaQkFxhSOiy%2B9Vf09baAtDD%2F6Yp4BjrmBC54Vf9MFWQIlwd5W1Od9bcoGT3BohOSVSNUJGyB5nMPzXTFDWAUqahKoVPfGID2WsUWbsJdW7I0GZpNubTnDCNOI%2B%2F08GbpFLTy9bAzEZMineBc2VLmZvKcGHXEkcIcj7M5Ny%2FfLAbO1%2FR7axod8ItdlowIjW6gfy6%2FQ9d91rmdQjwyeFfLBnbSyMAIToT%2BKLq6Iv%2BC0lRiRbU%2B3vGnxuSjENhoaPZfRHD5D6Aow%2FQgG%2Fd44tGCMslNQCTJJXKM0vKntJ7hLI3LHY4nU5I0HfLOWTDx06TRKPn%2BeDPBw%2BX8qcyyC1o%2BF5wKCV2ZDuyM9OCUrkK7jHlVGUW8JK1g3aa94QGHunYGZ20t0kDYo0MdA74kdg0aGHJ2FHpozwwE63sq0uAZ2Pl6iO1RqHpsscWlSfUCX1czWw1C26qA76KXTnYo%2FwqLpYbMsQ74LmJjAy8KQw2ddqfP8zkyU6VOozhxJIS1DdLlBwzDOU%2Bhzmvh5zMm5tZxVX2Z2fw7DR3Zb3yl4wnsGrj%2BwtVunzbW%2BmH5KbhP7oZQXH2MT1v5flIGefVLHOK2zm5gwkpCcxAY6pgFpj3pwCJm8FSzd1LU8zBDB9fmbikavHf8xwzaiWZ2syP1bp1%2BdJRC6x1LVvJbgL0HoQ2aEFdn4E%2FoYln2NjlDrN7izMcBC7OiYAWw47pxpuy6eAlomLdTRJ3hsr4VrW8lOsq6R8yjUzeVHDenZhnDPtFx75FjX%2Fust2piz3zNBBv9Grw%2BTerfqXqEsoCFtMdqrSg0wea0HYSVQdQL1W8hakH0pn3K4&X-Amz-Signature=486b804c3d3977914ae3e320ffaffc8220d6d331563ce64f1e6bca0d555c04e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6BUYSL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG1HMGp6YhUZONELRazlZTv1GZFtwIK8z0Yy7EfyQg5SAiAX6JZdkUHLKKrzqKOl%2B6TUaGjSvYxdZVc55TXqKuqQHSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt387Ok3ZXMu7jGRBKtwDogPcZ9EsSq4oPAphP4UNOaUKO%2F61o1%2FEkTKaaQkFxhSOiy%2B9Vf09baAtDD%2F6Yp4BjrmBC54Vf9MFWQIlwd5W1Od9bcoGT3BohOSVSNUJGyB5nMPzXTFDWAUqahKoVPfGID2WsUWbsJdW7I0GZpNubTnDCNOI%2B%2F08GbpFLTy9bAzEZMineBc2VLmZvKcGHXEkcIcj7M5Ny%2FfLAbO1%2FR7axod8ItdlowIjW6gfy6%2FQ9d91rmdQjwyeFfLBnbSyMAIToT%2BKLq6Iv%2BC0lRiRbU%2B3vGnxuSjENhoaPZfRHD5D6Aow%2FQgG%2Fd44tGCMslNQCTJJXKM0vKntJ7hLI3LHY4nU5I0HfLOWTDx06TRKPn%2BeDPBw%2BX8qcyyC1o%2BF5wKCV2ZDuyM9OCUrkK7jHlVGUW8JK1g3aa94QGHunYGZ20t0kDYo0MdA74kdg0aGHJ2FHpozwwE63sq0uAZ2Pl6iO1RqHpsscWlSfUCX1czWw1C26qA76KXTnYo%2FwqLpYbMsQ74LmJjAy8KQw2ddqfP8zkyU6VOozhxJIS1DdLlBwzDOU%2Bhzmvh5zMm5tZxVX2Z2fw7DR3Zb3yl4wnsGrj%2BwtVunzbW%2BmH5KbhP7oZQXH2MT1v5flIGefVLHOK2zm5gwkpCcxAY6pgFpj3pwCJm8FSzd1LU8zBDB9fmbikavHf8xwzaiWZ2syP1bp1%2BdJRC6x1LVvJbgL0HoQ2aEFdn4E%2FoYln2NjlDrN7izMcBC7OiYAWw47pxpuy6eAlomLdTRJ3hsr4VrW8lOsq6R8yjUzeVHDenZhnDPtFx75FjX%2Fust2piz3zNBBv9Grw%2BTerfqXqEsoCFtMdqrSg0wea0HYSVQdQL1W8hakH0pn3K4&X-Amz-Signature=00185b1e776ef7469e8988719d3685dd16ddd3a3b7249f0a46bce7199012adf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6BUYSL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG1HMGp6YhUZONELRazlZTv1GZFtwIK8z0Yy7EfyQg5SAiAX6JZdkUHLKKrzqKOl%2B6TUaGjSvYxdZVc55TXqKuqQHSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt387Ok3ZXMu7jGRBKtwDogPcZ9EsSq4oPAphP4UNOaUKO%2F61o1%2FEkTKaaQkFxhSOiy%2B9Vf09baAtDD%2F6Yp4BjrmBC54Vf9MFWQIlwd5W1Od9bcoGT3BohOSVSNUJGyB5nMPzXTFDWAUqahKoVPfGID2WsUWbsJdW7I0GZpNubTnDCNOI%2B%2F08GbpFLTy9bAzEZMineBc2VLmZvKcGHXEkcIcj7M5Ny%2FfLAbO1%2FR7axod8ItdlowIjW6gfy6%2FQ9d91rmdQjwyeFfLBnbSyMAIToT%2BKLq6Iv%2BC0lRiRbU%2B3vGnxuSjENhoaPZfRHD5D6Aow%2FQgG%2Fd44tGCMslNQCTJJXKM0vKntJ7hLI3LHY4nU5I0HfLOWTDx06TRKPn%2BeDPBw%2BX8qcyyC1o%2BF5wKCV2ZDuyM9OCUrkK7jHlVGUW8JK1g3aa94QGHunYGZ20t0kDYo0MdA74kdg0aGHJ2FHpozwwE63sq0uAZ2Pl6iO1RqHpsscWlSfUCX1czWw1C26qA76KXTnYo%2FwqLpYbMsQ74LmJjAy8KQw2ddqfP8zkyU6VOozhxJIS1DdLlBwzDOU%2Bhzmvh5zMm5tZxVX2Z2fw7DR3Zb3yl4wnsGrj%2BwtVunzbW%2BmH5KbhP7oZQXH2MT1v5flIGefVLHOK2zm5gwkpCcxAY6pgFpj3pwCJm8FSzd1LU8zBDB9fmbikavHf8xwzaiWZ2syP1bp1%2BdJRC6x1LVvJbgL0HoQ2aEFdn4E%2FoYln2NjlDrN7izMcBC7OiYAWw47pxpuy6eAlomLdTRJ3hsr4VrW8lOsq6R8yjUzeVHDenZhnDPtFx75FjX%2Fust2piz3zNBBv9Grw%2BTerfqXqEsoCFtMdqrSg0wea0HYSVQdQL1W8hakH0pn3K4&X-Amz-Signature=e000439020dc964bec94674e2a81098810bdbcf4937fd0b22347aa79b2aedf95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6BUYSL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG1HMGp6YhUZONELRazlZTv1GZFtwIK8z0Yy7EfyQg5SAiAX6JZdkUHLKKrzqKOl%2B6TUaGjSvYxdZVc55TXqKuqQHSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt387Ok3ZXMu7jGRBKtwDogPcZ9EsSq4oPAphP4UNOaUKO%2F61o1%2FEkTKaaQkFxhSOiy%2B9Vf09baAtDD%2F6Yp4BjrmBC54Vf9MFWQIlwd5W1Od9bcoGT3BohOSVSNUJGyB5nMPzXTFDWAUqahKoVPfGID2WsUWbsJdW7I0GZpNubTnDCNOI%2B%2F08GbpFLTy9bAzEZMineBc2VLmZvKcGHXEkcIcj7M5Ny%2FfLAbO1%2FR7axod8ItdlowIjW6gfy6%2FQ9d91rmdQjwyeFfLBnbSyMAIToT%2BKLq6Iv%2BC0lRiRbU%2B3vGnxuSjENhoaPZfRHD5D6Aow%2FQgG%2Fd44tGCMslNQCTJJXKM0vKntJ7hLI3LHY4nU5I0HfLOWTDx06TRKPn%2BeDPBw%2BX8qcyyC1o%2BF5wKCV2ZDuyM9OCUrkK7jHlVGUW8JK1g3aa94QGHunYGZ20t0kDYo0MdA74kdg0aGHJ2FHpozwwE63sq0uAZ2Pl6iO1RqHpsscWlSfUCX1czWw1C26qA76KXTnYo%2FwqLpYbMsQ74LmJjAy8KQw2ddqfP8zkyU6VOozhxJIS1DdLlBwzDOU%2Bhzmvh5zMm5tZxVX2Z2fw7DR3Zb3yl4wnsGrj%2BwtVunzbW%2BmH5KbhP7oZQXH2MT1v5flIGefVLHOK2zm5gwkpCcxAY6pgFpj3pwCJm8FSzd1LU8zBDB9fmbikavHf8xwzaiWZ2syP1bp1%2BdJRC6x1LVvJbgL0HoQ2aEFdn4E%2FoYln2NjlDrN7izMcBC7OiYAWw47pxpuy6eAlomLdTRJ3hsr4VrW8lOsq6R8yjUzeVHDenZhnDPtFx75FjX%2Fust2piz3zNBBv9Grw%2BTerfqXqEsoCFtMdqrSg0wea0HYSVQdQL1W8hakH0pn3K4&X-Amz-Signature=adb57ea133b45f74314230f9c626ca4c2f94ac1e17a588bbb99e60eaab3523f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVBTNSVD%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC1AA6ysEZ0NfKw03GJwBQRjG9orIJ92macw2Gf1K0n7wIhAKFH4zhvoCDh6iOzaz0695ZnwmXQeyaK%2Bx4oplqri%2FMmKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjA1ra4KVKCo9Q%2BtAq3AOUe9s7Xo73vM1iL%2FicjZQ%2Bl9FGlBr4daZ0lDOJ9YmeV5gOMHJpCPQUdP88vv7WcXN9orra0Ork9bC%2FlFkPXSKbBzoCUbFjGEbCcJPUIwiRaGkbFUs8ZJsrNcKF1aAFJNpevZ5Umv%2FNEOUthtrRbAc5kff82HSZNdlNp1sJpG6pIfATIik%2FHy4rEavDdvM4mWmmvpk8w%2FGOw3xToJzvuBYSRMxAaPd9auQmclgFahduGEWAF4sKPRbaPVURHLDCbYsQta3vWqWoqY%2BJiWcafbMgva50x7ECCXNlH4hw0Dszxtg5f3PDkT0bsKUyB1THPw4in%2FgqfU7vP%2B24DeG4G45ecOW0QJJmCHUsDnJo2zzVYo9IwW6t3AgssQ58qAP2SZ5tZ1RxemKlVpc6tUdZJO8yypAu4kEoGX%2FvcXG3LlM9GbJLV%2BH5s48LhZYNIcHaH%2Bi5f4qNJDxC6daPH%2Br%2Fe0m8Yf6UVXP9cJZPca1ma9yJ6r3Xg60MwFWfSs3HWRmQAG%2Frwz9sYQjh04OcSpFejgFnnak3ZSUghLZ6aLeXMkI7yRzpQ%2BOae8zNQ0HBhNU%2FOfNzZIhQYGpqRxE0EeA0gAgk7HYgDXGR7l6a3zrNIz%2BhhlKYp14SaxR3qW1n7jCXxpzEBjqkAehL3uvHWUoTUUOmdYxVk5sNrvYrWcLRGi6sU4P9wJoS99GqyCcwFvGZVeV%2FQfZnRARMd6%2Fgaz19BUBdpgrZ%2FtWaXPnXsxGWkCRM0rc%2Fkf8gjMDcS9rd7%2Fgc5ya0hzHRJhQo%2F0l8oDs55xjF4Gw2AExIK%2FITk33UxqXMDtbldjStj0LMo87mAjAjkCwnUJrc7vOp7hNGU58xOKRhe1tq%2Bt%2F601YV&X-Amz-Signature=453d0f556eadb17073ac6300aa99e96c8f731e558484d1078d005a8b00ec7e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV6BUYSL%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIG1HMGp6YhUZONELRazlZTv1GZFtwIK8z0Yy7EfyQg5SAiAX6JZdkUHLKKrzqKOl%2B6TUaGjSvYxdZVc55TXqKuqQHSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt387Ok3ZXMu7jGRBKtwDogPcZ9EsSq4oPAphP4UNOaUKO%2F61o1%2FEkTKaaQkFxhSOiy%2B9Vf09baAtDD%2F6Yp4BjrmBC54Vf9MFWQIlwd5W1Od9bcoGT3BohOSVSNUJGyB5nMPzXTFDWAUqahKoVPfGID2WsUWbsJdW7I0GZpNubTnDCNOI%2B%2F08GbpFLTy9bAzEZMineBc2VLmZvKcGHXEkcIcj7M5Ny%2FfLAbO1%2FR7axod8ItdlowIjW6gfy6%2FQ9d91rmdQjwyeFfLBnbSyMAIToT%2BKLq6Iv%2BC0lRiRbU%2B3vGnxuSjENhoaPZfRHD5D6Aow%2FQgG%2Fd44tGCMslNQCTJJXKM0vKntJ7hLI3LHY4nU5I0HfLOWTDx06TRKPn%2BeDPBw%2BX8qcyyC1o%2BF5wKCV2ZDuyM9OCUrkK7jHlVGUW8JK1g3aa94QGHunYGZ20t0kDYo0MdA74kdg0aGHJ2FHpozwwE63sq0uAZ2Pl6iO1RqHpsscWlSfUCX1czWw1C26qA76KXTnYo%2FwqLpYbMsQ74LmJjAy8KQw2ddqfP8zkyU6VOozhxJIS1DdLlBwzDOU%2Bhzmvh5zMm5tZxVX2Z2fw7DR3Zb3yl4wnsGrj%2BwtVunzbW%2BmH5KbhP7oZQXH2MT1v5flIGefVLHOK2zm5gwkpCcxAY6pgFpj3pwCJm8FSzd1LU8zBDB9fmbikavHf8xwzaiWZ2syP1bp1%2BdJRC6x1LVvJbgL0HoQ2aEFdn4E%2FoYln2NjlDrN7izMcBC7OiYAWw47pxpuy6eAlomLdTRJ3hsr4VrW8lOsq6R8yjUzeVHDenZhnDPtFx75FjX%2Fust2piz3zNBBv9Grw%2BTerfqXqEsoCFtMdqrSg0wea0HYSVQdQL1W8hakH0pn3K4&X-Amz-Signature=195b697813a381197ccc3dbe17a487d9f6cea7b48c1b1aa75c71acddb505296e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=91744bc8bf295a4b8e397dfcf6a85a2395d4f635818894d259b5816445f271a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=c93dd5aa922ccc3d2a0cb1392f8c88bb1c55746b1de204ecdf74f070dd8ab9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=8d4d5b441bb9335bbff6c2077291fdbf3005bb196ab277fdec234eaa77b17978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=9500b0b54686fc6fe9c5676e2d777f34ad868af1712a9121aa0d7ef933989b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=30004f797efd8857c11afa307b18317c6061ef38e2a7467f891c12e107e9149f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=adede64079c57a88b809f625b53c1a6aa39b5822aea7e46160ff277bb8e43121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BSQDTCH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDWNH6VM1vHFj8pCYwUyEM0kFl5PuVVetufmcvK%2FK1IqgIgYlhBosNWfLmzwh9AqjGk8Le0eoBKtTQM37HXqWDEIfEqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLiDdzGC69PxnGau%2FCrcA6O1Rjfnki2cbmCy9TxG1vNMTPx9Fe8VG854obAI7tY1YgPQRytfq5fdfVxGznkKipnNls0CywS54dpzmM%2B167oTWRHZzwk2BNADi5JOsbVKBaT7T4PQuSf%2BbsSTGuatojwYt57Ic19aaFw4I%2BLWqg9GrOtGVT22APgA3OwSyQrKHlGSsGazqQ7YVs2znUUcdW90uHLkstR6cPulkyhZwz9bvBuIsUou%2BxE2slTqZ4oUOPKn7Mi99GKa9sR4d0Hbcg15u9XhTpFcOiAlBf9la3Qy9P8ANhZ8bGCqW0FpHILHquvrI5EGqO8EFrhJtzW84cjsT1izZyT2NdWyw79whI%2FNxaOoa%2FFtoO4gxRf3hTEVPzhYIOxUqu8iePxNFmGpdIJnC7SLVuoDLkhDnzUtO0NyBUZrVIkIweDL%2BzUlYG15Kg9YLmoMJSiCTa4A%2FpDhlkU0CdoHs1cOHPJABO%2BVHr%2BeEM5oTEjvkdNtk%2FE5TVruyq4DnbGdBnMCpaaWhywf%2B37GtN9QldqOi3cVSZAQtt%2Fx%2B%2BScndFG8RxtZ72h8eD9uE2x9TAPf6hyQb2FZsobA24F8DozuX0vhxzN4Y7aN409RJ3YSjZ3Oq57QR72JNiDmGSyVFD8ho0jNlPaMLfGnMQGOqUBQUaiL1iJzBAIqWH3CAD2DWPBcNYaCSpkjKig6%2BykHP7wNS4J9LEAJIiNRDv%2F4BolAnQn4knR44EU3BOGv3urEAa13D5XA70MBmNRV14amUaTbxzrmkPwi3b%2BThFUJajYVbegqM7aI8lcSIXsVRJj7kDSy8hfjF%2FTHzRvA9daCJobjelXqSZbPSl1iAjmOr8m0dssKkzuUgI0h3CbwyTHTvFfA7Oi&X-Amz-Signature=87a18285c12aaffdea62cda1cd98e6dc60243f0bd0eb3318a2070ffe91307908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
