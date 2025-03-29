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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPIOX5N%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCG7XTvx6C%2FLU9qMaF3rf6AFCqGFPfOhaIinrWMAYGOlQIgG3F1Lg5YLxuCVNquVXojuucBUGS7BGgy24B9IqKBvHQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIjorObkkbULQxro5CrcA29gQYZEuzz63FaovJOvhLaPy%2FsHC3Qw5V2zGnoXZP75Pk7T06doq7THcg6wvLp0aeaU00N1EXT1%2Ft7E7LhRlurifYPOTNVqTdDaG4qMSS0ZWTwwSbxTQAnLRtsd4MZDj9H3YiJ%2FRPZfNpP%2Fj4EuF42ERnztdd48SJ8hskJ2HlD04acqAAR86xlBx65Mh8Bq9GHH6cEkZ0HYdEG5Ed9wQhE5KEOE4a2MpVejzGCK7h8QqPDBgqmVw50J%2BOsnNrJW2NK1Ag6ABEn9cmz%2BlNPLYw7AqaHUMPxfKwZjUCbyzNavyIFF3cujAAvv6RDn0cbMcqreQZGW0xOXXIcWfcKWHVbTCN%2FmZsTuez1JaYVdrskNf7pXo%2FLkrzCL2AjeSSycbisTY4Vv0oHYeSGRkgWTI3o75BhbM8sTpu%2FJLs3sqEzb2O29ZGTSfqydx7nH%2Fc9IeI0sem4RJB0geEZ8CLY2g66EOeDsK%2BqwvfHBCdfyVTTYoqZ62mdH9nRu33gZW6F%2FIN5rjH54CFhayIjAYCjuVtyc1%2FLSMomsBwJd9dX4P1jbsxwXBjmNWt413uFwxju%2B2uKTGMcMsMzFlcWGkACWqdtU0MfBE5hFL4S0yG466r3QE6Fx03KndgpY9Rv%2BMKOQnr8GOqUB82%2FNTy%2BwTw2J06hqEfmf2PI87fkQVYaFrmYiRi%2Ft6lW6WZpULb8KRSp8MwlKjx1vHmaq3W0ce%2BaGfkxq7xHURYNtvXPX%2F9ElU8YPIhCDnlgZSdaTXcLs1OV5BMrhKSZopcPIiHseJGdickJ9qGnfvVJgrjrsCXzcqNtLFaw6%2B5nVlPFEytGOXnQXgLTvzvtnCGz3ZLB%2F2qFtavsHoms3Ncx7C3bQ&X-Amz-Signature=74767b5aad6263cfdecc842810d77dcfae1b246205bec775eb01faabd4c79795&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPIOX5N%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCG7XTvx6C%2FLU9qMaF3rf6AFCqGFPfOhaIinrWMAYGOlQIgG3F1Lg5YLxuCVNquVXojuucBUGS7BGgy24B9IqKBvHQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIjorObkkbULQxro5CrcA29gQYZEuzz63FaovJOvhLaPy%2FsHC3Qw5V2zGnoXZP75Pk7T06doq7THcg6wvLp0aeaU00N1EXT1%2Ft7E7LhRlurifYPOTNVqTdDaG4qMSS0ZWTwwSbxTQAnLRtsd4MZDj9H3YiJ%2FRPZfNpP%2Fj4EuF42ERnztdd48SJ8hskJ2HlD04acqAAR86xlBx65Mh8Bq9GHH6cEkZ0HYdEG5Ed9wQhE5KEOE4a2MpVejzGCK7h8QqPDBgqmVw50J%2BOsnNrJW2NK1Ag6ABEn9cmz%2BlNPLYw7AqaHUMPxfKwZjUCbyzNavyIFF3cujAAvv6RDn0cbMcqreQZGW0xOXXIcWfcKWHVbTCN%2FmZsTuez1JaYVdrskNf7pXo%2FLkrzCL2AjeSSycbisTY4Vv0oHYeSGRkgWTI3o75BhbM8sTpu%2FJLs3sqEzb2O29ZGTSfqydx7nH%2Fc9IeI0sem4RJB0geEZ8CLY2g66EOeDsK%2BqwvfHBCdfyVTTYoqZ62mdH9nRu33gZW6F%2FIN5rjH54CFhayIjAYCjuVtyc1%2FLSMomsBwJd9dX4P1jbsxwXBjmNWt413uFwxju%2B2uKTGMcMsMzFlcWGkACWqdtU0MfBE5hFL4S0yG466r3QE6Fx03KndgpY9Rv%2BMKOQnr8GOqUB82%2FNTy%2BwTw2J06hqEfmf2PI87fkQVYaFrmYiRi%2Ft6lW6WZpULb8KRSp8MwlKjx1vHmaq3W0ce%2BaGfkxq7xHURYNtvXPX%2F9ElU8YPIhCDnlgZSdaTXcLs1OV5BMrhKSZopcPIiHseJGdickJ9qGnfvVJgrjrsCXzcqNtLFaw6%2B5nVlPFEytGOXnQXgLTvzvtnCGz3ZLB%2F2qFtavsHoms3Ncx7C3bQ&X-Amz-Signature=82757a7101c7c68d083e316df489de82c514f5f3a9569e43034de57dc91d6b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPIOX5N%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCG7XTvx6C%2FLU9qMaF3rf6AFCqGFPfOhaIinrWMAYGOlQIgG3F1Lg5YLxuCVNquVXojuucBUGS7BGgy24B9IqKBvHQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIjorObkkbULQxro5CrcA29gQYZEuzz63FaovJOvhLaPy%2FsHC3Qw5V2zGnoXZP75Pk7T06doq7THcg6wvLp0aeaU00N1EXT1%2Ft7E7LhRlurifYPOTNVqTdDaG4qMSS0ZWTwwSbxTQAnLRtsd4MZDj9H3YiJ%2FRPZfNpP%2Fj4EuF42ERnztdd48SJ8hskJ2HlD04acqAAR86xlBx65Mh8Bq9GHH6cEkZ0HYdEG5Ed9wQhE5KEOE4a2MpVejzGCK7h8QqPDBgqmVw50J%2BOsnNrJW2NK1Ag6ABEn9cmz%2BlNPLYw7AqaHUMPxfKwZjUCbyzNavyIFF3cujAAvv6RDn0cbMcqreQZGW0xOXXIcWfcKWHVbTCN%2FmZsTuez1JaYVdrskNf7pXo%2FLkrzCL2AjeSSycbisTY4Vv0oHYeSGRkgWTI3o75BhbM8sTpu%2FJLs3sqEzb2O29ZGTSfqydx7nH%2Fc9IeI0sem4RJB0geEZ8CLY2g66EOeDsK%2BqwvfHBCdfyVTTYoqZ62mdH9nRu33gZW6F%2FIN5rjH54CFhayIjAYCjuVtyc1%2FLSMomsBwJd9dX4P1jbsxwXBjmNWt413uFwxju%2B2uKTGMcMsMzFlcWGkACWqdtU0MfBE5hFL4S0yG466r3QE6Fx03KndgpY9Rv%2BMKOQnr8GOqUB82%2FNTy%2BwTw2J06hqEfmf2PI87fkQVYaFrmYiRi%2Ft6lW6WZpULb8KRSp8MwlKjx1vHmaq3W0ce%2BaGfkxq7xHURYNtvXPX%2F9ElU8YPIhCDnlgZSdaTXcLs1OV5BMrhKSZopcPIiHseJGdickJ9qGnfvVJgrjrsCXzcqNtLFaw6%2B5nVlPFEytGOXnQXgLTvzvtnCGz3ZLB%2F2qFtavsHoms3Ncx7C3bQ&X-Amz-Signature=68155c3fd34d1e6131d5862f1faae5ff12d16810979173676f9136cb27314555&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPIOX5N%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCG7XTvx6C%2FLU9qMaF3rf6AFCqGFPfOhaIinrWMAYGOlQIgG3F1Lg5YLxuCVNquVXojuucBUGS7BGgy24B9IqKBvHQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIjorObkkbULQxro5CrcA29gQYZEuzz63FaovJOvhLaPy%2FsHC3Qw5V2zGnoXZP75Pk7T06doq7THcg6wvLp0aeaU00N1EXT1%2Ft7E7LhRlurifYPOTNVqTdDaG4qMSS0ZWTwwSbxTQAnLRtsd4MZDj9H3YiJ%2FRPZfNpP%2Fj4EuF42ERnztdd48SJ8hskJ2HlD04acqAAR86xlBx65Mh8Bq9GHH6cEkZ0HYdEG5Ed9wQhE5KEOE4a2MpVejzGCK7h8QqPDBgqmVw50J%2BOsnNrJW2NK1Ag6ABEn9cmz%2BlNPLYw7AqaHUMPxfKwZjUCbyzNavyIFF3cujAAvv6RDn0cbMcqreQZGW0xOXXIcWfcKWHVbTCN%2FmZsTuez1JaYVdrskNf7pXo%2FLkrzCL2AjeSSycbisTY4Vv0oHYeSGRkgWTI3o75BhbM8sTpu%2FJLs3sqEzb2O29ZGTSfqydx7nH%2Fc9IeI0sem4RJB0geEZ8CLY2g66EOeDsK%2BqwvfHBCdfyVTTYoqZ62mdH9nRu33gZW6F%2FIN5rjH54CFhayIjAYCjuVtyc1%2FLSMomsBwJd9dX4P1jbsxwXBjmNWt413uFwxju%2B2uKTGMcMsMzFlcWGkACWqdtU0MfBE5hFL4S0yG466r3QE6Fx03KndgpY9Rv%2BMKOQnr8GOqUB82%2FNTy%2BwTw2J06hqEfmf2PI87fkQVYaFrmYiRi%2Ft6lW6WZpULb8KRSp8MwlKjx1vHmaq3W0ce%2BaGfkxq7xHURYNtvXPX%2F9ElU8YPIhCDnlgZSdaTXcLs1OV5BMrhKSZopcPIiHseJGdickJ9qGnfvVJgrjrsCXzcqNtLFaw6%2B5nVlPFEytGOXnQXgLTvzvtnCGz3ZLB%2F2qFtavsHoms3Ncx7C3bQ&X-Amz-Signature=1b215d4efa0a066969facfcc079c144af0004a9dd22f596ddee3251dd583058f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPIOX5N%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCG7XTvx6C%2FLU9qMaF3rf6AFCqGFPfOhaIinrWMAYGOlQIgG3F1Lg5YLxuCVNquVXojuucBUGS7BGgy24B9IqKBvHQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIjorObkkbULQxro5CrcA29gQYZEuzz63FaovJOvhLaPy%2FsHC3Qw5V2zGnoXZP75Pk7T06doq7THcg6wvLp0aeaU00N1EXT1%2Ft7E7LhRlurifYPOTNVqTdDaG4qMSS0ZWTwwSbxTQAnLRtsd4MZDj9H3YiJ%2FRPZfNpP%2Fj4EuF42ERnztdd48SJ8hskJ2HlD04acqAAR86xlBx65Mh8Bq9GHH6cEkZ0HYdEG5Ed9wQhE5KEOE4a2MpVejzGCK7h8QqPDBgqmVw50J%2BOsnNrJW2NK1Ag6ABEn9cmz%2BlNPLYw7AqaHUMPxfKwZjUCbyzNavyIFF3cujAAvv6RDn0cbMcqreQZGW0xOXXIcWfcKWHVbTCN%2FmZsTuez1JaYVdrskNf7pXo%2FLkrzCL2AjeSSycbisTY4Vv0oHYeSGRkgWTI3o75BhbM8sTpu%2FJLs3sqEzb2O29ZGTSfqydx7nH%2Fc9IeI0sem4RJB0geEZ8CLY2g66EOeDsK%2BqwvfHBCdfyVTTYoqZ62mdH9nRu33gZW6F%2FIN5rjH54CFhayIjAYCjuVtyc1%2FLSMomsBwJd9dX4P1jbsxwXBjmNWt413uFwxju%2B2uKTGMcMsMzFlcWGkACWqdtU0MfBE5hFL4S0yG466r3QE6Fx03KndgpY9Rv%2BMKOQnr8GOqUB82%2FNTy%2BwTw2J06hqEfmf2PI87fkQVYaFrmYiRi%2Ft6lW6WZpULb8KRSp8MwlKjx1vHmaq3W0ce%2BaGfkxq7xHURYNtvXPX%2F9ElU8YPIhCDnlgZSdaTXcLs1OV5BMrhKSZopcPIiHseJGdickJ9qGnfvVJgrjrsCXzcqNtLFaw6%2B5nVlPFEytGOXnQXgLTvzvtnCGz3ZLB%2F2qFtavsHoms3Ncx7C3bQ&X-Amz-Signature=c3f3165bb866ed3be18ea96acee095d6871afa1c4e359ce105cd393468cbb4f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPIOX5N%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCG7XTvx6C%2FLU9qMaF3rf6AFCqGFPfOhaIinrWMAYGOlQIgG3F1Lg5YLxuCVNquVXojuucBUGS7BGgy24B9IqKBvHQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIjorObkkbULQxro5CrcA29gQYZEuzz63FaovJOvhLaPy%2FsHC3Qw5V2zGnoXZP75Pk7T06doq7THcg6wvLp0aeaU00N1EXT1%2Ft7E7LhRlurifYPOTNVqTdDaG4qMSS0ZWTwwSbxTQAnLRtsd4MZDj9H3YiJ%2FRPZfNpP%2Fj4EuF42ERnztdd48SJ8hskJ2HlD04acqAAR86xlBx65Mh8Bq9GHH6cEkZ0HYdEG5Ed9wQhE5KEOE4a2MpVejzGCK7h8QqPDBgqmVw50J%2BOsnNrJW2NK1Ag6ABEn9cmz%2BlNPLYw7AqaHUMPxfKwZjUCbyzNavyIFF3cujAAvv6RDn0cbMcqreQZGW0xOXXIcWfcKWHVbTCN%2FmZsTuez1JaYVdrskNf7pXo%2FLkrzCL2AjeSSycbisTY4Vv0oHYeSGRkgWTI3o75BhbM8sTpu%2FJLs3sqEzb2O29ZGTSfqydx7nH%2Fc9IeI0sem4RJB0geEZ8CLY2g66EOeDsK%2BqwvfHBCdfyVTTYoqZ62mdH9nRu33gZW6F%2FIN5rjH54CFhayIjAYCjuVtyc1%2FLSMomsBwJd9dX4P1jbsxwXBjmNWt413uFwxju%2B2uKTGMcMsMzFlcWGkACWqdtU0MfBE5hFL4S0yG466r3QE6Fx03KndgpY9Rv%2BMKOQnr8GOqUB82%2FNTy%2BwTw2J06hqEfmf2PI87fkQVYaFrmYiRi%2Ft6lW6WZpULb8KRSp8MwlKjx1vHmaq3W0ce%2BaGfkxq7xHURYNtvXPX%2F9ElU8YPIhCDnlgZSdaTXcLs1OV5BMrhKSZopcPIiHseJGdickJ9qGnfvVJgrjrsCXzcqNtLFaw6%2B5nVlPFEytGOXnQXgLTvzvtnCGz3ZLB%2F2qFtavsHoms3Ncx7C3bQ&X-Amz-Signature=8310e87583a8bb1df90aef7c0c6900fdbab32339d7e496ceeaa178ea6843ef7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPIOX5N%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCG7XTvx6C%2FLU9qMaF3rf6AFCqGFPfOhaIinrWMAYGOlQIgG3F1Lg5YLxuCVNquVXojuucBUGS7BGgy24B9IqKBvHQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIjorObkkbULQxro5CrcA29gQYZEuzz63FaovJOvhLaPy%2FsHC3Qw5V2zGnoXZP75Pk7T06doq7THcg6wvLp0aeaU00N1EXT1%2Ft7E7LhRlurifYPOTNVqTdDaG4qMSS0ZWTwwSbxTQAnLRtsd4MZDj9H3YiJ%2FRPZfNpP%2Fj4EuF42ERnztdd48SJ8hskJ2HlD04acqAAR86xlBx65Mh8Bq9GHH6cEkZ0HYdEG5Ed9wQhE5KEOE4a2MpVejzGCK7h8QqPDBgqmVw50J%2BOsnNrJW2NK1Ag6ABEn9cmz%2BlNPLYw7AqaHUMPxfKwZjUCbyzNavyIFF3cujAAvv6RDn0cbMcqreQZGW0xOXXIcWfcKWHVbTCN%2FmZsTuez1JaYVdrskNf7pXo%2FLkrzCL2AjeSSycbisTY4Vv0oHYeSGRkgWTI3o75BhbM8sTpu%2FJLs3sqEzb2O29ZGTSfqydx7nH%2Fc9IeI0sem4RJB0geEZ8CLY2g66EOeDsK%2BqwvfHBCdfyVTTYoqZ62mdH9nRu33gZW6F%2FIN5rjH54CFhayIjAYCjuVtyc1%2FLSMomsBwJd9dX4P1jbsxwXBjmNWt413uFwxju%2B2uKTGMcMsMzFlcWGkACWqdtU0MfBE5hFL4S0yG466r3QE6Fx03KndgpY9Rv%2BMKOQnr8GOqUB82%2FNTy%2BwTw2J06hqEfmf2PI87fkQVYaFrmYiRi%2Ft6lW6WZpULb8KRSp8MwlKjx1vHmaq3W0ce%2BaGfkxq7xHURYNtvXPX%2F9ElU8YPIhCDnlgZSdaTXcLs1OV5BMrhKSZopcPIiHseJGdickJ9qGnfvVJgrjrsCXzcqNtLFaw6%2B5nVlPFEytGOXnQXgLTvzvtnCGz3ZLB%2F2qFtavsHoms3Ncx7C3bQ&X-Amz-Signature=0f148d14f4dfad2609fa7520f7e77898f0bb6fe4ee96fcd8bc09425c99a850d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBPIOX5N%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCG7XTvx6C%2FLU9qMaF3rf6AFCqGFPfOhaIinrWMAYGOlQIgG3F1Lg5YLxuCVNquVXojuucBUGS7BGgy24B9IqKBvHQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDIjorObkkbULQxro5CrcA29gQYZEuzz63FaovJOvhLaPy%2FsHC3Qw5V2zGnoXZP75Pk7T06doq7THcg6wvLp0aeaU00N1EXT1%2Ft7E7LhRlurifYPOTNVqTdDaG4qMSS0ZWTwwSbxTQAnLRtsd4MZDj9H3YiJ%2FRPZfNpP%2Fj4EuF42ERnztdd48SJ8hskJ2HlD04acqAAR86xlBx65Mh8Bq9GHH6cEkZ0HYdEG5Ed9wQhE5KEOE4a2MpVejzGCK7h8QqPDBgqmVw50J%2BOsnNrJW2NK1Ag6ABEn9cmz%2BlNPLYw7AqaHUMPxfKwZjUCbyzNavyIFF3cujAAvv6RDn0cbMcqreQZGW0xOXXIcWfcKWHVbTCN%2FmZsTuez1JaYVdrskNf7pXo%2FLkrzCL2AjeSSycbisTY4Vv0oHYeSGRkgWTI3o75BhbM8sTpu%2FJLs3sqEzb2O29ZGTSfqydx7nH%2Fc9IeI0sem4RJB0geEZ8CLY2g66EOeDsK%2BqwvfHBCdfyVTTYoqZ62mdH9nRu33gZW6F%2FIN5rjH54CFhayIjAYCjuVtyc1%2FLSMomsBwJd9dX4P1jbsxwXBjmNWt413uFwxju%2B2uKTGMcMsMzFlcWGkACWqdtU0MfBE5hFL4S0yG466r3QE6Fx03KndgpY9Rv%2BMKOQnr8GOqUB82%2FNTy%2BwTw2J06hqEfmf2PI87fkQVYaFrmYiRi%2Ft6lW6WZpULb8KRSp8MwlKjx1vHmaq3W0ce%2BaGfkxq7xHURYNtvXPX%2F9ElU8YPIhCDnlgZSdaTXcLs1OV5BMrhKSZopcPIiHseJGdickJ9qGnfvVJgrjrsCXzcqNtLFaw6%2B5nVlPFEytGOXnQXgLTvzvtnCGz3ZLB%2F2qFtavsHoms3Ncx7C3bQ&X-Amz-Signature=443fdc3386e85630dfd0d99e0657056242e6eb8926d8e4521a92af999ad308f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
