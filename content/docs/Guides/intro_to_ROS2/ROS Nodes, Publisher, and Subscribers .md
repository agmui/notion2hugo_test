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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD2BNLJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICqAKj%2B%2FAzmfi4sqCMIfNWH%2FkPB4guMaaGKD%2FBKDyTMKAiEAqAJXEF%2BgXXbjb%2BPZ3b%2BFr%2Fr0NZk6PeK3tLGVuiwYmmoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLJjvhD3EuQfhgxiSrcA97sCVctwqm3e6iCTixXKdh5h13rg9je7k9uArwVaP6CVxQrUJEHRwcLUtx6KqCd3glM2ubnWtvHRA0vuekCh9bb9VjoI%2FEqsPYIByTOJsVu9q50aAbk%2FyTVchJtFNf4JE4EuWUX2L312tEp0GGJQMXj3AQhgVs881lN2NhuDy36ijwDh4uJ%2FiU4N4jJnzWL0IqRtz%2F%2BIcvyeVc5nObgItUS3kmRWVlWQgk%2FEnJZZRgObsjmmkquhRpm7DWyZ1jQQkh9Cu3LHtt0WCVsjvSrcVEE%2BoCMLMHEwc6BJ0tpgCi0IER6Bh0IFtDMiYkxmTEq3Ius76G9jkSjXhkZ8s1P5DrgIk4X76n7wnRWo0Kg%2F4WbFVF4mW1k%2Bpm4wLEzSYCOp73XlYQ9lyinJ92aR5dw1Gl%2Bohjw1S8bBft8PcDA1mT6jeqmlgnouo9SS69of16EKxgkt2KKuH%2BV6JB%2BiyHiinQEsLLqCUOsfU1TxHrPnXruG%2FLJNJz7YL0Kg%2FCQQJXPZyXjEfI%2FnR2fmkKIS49HJxyn3bI9sjAkept1I5hfGpF%2Fz9WdHnXJHiTOjm3sTRqarGKWZDxscW2DTTpSlNRe%2BtxybRx17tLbgRwGuHsb0Gq3zQ9GMGCdQFIuvl%2F%2BMO7x5L8GOqUBdzXoKqvQvD%2FaJV3hev7leuc9NnUSLO39DbQh2%2FdR%2FGN0Xy%2FfZRUIGq6pJ9MduskgzFWvljbErCZ0w67B6PArhlhcXRCGAWpQNe0Fleo8eh9h%2FRHKrXkfqztVLdS%2BWZ1Bgl5PBuVSPB55JGFw3qetg%2FZuiGkvI5uT0cWr8e6js2DDt2WNrJ10Xng2o%2FZwwUgSbQZSp6ntBMuTZS%2F0skL%2FucaXKERH&X-Amz-Signature=4e0ebf362aabf98ad3930497cd185539779920a352e76d6e4a921ac15bad8f23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD2BNLJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICqAKj%2B%2FAzmfi4sqCMIfNWH%2FkPB4guMaaGKD%2FBKDyTMKAiEAqAJXEF%2BgXXbjb%2BPZ3b%2BFr%2Fr0NZk6PeK3tLGVuiwYmmoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLJjvhD3EuQfhgxiSrcA97sCVctwqm3e6iCTixXKdh5h13rg9je7k9uArwVaP6CVxQrUJEHRwcLUtx6KqCd3glM2ubnWtvHRA0vuekCh9bb9VjoI%2FEqsPYIByTOJsVu9q50aAbk%2FyTVchJtFNf4JE4EuWUX2L312tEp0GGJQMXj3AQhgVs881lN2NhuDy36ijwDh4uJ%2FiU4N4jJnzWL0IqRtz%2F%2BIcvyeVc5nObgItUS3kmRWVlWQgk%2FEnJZZRgObsjmmkquhRpm7DWyZ1jQQkh9Cu3LHtt0WCVsjvSrcVEE%2BoCMLMHEwc6BJ0tpgCi0IER6Bh0IFtDMiYkxmTEq3Ius76G9jkSjXhkZ8s1P5DrgIk4X76n7wnRWo0Kg%2F4WbFVF4mW1k%2Bpm4wLEzSYCOp73XlYQ9lyinJ92aR5dw1Gl%2Bohjw1S8bBft8PcDA1mT6jeqmlgnouo9SS69of16EKxgkt2KKuH%2BV6JB%2BiyHiinQEsLLqCUOsfU1TxHrPnXruG%2FLJNJz7YL0Kg%2FCQQJXPZyXjEfI%2FnR2fmkKIS49HJxyn3bI9sjAkept1I5hfGpF%2Fz9WdHnXJHiTOjm3sTRqarGKWZDxscW2DTTpSlNRe%2BtxybRx17tLbgRwGuHsb0Gq3zQ9GMGCdQFIuvl%2F%2BMO7x5L8GOqUBdzXoKqvQvD%2FaJV3hev7leuc9NnUSLO39DbQh2%2FdR%2FGN0Xy%2FfZRUIGq6pJ9MduskgzFWvljbErCZ0w67B6PArhlhcXRCGAWpQNe0Fleo8eh9h%2FRHKrXkfqztVLdS%2BWZ1Bgl5PBuVSPB55JGFw3qetg%2FZuiGkvI5uT0cWr8e6js2DDt2WNrJ10Xng2o%2FZwwUgSbQZSp6ntBMuTZS%2F0skL%2FucaXKERH&X-Amz-Signature=00038c5845ceaec6ad76ce96f6b5fe3ed2fca4cc0941d45a307f209529dc340c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD2BNLJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICqAKj%2B%2FAzmfi4sqCMIfNWH%2FkPB4guMaaGKD%2FBKDyTMKAiEAqAJXEF%2BgXXbjb%2BPZ3b%2BFr%2Fr0NZk6PeK3tLGVuiwYmmoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLJjvhD3EuQfhgxiSrcA97sCVctwqm3e6iCTixXKdh5h13rg9je7k9uArwVaP6CVxQrUJEHRwcLUtx6KqCd3glM2ubnWtvHRA0vuekCh9bb9VjoI%2FEqsPYIByTOJsVu9q50aAbk%2FyTVchJtFNf4JE4EuWUX2L312tEp0GGJQMXj3AQhgVs881lN2NhuDy36ijwDh4uJ%2FiU4N4jJnzWL0IqRtz%2F%2BIcvyeVc5nObgItUS3kmRWVlWQgk%2FEnJZZRgObsjmmkquhRpm7DWyZ1jQQkh9Cu3LHtt0WCVsjvSrcVEE%2BoCMLMHEwc6BJ0tpgCi0IER6Bh0IFtDMiYkxmTEq3Ius76G9jkSjXhkZ8s1P5DrgIk4X76n7wnRWo0Kg%2F4WbFVF4mW1k%2Bpm4wLEzSYCOp73XlYQ9lyinJ92aR5dw1Gl%2Bohjw1S8bBft8PcDA1mT6jeqmlgnouo9SS69of16EKxgkt2KKuH%2BV6JB%2BiyHiinQEsLLqCUOsfU1TxHrPnXruG%2FLJNJz7YL0Kg%2FCQQJXPZyXjEfI%2FnR2fmkKIS49HJxyn3bI9sjAkept1I5hfGpF%2Fz9WdHnXJHiTOjm3sTRqarGKWZDxscW2DTTpSlNRe%2BtxybRx17tLbgRwGuHsb0Gq3zQ9GMGCdQFIuvl%2F%2BMO7x5L8GOqUBdzXoKqvQvD%2FaJV3hev7leuc9NnUSLO39DbQh2%2FdR%2FGN0Xy%2FfZRUIGq6pJ9MduskgzFWvljbErCZ0w67B6PArhlhcXRCGAWpQNe0Fleo8eh9h%2FRHKrXkfqztVLdS%2BWZ1Bgl5PBuVSPB55JGFw3qetg%2FZuiGkvI5uT0cWr8e6js2DDt2WNrJ10Xng2o%2FZwwUgSbQZSp6ntBMuTZS%2F0skL%2FucaXKERH&X-Amz-Signature=17028f72dc7253ba3084e2caaba3ce02d493b0e8efa252d1cf2a8a32a0a6ea22&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD2BNLJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICqAKj%2B%2FAzmfi4sqCMIfNWH%2FkPB4guMaaGKD%2FBKDyTMKAiEAqAJXEF%2BgXXbjb%2BPZ3b%2BFr%2Fr0NZk6PeK3tLGVuiwYmmoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLJjvhD3EuQfhgxiSrcA97sCVctwqm3e6iCTixXKdh5h13rg9je7k9uArwVaP6CVxQrUJEHRwcLUtx6KqCd3glM2ubnWtvHRA0vuekCh9bb9VjoI%2FEqsPYIByTOJsVu9q50aAbk%2FyTVchJtFNf4JE4EuWUX2L312tEp0GGJQMXj3AQhgVs881lN2NhuDy36ijwDh4uJ%2FiU4N4jJnzWL0IqRtz%2F%2BIcvyeVc5nObgItUS3kmRWVlWQgk%2FEnJZZRgObsjmmkquhRpm7DWyZ1jQQkh9Cu3LHtt0WCVsjvSrcVEE%2BoCMLMHEwc6BJ0tpgCi0IER6Bh0IFtDMiYkxmTEq3Ius76G9jkSjXhkZ8s1P5DrgIk4X76n7wnRWo0Kg%2F4WbFVF4mW1k%2Bpm4wLEzSYCOp73XlYQ9lyinJ92aR5dw1Gl%2Bohjw1S8bBft8PcDA1mT6jeqmlgnouo9SS69of16EKxgkt2KKuH%2BV6JB%2BiyHiinQEsLLqCUOsfU1TxHrPnXruG%2FLJNJz7YL0Kg%2FCQQJXPZyXjEfI%2FnR2fmkKIS49HJxyn3bI9sjAkept1I5hfGpF%2Fz9WdHnXJHiTOjm3sTRqarGKWZDxscW2DTTpSlNRe%2BtxybRx17tLbgRwGuHsb0Gq3zQ9GMGCdQFIuvl%2F%2BMO7x5L8GOqUBdzXoKqvQvD%2FaJV3hev7leuc9NnUSLO39DbQh2%2FdR%2FGN0Xy%2FfZRUIGq6pJ9MduskgzFWvljbErCZ0w67B6PArhlhcXRCGAWpQNe0Fleo8eh9h%2FRHKrXkfqztVLdS%2BWZ1Bgl5PBuVSPB55JGFw3qetg%2FZuiGkvI5uT0cWr8e6js2DDt2WNrJ10Xng2o%2FZwwUgSbQZSp6ntBMuTZS%2F0skL%2FucaXKERH&X-Amz-Signature=50a5e179202d33563ca79ce4628ea03d08adf486c98d285f0113eda6bcc2975c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD2BNLJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICqAKj%2B%2FAzmfi4sqCMIfNWH%2FkPB4guMaaGKD%2FBKDyTMKAiEAqAJXEF%2BgXXbjb%2BPZ3b%2BFr%2Fr0NZk6PeK3tLGVuiwYmmoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLJjvhD3EuQfhgxiSrcA97sCVctwqm3e6iCTixXKdh5h13rg9je7k9uArwVaP6CVxQrUJEHRwcLUtx6KqCd3glM2ubnWtvHRA0vuekCh9bb9VjoI%2FEqsPYIByTOJsVu9q50aAbk%2FyTVchJtFNf4JE4EuWUX2L312tEp0GGJQMXj3AQhgVs881lN2NhuDy36ijwDh4uJ%2FiU4N4jJnzWL0IqRtz%2F%2BIcvyeVc5nObgItUS3kmRWVlWQgk%2FEnJZZRgObsjmmkquhRpm7DWyZ1jQQkh9Cu3LHtt0WCVsjvSrcVEE%2BoCMLMHEwc6BJ0tpgCi0IER6Bh0IFtDMiYkxmTEq3Ius76G9jkSjXhkZ8s1P5DrgIk4X76n7wnRWo0Kg%2F4WbFVF4mW1k%2Bpm4wLEzSYCOp73XlYQ9lyinJ92aR5dw1Gl%2Bohjw1S8bBft8PcDA1mT6jeqmlgnouo9SS69of16EKxgkt2KKuH%2BV6JB%2BiyHiinQEsLLqCUOsfU1TxHrPnXruG%2FLJNJz7YL0Kg%2FCQQJXPZyXjEfI%2FnR2fmkKIS49HJxyn3bI9sjAkept1I5hfGpF%2Fz9WdHnXJHiTOjm3sTRqarGKWZDxscW2DTTpSlNRe%2BtxybRx17tLbgRwGuHsb0Gq3zQ9GMGCdQFIuvl%2F%2BMO7x5L8GOqUBdzXoKqvQvD%2FaJV3hev7leuc9NnUSLO39DbQh2%2FdR%2FGN0Xy%2FfZRUIGq6pJ9MduskgzFWvljbErCZ0w67B6PArhlhcXRCGAWpQNe0Fleo8eh9h%2FRHKrXkfqztVLdS%2BWZ1Bgl5PBuVSPB55JGFw3qetg%2FZuiGkvI5uT0cWr8e6js2DDt2WNrJ10Xng2o%2FZwwUgSbQZSp6ntBMuTZS%2F0skL%2FucaXKERH&X-Amz-Signature=e138f0766b03d028b5b1a37595e4358104f184e480bbffba4cc354a8a2fadaf1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD2BNLJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICqAKj%2B%2FAzmfi4sqCMIfNWH%2FkPB4guMaaGKD%2FBKDyTMKAiEAqAJXEF%2BgXXbjb%2BPZ3b%2BFr%2Fr0NZk6PeK3tLGVuiwYmmoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLJjvhD3EuQfhgxiSrcA97sCVctwqm3e6iCTixXKdh5h13rg9je7k9uArwVaP6CVxQrUJEHRwcLUtx6KqCd3glM2ubnWtvHRA0vuekCh9bb9VjoI%2FEqsPYIByTOJsVu9q50aAbk%2FyTVchJtFNf4JE4EuWUX2L312tEp0GGJQMXj3AQhgVs881lN2NhuDy36ijwDh4uJ%2FiU4N4jJnzWL0IqRtz%2F%2BIcvyeVc5nObgItUS3kmRWVlWQgk%2FEnJZZRgObsjmmkquhRpm7DWyZ1jQQkh9Cu3LHtt0WCVsjvSrcVEE%2BoCMLMHEwc6BJ0tpgCi0IER6Bh0IFtDMiYkxmTEq3Ius76G9jkSjXhkZ8s1P5DrgIk4X76n7wnRWo0Kg%2F4WbFVF4mW1k%2Bpm4wLEzSYCOp73XlYQ9lyinJ92aR5dw1Gl%2Bohjw1S8bBft8PcDA1mT6jeqmlgnouo9SS69of16EKxgkt2KKuH%2BV6JB%2BiyHiinQEsLLqCUOsfU1TxHrPnXruG%2FLJNJz7YL0Kg%2FCQQJXPZyXjEfI%2FnR2fmkKIS49HJxyn3bI9sjAkept1I5hfGpF%2Fz9WdHnXJHiTOjm3sTRqarGKWZDxscW2DTTpSlNRe%2BtxybRx17tLbgRwGuHsb0Gq3zQ9GMGCdQFIuvl%2F%2BMO7x5L8GOqUBdzXoKqvQvD%2FaJV3hev7leuc9NnUSLO39DbQh2%2FdR%2FGN0Xy%2FfZRUIGq6pJ9MduskgzFWvljbErCZ0w67B6PArhlhcXRCGAWpQNe0Fleo8eh9h%2FRHKrXkfqztVLdS%2BWZ1Bgl5PBuVSPB55JGFw3qetg%2FZuiGkvI5uT0cWr8e6js2DDt2WNrJ10Xng2o%2FZwwUgSbQZSp6ntBMuTZS%2F0skL%2FucaXKERH&X-Amz-Signature=4c427a7eaead122db6e69c300065282ed129a5f74ecfa3747ced93a6bbc3193b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD2BNLJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICqAKj%2B%2FAzmfi4sqCMIfNWH%2FkPB4guMaaGKD%2FBKDyTMKAiEAqAJXEF%2BgXXbjb%2BPZ3b%2BFr%2Fr0NZk6PeK3tLGVuiwYmmoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLJjvhD3EuQfhgxiSrcA97sCVctwqm3e6iCTixXKdh5h13rg9je7k9uArwVaP6CVxQrUJEHRwcLUtx6KqCd3glM2ubnWtvHRA0vuekCh9bb9VjoI%2FEqsPYIByTOJsVu9q50aAbk%2FyTVchJtFNf4JE4EuWUX2L312tEp0GGJQMXj3AQhgVs881lN2NhuDy36ijwDh4uJ%2FiU4N4jJnzWL0IqRtz%2F%2BIcvyeVc5nObgItUS3kmRWVlWQgk%2FEnJZZRgObsjmmkquhRpm7DWyZ1jQQkh9Cu3LHtt0WCVsjvSrcVEE%2BoCMLMHEwc6BJ0tpgCi0IER6Bh0IFtDMiYkxmTEq3Ius76G9jkSjXhkZ8s1P5DrgIk4X76n7wnRWo0Kg%2F4WbFVF4mW1k%2Bpm4wLEzSYCOp73XlYQ9lyinJ92aR5dw1Gl%2Bohjw1S8bBft8PcDA1mT6jeqmlgnouo9SS69of16EKxgkt2KKuH%2BV6JB%2BiyHiinQEsLLqCUOsfU1TxHrPnXruG%2FLJNJz7YL0Kg%2FCQQJXPZyXjEfI%2FnR2fmkKIS49HJxyn3bI9sjAkept1I5hfGpF%2Fz9WdHnXJHiTOjm3sTRqarGKWZDxscW2DTTpSlNRe%2BtxybRx17tLbgRwGuHsb0Gq3zQ9GMGCdQFIuvl%2F%2BMO7x5L8GOqUBdzXoKqvQvD%2FaJV3hev7leuc9NnUSLO39DbQh2%2FdR%2FGN0Xy%2FfZRUIGq6pJ9MduskgzFWvljbErCZ0w67B6PArhlhcXRCGAWpQNe0Fleo8eh9h%2FRHKrXkfqztVLdS%2BWZ1Bgl5PBuVSPB55JGFw3qetg%2FZuiGkvI5uT0cWr8e6js2DDt2WNrJ10Xng2o%2FZwwUgSbQZSp6ntBMuTZS%2F0skL%2FucaXKERH&X-Amz-Signature=13524044aea8ca265376c09251d30e791e895e49cdc9207d1c08da5f9308be8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GD2BNLJ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCICqAKj%2B%2FAzmfi4sqCMIfNWH%2FkPB4guMaaGKD%2FBKDyTMKAiEAqAJXEF%2BgXXbjb%2BPZ3b%2BFr%2Fr0NZk6PeK3tLGVuiwYmmoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKLJjvhD3EuQfhgxiSrcA97sCVctwqm3e6iCTixXKdh5h13rg9je7k9uArwVaP6CVxQrUJEHRwcLUtx6KqCd3glM2ubnWtvHRA0vuekCh9bb9VjoI%2FEqsPYIByTOJsVu9q50aAbk%2FyTVchJtFNf4JE4EuWUX2L312tEp0GGJQMXj3AQhgVs881lN2NhuDy36ijwDh4uJ%2FiU4N4jJnzWL0IqRtz%2F%2BIcvyeVc5nObgItUS3kmRWVlWQgk%2FEnJZZRgObsjmmkquhRpm7DWyZ1jQQkh9Cu3LHtt0WCVsjvSrcVEE%2BoCMLMHEwc6BJ0tpgCi0IER6Bh0IFtDMiYkxmTEq3Ius76G9jkSjXhkZ8s1P5DrgIk4X76n7wnRWo0Kg%2F4WbFVF4mW1k%2Bpm4wLEzSYCOp73XlYQ9lyinJ92aR5dw1Gl%2Bohjw1S8bBft8PcDA1mT6jeqmlgnouo9SS69of16EKxgkt2KKuH%2BV6JB%2BiyHiinQEsLLqCUOsfU1TxHrPnXruG%2FLJNJz7YL0Kg%2FCQQJXPZyXjEfI%2FnR2fmkKIS49HJxyn3bI9sjAkept1I5hfGpF%2Fz9WdHnXJHiTOjm3sTRqarGKWZDxscW2DTTpSlNRe%2BtxybRx17tLbgRwGuHsb0Gq3zQ9GMGCdQFIuvl%2F%2BMO7x5L8GOqUBdzXoKqvQvD%2FaJV3hev7leuc9NnUSLO39DbQh2%2FdR%2FGN0Xy%2FfZRUIGq6pJ9MduskgzFWvljbErCZ0w67B6PArhlhcXRCGAWpQNe0Fleo8eh9h%2FRHKrXkfqztVLdS%2BWZ1Bgl5PBuVSPB55JGFw3qetg%2FZuiGkvI5uT0cWr8e6js2DDt2WNrJ10Xng2o%2FZwwUgSbQZSp6ntBMuTZS%2F0skL%2FucaXKERH&X-Amz-Signature=d4461151233c21999aad7077ad42e45f74354fef063e322ec895cfb95e5b81f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
