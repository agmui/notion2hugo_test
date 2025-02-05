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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3B6LHED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFwaoJgxXdQXUgp0I5SXS47IGFHMzZ2jCkLlAWUS%2BtIaAiEAkKSNpKWSDjAMLXcLuoKB8WMecwfl2f7upGnTBtapeeYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAjNxL6iSqG%2Fc7eVjyrcA0xVE57Bt5wqpDC8oYU7NBCHFQpyz6rhNKd3Hve4IDSS4vo5akYR6iCGB%2FRp6Ndc%2Br9MB8c0Sd1RXErILTnoD30CDMOgBlwIEndU7U9go8D51CCIMVzvtTrHQTyykX%2Fkct58w4RbqNEx78fRRTwRibCey%2BvyLdkmusPllRQEhK5dj7PgfexpVQJd2SwfYHjJv8GUm3RJ6915%2Buy9j64fJb8qM%2BxUSF1o4q30ubulC41gOdeag3IFksSzvns3YprHL4B10Mo2gHXKalhDUiE2l7iAgj3Uj2ckcccf6InJGcDZMUYn0G7GZzLzRUeKQH8qUiZtC9i5mar87XhhUREo9BNDX%2FInC3EjedNGifHbHUYP1oKJBl%2ByjbVDUTsxkt%2FFk6V7w4nH72KVuTgLhPTK62cxdiOTR%2BPwON4hOXtSUB3EarHPhe8wnC2EHPyqo4ahdGvWxZey2yf6rRncKFjUMe1jtjJyUygYjzVAL9Iq%2BOpAYzl5HkSOQzcJ9x7GO%2BJrfyYjXMShNZbZ%2F6YWJlyvfAw%2FFrOXGmOaUlCK0M1%2FOG4Z6f8Y%2FLzLt11qPLNwqZAZ4BCrNyFEPBYiFUf4c544fAR4CiAZD%2F40faoSu7G4BMj2iY6gxe5xAkhRDU9dMLu7jr0GOqUBc%2Ftsdamn2YzdqCRD08Hh3msV1W%2FC6RU5w8ekN%2F1Svk%2FjuNNzetjNVEKgxj97Wz%2BZUoVWey%2FZKVVVvqlG2EWO%2FrNc5t2DHZ60PVHx6O2tricLODT6Ifi8QIyfoaYDf2mvzkezoX9vR5lp%2FAiO2TlsSp%2BtE6nfoG5X%2FqRN5yNpqevr652VNqP91dldyUYmOHzEL%2Fw0rSjv%2FGoJow0GLY30Tvjxdln7&X-Amz-Signature=29aeb9f6e314240f6e232fcfd1f236fdc39951ca86df79b53b7377c3a0172137&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3B6LHED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFwaoJgxXdQXUgp0I5SXS47IGFHMzZ2jCkLlAWUS%2BtIaAiEAkKSNpKWSDjAMLXcLuoKB8WMecwfl2f7upGnTBtapeeYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAjNxL6iSqG%2Fc7eVjyrcA0xVE57Bt5wqpDC8oYU7NBCHFQpyz6rhNKd3Hve4IDSS4vo5akYR6iCGB%2FRp6Ndc%2Br9MB8c0Sd1RXErILTnoD30CDMOgBlwIEndU7U9go8D51CCIMVzvtTrHQTyykX%2Fkct58w4RbqNEx78fRRTwRibCey%2BvyLdkmusPllRQEhK5dj7PgfexpVQJd2SwfYHjJv8GUm3RJ6915%2Buy9j64fJb8qM%2BxUSF1o4q30ubulC41gOdeag3IFksSzvns3YprHL4B10Mo2gHXKalhDUiE2l7iAgj3Uj2ckcccf6InJGcDZMUYn0G7GZzLzRUeKQH8qUiZtC9i5mar87XhhUREo9BNDX%2FInC3EjedNGifHbHUYP1oKJBl%2ByjbVDUTsxkt%2FFk6V7w4nH72KVuTgLhPTK62cxdiOTR%2BPwON4hOXtSUB3EarHPhe8wnC2EHPyqo4ahdGvWxZey2yf6rRncKFjUMe1jtjJyUygYjzVAL9Iq%2BOpAYzl5HkSOQzcJ9x7GO%2BJrfyYjXMShNZbZ%2F6YWJlyvfAw%2FFrOXGmOaUlCK0M1%2FOG4Z6f8Y%2FLzLt11qPLNwqZAZ4BCrNyFEPBYiFUf4c544fAR4CiAZD%2F40faoSu7G4BMj2iY6gxe5xAkhRDU9dMLu7jr0GOqUBc%2Ftsdamn2YzdqCRD08Hh3msV1W%2FC6RU5w8ekN%2F1Svk%2FjuNNzetjNVEKgxj97Wz%2BZUoVWey%2FZKVVVvqlG2EWO%2FrNc5t2DHZ60PVHx6O2tricLODT6Ifi8QIyfoaYDf2mvzkezoX9vR5lp%2FAiO2TlsSp%2BtE6nfoG5X%2FqRN5yNpqevr652VNqP91dldyUYmOHzEL%2Fw0rSjv%2FGoJow0GLY30Tvjxdln7&X-Amz-Signature=fd77bdd3277166824c666ee1ee8cef853bfef637b287b769576f79de5c2e9d62&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3B6LHED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFwaoJgxXdQXUgp0I5SXS47IGFHMzZ2jCkLlAWUS%2BtIaAiEAkKSNpKWSDjAMLXcLuoKB8WMecwfl2f7upGnTBtapeeYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAjNxL6iSqG%2Fc7eVjyrcA0xVE57Bt5wqpDC8oYU7NBCHFQpyz6rhNKd3Hve4IDSS4vo5akYR6iCGB%2FRp6Ndc%2Br9MB8c0Sd1RXErILTnoD30CDMOgBlwIEndU7U9go8D51CCIMVzvtTrHQTyykX%2Fkct58w4RbqNEx78fRRTwRibCey%2BvyLdkmusPllRQEhK5dj7PgfexpVQJd2SwfYHjJv8GUm3RJ6915%2Buy9j64fJb8qM%2BxUSF1o4q30ubulC41gOdeag3IFksSzvns3YprHL4B10Mo2gHXKalhDUiE2l7iAgj3Uj2ckcccf6InJGcDZMUYn0G7GZzLzRUeKQH8qUiZtC9i5mar87XhhUREo9BNDX%2FInC3EjedNGifHbHUYP1oKJBl%2ByjbVDUTsxkt%2FFk6V7w4nH72KVuTgLhPTK62cxdiOTR%2BPwON4hOXtSUB3EarHPhe8wnC2EHPyqo4ahdGvWxZey2yf6rRncKFjUMe1jtjJyUygYjzVAL9Iq%2BOpAYzl5HkSOQzcJ9x7GO%2BJrfyYjXMShNZbZ%2F6YWJlyvfAw%2FFrOXGmOaUlCK0M1%2FOG4Z6f8Y%2FLzLt11qPLNwqZAZ4BCrNyFEPBYiFUf4c544fAR4CiAZD%2F40faoSu7G4BMj2iY6gxe5xAkhRDU9dMLu7jr0GOqUBc%2Ftsdamn2YzdqCRD08Hh3msV1W%2FC6RU5w8ekN%2F1Svk%2FjuNNzetjNVEKgxj97Wz%2BZUoVWey%2FZKVVVvqlG2EWO%2FrNc5t2DHZ60PVHx6O2tricLODT6Ifi8QIyfoaYDf2mvzkezoX9vR5lp%2FAiO2TlsSp%2BtE6nfoG5X%2FqRN5yNpqevr652VNqP91dldyUYmOHzEL%2Fw0rSjv%2FGoJow0GLY30Tvjxdln7&X-Amz-Signature=d8f8e6dfdf3ad19a8e88176bf54835ff2834608afe168454268826227ff1aa40&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3B6LHED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFwaoJgxXdQXUgp0I5SXS47IGFHMzZ2jCkLlAWUS%2BtIaAiEAkKSNpKWSDjAMLXcLuoKB8WMecwfl2f7upGnTBtapeeYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAjNxL6iSqG%2Fc7eVjyrcA0xVE57Bt5wqpDC8oYU7NBCHFQpyz6rhNKd3Hve4IDSS4vo5akYR6iCGB%2FRp6Ndc%2Br9MB8c0Sd1RXErILTnoD30CDMOgBlwIEndU7U9go8D51CCIMVzvtTrHQTyykX%2Fkct58w4RbqNEx78fRRTwRibCey%2BvyLdkmusPllRQEhK5dj7PgfexpVQJd2SwfYHjJv8GUm3RJ6915%2Buy9j64fJb8qM%2BxUSF1o4q30ubulC41gOdeag3IFksSzvns3YprHL4B10Mo2gHXKalhDUiE2l7iAgj3Uj2ckcccf6InJGcDZMUYn0G7GZzLzRUeKQH8qUiZtC9i5mar87XhhUREo9BNDX%2FInC3EjedNGifHbHUYP1oKJBl%2ByjbVDUTsxkt%2FFk6V7w4nH72KVuTgLhPTK62cxdiOTR%2BPwON4hOXtSUB3EarHPhe8wnC2EHPyqo4ahdGvWxZey2yf6rRncKFjUMe1jtjJyUygYjzVAL9Iq%2BOpAYzl5HkSOQzcJ9x7GO%2BJrfyYjXMShNZbZ%2F6YWJlyvfAw%2FFrOXGmOaUlCK0M1%2FOG4Z6f8Y%2FLzLt11qPLNwqZAZ4BCrNyFEPBYiFUf4c544fAR4CiAZD%2F40faoSu7G4BMj2iY6gxe5xAkhRDU9dMLu7jr0GOqUBc%2Ftsdamn2YzdqCRD08Hh3msV1W%2FC6RU5w8ekN%2F1Svk%2FjuNNzetjNVEKgxj97Wz%2BZUoVWey%2FZKVVVvqlG2EWO%2FrNc5t2DHZ60PVHx6O2tricLODT6Ifi8QIyfoaYDf2mvzkezoX9vR5lp%2FAiO2TlsSp%2BtE6nfoG5X%2FqRN5yNpqevr652VNqP91dldyUYmOHzEL%2Fw0rSjv%2FGoJow0GLY30Tvjxdln7&X-Amz-Signature=691102e3a6b6dd42296a29a21e30ec850cb3060cdcdb633300dcbea4a48c629f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3B6LHED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFwaoJgxXdQXUgp0I5SXS47IGFHMzZ2jCkLlAWUS%2BtIaAiEAkKSNpKWSDjAMLXcLuoKB8WMecwfl2f7upGnTBtapeeYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAjNxL6iSqG%2Fc7eVjyrcA0xVE57Bt5wqpDC8oYU7NBCHFQpyz6rhNKd3Hve4IDSS4vo5akYR6iCGB%2FRp6Ndc%2Br9MB8c0Sd1RXErILTnoD30CDMOgBlwIEndU7U9go8D51CCIMVzvtTrHQTyykX%2Fkct58w4RbqNEx78fRRTwRibCey%2BvyLdkmusPllRQEhK5dj7PgfexpVQJd2SwfYHjJv8GUm3RJ6915%2Buy9j64fJb8qM%2BxUSF1o4q30ubulC41gOdeag3IFksSzvns3YprHL4B10Mo2gHXKalhDUiE2l7iAgj3Uj2ckcccf6InJGcDZMUYn0G7GZzLzRUeKQH8qUiZtC9i5mar87XhhUREo9BNDX%2FInC3EjedNGifHbHUYP1oKJBl%2ByjbVDUTsxkt%2FFk6V7w4nH72KVuTgLhPTK62cxdiOTR%2BPwON4hOXtSUB3EarHPhe8wnC2EHPyqo4ahdGvWxZey2yf6rRncKFjUMe1jtjJyUygYjzVAL9Iq%2BOpAYzl5HkSOQzcJ9x7GO%2BJrfyYjXMShNZbZ%2F6YWJlyvfAw%2FFrOXGmOaUlCK0M1%2FOG4Z6f8Y%2FLzLt11qPLNwqZAZ4BCrNyFEPBYiFUf4c544fAR4CiAZD%2F40faoSu7G4BMj2iY6gxe5xAkhRDU9dMLu7jr0GOqUBc%2Ftsdamn2YzdqCRD08Hh3msV1W%2FC6RU5w8ekN%2F1Svk%2FjuNNzetjNVEKgxj97Wz%2BZUoVWey%2FZKVVVvqlG2EWO%2FrNc5t2DHZ60PVHx6O2tricLODT6Ifi8QIyfoaYDf2mvzkezoX9vR5lp%2FAiO2TlsSp%2BtE6nfoG5X%2FqRN5yNpqevr652VNqP91dldyUYmOHzEL%2Fw0rSjv%2FGoJow0GLY30Tvjxdln7&X-Amz-Signature=acc2c46d067e036c1451abbe5926b1b19cc58956e7277566540f63c0b70d23b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3B6LHED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFwaoJgxXdQXUgp0I5SXS47IGFHMzZ2jCkLlAWUS%2BtIaAiEAkKSNpKWSDjAMLXcLuoKB8WMecwfl2f7upGnTBtapeeYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAjNxL6iSqG%2Fc7eVjyrcA0xVE57Bt5wqpDC8oYU7NBCHFQpyz6rhNKd3Hve4IDSS4vo5akYR6iCGB%2FRp6Ndc%2Br9MB8c0Sd1RXErILTnoD30CDMOgBlwIEndU7U9go8D51CCIMVzvtTrHQTyykX%2Fkct58w4RbqNEx78fRRTwRibCey%2BvyLdkmusPllRQEhK5dj7PgfexpVQJd2SwfYHjJv8GUm3RJ6915%2Buy9j64fJb8qM%2BxUSF1o4q30ubulC41gOdeag3IFksSzvns3YprHL4B10Mo2gHXKalhDUiE2l7iAgj3Uj2ckcccf6InJGcDZMUYn0G7GZzLzRUeKQH8qUiZtC9i5mar87XhhUREo9BNDX%2FInC3EjedNGifHbHUYP1oKJBl%2ByjbVDUTsxkt%2FFk6V7w4nH72KVuTgLhPTK62cxdiOTR%2BPwON4hOXtSUB3EarHPhe8wnC2EHPyqo4ahdGvWxZey2yf6rRncKFjUMe1jtjJyUygYjzVAL9Iq%2BOpAYzl5HkSOQzcJ9x7GO%2BJrfyYjXMShNZbZ%2F6YWJlyvfAw%2FFrOXGmOaUlCK0M1%2FOG4Z6f8Y%2FLzLt11qPLNwqZAZ4BCrNyFEPBYiFUf4c544fAR4CiAZD%2F40faoSu7G4BMj2iY6gxe5xAkhRDU9dMLu7jr0GOqUBc%2Ftsdamn2YzdqCRD08Hh3msV1W%2FC6RU5w8ekN%2F1Svk%2FjuNNzetjNVEKgxj97Wz%2BZUoVWey%2FZKVVVvqlG2EWO%2FrNc5t2DHZ60PVHx6O2tricLODT6Ifi8QIyfoaYDf2mvzkezoX9vR5lp%2FAiO2TlsSp%2BtE6nfoG5X%2FqRN5yNpqevr652VNqP91dldyUYmOHzEL%2Fw0rSjv%2FGoJow0GLY30Tvjxdln7&X-Amz-Signature=4a5964803e9e71fbbd178c746af6440d5c0d266a0a77d3c1ee6887946dc7396c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3B6LHED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFwaoJgxXdQXUgp0I5SXS47IGFHMzZ2jCkLlAWUS%2BtIaAiEAkKSNpKWSDjAMLXcLuoKB8WMecwfl2f7upGnTBtapeeYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAjNxL6iSqG%2Fc7eVjyrcA0xVE57Bt5wqpDC8oYU7NBCHFQpyz6rhNKd3Hve4IDSS4vo5akYR6iCGB%2FRp6Ndc%2Br9MB8c0Sd1RXErILTnoD30CDMOgBlwIEndU7U9go8D51CCIMVzvtTrHQTyykX%2Fkct58w4RbqNEx78fRRTwRibCey%2BvyLdkmusPllRQEhK5dj7PgfexpVQJd2SwfYHjJv8GUm3RJ6915%2Buy9j64fJb8qM%2BxUSF1o4q30ubulC41gOdeag3IFksSzvns3YprHL4B10Mo2gHXKalhDUiE2l7iAgj3Uj2ckcccf6InJGcDZMUYn0G7GZzLzRUeKQH8qUiZtC9i5mar87XhhUREo9BNDX%2FInC3EjedNGifHbHUYP1oKJBl%2ByjbVDUTsxkt%2FFk6V7w4nH72KVuTgLhPTK62cxdiOTR%2BPwON4hOXtSUB3EarHPhe8wnC2EHPyqo4ahdGvWxZey2yf6rRncKFjUMe1jtjJyUygYjzVAL9Iq%2BOpAYzl5HkSOQzcJ9x7GO%2BJrfyYjXMShNZbZ%2F6YWJlyvfAw%2FFrOXGmOaUlCK0M1%2FOG4Z6f8Y%2FLzLt11qPLNwqZAZ4BCrNyFEPBYiFUf4c544fAR4CiAZD%2F40faoSu7G4BMj2iY6gxe5xAkhRDU9dMLu7jr0GOqUBc%2Ftsdamn2YzdqCRD08Hh3msV1W%2FC6RU5w8ekN%2F1Svk%2FjuNNzetjNVEKgxj97Wz%2BZUoVWey%2FZKVVVvqlG2EWO%2FrNc5t2DHZ60PVHx6O2tricLODT6Ifi8QIyfoaYDf2mvzkezoX9vR5lp%2FAiO2TlsSp%2BtE6nfoG5X%2FqRN5yNpqevr652VNqP91dldyUYmOHzEL%2Fw0rSjv%2FGoJow0GLY30Tvjxdln7&X-Amz-Signature=1967ba0e994872bd258a074f244cbcc15b540dfea3ad116bdf520c909c7e6f40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3B6LHED%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIFwaoJgxXdQXUgp0I5SXS47IGFHMzZ2jCkLlAWUS%2BtIaAiEAkKSNpKWSDjAMLXcLuoKB8WMecwfl2f7upGnTBtapeeYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAjNxL6iSqG%2Fc7eVjyrcA0xVE57Bt5wqpDC8oYU7NBCHFQpyz6rhNKd3Hve4IDSS4vo5akYR6iCGB%2FRp6Ndc%2Br9MB8c0Sd1RXErILTnoD30CDMOgBlwIEndU7U9go8D51CCIMVzvtTrHQTyykX%2Fkct58w4RbqNEx78fRRTwRibCey%2BvyLdkmusPllRQEhK5dj7PgfexpVQJd2SwfYHjJv8GUm3RJ6915%2Buy9j64fJb8qM%2BxUSF1o4q30ubulC41gOdeag3IFksSzvns3YprHL4B10Mo2gHXKalhDUiE2l7iAgj3Uj2ckcccf6InJGcDZMUYn0G7GZzLzRUeKQH8qUiZtC9i5mar87XhhUREo9BNDX%2FInC3EjedNGifHbHUYP1oKJBl%2ByjbVDUTsxkt%2FFk6V7w4nH72KVuTgLhPTK62cxdiOTR%2BPwON4hOXtSUB3EarHPhe8wnC2EHPyqo4ahdGvWxZey2yf6rRncKFjUMe1jtjJyUygYjzVAL9Iq%2BOpAYzl5HkSOQzcJ9x7GO%2BJrfyYjXMShNZbZ%2F6YWJlyvfAw%2FFrOXGmOaUlCK0M1%2FOG4Z6f8Y%2FLzLt11qPLNwqZAZ4BCrNyFEPBYiFUf4c544fAR4CiAZD%2F40faoSu7G4BMj2iY6gxe5xAkhRDU9dMLu7jr0GOqUBc%2Ftsdamn2YzdqCRD08Hh3msV1W%2FC6RU5w8ekN%2F1Svk%2FjuNNzetjNVEKgxj97Wz%2BZUoVWey%2FZKVVVvqlG2EWO%2FrNc5t2DHZ60PVHx6O2tricLODT6Ifi8QIyfoaYDf2mvzkezoX9vR5lp%2FAiO2TlsSp%2BtE6nfoG5X%2FqRN5yNpqevr652VNqP91dldyUYmOHzEL%2Fw0rSjv%2FGoJow0GLY30Tvjxdln7&X-Amz-Signature=abceccc87cae5625e9c7b0fcbce186cd64233dbffa92bdfc80ebc5a0eab1f2f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
