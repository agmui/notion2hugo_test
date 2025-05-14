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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDUX4O6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDu1u%2BqcjBdIdewNPOmZB%2FfAK%2BuKX6QPe6WTn1ydJfapwIgUXmNqSAN3tJYcB2oRRLishm04u%2FDcF4iPmk0tTux9kEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFXCYo2fBc0G1AlZDSrcA4GpZVhPMd4vY8Zkd9d6SyZRoIwKq8%2B566O1108U9bV8cHb8SQNwBI4KZzhDQuoiC7OHqindLtu0kbfROfoKpeG1UAbxx7RindoFliylyhd6jorP%2FvB8tm39bJzO7hFBJmd8RHg7Dc3O4zNuwhpN6UJUSGsLWqlMSGoHtCbeBkRJfruQrRHXegC3z15V%2FQO8nm51eySiZuR%2FUU0WrHjFz8BqIu9Odnw9SEaQeJnVGTMO8CNMfAaTKVF8nuI8lzYm%2Bt5DJj115%2B29dqApFivpe%2FclVNSU476O5iNTfMrN6psjggYQ664Et4lv9GbsGAisrPTS8P9pBJTAd176CZEA1xU8KZY9H%2FmDl0qTNfx%2Bqu%2F5KcJbDEFztgp8RQTLfBHjxjDpXfCSTehpLyBw%2FwSrFOzuP3smv5S3Xczx5BVGX3uSfj%2FST0dlrqh4Nu4GfTCO2zdbTni%2BQcDl%2BH%2Bx5%2Bxa4CXVKHD%2BAnq%2F%2BiOYptEg5E%2BbCH79JiOBlKKFZnNOjW5n0gg2hehgH%2BPpzS0sMOefBKftpg1g5YmFa8hnEeLJoLdQzZzOjlYRbKw3Y6NmoUXWLnYf0rqOP436toVZ1paH%2BquVwEQby35eAbk6cg9StdgynMrZsyly6vqkgb2mMIm6ksEGOqUBIMgE0NoSwxoUTCsZ94gTbciQLOymrasX0GFqoXI%2BTgTGcDI7eUnvBXKYkEN3mOZpWxV%2BBFhl77uWK%2Fv3FBYpXRLBVuboJozs642u3R1zAvPbTKrY1tfEzEigxUIjE95WjvJEdZQp0gwMfDG4vHx8ywtoWUA8M2N9te2I0yOjezeJHN%2FIfg8fTeWE2%2BxUeg533CVyccqJInjihiMMh9MkAO2NZs06&X-Amz-Signature=d42a2207609b59c1377cfa7265a46263c4757f7d97e3958c4a07dfeeddaec406&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDUX4O6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDu1u%2BqcjBdIdewNPOmZB%2FfAK%2BuKX6QPe6WTn1ydJfapwIgUXmNqSAN3tJYcB2oRRLishm04u%2FDcF4iPmk0tTux9kEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFXCYo2fBc0G1AlZDSrcA4GpZVhPMd4vY8Zkd9d6SyZRoIwKq8%2B566O1108U9bV8cHb8SQNwBI4KZzhDQuoiC7OHqindLtu0kbfROfoKpeG1UAbxx7RindoFliylyhd6jorP%2FvB8tm39bJzO7hFBJmd8RHg7Dc3O4zNuwhpN6UJUSGsLWqlMSGoHtCbeBkRJfruQrRHXegC3z15V%2FQO8nm51eySiZuR%2FUU0WrHjFz8BqIu9Odnw9SEaQeJnVGTMO8CNMfAaTKVF8nuI8lzYm%2Bt5DJj115%2B29dqApFivpe%2FclVNSU476O5iNTfMrN6psjggYQ664Et4lv9GbsGAisrPTS8P9pBJTAd176CZEA1xU8KZY9H%2FmDl0qTNfx%2Bqu%2F5KcJbDEFztgp8RQTLfBHjxjDpXfCSTehpLyBw%2FwSrFOzuP3smv5S3Xczx5BVGX3uSfj%2FST0dlrqh4Nu4GfTCO2zdbTni%2BQcDl%2BH%2Bx5%2Bxa4CXVKHD%2BAnq%2F%2BiOYptEg5E%2BbCH79JiOBlKKFZnNOjW5n0gg2hehgH%2BPpzS0sMOefBKftpg1g5YmFa8hnEeLJoLdQzZzOjlYRbKw3Y6NmoUXWLnYf0rqOP436toVZ1paH%2BquVwEQby35eAbk6cg9StdgynMrZsyly6vqkgb2mMIm6ksEGOqUBIMgE0NoSwxoUTCsZ94gTbciQLOymrasX0GFqoXI%2BTgTGcDI7eUnvBXKYkEN3mOZpWxV%2BBFhl77uWK%2Fv3FBYpXRLBVuboJozs642u3R1zAvPbTKrY1tfEzEigxUIjE95WjvJEdZQp0gwMfDG4vHx8ywtoWUA8M2N9te2I0yOjezeJHN%2FIfg8fTeWE2%2BxUeg533CVyccqJInjihiMMh9MkAO2NZs06&X-Amz-Signature=2df41f95695c4f55993c39ce0a766f6982d19a1ea03eb45c161ac3cd0f0f2df4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDUX4O6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDu1u%2BqcjBdIdewNPOmZB%2FfAK%2BuKX6QPe6WTn1ydJfapwIgUXmNqSAN3tJYcB2oRRLishm04u%2FDcF4iPmk0tTux9kEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFXCYo2fBc0G1AlZDSrcA4GpZVhPMd4vY8Zkd9d6SyZRoIwKq8%2B566O1108U9bV8cHb8SQNwBI4KZzhDQuoiC7OHqindLtu0kbfROfoKpeG1UAbxx7RindoFliylyhd6jorP%2FvB8tm39bJzO7hFBJmd8RHg7Dc3O4zNuwhpN6UJUSGsLWqlMSGoHtCbeBkRJfruQrRHXegC3z15V%2FQO8nm51eySiZuR%2FUU0WrHjFz8BqIu9Odnw9SEaQeJnVGTMO8CNMfAaTKVF8nuI8lzYm%2Bt5DJj115%2B29dqApFivpe%2FclVNSU476O5iNTfMrN6psjggYQ664Et4lv9GbsGAisrPTS8P9pBJTAd176CZEA1xU8KZY9H%2FmDl0qTNfx%2Bqu%2F5KcJbDEFztgp8RQTLfBHjxjDpXfCSTehpLyBw%2FwSrFOzuP3smv5S3Xczx5BVGX3uSfj%2FST0dlrqh4Nu4GfTCO2zdbTni%2BQcDl%2BH%2Bx5%2Bxa4CXVKHD%2BAnq%2F%2BiOYptEg5E%2BbCH79JiOBlKKFZnNOjW5n0gg2hehgH%2BPpzS0sMOefBKftpg1g5YmFa8hnEeLJoLdQzZzOjlYRbKw3Y6NmoUXWLnYf0rqOP436toVZ1paH%2BquVwEQby35eAbk6cg9StdgynMrZsyly6vqkgb2mMIm6ksEGOqUBIMgE0NoSwxoUTCsZ94gTbciQLOymrasX0GFqoXI%2BTgTGcDI7eUnvBXKYkEN3mOZpWxV%2BBFhl77uWK%2Fv3FBYpXRLBVuboJozs642u3R1zAvPbTKrY1tfEzEigxUIjE95WjvJEdZQp0gwMfDG4vHx8ywtoWUA8M2N9te2I0yOjezeJHN%2FIfg8fTeWE2%2BxUeg533CVyccqJInjihiMMh9MkAO2NZs06&X-Amz-Signature=0bcefc0546ffb549148bdeef8b9a9a81753ca1fee8dde2d32dec430efe362888&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDUX4O6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDu1u%2BqcjBdIdewNPOmZB%2FfAK%2BuKX6QPe6WTn1ydJfapwIgUXmNqSAN3tJYcB2oRRLishm04u%2FDcF4iPmk0tTux9kEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFXCYo2fBc0G1AlZDSrcA4GpZVhPMd4vY8Zkd9d6SyZRoIwKq8%2B566O1108U9bV8cHb8SQNwBI4KZzhDQuoiC7OHqindLtu0kbfROfoKpeG1UAbxx7RindoFliylyhd6jorP%2FvB8tm39bJzO7hFBJmd8RHg7Dc3O4zNuwhpN6UJUSGsLWqlMSGoHtCbeBkRJfruQrRHXegC3z15V%2FQO8nm51eySiZuR%2FUU0WrHjFz8BqIu9Odnw9SEaQeJnVGTMO8CNMfAaTKVF8nuI8lzYm%2Bt5DJj115%2B29dqApFivpe%2FclVNSU476O5iNTfMrN6psjggYQ664Et4lv9GbsGAisrPTS8P9pBJTAd176CZEA1xU8KZY9H%2FmDl0qTNfx%2Bqu%2F5KcJbDEFztgp8RQTLfBHjxjDpXfCSTehpLyBw%2FwSrFOzuP3smv5S3Xczx5BVGX3uSfj%2FST0dlrqh4Nu4GfTCO2zdbTni%2BQcDl%2BH%2Bx5%2Bxa4CXVKHD%2BAnq%2F%2BiOYptEg5E%2BbCH79JiOBlKKFZnNOjW5n0gg2hehgH%2BPpzS0sMOefBKftpg1g5YmFa8hnEeLJoLdQzZzOjlYRbKw3Y6NmoUXWLnYf0rqOP436toVZ1paH%2BquVwEQby35eAbk6cg9StdgynMrZsyly6vqkgb2mMIm6ksEGOqUBIMgE0NoSwxoUTCsZ94gTbciQLOymrasX0GFqoXI%2BTgTGcDI7eUnvBXKYkEN3mOZpWxV%2BBFhl77uWK%2Fv3FBYpXRLBVuboJozs642u3R1zAvPbTKrY1tfEzEigxUIjE95WjvJEdZQp0gwMfDG4vHx8ywtoWUA8M2N9te2I0yOjezeJHN%2FIfg8fTeWE2%2BxUeg533CVyccqJInjihiMMh9MkAO2NZs06&X-Amz-Signature=5a1a425da24b1ac7c218fb3539b1183e6f8d61817bbc3139949dbe9901d04048&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDUX4O6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDu1u%2BqcjBdIdewNPOmZB%2FfAK%2BuKX6QPe6WTn1ydJfapwIgUXmNqSAN3tJYcB2oRRLishm04u%2FDcF4iPmk0tTux9kEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFXCYo2fBc0G1AlZDSrcA4GpZVhPMd4vY8Zkd9d6SyZRoIwKq8%2B566O1108U9bV8cHb8SQNwBI4KZzhDQuoiC7OHqindLtu0kbfROfoKpeG1UAbxx7RindoFliylyhd6jorP%2FvB8tm39bJzO7hFBJmd8RHg7Dc3O4zNuwhpN6UJUSGsLWqlMSGoHtCbeBkRJfruQrRHXegC3z15V%2FQO8nm51eySiZuR%2FUU0WrHjFz8BqIu9Odnw9SEaQeJnVGTMO8CNMfAaTKVF8nuI8lzYm%2Bt5DJj115%2B29dqApFivpe%2FclVNSU476O5iNTfMrN6psjggYQ664Et4lv9GbsGAisrPTS8P9pBJTAd176CZEA1xU8KZY9H%2FmDl0qTNfx%2Bqu%2F5KcJbDEFztgp8RQTLfBHjxjDpXfCSTehpLyBw%2FwSrFOzuP3smv5S3Xczx5BVGX3uSfj%2FST0dlrqh4Nu4GfTCO2zdbTni%2BQcDl%2BH%2Bx5%2Bxa4CXVKHD%2BAnq%2F%2BiOYptEg5E%2BbCH79JiOBlKKFZnNOjW5n0gg2hehgH%2BPpzS0sMOefBKftpg1g5YmFa8hnEeLJoLdQzZzOjlYRbKw3Y6NmoUXWLnYf0rqOP436toVZ1paH%2BquVwEQby35eAbk6cg9StdgynMrZsyly6vqkgb2mMIm6ksEGOqUBIMgE0NoSwxoUTCsZ94gTbciQLOymrasX0GFqoXI%2BTgTGcDI7eUnvBXKYkEN3mOZpWxV%2BBFhl77uWK%2Fv3FBYpXRLBVuboJozs642u3R1zAvPbTKrY1tfEzEigxUIjE95WjvJEdZQp0gwMfDG4vHx8ywtoWUA8M2N9te2I0yOjezeJHN%2FIfg8fTeWE2%2BxUeg533CVyccqJInjihiMMh9MkAO2NZs06&X-Amz-Signature=c8709349175ca88acce3495f5cacdd6d70fab829976b5943f4a7cf30b78f0caa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDUX4O6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDu1u%2BqcjBdIdewNPOmZB%2FfAK%2BuKX6QPe6WTn1ydJfapwIgUXmNqSAN3tJYcB2oRRLishm04u%2FDcF4iPmk0tTux9kEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFXCYo2fBc0G1AlZDSrcA4GpZVhPMd4vY8Zkd9d6SyZRoIwKq8%2B566O1108U9bV8cHb8SQNwBI4KZzhDQuoiC7OHqindLtu0kbfROfoKpeG1UAbxx7RindoFliylyhd6jorP%2FvB8tm39bJzO7hFBJmd8RHg7Dc3O4zNuwhpN6UJUSGsLWqlMSGoHtCbeBkRJfruQrRHXegC3z15V%2FQO8nm51eySiZuR%2FUU0WrHjFz8BqIu9Odnw9SEaQeJnVGTMO8CNMfAaTKVF8nuI8lzYm%2Bt5DJj115%2B29dqApFivpe%2FclVNSU476O5iNTfMrN6psjggYQ664Et4lv9GbsGAisrPTS8P9pBJTAd176CZEA1xU8KZY9H%2FmDl0qTNfx%2Bqu%2F5KcJbDEFztgp8RQTLfBHjxjDpXfCSTehpLyBw%2FwSrFOzuP3smv5S3Xczx5BVGX3uSfj%2FST0dlrqh4Nu4GfTCO2zdbTni%2BQcDl%2BH%2Bx5%2Bxa4CXVKHD%2BAnq%2F%2BiOYptEg5E%2BbCH79JiOBlKKFZnNOjW5n0gg2hehgH%2BPpzS0sMOefBKftpg1g5YmFa8hnEeLJoLdQzZzOjlYRbKw3Y6NmoUXWLnYf0rqOP436toVZ1paH%2BquVwEQby35eAbk6cg9StdgynMrZsyly6vqkgb2mMIm6ksEGOqUBIMgE0NoSwxoUTCsZ94gTbciQLOymrasX0GFqoXI%2BTgTGcDI7eUnvBXKYkEN3mOZpWxV%2BBFhl77uWK%2Fv3FBYpXRLBVuboJozs642u3R1zAvPbTKrY1tfEzEigxUIjE95WjvJEdZQp0gwMfDG4vHx8ywtoWUA8M2N9te2I0yOjezeJHN%2FIfg8fTeWE2%2BxUeg533CVyccqJInjihiMMh9MkAO2NZs06&X-Amz-Signature=b3a8649277963cf400acd086552d782e6966856c7bcbeb3d7f880b10621e4020&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDUX4O6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDu1u%2BqcjBdIdewNPOmZB%2FfAK%2BuKX6QPe6WTn1ydJfapwIgUXmNqSAN3tJYcB2oRRLishm04u%2FDcF4iPmk0tTux9kEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFXCYo2fBc0G1AlZDSrcA4GpZVhPMd4vY8Zkd9d6SyZRoIwKq8%2B566O1108U9bV8cHb8SQNwBI4KZzhDQuoiC7OHqindLtu0kbfROfoKpeG1UAbxx7RindoFliylyhd6jorP%2FvB8tm39bJzO7hFBJmd8RHg7Dc3O4zNuwhpN6UJUSGsLWqlMSGoHtCbeBkRJfruQrRHXegC3z15V%2FQO8nm51eySiZuR%2FUU0WrHjFz8BqIu9Odnw9SEaQeJnVGTMO8CNMfAaTKVF8nuI8lzYm%2Bt5DJj115%2B29dqApFivpe%2FclVNSU476O5iNTfMrN6psjggYQ664Et4lv9GbsGAisrPTS8P9pBJTAd176CZEA1xU8KZY9H%2FmDl0qTNfx%2Bqu%2F5KcJbDEFztgp8RQTLfBHjxjDpXfCSTehpLyBw%2FwSrFOzuP3smv5S3Xczx5BVGX3uSfj%2FST0dlrqh4Nu4GfTCO2zdbTni%2BQcDl%2BH%2Bx5%2Bxa4CXVKHD%2BAnq%2F%2BiOYptEg5E%2BbCH79JiOBlKKFZnNOjW5n0gg2hehgH%2BPpzS0sMOefBKftpg1g5YmFa8hnEeLJoLdQzZzOjlYRbKw3Y6NmoUXWLnYf0rqOP436toVZ1paH%2BquVwEQby35eAbk6cg9StdgynMrZsyly6vqkgb2mMIm6ksEGOqUBIMgE0NoSwxoUTCsZ94gTbciQLOymrasX0GFqoXI%2BTgTGcDI7eUnvBXKYkEN3mOZpWxV%2BBFhl77uWK%2Fv3FBYpXRLBVuboJozs642u3R1zAvPbTKrY1tfEzEigxUIjE95WjvJEdZQp0gwMfDG4vHx8ywtoWUA8M2N9te2I0yOjezeJHN%2FIfg8fTeWE2%2BxUeg533CVyccqJInjihiMMh9MkAO2NZs06&X-Amz-Signature=89ba7ffbaf8638b26feb5c055e844c4b55e5c6df8c53a85454616f09c6be2bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDUX4O6%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDu1u%2BqcjBdIdewNPOmZB%2FfAK%2BuKX6QPe6WTn1ydJfapwIgUXmNqSAN3tJYcB2oRRLishm04u%2FDcF4iPmk0tTux9kEq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDFXCYo2fBc0G1AlZDSrcA4GpZVhPMd4vY8Zkd9d6SyZRoIwKq8%2B566O1108U9bV8cHb8SQNwBI4KZzhDQuoiC7OHqindLtu0kbfROfoKpeG1UAbxx7RindoFliylyhd6jorP%2FvB8tm39bJzO7hFBJmd8RHg7Dc3O4zNuwhpN6UJUSGsLWqlMSGoHtCbeBkRJfruQrRHXegC3z15V%2FQO8nm51eySiZuR%2FUU0WrHjFz8BqIu9Odnw9SEaQeJnVGTMO8CNMfAaTKVF8nuI8lzYm%2Bt5DJj115%2B29dqApFivpe%2FclVNSU476O5iNTfMrN6psjggYQ664Et4lv9GbsGAisrPTS8P9pBJTAd176CZEA1xU8KZY9H%2FmDl0qTNfx%2Bqu%2F5KcJbDEFztgp8RQTLfBHjxjDpXfCSTehpLyBw%2FwSrFOzuP3smv5S3Xczx5BVGX3uSfj%2FST0dlrqh4Nu4GfTCO2zdbTni%2BQcDl%2BH%2Bx5%2Bxa4CXVKHD%2BAnq%2F%2BiOYptEg5E%2BbCH79JiOBlKKFZnNOjW5n0gg2hehgH%2BPpzS0sMOefBKftpg1g5YmFa8hnEeLJoLdQzZzOjlYRbKw3Y6NmoUXWLnYf0rqOP436toVZ1paH%2BquVwEQby35eAbk6cg9StdgynMrZsyly6vqkgb2mMIm6ksEGOqUBIMgE0NoSwxoUTCsZ94gTbciQLOymrasX0GFqoXI%2BTgTGcDI7eUnvBXKYkEN3mOZpWxV%2BBFhl77uWK%2Fv3FBYpXRLBVuboJozs642u3R1zAvPbTKrY1tfEzEigxUIjE95WjvJEdZQp0gwMfDG4vHx8ywtoWUA8M2N9te2I0yOjezeJHN%2FIfg8fTeWE2%2BxUeg533CVyccqJInjihiMMh9MkAO2NZs06&X-Amz-Signature=b1d51d7bc4efde73855ba43ba22dde53730c1978938a6c4b49c5ae4ba066709f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
