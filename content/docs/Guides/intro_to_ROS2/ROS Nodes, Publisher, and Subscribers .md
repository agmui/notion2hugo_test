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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXI7BMG7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDn9XapFQF0IpyqvLY8Sw9rPY7cbZOhCRCf%2B4SCx%2FPvqAiB4iOrTxmmYUAThwNTjYO%2Fopa4GncV7g6bI17bKZLRNEiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v3S5IFfQ7pduY2mKtwDKOu5PANSIpVz0DlA6hS9iZFE%2B63aKx1dXYbQJzOKfqbJfHpR5CyUeIYT9AbDeV0ZGX39964uea%2FK%2Fks4li267tww6AFOTBaxy1JAaH5SH7xngHSrfCsDj2ElRXcaX8fHCYMOcLjWs9PJ2BGX%2FXRTIaGG%2BZ6AKwA7NDOP4m4Jos7AR1PCK60GBpVNyHgzcZvNCk65BXHPOTb0uh18NbW7KyL2JxWD2YFFpjq2PmhJ%2ByBBkbd59aGWkU2UTidsRfkyHypUO1WbHp%2FxscHisuswCEUi4DJfGpE1xTzOK3oNVXKK8TzNzWALka2hQw3o9uzKWGGEAUOjjkPn4XhJayNfbVNBQFKlqxggdrOuA4ORYQqeNev%2FVBnVnX7rGGHj2tDtW7mbn097DeaXLsTQm5zeLI9PJ8yH0qz4dA41dsXxwpOiTej1CBwI462hv7UOyO70ArkywBCjNpKAHO7amLPpLWkm%2B7tpLm7GKbIvMUAfGFUlu2eEf4dlng2JESfTgtK%2F3GrWhnKlu6nX1ixEUn9a3MM9255FrjHKsSPgb%2Bd13Gps0QLthzUCzL%2F6xDb12wMOUom2kuja8lC%2BvReyA5sRL2AiMhS5d%2BDdbpJlMTTwih8uzgl8bQs0Xuw1uZQw15mOwAY6pgHaZeOjQzosmv%2FMegE0%2Bz6Dok5kydwgd8KebDyloixr5d%2BefbctddCPwuIxDFwY9HpbBCOxkvZIsAlJ6IYO27iymauQbW5wB4C0X%2Fb6hm04aR8sgWJ2lg5bXbVIQgKxmEbFOH4%2FS3MJTmMsn397zagZ7Pz6alUSN60tqW9avCt8vE4FSlE44VerrS6wOReAT69VKKURdPk%2BcwDZ238B1GqWdoFD70xb&X-Amz-Signature=147ae421f799a4e91690ef03d13b87cc4046b10e37a784383f0788c1bbc07638&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXI7BMG7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDn9XapFQF0IpyqvLY8Sw9rPY7cbZOhCRCf%2B4SCx%2FPvqAiB4iOrTxmmYUAThwNTjYO%2Fopa4GncV7g6bI17bKZLRNEiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v3S5IFfQ7pduY2mKtwDKOu5PANSIpVz0DlA6hS9iZFE%2B63aKx1dXYbQJzOKfqbJfHpR5CyUeIYT9AbDeV0ZGX39964uea%2FK%2Fks4li267tww6AFOTBaxy1JAaH5SH7xngHSrfCsDj2ElRXcaX8fHCYMOcLjWs9PJ2BGX%2FXRTIaGG%2BZ6AKwA7NDOP4m4Jos7AR1PCK60GBpVNyHgzcZvNCk65BXHPOTb0uh18NbW7KyL2JxWD2YFFpjq2PmhJ%2ByBBkbd59aGWkU2UTidsRfkyHypUO1WbHp%2FxscHisuswCEUi4DJfGpE1xTzOK3oNVXKK8TzNzWALka2hQw3o9uzKWGGEAUOjjkPn4XhJayNfbVNBQFKlqxggdrOuA4ORYQqeNev%2FVBnVnX7rGGHj2tDtW7mbn097DeaXLsTQm5zeLI9PJ8yH0qz4dA41dsXxwpOiTej1CBwI462hv7UOyO70ArkywBCjNpKAHO7amLPpLWkm%2B7tpLm7GKbIvMUAfGFUlu2eEf4dlng2JESfTgtK%2F3GrWhnKlu6nX1ixEUn9a3MM9255FrjHKsSPgb%2Bd13Gps0QLthzUCzL%2F6xDb12wMOUom2kuja8lC%2BvReyA5sRL2AiMhS5d%2BDdbpJlMTTwih8uzgl8bQs0Xuw1uZQw15mOwAY6pgHaZeOjQzosmv%2FMegE0%2Bz6Dok5kydwgd8KebDyloixr5d%2BefbctddCPwuIxDFwY9HpbBCOxkvZIsAlJ6IYO27iymauQbW5wB4C0X%2Fb6hm04aR8sgWJ2lg5bXbVIQgKxmEbFOH4%2FS3MJTmMsn397zagZ7Pz6alUSN60tqW9avCt8vE4FSlE44VerrS6wOReAT69VKKURdPk%2BcwDZ238B1GqWdoFD70xb&X-Amz-Signature=6bac926509e4e4e1937c0dfc1ed24ab9196cdcc99a7f1c4151667228b88af13b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXI7BMG7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDn9XapFQF0IpyqvLY8Sw9rPY7cbZOhCRCf%2B4SCx%2FPvqAiB4iOrTxmmYUAThwNTjYO%2Fopa4GncV7g6bI17bKZLRNEiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v3S5IFfQ7pduY2mKtwDKOu5PANSIpVz0DlA6hS9iZFE%2B63aKx1dXYbQJzOKfqbJfHpR5CyUeIYT9AbDeV0ZGX39964uea%2FK%2Fks4li267tww6AFOTBaxy1JAaH5SH7xngHSrfCsDj2ElRXcaX8fHCYMOcLjWs9PJ2BGX%2FXRTIaGG%2BZ6AKwA7NDOP4m4Jos7AR1PCK60GBpVNyHgzcZvNCk65BXHPOTb0uh18NbW7KyL2JxWD2YFFpjq2PmhJ%2ByBBkbd59aGWkU2UTidsRfkyHypUO1WbHp%2FxscHisuswCEUi4DJfGpE1xTzOK3oNVXKK8TzNzWALka2hQw3o9uzKWGGEAUOjjkPn4XhJayNfbVNBQFKlqxggdrOuA4ORYQqeNev%2FVBnVnX7rGGHj2tDtW7mbn097DeaXLsTQm5zeLI9PJ8yH0qz4dA41dsXxwpOiTej1CBwI462hv7UOyO70ArkywBCjNpKAHO7amLPpLWkm%2B7tpLm7GKbIvMUAfGFUlu2eEf4dlng2JESfTgtK%2F3GrWhnKlu6nX1ixEUn9a3MM9255FrjHKsSPgb%2Bd13Gps0QLthzUCzL%2F6xDb12wMOUom2kuja8lC%2BvReyA5sRL2AiMhS5d%2BDdbpJlMTTwih8uzgl8bQs0Xuw1uZQw15mOwAY6pgHaZeOjQzosmv%2FMegE0%2Bz6Dok5kydwgd8KebDyloixr5d%2BefbctddCPwuIxDFwY9HpbBCOxkvZIsAlJ6IYO27iymauQbW5wB4C0X%2Fb6hm04aR8sgWJ2lg5bXbVIQgKxmEbFOH4%2FS3MJTmMsn397zagZ7Pz6alUSN60tqW9avCt8vE4FSlE44VerrS6wOReAT69VKKURdPk%2BcwDZ238B1GqWdoFD70xb&X-Amz-Signature=d2e2326b64cde7a3b2f2ac79894cb7809572ae269affe0c69607f2f77474cd3c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXI7BMG7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDn9XapFQF0IpyqvLY8Sw9rPY7cbZOhCRCf%2B4SCx%2FPvqAiB4iOrTxmmYUAThwNTjYO%2Fopa4GncV7g6bI17bKZLRNEiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v3S5IFfQ7pduY2mKtwDKOu5PANSIpVz0DlA6hS9iZFE%2B63aKx1dXYbQJzOKfqbJfHpR5CyUeIYT9AbDeV0ZGX39964uea%2FK%2Fks4li267tww6AFOTBaxy1JAaH5SH7xngHSrfCsDj2ElRXcaX8fHCYMOcLjWs9PJ2BGX%2FXRTIaGG%2BZ6AKwA7NDOP4m4Jos7AR1PCK60GBpVNyHgzcZvNCk65BXHPOTb0uh18NbW7KyL2JxWD2YFFpjq2PmhJ%2ByBBkbd59aGWkU2UTidsRfkyHypUO1WbHp%2FxscHisuswCEUi4DJfGpE1xTzOK3oNVXKK8TzNzWALka2hQw3o9uzKWGGEAUOjjkPn4XhJayNfbVNBQFKlqxggdrOuA4ORYQqeNev%2FVBnVnX7rGGHj2tDtW7mbn097DeaXLsTQm5zeLI9PJ8yH0qz4dA41dsXxwpOiTej1CBwI462hv7UOyO70ArkywBCjNpKAHO7amLPpLWkm%2B7tpLm7GKbIvMUAfGFUlu2eEf4dlng2JESfTgtK%2F3GrWhnKlu6nX1ixEUn9a3MM9255FrjHKsSPgb%2Bd13Gps0QLthzUCzL%2F6xDb12wMOUom2kuja8lC%2BvReyA5sRL2AiMhS5d%2BDdbpJlMTTwih8uzgl8bQs0Xuw1uZQw15mOwAY6pgHaZeOjQzosmv%2FMegE0%2Bz6Dok5kydwgd8KebDyloixr5d%2BefbctddCPwuIxDFwY9HpbBCOxkvZIsAlJ6IYO27iymauQbW5wB4C0X%2Fb6hm04aR8sgWJ2lg5bXbVIQgKxmEbFOH4%2FS3MJTmMsn397zagZ7Pz6alUSN60tqW9avCt8vE4FSlE44VerrS6wOReAT69VKKURdPk%2BcwDZ238B1GqWdoFD70xb&X-Amz-Signature=353ff3cb32fc19c3134c8bcfdfff4a161589216bf3e3b09890181eaf4463a60f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXI7BMG7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDn9XapFQF0IpyqvLY8Sw9rPY7cbZOhCRCf%2B4SCx%2FPvqAiB4iOrTxmmYUAThwNTjYO%2Fopa4GncV7g6bI17bKZLRNEiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v3S5IFfQ7pduY2mKtwDKOu5PANSIpVz0DlA6hS9iZFE%2B63aKx1dXYbQJzOKfqbJfHpR5CyUeIYT9AbDeV0ZGX39964uea%2FK%2Fks4li267tww6AFOTBaxy1JAaH5SH7xngHSrfCsDj2ElRXcaX8fHCYMOcLjWs9PJ2BGX%2FXRTIaGG%2BZ6AKwA7NDOP4m4Jos7AR1PCK60GBpVNyHgzcZvNCk65BXHPOTb0uh18NbW7KyL2JxWD2YFFpjq2PmhJ%2ByBBkbd59aGWkU2UTidsRfkyHypUO1WbHp%2FxscHisuswCEUi4DJfGpE1xTzOK3oNVXKK8TzNzWALka2hQw3o9uzKWGGEAUOjjkPn4XhJayNfbVNBQFKlqxggdrOuA4ORYQqeNev%2FVBnVnX7rGGHj2tDtW7mbn097DeaXLsTQm5zeLI9PJ8yH0qz4dA41dsXxwpOiTej1CBwI462hv7UOyO70ArkywBCjNpKAHO7amLPpLWkm%2B7tpLm7GKbIvMUAfGFUlu2eEf4dlng2JESfTgtK%2F3GrWhnKlu6nX1ixEUn9a3MM9255FrjHKsSPgb%2Bd13Gps0QLthzUCzL%2F6xDb12wMOUom2kuja8lC%2BvReyA5sRL2AiMhS5d%2BDdbpJlMTTwih8uzgl8bQs0Xuw1uZQw15mOwAY6pgHaZeOjQzosmv%2FMegE0%2Bz6Dok5kydwgd8KebDyloixr5d%2BefbctddCPwuIxDFwY9HpbBCOxkvZIsAlJ6IYO27iymauQbW5wB4C0X%2Fb6hm04aR8sgWJ2lg5bXbVIQgKxmEbFOH4%2FS3MJTmMsn397zagZ7Pz6alUSN60tqW9avCt8vE4FSlE44VerrS6wOReAT69VKKURdPk%2BcwDZ238B1GqWdoFD70xb&X-Amz-Signature=9b71be49c7d74c235977588457b08274e4642ccae41e4186a0cedac921b40ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXI7BMG7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDn9XapFQF0IpyqvLY8Sw9rPY7cbZOhCRCf%2B4SCx%2FPvqAiB4iOrTxmmYUAThwNTjYO%2Fopa4GncV7g6bI17bKZLRNEiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v3S5IFfQ7pduY2mKtwDKOu5PANSIpVz0DlA6hS9iZFE%2B63aKx1dXYbQJzOKfqbJfHpR5CyUeIYT9AbDeV0ZGX39964uea%2FK%2Fks4li267tww6AFOTBaxy1JAaH5SH7xngHSrfCsDj2ElRXcaX8fHCYMOcLjWs9PJ2BGX%2FXRTIaGG%2BZ6AKwA7NDOP4m4Jos7AR1PCK60GBpVNyHgzcZvNCk65BXHPOTb0uh18NbW7KyL2JxWD2YFFpjq2PmhJ%2ByBBkbd59aGWkU2UTidsRfkyHypUO1WbHp%2FxscHisuswCEUi4DJfGpE1xTzOK3oNVXKK8TzNzWALka2hQw3o9uzKWGGEAUOjjkPn4XhJayNfbVNBQFKlqxggdrOuA4ORYQqeNev%2FVBnVnX7rGGHj2tDtW7mbn097DeaXLsTQm5zeLI9PJ8yH0qz4dA41dsXxwpOiTej1CBwI462hv7UOyO70ArkywBCjNpKAHO7amLPpLWkm%2B7tpLm7GKbIvMUAfGFUlu2eEf4dlng2JESfTgtK%2F3GrWhnKlu6nX1ixEUn9a3MM9255FrjHKsSPgb%2Bd13Gps0QLthzUCzL%2F6xDb12wMOUom2kuja8lC%2BvReyA5sRL2AiMhS5d%2BDdbpJlMTTwih8uzgl8bQs0Xuw1uZQw15mOwAY6pgHaZeOjQzosmv%2FMegE0%2Bz6Dok5kydwgd8KebDyloixr5d%2BefbctddCPwuIxDFwY9HpbBCOxkvZIsAlJ6IYO27iymauQbW5wB4C0X%2Fb6hm04aR8sgWJ2lg5bXbVIQgKxmEbFOH4%2FS3MJTmMsn397zagZ7Pz6alUSN60tqW9avCt8vE4FSlE44VerrS6wOReAT69VKKURdPk%2BcwDZ238B1GqWdoFD70xb&X-Amz-Signature=02f80b30e88dee9544b7947dc09235df8d1a0602895342be2ba736ae6316d591&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXI7BMG7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDn9XapFQF0IpyqvLY8Sw9rPY7cbZOhCRCf%2B4SCx%2FPvqAiB4iOrTxmmYUAThwNTjYO%2Fopa4GncV7g6bI17bKZLRNEiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v3S5IFfQ7pduY2mKtwDKOu5PANSIpVz0DlA6hS9iZFE%2B63aKx1dXYbQJzOKfqbJfHpR5CyUeIYT9AbDeV0ZGX39964uea%2FK%2Fks4li267tww6AFOTBaxy1JAaH5SH7xngHSrfCsDj2ElRXcaX8fHCYMOcLjWs9PJ2BGX%2FXRTIaGG%2BZ6AKwA7NDOP4m4Jos7AR1PCK60GBpVNyHgzcZvNCk65BXHPOTb0uh18NbW7KyL2JxWD2YFFpjq2PmhJ%2ByBBkbd59aGWkU2UTidsRfkyHypUO1WbHp%2FxscHisuswCEUi4DJfGpE1xTzOK3oNVXKK8TzNzWALka2hQw3o9uzKWGGEAUOjjkPn4XhJayNfbVNBQFKlqxggdrOuA4ORYQqeNev%2FVBnVnX7rGGHj2tDtW7mbn097DeaXLsTQm5zeLI9PJ8yH0qz4dA41dsXxwpOiTej1CBwI462hv7UOyO70ArkywBCjNpKAHO7amLPpLWkm%2B7tpLm7GKbIvMUAfGFUlu2eEf4dlng2JESfTgtK%2F3GrWhnKlu6nX1ixEUn9a3MM9255FrjHKsSPgb%2Bd13Gps0QLthzUCzL%2F6xDb12wMOUom2kuja8lC%2BvReyA5sRL2AiMhS5d%2BDdbpJlMTTwih8uzgl8bQs0Xuw1uZQw15mOwAY6pgHaZeOjQzosmv%2FMegE0%2Bz6Dok5kydwgd8KebDyloixr5d%2BefbctddCPwuIxDFwY9HpbBCOxkvZIsAlJ6IYO27iymauQbW5wB4C0X%2Fb6hm04aR8sgWJ2lg5bXbVIQgKxmEbFOH4%2FS3MJTmMsn397zagZ7Pz6alUSN60tqW9avCt8vE4FSlE44VerrS6wOReAT69VKKURdPk%2BcwDZ238B1GqWdoFD70xb&X-Amz-Signature=e500004911e1b85fc1d1faba48ff93f06245ac4c804ae2071104a45d23bce2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXI7BMG7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T121257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDn9XapFQF0IpyqvLY8Sw9rPY7cbZOhCRCf%2B4SCx%2FPvqAiB4iOrTxmmYUAThwNTjYO%2Fopa4GncV7g6bI17bKZLRNEiqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3v3S5IFfQ7pduY2mKtwDKOu5PANSIpVz0DlA6hS9iZFE%2B63aKx1dXYbQJzOKfqbJfHpR5CyUeIYT9AbDeV0ZGX39964uea%2FK%2Fks4li267tww6AFOTBaxy1JAaH5SH7xngHSrfCsDj2ElRXcaX8fHCYMOcLjWs9PJ2BGX%2FXRTIaGG%2BZ6AKwA7NDOP4m4Jos7AR1PCK60GBpVNyHgzcZvNCk65BXHPOTb0uh18NbW7KyL2JxWD2YFFpjq2PmhJ%2ByBBkbd59aGWkU2UTidsRfkyHypUO1WbHp%2FxscHisuswCEUi4DJfGpE1xTzOK3oNVXKK8TzNzWALka2hQw3o9uzKWGGEAUOjjkPn4XhJayNfbVNBQFKlqxggdrOuA4ORYQqeNev%2FVBnVnX7rGGHj2tDtW7mbn097DeaXLsTQm5zeLI9PJ8yH0qz4dA41dsXxwpOiTej1CBwI462hv7UOyO70ArkywBCjNpKAHO7amLPpLWkm%2B7tpLm7GKbIvMUAfGFUlu2eEf4dlng2JESfTgtK%2F3GrWhnKlu6nX1ixEUn9a3MM9255FrjHKsSPgb%2Bd13Gps0QLthzUCzL%2F6xDb12wMOUom2kuja8lC%2BvReyA5sRL2AiMhS5d%2BDdbpJlMTTwih8uzgl8bQs0Xuw1uZQw15mOwAY6pgHaZeOjQzosmv%2FMegE0%2Bz6Dok5kydwgd8KebDyloixr5d%2BefbctddCPwuIxDFwY9HpbBCOxkvZIsAlJ6IYO27iymauQbW5wB4C0X%2Fb6hm04aR8sgWJ2lg5bXbVIQgKxmEbFOH4%2FS3MJTmMsn397zagZ7Pz6alUSN60tqW9avCt8vE4FSlE44VerrS6wOReAT69VKKURdPk%2BcwDZ238B1GqWdoFD70xb&X-Amz-Signature=e38729759c0e6c0df42f60b1bf6567f49689528bb8357f3d224f75b6324733bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
