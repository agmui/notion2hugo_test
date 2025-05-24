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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCJWHPF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDkND72LJ2yjo90tm7QiZe%2By9zuMIsI7%2B0t%2BbpFoc9LmwIgJWi4OXWyZHEEU62PJ7qkInaBoZnAEdQBMZdUVvrW7oAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM%2B3W1uLUCHGdH3szyrcA3tNId2ex5IeUF5em3DTZwghQIhLRUBJNLIrcdvqZEvh8G2m%2FADpyFZ4oVJYlOCTK7XELG%2FocN7EGZNZbY3k3HyOmqeNIyhwpEM1Fcyi%2BqspRmWRxTXA%2F5PhOiD0Cx9h7ula1sK%2F1OKYtHrGnQgwO2XZL%2F9H4ylbX2hc8UjdjHrpxX8kbzUSiGyRcsYVa80859aXFUz9xZusLMuSM9pTLhppKgNXFHgoxxBGt%2BWh4O0t0htjIswUX6xTPwXeqWGYGrUFnaF3wQ%2FEmce4VaI8dZTuVBZiyV7nIsTyjy1OkTO3p4aq8jX%2F4KJw3pil%2BRoJVWra7X6waykEfvgdoLYxtBt9VEDYvFXwAN0VBjRdnvHNjR%2FjjgC%2Bh9o2ZqlPKxevnJb7%2FtflORVWgcTaL0v06QLk3wwdKZqmbsrJBRuXlMLJyb1QE%2BzoC6wK26Wp32Fp0uRO3OPVXHyKG36Pj6R0xAr0jTUbnjkNL7%2BSXKvKGchl1dQSyBLoG46%2BzY7NQTeIxEqfsVvNcUgtyMb7lhJyzEbB3HJhagbuBr4wfvEsglp%2BpDS36NtB1p10CRbVmAmyUGesk6XFkZ7ZvsJZxw5OFKdSR8evN%2FKztNvRWUONnhQAGSM1taTe4LzqE3M1MJeWyMEGOqUBqlpki6Vwr3UQ0fmYRCpdHaclpagb%2Bes4Je7nfRRxYGJazn8wUos4Yoe0i4UH7W7WLaxnmL5%2F66vjEYTYRO8TDhHvEXTYBmftQbB4txl6nj8heedu0fUexzAB9ZsAdYZJ9qzl%2FAKtOgBEe0lu%2FU2lIoLGH1VmjsGwGhqnYB8zoX3T9rKkyPJ11dPFrsh4zWkh5fBtj9P8Nv%2FBwENg0L59OM2KVjpM&X-Amz-Signature=8c8cabd8f33d1164fca8e2cf6b8fc7f40c84cb3314e5abf3039ed8670f84ff8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCJWHPF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDkND72LJ2yjo90tm7QiZe%2By9zuMIsI7%2B0t%2BbpFoc9LmwIgJWi4OXWyZHEEU62PJ7qkInaBoZnAEdQBMZdUVvrW7oAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM%2B3W1uLUCHGdH3szyrcA3tNId2ex5IeUF5em3DTZwghQIhLRUBJNLIrcdvqZEvh8G2m%2FADpyFZ4oVJYlOCTK7XELG%2FocN7EGZNZbY3k3HyOmqeNIyhwpEM1Fcyi%2BqspRmWRxTXA%2F5PhOiD0Cx9h7ula1sK%2F1OKYtHrGnQgwO2XZL%2F9H4ylbX2hc8UjdjHrpxX8kbzUSiGyRcsYVa80859aXFUz9xZusLMuSM9pTLhppKgNXFHgoxxBGt%2BWh4O0t0htjIswUX6xTPwXeqWGYGrUFnaF3wQ%2FEmce4VaI8dZTuVBZiyV7nIsTyjy1OkTO3p4aq8jX%2F4KJw3pil%2BRoJVWra7X6waykEfvgdoLYxtBt9VEDYvFXwAN0VBjRdnvHNjR%2FjjgC%2Bh9o2ZqlPKxevnJb7%2FtflORVWgcTaL0v06QLk3wwdKZqmbsrJBRuXlMLJyb1QE%2BzoC6wK26Wp32Fp0uRO3OPVXHyKG36Pj6R0xAr0jTUbnjkNL7%2BSXKvKGchl1dQSyBLoG46%2BzY7NQTeIxEqfsVvNcUgtyMb7lhJyzEbB3HJhagbuBr4wfvEsglp%2BpDS36NtB1p10CRbVmAmyUGesk6XFkZ7ZvsJZxw5OFKdSR8evN%2FKztNvRWUONnhQAGSM1taTe4LzqE3M1MJeWyMEGOqUBqlpki6Vwr3UQ0fmYRCpdHaclpagb%2Bes4Je7nfRRxYGJazn8wUos4Yoe0i4UH7W7WLaxnmL5%2F66vjEYTYRO8TDhHvEXTYBmftQbB4txl6nj8heedu0fUexzAB9ZsAdYZJ9qzl%2FAKtOgBEe0lu%2FU2lIoLGH1VmjsGwGhqnYB8zoX3T9rKkyPJ11dPFrsh4zWkh5fBtj9P8Nv%2FBwENg0L59OM2KVjpM&X-Amz-Signature=820f3cd0252444a9d83d2f4ad3ac5cf8f58b32f1953837db37e67ba40af9f965&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCJWHPF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDkND72LJ2yjo90tm7QiZe%2By9zuMIsI7%2B0t%2BbpFoc9LmwIgJWi4OXWyZHEEU62PJ7qkInaBoZnAEdQBMZdUVvrW7oAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM%2B3W1uLUCHGdH3szyrcA3tNId2ex5IeUF5em3DTZwghQIhLRUBJNLIrcdvqZEvh8G2m%2FADpyFZ4oVJYlOCTK7XELG%2FocN7EGZNZbY3k3HyOmqeNIyhwpEM1Fcyi%2BqspRmWRxTXA%2F5PhOiD0Cx9h7ula1sK%2F1OKYtHrGnQgwO2XZL%2F9H4ylbX2hc8UjdjHrpxX8kbzUSiGyRcsYVa80859aXFUz9xZusLMuSM9pTLhppKgNXFHgoxxBGt%2BWh4O0t0htjIswUX6xTPwXeqWGYGrUFnaF3wQ%2FEmce4VaI8dZTuVBZiyV7nIsTyjy1OkTO3p4aq8jX%2F4KJw3pil%2BRoJVWra7X6waykEfvgdoLYxtBt9VEDYvFXwAN0VBjRdnvHNjR%2FjjgC%2Bh9o2ZqlPKxevnJb7%2FtflORVWgcTaL0v06QLk3wwdKZqmbsrJBRuXlMLJyb1QE%2BzoC6wK26Wp32Fp0uRO3OPVXHyKG36Pj6R0xAr0jTUbnjkNL7%2BSXKvKGchl1dQSyBLoG46%2BzY7NQTeIxEqfsVvNcUgtyMb7lhJyzEbB3HJhagbuBr4wfvEsglp%2BpDS36NtB1p10CRbVmAmyUGesk6XFkZ7ZvsJZxw5OFKdSR8evN%2FKztNvRWUONnhQAGSM1taTe4LzqE3M1MJeWyMEGOqUBqlpki6Vwr3UQ0fmYRCpdHaclpagb%2Bes4Je7nfRRxYGJazn8wUos4Yoe0i4UH7W7WLaxnmL5%2F66vjEYTYRO8TDhHvEXTYBmftQbB4txl6nj8heedu0fUexzAB9ZsAdYZJ9qzl%2FAKtOgBEe0lu%2FU2lIoLGH1VmjsGwGhqnYB8zoX3T9rKkyPJ11dPFrsh4zWkh5fBtj9P8Nv%2FBwENg0L59OM2KVjpM&X-Amz-Signature=1d74ff139bf377d5c7825a61904c7024884b88e6e53036c9de51030e21e68292&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCJWHPF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDkND72LJ2yjo90tm7QiZe%2By9zuMIsI7%2B0t%2BbpFoc9LmwIgJWi4OXWyZHEEU62PJ7qkInaBoZnAEdQBMZdUVvrW7oAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM%2B3W1uLUCHGdH3szyrcA3tNId2ex5IeUF5em3DTZwghQIhLRUBJNLIrcdvqZEvh8G2m%2FADpyFZ4oVJYlOCTK7XELG%2FocN7EGZNZbY3k3HyOmqeNIyhwpEM1Fcyi%2BqspRmWRxTXA%2F5PhOiD0Cx9h7ula1sK%2F1OKYtHrGnQgwO2XZL%2F9H4ylbX2hc8UjdjHrpxX8kbzUSiGyRcsYVa80859aXFUz9xZusLMuSM9pTLhppKgNXFHgoxxBGt%2BWh4O0t0htjIswUX6xTPwXeqWGYGrUFnaF3wQ%2FEmce4VaI8dZTuVBZiyV7nIsTyjy1OkTO3p4aq8jX%2F4KJw3pil%2BRoJVWra7X6waykEfvgdoLYxtBt9VEDYvFXwAN0VBjRdnvHNjR%2FjjgC%2Bh9o2ZqlPKxevnJb7%2FtflORVWgcTaL0v06QLk3wwdKZqmbsrJBRuXlMLJyb1QE%2BzoC6wK26Wp32Fp0uRO3OPVXHyKG36Pj6R0xAr0jTUbnjkNL7%2BSXKvKGchl1dQSyBLoG46%2BzY7NQTeIxEqfsVvNcUgtyMb7lhJyzEbB3HJhagbuBr4wfvEsglp%2BpDS36NtB1p10CRbVmAmyUGesk6XFkZ7ZvsJZxw5OFKdSR8evN%2FKztNvRWUONnhQAGSM1taTe4LzqE3M1MJeWyMEGOqUBqlpki6Vwr3UQ0fmYRCpdHaclpagb%2Bes4Je7nfRRxYGJazn8wUos4Yoe0i4UH7W7WLaxnmL5%2F66vjEYTYRO8TDhHvEXTYBmftQbB4txl6nj8heedu0fUexzAB9ZsAdYZJ9qzl%2FAKtOgBEe0lu%2FU2lIoLGH1VmjsGwGhqnYB8zoX3T9rKkyPJ11dPFrsh4zWkh5fBtj9P8Nv%2FBwENg0L59OM2KVjpM&X-Amz-Signature=a20b34d345860889f5e66ccace87252785c6573f119538c64fdcf99d8889244d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCJWHPF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDkND72LJ2yjo90tm7QiZe%2By9zuMIsI7%2B0t%2BbpFoc9LmwIgJWi4OXWyZHEEU62PJ7qkInaBoZnAEdQBMZdUVvrW7oAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM%2B3W1uLUCHGdH3szyrcA3tNId2ex5IeUF5em3DTZwghQIhLRUBJNLIrcdvqZEvh8G2m%2FADpyFZ4oVJYlOCTK7XELG%2FocN7EGZNZbY3k3HyOmqeNIyhwpEM1Fcyi%2BqspRmWRxTXA%2F5PhOiD0Cx9h7ula1sK%2F1OKYtHrGnQgwO2XZL%2F9H4ylbX2hc8UjdjHrpxX8kbzUSiGyRcsYVa80859aXFUz9xZusLMuSM9pTLhppKgNXFHgoxxBGt%2BWh4O0t0htjIswUX6xTPwXeqWGYGrUFnaF3wQ%2FEmce4VaI8dZTuVBZiyV7nIsTyjy1OkTO3p4aq8jX%2F4KJw3pil%2BRoJVWra7X6waykEfvgdoLYxtBt9VEDYvFXwAN0VBjRdnvHNjR%2FjjgC%2Bh9o2ZqlPKxevnJb7%2FtflORVWgcTaL0v06QLk3wwdKZqmbsrJBRuXlMLJyb1QE%2BzoC6wK26Wp32Fp0uRO3OPVXHyKG36Pj6R0xAr0jTUbnjkNL7%2BSXKvKGchl1dQSyBLoG46%2BzY7NQTeIxEqfsVvNcUgtyMb7lhJyzEbB3HJhagbuBr4wfvEsglp%2BpDS36NtB1p10CRbVmAmyUGesk6XFkZ7ZvsJZxw5OFKdSR8evN%2FKztNvRWUONnhQAGSM1taTe4LzqE3M1MJeWyMEGOqUBqlpki6Vwr3UQ0fmYRCpdHaclpagb%2Bes4Je7nfRRxYGJazn8wUos4Yoe0i4UH7W7WLaxnmL5%2F66vjEYTYRO8TDhHvEXTYBmftQbB4txl6nj8heedu0fUexzAB9ZsAdYZJ9qzl%2FAKtOgBEe0lu%2FU2lIoLGH1VmjsGwGhqnYB8zoX3T9rKkyPJ11dPFrsh4zWkh5fBtj9P8Nv%2FBwENg0L59OM2KVjpM&X-Amz-Signature=d65e3ef68fb10117447b84d1922a872545f972b4e2d4c1c4bcdcf5a3d0f7473d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCJWHPF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDkND72LJ2yjo90tm7QiZe%2By9zuMIsI7%2B0t%2BbpFoc9LmwIgJWi4OXWyZHEEU62PJ7qkInaBoZnAEdQBMZdUVvrW7oAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM%2B3W1uLUCHGdH3szyrcA3tNId2ex5IeUF5em3DTZwghQIhLRUBJNLIrcdvqZEvh8G2m%2FADpyFZ4oVJYlOCTK7XELG%2FocN7EGZNZbY3k3HyOmqeNIyhwpEM1Fcyi%2BqspRmWRxTXA%2F5PhOiD0Cx9h7ula1sK%2F1OKYtHrGnQgwO2XZL%2F9H4ylbX2hc8UjdjHrpxX8kbzUSiGyRcsYVa80859aXFUz9xZusLMuSM9pTLhppKgNXFHgoxxBGt%2BWh4O0t0htjIswUX6xTPwXeqWGYGrUFnaF3wQ%2FEmce4VaI8dZTuVBZiyV7nIsTyjy1OkTO3p4aq8jX%2F4KJw3pil%2BRoJVWra7X6waykEfvgdoLYxtBt9VEDYvFXwAN0VBjRdnvHNjR%2FjjgC%2Bh9o2ZqlPKxevnJb7%2FtflORVWgcTaL0v06QLk3wwdKZqmbsrJBRuXlMLJyb1QE%2BzoC6wK26Wp32Fp0uRO3OPVXHyKG36Pj6R0xAr0jTUbnjkNL7%2BSXKvKGchl1dQSyBLoG46%2BzY7NQTeIxEqfsVvNcUgtyMb7lhJyzEbB3HJhagbuBr4wfvEsglp%2BpDS36NtB1p10CRbVmAmyUGesk6XFkZ7ZvsJZxw5OFKdSR8evN%2FKztNvRWUONnhQAGSM1taTe4LzqE3M1MJeWyMEGOqUBqlpki6Vwr3UQ0fmYRCpdHaclpagb%2Bes4Je7nfRRxYGJazn8wUos4Yoe0i4UH7W7WLaxnmL5%2F66vjEYTYRO8TDhHvEXTYBmftQbB4txl6nj8heedu0fUexzAB9ZsAdYZJ9qzl%2FAKtOgBEe0lu%2FU2lIoLGH1VmjsGwGhqnYB8zoX3T9rKkyPJ11dPFrsh4zWkh5fBtj9P8Nv%2FBwENg0L59OM2KVjpM&X-Amz-Signature=2fdb322f04c077a20787bc192807c9effacead60adf3a5a3f9e6f2b743eeb07d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCJWHPF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDkND72LJ2yjo90tm7QiZe%2By9zuMIsI7%2B0t%2BbpFoc9LmwIgJWi4OXWyZHEEU62PJ7qkInaBoZnAEdQBMZdUVvrW7oAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM%2B3W1uLUCHGdH3szyrcA3tNId2ex5IeUF5em3DTZwghQIhLRUBJNLIrcdvqZEvh8G2m%2FADpyFZ4oVJYlOCTK7XELG%2FocN7EGZNZbY3k3HyOmqeNIyhwpEM1Fcyi%2BqspRmWRxTXA%2F5PhOiD0Cx9h7ula1sK%2F1OKYtHrGnQgwO2XZL%2F9H4ylbX2hc8UjdjHrpxX8kbzUSiGyRcsYVa80859aXFUz9xZusLMuSM9pTLhppKgNXFHgoxxBGt%2BWh4O0t0htjIswUX6xTPwXeqWGYGrUFnaF3wQ%2FEmce4VaI8dZTuVBZiyV7nIsTyjy1OkTO3p4aq8jX%2F4KJw3pil%2BRoJVWra7X6waykEfvgdoLYxtBt9VEDYvFXwAN0VBjRdnvHNjR%2FjjgC%2Bh9o2ZqlPKxevnJb7%2FtflORVWgcTaL0v06QLk3wwdKZqmbsrJBRuXlMLJyb1QE%2BzoC6wK26Wp32Fp0uRO3OPVXHyKG36Pj6R0xAr0jTUbnjkNL7%2BSXKvKGchl1dQSyBLoG46%2BzY7NQTeIxEqfsVvNcUgtyMb7lhJyzEbB3HJhagbuBr4wfvEsglp%2BpDS36NtB1p10CRbVmAmyUGesk6XFkZ7ZvsJZxw5OFKdSR8evN%2FKztNvRWUONnhQAGSM1taTe4LzqE3M1MJeWyMEGOqUBqlpki6Vwr3UQ0fmYRCpdHaclpagb%2Bes4Je7nfRRxYGJazn8wUos4Yoe0i4UH7W7WLaxnmL5%2F66vjEYTYRO8TDhHvEXTYBmftQbB4txl6nj8heedu0fUexzAB9ZsAdYZJ9qzl%2FAKtOgBEe0lu%2FU2lIoLGH1VmjsGwGhqnYB8zoX3T9rKkyPJ11dPFrsh4zWkh5fBtj9P8Nv%2FBwENg0L59OM2KVjpM&X-Amz-Signature=ee3682298dfef3e9ff570a2213e78d16fff5700a942f1d6b20b6e105c41cfe18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCJWHPF%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T181023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDkND72LJ2yjo90tm7QiZe%2By9zuMIsI7%2B0t%2BbpFoc9LmwIgJWi4OXWyZHEEU62PJ7qkInaBoZnAEdQBMZdUVvrW7oAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDM%2B3W1uLUCHGdH3szyrcA3tNId2ex5IeUF5em3DTZwghQIhLRUBJNLIrcdvqZEvh8G2m%2FADpyFZ4oVJYlOCTK7XELG%2FocN7EGZNZbY3k3HyOmqeNIyhwpEM1Fcyi%2BqspRmWRxTXA%2F5PhOiD0Cx9h7ula1sK%2F1OKYtHrGnQgwO2XZL%2F9H4ylbX2hc8UjdjHrpxX8kbzUSiGyRcsYVa80859aXFUz9xZusLMuSM9pTLhppKgNXFHgoxxBGt%2BWh4O0t0htjIswUX6xTPwXeqWGYGrUFnaF3wQ%2FEmce4VaI8dZTuVBZiyV7nIsTyjy1OkTO3p4aq8jX%2F4KJw3pil%2BRoJVWra7X6waykEfvgdoLYxtBt9VEDYvFXwAN0VBjRdnvHNjR%2FjjgC%2Bh9o2ZqlPKxevnJb7%2FtflORVWgcTaL0v06QLk3wwdKZqmbsrJBRuXlMLJyb1QE%2BzoC6wK26Wp32Fp0uRO3OPVXHyKG36Pj6R0xAr0jTUbnjkNL7%2BSXKvKGchl1dQSyBLoG46%2BzY7NQTeIxEqfsVvNcUgtyMb7lhJyzEbB3HJhagbuBr4wfvEsglp%2BpDS36NtB1p10CRbVmAmyUGesk6XFkZ7ZvsJZxw5OFKdSR8evN%2FKztNvRWUONnhQAGSM1taTe4LzqE3M1MJeWyMEGOqUBqlpki6Vwr3UQ0fmYRCpdHaclpagb%2Bes4Je7nfRRxYGJazn8wUos4Yoe0i4UH7W7WLaxnmL5%2F66vjEYTYRO8TDhHvEXTYBmftQbB4txl6nj8heedu0fUexzAB9ZsAdYZJ9qzl%2FAKtOgBEe0lu%2FU2lIoLGH1VmjsGwGhqnYB8zoX3T9rKkyPJ11dPFrsh4zWkh5fBtj9P8Nv%2FBwENg0L59OM2KVjpM&X-Amz-Signature=c89f6210983ca442140d8fdab74b20b749789f55f804fca3bf932eb4ebf1874b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
