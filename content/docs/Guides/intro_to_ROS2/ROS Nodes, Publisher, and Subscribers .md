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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVZMRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDeZKz0kFAJoaSYdO0Nuezfg554VcqQZYjwcXRFRFQp2QIhAPfW8G4g0hX5bdUqT8I%2FOHp9Ob7bAfHusqo2Ax7v71S1Kv8DCBsQABoMNjM3NDIzMTgzODA1IgyE9VLb4U9s3F1l0aYq3ANtB1mJF6vRkvtBSidI8uFyIHvrz7YrU1hYLngA49WyNQe1EbzAPjdZTaGWC3PiBkGqaChy8qKUdjKC8xi%2FAKdNsw0eDdqIxnewwFxzlB0egJz04kpY6spu2IxT60uJaKTlRhdYEJjIl%2FYvnkvNA84fMqety9pohtTGrvVrEjop7pfwgh97xPQQQGFwzO8uKba5s8wvxl3KwsPrDcYYGK4CLK%2FtEkb6hlVOAXN03AvOJOPkpxnLf4nQrmwVLqNz2AzMNRARJ%2Bh6hEAfbrfGxW3H8e%2FV6OwYOXcvIXTNcTTah1%2F3gmyBYjQFAmGfpGTuCphAP%2BUe6wAkbow7XG3anCZUoN0v4yo6%2Fb1KmkIJKSnWZcxeq4Oys1PfSzOqYUaeS4ab819yiu8MErrtXPnBYm4Xpwe%2FRqqt6J%2FplckW4U%2BP%2BS2Xp689JqMVdkFqpfCFhuQNME%2BT2YD5kZpxljXpjxhH%2FxkcI1nCn39IXYSr0KguMGSRaI024brMtBYhGgleah5xq%2BstJXpPSpHOT4x39uTNznXxnyRchb%2BKqVjb6DskMSeNrN2N7ricgfPjOB2sCjPkJpfCaHRKcrejEXtjfpm4wn3SWKUgRbv1xJmjXs7uDpWSinFc%2FTyQ%2BEoqtjC1lsjBBjqkATyqGwK4vNAN%2Fon8RXwb5codxdoPQ3mR0H0ddVGr0N8j5KNWpdIhZ4UFbnMyKFyha%2FHWum1aPwP%2Fu92O0zqq09B7NPGbl%2Ft9zt7phTRwHDSL%2F%2FL8ErZIDH1Mvc4UPulXtX%2BcAljNamyI41qi8nWll91ilfU4BCTUMeHJ7itUbgENcH43TiYcJIpZvlNe9Nu7CQ173fRfjemB3fTIp69K3l%2BnHXYX&X-Amz-Signature=fa638fa3f023af5cda8bd70e4593d47316f88cc1081f8284f1e624cb6622eef8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVZMRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDeZKz0kFAJoaSYdO0Nuezfg554VcqQZYjwcXRFRFQp2QIhAPfW8G4g0hX5bdUqT8I%2FOHp9Ob7bAfHusqo2Ax7v71S1Kv8DCBsQABoMNjM3NDIzMTgzODA1IgyE9VLb4U9s3F1l0aYq3ANtB1mJF6vRkvtBSidI8uFyIHvrz7YrU1hYLngA49WyNQe1EbzAPjdZTaGWC3PiBkGqaChy8qKUdjKC8xi%2FAKdNsw0eDdqIxnewwFxzlB0egJz04kpY6spu2IxT60uJaKTlRhdYEJjIl%2FYvnkvNA84fMqety9pohtTGrvVrEjop7pfwgh97xPQQQGFwzO8uKba5s8wvxl3KwsPrDcYYGK4CLK%2FtEkb6hlVOAXN03AvOJOPkpxnLf4nQrmwVLqNz2AzMNRARJ%2Bh6hEAfbrfGxW3H8e%2FV6OwYOXcvIXTNcTTah1%2F3gmyBYjQFAmGfpGTuCphAP%2BUe6wAkbow7XG3anCZUoN0v4yo6%2Fb1KmkIJKSnWZcxeq4Oys1PfSzOqYUaeS4ab819yiu8MErrtXPnBYm4Xpwe%2FRqqt6J%2FplckW4U%2BP%2BS2Xp689JqMVdkFqpfCFhuQNME%2BT2YD5kZpxljXpjxhH%2FxkcI1nCn39IXYSr0KguMGSRaI024brMtBYhGgleah5xq%2BstJXpPSpHOT4x39uTNznXxnyRchb%2BKqVjb6DskMSeNrN2N7ricgfPjOB2sCjPkJpfCaHRKcrejEXtjfpm4wn3SWKUgRbv1xJmjXs7uDpWSinFc%2FTyQ%2BEoqtjC1lsjBBjqkATyqGwK4vNAN%2Fon8RXwb5codxdoPQ3mR0H0ddVGr0N8j5KNWpdIhZ4UFbnMyKFyha%2FHWum1aPwP%2Fu92O0zqq09B7NPGbl%2Ft9zt7phTRwHDSL%2F%2FL8ErZIDH1Mvc4UPulXtX%2BcAljNamyI41qi8nWll91ilfU4BCTUMeHJ7itUbgENcH43TiYcJIpZvlNe9Nu7CQ173fRfjemB3fTIp69K3l%2BnHXYX&X-Amz-Signature=e4ba25701a43245af0d16906ff65894bafaa78842756801818bdd1b8e75bd545&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVZMRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDeZKz0kFAJoaSYdO0Nuezfg554VcqQZYjwcXRFRFQp2QIhAPfW8G4g0hX5bdUqT8I%2FOHp9Ob7bAfHusqo2Ax7v71S1Kv8DCBsQABoMNjM3NDIzMTgzODA1IgyE9VLb4U9s3F1l0aYq3ANtB1mJF6vRkvtBSidI8uFyIHvrz7YrU1hYLngA49WyNQe1EbzAPjdZTaGWC3PiBkGqaChy8qKUdjKC8xi%2FAKdNsw0eDdqIxnewwFxzlB0egJz04kpY6spu2IxT60uJaKTlRhdYEJjIl%2FYvnkvNA84fMqety9pohtTGrvVrEjop7pfwgh97xPQQQGFwzO8uKba5s8wvxl3KwsPrDcYYGK4CLK%2FtEkb6hlVOAXN03AvOJOPkpxnLf4nQrmwVLqNz2AzMNRARJ%2Bh6hEAfbrfGxW3H8e%2FV6OwYOXcvIXTNcTTah1%2F3gmyBYjQFAmGfpGTuCphAP%2BUe6wAkbow7XG3anCZUoN0v4yo6%2Fb1KmkIJKSnWZcxeq4Oys1PfSzOqYUaeS4ab819yiu8MErrtXPnBYm4Xpwe%2FRqqt6J%2FplckW4U%2BP%2BS2Xp689JqMVdkFqpfCFhuQNME%2BT2YD5kZpxljXpjxhH%2FxkcI1nCn39IXYSr0KguMGSRaI024brMtBYhGgleah5xq%2BstJXpPSpHOT4x39uTNznXxnyRchb%2BKqVjb6DskMSeNrN2N7ricgfPjOB2sCjPkJpfCaHRKcrejEXtjfpm4wn3SWKUgRbv1xJmjXs7uDpWSinFc%2FTyQ%2BEoqtjC1lsjBBjqkATyqGwK4vNAN%2Fon8RXwb5codxdoPQ3mR0H0ddVGr0N8j5KNWpdIhZ4UFbnMyKFyha%2FHWum1aPwP%2Fu92O0zqq09B7NPGbl%2Ft9zt7phTRwHDSL%2F%2FL8ErZIDH1Mvc4UPulXtX%2BcAljNamyI41qi8nWll91ilfU4BCTUMeHJ7itUbgENcH43TiYcJIpZvlNe9Nu7CQ173fRfjemB3fTIp69K3l%2BnHXYX&X-Amz-Signature=51e33dcd3e0ab0f60e0dc67116f45b8aaee6af4fc59ffd1b78a66e6bd978b99b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVZMRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDeZKz0kFAJoaSYdO0Nuezfg554VcqQZYjwcXRFRFQp2QIhAPfW8G4g0hX5bdUqT8I%2FOHp9Ob7bAfHusqo2Ax7v71S1Kv8DCBsQABoMNjM3NDIzMTgzODA1IgyE9VLb4U9s3F1l0aYq3ANtB1mJF6vRkvtBSidI8uFyIHvrz7YrU1hYLngA49WyNQe1EbzAPjdZTaGWC3PiBkGqaChy8qKUdjKC8xi%2FAKdNsw0eDdqIxnewwFxzlB0egJz04kpY6spu2IxT60uJaKTlRhdYEJjIl%2FYvnkvNA84fMqety9pohtTGrvVrEjop7pfwgh97xPQQQGFwzO8uKba5s8wvxl3KwsPrDcYYGK4CLK%2FtEkb6hlVOAXN03AvOJOPkpxnLf4nQrmwVLqNz2AzMNRARJ%2Bh6hEAfbrfGxW3H8e%2FV6OwYOXcvIXTNcTTah1%2F3gmyBYjQFAmGfpGTuCphAP%2BUe6wAkbow7XG3anCZUoN0v4yo6%2Fb1KmkIJKSnWZcxeq4Oys1PfSzOqYUaeS4ab819yiu8MErrtXPnBYm4Xpwe%2FRqqt6J%2FplckW4U%2BP%2BS2Xp689JqMVdkFqpfCFhuQNME%2BT2YD5kZpxljXpjxhH%2FxkcI1nCn39IXYSr0KguMGSRaI024brMtBYhGgleah5xq%2BstJXpPSpHOT4x39uTNznXxnyRchb%2BKqVjb6DskMSeNrN2N7ricgfPjOB2sCjPkJpfCaHRKcrejEXtjfpm4wn3SWKUgRbv1xJmjXs7uDpWSinFc%2FTyQ%2BEoqtjC1lsjBBjqkATyqGwK4vNAN%2Fon8RXwb5codxdoPQ3mR0H0ddVGr0N8j5KNWpdIhZ4UFbnMyKFyha%2FHWum1aPwP%2Fu92O0zqq09B7NPGbl%2Ft9zt7phTRwHDSL%2F%2FL8ErZIDH1Mvc4UPulXtX%2BcAljNamyI41qi8nWll91ilfU4BCTUMeHJ7itUbgENcH43TiYcJIpZvlNe9Nu7CQ173fRfjemB3fTIp69K3l%2BnHXYX&X-Amz-Signature=4e243ceda321cb1a8cf2d34994f9f5ad5bd48411629a690a945575bc038bb43f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVZMRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDeZKz0kFAJoaSYdO0Nuezfg554VcqQZYjwcXRFRFQp2QIhAPfW8G4g0hX5bdUqT8I%2FOHp9Ob7bAfHusqo2Ax7v71S1Kv8DCBsQABoMNjM3NDIzMTgzODA1IgyE9VLb4U9s3F1l0aYq3ANtB1mJF6vRkvtBSidI8uFyIHvrz7YrU1hYLngA49WyNQe1EbzAPjdZTaGWC3PiBkGqaChy8qKUdjKC8xi%2FAKdNsw0eDdqIxnewwFxzlB0egJz04kpY6spu2IxT60uJaKTlRhdYEJjIl%2FYvnkvNA84fMqety9pohtTGrvVrEjop7pfwgh97xPQQQGFwzO8uKba5s8wvxl3KwsPrDcYYGK4CLK%2FtEkb6hlVOAXN03AvOJOPkpxnLf4nQrmwVLqNz2AzMNRARJ%2Bh6hEAfbrfGxW3H8e%2FV6OwYOXcvIXTNcTTah1%2F3gmyBYjQFAmGfpGTuCphAP%2BUe6wAkbow7XG3anCZUoN0v4yo6%2Fb1KmkIJKSnWZcxeq4Oys1PfSzOqYUaeS4ab819yiu8MErrtXPnBYm4Xpwe%2FRqqt6J%2FplckW4U%2BP%2BS2Xp689JqMVdkFqpfCFhuQNME%2BT2YD5kZpxljXpjxhH%2FxkcI1nCn39IXYSr0KguMGSRaI024brMtBYhGgleah5xq%2BstJXpPSpHOT4x39uTNznXxnyRchb%2BKqVjb6DskMSeNrN2N7ricgfPjOB2sCjPkJpfCaHRKcrejEXtjfpm4wn3SWKUgRbv1xJmjXs7uDpWSinFc%2FTyQ%2BEoqtjC1lsjBBjqkATyqGwK4vNAN%2Fon8RXwb5codxdoPQ3mR0H0ddVGr0N8j5KNWpdIhZ4UFbnMyKFyha%2FHWum1aPwP%2Fu92O0zqq09B7NPGbl%2Ft9zt7phTRwHDSL%2F%2FL8ErZIDH1Mvc4UPulXtX%2BcAljNamyI41qi8nWll91ilfU4BCTUMeHJ7itUbgENcH43TiYcJIpZvlNe9Nu7CQ173fRfjemB3fTIp69K3l%2BnHXYX&X-Amz-Signature=9e65fe9aa7628e3468587f64d87696fa80c43c74b3ae812cad3d3b3c8766abca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVZMRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDeZKz0kFAJoaSYdO0Nuezfg554VcqQZYjwcXRFRFQp2QIhAPfW8G4g0hX5bdUqT8I%2FOHp9Ob7bAfHusqo2Ax7v71S1Kv8DCBsQABoMNjM3NDIzMTgzODA1IgyE9VLb4U9s3F1l0aYq3ANtB1mJF6vRkvtBSidI8uFyIHvrz7YrU1hYLngA49WyNQe1EbzAPjdZTaGWC3PiBkGqaChy8qKUdjKC8xi%2FAKdNsw0eDdqIxnewwFxzlB0egJz04kpY6spu2IxT60uJaKTlRhdYEJjIl%2FYvnkvNA84fMqety9pohtTGrvVrEjop7pfwgh97xPQQQGFwzO8uKba5s8wvxl3KwsPrDcYYGK4CLK%2FtEkb6hlVOAXN03AvOJOPkpxnLf4nQrmwVLqNz2AzMNRARJ%2Bh6hEAfbrfGxW3H8e%2FV6OwYOXcvIXTNcTTah1%2F3gmyBYjQFAmGfpGTuCphAP%2BUe6wAkbow7XG3anCZUoN0v4yo6%2Fb1KmkIJKSnWZcxeq4Oys1PfSzOqYUaeS4ab819yiu8MErrtXPnBYm4Xpwe%2FRqqt6J%2FplckW4U%2BP%2BS2Xp689JqMVdkFqpfCFhuQNME%2BT2YD5kZpxljXpjxhH%2FxkcI1nCn39IXYSr0KguMGSRaI024brMtBYhGgleah5xq%2BstJXpPSpHOT4x39uTNznXxnyRchb%2BKqVjb6DskMSeNrN2N7ricgfPjOB2sCjPkJpfCaHRKcrejEXtjfpm4wn3SWKUgRbv1xJmjXs7uDpWSinFc%2FTyQ%2BEoqtjC1lsjBBjqkATyqGwK4vNAN%2Fon8RXwb5codxdoPQ3mR0H0ddVGr0N8j5KNWpdIhZ4UFbnMyKFyha%2FHWum1aPwP%2Fu92O0zqq09B7NPGbl%2Ft9zt7phTRwHDSL%2F%2FL8ErZIDH1Mvc4UPulXtX%2BcAljNamyI41qi8nWll91ilfU4BCTUMeHJ7itUbgENcH43TiYcJIpZvlNe9Nu7CQ173fRfjemB3fTIp69K3l%2BnHXYX&X-Amz-Signature=fd61da11e75367dce990778b17f82aea67df0ba3761ddeea9b3dc93f732c0a00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVZMRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDeZKz0kFAJoaSYdO0Nuezfg554VcqQZYjwcXRFRFQp2QIhAPfW8G4g0hX5bdUqT8I%2FOHp9Ob7bAfHusqo2Ax7v71S1Kv8DCBsQABoMNjM3NDIzMTgzODA1IgyE9VLb4U9s3F1l0aYq3ANtB1mJF6vRkvtBSidI8uFyIHvrz7YrU1hYLngA49WyNQe1EbzAPjdZTaGWC3PiBkGqaChy8qKUdjKC8xi%2FAKdNsw0eDdqIxnewwFxzlB0egJz04kpY6spu2IxT60uJaKTlRhdYEJjIl%2FYvnkvNA84fMqety9pohtTGrvVrEjop7pfwgh97xPQQQGFwzO8uKba5s8wvxl3KwsPrDcYYGK4CLK%2FtEkb6hlVOAXN03AvOJOPkpxnLf4nQrmwVLqNz2AzMNRARJ%2Bh6hEAfbrfGxW3H8e%2FV6OwYOXcvIXTNcTTah1%2F3gmyBYjQFAmGfpGTuCphAP%2BUe6wAkbow7XG3anCZUoN0v4yo6%2Fb1KmkIJKSnWZcxeq4Oys1PfSzOqYUaeS4ab819yiu8MErrtXPnBYm4Xpwe%2FRqqt6J%2FplckW4U%2BP%2BS2Xp689JqMVdkFqpfCFhuQNME%2BT2YD5kZpxljXpjxhH%2FxkcI1nCn39IXYSr0KguMGSRaI024brMtBYhGgleah5xq%2BstJXpPSpHOT4x39uTNznXxnyRchb%2BKqVjb6DskMSeNrN2N7ricgfPjOB2sCjPkJpfCaHRKcrejEXtjfpm4wn3SWKUgRbv1xJmjXs7uDpWSinFc%2FTyQ%2BEoqtjC1lsjBBjqkATyqGwK4vNAN%2Fon8RXwb5codxdoPQ3mR0H0ddVGr0N8j5KNWpdIhZ4UFbnMyKFyha%2FHWum1aPwP%2Fu92O0zqq09B7NPGbl%2Ft9zt7phTRwHDSL%2F%2FL8ErZIDH1Mvc4UPulXtX%2BcAljNamyI41qi8nWll91ilfU4BCTUMeHJ7itUbgENcH43TiYcJIpZvlNe9Nu7CQ173fRfjemB3fTIp69K3l%2BnHXYX&X-Amz-Signature=a7751e8a6fc07e6546e3f6353a4de639dcc8a42e3a2faab2005fe3af781733f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KUVZMRH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDeZKz0kFAJoaSYdO0Nuezfg554VcqQZYjwcXRFRFQp2QIhAPfW8G4g0hX5bdUqT8I%2FOHp9Ob7bAfHusqo2Ax7v71S1Kv8DCBsQABoMNjM3NDIzMTgzODA1IgyE9VLb4U9s3F1l0aYq3ANtB1mJF6vRkvtBSidI8uFyIHvrz7YrU1hYLngA49WyNQe1EbzAPjdZTaGWC3PiBkGqaChy8qKUdjKC8xi%2FAKdNsw0eDdqIxnewwFxzlB0egJz04kpY6spu2IxT60uJaKTlRhdYEJjIl%2FYvnkvNA84fMqety9pohtTGrvVrEjop7pfwgh97xPQQQGFwzO8uKba5s8wvxl3KwsPrDcYYGK4CLK%2FtEkb6hlVOAXN03AvOJOPkpxnLf4nQrmwVLqNz2AzMNRARJ%2Bh6hEAfbrfGxW3H8e%2FV6OwYOXcvIXTNcTTah1%2F3gmyBYjQFAmGfpGTuCphAP%2BUe6wAkbow7XG3anCZUoN0v4yo6%2Fb1KmkIJKSnWZcxeq4Oys1PfSzOqYUaeS4ab819yiu8MErrtXPnBYm4Xpwe%2FRqqt6J%2FplckW4U%2BP%2BS2Xp689JqMVdkFqpfCFhuQNME%2BT2YD5kZpxljXpjxhH%2FxkcI1nCn39IXYSr0KguMGSRaI024brMtBYhGgleah5xq%2BstJXpPSpHOT4x39uTNznXxnyRchb%2BKqVjb6DskMSeNrN2N7ricgfPjOB2sCjPkJpfCaHRKcrejEXtjfpm4wn3SWKUgRbv1xJmjXs7uDpWSinFc%2FTyQ%2BEoqtjC1lsjBBjqkATyqGwK4vNAN%2Fon8RXwb5codxdoPQ3mR0H0ddVGr0N8j5KNWpdIhZ4UFbnMyKFyha%2FHWum1aPwP%2Fu92O0zqq09B7NPGbl%2Ft9zt7phTRwHDSL%2F%2FL8ErZIDH1Mvc4UPulXtX%2BcAljNamyI41qi8nWll91ilfU4BCTUMeHJ7itUbgENcH43TiYcJIpZvlNe9Nu7CQ173fRfjemB3fTIp69K3l%2BnHXYX&X-Amz-Signature=a189733bf8701f167a1a7216745199d2064dc45038e284cb3c398ae7327152e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
