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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLI5XBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDb4p%2BvmqUMyAIZg4kD5FQun%2FIfwQhq5ef4BCOIh41d8QIgExbCAs5UO85yHOUJ3jKGoGUqmqLvtfe%2BMPDbwtY3Ga0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA%2Bb8tUsrmOgdKN%2BVyrcAzjVFu1EVZsjphZLUbfOJsbuLoAVpheAoDxrIXbs%2B5WSPrj8eZRdtCkmeyAdVqfdg2Bunf5gQtgRIsHaedEaqSXsC%2FPbzDB%2F5wxCEqH2mRbzfAUf%2Bq5RGMhoyYAeQNNKhpPDrQ9AcAv3VW7fV8HfyP%2BsH%2Fgz6wlA%2BGEcRrGRsOmscR5cmqeJe1JD9bOPo0C%2ByNdwzbzQCcUMSAlfnGmby%2B765S8mR%2Fbp0CC1qLotRX2cw2W372BIcjx2SdSmuQ8qqgTgDriwhNu%2BhsC866uaXag9agQCMyD8CWHfs6%2FLNI62mHzymj%2BHB4xLdcX%2FNvHKpcz9AuncQXDyfh%2Bs5IdWLcLXMEy4OBL9l3onbvKgFRWcaHGMibCsdDys0LKjnuaXKxgvlOb8B%2B9yjb%2Fqae0Bkvnz1TsNVxs3ahTwvpE4Rz6LFaxpsRfF2cSXPEQwx7yb8koA1LGybkSBl%2F7J7ONrEIKHX7fEIfuDn94YncbudQdTbch1NXeMYGPd4KPp9VZxB5aF0HcSEiRH%2BXcAGECmnpKNgHKTaOVi6UHO1KmlLVQxBqPZgHwjlJvn%2BWT9JRGFxMJyWq1j4I0nbB5U5JKWQo9pX0spZCKqAtgrvoh8PRqjboU6P6nMPeiSIwZvMNbnoMMGOqUBKF79n9CiDfrZLvC3TLwwH%2Fwt7DxCxlsvHGb6Gf2E5nMYrmHifYp%2FT8yhlapUUw1473twsBCyJEF8BX6hB%2BbmmvAXpYtjRc%2B1TaQnC%2BisNB3hthm%2FxWvlRqIyJn%2FfHWp6FS5ztosZ5ooTmHrGUZQ0ZwUu%2B2CZ1QzNjc6w%2BKfzbkh1kzWPwT9jxxxnWGSkAuPi1ux99CRw5Rxj6bcHkJ%2Bfk7rGIhLa&X-Amz-Signature=1675a8ef020ee1ef0adfa64cccecb3404800b4124206ee3c0a94d49abeaa4cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLI5XBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDb4p%2BvmqUMyAIZg4kD5FQun%2FIfwQhq5ef4BCOIh41d8QIgExbCAs5UO85yHOUJ3jKGoGUqmqLvtfe%2BMPDbwtY3Ga0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA%2Bb8tUsrmOgdKN%2BVyrcAzjVFu1EVZsjphZLUbfOJsbuLoAVpheAoDxrIXbs%2B5WSPrj8eZRdtCkmeyAdVqfdg2Bunf5gQtgRIsHaedEaqSXsC%2FPbzDB%2F5wxCEqH2mRbzfAUf%2Bq5RGMhoyYAeQNNKhpPDrQ9AcAv3VW7fV8HfyP%2BsH%2Fgz6wlA%2BGEcRrGRsOmscR5cmqeJe1JD9bOPo0C%2ByNdwzbzQCcUMSAlfnGmby%2B765S8mR%2Fbp0CC1qLotRX2cw2W372BIcjx2SdSmuQ8qqgTgDriwhNu%2BhsC866uaXag9agQCMyD8CWHfs6%2FLNI62mHzymj%2BHB4xLdcX%2FNvHKpcz9AuncQXDyfh%2Bs5IdWLcLXMEy4OBL9l3onbvKgFRWcaHGMibCsdDys0LKjnuaXKxgvlOb8B%2B9yjb%2Fqae0Bkvnz1TsNVxs3ahTwvpE4Rz6LFaxpsRfF2cSXPEQwx7yb8koA1LGybkSBl%2F7J7ONrEIKHX7fEIfuDn94YncbudQdTbch1NXeMYGPd4KPp9VZxB5aF0HcSEiRH%2BXcAGECmnpKNgHKTaOVi6UHO1KmlLVQxBqPZgHwjlJvn%2BWT9JRGFxMJyWq1j4I0nbB5U5JKWQo9pX0spZCKqAtgrvoh8PRqjboU6P6nMPeiSIwZvMNbnoMMGOqUBKF79n9CiDfrZLvC3TLwwH%2Fwt7DxCxlsvHGb6Gf2E5nMYrmHifYp%2FT8yhlapUUw1473twsBCyJEF8BX6hB%2BbmmvAXpYtjRc%2B1TaQnC%2BisNB3hthm%2FxWvlRqIyJn%2FfHWp6FS5ztosZ5ooTmHrGUZQ0ZwUu%2B2CZ1QzNjc6w%2BKfzbkh1kzWPwT9jxxxnWGSkAuPi1ux99CRw5Rxj6bcHkJ%2Bfk7rGIhLa&X-Amz-Signature=30cb251dd804397174558fb5082119f7cf6b95fc9ec27b6dcccb5304790956af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLI5XBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDb4p%2BvmqUMyAIZg4kD5FQun%2FIfwQhq5ef4BCOIh41d8QIgExbCAs5UO85yHOUJ3jKGoGUqmqLvtfe%2BMPDbwtY3Ga0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA%2Bb8tUsrmOgdKN%2BVyrcAzjVFu1EVZsjphZLUbfOJsbuLoAVpheAoDxrIXbs%2B5WSPrj8eZRdtCkmeyAdVqfdg2Bunf5gQtgRIsHaedEaqSXsC%2FPbzDB%2F5wxCEqH2mRbzfAUf%2Bq5RGMhoyYAeQNNKhpPDrQ9AcAv3VW7fV8HfyP%2BsH%2Fgz6wlA%2BGEcRrGRsOmscR5cmqeJe1JD9bOPo0C%2ByNdwzbzQCcUMSAlfnGmby%2B765S8mR%2Fbp0CC1qLotRX2cw2W372BIcjx2SdSmuQ8qqgTgDriwhNu%2BhsC866uaXag9agQCMyD8CWHfs6%2FLNI62mHzymj%2BHB4xLdcX%2FNvHKpcz9AuncQXDyfh%2Bs5IdWLcLXMEy4OBL9l3onbvKgFRWcaHGMibCsdDys0LKjnuaXKxgvlOb8B%2B9yjb%2Fqae0Bkvnz1TsNVxs3ahTwvpE4Rz6LFaxpsRfF2cSXPEQwx7yb8koA1LGybkSBl%2F7J7ONrEIKHX7fEIfuDn94YncbudQdTbch1NXeMYGPd4KPp9VZxB5aF0HcSEiRH%2BXcAGECmnpKNgHKTaOVi6UHO1KmlLVQxBqPZgHwjlJvn%2BWT9JRGFxMJyWq1j4I0nbB5U5JKWQo9pX0spZCKqAtgrvoh8PRqjboU6P6nMPeiSIwZvMNbnoMMGOqUBKF79n9CiDfrZLvC3TLwwH%2Fwt7DxCxlsvHGb6Gf2E5nMYrmHifYp%2FT8yhlapUUw1473twsBCyJEF8BX6hB%2BbmmvAXpYtjRc%2B1TaQnC%2BisNB3hthm%2FxWvlRqIyJn%2FfHWp6FS5ztosZ5ooTmHrGUZQ0ZwUu%2B2CZ1QzNjc6w%2BKfzbkh1kzWPwT9jxxxnWGSkAuPi1ux99CRw5Rxj6bcHkJ%2Bfk7rGIhLa&X-Amz-Signature=2a9bbb9ef6bdbe7ecb3835f6efd6f8332720d30f47542dad459dd1acfb3fcdfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLI5XBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDb4p%2BvmqUMyAIZg4kD5FQun%2FIfwQhq5ef4BCOIh41d8QIgExbCAs5UO85yHOUJ3jKGoGUqmqLvtfe%2BMPDbwtY3Ga0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA%2Bb8tUsrmOgdKN%2BVyrcAzjVFu1EVZsjphZLUbfOJsbuLoAVpheAoDxrIXbs%2B5WSPrj8eZRdtCkmeyAdVqfdg2Bunf5gQtgRIsHaedEaqSXsC%2FPbzDB%2F5wxCEqH2mRbzfAUf%2Bq5RGMhoyYAeQNNKhpPDrQ9AcAv3VW7fV8HfyP%2BsH%2Fgz6wlA%2BGEcRrGRsOmscR5cmqeJe1JD9bOPo0C%2ByNdwzbzQCcUMSAlfnGmby%2B765S8mR%2Fbp0CC1qLotRX2cw2W372BIcjx2SdSmuQ8qqgTgDriwhNu%2BhsC866uaXag9agQCMyD8CWHfs6%2FLNI62mHzymj%2BHB4xLdcX%2FNvHKpcz9AuncQXDyfh%2Bs5IdWLcLXMEy4OBL9l3onbvKgFRWcaHGMibCsdDys0LKjnuaXKxgvlOb8B%2B9yjb%2Fqae0Bkvnz1TsNVxs3ahTwvpE4Rz6LFaxpsRfF2cSXPEQwx7yb8koA1LGybkSBl%2F7J7ONrEIKHX7fEIfuDn94YncbudQdTbch1NXeMYGPd4KPp9VZxB5aF0HcSEiRH%2BXcAGECmnpKNgHKTaOVi6UHO1KmlLVQxBqPZgHwjlJvn%2BWT9JRGFxMJyWq1j4I0nbB5U5JKWQo9pX0spZCKqAtgrvoh8PRqjboU6P6nMPeiSIwZvMNbnoMMGOqUBKF79n9CiDfrZLvC3TLwwH%2Fwt7DxCxlsvHGb6Gf2E5nMYrmHifYp%2FT8yhlapUUw1473twsBCyJEF8BX6hB%2BbmmvAXpYtjRc%2B1TaQnC%2BisNB3hthm%2FxWvlRqIyJn%2FfHWp6FS5ztosZ5ooTmHrGUZQ0ZwUu%2B2CZ1QzNjc6w%2BKfzbkh1kzWPwT9jxxxnWGSkAuPi1ux99CRw5Rxj6bcHkJ%2Bfk7rGIhLa&X-Amz-Signature=3d63f1b5d26c617f4ce09cf8578635d87c8146fab4ba74ad970a5ae29ce1f7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLI5XBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDb4p%2BvmqUMyAIZg4kD5FQun%2FIfwQhq5ef4BCOIh41d8QIgExbCAs5UO85yHOUJ3jKGoGUqmqLvtfe%2BMPDbwtY3Ga0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA%2Bb8tUsrmOgdKN%2BVyrcAzjVFu1EVZsjphZLUbfOJsbuLoAVpheAoDxrIXbs%2B5WSPrj8eZRdtCkmeyAdVqfdg2Bunf5gQtgRIsHaedEaqSXsC%2FPbzDB%2F5wxCEqH2mRbzfAUf%2Bq5RGMhoyYAeQNNKhpPDrQ9AcAv3VW7fV8HfyP%2BsH%2Fgz6wlA%2BGEcRrGRsOmscR5cmqeJe1JD9bOPo0C%2ByNdwzbzQCcUMSAlfnGmby%2B765S8mR%2Fbp0CC1qLotRX2cw2W372BIcjx2SdSmuQ8qqgTgDriwhNu%2BhsC866uaXag9agQCMyD8CWHfs6%2FLNI62mHzymj%2BHB4xLdcX%2FNvHKpcz9AuncQXDyfh%2Bs5IdWLcLXMEy4OBL9l3onbvKgFRWcaHGMibCsdDys0LKjnuaXKxgvlOb8B%2B9yjb%2Fqae0Bkvnz1TsNVxs3ahTwvpE4Rz6LFaxpsRfF2cSXPEQwx7yb8koA1LGybkSBl%2F7J7ONrEIKHX7fEIfuDn94YncbudQdTbch1NXeMYGPd4KPp9VZxB5aF0HcSEiRH%2BXcAGECmnpKNgHKTaOVi6UHO1KmlLVQxBqPZgHwjlJvn%2BWT9JRGFxMJyWq1j4I0nbB5U5JKWQo9pX0spZCKqAtgrvoh8PRqjboU6P6nMPeiSIwZvMNbnoMMGOqUBKF79n9CiDfrZLvC3TLwwH%2Fwt7DxCxlsvHGb6Gf2E5nMYrmHifYp%2FT8yhlapUUw1473twsBCyJEF8BX6hB%2BbmmvAXpYtjRc%2B1TaQnC%2BisNB3hthm%2FxWvlRqIyJn%2FfHWp6FS5ztosZ5ooTmHrGUZQ0ZwUu%2B2CZ1QzNjc6w%2BKfzbkh1kzWPwT9jxxxnWGSkAuPi1ux99CRw5Rxj6bcHkJ%2Bfk7rGIhLa&X-Amz-Signature=8e6e15ea0101ab306c6c945abb1cc61e12947bac1ea66319fe0674ee36e4f2ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLI5XBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDb4p%2BvmqUMyAIZg4kD5FQun%2FIfwQhq5ef4BCOIh41d8QIgExbCAs5UO85yHOUJ3jKGoGUqmqLvtfe%2BMPDbwtY3Ga0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA%2Bb8tUsrmOgdKN%2BVyrcAzjVFu1EVZsjphZLUbfOJsbuLoAVpheAoDxrIXbs%2B5WSPrj8eZRdtCkmeyAdVqfdg2Bunf5gQtgRIsHaedEaqSXsC%2FPbzDB%2F5wxCEqH2mRbzfAUf%2Bq5RGMhoyYAeQNNKhpPDrQ9AcAv3VW7fV8HfyP%2BsH%2Fgz6wlA%2BGEcRrGRsOmscR5cmqeJe1JD9bOPo0C%2ByNdwzbzQCcUMSAlfnGmby%2B765S8mR%2Fbp0CC1qLotRX2cw2W372BIcjx2SdSmuQ8qqgTgDriwhNu%2BhsC866uaXag9agQCMyD8CWHfs6%2FLNI62mHzymj%2BHB4xLdcX%2FNvHKpcz9AuncQXDyfh%2Bs5IdWLcLXMEy4OBL9l3onbvKgFRWcaHGMibCsdDys0LKjnuaXKxgvlOb8B%2B9yjb%2Fqae0Bkvnz1TsNVxs3ahTwvpE4Rz6LFaxpsRfF2cSXPEQwx7yb8koA1LGybkSBl%2F7J7ONrEIKHX7fEIfuDn94YncbudQdTbch1NXeMYGPd4KPp9VZxB5aF0HcSEiRH%2BXcAGECmnpKNgHKTaOVi6UHO1KmlLVQxBqPZgHwjlJvn%2BWT9JRGFxMJyWq1j4I0nbB5U5JKWQo9pX0spZCKqAtgrvoh8PRqjboU6P6nMPeiSIwZvMNbnoMMGOqUBKF79n9CiDfrZLvC3TLwwH%2Fwt7DxCxlsvHGb6Gf2E5nMYrmHifYp%2FT8yhlapUUw1473twsBCyJEF8BX6hB%2BbmmvAXpYtjRc%2B1TaQnC%2BisNB3hthm%2FxWvlRqIyJn%2FfHWp6FS5ztosZ5ooTmHrGUZQ0ZwUu%2B2CZ1QzNjc6w%2BKfzbkh1kzWPwT9jxxxnWGSkAuPi1ux99CRw5Rxj6bcHkJ%2Bfk7rGIhLa&X-Amz-Signature=2337000f6c825d1c5cf6dcecbbfa9699defbe5fe3efa74ab06d3f7c63d66338f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLI5XBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDb4p%2BvmqUMyAIZg4kD5FQun%2FIfwQhq5ef4BCOIh41d8QIgExbCAs5UO85yHOUJ3jKGoGUqmqLvtfe%2BMPDbwtY3Ga0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA%2Bb8tUsrmOgdKN%2BVyrcAzjVFu1EVZsjphZLUbfOJsbuLoAVpheAoDxrIXbs%2B5WSPrj8eZRdtCkmeyAdVqfdg2Bunf5gQtgRIsHaedEaqSXsC%2FPbzDB%2F5wxCEqH2mRbzfAUf%2Bq5RGMhoyYAeQNNKhpPDrQ9AcAv3VW7fV8HfyP%2BsH%2Fgz6wlA%2BGEcRrGRsOmscR5cmqeJe1JD9bOPo0C%2ByNdwzbzQCcUMSAlfnGmby%2B765S8mR%2Fbp0CC1qLotRX2cw2W372BIcjx2SdSmuQ8qqgTgDriwhNu%2BhsC866uaXag9agQCMyD8CWHfs6%2FLNI62mHzymj%2BHB4xLdcX%2FNvHKpcz9AuncQXDyfh%2Bs5IdWLcLXMEy4OBL9l3onbvKgFRWcaHGMibCsdDys0LKjnuaXKxgvlOb8B%2B9yjb%2Fqae0Bkvnz1TsNVxs3ahTwvpE4Rz6LFaxpsRfF2cSXPEQwx7yb8koA1LGybkSBl%2F7J7ONrEIKHX7fEIfuDn94YncbudQdTbch1NXeMYGPd4KPp9VZxB5aF0HcSEiRH%2BXcAGECmnpKNgHKTaOVi6UHO1KmlLVQxBqPZgHwjlJvn%2BWT9JRGFxMJyWq1j4I0nbB5U5JKWQo9pX0spZCKqAtgrvoh8PRqjboU6P6nMPeiSIwZvMNbnoMMGOqUBKF79n9CiDfrZLvC3TLwwH%2Fwt7DxCxlsvHGb6Gf2E5nMYrmHifYp%2FT8yhlapUUw1473twsBCyJEF8BX6hB%2BbmmvAXpYtjRc%2B1TaQnC%2BisNB3hthm%2FxWvlRqIyJn%2FfHWp6FS5ztosZ5ooTmHrGUZQ0ZwUu%2B2CZ1QzNjc6w%2BKfzbkh1kzWPwT9jxxxnWGSkAuPi1ux99CRw5Rxj6bcHkJ%2Bfk7rGIhLa&X-Amz-Signature=8b6e4c005f202d3f9fb0245af8080554aeaf930f9ef97245244cd17c39d48a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLI5XBOG%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDb4p%2BvmqUMyAIZg4kD5FQun%2FIfwQhq5ef4BCOIh41d8QIgExbCAs5UO85yHOUJ3jKGoGUqmqLvtfe%2BMPDbwtY3Ga0q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDA%2Bb8tUsrmOgdKN%2BVyrcAzjVFu1EVZsjphZLUbfOJsbuLoAVpheAoDxrIXbs%2B5WSPrj8eZRdtCkmeyAdVqfdg2Bunf5gQtgRIsHaedEaqSXsC%2FPbzDB%2F5wxCEqH2mRbzfAUf%2Bq5RGMhoyYAeQNNKhpPDrQ9AcAv3VW7fV8HfyP%2BsH%2Fgz6wlA%2BGEcRrGRsOmscR5cmqeJe1JD9bOPo0C%2ByNdwzbzQCcUMSAlfnGmby%2B765S8mR%2Fbp0CC1qLotRX2cw2W372BIcjx2SdSmuQ8qqgTgDriwhNu%2BhsC866uaXag9agQCMyD8CWHfs6%2FLNI62mHzymj%2BHB4xLdcX%2FNvHKpcz9AuncQXDyfh%2Bs5IdWLcLXMEy4OBL9l3onbvKgFRWcaHGMibCsdDys0LKjnuaXKxgvlOb8B%2B9yjb%2Fqae0Bkvnz1TsNVxs3ahTwvpE4Rz6LFaxpsRfF2cSXPEQwx7yb8koA1LGybkSBl%2F7J7ONrEIKHX7fEIfuDn94YncbudQdTbch1NXeMYGPd4KPp9VZxB5aF0HcSEiRH%2BXcAGECmnpKNgHKTaOVi6UHO1KmlLVQxBqPZgHwjlJvn%2BWT9JRGFxMJyWq1j4I0nbB5U5JKWQo9pX0spZCKqAtgrvoh8PRqjboU6P6nMPeiSIwZvMNbnoMMGOqUBKF79n9CiDfrZLvC3TLwwH%2Fwt7DxCxlsvHGb6Gf2E5nMYrmHifYp%2FT8yhlapUUw1473twsBCyJEF8BX6hB%2BbmmvAXpYtjRc%2B1TaQnC%2BisNB3hthm%2FxWvlRqIyJn%2FfHWp6FS5ztosZ5ooTmHrGUZQ0ZwUu%2B2CZ1QzNjc6w%2BKfzbkh1kzWPwT9jxxxnWGSkAuPi1ux99CRw5Rxj6bcHkJ%2Bfk7rGIhLa&X-Amz-Signature=721f129334441a4cd5d5a93476c54cb3a184fe00febd11df7f2c13000efde8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
