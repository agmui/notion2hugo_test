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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLLDNO4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX2MwohhgzRqFuQ1PrZAixt20%2B%2FfoU4jaoJ0vWgfbnVgIgLafdW4BnOCUoO5uQcXf1Ml90A0q4Sp4gbgzCsOWGSvoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIMkcyzSqqCja7KgSrcA9jASVdfDUv9MItE3RSnIOp0JF7wVuH9Gn0EEryVFYk96ZyTCaQjq85ITX3LQjbh7Or8fKzwbWfC2slJHjp6p%2FKxzeDY00lLViFOoSHwknjfQVeWKHQ81V5NmhY7ihtrUtLiYx7JBparzNiOqMLoaFluGOeK30EmK5LzuT%2F98uxYFL9raDFFkIRq%2BDBenbP5WsZheL2ae3AdxnFlUpuqYiEQju6mZsIsX6Fge9jM66NGTwbpRsgFAN6RhQw67rr0yY2YDSXst9vj0d5hw7O4K7zS0Rv0qRQyAwWYF4WPX40HOar1dt%2F6QCt7mU%2BNzBn7nfTrxVeBhTdJcmOZ6wa%2BRYSWy%2BvjmEfkIqf213eWFuqiOUXos4O5KD0CCjkqS9Ql9UThNNYbxCRZNsu9EJqnO8lRjlpd0QIDMUsAraDQ4KbR152o6npmdfJOSrQjn9HzdC5vtb5%2BMTS9471UilLCG%2BvjXQTWAfuwgZXdQycz9dM44g1RD2HQ1cPfoPa41k%2FZpX2CG8RjIxCBGzTDvi8bFLudsx5EaZVzy7xnvO8gjLQK8ubkcn2pROICMHXTuY4xnLyMUklxmXNJlbdelYCxsJpnnS0ch8sj7iiVC0wG%2Bi4U65bQlV2Ye%2Bz0KJpoMJeY7rwGOqUBpwvJqPCKss2tnNb%2Bf9H440%2F8aWah2ClgSuIEsMV%2Brr95G%2B%2FPrNjRiOT6WTP%2FmAGqXTd8jqOlfmocPbXTguoPDKhA%2FtuNxRv6LUkSrAi7W%2BUoi6n1%2FfRHpldut7ZzIR72Dl3gUCrBnPQ1hfh7GpbziGm%2BXb2ramOxY8Ms6u3zBPM%2BkXDaOoCZ9EI6ZJrhp%2F%2F0bh1NjLdwO6%2B1ipv3U6WsCBwa41Dj&X-Amz-Signature=fb8194067ef82a18363709a069b3fa464376d5a1a07f4ad6f0e11d10af8cdc6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLLDNO4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX2MwohhgzRqFuQ1PrZAixt20%2B%2FfoU4jaoJ0vWgfbnVgIgLafdW4BnOCUoO5uQcXf1Ml90A0q4Sp4gbgzCsOWGSvoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIMkcyzSqqCja7KgSrcA9jASVdfDUv9MItE3RSnIOp0JF7wVuH9Gn0EEryVFYk96ZyTCaQjq85ITX3LQjbh7Or8fKzwbWfC2slJHjp6p%2FKxzeDY00lLViFOoSHwknjfQVeWKHQ81V5NmhY7ihtrUtLiYx7JBparzNiOqMLoaFluGOeK30EmK5LzuT%2F98uxYFL9raDFFkIRq%2BDBenbP5WsZheL2ae3AdxnFlUpuqYiEQju6mZsIsX6Fge9jM66NGTwbpRsgFAN6RhQw67rr0yY2YDSXst9vj0d5hw7O4K7zS0Rv0qRQyAwWYF4WPX40HOar1dt%2F6QCt7mU%2BNzBn7nfTrxVeBhTdJcmOZ6wa%2BRYSWy%2BvjmEfkIqf213eWFuqiOUXos4O5KD0CCjkqS9Ql9UThNNYbxCRZNsu9EJqnO8lRjlpd0QIDMUsAraDQ4KbR152o6npmdfJOSrQjn9HzdC5vtb5%2BMTS9471UilLCG%2BvjXQTWAfuwgZXdQycz9dM44g1RD2HQ1cPfoPa41k%2FZpX2CG8RjIxCBGzTDvi8bFLudsx5EaZVzy7xnvO8gjLQK8ubkcn2pROICMHXTuY4xnLyMUklxmXNJlbdelYCxsJpnnS0ch8sj7iiVC0wG%2Bi4U65bQlV2Ye%2Bz0KJpoMJeY7rwGOqUBpwvJqPCKss2tnNb%2Bf9H440%2F8aWah2ClgSuIEsMV%2Brr95G%2B%2FPrNjRiOT6WTP%2FmAGqXTd8jqOlfmocPbXTguoPDKhA%2FtuNxRv6LUkSrAi7W%2BUoi6n1%2FfRHpldut7ZzIR72Dl3gUCrBnPQ1hfh7GpbziGm%2BXb2ramOxY8Ms6u3zBPM%2BkXDaOoCZ9EI6ZJrhp%2F%2F0bh1NjLdwO6%2B1ipv3U6WsCBwa41Dj&X-Amz-Signature=95d7aa63530d1d2f8debda92fe63118e391db80fdd6e88f08c8cac4c61daf6e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLLDNO4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX2MwohhgzRqFuQ1PrZAixt20%2B%2FfoU4jaoJ0vWgfbnVgIgLafdW4BnOCUoO5uQcXf1Ml90A0q4Sp4gbgzCsOWGSvoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIMkcyzSqqCja7KgSrcA9jASVdfDUv9MItE3RSnIOp0JF7wVuH9Gn0EEryVFYk96ZyTCaQjq85ITX3LQjbh7Or8fKzwbWfC2slJHjp6p%2FKxzeDY00lLViFOoSHwknjfQVeWKHQ81V5NmhY7ihtrUtLiYx7JBparzNiOqMLoaFluGOeK30EmK5LzuT%2F98uxYFL9raDFFkIRq%2BDBenbP5WsZheL2ae3AdxnFlUpuqYiEQju6mZsIsX6Fge9jM66NGTwbpRsgFAN6RhQw67rr0yY2YDSXst9vj0d5hw7O4K7zS0Rv0qRQyAwWYF4WPX40HOar1dt%2F6QCt7mU%2BNzBn7nfTrxVeBhTdJcmOZ6wa%2BRYSWy%2BvjmEfkIqf213eWFuqiOUXos4O5KD0CCjkqS9Ql9UThNNYbxCRZNsu9EJqnO8lRjlpd0QIDMUsAraDQ4KbR152o6npmdfJOSrQjn9HzdC5vtb5%2BMTS9471UilLCG%2BvjXQTWAfuwgZXdQycz9dM44g1RD2HQ1cPfoPa41k%2FZpX2CG8RjIxCBGzTDvi8bFLudsx5EaZVzy7xnvO8gjLQK8ubkcn2pROICMHXTuY4xnLyMUklxmXNJlbdelYCxsJpnnS0ch8sj7iiVC0wG%2Bi4U65bQlV2Ye%2Bz0KJpoMJeY7rwGOqUBpwvJqPCKss2tnNb%2Bf9H440%2F8aWah2ClgSuIEsMV%2Brr95G%2B%2FPrNjRiOT6WTP%2FmAGqXTd8jqOlfmocPbXTguoPDKhA%2FtuNxRv6LUkSrAi7W%2BUoi6n1%2FfRHpldut7ZzIR72Dl3gUCrBnPQ1hfh7GpbziGm%2BXb2ramOxY8Ms6u3zBPM%2BkXDaOoCZ9EI6ZJrhp%2F%2F0bh1NjLdwO6%2B1ipv3U6WsCBwa41Dj&X-Amz-Signature=fce89f50a409d2dbd377de0d555586369abe1f8069677675634009d25c2b9105&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLLDNO4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX2MwohhgzRqFuQ1PrZAixt20%2B%2FfoU4jaoJ0vWgfbnVgIgLafdW4BnOCUoO5uQcXf1Ml90A0q4Sp4gbgzCsOWGSvoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIMkcyzSqqCja7KgSrcA9jASVdfDUv9MItE3RSnIOp0JF7wVuH9Gn0EEryVFYk96ZyTCaQjq85ITX3LQjbh7Or8fKzwbWfC2slJHjp6p%2FKxzeDY00lLViFOoSHwknjfQVeWKHQ81V5NmhY7ihtrUtLiYx7JBparzNiOqMLoaFluGOeK30EmK5LzuT%2F98uxYFL9raDFFkIRq%2BDBenbP5WsZheL2ae3AdxnFlUpuqYiEQju6mZsIsX6Fge9jM66NGTwbpRsgFAN6RhQw67rr0yY2YDSXst9vj0d5hw7O4K7zS0Rv0qRQyAwWYF4WPX40HOar1dt%2F6QCt7mU%2BNzBn7nfTrxVeBhTdJcmOZ6wa%2BRYSWy%2BvjmEfkIqf213eWFuqiOUXos4O5KD0CCjkqS9Ql9UThNNYbxCRZNsu9EJqnO8lRjlpd0QIDMUsAraDQ4KbR152o6npmdfJOSrQjn9HzdC5vtb5%2BMTS9471UilLCG%2BvjXQTWAfuwgZXdQycz9dM44g1RD2HQ1cPfoPa41k%2FZpX2CG8RjIxCBGzTDvi8bFLudsx5EaZVzy7xnvO8gjLQK8ubkcn2pROICMHXTuY4xnLyMUklxmXNJlbdelYCxsJpnnS0ch8sj7iiVC0wG%2Bi4U65bQlV2Ye%2Bz0KJpoMJeY7rwGOqUBpwvJqPCKss2tnNb%2Bf9H440%2F8aWah2ClgSuIEsMV%2Brr95G%2B%2FPrNjRiOT6WTP%2FmAGqXTd8jqOlfmocPbXTguoPDKhA%2FtuNxRv6LUkSrAi7W%2BUoi6n1%2FfRHpldut7ZzIR72Dl3gUCrBnPQ1hfh7GpbziGm%2BXb2ramOxY8Ms6u3zBPM%2BkXDaOoCZ9EI6ZJrhp%2F%2F0bh1NjLdwO6%2B1ipv3U6WsCBwa41Dj&X-Amz-Signature=d0dea86d79b9d851c78c2e896272f4a0bdab82e39b2e69eb55a6de86612745ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLLDNO4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX2MwohhgzRqFuQ1PrZAixt20%2B%2FfoU4jaoJ0vWgfbnVgIgLafdW4BnOCUoO5uQcXf1Ml90A0q4Sp4gbgzCsOWGSvoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIMkcyzSqqCja7KgSrcA9jASVdfDUv9MItE3RSnIOp0JF7wVuH9Gn0EEryVFYk96ZyTCaQjq85ITX3LQjbh7Or8fKzwbWfC2slJHjp6p%2FKxzeDY00lLViFOoSHwknjfQVeWKHQ81V5NmhY7ihtrUtLiYx7JBparzNiOqMLoaFluGOeK30EmK5LzuT%2F98uxYFL9raDFFkIRq%2BDBenbP5WsZheL2ae3AdxnFlUpuqYiEQju6mZsIsX6Fge9jM66NGTwbpRsgFAN6RhQw67rr0yY2YDSXst9vj0d5hw7O4K7zS0Rv0qRQyAwWYF4WPX40HOar1dt%2F6QCt7mU%2BNzBn7nfTrxVeBhTdJcmOZ6wa%2BRYSWy%2BvjmEfkIqf213eWFuqiOUXos4O5KD0CCjkqS9Ql9UThNNYbxCRZNsu9EJqnO8lRjlpd0QIDMUsAraDQ4KbR152o6npmdfJOSrQjn9HzdC5vtb5%2BMTS9471UilLCG%2BvjXQTWAfuwgZXdQycz9dM44g1RD2HQ1cPfoPa41k%2FZpX2CG8RjIxCBGzTDvi8bFLudsx5EaZVzy7xnvO8gjLQK8ubkcn2pROICMHXTuY4xnLyMUklxmXNJlbdelYCxsJpnnS0ch8sj7iiVC0wG%2Bi4U65bQlV2Ye%2Bz0KJpoMJeY7rwGOqUBpwvJqPCKss2tnNb%2Bf9H440%2F8aWah2ClgSuIEsMV%2Brr95G%2B%2FPrNjRiOT6WTP%2FmAGqXTd8jqOlfmocPbXTguoPDKhA%2FtuNxRv6LUkSrAi7W%2BUoi6n1%2FfRHpldut7ZzIR72Dl3gUCrBnPQ1hfh7GpbziGm%2BXb2ramOxY8Ms6u3zBPM%2BkXDaOoCZ9EI6ZJrhp%2F%2F0bh1NjLdwO6%2B1ipv3U6WsCBwa41Dj&X-Amz-Signature=e7a7133cea79eeed355384dc418d8a175786fd198fa3c096bdd554e700107ddc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLLDNO4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX2MwohhgzRqFuQ1PrZAixt20%2B%2FfoU4jaoJ0vWgfbnVgIgLafdW4BnOCUoO5uQcXf1Ml90A0q4Sp4gbgzCsOWGSvoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIMkcyzSqqCja7KgSrcA9jASVdfDUv9MItE3RSnIOp0JF7wVuH9Gn0EEryVFYk96ZyTCaQjq85ITX3LQjbh7Or8fKzwbWfC2slJHjp6p%2FKxzeDY00lLViFOoSHwknjfQVeWKHQ81V5NmhY7ihtrUtLiYx7JBparzNiOqMLoaFluGOeK30EmK5LzuT%2F98uxYFL9raDFFkIRq%2BDBenbP5WsZheL2ae3AdxnFlUpuqYiEQju6mZsIsX6Fge9jM66NGTwbpRsgFAN6RhQw67rr0yY2YDSXst9vj0d5hw7O4K7zS0Rv0qRQyAwWYF4WPX40HOar1dt%2F6QCt7mU%2BNzBn7nfTrxVeBhTdJcmOZ6wa%2BRYSWy%2BvjmEfkIqf213eWFuqiOUXos4O5KD0CCjkqS9Ql9UThNNYbxCRZNsu9EJqnO8lRjlpd0QIDMUsAraDQ4KbR152o6npmdfJOSrQjn9HzdC5vtb5%2BMTS9471UilLCG%2BvjXQTWAfuwgZXdQycz9dM44g1RD2HQ1cPfoPa41k%2FZpX2CG8RjIxCBGzTDvi8bFLudsx5EaZVzy7xnvO8gjLQK8ubkcn2pROICMHXTuY4xnLyMUklxmXNJlbdelYCxsJpnnS0ch8sj7iiVC0wG%2Bi4U65bQlV2Ye%2Bz0KJpoMJeY7rwGOqUBpwvJqPCKss2tnNb%2Bf9H440%2F8aWah2ClgSuIEsMV%2Brr95G%2B%2FPrNjRiOT6WTP%2FmAGqXTd8jqOlfmocPbXTguoPDKhA%2FtuNxRv6LUkSrAi7W%2BUoi6n1%2FfRHpldut7ZzIR72Dl3gUCrBnPQ1hfh7GpbziGm%2BXb2ramOxY8Ms6u3zBPM%2BkXDaOoCZ9EI6ZJrhp%2F%2F0bh1NjLdwO6%2B1ipv3U6WsCBwa41Dj&X-Amz-Signature=7c1f84bce9fb456464a8753288aebd97fad83dd2ab9dc003841301a408503aac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLLDNO4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX2MwohhgzRqFuQ1PrZAixt20%2B%2FfoU4jaoJ0vWgfbnVgIgLafdW4BnOCUoO5uQcXf1Ml90A0q4Sp4gbgzCsOWGSvoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIMkcyzSqqCja7KgSrcA9jASVdfDUv9MItE3RSnIOp0JF7wVuH9Gn0EEryVFYk96ZyTCaQjq85ITX3LQjbh7Or8fKzwbWfC2slJHjp6p%2FKxzeDY00lLViFOoSHwknjfQVeWKHQ81V5NmhY7ihtrUtLiYx7JBparzNiOqMLoaFluGOeK30EmK5LzuT%2F98uxYFL9raDFFkIRq%2BDBenbP5WsZheL2ae3AdxnFlUpuqYiEQju6mZsIsX6Fge9jM66NGTwbpRsgFAN6RhQw67rr0yY2YDSXst9vj0d5hw7O4K7zS0Rv0qRQyAwWYF4WPX40HOar1dt%2F6QCt7mU%2BNzBn7nfTrxVeBhTdJcmOZ6wa%2BRYSWy%2BvjmEfkIqf213eWFuqiOUXos4O5KD0CCjkqS9Ql9UThNNYbxCRZNsu9EJqnO8lRjlpd0QIDMUsAraDQ4KbR152o6npmdfJOSrQjn9HzdC5vtb5%2BMTS9471UilLCG%2BvjXQTWAfuwgZXdQycz9dM44g1RD2HQ1cPfoPa41k%2FZpX2CG8RjIxCBGzTDvi8bFLudsx5EaZVzy7xnvO8gjLQK8ubkcn2pROICMHXTuY4xnLyMUklxmXNJlbdelYCxsJpnnS0ch8sj7iiVC0wG%2Bi4U65bQlV2Ye%2Bz0KJpoMJeY7rwGOqUBpwvJqPCKss2tnNb%2Bf9H440%2F8aWah2ClgSuIEsMV%2Brr95G%2B%2FPrNjRiOT6WTP%2FmAGqXTd8jqOlfmocPbXTguoPDKhA%2FtuNxRv6LUkSrAi7W%2BUoi6n1%2FfRHpldut7ZzIR72Dl3gUCrBnPQ1hfh7GpbziGm%2BXb2ramOxY8Ms6u3zBPM%2BkXDaOoCZ9EI6ZJrhp%2F%2F0bh1NjLdwO6%2B1ipv3U6WsCBwa41Dj&X-Amz-Signature=812d1596ac32f4ea749a5033fa86d1eb5de94fd455df0f009cf965e36dee1c5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLLDNO4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T150748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX2MwohhgzRqFuQ1PrZAixt20%2B%2FfoU4jaoJ0vWgfbnVgIgLafdW4BnOCUoO5uQcXf1Ml90A0q4Sp4gbgzCsOWGSvoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIMkcyzSqqCja7KgSrcA9jASVdfDUv9MItE3RSnIOp0JF7wVuH9Gn0EEryVFYk96ZyTCaQjq85ITX3LQjbh7Or8fKzwbWfC2slJHjp6p%2FKxzeDY00lLViFOoSHwknjfQVeWKHQ81V5NmhY7ihtrUtLiYx7JBparzNiOqMLoaFluGOeK30EmK5LzuT%2F98uxYFL9raDFFkIRq%2BDBenbP5WsZheL2ae3AdxnFlUpuqYiEQju6mZsIsX6Fge9jM66NGTwbpRsgFAN6RhQw67rr0yY2YDSXst9vj0d5hw7O4K7zS0Rv0qRQyAwWYF4WPX40HOar1dt%2F6QCt7mU%2BNzBn7nfTrxVeBhTdJcmOZ6wa%2BRYSWy%2BvjmEfkIqf213eWFuqiOUXos4O5KD0CCjkqS9Ql9UThNNYbxCRZNsu9EJqnO8lRjlpd0QIDMUsAraDQ4KbR152o6npmdfJOSrQjn9HzdC5vtb5%2BMTS9471UilLCG%2BvjXQTWAfuwgZXdQycz9dM44g1RD2HQ1cPfoPa41k%2FZpX2CG8RjIxCBGzTDvi8bFLudsx5EaZVzy7xnvO8gjLQK8ubkcn2pROICMHXTuY4xnLyMUklxmXNJlbdelYCxsJpnnS0ch8sj7iiVC0wG%2Bi4U65bQlV2Ye%2Bz0KJpoMJeY7rwGOqUBpwvJqPCKss2tnNb%2Bf9H440%2F8aWah2ClgSuIEsMV%2Brr95G%2B%2FPrNjRiOT6WTP%2FmAGqXTd8jqOlfmocPbXTguoPDKhA%2FtuNxRv6LUkSrAi7W%2BUoi6n1%2FfRHpldut7ZzIR72Dl3gUCrBnPQ1hfh7GpbziGm%2BXb2ramOxY8Ms6u3zBPM%2BkXDaOoCZ9EI6ZJrhp%2F%2F0bh1NjLdwO6%2B1ipv3U6WsCBwa41Dj&X-Amz-Signature=6f30ef0ff37888b5ea0ec3abeba9584d7ec8062cac721dcc1251c262dc64bb53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
