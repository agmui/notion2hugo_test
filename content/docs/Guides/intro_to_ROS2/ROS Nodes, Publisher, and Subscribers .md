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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJDRKOO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7gqVeLMA3alyhkcu1I5EXFWiV0MffmmRJDBHY3MHvoQIhAJthB56Cix8g%2F93taGSIfndziel%2BthEsN6letr7dqBkvKv8DCEIQABoMNjM3NDIzMTgzODA1IgwYQyjkqlw3hhZUJZsq3ANKjJsfBG4vQi%2FUoQ%2Fx5pWVxld2Ejdw%2FblWkjNOSxf1mUdN%2FZksx75pIEjBLumG6aUWqoSF%2FrK7dpB2APWHv0lukhenN7ttKJe7s023VugHhGp1j2XmnswDdw7960mrqsav3kR8Jr%2F1Dj%2Fc5GXBhJYR3knYEJD7pvDcTMoLh7eoHFPQElCsv7vPP695OfzRlJXxuKKtSiRaNJ2nSs0oucsCZBhjJ6%2Fnz3du8TtUaErR56g89wyFhyrx%2BthA1jm%2FFprfdiNaBWiMLnFuqmTJy%2FNLb3MrAUnJyfMuh6LhoAouMPDRFcJZDy3c9sBt5f6DeGP%2BJR0f3poiO5ES8tfZkwITT9tYip4v7nY1A%2FWHj9TBXjEkjNR3ifiHL2U925a%2Bd6ddhzkcqqBlA5yMX9E2clA3zPREaMlMcoqz9Gsl%2FkJ%2Bjydve31syyovOo0xbUJmU60NvEtME96KoxaoWI6UxWvkHkkiL%2B4cXoJLQqGJJe%2F5nHSgwvkmQHSS4jhGZn5wPchvIso9sCZNf7vdWALNvytuWtY568BfaSODkbSCsumMqlqhtpcNtFAPg7BJGJtPj%2BEBfx0Su8msXYc6%2FSxfHQ4uRpvzwcO4zDqhLrAonvLziJ1h2EcxWLKYGUUUizCUoZS%2FBjqkAXroNQ4V0WaWPceouy4eZ7%2Bi4E%2BQpvzX0Kub4IpV97XqtNxHWBtVb1T4qmP9ARyEg1gs9IkMYzY86ql9ChlUMyrZDsQXIKgWYERrP7tPtzSPHx9C2NoE8uQBeqK81Ob1NfMpLM8SRx%2FImJWKpk0dLMkV%2FJ9gfwjOkWe24sJ5DhTb3IN0jNg%2FB2b3cpcEM9sCb4jB2bWwC8wiMGlP18S6w%2FT0cP7D&X-Amz-Signature=fa92a953d8ea96b58b5fde479b1774e32888ee16ae718302a1fe2d420c0cd7a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJDRKOO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7gqVeLMA3alyhkcu1I5EXFWiV0MffmmRJDBHY3MHvoQIhAJthB56Cix8g%2F93taGSIfndziel%2BthEsN6letr7dqBkvKv8DCEIQABoMNjM3NDIzMTgzODA1IgwYQyjkqlw3hhZUJZsq3ANKjJsfBG4vQi%2FUoQ%2Fx5pWVxld2Ejdw%2FblWkjNOSxf1mUdN%2FZksx75pIEjBLumG6aUWqoSF%2FrK7dpB2APWHv0lukhenN7ttKJe7s023VugHhGp1j2XmnswDdw7960mrqsav3kR8Jr%2F1Dj%2Fc5GXBhJYR3knYEJD7pvDcTMoLh7eoHFPQElCsv7vPP695OfzRlJXxuKKtSiRaNJ2nSs0oucsCZBhjJ6%2Fnz3du8TtUaErR56g89wyFhyrx%2BthA1jm%2FFprfdiNaBWiMLnFuqmTJy%2FNLb3MrAUnJyfMuh6LhoAouMPDRFcJZDy3c9sBt5f6DeGP%2BJR0f3poiO5ES8tfZkwITT9tYip4v7nY1A%2FWHj9TBXjEkjNR3ifiHL2U925a%2Bd6ddhzkcqqBlA5yMX9E2clA3zPREaMlMcoqz9Gsl%2FkJ%2Bjydve31syyovOo0xbUJmU60NvEtME96KoxaoWI6UxWvkHkkiL%2B4cXoJLQqGJJe%2F5nHSgwvkmQHSS4jhGZn5wPchvIso9sCZNf7vdWALNvytuWtY568BfaSODkbSCsumMqlqhtpcNtFAPg7BJGJtPj%2BEBfx0Su8msXYc6%2FSxfHQ4uRpvzwcO4zDqhLrAonvLziJ1h2EcxWLKYGUUUizCUoZS%2FBjqkAXroNQ4V0WaWPceouy4eZ7%2Bi4E%2BQpvzX0Kub4IpV97XqtNxHWBtVb1T4qmP9ARyEg1gs9IkMYzY86ql9ChlUMyrZDsQXIKgWYERrP7tPtzSPHx9C2NoE8uQBeqK81Ob1NfMpLM8SRx%2FImJWKpk0dLMkV%2FJ9gfwjOkWe24sJ5DhTb3IN0jNg%2FB2b3cpcEM9sCb4jB2bWwC8wiMGlP18S6w%2FT0cP7D&X-Amz-Signature=5efa7506310b6f496f91cdc1eeef035d01baa7678077f9658c8519f0ad4d1f83&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJDRKOO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7gqVeLMA3alyhkcu1I5EXFWiV0MffmmRJDBHY3MHvoQIhAJthB56Cix8g%2F93taGSIfndziel%2BthEsN6letr7dqBkvKv8DCEIQABoMNjM3NDIzMTgzODA1IgwYQyjkqlw3hhZUJZsq3ANKjJsfBG4vQi%2FUoQ%2Fx5pWVxld2Ejdw%2FblWkjNOSxf1mUdN%2FZksx75pIEjBLumG6aUWqoSF%2FrK7dpB2APWHv0lukhenN7ttKJe7s023VugHhGp1j2XmnswDdw7960mrqsav3kR8Jr%2F1Dj%2Fc5GXBhJYR3knYEJD7pvDcTMoLh7eoHFPQElCsv7vPP695OfzRlJXxuKKtSiRaNJ2nSs0oucsCZBhjJ6%2Fnz3du8TtUaErR56g89wyFhyrx%2BthA1jm%2FFprfdiNaBWiMLnFuqmTJy%2FNLb3MrAUnJyfMuh6LhoAouMPDRFcJZDy3c9sBt5f6DeGP%2BJR0f3poiO5ES8tfZkwITT9tYip4v7nY1A%2FWHj9TBXjEkjNR3ifiHL2U925a%2Bd6ddhzkcqqBlA5yMX9E2clA3zPREaMlMcoqz9Gsl%2FkJ%2Bjydve31syyovOo0xbUJmU60NvEtME96KoxaoWI6UxWvkHkkiL%2B4cXoJLQqGJJe%2F5nHSgwvkmQHSS4jhGZn5wPchvIso9sCZNf7vdWALNvytuWtY568BfaSODkbSCsumMqlqhtpcNtFAPg7BJGJtPj%2BEBfx0Su8msXYc6%2FSxfHQ4uRpvzwcO4zDqhLrAonvLziJ1h2EcxWLKYGUUUizCUoZS%2FBjqkAXroNQ4V0WaWPceouy4eZ7%2Bi4E%2BQpvzX0Kub4IpV97XqtNxHWBtVb1T4qmP9ARyEg1gs9IkMYzY86ql9ChlUMyrZDsQXIKgWYERrP7tPtzSPHx9C2NoE8uQBeqK81Ob1NfMpLM8SRx%2FImJWKpk0dLMkV%2FJ9gfwjOkWe24sJ5DhTb3IN0jNg%2FB2b3cpcEM9sCb4jB2bWwC8wiMGlP18S6w%2FT0cP7D&X-Amz-Signature=f4c45f19a2122b9f6a3be741dc7543ff70a42aa160b1aff7772d98dbf00aa1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJDRKOO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7gqVeLMA3alyhkcu1I5EXFWiV0MffmmRJDBHY3MHvoQIhAJthB56Cix8g%2F93taGSIfndziel%2BthEsN6letr7dqBkvKv8DCEIQABoMNjM3NDIzMTgzODA1IgwYQyjkqlw3hhZUJZsq3ANKjJsfBG4vQi%2FUoQ%2Fx5pWVxld2Ejdw%2FblWkjNOSxf1mUdN%2FZksx75pIEjBLumG6aUWqoSF%2FrK7dpB2APWHv0lukhenN7ttKJe7s023VugHhGp1j2XmnswDdw7960mrqsav3kR8Jr%2F1Dj%2Fc5GXBhJYR3knYEJD7pvDcTMoLh7eoHFPQElCsv7vPP695OfzRlJXxuKKtSiRaNJ2nSs0oucsCZBhjJ6%2Fnz3du8TtUaErR56g89wyFhyrx%2BthA1jm%2FFprfdiNaBWiMLnFuqmTJy%2FNLb3MrAUnJyfMuh6LhoAouMPDRFcJZDy3c9sBt5f6DeGP%2BJR0f3poiO5ES8tfZkwITT9tYip4v7nY1A%2FWHj9TBXjEkjNR3ifiHL2U925a%2Bd6ddhzkcqqBlA5yMX9E2clA3zPREaMlMcoqz9Gsl%2FkJ%2Bjydve31syyovOo0xbUJmU60NvEtME96KoxaoWI6UxWvkHkkiL%2B4cXoJLQqGJJe%2F5nHSgwvkmQHSS4jhGZn5wPchvIso9sCZNf7vdWALNvytuWtY568BfaSODkbSCsumMqlqhtpcNtFAPg7BJGJtPj%2BEBfx0Su8msXYc6%2FSxfHQ4uRpvzwcO4zDqhLrAonvLziJ1h2EcxWLKYGUUUizCUoZS%2FBjqkAXroNQ4V0WaWPceouy4eZ7%2Bi4E%2BQpvzX0Kub4IpV97XqtNxHWBtVb1T4qmP9ARyEg1gs9IkMYzY86ql9ChlUMyrZDsQXIKgWYERrP7tPtzSPHx9C2NoE8uQBeqK81Ob1NfMpLM8SRx%2FImJWKpk0dLMkV%2FJ9gfwjOkWe24sJ5DhTb3IN0jNg%2FB2b3cpcEM9sCb4jB2bWwC8wiMGlP18S6w%2FT0cP7D&X-Amz-Signature=57cfe87387ac53fe8eca7b318b1ac715cb37cccde5b3a89b26d3e4a4143734b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJDRKOO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7gqVeLMA3alyhkcu1I5EXFWiV0MffmmRJDBHY3MHvoQIhAJthB56Cix8g%2F93taGSIfndziel%2BthEsN6letr7dqBkvKv8DCEIQABoMNjM3NDIzMTgzODA1IgwYQyjkqlw3hhZUJZsq3ANKjJsfBG4vQi%2FUoQ%2Fx5pWVxld2Ejdw%2FblWkjNOSxf1mUdN%2FZksx75pIEjBLumG6aUWqoSF%2FrK7dpB2APWHv0lukhenN7ttKJe7s023VugHhGp1j2XmnswDdw7960mrqsav3kR8Jr%2F1Dj%2Fc5GXBhJYR3knYEJD7pvDcTMoLh7eoHFPQElCsv7vPP695OfzRlJXxuKKtSiRaNJ2nSs0oucsCZBhjJ6%2Fnz3du8TtUaErR56g89wyFhyrx%2BthA1jm%2FFprfdiNaBWiMLnFuqmTJy%2FNLb3MrAUnJyfMuh6LhoAouMPDRFcJZDy3c9sBt5f6DeGP%2BJR0f3poiO5ES8tfZkwITT9tYip4v7nY1A%2FWHj9TBXjEkjNR3ifiHL2U925a%2Bd6ddhzkcqqBlA5yMX9E2clA3zPREaMlMcoqz9Gsl%2FkJ%2Bjydve31syyovOo0xbUJmU60NvEtME96KoxaoWI6UxWvkHkkiL%2B4cXoJLQqGJJe%2F5nHSgwvkmQHSS4jhGZn5wPchvIso9sCZNf7vdWALNvytuWtY568BfaSODkbSCsumMqlqhtpcNtFAPg7BJGJtPj%2BEBfx0Su8msXYc6%2FSxfHQ4uRpvzwcO4zDqhLrAonvLziJ1h2EcxWLKYGUUUizCUoZS%2FBjqkAXroNQ4V0WaWPceouy4eZ7%2Bi4E%2BQpvzX0Kub4IpV97XqtNxHWBtVb1T4qmP9ARyEg1gs9IkMYzY86ql9ChlUMyrZDsQXIKgWYERrP7tPtzSPHx9C2NoE8uQBeqK81Ob1NfMpLM8SRx%2FImJWKpk0dLMkV%2FJ9gfwjOkWe24sJ5DhTb3IN0jNg%2FB2b3cpcEM9sCb4jB2bWwC8wiMGlP18S6w%2FT0cP7D&X-Amz-Signature=0e3e98765d2208ca3a59d06413e34e1c986efd0a8d5bcfa5883d50061555851c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJDRKOO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7gqVeLMA3alyhkcu1I5EXFWiV0MffmmRJDBHY3MHvoQIhAJthB56Cix8g%2F93taGSIfndziel%2BthEsN6letr7dqBkvKv8DCEIQABoMNjM3NDIzMTgzODA1IgwYQyjkqlw3hhZUJZsq3ANKjJsfBG4vQi%2FUoQ%2Fx5pWVxld2Ejdw%2FblWkjNOSxf1mUdN%2FZksx75pIEjBLumG6aUWqoSF%2FrK7dpB2APWHv0lukhenN7ttKJe7s023VugHhGp1j2XmnswDdw7960mrqsav3kR8Jr%2F1Dj%2Fc5GXBhJYR3knYEJD7pvDcTMoLh7eoHFPQElCsv7vPP695OfzRlJXxuKKtSiRaNJ2nSs0oucsCZBhjJ6%2Fnz3du8TtUaErR56g89wyFhyrx%2BthA1jm%2FFprfdiNaBWiMLnFuqmTJy%2FNLb3MrAUnJyfMuh6LhoAouMPDRFcJZDy3c9sBt5f6DeGP%2BJR0f3poiO5ES8tfZkwITT9tYip4v7nY1A%2FWHj9TBXjEkjNR3ifiHL2U925a%2Bd6ddhzkcqqBlA5yMX9E2clA3zPREaMlMcoqz9Gsl%2FkJ%2Bjydve31syyovOo0xbUJmU60NvEtME96KoxaoWI6UxWvkHkkiL%2B4cXoJLQqGJJe%2F5nHSgwvkmQHSS4jhGZn5wPchvIso9sCZNf7vdWALNvytuWtY568BfaSODkbSCsumMqlqhtpcNtFAPg7BJGJtPj%2BEBfx0Su8msXYc6%2FSxfHQ4uRpvzwcO4zDqhLrAonvLziJ1h2EcxWLKYGUUUizCUoZS%2FBjqkAXroNQ4V0WaWPceouy4eZ7%2Bi4E%2BQpvzX0Kub4IpV97XqtNxHWBtVb1T4qmP9ARyEg1gs9IkMYzY86ql9ChlUMyrZDsQXIKgWYERrP7tPtzSPHx9C2NoE8uQBeqK81Ob1NfMpLM8SRx%2FImJWKpk0dLMkV%2FJ9gfwjOkWe24sJ5DhTb3IN0jNg%2FB2b3cpcEM9sCb4jB2bWwC8wiMGlP18S6w%2FT0cP7D&X-Amz-Signature=0dc679d79bd7f61df9a872e2f04b6b4586c7d6e9ba607662b378252823354ba3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJDRKOO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7gqVeLMA3alyhkcu1I5EXFWiV0MffmmRJDBHY3MHvoQIhAJthB56Cix8g%2F93taGSIfndziel%2BthEsN6letr7dqBkvKv8DCEIQABoMNjM3NDIzMTgzODA1IgwYQyjkqlw3hhZUJZsq3ANKjJsfBG4vQi%2FUoQ%2Fx5pWVxld2Ejdw%2FblWkjNOSxf1mUdN%2FZksx75pIEjBLumG6aUWqoSF%2FrK7dpB2APWHv0lukhenN7ttKJe7s023VugHhGp1j2XmnswDdw7960mrqsav3kR8Jr%2F1Dj%2Fc5GXBhJYR3knYEJD7pvDcTMoLh7eoHFPQElCsv7vPP695OfzRlJXxuKKtSiRaNJ2nSs0oucsCZBhjJ6%2Fnz3du8TtUaErR56g89wyFhyrx%2BthA1jm%2FFprfdiNaBWiMLnFuqmTJy%2FNLb3MrAUnJyfMuh6LhoAouMPDRFcJZDy3c9sBt5f6DeGP%2BJR0f3poiO5ES8tfZkwITT9tYip4v7nY1A%2FWHj9TBXjEkjNR3ifiHL2U925a%2Bd6ddhzkcqqBlA5yMX9E2clA3zPREaMlMcoqz9Gsl%2FkJ%2Bjydve31syyovOo0xbUJmU60NvEtME96KoxaoWI6UxWvkHkkiL%2B4cXoJLQqGJJe%2F5nHSgwvkmQHSS4jhGZn5wPchvIso9sCZNf7vdWALNvytuWtY568BfaSODkbSCsumMqlqhtpcNtFAPg7BJGJtPj%2BEBfx0Su8msXYc6%2FSxfHQ4uRpvzwcO4zDqhLrAonvLziJ1h2EcxWLKYGUUUizCUoZS%2FBjqkAXroNQ4V0WaWPceouy4eZ7%2Bi4E%2BQpvzX0Kub4IpV97XqtNxHWBtVb1T4qmP9ARyEg1gs9IkMYzY86ql9ChlUMyrZDsQXIKgWYERrP7tPtzSPHx9C2NoE8uQBeqK81Ob1NfMpLM8SRx%2FImJWKpk0dLMkV%2FJ9gfwjOkWe24sJ5DhTb3IN0jNg%2FB2b3cpcEM9sCb4jB2bWwC8wiMGlP18S6w%2FT0cP7D&X-Amz-Signature=c0c0346ae73ad9f95098f0c450ea4fc02e11ab4d958cb546ccde01a5728399a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJDRKOO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7gqVeLMA3alyhkcu1I5EXFWiV0MffmmRJDBHY3MHvoQIhAJthB56Cix8g%2F93taGSIfndziel%2BthEsN6letr7dqBkvKv8DCEIQABoMNjM3NDIzMTgzODA1IgwYQyjkqlw3hhZUJZsq3ANKjJsfBG4vQi%2FUoQ%2Fx5pWVxld2Ejdw%2FblWkjNOSxf1mUdN%2FZksx75pIEjBLumG6aUWqoSF%2FrK7dpB2APWHv0lukhenN7ttKJe7s023VugHhGp1j2XmnswDdw7960mrqsav3kR8Jr%2F1Dj%2Fc5GXBhJYR3knYEJD7pvDcTMoLh7eoHFPQElCsv7vPP695OfzRlJXxuKKtSiRaNJ2nSs0oucsCZBhjJ6%2Fnz3du8TtUaErR56g89wyFhyrx%2BthA1jm%2FFprfdiNaBWiMLnFuqmTJy%2FNLb3MrAUnJyfMuh6LhoAouMPDRFcJZDy3c9sBt5f6DeGP%2BJR0f3poiO5ES8tfZkwITT9tYip4v7nY1A%2FWHj9TBXjEkjNR3ifiHL2U925a%2Bd6ddhzkcqqBlA5yMX9E2clA3zPREaMlMcoqz9Gsl%2FkJ%2Bjydve31syyovOo0xbUJmU60NvEtME96KoxaoWI6UxWvkHkkiL%2B4cXoJLQqGJJe%2F5nHSgwvkmQHSS4jhGZn5wPchvIso9sCZNf7vdWALNvytuWtY568BfaSODkbSCsumMqlqhtpcNtFAPg7BJGJtPj%2BEBfx0Su8msXYc6%2FSxfHQ4uRpvzwcO4zDqhLrAonvLziJ1h2EcxWLKYGUUUizCUoZS%2FBjqkAXroNQ4V0WaWPceouy4eZ7%2Bi4E%2BQpvzX0Kub4IpV97XqtNxHWBtVb1T4qmP9ARyEg1gs9IkMYzY86ql9ChlUMyrZDsQXIKgWYERrP7tPtzSPHx9C2NoE8uQBeqK81Ob1NfMpLM8SRx%2FImJWKpk0dLMkV%2FJ9gfwjOkWe24sJ5DhTb3IN0jNg%2FB2b3cpcEM9sCb4jB2bWwC8wiMGlP18S6w%2FT0cP7D&X-Amz-Signature=cce793579e908608ce4ac33ad80731379b6f834b751b902f353da531e54eabba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
