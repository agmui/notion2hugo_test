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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ26MNY2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD07slivPx4Dry22bhb70i0UQMGA5PhU2DVjQucOE4YgQIgOwkiNI5fkOSCDqpEGxyvSIe9EV02v1nvwPwT2dtkpI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBo2FJzi6eozwaPE0ircA9ax2Pb6IuNZ%2FI6s70%2FxLsguLBji1Li42ftt2HJgKpyNmuNZBsI29k16%2BxJdqc%2Bu3%2F4eZoBuWNUAWoQ%2BnEQ3e1sTeFHsSjKiMqlnLoMUT75TAgKtx6Fm7LdI3doSij7x1jRi6Fyc2S%2FR5svRps9TuSG0XkA9tGKTj6Tr6zOzU2m2Q7xzwvrDFjL57N1xvI%2BKnUKKjNmCv%2Bj%2Flw%2BDVd5CRdc9wOal5rOTw1Dc9aZXhCin2AU5GboA39GDY6dwwSkRQLcCaWO08S%2BrhEn1bHANI4nGqV5357P0ib9Ho6GrkEouQ6c3fFa4AbOCaVEb2Nul%2BxuN0l%2FA57kwdHVviIFNDcYsUi%2Fw1cyFybrsbsAB1DsNK4alquGkGesmAkl2E1opszTK4BZuOzIHTyzNTGW4SZ7V5bekCvTfHWhsWpzrfheXDwbPImBvv6nTQI4c6BRTnCtfDNlOrDmmn29ELxuHgM9bcKE0Vmi6vf6VwgGhXktu6WdH%2F0mLyl2yT4BcWuIFaCPzLW71HjtpMIJTSQMaUaPj29pn3PveGW%2F8XPvQjBURlyYrOlBX6tpwdgCmPxYDBekcGkwtJn1%2BqREosvkXNhq9v7LDU0tQ9aWTT3UGboUzeHBFOEqRZZKn71jOMLm7lsQGOqUBfVIy2ZlRSV7JVzyV7zZ%2Bdu1T71ssoz1JBMAn0vD7%2BU90ovCFkhfIK4a%2BCMDndhvF4Z5D6JK%2FeaXbhy3WuoJeJqJ8wdlyPuZ5DLjDK6KmlYWZUkvPbStQqpB4QTwwZHYApCmklXYIKAQuSSS5S9AVgleiJ4rl%2BQO35q93I7ZmHoNdfr%2Fcad%2F3M1RBE4adK7GeMd3TSgkzhKhD9NLVIy%2BP5YY55fO5&X-Amz-Signature=ab6049fa9e2e25f31c3da1dacbee15ab5b6f4648a735b60f782d1aa9630d9754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ26MNY2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD07slivPx4Dry22bhb70i0UQMGA5PhU2DVjQucOE4YgQIgOwkiNI5fkOSCDqpEGxyvSIe9EV02v1nvwPwT2dtkpI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBo2FJzi6eozwaPE0ircA9ax2Pb6IuNZ%2FI6s70%2FxLsguLBji1Li42ftt2HJgKpyNmuNZBsI29k16%2BxJdqc%2Bu3%2F4eZoBuWNUAWoQ%2BnEQ3e1sTeFHsSjKiMqlnLoMUT75TAgKtx6Fm7LdI3doSij7x1jRi6Fyc2S%2FR5svRps9TuSG0XkA9tGKTj6Tr6zOzU2m2Q7xzwvrDFjL57N1xvI%2BKnUKKjNmCv%2Bj%2Flw%2BDVd5CRdc9wOal5rOTw1Dc9aZXhCin2AU5GboA39GDY6dwwSkRQLcCaWO08S%2BrhEn1bHANI4nGqV5357P0ib9Ho6GrkEouQ6c3fFa4AbOCaVEb2Nul%2BxuN0l%2FA57kwdHVviIFNDcYsUi%2Fw1cyFybrsbsAB1DsNK4alquGkGesmAkl2E1opszTK4BZuOzIHTyzNTGW4SZ7V5bekCvTfHWhsWpzrfheXDwbPImBvv6nTQI4c6BRTnCtfDNlOrDmmn29ELxuHgM9bcKE0Vmi6vf6VwgGhXktu6WdH%2F0mLyl2yT4BcWuIFaCPzLW71HjtpMIJTSQMaUaPj29pn3PveGW%2F8XPvQjBURlyYrOlBX6tpwdgCmPxYDBekcGkwtJn1%2BqREosvkXNhq9v7LDU0tQ9aWTT3UGboUzeHBFOEqRZZKn71jOMLm7lsQGOqUBfVIy2ZlRSV7JVzyV7zZ%2Bdu1T71ssoz1JBMAn0vD7%2BU90ovCFkhfIK4a%2BCMDndhvF4Z5D6JK%2FeaXbhy3WuoJeJqJ8wdlyPuZ5DLjDK6KmlYWZUkvPbStQqpB4QTwwZHYApCmklXYIKAQuSSS5S9AVgleiJ4rl%2BQO35q93I7ZmHoNdfr%2Fcad%2F3M1RBE4adK7GeMd3TSgkzhKhD9NLVIy%2BP5YY55fO5&X-Amz-Signature=f007b763e6af61fe6ea1de600fa5d653f1d0f770bf95fbc9d51417f98517c95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ26MNY2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD07slivPx4Dry22bhb70i0UQMGA5PhU2DVjQucOE4YgQIgOwkiNI5fkOSCDqpEGxyvSIe9EV02v1nvwPwT2dtkpI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBo2FJzi6eozwaPE0ircA9ax2Pb6IuNZ%2FI6s70%2FxLsguLBji1Li42ftt2HJgKpyNmuNZBsI29k16%2BxJdqc%2Bu3%2F4eZoBuWNUAWoQ%2BnEQ3e1sTeFHsSjKiMqlnLoMUT75TAgKtx6Fm7LdI3doSij7x1jRi6Fyc2S%2FR5svRps9TuSG0XkA9tGKTj6Tr6zOzU2m2Q7xzwvrDFjL57N1xvI%2BKnUKKjNmCv%2Bj%2Flw%2BDVd5CRdc9wOal5rOTw1Dc9aZXhCin2AU5GboA39GDY6dwwSkRQLcCaWO08S%2BrhEn1bHANI4nGqV5357P0ib9Ho6GrkEouQ6c3fFa4AbOCaVEb2Nul%2BxuN0l%2FA57kwdHVviIFNDcYsUi%2Fw1cyFybrsbsAB1DsNK4alquGkGesmAkl2E1opszTK4BZuOzIHTyzNTGW4SZ7V5bekCvTfHWhsWpzrfheXDwbPImBvv6nTQI4c6BRTnCtfDNlOrDmmn29ELxuHgM9bcKE0Vmi6vf6VwgGhXktu6WdH%2F0mLyl2yT4BcWuIFaCPzLW71HjtpMIJTSQMaUaPj29pn3PveGW%2F8XPvQjBURlyYrOlBX6tpwdgCmPxYDBekcGkwtJn1%2BqREosvkXNhq9v7LDU0tQ9aWTT3UGboUzeHBFOEqRZZKn71jOMLm7lsQGOqUBfVIy2ZlRSV7JVzyV7zZ%2Bdu1T71ssoz1JBMAn0vD7%2BU90ovCFkhfIK4a%2BCMDndhvF4Z5D6JK%2FeaXbhy3WuoJeJqJ8wdlyPuZ5DLjDK6KmlYWZUkvPbStQqpB4QTwwZHYApCmklXYIKAQuSSS5S9AVgleiJ4rl%2BQO35q93I7ZmHoNdfr%2Fcad%2F3M1RBE4adK7GeMd3TSgkzhKhD9NLVIy%2BP5YY55fO5&X-Amz-Signature=07f06d0069cdd0887d69737a63d5d53b5f6bab0f75088ff16d69c81c2b6536c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ26MNY2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD07slivPx4Dry22bhb70i0UQMGA5PhU2DVjQucOE4YgQIgOwkiNI5fkOSCDqpEGxyvSIe9EV02v1nvwPwT2dtkpI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBo2FJzi6eozwaPE0ircA9ax2Pb6IuNZ%2FI6s70%2FxLsguLBji1Li42ftt2HJgKpyNmuNZBsI29k16%2BxJdqc%2Bu3%2F4eZoBuWNUAWoQ%2BnEQ3e1sTeFHsSjKiMqlnLoMUT75TAgKtx6Fm7LdI3doSij7x1jRi6Fyc2S%2FR5svRps9TuSG0XkA9tGKTj6Tr6zOzU2m2Q7xzwvrDFjL57N1xvI%2BKnUKKjNmCv%2Bj%2Flw%2BDVd5CRdc9wOal5rOTw1Dc9aZXhCin2AU5GboA39GDY6dwwSkRQLcCaWO08S%2BrhEn1bHANI4nGqV5357P0ib9Ho6GrkEouQ6c3fFa4AbOCaVEb2Nul%2BxuN0l%2FA57kwdHVviIFNDcYsUi%2Fw1cyFybrsbsAB1DsNK4alquGkGesmAkl2E1opszTK4BZuOzIHTyzNTGW4SZ7V5bekCvTfHWhsWpzrfheXDwbPImBvv6nTQI4c6BRTnCtfDNlOrDmmn29ELxuHgM9bcKE0Vmi6vf6VwgGhXktu6WdH%2F0mLyl2yT4BcWuIFaCPzLW71HjtpMIJTSQMaUaPj29pn3PveGW%2F8XPvQjBURlyYrOlBX6tpwdgCmPxYDBekcGkwtJn1%2BqREosvkXNhq9v7LDU0tQ9aWTT3UGboUzeHBFOEqRZZKn71jOMLm7lsQGOqUBfVIy2ZlRSV7JVzyV7zZ%2Bdu1T71ssoz1JBMAn0vD7%2BU90ovCFkhfIK4a%2BCMDndhvF4Z5D6JK%2FeaXbhy3WuoJeJqJ8wdlyPuZ5DLjDK6KmlYWZUkvPbStQqpB4QTwwZHYApCmklXYIKAQuSSS5S9AVgleiJ4rl%2BQO35q93I7ZmHoNdfr%2Fcad%2F3M1RBE4adK7GeMd3TSgkzhKhD9NLVIy%2BP5YY55fO5&X-Amz-Signature=b39ffde6935de6a68fb8c639384a53fa15ea24e974496113f0535acdaa1212de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ26MNY2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD07slivPx4Dry22bhb70i0UQMGA5PhU2DVjQucOE4YgQIgOwkiNI5fkOSCDqpEGxyvSIe9EV02v1nvwPwT2dtkpI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBo2FJzi6eozwaPE0ircA9ax2Pb6IuNZ%2FI6s70%2FxLsguLBji1Li42ftt2HJgKpyNmuNZBsI29k16%2BxJdqc%2Bu3%2F4eZoBuWNUAWoQ%2BnEQ3e1sTeFHsSjKiMqlnLoMUT75TAgKtx6Fm7LdI3doSij7x1jRi6Fyc2S%2FR5svRps9TuSG0XkA9tGKTj6Tr6zOzU2m2Q7xzwvrDFjL57N1xvI%2BKnUKKjNmCv%2Bj%2Flw%2BDVd5CRdc9wOal5rOTw1Dc9aZXhCin2AU5GboA39GDY6dwwSkRQLcCaWO08S%2BrhEn1bHANI4nGqV5357P0ib9Ho6GrkEouQ6c3fFa4AbOCaVEb2Nul%2BxuN0l%2FA57kwdHVviIFNDcYsUi%2Fw1cyFybrsbsAB1DsNK4alquGkGesmAkl2E1opszTK4BZuOzIHTyzNTGW4SZ7V5bekCvTfHWhsWpzrfheXDwbPImBvv6nTQI4c6BRTnCtfDNlOrDmmn29ELxuHgM9bcKE0Vmi6vf6VwgGhXktu6WdH%2F0mLyl2yT4BcWuIFaCPzLW71HjtpMIJTSQMaUaPj29pn3PveGW%2F8XPvQjBURlyYrOlBX6tpwdgCmPxYDBekcGkwtJn1%2BqREosvkXNhq9v7LDU0tQ9aWTT3UGboUzeHBFOEqRZZKn71jOMLm7lsQGOqUBfVIy2ZlRSV7JVzyV7zZ%2Bdu1T71ssoz1JBMAn0vD7%2BU90ovCFkhfIK4a%2BCMDndhvF4Z5D6JK%2FeaXbhy3WuoJeJqJ8wdlyPuZ5DLjDK6KmlYWZUkvPbStQqpB4QTwwZHYApCmklXYIKAQuSSS5S9AVgleiJ4rl%2BQO35q93I7ZmHoNdfr%2Fcad%2F3M1RBE4adK7GeMd3TSgkzhKhD9NLVIy%2BP5YY55fO5&X-Amz-Signature=e8892cac0d42d332a332511bdcf9a9f793802e606e486b6cafc93aebc302b9f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ26MNY2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD07slivPx4Dry22bhb70i0UQMGA5PhU2DVjQucOE4YgQIgOwkiNI5fkOSCDqpEGxyvSIe9EV02v1nvwPwT2dtkpI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBo2FJzi6eozwaPE0ircA9ax2Pb6IuNZ%2FI6s70%2FxLsguLBji1Li42ftt2HJgKpyNmuNZBsI29k16%2BxJdqc%2Bu3%2F4eZoBuWNUAWoQ%2BnEQ3e1sTeFHsSjKiMqlnLoMUT75TAgKtx6Fm7LdI3doSij7x1jRi6Fyc2S%2FR5svRps9TuSG0XkA9tGKTj6Tr6zOzU2m2Q7xzwvrDFjL57N1xvI%2BKnUKKjNmCv%2Bj%2Flw%2BDVd5CRdc9wOal5rOTw1Dc9aZXhCin2AU5GboA39GDY6dwwSkRQLcCaWO08S%2BrhEn1bHANI4nGqV5357P0ib9Ho6GrkEouQ6c3fFa4AbOCaVEb2Nul%2BxuN0l%2FA57kwdHVviIFNDcYsUi%2Fw1cyFybrsbsAB1DsNK4alquGkGesmAkl2E1opszTK4BZuOzIHTyzNTGW4SZ7V5bekCvTfHWhsWpzrfheXDwbPImBvv6nTQI4c6BRTnCtfDNlOrDmmn29ELxuHgM9bcKE0Vmi6vf6VwgGhXktu6WdH%2F0mLyl2yT4BcWuIFaCPzLW71HjtpMIJTSQMaUaPj29pn3PveGW%2F8XPvQjBURlyYrOlBX6tpwdgCmPxYDBekcGkwtJn1%2BqREosvkXNhq9v7LDU0tQ9aWTT3UGboUzeHBFOEqRZZKn71jOMLm7lsQGOqUBfVIy2ZlRSV7JVzyV7zZ%2Bdu1T71ssoz1JBMAn0vD7%2BU90ovCFkhfIK4a%2BCMDndhvF4Z5D6JK%2FeaXbhy3WuoJeJqJ8wdlyPuZ5DLjDK6KmlYWZUkvPbStQqpB4QTwwZHYApCmklXYIKAQuSSS5S9AVgleiJ4rl%2BQO35q93I7ZmHoNdfr%2Fcad%2F3M1RBE4adK7GeMd3TSgkzhKhD9NLVIy%2BP5YY55fO5&X-Amz-Signature=1c5546ac3030c88992d1c2646742727c1a94a0e544d895b15b348d499a408826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ26MNY2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD07slivPx4Dry22bhb70i0UQMGA5PhU2DVjQucOE4YgQIgOwkiNI5fkOSCDqpEGxyvSIe9EV02v1nvwPwT2dtkpI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBo2FJzi6eozwaPE0ircA9ax2Pb6IuNZ%2FI6s70%2FxLsguLBji1Li42ftt2HJgKpyNmuNZBsI29k16%2BxJdqc%2Bu3%2F4eZoBuWNUAWoQ%2BnEQ3e1sTeFHsSjKiMqlnLoMUT75TAgKtx6Fm7LdI3doSij7x1jRi6Fyc2S%2FR5svRps9TuSG0XkA9tGKTj6Tr6zOzU2m2Q7xzwvrDFjL57N1xvI%2BKnUKKjNmCv%2Bj%2Flw%2BDVd5CRdc9wOal5rOTw1Dc9aZXhCin2AU5GboA39GDY6dwwSkRQLcCaWO08S%2BrhEn1bHANI4nGqV5357P0ib9Ho6GrkEouQ6c3fFa4AbOCaVEb2Nul%2BxuN0l%2FA57kwdHVviIFNDcYsUi%2Fw1cyFybrsbsAB1DsNK4alquGkGesmAkl2E1opszTK4BZuOzIHTyzNTGW4SZ7V5bekCvTfHWhsWpzrfheXDwbPImBvv6nTQI4c6BRTnCtfDNlOrDmmn29ELxuHgM9bcKE0Vmi6vf6VwgGhXktu6WdH%2F0mLyl2yT4BcWuIFaCPzLW71HjtpMIJTSQMaUaPj29pn3PveGW%2F8XPvQjBURlyYrOlBX6tpwdgCmPxYDBekcGkwtJn1%2BqREosvkXNhq9v7LDU0tQ9aWTT3UGboUzeHBFOEqRZZKn71jOMLm7lsQGOqUBfVIy2ZlRSV7JVzyV7zZ%2Bdu1T71ssoz1JBMAn0vD7%2BU90ovCFkhfIK4a%2BCMDndhvF4Z5D6JK%2FeaXbhy3WuoJeJqJ8wdlyPuZ5DLjDK6KmlYWZUkvPbStQqpB4QTwwZHYApCmklXYIKAQuSSS5S9AVgleiJ4rl%2BQO35q93I7ZmHoNdfr%2Fcad%2F3M1RBE4adK7GeMd3TSgkzhKhD9NLVIy%2BP5YY55fO5&X-Amz-Signature=b140f33f8b4ecbabc31ece94eb7fde79e5bb5caa96fde01d3b3b9b2f516d4e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ26MNY2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQD07slivPx4Dry22bhb70i0UQMGA5PhU2DVjQucOE4YgQIgOwkiNI5fkOSCDqpEGxyvSIe9EV02v1nvwPwT2dtkpI4q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBo2FJzi6eozwaPE0ircA9ax2Pb6IuNZ%2FI6s70%2FxLsguLBji1Li42ftt2HJgKpyNmuNZBsI29k16%2BxJdqc%2Bu3%2F4eZoBuWNUAWoQ%2BnEQ3e1sTeFHsSjKiMqlnLoMUT75TAgKtx6Fm7LdI3doSij7x1jRi6Fyc2S%2FR5svRps9TuSG0XkA9tGKTj6Tr6zOzU2m2Q7xzwvrDFjL57N1xvI%2BKnUKKjNmCv%2Bj%2Flw%2BDVd5CRdc9wOal5rOTw1Dc9aZXhCin2AU5GboA39GDY6dwwSkRQLcCaWO08S%2BrhEn1bHANI4nGqV5357P0ib9Ho6GrkEouQ6c3fFa4AbOCaVEb2Nul%2BxuN0l%2FA57kwdHVviIFNDcYsUi%2Fw1cyFybrsbsAB1DsNK4alquGkGesmAkl2E1opszTK4BZuOzIHTyzNTGW4SZ7V5bekCvTfHWhsWpzrfheXDwbPImBvv6nTQI4c6BRTnCtfDNlOrDmmn29ELxuHgM9bcKE0Vmi6vf6VwgGhXktu6WdH%2F0mLyl2yT4BcWuIFaCPzLW71HjtpMIJTSQMaUaPj29pn3PveGW%2F8XPvQjBURlyYrOlBX6tpwdgCmPxYDBekcGkwtJn1%2BqREosvkXNhq9v7LDU0tQ9aWTT3UGboUzeHBFOEqRZZKn71jOMLm7lsQGOqUBfVIy2ZlRSV7JVzyV7zZ%2Bdu1T71ssoz1JBMAn0vD7%2BU90ovCFkhfIK4a%2BCMDndhvF4Z5D6JK%2FeaXbhy3WuoJeJqJ8wdlyPuZ5DLjDK6KmlYWZUkvPbStQqpB4QTwwZHYApCmklXYIKAQuSSS5S9AVgleiJ4rl%2BQO35q93I7ZmHoNdfr%2Fcad%2F3M1RBE4adK7GeMd3TSgkzhKhD9NLVIy%2BP5YY55fO5&X-Amz-Signature=e27db51efbbdc3be78091c8fe3275b269cfe5a89acccb7bc04cc8c81300d7162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
