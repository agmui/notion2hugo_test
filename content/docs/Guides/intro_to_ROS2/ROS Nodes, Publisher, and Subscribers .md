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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWROZ5L%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkthqwfslvwqiibrQlz6abN5BYbKWYCJOIc4Qoa97Z9AiEAwBFKuj%2FehJTrEMgXCRuOdcI3jGuA8i1ZUjMBcGbl%2F0wq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLbQvPbjfBcCtciftircA0UQeM6hagnVx19BoFDFhAxbJXLp%2BmjxkFeh%2FIMNEGTixVkDDLQXV0ICIGhjyaVBQfei1Ulr2KNKgmQaMQOOthWZm4JhOVPyQX3smv8l4NtH4XL8%2F8guZMZdxyN870zFTyS68%2B9KDFjdqVgE2%2Fryi7ge14DdEK5UEQ0bwZBqMyxbDlcjW9CNf4QP97NaY7DvfWsjyrcLCpL6r8hgzriMBNN05rta8YmOm9WzJ75o2r%2BDO0vXfT4Cm6RzgdJZEE%2Bdj7xjpwziZaZ2Ez3s2Qdm%2FDSBcF6SxzuZf5LjI%2BDmaf%2BpupEnogGPrLcMgS8WenMqVaGkcnZcf5CnIFaE4s72DO86aiuYsle6rDux484xsx5h97iLXN11ug9VWSHbWnYHzfgKyB4epg5Kenbi4mM%2FyYheu3SYq0I8MTmxN4bjswct7fDoZZOrSfyGcBeUO738KOjB8s58II44nrAKU1h2Lj3rhv1H2CZ3NBBKINjmxkul%2B8Hs5pl5jo8E9z8m8tXxHO774bha6eWx4E%2Fs0hohUhmyscwQ5IaymX97m8sV8OsEQkk6awj2kF6YA84S502br8mIT2ivSlPcE50KXFfTk7au1F3gxaKMmITCT0NTZEGEwOjfKQDrr1iiZsRfMKysgMAGOqUBBEyH3Q5xlcEVB4ZhM3%2BZ2nIZAa2xpcwsnpNxTf1t1XkW%2BBqlgIlNsH%2Fl%2F4WTgwoqco3RI0Cp6KrKbj%2FpPo6l5yI3P8OI01io9qJOacM7sxKJRbFncqYvsuLZv1iNnYmha1X87XKk9AGxYT8obECFeiWnd%2FmvrV1ABeIEW6401fqqhxwEVrR7tW1ytJfuCzR0oaf92haZ%2BPIargh9mnWAg528tVdo&X-Amz-Signature=eeead89da7886324bcd6fece5d7b466c351ee39bab53e06a4b8d51510bccfeac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWROZ5L%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkthqwfslvwqiibrQlz6abN5BYbKWYCJOIc4Qoa97Z9AiEAwBFKuj%2FehJTrEMgXCRuOdcI3jGuA8i1ZUjMBcGbl%2F0wq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLbQvPbjfBcCtciftircA0UQeM6hagnVx19BoFDFhAxbJXLp%2BmjxkFeh%2FIMNEGTixVkDDLQXV0ICIGhjyaVBQfei1Ulr2KNKgmQaMQOOthWZm4JhOVPyQX3smv8l4NtH4XL8%2F8guZMZdxyN870zFTyS68%2B9KDFjdqVgE2%2Fryi7ge14DdEK5UEQ0bwZBqMyxbDlcjW9CNf4QP97NaY7DvfWsjyrcLCpL6r8hgzriMBNN05rta8YmOm9WzJ75o2r%2BDO0vXfT4Cm6RzgdJZEE%2Bdj7xjpwziZaZ2Ez3s2Qdm%2FDSBcF6SxzuZf5LjI%2BDmaf%2BpupEnogGPrLcMgS8WenMqVaGkcnZcf5CnIFaE4s72DO86aiuYsle6rDux484xsx5h97iLXN11ug9VWSHbWnYHzfgKyB4epg5Kenbi4mM%2FyYheu3SYq0I8MTmxN4bjswct7fDoZZOrSfyGcBeUO738KOjB8s58II44nrAKU1h2Lj3rhv1H2CZ3NBBKINjmxkul%2B8Hs5pl5jo8E9z8m8tXxHO774bha6eWx4E%2Fs0hohUhmyscwQ5IaymX97m8sV8OsEQkk6awj2kF6YA84S502br8mIT2ivSlPcE50KXFfTk7au1F3gxaKMmITCT0NTZEGEwOjfKQDrr1iiZsRfMKysgMAGOqUBBEyH3Q5xlcEVB4ZhM3%2BZ2nIZAa2xpcwsnpNxTf1t1XkW%2BBqlgIlNsH%2Fl%2F4WTgwoqco3RI0Cp6KrKbj%2FpPo6l5yI3P8OI01io9qJOacM7sxKJRbFncqYvsuLZv1iNnYmha1X87XKk9AGxYT8obECFeiWnd%2FmvrV1ABeIEW6401fqqhxwEVrR7tW1ytJfuCzR0oaf92haZ%2BPIargh9mnWAg528tVdo&X-Amz-Signature=a8149354f27dd3408a34f5c0013f8ea9a71814c3e8779a166f4da1713bf46386&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWROZ5L%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkthqwfslvwqiibrQlz6abN5BYbKWYCJOIc4Qoa97Z9AiEAwBFKuj%2FehJTrEMgXCRuOdcI3jGuA8i1ZUjMBcGbl%2F0wq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLbQvPbjfBcCtciftircA0UQeM6hagnVx19BoFDFhAxbJXLp%2BmjxkFeh%2FIMNEGTixVkDDLQXV0ICIGhjyaVBQfei1Ulr2KNKgmQaMQOOthWZm4JhOVPyQX3smv8l4NtH4XL8%2F8guZMZdxyN870zFTyS68%2B9KDFjdqVgE2%2Fryi7ge14DdEK5UEQ0bwZBqMyxbDlcjW9CNf4QP97NaY7DvfWsjyrcLCpL6r8hgzriMBNN05rta8YmOm9WzJ75o2r%2BDO0vXfT4Cm6RzgdJZEE%2Bdj7xjpwziZaZ2Ez3s2Qdm%2FDSBcF6SxzuZf5LjI%2BDmaf%2BpupEnogGPrLcMgS8WenMqVaGkcnZcf5CnIFaE4s72DO86aiuYsle6rDux484xsx5h97iLXN11ug9VWSHbWnYHzfgKyB4epg5Kenbi4mM%2FyYheu3SYq0I8MTmxN4bjswct7fDoZZOrSfyGcBeUO738KOjB8s58II44nrAKU1h2Lj3rhv1H2CZ3NBBKINjmxkul%2B8Hs5pl5jo8E9z8m8tXxHO774bha6eWx4E%2Fs0hohUhmyscwQ5IaymX97m8sV8OsEQkk6awj2kF6YA84S502br8mIT2ivSlPcE50KXFfTk7au1F3gxaKMmITCT0NTZEGEwOjfKQDrr1iiZsRfMKysgMAGOqUBBEyH3Q5xlcEVB4ZhM3%2BZ2nIZAa2xpcwsnpNxTf1t1XkW%2BBqlgIlNsH%2Fl%2F4WTgwoqco3RI0Cp6KrKbj%2FpPo6l5yI3P8OI01io9qJOacM7sxKJRbFncqYvsuLZv1iNnYmha1X87XKk9AGxYT8obECFeiWnd%2FmvrV1ABeIEW6401fqqhxwEVrR7tW1ytJfuCzR0oaf92haZ%2BPIargh9mnWAg528tVdo&X-Amz-Signature=003a5e3dc96a2a07e86ca418309d3d36aaaf600da48ea7426e896c7f715eebfa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWROZ5L%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkthqwfslvwqiibrQlz6abN5BYbKWYCJOIc4Qoa97Z9AiEAwBFKuj%2FehJTrEMgXCRuOdcI3jGuA8i1ZUjMBcGbl%2F0wq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLbQvPbjfBcCtciftircA0UQeM6hagnVx19BoFDFhAxbJXLp%2BmjxkFeh%2FIMNEGTixVkDDLQXV0ICIGhjyaVBQfei1Ulr2KNKgmQaMQOOthWZm4JhOVPyQX3smv8l4NtH4XL8%2F8guZMZdxyN870zFTyS68%2B9KDFjdqVgE2%2Fryi7ge14DdEK5UEQ0bwZBqMyxbDlcjW9CNf4QP97NaY7DvfWsjyrcLCpL6r8hgzriMBNN05rta8YmOm9WzJ75o2r%2BDO0vXfT4Cm6RzgdJZEE%2Bdj7xjpwziZaZ2Ez3s2Qdm%2FDSBcF6SxzuZf5LjI%2BDmaf%2BpupEnogGPrLcMgS8WenMqVaGkcnZcf5CnIFaE4s72DO86aiuYsle6rDux484xsx5h97iLXN11ug9VWSHbWnYHzfgKyB4epg5Kenbi4mM%2FyYheu3SYq0I8MTmxN4bjswct7fDoZZOrSfyGcBeUO738KOjB8s58II44nrAKU1h2Lj3rhv1H2CZ3NBBKINjmxkul%2B8Hs5pl5jo8E9z8m8tXxHO774bha6eWx4E%2Fs0hohUhmyscwQ5IaymX97m8sV8OsEQkk6awj2kF6YA84S502br8mIT2ivSlPcE50KXFfTk7au1F3gxaKMmITCT0NTZEGEwOjfKQDrr1iiZsRfMKysgMAGOqUBBEyH3Q5xlcEVB4ZhM3%2BZ2nIZAa2xpcwsnpNxTf1t1XkW%2BBqlgIlNsH%2Fl%2F4WTgwoqco3RI0Cp6KrKbj%2FpPo6l5yI3P8OI01io9qJOacM7sxKJRbFncqYvsuLZv1iNnYmha1X87XKk9AGxYT8obECFeiWnd%2FmvrV1ABeIEW6401fqqhxwEVrR7tW1ytJfuCzR0oaf92haZ%2BPIargh9mnWAg528tVdo&X-Amz-Signature=7ab69f9408d0329a2e69a4419a18cfcfedd992ac5929253b5aeb2da2990a81d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWROZ5L%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkthqwfslvwqiibrQlz6abN5BYbKWYCJOIc4Qoa97Z9AiEAwBFKuj%2FehJTrEMgXCRuOdcI3jGuA8i1ZUjMBcGbl%2F0wq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLbQvPbjfBcCtciftircA0UQeM6hagnVx19BoFDFhAxbJXLp%2BmjxkFeh%2FIMNEGTixVkDDLQXV0ICIGhjyaVBQfei1Ulr2KNKgmQaMQOOthWZm4JhOVPyQX3smv8l4NtH4XL8%2F8guZMZdxyN870zFTyS68%2B9KDFjdqVgE2%2Fryi7ge14DdEK5UEQ0bwZBqMyxbDlcjW9CNf4QP97NaY7DvfWsjyrcLCpL6r8hgzriMBNN05rta8YmOm9WzJ75o2r%2BDO0vXfT4Cm6RzgdJZEE%2Bdj7xjpwziZaZ2Ez3s2Qdm%2FDSBcF6SxzuZf5LjI%2BDmaf%2BpupEnogGPrLcMgS8WenMqVaGkcnZcf5CnIFaE4s72DO86aiuYsle6rDux484xsx5h97iLXN11ug9VWSHbWnYHzfgKyB4epg5Kenbi4mM%2FyYheu3SYq0I8MTmxN4bjswct7fDoZZOrSfyGcBeUO738KOjB8s58II44nrAKU1h2Lj3rhv1H2CZ3NBBKINjmxkul%2B8Hs5pl5jo8E9z8m8tXxHO774bha6eWx4E%2Fs0hohUhmyscwQ5IaymX97m8sV8OsEQkk6awj2kF6YA84S502br8mIT2ivSlPcE50KXFfTk7au1F3gxaKMmITCT0NTZEGEwOjfKQDrr1iiZsRfMKysgMAGOqUBBEyH3Q5xlcEVB4ZhM3%2BZ2nIZAa2xpcwsnpNxTf1t1XkW%2BBqlgIlNsH%2Fl%2F4WTgwoqco3RI0Cp6KrKbj%2FpPo6l5yI3P8OI01io9qJOacM7sxKJRbFncqYvsuLZv1iNnYmha1X87XKk9AGxYT8obECFeiWnd%2FmvrV1ABeIEW6401fqqhxwEVrR7tW1ytJfuCzR0oaf92haZ%2BPIargh9mnWAg528tVdo&X-Amz-Signature=b6406d3dfdc0b6205849a8499ebce842c92d7bd2a56c9a2d4f0751911d95d9db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWROZ5L%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkthqwfslvwqiibrQlz6abN5BYbKWYCJOIc4Qoa97Z9AiEAwBFKuj%2FehJTrEMgXCRuOdcI3jGuA8i1ZUjMBcGbl%2F0wq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLbQvPbjfBcCtciftircA0UQeM6hagnVx19BoFDFhAxbJXLp%2BmjxkFeh%2FIMNEGTixVkDDLQXV0ICIGhjyaVBQfei1Ulr2KNKgmQaMQOOthWZm4JhOVPyQX3smv8l4NtH4XL8%2F8guZMZdxyN870zFTyS68%2B9KDFjdqVgE2%2Fryi7ge14DdEK5UEQ0bwZBqMyxbDlcjW9CNf4QP97NaY7DvfWsjyrcLCpL6r8hgzriMBNN05rta8YmOm9WzJ75o2r%2BDO0vXfT4Cm6RzgdJZEE%2Bdj7xjpwziZaZ2Ez3s2Qdm%2FDSBcF6SxzuZf5LjI%2BDmaf%2BpupEnogGPrLcMgS8WenMqVaGkcnZcf5CnIFaE4s72DO86aiuYsle6rDux484xsx5h97iLXN11ug9VWSHbWnYHzfgKyB4epg5Kenbi4mM%2FyYheu3SYq0I8MTmxN4bjswct7fDoZZOrSfyGcBeUO738KOjB8s58II44nrAKU1h2Lj3rhv1H2CZ3NBBKINjmxkul%2B8Hs5pl5jo8E9z8m8tXxHO774bha6eWx4E%2Fs0hohUhmyscwQ5IaymX97m8sV8OsEQkk6awj2kF6YA84S502br8mIT2ivSlPcE50KXFfTk7au1F3gxaKMmITCT0NTZEGEwOjfKQDrr1iiZsRfMKysgMAGOqUBBEyH3Q5xlcEVB4ZhM3%2BZ2nIZAa2xpcwsnpNxTf1t1XkW%2BBqlgIlNsH%2Fl%2F4WTgwoqco3RI0Cp6KrKbj%2FpPo6l5yI3P8OI01io9qJOacM7sxKJRbFncqYvsuLZv1iNnYmha1X87XKk9AGxYT8obECFeiWnd%2FmvrV1ABeIEW6401fqqhxwEVrR7tW1ytJfuCzR0oaf92haZ%2BPIargh9mnWAg528tVdo&X-Amz-Signature=7744c6fe5cb334fa53eb0980f04911e45eef899feea17c55030820f74aea0adc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWROZ5L%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkthqwfslvwqiibrQlz6abN5BYbKWYCJOIc4Qoa97Z9AiEAwBFKuj%2FehJTrEMgXCRuOdcI3jGuA8i1ZUjMBcGbl%2F0wq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLbQvPbjfBcCtciftircA0UQeM6hagnVx19BoFDFhAxbJXLp%2BmjxkFeh%2FIMNEGTixVkDDLQXV0ICIGhjyaVBQfei1Ulr2KNKgmQaMQOOthWZm4JhOVPyQX3smv8l4NtH4XL8%2F8guZMZdxyN870zFTyS68%2B9KDFjdqVgE2%2Fryi7ge14DdEK5UEQ0bwZBqMyxbDlcjW9CNf4QP97NaY7DvfWsjyrcLCpL6r8hgzriMBNN05rta8YmOm9WzJ75o2r%2BDO0vXfT4Cm6RzgdJZEE%2Bdj7xjpwziZaZ2Ez3s2Qdm%2FDSBcF6SxzuZf5LjI%2BDmaf%2BpupEnogGPrLcMgS8WenMqVaGkcnZcf5CnIFaE4s72DO86aiuYsle6rDux484xsx5h97iLXN11ug9VWSHbWnYHzfgKyB4epg5Kenbi4mM%2FyYheu3SYq0I8MTmxN4bjswct7fDoZZOrSfyGcBeUO738KOjB8s58II44nrAKU1h2Lj3rhv1H2CZ3NBBKINjmxkul%2B8Hs5pl5jo8E9z8m8tXxHO774bha6eWx4E%2Fs0hohUhmyscwQ5IaymX97m8sV8OsEQkk6awj2kF6YA84S502br8mIT2ivSlPcE50KXFfTk7au1F3gxaKMmITCT0NTZEGEwOjfKQDrr1iiZsRfMKysgMAGOqUBBEyH3Q5xlcEVB4ZhM3%2BZ2nIZAa2xpcwsnpNxTf1t1XkW%2BBqlgIlNsH%2Fl%2F4WTgwoqco3RI0Cp6KrKbj%2FpPo6l5yI3P8OI01io9qJOacM7sxKJRbFncqYvsuLZv1iNnYmha1X87XKk9AGxYT8obECFeiWnd%2FmvrV1ABeIEW6401fqqhxwEVrR7tW1ytJfuCzR0oaf92haZ%2BPIargh9mnWAg528tVdo&X-Amz-Signature=ec9f6f20bd69aba1a4b8bec0ca212f3d5f2b0417fd195f6012240c4506d0516f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKWROZ5L%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkthqwfslvwqiibrQlz6abN5BYbKWYCJOIc4Qoa97Z9AiEAwBFKuj%2FehJTrEMgXCRuOdcI3jGuA8i1ZUjMBcGbl%2F0wq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDLbQvPbjfBcCtciftircA0UQeM6hagnVx19BoFDFhAxbJXLp%2BmjxkFeh%2FIMNEGTixVkDDLQXV0ICIGhjyaVBQfei1Ulr2KNKgmQaMQOOthWZm4JhOVPyQX3smv8l4NtH4XL8%2F8guZMZdxyN870zFTyS68%2B9KDFjdqVgE2%2Fryi7ge14DdEK5UEQ0bwZBqMyxbDlcjW9CNf4QP97NaY7DvfWsjyrcLCpL6r8hgzriMBNN05rta8YmOm9WzJ75o2r%2BDO0vXfT4Cm6RzgdJZEE%2Bdj7xjpwziZaZ2Ez3s2Qdm%2FDSBcF6SxzuZf5LjI%2BDmaf%2BpupEnogGPrLcMgS8WenMqVaGkcnZcf5CnIFaE4s72DO86aiuYsle6rDux484xsx5h97iLXN11ug9VWSHbWnYHzfgKyB4epg5Kenbi4mM%2FyYheu3SYq0I8MTmxN4bjswct7fDoZZOrSfyGcBeUO738KOjB8s58II44nrAKU1h2Lj3rhv1H2CZ3NBBKINjmxkul%2B8Hs5pl5jo8E9z8m8tXxHO774bha6eWx4E%2Fs0hohUhmyscwQ5IaymX97m8sV8OsEQkk6awj2kF6YA84S502br8mIT2ivSlPcE50KXFfTk7au1F3gxaKMmITCT0NTZEGEwOjfKQDrr1iiZsRfMKysgMAGOqUBBEyH3Q5xlcEVB4ZhM3%2BZ2nIZAa2xpcwsnpNxTf1t1XkW%2BBqlgIlNsH%2Fl%2F4WTgwoqco3RI0Cp6KrKbj%2FpPo6l5yI3P8OI01io9qJOacM7sxKJRbFncqYvsuLZv1iNnYmha1X87XKk9AGxYT8obECFeiWnd%2FmvrV1ABeIEW6401fqqhxwEVrR7tW1ytJfuCzR0oaf92haZ%2BPIargh9mnWAg528tVdo&X-Amz-Signature=c81a5b21b7d01d9399b8ed902b466edd5377b46eb69a25e64e97c0e260284fb4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
