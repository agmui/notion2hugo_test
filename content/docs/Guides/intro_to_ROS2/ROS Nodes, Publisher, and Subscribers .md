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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZHSYMR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3RWjJioCzx49VygzLrSV9FMRr5DpJQXmOnP7AbXOFugIgbPflJsJ%2Bz416f3x%2Fj%2FC0MaG%2B0Bh%2B163RQsR0C8ewhfoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bew1O1ITET%2FDne0CrcA5ITP9EUiIuR7%2BZPz7xfCau%2BGxxj6QnvsDGxP6TCWs%2FwGXqbE%2FbcqXPJykNvupvK5rEb54tjw39BSbxC%2FxZelsYGiBNdLahutKDyfO7wxG6MVqJ8liDFZ4jm2Vq4PS3%2FOBqR6F7W0moHHFHNeN%2BQ9JQRaPr%2BYogZkJ249WYpqB22UPuGym0VLHcTwCc0J5gbyEq4Pm%2Bq%2BPx2xTA5qEKrqSH8PFTiOZSK%2BWfPz9dn6BKRU2V2qVoE6lxMAC94bjpXosqm%2FH5OlxSwDkbib1sDBUtc%2F6icKSY8ExX%2BYH5FzPdof3Y5gwabHxrpLj7qRu1UW3OIij%2Bcpm2OPJjPeQQJcLICH46VRsq70axdEW3D54%2Bvglh%2F7IkaprHErsGIaRbTR8ERhcGYLiLPlvuZ5Xy%2FRyEkcCuqyJ2v3SEFFhlPmtdTMjCBWTcgU0qirLpaSFIwLAy1G9aALgWHaRAWaL1lxVOtiZu4UxCs9unmDTngnYlS%2FV30WZKfCU5IrKJFhlw9VeE8SmjMLq9J0rqxWvUtv2f%2BnV8eiUY%2BBIKe%2F7k04GTunw7IccdvZXzzMpA%2FsKqgyCf%2FXCoHJURz5TIB3L2YgFgMzlo4guCkEbZd5Oq%2Fi0Al3apxoQVLlUNSozfGMPHd9LwGOqUBb7wvo14aJOwKscT%2BzfY2ik2viqlb4%2B6tqFYnkWyY%2FdZXvzXHTWllmwKycAP34Hq5Zr3fxkyXJe4AOHyNui8nmbFN4Tf1Z1u5%2FJOn4F086upeYeqg6VarrvLzUkeoBx1HBIqIsAAB1udNXptfuj1pKZCpjGRTJGjtaMqvskyoBXkEabKmWKvze5jBmtPgtVUqqM8gvWXJvPRh08dSAyQT9IrN0JyC&X-Amz-Signature=6f4f7ad66a0d3316c6e9e4f79433ac77f404a2c8c9102245b6564eee88de1756&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZHSYMR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3RWjJioCzx49VygzLrSV9FMRr5DpJQXmOnP7AbXOFugIgbPflJsJ%2Bz416f3x%2Fj%2FC0MaG%2B0Bh%2B163RQsR0C8ewhfoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bew1O1ITET%2FDne0CrcA5ITP9EUiIuR7%2BZPz7xfCau%2BGxxj6QnvsDGxP6TCWs%2FwGXqbE%2FbcqXPJykNvupvK5rEb54tjw39BSbxC%2FxZelsYGiBNdLahutKDyfO7wxG6MVqJ8liDFZ4jm2Vq4PS3%2FOBqR6F7W0moHHFHNeN%2BQ9JQRaPr%2BYogZkJ249WYpqB22UPuGym0VLHcTwCc0J5gbyEq4Pm%2Bq%2BPx2xTA5qEKrqSH8PFTiOZSK%2BWfPz9dn6BKRU2V2qVoE6lxMAC94bjpXosqm%2FH5OlxSwDkbib1sDBUtc%2F6icKSY8ExX%2BYH5FzPdof3Y5gwabHxrpLj7qRu1UW3OIij%2Bcpm2OPJjPeQQJcLICH46VRsq70axdEW3D54%2Bvglh%2F7IkaprHErsGIaRbTR8ERhcGYLiLPlvuZ5Xy%2FRyEkcCuqyJ2v3SEFFhlPmtdTMjCBWTcgU0qirLpaSFIwLAy1G9aALgWHaRAWaL1lxVOtiZu4UxCs9unmDTngnYlS%2FV30WZKfCU5IrKJFhlw9VeE8SmjMLq9J0rqxWvUtv2f%2BnV8eiUY%2BBIKe%2F7k04GTunw7IccdvZXzzMpA%2FsKqgyCf%2FXCoHJURz5TIB3L2YgFgMzlo4guCkEbZd5Oq%2Fi0Al3apxoQVLlUNSozfGMPHd9LwGOqUBb7wvo14aJOwKscT%2BzfY2ik2viqlb4%2B6tqFYnkWyY%2FdZXvzXHTWllmwKycAP34Hq5Zr3fxkyXJe4AOHyNui8nmbFN4Tf1Z1u5%2FJOn4F086upeYeqg6VarrvLzUkeoBx1HBIqIsAAB1udNXptfuj1pKZCpjGRTJGjtaMqvskyoBXkEabKmWKvze5jBmtPgtVUqqM8gvWXJvPRh08dSAyQT9IrN0JyC&X-Amz-Signature=0cb342cc6ec2e5cdd3675401c050e00dcdfe1084e7ca67bf8e3be316eca6bde0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZHSYMR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3RWjJioCzx49VygzLrSV9FMRr5DpJQXmOnP7AbXOFugIgbPflJsJ%2Bz416f3x%2Fj%2FC0MaG%2B0Bh%2B163RQsR0C8ewhfoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bew1O1ITET%2FDne0CrcA5ITP9EUiIuR7%2BZPz7xfCau%2BGxxj6QnvsDGxP6TCWs%2FwGXqbE%2FbcqXPJykNvupvK5rEb54tjw39BSbxC%2FxZelsYGiBNdLahutKDyfO7wxG6MVqJ8liDFZ4jm2Vq4PS3%2FOBqR6F7W0moHHFHNeN%2BQ9JQRaPr%2BYogZkJ249WYpqB22UPuGym0VLHcTwCc0J5gbyEq4Pm%2Bq%2BPx2xTA5qEKrqSH8PFTiOZSK%2BWfPz9dn6BKRU2V2qVoE6lxMAC94bjpXosqm%2FH5OlxSwDkbib1sDBUtc%2F6icKSY8ExX%2BYH5FzPdof3Y5gwabHxrpLj7qRu1UW3OIij%2Bcpm2OPJjPeQQJcLICH46VRsq70axdEW3D54%2Bvglh%2F7IkaprHErsGIaRbTR8ERhcGYLiLPlvuZ5Xy%2FRyEkcCuqyJ2v3SEFFhlPmtdTMjCBWTcgU0qirLpaSFIwLAy1G9aALgWHaRAWaL1lxVOtiZu4UxCs9unmDTngnYlS%2FV30WZKfCU5IrKJFhlw9VeE8SmjMLq9J0rqxWvUtv2f%2BnV8eiUY%2BBIKe%2F7k04GTunw7IccdvZXzzMpA%2FsKqgyCf%2FXCoHJURz5TIB3L2YgFgMzlo4guCkEbZd5Oq%2Fi0Al3apxoQVLlUNSozfGMPHd9LwGOqUBb7wvo14aJOwKscT%2BzfY2ik2viqlb4%2B6tqFYnkWyY%2FdZXvzXHTWllmwKycAP34Hq5Zr3fxkyXJe4AOHyNui8nmbFN4Tf1Z1u5%2FJOn4F086upeYeqg6VarrvLzUkeoBx1HBIqIsAAB1udNXptfuj1pKZCpjGRTJGjtaMqvskyoBXkEabKmWKvze5jBmtPgtVUqqM8gvWXJvPRh08dSAyQT9IrN0JyC&X-Amz-Signature=6f60a869e83c756e55e2ccfddf96175246b9b2756961db9d7d23de7f107932f7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZHSYMR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3RWjJioCzx49VygzLrSV9FMRr5DpJQXmOnP7AbXOFugIgbPflJsJ%2Bz416f3x%2Fj%2FC0MaG%2B0Bh%2B163RQsR0C8ewhfoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bew1O1ITET%2FDne0CrcA5ITP9EUiIuR7%2BZPz7xfCau%2BGxxj6QnvsDGxP6TCWs%2FwGXqbE%2FbcqXPJykNvupvK5rEb54tjw39BSbxC%2FxZelsYGiBNdLahutKDyfO7wxG6MVqJ8liDFZ4jm2Vq4PS3%2FOBqR6F7W0moHHFHNeN%2BQ9JQRaPr%2BYogZkJ249WYpqB22UPuGym0VLHcTwCc0J5gbyEq4Pm%2Bq%2BPx2xTA5qEKrqSH8PFTiOZSK%2BWfPz9dn6BKRU2V2qVoE6lxMAC94bjpXosqm%2FH5OlxSwDkbib1sDBUtc%2F6icKSY8ExX%2BYH5FzPdof3Y5gwabHxrpLj7qRu1UW3OIij%2Bcpm2OPJjPeQQJcLICH46VRsq70axdEW3D54%2Bvglh%2F7IkaprHErsGIaRbTR8ERhcGYLiLPlvuZ5Xy%2FRyEkcCuqyJ2v3SEFFhlPmtdTMjCBWTcgU0qirLpaSFIwLAy1G9aALgWHaRAWaL1lxVOtiZu4UxCs9unmDTngnYlS%2FV30WZKfCU5IrKJFhlw9VeE8SmjMLq9J0rqxWvUtv2f%2BnV8eiUY%2BBIKe%2F7k04GTunw7IccdvZXzzMpA%2FsKqgyCf%2FXCoHJURz5TIB3L2YgFgMzlo4guCkEbZd5Oq%2Fi0Al3apxoQVLlUNSozfGMPHd9LwGOqUBb7wvo14aJOwKscT%2BzfY2ik2viqlb4%2B6tqFYnkWyY%2FdZXvzXHTWllmwKycAP34Hq5Zr3fxkyXJe4AOHyNui8nmbFN4Tf1Z1u5%2FJOn4F086upeYeqg6VarrvLzUkeoBx1HBIqIsAAB1udNXptfuj1pKZCpjGRTJGjtaMqvskyoBXkEabKmWKvze5jBmtPgtVUqqM8gvWXJvPRh08dSAyQT9IrN0JyC&X-Amz-Signature=9f7556bbdea4aed735bd4f504349769b1190bc8ec1210e400d7f7f374bd27323&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZHSYMR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3RWjJioCzx49VygzLrSV9FMRr5DpJQXmOnP7AbXOFugIgbPflJsJ%2Bz416f3x%2Fj%2FC0MaG%2B0Bh%2B163RQsR0C8ewhfoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bew1O1ITET%2FDne0CrcA5ITP9EUiIuR7%2BZPz7xfCau%2BGxxj6QnvsDGxP6TCWs%2FwGXqbE%2FbcqXPJykNvupvK5rEb54tjw39BSbxC%2FxZelsYGiBNdLahutKDyfO7wxG6MVqJ8liDFZ4jm2Vq4PS3%2FOBqR6F7W0moHHFHNeN%2BQ9JQRaPr%2BYogZkJ249WYpqB22UPuGym0VLHcTwCc0J5gbyEq4Pm%2Bq%2BPx2xTA5qEKrqSH8PFTiOZSK%2BWfPz9dn6BKRU2V2qVoE6lxMAC94bjpXosqm%2FH5OlxSwDkbib1sDBUtc%2F6icKSY8ExX%2BYH5FzPdof3Y5gwabHxrpLj7qRu1UW3OIij%2Bcpm2OPJjPeQQJcLICH46VRsq70axdEW3D54%2Bvglh%2F7IkaprHErsGIaRbTR8ERhcGYLiLPlvuZ5Xy%2FRyEkcCuqyJ2v3SEFFhlPmtdTMjCBWTcgU0qirLpaSFIwLAy1G9aALgWHaRAWaL1lxVOtiZu4UxCs9unmDTngnYlS%2FV30WZKfCU5IrKJFhlw9VeE8SmjMLq9J0rqxWvUtv2f%2BnV8eiUY%2BBIKe%2F7k04GTunw7IccdvZXzzMpA%2FsKqgyCf%2FXCoHJURz5TIB3L2YgFgMzlo4guCkEbZd5Oq%2Fi0Al3apxoQVLlUNSozfGMPHd9LwGOqUBb7wvo14aJOwKscT%2BzfY2ik2viqlb4%2B6tqFYnkWyY%2FdZXvzXHTWllmwKycAP34Hq5Zr3fxkyXJe4AOHyNui8nmbFN4Tf1Z1u5%2FJOn4F086upeYeqg6VarrvLzUkeoBx1HBIqIsAAB1udNXptfuj1pKZCpjGRTJGjtaMqvskyoBXkEabKmWKvze5jBmtPgtVUqqM8gvWXJvPRh08dSAyQT9IrN0JyC&X-Amz-Signature=3b12c1238bbcefc4c251adbc640292a05a38bde5c9c86e684b29b63c1bc55d04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZHSYMR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3RWjJioCzx49VygzLrSV9FMRr5DpJQXmOnP7AbXOFugIgbPflJsJ%2Bz416f3x%2Fj%2FC0MaG%2B0Bh%2B163RQsR0C8ewhfoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bew1O1ITET%2FDne0CrcA5ITP9EUiIuR7%2BZPz7xfCau%2BGxxj6QnvsDGxP6TCWs%2FwGXqbE%2FbcqXPJykNvupvK5rEb54tjw39BSbxC%2FxZelsYGiBNdLahutKDyfO7wxG6MVqJ8liDFZ4jm2Vq4PS3%2FOBqR6F7W0moHHFHNeN%2BQ9JQRaPr%2BYogZkJ249WYpqB22UPuGym0VLHcTwCc0J5gbyEq4Pm%2Bq%2BPx2xTA5qEKrqSH8PFTiOZSK%2BWfPz9dn6BKRU2V2qVoE6lxMAC94bjpXosqm%2FH5OlxSwDkbib1sDBUtc%2F6icKSY8ExX%2BYH5FzPdof3Y5gwabHxrpLj7qRu1UW3OIij%2Bcpm2OPJjPeQQJcLICH46VRsq70axdEW3D54%2Bvglh%2F7IkaprHErsGIaRbTR8ERhcGYLiLPlvuZ5Xy%2FRyEkcCuqyJ2v3SEFFhlPmtdTMjCBWTcgU0qirLpaSFIwLAy1G9aALgWHaRAWaL1lxVOtiZu4UxCs9unmDTngnYlS%2FV30WZKfCU5IrKJFhlw9VeE8SmjMLq9J0rqxWvUtv2f%2BnV8eiUY%2BBIKe%2F7k04GTunw7IccdvZXzzMpA%2FsKqgyCf%2FXCoHJURz5TIB3L2YgFgMzlo4guCkEbZd5Oq%2Fi0Al3apxoQVLlUNSozfGMPHd9LwGOqUBb7wvo14aJOwKscT%2BzfY2ik2viqlb4%2B6tqFYnkWyY%2FdZXvzXHTWllmwKycAP34Hq5Zr3fxkyXJe4AOHyNui8nmbFN4Tf1Z1u5%2FJOn4F086upeYeqg6VarrvLzUkeoBx1HBIqIsAAB1udNXptfuj1pKZCpjGRTJGjtaMqvskyoBXkEabKmWKvze5jBmtPgtVUqqM8gvWXJvPRh08dSAyQT9IrN0JyC&X-Amz-Signature=c5c56e19bf0b2db79ff01c452a1c239b612ef0174975f06f1473d0a1d3fde5d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZHSYMR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3RWjJioCzx49VygzLrSV9FMRr5DpJQXmOnP7AbXOFugIgbPflJsJ%2Bz416f3x%2Fj%2FC0MaG%2B0Bh%2B163RQsR0C8ewhfoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bew1O1ITET%2FDne0CrcA5ITP9EUiIuR7%2BZPz7xfCau%2BGxxj6QnvsDGxP6TCWs%2FwGXqbE%2FbcqXPJykNvupvK5rEb54tjw39BSbxC%2FxZelsYGiBNdLahutKDyfO7wxG6MVqJ8liDFZ4jm2Vq4PS3%2FOBqR6F7W0moHHFHNeN%2BQ9JQRaPr%2BYogZkJ249WYpqB22UPuGym0VLHcTwCc0J5gbyEq4Pm%2Bq%2BPx2xTA5qEKrqSH8PFTiOZSK%2BWfPz9dn6BKRU2V2qVoE6lxMAC94bjpXosqm%2FH5OlxSwDkbib1sDBUtc%2F6icKSY8ExX%2BYH5FzPdof3Y5gwabHxrpLj7qRu1UW3OIij%2Bcpm2OPJjPeQQJcLICH46VRsq70axdEW3D54%2Bvglh%2F7IkaprHErsGIaRbTR8ERhcGYLiLPlvuZ5Xy%2FRyEkcCuqyJ2v3SEFFhlPmtdTMjCBWTcgU0qirLpaSFIwLAy1G9aALgWHaRAWaL1lxVOtiZu4UxCs9unmDTngnYlS%2FV30WZKfCU5IrKJFhlw9VeE8SmjMLq9J0rqxWvUtv2f%2BnV8eiUY%2BBIKe%2F7k04GTunw7IccdvZXzzMpA%2FsKqgyCf%2FXCoHJURz5TIB3L2YgFgMzlo4guCkEbZd5Oq%2Fi0Al3apxoQVLlUNSozfGMPHd9LwGOqUBb7wvo14aJOwKscT%2BzfY2ik2viqlb4%2B6tqFYnkWyY%2FdZXvzXHTWllmwKycAP34Hq5Zr3fxkyXJe4AOHyNui8nmbFN4Tf1Z1u5%2FJOn4F086upeYeqg6VarrvLzUkeoBx1HBIqIsAAB1udNXptfuj1pKZCpjGRTJGjtaMqvskyoBXkEabKmWKvze5jBmtPgtVUqqM8gvWXJvPRh08dSAyQT9IrN0JyC&X-Amz-Signature=cb84aff3074adea645da6a23c6149f7f6a684b19509fff4de63e61cf910fdeba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UZHSYMR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3RWjJioCzx49VygzLrSV9FMRr5DpJQXmOnP7AbXOFugIgbPflJsJ%2Bz416f3x%2Fj%2FC0MaG%2B0Bh%2B163RQsR0C8ewhfoqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bew1O1ITET%2FDne0CrcA5ITP9EUiIuR7%2BZPz7xfCau%2BGxxj6QnvsDGxP6TCWs%2FwGXqbE%2FbcqXPJykNvupvK5rEb54tjw39BSbxC%2FxZelsYGiBNdLahutKDyfO7wxG6MVqJ8liDFZ4jm2Vq4PS3%2FOBqR6F7W0moHHFHNeN%2BQ9JQRaPr%2BYogZkJ249WYpqB22UPuGym0VLHcTwCc0J5gbyEq4Pm%2Bq%2BPx2xTA5qEKrqSH8PFTiOZSK%2BWfPz9dn6BKRU2V2qVoE6lxMAC94bjpXosqm%2FH5OlxSwDkbib1sDBUtc%2F6icKSY8ExX%2BYH5FzPdof3Y5gwabHxrpLj7qRu1UW3OIij%2Bcpm2OPJjPeQQJcLICH46VRsq70axdEW3D54%2Bvglh%2F7IkaprHErsGIaRbTR8ERhcGYLiLPlvuZ5Xy%2FRyEkcCuqyJ2v3SEFFhlPmtdTMjCBWTcgU0qirLpaSFIwLAy1G9aALgWHaRAWaL1lxVOtiZu4UxCs9unmDTngnYlS%2FV30WZKfCU5IrKJFhlw9VeE8SmjMLq9J0rqxWvUtv2f%2BnV8eiUY%2BBIKe%2F7k04GTunw7IccdvZXzzMpA%2FsKqgyCf%2FXCoHJURz5TIB3L2YgFgMzlo4guCkEbZd5Oq%2Fi0Al3apxoQVLlUNSozfGMPHd9LwGOqUBb7wvo14aJOwKscT%2BzfY2ik2viqlb4%2B6tqFYnkWyY%2FdZXvzXHTWllmwKycAP34Hq5Zr3fxkyXJe4AOHyNui8nmbFN4Tf1Z1u5%2FJOn4F086upeYeqg6VarrvLzUkeoBx1HBIqIsAAB1udNXptfuj1pKZCpjGRTJGjtaMqvskyoBXkEabKmWKvze5jBmtPgtVUqqM8gvWXJvPRh08dSAyQT9IrN0JyC&X-Amz-Signature=4cdbe6482311822b3c45cbe97b0822fe7d74869c92833e08672e02b171530df8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
