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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFAOZ52%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw%2F9FCY9%2BF4QdDBlhqcfZjtWJAVnx2x7nTbzAfkwPPFAiBLZN8CfhXiuYECHGGrPe7FfMxlvE72r4URDQitCSm5vyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMmfXIiodrScHSUzfNKtwDoc%2BduzwqHoan52nDgIBzGtUObTo14aOdefg0t3%2FLTo7e1apcMLIO96MsProJr4YFORpWX7l36Bzl1FL1gLE9vlskfH12t8nYZmzeRIixU%2F3mmBp%2Fk3LyNn3DoQfhNAqrmq0Y8bGwYCD7kvY%2BN94xqTIjyFY4yKRiX3KH1fa71ZoQnV6ivswVjmh0qGqFZxJh3Bmq8OWnoVirkLaWRjrvUeTuJfl%2BaaibDfr1YLaQZDRGgZG%2FQOkk6zwsujUuLmvDywc3fisodxGaSgYgW7ZylG1Eob3m9Ch6ryQk%2B3me5VCPN6EArxaR8es1GNOSi0gTdnwimbyMI3qIIenPDomMhhBK5unOFlfV0MhEdMKeBgAar9zL7J2oOgrMjv2Ml19IbV5VGF%2F%2FNDH9g2nVycLtridUPIGs28Bs2cNnBK2I9nkkgqSrzyX46lU%2FsoX78drC%2FznXdwxpZlsG9aVD0jiN%2Fql3V9qSpMoM7MSmeCeCqAh8GOJHL4%2FPmqPX1qvIUHEBb%2BHHLsWInJOFDtzzDkbiJAv66oF7lvG%2FFQKi%2F6grDVz7xLyeqBk%2BwVu%2BuHOX%2BYZmc2SYTAh9nFmRje%2BpSg%2FI3Vtcd39VebRQoRhmWemV5TUM53TfKYIucrecahcw5dKSwgY6pgFxe0yetlyYbXcMHW8khVvKkw9gahlX34rytraPrKwBw5J%2FHmVg2ow58hF5stRVKAl747l5AmOypeKyxGUbVQKEfdGu2%2Fc5orHD6n5FUT%2BItql%2BDjEIw%2FMc2Cyn8wm34GsYHRu2K5u%2FxNm1PrjfUyNqaq3Q3CMY31JTzNO7jaAvA7OygdU1kPXFgzY69GpIVBWVnm3uJ10BrKC8c5Wu4Hm38fBRnkPq&X-Amz-Signature=05f02566dd6a84b2e7fa9fc5c5f8f93b361e96f1ad8a07c8fb35aef43376349b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFAOZ52%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw%2F9FCY9%2BF4QdDBlhqcfZjtWJAVnx2x7nTbzAfkwPPFAiBLZN8CfhXiuYECHGGrPe7FfMxlvE72r4URDQitCSm5vyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMmfXIiodrScHSUzfNKtwDoc%2BduzwqHoan52nDgIBzGtUObTo14aOdefg0t3%2FLTo7e1apcMLIO96MsProJr4YFORpWX7l36Bzl1FL1gLE9vlskfH12t8nYZmzeRIixU%2F3mmBp%2Fk3LyNn3DoQfhNAqrmq0Y8bGwYCD7kvY%2BN94xqTIjyFY4yKRiX3KH1fa71ZoQnV6ivswVjmh0qGqFZxJh3Bmq8OWnoVirkLaWRjrvUeTuJfl%2BaaibDfr1YLaQZDRGgZG%2FQOkk6zwsujUuLmvDywc3fisodxGaSgYgW7ZylG1Eob3m9Ch6ryQk%2B3me5VCPN6EArxaR8es1GNOSi0gTdnwimbyMI3qIIenPDomMhhBK5unOFlfV0MhEdMKeBgAar9zL7J2oOgrMjv2Ml19IbV5VGF%2F%2FNDH9g2nVycLtridUPIGs28Bs2cNnBK2I9nkkgqSrzyX46lU%2FsoX78drC%2FznXdwxpZlsG9aVD0jiN%2Fql3V9qSpMoM7MSmeCeCqAh8GOJHL4%2FPmqPX1qvIUHEBb%2BHHLsWInJOFDtzzDkbiJAv66oF7lvG%2FFQKi%2F6grDVz7xLyeqBk%2BwVu%2BuHOX%2BYZmc2SYTAh9nFmRje%2BpSg%2FI3Vtcd39VebRQoRhmWemV5TUM53TfKYIucrecahcw5dKSwgY6pgFxe0yetlyYbXcMHW8khVvKkw9gahlX34rytraPrKwBw5J%2FHmVg2ow58hF5stRVKAl747l5AmOypeKyxGUbVQKEfdGu2%2Fc5orHD6n5FUT%2BItql%2BDjEIw%2FMc2Cyn8wm34GsYHRu2K5u%2FxNm1PrjfUyNqaq3Q3CMY31JTzNO7jaAvA7OygdU1kPXFgzY69GpIVBWVnm3uJ10BrKC8c5Wu4Hm38fBRnkPq&X-Amz-Signature=0cd992f91fbd993f4783b7ea24b34a327d6b79b17b44d15b993e4479a7bf3cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFAOZ52%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw%2F9FCY9%2BF4QdDBlhqcfZjtWJAVnx2x7nTbzAfkwPPFAiBLZN8CfhXiuYECHGGrPe7FfMxlvE72r4URDQitCSm5vyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMmfXIiodrScHSUzfNKtwDoc%2BduzwqHoan52nDgIBzGtUObTo14aOdefg0t3%2FLTo7e1apcMLIO96MsProJr4YFORpWX7l36Bzl1FL1gLE9vlskfH12t8nYZmzeRIixU%2F3mmBp%2Fk3LyNn3DoQfhNAqrmq0Y8bGwYCD7kvY%2BN94xqTIjyFY4yKRiX3KH1fa71ZoQnV6ivswVjmh0qGqFZxJh3Bmq8OWnoVirkLaWRjrvUeTuJfl%2BaaibDfr1YLaQZDRGgZG%2FQOkk6zwsujUuLmvDywc3fisodxGaSgYgW7ZylG1Eob3m9Ch6ryQk%2B3me5VCPN6EArxaR8es1GNOSi0gTdnwimbyMI3qIIenPDomMhhBK5unOFlfV0MhEdMKeBgAar9zL7J2oOgrMjv2Ml19IbV5VGF%2F%2FNDH9g2nVycLtridUPIGs28Bs2cNnBK2I9nkkgqSrzyX46lU%2FsoX78drC%2FznXdwxpZlsG9aVD0jiN%2Fql3V9qSpMoM7MSmeCeCqAh8GOJHL4%2FPmqPX1qvIUHEBb%2BHHLsWInJOFDtzzDkbiJAv66oF7lvG%2FFQKi%2F6grDVz7xLyeqBk%2BwVu%2BuHOX%2BYZmc2SYTAh9nFmRje%2BpSg%2FI3Vtcd39VebRQoRhmWemV5TUM53TfKYIucrecahcw5dKSwgY6pgFxe0yetlyYbXcMHW8khVvKkw9gahlX34rytraPrKwBw5J%2FHmVg2ow58hF5stRVKAl747l5AmOypeKyxGUbVQKEfdGu2%2Fc5orHD6n5FUT%2BItql%2BDjEIw%2FMc2Cyn8wm34GsYHRu2K5u%2FxNm1PrjfUyNqaq3Q3CMY31JTzNO7jaAvA7OygdU1kPXFgzY69GpIVBWVnm3uJ10BrKC8c5Wu4Hm38fBRnkPq&X-Amz-Signature=418f92367232ba687203cee0c449f72cf2614f06ee6c40556f7c3fdf49d955d3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFAOZ52%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw%2F9FCY9%2BF4QdDBlhqcfZjtWJAVnx2x7nTbzAfkwPPFAiBLZN8CfhXiuYECHGGrPe7FfMxlvE72r4URDQitCSm5vyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMmfXIiodrScHSUzfNKtwDoc%2BduzwqHoan52nDgIBzGtUObTo14aOdefg0t3%2FLTo7e1apcMLIO96MsProJr4YFORpWX7l36Bzl1FL1gLE9vlskfH12t8nYZmzeRIixU%2F3mmBp%2Fk3LyNn3DoQfhNAqrmq0Y8bGwYCD7kvY%2BN94xqTIjyFY4yKRiX3KH1fa71ZoQnV6ivswVjmh0qGqFZxJh3Bmq8OWnoVirkLaWRjrvUeTuJfl%2BaaibDfr1YLaQZDRGgZG%2FQOkk6zwsujUuLmvDywc3fisodxGaSgYgW7ZylG1Eob3m9Ch6ryQk%2B3me5VCPN6EArxaR8es1GNOSi0gTdnwimbyMI3qIIenPDomMhhBK5unOFlfV0MhEdMKeBgAar9zL7J2oOgrMjv2Ml19IbV5VGF%2F%2FNDH9g2nVycLtridUPIGs28Bs2cNnBK2I9nkkgqSrzyX46lU%2FsoX78drC%2FznXdwxpZlsG9aVD0jiN%2Fql3V9qSpMoM7MSmeCeCqAh8GOJHL4%2FPmqPX1qvIUHEBb%2BHHLsWInJOFDtzzDkbiJAv66oF7lvG%2FFQKi%2F6grDVz7xLyeqBk%2BwVu%2BuHOX%2BYZmc2SYTAh9nFmRje%2BpSg%2FI3Vtcd39VebRQoRhmWemV5TUM53TfKYIucrecahcw5dKSwgY6pgFxe0yetlyYbXcMHW8khVvKkw9gahlX34rytraPrKwBw5J%2FHmVg2ow58hF5stRVKAl747l5AmOypeKyxGUbVQKEfdGu2%2Fc5orHD6n5FUT%2BItql%2BDjEIw%2FMc2Cyn8wm34GsYHRu2K5u%2FxNm1PrjfUyNqaq3Q3CMY31JTzNO7jaAvA7OygdU1kPXFgzY69GpIVBWVnm3uJ10BrKC8c5Wu4Hm38fBRnkPq&X-Amz-Signature=95e128e6df55e984df688a5e3c894d36a18883088e18140f134920043f4074ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFAOZ52%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw%2F9FCY9%2BF4QdDBlhqcfZjtWJAVnx2x7nTbzAfkwPPFAiBLZN8CfhXiuYECHGGrPe7FfMxlvE72r4URDQitCSm5vyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMmfXIiodrScHSUzfNKtwDoc%2BduzwqHoan52nDgIBzGtUObTo14aOdefg0t3%2FLTo7e1apcMLIO96MsProJr4YFORpWX7l36Bzl1FL1gLE9vlskfH12t8nYZmzeRIixU%2F3mmBp%2Fk3LyNn3DoQfhNAqrmq0Y8bGwYCD7kvY%2BN94xqTIjyFY4yKRiX3KH1fa71ZoQnV6ivswVjmh0qGqFZxJh3Bmq8OWnoVirkLaWRjrvUeTuJfl%2BaaibDfr1YLaQZDRGgZG%2FQOkk6zwsujUuLmvDywc3fisodxGaSgYgW7ZylG1Eob3m9Ch6ryQk%2B3me5VCPN6EArxaR8es1GNOSi0gTdnwimbyMI3qIIenPDomMhhBK5unOFlfV0MhEdMKeBgAar9zL7J2oOgrMjv2Ml19IbV5VGF%2F%2FNDH9g2nVycLtridUPIGs28Bs2cNnBK2I9nkkgqSrzyX46lU%2FsoX78drC%2FznXdwxpZlsG9aVD0jiN%2Fql3V9qSpMoM7MSmeCeCqAh8GOJHL4%2FPmqPX1qvIUHEBb%2BHHLsWInJOFDtzzDkbiJAv66oF7lvG%2FFQKi%2F6grDVz7xLyeqBk%2BwVu%2BuHOX%2BYZmc2SYTAh9nFmRje%2BpSg%2FI3Vtcd39VebRQoRhmWemV5TUM53TfKYIucrecahcw5dKSwgY6pgFxe0yetlyYbXcMHW8khVvKkw9gahlX34rytraPrKwBw5J%2FHmVg2ow58hF5stRVKAl747l5AmOypeKyxGUbVQKEfdGu2%2Fc5orHD6n5FUT%2BItql%2BDjEIw%2FMc2Cyn8wm34GsYHRu2K5u%2FxNm1PrjfUyNqaq3Q3CMY31JTzNO7jaAvA7OygdU1kPXFgzY69GpIVBWVnm3uJ10BrKC8c5Wu4Hm38fBRnkPq&X-Amz-Signature=ea15689816850b088d41edb8a428c0e11ef7f56bb10555046047b141952845c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFAOZ52%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw%2F9FCY9%2BF4QdDBlhqcfZjtWJAVnx2x7nTbzAfkwPPFAiBLZN8CfhXiuYECHGGrPe7FfMxlvE72r4URDQitCSm5vyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMmfXIiodrScHSUzfNKtwDoc%2BduzwqHoan52nDgIBzGtUObTo14aOdefg0t3%2FLTo7e1apcMLIO96MsProJr4YFORpWX7l36Bzl1FL1gLE9vlskfH12t8nYZmzeRIixU%2F3mmBp%2Fk3LyNn3DoQfhNAqrmq0Y8bGwYCD7kvY%2BN94xqTIjyFY4yKRiX3KH1fa71ZoQnV6ivswVjmh0qGqFZxJh3Bmq8OWnoVirkLaWRjrvUeTuJfl%2BaaibDfr1YLaQZDRGgZG%2FQOkk6zwsujUuLmvDywc3fisodxGaSgYgW7ZylG1Eob3m9Ch6ryQk%2B3me5VCPN6EArxaR8es1GNOSi0gTdnwimbyMI3qIIenPDomMhhBK5unOFlfV0MhEdMKeBgAar9zL7J2oOgrMjv2Ml19IbV5VGF%2F%2FNDH9g2nVycLtridUPIGs28Bs2cNnBK2I9nkkgqSrzyX46lU%2FsoX78drC%2FznXdwxpZlsG9aVD0jiN%2Fql3V9qSpMoM7MSmeCeCqAh8GOJHL4%2FPmqPX1qvIUHEBb%2BHHLsWInJOFDtzzDkbiJAv66oF7lvG%2FFQKi%2F6grDVz7xLyeqBk%2BwVu%2BuHOX%2BYZmc2SYTAh9nFmRje%2BpSg%2FI3Vtcd39VebRQoRhmWemV5TUM53TfKYIucrecahcw5dKSwgY6pgFxe0yetlyYbXcMHW8khVvKkw9gahlX34rytraPrKwBw5J%2FHmVg2ow58hF5stRVKAl747l5AmOypeKyxGUbVQKEfdGu2%2Fc5orHD6n5FUT%2BItql%2BDjEIw%2FMc2Cyn8wm34GsYHRu2K5u%2FxNm1PrjfUyNqaq3Q3CMY31JTzNO7jaAvA7OygdU1kPXFgzY69GpIVBWVnm3uJ10BrKC8c5Wu4Hm38fBRnkPq&X-Amz-Signature=b440918de34b599b45c0d0afd4a06e6f03cc8fa774dc5642ddb63e0be443485c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFAOZ52%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw%2F9FCY9%2BF4QdDBlhqcfZjtWJAVnx2x7nTbzAfkwPPFAiBLZN8CfhXiuYECHGGrPe7FfMxlvE72r4URDQitCSm5vyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMmfXIiodrScHSUzfNKtwDoc%2BduzwqHoan52nDgIBzGtUObTo14aOdefg0t3%2FLTo7e1apcMLIO96MsProJr4YFORpWX7l36Bzl1FL1gLE9vlskfH12t8nYZmzeRIixU%2F3mmBp%2Fk3LyNn3DoQfhNAqrmq0Y8bGwYCD7kvY%2BN94xqTIjyFY4yKRiX3KH1fa71ZoQnV6ivswVjmh0qGqFZxJh3Bmq8OWnoVirkLaWRjrvUeTuJfl%2BaaibDfr1YLaQZDRGgZG%2FQOkk6zwsujUuLmvDywc3fisodxGaSgYgW7ZylG1Eob3m9Ch6ryQk%2B3me5VCPN6EArxaR8es1GNOSi0gTdnwimbyMI3qIIenPDomMhhBK5unOFlfV0MhEdMKeBgAar9zL7J2oOgrMjv2Ml19IbV5VGF%2F%2FNDH9g2nVycLtridUPIGs28Bs2cNnBK2I9nkkgqSrzyX46lU%2FsoX78drC%2FznXdwxpZlsG9aVD0jiN%2Fql3V9qSpMoM7MSmeCeCqAh8GOJHL4%2FPmqPX1qvIUHEBb%2BHHLsWInJOFDtzzDkbiJAv66oF7lvG%2FFQKi%2F6grDVz7xLyeqBk%2BwVu%2BuHOX%2BYZmc2SYTAh9nFmRje%2BpSg%2FI3Vtcd39VebRQoRhmWemV5TUM53TfKYIucrecahcw5dKSwgY6pgFxe0yetlyYbXcMHW8khVvKkw9gahlX34rytraPrKwBw5J%2FHmVg2ow58hF5stRVKAl747l5AmOypeKyxGUbVQKEfdGu2%2Fc5orHD6n5FUT%2BItql%2BDjEIw%2FMc2Cyn8wm34GsYHRu2K5u%2FxNm1PrjfUyNqaq3Q3CMY31JTzNO7jaAvA7OygdU1kPXFgzY69GpIVBWVnm3uJ10BrKC8c5Wu4Hm38fBRnkPq&X-Amz-Signature=d73d970155ecd0ecfd3071021f894bd837812a9d87b07f06828acedf6684172f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFAOZ52%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw%2F9FCY9%2BF4QdDBlhqcfZjtWJAVnx2x7nTbzAfkwPPFAiBLZN8CfhXiuYECHGGrPe7FfMxlvE72r4URDQitCSm5vyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMmfXIiodrScHSUzfNKtwDoc%2BduzwqHoan52nDgIBzGtUObTo14aOdefg0t3%2FLTo7e1apcMLIO96MsProJr4YFORpWX7l36Bzl1FL1gLE9vlskfH12t8nYZmzeRIixU%2F3mmBp%2Fk3LyNn3DoQfhNAqrmq0Y8bGwYCD7kvY%2BN94xqTIjyFY4yKRiX3KH1fa71ZoQnV6ivswVjmh0qGqFZxJh3Bmq8OWnoVirkLaWRjrvUeTuJfl%2BaaibDfr1YLaQZDRGgZG%2FQOkk6zwsujUuLmvDywc3fisodxGaSgYgW7ZylG1Eob3m9Ch6ryQk%2B3me5VCPN6EArxaR8es1GNOSi0gTdnwimbyMI3qIIenPDomMhhBK5unOFlfV0MhEdMKeBgAar9zL7J2oOgrMjv2Ml19IbV5VGF%2F%2FNDH9g2nVycLtridUPIGs28Bs2cNnBK2I9nkkgqSrzyX46lU%2FsoX78drC%2FznXdwxpZlsG9aVD0jiN%2Fql3V9qSpMoM7MSmeCeCqAh8GOJHL4%2FPmqPX1qvIUHEBb%2BHHLsWInJOFDtzzDkbiJAv66oF7lvG%2FFQKi%2F6grDVz7xLyeqBk%2BwVu%2BuHOX%2BYZmc2SYTAh9nFmRje%2BpSg%2FI3Vtcd39VebRQoRhmWemV5TUM53TfKYIucrecahcw5dKSwgY6pgFxe0yetlyYbXcMHW8khVvKkw9gahlX34rytraPrKwBw5J%2FHmVg2ow58hF5stRVKAl747l5AmOypeKyxGUbVQKEfdGu2%2Fc5orHD6n5FUT%2BItql%2BDjEIw%2FMc2Cyn8wm34GsYHRu2K5u%2FxNm1PrjfUyNqaq3Q3CMY31JTzNO7jaAvA7OygdU1kPXFgzY69GpIVBWVnm3uJ10BrKC8c5Wu4Hm38fBRnkPq&X-Amz-Signature=1b00ec88193d51e8169d2367f87680033ffddc18ddaaf53cf3d9801a1e8ec7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
