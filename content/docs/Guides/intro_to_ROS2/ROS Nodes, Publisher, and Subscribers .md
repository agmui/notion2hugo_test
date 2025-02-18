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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJUIDMB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBDPrAxwd9gefVxPBnRb7ICCHYFIgHz8nF1RBtHSegdZAiAndOn3MwAJeTYrN8h82vy7zZs2L1%2Bt7PvEdRyMmS32WiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfWq0k4eXC7%2BERsPKtwDtWkF9isV7rWf6nPzCOVBvZ4FoEwE95SZUh8o5%2F5QIxD1MzWon%2FDm2qnFBRB0qdKMwWBX506xFKWnPmqeV6Hi7LgnGIXe1hPNLk7sw2%2F%2FK6VQeRoZvUBzfMkQnScn%2BNe%2FrDRqL8mGjISdU2zOBPokpGNxIHt7Plhnh7NA7FlLCtf7HmdTtvU%2FbZ6jnFl5WOvfEh1teQUmy9w6Nub%2FUrs8gYzWUZmN8yWAg3GrjZbQiH2JMoPW3a93Kvh3zJVSKe1Q0uwe9AoPhdEDaxn4EbekeizlVWPZXoH%2FBY1G6mKbEoEAAIzdG3%2BaWbp4Qztd%2FgnFazprCc%2FvU9Sue7hLbKe%2BpboF9AaqSA2fQ8gA2yMh6xtO6RL4aUF4VPHGe3D6joBZdAhwIWgEgWFjed06yK%2BWqc15bZIg3UvWyWIm2EYRcCAKYE%2F5c0chhWx6TW3fNjw1u8uPjPwxPoT1S29Pf0IafsXBkll1uMwOvjG0upFTkfO53q1qGPyuhqNSjS37dUxzDbyva7ynkFUBoy51WkO%2BjG6Lcw336Rr3%2Fav4sevCEmk8LX4c0wIDXMMg%2BEZ4OaTakCAB9DYTGdnPP4lFk%2BzeT6TPKv487%2FzLT5rlzbViB4gRjFji6rgMhHcSMjQwnMjQvQY6pgFsa7RNE4Qz%2BVZvVRjmp1mqjlHHqvfZ9LgNnskE3JNsgYnQsI7Fad0OSrbavIB3KWgcO%2BSui91ruiPm%2FfpT2DHm7vz9kl1XuiVMA%2B0YyxT0PksLmxVh84RfIm9M03bg46WRehF1vCuySnvoJRf5qEut0FMi%2BN95Pz5ieDBbTpxHaXYw3GvKfz4pPHmTT1X38G4dNZUe%2FlR3pQiv0G8%2B9r0Omszy0885&X-Amz-Signature=0c71063f9b16d47a9a5be215bcaf35e4c5700df55079ef8ab78cf3d0aedd1090&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJUIDMB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBDPrAxwd9gefVxPBnRb7ICCHYFIgHz8nF1RBtHSegdZAiAndOn3MwAJeTYrN8h82vy7zZs2L1%2Bt7PvEdRyMmS32WiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfWq0k4eXC7%2BERsPKtwDtWkF9isV7rWf6nPzCOVBvZ4FoEwE95SZUh8o5%2F5QIxD1MzWon%2FDm2qnFBRB0qdKMwWBX506xFKWnPmqeV6Hi7LgnGIXe1hPNLk7sw2%2F%2FK6VQeRoZvUBzfMkQnScn%2BNe%2FrDRqL8mGjISdU2zOBPokpGNxIHt7Plhnh7NA7FlLCtf7HmdTtvU%2FbZ6jnFl5WOvfEh1teQUmy9w6Nub%2FUrs8gYzWUZmN8yWAg3GrjZbQiH2JMoPW3a93Kvh3zJVSKe1Q0uwe9AoPhdEDaxn4EbekeizlVWPZXoH%2FBY1G6mKbEoEAAIzdG3%2BaWbp4Qztd%2FgnFazprCc%2FvU9Sue7hLbKe%2BpboF9AaqSA2fQ8gA2yMh6xtO6RL4aUF4VPHGe3D6joBZdAhwIWgEgWFjed06yK%2BWqc15bZIg3UvWyWIm2EYRcCAKYE%2F5c0chhWx6TW3fNjw1u8uPjPwxPoT1S29Pf0IafsXBkll1uMwOvjG0upFTkfO53q1qGPyuhqNSjS37dUxzDbyva7ynkFUBoy51WkO%2BjG6Lcw336Rr3%2Fav4sevCEmk8LX4c0wIDXMMg%2BEZ4OaTakCAB9DYTGdnPP4lFk%2BzeT6TPKv487%2FzLT5rlzbViB4gRjFji6rgMhHcSMjQwnMjQvQY6pgFsa7RNE4Qz%2BVZvVRjmp1mqjlHHqvfZ9LgNnskE3JNsgYnQsI7Fad0OSrbavIB3KWgcO%2BSui91ruiPm%2FfpT2DHm7vz9kl1XuiVMA%2B0YyxT0PksLmxVh84RfIm9M03bg46WRehF1vCuySnvoJRf5qEut0FMi%2BN95Pz5ieDBbTpxHaXYw3GvKfz4pPHmTT1X38G4dNZUe%2FlR3pQiv0G8%2B9r0Omszy0885&X-Amz-Signature=bdcb80d4d817e70aef9bf6a00154e974185a2877014eaca3a9dcc1ca710f219f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJUIDMB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBDPrAxwd9gefVxPBnRb7ICCHYFIgHz8nF1RBtHSegdZAiAndOn3MwAJeTYrN8h82vy7zZs2L1%2Bt7PvEdRyMmS32WiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfWq0k4eXC7%2BERsPKtwDtWkF9isV7rWf6nPzCOVBvZ4FoEwE95SZUh8o5%2F5QIxD1MzWon%2FDm2qnFBRB0qdKMwWBX506xFKWnPmqeV6Hi7LgnGIXe1hPNLk7sw2%2F%2FK6VQeRoZvUBzfMkQnScn%2BNe%2FrDRqL8mGjISdU2zOBPokpGNxIHt7Plhnh7NA7FlLCtf7HmdTtvU%2FbZ6jnFl5WOvfEh1teQUmy9w6Nub%2FUrs8gYzWUZmN8yWAg3GrjZbQiH2JMoPW3a93Kvh3zJVSKe1Q0uwe9AoPhdEDaxn4EbekeizlVWPZXoH%2FBY1G6mKbEoEAAIzdG3%2BaWbp4Qztd%2FgnFazprCc%2FvU9Sue7hLbKe%2BpboF9AaqSA2fQ8gA2yMh6xtO6RL4aUF4VPHGe3D6joBZdAhwIWgEgWFjed06yK%2BWqc15bZIg3UvWyWIm2EYRcCAKYE%2F5c0chhWx6TW3fNjw1u8uPjPwxPoT1S29Pf0IafsXBkll1uMwOvjG0upFTkfO53q1qGPyuhqNSjS37dUxzDbyva7ynkFUBoy51WkO%2BjG6Lcw336Rr3%2Fav4sevCEmk8LX4c0wIDXMMg%2BEZ4OaTakCAB9DYTGdnPP4lFk%2BzeT6TPKv487%2FzLT5rlzbViB4gRjFji6rgMhHcSMjQwnMjQvQY6pgFsa7RNE4Qz%2BVZvVRjmp1mqjlHHqvfZ9LgNnskE3JNsgYnQsI7Fad0OSrbavIB3KWgcO%2BSui91ruiPm%2FfpT2DHm7vz9kl1XuiVMA%2B0YyxT0PksLmxVh84RfIm9M03bg46WRehF1vCuySnvoJRf5qEut0FMi%2BN95Pz5ieDBbTpxHaXYw3GvKfz4pPHmTT1X38G4dNZUe%2FlR3pQiv0G8%2B9r0Omszy0885&X-Amz-Signature=22eface13792c766097a0cc091c3cfd414a4f988ec7cf8a18a752709b7503556&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJUIDMB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBDPrAxwd9gefVxPBnRb7ICCHYFIgHz8nF1RBtHSegdZAiAndOn3MwAJeTYrN8h82vy7zZs2L1%2Bt7PvEdRyMmS32WiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfWq0k4eXC7%2BERsPKtwDtWkF9isV7rWf6nPzCOVBvZ4FoEwE95SZUh8o5%2F5QIxD1MzWon%2FDm2qnFBRB0qdKMwWBX506xFKWnPmqeV6Hi7LgnGIXe1hPNLk7sw2%2F%2FK6VQeRoZvUBzfMkQnScn%2BNe%2FrDRqL8mGjISdU2zOBPokpGNxIHt7Plhnh7NA7FlLCtf7HmdTtvU%2FbZ6jnFl5WOvfEh1teQUmy9w6Nub%2FUrs8gYzWUZmN8yWAg3GrjZbQiH2JMoPW3a93Kvh3zJVSKe1Q0uwe9AoPhdEDaxn4EbekeizlVWPZXoH%2FBY1G6mKbEoEAAIzdG3%2BaWbp4Qztd%2FgnFazprCc%2FvU9Sue7hLbKe%2BpboF9AaqSA2fQ8gA2yMh6xtO6RL4aUF4VPHGe3D6joBZdAhwIWgEgWFjed06yK%2BWqc15bZIg3UvWyWIm2EYRcCAKYE%2F5c0chhWx6TW3fNjw1u8uPjPwxPoT1S29Pf0IafsXBkll1uMwOvjG0upFTkfO53q1qGPyuhqNSjS37dUxzDbyva7ynkFUBoy51WkO%2BjG6Lcw336Rr3%2Fav4sevCEmk8LX4c0wIDXMMg%2BEZ4OaTakCAB9DYTGdnPP4lFk%2BzeT6TPKv487%2FzLT5rlzbViB4gRjFji6rgMhHcSMjQwnMjQvQY6pgFsa7RNE4Qz%2BVZvVRjmp1mqjlHHqvfZ9LgNnskE3JNsgYnQsI7Fad0OSrbavIB3KWgcO%2BSui91ruiPm%2FfpT2DHm7vz9kl1XuiVMA%2B0YyxT0PksLmxVh84RfIm9M03bg46WRehF1vCuySnvoJRf5qEut0FMi%2BN95Pz5ieDBbTpxHaXYw3GvKfz4pPHmTT1X38G4dNZUe%2FlR3pQiv0G8%2B9r0Omszy0885&X-Amz-Signature=87e87296df074b20ea12cc6a3313d4e50b510ee807678c93b3e33bb0468e9dec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJUIDMB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBDPrAxwd9gefVxPBnRb7ICCHYFIgHz8nF1RBtHSegdZAiAndOn3MwAJeTYrN8h82vy7zZs2L1%2Bt7PvEdRyMmS32WiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfWq0k4eXC7%2BERsPKtwDtWkF9isV7rWf6nPzCOVBvZ4FoEwE95SZUh8o5%2F5QIxD1MzWon%2FDm2qnFBRB0qdKMwWBX506xFKWnPmqeV6Hi7LgnGIXe1hPNLk7sw2%2F%2FK6VQeRoZvUBzfMkQnScn%2BNe%2FrDRqL8mGjISdU2zOBPokpGNxIHt7Plhnh7NA7FlLCtf7HmdTtvU%2FbZ6jnFl5WOvfEh1teQUmy9w6Nub%2FUrs8gYzWUZmN8yWAg3GrjZbQiH2JMoPW3a93Kvh3zJVSKe1Q0uwe9AoPhdEDaxn4EbekeizlVWPZXoH%2FBY1G6mKbEoEAAIzdG3%2BaWbp4Qztd%2FgnFazprCc%2FvU9Sue7hLbKe%2BpboF9AaqSA2fQ8gA2yMh6xtO6RL4aUF4VPHGe3D6joBZdAhwIWgEgWFjed06yK%2BWqc15bZIg3UvWyWIm2EYRcCAKYE%2F5c0chhWx6TW3fNjw1u8uPjPwxPoT1S29Pf0IafsXBkll1uMwOvjG0upFTkfO53q1qGPyuhqNSjS37dUxzDbyva7ynkFUBoy51WkO%2BjG6Lcw336Rr3%2Fav4sevCEmk8LX4c0wIDXMMg%2BEZ4OaTakCAB9DYTGdnPP4lFk%2BzeT6TPKv487%2FzLT5rlzbViB4gRjFji6rgMhHcSMjQwnMjQvQY6pgFsa7RNE4Qz%2BVZvVRjmp1mqjlHHqvfZ9LgNnskE3JNsgYnQsI7Fad0OSrbavIB3KWgcO%2BSui91ruiPm%2FfpT2DHm7vz9kl1XuiVMA%2B0YyxT0PksLmxVh84RfIm9M03bg46WRehF1vCuySnvoJRf5qEut0FMi%2BN95Pz5ieDBbTpxHaXYw3GvKfz4pPHmTT1X38G4dNZUe%2FlR3pQiv0G8%2B9r0Omszy0885&X-Amz-Signature=998c2fe6d1c7c6c849ec4680d42693fafce8fa73ca49c98097b98b6958aa5738&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJUIDMB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBDPrAxwd9gefVxPBnRb7ICCHYFIgHz8nF1RBtHSegdZAiAndOn3MwAJeTYrN8h82vy7zZs2L1%2Bt7PvEdRyMmS32WiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfWq0k4eXC7%2BERsPKtwDtWkF9isV7rWf6nPzCOVBvZ4FoEwE95SZUh8o5%2F5QIxD1MzWon%2FDm2qnFBRB0qdKMwWBX506xFKWnPmqeV6Hi7LgnGIXe1hPNLk7sw2%2F%2FK6VQeRoZvUBzfMkQnScn%2BNe%2FrDRqL8mGjISdU2zOBPokpGNxIHt7Plhnh7NA7FlLCtf7HmdTtvU%2FbZ6jnFl5WOvfEh1teQUmy9w6Nub%2FUrs8gYzWUZmN8yWAg3GrjZbQiH2JMoPW3a93Kvh3zJVSKe1Q0uwe9AoPhdEDaxn4EbekeizlVWPZXoH%2FBY1G6mKbEoEAAIzdG3%2BaWbp4Qztd%2FgnFazprCc%2FvU9Sue7hLbKe%2BpboF9AaqSA2fQ8gA2yMh6xtO6RL4aUF4VPHGe3D6joBZdAhwIWgEgWFjed06yK%2BWqc15bZIg3UvWyWIm2EYRcCAKYE%2F5c0chhWx6TW3fNjw1u8uPjPwxPoT1S29Pf0IafsXBkll1uMwOvjG0upFTkfO53q1qGPyuhqNSjS37dUxzDbyva7ynkFUBoy51WkO%2BjG6Lcw336Rr3%2Fav4sevCEmk8LX4c0wIDXMMg%2BEZ4OaTakCAB9DYTGdnPP4lFk%2BzeT6TPKv487%2FzLT5rlzbViB4gRjFji6rgMhHcSMjQwnMjQvQY6pgFsa7RNE4Qz%2BVZvVRjmp1mqjlHHqvfZ9LgNnskE3JNsgYnQsI7Fad0OSrbavIB3KWgcO%2BSui91ruiPm%2FfpT2DHm7vz9kl1XuiVMA%2B0YyxT0PksLmxVh84RfIm9M03bg46WRehF1vCuySnvoJRf5qEut0FMi%2BN95Pz5ieDBbTpxHaXYw3GvKfz4pPHmTT1X38G4dNZUe%2FlR3pQiv0G8%2B9r0Omszy0885&X-Amz-Signature=27a3b36715237242ccdd6887ed573d8239f4acf8f59c22ea5c0cdc76c4f89bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJUIDMB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBDPrAxwd9gefVxPBnRb7ICCHYFIgHz8nF1RBtHSegdZAiAndOn3MwAJeTYrN8h82vy7zZs2L1%2Bt7PvEdRyMmS32WiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfWq0k4eXC7%2BERsPKtwDtWkF9isV7rWf6nPzCOVBvZ4FoEwE95SZUh8o5%2F5QIxD1MzWon%2FDm2qnFBRB0qdKMwWBX506xFKWnPmqeV6Hi7LgnGIXe1hPNLk7sw2%2F%2FK6VQeRoZvUBzfMkQnScn%2BNe%2FrDRqL8mGjISdU2zOBPokpGNxIHt7Plhnh7NA7FlLCtf7HmdTtvU%2FbZ6jnFl5WOvfEh1teQUmy9w6Nub%2FUrs8gYzWUZmN8yWAg3GrjZbQiH2JMoPW3a93Kvh3zJVSKe1Q0uwe9AoPhdEDaxn4EbekeizlVWPZXoH%2FBY1G6mKbEoEAAIzdG3%2BaWbp4Qztd%2FgnFazprCc%2FvU9Sue7hLbKe%2BpboF9AaqSA2fQ8gA2yMh6xtO6RL4aUF4VPHGe3D6joBZdAhwIWgEgWFjed06yK%2BWqc15bZIg3UvWyWIm2EYRcCAKYE%2F5c0chhWx6TW3fNjw1u8uPjPwxPoT1S29Pf0IafsXBkll1uMwOvjG0upFTkfO53q1qGPyuhqNSjS37dUxzDbyva7ynkFUBoy51WkO%2BjG6Lcw336Rr3%2Fav4sevCEmk8LX4c0wIDXMMg%2BEZ4OaTakCAB9DYTGdnPP4lFk%2BzeT6TPKv487%2FzLT5rlzbViB4gRjFji6rgMhHcSMjQwnMjQvQY6pgFsa7RNE4Qz%2BVZvVRjmp1mqjlHHqvfZ9LgNnskE3JNsgYnQsI7Fad0OSrbavIB3KWgcO%2BSui91ruiPm%2FfpT2DHm7vz9kl1XuiVMA%2B0YyxT0PksLmxVh84RfIm9M03bg46WRehF1vCuySnvoJRf5qEut0FMi%2BN95Pz5ieDBbTpxHaXYw3GvKfz4pPHmTT1X38G4dNZUe%2FlR3pQiv0G8%2B9r0Omszy0885&X-Amz-Signature=9357110f2099951c7c766deacb539f1a773e350e970f69eb023915e16f82d9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLJUIDMB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T061101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBDPrAxwd9gefVxPBnRb7ICCHYFIgHz8nF1RBtHSegdZAiAndOn3MwAJeTYrN8h82vy7zZs2L1%2Bt7PvEdRyMmS32WiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrfWq0k4eXC7%2BERsPKtwDtWkF9isV7rWf6nPzCOVBvZ4FoEwE95SZUh8o5%2F5QIxD1MzWon%2FDm2qnFBRB0qdKMwWBX506xFKWnPmqeV6Hi7LgnGIXe1hPNLk7sw2%2F%2FK6VQeRoZvUBzfMkQnScn%2BNe%2FrDRqL8mGjISdU2zOBPokpGNxIHt7Plhnh7NA7FlLCtf7HmdTtvU%2FbZ6jnFl5WOvfEh1teQUmy9w6Nub%2FUrs8gYzWUZmN8yWAg3GrjZbQiH2JMoPW3a93Kvh3zJVSKe1Q0uwe9AoPhdEDaxn4EbekeizlVWPZXoH%2FBY1G6mKbEoEAAIzdG3%2BaWbp4Qztd%2FgnFazprCc%2FvU9Sue7hLbKe%2BpboF9AaqSA2fQ8gA2yMh6xtO6RL4aUF4VPHGe3D6joBZdAhwIWgEgWFjed06yK%2BWqc15bZIg3UvWyWIm2EYRcCAKYE%2F5c0chhWx6TW3fNjw1u8uPjPwxPoT1S29Pf0IafsXBkll1uMwOvjG0upFTkfO53q1qGPyuhqNSjS37dUxzDbyva7ynkFUBoy51WkO%2BjG6Lcw336Rr3%2Fav4sevCEmk8LX4c0wIDXMMg%2BEZ4OaTakCAB9DYTGdnPP4lFk%2BzeT6TPKv487%2FzLT5rlzbViB4gRjFji6rgMhHcSMjQwnMjQvQY6pgFsa7RNE4Qz%2BVZvVRjmp1mqjlHHqvfZ9LgNnskE3JNsgYnQsI7Fad0OSrbavIB3KWgcO%2BSui91ruiPm%2FfpT2DHm7vz9kl1XuiVMA%2B0YyxT0PksLmxVh84RfIm9M03bg46WRehF1vCuySnvoJRf5qEut0FMi%2BN95Pz5ieDBbTpxHaXYw3GvKfz4pPHmTT1X38G4dNZUe%2FlR3pQiv0G8%2B9r0Omszy0885&X-Amz-Signature=0d9fea48e76daaffa07ee492b4680cc657d08c2dd74be9a423e95ca73539e9fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
