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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642E6PTE4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFE4qbf5RKAWo%2BlzWYrw2kG6a9UNaAzeYMSj7jmJEr5GAiEAx6DqDHcnXTugUhw4awujSQJwjjgNGZnYLBDfgIfXD7QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEg6pavs80otQgKZqircA6FRRqfj%2FebXiZYrJMR8r1N8BQ90Kb44OsthF7C42%2FbuaqwvD0BmuUHUfz0BRcWM9vLS94uKkMrIHC4tI0AuMySoDqqaNsmxEsXfx5fjC%2F1KRJRPkrs7oXvwyhijzrFTigMG5v1TRqa%2F4%2FIwljGsO%2BF8OWmiS7BMY8uDT2DzarzKIoaO6%2BrFq7dyFicAOUlf2%2FfqsmwYqDvyDEVxKy2NV11ZwpvOJT0voz6kM5wcLtOfY0MIEje3UauaA5ZolKfToCc9z2MjMly75dSN6vioMStqD6MUMqx4YzCAtXR3zCb4BtQUv3oBwPsAQAaBovjLMS5b79jg0HMP1yPWdlgzTcMhI0k901MZnjPri2iFPPTIYPlvsdYMVkSReNci03OHoGDzoPHzHl%2F0ujqe6JxICpY8OBs8bt0S1PNMzdb%2BQDZrqmLaOZBqc%2Fu9MeEF1pN%2B2RfrQEnd0Xa3A5nq6e%2FtedwtNlDl4FIjJ9bJvu9xIzLYB%2FN%2FeZH2BhBF3xatKaIBsk%2BxnUjS%2Bg5NBpCHUjIM2blP0b410Xui41MD2Cv1gj%2FEKXx5foGsTaU7NB5qdceOjCb9lEmBX9qHKOUAt6FBhYhOSvyC2iNhqIc82qvGLuD2Pdc1HsG84tFrM80LMLTe18AGOqUBt90mv5jWrQMcfQJahP9sAUN2Gfq3rrG7XNXep5eNQQQMytu1KZnsHlP47HtXTIc87s9RE2yxQNX4ONcinDHbiwWNNIe19GGisZU2YZ1ckXhls6dRhFPPkZRjHdpnta%2BRr5JjQ8G5kDcQA2NTmcjgtEPYAH6WJyA%2FMZZZ%2FmwDos4SofHpafjXRkqhrf65ELha0tUnTkuCmtunwFHHIinmpA54Q8%2BC&X-Amz-Signature=70f230c42fbd287595703fb1556a24837a5654a0b4467de9dd9bed4d6ee75a17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642E6PTE4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFE4qbf5RKAWo%2BlzWYrw2kG6a9UNaAzeYMSj7jmJEr5GAiEAx6DqDHcnXTugUhw4awujSQJwjjgNGZnYLBDfgIfXD7QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEg6pavs80otQgKZqircA6FRRqfj%2FebXiZYrJMR8r1N8BQ90Kb44OsthF7C42%2FbuaqwvD0BmuUHUfz0BRcWM9vLS94uKkMrIHC4tI0AuMySoDqqaNsmxEsXfx5fjC%2F1KRJRPkrs7oXvwyhijzrFTigMG5v1TRqa%2F4%2FIwljGsO%2BF8OWmiS7BMY8uDT2DzarzKIoaO6%2BrFq7dyFicAOUlf2%2FfqsmwYqDvyDEVxKy2NV11ZwpvOJT0voz6kM5wcLtOfY0MIEje3UauaA5ZolKfToCc9z2MjMly75dSN6vioMStqD6MUMqx4YzCAtXR3zCb4BtQUv3oBwPsAQAaBovjLMS5b79jg0HMP1yPWdlgzTcMhI0k901MZnjPri2iFPPTIYPlvsdYMVkSReNci03OHoGDzoPHzHl%2F0ujqe6JxICpY8OBs8bt0S1PNMzdb%2BQDZrqmLaOZBqc%2Fu9MeEF1pN%2B2RfrQEnd0Xa3A5nq6e%2FtedwtNlDl4FIjJ9bJvu9xIzLYB%2FN%2FeZH2BhBF3xatKaIBsk%2BxnUjS%2Bg5NBpCHUjIM2blP0b410Xui41MD2Cv1gj%2FEKXx5foGsTaU7NB5qdceOjCb9lEmBX9qHKOUAt6FBhYhOSvyC2iNhqIc82qvGLuD2Pdc1HsG84tFrM80LMLTe18AGOqUBt90mv5jWrQMcfQJahP9sAUN2Gfq3rrG7XNXep5eNQQQMytu1KZnsHlP47HtXTIc87s9RE2yxQNX4ONcinDHbiwWNNIe19GGisZU2YZ1ckXhls6dRhFPPkZRjHdpnta%2BRr5JjQ8G5kDcQA2NTmcjgtEPYAH6WJyA%2FMZZZ%2FmwDos4SofHpafjXRkqhrf65ELha0tUnTkuCmtunwFHHIinmpA54Q8%2BC&X-Amz-Signature=98ff25e25ed52269f8dd4461c6d37937cce6c081fe0005418c4feee7d5b6319d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642E6PTE4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFE4qbf5RKAWo%2BlzWYrw2kG6a9UNaAzeYMSj7jmJEr5GAiEAx6DqDHcnXTugUhw4awujSQJwjjgNGZnYLBDfgIfXD7QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEg6pavs80otQgKZqircA6FRRqfj%2FebXiZYrJMR8r1N8BQ90Kb44OsthF7C42%2FbuaqwvD0BmuUHUfz0BRcWM9vLS94uKkMrIHC4tI0AuMySoDqqaNsmxEsXfx5fjC%2F1KRJRPkrs7oXvwyhijzrFTigMG5v1TRqa%2F4%2FIwljGsO%2BF8OWmiS7BMY8uDT2DzarzKIoaO6%2BrFq7dyFicAOUlf2%2FfqsmwYqDvyDEVxKy2NV11ZwpvOJT0voz6kM5wcLtOfY0MIEje3UauaA5ZolKfToCc9z2MjMly75dSN6vioMStqD6MUMqx4YzCAtXR3zCb4BtQUv3oBwPsAQAaBovjLMS5b79jg0HMP1yPWdlgzTcMhI0k901MZnjPri2iFPPTIYPlvsdYMVkSReNci03OHoGDzoPHzHl%2F0ujqe6JxICpY8OBs8bt0S1PNMzdb%2BQDZrqmLaOZBqc%2Fu9MeEF1pN%2B2RfrQEnd0Xa3A5nq6e%2FtedwtNlDl4FIjJ9bJvu9xIzLYB%2FN%2FeZH2BhBF3xatKaIBsk%2BxnUjS%2Bg5NBpCHUjIM2blP0b410Xui41MD2Cv1gj%2FEKXx5foGsTaU7NB5qdceOjCb9lEmBX9qHKOUAt6FBhYhOSvyC2iNhqIc82qvGLuD2Pdc1HsG84tFrM80LMLTe18AGOqUBt90mv5jWrQMcfQJahP9sAUN2Gfq3rrG7XNXep5eNQQQMytu1KZnsHlP47HtXTIc87s9RE2yxQNX4ONcinDHbiwWNNIe19GGisZU2YZ1ckXhls6dRhFPPkZRjHdpnta%2BRr5JjQ8G5kDcQA2NTmcjgtEPYAH6WJyA%2FMZZZ%2FmwDos4SofHpafjXRkqhrf65ELha0tUnTkuCmtunwFHHIinmpA54Q8%2BC&X-Amz-Signature=2659db0b881fa868ed0d88438ec0d53abb0f4795cf0ebc356ed247332a8e9f38&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642E6PTE4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFE4qbf5RKAWo%2BlzWYrw2kG6a9UNaAzeYMSj7jmJEr5GAiEAx6DqDHcnXTugUhw4awujSQJwjjgNGZnYLBDfgIfXD7QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEg6pavs80otQgKZqircA6FRRqfj%2FebXiZYrJMR8r1N8BQ90Kb44OsthF7C42%2FbuaqwvD0BmuUHUfz0BRcWM9vLS94uKkMrIHC4tI0AuMySoDqqaNsmxEsXfx5fjC%2F1KRJRPkrs7oXvwyhijzrFTigMG5v1TRqa%2F4%2FIwljGsO%2BF8OWmiS7BMY8uDT2DzarzKIoaO6%2BrFq7dyFicAOUlf2%2FfqsmwYqDvyDEVxKy2NV11ZwpvOJT0voz6kM5wcLtOfY0MIEje3UauaA5ZolKfToCc9z2MjMly75dSN6vioMStqD6MUMqx4YzCAtXR3zCb4BtQUv3oBwPsAQAaBovjLMS5b79jg0HMP1yPWdlgzTcMhI0k901MZnjPri2iFPPTIYPlvsdYMVkSReNci03OHoGDzoPHzHl%2F0ujqe6JxICpY8OBs8bt0S1PNMzdb%2BQDZrqmLaOZBqc%2Fu9MeEF1pN%2B2RfrQEnd0Xa3A5nq6e%2FtedwtNlDl4FIjJ9bJvu9xIzLYB%2FN%2FeZH2BhBF3xatKaIBsk%2BxnUjS%2Bg5NBpCHUjIM2blP0b410Xui41MD2Cv1gj%2FEKXx5foGsTaU7NB5qdceOjCb9lEmBX9qHKOUAt6FBhYhOSvyC2iNhqIc82qvGLuD2Pdc1HsG84tFrM80LMLTe18AGOqUBt90mv5jWrQMcfQJahP9sAUN2Gfq3rrG7XNXep5eNQQQMytu1KZnsHlP47HtXTIc87s9RE2yxQNX4ONcinDHbiwWNNIe19GGisZU2YZ1ckXhls6dRhFPPkZRjHdpnta%2BRr5JjQ8G5kDcQA2NTmcjgtEPYAH6WJyA%2FMZZZ%2FmwDos4SofHpafjXRkqhrf65ELha0tUnTkuCmtunwFHHIinmpA54Q8%2BC&X-Amz-Signature=0912afa3c3ae975fe654d364345b676fef4995aab25165fd3f998ebed9287ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642E6PTE4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFE4qbf5RKAWo%2BlzWYrw2kG6a9UNaAzeYMSj7jmJEr5GAiEAx6DqDHcnXTugUhw4awujSQJwjjgNGZnYLBDfgIfXD7QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEg6pavs80otQgKZqircA6FRRqfj%2FebXiZYrJMR8r1N8BQ90Kb44OsthF7C42%2FbuaqwvD0BmuUHUfz0BRcWM9vLS94uKkMrIHC4tI0AuMySoDqqaNsmxEsXfx5fjC%2F1KRJRPkrs7oXvwyhijzrFTigMG5v1TRqa%2F4%2FIwljGsO%2BF8OWmiS7BMY8uDT2DzarzKIoaO6%2BrFq7dyFicAOUlf2%2FfqsmwYqDvyDEVxKy2NV11ZwpvOJT0voz6kM5wcLtOfY0MIEje3UauaA5ZolKfToCc9z2MjMly75dSN6vioMStqD6MUMqx4YzCAtXR3zCb4BtQUv3oBwPsAQAaBovjLMS5b79jg0HMP1yPWdlgzTcMhI0k901MZnjPri2iFPPTIYPlvsdYMVkSReNci03OHoGDzoPHzHl%2F0ujqe6JxICpY8OBs8bt0S1PNMzdb%2BQDZrqmLaOZBqc%2Fu9MeEF1pN%2B2RfrQEnd0Xa3A5nq6e%2FtedwtNlDl4FIjJ9bJvu9xIzLYB%2FN%2FeZH2BhBF3xatKaIBsk%2BxnUjS%2Bg5NBpCHUjIM2blP0b410Xui41MD2Cv1gj%2FEKXx5foGsTaU7NB5qdceOjCb9lEmBX9qHKOUAt6FBhYhOSvyC2iNhqIc82qvGLuD2Pdc1HsG84tFrM80LMLTe18AGOqUBt90mv5jWrQMcfQJahP9sAUN2Gfq3rrG7XNXep5eNQQQMytu1KZnsHlP47HtXTIc87s9RE2yxQNX4ONcinDHbiwWNNIe19GGisZU2YZ1ckXhls6dRhFPPkZRjHdpnta%2BRr5JjQ8G5kDcQA2NTmcjgtEPYAH6WJyA%2FMZZZ%2FmwDos4SofHpafjXRkqhrf65ELha0tUnTkuCmtunwFHHIinmpA54Q8%2BC&X-Amz-Signature=d5156d131450ab7de227d3a15a5260b19c3b3ad38eb0d689d0916da4f02bc883&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642E6PTE4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFE4qbf5RKAWo%2BlzWYrw2kG6a9UNaAzeYMSj7jmJEr5GAiEAx6DqDHcnXTugUhw4awujSQJwjjgNGZnYLBDfgIfXD7QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEg6pavs80otQgKZqircA6FRRqfj%2FebXiZYrJMR8r1N8BQ90Kb44OsthF7C42%2FbuaqwvD0BmuUHUfz0BRcWM9vLS94uKkMrIHC4tI0AuMySoDqqaNsmxEsXfx5fjC%2F1KRJRPkrs7oXvwyhijzrFTigMG5v1TRqa%2F4%2FIwljGsO%2BF8OWmiS7BMY8uDT2DzarzKIoaO6%2BrFq7dyFicAOUlf2%2FfqsmwYqDvyDEVxKy2NV11ZwpvOJT0voz6kM5wcLtOfY0MIEje3UauaA5ZolKfToCc9z2MjMly75dSN6vioMStqD6MUMqx4YzCAtXR3zCb4BtQUv3oBwPsAQAaBovjLMS5b79jg0HMP1yPWdlgzTcMhI0k901MZnjPri2iFPPTIYPlvsdYMVkSReNci03OHoGDzoPHzHl%2F0ujqe6JxICpY8OBs8bt0S1PNMzdb%2BQDZrqmLaOZBqc%2Fu9MeEF1pN%2B2RfrQEnd0Xa3A5nq6e%2FtedwtNlDl4FIjJ9bJvu9xIzLYB%2FN%2FeZH2BhBF3xatKaIBsk%2BxnUjS%2Bg5NBpCHUjIM2blP0b410Xui41MD2Cv1gj%2FEKXx5foGsTaU7NB5qdceOjCb9lEmBX9qHKOUAt6FBhYhOSvyC2iNhqIc82qvGLuD2Pdc1HsG84tFrM80LMLTe18AGOqUBt90mv5jWrQMcfQJahP9sAUN2Gfq3rrG7XNXep5eNQQQMytu1KZnsHlP47HtXTIc87s9RE2yxQNX4ONcinDHbiwWNNIe19GGisZU2YZ1ckXhls6dRhFPPkZRjHdpnta%2BRr5JjQ8G5kDcQA2NTmcjgtEPYAH6WJyA%2FMZZZ%2FmwDos4SofHpafjXRkqhrf65ELha0tUnTkuCmtunwFHHIinmpA54Q8%2BC&X-Amz-Signature=8bd6e80baee2b16dd53ae9c43341051f281be6b4df289d1c2014d70d5f664950&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642E6PTE4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFE4qbf5RKAWo%2BlzWYrw2kG6a9UNaAzeYMSj7jmJEr5GAiEAx6DqDHcnXTugUhw4awujSQJwjjgNGZnYLBDfgIfXD7QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEg6pavs80otQgKZqircA6FRRqfj%2FebXiZYrJMR8r1N8BQ90Kb44OsthF7C42%2FbuaqwvD0BmuUHUfz0BRcWM9vLS94uKkMrIHC4tI0AuMySoDqqaNsmxEsXfx5fjC%2F1KRJRPkrs7oXvwyhijzrFTigMG5v1TRqa%2F4%2FIwljGsO%2BF8OWmiS7BMY8uDT2DzarzKIoaO6%2BrFq7dyFicAOUlf2%2FfqsmwYqDvyDEVxKy2NV11ZwpvOJT0voz6kM5wcLtOfY0MIEje3UauaA5ZolKfToCc9z2MjMly75dSN6vioMStqD6MUMqx4YzCAtXR3zCb4BtQUv3oBwPsAQAaBovjLMS5b79jg0HMP1yPWdlgzTcMhI0k901MZnjPri2iFPPTIYPlvsdYMVkSReNci03OHoGDzoPHzHl%2F0ujqe6JxICpY8OBs8bt0S1PNMzdb%2BQDZrqmLaOZBqc%2Fu9MeEF1pN%2B2RfrQEnd0Xa3A5nq6e%2FtedwtNlDl4FIjJ9bJvu9xIzLYB%2FN%2FeZH2BhBF3xatKaIBsk%2BxnUjS%2Bg5NBpCHUjIM2blP0b410Xui41MD2Cv1gj%2FEKXx5foGsTaU7NB5qdceOjCb9lEmBX9qHKOUAt6FBhYhOSvyC2iNhqIc82qvGLuD2Pdc1HsG84tFrM80LMLTe18AGOqUBt90mv5jWrQMcfQJahP9sAUN2Gfq3rrG7XNXep5eNQQQMytu1KZnsHlP47HtXTIc87s9RE2yxQNX4ONcinDHbiwWNNIe19GGisZU2YZ1ckXhls6dRhFPPkZRjHdpnta%2BRr5JjQ8G5kDcQA2NTmcjgtEPYAH6WJyA%2FMZZZ%2FmwDos4SofHpafjXRkqhrf65ELha0tUnTkuCmtunwFHHIinmpA54Q8%2BC&X-Amz-Signature=d677ff8022e91d05148dc55764da8874ecb5e63bfcb48499e39b209aaa76d16a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642E6PTE4%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFE4qbf5RKAWo%2BlzWYrw2kG6a9UNaAzeYMSj7jmJEr5GAiEAx6DqDHcnXTugUhw4awujSQJwjjgNGZnYLBDfgIfXD7QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEg6pavs80otQgKZqircA6FRRqfj%2FebXiZYrJMR8r1N8BQ90Kb44OsthF7C42%2FbuaqwvD0BmuUHUfz0BRcWM9vLS94uKkMrIHC4tI0AuMySoDqqaNsmxEsXfx5fjC%2F1KRJRPkrs7oXvwyhijzrFTigMG5v1TRqa%2F4%2FIwljGsO%2BF8OWmiS7BMY8uDT2DzarzKIoaO6%2BrFq7dyFicAOUlf2%2FfqsmwYqDvyDEVxKy2NV11ZwpvOJT0voz6kM5wcLtOfY0MIEje3UauaA5ZolKfToCc9z2MjMly75dSN6vioMStqD6MUMqx4YzCAtXR3zCb4BtQUv3oBwPsAQAaBovjLMS5b79jg0HMP1yPWdlgzTcMhI0k901MZnjPri2iFPPTIYPlvsdYMVkSReNci03OHoGDzoPHzHl%2F0ujqe6JxICpY8OBs8bt0S1PNMzdb%2BQDZrqmLaOZBqc%2Fu9MeEF1pN%2B2RfrQEnd0Xa3A5nq6e%2FtedwtNlDl4FIjJ9bJvu9xIzLYB%2FN%2FeZH2BhBF3xatKaIBsk%2BxnUjS%2Bg5NBpCHUjIM2blP0b410Xui41MD2Cv1gj%2FEKXx5foGsTaU7NB5qdceOjCb9lEmBX9qHKOUAt6FBhYhOSvyC2iNhqIc82qvGLuD2Pdc1HsG84tFrM80LMLTe18AGOqUBt90mv5jWrQMcfQJahP9sAUN2Gfq3rrG7XNXep5eNQQQMytu1KZnsHlP47HtXTIc87s9RE2yxQNX4ONcinDHbiwWNNIe19GGisZU2YZ1ckXhls6dRhFPPkZRjHdpnta%2BRr5JjQ8G5kDcQA2NTmcjgtEPYAH6WJyA%2FMZZZ%2FmwDos4SofHpafjXRkqhrf65ELha0tUnTkuCmtunwFHHIinmpA54Q8%2BC&X-Amz-Signature=1d56e0b8684334947f5088380620a9dcd48e8f6a1116033b3aa1d84d013a5188&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
