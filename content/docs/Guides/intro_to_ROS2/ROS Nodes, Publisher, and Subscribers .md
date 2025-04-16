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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO27NB7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJJd87VOQyjRGcFFAYMhUwT5ZRJnYpkRFQ5qkM3mBQBAiEAmVNk2NqngR7OAizuikl6f0E1Izw%2Fm74B6nQRKlPJKLEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPxBU6FMi8zMUASUHircA34vGDOj80yr2uqzWFVOR2NL9O%2BX%2BBS8b7Nfc9YkcD8Vt6fm%2F3simzoRyYvo3WWNLaS2WRncf9vUWU%2BIO%2BHLhdDczZtbXsg7COoPdk47AQXUcce1hYgW87Y%2FAydL2%2BKuWSsFi4zrc5TxF19vx5Ra3TefT%2BtRVn%2F1PI86vRNERaxkDE85uq1cLCtpIWcR4mn15ZL4zZMZr%2BvD9d4QZPE2JFQkJrzj7oOfCww0Kn16ZHtrD0L8dPjArPsgLNcK59J%2FqnuiP8o6bGL0h1WfcbP4yYk27laurZQgiiDV%2FKpny6bsKvDDzaVDruWPGZ%2B0CdbWVVbkj636ASAG1y1UMzo5Cyok6s7KZEJBmwcjRSIs2MSE7L4N1PdIvSWAvvKvtUGxgPT1tZNyiwb89HMnZdvNW8xp4qSYfcOhcv3%2BnpPnqNjmDLlACD3G6zqRCw0T1UP%2FDwsTRqbHcmkQyfq9qs%2B40WYGIDOfNFfNCF%2Fu1ZZ6%2F9Wej4G4har0nQKLNRxOjFU41JoT4IQ3gelStivIaK5HGTPsSj6xrDlVyik2xkwV77cGSX8%2BJu4e%2BzCS4GXJnGPqZtOUax0X8OijziEHafJ5UHFLbD65KfQI3s6pDtXrlF%2FwmEhtJOaPUbvAdwdkMIzX%2FL8GOqUBUo9vysKed5ZnwvurnYF4BR1Tl7Hemm1jWriLS9oj93d1CSRdKoq4pcf5o1ghi%2F%2BkxJa9P3fkYXeE8PwTC7hdsyzz0CJt66XmjyZp7VNqkax33JoaAuAjUIcdp3bZV%2BwyQEVbWJ%2FXpKNcG0QCmFtThW2TbI2hWjKHk9UE0PTMI1P70rG7qufLHd3S0OmH%2BJP6iaB4%2FgRQ%2FKZoT7QvtSt4asdITdRh&X-Amz-Signature=2cec22d4cdd544cdf7c4e447e6968947f1a23486e9a911832719364f170fca98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO27NB7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJJd87VOQyjRGcFFAYMhUwT5ZRJnYpkRFQ5qkM3mBQBAiEAmVNk2NqngR7OAizuikl6f0E1Izw%2Fm74B6nQRKlPJKLEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPxBU6FMi8zMUASUHircA34vGDOj80yr2uqzWFVOR2NL9O%2BX%2BBS8b7Nfc9YkcD8Vt6fm%2F3simzoRyYvo3WWNLaS2WRncf9vUWU%2BIO%2BHLhdDczZtbXsg7COoPdk47AQXUcce1hYgW87Y%2FAydL2%2BKuWSsFi4zrc5TxF19vx5Ra3TefT%2BtRVn%2F1PI86vRNERaxkDE85uq1cLCtpIWcR4mn15ZL4zZMZr%2BvD9d4QZPE2JFQkJrzj7oOfCww0Kn16ZHtrD0L8dPjArPsgLNcK59J%2FqnuiP8o6bGL0h1WfcbP4yYk27laurZQgiiDV%2FKpny6bsKvDDzaVDruWPGZ%2B0CdbWVVbkj636ASAG1y1UMzo5Cyok6s7KZEJBmwcjRSIs2MSE7L4N1PdIvSWAvvKvtUGxgPT1tZNyiwb89HMnZdvNW8xp4qSYfcOhcv3%2BnpPnqNjmDLlACD3G6zqRCw0T1UP%2FDwsTRqbHcmkQyfq9qs%2B40WYGIDOfNFfNCF%2Fu1ZZ6%2F9Wej4G4har0nQKLNRxOjFU41JoT4IQ3gelStivIaK5HGTPsSj6xrDlVyik2xkwV77cGSX8%2BJu4e%2BzCS4GXJnGPqZtOUax0X8OijziEHafJ5UHFLbD65KfQI3s6pDtXrlF%2FwmEhtJOaPUbvAdwdkMIzX%2FL8GOqUBUo9vysKed5ZnwvurnYF4BR1Tl7Hemm1jWriLS9oj93d1CSRdKoq4pcf5o1ghi%2F%2BkxJa9P3fkYXeE8PwTC7hdsyzz0CJt66XmjyZp7VNqkax33JoaAuAjUIcdp3bZV%2BwyQEVbWJ%2FXpKNcG0QCmFtThW2TbI2hWjKHk9UE0PTMI1P70rG7qufLHd3S0OmH%2BJP6iaB4%2FgRQ%2FKZoT7QvtSt4asdITdRh&X-Amz-Signature=0183b05ec27e85ab152a988e13ea9bc4a84c4061512eda2c3936eafd56585ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO27NB7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJJd87VOQyjRGcFFAYMhUwT5ZRJnYpkRFQ5qkM3mBQBAiEAmVNk2NqngR7OAizuikl6f0E1Izw%2Fm74B6nQRKlPJKLEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPxBU6FMi8zMUASUHircA34vGDOj80yr2uqzWFVOR2NL9O%2BX%2BBS8b7Nfc9YkcD8Vt6fm%2F3simzoRyYvo3WWNLaS2WRncf9vUWU%2BIO%2BHLhdDczZtbXsg7COoPdk47AQXUcce1hYgW87Y%2FAydL2%2BKuWSsFi4zrc5TxF19vx5Ra3TefT%2BtRVn%2F1PI86vRNERaxkDE85uq1cLCtpIWcR4mn15ZL4zZMZr%2BvD9d4QZPE2JFQkJrzj7oOfCww0Kn16ZHtrD0L8dPjArPsgLNcK59J%2FqnuiP8o6bGL0h1WfcbP4yYk27laurZQgiiDV%2FKpny6bsKvDDzaVDruWPGZ%2B0CdbWVVbkj636ASAG1y1UMzo5Cyok6s7KZEJBmwcjRSIs2MSE7L4N1PdIvSWAvvKvtUGxgPT1tZNyiwb89HMnZdvNW8xp4qSYfcOhcv3%2BnpPnqNjmDLlACD3G6zqRCw0T1UP%2FDwsTRqbHcmkQyfq9qs%2B40WYGIDOfNFfNCF%2Fu1ZZ6%2F9Wej4G4har0nQKLNRxOjFU41JoT4IQ3gelStivIaK5HGTPsSj6xrDlVyik2xkwV77cGSX8%2BJu4e%2BzCS4GXJnGPqZtOUax0X8OijziEHafJ5UHFLbD65KfQI3s6pDtXrlF%2FwmEhtJOaPUbvAdwdkMIzX%2FL8GOqUBUo9vysKed5ZnwvurnYF4BR1Tl7Hemm1jWriLS9oj93d1CSRdKoq4pcf5o1ghi%2F%2BkxJa9P3fkYXeE8PwTC7hdsyzz0CJt66XmjyZp7VNqkax33JoaAuAjUIcdp3bZV%2BwyQEVbWJ%2FXpKNcG0QCmFtThW2TbI2hWjKHk9UE0PTMI1P70rG7qufLHd3S0OmH%2BJP6iaB4%2FgRQ%2FKZoT7QvtSt4asdITdRh&X-Amz-Signature=501001c8d06d114363000a1a5980c9b22830431715994e411b7c852520151514&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO27NB7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJJd87VOQyjRGcFFAYMhUwT5ZRJnYpkRFQ5qkM3mBQBAiEAmVNk2NqngR7OAizuikl6f0E1Izw%2Fm74B6nQRKlPJKLEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPxBU6FMi8zMUASUHircA34vGDOj80yr2uqzWFVOR2NL9O%2BX%2BBS8b7Nfc9YkcD8Vt6fm%2F3simzoRyYvo3WWNLaS2WRncf9vUWU%2BIO%2BHLhdDczZtbXsg7COoPdk47AQXUcce1hYgW87Y%2FAydL2%2BKuWSsFi4zrc5TxF19vx5Ra3TefT%2BtRVn%2F1PI86vRNERaxkDE85uq1cLCtpIWcR4mn15ZL4zZMZr%2BvD9d4QZPE2JFQkJrzj7oOfCww0Kn16ZHtrD0L8dPjArPsgLNcK59J%2FqnuiP8o6bGL0h1WfcbP4yYk27laurZQgiiDV%2FKpny6bsKvDDzaVDruWPGZ%2B0CdbWVVbkj636ASAG1y1UMzo5Cyok6s7KZEJBmwcjRSIs2MSE7L4N1PdIvSWAvvKvtUGxgPT1tZNyiwb89HMnZdvNW8xp4qSYfcOhcv3%2BnpPnqNjmDLlACD3G6zqRCw0T1UP%2FDwsTRqbHcmkQyfq9qs%2B40WYGIDOfNFfNCF%2Fu1ZZ6%2F9Wej4G4har0nQKLNRxOjFU41JoT4IQ3gelStivIaK5HGTPsSj6xrDlVyik2xkwV77cGSX8%2BJu4e%2BzCS4GXJnGPqZtOUax0X8OijziEHafJ5UHFLbD65KfQI3s6pDtXrlF%2FwmEhtJOaPUbvAdwdkMIzX%2FL8GOqUBUo9vysKed5ZnwvurnYF4BR1Tl7Hemm1jWriLS9oj93d1CSRdKoq4pcf5o1ghi%2F%2BkxJa9P3fkYXeE8PwTC7hdsyzz0CJt66XmjyZp7VNqkax33JoaAuAjUIcdp3bZV%2BwyQEVbWJ%2FXpKNcG0QCmFtThW2TbI2hWjKHk9UE0PTMI1P70rG7qufLHd3S0OmH%2BJP6iaB4%2FgRQ%2FKZoT7QvtSt4asdITdRh&X-Amz-Signature=29759d596e0aa07edec11bdbda9e50d7ff815b32029bcd1a373dbb1ebb7837c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO27NB7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJJd87VOQyjRGcFFAYMhUwT5ZRJnYpkRFQ5qkM3mBQBAiEAmVNk2NqngR7OAizuikl6f0E1Izw%2Fm74B6nQRKlPJKLEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPxBU6FMi8zMUASUHircA34vGDOj80yr2uqzWFVOR2NL9O%2BX%2BBS8b7Nfc9YkcD8Vt6fm%2F3simzoRyYvo3WWNLaS2WRncf9vUWU%2BIO%2BHLhdDczZtbXsg7COoPdk47AQXUcce1hYgW87Y%2FAydL2%2BKuWSsFi4zrc5TxF19vx5Ra3TefT%2BtRVn%2F1PI86vRNERaxkDE85uq1cLCtpIWcR4mn15ZL4zZMZr%2BvD9d4QZPE2JFQkJrzj7oOfCww0Kn16ZHtrD0L8dPjArPsgLNcK59J%2FqnuiP8o6bGL0h1WfcbP4yYk27laurZQgiiDV%2FKpny6bsKvDDzaVDruWPGZ%2B0CdbWVVbkj636ASAG1y1UMzo5Cyok6s7KZEJBmwcjRSIs2MSE7L4N1PdIvSWAvvKvtUGxgPT1tZNyiwb89HMnZdvNW8xp4qSYfcOhcv3%2BnpPnqNjmDLlACD3G6zqRCw0T1UP%2FDwsTRqbHcmkQyfq9qs%2B40WYGIDOfNFfNCF%2Fu1ZZ6%2F9Wej4G4har0nQKLNRxOjFU41JoT4IQ3gelStivIaK5HGTPsSj6xrDlVyik2xkwV77cGSX8%2BJu4e%2BzCS4GXJnGPqZtOUax0X8OijziEHafJ5UHFLbD65KfQI3s6pDtXrlF%2FwmEhtJOaPUbvAdwdkMIzX%2FL8GOqUBUo9vysKed5ZnwvurnYF4BR1Tl7Hemm1jWriLS9oj93d1CSRdKoq4pcf5o1ghi%2F%2BkxJa9P3fkYXeE8PwTC7hdsyzz0CJt66XmjyZp7VNqkax33JoaAuAjUIcdp3bZV%2BwyQEVbWJ%2FXpKNcG0QCmFtThW2TbI2hWjKHk9UE0PTMI1P70rG7qufLHd3S0OmH%2BJP6iaB4%2FgRQ%2FKZoT7QvtSt4asdITdRh&X-Amz-Signature=7118c2646faf56dba19b2b47ba992d55dce5b46b0428ce48044da8483edac795&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO27NB7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJJd87VOQyjRGcFFAYMhUwT5ZRJnYpkRFQ5qkM3mBQBAiEAmVNk2NqngR7OAizuikl6f0E1Izw%2Fm74B6nQRKlPJKLEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPxBU6FMi8zMUASUHircA34vGDOj80yr2uqzWFVOR2NL9O%2BX%2BBS8b7Nfc9YkcD8Vt6fm%2F3simzoRyYvo3WWNLaS2WRncf9vUWU%2BIO%2BHLhdDczZtbXsg7COoPdk47AQXUcce1hYgW87Y%2FAydL2%2BKuWSsFi4zrc5TxF19vx5Ra3TefT%2BtRVn%2F1PI86vRNERaxkDE85uq1cLCtpIWcR4mn15ZL4zZMZr%2BvD9d4QZPE2JFQkJrzj7oOfCww0Kn16ZHtrD0L8dPjArPsgLNcK59J%2FqnuiP8o6bGL0h1WfcbP4yYk27laurZQgiiDV%2FKpny6bsKvDDzaVDruWPGZ%2B0CdbWVVbkj636ASAG1y1UMzo5Cyok6s7KZEJBmwcjRSIs2MSE7L4N1PdIvSWAvvKvtUGxgPT1tZNyiwb89HMnZdvNW8xp4qSYfcOhcv3%2BnpPnqNjmDLlACD3G6zqRCw0T1UP%2FDwsTRqbHcmkQyfq9qs%2B40WYGIDOfNFfNCF%2Fu1ZZ6%2F9Wej4G4har0nQKLNRxOjFU41JoT4IQ3gelStivIaK5HGTPsSj6xrDlVyik2xkwV77cGSX8%2BJu4e%2BzCS4GXJnGPqZtOUax0X8OijziEHafJ5UHFLbD65KfQI3s6pDtXrlF%2FwmEhtJOaPUbvAdwdkMIzX%2FL8GOqUBUo9vysKed5ZnwvurnYF4BR1Tl7Hemm1jWriLS9oj93d1CSRdKoq4pcf5o1ghi%2F%2BkxJa9P3fkYXeE8PwTC7hdsyzz0CJt66XmjyZp7VNqkax33JoaAuAjUIcdp3bZV%2BwyQEVbWJ%2FXpKNcG0QCmFtThW2TbI2hWjKHk9UE0PTMI1P70rG7qufLHd3S0OmH%2BJP6iaB4%2FgRQ%2FKZoT7QvtSt4asdITdRh&X-Amz-Signature=880759093d5e08932d730126294fd338af05226ae1af310b114be675ae91dcc3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO27NB7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJJd87VOQyjRGcFFAYMhUwT5ZRJnYpkRFQ5qkM3mBQBAiEAmVNk2NqngR7OAizuikl6f0E1Izw%2Fm74B6nQRKlPJKLEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPxBU6FMi8zMUASUHircA34vGDOj80yr2uqzWFVOR2NL9O%2BX%2BBS8b7Nfc9YkcD8Vt6fm%2F3simzoRyYvo3WWNLaS2WRncf9vUWU%2BIO%2BHLhdDczZtbXsg7COoPdk47AQXUcce1hYgW87Y%2FAydL2%2BKuWSsFi4zrc5TxF19vx5Ra3TefT%2BtRVn%2F1PI86vRNERaxkDE85uq1cLCtpIWcR4mn15ZL4zZMZr%2BvD9d4QZPE2JFQkJrzj7oOfCww0Kn16ZHtrD0L8dPjArPsgLNcK59J%2FqnuiP8o6bGL0h1WfcbP4yYk27laurZQgiiDV%2FKpny6bsKvDDzaVDruWPGZ%2B0CdbWVVbkj636ASAG1y1UMzo5Cyok6s7KZEJBmwcjRSIs2MSE7L4N1PdIvSWAvvKvtUGxgPT1tZNyiwb89HMnZdvNW8xp4qSYfcOhcv3%2BnpPnqNjmDLlACD3G6zqRCw0T1UP%2FDwsTRqbHcmkQyfq9qs%2B40WYGIDOfNFfNCF%2Fu1ZZ6%2F9Wej4G4har0nQKLNRxOjFU41JoT4IQ3gelStivIaK5HGTPsSj6xrDlVyik2xkwV77cGSX8%2BJu4e%2BzCS4GXJnGPqZtOUax0X8OijziEHafJ5UHFLbD65KfQI3s6pDtXrlF%2FwmEhtJOaPUbvAdwdkMIzX%2FL8GOqUBUo9vysKed5ZnwvurnYF4BR1Tl7Hemm1jWriLS9oj93d1CSRdKoq4pcf5o1ghi%2F%2BkxJa9P3fkYXeE8PwTC7hdsyzz0CJt66XmjyZp7VNqkax33JoaAuAjUIcdp3bZV%2BwyQEVbWJ%2FXpKNcG0QCmFtThW2TbI2hWjKHk9UE0PTMI1P70rG7qufLHd3S0OmH%2BJP6iaB4%2FgRQ%2FKZoT7QvtSt4asdITdRh&X-Amz-Signature=bd41f2f1d94aac3de0648dbbd15bf26cbb080a44118fb42acd185140d96579b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUO27NB7%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T041040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJJd87VOQyjRGcFFAYMhUwT5ZRJnYpkRFQ5qkM3mBQBAiEAmVNk2NqngR7OAizuikl6f0E1Izw%2Fm74B6nQRKlPJKLEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDPxBU6FMi8zMUASUHircA34vGDOj80yr2uqzWFVOR2NL9O%2BX%2BBS8b7Nfc9YkcD8Vt6fm%2F3simzoRyYvo3WWNLaS2WRncf9vUWU%2BIO%2BHLhdDczZtbXsg7COoPdk47AQXUcce1hYgW87Y%2FAydL2%2BKuWSsFi4zrc5TxF19vx5Ra3TefT%2BtRVn%2F1PI86vRNERaxkDE85uq1cLCtpIWcR4mn15ZL4zZMZr%2BvD9d4QZPE2JFQkJrzj7oOfCww0Kn16ZHtrD0L8dPjArPsgLNcK59J%2FqnuiP8o6bGL0h1WfcbP4yYk27laurZQgiiDV%2FKpny6bsKvDDzaVDruWPGZ%2B0CdbWVVbkj636ASAG1y1UMzo5Cyok6s7KZEJBmwcjRSIs2MSE7L4N1PdIvSWAvvKvtUGxgPT1tZNyiwb89HMnZdvNW8xp4qSYfcOhcv3%2BnpPnqNjmDLlACD3G6zqRCw0T1UP%2FDwsTRqbHcmkQyfq9qs%2B40WYGIDOfNFfNCF%2Fu1ZZ6%2F9Wej4G4har0nQKLNRxOjFU41JoT4IQ3gelStivIaK5HGTPsSj6xrDlVyik2xkwV77cGSX8%2BJu4e%2BzCS4GXJnGPqZtOUax0X8OijziEHafJ5UHFLbD65KfQI3s6pDtXrlF%2FwmEhtJOaPUbvAdwdkMIzX%2FL8GOqUBUo9vysKed5ZnwvurnYF4BR1Tl7Hemm1jWriLS9oj93d1CSRdKoq4pcf5o1ghi%2F%2BkxJa9P3fkYXeE8PwTC7hdsyzz0CJt66XmjyZp7VNqkax33JoaAuAjUIcdp3bZV%2BwyQEVbWJ%2FXpKNcG0QCmFtThW2TbI2hWjKHk9UE0PTMI1P70rG7qufLHd3S0OmH%2BJP6iaB4%2FgRQ%2FKZoT7QvtSt4asdITdRh&X-Amz-Signature=3197e40395f6345adfadaadcc6401be76c60e45d7244025569751dc646ce97fb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
