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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EWBE4G%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkvPTDYcn%2FonznpiGZmY6tvEBNkN919VJuIvQJMLH2wIhAJj9m8wVLrY6VaQXPt5Mtbfzp6LkBww1XEr1dd%2BqNgJ1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjPsAlpSYx3ShW3u4q3AOqbk0q7KLWuf1M9ewU%2Fj2tu%2FS%2FjZoE9MpYVGyLlldv0osW3uX34IgOvZJRPz74I4Cp%2BvTwADGvI7HlSdleq2zTvXoz%2FzavaTCEsnMw2twgfmDXyoQ1Ym%2Bc8nnA8JkUGnpjwc%2BNnYMA5XL2H2%2Bx4keBJX9HrFR%2B5cqzXJN1OsRYE2mwrb2O4f%2BaJDdkAVGIuZGjche3kLAjDBmJN8%2B8CJUp0TIujHaL7eLcYTEsJifL7wTLE9jvWeuoaQglQb2kg8OXV%2BloNg8aL%2FviQ1yisfTVSXsmHzdkf3HD4gnv2LtC8mwrNAxlgpo7rsvvb9hhSitzpHMIAV1tG7FQHYw0DyEi9aq9C1EKDx2ZJe5BoHMnGMJafaTSgQBt32yERGCTq3yL2YwXEzJYKwcBoJXVEnMlVg1rUJHqZU1WhLecQ0C%2BCPw%2B1A6agW56siA5Z5ZHf6nlC1rCAcfh1UlwZrD%2BvrTcnFUlk3GAtPav5u6ZtDjrqB0t0wpuE7ZwyhYOc6Pi1zhOyavXv9dbwL4QWxqxhYazt5KQHd0mnfgVkoKoPLgMln8xLy%2BiN2ef96Go1IgoRf1r0F%2BXbVAMHp3PWnH34S7QFhha1rsN%2BgZjuOOzONuGM5h2nOrgSJoyoVbwCzDW8IfDBjqkAU2ZYmjNjqDJX2miwe78JZxnhOEvc%2BZR6yb%2F8IVTHUwtmQG9cmYb%2B9VZ7lBoyWyoTtVRsXVdwNim7MHciowUduI%2B02YC%2F%2BjdWm2TsBlHu1R6fUZN0pLM406QQedh4MZpCh%2FPRLDHWFRzURoxGVVum049W0az4BKHk1746RF8aoId1r6QtBFa4v6lD%2FVt0z8G31%2BZGbOEWxQEntzOlTqnEN%2BeGXte&X-Amz-Signature=445500953764485ce6075bfbf48d0e4a799bf39f44dc655ff1ef9239eec563a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EWBE4G%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkvPTDYcn%2FonznpiGZmY6tvEBNkN919VJuIvQJMLH2wIhAJj9m8wVLrY6VaQXPt5Mtbfzp6LkBww1XEr1dd%2BqNgJ1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjPsAlpSYx3ShW3u4q3AOqbk0q7KLWuf1M9ewU%2Fj2tu%2FS%2FjZoE9MpYVGyLlldv0osW3uX34IgOvZJRPz74I4Cp%2BvTwADGvI7HlSdleq2zTvXoz%2FzavaTCEsnMw2twgfmDXyoQ1Ym%2Bc8nnA8JkUGnpjwc%2BNnYMA5XL2H2%2Bx4keBJX9HrFR%2B5cqzXJN1OsRYE2mwrb2O4f%2BaJDdkAVGIuZGjche3kLAjDBmJN8%2B8CJUp0TIujHaL7eLcYTEsJifL7wTLE9jvWeuoaQglQb2kg8OXV%2BloNg8aL%2FviQ1yisfTVSXsmHzdkf3HD4gnv2LtC8mwrNAxlgpo7rsvvb9hhSitzpHMIAV1tG7FQHYw0DyEi9aq9C1EKDx2ZJe5BoHMnGMJafaTSgQBt32yERGCTq3yL2YwXEzJYKwcBoJXVEnMlVg1rUJHqZU1WhLecQ0C%2BCPw%2B1A6agW56siA5Z5ZHf6nlC1rCAcfh1UlwZrD%2BvrTcnFUlk3GAtPav5u6ZtDjrqB0t0wpuE7ZwyhYOc6Pi1zhOyavXv9dbwL4QWxqxhYazt5KQHd0mnfgVkoKoPLgMln8xLy%2BiN2ef96Go1IgoRf1r0F%2BXbVAMHp3PWnH34S7QFhha1rsN%2BgZjuOOzONuGM5h2nOrgSJoyoVbwCzDW8IfDBjqkAU2ZYmjNjqDJX2miwe78JZxnhOEvc%2BZR6yb%2F8IVTHUwtmQG9cmYb%2B9VZ7lBoyWyoTtVRsXVdwNim7MHciowUduI%2B02YC%2F%2BjdWm2TsBlHu1R6fUZN0pLM406QQedh4MZpCh%2FPRLDHWFRzURoxGVVum049W0az4BKHk1746RF8aoId1r6QtBFa4v6lD%2FVt0z8G31%2BZGbOEWxQEntzOlTqnEN%2BeGXte&X-Amz-Signature=70ea1eda8f4f4d823756fac8c89c2f6bec838bdd0b2b160164e60fe3db16d0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EWBE4G%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkvPTDYcn%2FonznpiGZmY6tvEBNkN919VJuIvQJMLH2wIhAJj9m8wVLrY6VaQXPt5Mtbfzp6LkBww1XEr1dd%2BqNgJ1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjPsAlpSYx3ShW3u4q3AOqbk0q7KLWuf1M9ewU%2Fj2tu%2FS%2FjZoE9MpYVGyLlldv0osW3uX34IgOvZJRPz74I4Cp%2BvTwADGvI7HlSdleq2zTvXoz%2FzavaTCEsnMw2twgfmDXyoQ1Ym%2Bc8nnA8JkUGnpjwc%2BNnYMA5XL2H2%2Bx4keBJX9HrFR%2B5cqzXJN1OsRYE2mwrb2O4f%2BaJDdkAVGIuZGjche3kLAjDBmJN8%2B8CJUp0TIujHaL7eLcYTEsJifL7wTLE9jvWeuoaQglQb2kg8OXV%2BloNg8aL%2FviQ1yisfTVSXsmHzdkf3HD4gnv2LtC8mwrNAxlgpo7rsvvb9hhSitzpHMIAV1tG7FQHYw0DyEi9aq9C1EKDx2ZJe5BoHMnGMJafaTSgQBt32yERGCTq3yL2YwXEzJYKwcBoJXVEnMlVg1rUJHqZU1WhLecQ0C%2BCPw%2B1A6agW56siA5Z5ZHf6nlC1rCAcfh1UlwZrD%2BvrTcnFUlk3GAtPav5u6ZtDjrqB0t0wpuE7ZwyhYOc6Pi1zhOyavXv9dbwL4QWxqxhYazt5KQHd0mnfgVkoKoPLgMln8xLy%2BiN2ef96Go1IgoRf1r0F%2BXbVAMHp3PWnH34S7QFhha1rsN%2BgZjuOOzONuGM5h2nOrgSJoyoVbwCzDW8IfDBjqkAU2ZYmjNjqDJX2miwe78JZxnhOEvc%2BZR6yb%2F8IVTHUwtmQG9cmYb%2B9VZ7lBoyWyoTtVRsXVdwNim7MHciowUduI%2B02YC%2F%2BjdWm2TsBlHu1R6fUZN0pLM406QQedh4MZpCh%2FPRLDHWFRzURoxGVVum049W0az4BKHk1746RF8aoId1r6QtBFa4v6lD%2FVt0z8G31%2BZGbOEWxQEntzOlTqnEN%2BeGXte&X-Amz-Signature=51e17a8529a57e3e8378dd476feca1d3665c4e1a804b84655ec256c56910db57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EWBE4G%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkvPTDYcn%2FonznpiGZmY6tvEBNkN919VJuIvQJMLH2wIhAJj9m8wVLrY6VaQXPt5Mtbfzp6LkBww1XEr1dd%2BqNgJ1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjPsAlpSYx3ShW3u4q3AOqbk0q7KLWuf1M9ewU%2Fj2tu%2FS%2FjZoE9MpYVGyLlldv0osW3uX34IgOvZJRPz74I4Cp%2BvTwADGvI7HlSdleq2zTvXoz%2FzavaTCEsnMw2twgfmDXyoQ1Ym%2Bc8nnA8JkUGnpjwc%2BNnYMA5XL2H2%2Bx4keBJX9HrFR%2B5cqzXJN1OsRYE2mwrb2O4f%2BaJDdkAVGIuZGjche3kLAjDBmJN8%2B8CJUp0TIujHaL7eLcYTEsJifL7wTLE9jvWeuoaQglQb2kg8OXV%2BloNg8aL%2FviQ1yisfTVSXsmHzdkf3HD4gnv2LtC8mwrNAxlgpo7rsvvb9hhSitzpHMIAV1tG7FQHYw0DyEi9aq9C1EKDx2ZJe5BoHMnGMJafaTSgQBt32yERGCTq3yL2YwXEzJYKwcBoJXVEnMlVg1rUJHqZU1WhLecQ0C%2BCPw%2B1A6agW56siA5Z5ZHf6nlC1rCAcfh1UlwZrD%2BvrTcnFUlk3GAtPav5u6ZtDjrqB0t0wpuE7ZwyhYOc6Pi1zhOyavXv9dbwL4QWxqxhYazt5KQHd0mnfgVkoKoPLgMln8xLy%2BiN2ef96Go1IgoRf1r0F%2BXbVAMHp3PWnH34S7QFhha1rsN%2BgZjuOOzONuGM5h2nOrgSJoyoVbwCzDW8IfDBjqkAU2ZYmjNjqDJX2miwe78JZxnhOEvc%2BZR6yb%2F8IVTHUwtmQG9cmYb%2B9VZ7lBoyWyoTtVRsXVdwNim7MHciowUduI%2B02YC%2F%2BjdWm2TsBlHu1R6fUZN0pLM406QQedh4MZpCh%2FPRLDHWFRzURoxGVVum049W0az4BKHk1746RF8aoId1r6QtBFa4v6lD%2FVt0z8G31%2BZGbOEWxQEntzOlTqnEN%2BeGXte&X-Amz-Signature=e8a33ff81bb9ddebe77392180a5451bed142ba45802911f03f7faaaae8ad9a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EWBE4G%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkvPTDYcn%2FonznpiGZmY6tvEBNkN919VJuIvQJMLH2wIhAJj9m8wVLrY6VaQXPt5Mtbfzp6LkBww1XEr1dd%2BqNgJ1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjPsAlpSYx3ShW3u4q3AOqbk0q7KLWuf1M9ewU%2Fj2tu%2FS%2FjZoE9MpYVGyLlldv0osW3uX34IgOvZJRPz74I4Cp%2BvTwADGvI7HlSdleq2zTvXoz%2FzavaTCEsnMw2twgfmDXyoQ1Ym%2Bc8nnA8JkUGnpjwc%2BNnYMA5XL2H2%2Bx4keBJX9HrFR%2B5cqzXJN1OsRYE2mwrb2O4f%2BaJDdkAVGIuZGjche3kLAjDBmJN8%2B8CJUp0TIujHaL7eLcYTEsJifL7wTLE9jvWeuoaQglQb2kg8OXV%2BloNg8aL%2FviQ1yisfTVSXsmHzdkf3HD4gnv2LtC8mwrNAxlgpo7rsvvb9hhSitzpHMIAV1tG7FQHYw0DyEi9aq9C1EKDx2ZJe5BoHMnGMJafaTSgQBt32yERGCTq3yL2YwXEzJYKwcBoJXVEnMlVg1rUJHqZU1WhLecQ0C%2BCPw%2B1A6agW56siA5Z5ZHf6nlC1rCAcfh1UlwZrD%2BvrTcnFUlk3GAtPav5u6ZtDjrqB0t0wpuE7ZwyhYOc6Pi1zhOyavXv9dbwL4QWxqxhYazt5KQHd0mnfgVkoKoPLgMln8xLy%2BiN2ef96Go1IgoRf1r0F%2BXbVAMHp3PWnH34S7QFhha1rsN%2BgZjuOOzONuGM5h2nOrgSJoyoVbwCzDW8IfDBjqkAU2ZYmjNjqDJX2miwe78JZxnhOEvc%2BZR6yb%2F8IVTHUwtmQG9cmYb%2B9VZ7lBoyWyoTtVRsXVdwNim7MHciowUduI%2B02YC%2F%2BjdWm2TsBlHu1R6fUZN0pLM406QQedh4MZpCh%2FPRLDHWFRzURoxGVVum049W0az4BKHk1746RF8aoId1r6QtBFa4v6lD%2FVt0z8G31%2BZGbOEWxQEntzOlTqnEN%2BeGXte&X-Amz-Signature=9ae8ed675397990dcb09407cee9045b2e2029ba6311e4fa35469f322d6c6168d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EWBE4G%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkvPTDYcn%2FonznpiGZmY6tvEBNkN919VJuIvQJMLH2wIhAJj9m8wVLrY6VaQXPt5Mtbfzp6LkBww1XEr1dd%2BqNgJ1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjPsAlpSYx3ShW3u4q3AOqbk0q7KLWuf1M9ewU%2Fj2tu%2FS%2FjZoE9MpYVGyLlldv0osW3uX34IgOvZJRPz74I4Cp%2BvTwADGvI7HlSdleq2zTvXoz%2FzavaTCEsnMw2twgfmDXyoQ1Ym%2Bc8nnA8JkUGnpjwc%2BNnYMA5XL2H2%2Bx4keBJX9HrFR%2B5cqzXJN1OsRYE2mwrb2O4f%2BaJDdkAVGIuZGjche3kLAjDBmJN8%2B8CJUp0TIujHaL7eLcYTEsJifL7wTLE9jvWeuoaQglQb2kg8OXV%2BloNg8aL%2FviQ1yisfTVSXsmHzdkf3HD4gnv2LtC8mwrNAxlgpo7rsvvb9hhSitzpHMIAV1tG7FQHYw0DyEi9aq9C1EKDx2ZJe5BoHMnGMJafaTSgQBt32yERGCTq3yL2YwXEzJYKwcBoJXVEnMlVg1rUJHqZU1WhLecQ0C%2BCPw%2B1A6agW56siA5Z5ZHf6nlC1rCAcfh1UlwZrD%2BvrTcnFUlk3GAtPav5u6ZtDjrqB0t0wpuE7ZwyhYOc6Pi1zhOyavXv9dbwL4QWxqxhYazt5KQHd0mnfgVkoKoPLgMln8xLy%2BiN2ef96Go1IgoRf1r0F%2BXbVAMHp3PWnH34S7QFhha1rsN%2BgZjuOOzONuGM5h2nOrgSJoyoVbwCzDW8IfDBjqkAU2ZYmjNjqDJX2miwe78JZxnhOEvc%2BZR6yb%2F8IVTHUwtmQG9cmYb%2B9VZ7lBoyWyoTtVRsXVdwNim7MHciowUduI%2B02YC%2F%2BjdWm2TsBlHu1R6fUZN0pLM406QQedh4MZpCh%2FPRLDHWFRzURoxGVVum049W0az4BKHk1746RF8aoId1r6QtBFa4v6lD%2FVt0z8G31%2BZGbOEWxQEntzOlTqnEN%2BeGXte&X-Amz-Signature=1d20c57dc0d11b140629175d8de9dfbeb08e461b7a03979412d3ad41ede87a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EWBE4G%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkvPTDYcn%2FonznpiGZmY6tvEBNkN919VJuIvQJMLH2wIhAJj9m8wVLrY6VaQXPt5Mtbfzp6LkBww1XEr1dd%2BqNgJ1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjPsAlpSYx3ShW3u4q3AOqbk0q7KLWuf1M9ewU%2Fj2tu%2FS%2FjZoE9MpYVGyLlldv0osW3uX34IgOvZJRPz74I4Cp%2BvTwADGvI7HlSdleq2zTvXoz%2FzavaTCEsnMw2twgfmDXyoQ1Ym%2Bc8nnA8JkUGnpjwc%2BNnYMA5XL2H2%2Bx4keBJX9HrFR%2B5cqzXJN1OsRYE2mwrb2O4f%2BaJDdkAVGIuZGjche3kLAjDBmJN8%2B8CJUp0TIujHaL7eLcYTEsJifL7wTLE9jvWeuoaQglQb2kg8OXV%2BloNg8aL%2FviQ1yisfTVSXsmHzdkf3HD4gnv2LtC8mwrNAxlgpo7rsvvb9hhSitzpHMIAV1tG7FQHYw0DyEi9aq9C1EKDx2ZJe5BoHMnGMJafaTSgQBt32yERGCTq3yL2YwXEzJYKwcBoJXVEnMlVg1rUJHqZU1WhLecQ0C%2BCPw%2B1A6agW56siA5Z5ZHf6nlC1rCAcfh1UlwZrD%2BvrTcnFUlk3GAtPav5u6ZtDjrqB0t0wpuE7ZwyhYOc6Pi1zhOyavXv9dbwL4QWxqxhYazt5KQHd0mnfgVkoKoPLgMln8xLy%2BiN2ef96Go1IgoRf1r0F%2BXbVAMHp3PWnH34S7QFhha1rsN%2BgZjuOOzONuGM5h2nOrgSJoyoVbwCzDW8IfDBjqkAU2ZYmjNjqDJX2miwe78JZxnhOEvc%2BZR6yb%2F8IVTHUwtmQG9cmYb%2B9VZ7lBoyWyoTtVRsXVdwNim7MHciowUduI%2B02YC%2F%2BjdWm2TsBlHu1R6fUZN0pLM406QQedh4MZpCh%2FPRLDHWFRzURoxGVVum049W0az4BKHk1746RF8aoId1r6QtBFa4v6lD%2FVt0z8G31%2BZGbOEWxQEntzOlTqnEN%2BeGXte&X-Amz-Signature=a192074acae167525be9cae31765675056ca869625905d0fd132f0ce82f51811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654EWBE4G%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZkvPTDYcn%2FonznpiGZmY6tvEBNkN919VJuIvQJMLH2wIhAJj9m8wVLrY6VaQXPt5Mtbfzp6LkBww1XEr1dd%2BqNgJ1KogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjPsAlpSYx3ShW3u4q3AOqbk0q7KLWuf1M9ewU%2Fj2tu%2FS%2FjZoE9MpYVGyLlldv0osW3uX34IgOvZJRPz74I4Cp%2BvTwADGvI7HlSdleq2zTvXoz%2FzavaTCEsnMw2twgfmDXyoQ1Ym%2Bc8nnA8JkUGnpjwc%2BNnYMA5XL2H2%2Bx4keBJX9HrFR%2B5cqzXJN1OsRYE2mwrb2O4f%2BaJDdkAVGIuZGjche3kLAjDBmJN8%2B8CJUp0TIujHaL7eLcYTEsJifL7wTLE9jvWeuoaQglQb2kg8OXV%2BloNg8aL%2FviQ1yisfTVSXsmHzdkf3HD4gnv2LtC8mwrNAxlgpo7rsvvb9hhSitzpHMIAV1tG7FQHYw0DyEi9aq9C1EKDx2ZJe5BoHMnGMJafaTSgQBt32yERGCTq3yL2YwXEzJYKwcBoJXVEnMlVg1rUJHqZU1WhLecQ0C%2BCPw%2B1A6agW56siA5Z5ZHf6nlC1rCAcfh1UlwZrD%2BvrTcnFUlk3GAtPav5u6ZtDjrqB0t0wpuE7ZwyhYOc6Pi1zhOyavXv9dbwL4QWxqxhYazt5KQHd0mnfgVkoKoPLgMln8xLy%2BiN2ef96Go1IgoRf1r0F%2BXbVAMHp3PWnH34S7QFhha1rsN%2BgZjuOOzONuGM5h2nOrgSJoyoVbwCzDW8IfDBjqkAU2ZYmjNjqDJX2miwe78JZxnhOEvc%2BZR6yb%2F8IVTHUwtmQG9cmYb%2B9VZ7lBoyWyoTtVRsXVdwNim7MHciowUduI%2B02YC%2F%2BjdWm2TsBlHu1R6fUZN0pLM406QQedh4MZpCh%2FPRLDHWFRzURoxGVVum049W0az4BKHk1746RF8aoId1r6QtBFa4v6lD%2FVt0z8G31%2BZGbOEWxQEntzOlTqnEN%2BeGXte&X-Amz-Signature=4b979acbb01ffb3d6e052f2f7149d61404c3bcea97432386c5ac76b70d8550c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
