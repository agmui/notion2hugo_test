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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7XDVQRC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg2LuEF%2B243BB54UvFlWgdhIPGpeFymd8Xxq7xp9pKMAiAjwBV79tffv%2BD9ZHZ4edONhgqnNEOsMdGhK0tYhPBO5iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdWexTzFpXxmM5%2FiKtwDf7JeEo9ECKDbGldxl7Z1kofLPIb%2B3%2BwfhFcLLwW9t6PYIS9GMByhxKcB7g3x4xs0cULRgrWywozH%2BusQIZ%2Bwk6b%2BNb5ce0e00oBsfj1QKreMmla4IiMnf6yYzqVveDwKpheYhAcw%2BSSFDcWkbYrkOVOQvgKk7%2FHuXVEpwqNi6qE8jsyCQy3E1E6rJd28PZWHfBnGz9ruWW1VbtXa0%2BuJmoekafib402uvSwwNgccQ5NetvTrtLktM0u%2BWj3%2BjI0hKJzxBrd71rKl4Y1CZwRJWcmbmL0qju6%2BYq4n80vl5Oe2sbFM32BpBx5lNcV5DjrtEeOsmuhvAoWbsYGjVwDfhuoSU5CwX29V1rCiMvjZw4ctANEBPdLmeeCsP%2FcSQs1Jo0fYNYUVLEKW1aacnwqRZiMZdJzEbgCIQ%2BU%2FjIM0A6qUBE8Bn%2FTeWt5LjUGkz02Ma3tEZGwB8PKRCrfkmpC7V5uRgr94kYY3eMYGku5BT3i%2BQZXwqiAu9tTuietLOfsAySf16b9sQ0jwGIaSSCdPLC9H0RqacP%2FaivYwdVoE0RISSYp%2BiZQJmf7k%2FruvxRgyvsnHDYSVKIRwFqwljnejBTSZxN7x5YwDRgZgO2Ola3c4F17u%2FPAWG6F83Ogws7uPwwY6pgHfIdgg7UvU7vVeEs0VCrtPyvI0bIAlKEXY0M8ExNIwhNrFtqS9ozN2CF89GsXVXUhHSJBzkUZfZPQzJ1yDJBrbHG3rs5tAGW%2Fv072Ox7EQzSZYlS0E3BuyQvlNXXsk0%2FIZTcyS2FFTWzzwhbJZ%2FeSicVj9fgAmUcMZvFIv2HB9ADigbXNT9E6mPX2GTbhZ3KQAdJUMTUmbH2rsAw596mrzfL8PK0Gg&X-Amz-Signature=25e6884c6cf762fd35a6035af8190f10071eb0edd6f57a95e5f9fb7cecfbc7ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7XDVQRC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg2LuEF%2B243BB54UvFlWgdhIPGpeFymd8Xxq7xp9pKMAiAjwBV79tffv%2BD9ZHZ4edONhgqnNEOsMdGhK0tYhPBO5iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdWexTzFpXxmM5%2FiKtwDf7JeEo9ECKDbGldxl7Z1kofLPIb%2B3%2BwfhFcLLwW9t6PYIS9GMByhxKcB7g3x4xs0cULRgrWywozH%2BusQIZ%2Bwk6b%2BNb5ce0e00oBsfj1QKreMmla4IiMnf6yYzqVveDwKpheYhAcw%2BSSFDcWkbYrkOVOQvgKk7%2FHuXVEpwqNi6qE8jsyCQy3E1E6rJd28PZWHfBnGz9ruWW1VbtXa0%2BuJmoekafib402uvSwwNgccQ5NetvTrtLktM0u%2BWj3%2BjI0hKJzxBrd71rKl4Y1CZwRJWcmbmL0qju6%2BYq4n80vl5Oe2sbFM32BpBx5lNcV5DjrtEeOsmuhvAoWbsYGjVwDfhuoSU5CwX29V1rCiMvjZw4ctANEBPdLmeeCsP%2FcSQs1Jo0fYNYUVLEKW1aacnwqRZiMZdJzEbgCIQ%2BU%2FjIM0A6qUBE8Bn%2FTeWt5LjUGkz02Ma3tEZGwB8PKRCrfkmpC7V5uRgr94kYY3eMYGku5BT3i%2BQZXwqiAu9tTuietLOfsAySf16b9sQ0jwGIaSSCdPLC9H0RqacP%2FaivYwdVoE0RISSYp%2BiZQJmf7k%2FruvxRgyvsnHDYSVKIRwFqwljnejBTSZxN7x5YwDRgZgO2Ola3c4F17u%2FPAWG6F83Ogws7uPwwY6pgHfIdgg7UvU7vVeEs0VCrtPyvI0bIAlKEXY0M8ExNIwhNrFtqS9ozN2CF89GsXVXUhHSJBzkUZfZPQzJ1yDJBrbHG3rs5tAGW%2Fv072Ox7EQzSZYlS0E3BuyQvlNXXsk0%2FIZTcyS2FFTWzzwhbJZ%2FeSicVj9fgAmUcMZvFIv2HB9ADigbXNT9E6mPX2GTbhZ3KQAdJUMTUmbH2rsAw596mrzfL8PK0Gg&X-Amz-Signature=80a0d3e6a6e2dc36c355a3150edb4686471dfdf5ea4ff87254cd0d87b115170d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7XDVQRC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg2LuEF%2B243BB54UvFlWgdhIPGpeFymd8Xxq7xp9pKMAiAjwBV79tffv%2BD9ZHZ4edONhgqnNEOsMdGhK0tYhPBO5iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdWexTzFpXxmM5%2FiKtwDf7JeEo9ECKDbGldxl7Z1kofLPIb%2B3%2BwfhFcLLwW9t6PYIS9GMByhxKcB7g3x4xs0cULRgrWywozH%2BusQIZ%2Bwk6b%2BNb5ce0e00oBsfj1QKreMmla4IiMnf6yYzqVveDwKpheYhAcw%2BSSFDcWkbYrkOVOQvgKk7%2FHuXVEpwqNi6qE8jsyCQy3E1E6rJd28PZWHfBnGz9ruWW1VbtXa0%2BuJmoekafib402uvSwwNgccQ5NetvTrtLktM0u%2BWj3%2BjI0hKJzxBrd71rKl4Y1CZwRJWcmbmL0qju6%2BYq4n80vl5Oe2sbFM32BpBx5lNcV5DjrtEeOsmuhvAoWbsYGjVwDfhuoSU5CwX29V1rCiMvjZw4ctANEBPdLmeeCsP%2FcSQs1Jo0fYNYUVLEKW1aacnwqRZiMZdJzEbgCIQ%2BU%2FjIM0A6qUBE8Bn%2FTeWt5LjUGkz02Ma3tEZGwB8PKRCrfkmpC7V5uRgr94kYY3eMYGku5BT3i%2BQZXwqiAu9tTuietLOfsAySf16b9sQ0jwGIaSSCdPLC9H0RqacP%2FaivYwdVoE0RISSYp%2BiZQJmf7k%2FruvxRgyvsnHDYSVKIRwFqwljnejBTSZxN7x5YwDRgZgO2Ola3c4F17u%2FPAWG6F83Ogws7uPwwY6pgHfIdgg7UvU7vVeEs0VCrtPyvI0bIAlKEXY0M8ExNIwhNrFtqS9ozN2CF89GsXVXUhHSJBzkUZfZPQzJ1yDJBrbHG3rs5tAGW%2Fv072Ox7EQzSZYlS0E3BuyQvlNXXsk0%2FIZTcyS2FFTWzzwhbJZ%2FeSicVj9fgAmUcMZvFIv2HB9ADigbXNT9E6mPX2GTbhZ3KQAdJUMTUmbH2rsAw596mrzfL8PK0Gg&X-Amz-Signature=b80271d30821799e5bb3336e30a47578aa055d26caadc64ce58d34482fe6a7c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7XDVQRC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg2LuEF%2B243BB54UvFlWgdhIPGpeFymd8Xxq7xp9pKMAiAjwBV79tffv%2BD9ZHZ4edONhgqnNEOsMdGhK0tYhPBO5iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdWexTzFpXxmM5%2FiKtwDf7JeEo9ECKDbGldxl7Z1kofLPIb%2B3%2BwfhFcLLwW9t6PYIS9GMByhxKcB7g3x4xs0cULRgrWywozH%2BusQIZ%2Bwk6b%2BNb5ce0e00oBsfj1QKreMmla4IiMnf6yYzqVveDwKpheYhAcw%2BSSFDcWkbYrkOVOQvgKk7%2FHuXVEpwqNi6qE8jsyCQy3E1E6rJd28PZWHfBnGz9ruWW1VbtXa0%2BuJmoekafib402uvSwwNgccQ5NetvTrtLktM0u%2BWj3%2BjI0hKJzxBrd71rKl4Y1CZwRJWcmbmL0qju6%2BYq4n80vl5Oe2sbFM32BpBx5lNcV5DjrtEeOsmuhvAoWbsYGjVwDfhuoSU5CwX29V1rCiMvjZw4ctANEBPdLmeeCsP%2FcSQs1Jo0fYNYUVLEKW1aacnwqRZiMZdJzEbgCIQ%2BU%2FjIM0A6qUBE8Bn%2FTeWt5LjUGkz02Ma3tEZGwB8PKRCrfkmpC7V5uRgr94kYY3eMYGku5BT3i%2BQZXwqiAu9tTuietLOfsAySf16b9sQ0jwGIaSSCdPLC9H0RqacP%2FaivYwdVoE0RISSYp%2BiZQJmf7k%2FruvxRgyvsnHDYSVKIRwFqwljnejBTSZxN7x5YwDRgZgO2Ola3c4F17u%2FPAWG6F83Ogws7uPwwY6pgHfIdgg7UvU7vVeEs0VCrtPyvI0bIAlKEXY0M8ExNIwhNrFtqS9ozN2CF89GsXVXUhHSJBzkUZfZPQzJ1yDJBrbHG3rs5tAGW%2Fv072Ox7EQzSZYlS0E3BuyQvlNXXsk0%2FIZTcyS2FFTWzzwhbJZ%2FeSicVj9fgAmUcMZvFIv2HB9ADigbXNT9E6mPX2GTbhZ3KQAdJUMTUmbH2rsAw596mrzfL8PK0Gg&X-Amz-Signature=665f53ec7900ffcd0b8255ca77a16fea7e21134581588001dcfc7b5ae6cdb785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7XDVQRC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg2LuEF%2B243BB54UvFlWgdhIPGpeFymd8Xxq7xp9pKMAiAjwBV79tffv%2BD9ZHZ4edONhgqnNEOsMdGhK0tYhPBO5iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdWexTzFpXxmM5%2FiKtwDf7JeEo9ECKDbGldxl7Z1kofLPIb%2B3%2BwfhFcLLwW9t6PYIS9GMByhxKcB7g3x4xs0cULRgrWywozH%2BusQIZ%2Bwk6b%2BNb5ce0e00oBsfj1QKreMmla4IiMnf6yYzqVveDwKpheYhAcw%2BSSFDcWkbYrkOVOQvgKk7%2FHuXVEpwqNi6qE8jsyCQy3E1E6rJd28PZWHfBnGz9ruWW1VbtXa0%2BuJmoekafib402uvSwwNgccQ5NetvTrtLktM0u%2BWj3%2BjI0hKJzxBrd71rKl4Y1CZwRJWcmbmL0qju6%2BYq4n80vl5Oe2sbFM32BpBx5lNcV5DjrtEeOsmuhvAoWbsYGjVwDfhuoSU5CwX29V1rCiMvjZw4ctANEBPdLmeeCsP%2FcSQs1Jo0fYNYUVLEKW1aacnwqRZiMZdJzEbgCIQ%2BU%2FjIM0A6qUBE8Bn%2FTeWt5LjUGkz02Ma3tEZGwB8PKRCrfkmpC7V5uRgr94kYY3eMYGku5BT3i%2BQZXwqiAu9tTuietLOfsAySf16b9sQ0jwGIaSSCdPLC9H0RqacP%2FaivYwdVoE0RISSYp%2BiZQJmf7k%2FruvxRgyvsnHDYSVKIRwFqwljnejBTSZxN7x5YwDRgZgO2Ola3c4F17u%2FPAWG6F83Ogws7uPwwY6pgHfIdgg7UvU7vVeEs0VCrtPyvI0bIAlKEXY0M8ExNIwhNrFtqS9ozN2CF89GsXVXUhHSJBzkUZfZPQzJ1yDJBrbHG3rs5tAGW%2Fv072Ox7EQzSZYlS0E3BuyQvlNXXsk0%2FIZTcyS2FFTWzzwhbJZ%2FeSicVj9fgAmUcMZvFIv2HB9ADigbXNT9E6mPX2GTbhZ3KQAdJUMTUmbH2rsAw596mrzfL8PK0Gg&X-Amz-Signature=b007a59e7afd3f548f5f3c0eb7b60e84fcdc413580f97f95d7b4035fc26ed600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7XDVQRC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg2LuEF%2B243BB54UvFlWgdhIPGpeFymd8Xxq7xp9pKMAiAjwBV79tffv%2BD9ZHZ4edONhgqnNEOsMdGhK0tYhPBO5iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdWexTzFpXxmM5%2FiKtwDf7JeEo9ECKDbGldxl7Z1kofLPIb%2B3%2BwfhFcLLwW9t6PYIS9GMByhxKcB7g3x4xs0cULRgrWywozH%2BusQIZ%2Bwk6b%2BNb5ce0e00oBsfj1QKreMmla4IiMnf6yYzqVveDwKpheYhAcw%2BSSFDcWkbYrkOVOQvgKk7%2FHuXVEpwqNi6qE8jsyCQy3E1E6rJd28PZWHfBnGz9ruWW1VbtXa0%2BuJmoekafib402uvSwwNgccQ5NetvTrtLktM0u%2BWj3%2BjI0hKJzxBrd71rKl4Y1CZwRJWcmbmL0qju6%2BYq4n80vl5Oe2sbFM32BpBx5lNcV5DjrtEeOsmuhvAoWbsYGjVwDfhuoSU5CwX29V1rCiMvjZw4ctANEBPdLmeeCsP%2FcSQs1Jo0fYNYUVLEKW1aacnwqRZiMZdJzEbgCIQ%2BU%2FjIM0A6qUBE8Bn%2FTeWt5LjUGkz02Ma3tEZGwB8PKRCrfkmpC7V5uRgr94kYY3eMYGku5BT3i%2BQZXwqiAu9tTuietLOfsAySf16b9sQ0jwGIaSSCdPLC9H0RqacP%2FaivYwdVoE0RISSYp%2BiZQJmf7k%2FruvxRgyvsnHDYSVKIRwFqwljnejBTSZxN7x5YwDRgZgO2Ola3c4F17u%2FPAWG6F83Ogws7uPwwY6pgHfIdgg7UvU7vVeEs0VCrtPyvI0bIAlKEXY0M8ExNIwhNrFtqS9ozN2CF89GsXVXUhHSJBzkUZfZPQzJ1yDJBrbHG3rs5tAGW%2Fv072Ox7EQzSZYlS0E3BuyQvlNXXsk0%2FIZTcyS2FFTWzzwhbJZ%2FeSicVj9fgAmUcMZvFIv2HB9ADigbXNT9E6mPX2GTbhZ3KQAdJUMTUmbH2rsAw596mrzfL8PK0Gg&X-Amz-Signature=c698fc3c8e8a19198e85b53912973cdb079bcd36e039d935e6ae714ad388017a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7XDVQRC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg2LuEF%2B243BB54UvFlWgdhIPGpeFymd8Xxq7xp9pKMAiAjwBV79tffv%2BD9ZHZ4edONhgqnNEOsMdGhK0tYhPBO5iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdWexTzFpXxmM5%2FiKtwDf7JeEo9ECKDbGldxl7Z1kofLPIb%2B3%2BwfhFcLLwW9t6PYIS9GMByhxKcB7g3x4xs0cULRgrWywozH%2BusQIZ%2Bwk6b%2BNb5ce0e00oBsfj1QKreMmla4IiMnf6yYzqVveDwKpheYhAcw%2BSSFDcWkbYrkOVOQvgKk7%2FHuXVEpwqNi6qE8jsyCQy3E1E6rJd28PZWHfBnGz9ruWW1VbtXa0%2BuJmoekafib402uvSwwNgccQ5NetvTrtLktM0u%2BWj3%2BjI0hKJzxBrd71rKl4Y1CZwRJWcmbmL0qju6%2BYq4n80vl5Oe2sbFM32BpBx5lNcV5DjrtEeOsmuhvAoWbsYGjVwDfhuoSU5CwX29V1rCiMvjZw4ctANEBPdLmeeCsP%2FcSQs1Jo0fYNYUVLEKW1aacnwqRZiMZdJzEbgCIQ%2BU%2FjIM0A6qUBE8Bn%2FTeWt5LjUGkz02Ma3tEZGwB8PKRCrfkmpC7V5uRgr94kYY3eMYGku5BT3i%2BQZXwqiAu9tTuietLOfsAySf16b9sQ0jwGIaSSCdPLC9H0RqacP%2FaivYwdVoE0RISSYp%2BiZQJmf7k%2FruvxRgyvsnHDYSVKIRwFqwljnejBTSZxN7x5YwDRgZgO2Ola3c4F17u%2FPAWG6F83Ogws7uPwwY6pgHfIdgg7UvU7vVeEs0VCrtPyvI0bIAlKEXY0M8ExNIwhNrFtqS9ozN2CF89GsXVXUhHSJBzkUZfZPQzJ1yDJBrbHG3rs5tAGW%2Fv072Ox7EQzSZYlS0E3BuyQvlNXXsk0%2FIZTcyS2FFTWzzwhbJZ%2FeSicVj9fgAmUcMZvFIv2HB9ADigbXNT9E6mPX2GTbhZ3KQAdJUMTUmbH2rsAw596mrzfL8PK0Gg&X-Amz-Signature=2a5f9ae8254f6353c0daae2760b7b4aa46c24de24a2cd5b975e5746ba31fbf2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7XDVQRC%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg2LuEF%2B243BB54UvFlWgdhIPGpeFymd8Xxq7xp9pKMAiAjwBV79tffv%2BD9ZHZ4edONhgqnNEOsMdGhK0tYhPBO5iqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDdWexTzFpXxmM5%2FiKtwDf7JeEo9ECKDbGldxl7Z1kofLPIb%2B3%2BwfhFcLLwW9t6PYIS9GMByhxKcB7g3x4xs0cULRgrWywozH%2BusQIZ%2Bwk6b%2BNb5ce0e00oBsfj1QKreMmla4IiMnf6yYzqVveDwKpheYhAcw%2BSSFDcWkbYrkOVOQvgKk7%2FHuXVEpwqNi6qE8jsyCQy3E1E6rJd28PZWHfBnGz9ruWW1VbtXa0%2BuJmoekafib402uvSwwNgccQ5NetvTrtLktM0u%2BWj3%2BjI0hKJzxBrd71rKl4Y1CZwRJWcmbmL0qju6%2BYq4n80vl5Oe2sbFM32BpBx5lNcV5DjrtEeOsmuhvAoWbsYGjVwDfhuoSU5CwX29V1rCiMvjZw4ctANEBPdLmeeCsP%2FcSQs1Jo0fYNYUVLEKW1aacnwqRZiMZdJzEbgCIQ%2BU%2FjIM0A6qUBE8Bn%2FTeWt5LjUGkz02Ma3tEZGwB8PKRCrfkmpC7V5uRgr94kYY3eMYGku5BT3i%2BQZXwqiAu9tTuietLOfsAySf16b9sQ0jwGIaSSCdPLC9H0RqacP%2FaivYwdVoE0RISSYp%2BiZQJmf7k%2FruvxRgyvsnHDYSVKIRwFqwljnejBTSZxN7x5YwDRgZgO2Ola3c4F17u%2FPAWG6F83Ogws7uPwwY6pgHfIdgg7UvU7vVeEs0VCrtPyvI0bIAlKEXY0M8ExNIwhNrFtqS9ozN2CF89GsXVXUhHSJBzkUZfZPQzJ1yDJBrbHG3rs5tAGW%2Fv072Ox7EQzSZYlS0E3BuyQvlNXXsk0%2FIZTcyS2FFTWzzwhbJZ%2FeSicVj9fgAmUcMZvFIv2HB9ADigbXNT9E6mPX2GTbhZ3KQAdJUMTUmbH2rsAw596mrzfL8PK0Gg&X-Amz-Signature=43f6ac7439e22499776616283e695805c0a2878002c0eb8f5a295dcd11affcce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
