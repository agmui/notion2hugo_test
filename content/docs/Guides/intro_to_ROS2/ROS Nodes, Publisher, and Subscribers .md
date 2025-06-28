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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJ7QSVN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3h1vu3PcL3eJj5Zut2ZE%2FfALciOB0yG9u%2FmDblq3plAiEAo8tWidLQx9KJ3ofRJKYgcGN7T1XEXE%2BKj7SY%2BtUD31wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFIdnsRQ4ZNsa8RsyrcA2SLjb6%2FBW6%2BXeIuhGSNwORJHKFkIp3O4irmdmubPukrDiR8vMJkTf7DXCAeAk%2BSIw0lRFsMuwhatlABWIBM8PLgja0mT22m4EJoyhEEUSInpcQ18CKhN5wdJeGblZSP0CJDx9kVw%2FDZz%2BAs6wj0FjBjYU%2B2C4f2b5Im8txZvnHJYYfHD5s7%2FC6XfJ622Cyv7U1HMLpGRbPEkL8zWxs2XBODFQ333BYYJcGjM0tcOjmVdlIjViVe%2BDHiL1LzK4RhE05SNfL5e0SfvDdNG1eB3D0Nn08WwXfweRQS4Aj0nrCcCBiYuSYfy5nMkBrhwMps1NqO3Qk5WyFMViHs2X2zWy4gmrgMDD%2FMaxwxhUaL%2BYOs9nQyME62TXuhjl1EgZhpWAGWdsHn1bbLl7Z%2FAUy45IWXR70jkukK7BD2Lxq0ko6eaGQwRfAkf3QHcOJAqrlvRn%2Bg%2BZF07us8FV2w39MwX9x5mF7We9nU8mOXC6IoOUSsRA9r%2Fk7fG8QYbN9dnrT3WeV2U4g9pL9rv3XOo%2Bf2yVUnUcuO1H6gooSSn8WlPFlVphAvgOad8hdkHyjJ3vTzxlitJX9SfnNWIaefUrbqE6jjd0S6VN0cQfFUf4e%2FL5j31qyNqySZxB7CtLIgMOCg%2FsIGOqUBHmWO4k61XOoNuLl3IWg6MRAWbARTFUHG9IIYbFSWUTHKAZcSMcfKdMQCXDc4XtWDf9BNzGAxwEZeRHNUo3z6aRkTrgyMZjdJxcCzucTPT0bXZhCoS%2BPb%2FIPPliWlwZactnYkpcDyCs8zlKuMIzFhCWLQaj4mxPDGxwXBYkBTR1qE1ZAzjmFvPpmbKWGUFHZLkJo4J6dVm78wSZXAmxfj43MT%2Fk%2Fx&X-Amz-Signature=e45337fe4f678bd89f60bfda9d1c69acabf92bebf8c9479c9c6cb42e2cfc79bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJ7QSVN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3h1vu3PcL3eJj5Zut2ZE%2FfALciOB0yG9u%2FmDblq3plAiEAo8tWidLQx9KJ3ofRJKYgcGN7T1XEXE%2BKj7SY%2BtUD31wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFIdnsRQ4ZNsa8RsyrcA2SLjb6%2FBW6%2BXeIuhGSNwORJHKFkIp3O4irmdmubPukrDiR8vMJkTf7DXCAeAk%2BSIw0lRFsMuwhatlABWIBM8PLgja0mT22m4EJoyhEEUSInpcQ18CKhN5wdJeGblZSP0CJDx9kVw%2FDZz%2BAs6wj0FjBjYU%2B2C4f2b5Im8txZvnHJYYfHD5s7%2FC6XfJ622Cyv7U1HMLpGRbPEkL8zWxs2XBODFQ333BYYJcGjM0tcOjmVdlIjViVe%2BDHiL1LzK4RhE05SNfL5e0SfvDdNG1eB3D0Nn08WwXfweRQS4Aj0nrCcCBiYuSYfy5nMkBrhwMps1NqO3Qk5WyFMViHs2X2zWy4gmrgMDD%2FMaxwxhUaL%2BYOs9nQyME62TXuhjl1EgZhpWAGWdsHn1bbLl7Z%2FAUy45IWXR70jkukK7BD2Lxq0ko6eaGQwRfAkf3QHcOJAqrlvRn%2Bg%2BZF07us8FV2w39MwX9x5mF7We9nU8mOXC6IoOUSsRA9r%2Fk7fG8QYbN9dnrT3WeV2U4g9pL9rv3XOo%2Bf2yVUnUcuO1H6gooSSn8WlPFlVphAvgOad8hdkHyjJ3vTzxlitJX9SfnNWIaefUrbqE6jjd0S6VN0cQfFUf4e%2FL5j31qyNqySZxB7CtLIgMOCg%2FsIGOqUBHmWO4k61XOoNuLl3IWg6MRAWbARTFUHG9IIYbFSWUTHKAZcSMcfKdMQCXDc4XtWDf9BNzGAxwEZeRHNUo3z6aRkTrgyMZjdJxcCzucTPT0bXZhCoS%2BPb%2FIPPliWlwZactnYkpcDyCs8zlKuMIzFhCWLQaj4mxPDGxwXBYkBTR1qE1ZAzjmFvPpmbKWGUFHZLkJo4J6dVm78wSZXAmxfj43MT%2Fk%2Fx&X-Amz-Signature=60fff3dc923556b0c691b8ba0942f2c55a9f569389308eb13d445a74901d343d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJ7QSVN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3h1vu3PcL3eJj5Zut2ZE%2FfALciOB0yG9u%2FmDblq3plAiEAo8tWidLQx9KJ3ofRJKYgcGN7T1XEXE%2BKj7SY%2BtUD31wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFIdnsRQ4ZNsa8RsyrcA2SLjb6%2FBW6%2BXeIuhGSNwORJHKFkIp3O4irmdmubPukrDiR8vMJkTf7DXCAeAk%2BSIw0lRFsMuwhatlABWIBM8PLgja0mT22m4EJoyhEEUSInpcQ18CKhN5wdJeGblZSP0CJDx9kVw%2FDZz%2BAs6wj0FjBjYU%2B2C4f2b5Im8txZvnHJYYfHD5s7%2FC6XfJ622Cyv7U1HMLpGRbPEkL8zWxs2XBODFQ333BYYJcGjM0tcOjmVdlIjViVe%2BDHiL1LzK4RhE05SNfL5e0SfvDdNG1eB3D0Nn08WwXfweRQS4Aj0nrCcCBiYuSYfy5nMkBrhwMps1NqO3Qk5WyFMViHs2X2zWy4gmrgMDD%2FMaxwxhUaL%2BYOs9nQyME62TXuhjl1EgZhpWAGWdsHn1bbLl7Z%2FAUy45IWXR70jkukK7BD2Lxq0ko6eaGQwRfAkf3QHcOJAqrlvRn%2Bg%2BZF07us8FV2w39MwX9x5mF7We9nU8mOXC6IoOUSsRA9r%2Fk7fG8QYbN9dnrT3WeV2U4g9pL9rv3XOo%2Bf2yVUnUcuO1H6gooSSn8WlPFlVphAvgOad8hdkHyjJ3vTzxlitJX9SfnNWIaefUrbqE6jjd0S6VN0cQfFUf4e%2FL5j31qyNqySZxB7CtLIgMOCg%2FsIGOqUBHmWO4k61XOoNuLl3IWg6MRAWbARTFUHG9IIYbFSWUTHKAZcSMcfKdMQCXDc4XtWDf9BNzGAxwEZeRHNUo3z6aRkTrgyMZjdJxcCzucTPT0bXZhCoS%2BPb%2FIPPliWlwZactnYkpcDyCs8zlKuMIzFhCWLQaj4mxPDGxwXBYkBTR1qE1ZAzjmFvPpmbKWGUFHZLkJo4J6dVm78wSZXAmxfj43MT%2Fk%2Fx&X-Amz-Signature=3be6a818b699c6dbaf2eeccec47aeefeda20457eea368f879da9823183a8d942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJ7QSVN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3h1vu3PcL3eJj5Zut2ZE%2FfALciOB0yG9u%2FmDblq3plAiEAo8tWidLQx9KJ3ofRJKYgcGN7T1XEXE%2BKj7SY%2BtUD31wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFIdnsRQ4ZNsa8RsyrcA2SLjb6%2FBW6%2BXeIuhGSNwORJHKFkIp3O4irmdmubPukrDiR8vMJkTf7DXCAeAk%2BSIw0lRFsMuwhatlABWIBM8PLgja0mT22m4EJoyhEEUSInpcQ18CKhN5wdJeGblZSP0CJDx9kVw%2FDZz%2BAs6wj0FjBjYU%2B2C4f2b5Im8txZvnHJYYfHD5s7%2FC6XfJ622Cyv7U1HMLpGRbPEkL8zWxs2XBODFQ333BYYJcGjM0tcOjmVdlIjViVe%2BDHiL1LzK4RhE05SNfL5e0SfvDdNG1eB3D0Nn08WwXfweRQS4Aj0nrCcCBiYuSYfy5nMkBrhwMps1NqO3Qk5WyFMViHs2X2zWy4gmrgMDD%2FMaxwxhUaL%2BYOs9nQyME62TXuhjl1EgZhpWAGWdsHn1bbLl7Z%2FAUy45IWXR70jkukK7BD2Lxq0ko6eaGQwRfAkf3QHcOJAqrlvRn%2Bg%2BZF07us8FV2w39MwX9x5mF7We9nU8mOXC6IoOUSsRA9r%2Fk7fG8QYbN9dnrT3WeV2U4g9pL9rv3XOo%2Bf2yVUnUcuO1H6gooSSn8WlPFlVphAvgOad8hdkHyjJ3vTzxlitJX9SfnNWIaefUrbqE6jjd0S6VN0cQfFUf4e%2FL5j31qyNqySZxB7CtLIgMOCg%2FsIGOqUBHmWO4k61XOoNuLl3IWg6MRAWbARTFUHG9IIYbFSWUTHKAZcSMcfKdMQCXDc4XtWDf9BNzGAxwEZeRHNUo3z6aRkTrgyMZjdJxcCzucTPT0bXZhCoS%2BPb%2FIPPliWlwZactnYkpcDyCs8zlKuMIzFhCWLQaj4mxPDGxwXBYkBTR1qE1ZAzjmFvPpmbKWGUFHZLkJo4J6dVm78wSZXAmxfj43MT%2Fk%2Fx&X-Amz-Signature=dc00a54b4a6f78836f217e169164eb5dfb5b0fec77498a3d6bab49495fc1d2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJ7QSVN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3h1vu3PcL3eJj5Zut2ZE%2FfALciOB0yG9u%2FmDblq3plAiEAo8tWidLQx9KJ3ofRJKYgcGN7T1XEXE%2BKj7SY%2BtUD31wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFIdnsRQ4ZNsa8RsyrcA2SLjb6%2FBW6%2BXeIuhGSNwORJHKFkIp3O4irmdmubPukrDiR8vMJkTf7DXCAeAk%2BSIw0lRFsMuwhatlABWIBM8PLgja0mT22m4EJoyhEEUSInpcQ18CKhN5wdJeGblZSP0CJDx9kVw%2FDZz%2BAs6wj0FjBjYU%2B2C4f2b5Im8txZvnHJYYfHD5s7%2FC6XfJ622Cyv7U1HMLpGRbPEkL8zWxs2XBODFQ333BYYJcGjM0tcOjmVdlIjViVe%2BDHiL1LzK4RhE05SNfL5e0SfvDdNG1eB3D0Nn08WwXfweRQS4Aj0nrCcCBiYuSYfy5nMkBrhwMps1NqO3Qk5WyFMViHs2X2zWy4gmrgMDD%2FMaxwxhUaL%2BYOs9nQyME62TXuhjl1EgZhpWAGWdsHn1bbLl7Z%2FAUy45IWXR70jkukK7BD2Lxq0ko6eaGQwRfAkf3QHcOJAqrlvRn%2Bg%2BZF07us8FV2w39MwX9x5mF7We9nU8mOXC6IoOUSsRA9r%2Fk7fG8QYbN9dnrT3WeV2U4g9pL9rv3XOo%2Bf2yVUnUcuO1H6gooSSn8WlPFlVphAvgOad8hdkHyjJ3vTzxlitJX9SfnNWIaefUrbqE6jjd0S6VN0cQfFUf4e%2FL5j31qyNqySZxB7CtLIgMOCg%2FsIGOqUBHmWO4k61XOoNuLl3IWg6MRAWbARTFUHG9IIYbFSWUTHKAZcSMcfKdMQCXDc4XtWDf9BNzGAxwEZeRHNUo3z6aRkTrgyMZjdJxcCzucTPT0bXZhCoS%2BPb%2FIPPliWlwZactnYkpcDyCs8zlKuMIzFhCWLQaj4mxPDGxwXBYkBTR1qE1ZAzjmFvPpmbKWGUFHZLkJo4J6dVm78wSZXAmxfj43MT%2Fk%2Fx&X-Amz-Signature=0c56fdd4aadfb698b081375d61b252d466d161ff2ba7fcf9da716d4c1fc91a3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJ7QSVN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3h1vu3PcL3eJj5Zut2ZE%2FfALciOB0yG9u%2FmDblq3plAiEAo8tWidLQx9KJ3ofRJKYgcGN7T1XEXE%2BKj7SY%2BtUD31wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFIdnsRQ4ZNsa8RsyrcA2SLjb6%2FBW6%2BXeIuhGSNwORJHKFkIp3O4irmdmubPukrDiR8vMJkTf7DXCAeAk%2BSIw0lRFsMuwhatlABWIBM8PLgja0mT22m4EJoyhEEUSInpcQ18CKhN5wdJeGblZSP0CJDx9kVw%2FDZz%2BAs6wj0FjBjYU%2B2C4f2b5Im8txZvnHJYYfHD5s7%2FC6XfJ622Cyv7U1HMLpGRbPEkL8zWxs2XBODFQ333BYYJcGjM0tcOjmVdlIjViVe%2BDHiL1LzK4RhE05SNfL5e0SfvDdNG1eB3D0Nn08WwXfweRQS4Aj0nrCcCBiYuSYfy5nMkBrhwMps1NqO3Qk5WyFMViHs2X2zWy4gmrgMDD%2FMaxwxhUaL%2BYOs9nQyME62TXuhjl1EgZhpWAGWdsHn1bbLl7Z%2FAUy45IWXR70jkukK7BD2Lxq0ko6eaGQwRfAkf3QHcOJAqrlvRn%2Bg%2BZF07us8FV2w39MwX9x5mF7We9nU8mOXC6IoOUSsRA9r%2Fk7fG8QYbN9dnrT3WeV2U4g9pL9rv3XOo%2Bf2yVUnUcuO1H6gooSSn8WlPFlVphAvgOad8hdkHyjJ3vTzxlitJX9SfnNWIaefUrbqE6jjd0S6VN0cQfFUf4e%2FL5j31qyNqySZxB7CtLIgMOCg%2FsIGOqUBHmWO4k61XOoNuLl3IWg6MRAWbARTFUHG9IIYbFSWUTHKAZcSMcfKdMQCXDc4XtWDf9BNzGAxwEZeRHNUo3z6aRkTrgyMZjdJxcCzucTPT0bXZhCoS%2BPb%2FIPPliWlwZactnYkpcDyCs8zlKuMIzFhCWLQaj4mxPDGxwXBYkBTR1qE1ZAzjmFvPpmbKWGUFHZLkJo4J6dVm78wSZXAmxfj43MT%2Fk%2Fx&X-Amz-Signature=98fb185c8b94cba61757abaa7adf236708f09ccc633dcf119dd00013b24efbf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJ7QSVN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3h1vu3PcL3eJj5Zut2ZE%2FfALciOB0yG9u%2FmDblq3plAiEAo8tWidLQx9KJ3ofRJKYgcGN7T1XEXE%2BKj7SY%2BtUD31wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFIdnsRQ4ZNsa8RsyrcA2SLjb6%2FBW6%2BXeIuhGSNwORJHKFkIp3O4irmdmubPukrDiR8vMJkTf7DXCAeAk%2BSIw0lRFsMuwhatlABWIBM8PLgja0mT22m4EJoyhEEUSInpcQ18CKhN5wdJeGblZSP0CJDx9kVw%2FDZz%2BAs6wj0FjBjYU%2B2C4f2b5Im8txZvnHJYYfHD5s7%2FC6XfJ622Cyv7U1HMLpGRbPEkL8zWxs2XBODFQ333BYYJcGjM0tcOjmVdlIjViVe%2BDHiL1LzK4RhE05SNfL5e0SfvDdNG1eB3D0Nn08WwXfweRQS4Aj0nrCcCBiYuSYfy5nMkBrhwMps1NqO3Qk5WyFMViHs2X2zWy4gmrgMDD%2FMaxwxhUaL%2BYOs9nQyME62TXuhjl1EgZhpWAGWdsHn1bbLl7Z%2FAUy45IWXR70jkukK7BD2Lxq0ko6eaGQwRfAkf3QHcOJAqrlvRn%2Bg%2BZF07us8FV2w39MwX9x5mF7We9nU8mOXC6IoOUSsRA9r%2Fk7fG8QYbN9dnrT3WeV2U4g9pL9rv3XOo%2Bf2yVUnUcuO1H6gooSSn8WlPFlVphAvgOad8hdkHyjJ3vTzxlitJX9SfnNWIaefUrbqE6jjd0S6VN0cQfFUf4e%2FL5j31qyNqySZxB7CtLIgMOCg%2FsIGOqUBHmWO4k61XOoNuLl3IWg6MRAWbARTFUHG9IIYbFSWUTHKAZcSMcfKdMQCXDc4XtWDf9BNzGAxwEZeRHNUo3z6aRkTrgyMZjdJxcCzucTPT0bXZhCoS%2BPb%2FIPPliWlwZactnYkpcDyCs8zlKuMIzFhCWLQaj4mxPDGxwXBYkBTR1qE1ZAzjmFvPpmbKWGUFHZLkJo4J6dVm78wSZXAmxfj43MT%2Fk%2Fx&X-Amz-Signature=e405ceaf86e630e28d010dcd859c6e1b4dd7bfebdf8c9f1e3141c50de153ab91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMJ7QSVN%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3h1vu3PcL3eJj5Zut2ZE%2FfALciOB0yG9u%2FmDblq3plAiEAo8tWidLQx9KJ3ofRJKYgcGN7T1XEXE%2BKj7SY%2BtUD31wqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDFIdnsRQ4ZNsa8RsyrcA2SLjb6%2FBW6%2BXeIuhGSNwORJHKFkIp3O4irmdmubPukrDiR8vMJkTf7DXCAeAk%2BSIw0lRFsMuwhatlABWIBM8PLgja0mT22m4EJoyhEEUSInpcQ18CKhN5wdJeGblZSP0CJDx9kVw%2FDZz%2BAs6wj0FjBjYU%2B2C4f2b5Im8txZvnHJYYfHD5s7%2FC6XfJ622Cyv7U1HMLpGRbPEkL8zWxs2XBODFQ333BYYJcGjM0tcOjmVdlIjViVe%2BDHiL1LzK4RhE05SNfL5e0SfvDdNG1eB3D0Nn08WwXfweRQS4Aj0nrCcCBiYuSYfy5nMkBrhwMps1NqO3Qk5WyFMViHs2X2zWy4gmrgMDD%2FMaxwxhUaL%2BYOs9nQyME62TXuhjl1EgZhpWAGWdsHn1bbLl7Z%2FAUy45IWXR70jkukK7BD2Lxq0ko6eaGQwRfAkf3QHcOJAqrlvRn%2Bg%2BZF07us8FV2w39MwX9x5mF7We9nU8mOXC6IoOUSsRA9r%2Fk7fG8QYbN9dnrT3WeV2U4g9pL9rv3XOo%2Bf2yVUnUcuO1H6gooSSn8WlPFlVphAvgOad8hdkHyjJ3vTzxlitJX9SfnNWIaefUrbqE6jjd0S6VN0cQfFUf4e%2FL5j31qyNqySZxB7CtLIgMOCg%2FsIGOqUBHmWO4k61XOoNuLl3IWg6MRAWbARTFUHG9IIYbFSWUTHKAZcSMcfKdMQCXDc4XtWDf9BNzGAxwEZeRHNUo3z6aRkTrgyMZjdJxcCzucTPT0bXZhCoS%2BPb%2FIPPliWlwZactnYkpcDyCs8zlKuMIzFhCWLQaj4mxPDGxwXBYkBTR1qE1ZAzjmFvPpmbKWGUFHZLkJo4J6dVm78wSZXAmxfj43MT%2Fk%2Fx&X-Amz-Signature=5722bd031219ca3be57b0e29691660e5e58fa0fa360306124c18b9fd85647e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
