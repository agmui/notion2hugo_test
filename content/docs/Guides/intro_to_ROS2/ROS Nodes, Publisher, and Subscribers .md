---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635REJ6DC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY5ggUS0FKjhAzD376q1O39ladNxtY%2BG3mrTyTb5Cf7AiBP%2BvuCifYka4gcTJt7x7%2Bc7VPGMb3KKPq8gTaXHINMtCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGXVWwqH2SvQcUxuKtwDu6HHqsOot6gfJLYuywvmuA6CYV67rYsyxr1KcPGqdbojB02rtkLq4kSu9kdIrDR0bJcPBCziuBEK30l2F2zroSRjDyAG4fDE1J5i7BqiUyjJkmULcaR0rMGFbct0HWsa3YNNthE2tNBJ7HwmL6aYUjvLAXX4QzpnzgfW7xpSuwZOafDETkc8U%2Bx%2BpCBuUynnnBq7WWtRnUz830vh4F1WB3XtvPmfJTs6e%2Fbry2fT8bnyd8aCKkQnuJK%2F1fmZyH5VtmRnyRaQX%2Fdcvm9i2w3OBK8By2EsjbfcNzKsrm%2F3Mv72qj7Pmmd3c%2Bv5zBSUqxD9qCxjvn0vz8g78p2eYNmbb85zi8OxEse3znJH0IFpTkbOjhLEjgaSrI5xVC28QM%2F4o%2FqvBmYdhNI%2F8pWmP%2FGXMz61T%2BqFZ%2BeR%2FONY%2FpxVNcxAxD9RCiFswHGkz8fn0AKqwd5JZPFdoSJOmYxowsjy0iZWQydgcUmorn7Gf2NAlofWArBormSRcGZPfD1odZgumFedSxcXMT16iNcqCQlkWWVNIc%2FDh9%2FT%2FPXBIOPman74OIQi3MUMO7IuM0V3Kw25VZfJLCgG4NrChh4sp8QEidlgSmQ9KcenVNksCy5LsR5vsZx%2BpU2o9NjMSgMw6ZXjxAY6pgF45Ymbm0AwH7fdNHOjxHkJdV1kERafNyxWVFm9dYHi6H6C0Lhe%2BAb5b6qMMHR33oOPtlNaxyfSKp3XDludQeCUC7ecqPJQSHAk89Egj8VSGCYBVz21ebfDfyAVUvoBVq1Hwg2x4MZKUndru%2F97JQi%2FkYjcoh65v%2BQM4sV3E0iq%2Bv2sG8TWEfP8gGtJVjRc2wil%2BLMns63VgvHiEIUkhdrejWDtvdPQ&X-Amz-Signature=17d6ca47dea5273a80c6a11ee745674d1243937d4fdfd1a868fab410c2a643c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635REJ6DC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY5ggUS0FKjhAzD376q1O39ladNxtY%2BG3mrTyTb5Cf7AiBP%2BvuCifYka4gcTJt7x7%2Bc7VPGMb3KKPq8gTaXHINMtCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGXVWwqH2SvQcUxuKtwDu6HHqsOot6gfJLYuywvmuA6CYV67rYsyxr1KcPGqdbojB02rtkLq4kSu9kdIrDR0bJcPBCziuBEK30l2F2zroSRjDyAG4fDE1J5i7BqiUyjJkmULcaR0rMGFbct0HWsa3YNNthE2tNBJ7HwmL6aYUjvLAXX4QzpnzgfW7xpSuwZOafDETkc8U%2Bx%2BpCBuUynnnBq7WWtRnUz830vh4F1WB3XtvPmfJTs6e%2Fbry2fT8bnyd8aCKkQnuJK%2F1fmZyH5VtmRnyRaQX%2Fdcvm9i2w3OBK8By2EsjbfcNzKsrm%2F3Mv72qj7Pmmd3c%2Bv5zBSUqxD9qCxjvn0vz8g78p2eYNmbb85zi8OxEse3znJH0IFpTkbOjhLEjgaSrI5xVC28QM%2F4o%2FqvBmYdhNI%2F8pWmP%2FGXMz61T%2BqFZ%2BeR%2FONY%2FpxVNcxAxD9RCiFswHGkz8fn0AKqwd5JZPFdoSJOmYxowsjy0iZWQydgcUmorn7Gf2NAlofWArBormSRcGZPfD1odZgumFedSxcXMT16iNcqCQlkWWVNIc%2FDh9%2FT%2FPXBIOPman74OIQi3MUMO7IuM0V3Kw25VZfJLCgG4NrChh4sp8QEidlgSmQ9KcenVNksCy5LsR5vsZx%2BpU2o9NjMSgMw6ZXjxAY6pgF45Ymbm0AwH7fdNHOjxHkJdV1kERafNyxWVFm9dYHi6H6C0Lhe%2BAb5b6qMMHR33oOPtlNaxyfSKp3XDludQeCUC7ecqPJQSHAk89Egj8VSGCYBVz21ebfDfyAVUvoBVq1Hwg2x4MZKUndru%2F97JQi%2FkYjcoh65v%2BQM4sV3E0iq%2Bv2sG8TWEfP8gGtJVjRc2wil%2BLMns63VgvHiEIUkhdrejWDtvdPQ&X-Amz-Signature=355c2cfc67387ca0f1b8d38e9d244bcef8a9a3d8308610b5e3c20e6779072652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635REJ6DC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY5ggUS0FKjhAzD376q1O39ladNxtY%2BG3mrTyTb5Cf7AiBP%2BvuCifYka4gcTJt7x7%2Bc7VPGMb3KKPq8gTaXHINMtCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGXVWwqH2SvQcUxuKtwDu6HHqsOot6gfJLYuywvmuA6CYV67rYsyxr1KcPGqdbojB02rtkLq4kSu9kdIrDR0bJcPBCziuBEK30l2F2zroSRjDyAG4fDE1J5i7BqiUyjJkmULcaR0rMGFbct0HWsa3YNNthE2tNBJ7HwmL6aYUjvLAXX4QzpnzgfW7xpSuwZOafDETkc8U%2Bx%2BpCBuUynnnBq7WWtRnUz830vh4F1WB3XtvPmfJTs6e%2Fbry2fT8bnyd8aCKkQnuJK%2F1fmZyH5VtmRnyRaQX%2Fdcvm9i2w3OBK8By2EsjbfcNzKsrm%2F3Mv72qj7Pmmd3c%2Bv5zBSUqxD9qCxjvn0vz8g78p2eYNmbb85zi8OxEse3znJH0IFpTkbOjhLEjgaSrI5xVC28QM%2F4o%2FqvBmYdhNI%2F8pWmP%2FGXMz61T%2BqFZ%2BeR%2FONY%2FpxVNcxAxD9RCiFswHGkz8fn0AKqwd5JZPFdoSJOmYxowsjy0iZWQydgcUmorn7Gf2NAlofWArBormSRcGZPfD1odZgumFedSxcXMT16iNcqCQlkWWVNIc%2FDh9%2FT%2FPXBIOPman74OIQi3MUMO7IuM0V3Kw25VZfJLCgG4NrChh4sp8QEidlgSmQ9KcenVNksCy5LsR5vsZx%2BpU2o9NjMSgMw6ZXjxAY6pgF45Ymbm0AwH7fdNHOjxHkJdV1kERafNyxWVFm9dYHi6H6C0Lhe%2BAb5b6qMMHR33oOPtlNaxyfSKp3XDludQeCUC7ecqPJQSHAk89Egj8VSGCYBVz21ebfDfyAVUvoBVq1Hwg2x4MZKUndru%2F97JQi%2FkYjcoh65v%2BQM4sV3E0iq%2Bv2sG8TWEfP8gGtJVjRc2wil%2BLMns63VgvHiEIUkhdrejWDtvdPQ&X-Amz-Signature=73006726117a379a760e0defd7686cd48df768449b41186c72ca1e1428bee51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635REJ6DC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY5ggUS0FKjhAzD376q1O39ladNxtY%2BG3mrTyTb5Cf7AiBP%2BvuCifYka4gcTJt7x7%2Bc7VPGMb3KKPq8gTaXHINMtCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGXVWwqH2SvQcUxuKtwDu6HHqsOot6gfJLYuywvmuA6CYV67rYsyxr1KcPGqdbojB02rtkLq4kSu9kdIrDR0bJcPBCziuBEK30l2F2zroSRjDyAG4fDE1J5i7BqiUyjJkmULcaR0rMGFbct0HWsa3YNNthE2tNBJ7HwmL6aYUjvLAXX4QzpnzgfW7xpSuwZOafDETkc8U%2Bx%2BpCBuUynnnBq7WWtRnUz830vh4F1WB3XtvPmfJTs6e%2Fbry2fT8bnyd8aCKkQnuJK%2F1fmZyH5VtmRnyRaQX%2Fdcvm9i2w3OBK8By2EsjbfcNzKsrm%2F3Mv72qj7Pmmd3c%2Bv5zBSUqxD9qCxjvn0vz8g78p2eYNmbb85zi8OxEse3znJH0IFpTkbOjhLEjgaSrI5xVC28QM%2F4o%2FqvBmYdhNI%2F8pWmP%2FGXMz61T%2BqFZ%2BeR%2FONY%2FpxVNcxAxD9RCiFswHGkz8fn0AKqwd5JZPFdoSJOmYxowsjy0iZWQydgcUmorn7Gf2NAlofWArBormSRcGZPfD1odZgumFedSxcXMT16iNcqCQlkWWVNIc%2FDh9%2FT%2FPXBIOPman74OIQi3MUMO7IuM0V3Kw25VZfJLCgG4NrChh4sp8QEidlgSmQ9KcenVNksCy5LsR5vsZx%2BpU2o9NjMSgMw6ZXjxAY6pgF45Ymbm0AwH7fdNHOjxHkJdV1kERafNyxWVFm9dYHi6H6C0Lhe%2BAb5b6qMMHR33oOPtlNaxyfSKp3XDludQeCUC7ecqPJQSHAk89Egj8VSGCYBVz21ebfDfyAVUvoBVq1Hwg2x4MZKUndru%2F97JQi%2FkYjcoh65v%2BQM4sV3E0iq%2Bv2sG8TWEfP8gGtJVjRc2wil%2BLMns63VgvHiEIUkhdrejWDtvdPQ&X-Amz-Signature=9b1ca13a67e2bc12545fd220dbe6823dcd19f1b178804607af4d7979647d7e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635REJ6DC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY5ggUS0FKjhAzD376q1O39ladNxtY%2BG3mrTyTb5Cf7AiBP%2BvuCifYka4gcTJt7x7%2Bc7VPGMb3KKPq8gTaXHINMtCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGXVWwqH2SvQcUxuKtwDu6HHqsOot6gfJLYuywvmuA6CYV67rYsyxr1KcPGqdbojB02rtkLq4kSu9kdIrDR0bJcPBCziuBEK30l2F2zroSRjDyAG4fDE1J5i7BqiUyjJkmULcaR0rMGFbct0HWsa3YNNthE2tNBJ7HwmL6aYUjvLAXX4QzpnzgfW7xpSuwZOafDETkc8U%2Bx%2BpCBuUynnnBq7WWtRnUz830vh4F1WB3XtvPmfJTs6e%2Fbry2fT8bnyd8aCKkQnuJK%2F1fmZyH5VtmRnyRaQX%2Fdcvm9i2w3OBK8By2EsjbfcNzKsrm%2F3Mv72qj7Pmmd3c%2Bv5zBSUqxD9qCxjvn0vz8g78p2eYNmbb85zi8OxEse3znJH0IFpTkbOjhLEjgaSrI5xVC28QM%2F4o%2FqvBmYdhNI%2F8pWmP%2FGXMz61T%2BqFZ%2BeR%2FONY%2FpxVNcxAxD9RCiFswHGkz8fn0AKqwd5JZPFdoSJOmYxowsjy0iZWQydgcUmorn7Gf2NAlofWArBormSRcGZPfD1odZgumFedSxcXMT16iNcqCQlkWWVNIc%2FDh9%2FT%2FPXBIOPman74OIQi3MUMO7IuM0V3Kw25VZfJLCgG4NrChh4sp8QEidlgSmQ9KcenVNksCy5LsR5vsZx%2BpU2o9NjMSgMw6ZXjxAY6pgF45Ymbm0AwH7fdNHOjxHkJdV1kERafNyxWVFm9dYHi6H6C0Lhe%2BAb5b6qMMHR33oOPtlNaxyfSKp3XDludQeCUC7ecqPJQSHAk89Egj8VSGCYBVz21ebfDfyAVUvoBVq1Hwg2x4MZKUndru%2F97JQi%2FkYjcoh65v%2BQM4sV3E0iq%2Bv2sG8TWEfP8gGtJVjRc2wil%2BLMns63VgvHiEIUkhdrejWDtvdPQ&X-Amz-Signature=f43d06f7284d38c599f766cafa2dfd13527e1148241672579f4081ebbb915940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635REJ6DC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY5ggUS0FKjhAzD376q1O39ladNxtY%2BG3mrTyTb5Cf7AiBP%2BvuCifYka4gcTJt7x7%2Bc7VPGMb3KKPq8gTaXHINMtCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGXVWwqH2SvQcUxuKtwDu6HHqsOot6gfJLYuywvmuA6CYV67rYsyxr1KcPGqdbojB02rtkLq4kSu9kdIrDR0bJcPBCziuBEK30l2F2zroSRjDyAG4fDE1J5i7BqiUyjJkmULcaR0rMGFbct0HWsa3YNNthE2tNBJ7HwmL6aYUjvLAXX4QzpnzgfW7xpSuwZOafDETkc8U%2Bx%2BpCBuUynnnBq7WWtRnUz830vh4F1WB3XtvPmfJTs6e%2Fbry2fT8bnyd8aCKkQnuJK%2F1fmZyH5VtmRnyRaQX%2Fdcvm9i2w3OBK8By2EsjbfcNzKsrm%2F3Mv72qj7Pmmd3c%2Bv5zBSUqxD9qCxjvn0vz8g78p2eYNmbb85zi8OxEse3znJH0IFpTkbOjhLEjgaSrI5xVC28QM%2F4o%2FqvBmYdhNI%2F8pWmP%2FGXMz61T%2BqFZ%2BeR%2FONY%2FpxVNcxAxD9RCiFswHGkz8fn0AKqwd5JZPFdoSJOmYxowsjy0iZWQydgcUmorn7Gf2NAlofWArBormSRcGZPfD1odZgumFedSxcXMT16iNcqCQlkWWVNIc%2FDh9%2FT%2FPXBIOPman74OIQi3MUMO7IuM0V3Kw25VZfJLCgG4NrChh4sp8QEidlgSmQ9KcenVNksCy5LsR5vsZx%2BpU2o9NjMSgMw6ZXjxAY6pgF45Ymbm0AwH7fdNHOjxHkJdV1kERafNyxWVFm9dYHi6H6C0Lhe%2BAb5b6qMMHR33oOPtlNaxyfSKp3XDludQeCUC7ecqPJQSHAk89Egj8VSGCYBVz21ebfDfyAVUvoBVq1Hwg2x4MZKUndru%2F97JQi%2FkYjcoh65v%2BQM4sV3E0iq%2Bv2sG8TWEfP8gGtJVjRc2wil%2BLMns63VgvHiEIUkhdrejWDtvdPQ&X-Amz-Signature=b858fa8b9f1128a797a6191042e32f366f7facadcf2f519e307ee41995355518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635REJ6DC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY5ggUS0FKjhAzD376q1O39ladNxtY%2BG3mrTyTb5Cf7AiBP%2BvuCifYka4gcTJt7x7%2Bc7VPGMb3KKPq8gTaXHINMtCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGXVWwqH2SvQcUxuKtwDu6HHqsOot6gfJLYuywvmuA6CYV67rYsyxr1KcPGqdbojB02rtkLq4kSu9kdIrDR0bJcPBCziuBEK30l2F2zroSRjDyAG4fDE1J5i7BqiUyjJkmULcaR0rMGFbct0HWsa3YNNthE2tNBJ7HwmL6aYUjvLAXX4QzpnzgfW7xpSuwZOafDETkc8U%2Bx%2BpCBuUynnnBq7WWtRnUz830vh4F1WB3XtvPmfJTs6e%2Fbry2fT8bnyd8aCKkQnuJK%2F1fmZyH5VtmRnyRaQX%2Fdcvm9i2w3OBK8By2EsjbfcNzKsrm%2F3Mv72qj7Pmmd3c%2Bv5zBSUqxD9qCxjvn0vz8g78p2eYNmbb85zi8OxEse3znJH0IFpTkbOjhLEjgaSrI5xVC28QM%2F4o%2FqvBmYdhNI%2F8pWmP%2FGXMz61T%2BqFZ%2BeR%2FONY%2FpxVNcxAxD9RCiFswHGkz8fn0AKqwd5JZPFdoSJOmYxowsjy0iZWQydgcUmorn7Gf2NAlofWArBormSRcGZPfD1odZgumFedSxcXMT16iNcqCQlkWWVNIc%2FDh9%2FT%2FPXBIOPman74OIQi3MUMO7IuM0V3Kw25VZfJLCgG4NrChh4sp8QEidlgSmQ9KcenVNksCy5LsR5vsZx%2BpU2o9NjMSgMw6ZXjxAY6pgF45Ymbm0AwH7fdNHOjxHkJdV1kERafNyxWVFm9dYHi6H6C0Lhe%2BAb5b6qMMHR33oOPtlNaxyfSKp3XDludQeCUC7ecqPJQSHAk89Egj8VSGCYBVz21ebfDfyAVUvoBVq1Hwg2x4MZKUndru%2F97JQi%2FkYjcoh65v%2BQM4sV3E0iq%2Bv2sG8TWEfP8gGtJVjRc2wil%2BLMns63VgvHiEIUkhdrejWDtvdPQ&X-Amz-Signature=300e15063fc35bf986fee7fb46fbfa238e26daff8c8460308d031b3c90c36e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635REJ6DC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBY5ggUS0FKjhAzD376q1O39ladNxtY%2BG3mrTyTb5Cf7AiBP%2BvuCifYka4gcTJt7x7%2Bc7VPGMb3KKPq8gTaXHINMtCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjGXVWwqH2SvQcUxuKtwDu6HHqsOot6gfJLYuywvmuA6CYV67rYsyxr1KcPGqdbojB02rtkLq4kSu9kdIrDR0bJcPBCziuBEK30l2F2zroSRjDyAG4fDE1J5i7BqiUyjJkmULcaR0rMGFbct0HWsa3YNNthE2tNBJ7HwmL6aYUjvLAXX4QzpnzgfW7xpSuwZOafDETkc8U%2Bx%2BpCBuUynnnBq7WWtRnUz830vh4F1WB3XtvPmfJTs6e%2Fbry2fT8bnyd8aCKkQnuJK%2F1fmZyH5VtmRnyRaQX%2Fdcvm9i2w3OBK8By2EsjbfcNzKsrm%2F3Mv72qj7Pmmd3c%2Bv5zBSUqxD9qCxjvn0vz8g78p2eYNmbb85zi8OxEse3znJH0IFpTkbOjhLEjgaSrI5xVC28QM%2F4o%2FqvBmYdhNI%2F8pWmP%2FGXMz61T%2BqFZ%2BeR%2FONY%2FpxVNcxAxD9RCiFswHGkz8fn0AKqwd5JZPFdoSJOmYxowsjy0iZWQydgcUmorn7Gf2NAlofWArBormSRcGZPfD1odZgumFedSxcXMT16iNcqCQlkWWVNIc%2FDh9%2FT%2FPXBIOPman74OIQi3MUMO7IuM0V3Kw25VZfJLCgG4NrChh4sp8QEidlgSmQ9KcenVNksCy5LsR5vsZx%2BpU2o9NjMSgMw6ZXjxAY6pgF45Ymbm0AwH7fdNHOjxHkJdV1kERafNyxWVFm9dYHi6H6C0Lhe%2BAb5b6qMMHR33oOPtlNaxyfSKp3XDludQeCUC7ecqPJQSHAk89Egj8VSGCYBVz21ebfDfyAVUvoBVq1Hwg2x4MZKUndru%2F97JQi%2FkYjcoh65v%2BQM4sV3E0iq%2Bv2sG8TWEfP8gGtJVjRc2wil%2BLMns63VgvHiEIUkhdrejWDtvdPQ&X-Amz-Signature=1bcdd46df27acb7349328402e75819f9d3ac8ce3b11f40af1ee4c33b1427ec9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
