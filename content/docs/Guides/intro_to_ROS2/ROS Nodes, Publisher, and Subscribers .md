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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6YK2Q6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFS87%2FAL12NUvhUGhuEE0hqD6dh65JQdtr%2B%2Fs%2FKhwHaGAiAiQmRyKLi7TiAq%2FNfkvU%2F6ZvmuS34pgxRbni%2BaCpBn1Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMWDxXicogIjE6GZMwKtwD0tw0fqKPOEeLRgwmEZI9d9p3FBBvEyru3hhn1KX9iLItTtvxc4vNh5gELKZOYCMbGCB22dgtgpqsWJEy3V8qHSP0HsoBrqilWXGS%2FpP6eJJ3Hm8GA%2FgKCFCXcJfTe448KHvr1HvA7xavdRq0exjBXwVpYoml2e0QaRnAmzactFRYbFEDKWn9V5yeT2oyP7%2Bj63dEQXO2aPbpJq96wr0yLKnq05psRghyXHdXUhdybpHRA5lHr2gR8ouOBzuxSmcYj1KAUxosafwoak67wjZINxEpA9Jo6KXwJzpc8qRaWN%2FMRNH%2FHVnSK%2ByGDdRZG5vjDtVJtc2eis9TLSoXPxSdYPpWhO6IG1Y5qAER3c%2BUnyQxfX0UYxFWA9pBm4Anqq%2BDuW9%2FZVSqqCd6i309gztwRvB77bHLdtJc%2BpIWM7pwLoZSbz4kDO8nX4r9lZvh%2BW4MQiusRXaGr0mq7axJp3oS9tUb7uWcqgyaUG7xJNW1YHL44eDKivabd4NDwEa92pCzW1sTbQ2mEMkZ4rOeCf%2B98OJ2vU5SLMGPH9bqcnWV324MYvEKjny0Q9%2FrfhKpMcamF7fRfqey47OhmBUd8%2FnNNU0NegRRYPq%2BDpm4zHuqVSW0OlXcLXJafjYTNjQwsuyPvQY6pgFNxsma9mMtaX0baSlCHki8DIn%2BmVBwVIAyhGEXNXUkq5NiZE6voeVgeS6AMuxA6vTx5ca8sTJcqUwooR9mC9cts7k5T0IYsPDqGe7dzq9jPPSJhwBeqnQDArsPJMuNkDgyQX9SdvMIOGxsFZoOtusTJ3xUnq9rvsY5B4o0S3FblbM700YuZbs2%2FhzbNS7iMUMF%2BayV69nyO%2Fn2YPY4m2oVO5wOIJ73&X-Amz-Signature=e85d6b0c6d5c2357e0f8d3ea0f3502fde76e33e434c8bff121a751ff7e6fff82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6YK2Q6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFS87%2FAL12NUvhUGhuEE0hqD6dh65JQdtr%2B%2Fs%2FKhwHaGAiAiQmRyKLi7TiAq%2FNfkvU%2F6ZvmuS34pgxRbni%2BaCpBn1Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMWDxXicogIjE6GZMwKtwD0tw0fqKPOEeLRgwmEZI9d9p3FBBvEyru3hhn1KX9iLItTtvxc4vNh5gELKZOYCMbGCB22dgtgpqsWJEy3V8qHSP0HsoBrqilWXGS%2FpP6eJJ3Hm8GA%2FgKCFCXcJfTe448KHvr1HvA7xavdRq0exjBXwVpYoml2e0QaRnAmzactFRYbFEDKWn9V5yeT2oyP7%2Bj63dEQXO2aPbpJq96wr0yLKnq05psRghyXHdXUhdybpHRA5lHr2gR8ouOBzuxSmcYj1KAUxosafwoak67wjZINxEpA9Jo6KXwJzpc8qRaWN%2FMRNH%2FHVnSK%2ByGDdRZG5vjDtVJtc2eis9TLSoXPxSdYPpWhO6IG1Y5qAER3c%2BUnyQxfX0UYxFWA9pBm4Anqq%2BDuW9%2FZVSqqCd6i309gztwRvB77bHLdtJc%2BpIWM7pwLoZSbz4kDO8nX4r9lZvh%2BW4MQiusRXaGr0mq7axJp3oS9tUb7uWcqgyaUG7xJNW1YHL44eDKivabd4NDwEa92pCzW1sTbQ2mEMkZ4rOeCf%2B98OJ2vU5SLMGPH9bqcnWV324MYvEKjny0Q9%2FrfhKpMcamF7fRfqey47OhmBUd8%2FnNNU0NegRRYPq%2BDpm4zHuqVSW0OlXcLXJafjYTNjQwsuyPvQY6pgFNxsma9mMtaX0baSlCHki8DIn%2BmVBwVIAyhGEXNXUkq5NiZE6voeVgeS6AMuxA6vTx5ca8sTJcqUwooR9mC9cts7k5T0IYsPDqGe7dzq9jPPSJhwBeqnQDArsPJMuNkDgyQX9SdvMIOGxsFZoOtusTJ3xUnq9rvsY5B4o0S3FblbM700YuZbs2%2FhzbNS7iMUMF%2BayV69nyO%2Fn2YPY4m2oVO5wOIJ73&X-Amz-Signature=3768ba777ae4a15f478a92f6d30aaf0624dd7bb848898d55888b58c8bdc07515&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6YK2Q6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFS87%2FAL12NUvhUGhuEE0hqD6dh65JQdtr%2B%2Fs%2FKhwHaGAiAiQmRyKLi7TiAq%2FNfkvU%2F6ZvmuS34pgxRbni%2BaCpBn1Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMWDxXicogIjE6GZMwKtwD0tw0fqKPOEeLRgwmEZI9d9p3FBBvEyru3hhn1KX9iLItTtvxc4vNh5gELKZOYCMbGCB22dgtgpqsWJEy3V8qHSP0HsoBrqilWXGS%2FpP6eJJ3Hm8GA%2FgKCFCXcJfTe448KHvr1HvA7xavdRq0exjBXwVpYoml2e0QaRnAmzactFRYbFEDKWn9V5yeT2oyP7%2Bj63dEQXO2aPbpJq96wr0yLKnq05psRghyXHdXUhdybpHRA5lHr2gR8ouOBzuxSmcYj1KAUxosafwoak67wjZINxEpA9Jo6KXwJzpc8qRaWN%2FMRNH%2FHVnSK%2ByGDdRZG5vjDtVJtc2eis9TLSoXPxSdYPpWhO6IG1Y5qAER3c%2BUnyQxfX0UYxFWA9pBm4Anqq%2BDuW9%2FZVSqqCd6i309gztwRvB77bHLdtJc%2BpIWM7pwLoZSbz4kDO8nX4r9lZvh%2BW4MQiusRXaGr0mq7axJp3oS9tUb7uWcqgyaUG7xJNW1YHL44eDKivabd4NDwEa92pCzW1sTbQ2mEMkZ4rOeCf%2B98OJ2vU5SLMGPH9bqcnWV324MYvEKjny0Q9%2FrfhKpMcamF7fRfqey47OhmBUd8%2FnNNU0NegRRYPq%2BDpm4zHuqVSW0OlXcLXJafjYTNjQwsuyPvQY6pgFNxsma9mMtaX0baSlCHki8DIn%2BmVBwVIAyhGEXNXUkq5NiZE6voeVgeS6AMuxA6vTx5ca8sTJcqUwooR9mC9cts7k5T0IYsPDqGe7dzq9jPPSJhwBeqnQDArsPJMuNkDgyQX9SdvMIOGxsFZoOtusTJ3xUnq9rvsY5B4o0S3FblbM700YuZbs2%2FhzbNS7iMUMF%2BayV69nyO%2Fn2YPY4m2oVO5wOIJ73&X-Amz-Signature=d4197e3c3f1891c2fd109829ec2e750856e34ebe2966c3f318dfba079f4c302a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6YK2Q6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFS87%2FAL12NUvhUGhuEE0hqD6dh65JQdtr%2B%2Fs%2FKhwHaGAiAiQmRyKLi7TiAq%2FNfkvU%2F6ZvmuS34pgxRbni%2BaCpBn1Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMWDxXicogIjE6GZMwKtwD0tw0fqKPOEeLRgwmEZI9d9p3FBBvEyru3hhn1KX9iLItTtvxc4vNh5gELKZOYCMbGCB22dgtgpqsWJEy3V8qHSP0HsoBrqilWXGS%2FpP6eJJ3Hm8GA%2FgKCFCXcJfTe448KHvr1HvA7xavdRq0exjBXwVpYoml2e0QaRnAmzactFRYbFEDKWn9V5yeT2oyP7%2Bj63dEQXO2aPbpJq96wr0yLKnq05psRghyXHdXUhdybpHRA5lHr2gR8ouOBzuxSmcYj1KAUxosafwoak67wjZINxEpA9Jo6KXwJzpc8qRaWN%2FMRNH%2FHVnSK%2ByGDdRZG5vjDtVJtc2eis9TLSoXPxSdYPpWhO6IG1Y5qAER3c%2BUnyQxfX0UYxFWA9pBm4Anqq%2BDuW9%2FZVSqqCd6i309gztwRvB77bHLdtJc%2BpIWM7pwLoZSbz4kDO8nX4r9lZvh%2BW4MQiusRXaGr0mq7axJp3oS9tUb7uWcqgyaUG7xJNW1YHL44eDKivabd4NDwEa92pCzW1sTbQ2mEMkZ4rOeCf%2B98OJ2vU5SLMGPH9bqcnWV324MYvEKjny0Q9%2FrfhKpMcamF7fRfqey47OhmBUd8%2FnNNU0NegRRYPq%2BDpm4zHuqVSW0OlXcLXJafjYTNjQwsuyPvQY6pgFNxsma9mMtaX0baSlCHki8DIn%2BmVBwVIAyhGEXNXUkq5NiZE6voeVgeS6AMuxA6vTx5ca8sTJcqUwooR9mC9cts7k5T0IYsPDqGe7dzq9jPPSJhwBeqnQDArsPJMuNkDgyQX9SdvMIOGxsFZoOtusTJ3xUnq9rvsY5B4o0S3FblbM700YuZbs2%2FhzbNS7iMUMF%2BayV69nyO%2Fn2YPY4m2oVO5wOIJ73&X-Amz-Signature=0bf8949f6e827de7e61fb76d36ca6c47b95af3b866b89c792ae000b646b77bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6YK2Q6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFS87%2FAL12NUvhUGhuEE0hqD6dh65JQdtr%2B%2Fs%2FKhwHaGAiAiQmRyKLi7TiAq%2FNfkvU%2F6ZvmuS34pgxRbni%2BaCpBn1Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMWDxXicogIjE6GZMwKtwD0tw0fqKPOEeLRgwmEZI9d9p3FBBvEyru3hhn1KX9iLItTtvxc4vNh5gELKZOYCMbGCB22dgtgpqsWJEy3V8qHSP0HsoBrqilWXGS%2FpP6eJJ3Hm8GA%2FgKCFCXcJfTe448KHvr1HvA7xavdRq0exjBXwVpYoml2e0QaRnAmzactFRYbFEDKWn9V5yeT2oyP7%2Bj63dEQXO2aPbpJq96wr0yLKnq05psRghyXHdXUhdybpHRA5lHr2gR8ouOBzuxSmcYj1KAUxosafwoak67wjZINxEpA9Jo6KXwJzpc8qRaWN%2FMRNH%2FHVnSK%2ByGDdRZG5vjDtVJtc2eis9TLSoXPxSdYPpWhO6IG1Y5qAER3c%2BUnyQxfX0UYxFWA9pBm4Anqq%2BDuW9%2FZVSqqCd6i309gztwRvB77bHLdtJc%2BpIWM7pwLoZSbz4kDO8nX4r9lZvh%2BW4MQiusRXaGr0mq7axJp3oS9tUb7uWcqgyaUG7xJNW1YHL44eDKivabd4NDwEa92pCzW1sTbQ2mEMkZ4rOeCf%2B98OJ2vU5SLMGPH9bqcnWV324MYvEKjny0Q9%2FrfhKpMcamF7fRfqey47OhmBUd8%2FnNNU0NegRRYPq%2BDpm4zHuqVSW0OlXcLXJafjYTNjQwsuyPvQY6pgFNxsma9mMtaX0baSlCHki8DIn%2BmVBwVIAyhGEXNXUkq5NiZE6voeVgeS6AMuxA6vTx5ca8sTJcqUwooR9mC9cts7k5T0IYsPDqGe7dzq9jPPSJhwBeqnQDArsPJMuNkDgyQX9SdvMIOGxsFZoOtusTJ3xUnq9rvsY5B4o0S3FblbM700YuZbs2%2FhzbNS7iMUMF%2BayV69nyO%2Fn2YPY4m2oVO5wOIJ73&X-Amz-Signature=878d7fafc67f14b329b9a00e881302d41b1105938f46ec87658000ebfab18e2f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6YK2Q6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFS87%2FAL12NUvhUGhuEE0hqD6dh65JQdtr%2B%2Fs%2FKhwHaGAiAiQmRyKLi7TiAq%2FNfkvU%2F6ZvmuS34pgxRbni%2BaCpBn1Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMWDxXicogIjE6GZMwKtwD0tw0fqKPOEeLRgwmEZI9d9p3FBBvEyru3hhn1KX9iLItTtvxc4vNh5gELKZOYCMbGCB22dgtgpqsWJEy3V8qHSP0HsoBrqilWXGS%2FpP6eJJ3Hm8GA%2FgKCFCXcJfTe448KHvr1HvA7xavdRq0exjBXwVpYoml2e0QaRnAmzactFRYbFEDKWn9V5yeT2oyP7%2Bj63dEQXO2aPbpJq96wr0yLKnq05psRghyXHdXUhdybpHRA5lHr2gR8ouOBzuxSmcYj1KAUxosafwoak67wjZINxEpA9Jo6KXwJzpc8qRaWN%2FMRNH%2FHVnSK%2ByGDdRZG5vjDtVJtc2eis9TLSoXPxSdYPpWhO6IG1Y5qAER3c%2BUnyQxfX0UYxFWA9pBm4Anqq%2BDuW9%2FZVSqqCd6i309gztwRvB77bHLdtJc%2BpIWM7pwLoZSbz4kDO8nX4r9lZvh%2BW4MQiusRXaGr0mq7axJp3oS9tUb7uWcqgyaUG7xJNW1YHL44eDKivabd4NDwEa92pCzW1sTbQ2mEMkZ4rOeCf%2B98OJ2vU5SLMGPH9bqcnWV324MYvEKjny0Q9%2FrfhKpMcamF7fRfqey47OhmBUd8%2FnNNU0NegRRYPq%2BDpm4zHuqVSW0OlXcLXJafjYTNjQwsuyPvQY6pgFNxsma9mMtaX0baSlCHki8DIn%2BmVBwVIAyhGEXNXUkq5NiZE6voeVgeS6AMuxA6vTx5ca8sTJcqUwooR9mC9cts7k5T0IYsPDqGe7dzq9jPPSJhwBeqnQDArsPJMuNkDgyQX9SdvMIOGxsFZoOtusTJ3xUnq9rvsY5B4o0S3FblbM700YuZbs2%2FhzbNS7iMUMF%2BayV69nyO%2Fn2YPY4m2oVO5wOIJ73&X-Amz-Signature=bb048e1725d92a52aebf7fe83a8a3ba0d63bad73974815e0aaeebeece10e8812&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6YK2Q6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFS87%2FAL12NUvhUGhuEE0hqD6dh65JQdtr%2B%2Fs%2FKhwHaGAiAiQmRyKLi7TiAq%2FNfkvU%2F6ZvmuS34pgxRbni%2BaCpBn1Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMWDxXicogIjE6GZMwKtwD0tw0fqKPOEeLRgwmEZI9d9p3FBBvEyru3hhn1KX9iLItTtvxc4vNh5gELKZOYCMbGCB22dgtgpqsWJEy3V8qHSP0HsoBrqilWXGS%2FpP6eJJ3Hm8GA%2FgKCFCXcJfTe448KHvr1HvA7xavdRq0exjBXwVpYoml2e0QaRnAmzactFRYbFEDKWn9V5yeT2oyP7%2Bj63dEQXO2aPbpJq96wr0yLKnq05psRghyXHdXUhdybpHRA5lHr2gR8ouOBzuxSmcYj1KAUxosafwoak67wjZINxEpA9Jo6KXwJzpc8qRaWN%2FMRNH%2FHVnSK%2ByGDdRZG5vjDtVJtc2eis9TLSoXPxSdYPpWhO6IG1Y5qAER3c%2BUnyQxfX0UYxFWA9pBm4Anqq%2BDuW9%2FZVSqqCd6i309gztwRvB77bHLdtJc%2BpIWM7pwLoZSbz4kDO8nX4r9lZvh%2BW4MQiusRXaGr0mq7axJp3oS9tUb7uWcqgyaUG7xJNW1YHL44eDKivabd4NDwEa92pCzW1sTbQ2mEMkZ4rOeCf%2B98OJ2vU5SLMGPH9bqcnWV324MYvEKjny0Q9%2FrfhKpMcamF7fRfqey47OhmBUd8%2FnNNU0NegRRYPq%2BDpm4zHuqVSW0OlXcLXJafjYTNjQwsuyPvQY6pgFNxsma9mMtaX0baSlCHki8DIn%2BmVBwVIAyhGEXNXUkq5NiZE6voeVgeS6AMuxA6vTx5ca8sTJcqUwooR9mC9cts7k5T0IYsPDqGe7dzq9jPPSJhwBeqnQDArsPJMuNkDgyQX9SdvMIOGxsFZoOtusTJ3xUnq9rvsY5B4o0S3FblbM700YuZbs2%2FhzbNS7iMUMF%2BayV69nyO%2Fn2YPY4m2oVO5wOIJ73&X-Amz-Signature=53585c9ec2fb41ac75d45c0b0d65bf671260a2a26f0416266c0586c6a9fcd46d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6YK2Q6%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T031142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFS87%2FAL12NUvhUGhuEE0hqD6dh65JQdtr%2B%2Fs%2FKhwHaGAiAiQmRyKLi7TiAq%2FNfkvU%2F6ZvmuS34pgxRbni%2BaCpBn1Cr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMWDxXicogIjE6GZMwKtwD0tw0fqKPOEeLRgwmEZI9d9p3FBBvEyru3hhn1KX9iLItTtvxc4vNh5gELKZOYCMbGCB22dgtgpqsWJEy3V8qHSP0HsoBrqilWXGS%2FpP6eJJ3Hm8GA%2FgKCFCXcJfTe448KHvr1HvA7xavdRq0exjBXwVpYoml2e0QaRnAmzactFRYbFEDKWn9V5yeT2oyP7%2Bj63dEQXO2aPbpJq96wr0yLKnq05psRghyXHdXUhdybpHRA5lHr2gR8ouOBzuxSmcYj1KAUxosafwoak67wjZINxEpA9Jo6KXwJzpc8qRaWN%2FMRNH%2FHVnSK%2ByGDdRZG5vjDtVJtc2eis9TLSoXPxSdYPpWhO6IG1Y5qAER3c%2BUnyQxfX0UYxFWA9pBm4Anqq%2BDuW9%2FZVSqqCd6i309gztwRvB77bHLdtJc%2BpIWM7pwLoZSbz4kDO8nX4r9lZvh%2BW4MQiusRXaGr0mq7axJp3oS9tUb7uWcqgyaUG7xJNW1YHL44eDKivabd4NDwEa92pCzW1sTbQ2mEMkZ4rOeCf%2B98OJ2vU5SLMGPH9bqcnWV324MYvEKjny0Q9%2FrfhKpMcamF7fRfqey47OhmBUd8%2FnNNU0NegRRYPq%2BDpm4zHuqVSW0OlXcLXJafjYTNjQwsuyPvQY6pgFNxsma9mMtaX0baSlCHki8DIn%2BmVBwVIAyhGEXNXUkq5NiZE6voeVgeS6AMuxA6vTx5ca8sTJcqUwooR9mC9cts7k5T0IYsPDqGe7dzq9jPPSJhwBeqnQDArsPJMuNkDgyQX9SdvMIOGxsFZoOtusTJ3xUnq9rvsY5B4o0S3FblbM700YuZbs2%2FhzbNS7iMUMF%2BayV69nyO%2Fn2YPY4m2oVO5wOIJ73&X-Amz-Signature=6e50f0e9cd9b572a632286de5d1c2313b78be956fd716da2bc17f1cbaa39436d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
