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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=5971908d5c2c981cdc724caafea31202c968633ed064c73865ef619fc91e1b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=8c042fa6b9da6278ac735e221070f001d283ba264512adcf1e9698765e27448e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=e7b045c09929b38531857498358d54f25372affbd9b2dd7a44e5c6aecf2f4774&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=75a96da02740333d19286bbdffe2c54e6a09c076668e0943ed740e94bad4edcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=7241eed33b2e042951bd0f8922e15b19577153fa817690de41e6b44e296dab57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=d611ef15808ba790a2bef8a19dadee1686fb6ea94fe16de95bdc1800ecbd26bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=9cb822564a64c9663c3b48cee2289a907525f7e61dc22c2faf5490b79120a00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3QFX6C%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T101009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2BQDUgfL%2Br9F%2F8Pps6YvS%2BfnkZ8Hhn04FEDf0MloaSwIhALiC4sOv%2BV5Ow5G1BAYhxPIHeQx0FxB2T%2Fn%2FzRj%2F%2FtHIKv8DCCsQABoMNjM3NDIzMTgzODA1IgxP7hJXcVa08hcZLyYq3ANDAuMMqwwY7GBqSA81Y4iOFrVzNhcO1TlMHAzE1q6SvRT1uBmVNH1vn7vlZ4TurQgqA2jQNNWGeMwkrP08TEG4XA%2FmZZJJ%2BrAoR3%2F9C8%2BRTa0u1CbX5qjLiNGakamOJGpWEa1qfnU%2FU4jUFuWnoyS59kUJT0eA%2BQ4sFMTGVz6zxKqBTxARSNlytMlCScP4nS9VqH9qxJvYrefsock5viO7BdrTcWcsM9gtRmrWbKyXLBgHnvtPe4BDj6iz8NP1U2H%2BeC1GnDvlMCJ%2FP2%2BZmJTauT9T9Ws39Ipkrk41dBf4dpMSKvn4gRN30azbDxvpN3knUYDjisJW01FgshUVTJqU9uZ1x9t6wPpbqISv2h2b8OOXFNxtDWg%2B2qgZgLZ5ZUZ99Y2t683LXwR1EaaLxqI%2BsA%2BdIvLVyqN4b3PXY2bpw3dJGt3rfBFCCOzGvs1n5xkKJcr5qDxpGkTpN8NND7JGTma%2B%2Fnm2rvHtMU6vdVZbkzPLJywLPE1AZvGDQAyJ6hxoEZEiErMwNIoGM7Yo%2Fs69SCqNucx1mPBXhWUBi19BzQIH6orVh3DidBlMjHSy8XK0EeLxwzCDYLnsbOQIu74enucfNdrq9lkrMHH94DSQnAwStssEv2RYOamVITCSxvHEBjqkAeQL3SRjMtXwlPEK0GQ2DVNwxPKdrHJi3w%2FY7rd4fHqFOqXsK6qIo5%2BconcagmYo0sKcHyDCUEzDAADsPfWojlLivBREKLGD0bJ1C%2BwveVaRx63mHIgnPIId66TKSoV%2B6OBSyZE2VHUOgaHGY%2FGi7Dw8tnzlPVfnotpcKpsJEXxK2hoq3%2BJSUcQe8CNmDhyvDjDtViEqjxuJu0ExDzg6%2BSyd%2FfAF&X-Amz-Signature=f5541ed91784a55bc410c3d703c9b2c92fc91ce1d37deb7144afb6b6df5bcb18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
