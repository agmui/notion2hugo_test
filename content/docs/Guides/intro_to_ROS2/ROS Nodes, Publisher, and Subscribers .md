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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4WGKLL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9%2BTtxSgYtdJ2vj3jZovah9TwUHmB8JYJQ0TF5yTVX%2FAiBo%2FEg6yl3GjsHyAJZCt1HtlrdHHUlx7GzqD6C%2Ff7fkLyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7IXKTGKT3sJJ%2FIFKtwDNBhd3J8uhnjpTi4UbbuRKf%2B7dZzWb0Ye2DTT8Rj8q8ZK%2F1LW1fklFSD4RIT3efuktwgBjABG8AQ8WsGJLTDSddu8fudL8sCRThEelnbTRiYzUrQei179RsFYKcJRiNxvQkQtiHTEejLU0UL%2Fmo%2BG8VU3R6ZfzdfxTgdV0sqn%2B74l7ujsl5gYP7y8yW9JDaPO0Xgv%2B76V8Yhydd8%2B9VnVU8DWf1lUYkcrkBfaEjOZpr6CxLTxp%2B7vfba8Uhw1d1MF54XFOvVMaUS5Oht2VkAH0T5xGQGzGFZbBLRy9NgQT200o4L76%2BZM%2FAFwRkCiECXxbiElkCLp7Mqq%2FNIX%2BBMEIjD8UxVZp8ct2YORQaLNXqak6cSoLwbnkPMxJElSDs31MkEpV3sz4MUIF4S%2BEXta8YmOkNEb1lK9g6v4paNdYdHgvQsgdYZLgMBu2ybcIs9Q1AV%2FikCZn8faRBFEraV9Yo9dj9XDZX4cRQ6dJEfk%2FIUPoCgOjqEplCW63PJKpuWaBBsA5FSUuH4sr5Y3mXEp5iU4FVMHfLrpn3vO5IqdKy0nPTJTGQG17PjJs3aqkozCOij5QG0jDmxXi%2BL6eqmp4ULmzAWo4%2BT2rM%2B6CScSx0SQGgRZ8d2kmN9PBGAw4Z38vAY6pgF%2F3K2wmY4G4m9XuSKpehrCG04TkmXauhfRcb2NRQ0pNOomIOFWcj7EcfkKDaIximVqcsyVAWhIjzlf2avBaBdvu4pmC7iLHEAJcOW0nIbK7AbOGXB0nPV4tDzfFIEG7FUPQ4QQCME9esaRMQ368CtTSRt%2FABHY1FIiNiLEZgNMQiXVUTbNXFR0YCjTzuVaZRYwhkaPdS98Yyv8dUM1PaWNiRG7cBKV&X-Amz-Signature=a7c6adcdf54124f5f0d7e269ab9ecf597e847516b20de5dfff7fa200f08608f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4WGKLL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9%2BTtxSgYtdJ2vj3jZovah9TwUHmB8JYJQ0TF5yTVX%2FAiBo%2FEg6yl3GjsHyAJZCt1HtlrdHHUlx7GzqD6C%2Ff7fkLyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7IXKTGKT3sJJ%2FIFKtwDNBhd3J8uhnjpTi4UbbuRKf%2B7dZzWb0Ye2DTT8Rj8q8ZK%2F1LW1fklFSD4RIT3efuktwgBjABG8AQ8WsGJLTDSddu8fudL8sCRThEelnbTRiYzUrQei179RsFYKcJRiNxvQkQtiHTEejLU0UL%2Fmo%2BG8VU3R6ZfzdfxTgdV0sqn%2B74l7ujsl5gYP7y8yW9JDaPO0Xgv%2B76V8Yhydd8%2B9VnVU8DWf1lUYkcrkBfaEjOZpr6CxLTxp%2B7vfba8Uhw1d1MF54XFOvVMaUS5Oht2VkAH0T5xGQGzGFZbBLRy9NgQT200o4L76%2BZM%2FAFwRkCiECXxbiElkCLp7Mqq%2FNIX%2BBMEIjD8UxVZp8ct2YORQaLNXqak6cSoLwbnkPMxJElSDs31MkEpV3sz4MUIF4S%2BEXta8YmOkNEb1lK9g6v4paNdYdHgvQsgdYZLgMBu2ybcIs9Q1AV%2FikCZn8faRBFEraV9Yo9dj9XDZX4cRQ6dJEfk%2FIUPoCgOjqEplCW63PJKpuWaBBsA5FSUuH4sr5Y3mXEp5iU4FVMHfLrpn3vO5IqdKy0nPTJTGQG17PjJs3aqkozCOij5QG0jDmxXi%2BL6eqmp4ULmzAWo4%2BT2rM%2B6CScSx0SQGgRZ8d2kmN9PBGAw4Z38vAY6pgF%2F3K2wmY4G4m9XuSKpehrCG04TkmXauhfRcb2NRQ0pNOomIOFWcj7EcfkKDaIximVqcsyVAWhIjzlf2avBaBdvu4pmC7iLHEAJcOW0nIbK7AbOGXB0nPV4tDzfFIEG7FUPQ4QQCME9esaRMQ368CtTSRt%2FABHY1FIiNiLEZgNMQiXVUTbNXFR0YCjTzuVaZRYwhkaPdS98Yyv8dUM1PaWNiRG7cBKV&X-Amz-Signature=2ed99ea1017db7e14581afbc871fe460b897dc6b981745a35892c9f1e2afe6c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4WGKLL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9%2BTtxSgYtdJ2vj3jZovah9TwUHmB8JYJQ0TF5yTVX%2FAiBo%2FEg6yl3GjsHyAJZCt1HtlrdHHUlx7GzqD6C%2Ff7fkLyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7IXKTGKT3sJJ%2FIFKtwDNBhd3J8uhnjpTi4UbbuRKf%2B7dZzWb0Ye2DTT8Rj8q8ZK%2F1LW1fklFSD4RIT3efuktwgBjABG8AQ8WsGJLTDSddu8fudL8sCRThEelnbTRiYzUrQei179RsFYKcJRiNxvQkQtiHTEejLU0UL%2Fmo%2BG8VU3R6ZfzdfxTgdV0sqn%2B74l7ujsl5gYP7y8yW9JDaPO0Xgv%2B76V8Yhydd8%2B9VnVU8DWf1lUYkcrkBfaEjOZpr6CxLTxp%2B7vfba8Uhw1d1MF54XFOvVMaUS5Oht2VkAH0T5xGQGzGFZbBLRy9NgQT200o4L76%2BZM%2FAFwRkCiECXxbiElkCLp7Mqq%2FNIX%2BBMEIjD8UxVZp8ct2YORQaLNXqak6cSoLwbnkPMxJElSDs31MkEpV3sz4MUIF4S%2BEXta8YmOkNEb1lK9g6v4paNdYdHgvQsgdYZLgMBu2ybcIs9Q1AV%2FikCZn8faRBFEraV9Yo9dj9XDZX4cRQ6dJEfk%2FIUPoCgOjqEplCW63PJKpuWaBBsA5FSUuH4sr5Y3mXEp5iU4FVMHfLrpn3vO5IqdKy0nPTJTGQG17PjJs3aqkozCOij5QG0jDmxXi%2BL6eqmp4ULmzAWo4%2BT2rM%2B6CScSx0SQGgRZ8d2kmN9PBGAw4Z38vAY6pgF%2F3K2wmY4G4m9XuSKpehrCG04TkmXauhfRcb2NRQ0pNOomIOFWcj7EcfkKDaIximVqcsyVAWhIjzlf2avBaBdvu4pmC7iLHEAJcOW0nIbK7AbOGXB0nPV4tDzfFIEG7FUPQ4QQCME9esaRMQ368CtTSRt%2FABHY1FIiNiLEZgNMQiXVUTbNXFR0YCjTzuVaZRYwhkaPdS98Yyv8dUM1PaWNiRG7cBKV&X-Amz-Signature=9924bd5c3f0a1458989fd2173dab0c5ad4c8fa968fe25e9fbc0d8cea7119b9b5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4WGKLL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9%2BTtxSgYtdJ2vj3jZovah9TwUHmB8JYJQ0TF5yTVX%2FAiBo%2FEg6yl3GjsHyAJZCt1HtlrdHHUlx7GzqD6C%2Ff7fkLyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7IXKTGKT3sJJ%2FIFKtwDNBhd3J8uhnjpTi4UbbuRKf%2B7dZzWb0Ye2DTT8Rj8q8ZK%2F1LW1fklFSD4RIT3efuktwgBjABG8AQ8WsGJLTDSddu8fudL8sCRThEelnbTRiYzUrQei179RsFYKcJRiNxvQkQtiHTEejLU0UL%2Fmo%2BG8VU3R6ZfzdfxTgdV0sqn%2B74l7ujsl5gYP7y8yW9JDaPO0Xgv%2B76V8Yhydd8%2B9VnVU8DWf1lUYkcrkBfaEjOZpr6CxLTxp%2B7vfba8Uhw1d1MF54XFOvVMaUS5Oht2VkAH0T5xGQGzGFZbBLRy9NgQT200o4L76%2BZM%2FAFwRkCiECXxbiElkCLp7Mqq%2FNIX%2BBMEIjD8UxVZp8ct2YORQaLNXqak6cSoLwbnkPMxJElSDs31MkEpV3sz4MUIF4S%2BEXta8YmOkNEb1lK9g6v4paNdYdHgvQsgdYZLgMBu2ybcIs9Q1AV%2FikCZn8faRBFEraV9Yo9dj9XDZX4cRQ6dJEfk%2FIUPoCgOjqEplCW63PJKpuWaBBsA5FSUuH4sr5Y3mXEp5iU4FVMHfLrpn3vO5IqdKy0nPTJTGQG17PjJs3aqkozCOij5QG0jDmxXi%2BL6eqmp4ULmzAWo4%2BT2rM%2B6CScSx0SQGgRZ8d2kmN9PBGAw4Z38vAY6pgF%2F3K2wmY4G4m9XuSKpehrCG04TkmXauhfRcb2NRQ0pNOomIOFWcj7EcfkKDaIximVqcsyVAWhIjzlf2avBaBdvu4pmC7iLHEAJcOW0nIbK7AbOGXB0nPV4tDzfFIEG7FUPQ4QQCME9esaRMQ368CtTSRt%2FABHY1FIiNiLEZgNMQiXVUTbNXFR0YCjTzuVaZRYwhkaPdS98Yyv8dUM1PaWNiRG7cBKV&X-Amz-Signature=ff267f42967e8ecc39576211d1dcdb90dd3a089fd8bbc41d197044ff2e58fc40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4WGKLL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9%2BTtxSgYtdJ2vj3jZovah9TwUHmB8JYJQ0TF5yTVX%2FAiBo%2FEg6yl3GjsHyAJZCt1HtlrdHHUlx7GzqD6C%2Ff7fkLyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7IXKTGKT3sJJ%2FIFKtwDNBhd3J8uhnjpTi4UbbuRKf%2B7dZzWb0Ye2DTT8Rj8q8ZK%2F1LW1fklFSD4RIT3efuktwgBjABG8AQ8WsGJLTDSddu8fudL8sCRThEelnbTRiYzUrQei179RsFYKcJRiNxvQkQtiHTEejLU0UL%2Fmo%2BG8VU3R6ZfzdfxTgdV0sqn%2B74l7ujsl5gYP7y8yW9JDaPO0Xgv%2B76V8Yhydd8%2B9VnVU8DWf1lUYkcrkBfaEjOZpr6CxLTxp%2B7vfba8Uhw1d1MF54XFOvVMaUS5Oht2VkAH0T5xGQGzGFZbBLRy9NgQT200o4L76%2BZM%2FAFwRkCiECXxbiElkCLp7Mqq%2FNIX%2BBMEIjD8UxVZp8ct2YORQaLNXqak6cSoLwbnkPMxJElSDs31MkEpV3sz4MUIF4S%2BEXta8YmOkNEb1lK9g6v4paNdYdHgvQsgdYZLgMBu2ybcIs9Q1AV%2FikCZn8faRBFEraV9Yo9dj9XDZX4cRQ6dJEfk%2FIUPoCgOjqEplCW63PJKpuWaBBsA5FSUuH4sr5Y3mXEp5iU4FVMHfLrpn3vO5IqdKy0nPTJTGQG17PjJs3aqkozCOij5QG0jDmxXi%2BL6eqmp4ULmzAWo4%2BT2rM%2B6CScSx0SQGgRZ8d2kmN9PBGAw4Z38vAY6pgF%2F3K2wmY4G4m9XuSKpehrCG04TkmXauhfRcb2NRQ0pNOomIOFWcj7EcfkKDaIximVqcsyVAWhIjzlf2avBaBdvu4pmC7iLHEAJcOW0nIbK7AbOGXB0nPV4tDzfFIEG7FUPQ4QQCME9esaRMQ368CtTSRt%2FABHY1FIiNiLEZgNMQiXVUTbNXFR0YCjTzuVaZRYwhkaPdS98Yyv8dUM1PaWNiRG7cBKV&X-Amz-Signature=29a8d0415c6d7a7b78377869a925e504a8f2fb645e28ab66145676c26abeeb10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4WGKLL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9%2BTtxSgYtdJ2vj3jZovah9TwUHmB8JYJQ0TF5yTVX%2FAiBo%2FEg6yl3GjsHyAJZCt1HtlrdHHUlx7GzqD6C%2Ff7fkLyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7IXKTGKT3sJJ%2FIFKtwDNBhd3J8uhnjpTi4UbbuRKf%2B7dZzWb0Ye2DTT8Rj8q8ZK%2F1LW1fklFSD4RIT3efuktwgBjABG8AQ8WsGJLTDSddu8fudL8sCRThEelnbTRiYzUrQei179RsFYKcJRiNxvQkQtiHTEejLU0UL%2Fmo%2BG8VU3R6ZfzdfxTgdV0sqn%2B74l7ujsl5gYP7y8yW9JDaPO0Xgv%2B76V8Yhydd8%2B9VnVU8DWf1lUYkcrkBfaEjOZpr6CxLTxp%2B7vfba8Uhw1d1MF54XFOvVMaUS5Oht2VkAH0T5xGQGzGFZbBLRy9NgQT200o4L76%2BZM%2FAFwRkCiECXxbiElkCLp7Mqq%2FNIX%2BBMEIjD8UxVZp8ct2YORQaLNXqak6cSoLwbnkPMxJElSDs31MkEpV3sz4MUIF4S%2BEXta8YmOkNEb1lK9g6v4paNdYdHgvQsgdYZLgMBu2ybcIs9Q1AV%2FikCZn8faRBFEraV9Yo9dj9XDZX4cRQ6dJEfk%2FIUPoCgOjqEplCW63PJKpuWaBBsA5FSUuH4sr5Y3mXEp5iU4FVMHfLrpn3vO5IqdKy0nPTJTGQG17PjJs3aqkozCOij5QG0jDmxXi%2BL6eqmp4ULmzAWo4%2BT2rM%2B6CScSx0SQGgRZ8d2kmN9PBGAw4Z38vAY6pgF%2F3K2wmY4G4m9XuSKpehrCG04TkmXauhfRcb2NRQ0pNOomIOFWcj7EcfkKDaIximVqcsyVAWhIjzlf2avBaBdvu4pmC7iLHEAJcOW0nIbK7AbOGXB0nPV4tDzfFIEG7FUPQ4QQCME9esaRMQ368CtTSRt%2FABHY1FIiNiLEZgNMQiXVUTbNXFR0YCjTzuVaZRYwhkaPdS98Yyv8dUM1PaWNiRG7cBKV&X-Amz-Signature=7763294d36c303cb501468f9b625f433af714468056495b2ad9eefe37d2c7cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4WGKLL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9%2BTtxSgYtdJ2vj3jZovah9TwUHmB8JYJQ0TF5yTVX%2FAiBo%2FEg6yl3GjsHyAJZCt1HtlrdHHUlx7GzqD6C%2Ff7fkLyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7IXKTGKT3sJJ%2FIFKtwDNBhd3J8uhnjpTi4UbbuRKf%2B7dZzWb0Ye2DTT8Rj8q8ZK%2F1LW1fklFSD4RIT3efuktwgBjABG8AQ8WsGJLTDSddu8fudL8sCRThEelnbTRiYzUrQei179RsFYKcJRiNxvQkQtiHTEejLU0UL%2Fmo%2BG8VU3R6ZfzdfxTgdV0sqn%2B74l7ujsl5gYP7y8yW9JDaPO0Xgv%2B76V8Yhydd8%2B9VnVU8DWf1lUYkcrkBfaEjOZpr6CxLTxp%2B7vfba8Uhw1d1MF54XFOvVMaUS5Oht2VkAH0T5xGQGzGFZbBLRy9NgQT200o4L76%2BZM%2FAFwRkCiECXxbiElkCLp7Mqq%2FNIX%2BBMEIjD8UxVZp8ct2YORQaLNXqak6cSoLwbnkPMxJElSDs31MkEpV3sz4MUIF4S%2BEXta8YmOkNEb1lK9g6v4paNdYdHgvQsgdYZLgMBu2ybcIs9Q1AV%2FikCZn8faRBFEraV9Yo9dj9XDZX4cRQ6dJEfk%2FIUPoCgOjqEplCW63PJKpuWaBBsA5FSUuH4sr5Y3mXEp5iU4FVMHfLrpn3vO5IqdKy0nPTJTGQG17PjJs3aqkozCOij5QG0jDmxXi%2BL6eqmp4ULmzAWo4%2BT2rM%2B6CScSx0SQGgRZ8d2kmN9PBGAw4Z38vAY6pgF%2F3K2wmY4G4m9XuSKpehrCG04TkmXauhfRcb2NRQ0pNOomIOFWcj7EcfkKDaIximVqcsyVAWhIjzlf2avBaBdvu4pmC7iLHEAJcOW0nIbK7AbOGXB0nPV4tDzfFIEG7FUPQ4QQCME9esaRMQ368CtTSRt%2FABHY1FIiNiLEZgNMQiXVUTbNXFR0YCjTzuVaZRYwhkaPdS98Yyv8dUM1PaWNiRG7cBKV&X-Amz-Signature=1d18d7e4d30b6c42342feb3dbf875071496435d6bc78a3bd5f85394909ccb3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UP4WGKLL%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9%2BTtxSgYtdJ2vj3jZovah9TwUHmB8JYJQ0TF5yTVX%2FAiBo%2FEg6yl3GjsHyAJZCt1HtlrdHHUlx7GzqD6C%2Ff7fkLyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK7IXKTGKT3sJJ%2FIFKtwDNBhd3J8uhnjpTi4UbbuRKf%2B7dZzWb0Ye2DTT8Rj8q8ZK%2F1LW1fklFSD4RIT3efuktwgBjABG8AQ8WsGJLTDSddu8fudL8sCRThEelnbTRiYzUrQei179RsFYKcJRiNxvQkQtiHTEejLU0UL%2Fmo%2BG8VU3R6ZfzdfxTgdV0sqn%2B74l7ujsl5gYP7y8yW9JDaPO0Xgv%2B76V8Yhydd8%2B9VnVU8DWf1lUYkcrkBfaEjOZpr6CxLTxp%2B7vfba8Uhw1d1MF54XFOvVMaUS5Oht2VkAH0T5xGQGzGFZbBLRy9NgQT200o4L76%2BZM%2FAFwRkCiECXxbiElkCLp7Mqq%2FNIX%2BBMEIjD8UxVZp8ct2YORQaLNXqak6cSoLwbnkPMxJElSDs31MkEpV3sz4MUIF4S%2BEXta8YmOkNEb1lK9g6v4paNdYdHgvQsgdYZLgMBu2ybcIs9Q1AV%2FikCZn8faRBFEraV9Yo9dj9XDZX4cRQ6dJEfk%2FIUPoCgOjqEplCW63PJKpuWaBBsA5FSUuH4sr5Y3mXEp5iU4FVMHfLrpn3vO5IqdKy0nPTJTGQG17PjJs3aqkozCOij5QG0jDmxXi%2BL6eqmp4ULmzAWo4%2BT2rM%2B6CScSx0SQGgRZ8d2kmN9PBGAw4Z38vAY6pgF%2F3K2wmY4G4m9XuSKpehrCG04TkmXauhfRcb2NRQ0pNOomIOFWcj7EcfkKDaIximVqcsyVAWhIjzlf2avBaBdvu4pmC7iLHEAJcOW0nIbK7AbOGXB0nPV4tDzfFIEG7FUPQ4QQCME9esaRMQ368CtTSRt%2FABHY1FIiNiLEZgNMQiXVUTbNXFR0YCjTzuVaZRYwhkaPdS98Yyv8dUM1PaWNiRG7cBKV&X-Amz-Signature=870f87bc58ed167b62c6408119d55ef9d2835d60bc7ad7671d6741ca69a4f2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
