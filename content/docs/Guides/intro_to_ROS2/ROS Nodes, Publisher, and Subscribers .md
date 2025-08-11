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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCGWCNO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe%2F4uY47sDy54VH2hy2eWaPQ4qEyPYcq62CHlIHMrOSAiEAzgg9K4HpBCl8tjCvRSkUTpgwBGkYHYmI9aXT6c8est4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXqykJ5E0w%2BruvU7yrcAz1WIkLBvVG2zFB7CaMUwHmlDIX%2FGaQzkWBeBk0AETyY3LC7vDtgYO7cHEOsjokNjfk6vyXQ29z5p3N%2BLFJz9%2B1NlDZ7Ma7LdRmQez%2FIfmA4Sx4sXyNqWCePeTXlJ00riE%2BadoKvTxazzT%2Btu2KQgNbfD2LZhJ7T3%2F9wuZ5wZCJs3WJdJPf8tS%2FdysNVEtq5GZO2TfkrxOzzXZmG7LRlPNw8wKcxmPajCaUOWdiMQuqUwHH2FrD5Asiol2MhzMtB4aqKRoqF9MkdFimBSuwG2vySLcXQTv3k1jQPIbUcNp7jm4ZKXP08efjS%2BqDA4QF4MkWQ%2FAyjL2k6TtJkNGOovgNKTAuKvk1Z7RWVreVmAy7bKd3DC7bHzxB6cWupag3sg3phJENjW8G81U18T55sdUID3n0Nir8W4OuT1OIqXhg6THjuKDNuSBIrS4sr2khqPCLYdoXS5z7J8kjwYjxGzjUedo6MDVc%2FNr0evVLj5IhQauFj3CMesrBy76qEPkTmrX4F7M1uj2NZLEGNffKnUdSpk8%2BJpf3m3f6TZK%2BJGwY2GOS6PqD9pZDuv7V1ftNkL3H0cSZEW7CcwKUrNs5oEv6ZhycsmnLTTCeVKn5TuB0zHd3%2B7NMXSUTjwnJ5MNPf5MQGOqUBV5E%2FBQL6MbBoR9Bt0CkigDLOpfI5nqbxDNG3438yZieZwFJyXhtz6B3fV6OHi24QEORCvyh4hbvcKXHi%2Bz03RauIE3%2Fp7HgPbCk5z%2BF7vKySnrOAecU2LSBT3qXLE%2FDz7gVspYLdtIkMfFZlEpw01feXep6dIzijvJ%2FuW%2BkOAGyrdUI9i7Y9t7xvf5WPMmdXQabGE3uupoAZXo5sa3%2FUGB9FvK94&X-Amz-Signature=cb90bca02e86ce70d8e37bdb0f7c891671203de6fd946798bc0b830fc3db233c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCGWCNO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe%2F4uY47sDy54VH2hy2eWaPQ4qEyPYcq62CHlIHMrOSAiEAzgg9K4HpBCl8tjCvRSkUTpgwBGkYHYmI9aXT6c8est4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXqykJ5E0w%2BruvU7yrcAz1WIkLBvVG2zFB7CaMUwHmlDIX%2FGaQzkWBeBk0AETyY3LC7vDtgYO7cHEOsjokNjfk6vyXQ29z5p3N%2BLFJz9%2B1NlDZ7Ma7LdRmQez%2FIfmA4Sx4sXyNqWCePeTXlJ00riE%2BadoKvTxazzT%2Btu2KQgNbfD2LZhJ7T3%2F9wuZ5wZCJs3WJdJPf8tS%2FdysNVEtq5GZO2TfkrxOzzXZmG7LRlPNw8wKcxmPajCaUOWdiMQuqUwHH2FrD5Asiol2MhzMtB4aqKRoqF9MkdFimBSuwG2vySLcXQTv3k1jQPIbUcNp7jm4ZKXP08efjS%2BqDA4QF4MkWQ%2FAyjL2k6TtJkNGOovgNKTAuKvk1Z7RWVreVmAy7bKd3DC7bHzxB6cWupag3sg3phJENjW8G81U18T55sdUID3n0Nir8W4OuT1OIqXhg6THjuKDNuSBIrS4sr2khqPCLYdoXS5z7J8kjwYjxGzjUedo6MDVc%2FNr0evVLj5IhQauFj3CMesrBy76qEPkTmrX4F7M1uj2NZLEGNffKnUdSpk8%2BJpf3m3f6TZK%2BJGwY2GOS6PqD9pZDuv7V1ftNkL3H0cSZEW7CcwKUrNs5oEv6ZhycsmnLTTCeVKn5TuB0zHd3%2B7NMXSUTjwnJ5MNPf5MQGOqUBV5E%2FBQL6MbBoR9Bt0CkigDLOpfI5nqbxDNG3438yZieZwFJyXhtz6B3fV6OHi24QEORCvyh4hbvcKXHi%2Bz03RauIE3%2Fp7HgPbCk5z%2BF7vKySnrOAecU2LSBT3qXLE%2FDz7gVspYLdtIkMfFZlEpw01feXep6dIzijvJ%2FuW%2BkOAGyrdUI9i7Y9t7xvf5WPMmdXQabGE3uupoAZXo5sa3%2FUGB9FvK94&X-Amz-Signature=1a15dd2b845a8c8d4a1cde0b0bf6eccd3f1c01c1174279b55041d51cd41cc723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCGWCNO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe%2F4uY47sDy54VH2hy2eWaPQ4qEyPYcq62CHlIHMrOSAiEAzgg9K4HpBCl8tjCvRSkUTpgwBGkYHYmI9aXT6c8est4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXqykJ5E0w%2BruvU7yrcAz1WIkLBvVG2zFB7CaMUwHmlDIX%2FGaQzkWBeBk0AETyY3LC7vDtgYO7cHEOsjokNjfk6vyXQ29z5p3N%2BLFJz9%2B1NlDZ7Ma7LdRmQez%2FIfmA4Sx4sXyNqWCePeTXlJ00riE%2BadoKvTxazzT%2Btu2KQgNbfD2LZhJ7T3%2F9wuZ5wZCJs3WJdJPf8tS%2FdysNVEtq5GZO2TfkrxOzzXZmG7LRlPNw8wKcxmPajCaUOWdiMQuqUwHH2FrD5Asiol2MhzMtB4aqKRoqF9MkdFimBSuwG2vySLcXQTv3k1jQPIbUcNp7jm4ZKXP08efjS%2BqDA4QF4MkWQ%2FAyjL2k6TtJkNGOovgNKTAuKvk1Z7RWVreVmAy7bKd3DC7bHzxB6cWupag3sg3phJENjW8G81U18T55sdUID3n0Nir8W4OuT1OIqXhg6THjuKDNuSBIrS4sr2khqPCLYdoXS5z7J8kjwYjxGzjUedo6MDVc%2FNr0evVLj5IhQauFj3CMesrBy76qEPkTmrX4F7M1uj2NZLEGNffKnUdSpk8%2BJpf3m3f6TZK%2BJGwY2GOS6PqD9pZDuv7V1ftNkL3H0cSZEW7CcwKUrNs5oEv6ZhycsmnLTTCeVKn5TuB0zHd3%2B7NMXSUTjwnJ5MNPf5MQGOqUBV5E%2FBQL6MbBoR9Bt0CkigDLOpfI5nqbxDNG3438yZieZwFJyXhtz6B3fV6OHi24QEORCvyh4hbvcKXHi%2Bz03RauIE3%2Fp7HgPbCk5z%2BF7vKySnrOAecU2LSBT3qXLE%2FDz7gVspYLdtIkMfFZlEpw01feXep6dIzijvJ%2FuW%2BkOAGyrdUI9i7Y9t7xvf5WPMmdXQabGE3uupoAZXo5sa3%2FUGB9FvK94&X-Amz-Signature=3f9d093c64db94d2f3217e1970bedacd073244892280012e77c5cc26f4ef6bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCGWCNO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe%2F4uY47sDy54VH2hy2eWaPQ4qEyPYcq62CHlIHMrOSAiEAzgg9K4HpBCl8tjCvRSkUTpgwBGkYHYmI9aXT6c8est4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXqykJ5E0w%2BruvU7yrcAz1WIkLBvVG2zFB7CaMUwHmlDIX%2FGaQzkWBeBk0AETyY3LC7vDtgYO7cHEOsjokNjfk6vyXQ29z5p3N%2BLFJz9%2B1NlDZ7Ma7LdRmQez%2FIfmA4Sx4sXyNqWCePeTXlJ00riE%2BadoKvTxazzT%2Btu2KQgNbfD2LZhJ7T3%2F9wuZ5wZCJs3WJdJPf8tS%2FdysNVEtq5GZO2TfkrxOzzXZmG7LRlPNw8wKcxmPajCaUOWdiMQuqUwHH2FrD5Asiol2MhzMtB4aqKRoqF9MkdFimBSuwG2vySLcXQTv3k1jQPIbUcNp7jm4ZKXP08efjS%2BqDA4QF4MkWQ%2FAyjL2k6TtJkNGOovgNKTAuKvk1Z7RWVreVmAy7bKd3DC7bHzxB6cWupag3sg3phJENjW8G81U18T55sdUID3n0Nir8W4OuT1OIqXhg6THjuKDNuSBIrS4sr2khqPCLYdoXS5z7J8kjwYjxGzjUedo6MDVc%2FNr0evVLj5IhQauFj3CMesrBy76qEPkTmrX4F7M1uj2NZLEGNffKnUdSpk8%2BJpf3m3f6TZK%2BJGwY2GOS6PqD9pZDuv7V1ftNkL3H0cSZEW7CcwKUrNs5oEv6ZhycsmnLTTCeVKn5TuB0zHd3%2B7NMXSUTjwnJ5MNPf5MQGOqUBV5E%2FBQL6MbBoR9Bt0CkigDLOpfI5nqbxDNG3438yZieZwFJyXhtz6B3fV6OHi24QEORCvyh4hbvcKXHi%2Bz03RauIE3%2Fp7HgPbCk5z%2BF7vKySnrOAecU2LSBT3qXLE%2FDz7gVspYLdtIkMfFZlEpw01feXep6dIzijvJ%2FuW%2BkOAGyrdUI9i7Y9t7xvf5WPMmdXQabGE3uupoAZXo5sa3%2FUGB9FvK94&X-Amz-Signature=ef947108d9f5d8342c3d744caa4c1090cfe712eef79a81bd20ddb7367a4babc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCGWCNO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe%2F4uY47sDy54VH2hy2eWaPQ4qEyPYcq62CHlIHMrOSAiEAzgg9K4HpBCl8tjCvRSkUTpgwBGkYHYmI9aXT6c8est4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXqykJ5E0w%2BruvU7yrcAz1WIkLBvVG2zFB7CaMUwHmlDIX%2FGaQzkWBeBk0AETyY3LC7vDtgYO7cHEOsjokNjfk6vyXQ29z5p3N%2BLFJz9%2B1NlDZ7Ma7LdRmQez%2FIfmA4Sx4sXyNqWCePeTXlJ00riE%2BadoKvTxazzT%2Btu2KQgNbfD2LZhJ7T3%2F9wuZ5wZCJs3WJdJPf8tS%2FdysNVEtq5GZO2TfkrxOzzXZmG7LRlPNw8wKcxmPajCaUOWdiMQuqUwHH2FrD5Asiol2MhzMtB4aqKRoqF9MkdFimBSuwG2vySLcXQTv3k1jQPIbUcNp7jm4ZKXP08efjS%2BqDA4QF4MkWQ%2FAyjL2k6TtJkNGOovgNKTAuKvk1Z7RWVreVmAy7bKd3DC7bHzxB6cWupag3sg3phJENjW8G81U18T55sdUID3n0Nir8W4OuT1OIqXhg6THjuKDNuSBIrS4sr2khqPCLYdoXS5z7J8kjwYjxGzjUedo6MDVc%2FNr0evVLj5IhQauFj3CMesrBy76qEPkTmrX4F7M1uj2NZLEGNffKnUdSpk8%2BJpf3m3f6TZK%2BJGwY2GOS6PqD9pZDuv7V1ftNkL3H0cSZEW7CcwKUrNs5oEv6ZhycsmnLTTCeVKn5TuB0zHd3%2B7NMXSUTjwnJ5MNPf5MQGOqUBV5E%2FBQL6MbBoR9Bt0CkigDLOpfI5nqbxDNG3438yZieZwFJyXhtz6B3fV6OHi24QEORCvyh4hbvcKXHi%2Bz03RauIE3%2Fp7HgPbCk5z%2BF7vKySnrOAecU2LSBT3qXLE%2FDz7gVspYLdtIkMfFZlEpw01feXep6dIzijvJ%2FuW%2BkOAGyrdUI9i7Y9t7xvf5WPMmdXQabGE3uupoAZXo5sa3%2FUGB9FvK94&X-Amz-Signature=7af396908a9644539bf8e92991c0ea0098e28eea6ad14eb59479c9c6c9e3c2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCGWCNO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe%2F4uY47sDy54VH2hy2eWaPQ4qEyPYcq62CHlIHMrOSAiEAzgg9K4HpBCl8tjCvRSkUTpgwBGkYHYmI9aXT6c8est4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXqykJ5E0w%2BruvU7yrcAz1WIkLBvVG2zFB7CaMUwHmlDIX%2FGaQzkWBeBk0AETyY3LC7vDtgYO7cHEOsjokNjfk6vyXQ29z5p3N%2BLFJz9%2B1NlDZ7Ma7LdRmQez%2FIfmA4Sx4sXyNqWCePeTXlJ00riE%2BadoKvTxazzT%2Btu2KQgNbfD2LZhJ7T3%2F9wuZ5wZCJs3WJdJPf8tS%2FdysNVEtq5GZO2TfkrxOzzXZmG7LRlPNw8wKcxmPajCaUOWdiMQuqUwHH2FrD5Asiol2MhzMtB4aqKRoqF9MkdFimBSuwG2vySLcXQTv3k1jQPIbUcNp7jm4ZKXP08efjS%2BqDA4QF4MkWQ%2FAyjL2k6TtJkNGOovgNKTAuKvk1Z7RWVreVmAy7bKd3DC7bHzxB6cWupag3sg3phJENjW8G81U18T55sdUID3n0Nir8W4OuT1OIqXhg6THjuKDNuSBIrS4sr2khqPCLYdoXS5z7J8kjwYjxGzjUedo6MDVc%2FNr0evVLj5IhQauFj3CMesrBy76qEPkTmrX4F7M1uj2NZLEGNffKnUdSpk8%2BJpf3m3f6TZK%2BJGwY2GOS6PqD9pZDuv7V1ftNkL3H0cSZEW7CcwKUrNs5oEv6ZhycsmnLTTCeVKn5TuB0zHd3%2B7NMXSUTjwnJ5MNPf5MQGOqUBV5E%2FBQL6MbBoR9Bt0CkigDLOpfI5nqbxDNG3438yZieZwFJyXhtz6B3fV6OHi24QEORCvyh4hbvcKXHi%2Bz03RauIE3%2Fp7HgPbCk5z%2BF7vKySnrOAecU2LSBT3qXLE%2FDz7gVspYLdtIkMfFZlEpw01feXep6dIzijvJ%2FuW%2BkOAGyrdUI9i7Y9t7xvf5WPMmdXQabGE3uupoAZXo5sa3%2FUGB9FvK94&X-Amz-Signature=b3fb5e4bc0de2077cf8f8f67413c230369213b3569207a89c99f5c0a720c227d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCGWCNO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe%2F4uY47sDy54VH2hy2eWaPQ4qEyPYcq62CHlIHMrOSAiEAzgg9K4HpBCl8tjCvRSkUTpgwBGkYHYmI9aXT6c8est4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXqykJ5E0w%2BruvU7yrcAz1WIkLBvVG2zFB7CaMUwHmlDIX%2FGaQzkWBeBk0AETyY3LC7vDtgYO7cHEOsjokNjfk6vyXQ29z5p3N%2BLFJz9%2B1NlDZ7Ma7LdRmQez%2FIfmA4Sx4sXyNqWCePeTXlJ00riE%2BadoKvTxazzT%2Btu2KQgNbfD2LZhJ7T3%2F9wuZ5wZCJs3WJdJPf8tS%2FdysNVEtq5GZO2TfkrxOzzXZmG7LRlPNw8wKcxmPajCaUOWdiMQuqUwHH2FrD5Asiol2MhzMtB4aqKRoqF9MkdFimBSuwG2vySLcXQTv3k1jQPIbUcNp7jm4ZKXP08efjS%2BqDA4QF4MkWQ%2FAyjL2k6TtJkNGOovgNKTAuKvk1Z7RWVreVmAy7bKd3DC7bHzxB6cWupag3sg3phJENjW8G81U18T55sdUID3n0Nir8W4OuT1OIqXhg6THjuKDNuSBIrS4sr2khqPCLYdoXS5z7J8kjwYjxGzjUedo6MDVc%2FNr0evVLj5IhQauFj3CMesrBy76qEPkTmrX4F7M1uj2NZLEGNffKnUdSpk8%2BJpf3m3f6TZK%2BJGwY2GOS6PqD9pZDuv7V1ftNkL3H0cSZEW7CcwKUrNs5oEv6ZhycsmnLTTCeVKn5TuB0zHd3%2B7NMXSUTjwnJ5MNPf5MQGOqUBV5E%2FBQL6MbBoR9Bt0CkigDLOpfI5nqbxDNG3438yZieZwFJyXhtz6B3fV6OHi24QEORCvyh4hbvcKXHi%2Bz03RauIE3%2Fp7HgPbCk5z%2BF7vKySnrOAecU2LSBT3qXLE%2FDz7gVspYLdtIkMfFZlEpw01feXep6dIzijvJ%2FuW%2BkOAGyrdUI9i7Y9t7xvf5WPMmdXQabGE3uupoAZXo5sa3%2FUGB9FvK94&X-Amz-Signature=04da0c81fa1839e71793f246bf93f6356ea5cc00cc4b852e11a1db7bee8cffe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZCGWCNO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEe%2F4uY47sDy54VH2hy2eWaPQ4qEyPYcq62CHlIHMrOSAiEAzgg9K4HpBCl8tjCvRSkUTpgwBGkYHYmI9aXT6c8est4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXqykJ5E0w%2BruvU7yrcAz1WIkLBvVG2zFB7CaMUwHmlDIX%2FGaQzkWBeBk0AETyY3LC7vDtgYO7cHEOsjokNjfk6vyXQ29z5p3N%2BLFJz9%2B1NlDZ7Ma7LdRmQez%2FIfmA4Sx4sXyNqWCePeTXlJ00riE%2BadoKvTxazzT%2Btu2KQgNbfD2LZhJ7T3%2F9wuZ5wZCJs3WJdJPf8tS%2FdysNVEtq5GZO2TfkrxOzzXZmG7LRlPNw8wKcxmPajCaUOWdiMQuqUwHH2FrD5Asiol2MhzMtB4aqKRoqF9MkdFimBSuwG2vySLcXQTv3k1jQPIbUcNp7jm4ZKXP08efjS%2BqDA4QF4MkWQ%2FAyjL2k6TtJkNGOovgNKTAuKvk1Z7RWVreVmAy7bKd3DC7bHzxB6cWupag3sg3phJENjW8G81U18T55sdUID3n0Nir8W4OuT1OIqXhg6THjuKDNuSBIrS4sr2khqPCLYdoXS5z7J8kjwYjxGzjUedo6MDVc%2FNr0evVLj5IhQauFj3CMesrBy76qEPkTmrX4F7M1uj2NZLEGNffKnUdSpk8%2BJpf3m3f6TZK%2BJGwY2GOS6PqD9pZDuv7V1ftNkL3H0cSZEW7CcwKUrNs5oEv6ZhycsmnLTTCeVKn5TuB0zHd3%2B7NMXSUTjwnJ5MNPf5MQGOqUBV5E%2FBQL6MbBoR9Bt0CkigDLOpfI5nqbxDNG3438yZieZwFJyXhtz6B3fV6OHi24QEORCvyh4hbvcKXHi%2Bz03RauIE3%2Fp7HgPbCk5z%2BF7vKySnrOAecU2LSBT3qXLE%2FDz7gVspYLdtIkMfFZlEpw01feXep6dIzijvJ%2FuW%2BkOAGyrdUI9i7Y9t7xvf5WPMmdXQabGE3uupoAZXo5sa3%2FUGB9FvK94&X-Amz-Signature=c8d684b3f2bffcb073ffab0d171670dde578329c326377638961f5d7cb384d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
