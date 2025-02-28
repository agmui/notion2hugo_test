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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXQXJKK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGA9UFwv00Y1J65u3D%2FCCAH5kqVyboDqdNasjV381cQfAiB%2BXmgexjigy7B%2BizZpyBSwCUVIb5kwhiTgbI6YgwJyvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2F%2FIvva8kjyfWmhtKtwDoa8GkHRKegypqtE4pbzm%2FYLpr98BcwC9NOlEiXb6%2B6qJi0q2nvgt7h2xlaSiwoLDgNJA%2FFo%2BC4aX2GBE9yl53IEqFkdjqImxEVmN%2FdeHQuaxRi5i87WJ9OWGB7E7xEMxoRg7BEoMFw5JxFiCKgwla9CLhTTrWJNAcarx4arjXLfw6UJf0r8oACTrmAha9kTtm3amxSkL4rwF7kUiqIwI3jiaipJjVLhRo4WRvbVJS5vDgH4BfqTbIXGhShHhOOXjlt6yee9sNt%2BwDI1XJ0ilz3ao3BB5FHp0M1bJLMY5gk5cKRwVUoYSPBS5lzxo8cz%2B2SlF36eV7L1G2BtMJzyotUFJhLHi2RyaRltZgKyILax4SBuF2dxQu0Qn7I5tKMq2YL3sgyxrbqufk7vlU3gxslzGqlSldXMqHgZDoVHqtjJMPBpN5vdGO6769jUPbLI1iJTr8vP%2BCvF%2B5aYIO41VI%2BsIn9i3NL3NPH4K9UjSForcv0DOkPk2wD2nZEIGckcm5NDCsCwBbDQ%2FSTceDOdHTV9aRIUU4TCVQyGoXNxNOHvkgeW9rOZIB6kRBm8HollE4Wmuiy0Y81sU4uMqzxXoLZS5hs8jxsHUWSr3XWmYpGNoxtPBclJBypzP7hcwua6HvgY6pgFmuBYnlJ7L7Uy52cpubRVzK6hsLrJFdEuUf%2BgWX7qXf1UfjtAutroW9AHEdFokrqFp3fr0Z0jbeOUSdneIj0EhlfecQjP%2FPIK3yuTPeFlttWPlcnjsaxy4fz%2FcJcCKsiB4hA03HVNDBJ020qvlN1dLNwk%2BkehJJy1ihBGtD%2B5f0WN%2BNKOpMl67WrWEuDLdfp9QODfbVFuPmhUDfcEewdKeXKgU3rBH&X-Amz-Signature=d88353c9d69c0ed52187d8e68c610a44cf22459467455f9da7ebe9e0e53120fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXQXJKK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGA9UFwv00Y1J65u3D%2FCCAH5kqVyboDqdNasjV381cQfAiB%2BXmgexjigy7B%2BizZpyBSwCUVIb5kwhiTgbI6YgwJyvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2F%2FIvva8kjyfWmhtKtwDoa8GkHRKegypqtE4pbzm%2FYLpr98BcwC9NOlEiXb6%2B6qJi0q2nvgt7h2xlaSiwoLDgNJA%2FFo%2BC4aX2GBE9yl53IEqFkdjqImxEVmN%2FdeHQuaxRi5i87WJ9OWGB7E7xEMxoRg7BEoMFw5JxFiCKgwla9CLhTTrWJNAcarx4arjXLfw6UJf0r8oACTrmAha9kTtm3amxSkL4rwF7kUiqIwI3jiaipJjVLhRo4WRvbVJS5vDgH4BfqTbIXGhShHhOOXjlt6yee9sNt%2BwDI1XJ0ilz3ao3BB5FHp0M1bJLMY5gk5cKRwVUoYSPBS5lzxo8cz%2B2SlF36eV7L1G2BtMJzyotUFJhLHi2RyaRltZgKyILax4SBuF2dxQu0Qn7I5tKMq2YL3sgyxrbqufk7vlU3gxslzGqlSldXMqHgZDoVHqtjJMPBpN5vdGO6769jUPbLI1iJTr8vP%2BCvF%2B5aYIO41VI%2BsIn9i3NL3NPH4K9UjSForcv0DOkPk2wD2nZEIGckcm5NDCsCwBbDQ%2FSTceDOdHTV9aRIUU4TCVQyGoXNxNOHvkgeW9rOZIB6kRBm8HollE4Wmuiy0Y81sU4uMqzxXoLZS5hs8jxsHUWSr3XWmYpGNoxtPBclJBypzP7hcwua6HvgY6pgFmuBYnlJ7L7Uy52cpubRVzK6hsLrJFdEuUf%2BgWX7qXf1UfjtAutroW9AHEdFokrqFp3fr0Z0jbeOUSdneIj0EhlfecQjP%2FPIK3yuTPeFlttWPlcnjsaxy4fz%2FcJcCKsiB4hA03HVNDBJ020qvlN1dLNwk%2BkehJJy1ihBGtD%2B5f0WN%2BNKOpMl67WrWEuDLdfp9QODfbVFuPmhUDfcEewdKeXKgU3rBH&X-Amz-Signature=66d27049c9617b47518c7ed8875f77cd81af3b452808360d631d0c9077c2497d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXQXJKK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGA9UFwv00Y1J65u3D%2FCCAH5kqVyboDqdNasjV381cQfAiB%2BXmgexjigy7B%2BizZpyBSwCUVIb5kwhiTgbI6YgwJyvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2F%2FIvva8kjyfWmhtKtwDoa8GkHRKegypqtE4pbzm%2FYLpr98BcwC9NOlEiXb6%2B6qJi0q2nvgt7h2xlaSiwoLDgNJA%2FFo%2BC4aX2GBE9yl53IEqFkdjqImxEVmN%2FdeHQuaxRi5i87WJ9OWGB7E7xEMxoRg7BEoMFw5JxFiCKgwla9CLhTTrWJNAcarx4arjXLfw6UJf0r8oACTrmAha9kTtm3amxSkL4rwF7kUiqIwI3jiaipJjVLhRo4WRvbVJS5vDgH4BfqTbIXGhShHhOOXjlt6yee9sNt%2BwDI1XJ0ilz3ao3BB5FHp0M1bJLMY5gk5cKRwVUoYSPBS5lzxo8cz%2B2SlF36eV7L1G2BtMJzyotUFJhLHi2RyaRltZgKyILax4SBuF2dxQu0Qn7I5tKMq2YL3sgyxrbqufk7vlU3gxslzGqlSldXMqHgZDoVHqtjJMPBpN5vdGO6769jUPbLI1iJTr8vP%2BCvF%2B5aYIO41VI%2BsIn9i3NL3NPH4K9UjSForcv0DOkPk2wD2nZEIGckcm5NDCsCwBbDQ%2FSTceDOdHTV9aRIUU4TCVQyGoXNxNOHvkgeW9rOZIB6kRBm8HollE4Wmuiy0Y81sU4uMqzxXoLZS5hs8jxsHUWSr3XWmYpGNoxtPBclJBypzP7hcwua6HvgY6pgFmuBYnlJ7L7Uy52cpubRVzK6hsLrJFdEuUf%2BgWX7qXf1UfjtAutroW9AHEdFokrqFp3fr0Z0jbeOUSdneIj0EhlfecQjP%2FPIK3yuTPeFlttWPlcnjsaxy4fz%2FcJcCKsiB4hA03HVNDBJ020qvlN1dLNwk%2BkehJJy1ihBGtD%2B5f0WN%2BNKOpMl67WrWEuDLdfp9QODfbVFuPmhUDfcEewdKeXKgU3rBH&X-Amz-Signature=1515e8a4adb0de18d8382a9150a9c128084e4b737ee20ae3b2c7f5d1bee3ca80&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXQXJKK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGA9UFwv00Y1J65u3D%2FCCAH5kqVyboDqdNasjV381cQfAiB%2BXmgexjigy7B%2BizZpyBSwCUVIb5kwhiTgbI6YgwJyvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2F%2FIvva8kjyfWmhtKtwDoa8GkHRKegypqtE4pbzm%2FYLpr98BcwC9NOlEiXb6%2B6qJi0q2nvgt7h2xlaSiwoLDgNJA%2FFo%2BC4aX2GBE9yl53IEqFkdjqImxEVmN%2FdeHQuaxRi5i87WJ9OWGB7E7xEMxoRg7BEoMFw5JxFiCKgwla9CLhTTrWJNAcarx4arjXLfw6UJf0r8oACTrmAha9kTtm3amxSkL4rwF7kUiqIwI3jiaipJjVLhRo4WRvbVJS5vDgH4BfqTbIXGhShHhOOXjlt6yee9sNt%2BwDI1XJ0ilz3ao3BB5FHp0M1bJLMY5gk5cKRwVUoYSPBS5lzxo8cz%2B2SlF36eV7L1G2BtMJzyotUFJhLHi2RyaRltZgKyILax4SBuF2dxQu0Qn7I5tKMq2YL3sgyxrbqufk7vlU3gxslzGqlSldXMqHgZDoVHqtjJMPBpN5vdGO6769jUPbLI1iJTr8vP%2BCvF%2B5aYIO41VI%2BsIn9i3NL3NPH4K9UjSForcv0DOkPk2wD2nZEIGckcm5NDCsCwBbDQ%2FSTceDOdHTV9aRIUU4TCVQyGoXNxNOHvkgeW9rOZIB6kRBm8HollE4Wmuiy0Y81sU4uMqzxXoLZS5hs8jxsHUWSr3XWmYpGNoxtPBclJBypzP7hcwua6HvgY6pgFmuBYnlJ7L7Uy52cpubRVzK6hsLrJFdEuUf%2BgWX7qXf1UfjtAutroW9AHEdFokrqFp3fr0Z0jbeOUSdneIj0EhlfecQjP%2FPIK3yuTPeFlttWPlcnjsaxy4fz%2FcJcCKsiB4hA03HVNDBJ020qvlN1dLNwk%2BkehJJy1ihBGtD%2B5f0WN%2BNKOpMl67WrWEuDLdfp9QODfbVFuPmhUDfcEewdKeXKgU3rBH&X-Amz-Signature=47c700c34d0dd6032356295c7ca638f17f23619c8ed4f39478a150136cd4dcea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXQXJKK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGA9UFwv00Y1J65u3D%2FCCAH5kqVyboDqdNasjV381cQfAiB%2BXmgexjigy7B%2BizZpyBSwCUVIb5kwhiTgbI6YgwJyvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2F%2FIvva8kjyfWmhtKtwDoa8GkHRKegypqtE4pbzm%2FYLpr98BcwC9NOlEiXb6%2B6qJi0q2nvgt7h2xlaSiwoLDgNJA%2FFo%2BC4aX2GBE9yl53IEqFkdjqImxEVmN%2FdeHQuaxRi5i87WJ9OWGB7E7xEMxoRg7BEoMFw5JxFiCKgwla9CLhTTrWJNAcarx4arjXLfw6UJf0r8oACTrmAha9kTtm3amxSkL4rwF7kUiqIwI3jiaipJjVLhRo4WRvbVJS5vDgH4BfqTbIXGhShHhOOXjlt6yee9sNt%2BwDI1XJ0ilz3ao3BB5FHp0M1bJLMY5gk5cKRwVUoYSPBS5lzxo8cz%2B2SlF36eV7L1G2BtMJzyotUFJhLHi2RyaRltZgKyILax4SBuF2dxQu0Qn7I5tKMq2YL3sgyxrbqufk7vlU3gxslzGqlSldXMqHgZDoVHqtjJMPBpN5vdGO6769jUPbLI1iJTr8vP%2BCvF%2B5aYIO41VI%2BsIn9i3NL3NPH4K9UjSForcv0DOkPk2wD2nZEIGckcm5NDCsCwBbDQ%2FSTceDOdHTV9aRIUU4TCVQyGoXNxNOHvkgeW9rOZIB6kRBm8HollE4Wmuiy0Y81sU4uMqzxXoLZS5hs8jxsHUWSr3XWmYpGNoxtPBclJBypzP7hcwua6HvgY6pgFmuBYnlJ7L7Uy52cpubRVzK6hsLrJFdEuUf%2BgWX7qXf1UfjtAutroW9AHEdFokrqFp3fr0Z0jbeOUSdneIj0EhlfecQjP%2FPIK3yuTPeFlttWPlcnjsaxy4fz%2FcJcCKsiB4hA03HVNDBJ020qvlN1dLNwk%2BkehJJy1ihBGtD%2B5f0WN%2BNKOpMl67WrWEuDLdfp9QODfbVFuPmhUDfcEewdKeXKgU3rBH&X-Amz-Signature=381bf62c07c753b1451af4b2162629f520a900711047c40eb0e011cfe381bb33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXQXJKK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGA9UFwv00Y1J65u3D%2FCCAH5kqVyboDqdNasjV381cQfAiB%2BXmgexjigy7B%2BizZpyBSwCUVIb5kwhiTgbI6YgwJyvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2F%2FIvva8kjyfWmhtKtwDoa8GkHRKegypqtE4pbzm%2FYLpr98BcwC9NOlEiXb6%2B6qJi0q2nvgt7h2xlaSiwoLDgNJA%2FFo%2BC4aX2GBE9yl53IEqFkdjqImxEVmN%2FdeHQuaxRi5i87WJ9OWGB7E7xEMxoRg7BEoMFw5JxFiCKgwla9CLhTTrWJNAcarx4arjXLfw6UJf0r8oACTrmAha9kTtm3amxSkL4rwF7kUiqIwI3jiaipJjVLhRo4WRvbVJS5vDgH4BfqTbIXGhShHhOOXjlt6yee9sNt%2BwDI1XJ0ilz3ao3BB5FHp0M1bJLMY5gk5cKRwVUoYSPBS5lzxo8cz%2B2SlF36eV7L1G2BtMJzyotUFJhLHi2RyaRltZgKyILax4SBuF2dxQu0Qn7I5tKMq2YL3sgyxrbqufk7vlU3gxslzGqlSldXMqHgZDoVHqtjJMPBpN5vdGO6769jUPbLI1iJTr8vP%2BCvF%2B5aYIO41VI%2BsIn9i3NL3NPH4K9UjSForcv0DOkPk2wD2nZEIGckcm5NDCsCwBbDQ%2FSTceDOdHTV9aRIUU4TCVQyGoXNxNOHvkgeW9rOZIB6kRBm8HollE4Wmuiy0Y81sU4uMqzxXoLZS5hs8jxsHUWSr3XWmYpGNoxtPBclJBypzP7hcwua6HvgY6pgFmuBYnlJ7L7Uy52cpubRVzK6hsLrJFdEuUf%2BgWX7qXf1UfjtAutroW9AHEdFokrqFp3fr0Z0jbeOUSdneIj0EhlfecQjP%2FPIK3yuTPeFlttWPlcnjsaxy4fz%2FcJcCKsiB4hA03HVNDBJ020qvlN1dLNwk%2BkehJJy1ihBGtD%2B5f0WN%2BNKOpMl67WrWEuDLdfp9QODfbVFuPmhUDfcEewdKeXKgU3rBH&X-Amz-Signature=38dd9dbe01e17e7c5567d45daf718fd2beb90b33febbefe3c42a8aa9db770502&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXQXJKK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGA9UFwv00Y1J65u3D%2FCCAH5kqVyboDqdNasjV381cQfAiB%2BXmgexjigy7B%2BizZpyBSwCUVIb5kwhiTgbI6YgwJyvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2F%2FIvva8kjyfWmhtKtwDoa8GkHRKegypqtE4pbzm%2FYLpr98BcwC9NOlEiXb6%2B6qJi0q2nvgt7h2xlaSiwoLDgNJA%2FFo%2BC4aX2GBE9yl53IEqFkdjqImxEVmN%2FdeHQuaxRi5i87WJ9OWGB7E7xEMxoRg7BEoMFw5JxFiCKgwla9CLhTTrWJNAcarx4arjXLfw6UJf0r8oACTrmAha9kTtm3amxSkL4rwF7kUiqIwI3jiaipJjVLhRo4WRvbVJS5vDgH4BfqTbIXGhShHhOOXjlt6yee9sNt%2BwDI1XJ0ilz3ao3BB5FHp0M1bJLMY5gk5cKRwVUoYSPBS5lzxo8cz%2B2SlF36eV7L1G2BtMJzyotUFJhLHi2RyaRltZgKyILax4SBuF2dxQu0Qn7I5tKMq2YL3sgyxrbqufk7vlU3gxslzGqlSldXMqHgZDoVHqtjJMPBpN5vdGO6769jUPbLI1iJTr8vP%2BCvF%2B5aYIO41VI%2BsIn9i3NL3NPH4K9UjSForcv0DOkPk2wD2nZEIGckcm5NDCsCwBbDQ%2FSTceDOdHTV9aRIUU4TCVQyGoXNxNOHvkgeW9rOZIB6kRBm8HollE4Wmuiy0Y81sU4uMqzxXoLZS5hs8jxsHUWSr3XWmYpGNoxtPBclJBypzP7hcwua6HvgY6pgFmuBYnlJ7L7Uy52cpubRVzK6hsLrJFdEuUf%2BgWX7qXf1UfjtAutroW9AHEdFokrqFp3fr0Z0jbeOUSdneIj0EhlfecQjP%2FPIK3yuTPeFlttWPlcnjsaxy4fz%2FcJcCKsiB4hA03HVNDBJ020qvlN1dLNwk%2BkehJJy1ihBGtD%2B5f0WN%2BNKOpMl67WrWEuDLdfp9QODfbVFuPmhUDfcEewdKeXKgU3rBH&X-Amz-Signature=3e2ebcc2a1afa9ca662b7724ebaec29de13c6a4fef07865201152553760a7a85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSXQXJKK%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIGA9UFwv00Y1J65u3D%2FCCAH5kqVyboDqdNasjV381cQfAiB%2BXmgexjigy7B%2BizZpyBSwCUVIb5kwhiTgbI6YgwJyvyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2F%2FIvva8kjyfWmhtKtwDoa8GkHRKegypqtE4pbzm%2FYLpr98BcwC9NOlEiXb6%2B6qJi0q2nvgt7h2xlaSiwoLDgNJA%2FFo%2BC4aX2GBE9yl53IEqFkdjqImxEVmN%2FdeHQuaxRi5i87WJ9OWGB7E7xEMxoRg7BEoMFw5JxFiCKgwla9CLhTTrWJNAcarx4arjXLfw6UJf0r8oACTrmAha9kTtm3amxSkL4rwF7kUiqIwI3jiaipJjVLhRo4WRvbVJS5vDgH4BfqTbIXGhShHhOOXjlt6yee9sNt%2BwDI1XJ0ilz3ao3BB5FHp0M1bJLMY5gk5cKRwVUoYSPBS5lzxo8cz%2B2SlF36eV7L1G2BtMJzyotUFJhLHi2RyaRltZgKyILax4SBuF2dxQu0Qn7I5tKMq2YL3sgyxrbqufk7vlU3gxslzGqlSldXMqHgZDoVHqtjJMPBpN5vdGO6769jUPbLI1iJTr8vP%2BCvF%2B5aYIO41VI%2BsIn9i3NL3NPH4K9UjSForcv0DOkPk2wD2nZEIGckcm5NDCsCwBbDQ%2FSTceDOdHTV9aRIUU4TCVQyGoXNxNOHvkgeW9rOZIB6kRBm8HollE4Wmuiy0Y81sU4uMqzxXoLZS5hs8jxsHUWSr3XWmYpGNoxtPBclJBypzP7hcwua6HvgY6pgFmuBYnlJ7L7Uy52cpubRVzK6hsLrJFdEuUf%2BgWX7qXf1UfjtAutroW9AHEdFokrqFp3fr0Z0jbeOUSdneIj0EhlfecQjP%2FPIK3yuTPeFlttWPlcnjsaxy4fz%2FcJcCKsiB4hA03HVNDBJ020qvlN1dLNwk%2BkehJJy1ihBGtD%2B5f0WN%2BNKOpMl67WrWEuDLdfp9QODfbVFuPmhUDfcEewdKeXKgU3rBH&X-Amz-Signature=3705727d52f2cde2c80f49dee610897102645df2df9fc27cd186689e8c49f0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
