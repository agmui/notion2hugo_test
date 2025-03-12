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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMO26GM3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC5EAJIDVowmAF4oKP7GXPa1aFlFwCHbwF1vkEOlkPo8wIgH1INfQ8ZniHBksQnyIyLcJ%2FjRgHvQ7DqQgLpWnlRr%2F8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FoL5KRui64Z2HOayrcAypwS154aPc%2FtQIU5RUo1rv1f5TZF2Iu8ORWk0fgHzZHWcBw13Qq7II3lmOlcZoqWkAUTQcNbzVPja5fuDL4KuGARQ%2FtW%2BteWmaQxiA4wNb4vivxDdHYerNr6QUJimEaX9Ysvm3hHq4QBWRavg78iPPV0WmWZqa1RkSfEtElX0flxz7foGouptcqV%2BpxzRz80egEBfe%2FqYJkaCGzluiTCqAwcSGKyrGKO1pdgp%2F0gJWZP%2F%2FDthsnf%2F7226zEgY7nYRcPdEEOuYm9AvAtt9W4QFP1U769dOUKqei6jH83OUETLtUZ42EFcre3Kxmjw%2B3KuK6IM71hOzb41K0rC%2FjzcAcaCWnsZpoqC%2FN963S5%2Frsmqd9IZzw03edsx11jAIgtyrtrED4wD%2BZ3JR5ARAwoA0bykulUZprUZjyYT75duLoXogYT%2BMdx0BfZvgvZE0EuJOWS72Z5erjSC8KHMkw0yN9ozPGBJhB2d5m6T4QpzCDh1usWYwd1k96CrxcSHlCwTCz0LjMgT%2FRCihPksVRQVxHE6QezxNnB257aMDNOJQFfD%2FgRQVXm7IbS71hU%2FjGv6Xtu%2F7EY6RHtkiA5d7Gb7ioW1uMc0Cv9uR0ekPt8j5VAitdhMjQAZQDv6yVSMLGOw74GOqUB1t4FuZxQzLNBwKK9wjDvxql6Rl1MqlvE4JwUcROUyAXgOQad%2Bnq%2FLiOmTr5bvqC4t8ud1UwCakSwcJ13L9ySJkkyoanbjnB8GE3pzTFzQJcPB6LuC7NHBYFuBppnZ4GW3%2B8v%2BzLvJIbRSb0vYXahaeGpurUrwxwKDMMYd80W5pCol5oJfgUF%2FqYxIrNta5W7YyOEGrFf5KY7v7amRU6Pi0QpDkms&X-Amz-Signature=2d932b380bd007c6d4a0b654825e5992c6a1259fffb738c033dbe6f4a1ad4481&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMO26GM3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC5EAJIDVowmAF4oKP7GXPa1aFlFwCHbwF1vkEOlkPo8wIgH1INfQ8ZniHBksQnyIyLcJ%2FjRgHvQ7DqQgLpWnlRr%2F8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FoL5KRui64Z2HOayrcAypwS154aPc%2FtQIU5RUo1rv1f5TZF2Iu8ORWk0fgHzZHWcBw13Qq7II3lmOlcZoqWkAUTQcNbzVPja5fuDL4KuGARQ%2FtW%2BteWmaQxiA4wNb4vivxDdHYerNr6QUJimEaX9Ysvm3hHq4QBWRavg78iPPV0WmWZqa1RkSfEtElX0flxz7foGouptcqV%2BpxzRz80egEBfe%2FqYJkaCGzluiTCqAwcSGKyrGKO1pdgp%2F0gJWZP%2F%2FDthsnf%2F7226zEgY7nYRcPdEEOuYm9AvAtt9W4QFP1U769dOUKqei6jH83OUETLtUZ42EFcre3Kxmjw%2B3KuK6IM71hOzb41K0rC%2FjzcAcaCWnsZpoqC%2FN963S5%2Frsmqd9IZzw03edsx11jAIgtyrtrED4wD%2BZ3JR5ARAwoA0bykulUZprUZjyYT75duLoXogYT%2BMdx0BfZvgvZE0EuJOWS72Z5erjSC8KHMkw0yN9ozPGBJhB2d5m6T4QpzCDh1usWYwd1k96CrxcSHlCwTCz0LjMgT%2FRCihPksVRQVxHE6QezxNnB257aMDNOJQFfD%2FgRQVXm7IbS71hU%2FjGv6Xtu%2F7EY6RHtkiA5d7Gb7ioW1uMc0Cv9uR0ekPt8j5VAitdhMjQAZQDv6yVSMLGOw74GOqUB1t4FuZxQzLNBwKK9wjDvxql6Rl1MqlvE4JwUcROUyAXgOQad%2Bnq%2FLiOmTr5bvqC4t8ud1UwCakSwcJ13L9ySJkkyoanbjnB8GE3pzTFzQJcPB6LuC7NHBYFuBppnZ4GW3%2B8v%2BzLvJIbRSb0vYXahaeGpurUrwxwKDMMYd80W5pCol5oJfgUF%2FqYxIrNta5W7YyOEGrFf5KY7v7amRU6Pi0QpDkms&X-Amz-Signature=dc9c45a2d7791eccd37ebedc9b5d2637e700b4e6388432cd2f29b2e362a9dc7c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMO26GM3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC5EAJIDVowmAF4oKP7GXPa1aFlFwCHbwF1vkEOlkPo8wIgH1INfQ8ZniHBksQnyIyLcJ%2FjRgHvQ7DqQgLpWnlRr%2F8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FoL5KRui64Z2HOayrcAypwS154aPc%2FtQIU5RUo1rv1f5TZF2Iu8ORWk0fgHzZHWcBw13Qq7II3lmOlcZoqWkAUTQcNbzVPja5fuDL4KuGARQ%2FtW%2BteWmaQxiA4wNb4vivxDdHYerNr6QUJimEaX9Ysvm3hHq4QBWRavg78iPPV0WmWZqa1RkSfEtElX0flxz7foGouptcqV%2BpxzRz80egEBfe%2FqYJkaCGzluiTCqAwcSGKyrGKO1pdgp%2F0gJWZP%2F%2FDthsnf%2F7226zEgY7nYRcPdEEOuYm9AvAtt9W4QFP1U769dOUKqei6jH83OUETLtUZ42EFcre3Kxmjw%2B3KuK6IM71hOzb41K0rC%2FjzcAcaCWnsZpoqC%2FN963S5%2Frsmqd9IZzw03edsx11jAIgtyrtrED4wD%2BZ3JR5ARAwoA0bykulUZprUZjyYT75duLoXogYT%2BMdx0BfZvgvZE0EuJOWS72Z5erjSC8KHMkw0yN9ozPGBJhB2d5m6T4QpzCDh1usWYwd1k96CrxcSHlCwTCz0LjMgT%2FRCihPksVRQVxHE6QezxNnB257aMDNOJQFfD%2FgRQVXm7IbS71hU%2FjGv6Xtu%2F7EY6RHtkiA5d7Gb7ioW1uMc0Cv9uR0ekPt8j5VAitdhMjQAZQDv6yVSMLGOw74GOqUB1t4FuZxQzLNBwKK9wjDvxql6Rl1MqlvE4JwUcROUyAXgOQad%2Bnq%2FLiOmTr5bvqC4t8ud1UwCakSwcJ13L9ySJkkyoanbjnB8GE3pzTFzQJcPB6LuC7NHBYFuBppnZ4GW3%2B8v%2BzLvJIbRSb0vYXahaeGpurUrwxwKDMMYd80W5pCol5oJfgUF%2FqYxIrNta5W7YyOEGrFf5KY7v7amRU6Pi0QpDkms&X-Amz-Signature=5e4b1ecffbd8ea9edbb4ba9a2ec6459cf2a32b2e158de98d9710edd8ba14b76a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMO26GM3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC5EAJIDVowmAF4oKP7GXPa1aFlFwCHbwF1vkEOlkPo8wIgH1INfQ8ZniHBksQnyIyLcJ%2FjRgHvQ7DqQgLpWnlRr%2F8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FoL5KRui64Z2HOayrcAypwS154aPc%2FtQIU5RUo1rv1f5TZF2Iu8ORWk0fgHzZHWcBw13Qq7II3lmOlcZoqWkAUTQcNbzVPja5fuDL4KuGARQ%2FtW%2BteWmaQxiA4wNb4vivxDdHYerNr6QUJimEaX9Ysvm3hHq4QBWRavg78iPPV0WmWZqa1RkSfEtElX0flxz7foGouptcqV%2BpxzRz80egEBfe%2FqYJkaCGzluiTCqAwcSGKyrGKO1pdgp%2F0gJWZP%2F%2FDthsnf%2F7226zEgY7nYRcPdEEOuYm9AvAtt9W4QFP1U769dOUKqei6jH83OUETLtUZ42EFcre3Kxmjw%2B3KuK6IM71hOzb41K0rC%2FjzcAcaCWnsZpoqC%2FN963S5%2Frsmqd9IZzw03edsx11jAIgtyrtrED4wD%2BZ3JR5ARAwoA0bykulUZprUZjyYT75duLoXogYT%2BMdx0BfZvgvZE0EuJOWS72Z5erjSC8KHMkw0yN9ozPGBJhB2d5m6T4QpzCDh1usWYwd1k96CrxcSHlCwTCz0LjMgT%2FRCihPksVRQVxHE6QezxNnB257aMDNOJQFfD%2FgRQVXm7IbS71hU%2FjGv6Xtu%2F7EY6RHtkiA5d7Gb7ioW1uMc0Cv9uR0ekPt8j5VAitdhMjQAZQDv6yVSMLGOw74GOqUB1t4FuZxQzLNBwKK9wjDvxql6Rl1MqlvE4JwUcROUyAXgOQad%2Bnq%2FLiOmTr5bvqC4t8ud1UwCakSwcJ13L9ySJkkyoanbjnB8GE3pzTFzQJcPB6LuC7NHBYFuBppnZ4GW3%2B8v%2BzLvJIbRSb0vYXahaeGpurUrwxwKDMMYd80W5pCol5oJfgUF%2FqYxIrNta5W7YyOEGrFf5KY7v7amRU6Pi0QpDkms&X-Amz-Signature=773db20bc47433192ff58e1c531bfd340f3f1d3180ce528f9da4f9d17266cb26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMO26GM3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC5EAJIDVowmAF4oKP7GXPa1aFlFwCHbwF1vkEOlkPo8wIgH1INfQ8ZniHBksQnyIyLcJ%2FjRgHvQ7DqQgLpWnlRr%2F8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FoL5KRui64Z2HOayrcAypwS154aPc%2FtQIU5RUo1rv1f5TZF2Iu8ORWk0fgHzZHWcBw13Qq7II3lmOlcZoqWkAUTQcNbzVPja5fuDL4KuGARQ%2FtW%2BteWmaQxiA4wNb4vivxDdHYerNr6QUJimEaX9Ysvm3hHq4QBWRavg78iPPV0WmWZqa1RkSfEtElX0flxz7foGouptcqV%2BpxzRz80egEBfe%2FqYJkaCGzluiTCqAwcSGKyrGKO1pdgp%2F0gJWZP%2F%2FDthsnf%2F7226zEgY7nYRcPdEEOuYm9AvAtt9W4QFP1U769dOUKqei6jH83OUETLtUZ42EFcre3Kxmjw%2B3KuK6IM71hOzb41K0rC%2FjzcAcaCWnsZpoqC%2FN963S5%2Frsmqd9IZzw03edsx11jAIgtyrtrED4wD%2BZ3JR5ARAwoA0bykulUZprUZjyYT75duLoXogYT%2BMdx0BfZvgvZE0EuJOWS72Z5erjSC8KHMkw0yN9ozPGBJhB2d5m6T4QpzCDh1usWYwd1k96CrxcSHlCwTCz0LjMgT%2FRCihPksVRQVxHE6QezxNnB257aMDNOJQFfD%2FgRQVXm7IbS71hU%2FjGv6Xtu%2F7EY6RHtkiA5d7Gb7ioW1uMc0Cv9uR0ekPt8j5VAitdhMjQAZQDv6yVSMLGOw74GOqUB1t4FuZxQzLNBwKK9wjDvxql6Rl1MqlvE4JwUcROUyAXgOQad%2Bnq%2FLiOmTr5bvqC4t8ud1UwCakSwcJ13L9ySJkkyoanbjnB8GE3pzTFzQJcPB6LuC7NHBYFuBppnZ4GW3%2B8v%2BzLvJIbRSb0vYXahaeGpurUrwxwKDMMYd80W5pCol5oJfgUF%2FqYxIrNta5W7YyOEGrFf5KY7v7amRU6Pi0QpDkms&X-Amz-Signature=addec356a0fadd5c210cfc53ffe09449fdcf12c8bb582c8842a99a95096291d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMO26GM3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC5EAJIDVowmAF4oKP7GXPa1aFlFwCHbwF1vkEOlkPo8wIgH1INfQ8ZniHBksQnyIyLcJ%2FjRgHvQ7DqQgLpWnlRr%2F8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FoL5KRui64Z2HOayrcAypwS154aPc%2FtQIU5RUo1rv1f5TZF2Iu8ORWk0fgHzZHWcBw13Qq7II3lmOlcZoqWkAUTQcNbzVPja5fuDL4KuGARQ%2FtW%2BteWmaQxiA4wNb4vivxDdHYerNr6QUJimEaX9Ysvm3hHq4QBWRavg78iPPV0WmWZqa1RkSfEtElX0flxz7foGouptcqV%2BpxzRz80egEBfe%2FqYJkaCGzluiTCqAwcSGKyrGKO1pdgp%2F0gJWZP%2F%2FDthsnf%2F7226zEgY7nYRcPdEEOuYm9AvAtt9W4QFP1U769dOUKqei6jH83OUETLtUZ42EFcre3Kxmjw%2B3KuK6IM71hOzb41K0rC%2FjzcAcaCWnsZpoqC%2FN963S5%2Frsmqd9IZzw03edsx11jAIgtyrtrED4wD%2BZ3JR5ARAwoA0bykulUZprUZjyYT75duLoXogYT%2BMdx0BfZvgvZE0EuJOWS72Z5erjSC8KHMkw0yN9ozPGBJhB2d5m6T4QpzCDh1usWYwd1k96CrxcSHlCwTCz0LjMgT%2FRCihPksVRQVxHE6QezxNnB257aMDNOJQFfD%2FgRQVXm7IbS71hU%2FjGv6Xtu%2F7EY6RHtkiA5d7Gb7ioW1uMc0Cv9uR0ekPt8j5VAitdhMjQAZQDv6yVSMLGOw74GOqUB1t4FuZxQzLNBwKK9wjDvxql6Rl1MqlvE4JwUcROUyAXgOQad%2Bnq%2FLiOmTr5bvqC4t8ud1UwCakSwcJ13L9ySJkkyoanbjnB8GE3pzTFzQJcPB6LuC7NHBYFuBppnZ4GW3%2B8v%2BzLvJIbRSb0vYXahaeGpurUrwxwKDMMYd80W5pCol5oJfgUF%2FqYxIrNta5W7YyOEGrFf5KY7v7amRU6Pi0QpDkms&X-Amz-Signature=a5f5450ddcde83e22b847176e2fd51a23f2797db5377e111ea54b613c4d00df8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMO26GM3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC5EAJIDVowmAF4oKP7GXPa1aFlFwCHbwF1vkEOlkPo8wIgH1INfQ8ZniHBksQnyIyLcJ%2FjRgHvQ7DqQgLpWnlRr%2F8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FoL5KRui64Z2HOayrcAypwS154aPc%2FtQIU5RUo1rv1f5TZF2Iu8ORWk0fgHzZHWcBw13Qq7II3lmOlcZoqWkAUTQcNbzVPja5fuDL4KuGARQ%2FtW%2BteWmaQxiA4wNb4vivxDdHYerNr6QUJimEaX9Ysvm3hHq4QBWRavg78iPPV0WmWZqa1RkSfEtElX0flxz7foGouptcqV%2BpxzRz80egEBfe%2FqYJkaCGzluiTCqAwcSGKyrGKO1pdgp%2F0gJWZP%2F%2FDthsnf%2F7226zEgY7nYRcPdEEOuYm9AvAtt9W4QFP1U769dOUKqei6jH83OUETLtUZ42EFcre3Kxmjw%2B3KuK6IM71hOzb41K0rC%2FjzcAcaCWnsZpoqC%2FN963S5%2Frsmqd9IZzw03edsx11jAIgtyrtrED4wD%2BZ3JR5ARAwoA0bykulUZprUZjyYT75duLoXogYT%2BMdx0BfZvgvZE0EuJOWS72Z5erjSC8KHMkw0yN9ozPGBJhB2d5m6T4QpzCDh1usWYwd1k96CrxcSHlCwTCz0LjMgT%2FRCihPksVRQVxHE6QezxNnB257aMDNOJQFfD%2FgRQVXm7IbS71hU%2FjGv6Xtu%2F7EY6RHtkiA5d7Gb7ioW1uMc0Cv9uR0ekPt8j5VAitdhMjQAZQDv6yVSMLGOw74GOqUB1t4FuZxQzLNBwKK9wjDvxql6Rl1MqlvE4JwUcROUyAXgOQad%2Bnq%2FLiOmTr5bvqC4t8ud1UwCakSwcJ13L9ySJkkyoanbjnB8GE3pzTFzQJcPB6LuC7NHBYFuBppnZ4GW3%2B8v%2BzLvJIbRSb0vYXahaeGpurUrwxwKDMMYd80W5pCol5oJfgUF%2FqYxIrNta5W7YyOEGrFf5KY7v7amRU6Pi0QpDkms&X-Amz-Signature=9e47bf502569299e20dd38075b179d23c5161515be1c6186dedd039b0f864e96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMO26GM3%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T003726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQC5EAJIDVowmAF4oKP7GXPa1aFlFwCHbwF1vkEOlkPo8wIgH1INfQ8ZniHBksQnyIyLcJ%2FjRgHvQ7DqQgLpWnlRr%2F8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FoL5KRui64Z2HOayrcAypwS154aPc%2FtQIU5RUo1rv1f5TZF2Iu8ORWk0fgHzZHWcBw13Qq7II3lmOlcZoqWkAUTQcNbzVPja5fuDL4KuGARQ%2FtW%2BteWmaQxiA4wNb4vivxDdHYerNr6QUJimEaX9Ysvm3hHq4QBWRavg78iPPV0WmWZqa1RkSfEtElX0flxz7foGouptcqV%2BpxzRz80egEBfe%2FqYJkaCGzluiTCqAwcSGKyrGKO1pdgp%2F0gJWZP%2F%2FDthsnf%2F7226zEgY7nYRcPdEEOuYm9AvAtt9W4QFP1U769dOUKqei6jH83OUETLtUZ42EFcre3Kxmjw%2B3KuK6IM71hOzb41K0rC%2FjzcAcaCWnsZpoqC%2FN963S5%2Frsmqd9IZzw03edsx11jAIgtyrtrED4wD%2BZ3JR5ARAwoA0bykulUZprUZjyYT75duLoXogYT%2BMdx0BfZvgvZE0EuJOWS72Z5erjSC8KHMkw0yN9ozPGBJhB2d5m6T4QpzCDh1usWYwd1k96CrxcSHlCwTCz0LjMgT%2FRCihPksVRQVxHE6QezxNnB257aMDNOJQFfD%2FgRQVXm7IbS71hU%2FjGv6Xtu%2F7EY6RHtkiA5d7Gb7ioW1uMc0Cv9uR0ekPt8j5VAitdhMjQAZQDv6yVSMLGOw74GOqUB1t4FuZxQzLNBwKK9wjDvxql6Rl1MqlvE4JwUcROUyAXgOQad%2Bnq%2FLiOmTr5bvqC4t8ud1UwCakSwcJ13L9ySJkkyoanbjnB8GE3pzTFzQJcPB6LuC7NHBYFuBppnZ4GW3%2B8v%2BzLvJIbRSb0vYXahaeGpurUrwxwKDMMYd80W5pCol5oJfgUF%2FqYxIrNta5W7YyOEGrFf5KY7v7amRU6Pi0QpDkms&X-Amz-Signature=1cb498d41c62733bf2c1d84d4fe89a6174ffd1334422ac8a2c7d4c6c2e22227e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
