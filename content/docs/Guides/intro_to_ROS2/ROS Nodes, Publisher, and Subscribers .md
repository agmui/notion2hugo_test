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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUEMAZ3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEQGZA6h9F72saOTWv00psaXdHvQumOvPHrRkZ5c2CcRAiB9Ocxmw1XMpJGRLqr%2F4%2BERXhlzHtvHhjxZIiTzuOR8ciqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8sl6YpMPiFzLIpwKtwDdK3WwDu8k693IEYSAZfJJb6ricfyyKzmwW7N06MG4yW3xkVI7AWsc6dLRCl90JUg3bQQ1v1VB%2BwQd4vaIuNCAR8eXF4362%2BAMTQAK2%2BqUoZcY7OkzseLgmms8XiOrMzQ%2BesrhYd3gtb7830D3Or3apiLahpgFsHUMzo747BKv4tDizqsbqjII8TV7Pe6lVTlMaNes8bi6mKVHBtm7WKuWPWUMQvrB5mJZj3NN4Lx9npUKH2cgvtOJnodhQzKYy13WV%2FL3DN1geqe%2BkKxeQSvsnG4537Xr8804SKf58LOnloyiVgMQJ9c2oKpH6U2ToVOJ%2BzICyev6uCUV6FGlYytHhVfcxfVJN3eaOYt3N3vzi4C%2FT%2B2hV0KfndVqB4jebck7TV9tcwnAC0%2FFVttE7CfsjbcGTPlE8VW7QZeBj4ZMGOYHNhMtNd5GdbKt6nviw6Nw8TO8vDV9aGYr4OuTLt3FkLW2PCnQkgjtwffQrWOlJn%2FKitokEkiI8ENcMbPMYuHBO2ZNVWVzENe8SR2KUdg8XU3E%2FvE05%2B8ee8AjTw5auFiu5TkRVs60OeSdVFWyTgBN8WIURJJ1F1SOX5O2ngKs7vpYnpJyuqVwYKfbSZz2SPe0K8%2B2OiQg%2Bi30rowv%2ByYwAY6pgEpew1euUUUVwQyTYOXWSPTTpSBDHe0PsbEHnZJX8FIFIxv4SVCDsBCWLdXGHBW63z8AIShqK4p%2FP95v3V9UFDYF74LkCKzcjvo74E49NA0mM1k4mnNl31qvBr8gTXdFz61xo8dt%2BKW1HttNgkzaY1vy%2FGxCbfc0PFqHNi7dKrI2RZD1JT4S3t14bj7UWlnSCEXhldiEnOzyR0qqBtrefJpR9IX9LMd&X-Amz-Signature=4f983d15e15ce5ec228450a5021471c009b104b682556086c84935937876d99b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUEMAZ3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEQGZA6h9F72saOTWv00psaXdHvQumOvPHrRkZ5c2CcRAiB9Ocxmw1XMpJGRLqr%2F4%2BERXhlzHtvHhjxZIiTzuOR8ciqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8sl6YpMPiFzLIpwKtwDdK3WwDu8k693IEYSAZfJJb6ricfyyKzmwW7N06MG4yW3xkVI7AWsc6dLRCl90JUg3bQQ1v1VB%2BwQd4vaIuNCAR8eXF4362%2BAMTQAK2%2BqUoZcY7OkzseLgmms8XiOrMzQ%2BesrhYd3gtb7830D3Or3apiLahpgFsHUMzo747BKv4tDizqsbqjII8TV7Pe6lVTlMaNes8bi6mKVHBtm7WKuWPWUMQvrB5mJZj3NN4Lx9npUKH2cgvtOJnodhQzKYy13WV%2FL3DN1geqe%2BkKxeQSvsnG4537Xr8804SKf58LOnloyiVgMQJ9c2oKpH6U2ToVOJ%2BzICyev6uCUV6FGlYytHhVfcxfVJN3eaOYt3N3vzi4C%2FT%2B2hV0KfndVqB4jebck7TV9tcwnAC0%2FFVttE7CfsjbcGTPlE8VW7QZeBj4ZMGOYHNhMtNd5GdbKt6nviw6Nw8TO8vDV9aGYr4OuTLt3FkLW2PCnQkgjtwffQrWOlJn%2FKitokEkiI8ENcMbPMYuHBO2ZNVWVzENe8SR2KUdg8XU3E%2FvE05%2B8ee8AjTw5auFiu5TkRVs60OeSdVFWyTgBN8WIURJJ1F1SOX5O2ngKs7vpYnpJyuqVwYKfbSZz2SPe0K8%2B2OiQg%2Bi30rowv%2ByYwAY6pgEpew1euUUUVwQyTYOXWSPTTpSBDHe0PsbEHnZJX8FIFIxv4SVCDsBCWLdXGHBW63z8AIShqK4p%2FP95v3V9UFDYF74LkCKzcjvo74E49NA0mM1k4mnNl31qvBr8gTXdFz61xo8dt%2BKW1HttNgkzaY1vy%2FGxCbfc0PFqHNi7dKrI2RZD1JT4S3t14bj7UWlnSCEXhldiEnOzyR0qqBtrefJpR9IX9LMd&X-Amz-Signature=2bbd6924d0098f5bb06d46f2aeca6cf3074d6f23bceab90c96c998973833c633&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUEMAZ3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEQGZA6h9F72saOTWv00psaXdHvQumOvPHrRkZ5c2CcRAiB9Ocxmw1XMpJGRLqr%2F4%2BERXhlzHtvHhjxZIiTzuOR8ciqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8sl6YpMPiFzLIpwKtwDdK3WwDu8k693IEYSAZfJJb6ricfyyKzmwW7N06MG4yW3xkVI7AWsc6dLRCl90JUg3bQQ1v1VB%2BwQd4vaIuNCAR8eXF4362%2BAMTQAK2%2BqUoZcY7OkzseLgmms8XiOrMzQ%2BesrhYd3gtb7830D3Or3apiLahpgFsHUMzo747BKv4tDizqsbqjII8TV7Pe6lVTlMaNes8bi6mKVHBtm7WKuWPWUMQvrB5mJZj3NN4Lx9npUKH2cgvtOJnodhQzKYy13WV%2FL3DN1geqe%2BkKxeQSvsnG4537Xr8804SKf58LOnloyiVgMQJ9c2oKpH6U2ToVOJ%2BzICyev6uCUV6FGlYytHhVfcxfVJN3eaOYt3N3vzi4C%2FT%2B2hV0KfndVqB4jebck7TV9tcwnAC0%2FFVttE7CfsjbcGTPlE8VW7QZeBj4ZMGOYHNhMtNd5GdbKt6nviw6Nw8TO8vDV9aGYr4OuTLt3FkLW2PCnQkgjtwffQrWOlJn%2FKitokEkiI8ENcMbPMYuHBO2ZNVWVzENe8SR2KUdg8XU3E%2FvE05%2B8ee8AjTw5auFiu5TkRVs60OeSdVFWyTgBN8WIURJJ1F1SOX5O2ngKs7vpYnpJyuqVwYKfbSZz2SPe0K8%2B2OiQg%2Bi30rowv%2ByYwAY6pgEpew1euUUUVwQyTYOXWSPTTpSBDHe0PsbEHnZJX8FIFIxv4SVCDsBCWLdXGHBW63z8AIShqK4p%2FP95v3V9UFDYF74LkCKzcjvo74E49NA0mM1k4mnNl31qvBr8gTXdFz61xo8dt%2BKW1HttNgkzaY1vy%2FGxCbfc0PFqHNi7dKrI2RZD1JT4S3t14bj7UWlnSCEXhldiEnOzyR0qqBtrefJpR9IX9LMd&X-Amz-Signature=5c6beb93b1d516409868816288f42d704e457dcf3fc9a3f657f457b53ec7e8ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUEMAZ3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEQGZA6h9F72saOTWv00psaXdHvQumOvPHrRkZ5c2CcRAiB9Ocxmw1XMpJGRLqr%2F4%2BERXhlzHtvHhjxZIiTzuOR8ciqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8sl6YpMPiFzLIpwKtwDdK3WwDu8k693IEYSAZfJJb6ricfyyKzmwW7N06MG4yW3xkVI7AWsc6dLRCl90JUg3bQQ1v1VB%2BwQd4vaIuNCAR8eXF4362%2BAMTQAK2%2BqUoZcY7OkzseLgmms8XiOrMzQ%2BesrhYd3gtb7830D3Or3apiLahpgFsHUMzo747BKv4tDizqsbqjII8TV7Pe6lVTlMaNes8bi6mKVHBtm7WKuWPWUMQvrB5mJZj3NN4Lx9npUKH2cgvtOJnodhQzKYy13WV%2FL3DN1geqe%2BkKxeQSvsnG4537Xr8804SKf58LOnloyiVgMQJ9c2oKpH6U2ToVOJ%2BzICyev6uCUV6FGlYytHhVfcxfVJN3eaOYt3N3vzi4C%2FT%2B2hV0KfndVqB4jebck7TV9tcwnAC0%2FFVttE7CfsjbcGTPlE8VW7QZeBj4ZMGOYHNhMtNd5GdbKt6nviw6Nw8TO8vDV9aGYr4OuTLt3FkLW2PCnQkgjtwffQrWOlJn%2FKitokEkiI8ENcMbPMYuHBO2ZNVWVzENe8SR2KUdg8XU3E%2FvE05%2B8ee8AjTw5auFiu5TkRVs60OeSdVFWyTgBN8WIURJJ1F1SOX5O2ngKs7vpYnpJyuqVwYKfbSZz2SPe0K8%2B2OiQg%2Bi30rowv%2ByYwAY6pgEpew1euUUUVwQyTYOXWSPTTpSBDHe0PsbEHnZJX8FIFIxv4SVCDsBCWLdXGHBW63z8AIShqK4p%2FP95v3V9UFDYF74LkCKzcjvo74E49NA0mM1k4mnNl31qvBr8gTXdFz61xo8dt%2BKW1HttNgkzaY1vy%2FGxCbfc0PFqHNi7dKrI2RZD1JT4S3t14bj7UWlnSCEXhldiEnOzyR0qqBtrefJpR9IX9LMd&X-Amz-Signature=7848e698bd0d29c1786697bea643832a87eb873ed58b45d4faa58f6304b00daa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUEMAZ3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEQGZA6h9F72saOTWv00psaXdHvQumOvPHrRkZ5c2CcRAiB9Ocxmw1XMpJGRLqr%2F4%2BERXhlzHtvHhjxZIiTzuOR8ciqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8sl6YpMPiFzLIpwKtwDdK3WwDu8k693IEYSAZfJJb6ricfyyKzmwW7N06MG4yW3xkVI7AWsc6dLRCl90JUg3bQQ1v1VB%2BwQd4vaIuNCAR8eXF4362%2BAMTQAK2%2BqUoZcY7OkzseLgmms8XiOrMzQ%2BesrhYd3gtb7830D3Or3apiLahpgFsHUMzo747BKv4tDizqsbqjII8TV7Pe6lVTlMaNes8bi6mKVHBtm7WKuWPWUMQvrB5mJZj3NN4Lx9npUKH2cgvtOJnodhQzKYy13WV%2FL3DN1geqe%2BkKxeQSvsnG4537Xr8804SKf58LOnloyiVgMQJ9c2oKpH6U2ToVOJ%2BzICyev6uCUV6FGlYytHhVfcxfVJN3eaOYt3N3vzi4C%2FT%2B2hV0KfndVqB4jebck7TV9tcwnAC0%2FFVttE7CfsjbcGTPlE8VW7QZeBj4ZMGOYHNhMtNd5GdbKt6nviw6Nw8TO8vDV9aGYr4OuTLt3FkLW2PCnQkgjtwffQrWOlJn%2FKitokEkiI8ENcMbPMYuHBO2ZNVWVzENe8SR2KUdg8XU3E%2FvE05%2B8ee8AjTw5auFiu5TkRVs60OeSdVFWyTgBN8WIURJJ1F1SOX5O2ngKs7vpYnpJyuqVwYKfbSZz2SPe0K8%2B2OiQg%2Bi30rowv%2ByYwAY6pgEpew1euUUUVwQyTYOXWSPTTpSBDHe0PsbEHnZJX8FIFIxv4SVCDsBCWLdXGHBW63z8AIShqK4p%2FP95v3V9UFDYF74LkCKzcjvo74E49NA0mM1k4mnNl31qvBr8gTXdFz61xo8dt%2BKW1HttNgkzaY1vy%2FGxCbfc0PFqHNi7dKrI2RZD1JT4S3t14bj7UWlnSCEXhldiEnOzyR0qqBtrefJpR9IX9LMd&X-Amz-Signature=7840f71b76372b790a14d7e53bd54a5c8534267790db000af9c8c4edd6e58721&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUEMAZ3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEQGZA6h9F72saOTWv00psaXdHvQumOvPHrRkZ5c2CcRAiB9Ocxmw1XMpJGRLqr%2F4%2BERXhlzHtvHhjxZIiTzuOR8ciqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8sl6YpMPiFzLIpwKtwDdK3WwDu8k693IEYSAZfJJb6ricfyyKzmwW7N06MG4yW3xkVI7AWsc6dLRCl90JUg3bQQ1v1VB%2BwQd4vaIuNCAR8eXF4362%2BAMTQAK2%2BqUoZcY7OkzseLgmms8XiOrMzQ%2BesrhYd3gtb7830D3Or3apiLahpgFsHUMzo747BKv4tDizqsbqjII8TV7Pe6lVTlMaNes8bi6mKVHBtm7WKuWPWUMQvrB5mJZj3NN4Lx9npUKH2cgvtOJnodhQzKYy13WV%2FL3DN1geqe%2BkKxeQSvsnG4537Xr8804SKf58LOnloyiVgMQJ9c2oKpH6U2ToVOJ%2BzICyev6uCUV6FGlYytHhVfcxfVJN3eaOYt3N3vzi4C%2FT%2B2hV0KfndVqB4jebck7TV9tcwnAC0%2FFVttE7CfsjbcGTPlE8VW7QZeBj4ZMGOYHNhMtNd5GdbKt6nviw6Nw8TO8vDV9aGYr4OuTLt3FkLW2PCnQkgjtwffQrWOlJn%2FKitokEkiI8ENcMbPMYuHBO2ZNVWVzENe8SR2KUdg8XU3E%2FvE05%2B8ee8AjTw5auFiu5TkRVs60OeSdVFWyTgBN8WIURJJ1F1SOX5O2ngKs7vpYnpJyuqVwYKfbSZz2SPe0K8%2B2OiQg%2Bi30rowv%2ByYwAY6pgEpew1euUUUVwQyTYOXWSPTTpSBDHe0PsbEHnZJX8FIFIxv4SVCDsBCWLdXGHBW63z8AIShqK4p%2FP95v3V9UFDYF74LkCKzcjvo74E49NA0mM1k4mnNl31qvBr8gTXdFz61xo8dt%2BKW1HttNgkzaY1vy%2FGxCbfc0PFqHNi7dKrI2RZD1JT4S3t14bj7UWlnSCEXhldiEnOzyR0qqBtrefJpR9IX9LMd&X-Amz-Signature=b0af5899341125ef708ae1e41335798f31a20164a6ceadf2ae3bdbb81a4d970d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUEMAZ3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEQGZA6h9F72saOTWv00psaXdHvQumOvPHrRkZ5c2CcRAiB9Ocxmw1XMpJGRLqr%2F4%2BERXhlzHtvHhjxZIiTzuOR8ciqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8sl6YpMPiFzLIpwKtwDdK3WwDu8k693IEYSAZfJJb6ricfyyKzmwW7N06MG4yW3xkVI7AWsc6dLRCl90JUg3bQQ1v1VB%2BwQd4vaIuNCAR8eXF4362%2BAMTQAK2%2BqUoZcY7OkzseLgmms8XiOrMzQ%2BesrhYd3gtb7830D3Or3apiLahpgFsHUMzo747BKv4tDizqsbqjII8TV7Pe6lVTlMaNes8bi6mKVHBtm7WKuWPWUMQvrB5mJZj3NN4Lx9npUKH2cgvtOJnodhQzKYy13WV%2FL3DN1geqe%2BkKxeQSvsnG4537Xr8804SKf58LOnloyiVgMQJ9c2oKpH6U2ToVOJ%2BzICyev6uCUV6FGlYytHhVfcxfVJN3eaOYt3N3vzi4C%2FT%2B2hV0KfndVqB4jebck7TV9tcwnAC0%2FFVttE7CfsjbcGTPlE8VW7QZeBj4ZMGOYHNhMtNd5GdbKt6nviw6Nw8TO8vDV9aGYr4OuTLt3FkLW2PCnQkgjtwffQrWOlJn%2FKitokEkiI8ENcMbPMYuHBO2ZNVWVzENe8SR2KUdg8XU3E%2FvE05%2B8ee8AjTw5auFiu5TkRVs60OeSdVFWyTgBN8WIURJJ1F1SOX5O2ngKs7vpYnpJyuqVwYKfbSZz2SPe0K8%2B2OiQg%2Bi30rowv%2ByYwAY6pgEpew1euUUUVwQyTYOXWSPTTpSBDHe0PsbEHnZJX8FIFIxv4SVCDsBCWLdXGHBW63z8AIShqK4p%2FP95v3V9UFDYF74LkCKzcjvo74E49NA0mM1k4mnNl31qvBr8gTXdFz61xo8dt%2BKW1HttNgkzaY1vy%2FGxCbfc0PFqHNi7dKrI2RZD1JT4S3t14bj7UWlnSCEXhldiEnOzyR0qqBtrefJpR9IX9LMd&X-Amz-Signature=0404ee61d85dd47ef803b7d723eae156c4c4281c9757958d78862d9abf993e46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVUEMAZ3%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIEQGZA6h9F72saOTWv00psaXdHvQumOvPHrRkZ5c2CcRAiB9Ocxmw1XMpJGRLqr%2F4%2BERXhlzHtvHhjxZIiTzuOR8ciqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv8sl6YpMPiFzLIpwKtwDdK3WwDu8k693IEYSAZfJJb6ricfyyKzmwW7N06MG4yW3xkVI7AWsc6dLRCl90JUg3bQQ1v1VB%2BwQd4vaIuNCAR8eXF4362%2BAMTQAK2%2BqUoZcY7OkzseLgmms8XiOrMzQ%2BesrhYd3gtb7830D3Or3apiLahpgFsHUMzo747BKv4tDizqsbqjII8TV7Pe6lVTlMaNes8bi6mKVHBtm7WKuWPWUMQvrB5mJZj3NN4Lx9npUKH2cgvtOJnodhQzKYy13WV%2FL3DN1geqe%2BkKxeQSvsnG4537Xr8804SKf58LOnloyiVgMQJ9c2oKpH6U2ToVOJ%2BzICyev6uCUV6FGlYytHhVfcxfVJN3eaOYt3N3vzi4C%2FT%2B2hV0KfndVqB4jebck7TV9tcwnAC0%2FFVttE7CfsjbcGTPlE8VW7QZeBj4ZMGOYHNhMtNd5GdbKt6nviw6Nw8TO8vDV9aGYr4OuTLt3FkLW2PCnQkgjtwffQrWOlJn%2FKitokEkiI8ENcMbPMYuHBO2ZNVWVzENe8SR2KUdg8XU3E%2FvE05%2B8ee8AjTw5auFiu5TkRVs60OeSdVFWyTgBN8WIURJJ1F1SOX5O2ngKs7vpYnpJyuqVwYKfbSZz2SPe0K8%2B2OiQg%2Bi30rowv%2ByYwAY6pgEpew1euUUUVwQyTYOXWSPTTpSBDHe0PsbEHnZJX8FIFIxv4SVCDsBCWLdXGHBW63z8AIShqK4p%2FP95v3V9UFDYF74LkCKzcjvo74E49NA0mM1k4mnNl31qvBr8gTXdFz61xo8dt%2BKW1HttNgkzaY1vy%2FGxCbfc0PFqHNi7dKrI2RZD1JT4S3t14bj7UWlnSCEXhldiEnOzyR0qqBtrefJpR9IX9LMd&X-Amz-Signature=dffcf91a8c704ef48e10fa115421abbb063ac974bd6e67041f07a53de76ee198&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
