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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XNVOE5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC4T9886CAJRKAOcQuMCXhUIX78ZNHS9lqNx6LTgO218AiA4PjMNBQnO5loK1M93CctwNu77IM83HAwC1kqTRBEDwSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOtSxo3adVthjo5TdKtwDWxAtlIeFoTUTvq%2BaAOsgZkbccqWe8mEQY1wm6cXDt8Gn%2BUN8MTz15IzYz5kZpbu9KOR03pTAN3IChm1OpuZAg5PwCZEknduejnmfiWlRlF5bkbs5ZfsMVk%2BQ%2BJFThPBpD6kHGhdmCHf%2FFs7mKdP5gQ9kZJzGntJP7GucmERmpIBxsPc%2BfPW7lCI0meyT%2FWK285IvF62RfTSWNr2Gha0EJKLBUOHk151pKh0V8u6QHZHQ3ItD4g0aR2al7sJNM2bv5RKpeTxDdCSLF%2FqXAPhViWEXANv7Wkum9x4N4aKbPSGHDCZ40WV26BgN%2B9Th4EUbwurHsBs9BnZnm%2FNhVJxwT8ZiNKjUD%2FQhoTgQEE1zQl0OHJflfIgeutp8txwXQdjDt8juJB%2B6XDwTOa%2BgJMo3aBNFcF7CLs1latqrRWe9n4MwN9BRZgVR4zA3%2BfJadCMmpru23d3s%2FoNhQ8oDVEgcCrWRIickX%2BO8S3ZDf0uIBRckvm%2F07v%2FyLO7oqD%2Fge3A9fn3C%2Fwbj88Riq5tw8sLVd6SX3vOxdxtD%2F2DEQRSc4x1AOABVZwUW1TaVYaSxt%2BQ1H3X15DnQbf8onpQwKaCiAw%2BEujCNuz169BTxNH1hp5RlpjZV%2BBTBaD%2BZ0hEw3fu0vwY6pgFUM%2BMgZ0GewWxft1%2BVkodgMhs6CdsMvPycDScHnIXHpw9RrBNLvUhhp6PNkkl%2BCuGUvRPrGr7rw67zDSsdvFjHVJspxw43ehlIwB6UPF%2FjiTHyuDIpGR9OSfr4JwDQE3mtlYgYXm8C%2Fig6HwIAnRXfs3HXSth7YlJVVL4bMdjIX9srAD09B2H8y4zn4IEijyruoxWEMnM0Ss19K0dwQPJ5VzJa2lKb&X-Amz-Signature=6be73abd8900d3fb5781b12b392b92588d75b2c94398f49bc42929ac728606a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XNVOE5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC4T9886CAJRKAOcQuMCXhUIX78ZNHS9lqNx6LTgO218AiA4PjMNBQnO5loK1M93CctwNu77IM83HAwC1kqTRBEDwSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOtSxo3adVthjo5TdKtwDWxAtlIeFoTUTvq%2BaAOsgZkbccqWe8mEQY1wm6cXDt8Gn%2BUN8MTz15IzYz5kZpbu9KOR03pTAN3IChm1OpuZAg5PwCZEknduejnmfiWlRlF5bkbs5ZfsMVk%2BQ%2BJFThPBpD6kHGhdmCHf%2FFs7mKdP5gQ9kZJzGntJP7GucmERmpIBxsPc%2BfPW7lCI0meyT%2FWK285IvF62RfTSWNr2Gha0EJKLBUOHk151pKh0V8u6QHZHQ3ItD4g0aR2al7sJNM2bv5RKpeTxDdCSLF%2FqXAPhViWEXANv7Wkum9x4N4aKbPSGHDCZ40WV26BgN%2B9Th4EUbwurHsBs9BnZnm%2FNhVJxwT8ZiNKjUD%2FQhoTgQEE1zQl0OHJflfIgeutp8txwXQdjDt8juJB%2B6XDwTOa%2BgJMo3aBNFcF7CLs1latqrRWe9n4MwN9BRZgVR4zA3%2BfJadCMmpru23d3s%2FoNhQ8oDVEgcCrWRIickX%2BO8S3ZDf0uIBRckvm%2F07v%2FyLO7oqD%2Fge3A9fn3C%2Fwbj88Riq5tw8sLVd6SX3vOxdxtD%2F2DEQRSc4x1AOABVZwUW1TaVYaSxt%2BQ1H3X15DnQbf8onpQwKaCiAw%2BEujCNuz169BTxNH1hp5RlpjZV%2BBTBaD%2BZ0hEw3fu0vwY6pgFUM%2BMgZ0GewWxft1%2BVkodgMhs6CdsMvPycDScHnIXHpw9RrBNLvUhhp6PNkkl%2BCuGUvRPrGr7rw67zDSsdvFjHVJspxw43ehlIwB6UPF%2FjiTHyuDIpGR9OSfr4JwDQE3mtlYgYXm8C%2Fig6HwIAnRXfs3HXSth7YlJVVL4bMdjIX9srAD09B2H8y4zn4IEijyruoxWEMnM0Ss19K0dwQPJ5VzJa2lKb&X-Amz-Signature=eccc54ef54859393e88370682dc537f9dc2774acff99f4e6dfd0977c7462d970&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XNVOE5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC4T9886CAJRKAOcQuMCXhUIX78ZNHS9lqNx6LTgO218AiA4PjMNBQnO5loK1M93CctwNu77IM83HAwC1kqTRBEDwSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOtSxo3adVthjo5TdKtwDWxAtlIeFoTUTvq%2BaAOsgZkbccqWe8mEQY1wm6cXDt8Gn%2BUN8MTz15IzYz5kZpbu9KOR03pTAN3IChm1OpuZAg5PwCZEknduejnmfiWlRlF5bkbs5ZfsMVk%2BQ%2BJFThPBpD6kHGhdmCHf%2FFs7mKdP5gQ9kZJzGntJP7GucmERmpIBxsPc%2BfPW7lCI0meyT%2FWK285IvF62RfTSWNr2Gha0EJKLBUOHk151pKh0V8u6QHZHQ3ItD4g0aR2al7sJNM2bv5RKpeTxDdCSLF%2FqXAPhViWEXANv7Wkum9x4N4aKbPSGHDCZ40WV26BgN%2B9Th4EUbwurHsBs9BnZnm%2FNhVJxwT8ZiNKjUD%2FQhoTgQEE1zQl0OHJflfIgeutp8txwXQdjDt8juJB%2B6XDwTOa%2BgJMo3aBNFcF7CLs1latqrRWe9n4MwN9BRZgVR4zA3%2BfJadCMmpru23d3s%2FoNhQ8oDVEgcCrWRIickX%2BO8S3ZDf0uIBRckvm%2F07v%2FyLO7oqD%2Fge3A9fn3C%2Fwbj88Riq5tw8sLVd6SX3vOxdxtD%2F2DEQRSc4x1AOABVZwUW1TaVYaSxt%2BQ1H3X15DnQbf8onpQwKaCiAw%2BEujCNuz169BTxNH1hp5RlpjZV%2BBTBaD%2BZ0hEw3fu0vwY6pgFUM%2BMgZ0GewWxft1%2BVkodgMhs6CdsMvPycDScHnIXHpw9RrBNLvUhhp6PNkkl%2BCuGUvRPrGr7rw67zDSsdvFjHVJspxw43ehlIwB6UPF%2FjiTHyuDIpGR9OSfr4JwDQE3mtlYgYXm8C%2Fig6HwIAnRXfs3HXSth7YlJVVL4bMdjIX9srAD09B2H8y4zn4IEijyruoxWEMnM0Ss19K0dwQPJ5VzJa2lKb&X-Amz-Signature=32a5d8fe9579454b91c10516825fc9e060b73c7a278d9e7d917fd80bd2d20265&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XNVOE5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC4T9886CAJRKAOcQuMCXhUIX78ZNHS9lqNx6LTgO218AiA4PjMNBQnO5loK1M93CctwNu77IM83HAwC1kqTRBEDwSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOtSxo3adVthjo5TdKtwDWxAtlIeFoTUTvq%2BaAOsgZkbccqWe8mEQY1wm6cXDt8Gn%2BUN8MTz15IzYz5kZpbu9KOR03pTAN3IChm1OpuZAg5PwCZEknduejnmfiWlRlF5bkbs5ZfsMVk%2BQ%2BJFThPBpD6kHGhdmCHf%2FFs7mKdP5gQ9kZJzGntJP7GucmERmpIBxsPc%2BfPW7lCI0meyT%2FWK285IvF62RfTSWNr2Gha0EJKLBUOHk151pKh0V8u6QHZHQ3ItD4g0aR2al7sJNM2bv5RKpeTxDdCSLF%2FqXAPhViWEXANv7Wkum9x4N4aKbPSGHDCZ40WV26BgN%2B9Th4EUbwurHsBs9BnZnm%2FNhVJxwT8ZiNKjUD%2FQhoTgQEE1zQl0OHJflfIgeutp8txwXQdjDt8juJB%2B6XDwTOa%2BgJMo3aBNFcF7CLs1latqrRWe9n4MwN9BRZgVR4zA3%2BfJadCMmpru23d3s%2FoNhQ8oDVEgcCrWRIickX%2BO8S3ZDf0uIBRckvm%2F07v%2FyLO7oqD%2Fge3A9fn3C%2Fwbj88Riq5tw8sLVd6SX3vOxdxtD%2F2DEQRSc4x1AOABVZwUW1TaVYaSxt%2BQ1H3X15DnQbf8onpQwKaCiAw%2BEujCNuz169BTxNH1hp5RlpjZV%2BBTBaD%2BZ0hEw3fu0vwY6pgFUM%2BMgZ0GewWxft1%2BVkodgMhs6CdsMvPycDScHnIXHpw9RrBNLvUhhp6PNkkl%2BCuGUvRPrGr7rw67zDSsdvFjHVJspxw43ehlIwB6UPF%2FjiTHyuDIpGR9OSfr4JwDQE3mtlYgYXm8C%2Fig6HwIAnRXfs3HXSth7YlJVVL4bMdjIX9srAD09B2H8y4zn4IEijyruoxWEMnM0Ss19K0dwQPJ5VzJa2lKb&X-Amz-Signature=65c37c9df8855fae8bc912d6d1ac8189e35a043302c0f30cbf3f1756e4501335&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XNVOE5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC4T9886CAJRKAOcQuMCXhUIX78ZNHS9lqNx6LTgO218AiA4PjMNBQnO5loK1M93CctwNu77IM83HAwC1kqTRBEDwSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOtSxo3adVthjo5TdKtwDWxAtlIeFoTUTvq%2BaAOsgZkbccqWe8mEQY1wm6cXDt8Gn%2BUN8MTz15IzYz5kZpbu9KOR03pTAN3IChm1OpuZAg5PwCZEknduejnmfiWlRlF5bkbs5ZfsMVk%2BQ%2BJFThPBpD6kHGhdmCHf%2FFs7mKdP5gQ9kZJzGntJP7GucmERmpIBxsPc%2BfPW7lCI0meyT%2FWK285IvF62RfTSWNr2Gha0EJKLBUOHk151pKh0V8u6QHZHQ3ItD4g0aR2al7sJNM2bv5RKpeTxDdCSLF%2FqXAPhViWEXANv7Wkum9x4N4aKbPSGHDCZ40WV26BgN%2B9Th4EUbwurHsBs9BnZnm%2FNhVJxwT8ZiNKjUD%2FQhoTgQEE1zQl0OHJflfIgeutp8txwXQdjDt8juJB%2B6XDwTOa%2BgJMo3aBNFcF7CLs1latqrRWe9n4MwN9BRZgVR4zA3%2BfJadCMmpru23d3s%2FoNhQ8oDVEgcCrWRIickX%2BO8S3ZDf0uIBRckvm%2F07v%2FyLO7oqD%2Fge3A9fn3C%2Fwbj88Riq5tw8sLVd6SX3vOxdxtD%2F2DEQRSc4x1AOABVZwUW1TaVYaSxt%2BQ1H3X15DnQbf8onpQwKaCiAw%2BEujCNuz169BTxNH1hp5RlpjZV%2BBTBaD%2BZ0hEw3fu0vwY6pgFUM%2BMgZ0GewWxft1%2BVkodgMhs6CdsMvPycDScHnIXHpw9RrBNLvUhhp6PNkkl%2BCuGUvRPrGr7rw67zDSsdvFjHVJspxw43ehlIwB6UPF%2FjiTHyuDIpGR9OSfr4JwDQE3mtlYgYXm8C%2Fig6HwIAnRXfs3HXSth7YlJVVL4bMdjIX9srAD09B2H8y4zn4IEijyruoxWEMnM0Ss19K0dwQPJ5VzJa2lKb&X-Amz-Signature=d7bad47ed9e2e01460c1361ac8ef9254785c4db6196ae236c6600a7d9f2dcaca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XNVOE5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC4T9886CAJRKAOcQuMCXhUIX78ZNHS9lqNx6LTgO218AiA4PjMNBQnO5loK1M93CctwNu77IM83HAwC1kqTRBEDwSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOtSxo3adVthjo5TdKtwDWxAtlIeFoTUTvq%2BaAOsgZkbccqWe8mEQY1wm6cXDt8Gn%2BUN8MTz15IzYz5kZpbu9KOR03pTAN3IChm1OpuZAg5PwCZEknduejnmfiWlRlF5bkbs5ZfsMVk%2BQ%2BJFThPBpD6kHGhdmCHf%2FFs7mKdP5gQ9kZJzGntJP7GucmERmpIBxsPc%2BfPW7lCI0meyT%2FWK285IvF62RfTSWNr2Gha0EJKLBUOHk151pKh0V8u6QHZHQ3ItD4g0aR2al7sJNM2bv5RKpeTxDdCSLF%2FqXAPhViWEXANv7Wkum9x4N4aKbPSGHDCZ40WV26BgN%2B9Th4EUbwurHsBs9BnZnm%2FNhVJxwT8ZiNKjUD%2FQhoTgQEE1zQl0OHJflfIgeutp8txwXQdjDt8juJB%2B6XDwTOa%2BgJMo3aBNFcF7CLs1latqrRWe9n4MwN9BRZgVR4zA3%2BfJadCMmpru23d3s%2FoNhQ8oDVEgcCrWRIickX%2BO8S3ZDf0uIBRckvm%2F07v%2FyLO7oqD%2Fge3A9fn3C%2Fwbj88Riq5tw8sLVd6SX3vOxdxtD%2F2DEQRSc4x1AOABVZwUW1TaVYaSxt%2BQ1H3X15DnQbf8onpQwKaCiAw%2BEujCNuz169BTxNH1hp5RlpjZV%2BBTBaD%2BZ0hEw3fu0vwY6pgFUM%2BMgZ0GewWxft1%2BVkodgMhs6CdsMvPycDScHnIXHpw9RrBNLvUhhp6PNkkl%2BCuGUvRPrGr7rw67zDSsdvFjHVJspxw43ehlIwB6UPF%2FjiTHyuDIpGR9OSfr4JwDQE3mtlYgYXm8C%2Fig6HwIAnRXfs3HXSth7YlJVVL4bMdjIX9srAD09B2H8y4zn4IEijyruoxWEMnM0Ss19K0dwQPJ5VzJa2lKb&X-Amz-Signature=ccedd55241c318ab74a29f1eea6a3cb2a06f1a9c6762a7668d415999c849b2e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XNVOE5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC4T9886CAJRKAOcQuMCXhUIX78ZNHS9lqNx6LTgO218AiA4PjMNBQnO5loK1M93CctwNu77IM83HAwC1kqTRBEDwSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOtSxo3adVthjo5TdKtwDWxAtlIeFoTUTvq%2BaAOsgZkbccqWe8mEQY1wm6cXDt8Gn%2BUN8MTz15IzYz5kZpbu9KOR03pTAN3IChm1OpuZAg5PwCZEknduejnmfiWlRlF5bkbs5ZfsMVk%2BQ%2BJFThPBpD6kHGhdmCHf%2FFs7mKdP5gQ9kZJzGntJP7GucmERmpIBxsPc%2BfPW7lCI0meyT%2FWK285IvF62RfTSWNr2Gha0EJKLBUOHk151pKh0V8u6QHZHQ3ItD4g0aR2al7sJNM2bv5RKpeTxDdCSLF%2FqXAPhViWEXANv7Wkum9x4N4aKbPSGHDCZ40WV26BgN%2B9Th4EUbwurHsBs9BnZnm%2FNhVJxwT8ZiNKjUD%2FQhoTgQEE1zQl0OHJflfIgeutp8txwXQdjDt8juJB%2B6XDwTOa%2BgJMo3aBNFcF7CLs1latqrRWe9n4MwN9BRZgVR4zA3%2BfJadCMmpru23d3s%2FoNhQ8oDVEgcCrWRIickX%2BO8S3ZDf0uIBRckvm%2F07v%2FyLO7oqD%2Fge3A9fn3C%2Fwbj88Riq5tw8sLVd6SX3vOxdxtD%2F2DEQRSc4x1AOABVZwUW1TaVYaSxt%2BQ1H3X15DnQbf8onpQwKaCiAw%2BEujCNuz169BTxNH1hp5RlpjZV%2BBTBaD%2BZ0hEw3fu0vwY6pgFUM%2BMgZ0GewWxft1%2BVkodgMhs6CdsMvPycDScHnIXHpw9RrBNLvUhhp6PNkkl%2BCuGUvRPrGr7rw67zDSsdvFjHVJspxw43ehlIwB6UPF%2FjiTHyuDIpGR9OSfr4JwDQE3mtlYgYXm8C%2Fig6HwIAnRXfs3HXSth7YlJVVL4bMdjIX9srAD09B2H8y4zn4IEijyruoxWEMnM0Ss19K0dwQPJ5VzJa2lKb&X-Amz-Signature=d0b06eb193a71486cafbde9468e3fc307a55e6ad4f3bafe454b8bceb84a8efeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5XNVOE5%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIC4T9886CAJRKAOcQuMCXhUIX78ZNHS9lqNx6LTgO218AiA4PjMNBQnO5loK1M93CctwNu77IM83HAwC1kqTRBEDwSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOtSxo3adVthjo5TdKtwDWxAtlIeFoTUTvq%2BaAOsgZkbccqWe8mEQY1wm6cXDt8Gn%2BUN8MTz15IzYz5kZpbu9KOR03pTAN3IChm1OpuZAg5PwCZEknduejnmfiWlRlF5bkbs5ZfsMVk%2BQ%2BJFThPBpD6kHGhdmCHf%2FFs7mKdP5gQ9kZJzGntJP7GucmERmpIBxsPc%2BfPW7lCI0meyT%2FWK285IvF62RfTSWNr2Gha0EJKLBUOHk151pKh0V8u6QHZHQ3ItD4g0aR2al7sJNM2bv5RKpeTxDdCSLF%2FqXAPhViWEXANv7Wkum9x4N4aKbPSGHDCZ40WV26BgN%2B9Th4EUbwurHsBs9BnZnm%2FNhVJxwT8ZiNKjUD%2FQhoTgQEE1zQl0OHJflfIgeutp8txwXQdjDt8juJB%2B6XDwTOa%2BgJMo3aBNFcF7CLs1latqrRWe9n4MwN9BRZgVR4zA3%2BfJadCMmpru23d3s%2FoNhQ8oDVEgcCrWRIickX%2BO8S3ZDf0uIBRckvm%2F07v%2FyLO7oqD%2Fge3A9fn3C%2Fwbj88Riq5tw8sLVd6SX3vOxdxtD%2F2DEQRSc4x1AOABVZwUW1TaVYaSxt%2BQ1H3X15DnQbf8onpQwKaCiAw%2BEujCNuz169BTxNH1hp5RlpjZV%2BBTBaD%2BZ0hEw3fu0vwY6pgFUM%2BMgZ0GewWxft1%2BVkodgMhs6CdsMvPycDScHnIXHpw9RrBNLvUhhp6PNkkl%2BCuGUvRPrGr7rw67zDSsdvFjHVJspxw43ehlIwB6UPF%2FjiTHyuDIpGR9OSfr4JwDQE3mtlYgYXm8C%2Fig6HwIAnRXfs3HXSth7YlJVVL4bMdjIX9srAD09B2H8y4zn4IEijyruoxWEMnM0Ss19K0dwQPJ5VzJa2lKb&X-Amz-Signature=716110f875834f2859ad2f44c0fefa6ab49c125c00a85934b3eaed2732fd7228&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
