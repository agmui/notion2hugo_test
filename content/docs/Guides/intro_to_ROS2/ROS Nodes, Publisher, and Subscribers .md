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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSO5Y7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBxDbgiRcxLAwrVEzY1guqhd75vvkX59MEiys1EziUniAiBfWV1TlUZrjzvZAvlbV5g8yXd%2BHrlVv2vYypUEG2hcXCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMDpGXe4t%2FDFTFM9%2FaKtwD4XxTsHoilCzTk7z0XhpBnFSafgfmk3%2F1mqMgqr7WLHsKzt8v8J1gDukSgwZMdkPs4TyaLSETgm40RJ25%2BPQIc70wJ75REHTW25TgUCCvDky2jL0vVgoYdsHEborKN5O0nw%2F8QXONbJjf8oLC%2FoQUWRUMR8LbPLOBWbIiJVV4t0T0WflJD9UfZz4j95ydLsCvzTjNhlRUgreEz0ajV7dS68COWDuWXXzY8iEgjDZCvNJCBEsdCtMBmSmsl1aQS%2B%2FywZ4FboP6d7J4Iqh0D73fbPQlpm3sn8vVXzODxZa2CQ4%2F5aq9ATjQ4OqvpcfXJk48P%2BJUjb1nP9bWKbbAcJfwHysxMpoSVfvfnA57W32m%2FmyC04XRa%2B5705kL6dksmRTqQEQMMVaugIRedF2qsjEZulQD%2BWrAvQ3IGxLhs06k5RWn90AilWp7C89sr%2FgmNk4pLxW0B0kckLZ37t8lLApWakJaUqhhPVmK%2FkdvNGHE4AMxfX0HtKvWcBYwVXuA82KHsoj8PQRZCsyEqDoYbGdUTO010zU4ZwomZHp7bzv9imtPv5ExKykx7iiuXFZdGqZ9U2tSxlpsPv%2FasBDEh0wbEoZDfZErq7CfO4VXNnMG4R3rkritVpxEE5Uby2kwoJuVvQY6pgF8pDRA1%2Fb5HerrEJ8abwmOEuYtPLAeGC4CtoF1uWZLXyNO0wLAk5vVXKpLuYoNXvve6xVXUW77muWusAUV6%2FHD%2FHfk8VYMlJEE8H9DsGz%2BcuP0cAqf5ao%2F3%2Fu%2B2CObjVygM3achdQ%2FgDleQqQCsS2XvyRzvseQ6MD5Pc4Q1dSJftHWF%2BAQ0u7U%2F8UXGM9EQdgcDHeqDze%2BKGHDm%2FIiGJHQ4f23vdpJ&X-Amz-Signature=99a805fc5fb80b3bb917fec86c655666f7d5f4091d945655f06d23486a93633a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSO5Y7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBxDbgiRcxLAwrVEzY1guqhd75vvkX59MEiys1EziUniAiBfWV1TlUZrjzvZAvlbV5g8yXd%2BHrlVv2vYypUEG2hcXCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMDpGXe4t%2FDFTFM9%2FaKtwD4XxTsHoilCzTk7z0XhpBnFSafgfmk3%2F1mqMgqr7WLHsKzt8v8J1gDukSgwZMdkPs4TyaLSETgm40RJ25%2BPQIc70wJ75REHTW25TgUCCvDky2jL0vVgoYdsHEborKN5O0nw%2F8QXONbJjf8oLC%2FoQUWRUMR8LbPLOBWbIiJVV4t0T0WflJD9UfZz4j95ydLsCvzTjNhlRUgreEz0ajV7dS68COWDuWXXzY8iEgjDZCvNJCBEsdCtMBmSmsl1aQS%2B%2FywZ4FboP6d7J4Iqh0D73fbPQlpm3sn8vVXzODxZa2CQ4%2F5aq9ATjQ4OqvpcfXJk48P%2BJUjb1nP9bWKbbAcJfwHysxMpoSVfvfnA57W32m%2FmyC04XRa%2B5705kL6dksmRTqQEQMMVaugIRedF2qsjEZulQD%2BWrAvQ3IGxLhs06k5RWn90AilWp7C89sr%2FgmNk4pLxW0B0kckLZ37t8lLApWakJaUqhhPVmK%2FkdvNGHE4AMxfX0HtKvWcBYwVXuA82KHsoj8PQRZCsyEqDoYbGdUTO010zU4ZwomZHp7bzv9imtPv5ExKykx7iiuXFZdGqZ9U2tSxlpsPv%2FasBDEh0wbEoZDfZErq7CfO4VXNnMG4R3rkritVpxEE5Uby2kwoJuVvQY6pgF8pDRA1%2Fb5HerrEJ8abwmOEuYtPLAeGC4CtoF1uWZLXyNO0wLAk5vVXKpLuYoNXvve6xVXUW77muWusAUV6%2FHD%2FHfk8VYMlJEE8H9DsGz%2BcuP0cAqf5ao%2F3%2Fu%2B2CObjVygM3achdQ%2FgDleQqQCsS2XvyRzvseQ6MD5Pc4Q1dSJftHWF%2BAQ0u7U%2F8UXGM9EQdgcDHeqDze%2BKGHDm%2FIiGJHQ4f23vdpJ&X-Amz-Signature=346d45a2386815ad9d2efb9dfefaba0630627787c36aee60ea24dd9840f7824f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSO5Y7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBxDbgiRcxLAwrVEzY1guqhd75vvkX59MEiys1EziUniAiBfWV1TlUZrjzvZAvlbV5g8yXd%2BHrlVv2vYypUEG2hcXCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMDpGXe4t%2FDFTFM9%2FaKtwD4XxTsHoilCzTk7z0XhpBnFSafgfmk3%2F1mqMgqr7WLHsKzt8v8J1gDukSgwZMdkPs4TyaLSETgm40RJ25%2BPQIc70wJ75REHTW25TgUCCvDky2jL0vVgoYdsHEborKN5O0nw%2F8QXONbJjf8oLC%2FoQUWRUMR8LbPLOBWbIiJVV4t0T0WflJD9UfZz4j95ydLsCvzTjNhlRUgreEz0ajV7dS68COWDuWXXzY8iEgjDZCvNJCBEsdCtMBmSmsl1aQS%2B%2FywZ4FboP6d7J4Iqh0D73fbPQlpm3sn8vVXzODxZa2CQ4%2F5aq9ATjQ4OqvpcfXJk48P%2BJUjb1nP9bWKbbAcJfwHysxMpoSVfvfnA57W32m%2FmyC04XRa%2B5705kL6dksmRTqQEQMMVaugIRedF2qsjEZulQD%2BWrAvQ3IGxLhs06k5RWn90AilWp7C89sr%2FgmNk4pLxW0B0kckLZ37t8lLApWakJaUqhhPVmK%2FkdvNGHE4AMxfX0HtKvWcBYwVXuA82KHsoj8PQRZCsyEqDoYbGdUTO010zU4ZwomZHp7bzv9imtPv5ExKykx7iiuXFZdGqZ9U2tSxlpsPv%2FasBDEh0wbEoZDfZErq7CfO4VXNnMG4R3rkritVpxEE5Uby2kwoJuVvQY6pgF8pDRA1%2Fb5HerrEJ8abwmOEuYtPLAeGC4CtoF1uWZLXyNO0wLAk5vVXKpLuYoNXvve6xVXUW77muWusAUV6%2FHD%2FHfk8VYMlJEE8H9DsGz%2BcuP0cAqf5ao%2F3%2Fu%2B2CObjVygM3achdQ%2FgDleQqQCsS2XvyRzvseQ6MD5Pc4Q1dSJftHWF%2BAQ0u7U%2F8UXGM9EQdgcDHeqDze%2BKGHDm%2FIiGJHQ4f23vdpJ&X-Amz-Signature=1e3e3198365f2dc5f2bf58364bf22ae1b61c410507c65d06f279311906c83898&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSO5Y7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBxDbgiRcxLAwrVEzY1guqhd75vvkX59MEiys1EziUniAiBfWV1TlUZrjzvZAvlbV5g8yXd%2BHrlVv2vYypUEG2hcXCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMDpGXe4t%2FDFTFM9%2FaKtwD4XxTsHoilCzTk7z0XhpBnFSafgfmk3%2F1mqMgqr7WLHsKzt8v8J1gDukSgwZMdkPs4TyaLSETgm40RJ25%2BPQIc70wJ75REHTW25TgUCCvDky2jL0vVgoYdsHEborKN5O0nw%2F8QXONbJjf8oLC%2FoQUWRUMR8LbPLOBWbIiJVV4t0T0WflJD9UfZz4j95ydLsCvzTjNhlRUgreEz0ajV7dS68COWDuWXXzY8iEgjDZCvNJCBEsdCtMBmSmsl1aQS%2B%2FywZ4FboP6d7J4Iqh0D73fbPQlpm3sn8vVXzODxZa2CQ4%2F5aq9ATjQ4OqvpcfXJk48P%2BJUjb1nP9bWKbbAcJfwHysxMpoSVfvfnA57W32m%2FmyC04XRa%2B5705kL6dksmRTqQEQMMVaugIRedF2qsjEZulQD%2BWrAvQ3IGxLhs06k5RWn90AilWp7C89sr%2FgmNk4pLxW0B0kckLZ37t8lLApWakJaUqhhPVmK%2FkdvNGHE4AMxfX0HtKvWcBYwVXuA82KHsoj8PQRZCsyEqDoYbGdUTO010zU4ZwomZHp7bzv9imtPv5ExKykx7iiuXFZdGqZ9U2tSxlpsPv%2FasBDEh0wbEoZDfZErq7CfO4VXNnMG4R3rkritVpxEE5Uby2kwoJuVvQY6pgF8pDRA1%2Fb5HerrEJ8abwmOEuYtPLAeGC4CtoF1uWZLXyNO0wLAk5vVXKpLuYoNXvve6xVXUW77muWusAUV6%2FHD%2FHfk8VYMlJEE8H9DsGz%2BcuP0cAqf5ao%2F3%2Fu%2B2CObjVygM3achdQ%2FgDleQqQCsS2XvyRzvseQ6MD5Pc4Q1dSJftHWF%2BAQ0u7U%2F8UXGM9EQdgcDHeqDze%2BKGHDm%2FIiGJHQ4f23vdpJ&X-Amz-Signature=28b82f6bbbf663162a9f9256859176e99110c28eb4394b84698f765cd93cb6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSO5Y7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBxDbgiRcxLAwrVEzY1guqhd75vvkX59MEiys1EziUniAiBfWV1TlUZrjzvZAvlbV5g8yXd%2BHrlVv2vYypUEG2hcXCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMDpGXe4t%2FDFTFM9%2FaKtwD4XxTsHoilCzTk7z0XhpBnFSafgfmk3%2F1mqMgqr7WLHsKzt8v8J1gDukSgwZMdkPs4TyaLSETgm40RJ25%2BPQIc70wJ75REHTW25TgUCCvDky2jL0vVgoYdsHEborKN5O0nw%2F8QXONbJjf8oLC%2FoQUWRUMR8LbPLOBWbIiJVV4t0T0WflJD9UfZz4j95ydLsCvzTjNhlRUgreEz0ajV7dS68COWDuWXXzY8iEgjDZCvNJCBEsdCtMBmSmsl1aQS%2B%2FywZ4FboP6d7J4Iqh0D73fbPQlpm3sn8vVXzODxZa2CQ4%2F5aq9ATjQ4OqvpcfXJk48P%2BJUjb1nP9bWKbbAcJfwHysxMpoSVfvfnA57W32m%2FmyC04XRa%2B5705kL6dksmRTqQEQMMVaugIRedF2qsjEZulQD%2BWrAvQ3IGxLhs06k5RWn90AilWp7C89sr%2FgmNk4pLxW0B0kckLZ37t8lLApWakJaUqhhPVmK%2FkdvNGHE4AMxfX0HtKvWcBYwVXuA82KHsoj8PQRZCsyEqDoYbGdUTO010zU4ZwomZHp7bzv9imtPv5ExKykx7iiuXFZdGqZ9U2tSxlpsPv%2FasBDEh0wbEoZDfZErq7CfO4VXNnMG4R3rkritVpxEE5Uby2kwoJuVvQY6pgF8pDRA1%2Fb5HerrEJ8abwmOEuYtPLAeGC4CtoF1uWZLXyNO0wLAk5vVXKpLuYoNXvve6xVXUW77muWusAUV6%2FHD%2FHfk8VYMlJEE8H9DsGz%2BcuP0cAqf5ao%2F3%2Fu%2B2CObjVygM3achdQ%2FgDleQqQCsS2XvyRzvseQ6MD5Pc4Q1dSJftHWF%2BAQ0u7U%2F8UXGM9EQdgcDHeqDze%2BKGHDm%2FIiGJHQ4f23vdpJ&X-Amz-Signature=99e5b7cba821dabb2e8e50539a9ff2bd2f2ac18af030733bee3d3496649d8606&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSO5Y7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBxDbgiRcxLAwrVEzY1guqhd75vvkX59MEiys1EziUniAiBfWV1TlUZrjzvZAvlbV5g8yXd%2BHrlVv2vYypUEG2hcXCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMDpGXe4t%2FDFTFM9%2FaKtwD4XxTsHoilCzTk7z0XhpBnFSafgfmk3%2F1mqMgqr7WLHsKzt8v8J1gDukSgwZMdkPs4TyaLSETgm40RJ25%2BPQIc70wJ75REHTW25TgUCCvDky2jL0vVgoYdsHEborKN5O0nw%2F8QXONbJjf8oLC%2FoQUWRUMR8LbPLOBWbIiJVV4t0T0WflJD9UfZz4j95ydLsCvzTjNhlRUgreEz0ajV7dS68COWDuWXXzY8iEgjDZCvNJCBEsdCtMBmSmsl1aQS%2B%2FywZ4FboP6d7J4Iqh0D73fbPQlpm3sn8vVXzODxZa2CQ4%2F5aq9ATjQ4OqvpcfXJk48P%2BJUjb1nP9bWKbbAcJfwHysxMpoSVfvfnA57W32m%2FmyC04XRa%2B5705kL6dksmRTqQEQMMVaugIRedF2qsjEZulQD%2BWrAvQ3IGxLhs06k5RWn90AilWp7C89sr%2FgmNk4pLxW0B0kckLZ37t8lLApWakJaUqhhPVmK%2FkdvNGHE4AMxfX0HtKvWcBYwVXuA82KHsoj8PQRZCsyEqDoYbGdUTO010zU4ZwomZHp7bzv9imtPv5ExKykx7iiuXFZdGqZ9U2tSxlpsPv%2FasBDEh0wbEoZDfZErq7CfO4VXNnMG4R3rkritVpxEE5Uby2kwoJuVvQY6pgF8pDRA1%2Fb5HerrEJ8abwmOEuYtPLAeGC4CtoF1uWZLXyNO0wLAk5vVXKpLuYoNXvve6xVXUW77muWusAUV6%2FHD%2FHfk8VYMlJEE8H9DsGz%2BcuP0cAqf5ao%2F3%2Fu%2B2CObjVygM3achdQ%2FgDleQqQCsS2XvyRzvseQ6MD5Pc4Q1dSJftHWF%2BAQ0u7U%2F8UXGM9EQdgcDHeqDze%2BKGHDm%2FIiGJHQ4f23vdpJ&X-Amz-Signature=604d3116339cb2f5ab0caafd7bb2390ea15cf365b58b1ab910776d918ce39c45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSO5Y7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBxDbgiRcxLAwrVEzY1guqhd75vvkX59MEiys1EziUniAiBfWV1TlUZrjzvZAvlbV5g8yXd%2BHrlVv2vYypUEG2hcXCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMDpGXe4t%2FDFTFM9%2FaKtwD4XxTsHoilCzTk7z0XhpBnFSafgfmk3%2F1mqMgqr7WLHsKzt8v8J1gDukSgwZMdkPs4TyaLSETgm40RJ25%2BPQIc70wJ75REHTW25TgUCCvDky2jL0vVgoYdsHEborKN5O0nw%2F8QXONbJjf8oLC%2FoQUWRUMR8LbPLOBWbIiJVV4t0T0WflJD9UfZz4j95ydLsCvzTjNhlRUgreEz0ajV7dS68COWDuWXXzY8iEgjDZCvNJCBEsdCtMBmSmsl1aQS%2B%2FywZ4FboP6d7J4Iqh0D73fbPQlpm3sn8vVXzODxZa2CQ4%2F5aq9ATjQ4OqvpcfXJk48P%2BJUjb1nP9bWKbbAcJfwHysxMpoSVfvfnA57W32m%2FmyC04XRa%2B5705kL6dksmRTqQEQMMVaugIRedF2qsjEZulQD%2BWrAvQ3IGxLhs06k5RWn90AilWp7C89sr%2FgmNk4pLxW0B0kckLZ37t8lLApWakJaUqhhPVmK%2FkdvNGHE4AMxfX0HtKvWcBYwVXuA82KHsoj8PQRZCsyEqDoYbGdUTO010zU4ZwomZHp7bzv9imtPv5ExKykx7iiuXFZdGqZ9U2tSxlpsPv%2FasBDEh0wbEoZDfZErq7CfO4VXNnMG4R3rkritVpxEE5Uby2kwoJuVvQY6pgF8pDRA1%2Fb5HerrEJ8abwmOEuYtPLAeGC4CtoF1uWZLXyNO0wLAk5vVXKpLuYoNXvve6xVXUW77muWusAUV6%2FHD%2FHfk8VYMlJEE8H9DsGz%2BcuP0cAqf5ao%2F3%2Fu%2B2CObjVygM3achdQ%2FgDleQqQCsS2XvyRzvseQ6MD5Pc4Q1dSJftHWF%2BAQ0u7U%2F8UXGM9EQdgcDHeqDze%2BKGHDm%2FIiGJHQ4f23vdpJ&X-Amz-Signature=80abad0108e649623f77dca9ab0268a61bb76f85bad1d3f71b644b01085effc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ENSO5Y7%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIBxDbgiRcxLAwrVEzY1guqhd75vvkX59MEiys1EziUniAiBfWV1TlUZrjzvZAvlbV5g8yXd%2BHrlVv2vYypUEG2hcXCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMDpGXe4t%2FDFTFM9%2FaKtwD4XxTsHoilCzTk7z0XhpBnFSafgfmk3%2F1mqMgqr7WLHsKzt8v8J1gDukSgwZMdkPs4TyaLSETgm40RJ25%2BPQIc70wJ75REHTW25TgUCCvDky2jL0vVgoYdsHEborKN5O0nw%2F8QXONbJjf8oLC%2FoQUWRUMR8LbPLOBWbIiJVV4t0T0WflJD9UfZz4j95ydLsCvzTjNhlRUgreEz0ajV7dS68COWDuWXXzY8iEgjDZCvNJCBEsdCtMBmSmsl1aQS%2B%2FywZ4FboP6d7J4Iqh0D73fbPQlpm3sn8vVXzODxZa2CQ4%2F5aq9ATjQ4OqvpcfXJk48P%2BJUjb1nP9bWKbbAcJfwHysxMpoSVfvfnA57W32m%2FmyC04XRa%2B5705kL6dksmRTqQEQMMVaugIRedF2qsjEZulQD%2BWrAvQ3IGxLhs06k5RWn90AilWp7C89sr%2FgmNk4pLxW0B0kckLZ37t8lLApWakJaUqhhPVmK%2FkdvNGHE4AMxfX0HtKvWcBYwVXuA82KHsoj8PQRZCsyEqDoYbGdUTO010zU4ZwomZHp7bzv9imtPv5ExKykx7iiuXFZdGqZ9U2tSxlpsPv%2FasBDEh0wbEoZDfZErq7CfO4VXNnMG4R3rkritVpxEE5Uby2kwoJuVvQY6pgF8pDRA1%2Fb5HerrEJ8abwmOEuYtPLAeGC4CtoF1uWZLXyNO0wLAk5vVXKpLuYoNXvve6xVXUW77muWusAUV6%2FHD%2FHfk8VYMlJEE8H9DsGz%2BcuP0cAqf5ao%2F3%2Fu%2B2CObjVygM3achdQ%2FgDleQqQCsS2XvyRzvseQ6MD5Pc4Q1dSJftHWF%2BAQ0u7U%2F8UXGM9EQdgcDHeqDze%2BKGHDm%2FIiGJHQ4f23vdpJ&X-Amz-Signature=3c81551a626ea395e1c23e703b7b5def2d29f41b70c5389e191c0a75333a516c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
