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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NKINZP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpNMqSO1AhAd7kAWTLSaPGkMVtT07sYwXQgnjB4%2Bq8AiEA3%2Ff19W28p6W7jLjCBTxjApOlygIQt0xQ%2FXly8%2FhzG4Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE%2FV6hQApBC2s%2BbVxCrcA09b%2FUl1oxdaNzReSZBAbsTXH1vU15u1RIfeHWxjMTTwI1j5HDPzKXV2KoKRzdRUa3SQsnbYdCJQ%2BjZqilj5aCssd%2BiXwi45zJOtbv3SRoheMljIOH5NsFHlNE5JsHzebyB5%2BRLuL8znYk8rki8uqKwakb31AxUiWY9wNr%2Bueg%2BOdR0tPWwA4A0k3Pv1J7uBVArNhT%2B%2BSMXJdKpaD7OqhA1R6xzMML1zkbdkFuPa8q415bWgzl770zYfs6uZ2p7XDPnR77pv9px3AKNqlocpyfTnsD8JVF5woC2BtmA4G4SeJBa2elzlw8Ebi6cp2KabT36RzwoV8wfN9ECs9fpuewOey6mEXzS97R04%2F2eL5Rb4IkrLwsVv0raz6eMAqG1CZ%2BGtX%2BdmuJMMXONKXAECEnuQIxfrzK%2FFHvghmiBzNT%2Fu846IVzRKHfI8pd0AYq%2BUZIEGrRANhRgL4kyP6C24z5I%2BxATYiQqG6A3My0PeGoziiS7ieZNxRRmtPnMp42vY0VKfB7BKmF0SvZjJaVGtubvvvXp1fNSGCSCcrp6uE%2FWI0hHFWWEL%2B9jFGD42zqXHQ0jq9DZKgydpPxwjwJuA7TgDF8M0SuNxidgfMa2TOpvvIUpsHBaKxCaUnsMSMK30gb0GOqUBjqnGgzCrmTxcgC9GmqDpp6YglwVN3J%2FBxsfBiTQOFSaJob2g9wumP28DVcXRGd7BLbjqI%2FTB8%2BVb1sZlzidvODFakNPCrNKiROLdidOsdBXqtd%2F858cGzXJtpaimpLrRnVtLfCS4AY65tyeqslKY2n0UA%2B66iVYqKVfs1zVfXDIJrrF2nxJKJTEDJ9n2IiaA7O4A7PeoIR2p6zafF4TUdWjrVyE%2F&X-Amz-Signature=d86214a1e501704f89e6a73dae99d343b802a4ab45071383c1ff9581e6f0cb8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NKINZP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpNMqSO1AhAd7kAWTLSaPGkMVtT07sYwXQgnjB4%2Bq8AiEA3%2Ff19W28p6W7jLjCBTxjApOlygIQt0xQ%2FXly8%2FhzG4Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE%2FV6hQApBC2s%2BbVxCrcA09b%2FUl1oxdaNzReSZBAbsTXH1vU15u1RIfeHWxjMTTwI1j5HDPzKXV2KoKRzdRUa3SQsnbYdCJQ%2BjZqilj5aCssd%2BiXwi45zJOtbv3SRoheMljIOH5NsFHlNE5JsHzebyB5%2BRLuL8znYk8rki8uqKwakb31AxUiWY9wNr%2Bueg%2BOdR0tPWwA4A0k3Pv1J7uBVArNhT%2B%2BSMXJdKpaD7OqhA1R6xzMML1zkbdkFuPa8q415bWgzl770zYfs6uZ2p7XDPnR77pv9px3AKNqlocpyfTnsD8JVF5woC2BtmA4G4SeJBa2elzlw8Ebi6cp2KabT36RzwoV8wfN9ECs9fpuewOey6mEXzS97R04%2F2eL5Rb4IkrLwsVv0raz6eMAqG1CZ%2BGtX%2BdmuJMMXONKXAECEnuQIxfrzK%2FFHvghmiBzNT%2Fu846IVzRKHfI8pd0AYq%2BUZIEGrRANhRgL4kyP6C24z5I%2BxATYiQqG6A3My0PeGoziiS7ieZNxRRmtPnMp42vY0VKfB7BKmF0SvZjJaVGtubvvvXp1fNSGCSCcrp6uE%2FWI0hHFWWEL%2B9jFGD42zqXHQ0jq9DZKgydpPxwjwJuA7TgDF8M0SuNxidgfMa2TOpvvIUpsHBaKxCaUnsMSMK30gb0GOqUBjqnGgzCrmTxcgC9GmqDpp6YglwVN3J%2FBxsfBiTQOFSaJob2g9wumP28DVcXRGd7BLbjqI%2FTB8%2BVb1sZlzidvODFakNPCrNKiROLdidOsdBXqtd%2F858cGzXJtpaimpLrRnVtLfCS4AY65tyeqslKY2n0UA%2B66iVYqKVfs1zVfXDIJrrF2nxJKJTEDJ9n2IiaA7O4A7PeoIR2p6zafF4TUdWjrVyE%2F&X-Amz-Signature=cd8ec2eae4d35ebedc244e8c3a757c0ecf16322574ca99dcd9ffe307248758d6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NKINZP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpNMqSO1AhAd7kAWTLSaPGkMVtT07sYwXQgnjB4%2Bq8AiEA3%2Ff19W28p6W7jLjCBTxjApOlygIQt0xQ%2FXly8%2FhzG4Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE%2FV6hQApBC2s%2BbVxCrcA09b%2FUl1oxdaNzReSZBAbsTXH1vU15u1RIfeHWxjMTTwI1j5HDPzKXV2KoKRzdRUa3SQsnbYdCJQ%2BjZqilj5aCssd%2BiXwi45zJOtbv3SRoheMljIOH5NsFHlNE5JsHzebyB5%2BRLuL8znYk8rki8uqKwakb31AxUiWY9wNr%2Bueg%2BOdR0tPWwA4A0k3Pv1J7uBVArNhT%2B%2BSMXJdKpaD7OqhA1R6xzMML1zkbdkFuPa8q415bWgzl770zYfs6uZ2p7XDPnR77pv9px3AKNqlocpyfTnsD8JVF5woC2BtmA4G4SeJBa2elzlw8Ebi6cp2KabT36RzwoV8wfN9ECs9fpuewOey6mEXzS97R04%2F2eL5Rb4IkrLwsVv0raz6eMAqG1CZ%2BGtX%2BdmuJMMXONKXAECEnuQIxfrzK%2FFHvghmiBzNT%2Fu846IVzRKHfI8pd0AYq%2BUZIEGrRANhRgL4kyP6C24z5I%2BxATYiQqG6A3My0PeGoziiS7ieZNxRRmtPnMp42vY0VKfB7BKmF0SvZjJaVGtubvvvXp1fNSGCSCcrp6uE%2FWI0hHFWWEL%2B9jFGD42zqXHQ0jq9DZKgydpPxwjwJuA7TgDF8M0SuNxidgfMa2TOpvvIUpsHBaKxCaUnsMSMK30gb0GOqUBjqnGgzCrmTxcgC9GmqDpp6YglwVN3J%2FBxsfBiTQOFSaJob2g9wumP28DVcXRGd7BLbjqI%2FTB8%2BVb1sZlzidvODFakNPCrNKiROLdidOsdBXqtd%2F858cGzXJtpaimpLrRnVtLfCS4AY65tyeqslKY2n0UA%2B66iVYqKVfs1zVfXDIJrrF2nxJKJTEDJ9n2IiaA7O4A7PeoIR2p6zafF4TUdWjrVyE%2F&X-Amz-Signature=e9a225bd2ec6b4723e81ffbea6109b3745363efb620260da48058035d2d87860&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NKINZP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpNMqSO1AhAd7kAWTLSaPGkMVtT07sYwXQgnjB4%2Bq8AiEA3%2Ff19W28p6W7jLjCBTxjApOlygIQt0xQ%2FXly8%2FhzG4Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE%2FV6hQApBC2s%2BbVxCrcA09b%2FUl1oxdaNzReSZBAbsTXH1vU15u1RIfeHWxjMTTwI1j5HDPzKXV2KoKRzdRUa3SQsnbYdCJQ%2BjZqilj5aCssd%2BiXwi45zJOtbv3SRoheMljIOH5NsFHlNE5JsHzebyB5%2BRLuL8znYk8rki8uqKwakb31AxUiWY9wNr%2Bueg%2BOdR0tPWwA4A0k3Pv1J7uBVArNhT%2B%2BSMXJdKpaD7OqhA1R6xzMML1zkbdkFuPa8q415bWgzl770zYfs6uZ2p7XDPnR77pv9px3AKNqlocpyfTnsD8JVF5woC2BtmA4G4SeJBa2elzlw8Ebi6cp2KabT36RzwoV8wfN9ECs9fpuewOey6mEXzS97R04%2F2eL5Rb4IkrLwsVv0raz6eMAqG1CZ%2BGtX%2BdmuJMMXONKXAECEnuQIxfrzK%2FFHvghmiBzNT%2Fu846IVzRKHfI8pd0AYq%2BUZIEGrRANhRgL4kyP6C24z5I%2BxATYiQqG6A3My0PeGoziiS7ieZNxRRmtPnMp42vY0VKfB7BKmF0SvZjJaVGtubvvvXp1fNSGCSCcrp6uE%2FWI0hHFWWEL%2B9jFGD42zqXHQ0jq9DZKgydpPxwjwJuA7TgDF8M0SuNxidgfMa2TOpvvIUpsHBaKxCaUnsMSMK30gb0GOqUBjqnGgzCrmTxcgC9GmqDpp6YglwVN3J%2FBxsfBiTQOFSaJob2g9wumP28DVcXRGd7BLbjqI%2FTB8%2BVb1sZlzidvODFakNPCrNKiROLdidOsdBXqtd%2F858cGzXJtpaimpLrRnVtLfCS4AY65tyeqslKY2n0UA%2B66iVYqKVfs1zVfXDIJrrF2nxJKJTEDJ9n2IiaA7O4A7PeoIR2p6zafF4TUdWjrVyE%2F&X-Amz-Signature=1b0be904b02e1cd701607c006e6fda61fdb8c931ae5a817fbd2c91fda1e23d32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NKINZP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpNMqSO1AhAd7kAWTLSaPGkMVtT07sYwXQgnjB4%2Bq8AiEA3%2Ff19W28p6W7jLjCBTxjApOlygIQt0xQ%2FXly8%2FhzG4Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE%2FV6hQApBC2s%2BbVxCrcA09b%2FUl1oxdaNzReSZBAbsTXH1vU15u1RIfeHWxjMTTwI1j5HDPzKXV2KoKRzdRUa3SQsnbYdCJQ%2BjZqilj5aCssd%2BiXwi45zJOtbv3SRoheMljIOH5NsFHlNE5JsHzebyB5%2BRLuL8znYk8rki8uqKwakb31AxUiWY9wNr%2Bueg%2BOdR0tPWwA4A0k3Pv1J7uBVArNhT%2B%2BSMXJdKpaD7OqhA1R6xzMML1zkbdkFuPa8q415bWgzl770zYfs6uZ2p7XDPnR77pv9px3AKNqlocpyfTnsD8JVF5woC2BtmA4G4SeJBa2elzlw8Ebi6cp2KabT36RzwoV8wfN9ECs9fpuewOey6mEXzS97R04%2F2eL5Rb4IkrLwsVv0raz6eMAqG1CZ%2BGtX%2BdmuJMMXONKXAECEnuQIxfrzK%2FFHvghmiBzNT%2Fu846IVzRKHfI8pd0AYq%2BUZIEGrRANhRgL4kyP6C24z5I%2BxATYiQqG6A3My0PeGoziiS7ieZNxRRmtPnMp42vY0VKfB7BKmF0SvZjJaVGtubvvvXp1fNSGCSCcrp6uE%2FWI0hHFWWEL%2B9jFGD42zqXHQ0jq9DZKgydpPxwjwJuA7TgDF8M0SuNxidgfMa2TOpvvIUpsHBaKxCaUnsMSMK30gb0GOqUBjqnGgzCrmTxcgC9GmqDpp6YglwVN3J%2FBxsfBiTQOFSaJob2g9wumP28DVcXRGd7BLbjqI%2FTB8%2BVb1sZlzidvODFakNPCrNKiROLdidOsdBXqtd%2F858cGzXJtpaimpLrRnVtLfCS4AY65tyeqslKY2n0UA%2B66iVYqKVfs1zVfXDIJrrF2nxJKJTEDJ9n2IiaA7O4A7PeoIR2p6zafF4TUdWjrVyE%2F&X-Amz-Signature=2bccb2f17137b8aa605c6b59fb96aaa546b5fd4345bb9f27d52babbab406bdb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NKINZP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpNMqSO1AhAd7kAWTLSaPGkMVtT07sYwXQgnjB4%2Bq8AiEA3%2Ff19W28p6W7jLjCBTxjApOlygIQt0xQ%2FXly8%2FhzG4Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE%2FV6hQApBC2s%2BbVxCrcA09b%2FUl1oxdaNzReSZBAbsTXH1vU15u1RIfeHWxjMTTwI1j5HDPzKXV2KoKRzdRUa3SQsnbYdCJQ%2BjZqilj5aCssd%2BiXwi45zJOtbv3SRoheMljIOH5NsFHlNE5JsHzebyB5%2BRLuL8znYk8rki8uqKwakb31AxUiWY9wNr%2Bueg%2BOdR0tPWwA4A0k3Pv1J7uBVArNhT%2B%2BSMXJdKpaD7OqhA1R6xzMML1zkbdkFuPa8q415bWgzl770zYfs6uZ2p7XDPnR77pv9px3AKNqlocpyfTnsD8JVF5woC2BtmA4G4SeJBa2elzlw8Ebi6cp2KabT36RzwoV8wfN9ECs9fpuewOey6mEXzS97R04%2F2eL5Rb4IkrLwsVv0raz6eMAqG1CZ%2BGtX%2BdmuJMMXONKXAECEnuQIxfrzK%2FFHvghmiBzNT%2Fu846IVzRKHfI8pd0AYq%2BUZIEGrRANhRgL4kyP6C24z5I%2BxATYiQqG6A3My0PeGoziiS7ieZNxRRmtPnMp42vY0VKfB7BKmF0SvZjJaVGtubvvvXp1fNSGCSCcrp6uE%2FWI0hHFWWEL%2B9jFGD42zqXHQ0jq9DZKgydpPxwjwJuA7TgDF8M0SuNxidgfMa2TOpvvIUpsHBaKxCaUnsMSMK30gb0GOqUBjqnGgzCrmTxcgC9GmqDpp6YglwVN3J%2FBxsfBiTQOFSaJob2g9wumP28DVcXRGd7BLbjqI%2FTB8%2BVb1sZlzidvODFakNPCrNKiROLdidOsdBXqtd%2F858cGzXJtpaimpLrRnVtLfCS4AY65tyeqslKY2n0UA%2B66iVYqKVfs1zVfXDIJrrF2nxJKJTEDJ9n2IiaA7O4A7PeoIR2p6zafF4TUdWjrVyE%2F&X-Amz-Signature=8ca0f5e9759635bf5bbe46030779ce35ee5f2aff4a11051f81e646f21f7c7ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NKINZP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpNMqSO1AhAd7kAWTLSaPGkMVtT07sYwXQgnjB4%2Bq8AiEA3%2Ff19W28p6W7jLjCBTxjApOlygIQt0xQ%2FXly8%2FhzG4Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE%2FV6hQApBC2s%2BbVxCrcA09b%2FUl1oxdaNzReSZBAbsTXH1vU15u1RIfeHWxjMTTwI1j5HDPzKXV2KoKRzdRUa3SQsnbYdCJQ%2BjZqilj5aCssd%2BiXwi45zJOtbv3SRoheMljIOH5NsFHlNE5JsHzebyB5%2BRLuL8znYk8rki8uqKwakb31AxUiWY9wNr%2Bueg%2BOdR0tPWwA4A0k3Pv1J7uBVArNhT%2B%2BSMXJdKpaD7OqhA1R6xzMML1zkbdkFuPa8q415bWgzl770zYfs6uZ2p7XDPnR77pv9px3AKNqlocpyfTnsD8JVF5woC2BtmA4G4SeJBa2elzlw8Ebi6cp2KabT36RzwoV8wfN9ECs9fpuewOey6mEXzS97R04%2F2eL5Rb4IkrLwsVv0raz6eMAqG1CZ%2BGtX%2BdmuJMMXONKXAECEnuQIxfrzK%2FFHvghmiBzNT%2Fu846IVzRKHfI8pd0AYq%2BUZIEGrRANhRgL4kyP6C24z5I%2BxATYiQqG6A3My0PeGoziiS7ieZNxRRmtPnMp42vY0VKfB7BKmF0SvZjJaVGtubvvvXp1fNSGCSCcrp6uE%2FWI0hHFWWEL%2B9jFGD42zqXHQ0jq9DZKgydpPxwjwJuA7TgDF8M0SuNxidgfMa2TOpvvIUpsHBaKxCaUnsMSMK30gb0GOqUBjqnGgzCrmTxcgC9GmqDpp6YglwVN3J%2FBxsfBiTQOFSaJob2g9wumP28DVcXRGd7BLbjqI%2FTB8%2BVb1sZlzidvODFakNPCrNKiROLdidOsdBXqtd%2F858cGzXJtpaimpLrRnVtLfCS4AY65tyeqslKY2n0UA%2B66iVYqKVfs1zVfXDIJrrF2nxJKJTEDJ9n2IiaA7O4A7PeoIR2p6zafF4TUdWjrVyE%2F&X-Amz-Signature=4459fae3cc6a560af2d494aac6e2dc2dfc5c3d28615e7541be438a2b04db5336&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5NKINZP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCpNMqSO1AhAd7kAWTLSaPGkMVtT07sYwXQgnjB4%2Bq8AiEA3%2Ff19W28p6W7jLjCBTxjApOlygIQt0xQ%2FXly8%2FhzG4Aq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDE%2FV6hQApBC2s%2BbVxCrcA09b%2FUl1oxdaNzReSZBAbsTXH1vU15u1RIfeHWxjMTTwI1j5HDPzKXV2KoKRzdRUa3SQsnbYdCJQ%2BjZqilj5aCssd%2BiXwi45zJOtbv3SRoheMljIOH5NsFHlNE5JsHzebyB5%2BRLuL8znYk8rki8uqKwakb31AxUiWY9wNr%2Bueg%2BOdR0tPWwA4A0k3Pv1J7uBVArNhT%2B%2BSMXJdKpaD7OqhA1R6xzMML1zkbdkFuPa8q415bWgzl770zYfs6uZ2p7XDPnR77pv9px3AKNqlocpyfTnsD8JVF5woC2BtmA4G4SeJBa2elzlw8Ebi6cp2KabT36RzwoV8wfN9ECs9fpuewOey6mEXzS97R04%2F2eL5Rb4IkrLwsVv0raz6eMAqG1CZ%2BGtX%2BdmuJMMXONKXAECEnuQIxfrzK%2FFHvghmiBzNT%2Fu846IVzRKHfI8pd0AYq%2BUZIEGrRANhRgL4kyP6C24z5I%2BxATYiQqG6A3My0PeGoziiS7ieZNxRRmtPnMp42vY0VKfB7BKmF0SvZjJaVGtubvvvXp1fNSGCSCcrp6uE%2FWI0hHFWWEL%2B9jFGD42zqXHQ0jq9DZKgydpPxwjwJuA7TgDF8M0SuNxidgfMa2TOpvvIUpsHBaKxCaUnsMSMK30gb0GOqUBjqnGgzCrmTxcgC9GmqDpp6YglwVN3J%2FBxsfBiTQOFSaJob2g9wumP28DVcXRGd7BLbjqI%2FTB8%2BVb1sZlzidvODFakNPCrNKiROLdidOsdBXqtd%2F858cGzXJtpaimpLrRnVtLfCS4AY65tyeqslKY2n0UA%2B66iVYqKVfs1zVfXDIJrrF2nxJKJTEDJ9n2IiaA7O4A7PeoIR2p6zafF4TUdWjrVyE%2F&X-Amz-Signature=819faa4030984e5e3dafd411d239caf6d185c93f2ff1caa4a62a301dc8a97493&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
