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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQLFP2X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDitCEvS%2F0H64tLaEWItLIFBZeKY69ypoXitQjd0OSPFQIhANRZWxgvO0a8JxvlJ7veZKwE1Kax3W9U7idbXTsLqFDqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbIgXGi3eMCqTnd1kq3ANo94om6EXdwBa0l0IQnYM5Gwu0rl1UKfqz%2Fz6I2Ax2%2BCbGQZ9RZ07pIUizL4uekToFEj8e4UIx5uM1XcAxniG5NRXmRq%2BwXW%2BC5AxydjtzvEVdfBTQxMQuyStypbyTKh6%2F1h2EiWQMv2u4NDDLV%2F2wJ4E5oKBPrQVVgrzxJtgqy%2FhZ2zZ6XOrBf2ePEvoGxQwkHJ2zrbP0M63aBj37vxlT%2B%2BzStd6apqgCNxgbIxZ%2BbzQFfKz%2FL8Fj063esiokzj9%2BiqkND22OTo6WUjzFVaDNuqdIBtvBzzEFd9da4MJGeAnYLY%2FxbkHIM9kdM9kG1dSfSqzUgZaYNXRrkV%2Bs3BBZK0eDbsf1wq2e5N5c5pKI5fsG7X0vTZIll9%2BfXblf0gBo2dKhHKY6vTsPVjrVbcENKhNAj2PfkvVUjcmB1O%2BNyYIcvyRMMRfNHIMRYxiFXUaDnZMb5BCbQN4ZJBrfeLXOa6ytmgAFMBpKlBZHELwi2C9SmEC05KR0WbOrGV3p8%2FFHFGqHHo2PawOTbHa7JGarMktZIZo5cKm3XHLjS3CiLfnwSlfa48gHpQzpxQmq4qyYzFbEh92WcF3v%2FULmLKXUciyDMvK2j3%2FVQ%2FDOA570EZd2qLPf08tOvC38cjCl68fABjqkAfXgbGgsL%2F0f9uZMSoD7ZyWcH7CyNFW%2FJokzW788JVK1qy549yImY0IKgl3%2FXSf%2B4cpVpdmazrpm01W%2BzOfKLJt5SQVvh6D23eUObsYPSOCGPbqR9daanuMEFAMRC%2BuaSGPgttcn36W%2BdbnBTt94UGrGPTkMLTv0YuY70mbfWnknGdTU2hG6ihisT4bf5yEBHgiRAWVyRX3qJqZVTw6fZmUHf8WX&X-Amz-Signature=1224e21ef5b0024f62e576b92e745e577023d836b6a0390f8430ee873a98c067&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQLFP2X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDitCEvS%2F0H64tLaEWItLIFBZeKY69ypoXitQjd0OSPFQIhANRZWxgvO0a8JxvlJ7veZKwE1Kax3W9U7idbXTsLqFDqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbIgXGi3eMCqTnd1kq3ANo94om6EXdwBa0l0IQnYM5Gwu0rl1UKfqz%2Fz6I2Ax2%2BCbGQZ9RZ07pIUizL4uekToFEj8e4UIx5uM1XcAxniG5NRXmRq%2BwXW%2BC5AxydjtzvEVdfBTQxMQuyStypbyTKh6%2F1h2EiWQMv2u4NDDLV%2F2wJ4E5oKBPrQVVgrzxJtgqy%2FhZ2zZ6XOrBf2ePEvoGxQwkHJ2zrbP0M63aBj37vxlT%2B%2BzStd6apqgCNxgbIxZ%2BbzQFfKz%2FL8Fj063esiokzj9%2BiqkND22OTo6WUjzFVaDNuqdIBtvBzzEFd9da4MJGeAnYLY%2FxbkHIM9kdM9kG1dSfSqzUgZaYNXRrkV%2Bs3BBZK0eDbsf1wq2e5N5c5pKI5fsG7X0vTZIll9%2BfXblf0gBo2dKhHKY6vTsPVjrVbcENKhNAj2PfkvVUjcmB1O%2BNyYIcvyRMMRfNHIMRYxiFXUaDnZMb5BCbQN4ZJBrfeLXOa6ytmgAFMBpKlBZHELwi2C9SmEC05KR0WbOrGV3p8%2FFHFGqHHo2PawOTbHa7JGarMktZIZo5cKm3XHLjS3CiLfnwSlfa48gHpQzpxQmq4qyYzFbEh92WcF3v%2FULmLKXUciyDMvK2j3%2FVQ%2FDOA570EZd2qLPf08tOvC38cjCl68fABjqkAfXgbGgsL%2F0f9uZMSoD7ZyWcH7CyNFW%2FJokzW788JVK1qy549yImY0IKgl3%2FXSf%2B4cpVpdmazrpm01W%2BzOfKLJt5SQVvh6D23eUObsYPSOCGPbqR9daanuMEFAMRC%2BuaSGPgttcn36W%2BdbnBTt94UGrGPTkMLTv0YuY70mbfWnknGdTU2hG6ihisT4bf5yEBHgiRAWVyRX3qJqZVTw6fZmUHf8WX&X-Amz-Signature=44f0e44f04cb07858f76795aaf62b60f002e2ededd2114bbc31a9d8cf453e51a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQLFP2X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDitCEvS%2F0H64tLaEWItLIFBZeKY69ypoXitQjd0OSPFQIhANRZWxgvO0a8JxvlJ7veZKwE1Kax3W9U7idbXTsLqFDqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbIgXGi3eMCqTnd1kq3ANo94om6EXdwBa0l0IQnYM5Gwu0rl1UKfqz%2Fz6I2Ax2%2BCbGQZ9RZ07pIUizL4uekToFEj8e4UIx5uM1XcAxniG5NRXmRq%2BwXW%2BC5AxydjtzvEVdfBTQxMQuyStypbyTKh6%2F1h2EiWQMv2u4NDDLV%2F2wJ4E5oKBPrQVVgrzxJtgqy%2FhZ2zZ6XOrBf2ePEvoGxQwkHJ2zrbP0M63aBj37vxlT%2B%2BzStd6apqgCNxgbIxZ%2BbzQFfKz%2FL8Fj063esiokzj9%2BiqkND22OTo6WUjzFVaDNuqdIBtvBzzEFd9da4MJGeAnYLY%2FxbkHIM9kdM9kG1dSfSqzUgZaYNXRrkV%2Bs3BBZK0eDbsf1wq2e5N5c5pKI5fsG7X0vTZIll9%2BfXblf0gBo2dKhHKY6vTsPVjrVbcENKhNAj2PfkvVUjcmB1O%2BNyYIcvyRMMRfNHIMRYxiFXUaDnZMb5BCbQN4ZJBrfeLXOa6ytmgAFMBpKlBZHELwi2C9SmEC05KR0WbOrGV3p8%2FFHFGqHHo2PawOTbHa7JGarMktZIZo5cKm3XHLjS3CiLfnwSlfa48gHpQzpxQmq4qyYzFbEh92WcF3v%2FULmLKXUciyDMvK2j3%2FVQ%2FDOA570EZd2qLPf08tOvC38cjCl68fABjqkAfXgbGgsL%2F0f9uZMSoD7ZyWcH7CyNFW%2FJokzW788JVK1qy549yImY0IKgl3%2FXSf%2B4cpVpdmazrpm01W%2BzOfKLJt5SQVvh6D23eUObsYPSOCGPbqR9daanuMEFAMRC%2BuaSGPgttcn36W%2BdbnBTt94UGrGPTkMLTv0YuY70mbfWnknGdTU2hG6ihisT4bf5yEBHgiRAWVyRX3qJqZVTw6fZmUHf8WX&X-Amz-Signature=66f745921287a19725b42509a7b552996ba5b37a0b45f050f40edefb7f8acaca&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQLFP2X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDitCEvS%2F0H64tLaEWItLIFBZeKY69ypoXitQjd0OSPFQIhANRZWxgvO0a8JxvlJ7veZKwE1Kax3W9U7idbXTsLqFDqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbIgXGi3eMCqTnd1kq3ANo94om6EXdwBa0l0IQnYM5Gwu0rl1UKfqz%2Fz6I2Ax2%2BCbGQZ9RZ07pIUizL4uekToFEj8e4UIx5uM1XcAxniG5NRXmRq%2BwXW%2BC5AxydjtzvEVdfBTQxMQuyStypbyTKh6%2F1h2EiWQMv2u4NDDLV%2F2wJ4E5oKBPrQVVgrzxJtgqy%2FhZ2zZ6XOrBf2ePEvoGxQwkHJ2zrbP0M63aBj37vxlT%2B%2BzStd6apqgCNxgbIxZ%2BbzQFfKz%2FL8Fj063esiokzj9%2BiqkND22OTo6WUjzFVaDNuqdIBtvBzzEFd9da4MJGeAnYLY%2FxbkHIM9kdM9kG1dSfSqzUgZaYNXRrkV%2Bs3BBZK0eDbsf1wq2e5N5c5pKI5fsG7X0vTZIll9%2BfXblf0gBo2dKhHKY6vTsPVjrVbcENKhNAj2PfkvVUjcmB1O%2BNyYIcvyRMMRfNHIMRYxiFXUaDnZMb5BCbQN4ZJBrfeLXOa6ytmgAFMBpKlBZHELwi2C9SmEC05KR0WbOrGV3p8%2FFHFGqHHo2PawOTbHa7JGarMktZIZo5cKm3XHLjS3CiLfnwSlfa48gHpQzpxQmq4qyYzFbEh92WcF3v%2FULmLKXUciyDMvK2j3%2FVQ%2FDOA570EZd2qLPf08tOvC38cjCl68fABjqkAfXgbGgsL%2F0f9uZMSoD7ZyWcH7CyNFW%2FJokzW788JVK1qy549yImY0IKgl3%2FXSf%2B4cpVpdmazrpm01W%2BzOfKLJt5SQVvh6D23eUObsYPSOCGPbqR9daanuMEFAMRC%2BuaSGPgttcn36W%2BdbnBTt94UGrGPTkMLTv0YuY70mbfWnknGdTU2hG6ihisT4bf5yEBHgiRAWVyRX3qJqZVTw6fZmUHf8WX&X-Amz-Signature=a1f9fda3b7e9ab9fc6c377628f49b2bf47d59ffbb8434e4d12434348495f59e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQLFP2X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDitCEvS%2F0H64tLaEWItLIFBZeKY69ypoXitQjd0OSPFQIhANRZWxgvO0a8JxvlJ7veZKwE1Kax3W9U7idbXTsLqFDqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbIgXGi3eMCqTnd1kq3ANo94om6EXdwBa0l0IQnYM5Gwu0rl1UKfqz%2Fz6I2Ax2%2BCbGQZ9RZ07pIUizL4uekToFEj8e4UIx5uM1XcAxniG5NRXmRq%2BwXW%2BC5AxydjtzvEVdfBTQxMQuyStypbyTKh6%2F1h2EiWQMv2u4NDDLV%2F2wJ4E5oKBPrQVVgrzxJtgqy%2FhZ2zZ6XOrBf2ePEvoGxQwkHJ2zrbP0M63aBj37vxlT%2B%2BzStd6apqgCNxgbIxZ%2BbzQFfKz%2FL8Fj063esiokzj9%2BiqkND22OTo6WUjzFVaDNuqdIBtvBzzEFd9da4MJGeAnYLY%2FxbkHIM9kdM9kG1dSfSqzUgZaYNXRrkV%2Bs3BBZK0eDbsf1wq2e5N5c5pKI5fsG7X0vTZIll9%2BfXblf0gBo2dKhHKY6vTsPVjrVbcENKhNAj2PfkvVUjcmB1O%2BNyYIcvyRMMRfNHIMRYxiFXUaDnZMb5BCbQN4ZJBrfeLXOa6ytmgAFMBpKlBZHELwi2C9SmEC05KR0WbOrGV3p8%2FFHFGqHHo2PawOTbHa7JGarMktZIZo5cKm3XHLjS3CiLfnwSlfa48gHpQzpxQmq4qyYzFbEh92WcF3v%2FULmLKXUciyDMvK2j3%2FVQ%2FDOA570EZd2qLPf08tOvC38cjCl68fABjqkAfXgbGgsL%2F0f9uZMSoD7ZyWcH7CyNFW%2FJokzW788JVK1qy549yImY0IKgl3%2FXSf%2B4cpVpdmazrpm01W%2BzOfKLJt5SQVvh6D23eUObsYPSOCGPbqR9daanuMEFAMRC%2BuaSGPgttcn36W%2BdbnBTt94UGrGPTkMLTv0YuY70mbfWnknGdTU2hG6ihisT4bf5yEBHgiRAWVyRX3qJqZVTw6fZmUHf8WX&X-Amz-Signature=78168640f219362da3891a30b26a3c52bd3a0c6c138b07f31869af4fbd87212f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQLFP2X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDitCEvS%2F0H64tLaEWItLIFBZeKY69ypoXitQjd0OSPFQIhANRZWxgvO0a8JxvlJ7veZKwE1Kax3W9U7idbXTsLqFDqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbIgXGi3eMCqTnd1kq3ANo94om6EXdwBa0l0IQnYM5Gwu0rl1UKfqz%2Fz6I2Ax2%2BCbGQZ9RZ07pIUizL4uekToFEj8e4UIx5uM1XcAxniG5NRXmRq%2BwXW%2BC5AxydjtzvEVdfBTQxMQuyStypbyTKh6%2F1h2EiWQMv2u4NDDLV%2F2wJ4E5oKBPrQVVgrzxJtgqy%2FhZ2zZ6XOrBf2ePEvoGxQwkHJ2zrbP0M63aBj37vxlT%2B%2BzStd6apqgCNxgbIxZ%2BbzQFfKz%2FL8Fj063esiokzj9%2BiqkND22OTo6WUjzFVaDNuqdIBtvBzzEFd9da4MJGeAnYLY%2FxbkHIM9kdM9kG1dSfSqzUgZaYNXRrkV%2Bs3BBZK0eDbsf1wq2e5N5c5pKI5fsG7X0vTZIll9%2BfXblf0gBo2dKhHKY6vTsPVjrVbcENKhNAj2PfkvVUjcmB1O%2BNyYIcvyRMMRfNHIMRYxiFXUaDnZMb5BCbQN4ZJBrfeLXOa6ytmgAFMBpKlBZHELwi2C9SmEC05KR0WbOrGV3p8%2FFHFGqHHo2PawOTbHa7JGarMktZIZo5cKm3XHLjS3CiLfnwSlfa48gHpQzpxQmq4qyYzFbEh92WcF3v%2FULmLKXUciyDMvK2j3%2FVQ%2FDOA570EZd2qLPf08tOvC38cjCl68fABjqkAfXgbGgsL%2F0f9uZMSoD7ZyWcH7CyNFW%2FJokzW788JVK1qy549yImY0IKgl3%2FXSf%2B4cpVpdmazrpm01W%2BzOfKLJt5SQVvh6D23eUObsYPSOCGPbqR9daanuMEFAMRC%2BuaSGPgttcn36W%2BdbnBTt94UGrGPTkMLTv0YuY70mbfWnknGdTU2hG6ihisT4bf5yEBHgiRAWVyRX3qJqZVTw6fZmUHf8WX&X-Amz-Signature=5c2134aca7c4e639ebe8cfb0840aad2b05e15fd01b446863f918bcb57e3e4a75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQLFP2X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDitCEvS%2F0H64tLaEWItLIFBZeKY69ypoXitQjd0OSPFQIhANRZWxgvO0a8JxvlJ7veZKwE1Kax3W9U7idbXTsLqFDqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbIgXGi3eMCqTnd1kq3ANo94om6EXdwBa0l0IQnYM5Gwu0rl1UKfqz%2Fz6I2Ax2%2BCbGQZ9RZ07pIUizL4uekToFEj8e4UIx5uM1XcAxniG5NRXmRq%2BwXW%2BC5AxydjtzvEVdfBTQxMQuyStypbyTKh6%2F1h2EiWQMv2u4NDDLV%2F2wJ4E5oKBPrQVVgrzxJtgqy%2FhZ2zZ6XOrBf2ePEvoGxQwkHJ2zrbP0M63aBj37vxlT%2B%2BzStd6apqgCNxgbIxZ%2BbzQFfKz%2FL8Fj063esiokzj9%2BiqkND22OTo6WUjzFVaDNuqdIBtvBzzEFd9da4MJGeAnYLY%2FxbkHIM9kdM9kG1dSfSqzUgZaYNXRrkV%2Bs3BBZK0eDbsf1wq2e5N5c5pKI5fsG7X0vTZIll9%2BfXblf0gBo2dKhHKY6vTsPVjrVbcENKhNAj2PfkvVUjcmB1O%2BNyYIcvyRMMRfNHIMRYxiFXUaDnZMb5BCbQN4ZJBrfeLXOa6ytmgAFMBpKlBZHELwi2C9SmEC05KR0WbOrGV3p8%2FFHFGqHHo2PawOTbHa7JGarMktZIZo5cKm3XHLjS3CiLfnwSlfa48gHpQzpxQmq4qyYzFbEh92WcF3v%2FULmLKXUciyDMvK2j3%2FVQ%2FDOA570EZd2qLPf08tOvC38cjCl68fABjqkAfXgbGgsL%2F0f9uZMSoD7ZyWcH7CyNFW%2FJokzW788JVK1qy549yImY0IKgl3%2FXSf%2B4cpVpdmazrpm01W%2BzOfKLJt5SQVvh6D23eUObsYPSOCGPbqR9daanuMEFAMRC%2BuaSGPgttcn36W%2BdbnBTt94UGrGPTkMLTv0YuY70mbfWnknGdTU2hG6ihisT4bf5yEBHgiRAWVyRX3qJqZVTw6fZmUHf8WX&X-Amz-Signature=e9124ab942432f1aba5f7541fd4597966787903fb141f29639ba0dd410456490&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNQLFP2X%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDitCEvS%2F0H64tLaEWItLIFBZeKY69ypoXitQjd0OSPFQIhANRZWxgvO0a8JxvlJ7veZKwE1Kax3W9U7idbXTsLqFDqKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbIgXGi3eMCqTnd1kq3ANo94om6EXdwBa0l0IQnYM5Gwu0rl1UKfqz%2Fz6I2Ax2%2BCbGQZ9RZ07pIUizL4uekToFEj8e4UIx5uM1XcAxniG5NRXmRq%2BwXW%2BC5AxydjtzvEVdfBTQxMQuyStypbyTKh6%2F1h2EiWQMv2u4NDDLV%2F2wJ4E5oKBPrQVVgrzxJtgqy%2FhZ2zZ6XOrBf2ePEvoGxQwkHJ2zrbP0M63aBj37vxlT%2B%2BzStd6apqgCNxgbIxZ%2BbzQFfKz%2FL8Fj063esiokzj9%2BiqkND22OTo6WUjzFVaDNuqdIBtvBzzEFd9da4MJGeAnYLY%2FxbkHIM9kdM9kG1dSfSqzUgZaYNXRrkV%2Bs3BBZK0eDbsf1wq2e5N5c5pKI5fsG7X0vTZIll9%2BfXblf0gBo2dKhHKY6vTsPVjrVbcENKhNAj2PfkvVUjcmB1O%2BNyYIcvyRMMRfNHIMRYxiFXUaDnZMb5BCbQN4ZJBrfeLXOa6ytmgAFMBpKlBZHELwi2C9SmEC05KR0WbOrGV3p8%2FFHFGqHHo2PawOTbHa7JGarMktZIZo5cKm3XHLjS3CiLfnwSlfa48gHpQzpxQmq4qyYzFbEh92WcF3v%2FULmLKXUciyDMvK2j3%2FVQ%2FDOA570EZd2qLPf08tOvC38cjCl68fABjqkAfXgbGgsL%2F0f9uZMSoD7ZyWcH7CyNFW%2FJokzW788JVK1qy549yImY0IKgl3%2FXSf%2B4cpVpdmazrpm01W%2BzOfKLJt5SQVvh6D23eUObsYPSOCGPbqR9daanuMEFAMRC%2BuaSGPgttcn36W%2BdbnBTt94UGrGPTkMLTv0YuY70mbfWnknGdTU2hG6ihisT4bf5yEBHgiRAWVyRX3qJqZVTw6fZmUHf8WX&X-Amz-Signature=2652a6ebd669100e50472ccbf90185ff409e6bc473633a7568ac4d1c2d5bbdaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
