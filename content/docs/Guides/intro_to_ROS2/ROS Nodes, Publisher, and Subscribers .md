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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG46SZ2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4LoDiukWN2kluX1OrMFiBiqCk3qnc72Ckly1suKiplAiB0xaGOedx4nJeJblgcQw0PGfi8LXD6NWirl%2B7yjl9cgCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPkigjAR%2FDFj%2BTYy3KtwDdsKgGXP45OCm9pFRb6Xp1uJcd1%2BNOAavoDbVPjJc1dlLu4LRtAMxD65MHtP9LD%2FO9p1%2F2fZSzsbunjx4%2F1EhEN1YIf%2FNkBvAAt8g3mlrw%2FZn69ozaRrReXxJXK5Njw6WuxZkT31z2vH4dNzvN3C%2FicqirP403YqL2GpwsjD%2Bjx%2BHln%2FzGuiH1RPsMkWArVfNV5zsARahYBwU2hcKORKA%2BbGmfpBIOWHMCBj0VgCcdAF8qN9ndd0gNOmmKzc%2B7RFmcGGByx%2Fe7edcAXMKxtYGBOI42J604qXTXHdDj208zmdM6jm57VurjuLNmkoq0gsnXjQEHxh6Ian2bWA1zmLjic%2FhqXsO%2Bs7F%2FJZMYwhsIJrQ2zOzJ24kfk1NL6eqko9Y6pSQCYu%2FYSB1V4bFtBEzqDZ4IM9zLq9bGUh10kUvabQ4MOZKJ4Z2J9fgmxQcBXKutYgdqv9FNIrqA92DVB1kQCvsiH9UohilSwmcPgvtw%2Bqqu%2BbmyxkRYsyH7cuqLKTY6XXqOAEUDwQJEyJH2mIuFXfB9k9lC2Z6p7oQckNy38PWDs6pm76pKPdLn8ULex7gPPttRxnhUYUwMi%2F0VFenf4fCHm9hnIh5pEQ%2FFIk%2FIgS1Wjk0ARjC5rHJ4B8wqI7exAY6pgF89ZNTIc03WHZoTg5q6Jvbxy4m895jbU64SCUC3e0DygH%2BQ9S%2BSS0G7W3SKqTn4Xreek6IJy1lbr1Jt0iPrfLdYexbXbdKoWFkx5UQ9pn6FT9lurYxQTEOsgwJxA1mwO%2FGjG27aKbbJo%2BGgI%2Fut6kfEkgC8odYLbdHyIB%2F2dd%2BNYVMM9K3isjRC31rTNOapRN4c3zoYMMDVR6m0INBKOAEQl9oKJ9C&X-Amz-Signature=e55963689c6fb330efeb7b84a5d2017a06ca09d44235ee1eee0690368a5cb78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG46SZ2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4LoDiukWN2kluX1OrMFiBiqCk3qnc72Ckly1suKiplAiB0xaGOedx4nJeJblgcQw0PGfi8LXD6NWirl%2B7yjl9cgCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPkigjAR%2FDFj%2BTYy3KtwDdsKgGXP45OCm9pFRb6Xp1uJcd1%2BNOAavoDbVPjJc1dlLu4LRtAMxD65MHtP9LD%2FO9p1%2F2fZSzsbunjx4%2F1EhEN1YIf%2FNkBvAAt8g3mlrw%2FZn69ozaRrReXxJXK5Njw6WuxZkT31z2vH4dNzvN3C%2FicqirP403YqL2GpwsjD%2Bjx%2BHln%2FzGuiH1RPsMkWArVfNV5zsARahYBwU2hcKORKA%2BbGmfpBIOWHMCBj0VgCcdAF8qN9ndd0gNOmmKzc%2B7RFmcGGByx%2Fe7edcAXMKxtYGBOI42J604qXTXHdDj208zmdM6jm57VurjuLNmkoq0gsnXjQEHxh6Ian2bWA1zmLjic%2FhqXsO%2Bs7F%2FJZMYwhsIJrQ2zOzJ24kfk1NL6eqko9Y6pSQCYu%2FYSB1V4bFtBEzqDZ4IM9zLq9bGUh10kUvabQ4MOZKJ4Z2J9fgmxQcBXKutYgdqv9FNIrqA92DVB1kQCvsiH9UohilSwmcPgvtw%2Bqqu%2BbmyxkRYsyH7cuqLKTY6XXqOAEUDwQJEyJH2mIuFXfB9k9lC2Z6p7oQckNy38PWDs6pm76pKPdLn8ULex7gPPttRxnhUYUwMi%2F0VFenf4fCHm9hnIh5pEQ%2FFIk%2FIgS1Wjk0ARjC5rHJ4B8wqI7exAY6pgF89ZNTIc03WHZoTg5q6Jvbxy4m895jbU64SCUC3e0DygH%2BQ9S%2BSS0G7W3SKqTn4Xreek6IJy1lbr1Jt0iPrfLdYexbXbdKoWFkx5UQ9pn6FT9lurYxQTEOsgwJxA1mwO%2FGjG27aKbbJo%2BGgI%2Fut6kfEkgC8odYLbdHyIB%2F2dd%2BNYVMM9K3isjRC31rTNOapRN4c3zoYMMDVR6m0INBKOAEQl9oKJ9C&X-Amz-Signature=6bbfaf98413e9e2cb25cd3d5e35e4a1096aff486efe6f7379299a92879cbfc47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG46SZ2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4LoDiukWN2kluX1OrMFiBiqCk3qnc72Ckly1suKiplAiB0xaGOedx4nJeJblgcQw0PGfi8LXD6NWirl%2B7yjl9cgCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPkigjAR%2FDFj%2BTYy3KtwDdsKgGXP45OCm9pFRb6Xp1uJcd1%2BNOAavoDbVPjJc1dlLu4LRtAMxD65MHtP9LD%2FO9p1%2F2fZSzsbunjx4%2F1EhEN1YIf%2FNkBvAAt8g3mlrw%2FZn69ozaRrReXxJXK5Njw6WuxZkT31z2vH4dNzvN3C%2FicqirP403YqL2GpwsjD%2Bjx%2BHln%2FzGuiH1RPsMkWArVfNV5zsARahYBwU2hcKORKA%2BbGmfpBIOWHMCBj0VgCcdAF8qN9ndd0gNOmmKzc%2B7RFmcGGByx%2Fe7edcAXMKxtYGBOI42J604qXTXHdDj208zmdM6jm57VurjuLNmkoq0gsnXjQEHxh6Ian2bWA1zmLjic%2FhqXsO%2Bs7F%2FJZMYwhsIJrQ2zOzJ24kfk1NL6eqko9Y6pSQCYu%2FYSB1V4bFtBEzqDZ4IM9zLq9bGUh10kUvabQ4MOZKJ4Z2J9fgmxQcBXKutYgdqv9FNIrqA92DVB1kQCvsiH9UohilSwmcPgvtw%2Bqqu%2BbmyxkRYsyH7cuqLKTY6XXqOAEUDwQJEyJH2mIuFXfB9k9lC2Z6p7oQckNy38PWDs6pm76pKPdLn8ULex7gPPttRxnhUYUwMi%2F0VFenf4fCHm9hnIh5pEQ%2FFIk%2FIgS1Wjk0ARjC5rHJ4B8wqI7exAY6pgF89ZNTIc03WHZoTg5q6Jvbxy4m895jbU64SCUC3e0DygH%2BQ9S%2BSS0G7W3SKqTn4Xreek6IJy1lbr1Jt0iPrfLdYexbXbdKoWFkx5UQ9pn6FT9lurYxQTEOsgwJxA1mwO%2FGjG27aKbbJo%2BGgI%2Fut6kfEkgC8odYLbdHyIB%2F2dd%2BNYVMM9K3isjRC31rTNOapRN4c3zoYMMDVR6m0INBKOAEQl9oKJ9C&X-Amz-Signature=32e6e72055077cb3319ad1569505090f6ac8fc84e7087e323ef5da7aaeeb93fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG46SZ2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4LoDiukWN2kluX1OrMFiBiqCk3qnc72Ckly1suKiplAiB0xaGOedx4nJeJblgcQw0PGfi8LXD6NWirl%2B7yjl9cgCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPkigjAR%2FDFj%2BTYy3KtwDdsKgGXP45OCm9pFRb6Xp1uJcd1%2BNOAavoDbVPjJc1dlLu4LRtAMxD65MHtP9LD%2FO9p1%2F2fZSzsbunjx4%2F1EhEN1YIf%2FNkBvAAt8g3mlrw%2FZn69ozaRrReXxJXK5Njw6WuxZkT31z2vH4dNzvN3C%2FicqirP403YqL2GpwsjD%2Bjx%2BHln%2FzGuiH1RPsMkWArVfNV5zsARahYBwU2hcKORKA%2BbGmfpBIOWHMCBj0VgCcdAF8qN9ndd0gNOmmKzc%2B7RFmcGGByx%2Fe7edcAXMKxtYGBOI42J604qXTXHdDj208zmdM6jm57VurjuLNmkoq0gsnXjQEHxh6Ian2bWA1zmLjic%2FhqXsO%2Bs7F%2FJZMYwhsIJrQ2zOzJ24kfk1NL6eqko9Y6pSQCYu%2FYSB1V4bFtBEzqDZ4IM9zLq9bGUh10kUvabQ4MOZKJ4Z2J9fgmxQcBXKutYgdqv9FNIrqA92DVB1kQCvsiH9UohilSwmcPgvtw%2Bqqu%2BbmyxkRYsyH7cuqLKTY6XXqOAEUDwQJEyJH2mIuFXfB9k9lC2Z6p7oQckNy38PWDs6pm76pKPdLn8ULex7gPPttRxnhUYUwMi%2F0VFenf4fCHm9hnIh5pEQ%2FFIk%2FIgS1Wjk0ARjC5rHJ4B8wqI7exAY6pgF89ZNTIc03WHZoTg5q6Jvbxy4m895jbU64SCUC3e0DygH%2BQ9S%2BSS0G7W3SKqTn4Xreek6IJy1lbr1Jt0iPrfLdYexbXbdKoWFkx5UQ9pn6FT9lurYxQTEOsgwJxA1mwO%2FGjG27aKbbJo%2BGgI%2Fut6kfEkgC8odYLbdHyIB%2F2dd%2BNYVMM9K3isjRC31rTNOapRN4c3zoYMMDVR6m0INBKOAEQl9oKJ9C&X-Amz-Signature=43bbe3fe576b89d537c1af2458fd4ee2a94a873dbaacc8bcebe4e435f17d0d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG46SZ2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4LoDiukWN2kluX1OrMFiBiqCk3qnc72Ckly1suKiplAiB0xaGOedx4nJeJblgcQw0PGfi8LXD6NWirl%2B7yjl9cgCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPkigjAR%2FDFj%2BTYy3KtwDdsKgGXP45OCm9pFRb6Xp1uJcd1%2BNOAavoDbVPjJc1dlLu4LRtAMxD65MHtP9LD%2FO9p1%2F2fZSzsbunjx4%2F1EhEN1YIf%2FNkBvAAt8g3mlrw%2FZn69ozaRrReXxJXK5Njw6WuxZkT31z2vH4dNzvN3C%2FicqirP403YqL2GpwsjD%2Bjx%2BHln%2FzGuiH1RPsMkWArVfNV5zsARahYBwU2hcKORKA%2BbGmfpBIOWHMCBj0VgCcdAF8qN9ndd0gNOmmKzc%2B7RFmcGGByx%2Fe7edcAXMKxtYGBOI42J604qXTXHdDj208zmdM6jm57VurjuLNmkoq0gsnXjQEHxh6Ian2bWA1zmLjic%2FhqXsO%2Bs7F%2FJZMYwhsIJrQ2zOzJ24kfk1NL6eqko9Y6pSQCYu%2FYSB1V4bFtBEzqDZ4IM9zLq9bGUh10kUvabQ4MOZKJ4Z2J9fgmxQcBXKutYgdqv9FNIrqA92DVB1kQCvsiH9UohilSwmcPgvtw%2Bqqu%2BbmyxkRYsyH7cuqLKTY6XXqOAEUDwQJEyJH2mIuFXfB9k9lC2Z6p7oQckNy38PWDs6pm76pKPdLn8ULex7gPPttRxnhUYUwMi%2F0VFenf4fCHm9hnIh5pEQ%2FFIk%2FIgS1Wjk0ARjC5rHJ4B8wqI7exAY6pgF89ZNTIc03WHZoTg5q6Jvbxy4m895jbU64SCUC3e0DygH%2BQ9S%2BSS0G7W3SKqTn4Xreek6IJy1lbr1Jt0iPrfLdYexbXbdKoWFkx5UQ9pn6FT9lurYxQTEOsgwJxA1mwO%2FGjG27aKbbJo%2BGgI%2Fut6kfEkgC8odYLbdHyIB%2F2dd%2BNYVMM9K3isjRC31rTNOapRN4c3zoYMMDVR6m0INBKOAEQl9oKJ9C&X-Amz-Signature=058e8808725a11e0989df74a55244e91c8e7e65adc52b997ffe47071013c09ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG46SZ2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4LoDiukWN2kluX1OrMFiBiqCk3qnc72Ckly1suKiplAiB0xaGOedx4nJeJblgcQw0PGfi8LXD6NWirl%2B7yjl9cgCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPkigjAR%2FDFj%2BTYy3KtwDdsKgGXP45OCm9pFRb6Xp1uJcd1%2BNOAavoDbVPjJc1dlLu4LRtAMxD65MHtP9LD%2FO9p1%2F2fZSzsbunjx4%2F1EhEN1YIf%2FNkBvAAt8g3mlrw%2FZn69ozaRrReXxJXK5Njw6WuxZkT31z2vH4dNzvN3C%2FicqirP403YqL2GpwsjD%2Bjx%2BHln%2FzGuiH1RPsMkWArVfNV5zsARahYBwU2hcKORKA%2BbGmfpBIOWHMCBj0VgCcdAF8qN9ndd0gNOmmKzc%2B7RFmcGGByx%2Fe7edcAXMKxtYGBOI42J604qXTXHdDj208zmdM6jm57VurjuLNmkoq0gsnXjQEHxh6Ian2bWA1zmLjic%2FhqXsO%2Bs7F%2FJZMYwhsIJrQ2zOzJ24kfk1NL6eqko9Y6pSQCYu%2FYSB1V4bFtBEzqDZ4IM9zLq9bGUh10kUvabQ4MOZKJ4Z2J9fgmxQcBXKutYgdqv9FNIrqA92DVB1kQCvsiH9UohilSwmcPgvtw%2Bqqu%2BbmyxkRYsyH7cuqLKTY6XXqOAEUDwQJEyJH2mIuFXfB9k9lC2Z6p7oQckNy38PWDs6pm76pKPdLn8ULex7gPPttRxnhUYUwMi%2F0VFenf4fCHm9hnIh5pEQ%2FFIk%2FIgS1Wjk0ARjC5rHJ4B8wqI7exAY6pgF89ZNTIc03WHZoTg5q6Jvbxy4m895jbU64SCUC3e0DygH%2BQ9S%2BSS0G7W3SKqTn4Xreek6IJy1lbr1Jt0iPrfLdYexbXbdKoWFkx5UQ9pn6FT9lurYxQTEOsgwJxA1mwO%2FGjG27aKbbJo%2BGgI%2Fut6kfEkgC8odYLbdHyIB%2F2dd%2BNYVMM9K3isjRC31rTNOapRN4c3zoYMMDVR6m0INBKOAEQl9oKJ9C&X-Amz-Signature=1a983813467ee4881f34d34d6b090d385cfdfd4f2cde92de10e1a7acd3bf9fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG46SZ2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4LoDiukWN2kluX1OrMFiBiqCk3qnc72Ckly1suKiplAiB0xaGOedx4nJeJblgcQw0PGfi8LXD6NWirl%2B7yjl9cgCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPkigjAR%2FDFj%2BTYy3KtwDdsKgGXP45OCm9pFRb6Xp1uJcd1%2BNOAavoDbVPjJc1dlLu4LRtAMxD65MHtP9LD%2FO9p1%2F2fZSzsbunjx4%2F1EhEN1YIf%2FNkBvAAt8g3mlrw%2FZn69ozaRrReXxJXK5Njw6WuxZkT31z2vH4dNzvN3C%2FicqirP403YqL2GpwsjD%2Bjx%2BHln%2FzGuiH1RPsMkWArVfNV5zsARahYBwU2hcKORKA%2BbGmfpBIOWHMCBj0VgCcdAF8qN9ndd0gNOmmKzc%2B7RFmcGGByx%2Fe7edcAXMKxtYGBOI42J604qXTXHdDj208zmdM6jm57VurjuLNmkoq0gsnXjQEHxh6Ian2bWA1zmLjic%2FhqXsO%2Bs7F%2FJZMYwhsIJrQ2zOzJ24kfk1NL6eqko9Y6pSQCYu%2FYSB1V4bFtBEzqDZ4IM9zLq9bGUh10kUvabQ4MOZKJ4Z2J9fgmxQcBXKutYgdqv9FNIrqA92DVB1kQCvsiH9UohilSwmcPgvtw%2Bqqu%2BbmyxkRYsyH7cuqLKTY6XXqOAEUDwQJEyJH2mIuFXfB9k9lC2Z6p7oQckNy38PWDs6pm76pKPdLn8ULex7gPPttRxnhUYUwMi%2F0VFenf4fCHm9hnIh5pEQ%2FFIk%2FIgS1Wjk0ARjC5rHJ4B8wqI7exAY6pgF89ZNTIc03WHZoTg5q6Jvbxy4m895jbU64SCUC3e0DygH%2BQ9S%2BSS0G7W3SKqTn4Xreek6IJy1lbr1Jt0iPrfLdYexbXbdKoWFkx5UQ9pn6FT9lurYxQTEOsgwJxA1mwO%2FGjG27aKbbJo%2BGgI%2Fut6kfEkgC8odYLbdHyIB%2F2dd%2BNYVMM9K3isjRC31rTNOapRN4c3zoYMMDVR6m0INBKOAEQl9oKJ9C&X-Amz-Signature=cf02ef8cd16c69408c92032417bbca1efb2ec6bf601c9536fccf5208b9cb3d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGG46SZ2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4LoDiukWN2kluX1OrMFiBiqCk3qnc72Ckly1suKiplAiB0xaGOedx4nJeJblgcQw0PGfi8LXD6NWirl%2B7yjl9cgCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPkigjAR%2FDFj%2BTYy3KtwDdsKgGXP45OCm9pFRb6Xp1uJcd1%2BNOAavoDbVPjJc1dlLu4LRtAMxD65MHtP9LD%2FO9p1%2F2fZSzsbunjx4%2F1EhEN1YIf%2FNkBvAAt8g3mlrw%2FZn69ozaRrReXxJXK5Njw6WuxZkT31z2vH4dNzvN3C%2FicqirP403YqL2GpwsjD%2Bjx%2BHln%2FzGuiH1RPsMkWArVfNV5zsARahYBwU2hcKORKA%2BbGmfpBIOWHMCBj0VgCcdAF8qN9ndd0gNOmmKzc%2B7RFmcGGByx%2Fe7edcAXMKxtYGBOI42J604qXTXHdDj208zmdM6jm57VurjuLNmkoq0gsnXjQEHxh6Ian2bWA1zmLjic%2FhqXsO%2Bs7F%2FJZMYwhsIJrQ2zOzJ24kfk1NL6eqko9Y6pSQCYu%2FYSB1V4bFtBEzqDZ4IM9zLq9bGUh10kUvabQ4MOZKJ4Z2J9fgmxQcBXKutYgdqv9FNIrqA92DVB1kQCvsiH9UohilSwmcPgvtw%2Bqqu%2BbmyxkRYsyH7cuqLKTY6XXqOAEUDwQJEyJH2mIuFXfB9k9lC2Z6p7oQckNy38PWDs6pm76pKPdLn8ULex7gPPttRxnhUYUwMi%2F0VFenf4fCHm9hnIh5pEQ%2FFIk%2FIgS1Wjk0ARjC5rHJ4B8wqI7exAY6pgF89ZNTIc03WHZoTg5q6Jvbxy4m895jbU64SCUC3e0DygH%2BQ9S%2BSS0G7W3SKqTn4Xreek6IJy1lbr1Jt0iPrfLdYexbXbdKoWFkx5UQ9pn6FT9lurYxQTEOsgwJxA1mwO%2FGjG27aKbbJo%2BGgI%2Fut6kfEkgC8odYLbdHyIB%2F2dd%2BNYVMM9K3isjRC31rTNOapRN4c3zoYMMDVR6m0INBKOAEQl9oKJ9C&X-Amz-Signature=ee9b53dae7b955f8c6980296c90d67a79bf35bdb11faf0a6199c07ff87cd1594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
