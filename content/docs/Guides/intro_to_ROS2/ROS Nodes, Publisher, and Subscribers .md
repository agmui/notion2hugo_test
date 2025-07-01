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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLENELN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQXh9LUJDJy34sSNriSxqfjKNtBAikedqBTut82UqPeAiBtA3iakMS09NDNz2iLHGyTYg8W3SI5KuYxTqe62HBGLSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2%2F%2FNRB72QpuBn6r%2BKtwDaDYm0x0OQI9wle6JQzFDbqfhn1%2BtALVBi%2ByqCaUudMVmfSJvcNA%2BuXldtEw148Q2Vr51K8xpJBsy3S0ZJPgA7bfx1M822JYH0CAD4lpB0KK7JurWvcaKnzPTJQl%2BQO%2B5A%2BYy1rjpruFvVop8EDyvhS2cSiB3KC8YlWDvrlodPQba0wDQgAk2NY01skF2sGvMtrh3Mat8pp76rf3%2B2W0iCU4PuWamv0TLCm%2BFryT1YZ9zWtMozFVWpwakV7fwIGqzJv6iD%2FjIftymCqOjMGMfJQonWCysHFNRWgCxDIcuAf5vvMEgJD%2Bw2b%2F%2F6%2FkQWUDFzrlChtBmjCpsQKsRkpRzzNPtg7E6FEMGxnRjh29OOC%2Fb6JK1wMbhtkyt8JXlmMou8KgSZlxiNfS7edPN9MgkEUSoCvok0Wa4W0vtAURq5B2uJANaVrePBRE9RhGlD%2BlyphBfFBSZgJHTh8WAfEczPMTAHKqOl8COR1YC2cvOA3dhFYVQZf3UmLLh4bEVh5B0UqnwPGcMyFFzbBe3R8lLVETd3qUZsHkKWXNllWA%2B2hPIuL44XfDwaqAyvdEz8LOjp4PsgkF4Lp9yXP7%2FBhRsmR%2BvFJ2b0U9B0RmRoHx4L1V7rbNPr5as%2BLnpmvgwlsSQwwY6pgHs%2B1OfNwAw4mFJP9deOakMV25BpnZHrnx1P%2Bupw0ZeCnHUaYUR2xh1lGRUx19%2F722M192IHjC6s58ge0tWG1qONyz9D4SmHt0Rt822E8ZnUgFc7bLJGnCFOZuBFBaBy2tBUGccn1fu9wPLgnu%2BWareH5tFj%2BOew%2FVgtDsJVNV42Kbo06erRjnMKzhv5LtD3wVaUGoBhG2XvRhdSRgextwMTx%2BnUXlR&X-Amz-Signature=f8ada8f0b8fdf4d6add97ccc58e71bcc63fde21e747f2f4d7b21e369e2b91857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLENELN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQXh9LUJDJy34sSNriSxqfjKNtBAikedqBTut82UqPeAiBtA3iakMS09NDNz2iLHGyTYg8W3SI5KuYxTqe62HBGLSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2%2F%2FNRB72QpuBn6r%2BKtwDaDYm0x0OQI9wle6JQzFDbqfhn1%2BtALVBi%2ByqCaUudMVmfSJvcNA%2BuXldtEw148Q2Vr51K8xpJBsy3S0ZJPgA7bfx1M822JYH0CAD4lpB0KK7JurWvcaKnzPTJQl%2BQO%2B5A%2BYy1rjpruFvVop8EDyvhS2cSiB3KC8YlWDvrlodPQba0wDQgAk2NY01skF2sGvMtrh3Mat8pp76rf3%2B2W0iCU4PuWamv0TLCm%2BFryT1YZ9zWtMozFVWpwakV7fwIGqzJv6iD%2FjIftymCqOjMGMfJQonWCysHFNRWgCxDIcuAf5vvMEgJD%2Bw2b%2F%2F6%2FkQWUDFzrlChtBmjCpsQKsRkpRzzNPtg7E6FEMGxnRjh29OOC%2Fb6JK1wMbhtkyt8JXlmMou8KgSZlxiNfS7edPN9MgkEUSoCvok0Wa4W0vtAURq5B2uJANaVrePBRE9RhGlD%2BlyphBfFBSZgJHTh8WAfEczPMTAHKqOl8COR1YC2cvOA3dhFYVQZf3UmLLh4bEVh5B0UqnwPGcMyFFzbBe3R8lLVETd3qUZsHkKWXNllWA%2B2hPIuL44XfDwaqAyvdEz8LOjp4PsgkF4Lp9yXP7%2FBhRsmR%2BvFJ2b0U9B0RmRoHx4L1V7rbNPr5as%2BLnpmvgwlsSQwwY6pgHs%2B1OfNwAw4mFJP9deOakMV25BpnZHrnx1P%2Bupw0ZeCnHUaYUR2xh1lGRUx19%2F722M192IHjC6s58ge0tWG1qONyz9D4SmHt0Rt822E8ZnUgFc7bLJGnCFOZuBFBaBy2tBUGccn1fu9wPLgnu%2BWareH5tFj%2BOew%2FVgtDsJVNV42Kbo06erRjnMKzhv5LtD3wVaUGoBhG2XvRhdSRgextwMTx%2BnUXlR&X-Amz-Signature=3c9ccf7ca029ffc344dca3e6fae35487401128b8b1841619334d3004e448fd64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLENELN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQXh9LUJDJy34sSNriSxqfjKNtBAikedqBTut82UqPeAiBtA3iakMS09NDNz2iLHGyTYg8W3SI5KuYxTqe62HBGLSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2%2F%2FNRB72QpuBn6r%2BKtwDaDYm0x0OQI9wle6JQzFDbqfhn1%2BtALVBi%2ByqCaUudMVmfSJvcNA%2BuXldtEw148Q2Vr51K8xpJBsy3S0ZJPgA7bfx1M822JYH0CAD4lpB0KK7JurWvcaKnzPTJQl%2BQO%2B5A%2BYy1rjpruFvVop8EDyvhS2cSiB3KC8YlWDvrlodPQba0wDQgAk2NY01skF2sGvMtrh3Mat8pp76rf3%2B2W0iCU4PuWamv0TLCm%2BFryT1YZ9zWtMozFVWpwakV7fwIGqzJv6iD%2FjIftymCqOjMGMfJQonWCysHFNRWgCxDIcuAf5vvMEgJD%2Bw2b%2F%2F6%2FkQWUDFzrlChtBmjCpsQKsRkpRzzNPtg7E6FEMGxnRjh29OOC%2Fb6JK1wMbhtkyt8JXlmMou8KgSZlxiNfS7edPN9MgkEUSoCvok0Wa4W0vtAURq5B2uJANaVrePBRE9RhGlD%2BlyphBfFBSZgJHTh8WAfEczPMTAHKqOl8COR1YC2cvOA3dhFYVQZf3UmLLh4bEVh5B0UqnwPGcMyFFzbBe3R8lLVETd3qUZsHkKWXNllWA%2B2hPIuL44XfDwaqAyvdEz8LOjp4PsgkF4Lp9yXP7%2FBhRsmR%2BvFJ2b0U9B0RmRoHx4L1V7rbNPr5as%2BLnpmvgwlsSQwwY6pgHs%2B1OfNwAw4mFJP9deOakMV25BpnZHrnx1P%2Bupw0ZeCnHUaYUR2xh1lGRUx19%2F722M192IHjC6s58ge0tWG1qONyz9D4SmHt0Rt822E8ZnUgFc7bLJGnCFOZuBFBaBy2tBUGccn1fu9wPLgnu%2BWareH5tFj%2BOew%2FVgtDsJVNV42Kbo06erRjnMKzhv5LtD3wVaUGoBhG2XvRhdSRgextwMTx%2BnUXlR&X-Amz-Signature=a35e49a6e817634218fdca242c04f0d75b5a8b1bb80c5d93707490bb288c8cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLENELN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQXh9LUJDJy34sSNriSxqfjKNtBAikedqBTut82UqPeAiBtA3iakMS09NDNz2iLHGyTYg8W3SI5KuYxTqe62HBGLSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2%2F%2FNRB72QpuBn6r%2BKtwDaDYm0x0OQI9wle6JQzFDbqfhn1%2BtALVBi%2ByqCaUudMVmfSJvcNA%2BuXldtEw148Q2Vr51K8xpJBsy3S0ZJPgA7bfx1M822JYH0CAD4lpB0KK7JurWvcaKnzPTJQl%2BQO%2B5A%2BYy1rjpruFvVop8EDyvhS2cSiB3KC8YlWDvrlodPQba0wDQgAk2NY01skF2sGvMtrh3Mat8pp76rf3%2B2W0iCU4PuWamv0TLCm%2BFryT1YZ9zWtMozFVWpwakV7fwIGqzJv6iD%2FjIftymCqOjMGMfJQonWCysHFNRWgCxDIcuAf5vvMEgJD%2Bw2b%2F%2F6%2FkQWUDFzrlChtBmjCpsQKsRkpRzzNPtg7E6FEMGxnRjh29OOC%2Fb6JK1wMbhtkyt8JXlmMou8KgSZlxiNfS7edPN9MgkEUSoCvok0Wa4W0vtAURq5B2uJANaVrePBRE9RhGlD%2BlyphBfFBSZgJHTh8WAfEczPMTAHKqOl8COR1YC2cvOA3dhFYVQZf3UmLLh4bEVh5B0UqnwPGcMyFFzbBe3R8lLVETd3qUZsHkKWXNllWA%2B2hPIuL44XfDwaqAyvdEz8LOjp4PsgkF4Lp9yXP7%2FBhRsmR%2BvFJ2b0U9B0RmRoHx4L1V7rbNPr5as%2BLnpmvgwlsSQwwY6pgHs%2B1OfNwAw4mFJP9deOakMV25BpnZHrnx1P%2Bupw0ZeCnHUaYUR2xh1lGRUx19%2F722M192IHjC6s58ge0tWG1qONyz9D4SmHt0Rt822E8ZnUgFc7bLJGnCFOZuBFBaBy2tBUGccn1fu9wPLgnu%2BWareH5tFj%2BOew%2FVgtDsJVNV42Kbo06erRjnMKzhv5LtD3wVaUGoBhG2XvRhdSRgextwMTx%2BnUXlR&X-Amz-Signature=869343018b3c580ba8e2c01e50f927dc15f46c7f39741677233460789155ad13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLENELN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQXh9LUJDJy34sSNriSxqfjKNtBAikedqBTut82UqPeAiBtA3iakMS09NDNz2iLHGyTYg8W3SI5KuYxTqe62HBGLSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2%2F%2FNRB72QpuBn6r%2BKtwDaDYm0x0OQI9wle6JQzFDbqfhn1%2BtALVBi%2ByqCaUudMVmfSJvcNA%2BuXldtEw148Q2Vr51K8xpJBsy3S0ZJPgA7bfx1M822JYH0CAD4lpB0KK7JurWvcaKnzPTJQl%2BQO%2B5A%2BYy1rjpruFvVop8EDyvhS2cSiB3KC8YlWDvrlodPQba0wDQgAk2NY01skF2sGvMtrh3Mat8pp76rf3%2B2W0iCU4PuWamv0TLCm%2BFryT1YZ9zWtMozFVWpwakV7fwIGqzJv6iD%2FjIftymCqOjMGMfJQonWCysHFNRWgCxDIcuAf5vvMEgJD%2Bw2b%2F%2F6%2FkQWUDFzrlChtBmjCpsQKsRkpRzzNPtg7E6FEMGxnRjh29OOC%2Fb6JK1wMbhtkyt8JXlmMou8KgSZlxiNfS7edPN9MgkEUSoCvok0Wa4W0vtAURq5B2uJANaVrePBRE9RhGlD%2BlyphBfFBSZgJHTh8WAfEczPMTAHKqOl8COR1YC2cvOA3dhFYVQZf3UmLLh4bEVh5B0UqnwPGcMyFFzbBe3R8lLVETd3qUZsHkKWXNllWA%2B2hPIuL44XfDwaqAyvdEz8LOjp4PsgkF4Lp9yXP7%2FBhRsmR%2BvFJ2b0U9B0RmRoHx4L1V7rbNPr5as%2BLnpmvgwlsSQwwY6pgHs%2B1OfNwAw4mFJP9deOakMV25BpnZHrnx1P%2Bupw0ZeCnHUaYUR2xh1lGRUx19%2F722M192IHjC6s58ge0tWG1qONyz9D4SmHt0Rt822E8ZnUgFc7bLJGnCFOZuBFBaBy2tBUGccn1fu9wPLgnu%2BWareH5tFj%2BOew%2FVgtDsJVNV42Kbo06erRjnMKzhv5LtD3wVaUGoBhG2XvRhdSRgextwMTx%2BnUXlR&X-Amz-Signature=d0539de2681a52f70c1d7760a85095b3657f5f9125d9399e67e53eacc2ee0548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLENELN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQXh9LUJDJy34sSNriSxqfjKNtBAikedqBTut82UqPeAiBtA3iakMS09NDNz2iLHGyTYg8W3SI5KuYxTqe62HBGLSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2%2F%2FNRB72QpuBn6r%2BKtwDaDYm0x0OQI9wle6JQzFDbqfhn1%2BtALVBi%2ByqCaUudMVmfSJvcNA%2BuXldtEw148Q2Vr51K8xpJBsy3S0ZJPgA7bfx1M822JYH0CAD4lpB0KK7JurWvcaKnzPTJQl%2BQO%2B5A%2BYy1rjpruFvVop8EDyvhS2cSiB3KC8YlWDvrlodPQba0wDQgAk2NY01skF2sGvMtrh3Mat8pp76rf3%2B2W0iCU4PuWamv0TLCm%2BFryT1YZ9zWtMozFVWpwakV7fwIGqzJv6iD%2FjIftymCqOjMGMfJQonWCysHFNRWgCxDIcuAf5vvMEgJD%2Bw2b%2F%2F6%2FkQWUDFzrlChtBmjCpsQKsRkpRzzNPtg7E6FEMGxnRjh29OOC%2Fb6JK1wMbhtkyt8JXlmMou8KgSZlxiNfS7edPN9MgkEUSoCvok0Wa4W0vtAURq5B2uJANaVrePBRE9RhGlD%2BlyphBfFBSZgJHTh8WAfEczPMTAHKqOl8COR1YC2cvOA3dhFYVQZf3UmLLh4bEVh5B0UqnwPGcMyFFzbBe3R8lLVETd3qUZsHkKWXNllWA%2B2hPIuL44XfDwaqAyvdEz8LOjp4PsgkF4Lp9yXP7%2FBhRsmR%2BvFJ2b0U9B0RmRoHx4L1V7rbNPr5as%2BLnpmvgwlsSQwwY6pgHs%2B1OfNwAw4mFJP9deOakMV25BpnZHrnx1P%2Bupw0ZeCnHUaYUR2xh1lGRUx19%2F722M192IHjC6s58ge0tWG1qONyz9D4SmHt0Rt822E8ZnUgFc7bLJGnCFOZuBFBaBy2tBUGccn1fu9wPLgnu%2BWareH5tFj%2BOew%2FVgtDsJVNV42Kbo06erRjnMKzhv5LtD3wVaUGoBhG2XvRhdSRgextwMTx%2BnUXlR&X-Amz-Signature=11c2fc48d8a1895b226d679c2232890aef6c5d9d99e75d1f772c592c2b10fff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLENELN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQXh9LUJDJy34sSNriSxqfjKNtBAikedqBTut82UqPeAiBtA3iakMS09NDNz2iLHGyTYg8W3SI5KuYxTqe62HBGLSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2%2F%2FNRB72QpuBn6r%2BKtwDaDYm0x0OQI9wle6JQzFDbqfhn1%2BtALVBi%2ByqCaUudMVmfSJvcNA%2BuXldtEw148Q2Vr51K8xpJBsy3S0ZJPgA7bfx1M822JYH0CAD4lpB0KK7JurWvcaKnzPTJQl%2BQO%2B5A%2BYy1rjpruFvVop8EDyvhS2cSiB3KC8YlWDvrlodPQba0wDQgAk2NY01skF2sGvMtrh3Mat8pp76rf3%2B2W0iCU4PuWamv0TLCm%2BFryT1YZ9zWtMozFVWpwakV7fwIGqzJv6iD%2FjIftymCqOjMGMfJQonWCysHFNRWgCxDIcuAf5vvMEgJD%2Bw2b%2F%2F6%2FkQWUDFzrlChtBmjCpsQKsRkpRzzNPtg7E6FEMGxnRjh29OOC%2Fb6JK1wMbhtkyt8JXlmMou8KgSZlxiNfS7edPN9MgkEUSoCvok0Wa4W0vtAURq5B2uJANaVrePBRE9RhGlD%2BlyphBfFBSZgJHTh8WAfEczPMTAHKqOl8COR1YC2cvOA3dhFYVQZf3UmLLh4bEVh5B0UqnwPGcMyFFzbBe3R8lLVETd3qUZsHkKWXNllWA%2B2hPIuL44XfDwaqAyvdEz8LOjp4PsgkF4Lp9yXP7%2FBhRsmR%2BvFJ2b0U9B0RmRoHx4L1V7rbNPr5as%2BLnpmvgwlsSQwwY6pgHs%2B1OfNwAw4mFJP9deOakMV25BpnZHrnx1P%2Bupw0ZeCnHUaYUR2xh1lGRUx19%2F722M192IHjC6s58ge0tWG1qONyz9D4SmHt0Rt822E8ZnUgFc7bLJGnCFOZuBFBaBy2tBUGccn1fu9wPLgnu%2BWareH5tFj%2BOew%2FVgtDsJVNV42Kbo06erRjnMKzhv5LtD3wVaUGoBhG2XvRhdSRgextwMTx%2BnUXlR&X-Amz-Signature=fabdc53c451a7dc89ca0df2048317ae3db67e321c52f5a902fb1f552f9ed5e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWLENELN%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQXh9LUJDJy34sSNriSxqfjKNtBAikedqBTut82UqPeAiBtA3iakMS09NDNz2iLHGyTYg8W3SI5KuYxTqe62HBGLSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2%2F%2FNRB72QpuBn6r%2BKtwDaDYm0x0OQI9wle6JQzFDbqfhn1%2BtALVBi%2ByqCaUudMVmfSJvcNA%2BuXldtEw148Q2Vr51K8xpJBsy3S0ZJPgA7bfx1M822JYH0CAD4lpB0KK7JurWvcaKnzPTJQl%2BQO%2B5A%2BYy1rjpruFvVop8EDyvhS2cSiB3KC8YlWDvrlodPQba0wDQgAk2NY01skF2sGvMtrh3Mat8pp76rf3%2B2W0iCU4PuWamv0TLCm%2BFryT1YZ9zWtMozFVWpwakV7fwIGqzJv6iD%2FjIftymCqOjMGMfJQonWCysHFNRWgCxDIcuAf5vvMEgJD%2Bw2b%2F%2F6%2FkQWUDFzrlChtBmjCpsQKsRkpRzzNPtg7E6FEMGxnRjh29OOC%2Fb6JK1wMbhtkyt8JXlmMou8KgSZlxiNfS7edPN9MgkEUSoCvok0Wa4W0vtAURq5B2uJANaVrePBRE9RhGlD%2BlyphBfFBSZgJHTh8WAfEczPMTAHKqOl8COR1YC2cvOA3dhFYVQZf3UmLLh4bEVh5B0UqnwPGcMyFFzbBe3R8lLVETd3qUZsHkKWXNllWA%2B2hPIuL44XfDwaqAyvdEz8LOjp4PsgkF4Lp9yXP7%2FBhRsmR%2BvFJ2b0U9B0RmRoHx4L1V7rbNPr5as%2BLnpmvgwlsSQwwY6pgHs%2B1OfNwAw4mFJP9deOakMV25BpnZHrnx1P%2Bupw0ZeCnHUaYUR2xh1lGRUx19%2F722M192IHjC6s58ge0tWG1qONyz9D4SmHt0Rt822E8ZnUgFc7bLJGnCFOZuBFBaBy2tBUGccn1fu9wPLgnu%2BWareH5tFj%2BOew%2FVgtDsJVNV42Kbo06erRjnMKzhv5LtD3wVaUGoBhG2XvRhdSRgextwMTx%2BnUXlR&X-Amz-Signature=c8827197350e77d814f85990f7a07aa7c67b318d91cf78516158da701c3056ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
