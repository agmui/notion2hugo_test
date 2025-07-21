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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666JB7TD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzXExQKljvA7%2F4OU88nqi8HlCgJiXKeGUCiDjUH82swIhAO9fPS7HVc3vFZQxR%2FzLrUyznZ5aCh2cM2rxqniNmrGqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz14zIdlZoI9zG6nCMq3AMzVMN2nRKFFE8PxfY4W%2FIWAM3qmkFjJhevVn7U%2F73BCTL5DfUfO6RT9hMMdWTe7c1f9kM9r12bi7cOG9aLIKfYZOoX%2B93mGvf8s14%2B75MM7OfFkjM%2FSsQzsSQHmVbsP3LS6rZeJJfH0NW0VVKmuRak6DQ3wi2bPdrdobnvDk4gPJrJ1kNy%2BZJATyWm35Bo8zay3Q0SewcRuUKg4QZ7dXD4ytduNxKhgUzDP9UYws1j0A5InNAx4VI1OF9%2BFsOVGI0TJaClDUdWPP%2Bl%2F2rt5Z0cmGGmrwSHb%2BAKlNwfAH2zoGUCZ7RaJyYxqIomHNc2oyUY6LBfBDUMa27feL9%2FFA85z0RJULxL1ouiq82s7ymlxwREZ0ClNf8VN%2F1c9k7TYflnrsg%2Bek7YeIqs5VSc7ZEv1Qzv35gAmvD2sZdFkON78uYhFnAb3NDXisNsp2fva%2F7NNYJ5%2B32VYfORNypSuryTO4aXt%2BuTudrXKhYwqa4sIg2lYJ%2BM3qhH39eqi8vg3rlN%2Fn6RzIpq0lY3unfEoxH1HBosKvwMmKgQWwKmdjq6YC6M8TOmSv0tEWd74WKhNNoblLhW1a9rI5%2FfveOYuDshustCUBnAiC01L3YcIcICi2BtbUwAVa%2Fi2u9dgDDQ1vrDBjqkAVG0lgv1UohMWdYmK9Y%2FY8vAC4v4LwcUKjgsPUlo6vdnd9EY0GJEF7zm31hUJ1Fs3gWdyil%2BXj6%2FTzJsTp7MNQHeJBk3oA%2BZViTzfStv44kmrH2sP9s1FcnWCkqqgQ14kwQB%2BI9omP2G85QZ3VVFmiWRrF4zBnVZF9VfBU3eB8GR2Tpxx4ZkBt%2FznNOKQWVyoeueFUU9%2BtivsguxgrpGJryBmmym&X-Amz-Signature=fba369fd6bd53c5a36971bd7ee545dbb6279e0099bb9ae7e572b8e71770b3f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666JB7TD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzXExQKljvA7%2F4OU88nqi8HlCgJiXKeGUCiDjUH82swIhAO9fPS7HVc3vFZQxR%2FzLrUyznZ5aCh2cM2rxqniNmrGqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz14zIdlZoI9zG6nCMq3AMzVMN2nRKFFE8PxfY4W%2FIWAM3qmkFjJhevVn7U%2F73BCTL5DfUfO6RT9hMMdWTe7c1f9kM9r12bi7cOG9aLIKfYZOoX%2B93mGvf8s14%2B75MM7OfFkjM%2FSsQzsSQHmVbsP3LS6rZeJJfH0NW0VVKmuRak6DQ3wi2bPdrdobnvDk4gPJrJ1kNy%2BZJATyWm35Bo8zay3Q0SewcRuUKg4QZ7dXD4ytduNxKhgUzDP9UYws1j0A5InNAx4VI1OF9%2BFsOVGI0TJaClDUdWPP%2Bl%2F2rt5Z0cmGGmrwSHb%2BAKlNwfAH2zoGUCZ7RaJyYxqIomHNc2oyUY6LBfBDUMa27feL9%2FFA85z0RJULxL1ouiq82s7ymlxwREZ0ClNf8VN%2F1c9k7TYflnrsg%2Bek7YeIqs5VSc7ZEv1Qzv35gAmvD2sZdFkON78uYhFnAb3NDXisNsp2fva%2F7NNYJ5%2B32VYfORNypSuryTO4aXt%2BuTudrXKhYwqa4sIg2lYJ%2BM3qhH39eqi8vg3rlN%2Fn6RzIpq0lY3unfEoxH1HBosKvwMmKgQWwKmdjq6YC6M8TOmSv0tEWd74WKhNNoblLhW1a9rI5%2FfveOYuDshustCUBnAiC01L3YcIcICi2BtbUwAVa%2Fi2u9dgDDQ1vrDBjqkAVG0lgv1UohMWdYmK9Y%2FY8vAC4v4LwcUKjgsPUlo6vdnd9EY0GJEF7zm31hUJ1Fs3gWdyil%2BXj6%2FTzJsTp7MNQHeJBk3oA%2BZViTzfStv44kmrH2sP9s1FcnWCkqqgQ14kwQB%2BI9omP2G85QZ3VVFmiWRrF4zBnVZF9VfBU3eB8GR2Tpxx4ZkBt%2FznNOKQWVyoeueFUU9%2BtivsguxgrpGJryBmmym&X-Amz-Signature=758d437e878777fcc43f27d15cf1365db7092c0c91816386337debbd3412838a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666JB7TD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzXExQKljvA7%2F4OU88nqi8HlCgJiXKeGUCiDjUH82swIhAO9fPS7HVc3vFZQxR%2FzLrUyznZ5aCh2cM2rxqniNmrGqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz14zIdlZoI9zG6nCMq3AMzVMN2nRKFFE8PxfY4W%2FIWAM3qmkFjJhevVn7U%2F73BCTL5DfUfO6RT9hMMdWTe7c1f9kM9r12bi7cOG9aLIKfYZOoX%2B93mGvf8s14%2B75MM7OfFkjM%2FSsQzsSQHmVbsP3LS6rZeJJfH0NW0VVKmuRak6DQ3wi2bPdrdobnvDk4gPJrJ1kNy%2BZJATyWm35Bo8zay3Q0SewcRuUKg4QZ7dXD4ytduNxKhgUzDP9UYws1j0A5InNAx4VI1OF9%2BFsOVGI0TJaClDUdWPP%2Bl%2F2rt5Z0cmGGmrwSHb%2BAKlNwfAH2zoGUCZ7RaJyYxqIomHNc2oyUY6LBfBDUMa27feL9%2FFA85z0RJULxL1ouiq82s7ymlxwREZ0ClNf8VN%2F1c9k7TYflnrsg%2Bek7YeIqs5VSc7ZEv1Qzv35gAmvD2sZdFkON78uYhFnAb3NDXisNsp2fva%2F7NNYJ5%2B32VYfORNypSuryTO4aXt%2BuTudrXKhYwqa4sIg2lYJ%2BM3qhH39eqi8vg3rlN%2Fn6RzIpq0lY3unfEoxH1HBosKvwMmKgQWwKmdjq6YC6M8TOmSv0tEWd74WKhNNoblLhW1a9rI5%2FfveOYuDshustCUBnAiC01L3YcIcICi2BtbUwAVa%2Fi2u9dgDDQ1vrDBjqkAVG0lgv1UohMWdYmK9Y%2FY8vAC4v4LwcUKjgsPUlo6vdnd9EY0GJEF7zm31hUJ1Fs3gWdyil%2BXj6%2FTzJsTp7MNQHeJBk3oA%2BZViTzfStv44kmrH2sP9s1FcnWCkqqgQ14kwQB%2BI9omP2G85QZ3VVFmiWRrF4zBnVZF9VfBU3eB8GR2Tpxx4ZkBt%2FznNOKQWVyoeueFUU9%2BtivsguxgrpGJryBmmym&X-Amz-Signature=65a8cb1b1946c0acd24db24778280dba9c67f1c417c71e88129e2098e44b316e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666JB7TD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzXExQKljvA7%2F4OU88nqi8HlCgJiXKeGUCiDjUH82swIhAO9fPS7HVc3vFZQxR%2FzLrUyznZ5aCh2cM2rxqniNmrGqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz14zIdlZoI9zG6nCMq3AMzVMN2nRKFFE8PxfY4W%2FIWAM3qmkFjJhevVn7U%2F73BCTL5DfUfO6RT9hMMdWTe7c1f9kM9r12bi7cOG9aLIKfYZOoX%2B93mGvf8s14%2B75MM7OfFkjM%2FSsQzsSQHmVbsP3LS6rZeJJfH0NW0VVKmuRak6DQ3wi2bPdrdobnvDk4gPJrJ1kNy%2BZJATyWm35Bo8zay3Q0SewcRuUKg4QZ7dXD4ytduNxKhgUzDP9UYws1j0A5InNAx4VI1OF9%2BFsOVGI0TJaClDUdWPP%2Bl%2F2rt5Z0cmGGmrwSHb%2BAKlNwfAH2zoGUCZ7RaJyYxqIomHNc2oyUY6LBfBDUMa27feL9%2FFA85z0RJULxL1ouiq82s7ymlxwREZ0ClNf8VN%2F1c9k7TYflnrsg%2Bek7YeIqs5VSc7ZEv1Qzv35gAmvD2sZdFkON78uYhFnAb3NDXisNsp2fva%2F7NNYJ5%2B32VYfORNypSuryTO4aXt%2BuTudrXKhYwqa4sIg2lYJ%2BM3qhH39eqi8vg3rlN%2Fn6RzIpq0lY3unfEoxH1HBosKvwMmKgQWwKmdjq6YC6M8TOmSv0tEWd74WKhNNoblLhW1a9rI5%2FfveOYuDshustCUBnAiC01L3YcIcICi2BtbUwAVa%2Fi2u9dgDDQ1vrDBjqkAVG0lgv1UohMWdYmK9Y%2FY8vAC4v4LwcUKjgsPUlo6vdnd9EY0GJEF7zm31hUJ1Fs3gWdyil%2BXj6%2FTzJsTp7MNQHeJBk3oA%2BZViTzfStv44kmrH2sP9s1FcnWCkqqgQ14kwQB%2BI9omP2G85QZ3VVFmiWRrF4zBnVZF9VfBU3eB8GR2Tpxx4ZkBt%2FznNOKQWVyoeueFUU9%2BtivsguxgrpGJryBmmym&X-Amz-Signature=9da9aaa44d6271b2bb5370830c807910f1b8697e612a20f602017088a10c96ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666JB7TD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzXExQKljvA7%2F4OU88nqi8HlCgJiXKeGUCiDjUH82swIhAO9fPS7HVc3vFZQxR%2FzLrUyznZ5aCh2cM2rxqniNmrGqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz14zIdlZoI9zG6nCMq3AMzVMN2nRKFFE8PxfY4W%2FIWAM3qmkFjJhevVn7U%2F73BCTL5DfUfO6RT9hMMdWTe7c1f9kM9r12bi7cOG9aLIKfYZOoX%2B93mGvf8s14%2B75MM7OfFkjM%2FSsQzsSQHmVbsP3LS6rZeJJfH0NW0VVKmuRak6DQ3wi2bPdrdobnvDk4gPJrJ1kNy%2BZJATyWm35Bo8zay3Q0SewcRuUKg4QZ7dXD4ytduNxKhgUzDP9UYws1j0A5InNAx4VI1OF9%2BFsOVGI0TJaClDUdWPP%2Bl%2F2rt5Z0cmGGmrwSHb%2BAKlNwfAH2zoGUCZ7RaJyYxqIomHNc2oyUY6LBfBDUMa27feL9%2FFA85z0RJULxL1ouiq82s7ymlxwREZ0ClNf8VN%2F1c9k7TYflnrsg%2Bek7YeIqs5VSc7ZEv1Qzv35gAmvD2sZdFkON78uYhFnAb3NDXisNsp2fva%2F7NNYJ5%2B32VYfORNypSuryTO4aXt%2BuTudrXKhYwqa4sIg2lYJ%2BM3qhH39eqi8vg3rlN%2Fn6RzIpq0lY3unfEoxH1HBosKvwMmKgQWwKmdjq6YC6M8TOmSv0tEWd74WKhNNoblLhW1a9rI5%2FfveOYuDshustCUBnAiC01L3YcIcICi2BtbUwAVa%2Fi2u9dgDDQ1vrDBjqkAVG0lgv1UohMWdYmK9Y%2FY8vAC4v4LwcUKjgsPUlo6vdnd9EY0GJEF7zm31hUJ1Fs3gWdyil%2BXj6%2FTzJsTp7MNQHeJBk3oA%2BZViTzfStv44kmrH2sP9s1FcnWCkqqgQ14kwQB%2BI9omP2G85QZ3VVFmiWRrF4zBnVZF9VfBU3eB8GR2Tpxx4ZkBt%2FznNOKQWVyoeueFUU9%2BtivsguxgrpGJryBmmym&X-Amz-Signature=c76f35b63fed65ff9463d746a95b84d120ed3455ced799c42bc2bdb536780d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666JB7TD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzXExQKljvA7%2F4OU88nqi8HlCgJiXKeGUCiDjUH82swIhAO9fPS7HVc3vFZQxR%2FzLrUyznZ5aCh2cM2rxqniNmrGqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz14zIdlZoI9zG6nCMq3AMzVMN2nRKFFE8PxfY4W%2FIWAM3qmkFjJhevVn7U%2F73BCTL5DfUfO6RT9hMMdWTe7c1f9kM9r12bi7cOG9aLIKfYZOoX%2B93mGvf8s14%2B75MM7OfFkjM%2FSsQzsSQHmVbsP3LS6rZeJJfH0NW0VVKmuRak6DQ3wi2bPdrdobnvDk4gPJrJ1kNy%2BZJATyWm35Bo8zay3Q0SewcRuUKg4QZ7dXD4ytduNxKhgUzDP9UYws1j0A5InNAx4VI1OF9%2BFsOVGI0TJaClDUdWPP%2Bl%2F2rt5Z0cmGGmrwSHb%2BAKlNwfAH2zoGUCZ7RaJyYxqIomHNc2oyUY6LBfBDUMa27feL9%2FFA85z0RJULxL1ouiq82s7ymlxwREZ0ClNf8VN%2F1c9k7TYflnrsg%2Bek7YeIqs5VSc7ZEv1Qzv35gAmvD2sZdFkON78uYhFnAb3NDXisNsp2fva%2F7NNYJ5%2B32VYfORNypSuryTO4aXt%2BuTudrXKhYwqa4sIg2lYJ%2BM3qhH39eqi8vg3rlN%2Fn6RzIpq0lY3unfEoxH1HBosKvwMmKgQWwKmdjq6YC6M8TOmSv0tEWd74WKhNNoblLhW1a9rI5%2FfveOYuDshustCUBnAiC01L3YcIcICi2BtbUwAVa%2Fi2u9dgDDQ1vrDBjqkAVG0lgv1UohMWdYmK9Y%2FY8vAC4v4LwcUKjgsPUlo6vdnd9EY0GJEF7zm31hUJ1Fs3gWdyil%2BXj6%2FTzJsTp7MNQHeJBk3oA%2BZViTzfStv44kmrH2sP9s1FcnWCkqqgQ14kwQB%2BI9omP2G85QZ3VVFmiWRrF4zBnVZF9VfBU3eB8GR2Tpxx4ZkBt%2FznNOKQWVyoeueFUU9%2BtivsguxgrpGJryBmmym&X-Amz-Signature=0a411adb58f76163f45a13f65940e1878087249de420c37752f14d94af9929c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666JB7TD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzXExQKljvA7%2F4OU88nqi8HlCgJiXKeGUCiDjUH82swIhAO9fPS7HVc3vFZQxR%2FzLrUyznZ5aCh2cM2rxqniNmrGqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz14zIdlZoI9zG6nCMq3AMzVMN2nRKFFE8PxfY4W%2FIWAM3qmkFjJhevVn7U%2F73BCTL5DfUfO6RT9hMMdWTe7c1f9kM9r12bi7cOG9aLIKfYZOoX%2B93mGvf8s14%2B75MM7OfFkjM%2FSsQzsSQHmVbsP3LS6rZeJJfH0NW0VVKmuRak6DQ3wi2bPdrdobnvDk4gPJrJ1kNy%2BZJATyWm35Bo8zay3Q0SewcRuUKg4QZ7dXD4ytduNxKhgUzDP9UYws1j0A5InNAx4VI1OF9%2BFsOVGI0TJaClDUdWPP%2Bl%2F2rt5Z0cmGGmrwSHb%2BAKlNwfAH2zoGUCZ7RaJyYxqIomHNc2oyUY6LBfBDUMa27feL9%2FFA85z0RJULxL1ouiq82s7ymlxwREZ0ClNf8VN%2F1c9k7TYflnrsg%2Bek7YeIqs5VSc7ZEv1Qzv35gAmvD2sZdFkON78uYhFnAb3NDXisNsp2fva%2F7NNYJ5%2B32VYfORNypSuryTO4aXt%2BuTudrXKhYwqa4sIg2lYJ%2BM3qhH39eqi8vg3rlN%2Fn6RzIpq0lY3unfEoxH1HBosKvwMmKgQWwKmdjq6YC6M8TOmSv0tEWd74WKhNNoblLhW1a9rI5%2FfveOYuDshustCUBnAiC01L3YcIcICi2BtbUwAVa%2Fi2u9dgDDQ1vrDBjqkAVG0lgv1UohMWdYmK9Y%2FY8vAC4v4LwcUKjgsPUlo6vdnd9EY0GJEF7zm31hUJ1Fs3gWdyil%2BXj6%2FTzJsTp7MNQHeJBk3oA%2BZViTzfStv44kmrH2sP9s1FcnWCkqqgQ14kwQB%2BI9omP2G85QZ3VVFmiWRrF4zBnVZF9VfBU3eB8GR2Tpxx4ZkBt%2FznNOKQWVyoeueFUU9%2BtivsguxgrpGJryBmmym&X-Amz-Signature=f2e031b3a0ffcd9cd752e196e7f056f3113fcb86f25d72b2d33f151bc96ff30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466666JB7TD%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDzXExQKljvA7%2F4OU88nqi8HlCgJiXKeGUCiDjUH82swIhAO9fPS7HVc3vFZQxR%2FzLrUyznZ5aCh2cM2rxqniNmrGqKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz14zIdlZoI9zG6nCMq3AMzVMN2nRKFFE8PxfY4W%2FIWAM3qmkFjJhevVn7U%2F73BCTL5DfUfO6RT9hMMdWTe7c1f9kM9r12bi7cOG9aLIKfYZOoX%2B93mGvf8s14%2B75MM7OfFkjM%2FSsQzsSQHmVbsP3LS6rZeJJfH0NW0VVKmuRak6DQ3wi2bPdrdobnvDk4gPJrJ1kNy%2BZJATyWm35Bo8zay3Q0SewcRuUKg4QZ7dXD4ytduNxKhgUzDP9UYws1j0A5InNAx4VI1OF9%2BFsOVGI0TJaClDUdWPP%2Bl%2F2rt5Z0cmGGmrwSHb%2BAKlNwfAH2zoGUCZ7RaJyYxqIomHNc2oyUY6LBfBDUMa27feL9%2FFA85z0RJULxL1ouiq82s7ymlxwREZ0ClNf8VN%2F1c9k7TYflnrsg%2Bek7YeIqs5VSc7ZEv1Qzv35gAmvD2sZdFkON78uYhFnAb3NDXisNsp2fva%2F7NNYJ5%2B32VYfORNypSuryTO4aXt%2BuTudrXKhYwqa4sIg2lYJ%2BM3qhH39eqi8vg3rlN%2Fn6RzIpq0lY3unfEoxH1HBosKvwMmKgQWwKmdjq6YC6M8TOmSv0tEWd74WKhNNoblLhW1a9rI5%2FfveOYuDshustCUBnAiC01L3YcIcICi2BtbUwAVa%2Fi2u9dgDDQ1vrDBjqkAVG0lgv1UohMWdYmK9Y%2FY8vAC4v4LwcUKjgsPUlo6vdnd9EY0GJEF7zm31hUJ1Fs3gWdyil%2BXj6%2FTzJsTp7MNQHeJBk3oA%2BZViTzfStv44kmrH2sP9s1FcnWCkqqgQ14kwQB%2BI9omP2G85QZ3VVFmiWRrF4zBnVZF9VfBU3eB8GR2Tpxx4ZkBt%2FznNOKQWVyoeueFUU9%2BtivsguxgrpGJryBmmym&X-Amz-Signature=74ef8a7efeb2aa4c894b40d1d0e63b36dc11767f5c86ecfc9bff137de982a6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
