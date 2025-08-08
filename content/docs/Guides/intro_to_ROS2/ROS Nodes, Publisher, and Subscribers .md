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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USCNEUZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD%2B29hCRd4XPVoOtzwlnFM94vaSw0tNpecJYkagZK4YXQIgf6h793v9gjrsutpPH%2BZQY7tk3lp0%2Bbmy%2BlgENxHnlpsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELq1U6F7PDl2Y%2FZ4yrcA%2FsY9VF2TxFBQOcPtbwWmHXLxvVoj%2BmYi%2B2nAqPdqNFGgABnNjpC48fkex4r%2FH76HrDXaSpV44AT0VsUjE1RGSkDHJf8YLQi1tQ%2FQ3y8quhxyQGCWugkn45hXeCUWCgsyggVX6QIxK6sOR%2F392maqcuz7Zm6aGXB30w02wg46BvE0%2FQnpE7U%2FWOqJk77yqknQVK%2BMzqf3BZB%2BupOSnCu9vrIDh76e5SMG2HDanLGHaSNlmQ9vB87ABqiWrAZMlQmEpKPhbEH46o7g3fFylnfViWZxJTE0pHY2Ehc34alMt4jZ0L4okeLMNd9GgtavLaDLjJCH2Dh%2FGIXlv9md%2B4L5ll0CuKwQ8yuLY7T4CJRRkBfRhxCNxkJDtulBtp4OsTv80F1%2BLeyBHtPzCLLuFPS5V%2BE7QhfkYGRZbvB%2F1HI2EyeYPXBqvA2mRljJqP1Sz33cZTcaUqn3ecrRDzfdKHfXrLKYGxbTwJebf%2B7Tr7znlmdMgqBdzY2yJ1dyqWtvC8j7YR%2Fg8K00m%2FgDM6eWhYT92cur%2BS%2FA%2FoKmhbHWcbRZRqMlnaAdehEY%2FwbiTNSEEA%2FnOFOtC8SNWfV27t9YLfkTY5Nv4kvL6zU3u8Q9MHmKUr%2BCRVTMMqxQCrmz7mtMOq62cQGOqUBr9QEDoLZqRiqcnhkO%2B6DDJBhqqDy3Tlc0k%2BhYD4nr85ZcvmGOvNa5OdW4SILfkDU6l%2FBsAHina8xmAJXV0QXwNK4Zqj%2FzOltC9sBSx5xKkw%2F%2FkQwsmuzrwdrcLKelru7EA3gWOEVwLN42oLOEqPmGzov5r%2BEmS2AjXEL%2BVdQvKIZo5R8J3BqhZmBwO9gknQhrQ4eNmj7K3HvoTMRvaZMDMTQL%2BIE&X-Amz-Signature=c3231830c28e5398843bc63ad79f249780bfa8cfe581a6d2c329143e9f6447a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USCNEUZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD%2B29hCRd4XPVoOtzwlnFM94vaSw0tNpecJYkagZK4YXQIgf6h793v9gjrsutpPH%2BZQY7tk3lp0%2Bbmy%2BlgENxHnlpsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELq1U6F7PDl2Y%2FZ4yrcA%2FsY9VF2TxFBQOcPtbwWmHXLxvVoj%2BmYi%2B2nAqPdqNFGgABnNjpC48fkex4r%2FH76HrDXaSpV44AT0VsUjE1RGSkDHJf8YLQi1tQ%2FQ3y8quhxyQGCWugkn45hXeCUWCgsyggVX6QIxK6sOR%2F392maqcuz7Zm6aGXB30w02wg46BvE0%2FQnpE7U%2FWOqJk77yqknQVK%2BMzqf3BZB%2BupOSnCu9vrIDh76e5SMG2HDanLGHaSNlmQ9vB87ABqiWrAZMlQmEpKPhbEH46o7g3fFylnfViWZxJTE0pHY2Ehc34alMt4jZ0L4okeLMNd9GgtavLaDLjJCH2Dh%2FGIXlv9md%2B4L5ll0CuKwQ8yuLY7T4CJRRkBfRhxCNxkJDtulBtp4OsTv80F1%2BLeyBHtPzCLLuFPS5V%2BE7QhfkYGRZbvB%2F1HI2EyeYPXBqvA2mRljJqP1Sz33cZTcaUqn3ecrRDzfdKHfXrLKYGxbTwJebf%2B7Tr7znlmdMgqBdzY2yJ1dyqWtvC8j7YR%2Fg8K00m%2FgDM6eWhYT92cur%2BS%2FA%2FoKmhbHWcbRZRqMlnaAdehEY%2FwbiTNSEEA%2FnOFOtC8SNWfV27t9YLfkTY5Nv4kvL6zU3u8Q9MHmKUr%2BCRVTMMqxQCrmz7mtMOq62cQGOqUBr9QEDoLZqRiqcnhkO%2B6DDJBhqqDy3Tlc0k%2BhYD4nr85ZcvmGOvNa5OdW4SILfkDU6l%2FBsAHina8xmAJXV0QXwNK4Zqj%2FzOltC9sBSx5xKkw%2F%2FkQwsmuzrwdrcLKelru7EA3gWOEVwLN42oLOEqPmGzov5r%2BEmS2AjXEL%2BVdQvKIZo5R8J3BqhZmBwO9gknQhrQ4eNmj7K3HvoTMRvaZMDMTQL%2BIE&X-Amz-Signature=b9cd441772dbe4f3a4c91ad813a5872e222f51b6677855ad91c54c3d961be52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USCNEUZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD%2B29hCRd4XPVoOtzwlnFM94vaSw0tNpecJYkagZK4YXQIgf6h793v9gjrsutpPH%2BZQY7tk3lp0%2Bbmy%2BlgENxHnlpsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELq1U6F7PDl2Y%2FZ4yrcA%2FsY9VF2TxFBQOcPtbwWmHXLxvVoj%2BmYi%2B2nAqPdqNFGgABnNjpC48fkex4r%2FH76HrDXaSpV44AT0VsUjE1RGSkDHJf8YLQi1tQ%2FQ3y8quhxyQGCWugkn45hXeCUWCgsyggVX6QIxK6sOR%2F392maqcuz7Zm6aGXB30w02wg46BvE0%2FQnpE7U%2FWOqJk77yqknQVK%2BMzqf3BZB%2BupOSnCu9vrIDh76e5SMG2HDanLGHaSNlmQ9vB87ABqiWrAZMlQmEpKPhbEH46o7g3fFylnfViWZxJTE0pHY2Ehc34alMt4jZ0L4okeLMNd9GgtavLaDLjJCH2Dh%2FGIXlv9md%2B4L5ll0CuKwQ8yuLY7T4CJRRkBfRhxCNxkJDtulBtp4OsTv80F1%2BLeyBHtPzCLLuFPS5V%2BE7QhfkYGRZbvB%2F1HI2EyeYPXBqvA2mRljJqP1Sz33cZTcaUqn3ecrRDzfdKHfXrLKYGxbTwJebf%2B7Tr7znlmdMgqBdzY2yJ1dyqWtvC8j7YR%2Fg8K00m%2FgDM6eWhYT92cur%2BS%2FA%2FoKmhbHWcbRZRqMlnaAdehEY%2FwbiTNSEEA%2FnOFOtC8SNWfV27t9YLfkTY5Nv4kvL6zU3u8Q9MHmKUr%2BCRVTMMqxQCrmz7mtMOq62cQGOqUBr9QEDoLZqRiqcnhkO%2B6DDJBhqqDy3Tlc0k%2BhYD4nr85ZcvmGOvNa5OdW4SILfkDU6l%2FBsAHina8xmAJXV0QXwNK4Zqj%2FzOltC9sBSx5xKkw%2F%2FkQwsmuzrwdrcLKelru7EA3gWOEVwLN42oLOEqPmGzov5r%2BEmS2AjXEL%2BVdQvKIZo5R8J3BqhZmBwO9gknQhrQ4eNmj7K3HvoTMRvaZMDMTQL%2BIE&X-Amz-Signature=f1060571bb3211c2de927bb258611649bdf0c3802dc5f044b479f30ebd16da48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USCNEUZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD%2B29hCRd4XPVoOtzwlnFM94vaSw0tNpecJYkagZK4YXQIgf6h793v9gjrsutpPH%2BZQY7tk3lp0%2Bbmy%2BlgENxHnlpsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELq1U6F7PDl2Y%2FZ4yrcA%2FsY9VF2TxFBQOcPtbwWmHXLxvVoj%2BmYi%2B2nAqPdqNFGgABnNjpC48fkex4r%2FH76HrDXaSpV44AT0VsUjE1RGSkDHJf8YLQi1tQ%2FQ3y8quhxyQGCWugkn45hXeCUWCgsyggVX6QIxK6sOR%2F392maqcuz7Zm6aGXB30w02wg46BvE0%2FQnpE7U%2FWOqJk77yqknQVK%2BMzqf3BZB%2BupOSnCu9vrIDh76e5SMG2HDanLGHaSNlmQ9vB87ABqiWrAZMlQmEpKPhbEH46o7g3fFylnfViWZxJTE0pHY2Ehc34alMt4jZ0L4okeLMNd9GgtavLaDLjJCH2Dh%2FGIXlv9md%2B4L5ll0CuKwQ8yuLY7T4CJRRkBfRhxCNxkJDtulBtp4OsTv80F1%2BLeyBHtPzCLLuFPS5V%2BE7QhfkYGRZbvB%2F1HI2EyeYPXBqvA2mRljJqP1Sz33cZTcaUqn3ecrRDzfdKHfXrLKYGxbTwJebf%2B7Tr7znlmdMgqBdzY2yJ1dyqWtvC8j7YR%2Fg8K00m%2FgDM6eWhYT92cur%2BS%2FA%2FoKmhbHWcbRZRqMlnaAdehEY%2FwbiTNSEEA%2FnOFOtC8SNWfV27t9YLfkTY5Nv4kvL6zU3u8Q9MHmKUr%2BCRVTMMqxQCrmz7mtMOq62cQGOqUBr9QEDoLZqRiqcnhkO%2B6DDJBhqqDy3Tlc0k%2BhYD4nr85ZcvmGOvNa5OdW4SILfkDU6l%2FBsAHina8xmAJXV0QXwNK4Zqj%2FzOltC9sBSx5xKkw%2F%2FkQwsmuzrwdrcLKelru7EA3gWOEVwLN42oLOEqPmGzov5r%2BEmS2AjXEL%2BVdQvKIZo5R8J3BqhZmBwO9gknQhrQ4eNmj7K3HvoTMRvaZMDMTQL%2BIE&X-Amz-Signature=08b9aafa77d72a81b30907d317e300eae8afdbdfcb00e76078051fbed4e3bf1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USCNEUZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD%2B29hCRd4XPVoOtzwlnFM94vaSw0tNpecJYkagZK4YXQIgf6h793v9gjrsutpPH%2BZQY7tk3lp0%2Bbmy%2BlgENxHnlpsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELq1U6F7PDl2Y%2FZ4yrcA%2FsY9VF2TxFBQOcPtbwWmHXLxvVoj%2BmYi%2B2nAqPdqNFGgABnNjpC48fkex4r%2FH76HrDXaSpV44AT0VsUjE1RGSkDHJf8YLQi1tQ%2FQ3y8quhxyQGCWugkn45hXeCUWCgsyggVX6QIxK6sOR%2F392maqcuz7Zm6aGXB30w02wg46BvE0%2FQnpE7U%2FWOqJk77yqknQVK%2BMzqf3BZB%2BupOSnCu9vrIDh76e5SMG2HDanLGHaSNlmQ9vB87ABqiWrAZMlQmEpKPhbEH46o7g3fFylnfViWZxJTE0pHY2Ehc34alMt4jZ0L4okeLMNd9GgtavLaDLjJCH2Dh%2FGIXlv9md%2B4L5ll0CuKwQ8yuLY7T4CJRRkBfRhxCNxkJDtulBtp4OsTv80F1%2BLeyBHtPzCLLuFPS5V%2BE7QhfkYGRZbvB%2F1HI2EyeYPXBqvA2mRljJqP1Sz33cZTcaUqn3ecrRDzfdKHfXrLKYGxbTwJebf%2B7Tr7znlmdMgqBdzY2yJ1dyqWtvC8j7YR%2Fg8K00m%2FgDM6eWhYT92cur%2BS%2FA%2FoKmhbHWcbRZRqMlnaAdehEY%2FwbiTNSEEA%2FnOFOtC8SNWfV27t9YLfkTY5Nv4kvL6zU3u8Q9MHmKUr%2BCRVTMMqxQCrmz7mtMOq62cQGOqUBr9QEDoLZqRiqcnhkO%2B6DDJBhqqDy3Tlc0k%2BhYD4nr85ZcvmGOvNa5OdW4SILfkDU6l%2FBsAHina8xmAJXV0QXwNK4Zqj%2FzOltC9sBSx5xKkw%2F%2FkQwsmuzrwdrcLKelru7EA3gWOEVwLN42oLOEqPmGzov5r%2BEmS2AjXEL%2BVdQvKIZo5R8J3BqhZmBwO9gknQhrQ4eNmj7K3HvoTMRvaZMDMTQL%2BIE&X-Amz-Signature=e2e5db7d34fe29d9654442d61c73f34fe0459f5bb5e2823d5fe88218a13035ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USCNEUZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD%2B29hCRd4XPVoOtzwlnFM94vaSw0tNpecJYkagZK4YXQIgf6h793v9gjrsutpPH%2BZQY7tk3lp0%2Bbmy%2BlgENxHnlpsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELq1U6F7PDl2Y%2FZ4yrcA%2FsY9VF2TxFBQOcPtbwWmHXLxvVoj%2BmYi%2B2nAqPdqNFGgABnNjpC48fkex4r%2FH76HrDXaSpV44AT0VsUjE1RGSkDHJf8YLQi1tQ%2FQ3y8quhxyQGCWugkn45hXeCUWCgsyggVX6QIxK6sOR%2F392maqcuz7Zm6aGXB30w02wg46BvE0%2FQnpE7U%2FWOqJk77yqknQVK%2BMzqf3BZB%2BupOSnCu9vrIDh76e5SMG2HDanLGHaSNlmQ9vB87ABqiWrAZMlQmEpKPhbEH46o7g3fFylnfViWZxJTE0pHY2Ehc34alMt4jZ0L4okeLMNd9GgtavLaDLjJCH2Dh%2FGIXlv9md%2B4L5ll0CuKwQ8yuLY7T4CJRRkBfRhxCNxkJDtulBtp4OsTv80F1%2BLeyBHtPzCLLuFPS5V%2BE7QhfkYGRZbvB%2F1HI2EyeYPXBqvA2mRljJqP1Sz33cZTcaUqn3ecrRDzfdKHfXrLKYGxbTwJebf%2B7Tr7znlmdMgqBdzY2yJ1dyqWtvC8j7YR%2Fg8K00m%2FgDM6eWhYT92cur%2BS%2FA%2FoKmhbHWcbRZRqMlnaAdehEY%2FwbiTNSEEA%2FnOFOtC8SNWfV27t9YLfkTY5Nv4kvL6zU3u8Q9MHmKUr%2BCRVTMMqxQCrmz7mtMOq62cQGOqUBr9QEDoLZqRiqcnhkO%2B6DDJBhqqDy3Tlc0k%2BhYD4nr85ZcvmGOvNa5OdW4SILfkDU6l%2FBsAHina8xmAJXV0QXwNK4Zqj%2FzOltC9sBSx5xKkw%2F%2FkQwsmuzrwdrcLKelru7EA3gWOEVwLN42oLOEqPmGzov5r%2BEmS2AjXEL%2BVdQvKIZo5R8J3BqhZmBwO9gknQhrQ4eNmj7K3HvoTMRvaZMDMTQL%2BIE&X-Amz-Signature=461f0ed3d6011a4da39c5e457abe342cac303adcd3244156a724c81f66b51524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USCNEUZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD%2B29hCRd4XPVoOtzwlnFM94vaSw0tNpecJYkagZK4YXQIgf6h793v9gjrsutpPH%2BZQY7tk3lp0%2Bbmy%2BlgENxHnlpsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELq1U6F7PDl2Y%2FZ4yrcA%2FsY9VF2TxFBQOcPtbwWmHXLxvVoj%2BmYi%2B2nAqPdqNFGgABnNjpC48fkex4r%2FH76HrDXaSpV44AT0VsUjE1RGSkDHJf8YLQi1tQ%2FQ3y8quhxyQGCWugkn45hXeCUWCgsyggVX6QIxK6sOR%2F392maqcuz7Zm6aGXB30w02wg46BvE0%2FQnpE7U%2FWOqJk77yqknQVK%2BMzqf3BZB%2BupOSnCu9vrIDh76e5SMG2HDanLGHaSNlmQ9vB87ABqiWrAZMlQmEpKPhbEH46o7g3fFylnfViWZxJTE0pHY2Ehc34alMt4jZ0L4okeLMNd9GgtavLaDLjJCH2Dh%2FGIXlv9md%2B4L5ll0CuKwQ8yuLY7T4CJRRkBfRhxCNxkJDtulBtp4OsTv80F1%2BLeyBHtPzCLLuFPS5V%2BE7QhfkYGRZbvB%2F1HI2EyeYPXBqvA2mRljJqP1Sz33cZTcaUqn3ecrRDzfdKHfXrLKYGxbTwJebf%2B7Tr7znlmdMgqBdzY2yJ1dyqWtvC8j7YR%2Fg8K00m%2FgDM6eWhYT92cur%2BS%2FA%2FoKmhbHWcbRZRqMlnaAdehEY%2FwbiTNSEEA%2FnOFOtC8SNWfV27t9YLfkTY5Nv4kvL6zU3u8Q9MHmKUr%2BCRVTMMqxQCrmz7mtMOq62cQGOqUBr9QEDoLZqRiqcnhkO%2B6DDJBhqqDy3Tlc0k%2BhYD4nr85ZcvmGOvNa5OdW4SILfkDU6l%2FBsAHina8xmAJXV0QXwNK4Zqj%2FzOltC9sBSx5xKkw%2F%2FkQwsmuzrwdrcLKelru7EA3gWOEVwLN42oLOEqPmGzov5r%2BEmS2AjXEL%2BVdQvKIZo5R8J3BqhZmBwO9gknQhrQ4eNmj7K3HvoTMRvaZMDMTQL%2BIE&X-Amz-Signature=94bf746cdecb8279669b00b04f616b94e837d9c7571ae3eac5f56d8e409393b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665USCNEUZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQD%2B29hCRd4XPVoOtzwlnFM94vaSw0tNpecJYkagZK4YXQIgf6h793v9gjrsutpPH%2BZQY7tk3lp0%2Bbmy%2BlgENxHnlpsqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELq1U6F7PDl2Y%2FZ4yrcA%2FsY9VF2TxFBQOcPtbwWmHXLxvVoj%2BmYi%2B2nAqPdqNFGgABnNjpC48fkex4r%2FH76HrDXaSpV44AT0VsUjE1RGSkDHJf8YLQi1tQ%2FQ3y8quhxyQGCWugkn45hXeCUWCgsyggVX6QIxK6sOR%2F392maqcuz7Zm6aGXB30w02wg46BvE0%2FQnpE7U%2FWOqJk77yqknQVK%2BMzqf3BZB%2BupOSnCu9vrIDh76e5SMG2HDanLGHaSNlmQ9vB87ABqiWrAZMlQmEpKPhbEH46o7g3fFylnfViWZxJTE0pHY2Ehc34alMt4jZ0L4okeLMNd9GgtavLaDLjJCH2Dh%2FGIXlv9md%2B4L5ll0CuKwQ8yuLY7T4CJRRkBfRhxCNxkJDtulBtp4OsTv80F1%2BLeyBHtPzCLLuFPS5V%2BE7QhfkYGRZbvB%2F1HI2EyeYPXBqvA2mRljJqP1Sz33cZTcaUqn3ecrRDzfdKHfXrLKYGxbTwJebf%2B7Tr7znlmdMgqBdzY2yJ1dyqWtvC8j7YR%2Fg8K00m%2FgDM6eWhYT92cur%2BS%2FA%2FoKmhbHWcbRZRqMlnaAdehEY%2FwbiTNSEEA%2FnOFOtC8SNWfV27t9YLfkTY5Nv4kvL6zU3u8Q9MHmKUr%2BCRVTMMqxQCrmz7mtMOq62cQGOqUBr9QEDoLZqRiqcnhkO%2B6DDJBhqqDy3Tlc0k%2BhYD4nr85ZcvmGOvNa5OdW4SILfkDU6l%2FBsAHina8xmAJXV0QXwNK4Zqj%2FzOltC9sBSx5xKkw%2F%2FkQwsmuzrwdrcLKelru7EA3gWOEVwLN42oLOEqPmGzov5r%2BEmS2AjXEL%2BVdQvKIZo5R8J3BqhZmBwO9gknQhrQ4eNmj7K3HvoTMRvaZMDMTQL%2BIE&X-Amz-Signature=3ddf475a8b5214be1fbc61746d2ccc9afb0584bd097d84d283fa043db8593767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
