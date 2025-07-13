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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MX6SUCV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8BfWSQGIsf%2FJ6VaZqOoiWT360N5W06IKO9QxMcU5TGAiAuM1W29mlHonTaaRJOhXBaeB9f1WbbFwFhD6vJyF1UPir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmTX0Tu7w4L8nQcxCKtwDqjyohPKdTiIkysFDKQKXnOXbO6KksAsCAN%2BZAKiI%2B0gtTsX27gCy3Fd6nXXZPXAakOCu1PNo9wehrujMbNqOLYwk2CktdSGOWXVFpzZoq88gSaRfqXZ8J9bUVOZgf8psAZv%2FnGDNaJTpJxwsDIkUb4fn0Zz%2Fet%2FX0Ky8Cyw0c9KKhovm6W94BtW%2BVYGgVkC%2F%2FD3OeCeGYorf4HK1qtLEVus%2F72ijx5y1OumjI7%2BfT9NAeJA1J3Muq9yYLAjiuHqgoXL%2BQTpw79jUHkyKQ7kgApPoRPs2GZMD5Y72o6dTudNWQWT1CLVUdnxdzYCcQg5Kso%2FS%2FPZHCOMOFANiiCEA1u3fXtIKUJ4VEVs4xZS%2B98%2BOGkoubkXb4pVNO0c5qYqfuTo22Smn5q9XW52v0NpF2JkxjnUebz7xWHSAIB4df9RmX5sWaxvo4hUg9kNHgAh9FvW30x6pwIH8Xkn4IloOl3irEXJxUSotJE4u0Gfu63iGwUj9ybmbJeYBbtOmQtex7Fmx49uMIAgZwYpRoO%2F5EWLuc5fEqeMyXna6YqIxMnZdCER7%2BT7r7sxkm0iqcB9lcRLedmWpsjmBSXtpc4ANYRciucvWik6I4vKQK3ZgrRxNb12iITu7OJVjAYMwgKTNwwY6pgGRzN54AjSlZUCFTCUhFGKT9EetETc3yST4HbGn%2BMphGLBgtqksbp834GTC9Nqe9y4rZDuCzWDCUQc2x7yxfeonx4s79zzXuS%2BMwB9rOYsaqoa0eiPEQ8J6Hzs4wUFN7kKweWWuZEW3UR2B0n4fUtXEtuZ7DYPN02PRQv5yQwrTVjS1xqkMud3Cz9BI2po%2FiUQibVmnu9ey%2BK5dxNPKNp5Lpv699e8n&X-Amz-Signature=9c7c2e154ccf5af183e3f9bb85b69d7edf0a7e4ffafd9fadeed3e7226f3140e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MX6SUCV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8BfWSQGIsf%2FJ6VaZqOoiWT360N5W06IKO9QxMcU5TGAiAuM1W29mlHonTaaRJOhXBaeB9f1WbbFwFhD6vJyF1UPir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmTX0Tu7w4L8nQcxCKtwDqjyohPKdTiIkysFDKQKXnOXbO6KksAsCAN%2BZAKiI%2B0gtTsX27gCy3Fd6nXXZPXAakOCu1PNo9wehrujMbNqOLYwk2CktdSGOWXVFpzZoq88gSaRfqXZ8J9bUVOZgf8psAZv%2FnGDNaJTpJxwsDIkUb4fn0Zz%2Fet%2FX0Ky8Cyw0c9KKhovm6W94BtW%2BVYGgVkC%2F%2FD3OeCeGYorf4HK1qtLEVus%2F72ijx5y1OumjI7%2BfT9NAeJA1J3Muq9yYLAjiuHqgoXL%2BQTpw79jUHkyKQ7kgApPoRPs2GZMD5Y72o6dTudNWQWT1CLVUdnxdzYCcQg5Kso%2FS%2FPZHCOMOFANiiCEA1u3fXtIKUJ4VEVs4xZS%2B98%2BOGkoubkXb4pVNO0c5qYqfuTo22Smn5q9XW52v0NpF2JkxjnUebz7xWHSAIB4df9RmX5sWaxvo4hUg9kNHgAh9FvW30x6pwIH8Xkn4IloOl3irEXJxUSotJE4u0Gfu63iGwUj9ybmbJeYBbtOmQtex7Fmx49uMIAgZwYpRoO%2F5EWLuc5fEqeMyXna6YqIxMnZdCER7%2BT7r7sxkm0iqcB9lcRLedmWpsjmBSXtpc4ANYRciucvWik6I4vKQK3ZgrRxNb12iITu7OJVjAYMwgKTNwwY6pgGRzN54AjSlZUCFTCUhFGKT9EetETc3yST4HbGn%2BMphGLBgtqksbp834GTC9Nqe9y4rZDuCzWDCUQc2x7yxfeonx4s79zzXuS%2BMwB9rOYsaqoa0eiPEQ8J6Hzs4wUFN7kKweWWuZEW3UR2B0n4fUtXEtuZ7DYPN02PRQv5yQwrTVjS1xqkMud3Cz9BI2po%2FiUQibVmnu9ey%2BK5dxNPKNp5Lpv699e8n&X-Amz-Signature=2122fc9eda3b682ae2290523896b742bfe285dbe5871d8da18eb1957320e12d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MX6SUCV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8BfWSQGIsf%2FJ6VaZqOoiWT360N5W06IKO9QxMcU5TGAiAuM1W29mlHonTaaRJOhXBaeB9f1WbbFwFhD6vJyF1UPir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmTX0Tu7w4L8nQcxCKtwDqjyohPKdTiIkysFDKQKXnOXbO6KksAsCAN%2BZAKiI%2B0gtTsX27gCy3Fd6nXXZPXAakOCu1PNo9wehrujMbNqOLYwk2CktdSGOWXVFpzZoq88gSaRfqXZ8J9bUVOZgf8psAZv%2FnGDNaJTpJxwsDIkUb4fn0Zz%2Fet%2FX0Ky8Cyw0c9KKhovm6W94BtW%2BVYGgVkC%2F%2FD3OeCeGYorf4HK1qtLEVus%2F72ijx5y1OumjI7%2BfT9NAeJA1J3Muq9yYLAjiuHqgoXL%2BQTpw79jUHkyKQ7kgApPoRPs2GZMD5Y72o6dTudNWQWT1CLVUdnxdzYCcQg5Kso%2FS%2FPZHCOMOFANiiCEA1u3fXtIKUJ4VEVs4xZS%2B98%2BOGkoubkXb4pVNO0c5qYqfuTo22Smn5q9XW52v0NpF2JkxjnUebz7xWHSAIB4df9RmX5sWaxvo4hUg9kNHgAh9FvW30x6pwIH8Xkn4IloOl3irEXJxUSotJE4u0Gfu63iGwUj9ybmbJeYBbtOmQtex7Fmx49uMIAgZwYpRoO%2F5EWLuc5fEqeMyXna6YqIxMnZdCER7%2BT7r7sxkm0iqcB9lcRLedmWpsjmBSXtpc4ANYRciucvWik6I4vKQK3ZgrRxNb12iITu7OJVjAYMwgKTNwwY6pgGRzN54AjSlZUCFTCUhFGKT9EetETc3yST4HbGn%2BMphGLBgtqksbp834GTC9Nqe9y4rZDuCzWDCUQc2x7yxfeonx4s79zzXuS%2BMwB9rOYsaqoa0eiPEQ8J6Hzs4wUFN7kKweWWuZEW3UR2B0n4fUtXEtuZ7DYPN02PRQv5yQwrTVjS1xqkMud3Cz9BI2po%2FiUQibVmnu9ey%2BK5dxNPKNp5Lpv699e8n&X-Amz-Signature=bd65e7db71239499a673d9de908854cde0324b0d20e91cade674e52143112613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MX6SUCV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8BfWSQGIsf%2FJ6VaZqOoiWT360N5W06IKO9QxMcU5TGAiAuM1W29mlHonTaaRJOhXBaeB9f1WbbFwFhD6vJyF1UPir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmTX0Tu7w4L8nQcxCKtwDqjyohPKdTiIkysFDKQKXnOXbO6KksAsCAN%2BZAKiI%2B0gtTsX27gCy3Fd6nXXZPXAakOCu1PNo9wehrujMbNqOLYwk2CktdSGOWXVFpzZoq88gSaRfqXZ8J9bUVOZgf8psAZv%2FnGDNaJTpJxwsDIkUb4fn0Zz%2Fet%2FX0Ky8Cyw0c9KKhovm6W94BtW%2BVYGgVkC%2F%2FD3OeCeGYorf4HK1qtLEVus%2F72ijx5y1OumjI7%2BfT9NAeJA1J3Muq9yYLAjiuHqgoXL%2BQTpw79jUHkyKQ7kgApPoRPs2GZMD5Y72o6dTudNWQWT1CLVUdnxdzYCcQg5Kso%2FS%2FPZHCOMOFANiiCEA1u3fXtIKUJ4VEVs4xZS%2B98%2BOGkoubkXb4pVNO0c5qYqfuTo22Smn5q9XW52v0NpF2JkxjnUebz7xWHSAIB4df9RmX5sWaxvo4hUg9kNHgAh9FvW30x6pwIH8Xkn4IloOl3irEXJxUSotJE4u0Gfu63iGwUj9ybmbJeYBbtOmQtex7Fmx49uMIAgZwYpRoO%2F5EWLuc5fEqeMyXna6YqIxMnZdCER7%2BT7r7sxkm0iqcB9lcRLedmWpsjmBSXtpc4ANYRciucvWik6I4vKQK3ZgrRxNb12iITu7OJVjAYMwgKTNwwY6pgGRzN54AjSlZUCFTCUhFGKT9EetETc3yST4HbGn%2BMphGLBgtqksbp834GTC9Nqe9y4rZDuCzWDCUQc2x7yxfeonx4s79zzXuS%2BMwB9rOYsaqoa0eiPEQ8J6Hzs4wUFN7kKweWWuZEW3UR2B0n4fUtXEtuZ7DYPN02PRQv5yQwrTVjS1xqkMud3Cz9BI2po%2FiUQibVmnu9ey%2BK5dxNPKNp5Lpv699e8n&X-Amz-Signature=c946b1f54252d3b89379d13c51052e80bbf4d631076a0ab4cefe7cbec220533d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MX6SUCV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8BfWSQGIsf%2FJ6VaZqOoiWT360N5W06IKO9QxMcU5TGAiAuM1W29mlHonTaaRJOhXBaeB9f1WbbFwFhD6vJyF1UPir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmTX0Tu7w4L8nQcxCKtwDqjyohPKdTiIkysFDKQKXnOXbO6KksAsCAN%2BZAKiI%2B0gtTsX27gCy3Fd6nXXZPXAakOCu1PNo9wehrujMbNqOLYwk2CktdSGOWXVFpzZoq88gSaRfqXZ8J9bUVOZgf8psAZv%2FnGDNaJTpJxwsDIkUb4fn0Zz%2Fet%2FX0Ky8Cyw0c9KKhovm6W94BtW%2BVYGgVkC%2F%2FD3OeCeGYorf4HK1qtLEVus%2F72ijx5y1OumjI7%2BfT9NAeJA1J3Muq9yYLAjiuHqgoXL%2BQTpw79jUHkyKQ7kgApPoRPs2GZMD5Y72o6dTudNWQWT1CLVUdnxdzYCcQg5Kso%2FS%2FPZHCOMOFANiiCEA1u3fXtIKUJ4VEVs4xZS%2B98%2BOGkoubkXb4pVNO0c5qYqfuTo22Smn5q9XW52v0NpF2JkxjnUebz7xWHSAIB4df9RmX5sWaxvo4hUg9kNHgAh9FvW30x6pwIH8Xkn4IloOl3irEXJxUSotJE4u0Gfu63iGwUj9ybmbJeYBbtOmQtex7Fmx49uMIAgZwYpRoO%2F5EWLuc5fEqeMyXna6YqIxMnZdCER7%2BT7r7sxkm0iqcB9lcRLedmWpsjmBSXtpc4ANYRciucvWik6I4vKQK3ZgrRxNb12iITu7OJVjAYMwgKTNwwY6pgGRzN54AjSlZUCFTCUhFGKT9EetETc3yST4HbGn%2BMphGLBgtqksbp834GTC9Nqe9y4rZDuCzWDCUQc2x7yxfeonx4s79zzXuS%2BMwB9rOYsaqoa0eiPEQ8J6Hzs4wUFN7kKweWWuZEW3UR2B0n4fUtXEtuZ7DYPN02PRQv5yQwrTVjS1xqkMud3Cz9BI2po%2FiUQibVmnu9ey%2BK5dxNPKNp5Lpv699e8n&X-Amz-Signature=faa8a9cb82f9e6c51e5fa0a90db3281cf8ff07b7a5cd4f6fb185b6175e0a07ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MX6SUCV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8BfWSQGIsf%2FJ6VaZqOoiWT360N5W06IKO9QxMcU5TGAiAuM1W29mlHonTaaRJOhXBaeB9f1WbbFwFhD6vJyF1UPir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmTX0Tu7w4L8nQcxCKtwDqjyohPKdTiIkysFDKQKXnOXbO6KksAsCAN%2BZAKiI%2B0gtTsX27gCy3Fd6nXXZPXAakOCu1PNo9wehrujMbNqOLYwk2CktdSGOWXVFpzZoq88gSaRfqXZ8J9bUVOZgf8psAZv%2FnGDNaJTpJxwsDIkUb4fn0Zz%2Fet%2FX0Ky8Cyw0c9KKhovm6W94BtW%2BVYGgVkC%2F%2FD3OeCeGYorf4HK1qtLEVus%2F72ijx5y1OumjI7%2BfT9NAeJA1J3Muq9yYLAjiuHqgoXL%2BQTpw79jUHkyKQ7kgApPoRPs2GZMD5Y72o6dTudNWQWT1CLVUdnxdzYCcQg5Kso%2FS%2FPZHCOMOFANiiCEA1u3fXtIKUJ4VEVs4xZS%2B98%2BOGkoubkXb4pVNO0c5qYqfuTo22Smn5q9XW52v0NpF2JkxjnUebz7xWHSAIB4df9RmX5sWaxvo4hUg9kNHgAh9FvW30x6pwIH8Xkn4IloOl3irEXJxUSotJE4u0Gfu63iGwUj9ybmbJeYBbtOmQtex7Fmx49uMIAgZwYpRoO%2F5EWLuc5fEqeMyXna6YqIxMnZdCER7%2BT7r7sxkm0iqcB9lcRLedmWpsjmBSXtpc4ANYRciucvWik6I4vKQK3ZgrRxNb12iITu7OJVjAYMwgKTNwwY6pgGRzN54AjSlZUCFTCUhFGKT9EetETc3yST4HbGn%2BMphGLBgtqksbp834GTC9Nqe9y4rZDuCzWDCUQc2x7yxfeonx4s79zzXuS%2BMwB9rOYsaqoa0eiPEQ8J6Hzs4wUFN7kKweWWuZEW3UR2B0n4fUtXEtuZ7DYPN02PRQv5yQwrTVjS1xqkMud3Cz9BI2po%2FiUQibVmnu9ey%2BK5dxNPKNp5Lpv699e8n&X-Amz-Signature=17f7875d7c3c32b13e49e32e136234260e45ac848a8297d1335aa332444c3d92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MX6SUCV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8BfWSQGIsf%2FJ6VaZqOoiWT360N5W06IKO9QxMcU5TGAiAuM1W29mlHonTaaRJOhXBaeB9f1WbbFwFhD6vJyF1UPir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmTX0Tu7w4L8nQcxCKtwDqjyohPKdTiIkysFDKQKXnOXbO6KksAsCAN%2BZAKiI%2B0gtTsX27gCy3Fd6nXXZPXAakOCu1PNo9wehrujMbNqOLYwk2CktdSGOWXVFpzZoq88gSaRfqXZ8J9bUVOZgf8psAZv%2FnGDNaJTpJxwsDIkUb4fn0Zz%2Fet%2FX0Ky8Cyw0c9KKhovm6W94BtW%2BVYGgVkC%2F%2FD3OeCeGYorf4HK1qtLEVus%2F72ijx5y1OumjI7%2BfT9NAeJA1J3Muq9yYLAjiuHqgoXL%2BQTpw79jUHkyKQ7kgApPoRPs2GZMD5Y72o6dTudNWQWT1CLVUdnxdzYCcQg5Kso%2FS%2FPZHCOMOFANiiCEA1u3fXtIKUJ4VEVs4xZS%2B98%2BOGkoubkXb4pVNO0c5qYqfuTo22Smn5q9XW52v0NpF2JkxjnUebz7xWHSAIB4df9RmX5sWaxvo4hUg9kNHgAh9FvW30x6pwIH8Xkn4IloOl3irEXJxUSotJE4u0Gfu63iGwUj9ybmbJeYBbtOmQtex7Fmx49uMIAgZwYpRoO%2F5EWLuc5fEqeMyXna6YqIxMnZdCER7%2BT7r7sxkm0iqcB9lcRLedmWpsjmBSXtpc4ANYRciucvWik6I4vKQK3ZgrRxNb12iITu7OJVjAYMwgKTNwwY6pgGRzN54AjSlZUCFTCUhFGKT9EetETc3yST4HbGn%2BMphGLBgtqksbp834GTC9Nqe9y4rZDuCzWDCUQc2x7yxfeonx4s79zzXuS%2BMwB9rOYsaqoa0eiPEQ8J6Hzs4wUFN7kKweWWuZEW3UR2B0n4fUtXEtuZ7DYPN02PRQv5yQwrTVjS1xqkMud3Cz9BI2po%2FiUQibVmnu9ey%2BK5dxNPKNp5Lpv699e8n&X-Amz-Signature=9e9e02faad1ffcbdbd18bb0b5b2593c3829744dade9b93ec52668c2d353d1b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MX6SUCV%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8BfWSQGIsf%2FJ6VaZqOoiWT360N5W06IKO9QxMcU5TGAiAuM1W29mlHonTaaRJOhXBaeB9f1WbbFwFhD6vJyF1UPir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMmTX0Tu7w4L8nQcxCKtwDqjyohPKdTiIkysFDKQKXnOXbO6KksAsCAN%2BZAKiI%2B0gtTsX27gCy3Fd6nXXZPXAakOCu1PNo9wehrujMbNqOLYwk2CktdSGOWXVFpzZoq88gSaRfqXZ8J9bUVOZgf8psAZv%2FnGDNaJTpJxwsDIkUb4fn0Zz%2Fet%2FX0Ky8Cyw0c9KKhovm6W94BtW%2BVYGgVkC%2F%2FD3OeCeGYorf4HK1qtLEVus%2F72ijx5y1OumjI7%2BfT9NAeJA1J3Muq9yYLAjiuHqgoXL%2BQTpw79jUHkyKQ7kgApPoRPs2GZMD5Y72o6dTudNWQWT1CLVUdnxdzYCcQg5Kso%2FS%2FPZHCOMOFANiiCEA1u3fXtIKUJ4VEVs4xZS%2B98%2BOGkoubkXb4pVNO0c5qYqfuTo22Smn5q9XW52v0NpF2JkxjnUebz7xWHSAIB4df9RmX5sWaxvo4hUg9kNHgAh9FvW30x6pwIH8Xkn4IloOl3irEXJxUSotJE4u0Gfu63iGwUj9ybmbJeYBbtOmQtex7Fmx49uMIAgZwYpRoO%2F5EWLuc5fEqeMyXna6YqIxMnZdCER7%2BT7r7sxkm0iqcB9lcRLedmWpsjmBSXtpc4ANYRciucvWik6I4vKQK3ZgrRxNb12iITu7OJVjAYMwgKTNwwY6pgGRzN54AjSlZUCFTCUhFGKT9EetETc3yST4HbGn%2BMphGLBgtqksbp834GTC9Nqe9y4rZDuCzWDCUQc2x7yxfeonx4s79zzXuS%2BMwB9rOYsaqoa0eiPEQ8J6Hzs4wUFN7kKweWWuZEW3UR2B0n4fUtXEtuZ7DYPN02PRQv5yQwrTVjS1xqkMud3Cz9BI2po%2FiUQibVmnu9ey%2BK5dxNPKNp5Lpv699e8n&X-Amz-Signature=f13c9815c4a2512fee53d1e8b071239ee9c6ad90025ee72dbc12d0f0391de318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
