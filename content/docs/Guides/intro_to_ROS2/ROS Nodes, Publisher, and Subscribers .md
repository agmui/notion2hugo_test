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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPFTLTJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE7Ja8%2FIclcSgfkmwNW7DJOpWzVnxI05AQXGJxeAvuLcAiBYJ8Y6Rl7QypZPKGuhOU6MEIltrPebSJVIk7PTrQjryir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYgltjue21%2BQRM4WtKtwDFyVmJHNX6%2B%2FqEx%2BCIQMT1zaK%2BYHtAm9%2F2cTbiwEMV7En0Wmpve4wSdRIW8hifOFFTSxlxfaSt1iqkBadjG0JAhzjUgwRd9mFQnuJLLKHV9GlIs7EntPnla6IZVJ3%2BMSTzP8EugS1B3dv%2FTBleWLMplhGSp5m1hpWoC1ZyaflpgOMWfoqENp6YMUcY3vRc3BCy%2FEppFpO%2Bka3UMTEUL9bd2dTBQkfEsgaoXnamUvK2D7fZE4V8Z72VvBJoreN4hwD14CbqKpWe0n3vHCP0EYRSq4ieFMgoKkXzla9DLzmmUgDfkw5WWzoD1xliZXyA5t1XdC9M5Fb9zvwrdljB%2FP%2FBrTVeTgZFhwbwXuk05sgNYuzFotWbsH3E4bEAcGAdrrxR1sS4p1TzR8oVVeGqoAgRPysWh%2Fn9Q0QEJpqCjI3pMJYiB%2Fp9gxunJFUldBvvpSIohE05%2Bu3Zv%2FFH8QWnh0P4%2BWjI7Ug5NWX%2BAcLjgK7hNfa6jrzgV92xKYVWxie2y6C2ds2R5qTiJoxNVKIaNFoD1rFKtb%2FQACn8zZPluu19RApsMsaJRlYiaUWYYu6oHcghMp8pbHHZxYbDafBMdgMMVA1bLCgYyIf5U5Q5nWeZ76NdMg0JQyAFY3Efacw5%2BGuwwY6pgGDsGZNQl5ra3vPNCizmB2YURi%2F%2FEKUefOAFCdBun4QedQPsWrjczfeTq6vQhGwZBZa8l5gakVe0LCxGNll6OSFgpEzi6eg1Xmjz23uHFrxD0HSQmKoUMgQr42AIjN7ikmEF5MjPNMIFM4uoJykEvOua%2BYyyvpPfCaXa%2FpnEtbE0SKPvjrpIbtRTm1GWIY0dpLTULobR4NTEcRYDBtELiKhE8WKQK3o&X-Amz-Signature=d73d7ba6130bcbef4654da31c9b5281be06c4721286138264a142727468c6f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPFTLTJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE7Ja8%2FIclcSgfkmwNW7DJOpWzVnxI05AQXGJxeAvuLcAiBYJ8Y6Rl7QypZPKGuhOU6MEIltrPebSJVIk7PTrQjryir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYgltjue21%2BQRM4WtKtwDFyVmJHNX6%2B%2FqEx%2BCIQMT1zaK%2BYHtAm9%2F2cTbiwEMV7En0Wmpve4wSdRIW8hifOFFTSxlxfaSt1iqkBadjG0JAhzjUgwRd9mFQnuJLLKHV9GlIs7EntPnla6IZVJ3%2BMSTzP8EugS1B3dv%2FTBleWLMplhGSp5m1hpWoC1ZyaflpgOMWfoqENp6YMUcY3vRc3BCy%2FEppFpO%2Bka3UMTEUL9bd2dTBQkfEsgaoXnamUvK2D7fZE4V8Z72VvBJoreN4hwD14CbqKpWe0n3vHCP0EYRSq4ieFMgoKkXzla9DLzmmUgDfkw5WWzoD1xliZXyA5t1XdC9M5Fb9zvwrdljB%2FP%2FBrTVeTgZFhwbwXuk05sgNYuzFotWbsH3E4bEAcGAdrrxR1sS4p1TzR8oVVeGqoAgRPysWh%2Fn9Q0QEJpqCjI3pMJYiB%2Fp9gxunJFUldBvvpSIohE05%2Bu3Zv%2FFH8QWnh0P4%2BWjI7Ug5NWX%2BAcLjgK7hNfa6jrzgV92xKYVWxie2y6C2ds2R5qTiJoxNVKIaNFoD1rFKtb%2FQACn8zZPluu19RApsMsaJRlYiaUWYYu6oHcghMp8pbHHZxYbDafBMdgMMVA1bLCgYyIf5U5Q5nWeZ76NdMg0JQyAFY3Efacw5%2BGuwwY6pgGDsGZNQl5ra3vPNCizmB2YURi%2F%2FEKUefOAFCdBun4QedQPsWrjczfeTq6vQhGwZBZa8l5gakVe0LCxGNll6OSFgpEzi6eg1Xmjz23uHFrxD0HSQmKoUMgQr42AIjN7ikmEF5MjPNMIFM4uoJykEvOua%2BYyyvpPfCaXa%2FpnEtbE0SKPvjrpIbtRTm1GWIY0dpLTULobR4NTEcRYDBtELiKhE8WKQK3o&X-Amz-Signature=b13cb8f0c78168d13a1fd84978b12c99b06ee24121d989853b5c6633e90fbfdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPFTLTJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE7Ja8%2FIclcSgfkmwNW7DJOpWzVnxI05AQXGJxeAvuLcAiBYJ8Y6Rl7QypZPKGuhOU6MEIltrPebSJVIk7PTrQjryir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYgltjue21%2BQRM4WtKtwDFyVmJHNX6%2B%2FqEx%2BCIQMT1zaK%2BYHtAm9%2F2cTbiwEMV7En0Wmpve4wSdRIW8hifOFFTSxlxfaSt1iqkBadjG0JAhzjUgwRd9mFQnuJLLKHV9GlIs7EntPnla6IZVJ3%2BMSTzP8EugS1B3dv%2FTBleWLMplhGSp5m1hpWoC1ZyaflpgOMWfoqENp6YMUcY3vRc3BCy%2FEppFpO%2Bka3UMTEUL9bd2dTBQkfEsgaoXnamUvK2D7fZE4V8Z72VvBJoreN4hwD14CbqKpWe0n3vHCP0EYRSq4ieFMgoKkXzla9DLzmmUgDfkw5WWzoD1xliZXyA5t1XdC9M5Fb9zvwrdljB%2FP%2FBrTVeTgZFhwbwXuk05sgNYuzFotWbsH3E4bEAcGAdrrxR1sS4p1TzR8oVVeGqoAgRPysWh%2Fn9Q0QEJpqCjI3pMJYiB%2Fp9gxunJFUldBvvpSIohE05%2Bu3Zv%2FFH8QWnh0P4%2BWjI7Ug5NWX%2BAcLjgK7hNfa6jrzgV92xKYVWxie2y6C2ds2R5qTiJoxNVKIaNFoD1rFKtb%2FQACn8zZPluu19RApsMsaJRlYiaUWYYu6oHcghMp8pbHHZxYbDafBMdgMMVA1bLCgYyIf5U5Q5nWeZ76NdMg0JQyAFY3Efacw5%2BGuwwY6pgGDsGZNQl5ra3vPNCizmB2YURi%2F%2FEKUefOAFCdBun4QedQPsWrjczfeTq6vQhGwZBZa8l5gakVe0LCxGNll6OSFgpEzi6eg1Xmjz23uHFrxD0HSQmKoUMgQr42AIjN7ikmEF5MjPNMIFM4uoJykEvOua%2BYyyvpPfCaXa%2FpnEtbE0SKPvjrpIbtRTm1GWIY0dpLTULobR4NTEcRYDBtELiKhE8WKQK3o&X-Amz-Signature=619075059f88bebad6d02690d944229eb1fc78cabbd80fb29d82fdf6b0331a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPFTLTJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE7Ja8%2FIclcSgfkmwNW7DJOpWzVnxI05AQXGJxeAvuLcAiBYJ8Y6Rl7QypZPKGuhOU6MEIltrPebSJVIk7PTrQjryir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYgltjue21%2BQRM4WtKtwDFyVmJHNX6%2B%2FqEx%2BCIQMT1zaK%2BYHtAm9%2F2cTbiwEMV7En0Wmpve4wSdRIW8hifOFFTSxlxfaSt1iqkBadjG0JAhzjUgwRd9mFQnuJLLKHV9GlIs7EntPnla6IZVJ3%2BMSTzP8EugS1B3dv%2FTBleWLMplhGSp5m1hpWoC1ZyaflpgOMWfoqENp6YMUcY3vRc3BCy%2FEppFpO%2Bka3UMTEUL9bd2dTBQkfEsgaoXnamUvK2D7fZE4V8Z72VvBJoreN4hwD14CbqKpWe0n3vHCP0EYRSq4ieFMgoKkXzla9DLzmmUgDfkw5WWzoD1xliZXyA5t1XdC9M5Fb9zvwrdljB%2FP%2FBrTVeTgZFhwbwXuk05sgNYuzFotWbsH3E4bEAcGAdrrxR1sS4p1TzR8oVVeGqoAgRPysWh%2Fn9Q0QEJpqCjI3pMJYiB%2Fp9gxunJFUldBvvpSIohE05%2Bu3Zv%2FFH8QWnh0P4%2BWjI7Ug5NWX%2BAcLjgK7hNfa6jrzgV92xKYVWxie2y6C2ds2R5qTiJoxNVKIaNFoD1rFKtb%2FQACn8zZPluu19RApsMsaJRlYiaUWYYu6oHcghMp8pbHHZxYbDafBMdgMMVA1bLCgYyIf5U5Q5nWeZ76NdMg0JQyAFY3Efacw5%2BGuwwY6pgGDsGZNQl5ra3vPNCizmB2YURi%2F%2FEKUefOAFCdBun4QedQPsWrjczfeTq6vQhGwZBZa8l5gakVe0LCxGNll6OSFgpEzi6eg1Xmjz23uHFrxD0HSQmKoUMgQr42AIjN7ikmEF5MjPNMIFM4uoJykEvOua%2BYyyvpPfCaXa%2FpnEtbE0SKPvjrpIbtRTm1GWIY0dpLTULobR4NTEcRYDBtELiKhE8WKQK3o&X-Amz-Signature=508fee50ebcf21510af4c30cfe87f094ffaf5b0c0cd7a8cc5f90db42abbcc9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPFTLTJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE7Ja8%2FIclcSgfkmwNW7DJOpWzVnxI05AQXGJxeAvuLcAiBYJ8Y6Rl7QypZPKGuhOU6MEIltrPebSJVIk7PTrQjryir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYgltjue21%2BQRM4WtKtwDFyVmJHNX6%2B%2FqEx%2BCIQMT1zaK%2BYHtAm9%2F2cTbiwEMV7En0Wmpve4wSdRIW8hifOFFTSxlxfaSt1iqkBadjG0JAhzjUgwRd9mFQnuJLLKHV9GlIs7EntPnla6IZVJ3%2BMSTzP8EugS1B3dv%2FTBleWLMplhGSp5m1hpWoC1ZyaflpgOMWfoqENp6YMUcY3vRc3BCy%2FEppFpO%2Bka3UMTEUL9bd2dTBQkfEsgaoXnamUvK2D7fZE4V8Z72VvBJoreN4hwD14CbqKpWe0n3vHCP0EYRSq4ieFMgoKkXzla9DLzmmUgDfkw5WWzoD1xliZXyA5t1XdC9M5Fb9zvwrdljB%2FP%2FBrTVeTgZFhwbwXuk05sgNYuzFotWbsH3E4bEAcGAdrrxR1sS4p1TzR8oVVeGqoAgRPysWh%2Fn9Q0QEJpqCjI3pMJYiB%2Fp9gxunJFUldBvvpSIohE05%2Bu3Zv%2FFH8QWnh0P4%2BWjI7Ug5NWX%2BAcLjgK7hNfa6jrzgV92xKYVWxie2y6C2ds2R5qTiJoxNVKIaNFoD1rFKtb%2FQACn8zZPluu19RApsMsaJRlYiaUWYYu6oHcghMp8pbHHZxYbDafBMdgMMVA1bLCgYyIf5U5Q5nWeZ76NdMg0JQyAFY3Efacw5%2BGuwwY6pgGDsGZNQl5ra3vPNCizmB2YURi%2F%2FEKUefOAFCdBun4QedQPsWrjczfeTq6vQhGwZBZa8l5gakVe0LCxGNll6OSFgpEzi6eg1Xmjz23uHFrxD0HSQmKoUMgQr42AIjN7ikmEF5MjPNMIFM4uoJykEvOua%2BYyyvpPfCaXa%2FpnEtbE0SKPvjrpIbtRTm1GWIY0dpLTULobR4NTEcRYDBtELiKhE8WKQK3o&X-Amz-Signature=44ea05dd7369bdbc01144e9d147c3ee12d8f2689dd46f31aa42867ec6d3cda65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPFTLTJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE7Ja8%2FIclcSgfkmwNW7DJOpWzVnxI05AQXGJxeAvuLcAiBYJ8Y6Rl7QypZPKGuhOU6MEIltrPebSJVIk7PTrQjryir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYgltjue21%2BQRM4WtKtwDFyVmJHNX6%2B%2FqEx%2BCIQMT1zaK%2BYHtAm9%2F2cTbiwEMV7En0Wmpve4wSdRIW8hifOFFTSxlxfaSt1iqkBadjG0JAhzjUgwRd9mFQnuJLLKHV9GlIs7EntPnla6IZVJ3%2BMSTzP8EugS1B3dv%2FTBleWLMplhGSp5m1hpWoC1ZyaflpgOMWfoqENp6YMUcY3vRc3BCy%2FEppFpO%2Bka3UMTEUL9bd2dTBQkfEsgaoXnamUvK2D7fZE4V8Z72VvBJoreN4hwD14CbqKpWe0n3vHCP0EYRSq4ieFMgoKkXzla9DLzmmUgDfkw5WWzoD1xliZXyA5t1XdC9M5Fb9zvwrdljB%2FP%2FBrTVeTgZFhwbwXuk05sgNYuzFotWbsH3E4bEAcGAdrrxR1sS4p1TzR8oVVeGqoAgRPysWh%2Fn9Q0QEJpqCjI3pMJYiB%2Fp9gxunJFUldBvvpSIohE05%2Bu3Zv%2FFH8QWnh0P4%2BWjI7Ug5NWX%2BAcLjgK7hNfa6jrzgV92xKYVWxie2y6C2ds2R5qTiJoxNVKIaNFoD1rFKtb%2FQACn8zZPluu19RApsMsaJRlYiaUWYYu6oHcghMp8pbHHZxYbDafBMdgMMVA1bLCgYyIf5U5Q5nWeZ76NdMg0JQyAFY3Efacw5%2BGuwwY6pgGDsGZNQl5ra3vPNCizmB2YURi%2F%2FEKUefOAFCdBun4QedQPsWrjczfeTq6vQhGwZBZa8l5gakVe0LCxGNll6OSFgpEzi6eg1Xmjz23uHFrxD0HSQmKoUMgQr42AIjN7ikmEF5MjPNMIFM4uoJykEvOua%2BYyyvpPfCaXa%2FpnEtbE0SKPvjrpIbtRTm1GWIY0dpLTULobR4NTEcRYDBtELiKhE8WKQK3o&X-Amz-Signature=a7898a1b4472d7b396519f5df83989fcbe97c6621e8481356236e207b35688aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPFTLTJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE7Ja8%2FIclcSgfkmwNW7DJOpWzVnxI05AQXGJxeAvuLcAiBYJ8Y6Rl7QypZPKGuhOU6MEIltrPebSJVIk7PTrQjryir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYgltjue21%2BQRM4WtKtwDFyVmJHNX6%2B%2FqEx%2BCIQMT1zaK%2BYHtAm9%2F2cTbiwEMV7En0Wmpve4wSdRIW8hifOFFTSxlxfaSt1iqkBadjG0JAhzjUgwRd9mFQnuJLLKHV9GlIs7EntPnla6IZVJ3%2BMSTzP8EugS1B3dv%2FTBleWLMplhGSp5m1hpWoC1ZyaflpgOMWfoqENp6YMUcY3vRc3BCy%2FEppFpO%2Bka3UMTEUL9bd2dTBQkfEsgaoXnamUvK2D7fZE4V8Z72VvBJoreN4hwD14CbqKpWe0n3vHCP0EYRSq4ieFMgoKkXzla9DLzmmUgDfkw5WWzoD1xliZXyA5t1XdC9M5Fb9zvwrdljB%2FP%2FBrTVeTgZFhwbwXuk05sgNYuzFotWbsH3E4bEAcGAdrrxR1sS4p1TzR8oVVeGqoAgRPysWh%2Fn9Q0QEJpqCjI3pMJYiB%2Fp9gxunJFUldBvvpSIohE05%2Bu3Zv%2FFH8QWnh0P4%2BWjI7Ug5NWX%2BAcLjgK7hNfa6jrzgV92xKYVWxie2y6C2ds2R5qTiJoxNVKIaNFoD1rFKtb%2FQACn8zZPluu19RApsMsaJRlYiaUWYYu6oHcghMp8pbHHZxYbDafBMdgMMVA1bLCgYyIf5U5Q5nWeZ76NdMg0JQyAFY3Efacw5%2BGuwwY6pgGDsGZNQl5ra3vPNCizmB2YURi%2F%2FEKUefOAFCdBun4QedQPsWrjczfeTq6vQhGwZBZa8l5gakVe0LCxGNll6OSFgpEzi6eg1Xmjz23uHFrxD0HSQmKoUMgQr42AIjN7ikmEF5MjPNMIFM4uoJykEvOua%2BYyyvpPfCaXa%2FpnEtbE0SKPvjrpIbtRTm1GWIY0dpLTULobR4NTEcRYDBtELiKhE8WKQK3o&X-Amz-Signature=032b4dca7ad14a0718c3fd57b2dbc508fb358f2185c9c3e081c5c926aef596ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPFTLTJ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIE7Ja8%2FIclcSgfkmwNW7DJOpWzVnxI05AQXGJxeAvuLcAiBYJ8Y6Rl7QypZPKGuhOU6MEIltrPebSJVIk7PTrQjryir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMYgltjue21%2BQRM4WtKtwDFyVmJHNX6%2B%2FqEx%2BCIQMT1zaK%2BYHtAm9%2F2cTbiwEMV7En0Wmpve4wSdRIW8hifOFFTSxlxfaSt1iqkBadjG0JAhzjUgwRd9mFQnuJLLKHV9GlIs7EntPnla6IZVJ3%2BMSTzP8EugS1B3dv%2FTBleWLMplhGSp5m1hpWoC1ZyaflpgOMWfoqENp6YMUcY3vRc3BCy%2FEppFpO%2Bka3UMTEUL9bd2dTBQkfEsgaoXnamUvK2D7fZE4V8Z72VvBJoreN4hwD14CbqKpWe0n3vHCP0EYRSq4ieFMgoKkXzla9DLzmmUgDfkw5WWzoD1xliZXyA5t1XdC9M5Fb9zvwrdljB%2FP%2FBrTVeTgZFhwbwXuk05sgNYuzFotWbsH3E4bEAcGAdrrxR1sS4p1TzR8oVVeGqoAgRPysWh%2Fn9Q0QEJpqCjI3pMJYiB%2Fp9gxunJFUldBvvpSIohE05%2Bu3Zv%2FFH8QWnh0P4%2BWjI7Ug5NWX%2BAcLjgK7hNfa6jrzgV92xKYVWxie2y6C2ds2R5qTiJoxNVKIaNFoD1rFKtb%2FQACn8zZPluu19RApsMsaJRlYiaUWYYu6oHcghMp8pbHHZxYbDafBMdgMMVA1bLCgYyIf5U5Q5nWeZ76NdMg0JQyAFY3Efacw5%2BGuwwY6pgGDsGZNQl5ra3vPNCizmB2YURi%2F%2FEKUefOAFCdBun4QedQPsWrjczfeTq6vQhGwZBZa8l5gakVe0LCxGNll6OSFgpEzi6eg1Xmjz23uHFrxD0HSQmKoUMgQr42AIjN7ikmEF5MjPNMIFM4uoJykEvOua%2BYyyvpPfCaXa%2FpnEtbE0SKPvjrpIbtRTm1GWIY0dpLTULobR4NTEcRYDBtELiKhE8WKQK3o&X-Amz-Signature=13350401faccc06feba8c5f2a301f6568f95b310ec0b16cc8110ce47f87cb7d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
