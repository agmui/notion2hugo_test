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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQK5SA2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICZLp6bK1WonWI2bnQDHMqJlTUWb%2Fol2hM91W4vSW2h%2BAiEAxCMAZ5ffpAqFsBlnqHDBKFmZkRGzVkpZrAikdzbR5ZoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJSZ042Sm9q9eCcRSrcA9lzYQ%2Bg%2FY85htdnFIS1Huzf%2Btbhs89mcXAkPYZx7VcBkFxgYlp49TKce5vQKY6jwSL7phtUh8oxRMiPrEYhHPgXRlhXeUEXGkasydl8Es%2B3j4JFkb81uDN3slyfKCsjML4WKEdFGoC3dBd0v0Rq2WDwJ3jEVCFDgm%2FbmiwpG4LL1R4pvfiBwRfkU5wKNi%2FoKdWLyi%2BtAF1Qo6RLPKsab0ZW%2BA9%2BCX2XuwgZtOrdwkOK16SptKgeTWljtMfgqpPeqIcDNGlkd7xOXfk7G9pDpb6SAf2jtuI41yAJMsmbLLySgff3I8evjyqZBJ7FfPegPtNwc0FZ2UIuU%2Bdkh430ik5tGwvvIndci6EY3HFFsw35s85flSsyUxUhrf%2BeF6dH9rrVHDTSrAERC6XpshapVhKD288Ucvu%2BWoKDO65%2BRHUuzVmEL6ftcb2agk7TWXDAM7zJB2KmTOj2p%2BfdEKrPBo7b9%2BELciE8XXCBJiahxpCiTAaK4Mh9%2Fr0I57XEehxdf7lUaOPg630Y65OhstGXHoettTv%2FsQ282bDxuZ0u9lnPXLCBi66kVVPak6gqc2dJdzxXi6ReawFLw9uk6TrhAnopl7liAq9q4KoJRyWVLK9WNFNmWRQPCRw%2F7%2F2AMKfOwb4GOqUB34vNlBSnBuYlC30Y4ZdIo6UBASSm1%2FxVqsx5XtF2gLiOzwqtHZLWXsHuE6XkiZq5Y6HCKnpoFVpvhl1LEPkF04GCFpiU9H7YdMoE5d%2BM8p351v3v41YCkLZjh3fRVvgShpRR7lomi4gXcjUn1nhhO7o5EYo2EtivWcnpvhU9rP1xl3kA4v5aIY%2BRceMeGqvDt7BQe5TEuq7LIxb2ECYx5SM6%2Bsyn&X-Amz-Signature=0b43136af95a3918ec93c7302631d5272e7695fa7101d42eae6a60d15940151e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQK5SA2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICZLp6bK1WonWI2bnQDHMqJlTUWb%2Fol2hM91W4vSW2h%2BAiEAxCMAZ5ffpAqFsBlnqHDBKFmZkRGzVkpZrAikdzbR5ZoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJSZ042Sm9q9eCcRSrcA9lzYQ%2Bg%2FY85htdnFIS1Huzf%2Btbhs89mcXAkPYZx7VcBkFxgYlp49TKce5vQKY6jwSL7phtUh8oxRMiPrEYhHPgXRlhXeUEXGkasydl8Es%2B3j4JFkb81uDN3slyfKCsjML4WKEdFGoC3dBd0v0Rq2WDwJ3jEVCFDgm%2FbmiwpG4LL1R4pvfiBwRfkU5wKNi%2FoKdWLyi%2BtAF1Qo6RLPKsab0ZW%2BA9%2BCX2XuwgZtOrdwkOK16SptKgeTWljtMfgqpPeqIcDNGlkd7xOXfk7G9pDpb6SAf2jtuI41yAJMsmbLLySgff3I8evjyqZBJ7FfPegPtNwc0FZ2UIuU%2Bdkh430ik5tGwvvIndci6EY3HFFsw35s85flSsyUxUhrf%2BeF6dH9rrVHDTSrAERC6XpshapVhKD288Ucvu%2BWoKDO65%2BRHUuzVmEL6ftcb2agk7TWXDAM7zJB2KmTOj2p%2BfdEKrPBo7b9%2BELciE8XXCBJiahxpCiTAaK4Mh9%2Fr0I57XEehxdf7lUaOPg630Y65OhstGXHoettTv%2FsQ282bDxuZ0u9lnPXLCBi66kVVPak6gqc2dJdzxXi6ReawFLw9uk6TrhAnopl7liAq9q4KoJRyWVLK9WNFNmWRQPCRw%2F7%2F2AMKfOwb4GOqUB34vNlBSnBuYlC30Y4ZdIo6UBASSm1%2FxVqsx5XtF2gLiOzwqtHZLWXsHuE6XkiZq5Y6HCKnpoFVpvhl1LEPkF04GCFpiU9H7YdMoE5d%2BM8p351v3v41YCkLZjh3fRVvgShpRR7lomi4gXcjUn1nhhO7o5EYo2EtivWcnpvhU9rP1xl3kA4v5aIY%2BRceMeGqvDt7BQe5TEuq7LIxb2ECYx5SM6%2Bsyn&X-Amz-Signature=8ce1fdc20dfdabb42695f947e99b463a2968ab0e50cf7e435a2a951488e3aba3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQK5SA2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICZLp6bK1WonWI2bnQDHMqJlTUWb%2Fol2hM91W4vSW2h%2BAiEAxCMAZ5ffpAqFsBlnqHDBKFmZkRGzVkpZrAikdzbR5ZoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJSZ042Sm9q9eCcRSrcA9lzYQ%2Bg%2FY85htdnFIS1Huzf%2Btbhs89mcXAkPYZx7VcBkFxgYlp49TKce5vQKY6jwSL7phtUh8oxRMiPrEYhHPgXRlhXeUEXGkasydl8Es%2B3j4JFkb81uDN3slyfKCsjML4WKEdFGoC3dBd0v0Rq2WDwJ3jEVCFDgm%2FbmiwpG4LL1R4pvfiBwRfkU5wKNi%2FoKdWLyi%2BtAF1Qo6RLPKsab0ZW%2BA9%2BCX2XuwgZtOrdwkOK16SptKgeTWljtMfgqpPeqIcDNGlkd7xOXfk7G9pDpb6SAf2jtuI41yAJMsmbLLySgff3I8evjyqZBJ7FfPegPtNwc0FZ2UIuU%2Bdkh430ik5tGwvvIndci6EY3HFFsw35s85flSsyUxUhrf%2BeF6dH9rrVHDTSrAERC6XpshapVhKD288Ucvu%2BWoKDO65%2BRHUuzVmEL6ftcb2agk7TWXDAM7zJB2KmTOj2p%2BfdEKrPBo7b9%2BELciE8XXCBJiahxpCiTAaK4Mh9%2Fr0I57XEehxdf7lUaOPg630Y65OhstGXHoettTv%2FsQ282bDxuZ0u9lnPXLCBi66kVVPak6gqc2dJdzxXi6ReawFLw9uk6TrhAnopl7liAq9q4KoJRyWVLK9WNFNmWRQPCRw%2F7%2F2AMKfOwb4GOqUB34vNlBSnBuYlC30Y4ZdIo6UBASSm1%2FxVqsx5XtF2gLiOzwqtHZLWXsHuE6XkiZq5Y6HCKnpoFVpvhl1LEPkF04GCFpiU9H7YdMoE5d%2BM8p351v3v41YCkLZjh3fRVvgShpRR7lomi4gXcjUn1nhhO7o5EYo2EtivWcnpvhU9rP1xl3kA4v5aIY%2BRceMeGqvDt7BQe5TEuq7LIxb2ECYx5SM6%2Bsyn&X-Amz-Signature=5411206ed6ab5d08325d30532f16909a9b17c8c36233dd6555aca711815ea28b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQK5SA2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICZLp6bK1WonWI2bnQDHMqJlTUWb%2Fol2hM91W4vSW2h%2BAiEAxCMAZ5ffpAqFsBlnqHDBKFmZkRGzVkpZrAikdzbR5ZoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJSZ042Sm9q9eCcRSrcA9lzYQ%2Bg%2FY85htdnFIS1Huzf%2Btbhs89mcXAkPYZx7VcBkFxgYlp49TKce5vQKY6jwSL7phtUh8oxRMiPrEYhHPgXRlhXeUEXGkasydl8Es%2B3j4JFkb81uDN3slyfKCsjML4WKEdFGoC3dBd0v0Rq2WDwJ3jEVCFDgm%2FbmiwpG4LL1R4pvfiBwRfkU5wKNi%2FoKdWLyi%2BtAF1Qo6RLPKsab0ZW%2BA9%2BCX2XuwgZtOrdwkOK16SptKgeTWljtMfgqpPeqIcDNGlkd7xOXfk7G9pDpb6SAf2jtuI41yAJMsmbLLySgff3I8evjyqZBJ7FfPegPtNwc0FZ2UIuU%2Bdkh430ik5tGwvvIndci6EY3HFFsw35s85flSsyUxUhrf%2BeF6dH9rrVHDTSrAERC6XpshapVhKD288Ucvu%2BWoKDO65%2BRHUuzVmEL6ftcb2agk7TWXDAM7zJB2KmTOj2p%2BfdEKrPBo7b9%2BELciE8XXCBJiahxpCiTAaK4Mh9%2Fr0I57XEehxdf7lUaOPg630Y65OhstGXHoettTv%2FsQ282bDxuZ0u9lnPXLCBi66kVVPak6gqc2dJdzxXi6ReawFLw9uk6TrhAnopl7liAq9q4KoJRyWVLK9WNFNmWRQPCRw%2F7%2F2AMKfOwb4GOqUB34vNlBSnBuYlC30Y4ZdIo6UBASSm1%2FxVqsx5XtF2gLiOzwqtHZLWXsHuE6XkiZq5Y6HCKnpoFVpvhl1LEPkF04GCFpiU9H7YdMoE5d%2BM8p351v3v41YCkLZjh3fRVvgShpRR7lomi4gXcjUn1nhhO7o5EYo2EtivWcnpvhU9rP1xl3kA4v5aIY%2BRceMeGqvDt7BQe5TEuq7LIxb2ECYx5SM6%2Bsyn&X-Amz-Signature=f7ecd0b8126a84fd55109afd4800f4a6722b8d5e18e66f8353471d6c41e462f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQK5SA2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICZLp6bK1WonWI2bnQDHMqJlTUWb%2Fol2hM91W4vSW2h%2BAiEAxCMAZ5ffpAqFsBlnqHDBKFmZkRGzVkpZrAikdzbR5ZoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJSZ042Sm9q9eCcRSrcA9lzYQ%2Bg%2FY85htdnFIS1Huzf%2Btbhs89mcXAkPYZx7VcBkFxgYlp49TKce5vQKY6jwSL7phtUh8oxRMiPrEYhHPgXRlhXeUEXGkasydl8Es%2B3j4JFkb81uDN3slyfKCsjML4WKEdFGoC3dBd0v0Rq2WDwJ3jEVCFDgm%2FbmiwpG4LL1R4pvfiBwRfkU5wKNi%2FoKdWLyi%2BtAF1Qo6RLPKsab0ZW%2BA9%2BCX2XuwgZtOrdwkOK16SptKgeTWljtMfgqpPeqIcDNGlkd7xOXfk7G9pDpb6SAf2jtuI41yAJMsmbLLySgff3I8evjyqZBJ7FfPegPtNwc0FZ2UIuU%2Bdkh430ik5tGwvvIndci6EY3HFFsw35s85flSsyUxUhrf%2BeF6dH9rrVHDTSrAERC6XpshapVhKD288Ucvu%2BWoKDO65%2BRHUuzVmEL6ftcb2agk7TWXDAM7zJB2KmTOj2p%2BfdEKrPBo7b9%2BELciE8XXCBJiahxpCiTAaK4Mh9%2Fr0I57XEehxdf7lUaOPg630Y65OhstGXHoettTv%2FsQ282bDxuZ0u9lnPXLCBi66kVVPak6gqc2dJdzxXi6ReawFLw9uk6TrhAnopl7liAq9q4KoJRyWVLK9WNFNmWRQPCRw%2F7%2F2AMKfOwb4GOqUB34vNlBSnBuYlC30Y4ZdIo6UBASSm1%2FxVqsx5XtF2gLiOzwqtHZLWXsHuE6XkiZq5Y6HCKnpoFVpvhl1LEPkF04GCFpiU9H7YdMoE5d%2BM8p351v3v41YCkLZjh3fRVvgShpRR7lomi4gXcjUn1nhhO7o5EYo2EtivWcnpvhU9rP1xl3kA4v5aIY%2BRceMeGqvDt7BQe5TEuq7LIxb2ECYx5SM6%2Bsyn&X-Amz-Signature=b13bf6345a4df2d0cf399dcc3706522a7b80044af9fa16f86ad8b1f86e425cec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQK5SA2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICZLp6bK1WonWI2bnQDHMqJlTUWb%2Fol2hM91W4vSW2h%2BAiEAxCMAZ5ffpAqFsBlnqHDBKFmZkRGzVkpZrAikdzbR5ZoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJSZ042Sm9q9eCcRSrcA9lzYQ%2Bg%2FY85htdnFIS1Huzf%2Btbhs89mcXAkPYZx7VcBkFxgYlp49TKce5vQKY6jwSL7phtUh8oxRMiPrEYhHPgXRlhXeUEXGkasydl8Es%2B3j4JFkb81uDN3slyfKCsjML4WKEdFGoC3dBd0v0Rq2WDwJ3jEVCFDgm%2FbmiwpG4LL1R4pvfiBwRfkU5wKNi%2FoKdWLyi%2BtAF1Qo6RLPKsab0ZW%2BA9%2BCX2XuwgZtOrdwkOK16SptKgeTWljtMfgqpPeqIcDNGlkd7xOXfk7G9pDpb6SAf2jtuI41yAJMsmbLLySgff3I8evjyqZBJ7FfPegPtNwc0FZ2UIuU%2Bdkh430ik5tGwvvIndci6EY3HFFsw35s85flSsyUxUhrf%2BeF6dH9rrVHDTSrAERC6XpshapVhKD288Ucvu%2BWoKDO65%2BRHUuzVmEL6ftcb2agk7TWXDAM7zJB2KmTOj2p%2BfdEKrPBo7b9%2BELciE8XXCBJiahxpCiTAaK4Mh9%2Fr0I57XEehxdf7lUaOPg630Y65OhstGXHoettTv%2FsQ282bDxuZ0u9lnPXLCBi66kVVPak6gqc2dJdzxXi6ReawFLw9uk6TrhAnopl7liAq9q4KoJRyWVLK9WNFNmWRQPCRw%2F7%2F2AMKfOwb4GOqUB34vNlBSnBuYlC30Y4ZdIo6UBASSm1%2FxVqsx5XtF2gLiOzwqtHZLWXsHuE6XkiZq5Y6HCKnpoFVpvhl1LEPkF04GCFpiU9H7YdMoE5d%2BM8p351v3v41YCkLZjh3fRVvgShpRR7lomi4gXcjUn1nhhO7o5EYo2EtivWcnpvhU9rP1xl3kA4v5aIY%2BRceMeGqvDt7BQe5TEuq7LIxb2ECYx5SM6%2Bsyn&X-Amz-Signature=306bd9c8caa1ace3fe64f11375c347d5d682cbd9dceb2f944788db90dfbe2a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQK5SA2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICZLp6bK1WonWI2bnQDHMqJlTUWb%2Fol2hM91W4vSW2h%2BAiEAxCMAZ5ffpAqFsBlnqHDBKFmZkRGzVkpZrAikdzbR5ZoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJSZ042Sm9q9eCcRSrcA9lzYQ%2Bg%2FY85htdnFIS1Huzf%2Btbhs89mcXAkPYZx7VcBkFxgYlp49TKce5vQKY6jwSL7phtUh8oxRMiPrEYhHPgXRlhXeUEXGkasydl8Es%2B3j4JFkb81uDN3slyfKCsjML4WKEdFGoC3dBd0v0Rq2WDwJ3jEVCFDgm%2FbmiwpG4LL1R4pvfiBwRfkU5wKNi%2FoKdWLyi%2BtAF1Qo6RLPKsab0ZW%2BA9%2BCX2XuwgZtOrdwkOK16SptKgeTWljtMfgqpPeqIcDNGlkd7xOXfk7G9pDpb6SAf2jtuI41yAJMsmbLLySgff3I8evjyqZBJ7FfPegPtNwc0FZ2UIuU%2Bdkh430ik5tGwvvIndci6EY3HFFsw35s85flSsyUxUhrf%2BeF6dH9rrVHDTSrAERC6XpshapVhKD288Ucvu%2BWoKDO65%2BRHUuzVmEL6ftcb2agk7TWXDAM7zJB2KmTOj2p%2BfdEKrPBo7b9%2BELciE8XXCBJiahxpCiTAaK4Mh9%2Fr0I57XEehxdf7lUaOPg630Y65OhstGXHoettTv%2FsQ282bDxuZ0u9lnPXLCBi66kVVPak6gqc2dJdzxXi6ReawFLw9uk6TrhAnopl7liAq9q4KoJRyWVLK9WNFNmWRQPCRw%2F7%2F2AMKfOwb4GOqUB34vNlBSnBuYlC30Y4ZdIo6UBASSm1%2FxVqsx5XtF2gLiOzwqtHZLWXsHuE6XkiZq5Y6HCKnpoFVpvhl1LEPkF04GCFpiU9H7YdMoE5d%2BM8p351v3v41YCkLZjh3fRVvgShpRR7lomi4gXcjUn1nhhO7o5EYo2EtivWcnpvhU9rP1xl3kA4v5aIY%2BRceMeGqvDt7BQe5TEuq7LIxb2ECYx5SM6%2Bsyn&X-Amz-Signature=c21b915d919e9a8f888259375111cdfceb8238744408bbb2c5ba3ab3f45ce3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQK5SA2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCICZLp6bK1WonWI2bnQDHMqJlTUWb%2Fol2hM91W4vSW2h%2BAiEAxCMAZ5ffpAqFsBlnqHDBKFmZkRGzVkpZrAikdzbR5ZoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKJSZ042Sm9q9eCcRSrcA9lzYQ%2Bg%2FY85htdnFIS1Huzf%2Btbhs89mcXAkPYZx7VcBkFxgYlp49TKce5vQKY6jwSL7phtUh8oxRMiPrEYhHPgXRlhXeUEXGkasydl8Es%2B3j4JFkb81uDN3slyfKCsjML4WKEdFGoC3dBd0v0Rq2WDwJ3jEVCFDgm%2FbmiwpG4LL1R4pvfiBwRfkU5wKNi%2FoKdWLyi%2BtAF1Qo6RLPKsab0ZW%2BA9%2BCX2XuwgZtOrdwkOK16SptKgeTWljtMfgqpPeqIcDNGlkd7xOXfk7G9pDpb6SAf2jtuI41yAJMsmbLLySgff3I8evjyqZBJ7FfPegPtNwc0FZ2UIuU%2Bdkh430ik5tGwvvIndci6EY3HFFsw35s85flSsyUxUhrf%2BeF6dH9rrVHDTSrAERC6XpshapVhKD288Ucvu%2BWoKDO65%2BRHUuzVmEL6ftcb2agk7TWXDAM7zJB2KmTOj2p%2BfdEKrPBo7b9%2BELciE8XXCBJiahxpCiTAaK4Mh9%2Fr0I57XEehxdf7lUaOPg630Y65OhstGXHoettTv%2FsQ282bDxuZ0u9lnPXLCBi66kVVPak6gqc2dJdzxXi6ReawFLw9uk6TrhAnopl7liAq9q4KoJRyWVLK9WNFNmWRQPCRw%2F7%2F2AMKfOwb4GOqUB34vNlBSnBuYlC30Y4ZdIo6UBASSm1%2FxVqsx5XtF2gLiOzwqtHZLWXsHuE6XkiZq5Y6HCKnpoFVpvhl1LEPkF04GCFpiU9H7YdMoE5d%2BM8p351v3v41YCkLZjh3fRVvgShpRR7lomi4gXcjUn1nhhO7o5EYo2EtivWcnpvhU9rP1xl3kA4v5aIY%2BRceMeGqvDt7BQe5TEuq7LIxb2ECYx5SM6%2Bsyn&X-Amz-Signature=43702f9f38ed55d8490b9528ea4d236aa2df375ceaa81a00eb6c9e3177eb0b47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
