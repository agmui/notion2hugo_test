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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GK57PK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC2YklEkLbbfdc4Qway0StlUvyA0lX4X8Awp5GvnANjegIhANYvWwVmDvDAEXImFOWWb4gPfC85FkgSnLGiXzW834YaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLKUB09c6Od4%2F4i8Iq3AMzK1IxDjoPe7aS8qlSwsM69yXXZ2C5g50qSHL%2BeAY2VH99kJL%2BkYSVDC%2FqQaI%2BqmBs2KkUXwx1H%2F06pkRr5gh4xrLCH1VgNiqcEiFw3xC966XRieOdr%2Bx6nlmF2RXO8k4RijqAAA7oG65ysJAqAf3MbeHszOovm1hEpI6sv%2Fn2QhmiXdWR6FibC6JDNHQh8nXyzbPhrYLrGEOKmYKh6WkaYzCaWAJUkXVDYndiRcR6yiAvZN%2BWkX9QmKgqg7hiFHUd5D0V7Gqir62Of8EOEsLBf04Q5BewWHxmcLrAwJZpJ2Q9MXUJW6AbePgWflk9uOj9fJVTzY2SqqNpeOf%2B8tRz%2FXd3eGv1R%2BbGBLPgAimfkuyMWHA1wd9LgvBDkR7cw6q%2BYcdmYRFLHSIVOBTylCKSM42vB1WewXQPOgM4kBuL%2BI%2FGw0deOCp1SU6wxckvTTwGEeXyZDNnCekQ8JEpPFC0vq%2BFKahE6iaC6cGEDiL2mF6o0%2FQQQqnCrq%2FBlVjGnfP%2BGlhwOScN88nseiWayIObynhAaYoDIUIN7WAyTAwuedaD736%2B73hhlwah0r8olGLrdfBtQfoQZiNf7VWvjllR8e0x5XcGFTp2pxD9WMAskIwqPGgm4Mx0ldduEDDU68C%2BBjqkAQSIYbXLk0uCigL%2Fpv4m%2FTxn9NCgSrAKEUDNYSiYQWEPTeyyz1zpkSjzzVnPNo58MJgeJdj3OXdf%2Bey6jucz%2Bdx8u2zmTa%2Fad1xp57up7dbiagv95LuN7LTq5gWVh4A964ZboZgF1pmMeFsDng7d%2FuMd6DxK50X%2BqsTIy%2FrwXVQb6cPhfsaIQJktrgEaGVPf2xaS0oFeAy5eB9iTxDiN6%2FLi05C0&X-Amz-Signature=4e7fced28064e59e6d14b3b60f77eec9d5545e04dde8bcd7df3977e6489e27f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GK57PK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC2YklEkLbbfdc4Qway0StlUvyA0lX4X8Awp5GvnANjegIhANYvWwVmDvDAEXImFOWWb4gPfC85FkgSnLGiXzW834YaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLKUB09c6Od4%2F4i8Iq3AMzK1IxDjoPe7aS8qlSwsM69yXXZ2C5g50qSHL%2BeAY2VH99kJL%2BkYSVDC%2FqQaI%2BqmBs2KkUXwx1H%2F06pkRr5gh4xrLCH1VgNiqcEiFw3xC966XRieOdr%2Bx6nlmF2RXO8k4RijqAAA7oG65ysJAqAf3MbeHszOovm1hEpI6sv%2Fn2QhmiXdWR6FibC6JDNHQh8nXyzbPhrYLrGEOKmYKh6WkaYzCaWAJUkXVDYndiRcR6yiAvZN%2BWkX9QmKgqg7hiFHUd5D0V7Gqir62Of8EOEsLBf04Q5BewWHxmcLrAwJZpJ2Q9MXUJW6AbePgWflk9uOj9fJVTzY2SqqNpeOf%2B8tRz%2FXd3eGv1R%2BbGBLPgAimfkuyMWHA1wd9LgvBDkR7cw6q%2BYcdmYRFLHSIVOBTylCKSM42vB1WewXQPOgM4kBuL%2BI%2FGw0deOCp1SU6wxckvTTwGEeXyZDNnCekQ8JEpPFC0vq%2BFKahE6iaC6cGEDiL2mF6o0%2FQQQqnCrq%2FBlVjGnfP%2BGlhwOScN88nseiWayIObynhAaYoDIUIN7WAyTAwuedaD736%2B73hhlwah0r8olGLrdfBtQfoQZiNf7VWvjllR8e0x5XcGFTp2pxD9WMAskIwqPGgm4Mx0ldduEDDU68C%2BBjqkAQSIYbXLk0uCigL%2Fpv4m%2FTxn9NCgSrAKEUDNYSiYQWEPTeyyz1zpkSjzzVnPNo58MJgeJdj3OXdf%2Bey6jucz%2Bdx8u2zmTa%2Fad1xp57up7dbiagv95LuN7LTq5gWVh4A964ZboZgF1pmMeFsDng7d%2FuMd6DxK50X%2BqsTIy%2FrwXVQb6cPhfsaIQJktrgEaGVPf2xaS0oFeAy5eB9iTxDiN6%2FLi05C0&X-Amz-Signature=fd6bc5c5d4e71bff6f06a94541e30bdb95c4080bf0b3d16363ae3b79452e6377&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GK57PK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC2YklEkLbbfdc4Qway0StlUvyA0lX4X8Awp5GvnANjegIhANYvWwVmDvDAEXImFOWWb4gPfC85FkgSnLGiXzW834YaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLKUB09c6Od4%2F4i8Iq3AMzK1IxDjoPe7aS8qlSwsM69yXXZ2C5g50qSHL%2BeAY2VH99kJL%2BkYSVDC%2FqQaI%2BqmBs2KkUXwx1H%2F06pkRr5gh4xrLCH1VgNiqcEiFw3xC966XRieOdr%2Bx6nlmF2RXO8k4RijqAAA7oG65ysJAqAf3MbeHszOovm1hEpI6sv%2Fn2QhmiXdWR6FibC6JDNHQh8nXyzbPhrYLrGEOKmYKh6WkaYzCaWAJUkXVDYndiRcR6yiAvZN%2BWkX9QmKgqg7hiFHUd5D0V7Gqir62Of8EOEsLBf04Q5BewWHxmcLrAwJZpJ2Q9MXUJW6AbePgWflk9uOj9fJVTzY2SqqNpeOf%2B8tRz%2FXd3eGv1R%2BbGBLPgAimfkuyMWHA1wd9LgvBDkR7cw6q%2BYcdmYRFLHSIVOBTylCKSM42vB1WewXQPOgM4kBuL%2BI%2FGw0deOCp1SU6wxckvTTwGEeXyZDNnCekQ8JEpPFC0vq%2BFKahE6iaC6cGEDiL2mF6o0%2FQQQqnCrq%2FBlVjGnfP%2BGlhwOScN88nseiWayIObynhAaYoDIUIN7WAyTAwuedaD736%2B73hhlwah0r8olGLrdfBtQfoQZiNf7VWvjllR8e0x5XcGFTp2pxD9WMAskIwqPGgm4Mx0ldduEDDU68C%2BBjqkAQSIYbXLk0uCigL%2Fpv4m%2FTxn9NCgSrAKEUDNYSiYQWEPTeyyz1zpkSjzzVnPNo58MJgeJdj3OXdf%2Bey6jucz%2Bdx8u2zmTa%2Fad1xp57up7dbiagv95LuN7LTq5gWVh4A964ZboZgF1pmMeFsDng7d%2FuMd6DxK50X%2BqsTIy%2FrwXVQb6cPhfsaIQJktrgEaGVPf2xaS0oFeAy5eB9iTxDiN6%2FLi05C0&X-Amz-Signature=712565aad7728b30ae1e4983fbb2a2db17d7fd138a56035d6e1bbf559077a004&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GK57PK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC2YklEkLbbfdc4Qway0StlUvyA0lX4X8Awp5GvnANjegIhANYvWwVmDvDAEXImFOWWb4gPfC85FkgSnLGiXzW834YaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLKUB09c6Od4%2F4i8Iq3AMzK1IxDjoPe7aS8qlSwsM69yXXZ2C5g50qSHL%2BeAY2VH99kJL%2BkYSVDC%2FqQaI%2BqmBs2KkUXwx1H%2F06pkRr5gh4xrLCH1VgNiqcEiFw3xC966XRieOdr%2Bx6nlmF2RXO8k4RijqAAA7oG65ysJAqAf3MbeHszOovm1hEpI6sv%2Fn2QhmiXdWR6FibC6JDNHQh8nXyzbPhrYLrGEOKmYKh6WkaYzCaWAJUkXVDYndiRcR6yiAvZN%2BWkX9QmKgqg7hiFHUd5D0V7Gqir62Of8EOEsLBf04Q5BewWHxmcLrAwJZpJ2Q9MXUJW6AbePgWflk9uOj9fJVTzY2SqqNpeOf%2B8tRz%2FXd3eGv1R%2BbGBLPgAimfkuyMWHA1wd9LgvBDkR7cw6q%2BYcdmYRFLHSIVOBTylCKSM42vB1WewXQPOgM4kBuL%2BI%2FGw0deOCp1SU6wxckvTTwGEeXyZDNnCekQ8JEpPFC0vq%2BFKahE6iaC6cGEDiL2mF6o0%2FQQQqnCrq%2FBlVjGnfP%2BGlhwOScN88nseiWayIObynhAaYoDIUIN7WAyTAwuedaD736%2B73hhlwah0r8olGLrdfBtQfoQZiNf7VWvjllR8e0x5XcGFTp2pxD9WMAskIwqPGgm4Mx0ldduEDDU68C%2BBjqkAQSIYbXLk0uCigL%2Fpv4m%2FTxn9NCgSrAKEUDNYSiYQWEPTeyyz1zpkSjzzVnPNo58MJgeJdj3OXdf%2Bey6jucz%2Bdx8u2zmTa%2Fad1xp57up7dbiagv95LuN7LTq5gWVh4A964ZboZgF1pmMeFsDng7d%2FuMd6DxK50X%2BqsTIy%2FrwXVQb6cPhfsaIQJktrgEaGVPf2xaS0oFeAy5eB9iTxDiN6%2FLi05C0&X-Amz-Signature=b39b916fe488478e0893b67f4af3d503f2a33916c9ccf21aac81d626385643b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GK57PK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC2YklEkLbbfdc4Qway0StlUvyA0lX4X8Awp5GvnANjegIhANYvWwVmDvDAEXImFOWWb4gPfC85FkgSnLGiXzW834YaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLKUB09c6Od4%2F4i8Iq3AMzK1IxDjoPe7aS8qlSwsM69yXXZ2C5g50qSHL%2BeAY2VH99kJL%2BkYSVDC%2FqQaI%2BqmBs2KkUXwx1H%2F06pkRr5gh4xrLCH1VgNiqcEiFw3xC966XRieOdr%2Bx6nlmF2RXO8k4RijqAAA7oG65ysJAqAf3MbeHszOovm1hEpI6sv%2Fn2QhmiXdWR6FibC6JDNHQh8nXyzbPhrYLrGEOKmYKh6WkaYzCaWAJUkXVDYndiRcR6yiAvZN%2BWkX9QmKgqg7hiFHUd5D0V7Gqir62Of8EOEsLBf04Q5BewWHxmcLrAwJZpJ2Q9MXUJW6AbePgWflk9uOj9fJVTzY2SqqNpeOf%2B8tRz%2FXd3eGv1R%2BbGBLPgAimfkuyMWHA1wd9LgvBDkR7cw6q%2BYcdmYRFLHSIVOBTylCKSM42vB1WewXQPOgM4kBuL%2BI%2FGw0deOCp1SU6wxckvTTwGEeXyZDNnCekQ8JEpPFC0vq%2BFKahE6iaC6cGEDiL2mF6o0%2FQQQqnCrq%2FBlVjGnfP%2BGlhwOScN88nseiWayIObynhAaYoDIUIN7WAyTAwuedaD736%2B73hhlwah0r8olGLrdfBtQfoQZiNf7VWvjllR8e0x5XcGFTp2pxD9WMAskIwqPGgm4Mx0ldduEDDU68C%2BBjqkAQSIYbXLk0uCigL%2Fpv4m%2FTxn9NCgSrAKEUDNYSiYQWEPTeyyz1zpkSjzzVnPNo58MJgeJdj3OXdf%2Bey6jucz%2Bdx8u2zmTa%2Fad1xp57up7dbiagv95LuN7LTq5gWVh4A964ZboZgF1pmMeFsDng7d%2FuMd6DxK50X%2BqsTIy%2FrwXVQb6cPhfsaIQJktrgEaGVPf2xaS0oFeAy5eB9iTxDiN6%2FLi05C0&X-Amz-Signature=402531a67363062c328c882f2e4b3e8d9191959aae3751e52243353f4d2edd25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GK57PK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC2YklEkLbbfdc4Qway0StlUvyA0lX4X8Awp5GvnANjegIhANYvWwVmDvDAEXImFOWWb4gPfC85FkgSnLGiXzW834YaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLKUB09c6Od4%2F4i8Iq3AMzK1IxDjoPe7aS8qlSwsM69yXXZ2C5g50qSHL%2BeAY2VH99kJL%2BkYSVDC%2FqQaI%2BqmBs2KkUXwx1H%2F06pkRr5gh4xrLCH1VgNiqcEiFw3xC966XRieOdr%2Bx6nlmF2RXO8k4RijqAAA7oG65ysJAqAf3MbeHszOovm1hEpI6sv%2Fn2QhmiXdWR6FibC6JDNHQh8nXyzbPhrYLrGEOKmYKh6WkaYzCaWAJUkXVDYndiRcR6yiAvZN%2BWkX9QmKgqg7hiFHUd5D0V7Gqir62Of8EOEsLBf04Q5BewWHxmcLrAwJZpJ2Q9MXUJW6AbePgWflk9uOj9fJVTzY2SqqNpeOf%2B8tRz%2FXd3eGv1R%2BbGBLPgAimfkuyMWHA1wd9LgvBDkR7cw6q%2BYcdmYRFLHSIVOBTylCKSM42vB1WewXQPOgM4kBuL%2BI%2FGw0deOCp1SU6wxckvTTwGEeXyZDNnCekQ8JEpPFC0vq%2BFKahE6iaC6cGEDiL2mF6o0%2FQQQqnCrq%2FBlVjGnfP%2BGlhwOScN88nseiWayIObynhAaYoDIUIN7WAyTAwuedaD736%2B73hhlwah0r8olGLrdfBtQfoQZiNf7VWvjllR8e0x5XcGFTp2pxD9WMAskIwqPGgm4Mx0ldduEDDU68C%2BBjqkAQSIYbXLk0uCigL%2Fpv4m%2FTxn9NCgSrAKEUDNYSiYQWEPTeyyz1zpkSjzzVnPNo58MJgeJdj3OXdf%2Bey6jucz%2Bdx8u2zmTa%2Fad1xp57up7dbiagv95LuN7LTq5gWVh4A964ZboZgF1pmMeFsDng7d%2FuMd6DxK50X%2BqsTIy%2FrwXVQb6cPhfsaIQJktrgEaGVPf2xaS0oFeAy5eB9iTxDiN6%2FLi05C0&X-Amz-Signature=c02d9c41e6ea18b82b094ff2a0eded3b84961e8652aa5b4ce6140498d81c8b22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GK57PK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC2YklEkLbbfdc4Qway0StlUvyA0lX4X8Awp5GvnANjegIhANYvWwVmDvDAEXImFOWWb4gPfC85FkgSnLGiXzW834YaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLKUB09c6Od4%2F4i8Iq3AMzK1IxDjoPe7aS8qlSwsM69yXXZ2C5g50qSHL%2BeAY2VH99kJL%2BkYSVDC%2FqQaI%2BqmBs2KkUXwx1H%2F06pkRr5gh4xrLCH1VgNiqcEiFw3xC966XRieOdr%2Bx6nlmF2RXO8k4RijqAAA7oG65ysJAqAf3MbeHszOovm1hEpI6sv%2Fn2QhmiXdWR6FibC6JDNHQh8nXyzbPhrYLrGEOKmYKh6WkaYzCaWAJUkXVDYndiRcR6yiAvZN%2BWkX9QmKgqg7hiFHUd5D0V7Gqir62Of8EOEsLBf04Q5BewWHxmcLrAwJZpJ2Q9MXUJW6AbePgWflk9uOj9fJVTzY2SqqNpeOf%2B8tRz%2FXd3eGv1R%2BbGBLPgAimfkuyMWHA1wd9LgvBDkR7cw6q%2BYcdmYRFLHSIVOBTylCKSM42vB1WewXQPOgM4kBuL%2BI%2FGw0deOCp1SU6wxckvTTwGEeXyZDNnCekQ8JEpPFC0vq%2BFKahE6iaC6cGEDiL2mF6o0%2FQQQqnCrq%2FBlVjGnfP%2BGlhwOScN88nseiWayIObynhAaYoDIUIN7WAyTAwuedaD736%2B73hhlwah0r8olGLrdfBtQfoQZiNf7VWvjllR8e0x5XcGFTp2pxD9WMAskIwqPGgm4Mx0ldduEDDU68C%2BBjqkAQSIYbXLk0uCigL%2Fpv4m%2FTxn9NCgSrAKEUDNYSiYQWEPTeyyz1zpkSjzzVnPNo58MJgeJdj3OXdf%2Bey6jucz%2Bdx8u2zmTa%2Fad1xp57up7dbiagv95LuN7LTq5gWVh4A964ZboZgF1pmMeFsDng7d%2FuMd6DxK50X%2BqsTIy%2FrwXVQb6cPhfsaIQJktrgEaGVPf2xaS0oFeAy5eB9iTxDiN6%2FLi05C0&X-Amz-Signature=97dc439f013524090cb9f0e3a3b5863ad0f2b54a736798765040cd6685de3040&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GK57PK%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T131836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC2YklEkLbbfdc4Qway0StlUvyA0lX4X8Awp5GvnANjegIhANYvWwVmDvDAEXImFOWWb4gPfC85FkgSnLGiXzW834YaKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLKUB09c6Od4%2F4i8Iq3AMzK1IxDjoPe7aS8qlSwsM69yXXZ2C5g50qSHL%2BeAY2VH99kJL%2BkYSVDC%2FqQaI%2BqmBs2KkUXwx1H%2F06pkRr5gh4xrLCH1VgNiqcEiFw3xC966XRieOdr%2Bx6nlmF2RXO8k4RijqAAA7oG65ysJAqAf3MbeHszOovm1hEpI6sv%2Fn2QhmiXdWR6FibC6JDNHQh8nXyzbPhrYLrGEOKmYKh6WkaYzCaWAJUkXVDYndiRcR6yiAvZN%2BWkX9QmKgqg7hiFHUd5D0V7Gqir62Of8EOEsLBf04Q5BewWHxmcLrAwJZpJ2Q9MXUJW6AbePgWflk9uOj9fJVTzY2SqqNpeOf%2B8tRz%2FXd3eGv1R%2BbGBLPgAimfkuyMWHA1wd9LgvBDkR7cw6q%2BYcdmYRFLHSIVOBTylCKSM42vB1WewXQPOgM4kBuL%2BI%2FGw0deOCp1SU6wxckvTTwGEeXyZDNnCekQ8JEpPFC0vq%2BFKahE6iaC6cGEDiL2mF6o0%2FQQQqnCrq%2FBlVjGnfP%2BGlhwOScN88nseiWayIObynhAaYoDIUIN7WAyTAwuedaD736%2B73hhlwah0r8olGLrdfBtQfoQZiNf7VWvjllR8e0x5XcGFTp2pxD9WMAskIwqPGgm4Mx0ldduEDDU68C%2BBjqkAQSIYbXLk0uCigL%2Fpv4m%2FTxn9NCgSrAKEUDNYSiYQWEPTeyyz1zpkSjzzVnPNo58MJgeJdj3OXdf%2Bey6jucz%2Bdx8u2zmTa%2Fad1xp57up7dbiagv95LuN7LTq5gWVh4A964ZboZgF1pmMeFsDng7d%2FuMd6DxK50X%2BqsTIy%2FrwXVQb6cPhfsaIQJktrgEaGVPf2xaS0oFeAy5eB9iTxDiN6%2FLi05C0&X-Amz-Signature=1dd2f586d387e0deccef61f8977af89777885d708dc6871b6ceb5955bb597d37&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
