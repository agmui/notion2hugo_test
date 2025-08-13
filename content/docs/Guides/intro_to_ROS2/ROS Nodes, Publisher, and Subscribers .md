---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AE7MD4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNwp6J7la9%2Bl7%2F%2BGJNFSYCocX5%2BcqPYzWYsNaiAnRMnAiBzVDZc6GfVV2hkEF3EeUz5GKB7sYI1%2B6vX7bDqvQIdmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMA7VaCKfkJYd5gu%2FJKtwDdMNZXK5acoQlNzjPevhsYcrO6iNZ6L00K%2BcAN22kft%2F6jgAYIn0SLOXUNS3go1cOehch9%2BM6JffVVIFokruEe88PjRDT0GKZr4NsvBNFaWankG1XWEAoOppvJBIedhdaMB0B949cymiFtSv67H3LEOXZ2wun2l9gZG1m%2F%2Bd%2BMCgzCs72lpKkzDArkbTtwn2Q012JbksbcwO9UQ%2F1AiuWn%2B0JXYfGqglm0p2HfK9N1dOynSNLVuTt9Vyu1N%2FJRoc4NaEzA%2FnlZbRslDSjoZWx68wKQhYXog7ZmBwI08WgSzetwf98Agca9QF4foDRCdoH1EWwWgMryJk0dgNZrGkxXO9ZgcAx6EvGTXNka8k30YiGf1D3mUilsiW%2Bh83bp7CKhV3Kh77pYMUIgSOvxRcmIyBsDCMu9eRt4n6uID4eI%2Bz3UWmSDwZAlqeqdayrUhvU0YLI2OVOVgIC1sAFEfex%2FYaEEgyPtCQHbqnWpVsaXIP%2F7bNIy4BTGdM5%2B9hVT6t8tS2%2BIvSFwJorlsIkqqh%2B41HwL2EAP6zskX4rXpnpsYPOmaO7e8c2FsVE%2B1YLCYgoxM%2BkPMurtT3sBI3D1kjQltIS2Cae3CWZd9vo5YnVjxJkOPfRdWuZmhwAIPYw%2FMXzxAY6pgGmdseUngT4uSmL6Z7W7ZfYflsnXGlzq082CziiMK%2F%2BJvIL%2BlRBSpmgR28Q1437cptzrdIAuK0iKWK7%2B%2FOluoUWSIT8eSMxtZHKCv%2FiS8lZGjCcbLf54Sum7OeuCsB5ZIFuJoXsgl%2BZOmd%2BkHrZHa2gLdxrb%2FB3M2n1k%2BHeSiCXLQ%2FNgtzGWCgSKUvyaiCme58qT4vPnFRQdqAmtZtcmtRJ9prXF7wU&X-Amz-Signature=f593816d59f1da35ce614bf71452a0aa128a0e9ff4cdad9609dc008e61e51dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AE7MD4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNwp6J7la9%2Bl7%2F%2BGJNFSYCocX5%2BcqPYzWYsNaiAnRMnAiBzVDZc6GfVV2hkEF3EeUz5GKB7sYI1%2B6vX7bDqvQIdmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMA7VaCKfkJYd5gu%2FJKtwDdMNZXK5acoQlNzjPevhsYcrO6iNZ6L00K%2BcAN22kft%2F6jgAYIn0SLOXUNS3go1cOehch9%2BM6JffVVIFokruEe88PjRDT0GKZr4NsvBNFaWankG1XWEAoOppvJBIedhdaMB0B949cymiFtSv67H3LEOXZ2wun2l9gZG1m%2F%2Bd%2BMCgzCs72lpKkzDArkbTtwn2Q012JbksbcwO9UQ%2F1AiuWn%2B0JXYfGqglm0p2HfK9N1dOynSNLVuTt9Vyu1N%2FJRoc4NaEzA%2FnlZbRslDSjoZWx68wKQhYXog7ZmBwI08WgSzetwf98Agca9QF4foDRCdoH1EWwWgMryJk0dgNZrGkxXO9ZgcAx6EvGTXNka8k30YiGf1D3mUilsiW%2Bh83bp7CKhV3Kh77pYMUIgSOvxRcmIyBsDCMu9eRt4n6uID4eI%2Bz3UWmSDwZAlqeqdayrUhvU0YLI2OVOVgIC1sAFEfex%2FYaEEgyPtCQHbqnWpVsaXIP%2F7bNIy4BTGdM5%2B9hVT6t8tS2%2BIvSFwJorlsIkqqh%2B41HwL2EAP6zskX4rXpnpsYPOmaO7e8c2FsVE%2B1YLCYgoxM%2BkPMurtT3sBI3D1kjQltIS2Cae3CWZd9vo5YnVjxJkOPfRdWuZmhwAIPYw%2FMXzxAY6pgGmdseUngT4uSmL6Z7W7ZfYflsnXGlzq082CziiMK%2F%2BJvIL%2BlRBSpmgR28Q1437cptzrdIAuK0iKWK7%2B%2FOluoUWSIT8eSMxtZHKCv%2FiS8lZGjCcbLf54Sum7OeuCsB5ZIFuJoXsgl%2BZOmd%2BkHrZHa2gLdxrb%2FB3M2n1k%2BHeSiCXLQ%2FNgtzGWCgSKUvyaiCme58qT4vPnFRQdqAmtZtcmtRJ9prXF7wU&X-Amz-Signature=7e09d5e4f2391ce7500dde6b33c5c5e5b0e3c906d986bed911a8d2a74a5131a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AE7MD4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNwp6J7la9%2Bl7%2F%2BGJNFSYCocX5%2BcqPYzWYsNaiAnRMnAiBzVDZc6GfVV2hkEF3EeUz5GKB7sYI1%2B6vX7bDqvQIdmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMA7VaCKfkJYd5gu%2FJKtwDdMNZXK5acoQlNzjPevhsYcrO6iNZ6L00K%2BcAN22kft%2F6jgAYIn0SLOXUNS3go1cOehch9%2BM6JffVVIFokruEe88PjRDT0GKZr4NsvBNFaWankG1XWEAoOppvJBIedhdaMB0B949cymiFtSv67H3LEOXZ2wun2l9gZG1m%2F%2Bd%2BMCgzCs72lpKkzDArkbTtwn2Q012JbksbcwO9UQ%2F1AiuWn%2B0JXYfGqglm0p2HfK9N1dOynSNLVuTt9Vyu1N%2FJRoc4NaEzA%2FnlZbRslDSjoZWx68wKQhYXog7ZmBwI08WgSzetwf98Agca9QF4foDRCdoH1EWwWgMryJk0dgNZrGkxXO9ZgcAx6EvGTXNka8k30YiGf1D3mUilsiW%2Bh83bp7CKhV3Kh77pYMUIgSOvxRcmIyBsDCMu9eRt4n6uID4eI%2Bz3UWmSDwZAlqeqdayrUhvU0YLI2OVOVgIC1sAFEfex%2FYaEEgyPtCQHbqnWpVsaXIP%2F7bNIy4BTGdM5%2B9hVT6t8tS2%2BIvSFwJorlsIkqqh%2B41HwL2EAP6zskX4rXpnpsYPOmaO7e8c2FsVE%2B1YLCYgoxM%2BkPMurtT3sBI3D1kjQltIS2Cae3CWZd9vo5YnVjxJkOPfRdWuZmhwAIPYw%2FMXzxAY6pgGmdseUngT4uSmL6Z7W7ZfYflsnXGlzq082CziiMK%2F%2BJvIL%2BlRBSpmgR28Q1437cptzrdIAuK0iKWK7%2B%2FOluoUWSIT8eSMxtZHKCv%2FiS8lZGjCcbLf54Sum7OeuCsB5ZIFuJoXsgl%2BZOmd%2BkHrZHa2gLdxrb%2FB3M2n1k%2BHeSiCXLQ%2FNgtzGWCgSKUvyaiCme58qT4vPnFRQdqAmtZtcmtRJ9prXF7wU&X-Amz-Signature=9f7d1a269dceedba7a5ffeba7f44429d4bfb3f8be8061164076aaf52764a901f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AE7MD4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNwp6J7la9%2Bl7%2F%2BGJNFSYCocX5%2BcqPYzWYsNaiAnRMnAiBzVDZc6GfVV2hkEF3EeUz5GKB7sYI1%2B6vX7bDqvQIdmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMA7VaCKfkJYd5gu%2FJKtwDdMNZXK5acoQlNzjPevhsYcrO6iNZ6L00K%2BcAN22kft%2F6jgAYIn0SLOXUNS3go1cOehch9%2BM6JffVVIFokruEe88PjRDT0GKZr4NsvBNFaWankG1XWEAoOppvJBIedhdaMB0B949cymiFtSv67H3LEOXZ2wun2l9gZG1m%2F%2Bd%2BMCgzCs72lpKkzDArkbTtwn2Q012JbksbcwO9UQ%2F1AiuWn%2B0JXYfGqglm0p2HfK9N1dOynSNLVuTt9Vyu1N%2FJRoc4NaEzA%2FnlZbRslDSjoZWx68wKQhYXog7ZmBwI08WgSzetwf98Agca9QF4foDRCdoH1EWwWgMryJk0dgNZrGkxXO9ZgcAx6EvGTXNka8k30YiGf1D3mUilsiW%2Bh83bp7CKhV3Kh77pYMUIgSOvxRcmIyBsDCMu9eRt4n6uID4eI%2Bz3UWmSDwZAlqeqdayrUhvU0YLI2OVOVgIC1sAFEfex%2FYaEEgyPtCQHbqnWpVsaXIP%2F7bNIy4BTGdM5%2B9hVT6t8tS2%2BIvSFwJorlsIkqqh%2B41HwL2EAP6zskX4rXpnpsYPOmaO7e8c2FsVE%2B1YLCYgoxM%2BkPMurtT3sBI3D1kjQltIS2Cae3CWZd9vo5YnVjxJkOPfRdWuZmhwAIPYw%2FMXzxAY6pgGmdseUngT4uSmL6Z7W7ZfYflsnXGlzq082CziiMK%2F%2BJvIL%2BlRBSpmgR28Q1437cptzrdIAuK0iKWK7%2B%2FOluoUWSIT8eSMxtZHKCv%2FiS8lZGjCcbLf54Sum7OeuCsB5ZIFuJoXsgl%2BZOmd%2BkHrZHa2gLdxrb%2FB3M2n1k%2BHeSiCXLQ%2FNgtzGWCgSKUvyaiCme58qT4vPnFRQdqAmtZtcmtRJ9prXF7wU&X-Amz-Signature=da6faa1e111f16a8675529c9b91adfe1aa668c079a7711159ac20343dcf2388d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AE7MD4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNwp6J7la9%2Bl7%2F%2BGJNFSYCocX5%2BcqPYzWYsNaiAnRMnAiBzVDZc6GfVV2hkEF3EeUz5GKB7sYI1%2B6vX7bDqvQIdmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMA7VaCKfkJYd5gu%2FJKtwDdMNZXK5acoQlNzjPevhsYcrO6iNZ6L00K%2BcAN22kft%2F6jgAYIn0SLOXUNS3go1cOehch9%2BM6JffVVIFokruEe88PjRDT0GKZr4NsvBNFaWankG1XWEAoOppvJBIedhdaMB0B949cymiFtSv67H3LEOXZ2wun2l9gZG1m%2F%2Bd%2BMCgzCs72lpKkzDArkbTtwn2Q012JbksbcwO9UQ%2F1AiuWn%2B0JXYfGqglm0p2HfK9N1dOynSNLVuTt9Vyu1N%2FJRoc4NaEzA%2FnlZbRslDSjoZWx68wKQhYXog7ZmBwI08WgSzetwf98Agca9QF4foDRCdoH1EWwWgMryJk0dgNZrGkxXO9ZgcAx6EvGTXNka8k30YiGf1D3mUilsiW%2Bh83bp7CKhV3Kh77pYMUIgSOvxRcmIyBsDCMu9eRt4n6uID4eI%2Bz3UWmSDwZAlqeqdayrUhvU0YLI2OVOVgIC1sAFEfex%2FYaEEgyPtCQHbqnWpVsaXIP%2F7bNIy4BTGdM5%2B9hVT6t8tS2%2BIvSFwJorlsIkqqh%2B41HwL2EAP6zskX4rXpnpsYPOmaO7e8c2FsVE%2B1YLCYgoxM%2BkPMurtT3sBI3D1kjQltIS2Cae3CWZd9vo5YnVjxJkOPfRdWuZmhwAIPYw%2FMXzxAY6pgGmdseUngT4uSmL6Z7W7ZfYflsnXGlzq082CziiMK%2F%2BJvIL%2BlRBSpmgR28Q1437cptzrdIAuK0iKWK7%2B%2FOluoUWSIT8eSMxtZHKCv%2FiS8lZGjCcbLf54Sum7OeuCsB5ZIFuJoXsgl%2BZOmd%2BkHrZHa2gLdxrb%2FB3M2n1k%2BHeSiCXLQ%2FNgtzGWCgSKUvyaiCme58qT4vPnFRQdqAmtZtcmtRJ9prXF7wU&X-Amz-Signature=8af31fddfc6ed6eb419a017d1ecfa78ab2f3ab89fe67c1d8d1dde9849826cff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AE7MD4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNwp6J7la9%2Bl7%2F%2BGJNFSYCocX5%2BcqPYzWYsNaiAnRMnAiBzVDZc6GfVV2hkEF3EeUz5GKB7sYI1%2B6vX7bDqvQIdmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMA7VaCKfkJYd5gu%2FJKtwDdMNZXK5acoQlNzjPevhsYcrO6iNZ6L00K%2BcAN22kft%2F6jgAYIn0SLOXUNS3go1cOehch9%2BM6JffVVIFokruEe88PjRDT0GKZr4NsvBNFaWankG1XWEAoOppvJBIedhdaMB0B949cymiFtSv67H3LEOXZ2wun2l9gZG1m%2F%2Bd%2BMCgzCs72lpKkzDArkbTtwn2Q012JbksbcwO9UQ%2F1AiuWn%2B0JXYfGqglm0p2HfK9N1dOynSNLVuTt9Vyu1N%2FJRoc4NaEzA%2FnlZbRslDSjoZWx68wKQhYXog7ZmBwI08WgSzetwf98Agca9QF4foDRCdoH1EWwWgMryJk0dgNZrGkxXO9ZgcAx6EvGTXNka8k30YiGf1D3mUilsiW%2Bh83bp7CKhV3Kh77pYMUIgSOvxRcmIyBsDCMu9eRt4n6uID4eI%2Bz3UWmSDwZAlqeqdayrUhvU0YLI2OVOVgIC1sAFEfex%2FYaEEgyPtCQHbqnWpVsaXIP%2F7bNIy4BTGdM5%2B9hVT6t8tS2%2BIvSFwJorlsIkqqh%2B41HwL2EAP6zskX4rXpnpsYPOmaO7e8c2FsVE%2B1YLCYgoxM%2BkPMurtT3sBI3D1kjQltIS2Cae3CWZd9vo5YnVjxJkOPfRdWuZmhwAIPYw%2FMXzxAY6pgGmdseUngT4uSmL6Z7W7ZfYflsnXGlzq082CziiMK%2F%2BJvIL%2BlRBSpmgR28Q1437cptzrdIAuK0iKWK7%2B%2FOluoUWSIT8eSMxtZHKCv%2FiS8lZGjCcbLf54Sum7OeuCsB5ZIFuJoXsgl%2BZOmd%2BkHrZHa2gLdxrb%2FB3M2n1k%2BHeSiCXLQ%2FNgtzGWCgSKUvyaiCme58qT4vPnFRQdqAmtZtcmtRJ9prXF7wU&X-Amz-Signature=6dd987089a1c237af5fca85fc1494de00663cfb4fa4a9b3fb588e77084bdf315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AE7MD4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNwp6J7la9%2Bl7%2F%2BGJNFSYCocX5%2BcqPYzWYsNaiAnRMnAiBzVDZc6GfVV2hkEF3EeUz5GKB7sYI1%2B6vX7bDqvQIdmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMA7VaCKfkJYd5gu%2FJKtwDdMNZXK5acoQlNzjPevhsYcrO6iNZ6L00K%2BcAN22kft%2F6jgAYIn0SLOXUNS3go1cOehch9%2BM6JffVVIFokruEe88PjRDT0GKZr4NsvBNFaWankG1XWEAoOppvJBIedhdaMB0B949cymiFtSv67H3LEOXZ2wun2l9gZG1m%2F%2Bd%2BMCgzCs72lpKkzDArkbTtwn2Q012JbksbcwO9UQ%2F1AiuWn%2B0JXYfGqglm0p2HfK9N1dOynSNLVuTt9Vyu1N%2FJRoc4NaEzA%2FnlZbRslDSjoZWx68wKQhYXog7ZmBwI08WgSzetwf98Agca9QF4foDRCdoH1EWwWgMryJk0dgNZrGkxXO9ZgcAx6EvGTXNka8k30YiGf1D3mUilsiW%2Bh83bp7CKhV3Kh77pYMUIgSOvxRcmIyBsDCMu9eRt4n6uID4eI%2Bz3UWmSDwZAlqeqdayrUhvU0YLI2OVOVgIC1sAFEfex%2FYaEEgyPtCQHbqnWpVsaXIP%2F7bNIy4BTGdM5%2B9hVT6t8tS2%2BIvSFwJorlsIkqqh%2B41HwL2EAP6zskX4rXpnpsYPOmaO7e8c2FsVE%2B1YLCYgoxM%2BkPMurtT3sBI3D1kjQltIS2Cae3CWZd9vo5YnVjxJkOPfRdWuZmhwAIPYw%2FMXzxAY6pgGmdseUngT4uSmL6Z7W7ZfYflsnXGlzq082CziiMK%2F%2BJvIL%2BlRBSpmgR28Q1437cptzrdIAuK0iKWK7%2B%2FOluoUWSIT8eSMxtZHKCv%2FiS8lZGjCcbLf54Sum7OeuCsB5ZIFuJoXsgl%2BZOmd%2BkHrZHa2gLdxrb%2FB3M2n1k%2BHeSiCXLQ%2FNgtzGWCgSKUvyaiCme58qT4vPnFRQdqAmtZtcmtRJ9prXF7wU&X-Amz-Signature=ac34131694c6824a1a5e6715cbf70c2b421fa4ccbfeda6ebb3623c4f39ec8eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6AE7MD4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T200958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNwp6J7la9%2Bl7%2F%2BGJNFSYCocX5%2BcqPYzWYsNaiAnRMnAiBzVDZc6GfVV2hkEF3EeUz5GKB7sYI1%2B6vX7bDqvQIdmSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMA7VaCKfkJYd5gu%2FJKtwDdMNZXK5acoQlNzjPevhsYcrO6iNZ6L00K%2BcAN22kft%2F6jgAYIn0SLOXUNS3go1cOehch9%2BM6JffVVIFokruEe88PjRDT0GKZr4NsvBNFaWankG1XWEAoOppvJBIedhdaMB0B949cymiFtSv67H3LEOXZ2wun2l9gZG1m%2F%2Bd%2BMCgzCs72lpKkzDArkbTtwn2Q012JbksbcwO9UQ%2F1AiuWn%2B0JXYfGqglm0p2HfK9N1dOynSNLVuTt9Vyu1N%2FJRoc4NaEzA%2FnlZbRslDSjoZWx68wKQhYXog7ZmBwI08WgSzetwf98Agca9QF4foDRCdoH1EWwWgMryJk0dgNZrGkxXO9ZgcAx6EvGTXNka8k30YiGf1D3mUilsiW%2Bh83bp7CKhV3Kh77pYMUIgSOvxRcmIyBsDCMu9eRt4n6uID4eI%2Bz3UWmSDwZAlqeqdayrUhvU0YLI2OVOVgIC1sAFEfex%2FYaEEgyPtCQHbqnWpVsaXIP%2F7bNIy4BTGdM5%2B9hVT6t8tS2%2BIvSFwJorlsIkqqh%2B41HwL2EAP6zskX4rXpnpsYPOmaO7e8c2FsVE%2B1YLCYgoxM%2BkPMurtT3sBI3D1kjQltIS2Cae3CWZd9vo5YnVjxJkOPfRdWuZmhwAIPYw%2FMXzxAY6pgGmdseUngT4uSmL6Z7W7ZfYflsnXGlzq082CziiMK%2F%2BJvIL%2BlRBSpmgR28Q1437cptzrdIAuK0iKWK7%2B%2FOluoUWSIT8eSMxtZHKCv%2FiS8lZGjCcbLf54Sum7OeuCsB5ZIFuJoXsgl%2BZOmd%2BkHrZHa2gLdxrb%2FB3M2n1k%2BHeSiCXLQ%2FNgtzGWCgSKUvyaiCme58qT4vPnFRQdqAmtZtcmtRJ9prXF7wU&X-Amz-Signature=f9b081c57e1ef71a70717b14c49de8fba0898f32ae152a861291cdcfb11f0feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
