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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQHG3DR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC8RaErrG9FVs%2F1nNEZV9VdOgYPV1tZsAUWAfKKGps9vQIgC%2FZi%2Bi0UDT9Af4xdoZpU6gejNlhFzygg41HZmanTg80q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBWJtAF4U%2BNEaxfTTyrcA7YrH5jPQnXNlmGJGl6G%2BlEz4rjwrs82rvHt63kLTiXarU%2BKvTnQUo5T80X%2FcB7DpdNt9ZdO90XVP1Ui%2BGPqdX02%2BK42q4GKetNkIdgsvYJzo118yo%2FUBiJ0vRiZsp1MEwP8GIzpDmem1SEt52e0zEnhsN8hHUAiUrJaZqpPvPVM40yL5qwcXVdA1VafKmu2Tt3pthdPvuxE9CpXrIrtjNVkigdBRQK6yJoQj%2BDTpoMBsuvYiVESKCtytXASM67taUmahwuytsKZJJhwwgMxrQCEgXvf1mQkoJ6KMqWDMR74k7YY%2BecIRJxGDKMXwFcaqNsiI2Vice6LTg4ErZMVpr%2BpV7Kv3k5i4FoI074mPrqtO3WkuxPc%2FkMz8PIZm4rnUYWEmSfzEGvmo06u%2BiaKuHftusC6G5MQdJkaZKNQUGhx3kZFX7gosBRfcJVde9Uh%2BcR1Hi%2BjAye6S%2B58qrrq%2Fx5OnjDXUyrfDQxMDE0TnfP3nEjozTa2fyzL%2FiDn9jgfDoT%2BED3lAqIcPZ43r35izOnZiZDggvFG68GCp9EVsb0qF6venYgHxR0mnAE4zGrnPPzksq%2BvEfPup%2FR8gJVhUbInQEoJcVTFofGVGIlsLdhZObrlZiykLjH2awNMMNrp4MAGOqUB%2BDV%2F25QW0ECIpDZVP1a2wmXm64NoZi0rZHbCeLjpi0%2Fh5D6RYrrxMnlXMi1fB9SAMM0AMCDDIyH995lu15RmeOc6jpTTd%2FP9aaBMMYJ0lJzeeemjQmc%2FiX2EB3PZT3xaUxkNykhDlSmx8DpFGW1lBsVWkR6x1UVJePqeK5TourBocNSSNvY7j08zKttASyR60JjOk8tiGrXlSPhCGJX40xjJFhEl&X-Amz-Signature=b8523c463fbc18f6d1ea0f5bb8ba34f602e0f50a859264509705523170434efd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQHG3DR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC8RaErrG9FVs%2F1nNEZV9VdOgYPV1tZsAUWAfKKGps9vQIgC%2FZi%2Bi0UDT9Af4xdoZpU6gejNlhFzygg41HZmanTg80q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBWJtAF4U%2BNEaxfTTyrcA7YrH5jPQnXNlmGJGl6G%2BlEz4rjwrs82rvHt63kLTiXarU%2BKvTnQUo5T80X%2FcB7DpdNt9ZdO90XVP1Ui%2BGPqdX02%2BK42q4GKetNkIdgsvYJzo118yo%2FUBiJ0vRiZsp1MEwP8GIzpDmem1SEt52e0zEnhsN8hHUAiUrJaZqpPvPVM40yL5qwcXVdA1VafKmu2Tt3pthdPvuxE9CpXrIrtjNVkigdBRQK6yJoQj%2BDTpoMBsuvYiVESKCtytXASM67taUmahwuytsKZJJhwwgMxrQCEgXvf1mQkoJ6KMqWDMR74k7YY%2BecIRJxGDKMXwFcaqNsiI2Vice6LTg4ErZMVpr%2BpV7Kv3k5i4FoI074mPrqtO3WkuxPc%2FkMz8PIZm4rnUYWEmSfzEGvmo06u%2BiaKuHftusC6G5MQdJkaZKNQUGhx3kZFX7gosBRfcJVde9Uh%2BcR1Hi%2BjAye6S%2B58qrrq%2Fx5OnjDXUyrfDQxMDE0TnfP3nEjozTa2fyzL%2FiDn9jgfDoT%2BED3lAqIcPZ43r35izOnZiZDggvFG68GCp9EVsb0qF6venYgHxR0mnAE4zGrnPPzksq%2BvEfPup%2FR8gJVhUbInQEoJcVTFofGVGIlsLdhZObrlZiykLjH2awNMMNrp4MAGOqUB%2BDV%2F25QW0ECIpDZVP1a2wmXm64NoZi0rZHbCeLjpi0%2Fh5D6RYrrxMnlXMi1fB9SAMM0AMCDDIyH995lu15RmeOc6jpTTd%2FP9aaBMMYJ0lJzeeemjQmc%2FiX2EB3PZT3xaUxkNykhDlSmx8DpFGW1lBsVWkR6x1UVJePqeK5TourBocNSSNvY7j08zKttASyR60JjOk8tiGrXlSPhCGJX40xjJFhEl&X-Amz-Signature=071a53ad7217669e26bf952145419a80c88d7d5244bb1a549a94a7f461abd853&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQHG3DR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC8RaErrG9FVs%2F1nNEZV9VdOgYPV1tZsAUWAfKKGps9vQIgC%2FZi%2Bi0UDT9Af4xdoZpU6gejNlhFzygg41HZmanTg80q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBWJtAF4U%2BNEaxfTTyrcA7YrH5jPQnXNlmGJGl6G%2BlEz4rjwrs82rvHt63kLTiXarU%2BKvTnQUo5T80X%2FcB7DpdNt9ZdO90XVP1Ui%2BGPqdX02%2BK42q4GKetNkIdgsvYJzo118yo%2FUBiJ0vRiZsp1MEwP8GIzpDmem1SEt52e0zEnhsN8hHUAiUrJaZqpPvPVM40yL5qwcXVdA1VafKmu2Tt3pthdPvuxE9CpXrIrtjNVkigdBRQK6yJoQj%2BDTpoMBsuvYiVESKCtytXASM67taUmahwuytsKZJJhwwgMxrQCEgXvf1mQkoJ6KMqWDMR74k7YY%2BecIRJxGDKMXwFcaqNsiI2Vice6LTg4ErZMVpr%2BpV7Kv3k5i4FoI074mPrqtO3WkuxPc%2FkMz8PIZm4rnUYWEmSfzEGvmo06u%2BiaKuHftusC6G5MQdJkaZKNQUGhx3kZFX7gosBRfcJVde9Uh%2BcR1Hi%2BjAye6S%2B58qrrq%2Fx5OnjDXUyrfDQxMDE0TnfP3nEjozTa2fyzL%2FiDn9jgfDoT%2BED3lAqIcPZ43r35izOnZiZDggvFG68GCp9EVsb0qF6venYgHxR0mnAE4zGrnPPzksq%2BvEfPup%2FR8gJVhUbInQEoJcVTFofGVGIlsLdhZObrlZiykLjH2awNMMNrp4MAGOqUB%2BDV%2F25QW0ECIpDZVP1a2wmXm64NoZi0rZHbCeLjpi0%2Fh5D6RYrrxMnlXMi1fB9SAMM0AMCDDIyH995lu15RmeOc6jpTTd%2FP9aaBMMYJ0lJzeeemjQmc%2FiX2EB3PZT3xaUxkNykhDlSmx8DpFGW1lBsVWkR6x1UVJePqeK5TourBocNSSNvY7j08zKttASyR60JjOk8tiGrXlSPhCGJX40xjJFhEl&X-Amz-Signature=888d7ac5904d19ee2ec509195a038bc571f3cceb5c29d1467a9ff374a2bafd39&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQHG3DR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC8RaErrG9FVs%2F1nNEZV9VdOgYPV1tZsAUWAfKKGps9vQIgC%2FZi%2Bi0UDT9Af4xdoZpU6gejNlhFzygg41HZmanTg80q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBWJtAF4U%2BNEaxfTTyrcA7YrH5jPQnXNlmGJGl6G%2BlEz4rjwrs82rvHt63kLTiXarU%2BKvTnQUo5T80X%2FcB7DpdNt9ZdO90XVP1Ui%2BGPqdX02%2BK42q4GKetNkIdgsvYJzo118yo%2FUBiJ0vRiZsp1MEwP8GIzpDmem1SEt52e0zEnhsN8hHUAiUrJaZqpPvPVM40yL5qwcXVdA1VafKmu2Tt3pthdPvuxE9CpXrIrtjNVkigdBRQK6yJoQj%2BDTpoMBsuvYiVESKCtytXASM67taUmahwuytsKZJJhwwgMxrQCEgXvf1mQkoJ6KMqWDMR74k7YY%2BecIRJxGDKMXwFcaqNsiI2Vice6LTg4ErZMVpr%2BpV7Kv3k5i4FoI074mPrqtO3WkuxPc%2FkMz8PIZm4rnUYWEmSfzEGvmo06u%2BiaKuHftusC6G5MQdJkaZKNQUGhx3kZFX7gosBRfcJVde9Uh%2BcR1Hi%2BjAye6S%2B58qrrq%2Fx5OnjDXUyrfDQxMDE0TnfP3nEjozTa2fyzL%2FiDn9jgfDoT%2BED3lAqIcPZ43r35izOnZiZDggvFG68GCp9EVsb0qF6venYgHxR0mnAE4zGrnPPzksq%2BvEfPup%2FR8gJVhUbInQEoJcVTFofGVGIlsLdhZObrlZiykLjH2awNMMNrp4MAGOqUB%2BDV%2F25QW0ECIpDZVP1a2wmXm64NoZi0rZHbCeLjpi0%2Fh5D6RYrrxMnlXMi1fB9SAMM0AMCDDIyH995lu15RmeOc6jpTTd%2FP9aaBMMYJ0lJzeeemjQmc%2FiX2EB3PZT3xaUxkNykhDlSmx8DpFGW1lBsVWkR6x1UVJePqeK5TourBocNSSNvY7j08zKttASyR60JjOk8tiGrXlSPhCGJX40xjJFhEl&X-Amz-Signature=2c1ace62b5dd98ef84f2a09f8af59fae477273a8243dbce7ca2cc8a9b28df3d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQHG3DR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC8RaErrG9FVs%2F1nNEZV9VdOgYPV1tZsAUWAfKKGps9vQIgC%2FZi%2Bi0UDT9Af4xdoZpU6gejNlhFzygg41HZmanTg80q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBWJtAF4U%2BNEaxfTTyrcA7YrH5jPQnXNlmGJGl6G%2BlEz4rjwrs82rvHt63kLTiXarU%2BKvTnQUo5T80X%2FcB7DpdNt9ZdO90XVP1Ui%2BGPqdX02%2BK42q4GKetNkIdgsvYJzo118yo%2FUBiJ0vRiZsp1MEwP8GIzpDmem1SEt52e0zEnhsN8hHUAiUrJaZqpPvPVM40yL5qwcXVdA1VafKmu2Tt3pthdPvuxE9CpXrIrtjNVkigdBRQK6yJoQj%2BDTpoMBsuvYiVESKCtytXASM67taUmahwuytsKZJJhwwgMxrQCEgXvf1mQkoJ6KMqWDMR74k7YY%2BecIRJxGDKMXwFcaqNsiI2Vice6LTg4ErZMVpr%2BpV7Kv3k5i4FoI074mPrqtO3WkuxPc%2FkMz8PIZm4rnUYWEmSfzEGvmo06u%2BiaKuHftusC6G5MQdJkaZKNQUGhx3kZFX7gosBRfcJVde9Uh%2BcR1Hi%2BjAye6S%2B58qrrq%2Fx5OnjDXUyrfDQxMDE0TnfP3nEjozTa2fyzL%2FiDn9jgfDoT%2BED3lAqIcPZ43r35izOnZiZDggvFG68GCp9EVsb0qF6venYgHxR0mnAE4zGrnPPzksq%2BvEfPup%2FR8gJVhUbInQEoJcVTFofGVGIlsLdhZObrlZiykLjH2awNMMNrp4MAGOqUB%2BDV%2F25QW0ECIpDZVP1a2wmXm64NoZi0rZHbCeLjpi0%2Fh5D6RYrrxMnlXMi1fB9SAMM0AMCDDIyH995lu15RmeOc6jpTTd%2FP9aaBMMYJ0lJzeeemjQmc%2FiX2EB3PZT3xaUxkNykhDlSmx8DpFGW1lBsVWkR6x1UVJePqeK5TourBocNSSNvY7j08zKttASyR60JjOk8tiGrXlSPhCGJX40xjJFhEl&X-Amz-Signature=4409e257e02f9d4250a71280c63ab3cf5aaa3a2942e31f8bb746920a0f496c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQHG3DR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC8RaErrG9FVs%2F1nNEZV9VdOgYPV1tZsAUWAfKKGps9vQIgC%2FZi%2Bi0UDT9Af4xdoZpU6gejNlhFzygg41HZmanTg80q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBWJtAF4U%2BNEaxfTTyrcA7YrH5jPQnXNlmGJGl6G%2BlEz4rjwrs82rvHt63kLTiXarU%2BKvTnQUo5T80X%2FcB7DpdNt9ZdO90XVP1Ui%2BGPqdX02%2BK42q4GKetNkIdgsvYJzo118yo%2FUBiJ0vRiZsp1MEwP8GIzpDmem1SEt52e0zEnhsN8hHUAiUrJaZqpPvPVM40yL5qwcXVdA1VafKmu2Tt3pthdPvuxE9CpXrIrtjNVkigdBRQK6yJoQj%2BDTpoMBsuvYiVESKCtytXASM67taUmahwuytsKZJJhwwgMxrQCEgXvf1mQkoJ6KMqWDMR74k7YY%2BecIRJxGDKMXwFcaqNsiI2Vice6LTg4ErZMVpr%2BpV7Kv3k5i4FoI074mPrqtO3WkuxPc%2FkMz8PIZm4rnUYWEmSfzEGvmo06u%2BiaKuHftusC6G5MQdJkaZKNQUGhx3kZFX7gosBRfcJVde9Uh%2BcR1Hi%2BjAye6S%2B58qrrq%2Fx5OnjDXUyrfDQxMDE0TnfP3nEjozTa2fyzL%2FiDn9jgfDoT%2BED3lAqIcPZ43r35izOnZiZDggvFG68GCp9EVsb0qF6venYgHxR0mnAE4zGrnPPzksq%2BvEfPup%2FR8gJVhUbInQEoJcVTFofGVGIlsLdhZObrlZiykLjH2awNMMNrp4MAGOqUB%2BDV%2F25QW0ECIpDZVP1a2wmXm64NoZi0rZHbCeLjpi0%2Fh5D6RYrrxMnlXMi1fB9SAMM0AMCDDIyH995lu15RmeOc6jpTTd%2FP9aaBMMYJ0lJzeeemjQmc%2FiX2EB3PZT3xaUxkNykhDlSmx8DpFGW1lBsVWkR6x1UVJePqeK5TourBocNSSNvY7j08zKttASyR60JjOk8tiGrXlSPhCGJX40xjJFhEl&X-Amz-Signature=527708a71a686cc0dfe194e61f232601b796b8dbb6dcb854949c1a01acb772e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQHG3DR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC8RaErrG9FVs%2F1nNEZV9VdOgYPV1tZsAUWAfKKGps9vQIgC%2FZi%2Bi0UDT9Af4xdoZpU6gejNlhFzygg41HZmanTg80q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBWJtAF4U%2BNEaxfTTyrcA7YrH5jPQnXNlmGJGl6G%2BlEz4rjwrs82rvHt63kLTiXarU%2BKvTnQUo5T80X%2FcB7DpdNt9ZdO90XVP1Ui%2BGPqdX02%2BK42q4GKetNkIdgsvYJzo118yo%2FUBiJ0vRiZsp1MEwP8GIzpDmem1SEt52e0zEnhsN8hHUAiUrJaZqpPvPVM40yL5qwcXVdA1VafKmu2Tt3pthdPvuxE9CpXrIrtjNVkigdBRQK6yJoQj%2BDTpoMBsuvYiVESKCtytXASM67taUmahwuytsKZJJhwwgMxrQCEgXvf1mQkoJ6KMqWDMR74k7YY%2BecIRJxGDKMXwFcaqNsiI2Vice6LTg4ErZMVpr%2BpV7Kv3k5i4FoI074mPrqtO3WkuxPc%2FkMz8PIZm4rnUYWEmSfzEGvmo06u%2BiaKuHftusC6G5MQdJkaZKNQUGhx3kZFX7gosBRfcJVde9Uh%2BcR1Hi%2BjAye6S%2B58qrrq%2Fx5OnjDXUyrfDQxMDE0TnfP3nEjozTa2fyzL%2FiDn9jgfDoT%2BED3lAqIcPZ43r35izOnZiZDggvFG68GCp9EVsb0qF6venYgHxR0mnAE4zGrnPPzksq%2BvEfPup%2FR8gJVhUbInQEoJcVTFofGVGIlsLdhZObrlZiykLjH2awNMMNrp4MAGOqUB%2BDV%2F25QW0ECIpDZVP1a2wmXm64NoZi0rZHbCeLjpi0%2Fh5D6RYrrxMnlXMi1fB9SAMM0AMCDDIyH995lu15RmeOc6jpTTd%2FP9aaBMMYJ0lJzeeemjQmc%2FiX2EB3PZT3xaUxkNykhDlSmx8DpFGW1lBsVWkR6x1UVJePqeK5TourBocNSSNvY7j08zKttASyR60JjOk8tiGrXlSPhCGJX40xjJFhEl&X-Amz-Signature=7fb8b1c86a72eefbef48921d1e441a87991a3d3e686ea1e0438a634f9d32d378&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQHG3DR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC8RaErrG9FVs%2F1nNEZV9VdOgYPV1tZsAUWAfKKGps9vQIgC%2FZi%2Bi0UDT9Af4xdoZpU6gejNlhFzygg41HZmanTg80q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDBWJtAF4U%2BNEaxfTTyrcA7YrH5jPQnXNlmGJGl6G%2BlEz4rjwrs82rvHt63kLTiXarU%2BKvTnQUo5T80X%2FcB7DpdNt9ZdO90XVP1Ui%2BGPqdX02%2BK42q4GKetNkIdgsvYJzo118yo%2FUBiJ0vRiZsp1MEwP8GIzpDmem1SEt52e0zEnhsN8hHUAiUrJaZqpPvPVM40yL5qwcXVdA1VafKmu2Tt3pthdPvuxE9CpXrIrtjNVkigdBRQK6yJoQj%2BDTpoMBsuvYiVESKCtytXASM67taUmahwuytsKZJJhwwgMxrQCEgXvf1mQkoJ6KMqWDMR74k7YY%2BecIRJxGDKMXwFcaqNsiI2Vice6LTg4ErZMVpr%2BpV7Kv3k5i4FoI074mPrqtO3WkuxPc%2FkMz8PIZm4rnUYWEmSfzEGvmo06u%2BiaKuHftusC6G5MQdJkaZKNQUGhx3kZFX7gosBRfcJVde9Uh%2BcR1Hi%2BjAye6S%2B58qrrq%2Fx5OnjDXUyrfDQxMDE0TnfP3nEjozTa2fyzL%2FiDn9jgfDoT%2BED3lAqIcPZ43r35izOnZiZDggvFG68GCp9EVsb0qF6venYgHxR0mnAE4zGrnPPzksq%2BvEfPup%2FR8gJVhUbInQEoJcVTFofGVGIlsLdhZObrlZiykLjH2awNMMNrp4MAGOqUB%2BDV%2F25QW0ECIpDZVP1a2wmXm64NoZi0rZHbCeLjpi0%2Fh5D6RYrrxMnlXMi1fB9SAMM0AMCDDIyH995lu15RmeOc6jpTTd%2FP9aaBMMYJ0lJzeeemjQmc%2FiX2EB3PZT3xaUxkNykhDlSmx8DpFGW1lBsVWkR6x1UVJePqeK5TourBocNSSNvY7j08zKttASyR60JjOk8tiGrXlSPhCGJX40xjJFhEl&X-Amz-Signature=6d6f7667a71a8cdd22cd786f9ccb0d431a7b9dedc2b17c8242a93c45925541f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
