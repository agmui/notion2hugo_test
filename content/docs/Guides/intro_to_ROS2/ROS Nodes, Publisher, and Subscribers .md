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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWU6V2Q%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu6m7u9j9m2v3Khh6S65mEnGZUH8vfJEAuJbzgm86ReAiEA5PZoHRyJVs74UqLXymSjE1xI38C69jK3T2l9dSvy6p0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPQYUnCdcJtxrm37CrcA8HfmnKwM4cuVsS%2ByxJlOTG0W9HNMALwhpMyU5IWc5ML1r5lEzO43fTwJMrvB0kSY6uDP%2FT5eC1KfzWQ%2B4qBnbkyheJ7v9g%2FlARCRFCfycb81jg8TK3HTF9vkEIbOqjeg5eKSd5PfSynQOW%2BdrEsjGHYh%2FMhMnrQyOWQLyLg3jRdpWinPTC2CielD6hv9wnIP5ROS2pkQZozKZ1BW8RAKlV%2FRIUBC4hDn%2B9Wv9w%2BOvodNPREQl%2BN0Fh%2FHt%2FXK60lx6QHvaJpcxe7a7YlcM7PZloHD7HmL6zwUbjPbvXjOd5Kzfi6urJtOlXEH6jLsRh2PssInierIMXp6NFetyy81VbByN%2B36UwCU9upNBiuaeJgDfCsZYcHF3CTfl4bq80jV1aedHdfgHMpe9ZyXHWLPh2BiPnTvUZjDaDt%2FzZPs%2B4ClXUuo3VNzaKQOou4PCVuJ5nPC2iR9LxuGuKTDMYpKjnXdyNcrSL4%2FqEAidRE1RLV6gJFXfq12RTyHu%2FM7HMMwiC1h0FnCu2xpcaCzq4eZoRHp1uEnqJgCWwLF%2FkgJJuObj9PtQhwcYuObD6qW%2FMR518qXlifcwqm0A38KSi7mL7TgOEYsFI%2F8BkgDmP%2FoJ6dA1eqIdaR6P%2FlUp9KML3I278GOqUB4zx0v1qAuPXWM9TUEQiWCxcS03FnvNIi4m2N892lICkb58EC43ZTScA%2FjaFIJz%2BXkyK1RuXu0dkGakTBmTcNe4NF4nIk7SvUyri%2FpEJHJfZEjMmuOuC%2F6%2FOtFkLTIrDoXG9rYbJSbeWTOzd2nlmLKVCXhxvBy5UlxKv6ZL3PkcrhaRjQo%2BzAyuAuEcIlk1s0ucODr%2B3o3jo2nPmxz%2B3Ypn69EYok&X-Amz-Signature=249c3227720f655f8fbc9b1c5fef3633c6664b0b0e70022bc13c264d53d0b99c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWU6V2Q%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu6m7u9j9m2v3Khh6S65mEnGZUH8vfJEAuJbzgm86ReAiEA5PZoHRyJVs74UqLXymSjE1xI38C69jK3T2l9dSvy6p0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPQYUnCdcJtxrm37CrcA8HfmnKwM4cuVsS%2ByxJlOTG0W9HNMALwhpMyU5IWc5ML1r5lEzO43fTwJMrvB0kSY6uDP%2FT5eC1KfzWQ%2B4qBnbkyheJ7v9g%2FlARCRFCfycb81jg8TK3HTF9vkEIbOqjeg5eKSd5PfSynQOW%2BdrEsjGHYh%2FMhMnrQyOWQLyLg3jRdpWinPTC2CielD6hv9wnIP5ROS2pkQZozKZ1BW8RAKlV%2FRIUBC4hDn%2B9Wv9w%2BOvodNPREQl%2BN0Fh%2FHt%2FXK60lx6QHvaJpcxe7a7YlcM7PZloHD7HmL6zwUbjPbvXjOd5Kzfi6urJtOlXEH6jLsRh2PssInierIMXp6NFetyy81VbByN%2B36UwCU9upNBiuaeJgDfCsZYcHF3CTfl4bq80jV1aedHdfgHMpe9ZyXHWLPh2BiPnTvUZjDaDt%2FzZPs%2B4ClXUuo3VNzaKQOou4PCVuJ5nPC2iR9LxuGuKTDMYpKjnXdyNcrSL4%2FqEAidRE1RLV6gJFXfq12RTyHu%2FM7HMMwiC1h0FnCu2xpcaCzq4eZoRHp1uEnqJgCWwLF%2FkgJJuObj9PtQhwcYuObD6qW%2FMR518qXlifcwqm0A38KSi7mL7TgOEYsFI%2F8BkgDmP%2FoJ6dA1eqIdaR6P%2FlUp9KML3I278GOqUB4zx0v1qAuPXWM9TUEQiWCxcS03FnvNIi4m2N892lICkb58EC43ZTScA%2FjaFIJz%2BXkyK1RuXu0dkGakTBmTcNe4NF4nIk7SvUyri%2FpEJHJfZEjMmuOuC%2F6%2FOtFkLTIrDoXG9rYbJSbeWTOzd2nlmLKVCXhxvBy5UlxKv6ZL3PkcrhaRjQo%2BzAyuAuEcIlk1s0ucODr%2B3o3jo2nPmxz%2B3Ypn69EYok&X-Amz-Signature=89b583d9bdd55b6bb988ff1a28db97ffa05057723f5742659e81b5971216ed88&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWU6V2Q%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu6m7u9j9m2v3Khh6S65mEnGZUH8vfJEAuJbzgm86ReAiEA5PZoHRyJVs74UqLXymSjE1xI38C69jK3T2l9dSvy6p0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPQYUnCdcJtxrm37CrcA8HfmnKwM4cuVsS%2ByxJlOTG0W9HNMALwhpMyU5IWc5ML1r5lEzO43fTwJMrvB0kSY6uDP%2FT5eC1KfzWQ%2B4qBnbkyheJ7v9g%2FlARCRFCfycb81jg8TK3HTF9vkEIbOqjeg5eKSd5PfSynQOW%2BdrEsjGHYh%2FMhMnrQyOWQLyLg3jRdpWinPTC2CielD6hv9wnIP5ROS2pkQZozKZ1BW8RAKlV%2FRIUBC4hDn%2B9Wv9w%2BOvodNPREQl%2BN0Fh%2FHt%2FXK60lx6QHvaJpcxe7a7YlcM7PZloHD7HmL6zwUbjPbvXjOd5Kzfi6urJtOlXEH6jLsRh2PssInierIMXp6NFetyy81VbByN%2B36UwCU9upNBiuaeJgDfCsZYcHF3CTfl4bq80jV1aedHdfgHMpe9ZyXHWLPh2BiPnTvUZjDaDt%2FzZPs%2B4ClXUuo3VNzaKQOou4PCVuJ5nPC2iR9LxuGuKTDMYpKjnXdyNcrSL4%2FqEAidRE1RLV6gJFXfq12RTyHu%2FM7HMMwiC1h0FnCu2xpcaCzq4eZoRHp1uEnqJgCWwLF%2FkgJJuObj9PtQhwcYuObD6qW%2FMR518qXlifcwqm0A38KSi7mL7TgOEYsFI%2F8BkgDmP%2FoJ6dA1eqIdaR6P%2FlUp9KML3I278GOqUB4zx0v1qAuPXWM9TUEQiWCxcS03FnvNIi4m2N892lICkb58EC43ZTScA%2FjaFIJz%2BXkyK1RuXu0dkGakTBmTcNe4NF4nIk7SvUyri%2FpEJHJfZEjMmuOuC%2F6%2FOtFkLTIrDoXG9rYbJSbeWTOzd2nlmLKVCXhxvBy5UlxKv6ZL3PkcrhaRjQo%2BzAyuAuEcIlk1s0ucODr%2B3o3jo2nPmxz%2B3Ypn69EYok&X-Amz-Signature=1675785c71ca643ef039b86820196740a7055ff559015a6ebed95a260137b17c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWU6V2Q%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu6m7u9j9m2v3Khh6S65mEnGZUH8vfJEAuJbzgm86ReAiEA5PZoHRyJVs74UqLXymSjE1xI38C69jK3T2l9dSvy6p0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPQYUnCdcJtxrm37CrcA8HfmnKwM4cuVsS%2ByxJlOTG0W9HNMALwhpMyU5IWc5ML1r5lEzO43fTwJMrvB0kSY6uDP%2FT5eC1KfzWQ%2B4qBnbkyheJ7v9g%2FlARCRFCfycb81jg8TK3HTF9vkEIbOqjeg5eKSd5PfSynQOW%2BdrEsjGHYh%2FMhMnrQyOWQLyLg3jRdpWinPTC2CielD6hv9wnIP5ROS2pkQZozKZ1BW8RAKlV%2FRIUBC4hDn%2B9Wv9w%2BOvodNPREQl%2BN0Fh%2FHt%2FXK60lx6QHvaJpcxe7a7YlcM7PZloHD7HmL6zwUbjPbvXjOd5Kzfi6urJtOlXEH6jLsRh2PssInierIMXp6NFetyy81VbByN%2B36UwCU9upNBiuaeJgDfCsZYcHF3CTfl4bq80jV1aedHdfgHMpe9ZyXHWLPh2BiPnTvUZjDaDt%2FzZPs%2B4ClXUuo3VNzaKQOou4PCVuJ5nPC2iR9LxuGuKTDMYpKjnXdyNcrSL4%2FqEAidRE1RLV6gJFXfq12RTyHu%2FM7HMMwiC1h0FnCu2xpcaCzq4eZoRHp1uEnqJgCWwLF%2FkgJJuObj9PtQhwcYuObD6qW%2FMR518qXlifcwqm0A38KSi7mL7TgOEYsFI%2F8BkgDmP%2FoJ6dA1eqIdaR6P%2FlUp9KML3I278GOqUB4zx0v1qAuPXWM9TUEQiWCxcS03FnvNIi4m2N892lICkb58EC43ZTScA%2FjaFIJz%2BXkyK1RuXu0dkGakTBmTcNe4NF4nIk7SvUyri%2FpEJHJfZEjMmuOuC%2F6%2FOtFkLTIrDoXG9rYbJSbeWTOzd2nlmLKVCXhxvBy5UlxKv6ZL3PkcrhaRjQo%2BzAyuAuEcIlk1s0ucODr%2B3o3jo2nPmxz%2B3Ypn69EYok&X-Amz-Signature=4c2e4b20dee2746d9abaf619c49bc8099130234b1f1a9de4f606c973ff36d137&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWU6V2Q%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu6m7u9j9m2v3Khh6S65mEnGZUH8vfJEAuJbzgm86ReAiEA5PZoHRyJVs74UqLXymSjE1xI38C69jK3T2l9dSvy6p0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPQYUnCdcJtxrm37CrcA8HfmnKwM4cuVsS%2ByxJlOTG0W9HNMALwhpMyU5IWc5ML1r5lEzO43fTwJMrvB0kSY6uDP%2FT5eC1KfzWQ%2B4qBnbkyheJ7v9g%2FlARCRFCfycb81jg8TK3HTF9vkEIbOqjeg5eKSd5PfSynQOW%2BdrEsjGHYh%2FMhMnrQyOWQLyLg3jRdpWinPTC2CielD6hv9wnIP5ROS2pkQZozKZ1BW8RAKlV%2FRIUBC4hDn%2B9Wv9w%2BOvodNPREQl%2BN0Fh%2FHt%2FXK60lx6QHvaJpcxe7a7YlcM7PZloHD7HmL6zwUbjPbvXjOd5Kzfi6urJtOlXEH6jLsRh2PssInierIMXp6NFetyy81VbByN%2B36UwCU9upNBiuaeJgDfCsZYcHF3CTfl4bq80jV1aedHdfgHMpe9ZyXHWLPh2BiPnTvUZjDaDt%2FzZPs%2B4ClXUuo3VNzaKQOou4PCVuJ5nPC2iR9LxuGuKTDMYpKjnXdyNcrSL4%2FqEAidRE1RLV6gJFXfq12RTyHu%2FM7HMMwiC1h0FnCu2xpcaCzq4eZoRHp1uEnqJgCWwLF%2FkgJJuObj9PtQhwcYuObD6qW%2FMR518qXlifcwqm0A38KSi7mL7TgOEYsFI%2F8BkgDmP%2FoJ6dA1eqIdaR6P%2FlUp9KML3I278GOqUB4zx0v1qAuPXWM9TUEQiWCxcS03FnvNIi4m2N892lICkb58EC43ZTScA%2FjaFIJz%2BXkyK1RuXu0dkGakTBmTcNe4NF4nIk7SvUyri%2FpEJHJfZEjMmuOuC%2F6%2FOtFkLTIrDoXG9rYbJSbeWTOzd2nlmLKVCXhxvBy5UlxKv6ZL3PkcrhaRjQo%2BzAyuAuEcIlk1s0ucODr%2B3o3jo2nPmxz%2B3Ypn69EYok&X-Amz-Signature=ccdc227bf88e18078e813bc46cd9784c08b1d708690c5ea5dd06617fe56fcd0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWU6V2Q%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu6m7u9j9m2v3Khh6S65mEnGZUH8vfJEAuJbzgm86ReAiEA5PZoHRyJVs74UqLXymSjE1xI38C69jK3T2l9dSvy6p0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPQYUnCdcJtxrm37CrcA8HfmnKwM4cuVsS%2ByxJlOTG0W9HNMALwhpMyU5IWc5ML1r5lEzO43fTwJMrvB0kSY6uDP%2FT5eC1KfzWQ%2B4qBnbkyheJ7v9g%2FlARCRFCfycb81jg8TK3HTF9vkEIbOqjeg5eKSd5PfSynQOW%2BdrEsjGHYh%2FMhMnrQyOWQLyLg3jRdpWinPTC2CielD6hv9wnIP5ROS2pkQZozKZ1BW8RAKlV%2FRIUBC4hDn%2B9Wv9w%2BOvodNPREQl%2BN0Fh%2FHt%2FXK60lx6QHvaJpcxe7a7YlcM7PZloHD7HmL6zwUbjPbvXjOd5Kzfi6urJtOlXEH6jLsRh2PssInierIMXp6NFetyy81VbByN%2B36UwCU9upNBiuaeJgDfCsZYcHF3CTfl4bq80jV1aedHdfgHMpe9ZyXHWLPh2BiPnTvUZjDaDt%2FzZPs%2B4ClXUuo3VNzaKQOou4PCVuJ5nPC2iR9LxuGuKTDMYpKjnXdyNcrSL4%2FqEAidRE1RLV6gJFXfq12RTyHu%2FM7HMMwiC1h0FnCu2xpcaCzq4eZoRHp1uEnqJgCWwLF%2FkgJJuObj9PtQhwcYuObD6qW%2FMR518qXlifcwqm0A38KSi7mL7TgOEYsFI%2F8BkgDmP%2FoJ6dA1eqIdaR6P%2FlUp9KML3I278GOqUB4zx0v1qAuPXWM9TUEQiWCxcS03FnvNIi4m2N892lICkb58EC43ZTScA%2FjaFIJz%2BXkyK1RuXu0dkGakTBmTcNe4NF4nIk7SvUyri%2FpEJHJfZEjMmuOuC%2F6%2FOtFkLTIrDoXG9rYbJSbeWTOzd2nlmLKVCXhxvBy5UlxKv6ZL3PkcrhaRjQo%2BzAyuAuEcIlk1s0ucODr%2B3o3jo2nPmxz%2B3Ypn69EYok&X-Amz-Signature=7b1499c3534a092bb1a6cad78b709b1c815b0007a1abfca49a608ab3f53250db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWU6V2Q%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu6m7u9j9m2v3Khh6S65mEnGZUH8vfJEAuJbzgm86ReAiEA5PZoHRyJVs74UqLXymSjE1xI38C69jK3T2l9dSvy6p0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPQYUnCdcJtxrm37CrcA8HfmnKwM4cuVsS%2ByxJlOTG0W9HNMALwhpMyU5IWc5ML1r5lEzO43fTwJMrvB0kSY6uDP%2FT5eC1KfzWQ%2B4qBnbkyheJ7v9g%2FlARCRFCfycb81jg8TK3HTF9vkEIbOqjeg5eKSd5PfSynQOW%2BdrEsjGHYh%2FMhMnrQyOWQLyLg3jRdpWinPTC2CielD6hv9wnIP5ROS2pkQZozKZ1BW8RAKlV%2FRIUBC4hDn%2B9Wv9w%2BOvodNPREQl%2BN0Fh%2FHt%2FXK60lx6QHvaJpcxe7a7YlcM7PZloHD7HmL6zwUbjPbvXjOd5Kzfi6urJtOlXEH6jLsRh2PssInierIMXp6NFetyy81VbByN%2B36UwCU9upNBiuaeJgDfCsZYcHF3CTfl4bq80jV1aedHdfgHMpe9ZyXHWLPh2BiPnTvUZjDaDt%2FzZPs%2B4ClXUuo3VNzaKQOou4PCVuJ5nPC2iR9LxuGuKTDMYpKjnXdyNcrSL4%2FqEAidRE1RLV6gJFXfq12RTyHu%2FM7HMMwiC1h0FnCu2xpcaCzq4eZoRHp1uEnqJgCWwLF%2FkgJJuObj9PtQhwcYuObD6qW%2FMR518qXlifcwqm0A38KSi7mL7TgOEYsFI%2F8BkgDmP%2FoJ6dA1eqIdaR6P%2FlUp9KML3I278GOqUB4zx0v1qAuPXWM9TUEQiWCxcS03FnvNIi4m2N892lICkb58EC43ZTScA%2FjaFIJz%2BXkyK1RuXu0dkGakTBmTcNe4NF4nIk7SvUyri%2FpEJHJfZEjMmuOuC%2F6%2FOtFkLTIrDoXG9rYbJSbeWTOzd2nlmLKVCXhxvBy5UlxKv6ZL3PkcrhaRjQo%2BzAyuAuEcIlk1s0ucODr%2B3o3jo2nPmxz%2B3Ypn69EYok&X-Amz-Signature=1ccf462075490fb6318d734cf72c69fd0dbf8907a337ea58a69af734ee113bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMWU6V2Q%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIAu6m7u9j9m2v3Khh6S65mEnGZUH8vfJEAuJbzgm86ReAiEA5PZoHRyJVs74UqLXymSjE1xI38C69jK3T2l9dSvy6p0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPQYUnCdcJtxrm37CrcA8HfmnKwM4cuVsS%2ByxJlOTG0W9HNMALwhpMyU5IWc5ML1r5lEzO43fTwJMrvB0kSY6uDP%2FT5eC1KfzWQ%2B4qBnbkyheJ7v9g%2FlARCRFCfycb81jg8TK3HTF9vkEIbOqjeg5eKSd5PfSynQOW%2BdrEsjGHYh%2FMhMnrQyOWQLyLg3jRdpWinPTC2CielD6hv9wnIP5ROS2pkQZozKZ1BW8RAKlV%2FRIUBC4hDn%2B9Wv9w%2BOvodNPREQl%2BN0Fh%2FHt%2FXK60lx6QHvaJpcxe7a7YlcM7PZloHD7HmL6zwUbjPbvXjOd5Kzfi6urJtOlXEH6jLsRh2PssInierIMXp6NFetyy81VbByN%2B36UwCU9upNBiuaeJgDfCsZYcHF3CTfl4bq80jV1aedHdfgHMpe9ZyXHWLPh2BiPnTvUZjDaDt%2FzZPs%2B4ClXUuo3VNzaKQOou4PCVuJ5nPC2iR9LxuGuKTDMYpKjnXdyNcrSL4%2FqEAidRE1RLV6gJFXfq12RTyHu%2FM7HMMwiC1h0FnCu2xpcaCzq4eZoRHp1uEnqJgCWwLF%2FkgJJuObj9PtQhwcYuObD6qW%2FMR518qXlifcwqm0A38KSi7mL7TgOEYsFI%2F8BkgDmP%2FoJ6dA1eqIdaR6P%2FlUp9KML3I278GOqUB4zx0v1qAuPXWM9TUEQiWCxcS03FnvNIi4m2N892lICkb58EC43ZTScA%2FjaFIJz%2BXkyK1RuXu0dkGakTBmTcNe4NF4nIk7SvUyri%2FpEJHJfZEjMmuOuC%2F6%2FOtFkLTIrDoXG9rYbJSbeWTOzd2nlmLKVCXhxvBy5UlxKv6ZL3PkcrhaRjQo%2BzAyuAuEcIlk1s0ucODr%2B3o3jo2nPmxz%2B3Ypn69EYok&X-Amz-Signature=4f008df121266884c22529c277988058b7952df034b015df86bc9f3adc5e72d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
