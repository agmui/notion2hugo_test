---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UZQQVE%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkFTNnhVJ%2BPnbsxT4HLTmU3WVJyfZ1QXTihYAd%2BuY3RgIhALIQ1xB1OkRrXg8WLS5r%2BXpxlMfIqzXs9JlJGJ78n4M9KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM4nK%2ByWHL6Qn11vgq3AOchmeGF0KWY0XDuNaO70z5s1JA30YPUr0tmU29aXDsxYnx8uE0LMz5xyR%2BIKHvEATWR5v%2FP5KgRN%2FoI1YrHkzVjRi%2BbhG1MbtC8v2iPdqZzEHqTqrXDEs1I8hdkvoWptZvn2JkxUdcHUkrxnpBUe0f3Ijip00JJjDeVPKXcg6mRuzWvj%2FXPnhAPGGe8UHf90VdQKYtnw6%2B7fGhYcRKnlGgl8y5KIGwSCkZwZS42mhY02NciyBPKzVcQjqOtstE7pHNs%2FHLrdEzrz3QBavtrAxgFNHrR2o65XywoK%2FWYA8s%2BfLxH%2BVpfHX0mH0z5oM1h2dYaNeHmI%2Br3rpHJB5SLN8pU8kQzUcGaOBBgN7%2FVqlpTasnVmZGvRmI7swulTMGVXwvbc95doITH69t8%2BFvcESPO4H8dZJd7%2FXC3gLgK00XSCAxBKdBBmbzYaAsQwEcow6gab5QgVd94ZKvL1v5GuW5QK1RQCtAr%2Fwvo42vzV8sRW59A5Xog%2B2Ksi1QMh65VsyXMCvWfJAF9S8m%2B5h0REwXT9cHqpyKiLIZ5o0oafqK%2FcFdRWkt3bDYKSxpYDdQOJj7kBhA3xsl8XIjzDavCzgJi%2FUkxwTUlnu5vTr%2BeqvgiqGUfWmgsDYXcNqN7jDt5pbHBjqkASL2ng7Sryara7PBdVA08LhcfmA7sd7ubBWxE8zKKALu8eWQsZ3%2F99TM%2Bv2EoOmeX7CCECqox3C2S%2BrEqvVl05IL3DqZlthBcvGOm3U2gC01LmvK4xg2%2BxdbdEAlLObeul%2FQUNqsdBKuLEGuShBzwwACWoRBop6%2F7dZ0eTaBq2%2FPlzRph57g%2B6IpjBDFd9Z65nPJhykcu1OhVcN0CYeJ2Xl%2Fk64o&X-Amz-Signature=430770f739b4df4584e334c65ee62d0483617237c0d69e857f084f06d908d05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UZQQVE%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkFTNnhVJ%2BPnbsxT4HLTmU3WVJyfZ1QXTihYAd%2BuY3RgIhALIQ1xB1OkRrXg8WLS5r%2BXpxlMfIqzXs9JlJGJ78n4M9KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM4nK%2ByWHL6Qn11vgq3AOchmeGF0KWY0XDuNaO70z5s1JA30YPUr0tmU29aXDsxYnx8uE0LMz5xyR%2BIKHvEATWR5v%2FP5KgRN%2FoI1YrHkzVjRi%2BbhG1MbtC8v2iPdqZzEHqTqrXDEs1I8hdkvoWptZvn2JkxUdcHUkrxnpBUe0f3Ijip00JJjDeVPKXcg6mRuzWvj%2FXPnhAPGGe8UHf90VdQKYtnw6%2B7fGhYcRKnlGgl8y5KIGwSCkZwZS42mhY02NciyBPKzVcQjqOtstE7pHNs%2FHLrdEzrz3QBavtrAxgFNHrR2o65XywoK%2FWYA8s%2BfLxH%2BVpfHX0mH0z5oM1h2dYaNeHmI%2Br3rpHJB5SLN8pU8kQzUcGaOBBgN7%2FVqlpTasnVmZGvRmI7swulTMGVXwvbc95doITH69t8%2BFvcESPO4H8dZJd7%2FXC3gLgK00XSCAxBKdBBmbzYaAsQwEcow6gab5QgVd94ZKvL1v5GuW5QK1RQCtAr%2Fwvo42vzV8sRW59A5Xog%2B2Ksi1QMh65VsyXMCvWfJAF9S8m%2B5h0REwXT9cHqpyKiLIZ5o0oafqK%2FcFdRWkt3bDYKSxpYDdQOJj7kBhA3xsl8XIjzDavCzgJi%2FUkxwTUlnu5vTr%2BeqvgiqGUfWmgsDYXcNqN7jDt5pbHBjqkASL2ng7Sryara7PBdVA08LhcfmA7sd7ubBWxE8zKKALu8eWQsZ3%2F99TM%2Bv2EoOmeX7CCECqox3C2S%2BrEqvVl05IL3DqZlthBcvGOm3U2gC01LmvK4xg2%2BxdbdEAlLObeul%2FQUNqsdBKuLEGuShBzwwACWoRBop6%2F7dZ0eTaBq2%2FPlzRph57g%2B6IpjBDFd9Z65nPJhykcu1OhVcN0CYeJ2Xl%2Fk64o&X-Amz-Signature=7eaaa8997f8334fbf6817215fc7ecb15cfab34e522b3638094b8723d074a3ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UZQQVE%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkFTNnhVJ%2BPnbsxT4HLTmU3WVJyfZ1QXTihYAd%2BuY3RgIhALIQ1xB1OkRrXg8WLS5r%2BXpxlMfIqzXs9JlJGJ78n4M9KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM4nK%2ByWHL6Qn11vgq3AOchmeGF0KWY0XDuNaO70z5s1JA30YPUr0tmU29aXDsxYnx8uE0LMz5xyR%2BIKHvEATWR5v%2FP5KgRN%2FoI1YrHkzVjRi%2BbhG1MbtC8v2iPdqZzEHqTqrXDEs1I8hdkvoWptZvn2JkxUdcHUkrxnpBUe0f3Ijip00JJjDeVPKXcg6mRuzWvj%2FXPnhAPGGe8UHf90VdQKYtnw6%2B7fGhYcRKnlGgl8y5KIGwSCkZwZS42mhY02NciyBPKzVcQjqOtstE7pHNs%2FHLrdEzrz3QBavtrAxgFNHrR2o65XywoK%2FWYA8s%2BfLxH%2BVpfHX0mH0z5oM1h2dYaNeHmI%2Br3rpHJB5SLN8pU8kQzUcGaOBBgN7%2FVqlpTasnVmZGvRmI7swulTMGVXwvbc95doITH69t8%2BFvcESPO4H8dZJd7%2FXC3gLgK00XSCAxBKdBBmbzYaAsQwEcow6gab5QgVd94ZKvL1v5GuW5QK1RQCtAr%2Fwvo42vzV8sRW59A5Xog%2B2Ksi1QMh65VsyXMCvWfJAF9S8m%2B5h0REwXT9cHqpyKiLIZ5o0oafqK%2FcFdRWkt3bDYKSxpYDdQOJj7kBhA3xsl8XIjzDavCzgJi%2FUkxwTUlnu5vTr%2BeqvgiqGUfWmgsDYXcNqN7jDt5pbHBjqkASL2ng7Sryara7PBdVA08LhcfmA7sd7ubBWxE8zKKALu8eWQsZ3%2F99TM%2Bv2EoOmeX7CCECqox3C2S%2BrEqvVl05IL3DqZlthBcvGOm3U2gC01LmvK4xg2%2BxdbdEAlLObeul%2FQUNqsdBKuLEGuShBzwwACWoRBop6%2F7dZ0eTaBq2%2FPlzRph57g%2B6IpjBDFd9Z65nPJhykcu1OhVcN0CYeJ2Xl%2Fk64o&X-Amz-Signature=f1d6f872f717a949b7671f36ce5add3e0f6d897323b2b81be98cafa62039dd52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UZQQVE%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkFTNnhVJ%2BPnbsxT4HLTmU3WVJyfZ1QXTihYAd%2BuY3RgIhALIQ1xB1OkRrXg8WLS5r%2BXpxlMfIqzXs9JlJGJ78n4M9KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM4nK%2ByWHL6Qn11vgq3AOchmeGF0KWY0XDuNaO70z5s1JA30YPUr0tmU29aXDsxYnx8uE0LMz5xyR%2BIKHvEATWR5v%2FP5KgRN%2FoI1YrHkzVjRi%2BbhG1MbtC8v2iPdqZzEHqTqrXDEs1I8hdkvoWptZvn2JkxUdcHUkrxnpBUe0f3Ijip00JJjDeVPKXcg6mRuzWvj%2FXPnhAPGGe8UHf90VdQKYtnw6%2B7fGhYcRKnlGgl8y5KIGwSCkZwZS42mhY02NciyBPKzVcQjqOtstE7pHNs%2FHLrdEzrz3QBavtrAxgFNHrR2o65XywoK%2FWYA8s%2BfLxH%2BVpfHX0mH0z5oM1h2dYaNeHmI%2Br3rpHJB5SLN8pU8kQzUcGaOBBgN7%2FVqlpTasnVmZGvRmI7swulTMGVXwvbc95doITH69t8%2BFvcESPO4H8dZJd7%2FXC3gLgK00XSCAxBKdBBmbzYaAsQwEcow6gab5QgVd94ZKvL1v5GuW5QK1RQCtAr%2Fwvo42vzV8sRW59A5Xog%2B2Ksi1QMh65VsyXMCvWfJAF9S8m%2B5h0REwXT9cHqpyKiLIZ5o0oafqK%2FcFdRWkt3bDYKSxpYDdQOJj7kBhA3xsl8XIjzDavCzgJi%2FUkxwTUlnu5vTr%2BeqvgiqGUfWmgsDYXcNqN7jDt5pbHBjqkASL2ng7Sryara7PBdVA08LhcfmA7sd7ubBWxE8zKKALu8eWQsZ3%2F99TM%2Bv2EoOmeX7CCECqox3C2S%2BrEqvVl05IL3DqZlthBcvGOm3U2gC01LmvK4xg2%2BxdbdEAlLObeul%2FQUNqsdBKuLEGuShBzwwACWoRBop6%2F7dZ0eTaBq2%2FPlzRph57g%2B6IpjBDFd9Z65nPJhykcu1OhVcN0CYeJ2Xl%2Fk64o&X-Amz-Signature=cdf040e1f6d235c7d78c97818ed5eb69a453c4842256c76f83a3b383bcc6d938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UZQQVE%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkFTNnhVJ%2BPnbsxT4HLTmU3WVJyfZ1QXTihYAd%2BuY3RgIhALIQ1xB1OkRrXg8WLS5r%2BXpxlMfIqzXs9JlJGJ78n4M9KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM4nK%2ByWHL6Qn11vgq3AOchmeGF0KWY0XDuNaO70z5s1JA30YPUr0tmU29aXDsxYnx8uE0LMz5xyR%2BIKHvEATWR5v%2FP5KgRN%2FoI1YrHkzVjRi%2BbhG1MbtC8v2iPdqZzEHqTqrXDEs1I8hdkvoWptZvn2JkxUdcHUkrxnpBUe0f3Ijip00JJjDeVPKXcg6mRuzWvj%2FXPnhAPGGe8UHf90VdQKYtnw6%2B7fGhYcRKnlGgl8y5KIGwSCkZwZS42mhY02NciyBPKzVcQjqOtstE7pHNs%2FHLrdEzrz3QBavtrAxgFNHrR2o65XywoK%2FWYA8s%2BfLxH%2BVpfHX0mH0z5oM1h2dYaNeHmI%2Br3rpHJB5SLN8pU8kQzUcGaOBBgN7%2FVqlpTasnVmZGvRmI7swulTMGVXwvbc95doITH69t8%2BFvcESPO4H8dZJd7%2FXC3gLgK00XSCAxBKdBBmbzYaAsQwEcow6gab5QgVd94ZKvL1v5GuW5QK1RQCtAr%2Fwvo42vzV8sRW59A5Xog%2B2Ksi1QMh65VsyXMCvWfJAF9S8m%2B5h0REwXT9cHqpyKiLIZ5o0oafqK%2FcFdRWkt3bDYKSxpYDdQOJj7kBhA3xsl8XIjzDavCzgJi%2FUkxwTUlnu5vTr%2BeqvgiqGUfWmgsDYXcNqN7jDt5pbHBjqkASL2ng7Sryara7PBdVA08LhcfmA7sd7ubBWxE8zKKALu8eWQsZ3%2F99TM%2Bv2EoOmeX7CCECqox3C2S%2BrEqvVl05IL3DqZlthBcvGOm3U2gC01LmvK4xg2%2BxdbdEAlLObeul%2FQUNqsdBKuLEGuShBzwwACWoRBop6%2F7dZ0eTaBq2%2FPlzRph57g%2B6IpjBDFd9Z65nPJhykcu1OhVcN0CYeJ2Xl%2Fk64o&X-Amz-Signature=746403140634a498b8af81e746f19e6bfaab36cef8b8f9a2ddc44de8a97acc82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UZQQVE%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkFTNnhVJ%2BPnbsxT4HLTmU3WVJyfZ1QXTihYAd%2BuY3RgIhALIQ1xB1OkRrXg8WLS5r%2BXpxlMfIqzXs9JlJGJ78n4M9KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM4nK%2ByWHL6Qn11vgq3AOchmeGF0KWY0XDuNaO70z5s1JA30YPUr0tmU29aXDsxYnx8uE0LMz5xyR%2BIKHvEATWR5v%2FP5KgRN%2FoI1YrHkzVjRi%2BbhG1MbtC8v2iPdqZzEHqTqrXDEs1I8hdkvoWptZvn2JkxUdcHUkrxnpBUe0f3Ijip00JJjDeVPKXcg6mRuzWvj%2FXPnhAPGGe8UHf90VdQKYtnw6%2B7fGhYcRKnlGgl8y5KIGwSCkZwZS42mhY02NciyBPKzVcQjqOtstE7pHNs%2FHLrdEzrz3QBavtrAxgFNHrR2o65XywoK%2FWYA8s%2BfLxH%2BVpfHX0mH0z5oM1h2dYaNeHmI%2Br3rpHJB5SLN8pU8kQzUcGaOBBgN7%2FVqlpTasnVmZGvRmI7swulTMGVXwvbc95doITH69t8%2BFvcESPO4H8dZJd7%2FXC3gLgK00XSCAxBKdBBmbzYaAsQwEcow6gab5QgVd94ZKvL1v5GuW5QK1RQCtAr%2Fwvo42vzV8sRW59A5Xog%2B2Ksi1QMh65VsyXMCvWfJAF9S8m%2B5h0REwXT9cHqpyKiLIZ5o0oafqK%2FcFdRWkt3bDYKSxpYDdQOJj7kBhA3xsl8XIjzDavCzgJi%2FUkxwTUlnu5vTr%2BeqvgiqGUfWmgsDYXcNqN7jDt5pbHBjqkASL2ng7Sryara7PBdVA08LhcfmA7sd7ubBWxE8zKKALu8eWQsZ3%2F99TM%2Bv2EoOmeX7CCECqox3C2S%2BrEqvVl05IL3DqZlthBcvGOm3U2gC01LmvK4xg2%2BxdbdEAlLObeul%2FQUNqsdBKuLEGuShBzwwACWoRBop6%2F7dZ0eTaBq2%2FPlzRph57g%2B6IpjBDFd9Z65nPJhykcu1OhVcN0CYeJ2Xl%2Fk64o&X-Amz-Signature=c01857caff21a54a4d0c5b981d9629cc78a6554ec46519f4564b0a0be86a4852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UZQQVE%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkFTNnhVJ%2BPnbsxT4HLTmU3WVJyfZ1QXTihYAd%2BuY3RgIhALIQ1xB1OkRrXg8WLS5r%2BXpxlMfIqzXs9JlJGJ78n4M9KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM4nK%2ByWHL6Qn11vgq3AOchmeGF0KWY0XDuNaO70z5s1JA30YPUr0tmU29aXDsxYnx8uE0LMz5xyR%2BIKHvEATWR5v%2FP5KgRN%2FoI1YrHkzVjRi%2BbhG1MbtC8v2iPdqZzEHqTqrXDEs1I8hdkvoWptZvn2JkxUdcHUkrxnpBUe0f3Ijip00JJjDeVPKXcg6mRuzWvj%2FXPnhAPGGe8UHf90VdQKYtnw6%2B7fGhYcRKnlGgl8y5KIGwSCkZwZS42mhY02NciyBPKzVcQjqOtstE7pHNs%2FHLrdEzrz3QBavtrAxgFNHrR2o65XywoK%2FWYA8s%2BfLxH%2BVpfHX0mH0z5oM1h2dYaNeHmI%2Br3rpHJB5SLN8pU8kQzUcGaOBBgN7%2FVqlpTasnVmZGvRmI7swulTMGVXwvbc95doITH69t8%2BFvcESPO4H8dZJd7%2FXC3gLgK00XSCAxBKdBBmbzYaAsQwEcow6gab5QgVd94ZKvL1v5GuW5QK1RQCtAr%2Fwvo42vzV8sRW59A5Xog%2B2Ksi1QMh65VsyXMCvWfJAF9S8m%2B5h0REwXT9cHqpyKiLIZ5o0oafqK%2FcFdRWkt3bDYKSxpYDdQOJj7kBhA3xsl8XIjzDavCzgJi%2FUkxwTUlnu5vTr%2BeqvgiqGUfWmgsDYXcNqN7jDt5pbHBjqkASL2ng7Sryara7PBdVA08LhcfmA7sd7ubBWxE8zKKALu8eWQsZ3%2F99TM%2Bv2EoOmeX7CCECqox3C2S%2BrEqvVl05IL3DqZlthBcvGOm3U2gC01LmvK4xg2%2BxdbdEAlLObeul%2FQUNqsdBKuLEGuShBzwwACWoRBop6%2F7dZ0eTaBq2%2FPlzRph57g%2B6IpjBDFd9Z65nPJhykcu1OhVcN0CYeJ2Xl%2Fk64o&X-Amz-Signature=41575b5ae7e287ce4bba3acc0f9aaaa1b45c6791f0dc3c0583db4073a8514dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652UZQQVE%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCkFTNnhVJ%2BPnbsxT4HLTmU3WVJyfZ1QXTihYAd%2BuY3RgIhALIQ1xB1OkRrXg8WLS5r%2BXpxlMfIqzXs9JlJGJ78n4M9KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM4nK%2ByWHL6Qn11vgq3AOchmeGF0KWY0XDuNaO70z5s1JA30YPUr0tmU29aXDsxYnx8uE0LMz5xyR%2BIKHvEATWR5v%2FP5KgRN%2FoI1YrHkzVjRi%2BbhG1MbtC8v2iPdqZzEHqTqrXDEs1I8hdkvoWptZvn2JkxUdcHUkrxnpBUe0f3Ijip00JJjDeVPKXcg6mRuzWvj%2FXPnhAPGGe8UHf90VdQKYtnw6%2B7fGhYcRKnlGgl8y5KIGwSCkZwZS42mhY02NciyBPKzVcQjqOtstE7pHNs%2FHLrdEzrz3QBavtrAxgFNHrR2o65XywoK%2FWYA8s%2BfLxH%2BVpfHX0mH0z5oM1h2dYaNeHmI%2Br3rpHJB5SLN8pU8kQzUcGaOBBgN7%2FVqlpTasnVmZGvRmI7swulTMGVXwvbc95doITH69t8%2BFvcESPO4H8dZJd7%2FXC3gLgK00XSCAxBKdBBmbzYaAsQwEcow6gab5QgVd94ZKvL1v5GuW5QK1RQCtAr%2Fwvo42vzV8sRW59A5Xog%2B2Ksi1QMh65VsyXMCvWfJAF9S8m%2B5h0REwXT9cHqpyKiLIZ5o0oafqK%2FcFdRWkt3bDYKSxpYDdQOJj7kBhA3xsl8XIjzDavCzgJi%2FUkxwTUlnu5vTr%2BeqvgiqGUfWmgsDYXcNqN7jDt5pbHBjqkASL2ng7Sryara7PBdVA08LhcfmA7sd7ubBWxE8zKKALu8eWQsZ3%2F99TM%2Bv2EoOmeX7CCECqox3C2S%2BrEqvVl05IL3DqZlthBcvGOm3U2gC01LmvK4xg2%2BxdbdEAlLObeul%2FQUNqsdBKuLEGuShBzwwACWoRBop6%2F7dZ0eTaBq2%2FPlzRph57g%2B6IpjBDFd9Z65nPJhykcu1OhVcN0CYeJ2Xl%2Fk64o&X-Amz-Signature=130e4cf7f2e7ce296a74b9e0fb5c7881f4bf11acfdec2aef1b4d16d412f1c897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
