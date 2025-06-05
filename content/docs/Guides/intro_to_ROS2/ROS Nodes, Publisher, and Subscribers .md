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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUHDATX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC8qhpIdVrmHYKJAaRgZj%2BMprCm%2FVqvjf8SK40dTkNY0wIgOkwgHWzUzT2urUo8Ft38auUAlfZQU4oLpZPgu5g%2FTxgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDISgRt4qThBnbKCBKyrcAzkassHzeunqEoremWZEaKusSGjarsgWI6FHFGu2dORIgcd1HoHugguTR3RUJh2xJy4jHl8hprxoxWkXr4oGT9zxYsYSpkeBIXjYXTIH9EWjRahTbQ9rXVQHOiW5kA40OUS3aKG3BbBiMkqWZ0QYSBLtPclgizkv1Ygbj%2Fgzo1fedGhtJthv6CPb7DcPOTiXWC%2Fou1YLskytUaeQMpcrZx9TjGHqrOEE9WYvr1OVizDkyutI5K%2Bn6jmv1DsePJjCo9RkmT66mn5htU%2FmTuQWT2PyUyOmi9%2BqKeqnisAHUMKJj5TKGnw7nLPfZiFWw8d8ZaPPRBqYzbQsb5BtoxGwELCF51CkjPKj47YUJAgnktlOdoTMfswKcbvmGnKpgwCTJhH%2BRVgkX6ja6uoGmnS0louD1x1pZ931A4e3xO2T6pFGD55zx3zsO6mPZ%2B7d7mdX4fLbPkbTQov21Kzh90GuOiknKkpqfXvRDdG82fMDzbWkL3ng8WON5eXDAhRGMr58l21AIW0rjaHi0FwuAWqJeMexLGP0tET2Vmjpo7VOqX%2FBkBR1m3eI0bn%2FfsLsNbsru1kvVfYMFdPyz347p%2BGGROKpufpGaLQbdITTIMmPqxCfe4Gg9ZzzzYNX4rjHMLeuhcIGOqUBjYMJ9WlFTVWTJBW5oT5bC0mUJIAySX38vG6wPcoeMNzrij4cBlaf4ACHBlxObPZSvy5DhgQyLZ6UBfcznAGD4J7xCsIpE9yv%2BHj3nuHG4MRGZa4Ez%2BAwSCX5Hnfmh47T1BlwljLgI2D6XbfX1ETXNToDzm0srPVUjeD%2FCn2ZI3sZ99BxaZSRVN%2BAgNbam6%2F%2FS2wkuuP6%2FTbrUinjGjkdzWiVsrtd&X-Amz-Signature=dac495caabd8c5bceadcb4caa9f06a74bae29977a4af23811134c778ee5a8d69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUHDATX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC8qhpIdVrmHYKJAaRgZj%2BMprCm%2FVqvjf8SK40dTkNY0wIgOkwgHWzUzT2urUo8Ft38auUAlfZQU4oLpZPgu5g%2FTxgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDISgRt4qThBnbKCBKyrcAzkassHzeunqEoremWZEaKusSGjarsgWI6FHFGu2dORIgcd1HoHugguTR3RUJh2xJy4jHl8hprxoxWkXr4oGT9zxYsYSpkeBIXjYXTIH9EWjRahTbQ9rXVQHOiW5kA40OUS3aKG3BbBiMkqWZ0QYSBLtPclgizkv1Ygbj%2Fgzo1fedGhtJthv6CPb7DcPOTiXWC%2Fou1YLskytUaeQMpcrZx9TjGHqrOEE9WYvr1OVizDkyutI5K%2Bn6jmv1DsePJjCo9RkmT66mn5htU%2FmTuQWT2PyUyOmi9%2BqKeqnisAHUMKJj5TKGnw7nLPfZiFWw8d8ZaPPRBqYzbQsb5BtoxGwELCF51CkjPKj47YUJAgnktlOdoTMfswKcbvmGnKpgwCTJhH%2BRVgkX6ja6uoGmnS0louD1x1pZ931A4e3xO2T6pFGD55zx3zsO6mPZ%2B7d7mdX4fLbPkbTQov21Kzh90GuOiknKkpqfXvRDdG82fMDzbWkL3ng8WON5eXDAhRGMr58l21AIW0rjaHi0FwuAWqJeMexLGP0tET2Vmjpo7VOqX%2FBkBR1m3eI0bn%2FfsLsNbsru1kvVfYMFdPyz347p%2BGGROKpufpGaLQbdITTIMmPqxCfe4Gg9ZzzzYNX4rjHMLeuhcIGOqUBjYMJ9WlFTVWTJBW5oT5bC0mUJIAySX38vG6wPcoeMNzrij4cBlaf4ACHBlxObPZSvy5DhgQyLZ6UBfcznAGD4J7xCsIpE9yv%2BHj3nuHG4MRGZa4Ez%2BAwSCX5Hnfmh47T1BlwljLgI2D6XbfX1ETXNToDzm0srPVUjeD%2FCn2ZI3sZ99BxaZSRVN%2BAgNbam6%2F%2FS2wkuuP6%2FTbrUinjGjkdzWiVsrtd&X-Amz-Signature=ae96e048a6466c6339ac2fea81344cfb004565c66370ea9915650b5d6cfd3176&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUHDATX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC8qhpIdVrmHYKJAaRgZj%2BMprCm%2FVqvjf8SK40dTkNY0wIgOkwgHWzUzT2urUo8Ft38auUAlfZQU4oLpZPgu5g%2FTxgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDISgRt4qThBnbKCBKyrcAzkassHzeunqEoremWZEaKusSGjarsgWI6FHFGu2dORIgcd1HoHugguTR3RUJh2xJy4jHl8hprxoxWkXr4oGT9zxYsYSpkeBIXjYXTIH9EWjRahTbQ9rXVQHOiW5kA40OUS3aKG3BbBiMkqWZ0QYSBLtPclgizkv1Ygbj%2Fgzo1fedGhtJthv6CPb7DcPOTiXWC%2Fou1YLskytUaeQMpcrZx9TjGHqrOEE9WYvr1OVizDkyutI5K%2Bn6jmv1DsePJjCo9RkmT66mn5htU%2FmTuQWT2PyUyOmi9%2BqKeqnisAHUMKJj5TKGnw7nLPfZiFWw8d8ZaPPRBqYzbQsb5BtoxGwELCF51CkjPKj47YUJAgnktlOdoTMfswKcbvmGnKpgwCTJhH%2BRVgkX6ja6uoGmnS0louD1x1pZ931A4e3xO2T6pFGD55zx3zsO6mPZ%2B7d7mdX4fLbPkbTQov21Kzh90GuOiknKkpqfXvRDdG82fMDzbWkL3ng8WON5eXDAhRGMr58l21AIW0rjaHi0FwuAWqJeMexLGP0tET2Vmjpo7VOqX%2FBkBR1m3eI0bn%2FfsLsNbsru1kvVfYMFdPyz347p%2BGGROKpufpGaLQbdITTIMmPqxCfe4Gg9ZzzzYNX4rjHMLeuhcIGOqUBjYMJ9WlFTVWTJBW5oT5bC0mUJIAySX38vG6wPcoeMNzrij4cBlaf4ACHBlxObPZSvy5DhgQyLZ6UBfcznAGD4J7xCsIpE9yv%2BHj3nuHG4MRGZa4Ez%2BAwSCX5Hnfmh47T1BlwljLgI2D6XbfX1ETXNToDzm0srPVUjeD%2FCn2ZI3sZ99BxaZSRVN%2BAgNbam6%2F%2FS2wkuuP6%2FTbrUinjGjkdzWiVsrtd&X-Amz-Signature=c338169a2908b5b271c0d30fae59f01782c3f426a65b25de0f1726989158aec7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUHDATX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC8qhpIdVrmHYKJAaRgZj%2BMprCm%2FVqvjf8SK40dTkNY0wIgOkwgHWzUzT2urUo8Ft38auUAlfZQU4oLpZPgu5g%2FTxgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDISgRt4qThBnbKCBKyrcAzkassHzeunqEoremWZEaKusSGjarsgWI6FHFGu2dORIgcd1HoHugguTR3RUJh2xJy4jHl8hprxoxWkXr4oGT9zxYsYSpkeBIXjYXTIH9EWjRahTbQ9rXVQHOiW5kA40OUS3aKG3BbBiMkqWZ0QYSBLtPclgizkv1Ygbj%2Fgzo1fedGhtJthv6CPb7DcPOTiXWC%2Fou1YLskytUaeQMpcrZx9TjGHqrOEE9WYvr1OVizDkyutI5K%2Bn6jmv1DsePJjCo9RkmT66mn5htU%2FmTuQWT2PyUyOmi9%2BqKeqnisAHUMKJj5TKGnw7nLPfZiFWw8d8ZaPPRBqYzbQsb5BtoxGwELCF51CkjPKj47YUJAgnktlOdoTMfswKcbvmGnKpgwCTJhH%2BRVgkX6ja6uoGmnS0louD1x1pZ931A4e3xO2T6pFGD55zx3zsO6mPZ%2B7d7mdX4fLbPkbTQov21Kzh90GuOiknKkpqfXvRDdG82fMDzbWkL3ng8WON5eXDAhRGMr58l21AIW0rjaHi0FwuAWqJeMexLGP0tET2Vmjpo7VOqX%2FBkBR1m3eI0bn%2FfsLsNbsru1kvVfYMFdPyz347p%2BGGROKpufpGaLQbdITTIMmPqxCfe4Gg9ZzzzYNX4rjHMLeuhcIGOqUBjYMJ9WlFTVWTJBW5oT5bC0mUJIAySX38vG6wPcoeMNzrij4cBlaf4ACHBlxObPZSvy5DhgQyLZ6UBfcznAGD4J7xCsIpE9yv%2BHj3nuHG4MRGZa4Ez%2BAwSCX5Hnfmh47T1BlwljLgI2D6XbfX1ETXNToDzm0srPVUjeD%2FCn2ZI3sZ99BxaZSRVN%2BAgNbam6%2F%2FS2wkuuP6%2FTbrUinjGjkdzWiVsrtd&X-Amz-Signature=fde68f1b901ba9afe36cb21558366fe606c97a4c05d195c2a1d9c341e53e2226&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUHDATX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC8qhpIdVrmHYKJAaRgZj%2BMprCm%2FVqvjf8SK40dTkNY0wIgOkwgHWzUzT2urUo8Ft38auUAlfZQU4oLpZPgu5g%2FTxgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDISgRt4qThBnbKCBKyrcAzkassHzeunqEoremWZEaKusSGjarsgWI6FHFGu2dORIgcd1HoHugguTR3RUJh2xJy4jHl8hprxoxWkXr4oGT9zxYsYSpkeBIXjYXTIH9EWjRahTbQ9rXVQHOiW5kA40OUS3aKG3BbBiMkqWZ0QYSBLtPclgizkv1Ygbj%2Fgzo1fedGhtJthv6CPb7DcPOTiXWC%2Fou1YLskytUaeQMpcrZx9TjGHqrOEE9WYvr1OVizDkyutI5K%2Bn6jmv1DsePJjCo9RkmT66mn5htU%2FmTuQWT2PyUyOmi9%2BqKeqnisAHUMKJj5TKGnw7nLPfZiFWw8d8ZaPPRBqYzbQsb5BtoxGwELCF51CkjPKj47YUJAgnktlOdoTMfswKcbvmGnKpgwCTJhH%2BRVgkX6ja6uoGmnS0louD1x1pZ931A4e3xO2T6pFGD55zx3zsO6mPZ%2B7d7mdX4fLbPkbTQov21Kzh90GuOiknKkpqfXvRDdG82fMDzbWkL3ng8WON5eXDAhRGMr58l21AIW0rjaHi0FwuAWqJeMexLGP0tET2Vmjpo7VOqX%2FBkBR1m3eI0bn%2FfsLsNbsru1kvVfYMFdPyz347p%2BGGROKpufpGaLQbdITTIMmPqxCfe4Gg9ZzzzYNX4rjHMLeuhcIGOqUBjYMJ9WlFTVWTJBW5oT5bC0mUJIAySX38vG6wPcoeMNzrij4cBlaf4ACHBlxObPZSvy5DhgQyLZ6UBfcznAGD4J7xCsIpE9yv%2BHj3nuHG4MRGZa4Ez%2BAwSCX5Hnfmh47T1BlwljLgI2D6XbfX1ETXNToDzm0srPVUjeD%2FCn2ZI3sZ99BxaZSRVN%2BAgNbam6%2F%2FS2wkuuP6%2FTbrUinjGjkdzWiVsrtd&X-Amz-Signature=e54a0bdc5db27e8a7f69b6d7b78ac4ee760088df1045b3fa1635b662c643efc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUHDATX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC8qhpIdVrmHYKJAaRgZj%2BMprCm%2FVqvjf8SK40dTkNY0wIgOkwgHWzUzT2urUo8Ft38auUAlfZQU4oLpZPgu5g%2FTxgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDISgRt4qThBnbKCBKyrcAzkassHzeunqEoremWZEaKusSGjarsgWI6FHFGu2dORIgcd1HoHugguTR3RUJh2xJy4jHl8hprxoxWkXr4oGT9zxYsYSpkeBIXjYXTIH9EWjRahTbQ9rXVQHOiW5kA40OUS3aKG3BbBiMkqWZ0QYSBLtPclgizkv1Ygbj%2Fgzo1fedGhtJthv6CPb7DcPOTiXWC%2Fou1YLskytUaeQMpcrZx9TjGHqrOEE9WYvr1OVizDkyutI5K%2Bn6jmv1DsePJjCo9RkmT66mn5htU%2FmTuQWT2PyUyOmi9%2BqKeqnisAHUMKJj5TKGnw7nLPfZiFWw8d8ZaPPRBqYzbQsb5BtoxGwELCF51CkjPKj47YUJAgnktlOdoTMfswKcbvmGnKpgwCTJhH%2BRVgkX6ja6uoGmnS0louD1x1pZ931A4e3xO2T6pFGD55zx3zsO6mPZ%2B7d7mdX4fLbPkbTQov21Kzh90GuOiknKkpqfXvRDdG82fMDzbWkL3ng8WON5eXDAhRGMr58l21AIW0rjaHi0FwuAWqJeMexLGP0tET2Vmjpo7VOqX%2FBkBR1m3eI0bn%2FfsLsNbsru1kvVfYMFdPyz347p%2BGGROKpufpGaLQbdITTIMmPqxCfe4Gg9ZzzzYNX4rjHMLeuhcIGOqUBjYMJ9WlFTVWTJBW5oT5bC0mUJIAySX38vG6wPcoeMNzrij4cBlaf4ACHBlxObPZSvy5DhgQyLZ6UBfcznAGD4J7xCsIpE9yv%2BHj3nuHG4MRGZa4Ez%2BAwSCX5Hnfmh47T1BlwljLgI2D6XbfX1ETXNToDzm0srPVUjeD%2FCn2ZI3sZ99BxaZSRVN%2BAgNbam6%2F%2FS2wkuuP6%2FTbrUinjGjkdzWiVsrtd&X-Amz-Signature=b7c5b528101825a204d5c25d3a06a8fdaeb3c8d35470290dc2e3faad995687fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUHDATX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC8qhpIdVrmHYKJAaRgZj%2BMprCm%2FVqvjf8SK40dTkNY0wIgOkwgHWzUzT2urUo8Ft38auUAlfZQU4oLpZPgu5g%2FTxgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDISgRt4qThBnbKCBKyrcAzkassHzeunqEoremWZEaKusSGjarsgWI6FHFGu2dORIgcd1HoHugguTR3RUJh2xJy4jHl8hprxoxWkXr4oGT9zxYsYSpkeBIXjYXTIH9EWjRahTbQ9rXVQHOiW5kA40OUS3aKG3BbBiMkqWZ0QYSBLtPclgizkv1Ygbj%2Fgzo1fedGhtJthv6CPb7DcPOTiXWC%2Fou1YLskytUaeQMpcrZx9TjGHqrOEE9WYvr1OVizDkyutI5K%2Bn6jmv1DsePJjCo9RkmT66mn5htU%2FmTuQWT2PyUyOmi9%2BqKeqnisAHUMKJj5TKGnw7nLPfZiFWw8d8ZaPPRBqYzbQsb5BtoxGwELCF51CkjPKj47YUJAgnktlOdoTMfswKcbvmGnKpgwCTJhH%2BRVgkX6ja6uoGmnS0louD1x1pZ931A4e3xO2T6pFGD55zx3zsO6mPZ%2B7d7mdX4fLbPkbTQov21Kzh90GuOiknKkpqfXvRDdG82fMDzbWkL3ng8WON5eXDAhRGMr58l21AIW0rjaHi0FwuAWqJeMexLGP0tET2Vmjpo7VOqX%2FBkBR1m3eI0bn%2FfsLsNbsru1kvVfYMFdPyz347p%2BGGROKpufpGaLQbdITTIMmPqxCfe4Gg9ZzzzYNX4rjHMLeuhcIGOqUBjYMJ9WlFTVWTJBW5oT5bC0mUJIAySX38vG6wPcoeMNzrij4cBlaf4ACHBlxObPZSvy5DhgQyLZ6UBfcznAGD4J7xCsIpE9yv%2BHj3nuHG4MRGZa4Ez%2BAwSCX5Hnfmh47T1BlwljLgI2D6XbfX1ETXNToDzm0srPVUjeD%2FCn2ZI3sZ99BxaZSRVN%2BAgNbam6%2F%2FS2wkuuP6%2FTbrUinjGjkdzWiVsrtd&X-Amz-Signature=bc353b3b069c61db263b1ead7be8cb1d61ea8cdece74958f980d600e664ff1ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OUHDATX%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC8qhpIdVrmHYKJAaRgZj%2BMprCm%2FVqvjf8SK40dTkNY0wIgOkwgHWzUzT2urUo8Ft38auUAlfZQU4oLpZPgu5g%2FTxgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDISgRt4qThBnbKCBKyrcAzkassHzeunqEoremWZEaKusSGjarsgWI6FHFGu2dORIgcd1HoHugguTR3RUJh2xJy4jHl8hprxoxWkXr4oGT9zxYsYSpkeBIXjYXTIH9EWjRahTbQ9rXVQHOiW5kA40OUS3aKG3BbBiMkqWZ0QYSBLtPclgizkv1Ygbj%2Fgzo1fedGhtJthv6CPb7DcPOTiXWC%2Fou1YLskytUaeQMpcrZx9TjGHqrOEE9WYvr1OVizDkyutI5K%2Bn6jmv1DsePJjCo9RkmT66mn5htU%2FmTuQWT2PyUyOmi9%2BqKeqnisAHUMKJj5TKGnw7nLPfZiFWw8d8ZaPPRBqYzbQsb5BtoxGwELCF51CkjPKj47YUJAgnktlOdoTMfswKcbvmGnKpgwCTJhH%2BRVgkX6ja6uoGmnS0louD1x1pZ931A4e3xO2T6pFGD55zx3zsO6mPZ%2B7d7mdX4fLbPkbTQov21Kzh90GuOiknKkpqfXvRDdG82fMDzbWkL3ng8WON5eXDAhRGMr58l21AIW0rjaHi0FwuAWqJeMexLGP0tET2Vmjpo7VOqX%2FBkBR1m3eI0bn%2FfsLsNbsru1kvVfYMFdPyz347p%2BGGROKpufpGaLQbdITTIMmPqxCfe4Gg9ZzzzYNX4rjHMLeuhcIGOqUBjYMJ9WlFTVWTJBW5oT5bC0mUJIAySX38vG6wPcoeMNzrij4cBlaf4ACHBlxObPZSvy5DhgQyLZ6UBfcznAGD4J7xCsIpE9yv%2BHj3nuHG4MRGZa4Ez%2BAwSCX5Hnfmh47T1BlwljLgI2D6XbfX1ETXNToDzm0srPVUjeD%2FCn2ZI3sZ99BxaZSRVN%2BAgNbam6%2F%2FS2wkuuP6%2FTbrUinjGjkdzWiVsrtd&X-Amz-Signature=5a86fb2f1176a88ae29b489f03dce6738ff4f28225453ce6a6d9e2b1d1a33d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
