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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2ZIAPW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICut8J9JGJtCsOfb3BbX%2BbALTbMwcMix%2Fz33vb7rlOfgAiB3Gmm89DqAyNHchtDRk4H1mpfw8LdVzW1wOg8hHZhRfCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKOQv6BoQSziJLK5eKtwDlf94WlCiZoAnDFDKcRw%2BA%2FaIbPO42acRUV7HkkOzcxbiRj7ORPy%2Fik9IPrX%2B0hbFKOORBrHh6fcN7Wk5xskx1S0HZ07c9XqQ5B1RBBPfxJMY79zw6CGAQ24a3Arm8tZtjql4xuM7uhPREuISzaxfV8Ey4Nzr0IKInSylvu80FiSdVMhiCMh%2FSyUMwI6X36G%2FuYROlw3fV1YHyJJHOxrDUDi%2B3WDJNe48esPG3OCFuOknDdYtkjSNNDBUPGFpX7lmgTzNM8Gej%2FG7DdQxOPZ2ACgyLdaT9cSxAE36pT6NTzt1QfLLAJ5nyX5mbR6sVQG6sevX0LxvcQO8HWNcxhYCsWfUlqO38QdzhTmENXUnNHhvgaZ06%2FgcjmGE1yqfebqmgauxqwWSbAx98ae5fjO%2FOwZxkWD9FAGGLDVQy15BWfPcGhEQPRQ5%2BQUm5ydgltipJ%2BaxyGAkUqJWmCQpXCo5u7Dm6gd9GyndLLnr7yecUl%2FmaZ82XbTpBselyPNxo51Prn%2BZhnRCsgzuj9dTJwwu8QTDd86BnbbOztS750UCdWITlSi6UFlAqZuisT0LVfFsu%2BQRo%2FIaXTp90%2FFVOh56EpF%2F5eu1QB%2FQNyme%2BCVmy8ZSGgdY9F7XTxhRoh8w%2FOvDwgY6pgGViqPDmb%2F3a2VCxwoumZKBSEcbWMAOGISofnBDVzXW2GkGiVbg8N05yIjX%2FyQl8fuBFRJ7qU5%2BXoWqRIo2N7vLb7MP2C1cvhSagCav4UrRDSi6mv2sCK0OSrowIYpTxbPNrHHUeAF2YFTx%2BmCbdywy5SAksZDyuBkFOAKm8fBWfpBcaX2Wb6uNmDD5SWvVT4HPFO81EW8%2FU1yHzc6U2TDlzUC2yyp4&X-Amz-Signature=98b53b0af2de4d18b95a6a1b22a94c92197960e209121df9437d8c257bc81e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2ZIAPW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICut8J9JGJtCsOfb3BbX%2BbALTbMwcMix%2Fz33vb7rlOfgAiB3Gmm89DqAyNHchtDRk4H1mpfw8LdVzW1wOg8hHZhRfCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKOQv6BoQSziJLK5eKtwDlf94WlCiZoAnDFDKcRw%2BA%2FaIbPO42acRUV7HkkOzcxbiRj7ORPy%2Fik9IPrX%2B0hbFKOORBrHh6fcN7Wk5xskx1S0HZ07c9XqQ5B1RBBPfxJMY79zw6CGAQ24a3Arm8tZtjql4xuM7uhPREuISzaxfV8Ey4Nzr0IKInSylvu80FiSdVMhiCMh%2FSyUMwI6X36G%2FuYROlw3fV1YHyJJHOxrDUDi%2B3WDJNe48esPG3OCFuOknDdYtkjSNNDBUPGFpX7lmgTzNM8Gej%2FG7DdQxOPZ2ACgyLdaT9cSxAE36pT6NTzt1QfLLAJ5nyX5mbR6sVQG6sevX0LxvcQO8HWNcxhYCsWfUlqO38QdzhTmENXUnNHhvgaZ06%2FgcjmGE1yqfebqmgauxqwWSbAx98ae5fjO%2FOwZxkWD9FAGGLDVQy15BWfPcGhEQPRQ5%2BQUm5ydgltipJ%2BaxyGAkUqJWmCQpXCo5u7Dm6gd9GyndLLnr7yecUl%2FmaZ82XbTpBselyPNxo51Prn%2BZhnRCsgzuj9dTJwwu8QTDd86BnbbOztS750UCdWITlSi6UFlAqZuisT0LVfFsu%2BQRo%2FIaXTp90%2FFVOh56EpF%2F5eu1QB%2FQNyme%2BCVmy8ZSGgdY9F7XTxhRoh8w%2FOvDwgY6pgGViqPDmb%2F3a2VCxwoumZKBSEcbWMAOGISofnBDVzXW2GkGiVbg8N05yIjX%2FyQl8fuBFRJ7qU5%2BXoWqRIo2N7vLb7MP2C1cvhSagCav4UrRDSi6mv2sCK0OSrowIYpTxbPNrHHUeAF2YFTx%2BmCbdywy5SAksZDyuBkFOAKm8fBWfpBcaX2Wb6uNmDD5SWvVT4HPFO81EW8%2FU1yHzc6U2TDlzUC2yyp4&X-Amz-Signature=5dab0f0c02b0243312f4412ff7825648f1f5d3ad4c2149bb6913a0a02e57411a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2ZIAPW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICut8J9JGJtCsOfb3BbX%2BbALTbMwcMix%2Fz33vb7rlOfgAiB3Gmm89DqAyNHchtDRk4H1mpfw8LdVzW1wOg8hHZhRfCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKOQv6BoQSziJLK5eKtwDlf94WlCiZoAnDFDKcRw%2BA%2FaIbPO42acRUV7HkkOzcxbiRj7ORPy%2Fik9IPrX%2B0hbFKOORBrHh6fcN7Wk5xskx1S0HZ07c9XqQ5B1RBBPfxJMY79zw6CGAQ24a3Arm8tZtjql4xuM7uhPREuISzaxfV8Ey4Nzr0IKInSylvu80FiSdVMhiCMh%2FSyUMwI6X36G%2FuYROlw3fV1YHyJJHOxrDUDi%2B3WDJNe48esPG3OCFuOknDdYtkjSNNDBUPGFpX7lmgTzNM8Gej%2FG7DdQxOPZ2ACgyLdaT9cSxAE36pT6NTzt1QfLLAJ5nyX5mbR6sVQG6sevX0LxvcQO8HWNcxhYCsWfUlqO38QdzhTmENXUnNHhvgaZ06%2FgcjmGE1yqfebqmgauxqwWSbAx98ae5fjO%2FOwZxkWD9FAGGLDVQy15BWfPcGhEQPRQ5%2BQUm5ydgltipJ%2BaxyGAkUqJWmCQpXCo5u7Dm6gd9GyndLLnr7yecUl%2FmaZ82XbTpBselyPNxo51Prn%2BZhnRCsgzuj9dTJwwu8QTDd86BnbbOztS750UCdWITlSi6UFlAqZuisT0LVfFsu%2BQRo%2FIaXTp90%2FFVOh56EpF%2F5eu1QB%2FQNyme%2BCVmy8ZSGgdY9F7XTxhRoh8w%2FOvDwgY6pgGViqPDmb%2F3a2VCxwoumZKBSEcbWMAOGISofnBDVzXW2GkGiVbg8N05yIjX%2FyQl8fuBFRJ7qU5%2BXoWqRIo2N7vLb7MP2C1cvhSagCav4UrRDSi6mv2sCK0OSrowIYpTxbPNrHHUeAF2YFTx%2BmCbdywy5SAksZDyuBkFOAKm8fBWfpBcaX2Wb6uNmDD5SWvVT4HPFO81EW8%2FU1yHzc6U2TDlzUC2yyp4&X-Amz-Signature=9ab43389383f4bcd189308f6b9205c525bab034cb269b33bc9dec08774c0ed14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2ZIAPW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICut8J9JGJtCsOfb3BbX%2BbALTbMwcMix%2Fz33vb7rlOfgAiB3Gmm89DqAyNHchtDRk4H1mpfw8LdVzW1wOg8hHZhRfCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKOQv6BoQSziJLK5eKtwDlf94WlCiZoAnDFDKcRw%2BA%2FaIbPO42acRUV7HkkOzcxbiRj7ORPy%2Fik9IPrX%2B0hbFKOORBrHh6fcN7Wk5xskx1S0HZ07c9XqQ5B1RBBPfxJMY79zw6CGAQ24a3Arm8tZtjql4xuM7uhPREuISzaxfV8Ey4Nzr0IKInSylvu80FiSdVMhiCMh%2FSyUMwI6X36G%2FuYROlw3fV1YHyJJHOxrDUDi%2B3WDJNe48esPG3OCFuOknDdYtkjSNNDBUPGFpX7lmgTzNM8Gej%2FG7DdQxOPZ2ACgyLdaT9cSxAE36pT6NTzt1QfLLAJ5nyX5mbR6sVQG6sevX0LxvcQO8HWNcxhYCsWfUlqO38QdzhTmENXUnNHhvgaZ06%2FgcjmGE1yqfebqmgauxqwWSbAx98ae5fjO%2FOwZxkWD9FAGGLDVQy15BWfPcGhEQPRQ5%2BQUm5ydgltipJ%2BaxyGAkUqJWmCQpXCo5u7Dm6gd9GyndLLnr7yecUl%2FmaZ82XbTpBselyPNxo51Prn%2BZhnRCsgzuj9dTJwwu8QTDd86BnbbOztS750UCdWITlSi6UFlAqZuisT0LVfFsu%2BQRo%2FIaXTp90%2FFVOh56EpF%2F5eu1QB%2FQNyme%2BCVmy8ZSGgdY9F7XTxhRoh8w%2FOvDwgY6pgGViqPDmb%2F3a2VCxwoumZKBSEcbWMAOGISofnBDVzXW2GkGiVbg8N05yIjX%2FyQl8fuBFRJ7qU5%2BXoWqRIo2N7vLb7MP2C1cvhSagCav4UrRDSi6mv2sCK0OSrowIYpTxbPNrHHUeAF2YFTx%2BmCbdywy5SAksZDyuBkFOAKm8fBWfpBcaX2Wb6uNmDD5SWvVT4HPFO81EW8%2FU1yHzc6U2TDlzUC2yyp4&X-Amz-Signature=e5c302f77cf165ac09016383c51fcd58da9d7f34abea706267e583959fa87dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2ZIAPW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICut8J9JGJtCsOfb3BbX%2BbALTbMwcMix%2Fz33vb7rlOfgAiB3Gmm89DqAyNHchtDRk4H1mpfw8LdVzW1wOg8hHZhRfCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKOQv6BoQSziJLK5eKtwDlf94WlCiZoAnDFDKcRw%2BA%2FaIbPO42acRUV7HkkOzcxbiRj7ORPy%2Fik9IPrX%2B0hbFKOORBrHh6fcN7Wk5xskx1S0HZ07c9XqQ5B1RBBPfxJMY79zw6CGAQ24a3Arm8tZtjql4xuM7uhPREuISzaxfV8Ey4Nzr0IKInSylvu80FiSdVMhiCMh%2FSyUMwI6X36G%2FuYROlw3fV1YHyJJHOxrDUDi%2B3WDJNe48esPG3OCFuOknDdYtkjSNNDBUPGFpX7lmgTzNM8Gej%2FG7DdQxOPZ2ACgyLdaT9cSxAE36pT6NTzt1QfLLAJ5nyX5mbR6sVQG6sevX0LxvcQO8HWNcxhYCsWfUlqO38QdzhTmENXUnNHhvgaZ06%2FgcjmGE1yqfebqmgauxqwWSbAx98ae5fjO%2FOwZxkWD9FAGGLDVQy15BWfPcGhEQPRQ5%2BQUm5ydgltipJ%2BaxyGAkUqJWmCQpXCo5u7Dm6gd9GyndLLnr7yecUl%2FmaZ82XbTpBselyPNxo51Prn%2BZhnRCsgzuj9dTJwwu8QTDd86BnbbOztS750UCdWITlSi6UFlAqZuisT0LVfFsu%2BQRo%2FIaXTp90%2FFVOh56EpF%2F5eu1QB%2FQNyme%2BCVmy8ZSGgdY9F7XTxhRoh8w%2FOvDwgY6pgGViqPDmb%2F3a2VCxwoumZKBSEcbWMAOGISofnBDVzXW2GkGiVbg8N05yIjX%2FyQl8fuBFRJ7qU5%2BXoWqRIo2N7vLb7MP2C1cvhSagCav4UrRDSi6mv2sCK0OSrowIYpTxbPNrHHUeAF2YFTx%2BmCbdywy5SAksZDyuBkFOAKm8fBWfpBcaX2Wb6uNmDD5SWvVT4HPFO81EW8%2FU1yHzc6U2TDlzUC2yyp4&X-Amz-Signature=365f478f06159bb71ae67b19a59ee024a30f44c521a11cb8e4c6870d6e29cd0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2ZIAPW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICut8J9JGJtCsOfb3BbX%2BbALTbMwcMix%2Fz33vb7rlOfgAiB3Gmm89DqAyNHchtDRk4H1mpfw8LdVzW1wOg8hHZhRfCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKOQv6BoQSziJLK5eKtwDlf94WlCiZoAnDFDKcRw%2BA%2FaIbPO42acRUV7HkkOzcxbiRj7ORPy%2Fik9IPrX%2B0hbFKOORBrHh6fcN7Wk5xskx1S0HZ07c9XqQ5B1RBBPfxJMY79zw6CGAQ24a3Arm8tZtjql4xuM7uhPREuISzaxfV8Ey4Nzr0IKInSylvu80FiSdVMhiCMh%2FSyUMwI6X36G%2FuYROlw3fV1YHyJJHOxrDUDi%2B3WDJNe48esPG3OCFuOknDdYtkjSNNDBUPGFpX7lmgTzNM8Gej%2FG7DdQxOPZ2ACgyLdaT9cSxAE36pT6NTzt1QfLLAJ5nyX5mbR6sVQG6sevX0LxvcQO8HWNcxhYCsWfUlqO38QdzhTmENXUnNHhvgaZ06%2FgcjmGE1yqfebqmgauxqwWSbAx98ae5fjO%2FOwZxkWD9FAGGLDVQy15BWfPcGhEQPRQ5%2BQUm5ydgltipJ%2BaxyGAkUqJWmCQpXCo5u7Dm6gd9GyndLLnr7yecUl%2FmaZ82XbTpBselyPNxo51Prn%2BZhnRCsgzuj9dTJwwu8QTDd86BnbbOztS750UCdWITlSi6UFlAqZuisT0LVfFsu%2BQRo%2FIaXTp90%2FFVOh56EpF%2F5eu1QB%2FQNyme%2BCVmy8ZSGgdY9F7XTxhRoh8w%2FOvDwgY6pgGViqPDmb%2F3a2VCxwoumZKBSEcbWMAOGISofnBDVzXW2GkGiVbg8N05yIjX%2FyQl8fuBFRJ7qU5%2BXoWqRIo2N7vLb7MP2C1cvhSagCav4UrRDSi6mv2sCK0OSrowIYpTxbPNrHHUeAF2YFTx%2BmCbdywy5SAksZDyuBkFOAKm8fBWfpBcaX2Wb6uNmDD5SWvVT4HPFO81EW8%2FU1yHzc6U2TDlzUC2yyp4&X-Amz-Signature=34bd5cf24e1b7bd37e3e7f4eee8871f5e855bf9facdeef6ec91c5768d904439a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2ZIAPW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICut8J9JGJtCsOfb3BbX%2BbALTbMwcMix%2Fz33vb7rlOfgAiB3Gmm89DqAyNHchtDRk4H1mpfw8LdVzW1wOg8hHZhRfCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKOQv6BoQSziJLK5eKtwDlf94WlCiZoAnDFDKcRw%2BA%2FaIbPO42acRUV7HkkOzcxbiRj7ORPy%2Fik9IPrX%2B0hbFKOORBrHh6fcN7Wk5xskx1S0HZ07c9XqQ5B1RBBPfxJMY79zw6CGAQ24a3Arm8tZtjql4xuM7uhPREuISzaxfV8Ey4Nzr0IKInSylvu80FiSdVMhiCMh%2FSyUMwI6X36G%2FuYROlw3fV1YHyJJHOxrDUDi%2B3WDJNe48esPG3OCFuOknDdYtkjSNNDBUPGFpX7lmgTzNM8Gej%2FG7DdQxOPZ2ACgyLdaT9cSxAE36pT6NTzt1QfLLAJ5nyX5mbR6sVQG6sevX0LxvcQO8HWNcxhYCsWfUlqO38QdzhTmENXUnNHhvgaZ06%2FgcjmGE1yqfebqmgauxqwWSbAx98ae5fjO%2FOwZxkWD9FAGGLDVQy15BWfPcGhEQPRQ5%2BQUm5ydgltipJ%2BaxyGAkUqJWmCQpXCo5u7Dm6gd9GyndLLnr7yecUl%2FmaZ82XbTpBselyPNxo51Prn%2BZhnRCsgzuj9dTJwwu8QTDd86BnbbOztS750UCdWITlSi6UFlAqZuisT0LVfFsu%2BQRo%2FIaXTp90%2FFVOh56EpF%2F5eu1QB%2FQNyme%2BCVmy8ZSGgdY9F7XTxhRoh8w%2FOvDwgY6pgGViqPDmb%2F3a2VCxwoumZKBSEcbWMAOGISofnBDVzXW2GkGiVbg8N05yIjX%2FyQl8fuBFRJ7qU5%2BXoWqRIo2N7vLb7MP2C1cvhSagCav4UrRDSi6mv2sCK0OSrowIYpTxbPNrHHUeAF2YFTx%2BmCbdywy5SAksZDyuBkFOAKm8fBWfpBcaX2Wb6uNmDD5SWvVT4HPFO81EW8%2FU1yHzc6U2TDlzUC2yyp4&X-Amz-Signature=0cf4f2b593047fc86ab0d24ddcfba8ce28baaf0b2ca13681528f9b66267384cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y2ZIAPW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICut8J9JGJtCsOfb3BbX%2BbALTbMwcMix%2Fz33vb7rlOfgAiB3Gmm89DqAyNHchtDRk4H1mpfw8LdVzW1wOg8hHZhRfCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMKOQv6BoQSziJLK5eKtwDlf94WlCiZoAnDFDKcRw%2BA%2FaIbPO42acRUV7HkkOzcxbiRj7ORPy%2Fik9IPrX%2B0hbFKOORBrHh6fcN7Wk5xskx1S0HZ07c9XqQ5B1RBBPfxJMY79zw6CGAQ24a3Arm8tZtjql4xuM7uhPREuISzaxfV8Ey4Nzr0IKInSylvu80FiSdVMhiCMh%2FSyUMwI6X36G%2FuYROlw3fV1YHyJJHOxrDUDi%2B3WDJNe48esPG3OCFuOknDdYtkjSNNDBUPGFpX7lmgTzNM8Gej%2FG7DdQxOPZ2ACgyLdaT9cSxAE36pT6NTzt1QfLLAJ5nyX5mbR6sVQG6sevX0LxvcQO8HWNcxhYCsWfUlqO38QdzhTmENXUnNHhvgaZ06%2FgcjmGE1yqfebqmgauxqwWSbAx98ae5fjO%2FOwZxkWD9FAGGLDVQy15BWfPcGhEQPRQ5%2BQUm5ydgltipJ%2BaxyGAkUqJWmCQpXCo5u7Dm6gd9GyndLLnr7yecUl%2FmaZ82XbTpBselyPNxo51Prn%2BZhnRCsgzuj9dTJwwu8QTDd86BnbbOztS750UCdWITlSi6UFlAqZuisT0LVfFsu%2BQRo%2FIaXTp90%2FFVOh56EpF%2F5eu1QB%2FQNyme%2BCVmy8ZSGgdY9F7XTxhRoh8w%2FOvDwgY6pgGViqPDmb%2F3a2VCxwoumZKBSEcbWMAOGISofnBDVzXW2GkGiVbg8N05yIjX%2FyQl8fuBFRJ7qU5%2BXoWqRIo2N7vLb7MP2C1cvhSagCav4UrRDSi6mv2sCK0OSrowIYpTxbPNrHHUeAF2YFTx%2BmCbdywy5SAksZDyuBkFOAKm8fBWfpBcaX2Wb6uNmDD5SWvVT4HPFO81EW8%2FU1yHzc6U2TDlzUC2yyp4&X-Amz-Signature=e9fefbf5e260c2c6a02d7b7e8cd17fb942ed8d9b47843ddce0094a102158fe6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
