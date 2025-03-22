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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664555QBQA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmylN04UFUVLWMtil%2F8EqK1kiEBNkt0P%2Bhs3groVhWLAIhANpIfnsJWSwE4dsos%2FCh7dbFUAr2aI77F%2BFiK0ecCwYFKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAtdKOOYSAtMMxUVUq3AOoVDa2TLogSnXKDX70us7aGpN3bG18g8sp54HjbNskeJXfiYuHSkLRaOoh%2Fwovp5sHIIraRGQuXSmd%2Ffl5yfm%2FmJP8naHEt3wQCAhf8YXGYkPzMGAQFhS22RpZMVu26gdcb0R98VdCCkKvFVhJB1kTdzy9wg1fbDe28mQ8%2BNBtlXcphKBnngHGdzLsKovPhxAb6JvKGE1z69jS2iigz0aNX1a%2Bws9xsTQqMsHoqbG5xqQ2rcIffxjMBhZYVvKsxEUxZc9yQe%2Fn52Muq3fYXibtLo0LPNl7wIPwl3ZuCIi0bpcCUZmiHxdOhQXPLIKJIzY9Tgn5bhSPi5nD%2FtW4IWH2UHOvI4wu3Qf13CbUPv3Ivn4VcI3VR9TSz2Kb20C8wSLEgR3gTdxDEhW39s51eHmxJPItia5x0oNBqWjxoKG%2FRNJ%2FKl29QQCPGmbpAVSp1xrRostGtXpSavRH7%2BST9DvF5myFSOdx1iS5zJMNzNVpxipU32LlWDeEks7WIzrL07uj1n%2B2EYcFheeRbJ5lu6lEgNA7FElwqt%2BGkflvcuAvgvqiBqCxZhe%2B0SzkWV1V3gL3UEW6YUoctDiRb9C%2BngQwpBrZFJytfpakSk45MbNlXM7xC6FkdqhQRyKlhzCm9%2Fe%2BBjqkASr5WlQvvxCnoN0MCEQhtL0HECNnMxhMWij1fkdd704yvnWh4v9GLsmfRpZDyC9noqujhElbvIyq4BHK4ySS3rAwNORYk8y9iSymBvHG6Xs5FjeqPf9Nif0HRqSp7v9BlqBEmKxj4b8Ha05%2BLZtAMsWGyX1ijYFEXP%2Be5hqKbRsQO9Ty66jyFTlm03g2LJJ2%2BZo5W%2BWObJs3qLJ%2FNtQtsQrgEMbJ&X-Amz-Signature=b9a0236a9f472fe74109f7d5adb51ccc857b046bbb4a6847aa18d00346435d42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664555QBQA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmylN04UFUVLWMtil%2F8EqK1kiEBNkt0P%2Bhs3groVhWLAIhANpIfnsJWSwE4dsos%2FCh7dbFUAr2aI77F%2BFiK0ecCwYFKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAtdKOOYSAtMMxUVUq3AOoVDa2TLogSnXKDX70us7aGpN3bG18g8sp54HjbNskeJXfiYuHSkLRaOoh%2Fwovp5sHIIraRGQuXSmd%2Ffl5yfm%2FmJP8naHEt3wQCAhf8YXGYkPzMGAQFhS22RpZMVu26gdcb0R98VdCCkKvFVhJB1kTdzy9wg1fbDe28mQ8%2BNBtlXcphKBnngHGdzLsKovPhxAb6JvKGE1z69jS2iigz0aNX1a%2Bws9xsTQqMsHoqbG5xqQ2rcIffxjMBhZYVvKsxEUxZc9yQe%2Fn52Muq3fYXibtLo0LPNl7wIPwl3ZuCIi0bpcCUZmiHxdOhQXPLIKJIzY9Tgn5bhSPi5nD%2FtW4IWH2UHOvI4wu3Qf13CbUPv3Ivn4VcI3VR9TSz2Kb20C8wSLEgR3gTdxDEhW39s51eHmxJPItia5x0oNBqWjxoKG%2FRNJ%2FKl29QQCPGmbpAVSp1xrRostGtXpSavRH7%2BST9DvF5myFSOdx1iS5zJMNzNVpxipU32LlWDeEks7WIzrL07uj1n%2B2EYcFheeRbJ5lu6lEgNA7FElwqt%2BGkflvcuAvgvqiBqCxZhe%2B0SzkWV1V3gL3UEW6YUoctDiRb9C%2BngQwpBrZFJytfpakSk45MbNlXM7xC6FkdqhQRyKlhzCm9%2Fe%2BBjqkASr5WlQvvxCnoN0MCEQhtL0HECNnMxhMWij1fkdd704yvnWh4v9GLsmfRpZDyC9noqujhElbvIyq4BHK4ySS3rAwNORYk8y9iSymBvHG6Xs5FjeqPf9Nif0HRqSp7v9BlqBEmKxj4b8Ha05%2BLZtAMsWGyX1ijYFEXP%2Be5hqKbRsQO9Ty66jyFTlm03g2LJJ2%2BZo5W%2BWObJs3qLJ%2FNtQtsQrgEMbJ&X-Amz-Signature=9e482d052936931ae6fe2769831badbf21595ffbf931746c345c56fd4b0767ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664555QBQA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmylN04UFUVLWMtil%2F8EqK1kiEBNkt0P%2Bhs3groVhWLAIhANpIfnsJWSwE4dsos%2FCh7dbFUAr2aI77F%2BFiK0ecCwYFKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAtdKOOYSAtMMxUVUq3AOoVDa2TLogSnXKDX70us7aGpN3bG18g8sp54HjbNskeJXfiYuHSkLRaOoh%2Fwovp5sHIIraRGQuXSmd%2Ffl5yfm%2FmJP8naHEt3wQCAhf8YXGYkPzMGAQFhS22RpZMVu26gdcb0R98VdCCkKvFVhJB1kTdzy9wg1fbDe28mQ8%2BNBtlXcphKBnngHGdzLsKovPhxAb6JvKGE1z69jS2iigz0aNX1a%2Bws9xsTQqMsHoqbG5xqQ2rcIffxjMBhZYVvKsxEUxZc9yQe%2Fn52Muq3fYXibtLo0LPNl7wIPwl3ZuCIi0bpcCUZmiHxdOhQXPLIKJIzY9Tgn5bhSPi5nD%2FtW4IWH2UHOvI4wu3Qf13CbUPv3Ivn4VcI3VR9TSz2Kb20C8wSLEgR3gTdxDEhW39s51eHmxJPItia5x0oNBqWjxoKG%2FRNJ%2FKl29QQCPGmbpAVSp1xrRostGtXpSavRH7%2BST9DvF5myFSOdx1iS5zJMNzNVpxipU32LlWDeEks7WIzrL07uj1n%2B2EYcFheeRbJ5lu6lEgNA7FElwqt%2BGkflvcuAvgvqiBqCxZhe%2B0SzkWV1V3gL3UEW6YUoctDiRb9C%2BngQwpBrZFJytfpakSk45MbNlXM7xC6FkdqhQRyKlhzCm9%2Fe%2BBjqkASr5WlQvvxCnoN0MCEQhtL0HECNnMxhMWij1fkdd704yvnWh4v9GLsmfRpZDyC9noqujhElbvIyq4BHK4ySS3rAwNORYk8y9iSymBvHG6Xs5FjeqPf9Nif0HRqSp7v9BlqBEmKxj4b8Ha05%2BLZtAMsWGyX1ijYFEXP%2Be5hqKbRsQO9Ty66jyFTlm03g2LJJ2%2BZo5W%2BWObJs3qLJ%2FNtQtsQrgEMbJ&X-Amz-Signature=16b47891074250c9b5ab0b584c31d56e7855c23aad45d6abada36c11d01858cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664555QBQA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmylN04UFUVLWMtil%2F8EqK1kiEBNkt0P%2Bhs3groVhWLAIhANpIfnsJWSwE4dsos%2FCh7dbFUAr2aI77F%2BFiK0ecCwYFKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAtdKOOYSAtMMxUVUq3AOoVDa2TLogSnXKDX70us7aGpN3bG18g8sp54HjbNskeJXfiYuHSkLRaOoh%2Fwovp5sHIIraRGQuXSmd%2Ffl5yfm%2FmJP8naHEt3wQCAhf8YXGYkPzMGAQFhS22RpZMVu26gdcb0R98VdCCkKvFVhJB1kTdzy9wg1fbDe28mQ8%2BNBtlXcphKBnngHGdzLsKovPhxAb6JvKGE1z69jS2iigz0aNX1a%2Bws9xsTQqMsHoqbG5xqQ2rcIffxjMBhZYVvKsxEUxZc9yQe%2Fn52Muq3fYXibtLo0LPNl7wIPwl3ZuCIi0bpcCUZmiHxdOhQXPLIKJIzY9Tgn5bhSPi5nD%2FtW4IWH2UHOvI4wu3Qf13CbUPv3Ivn4VcI3VR9TSz2Kb20C8wSLEgR3gTdxDEhW39s51eHmxJPItia5x0oNBqWjxoKG%2FRNJ%2FKl29QQCPGmbpAVSp1xrRostGtXpSavRH7%2BST9DvF5myFSOdx1iS5zJMNzNVpxipU32LlWDeEks7WIzrL07uj1n%2B2EYcFheeRbJ5lu6lEgNA7FElwqt%2BGkflvcuAvgvqiBqCxZhe%2B0SzkWV1V3gL3UEW6YUoctDiRb9C%2BngQwpBrZFJytfpakSk45MbNlXM7xC6FkdqhQRyKlhzCm9%2Fe%2BBjqkASr5WlQvvxCnoN0MCEQhtL0HECNnMxhMWij1fkdd704yvnWh4v9GLsmfRpZDyC9noqujhElbvIyq4BHK4ySS3rAwNORYk8y9iSymBvHG6Xs5FjeqPf9Nif0HRqSp7v9BlqBEmKxj4b8Ha05%2BLZtAMsWGyX1ijYFEXP%2Be5hqKbRsQO9Ty66jyFTlm03g2LJJ2%2BZo5W%2BWObJs3qLJ%2FNtQtsQrgEMbJ&X-Amz-Signature=984af2de5dc3d83e4074c706fef4265004b85fa09a996e65714125631c51f346&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664555QBQA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmylN04UFUVLWMtil%2F8EqK1kiEBNkt0P%2Bhs3groVhWLAIhANpIfnsJWSwE4dsos%2FCh7dbFUAr2aI77F%2BFiK0ecCwYFKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAtdKOOYSAtMMxUVUq3AOoVDa2TLogSnXKDX70us7aGpN3bG18g8sp54HjbNskeJXfiYuHSkLRaOoh%2Fwovp5sHIIraRGQuXSmd%2Ffl5yfm%2FmJP8naHEt3wQCAhf8YXGYkPzMGAQFhS22RpZMVu26gdcb0R98VdCCkKvFVhJB1kTdzy9wg1fbDe28mQ8%2BNBtlXcphKBnngHGdzLsKovPhxAb6JvKGE1z69jS2iigz0aNX1a%2Bws9xsTQqMsHoqbG5xqQ2rcIffxjMBhZYVvKsxEUxZc9yQe%2Fn52Muq3fYXibtLo0LPNl7wIPwl3ZuCIi0bpcCUZmiHxdOhQXPLIKJIzY9Tgn5bhSPi5nD%2FtW4IWH2UHOvI4wu3Qf13CbUPv3Ivn4VcI3VR9TSz2Kb20C8wSLEgR3gTdxDEhW39s51eHmxJPItia5x0oNBqWjxoKG%2FRNJ%2FKl29QQCPGmbpAVSp1xrRostGtXpSavRH7%2BST9DvF5myFSOdx1iS5zJMNzNVpxipU32LlWDeEks7WIzrL07uj1n%2B2EYcFheeRbJ5lu6lEgNA7FElwqt%2BGkflvcuAvgvqiBqCxZhe%2B0SzkWV1V3gL3UEW6YUoctDiRb9C%2BngQwpBrZFJytfpakSk45MbNlXM7xC6FkdqhQRyKlhzCm9%2Fe%2BBjqkASr5WlQvvxCnoN0MCEQhtL0HECNnMxhMWij1fkdd704yvnWh4v9GLsmfRpZDyC9noqujhElbvIyq4BHK4ySS3rAwNORYk8y9iSymBvHG6Xs5FjeqPf9Nif0HRqSp7v9BlqBEmKxj4b8Ha05%2BLZtAMsWGyX1ijYFEXP%2Be5hqKbRsQO9Ty66jyFTlm03g2LJJ2%2BZo5W%2BWObJs3qLJ%2FNtQtsQrgEMbJ&X-Amz-Signature=e1a7330de052ebe0bab1e5a24f03e028c7ea09192652f4d5e965887fa8c1fd04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664555QBQA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmylN04UFUVLWMtil%2F8EqK1kiEBNkt0P%2Bhs3groVhWLAIhANpIfnsJWSwE4dsos%2FCh7dbFUAr2aI77F%2BFiK0ecCwYFKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAtdKOOYSAtMMxUVUq3AOoVDa2TLogSnXKDX70us7aGpN3bG18g8sp54HjbNskeJXfiYuHSkLRaOoh%2Fwovp5sHIIraRGQuXSmd%2Ffl5yfm%2FmJP8naHEt3wQCAhf8YXGYkPzMGAQFhS22RpZMVu26gdcb0R98VdCCkKvFVhJB1kTdzy9wg1fbDe28mQ8%2BNBtlXcphKBnngHGdzLsKovPhxAb6JvKGE1z69jS2iigz0aNX1a%2Bws9xsTQqMsHoqbG5xqQ2rcIffxjMBhZYVvKsxEUxZc9yQe%2Fn52Muq3fYXibtLo0LPNl7wIPwl3ZuCIi0bpcCUZmiHxdOhQXPLIKJIzY9Tgn5bhSPi5nD%2FtW4IWH2UHOvI4wu3Qf13CbUPv3Ivn4VcI3VR9TSz2Kb20C8wSLEgR3gTdxDEhW39s51eHmxJPItia5x0oNBqWjxoKG%2FRNJ%2FKl29QQCPGmbpAVSp1xrRostGtXpSavRH7%2BST9DvF5myFSOdx1iS5zJMNzNVpxipU32LlWDeEks7WIzrL07uj1n%2B2EYcFheeRbJ5lu6lEgNA7FElwqt%2BGkflvcuAvgvqiBqCxZhe%2B0SzkWV1V3gL3UEW6YUoctDiRb9C%2BngQwpBrZFJytfpakSk45MbNlXM7xC6FkdqhQRyKlhzCm9%2Fe%2BBjqkASr5WlQvvxCnoN0MCEQhtL0HECNnMxhMWij1fkdd704yvnWh4v9GLsmfRpZDyC9noqujhElbvIyq4BHK4ySS3rAwNORYk8y9iSymBvHG6Xs5FjeqPf9Nif0HRqSp7v9BlqBEmKxj4b8Ha05%2BLZtAMsWGyX1ijYFEXP%2Be5hqKbRsQO9Ty66jyFTlm03g2LJJ2%2BZo5W%2BWObJs3qLJ%2FNtQtsQrgEMbJ&X-Amz-Signature=3cc1194e0f16857cfa3781891c0721506ec12804ef645810d53e138e8661454d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664555QBQA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmylN04UFUVLWMtil%2F8EqK1kiEBNkt0P%2Bhs3groVhWLAIhANpIfnsJWSwE4dsos%2FCh7dbFUAr2aI77F%2BFiK0ecCwYFKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAtdKOOYSAtMMxUVUq3AOoVDa2TLogSnXKDX70us7aGpN3bG18g8sp54HjbNskeJXfiYuHSkLRaOoh%2Fwovp5sHIIraRGQuXSmd%2Ffl5yfm%2FmJP8naHEt3wQCAhf8YXGYkPzMGAQFhS22RpZMVu26gdcb0R98VdCCkKvFVhJB1kTdzy9wg1fbDe28mQ8%2BNBtlXcphKBnngHGdzLsKovPhxAb6JvKGE1z69jS2iigz0aNX1a%2Bws9xsTQqMsHoqbG5xqQ2rcIffxjMBhZYVvKsxEUxZc9yQe%2Fn52Muq3fYXibtLo0LPNl7wIPwl3ZuCIi0bpcCUZmiHxdOhQXPLIKJIzY9Tgn5bhSPi5nD%2FtW4IWH2UHOvI4wu3Qf13CbUPv3Ivn4VcI3VR9TSz2Kb20C8wSLEgR3gTdxDEhW39s51eHmxJPItia5x0oNBqWjxoKG%2FRNJ%2FKl29QQCPGmbpAVSp1xrRostGtXpSavRH7%2BST9DvF5myFSOdx1iS5zJMNzNVpxipU32LlWDeEks7WIzrL07uj1n%2B2EYcFheeRbJ5lu6lEgNA7FElwqt%2BGkflvcuAvgvqiBqCxZhe%2B0SzkWV1V3gL3UEW6YUoctDiRb9C%2BngQwpBrZFJytfpakSk45MbNlXM7xC6FkdqhQRyKlhzCm9%2Fe%2BBjqkASr5WlQvvxCnoN0MCEQhtL0HECNnMxhMWij1fkdd704yvnWh4v9GLsmfRpZDyC9noqujhElbvIyq4BHK4ySS3rAwNORYk8y9iSymBvHG6Xs5FjeqPf9Nif0HRqSp7v9BlqBEmKxj4b8Ha05%2BLZtAMsWGyX1ijYFEXP%2Be5hqKbRsQO9Ty66jyFTlm03g2LJJ2%2BZo5W%2BWObJs3qLJ%2FNtQtsQrgEMbJ&X-Amz-Signature=6f1a0c81bbe064f7db6fe600222359d5101435f96562c1233f145d4733421b76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664555QBQA%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T003713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmylN04UFUVLWMtil%2F8EqK1kiEBNkt0P%2Bhs3groVhWLAIhANpIfnsJWSwE4dsos%2FCh7dbFUAr2aI77F%2BFiK0ecCwYFKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAtdKOOYSAtMMxUVUq3AOoVDa2TLogSnXKDX70us7aGpN3bG18g8sp54HjbNskeJXfiYuHSkLRaOoh%2Fwovp5sHIIraRGQuXSmd%2Ffl5yfm%2FmJP8naHEt3wQCAhf8YXGYkPzMGAQFhS22RpZMVu26gdcb0R98VdCCkKvFVhJB1kTdzy9wg1fbDe28mQ8%2BNBtlXcphKBnngHGdzLsKovPhxAb6JvKGE1z69jS2iigz0aNX1a%2Bws9xsTQqMsHoqbG5xqQ2rcIffxjMBhZYVvKsxEUxZc9yQe%2Fn52Muq3fYXibtLo0LPNl7wIPwl3ZuCIi0bpcCUZmiHxdOhQXPLIKJIzY9Tgn5bhSPi5nD%2FtW4IWH2UHOvI4wu3Qf13CbUPv3Ivn4VcI3VR9TSz2Kb20C8wSLEgR3gTdxDEhW39s51eHmxJPItia5x0oNBqWjxoKG%2FRNJ%2FKl29QQCPGmbpAVSp1xrRostGtXpSavRH7%2BST9DvF5myFSOdx1iS5zJMNzNVpxipU32LlWDeEks7WIzrL07uj1n%2B2EYcFheeRbJ5lu6lEgNA7FElwqt%2BGkflvcuAvgvqiBqCxZhe%2B0SzkWV1V3gL3UEW6YUoctDiRb9C%2BngQwpBrZFJytfpakSk45MbNlXM7xC6FkdqhQRyKlhzCm9%2Fe%2BBjqkASr5WlQvvxCnoN0MCEQhtL0HECNnMxhMWij1fkdd704yvnWh4v9GLsmfRpZDyC9noqujhElbvIyq4BHK4ySS3rAwNORYk8y9iSymBvHG6Xs5FjeqPf9Nif0HRqSp7v9BlqBEmKxj4b8Ha05%2BLZtAMsWGyX1ijYFEXP%2Be5hqKbRsQO9Ty66jyFTlm03g2LJJ2%2BZo5W%2BWObJs3qLJ%2FNtQtsQrgEMbJ&X-Amz-Signature=928b5b3bc4d0d201ceb0571847758bcb1ed7139b0d5c1b06decb4af46e0f2ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
