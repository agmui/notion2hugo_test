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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDVC5O3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDVwLtZvIe%2FM6aIk1DK527PtZKWzhp69IUcXWGxT%2Bx71QIhAMVeKs5Lq%2Bk8nR2JaXflZECDAJoJ%2FU3IPaaqqgjZK5kIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDrDUEHhpvYaSaioYq3ANRSyWzhzu0Dhu7fj6n19sQH5S4oiCX0JY2l%2BEbojjxE%2BBVKlmGxW78exSYixB6ivIkiIftlMyk%2F%2BllSIJ9t2YZXfzhhgo1FB054vZDnwZqGj1T%2BI9iLqzT5dmRVZfVfkLTlhI%2BWA6%2FGH6GoelE5OJRKSu%2FsRSNdpAh25EVbN992ZaVgRMifurIBwU5yn%2Fsh%2FQK%2Bn%2FuLQ5f5%2BNojAEq1ym3Gjwr8aZSzRGZKWHgEJHFgzGJn9eYPuv%2FqaFyVCOxIzR3MKwuowPk1msFIkGNQ6hLaRrrXXNjEwoNazqnvsGNdoHZVNvAIvZ20oGoQTA1iu0uXVq37qr5Cfv63v8Ow%2FNW15FLG0ARqwAipUsalZekBKvry4CBgqBj6N%2FOUT%2F6yqCWDya2hIE7pFe1lgFqguNGjTtXMonfaznfBWdZiEnjBDNLZtyek3O0BAvIX5B4k2rW9eLjOLvbLZdKHU06iR6ZQAD326DWD0%2BKxp6sdaMGi9GykDofEeq7shZKsnSE7OnUWtp6VYdreqVtLABb0NwW4ot2F64jIqd%2FURDCxWmL1VFxBuCOjRvXDG7P8QzijPBPFQj9reRzjsOL5e4nAwTjugTGYtWZkG31cKbkrRL3iCN0k2R5fwoLDUbSIDChoN%2B%2FBjqkAS8MdqJrnWmKVo7bPNrrEjQhsziid1fqgK%2FwqEMIkd0asOHvJWTayH7qBkzlpPmrhT9g62FjPCaQ3DvjRv5TKHbU1b7mKXg906%2BVEkiWaGm4vzc9sgGoRLbiGqM33hh87scZr5YsxL5pWDqewojYvTYQvc5orUB3IXDbmuGjtqEMa0kY5Ja0adaPpeNB3UMTHMtL%2BsDTk7Ip6QoXbHbpn2lz8dTs&X-Amz-Signature=c18a774d31d2f3bb95161d9c8372e460c169ee50d918a15b9c267bea0fb17c48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDVC5O3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDVwLtZvIe%2FM6aIk1DK527PtZKWzhp69IUcXWGxT%2Bx71QIhAMVeKs5Lq%2Bk8nR2JaXflZECDAJoJ%2FU3IPaaqqgjZK5kIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDrDUEHhpvYaSaioYq3ANRSyWzhzu0Dhu7fj6n19sQH5S4oiCX0JY2l%2BEbojjxE%2BBVKlmGxW78exSYixB6ivIkiIftlMyk%2F%2BllSIJ9t2YZXfzhhgo1FB054vZDnwZqGj1T%2BI9iLqzT5dmRVZfVfkLTlhI%2BWA6%2FGH6GoelE5OJRKSu%2FsRSNdpAh25EVbN992ZaVgRMifurIBwU5yn%2Fsh%2FQK%2Bn%2FuLQ5f5%2BNojAEq1ym3Gjwr8aZSzRGZKWHgEJHFgzGJn9eYPuv%2FqaFyVCOxIzR3MKwuowPk1msFIkGNQ6hLaRrrXXNjEwoNazqnvsGNdoHZVNvAIvZ20oGoQTA1iu0uXVq37qr5Cfv63v8Ow%2FNW15FLG0ARqwAipUsalZekBKvry4CBgqBj6N%2FOUT%2F6yqCWDya2hIE7pFe1lgFqguNGjTtXMonfaznfBWdZiEnjBDNLZtyek3O0BAvIX5B4k2rW9eLjOLvbLZdKHU06iR6ZQAD326DWD0%2BKxp6sdaMGi9GykDofEeq7shZKsnSE7OnUWtp6VYdreqVtLABb0NwW4ot2F64jIqd%2FURDCxWmL1VFxBuCOjRvXDG7P8QzijPBPFQj9reRzjsOL5e4nAwTjugTGYtWZkG31cKbkrRL3iCN0k2R5fwoLDUbSIDChoN%2B%2FBjqkAS8MdqJrnWmKVo7bPNrrEjQhsziid1fqgK%2FwqEMIkd0asOHvJWTayH7qBkzlpPmrhT9g62FjPCaQ3DvjRv5TKHbU1b7mKXg906%2BVEkiWaGm4vzc9sgGoRLbiGqM33hh87scZr5YsxL5pWDqewojYvTYQvc5orUB3IXDbmuGjtqEMa0kY5Ja0adaPpeNB3UMTHMtL%2BsDTk7Ip6QoXbHbpn2lz8dTs&X-Amz-Signature=8e3b14f174afda434a11957d3d74dd41b0fe8397603953f2a1396a8d342b2a99&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDVC5O3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDVwLtZvIe%2FM6aIk1DK527PtZKWzhp69IUcXWGxT%2Bx71QIhAMVeKs5Lq%2Bk8nR2JaXflZECDAJoJ%2FU3IPaaqqgjZK5kIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDrDUEHhpvYaSaioYq3ANRSyWzhzu0Dhu7fj6n19sQH5S4oiCX0JY2l%2BEbojjxE%2BBVKlmGxW78exSYixB6ivIkiIftlMyk%2F%2BllSIJ9t2YZXfzhhgo1FB054vZDnwZqGj1T%2BI9iLqzT5dmRVZfVfkLTlhI%2BWA6%2FGH6GoelE5OJRKSu%2FsRSNdpAh25EVbN992ZaVgRMifurIBwU5yn%2Fsh%2FQK%2Bn%2FuLQ5f5%2BNojAEq1ym3Gjwr8aZSzRGZKWHgEJHFgzGJn9eYPuv%2FqaFyVCOxIzR3MKwuowPk1msFIkGNQ6hLaRrrXXNjEwoNazqnvsGNdoHZVNvAIvZ20oGoQTA1iu0uXVq37qr5Cfv63v8Ow%2FNW15FLG0ARqwAipUsalZekBKvry4CBgqBj6N%2FOUT%2F6yqCWDya2hIE7pFe1lgFqguNGjTtXMonfaznfBWdZiEnjBDNLZtyek3O0BAvIX5B4k2rW9eLjOLvbLZdKHU06iR6ZQAD326DWD0%2BKxp6sdaMGi9GykDofEeq7shZKsnSE7OnUWtp6VYdreqVtLABb0NwW4ot2F64jIqd%2FURDCxWmL1VFxBuCOjRvXDG7P8QzijPBPFQj9reRzjsOL5e4nAwTjugTGYtWZkG31cKbkrRL3iCN0k2R5fwoLDUbSIDChoN%2B%2FBjqkAS8MdqJrnWmKVo7bPNrrEjQhsziid1fqgK%2FwqEMIkd0asOHvJWTayH7qBkzlpPmrhT9g62FjPCaQ3DvjRv5TKHbU1b7mKXg906%2BVEkiWaGm4vzc9sgGoRLbiGqM33hh87scZr5YsxL5pWDqewojYvTYQvc5orUB3IXDbmuGjtqEMa0kY5Ja0adaPpeNB3UMTHMtL%2BsDTk7Ip6QoXbHbpn2lz8dTs&X-Amz-Signature=827cb161af61c873949c5dd751b809826ff397399e82175d17f86e3bcee0525a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDVC5O3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDVwLtZvIe%2FM6aIk1DK527PtZKWzhp69IUcXWGxT%2Bx71QIhAMVeKs5Lq%2Bk8nR2JaXflZECDAJoJ%2FU3IPaaqqgjZK5kIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDrDUEHhpvYaSaioYq3ANRSyWzhzu0Dhu7fj6n19sQH5S4oiCX0JY2l%2BEbojjxE%2BBVKlmGxW78exSYixB6ivIkiIftlMyk%2F%2BllSIJ9t2YZXfzhhgo1FB054vZDnwZqGj1T%2BI9iLqzT5dmRVZfVfkLTlhI%2BWA6%2FGH6GoelE5OJRKSu%2FsRSNdpAh25EVbN992ZaVgRMifurIBwU5yn%2Fsh%2FQK%2Bn%2FuLQ5f5%2BNojAEq1ym3Gjwr8aZSzRGZKWHgEJHFgzGJn9eYPuv%2FqaFyVCOxIzR3MKwuowPk1msFIkGNQ6hLaRrrXXNjEwoNazqnvsGNdoHZVNvAIvZ20oGoQTA1iu0uXVq37qr5Cfv63v8Ow%2FNW15FLG0ARqwAipUsalZekBKvry4CBgqBj6N%2FOUT%2F6yqCWDya2hIE7pFe1lgFqguNGjTtXMonfaznfBWdZiEnjBDNLZtyek3O0BAvIX5B4k2rW9eLjOLvbLZdKHU06iR6ZQAD326DWD0%2BKxp6sdaMGi9GykDofEeq7shZKsnSE7OnUWtp6VYdreqVtLABb0NwW4ot2F64jIqd%2FURDCxWmL1VFxBuCOjRvXDG7P8QzijPBPFQj9reRzjsOL5e4nAwTjugTGYtWZkG31cKbkrRL3iCN0k2R5fwoLDUbSIDChoN%2B%2FBjqkAS8MdqJrnWmKVo7bPNrrEjQhsziid1fqgK%2FwqEMIkd0asOHvJWTayH7qBkzlpPmrhT9g62FjPCaQ3DvjRv5TKHbU1b7mKXg906%2BVEkiWaGm4vzc9sgGoRLbiGqM33hh87scZr5YsxL5pWDqewojYvTYQvc5orUB3IXDbmuGjtqEMa0kY5Ja0adaPpeNB3UMTHMtL%2BsDTk7Ip6QoXbHbpn2lz8dTs&X-Amz-Signature=2edd0cc535c9b4128546c088b66ec532e0453cf4424f73fd916f6b762fe0626c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDVC5O3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDVwLtZvIe%2FM6aIk1DK527PtZKWzhp69IUcXWGxT%2Bx71QIhAMVeKs5Lq%2Bk8nR2JaXflZECDAJoJ%2FU3IPaaqqgjZK5kIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDrDUEHhpvYaSaioYq3ANRSyWzhzu0Dhu7fj6n19sQH5S4oiCX0JY2l%2BEbojjxE%2BBVKlmGxW78exSYixB6ivIkiIftlMyk%2F%2BllSIJ9t2YZXfzhhgo1FB054vZDnwZqGj1T%2BI9iLqzT5dmRVZfVfkLTlhI%2BWA6%2FGH6GoelE5OJRKSu%2FsRSNdpAh25EVbN992ZaVgRMifurIBwU5yn%2Fsh%2FQK%2Bn%2FuLQ5f5%2BNojAEq1ym3Gjwr8aZSzRGZKWHgEJHFgzGJn9eYPuv%2FqaFyVCOxIzR3MKwuowPk1msFIkGNQ6hLaRrrXXNjEwoNazqnvsGNdoHZVNvAIvZ20oGoQTA1iu0uXVq37qr5Cfv63v8Ow%2FNW15FLG0ARqwAipUsalZekBKvry4CBgqBj6N%2FOUT%2F6yqCWDya2hIE7pFe1lgFqguNGjTtXMonfaznfBWdZiEnjBDNLZtyek3O0BAvIX5B4k2rW9eLjOLvbLZdKHU06iR6ZQAD326DWD0%2BKxp6sdaMGi9GykDofEeq7shZKsnSE7OnUWtp6VYdreqVtLABb0NwW4ot2F64jIqd%2FURDCxWmL1VFxBuCOjRvXDG7P8QzijPBPFQj9reRzjsOL5e4nAwTjugTGYtWZkG31cKbkrRL3iCN0k2R5fwoLDUbSIDChoN%2B%2FBjqkAS8MdqJrnWmKVo7bPNrrEjQhsziid1fqgK%2FwqEMIkd0asOHvJWTayH7qBkzlpPmrhT9g62FjPCaQ3DvjRv5TKHbU1b7mKXg906%2BVEkiWaGm4vzc9sgGoRLbiGqM33hh87scZr5YsxL5pWDqewojYvTYQvc5orUB3IXDbmuGjtqEMa0kY5Ja0adaPpeNB3UMTHMtL%2BsDTk7Ip6QoXbHbpn2lz8dTs&X-Amz-Signature=da12cafb8666392e63f1a25229d3671d893258d88d4d2451204e6803b90220fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDVC5O3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDVwLtZvIe%2FM6aIk1DK527PtZKWzhp69IUcXWGxT%2Bx71QIhAMVeKs5Lq%2Bk8nR2JaXflZECDAJoJ%2FU3IPaaqqgjZK5kIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDrDUEHhpvYaSaioYq3ANRSyWzhzu0Dhu7fj6n19sQH5S4oiCX0JY2l%2BEbojjxE%2BBVKlmGxW78exSYixB6ivIkiIftlMyk%2F%2BllSIJ9t2YZXfzhhgo1FB054vZDnwZqGj1T%2BI9iLqzT5dmRVZfVfkLTlhI%2BWA6%2FGH6GoelE5OJRKSu%2FsRSNdpAh25EVbN992ZaVgRMifurIBwU5yn%2Fsh%2FQK%2Bn%2FuLQ5f5%2BNojAEq1ym3Gjwr8aZSzRGZKWHgEJHFgzGJn9eYPuv%2FqaFyVCOxIzR3MKwuowPk1msFIkGNQ6hLaRrrXXNjEwoNazqnvsGNdoHZVNvAIvZ20oGoQTA1iu0uXVq37qr5Cfv63v8Ow%2FNW15FLG0ARqwAipUsalZekBKvry4CBgqBj6N%2FOUT%2F6yqCWDya2hIE7pFe1lgFqguNGjTtXMonfaznfBWdZiEnjBDNLZtyek3O0BAvIX5B4k2rW9eLjOLvbLZdKHU06iR6ZQAD326DWD0%2BKxp6sdaMGi9GykDofEeq7shZKsnSE7OnUWtp6VYdreqVtLABb0NwW4ot2F64jIqd%2FURDCxWmL1VFxBuCOjRvXDG7P8QzijPBPFQj9reRzjsOL5e4nAwTjugTGYtWZkG31cKbkrRL3iCN0k2R5fwoLDUbSIDChoN%2B%2FBjqkAS8MdqJrnWmKVo7bPNrrEjQhsziid1fqgK%2FwqEMIkd0asOHvJWTayH7qBkzlpPmrhT9g62FjPCaQ3DvjRv5TKHbU1b7mKXg906%2BVEkiWaGm4vzc9sgGoRLbiGqM33hh87scZr5YsxL5pWDqewojYvTYQvc5orUB3IXDbmuGjtqEMa0kY5Ja0adaPpeNB3UMTHMtL%2BsDTk7Ip6QoXbHbpn2lz8dTs&X-Amz-Signature=26225deee63ffb6e8ba2bdecfdd81db2981551deae21432e955188c0eb48a73d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDVC5O3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDVwLtZvIe%2FM6aIk1DK527PtZKWzhp69IUcXWGxT%2Bx71QIhAMVeKs5Lq%2Bk8nR2JaXflZECDAJoJ%2FU3IPaaqqgjZK5kIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDrDUEHhpvYaSaioYq3ANRSyWzhzu0Dhu7fj6n19sQH5S4oiCX0JY2l%2BEbojjxE%2BBVKlmGxW78exSYixB6ivIkiIftlMyk%2F%2BllSIJ9t2YZXfzhhgo1FB054vZDnwZqGj1T%2BI9iLqzT5dmRVZfVfkLTlhI%2BWA6%2FGH6GoelE5OJRKSu%2FsRSNdpAh25EVbN992ZaVgRMifurIBwU5yn%2Fsh%2FQK%2Bn%2FuLQ5f5%2BNojAEq1ym3Gjwr8aZSzRGZKWHgEJHFgzGJn9eYPuv%2FqaFyVCOxIzR3MKwuowPk1msFIkGNQ6hLaRrrXXNjEwoNazqnvsGNdoHZVNvAIvZ20oGoQTA1iu0uXVq37qr5Cfv63v8Ow%2FNW15FLG0ARqwAipUsalZekBKvry4CBgqBj6N%2FOUT%2F6yqCWDya2hIE7pFe1lgFqguNGjTtXMonfaznfBWdZiEnjBDNLZtyek3O0BAvIX5B4k2rW9eLjOLvbLZdKHU06iR6ZQAD326DWD0%2BKxp6sdaMGi9GykDofEeq7shZKsnSE7OnUWtp6VYdreqVtLABb0NwW4ot2F64jIqd%2FURDCxWmL1VFxBuCOjRvXDG7P8QzijPBPFQj9reRzjsOL5e4nAwTjugTGYtWZkG31cKbkrRL3iCN0k2R5fwoLDUbSIDChoN%2B%2FBjqkAS8MdqJrnWmKVo7bPNrrEjQhsziid1fqgK%2FwqEMIkd0asOHvJWTayH7qBkzlpPmrhT9g62FjPCaQ3DvjRv5TKHbU1b7mKXg906%2BVEkiWaGm4vzc9sgGoRLbiGqM33hh87scZr5YsxL5pWDqewojYvTYQvc5orUB3IXDbmuGjtqEMa0kY5Ja0adaPpeNB3UMTHMtL%2BsDTk7Ip6QoXbHbpn2lz8dTs&X-Amz-Signature=87cd42a5343e8cd2f5d2d6e9c2305a08f18c6efee94d78fcb6548cd523d791f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFDVC5O3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDVwLtZvIe%2FM6aIk1DK527PtZKWzhp69IUcXWGxT%2Bx71QIhAMVeKs5Lq%2Bk8nR2JaXflZECDAJoJ%2FU3IPaaqqgjZK5kIKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDrDUEHhpvYaSaioYq3ANRSyWzhzu0Dhu7fj6n19sQH5S4oiCX0JY2l%2BEbojjxE%2BBVKlmGxW78exSYixB6ivIkiIftlMyk%2F%2BllSIJ9t2YZXfzhhgo1FB054vZDnwZqGj1T%2BI9iLqzT5dmRVZfVfkLTlhI%2BWA6%2FGH6GoelE5OJRKSu%2FsRSNdpAh25EVbN992ZaVgRMifurIBwU5yn%2Fsh%2FQK%2Bn%2FuLQ5f5%2BNojAEq1ym3Gjwr8aZSzRGZKWHgEJHFgzGJn9eYPuv%2FqaFyVCOxIzR3MKwuowPk1msFIkGNQ6hLaRrrXXNjEwoNazqnvsGNdoHZVNvAIvZ20oGoQTA1iu0uXVq37qr5Cfv63v8Ow%2FNW15FLG0ARqwAipUsalZekBKvry4CBgqBj6N%2FOUT%2F6yqCWDya2hIE7pFe1lgFqguNGjTtXMonfaznfBWdZiEnjBDNLZtyek3O0BAvIX5B4k2rW9eLjOLvbLZdKHU06iR6ZQAD326DWD0%2BKxp6sdaMGi9GykDofEeq7shZKsnSE7OnUWtp6VYdreqVtLABb0NwW4ot2F64jIqd%2FURDCxWmL1VFxBuCOjRvXDG7P8QzijPBPFQj9reRzjsOL5e4nAwTjugTGYtWZkG31cKbkrRL3iCN0k2R5fwoLDUbSIDChoN%2B%2FBjqkAS8MdqJrnWmKVo7bPNrrEjQhsziid1fqgK%2FwqEMIkd0asOHvJWTayH7qBkzlpPmrhT9g62FjPCaQ3DvjRv5TKHbU1b7mKXg906%2BVEkiWaGm4vzc9sgGoRLbiGqM33hh87scZr5YsxL5pWDqewojYvTYQvc5orUB3IXDbmuGjtqEMa0kY5Ja0adaPpeNB3UMTHMtL%2BsDTk7Ip6QoXbHbpn2lz8dTs&X-Amz-Signature=3005381c3c4ab9808417a1dd92080a31c1d38dce685ec2971bdbfb7e32be4540&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
