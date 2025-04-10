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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65BGLSY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDZPl6Vaf5YrCHQ52b4T13MMdkMpve9pYWQV%2BkGBLZFMgIhAPZjlG8zf%2BHmdMNygUA%2BUrhPbsN1cS8lUe86eSUuZIQkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytGcbAp2S0gDBApUAq3ANkOjnsHRf0Pc5J3Qh4InCID3olSCGmqhvMfTse%2FZ8Ozzb9b8oIs1k1hwQg0nCsSc%2FTm1eUb7koyVnk1KyREc5ZVogs9KbmBBLAmRc%2BtITV%2ByQZTvuJCKqF2rpIIbt6uEZK7XYCr1KQZ3ebk5Kn3a%2FFw3qFVD3%2BRbGGGY%2BqHkGwD%2FeD1rbhsGCpOXznm4N6IomcapTKTrEqZIgnzBAujkqpA4PDniQ4muz%2FmktiTP3IofW0oQEuNMQh10x%2BZ2tO1unl%2Fc4gvSh3VGDSQLazgoWsNH2a42ELVaJP2LhfzH%2FfxjyWjVhLPsyF5%2FT%2BMAq1AFQMcONXXl5q3XriR5BtmgWvRZEHH0LSpS%2FVNpacJz1G8n%2Fy813lJY170T1WbaAF2akLQsgfKGcP65K7TNo4%2FvvP9d%2B5SUryPvTbcLAenRLRntCKkIjJ8297VKwwV1U3ofBsRKBoZCtNX5FwQQOLF5pVUoGIY%2FCt6uCpc72QgxHnDj%2BtYDooRnwbm1Xty3RvK9bK%2Ff1CxYeWhrC8fXvt44RvnQNpaUdhpnBx9CLbnoEcnnPmOph0XJCFsxOdWsfOp0XpnWfhdFrAbjUPe%2Ffj42phrfXb0yAgPe34V0t07P49pbqLtwlnY65tExUbjDDdseC%2FBjqkASKyd3VJr2Ab7n7NJU%2F%2FU6t3Kj4XIM1ZiNiSm43Tmi4Cmu3yzKbkSTjgdY0gvMXz8s1gDcq6ehr1MXpEUcqw9cuMdP7TXE78AZuz3K58wiG9h0QbJeT4QayXtwjAXoN042KP%2FqmXYjPaoXKpdB%2BE2XY2i5jO3KTztiW0UsiRqpYG%2BAd3xXLdIjMtDudJe%2F6rOYD4eJ4m7b1d6%2BKTwBtqX0qIYYIn&X-Amz-Signature=30e3315be78994f8b8fa3389eb58ed6b124a73c0aa86114f5b6eb8b468c633e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65BGLSY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDZPl6Vaf5YrCHQ52b4T13MMdkMpve9pYWQV%2BkGBLZFMgIhAPZjlG8zf%2BHmdMNygUA%2BUrhPbsN1cS8lUe86eSUuZIQkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytGcbAp2S0gDBApUAq3ANkOjnsHRf0Pc5J3Qh4InCID3olSCGmqhvMfTse%2FZ8Ozzb9b8oIs1k1hwQg0nCsSc%2FTm1eUb7koyVnk1KyREc5ZVogs9KbmBBLAmRc%2BtITV%2ByQZTvuJCKqF2rpIIbt6uEZK7XYCr1KQZ3ebk5Kn3a%2FFw3qFVD3%2BRbGGGY%2BqHkGwD%2FeD1rbhsGCpOXznm4N6IomcapTKTrEqZIgnzBAujkqpA4PDniQ4muz%2FmktiTP3IofW0oQEuNMQh10x%2BZ2tO1unl%2Fc4gvSh3VGDSQLazgoWsNH2a42ELVaJP2LhfzH%2FfxjyWjVhLPsyF5%2FT%2BMAq1AFQMcONXXl5q3XriR5BtmgWvRZEHH0LSpS%2FVNpacJz1G8n%2Fy813lJY170T1WbaAF2akLQsgfKGcP65K7TNo4%2FvvP9d%2B5SUryPvTbcLAenRLRntCKkIjJ8297VKwwV1U3ofBsRKBoZCtNX5FwQQOLF5pVUoGIY%2FCt6uCpc72QgxHnDj%2BtYDooRnwbm1Xty3RvK9bK%2Ff1CxYeWhrC8fXvt44RvnQNpaUdhpnBx9CLbnoEcnnPmOph0XJCFsxOdWsfOp0XpnWfhdFrAbjUPe%2Ffj42phrfXb0yAgPe34V0t07P49pbqLtwlnY65tExUbjDDdseC%2FBjqkASKyd3VJr2Ab7n7NJU%2F%2FU6t3Kj4XIM1ZiNiSm43Tmi4Cmu3yzKbkSTjgdY0gvMXz8s1gDcq6ehr1MXpEUcqw9cuMdP7TXE78AZuz3K58wiG9h0QbJeT4QayXtwjAXoN042KP%2FqmXYjPaoXKpdB%2BE2XY2i5jO3KTztiW0UsiRqpYG%2BAd3xXLdIjMtDudJe%2F6rOYD4eJ4m7b1d6%2BKTwBtqX0qIYYIn&X-Amz-Signature=b14fba39da22bf2484714d7259e7096ab3fe763dea95e62b7c44a3980fc7515c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65BGLSY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDZPl6Vaf5YrCHQ52b4T13MMdkMpve9pYWQV%2BkGBLZFMgIhAPZjlG8zf%2BHmdMNygUA%2BUrhPbsN1cS8lUe86eSUuZIQkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytGcbAp2S0gDBApUAq3ANkOjnsHRf0Pc5J3Qh4InCID3olSCGmqhvMfTse%2FZ8Ozzb9b8oIs1k1hwQg0nCsSc%2FTm1eUb7koyVnk1KyREc5ZVogs9KbmBBLAmRc%2BtITV%2ByQZTvuJCKqF2rpIIbt6uEZK7XYCr1KQZ3ebk5Kn3a%2FFw3qFVD3%2BRbGGGY%2BqHkGwD%2FeD1rbhsGCpOXznm4N6IomcapTKTrEqZIgnzBAujkqpA4PDniQ4muz%2FmktiTP3IofW0oQEuNMQh10x%2BZ2tO1unl%2Fc4gvSh3VGDSQLazgoWsNH2a42ELVaJP2LhfzH%2FfxjyWjVhLPsyF5%2FT%2BMAq1AFQMcONXXl5q3XriR5BtmgWvRZEHH0LSpS%2FVNpacJz1G8n%2Fy813lJY170T1WbaAF2akLQsgfKGcP65K7TNo4%2FvvP9d%2B5SUryPvTbcLAenRLRntCKkIjJ8297VKwwV1U3ofBsRKBoZCtNX5FwQQOLF5pVUoGIY%2FCt6uCpc72QgxHnDj%2BtYDooRnwbm1Xty3RvK9bK%2Ff1CxYeWhrC8fXvt44RvnQNpaUdhpnBx9CLbnoEcnnPmOph0XJCFsxOdWsfOp0XpnWfhdFrAbjUPe%2Ffj42phrfXb0yAgPe34V0t07P49pbqLtwlnY65tExUbjDDdseC%2FBjqkASKyd3VJr2Ab7n7NJU%2F%2FU6t3Kj4XIM1ZiNiSm43Tmi4Cmu3yzKbkSTjgdY0gvMXz8s1gDcq6ehr1MXpEUcqw9cuMdP7TXE78AZuz3K58wiG9h0QbJeT4QayXtwjAXoN042KP%2FqmXYjPaoXKpdB%2BE2XY2i5jO3KTztiW0UsiRqpYG%2BAd3xXLdIjMtDudJe%2F6rOYD4eJ4m7b1d6%2BKTwBtqX0qIYYIn&X-Amz-Signature=ef8aaa6936ad278deb70ab3f5e262383d4afcd975bad919b679ecfd74a958ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65BGLSY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDZPl6Vaf5YrCHQ52b4T13MMdkMpve9pYWQV%2BkGBLZFMgIhAPZjlG8zf%2BHmdMNygUA%2BUrhPbsN1cS8lUe86eSUuZIQkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytGcbAp2S0gDBApUAq3ANkOjnsHRf0Pc5J3Qh4InCID3olSCGmqhvMfTse%2FZ8Ozzb9b8oIs1k1hwQg0nCsSc%2FTm1eUb7koyVnk1KyREc5ZVogs9KbmBBLAmRc%2BtITV%2ByQZTvuJCKqF2rpIIbt6uEZK7XYCr1KQZ3ebk5Kn3a%2FFw3qFVD3%2BRbGGGY%2BqHkGwD%2FeD1rbhsGCpOXznm4N6IomcapTKTrEqZIgnzBAujkqpA4PDniQ4muz%2FmktiTP3IofW0oQEuNMQh10x%2BZ2tO1unl%2Fc4gvSh3VGDSQLazgoWsNH2a42ELVaJP2LhfzH%2FfxjyWjVhLPsyF5%2FT%2BMAq1AFQMcONXXl5q3XriR5BtmgWvRZEHH0LSpS%2FVNpacJz1G8n%2Fy813lJY170T1WbaAF2akLQsgfKGcP65K7TNo4%2FvvP9d%2B5SUryPvTbcLAenRLRntCKkIjJ8297VKwwV1U3ofBsRKBoZCtNX5FwQQOLF5pVUoGIY%2FCt6uCpc72QgxHnDj%2BtYDooRnwbm1Xty3RvK9bK%2Ff1CxYeWhrC8fXvt44RvnQNpaUdhpnBx9CLbnoEcnnPmOph0XJCFsxOdWsfOp0XpnWfhdFrAbjUPe%2Ffj42phrfXb0yAgPe34V0t07P49pbqLtwlnY65tExUbjDDdseC%2FBjqkASKyd3VJr2Ab7n7NJU%2F%2FU6t3Kj4XIM1ZiNiSm43Tmi4Cmu3yzKbkSTjgdY0gvMXz8s1gDcq6ehr1MXpEUcqw9cuMdP7TXE78AZuz3K58wiG9h0QbJeT4QayXtwjAXoN042KP%2FqmXYjPaoXKpdB%2BE2XY2i5jO3KTztiW0UsiRqpYG%2BAd3xXLdIjMtDudJe%2F6rOYD4eJ4m7b1d6%2BKTwBtqX0qIYYIn&X-Amz-Signature=d09ebc7f11859dad61d4481e699bb99b2578d5890d4586512e883fe885d2cf95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65BGLSY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDZPl6Vaf5YrCHQ52b4T13MMdkMpve9pYWQV%2BkGBLZFMgIhAPZjlG8zf%2BHmdMNygUA%2BUrhPbsN1cS8lUe86eSUuZIQkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytGcbAp2S0gDBApUAq3ANkOjnsHRf0Pc5J3Qh4InCID3olSCGmqhvMfTse%2FZ8Ozzb9b8oIs1k1hwQg0nCsSc%2FTm1eUb7koyVnk1KyREc5ZVogs9KbmBBLAmRc%2BtITV%2ByQZTvuJCKqF2rpIIbt6uEZK7XYCr1KQZ3ebk5Kn3a%2FFw3qFVD3%2BRbGGGY%2BqHkGwD%2FeD1rbhsGCpOXznm4N6IomcapTKTrEqZIgnzBAujkqpA4PDniQ4muz%2FmktiTP3IofW0oQEuNMQh10x%2BZ2tO1unl%2Fc4gvSh3VGDSQLazgoWsNH2a42ELVaJP2LhfzH%2FfxjyWjVhLPsyF5%2FT%2BMAq1AFQMcONXXl5q3XriR5BtmgWvRZEHH0LSpS%2FVNpacJz1G8n%2Fy813lJY170T1WbaAF2akLQsgfKGcP65K7TNo4%2FvvP9d%2B5SUryPvTbcLAenRLRntCKkIjJ8297VKwwV1U3ofBsRKBoZCtNX5FwQQOLF5pVUoGIY%2FCt6uCpc72QgxHnDj%2BtYDooRnwbm1Xty3RvK9bK%2Ff1CxYeWhrC8fXvt44RvnQNpaUdhpnBx9CLbnoEcnnPmOph0XJCFsxOdWsfOp0XpnWfhdFrAbjUPe%2Ffj42phrfXb0yAgPe34V0t07P49pbqLtwlnY65tExUbjDDdseC%2FBjqkASKyd3VJr2Ab7n7NJU%2F%2FU6t3Kj4XIM1ZiNiSm43Tmi4Cmu3yzKbkSTjgdY0gvMXz8s1gDcq6ehr1MXpEUcqw9cuMdP7TXE78AZuz3K58wiG9h0QbJeT4QayXtwjAXoN042KP%2FqmXYjPaoXKpdB%2BE2XY2i5jO3KTztiW0UsiRqpYG%2BAd3xXLdIjMtDudJe%2F6rOYD4eJ4m7b1d6%2BKTwBtqX0qIYYIn&X-Amz-Signature=7ce845bae25c1eafd2eb42e9a315be56c08febf611b96d7e457b5db3f34761c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65BGLSY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDZPl6Vaf5YrCHQ52b4T13MMdkMpve9pYWQV%2BkGBLZFMgIhAPZjlG8zf%2BHmdMNygUA%2BUrhPbsN1cS8lUe86eSUuZIQkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytGcbAp2S0gDBApUAq3ANkOjnsHRf0Pc5J3Qh4InCID3olSCGmqhvMfTse%2FZ8Ozzb9b8oIs1k1hwQg0nCsSc%2FTm1eUb7koyVnk1KyREc5ZVogs9KbmBBLAmRc%2BtITV%2ByQZTvuJCKqF2rpIIbt6uEZK7XYCr1KQZ3ebk5Kn3a%2FFw3qFVD3%2BRbGGGY%2BqHkGwD%2FeD1rbhsGCpOXznm4N6IomcapTKTrEqZIgnzBAujkqpA4PDniQ4muz%2FmktiTP3IofW0oQEuNMQh10x%2BZ2tO1unl%2Fc4gvSh3VGDSQLazgoWsNH2a42ELVaJP2LhfzH%2FfxjyWjVhLPsyF5%2FT%2BMAq1AFQMcONXXl5q3XriR5BtmgWvRZEHH0LSpS%2FVNpacJz1G8n%2Fy813lJY170T1WbaAF2akLQsgfKGcP65K7TNo4%2FvvP9d%2B5SUryPvTbcLAenRLRntCKkIjJ8297VKwwV1U3ofBsRKBoZCtNX5FwQQOLF5pVUoGIY%2FCt6uCpc72QgxHnDj%2BtYDooRnwbm1Xty3RvK9bK%2Ff1CxYeWhrC8fXvt44RvnQNpaUdhpnBx9CLbnoEcnnPmOph0XJCFsxOdWsfOp0XpnWfhdFrAbjUPe%2Ffj42phrfXb0yAgPe34V0t07P49pbqLtwlnY65tExUbjDDdseC%2FBjqkASKyd3VJr2Ab7n7NJU%2F%2FU6t3Kj4XIM1ZiNiSm43Tmi4Cmu3yzKbkSTjgdY0gvMXz8s1gDcq6ehr1MXpEUcqw9cuMdP7TXE78AZuz3K58wiG9h0QbJeT4QayXtwjAXoN042KP%2FqmXYjPaoXKpdB%2BE2XY2i5jO3KTztiW0UsiRqpYG%2BAd3xXLdIjMtDudJe%2F6rOYD4eJ4m7b1d6%2BKTwBtqX0qIYYIn&X-Amz-Signature=4caf5660bf930664f7ab36741ba625e4a6cbaf430d37b0898243e7ca59c87a31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65BGLSY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDZPl6Vaf5YrCHQ52b4T13MMdkMpve9pYWQV%2BkGBLZFMgIhAPZjlG8zf%2BHmdMNygUA%2BUrhPbsN1cS8lUe86eSUuZIQkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytGcbAp2S0gDBApUAq3ANkOjnsHRf0Pc5J3Qh4InCID3olSCGmqhvMfTse%2FZ8Ozzb9b8oIs1k1hwQg0nCsSc%2FTm1eUb7koyVnk1KyREc5ZVogs9KbmBBLAmRc%2BtITV%2ByQZTvuJCKqF2rpIIbt6uEZK7XYCr1KQZ3ebk5Kn3a%2FFw3qFVD3%2BRbGGGY%2BqHkGwD%2FeD1rbhsGCpOXznm4N6IomcapTKTrEqZIgnzBAujkqpA4PDniQ4muz%2FmktiTP3IofW0oQEuNMQh10x%2BZ2tO1unl%2Fc4gvSh3VGDSQLazgoWsNH2a42ELVaJP2LhfzH%2FfxjyWjVhLPsyF5%2FT%2BMAq1AFQMcONXXl5q3XriR5BtmgWvRZEHH0LSpS%2FVNpacJz1G8n%2Fy813lJY170T1WbaAF2akLQsgfKGcP65K7TNo4%2FvvP9d%2B5SUryPvTbcLAenRLRntCKkIjJ8297VKwwV1U3ofBsRKBoZCtNX5FwQQOLF5pVUoGIY%2FCt6uCpc72QgxHnDj%2BtYDooRnwbm1Xty3RvK9bK%2Ff1CxYeWhrC8fXvt44RvnQNpaUdhpnBx9CLbnoEcnnPmOph0XJCFsxOdWsfOp0XpnWfhdFrAbjUPe%2Ffj42phrfXb0yAgPe34V0t07P49pbqLtwlnY65tExUbjDDdseC%2FBjqkASKyd3VJr2Ab7n7NJU%2F%2FU6t3Kj4XIM1ZiNiSm43Tmi4Cmu3yzKbkSTjgdY0gvMXz8s1gDcq6ehr1MXpEUcqw9cuMdP7TXE78AZuz3K58wiG9h0QbJeT4QayXtwjAXoN042KP%2FqmXYjPaoXKpdB%2BE2XY2i5jO3KTztiW0UsiRqpYG%2BAd3xXLdIjMtDudJe%2F6rOYD4eJ4m7b1d6%2BKTwBtqX0qIYYIn&X-Amz-Signature=a0481d874d2d6526e2ada99f6becd66f4c3304c3f05b89ef54dc0b345325302d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65BGLSY%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDZPl6Vaf5YrCHQ52b4T13MMdkMpve9pYWQV%2BkGBLZFMgIhAPZjlG8zf%2BHmdMNygUA%2BUrhPbsN1cS8lUe86eSUuZIQkKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytGcbAp2S0gDBApUAq3ANkOjnsHRf0Pc5J3Qh4InCID3olSCGmqhvMfTse%2FZ8Ozzb9b8oIs1k1hwQg0nCsSc%2FTm1eUb7koyVnk1KyREc5ZVogs9KbmBBLAmRc%2BtITV%2ByQZTvuJCKqF2rpIIbt6uEZK7XYCr1KQZ3ebk5Kn3a%2FFw3qFVD3%2BRbGGGY%2BqHkGwD%2FeD1rbhsGCpOXznm4N6IomcapTKTrEqZIgnzBAujkqpA4PDniQ4muz%2FmktiTP3IofW0oQEuNMQh10x%2BZ2tO1unl%2Fc4gvSh3VGDSQLazgoWsNH2a42ELVaJP2LhfzH%2FfxjyWjVhLPsyF5%2FT%2BMAq1AFQMcONXXl5q3XriR5BtmgWvRZEHH0LSpS%2FVNpacJz1G8n%2Fy813lJY170T1WbaAF2akLQsgfKGcP65K7TNo4%2FvvP9d%2B5SUryPvTbcLAenRLRntCKkIjJ8297VKwwV1U3ofBsRKBoZCtNX5FwQQOLF5pVUoGIY%2FCt6uCpc72QgxHnDj%2BtYDooRnwbm1Xty3RvK9bK%2Ff1CxYeWhrC8fXvt44RvnQNpaUdhpnBx9CLbnoEcnnPmOph0XJCFsxOdWsfOp0XpnWfhdFrAbjUPe%2Ffj42phrfXb0yAgPe34V0t07P49pbqLtwlnY65tExUbjDDdseC%2FBjqkASKyd3VJr2Ab7n7NJU%2F%2FU6t3Kj4XIM1ZiNiSm43Tmi4Cmu3yzKbkSTjgdY0gvMXz8s1gDcq6ehr1MXpEUcqw9cuMdP7TXE78AZuz3K58wiG9h0QbJeT4QayXtwjAXoN042KP%2FqmXYjPaoXKpdB%2BE2XY2i5jO3KTztiW0UsiRqpYG%2BAd3xXLdIjMtDudJe%2F6rOYD4eJ4m7b1d6%2BKTwBtqX0qIYYIn&X-Amz-Signature=2234b1d42c2008189b9a5f913b73cd52274ad73b8d86286c10dce7512135f769&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
