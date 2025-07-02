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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHB3WKM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD3jtXAWjP3HqQMWyB5JDI9Fh8Jx3vvjFAqHj8miZezAiAxgfFHqEzfpkKmFIJTAItlTMUY%2BidxxRfTENbusoojDCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c6gEhG%2FZxHS5qjLKtwD9UPgkuRCo33TwYTFdRPJhmom8WmqJpmBUvo%2FkH7dFquj%2FKvo1BLedMQCyg1GUPnrINwk0c6DI2XxcztudaES5ZNkyeSTXdL5B6sJ36wkemK03cOM%2BzLJVorGNdCyVj1dXwe1%2Bt0tm23rI9XR3MvmTpfmN3ouBvlCCnjuh2Agv1%2F9WXwzq1pLyYy%2BKtREpK2wfn9Vwm7CgPD3zdBEp7UZOwC%2FHti0znAJGAQCeneBx1tGWhTlTd1Zr3wQvMuJzk8Wu0sC3Ohc07c6%2B%2BLmbs7vJqFse55YcjuR2q7wIus5rCPNj5Lu%2BIxvL7wm%2BS5SDGYOoYcDEbYNrCkapYZO1Mkq2nf3xM%2BDFWzLgGvcTtENPzKXamacUhW0aukq3UU6BwVxQ8qhMtVaihoLpJeNpwgYrmq5a6qnT%2B4rcXUrofE%2B1JCndi6yOwJfoHzbPo00JR0VLaq5dNa1T%2BiQw%2BxKUU5KGjs%2B%2BPbPJa%2F%2F%2BB5vHb7CsZUVI1agjXR0%2FL3CcmW0vNcyp8Re%2BQn5pJhJCdJ%2BnW%2F1f3FVpXx6n5n%2FLJiKBo6bIAY5jCWuaQTD7OZEvuELF%2ByaK9d%2Bvnx5gTOitBj7qlDaggVuGcBTotoCJ8zG1xF24BieSUKKd6Uk%2BiIz1QYwi%2BeUwwY6pgH%2Fk5TFX9rYxpUtyWL6tktyUNTxH8YPHjQP4R4FDdy8glHTUsnXrASdatTn6ekCl2v4oJCscvF5s3c5jbIhqYAKhYgxQLR%2Fz7ggWo3YPXHnhhVLVIlQPYwNTxsN%2B%2F7T4EeTazNIlCYiZikDJ3B3SnmPrIlqJ3yjhhGpJpcZz9e7eHVMjjZeVVX0J64m5TpqFIVdwIpetZgznjzsFlHqXH7WDlwa0Y02&X-Amz-Signature=f825a377cc9cdb34de99a2cc43edddbd6dfde80d475a22d9dbd0f5be999c7064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHB3WKM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD3jtXAWjP3HqQMWyB5JDI9Fh8Jx3vvjFAqHj8miZezAiAxgfFHqEzfpkKmFIJTAItlTMUY%2BidxxRfTENbusoojDCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c6gEhG%2FZxHS5qjLKtwD9UPgkuRCo33TwYTFdRPJhmom8WmqJpmBUvo%2FkH7dFquj%2FKvo1BLedMQCyg1GUPnrINwk0c6DI2XxcztudaES5ZNkyeSTXdL5B6sJ36wkemK03cOM%2BzLJVorGNdCyVj1dXwe1%2Bt0tm23rI9XR3MvmTpfmN3ouBvlCCnjuh2Agv1%2F9WXwzq1pLyYy%2BKtREpK2wfn9Vwm7CgPD3zdBEp7UZOwC%2FHti0znAJGAQCeneBx1tGWhTlTd1Zr3wQvMuJzk8Wu0sC3Ohc07c6%2B%2BLmbs7vJqFse55YcjuR2q7wIus5rCPNj5Lu%2BIxvL7wm%2BS5SDGYOoYcDEbYNrCkapYZO1Mkq2nf3xM%2BDFWzLgGvcTtENPzKXamacUhW0aukq3UU6BwVxQ8qhMtVaihoLpJeNpwgYrmq5a6qnT%2B4rcXUrofE%2B1JCndi6yOwJfoHzbPo00JR0VLaq5dNa1T%2BiQw%2BxKUU5KGjs%2B%2BPbPJa%2F%2F%2BB5vHb7CsZUVI1agjXR0%2FL3CcmW0vNcyp8Re%2BQn5pJhJCdJ%2BnW%2F1f3FVpXx6n5n%2FLJiKBo6bIAY5jCWuaQTD7OZEvuELF%2ByaK9d%2Bvnx5gTOitBj7qlDaggVuGcBTotoCJ8zG1xF24BieSUKKd6Uk%2BiIz1QYwi%2BeUwwY6pgH%2Fk5TFX9rYxpUtyWL6tktyUNTxH8YPHjQP4R4FDdy8glHTUsnXrASdatTn6ekCl2v4oJCscvF5s3c5jbIhqYAKhYgxQLR%2Fz7ggWo3YPXHnhhVLVIlQPYwNTxsN%2B%2F7T4EeTazNIlCYiZikDJ3B3SnmPrIlqJ3yjhhGpJpcZz9e7eHVMjjZeVVX0J64m5TpqFIVdwIpetZgznjzsFlHqXH7WDlwa0Y02&X-Amz-Signature=4d7bb65d69bbab1fa3df408a3842c786abc538ec5a6adf68c3b2e68580fb654b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHB3WKM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD3jtXAWjP3HqQMWyB5JDI9Fh8Jx3vvjFAqHj8miZezAiAxgfFHqEzfpkKmFIJTAItlTMUY%2BidxxRfTENbusoojDCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c6gEhG%2FZxHS5qjLKtwD9UPgkuRCo33TwYTFdRPJhmom8WmqJpmBUvo%2FkH7dFquj%2FKvo1BLedMQCyg1GUPnrINwk0c6DI2XxcztudaES5ZNkyeSTXdL5B6sJ36wkemK03cOM%2BzLJVorGNdCyVj1dXwe1%2Bt0tm23rI9XR3MvmTpfmN3ouBvlCCnjuh2Agv1%2F9WXwzq1pLyYy%2BKtREpK2wfn9Vwm7CgPD3zdBEp7UZOwC%2FHti0znAJGAQCeneBx1tGWhTlTd1Zr3wQvMuJzk8Wu0sC3Ohc07c6%2B%2BLmbs7vJqFse55YcjuR2q7wIus5rCPNj5Lu%2BIxvL7wm%2BS5SDGYOoYcDEbYNrCkapYZO1Mkq2nf3xM%2BDFWzLgGvcTtENPzKXamacUhW0aukq3UU6BwVxQ8qhMtVaihoLpJeNpwgYrmq5a6qnT%2B4rcXUrofE%2B1JCndi6yOwJfoHzbPo00JR0VLaq5dNa1T%2BiQw%2BxKUU5KGjs%2B%2BPbPJa%2F%2F%2BB5vHb7CsZUVI1agjXR0%2FL3CcmW0vNcyp8Re%2BQn5pJhJCdJ%2BnW%2F1f3FVpXx6n5n%2FLJiKBo6bIAY5jCWuaQTD7OZEvuELF%2ByaK9d%2Bvnx5gTOitBj7qlDaggVuGcBTotoCJ8zG1xF24BieSUKKd6Uk%2BiIz1QYwi%2BeUwwY6pgH%2Fk5TFX9rYxpUtyWL6tktyUNTxH8YPHjQP4R4FDdy8glHTUsnXrASdatTn6ekCl2v4oJCscvF5s3c5jbIhqYAKhYgxQLR%2Fz7ggWo3YPXHnhhVLVIlQPYwNTxsN%2B%2F7T4EeTazNIlCYiZikDJ3B3SnmPrIlqJ3yjhhGpJpcZz9e7eHVMjjZeVVX0J64m5TpqFIVdwIpetZgznjzsFlHqXH7WDlwa0Y02&X-Amz-Signature=ee5b70eea411f7e43ca697a8ffee3152ab9d2688d22fe6cbf3bdd1af82338d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHB3WKM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD3jtXAWjP3HqQMWyB5JDI9Fh8Jx3vvjFAqHj8miZezAiAxgfFHqEzfpkKmFIJTAItlTMUY%2BidxxRfTENbusoojDCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c6gEhG%2FZxHS5qjLKtwD9UPgkuRCo33TwYTFdRPJhmom8WmqJpmBUvo%2FkH7dFquj%2FKvo1BLedMQCyg1GUPnrINwk0c6DI2XxcztudaES5ZNkyeSTXdL5B6sJ36wkemK03cOM%2BzLJVorGNdCyVj1dXwe1%2Bt0tm23rI9XR3MvmTpfmN3ouBvlCCnjuh2Agv1%2F9WXwzq1pLyYy%2BKtREpK2wfn9Vwm7CgPD3zdBEp7UZOwC%2FHti0znAJGAQCeneBx1tGWhTlTd1Zr3wQvMuJzk8Wu0sC3Ohc07c6%2B%2BLmbs7vJqFse55YcjuR2q7wIus5rCPNj5Lu%2BIxvL7wm%2BS5SDGYOoYcDEbYNrCkapYZO1Mkq2nf3xM%2BDFWzLgGvcTtENPzKXamacUhW0aukq3UU6BwVxQ8qhMtVaihoLpJeNpwgYrmq5a6qnT%2B4rcXUrofE%2B1JCndi6yOwJfoHzbPo00JR0VLaq5dNa1T%2BiQw%2BxKUU5KGjs%2B%2BPbPJa%2F%2F%2BB5vHb7CsZUVI1agjXR0%2FL3CcmW0vNcyp8Re%2BQn5pJhJCdJ%2BnW%2F1f3FVpXx6n5n%2FLJiKBo6bIAY5jCWuaQTD7OZEvuELF%2ByaK9d%2Bvnx5gTOitBj7qlDaggVuGcBTotoCJ8zG1xF24BieSUKKd6Uk%2BiIz1QYwi%2BeUwwY6pgH%2Fk5TFX9rYxpUtyWL6tktyUNTxH8YPHjQP4R4FDdy8glHTUsnXrASdatTn6ekCl2v4oJCscvF5s3c5jbIhqYAKhYgxQLR%2Fz7ggWo3YPXHnhhVLVIlQPYwNTxsN%2B%2F7T4EeTazNIlCYiZikDJ3B3SnmPrIlqJ3yjhhGpJpcZz9e7eHVMjjZeVVX0J64m5TpqFIVdwIpetZgznjzsFlHqXH7WDlwa0Y02&X-Amz-Signature=3c661c13d392c7950e308f462560a7bc054b28da01a4a011e1dbb1bd30e77c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHB3WKM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD3jtXAWjP3HqQMWyB5JDI9Fh8Jx3vvjFAqHj8miZezAiAxgfFHqEzfpkKmFIJTAItlTMUY%2BidxxRfTENbusoojDCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c6gEhG%2FZxHS5qjLKtwD9UPgkuRCo33TwYTFdRPJhmom8WmqJpmBUvo%2FkH7dFquj%2FKvo1BLedMQCyg1GUPnrINwk0c6DI2XxcztudaES5ZNkyeSTXdL5B6sJ36wkemK03cOM%2BzLJVorGNdCyVj1dXwe1%2Bt0tm23rI9XR3MvmTpfmN3ouBvlCCnjuh2Agv1%2F9WXwzq1pLyYy%2BKtREpK2wfn9Vwm7CgPD3zdBEp7UZOwC%2FHti0znAJGAQCeneBx1tGWhTlTd1Zr3wQvMuJzk8Wu0sC3Ohc07c6%2B%2BLmbs7vJqFse55YcjuR2q7wIus5rCPNj5Lu%2BIxvL7wm%2BS5SDGYOoYcDEbYNrCkapYZO1Mkq2nf3xM%2BDFWzLgGvcTtENPzKXamacUhW0aukq3UU6BwVxQ8qhMtVaihoLpJeNpwgYrmq5a6qnT%2B4rcXUrofE%2B1JCndi6yOwJfoHzbPo00JR0VLaq5dNa1T%2BiQw%2BxKUU5KGjs%2B%2BPbPJa%2F%2F%2BB5vHb7CsZUVI1agjXR0%2FL3CcmW0vNcyp8Re%2BQn5pJhJCdJ%2BnW%2F1f3FVpXx6n5n%2FLJiKBo6bIAY5jCWuaQTD7OZEvuELF%2ByaK9d%2Bvnx5gTOitBj7qlDaggVuGcBTotoCJ8zG1xF24BieSUKKd6Uk%2BiIz1QYwi%2BeUwwY6pgH%2Fk5TFX9rYxpUtyWL6tktyUNTxH8YPHjQP4R4FDdy8glHTUsnXrASdatTn6ekCl2v4oJCscvF5s3c5jbIhqYAKhYgxQLR%2Fz7ggWo3YPXHnhhVLVIlQPYwNTxsN%2B%2F7T4EeTazNIlCYiZikDJ3B3SnmPrIlqJ3yjhhGpJpcZz9e7eHVMjjZeVVX0J64m5TpqFIVdwIpetZgznjzsFlHqXH7WDlwa0Y02&X-Amz-Signature=e576076fd3180b3d05127db964a624eaac07a69c2f8b2959a1f1494cde1e9202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHB3WKM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD3jtXAWjP3HqQMWyB5JDI9Fh8Jx3vvjFAqHj8miZezAiAxgfFHqEzfpkKmFIJTAItlTMUY%2BidxxRfTENbusoojDCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c6gEhG%2FZxHS5qjLKtwD9UPgkuRCo33TwYTFdRPJhmom8WmqJpmBUvo%2FkH7dFquj%2FKvo1BLedMQCyg1GUPnrINwk0c6DI2XxcztudaES5ZNkyeSTXdL5B6sJ36wkemK03cOM%2BzLJVorGNdCyVj1dXwe1%2Bt0tm23rI9XR3MvmTpfmN3ouBvlCCnjuh2Agv1%2F9WXwzq1pLyYy%2BKtREpK2wfn9Vwm7CgPD3zdBEp7UZOwC%2FHti0znAJGAQCeneBx1tGWhTlTd1Zr3wQvMuJzk8Wu0sC3Ohc07c6%2B%2BLmbs7vJqFse55YcjuR2q7wIus5rCPNj5Lu%2BIxvL7wm%2BS5SDGYOoYcDEbYNrCkapYZO1Mkq2nf3xM%2BDFWzLgGvcTtENPzKXamacUhW0aukq3UU6BwVxQ8qhMtVaihoLpJeNpwgYrmq5a6qnT%2B4rcXUrofE%2B1JCndi6yOwJfoHzbPo00JR0VLaq5dNa1T%2BiQw%2BxKUU5KGjs%2B%2BPbPJa%2F%2F%2BB5vHb7CsZUVI1agjXR0%2FL3CcmW0vNcyp8Re%2BQn5pJhJCdJ%2BnW%2F1f3FVpXx6n5n%2FLJiKBo6bIAY5jCWuaQTD7OZEvuELF%2ByaK9d%2Bvnx5gTOitBj7qlDaggVuGcBTotoCJ8zG1xF24BieSUKKd6Uk%2BiIz1QYwi%2BeUwwY6pgH%2Fk5TFX9rYxpUtyWL6tktyUNTxH8YPHjQP4R4FDdy8glHTUsnXrASdatTn6ekCl2v4oJCscvF5s3c5jbIhqYAKhYgxQLR%2Fz7ggWo3YPXHnhhVLVIlQPYwNTxsN%2B%2F7T4EeTazNIlCYiZikDJ3B3SnmPrIlqJ3yjhhGpJpcZz9e7eHVMjjZeVVX0J64m5TpqFIVdwIpetZgznjzsFlHqXH7WDlwa0Y02&X-Amz-Signature=20b356b8dbf5d077c6ec1c6100dca735041ff59420caa1d20153a1484f792f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHB3WKM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD3jtXAWjP3HqQMWyB5JDI9Fh8Jx3vvjFAqHj8miZezAiAxgfFHqEzfpkKmFIJTAItlTMUY%2BidxxRfTENbusoojDCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c6gEhG%2FZxHS5qjLKtwD9UPgkuRCo33TwYTFdRPJhmom8WmqJpmBUvo%2FkH7dFquj%2FKvo1BLedMQCyg1GUPnrINwk0c6DI2XxcztudaES5ZNkyeSTXdL5B6sJ36wkemK03cOM%2BzLJVorGNdCyVj1dXwe1%2Bt0tm23rI9XR3MvmTpfmN3ouBvlCCnjuh2Agv1%2F9WXwzq1pLyYy%2BKtREpK2wfn9Vwm7CgPD3zdBEp7UZOwC%2FHti0znAJGAQCeneBx1tGWhTlTd1Zr3wQvMuJzk8Wu0sC3Ohc07c6%2B%2BLmbs7vJqFse55YcjuR2q7wIus5rCPNj5Lu%2BIxvL7wm%2BS5SDGYOoYcDEbYNrCkapYZO1Mkq2nf3xM%2BDFWzLgGvcTtENPzKXamacUhW0aukq3UU6BwVxQ8qhMtVaihoLpJeNpwgYrmq5a6qnT%2B4rcXUrofE%2B1JCndi6yOwJfoHzbPo00JR0VLaq5dNa1T%2BiQw%2BxKUU5KGjs%2B%2BPbPJa%2F%2F%2BB5vHb7CsZUVI1agjXR0%2FL3CcmW0vNcyp8Re%2BQn5pJhJCdJ%2BnW%2F1f3FVpXx6n5n%2FLJiKBo6bIAY5jCWuaQTD7OZEvuELF%2ByaK9d%2Bvnx5gTOitBj7qlDaggVuGcBTotoCJ8zG1xF24BieSUKKd6Uk%2BiIz1QYwi%2BeUwwY6pgH%2Fk5TFX9rYxpUtyWL6tktyUNTxH8YPHjQP4R4FDdy8glHTUsnXrASdatTn6ekCl2v4oJCscvF5s3c5jbIhqYAKhYgxQLR%2Fz7ggWo3YPXHnhhVLVIlQPYwNTxsN%2B%2F7T4EeTazNIlCYiZikDJ3B3SnmPrIlqJ3yjhhGpJpcZz9e7eHVMjjZeVVX0J64m5TpqFIVdwIpetZgznjzsFlHqXH7WDlwa0Y02&X-Amz-Signature=38bc0d88dc1230b1e0562e14a06170a2a471e5e943a431e79059fa33404119e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNHB3WKM%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD3jtXAWjP3HqQMWyB5JDI9Fh8Jx3vvjFAqHj8miZezAiAxgfFHqEzfpkKmFIJTAItlTMUY%2BidxxRfTENbusoojDCqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6c6gEhG%2FZxHS5qjLKtwD9UPgkuRCo33TwYTFdRPJhmom8WmqJpmBUvo%2FkH7dFquj%2FKvo1BLedMQCyg1GUPnrINwk0c6DI2XxcztudaES5ZNkyeSTXdL5B6sJ36wkemK03cOM%2BzLJVorGNdCyVj1dXwe1%2Bt0tm23rI9XR3MvmTpfmN3ouBvlCCnjuh2Agv1%2F9WXwzq1pLyYy%2BKtREpK2wfn9Vwm7CgPD3zdBEp7UZOwC%2FHti0znAJGAQCeneBx1tGWhTlTd1Zr3wQvMuJzk8Wu0sC3Ohc07c6%2B%2BLmbs7vJqFse55YcjuR2q7wIus5rCPNj5Lu%2BIxvL7wm%2BS5SDGYOoYcDEbYNrCkapYZO1Mkq2nf3xM%2BDFWzLgGvcTtENPzKXamacUhW0aukq3UU6BwVxQ8qhMtVaihoLpJeNpwgYrmq5a6qnT%2B4rcXUrofE%2B1JCndi6yOwJfoHzbPo00JR0VLaq5dNa1T%2BiQw%2BxKUU5KGjs%2B%2BPbPJa%2F%2F%2BB5vHb7CsZUVI1agjXR0%2FL3CcmW0vNcyp8Re%2BQn5pJhJCdJ%2BnW%2F1f3FVpXx6n5n%2FLJiKBo6bIAY5jCWuaQTD7OZEvuELF%2ByaK9d%2Bvnx5gTOitBj7qlDaggVuGcBTotoCJ8zG1xF24BieSUKKd6Uk%2BiIz1QYwi%2BeUwwY6pgH%2Fk5TFX9rYxpUtyWL6tktyUNTxH8YPHjQP4R4FDdy8glHTUsnXrASdatTn6ekCl2v4oJCscvF5s3c5jbIhqYAKhYgxQLR%2Fz7ggWo3YPXHnhhVLVIlQPYwNTxsN%2B%2F7T4EeTazNIlCYiZikDJ3B3SnmPrIlqJ3yjhhGpJpcZz9e7eHVMjjZeVVX0J64m5TpqFIVdwIpetZgznjzsFlHqXH7WDlwa0Y02&X-Amz-Signature=851d4c37f1ad224b9bf18b93ada9881d883304ae53d6153666337a7b5d2ba107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
