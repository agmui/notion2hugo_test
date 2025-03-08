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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2ON466%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAWBKMLWIV9Mq1PjkgghK%2FJDKex6K7TS34zGRRYrsuHJAiEA8WkuFAvp6UFmBNh7JS%2FZgGy%2FPwWO8tQRyFsm%2BRe4Qhoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGHHfnxPraGd%2F5wL9ircA6A1EytAh7yDGnHq7Xg0endLtV8guu5zgkV4pR5sJ4ujijlXEtD1NhD6EgAol3SK40w01sxhzsDGpPP69G29Qwt3PyvL8hqmZbEa5YEKO5Avtx%2FbWaIcevE7HSPn7q9NnUOQL4NE3glzG5zBclw%2FoyGPeueG4c5MNAw362jvr54ZDk%2FGaHAZA9tQtwpRpQpXt5alSDavTL6B2QOh9oWJBgV%2BBuwsA4yx%2B%2BrA9MwFJfTh%2Foap6Rd3T4buKS0ASseC5d4mXQIxS5F5yP7hTpeTx4QQO%2BMNbf8LL75a0aAnpPvNR4xSt5iuIABWhLzBxIXTjYwkodHrBFfkIIIBkmfvqeIoLO9hL6WLGIkZFncF5bY%2Bcp7WoN6Dx3hgtQpWU3mitWq7gcR95Keba4hqvQnIbmG%2BwrWSYvazOfsMwmDynq4wLwcR%2FRxkE6m21UMDJjs2G2R6UsDIEM1SShROgSG7OsBL3X52NIkiYeEcrvqZsZB2%2F%2F8OOD56JVzhF7lDJIn8ElpFnIuNTGZQR49bFSPF3hWI9%2Fxw1Xxbo7MlNfKmSgZXrvHbh%2F221l0qG6d%2Bopvgf27waqV9CT7luqI7mhxYFSK%2BedMPpCvyb%2BtI39b81SQex%2FdShf0ecWU9i2P6MJz%2Brb4GOqUBEPy4C4dv6mNmF%2FrmI9MyoqdbCVi7sQ6u7idOIH7jfSXXsotP1faLP8a1DhFN0Ae2gNrmfGenta5OeN3%2FFXjpNV2wGSxUodYavBE6cnMPfk8Aev2kUcd8wcGK3pnWrJd5TlOgh1bqlRYfGW6S14pCQyk0TTD4uG4gCV2hxU4r9%2BL2IJJ0hfoyc%2Bwqo%2FwTis6WNys0hF0AJsjrqZ4cRmlI1YKYDNl2&X-Amz-Signature=32f737368b55ad55fdecdb84d9dc81b4d462594632d07d3ba47ca848ccefaaad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2ON466%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAWBKMLWIV9Mq1PjkgghK%2FJDKex6K7TS34zGRRYrsuHJAiEA8WkuFAvp6UFmBNh7JS%2FZgGy%2FPwWO8tQRyFsm%2BRe4Qhoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGHHfnxPraGd%2F5wL9ircA6A1EytAh7yDGnHq7Xg0endLtV8guu5zgkV4pR5sJ4ujijlXEtD1NhD6EgAol3SK40w01sxhzsDGpPP69G29Qwt3PyvL8hqmZbEa5YEKO5Avtx%2FbWaIcevE7HSPn7q9NnUOQL4NE3glzG5zBclw%2FoyGPeueG4c5MNAw362jvr54ZDk%2FGaHAZA9tQtwpRpQpXt5alSDavTL6B2QOh9oWJBgV%2BBuwsA4yx%2B%2BrA9MwFJfTh%2Foap6Rd3T4buKS0ASseC5d4mXQIxS5F5yP7hTpeTx4QQO%2BMNbf8LL75a0aAnpPvNR4xSt5iuIABWhLzBxIXTjYwkodHrBFfkIIIBkmfvqeIoLO9hL6WLGIkZFncF5bY%2Bcp7WoN6Dx3hgtQpWU3mitWq7gcR95Keba4hqvQnIbmG%2BwrWSYvazOfsMwmDynq4wLwcR%2FRxkE6m21UMDJjs2G2R6UsDIEM1SShROgSG7OsBL3X52NIkiYeEcrvqZsZB2%2F%2F8OOD56JVzhF7lDJIn8ElpFnIuNTGZQR49bFSPF3hWI9%2Fxw1Xxbo7MlNfKmSgZXrvHbh%2F221l0qG6d%2Bopvgf27waqV9CT7luqI7mhxYFSK%2BedMPpCvyb%2BtI39b81SQex%2FdShf0ecWU9i2P6MJz%2Brb4GOqUBEPy4C4dv6mNmF%2FrmI9MyoqdbCVi7sQ6u7idOIH7jfSXXsotP1faLP8a1DhFN0Ae2gNrmfGenta5OeN3%2FFXjpNV2wGSxUodYavBE6cnMPfk8Aev2kUcd8wcGK3pnWrJd5TlOgh1bqlRYfGW6S14pCQyk0TTD4uG4gCV2hxU4r9%2BL2IJJ0hfoyc%2Bwqo%2FwTis6WNys0hF0AJsjrqZ4cRmlI1YKYDNl2&X-Amz-Signature=a04ec5ab0e844cbd454cecdf999868a836204e3e9d1dd2950e4090283be354c2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2ON466%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAWBKMLWIV9Mq1PjkgghK%2FJDKex6K7TS34zGRRYrsuHJAiEA8WkuFAvp6UFmBNh7JS%2FZgGy%2FPwWO8tQRyFsm%2BRe4Qhoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGHHfnxPraGd%2F5wL9ircA6A1EytAh7yDGnHq7Xg0endLtV8guu5zgkV4pR5sJ4ujijlXEtD1NhD6EgAol3SK40w01sxhzsDGpPP69G29Qwt3PyvL8hqmZbEa5YEKO5Avtx%2FbWaIcevE7HSPn7q9NnUOQL4NE3glzG5zBclw%2FoyGPeueG4c5MNAw362jvr54ZDk%2FGaHAZA9tQtwpRpQpXt5alSDavTL6B2QOh9oWJBgV%2BBuwsA4yx%2B%2BrA9MwFJfTh%2Foap6Rd3T4buKS0ASseC5d4mXQIxS5F5yP7hTpeTx4QQO%2BMNbf8LL75a0aAnpPvNR4xSt5iuIABWhLzBxIXTjYwkodHrBFfkIIIBkmfvqeIoLO9hL6WLGIkZFncF5bY%2Bcp7WoN6Dx3hgtQpWU3mitWq7gcR95Keba4hqvQnIbmG%2BwrWSYvazOfsMwmDynq4wLwcR%2FRxkE6m21UMDJjs2G2R6UsDIEM1SShROgSG7OsBL3X52NIkiYeEcrvqZsZB2%2F%2F8OOD56JVzhF7lDJIn8ElpFnIuNTGZQR49bFSPF3hWI9%2Fxw1Xxbo7MlNfKmSgZXrvHbh%2F221l0qG6d%2Bopvgf27waqV9CT7luqI7mhxYFSK%2BedMPpCvyb%2BtI39b81SQex%2FdShf0ecWU9i2P6MJz%2Brb4GOqUBEPy4C4dv6mNmF%2FrmI9MyoqdbCVi7sQ6u7idOIH7jfSXXsotP1faLP8a1DhFN0Ae2gNrmfGenta5OeN3%2FFXjpNV2wGSxUodYavBE6cnMPfk8Aev2kUcd8wcGK3pnWrJd5TlOgh1bqlRYfGW6S14pCQyk0TTD4uG4gCV2hxU4r9%2BL2IJJ0hfoyc%2Bwqo%2FwTis6WNys0hF0AJsjrqZ4cRmlI1YKYDNl2&X-Amz-Signature=7bae3ce2845f65cd86f32737a4d3682ba38222f48593efadf5fd02c79b1cff58&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2ON466%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAWBKMLWIV9Mq1PjkgghK%2FJDKex6K7TS34zGRRYrsuHJAiEA8WkuFAvp6UFmBNh7JS%2FZgGy%2FPwWO8tQRyFsm%2BRe4Qhoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGHHfnxPraGd%2F5wL9ircA6A1EytAh7yDGnHq7Xg0endLtV8guu5zgkV4pR5sJ4ujijlXEtD1NhD6EgAol3SK40w01sxhzsDGpPP69G29Qwt3PyvL8hqmZbEa5YEKO5Avtx%2FbWaIcevE7HSPn7q9NnUOQL4NE3glzG5zBclw%2FoyGPeueG4c5MNAw362jvr54ZDk%2FGaHAZA9tQtwpRpQpXt5alSDavTL6B2QOh9oWJBgV%2BBuwsA4yx%2B%2BrA9MwFJfTh%2Foap6Rd3T4buKS0ASseC5d4mXQIxS5F5yP7hTpeTx4QQO%2BMNbf8LL75a0aAnpPvNR4xSt5iuIABWhLzBxIXTjYwkodHrBFfkIIIBkmfvqeIoLO9hL6WLGIkZFncF5bY%2Bcp7WoN6Dx3hgtQpWU3mitWq7gcR95Keba4hqvQnIbmG%2BwrWSYvazOfsMwmDynq4wLwcR%2FRxkE6m21UMDJjs2G2R6UsDIEM1SShROgSG7OsBL3X52NIkiYeEcrvqZsZB2%2F%2F8OOD56JVzhF7lDJIn8ElpFnIuNTGZQR49bFSPF3hWI9%2Fxw1Xxbo7MlNfKmSgZXrvHbh%2F221l0qG6d%2Bopvgf27waqV9CT7luqI7mhxYFSK%2BedMPpCvyb%2BtI39b81SQex%2FdShf0ecWU9i2P6MJz%2Brb4GOqUBEPy4C4dv6mNmF%2FrmI9MyoqdbCVi7sQ6u7idOIH7jfSXXsotP1faLP8a1DhFN0Ae2gNrmfGenta5OeN3%2FFXjpNV2wGSxUodYavBE6cnMPfk8Aev2kUcd8wcGK3pnWrJd5TlOgh1bqlRYfGW6S14pCQyk0TTD4uG4gCV2hxU4r9%2BL2IJJ0hfoyc%2Bwqo%2FwTis6WNys0hF0AJsjrqZ4cRmlI1YKYDNl2&X-Amz-Signature=b0744b1a8a4d7302bdd0e9326dea27c2dfb531c9f58c7c2b64dc8f1b94388d62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2ON466%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAWBKMLWIV9Mq1PjkgghK%2FJDKex6K7TS34zGRRYrsuHJAiEA8WkuFAvp6UFmBNh7JS%2FZgGy%2FPwWO8tQRyFsm%2BRe4Qhoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGHHfnxPraGd%2F5wL9ircA6A1EytAh7yDGnHq7Xg0endLtV8guu5zgkV4pR5sJ4ujijlXEtD1NhD6EgAol3SK40w01sxhzsDGpPP69G29Qwt3PyvL8hqmZbEa5YEKO5Avtx%2FbWaIcevE7HSPn7q9NnUOQL4NE3glzG5zBclw%2FoyGPeueG4c5MNAw362jvr54ZDk%2FGaHAZA9tQtwpRpQpXt5alSDavTL6B2QOh9oWJBgV%2BBuwsA4yx%2B%2BrA9MwFJfTh%2Foap6Rd3T4buKS0ASseC5d4mXQIxS5F5yP7hTpeTx4QQO%2BMNbf8LL75a0aAnpPvNR4xSt5iuIABWhLzBxIXTjYwkodHrBFfkIIIBkmfvqeIoLO9hL6WLGIkZFncF5bY%2Bcp7WoN6Dx3hgtQpWU3mitWq7gcR95Keba4hqvQnIbmG%2BwrWSYvazOfsMwmDynq4wLwcR%2FRxkE6m21UMDJjs2G2R6UsDIEM1SShROgSG7OsBL3X52NIkiYeEcrvqZsZB2%2F%2F8OOD56JVzhF7lDJIn8ElpFnIuNTGZQR49bFSPF3hWI9%2Fxw1Xxbo7MlNfKmSgZXrvHbh%2F221l0qG6d%2Bopvgf27waqV9CT7luqI7mhxYFSK%2BedMPpCvyb%2BtI39b81SQex%2FdShf0ecWU9i2P6MJz%2Brb4GOqUBEPy4C4dv6mNmF%2FrmI9MyoqdbCVi7sQ6u7idOIH7jfSXXsotP1faLP8a1DhFN0Ae2gNrmfGenta5OeN3%2FFXjpNV2wGSxUodYavBE6cnMPfk8Aev2kUcd8wcGK3pnWrJd5TlOgh1bqlRYfGW6S14pCQyk0TTD4uG4gCV2hxU4r9%2BL2IJJ0hfoyc%2Bwqo%2FwTis6WNys0hF0AJsjrqZ4cRmlI1YKYDNl2&X-Amz-Signature=e624d71701b028ac346aadffb530d890c904f4edd2623a8637f82c2b851dda4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2ON466%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAWBKMLWIV9Mq1PjkgghK%2FJDKex6K7TS34zGRRYrsuHJAiEA8WkuFAvp6UFmBNh7JS%2FZgGy%2FPwWO8tQRyFsm%2BRe4Qhoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGHHfnxPraGd%2F5wL9ircA6A1EytAh7yDGnHq7Xg0endLtV8guu5zgkV4pR5sJ4ujijlXEtD1NhD6EgAol3SK40w01sxhzsDGpPP69G29Qwt3PyvL8hqmZbEa5YEKO5Avtx%2FbWaIcevE7HSPn7q9NnUOQL4NE3glzG5zBclw%2FoyGPeueG4c5MNAw362jvr54ZDk%2FGaHAZA9tQtwpRpQpXt5alSDavTL6B2QOh9oWJBgV%2BBuwsA4yx%2B%2BrA9MwFJfTh%2Foap6Rd3T4buKS0ASseC5d4mXQIxS5F5yP7hTpeTx4QQO%2BMNbf8LL75a0aAnpPvNR4xSt5iuIABWhLzBxIXTjYwkodHrBFfkIIIBkmfvqeIoLO9hL6WLGIkZFncF5bY%2Bcp7WoN6Dx3hgtQpWU3mitWq7gcR95Keba4hqvQnIbmG%2BwrWSYvazOfsMwmDynq4wLwcR%2FRxkE6m21UMDJjs2G2R6UsDIEM1SShROgSG7OsBL3X52NIkiYeEcrvqZsZB2%2F%2F8OOD56JVzhF7lDJIn8ElpFnIuNTGZQR49bFSPF3hWI9%2Fxw1Xxbo7MlNfKmSgZXrvHbh%2F221l0qG6d%2Bopvgf27waqV9CT7luqI7mhxYFSK%2BedMPpCvyb%2BtI39b81SQex%2FdShf0ecWU9i2P6MJz%2Brb4GOqUBEPy4C4dv6mNmF%2FrmI9MyoqdbCVi7sQ6u7idOIH7jfSXXsotP1faLP8a1DhFN0Ae2gNrmfGenta5OeN3%2FFXjpNV2wGSxUodYavBE6cnMPfk8Aev2kUcd8wcGK3pnWrJd5TlOgh1bqlRYfGW6S14pCQyk0TTD4uG4gCV2hxU4r9%2BL2IJJ0hfoyc%2Bwqo%2FwTis6WNys0hF0AJsjrqZ4cRmlI1YKYDNl2&X-Amz-Signature=c40b7a4adf8378deac57dc019107c18db1350e7b0abe7146b4a5ce818bbd681d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2ON466%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAWBKMLWIV9Mq1PjkgghK%2FJDKex6K7TS34zGRRYrsuHJAiEA8WkuFAvp6UFmBNh7JS%2FZgGy%2FPwWO8tQRyFsm%2BRe4Qhoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGHHfnxPraGd%2F5wL9ircA6A1EytAh7yDGnHq7Xg0endLtV8guu5zgkV4pR5sJ4ujijlXEtD1NhD6EgAol3SK40w01sxhzsDGpPP69G29Qwt3PyvL8hqmZbEa5YEKO5Avtx%2FbWaIcevE7HSPn7q9NnUOQL4NE3glzG5zBclw%2FoyGPeueG4c5MNAw362jvr54ZDk%2FGaHAZA9tQtwpRpQpXt5alSDavTL6B2QOh9oWJBgV%2BBuwsA4yx%2B%2BrA9MwFJfTh%2Foap6Rd3T4buKS0ASseC5d4mXQIxS5F5yP7hTpeTx4QQO%2BMNbf8LL75a0aAnpPvNR4xSt5iuIABWhLzBxIXTjYwkodHrBFfkIIIBkmfvqeIoLO9hL6WLGIkZFncF5bY%2Bcp7WoN6Dx3hgtQpWU3mitWq7gcR95Keba4hqvQnIbmG%2BwrWSYvazOfsMwmDynq4wLwcR%2FRxkE6m21UMDJjs2G2R6UsDIEM1SShROgSG7OsBL3X52NIkiYeEcrvqZsZB2%2F%2F8OOD56JVzhF7lDJIn8ElpFnIuNTGZQR49bFSPF3hWI9%2Fxw1Xxbo7MlNfKmSgZXrvHbh%2F221l0qG6d%2Bopvgf27waqV9CT7luqI7mhxYFSK%2BedMPpCvyb%2BtI39b81SQex%2FdShf0ecWU9i2P6MJz%2Brb4GOqUBEPy4C4dv6mNmF%2FrmI9MyoqdbCVi7sQ6u7idOIH7jfSXXsotP1faLP8a1DhFN0Ae2gNrmfGenta5OeN3%2FFXjpNV2wGSxUodYavBE6cnMPfk8Aev2kUcd8wcGK3pnWrJd5TlOgh1bqlRYfGW6S14pCQyk0TTD4uG4gCV2hxU4r9%2BL2IJJ0hfoyc%2Bwqo%2FwTis6WNys0hF0AJsjrqZ4cRmlI1YKYDNl2&X-Amz-Signature=661d33be2952310289d09682ea237ade6a737f78d02f4f99377d868f7b8f1223&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT2ON466%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAWBKMLWIV9Mq1PjkgghK%2FJDKex6K7TS34zGRRYrsuHJAiEA8WkuFAvp6UFmBNh7JS%2FZgGy%2FPwWO8tQRyFsm%2BRe4Qhoq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDGHHfnxPraGd%2F5wL9ircA6A1EytAh7yDGnHq7Xg0endLtV8guu5zgkV4pR5sJ4ujijlXEtD1NhD6EgAol3SK40w01sxhzsDGpPP69G29Qwt3PyvL8hqmZbEa5YEKO5Avtx%2FbWaIcevE7HSPn7q9NnUOQL4NE3glzG5zBclw%2FoyGPeueG4c5MNAw362jvr54ZDk%2FGaHAZA9tQtwpRpQpXt5alSDavTL6B2QOh9oWJBgV%2BBuwsA4yx%2B%2BrA9MwFJfTh%2Foap6Rd3T4buKS0ASseC5d4mXQIxS5F5yP7hTpeTx4QQO%2BMNbf8LL75a0aAnpPvNR4xSt5iuIABWhLzBxIXTjYwkodHrBFfkIIIBkmfvqeIoLO9hL6WLGIkZFncF5bY%2Bcp7WoN6Dx3hgtQpWU3mitWq7gcR95Keba4hqvQnIbmG%2BwrWSYvazOfsMwmDynq4wLwcR%2FRxkE6m21UMDJjs2G2R6UsDIEM1SShROgSG7OsBL3X52NIkiYeEcrvqZsZB2%2F%2F8OOD56JVzhF7lDJIn8ElpFnIuNTGZQR49bFSPF3hWI9%2Fxw1Xxbo7MlNfKmSgZXrvHbh%2F221l0qG6d%2Bopvgf27waqV9CT7luqI7mhxYFSK%2BedMPpCvyb%2BtI39b81SQex%2FdShf0ecWU9i2P6MJz%2Brb4GOqUBEPy4C4dv6mNmF%2FrmI9MyoqdbCVi7sQ6u7idOIH7jfSXXsotP1faLP8a1DhFN0Ae2gNrmfGenta5OeN3%2FFXjpNV2wGSxUodYavBE6cnMPfk8Aev2kUcd8wcGK3pnWrJd5TlOgh1bqlRYfGW6S14pCQyk0TTD4uG4gCV2hxU4r9%2BL2IJJ0hfoyc%2Bwqo%2FwTis6WNys0hF0AJsjrqZ4cRmlI1YKYDNl2&X-Amz-Signature=2cb47ba675b5cb0f05990ae0fe33ce90cdf1b45ffb041f9e695866a61181235d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
