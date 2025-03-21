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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPZR5LS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEuLJy312tFbHbi3j8te5bIboxiDGrORSKg4%2BCKjh9NjAiEApSG3YtSrNks8d7qE7og1KZykHaCXab0JrCJVINFRDD8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF4tZxOaaR2ACLJHCrcAxlTPRWQlI8FNgK5wQ6YC7GIX0%2BXPuDeVwhG0EO2r9q9RUu12edni3%2FiQG%2FEB6AkyZx%2FPUHgI6fVmeMWQbco6ptRIyX29UoeXwN3%2Bsl9JIcehIqdLnIyPlo%2B4fTTnVvKGrNYRrf9VfGkmhz0G%2FigSAKEo8UxyBtDHJ13xUfVL35Z6T4RIhiT%2B7Zhdv46UOmcZNM8%2FueOfqKFIBI37epBhquumRtMd%2F0yXH8gpNz8mUWQKAHAGNvcihkBmk0d2L3gmnm9dTVruFyxlBAw0S%2B1MY%2B8R3g04uSfVT3ASeAY5wsRhgF9wehp%2B08Lh8su2Ec%2FOcIPLqOc4G6NhlD%2F0sqolYpNlVBN89%2FO1zSTNCYZkXb%2BZH6VejUpNWZefptbv4dzdUPBoKm9VmMeN83csJOQPaX6KbuP3CM9wSk6368TMmwFd04XXvvwW7IAS5iNksk2brpero0w%2BEKDIRa7I5rTv192AGf%2BA7tI%2B0GE9R5WCTgh93kon30cVaCqTxhvgUKCFCkIYjVXDI6Vrnh1Ag8IDSk8ao%2FRJyoqqtHhAJtLFDChIzv%2FleLZ4qKTbJF5ej52yPZ5pRiBdcIpgOzQFvzq%2BYNzjGtA%2BQqhkiF9Hk9JA7%2F%2FN2LS1lioHMtbrc90MLLX974GOqUB4H6DSJyNNeDNNNZ%2F8aopFcI0%2FsHL090M%2BXwY9zsLi8pOXxhMgfaFOy0hftgspCYr9sylDldz0i%2B70L7Yy22AXdCFYltBQRJjr2YsPs2IwMm5LFpGcHUZr%2F1kKSGSIJMtWsL0sQJqfMAJvpRtPBu9AWUjfDFazcjs1PYfeYVCWA51Vf12t6uz4qE1Uh8jyq8fM0Kg76RnyCX4enik9atOs3HDwwC7&X-Amz-Signature=bbe67f1319ba8d6e1ab587965f8899e5a683fe0804d1e50e29d97d5568aabbb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPZR5LS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEuLJy312tFbHbi3j8te5bIboxiDGrORSKg4%2BCKjh9NjAiEApSG3YtSrNks8d7qE7og1KZykHaCXab0JrCJVINFRDD8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF4tZxOaaR2ACLJHCrcAxlTPRWQlI8FNgK5wQ6YC7GIX0%2BXPuDeVwhG0EO2r9q9RUu12edni3%2FiQG%2FEB6AkyZx%2FPUHgI6fVmeMWQbco6ptRIyX29UoeXwN3%2Bsl9JIcehIqdLnIyPlo%2B4fTTnVvKGrNYRrf9VfGkmhz0G%2FigSAKEo8UxyBtDHJ13xUfVL35Z6T4RIhiT%2B7Zhdv46UOmcZNM8%2FueOfqKFIBI37epBhquumRtMd%2F0yXH8gpNz8mUWQKAHAGNvcihkBmk0d2L3gmnm9dTVruFyxlBAw0S%2B1MY%2B8R3g04uSfVT3ASeAY5wsRhgF9wehp%2B08Lh8su2Ec%2FOcIPLqOc4G6NhlD%2F0sqolYpNlVBN89%2FO1zSTNCYZkXb%2BZH6VejUpNWZefptbv4dzdUPBoKm9VmMeN83csJOQPaX6KbuP3CM9wSk6368TMmwFd04XXvvwW7IAS5iNksk2brpero0w%2BEKDIRa7I5rTv192AGf%2BA7tI%2B0GE9R5WCTgh93kon30cVaCqTxhvgUKCFCkIYjVXDI6Vrnh1Ag8IDSk8ao%2FRJyoqqtHhAJtLFDChIzv%2FleLZ4qKTbJF5ej52yPZ5pRiBdcIpgOzQFvzq%2BYNzjGtA%2BQqhkiF9Hk9JA7%2F%2FN2LS1lioHMtbrc90MLLX974GOqUB4H6DSJyNNeDNNNZ%2F8aopFcI0%2FsHL090M%2BXwY9zsLi8pOXxhMgfaFOy0hftgspCYr9sylDldz0i%2B70L7Yy22AXdCFYltBQRJjr2YsPs2IwMm5LFpGcHUZr%2F1kKSGSIJMtWsL0sQJqfMAJvpRtPBu9AWUjfDFazcjs1PYfeYVCWA51Vf12t6uz4qE1Uh8jyq8fM0Kg76RnyCX4enik9atOs3HDwwC7&X-Amz-Signature=fd6a341a4bf9f6d084a450e424d3dce7015403b546bc1a30af9604ec05724db9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPZR5LS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEuLJy312tFbHbi3j8te5bIboxiDGrORSKg4%2BCKjh9NjAiEApSG3YtSrNks8d7qE7og1KZykHaCXab0JrCJVINFRDD8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF4tZxOaaR2ACLJHCrcAxlTPRWQlI8FNgK5wQ6YC7GIX0%2BXPuDeVwhG0EO2r9q9RUu12edni3%2FiQG%2FEB6AkyZx%2FPUHgI6fVmeMWQbco6ptRIyX29UoeXwN3%2Bsl9JIcehIqdLnIyPlo%2B4fTTnVvKGrNYRrf9VfGkmhz0G%2FigSAKEo8UxyBtDHJ13xUfVL35Z6T4RIhiT%2B7Zhdv46UOmcZNM8%2FueOfqKFIBI37epBhquumRtMd%2F0yXH8gpNz8mUWQKAHAGNvcihkBmk0d2L3gmnm9dTVruFyxlBAw0S%2B1MY%2B8R3g04uSfVT3ASeAY5wsRhgF9wehp%2B08Lh8su2Ec%2FOcIPLqOc4G6NhlD%2F0sqolYpNlVBN89%2FO1zSTNCYZkXb%2BZH6VejUpNWZefptbv4dzdUPBoKm9VmMeN83csJOQPaX6KbuP3CM9wSk6368TMmwFd04XXvvwW7IAS5iNksk2brpero0w%2BEKDIRa7I5rTv192AGf%2BA7tI%2B0GE9R5WCTgh93kon30cVaCqTxhvgUKCFCkIYjVXDI6Vrnh1Ag8IDSk8ao%2FRJyoqqtHhAJtLFDChIzv%2FleLZ4qKTbJF5ej52yPZ5pRiBdcIpgOzQFvzq%2BYNzjGtA%2BQqhkiF9Hk9JA7%2F%2FN2LS1lioHMtbrc90MLLX974GOqUB4H6DSJyNNeDNNNZ%2F8aopFcI0%2FsHL090M%2BXwY9zsLi8pOXxhMgfaFOy0hftgspCYr9sylDldz0i%2B70L7Yy22AXdCFYltBQRJjr2YsPs2IwMm5LFpGcHUZr%2F1kKSGSIJMtWsL0sQJqfMAJvpRtPBu9AWUjfDFazcjs1PYfeYVCWA51Vf12t6uz4qE1Uh8jyq8fM0Kg76RnyCX4enik9atOs3HDwwC7&X-Amz-Signature=b60524c5b23e201c6b3558bfc0d31dbc77b8c2450354c64de38bf6ede3780e96&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPZR5LS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEuLJy312tFbHbi3j8te5bIboxiDGrORSKg4%2BCKjh9NjAiEApSG3YtSrNks8d7qE7og1KZykHaCXab0JrCJVINFRDD8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF4tZxOaaR2ACLJHCrcAxlTPRWQlI8FNgK5wQ6YC7GIX0%2BXPuDeVwhG0EO2r9q9RUu12edni3%2FiQG%2FEB6AkyZx%2FPUHgI6fVmeMWQbco6ptRIyX29UoeXwN3%2Bsl9JIcehIqdLnIyPlo%2B4fTTnVvKGrNYRrf9VfGkmhz0G%2FigSAKEo8UxyBtDHJ13xUfVL35Z6T4RIhiT%2B7Zhdv46UOmcZNM8%2FueOfqKFIBI37epBhquumRtMd%2F0yXH8gpNz8mUWQKAHAGNvcihkBmk0d2L3gmnm9dTVruFyxlBAw0S%2B1MY%2B8R3g04uSfVT3ASeAY5wsRhgF9wehp%2B08Lh8su2Ec%2FOcIPLqOc4G6NhlD%2F0sqolYpNlVBN89%2FO1zSTNCYZkXb%2BZH6VejUpNWZefptbv4dzdUPBoKm9VmMeN83csJOQPaX6KbuP3CM9wSk6368TMmwFd04XXvvwW7IAS5iNksk2brpero0w%2BEKDIRa7I5rTv192AGf%2BA7tI%2B0GE9R5WCTgh93kon30cVaCqTxhvgUKCFCkIYjVXDI6Vrnh1Ag8IDSk8ao%2FRJyoqqtHhAJtLFDChIzv%2FleLZ4qKTbJF5ej52yPZ5pRiBdcIpgOzQFvzq%2BYNzjGtA%2BQqhkiF9Hk9JA7%2F%2FN2LS1lioHMtbrc90MLLX974GOqUB4H6DSJyNNeDNNNZ%2F8aopFcI0%2FsHL090M%2BXwY9zsLi8pOXxhMgfaFOy0hftgspCYr9sylDldz0i%2B70L7Yy22AXdCFYltBQRJjr2YsPs2IwMm5LFpGcHUZr%2F1kKSGSIJMtWsL0sQJqfMAJvpRtPBu9AWUjfDFazcjs1PYfeYVCWA51Vf12t6uz4qE1Uh8jyq8fM0Kg76RnyCX4enik9atOs3HDwwC7&X-Amz-Signature=6281d072f8375eff8959c653575c57cd1852d1b39a2418314c9e56ff335ad411&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPZR5LS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEuLJy312tFbHbi3j8te5bIboxiDGrORSKg4%2BCKjh9NjAiEApSG3YtSrNks8d7qE7og1KZykHaCXab0JrCJVINFRDD8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF4tZxOaaR2ACLJHCrcAxlTPRWQlI8FNgK5wQ6YC7GIX0%2BXPuDeVwhG0EO2r9q9RUu12edni3%2FiQG%2FEB6AkyZx%2FPUHgI6fVmeMWQbco6ptRIyX29UoeXwN3%2Bsl9JIcehIqdLnIyPlo%2B4fTTnVvKGrNYRrf9VfGkmhz0G%2FigSAKEo8UxyBtDHJ13xUfVL35Z6T4RIhiT%2B7Zhdv46UOmcZNM8%2FueOfqKFIBI37epBhquumRtMd%2F0yXH8gpNz8mUWQKAHAGNvcihkBmk0d2L3gmnm9dTVruFyxlBAw0S%2B1MY%2B8R3g04uSfVT3ASeAY5wsRhgF9wehp%2B08Lh8su2Ec%2FOcIPLqOc4G6NhlD%2F0sqolYpNlVBN89%2FO1zSTNCYZkXb%2BZH6VejUpNWZefptbv4dzdUPBoKm9VmMeN83csJOQPaX6KbuP3CM9wSk6368TMmwFd04XXvvwW7IAS5iNksk2brpero0w%2BEKDIRa7I5rTv192AGf%2BA7tI%2B0GE9R5WCTgh93kon30cVaCqTxhvgUKCFCkIYjVXDI6Vrnh1Ag8IDSk8ao%2FRJyoqqtHhAJtLFDChIzv%2FleLZ4qKTbJF5ej52yPZ5pRiBdcIpgOzQFvzq%2BYNzjGtA%2BQqhkiF9Hk9JA7%2F%2FN2LS1lioHMtbrc90MLLX974GOqUB4H6DSJyNNeDNNNZ%2F8aopFcI0%2FsHL090M%2BXwY9zsLi8pOXxhMgfaFOy0hftgspCYr9sylDldz0i%2B70L7Yy22AXdCFYltBQRJjr2YsPs2IwMm5LFpGcHUZr%2F1kKSGSIJMtWsL0sQJqfMAJvpRtPBu9AWUjfDFazcjs1PYfeYVCWA51Vf12t6uz4qE1Uh8jyq8fM0Kg76RnyCX4enik9atOs3HDwwC7&X-Amz-Signature=915978b9101708775aaf6570a9b302e836f25f2833169bde59d7ca55be2fe552&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPZR5LS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEuLJy312tFbHbi3j8te5bIboxiDGrORSKg4%2BCKjh9NjAiEApSG3YtSrNks8d7qE7og1KZykHaCXab0JrCJVINFRDD8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF4tZxOaaR2ACLJHCrcAxlTPRWQlI8FNgK5wQ6YC7GIX0%2BXPuDeVwhG0EO2r9q9RUu12edni3%2FiQG%2FEB6AkyZx%2FPUHgI6fVmeMWQbco6ptRIyX29UoeXwN3%2Bsl9JIcehIqdLnIyPlo%2B4fTTnVvKGrNYRrf9VfGkmhz0G%2FigSAKEo8UxyBtDHJ13xUfVL35Z6T4RIhiT%2B7Zhdv46UOmcZNM8%2FueOfqKFIBI37epBhquumRtMd%2F0yXH8gpNz8mUWQKAHAGNvcihkBmk0d2L3gmnm9dTVruFyxlBAw0S%2B1MY%2B8R3g04uSfVT3ASeAY5wsRhgF9wehp%2B08Lh8su2Ec%2FOcIPLqOc4G6NhlD%2F0sqolYpNlVBN89%2FO1zSTNCYZkXb%2BZH6VejUpNWZefptbv4dzdUPBoKm9VmMeN83csJOQPaX6KbuP3CM9wSk6368TMmwFd04XXvvwW7IAS5iNksk2brpero0w%2BEKDIRa7I5rTv192AGf%2BA7tI%2B0GE9R5WCTgh93kon30cVaCqTxhvgUKCFCkIYjVXDI6Vrnh1Ag8IDSk8ao%2FRJyoqqtHhAJtLFDChIzv%2FleLZ4qKTbJF5ej52yPZ5pRiBdcIpgOzQFvzq%2BYNzjGtA%2BQqhkiF9Hk9JA7%2F%2FN2LS1lioHMtbrc90MLLX974GOqUB4H6DSJyNNeDNNNZ%2F8aopFcI0%2FsHL090M%2BXwY9zsLi8pOXxhMgfaFOy0hftgspCYr9sylDldz0i%2B70L7Yy22AXdCFYltBQRJjr2YsPs2IwMm5LFpGcHUZr%2F1kKSGSIJMtWsL0sQJqfMAJvpRtPBu9AWUjfDFazcjs1PYfeYVCWA51Vf12t6uz4qE1Uh8jyq8fM0Kg76RnyCX4enik9atOs3HDwwC7&X-Amz-Signature=705007583d619b05cd61ee798f4dc36a5028d515192eeafb611356179457781c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPZR5LS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEuLJy312tFbHbi3j8te5bIboxiDGrORSKg4%2BCKjh9NjAiEApSG3YtSrNks8d7qE7og1KZykHaCXab0JrCJVINFRDD8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF4tZxOaaR2ACLJHCrcAxlTPRWQlI8FNgK5wQ6YC7GIX0%2BXPuDeVwhG0EO2r9q9RUu12edni3%2FiQG%2FEB6AkyZx%2FPUHgI6fVmeMWQbco6ptRIyX29UoeXwN3%2Bsl9JIcehIqdLnIyPlo%2B4fTTnVvKGrNYRrf9VfGkmhz0G%2FigSAKEo8UxyBtDHJ13xUfVL35Z6T4RIhiT%2B7Zhdv46UOmcZNM8%2FueOfqKFIBI37epBhquumRtMd%2F0yXH8gpNz8mUWQKAHAGNvcihkBmk0d2L3gmnm9dTVruFyxlBAw0S%2B1MY%2B8R3g04uSfVT3ASeAY5wsRhgF9wehp%2B08Lh8su2Ec%2FOcIPLqOc4G6NhlD%2F0sqolYpNlVBN89%2FO1zSTNCYZkXb%2BZH6VejUpNWZefptbv4dzdUPBoKm9VmMeN83csJOQPaX6KbuP3CM9wSk6368TMmwFd04XXvvwW7IAS5iNksk2brpero0w%2BEKDIRa7I5rTv192AGf%2BA7tI%2B0GE9R5WCTgh93kon30cVaCqTxhvgUKCFCkIYjVXDI6Vrnh1Ag8IDSk8ao%2FRJyoqqtHhAJtLFDChIzv%2FleLZ4qKTbJF5ej52yPZ5pRiBdcIpgOzQFvzq%2BYNzjGtA%2BQqhkiF9Hk9JA7%2F%2FN2LS1lioHMtbrc90MLLX974GOqUB4H6DSJyNNeDNNNZ%2F8aopFcI0%2FsHL090M%2BXwY9zsLi8pOXxhMgfaFOy0hftgspCYr9sylDldz0i%2B70L7Yy22AXdCFYltBQRJjr2YsPs2IwMm5LFpGcHUZr%2F1kKSGSIJMtWsL0sQJqfMAJvpRtPBu9AWUjfDFazcjs1PYfeYVCWA51Vf12t6uz4qE1Uh8jyq8fM0Kg76RnyCX4enik9atOs3HDwwC7&X-Amz-Signature=ab06575218d12af9a82cfa84b8861ae6d9eae1583b6eac91ce1f952b41d094d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPZR5LS%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEuLJy312tFbHbi3j8te5bIboxiDGrORSKg4%2BCKjh9NjAiEApSG3YtSrNks8d7qE7og1KZykHaCXab0JrCJVINFRDD8qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJF4tZxOaaR2ACLJHCrcAxlTPRWQlI8FNgK5wQ6YC7GIX0%2BXPuDeVwhG0EO2r9q9RUu12edni3%2FiQG%2FEB6AkyZx%2FPUHgI6fVmeMWQbco6ptRIyX29UoeXwN3%2Bsl9JIcehIqdLnIyPlo%2B4fTTnVvKGrNYRrf9VfGkmhz0G%2FigSAKEo8UxyBtDHJ13xUfVL35Z6T4RIhiT%2B7Zhdv46UOmcZNM8%2FueOfqKFIBI37epBhquumRtMd%2F0yXH8gpNz8mUWQKAHAGNvcihkBmk0d2L3gmnm9dTVruFyxlBAw0S%2B1MY%2B8R3g04uSfVT3ASeAY5wsRhgF9wehp%2B08Lh8su2Ec%2FOcIPLqOc4G6NhlD%2F0sqolYpNlVBN89%2FO1zSTNCYZkXb%2BZH6VejUpNWZefptbv4dzdUPBoKm9VmMeN83csJOQPaX6KbuP3CM9wSk6368TMmwFd04XXvvwW7IAS5iNksk2brpero0w%2BEKDIRa7I5rTv192AGf%2BA7tI%2B0GE9R5WCTgh93kon30cVaCqTxhvgUKCFCkIYjVXDI6Vrnh1Ag8IDSk8ao%2FRJyoqqtHhAJtLFDChIzv%2FleLZ4qKTbJF5ej52yPZ5pRiBdcIpgOzQFvzq%2BYNzjGtA%2BQqhkiF9Hk9JA7%2F%2FN2LS1lioHMtbrc90MLLX974GOqUB4H6DSJyNNeDNNNZ%2F8aopFcI0%2FsHL090M%2BXwY9zsLi8pOXxhMgfaFOy0hftgspCYr9sylDldz0i%2B70L7Yy22AXdCFYltBQRJjr2YsPs2IwMm5LFpGcHUZr%2F1kKSGSIJMtWsL0sQJqfMAJvpRtPBu9AWUjfDFazcjs1PYfeYVCWA51Vf12t6uz4qE1Uh8jyq8fM0Kg76RnyCX4enik9atOs3HDwwC7&X-Amz-Signature=cb11214da6bc8c272c88d36162a2790cbd358672430f925694c307f97a7cc6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
