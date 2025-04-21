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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZGXTDR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCL9j3NQR7XotosWLFYZ9BK8P7wqlEwoRAuzDF598LJogIhAMq%2Bmf0Cxgw1WWKNuTGt8rIh2lfEFuA7OQRvUkyS8BRqKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhSfeKkU4fi7q8RDwq3AOVkt1GOY00qfnQ8W7bD4GdHYtGZMOANhNx4Uf8S0iRCIf0hn3AcO5lc%2BS9N%2FskRcO%2BCo%2Bim76J7bCAK7zofalov8vJE5bzgkpng2EwAeG1uHwgnxVvK8APKCcxVl%2B30QWcuRMrpmW%2Fe%2BxW3b7BzlbvBWgz7z5ir3QhPPOiTYPrKDDJefgYr1yzfd5gkTV35ees7so5mIdeYGJCaEhkRXGPto5ydVtWV3cRJoDX4a8cPODnhkDZ2J4j6WOWVxq7Yt9vXd7iGVgTL7xuGTRNrwfufQ%2BwhYbGZGS4Rn7KbQBfRFkZdj3u4ZcCRAxaMWox9bsaoYfIF56UHTKG22Yb%2FRjFFGjhbQ51ZV0lo6qi%2BkIGqnMWfKmz9ziIIMNIgVZhxcMWuteMJ%2Fh2jHJ75Bu0F5l5hx%2FL86%2Fz4pZDAbmWGyafvE9Y059iMBb53CxdphUHHv122dzNUXgpXb7BijkNuNVnH42uSS7SPd0dCrJTK9SXD%2B8wZerX5Cc%2Bzm1FFVQ8zIlKUqfPfLkx%2FsEiB64xAuyZTxXBmVQpZinJuvwWhSUfvZzNQTNaYKqskNesMUAFYBe1Hf3bcS0u1XuOLa3qCHW4IHcP7c1ic7IxNblUCn6QGxcPNo3CT4g9Ixj2OzCyuZnABjqkAVqG4CcT%2B%2BuDzFsqsbdQET%2FY%2BQf6GmXaLHTbUgWQbSQlhmg1aRwBbVsj48M0ie8VMuwArB4hMA2brmOHvVrwyfiXz25sLNHgn%2BeChbzP2gEnU%2FJ%2FivBStC%2F5vIH24vAZ5T6X8PPsHr%2FaoRAcrNiVfk1hzeNUFzQxxFb9b03zWOFOYsPTX9rxZtfVkcqCCg58bYQt6Dki9%2FRQ6ud%2FUjtL4qyFvbiA&X-Amz-Signature=afd2e5eb7456fb0a2b99906463b8cc0fb8c4bddf10497fd11f1ed3d2e366bcc1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZGXTDR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCL9j3NQR7XotosWLFYZ9BK8P7wqlEwoRAuzDF598LJogIhAMq%2Bmf0Cxgw1WWKNuTGt8rIh2lfEFuA7OQRvUkyS8BRqKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhSfeKkU4fi7q8RDwq3AOVkt1GOY00qfnQ8W7bD4GdHYtGZMOANhNx4Uf8S0iRCIf0hn3AcO5lc%2BS9N%2FskRcO%2BCo%2Bim76J7bCAK7zofalov8vJE5bzgkpng2EwAeG1uHwgnxVvK8APKCcxVl%2B30QWcuRMrpmW%2Fe%2BxW3b7BzlbvBWgz7z5ir3QhPPOiTYPrKDDJefgYr1yzfd5gkTV35ees7so5mIdeYGJCaEhkRXGPto5ydVtWV3cRJoDX4a8cPODnhkDZ2J4j6WOWVxq7Yt9vXd7iGVgTL7xuGTRNrwfufQ%2BwhYbGZGS4Rn7KbQBfRFkZdj3u4ZcCRAxaMWox9bsaoYfIF56UHTKG22Yb%2FRjFFGjhbQ51ZV0lo6qi%2BkIGqnMWfKmz9ziIIMNIgVZhxcMWuteMJ%2Fh2jHJ75Bu0F5l5hx%2FL86%2Fz4pZDAbmWGyafvE9Y059iMBb53CxdphUHHv122dzNUXgpXb7BijkNuNVnH42uSS7SPd0dCrJTK9SXD%2B8wZerX5Cc%2Bzm1FFVQ8zIlKUqfPfLkx%2FsEiB64xAuyZTxXBmVQpZinJuvwWhSUfvZzNQTNaYKqskNesMUAFYBe1Hf3bcS0u1XuOLa3qCHW4IHcP7c1ic7IxNblUCn6QGxcPNo3CT4g9Ixj2OzCyuZnABjqkAVqG4CcT%2B%2BuDzFsqsbdQET%2FY%2BQf6GmXaLHTbUgWQbSQlhmg1aRwBbVsj48M0ie8VMuwArB4hMA2brmOHvVrwyfiXz25sLNHgn%2BeChbzP2gEnU%2FJ%2FivBStC%2F5vIH24vAZ5T6X8PPsHr%2FaoRAcrNiVfk1hzeNUFzQxxFb9b03zWOFOYsPTX9rxZtfVkcqCCg58bYQt6Dki9%2FRQ6ud%2FUjtL4qyFvbiA&X-Amz-Signature=5c9182f1317c351f0ef4200ddd9e3f327ee0d6bba7bbd85f46c7b47a9f5ad828&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZGXTDR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCL9j3NQR7XotosWLFYZ9BK8P7wqlEwoRAuzDF598LJogIhAMq%2Bmf0Cxgw1WWKNuTGt8rIh2lfEFuA7OQRvUkyS8BRqKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhSfeKkU4fi7q8RDwq3AOVkt1GOY00qfnQ8W7bD4GdHYtGZMOANhNx4Uf8S0iRCIf0hn3AcO5lc%2BS9N%2FskRcO%2BCo%2Bim76J7bCAK7zofalov8vJE5bzgkpng2EwAeG1uHwgnxVvK8APKCcxVl%2B30QWcuRMrpmW%2Fe%2BxW3b7BzlbvBWgz7z5ir3QhPPOiTYPrKDDJefgYr1yzfd5gkTV35ees7so5mIdeYGJCaEhkRXGPto5ydVtWV3cRJoDX4a8cPODnhkDZ2J4j6WOWVxq7Yt9vXd7iGVgTL7xuGTRNrwfufQ%2BwhYbGZGS4Rn7KbQBfRFkZdj3u4ZcCRAxaMWox9bsaoYfIF56UHTKG22Yb%2FRjFFGjhbQ51ZV0lo6qi%2BkIGqnMWfKmz9ziIIMNIgVZhxcMWuteMJ%2Fh2jHJ75Bu0F5l5hx%2FL86%2Fz4pZDAbmWGyafvE9Y059iMBb53CxdphUHHv122dzNUXgpXb7BijkNuNVnH42uSS7SPd0dCrJTK9SXD%2B8wZerX5Cc%2Bzm1FFVQ8zIlKUqfPfLkx%2FsEiB64xAuyZTxXBmVQpZinJuvwWhSUfvZzNQTNaYKqskNesMUAFYBe1Hf3bcS0u1XuOLa3qCHW4IHcP7c1ic7IxNblUCn6QGxcPNo3CT4g9Ixj2OzCyuZnABjqkAVqG4CcT%2B%2BuDzFsqsbdQET%2FY%2BQf6GmXaLHTbUgWQbSQlhmg1aRwBbVsj48M0ie8VMuwArB4hMA2brmOHvVrwyfiXz25sLNHgn%2BeChbzP2gEnU%2FJ%2FivBStC%2F5vIH24vAZ5T6X8PPsHr%2FaoRAcrNiVfk1hzeNUFzQxxFb9b03zWOFOYsPTX9rxZtfVkcqCCg58bYQt6Dki9%2FRQ6ud%2FUjtL4qyFvbiA&X-Amz-Signature=d000763ce8e8c48f96d0558157fc2ca0d3a2e60eee0e42eb614d9d2cd62fa74f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZGXTDR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCL9j3NQR7XotosWLFYZ9BK8P7wqlEwoRAuzDF598LJogIhAMq%2Bmf0Cxgw1WWKNuTGt8rIh2lfEFuA7OQRvUkyS8BRqKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhSfeKkU4fi7q8RDwq3AOVkt1GOY00qfnQ8W7bD4GdHYtGZMOANhNx4Uf8S0iRCIf0hn3AcO5lc%2BS9N%2FskRcO%2BCo%2Bim76J7bCAK7zofalov8vJE5bzgkpng2EwAeG1uHwgnxVvK8APKCcxVl%2B30QWcuRMrpmW%2Fe%2BxW3b7BzlbvBWgz7z5ir3QhPPOiTYPrKDDJefgYr1yzfd5gkTV35ees7so5mIdeYGJCaEhkRXGPto5ydVtWV3cRJoDX4a8cPODnhkDZ2J4j6WOWVxq7Yt9vXd7iGVgTL7xuGTRNrwfufQ%2BwhYbGZGS4Rn7KbQBfRFkZdj3u4ZcCRAxaMWox9bsaoYfIF56UHTKG22Yb%2FRjFFGjhbQ51ZV0lo6qi%2BkIGqnMWfKmz9ziIIMNIgVZhxcMWuteMJ%2Fh2jHJ75Bu0F5l5hx%2FL86%2Fz4pZDAbmWGyafvE9Y059iMBb53CxdphUHHv122dzNUXgpXb7BijkNuNVnH42uSS7SPd0dCrJTK9SXD%2B8wZerX5Cc%2Bzm1FFVQ8zIlKUqfPfLkx%2FsEiB64xAuyZTxXBmVQpZinJuvwWhSUfvZzNQTNaYKqskNesMUAFYBe1Hf3bcS0u1XuOLa3qCHW4IHcP7c1ic7IxNblUCn6QGxcPNo3CT4g9Ixj2OzCyuZnABjqkAVqG4CcT%2B%2BuDzFsqsbdQET%2FY%2BQf6GmXaLHTbUgWQbSQlhmg1aRwBbVsj48M0ie8VMuwArB4hMA2brmOHvVrwyfiXz25sLNHgn%2BeChbzP2gEnU%2FJ%2FivBStC%2F5vIH24vAZ5T6X8PPsHr%2FaoRAcrNiVfk1hzeNUFzQxxFb9b03zWOFOYsPTX9rxZtfVkcqCCg58bYQt6Dki9%2FRQ6ud%2FUjtL4qyFvbiA&X-Amz-Signature=96e690e962280247459cf84bd634bf17c1c09eaaffec8f5417693f16b000022d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZGXTDR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCL9j3NQR7XotosWLFYZ9BK8P7wqlEwoRAuzDF598LJogIhAMq%2Bmf0Cxgw1WWKNuTGt8rIh2lfEFuA7OQRvUkyS8BRqKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhSfeKkU4fi7q8RDwq3AOVkt1GOY00qfnQ8W7bD4GdHYtGZMOANhNx4Uf8S0iRCIf0hn3AcO5lc%2BS9N%2FskRcO%2BCo%2Bim76J7bCAK7zofalov8vJE5bzgkpng2EwAeG1uHwgnxVvK8APKCcxVl%2B30QWcuRMrpmW%2Fe%2BxW3b7BzlbvBWgz7z5ir3QhPPOiTYPrKDDJefgYr1yzfd5gkTV35ees7so5mIdeYGJCaEhkRXGPto5ydVtWV3cRJoDX4a8cPODnhkDZ2J4j6WOWVxq7Yt9vXd7iGVgTL7xuGTRNrwfufQ%2BwhYbGZGS4Rn7KbQBfRFkZdj3u4ZcCRAxaMWox9bsaoYfIF56UHTKG22Yb%2FRjFFGjhbQ51ZV0lo6qi%2BkIGqnMWfKmz9ziIIMNIgVZhxcMWuteMJ%2Fh2jHJ75Bu0F5l5hx%2FL86%2Fz4pZDAbmWGyafvE9Y059iMBb53CxdphUHHv122dzNUXgpXb7BijkNuNVnH42uSS7SPd0dCrJTK9SXD%2B8wZerX5Cc%2Bzm1FFVQ8zIlKUqfPfLkx%2FsEiB64xAuyZTxXBmVQpZinJuvwWhSUfvZzNQTNaYKqskNesMUAFYBe1Hf3bcS0u1XuOLa3qCHW4IHcP7c1ic7IxNblUCn6QGxcPNo3CT4g9Ixj2OzCyuZnABjqkAVqG4CcT%2B%2BuDzFsqsbdQET%2FY%2BQf6GmXaLHTbUgWQbSQlhmg1aRwBbVsj48M0ie8VMuwArB4hMA2brmOHvVrwyfiXz25sLNHgn%2BeChbzP2gEnU%2FJ%2FivBStC%2F5vIH24vAZ5T6X8PPsHr%2FaoRAcrNiVfk1hzeNUFzQxxFb9b03zWOFOYsPTX9rxZtfVkcqCCg58bYQt6Dki9%2FRQ6ud%2FUjtL4qyFvbiA&X-Amz-Signature=9a5f909c4da65b021a441ecba1a74dfd14e52599822dda68f476899db1bfacbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZGXTDR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCL9j3NQR7XotosWLFYZ9BK8P7wqlEwoRAuzDF598LJogIhAMq%2Bmf0Cxgw1WWKNuTGt8rIh2lfEFuA7OQRvUkyS8BRqKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhSfeKkU4fi7q8RDwq3AOVkt1GOY00qfnQ8W7bD4GdHYtGZMOANhNx4Uf8S0iRCIf0hn3AcO5lc%2BS9N%2FskRcO%2BCo%2Bim76J7bCAK7zofalov8vJE5bzgkpng2EwAeG1uHwgnxVvK8APKCcxVl%2B30QWcuRMrpmW%2Fe%2BxW3b7BzlbvBWgz7z5ir3QhPPOiTYPrKDDJefgYr1yzfd5gkTV35ees7so5mIdeYGJCaEhkRXGPto5ydVtWV3cRJoDX4a8cPODnhkDZ2J4j6WOWVxq7Yt9vXd7iGVgTL7xuGTRNrwfufQ%2BwhYbGZGS4Rn7KbQBfRFkZdj3u4ZcCRAxaMWox9bsaoYfIF56UHTKG22Yb%2FRjFFGjhbQ51ZV0lo6qi%2BkIGqnMWfKmz9ziIIMNIgVZhxcMWuteMJ%2Fh2jHJ75Bu0F5l5hx%2FL86%2Fz4pZDAbmWGyafvE9Y059iMBb53CxdphUHHv122dzNUXgpXb7BijkNuNVnH42uSS7SPd0dCrJTK9SXD%2B8wZerX5Cc%2Bzm1FFVQ8zIlKUqfPfLkx%2FsEiB64xAuyZTxXBmVQpZinJuvwWhSUfvZzNQTNaYKqskNesMUAFYBe1Hf3bcS0u1XuOLa3qCHW4IHcP7c1ic7IxNblUCn6QGxcPNo3CT4g9Ixj2OzCyuZnABjqkAVqG4CcT%2B%2BuDzFsqsbdQET%2FY%2BQf6GmXaLHTbUgWQbSQlhmg1aRwBbVsj48M0ie8VMuwArB4hMA2brmOHvVrwyfiXz25sLNHgn%2BeChbzP2gEnU%2FJ%2FivBStC%2F5vIH24vAZ5T6X8PPsHr%2FaoRAcrNiVfk1hzeNUFzQxxFb9b03zWOFOYsPTX9rxZtfVkcqCCg58bYQt6Dki9%2FRQ6ud%2FUjtL4qyFvbiA&X-Amz-Signature=fb8152965cace65cd79440c919e5fabcb873a7373344cc9435fb23afe484a09f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZGXTDR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCL9j3NQR7XotosWLFYZ9BK8P7wqlEwoRAuzDF598LJogIhAMq%2Bmf0Cxgw1WWKNuTGt8rIh2lfEFuA7OQRvUkyS8BRqKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhSfeKkU4fi7q8RDwq3AOVkt1GOY00qfnQ8W7bD4GdHYtGZMOANhNx4Uf8S0iRCIf0hn3AcO5lc%2BS9N%2FskRcO%2BCo%2Bim76J7bCAK7zofalov8vJE5bzgkpng2EwAeG1uHwgnxVvK8APKCcxVl%2B30QWcuRMrpmW%2Fe%2BxW3b7BzlbvBWgz7z5ir3QhPPOiTYPrKDDJefgYr1yzfd5gkTV35ees7so5mIdeYGJCaEhkRXGPto5ydVtWV3cRJoDX4a8cPODnhkDZ2J4j6WOWVxq7Yt9vXd7iGVgTL7xuGTRNrwfufQ%2BwhYbGZGS4Rn7KbQBfRFkZdj3u4ZcCRAxaMWox9bsaoYfIF56UHTKG22Yb%2FRjFFGjhbQ51ZV0lo6qi%2BkIGqnMWfKmz9ziIIMNIgVZhxcMWuteMJ%2Fh2jHJ75Bu0F5l5hx%2FL86%2Fz4pZDAbmWGyafvE9Y059iMBb53CxdphUHHv122dzNUXgpXb7BijkNuNVnH42uSS7SPd0dCrJTK9SXD%2B8wZerX5Cc%2Bzm1FFVQ8zIlKUqfPfLkx%2FsEiB64xAuyZTxXBmVQpZinJuvwWhSUfvZzNQTNaYKqskNesMUAFYBe1Hf3bcS0u1XuOLa3qCHW4IHcP7c1ic7IxNblUCn6QGxcPNo3CT4g9Ixj2OzCyuZnABjqkAVqG4CcT%2B%2BuDzFsqsbdQET%2FY%2BQf6GmXaLHTbUgWQbSQlhmg1aRwBbVsj48M0ie8VMuwArB4hMA2brmOHvVrwyfiXz25sLNHgn%2BeChbzP2gEnU%2FJ%2FivBStC%2F5vIH24vAZ5T6X8PPsHr%2FaoRAcrNiVfk1hzeNUFzQxxFb9b03zWOFOYsPTX9rxZtfVkcqCCg58bYQt6Dki9%2FRQ6ud%2FUjtL4qyFvbiA&X-Amz-Signature=d1bce3b15ab62dc62042bdbb1861454bc870817809e3be23c275d64909a775b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZGXTDR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCL9j3NQR7XotosWLFYZ9BK8P7wqlEwoRAuzDF598LJogIhAMq%2Bmf0Cxgw1WWKNuTGt8rIh2lfEFuA7OQRvUkyS8BRqKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhSfeKkU4fi7q8RDwq3AOVkt1GOY00qfnQ8W7bD4GdHYtGZMOANhNx4Uf8S0iRCIf0hn3AcO5lc%2BS9N%2FskRcO%2BCo%2Bim76J7bCAK7zofalov8vJE5bzgkpng2EwAeG1uHwgnxVvK8APKCcxVl%2B30QWcuRMrpmW%2Fe%2BxW3b7BzlbvBWgz7z5ir3QhPPOiTYPrKDDJefgYr1yzfd5gkTV35ees7so5mIdeYGJCaEhkRXGPto5ydVtWV3cRJoDX4a8cPODnhkDZ2J4j6WOWVxq7Yt9vXd7iGVgTL7xuGTRNrwfufQ%2BwhYbGZGS4Rn7KbQBfRFkZdj3u4ZcCRAxaMWox9bsaoYfIF56UHTKG22Yb%2FRjFFGjhbQ51ZV0lo6qi%2BkIGqnMWfKmz9ziIIMNIgVZhxcMWuteMJ%2Fh2jHJ75Bu0F5l5hx%2FL86%2Fz4pZDAbmWGyafvE9Y059iMBb53CxdphUHHv122dzNUXgpXb7BijkNuNVnH42uSS7SPd0dCrJTK9SXD%2B8wZerX5Cc%2Bzm1FFVQ8zIlKUqfPfLkx%2FsEiB64xAuyZTxXBmVQpZinJuvwWhSUfvZzNQTNaYKqskNesMUAFYBe1Hf3bcS0u1XuOLa3qCHW4IHcP7c1ic7IxNblUCn6QGxcPNo3CT4g9Ixj2OzCyuZnABjqkAVqG4CcT%2B%2BuDzFsqsbdQET%2FY%2BQf6GmXaLHTbUgWQbSQlhmg1aRwBbVsj48M0ie8VMuwArB4hMA2brmOHvVrwyfiXz25sLNHgn%2BeChbzP2gEnU%2FJ%2FivBStC%2F5vIH24vAZ5T6X8PPsHr%2FaoRAcrNiVfk1hzeNUFzQxxFb9b03zWOFOYsPTX9rxZtfVkcqCCg58bYQt6Dki9%2FRQ6ud%2FUjtL4qyFvbiA&X-Amz-Signature=57edcd698b04d216d8117e0f8488a7bb47826fa9f64a77fa197a94b80c2739dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
