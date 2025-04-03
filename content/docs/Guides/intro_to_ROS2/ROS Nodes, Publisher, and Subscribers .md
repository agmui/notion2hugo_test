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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5LMFEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4cenKWnx%2Fbu4Z2zfVAtaK85W%2FSf%2FTamNVYDdkJoFrnAiATCwnS6%2FegqDLr1l9lNBePUp%2B3lYzPx0Uc4yhUwBQ6JSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqZjKhTN787M1yX8hKtwDVg6%2FWyGvvkwlPx%2FwyZ%2FkGfv%2Fco10dJRXYstaRIxFa7ilm4hI%2BdMv7MGjayH6AZI%2FDllegmDPejiAieoeBaV400mL7KuUBFVjRiqpyqqjy%2FsZNd4OR1NgY085uUZqYumEsFfmBPV4ZevulcvIiwUEcatdKmaD4vTVN72fBJnDYFW5znj%2B8d7YfspjNItyUYqoqLj7090XcDLvo%2Bzbe%2BUKLxk8OOmdXxuvUepsQM%2F3hUYxO2SFZUMB0U1%2Fcw3hkkO3cGQ9S3AM7pZ%2BTCJufLtajDibQ%2BI7dBZ2dBgOlBYXtO3HJC5%2FmicO95gcxa0gAgf7JUF0J32jFKj7R4p2zuRe9pABh%2F7i%2F8ORJriUtBK8Mc7vXhoSDf1yR5EK8gTbA8sok2c6NKtO7USeUjF9o1WLSLQR60tk4DoNidW%2BeutknKGDhnzwHaMt9HfTtzQ2lEi%2FEGgR718EmO6ChFc2XzLXBpf1hAgqw6JHolI0I%2B87MoIBMGSUnSYQJPKTF7yBgVAvgoZqYeYiWJ2eSGBBqTMK8CDwWki2V5fNymykTA6Fh2ZMBmFBe0Uhmkie7QtvnSvZlKn6cwUrwFJXvyt%2BORla0khIbyG%2FG2aVhXzVjrpVZ9PQgk22Voaoo4mrMzYwlOq7vwY6pgHIBEii8G%2BidR3l8Rijk47CChfRk1UMYsEkHMZsc488EVu1FYQReqj6fj6a0BS%2BAHaCsc8bPGZ5EcRoyvEXQdWy%2Fd88QUTX5IYPHvcwvGaOooG4rnt%2BoKsYixhudJ43DFUCc9uP0lyPWhAt5gTVlwi38fI8Gk2rcc3NqNEYyAam%2B6279ewHodjA6z%2FQrbR0dRO8HmkrjdywJI%2FgJNPOqky%2Bq%2Bfubfgl&X-Amz-Signature=5608f82cee95781dd516617f5143b18513c402fd64ce83e2904607f53dd010f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5LMFEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4cenKWnx%2Fbu4Z2zfVAtaK85W%2FSf%2FTamNVYDdkJoFrnAiATCwnS6%2FegqDLr1l9lNBePUp%2B3lYzPx0Uc4yhUwBQ6JSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqZjKhTN787M1yX8hKtwDVg6%2FWyGvvkwlPx%2FwyZ%2FkGfv%2Fco10dJRXYstaRIxFa7ilm4hI%2BdMv7MGjayH6AZI%2FDllegmDPejiAieoeBaV400mL7KuUBFVjRiqpyqqjy%2FsZNd4OR1NgY085uUZqYumEsFfmBPV4ZevulcvIiwUEcatdKmaD4vTVN72fBJnDYFW5znj%2B8d7YfspjNItyUYqoqLj7090XcDLvo%2Bzbe%2BUKLxk8OOmdXxuvUepsQM%2F3hUYxO2SFZUMB0U1%2Fcw3hkkO3cGQ9S3AM7pZ%2BTCJufLtajDibQ%2BI7dBZ2dBgOlBYXtO3HJC5%2FmicO95gcxa0gAgf7JUF0J32jFKj7R4p2zuRe9pABh%2F7i%2F8ORJriUtBK8Mc7vXhoSDf1yR5EK8gTbA8sok2c6NKtO7USeUjF9o1WLSLQR60tk4DoNidW%2BeutknKGDhnzwHaMt9HfTtzQ2lEi%2FEGgR718EmO6ChFc2XzLXBpf1hAgqw6JHolI0I%2B87MoIBMGSUnSYQJPKTF7yBgVAvgoZqYeYiWJ2eSGBBqTMK8CDwWki2V5fNymykTA6Fh2ZMBmFBe0Uhmkie7QtvnSvZlKn6cwUrwFJXvyt%2BORla0khIbyG%2FG2aVhXzVjrpVZ9PQgk22Voaoo4mrMzYwlOq7vwY6pgHIBEii8G%2BidR3l8Rijk47CChfRk1UMYsEkHMZsc488EVu1FYQReqj6fj6a0BS%2BAHaCsc8bPGZ5EcRoyvEXQdWy%2Fd88QUTX5IYPHvcwvGaOooG4rnt%2BoKsYixhudJ43DFUCc9uP0lyPWhAt5gTVlwi38fI8Gk2rcc3NqNEYyAam%2B6279ewHodjA6z%2FQrbR0dRO8HmkrjdywJI%2FgJNPOqky%2Bq%2Bfubfgl&X-Amz-Signature=f0326fa5404b01a2c8ae9bbadde951bded429fc76be98e3ca9c2e665a70f0586&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5LMFEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4cenKWnx%2Fbu4Z2zfVAtaK85W%2FSf%2FTamNVYDdkJoFrnAiATCwnS6%2FegqDLr1l9lNBePUp%2B3lYzPx0Uc4yhUwBQ6JSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqZjKhTN787M1yX8hKtwDVg6%2FWyGvvkwlPx%2FwyZ%2FkGfv%2Fco10dJRXYstaRIxFa7ilm4hI%2BdMv7MGjayH6AZI%2FDllegmDPejiAieoeBaV400mL7KuUBFVjRiqpyqqjy%2FsZNd4OR1NgY085uUZqYumEsFfmBPV4ZevulcvIiwUEcatdKmaD4vTVN72fBJnDYFW5znj%2B8d7YfspjNItyUYqoqLj7090XcDLvo%2Bzbe%2BUKLxk8OOmdXxuvUepsQM%2F3hUYxO2SFZUMB0U1%2Fcw3hkkO3cGQ9S3AM7pZ%2BTCJufLtajDibQ%2BI7dBZ2dBgOlBYXtO3HJC5%2FmicO95gcxa0gAgf7JUF0J32jFKj7R4p2zuRe9pABh%2F7i%2F8ORJriUtBK8Mc7vXhoSDf1yR5EK8gTbA8sok2c6NKtO7USeUjF9o1WLSLQR60tk4DoNidW%2BeutknKGDhnzwHaMt9HfTtzQ2lEi%2FEGgR718EmO6ChFc2XzLXBpf1hAgqw6JHolI0I%2B87MoIBMGSUnSYQJPKTF7yBgVAvgoZqYeYiWJ2eSGBBqTMK8CDwWki2V5fNymykTA6Fh2ZMBmFBe0Uhmkie7QtvnSvZlKn6cwUrwFJXvyt%2BORla0khIbyG%2FG2aVhXzVjrpVZ9PQgk22Voaoo4mrMzYwlOq7vwY6pgHIBEii8G%2BidR3l8Rijk47CChfRk1UMYsEkHMZsc488EVu1FYQReqj6fj6a0BS%2BAHaCsc8bPGZ5EcRoyvEXQdWy%2Fd88QUTX5IYPHvcwvGaOooG4rnt%2BoKsYixhudJ43DFUCc9uP0lyPWhAt5gTVlwi38fI8Gk2rcc3NqNEYyAam%2B6279ewHodjA6z%2FQrbR0dRO8HmkrjdywJI%2FgJNPOqky%2Bq%2Bfubfgl&X-Amz-Signature=f656c23522dcced04a916b659001a2f912c53b70ec962bc92817b5ffe60b0883&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5LMFEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4cenKWnx%2Fbu4Z2zfVAtaK85W%2FSf%2FTamNVYDdkJoFrnAiATCwnS6%2FegqDLr1l9lNBePUp%2B3lYzPx0Uc4yhUwBQ6JSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqZjKhTN787M1yX8hKtwDVg6%2FWyGvvkwlPx%2FwyZ%2FkGfv%2Fco10dJRXYstaRIxFa7ilm4hI%2BdMv7MGjayH6AZI%2FDllegmDPejiAieoeBaV400mL7KuUBFVjRiqpyqqjy%2FsZNd4OR1NgY085uUZqYumEsFfmBPV4ZevulcvIiwUEcatdKmaD4vTVN72fBJnDYFW5znj%2B8d7YfspjNItyUYqoqLj7090XcDLvo%2Bzbe%2BUKLxk8OOmdXxuvUepsQM%2F3hUYxO2SFZUMB0U1%2Fcw3hkkO3cGQ9S3AM7pZ%2BTCJufLtajDibQ%2BI7dBZ2dBgOlBYXtO3HJC5%2FmicO95gcxa0gAgf7JUF0J32jFKj7R4p2zuRe9pABh%2F7i%2F8ORJriUtBK8Mc7vXhoSDf1yR5EK8gTbA8sok2c6NKtO7USeUjF9o1WLSLQR60tk4DoNidW%2BeutknKGDhnzwHaMt9HfTtzQ2lEi%2FEGgR718EmO6ChFc2XzLXBpf1hAgqw6JHolI0I%2B87MoIBMGSUnSYQJPKTF7yBgVAvgoZqYeYiWJ2eSGBBqTMK8CDwWki2V5fNymykTA6Fh2ZMBmFBe0Uhmkie7QtvnSvZlKn6cwUrwFJXvyt%2BORla0khIbyG%2FG2aVhXzVjrpVZ9PQgk22Voaoo4mrMzYwlOq7vwY6pgHIBEii8G%2BidR3l8Rijk47CChfRk1UMYsEkHMZsc488EVu1FYQReqj6fj6a0BS%2BAHaCsc8bPGZ5EcRoyvEXQdWy%2Fd88QUTX5IYPHvcwvGaOooG4rnt%2BoKsYixhudJ43DFUCc9uP0lyPWhAt5gTVlwi38fI8Gk2rcc3NqNEYyAam%2B6279ewHodjA6z%2FQrbR0dRO8HmkrjdywJI%2FgJNPOqky%2Bq%2Bfubfgl&X-Amz-Signature=0f17cd5f7d6d522e412220c5ae567b6e603125775b24c2845d0fcfed9d2a3678&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5LMFEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4cenKWnx%2Fbu4Z2zfVAtaK85W%2FSf%2FTamNVYDdkJoFrnAiATCwnS6%2FegqDLr1l9lNBePUp%2B3lYzPx0Uc4yhUwBQ6JSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqZjKhTN787M1yX8hKtwDVg6%2FWyGvvkwlPx%2FwyZ%2FkGfv%2Fco10dJRXYstaRIxFa7ilm4hI%2BdMv7MGjayH6AZI%2FDllegmDPejiAieoeBaV400mL7KuUBFVjRiqpyqqjy%2FsZNd4OR1NgY085uUZqYumEsFfmBPV4ZevulcvIiwUEcatdKmaD4vTVN72fBJnDYFW5znj%2B8d7YfspjNItyUYqoqLj7090XcDLvo%2Bzbe%2BUKLxk8OOmdXxuvUepsQM%2F3hUYxO2SFZUMB0U1%2Fcw3hkkO3cGQ9S3AM7pZ%2BTCJufLtajDibQ%2BI7dBZ2dBgOlBYXtO3HJC5%2FmicO95gcxa0gAgf7JUF0J32jFKj7R4p2zuRe9pABh%2F7i%2F8ORJriUtBK8Mc7vXhoSDf1yR5EK8gTbA8sok2c6NKtO7USeUjF9o1WLSLQR60tk4DoNidW%2BeutknKGDhnzwHaMt9HfTtzQ2lEi%2FEGgR718EmO6ChFc2XzLXBpf1hAgqw6JHolI0I%2B87MoIBMGSUnSYQJPKTF7yBgVAvgoZqYeYiWJ2eSGBBqTMK8CDwWki2V5fNymykTA6Fh2ZMBmFBe0Uhmkie7QtvnSvZlKn6cwUrwFJXvyt%2BORla0khIbyG%2FG2aVhXzVjrpVZ9PQgk22Voaoo4mrMzYwlOq7vwY6pgHIBEii8G%2BidR3l8Rijk47CChfRk1UMYsEkHMZsc488EVu1FYQReqj6fj6a0BS%2BAHaCsc8bPGZ5EcRoyvEXQdWy%2Fd88QUTX5IYPHvcwvGaOooG4rnt%2BoKsYixhudJ43DFUCc9uP0lyPWhAt5gTVlwi38fI8Gk2rcc3NqNEYyAam%2B6279ewHodjA6z%2FQrbR0dRO8HmkrjdywJI%2FgJNPOqky%2Bq%2Bfubfgl&X-Amz-Signature=eb207ad7d32e8d73e05db7c19d2609ff1c22a148fc05db5380b53dc59fa2a631&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5LMFEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4cenKWnx%2Fbu4Z2zfVAtaK85W%2FSf%2FTamNVYDdkJoFrnAiATCwnS6%2FegqDLr1l9lNBePUp%2B3lYzPx0Uc4yhUwBQ6JSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqZjKhTN787M1yX8hKtwDVg6%2FWyGvvkwlPx%2FwyZ%2FkGfv%2Fco10dJRXYstaRIxFa7ilm4hI%2BdMv7MGjayH6AZI%2FDllegmDPejiAieoeBaV400mL7KuUBFVjRiqpyqqjy%2FsZNd4OR1NgY085uUZqYumEsFfmBPV4ZevulcvIiwUEcatdKmaD4vTVN72fBJnDYFW5znj%2B8d7YfspjNItyUYqoqLj7090XcDLvo%2Bzbe%2BUKLxk8OOmdXxuvUepsQM%2F3hUYxO2SFZUMB0U1%2Fcw3hkkO3cGQ9S3AM7pZ%2BTCJufLtajDibQ%2BI7dBZ2dBgOlBYXtO3HJC5%2FmicO95gcxa0gAgf7JUF0J32jFKj7R4p2zuRe9pABh%2F7i%2F8ORJriUtBK8Mc7vXhoSDf1yR5EK8gTbA8sok2c6NKtO7USeUjF9o1WLSLQR60tk4DoNidW%2BeutknKGDhnzwHaMt9HfTtzQ2lEi%2FEGgR718EmO6ChFc2XzLXBpf1hAgqw6JHolI0I%2B87MoIBMGSUnSYQJPKTF7yBgVAvgoZqYeYiWJ2eSGBBqTMK8CDwWki2V5fNymykTA6Fh2ZMBmFBe0Uhmkie7QtvnSvZlKn6cwUrwFJXvyt%2BORla0khIbyG%2FG2aVhXzVjrpVZ9PQgk22Voaoo4mrMzYwlOq7vwY6pgHIBEii8G%2BidR3l8Rijk47CChfRk1UMYsEkHMZsc488EVu1FYQReqj6fj6a0BS%2BAHaCsc8bPGZ5EcRoyvEXQdWy%2Fd88QUTX5IYPHvcwvGaOooG4rnt%2BoKsYixhudJ43DFUCc9uP0lyPWhAt5gTVlwi38fI8Gk2rcc3NqNEYyAam%2B6279ewHodjA6z%2FQrbR0dRO8HmkrjdywJI%2FgJNPOqky%2Bq%2Bfubfgl&X-Amz-Signature=d87dc41e37b004e2f9e40574d1edafc2eac0e8a568e8f117fcf90e2d39260ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5LMFEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4cenKWnx%2Fbu4Z2zfVAtaK85W%2FSf%2FTamNVYDdkJoFrnAiATCwnS6%2FegqDLr1l9lNBePUp%2B3lYzPx0Uc4yhUwBQ6JSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqZjKhTN787M1yX8hKtwDVg6%2FWyGvvkwlPx%2FwyZ%2FkGfv%2Fco10dJRXYstaRIxFa7ilm4hI%2BdMv7MGjayH6AZI%2FDllegmDPejiAieoeBaV400mL7KuUBFVjRiqpyqqjy%2FsZNd4OR1NgY085uUZqYumEsFfmBPV4ZevulcvIiwUEcatdKmaD4vTVN72fBJnDYFW5znj%2B8d7YfspjNItyUYqoqLj7090XcDLvo%2Bzbe%2BUKLxk8OOmdXxuvUepsQM%2F3hUYxO2SFZUMB0U1%2Fcw3hkkO3cGQ9S3AM7pZ%2BTCJufLtajDibQ%2BI7dBZ2dBgOlBYXtO3HJC5%2FmicO95gcxa0gAgf7JUF0J32jFKj7R4p2zuRe9pABh%2F7i%2F8ORJriUtBK8Mc7vXhoSDf1yR5EK8gTbA8sok2c6NKtO7USeUjF9o1WLSLQR60tk4DoNidW%2BeutknKGDhnzwHaMt9HfTtzQ2lEi%2FEGgR718EmO6ChFc2XzLXBpf1hAgqw6JHolI0I%2B87MoIBMGSUnSYQJPKTF7yBgVAvgoZqYeYiWJ2eSGBBqTMK8CDwWki2V5fNymykTA6Fh2ZMBmFBe0Uhmkie7QtvnSvZlKn6cwUrwFJXvyt%2BORla0khIbyG%2FG2aVhXzVjrpVZ9PQgk22Voaoo4mrMzYwlOq7vwY6pgHIBEii8G%2BidR3l8Rijk47CChfRk1UMYsEkHMZsc488EVu1FYQReqj6fj6a0BS%2BAHaCsc8bPGZ5EcRoyvEXQdWy%2Fd88QUTX5IYPHvcwvGaOooG4rnt%2BoKsYixhudJ43DFUCc9uP0lyPWhAt5gTVlwi38fI8Gk2rcc3NqNEYyAam%2B6279ewHodjA6z%2FQrbR0dRO8HmkrjdywJI%2FgJNPOqky%2Bq%2Bfubfgl&X-Amz-Signature=4d927f70fd6366e719366019726986ef9df6fcad31122e384f20ac45ee64981b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5LMFEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4cenKWnx%2Fbu4Z2zfVAtaK85W%2FSf%2FTamNVYDdkJoFrnAiATCwnS6%2FegqDLr1l9lNBePUp%2B3lYzPx0Uc4yhUwBQ6JSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqZjKhTN787M1yX8hKtwDVg6%2FWyGvvkwlPx%2FwyZ%2FkGfv%2Fco10dJRXYstaRIxFa7ilm4hI%2BdMv7MGjayH6AZI%2FDllegmDPejiAieoeBaV400mL7KuUBFVjRiqpyqqjy%2FsZNd4OR1NgY085uUZqYumEsFfmBPV4ZevulcvIiwUEcatdKmaD4vTVN72fBJnDYFW5znj%2B8d7YfspjNItyUYqoqLj7090XcDLvo%2Bzbe%2BUKLxk8OOmdXxuvUepsQM%2F3hUYxO2SFZUMB0U1%2Fcw3hkkO3cGQ9S3AM7pZ%2BTCJufLtajDibQ%2BI7dBZ2dBgOlBYXtO3HJC5%2FmicO95gcxa0gAgf7JUF0J32jFKj7R4p2zuRe9pABh%2F7i%2F8ORJriUtBK8Mc7vXhoSDf1yR5EK8gTbA8sok2c6NKtO7USeUjF9o1WLSLQR60tk4DoNidW%2BeutknKGDhnzwHaMt9HfTtzQ2lEi%2FEGgR718EmO6ChFc2XzLXBpf1hAgqw6JHolI0I%2B87MoIBMGSUnSYQJPKTF7yBgVAvgoZqYeYiWJ2eSGBBqTMK8CDwWki2V5fNymykTA6Fh2ZMBmFBe0Uhmkie7QtvnSvZlKn6cwUrwFJXvyt%2BORla0khIbyG%2FG2aVhXzVjrpVZ9PQgk22Voaoo4mrMzYwlOq7vwY6pgHIBEii8G%2BidR3l8Rijk47CChfRk1UMYsEkHMZsc488EVu1FYQReqj6fj6a0BS%2BAHaCsc8bPGZ5EcRoyvEXQdWy%2Fd88QUTX5IYPHvcwvGaOooG4rnt%2BoKsYixhudJ43DFUCc9uP0lyPWhAt5gTVlwi38fI8Gk2rcc3NqNEYyAam%2B6279ewHodjA6z%2FQrbR0dRO8HmkrjdywJI%2FgJNPOqky%2Bq%2Bfubfgl&X-Amz-Signature=fb9e89bd8c4ddfdbe9c9283da8ee552135fd1ced507ef8997b8a3701f0575e51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
