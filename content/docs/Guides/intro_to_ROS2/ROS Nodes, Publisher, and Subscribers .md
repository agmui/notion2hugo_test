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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5X6FE3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIsZa%2FldIq9bUP%2BgiiGYGXH%2Bu6Fm0Irfble76DmvUE8AiAVI2WtdtkS9N%2B01gQrcxOD2QXLR5VkuBTJ51GaZzzw5yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdqfrQuFOk74ar88cKtwD8PoSosNwwsj0Xc8zj6k8ngMN55J9PVcI0jWGVw%2F%2B%2B%2Fpi1QhBZgAhCjFsdRkKCLVeUTHjeRjI2LQWdhJnC7hJXd4lRUKqcF4VrSzc6VITCGzgc%2B2pCNyb211i%2B0AEjErTYHu1YDUAeS4OO%2Fx14CSclkV%2By7xzFoYc9275ckPcXHnOQqw7EvYPMPdAqIIv33fsOUJoFe7SPXCV4GmcW2R4JsFBJB%2Bh3nB3U%2BR%2BWTXTSUh2r5JkPtvpJT3jV9lhyWsOcHWVDZBnsAhUnS5S9Sp6qdrwATEba%2Br5Mmd56ntMtRhu%2FQ9N3v9xBCqJIIncp%2F1eNhW2A49HzbsbrwBTP8E4nvO2LqQaz8oSpSnFCuu3sJfCXPXK3CuvRXXthx9kXVJKnf7ZtX9PzMZR1c8GozAeFkqs7g2uCpLX4qfdohvds%2BqkSZhnN813iqczPHQTIK6VGetEhFndkZAZA2O68fF5QPbsXT5OD4hfNCJ0yc%2BqdhmRUFrXTbQRpjFjuak%2BMPdZuNzOiZk7L32Yb8OwJ8iEu2cjxMYJ7KEa3fzCEuZ8bG7052BOUlHxJEDiYAPM7J3topp6WsqWqJaPqZOqJeOh8iS1xQTYFJ1ifCcqGcsMeU2p3FWyRdchiKCspQEwnubdwQY6pgF0l59Kyqm56H1lb1SNNf13yPWUKOk6PHwFXXa2oIGZ8NMk%2FUhbliHkWS7KeUNtVyJPQZfMS4zOnV%2B5rHegfL1bH%2BZ3A3xZQ3QzRvaaQEWUXKcO%2FQmPYW3Pi2wTHD%2FEs5ye1VkMOkYliCqmxq%2FrmADtfin00MYFCARgxAU5SaeyfV7cEXj6OipGHOJA%2FXQR0DzqkPYmV%2BQTn6zOfvamDKVsGpospvO2&X-Amz-Signature=5e123819f2757ae86f403d2533d9f772dfa07865becfc9092da58c543b5734ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5X6FE3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIsZa%2FldIq9bUP%2BgiiGYGXH%2Bu6Fm0Irfble76DmvUE8AiAVI2WtdtkS9N%2B01gQrcxOD2QXLR5VkuBTJ51GaZzzw5yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdqfrQuFOk74ar88cKtwD8PoSosNwwsj0Xc8zj6k8ngMN55J9PVcI0jWGVw%2F%2B%2B%2Fpi1QhBZgAhCjFsdRkKCLVeUTHjeRjI2LQWdhJnC7hJXd4lRUKqcF4VrSzc6VITCGzgc%2B2pCNyb211i%2B0AEjErTYHu1YDUAeS4OO%2Fx14CSclkV%2By7xzFoYc9275ckPcXHnOQqw7EvYPMPdAqIIv33fsOUJoFe7SPXCV4GmcW2R4JsFBJB%2Bh3nB3U%2BR%2BWTXTSUh2r5JkPtvpJT3jV9lhyWsOcHWVDZBnsAhUnS5S9Sp6qdrwATEba%2Br5Mmd56ntMtRhu%2FQ9N3v9xBCqJIIncp%2F1eNhW2A49HzbsbrwBTP8E4nvO2LqQaz8oSpSnFCuu3sJfCXPXK3CuvRXXthx9kXVJKnf7ZtX9PzMZR1c8GozAeFkqs7g2uCpLX4qfdohvds%2BqkSZhnN813iqczPHQTIK6VGetEhFndkZAZA2O68fF5QPbsXT5OD4hfNCJ0yc%2BqdhmRUFrXTbQRpjFjuak%2BMPdZuNzOiZk7L32Yb8OwJ8iEu2cjxMYJ7KEa3fzCEuZ8bG7052BOUlHxJEDiYAPM7J3topp6WsqWqJaPqZOqJeOh8iS1xQTYFJ1ifCcqGcsMeU2p3FWyRdchiKCspQEwnubdwQY6pgF0l59Kyqm56H1lb1SNNf13yPWUKOk6PHwFXXa2oIGZ8NMk%2FUhbliHkWS7KeUNtVyJPQZfMS4zOnV%2B5rHegfL1bH%2BZ3A3xZQ3QzRvaaQEWUXKcO%2FQmPYW3Pi2wTHD%2FEs5ye1VkMOkYliCqmxq%2FrmADtfin00MYFCARgxAU5SaeyfV7cEXj6OipGHOJA%2FXQR0DzqkPYmV%2BQTn6zOfvamDKVsGpospvO2&X-Amz-Signature=90f581e516c6367ca35a31d14e5b7336d00e2e0668520c9635c479a4e9788f03&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5X6FE3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIsZa%2FldIq9bUP%2BgiiGYGXH%2Bu6Fm0Irfble76DmvUE8AiAVI2WtdtkS9N%2B01gQrcxOD2QXLR5VkuBTJ51GaZzzw5yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdqfrQuFOk74ar88cKtwD8PoSosNwwsj0Xc8zj6k8ngMN55J9PVcI0jWGVw%2F%2B%2B%2Fpi1QhBZgAhCjFsdRkKCLVeUTHjeRjI2LQWdhJnC7hJXd4lRUKqcF4VrSzc6VITCGzgc%2B2pCNyb211i%2B0AEjErTYHu1YDUAeS4OO%2Fx14CSclkV%2By7xzFoYc9275ckPcXHnOQqw7EvYPMPdAqIIv33fsOUJoFe7SPXCV4GmcW2R4JsFBJB%2Bh3nB3U%2BR%2BWTXTSUh2r5JkPtvpJT3jV9lhyWsOcHWVDZBnsAhUnS5S9Sp6qdrwATEba%2Br5Mmd56ntMtRhu%2FQ9N3v9xBCqJIIncp%2F1eNhW2A49HzbsbrwBTP8E4nvO2LqQaz8oSpSnFCuu3sJfCXPXK3CuvRXXthx9kXVJKnf7ZtX9PzMZR1c8GozAeFkqs7g2uCpLX4qfdohvds%2BqkSZhnN813iqczPHQTIK6VGetEhFndkZAZA2O68fF5QPbsXT5OD4hfNCJ0yc%2BqdhmRUFrXTbQRpjFjuak%2BMPdZuNzOiZk7L32Yb8OwJ8iEu2cjxMYJ7KEa3fzCEuZ8bG7052BOUlHxJEDiYAPM7J3topp6WsqWqJaPqZOqJeOh8iS1xQTYFJ1ifCcqGcsMeU2p3FWyRdchiKCspQEwnubdwQY6pgF0l59Kyqm56H1lb1SNNf13yPWUKOk6PHwFXXa2oIGZ8NMk%2FUhbliHkWS7KeUNtVyJPQZfMS4zOnV%2B5rHegfL1bH%2BZ3A3xZQ3QzRvaaQEWUXKcO%2FQmPYW3Pi2wTHD%2FEs5ye1VkMOkYliCqmxq%2FrmADtfin00MYFCARgxAU5SaeyfV7cEXj6OipGHOJA%2FXQR0DzqkPYmV%2BQTn6zOfvamDKVsGpospvO2&X-Amz-Signature=be64775f14a6636fe35d87ba3f83ba9c0a249e33d0065ba0277780e5b6dee1bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5X6FE3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIsZa%2FldIq9bUP%2BgiiGYGXH%2Bu6Fm0Irfble76DmvUE8AiAVI2WtdtkS9N%2B01gQrcxOD2QXLR5VkuBTJ51GaZzzw5yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdqfrQuFOk74ar88cKtwD8PoSosNwwsj0Xc8zj6k8ngMN55J9PVcI0jWGVw%2F%2B%2B%2Fpi1QhBZgAhCjFsdRkKCLVeUTHjeRjI2LQWdhJnC7hJXd4lRUKqcF4VrSzc6VITCGzgc%2B2pCNyb211i%2B0AEjErTYHu1YDUAeS4OO%2Fx14CSclkV%2By7xzFoYc9275ckPcXHnOQqw7EvYPMPdAqIIv33fsOUJoFe7SPXCV4GmcW2R4JsFBJB%2Bh3nB3U%2BR%2BWTXTSUh2r5JkPtvpJT3jV9lhyWsOcHWVDZBnsAhUnS5S9Sp6qdrwATEba%2Br5Mmd56ntMtRhu%2FQ9N3v9xBCqJIIncp%2F1eNhW2A49HzbsbrwBTP8E4nvO2LqQaz8oSpSnFCuu3sJfCXPXK3CuvRXXthx9kXVJKnf7ZtX9PzMZR1c8GozAeFkqs7g2uCpLX4qfdohvds%2BqkSZhnN813iqczPHQTIK6VGetEhFndkZAZA2O68fF5QPbsXT5OD4hfNCJ0yc%2BqdhmRUFrXTbQRpjFjuak%2BMPdZuNzOiZk7L32Yb8OwJ8iEu2cjxMYJ7KEa3fzCEuZ8bG7052BOUlHxJEDiYAPM7J3topp6WsqWqJaPqZOqJeOh8iS1xQTYFJ1ifCcqGcsMeU2p3FWyRdchiKCspQEwnubdwQY6pgF0l59Kyqm56H1lb1SNNf13yPWUKOk6PHwFXXa2oIGZ8NMk%2FUhbliHkWS7KeUNtVyJPQZfMS4zOnV%2B5rHegfL1bH%2BZ3A3xZQ3QzRvaaQEWUXKcO%2FQmPYW3Pi2wTHD%2FEs5ye1VkMOkYliCqmxq%2FrmADtfin00MYFCARgxAU5SaeyfV7cEXj6OipGHOJA%2FXQR0DzqkPYmV%2BQTn6zOfvamDKVsGpospvO2&X-Amz-Signature=28796f01dd696d8ce59fd2b1186af29cd7babca919087a6015d5aeb7f4132950&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5X6FE3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIsZa%2FldIq9bUP%2BgiiGYGXH%2Bu6Fm0Irfble76DmvUE8AiAVI2WtdtkS9N%2B01gQrcxOD2QXLR5VkuBTJ51GaZzzw5yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdqfrQuFOk74ar88cKtwD8PoSosNwwsj0Xc8zj6k8ngMN55J9PVcI0jWGVw%2F%2B%2B%2Fpi1QhBZgAhCjFsdRkKCLVeUTHjeRjI2LQWdhJnC7hJXd4lRUKqcF4VrSzc6VITCGzgc%2B2pCNyb211i%2B0AEjErTYHu1YDUAeS4OO%2Fx14CSclkV%2By7xzFoYc9275ckPcXHnOQqw7EvYPMPdAqIIv33fsOUJoFe7SPXCV4GmcW2R4JsFBJB%2Bh3nB3U%2BR%2BWTXTSUh2r5JkPtvpJT3jV9lhyWsOcHWVDZBnsAhUnS5S9Sp6qdrwATEba%2Br5Mmd56ntMtRhu%2FQ9N3v9xBCqJIIncp%2F1eNhW2A49HzbsbrwBTP8E4nvO2LqQaz8oSpSnFCuu3sJfCXPXK3CuvRXXthx9kXVJKnf7ZtX9PzMZR1c8GozAeFkqs7g2uCpLX4qfdohvds%2BqkSZhnN813iqczPHQTIK6VGetEhFndkZAZA2O68fF5QPbsXT5OD4hfNCJ0yc%2BqdhmRUFrXTbQRpjFjuak%2BMPdZuNzOiZk7L32Yb8OwJ8iEu2cjxMYJ7KEa3fzCEuZ8bG7052BOUlHxJEDiYAPM7J3topp6WsqWqJaPqZOqJeOh8iS1xQTYFJ1ifCcqGcsMeU2p3FWyRdchiKCspQEwnubdwQY6pgF0l59Kyqm56H1lb1SNNf13yPWUKOk6PHwFXXa2oIGZ8NMk%2FUhbliHkWS7KeUNtVyJPQZfMS4zOnV%2B5rHegfL1bH%2BZ3A3xZQ3QzRvaaQEWUXKcO%2FQmPYW3Pi2wTHD%2FEs5ye1VkMOkYliCqmxq%2FrmADtfin00MYFCARgxAU5SaeyfV7cEXj6OipGHOJA%2FXQR0DzqkPYmV%2BQTn6zOfvamDKVsGpospvO2&X-Amz-Signature=e4bc69aa1bec9ef2200b13ab78e718ed179e4632913d9a8d7e78f49a1f27b4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5X6FE3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIsZa%2FldIq9bUP%2BgiiGYGXH%2Bu6Fm0Irfble76DmvUE8AiAVI2WtdtkS9N%2B01gQrcxOD2QXLR5VkuBTJ51GaZzzw5yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdqfrQuFOk74ar88cKtwD8PoSosNwwsj0Xc8zj6k8ngMN55J9PVcI0jWGVw%2F%2B%2B%2Fpi1QhBZgAhCjFsdRkKCLVeUTHjeRjI2LQWdhJnC7hJXd4lRUKqcF4VrSzc6VITCGzgc%2B2pCNyb211i%2B0AEjErTYHu1YDUAeS4OO%2Fx14CSclkV%2By7xzFoYc9275ckPcXHnOQqw7EvYPMPdAqIIv33fsOUJoFe7SPXCV4GmcW2R4JsFBJB%2Bh3nB3U%2BR%2BWTXTSUh2r5JkPtvpJT3jV9lhyWsOcHWVDZBnsAhUnS5S9Sp6qdrwATEba%2Br5Mmd56ntMtRhu%2FQ9N3v9xBCqJIIncp%2F1eNhW2A49HzbsbrwBTP8E4nvO2LqQaz8oSpSnFCuu3sJfCXPXK3CuvRXXthx9kXVJKnf7ZtX9PzMZR1c8GozAeFkqs7g2uCpLX4qfdohvds%2BqkSZhnN813iqczPHQTIK6VGetEhFndkZAZA2O68fF5QPbsXT5OD4hfNCJ0yc%2BqdhmRUFrXTbQRpjFjuak%2BMPdZuNzOiZk7L32Yb8OwJ8iEu2cjxMYJ7KEa3fzCEuZ8bG7052BOUlHxJEDiYAPM7J3topp6WsqWqJaPqZOqJeOh8iS1xQTYFJ1ifCcqGcsMeU2p3FWyRdchiKCspQEwnubdwQY6pgF0l59Kyqm56H1lb1SNNf13yPWUKOk6PHwFXXa2oIGZ8NMk%2FUhbliHkWS7KeUNtVyJPQZfMS4zOnV%2B5rHegfL1bH%2BZ3A3xZQ3QzRvaaQEWUXKcO%2FQmPYW3Pi2wTHD%2FEs5ye1VkMOkYliCqmxq%2FrmADtfin00MYFCARgxAU5SaeyfV7cEXj6OipGHOJA%2FXQR0DzqkPYmV%2BQTn6zOfvamDKVsGpospvO2&X-Amz-Signature=f8dd473be2543ee80462979442a44b25b1b9c83d0d978d3dbb97cd8cc0d93dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5X6FE3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIsZa%2FldIq9bUP%2BgiiGYGXH%2Bu6Fm0Irfble76DmvUE8AiAVI2WtdtkS9N%2B01gQrcxOD2QXLR5VkuBTJ51GaZzzw5yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdqfrQuFOk74ar88cKtwD8PoSosNwwsj0Xc8zj6k8ngMN55J9PVcI0jWGVw%2F%2B%2B%2Fpi1QhBZgAhCjFsdRkKCLVeUTHjeRjI2LQWdhJnC7hJXd4lRUKqcF4VrSzc6VITCGzgc%2B2pCNyb211i%2B0AEjErTYHu1YDUAeS4OO%2Fx14CSclkV%2By7xzFoYc9275ckPcXHnOQqw7EvYPMPdAqIIv33fsOUJoFe7SPXCV4GmcW2R4JsFBJB%2Bh3nB3U%2BR%2BWTXTSUh2r5JkPtvpJT3jV9lhyWsOcHWVDZBnsAhUnS5S9Sp6qdrwATEba%2Br5Mmd56ntMtRhu%2FQ9N3v9xBCqJIIncp%2F1eNhW2A49HzbsbrwBTP8E4nvO2LqQaz8oSpSnFCuu3sJfCXPXK3CuvRXXthx9kXVJKnf7ZtX9PzMZR1c8GozAeFkqs7g2uCpLX4qfdohvds%2BqkSZhnN813iqczPHQTIK6VGetEhFndkZAZA2O68fF5QPbsXT5OD4hfNCJ0yc%2BqdhmRUFrXTbQRpjFjuak%2BMPdZuNzOiZk7L32Yb8OwJ8iEu2cjxMYJ7KEa3fzCEuZ8bG7052BOUlHxJEDiYAPM7J3topp6WsqWqJaPqZOqJeOh8iS1xQTYFJ1ifCcqGcsMeU2p3FWyRdchiKCspQEwnubdwQY6pgF0l59Kyqm56H1lb1SNNf13yPWUKOk6PHwFXXa2oIGZ8NMk%2FUhbliHkWS7KeUNtVyJPQZfMS4zOnV%2B5rHegfL1bH%2BZ3A3xZQ3QzRvaaQEWUXKcO%2FQmPYW3Pi2wTHD%2FEs5ye1VkMOkYliCqmxq%2FrmADtfin00MYFCARgxAU5SaeyfV7cEXj6OipGHOJA%2FXQR0DzqkPYmV%2BQTn6zOfvamDKVsGpospvO2&X-Amz-Signature=4c54e8fce92efcdf0423a9896bdd9658cbea4163bc3d6d1fd3bb45f4a8c725c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW5X6FE3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIsZa%2FldIq9bUP%2BgiiGYGXH%2Bu6Fm0Irfble76DmvUE8AiAVI2WtdtkS9N%2B01gQrcxOD2QXLR5VkuBTJ51GaZzzw5yr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMdqfrQuFOk74ar88cKtwD8PoSosNwwsj0Xc8zj6k8ngMN55J9PVcI0jWGVw%2F%2B%2B%2Fpi1QhBZgAhCjFsdRkKCLVeUTHjeRjI2LQWdhJnC7hJXd4lRUKqcF4VrSzc6VITCGzgc%2B2pCNyb211i%2B0AEjErTYHu1YDUAeS4OO%2Fx14CSclkV%2By7xzFoYc9275ckPcXHnOQqw7EvYPMPdAqIIv33fsOUJoFe7SPXCV4GmcW2R4JsFBJB%2Bh3nB3U%2BR%2BWTXTSUh2r5JkPtvpJT3jV9lhyWsOcHWVDZBnsAhUnS5S9Sp6qdrwATEba%2Br5Mmd56ntMtRhu%2FQ9N3v9xBCqJIIncp%2F1eNhW2A49HzbsbrwBTP8E4nvO2LqQaz8oSpSnFCuu3sJfCXPXK3CuvRXXthx9kXVJKnf7ZtX9PzMZR1c8GozAeFkqs7g2uCpLX4qfdohvds%2BqkSZhnN813iqczPHQTIK6VGetEhFndkZAZA2O68fF5QPbsXT5OD4hfNCJ0yc%2BqdhmRUFrXTbQRpjFjuak%2BMPdZuNzOiZk7L32Yb8OwJ8iEu2cjxMYJ7KEa3fzCEuZ8bG7052BOUlHxJEDiYAPM7J3topp6WsqWqJaPqZOqJeOh8iS1xQTYFJ1ifCcqGcsMeU2p3FWyRdchiKCspQEwnubdwQY6pgF0l59Kyqm56H1lb1SNNf13yPWUKOk6PHwFXXa2oIGZ8NMk%2FUhbliHkWS7KeUNtVyJPQZfMS4zOnV%2B5rHegfL1bH%2BZ3A3xZQ3QzRvaaQEWUXKcO%2FQmPYW3Pi2wTHD%2FEs5ye1VkMOkYliCqmxq%2FrmADtfin00MYFCARgxAU5SaeyfV7cEXj6OipGHOJA%2FXQR0DzqkPYmV%2BQTn6zOfvamDKVsGpospvO2&X-Amz-Signature=6990f273e715084ba99ba2ebf83900517f501e8ffa704119608d4315914cfc4f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
