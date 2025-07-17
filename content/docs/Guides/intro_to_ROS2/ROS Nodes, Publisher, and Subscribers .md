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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7ZCVM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF4ZYzMT0S7qkgX9iXYU7vFGaMxKu600dPyKl7Io8Wm6AiAouy4Al%2BKBt9Ym9VrsJSW96IRz6NaLHg8u3ETvUe3Oqyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7BCSN0LuoRBLDWApKtwD%2BVPmcqbW%2F2wZiKmNMXHO%2FlXxSkAqK9yvzCoM73%2FGUZNwB%2B2UBsi%2Bl08G9GaAFWpGqWJmfqLcDhOB33YhxNWFL%2B%2FugDyYs5vIJ35JsGPkdhQZMYdDY5ayvCPrYkJszFMXA10b5mZm%2B4P4DXFLjh%2FB%2F8JJ7r%2F7wO7jP0OmzRj0nU7Ou42T38X6Dy%2F9jrHvyGRQaqNIBF0BpgI3B9%2FVYhxo%2FEA3GHyfi%2F5Y0moAHEvc%2FnboiiBv3Tjkz8fM4auASbA0jZeFnrPLFV2mrs9RMfAaA39DOCK4HL7y5wvCdam9JGS9zPav%2BA2mkxZk1GDb33I%2FaxhERPJAmktqjdyhpbZMNS3HuHN3w%2FVprk6UrkG%2BS%2BEIo9xpjXeyxz0xr0tqq%2FQOc03rmln5g0U%2Bi6ZfY3IwkiXk%2FHsu8agQjBvYv%2BlzinzEF6CGwmqH0QwvkhuAnIqE4hvJLmITTuzXPaHZMK0b0nlTqaMSPtpwYvzQekNzADJadL%2Bh6aU6PGRWUCy34oGU8eqWRoZeQpqORExTok4YiqFXWzJSjk46%2BdqlyBVpfauhk%2BmGc6ZmudsnoiAemN%2BKCvoqoCcgFgnbmdgTa%2BiPeotHyyO86ckZoIbE7rZRtIp5YVYlOgcC%2BAlq1Qcw%2BorkwwY6pgHQrbUsfHXsoutbtVLNPWaAqCP%2F5vIAzRSLM0Kj5s%2FUprcT9eXayUe2eFFTuJ1B0pqX%2FUUry38rfnVEFwzG0ydEoVTRWi0x%2FhaWDT9Tj91ci1Ph88c9BnFHdkniwGJ7EYtlSnKab973v8q70kJya7qXCKlaGgBEjCb4%2B3dqHrLFaQiOdgJa4VrM1ldA5Qyc7u%2Fo%2BVqvAjofPk7TLGXH2uHebascl3Ew&X-Amz-Signature=f4584d1aa2c2a4c17fb79905761eccd0a938f57132e072962905fd63883aefe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7ZCVM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF4ZYzMT0S7qkgX9iXYU7vFGaMxKu600dPyKl7Io8Wm6AiAouy4Al%2BKBt9Ym9VrsJSW96IRz6NaLHg8u3ETvUe3Oqyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7BCSN0LuoRBLDWApKtwD%2BVPmcqbW%2F2wZiKmNMXHO%2FlXxSkAqK9yvzCoM73%2FGUZNwB%2B2UBsi%2Bl08G9GaAFWpGqWJmfqLcDhOB33YhxNWFL%2B%2FugDyYs5vIJ35JsGPkdhQZMYdDY5ayvCPrYkJszFMXA10b5mZm%2B4P4DXFLjh%2FB%2F8JJ7r%2F7wO7jP0OmzRj0nU7Ou42T38X6Dy%2F9jrHvyGRQaqNIBF0BpgI3B9%2FVYhxo%2FEA3GHyfi%2F5Y0moAHEvc%2FnboiiBv3Tjkz8fM4auASbA0jZeFnrPLFV2mrs9RMfAaA39DOCK4HL7y5wvCdam9JGS9zPav%2BA2mkxZk1GDb33I%2FaxhERPJAmktqjdyhpbZMNS3HuHN3w%2FVprk6UrkG%2BS%2BEIo9xpjXeyxz0xr0tqq%2FQOc03rmln5g0U%2Bi6ZfY3IwkiXk%2FHsu8agQjBvYv%2BlzinzEF6CGwmqH0QwvkhuAnIqE4hvJLmITTuzXPaHZMK0b0nlTqaMSPtpwYvzQekNzADJadL%2Bh6aU6PGRWUCy34oGU8eqWRoZeQpqORExTok4YiqFXWzJSjk46%2BdqlyBVpfauhk%2BmGc6ZmudsnoiAemN%2BKCvoqoCcgFgnbmdgTa%2BiPeotHyyO86ckZoIbE7rZRtIp5YVYlOgcC%2BAlq1Qcw%2BorkwwY6pgHQrbUsfHXsoutbtVLNPWaAqCP%2F5vIAzRSLM0Kj5s%2FUprcT9eXayUe2eFFTuJ1B0pqX%2FUUry38rfnVEFwzG0ydEoVTRWi0x%2FhaWDT9Tj91ci1Ph88c9BnFHdkniwGJ7EYtlSnKab973v8q70kJya7qXCKlaGgBEjCb4%2B3dqHrLFaQiOdgJa4VrM1ldA5Qyc7u%2Fo%2BVqvAjofPk7TLGXH2uHebascl3Ew&X-Amz-Signature=685eea33b672124ffc7ac5c474d35d5ccdbcb97318dc6b0efdf990e472c1db00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7ZCVM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF4ZYzMT0S7qkgX9iXYU7vFGaMxKu600dPyKl7Io8Wm6AiAouy4Al%2BKBt9Ym9VrsJSW96IRz6NaLHg8u3ETvUe3Oqyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7BCSN0LuoRBLDWApKtwD%2BVPmcqbW%2F2wZiKmNMXHO%2FlXxSkAqK9yvzCoM73%2FGUZNwB%2B2UBsi%2Bl08G9GaAFWpGqWJmfqLcDhOB33YhxNWFL%2B%2FugDyYs5vIJ35JsGPkdhQZMYdDY5ayvCPrYkJszFMXA10b5mZm%2B4P4DXFLjh%2FB%2F8JJ7r%2F7wO7jP0OmzRj0nU7Ou42T38X6Dy%2F9jrHvyGRQaqNIBF0BpgI3B9%2FVYhxo%2FEA3GHyfi%2F5Y0moAHEvc%2FnboiiBv3Tjkz8fM4auASbA0jZeFnrPLFV2mrs9RMfAaA39DOCK4HL7y5wvCdam9JGS9zPav%2BA2mkxZk1GDb33I%2FaxhERPJAmktqjdyhpbZMNS3HuHN3w%2FVprk6UrkG%2BS%2BEIo9xpjXeyxz0xr0tqq%2FQOc03rmln5g0U%2Bi6ZfY3IwkiXk%2FHsu8agQjBvYv%2BlzinzEF6CGwmqH0QwvkhuAnIqE4hvJLmITTuzXPaHZMK0b0nlTqaMSPtpwYvzQekNzADJadL%2Bh6aU6PGRWUCy34oGU8eqWRoZeQpqORExTok4YiqFXWzJSjk46%2BdqlyBVpfauhk%2BmGc6ZmudsnoiAemN%2BKCvoqoCcgFgnbmdgTa%2BiPeotHyyO86ckZoIbE7rZRtIp5YVYlOgcC%2BAlq1Qcw%2BorkwwY6pgHQrbUsfHXsoutbtVLNPWaAqCP%2F5vIAzRSLM0Kj5s%2FUprcT9eXayUe2eFFTuJ1B0pqX%2FUUry38rfnVEFwzG0ydEoVTRWi0x%2FhaWDT9Tj91ci1Ph88c9BnFHdkniwGJ7EYtlSnKab973v8q70kJya7qXCKlaGgBEjCb4%2B3dqHrLFaQiOdgJa4VrM1ldA5Qyc7u%2Fo%2BVqvAjofPk7TLGXH2uHebascl3Ew&X-Amz-Signature=b26d35c293ef4b77bd0efc7aa47ca5d71b525f55905abf522464b57fe600d807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7ZCVM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF4ZYzMT0S7qkgX9iXYU7vFGaMxKu600dPyKl7Io8Wm6AiAouy4Al%2BKBt9Ym9VrsJSW96IRz6NaLHg8u3ETvUe3Oqyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7BCSN0LuoRBLDWApKtwD%2BVPmcqbW%2F2wZiKmNMXHO%2FlXxSkAqK9yvzCoM73%2FGUZNwB%2B2UBsi%2Bl08G9GaAFWpGqWJmfqLcDhOB33YhxNWFL%2B%2FugDyYs5vIJ35JsGPkdhQZMYdDY5ayvCPrYkJszFMXA10b5mZm%2B4P4DXFLjh%2FB%2F8JJ7r%2F7wO7jP0OmzRj0nU7Ou42T38X6Dy%2F9jrHvyGRQaqNIBF0BpgI3B9%2FVYhxo%2FEA3GHyfi%2F5Y0moAHEvc%2FnboiiBv3Tjkz8fM4auASbA0jZeFnrPLFV2mrs9RMfAaA39DOCK4HL7y5wvCdam9JGS9zPav%2BA2mkxZk1GDb33I%2FaxhERPJAmktqjdyhpbZMNS3HuHN3w%2FVprk6UrkG%2BS%2BEIo9xpjXeyxz0xr0tqq%2FQOc03rmln5g0U%2Bi6ZfY3IwkiXk%2FHsu8agQjBvYv%2BlzinzEF6CGwmqH0QwvkhuAnIqE4hvJLmITTuzXPaHZMK0b0nlTqaMSPtpwYvzQekNzADJadL%2Bh6aU6PGRWUCy34oGU8eqWRoZeQpqORExTok4YiqFXWzJSjk46%2BdqlyBVpfauhk%2BmGc6ZmudsnoiAemN%2BKCvoqoCcgFgnbmdgTa%2BiPeotHyyO86ckZoIbE7rZRtIp5YVYlOgcC%2BAlq1Qcw%2BorkwwY6pgHQrbUsfHXsoutbtVLNPWaAqCP%2F5vIAzRSLM0Kj5s%2FUprcT9eXayUe2eFFTuJ1B0pqX%2FUUry38rfnVEFwzG0ydEoVTRWi0x%2FhaWDT9Tj91ci1Ph88c9BnFHdkniwGJ7EYtlSnKab973v8q70kJya7qXCKlaGgBEjCb4%2B3dqHrLFaQiOdgJa4VrM1ldA5Qyc7u%2Fo%2BVqvAjofPk7TLGXH2uHebascl3Ew&X-Amz-Signature=fd9f69dbef9de528d2660d5dc78809bf66baec9b089973f699a7d577ff740d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7ZCVM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF4ZYzMT0S7qkgX9iXYU7vFGaMxKu600dPyKl7Io8Wm6AiAouy4Al%2BKBt9Ym9VrsJSW96IRz6NaLHg8u3ETvUe3Oqyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7BCSN0LuoRBLDWApKtwD%2BVPmcqbW%2F2wZiKmNMXHO%2FlXxSkAqK9yvzCoM73%2FGUZNwB%2B2UBsi%2Bl08G9GaAFWpGqWJmfqLcDhOB33YhxNWFL%2B%2FugDyYs5vIJ35JsGPkdhQZMYdDY5ayvCPrYkJszFMXA10b5mZm%2B4P4DXFLjh%2FB%2F8JJ7r%2F7wO7jP0OmzRj0nU7Ou42T38X6Dy%2F9jrHvyGRQaqNIBF0BpgI3B9%2FVYhxo%2FEA3GHyfi%2F5Y0moAHEvc%2FnboiiBv3Tjkz8fM4auASbA0jZeFnrPLFV2mrs9RMfAaA39DOCK4HL7y5wvCdam9JGS9zPav%2BA2mkxZk1GDb33I%2FaxhERPJAmktqjdyhpbZMNS3HuHN3w%2FVprk6UrkG%2BS%2BEIo9xpjXeyxz0xr0tqq%2FQOc03rmln5g0U%2Bi6ZfY3IwkiXk%2FHsu8agQjBvYv%2BlzinzEF6CGwmqH0QwvkhuAnIqE4hvJLmITTuzXPaHZMK0b0nlTqaMSPtpwYvzQekNzADJadL%2Bh6aU6PGRWUCy34oGU8eqWRoZeQpqORExTok4YiqFXWzJSjk46%2BdqlyBVpfauhk%2BmGc6ZmudsnoiAemN%2BKCvoqoCcgFgnbmdgTa%2BiPeotHyyO86ckZoIbE7rZRtIp5YVYlOgcC%2BAlq1Qcw%2BorkwwY6pgHQrbUsfHXsoutbtVLNPWaAqCP%2F5vIAzRSLM0Kj5s%2FUprcT9eXayUe2eFFTuJ1B0pqX%2FUUry38rfnVEFwzG0ydEoVTRWi0x%2FhaWDT9Tj91ci1Ph88c9BnFHdkniwGJ7EYtlSnKab973v8q70kJya7qXCKlaGgBEjCb4%2B3dqHrLFaQiOdgJa4VrM1ldA5Qyc7u%2Fo%2BVqvAjofPk7TLGXH2uHebascl3Ew&X-Amz-Signature=ff86b859e979639c082837ba1d3a5c3dd262f661e99337d48918bebf6539f38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7ZCVM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF4ZYzMT0S7qkgX9iXYU7vFGaMxKu600dPyKl7Io8Wm6AiAouy4Al%2BKBt9Ym9VrsJSW96IRz6NaLHg8u3ETvUe3Oqyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7BCSN0LuoRBLDWApKtwD%2BVPmcqbW%2F2wZiKmNMXHO%2FlXxSkAqK9yvzCoM73%2FGUZNwB%2B2UBsi%2Bl08G9GaAFWpGqWJmfqLcDhOB33YhxNWFL%2B%2FugDyYs5vIJ35JsGPkdhQZMYdDY5ayvCPrYkJszFMXA10b5mZm%2B4P4DXFLjh%2FB%2F8JJ7r%2F7wO7jP0OmzRj0nU7Ou42T38X6Dy%2F9jrHvyGRQaqNIBF0BpgI3B9%2FVYhxo%2FEA3GHyfi%2F5Y0moAHEvc%2FnboiiBv3Tjkz8fM4auASbA0jZeFnrPLFV2mrs9RMfAaA39DOCK4HL7y5wvCdam9JGS9zPav%2BA2mkxZk1GDb33I%2FaxhERPJAmktqjdyhpbZMNS3HuHN3w%2FVprk6UrkG%2BS%2BEIo9xpjXeyxz0xr0tqq%2FQOc03rmln5g0U%2Bi6ZfY3IwkiXk%2FHsu8agQjBvYv%2BlzinzEF6CGwmqH0QwvkhuAnIqE4hvJLmITTuzXPaHZMK0b0nlTqaMSPtpwYvzQekNzADJadL%2Bh6aU6PGRWUCy34oGU8eqWRoZeQpqORExTok4YiqFXWzJSjk46%2BdqlyBVpfauhk%2BmGc6ZmudsnoiAemN%2BKCvoqoCcgFgnbmdgTa%2BiPeotHyyO86ckZoIbE7rZRtIp5YVYlOgcC%2BAlq1Qcw%2BorkwwY6pgHQrbUsfHXsoutbtVLNPWaAqCP%2F5vIAzRSLM0Kj5s%2FUprcT9eXayUe2eFFTuJ1B0pqX%2FUUry38rfnVEFwzG0ydEoVTRWi0x%2FhaWDT9Tj91ci1Ph88c9BnFHdkniwGJ7EYtlSnKab973v8q70kJya7qXCKlaGgBEjCb4%2B3dqHrLFaQiOdgJa4VrM1ldA5Qyc7u%2Fo%2BVqvAjofPk7TLGXH2uHebascl3Ew&X-Amz-Signature=5c7970fccf32f7b687e1cabacff45d63ed17134ce0ce572aba3eaca139afd899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7ZCVM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF4ZYzMT0S7qkgX9iXYU7vFGaMxKu600dPyKl7Io8Wm6AiAouy4Al%2BKBt9Ym9VrsJSW96IRz6NaLHg8u3ETvUe3Oqyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7BCSN0LuoRBLDWApKtwD%2BVPmcqbW%2F2wZiKmNMXHO%2FlXxSkAqK9yvzCoM73%2FGUZNwB%2B2UBsi%2Bl08G9GaAFWpGqWJmfqLcDhOB33YhxNWFL%2B%2FugDyYs5vIJ35JsGPkdhQZMYdDY5ayvCPrYkJszFMXA10b5mZm%2B4P4DXFLjh%2FB%2F8JJ7r%2F7wO7jP0OmzRj0nU7Ou42T38X6Dy%2F9jrHvyGRQaqNIBF0BpgI3B9%2FVYhxo%2FEA3GHyfi%2F5Y0moAHEvc%2FnboiiBv3Tjkz8fM4auASbA0jZeFnrPLFV2mrs9RMfAaA39DOCK4HL7y5wvCdam9JGS9zPav%2BA2mkxZk1GDb33I%2FaxhERPJAmktqjdyhpbZMNS3HuHN3w%2FVprk6UrkG%2BS%2BEIo9xpjXeyxz0xr0tqq%2FQOc03rmln5g0U%2Bi6ZfY3IwkiXk%2FHsu8agQjBvYv%2BlzinzEF6CGwmqH0QwvkhuAnIqE4hvJLmITTuzXPaHZMK0b0nlTqaMSPtpwYvzQekNzADJadL%2Bh6aU6PGRWUCy34oGU8eqWRoZeQpqORExTok4YiqFXWzJSjk46%2BdqlyBVpfauhk%2BmGc6ZmudsnoiAemN%2BKCvoqoCcgFgnbmdgTa%2BiPeotHyyO86ckZoIbE7rZRtIp5YVYlOgcC%2BAlq1Qcw%2BorkwwY6pgHQrbUsfHXsoutbtVLNPWaAqCP%2F5vIAzRSLM0Kj5s%2FUprcT9eXayUe2eFFTuJ1B0pqX%2FUUry38rfnVEFwzG0ydEoVTRWi0x%2FhaWDT9Tj91ci1Ph88c9BnFHdkniwGJ7EYtlSnKab973v8q70kJya7qXCKlaGgBEjCb4%2B3dqHrLFaQiOdgJa4VrM1ldA5Qyc7u%2Fo%2BVqvAjofPk7TLGXH2uHebascl3Ew&X-Amz-Signature=259ae8a32e3c1a32593a43b5d7fef2f2227cd5fc3b2f30c3b7250af1acdc87e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBK7ZCVM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T151001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIF4ZYzMT0S7qkgX9iXYU7vFGaMxKu600dPyKl7Io8Wm6AiAouy4Al%2BKBt9Ym9VrsJSW96IRz6NaLHg8u3ETvUe3Oqyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7BCSN0LuoRBLDWApKtwD%2BVPmcqbW%2F2wZiKmNMXHO%2FlXxSkAqK9yvzCoM73%2FGUZNwB%2B2UBsi%2Bl08G9GaAFWpGqWJmfqLcDhOB33YhxNWFL%2B%2FugDyYs5vIJ35JsGPkdhQZMYdDY5ayvCPrYkJszFMXA10b5mZm%2B4P4DXFLjh%2FB%2F8JJ7r%2F7wO7jP0OmzRj0nU7Ou42T38X6Dy%2F9jrHvyGRQaqNIBF0BpgI3B9%2FVYhxo%2FEA3GHyfi%2F5Y0moAHEvc%2FnboiiBv3Tjkz8fM4auASbA0jZeFnrPLFV2mrs9RMfAaA39DOCK4HL7y5wvCdam9JGS9zPav%2BA2mkxZk1GDb33I%2FaxhERPJAmktqjdyhpbZMNS3HuHN3w%2FVprk6UrkG%2BS%2BEIo9xpjXeyxz0xr0tqq%2FQOc03rmln5g0U%2Bi6ZfY3IwkiXk%2FHsu8agQjBvYv%2BlzinzEF6CGwmqH0QwvkhuAnIqE4hvJLmITTuzXPaHZMK0b0nlTqaMSPtpwYvzQekNzADJadL%2Bh6aU6PGRWUCy34oGU8eqWRoZeQpqORExTok4YiqFXWzJSjk46%2BdqlyBVpfauhk%2BmGc6ZmudsnoiAemN%2BKCvoqoCcgFgnbmdgTa%2BiPeotHyyO86ckZoIbE7rZRtIp5YVYlOgcC%2BAlq1Qcw%2BorkwwY6pgHQrbUsfHXsoutbtVLNPWaAqCP%2F5vIAzRSLM0Kj5s%2FUprcT9eXayUe2eFFTuJ1B0pqX%2FUUry38rfnVEFwzG0ydEoVTRWi0x%2FhaWDT9Tj91ci1Ph88c9BnFHdkniwGJ7EYtlSnKab973v8q70kJya7qXCKlaGgBEjCb4%2B3dqHrLFaQiOdgJa4VrM1ldA5Qyc7u%2Fo%2BVqvAjofPk7TLGXH2uHebascl3Ew&X-Amz-Signature=41cb9b8a185a5ea66d08d441d07ca6cf7d0061bee1912006a3b5e5d416e75bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
