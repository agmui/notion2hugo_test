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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MRQ2U7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeGPmNnde8mQM6O%2FBPotZbIYeJbTV4TGS6MPRE6vdfhQIgekho31cmbk3uYlKAdD%2FC93MoAfLgmqe2EQ529vMe%2BJgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBNKBG1c2yh5pIqjCrcA5TgNNGRddDaCd2XfCwX6xGa6BAM5jGXfucdgZ9e%2FKR7EVNdGMMt7n%2BcsleCpQgzRVJ%2F8pNf%2BKxO87sCREs8JHH1vevYVYLpMqJOhZ3OUjzqcw2HihLHFVtXoczd1r20KRScAv3oNYTj%2B9XpXKJL1SmHLTeKKiGQYmSWAVdEoy6VP0WijoHaWyFuZg7uOBPhZQXWQw2Tlu%2B12dXbI9iuDZAhTyC237bf4DcBpTsgvxJ7JMtjS7x9fW3UBKLFOViJ%2F0ZL8S4GZwNonD6xVZvoNSVARQMeA1JRf9jBvQC5vhtnc3cmx2N7bPeBv4W7A87hW6%2FIQY9bLN5MbHeuCSjmaPKmiaW6fNlN3rJSKWDtTog3uECx1ySqxhqoOS5EzibnEX31TgBHdMlJ1sRIeNZuOEmUc1gNNCOaLLd2uM7CMHxzzVz3qXnrauXLqNXIIasb44n7rFFZuS75msD2CQPmX2KXJGG4Z7w13YyxqppD2B0Vx6QQ1%2Fj4ud0SqcS8Y5l%2BC%2Fi0CVIFPalJ%2BMimkw34PQ6IlKo9SWRNXyprXzg8ZFv2fwRTc005LUoMbi%2F%2FhBJHDEDm%2FTREhrM%2Fv0UeYkicDvZ4anFMeZGCKcFhOPLgTO2aTxVD%2BXxou6GDjLQmMO7f7bwGOqUB4gNlZR31QVh%2FwQ5YXVBlGPa2lPFLcANUjAV8VTF2gWVGDE5RPVlDPzNVUyuXCd8ikAak9Z4xaqhJNfapeWZP2dzC4ExNy5NlFttk3sozwRi%2FWO0bV8tU8i%2BcROQ4pWDB0JAkk85gwSp7FaVMWMyeGfdyy%2BvNF8H4XxW7wtrK9dGFFy6gi43MUoX6z%2BMX%2BjMTLxYbAm1hteZaSng4y9BidnUna4YC&X-Amz-Signature=471a6706ff60980497c4bafc90b3998d866593c8a4c76da470769b6b40d51854&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MRQ2U7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeGPmNnde8mQM6O%2FBPotZbIYeJbTV4TGS6MPRE6vdfhQIgekho31cmbk3uYlKAdD%2FC93MoAfLgmqe2EQ529vMe%2BJgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBNKBG1c2yh5pIqjCrcA5TgNNGRddDaCd2XfCwX6xGa6BAM5jGXfucdgZ9e%2FKR7EVNdGMMt7n%2BcsleCpQgzRVJ%2F8pNf%2BKxO87sCREs8JHH1vevYVYLpMqJOhZ3OUjzqcw2HihLHFVtXoczd1r20KRScAv3oNYTj%2B9XpXKJL1SmHLTeKKiGQYmSWAVdEoy6VP0WijoHaWyFuZg7uOBPhZQXWQw2Tlu%2B12dXbI9iuDZAhTyC237bf4DcBpTsgvxJ7JMtjS7x9fW3UBKLFOViJ%2F0ZL8S4GZwNonD6xVZvoNSVARQMeA1JRf9jBvQC5vhtnc3cmx2N7bPeBv4W7A87hW6%2FIQY9bLN5MbHeuCSjmaPKmiaW6fNlN3rJSKWDtTog3uECx1ySqxhqoOS5EzibnEX31TgBHdMlJ1sRIeNZuOEmUc1gNNCOaLLd2uM7CMHxzzVz3qXnrauXLqNXIIasb44n7rFFZuS75msD2CQPmX2KXJGG4Z7w13YyxqppD2B0Vx6QQ1%2Fj4ud0SqcS8Y5l%2BC%2Fi0CVIFPalJ%2BMimkw34PQ6IlKo9SWRNXyprXzg8ZFv2fwRTc005LUoMbi%2F%2FhBJHDEDm%2FTREhrM%2Fv0UeYkicDvZ4anFMeZGCKcFhOPLgTO2aTxVD%2BXxou6GDjLQmMO7f7bwGOqUB4gNlZR31QVh%2FwQ5YXVBlGPa2lPFLcANUjAV8VTF2gWVGDE5RPVlDPzNVUyuXCd8ikAak9Z4xaqhJNfapeWZP2dzC4ExNy5NlFttk3sozwRi%2FWO0bV8tU8i%2BcROQ4pWDB0JAkk85gwSp7FaVMWMyeGfdyy%2BvNF8H4XxW7wtrK9dGFFy6gi43MUoX6z%2BMX%2BjMTLxYbAm1hteZaSng4y9BidnUna4YC&X-Amz-Signature=1ec841415b03596d8399cd87ed0056aca799108895a593d05c71315ad2f5809c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MRQ2U7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeGPmNnde8mQM6O%2FBPotZbIYeJbTV4TGS6MPRE6vdfhQIgekho31cmbk3uYlKAdD%2FC93MoAfLgmqe2EQ529vMe%2BJgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBNKBG1c2yh5pIqjCrcA5TgNNGRddDaCd2XfCwX6xGa6BAM5jGXfucdgZ9e%2FKR7EVNdGMMt7n%2BcsleCpQgzRVJ%2F8pNf%2BKxO87sCREs8JHH1vevYVYLpMqJOhZ3OUjzqcw2HihLHFVtXoczd1r20KRScAv3oNYTj%2B9XpXKJL1SmHLTeKKiGQYmSWAVdEoy6VP0WijoHaWyFuZg7uOBPhZQXWQw2Tlu%2B12dXbI9iuDZAhTyC237bf4DcBpTsgvxJ7JMtjS7x9fW3UBKLFOViJ%2F0ZL8S4GZwNonD6xVZvoNSVARQMeA1JRf9jBvQC5vhtnc3cmx2N7bPeBv4W7A87hW6%2FIQY9bLN5MbHeuCSjmaPKmiaW6fNlN3rJSKWDtTog3uECx1ySqxhqoOS5EzibnEX31TgBHdMlJ1sRIeNZuOEmUc1gNNCOaLLd2uM7CMHxzzVz3qXnrauXLqNXIIasb44n7rFFZuS75msD2CQPmX2KXJGG4Z7w13YyxqppD2B0Vx6QQ1%2Fj4ud0SqcS8Y5l%2BC%2Fi0CVIFPalJ%2BMimkw34PQ6IlKo9SWRNXyprXzg8ZFv2fwRTc005LUoMbi%2F%2FhBJHDEDm%2FTREhrM%2Fv0UeYkicDvZ4anFMeZGCKcFhOPLgTO2aTxVD%2BXxou6GDjLQmMO7f7bwGOqUB4gNlZR31QVh%2FwQ5YXVBlGPa2lPFLcANUjAV8VTF2gWVGDE5RPVlDPzNVUyuXCd8ikAak9Z4xaqhJNfapeWZP2dzC4ExNy5NlFttk3sozwRi%2FWO0bV8tU8i%2BcROQ4pWDB0JAkk85gwSp7FaVMWMyeGfdyy%2BvNF8H4XxW7wtrK9dGFFy6gi43MUoX6z%2BMX%2BjMTLxYbAm1hteZaSng4y9BidnUna4YC&X-Amz-Signature=2129196a063e7ad5fe080d280a845655143096a2013922c26476ce7aedf79b91&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MRQ2U7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeGPmNnde8mQM6O%2FBPotZbIYeJbTV4TGS6MPRE6vdfhQIgekho31cmbk3uYlKAdD%2FC93MoAfLgmqe2EQ529vMe%2BJgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBNKBG1c2yh5pIqjCrcA5TgNNGRddDaCd2XfCwX6xGa6BAM5jGXfucdgZ9e%2FKR7EVNdGMMt7n%2BcsleCpQgzRVJ%2F8pNf%2BKxO87sCREs8JHH1vevYVYLpMqJOhZ3OUjzqcw2HihLHFVtXoczd1r20KRScAv3oNYTj%2B9XpXKJL1SmHLTeKKiGQYmSWAVdEoy6VP0WijoHaWyFuZg7uOBPhZQXWQw2Tlu%2B12dXbI9iuDZAhTyC237bf4DcBpTsgvxJ7JMtjS7x9fW3UBKLFOViJ%2F0ZL8S4GZwNonD6xVZvoNSVARQMeA1JRf9jBvQC5vhtnc3cmx2N7bPeBv4W7A87hW6%2FIQY9bLN5MbHeuCSjmaPKmiaW6fNlN3rJSKWDtTog3uECx1ySqxhqoOS5EzibnEX31TgBHdMlJ1sRIeNZuOEmUc1gNNCOaLLd2uM7CMHxzzVz3qXnrauXLqNXIIasb44n7rFFZuS75msD2CQPmX2KXJGG4Z7w13YyxqppD2B0Vx6QQ1%2Fj4ud0SqcS8Y5l%2BC%2Fi0CVIFPalJ%2BMimkw34PQ6IlKo9SWRNXyprXzg8ZFv2fwRTc005LUoMbi%2F%2FhBJHDEDm%2FTREhrM%2Fv0UeYkicDvZ4anFMeZGCKcFhOPLgTO2aTxVD%2BXxou6GDjLQmMO7f7bwGOqUB4gNlZR31QVh%2FwQ5YXVBlGPa2lPFLcANUjAV8VTF2gWVGDE5RPVlDPzNVUyuXCd8ikAak9Z4xaqhJNfapeWZP2dzC4ExNy5NlFttk3sozwRi%2FWO0bV8tU8i%2BcROQ4pWDB0JAkk85gwSp7FaVMWMyeGfdyy%2BvNF8H4XxW7wtrK9dGFFy6gi43MUoX6z%2BMX%2BjMTLxYbAm1hteZaSng4y9BidnUna4YC&X-Amz-Signature=353733f090f7dfa34ebd0928d238ee51b2abab72cc697c06e85a94f9621c22d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MRQ2U7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeGPmNnde8mQM6O%2FBPotZbIYeJbTV4TGS6MPRE6vdfhQIgekho31cmbk3uYlKAdD%2FC93MoAfLgmqe2EQ529vMe%2BJgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBNKBG1c2yh5pIqjCrcA5TgNNGRddDaCd2XfCwX6xGa6BAM5jGXfucdgZ9e%2FKR7EVNdGMMt7n%2BcsleCpQgzRVJ%2F8pNf%2BKxO87sCREs8JHH1vevYVYLpMqJOhZ3OUjzqcw2HihLHFVtXoczd1r20KRScAv3oNYTj%2B9XpXKJL1SmHLTeKKiGQYmSWAVdEoy6VP0WijoHaWyFuZg7uOBPhZQXWQw2Tlu%2B12dXbI9iuDZAhTyC237bf4DcBpTsgvxJ7JMtjS7x9fW3UBKLFOViJ%2F0ZL8S4GZwNonD6xVZvoNSVARQMeA1JRf9jBvQC5vhtnc3cmx2N7bPeBv4W7A87hW6%2FIQY9bLN5MbHeuCSjmaPKmiaW6fNlN3rJSKWDtTog3uECx1ySqxhqoOS5EzibnEX31TgBHdMlJ1sRIeNZuOEmUc1gNNCOaLLd2uM7CMHxzzVz3qXnrauXLqNXIIasb44n7rFFZuS75msD2CQPmX2KXJGG4Z7w13YyxqppD2B0Vx6QQ1%2Fj4ud0SqcS8Y5l%2BC%2Fi0CVIFPalJ%2BMimkw34PQ6IlKo9SWRNXyprXzg8ZFv2fwRTc005LUoMbi%2F%2FhBJHDEDm%2FTREhrM%2Fv0UeYkicDvZ4anFMeZGCKcFhOPLgTO2aTxVD%2BXxou6GDjLQmMO7f7bwGOqUB4gNlZR31QVh%2FwQ5YXVBlGPa2lPFLcANUjAV8VTF2gWVGDE5RPVlDPzNVUyuXCd8ikAak9Z4xaqhJNfapeWZP2dzC4ExNy5NlFttk3sozwRi%2FWO0bV8tU8i%2BcROQ4pWDB0JAkk85gwSp7FaVMWMyeGfdyy%2BvNF8H4XxW7wtrK9dGFFy6gi43MUoX6z%2BMX%2BjMTLxYbAm1hteZaSng4y9BidnUna4YC&X-Amz-Signature=705b59f022e7ec8c8bd779d02d5b460f1de36527ed4989118e5736fa7f8a56fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MRQ2U7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeGPmNnde8mQM6O%2FBPotZbIYeJbTV4TGS6MPRE6vdfhQIgekho31cmbk3uYlKAdD%2FC93MoAfLgmqe2EQ529vMe%2BJgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBNKBG1c2yh5pIqjCrcA5TgNNGRddDaCd2XfCwX6xGa6BAM5jGXfucdgZ9e%2FKR7EVNdGMMt7n%2BcsleCpQgzRVJ%2F8pNf%2BKxO87sCREs8JHH1vevYVYLpMqJOhZ3OUjzqcw2HihLHFVtXoczd1r20KRScAv3oNYTj%2B9XpXKJL1SmHLTeKKiGQYmSWAVdEoy6VP0WijoHaWyFuZg7uOBPhZQXWQw2Tlu%2B12dXbI9iuDZAhTyC237bf4DcBpTsgvxJ7JMtjS7x9fW3UBKLFOViJ%2F0ZL8S4GZwNonD6xVZvoNSVARQMeA1JRf9jBvQC5vhtnc3cmx2N7bPeBv4W7A87hW6%2FIQY9bLN5MbHeuCSjmaPKmiaW6fNlN3rJSKWDtTog3uECx1ySqxhqoOS5EzibnEX31TgBHdMlJ1sRIeNZuOEmUc1gNNCOaLLd2uM7CMHxzzVz3qXnrauXLqNXIIasb44n7rFFZuS75msD2CQPmX2KXJGG4Z7w13YyxqppD2B0Vx6QQ1%2Fj4ud0SqcS8Y5l%2BC%2Fi0CVIFPalJ%2BMimkw34PQ6IlKo9SWRNXyprXzg8ZFv2fwRTc005LUoMbi%2F%2FhBJHDEDm%2FTREhrM%2Fv0UeYkicDvZ4anFMeZGCKcFhOPLgTO2aTxVD%2BXxou6GDjLQmMO7f7bwGOqUB4gNlZR31QVh%2FwQ5YXVBlGPa2lPFLcANUjAV8VTF2gWVGDE5RPVlDPzNVUyuXCd8ikAak9Z4xaqhJNfapeWZP2dzC4ExNy5NlFttk3sozwRi%2FWO0bV8tU8i%2BcROQ4pWDB0JAkk85gwSp7FaVMWMyeGfdyy%2BvNF8H4XxW7wtrK9dGFFy6gi43MUoX6z%2BMX%2BjMTLxYbAm1hteZaSng4y9BidnUna4YC&X-Amz-Signature=e1f9d56499ee63b53ccda88c4a2656600d340ab9b83e68f545fad9d92ee4e3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MRQ2U7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeGPmNnde8mQM6O%2FBPotZbIYeJbTV4TGS6MPRE6vdfhQIgekho31cmbk3uYlKAdD%2FC93MoAfLgmqe2EQ529vMe%2BJgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBNKBG1c2yh5pIqjCrcA5TgNNGRddDaCd2XfCwX6xGa6BAM5jGXfucdgZ9e%2FKR7EVNdGMMt7n%2BcsleCpQgzRVJ%2F8pNf%2BKxO87sCREs8JHH1vevYVYLpMqJOhZ3OUjzqcw2HihLHFVtXoczd1r20KRScAv3oNYTj%2B9XpXKJL1SmHLTeKKiGQYmSWAVdEoy6VP0WijoHaWyFuZg7uOBPhZQXWQw2Tlu%2B12dXbI9iuDZAhTyC237bf4DcBpTsgvxJ7JMtjS7x9fW3UBKLFOViJ%2F0ZL8S4GZwNonD6xVZvoNSVARQMeA1JRf9jBvQC5vhtnc3cmx2N7bPeBv4W7A87hW6%2FIQY9bLN5MbHeuCSjmaPKmiaW6fNlN3rJSKWDtTog3uECx1ySqxhqoOS5EzibnEX31TgBHdMlJ1sRIeNZuOEmUc1gNNCOaLLd2uM7CMHxzzVz3qXnrauXLqNXIIasb44n7rFFZuS75msD2CQPmX2KXJGG4Z7w13YyxqppD2B0Vx6QQ1%2Fj4ud0SqcS8Y5l%2BC%2Fi0CVIFPalJ%2BMimkw34PQ6IlKo9SWRNXyprXzg8ZFv2fwRTc005LUoMbi%2F%2FhBJHDEDm%2FTREhrM%2Fv0UeYkicDvZ4anFMeZGCKcFhOPLgTO2aTxVD%2BXxou6GDjLQmMO7f7bwGOqUB4gNlZR31QVh%2FwQ5YXVBlGPa2lPFLcANUjAV8VTF2gWVGDE5RPVlDPzNVUyuXCd8ikAak9Z4xaqhJNfapeWZP2dzC4ExNy5NlFttk3sozwRi%2FWO0bV8tU8i%2BcROQ4pWDB0JAkk85gwSp7FaVMWMyeGfdyy%2BvNF8H4XxW7wtrK9dGFFy6gi43MUoX6z%2BMX%2BjMTLxYbAm1hteZaSng4y9BidnUna4YC&X-Amz-Signature=280be114df0e7d7d24a28f113c841df432f00391020064b26bb83a06382963e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MRQ2U7%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeGPmNnde8mQM6O%2FBPotZbIYeJbTV4TGS6MPRE6vdfhQIgekho31cmbk3uYlKAdD%2FC93MoAfLgmqe2EQ529vMe%2BJgqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBNKBG1c2yh5pIqjCrcA5TgNNGRddDaCd2XfCwX6xGa6BAM5jGXfucdgZ9e%2FKR7EVNdGMMt7n%2BcsleCpQgzRVJ%2F8pNf%2BKxO87sCREs8JHH1vevYVYLpMqJOhZ3OUjzqcw2HihLHFVtXoczd1r20KRScAv3oNYTj%2B9XpXKJL1SmHLTeKKiGQYmSWAVdEoy6VP0WijoHaWyFuZg7uOBPhZQXWQw2Tlu%2B12dXbI9iuDZAhTyC237bf4DcBpTsgvxJ7JMtjS7x9fW3UBKLFOViJ%2F0ZL8S4GZwNonD6xVZvoNSVARQMeA1JRf9jBvQC5vhtnc3cmx2N7bPeBv4W7A87hW6%2FIQY9bLN5MbHeuCSjmaPKmiaW6fNlN3rJSKWDtTog3uECx1ySqxhqoOS5EzibnEX31TgBHdMlJ1sRIeNZuOEmUc1gNNCOaLLd2uM7CMHxzzVz3qXnrauXLqNXIIasb44n7rFFZuS75msD2CQPmX2KXJGG4Z7w13YyxqppD2B0Vx6QQ1%2Fj4ud0SqcS8Y5l%2BC%2Fi0CVIFPalJ%2BMimkw34PQ6IlKo9SWRNXyprXzg8ZFv2fwRTc005LUoMbi%2F%2FhBJHDEDm%2FTREhrM%2Fv0UeYkicDvZ4anFMeZGCKcFhOPLgTO2aTxVD%2BXxou6GDjLQmMO7f7bwGOqUB4gNlZR31QVh%2FwQ5YXVBlGPa2lPFLcANUjAV8VTF2gWVGDE5RPVlDPzNVUyuXCd8ikAak9Z4xaqhJNfapeWZP2dzC4ExNy5NlFttk3sozwRi%2FWO0bV8tU8i%2BcROQ4pWDB0JAkk85gwSp7FaVMWMyeGfdyy%2BvNF8H4XxW7wtrK9dGFFy6gi43MUoX6z%2BMX%2BjMTLxYbAm1hteZaSng4y9BidnUna4YC&X-Amz-Signature=86121aeaf0e84fe823c52a81b83d14015ee1e26b1460eae8304aae3c084ab975&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
