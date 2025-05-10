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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTROU2HO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpJyphYzS6VTs69oCMBDLySOAEagHiSUy8WM6h3OzCgIhAMstzQ6unxAPO8ixRryAbOo66zPhPh3vY9Q0mZRyeCBvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUPcoizFtlSfy8R0gq3AOghl1YWv1%2B3OiTJbM6lJyTuPU8vCB1zG0sMuHDySNWoMj3XxFLAn%2BV8yIsdMDbI3dd4724GBR2Hg%2Bqgz4yVhBgTLFfx0ON%2BhDOqDgP0Y0zBduvQANN2ORa3MvKzjvjud%2FfaHpzrVAO5eu6%2B%2BmjQr7T3XnRhv5aZILYUMCFreqBdZqJG%2B%2BDVfFVOHyXryjyIoEAtx5HqmsJrKyVep0gZ1ewV9PT4aFIgneaJz0Pldp0s25nh%2FR57ATav1HnNpJzPTZBMNrduQCWpdFP2CA3dqqgYW6Niz73IC%2Fvsx4R%2FJH%2FBQV0VPOOM4UeSTibG85XyBJ6gJ%2F%2BqXiy9UXA0FgDBh8zV433lyybQ5azkAmEOaxp4YNeBcrHKBmvv7Lm%2FUzf3%2BuS9dvRHFA0%2FYLz13dJ26i68GKAfCLqrBMDbQ1QBd%2FquZoIQuHBVpuj1Yc5RZ0wjH5EbWlJnBTJbOMYpwQbVOnxZqy42V9EYnkb729f%2FDB3hymD%2Fqnxd1DFFLFAL%2BkIXqnT7Hnw84aCdf4bubz7Ckai4ypg3m6mlxtuAJexEABSIW4g5H9QtRwUYiMbiNeX2KrHrb5xz%2Bj3bGrfKOe08t9pewn11%2BC%2F30Fd6eMaoE0TST%2BKrsIbscccZsRWwTCZtf3ABjqkAZ4CfZH5zzaneOfcla0B4Cq80qYDnzw8YqXKZCdK6tx89cwVVzDKpE0CejMeTvzDFNCyOnxU9KJ9lLSxJgsO97K2%2F2ByvJb6pBD0zuQL1BrSO6hHprGHn27e8Ov8rem4cR4ld%2FHvkKhx2EjCm4qKkyr2%2By%2FJ6z6snVrPsM16Ye4YgLpIz2gSG1EnKq0SyfcbfQgortPPLQnOWg44012mP4HUGD0C&X-Amz-Signature=7790efae8de470866080af80c7b99df1013dfa9577afe7525dfb81d822830810&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTROU2HO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpJyphYzS6VTs69oCMBDLySOAEagHiSUy8WM6h3OzCgIhAMstzQ6unxAPO8ixRryAbOo66zPhPh3vY9Q0mZRyeCBvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUPcoizFtlSfy8R0gq3AOghl1YWv1%2B3OiTJbM6lJyTuPU8vCB1zG0sMuHDySNWoMj3XxFLAn%2BV8yIsdMDbI3dd4724GBR2Hg%2Bqgz4yVhBgTLFfx0ON%2BhDOqDgP0Y0zBduvQANN2ORa3MvKzjvjud%2FfaHpzrVAO5eu6%2B%2BmjQr7T3XnRhv5aZILYUMCFreqBdZqJG%2B%2BDVfFVOHyXryjyIoEAtx5HqmsJrKyVep0gZ1ewV9PT4aFIgneaJz0Pldp0s25nh%2FR57ATav1HnNpJzPTZBMNrduQCWpdFP2CA3dqqgYW6Niz73IC%2Fvsx4R%2FJH%2FBQV0VPOOM4UeSTibG85XyBJ6gJ%2F%2BqXiy9UXA0FgDBh8zV433lyybQ5azkAmEOaxp4YNeBcrHKBmvv7Lm%2FUzf3%2BuS9dvRHFA0%2FYLz13dJ26i68GKAfCLqrBMDbQ1QBd%2FquZoIQuHBVpuj1Yc5RZ0wjH5EbWlJnBTJbOMYpwQbVOnxZqy42V9EYnkb729f%2FDB3hymD%2Fqnxd1DFFLFAL%2BkIXqnT7Hnw84aCdf4bubz7Ckai4ypg3m6mlxtuAJexEABSIW4g5H9QtRwUYiMbiNeX2KrHrb5xz%2Bj3bGrfKOe08t9pewn11%2BC%2F30Fd6eMaoE0TST%2BKrsIbscccZsRWwTCZtf3ABjqkAZ4CfZH5zzaneOfcla0B4Cq80qYDnzw8YqXKZCdK6tx89cwVVzDKpE0CejMeTvzDFNCyOnxU9KJ9lLSxJgsO97K2%2F2ByvJb6pBD0zuQL1BrSO6hHprGHn27e8Ov8rem4cR4ld%2FHvkKhx2EjCm4qKkyr2%2By%2FJ6z6snVrPsM16Ye4YgLpIz2gSG1EnKq0SyfcbfQgortPPLQnOWg44012mP4HUGD0C&X-Amz-Signature=19a52f8e9d9de777192f46948a6e446e93b807709dac2232d15604cf9f8076bc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTROU2HO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpJyphYzS6VTs69oCMBDLySOAEagHiSUy8WM6h3OzCgIhAMstzQ6unxAPO8ixRryAbOo66zPhPh3vY9Q0mZRyeCBvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUPcoizFtlSfy8R0gq3AOghl1YWv1%2B3OiTJbM6lJyTuPU8vCB1zG0sMuHDySNWoMj3XxFLAn%2BV8yIsdMDbI3dd4724GBR2Hg%2Bqgz4yVhBgTLFfx0ON%2BhDOqDgP0Y0zBduvQANN2ORa3MvKzjvjud%2FfaHpzrVAO5eu6%2B%2BmjQr7T3XnRhv5aZILYUMCFreqBdZqJG%2B%2BDVfFVOHyXryjyIoEAtx5HqmsJrKyVep0gZ1ewV9PT4aFIgneaJz0Pldp0s25nh%2FR57ATav1HnNpJzPTZBMNrduQCWpdFP2CA3dqqgYW6Niz73IC%2Fvsx4R%2FJH%2FBQV0VPOOM4UeSTibG85XyBJ6gJ%2F%2BqXiy9UXA0FgDBh8zV433lyybQ5azkAmEOaxp4YNeBcrHKBmvv7Lm%2FUzf3%2BuS9dvRHFA0%2FYLz13dJ26i68GKAfCLqrBMDbQ1QBd%2FquZoIQuHBVpuj1Yc5RZ0wjH5EbWlJnBTJbOMYpwQbVOnxZqy42V9EYnkb729f%2FDB3hymD%2Fqnxd1DFFLFAL%2BkIXqnT7Hnw84aCdf4bubz7Ckai4ypg3m6mlxtuAJexEABSIW4g5H9QtRwUYiMbiNeX2KrHrb5xz%2Bj3bGrfKOe08t9pewn11%2BC%2F30Fd6eMaoE0TST%2BKrsIbscccZsRWwTCZtf3ABjqkAZ4CfZH5zzaneOfcla0B4Cq80qYDnzw8YqXKZCdK6tx89cwVVzDKpE0CejMeTvzDFNCyOnxU9KJ9lLSxJgsO97K2%2F2ByvJb6pBD0zuQL1BrSO6hHprGHn27e8Ov8rem4cR4ld%2FHvkKhx2EjCm4qKkyr2%2By%2FJ6z6snVrPsM16Ye4YgLpIz2gSG1EnKq0SyfcbfQgortPPLQnOWg44012mP4HUGD0C&X-Amz-Signature=c4bfe476e2cb3355e61b89a3bcbb86a0ff013d1361474c8348e1e76042ce0b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTROU2HO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpJyphYzS6VTs69oCMBDLySOAEagHiSUy8WM6h3OzCgIhAMstzQ6unxAPO8ixRryAbOo66zPhPh3vY9Q0mZRyeCBvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUPcoizFtlSfy8R0gq3AOghl1YWv1%2B3OiTJbM6lJyTuPU8vCB1zG0sMuHDySNWoMj3XxFLAn%2BV8yIsdMDbI3dd4724GBR2Hg%2Bqgz4yVhBgTLFfx0ON%2BhDOqDgP0Y0zBduvQANN2ORa3MvKzjvjud%2FfaHpzrVAO5eu6%2B%2BmjQr7T3XnRhv5aZILYUMCFreqBdZqJG%2B%2BDVfFVOHyXryjyIoEAtx5HqmsJrKyVep0gZ1ewV9PT4aFIgneaJz0Pldp0s25nh%2FR57ATav1HnNpJzPTZBMNrduQCWpdFP2CA3dqqgYW6Niz73IC%2Fvsx4R%2FJH%2FBQV0VPOOM4UeSTibG85XyBJ6gJ%2F%2BqXiy9UXA0FgDBh8zV433lyybQ5azkAmEOaxp4YNeBcrHKBmvv7Lm%2FUzf3%2BuS9dvRHFA0%2FYLz13dJ26i68GKAfCLqrBMDbQ1QBd%2FquZoIQuHBVpuj1Yc5RZ0wjH5EbWlJnBTJbOMYpwQbVOnxZqy42V9EYnkb729f%2FDB3hymD%2Fqnxd1DFFLFAL%2BkIXqnT7Hnw84aCdf4bubz7Ckai4ypg3m6mlxtuAJexEABSIW4g5H9QtRwUYiMbiNeX2KrHrb5xz%2Bj3bGrfKOe08t9pewn11%2BC%2F30Fd6eMaoE0TST%2BKrsIbscccZsRWwTCZtf3ABjqkAZ4CfZH5zzaneOfcla0B4Cq80qYDnzw8YqXKZCdK6tx89cwVVzDKpE0CejMeTvzDFNCyOnxU9KJ9lLSxJgsO97K2%2F2ByvJb6pBD0zuQL1BrSO6hHprGHn27e8Ov8rem4cR4ld%2FHvkKhx2EjCm4qKkyr2%2By%2FJ6z6snVrPsM16Ye4YgLpIz2gSG1EnKq0SyfcbfQgortPPLQnOWg44012mP4HUGD0C&X-Amz-Signature=0d1c43691255a8c1c6399761e26ea15f098b5413ebe890330bf1a6c5b005f5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTROU2HO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpJyphYzS6VTs69oCMBDLySOAEagHiSUy8WM6h3OzCgIhAMstzQ6unxAPO8ixRryAbOo66zPhPh3vY9Q0mZRyeCBvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUPcoizFtlSfy8R0gq3AOghl1YWv1%2B3OiTJbM6lJyTuPU8vCB1zG0sMuHDySNWoMj3XxFLAn%2BV8yIsdMDbI3dd4724GBR2Hg%2Bqgz4yVhBgTLFfx0ON%2BhDOqDgP0Y0zBduvQANN2ORa3MvKzjvjud%2FfaHpzrVAO5eu6%2B%2BmjQr7T3XnRhv5aZILYUMCFreqBdZqJG%2B%2BDVfFVOHyXryjyIoEAtx5HqmsJrKyVep0gZ1ewV9PT4aFIgneaJz0Pldp0s25nh%2FR57ATav1HnNpJzPTZBMNrduQCWpdFP2CA3dqqgYW6Niz73IC%2Fvsx4R%2FJH%2FBQV0VPOOM4UeSTibG85XyBJ6gJ%2F%2BqXiy9UXA0FgDBh8zV433lyybQ5azkAmEOaxp4YNeBcrHKBmvv7Lm%2FUzf3%2BuS9dvRHFA0%2FYLz13dJ26i68GKAfCLqrBMDbQ1QBd%2FquZoIQuHBVpuj1Yc5RZ0wjH5EbWlJnBTJbOMYpwQbVOnxZqy42V9EYnkb729f%2FDB3hymD%2Fqnxd1DFFLFAL%2BkIXqnT7Hnw84aCdf4bubz7Ckai4ypg3m6mlxtuAJexEABSIW4g5H9QtRwUYiMbiNeX2KrHrb5xz%2Bj3bGrfKOe08t9pewn11%2BC%2F30Fd6eMaoE0TST%2BKrsIbscccZsRWwTCZtf3ABjqkAZ4CfZH5zzaneOfcla0B4Cq80qYDnzw8YqXKZCdK6tx89cwVVzDKpE0CejMeTvzDFNCyOnxU9KJ9lLSxJgsO97K2%2F2ByvJb6pBD0zuQL1BrSO6hHprGHn27e8Ov8rem4cR4ld%2FHvkKhx2EjCm4qKkyr2%2By%2FJ6z6snVrPsM16Ye4YgLpIz2gSG1EnKq0SyfcbfQgortPPLQnOWg44012mP4HUGD0C&X-Amz-Signature=193bdbe45ec0810c2b8c410426f085ac07a6fda1c6a90391026a3d73e341940d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTROU2HO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpJyphYzS6VTs69oCMBDLySOAEagHiSUy8WM6h3OzCgIhAMstzQ6unxAPO8ixRryAbOo66zPhPh3vY9Q0mZRyeCBvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUPcoizFtlSfy8R0gq3AOghl1YWv1%2B3OiTJbM6lJyTuPU8vCB1zG0sMuHDySNWoMj3XxFLAn%2BV8yIsdMDbI3dd4724GBR2Hg%2Bqgz4yVhBgTLFfx0ON%2BhDOqDgP0Y0zBduvQANN2ORa3MvKzjvjud%2FfaHpzrVAO5eu6%2B%2BmjQr7T3XnRhv5aZILYUMCFreqBdZqJG%2B%2BDVfFVOHyXryjyIoEAtx5HqmsJrKyVep0gZ1ewV9PT4aFIgneaJz0Pldp0s25nh%2FR57ATav1HnNpJzPTZBMNrduQCWpdFP2CA3dqqgYW6Niz73IC%2Fvsx4R%2FJH%2FBQV0VPOOM4UeSTibG85XyBJ6gJ%2F%2BqXiy9UXA0FgDBh8zV433lyybQ5azkAmEOaxp4YNeBcrHKBmvv7Lm%2FUzf3%2BuS9dvRHFA0%2FYLz13dJ26i68GKAfCLqrBMDbQ1QBd%2FquZoIQuHBVpuj1Yc5RZ0wjH5EbWlJnBTJbOMYpwQbVOnxZqy42V9EYnkb729f%2FDB3hymD%2Fqnxd1DFFLFAL%2BkIXqnT7Hnw84aCdf4bubz7Ckai4ypg3m6mlxtuAJexEABSIW4g5H9QtRwUYiMbiNeX2KrHrb5xz%2Bj3bGrfKOe08t9pewn11%2BC%2F30Fd6eMaoE0TST%2BKrsIbscccZsRWwTCZtf3ABjqkAZ4CfZH5zzaneOfcla0B4Cq80qYDnzw8YqXKZCdK6tx89cwVVzDKpE0CejMeTvzDFNCyOnxU9KJ9lLSxJgsO97K2%2F2ByvJb6pBD0zuQL1BrSO6hHprGHn27e8Ov8rem4cR4ld%2FHvkKhx2EjCm4qKkyr2%2By%2FJ6z6snVrPsM16Ye4YgLpIz2gSG1EnKq0SyfcbfQgortPPLQnOWg44012mP4HUGD0C&X-Amz-Signature=54768bfc2e86c4328d177dea5604a07d12ee4ec440714e14cd74db6b216ff89c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTROU2HO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpJyphYzS6VTs69oCMBDLySOAEagHiSUy8WM6h3OzCgIhAMstzQ6unxAPO8ixRryAbOo66zPhPh3vY9Q0mZRyeCBvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUPcoizFtlSfy8R0gq3AOghl1YWv1%2B3OiTJbM6lJyTuPU8vCB1zG0sMuHDySNWoMj3XxFLAn%2BV8yIsdMDbI3dd4724GBR2Hg%2Bqgz4yVhBgTLFfx0ON%2BhDOqDgP0Y0zBduvQANN2ORa3MvKzjvjud%2FfaHpzrVAO5eu6%2B%2BmjQr7T3XnRhv5aZILYUMCFreqBdZqJG%2B%2BDVfFVOHyXryjyIoEAtx5HqmsJrKyVep0gZ1ewV9PT4aFIgneaJz0Pldp0s25nh%2FR57ATav1HnNpJzPTZBMNrduQCWpdFP2CA3dqqgYW6Niz73IC%2Fvsx4R%2FJH%2FBQV0VPOOM4UeSTibG85XyBJ6gJ%2F%2BqXiy9UXA0FgDBh8zV433lyybQ5azkAmEOaxp4YNeBcrHKBmvv7Lm%2FUzf3%2BuS9dvRHFA0%2FYLz13dJ26i68GKAfCLqrBMDbQ1QBd%2FquZoIQuHBVpuj1Yc5RZ0wjH5EbWlJnBTJbOMYpwQbVOnxZqy42V9EYnkb729f%2FDB3hymD%2Fqnxd1DFFLFAL%2BkIXqnT7Hnw84aCdf4bubz7Ckai4ypg3m6mlxtuAJexEABSIW4g5H9QtRwUYiMbiNeX2KrHrb5xz%2Bj3bGrfKOe08t9pewn11%2BC%2F30Fd6eMaoE0TST%2BKrsIbscccZsRWwTCZtf3ABjqkAZ4CfZH5zzaneOfcla0B4Cq80qYDnzw8YqXKZCdK6tx89cwVVzDKpE0CejMeTvzDFNCyOnxU9KJ9lLSxJgsO97K2%2F2ByvJb6pBD0zuQL1BrSO6hHprGHn27e8Ov8rem4cR4ld%2FHvkKhx2EjCm4qKkyr2%2By%2FJ6z6snVrPsM16Ye4YgLpIz2gSG1EnKq0SyfcbfQgortPPLQnOWg44012mP4HUGD0C&X-Amz-Signature=b99bb0bf1a09eeec76cdce7dedd2fff6a04a2007679002b438bcd7e2e2e44783&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTROU2HO%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIpJyphYzS6VTs69oCMBDLySOAEagHiSUy8WM6h3OzCgIhAMstzQ6unxAPO8ixRryAbOo66zPhPh3vY9Q0mZRyeCBvKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUPcoizFtlSfy8R0gq3AOghl1YWv1%2B3OiTJbM6lJyTuPU8vCB1zG0sMuHDySNWoMj3XxFLAn%2BV8yIsdMDbI3dd4724GBR2Hg%2Bqgz4yVhBgTLFfx0ON%2BhDOqDgP0Y0zBduvQANN2ORa3MvKzjvjud%2FfaHpzrVAO5eu6%2B%2BmjQr7T3XnRhv5aZILYUMCFreqBdZqJG%2B%2BDVfFVOHyXryjyIoEAtx5HqmsJrKyVep0gZ1ewV9PT4aFIgneaJz0Pldp0s25nh%2FR57ATav1HnNpJzPTZBMNrduQCWpdFP2CA3dqqgYW6Niz73IC%2Fvsx4R%2FJH%2FBQV0VPOOM4UeSTibG85XyBJ6gJ%2F%2BqXiy9UXA0FgDBh8zV433lyybQ5azkAmEOaxp4YNeBcrHKBmvv7Lm%2FUzf3%2BuS9dvRHFA0%2FYLz13dJ26i68GKAfCLqrBMDbQ1QBd%2FquZoIQuHBVpuj1Yc5RZ0wjH5EbWlJnBTJbOMYpwQbVOnxZqy42V9EYnkb729f%2FDB3hymD%2Fqnxd1DFFLFAL%2BkIXqnT7Hnw84aCdf4bubz7Ckai4ypg3m6mlxtuAJexEABSIW4g5H9QtRwUYiMbiNeX2KrHrb5xz%2Bj3bGrfKOe08t9pewn11%2BC%2F30Fd6eMaoE0TST%2BKrsIbscccZsRWwTCZtf3ABjqkAZ4CfZH5zzaneOfcla0B4Cq80qYDnzw8YqXKZCdK6tx89cwVVzDKpE0CejMeTvzDFNCyOnxU9KJ9lLSxJgsO97K2%2F2ByvJb6pBD0zuQL1BrSO6hHprGHn27e8Ov8rem4cR4ld%2FHvkKhx2EjCm4qKkyr2%2By%2FJ6z6snVrPsM16Ye4YgLpIz2gSG1EnKq0SyfcbfQgortPPLQnOWg44012mP4HUGD0C&X-Amz-Signature=d38ff777c125aa69536b6f7f05d8dbd8782432594d5ee1a0a5042d43c5e20f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
