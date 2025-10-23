---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

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

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34GLVMF%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ooUAtzgNJvx87GpN1zZPnmVE7bMgRY9uc3ONcZqh6AiEAz3pS2Lbf8cXZk1dVKC6MB1Gow4mDlzdckf2qpgwpj7Yq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDL8PA4%2B2w4HNHt4%2BTSrcA8dkwzzQWJk9s%2BMxn2oDJ4M%2Fi1uKYpO1N4NxeTZs9e%2BOMccTXUSYJ1g5dibzb7w5t8MaSbij26S1%2BZyPHAch2MI1oI1%2BRr2HJvV00ree4zk9ssoYW9bd4VtRwv3FIzfLuTQmKJwYGsq025diHDTqtRfUdMI1VaAcTRvbKR4M8AxF9fc%2FOYLdNyjim1KM9L0hqt6OZ2QRYltsoDn2aix8zHF9I8JTsATzH5kCfig%2B3fRm5yvnZkK5YMTWuoPU9QupECZ34GCO0uTQMiVu%2FX2%2BuQB3C1woxY6%2F7DIwQNhpMzjw3kx9yyd8TMlfS2%2F%2BLPVXsA%2FLgOOqghoYGk6d0MUmW8A6uosP%2FGCKnnEmfZiZyah4Fx6c966Eh242r3o1UuHke6vO99sbnbmp6oOkRBnaDDxEiqiVmUGj1xdk77j8KugnoMK7fJfA%2FVPWoRBL6FPL%2FYmd0A8AKo9rYqjE%2FCHPZWE1sA665UG1%2FGf%2FZzSPoAamCH%2BJVs9%2Fi2Xfj0efgwgOOKGW2zvFPKNx4IhT%2F6s1bkw89lFPL6lMIuoxX%2BHL21qWJcyuYFFaZXG3Ei8XLxSLE24mHoEHDzkn2AKXYIkB962vnXHuEwSPrNUNfjplRNZ0gWo3Bn7ABMUIIPwWMMbw5ccGOqUBsqOneyp9hQ8xRSQlTQ1cTa72q0IfVPdqrJi%2FGlYFDJYMgACkLAprzNdgAPSPVrxPAF2eZ9SlMlTuyS%2FUHNFhF%2B9cDoL8Kb0X0xCyXqLt0OXQkpXc870dlKet%2BA3Tv1nmjqM1AR3Ze6mLrbuLFMvWiCkouHXdT0OhC1KLbmS1X51vCXJExr2H%2BjtUbac5ljJSFmc7abtgpwuORZQXTtU3yELt1zCX&X-Amz-Signature=2a30035320581ba729ac98700105e3442812778157dcbef5ee67fb01d58a9dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34GLVMF%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ooUAtzgNJvx87GpN1zZPnmVE7bMgRY9uc3ONcZqh6AiEAz3pS2Lbf8cXZk1dVKC6MB1Gow4mDlzdckf2qpgwpj7Yq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDL8PA4%2B2w4HNHt4%2BTSrcA8dkwzzQWJk9s%2BMxn2oDJ4M%2Fi1uKYpO1N4NxeTZs9e%2BOMccTXUSYJ1g5dibzb7w5t8MaSbij26S1%2BZyPHAch2MI1oI1%2BRr2HJvV00ree4zk9ssoYW9bd4VtRwv3FIzfLuTQmKJwYGsq025diHDTqtRfUdMI1VaAcTRvbKR4M8AxF9fc%2FOYLdNyjim1KM9L0hqt6OZ2QRYltsoDn2aix8zHF9I8JTsATzH5kCfig%2B3fRm5yvnZkK5YMTWuoPU9QupECZ34GCO0uTQMiVu%2FX2%2BuQB3C1woxY6%2F7DIwQNhpMzjw3kx9yyd8TMlfS2%2F%2BLPVXsA%2FLgOOqghoYGk6d0MUmW8A6uosP%2FGCKnnEmfZiZyah4Fx6c966Eh242r3o1UuHke6vO99sbnbmp6oOkRBnaDDxEiqiVmUGj1xdk77j8KugnoMK7fJfA%2FVPWoRBL6FPL%2FYmd0A8AKo9rYqjE%2FCHPZWE1sA665UG1%2FGf%2FZzSPoAamCH%2BJVs9%2Fi2Xfj0efgwgOOKGW2zvFPKNx4IhT%2F6s1bkw89lFPL6lMIuoxX%2BHL21qWJcyuYFFaZXG3Ei8XLxSLE24mHoEHDzkn2AKXYIkB962vnXHuEwSPrNUNfjplRNZ0gWo3Bn7ABMUIIPwWMMbw5ccGOqUBsqOneyp9hQ8xRSQlTQ1cTa72q0IfVPdqrJi%2FGlYFDJYMgACkLAprzNdgAPSPVrxPAF2eZ9SlMlTuyS%2FUHNFhF%2B9cDoL8Kb0X0xCyXqLt0OXQkpXc870dlKet%2BA3Tv1nmjqM1AR3Ze6mLrbuLFMvWiCkouHXdT0OhC1KLbmS1X51vCXJExr2H%2BjtUbac5ljJSFmc7abtgpwuORZQXTtU3yELt1zCX&X-Amz-Signature=f4e0efc6b1a6c21ceecb4880b50cdcc69e225d686c047e5956002207ca420250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34GLVMF%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ooUAtzgNJvx87GpN1zZPnmVE7bMgRY9uc3ONcZqh6AiEAz3pS2Lbf8cXZk1dVKC6MB1Gow4mDlzdckf2qpgwpj7Yq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDL8PA4%2B2w4HNHt4%2BTSrcA8dkwzzQWJk9s%2BMxn2oDJ4M%2Fi1uKYpO1N4NxeTZs9e%2BOMccTXUSYJ1g5dibzb7w5t8MaSbij26S1%2BZyPHAch2MI1oI1%2BRr2HJvV00ree4zk9ssoYW9bd4VtRwv3FIzfLuTQmKJwYGsq025diHDTqtRfUdMI1VaAcTRvbKR4M8AxF9fc%2FOYLdNyjim1KM9L0hqt6OZ2QRYltsoDn2aix8zHF9I8JTsATzH5kCfig%2B3fRm5yvnZkK5YMTWuoPU9QupECZ34GCO0uTQMiVu%2FX2%2BuQB3C1woxY6%2F7DIwQNhpMzjw3kx9yyd8TMlfS2%2F%2BLPVXsA%2FLgOOqghoYGk6d0MUmW8A6uosP%2FGCKnnEmfZiZyah4Fx6c966Eh242r3o1UuHke6vO99sbnbmp6oOkRBnaDDxEiqiVmUGj1xdk77j8KugnoMK7fJfA%2FVPWoRBL6FPL%2FYmd0A8AKo9rYqjE%2FCHPZWE1sA665UG1%2FGf%2FZzSPoAamCH%2BJVs9%2Fi2Xfj0efgwgOOKGW2zvFPKNx4IhT%2F6s1bkw89lFPL6lMIuoxX%2BHL21qWJcyuYFFaZXG3Ei8XLxSLE24mHoEHDzkn2AKXYIkB962vnXHuEwSPrNUNfjplRNZ0gWo3Bn7ABMUIIPwWMMbw5ccGOqUBsqOneyp9hQ8xRSQlTQ1cTa72q0IfVPdqrJi%2FGlYFDJYMgACkLAprzNdgAPSPVrxPAF2eZ9SlMlTuyS%2FUHNFhF%2B9cDoL8Kb0X0xCyXqLt0OXQkpXc870dlKet%2BA3Tv1nmjqM1AR3Ze6mLrbuLFMvWiCkouHXdT0OhC1KLbmS1X51vCXJExr2H%2BjtUbac5ljJSFmc7abtgpwuORZQXTtU3yELt1zCX&X-Amz-Signature=4187dc24904ec67f0685ad61edeb8bf197d4c4eb9bc42902fa75174db39b8b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34GLVMF%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ooUAtzgNJvx87GpN1zZPnmVE7bMgRY9uc3ONcZqh6AiEAz3pS2Lbf8cXZk1dVKC6MB1Gow4mDlzdckf2qpgwpj7Yq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDL8PA4%2B2w4HNHt4%2BTSrcA8dkwzzQWJk9s%2BMxn2oDJ4M%2Fi1uKYpO1N4NxeTZs9e%2BOMccTXUSYJ1g5dibzb7w5t8MaSbij26S1%2BZyPHAch2MI1oI1%2BRr2HJvV00ree4zk9ssoYW9bd4VtRwv3FIzfLuTQmKJwYGsq025diHDTqtRfUdMI1VaAcTRvbKR4M8AxF9fc%2FOYLdNyjim1KM9L0hqt6OZ2QRYltsoDn2aix8zHF9I8JTsATzH5kCfig%2B3fRm5yvnZkK5YMTWuoPU9QupECZ34GCO0uTQMiVu%2FX2%2BuQB3C1woxY6%2F7DIwQNhpMzjw3kx9yyd8TMlfS2%2F%2BLPVXsA%2FLgOOqghoYGk6d0MUmW8A6uosP%2FGCKnnEmfZiZyah4Fx6c966Eh242r3o1UuHke6vO99sbnbmp6oOkRBnaDDxEiqiVmUGj1xdk77j8KugnoMK7fJfA%2FVPWoRBL6FPL%2FYmd0A8AKo9rYqjE%2FCHPZWE1sA665UG1%2FGf%2FZzSPoAamCH%2BJVs9%2Fi2Xfj0efgwgOOKGW2zvFPKNx4IhT%2F6s1bkw89lFPL6lMIuoxX%2BHL21qWJcyuYFFaZXG3Ei8XLxSLE24mHoEHDzkn2AKXYIkB962vnXHuEwSPrNUNfjplRNZ0gWo3Bn7ABMUIIPwWMMbw5ccGOqUBsqOneyp9hQ8xRSQlTQ1cTa72q0IfVPdqrJi%2FGlYFDJYMgACkLAprzNdgAPSPVrxPAF2eZ9SlMlTuyS%2FUHNFhF%2B9cDoL8Kb0X0xCyXqLt0OXQkpXc870dlKet%2BA3Tv1nmjqM1AR3Ze6mLrbuLFMvWiCkouHXdT0OhC1KLbmS1X51vCXJExr2H%2BjtUbac5ljJSFmc7abtgpwuORZQXTtU3yELt1zCX&X-Amz-Signature=4aab6f634c6c0bddeee823173ddc553b410cec3a34045a86469180ac5b922df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34GLVMF%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ooUAtzgNJvx87GpN1zZPnmVE7bMgRY9uc3ONcZqh6AiEAz3pS2Lbf8cXZk1dVKC6MB1Gow4mDlzdckf2qpgwpj7Yq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDL8PA4%2B2w4HNHt4%2BTSrcA8dkwzzQWJk9s%2BMxn2oDJ4M%2Fi1uKYpO1N4NxeTZs9e%2BOMccTXUSYJ1g5dibzb7w5t8MaSbij26S1%2BZyPHAch2MI1oI1%2BRr2HJvV00ree4zk9ssoYW9bd4VtRwv3FIzfLuTQmKJwYGsq025diHDTqtRfUdMI1VaAcTRvbKR4M8AxF9fc%2FOYLdNyjim1KM9L0hqt6OZ2QRYltsoDn2aix8zHF9I8JTsATzH5kCfig%2B3fRm5yvnZkK5YMTWuoPU9QupECZ34GCO0uTQMiVu%2FX2%2BuQB3C1woxY6%2F7DIwQNhpMzjw3kx9yyd8TMlfS2%2F%2BLPVXsA%2FLgOOqghoYGk6d0MUmW8A6uosP%2FGCKnnEmfZiZyah4Fx6c966Eh242r3o1UuHke6vO99sbnbmp6oOkRBnaDDxEiqiVmUGj1xdk77j8KugnoMK7fJfA%2FVPWoRBL6FPL%2FYmd0A8AKo9rYqjE%2FCHPZWE1sA665UG1%2FGf%2FZzSPoAamCH%2BJVs9%2Fi2Xfj0efgwgOOKGW2zvFPKNx4IhT%2F6s1bkw89lFPL6lMIuoxX%2BHL21qWJcyuYFFaZXG3Ei8XLxSLE24mHoEHDzkn2AKXYIkB962vnXHuEwSPrNUNfjplRNZ0gWo3Bn7ABMUIIPwWMMbw5ccGOqUBsqOneyp9hQ8xRSQlTQ1cTa72q0IfVPdqrJi%2FGlYFDJYMgACkLAprzNdgAPSPVrxPAF2eZ9SlMlTuyS%2FUHNFhF%2B9cDoL8Kb0X0xCyXqLt0OXQkpXc870dlKet%2BA3Tv1nmjqM1AR3Ze6mLrbuLFMvWiCkouHXdT0OhC1KLbmS1X51vCXJExr2H%2BjtUbac5ljJSFmc7abtgpwuORZQXTtU3yELt1zCX&X-Amz-Signature=fc0b140ef946a92b544a178fa34204e32e75f921c9cad7dcfa0b2c6c772969ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34GLVMF%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ooUAtzgNJvx87GpN1zZPnmVE7bMgRY9uc3ONcZqh6AiEAz3pS2Lbf8cXZk1dVKC6MB1Gow4mDlzdckf2qpgwpj7Yq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDL8PA4%2B2w4HNHt4%2BTSrcA8dkwzzQWJk9s%2BMxn2oDJ4M%2Fi1uKYpO1N4NxeTZs9e%2BOMccTXUSYJ1g5dibzb7w5t8MaSbij26S1%2BZyPHAch2MI1oI1%2BRr2HJvV00ree4zk9ssoYW9bd4VtRwv3FIzfLuTQmKJwYGsq025diHDTqtRfUdMI1VaAcTRvbKR4M8AxF9fc%2FOYLdNyjim1KM9L0hqt6OZ2QRYltsoDn2aix8zHF9I8JTsATzH5kCfig%2B3fRm5yvnZkK5YMTWuoPU9QupECZ34GCO0uTQMiVu%2FX2%2BuQB3C1woxY6%2F7DIwQNhpMzjw3kx9yyd8TMlfS2%2F%2BLPVXsA%2FLgOOqghoYGk6d0MUmW8A6uosP%2FGCKnnEmfZiZyah4Fx6c966Eh242r3o1UuHke6vO99sbnbmp6oOkRBnaDDxEiqiVmUGj1xdk77j8KugnoMK7fJfA%2FVPWoRBL6FPL%2FYmd0A8AKo9rYqjE%2FCHPZWE1sA665UG1%2FGf%2FZzSPoAamCH%2BJVs9%2Fi2Xfj0efgwgOOKGW2zvFPKNx4IhT%2F6s1bkw89lFPL6lMIuoxX%2BHL21qWJcyuYFFaZXG3Ei8XLxSLE24mHoEHDzkn2AKXYIkB962vnXHuEwSPrNUNfjplRNZ0gWo3Bn7ABMUIIPwWMMbw5ccGOqUBsqOneyp9hQ8xRSQlTQ1cTa72q0IfVPdqrJi%2FGlYFDJYMgACkLAprzNdgAPSPVrxPAF2eZ9SlMlTuyS%2FUHNFhF%2B9cDoL8Kb0X0xCyXqLt0OXQkpXc870dlKet%2BA3Tv1nmjqM1AR3Ze6mLrbuLFMvWiCkouHXdT0OhC1KLbmS1X51vCXJExr2H%2BjtUbac5ljJSFmc7abtgpwuORZQXTtU3yELt1zCX&X-Amz-Signature=45f882e6a80af2efd5b83244e4dd182254564fcfcd45db018786c4bc5a8b04f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34GLVMF%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ooUAtzgNJvx87GpN1zZPnmVE7bMgRY9uc3ONcZqh6AiEAz3pS2Lbf8cXZk1dVKC6MB1Gow4mDlzdckf2qpgwpj7Yq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDL8PA4%2B2w4HNHt4%2BTSrcA8dkwzzQWJk9s%2BMxn2oDJ4M%2Fi1uKYpO1N4NxeTZs9e%2BOMccTXUSYJ1g5dibzb7w5t8MaSbij26S1%2BZyPHAch2MI1oI1%2BRr2HJvV00ree4zk9ssoYW9bd4VtRwv3FIzfLuTQmKJwYGsq025diHDTqtRfUdMI1VaAcTRvbKR4M8AxF9fc%2FOYLdNyjim1KM9L0hqt6OZ2QRYltsoDn2aix8zHF9I8JTsATzH5kCfig%2B3fRm5yvnZkK5YMTWuoPU9QupECZ34GCO0uTQMiVu%2FX2%2BuQB3C1woxY6%2F7DIwQNhpMzjw3kx9yyd8TMlfS2%2F%2BLPVXsA%2FLgOOqghoYGk6d0MUmW8A6uosP%2FGCKnnEmfZiZyah4Fx6c966Eh242r3o1UuHke6vO99sbnbmp6oOkRBnaDDxEiqiVmUGj1xdk77j8KugnoMK7fJfA%2FVPWoRBL6FPL%2FYmd0A8AKo9rYqjE%2FCHPZWE1sA665UG1%2FGf%2FZzSPoAamCH%2BJVs9%2Fi2Xfj0efgwgOOKGW2zvFPKNx4IhT%2F6s1bkw89lFPL6lMIuoxX%2BHL21qWJcyuYFFaZXG3Ei8XLxSLE24mHoEHDzkn2AKXYIkB962vnXHuEwSPrNUNfjplRNZ0gWo3Bn7ABMUIIPwWMMbw5ccGOqUBsqOneyp9hQ8xRSQlTQ1cTa72q0IfVPdqrJi%2FGlYFDJYMgACkLAprzNdgAPSPVrxPAF2eZ9SlMlTuyS%2FUHNFhF%2B9cDoL8Kb0X0xCyXqLt0OXQkpXc870dlKet%2BA3Tv1nmjqM1AR3Ze6mLrbuLFMvWiCkouHXdT0OhC1KLbmS1X51vCXJExr2H%2BjtUbac5ljJSFmc7abtgpwuORZQXTtU3yELt1zCX&X-Amz-Signature=84bc89ef6ce228f84479f0c23955ae928007ebf19315cb72778d1fc73d632320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34GLVMF%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6ooUAtzgNJvx87GpN1zZPnmVE7bMgRY9uc3ONcZqh6AiEAz3pS2Lbf8cXZk1dVKC6MB1Gow4mDlzdckf2qpgwpj7Yq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDL8PA4%2B2w4HNHt4%2BTSrcA8dkwzzQWJk9s%2BMxn2oDJ4M%2Fi1uKYpO1N4NxeTZs9e%2BOMccTXUSYJ1g5dibzb7w5t8MaSbij26S1%2BZyPHAch2MI1oI1%2BRr2HJvV00ree4zk9ssoYW9bd4VtRwv3FIzfLuTQmKJwYGsq025diHDTqtRfUdMI1VaAcTRvbKR4M8AxF9fc%2FOYLdNyjim1KM9L0hqt6OZ2QRYltsoDn2aix8zHF9I8JTsATzH5kCfig%2B3fRm5yvnZkK5YMTWuoPU9QupECZ34GCO0uTQMiVu%2FX2%2BuQB3C1woxY6%2F7DIwQNhpMzjw3kx9yyd8TMlfS2%2F%2BLPVXsA%2FLgOOqghoYGk6d0MUmW8A6uosP%2FGCKnnEmfZiZyah4Fx6c966Eh242r3o1UuHke6vO99sbnbmp6oOkRBnaDDxEiqiVmUGj1xdk77j8KugnoMK7fJfA%2FVPWoRBL6FPL%2FYmd0A8AKo9rYqjE%2FCHPZWE1sA665UG1%2FGf%2FZzSPoAamCH%2BJVs9%2Fi2Xfj0efgwgOOKGW2zvFPKNx4IhT%2F6s1bkw89lFPL6lMIuoxX%2BHL21qWJcyuYFFaZXG3Ei8XLxSLE24mHoEHDzkn2AKXYIkB962vnXHuEwSPrNUNfjplRNZ0gWo3Bn7ABMUIIPwWMMbw5ccGOqUBsqOneyp9hQ8xRSQlTQ1cTa72q0IfVPdqrJi%2FGlYFDJYMgACkLAprzNdgAPSPVrxPAF2eZ9SlMlTuyS%2FUHNFhF%2B9cDoL8Kb0X0xCyXqLt0OXQkpXc870dlKet%2BA3Tv1nmjqM1AR3Ze6mLrbuLFMvWiCkouHXdT0OhC1KLbmS1X51vCXJExr2H%2BjtUbac5ljJSFmc7abtgpwuORZQXTtU3yELt1zCX&X-Amz-Signature=b7aaac97861c8781d9ec9a062a7f1b91df2d31ec36b375c98acfa5d9a33af30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
