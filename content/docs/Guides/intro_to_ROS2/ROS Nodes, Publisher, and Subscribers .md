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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FO4FH6E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYXqDchFh8z%2BE8IH%2Fz%2BRPQykq3aHSjj9NnKqHuqFUuwIgT3RUrQrBU9pjZQfKCZHOvZfd8gCJ3b4ECpp6t61P3KAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb4FBxt%2F3lqju9NDSrcA15Oj7NeBoLSGRiNfsb4XjEjXtkrFcjCCstZIf%2B0BN5508Ndoq7yS6RoKMydNmmMe3JxJSNSMVty5IgkJbRHXPXDB%2FCefsUvLQQXvZPAPI0yS4T9BPZELO5Ub%2F6B%2F53XR0AyZ9ND53sdconciCahgwKQLWVuNrYHZnVNwXAy7wBsBEd9V9CTTOfl3YMvGHlx8t4niKGEVxHGJaZvDtK%2BLu5OxqDdEiQLlTkyeSraUEbgMeOyXV2PheL8jtHz5B6D7n0O2JrIMfFv7sf7ebWKZVsg%2F5sexGOHWZiouJajYbDwu8ZlxPuXo65IEfOWbZDjAK941gTeaSrwnSVaqG7V33k6vmHE2oER0eIGI%2FHLvXsgQYkTGq3Pbb0E%2BIbMuCN%2FTPHD37YGULsR6yab2uqhxxk%2FTWYhPCjVKZcfSNiiOuCoqRZsWbHc5WFGXmpRcecHCf6Sn95Y3WSHutZigCilDen3Z4v1zvvoRybQc8TVgiErZKZq8Ftsi4iCLV13gCMtVWM9yEWXaHwWdFDtgENdZq8CtGm3wORHLQ6xKaPTTrJ4bMeazRrKZNTz8vvBIexiVruWpV9jyY4jduM4A6bsJQ9ZqbT7vVE7h1MKmSHkaUS8IdQgKtG0m%2BmQPNeUMOSdyb4GOqUBkkXCZg6L8J1TLS9sL386SL2QKobCibW357KJG8WYWo%2Bn5PIyb49vn1SqSWNfhToPiXfP2ME8pI2UXouHe79WhoHY2RNz5JKPmoOx2GaWALr0LZ%2BR7b23jRK2AMmgfcpugD79LB2xe5EtXl7U1e%2B0OlO5sdTOJwMna8IhviIKM9GkPYAMwocCs%2BtWPXKB1eIfU9liLJXe2Uvsjcijzd0EF%2BbA7a2v&X-Amz-Signature=676eeb6e17be9c7df171985953c0c73935831ed3cc54292b4cbd1995528e9441&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FO4FH6E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYXqDchFh8z%2BE8IH%2Fz%2BRPQykq3aHSjj9NnKqHuqFUuwIgT3RUrQrBU9pjZQfKCZHOvZfd8gCJ3b4ECpp6t61P3KAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb4FBxt%2F3lqju9NDSrcA15Oj7NeBoLSGRiNfsb4XjEjXtkrFcjCCstZIf%2B0BN5508Ndoq7yS6RoKMydNmmMe3JxJSNSMVty5IgkJbRHXPXDB%2FCefsUvLQQXvZPAPI0yS4T9BPZELO5Ub%2F6B%2F53XR0AyZ9ND53sdconciCahgwKQLWVuNrYHZnVNwXAy7wBsBEd9V9CTTOfl3YMvGHlx8t4niKGEVxHGJaZvDtK%2BLu5OxqDdEiQLlTkyeSraUEbgMeOyXV2PheL8jtHz5B6D7n0O2JrIMfFv7sf7ebWKZVsg%2F5sexGOHWZiouJajYbDwu8ZlxPuXo65IEfOWbZDjAK941gTeaSrwnSVaqG7V33k6vmHE2oER0eIGI%2FHLvXsgQYkTGq3Pbb0E%2BIbMuCN%2FTPHD37YGULsR6yab2uqhxxk%2FTWYhPCjVKZcfSNiiOuCoqRZsWbHc5WFGXmpRcecHCf6Sn95Y3WSHutZigCilDen3Z4v1zvvoRybQc8TVgiErZKZq8Ftsi4iCLV13gCMtVWM9yEWXaHwWdFDtgENdZq8CtGm3wORHLQ6xKaPTTrJ4bMeazRrKZNTz8vvBIexiVruWpV9jyY4jduM4A6bsJQ9ZqbT7vVE7h1MKmSHkaUS8IdQgKtG0m%2BmQPNeUMOSdyb4GOqUBkkXCZg6L8J1TLS9sL386SL2QKobCibW357KJG8WYWo%2Bn5PIyb49vn1SqSWNfhToPiXfP2ME8pI2UXouHe79WhoHY2RNz5JKPmoOx2GaWALr0LZ%2BR7b23jRK2AMmgfcpugD79LB2xe5EtXl7U1e%2B0OlO5sdTOJwMna8IhviIKM9GkPYAMwocCs%2BtWPXKB1eIfU9liLJXe2Uvsjcijzd0EF%2BbA7a2v&X-Amz-Signature=7c1d771c5466226c88d292dfe20c5e52f67739ef8a5360b1f8cf17018a7535cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FO4FH6E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYXqDchFh8z%2BE8IH%2Fz%2BRPQykq3aHSjj9NnKqHuqFUuwIgT3RUrQrBU9pjZQfKCZHOvZfd8gCJ3b4ECpp6t61P3KAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb4FBxt%2F3lqju9NDSrcA15Oj7NeBoLSGRiNfsb4XjEjXtkrFcjCCstZIf%2B0BN5508Ndoq7yS6RoKMydNmmMe3JxJSNSMVty5IgkJbRHXPXDB%2FCefsUvLQQXvZPAPI0yS4T9BPZELO5Ub%2F6B%2F53XR0AyZ9ND53sdconciCahgwKQLWVuNrYHZnVNwXAy7wBsBEd9V9CTTOfl3YMvGHlx8t4niKGEVxHGJaZvDtK%2BLu5OxqDdEiQLlTkyeSraUEbgMeOyXV2PheL8jtHz5B6D7n0O2JrIMfFv7sf7ebWKZVsg%2F5sexGOHWZiouJajYbDwu8ZlxPuXo65IEfOWbZDjAK941gTeaSrwnSVaqG7V33k6vmHE2oER0eIGI%2FHLvXsgQYkTGq3Pbb0E%2BIbMuCN%2FTPHD37YGULsR6yab2uqhxxk%2FTWYhPCjVKZcfSNiiOuCoqRZsWbHc5WFGXmpRcecHCf6Sn95Y3WSHutZigCilDen3Z4v1zvvoRybQc8TVgiErZKZq8Ftsi4iCLV13gCMtVWM9yEWXaHwWdFDtgENdZq8CtGm3wORHLQ6xKaPTTrJ4bMeazRrKZNTz8vvBIexiVruWpV9jyY4jduM4A6bsJQ9ZqbT7vVE7h1MKmSHkaUS8IdQgKtG0m%2BmQPNeUMOSdyb4GOqUBkkXCZg6L8J1TLS9sL386SL2QKobCibW357KJG8WYWo%2Bn5PIyb49vn1SqSWNfhToPiXfP2ME8pI2UXouHe79WhoHY2RNz5JKPmoOx2GaWALr0LZ%2BR7b23jRK2AMmgfcpugD79LB2xe5EtXl7U1e%2B0OlO5sdTOJwMna8IhviIKM9GkPYAMwocCs%2BtWPXKB1eIfU9liLJXe2Uvsjcijzd0EF%2BbA7a2v&X-Amz-Signature=0a90b8f026ed1e4d923ab4ee007a2d81240f0f538c9737c847bdf1572622db95&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FO4FH6E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYXqDchFh8z%2BE8IH%2Fz%2BRPQykq3aHSjj9NnKqHuqFUuwIgT3RUrQrBU9pjZQfKCZHOvZfd8gCJ3b4ECpp6t61P3KAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb4FBxt%2F3lqju9NDSrcA15Oj7NeBoLSGRiNfsb4XjEjXtkrFcjCCstZIf%2B0BN5508Ndoq7yS6RoKMydNmmMe3JxJSNSMVty5IgkJbRHXPXDB%2FCefsUvLQQXvZPAPI0yS4T9BPZELO5Ub%2F6B%2F53XR0AyZ9ND53sdconciCahgwKQLWVuNrYHZnVNwXAy7wBsBEd9V9CTTOfl3YMvGHlx8t4niKGEVxHGJaZvDtK%2BLu5OxqDdEiQLlTkyeSraUEbgMeOyXV2PheL8jtHz5B6D7n0O2JrIMfFv7sf7ebWKZVsg%2F5sexGOHWZiouJajYbDwu8ZlxPuXo65IEfOWbZDjAK941gTeaSrwnSVaqG7V33k6vmHE2oER0eIGI%2FHLvXsgQYkTGq3Pbb0E%2BIbMuCN%2FTPHD37YGULsR6yab2uqhxxk%2FTWYhPCjVKZcfSNiiOuCoqRZsWbHc5WFGXmpRcecHCf6Sn95Y3WSHutZigCilDen3Z4v1zvvoRybQc8TVgiErZKZq8Ftsi4iCLV13gCMtVWM9yEWXaHwWdFDtgENdZq8CtGm3wORHLQ6xKaPTTrJ4bMeazRrKZNTz8vvBIexiVruWpV9jyY4jduM4A6bsJQ9ZqbT7vVE7h1MKmSHkaUS8IdQgKtG0m%2BmQPNeUMOSdyb4GOqUBkkXCZg6L8J1TLS9sL386SL2QKobCibW357KJG8WYWo%2Bn5PIyb49vn1SqSWNfhToPiXfP2ME8pI2UXouHe79WhoHY2RNz5JKPmoOx2GaWALr0LZ%2BR7b23jRK2AMmgfcpugD79LB2xe5EtXl7U1e%2B0OlO5sdTOJwMna8IhviIKM9GkPYAMwocCs%2BtWPXKB1eIfU9liLJXe2Uvsjcijzd0EF%2BbA7a2v&X-Amz-Signature=acc1f8c95cc0e1b1a17d7de3a3756b853304ed33584a55247d766c9d901d9830&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FO4FH6E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYXqDchFh8z%2BE8IH%2Fz%2BRPQykq3aHSjj9NnKqHuqFUuwIgT3RUrQrBU9pjZQfKCZHOvZfd8gCJ3b4ECpp6t61P3KAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb4FBxt%2F3lqju9NDSrcA15Oj7NeBoLSGRiNfsb4XjEjXtkrFcjCCstZIf%2B0BN5508Ndoq7yS6RoKMydNmmMe3JxJSNSMVty5IgkJbRHXPXDB%2FCefsUvLQQXvZPAPI0yS4T9BPZELO5Ub%2F6B%2F53XR0AyZ9ND53sdconciCahgwKQLWVuNrYHZnVNwXAy7wBsBEd9V9CTTOfl3YMvGHlx8t4niKGEVxHGJaZvDtK%2BLu5OxqDdEiQLlTkyeSraUEbgMeOyXV2PheL8jtHz5B6D7n0O2JrIMfFv7sf7ebWKZVsg%2F5sexGOHWZiouJajYbDwu8ZlxPuXo65IEfOWbZDjAK941gTeaSrwnSVaqG7V33k6vmHE2oER0eIGI%2FHLvXsgQYkTGq3Pbb0E%2BIbMuCN%2FTPHD37YGULsR6yab2uqhxxk%2FTWYhPCjVKZcfSNiiOuCoqRZsWbHc5WFGXmpRcecHCf6Sn95Y3WSHutZigCilDen3Z4v1zvvoRybQc8TVgiErZKZq8Ftsi4iCLV13gCMtVWM9yEWXaHwWdFDtgENdZq8CtGm3wORHLQ6xKaPTTrJ4bMeazRrKZNTz8vvBIexiVruWpV9jyY4jduM4A6bsJQ9ZqbT7vVE7h1MKmSHkaUS8IdQgKtG0m%2BmQPNeUMOSdyb4GOqUBkkXCZg6L8J1TLS9sL386SL2QKobCibW357KJG8WYWo%2Bn5PIyb49vn1SqSWNfhToPiXfP2ME8pI2UXouHe79WhoHY2RNz5JKPmoOx2GaWALr0LZ%2BR7b23jRK2AMmgfcpugD79LB2xe5EtXl7U1e%2B0OlO5sdTOJwMna8IhviIKM9GkPYAMwocCs%2BtWPXKB1eIfU9liLJXe2Uvsjcijzd0EF%2BbA7a2v&X-Amz-Signature=f5dd95830be89700e2ec0b5c801022401a27d49f8893d8625aa56c32a6b2dad6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FO4FH6E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYXqDchFh8z%2BE8IH%2Fz%2BRPQykq3aHSjj9NnKqHuqFUuwIgT3RUrQrBU9pjZQfKCZHOvZfd8gCJ3b4ECpp6t61P3KAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb4FBxt%2F3lqju9NDSrcA15Oj7NeBoLSGRiNfsb4XjEjXtkrFcjCCstZIf%2B0BN5508Ndoq7yS6RoKMydNmmMe3JxJSNSMVty5IgkJbRHXPXDB%2FCefsUvLQQXvZPAPI0yS4T9BPZELO5Ub%2F6B%2F53XR0AyZ9ND53sdconciCahgwKQLWVuNrYHZnVNwXAy7wBsBEd9V9CTTOfl3YMvGHlx8t4niKGEVxHGJaZvDtK%2BLu5OxqDdEiQLlTkyeSraUEbgMeOyXV2PheL8jtHz5B6D7n0O2JrIMfFv7sf7ebWKZVsg%2F5sexGOHWZiouJajYbDwu8ZlxPuXo65IEfOWbZDjAK941gTeaSrwnSVaqG7V33k6vmHE2oER0eIGI%2FHLvXsgQYkTGq3Pbb0E%2BIbMuCN%2FTPHD37YGULsR6yab2uqhxxk%2FTWYhPCjVKZcfSNiiOuCoqRZsWbHc5WFGXmpRcecHCf6Sn95Y3WSHutZigCilDen3Z4v1zvvoRybQc8TVgiErZKZq8Ftsi4iCLV13gCMtVWM9yEWXaHwWdFDtgENdZq8CtGm3wORHLQ6xKaPTTrJ4bMeazRrKZNTz8vvBIexiVruWpV9jyY4jduM4A6bsJQ9ZqbT7vVE7h1MKmSHkaUS8IdQgKtG0m%2BmQPNeUMOSdyb4GOqUBkkXCZg6L8J1TLS9sL386SL2QKobCibW357KJG8WYWo%2Bn5PIyb49vn1SqSWNfhToPiXfP2ME8pI2UXouHe79WhoHY2RNz5JKPmoOx2GaWALr0LZ%2BR7b23jRK2AMmgfcpugD79LB2xe5EtXl7U1e%2B0OlO5sdTOJwMna8IhviIKM9GkPYAMwocCs%2BtWPXKB1eIfU9liLJXe2Uvsjcijzd0EF%2BbA7a2v&X-Amz-Signature=d6e021e733cf8a25ba0c17eb87404bdc3dabab176ff06885b576e61e87413b88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FO4FH6E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYXqDchFh8z%2BE8IH%2Fz%2BRPQykq3aHSjj9NnKqHuqFUuwIgT3RUrQrBU9pjZQfKCZHOvZfd8gCJ3b4ECpp6t61P3KAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb4FBxt%2F3lqju9NDSrcA15Oj7NeBoLSGRiNfsb4XjEjXtkrFcjCCstZIf%2B0BN5508Ndoq7yS6RoKMydNmmMe3JxJSNSMVty5IgkJbRHXPXDB%2FCefsUvLQQXvZPAPI0yS4T9BPZELO5Ub%2F6B%2F53XR0AyZ9ND53sdconciCahgwKQLWVuNrYHZnVNwXAy7wBsBEd9V9CTTOfl3YMvGHlx8t4niKGEVxHGJaZvDtK%2BLu5OxqDdEiQLlTkyeSraUEbgMeOyXV2PheL8jtHz5B6D7n0O2JrIMfFv7sf7ebWKZVsg%2F5sexGOHWZiouJajYbDwu8ZlxPuXo65IEfOWbZDjAK941gTeaSrwnSVaqG7V33k6vmHE2oER0eIGI%2FHLvXsgQYkTGq3Pbb0E%2BIbMuCN%2FTPHD37YGULsR6yab2uqhxxk%2FTWYhPCjVKZcfSNiiOuCoqRZsWbHc5WFGXmpRcecHCf6Sn95Y3WSHutZigCilDen3Z4v1zvvoRybQc8TVgiErZKZq8Ftsi4iCLV13gCMtVWM9yEWXaHwWdFDtgENdZq8CtGm3wORHLQ6xKaPTTrJ4bMeazRrKZNTz8vvBIexiVruWpV9jyY4jduM4A6bsJQ9ZqbT7vVE7h1MKmSHkaUS8IdQgKtG0m%2BmQPNeUMOSdyb4GOqUBkkXCZg6L8J1TLS9sL386SL2QKobCibW357KJG8WYWo%2Bn5PIyb49vn1SqSWNfhToPiXfP2ME8pI2UXouHe79WhoHY2RNz5JKPmoOx2GaWALr0LZ%2BR7b23jRK2AMmgfcpugD79LB2xe5EtXl7U1e%2B0OlO5sdTOJwMna8IhviIKM9GkPYAMwocCs%2BtWPXKB1eIfU9liLJXe2Uvsjcijzd0EF%2BbA7a2v&X-Amz-Signature=1c209cadbc402e48d656288bccb560e58d3d251fd891fdc6005028bc93993f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FO4FH6E%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSYXqDchFh8z%2BE8IH%2Fz%2BRPQykq3aHSjj9NnKqHuqFUuwIgT3RUrQrBU9pjZQfKCZHOvZfd8gCJ3b4ECpp6t61P3KAqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb4FBxt%2F3lqju9NDSrcA15Oj7NeBoLSGRiNfsb4XjEjXtkrFcjCCstZIf%2B0BN5508Ndoq7yS6RoKMydNmmMe3JxJSNSMVty5IgkJbRHXPXDB%2FCefsUvLQQXvZPAPI0yS4T9BPZELO5Ub%2F6B%2F53XR0AyZ9ND53sdconciCahgwKQLWVuNrYHZnVNwXAy7wBsBEd9V9CTTOfl3YMvGHlx8t4niKGEVxHGJaZvDtK%2BLu5OxqDdEiQLlTkyeSraUEbgMeOyXV2PheL8jtHz5B6D7n0O2JrIMfFv7sf7ebWKZVsg%2F5sexGOHWZiouJajYbDwu8ZlxPuXo65IEfOWbZDjAK941gTeaSrwnSVaqG7V33k6vmHE2oER0eIGI%2FHLvXsgQYkTGq3Pbb0E%2BIbMuCN%2FTPHD37YGULsR6yab2uqhxxk%2FTWYhPCjVKZcfSNiiOuCoqRZsWbHc5WFGXmpRcecHCf6Sn95Y3WSHutZigCilDen3Z4v1zvvoRybQc8TVgiErZKZq8Ftsi4iCLV13gCMtVWM9yEWXaHwWdFDtgENdZq8CtGm3wORHLQ6xKaPTTrJ4bMeazRrKZNTz8vvBIexiVruWpV9jyY4jduM4A6bsJQ9ZqbT7vVE7h1MKmSHkaUS8IdQgKtG0m%2BmQPNeUMOSdyb4GOqUBkkXCZg6L8J1TLS9sL386SL2QKobCibW357KJG8WYWo%2Bn5PIyb49vn1SqSWNfhToPiXfP2ME8pI2UXouHe79WhoHY2RNz5JKPmoOx2GaWALr0LZ%2BR7b23jRK2AMmgfcpugD79LB2xe5EtXl7U1e%2B0OlO5sdTOJwMna8IhviIKM9GkPYAMwocCs%2BtWPXKB1eIfU9liLJXe2Uvsjcijzd0EF%2BbA7a2v&X-Amz-Signature=b348af077693d5d7e72c3ffcfab86735abe9a7290b98d50260ac8eefe1ea1bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
