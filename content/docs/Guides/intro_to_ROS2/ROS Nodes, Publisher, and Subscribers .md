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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5QNMBS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDdsQ5LuwnCwEajug8BLlwuVb0au5U0IfIXB89ugYtrTAiAy6RJTDlI7CCdOM9H%2BqdKBR3DNd7SOiATrFijd2rk1Lir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM7WXA%2BmxBJvw2%2Fl5sKtwDrgsPiMvOea5LYSSGdwyAZFYyGoBjBLHdj958AnWK4Y7k222PusasxyvbWuK3s%2FpIii65%2BSJ99WLv48sq2B59TG8UDCYLEW2I77HpkhHgKlZDjp1Vcgp72%2F6gpqFvCCd5M36kwnVkkylwz%2FOO4jTvFzFP79dqHt%2F4tDYjHJ7PGNef2xlOHX%2FmzHiOeZSt9wtVyGsWH%2B%2BdFpNRUds8cvoSP3v2hqiwpmuZnPH2WIcTD5FUP5F0Zw2qBYVryOGgh%2FGQWF7HiOdKUoZzCo%2BWxVO1NsZYzE84QJeHLMQ0TKTmdz9ezJDhFTbBWQ0Sc7IUIre8ehD7TAeAx%2FcHjPQhAFNy7tcun5DyxIJWBPqx1zkp%2BM93Zu9dmG0s4PxeVphJQGroxrEnl6MmSD1WrhXgPZzmEwyLa%2BqHhkH1R6ZZZGif1JWRDQLFZuhPerYrh%2BW8N%2F8WQ9WOu%2Bm8ue%2BLqVqA3BLFeoD0ecZPrUHV4j9Qpdg7IO9mcS6R2IHbJKEHkRyYhnqYNvKEyLG0e67jm8fn7yO04DLNLnHIV2oroGjw2M%2B0R6IAmp4%2F%2Bu44yCS%2FIRZvEELr1NbxoDElIYTyDKmJbD3eAjMiGkkTf8Oguc9WZuWmCuDh5TKc%2BFO%2B%2B3L1EEww%2B7rewAY6pgFSgAOmdQTzvADR0bQoI6GIo2BMHGpZPT209G7NC%2BjLpu1fUOOryhUTZZAu95kTNO2dLKnPUX31oWSpaAwnISQYeStJAfSS6FhedR9tkxt%2FqaZCP9dnIVa5UtW6LliblVZ3E7l87AS8vuaI8OWj77Wr%2B4sNOrcNkIuwtm0fzO1u8G5FNSOeYNSKb3gb7evQ4om%2BjYfMqmO99NbQLItW8Fsb9jVqHfkF&X-Amz-Signature=77d0ea42643738352d44916e950c1b7996a7b9bb46b632b977c1d1f007f52370&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5QNMBS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDdsQ5LuwnCwEajug8BLlwuVb0au5U0IfIXB89ugYtrTAiAy6RJTDlI7CCdOM9H%2BqdKBR3DNd7SOiATrFijd2rk1Lir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM7WXA%2BmxBJvw2%2Fl5sKtwDrgsPiMvOea5LYSSGdwyAZFYyGoBjBLHdj958AnWK4Y7k222PusasxyvbWuK3s%2FpIii65%2BSJ99WLv48sq2B59TG8UDCYLEW2I77HpkhHgKlZDjp1Vcgp72%2F6gpqFvCCd5M36kwnVkkylwz%2FOO4jTvFzFP79dqHt%2F4tDYjHJ7PGNef2xlOHX%2FmzHiOeZSt9wtVyGsWH%2B%2BdFpNRUds8cvoSP3v2hqiwpmuZnPH2WIcTD5FUP5F0Zw2qBYVryOGgh%2FGQWF7HiOdKUoZzCo%2BWxVO1NsZYzE84QJeHLMQ0TKTmdz9ezJDhFTbBWQ0Sc7IUIre8ehD7TAeAx%2FcHjPQhAFNy7tcun5DyxIJWBPqx1zkp%2BM93Zu9dmG0s4PxeVphJQGroxrEnl6MmSD1WrhXgPZzmEwyLa%2BqHhkH1R6ZZZGif1JWRDQLFZuhPerYrh%2BW8N%2F8WQ9WOu%2Bm8ue%2BLqVqA3BLFeoD0ecZPrUHV4j9Qpdg7IO9mcS6R2IHbJKEHkRyYhnqYNvKEyLG0e67jm8fn7yO04DLNLnHIV2oroGjw2M%2B0R6IAmp4%2F%2Bu44yCS%2FIRZvEELr1NbxoDElIYTyDKmJbD3eAjMiGkkTf8Oguc9WZuWmCuDh5TKc%2BFO%2B%2B3L1EEww%2B7rewAY6pgFSgAOmdQTzvADR0bQoI6GIo2BMHGpZPT209G7NC%2BjLpu1fUOOryhUTZZAu95kTNO2dLKnPUX31oWSpaAwnISQYeStJAfSS6FhedR9tkxt%2FqaZCP9dnIVa5UtW6LliblVZ3E7l87AS8vuaI8OWj77Wr%2B4sNOrcNkIuwtm0fzO1u8G5FNSOeYNSKb3gb7evQ4om%2BjYfMqmO99NbQLItW8Fsb9jVqHfkF&X-Amz-Signature=6092b9b21d47e89097374b0b14f480b1c8f54351cc7d1b5619b2fdfee2a84b19&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5QNMBS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDdsQ5LuwnCwEajug8BLlwuVb0au5U0IfIXB89ugYtrTAiAy6RJTDlI7CCdOM9H%2BqdKBR3DNd7SOiATrFijd2rk1Lir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM7WXA%2BmxBJvw2%2Fl5sKtwDrgsPiMvOea5LYSSGdwyAZFYyGoBjBLHdj958AnWK4Y7k222PusasxyvbWuK3s%2FpIii65%2BSJ99WLv48sq2B59TG8UDCYLEW2I77HpkhHgKlZDjp1Vcgp72%2F6gpqFvCCd5M36kwnVkkylwz%2FOO4jTvFzFP79dqHt%2F4tDYjHJ7PGNef2xlOHX%2FmzHiOeZSt9wtVyGsWH%2B%2BdFpNRUds8cvoSP3v2hqiwpmuZnPH2WIcTD5FUP5F0Zw2qBYVryOGgh%2FGQWF7HiOdKUoZzCo%2BWxVO1NsZYzE84QJeHLMQ0TKTmdz9ezJDhFTbBWQ0Sc7IUIre8ehD7TAeAx%2FcHjPQhAFNy7tcun5DyxIJWBPqx1zkp%2BM93Zu9dmG0s4PxeVphJQGroxrEnl6MmSD1WrhXgPZzmEwyLa%2BqHhkH1R6ZZZGif1JWRDQLFZuhPerYrh%2BW8N%2F8WQ9WOu%2Bm8ue%2BLqVqA3BLFeoD0ecZPrUHV4j9Qpdg7IO9mcS6R2IHbJKEHkRyYhnqYNvKEyLG0e67jm8fn7yO04DLNLnHIV2oroGjw2M%2B0R6IAmp4%2F%2Bu44yCS%2FIRZvEELr1NbxoDElIYTyDKmJbD3eAjMiGkkTf8Oguc9WZuWmCuDh5TKc%2BFO%2B%2B3L1EEww%2B7rewAY6pgFSgAOmdQTzvADR0bQoI6GIo2BMHGpZPT209G7NC%2BjLpu1fUOOryhUTZZAu95kTNO2dLKnPUX31oWSpaAwnISQYeStJAfSS6FhedR9tkxt%2FqaZCP9dnIVa5UtW6LliblVZ3E7l87AS8vuaI8OWj77Wr%2B4sNOrcNkIuwtm0fzO1u8G5FNSOeYNSKb3gb7evQ4om%2BjYfMqmO99NbQLItW8Fsb9jVqHfkF&X-Amz-Signature=10159400644b77a2c39c22d26ea0fd8256a0d2b65b8a81779ef4e657b6df2097&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5QNMBS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDdsQ5LuwnCwEajug8BLlwuVb0au5U0IfIXB89ugYtrTAiAy6RJTDlI7CCdOM9H%2BqdKBR3DNd7SOiATrFijd2rk1Lir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM7WXA%2BmxBJvw2%2Fl5sKtwDrgsPiMvOea5LYSSGdwyAZFYyGoBjBLHdj958AnWK4Y7k222PusasxyvbWuK3s%2FpIii65%2BSJ99WLv48sq2B59TG8UDCYLEW2I77HpkhHgKlZDjp1Vcgp72%2F6gpqFvCCd5M36kwnVkkylwz%2FOO4jTvFzFP79dqHt%2F4tDYjHJ7PGNef2xlOHX%2FmzHiOeZSt9wtVyGsWH%2B%2BdFpNRUds8cvoSP3v2hqiwpmuZnPH2WIcTD5FUP5F0Zw2qBYVryOGgh%2FGQWF7HiOdKUoZzCo%2BWxVO1NsZYzE84QJeHLMQ0TKTmdz9ezJDhFTbBWQ0Sc7IUIre8ehD7TAeAx%2FcHjPQhAFNy7tcun5DyxIJWBPqx1zkp%2BM93Zu9dmG0s4PxeVphJQGroxrEnl6MmSD1WrhXgPZzmEwyLa%2BqHhkH1R6ZZZGif1JWRDQLFZuhPerYrh%2BW8N%2F8WQ9WOu%2Bm8ue%2BLqVqA3BLFeoD0ecZPrUHV4j9Qpdg7IO9mcS6R2IHbJKEHkRyYhnqYNvKEyLG0e67jm8fn7yO04DLNLnHIV2oroGjw2M%2B0R6IAmp4%2F%2Bu44yCS%2FIRZvEELr1NbxoDElIYTyDKmJbD3eAjMiGkkTf8Oguc9WZuWmCuDh5TKc%2BFO%2B%2B3L1EEww%2B7rewAY6pgFSgAOmdQTzvADR0bQoI6GIo2BMHGpZPT209G7NC%2BjLpu1fUOOryhUTZZAu95kTNO2dLKnPUX31oWSpaAwnISQYeStJAfSS6FhedR9tkxt%2FqaZCP9dnIVa5UtW6LliblVZ3E7l87AS8vuaI8OWj77Wr%2B4sNOrcNkIuwtm0fzO1u8G5FNSOeYNSKb3gb7evQ4om%2BjYfMqmO99NbQLItW8Fsb9jVqHfkF&X-Amz-Signature=4a14760924142e7cd9c5037436eed2fc752a36a0ae4e67ba25b5ef5b4b6d5d32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5QNMBS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDdsQ5LuwnCwEajug8BLlwuVb0au5U0IfIXB89ugYtrTAiAy6RJTDlI7CCdOM9H%2BqdKBR3DNd7SOiATrFijd2rk1Lir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM7WXA%2BmxBJvw2%2Fl5sKtwDrgsPiMvOea5LYSSGdwyAZFYyGoBjBLHdj958AnWK4Y7k222PusasxyvbWuK3s%2FpIii65%2BSJ99WLv48sq2B59TG8UDCYLEW2I77HpkhHgKlZDjp1Vcgp72%2F6gpqFvCCd5M36kwnVkkylwz%2FOO4jTvFzFP79dqHt%2F4tDYjHJ7PGNef2xlOHX%2FmzHiOeZSt9wtVyGsWH%2B%2BdFpNRUds8cvoSP3v2hqiwpmuZnPH2WIcTD5FUP5F0Zw2qBYVryOGgh%2FGQWF7HiOdKUoZzCo%2BWxVO1NsZYzE84QJeHLMQ0TKTmdz9ezJDhFTbBWQ0Sc7IUIre8ehD7TAeAx%2FcHjPQhAFNy7tcun5DyxIJWBPqx1zkp%2BM93Zu9dmG0s4PxeVphJQGroxrEnl6MmSD1WrhXgPZzmEwyLa%2BqHhkH1R6ZZZGif1JWRDQLFZuhPerYrh%2BW8N%2F8WQ9WOu%2Bm8ue%2BLqVqA3BLFeoD0ecZPrUHV4j9Qpdg7IO9mcS6R2IHbJKEHkRyYhnqYNvKEyLG0e67jm8fn7yO04DLNLnHIV2oroGjw2M%2B0R6IAmp4%2F%2Bu44yCS%2FIRZvEELr1NbxoDElIYTyDKmJbD3eAjMiGkkTf8Oguc9WZuWmCuDh5TKc%2BFO%2B%2B3L1EEww%2B7rewAY6pgFSgAOmdQTzvADR0bQoI6GIo2BMHGpZPT209G7NC%2BjLpu1fUOOryhUTZZAu95kTNO2dLKnPUX31oWSpaAwnISQYeStJAfSS6FhedR9tkxt%2FqaZCP9dnIVa5UtW6LliblVZ3E7l87AS8vuaI8OWj77Wr%2B4sNOrcNkIuwtm0fzO1u8G5FNSOeYNSKb3gb7evQ4om%2BjYfMqmO99NbQLItW8Fsb9jVqHfkF&X-Amz-Signature=0f505fbc5ed8cba95db68c57150da518d9b6ac688d27229aeba40b189d170e9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5QNMBS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDdsQ5LuwnCwEajug8BLlwuVb0au5U0IfIXB89ugYtrTAiAy6RJTDlI7CCdOM9H%2BqdKBR3DNd7SOiATrFijd2rk1Lir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM7WXA%2BmxBJvw2%2Fl5sKtwDrgsPiMvOea5LYSSGdwyAZFYyGoBjBLHdj958AnWK4Y7k222PusasxyvbWuK3s%2FpIii65%2BSJ99WLv48sq2B59TG8UDCYLEW2I77HpkhHgKlZDjp1Vcgp72%2F6gpqFvCCd5M36kwnVkkylwz%2FOO4jTvFzFP79dqHt%2F4tDYjHJ7PGNef2xlOHX%2FmzHiOeZSt9wtVyGsWH%2B%2BdFpNRUds8cvoSP3v2hqiwpmuZnPH2WIcTD5FUP5F0Zw2qBYVryOGgh%2FGQWF7HiOdKUoZzCo%2BWxVO1NsZYzE84QJeHLMQ0TKTmdz9ezJDhFTbBWQ0Sc7IUIre8ehD7TAeAx%2FcHjPQhAFNy7tcun5DyxIJWBPqx1zkp%2BM93Zu9dmG0s4PxeVphJQGroxrEnl6MmSD1WrhXgPZzmEwyLa%2BqHhkH1R6ZZZGif1JWRDQLFZuhPerYrh%2BW8N%2F8WQ9WOu%2Bm8ue%2BLqVqA3BLFeoD0ecZPrUHV4j9Qpdg7IO9mcS6R2IHbJKEHkRyYhnqYNvKEyLG0e67jm8fn7yO04DLNLnHIV2oroGjw2M%2B0R6IAmp4%2F%2Bu44yCS%2FIRZvEELr1NbxoDElIYTyDKmJbD3eAjMiGkkTf8Oguc9WZuWmCuDh5TKc%2BFO%2B%2B3L1EEww%2B7rewAY6pgFSgAOmdQTzvADR0bQoI6GIo2BMHGpZPT209G7NC%2BjLpu1fUOOryhUTZZAu95kTNO2dLKnPUX31oWSpaAwnISQYeStJAfSS6FhedR9tkxt%2FqaZCP9dnIVa5UtW6LliblVZ3E7l87AS8vuaI8OWj77Wr%2B4sNOrcNkIuwtm0fzO1u8G5FNSOeYNSKb3gb7evQ4om%2BjYfMqmO99NbQLItW8Fsb9jVqHfkF&X-Amz-Signature=bdb011acde8fc66e5edb578f3e7acfaa0dd839bea8fe3d2b1a4cd0c46227ca9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5QNMBS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDdsQ5LuwnCwEajug8BLlwuVb0au5U0IfIXB89ugYtrTAiAy6RJTDlI7CCdOM9H%2BqdKBR3DNd7SOiATrFijd2rk1Lir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM7WXA%2BmxBJvw2%2Fl5sKtwDrgsPiMvOea5LYSSGdwyAZFYyGoBjBLHdj958AnWK4Y7k222PusasxyvbWuK3s%2FpIii65%2BSJ99WLv48sq2B59TG8UDCYLEW2I77HpkhHgKlZDjp1Vcgp72%2F6gpqFvCCd5M36kwnVkkylwz%2FOO4jTvFzFP79dqHt%2F4tDYjHJ7PGNef2xlOHX%2FmzHiOeZSt9wtVyGsWH%2B%2BdFpNRUds8cvoSP3v2hqiwpmuZnPH2WIcTD5FUP5F0Zw2qBYVryOGgh%2FGQWF7HiOdKUoZzCo%2BWxVO1NsZYzE84QJeHLMQ0TKTmdz9ezJDhFTbBWQ0Sc7IUIre8ehD7TAeAx%2FcHjPQhAFNy7tcun5DyxIJWBPqx1zkp%2BM93Zu9dmG0s4PxeVphJQGroxrEnl6MmSD1WrhXgPZzmEwyLa%2BqHhkH1R6ZZZGif1JWRDQLFZuhPerYrh%2BW8N%2F8WQ9WOu%2Bm8ue%2BLqVqA3BLFeoD0ecZPrUHV4j9Qpdg7IO9mcS6R2IHbJKEHkRyYhnqYNvKEyLG0e67jm8fn7yO04DLNLnHIV2oroGjw2M%2B0R6IAmp4%2F%2Bu44yCS%2FIRZvEELr1NbxoDElIYTyDKmJbD3eAjMiGkkTf8Oguc9WZuWmCuDh5TKc%2BFO%2B%2B3L1EEww%2B7rewAY6pgFSgAOmdQTzvADR0bQoI6GIo2BMHGpZPT209G7NC%2BjLpu1fUOOryhUTZZAu95kTNO2dLKnPUX31oWSpaAwnISQYeStJAfSS6FhedR9tkxt%2FqaZCP9dnIVa5UtW6LliblVZ3E7l87AS8vuaI8OWj77Wr%2B4sNOrcNkIuwtm0fzO1u8G5FNSOeYNSKb3gb7evQ4om%2BjYfMqmO99NbQLItW8Fsb9jVqHfkF&X-Amz-Signature=b9e3495396813cf65afedf3ec5cb44efa8dcb8197a45e9b2460cb58d45cfddcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5QNMBS%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T190200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDdsQ5LuwnCwEajug8BLlwuVb0au5U0IfIXB89ugYtrTAiAy6RJTDlI7CCdOM9H%2BqdKBR3DNd7SOiATrFijd2rk1Lir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIM7WXA%2BmxBJvw2%2Fl5sKtwDrgsPiMvOea5LYSSGdwyAZFYyGoBjBLHdj958AnWK4Y7k222PusasxyvbWuK3s%2FpIii65%2BSJ99WLv48sq2B59TG8UDCYLEW2I77HpkhHgKlZDjp1Vcgp72%2F6gpqFvCCd5M36kwnVkkylwz%2FOO4jTvFzFP79dqHt%2F4tDYjHJ7PGNef2xlOHX%2FmzHiOeZSt9wtVyGsWH%2B%2BdFpNRUds8cvoSP3v2hqiwpmuZnPH2WIcTD5FUP5F0Zw2qBYVryOGgh%2FGQWF7HiOdKUoZzCo%2BWxVO1NsZYzE84QJeHLMQ0TKTmdz9ezJDhFTbBWQ0Sc7IUIre8ehD7TAeAx%2FcHjPQhAFNy7tcun5DyxIJWBPqx1zkp%2BM93Zu9dmG0s4PxeVphJQGroxrEnl6MmSD1WrhXgPZzmEwyLa%2BqHhkH1R6ZZZGif1JWRDQLFZuhPerYrh%2BW8N%2F8WQ9WOu%2Bm8ue%2BLqVqA3BLFeoD0ecZPrUHV4j9Qpdg7IO9mcS6R2IHbJKEHkRyYhnqYNvKEyLG0e67jm8fn7yO04DLNLnHIV2oroGjw2M%2B0R6IAmp4%2F%2Bu44yCS%2FIRZvEELr1NbxoDElIYTyDKmJbD3eAjMiGkkTf8Oguc9WZuWmCuDh5TKc%2BFO%2B%2B3L1EEww%2B7rewAY6pgFSgAOmdQTzvADR0bQoI6GIo2BMHGpZPT209G7NC%2BjLpu1fUOOryhUTZZAu95kTNO2dLKnPUX31oWSpaAwnISQYeStJAfSS6FhedR9tkxt%2FqaZCP9dnIVa5UtW6LliblVZ3E7l87AS8vuaI8OWj77Wr%2B4sNOrcNkIuwtm0fzO1u8G5FNSOeYNSKb3gb7evQ4om%2BjYfMqmO99NbQLItW8Fsb9jVqHfkF&X-Amz-Signature=0dd90926955b9c5fe7e60618063b276d690ef2b1b0bc09127cf8ce01a91a3955&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
