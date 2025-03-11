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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRZJB7U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC92jq4xua4c2QPBQ1NzBHS4POcdjWXWTwUVf8HhMt%2F3AIgOP7eoVCUlhmKAgxlsgu%2FT4HEnv084f0sDEvx6tRVr3MqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjCvYJ%2FgR94S2UPircA8FN%2FYQYjrb6cW%2Fp2BZVFuZcwWubRsgCkLu57wVVsMv9%2B1csoVSpt2lCw8z63Zj1V0hKQJ88%2FNNCHGgjPXtGedvmuaYXUEJg5Jl0kv5W9gOTCoH50marVfOg8aUSHNTKgYuXdANHgJZ%2FBDrQ1Jy7Gfg4aBYdDfK8iq8wH5D7Yia4Nxsy5fUPaljQNBaXHSB%2FMblWaDXHNenLo0L%2FH%2BfIgfGjOcEEbO96VvJ1GVaJ2aSbwYkPeOXMd%2FccI4BlQWXmTvfX41kGlOq89O7mrEk0Jy1FPq%2BMsphNrlz8PHwMetRBI9at7Cjvj9nSZ1SeK%2B3dqVPk%2BxQoVOelKDO8tjGLozcV7Br2k0flDRG2%2BxTi6FCZkeuEu869fE3bR2F4ZjDn1zLJjldDi94dNGtSWJR4FXpAvWFo3jp%2FNXZwQadM9MxI47svsmne9OZTXxeVfn%2Fg4UGfuWte3WG8wVATOIElWAZ68wxaZZtv6bkb58bOL0sJwXw6%2FgumaEEUN3TtMIx2BwqcsN9piFwKqbQtrxZXprqZfn%2F0zuHhmMLjTlBOXkpBouHzfgFo6cyAfJkZjYhuE%2FDjUOIYrlw%2B0tetIx8K%2F4Y6s6NNS2tUolmTuBtf%2FmRfy4D8FyhGs3UBtt2sMKvRv74GOqUB%2FBSnamJcyLWCeHtvqPk2iVDGsLBAUuGN66niJYgpHhxzQparANrAWB6b5jbfu396wninQvI%2B6GiwqKiDFxSYk0zOBdarxE9pDZ39IkUtnvLLpubeVcLf0W%2FdWEUHF4JA1OcqCGKvk%2Bo5hTqePf4KcBl7ApH1KWFbo6bMJVerycplDfF9VXz72vtB0LTt5u7iZMGII5HgBXvxqU27J%2FSI17PJMRfp&X-Amz-Signature=50934d78af38c4b32a8a335f54ee7c94d4e8280f733f306d8731c6413c54b29d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRZJB7U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC92jq4xua4c2QPBQ1NzBHS4POcdjWXWTwUVf8HhMt%2F3AIgOP7eoVCUlhmKAgxlsgu%2FT4HEnv084f0sDEvx6tRVr3MqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjCvYJ%2FgR94S2UPircA8FN%2FYQYjrb6cW%2Fp2BZVFuZcwWubRsgCkLu57wVVsMv9%2B1csoVSpt2lCw8z63Zj1V0hKQJ88%2FNNCHGgjPXtGedvmuaYXUEJg5Jl0kv5W9gOTCoH50marVfOg8aUSHNTKgYuXdANHgJZ%2FBDrQ1Jy7Gfg4aBYdDfK8iq8wH5D7Yia4Nxsy5fUPaljQNBaXHSB%2FMblWaDXHNenLo0L%2FH%2BfIgfGjOcEEbO96VvJ1GVaJ2aSbwYkPeOXMd%2FccI4BlQWXmTvfX41kGlOq89O7mrEk0Jy1FPq%2BMsphNrlz8PHwMetRBI9at7Cjvj9nSZ1SeK%2B3dqVPk%2BxQoVOelKDO8tjGLozcV7Br2k0flDRG2%2BxTi6FCZkeuEu869fE3bR2F4ZjDn1zLJjldDi94dNGtSWJR4FXpAvWFo3jp%2FNXZwQadM9MxI47svsmne9OZTXxeVfn%2Fg4UGfuWte3WG8wVATOIElWAZ68wxaZZtv6bkb58bOL0sJwXw6%2FgumaEEUN3TtMIx2BwqcsN9piFwKqbQtrxZXprqZfn%2F0zuHhmMLjTlBOXkpBouHzfgFo6cyAfJkZjYhuE%2FDjUOIYrlw%2B0tetIx8K%2F4Y6s6NNS2tUolmTuBtf%2FmRfy4D8FyhGs3UBtt2sMKvRv74GOqUB%2FBSnamJcyLWCeHtvqPk2iVDGsLBAUuGN66niJYgpHhxzQparANrAWB6b5jbfu396wninQvI%2B6GiwqKiDFxSYk0zOBdarxE9pDZ39IkUtnvLLpubeVcLf0W%2FdWEUHF4JA1OcqCGKvk%2Bo5hTqePf4KcBl7ApH1KWFbo6bMJVerycplDfF9VXz72vtB0LTt5u7iZMGII5HgBXvxqU27J%2FSI17PJMRfp&X-Amz-Signature=e47f23eddc3ab9627c7481bd2aaabfec50ece0731f25a8dad775c6ba942757f9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRZJB7U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC92jq4xua4c2QPBQ1NzBHS4POcdjWXWTwUVf8HhMt%2F3AIgOP7eoVCUlhmKAgxlsgu%2FT4HEnv084f0sDEvx6tRVr3MqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjCvYJ%2FgR94S2UPircA8FN%2FYQYjrb6cW%2Fp2BZVFuZcwWubRsgCkLu57wVVsMv9%2B1csoVSpt2lCw8z63Zj1V0hKQJ88%2FNNCHGgjPXtGedvmuaYXUEJg5Jl0kv5W9gOTCoH50marVfOg8aUSHNTKgYuXdANHgJZ%2FBDrQ1Jy7Gfg4aBYdDfK8iq8wH5D7Yia4Nxsy5fUPaljQNBaXHSB%2FMblWaDXHNenLo0L%2FH%2BfIgfGjOcEEbO96VvJ1GVaJ2aSbwYkPeOXMd%2FccI4BlQWXmTvfX41kGlOq89O7mrEk0Jy1FPq%2BMsphNrlz8PHwMetRBI9at7Cjvj9nSZ1SeK%2B3dqVPk%2BxQoVOelKDO8tjGLozcV7Br2k0flDRG2%2BxTi6FCZkeuEu869fE3bR2F4ZjDn1zLJjldDi94dNGtSWJR4FXpAvWFo3jp%2FNXZwQadM9MxI47svsmne9OZTXxeVfn%2Fg4UGfuWte3WG8wVATOIElWAZ68wxaZZtv6bkb58bOL0sJwXw6%2FgumaEEUN3TtMIx2BwqcsN9piFwKqbQtrxZXprqZfn%2F0zuHhmMLjTlBOXkpBouHzfgFo6cyAfJkZjYhuE%2FDjUOIYrlw%2B0tetIx8K%2F4Y6s6NNS2tUolmTuBtf%2FmRfy4D8FyhGs3UBtt2sMKvRv74GOqUB%2FBSnamJcyLWCeHtvqPk2iVDGsLBAUuGN66niJYgpHhxzQparANrAWB6b5jbfu396wninQvI%2B6GiwqKiDFxSYk0zOBdarxE9pDZ39IkUtnvLLpubeVcLf0W%2FdWEUHF4JA1OcqCGKvk%2Bo5hTqePf4KcBl7ApH1KWFbo6bMJVerycplDfF9VXz72vtB0LTt5u7iZMGII5HgBXvxqU27J%2FSI17PJMRfp&X-Amz-Signature=cb5b0250d0c6fcdd5cf486d88cf00366c58177169c3801538ddfa94cb8375b1d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRZJB7U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC92jq4xua4c2QPBQ1NzBHS4POcdjWXWTwUVf8HhMt%2F3AIgOP7eoVCUlhmKAgxlsgu%2FT4HEnv084f0sDEvx6tRVr3MqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjCvYJ%2FgR94S2UPircA8FN%2FYQYjrb6cW%2Fp2BZVFuZcwWubRsgCkLu57wVVsMv9%2B1csoVSpt2lCw8z63Zj1V0hKQJ88%2FNNCHGgjPXtGedvmuaYXUEJg5Jl0kv5W9gOTCoH50marVfOg8aUSHNTKgYuXdANHgJZ%2FBDrQ1Jy7Gfg4aBYdDfK8iq8wH5D7Yia4Nxsy5fUPaljQNBaXHSB%2FMblWaDXHNenLo0L%2FH%2BfIgfGjOcEEbO96VvJ1GVaJ2aSbwYkPeOXMd%2FccI4BlQWXmTvfX41kGlOq89O7mrEk0Jy1FPq%2BMsphNrlz8PHwMetRBI9at7Cjvj9nSZ1SeK%2B3dqVPk%2BxQoVOelKDO8tjGLozcV7Br2k0flDRG2%2BxTi6FCZkeuEu869fE3bR2F4ZjDn1zLJjldDi94dNGtSWJR4FXpAvWFo3jp%2FNXZwQadM9MxI47svsmne9OZTXxeVfn%2Fg4UGfuWte3WG8wVATOIElWAZ68wxaZZtv6bkb58bOL0sJwXw6%2FgumaEEUN3TtMIx2BwqcsN9piFwKqbQtrxZXprqZfn%2F0zuHhmMLjTlBOXkpBouHzfgFo6cyAfJkZjYhuE%2FDjUOIYrlw%2B0tetIx8K%2F4Y6s6NNS2tUolmTuBtf%2FmRfy4D8FyhGs3UBtt2sMKvRv74GOqUB%2FBSnamJcyLWCeHtvqPk2iVDGsLBAUuGN66niJYgpHhxzQparANrAWB6b5jbfu396wninQvI%2B6GiwqKiDFxSYk0zOBdarxE9pDZ39IkUtnvLLpubeVcLf0W%2FdWEUHF4JA1OcqCGKvk%2Bo5hTqePf4KcBl7ApH1KWFbo6bMJVerycplDfF9VXz72vtB0LTt5u7iZMGII5HgBXvxqU27J%2FSI17PJMRfp&X-Amz-Signature=a2b79608be1f93ba467eee55f1ce5d28a9b621e05b1c1ac8088398c2a4dffc02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRZJB7U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC92jq4xua4c2QPBQ1NzBHS4POcdjWXWTwUVf8HhMt%2F3AIgOP7eoVCUlhmKAgxlsgu%2FT4HEnv084f0sDEvx6tRVr3MqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjCvYJ%2FgR94S2UPircA8FN%2FYQYjrb6cW%2Fp2BZVFuZcwWubRsgCkLu57wVVsMv9%2B1csoVSpt2lCw8z63Zj1V0hKQJ88%2FNNCHGgjPXtGedvmuaYXUEJg5Jl0kv5W9gOTCoH50marVfOg8aUSHNTKgYuXdANHgJZ%2FBDrQ1Jy7Gfg4aBYdDfK8iq8wH5D7Yia4Nxsy5fUPaljQNBaXHSB%2FMblWaDXHNenLo0L%2FH%2BfIgfGjOcEEbO96VvJ1GVaJ2aSbwYkPeOXMd%2FccI4BlQWXmTvfX41kGlOq89O7mrEk0Jy1FPq%2BMsphNrlz8PHwMetRBI9at7Cjvj9nSZ1SeK%2B3dqVPk%2BxQoVOelKDO8tjGLozcV7Br2k0flDRG2%2BxTi6FCZkeuEu869fE3bR2F4ZjDn1zLJjldDi94dNGtSWJR4FXpAvWFo3jp%2FNXZwQadM9MxI47svsmne9OZTXxeVfn%2Fg4UGfuWte3WG8wVATOIElWAZ68wxaZZtv6bkb58bOL0sJwXw6%2FgumaEEUN3TtMIx2BwqcsN9piFwKqbQtrxZXprqZfn%2F0zuHhmMLjTlBOXkpBouHzfgFo6cyAfJkZjYhuE%2FDjUOIYrlw%2B0tetIx8K%2F4Y6s6NNS2tUolmTuBtf%2FmRfy4D8FyhGs3UBtt2sMKvRv74GOqUB%2FBSnamJcyLWCeHtvqPk2iVDGsLBAUuGN66niJYgpHhxzQparANrAWB6b5jbfu396wninQvI%2B6GiwqKiDFxSYk0zOBdarxE9pDZ39IkUtnvLLpubeVcLf0W%2FdWEUHF4JA1OcqCGKvk%2Bo5hTqePf4KcBl7ApH1KWFbo6bMJVerycplDfF9VXz72vtB0LTt5u7iZMGII5HgBXvxqU27J%2FSI17PJMRfp&X-Amz-Signature=677bfc514101a8a86ead5a00808027e6a5c7487637101084e99ed2a4912794b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRZJB7U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC92jq4xua4c2QPBQ1NzBHS4POcdjWXWTwUVf8HhMt%2F3AIgOP7eoVCUlhmKAgxlsgu%2FT4HEnv084f0sDEvx6tRVr3MqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjCvYJ%2FgR94S2UPircA8FN%2FYQYjrb6cW%2Fp2BZVFuZcwWubRsgCkLu57wVVsMv9%2B1csoVSpt2lCw8z63Zj1V0hKQJ88%2FNNCHGgjPXtGedvmuaYXUEJg5Jl0kv5W9gOTCoH50marVfOg8aUSHNTKgYuXdANHgJZ%2FBDrQ1Jy7Gfg4aBYdDfK8iq8wH5D7Yia4Nxsy5fUPaljQNBaXHSB%2FMblWaDXHNenLo0L%2FH%2BfIgfGjOcEEbO96VvJ1GVaJ2aSbwYkPeOXMd%2FccI4BlQWXmTvfX41kGlOq89O7mrEk0Jy1FPq%2BMsphNrlz8PHwMetRBI9at7Cjvj9nSZ1SeK%2B3dqVPk%2BxQoVOelKDO8tjGLozcV7Br2k0flDRG2%2BxTi6FCZkeuEu869fE3bR2F4ZjDn1zLJjldDi94dNGtSWJR4FXpAvWFo3jp%2FNXZwQadM9MxI47svsmne9OZTXxeVfn%2Fg4UGfuWte3WG8wVATOIElWAZ68wxaZZtv6bkb58bOL0sJwXw6%2FgumaEEUN3TtMIx2BwqcsN9piFwKqbQtrxZXprqZfn%2F0zuHhmMLjTlBOXkpBouHzfgFo6cyAfJkZjYhuE%2FDjUOIYrlw%2B0tetIx8K%2F4Y6s6NNS2tUolmTuBtf%2FmRfy4D8FyhGs3UBtt2sMKvRv74GOqUB%2FBSnamJcyLWCeHtvqPk2iVDGsLBAUuGN66niJYgpHhxzQparANrAWB6b5jbfu396wninQvI%2B6GiwqKiDFxSYk0zOBdarxE9pDZ39IkUtnvLLpubeVcLf0W%2FdWEUHF4JA1OcqCGKvk%2Bo5hTqePf4KcBl7ApH1KWFbo6bMJVerycplDfF9VXz72vtB0LTt5u7iZMGII5HgBXvxqU27J%2FSI17PJMRfp&X-Amz-Signature=fa7394fd7cab52b3d741bcfed067858173cf44472dc6174fe46e3f5cfd98d97d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRZJB7U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC92jq4xua4c2QPBQ1NzBHS4POcdjWXWTwUVf8HhMt%2F3AIgOP7eoVCUlhmKAgxlsgu%2FT4HEnv084f0sDEvx6tRVr3MqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjCvYJ%2FgR94S2UPircA8FN%2FYQYjrb6cW%2Fp2BZVFuZcwWubRsgCkLu57wVVsMv9%2B1csoVSpt2lCw8z63Zj1V0hKQJ88%2FNNCHGgjPXtGedvmuaYXUEJg5Jl0kv5W9gOTCoH50marVfOg8aUSHNTKgYuXdANHgJZ%2FBDrQ1Jy7Gfg4aBYdDfK8iq8wH5D7Yia4Nxsy5fUPaljQNBaXHSB%2FMblWaDXHNenLo0L%2FH%2BfIgfGjOcEEbO96VvJ1GVaJ2aSbwYkPeOXMd%2FccI4BlQWXmTvfX41kGlOq89O7mrEk0Jy1FPq%2BMsphNrlz8PHwMetRBI9at7Cjvj9nSZ1SeK%2B3dqVPk%2BxQoVOelKDO8tjGLozcV7Br2k0flDRG2%2BxTi6FCZkeuEu869fE3bR2F4ZjDn1zLJjldDi94dNGtSWJR4FXpAvWFo3jp%2FNXZwQadM9MxI47svsmne9OZTXxeVfn%2Fg4UGfuWte3WG8wVATOIElWAZ68wxaZZtv6bkb58bOL0sJwXw6%2FgumaEEUN3TtMIx2BwqcsN9piFwKqbQtrxZXprqZfn%2F0zuHhmMLjTlBOXkpBouHzfgFo6cyAfJkZjYhuE%2FDjUOIYrlw%2B0tetIx8K%2F4Y6s6NNS2tUolmTuBtf%2FmRfy4D8FyhGs3UBtt2sMKvRv74GOqUB%2FBSnamJcyLWCeHtvqPk2iVDGsLBAUuGN66niJYgpHhxzQparANrAWB6b5jbfu396wninQvI%2B6GiwqKiDFxSYk0zOBdarxE9pDZ39IkUtnvLLpubeVcLf0W%2FdWEUHF4JA1OcqCGKvk%2Bo5hTqePf4KcBl7ApH1KWFbo6bMJVerycplDfF9VXz72vtB0LTt5u7iZMGII5HgBXvxqU27J%2FSI17PJMRfp&X-Amz-Signature=7cd67f89a466564bcc06124f0ced2761c38bc493ccbc3b7f472a12c138fb21c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMRZJB7U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC92jq4xua4c2QPBQ1NzBHS4POcdjWXWTwUVf8HhMt%2F3AIgOP7eoVCUlhmKAgxlsgu%2FT4HEnv084f0sDEvx6tRVr3MqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDnjCvYJ%2FgR94S2UPircA8FN%2FYQYjrb6cW%2Fp2BZVFuZcwWubRsgCkLu57wVVsMv9%2B1csoVSpt2lCw8z63Zj1V0hKQJ88%2FNNCHGgjPXtGedvmuaYXUEJg5Jl0kv5W9gOTCoH50marVfOg8aUSHNTKgYuXdANHgJZ%2FBDrQ1Jy7Gfg4aBYdDfK8iq8wH5D7Yia4Nxsy5fUPaljQNBaXHSB%2FMblWaDXHNenLo0L%2FH%2BfIgfGjOcEEbO96VvJ1GVaJ2aSbwYkPeOXMd%2FccI4BlQWXmTvfX41kGlOq89O7mrEk0Jy1FPq%2BMsphNrlz8PHwMetRBI9at7Cjvj9nSZ1SeK%2B3dqVPk%2BxQoVOelKDO8tjGLozcV7Br2k0flDRG2%2BxTi6FCZkeuEu869fE3bR2F4ZjDn1zLJjldDi94dNGtSWJR4FXpAvWFo3jp%2FNXZwQadM9MxI47svsmne9OZTXxeVfn%2Fg4UGfuWte3WG8wVATOIElWAZ68wxaZZtv6bkb58bOL0sJwXw6%2FgumaEEUN3TtMIx2BwqcsN9piFwKqbQtrxZXprqZfn%2F0zuHhmMLjTlBOXkpBouHzfgFo6cyAfJkZjYhuE%2FDjUOIYrlw%2B0tetIx8K%2F4Y6s6NNS2tUolmTuBtf%2FmRfy4D8FyhGs3UBtt2sMKvRv74GOqUB%2FBSnamJcyLWCeHtvqPk2iVDGsLBAUuGN66niJYgpHhxzQparANrAWB6b5jbfu396wninQvI%2B6GiwqKiDFxSYk0zOBdarxE9pDZ39IkUtnvLLpubeVcLf0W%2FdWEUHF4JA1OcqCGKvk%2Bo5hTqePf4KcBl7ApH1KWFbo6bMJVerycplDfF9VXz72vtB0LTt5u7iZMGII5HgBXvxqU27J%2FSI17PJMRfp&X-Amz-Signature=a26602039bc48bbca2fc65ca4218fb188e71517648288b600e60ed5c3e1ac014&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
