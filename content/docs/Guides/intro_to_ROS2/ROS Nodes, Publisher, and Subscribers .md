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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QT5JRQ2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHwGjVNS4Y2RIYvvVjTlR1PCqdcGhI%2F1Ia3fFJhoz8tzAiEAzc4UyPkTGw6%2B0kqQdyYY4sk3S9T%2BHXaYOzxm8PiPS68q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHpy5BgYlNX7QcuJQSrcA9YmqslEMhrqXuhdyFcEBuot5zskQEynBFA8fSifgmnbcmZcVr9JQtEf5qPdZmAXsThsJ40VdxCwmH2Q6DxRm7OnOdWc1GahWttGKftgG7XgCAJsblFcKUhsOUTcrCs8TUy4nob1BMnY56EL4WckNdXgHvHGWbMUxs6G16iRTiklUbTghEMTwQHnvG4GcDPh1n6qILdNrAU8JWgngFBQ685Rvmk2e7f4gzrD%2B3Z6VLWL45IA5P9VbP%2F3yW%2BVyi%2Bl4a1slLXNIz7Cmlv2%2Fcrb4NQgyMNX776D0jLO3VLFgMpn0MKCYM1bEYXHpfjLndsD6jA5dJ6cQIbUKyicVNfwe%2BWFRNbbjYVTj9p8zWzEr0p3bjtlf7%2BZJU37C%2FRUC9RC4mBRyC04QDQv5009Z%2FxPSfCOgZaRPnNa8XsB3IGKUdxHTgtszc370fnbglsV3NgoWgZeHC4wXkjtcK0cIX%2F5wU4HrgLY%2F%2Bt9oi6rKDKX%2B6i4bmcLT%2BTIC84Z%2FMWzfYyiuQn9n2KdiSckd95DbdcGsaAwsPypcSPAbmckIBs%2BPg%2FFpo39onzYejQwpjU%2BQcdqmpg6ILlvrmVmIwVer1MEQDzsO4MwwQ9Tq3xcPlqsI2xR9EqkNcmeC8m4uZKtMJ2LrMMGOqUBgViq2wwHxYIRcVYsXLZM5vMfDwBtjjCxavlGoeyjOI8UMKyClZ%2BoIItJ2NYM7XObJRkTsT%2BHCmSzUpJUsQgtD8h8qba%2FflwSqSul2oj2yHDoyyPsvxhnXIFS88K1XP%2BFBPzubPWm%2FPOooPMVGXh1mOY7F1FLhX4KfL37c%2FMT5PdyUCqWWxKo7H%2FkQiK0xqXRWuu014cJGIgP7JqBBaKYs6EIjMxe&X-Amz-Signature=99247f8ad362d4e5df5e1c8989b6806418cc529a779acd05d418924405b6d2e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QT5JRQ2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHwGjVNS4Y2RIYvvVjTlR1PCqdcGhI%2F1Ia3fFJhoz8tzAiEAzc4UyPkTGw6%2B0kqQdyYY4sk3S9T%2BHXaYOzxm8PiPS68q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHpy5BgYlNX7QcuJQSrcA9YmqslEMhrqXuhdyFcEBuot5zskQEynBFA8fSifgmnbcmZcVr9JQtEf5qPdZmAXsThsJ40VdxCwmH2Q6DxRm7OnOdWc1GahWttGKftgG7XgCAJsblFcKUhsOUTcrCs8TUy4nob1BMnY56EL4WckNdXgHvHGWbMUxs6G16iRTiklUbTghEMTwQHnvG4GcDPh1n6qILdNrAU8JWgngFBQ685Rvmk2e7f4gzrD%2B3Z6VLWL45IA5P9VbP%2F3yW%2BVyi%2Bl4a1slLXNIz7Cmlv2%2Fcrb4NQgyMNX776D0jLO3VLFgMpn0MKCYM1bEYXHpfjLndsD6jA5dJ6cQIbUKyicVNfwe%2BWFRNbbjYVTj9p8zWzEr0p3bjtlf7%2BZJU37C%2FRUC9RC4mBRyC04QDQv5009Z%2FxPSfCOgZaRPnNa8XsB3IGKUdxHTgtszc370fnbglsV3NgoWgZeHC4wXkjtcK0cIX%2F5wU4HrgLY%2F%2Bt9oi6rKDKX%2B6i4bmcLT%2BTIC84Z%2FMWzfYyiuQn9n2KdiSckd95DbdcGsaAwsPypcSPAbmckIBs%2BPg%2FFpo39onzYejQwpjU%2BQcdqmpg6ILlvrmVmIwVer1MEQDzsO4MwwQ9Tq3xcPlqsI2xR9EqkNcmeC8m4uZKtMJ2LrMMGOqUBgViq2wwHxYIRcVYsXLZM5vMfDwBtjjCxavlGoeyjOI8UMKyClZ%2BoIItJ2NYM7XObJRkTsT%2BHCmSzUpJUsQgtD8h8qba%2FflwSqSul2oj2yHDoyyPsvxhnXIFS88K1XP%2BFBPzubPWm%2FPOooPMVGXh1mOY7F1FLhX4KfL37c%2FMT5PdyUCqWWxKo7H%2FkQiK0xqXRWuu014cJGIgP7JqBBaKYs6EIjMxe&X-Amz-Signature=b70faee63af969a8de4ad8ad72e45f122edb391ae024df5fdfa5b25baa954914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QT5JRQ2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHwGjVNS4Y2RIYvvVjTlR1PCqdcGhI%2F1Ia3fFJhoz8tzAiEAzc4UyPkTGw6%2B0kqQdyYY4sk3S9T%2BHXaYOzxm8PiPS68q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHpy5BgYlNX7QcuJQSrcA9YmqslEMhrqXuhdyFcEBuot5zskQEynBFA8fSifgmnbcmZcVr9JQtEf5qPdZmAXsThsJ40VdxCwmH2Q6DxRm7OnOdWc1GahWttGKftgG7XgCAJsblFcKUhsOUTcrCs8TUy4nob1BMnY56EL4WckNdXgHvHGWbMUxs6G16iRTiklUbTghEMTwQHnvG4GcDPh1n6qILdNrAU8JWgngFBQ685Rvmk2e7f4gzrD%2B3Z6VLWL45IA5P9VbP%2F3yW%2BVyi%2Bl4a1slLXNIz7Cmlv2%2Fcrb4NQgyMNX776D0jLO3VLFgMpn0MKCYM1bEYXHpfjLndsD6jA5dJ6cQIbUKyicVNfwe%2BWFRNbbjYVTj9p8zWzEr0p3bjtlf7%2BZJU37C%2FRUC9RC4mBRyC04QDQv5009Z%2FxPSfCOgZaRPnNa8XsB3IGKUdxHTgtszc370fnbglsV3NgoWgZeHC4wXkjtcK0cIX%2F5wU4HrgLY%2F%2Bt9oi6rKDKX%2B6i4bmcLT%2BTIC84Z%2FMWzfYyiuQn9n2KdiSckd95DbdcGsaAwsPypcSPAbmckIBs%2BPg%2FFpo39onzYejQwpjU%2BQcdqmpg6ILlvrmVmIwVer1MEQDzsO4MwwQ9Tq3xcPlqsI2xR9EqkNcmeC8m4uZKtMJ2LrMMGOqUBgViq2wwHxYIRcVYsXLZM5vMfDwBtjjCxavlGoeyjOI8UMKyClZ%2BoIItJ2NYM7XObJRkTsT%2BHCmSzUpJUsQgtD8h8qba%2FflwSqSul2oj2yHDoyyPsvxhnXIFS88K1XP%2BFBPzubPWm%2FPOooPMVGXh1mOY7F1FLhX4KfL37c%2FMT5PdyUCqWWxKo7H%2FkQiK0xqXRWuu014cJGIgP7JqBBaKYs6EIjMxe&X-Amz-Signature=e3c41172b7888ae258a737d04ba2e6ef5aeea11e7cfde02210795f47daa260ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QT5JRQ2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHwGjVNS4Y2RIYvvVjTlR1PCqdcGhI%2F1Ia3fFJhoz8tzAiEAzc4UyPkTGw6%2B0kqQdyYY4sk3S9T%2BHXaYOzxm8PiPS68q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHpy5BgYlNX7QcuJQSrcA9YmqslEMhrqXuhdyFcEBuot5zskQEynBFA8fSifgmnbcmZcVr9JQtEf5qPdZmAXsThsJ40VdxCwmH2Q6DxRm7OnOdWc1GahWttGKftgG7XgCAJsblFcKUhsOUTcrCs8TUy4nob1BMnY56EL4WckNdXgHvHGWbMUxs6G16iRTiklUbTghEMTwQHnvG4GcDPh1n6qILdNrAU8JWgngFBQ685Rvmk2e7f4gzrD%2B3Z6VLWL45IA5P9VbP%2F3yW%2BVyi%2Bl4a1slLXNIz7Cmlv2%2Fcrb4NQgyMNX776D0jLO3VLFgMpn0MKCYM1bEYXHpfjLndsD6jA5dJ6cQIbUKyicVNfwe%2BWFRNbbjYVTj9p8zWzEr0p3bjtlf7%2BZJU37C%2FRUC9RC4mBRyC04QDQv5009Z%2FxPSfCOgZaRPnNa8XsB3IGKUdxHTgtszc370fnbglsV3NgoWgZeHC4wXkjtcK0cIX%2F5wU4HrgLY%2F%2Bt9oi6rKDKX%2B6i4bmcLT%2BTIC84Z%2FMWzfYyiuQn9n2KdiSckd95DbdcGsaAwsPypcSPAbmckIBs%2BPg%2FFpo39onzYejQwpjU%2BQcdqmpg6ILlvrmVmIwVer1MEQDzsO4MwwQ9Tq3xcPlqsI2xR9EqkNcmeC8m4uZKtMJ2LrMMGOqUBgViq2wwHxYIRcVYsXLZM5vMfDwBtjjCxavlGoeyjOI8UMKyClZ%2BoIItJ2NYM7XObJRkTsT%2BHCmSzUpJUsQgtD8h8qba%2FflwSqSul2oj2yHDoyyPsvxhnXIFS88K1XP%2BFBPzubPWm%2FPOooPMVGXh1mOY7F1FLhX4KfL37c%2FMT5PdyUCqWWxKo7H%2FkQiK0xqXRWuu014cJGIgP7JqBBaKYs6EIjMxe&X-Amz-Signature=1e686fc37abf2782f00f535e811c27180c5fdb36c0faeb6a916683f97cb3570f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QT5JRQ2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHwGjVNS4Y2RIYvvVjTlR1PCqdcGhI%2F1Ia3fFJhoz8tzAiEAzc4UyPkTGw6%2B0kqQdyYY4sk3S9T%2BHXaYOzxm8PiPS68q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHpy5BgYlNX7QcuJQSrcA9YmqslEMhrqXuhdyFcEBuot5zskQEynBFA8fSifgmnbcmZcVr9JQtEf5qPdZmAXsThsJ40VdxCwmH2Q6DxRm7OnOdWc1GahWttGKftgG7XgCAJsblFcKUhsOUTcrCs8TUy4nob1BMnY56EL4WckNdXgHvHGWbMUxs6G16iRTiklUbTghEMTwQHnvG4GcDPh1n6qILdNrAU8JWgngFBQ685Rvmk2e7f4gzrD%2B3Z6VLWL45IA5P9VbP%2F3yW%2BVyi%2Bl4a1slLXNIz7Cmlv2%2Fcrb4NQgyMNX776D0jLO3VLFgMpn0MKCYM1bEYXHpfjLndsD6jA5dJ6cQIbUKyicVNfwe%2BWFRNbbjYVTj9p8zWzEr0p3bjtlf7%2BZJU37C%2FRUC9RC4mBRyC04QDQv5009Z%2FxPSfCOgZaRPnNa8XsB3IGKUdxHTgtszc370fnbglsV3NgoWgZeHC4wXkjtcK0cIX%2F5wU4HrgLY%2F%2Bt9oi6rKDKX%2B6i4bmcLT%2BTIC84Z%2FMWzfYyiuQn9n2KdiSckd95DbdcGsaAwsPypcSPAbmckIBs%2BPg%2FFpo39onzYejQwpjU%2BQcdqmpg6ILlvrmVmIwVer1MEQDzsO4MwwQ9Tq3xcPlqsI2xR9EqkNcmeC8m4uZKtMJ2LrMMGOqUBgViq2wwHxYIRcVYsXLZM5vMfDwBtjjCxavlGoeyjOI8UMKyClZ%2BoIItJ2NYM7XObJRkTsT%2BHCmSzUpJUsQgtD8h8qba%2FflwSqSul2oj2yHDoyyPsvxhnXIFS88K1XP%2BFBPzubPWm%2FPOooPMVGXh1mOY7F1FLhX4KfL37c%2FMT5PdyUCqWWxKo7H%2FkQiK0xqXRWuu014cJGIgP7JqBBaKYs6EIjMxe&X-Amz-Signature=bc3f3fc15148854da65e2258f075eaab399052f0de1f3eccd97e1fb8b9d6bce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QT5JRQ2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHwGjVNS4Y2RIYvvVjTlR1PCqdcGhI%2F1Ia3fFJhoz8tzAiEAzc4UyPkTGw6%2B0kqQdyYY4sk3S9T%2BHXaYOzxm8PiPS68q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHpy5BgYlNX7QcuJQSrcA9YmqslEMhrqXuhdyFcEBuot5zskQEynBFA8fSifgmnbcmZcVr9JQtEf5qPdZmAXsThsJ40VdxCwmH2Q6DxRm7OnOdWc1GahWttGKftgG7XgCAJsblFcKUhsOUTcrCs8TUy4nob1BMnY56EL4WckNdXgHvHGWbMUxs6G16iRTiklUbTghEMTwQHnvG4GcDPh1n6qILdNrAU8JWgngFBQ685Rvmk2e7f4gzrD%2B3Z6VLWL45IA5P9VbP%2F3yW%2BVyi%2Bl4a1slLXNIz7Cmlv2%2Fcrb4NQgyMNX776D0jLO3VLFgMpn0MKCYM1bEYXHpfjLndsD6jA5dJ6cQIbUKyicVNfwe%2BWFRNbbjYVTj9p8zWzEr0p3bjtlf7%2BZJU37C%2FRUC9RC4mBRyC04QDQv5009Z%2FxPSfCOgZaRPnNa8XsB3IGKUdxHTgtszc370fnbglsV3NgoWgZeHC4wXkjtcK0cIX%2F5wU4HrgLY%2F%2Bt9oi6rKDKX%2B6i4bmcLT%2BTIC84Z%2FMWzfYyiuQn9n2KdiSckd95DbdcGsaAwsPypcSPAbmckIBs%2BPg%2FFpo39onzYejQwpjU%2BQcdqmpg6ILlvrmVmIwVer1MEQDzsO4MwwQ9Tq3xcPlqsI2xR9EqkNcmeC8m4uZKtMJ2LrMMGOqUBgViq2wwHxYIRcVYsXLZM5vMfDwBtjjCxavlGoeyjOI8UMKyClZ%2BoIItJ2NYM7XObJRkTsT%2BHCmSzUpJUsQgtD8h8qba%2FflwSqSul2oj2yHDoyyPsvxhnXIFS88K1XP%2BFBPzubPWm%2FPOooPMVGXh1mOY7F1FLhX4KfL37c%2FMT5PdyUCqWWxKo7H%2FkQiK0xqXRWuu014cJGIgP7JqBBaKYs6EIjMxe&X-Amz-Signature=552065b5b417562a4f9ae68fe7234e4e579bcbdf3ee3e740c6e5c24de832c454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QT5JRQ2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHwGjVNS4Y2RIYvvVjTlR1PCqdcGhI%2F1Ia3fFJhoz8tzAiEAzc4UyPkTGw6%2B0kqQdyYY4sk3S9T%2BHXaYOzxm8PiPS68q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHpy5BgYlNX7QcuJQSrcA9YmqslEMhrqXuhdyFcEBuot5zskQEynBFA8fSifgmnbcmZcVr9JQtEf5qPdZmAXsThsJ40VdxCwmH2Q6DxRm7OnOdWc1GahWttGKftgG7XgCAJsblFcKUhsOUTcrCs8TUy4nob1BMnY56EL4WckNdXgHvHGWbMUxs6G16iRTiklUbTghEMTwQHnvG4GcDPh1n6qILdNrAU8JWgngFBQ685Rvmk2e7f4gzrD%2B3Z6VLWL45IA5P9VbP%2F3yW%2BVyi%2Bl4a1slLXNIz7Cmlv2%2Fcrb4NQgyMNX776D0jLO3VLFgMpn0MKCYM1bEYXHpfjLndsD6jA5dJ6cQIbUKyicVNfwe%2BWFRNbbjYVTj9p8zWzEr0p3bjtlf7%2BZJU37C%2FRUC9RC4mBRyC04QDQv5009Z%2FxPSfCOgZaRPnNa8XsB3IGKUdxHTgtszc370fnbglsV3NgoWgZeHC4wXkjtcK0cIX%2F5wU4HrgLY%2F%2Bt9oi6rKDKX%2B6i4bmcLT%2BTIC84Z%2FMWzfYyiuQn9n2KdiSckd95DbdcGsaAwsPypcSPAbmckIBs%2BPg%2FFpo39onzYejQwpjU%2BQcdqmpg6ILlvrmVmIwVer1MEQDzsO4MwwQ9Tq3xcPlqsI2xR9EqkNcmeC8m4uZKtMJ2LrMMGOqUBgViq2wwHxYIRcVYsXLZM5vMfDwBtjjCxavlGoeyjOI8UMKyClZ%2BoIItJ2NYM7XObJRkTsT%2BHCmSzUpJUsQgtD8h8qba%2FflwSqSul2oj2yHDoyyPsvxhnXIFS88K1XP%2BFBPzubPWm%2FPOooPMVGXh1mOY7F1FLhX4KfL37c%2FMT5PdyUCqWWxKo7H%2FkQiK0xqXRWuu014cJGIgP7JqBBaKYs6EIjMxe&X-Amz-Signature=3cad432d48cd4719843bc761aded0a554af13b30081c37de1e98d5c1c1e1a286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QT5JRQ2%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIHwGjVNS4Y2RIYvvVjTlR1PCqdcGhI%2F1Ia3fFJhoz8tzAiEAzc4UyPkTGw6%2B0kqQdyYY4sk3S9T%2BHXaYOzxm8PiPS68q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDHpy5BgYlNX7QcuJQSrcA9YmqslEMhrqXuhdyFcEBuot5zskQEynBFA8fSifgmnbcmZcVr9JQtEf5qPdZmAXsThsJ40VdxCwmH2Q6DxRm7OnOdWc1GahWttGKftgG7XgCAJsblFcKUhsOUTcrCs8TUy4nob1BMnY56EL4WckNdXgHvHGWbMUxs6G16iRTiklUbTghEMTwQHnvG4GcDPh1n6qILdNrAU8JWgngFBQ685Rvmk2e7f4gzrD%2B3Z6VLWL45IA5P9VbP%2F3yW%2BVyi%2Bl4a1slLXNIz7Cmlv2%2Fcrb4NQgyMNX776D0jLO3VLFgMpn0MKCYM1bEYXHpfjLndsD6jA5dJ6cQIbUKyicVNfwe%2BWFRNbbjYVTj9p8zWzEr0p3bjtlf7%2BZJU37C%2FRUC9RC4mBRyC04QDQv5009Z%2FxPSfCOgZaRPnNa8XsB3IGKUdxHTgtszc370fnbglsV3NgoWgZeHC4wXkjtcK0cIX%2F5wU4HrgLY%2F%2Bt9oi6rKDKX%2B6i4bmcLT%2BTIC84Z%2FMWzfYyiuQn9n2KdiSckd95DbdcGsaAwsPypcSPAbmckIBs%2BPg%2FFpo39onzYejQwpjU%2BQcdqmpg6ILlvrmVmIwVer1MEQDzsO4MwwQ9Tq3xcPlqsI2xR9EqkNcmeC8m4uZKtMJ2LrMMGOqUBgViq2wwHxYIRcVYsXLZM5vMfDwBtjjCxavlGoeyjOI8UMKyClZ%2BoIItJ2NYM7XObJRkTsT%2BHCmSzUpJUsQgtD8h8qba%2FflwSqSul2oj2yHDoyyPsvxhnXIFS88K1XP%2BFBPzubPWm%2FPOooPMVGXh1mOY7F1FLhX4KfL37c%2FMT5PdyUCqWWxKo7H%2FkQiK0xqXRWuu014cJGIgP7JqBBaKYs6EIjMxe&X-Amz-Signature=5296ac47f2f6dd31c5714957777d02afefa7f647a18b0dd40dc12cceefaf9588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
