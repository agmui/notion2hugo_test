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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUF3PT7C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLUoflRT%2BlwWF%2ByvcCwSan%2Fvzt3mRj9jTmRS1GFwnP3AiEAqt0EX82TOQP7zF75CXj4U0YnGx4bvlhUaPUpuG4fl7wqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGX0Aj%2B2Vm9ShlcbSrcA63A3eBlvjfxaR1BgQ%2Fw0rqB%2FFWUUFR8DNW1cfkZc9%2F79VcRWQxAPPh80njV%2F1XhPo75nyMhAUCfcUgaVsdRmstizQb3%2F3CLnUqo8UUg9eHhfzs3NMi9aTRDW8%2BqXxvxYvjnvkVljn4YiIE3afD3X4ccHp%2FMcrmcq9ro02yk0iPufzzpYhLFBu%2BB2CriyuJra%2FLowze1qUWin7cVX%2FwkCNemVIwgFr%2BSCGsiMaonMmUMb%2FfFJcAFToXzVLGG0Pfp%2BUmInJH0rHH0Qn7iLcbd%2FX0bX4p2jGl5vAtU9%2BGgy5R4qKllmyniSYWNDFZuPwq8OVLjO3eC0k9il0N89KWttti1K2MKt1j%2BeXHhiWMOtS7WlTsaKcAQHlvb4DuXxhrU1j6JkmDpOB21bi6ddciPq3yN3bMwFTCGyVKsrOaxnL0farl2DR2h%2BnZfwLUwKshn3vQ2qTfhdJoeP9HDzvY7CT2YK4j4IN6VojqqyorPYbtNgtmY1a3Nc8EU8PV3kIQSczUKorOGZdd59CTWeTEv27gLBs7EHTp7%2Foh7NItWZQKcsgQTRljwYoiYykKrBPJ%2BDMYlENTOjHd%2FXmJQEh%2FMdpnfdr2D6p7WIx8rUNiq6WzUOQ%2BVernz8hq2lba%2BMMr2qr0GOqUB5ueoJTpo%2BbrysSdzkv4FJlhUcMkjSgE%2BreZM7%2Bq88TAjEa%2Bhqakg5L2k2NlrizZKmFdEBKflw%2FRAjebFs9sMOZLhWsMNSStDiImEPf9WDqj8fr0BG7cEZ6JD%2BmwpIRp9dJaj%2BGJmrQ9CX573y3AWQ4Se85pd6gp273vsFOS1cHtZ9vfEgJRJxP6snh97xxhVcubGKNGgH7rKxCbcTvuMufbwtyCS&X-Amz-Signature=a158b0461ae2a19fccb54ffa701fbce78c9e27c295f6be858eeb6a8f7f16715d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUF3PT7C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLUoflRT%2BlwWF%2ByvcCwSan%2Fvzt3mRj9jTmRS1GFwnP3AiEAqt0EX82TOQP7zF75CXj4U0YnGx4bvlhUaPUpuG4fl7wqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGX0Aj%2B2Vm9ShlcbSrcA63A3eBlvjfxaR1BgQ%2Fw0rqB%2FFWUUFR8DNW1cfkZc9%2F79VcRWQxAPPh80njV%2F1XhPo75nyMhAUCfcUgaVsdRmstizQb3%2F3CLnUqo8UUg9eHhfzs3NMi9aTRDW8%2BqXxvxYvjnvkVljn4YiIE3afD3X4ccHp%2FMcrmcq9ro02yk0iPufzzpYhLFBu%2BB2CriyuJra%2FLowze1qUWin7cVX%2FwkCNemVIwgFr%2BSCGsiMaonMmUMb%2FfFJcAFToXzVLGG0Pfp%2BUmInJH0rHH0Qn7iLcbd%2FX0bX4p2jGl5vAtU9%2BGgy5R4qKllmyniSYWNDFZuPwq8OVLjO3eC0k9il0N89KWttti1K2MKt1j%2BeXHhiWMOtS7WlTsaKcAQHlvb4DuXxhrU1j6JkmDpOB21bi6ddciPq3yN3bMwFTCGyVKsrOaxnL0farl2DR2h%2BnZfwLUwKshn3vQ2qTfhdJoeP9HDzvY7CT2YK4j4IN6VojqqyorPYbtNgtmY1a3Nc8EU8PV3kIQSczUKorOGZdd59CTWeTEv27gLBs7EHTp7%2Foh7NItWZQKcsgQTRljwYoiYykKrBPJ%2BDMYlENTOjHd%2FXmJQEh%2FMdpnfdr2D6p7WIx8rUNiq6WzUOQ%2BVernz8hq2lba%2BMMr2qr0GOqUB5ueoJTpo%2BbrysSdzkv4FJlhUcMkjSgE%2BreZM7%2Bq88TAjEa%2Bhqakg5L2k2NlrizZKmFdEBKflw%2FRAjebFs9sMOZLhWsMNSStDiImEPf9WDqj8fr0BG7cEZ6JD%2BmwpIRp9dJaj%2BGJmrQ9CX573y3AWQ4Se85pd6gp273vsFOS1cHtZ9vfEgJRJxP6snh97xxhVcubGKNGgH7rKxCbcTvuMufbwtyCS&X-Amz-Signature=1996be6cd1e14bd64c3c92bc9446f914719b2af843c3942c2981bba4adcce2a1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUF3PT7C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLUoflRT%2BlwWF%2ByvcCwSan%2Fvzt3mRj9jTmRS1GFwnP3AiEAqt0EX82TOQP7zF75CXj4U0YnGx4bvlhUaPUpuG4fl7wqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGX0Aj%2B2Vm9ShlcbSrcA63A3eBlvjfxaR1BgQ%2Fw0rqB%2FFWUUFR8DNW1cfkZc9%2F79VcRWQxAPPh80njV%2F1XhPo75nyMhAUCfcUgaVsdRmstizQb3%2F3CLnUqo8UUg9eHhfzs3NMi9aTRDW8%2BqXxvxYvjnvkVljn4YiIE3afD3X4ccHp%2FMcrmcq9ro02yk0iPufzzpYhLFBu%2BB2CriyuJra%2FLowze1qUWin7cVX%2FwkCNemVIwgFr%2BSCGsiMaonMmUMb%2FfFJcAFToXzVLGG0Pfp%2BUmInJH0rHH0Qn7iLcbd%2FX0bX4p2jGl5vAtU9%2BGgy5R4qKllmyniSYWNDFZuPwq8OVLjO3eC0k9il0N89KWttti1K2MKt1j%2BeXHhiWMOtS7WlTsaKcAQHlvb4DuXxhrU1j6JkmDpOB21bi6ddciPq3yN3bMwFTCGyVKsrOaxnL0farl2DR2h%2BnZfwLUwKshn3vQ2qTfhdJoeP9HDzvY7CT2YK4j4IN6VojqqyorPYbtNgtmY1a3Nc8EU8PV3kIQSczUKorOGZdd59CTWeTEv27gLBs7EHTp7%2Foh7NItWZQKcsgQTRljwYoiYykKrBPJ%2BDMYlENTOjHd%2FXmJQEh%2FMdpnfdr2D6p7WIx8rUNiq6WzUOQ%2BVernz8hq2lba%2BMMr2qr0GOqUB5ueoJTpo%2BbrysSdzkv4FJlhUcMkjSgE%2BreZM7%2Bq88TAjEa%2Bhqakg5L2k2NlrizZKmFdEBKflw%2FRAjebFs9sMOZLhWsMNSStDiImEPf9WDqj8fr0BG7cEZ6JD%2BmwpIRp9dJaj%2BGJmrQ9CX573y3AWQ4Se85pd6gp273vsFOS1cHtZ9vfEgJRJxP6snh97xxhVcubGKNGgH7rKxCbcTvuMufbwtyCS&X-Amz-Signature=5d046e3652fa892669076cc3c6ca41bd9c8dea25d3b3c17629851174b17f982f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUF3PT7C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLUoflRT%2BlwWF%2ByvcCwSan%2Fvzt3mRj9jTmRS1GFwnP3AiEAqt0EX82TOQP7zF75CXj4U0YnGx4bvlhUaPUpuG4fl7wqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGX0Aj%2B2Vm9ShlcbSrcA63A3eBlvjfxaR1BgQ%2Fw0rqB%2FFWUUFR8DNW1cfkZc9%2F79VcRWQxAPPh80njV%2F1XhPo75nyMhAUCfcUgaVsdRmstizQb3%2F3CLnUqo8UUg9eHhfzs3NMi9aTRDW8%2BqXxvxYvjnvkVljn4YiIE3afD3X4ccHp%2FMcrmcq9ro02yk0iPufzzpYhLFBu%2BB2CriyuJra%2FLowze1qUWin7cVX%2FwkCNemVIwgFr%2BSCGsiMaonMmUMb%2FfFJcAFToXzVLGG0Pfp%2BUmInJH0rHH0Qn7iLcbd%2FX0bX4p2jGl5vAtU9%2BGgy5R4qKllmyniSYWNDFZuPwq8OVLjO3eC0k9il0N89KWttti1K2MKt1j%2BeXHhiWMOtS7WlTsaKcAQHlvb4DuXxhrU1j6JkmDpOB21bi6ddciPq3yN3bMwFTCGyVKsrOaxnL0farl2DR2h%2BnZfwLUwKshn3vQ2qTfhdJoeP9HDzvY7CT2YK4j4IN6VojqqyorPYbtNgtmY1a3Nc8EU8PV3kIQSczUKorOGZdd59CTWeTEv27gLBs7EHTp7%2Foh7NItWZQKcsgQTRljwYoiYykKrBPJ%2BDMYlENTOjHd%2FXmJQEh%2FMdpnfdr2D6p7WIx8rUNiq6WzUOQ%2BVernz8hq2lba%2BMMr2qr0GOqUB5ueoJTpo%2BbrysSdzkv4FJlhUcMkjSgE%2BreZM7%2Bq88TAjEa%2Bhqakg5L2k2NlrizZKmFdEBKflw%2FRAjebFs9sMOZLhWsMNSStDiImEPf9WDqj8fr0BG7cEZ6JD%2BmwpIRp9dJaj%2BGJmrQ9CX573y3AWQ4Se85pd6gp273vsFOS1cHtZ9vfEgJRJxP6snh97xxhVcubGKNGgH7rKxCbcTvuMufbwtyCS&X-Amz-Signature=faaeb54ed71933c073fee1a7138e26ab8198b579f168510f5dbe6dda41fb57e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUF3PT7C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLUoflRT%2BlwWF%2ByvcCwSan%2Fvzt3mRj9jTmRS1GFwnP3AiEAqt0EX82TOQP7zF75CXj4U0YnGx4bvlhUaPUpuG4fl7wqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGX0Aj%2B2Vm9ShlcbSrcA63A3eBlvjfxaR1BgQ%2Fw0rqB%2FFWUUFR8DNW1cfkZc9%2F79VcRWQxAPPh80njV%2F1XhPo75nyMhAUCfcUgaVsdRmstizQb3%2F3CLnUqo8UUg9eHhfzs3NMi9aTRDW8%2BqXxvxYvjnvkVljn4YiIE3afD3X4ccHp%2FMcrmcq9ro02yk0iPufzzpYhLFBu%2BB2CriyuJra%2FLowze1qUWin7cVX%2FwkCNemVIwgFr%2BSCGsiMaonMmUMb%2FfFJcAFToXzVLGG0Pfp%2BUmInJH0rHH0Qn7iLcbd%2FX0bX4p2jGl5vAtU9%2BGgy5R4qKllmyniSYWNDFZuPwq8OVLjO3eC0k9il0N89KWttti1K2MKt1j%2BeXHhiWMOtS7WlTsaKcAQHlvb4DuXxhrU1j6JkmDpOB21bi6ddciPq3yN3bMwFTCGyVKsrOaxnL0farl2DR2h%2BnZfwLUwKshn3vQ2qTfhdJoeP9HDzvY7CT2YK4j4IN6VojqqyorPYbtNgtmY1a3Nc8EU8PV3kIQSczUKorOGZdd59CTWeTEv27gLBs7EHTp7%2Foh7NItWZQKcsgQTRljwYoiYykKrBPJ%2BDMYlENTOjHd%2FXmJQEh%2FMdpnfdr2D6p7WIx8rUNiq6WzUOQ%2BVernz8hq2lba%2BMMr2qr0GOqUB5ueoJTpo%2BbrysSdzkv4FJlhUcMkjSgE%2BreZM7%2Bq88TAjEa%2Bhqakg5L2k2NlrizZKmFdEBKflw%2FRAjebFs9sMOZLhWsMNSStDiImEPf9WDqj8fr0BG7cEZ6JD%2BmwpIRp9dJaj%2BGJmrQ9CX573y3AWQ4Se85pd6gp273vsFOS1cHtZ9vfEgJRJxP6snh97xxhVcubGKNGgH7rKxCbcTvuMufbwtyCS&X-Amz-Signature=3e381a8ffee15c04feedeaccc385611899fab2cdbb9c391ad8ce12eb80a2056a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUF3PT7C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLUoflRT%2BlwWF%2ByvcCwSan%2Fvzt3mRj9jTmRS1GFwnP3AiEAqt0EX82TOQP7zF75CXj4U0YnGx4bvlhUaPUpuG4fl7wqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGX0Aj%2B2Vm9ShlcbSrcA63A3eBlvjfxaR1BgQ%2Fw0rqB%2FFWUUFR8DNW1cfkZc9%2F79VcRWQxAPPh80njV%2F1XhPo75nyMhAUCfcUgaVsdRmstizQb3%2F3CLnUqo8UUg9eHhfzs3NMi9aTRDW8%2BqXxvxYvjnvkVljn4YiIE3afD3X4ccHp%2FMcrmcq9ro02yk0iPufzzpYhLFBu%2BB2CriyuJra%2FLowze1qUWin7cVX%2FwkCNemVIwgFr%2BSCGsiMaonMmUMb%2FfFJcAFToXzVLGG0Pfp%2BUmInJH0rHH0Qn7iLcbd%2FX0bX4p2jGl5vAtU9%2BGgy5R4qKllmyniSYWNDFZuPwq8OVLjO3eC0k9il0N89KWttti1K2MKt1j%2BeXHhiWMOtS7WlTsaKcAQHlvb4DuXxhrU1j6JkmDpOB21bi6ddciPq3yN3bMwFTCGyVKsrOaxnL0farl2DR2h%2BnZfwLUwKshn3vQ2qTfhdJoeP9HDzvY7CT2YK4j4IN6VojqqyorPYbtNgtmY1a3Nc8EU8PV3kIQSczUKorOGZdd59CTWeTEv27gLBs7EHTp7%2Foh7NItWZQKcsgQTRljwYoiYykKrBPJ%2BDMYlENTOjHd%2FXmJQEh%2FMdpnfdr2D6p7WIx8rUNiq6WzUOQ%2BVernz8hq2lba%2BMMr2qr0GOqUB5ueoJTpo%2BbrysSdzkv4FJlhUcMkjSgE%2BreZM7%2Bq88TAjEa%2Bhqakg5L2k2NlrizZKmFdEBKflw%2FRAjebFs9sMOZLhWsMNSStDiImEPf9WDqj8fr0BG7cEZ6JD%2BmwpIRp9dJaj%2BGJmrQ9CX573y3AWQ4Se85pd6gp273vsFOS1cHtZ9vfEgJRJxP6snh97xxhVcubGKNGgH7rKxCbcTvuMufbwtyCS&X-Amz-Signature=aa23ef6c55bb2c1c20617d189b6f496d9678ac91bbb09b0f9f3c137da9255456&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUF3PT7C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLUoflRT%2BlwWF%2ByvcCwSan%2Fvzt3mRj9jTmRS1GFwnP3AiEAqt0EX82TOQP7zF75CXj4U0YnGx4bvlhUaPUpuG4fl7wqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGX0Aj%2B2Vm9ShlcbSrcA63A3eBlvjfxaR1BgQ%2Fw0rqB%2FFWUUFR8DNW1cfkZc9%2F79VcRWQxAPPh80njV%2F1XhPo75nyMhAUCfcUgaVsdRmstizQb3%2F3CLnUqo8UUg9eHhfzs3NMi9aTRDW8%2BqXxvxYvjnvkVljn4YiIE3afD3X4ccHp%2FMcrmcq9ro02yk0iPufzzpYhLFBu%2BB2CriyuJra%2FLowze1qUWin7cVX%2FwkCNemVIwgFr%2BSCGsiMaonMmUMb%2FfFJcAFToXzVLGG0Pfp%2BUmInJH0rHH0Qn7iLcbd%2FX0bX4p2jGl5vAtU9%2BGgy5R4qKllmyniSYWNDFZuPwq8OVLjO3eC0k9il0N89KWttti1K2MKt1j%2BeXHhiWMOtS7WlTsaKcAQHlvb4DuXxhrU1j6JkmDpOB21bi6ddciPq3yN3bMwFTCGyVKsrOaxnL0farl2DR2h%2BnZfwLUwKshn3vQ2qTfhdJoeP9HDzvY7CT2YK4j4IN6VojqqyorPYbtNgtmY1a3Nc8EU8PV3kIQSczUKorOGZdd59CTWeTEv27gLBs7EHTp7%2Foh7NItWZQKcsgQTRljwYoiYykKrBPJ%2BDMYlENTOjHd%2FXmJQEh%2FMdpnfdr2D6p7WIx8rUNiq6WzUOQ%2BVernz8hq2lba%2BMMr2qr0GOqUB5ueoJTpo%2BbrysSdzkv4FJlhUcMkjSgE%2BreZM7%2Bq88TAjEa%2Bhqakg5L2k2NlrizZKmFdEBKflw%2FRAjebFs9sMOZLhWsMNSStDiImEPf9WDqj8fr0BG7cEZ6JD%2BmwpIRp9dJaj%2BGJmrQ9CX573y3AWQ4Se85pd6gp273vsFOS1cHtZ9vfEgJRJxP6snh97xxhVcubGKNGgH7rKxCbcTvuMufbwtyCS&X-Amz-Signature=9629d9e575096eafaf1a6d8e8f135e97eb75af4a56eccc0493593bfce7b4e58f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUF3PT7C%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLUoflRT%2BlwWF%2ByvcCwSan%2Fvzt3mRj9jTmRS1GFwnP3AiEAqt0EX82TOQP7zF75CXj4U0YnGx4bvlhUaPUpuG4fl7wqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGX0Aj%2B2Vm9ShlcbSrcA63A3eBlvjfxaR1BgQ%2Fw0rqB%2FFWUUFR8DNW1cfkZc9%2F79VcRWQxAPPh80njV%2F1XhPo75nyMhAUCfcUgaVsdRmstizQb3%2F3CLnUqo8UUg9eHhfzs3NMi9aTRDW8%2BqXxvxYvjnvkVljn4YiIE3afD3X4ccHp%2FMcrmcq9ro02yk0iPufzzpYhLFBu%2BB2CriyuJra%2FLowze1qUWin7cVX%2FwkCNemVIwgFr%2BSCGsiMaonMmUMb%2FfFJcAFToXzVLGG0Pfp%2BUmInJH0rHH0Qn7iLcbd%2FX0bX4p2jGl5vAtU9%2BGgy5R4qKllmyniSYWNDFZuPwq8OVLjO3eC0k9il0N89KWttti1K2MKt1j%2BeXHhiWMOtS7WlTsaKcAQHlvb4DuXxhrU1j6JkmDpOB21bi6ddciPq3yN3bMwFTCGyVKsrOaxnL0farl2DR2h%2BnZfwLUwKshn3vQ2qTfhdJoeP9HDzvY7CT2YK4j4IN6VojqqyorPYbtNgtmY1a3Nc8EU8PV3kIQSczUKorOGZdd59CTWeTEv27gLBs7EHTp7%2Foh7NItWZQKcsgQTRljwYoiYykKrBPJ%2BDMYlENTOjHd%2FXmJQEh%2FMdpnfdr2D6p7WIx8rUNiq6WzUOQ%2BVernz8hq2lba%2BMMr2qr0GOqUB5ueoJTpo%2BbrysSdzkv4FJlhUcMkjSgE%2BreZM7%2Bq88TAjEa%2Bhqakg5L2k2NlrizZKmFdEBKflw%2FRAjebFs9sMOZLhWsMNSStDiImEPf9WDqj8fr0BG7cEZ6JD%2BmwpIRp9dJaj%2BGJmrQ9CX573y3AWQ4Se85pd6gp273vsFOS1cHtZ9vfEgJRJxP6snh97xxhVcubGKNGgH7rKxCbcTvuMufbwtyCS&X-Amz-Signature=8cb5acc9c1054395d08a4df9091100447f29eb83635e325acc918239975f1ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
