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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJ63MOS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrP5TmpaXJGlx8dIoVwHQJ%2B7k9kxqZjb7tv1Er5UbM0AIgOGpM7PQG4FtcC3QnOzOL1T%2FoAG6ZBHUCG9rMbzInD7wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FunQe2GSPwMe4q2SrcA%2FQIBUCaUFSieObqy6eylNKUFq1UmcchvUH3eynfG4IZ0EJ3Q3OzZhMB21fWUZh%2FBerA7VJO7LApEH8GHkkKfuSjP3T8av0sYX1Ky0e68AEoFZ8XjcwEjBZQkCRYIh48T590WWVQKoOg30yEO0fOjE2yBbNfHYvB8ayHvdU5STey0XMCl76r6j14%2FKD57kHPiMxpHw9mK0MYdjyoyHYrM0HjG8ONDt42M3rnREQQ6kzOd7S3fqJDtegK8t70OigKUKzAlHMGp73DuGnfnoW82FdvkqzPJyfsCJo3iR0IziFs1O20itUvEG%2BPnLRrkJszGuCcFSHkOF3RWtcwBFIOUxylLxsndraiA33wUfpGyYLIs0cEIHaGs4b7taFRInQYZAezPycweyY8JaoDjFtmLnlxQ%2Bk9SrgQByWqcOtQjIUSSwc1ypvP2hnsLm9mxAzfqt6jKwQB8gosMI5cyNhHzRHBHUlObgHGQ0%2FL%2FWB%2BJI4ZztsyrlxR%2BnHyhAAdqqn1pLGgnURaGqoNX3yoEWSaVoY8VUdaK0rNx373di%2FZTgbRxBRLJH5F23p9VQIOmem1R1oUhBat87FyLtuCG6JCw%2BZ5xUVtTLMkg61S2icm2bKc2EflnCLSyyDksCLqMMy%2BoL0GOqUB5McPSPMyqvlkGw8uZ0z3%2BXww30OVzIXzLH2uxsutMx8nVxrWIMyCU2ziPMP7w1YetgwoHOspPRd4xR9Ci0noX50QtixaiBm8yYxa7whMZRQIpqn%2Fi%2B3dloAso3ZJRAWNoG%2F8M1yfaWV4PcD56bbh%2FVntoVBwoDmFhxRmlRG9aXBb6VgI%2B3Hy%2F%2Bk%2FNAGLLvYaU5G1lut1OKOIawPlmTZUhNZUcqVr&X-Amz-Signature=75625144a1dc44c3988b8d56dbd231e0d28243e203ad812a2d4d28f6ab63d4cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJ63MOS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrP5TmpaXJGlx8dIoVwHQJ%2B7k9kxqZjb7tv1Er5UbM0AIgOGpM7PQG4FtcC3QnOzOL1T%2FoAG6ZBHUCG9rMbzInD7wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FunQe2GSPwMe4q2SrcA%2FQIBUCaUFSieObqy6eylNKUFq1UmcchvUH3eynfG4IZ0EJ3Q3OzZhMB21fWUZh%2FBerA7VJO7LApEH8GHkkKfuSjP3T8av0sYX1Ky0e68AEoFZ8XjcwEjBZQkCRYIh48T590WWVQKoOg30yEO0fOjE2yBbNfHYvB8ayHvdU5STey0XMCl76r6j14%2FKD57kHPiMxpHw9mK0MYdjyoyHYrM0HjG8ONDt42M3rnREQQ6kzOd7S3fqJDtegK8t70OigKUKzAlHMGp73DuGnfnoW82FdvkqzPJyfsCJo3iR0IziFs1O20itUvEG%2BPnLRrkJszGuCcFSHkOF3RWtcwBFIOUxylLxsndraiA33wUfpGyYLIs0cEIHaGs4b7taFRInQYZAezPycweyY8JaoDjFtmLnlxQ%2Bk9SrgQByWqcOtQjIUSSwc1ypvP2hnsLm9mxAzfqt6jKwQB8gosMI5cyNhHzRHBHUlObgHGQ0%2FL%2FWB%2BJI4ZztsyrlxR%2BnHyhAAdqqn1pLGgnURaGqoNX3yoEWSaVoY8VUdaK0rNx373di%2FZTgbRxBRLJH5F23p9VQIOmem1R1oUhBat87FyLtuCG6JCw%2BZ5xUVtTLMkg61S2icm2bKc2EflnCLSyyDksCLqMMy%2BoL0GOqUB5McPSPMyqvlkGw8uZ0z3%2BXww30OVzIXzLH2uxsutMx8nVxrWIMyCU2ziPMP7w1YetgwoHOspPRd4xR9Ci0noX50QtixaiBm8yYxa7whMZRQIpqn%2Fi%2B3dloAso3ZJRAWNoG%2F8M1yfaWV4PcD56bbh%2FVntoVBwoDmFhxRmlRG9aXBb6VgI%2B3Hy%2F%2Bk%2FNAGLLvYaU5G1lut1OKOIawPlmTZUhNZUcqVr&X-Amz-Signature=d1335feb8fd2e542ed90fbe032ee7ca2657d4fde8df084bb791e2e4210e52b00&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJ63MOS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrP5TmpaXJGlx8dIoVwHQJ%2B7k9kxqZjb7tv1Er5UbM0AIgOGpM7PQG4FtcC3QnOzOL1T%2FoAG6ZBHUCG9rMbzInD7wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FunQe2GSPwMe4q2SrcA%2FQIBUCaUFSieObqy6eylNKUFq1UmcchvUH3eynfG4IZ0EJ3Q3OzZhMB21fWUZh%2FBerA7VJO7LApEH8GHkkKfuSjP3T8av0sYX1Ky0e68AEoFZ8XjcwEjBZQkCRYIh48T590WWVQKoOg30yEO0fOjE2yBbNfHYvB8ayHvdU5STey0XMCl76r6j14%2FKD57kHPiMxpHw9mK0MYdjyoyHYrM0HjG8ONDt42M3rnREQQ6kzOd7S3fqJDtegK8t70OigKUKzAlHMGp73DuGnfnoW82FdvkqzPJyfsCJo3iR0IziFs1O20itUvEG%2BPnLRrkJszGuCcFSHkOF3RWtcwBFIOUxylLxsndraiA33wUfpGyYLIs0cEIHaGs4b7taFRInQYZAezPycweyY8JaoDjFtmLnlxQ%2Bk9SrgQByWqcOtQjIUSSwc1ypvP2hnsLm9mxAzfqt6jKwQB8gosMI5cyNhHzRHBHUlObgHGQ0%2FL%2FWB%2BJI4ZztsyrlxR%2BnHyhAAdqqn1pLGgnURaGqoNX3yoEWSaVoY8VUdaK0rNx373di%2FZTgbRxBRLJH5F23p9VQIOmem1R1oUhBat87FyLtuCG6JCw%2BZ5xUVtTLMkg61S2icm2bKc2EflnCLSyyDksCLqMMy%2BoL0GOqUB5McPSPMyqvlkGw8uZ0z3%2BXww30OVzIXzLH2uxsutMx8nVxrWIMyCU2ziPMP7w1YetgwoHOspPRd4xR9Ci0noX50QtixaiBm8yYxa7whMZRQIpqn%2Fi%2B3dloAso3ZJRAWNoG%2F8M1yfaWV4PcD56bbh%2FVntoVBwoDmFhxRmlRG9aXBb6VgI%2B3Hy%2F%2Bk%2FNAGLLvYaU5G1lut1OKOIawPlmTZUhNZUcqVr&X-Amz-Signature=8b50a3df28c298bcb9f079b7633c579581a10785c839bea8cd8d7fb2a646f070&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJ63MOS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrP5TmpaXJGlx8dIoVwHQJ%2B7k9kxqZjb7tv1Er5UbM0AIgOGpM7PQG4FtcC3QnOzOL1T%2FoAG6ZBHUCG9rMbzInD7wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FunQe2GSPwMe4q2SrcA%2FQIBUCaUFSieObqy6eylNKUFq1UmcchvUH3eynfG4IZ0EJ3Q3OzZhMB21fWUZh%2FBerA7VJO7LApEH8GHkkKfuSjP3T8av0sYX1Ky0e68AEoFZ8XjcwEjBZQkCRYIh48T590WWVQKoOg30yEO0fOjE2yBbNfHYvB8ayHvdU5STey0XMCl76r6j14%2FKD57kHPiMxpHw9mK0MYdjyoyHYrM0HjG8ONDt42M3rnREQQ6kzOd7S3fqJDtegK8t70OigKUKzAlHMGp73DuGnfnoW82FdvkqzPJyfsCJo3iR0IziFs1O20itUvEG%2BPnLRrkJszGuCcFSHkOF3RWtcwBFIOUxylLxsndraiA33wUfpGyYLIs0cEIHaGs4b7taFRInQYZAezPycweyY8JaoDjFtmLnlxQ%2Bk9SrgQByWqcOtQjIUSSwc1ypvP2hnsLm9mxAzfqt6jKwQB8gosMI5cyNhHzRHBHUlObgHGQ0%2FL%2FWB%2BJI4ZztsyrlxR%2BnHyhAAdqqn1pLGgnURaGqoNX3yoEWSaVoY8VUdaK0rNx373di%2FZTgbRxBRLJH5F23p9VQIOmem1R1oUhBat87FyLtuCG6JCw%2BZ5xUVtTLMkg61S2icm2bKc2EflnCLSyyDksCLqMMy%2BoL0GOqUB5McPSPMyqvlkGw8uZ0z3%2BXww30OVzIXzLH2uxsutMx8nVxrWIMyCU2ziPMP7w1YetgwoHOspPRd4xR9Ci0noX50QtixaiBm8yYxa7whMZRQIpqn%2Fi%2B3dloAso3ZJRAWNoG%2F8M1yfaWV4PcD56bbh%2FVntoVBwoDmFhxRmlRG9aXBb6VgI%2B3Hy%2F%2Bk%2FNAGLLvYaU5G1lut1OKOIawPlmTZUhNZUcqVr&X-Amz-Signature=8f08ffaef1ea1611e434c398f27caea45ba26f2dcdbdc78752574ae26d511c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJ63MOS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrP5TmpaXJGlx8dIoVwHQJ%2B7k9kxqZjb7tv1Er5UbM0AIgOGpM7PQG4FtcC3QnOzOL1T%2FoAG6ZBHUCG9rMbzInD7wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FunQe2GSPwMe4q2SrcA%2FQIBUCaUFSieObqy6eylNKUFq1UmcchvUH3eynfG4IZ0EJ3Q3OzZhMB21fWUZh%2FBerA7VJO7LApEH8GHkkKfuSjP3T8av0sYX1Ky0e68AEoFZ8XjcwEjBZQkCRYIh48T590WWVQKoOg30yEO0fOjE2yBbNfHYvB8ayHvdU5STey0XMCl76r6j14%2FKD57kHPiMxpHw9mK0MYdjyoyHYrM0HjG8ONDt42M3rnREQQ6kzOd7S3fqJDtegK8t70OigKUKzAlHMGp73DuGnfnoW82FdvkqzPJyfsCJo3iR0IziFs1O20itUvEG%2BPnLRrkJszGuCcFSHkOF3RWtcwBFIOUxylLxsndraiA33wUfpGyYLIs0cEIHaGs4b7taFRInQYZAezPycweyY8JaoDjFtmLnlxQ%2Bk9SrgQByWqcOtQjIUSSwc1ypvP2hnsLm9mxAzfqt6jKwQB8gosMI5cyNhHzRHBHUlObgHGQ0%2FL%2FWB%2BJI4ZztsyrlxR%2BnHyhAAdqqn1pLGgnURaGqoNX3yoEWSaVoY8VUdaK0rNx373di%2FZTgbRxBRLJH5F23p9VQIOmem1R1oUhBat87FyLtuCG6JCw%2BZ5xUVtTLMkg61S2icm2bKc2EflnCLSyyDksCLqMMy%2BoL0GOqUB5McPSPMyqvlkGw8uZ0z3%2BXww30OVzIXzLH2uxsutMx8nVxrWIMyCU2ziPMP7w1YetgwoHOspPRd4xR9Ci0noX50QtixaiBm8yYxa7whMZRQIpqn%2Fi%2B3dloAso3ZJRAWNoG%2F8M1yfaWV4PcD56bbh%2FVntoVBwoDmFhxRmlRG9aXBb6VgI%2B3Hy%2F%2Bk%2FNAGLLvYaU5G1lut1OKOIawPlmTZUhNZUcqVr&X-Amz-Signature=f9d89bc3990962cd130b07d7aab0de62f68d5847d099408f3e8962f81a8ac343&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJ63MOS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrP5TmpaXJGlx8dIoVwHQJ%2B7k9kxqZjb7tv1Er5UbM0AIgOGpM7PQG4FtcC3QnOzOL1T%2FoAG6ZBHUCG9rMbzInD7wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FunQe2GSPwMe4q2SrcA%2FQIBUCaUFSieObqy6eylNKUFq1UmcchvUH3eynfG4IZ0EJ3Q3OzZhMB21fWUZh%2FBerA7VJO7LApEH8GHkkKfuSjP3T8av0sYX1Ky0e68AEoFZ8XjcwEjBZQkCRYIh48T590WWVQKoOg30yEO0fOjE2yBbNfHYvB8ayHvdU5STey0XMCl76r6j14%2FKD57kHPiMxpHw9mK0MYdjyoyHYrM0HjG8ONDt42M3rnREQQ6kzOd7S3fqJDtegK8t70OigKUKzAlHMGp73DuGnfnoW82FdvkqzPJyfsCJo3iR0IziFs1O20itUvEG%2BPnLRrkJszGuCcFSHkOF3RWtcwBFIOUxylLxsndraiA33wUfpGyYLIs0cEIHaGs4b7taFRInQYZAezPycweyY8JaoDjFtmLnlxQ%2Bk9SrgQByWqcOtQjIUSSwc1ypvP2hnsLm9mxAzfqt6jKwQB8gosMI5cyNhHzRHBHUlObgHGQ0%2FL%2FWB%2BJI4ZztsyrlxR%2BnHyhAAdqqn1pLGgnURaGqoNX3yoEWSaVoY8VUdaK0rNx373di%2FZTgbRxBRLJH5F23p9VQIOmem1R1oUhBat87FyLtuCG6JCw%2BZ5xUVtTLMkg61S2icm2bKc2EflnCLSyyDksCLqMMy%2BoL0GOqUB5McPSPMyqvlkGw8uZ0z3%2BXww30OVzIXzLH2uxsutMx8nVxrWIMyCU2ziPMP7w1YetgwoHOspPRd4xR9Ci0noX50QtixaiBm8yYxa7whMZRQIpqn%2Fi%2B3dloAso3ZJRAWNoG%2F8M1yfaWV4PcD56bbh%2FVntoVBwoDmFhxRmlRG9aXBb6VgI%2B3Hy%2F%2Bk%2FNAGLLvYaU5G1lut1OKOIawPlmTZUhNZUcqVr&X-Amz-Signature=ba0628cb528ae241509cffdbfeeb2a75d8f1d706ca59a7e7ce22a7068856c5e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJ63MOS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrP5TmpaXJGlx8dIoVwHQJ%2B7k9kxqZjb7tv1Er5UbM0AIgOGpM7PQG4FtcC3QnOzOL1T%2FoAG6ZBHUCG9rMbzInD7wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FunQe2GSPwMe4q2SrcA%2FQIBUCaUFSieObqy6eylNKUFq1UmcchvUH3eynfG4IZ0EJ3Q3OzZhMB21fWUZh%2FBerA7VJO7LApEH8GHkkKfuSjP3T8av0sYX1Ky0e68AEoFZ8XjcwEjBZQkCRYIh48T590WWVQKoOg30yEO0fOjE2yBbNfHYvB8ayHvdU5STey0XMCl76r6j14%2FKD57kHPiMxpHw9mK0MYdjyoyHYrM0HjG8ONDt42M3rnREQQ6kzOd7S3fqJDtegK8t70OigKUKzAlHMGp73DuGnfnoW82FdvkqzPJyfsCJo3iR0IziFs1O20itUvEG%2BPnLRrkJszGuCcFSHkOF3RWtcwBFIOUxylLxsndraiA33wUfpGyYLIs0cEIHaGs4b7taFRInQYZAezPycweyY8JaoDjFtmLnlxQ%2Bk9SrgQByWqcOtQjIUSSwc1ypvP2hnsLm9mxAzfqt6jKwQB8gosMI5cyNhHzRHBHUlObgHGQ0%2FL%2FWB%2BJI4ZztsyrlxR%2BnHyhAAdqqn1pLGgnURaGqoNX3yoEWSaVoY8VUdaK0rNx373di%2FZTgbRxBRLJH5F23p9VQIOmem1R1oUhBat87FyLtuCG6JCw%2BZ5xUVtTLMkg61S2icm2bKc2EflnCLSyyDksCLqMMy%2BoL0GOqUB5McPSPMyqvlkGw8uZ0z3%2BXww30OVzIXzLH2uxsutMx8nVxrWIMyCU2ziPMP7w1YetgwoHOspPRd4xR9Ci0noX50QtixaiBm8yYxa7whMZRQIpqn%2Fi%2B3dloAso3ZJRAWNoG%2F8M1yfaWV4PcD56bbh%2FVntoVBwoDmFhxRmlRG9aXBb6VgI%2B3Hy%2F%2Bk%2FNAGLLvYaU5G1lut1OKOIawPlmTZUhNZUcqVr&X-Amz-Signature=4cca04352e2b428b342c41d00b2a2c616000580518548799a16eeafdf9d90aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHJ63MOS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrP5TmpaXJGlx8dIoVwHQJ%2B7k9kxqZjb7tv1Er5UbM0AIgOGpM7PQG4FtcC3QnOzOL1T%2FoAG6ZBHUCG9rMbzInD7wqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FunQe2GSPwMe4q2SrcA%2FQIBUCaUFSieObqy6eylNKUFq1UmcchvUH3eynfG4IZ0EJ3Q3OzZhMB21fWUZh%2FBerA7VJO7LApEH8GHkkKfuSjP3T8av0sYX1Ky0e68AEoFZ8XjcwEjBZQkCRYIh48T590WWVQKoOg30yEO0fOjE2yBbNfHYvB8ayHvdU5STey0XMCl76r6j14%2FKD57kHPiMxpHw9mK0MYdjyoyHYrM0HjG8ONDt42M3rnREQQ6kzOd7S3fqJDtegK8t70OigKUKzAlHMGp73DuGnfnoW82FdvkqzPJyfsCJo3iR0IziFs1O20itUvEG%2BPnLRrkJszGuCcFSHkOF3RWtcwBFIOUxylLxsndraiA33wUfpGyYLIs0cEIHaGs4b7taFRInQYZAezPycweyY8JaoDjFtmLnlxQ%2Bk9SrgQByWqcOtQjIUSSwc1ypvP2hnsLm9mxAzfqt6jKwQB8gosMI5cyNhHzRHBHUlObgHGQ0%2FL%2FWB%2BJI4ZztsyrlxR%2BnHyhAAdqqn1pLGgnURaGqoNX3yoEWSaVoY8VUdaK0rNx373di%2FZTgbRxBRLJH5F23p9VQIOmem1R1oUhBat87FyLtuCG6JCw%2BZ5xUVtTLMkg61S2icm2bKc2EflnCLSyyDksCLqMMy%2BoL0GOqUB5McPSPMyqvlkGw8uZ0z3%2BXww30OVzIXzLH2uxsutMx8nVxrWIMyCU2ziPMP7w1YetgwoHOspPRd4xR9Ci0noX50QtixaiBm8yYxa7whMZRQIpqn%2Fi%2B3dloAso3ZJRAWNoG%2F8M1yfaWV4PcD56bbh%2FVntoVBwoDmFhxRmlRG9aXBb6VgI%2B3Hy%2F%2Bk%2FNAGLLvYaU5G1lut1OKOIawPlmTZUhNZUcqVr&X-Amz-Signature=ef96350b06a3f9efc0c0036f76378748d4af40de23bfe6d063ef2aec785476ed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
