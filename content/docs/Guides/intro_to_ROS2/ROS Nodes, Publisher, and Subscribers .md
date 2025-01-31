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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PIGQYN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3IFVUxi0b%2F85cXjKZB7n2Vw5FCz6l4QnuZon2h048BAIhAPWCqbIyyWQZDV47zFaUQFrc2EcOdqI%2BCR0%2BoIrmBMhdKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3LMpMTWWwDeZyGzsq3AN8jJ1zdTUSYszI00XUh5X4fNplfd0ofk0X%2FGJYOFzQuWqGZVfDg89CbhC%2Bu5DxUZR4ZfATul7A852B5jfpQ0OAZkcrvmw8y3AS7ZKe4xnkO2cBipFXtqP9r89H7Z5Qm6A%2BQj5tVfoaxqDCXK%2FPRscpYiEZaEDnamFNVjuUFM4xOoxbTiBdLfbqa%2Fw8uh5dN4rqYHgzC3U17P8fdiuqPV0p0F45SZ05m1dx39wQaJftSoT6hDrQOCFSSuc%2B5qv23pLDPGjHwJW%2FtwN%2FH%2F%2FK%2B5f9cLB%2FMwINaJZEcUMZqVcHJhdSCYZyBmne5XJPwferPdt%2FSa%2FsCeUqUW%2B5Li7vofZOvy6G6PDhkjsvHcTBdjD%2FORdM%2FNNEWHitDL7jRw7pBQ9Pp%2BnZtVgJZKWrIhbu67B8ymYSzQ74upIg5W1J%2FCB%2Bq9QdcwEOSN5hadDJjT9A9mq0zrg8qT78t8qh5sTvk%2BenjBDmxj%2Bk7IDfuzLYJ%2FUu2nHLlEz%2FBS%2FkD8%2FW8H40PBOrg6NbNiMofXZ97hnyzSmb6WDzu8xZpNrVcEbNFVmc0cqzqzjKhJMQgwdJuVoK5%2BJoQQmYy21e5JiczPrDc6tfN8aoPqaJlIl6PpgTm1KzKE1vL6dhpx%2FnnpoJ9jDn0fC8BjqkARmB8AzzTsifqxfKgwVJw3fnGACXva3XqogtkDXPw6M7KHBn0uOZsbCQC8OCsz1vcEX3ZKmuKq8BjEpiLP7TMamurvp1XTGqy5OH0MD7F2zjqH07GgPJ81Bt%2BYWc6XagHVQwwRbegbtXrqJyJk5MShZjmTu82OlUAWTAITwPCc6ZrGsh3z1%2F%2FWceXVbvrS3kGB1299JjN5b0fOfvH0D8VmA%2FW5I1&X-Amz-Signature=e9b1e515bda0703e3555c2709314b6acd524a38ea029f24e0489e7ea4233c19c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PIGQYN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3IFVUxi0b%2F85cXjKZB7n2Vw5FCz6l4QnuZon2h048BAIhAPWCqbIyyWQZDV47zFaUQFrc2EcOdqI%2BCR0%2BoIrmBMhdKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3LMpMTWWwDeZyGzsq3AN8jJ1zdTUSYszI00XUh5X4fNplfd0ofk0X%2FGJYOFzQuWqGZVfDg89CbhC%2Bu5DxUZR4ZfATul7A852B5jfpQ0OAZkcrvmw8y3AS7ZKe4xnkO2cBipFXtqP9r89H7Z5Qm6A%2BQj5tVfoaxqDCXK%2FPRscpYiEZaEDnamFNVjuUFM4xOoxbTiBdLfbqa%2Fw8uh5dN4rqYHgzC3U17P8fdiuqPV0p0F45SZ05m1dx39wQaJftSoT6hDrQOCFSSuc%2B5qv23pLDPGjHwJW%2FtwN%2FH%2F%2FK%2B5f9cLB%2FMwINaJZEcUMZqVcHJhdSCYZyBmne5XJPwferPdt%2FSa%2FsCeUqUW%2B5Li7vofZOvy6G6PDhkjsvHcTBdjD%2FORdM%2FNNEWHitDL7jRw7pBQ9Pp%2BnZtVgJZKWrIhbu67B8ymYSzQ74upIg5W1J%2FCB%2Bq9QdcwEOSN5hadDJjT9A9mq0zrg8qT78t8qh5sTvk%2BenjBDmxj%2Bk7IDfuzLYJ%2FUu2nHLlEz%2FBS%2FkD8%2FW8H40PBOrg6NbNiMofXZ97hnyzSmb6WDzu8xZpNrVcEbNFVmc0cqzqzjKhJMQgwdJuVoK5%2BJoQQmYy21e5JiczPrDc6tfN8aoPqaJlIl6PpgTm1KzKE1vL6dhpx%2FnnpoJ9jDn0fC8BjqkARmB8AzzTsifqxfKgwVJw3fnGACXva3XqogtkDXPw6M7KHBn0uOZsbCQC8OCsz1vcEX3ZKmuKq8BjEpiLP7TMamurvp1XTGqy5OH0MD7F2zjqH07GgPJ81Bt%2BYWc6XagHVQwwRbegbtXrqJyJk5MShZjmTu82OlUAWTAITwPCc6ZrGsh3z1%2F%2FWceXVbvrS3kGB1299JjN5b0fOfvH0D8VmA%2FW5I1&X-Amz-Signature=df333f995f2664e2291f79ddbfcb9c9504bf26174c938f9966c9aeadc5935284&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PIGQYN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3IFVUxi0b%2F85cXjKZB7n2Vw5FCz6l4QnuZon2h048BAIhAPWCqbIyyWQZDV47zFaUQFrc2EcOdqI%2BCR0%2BoIrmBMhdKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3LMpMTWWwDeZyGzsq3AN8jJ1zdTUSYszI00XUh5X4fNplfd0ofk0X%2FGJYOFzQuWqGZVfDg89CbhC%2Bu5DxUZR4ZfATul7A852B5jfpQ0OAZkcrvmw8y3AS7ZKe4xnkO2cBipFXtqP9r89H7Z5Qm6A%2BQj5tVfoaxqDCXK%2FPRscpYiEZaEDnamFNVjuUFM4xOoxbTiBdLfbqa%2Fw8uh5dN4rqYHgzC3U17P8fdiuqPV0p0F45SZ05m1dx39wQaJftSoT6hDrQOCFSSuc%2B5qv23pLDPGjHwJW%2FtwN%2FH%2F%2FK%2B5f9cLB%2FMwINaJZEcUMZqVcHJhdSCYZyBmne5XJPwferPdt%2FSa%2FsCeUqUW%2B5Li7vofZOvy6G6PDhkjsvHcTBdjD%2FORdM%2FNNEWHitDL7jRw7pBQ9Pp%2BnZtVgJZKWrIhbu67B8ymYSzQ74upIg5W1J%2FCB%2Bq9QdcwEOSN5hadDJjT9A9mq0zrg8qT78t8qh5sTvk%2BenjBDmxj%2Bk7IDfuzLYJ%2FUu2nHLlEz%2FBS%2FkD8%2FW8H40PBOrg6NbNiMofXZ97hnyzSmb6WDzu8xZpNrVcEbNFVmc0cqzqzjKhJMQgwdJuVoK5%2BJoQQmYy21e5JiczPrDc6tfN8aoPqaJlIl6PpgTm1KzKE1vL6dhpx%2FnnpoJ9jDn0fC8BjqkARmB8AzzTsifqxfKgwVJw3fnGACXva3XqogtkDXPw6M7KHBn0uOZsbCQC8OCsz1vcEX3ZKmuKq8BjEpiLP7TMamurvp1XTGqy5OH0MD7F2zjqH07GgPJ81Bt%2BYWc6XagHVQwwRbegbtXrqJyJk5MShZjmTu82OlUAWTAITwPCc6ZrGsh3z1%2F%2FWceXVbvrS3kGB1299JjN5b0fOfvH0D8VmA%2FW5I1&X-Amz-Signature=916451dc587cd85b99270222476967600c933974a5246da1eb893edc0aa237bc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PIGQYN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3IFVUxi0b%2F85cXjKZB7n2Vw5FCz6l4QnuZon2h048BAIhAPWCqbIyyWQZDV47zFaUQFrc2EcOdqI%2BCR0%2BoIrmBMhdKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3LMpMTWWwDeZyGzsq3AN8jJ1zdTUSYszI00XUh5X4fNplfd0ofk0X%2FGJYOFzQuWqGZVfDg89CbhC%2Bu5DxUZR4ZfATul7A852B5jfpQ0OAZkcrvmw8y3AS7ZKe4xnkO2cBipFXtqP9r89H7Z5Qm6A%2BQj5tVfoaxqDCXK%2FPRscpYiEZaEDnamFNVjuUFM4xOoxbTiBdLfbqa%2Fw8uh5dN4rqYHgzC3U17P8fdiuqPV0p0F45SZ05m1dx39wQaJftSoT6hDrQOCFSSuc%2B5qv23pLDPGjHwJW%2FtwN%2FH%2F%2FK%2B5f9cLB%2FMwINaJZEcUMZqVcHJhdSCYZyBmne5XJPwferPdt%2FSa%2FsCeUqUW%2B5Li7vofZOvy6G6PDhkjsvHcTBdjD%2FORdM%2FNNEWHitDL7jRw7pBQ9Pp%2BnZtVgJZKWrIhbu67B8ymYSzQ74upIg5W1J%2FCB%2Bq9QdcwEOSN5hadDJjT9A9mq0zrg8qT78t8qh5sTvk%2BenjBDmxj%2Bk7IDfuzLYJ%2FUu2nHLlEz%2FBS%2FkD8%2FW8H40PBOrg6NbNiMofXZ97hnyzSmb6WDzu8xZpNrVcEbNFVmc0cqzqzjKhJMQgwdJuVoK5%2BJoQQmYy21e5JiczPrDc6tfN8aoPqaJlIl6PpgTm1KzKE1vL6dhpx%2FnnpoJ9jDn0fC8BjqkARmB8AzzTsifqxfKgwVJw3fnGACXva3XqogtkDXPw6M7KHBn0uOZsbCQC8OCsz1vcEX3ZKmuKq8BjEpiLP7TMamurvp1XTGqy5OH0MD7F2zjqH07GgPJ81Bt%2BYWc6XagHVQwwRbegbtXrqJyJk5MShZjmTu82OlUAWTAITwPCc6ZrGsh3z1%2F%2FWceXVbvrS3kGB1299JjN5b0fOfvH0D8VmA%2FW5I1&X-Amz-Signature=ddab3b346fb7c844c60a6f2ed129185ba01f45b35bfafe2f7b6c9950afc2fc12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PIGQYN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3IFVUxi0b%2F85cXjKZB7n2Vw5FCz6l4QnuZon2h048BAIhAPWCqbIyyWQZDV47zFaUQFrc2EcOdqI%2BCR0%2BoIrmBMhdKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3LMpMTWWwDeZyGzsq3AN8jJ1zdTUSYszI00XUh5X4fNplfd0ofk0X%2FGJYOFzQuWqGZVfDg89CbhC%2Bu5DxUZR4ZfATul7A852B5jfpQ0OAZkcrvmw8y3AS7ZKe4xnkO2cBipFXtqP9r89H7Z5Qm6A%2BQj5tVfoaxqDCXK%2FPRscpYiEZaEDnamFNVjuUFM4xOoxbTiBdLfbqa%2Fw8uh5dN4rqYHgzC3U17P8fdiuqPV0p0F45SZ05m1dx39wQaJftSoT6hDrQOCFSSuc%2B5qv23pLDPGjHwJW%2FtwN%2FH%2F%2FK%2B5f9cLB%2FMwINaJZEcUMZqVcHJhdSCYZyBmne5XJPwferPdt%2FSa%2FsCeUqUW%2B5Li7vofZOvy6G6PDhkjsvHcTBdjD%2FORdM%2FNNEWHitDL7jRw7pBQ9Pp%2BnZtVgJZKWrIhbu67B8ymYSzQ74upIg5W1J%2FCB%2Bq9QdcwEOSN5hadDJjT9A9mq0zrg8qT78t8qh5sTvk%2BenjBDmxj%2Bk7IDfuzLYJ%2FUu2nHLlEz%2FBS%2FkD8%2FW8H40PBOrg6NbNiMofXZ97hnyzSmb6WDzu8xZpNrVcEbNFVmc0cqzqzjKhJMQgwdJuVoK5%2BJoQQmYy21e5JiczPrDc6tfN8aoPqaJlIl6PpgTm1KzKE1vL6dhpx%2FnnpoJ9jDn0fC8BjqkARmB8AzzTsifqxfKgwVJw3fnGACXva3XqogtkDXPw6M7KHBn0uOZsbCQC8OCsz1vcEX3ZKmuKq8BjEpiLP7TMamurvp1XTGqy5OH0MD7F2zjqH07GgPJ81Bt%2BYWc6XagHVQwwRbegbtXrqJyJk5MShZjmTu82OlUAWTAITwPCc6ZrGsh3z1%2F%2FWceXVbvrS3kGB1299JjN5b0fOfvH0D8VmA%2FW5I1&X-Amz-Signature=a7b4522a5cd639cbb5afa3c7d625c18d132ae988dff4b71b222eeb9e2bafec94&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PIGQYN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3IFVUxi0b%2F85cXjKZB7n2Vw5FCz6l4QnuZon2h048BAIhAPWCqbIyyWQZDV47zFaUQFrc2EcOdqI%2BCR0%2BoIrmBMhdKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3LMpMTWWwDeZyGzsq3AN8jJ1zdTUSYszI00XUh5X4fNplfd0ofk0X%2FGJYOFzQuWqGZVfDg89CbhC%2Bu5DxUZR4ZfATul7A852B5jfpQ0OAZkcrvmw8y3AS7ZKe4xnkO2cBipFXtqP9r89H7Z5Qm6A%2BQj5tVfoaxqDCXK%2FPRscpYiEZaEDnamFNVjuUFM4xOoxbTiBdLfbqa%2Fw8uh5dN4rqYHgzC3U17P8fdiuqPV0p0F45SZ05m1dx39wQaJftSoT6hDrQOCFSSuc%2B5qv23pLDPGjHwJW%2FtwN%2FH%2F%2FK%2B5f9cLB%2FMwINaJZEcUMZqVcHJhdSCYZyBmne5XJPwferPdt%2FSa%2FsCeUqUW%2B5Li7vofZOvy6G6PDhkjsvHcTBdjD%2FORdM%2FNNEWHitDL7jRw7pBQ9Pp%2BnZtVgJZKWrIhbu67B8ymYSzQ74upIg5W1J%2FCB%2Bq9QdcwEOSN5hadDJjT9A9mq0zrg8qT78t8qh5sTvk%2BenjBDmxj%2Bk7IDfuzLYJ%2FUu2nHLlEz%2FBS%2FkD8%2FW8H40PBOrg6NbNiMofXZ97hnyzSmb6WDzu8xZpNrVcEbNFVmc0cqzqzjKhJMQgwdJuVoK5%2BJoQQmYy21e5JiczPrDc6tfN8aoPqaJlIl6PpgTm1KzKE1vL6dhpx%2FnnpoJ9jDn0fC8BjqkARmB8AzzTsifqxfKgwVJw3fnGACXva3XqogtkDXPw6M7KHBn0uOZsbCQC8OCsz1vcEX3ZKmuKq8BjEpiLP7TMamurvp1XTGqy5OH0MD7F2zjqH07GgPJ81Bt%2BYWc6XagHVQwwRbegbtXrqJyJk5MShZjmTu82OlUAWTAITwPCc6ZrGsh3z1%2F%2FWceXVbvrS3kGB1299JjN5b0fOfvH0D8VmA%2FW5I1&X-Amz-Signature=05253dfa2b6b3177c2cbf3b1fc4bd932626f94ef20bd5b6c9599bdb13891335c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PIGQYN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3IFVUxi0b%2F85cXjKZB7n2Vw5FCz6l4QnuZon2h048BAIhAPWCqbIyyWQZDV47zFaUQFrc2EcOdqI%2BCR0%2BoIrmBMhdKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3LMpMTWWwDeZyGzsq3AN8jJ1zdTUSYszI00XUh5X4fNplfd0ofk0X%2FGJYOFzQuWqGZVfDg89CbhC%2Bu5DxUZR4ZfATul7A852B5jfpQ0OAZkcrvmw8y3AS7ZKe4xnkO2cBipFXtqP9r89H7Z5Qm6A%2BQj5tVfoaxqDCXK%2FPRscpYiEZaEDnamFNVjuUFM4xOoxbTiBdLfbqa%2Fw8uh5dN4rqYHgzC3U17P8fdiuqPV0p0F45SZ05m1dx39wQaJftSoT6hDrQOCFSSuc%2B5qv23pLDPGjHwJW%2FtwN%2FH%2F%2FK%2B5f9cLB%2FMwINaJZEcUMZqVcHJhdSCYZyBmne5XJPwferPdt%2FSa%2FsCeUqUW%2B5Li7vofZOvy6G6PDhkjsvHcTBdjD%2FORdM%2FNNEWHitDL7jRw7pBQ9Pp%2BnZtVgJZKWrIhbu67B8ymYSzQ74upIg5W1J%2FCB%2Bq9QdcwEOSN5hadDJjT9A9mq0zrg8qT78t8qh5sTvk%2BenjBDmxj%2Bk7IDfuzLYJ%2FUu2nHLlEz%2FBS%2FkD8%2FW8H40PBOrg6NbNiMofXZ97hnyzSmb6WDzu8xZpNrVcEbNFVmc0cqzqzjKhJMQgwdJuVoK5%2BJoQQmYy21e5JiczPrDc6tfN8aoPqaJlIl6PpgTm1KzKE1vL6dhpx%2FnnpoJ9jDn0fC8BjqkARmB8AzzTsifqxfKgwVJw3fnGACXva3XqogtkDXPw6M7KHBn0uOZsbCQC8OCsz1vcEX3ZKmuKq8BjEpiLP7TMamurvp1XTGqy5OH0MD7F2zjqH07GgPJ81Bt%2BYWc6XagHVQwwRbegbtXrqJyJk5MShZjmTu82OlUAWTAITwPCc6ZrGsh3z1%2F%2FWceXVbvrS3kGB1299JjN5b0fOfvH0D8VmA%2FW5I1&X-Amz-Signature=c210129a9117fd82072521ee1c33b7e6e67392517b6af2c0ad234db7ab681126&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PIGQYN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3IFVUxi0b%2F85cXjKZB7n2Vw5FCz6l4QnuZon2h048BAIhAPWCqbIyyWQZDV47zFaUQFrc2EcOdqI%2BCR0%2BoIrmBMhdKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3LMpMTWWwDeZyGzsq3AN8jJ1zdTUSYszI00XUh5X4fNplfd0ofk0X%2FGJYOFzQuWqGZVfDg89CbhC%2Bu5DxUZR4ZfATul7A852B5jfpQ0OAZkcrvmw8y3AS7ZKe4xnkO2cBipFXtqP9r89H7Z5Qm6A%2BQj5tVfoaxqDCXK%2FPRscpYiEZaEDnamFNVjuUFM4xOoxbTiBdLfbqa%2Fw8uh5dN4rqYHgzC3U17P8fdiuqPV0p0F45SZ05m1dx39wQaJftSoT6hDrQOCFSSuc%2B5qv23pLDPGjHwJW%2FtwN%2FH%2F%2FK%2B5f9cLB%2FMwINaJZEcUMZqVcHJhdSCYZyBmne5XJPwferPdt%2FSa%2FsCeUqUW%2B5Li7vofZOvy6G6PDhkjsvHcTBdjD%2FORdM%2FNNEWHitDL7jRw7pBQ9Pp%2BnZtVgJZKWrIhbu67B8ymYSzQ74upIg5W1J%2FCB%2Bq9QdcwEOSN5hadDJjT9A9mq0zrg8qT78t8qh5sTvk%2BenjBDmxj%2Bk7IDfuzLYJ%2FUu2nHLlEz%2FBS%2FkD8%2FW8H40PBOrg6NbNiMofXZ97hnyzSmb6WDzu8xZpNrVcEbNFVmc0cqzqzjKhJMQgwdJuVoK5%2BJoQQmYy21e5JiczPrDc6tfN8aoPqaJlIl6PpgTm1KzKE1vL6dhpx%2FnnpoJ9jDn0fC8BjqkARmB8AzzTsifqxfKgwVJw3fnGACXva3XqogtkDXPw6M7KHBn0uOZsbCQC8OCsz1vcEX3ZKmuKq8BjEpiLP7TMamurvp1XTGqy5OH0MD7F2zjqH07GgPJ81Bt%2BYWc6XagHVQwwRbegbtXrqJyJk5MShZjmTu82OlUAWTAITwPCc6ZrGsh3z1%2F%2FWceXVbvrS3kGB1299JjN5b0fOfvH0D8VmA%2FW5I1&X-Amz-Signature=64ae3bda46708b69c3f4ae73369fc55c0f0d1898b47ec9d7117fb4ff576d45f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
