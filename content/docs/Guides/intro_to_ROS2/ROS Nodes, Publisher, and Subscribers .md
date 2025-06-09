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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5JW5XB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJWItg3LJXVXSHh7vymyhrtru8PqpprNBQC6tYJRoBxAiBNn6FR%2Br8iCBZdgBa7Y3zky3qAsfB783xOnncGxwY2oyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hJq2AJ5vz3zPGx0KtwDWRMS%2FC6%2F%2BwtBACLKqWFHRYzni7HkSegRXzjS2oBxvYFRf4QHTZSvKqlHYhFzUgqXJeB5X2vQ93h2vjOIEy%2FCkHU7MJ2M3VFaxiNV5SPxbnVoYbbvco8nKQlzun2AYK8plDf4m27UODtxpLZM7qeMsf27aFcifDZr22WqGeENIWqhcgk6%2FzGLxIO2PcVKCd3QNY4o8ElJR5%2FIXXC35b7%2F%2Fk65PBYVobzFs8uskqY6Mp%2FeX5uQEJlLTyOAqBuwAkSQm9t5ZiC0qobYtSl0ZOfmxAbVT6xiEKaMfbWOhXGDxQb5m785U3xzMobXMXeVW3u9BpVMmFxCjBM4zh%2B2wIBDahH%2BlFrwCDS1Elr9oKPhwvYsA2xnnHLCOO5b7M5%2F3NkIQ0R5O6neTjdP5%2BR%2FaUM8DTWxuiKX3ZuxVvuNp%2BpXotVwiKpHfACfDrZAxrc%2BR1TfDCYawAesIubk9%2BFHd%2BhXciwQk5iVgPb%2BtObOAKQlTHh3LuzSluTDANZYJXgCxrQZGDQDUlKzl8bnleMVQKssmtDSk4cXB5yryfc69OLUclw4my10mCMCXinlaMIrctgmg7M0lRGqX7Kf7qLVNIoDncBofQRz1pB2gv5y7Lto3oMAQmtmTO3Lnkszo4Uwu5acwgY6pgEMP3bpLjDYgKuurxq0hzpeOKDXqSDOluPhLiXvyQ8%2Bb7%2BXWbrbvuygE0qsKppcridH%2FT%2F1CAJ0ZQFk3zlMjSCNQzP1xStFti7I%2FiJKu4a0bFDFGlkIFW6pb0%2BJXil9zlYtiTp9yrFyPbJLv5aVk3kTVYrHaf2jeizoqB9kjOVJFf9DVrLy6YoIRSxNy0F47NVL1sQQshF55mS2y3G1nZ8SpZsXnAuI&X-Amz-Signature=3d9c2f72dc901a005228b3a2fbcb8a6d459bab8a97bf6411bc4d0fb554236e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5JW5XB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJWItg3LJXVXSHh7vymyhrtru8PqpprNBQC6tYJRoBxAiBNn6FR%2Br8iCBZdgBa7Y3zky3qAsfB783xOnncGxwY2oyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hJq2AJ5vz3zPGx0KtwDWRMS%2FC6%2F%2BwtBACLKqWFHRYzni7HkSegRXzjS2oBxvYFRf4QHTZSvKqlHYhFzUgqXJeB5X2vQ93h2vjOIEy%2FCkHU7MJ2M3VFaxiNV5SPxbnVoYbbvco8nKQlzun2AYK8plDf4m27UODtxpLZM7qeMsf27aFcifDZr22WqGeENIWqhcgk6%2FzGLxIO2PcVKCd3QNY4o8ElJR5%2FIXXC35b7%2F%2Fk65PBYVobzFs8uskqY6Mp%2FeX5uQEJlLTyOAqBuwAkSQm9t5ZiC0qobYtSl0ZOfmxAbVT6xiEKaMfbWOhXGDxQb5m785U3xzMobXMXeVW3u9BpVMmFxCjBM4zh%2B2wIBDahH%2BlFrwCDS1Elr9oKPhwvYsA2xnnHLCOO5b7M5%2F3NkIQ0R5O6neTjdP5%2BR%2FaUM8DTWxuiKX3ZuxVvuNp%2BpXotVwiKpHfACfDrZAxrc%2BR1TfDCYawAesIubk9%2BFHd%2BhXciwQk5iVgPb%2BtObOAKQlTHh3LuzSluTDANZYJXgCxrQZGDQDUlKzl8bnleMVQKssmtDSk4cXB5yryfc69OLUclw4my10mCMCXinlaMIrctgmg7M0lRGqX7Kf7qLVNIoDncBofQRz1pB2gv5y7Lto3oMAQmtmTO3Lnkszo4Uwu5acwgY6pgEMP3bpLjDYgKuurxq0hzpeOKDXqSDOluPhLiXvyQ8%2Bb7%2BXWbrbvuygE0qsKppcridH%2FT%2F1CAJ0ZQFk3zlMjSCNQzP1xStFti7I%2FiJKu4a0bFDFGlkIFW6pb0%2BJXil9zlYtiTp9yrFyPbJLv5aVk3kTVYrHaf2jeizoqB9kjOVJFf9DVrLy6YoIRSxNy0F47NVL1sQQshF55mS2y3G1nZ8SpZsXnAuI&X-Amz-Signature=8d5ea469e51f39f31a053e133a2a8f339536e55886e2d0d15a2b6947ca88670c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5JW5XB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJWItg3LJXVXSHh7vymyhrtru8PqpprNBQC6tYJRoBxAiBNn6FR%2Br8iCBZdgBa7Y3zky3qAsfB783xOnncGxwY2oyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hJq2AJ5vz3zPGx0KtwDWRMS%2FC6%2F%2BwtBACLKqWFHRYzni7HkSegRXzjS2oBxvYFRf4QHTZSvKqlHYhFzUgqXJeB5X2vQ93h2vjOIEy%2FCkHU7MJ2M3VFaxiNV5SPxbnVoYbbvco8nKQlzun2AYK8plDf4m27UODtxpLZM7qeMsf27aFcifDZr22WqGeENIWqhcgk6%2FzGLxIO2PcVKCd3QNY4o8ElJR5%2FIXXC35b7%2F%2Fk65PBYVobzFs8uskqY6Mp%2FeX5uQEJlLTyOAqBuwAkSQm9t5ZiC0qobYtSl0ZOfmxAbVT6xiEKaMfbWOhXGDxQb5m785U3xzMobXMXeVW3u9BpVMmFxCjBM4zh%2B2wIBDahH%2BlFrwCDS1Elr9oKPhwvYsA2xnnHLCOO5b7M5%2F3NkIQ0R5O6neTjdP5%2BR%2FaUM8DTWxuiKX3ZuxVvuNp%2BpXotVwiKpHfACfDrZAxrc%2BR1TfDCYawAesIubk9%2BFHd%2BhXciwQk5iVgPb%2BtObOAKQlTHh3LuzSluTDANZYJXgCxrQZGDQDUlKzl8bnleMVQKssmtDSk4cXB5yryfc69OLUclw4my10mCMCXinlaMIrctgmg7M0lRGqX7Kf7qLVNIoDncBofQRz1pB2gv5y7Lto3oMAQmtmTO3Lnkszo4Uwu5acwgY6pgEMP3bpLjDYgKuurxq0hzpeOKDXqSDOluPhLiXvyQ8%2Bb7%2BXWbrbvuygE0qsKppcridH%2FT%2F1CAJ0ZQFk3zlMjSCNQzP1xStFti7I%2FiJKu4a0bFDFGlkIFW6pb0%2BJXil9zlYtiTp9yrFyPbJLv5aVk3kTVYrHaf2jeizoqB9kjOVJFf9DVrLy6YoIRSxNy0F47NVL1sQQshF55mS2y3G1nZ8SpZsXnAuI&X-Amz-Signature=eb8e9210c863065db99a7bc49e1691f5ad370dc1be40c8e23a5237acd778cea3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5JW5XB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJWItg3LJXVXSHh7vymyhrtru8PqpprNBQC6tYJRoBxAiBNn6FR%2Br8iCBZdgBa7Y3zky3qAsfB783xOnncGxwY2oyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hJq2AJ5vz3zPGx0KtwDWRMS%2FC6%2F%2BwtBACLKqWFHRYzni7HkSegRXzjS2oBxvYFRf4QHTZSvKqlHYhFzUgqXJeB5X2vQ93h2vjOIEy%2FCkHU7MJ2M3VFaxiNV5SPxbnVoYbbvco8nKQlzun2AYK8plDf4m27UODtxpLZM7qeMsf27aFcifDZr22WqGeENIWqhcgk6%2FzGLxIO2PcVKCd3QNY4o8ElJR5%2FIXXC35b7%2F%2Fk65PBYVobzFs8uskqY6Mp%2FeX5uQEJlLTyOAqBuwAkSQm9t5ZiC0qobYtSl0ZOfmxAbVT6xiEKaMfbWOhXGDxQb5m785U3xzMobXMXeVW3u9BpVMmFxCjBM4zh%2B2wIBDahH%2BlFrwCDS1Elr9oKPhwvYsA2xnnHLCOO5b7M5%2F3NkIQ0R5O6neTjdP5%2BR%2FaUM8DTWxuiKX3ZuxVvuNp%2BpXotVwiKpHfACfDrZAxrc%2BR1TfDCYawAesIubk9%2BFHd%2BhXciwQk5iVgPb%2BtObOAKQlTHh3LuzSluTDANZYJXgCxrQZGDQDUlKzl8bnleMVQKssmtDSk4cXB5yryfc69OLUclw4my10mCMCXinlaMIrctgmg7M0lRGqX7Kf7qLVNIoDncBofQRz1pB2gv5y7Lto3oMAQmtmTO3Lnkszo4Uwu5acwgY6pgEMP3bpLjDYgKuurxq0hzpeOKDXqSDOluPhLiXvyQ8%2Bb7%2BXWbrbvuygE0qsKppcridH%2FT%2F1CAJ0ZQFk3zlMjSCNQzP1xStFti7I%2FiJKu4a0bFDFGlkIFW6pb0%2BJXil9zlYtiTp9yrFyPbJLv5aVk3kTVYrHaf2jeizoqB9kjOVJFf9DVrLy6YoIRSxNy0F47NVL1sQQshF55mS2y3G1nZ8SpZsXnAuI&X-Amz-Signature=d17cda9bf4281733814817188f979e6594f8b03fe28d4a270ff1a3fd237988bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5JW5XB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJWItg3LJXVXSHh7vymyhrtru8PqpprNBQC6tYJRoBxAiBNn6FR%2Br8iCBZdgBa7Y3zky3qAsfB783xOnncGxwY2oyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hJq2AJ5vz3zPGx0KtwDWRMS%2FC6%2F%2BwtBACLKqWFHRYzni7HkSegRXzjS2oBxvYFRf4QHTZSvKqlHYhFzUgqXJeB5X2vQ93h2vjOIEy%2FCkHU7MJ2M3VFaxiNV5SPxbnVoYbbvco8nKQlzun2AYK8plDf4m27UODtxpLZM7qeMsf27aFcifDZr22WqGeENIWqhcgk6%2FzGLxIO2PcVKCd3QNY4o8ElJR5%2FIXXC35b7%2F%2Fk65PBYVobzFs8uskqY6Mp%2FeX5uQEJlLTyOAqBuwAkSQm9t5ZiC0qobYtSl0ZOfmxAbVT6xiEKaMfbWOhXGDxQb5m785U3xzMobXMXeVW3u9BpVMmFxCjBM4zh%2B2wIBDahH%2BlFrwCDS1Elr9oKPhwvYsA2xnnHLCOO5b7M5%2F3NkIQ0R5O6neTjdP5%2BR%2FaUM8DTWxuiKX3ZuxVvuNp%2BpXotVwiKpHfACfDrZAxrc%2BR1TfDCYawAesIubk9%2BFHd%2BhXciwQk5iVgPb%2BtObOAKQlTHh3LuzSluTDANZYJXgCxrQZGDQDUlKzl8bnleMVQKssmtDSk4cXB5yryfc69OLUclw4my10mCMCXinlaMIrctgmg7M0lRGqX7Kf7qLVNIoDncBofQRz1pB2gv5y7Lto3oMAQmtmTO3Lnkszo4Uwu5acwgY6pgEMP3bpLjDYgKuurxq0hzpeOKDXqSDOluPhLiXvyQ8%2Bb7%2BXWbrbvuygE0qsKppcridH%2FT%2F1CAJ0ZQFk3zlMjSCNQzP1xStFti7I%2FiJKu4a0bFDFGlkIFW6pb0%2BJXil9zlYtiTp9yrFyPbJLv5aVk3kTVYrHaf2jeizoqB9kjOVJFf9DVrLy6YoIRSxNy0F47NVL1sQQshF55mS2y3G1nZ8SpZsXnAuI&X-Amz-Signature=1083cbc2b333189c7f18a45b6bd9b11de2b4184b1a3874bddb057e7ac48f889f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5JW5XB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJWItg3LJXVXSHh7vymyhrtru8PqpprNBQC6tYJRoBxAiBNn6FR%2Br8iCBZdgBa7Y3zky3qAsfB783xOnncGxwY2oyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hJq2AJ5vz3zPGx0KtwDWRMS%2FC6%2F%2BwtBACLKqWFHRYzni7HkSegRXzjS2oBxvYFRf4QHTZSvKqlHYhFzUgqXJeB5X2vQ93h2vjOIEy%2FCkHU7MJ2M3VFaxiNV5SPxbnVoYbbvco8nKQlzun2AYK8plDf4m27UODtxpLZM7qeMsf27aFcifDZr22WqGeENIWqhcgk6%2FzGLxIO2PcVKCd3QNY4o8ElJR5%2FIXXC35b7%2F%2Fk65PBYVobzFs8uskqY6Mp%2FeX5uQEJlLTyOAqBuwAkSQm9t5ZiC0qobYtSl0ZOfmxAbVT6xiEKaMfbWOhXGDxQb5m785U3xzMobXMXeVW3u9BpVMmFxCjBM4zh%2B2wIBDahH%2BlFrwCDS1Elr9oKPhwvYsA2xnnHLCOO5b7M5%2F3NkIQ0R5O6neTjdP5%2BR%2FaUM8DTWxuiKX3ZuxVvuNp%2BpXotVwiKpHfACfDrZAxrc%2BR1TfDCYawAesIubk9%2BFHd%2BhXciwQk5iVgPb%2BtObOAKQlTHh3LuzSluTDANZYJXgCxrQZGDQDUlKzl8bnleMVQKssmtDSk4cXB5yryfc69OLUclw4my10mCMCXinlaMIrctgmg7M0lRGqX7Kf7qLVNIoDncBofQRz1pB2gv5y7Lto3oMAQmtmTO3Lnkszo4Uwu5acwgY6pgEMP3bpLjDYgKuurxq0hzpeOKDXqSDOluPhLiXvyQ8%2Bb7%2BXWbrbvuygE0qsKppcridH%2FT%2F1CAJ0ZQFk3zlMjSCNQzP1xStFti7I%2FiJKu4a0bFDFGlkIFW6pb0%2BJXil9zlYtiTp9yrFyPbJLv5aVk3kTVYrHaf2jeizoqB9kjOVJFf9DVrLy6YoIRSxNy0F47NVL1sQQshF55mS2y3G1nZ8SpZsXnAuI&X-Amz-Signature=d971235ddd12cc1854101caa9af1d4aeef77dd00feeab8925d7b521dc2fb1bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5JW5XB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJWItg3LJXVXSHh7vymyhrtru8PqpprNBQC6tYJRoBxAiBNn6FR%2Br8iCBZdgBa7Y3zky3qAsfB783xOnncGxwY2oyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hJq2AJ5vz3zPGx0KtwDWRMS%2FC6%2F%2BwtBACLKqWFHRYzni7HkSegRXzjS2oBxvYFRf4QHTZSvKqlHYhFzUgqXJeB5X2vQ93h2vjOIEy%2FCkHU7MJ2M3VFaxiNV5SPxbnVoYbbvco8nKQlzun2AYK8plDf4m27UODtxpLZM7qeMsf27aFcifDZr22WqGeENIWqhcgk6%2FzGLxIO2PcVKCd3QNY4o8ElJR5%2FIXXC35b7%2F%2Fk65PBYVobzFs8uskqY6Mp%2FeX5uQEJlLTyOAqBuwAkSQm9t5ZiC0qobYtSl0ZOfmxAbVT6xiEKaMfbWOhXGDxQb5m785U3xzMobXMXeVW3u9BpVMmFxCjBM4zh%2B2wIBDahH%2BlFrwCDS1Elr9oKPhwvYsA2xnnHLCOO5b7M5%2F3NkIQ0R5O6neTjdP5%2BR%2FaUM8DTWxuiKX3ZuxVvuNp%2BpXotVwiKpHfACfDrZAxrc%2BR1TfDCYawAesIubk9%2BFHd%2BhXciwQk5iVgPb%2BtObOAKQlTHh3LuzSluTDANZYJXgCxrQZGDQDUlKzl8bnleMVQKssmtDSk4cXB5yryfc69OLUclw4my10mCMCXinlaMIrctgmg7M0lRGqX7Kf7qLVNIoDncBofQRz1pB2gv5y7Lto3oMAQmtmTO3Lnkszo4Uwu5acwgY6pgEMP3bpLjDYgKuurxq0hzpeOKDXqSDOluPhLiXvyQ8%2Bb7%2BXWbrbvuygE0qsKppcridH%2FT%2F1CAJ0ZQFk3zlMjSCNQzP1xStFti7I%2FiJKu4a0bFDFGlkIFW6pb0%2BJXil9zlYtiTp9yrFyPbJLv5aVk3kTVYrHaf2jeizoqB9kjOVJFf9DVrLy6YoIRSxNy0F47NVL1sQQshF55mS2y3G1nZ8SpZsXnAuI&X-Amz-Signature=00fd32b985e9beda7166ee4a274edcb705606d587ba1269711c7ea4965fcbe5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F5JW5XB%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJWItg3LJXVXSHh7vymyhrtru8PqpprNBQC6tYJRoBxAiBNn6FR%2Br8iCBZdgBa7Y3zky3qAsfB783xOnncGxwY2oyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hJq2AJ5vz3zPGx0KtwDWRMS%2FC6%2F%2BwtBACLKqWFHRYzni7HkSegRXzjS2oBxvYFRf4QHTZSvKqlHYhFzUgqXJeB5X2vQ93h2vjOIEy%2FCkHU7MJ2M3VFaxiNV5SPxbnVoYbbvco8nKQlzun2AYK8plDf4m27UODtxpLZM7qeMsf27aFcifDZr22WqGeENIWqhcgk6%2FzGLxIO2PcVKCd3QNY4o8ElJR5%2FIXXC35b7%2F%2Fk65PBYVobzFs8uskqY6Mp%2FeX5uQEJlLTyOAqBuwAkSQm9t5ZiC0qobYtSl0ZOfmxAbVT6xiEKaMfbWOhXGDxQb5m785U3xzMobXMXeVW3u9BpVMmFxCjBM4zh%2B2wIBDahH%2BlFrwCDS1Elr9oKPhwvYsA2xnnHLCOO5b7M5%2F3NkIQ0R5O6neTjdP5%2BR%2FaUM8DTWxuiKX3ZuxVvuNp%2BpXotVwiKpHfACfDrZAxrc%2BR1TfDCYawAesIubk9%2BFHd%2BhXciwQk5iVgPb%2BtObOAKQlTHh3LuzSluTDANZYJXgCxrQZGDQDUlKzl8bnleMVQKssmtDSk4cXB5yryfc69OLUclw4my10mCMCXinlaMIrctgmg7M0lRGqX7Kf7qLVNIoDncBofQRz1pB2gv5y7Lto3oMAQmtmTO3Lnkszo4Uwu5acwgY6pgEMP3bpLjDYgKuurxq0hzpeOKDXqSDOluPhLiXvyQ8%2Bb7%2BXWbrbvuygE0qsKppcridH%2FT%2F1CAJ0ZQFk3zlMjSCNQzP1xStFti7I%2FiJKu4a0bFDFGlkIFW6pb0%2BJXil9zlYtiTp9yrFyPbJLv5aVk3kTVYrHaf2jeizoqB9kjOVJFf9DVrLy6YoIRSxNy0F47NVL1sQQshF55mS2y3G1nZ8SpZsXnAuI&X-Amz-Signature=9d245bb26617780897c909b4fa581fb76ca2a725efbd82fa04c6f8d8d605f12b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
