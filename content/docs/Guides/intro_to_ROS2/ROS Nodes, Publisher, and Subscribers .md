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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJJAH3O%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHwv36D1CbVPPAcq6Nteuojt5Hx5rlsRZFcqtqxCUMaoAiBcRcywJ0%2Bqse1C3vjQzziJ62et1ln8Pd2ymuSiMc2b7yr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM6fXsreO1M%2BJNIz2nKtwD9EPHxYMPQZq6yGI%2FExweakiSCEmeja%2BOe5BhJBAiNxWSbnhET1hOkgomirtckuQfCAhpSSMbI0OSJC7EHXTbHXq6LB1V9MYdUXua7HznFrlchWDkVZ2tfsIlaIIogjvdBrypwafO7tyt3EyBIaNKUF7eQ3KQtwAXKUqjHrq5pXytqcWww2dGWv0raWbJUofT3gTsiRE4CoqM0dYagA5LNglzzpWf8ef%2Fuuw7Mou%2Fi0U9cXjojSBvAHEQDUouql4q1Y0F1VEx%2BBIe2zGQzPg%2FUwv8yv6G5uthl3%2BcrLuNRUHy%2FzXw%2F1zjir%2Bk%2FTB31pyWFk0f8xZJHPrt7g1EdRJMyomcYTC26dRFATTWkpNU9Oq8h4v949NtMZ5OyNCyIuExYgxCIz52wxy1VFXlW8JwZVtXnf7Khavn%2BX6SBpOh3MzdsA4dGHQBzagQ%2BnGSUbMK3FCUh%2FLLrhAYkTUCsFuhdVzurnKieMaQuPgj%2B50BbMsCh2Ac4XRhZnIXLhsOKeRqYdD%2BnFrcvbEQzodvuOn3pU1Z6leCrg0sWby8tTzOlaG77FEY7JRSRqj4cZQeL7xba8zUv2G9LXU0xO4Kg2A6WT55eyNh6bE9bX0p4JjFHgGtWcmHT0b4twPJVx4w8NeHwgY6pgHLkF6mtSWkuDofxocsmOpM8lfvGrBNr4OFqUMeP2pKeerTpC3lswTuBFpHPPWMf5PJmb4EkfLo%2BxrinOJXs6cKYy%2BCCJpVZmjFWfIS3PmESTcEx7zOLSqKA7KlE1wJlgccFAN6O8sJ46hvvmPpdkmsj7roPuhEj7rFU5pCCCnT6p%2F8i9zTyklhWIGvFy3ci%2BC%2BS%2BM0fqV6Vu%2FDtPiDmB5F%2BJ3Gwybg&X-Amz-Signature=98c8b606c8132699f17523c3a49b07ec97eb88f76139f3a87fc8fb8a83c33585&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJJAH3O%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHwv36D1CbVPPAcq6Nteuojt5Hx5rlsRZFcqtqxCUMaoAiBcRcywJ0%2Bqse1C3vjQzziJ62et1ln8Pd2ymuSiMc2b7yr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM6fXsreO1M%2BJNIz2nKtwD9EPHxYMPQZq6yGI%2FExweakiSCEmeja%2BOe5BhJBAiNxWSbnhET1hOkgomirtckuQfCAhpSSMbI0OSJC7EHXTbHXq6LB1V9MYdUXua7HznFrlchWDkVZ2tfsIlaIIogjvdBrypwafO7tyt3EyBIaNKUF7eQ3KQtwAXKUqjHrq5pXytqcWww2dGWv0raWbJUofT3gTsiRE4CoqM0dYagA5LNglzzpWf8ef%2Fuuw7Mou%2Fi0U9cXjojSBvAHEQDUouql4q1Y0F1VEx%2BBIe2zGQzPg%2FUwv8yv6G5uthl3%2BcrLuNRUHy%2FzXw%2F1zjir%2Bk%2FTB31pyWFk0f8xZJHPrt7g1EdRJMyomcYTC26dRFATTWkpNU9Oq8h4v949NtMZ5OyNCyIuExYgxCIz52wxy1VFXlW8JwZVtXnf7Khavn%2BX6SBpOh3MzdsA4dGHQBzagQ%2BnGSUbMK3FCUh%2FLLrhAYkTUCsFuhdVzurnKieMaQuPgj%2B50BbMsCh2Ac4XRhZnIXLhsOKeRqYdD%2BnFrcvbEQzodvuOn3pU1Z6leCrg0sWby8tTzOlaG77FEY7JRSRqj4cZQeL7xba8zUv2G9LXU0xO4Kg2A6WT55eyNh6bE9bX0p4JjFHgGtWcmHT0b4twPJVx4w8NeHwgY6pgHLkF6mtSWkuDofxocsmOpM8lfvGrBNr4OFqUMeP2pKeerTpC3lswTuBFpHPPWMf5PJmb4EkfLo%2BxrinOJXs6cKYy%2BCCJpVZmjFWfIS3PmESTcEx7zOLSqKA7KlE1wJlgccFAN6O8sJ46hvvmPpdkmsj7roPuhEj7rFU5pCCCnT6p%2F8i9zTyklhWIGvFy3ci%2BC%2BS%2BM0fqV6Vu%2FDtPiDmB5F%2BJ3Gwybg&X-Amz-Signature=3cec27ec80fc40f17be1394a9463cb5200aef3c9ed9021f280bd5d0948439380&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJJAH3O%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHwv36D1CbVPPAcq6Nteuojt5Hx5rlsRZFcqtqxCUMaoAiBcRcywJ0%2Bqse1C3vjQzziJ62et1ln8Pd2ymuSiMc2b7yr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM6fXsreO1M%2BJNIz2nKtwD9EPHxYMPQZq6yGI%2FExweakiSCEmeja%2BOe5BhJBAiNxWSbnhET1hOkgomirtckuQfCAhpSSMbI0OSJC7EHXTbHXq6LB1V9MYdUXua7HznFrlchWDkVZ2tfsIlaIIogjvdBrypwafO7tyt3EyBIaNKUF7eQ3KQtwAXKUqjHrq5pXytqcWww2dGWv0raWbJUofT3gTsiRE4CoqM0dYagA5LNglzzpWf8ef%2Fuuw7Mou%2Fi0U9cXjojSBvAHEQDUouql4q1Y0F1VEx%2BBIe2zGQzPg%2FUwv8yv6G5uthl3%2BcrLuNRUHy%2FzXw%2F1zjir%2Bk%2FTB31pyWFk0f8xZJHPrt7g1EdRJMyomcYTC26dRFATTWkpNU9Oq8h4v949NtMZ5OyNCyIuExYgxCIz52wxy1VFXlW8JwZVtXnf7Khavn%2BX6SBpOh3MzdsA4dGHQBzagQ%2BnGSUbMK3FCUh%2FLLrhAYkTUCsFuhdVzurnKieMaQuPgj%2B50BbMsCh2Ac4XRhZnIXLhsOKeRqYdD%2BnFrcvbEQzodvuOn3pU1Z6leCrg0sWby8tTzOlaG77FEY7JRSRqj4cZQeL7xba8zUv2G9LXU0xO4Kg2A6WT55eyNh6bE9bX0p4JjFHgGtWcmHT0b4twPJVx4w8NeHwgY6pgHLkF6mtSWkuDofxocsmOpM8lfvGrBNr4OFqUMeP2pKeerTpC3lswTuBFpHPPWMf5PJmb4EkfLo%2BxrinOJXs6cKYy%2BCCJpVZmjFWfIS3PmESTcEx7zOLSqKA7KlE1wJlgccFAN6O8sJ46hvvmPpdkmsj7roPuhEj7rFU5pCCCnT6p%2F8i9zTyklhWIGvFy3ci%2BC%2BS%2BM0fqV6Vu%2FDtPiDmB5F%2BJ3Gwybg&X-Amz-Signature=a03104a211d55e7cf2989670c08ca8aa245f31f0c1770495bc4e70f619895045&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJJAH3O%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHwv36D1CbVPPAcq6Nteuojt5Hx5rlsRZFcqtqxCUMaoAiBcRcywJ0%2Bqse1C3vjQzziJ62et1ln8Pd2ymuSiMc2b7yr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM6fXsreO1M%2BJNIz2nKtwD9EPHxYMPQZq6yGI%2FExweakiSCEmeja%2BOe5BhJBAiNxWSbnhET1hOkgomirtckuQfCAhpSSMbI0OSJC7EHXTbHXq6LB1V9MYdUXua7HznFrlchWDkVZ2tfsIlaIIogjvdBrypwafO7tyt3EyBIaNKUF7eQ3KQtwAXKUqjHrq5pXytqcWww2dGWv0raWbJUofT3gTsiRE4CoqM0dYagA5LNglzzpWf8ef%2Fuuw7Mou%2Fi0U9cXjojSBvAHEQDUouql4q1Y0F1VEx%2BBIe2zGQzPg%2FUwv8yv6G5uthl3%2BcrLuNRUHy%2FzXw%2F1zjir%2Bk%2FTB31pyWFk0f8xZJHPrt7g1EdRJMyomcYTC26dRFATTWkpNU9Oq8h4v949NtMZ5OyNCyIuExYgxCIz52wxy1VFXlW8JwZVtXnf7Khavn%2BX6SBpOh3MzdsA4dGHQBzagQ%2BnGSUbMK3FCUh%2FLLrhAYkTUCsFuhdVzurnKieMaQuPgj%2B50BbMsCh2Ac4XRhZnIXLhsOKeRqYdD%2BnFrcvbEQzodvuOn3pU1Z6leCrg0sWby8tTzOlaG77FEY7JRSRqj4cZQeL7xba8zUv2G9LXU0xO4Kg2A6WT55eyNh6bE9bX0p4JjFHgGtWcmHT0b4twPJVx4w8NeHwgY6pgHLkF6mtSWkuDofxocsmOpM8lfvGrBNr4OFqUMeP2pKeerTpC3lswTuBFpHPPWMf5PJmb4EkfLo%2BxrinOJXs6cKYy%2BCCJpVZmjFWfIS3PmESTcEx7zOLSqKA7KlE1wJlgccFAN6O8sJ46hvvmPpdkmsj7roPuhEj7rFU5pCCCnT6p%2F8i9zTyklhWIGvFy3ci%2BC%2BS%2BM0fqV6Vu%2FDtPiDmB5F%2BJ3Gwybg&X-Amz-Signature=0f15c52186ab7f29f439aeda35757115cb745ebce1037d68168cb65dd038c076&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJJAH3O%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHwv36D1CbVPPAcq6Nteuojt5Hx5rlsRZFcqtqxCUMaoAiBcRcywJ0%2Bqse1C3vjQzziJ62et1ln8Pd2ymuSiMc2b7yr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM6fXsreO1M%2BJNIz2nKtwD9EPHxYMPQZq6yGI%2FExweakiSCEmeja%2BOe5BhJBAiNxWSbnhET1hOkgomirtckuQfCAhpSSMbI0OSJC7EHXTbHXq6LB1V9MYdUXua7HznFrlchWDkVZ2tfsIlaIIogjvdBrypwafO7tyt3EyBIaNKUF7eQ3KQtwAXKUqjHrq5pXytqcWww2dGWv0raWbJUofT3gTsiRE4CoqM0dYagA5LNglzzpWf8ef%2Fuuw7Mou%2Fi0U9cXjojSBvAHEQDUouql4q1Y0F1VEx%2BBIe2zGQzPg%2FUwv8yv6G5uthl3%2BcrLuNRUHy%2FzXw%2F1zjir%2Bk%2FTB31pyWFk0f8xZJHPrt7g1EdRJMyomcYTC26dRFATTWkpNU9Oq8h4v949NtMZ5OyNCyIuExYgxCIz52wxy1VFXlW8JwZVtXnf7Khavn%2BX6SBpOh3MzdsA4dGHQBzagQ%2BnGSUbMK3FCUh%2FLLrhAYkTUCsFuhdVzurnKieMaQuPgj%2B50BbMsCh2Ac4XRhZnIXLhsOKeRqYdD%2BnFrcvbEQzodvuOn3pU1Z6leCrg0sWby8tTzOlaG77FEY7JRSRqj4cZQeL7xba8zUv2G9LXU0xO4Kg2A6WT55eyNh6bE9bX0p4JjFHgGtWcmHT0b4twPJVx4w8NeHwgY6pgHLkF6mtSWkuDofxocsmOpM8lfvGrBNr4OFqUMeP2pKeerTpC3lswTuBFpHPPWMf5PJmb4EkfLo%2BxrinOJXs6cKYy%2BCCJpVZmjFWfIS3PmESTcEx7zOLSqKA7KlE1wJlgccFAN6O8sJ46hvvmPpdkmsj7roPuhEj7rFU5pCCCnT6p%2F8i9zTyklhWIGvFy3ci%2BC%2BS%2BM0fqV6Vu%2FDtPiDmB5F%2BJ3Gwybg&X-Amz-Signature=09b54540cc188817bc18ec8caabb13f3f1fec2b9d604e976f276d5ccc392f2a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJJAH3O%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHwv36D1CbVPPAcq6Nteuojt5Hx5rlsRZFcqtqxCUMaoAiBcRcywJ0%2Bqse1C3vjQzziJ62et1ln8Pd2ymuSiMc2b7yr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM6fXsreO1M%2BJNIz2nKtwD9EPHxYMPQZq6yGI%2FExweakiSCEmeja%2BOe5BhJBAiNxWSbnhET1hOkgomirtckuQfCAhpSSMbI0OSJC7EHXTbHXq6LB1V9MYdUXua7HznFrlchWDkVZ2tfsIlaIIogjvdBrypwafO7tyt3EyBIaNKUF7eQ3KQtwAXKUqjHrq5pXytqcWww2dGWv0raWbJUofT3gTsiRE4CoqM0dYagA5LNglzzpWf8ef%2Fuuw7Mou%2Fi0U9cXjojSBvAHEQDUouql4q1Y0F1VEx%2BBIe2zGQzPg%2FUwv8yv6G5uthl3%2BcrLuNRUHy%2FzXw%2F1zjir%2Bk%2FTB31pyWFk0f8xZJHPrt7g1EdRJMyomcYTC26dRFATTWkpNU9Oq8h4v949NtMZ5OyNCyIuExYgxCIz52wxy1VFXlW8JwZVtXnf7Khavn%2BX6SBpOh3MzdsA4dGHQBzagQ%2BnGSUbMK3FCUh%2FLLrhAYkTUCsFuhdVzurnKieMaQuPgj%2B50BbMsCh2Ac4XRhZnIXLhsOKeRqYdD%2BnFrcvbEQzodvuOn3pU1Z6leCrg0sWby8tTzOlaG77FEY7JRSRqj4cZQeL7xba8zUv2G9LXU0xO4Kg2A6WT55eyNh6bE9bX0p4JjFHgGtWcmHT0b4twPJVx4w8NeHwgY6pgHLkF6mtSWkuDofxocsmOpM8lfvGrBNr4OFqUMeP2pKeerTpC3lswTuBFpHPPWMf5PJmb4EkfLo%2BxrinOJXs6cKYy%2BCCJpVZmjFWfIS3PmESTcEx7zOLSqKA7KlE1wJlgccFAN6O8sJ46hvvmPpdkmsj7roPuhEj7rFU5pCCCnT6p%2F8i9zTyklhWIGvFy3ci%2BC%2BS%2BM0fqV6Vu%2FDtPiDmB5F%2BJ3Gwybg&X-Amz-Signature=73977798f4cf105fdc2da23e49899c535d824bf727d1e871ce4752c75eb33814&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJJAH3O%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHwv36D1CbVPPAcq6Nteuojt5Hx5rlsRZFcqtqxCUMaoAiBcRcywJ0%2Bqse1C3vjQzziJ62et1ln8Pd2ymuSiMc2b7yr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM6fXsreO1M%2BJNIz2nKtwD9EPHxYMPQZq6yGI%2FExweakiSCEmeja%2BOe5BhJBAiNxWSbnhET1hOkgomirtckuQfCAhpSSMbI0OSJC7EHXTbHXq6LB1V9MYdUXua7HznFrlchWDkVZ2tfsIlaIIogjvdBrypwafO7tyt3EyBIaNKUF7eQ3KQtwAXKUqjHrq5pXytqcWww2dGWv0raWbJUofT3gTsiRE4CoqM0dYagA5LNglzzpWf8ef%2Fuuw7Mou%2Fi0U9cXjojSBvAHEQDUouql4q1Y0F1VEx%2BBIe2zGQzPg%2FUwv8yv6G5uthl3%2BcrLuNRUHy%2FzXw%2F1zjir%2Bk%2FTB31pyWFk0f8xZJHPrt7g1EdRJMyomcYTC26dRFATTWkpNU9Oq8h4v949NtMZ5OyNCyIuExYgxCIz52wxy1VFXlW8JwZVtXnf7Khavn%2BX6SBpOh3MzdsA4dGHQBzagQ%2BnGSUbMK3FCUh%2FLLrhAYkTUCsFuhdVzurnKieMaQuPgj%2B50BbMsCh2Ac4XRhZnIXLhsOKeRqYdD%2BnFrcvbEQzodvuOn3pU1Z6leCrg0sWby8tTzOlaG77FEY7JRSRqj4cZQeL7xba8zUv2G9LXU0xO4Kg2A6WT55eyNh6bE9bX0p4JjFHgGtWcmHT0b4twPJVx4w8NeHwgY6pgHLkF6mtSWkuDofxocsmOpM8lfvGrBNr4OFqUMeP2pKeerTpC3lswTuBFpHPPWMf5PJmb4EkfLo%2BxrinOJXs6cKYy%2BCCJpVZmjFWfIS3PmESTcEx7zOLSqKA7KlE1wJlgccFAN6O8sJ46hvvmPpdkmsj7roPuhEj7rFU5pCCCnT6p%2F8i9zTyklhWIGvFy3ci%2BC%2BS%2BM0fqV6Vu%2FDtPiDmB5F%2BJ3Gwybg&X-Amz-Signature=391780cf568045b10c184c4918a88ebb3551e8174da15104d6735339a7617bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOJJAH3O%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIHwv36D1CbVPPAcq6Nteuojt5Hx5rlsRZFcqtqxCUMaoAiBcRcywJ0%2Bqse1C3vjQzziJ62et1ln8Pd2ymuSiMc2b7yr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM6fXsreO1M%2BJNIz2nKtwD9EPHxYMPQZq6yGI%2FExweakiSCEmeja%2BOe5BhJBAiNxWSbnhET1hOkgomirtckuQfCAhpSSMbI0OSJC7EHXTbHXq6LB1V9MYdUXua7HznFrlchWDkVZ2tfsIlaIIogjvdBrypwafO7tyt3EyBIaNKUF7eQ3KQtwAXKUqjHrq5pXytqcWww2dGWv0raWbJUofT3gTsiRE4CoqM0dYagA5LNglzzpWf8ef%2Fuuw7Mou%2Fi0U9cXjojSBvAHEQDUouql4q1Y0F1VEx%2BBIe2zGQzPg%2FUwv8yv6G5uthl3%2BcrLuNRUHy%2FzXw%2F1zjir%2Bk%2FTB31pyWFk0f8xZJHPrt7g1EdRJMyomcYTC26dRFATTWkpNU9Oq8h4v949NtMZ5OyNCyIuExYgxCIz52wxy1VFXlW8JwZVtXnf7Khavn%2BX6SBpOh3MzdsA4dGHQBzagQ%2BnGSUbMK3FCUh%2FLLrhAYkTUCsFuhdVzurnKieMaQuPgj%2B50BbMsCh2Ac4XRhZnIXLhsOKeRqYdD%2BnFrcvbEQzodvuOn3pU1Z6leCrg0sWby8tTzOlaG77FEY7JRSRqj4cZQeL7xba8zUv2G9LXU0xO4Kg2A6WT55eyNh6bE9bX0p4JjFHgGtWcmHT0b4twPJVx4w8NeHwgY6pgHLkF6mtSWkuDofxocsmOpM8lfvGrBNr4OFqUMeP2pKeerTpC3lswTuBFpHPPWMf5PJmb4EkfLo%2BxrinOJXs6cKYy%2BCCJpVZmjFWfIS3PmESTcEx7zOLSqKA7KlE1wJlgccFAN6O8sJ46hvvmPpdkmsj7roPuhEj7rFU5pCCCnT6p%2F8i9zTyklhWIGvFy3ci%2BC%2BS%2BM0fqV6Vu%2FDtPiDmB5F%2BJ3Gwybg&X-Amz-Signature=d05c7d5710e20cde1cf6fa13176dc17c76fc729a0aedb41de07dbdb31c6845ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
