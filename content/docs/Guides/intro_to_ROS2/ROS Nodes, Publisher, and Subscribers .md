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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKKFSVV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Yi5Q8ZskUHesv6or4a6grmpXf0o%2Fd2xcR5isZdhgvQIhALMEdhP45lMwtlt6zxDDouzyeDJuiBBEDJOFJl2s4EsyKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1mlDrGvAZqctfysYq3APjln3jg9Jh99Dyn7I7NqQ9yK3%2BMHJWDvGeC%2FcGm%2BqCP7mPyTk9J9ciYgzeeq%2BnU5sdu64hXVfUCZhl5vYg%2Fi%2Bl1xgQ9OQhbZwpD41xKSUvz6zztQV9fsnkfo6nTzZ0incypgl%2FIP6eOEe4%2BZrSk828b8PrRL5FNc%2FbRX3xMmFwxKTrtvega%2FpPZ8zk3e0vnE35rmyWGbVVkYk7iTLI%2B6UebAZqNDGCle9imEfD2hzqmQH8c%2BcOa1ookuDw3JhyX5B0SZgnzVQzGmRYOlAlegF7zrALlxlPIOplQWm0vhE8ynsOymXFkVNbJS%2BwtfFMttZuyVfsfUg4mfAVywGuA9nADUXoLZacTog27cD2ml5QJUH87btVtVzNN82jX5emmgzpZbkXhlMdrUGSI6LEJtvoV7vA2JYwh8BpDl13CQhZvJiAp3IpBtJusDL7u9rsoYmlxXd5YujbeDX3nf%2BO37tL9j3rh3KIS1MVHcDbxn6zVamANtZO%2BjY9ZybrNZrZTGdUnpxQhccP6P5YSL60ExlTvrV%2BMaSDifhomwBtYE%2FjqkWGe1SIRwO9ZsZxRxcXDg8GLRRMgcAjimrapOxAFDh68vcX%2F1Yf7GM6LLHCLAuGmMfKv2l3fOYjAKnB0jDFkq69BjqkAQewcaUMnSM1hzhqYvKDLBViI%2BJSmIMgZwgPBd7a7F%2FQK8WidAUjREQwTpyiLwzJ%2BqmgKR2oMyKGPjjAM2DqmLroYO3X1iSz8v%2BFfQgUNwtwPaQUX6EpA%2BRDv2W0VpybWygI3x6hAC3L8%2FmDD4w7g7fb0%2F%2BdeVn3EiIqaCO1gtQz4MIWgMJMPjbgjSPo%2BpyslaKDv232Be7CzhDfRcdFH72L1b5b&X-Amz-Signature=f90d3eff698ae27d20d4dfda6b7f38467b28a18083a6b4061b1e31a373145515&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKKFSVV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Yi5Q8ZskUHesv6or4a6grmpXf0o%2Fd2xcR5isZdhgvQIhALMEdhP45lMwtlt6zxDDouzyeDJuiBBEDJOFJl2s4EsyKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1mlDrGvAZqctfysYq3APjln3jg9Jh99Dyn7I7NqQ9yK3%2BMHJWDvGeC%2FcGm%2BqCP7mPyTk9J9ciYgzeeq%2BnU5sdu64hXVfUCZhl5vYg%2Fi%2Bl1xgQ9OQhbZwpD41xKSUvz6zztQV9fsnkfo6nTzZ0incypgl%2FIP6eOEe4%2BZrSk828b8PrRL5FNc%2FbRX3xMmFwxKTrtvega%2FpPZ8zk3e0vnE35rmyWGbVVkYk7iTLI%2B6UebAZqNDGCle9imEfD2hzqmQH8c%2BcOa1ookuDw3JhyX5B0SZgnzVQzGmRYOlAlegF7zrALlxlPIOplQWm0vhE8ynsOymXFkVNbJS%2BwtfFMttZuyVfsfUg4mfAVywGuA9nADUXoLZacTog27cD2ml5QJUH87btVtVzNN82jX5emmgzpZbkXhlMdrUGSI6LEJtvoV7vA2JYwh8BpDl13CQhZvJiAp3IpBtJusDL7u9rsoYmlxXd5YujbeDX3nf%2BO37tL9j3rh3KIS1MVHcDbxn6zVamANtZO%2BjY9ZybrNZrZTGdUnpxQhccP6P5YSL60ExlTvrV%2BMaSDifhomwBtYE%2FjqkWGe1SIRwO9ZsZxRxcXDg8GLRRMgcAjimrapOxAFDh68vcX%2F1Yf7GM6LLHCLAuGmMfKv2l3fOYjAKnB0jDFkq69BjqkAQewcaUMnSM1hzhqYvKDLBViI%2BJSmIMgZwgPBd7a7F%2FQK8WidAUjREQwTpyiLwzJ%2BqmgKR2oMyKGPjjAM2DqmLroYO3X1iSz8v%2BFfQgUNwtwPaQUX6EpA%2BRDv2W0VpybWygI3x6hAC3L8%2FmDD4w7g7fb0%2F%2BdeVn3EiIqaCO1gtQz4MIWgMJMPjbgjSPo%2BpyslaKDv232Be7CzhDfRcdFH72L1b5b&X-Amz-Signature=5d5303d24a249562b97f16208d972c8cc66353c0f168878cbffc0bf8f5e411de&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKKFSVV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Yi5Q8ZskUHesv6or4a6grmpXf0o%2Fd2xcR5isZdhgvQIhALMEdhP45lMwtlt6zxDDouzyeDJuiBBEDJOFJl2s4EsyKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1mlDrGvAZqctfysYq3APjln3jg9Jh99Dyn7I7NqQ9yK3%2BMHJWDvGeC%2FcGm%2BqCP7mPyTk9J9ciYgzeeq%2BnU5sdu64hXVfUCZhl5vYg%2Fi%2Bl1xgQ9OQhbZwpD41xKSUvz6zztQV9fsnkfo6nTzZ0incypgl%2FIP6eOEe4%2BZrSk828b8PrRL5FNc%2FbRX3xMmFwxKTrtvega%2FpPZ8zk3e0vnE35rmyWGbVVkYk7iTLI%2B6UebAZqNDGCle9imEfD2hzqmQH8c%2BcOa1ookuDw3JhyX5B0SZgnzVQzGmRYOlAlegF7zrALlxlPIOplQWm0vhE8ynsOymXFkVNbJS%2BwtfFMttZuyVfsfUg4mfAVywGuA9nADUXoLZacTog27cD2ml5QJUH87btVtVzNN82jX5emmgzpZbkXhlMdrUGSI6LEJtvoV7vA2JYwh8BpDl13CQhZvJiAp3IpBtJusDL7u9rsoYmlxXd5YujbeDX3nf%2BO37tL9j3rh3KIS1MVHcDbxn6zVamANtZO%2BjY9ZybrNZrZTGdUnpxQhccP6P5YSL60ExlTvrV%2BMaSDifhomwBtYE%2FjqkWGe1SIRwO9ZsZxRxcXDg8GLRRMgcAjimrapOxAFDh68vcX%2F1Yf7GM6LLHCLAuGmMfKv2l3fOYjAKnB0jDFkq69BjqkAQewcaUMnSM1hzhqYvKDLBViI%2BJSmIMgZwgPBd7a7F%2FQK8WidAUjREQwTpyiLwzJ%2BqmgKR2oMyKGPjjAM2DqmLroYO3X1iSz8v%2BFfQgUNwtwPaQUX6EpA%2BRDv2W0VpybWygI3x6hAC3L8%2FmDD4w7g7fb0%2F%2BdeVn3EiIqaCO1gtQz4MIWgMJMPjbgjSPo%2BpyslaKDv232Be7CzhDfRcdFH72L1b5b&X-Amz-Signature=cc07d0d87df8eab89617a844f3512b7db71bad622129caca3187765c32a2af81&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKKFSVV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Yi5Q8ZskUHesv6or4a6grmpXf0o%2Fd2xcR5isZdhgvQIhALMEdhP45lMwtlt6zxDDouzyeDJuiBBEDJOFJl2s4EsyKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1mlDrGvAZqctfysYq3APjln3jg9Jh99Dyn7I7NqQ9yK3%2BMHJWDvGeC%2FcGm%2BqCP7mPyTk9J9ciYgzeeq%2BnU5sdu64hXVfUCZhl5vYg%2Fi%2Bl1xgQ9OQhbZwpD41xKSUvz6zztQV9fsnkfo6nTzZ0incypgl%2FIP6eOEe4%2BZrSk828b8PrRL5FNc%2FbRX3xMmFwxKTrtvega%2FpPZ8zk3e0vnE35rmyWGbVVkYk7iTLI%2B6UebAZqNDGCle9imEfD2hzqmQH8c%2BcOa1ookuDw3JhyX5B0SZgnzVQzGmRYOlAlegF7zrALlxlPIOplQWm0vhE8ynsOymXFkVNbJS%2BwtfFMttZuyVfsfUg4mfAVywGuA9nADUXoLZacTog27cD2ml5QJUH87btVtVzNN82jX5emmgzpZbkXhlMdrUGSI6LEJtvoV7vA2JYwh8BpDl13CQhZvJiAp3IpBtJusDL7u9rsoYmlxXd5YujbeDX3nf%2BO37tL9j3rh3KIS1MVHcDbxn6zVamANtZO%2BjY9ZybrNZrZTGdUnpxQhccP6P5YSL60ExlTvrV%2BMaSDifhomwBtYE%2FjqkWGe1SIRwO9ZsZxRxcXDg8GLRRMgcAjimrapOxAFDh68vcX%2F1Yf7GM6LLHCLAuGmMfKv2l3fOYjAKnB0jDFkq69BjqkAQewcaUMnSM1hzhqYvKDLBViI%2BJSmIMgZwgPBd7a7F%2FQK8WidAUjREQwTpyiLwzJ%2BqmgKR2oMyKGPjjAM2DqmLroYO3X1iSz8v%2BFfQgUNwtwPaQUX6EpA%2BRDv2W0VpybWygI3x6hAC3L8%2FmDD4w7g7fb0%2F%2BdeVn3EiIqaCO1gtQz4MIWgMJMPjbgjSPo%2BpyslaKDv232Be7CzhDfRcdFH72L1b5b&X-Amz-Signature=bb4d519c26be7ddad592aa80fb8b742587edef5b26373cb27b945c2d95edc5ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKKFSVV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Yi5Q8ZskUHesv6or4a6grmpXf0o%2Fd2xcR5isZdhgvQIhALMEdhP45lMwtlt6zxDDouzyeDJuiBBEDJOFJl2s4EsyKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1mlDrGvAZqctfysYq3APjln3jg9Jh99Dyn7I7NqQ9yK3%2BMHJWDvGeC%2FcGm%2BqCP7mPyTk9J9ciYgzeeq%2BnU5sdu64hXVfUCZhl5vYg%2Fi%2Bl1xgQ9OQhbZwpD41xKSUvz6zztQV9fsnkfo6nTzZ0incypgl%2FIP6eOEe4%2BZrSk828b8PrRL5FNc%2FbRX3xMmFwxKTrtvega%2FpPZ8zk3e0vnE35rmyWGbVVkYk7iTLI%2B6UebAZqNDGCle9imEfD2hzqmQH8c%2BcOa1ookuDw3JhyX5B0SZgnzVQzGmRYOlAlegF7zrALlxlPIOplQWm0vhE8ynsOymXFkVNbJS%2BwtfFMttZuyVfsfUg4mfAVywGuA9nADUXoLZacTog27cD2ml5QJUH87btVtVzNN82jX5emmgzpZbkXhlMdrUGSI6LEJtvoV7vA2JYwh8BpDl13CQhZvJiAp3IpBtJusDL7u9rsoYmlxXd5YujbeDX3nf%2BO37tL9j3rh3KIS1MVHcDbxn6zVamANtZO%2BjY9ZybrNZrZTGdUnpxQhccP6P5YSL60ExlTvrV%2BMaSDifhomwBtYE%2FjqkWGe1SIRwO9ZsZxRxcXDg8GLRRMgcAjimrapOxAFDh68vcX%2F1Yf7GM6LLHCLAuGmMfKv2l3fOYjAKnB0jDFkq69BjqkAQewcaUMnSM1hzhqYvKDLBViI%2BJSmIMgZwgPBd7a7F%2FQK8WidAUjREQwTpyiLwzJ%2BqmgKR2oMyKGPjjAM2DqmLroYO3X1iSz8v%2BFfQgUNwtwPaQUX6EpA%2BRDv2W0VpybWygI3x6hAC3L8%2FmDD4w7g7fb0%2F%2BdeVn3EiIqaCO1gtQz4MIWgMJMPjbgjSPo%2BpyslaKDv232Be7CzhDfRcdFH72L1b5b&X-Amz-Signature=4923dd516fd1adb8e2fcb3fb54033e1669651ef6b4cb393242ab6ff9fcacdb24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKKFSVV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Yi5Q8ZskUHesv6or4a6grmpXf0o%2Fd2xcR5isZdhgvQIhALMEdhP45lMwtlt6zxDDouzyeDJuiBBEDJOFJl2s4EsyKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1mlDrGvAZqctfysYq3APjln3jg9Jh99Dyn7I7NqQ9yK3%2BMHJWDvGeC%2FcGm%2BqCP7mPyTk9J9ciYgzeeq%2BnU5sdu64hXVfUCZhl5vYg%2Fi%2Bl1xgQ9OQhbZwpD41xKSUvz6zztQV9fsnkfo6nTzZ0incypgl%2FIP6eOEe4%2BZrSk828b8PrRL5FNc%2FbRX3xMmFwxKTrtvega%2FpPZ8zk3e0vnE35rmyWGbVVkYk7iTLI%2B6UebAZqNDGCle9imEfD2hzqmQH8c%2BcOa1ookuDw3JhyX5B0SZgnzVQzGmRYOlAlegF7zrALlxlPIOplQWm0vhE8ynsOymXFkVNbJS%2BwtfFMttZuyVfsfUg4mfAVywGuA9nADUXoLZacTog27cD2ml5QJUH87btVtVzNN82jX5emmgzpZbkXhlMdrUGSI6LEJtvoV7vA2JYwh8BpDl13CQhZvJiAp3IpBtJusDL7u9rsoYmlxXd5YujbeDX3nf%2BO37tL9j3rh3KIS1MVHcDbxn6zVamANtZO%2BjY9ZybrNZrZTGdUnpxQhccP6P5YSL60ExlTvrV%2BMaSDifhomwBtYE%2FjqkWGe1SIRwO9ZsZxRxcXDg8GLRRMgcAjimrapOxAFDh68vcX%2F1Yf7GM6LLHCLAuGmMfKv2l3fOYjAKnB0jDFkq69BjqkAQewcaUMnSM1hzhqYvKDLBViI%2BJSmIMgZwgPBd7a7F%2FQK8WidAUjREQwTpyiLwzJ%2BqmgKR2oMyKGPjjAM2DqmLroYO3X1iSz8v%2BFfQgUNwtwPaQUX6EpA%2BRDv2W0VpybWygI3x6hAC3L8%2FmDD4w7g7fb0%2F%2BdeVn3EiIqaCO1gtQz4MIWgMJMPjbgjSPo%2BpyslaKDv232Be7CzhDfRcdFH72L1b5b&X-Amz-Signature=c0f5829efb6339c11999d9b933d355f8a002e1e53317ff202b6da1398d71372e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKKFSVV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Yi5Q8ZskUHesv6or4a6grmpXf0o%2Fd2xcR5isZdhgvQIhALMEdhP45lMwtlt6zxDDouzyeDJuiBBEDJOFJl2s4EsyKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1mlDrGvAZqctfysYq3APjln3jg9Jh99Dyn7I7NqQ9yK3%2BMHJWDvGeC%2FcGm%2BqCP7mPyTk9J9ciYgzeeq%2BnU5sdu64hXVfUCZhl5vYg%2Fi%2Bl1xgQ9OQhbZwpD41xKSUvz6zztQV9fsnkfo6nTzZ0incypgl%2FIP6eOEe4%2BZrSk828b8PrRL5FNc%2FbRX3xMmFwxKTrtvega%2FpPZ8zk3e0vnE35rmyWGbVVkYk7iTLI%2B6UebAZqNDGCle9imEfD2hzqmQH8c%2BcOa1ookuDw3JhyX5B0SZgnzVQzGmRYOlAlegF7zrALlxlPIOplQWm0vhE8ynsOymXFkVNbJS%2BwtfFMttZuyVfsfUg4mfAVywGuA9nADUXoLZacTog27cD2ml5QJUH87btVtVzNN82jX5emmgzpZbkXhlMdrUGSI6LEJtvoV7vA2JYwh8BpDl13CQhZvJiAp3IpBtJusDL7u9rsoYmlxXd5YujbeDX3nf%2BO37tL9j3rh3KIS1MVHcDbxn6zVamANtZO%2BjY9ZybrNZrZTGdUnpxQhccP6P5YSL60ExlTvrV%2BMaSDifhomwBtYE%2FjqkWGe1SIRwO9ZsZxRxcXDg8GLRRMgcAjimrapOxAFDh68vcX%2F1Yf7GM6LLHCLAuGmMfKv2l3fOYjAKnB0jDFkq69BjqkAQewcaUMnSM1hzhqYvKDLBViI%2BJSmIMgZwgPBd7a7F%2FQK8WidAUjREQwTpyiLwzJ%2BqmgKR2oMyKGPjjAM2DqmLroYO3X1iSz8v%2BFfQgUNwtwPaQUX6EpA%2BRDv2W0VpybWygI3x6hAC3L8%2FmDD4w7g7fb0%2F%2BdeVn3EiIqaCO1gtQz4MIWgMJMPjbgjSPo%2BpyslaKDv232Be7CzhDfRcdFH72L1b5b&X-Amz-Signature=f64fdf3b66481cda7625115a402facd1730cfede4cbc9edd8038e1d6b60c93cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKKFSVV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Yi5Q8ZskUHesv6or4a6grmpXf0o%2Fd2xcR5isZdhgvQIhALMEdhP45lMwtlt6zxDDouzyeDJuiBBEDJOFJl2s4EsyKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1mlDrGvAZqctfysYq3APjln3jg9Jh99Dyn7I7NqQ9yK3%2BMHJWDvGeC%2FcGm%2BqCP7mPyTk9J9ciYgzeeq%2BnU5sdu64hXVfUCZhl5vYg%2Fi%2Bl1xgQ9OQhbZwpD41xKSUvz6zztQV9fsnkfo6nTzZ0incypgl%2FIP6eOEe4%2BZrSk828b8PrRL5FNc%2FbRX3xMmFwxKTrtvega%2FpPZ8zk3e0vnE35rmyWGbVVkYk7iTLI%2B6UebAZqNDGCle9imEfD2hzqmQH8c%2BcOa1ookuDw3JhyX5B0SZgnzVQzGmRYOlAlegF7zrALlxlPIOplQWm0vhE8ynsOymXFkVNbJS%2BwtfFMttZuyVfsfUg4mfAVywGuA9nADUXoLZacTog27cD2ml5QJUH87btVtVzNN82jX5emmgzpZbkXhlMdrUGSI6LEJtvoV7vA2JYwh8BpDl13CQhZvJiAp3IpBtJusDL7u9rsoYmlxXd5YujbeDX3nf%2BO37tL9j3rh3KIS1MVHcDbxn6zVamANtZO%2BjY9ZybrNZrZTGdUnpxQhccP6P5YSL60ExlTvrV%2BMaSDifhomwBtYE%2FjqkWGe1SIRwO9ZsZxRxcXDg8GLRRMgcAjimrapOxAFDh68vcX%2F1Yf7GM6LLHCLAuGmMfKv2l3fOYjAKnB0jDFkq69BjqkAQewcaUMnSM1hzhqYvKDLBViI%2BJSmIMgZwgPBd7a7F%2FQK8WidAUjREQwTpyiLwzJ%2BqmgKR2oMyKGPjjAM2DqmLroYO3X1iSz8v%2BFfQgUNwtwPaQUX6EpA%2BRDv2W0VpybWygI3x6hAC3L8%2FmDD4w7g7fb0%2F%2BdeVn3EiIqaCO1gtQz4MIWgMJMPjbgjSPo%2BpyslaKDv232Be7CzhDfRcdFH72L1b5b&X-Amz-Signature=486b1fec582ff16f60a76ba7507c96691162bc8089352d430e722e42d81bb7c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
