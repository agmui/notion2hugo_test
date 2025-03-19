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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLZHHA7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCX%2FvsUZGPICvxfsSw0TNLsmrNzyTwq6LXe2LjHAqZprgIgAlvS3gVzFrAOThZAcMwLKCRRdwTdpUu2ut%2B%2BD89Pq8Qq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEHp9FacMGEGwjmLTyrcA6gz0%2FWg6Og5sy66MvOdCB5uSrcDdyTi2rCb4ZLcb2%2F2DQuZPClcQXwK%2FxHR%2BHntKUf%2BbG0wr2qdBE9Dd%2BtgwUhoTL5aEqM9R6LSYDNBlVtZuIFtEAbaxLRKZtPBriPnRYviN4mHjlIpBiosJKkur3AtNc2c42I3hm%2BNufEaistj%2FxMIRzgeR00YsY1AnsX2At5%2FjyfxISy8s8vo1ZS9Z5IAksi6sv7ZatI0Re1fxWyYJb%2FbleFMDVvbaC20m2zmdpG0FEMfnBAl22czgu8WmONqDZkdwIvh5jUwgcz9dQ7vRQ9WmTeUJLJw5IeVSeEnWZ4AE80NxIC5GPAMw%2Bzbg1Ys4T1cSMs6kS%2BmVeO1jcDbDhwWm9MSEOv%2FzHSYpbFHAbc%2B75WCiTFRYYQ%2FwVL9u4o2XD%2BFOXfoF0PAxkiBuINclyDGMjIwR%2B7%2BHM1YYYnxHsHOE20RMtOu6ESF2BetKzYQ3x3dBjqXbK7DM3B955igyYj68WYQZnq8fDZFmj8wgsS1tdhZoGcsNSbh2Ugss8YJADAMPFbmo8oCq44QQCaGRM0%2BZW1Yvp9bkSdCTV73Zf9CGRQ4bivmyZWOdp31y%2BT0pGYworg7c8y2uGGp3kIprOYgOwzy9%2BSjIkxYMPXj6b4GOqUB6fDNMV%2BbSPhfvXvQE6Wmx1b17KHzKZqbkG9G6krmjbN3ycd%2FLtfCJwzrsEdizDciWe%2BAPSC%2BJoQGFmL%2BygNgaSkKeHBG%2FVgbbrtsX4dPobJ%2BgTIrn1%2FLMtJBztDORnNlCkjOlgs9nBirux0Eh6WWzHY6iSMxKJoix5YCqPvP88TGjYa8qyfD0Eo94EOVGx36yjZYjvXWR64yqkjx%2BO55TImBDds0&X-Amz-Signature=e95d0a104e2b898ad2b0fa6a3981b7dae433166eb3a9dd07c37fa63593460352&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLZHHA7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCX%2FvsUZGPICvxfsSw0TNLsmrNzyTwq6LXe2LjHAqZprgIgAlvS3gVzFrAOThZAcMwLKCRRdwTdpUu2ut%2B%2BD89Pq8Qq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEHp9FacMGEGwjmLTyrcA6gz0%2FWg6Og5sy66MvOdCB5uSrcDdyTi2rCb4ZLcb2%2F2DQuZPClcQXwK%2FxHR%2BHntKUf%2BbG0wr2qdBE9Dd%2BtgwUhoTL5aEqM9R6LSYDNBlVtZuIFtEAbaxLRKZtPBriPnRYviN4mHjlIpBiosJKkur3AtNc2c42I3hm%2BNufEaistj%2FxMIRzgeR00YsY1AnsX2At5%2FjyfxISy8s8vo1ZS9Z5IAksi6sv7ZatI0Re1fxWyYJb%2FbleFMDVvbaC20m2zmdpG0FEMfnBAl22czgu8WmONqDZkdwIvh5jUwgcz9dQ7vRQ9WmTeUJLJw5IeVSeEnWZ4AE80NxIC5GPAMw%2Bzbg1Ys4T1cSMs6kS%2BmVeO1jcDbDhwWm9MSEOv%2FzHSYpbFHAbc%2B75WCiTFRYYQ%2FwVL9u4o2XD%2BFOXfoF0PAxkiBuINclyDGMjIwR%2B7%2BHM1YYYnxHsHOE20RMtOu6ESF2BetKzYQ3x3dBjqXbK7DM3B955igyYj68WYQZnq8fDZFmj8wgsS1tdhZoGcsNSbh2Ugss8YJADAMPFbmo8oCq44QQCaGRM0%2BZW1Yvp9bkSdCTV73Zf9CGRQ4bivmyZWOdp31y%2BT0pGYworg7c8y2uGGp3kIprOYgOwzy9%2BSjIkxYMPXj6b4GOqUB6fDNMV%2BbSPhfvXvQE6Wmx1b17KHzKZqbkG9G6krmjbN3ycd%2FLtfCJwzrsEdizDciWe%2BAPSC%2BJoQGFmL%2BygNgaSkKeHBG%2FVgbbrtsX4dPobJ%2BgTIrn1%2FLMtJBztDORnNlCkjOlgs9nBirux0Eh6WWzHY6iSMxKJoix5YCqPvP88TGjYa8qyfD0Eo94EOVGx36yjZYjvXWR64yqkjx%2BO55TImBDds0&X-Amz-Signature=de6747f4a14c48aa4249beb04043e82a9edfcb9bd7ccb58d6920285f454e0ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLZHHA7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCX%2FvsUZGPICvxfsSw0TNLsmrNzyTwq6LXe2LjHAqZprgIgAlvS3gVzFrAOThZAcMwLKCRRdwTdpUu2ut%2B%2BD89Pq8Qq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEHp9FacMGEGwjmLTyrcA6gz0%2FWg6Og5sy66MvOdCB5uSrcDdyTi2rCb4ZLcb2%2F2DQuZPClcQXwK%2FxHR%2BHntKUf%2BbG0wr2qdBE9Dd%2BtgwUhoTL5aEqM9R6LSYDNBlVtZuIFtEAbaxLRKZtPBriPnRYviN4mHjlIpBiosJKkur3AtNc2c42I3hm%2BNufEaistj%2FxMIRzgeR00YsY1AnsX2At5%2FjyfxISy8s8vo1ZS9Z5IAksi6sv7ZatI0Re1fxWyYJb%2FbleFMDVvbaC20m2zmdpG0FEMfnBAl22czgu8WmONqDZkdwIvh5jUwgcz9dQ7vRQ9WmTeUJLJw5IeVSeEnWZ4AE80NxIC5GPAMw%2Bzbg1Ys4T1cSMs6kS%2BmVeO1jcDbDhwWm9MSEOv%2FzHSYpbFHAbc%2B75WCiTFRYYQ%2FwVL9u4o2XD%2BFOXfoF0PAxkiBuINclyDGMjIwR%2B7%2BHM1YYYnxHsHOE20RMtOu6ESF2BetKzYQ3x3dBjqXbK7DM3B955igyYj68WYQZnq8fDZFmj8wgsS1tdhZoGcsNSbh2Ugss8YJADAMPFbmo8oCq44QQCaGRM0%2BZW1Yvp9bkSdCTV73Zf9CGRQ4bivmyZWOdp31y%2BT0pGYworg7c8y2uGGp3kIprOYgOwzy9%2BSjIkxYMPXj6b4GOqUB6fDNMV%2BbSPhfvXvQE6Wmx1b17KHzKZqbkG9G6krmjbN3ycd%2FLtfCJwzrsEdizDciWe%2BAPSC%2BJoQGFmL%2BygNgaSkKeHBG%2FVgbbrtsX4dPobJ%2BgTIrn1%2FLMtJBztDORnNlCkjOlgs9nBirux0Eh6WWzHY6iSMxKJoix5YCqPvP88TGjYa8qyfD0Eo94EOVGx36yjZYjvXWR64yqkjx%2BO55TImBDds0&X-Amz-Signature=75ad7c646822f6d69de5a9a91af4030ff3b9867418b3421355838fa751c63962&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLZHHA7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCX%2FvsUZGPICvxfsSw0TNLsmrNzyTwq6LXe2LjHAqZprgIgAlvS3gVzFrAOThZAcMwLKCRRdwTdpUu2ut%2B%2BD89Pq8Qq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEHp9FacMGEGwjmLTyrcA6gz0%2FWg6Og5sy66MvOdCB5uSrcDdyTi2rCb4ZLcb2%2F2DQuZPClcQXwK%2FxHR%2BHntKUf%2BbG0wr2qdBE9Dd%2BtgwUhoTL5aEqM9R6LSYDNBlVtZuIFtEAbaxLRKZtPBriPnRYviN4mHjlIpBiosJKkur3AtNc2c42I3hm%2BNufEaistj%2FxMIRzgeR00YsY1AnsX2At5%2FjyfxISy8s8vo1ZS9Z5IAksi6sv7ZatI0Re1fxWyYJb%2FbleFMDVvbaC20m2zmdpG0FEMfnBAl22czgu8WmONqDZkdwIvh5jUwgcz9dQ7vRQ9WmTeUJLJw5IeVSeEnWZ4AE80NxIC5GPAMw%2Bzbg1Ys4T1cSMs6kS%2BmVeO1jcDbDhwWm9MSEOv%2FzHSYpbFHAbc%2B75WCiTFRYYQ%2FwVL9u4o2XD%2BFOXfoF0PAxkiBuINclyDGMjIwR%2B7%2BHM1YYYnxHsHOE20RMtOu6ESF2BetKzYQ3x3dBjqXbK7DM3B955igyYj68WYQZnq8fDZFmj8wgsS1tdhZoGcsNSbh2Ugss8YJADAMPFbmo8oCq44QQCaGRM0%2BZW1Yvp9bkSdCTV73Zf9CGRQ4bivmyZWOdp31y%2BT0pGYworg7c8y2uGGp3kIprOYgOwzy9%2BSjIkxYMPXj6b4GOqUB6fDNMV%2BbSPhfvXvQE6Wmx1b17KHzKZqbkG9G6krmjbN3ycd%2FLtfCJwzrsEdizDciWe%2BAPSC%2BJoQGFmL%2BygNgaSkKeHBG%2FVgbbrtsX4dPobJ%2BgTIrn1%2FLMtJBztDORnNlCkjOlgs9nBirux0Eh6WWzHY6iSMxKJoix5YCqPvP88TGjYa8qyfD0Eo94EOVGx36yjZYjvXWR64yqkjx%2BO55TImBDds0&X-Amz-Signature=2610d4ed5a1cd0b6e4d9251e72a6d54075ba967653bb8e32c470286ff51f8281&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLZHHA7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCX%2FvsUZGPICvxfsSw0TNLsmrNzyTwq6LXe2LjHAqZprgIgAlvS3gVzFrAOThZAcMwLKCRRdwTdpUu2ut%2B%2BD89Pq8Qq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEHp9FacMGEGwjmLTyrcA6gz0%2FWg6Og5sy66MvOdCB5uSrcDdyTi2rCb4ZLcb2%2F2DQuZPClcQXwK%2FxHR%2BHntKUf%2BbG0wr2qdBE9Dd%2BtgwUhoTL5aEqM9R6LSYDNBlVtZuIFtEAbaxLRKZtPBriPnRYviN4mHjlIpBiosJKkur3AtNc2c42I3hm%2BNufEaistj%2FxMIRzgeR00YsY1AnsX2At5%2FjyfxISy8s8vo1ZS9Z5IAksi6sv7ZatI0Re1fxWyYJb%2FbleFMDVvbaC20m2zmdpG0FEMfnBAl22czgu8WmONqDZkdwIvh5jUwgcz9dQ7vRQ9WmTeUJLJw5IeVSeEnWZ4AE80NxIC5GPAMw%2Bzbg1Ys4T1cSMs6kS%2BmVeO1jcDbDhwWm9MSEOv%2FzHSYpbFHAbc%2B75WCiTFRYYQ%2FwVL9u4o2XD%2BFOXfoF0PAxkiBuINclyDGMjIwR%2B7%2BHM1YYYnxHsHOE20RMtOu6ESF2BetKzYQ3x3dBjqXbK7DM3B955igyYj68WYQZnq8fDZFmj8wgsS1tdhZoGcsNSbh2Ugss8YJADAMPFbmo8oCq44QQCaGRM0%2BZW1Yvp9bkSdCTV73Zf9CGRQ4bivmyZWOdp31y%2BT0pGYworg7c8y2uGGp3kIprOYgOwzy9%2BSjIkxYMPXj6b4GOqUB6fDNMV%2BbSPhfvXvQE6Wmx1b17KHzKZqbkG9G6krmjbN3ycd%2FLtfCJwzrsEdizDciWe%2BAPSC%2BJoQGFmL%2BygNgaSkKeHBG%2FVgbbrtsX4dPobJ%2BgTIrn1%2FLMtJBztDORnNlCkjOlgs9nBirux0Eh6WWzHY6iSMxKJoix5YCqPvP88TGjYa8qyfD0Eo94EOVGx36yjZYjvXWR64yqkjx%2BO55TImBDds0&X-Amz-Signature=df6dab0ed09c16a0ddb602c329559eaeb84230feb1586209e005ab6d36bd7a87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLZHHA7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCX%2FvsUZGPICvxfsSw0TNLsmrNzyTwq6LXe2LjHAqZprgIgAlvS3gVzFrAOThZAcMwLKCRRdwTdpUu2ut%2B%2BD89Pq8Qq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEHp9FacMGEGwjmLTyrcA6gz0%2FWg6Og5sy66MvOdCB5uSrcDdyTi2rCb4ZLcb2%2F2DQuZPClcQXwK%2FxHR%2BHntKUf%2BbG0wr2qdBE9Dd%2BtgwUhoTL5aEqM9R6LSYDNBlVtZuIFtEAbaxLRKZtPBriPnRYviN4mHjlIpBiosJKkur3AtNc2c42I3hm%2BNufEaistj%2FxMIRzgeR00YsY1AnsX2At5%2FjyfxISy8s8vo1ZS9Z5IAksi6sv7ZatI0Re1fxWyYJb%2FbleFMDVvbaC20m2zmdpG0FEMfnBAl22czgu8WmONqDZkdwIvh5jUwgcz9dQ7vRQ9WmTeUJLJw5IeVSeEnWZ4AE80NxIC5GPAMw%2Bzbg1Ys4T1cSMs6kS%2BmVeO1jcDbDhwWm9MSEOv%2FzHSYpbFHAbc%2B75WCiTFRYYQ%2FwVL9u4o2XD%2BFOXfoF0PAxkiBuINclyDGMjIwR%2B7%2BHM1YYYnxHsHOE20RMtOu6ESF2BetKzYQ3x3dBjqXbK7DM3B955igyYj68WYQZnq8fDZFmj8wgsS1tdhZoGcsNSbh2Ugss8YJADAMPFbmo8oCq44QQCaGRM0%2BZW1Yvp9bkSdCTV73Zf9CGRQ4bivmyZWOdp31y%2BT0pGYworg7c8y2uGGp3kIprOYgOwzy9%2BSjIkxYMPXj6b4GOqUB6fDNMV%2BbSPhfvXvQE6Wmx1b17KHzKZqbkG9G6krmjbN3ycd%2FLtfCJwzrsEdizDciWe%2BAPSC%2BJoQGFmL%2BygNgaSkKeHBG%2FVgbbrtsX4dPobJ%2BgTIrn1%2FLMtJBztDORnNlCkjOlgs9nBirux0Eh6WWzHY6iSMxKJoix5YCqPvP88TGjYa8qyfD0Eo94EOVGx36yjZYjvXWR64yqkjx%2BO55TImBDds0&X-Amz-Signature=3b18c321db1bc1be5c4c4f76cf2891d00de58e9c85a9fe3bce15978289edf92c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLZHHA7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCX%2FvsUZGPICvxfsSw0TNLsmrNzyTwq6LXe2LjHAqZprgIgAlvS3gVzFrAOThZAcMwLKCRRdwTdpUu2ut%2B%2BD89Pq8Qq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEHp9FacMGEGwjmLTyrcA6gz0%2FWg6Og5sy66MvOdCB5uSrcDdyTi2rCb4ZLcb2%2F2DQuZPClcQXwK%2FxHR%2BHntKUf%2BbG0wr2qdBE9Dd%2BtgwUhoTL5aEqM9R6LSYDNBlVtZuIFtEAbaxLRKZtPBriPnRYviN4mHjlIpBiosJKkur3AtNc2c42I3hm%2BNufEaistj%2FxMIRzgeR00YsY1AnsX2At5%2FjyfxISy8s8vo1ZS9Z5IAksi6sv7ZatI0Re1fxWyYJb%2FbleFMDVvbaC20m2zmdpG0FEMfnBAl22czgu8WmONqDZkdwIvh5jUwgcz9dQ7vRQ9WmTeUJLJw5IeVSeEnWZ4AE80NxIC5GPAMw%2Bzbg1Ys4T1cSMs6kS%2BmVeO1jcDbDhwWm9MSEOv%2FzHSYpbFHAbc%2B75WCiTFRYYQ%2FwVL9u4o2XD%2BFOXfoF0PAxkiBuINclyDGMjIwR%2B7%2BHM1YYYnxHsHOE20RMtOu6ESF2BetKzYQ3x3dBjqXbK7DM3B955igyYj68WYQZnq8fDZFmj8wgsS1tdhZoGcsNSbh2Ugss8YJADAMPFbmo8oCq44QQCaGRM0%2BZW1Yvp9bkSdCTV73Zf9CGRQ4bivmyZWOdp31y%2BT0pGYworg7c8y2uGGp3kIprOYgOwzy9%2BSjIkxYMPXj6b4GOqUB6fDNMV%2BbSPhfvXvQE6Wmx1b17KHzKZqbkG9G6krmjbN3ycd%2FLtfCJwzrsEdizDciWe%2BAPSC%2BJoQGFmL%2BygNgaSkKeHBG%2FVgbbrtsX4dPobJ%2BgTIrn1%2FLMtJBztDORnNlCkjOlgs9nBirux0Eh6WWzHY6iSMxKJoix5YCqPvP88TGjYa8qyfD0Eo94EOVGx36yjZYjvXWR64yqkjx%2BO55TImBDds0&X-Amz-Signature=369695ad90a3b2c4d7201ef711ba6c7bbf19f69f15066bec0af7b68d6082a160&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGLZHHA7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCX%2FvsUZGPICvxfsSw0TNLsmrNzyTwq6LXe2LjHAqZprgIgAlvS3gVzFrAOThZAcMwLKCRRdwTdpUu2ut%2B%2BD89Pq8Qq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDEHp9FacMGEGwjmLTyrcA6gz0%2FWg6Og5sy66MvOdCB5uSrcDdyTi2rCb4ZLcb2%2F2DQuZPClcQXwK%2FxHR%2BHntKUf%2BbG0wr2qdBE9Dd%2BtgwUhoTL5aEqM9R6LSYDNBlVtZuIFtEAbaxLRKZtPBriPnRYviN4mHjlIpBiosJKkur3AtNc2c42I3hm%2BNufEaistj%2FxMIRzgeR00YsY1AnsX2At5%2FjyfxISy8s8vo1ZS9Z5IAksi6sv7ZatI0Re1fxWyYJb%2FbleFMDVvbaC20m2zmdpG0FEMfnBAl22czgu8WmONqDZkdwIvh5jUwgcz9dQ7vRQ9WmTeUJLJw5IeVSeEnWZ4AE80NxIC5GPAMw%2Bzbg1Ys4T1cSMs6kS%2BmVeO1jcDbDhwWm9MSEOv%2FzHSYpbFHAbc%2B75WCiTFRYYQ%2FwVL9u4o2XD%2BFOXfoF0PAxkiBuINclyDGMjIwR%2B7%2BHM1YYYnxHsHOE20RMtOu6ESF2BetKzYQ3x3dBjqXbK7DM3B955igyYj68WYQZnq8fDZFmj8wgsS1tdhZoGcsNSbh2Ugss8YJADAMPFbmo8oCq44QQCaGRM0%2BZW1Yvp9bkSdCTV73Zf9CGRQ4bivmyZWOdp31y%2BT0pGYworg7c8y2uGGp3kIprOYgOwzy9%2BSjIkxYMPXj6b4GOqUB6fDNMV%2BbSPhfvXvQE6Wmx1b17KHzKZqbkG9G6krmjbN3ycd%2FLtfCJwzrsEdizDciWe%2BAPSC%2BJoQGFmL%2BygNgaSkKeHBG%2FVgbbrtsX4dPobJ%2BgTIrn1%2FLMtJBztDORnNlCkjOlgs9nBirux0Eh6WWzHY6iSMxKJoix5YCqPvP88TGjYa8qyfD0Eo94EOVGx36yjZYjvXWR64yqkjx%2BO55TImBDds0&X-Amz-Signature=922a0222f71f7c7342ce03c6da1ce7633b6647c8e608f57968bc122a08450637&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
