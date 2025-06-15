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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462JQAIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCPEk7gByzeCLo%2FutKdjOg16An8wWRaYVnBLfLzKt7fDQIhAKTgsFkmRkaK08lbtOo4P%2BKFkKRNvO0Xm8mzVbbMnVLXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxLvaAV8uII30SWZRwq3AMe9Z%2BS797mT88nDKvgHDnbfGEq3N3sb1xjZfFSWpYNxrdPvjNF1BjY2ZWe458xOrDKRX%2F8arp8%2Fw4i8XaBLUcRsPUBphXNGuDN%2BEURcXLqg0cWHP3YgGHbn4E8%2BDwjYbhItc9avHV3tOzCh50hwebY051Bzygxvyvx3sD4pCG9I9Vv%2B%2BYhFc6gix2Fa%2FJQ%2Fk9Il83ns1KNOHH6U1JL2GrH8Q6EBOi9JjkusGsD4plD2ZGRgQKkN0SsZikcf5lHZz4pQrNZHkKB2wJPXZ%2Br9r3XXew6THOE2cSbMAFjE%2FM1YKkppjSUtHEo7dMoYCKzCR3HzCIE7i%2Bf33UEY0Gs%2F1Azr0OQAsKt1KU8XJcNBvzFc0a2Yd3jhe9dFfFWPwMtDtv3PTZoW2sq7%2F3lFNR%2BZRRdGh6v8zftuNx0GhgJL2AOqtFk9QRg1Pb6c4HkQGdR99OSiA41JVKKHwmOQ5VevvXrHYNBXz7degl8YkjWgM%2FAAYeAAQfvyWL5cgtVV5cnVh4Dh96dL6yQgkLmyfgkb6mnJu8%2F9JRHg2wtBnm9RPnUluR0UE2V3ow3PtJh%2FFwyG9i9xLulJ%2FB6PEhtl17p8QVv3MAEADC8FS6QlCAOuLjUw%2Bb%2BCGdjFxGDYrSTYzDphLzCBjqkATI8f2v6lfCFppec0y9A7tHikgXmNxyeMcZowcjG22qRhU9PCSpfogXQfqgPY%2BphhMdzlKtbH%2F3qms4KZ%2B55OWZWu0hO4mKbUqfEXXVNnpid%2FwXTUhI3%2Bj54nLUVURaB%2Bdgke0KsHwiKPWdVqtGvS8HP3Km2OUbzGikidBg9HHgd6j5bHc8UueRr2vTxfcFEBlnHImEoJAaT%2B3uCGQn1lZYM7Hry&X-Amz-Signature=dd7215d2284a6275e9d6385512b6017af5e07b0f3a0f589d7b2f9038e2259100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462JQAIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCPEk7gByzeCLo%2FutKdjOg16An8wWRaYVnBLfLzKt7fDQIhAKTgsFkmRkaK08lbtOo4P%2BKFkKRNvO0Xm8mzVbbMnVLXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxLvaAV8uII30SWZRwq3AMe9Z%2BS797mT88nDKvgHDnbfGEq3N3sb1xjZfFSWpYNxrdPvjNF1BjY2ZWe458xOrDKRX%2F8arp8%2Fw4i8XaBLUcRsPUBphXNGuDN%2BEURcXLqg0cWHP3YgGHbn4E8%2BDwjYbhItc9avHV3tOzCh50hwebY051Bzygxvyvx3sD4pCG9I9Vv%2B%2BYhFc6gix2Fa%2FJQ%2Fk9Il83ns1KNOHH6U1JL2GrH8Q6EBOi9JjkusGsD4plD2ZGRgQKkN0SsZikcf5lHZz4pQrNZHkKB2wJPXZ%2Br9r3XXew6THOE2cSbMAFjE%2FM1YKkppjSUtHEo7dMoYCKzCR3HzCIE7i%2Bf33UEY0Gs%2F1Azr0OQAsKt1KU8XJcNBvzFc0a2Yd3jhe9dFfFWPwMtDtv3PTZoW2sq7%2F3lFNR%2BZRRdGh6v8zftuNx0GhgJL2AOqtFk9QRg1Pb6c4HkQGdR99OSiA41JVKKHwmOQ5VevvXrHYNBXz7degl8YkjWgM%2FAAYeAAQfvyWL5cgtVV5cnVh4Dh96dL6yQgkLmyfgkb6mnJu8%2F9JRHg2wtBnm9RPnUluR0UE2V3ow3PtJh%2FFwyG9i9xLulJ%2FB6PEhtl17p8QVv3MAEADC8FS6QlCAOuLjUw%2Bb%2BCGdjFxGDYrSTYzDphLzCBjqkATI8f2v6lfCFppec0y9A7tHikgXmNxyeMcZowcjG22qRhU9PCSpfogXQfqgPY%2BphhMdzlKtbH%2F3qms4KZ%2B55OWZWu0hO4mKbUqfEXXVNnpid%2FwXTUhI3%2Bj54nLUVURaB%2Bdgke0KsHwiKPWdVqtGvS8HP3Km2OUbzGikidBg9HHgd6j5bHc8UueRr2vTxfcFEBlnHImEoJAaT%2B3uCGQn1lZYM7Hry&X-Amz-Signature=313a97e4847728acf442b9f0f65e48c3225abda241776686b270a0fa840461ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462JQAIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCPEk7gByzeCLo%2FutKdjOg16An8wWRaYVnBLfLzKt7fDQIhAKTgsFkmRkaK08lbtOo4P%2BKFkKRNvO0Xm8mzVbbMnVLXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxLvaAV8uII30SWZRwq3AMe9Z%2BS797mT88nDKvgHDnbfGEq3N3sb1xjZfFSWpYNxrdPvjNF1BjY2ZWe458xOrDKRX%2F8arp8%2Fw4i8XaBLUcRsPUBphXNGuDN%2BEURcXLqg0cWHP3YgGHbn4E8%2BDwjYbhItc9avHV3tOzCh50hwebY051Bzygxvyvx3sD4pCG9I9Vv%2B%2BYhFc6gix2Fa%2FJQ%2Fk9Il83ns1KNOHH6U1JL2GrH8Q6EBOi9JjkusGsD4plD2ZGRgQKkN0SsZikcf5lHZz4pQrNZHkKB2wJPXZ%2Br9r3XXew6THOE2cSbMAFjE%2FM1YKkppjSUtHEo7dMoYCKzCR3HzCIE7i%2Bf33UEY0Gs%2F1Azr0OQAsKt1KU8XJcNBvzFc0a2Yd3jhe9dFfFWPwMtDtv3PTZoW2sq7%2F3lFNR%2BZRRdGh6v8zftuNx0GhgJL2AOqtFk9QRg1Pb6c4HkQGdR99OSiA41JVKKHwmOQ5VevvXrHYNBXz7degl8YkjWgM%2FAAYeAAQfvyWL5cgtVV5cnVh4Dh96dL6yQgkLmyfgkb6mnJu8%2F9JRHg2wtBnm9RPnUluR0UE2V3ow3PtJh%2FFwyG9i9xLulJ%2FB6PEhtl17p8QVv3MAEADC8FS6QlCAOuLjUw%2Bb%2BCGdjFxGDYrSTYzDphLzCBjqkATI8f2v6lfCFppec0y9A7tHikgXmNxyeMcZowcjG22qRhU9PCSpfogXQfqgPY%2BphhMdzlKtbH%2F3qms4KZ%2B55OWZWu0hO4mKbUqfEXXVNnpid%2FwXTUhI3%2Bj54nLUVURaB%2Bdgke0KsHwiKPWdVqtGvS8HP3Km2OUbzGikidBg9HHgd6j5bHc8UueRr2vTxfcFEBlnHImEoJAaT%2B3uCGQn1lZYM7Hry&X-Amz-Signature=a7f17e3c301a187aaae47f8c87d96998b1cc3c4f07299a7d0df746af3d140c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462JQAIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCPEk7gByzeCLo%2FutKdjOg16An8wWRaYVnBLfLzKt7fDQIhAKTgsFkmRkaK08lbtOo4P%2BKFkKRNvO0Xm8mzVbbMnVLXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxLvaAV8uII30SWZRwq3AMe9Z%2BS797mT88nDKvgHDnbfGEq3N3sb1xjZfFSWpYNxrdPvjNF1BjY2ZWe458xOrDKRX%2F8arp8%2Fw4i8XaBLUcRsPUBphXNGuDN%2BEURcXLqg0cWHP3YgGHbn4E8%2BDwjYbhItc9avHV3tOzCh50hwebY051Bzygxvyvx3sD4pCG9I9Vv%2B%2BYhFc6gix2Fa%2FJQ%2Fk9Il83ns1KNOHH6U1JL2GrH8Q6EBOi9JjkusGsD4plD2ZGRgQKkN0SsZikcf5lHZz4pQrNZHkKB2wJPXZ%2Br9r3XXew6THOE2cSbMAFjE%2FM1YKkppjSUtHEo7dMoYCKzCR3HzCIE7i%2Bf33UEY0Gs%2F1Azr0OQAsKt1KU8XJcNBvzFc0a2Yd3jhe9dFfFWPwMtDtv3PTZoW2sq7%2F3lFNR%2BZRRdGh6v8zftuNx0GhgJL2AOqtFk9QRg1Pb6c4HkQGdR99OSiA41JVKKHwmOQ5VevvXrHYNBXz7degl8YkjWgM%2FAAYeAAQfvyWL5cgtVV5cnVh4Dh96dL6yQgkLmyfgkb6mnJu8%2F9JRHg2wtBnm9RPnUluR0UE2V3ow3PtJh%2FFwyG9i9xLulJ%2FB6PEhtl17p8QVv3MAEADC8FS6QlCAOuLjUw%2Bb%2BCGdjFxGDYrSTYzDphLzCBjqkATI8f2v6lfCFppec0y9A7tHikgXmNxyeMcZowcjG22qRhU9PCSpfogXQfqgPY%2BphhMdzlKtbH%2F3qms4KZ%2B55OWZWu0hO4mKbUqfEXXVNnpid%2FwXTUhI3%2Bj54nLUVURaB%2Bdgke0KsHwiKPWdVqtGvS8HP3Km2OUbzGikidBg9HHgd6j5bHc8UueRr2vTxfcFEBlnHImEoJAaT%2B3uCGQn1lZYM7Hry&X-Amz-Signature=70e4044035b484ecaba1b4ab546aeb92ea98c25a0176741852d3f895593c35e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462JQAIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCPEk7gByzeCLo%2FutKdjOg16An8wWRaYVnBLfLzKt7fDQIhAKTgsFkmRkaK08lbtOo4P%2BKFkKRNvO0Xm8mzVbbMnVLXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxLvaAV8uII30SWZRwq3AMe9Z%2BS797mT88nDKvgHDnbfGEq3N3sb1xjZfFSWpYNxrdPvjNF1BjY2ZWe458xOrDKRX%2F8arp8%2Fw4i8XaBLUcRsPUBphXNGuDN%2BEURcXLqg0cWHP3YgGHbn4E8%2BDwjYbhItc9avHV3tOzCh50hwebY051Bzygxvyvx3sD4pCG9I9Vv%2B%2BYhFc6gix2Fa%2FJQ%2Fk9Il83ns1KNOHH6U1JL2GrH8Q6EBOi9JjkusGsD4plD2ZGRgQKkN0SsZikcf5lHZz4pQrNZHkKB2wJPXZ%2Br9r3XXew6THOE2cSbMAFjE%2FM1YKkppjSUtHEo7dMoYCKzCR3HzCIE7i%2Bf33UEY0Gs%2F1Azr0OQAsKt1KU8XJcNBvzFc0a2Yd3jhe9dFfFWPwMtDtv3PTZoW2sq7%2F3lFNR%2BZRRdGh6v8zftuNx0GhgJL2AOqtFk9QRg1Pb6c4HkQGdR99OSiA41JVKKHwmOQ5VevvXrHYNBXz7degl8YkjWgM%2FAAYeAAQfvyWL5cgtVV5cnVh4Dh96dL6yQgkLmyfgkb6mnJu8%2F9JRHg2wtBnm9RPnUluR0UE2V3ow3PtJh%2FFwyG9i9xLulJ%2FB6PEhtl17p8QVv3MAEADC8FS6QlCAOuLjUw%2Bb%2BCGdjFxGDYrSTYzDphLzCBjqkATI8f2v6lfCFppec0y9A7tHikgXmNxyeMcZowcjG22qRhU9PCSpfogXQfqgPY%2BphhMdzlKtbH%2F3qms4KZ%2B55OWZWu0hO4mKbUqfEXXVNnpid%2FwXTUhI3%2Bj54nLUVURaB%2Bdgke0KsHwiKPWdVqtGvS8HP3Km2OUbzGikidBg9HHgd6j5bHc8UueRr2vTxfcFEBlnHImEoJAaT%2B3uCGQn1lZYM7Hry&X-Amz-Signature=f2ce789390c6805e17e2e89c653365047a326d46782828bcb5df6272b201e65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462JQAIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCPEk7gByzeCLo%2FutKdjOg16An8wWRaYVnBLfLzKt7fDQIhAKTgsFkmRkaK08lbtOo4P%2BKFkKRNvO0Xm8mzVbbMnVLXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxLvaAV8uII30SWZRwq3AMe9Z%2BS797mT88nDKvgHDnbfGEq3N3sb1xjZfFSWpYNxrdPvjNF1BjY2ZWe458xOrDKRX%2F8arp8%2Fw4i8XaBLUcRsPUBphXNGuDN%2BEURcXLqg0cWHP3YgGHbn4E8%2BDwjYbhItc9avHV3tOzCh50hwebY051Bzygxvyvx3sD4pCG9I9Vv%2B%2BYhFc6gix2Fa%2FJQ%2Fk9Il83ns1KNOHH6U1JL2GrH8Q6EBOi9JjkusGsD4plD2ZGRgQKkN0SsZikcf5lHZz4pQrNZHkKB2wJPXZ%2Br9r3XXew6THOE2cSbMAFjE%2FM1YKkppjSUtHEo7dMoYCKzCR3HzCIE7i%2Bf33UEY0Gs%2F1Azr0OQAsKt1KU8XJcNBvzFc0a2Yd3jhe9dFfFWPwMtDtv3PTZoW2sq7%2F3lFNR%2BZRRdGh6v8zftuNx0GhgJL2AOqtFk9QRg1Pb6c4HkQGdR99OSiA41JVKKHwmOQ5VevvXrHYNBXz7degl8YkjWgM%2FAAYeAAQfvyWL5cgtVV5cnVh4Dh96dL6yQgkLmyfgkb6mnJu8%2F9JRHg2wtBnm9RPnUluR0UE2V3ow3PtJh%2FFwyG9i9xLulJ%2FB6PEhtl17p8QVv3MAEADC8FS6QlCAOuLjUw%2Bb%2BCGdjFxGDYrSTYzDphLzCBjqkATI8f2v6lfCFppec0y9A7tHikgXmNxyeMcZowcjG22qRhU9PCSpfogXQfqgPY%2BphhMdzlKtbH%2F3qms4KZ%2B55OWZWu0hO4mKbUqfEXXVNnpid%2FwXTUhI3%2Bj54nLUVURaB%2Bdgke0KsHwiKPWdVqtGvS8HP3Km2OUbzGikidBg9HHgd6j5bHc8UueRr2vTxfcFEBlnHImEoJAaT%2B3uCGQn1lZYM7Hry&X-Amz-Signature=e9d6bffd9a2f5654cdd0abd714ed1ba894b4b67e0ef2b8b6cc737bf02c5ba9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462JQAIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCPEk7gByzeCLo%2FutKdjOg16An8wWRaYVnBLfLzKt7fDQIhAKTgsFkmRkaK08lbtOo4P%2BKFkKRNvO0Xm8mzVbbMnVLXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxLvaAV8uII30SWZRwq3AMe9Z%2BS797mT88nDKvgHDnbfGEq3N3sb1xjZfFSWpYNxrdPvjNF1BjY2ZWe458xOrDKRX%2F8arp8%2Fw4i8XaBLUcRsPUBphXNGuDN%2BEURcXLqg0cWHP3YgGHbn4E8%2BDwjYbhItc9avHV3tOzCh50hwebY051Bzygxvyvx3sD4pCG9I9Vv%2B%2BYhFc6gix2Fa%2FJQ%2Fk9Il83ns1KNOHH6U1JL2GrH8Q6EBOi9JjkusGsD4plD2ZGRgQKkN0SsZikcf5lHZz4pQrNZHkKB2wJPXZ%2Br9r3XXew6THOE2cSbMAFjE%2FM1YKkppjSUtHEo7dMoYCKzCR3HzCIE7i%2Bf33UEY0Gs%2F1Azr0OQAsKt1KU8XJcNBvzFc0a2Yd3jhe9dFfFWPwMtDtv3PTZoW2sq7%2F3lFNR%2BZRRdGh6v8zftuNx0GhgJL2AOqtFk9QRg1Pb6c4HkQGdR99OSiA41JVKKHwmOQ5VevvXrHYNBXz7degl8YkjWgM%2FAAYeAAQfvyWL5cgtVV5cnVh4Dh96dL6yQgkLmyfgkb6mnJu8%2F9JRHg2wtBnm9RPnUluR0UE2V3ow3PtJh%2FFwyG9i9xLulJ%2FB6PEhtl17p8QVv3MAEADC8FS6QlCAOuLjUw%2Bb%2BCGdjFxGDYrSTYzDphLzCBjqkATI8f2v6lfCFppec0y9A7tHikgXmNxyeMcZowcjG22qRhU9PCSpfogXQfqgPY%2BphhMdzlKtbH%2F3qms4KZ%2B55OWZWu0hO4mKbUqfEXXVNnpid%2FwXTUhI3%2Bj54nLUVURaB%2Bdgke0KsHwiKPWdVqtGvS8HP3Km2OUbzGikidBg9HHgd6j5bHc8UueRr2vTxfcFEBlnHImEoJAaT%2B3uCGQn1lZYM7Hry&X-Amz-Signature=b1c14519ce50e8786361b5462dbb7d05a6a41f8aaf5a31b7360143717a990c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466462JQAIC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCPEk7gByzeCLo%2FutKdjOg16An8wWRaYVnBLfLzKt7fDQIhAKTgsFkmRkaK08lbtOo4P%2BKFkKRNvO0Xm8mzVbbMnVLXKv8DCEsQABoMNjM3NDIzMTgzODA1IgxLvaAV8uII30SWZRwq3AMe9Z%2BS797mT88nDKvgHDnbfGEq3N3sb1xjZfFSWpYNxrdPvjNF1BjY2ZWe458xOrDKRX%2F8arp8%2Fw4i8XaBLUcRsPUBphXNGuDN%2BEURcXLqg0cWHP3YgGHbn4E8%2BDwjYbhItc9avHV3tOzCh50hwebY051Bzygxvyvx3sD4pCG9I9Vv%2B%2BYhFc6gix2Fa%2FJQ%2Fk9Il83ns1KNOHH6U1JL2GrH8Q6EBOi9JjkusGsD4plD2ZGRgQKkN0SsZikcf5lHZz4pQrNZHkKB2wJPXZ%2Br9r3XXew6THOE2cSbMAFjE%2FM1YKkppjSUtHEo7dMoYCKzCR3HzCIE7i%2Bf33UEY0Gs%2F1Azr0OQAsKt1KU8XJcNBvzFc0a2Yd3jhe9dFfFWPwMtDtv3PTZoW2sq7%2F3lFNR%2BZRRdGh6v8zftuNx0GhgJL2AOqtFk9QRg1Pb6c4HkQGdR99OSiA41JVKKHwmOQ5VevvXrHYNBXz7degl8YkjWgM%2FAAYeAAQfvyWL5cgtVV5cnVh4Dh96dL6yQgkLmyfgkb6mnJu8%2F9JRHg2wtBnm9RPnUluR0UE2V3ow3PtJh%2FFwyG9i9xLulJ%2FB6PEhtl17p8QVv3MAEADC8FS6QlCAOuLjUw%2Bb%2BCGdjFxGDYrSTYzDphLzCBjqkATI8f2v6lfCFppec0y9A7tHikgXmNxyeMcZowcjG22qRhU9PCSpfogXQfqgPY%2BphhMdzlKtbH%2F3qms4KZ%2B55OWZWu0hO4mKbUqfEXXVNnpid%2FwXTUhI3%2Bj54nLUVURaB%2Bdgke0KsHwiKPWdVqtGvS8HP3Km2OUbzGikidBg9HHgd6j5bHc8UueRr2vTxfcFEBlnHImEoJAaT%2B3uCGQn1lZYM7Hry&X-Amz-Signature=e93434927260aedc4fb57b780f54cb1f271105ff2840a4d1e9ee4cb804820931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
