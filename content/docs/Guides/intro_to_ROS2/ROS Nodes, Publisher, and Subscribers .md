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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKYOBXN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW0knMj%2BTJ0RI%2BAOIUzw%2Fr2gJPGWrAcH4lGnxuKEDlhAiEAw9lqmBZUqXQtaM5J3EDoDpZ2xwWLlhOKuFYXDBS994Iq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDLEp3U6%2Fp2%2BZ7uDuByrcA3%2BhwIzudxC1B8PO76QUYRiEmt7TwQ12FcYg5qn8wXQNrE0JBKoTfW%2BhBULE5MGvJi9BJYp0u8Rbs0WC14kgcbLuzdhLDhULhwAWjekNxK%2FLDn8ytLd3l9QeZKvIkENem08GojddC2yAQW3DxODYL6gcFJhhk78AMvyEMiFvem5Cdwz32Opj%2FjjedgIOrZnEyAAyEpq9hmyFpdpzyBYr3tpA9XQA7Hlz%2BfwiPvj5MxPla48I8Jo4fdSk1g4v3eBf2xu8CTdwXZqzKi38sr4VZEUGfkwKR9ecaM6AxQP54r8ytqqVn3Fsz4RAOU%2BnvIm7X6%2BmSuZN6W9EUnMZa5aGiqbRaCLOzMgjwswTQPkyhVZM3sN2C9YdbJprIGaZ8CtYTBRNyDxOR1nnI36qPduLYRjEaZ%2F5XQp92IvWUuqpG%2BdlMd1THTyDKccjKiVToFoRgTmuuXiGaWmIZs%2BM8onaNOu51ESn3U2iZrJ5WyP%2Fn70VY7JLzgiHrBbQKvjt29tkktL5W6%2FvLXz3rFQZym9%2F5xmMhW6GpeqVaImDwXxws1eW3FesfOzfSBtGMUbJ5Iqm5E%2F%2BiqZpp3aRBqvvGgNRrj7%2BlgZz84L5c9iZomYkEfToIdUvTNewMS5NWRpFMOnMrsAGOqUBcZbD5DPGUZsyP5Sc9Ilo%2BoW7IK7%2BbJUJMamQ90AifGpohFl8nTA3xRp6%2FAse0mt0SQH3n8adcyhSlVLcFcbgurLe%2BLckAtU2NzEwNeKbWaEpC8%2BypY%2FYkO%2FzMKpmGjjNNja4xOmNSS8f3COC1vmi4tq3AYXyDrkw5EVtRikyA1sfZpeE8Bz9dDm3zwNdAkWdyndmr5h6E8jaoqJkOAy6kbno%2BJIN&X-Amz-Signature=c37292a9dab0626981f99bf3f09127ecb41d166348fffab5792e004102de817f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKYOBXN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW0knMj%2BTJ0RI%2BAOIUzw%2Fr2gJPGWrAcH4lGnxuKEDlhAiEAw9lqmBZUqXQtaM5J3EDoDpZ2xwWLlhOKuFYXDBS994Iq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDLEp3U6%2Fp2%2BZ7uDuByrcA3%2BhwIzudxC1B8PO76QUYRiEmt7TwQ12FcYg5qn8wXQNrE0JBKoTfW%2BhBULE5MGvJi9BJYp0u8Rbs0WC14kgcbLuzdhLDhULhwAWjekNxK%2FLDn8ytLd3l9QeZKvIkENem08GojddC2yAQW3DxODYL6gcFJhhk78AMvyEMiFvem5Cdwz32Opj%2FjjedgIOrZnEyAAyEpq9hmyFpdpzyBYr3tpA9XQA7Hlz%2BfwiPvj5MxPla48I8Jo4fdSk1g4v3eBf2xu8CTdwXZqzKi38sr4VZEUGfkwKR9ecaM6AxQP54r8ytqqVn3Fsz4RAOU%2BnvIm7X6%2BmSuZN6W9EUnMZa5aGiqbRaCLOzMgjwswTQPkyhVZM3sN2C9YdbJprIGaZ8CtYTBRNyDxOR1nnI36qPduLYRjEaZ%2F5XQp92IvWUuqpG%2BdlMd1THTyDKccjKiVToFoRgTmuuXiGaWmIZs%2BM8onaNOu51ESn3U2iZrJ5WyP%2Fn70VY7JLzgiHrBbQKvjt29tkktL5W6%2FvLXz3rFQZym9%2F5xmMhW6GpeqVaImDwXxws1eW3FesfOzfSBtGMUbJ5Iqm5E%2F%2BiqZpp3aRBqvvGgNRrj7%2BlgZz84L5c9iZomYkEfToIdUvTNewMS5NWRpFMOnMrsAGOqUBcZbD5DPGUZsyP5Sc9Ilo%2BoW7IK7%2BbJUJMamQ90AifGpohFl8nTA3xRp6%2FAse0mt0SQH3n8adcyhSlVLcFcbgurLe%2BLckAtU2NzEwNeKbWaEpC8%2BypY%2FYkO%2FzMKpmGjjNNja4xOmNSS8f3COC1vmi4tq3AYXyDrkw5EVtRikyA1sfZpeE8Bz9dDm3zwNdAkWdyndmr5h6E8jaoqJkOAy6kbno%2BJIN&X-Amz-Signature=0ea12fb00c1301fcba217cefb1a9462a1bd95b18c79c78d53d4a6d5dbcf23be0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKYOBXN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW0knMj%2BTJ0RI%2BAOIUzw%2Fr2gJPGWrAcH4lGnxuKEDlhAiEAw9lqmBZUqXQtaM5J3EDoDpZ2xwWLlhOKuFYXDBS994Iq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDLEp3U6%2Fp2%2BZ7uDuByrcA3%2BhwIzudxC1B8PO76QUYRiEmt7TwQ12FcYg5qn8wXQNrE0JBKoTfW%2BhBULE5MGvJi9BJYp0u8Rbs0WC14kgcbLuzdhLDhULhwAWjekNxK%2FLDn8ytLd3l9QeZKvIkENem08GojddC2yAQW3DxODYL6gcFJhhk78AMvyEMiFvem5Cdwz32Opj%2FjjedgIOrZnEyAAyEpq9hmyFpdpzyBYr3tpA9XQA7Hlz%2BfwiPvj5MxPla48I8Jo4fdSk1g4v3eBf2xu8CTdwXZqzKi38sr4VZEUGfkwKR9ecaM6AxQP54r8ytqqVn3Fsz4RAOU%2BnvIm7X6%2BmSuZN6W9EUnMZa5aGiqbRaCLOzMgjwswTQPkyhVZM3sN2C9YdbJprIGaZ8CtYTBRNyDxOR1nnI36qPduLYRjEaZ%2F5XQp92IvWUuqpG%2BdlMd1THTyDKccjKiVToFoRgTmuuXiGaWmIZs%2BM8onaNOu51ESn3U2iZrJ5WyP%2Fn70VY7JLzgiHrBbQKvjt29tkktL5W6%2FvLXz3rFQZym9%2F5xmMhW6GpeqVaImDwXxws1eW3FesfOzfSBtGMUbJ5Iqm5E%2F%2BiqZpp3aRBqvvGgNRrj7%2BlgZz84L5c9iZomYkEfToIdUvTNewMS5NWRpFMOnMrsAGOqUBcZbD5DPGUZsyP5Sc9Ilo%2BoW7IK7%2BbJUJMamQ90AifGpohFl8nTA3xRp6%2FAse0mt0SQH3n8adcyhSlVLcFcbgurLe%2BLckAtU2NzEwNeKbWaEpC8%2BypY%2FYkO%2FzMKpmGjjNNja4xOmNSS8f3COC1vmi4tq3AYXyDrkw5EVtRikyA1sfZpeE8Bz9dDm3zwNdAkWdyndmr5h6E8jaoqJkOAy6kbno%2BJIN&X-Amz-Signature=8991d8fceaa944b15a1a507e4d2af538a7b1f36ec4d13579cc3ab6a316330764&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKYOBXN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW0knMj%2BTJ0RI%2BAOIUzw%2Fr2gJPGWrAcH4lGnxuKEDlhAiEAw9lqmBZUqXQtaM5J3EDoDpZ2xwWLlhOKuFYXDBS994Iq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDLEp3U6%2Fp2%2BZ7uDuByrcA3%2BhwIzudxC1B8PO76QUYRiEmt7TwQ12FcYg5qn8wXQNrE0JBKoTfW%2BhBULE5MGvJi9BJYp0u8Rbs0WC14kgcbLuzdhLDhULhwAWjekNxK%2FLDn8ytLd3l9QeZKvIkENem08GojddC2yAQW3DxODYL6gcFJhhk78AMvyEMiFvem5Cdwz32Opj%2FjjedgIOrZnEyAAyEpq9hmyFpdpzyBYr3tpA9XQA7Hlz%2BfwiPvj5MxPla48I8Jo4fdSk1g4v3eBf2xu8CTdwXZqzKi38sr4VZEUGfkwKR9ecaM6AxQP54r8ytqqVn3Fsz4RAOU%2BnvIm7X6%2BmSuZN6W9EUnMZa5aGiqbRaCLOzMgjwswTQPkyhVZM3sN2C9YdbJprIGaZ8CtYTBRNyDxOR1nnI36qPduLYRjEaZ%2F5XQp92IvWUuqpG%2BdlMd1THTyDKccjKiVToFoRgTmuuXiGaWmIZs%2BM8onaNOu51ESn3U2iZrJ5WyP%2Fn70VY7JLzgiHrBbQKvjt29tkktL5W6%2FvLXz3rFQZym9%2F5xmMhW6GpeqVaImDwXxws1eW3FesfOzfSBtGMUbJ5Iqm5E%2F%2BiqZpp3aRBqvvGgNRrj7%2BlgZz84L5c9iZomYkEfToIdUvTNewMS5NWRpFMOnMrsAGOqUBcZbD5DPGUZsyP5Sc9Ilo%2BoW7IK7%2BbJUJMamQ90AifGpohFl8nTA3xRp6%2FAse0mt0SQH3n8adcyhSlVLcFcbgurLe%2BLckAtU2NzEwNeKbWaEpC8%2BypY%2FYkO%2FzMKpmGjjNNja4xOmNSS8f3COC1vmi4tq3AYXyDrkw5EVtRikyA1sfZpeE8Bz9dDm3zwNdAkWdyndmr5h6E8jaoqJkOAy6kbno%2BJIN&X-Amz-Signature=38a501f458c3270ebb3ed27b412820364bda212613687bab91d6ff88f85a18ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKYOBXN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW0knMj%2BTJ0RI%2BAOIUzw%2Fr2gJPGWrAcH4lGnxuKEDlhAiEAw9lqmBZUqXQtaM5J3EDoDpZ2xwWLlhOKuFYXDBS994Iq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDLEp3U6%2Fp2%2BZ7uDuByrcA3%2BhwIzudxC1B8PO76QUYRiEmt7TwQ12FcYg5qn8wXQNrE0JBKoTfW%2BhBULE5MGvJi9BJYp0u8Rbs0WC14kgcbLuzdhLDhULhwAWjekNxK%2FLDn8ytLd3l9QeZKvIkENem08GojddC2yAQW3DxODYL6gcFJhhk78AMvyEMiFvem5Cdwz32Opj%2FjjedgIOrZnEyAAyEpq9hmyFpdpzyBYr3tpA9XQA7Hlz%2BfwiPvj5MxPla48I8Jo4fdSk1g4v3eBf2xu8CTdwXZqzKi38sr4VZEUGfkwKR9ecaM6AxQP54r8ytqqVn3Fsz4RAOU%2BnvIm7X6%2BmSuZN6W9EUnMZa5aGiqbRaCLOzMgjwswTQPkyhVZM3sN2C9YdbJprIGaZ8CtYTBRNyDxOR1nnI36qPduLYRjEaZ%2F5XQp92IvWUuqpG%2BdlMd1THTyDKccjKiVToFoRgTmuuXiGaWmIZs%2BM8onaNOu51ESn3U2iZrJ5WyP%2Fn70VY7JLzgiHrBbQKvjt29tkktL5W6%2FvLXz3rFQZym9%2F5xmMhW6GpeqVaImDwXxws1eW3FesfOzfSBtGMUbJ5Iqm5E%2F%2BiqZpp3aRBqvvGgNRrj7%2BlgZz84L5c9iZomYkEfToIdUvTNewMS5NWRpFMOnMrsAGOqUBcZbD5DPGUZsyP5Sc9Ilo%2BoW7IK7%2BbJUJMamQ90AifGpohFl8nTA3xRp6%2FAse0mt0SQH3n8adcyhSlVLcFcbgurLe%2BLckAtU2NzEwNeKbWaEpC8%2BypY%2FYkO%2FzMKpmGjjNNja4xOmNSS8f3COC1vmi4tq3AYXyDrkw5EVtRikyA1sfZpeE8Bz9dDm3zwNdAkWdyndmr5h6E8jaoqJkOAy6kbno%2BJIN&X-Amz-Signature=d9bc00807b0676805851a68318cb9897d84104509034e5a394f309b5cfea63b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKYOBXN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW0knMj%2BTJ0RI%2BAOIUzw%2Fr2gJPGWrAcH4lGnxuKEDlhAiEAw9lqmBZUqXQtaM5J3EDoDpZ2xwWLlhOKuFYXDBS994Iq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDLEp3U6%2Fp2%2BZ7uDuByrcA3%2BhwIzudxC1B8PO76QUYRiEmt7TwQ12FcYg5qn8wXQNrE0JBKoTfW%2BhBULE5MGvJi9BJYp0u8Rbs0WC14kgcbLuzdhLDhULhwAWjekNxK%2FLDn8ytLd3l9QeZKvIkENem08GojddC2yAQW3DxODYL6gcFJhhk78AMvyEMiFvem5Cdwz32Opj%2FjjedgIOrZnEyAAyEpq9hmyFpdpzyBYr3tpA9XQA7Hlz%2BfwiPvj5MxPla48I8Jo4fdSk1g4v3eBf2xu8CTdwXZqzKi38sr4VZEUGfkwKR9ecaM6AxQP54r8ytqqVn3Fsz4RAOU%2BnvIm7X6%2BmSuZN6W9EUnMZa5aGiqbRaCLOzMgjwswTQPkyhVZM3sN2C9YdbJprIGaZ8CtYTBRNyDxOR1nnI36qPduLYRjEaZ%2F5XQp92IvWUuqpG%2BdlMd1THTyDKccjKiVToFoRgTmuuXiGaWmIZs%2BM8onaNOu51ESn3U2iZrJ5WyP%2Fn70VY7JLzgiHrBbQKvjt29tkktL5W6%2FvLXz3rFQZym9%2F5xmMhW6GpeqVaImDwXxws1eW3FesfOzfSBtGMUbJ5Iqm5E%2F%2BiqZpp3aRBqvvGgNRrj7%2BlgZz84L5c9iZomYkEfToIdUvTNewMS5NWRpFMOnMrsAGOqUBcZbD5DPGUZsyP5Sc9Ilo%2BoW7IK7%2BbJUJMamQ90AifGpohFl8nTA3xRp6%2FAse0mt0SQH3n8adcyhSlVLcFcbgurLe%2BLckAtU2NzEwNeKbWaEpC8%2BypY%2FYkO%2FzMKpmGjjNNja4xOmNSS8f3COC1vmi4tq3AYXyDrkw5EVtRikyA1sfZpeE8Bz9dDm3zwNdAkWdyndmr5h6E8jaoqJkOAy6kbno%2BJIN&X-Amz-Signature=0972b5d195c95e33c9462b54261557a29c9de9e7e176e00573c5ef8386fac8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKYOBXN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW0knMj%2BTJ0RI%2BAOIUzw%2Fr2gJPGWrAcH4lGnxuKEDlhAiEAw9lqmBZUqXQtaM5J3EDoDpZ2xwWLlhOKuFYXDBS994Iq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDLEp3U6%2Fp2%2BZ7uDuByrcA3%2BhwIzudxC1B8PO76QUYRiEmt7TwQ12FcYg5qn8wXQNrE0JBKoTfW%2BhBULE5MGvJi9BJYp0u8Rbs0WC14kgcbLuzdhLDhULhwAWjekNxK%2FLDn8ytLd3l9QeZKvIkENem08GojddC2yAQW3DxODYL6gcFJhhk78AMvyEMiFvem5Cdwz32Opj%2FjjedgIOrZnEyAAyEpq9hmyFpdpzyBYr3tpA9XQA7Hlz%2BfwiPvj5MxPla48I8Jo4fdSk1g4v3eBf2xu8CTdwXZqzKi38sr4VZEUGfkwKR9ecaM6AxQP54r8ytqqVn3Fsz4RAOU%2BnvIm7X6%2BmSuZN6W9EUnMZa5aGiqbRaCLOzMgjwswTQPkyhVZM3sN2C9YdbJprIGaZ8CtYTBRNyDxOR1nnI36qPduLYRjEaZ%2F5XQp92IvWUuqpG%2BdlMd1THTyDKccjKiVToFoRgTmuuXiGaWmIZs%2BM8onaNOu51ESn3U2iZrJ5WyP%2Fn70VY7JLzgiHrBbQKvjt29tkktL5W6%2FvLXz3rFQZym9%2F5xmMhW6GpeqVaImDwXxws1eW3FesfOzfSBtGMUbJ5Iqm5E%2F%2BiqZpp3aRBqvvGgNRrj7%2BlgZz84L5c9iZomYkEfToIdUvTNewMS5NWRpFMOnMrsAGOqUBcZbD5DPGUZsyP5Sc9Ilo%2BoW7IK7%2BbJUJMamQ90AifGpohFl8nTA3xRp6%2FAse0mt0SQH3n8adcyhSlVLcFcbgurLe%2BLckAtU2NzEwNeKbWaEpC8%2BypY%2FYkO%2FzMKpmGjjNNja4xOmNSS8f3COC1vmi4tq3AYXyDrkw5EVtRikyA1sfZpeE8Bz9dDm3zwNdAkWdyndmr5h6E8jaoqJkOAy6kbno%2BJIN&X-Amz-Signature=7db8ba334fcb7d06416ac82dce92190663bc06f5b8cf52b33946316eca394aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TKYOBXN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW0knMj%2BTJ0RI%2BAOIUzw%2Fr2gJPGWrAcH4lGnxuKEDlhAiEAw9lqmBZUqXQtaM5J3EDoDpZ2xwWLlhOKuFYXDBS994Iq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDLEp3U6%2Fp2%2BZ7uDuByrcA3%2BhwIzudxC1B8PO76QUYRiEmt7TwQ12FcYg5qn8wXQNrE0JBKoTfW%2BhBULE5MGvJi9BJYp0u8Rbs0WC14kgcbLuzdhLDhULhwAWjekNxK%2FLDn8ytLd3l9QeZKvIkENem08GojddC2yAQW3DxODYL6gcFJhhk78AMvyEMiFvem5Cdwz32Opj%2FjjedgIOrZnEyAAyEpq9hmyFpdpzyBYr3tpA9XQA7Hlz%2BfwiPvj5MxPla48I8Jo4fdSk1g4v3eBf2xu8CTdwXZqzKi38sr4VZEUGfkwKR9ecaM6AxQP54r8ytqqVn3Fsz4RAOU%2BnvIm7X6%2BmSuZN6W9EUnMZa5aGiqbRaCLOzMgjwswTQPkyhVZM3sN2C9YdbJprIGaZ8CtYTBRNyDxOR1nnI36qPduLYRjEaZ%2F5XQp92IvWUuqpG%2BdlMd1THTyDKccjKiVToFoRgTmuuXiGaWmIZs%2BM8onaNOu51ESn3U2iZrJ5WyP%2Fn70VY7JLzgiHrBbQKvjt29tkktL5W6%2FvLXz3rFQZym9%2F5xmMhW6GpeqVaImDwXxws1eW3FesfOzfSBtGMUbJ5Iqm5E%2F%2BiqZpp3aRBqvvGgNRrj7%2BlgZz84L5c9iZomYkEfToIdUvTNewMS5NWRpFMOnMrsAGOqUBcZbD5DPGUZsyP5Sc9Ilo%2BoW7IK7%2BbJUJMamQ90AifGpohFl8nTA3xRp6%2FAse0mt0SQH3n8adcyhSlVLcFcbgurLe%2BLckAtU2NzEwNeKbWaEpC8%2BypY%2FYkO%2FzMKpmGjjNNja4xOmNSS8f3COC1vmi4tq3AYXyDrkw5EVtRikyA1sfZpeE8Bz9dDm3zwNdAkWdyndmr5h6E8jaoqJkOAy6kbno%2BJIN&X-Amz-Signature=2244b98fd8cebde6f182bc9cbb2f7b90769365ae008bd3e339d4dcdb5395f7bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
