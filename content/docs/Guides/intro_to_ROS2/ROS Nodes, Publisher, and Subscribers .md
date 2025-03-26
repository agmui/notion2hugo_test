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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVYRS5R%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAoVtTUcGJURjGSqgXrVmiT7VyxLkFiO99doIuRQqBhAiEA517R4zmGy%2Fke40Wd97NI24Da6fmaXLBQqzXUZXM8x3Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEITaOZDBA9VC6HVqCrcA%2FWSv9IxDe1ML8%2B84ekIDe%2BIJN%2FSKloZqD42cRW%2BcVpRMtLPV4LtGIum%2FzCeLjVOthP%2BIhbhYWw6yf00ZHn9gP6q92SHXx2E9%2BD7awcTBUb2zDgUmTX%2FeL%2BwVvcCxt%2BUQ5GX74bsZt9wO4rDjYo5SP6i08wGNw7EaYMqOpy1cAFmkkdWjH8Ckr0Toer5ic0vKCP6v61kYe64dQjl%2B3mQXSw5o80e0tO6DA9PrfBQzL%2FmVq1ig%2BRLRuBxOFTZ7QnUcalf%2B4dakhRpTHVR1PfxN1ky%2BW244LOkW0dBqciD%2Btdbr7hSHO%2BwiZCIyOMXZSj1JYhrE1r7YM%2BLsUgwB0zPrnxoY5oBeOoAu2s1ocX7dYI5YSJvHH%2BsEyXvQbOp25f2%2FQkrrnTQP2LRfPNyadcBmnV0a09YpWJQY3BRPbR%2FrNF67JgpB5PvcuAYznmRB3bJQ0sNnpvOc9HygsGdQDjEQsu7QJ9zZoK8da%2FszL5BgR%2Fc0QsnYYj51QAlqEyskVnR3KeV1o%2Bm8PBzgJSpN%2F7wDt1HXen5cdZvNcHXqiSCob4Arg%2F01GsRhLpSYcSLzLZZeMyeOf4fONCKbHolxPKsM7KB1LXzJBU5veZvnPJnXfS80nh7o9a7weWZ3U0NMNKakL8GOqUBp5zD63wldGxcVWEkemAoYDYRABwqE7xqYbMs%2Bw00%2FEvnYKGcoFE4PsotgjMixBEeOehQXK24Rumks4ja81boA%2F9ATfcEuZVmwoHZI65JP3YlVMbNpRgi2lcZIHh4eEVcg52jPQS6Aw8HTKlTlfSnSCl1wCUKFSNsaDEueHbXVcKeBJQlKZlZhoAFULZfGIb18f6xFLzjSqpB4cTv%2B2Q1WluMhG2j&X-Amz-Signature=6181329040e167a9d94b8ec386d26aca9a67ebf218fea6713434382ec617b2e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVYRS5R%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAoVtTUcGJURjGSqgXrVmiT7VyxLkFiO99doIuRQqBhAiEA517R4zmGy%2Fke40Wd97NI24Da6fmaXLBQqzXUZXM8x3Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEITaOZDBA9VC6HVqCrcA%2FWSv9IxDe1ML8%2B84ekIDe%2BIJN%2FSKloZqD42cRW%2BcVpRMtLPV4LtGIum%2FzCeLjVOthP%2BIhbhYWw6yf00ZHn9gP6q92SHXx2E9%2BD7awcTBUb2zDgUmTX%2FeL%2BwVvcCxt%2BUQ5GX74bsZt9wO4rDjYo5SP6i08wGNw7EaYMqOpy1cAFmkkdWjH8Ckr0Toer5ic0vKCP6v61kYe64dQjl%2B3mQXSw5o80e0tO6DA9PrfBQzL%2FmVq1ig%2BRLRuBxOFTZ7QnUcalf%2B4dakhRpTHVR1PfxN1ky%2BW244LOkW0dBqciD%2Btdbr7hSHO%2BwiZCIyOMXZSj1JYhrE1r7YM%2BLsUgwB0zPrnxoY5oBeOoAu2s1ocX7dYI5YSJvHH%2BsEyXvQbOp25f2%2FQkrrnTQP2LRfPNyadcBmnV0a09YpWJQY3BRPbR%2FrNF67JgpB5PvcuAYznmRB3bJQ0sNnpvOc9HygsGdQDjEQsu7QJ9zZoK8da%2FszL5BgR%2Fc0QsnYYj51QAlqEyskVnR3KeV1o%2Bm8PBzgJSpN%2F7wDt1HXen5cdZvNcHXqiSCob4Arg%2F01GsRhLpSYcSLzLZZeMyeOf4fONCKbHolxPKsM7KB1LXzJBU5veZvnPJnXfS80nh7o9a7weWZ3U0NMNKakL8GOqUBp5zD63wldGxcVWEkemAoYDYRABwqE7xqYbMs%2Bw00%2FEvnYKGcoFE4PsotgjMixBEeOehQXK24Rumks4ja81boA%2F9ATfcEuZVmwoHZI65JP3YlVMbNpRgi2lcZIHh4eEVcg52jPQS6Aw8HTKlTlfSnSCl1wCUKFSNsaDEueHbXVcKeBJQlKZlZhoAFULZfGIb18f6xFLzjSqpB4cTv%2B2Q1WluMhG2j&X-Amz-Signature=e6c275a32af6f5f43b38cded1a3afaabcda8cb0ff70b39cd6846157ff375083d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVYRS5R%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAoVtTUcGJURjGSqgXrVmiT7VyxLkFiO99doIuRQqBhAiEA517R4zmGy%2Fke40Wd97NI24Da6fmaXLBQqzXUZXM8x3Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEITaOZDBA9VC6HVqCrcA%2FWSv9IxDe1ML8%2B84ekIDe%2BIJN%2FSKloZqD42cRW%2BcVpRMtLPV4LtGIum%2FzCeLjVOthP%2BIhbhYWw6yf00ZHn9gP6q92SHXx2E9%2BD7awcTBUb2zDgUmTX%2FeL%2BwVvcCxt%2BUQ5GX74bsZt9wO4rDjYo5SP6i08wGNw7EaYMqOpy1cAFmkkdWjH8Ckr0Toer5ic0vKCP6v61kYe64dQjl%2B3mQXSw5o80e0tO6DA9PrfBQzL%2FmVq1ig%2BRLRuBxOFTZ7QnUcalf%2B4dakhRpTHVR1PfxN1ky%2BW244LOkW0dBqciD%2Btdbr7hSHO%2BwiZCIyOMXZSj1JYhrE1r7YM%2BLsUgwB0zPrnxoY5oBeOoAu2s1ocX7dYI5YSJvHH%2BsEyXvQbOp25f2%2FQkrrnTQP2LRfPNyadcBmnV0a09YpWJQY3BRPbR%2FrNF67JgpB5PvcuAYznmRB3bJQ0sNnpvOc9HygsGdQDjEQsu7QJ9zZoK8da%2FszL5BgR%2Fc0QsnYYj51QAlqEyskVnR3KeV1o%2Bm8PBzgJSpN%2F7wDt1HXen5cdZvNcHXqiSCob4Arg%2F01GsRhLpSYcSLzLZZeMyeOf4fONCKbHolxPKsM7KB1LXzJBU5veZvnPJnXfS80nh7o9a7weWZ3U0NMNKakL8GOqUBp5zD63wldGxcVWEkemAoYDYRABwqE7xqYbMs%2Bw00%2FEvnYKGcoFE4PsotgjMixBEeOehQXK24Rumks4ja81boA%2F9ATfcEuZVmwoHZI65JP3YlVMbNpRgi2lcZIHh4eEVcg52jPQS6Aw8HTKlTlfSnSCl1wCUKFSNsaDEueHbXVcKeBJQlKZlZhoAFULZfGIb18f6xFLzjSqpB4cTv%2B2Q1WluMhG2j&X-Amz-Signature=5ef42c3fc809232e50e9b6cb9bca57ebc9c0ff5beb5dff6605b616b65f721c44&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVYRS5R%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAoVtTUcGJURjGSqgXrVmiT7VyxLkFiO99doIuRQqBhAiEA517R4zmGy%2Fke40Wd97NI24Da6fmaXLBQqzXUZXM8x3Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEITaOZDBA9VC6HVqCrcA%2FWSv9IxDe1ML8%2B84ekIDe%2BIJN%2FSKloZqD42cRW%2BcVpRMtLPV4LtGIum%2FzCeLjVOthP%2BIhbhYWw6yf00ZHn9gP6q92SHXx2E9%2BD7awcTBUb2zDgUmTX%2FeL%2BwVvcCxt%2BUQ5GX74bsZt9wO4rDjYo5SP6i08wGNw7EaYMqOpy1cAFmkkdWjH8Ckr0Toer5ic0vKCP6v61kYe64dQjl%2B3mQXSw5o80e0tO6DA9PrfBQzL%2FmVq1ig%2BRLRuBxOFTZ7QnUcalf%2B4dakhRpTHVR1PfxN1ky%2BW244LOkW0dBqciD%2Btdbr7hSHO%2BwiZCIyOMXZSj1JYhrE1r7YM%2BLsUgwB0zPrnxoY5oBeOoAu2s1ocX7dYI5YSJvHH%2BsEyXvQbOp25f2%2FQkrrnTQP2LRfPNyadcBmnV0a09YpWJQY3BRPbR%2FrNF67JgpB5PvcuAYznmRB3bJQ0sNnpvOc9HygsGdQDjEQsu7QJ9zZoK8da%2FszL5BgR%2Fc0QsnYYj51QAlqEyskVnR3KeV1o%2Bm8PBzgJSpN%2F7wDt1HXen5cdZvNcHXqiSCob4Arg%2F01GsRhLpSYcSLzLZZeMyeOf4fONCKbHolxPKsM7KB1LXzJBU5veZvnPJnXfS80nh7o9a7weWZ3U0NMNKakL8GOqUBp5zD63wldGxcVWEkemAoYDYRABwqE7xqYbMs%2Bw00%2FEvnYKGcoFE4PsotgjMixBEeOehQXK24Rumks4ja81boA%2F9ATfcEuZVmwoHZI65JP3YlVMbNpRgi2lcZIHh4eEVcg52jPQS6Aw8HTKlTlfSnSCl1wCUKFSNsaDEueHbXVcKeBJQlKZlZhoAFULZfGIb18f6xFLzjSqpB4cTv%2B2Q1WluMhG2j&X-Amz-Signature=56ca7b4bde8f29c26df73732afb188b54fecb436e4851a0fcdd2ca97cf36dd7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVYRS5R%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAoVtTUcGJURjGSqgXrVmiT7VyxLkFiO99doIuRQqBhAiEA517R4zmGy%2Fke40Wd97NI24Da6fmaXLBQqzXUZXM8x3Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEITaOZDBA9VC6HVqCrcA%2FWSv9IxDe1ML8%2B84ekIDe%2BIJN%2FSKloZqD42cRW%2BcVpRMtLPV4LtGIum%2FzCeLjVOthP%2BIhbhYWw6yf00ZHn9gP6q92SHXx2E9%2BD7awcTBUb2zDgUmTX%2FeL%2BwVvcCxt%2BUQ5GX74bsZt9wO4rDjYo5SP6i08wGNw7EaYMqOpy1cAFmkkdWjH8Ckr0Toer5ic0vKCP6v61kYe64dQjl%2B3mQXSw5o80e0tO6DA9PrfBQzL%2FmVq1ig%2BRLRuBxOFTZ7QnUcalf%2B4dakhRpTHVR1PfxN1ky%2BW244LOkW0dBqciD%2Btdbr7hSHO%2BwiZCIyOMXZSj1JYhrE1r7YM%2BLsUgwB0zPrnxoY5oBeOoAu2s1ocX7dYI5YSJvHH%2BsEyXvQbOp25f2%2FQkrrnTQP2LRfPNyadcBmnV0a09YpWJQY3BRPbR%2FrNF67JgpB5PvcuAYznmRB3bJQ0sNnpvOc9HygsGdQDjEQsu7QJ9zZoK8da%2FszL5BgR%2Fc0QsnYYj51QAlqEyskVnR3KeV1o%2Bm8PBzgJSpN%2F7wDt1HXen5cdZvNcHXqiSCob4Arg%2F01GsRhLpSYcSLzLZZeMyeOf4fONCKbHolxPKsM7KB1LXzJBU5veZvnPJnXfS80nh7o9a7weWZ3U0NMNKakL8GOqUBp5zD63wldGxcVWEkemAoYDYRABwqE7xqYbMs%2Bw00%2FEvnYKGcoFE4PsotgjMixBEeOehQXK24Rumks4ja81boA%2F9ATfcEuZVmwoHZI65JP3YlVMbNpRgi2lcZIHh4eEVcg52jPQS6Aw8HTKlTlfSnSCl1wCUKFSNsaDEueHbXVcKeBJQlKZlZhoAFULZfGIb18f6xFLzjSqpB4cTv%2B2Q1WluMhG2j&X-Amz-Signature=6852ad41872db408d4c37131c340e24d9daf46f3987ae14dccb3461c2c684051&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVYRS5R%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAoVtTUcGJURjGSqgXrVmiT7VyxLkFiO99doIuRQqBhAiEA517R4zmGy%2Fke40Wd97NI24Da6fmaXLBQqzXUZXM8x3Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEITaOZDBA9VC6HVqCrcA%2FWSv9IxDe1ML8%2B84ekIDe%2BIJN%2FSKloZqD42cRW%2BcVpRMtLPV4LtGIum%2FzCeLjVOthP%2BIhbhYWw6yf00ZHn9gP6q92SHXx2E9%2BD7awcTBUb2zDgUmTX%2FeL%2BwVvcCxt%2BUQ5GX74bsZt9wO4rDjYo5SP6i08wGNw7EaYMqOpy1cAFmkkdWjH8Ckr0Toer5ic0vKCP6v61kYe64dQjl%2B3mQXSw5o80e0tO6DA9PrfBQzL%2FmVq1ig%2BRLRuBxOFTZ7QnUcalf%2B4dakhRpTHVR1PfxN1ky%2BW244LOkW0dBqciD%2Btdbr7hSHO%2BwiZCIyOMXZSj1JYhrE1r7YM%2BLsUgwB0zPrnxoY5oBeOoAu2s1ocX7dYI5YSJvHH%2BsEyXvQbOp25f2%2FQkrrnTQP2LRfPNyadcBmnV0a09YpWJQY3BRPbR%2FrNF67JgpB5PvcuAYznmRB3bJQ0sNnpvOc9HygsGdQDjEQsu7QJ9zZoK8da%2FszL5BgR%2Fc0QsnYYj51QAlqEyskVnR3KeV1o%2Bm8PBzgJSpN%2F7wDt1HXen5cdZvNcHXqiSCob4Arg%2F01GsRhLpSYcSLzLZZeMyeOf4fONCKbHolxPKsM7KB1LXzJBU5veZvnPJnXfS80nh7o9a7weWZ3U0NMNKakL8GOqUBp5zD63wldGxcVWEkemAoYDYRABwqE7xqYbMs%2Bw00%2FEvnYKGcoFE4PsotgjMixBEeOehQXK24Rumks4ja81boA%2F9ATfcEuZVmwoHZI65JP3YlVMbNpRgi2lcZIHh4eEVcg52jPQS6Aw8HTKlTlfSnSCl1wCUKFSNsaDEueHbXVcKeBJQlKZlZhoAFULZfGIb18f6xFLzjSqpB4cTv%2B2Q1WluMhG2j&X-Amz-Signature=71bc5cf436867001cca5a81c4147b92acc32345ae2e8482606ffd6c9f4294e73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVYRS5R%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAoVtTUcGJURjGSqgXrVmiT7VyxLkFiO99doIuRQqBhAiEA517R4zmGy%2Fke40Wd97NI24Da6fmaXLBQqzXUZXM8x3Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEITaOZDBA9VC6HVqCrcA%2FWSv9IxDe1ML8%2B84ekIDe%2BIJN%2FSKloZqD42cRW%2BcVpRMtLPV4LtGIum%2FzCeLjVOthP%2BIhbhYWw6yf00ZHn9gP6q92SHXx2E9%2BD7awcTBUb2zDgUmTX%2FeL%2BwVvcCxt%2BUQ5GX74bsZt9wO4rDjYo5SP6i08wGNw7EaYMqOpy1cAFmkkdWjH8Ckr0Toer5ic0vKCP6v61kYe64dQjl%2B3mQXSw5o80e0tO6DA9PrfBQzL%2FmVq1ig%2BRLRuBxOFTZ7QnUcalf%2B4dakhRpTHVR1PfxN1ky%2BW244LOkW0dBqciD%2Btdbr7hSHO%2BwiZCIyOMXZSj1JYhrE1r7YM%2BLsUgwB0zPrnxoY5oBeOoAu2s1ocX7dYI5YSJvHH%2BsEyXvQbOp25f2%2FQkrrnTQP2LRfPNyadcBmnV0a09YpWJQY3BRPbR%2FrNF67JgpB5PvcuAYznmRB3bJQ0sNnpvOc9HygsGdQDjEQsu7QJ9zZoK8da%2FszL5BgR%2Fc0QsnYYj51QAlqEyskVnR3KeV1o%2Bm8PBzgJSpN%2F7wDt1HXen5cdZvNcHXqiSCob4Arg%2F01GsRhLpSYcSLzLZZeMyeOf4fONCKbHolxPKsM7KB1LXzJBU5veZvnPJnXfS80nh7o9a7weWZ3U0NMNKakL8GOqUBp5zD63wldGxcVWEkemAoYDYRABwqE7xqYbMs%2Bw00%2FEvnYKGcoFE4PsotgjMixBEeOehQXK24Rumks4ja81boA%2F9ATfcEuZVmwoHZI65JP3YlVMbNpRgi2lcZIHh4eEVcg52jPQS6Aw8HTKlTlfSnSCl1wCUKFSNsaDEueHbXVcKeBJQlKZlZhoAFULZfGIb18f6xFLzjSqpB4cTv%2B2Q1WluMhG2j&X-Amz-Signature=17409c587e9d4ec27c0626817974d0906bb79ad6e66bb48c31a52b75dd771c99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPVYRS5R%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T150913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAoVtTUcGJURjGSqgXrVmiT7VyxLkFiO99doIuRQqBhAiEA517R4zmGy%2Fke40Wd97NI24Da6fmaXLBQqzXUZXM8x3Qq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDEITaOZDBA9VC6HVqCrcA%2FWSv9IxDe1ML8%2B84ekIDe%2BIJN%2FSKloZqD42cRW%2BcVpRMtLPV4LtGIum%2FzCeLjVOthP%2BIhbhYWw6yf00ZHn9gP6q92SHXx2E9%2BD7awcTBUb2zDgUmTX%2FeL%2BwVvcCxt%2BUQ5GX74bsZt9wO4rDjYo5SP6i08wGNw7EaYMqOpy1cAFmkkdWjH8Ckr0Toer5ic0vKCP6v61kYe64dQjl%2B3mQXSw5o80e0tO6DA9PrfBQzL%2FmVq1ig%2BRLRuBxOFTZ7QnUcalf%2B4dakhRpTHVR1PfxN1ky%2BW244LOkW0dBqciD%2Btdbr7hSHO%2BwiZCIyOMXZSj1JYhrE1r7YM%2BLsUgwB0zPrnxoY5oBeOoAu2s1ocX7dYI5YSJvHH%2BsEyXvQbOp25f2%2FQkrrnTQP2LRfPNyadcBmnV0a09YpWJQY3BRPbR%2FrNF67JgpB5PvcuAYznmRB3bJQ0sNnpvOc9HygsGdQDjEQsu7QJ9zZoK8da%2FszL5BgR%2Fc0QsnYYj51QAlqEyskVnR3KeV1o%2Bm8PBzgJSpN%2F7wDt1HXen5cdZvNcHXqiSCob4Arg%2F01GsRhLpSYcSLzLZZeMyeOf4fONCKbHolxPKsM7KB1LXzJBU5veZvnPJnXfS80nh7o9a7weWZ3U0NMNKakL8GOqUBp5zD63wldGxcVWEkemAoYDYRABwqE7xqYbMs%2Bw00%2FEvnYKGcoFE4PsotgjMixBEeOehQXK24Rumks4ja81boA%2F9ATfcEuZVmwoHZI65JP3YlVMbNpRgi2lcZIHh4eEVcg52jPQS6Aw8HTKlTlfSnSCl1wCUKFSNsaDEueHbXVcKeBJQlKZlZhoAFULZfGIb18f6xFLzjSqpB4cTv%2B2Q1WluMhG2j&X-Amz-Signature=0f74a4721438b2cffd744b21fbb8fd591d2eb2023e7f3bdae40ab0971ee9b5d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
