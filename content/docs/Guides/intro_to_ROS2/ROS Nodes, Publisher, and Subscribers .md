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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFETUDY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIa9wvOam4d%2FjGQcv1dbhYJsbSUJa67hvYB5sQ3x8CHAiAycp53FjdRZoxYglTVzkgTR9ok319VgB8fVJy824uM2yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFUYFdM9Yzdw5AIKKtwDbIqB0lVPrkJI%2BoJGGrKhP232XSTTSY7bxoUx7eK4VIYjGVPpv%2BmJ8JLmXBdzeVSzGZSNLhGkc5ZJvIDRb8QPYPffQKOZjCSuJC729Kua2%2FhcyCNE5FxZ6Gsh6awkTYBNiWqJMzfKDuwOwD1IkoZA5sJqftqa%2BY7afpv8I0%2BsWVUxlydx8KF%2Bpzc0%2Bk8aDx06B5s36%2BA4N5qu52OVxerYkfrTkwg7iT49nl1tT8zMxEbHuTE54zNrE%2FU6k%2FS6ewP3R8JPlQNAvCCP8A4huiWUH3%2FMiByXQmyzMVc1kSR1oI148roDjni51jJS7FqeUKJMiWHvTxVGXHWO%2FXqkS7u%2FwHrn9TBDSUsv9JHIiQs0PVDsbq%2BwGiSgwgBmYDCrl63o8QKNd43PA29ZVVJKCjwhXPIdByPsaN%2B3lh3giTSctfF%2FGK4vw8pJCXZqv7pDGOUEL7Uyfp2POK%2FlK8iBSUgrJ7VMObixO1yv7s3%2BRZZsU9swtvGBAxdVccmBmxnF7e4CfO1FFyYu5hKJ7h5gEyl2IR0vFW%2FPb0Qdrlcl5iK%2BVFgqfJsgv9yBAkWEtHHOLyEI4kCdM%2BWczhw9SNr1s2kaNzxw3VoXWhNm5gOCJuxz65OG08px86Hea0O8xMgw9eufwgY6pgEmAW5NLDLz%2FHySWFuUqOJkr1j4PzY%2Bi9HGQ99I6Hb%2F0l9jebn5nKbFfM6TsJ2s9KFuWZRHAZTemeHfD5xLyT0pTb6bDdbpcPqA%2BlhKKyWLUfBPx6x29Ke2xt%2BrAkMpsEuzd9qKOHYj0nANBvFUonqsTtudIu6HvHU3C51lvkayCJv7QbEuM3mGBZaOq6fjddIZF%2F5%2F2CW1sD%2FMao4iTuuxTBCLSEJh&X-Amz-Signature=1e0d201a160bbf39d5e628a4dd28ef5d93d6098f357d7519c972477265c80e5d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFETUDY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIa9wvOam4d%2FjGQcv1dbhYJsbSUJa67hvYB5sQ3x8CHAiAycp53FjdRZoxYglTVzkgTR9ok319VgB8fVJy824uM2yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFUYFdM9Yzdw5AIKKtwDbIqB0lVPrkJI%2BoJGGrKhP232XSTTSY7bxoUx7eK4VIYjGVPpv%2BmJ8JLmXBdzeVSzGZSNLhGkc5ZJvIDRb8QPYPffQKOZjCSuJC729Kua2%2FhcyCNE5FxZ6Gsh6awkTYBNiWqJMzfKDuwOwD1IkoZA5sJqftqa%2BY7afpv8I0%2BsWVUxlydx8KF%2Bpzc0%2Bk8aDx06B5s36%2BA4N5qu52OVxerYkfrTkwg7iT49nl1tT8zMxEbHuTE54zNrE%2FU6k%2FS6ewP3R8JPlQNAvCCP8A4huiWUH3%2FMiByXQmyzMVc1kSR1oI148roDjni51jJS7FqeUKJMiWHvTxVGXHWO%2FXqkS7u%2FwHrn9TBDSUsv9JHIiQs0PVDsbq%2BwGiSgwgBmYDCrl63o8QKNd43PA29ZVVJKCjwhXPIdByPsaN%2B3lh3giTSctfF%2FGK4vw8pJCXZqv7pDGOUEL7Uyfp2POK%2FlK8iBSUgrJ7VMObixO1yv7s3%2BRZZsU9swtvGBAxdVccmBmxnF7e4CfO1FFyYu5hKJ7h5gEyl2IR0vFW%2FPb0Qdrlcl5iK%2BVFgqfJsgv9yBAkWEtHHOLyEI4kCdM%2BWczhw9SNr1s2kaNzxw3VoXWhNm5gOCJuxz65OG08px86Hea0O8xMgw9eufwgY6pgEmAW5NLDLz%2FHySWFuUqOJkr1j4PzY%2Bi9HGQ99I6Hb%2F0l9jebn5nKbFfM6TsJ2s9KFuWZRHAZTemeHfD5xLyT0pTb6bDdbpcPqA%2BlhKKyWLUfBPx6x29Ke2xt%2BrAkMpsEuzd9qKOHYj0nANBvFUonqsTtudIu6HvHU3C51lvkayCJv7QbEuM3mGBZaOq6fjddIZF%2F5%2F2CW1sD%2FMao4iTuuxTBCLSEJh&X-Amz-Signature=21a22f7aca85970d2388c042f9a07a1c050bf08b86e57f8ceff5d04c84c37fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFETUDY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIa9wvOam4d%2FjGQcv1dbhYJsbSUJa67hvYB5sQ3x8CHAiAycp53FjdRZoxYglTVzkgTR9ok319VgB8fVJy824uM2yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFUYFdM9Yzdw5AIKKtwDbIqB0lVPrkJI%2BoJGGrKhP232XSTTSY7bxoUx7eK4VIYjGVPpv%2BmJ8JLmXBdzeVSzGZSNLhGkc5ZJvIDRb8QPYPffQKOZjCSuJC729Kua2%2FhcyCNE5FxZ6Gsh6awkTYBNiWqJMzfKDuwOwD1IkoZA5sJqftqa%2BY7afpv8I0%2BsWVUxlydx8KF%2Bpzc0%2Bk8aDx06B5s36%2BA4N5qu52OVxerYkfrTkwg7iT49nl1tT8zMxEbHuTE54zNrE%2FU6k%2FS6ewP3R8JPlQNAvCCP8A4huiWUH3%2FMiByXQmyzMVc1kSR1oI148roDjni51jJS7FqeUKJMiWHvTxVGXHWO%2FXqkS7u%2FwHrn9TBDSUsv9JHIiQs0PVDsbq%2BwGiSgwgBmYDCrl63o8QKNd43PA29ZVVJKCjwhXPIdByPsaN%2B3lh3giTSctfF%2FGK4vw8pJCXZqv7pDGOUEL7Uyfp2POK%2FlK8iBSUgrJ7VMObixO1yv7s3%2BRZZsU9swtvGBAxdVccmBmxnF7e4CfO1FFyYu5hKJ7h5gEyl2IR0vFW%2FPb0Qdrlcl5iK%2BVFgqfJsgv9yBAkWEtHHOLyEI4kCdM%2BWczhw9SNr1s2kaNzxw3VoXWhNm5gOCJuxz65OG08px86Hea0O8xMgw9eufwgY6pgEmAW5NLDLz%2FHySWFuUqOJkr1j4PzY%2Bi9HGQ99I6Hb%2F0l9jebn5nKbFfM6TsJ2s9KFuWZRHAZTemeHfD5xLyT0pTb6bDdbpcPqA%2BlhKKyWLUfBPx6x29Ke2xt%2BrAkMpsEuzd9qKOHYj0nANBvFUonqsTtudIu6HvHU3C51lvkayCJv7QbEuM3mGBZaOq6fjddIZF%2F5%2F2CW1sD%2FMao4iTuuxTBCLSEJh&X-Amz-Signature=b2c135c87ef5cd7a4b95c6e3eba3f7dec90bd653d8f246dd0d2136a533e939c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFETUDY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIa9wvOam4d%2FjGQcv1dbhYJsbSUJa67hvYB5sQ3x8CHAiAycp53FjdRZoxYglTVzkgTR9ok319VgB8fVJy824uM2yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFUYFdM9Yzdw5AIKKtwDbIqB0lVPrkJI%2BoJGGrKhP232XSTTSY7bxoUx7eK4VIYjGVPpv%2BmJ8JLmXBdzeVSzGZSNLhGkc5ZJvIDRb8QPYPffQKOZjCSuJC729Kua2%2FhcyCNE5FxZ6Gsh6awkTYBNiWqJMzfKDuwOwD1IkoZA5sJqftqa%2BY7afpv8I0%2BsWVUxlydx8KF%2Bpzc0%2Bk8aDx06B5s36%2BA4N5qu52OVxerYkfrTkwg7iT49nl1tT8zMxEbHuTE54zNrE%2FU6k%2FS6ewP3R8JPlQNAvCCP8A4huiWUH3%2FMiByXQmyzMVc1kSR1oI148roDjni51jJS7FqeUKJMiWHvTxVGXHWO%2FXqkS7u%2FwHrn9TBDSUsv9JHIiQs0PVDsbq%2BwGiSgwgBmYDCrl63o8QKNd43PA29ZVVJKCjwhXPIdByPsaN%2B3lh3giTSctfF%2FGK4vw8pJCXZqv7pDGOUEL7Uyfp2POK%2FlK8iBSUgrJ7VMObixO1yv7s3%2BRZZsU9swtvGBAxdVccmBmxnF7e4CfO1FFyYu5hKJ7h5gEyl2IR0vFW%2FPb0Qdrlcl5iK%2BVFgqfJsgv9yBAkWEtHHOLyEI4kCdM%2BWczhw9SNr1s2kaNzxw3VoXWhNm5gOCJuxz65OG08px86Hea0O8xMgw9eufwgY6pgEmAW5NLDLz%2FHySWFuUqOJkr1j4PzY%2Bi9HGQ99I6Hb%2F0l9jebn5nKbFfM6TsJ2s9KFuWZRHAZTemeHfD5xLyT0pTb6bDdbpcPqA%2BlhKKyWLUfBPx6x29Ke2xt%2BrAkMpsEuzd9qKOHYj0nANBvFUonqsTtudIu6HvHU3C51lvkayCJv7QbEuM3mGBZaOq6fjddIZF%2F5%2F2CW1sD%2FMao4iTuuxTBCLSEJh&X-Amz-Signature=89ccea2a9307b247161c1152edc626c23dff13fa2fbad6bf86034c9dcbe63c24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFETUDY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIa9wvOam4d%2FjGQcv1dbhYJsbSUJa67hvYB5sQ3x8CHAiAycp53FjdRZoxYglTVzkgTR9ok319VgB8fVJy824uM2yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFUYFdM9Yzdw5AIKKtwDbIqB0lVPrkJI%2BoJGGrKhP232XSTTSY7bxoUx7eK4VIYjGVPpv%2BmJ8JLmXBdzeVSzGZSNLhGkc5ZJvIDRb8QPYPffQKOZjCSuJC729Kua2%2FhcyCNE5FxZ6Gsh6awkTYBNiWqJMzfKDuwOwD1IkoZA5sJqftqa%2BY7afpv8I0%2BsWVUxlydx8KF%2Bpzc0%2Bk8aDx06B5s36%2BA4N5qu52OVxerYkfrTkwg7iT49nl1tT8zMxEbHuTE54zNrE%2FU6k%2FS6ewP3R8JPlQNAvCCP8A4huiWUH3%2FMiByXQmyzMVc1kSR1oI148roDjni51jJS7FqeUKJMiWHvTxVGXHWO%2FXqkS7u%2FwHrn9TBDSUsv9JHIiQs0PVDsbq%2BwGiSgwgBmYDCrl63o8QKNd43PA29ZVVJKCjwhXPIdByPsaN%2B3lh3giTSctfF%2FGK4vw8pJCXZqv7pDGOUEL7Uyfp2POK%2FlK8iBSUgrJ7VMObixO1yv7s3%2BRZZsU9swtvGBAxdVccmBmxnF7e4CfO1FFyYu5hKJ7h5gEyl2IR0vFW%2FPb0Qdrlcl5iK%2BVFgqfJsgv9yBAkWEtHHOLyEI4kCdM%2BWczhw9SNr1s2kaNzxw3VoXWhNm5gOCJuxz65OG08px86Hea0O8xMgw9eufwgY6pgEmAW5NLDLz%2FHySWFuUqOJkr1j4PzY%2Bi9HGQ99I6Hb%2F0l9jebn5nKbFfM6TsJ2s9KFuWZRHAZTemeHfD5xLyT0pTb6bDdbpcPqA%2BlhKKyWLUfBPx6x29Ke2xt%2BrAkMpsEuzd9qKOHYj0nANBvFUonqsTtudIu6HvHU3C51lvkayCJv7QbEuM3mGBZaOq6fjddIZF%2F5%2F2CW1sD%2FMao4iTuuxTBCLSEJh&X-Amz-Signature=ca5f2ffe568b415b964fad9717cdacc4e1c9df22c8081923a6ec399d077f2932&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFETUDY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIa9wvOam4d%2FjGQcv1dbhYJsbSUJa67hvYB5sQ3x8CHAiAycp53FjdRZoxYglTVzkgTR9ok319VgB8fVJy824uM2yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFUYFdM9Yzdw5AIKKtwDbIqB0lVPrkJI%2BoJGGrKhP232XSTTSY7bxoUx7eK4VIYjGVPpv%2BmJ8JLmXBdzeVSzGZSNLhGkc5ZJvIDRb8QPYPffQKOZjCSuJC729Kua2%2FhcyCNE5FxZ6Gsh6awkTYBNiWqJMzfKDuwOwD1IkoZA5sJqftqa%2BY7afpv8I0%2BsWVUxlydx8KF%2Bpzc0%2Bk8aDx06B5s36%2BA4N5qu52OVxerYkfrTkwg7iT49nl1tT8zMxEbHuTE54zNrE%2FU6k%2FS6ewP3R8JPlQNAvCCP8A4huiWUH3%2FMiByXQmyzMVc1kSR1oI148roDjni51jJS7FqeUKJMiWHvTxVGXHWO%2FXqkS7u%2FwHrn9TBDSUsv9JHIiQs0PVDsbq%2BwGiSgwgBmYDCrl63o8QKNd43PA29ZVVJKCjwhXPIdByPsaN%2B3lh3giTSctfF%2FGK4vw8pJCXZqv7pDGOUEL7Uyfp2POK%2FlK8iBSUgrJ7VMObixO1yv7s3%2BRZZsU9swtvGBAxdVccmBmxnF7e4CfO1FFyYu5hKJ7h5gEyl2IR0vFW%2FPb0Qdrlcl5iK%2BVFgqfJsgv9yBAkWEtHHOLyEI4kCdM%2BWczhw9SNr1s2kaNzxw3VoXWhNm5gOCJuxz65OG08px86Hea0O8xMgw9eufwgY6pgEmAW5NLDLz%2FHySWFuUqOJkr1j4PzY%2Bi9HGQ99I6Hb%2F0l9jebn5nKbFfM6TsJ2s9KFuWZRHAZTemeHfD5xLyT0pTb6bDdbpcPqA%2BlhKKyWLUfBPx6x29Ke2xt%2BrAkMpsEuzd9qKOHYj0nANBvFUonqsTtudIu6HvHU3C51lvkayCJv7QbEuM3mGBZaOq6fjddIZF%2F5%2F2CW1sD%2FMao4iTuuxTBCLSEJh&X-Amz-Signature=d03472dccb45b7ca9e5a27ab522a4ae87dafe2ad0cb54266c8349caf888ad942&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFETUDY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIa9wvOam4d%2FjGQcv1dbhYJsbSUJa67hvYB5sQ3x8CHAiAycp53FjdRZoxYglTVzkgTR9ok319VgB8fVJy824uM2yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFUYFdM9Yzdw5AIKKtwDbIqB0lVPrkJI%2BoJGGrKhP232XSTTSY7bxoUx7eK4VIYjGVPpv%2BmJ8JLmXBdzeVSzGZSNLhGkc5ZJvIDRb8QPYPffQKOZjCSuJC729Kua2%2FhcyCNE5FxZ6Gsh6awkTYBNiWqJMzfKDuwOwD1IkoZA5sJqftqa%2BY7afpv8I0%2BsWVUxlydx8KF%2Bpzc0%2Bk8aDx06B5s36%2BA4N5qu52OVxerYkfrTkwg7iT49nl1tT8zMxEbHuTE54zNrE%2FU6k%2FS6ewP3R8JPlQNAvCCP8A4huiWUH3%2FMiByXQmyzMVc1kSR1oI148roDjni51jJS7FqeUKJMiWHvTxVGXHWO%2FXqkS7u%2FwHrn9TBDSUsv9JHIiQs0PVDsbq%2BwGiSgwgBmYDCrl63o8QKNd43PA29ZVVJKCjwhXPIdByPsaN%2B3lh3giTSctfF%2FGK4vw8pJCXZqv7pDGOUEL7Uyfp2POK%2FlK8iBSUgrJ7VMObixO1yv7s3%2BRZZsU9swtvGBAxdVccmBmxnF7e4CfO1FFyYu5hKJ7h5gEyl2IR0vFW%2FPb0Qdrlcl5iK%2BVFgqfJsgv9yBAkWEtHHOLyEI4kCdM%2BWczhw9SNr1s2kaNzxw3VoXWhNm5gOCJuxz65OG08px86Hea0O8xMgw9eufwgY6pgEmAW5NLDLz%2FHySWFuUqOJkr1j4PzY%2Bi9HGQ99I6Hb%2F0l9jebn5nKbFfM6TsJ2s9KFuWZRHAZTemeHfD5xLyT0pTb6bDdbpcPqA%2BlhKKyWLUfBPx6x29Ke2xt%2BrAkMpsEuzd9qKOHYj0nANBvFUonqsTtudIu6HvHU3C51lvkayCJv7QbEuM3mGBZaOq6fjddIZF%2F5%2F2CW1sD%2FMao4iTuuxTBCLSEJh&X-Amz-Signature=07f0d9942d169cb18de24f94e76aec11022ef2b546dc37a30777e92f0189c9e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJFETUDY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIa9wvOam4d%2FjGQcv1dbhYJsbSUJa67hvYB5sQ3x8CHAiAycp53FjdRZoxYglTVzkgTR9ok319VgB8fVJy824uM2yqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQFUYFdM9Yzdw5AIKKtwDbIqB0lVPrkJI%2BoJGGrKhP232XSTTSY7bxoUx7eK4VIYjGVPpv%2BmJ8JLmXBdzeVSzGZSNLhGkc5ZJvIDRb8QPYPffQKOZjCSuJC729Kua2%2FhcyCNE5FxZ6Gsh6awkTYBNiWqJMzfKDuwOwD1IkoZA5sJqftqa%2BY7afpv8I0%2BsWVUxlydx8KF%2Bpzc0%2Bk8aDx06B5s36%2BA4N5qu52OVxerYkfrTkwg7iT49nl1tT8zMxEbHuTE54zNrE%2FU6k%2FS6ewP3R8JPlQNAvCCP8A4huiWUH3%2FMiByXQmyzMVc1kSR1oI148roDjni51jJS7FqeUKJMiWHvTxVGXHWO%2FXqkS7u%2FwHrn9TBDSUsv9JHIiQs0PVDsbq%2BwGiSgwgBmYDCrl63o8QKNd43PA29ZVVJKCjwhXPIdByPsaN%2B3lh3giTSctfF%2FGK4vw8pJCXZqv7pDGOUEL7Uyfp2POK%2FlK8iBSUgrJ7VMObixO1yv7s3%2BRZZsU9swtvGBAxdVccmBmxnF7e4CfO1FFyYu5hKJ7h5gEyl2IR0vFW%2FPb0Qdrlcl5iK%2BVFgqfJsgv9yBAkWEtHHOLyEI4kCdM%2BWczhw9SNr1s2kaNzxw3VoXWhNm5gOCJuxz65OG08px86Hea0O8xMgw9eufwgY6pgEmAW5NLDLz%2FHySWFuUqOJkr1j4PzY%2Bi9HGQ99I6Hb%2F0l9jebn5nKbFfM6TsJ2s9KFuWZRHAZTemeHfD5xLyT0pTb6bDdbpcPqA%2BlhKKyWLUfBPx6x29Ke2xt%2BrAkMpsEuzd9qKOHYj0nANBvFUonqsTtudIu6HvHU3C51lvkayCJv7QbEuM3mGBZaOq6fjddIZF%2F5%2F2CW1sD%2FMao4iTuuxTBCLSEJh&X-Amz-Signature=4c3d3f8c6a7366ae176f207bd1534c82055261332b3e4ad8ed8f4cd1c1e1cd34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
