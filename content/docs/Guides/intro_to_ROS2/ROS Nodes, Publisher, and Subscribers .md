---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KICH5OJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDUfQtPt9RH%2FemILGSrTP3Dc1ESsCRbymDDYLRgKtEeogIgHvb02AyRWoSlGexet8fjlSWom%2BBOPFAFRql8qnxBLQQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGr0Old0V5QSJ5VeTyrcA1DGx5hIg0teI1jh5vYn547OCbxoYoCfvxxsqDlR0ZITmD3r345ys7BTBduQ9Si%2BCNOHH70TtH58TwOya95bLKzxL3KRsLu5ErYWr%2BzAMGVzVp31Btkrqa5OahsASrSt%2FVwWjqgzyg%2BforY3Z9xSjoKXOUIxCGuOGhx0qCuq1OUvsBPGKWoumE%2BOmxJicS%2FsgU3yieCupDoIwdJgI%2F8mx0sCePItmEBYpuM79hrzIhegV30wfzdiMnRYhb9a15nD%2BD%2FKswhTWJzIrHCmbuQrkkl%2BtwuL3Vl0X%2FT5mkgRqBGR%2B3%2F2Rl%2Byoe6rtI675hFyXTQE9qujhpyqG%2FarZuuyUJf%2BWzuZrMeW0TCUgJZAJC12s5ouBxP7nMRKB6WIuqK2vMnq%2FUXCvohNZkwmyrxuOnOmmc5fvH043jD8EMxRWalQbCNZr5KrBiowlKb8YsmqrzEAa8lZZgVv%2BVW%2Bnk8qX4PD0%2FyrvHo8Q7FrQGj8H05uoPs1dIxgn%2B18Xm92tWCbgS55%2FsSav0NJDMsPDA4sIdqII3Hdy%2Bl8tu1yJJSxb7pqrdVzS%2FruJY9rjDLZF3G6UMoncIlvavpcpgQJKalZo0krVc%2FGZpefyVpDJnjOsRYM8h%2FTZRAVwzZVt5pzMKvtj70GOqUBQzSVxfiZOo4ymyThVqxvb8hqkd2HCucE61kcwHI3HHOHJy0Wk18jHf8ZL4ieuFkoRdxLFaMf6B4R5zYUDZBe8qeGM1IJF5tT87h4YgZId5%2BWP%2BZBpEueKjmRvYxQHNiZ8nytuoCjaqxigyBq0NsQSTpWPKfjTQ08iswA5nsOmZf5F8ix3smPAL9uOd42QBpcYaymTdSf2WYgtJ55APi%2B%2BAh6bqVN&X-Amz-Signature=6fe5b796676a3a7379f81b4611af9026fb0f4adb9075dc71142a79e23239854c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KICH5OJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDUfQtPt9RH%2FemILGSrTP3Dc1ESsCRbymDDYLRgKtEeogIgHvb02AyRWoSlGexet8fjlSWom%2BBOPFAFRql8qnxBLQQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGr0Old0V5QSJ5VeTyrcA1DGx5hIg0teI1jh5vYn547OCbxoYoCfvxxsqDlR0ZITmD3r345ys7BTBduQ9Si%2BCNOHH70TtH58TwOya95bLKzxL3KRsLu5ErYWr%2BzAMGVzVp31Btkrqa5OahsASrSt%2FVwWjqgzyg%2BforY3Z9xSjoKXOUIxCGuOGhx0qCuq1OUvsBPGKWoumE%2BOmxJicS%2FsgU3yieCupDoIwdJgI%2F8mx0sCePItmEBYpuM79hrzIhegV30wfzdiMnRYhb9a15nD%2BD%2FKswhTWJzIrHCmbuQrkkl%2BtwuL3Vl0X%2FT5mkgRqBGR%2B3%2F2Rl%2Byoe6rtI675hFyXTQE9qujhpyqG%2FarZuuyUJf%2BWzuZrMeW0TCUgJZAJC12s5ouBxP7nMRKB6WIuqK2vMnq%2FUXCvohNZkwmyrxuOnOmmc5fvH043jD8EMxRWalQbCNZr5KrBiowlKb8YsmqrzEAa8lZZgVv%2BVW%2Bnk8qX4PD0%2FyrvHo8Q7FrQGj8H05uoPs1dIxgn%2B18Xm92tWCbgS55%2FsSav0NJDMsPDA4sIdqII3Hdy%2Bl8tu1yJJSxb7pqrdVzS%2FruJY9rjDLZF3G6UMoncIlvavpcpgQJKalZo0krVc%2FGZpefyVpDJnjOsRYM8h%2FTZRAVwzZVt5pzMKvtj70GOqUBQzSVxfiZOo4ymyThVqxvb8hqkd2HCucE61kcwHI3HHOHJy0Wk18jHf8ZL4ieuFkoRdxLFaMf6B4R5zYUDZBe8qeGM1IJF5tT87h4YgZId5%2BWP%2BZBpEueKjmRvYxQHNiZ8nytuoCjaqxigyBq0NsQSTpWPKfjTQ08iswA5nsOmZf5F8ix3smPAL9uOd42QBpcYaymTdSf2WYgtJ55APi%2B%2BAh6bqVN&X-Amz-Signature=5cb91de32b563fc69c4ed6a31630c89c07acb04a5349744af02f9f06321477f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KICH5OJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDUfQtPt9RH%2FemILGSrTP3Dc1ESsCRbymDDYLRgKtEeogIgHvb02AyRWoSlGexet8fjlSWom%2BBOPFAFRql8qnxBLQQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGr0Old0V5QSJ5VeTyrcA1DGx5hIg0teI1jh5vYn547OCbxoYoCfvxxsqDlR0ZITmD3r345ys7BTBduQ9Si%2BCNOHH70TtH58TwOya95bLKzxL3KRsLu5ErYWr%2BzAMGVzVp31Btkrqa5OahsASrSt%2FVwWjqgzyg%2BforY3Z9xSjoKXOUIxCGuOGhx0qCuq1OUvsBPGKWoumE%2BOmxJicS%2FsgU3yieCupDoIwdJgI%2F8mx0sCePItmEBYpuM79hrzIhegV30wfzdiMnRYhb9a15nD%2BD%2FKswhTWJzIrHCmbuQrkkl%2BtwuL3Vl0X%2FT5mkgRqBGR%2B3%2F2Rl%2Byoe6rtI675hFyXTQE9qujhpyqG%2FarZuuyUJf%2BWzuZrMeW0TCUgJZAJC12s5ouBxP7nMRKB6WIuqK2vMnq%2FUXCvohNZkwmyrxuOnOmmc5fvH043jD8EMxRWalQbCNZr5KrBiowlKb8YsmqrzEAa8lZZgVv%2BVW%2Bnk8qX4PD0%2FyrvHo8Q7FrQGj8H05uoPs1dIxgn%2B18Xm92tWCbgS55%2FsSav0NJDMsPDA4sIdqII3Hdy%2Bl8tu1yJJSxb7pqrdVzS%2FruJY9rjDLZF3G6UMoncIlvavpcpgQJKalZo0krVc%2FGZpefyVpDJnjOsRYM8h%2FTZRAVwzZVt5pzMKvtj70GOqUBQzSVxfiZOo4ymyThVqxvb8hqkd2HCucE61kcwHI3HHOHJy0Wk18jHf8ZL4ieuFkoRdxLFaMf6B4R5zYUDZBe8qeGM1IJF5tT87h4YgZId5%2BWP%2BZBpEueKjmRvYxQHNiZ8nytuoCjaqxigyBq0NsQSTpWPKfjTQ08iswA5nsOmZf5F8ix3smPAL9uOd42QBpcYaymTdSf2WYgtJ55APi%2B%2BAh6bqVN&X-Amz-Signature=d72ce6db4cb999bbb5bbdd3e3abcb753b7cf9488ed8cb2a3504ad3d863754839&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KICH5OJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDUfQtPt9RH%2FemILGSrTP3Dc1ESsCRbymDDYLRgKtEeogIgHvb02AyRWoSlGexet8fjlSWom%2BBOPFAFRql8qnxBLQQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGr0Old0V5QSJ5VeTyrcA1DGx5hIg0teI1jh5vYn547OCbxoYoCfvxxsqDlR0ZITmD3r345ys7BTBduQ9Si%2BCNOHH70TtH58TwOya95bLKzxL3KRsLu5ErYWr%2BzAMGVzVp31Btkrqa5OahsASrSt%2FVwWjqgzyg%2BforY3Z9xSjoKXOUIxCGuOGhx0qCuq1OUvsBPGKWoumE%2BOmxJicS%2FsgU3yieCupDoIwdJgI%2F8mx0sCePItmEBYpuM79hrzIhegV30wfzdiMnRYhb9a15nD%2BD%2FKswhTWJzIrHCmbuQrkkl%2BtwuL3Vl0X%2FT5mkgRqBGR%2B3%2F2Rl%2Byoe6rtI675hFyXTQE9qujhpyqG%2FarZuuyUJf%2BWzuZrMeW0TCUgJZAJC12s5ouBxP7nMRKB6WIuqK2vMnq%2FUXCvohNZkwmyrxuOnOmmc5fvH043jD8EMxRWalQbCNZr5KrBiowlKb8YsmqrzEAa8lZZgVv%2BVW%2Bnk8qX4PD0%2FyrvHo8Q7FrQGj8H05uoPs1dIxgn%2B18Xm92tWCbgS55%2FsSav0NJDMsPDA4sIdqII3Hdy%2Bl8tu1yJJSxb7pqrdVzS%2FruJY9rjDLZF3G6UMoncIlvavpcpgQJKalZo0krVc%2FGZpefyVpDJnjOsRYM8h%2FTZRAVwzZVt5pzMKvtj70GOqUBQzSVxfiZOo4ymyThVqxvb8hqkd2HCucE61kcwHI3HHOHJy0Wk18jHf8ZL4ieuFkoRdxLFaMf6B4R5zYUDZBe8qeGM1IJF5tT87h4YgZId5%2BWP%2BZBpEueKjmRvYxQHNiZ8nytuoCjaqxigyBq0NsQSTpWPKfjTQ08iswA5nsOmZf5F8ix3smPAL9uOd42QBpcYaymTdSf2WYgtJ55APi%2B%2BAh6bqVN&X-Amz-Signature=91edf9e10ad1aa384f48b50836be792e00d55894ccc7541abee34dec31f63413&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KICH5OJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDUfQtPt9RH%2FemILGSrTP3Dc1ESsCRbymDDYLRgKtEeogIgHvb02AyRWoSlGexet8fjlSWom%2BBOPFAFRql8qnxBLQQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGr0Old0V5QSJ5VeTyrcA1DGx5hIg0teI1jh5vYn547OCbxoYoCfvxxsqDlR0ZITmD3r345ys7BTBduQ9Si%2BCNOHH70TtH58TwOya95bLKzxL3KRsLu5ErYWr%2BzAMGVzVp31Btkrqa5OahsASrSt%2FVwWjqgzyg%2BforY3Z9xSjoKXOUIxCGuOGhx0qCuq1OUvsBPGKWoumE%2BOmxJicS%2FsgU3yieCupDoIwdJgI%2F8mx0sCePItmEBYpuM79hrzIhegV30wfzdiMnRYhb9a15nD%2BD%2FKswhTWJzIrHCmbuQrkkl%2BtwuL3Vl0X%2FT5mkgRqBGR%2B3%2F2Rl%2Byoe6rtI675hFyXTQE9qujhpyqG%2FarZuuyUJf%2BWzuZrMeW0TCUgJZAJC12s5ouBxP7nMRKB6WIuqK2vMnq%2FUXCvohNZkwmyrxuOnOmmc5fvH043jD8EMxRWalQbCNZr5KrBiowlKb8YsmqrzEAa8lZZgVv%2BVW%2Bnk8qX4PD0%2FyrvHo8Q7FrQGj8H05uoPs1dIxgn%2B18Xm92tWCbgS55%2FsSav0NJDMsPDA4sIdqII3Hdy%2Bl8tu1yJJSxb7pqrdVzS%2FruJY9rjDLZF3G6UMoncIlvavpcpgQJKalZo0krVc%2FGZpefyVpDJnjOsRYM8h%2FTZRAVwzZVt5pzMKvtj70GOqUBQzSVxfiZOo4ymyThVqxvb8hqkd2HCucE61kcwHI3HHOHJy0Wk18jHf8ZL4ieuFkoRdxLFaMf6B4R5zYUDZBe8qeGM1IJF5tT87h4YgZId5%2BWP%2BZBpEueKjmRvYxQHNiZ8nytuoCjaqxigyBq0NsQSTpWPKfjTQ08iswA5nsOmZf5F8ix3smPAL9uOd42QBpcYaymTdSf2WYgtJ55APi%2B%2BAh6bqVN&X-Amz-Signature=224ac70153e68bfc107f405eb2dece8bc7ad36fd31aff4b158868396fd25d9b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KICH5OJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDUfQtPt9RH%2FemILGSrTP3Dc1ESsCRbymDDYLRgKtEeogIgHvb02AyRWoSlGexet8fjlSWom%2BBOPFAFRql8qnxBLQQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGr0Old0V5QSJ5VeTyrcA1DGx5hIg0teI1jh5vYn547OCbxoYoCfvxxsqDlR0ZITmD3r345ys7BTBduQ9Si%2BCNOHH70TtH58TwOya95bLKzxL3KRsLu5ErYWr%2BzAMGVzVp31Btkrqa5OahsASrSt%2FVwWjqgzyg%2BforY3Z9xSjoKXOUIxCGuOGhx0qCuq1OUvsBPGKWoumE%2BOmxJicS%2FsgU3yieCupDoIwdJgI%2F8mx0sCePItmEBYpuM79hrzIhegV30wfzdiMnRYhb9a15nD%2BD%2FKswhTWJzIrHCmbuQrkkl%2BtwuL3Vl0X%2FT5mkgRqBGR%2B3%2F2Rl%2Byoe6rtI675hFyXTQE9qujhpyqG%2FarZuuyUJf%2BWzuZrMeW0TCUgJZAJC12s5ouBxP7nMRKB6WIuqK2vMnq%2FUXCvohNZkwmyrxuOnOmmc5fvH043jD8EMxRWalQbCNZr5KrBiowlKb8YsmqrzEAa8lZZgVv%2BVW%2Bnk8qX4PD0%2FyrvHo8Q7FrQGj8H05uoPs1dIxgn%2B18Xm92tWCbgS55%2FsSav0NJDMsPDA4sIdqII3Hdy%2Bl8tu1yJJSxb7pqrdVzS%2FruJY9rjDLZF3G6UMoncIlvavpcpgQJKalZo0krVc%2FGZpefyVpDJnjOsRYM8h%2FTZRAVwzZVt5pzMKvtj70GOqUBQzSVxfiZOo4ymyThVqxvb8hqkd2HCucE61kcwHI3HHOHJy0Wk18jHf8ZL4ieuFkoRdxLFaMf6B4R5zYUDZBe8qeGM1IJF5tT87h4YgZId5%2BWP%2BZBpEueKjmRvYxQHNiZ8nytuoCjaqxigyBq0NsQSTpWPKfjTQ08iswA5nsOmZf5F8ix3smPAL9uOd42QBpcYaymTdSf2WYgtJ55APi%2B%2BAh6bqVN&X-Amz-Signature=a23c0305c9189def6a3a8efd276945e42061ef1e73d4c3d44b4a26f45e959afa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KICH5OJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDUfQtPt9RH%2FemILGSrTP3Dc1ESsCRbymDDYLRgKtEeogIgHvb02AyRWoSlGexet8fjlSWom%2BBOPFAFRql8qnxBLQQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGr0Old0V5QSJ5VeTyrcA1DGx5hIg0teI1jh5vYn547OCbxoYoCfvxxsqDlR0ZITmD3r345ys7BTBduQ9Si%2BCNOHH70TtH58TwOya95bLKzxL3KRsLu5ErYWr%2BzAMGVzVp31Btkrqa5OahsASrSt%2FVwWjqgzyg%2BforY3Z9xSjoKXOUIxCGuOGhx0qCuq1OUvsBPGKWoumE%2BOmxJicS%2FsgU3yieCupDoIwdJgI%2F8mx0sCePItmEBYpuM79hrzIhegV30wfzdiMnRYhb9a15nD%2BD%2FKswhTWJzIrHCmbuQrkkl%2BtwuL3Vl0X%2FT5mkgRqBGR%2B3%2F2Rl%2Byoe6rtI675hFyXTQE9qujhpyqG%2FarZuuyUJf%2BWzuZrMeW0TCUgJZAJC12s5ouBxP7nMRKB6WIuqK2vMnq%2FUXCvohNZkwmyrxuOnOmmc5fvH043jD8EMxRWalQbCNZr5KrBiowlKb8YsmqrzEAa8lZZgVv%2BVW%2Bnk8qX4PD0%2FyrvHo8Q7FrQGj8H05uoPs1dIxgn%2B18Xm92tWCbgS55%2FsSav0NJDMsPDA4sIdqII3Hdy%2Bl8tu1yJJSxb7pqrdVzS%2FruJY9rjDLZF3G6UMoncIlvavpcpgQJKalZo0krVc%2FGZpefyVpDJnjOsRYM8h%2FTZRAVwzZVt5pzMKvtj70GOqUBQzSVxfiZOo4ymyThVqxvb8hqkd2HCucE61kcwHI3HHOHJy0Wk18jHf8ZL4ieuFkoRdxLFaMf6B4R5zYUDZBe8qeGM1IJF5tT87h4YgZId5%2BWP%2BZBpEueKjmRvYxQHNiZ8nytuoCjaqxigyBq0NsQSTpWPKfjTQ08iswA5nsOmZf5F8ix3smPAL9uOd42QBpcYaymTdSf2WYgtJ55APi%2B%2BAh6bqVN&X-Amz-Signature=df681edca0193d7739e4982cb0bd982ec40f18bc12181e78dfa42eebab295fce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KICH5OJ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDUfQtPt9RH%2FemILGSrTP3Dc1ESsCRbymDDYLRgKtEeogIgHvb02AyRWoSlGexet8fjlSWom%2BBOPFAFRql8qnxBLQQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGr0Old0V5QSJ5VeTyrcA1DGx5hIg0teI1jh5vYn547OCbxoYoCfvxxsqDlR0ZITmD3r345ys7BTBduQ9Si%2BCNOHH70TtH58TwOya95bLKzxL3KRsLu5ErYWr%2BzAMGVzVp31Btkrqa5OahsASrSt%2FVwWjqgzyg%2BforY3Z9xSjoKXOUIxCGuOGhx0qCuq1OUvsBPGKWoumE%2BOmxJicS%2FsgU3yieCupDoIwdJgI%2F8mx0sCePItmEBYpuM79hrzIhegV30wfzdiMnRYhb9a15nD%2BD%2FKswhTWJzIrHCmbuQrkkl%2BtwuL3Vl0X%2FT5mkgRqBGR%2B3%2F2Rl%2Byoe6rtI675hFyXTQE9qujhpyqG%2FarZuuyUJf%2BWzuZrMeW0TCUgJZAJC12s5ouBxP7nMRKB6WIuqK2vMnq%2FUXCvohNZkwmyrxuOnOmmc5fvH043jD8EMxRWalQbCNZr5KrBiowlKb8YsmqrzEAa8lZZgVv%2BVW%2Bnk8qX4PD0%2FyrvHo8Q7FrQGj8H05uoPs1dIxgn%2B18Xm92tWCbgS55%2FsSav0NJDMsPDA4sIdqII3Hdy%2Bl8tu1yJJSxb7pqrdVzS%2FruJY9rjDLZF3G6UMoncIlvavpcpgQJKalZo0krVc%2FGZpefyVpDJnjOsRYM8h%2FTZRAVwzZVt5pzMKvtj70GOqUBQzSVxfiZOo4ymyThVqxvb8hqkd2HCucE61kcwHI3HHOHJy0Wk18jHf8ZL4ieuFkoRdxLFaMf6B4R5zYUDZBe8qeGM1IJF5tT87h4YgZId5%2BWP%2BZBpEueKjmRvYxQHNiZ8nytuoCjaqxigyBq0NsQSTpWPKfjTQ08iswA5nsOmZf5F8ix3smPAL9uOd42QBpcYaymTdSf2WYgtJ55APi%2B%2BAh6bqVN&X-Amz-Signature=7ce398d1b870455ce4aca1bc3e5b54153d8079cfcef5c7c7ef1448ceb7946d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
