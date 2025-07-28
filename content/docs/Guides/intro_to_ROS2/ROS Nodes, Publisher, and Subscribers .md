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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4KBBP5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC7eoHEWGTzuwP99Pof8LcpLc3NjUhLF%2B10CO2JMc%2F1FAiBQUJYbh8L7gYnFGVakH2psh7TabmsD2qVqrEO2SFPEpiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeKc0%2Ba3gWHyHXjyKtwDIiBfEevgfzauqBCC4ZgLxXXR8ml9VqIddnS6a4FCSJ9n47G89KTPYUO6pFXrYhgksvhQ08ok3IqzeWGxJq3L8ieeB4LAE0jclKgFw6SB1%2BfMal3tLHLsaEHdb2RYsBN0uwAcUXFuoPzg0YkJJd88rWHR3uL1yWfA2m2p8%2B9zeyrimKjN3uJe9DMCItZWfGZ2UlYnO3mpZqXgq6cU9xZ7bd0CNABs6%2BHGcjm9O%2BhewiriVJvrLCAoZ7OVNSW7GVreWe%2B5Gm8pscK1LS8T%2FrHghbAjsQyJWjo6hpx4%2BFFhvMmQOO302gVL2Um1c2krXTQijBO0YvwvLTOs4o7%2B4294Vg1FIPqgzhHqS09ZYREgp8JItm9dwaYH1NntL8Qy7IWhkjAVzKIuYXLxQBF2BzMBY5L%2BGAjGwzWI9cgh4xwme8Gf5Izr8XXppos%2FsCIzBBvedYYxGuzIkNk6mglo2LAhf88tsmreucAdKcCZNsQR%2FwRpr3dlt2kuxsv0dNnh34Spa1LKoEKNAv8nMjDXc1FKEFthqR%2FqAx1QH198CTLv6y%2Buz6mNBe9LFwWftHM%2BzfEgqF7rVWrC8JuxH5%2BRQz5VaVWcoFsX099bgCiL1bl4CGiCB3nyfWmhExArNWowte6axAY6pgGg%2FidePY9IfmVg6l4t1XN4lzUlw7LPz%2Bgae9eRCInOqTf%2B0L842q8eijEMygs7Dl3dQdnHFjb0CnUstvLp7%2BFbHsARA%2B6wb0Uffip0HI0XJUXUfeaB6B3UgZS8bs0T9D5iIPW2oaVYuDuBcVbrWud6hRqL2Jyj13GEtAme4fHbVRYY%2BNSxuYycZELPth9%2FVqH4l%2BtD6e6EwXwKMcUItcwLcaGjT%2FrB&X-Amz-Signature=4a1ce52352fd0eb6062b2413a707aef663a7c1502b3b9037d9717b0bd24c0975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4KBBP5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC7eoHEWGTzuwP99Pof8LcpLc3NjUhLF%2B10CO2JMc%2F1FAiBQUJYbh8L7gYnFGVakH2psh7TabmsD2qVqrEO2SFPEpiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeKc0%2Ba3gWHyHXjyKtwDIiBfEevgfzauqBCC4ZgLxXXR8ml9VqIddnS6a4FCSJ9n47G89KTPYUO6pFXrYhgksvhQ08ok3IqzeWGxJq3L8ieeB4LAE0jclKgFw6SB1%2BfMal3tLHLsaEHdb2RYsBN0uwAcUXFuoPzg0YkJJd88rWHR3uL1yWfA2m2p8%2B9zeyrimKjN3uJe9DMCItZWfGZ2UlYnO3mpZqXgq6cU9xZ7bd0CNABs6%2BHGcjm9O%2BhewiriVJvrLCAoZ7OVNSW7GVreWe%2B5Gm8pscK1LS8T%2FrHghbAjsQyJWjo6hpx4%2BFFhvMmQOO302gVL2Um1c2krXTQijBO0YvwvLTOs4o7%2B4294Vg1FIPqgzhHqS09ZYREgp8JItm9dwaYH1NntL8Qy7IWhkjAVzKIuYXLxQBF2BzMBY5L%2BGAjGwzWI9cgh4xwme8Gf5Izr8XXppos%2FsCIzBBvedYYxGuzIkNk6mglo2LAhf88tsmreucAdKcCZNsQR%2FwRpr3dlt2kuxsv0dNnh34Spa1LKoEKNAv8nMjDXc1FKEFthqR%2FqAx1QH198CTLv6y%2Buz6mNBe9LFwWftHM%2BzfEgqF7rVWrC8JuxH5%2BRQz5VaVWcoFsX099bgCiL1bl4CGiCB3nyfWmhExArNWowte6axAY6pgGg%2FidePY9IfmVg6l4t1XN4lzUlw7LPz%2Bgae9eRCInOqTf%2B0L842q8eijEMygs7Dl3dQdnHFjb0CnUstvLp7%2BFbHsARA%2B6wb0Uffip0HI0XJUXUfeaB6B3UgZS8bs0T9D5iIPW2oaVYuDuBcVbrWud6hRqL2Jyj13GEtAme4fHbVRYY%2BNSxuYycZELPth9%2FVqH4l%2BtD6e6EwXwKMcUItcwLcaGjT%2FrB&X-Amz-Signature=a29391510f0896489fe15b4bb1019e4b529bd5349de9fbe1088d372364356b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4KBBP5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC7eoHEWGTzuwP99Pof8LcpLc3NjUhLF%2B10CO2JMc%2F1FAiBQUJYbh8L7gYnFGVakH2psh7TabmsD2qVqrEO2SFPEpiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeKc0%2Ba3gWHyHXjyKtwDIiBfEevgfzauqBCC4ZgLxXXR8ml9VqIddnS6a4FCSJ9n47G89KTPYUO6pFXrYhgksvhQ08ok3IqzeWGxJq3L8ieeB4LAE0jclKgFw6SB1%2BfMal3tLHLsaEHdb2RYsBN0uwAcUXFuoPzg0YkJJd88rWHR3uL1yWfA2m2p8%2B9zeyrimKjN3uJe9DMCItZWfGZ2UlYnO3mpZqXgq6cU9xZ7bd0CNABs6%2BHGcjm9O%2BhewiriVJvrLCAoZ7OVNSW7GVreWe%2B5Gm8pscK1LS8T%2FrHghbAjsQyJWjo6hpx4%2BFFhvMmQOO302gVL2Um1c2krXTQijBO0YvwvLTOs4o7%2B4294Vg1FIPqgzhHqS09ZYREgp8JItm9dwaYH1NntL8Qy7IWhkjAVzKIuYXLxQBF2BzMBY5L%2BGAjGwzWI9cgh4xwme8Gf5Izr8XXppos%2FsCIzBBvedYYxGuzIkNk6mglo2LAhf88tsmreucAdKcCZNsQR%2FwRpr3dlt2kuxsv0dNnh34Spa1LKoEKNAv8nMjDXc1FKEFthqR%2FqAx1QH198CTLv6y%2Buz6mNBe9LFwWftHM%2BzfEgqF7rVWrC8JuxH5%2BRQz5VaVWcoFsX099bgCiL1bl4CGiCB3nyfWmhExArNWowte6axAY6pgGg%2FidePY9IfmVg6l4t1XN4lzUlw7LPz%2Bgae9eRCInOqTf%2B0L842q8eijEMygs7Dl3dQdnHFjb0CnUstvLp7%2BFbHsARA%2B6wb0Uffip0HI0XJUXUfeaB6B3UgZS8bs0T9D5iIPW2oaVYuDuBcVbrWud6hRqL2Jyj13GEtAme4fHbVRYY%2BNSxuYycZELPth9%2FVqH4l%2BtD6e6EwXwKMcUItcwLcaGjT%2FrB&X-Amz-Signature=0f0689d9d9acc9285108aa105db3bd5eff673405e77d453b3aa268cbc2b49e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4KBBP5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC7eoHEWGTzuwP99Pof8LcpLc3NjUhLF%2B10CO2JMc%2F1FAiBQUJYbh8L7gYnFGVakH2psh7TabmsD2qVqrEO2SFPEpiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeKc0%2Ba3gWHyHXjyKtwDIiBfEevgfzauqBCC4ZgLxXXR8ml9VqIddnS6a4FCSJ9n47G89KTPYUO6pFXrYhgksvhQ08ok3IqzeWGxJq3L8ieeB4LAE0jclKgFw6SB1%2BfMal3tLHLsaEHdb2RYsBN0uwAcUXFuoPzg0YkJJd88rWHR3uL1yWfA2m2p8%2B9zeyrimKjN3uJe9DMCItZWfGZ2UlYnO3mpZqXgq6cU9xZ7bd0CNABs6%2BHGcjm9O%2BhewiriVJvrLCAoZ7OVNSW7GVreWe%2B5Gm8pscK1LS8T%2FrHghbAjsQyJWjo6hpx4%2BFFhvMmQOO302gVL2Um1c2krXTQijBO0YvwvLTOs4o7%2B4294Vg1FIPqgzhHqS09ZYREgp8JItm9dwaYH1NntL8Qy7IWhkjAVzKIuYXLxQBF2BzMBY5L%2BGAjGwzWI9cgh4xwme8Gf5Izr8XXppos%2FsCIzBBvedYYxGuzIkNk6mglo2LAhf88tsmreucAdKcCZNsQR%2FwRpr3dlt2kuxsv0dNnh34Spa1LKoEKNAv8nMjDXc1FKEFthqR%2FqAx1QH198CTLv6y%2Buz6mNBe9LFwWftHM%2BzfEgqF7rVWrC8JuxH5%2BRQz5VaVWcoFsX099bgCiL1bl4CGiCB3nyfWmhExArNWowte6axAY6pgGg%2FidePY9IfmVg6l4t1XN4lzUlw7LPz%2Bgae9eRCInOqTf%2B0L842q8eijEMygs7Dl3dQdnHFjb0CnUstvLp7%2BFbHsARA%2B6wb0Uffip0HI0XJUXUfeaB6B3UgZS8bs0T9D5iIPW2oaVYuDuBcVbrWud6hRqL2Jyj13GEtAme4fHbVRYY%2BNSxuYycZELPth9%2FVqH4l%2BtD6e6EwXwKMcUItcwLcaGjT%2FrB&X-Amz-Signature=b0f4e960526a1784df2fde08d410fc0e927f65c71aa552487bf8d4fc57731f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4KBBP5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC7eoHEWGTzuwP99Pof8LcpLc3NjUhLF%2B10CO2JMc%2F1FAiBQUJYbh8L7gYnFGVakH2psh7TabmsD2qVqrEO2SFPEpiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeKc0%2Ba3gWHyHXjyKtwDIiBfEevgfzauqBCC4ZgLxXXR8ml9VqIddnS6a4FCSJ9n47G89KTPYUO6pFXrYhgksvhQ08ok3IqzeWGxJq3L8ieeB4LAE0jclKgFw6SB1%2BfMal3tLHLsaEHdb2RYsBN0uwAcUXFuoPzg0YkJJd88rWHR3uL1yWfA2m2p8%2B9zeyrimKjN3uJe9DMCItZWfGZ2UlYnO3mpZqXgq6cU9xZ7bd0CNABs6%2BHGcjm9O%2BhewiriVJvrLCAoZ7OVNSW7GVreWe%2B5Gm8pscK1LS8T%2FrHghbAjsQyJWjo6hpx4%2BFFhvMmQOO302gVL2Um1c2krXTQijBO0YvwvLTOs4o7%2B4294Vg1FIPqgzhHqS09ZYREgp8JItm9dwaYH1NntL8Qy7IWhkjAVzKIuYXLxQBF2BzMBY5L%2BGAjGwzWI9cgh4xwme8Gf5Izr8XXppos%2FsCIzBBvedYYxGuzIkNk6mglo2LAhf88tsmreucAdKcCZNsQR%2FwRpr3dlt2kuxsv0dNnh34Spa1LKoEKNAv8nMjDXc1FKEFthqR%2FqAx1QH198CTLv6y%2Buz6mNBe9LFwWftHM%2BzfEgqF7rVWrC8JuxH5%2BRQz5VaVWcoFsX099bgCiL1bl4CGiCB3nyfWmhExArNWowte6axAY6pgGg%2FidePY9IfmVg6l4t1XN4lzUlw7LPz%2Bgae9eRCInOqTf%2B0L842q8eijEMygs7Dl3dQdnHFjb0CnUstvLp7%2BFbHsARA%2B6wb0Uffip0HI0XJUXUfeaB6B3UgZS8bs0T9D5iIPW2oaVYuDuBcVbrWud6hRqL2Jyj13GEtAme4fHbVRYY%2BNSxuYycZELPth9%2FVqH4l%2BtD6e6EwXwKMcUItcwLcaGjT%2FrB&X-Amz-Signature=bdeff8a348671b5bf70af9c550bad36794fac1019ee8418ad4e00fd6e365fe80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4KBBP5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC7eoHEWGTzuwP99Pof8LcpLc3NjUhLF%2B10CO2JMc%2F1FAiBQUJYbh8L7gYnFGVakH2psh7TabmsD2qVqrEO2SFPEpiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeKc0%2Ba3gWHyHXjyKtwDIiBfEevgfzauqBCC4ZgLxXXR8ml9VqIddnS6a4FCSJ9n47G89KTPYUO6pFXrYhgksvhQ08ok3IqzeWGxJq3L8ieeB4LAE0jclKgFw6SB1%2BfMal3tLHLsaEHdb2RYsBN0uwAcUXFuoPzg0YkJJd88rWHR3uL1yWfA2m2p8%2B9zeyrimKjN3uJe9DMCItZWfGZ2UlYnO3mpZqXgq6cU9xZ7bd0CNABs6%2BHGcjm9O%2BhewiriVJvrLCAoZ7OVNSW7GVreWe%2B5Gm8pscK1LS8T%2FrHghbAjsQyJWjo6hpx4%2BFFhvMmQOO302gVL2Um1c2krXTQijBO0YvwvLTOs4o7%2B4294Vg1FIPqgzhHqS09ZYREgp8JItm9dwaYH1NntL8Qy7IWhkjAVzKIuYXLxQBF2BzMBY5L%2BGAjGwzWI9cgh4xwme8Gf5Izr8XXppos%2FsCIzBBvedYYxGuzIkNk6mglo2LAhf88tsmreucAdKcCZNsQR%2FwRpr3dlt2kuxsv0dNnh34Spa1LKoEKNAv8nMjDXc1FKEFthqR%2FqAx1QH198CTLv6y%2Buz6mNBe9LFwWftHM%2BzfEgqF7rVWrC8JuxH5%2BRQz5VaVWcoFsX099bgCiL1bl4CGiCB3nyfWmhExArNWowte6axAY6pgGg%2FidePY9IfmVg6l4t1XN4lzUlw7LPz%2Bgae9eRCInOqTf%2B0L842q8eijEMygs7Dl3dQdnHFjb0CnUstvLp7%2BFbHsARA%2B6wb0Uffip0HI0XJUXUfeaB6B3UgZS8bs0T9D5iIPW2oaVYuDuBcVbrWud6hRqL2Jyj13GEtAme4fHbVRYY%2BNSxuYycZELPth9%2FVqH4l%2BtD6e6EwXwKMcUItcwLcaGjT%2FrB&X-Amz-Signature=99fe9eb5faa48493350214fbfc50112d9ced9de85921e1b8de7aee02ac1762c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4KBBP5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC7eoHEWGTzuwP99Pof8LcpLc3NjUhLF%2B10CO2JMc%2F1FAiBQUJYbh8L7gYnFGVakH2psh7TabmsD2qVqrEO2SFPEpiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeKc0%2Ba3gWHyHXjyKtwDIiBfEevgfzauqBCC4ZgLxXXR8ml9VqIddnS6a4FCSJ9n47G89KTPYUO6pFXrYhgksvhQ08ok3IqzeWGxJq3L8ieeB4LAE0jclKgFw6SB1%2BfMal3tLHLsaEHdb2RYsBN0uwAcUXFuoPzg0YkJJd88rWHR3uL1yWfA2m2p8%2B9zeyrimKjN3uJe9DMCItZWfGZ2UlYnO3mpZqXgq6cU9xZ7bd0CNABs6%2BHGcjm9O%2BhewiriVJvrLCAoZ7OVNSW7GVreWe%2B5Gm8pscK1LS8T%2FrHghbAjsQyJWjo6hpx4%2BFFhvMmQOO302gVL2Um1c2krXTQijBO0YvwvLTOs4o7%2B4294Vg1FIPqgzhHqS09ZYREgp8JItm9dwaYH1NntL8Qy7IWhkjAVzKIuYXLxQBF2BzMBY5L%2BGAjGwzWI9cgh4xwme8Gf5Izr8XXppos%2FsCIzBBvedYYxGuzIkNk6mglo2LAhf88tsmreucAdKcCZNsQR%2FwRpr3dlt2kuxsv0dNnh34Spa1LKoEKNAv8nMjDXc1FKEFthqR%2FqAx1QH198CTLv6y%2Buz6mNBe9LFwWftHM%2BzfEgqF7rVWrC8JuxH5%2BRQz5VaVWcoFsX099bgCiL1bl4CGiCB3nyfWmhExArNWowte6axAY6pgGg%2FidePY9IfmVg6l4t1XN4lzUlw7LPz%2Bgae9eRCInOqTf%2B0L842q8eijEMygs7Dl3dQdnHFjb0CnUstvLp7%2BFbHsARA%2B6wb0Uffip0HI0XJUXUfeaB6B3UgZS8bs0T9D5iIPW2oaVYuDuBcVbrWud6hRqL2Jyj13GEtAme4fHbVRYY%2BNSxuYycZELPth9%2FVqH4l%2BtD6e6EwXwKMcUItcwLcaGjT%2FrB&X-Amz-Signature=b5efc84e44d33be6e1d5a1ec65fcaf9c1ec589c63d31d5dbf1fbd7a3a0891f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A4KBBP5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIC7eoHEWGTzuwP99Pof8LcpLc3NjUhLF%2B10CO2JMc%2F1FAiBQUJYbh8L7gYnFGVakH2psh7TabmsD2qVqrEO2SFPEpiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfeKc0%2Ba3gWHyHXjyKtwDIiBfEevgfzauqBCC4ZgLxXXR8ml9VqIddnS6a4FCSJ9n47G89KTPYUO6pFXrYhgksvhQ08ok3IqzeWGxJq3L8ieeB4LAE0jclKgFw6SB1%2BfMal3tLHLsaEHdb2RYsBN0uwAcUXFuoPzg0YkJJd88rWHR3uL1yWfA2m2p8%2B9zeyrimKjN3uJe9DMCItZWfGZ2UlYnO3mpZqXgq6cU9xZ7bd0CNABs6%2BHGcjm9O%2BhewiriVJvrLCAoZ7OVNSW7GVreWe%2B5Gm8pscK1LS8T%2FrHghbAjsQyJWjo6hpx4%2BFFhvMmQOO302gVL2Um1c2krXTQijBO0YvwvLTOs4o7%2B4294Vg1FIPqgzhHqS09ZYREgp8JItm9dwaYH1NntL8Qy7IWhkjAVzKIuYXLxQBF2BzMBY5L%2BGAjGwzWI9cgh4xwme8Gf5Izr8XXppos%2FsCIzBBvedYYxGuzIkNk6mglo2LAhf88tsmreucAdKcCZNsQR%2FwRpr3dlt2kuxsv0dNnh34Spa1LKoEKNAv8nMjDXc1FKEFthqR%2FqAx1QH198CTLv6y%2Buz6mNBe9LFwWftHM%2BzfEgqF7rVWrC8JuxH5%2BRQz5VaVWcoFsX099bgCiL1bl4CGiCB3nyfWmhExArNWowte6axAY6pgGg%2FidePY9IfmVg6l4t1XN4lzUlw7LPz%2Bgae9eRCInOqTf%2B0L842q8eijEMygs7Dl3dQdnHFjb0CnUstvLp7%2BFbHsARA%2B6wb0Uffip0HI0XJUXUfeaB6B3UgZS8bs0T9D5iIPW2oaVYuDuBcVbrWud6hRqL2Jyj13GEtAme4fHbVRYY%2BNSxuYycZELPth9%2FVqH4l%2BtD6e6EwXwKMcUItcwLcaGjT%2FrB&X-Amz-Signature=ce5f9db8aafc351266ccb08d09515030620d8d82300b76b8659d47e183a272b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
