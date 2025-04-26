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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSPFQDL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEpvnsvwCNLICdywYgYle4Ic595FHqoJEl5oYWoGeu4AiBhGNl2dgcLmN7dQ9Cjvx3a%2BTUDss%2FgiQ0bCfNV5g5O9Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMyIXYMqRDA%2FOopU9UKtwDu%2BKQz98COWvOaBy7skWQ%2B0%2FlO3Nzq%2BzkOL9ZgyRL1aGQIcGGAmJy1bwWEiEDbfBJiZkbfWvIT9vclvgEyhBj31SnlPC3%2F4SLAbFitrb82SsR0YFSs9EVNPdMkGRZEOsZiAaECl73Wsc%2B%2FS4hPx4Q8A7rFyz5DpOSPkcXYhAnQn86bbAd9LOSEymCDwUJNN%2B5nQblbRNZjDbLenxwpZJwtq7y6jb74iVI7MRvAshe8cEMH894xsrcHyRYxHs8MVefz4sgj%2BhlnAsYOimCjt9HFFIzmzF5vMirELWkAhSocTzDssM3RzS0BwzovY7fmHnAyh7NsLdqbqdHsXZAOVVG0lF9N%2BQ%2BdJ076IiVm3WTiQ%2BCLgdze4FzfS8lpMDwcoOE34LMJeqMwsZtKKhcGXVcNmRJeA54p4cZKBLBVtO3h7OepGRf8aJURi%2Bxh9rR9PhpFC5oE7B7eEDXxtTrQXfOk5tnWxIBpoeubdKUMU1%2FkQg5o7EPOOG7Isyt684t8vod8w0cSQZ5WqF8z2I5XbUSzAq%2FFxZ7vtPg%2Fu7yCaPg4ozxL9Be2j0WttuwfH6Bhbo5ndu2fX%2B2jsLtMHTq6YkmGVY5%2BpRV7t6GwoHZVC91YZC4FnVYApHLKCqePMMw78ixwAY6pgGdrgqN7hg53BIyy2UdI2O3J1lwzXr61mdfq%2Ft8zIjMyNoFUr0T2%2B0ecraLXDQEaY5%2BDKGoiunxe%2F%2F5mJjveeYBw%2FwoMEtoCD1S%2Bs1IPcvYHHT5brbqxvjrhwZcwYNfFznZSir1HNZRx%2BrVbEFZHATEBlMfeu%2BdBTwRvPVYhICDejKKxy5WO0YBTfBf7phUIGjikk949KOw42w%2BZ6CbB3jF5NV5lvqs&X-Amz-Signature=cc70d08e764fba414732f79463a178d8d01d107ce7b2ec35965c1093f817acc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSPFQDL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEpvnsvwCNLICdywYgYle4Ic595FHqoJEl5oYWoGeu4AiBhGNl2dgcLmN7dQ9Cjvx3a%2BTUDss%2FgiQ0bCfNV5g5O9Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMyIXYMqRDA%2FOopU9UKtwDu%2BKQz98COWvOaBy7skWQ%2B0%2FlO3Nzq%2BzkOL9ZgyRL1aGQIcGGAmJy1bwWEiEDbfBJiZkbfWvIT9vclvgEyhBj31SnlPC3%2F4SLAbFitrb82SsR0YFSs9EVNPdMkGRZEOsZiAaECl73Wsc%2B%2FS4hPx4Q8A7rFyz5DpOSPkcXYhAnQn86bbAd9LOSEymCDwUJNN%2B5nQblbRNZjDbLenxwpZJwtq7y6jb74iVI7MRvAshe8cEMH894xsrcHyRYxHs8MVefz4sgj%2BhlnAsYOimCjt9HFFIzmzF5vMirELWkAhSocTzDssM3RzS0BwzovY7fmHnAyh7NsLdqbqdHsXZAOVVG0lF9N%2BQ%2BdJ076IiVm3WTiQ%2BCLgdze4FzfS8lpMDwcoOE34LMJeqMwsZtKKhcGXVcNmRJeA54p4cZKBLBVtO3h7OepGRf8aJURi%2Bxh9rR9PhpFC5oE7B7eEDXxtTrQXfOk5tnWxIBpoeubdKUMU1%2FkQg5o7EPOOG7Isyt684t8vod8w0cSQZ5WqF8z2I5XbUSzAq%2FFxZ7vtPg%2Fu7yCaPg4ozxL9Be2j0WttuwfH6Bhbo5ndu2fX%2B2jsLtMHTq6YkmGVY5%2BpRV7t6GwoHZVC91YZC4FnVYApHLKCqePMMw78ixwAY6pgGdrgqN7hg53BIyy2UdI2O3J1lwzXr61mdfq%2Ft8zIjMyNoFUr0T2%2B0ecraLXDQEaY5%2BDKGoiunxe%2F%2F5mJjveeYBw%2FwoMEtoCD1S%2Bs1IPcvYHHT5brbqxvjrhwZcwYNfFznZSir1HNZRx%2BrVbEFZHATEBlMfeu%2BdBTwRvPVYhICDejKKxy5WO0YBTfBf7phUIGjikk949KOw42w%2BZ6CbB3jF5NV5lvqs&X-Amz-Signature=ab01a394554db810a4a835734514ddf79832fb593fe361aaac0e07450dbc900e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSPFQDL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEpvnsvwCNLICdywYgYle4Ic595FHqoJEl5oYWoGeu4AiBhGNl2dgcLmN7dQ9Cjvx3a%2BTUDss%2FgiQ0bCfNV5g5O9Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMyIXYMqRDA%2FOopU9UKtwDu%2BKQz98COWvOaBy7skWQ%2B0%2FlO3Nzq%2BzkOL9ZgyRL1aGQIcGGAmJy1bwWEiEDbfBJiZkbfWvIT9vclvgEyhBj31SnlPC3%2F4SLAbFitrb82SsR0YFSs9EVNPdMkGRZEOsZiAaECl73Wsc%2B%2FS4hPx4Q8A7rFyz5DpOSPkcXYhAnQn86bbAd9LOSEymCDwUJNN%2B5nQblbRNZjDbLenxwpZJwtq7y6jb74iVI7MRvAshe8cEMH894xsrcHyRYxHs8MVefz4sgj%2BhlnAsYOimCjt9HFFIzmzF5vMirELWkAhSocTzDssM3RzS0BwzovY7fmHnAyh7NsLdqbqdHsXZAOVVG0lF9N%2BQ%2BdJ076IiVm3WTiQ%2BCLgdze4FzfS8lpMDwcoOE34LMJeqMwsZtKKhcGXVcNmRJeA54p4cZKBLBVtO3h7OepGRf8aJURi%2Bxh9rR9PhpFC5oE7B7eEDXxtTrQXfOk5tnWxIBpoeubdKUMU1%2FkQg5o7EPOOG7Isyt684t8vod8w0cSQZ5WqF8z2I5XbUSzAq%2FFxZ7vtPg%2Fu7yCaPg4ozxL9Be2j0WttuwfH6Bhbo5ndu2fX%2B2jsLtMHTq6YkmGVY5%2BpRV7t6GwoHZVC91YZC4FnVYApHLKCqePMMw78ixwAY6pgGdrgqN7hg53BIyy2UdI2O3J1lwzXr61mdfq%2Ft8zIjMyNoFUr0T2%2B0ecraLXDQEaY5%2BDKGoiunxe%2F%2F5mJjveeYBw%2FwoMEtoCD1S%2Bs1IPcvYHHT5brbqxvjrhwZcwYNfFznZSir1HNZRx%2BrVbEFZHATEBlMfeu%2BdBTwRvPVYhICDejKKxy5WO0YBTfBf7phUIGjikk949KOw42w%2BZ6CbB3jF5NV5lvqs&X-Amz-Signature=d1aef048adbece5506a0febdcbac8442936eada2aca25c7447f76b3b04a1f017&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSPFQDL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEpvnsvwCNLICdywYgYle4Ic595FHqoJEl5oYWoGeu4AiBhGNl2dgcLmN7dQ9Cjvx3a%2BTUDss%2FgiQ0bCfNV5g5O9Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMyIXYMqRDA%2FOopU9UKtwDu%2BKQz98COWvOaBy7skWQ%2B0%2FlO3Nzq%2BzkOL9ZgyRL1aGQIcGGAmJy1bwWEiEDbfBJiZkbfWvIT9vclvgEyhBj31SnlPC3%2F4SLAbFitrb82SsR0YFSs9EVNPdMkGRZEOsZiAaECl73Wsc%2B%2FS4hPx4Q8A7rFyz5DpOSPkcXYhAnQn86bbAd9LOSEymCDwUJNN%2B5nQblbRNZjDbLenxwpZJwtq7y6jb74iVI7MRvAshe8cEMH894xsrcHyRYxHs8MVefz4sgj%2BhlnAsYOimCjt9HFFIzmzF5vMirELWkAhSocTzDssM3RzS0BwzovY7fmHnAyh7NsLdqbqdHsXZAOVVG0lF9N%2BQ%2BdJ076IiVm3WTiQ%2BCLgdze4FzfS8lpMDwcoOE34LMJeqMwsZtKKhcGXVcNmRJeA54p4cZKBLBVtO3h7OepGRf8aJURi%2Bxh9rR9PhpFC5oE7B7eEDXxtTrQXfOk5tnWxIBpoeubdKUMU1%2FkQg5o7EPOOG7Isyt684t8vod8w0cSQZ5WqF8z2I5XbUSzAq%2FFxZ7vtPg%2Fu7yCaPg4ozxL9Be2j0WttuwfH6Bhbo5ndu2fX%2B2jsLtMHTq6YkmGVY5%2BpRV7t6GwoHZVC91YZC4FnVYApHLKCqePMMw78ixwAY6pgGdrgqN7hg53BIyy2UdI2O3J1lwzXr61mdfq%2Ft8zIjMyNoFUr0T2%2B0ecraLXDQEaY5%2BDKGoiunxe%2F%2F5mJjveeYBw%2FwoMEtoCD1S%2Bs1IPcvYHHT5brbqxvjrhwZcwYNfFznZSir1HNZRx%2BrVbEFZHATEBlMfeu%2BdBTwRvPVYhICDejKKxy5WO0YBTfBf7phUIGjikk949KOw42w%2BZ6CbB3jF5NV5lvqs&X-Amz-Signature=943c25082285726db742883ce4519f893c1878c749291c9d5aae546fab547da6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSPFQDL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEpvnsvwCNLICdywYgYle4Ic595FHqoJEl5oYWoGeu4AiBhGNl2dgcLmN7dQ9Cjvx3a%2BTUDss%2FgiQ0bCfNV5g5O9Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMyIXYMqRDA%2FOopU9UKtwDu%2BKQz98COWvOaBy7skWQ%2B0%2FlO3Nzq%2BzkOL9ZgyRL1aGQIcGGAmJy1bwWEiEDbfBJiZkbfWvIT9vclvgEyhBj31SnlPC3%2F4SLAbFitrb82SsR0YFSs9EVNPdMkGRZEOsZiAaECl73Wsc%2B%2FS4hPx4Q8A7rFyz5DpOSPkcXYhAnQn86bbAd9LOSEymCDwUJNN%2B5nQblbRNZjDbLenxwpZJwtq7y6jb74iVI7MRvAshe8cEMH894xsrcHyRYxHs8MVefz4sgj%2BhlnAsYOimCjt9HFFIzmzF5vMirELWkAhSocTzDssM3RzS0BwzovY7fmHnAyh7NsLdqbqdHsXZAOVVG0lF9N%2BQ%2BdJ076IiVm3WTiQ%2BCLgdze4FzfS8lpMDwcoOE34LMJeqMwsZtKKhcGXVcNmRJeA54p4cZKBLBVtO3h7OepGRf8aJURi%2Bxh9rR9PhpFC5oE7B7eEDXxtTrQXfOk5tnWxIBpoeubdKUMU1%2FkQg5o7EPOOG7Isyt684t8vod8w0cSQZ5WqF8z2I5XbUSzAq%2FFxZ7vtPg%2Fu7yCaPg4ozxL9Be2j0WttuwfH6Bhbo5ndu2fX%2B2jsLtMHTq6YkmGVY5%2BpRV7t6GwoHZVC91YZC4FnVYApHLKCqePMMw78ixwAY6pgGdrgqN7hg53BIyy2UdI2O3J1lwzXr61mdfq%2Ft8zIjMyNoFUr0T2%2B0ecraLXDQEaY5%2BDKGoiunxe%2F%2F5mJjveeYBw%2FwoMEtoCD1S%2Bs1IPcvYHHT5brbqxvjrhwZcwYNfFznZSir1HNZRx%2BrVbEFZHATEBlMfeu%2BdBTwRvPVYhICDejKKxy5WO0YBTfBf7phUIGjikk949KOw42w%2BZ6CbB3jF5NV5lvqs&X-Amz-Signature=652cea1b950833fbd4fb06d2f2b58f06d2c88b590ea702bed205233e86ed60d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSPFQDL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEpvnsvwCNLICdywYgYle4Ic595FHqoJEl5oYWoGeu4AiBhGNl2dgcLmN7dQ9Cjvx3a%2BTUDss%2FgiQ0bCfNV5g5O9Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMyIXYMqRDA%2FOopU9UKtwDu%2BKQz98COWvOaBy7skWQ%2B0%2FlO3Nzq%2BzkOL9ZgyRL1aGQIcGGAmJy1bwWEiEDbfBJiZkbfWvIT9vclvgEyhBj31SnlPC3%2F4SLAbFitrb82SsR0YFSs9EVNPdMkGRZEOsZiAaECl73Wsc%2B%2FS4hPx4Q8A7rFyz5DpOSPkcXYhAnQn86bbAd9LOSEymCDwUJNN%2B5nQblbRNZjDbLenxwpZJwtq7y6jb74iVI7MRvAshe8cEMH894xsrcHyRYxHs8MVefz4sgj%2BhlnAsYOimCjt9HFFIzmzF5vMirELWkAhSocTzDssM3RzS0BwzovY7fmHnAyh7NsLdqbqdHsXZAOVVG0lF9N%2BQ%2BdJ076IiVm3WTiQ%2BCLgdze4FzfS8lpMDwcoOE34LMJeqMwsZtKKhcGXVcNmRJeA54p4cZKBLBVtO3h7OepGRf8aJURi%2Bxh9rR9PhpFC5oE7B7eEDXxtTrQXfOk5tnWxIBpoeubdKUMU1%2FkQg5o7EPOOG7Isyt684t8vod8w0cSQZ5WqF8z2I5XbUSzAq%2FFxZ7vtPg%2Fu7yCaPg4ozxL9Be2j0WttuwfH6Bhbo5ndu2fX%2B2jsLtMHTq6YkmGVY5%2BpRV7t6GwoHZVC91YZC4FnVYApHLKCqePMMw78ixwAY6pgGdrgqN7hg53BIyy2UdI2O3J1lwzXr61mdfq%2Ft8zIjMyNoFUr0T2%2B0ecraLXDQEaY5%2BDKGoiunxe%2F%2F5mJjveeYBw%2FwoMEtoCD1S%2Bs1IPcvYHHT5brbqxvjrhwZcwYNfFznZSir1HNZRx%2BrVbEFZHATEBlMfeu%2BdBTwRvPVYhICDejKKxy5WO0YBTfBf7phUIGjikk949KOw42w%2BZ6CbB3jF5NV5lvqs&X-Amz-Signature=7be22854a686dfc93be8c757e396b9d47e61973c40aad3396df1176f6befb6db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSPFQDL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEpvnsvwCNLICdywYgYle4Ic595FHqoJEl5oYWoGeu4AiBhGNl2dgcLmN7dQ9Cjvx3a%2BTUDss%2FgiQ0bCfNV5g5O9Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMyIXYMqRDA%2FOopU9UKtwDu%2BKQz98COWvOaBy7skWQ%2B0%2FlO3Nzq%2BzkOL9ZgyRL1aGQIcGGAmJy1bwWEiEDbfBJiZkbfWvIT9vclvgEyhBj31SnlPC3%2F4SLAbFitrb82SsR0YFSs9EVNPdMkGRZEOsZiAaECl73Wsc%2B%2FS4hPx4Q8A7rFyz5DpOSPkcXYhAnQn86bbAd9LOSEymCDwUJNN%2B5nQblbRNZjDbLenxwpZJwtq7y6jb74iVI7MRvAshe8cEMH894xsrcHyRYxHs8MVefz4sgj%2BhlnAsYOimCjt9HFFIzmzF5vMirELWkAhSocTzDssM3RzS0BwzovY7fmHnAyh7NsLdqbqdHsXZAOVVG0lF9N%2BQ%2BdJ076IiVm3WTiQ%2BCLgdze4FzfS8lpMDwcoOE34LMJeqMwsZtKKhcGXVcNmRJeA54p4cZKBLBVtO3h7OepGRf8aJURi%2Bxh9rR9PhpFC5oE7B7eEDXxtTrQXfOk5tnWxIBpoeubdKUMU1%2FkQg5o7EPOOG7Isyt684t8vod8w0cSQZ5WqF8z2I5XbUSzAq%2FFxZ7vtPg%2Fu7yCaPg4ozxL9Be2j0WttuwfH6Bhbo5ndu2fX%2B2jsLtMHTq6YkmGVY5%2BpRV7t6GwoHZVC91YZC4FnVYApHLKCqePMMw78ixwAY6pgGdrgqN7hg53BIyy2UdI2O3J1lwzXr61mdfq%2Ft8zIjMyNoFUr0T2%2B0ecraLXDQEaY5%2BDKGoiunxe%2F%2F5mJjveeYBw%2FwoMEtoCD1S%2Bs1IPcvYHHT5brbqxvjrhwZcwYNfFznZSir1HNZRx%2BrVbEFZHATEBlMfeu%2BdBTwRvPVYhICDejKKxy5WO0YBTfBf7phUIGjikk949KOw42w%2BZ6CbB3jF5NV5lvqs&X-Amz-Signature=8d12534d260e0c946a7727de4fc5d649fb698f3e9a8a75670ac0edb473bdd807&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPSPFQDL%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T050804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEpvnsvwCNLICdywYgYle4Ic595FHqoJEl5oYWoGeu4AiBhGNl2dgcLmN7dQ9Cjvx3a%2BTUDss%2FgiQ0bCfNV5g5O9Sr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMyIXYMqRDA%2FOopU9UKtwDu%2BKQz98COWvOaBy7skWQ%2B0%2FlO3Nzq%2BzkOL9ZgyRL1aGQIcGGAmJy1bwWEiEDbfBJiZkbfWvIT9vclvgEyhBj31SnlPC3%2F4SLAbFitrb82SsR0YFSs9EVNPdMkGRZEOsZiAaECl73Wsc%2B%2FS4hPx4Q8A7rFyz5DpOSPkcXYhAnQn86bbAd9LOSEymCDwUJNN%2B5nQblbRNZjDbLenxwpZJwtq7y6jb74iVI7MRvAshe8cEMH894xsrcHyRYxHs8MVefz4sgj%2BhlnAsYOimCjt9HFFIzmzF5vMirELWkAhSocTzDssM3RzS0BwzovY7fmHnAyh7NsLdqbqdHsXZAOVVG0lF9N%2BQ%2BdJ076IiVm3WTiQ%2BCLgdze4FzfS8lpMDwcoOE34LMJeqMwsZtKKhcGXVcNmRJeA54p4cZKBLBVtO3h7OepGRf8aJURi%2Bxh9rR9PhpFC5oE7B7eEDXxtTrQXfOk5tnWxIBpoeubdKUMU1%2FkQg5o7EPOOG7Isyt684t8vod8w0cSQZ5WqF8z2I5XbUSzAq%2FFxZ7vtPg%2Fu7yCaPg4ozxL9Be2j0WttuwfH6Bhbo5ndu2fX%2B2jsLtMHTq6YkmGVY5%2BpRV7t6GwoHZVC91YZC4FnVYApHLKCqePMMw78ixwAY6pgGdrgqN7hg53BIyy2UdI2O3J1lwzXr61mdfq%2Ft8zIjMyNoFUr0T2%2B0ecraLXDQEaY5%2BDKGoiunxe%2F%2F5mJjveeYBw%2FwoMEtoCD1S%2Bs1IPcvYHHT5brbqxvjrhwZcwYNfFznZSir1HNZRx%2BrVbEFZHATEBlMfeu%2BdBTwRvPVYhICDejKKxy5WO0YBTfBf7phUIGjikk949KOw42w%2BZ6CbB3jF5NV5lvqs&X-Amz-Signature=5a56656b10ce78b523201dd46123f34f37770e403e1b962797ab60a7f03f46c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
