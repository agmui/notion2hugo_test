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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOI4SLQU%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPNI0sLd3820t9DqKu6zS%2BrJ%2BUaYuHaFSVMOmO6uffwIgD4li7kZ6NosMtysd4EsufXROUpTwkvaangOXP9CW9nQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKlXC52gooPy9F4d7CrcA%2FGfX8Ss2BzjJJMsij6tAna%2FeRgRJ95mgOmZ%2FBBlwLi3bAyDKGMmq1u4OABgqg%2FsokUKDgfkm5C%2FBXwgEEYH9k%2FO7i6p1nttWg3G%2FuX6SzxFh7Odyd74SyGw1%2FgZBaLPjYD0%2FxLtvkeJKC%2BLqCnzj3IUEO%2Fq8Hsdiqyv6StCwaUBe5aJt7X3zZhYB8Kb4POW%2FYPhGM5iYGNfPi%2Fmiusovp%2FWjfik%2BVvR5Xm0bO1usVG1BFS4vUdPCbZpNlX1SgcVpom7vUx2gggpbhKfdqBrIb8z1C6GXrmPoVnxv3UiQwMJQMDJ5S1v2AFjpyRFFMz%2FVLQFWHZbsFylKn4L9WjOemZfIWdBnWoo8xh0HnNI2M94dyqifsVD3AWv4bOUv7VBjkmjTP0LVQ2inm29trma5%2BBZbQvHPWP6HuLC6xqP1UAyLMErvkj9OnFrF0%2FSvnL35YYyzXVfyjMOGFU3vVzBZt65tT5LcibvFy%2BCcSeYctdC5L1RoKDIqtkCPPF34iKPJrTnw0RTVFbbphR7ResjitD%2FA8FxIs1TTg3WQzMTVncAxCdBH6%2BfVoknnn%2BiCRfvem4DmiWx2SojD5SlOn3pSkJqb8ooE7%2F%2FFAKf4wcs6swRn4worNO7MWSrHtHSMJvLk8kGOqUBSb4MmGg3ZhETsK4kQio7L3YGuPUYtE7lSvdWl3nje5lXLBdkkXBzJB2ZNZy7wxCaquBMlbKENUlLeBxZwcgnwnekg0kMFXNklExrWOjLI8oSAobjgc4aRL7XpepTbBBV%2Bl9vjLmMXw%2F4J3NmDn51vW7K7xn7DzvxMfROdMJ9IHTkd2JEWWwpHLDFxw913LYX5deh%2Bx3xkaI8k4p9Q2D2o5KiN1y6&X-Amz-Signature=43b3c169a889be9b7061aff13c9ec470a64d71000d10b91c2abeabdab107666a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOI4SLQU%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPNI0sLd3820t9DqKu6zS%2BrJ%2BUaYuHaFSVMOmO6uffwIgD4li7kZ6NosMtysd4EsufXROUpTwkvaangOXP9CW9nQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKlXC52gooPy9F4d7CrcA%2FGfX8Ss2BzjJJMsij6tAna%2FeRgRJ95mgOmZ%2FBBlwLi3bAyDKGMmq1u4OABgqg%2FsokUKDgfkm5C%2FBXwgEEYH9k%2FO7i6p1nttWg3G%2FuX6SzxFh7Odyd74SyGw1%2FgZBaLPjYD0%2FxLtvkeJKC%2BLqCnzj3IUEO%2Fq8Hsdiqyv6StCwaUBe5aJt7X3zZhYB8Kb4POW%2FYPhGM5iYGNfPi%2Fmiusovp%2FWjfik%2BVvR5Xm0bO1usVG1BFS4vUdPCbZpNlX1SgcVpom7vUx2gggpbhKfdqBrIb8z1C6GXrmPoVnxv3UiQwMJQMDJ5S1v2AFjpyRFFMz%2FVLQFWHZbsFylKn4L9WjOemZfIWdBnWoo8xh0HnNI2M94dyqifsVD3AWv4bOUv7VBjkmjTP0LVQ2inm29trma5%2BBZbQvHPWP6HuLC6xqP1UAyLMErvkj9OnFrF0%2FSvnL35YYyzXVfyjMOGFU3vVzBZt65tT5LcibvFy%2BCcSeYctdC5L1RoKDIqtkCPPF34iKPJrTnw0RTVFbbphR7ResjitD%2FA8FxIs1TTg3WQzMTVncAxCdBH6%2BfVoknnn%2BiCRfvem4DmiWx2SojD5SlOn3pSkJqb8ooE7%2F%2FFAKf4wcs6swRn4worNO7MWSrHtHSMJvLk8kGOqUBSb4MmGg3ZhETsK4kQio7L3YGuPUYtE7lSvdWl3nje5lXLBdkkXBzJB2ZNZy7wxCaquBMlbKENUlLeBxZwcgnwnekg0kMFXNklExrWOjLI8oSAobjgc4aRL7XpepTbBBV%2Bl9vjLmMXw%2F4J3NmDn51vW7K7xn7DzvxMfROdMJ9IHTkd2JEWWwpHLDFxw913LYX5deh%2Bx3xkaI8k4p9Q2D2o5KiN1y6&X-Amz-Signature=1d31bb091fdb0329d2ce56ab394d4315590e77be1685e811b3dfd5617cab030c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOI4SLQU%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPNI0sLd3820t9DqKu6zS%2BrJ%2BUaYuHaFSVMOmO6uffwIgD4li7kZ6NosMtysd4EsufXROUpTwkvaangOXP9CW9nQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKlXC52gooPy9F4d7CrcA%2FGfX8Ss2BzjJJMsij6tAna%2FeRgRJ95mgOmZ%2FBBlwLi3bAyDKGMmq1u4OABgqg%2FsokUKDgfkm5C%2FBXwgEEYH9k%2FO7i6p1nttWg3G%2FuX6SzxFh7Odyd74SyGw1%2FgZBaLPjYD0%2FxLtvkeJKC%2BLqCnzj3IUEO%2Fq8Hsdiqyv6StCwaUBe5aJt7X3zZhYB8Kb4POW%2FYPhGM5iYGNfPi%2Fmiusovp%2FWjfik%2BVvR5Xm0bO1usVG1BFS4vUdPCbZpNlX1SgcVpom7vUx2gggpbhKfdqBrIb8z1C6GXrmPoVnxv3UiQwMJQMDJ5S1v2AFjpyRFFMz%2FVLQFWHZbsFylKn4L9WjOemZfIWdBnWoo8xh0HnNI2M94dyqifsVD3AWv4bOUv7VBjkmjTP0LVQ2inm29trma5%2BBZbQvHPWP6HuLC6xqP1UAyLMErvkj9OnFrF0%2FSvnL35YYyzXVfyjMOGFU3vVzBZt65tT5LcibvFy%2BCcSeYctdC5L1RoKDIqtkCPPF34iKPJrTnw0RTVFbbphR7ResjitD%2FA8FxIs1TTg3WQzMTVncAxCdBH6%2BfVoknnn%2BiCRfvem4DmiWx2SojD5SlOn3pSkJqb8ooE7%2F%2FFAKf4wcs6swRn4worNO7MWSrHtHSMJvLk8kGOqUBSb4MmGg3ZhETsK4kQio7L3YGuPUYtE7lSvdWl3nje5lXLBdkkXBzJB2ZNZy7wxCaquBMlbKENUlLeBxZwcgnwnekg0kMFXNklExrWOjLI8oSAobjgc4aRL7XpepTbBBV%2Bl9vjLmMXw%2F4J3NmDn51vW7K7xn7DzvxMfROdMJ9IHTkd2JEWWwpHLDFxw913LYX5deh%2Bx3xkaI8k4p9Q2D2o5KiN1y6&X-Amz-Signature=1f61645eff4b03a00f95494a9a08b4d233e62118b7cf48ebe12dffb1680a6d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOI4SLQU%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPNI0sLd3820t9DqKu6zS%2BrJ%2BUaYuHaFSVMOmO6uffwIgD4li7kZ6NosMtysd4EsufXROUpTwkvaangOXP9CW9nQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKlXC52gooPy9F4d7CrcA%2FGfX8Ss2BzjJJMsij6tAna%2FeRgRJ95mgOmZ%2FBBlwLi3bAyDKGMmq1u4OABgqg%2FsokUKDgfkm5C%2FBXwgEEYH9k%2FO7i6p1nttWg3G%2FuX6SzxFh7Odyd74SyGw1%2FgZBaLPjYD0%2FxLtvkeJKC%2BLqCnzj3IUEO%2Fq8Hsdiqyv6StCwaUBe5aJt7X3zZhYB8Kb4POW%2FYPhGM5iYGNfPi%2Fmiusovp%2FWjfik%2BVvR5Xm0bO1usVG1BFS4vUdPCbZpNlX1SgcVpom7vUx2gggpbhKfdqBrIb8z1C6GXrmPoVnxv3UiQwMJQMDJ5S1v2AFjpyRFFMz%2FVLQFWHZbsFylKn4L9WjOemZfIWdBnWoo8xh0HnNI2M94dyqifsVD3AWv4bOUv7VBjkmjTP0LVQ2inm29trma5%2BBZbQvHPWP6HuLC6xqP1UAyLMErvkj9OnFrF0%2FSvnL35YYyzXVfyjMOGFU3vVzBZt65tT5LcibvFy%2BCcSeYctdC5L1RoKDIqtkCPPF34iKPJrTnw0RTVFbbphR7ResjitD%2FA8FxIs1TTg3WQzMTVncAxCdBH6%2BfVoknnn%2BiCRfvem4DmiWx2SojD5SlOn3pSkJqb8ooE7%2F%2FFAKf4wcs6swRn4worNO7MWSrHtHSMJvLk8kGOqUBSb4MmGg3ZhETsK4kQio7L3YGuPUYtE7lSvdWl3nje5lXLBdkkXBzJB2ZNZy7wxCaquBMlbKENUlLeBxZwcgnwnekg0kMFXNklExrWOjLI8oSAobjgc4aRL7XpepTbBBV%2Bl9vjLmMXw%2F4J3NmDn51vW7K7xn7DzvxMfROdMJ9IHTkd2JEWWwpHLDFxw913LYX5deh%2Bx3xkaI8k4p9Q2D2o5KiN1y6&X-Amz-Signature=f1d3ac1f3eef3f13630dbf4707aa8a566d7027afafd1f556a0930267cce835ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOI4SLQU%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPNI0sLd3820t9DqKu6zS%2BrJ%2BUaYuHaFSVMOmO6uffwIgD4li7kZ6NosMtysd4EsufXROUpTwkvaangOXP9CW9nQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKlXC52gooPy9F4d7CrcA%2FGfX8Ss2BzjJJMsij6tAna%2FeRgRJ95mgOmZ%2FBBlwLi3bAyDKGMmq1u4OABgqg%2FsokUKDgfkm5C%2FBXwgEEYH9k%2FO7i6p1nttWg3G%2FuX6SzxFh7Odyd74SyGw1%2FgZBaLPjYD0%2FxLtvkeJKC%2BLqCnzj3IUEO%2Fq8Hsdiqyv6StCwaUBe5aJt7X3zZhYB8Kb4POW%2FYPhGM5iYGNfPi%2Fmiusovp%2FWjfik%2BVvR5Xm0bO1usVG1BFS4vUdPCbZpNlX1SgcVpom7vUx2gggpbhKfdqBrIb8z1C6GXrmPoVnxv3UiQwMJQMDJ5S1v2AFjpyRFFMz%2FVLQFWHZbsFylKn4L9WjOemZfIWdBnWoo8xh0HnNI2M94dyqifsVD3AWv4bOUv7VBjkmjTP0LVQ2inm29trma5%2BBZbQvHPWP6HuLC6xqP1UAyLMErvkj9OnFrF0%2FSvnL35YYyzXVfyjMOGFU3vVzBZt65tT5LcibvFy%2BCcSeYctdC5L1RoKDIqtkCPPF34iKPJrTnw0RTVFbbphR7ResjitD%2FA8FxIs1TTg3WQzMTVncAxCdBH6%2BfVoknnn%2BiCRfvem4DmiWx2SojD5SlOn3pSkJqb8ooE7%2F%2FFAKf4wcs6swRn4worNO7MWSrHtHSMJvLk8kGOqUBSb4MmGg3ZhETsK4kQio7L3YGuPUYtE7lSvdWl3nje5lXLBdkkXBzJB2ZNZy7wxCaquBMlbKENUlLeBxZwcgnwnekg0kMFXNklExrWOjLI8oSAobjgc4aRL7XpepTbBBV%2Bl9vjLmMXw%2F4J3NmDn51vW7K7xn7DzvxMfROdMJ9IHTkd2JEWWwpHLDFxw913LYX5deh%2Bx3xkaI8k4p9Q2D2o5KiN1y6&X-Amz-Signature=fed452f2d03f6bec41870ac06f6719f73c19eb19c87926f85d2a31be8ba276b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOI4SLQU%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPNI0sLd3820t9DqKu6zS%2BrJ%2BUaYuHaFSVMOmO6uffwIgD4li7kZ6NosMtysd4EsufXROUpTwkvaangOXP9CW9nQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKlXC52gooPy9F4d7CrcA%2FGfX8Ss2BzjJJMsij6tAna%2FeRgRJ95mgOmZ%2FBBlwLi3bAyDKGMmq1u4OABgqg%2FsokUKDgfkm5C%2FBXwgEEYH9k%2FO7i6p1nttWg3G%2FuX6SzxFh7Odyd74SyGw1%2FgZBaLPjYD0%2FxLtvkeJKC%2BLqCnzj3IUEO%2Fq8Hsdiqyv6StCwaUBe5aJt7X3zZhYB8Kb4POW%2FYPhGM5iYGNfPi%2Fmiusovp%2FWjfik%2BVvR5Xm0bO1usVG1BFS4vUdPCbZpNlX1SgcVpom7vUx2gggpbhKfdqBrIb8z1C6GXrmPoVnxv3UiQwMJQMDJ5S1v2AFjpyRFFMz%2FVLQFWHZbsFylKn4L9WjOemZfIWdBnWoo8xh0HnNI2M94dyqifsVD3AWv4bOUv7VBjkmjTP0LVQ2inm29trma5%2BBZbQvHPWP6HuLC6xqP1UAyLMErvkj9OnFrF0%2FSvnL35YYyzXVfyjMOGFU3vVzBZt65tT5LcibvFy%2BCcSeYctdC5L1RoKDIqtkCPPF34iKPJrTnw0RTVFbbphR7ResjitD%2FA8FxIs1TTg3WQzMTVncAxCdBH6%2BfVoknnn%2BiCRfvem4DmiWx2SojD5SlOn3pSkJqb8ooE7%2F%2FFAKf4wcs6swRn4worNO7MWSrHtHSMJvLk8kGOqUBSb4MmGg3ZhETsK4kQio7L3YGuPUYtE7lSvdWl3nje5lXLBdkkXBzJB2ZNZy7wxCaquBMlbKENUlLeBxZwcgnwnekg0kMFXNklExrWOjLI8oSAobjgc4aRL7XpepTbBBV%2Bl9vjLmMXw%2F4J3NmDn51vW7K7xn7DzvxMfROdMJ9IHTkd2JEWWwpHLDFxw913LYX5deh%2Bx3xkaI8k4p9Q2D2o5KiN1y6&X-Amz-Signature=49ea7eda58b514cc89a6e99dc0c6cc1686cc09bfe7d5ccdbc8e95a0f13ca22e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOI4SLQU%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPNI0sLd3820t9DqKu6zS%2BrJ%2BUaYuHaFSVMOmO6uffwIgD4li7kZ6NosMtysd4EsufXROUpTwkvaangOXP9CW9nQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKlXC52gooPy9F4d7CrcA%2FGfX8Ss2BzjJJMsij6tAna%2FeRgRJ95mgOmZ%2FBBlwLi3bAyDKGMmq1u4OABgqg%2FsokUKDgfkm5C%2FBXwgEEYH9k%2FO7i6p1nttWg3G%2FuX6SzxFh7Odyd74SyGw1%2FgZBaLPjYD0%2FxLtvkeJKC%2BLqCnzj3IUEO%2Fq8Hsdiqyv6StCwaUBe5aJt7X3zZhYB8Kb4POW%2FYPhGM5iYGNfPi%2Fmiusovp%2FWjfik%2BVvR5Xm0bO1usVG1BFS4vUdPCbZpNlX1SgcVpom7vUx2gggpbhKfdqBrIb8z1C6GXrmPoVnxv3UiQwMJQMDJ5S1v2AFjpyRFFMz%2FVLQFWHZbsFylKn4L9WjOemZfIWdBnWoo8xh0HnNI2M94dyqifsVD3AWv4bOUv7VBjkmjTP0LVQ2inm29trma5%2BBZbQvHPWP6HuLC6xqP1UAyLMErvkj9OnFrF0%2FSvnL35YYyzXVfyjMOGFU3vVzBZt65tT5LcibvFy%2BCcSeYctdC5L1RoKDIqtkCPPF34iKPJrTnw0RTVFbbphR7ResjitD%2FA8FxIs1TTg3WQzMTVncAxCdBH6%2BfVoknnn%2BiCRfvem4DmiWx2SojD5SlOn3pSkJqb8ooE7%2F%2FFAKf4wcs6swRn4worNO7MWSrHtHSMJvLk8kGOqUBSb4MmGg3ZhETsK4kQio7L3YGuPUYtE7lSvdWl3nje5lXLBdkkXBzJB2ZNZy7wxCaquBMlbKENUlLeBxZwcgnwnekg0kMFXNklExrWOjLI8oSAobjgc4aRL7XpepTbBBV%2Bl9vjLmMXw%2F4J3NmDn51vW7K7xn7DzvxMfROdMJ9IHTkd2JEWWwpHLDFxw913LYX5deh%2Bx3xkaI8k4p9Q2D2o5KiN1y6&X-Amz-Signature=1bf897e32f0d7fc264d0dc6695182d71fc785bedf1780c83c4f23a3923a796e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOI4SLQU%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPNI0sLd3820t9DqKu6zS%2BrJ%2BUaYuHaFSVMOmO6uffwIgD4li7kZ6NosMtysd4EsufXROUpTwkvaangOXP9CW9nQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKlXC52gooPy9F4d7CrcA%2FGfX8Ss2BzjJJMsij6tAna%2FeRgRJ95mgOmZ%2FBBlwLi3bAyDKGMmq1u4OABgqg%2FsokUKDgfkm5C%2FBXwgEEYH9k%2FO7i6p1nttWg3G%2FuX6SzxFh7Odyd74SyGw1%2FgZBaLPjYD0%2FxLtvkeJKC%2BLqCnzj3IUEO%2Fq8Hsdiqyv6StCwaUBe5aJt7X3zZhYB8Kb4POW%2FYPhGM5iYGNfPi%2Fmiusovp%2FWjfik%2BVvR5Xm0bO1usVG1BFS4vUdPCbZpNlX1SgcVpom7vUx2gggpbhKfdqBrIb8z1C6GXrmPoVnxv3UiQwMJQMDJ5S1v2AFjpyRFFMz%2FVLQFWHZbsFylKn4L9WjOemZfIWdBnWoo8xh0HnNI2M94dyqifsVD3AWv4bOUv7VBjkmjTP0LVQ2inm29trma5%2BBZbQvHPWP6HuLC6xqP1UAyLMErvkj9OnFrF0%2FSvnL35YYyzXVfyjMOGFU3vVzBZt65tT5LcibvFy%2BCcSeYctdC5L1RoKDIqtkCPPF34iKPJrTnw0RTVFbbphR7ResjitD%2FA8FxIs1TTg3WQzMTVncAxCdBH6%2BfVoknnn%2BiCRfvem4DmiWx2SojD5SlOn3pSkJqb8ooE7%2F%2FFAKf4wcs6swRn4worNO7MWSrHtHSMJvLk8kGOqUBSb4MmGg3ZhETsK4kQio7L3YGuPUYtE7lSvdWl3nje5lXLBdkkXBzJB2ZNZy7wxCaquBMlbKENUlLeBxZwcgnwnekg0kMFXNklExrWOjLI8oSAobjgc4aRL7XpepTbBBV%2Bl9vjLmMXw%2F4J3NmDn51vW7K7xn7DzvxMfROdMJ9IHTkd2JEWWwpHLDFxw913LYX5deh%2Bx3xkaI8k4p9Q2D2o5KiN1y6&X-Amz-Signature=951c723deba690357d06ad7518cc343ad3e7920de4079df5ebdc39df0f6e7ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
