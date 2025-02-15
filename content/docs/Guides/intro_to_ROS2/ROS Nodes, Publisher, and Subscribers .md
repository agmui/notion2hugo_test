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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGHKOPI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD9qqXXfASk1UNVxQouP%2FUuaJFyKNDt6DV8OOE1XAyqnQIgca8x1tdwpcj6MeIRncNy31qRaKppDmvVAH%2FmA0A56Nkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKjoXNEV%2BLix2WmguircA%2FU4TBc4POhWDfMcME%2FmNXslXqKpTlXFRVQArKabRQgRiQgkwraGs%2FCntzwqZGCg%2Bz7gA5E1niVTs03FM6PEdMFhTwYwGuVl2FjhM9%2Foguw5qnC%2FDAVKs9E0Y0W5%2BfTvO06EBHGNuODuZ1sv7eTFW7dPm0zBULQPycSLzfmwBVyBJNyXAZIjVKACC40j4l3TlfIlGEnfHuWlYoCv9A3ej2M3%2FUZMlOzgJApW97hqFQwK%2BuRpvp%2FEyO8Mhwj98qNISPaencyLKUl6VhqZgqSSCrCiksCIPlCTTJL8zhK7cCmI1AU34u9tmWMtOujK6YDPsx9O2N8XrjBJw50uMrRNPN7KM2AcKhFFW4lI844qWiQCDSIqBnbaJ8RKMI8rx7o5bLUpXylrGV5YYZX7r%2BaVwtIvCymyFcGy2Ck6%2FJF5IjFtkIJ%2FQ8%2BEMHooeec6bz5abR6cuPPkWB008j75dQ%2BWQrZtEqhC4Jy2XBjZTxjqPrIdDre9wS8Mo5JxUSvB8kQY8UiR16FwUa%2BvS41sUZKy56NrDYcdmLhXH05LulaLyrAQKoX%2FcMwhwLFap9eiu4roc5Pru2j3sMxMigBkUDHjVPC77y3sdUsrWxQU%2FPX9AVFNyaTBfPKL8YtfpMcuMMTGwr0GOqUBJ6j8vG9wmGq0sGQVYk94Ie2UAs2Z8UdALQut1whoicXYMeoW5T2g40xhP5h%2BmQUBEzICQA%2Fw6boh9KPlDJQIEyJNLRk9Dq2kkj4MtkqCTe2jgHxm8CXpt76F8F2zfzF6gy7ZgZ5zGuksmUohj9veA%2FVZ7wfcrHxcv8ZPF6TibYV0nNDR9So0IqsKCTOdOaI3UMzLt4V9wa6TYn33jIH%2Bv458J%2F5O&X-Amz-Signature=dc4f9327cdd7bc984e477475d6a9a43ad23765f3bcd574195aef9e9f78066c31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGHKOPI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD9qqXXfASk1UNVxQouP%2FUuaJFyKNDt6DV8OOE1XAyqnQIgca8x1tdwpcj6MeIRncNy31qRaKppDmvVAH%2FmA0A56Nkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKjoXNEV%2BLix2WmguircA%2FU4TBc4POhWDfMcME%2FmNXslXqKpTlXFRVQArKabRQgRiQgkwraGs%2FCntzwqZGCg%2Bz7gA5E1niVTs03FM6PEdMFhTwYwGuVl2FjhM9%2Foguw5qnC%2FDAVKs9E0Y0W5%2BfTvO06EBHGNuODuZ1sv7eTFW7dPm0zBULQPycSLzfmwBVyBJNyXAZIjVKACC40j4l3TlfIlGEnfHuWlYoCv9A3ej2M3%2FUZMlOzgJApW97hqFQwK%2BuRpvp%2FEyO8Mhwj98qNISPaencyLKUl6VhqZgqSSCrCiksCIPlCTTJL8zhK7cCmI1AU34u9tmWMtOujK6YDPsx9O2N8XrjBJw50uMrRNPN7KM2AcKhFFW4lI844qWiQCDSIqBnbaJ8RKMI8rx7o5bLUpXylrGV5YYZX7r%2BaVwtIvCymyFcGy2Ck6%2FJF5IjFtkIJ%2FQ8%2BEMHooeec6bz5abR6cuPPkWB008j75dQ%2BWQrZtEqhC4Jy2XBjZTxjqPrIdDre9wS8Mo5JxUSvB8kQY8UiR16FwUa%2BvS41sUZKy56NrDYcdmLhXH05LulaLyrAQKoX%2FcMwhwLFap9eiu4roc5Pru2j3sMxMigBkUDHjVPC77y3sdUsrWxQU%2FPX9AVFNyaTBfPKL8YtfpMcuMMTGwr0GOqUBJ6j8vG9wmGq0sGQVYk94Ie2UAs2Z8UdALQut1whoicXYMeoW5T2g40xhP5h%2BmQUBEzICQA%2Fw6boh9KPlDJQIEyJNLRk9Dq2kkj4MtkqCTe2jgHxm8CXpt76F8F2zfzF6gy7ZgZ5zGuksmUohj9veA%2FVZ7wfcrHxcv8ZPF6TibYV0nNDR9So0IqsKCTOdOaI3UMzLt4V9wa6TYn33jIH%2Bv458J%2F5O&X-Amz-Signature=4e16015b01bfe03273067a4e0f902624e0ae5ceba63facbb32a96232f19717db&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGHKOPI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD9qqXXfASk1UNVxQouP%2FUuaJFyKNDt6DV8OOE1XAyqnQIgca8x1tdwpcj6MeIRncNy31qRaKppDmvVAH%2FmA0A56Nkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKjoXNEV%2BLix2WmguircA%2FU4TBc4POhWDfMcME%2FmNXslXqKpTlXFRVQArKabRQgRiQgkwraGs%2FCntzwqZGCg%2Bz7gA5E1niVTs03FM6PEdMFhTwYwGuVl2FjhM9%2Foguw5qnC%2FDAVKs9E0Y0W5%2BfTvO06EBHGNuODuZ1sv7eTFW7dPm0zBULQPycSLzfmwBVyBJNyXAZIjVKACC40j4l3TlfIlGEnfHuWlYoCv9A3ej2M3%2FUZMlOzgJApW97hqFQwK%2BuRpvp%2FEyO8Mhwj98qNISPaencyLKUl6VhqZgqSSCrCiksCIPlCTTJL8zhK7cCmI1AU34u9tmWMtOujK6YDPsx9O2N8XrjBJw50uMrRNPN7KM2AcKhFFW4lI844qWiQCDSIqBnbaJ8RKMI8rx7o5bLUpXylrGV5YYZX7r%2BaVwtIvCymyFcGy2Ck6%2FJF5IjFtkIJ%2FQ8%2BEMHooeec6bz5abR6cuPPkWB008j75dQ%2BWQrZtEqhC4Jy2XBjZTxjqPrIdDre9wS8Mo5JxUSvB8kQY8UiR16FwUa%2BvS41sUZKy56NrDYcdmLhXH05LulaLyrAQKoX%2FcMwhwLFap9eiu4roc5Pru2j3sMxMigBkUDHjVPC77y3sdUsrWxQU%2FPX9AVFNyaTBfPKL8YtfpMcuMMTGwr0GOqUBJ6j8vG9wmGq0sGQVYk94Ie2UAs2Z8UdALQut1whoicXYMeoW5T2g40xhP5h%2BmQUBEzICQA%2Fw6boh9KPlDJQIEyJNLRk9Dq2kkj4MtkqCTe2jgHxm8CXpt76F8F2zfzF6gy7ZgZ5zGuksmUohj9veA%2FVZ7wfcrHxcv8ZPF6TibYV0nNDR9So0IqsKCTOdOaI3UMzLt4V9wa6TYn33jIH%2Bv458J%2F5O&X-Amz-Signature=dfae3672bbcb08ef7217f850d2e557114ea85a1386753965bfcb740ee4460f39&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGHKOPI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD9qqXXfASk1UNVxQouP%2FUuaJFyKNDt6DV8OOE1XAyqnQIgca8x1tdwpcj6MeIRncNy31qRaKppDmvVAH%2FmA0A56Nkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKjoXNEV%2BLix2WmguircA%2FU4TBc4POhWDfMcME%2FmNXslXqKpTlXFRVQArKabRQgRiQgkwraGs%2FCntzwqZGCg%2Bz7gA5E1niVTs03FM6PEdMFhTwYwGuVl2FjhM9%2Foguw5qnC%2FDAVKs9E0Y0W5%2BfTvO06EBHGNuODuZ1sv7eTFW7dPm0zBULQPycSLzfmwBVyBJNyXAZIjVKACC40j4l3TlfIlGEnfHuWlYoCv9A3ej2M3%2FUZMlOzgJApW97hqFQwK%2BuRpvp%2FEyO8Mhwj98qNISPaencyLKUl6VhqZgqSSCrCiksCIPlCTTJL8zhK7cCmI1AU34u9tmWMtOujK6YDPsx9O2N8XrjBJw50uMrRNPN7KM2AcKhFFW4lI844qWiQCDSIqBnbaJ8RKMI8rx7o5bLUpXylrGV5YYZX7r%2BaVwtIvCymyFcGy2Ck6%2FJF5IjFtkIJ%2FQ8%2BEMHooeec6bz5abR6cuPPkWB008j75dQ%2BWQrZtEqhC4Jy2XBjZTxjqPrIdDre9wS8Mo5JxUSvB8kQY8UiR16FwUa%2BvS41sUZKy56NrDYcdmLhXH05LulaLyrAQKoX%2FcMwhwLFap9eiu4roc5Pru2j3sMxMigBkUDHjVPC77y3sdUsrWxQU%2FPX9AVFNyaTBfPKL8YtfpMcuMMTGwr0GOqUBJ6j8vG9wmGq0sGQVYk94Ie2UAs2Z8UdALQut1whoicXYMeoW5T2g40xhP5h%2BmQUBEzICQA%2Fw6boh9KPlDJQIEyJNLRk9Dq2kkj4MtkqCTe2jgHxm8CXpt76F8F2zfzF6gy7ZgZ5zGuksmUohj9veA%2FVZ7wfcrHxcv8ZPF6TibYV0nNDR9So0IqsKCTOdOaI3UMzLt4V9wa6TYn33jIH%2Bv458J%2F5O&X-Amz-Signature=0e4fb48f6e7acb9f0a2a736af6946ab57350da1aca52075b3fcf0e64e09ce374&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGHKOPI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD9qqXXfASk1UNVxQouP%2FUuaJFyKNDt6DV8OOE1XAyqnQIgca8x1tdwpcj6MeIRncNy31qRaKppDmvVAH%2FmA0A56Nkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKjoXNEV%2BLix2WmguircA%2FU4TBc4POhWDfMcME%2FmNXslXqKpTlXFRVQArKabRQgRiQgkwraGs%2FCntzwqZGCg%2Bz7gA5E1niVTs03FM6PEdMFhTwYwGuVl2FjhM9%2Foguw5qnC%2FDAVKs9E0Y0W5%2BfTvO06EBHGNuODuZ1sv7eTFW7dPm0zBULQPycSLzfmwBVyBJNyXAZIjVKACC40j4l3TlfIlGEnfHuWlYoCv9A3ej2M3%2FUZMlOzgJApW97hqFQwK%2BuRpvp%2FEyO8Mhwj98qNISPaencyLKUl6VhqZgqSSCrCiksCIPlCTTJL8zhK7cCmI1AU34u9tmWMtOujK6YDPsx9O2N8XrjBJw50uMrRNPN7KM2AcKhFFW4lI844qWiQCDSIqBnbaJ8RKMI8rx7o5bLUpXylrGV5YYZX7r%2BaVwtIvCymyFcGy2Ck6%2FJF5IjFtkIJ%2FQ8%2BEMHooeec6bz5abR6cuPPkWB008j75dQ%2BWQrZtEqhC4Jy2XBjZTxjqPrIdDre9wS8Mo5JxUSvB8kQY8UiR16FwUa%2BvS41sUZKy56NrDYcdmLhXH05LulaLyrAQKoX%2FcMwhwLFap9eiu4roc5Pru2j3sMxMigBkUDHjVPC77y3sdUsrWxQU%2FPX9AVFNyaTBfPKL8YtfpMcuMMTGwr0GOqUBJ6j8vG9wmGq0sGQVYk94Ie2UAs2Z8UdALQut1whoicXYMeoW5T2g40xhP5h%2BmQUBEzICQA%2Fw6boh9KPlDJQIEyJNLRk9Dq2kkj4MtkqCTe2jgHxm8CXpt76F8F2zfzF6gy7ZgZ5zGuksmUohj9veA%2FVZ7wfcrHxcv8ZPF6TibYV0nNDR9So0IqsKCTOdOaI3UMzLt4V9wa6TYn33jIH%2Bv458J%2F5O&X-Amz-Signature=7b37d2f330ab6b49a1d7eeacd8fd904f0e6147772304ff0839c7ac3490e70214&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGHKOPI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD9qqXXfASk1UNVxQouP%2FUuaJFyKNDt6DV8OOE1XAyqnQIgca8x1tdwpcj6MeIRncNy31qRaKppDmvVAH%2FmA0A56Nkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKjoXNEV%2BLix2WmguircA%2FU4TBc4POhWDfMcME%2FmNXslXqKpTlXFRVQArKabRQgRiQgkwraGs%2FCntzwqZGCg%2Bz7gA5E1niVTs03FM6PEdMFhTwYwGuVl2FjhM9%2Foguw5qnC%2FDAVKs9E0Y0W5%2BfTvO06EBHGNuODuZ1sv7eTFW7dPm0zBULQPycSLzfmwBVyBJNyXAZIjVKACC40j4l3TlfIlGEnfHuWlYoCv9A3ej2M3%2FUZMlOzgJApW97hqFQwK%2BuRpvp%2FEyO8Mhwj98qNISPaencyLKUl6VhqZgqSSCrCiksCIPlCTTJL8zhK7cCmI1AU34u9tmWMtOujK6YDPsx9O2N8XrjBJw50uMrRNPN7KM2AcKhFFW4lI844qWiQCDSIqBnbaJ8RKMI8rx7o5bLUpXylrGV5YYZX7r%2BaVwtIvCymyFcGy2Ck6%2FJF5IjFtkIJ%2FQ8%2BEMHooeec6bz5abR6cuPPkWB008j75dQ%2BWQrZtEqhC4Jy2XBjZTxjqPrIdDre9wS8Mo5JxUSvB8kQY8UiR16FwUa%2BvS41sUZKy56NrDYcdmLhXH05LulaLyrAQKoX%2FcMwhwLFap9eiu4roc5Pru2j3sMxMigBkUDHjVPC77y3sdUsrWxQU%2FPX9AVFNyaTBfPKL8YtfpMcuMMTGwr0GOqUBJ6j8vG9wmGq0sGQVYk94Ie2UAs2Z8UdALQut1whoicXYMeoW5T2g40xhP5h%2BmQUBEzICQA%2Fw6boh9KPlDJQIEyJNLRk9Dq2kkj4MtkqCTe2jgHxm8CXpt76F8F2zfzF6gy7ZgZ5zGuksmUohj9veA%2FVZ7wfcrHxcv8ZPF6TibYV0nNDR9So0IqsKCTOdOaI3UMzLt4V9wa6TYn33jIH%2Bv458J%2F5O&X-Amz-Signature=dbb39d29017970c32cb4b4fba25c3319df4c8dc72683e984a98d26e342ae4138&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGHKOPI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD9qqXXfASk1UNVxQouP%2FUuaJFyKNDt6DV8OOE1XAyqnQIgca8x1tdwpcj6MeIRncNy31qRaKppDmvVAH%2FmA0A56Nkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKjoXNEV%2BLix2WmguircA%2FU4TBc4POhWDfMcME%2FmNXslXqKpTlXFRVQArKabRQgRiQgkwraGs%2FCntzwqZGCg%2Bz7gA5E1niVTs03FM6PEdMFhTwYwGuVl2FjhM9%2Foguw5qnC%2FDAVKs9E0Y0W5%2BfTvO06EBHGNuODuZ1sv7eTFW7dPm0zBULQPycSLzfmwBVyBJNyXAZIjVKACC40j4l3TlfIlGEnfHuWlYoCv9A3ej2M3%2FUZMlOzgJApW97hqFQwK%2BuRpvp%2FEyO8Mhwj98qNISPaencyLKUl6VhqZgqSSCrCiksCIPlCTTJL8zhK7cCmI1AU34u9tmWMtOujK6YDPsx9O2N8XrjBJw50uMrRNPN7KM2AcKhFFW4lI844qWiQCDSIqBnbaJ8RKMI8rx7o5bLUpXylrGV5YYZX7r%2BaVwtIvCymyFcGy2Ck6%2FJF5IjFtkIJ%2FQ8%2BEMHooeec6bz5abR6cuPPkWB008j75dQ%2BWQrZtEqhC4Jy2XBjZTxjqPrIdDre9wS8Mo5JxUSvB8kQY8UiR16FwUa%2BvS41sUZKy56NrDYcdmLhXH05LulaLyrAQKoX%2FcMwhwLFap9eiu4roc5Pru2j3sMxMigBkUDHjVPC77y3sdUsrWxQU%2FPX9AVFNyaTBfPKL8YtfpMcuMMTGwr0GOqUBJ6j8vG9wmGq0sGQVYk94Ie2UAs2Z8UdALQut1whoicXYMeoW5T2g40xhP5h%2BmQUBEzICQA%2Fw6boh9KPlDJQIEyJNLRk9Dq2kkj4MtkqCTe2jgHxm8CXpt76F8F2zfzF6gy7ZgZ5zGuksmUohj9veA%2FVZ7wfcrHxcv8ZPF6TibYV0nNDR9So0IqsKCTOdOaI3UMzLt4V9wa6TYn33jIH%2Bv458J%2F5O&X-Amz-Signature=dde04cfd0ae31b6b062de48fb2db851ea1f2f4029b8289e79674653a0155020d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGHKOPI%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQD9qqXXfASk1UNVxQouP%2FUuaJFyKNDt6DV8OOE1XAyqnQIgca8x1tdwpcj6MeIRncNy31qRaKppDmvVAH%2FmA0A56Nkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKjoXNEV%2BLix2WmguircA%2FU4TBc4POhWDfMcME%2FmNXslXqKpTlXFRVQArKabRQgRiQgkwraGs%2FCntzwqZGCg%2Bz7gA5E1niVTs03FM6PEdMFhTwYwGuVl2FjhM9%2Foguw5qnC%2FDAVKs9E0Y0W5%2BfTvO06EBHGNuODuZ1sv7eTFW7dPm0zBULQPycSLzfmwBVyBJNyXAZIjVKACC40j4l3TlfIlGEnfHuWlYoCv9A3ej2M3%2FUZMlOzgJApW97hqFQwK%2BuRpvp%2FEyO8Mhwj98qNISPaencyLKUl6VhqZgqSSCrCiksCIPlCTTJL8zhK7cCmI1AU34u9tmWMtOujK6YDPsx9O2N8XrjBJw50uMrRNPN7KM2AcKhFFW4lI844qWiQCDSIqBnbaJ8RKMI8rx7o5bLUpXylrGV5YYZX7r%2BaVwtIvCymyFcGy2Ck6%2FJF5IjFtkIJ%2FQ8%2BEMHooeec6bz5abR6cuPPkWB008j75dQ%2BWQrZtEqhC4Jy2XBjZTxjqPrIdDre9wS8Mo5JxUSvB8kQY8UiR16FwUa%2BvS41sUZKy56NrDYcdmLhXH05LulaLyrAQKoX%2FcMwhwLFap9eiu4roc5Pru2j3sMxMigBkUDHjVPC77y3sdUsrWxQU%2FPX9AVFNyaTBfPKL8YtfpMcuMMTGwr0GOqUBJ6j8vG9wmGq0sGQVYk94Ie2UAs2Z8UdALQut1whoicXYMeoW5T2g40xhP5h%2BmQUBEzICQA%2Fw6boh9KPlDJQIEyJNLRk9Dq2kkj4MtkqCTe2jgHxm8CXpt76F8F2zfzF6gy7ZgZ5zGuksmUohj9veA%2FVZ7wfcrHxcv8ZPF6TibYV0nNDR9So0IqsKCTOdOaI3UMzLt4V9wa6TYn33jIH%2Bv458J%2F5O&X-Amz-Signature=56d45d414a104973829e6a92b85a405764bf138e43ae7ba565b0dcb350978ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
