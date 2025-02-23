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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DEXBKG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkibNNgxWvpwKtjLP1iIQA3srDfSkxkYhc9W3Hrwy0aAiAhnQd6KfPeIqnbg1IXohffJ10MNIfQ9flBRXhviw205Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNgtX8gJ10N2jCOekKtwDHIoPjEYt79ZwO%2F9sbMZvkTxXtLrh2f8l1Iaso7KJAWI11YuSIlt6fVmp%2FGnhw3qKeIaive7sD8ZYZfJDSZhXZfeNCxe7oIwnbGh%2FYfxU7dV%2BAx%2B5nmFawM%2BMfXroaJ8wJbw34znDGaUhOA1ILbJIWqJ58vAIyWaTG4Y8hBP91k%2BaeRaSfxDleNqSY9CySIHsqu%2FrTct9etOYqwv7cLuCszhGoqFkq8NQwvXm6tq2oh7s4reQsq5XJVZazKUI3fDPIkTbNRmG9rz3bEr57myAymuPA%2BmgqvgASCWeP4f%2FEYX1ZNve5WvfbFloOUsDVSr9HEL%2FyAYnBcujD1eosDogQMjBovp%2FhsnIaiT2ouv4Ke7k9sm3zn0UOP8s4gzH1Wf%2BHCBi7dzj8%2FOAZ93WOW9A7IbC2DGutL%2BYVbWoITjLo4jRYEiMUISN564QXmXbh4tAfc%2FDyfUORLioGGiDB3rQeqnnl0iXG1OTSpPA2Zf0fAQ6Lst4w%2F7%2BJinGySTMHmzjm%2B59fE5CPlxbcmJ1SDErWSfKqUDUGhZu%2Fdr%2BPaYg6Ce2u0Sl%2FNtzh9Z7HyDrZk5cL8stFkw3ImgaUmmEGDYvhBOhS%2FLDtcESpM9p9sfx7dgkkYIMvCvzr%2FBziLYwv5%2FtvQY6pgEPUUq8gxTBhgAG%2FKkMZ2gA8UzYJZWA8n4zWSC0w7o5bT9DGb5DAUfVNtOHteytL%2FhiOQeYqv3sNiM5hPUMfujHoKdL%2FAqOFQCWaNsmQC3nka05gLJV1DwKum0U7o%2FI9ewtGxi%2BUdiQMB4jywnIO0DFEsPEbVlp6a3MA0cV3euexJnTc6A%2BiDQeUIz3XEN%2B2BG2XGJFuj9cQNt%2Fk%2BI8yF1ne90MiebZ&X-Amz-Signature=b0fe90993e28664e3052bedb1fe58e3dc496acd9219689361e7d583e569fe18d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DEXBKG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkibNNgxWvpwKtjLP1iIQA3srDfSkxkYhc9W3Hrwy0aAiAhnQd6KfPeIqnbg1IXohffJ10MNIfQ9flBRXhviw205Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNgtX8gJ10N2jCOekKtwDHIoPjEYt79ZwO%2F9sbMZvkTxXtLrh2f8l1Iaso7KJAWI11YuSIlt6fVmp%2FGnhw3qKeIaive7sD8ZYZfJDSZhXZfeNCxe7oIwnbGh%2FYfxU7dV%2BAx%2B5nmFawM%2BMfXroaJ8wJbw34znDGaUhOA1ILbJIWqJ58vAIyWaTG4Y8hBP91k%2BaeRaSfxDleNqSY9CySIHsqu%2FrTct9etOYqwv7cLuCszhGoqFkq8NQwvXm6tq2oh7s4reQsq5XJVZazKUI3fDPIkTbNRmG9rz3bEr57myAymuPA%2BmgqvgASCWeP4f%2FEYX1ZNve5WvfbFloOUsDVSr9HEL%2FyAYnBcujD1eosDogQMjBovp%2FhsnIaiT2ouv4Ke7k9sm3zn0UOP8s4gzH1Wf%2BHCBi7dzj8%2FOAZ93WOW9A7IbC2DGutL%2BYVbWoITjLo4jRYEiMUISN564QXmXbh4tAfc%2FDyfUORLioGGiDB3rQeqnnl0iXG1OTSpPA2Zf0fAQ6Lst4w%2F7%2BJinGySTMHmzjm%2B59fE5CPlxbcmJ1SDErWSfKqUDUGhZu%2Fdr%2BPaYg6Ce2u0Sl%2FNtzh9Z7HyDrZk5cL8stFkw3ImgaUmmEGDYvhBOhS%2FLDtcESpM9p9sfx7dgkkYIMvCvzr%2FBziLYwv5%2FtvQY6pgEPUUq8gxTBhgAG%2FKkMZ2gA8UzYJZWA8n4zWSC0w7o5bT9DGb5DAUfVNtOHteytL%2FhiOQeYqv3sNiM5hPUMfujHoKdL%2FAqOFQCWaNsmQC3nka05gLJV1DwKum0U7o%2FI9ewtGxi%2BUdiQMB4jywnIO0DFEsPEbVlp6a3MA0cV3euexJnTc6A%2BiDQeUIz3XEN%2B2BG2XGJFuj9cQNt%2Fk%2BI8yF1ne90MiebZ&X-Amz-Signature=79741f8c4224002f90495961b47dc4bc97059401f7b96a6e64ee42253d663ab2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DEXBKG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkibNNgxWvpwKtjLP1iIQA3srDfSkxkYhc9W3Hrwy0aAiAhnQd6KfPeIqnbg1IXohffJ10MNIfQ9flBRXhviw205Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNgtX8gJ10N2jCOekKtwDHIoPjEYt79ZwO%2F9sbMZvkTxXtLrh2f8l1Iaso7KJAWI11YuSIlt6fVmp%2FGnhw3qKeIaive7sD8ZYZfJDSZhXZfeNCxe7oIwnbGh%2FYfxU7dV%2BAx%2B5nmFawM%2BMfXroaJ8wJbw34znDGaUhOA1ILbJIWqJ58vAIyWaTG4Y8hBP91k%2BaeRaSfxDleNqSY9CySIHsqu%2FrTct9etOYqwv7cLuCszhGoqFkq8NQwvXm6tq2oh7s4reQsq5XJVZazKUI3fDPIkTbNRmG9rz3bEr57myAymuPA%2BmgqvgASCWeP4f%2FEYX1ZNve5WvfbFloOUsDVSr9HEL%2FyAYnBcujD1eosDogQMjBovp%2FhsnIaiT2ouv4Ke7k9sm3zn0UOP8s4gzH1Wf%2BHCBi7dzj8%2FOAZ93WOW9A7IbC2DGutL%2BYVbWoITjLo4jRYEiMUISN564QXmXbh4tAfc%2FDyfUORLioGGiDB3rQeqnnl0iXG1OTSpPA2Zf0fAQ6Lst4w%2F7%2BJinGySTMHmzjm%2B59fE5CPlxbcmJ1SDErWSfKqUDUGhZu%2Fdr%2BPaYg6Ce2u0Sl%2FNtzh9Z7HyDrZk5cL8stFkw3ImgaUmmEGDYvhBOhS%2FLDtcESpM9p9sfx7dgkkYIMvCvzr%2FBziLYwv5%2FtvQY6pgEPUUq8gxTBhgAG%2FKkMZ2gA8UzYJZWA8n4zWSC0w7o5bT9DGb5DAUfVNtOHteytL%2FhiOQeYqv3sNiM5hPUMfujHoKdL%2FAqOFQCWaNsmQC3nka05gLJV1DwKum0U7o%2FI9ewtGxi%2BUdiQMB4jywnIO0DFEsPEbVlp6a3MA0cV3euexJnTc6A%2BiDQeUIz3XEN%2B2BG2XGJFuj9cQNt%2Fk%2BI8yF1ne90MiebZ&X-Amz-Signature=145a12f31a9d6be14cc40be7b57950476b5b49d235737dedc110895d496d7604&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DEXBKG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkibNNgxWvpwKtjLP1iIQA3srDfSkxkYhc9W3Hrwy0aAiAhnQd6KfPeIqnbg1IXohffJ10MNIfQ9flBRXhviw205Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNgtX8gJ10N2jCOekKtwDHIoPjEYt79ZwO%2F9sbMZvkTxXtLrh2f8l1Iaso7KJAWI11YuSIlt6fVmp%2FGnhw3qKeIaive7sD8ZYZfJDSZhXZfeNCxe7oIwnbGh%2FYfxU7dV%2BAx%2B5nmFawM%2BMfXroaJ8wJbw34znDGaUhOA1ILbJIWqJ58vAIyWaTG4Y8hBP91k%2BaeRaSfxDleNqSY9CySIHsqu%2FrTct9etOYqwv7cLuCszhGoqFkq8NQwvXm6tq2oh7s4reQsq5XJVZazKUI3fDPIkTbNRmG9rz3bEr57myAymuPA%2BmgqvgASCWeP4f%2FEYX1ZNve5WvfbFloOUsDVSr9HEL%2FyAYnBcujD1eosDogQMjBovp%2FhsnIaiT2ouv4Ke7k9sm3zn0UOP8s4gzH1Wf%2BHCBi7dzj8%2FOAZ93WOW9A7IbC2DGutL%2BYVbWoITjLo4jRYEiMUISN564QXmXbh4tAfc%2FDyfUORLioGGiDB3rQeqnnl0iXG1OTSpPA2Zf0fAQ6Lst4w%2F7%2BJinGySTMHmzjm%2B59fE5CPlxbcmJ1SDErWSfKqUDUGhZu%2Fdr%2BPaYg6Ce2u0Sl%2FNtzh9Z7HyDrZk5cL8stFkw3ImgaUmmEGDYvhBOhS%2FLDtcESpM9p9sfx7dgkkYIMvCvzr%2FBziLYwv5%2FtvQY6pgEPUUq8gxTBhgAG%2FKkMZ2gA8UzYJZWA8n4zWSC0w7o5bT9DGb5DAUfVNtOHteytL%2FhiOQeYqv3sNiM5hPUMfujHoKdL%2FAqOFQCWaNsmQC3nka05gLJV1DwKum0U7o%2FI9ewtGxi%2BUdiQMB4jywnIO0DFEsPEbVlp6a3MA0cV3euexJnTc6A%2BiDQeUIz3XEN%2B2BG2XGJFuj9cQNt%2Fk%2BI8yF1ne90MiebZ&X-Amz-Signature=8104e9d2807e363c6cf4c4610487df30a6b85d523100f5c71e0ae3f9973784f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DEXBKG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkibNNgxWvpwKtjLP1iIQA3srDfSkxkYhc9W3Hrwy0aAiAhnQd6KfPeIqnbg1IXohffJ10MNIfQ9flBRXhviw205Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNgtX8gJ10N2jCOekKtwDHIoPjEYt79ZwO%2F9sbMZvkTxXtLrh2f8l1Iaso7KJAWI11YuSIlt6fVmp%2FGnhw3qKeIaive7sD8ZYZfJDSZhXZfeNCxe7oIwnbGh%2FYfxU7dV%2BAx%2B5nmFawM%2BMfXroaJ8wJbw34znDGaUhOA1ILbJIWqJ58vAIyWaTG4Y8hBP91k%2BaeRaSfxDleNqSY9CySIHsqu%2FrTct9etOYqwv7cLuCszhGoqFkq8NQwvXm6tq2oh7s4reQsq5XJVZazKUI3fDPIkTbNRmG9rz3bEr57myAymuPA%2BmgqvgASCWeP4f%2FEYX1ZNve5WvfbFloOUsDVSr9HEL%2FyAYnBcujD1eosDogQMjBovp%2FhsnIaiT2ouv4Ke7k9sm3zn0UOP8s4gzH1Wf%2BHCBi7dzj8%2FOAZ93WOW9A7IbC2DGutL%2BYVbWoITjLo4jRYEiMUISN564QXmXbh4tAfc%2FDyfUORLioGGiDB3rQeqnnl0iXG1OTSpPA2Zf0fAQ6Lst4w%2F7%2BJinGySTMHmzjm%2B59fE5CPlxbcmJ1SDErWSfKqUDUGhZu%2Fdr%2BPaYg6Ce2u0Sl%2FNtzh9Z7HyDrZk5cL8stFkw3ImgaUmmEGDYvhBOhS%2FLDtcESpM9p9sfx7dgkkYIMvCvzr%2FBziLYwv5%2FtvQY6pgEPUUq8gxTBhgAG%2FKkMZ2gA8UzYJZWA8n4zWSC0w7o5bT9DGb5DAUfVNtOHteytL%2FhiOQeYqv3sNiM5hPUMfujHoKdL%2FAqOFQCWaNsmQC3nka05gLJV1DwKum0U7o%2FI9ewtGxi%2BUdiQMB4jywnIO0DFEsPEbVlp6a3MA0cV3euexJnTc6A%2BiDQeUIz3XEN%2B2BG2XGJFuj9cQNt%2Fk%2BI8yF1ne90MiebZ&X-Amz-Signature=376c6a46356b8efdc10751b13d178db5c1aeeb950a096a2ab880d464153de574&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DEXBKG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkibNNgxWvpwKtjLP1iIQA3srDfSkxkYhc9W3Hrwy0aAiAhnQd6KfPeIqnbg1IXohffJ10MNIfQ9flBRXhviw205Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNgtX8gJ10N2jCOekKtwDHIoPjEYt79ZwO%2F9sbMZvkTxXtLrh2f8l1Iaso7KJAWI11YuSIlt6fVmp%2FGnhw3qKeIaive7sD8ZYZfJDSZhXZfeNCxe7oIwnbGh%2FYfxU7dV%2BAx%2B5nmFawM%2BMfXroaJ8wJbw34znDGaUhOA1ILbJIWqJ58vAIyWaTG4Y8hBP91k%2BaeRaSfxDleNqSY9CySIHsqu%2FrTct9etOYqwv7cLuCszhGoqFkq8NQwvXm6tq2oh7s4reQsq5XJVZazKUI3fDPIkTbNRmG9rz3bEr57myAymuPA%2BmgqvgASCWeP4f%2FEYX1ZNve5WvfbFloOUsDVSr9HEL%2FyAYnBcujD1eosDogQMjBovp%2FhsnIaiT2ouv4Ke7k9sm3zn0UOP8s4gzH1Wf%2BHCBi7dzj8%2FOAZ93WOW9A7IbC2DGutL%2BYVbWoITjLo4jRYEiMUISN564QXmXbh4tAfc%2FDyfUORLioGGiDB3rQeqnnl0iXG1OTSpPA2Zf0fAQ6Lst4w%2F7%2BJinGySTMHmzjm%2B59fE5CPlxbcmJ1SDErWSfKqUDUGhZu%2Fdr%2BPaYg6Ce2u0Sl%2FNtzh9Z7HyDrZk5cL8stFkw3ImgaUmmEGDYvhBOhS%2FLDtcESpM9p9sfx7dgkkYIMvCvzr%2FBziLYwv5%2FtvQY6pgEPUUq8gxTBhgAG%2FKkMZ2gA8UzYJZWA8n4zWSC0w7o5bT9DGb5DAUfVNtOHteytL%2FhiOQeYqv3sNiM5hPUMfujHoKdL%2FAqOFQCWaNsmQC3nka05gLJV1DwKum0U7o%2FI9ewtGxi%2BUdiQMB4jywnIO0DFEsPEbVlp6a3MA0cV3euexJnTc6A%2BiDQeUIz3XEN%2B2BG2XGJFuj9cQNt%2Fk%2BI8yF1ne90MiebZ&X-Amz-Signature=b267554d124f6a847cbd6f4527dbc1413bc8b86b1fbbe94d70110b15378c4137&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DEXBKG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkibNNgxWvpwKtjLP1iIQA3srDfSkxkYhc9W3Hrwy0aAiAhnQd6KfPeIqnbg1IXohffJ10MNIfQ9flBRXhviw205Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNgtX8gJ10N2jCOekKtwDHIoPjEYt79ZwO%2F9sbMZvkTxXtLrh2f8l1Iaso7KJAWI11YuSIlt6fVmp%2FGnhw3qKeIaive7sD8ZYZfJDSZhXZfeNCxe7oIwnbGh%2FYfxU7dV%2BAx%2B5nmFawM%2BMfXroaJ8wJbw34znDGaUhOA1ILbJIWqJ58vAIyWaTG4Y8hBP91k%2BaeRaSfxDleNqSY9CySIHsqu%2FrTct9etOYqwv7cLuCszhGoqFkq8NQwvXm6tq2oh7s4reQsq5XJVZazKUI3fDPIkTbNRmG9rz3bEr57myAymuPA%2BmgqvgASCWeP4f%2FEYX1ZNve5WvfbFloOUsDVSr9HEL%2FyAYnBcujD1eosDogQMjBovp%2FhsnIaiT2ouv4Ke7k9sm3zn0UOP8s4gzH1Wf%2BHCBi7dzj8%2FOAZ93WOW9A7IbC2DGutL%2BYVbWoITjLo4jRYEiMUISN564QXmXbh4tAfc%2FDyfUORLioGGiDB3rQeqnnl0iXG1OTSpPA2Zf0fAQ6Lst4w%2F7%2BJinGySTMHmzjm%2B59fE5CPlxbcmJ1SDErWSfKqUDUGhZu%2Fdr%2BPaYg6Ce2u0Sl%2FNtzh9Z7HyDrZk5cL8stFkw3ImgaUmmEGDYvhBOhS%2FLDtcESpM9p9sfx7dgkkYIMvCvzr%2FBziLYwv5%2FtvQY6pgEPUUq8gxTBhgAG%2FKkMZ2gA8UzYJZWA8n4zWSC0w7o5bT9DGb5DAUfVNtOHteytL%2FhiOQeYqv3sNiM5hPUMfujHoKdL%2FAqOFQCWaNsmQC3nka05gLJV1DwKum0U7o%2FI9ewtGxi%2BUdiQMB4jywnIO0DFEsPEbVlp6a3MA0cV3euexJnTc6A%2BiDQeUIz3XEN%2B2BG2XGJFuj9cQNt%2Fk%2BI8yF1ne90MiebZ&X-Amz-Signature=1e33941e834500f0b217071751c1bd1b850e47e1d710bb638ffa53448696012e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5DEXBKG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkibNNgxWvpwKtjLP1iIQA3srDfSkxkYhc9W3Hrwy0aAiAhnQd6KfPeIqnbg1IXohffJ10MNIfQ9flBRXhviw205Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMNgtX8gJ10N2jCOekKtwDHIoPjEYt79ZwO%2F9sbMZvkTxXtLrh2f8l1Iaso7KJAWI11YuSIlt6fVmp%2FGnhw3qKeIaive7sD8ZYZfJDSZhXZfeNCxe7oIwnbGh%2FYfxU7dV%2BAx%2B5nmFawM%2BMfXroaJ8wJbw34znDGaUhOA1ILbJIWqJ58vAIyWaTG4Y8hBP91k%2BaeRaSfxDleNqSY9CySIHsqu%2FrTct9etOYqwv7cLuCszhGoqFkq8NQwvXm6tq2oh7s4reQsq5XJVZazKUI3fDPIkTbNRmG9rz3bEr57myAymuPA%2BmgqvgASCWeP4f%2FEYX1ZNve5WvfbFloOUsDVSr9HEL%2FyAYnBcujD1eosDogQMjBovp%2FhsnIaiT2ouv4Ke7k9sm3zn0UOP8s4gzH1Wf%2BHCBi7dzj8%2FOAZ93WOW9A7IbC2DGutL%2BYVbWoITjLo4jRYEiMUISN564QXmXbh4tAfc%2FDyfUORLioGGiDB3rQeqnnl0iXG1OTSpPA2Zf0fAQ6Lst4w%2F7%2BJinGySTMHmzjm%2B59fE5CPlxbcmJ1SDErWSfKqUDUGhZu%2Fdr%2BPaYg6Ce2u0Sl%2FNtzh9Z7HyDrZk5cL8stFkw3ImgaUmmEGDYvhBOhS%2FLDtcESpM9p9sfx7dgkkYIMvCvzr%2FBziLYwv5%2FtvQY6pgEPUUq8gxTBhgAG%2FKkMZ2gA8UzYJZWA8n4zWSC0w7o5bT9DGb5DAUfVNtOHteytL%2FhiOQeYqv3sNiM5hPUMfujHoKdL%2FAqOFQCWaNsmQC3nka05gLJV1DwKum0U7o%2FI9ewtGxi%2BUdiQMB4jywnIO0DFEsPEbVlp6a3MA0cV3euexJnTc6A%2BiDQeUIz3XEN%2B2BG2XGJFuj9cQNt%2Fk%2BI8yF1ne90MiebZ&X-Amz-Signature=2eb3082033373a972c22b8c5939df67a1701b4642ab7dfdede1e9a8c7e1767e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
