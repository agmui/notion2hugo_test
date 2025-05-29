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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWNYRYD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHP7ktew0380pWIqV4Sceatavou8DcEN0kQTAhnkBG%2BpAiBAk1uA%2FoW8aJfX19NYvk6akuXqVhCORlnMxnp10wOG%2FSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeTemQr84JKfH1oCoKtwDG%2F6ShEOBShmJFQzP3qf5cUm7bu3vI3OLPRuVDLQpsx9WUl%2BcY2Q1Youhjz%2BeqGOeUdRFWEBBdx0kRsT2hI2VA%2BpwqscSU98xNGIzwmYDPftAgZ9w3S3MtbD0lnasw0xZSLDIPTRmyy1Pt%2B02GYIDs4GjJq69xWOEizzC7eU5IM4U2qWWXKoDe%2BO2qFamoOCvtpBeiPU8YBqDpge8PiF5Onvp3Y4%2FM%2B5gFtTMPwEGQgP6FPC2Oe%2FEdGQHhaP9q%2FkaIrG%2B7oGSwPeuZYPkV9t9pQP3CpJ%2BroXYKSC6px9Do5fhSmWks%2BY6sjx%2BLVQ9%2FKBIX3A1riiTPp16DV3n0QhAJQQNARrmh7tHX%2BJObQk3DOdCfFZ%2BRRoaH%2FbSY%2BLJ8koIG6JE6Z1ToRr5SRBsc1wo%2FeX%2BcrMSAX3%2BcndAur6l2BcsmGnCbw0wR1R5swvNgjz%2FB1bZQTeG0BAMnnPij3%2BiwFZpDLgajnGGeej6v8ppWN90SATyw%2B5uXK9ZLPnwjUESUlbYLYzMkwPA7ahlhlSI%2FgU8i9tXpN7qd7AnlovxBKC6v5OzeJokfYfgfTQIGES0h%2FaETwmVENoKykEDZaia5BmRTVxsP6pUdfPzxp1Lh%2B8mTcIUFNIdOT84Cnkwtq%2FfwQY6pgG6uUJeq1K%2BEbSCrHNXzkPMUCQSK4ybsvr0TAYCRW1yWYYa%2FxfOBqCVBh25eLpfjShPaAGX%2BQXB%2BR2kcW%2BZRvpHXQENO2b7B1dZofu0jaahe1e5QVxEvAx0YgE5NRpf3rpfqdkdQf0eIXnOSbaA8iwEuGVxiCCg%2BnQciqsYoglmm1u8kKbcX8C%2F6ZZe3y0%2BPP9WbTJ7ktlfK2M4g9n2aCgTJHYw70sP&X-Amz-Signature=24cf72cd7eccda7d1007b52faea7924690f89925dcd1852aadd990fec0bffe08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWNYRYD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHP7ktew0380pWIqV4Sceatavou8DcEN0kQTAhnkBG%2BpAiBAk1uA%2FoW8aJfX19NYvk6akuXqVhCORlnMxnp10wOG%2FSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeTemQr84JKfH1oCoKtwDG%2F6ShEOBShmJFQzP3qf5cUm7bu3vI3OLPRuVDLQpsx9WUl%2BcY2Q1Youhjz%2BeqGOeUdRFWEBBdx0kRsT2hI2VA%2BpwqscSU98xNGIzwmYDPftAgZ9w3S3MtbD0lnasw0xZSLDIPTRmyy1Pt%2B02GYIDs4GjJq69xWOEizzC7eU5IM4U2qWWXKoDe%2BO2qFamoOCvtpBeiPU8YBqDpge8PiF5Onvp3Y4%2FM%2B5gFtTMPwEGQgP6FPC2Oe%2FEdGQHhaP9q%2FkaIrG%2B7oGSwPeuZYPkV9t9pQP3CpJ%2BroXYKSC6px9Do5fhSmWks%2BY6sjx%2BLVQ9%2FKBIX3A1riiTPp16DV3n0QhAJQQNARrmh7tHX%2BJObQk3DOdCfFZ%2BRRoaH%2FbSY%2BLJ8koIG6JE6Z1ToRr5SRBsc1wo%2FeX%2BcrMSAX3%2BcndAur6l2BcsmGnCbw0wR1R5swvNgjz%2FB1bZQTeG0BAMnnPij3%2BiwFZpDLgajnGGeej6v8ppWN90SATyw%2B5uXK9ZLPnwjUESUlbYLYzMkwPA7ahlhlSI%2FgU8i9tXpN7qd7AnlovxBKC6v5OzeJokfYfgfTQIGES0h%2FaETwmVENoKykEDZaia5BmRTVxsP6pUdfPzxp1Lh%2B8mTcIUFNIdOT84Cnkwtq%2FfwQY6pgG6uUJeq1K%2BEbSCrHNXzkPMUCQSK4ybsvr0TAYCRW1yWYYa%2FxfOBqCVBh25eLpfjShPaAGX%2BQXB%2BR2kcW%2BZRvpHXQENO2b7B1dZofu0jaahe1e5QVxEvAx0YgE5NRpf3rpfqdkdQf0eIXnOSbaA8iwEuGVxiCCg%2BnQciqsYoglmm1u8kKbcX8C%2F6ZZe3y0%2BPP9WbTJ7ktlfK2M4g9n2aCgTJHYw70sP&X-Amz-Signature=2b36631f3321ae855ca166b9a9f59ca833525923ba336163ab7ee871554d5212&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWNYRYD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHP7ktew0380pWIqV4Sceatavou8DcEN0kQTAhnkBG%2BpAiBAk1uA%2FoW8aJfX19NYvk6akuXqVhCORlnMxnp10wOG%2FSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeTemQr84JKfH1oCoKtwDG%2F6ShEOBShmJFQzP3qf5cUm7bu3vI3OLPRuVDLQpsx9WUl%2BcY2Q1Youhjz%2BeqGOeUdRFWEBBdx0kRsT2hI2VA%2BpwqscSU98xNGIzwmYDPftAgZ9w3S3MtbD0lnasw0xZSLDIPTRmyy1Pt%2B02GYIDs4GjJq69xWOEizzC7eU5IM4U2qWWXKoDe%2BO2qFamoOCvtpBeiPU8YBqDpge8PiF5Onvp3Y4%2FM%2B5gFtTMPwEGQgP6FPC2Oe%2FEdGQHhaP9q%2FkaIrG%2B7oGSwPeuZYPkV9t9pQP3CpJ%2BroXYKSC6px9Do5fhSmWks%2BY6sjx%2BLVQ9%2FKBIX3A1riiTPp16DV3n0QhAJQQNARrmh7tHX%2BJObQk3DOdCfFZ%2BRRoaH%2FbSY%2BLJ8koIG6JE6Z1ToRr5SRBsc1wo%2FeX%2BcrMSAX3%2BcndAur6l2BcsmGnCbw0wR1R5swvNgjz%2FB1bZQTeG0BAMnnPij3%2BiwFZpDLgajnGGeej6v8ppWN90SATyw%2B5uXK9ZLPnwjUESUlbYLYzMkwPA7ahlhlSI%2FgU8i9tXpN7qd7AnlovxBKC6v5OzeJokfYfgfTQIGES0h%2FaETwmVENoKykEDZaia5BmRTVxsP6pUdfPzxp1Lh%2B8mTcIUFNIdOT84Cnkwtq%2FfwQY6pgG6uUJeq1K%2BEbSCrHNXzkPMUCQSK4ybsvr0TAYCRW1yWYYa%2FxfOBqCVBh25eLpfjShPaAGX%2BQXB%2BR2kcW%2BZRvpHXQENO2b7B1dZofu0jaahe1e5QVxEvAx0YgE5NRpf3rpfqdkdQf0eIXnOSbaA8iwEuGVxiCCg%2BnQciqsYoglmm1u8kKbcX8C%2F6ZZe3y0%2BPP9WbTJ7ktlfK2M4g9n2aCgTJHYw70sP&X-Amz-Signature=ea1187ae1689d24048e85ed2c02f58493ac69e37b03689531ec87efde4d7e64e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWNYRYD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHP7ktew0380pWIqV4Sceatavou8DcEN0kQTAhnkBG%2BpAiBAk1uA%2FoW8aJfX19NYvk6akuXqVhCORlnMxnp10wOG%2FSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeTemQr84JKfH1oCoKtwDG%2F6ShEOBShmJFQzP3qf5cUm7bu3vI3OLPRuVDLQpsx9WUl%2BcY2Q1Youhjz%2BeqGOeUdRFWEBBdx0kRsT2hI2VA%2BpwqscSU98xNGIzwmYDPftAgZ9w3S3MtbD0lnasw0xZSLDIPTRmyy1Pt%2B02GYIDs4GjJq69xWOEizzC7eU5IM4U2qWWXKoDe%2BO2qFamoOCvtpBeiPU8YBqDpge8PiF5Onvp3Y4%2FM%2B5gFtTMPwEGQgP6FPC2Oe%2FEdGQHhaP9q%2FkaIrG%2B7oGSwPeuZYPkV9t9pQP3CpJ%2BroXYKSC6px9Do5fhSmWks%2BY6sjx%2BLVQ9%2FKBIX3A1riiTPp16DV3n0QhAJQQNARrmh7tHX%2BJObQk3DOdCfFZ%2BRRoaH%2FbSY%2BLJ8koIG6JE6Z1ToRr5SRBsc1wo%2FeX%2BcrMSAX3%2BcndAur6l2BcsmGnCbw0wR1R5swvNgjz%2FB1bZQTeG0BAMnnPij3%2BiwFZpDLgajnGGeej6v8ppWN90SATyw%2B5uXK9ZLPnwjUESUlbYLYzMkwPA7ahlhlSI%2FgU8i9tXpN7qd7AnlovxBKC6v5OzeJokfYfgfTQIGES0h%2FaETwmVENoKykEDZaia5BmRTVxsP6pUdfPzxp1Lh%2B8mTcIUFNIdOT84Cnkwtq%2FfwQY6pgG6uUJeq1K%2BEbSCrHNXzkPMUCQSK4ybsvr0TAYCRW1yWYYa%2FxfOBqCVBh25eLpfjShPaAGX%2BQXB%2BR2kcW%2BZRvpHXQENO2b7B1dZofu0jaahe1e5QVxEvAx0YgE5NRpf3rpfqdkdQf0eIXnOSbaA8iwEuGVxiCCg%2BnQciqsYoglmm1u8kKbcX8C%2F6ZZe3y0%2BPP9WbTJ7ktlfK2M4g9n2aCgTJHYw70sP&X-Amz-Signature=8a4857c6a97af806425037d8a3567d49ca7625cde588e03e1b75f7ddb440df5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWNYRYD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHP7ktew0380pWIqV4Sceatavou8DcEN0kQTAhnkBG%2BpAiBAk1uA%2FoW8aJfX19NYvk6akuXqVhCORlnMxnp10wOG%2FSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeTemQr84JKfH1oCoKtwDG%2F6ShEOBShmJFQzP3qf5cUm7bu3vI3OLPRuVDLQpsx9WUl%2BcY2Q1Youhjz%2BeqGOeUdRFWEBBdx0kRsT2hI2VA%2BpwqscSU98xNGIzwmYDPftAgZ9w3S3MtbD0lnasw0xZSLDIPTRmyy1Pt%2B02GYIDs4GjJq69xWOEizzC7eU5IM4U2qWWXKoDe%2BO2qFamoOCvtpBeiPU8YBqDpge8PiF5Onvp3Y4%2FM%2B5gFtTMPwEGQgP6FPC2Oe%2FEdGQHhaP9q%2FkaIrG%2B7oGSwPeuZYPkV9t9pQP3CpJ%2BroXYKSC6px9Do5fhSmWks%2BY6sjx%2BLVQ9%2FKBIX3A1riiTPp16DV3n0QhAJQQNARrmh7tHX%2BJObQk3DOdCfFZ%2BRRoaH%2FbSY%2BLJ8koIG6JE6Z1ToRr5SRBsc1wo%2FeX%2BcrMSAX3%2BcndAur6l2BcsmGnCbw0wR1R5swvNgjz%2FB1bZQTeG0BAMnnPij3%2BiwFZpDLgajnGGeej6v8ppWN90SATyw%2B5uXK9ZLPnwjUESUlbYLYzMkwPA7ahlhlSI%2FgU8i9tXpN7qd7AnlovxBKC6v5OzeJokfYfgfTQIGES0h%2FaETwmVENoKykEDZaia5BmRTVxsP6pUdfPzxp1Lh%2B8mTcIUFNIdOT84Cnkwtq%2FfwQY6pgG6uUJeq1K%2BEbSCrHNXzkPMUCQSK4ybsvr0TAYCRW1yWYYa%2FxfOBqCVBh25eLpfjShPaAGX%2BQXB%2BR2kcW%2BZRvpHXQENO2b7B1dZofu0jaahe1e5QVxEvAx0YgE5NRpf3rpfqdkdQf0eIXnOSbaA8iwEuGVxiCCg%2BnQciqsYoglmm1u8kKbcX8C%2F6ZZe3y0%2BPP9WbTJ7ktlfK2M4g9n2aCgTJHYw70sP&X-Amz-Signature=f8d20538d8e067fc0a378f2aed604d1d78f7de0ad48b096f47116a7eca848666&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWNYRYD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHP7ktew0380pWIqV4Sceatavou8DcEN0kQTAhnkBG%2BpAiBAk1uA%2FoW8aJfX19NYvk6akuXqVhCORlnMxnp10wOG%2FSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeTemQr84JKfH1oCoKtwDG%2F6ShEOBShmJFQzP3qf5cUm7bu3vI3OLPRuVDLQpsx9WUl%2BcY2Q1Youhjz%2BeqGOeUdRFWEBBdx0kRsT2hI2VA%2BpwqscSU98xNGIzwmYDPftAgZ9w3S3MtbD0lnasw0xZSLDIPTRmyy1Pt%2B02GYIDs4GjJq69xWOEizzC7eU5IM4U2qWWXKoDe%2BO2qFamoOCvtpBeiPU8YBqDpge8PiF5Onvp3Y4%2FM%2B5gFtTMPwEGQgP6FPC2Oe%2FEdGQHhaP9q%2FkaIrG%2B7oGSwPeuZYPkV9t9pQP3CpJ%2BroXYKSC6px9Do5fhSmWks%2BY6sjx%2BLVQ9%2FKBIX3A1riiTPp16DV3n0QhAJQQNARrmh7tHX%2BJObQk3DOdCfFZ%2BRRoaH%2FbSY%2BLJ8koIG6JE6Z1ToRr5SRBsc1wo%2FeX%2BcrMSAX3%2BcndAur6l2BcsmGnCbw0wR1R5swvNgjz%2FB1bZQTeG0BAMnnPij3%2BiwFZpDLgajnGGeej6v8ppWN90SATyw%2B5uXK9ZLPnwjUESUlbYLYzMkwPA7ahlhlSI%2FgU8i9tXpN7qd7AnlovxBKC6v5OzeJokfYfgfTQIGES0h%2FaETwmVENoKykEDZaia5BmRTVxsP6pUdfPzxp1Lh%2B8mTcIUFNIdOT84Cnkwtq%2FfwQY6pgG6uUJeq1K%2BEbSCrHNXzkPMUCQSK4ybsvr0TAYCRW1yWYYa%2FxfOBqCVBh25eLpfjShPaAGX%2BQXB%2BR2kcW%2BZRvpHXQENO2b7B1dZofu0jaahe1e5QVxEvAx0YgE5NRpf3rpfqdkdQf0eIXnOSbaA8iwEuGVxiCCg%2BnQciqsYoglmm1u8kKbcX8C%2F6ZZe3y0%2BPP9WbTJ7ktlfK2M4g9n2aCgTJHYw70sP&X-Amz-Signature=790f58d8baae749803097395fe6c6b493c8b2668ea76c455922586672ed0a36d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWNYRYD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHP7ktew0380pWIqV4Sceatavou8DcEN0kQTAhnkBG%2BpAiBAk1uA%2FoW8aJfX19NYvk6akuXqVhCORlnMxnp10wOG%2FSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeTemQr84JKfH1oCoKtwDG%2F6ShEOBShmJFQzP3qf5cUm7bu3vI3OLPRuVDLQpsx9WUl%2BcY2Q1Youhjz%2BeqGOeUdRFWEBBdx0kRsT2hI2VA%2BpwqscSU98xNGIzwmYDPftAgZ9w3S3MtbD0lnasw0xZSLDIPTRmyy1Pt%2B02GYIDs4GjJq69xWOEizzC7eU5IM4U2qWWXKoDe%2BO2qFamoOCvtpBeiPU8YBqDpge8PiF5Onvp3Y4%2FM%2B5gFtTMPwEGQgP6FPC2Oe%2FEdGQHhaP9q%2FkaIrG%2B7oGSwPeuZYPkV9t9pQP3CpJ%2BroXYKSC6px9Do5fhSmWks%2BY6sjx%2BLVQ9%2FKBIX3A1riiTPp16DV3n0QhAJQQNARrmh7tHX%2BJObQk3DOdCfFZ%2BRRoaH%2FbSY%2BLJ8koIG6JE6Z1ToRr5SRBsc1wo%2FeX%2BcrMSAX3%2BcndAur6l2BcsmGnCbw0wR1R5swvNgjz%2FB1bZQTeG0BAMnnPij3%2BiwFZpDLgajnGGeej6v8ppWN90SATyw%2B5uXK9ZLPnwjUESUlbYLYzMkwPA7ahlhlSI%2FgU8i9tXpN7qd7AnlovxBKC6v5OzeJokfYfgfTQIGES0h%2FaETwmVENoKykEDZaia5BmRTVxsP6pUdfPzxp1Lh%2B8mTcIUFNIdOT84Cnkwtq%2FfwQY6pgG6uUJeq1K%2BEbSCrHNXzkPMUCQSK4ybsvr0TAYCRW1yWYYa%2FxfOBqCVBh25eLpfjShPaAGX%2BQXB%2BR2kcW%2BZRvpHXQENO2b7B1dZofu0jaahe1e5QVxEvAx0YgE5NRpf3rpfqdkdQf0eIXnOSbaA8iwEuGVxiCCg%2BnQciqsYoglmm1u8kKbcX8C%2F6ZZe3y0%2BPP9WbTJ7ktlfK2M4g9n2aCgTJHYw70sP&X-Amz-Signature=ffba79dd36188a8cb06c41ad30ad9f6f5451fd774910cd06fb168d910e37fbdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PWNYRYD%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHP7ktew0380pWIqV4Sceatavou8DcEN0kQTAhnkBG%2BpAiBAk1uA%2FoW8aJfX19NYvk6akuXqVhCORlnMxnp10wOG%2FSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeTemQr84JKfH1oCoKtwDG%2F6ShEOBShmJFQzP3qf5cUm7bu3vI3OLPRuVDLQpsx9WUl%2BcY2Q1Youhjz%2BeqGOeUdRFWEBBdx0kRsT2hI2VA%2BpwqscSU98xNGIzwmYDPftAgZ9w3S3MtbD0lnasw0xZSLDIPTRmyy1Pt%2B02GYIDs4GjJq69xWOEizzC7eU5IM4U2qWWXKoDe%2BO2qFamoOCvtpBeiPU8YBqDpge8PiF5Onvp3Y4%2FM%2B5gFtTMPwEGQgP6FPC2Oe%2FEdGQHhaP9q%2FkaIrG%2B7oGSwPeuZYPkV9t9pQP3CpJ%2BroXYKSC6px9Do5fhSmWks%2BY6sjx%2BLVQ9%2FKBIX3A1riiTPp16DV3n0QhAJQQNARrmh7tHX%2BJObQk3DOdCfFZ%2BRRoaH%2FbSY%2BLJ8koIG6JE6Z1ToRr5SRBsc1wo%2FeX%2BcrMSAX3%2BcndAur6l2BcsmGnCbw0wR1R5swvNgjz%2FB1bZQTeG0BAMnnPij3%2BiwFZpDLgajnGGeej6v8ppWN90SATyw%2B5uXK9ZLPnwjUESUlbYLYzMkwPA7ahlhlSI%2FgU8i9tXpN7qd7AnlovxBKC6v5OzeJokfYfgfTQIGES0h%2FaETwmVENoKykEDZaia5BmRTVxsP6pUdfPzxp1Lh%2B8mTcIUFNIdOT84Cnkwtq%2FfwQY6pgG6uUJeq1K%2BEbSCrHNXzkPMUCQSK4ybsvr0TAYCRW1yWYYa%2FxfOBqCVBh25eLpfjShPaAGX%2BQXB%2BR2kcW%2BZRvpHXQENO2b7B1dZofu0jaahe1e5QVxEvAx0YgE5NRpf3rpfqdkdQf0eIXnOSbaA8iwEuGVxiCCg%2BnQciqsYoglmm1u8kKbcX8C%2F6ZZe3y0%2BPP9WbTJ7ktlfK2M4g9n2aCgTJHYw70sP&X-Amz-Signature=287ae166d501f41c1a41632754b8846876838dc1fe715e608b94c26706c1c606&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
