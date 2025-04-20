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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL5UY7B%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIE%2BeG9G3IjHsqj7%2FCc0%2BlFeH%2F7c783eskTNVs%2Bv6O61MAiEAqt8OrL%2BZADjlFtjuIrF%2FoLUdAw09issrhNODmGauY4IqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1WGtn9nbWnPOsE3ircA0lKnpJw2NVl1vbNzuAwnM%2BDWbVvayDZWgEbS4ZXQhkV0G4NCEF8%2Fb8wK%2FqVMdIzjlpzzHaZmuo4eA%2BZHC9AUHq3ezxQS6llUYsxOwK67MBnmKAgBstO23%2BGKCw2p%2B9QC3oJlAzkdzOL0GGj7M%2FRsi7WQ1nJvHseroNTIYjfLu5jmOYASVNUyBuc6GIdjI8w312oGnBw9gU7vLuIfZSBub%2B58eWlsKYXR5Udpav%2Bsq3vabuEdCKCGJEOc1xbXdEDmb%2FKZFnwAYPPu8zSU%2FYP5znU2NPT0sHqFBJJqO9MyyssBYeNk5RV9BjFgcc8V3mddKXXgFjTv79u2nmrFnfZoqxXHjuskcoqLfZ3bNrDPc7tHGQfnLtAWWePB2LsH1nHS6cP5U2G6jFqGMI3icer%2FiTEYiNYkjt2EGd9OOqcWywoO8ztxKAds5%2FOySBYAMFJAyWox2UiFtHIksKulFA9O1UqaFzZVT5qsKGlFu3E6XA5vaN5wZT%2BO6UdEHm8NyHqK%2B2X%2BHhen9aHaPavW2kiJt%2BHkn%2Bcf9bTzpQlzc6QhRZtxv7VGrVFo%2BIuBEucLM9jimJbJPR1DKMPk1O2GMnbn%2FpG7uk3UU49r0MfJToKleXn7gGfINF181x1yhrlMPuBkcAGOqUB6vEy1qXppa%2F%2BKOttj7RQs0bH7%2Bxq3E9q096egFEl1DQQNSyqR9P5pW5FbbCbLeq7YoXxSmlMRqNBIutr0zqyaBvndivYhXexhM53IfbTN7mXYQoOeUugx4Ybu2aYCM%2FpcCiOj46cCIABSO6VhnXuA1UBb2VlgIiy6nnvZ453U0G%2BphrUtr12uIrZ8y8VprGaQiuilMhq8WFUp5NzML5Xd47bNqG6&X-Amz-Signature=fc480512b2653a0fd020c9c46321ea988c4c25cf9b72d3a9848b8db4feeb4597&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL5UY7B%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIE%2BeG9G3IjHsqj7%2FCc0%2BlFeH%2F7c783eskTNVs%2Bv6O61MAiEAqt8OrL%2BZADjlFtjuIrF%2FoLUdAw09issrhNODmGauY4IqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1WGtn9nbWnPOsE3ircA0lKnpJw2NVl1vbNzuAwnM%2BDWbVvayDZWgEbS4ZXQhkV0G4NCEF8%2Fb8wK%2FqVMdIzjlpzzHaZmuo4eA%2BZHC9AUHq3ezxQS6llUYsxOwK67MBnmKAgBstO23%2BGKCw2p%2B9QC3oJlAzkdzOL0GGj7M%2FRsi7WQ1nJvHseroNTIYjfLu5jmOYASVNUyBuc6GIdjI8w312oGnBw9gU7vLuIfZSBub%2B58eWlsKYXR5Udpav%2Bsq3vabuEdCKCGJEOc1xbXdEDmb%2FKZFnwAYPPu8zSU%2FYP5znU2NPT0sHqFBJJqO9MyyssBYeNk5RV9BjFgcc8V3mddKXXgFjTv79u2nmrFnfZoqxXHjuskcoqLfZ3bNrDPc7tHGQfnLtAWWePB2LsH1nHS6cP5U2G6jFqGMI3icer%2FiTEYiNYkjt2EGd9OOqcWywoO8ztxKAds5%2FOySBYAMFJAyWox2UiFtHIksKulFA9O1UqaFzZVT5qsKGlFu3E6XA5vaN5wZT%2BO6UdEHm8NyHqK%2B2X%2BHhen9aHaPavW2kiJt%2BHkn%2Bcf9bTzpQlzc6QhRZtxv7VGrVFo%2BIuBEucLM9jimJbJPR1DKMPk1O2GMnbn%2FpG7uk3UU49r0MfJToKleXn7gGfINF181x1yhrlMPuBkcAGOqUB6vEy1qXppa%2F%2BKOttj7RQs0bH7%2Bxq3E9q096egFEl1DQQNSyqR9P5pW5FbbCbLeq7YoXxSmlMRqNBIutr0zqyaBvndivYhXexhM53IfbTN7mXYQoOeUugx4Ybu2aYCM%2FpcCiOj46cCIABSO6VhnXuA1UBb2VlgIiy6nnvZ453U0G%2BphrUtr12uIrZ8y8VprGaQiuilMhq8WFUp5NzML5Xd47bNqG6&X-Amz-Signature=e08345f58972c4793cf58aac36a534ce670bb97caa2feac93db6a175e493f6cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL5UY7B%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIE%2BeG9G3IjHsqj7%2FCc0%2BlFeH%2F7c783eskTNVs%2Bv6O61MAiEAqt8OrL%2BZADjlFtjuIrF%2FoLUdAw09issrhNODmGauY4IqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1WGtn9nbWnPOsE3ircA0lKnpJw2NVl1vbNzuAwnM%2BDWbVvayDZWgEbS4ZXQhkV0G4NCEF8%2Fb8wK%2FqVMdIzjlpzzHaZmuo4eA%2BZHC9AUHq3ezxQS6llUYsxOwK67MBnmKAgBstO23%2BGKCw2p%2B9QC3oJlAzkdzOL0GGj7M%2FRsi7WQ1nJvHseroNTIYjfLu5jmOYASVNUyBuc6GIdjI8w312oGnBw9gU7vLuIfZSBub%2B58eWlsKYXR5Udpav%2Bsq3vabuEdCKCGJEOc1xbXdEDmb%2FKZFnwAYPPu8zSU%2FYP5znU2NPT0sHqFBJJqO9MyyssBYeNk5RV9BjFgcc8V3mddKXXgFjTv79u2nmrFnfZoqxXHjuskcoqLfZ3bNrDPc7tHGQfnLtAWWePB2LsH1nHS6cP5U2G6jFqGMI3icer%2FiTEYiNYkjt2EGd9OOqcWywoO8ztxKAds5%2FOySBYAMFJAyWox2UiFtHIksKulFA9O1UqaFzZVT5qsKGlFu3E6XA5vaN5wZT%2BO6UdEHm8NyHqK%2B2X%2BHhen9aHaPavW2kiJt%2BHkn%2Bcf9bTzpQlzc6QhRZtxv7VGrVFo%2BIuBEucLM9jimJbJPR1DKMPk1O2GMnbn%2FpG7uk3UU49r0MfJToKleXn7gGfINF181x1yhrlMPuBkcAGOqUB6vEy1qXppa%2F%2BKOttj7RQs0bH7%2Bxq3E9q096egFEl1DQQNSyqR9P5pW5FbbCbLeq7YoXxSmlMRqNBIutr0zqyaBvndivYhXexhM53IfbTN7mXYQoOeUugx4Ybu2aYCM%2FpcCiOj46cCIABSO6VhnXuA1UBb2VlgIiy6nnvZ453U0G%2BphrUtr12uIrZ8y8VprGaQiuilMhq8WFUp5NzML5Xd47bNqG6&X-Amz-Signature=9b3268e88e12fb0ef322e92cd5a6a9ef31d5a8248eea749479e637849d16b3be&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL5UY7B%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIE%2BeG9G3IjHsqj7%2FCc0%2BlFeH%2F7c783eskTNVs%2Bv6O61MAiEAqt8OrL%2BZADjlFtjuIrF%2FoLUdAw09issrhNODmGauY4IqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1WGtn9nbWnPOsE3ircA0lKnpJw2NVl1vbNzuAwnM%2BDWbVvayDZWgEbS4ZXQhkV0G4NCEF8%2Fb8wK%2FqVMdIzjlpzzHaZmuo4eA%2BZHC9AUHq3ezxQS6llUYsxOwK67MBnmKAgBstO23%2BGKCw2p%2B9QC3oJlAzkdzOL0GGj7M%2FRsi7WQ1nJvHseroNTIYjfLu5jmOYASVNUyBuc6GIdjI8w312oGnBw9gU7vLuIfZSBub%2B58eWlsKYXR5Udpav%2Bsq3vabuEdCKCGJEOc1xbXdEDmb%2FKZFnwAYPPu8zSU%2FYP5znU2NPT0sHqFBJJqO9MyyssBYeNk5RV9BjFgcc8V3mddKXXgFjTv79u2nmrFnfZoqxXHjuskcoqLfZ3bNrDPc7tHGQfnLtAWWePB2LsH1nHS6cP5U2G6jFqGMI3icer%2FiTEYiNYkjt2EGd9OOqcWywoO8ztxKAds5%2FOySBYAMFJAyWox2UiFtHIksKulFA9O1UqaFzZVT5qsKGlFu3E6XA5vaN5wZT%2BO6UdEHm8NyHqK%2B2X%2BHhen9aHaPavW2kiJt%2BHkn%2Bcf9bTzpQlzc6QhRZtxv7VGrVFo%2BIuBEucLM9jimJbJPR1DKMPk1O2GMnbn%2FpG7uk3UU49r0MfJToKleXn7gGfINF181x1yhrlMPuBkcAGOqUB6vEy1qXppa%2F%2BKOttj7RQs0bH7%2Bxq3E9q096egFEl1DQQNSyqR9P5pW5FbbCbLeq7YoXxSmlMRqNBIutr0zqyaBvndivYhXexhM53IfbTN7mXYQoOeUugx4Ybu2aYCM%2FpcCiOj46cCIABSO6VhnXuA1UBb2VlgIiy6nnvZ453U0G%2BphrUtr12uIrZ8y8VprGaQiuilMhq8WFUp5NzML5Xd47bNqG6&X-Amz-Signature=0b48329c283431d248e150021eb9b03b9c4929f4515ea3649a280a7902a6bbd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL5UY7B%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIE%2BeG9G3IjHsqj7%2FCc0%2BlFeH%2F7c783eskTNVs%2Bv6O61MAiEAqt8OrL%2BZADjlFtjuIrF%2FoLUdAw09issrhNODmGauY4IqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1WGtn9nbWnPOsE3ircA0lKnpJw2NVl1vbNzuAwnM%2BDWbVvayDZWgEbS4ZXQhkV0G4NCEF8%2Fb8wK%2FqVMdIzjlpzzHaZmuo4eA%2BZHC9AUHq3ezxQS6llUYsxOwK67MBnmKAgBstO23%2BGKCw2p%2B9QC3oJlAzkdzOL0GGj7M%2FRsi7WQ1nJvHseroNTIYjfLu5jmOYASVNUyBuc6GIdjI8w312oGnBw9gU7vLuIfZSBub%2B58eWlsKYXR5Udpav%2Bsq3vabuEdCKCGJEOc1xbXdEDmb%2FKZFnwAYPPu8zSU%2FYP5znU2NPT0sHqFBJJqO9MyyssBYeNk5RV9BjFgcc8V3mddKXXgFjTv79u2nmrFnfZoqxXHjuskcoqLfZ3bNrDPc7tHGQfnLtAWWePB2LsH1nHS6cP5U2G6jFqGMI3icer%2FiTEYiNYkjt2EGd9OOqcWywoO8ztxKAds5%2FOySBYAMFJAyWox2UiFtHIksKulFA9O1UqaFzZVT5qsKGlFu3E6XA5vaN5wZT%2BO6UdEHm8NyHqK%2B2X%2BHhen9aHaPavW2kiJt%2BHkn%2Bcf9bTzpQlzc6QhRZtxv7VGrVFo%2BIuBEucLM9jimJbJPR1DKMPk1O2GMnbn%2FpG7uk3UU49r0MfJToKleXn7gGfINF181x1yhrlMPuBkcAGOqUB6vEy1qXppa%2F%2BKOttj7RQs0bH7%2Bxq3E9q096egFEl1DQQNSyqR9P5pW5FbbCbLeq7YoXxSmlMRqNBIutr0zqyaBvndivYhXexhM53IfbTN7mXYQoOeUugx4Ybu2aYCM%2FpcCiOj46cCIABSO6VhnXuA1UBb2VlgIiy6nnvZ453U0G%2BphrUtr12uIrZ8y8VprGaQiuilMhq8WFUp5NzML5Xd47bNqG6&X-Amz-Signature=780c01217ea4d7c05721643e6c8e3c0b2b44eec2b05968e3638c77de15863e9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL5UY7B%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIE%2BeG9G3IjHsqj7%2FCc0%2BlFeH%2F7c783eskTNVs%2Bv6O61MAiEAqt8OrL%2BZADjlFtjuIrF%2FoLUdAw09issrhNODmGauY4IqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1WGtn9nbWnPOsE3ircA0lKnpJw2NVl1vbNzuAwnM%2BDWbVvayDZWgEbS4ZXQhkV0G4NCEF8%2Fb8wK%2FqVMdIzjlpzzHaZmuo4eA%2BZHC9AUHq3ezxQS6llUYsxOwK67MBnmKAgBstO23%2BGKCw2p%2B9QC3oJlAzkdzOL0GGj7M%2FRsi7WQ1nJvHseroNTIYjfLu5jmOYASVNUyBuc6GIdjI8w312oGnBw9gU7vLuIfZSBub%2B58eWlsKYXR5Udpav%2Bsq3vabuEdCKCGJEOc1xbXdEDmb%2FKZFnwAYPPu8zSU%2FYP5znU2NPT0sHqFBJJqO9MyyssBYeNk5RV9BjFgcc8V3mddKXXgFjTv79u2nmrFnfZoqxXHjuskcoqLfZ3bNrDPc7tHGQfnLtAWWePB2LsH1nHS6cP5U2G6jFqGMI3icer%2FiTEYiNYkjt2EGd9OOqcWywoO8ztxKAds5%2FOySBYAMFJAyWox2UiFtHIksKulFA9O1UqaFzZVT5qsKGlFu3E6XA5vaN5wZT%2BO6UdEHm8NyHqK%2B2X%2BHhen9aHaPavW2kiJt%2BHkn%2Bcf9bTzpQlzc6QhRZtxv7VGrVFo%2BIuBEucLM9jimJbJPR1DKMPk1O2GMnbn%2FpG7uk3UU49r0MfJToKleXn7gGfINF181x1yhrlMPuBkcAGOqUB6vEy1qXppa%2F%2BKOttj7RQs0bH7%2Bxq3E9q096egFEl1DQQNSyqR9P5pW5FbbCbLeq7YoXxSmlMRqNBIutr0zqyaBvndivYhXexhM53IfbTN7mXYQoOeUugx4Ybu2aYCM%2FpcCiOj46cCIABSO6VhnXuA1UBb2VlgIiy6nnvZ453U0G%2BphrUtr12uIrZ8y8VprGaQiuilMhq8WFUp5NzML5Xd47bNqG6&X-Amz-Signature=d469fe24f77356e0a68cd6f99220e3b3fa62ed328e65f9262c35675f76c2f147&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL5UY7B%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIE%2BeG9G3IjHsqj7%2FCc0%2BlFeH%2F7c783eskTNVs%2Bv6O61MAiEAqt8OrL%2BZADjlFtjuIrF%2FoLUdAw09issrhNODmGauY4IqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1WGtn9nbWnPOsE3ircA0lKnpJw2NVl1vbNzuAwnM%2BDWbVvayDZWgEbS4ZXQhkV0G4NCEF8%2Fb8wK%2FqVMdIzjlpzzHaZmuo4eA%2BZHC9AUHq3ezxQS6llUYsxOwK67MBnmKAgBstO23%2BGKCw2p%2B9QC3oJlAzkdzOL0GGj7M%2FRsi7WQ1nJvHseroNTIYjfLu5jmOYASVNUyBuc6GIdjI8w312oGnBw9gU7vLuIfZSBub%2B58eWlsKYXR5Udpav%2Bsq3vabuEdCKCGJEOc1xbXdEDmb%2FKZFnwAYPPu8zSU%2FYP5znU2NPT0sHqFBJJqO9MyyssBYeNk5RV9BjFgcc8V3mddKXXgFjTv79u2nmrFnfZoqxXHjuskcoqLfZ3bNrDPc7tHGQfnLtAWWePB2LsH1nHS6cP5U2G6jFqGMI3icer%2FiTEYiNYkjt2EGd9OOqcWywoO8ztxKAds5%2FOySBYAMFJAyWox2UiFtHIksKulFA9O1UqaFzZVT5qsKGlFu3E6XA5vaN5wZT%2BO6UdEHm8NyHqK%2B2X%2BHhen9aHaPavW2kiJt%2BHkn%2Bcf9bTzpQlzc6QhRZtxv7VGrVFo%2BIuBEucLM9jimJbJPR1DKMPk1O2GMnbn%2FpG7uk3UU49r0MfJToKleXn7gGfINF181x1yhrlMPuBkcAGOqUB6vEy1qXppa%2F%2BKOttj7RQs0bH7%2Bxq3E9q096egFEl1DQQNSyqR9P5pW5FbbCbLeq7YoXxSmlMRqNBIutr0zqyaBvndivYhXexhM53IfbTN7mXYQoOeUugx4Ybu2aYCM%2FpcCiOj46cCIABSO6VhnXuA1UBb2VlgIiy6nnvZ453U0G%2BphrUtr12uIrZ8y8VprGaQiuilMhq8WFUp5NzML5Xd47bNqG6&X-Amz-Signature=06c95573608fc99cc4521a12f00b6f332c42d1a05c9064a8c9ac84a82ec900eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HL5UY7B%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T050757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIE%2BeG9G3IjHsqj7%2FCc0%2BlFeH%2F7c783eskTNVs%2Bv6O61MAiEAqt8OrL%2BZADjlFtjuIrF%2FoLUdAw09issrhNODmGauY4IqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB1WGtn9nbWnPOsE3ircA0lKnpJw2NVl1vbNzuAwnM%2BDWbVvayDZWgEbS4ZXQhkV0G4NCEF8%2Fb8wK%2FqVMdIzjlpzzHaZmuo4eA%2BZHC9AUHq3ezxQS6llUYsxOwK67MBnmKAgBstO23%2BGKCw2p%2B9QC3oJlAzkdzOL0GGj7M%2FRsi7WQ1nJvHseroNTIYjfLu5jmOYASVNUyBuc6GIdjI8w312oGnBw9gU7vLuIfZSBub%2B58eWlsKYXR5Udpav%2Bsq3vabuEdCKCGJEOc1xbXdEDmb%2FKZFnwAYPPu8zSU%2FYP5znU2NPT0sHqFBJJqO9MyyssBYeNk5RV9BjFgcc8V3mddKXXgFjTv79u2nmrFnfZoqxXHjuskcoqLfZ3bNrDPc7tHGQfnLtAWWePB2LsH1nHS6cP5U2G6jFqGMI3icer%2FiTEYiNYkjt2EGd9OOqcWywoO8ztxKAds5%2FOySBYAMFJAyWox2UiFtHIksKulFA9O1UqaFzZVT5qsKGlFu3E6XA5vaN5wZT%2BO6UdEHm8NyHqK%2B2X%2BHhen9aHaPavW2kiJt%2BHkn%2Bcf9bTzpQlzc6QhRZtxv7VGrVFo%2BIuBEucLM9jimJbJPR1DKMPk1O2GMnbn%2FpG7uk3UU49r0MfJToKleXn7gGfINF181x1yhrlMPuBkcAGOqUB6vEy1qXppa%2F%2BKOttj7RQs0bH7%2Bxq3E9q096egFEl1DQQNSyqR9P5pW5FbbCbLeq7YoXxSmlMRqNBIutr0zqyaBvndivYhXexhM53IfbTN7mXYQoOeUugx4Ybu2aYCM%2FpcCiOj46cCIABSO6VhnXuA1UBb2VlgIiy6nnvZ453U0G%2BphrUtr12uIrZ8y8VprGaQiuilMhq8WFUp5NzML5Xd47bNqG6&X-Amz-Signature=bb5d0b32fef95892b7ac5808859bbea06ff0385e02d813e036bc6db170110cf7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
