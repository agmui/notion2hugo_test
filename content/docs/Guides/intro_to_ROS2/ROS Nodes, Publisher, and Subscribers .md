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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBETJSI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGp3WFUXW2YGfpG1AxaaeReyReAdbqOF8qju%2B9Bk5XAyAiB97WX5Dv8SUlW9G2dcSBIus10DKjn5xT%2FNHgHeJwA%2BcCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbgrzqQUDAU44apzeKtwDz9Pb4HXNLvee8Gk83AkbtejxIvEMqyY2%2BTd8EGNK8sayHF3KryX7nWcOByAX6v7RN8XGb1IEq3O9PTiUF8dsYhrxa%2BTaqYyBkaNCTfw0e1XjsSQ3g0A2c%2FBn218lE4zWYeYy8u4fDkn2VYvPFjwDo%2FMmt%2BldrbidVwZaX2buGA70j3ONH7T4dPwSRRXdPF%2FHdG3xzh0PeJrTqQOMC1JLEe7YGG9qgcd2z9zK4x%2F3kp7LzjlDHgxtqDCNE5KdjrsOnMeCqx%2FlO3%2BKF24juEVfp0Jcg4VlBY7cvh5pHbDUHhDCcJ7adoLKO1AV7tHu2OXIxYUZEKdGJizIP0MaGafrAVNOkBZySzYqKwihe3W4T6NoIHN1pl2BGGoE1K%2BFuyMA2rk0Ysa5fVlcMNkiq5qItOOGkCQV1ECOUB9Ky4lcXiAgIAlAYCjusmjwjDw%2Bnfm%2BT9Uj6%2BWLOTPoAu1KVTULiU%2FPHUnFFDQgM5b2pjDCZRmY3cjdvFP4y2dfalkWSSRxspckKpccz%2FX43r5B%2F3vAxCNk6gkeEO9Ie%2FWXemh6XlABNLI3ZwYvTs%2FAXcEFnm1w%2Fj79nJEA9h4CesVUFY1rG7kiQzhuWPYrhZ9dce61EssnH1pB1DsJjrZ5ms8wqf%2BgywY6pgFCSD0WwT4OspY0kd5izPKL1wrTpvKYl%2FO%2FDwCjw4MZUhMedAznWNXb1A4qNO0587RR%2Bo4MAVW9FCwgMXNBduzL2P2cLdSfxEnxsNg6TSMVy0eI1nS0rlHb0ekjkq%2Fej86awObUVLKzQDj65mmKg7%2FWHCCdKStZfAf4S19ZQbCyvRAU5lI6V61RN7P5XobVtxguySTpIL45Hr5H%2B5OeCXbkD0tsIy2g&X-Amz-Signature=ee5d383289d409c3b714236a4e94700db6dcff4b6b86c81bdf40d3e53b59dfaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBETJSI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGp3WFUXW2YGfpG1AxaaeReyReAdbqOF8qju%2B9Bk5XAyAiB97WX5Dv8SUlW9G2dcSBIus10DKjn5xT%2FNHgHeJwA%2BcCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbgrzqQUDAU44apzeKtwDz9Pb4HXNLvee8Gk83AkbtejxIvEMqyY2%2BTd8EGNK8sayHF3KryX7nWcOByAX6v7RN8XGb1IEq3O9PTiUF8dsYhrxa%2BTaqYyBkaNCTfw0e1XjsSQ3g0A2c%2FBn218lE4zWYeYy8u4fDkn2VYvPFjwDo%2FMmt%2BldrbidVwZaX2buGA70j3ONH7T4dPwSRRXdPF%2FHdG3xzh0PeJrTqQOMC1JLEe7YGG9qgcd2z9zK4x%2F3kp7LzjlDHgxtqDCNE5KdjrsOnMeCqx%2FlO3%2BKF24juEVfp0Jcg4VlBY7cvh5pHbDUHhDCcJ7adoLKO1AV7tHu2OXIxYUZEKdGJizIP0MaGafrAVNOkBZySzYqKwihe3W4T6NoIHN1pl2BGGoE1K%2BFuyMA2rk0Ysa5fVlcMNkiq5qItOOGkCQV1ECOUB9Ky4lcXiAgIAlAYCjusmjwjDw%2Bnfm%2BT9Uj6%2BWLOTPoAu1KVTULiU%2FPHUnFFDQgM5b2pjDCZRmY3cjdvFP4y2dfalkWSSRxspckKpccz%2FX43r5B%2F3vAxCNk6gkeEO9Ie%2FWXemh6XlABNLI3ZwYvTs%2FAXcEFnm1w%2Fj79nJEA9h4CesVUFY1rG7kiQzhuWPYrhZ9dce61EssnH1pB1DsJjrZ5ms8wqf%2BgywY6pgFCSD0WwT4OspY0kd5izPKL1wrTpvKYl%2FO%2FDwCjw4MZUhMedAznWNXb1A4qNO0587RR%2Bo4MAVW9FCwgMXNBduzL2P2cLdSfxEnxsNg6TSMVy0eI1nS0rlHb0ekjkq%2Fej86awObUVLKzQDj65mmKg7%2FWHCCdKStZfAf4S19ZQbCyvRAU5lI6V61RN7P5XobVtxguySTpIL45Hr5H%2B5OeCXbkD0tsIy2g&X-Amz-Signature=4c11311faea07ac91235f508695c864cef58121b5dd32d4e6df4fd3794fcb0e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBETJSI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGp3WFUXW2YGfpG1AxaaeReyReAdbqOF8qju%2B9Bk5XAyAiB97WX5Dv8SUlW9G2dcSBIus10DKjn5xT%2FNHgHeJwA%2BcCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbgrzqQUDAU44apzeKtwDz9Pb4HXNLvee8Gk83AkbtejxIvEMqyY2%2BTd8EGNK8sayHF3KryX7nWcOByAX6v7RN8XGb1IEq3O9PTiUF8dsYhrxa%2BTaqYyBkaNCTfw0e1XjsSQ3g0A2c%2FBn218lE4zWYeYy8u4fDkn2VYvPFjwDo%2FMmt%2BldrbidVwZaX2buGA70j3ONH7T4dPwSRRXdPF%2FHdG3xzh0PeJrTqQOMC1JLEe7YGG9qgcd2z9zK4x%2F3kp7LzjlDHgxtqDCNE5KdjrsOnMeCqx%2FlO3%2BKF24juEVfp0Jcg4VlBY7cvh5pHbDUHhDCcJ7adoLKO1AV7tHu2OXIxYUZEKdGJizIP0MaGafrAVNOkBZySzYqKwihe3W4T6NoIHN1pl2BGGoE1K%2BFuyMA2rk0Ysa5fVlcMNkiq5qItOOGkCQV1ECOUB9Ky4lcXiAgIAlAYCjusmjwjDw%2Bnfm%2BT9Uj6%2BWLOTPoAu1KVTULiU%2FPHUnFFDQgM5b2pjDCZRmY3cjdvFP4y2dfalkWSSRxspckKpccz%2FX43r5B%2F3vAxCNk6gkeEO9Ie%2FWXemh6XlABNLI3ZwYvTs%2FAXcEFnm1w%2Fj79nJEA9h4CesVUFY1rG7kiQzhuWPYrhZ9dce61EssnH1pB1DsJjrZ5ms8wqf%2BgywY6pgFCSD0WwT4OspY0kd5izPKL1wrTpvKYl%2FO%2FDwCjw4MZUhMedAznWNXb1A4qNO0587RR%2Bo4MAVW9FCwgMXNBduzL2P2cLdSfxEnxsNg6TSMVy0eI1nS0rlHb0ekjkq%2Fej86awObUVLKzQDj65mmKg7%2FWHCCdKStZfAf4S19ZQbCyvRAU5lI6V61RN7P5XobVtxguySTpIL45Hr5H%2B5OeCXbkD0tsIy2g&X-Amz-Signature=5c8d3c15a01351c16d3ed23909df06f9a18c51a8a41c624bc8128f3ca4292e3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBETJSI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGp3WFUXW2YGfpG1AxaaeReyReAdbqOF8qju%2B9Bk5XAyAiB97WX5Dv8SUlW9G2dcSBIus10DKjn5xT%2FNHgHeJwA%2BcCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbgrzqQUDAU44apzeKtwDz9Pb4HXNLvee8Gk83AkbtejxIvEMqyY2%2BTd8EGNK8sayHF3KryX7nWcOByAX6v7RN8XGb1IEq3O9PTiUF8dsYhrxa%2BTaqYyBkaNCTfw0e1XjsSQ3g0A2c%2FBn218lE4zWYeYy8u4fDkn2VYvPFjwDo%2FMmt%2BldrbidVwZaX2buGA70j3ONH7T4dPwSRRXdPF%2FHdG3xzh0PeJrTqQOMC1JLEe7YGG9qgcd2z9zK4x%2F3kp7LzjlDHgxtqDCNE5KdjrsOnMeCqx%2FlO3%2BKF24juEVfp0Jcg4VlBY7cvh5pHbDUHhDCcJ7adoLKO1AV7tHu2OXIxYUZEKdGJizIP0MaGafrAVNOkBZySzYqKwihe3W4T6NoIHN1pl2BGGoE1K%2BFuyMA2rk0Ysa5fVlcMNkiq5qItOOGkCQV1ECOUB9Ky4lcXiAgIAlAYCjusmjwjDw%2Bnfm%2BT9Uj6%2BWLOTPoAu1KVTULiU%2FPHUnFFDQgM5b2pjDCZRmY3cjdvFP4y2dfalkWSSRxspckKpccz%2FX43r5B%2F3vAxCNk6gkeEO9Ie%2FWXemh6XlABNLI3ZwYvTs%2FAXcEFnm1w%2Fj79nJEA9h4CesVUFY1rG7kiQzhuWPYrhZ9dce61EssnH1pB1DsJjrZ5ms8wqf%2BgywY6pgFCSD0WwT4OspY0kd5izPKL1wrTpvKYl%2FO%2FDwCjw4MZUhMedAznWNXb1A4qNO0587RR%2Bo4MAVW9FCwgMXNBduzL2P2cLdSfxEnxsNg6TSMVy0eI1nS0rlHb0ekjkq%2Fej86awObUVLKzQDj65mmKg7%2FWHCCdKStZfAf4S19ZQbCyvRAU5lI6V61RN7P5XobVtxguySTpIL45Hr5H%2B5OeCXbkD0tsIy2g&X-Amz-Signature=f1b9e6ec0c52ba7708b28aa5604eeb01b05e8693c2704c60689dd9aa42166bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBETJSI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGp3WFUXW2YGfpG1AxaaeReyReAdbqOF8qju%2B9Bk5XAyAiB97WX5Dv8SUlW9G2dcSBIus10DKjn5xT%2FNHgHeJwA%2BcCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbgrzqQUDAU44apzeKtwDz9Pb4HXNLvee8Gk83AkbtejxIvEMqyY2%2BTd8EGNK8sayHF3KryX7nWcOByAX6v7RN8XGb1IEq3O9PTiUF8dsYhrxa%2BTaqYyBkaNCTfw0e1XjsSQ3g0A2c%2FBn218lE4zWYeYy8u4fDkn2VYvPFjwDo%2FMmt%2BldrbidVwZaX2buGA70j3ONH7T4dPwSRRXdPF%2FHdG3xzh0PeJrTqQOMC1JLEe7YGG9qgcd2z9zK4x%2F3kp7LzjlDHgxtqDCNE5KdjrsOnMeCqx%2FlO3%2BKF24juEVfp0Jcg4VlBY7cvh5pHbDUHhDCcJ7adoLKO1AV7tHu2OXIxYUZEKdGJizIP0MaGafrAVNOkBZySzYqKwihe3W4T6NoIHN1pl2BGGoE1K%2BFuyMA2rk0Ysa5fVlcMNkiq5qItOOGkCQV1ECOUB9Ky4lcXiAgIAlAYCjusmjwjDw%2Bnfm%2BT9Uj6%2BWLOTPoAu1KVTULiU%2FPHUnFFDQgM5b2pjDCZRmY3cjdvFP4y2dfalkWSSRxspckKpccz%2FX43r5B%2F3vAxCNk6gkeEO9Ie%2FWXemh6XlABNLI3ZwYvTs%2FAXcEFnm1w%2Fj79nJEA9h4CesVUFY1rG7kiQzhuWPYrhZ9dce61EssnH1pB1DsJjrZ5ms8wqf%2BgywY6pgFCSD0WwT4OspY0kd5izPKL1wrTpvKYl%2FO%2FDwCjw4MZUhMedAznWNXb1A4qNO0587RR%2Bo4MAVW9FCwgMXNBduzL2P2cLdSfxEnxsNg6TSMVy0eI1nS0rlHb0ekjkq%2Fej86awObUVLKzQDj65mmKg7%2FWHCCdKStZfAf4S19ZQbCyvRAU5lI6V61RN7P5XobVtxguySTpIL45Hr5H%2B5OeCXbkD0tsIy2g&X-Amz-Signature=04e59d3a4debd48b6bd093eb02e2a85ae9782300e25afe846821a7e2e8331cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBETJSI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGp3WFUXW2YGfpG1AxaaeReyReAdbqOF8qju%2B9Bk5XAyAiB97WX5Dv8SUlW9G2dcSBIus10DKjn5xT%2FNHgHeJwA%2BcCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbgrzqQUDAU44apzeKtwDz9Pb4HXNLvee8Gk83AkbtejxIvEMqyY2%2BTd8EGNK8sayHF3KryX7nWcOByAX6v7RN8XGb1IEq3O9PTiUF8dsYhrxa%2BTaqYyBkaNCTfw0e1XjsSQ3g0A2c%2FBn218lE4zWYeYy8u4fDkn2VYvPFjwDo%2FMmt%2BldrbidVwZaX2buGA70j3ONH7T4dPwSRRXdPF%2FHdG3xzh0PeJrTqQOMC1JLEe7YGG9qgcd2z9zK4x%2F3kp7LzjlDHgxtqDCNE5KdjrsOnMeCqx%2FlO3%2BKF24juEVfp0Jcg4VlBY7cvh5pHbDUHhDCcJ7adoLKO1AV7tHu2OXIxYUZEKdGJizIP0MaGafrAVNOkBZySzYqKwihe3W4T6NoIHN1pl2BGGoE1K%2BFuyMA2rk0Ysa5fVlcMNkiq5qItOOGkCQV1ECOUB9Ky4lcXiAgIAlAYCjusmjwjDw%2Bnfm%2BT9Uj6%2BWLOTPoAu1KVTULiU%2FPHUnFFDQgM5b2pjDCZRmY3cjdvFP4y2dfalkWSSRxspckKpccz%2FX43r5B%2F3vAxCNk6gkeEO9Ie%2FWXemh6XlABNLI3ZwYvTs%2FAXcEFnm1w%2Fj79nJEA9h4CesVUFY1rG7kiQzhuWPYrhZ9dce61EssnH1pB1DsJjrZ5ms8wqf%2BgywY6pgFCSD0WwT4OspY0kd5izPKL1wrTpvKYl%2FO%2FDwCjw4MZUhMedAznWNXb1A4qNO0587RR%2Bo4MAVW9FCwgMXNBduzL2P2cLdSfxEnxsNg6TSMVy0eI1nS0rlHb0ekjkq%2Fej86awObUVLKzQDj65mmKg7%2FWHCCdKStZfAf4S19ZQbCyvRAU5lI6V61RN7P5XobVtxguySTpIL45Hr5H%2B5OeCXbkD0tsIy2g&X-Amz-Signature=480d713996dbed2be47b3841ed36cb00dafbc9e15b2b3b725e937fed692c864b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBETJSI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGp3WFUXW2YGfpG1AxaaeReyReAdbqOF8qju%2B9Bk5XAyAiB97WX5Dv8SUlW9G2dcSBIus10DKjn5xT%2FNHgHeJwA%2BcCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbgrzqQUDAU44apzeKtwDz9Pb4HXNLvee8Gk83AkbtejxIvEMqyY2%2BTd8EGNK8sayHF3KryX7nWcOByAX6v7RN8XGb1IEq3O9PTiUF8dsYhrxa%2BTaqYyBkaNCTfw0e1XjsSQ3g0A2c%2FBn218lE4zWYeYy8u4fDkn2VYvPFjwDo%2FMmt%2BldrbidVwZaX2buGA70j3ONH7T4dPwSRRXdPF%2FHdG3xzh0PeJrTqQOMC1JLEe7YGG9qgcd2z9zK4x%2F3kp7LzjlDHgxtqDCNE5KdjrsOnMeCqx%2FlO3%2BKF24juEVfp0Jcg4VlBY7cvh5pHbDUHhDCcJ7adoLKO1AV7tHu2OXIxYUZEKdGJizIP0MaGafrAVNOkBZySzYqKwihe3W4T6NoIHN1pl2BGGoE1K%2BFuyMA2rk0Ysa5fVlcMNkiq5qItOOGkCQV1ECOUB9Ky4lcXiAgIAlAYCjusmjwjDw%2Bnfm%2BT9Uj6%2BWLOTPoAu1KVTULiU%2FPHUnFFDQgM5b2pjDCZRmY3cjdvFP4y2dfalkWSSRxspckKpccz%2FX43r5B%2F3vAxCNk6gkeEO9Ie%2FWXemh6XlABNLI3ZwYvTs%2FAXcEFnm1w%2Fj79nJEA9h4CesVUFY1rG7kiQzhuWPYrhZ9dce61EssnH1pB1DsJjrZ5ms8wqf%2BgywY6pgFCSD0WwT4OspY0kd5izPKL1wrTpvKYl%2FO%2FDwCjw4MZUhMedAznWNXb1A4qNO0587RR%2Bo4MAVW9FCwgMXNBduzL2P2cLdSfxEnxsNg6TSMVy0eI1nS0rlHb0ekjkq%2Fej86awObUVLKzQDj65mmKg7%2FWHCCdKStZfAf4S19ZQbCyvRAU5lI6V61RN7P5XobVtxguySTpIL45Hr5H%2B5OeCXbkD0tsIy2g&X-Amz-Signature=6051b76e84a1d8fc1c9b04737d75a0d0f79b02099164b490466496865e914e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBETJSI%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGp3WFUXW2YGfpG1AxaaeReyReAdbqOF8qju%2B9Bk5XAyAiB97WX5Dv8SUlW9G2dcSBIus10DKjn5xT%2FNHgHeJwA%2BcCr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMbgrzqQUDAU44apzeKtwDz9Pb4HXNLvee8Gk83AkbtejxIvEMqyY2%2BTd8EGNK8sayHF3KryX7nWcOByAX6v7RN8XGb1IEq3O9PTiUF8dsYhrxa%2BTaqYyBkaNCTfw0e1XjsSQ3g0A2c%2FBn218lE4zWYeYy8u4fDkn2VYvPFjwDo%2FMmt%2BldrbidVwZaX2buGA70j3ONH7T4dPwSRRXdPF%2FHdG3xzh0PeJrTqQOMC1JLEe7YGG9qgcd2z9zK4x%2F3kp7LzjlDHgxtqDCNE5KdjrsOnMeCqx%2FlO3%2BKF24juEVfp0Jcg4VlBY7cvh5pHbDUHhDCcJ7adoLKO1AV7tHu2OXIxYUZEKdGJizIP0MaGafrAVNOkBZySzYqKwihe3W4T6NoIHN1pl2BGGoE1K%2BFuyMA2rk0Ysa5fVlcMNkiq5qItOOGkCQV1ECOUB9Ky4lcXiAgIAlAYCjusmjwjDw%2Bnfm%2BT9Uj6%2BWLOTPoAu1KVTULiU%2FPHUnFFDQgM5b2pjDCZRmY3cjdvFP4y2dfalkWSSRxspckKpccz%2FX43r5B%2F3vAxCNk6gkeEO9Ie%2FWXemh6XlABNLI3ZwYvTs%2FAXcEFnm1w%2Fj79nJEA9h4CesVUFY1rG7kiQzhuWPYrhZ9dce61EssnH1pB1DsJjrZ5ms8wqf%2BgywY6pgFCSD0WwT4OspY0kd5izPKL1wrTpvKYl%2FO%2FDwCjw4MZUhMedAznWNXb1A4qNO0587RR%2Bo4MAVW9FCwgMXNBduzL2P2cLdSfxEnxsNg6TSMVy0eI1nS0rlHb0ekjkq%2Fej86awObUVLKzQDj65mmKg7%2FWHCCdKStZfAf4S19ZQbCyvRAU5lI6V61RN7P5XobVtxguySTpIL45Hr5H%2B5OeCXbkD0tsIy2g&X-Amz-Signature=9f063c34ef9541b12c7c0c616f7f874fa6c0146d379e5ab240f2e6b3202406c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
