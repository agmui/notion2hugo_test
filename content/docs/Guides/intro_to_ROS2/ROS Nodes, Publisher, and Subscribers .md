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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43D7U43%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAkB0LbFaIATpjRUynZZ5a21saAXFtHgKHbC31N39QokAiAM0bJbCrZ9PcU7sNWEK0lpY3Z%2BuzHfkqcWwFPdC8shRir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMnxf7FrAoRSJyGAMXKtwDLjecmX7PK7yDRahbshikwHmgfxNrOs5JGifTpt13%2BnLgvcVfmGjlEzWQSIb5OFfcT6Da8RmnVXkmofcKmbaq8u%2FihPm8C%2FmWKLPB3CP79PuclyPhuMRzfXAwpxFRW2olA0wA1zRWJ%2BxZ4k1715qk9DD8m0OilnG9ScFqqPufXrwlMjhFIKuc7WJLzoiyfzRNrmgLvtikAEuBHATFlJA3CymSabH%2F4Wp%2B1JmTucmgmRzFxudvtzm38hESLnuALPC0WcqL8YOn5UxR5lGJF8gStU2MnObKhYUOFcWMbZU5dO7%2B%2Bj8jFso1kEKlyMjriEoyeumgeARXR8B0opP%2BNCO9EEqs42%2Fs4fo9U6HisFsQdN5WaopXgodP7%2BELL%2F18w3nd50S5PEzN18XIoZ2X9m5nNCYaRLywwg9dES9rGnbZ3RJTiyZen3Bsi9NPf6laHWv7xOKrguFSH0XIqw1ZNatozs%2BILY2mxerHhemDAPSjy9dKhZ9I1MbECO%2FZwAF4Nyq9q0ReYP8NBVe7QuBiOKforXBSemx3bwEoYopDsnad3Gj0gM1wZjMnvBH9TGsWdvLI%2BoP%2BR%2FGq5asxgGHyZ6wP0CaPtAER32LWe1jJbyNLnLtq7Hjg8ItIH0k6jGgw5NSCwgY6pgHKy5%2B380oxzX3FEup9zmWKPY9lGeDJZ3DORe30s0Jm2sqJFnbdQ67dQqyVED2g6E1IgWfEoZywxgvrC5s3vaeHK8LtpTcJWg9rV6Zm2AyJWP7E%2BupPWGT7FvkmENyFb8QQZ9WOHcu60Np6ocWzfH4eewbhfk3ZdcY4K0KGa%2FS370vUydDMk4s1E%2BD7hsRhWKZWCswUXn1uWb0SXq5c831jpXh3Dpnx&X-Amz-Signature=ac20ad09116c885832b156487fc83cc6f803f01a663cbda42fb89be5a75cfa54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43D7U43%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAkB0LbFaIATpjRUynZZ5a21saAXFtHgKHbC31N39QokAiAM0bJbCrZ9PcU7sNWEK0lpY3Z%2BuzHfkqcWwFPdC8shRir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMnxf7FrAoRSJyGAMXKtwDLjecmX7PK7yDRahbshikwHmgfxNrOs5JGifTpt13%2BnLgvcVfmGjlEzWQSIb5OFfcT6Da8RmnVXkmofcKmbaq8u%2FihPm8C%2FmWKLPB3CP79PuclyPhuMRzfXAwpxFRW2olA0wA1zRWJ%2BxZ4k1715qk9DD8m0OilnG9ScFqqPufXrwlMjhFIKuc7WJLzoiyfzRNrmgLvtikAEuBHATFlJA3CymSabH%2F4Wp%2B1JmTucmgmRzFxudvtzm38hESLnuALPC0WcqL8YOn5UxR5lGJF8gStU2MnObKhYUOFcWMbZU5dO7%2B%2Bj8jFso1kEKlyMjriEoyeumgeARXR8B0opP%2BNCO9EEqs42%2Fs4fo9U6HisFsQdN5WaopXgodP7%2BELL%2F18w3nd50S5PEzN18XIoZ2X9m5nNCYaRLywwg9dES9rGnbZ3RJTiyZen3Bsi9NPf6laHWv7xOKrguFSH0XIqw1ZNatozs%2BILY2mxerHhemDAPSjy9dKhZ9I1MbECO%2FZwAF4Nyq9q0ReYP8NBVe7QuBiOKforXBSemx3bwEoYopDsnad3Gj0gM1wZjMnvBH9TGsWdvLI%2BoP%2BR%2FGq5asxgGHyZ6wP0CaPtAER32LWe1jJbyNLnLtq7Hjg8ItIH0k6jGgw5NSCwgY6pgHKy5%2B380oxzX3FEup9zmWKPY9lGeDJZ3DORe30s0Jm2sqJFnbdQ67dQqyVED2g6E1IgWfEoZywxgvrC5s3vaeHK8LtpTcJWg9rV6Zm2AyJWP7E%2BupPWGT7FvkmENyFb8QQZ9WOHcu60Np6ocWzfH4eewbhfk3ZdcY4K0KGa%2FS370vUydDMk4s1E%2BD7hsRhWKZWCswUXn1uWb0SXq5c831jpXh3Dpnx&X-Amz-Signature=bbfb353b6bfe1e7cd3f9db6a1fc65a5c3a0a06099c65e79576106b9ded63010d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43D7U43%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAkB0LbFaIATpjRUynZZ5a21saAXFtHgKHbC31N39QokAiAM0bJbCrZ9PcU7sNWEK0lpY3Z%2BuzHfkqcWwFPdC8shRir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMnxf7FrAoRSJyGAMXKtwDLjecmX7PK7yDRahbshikwHmgfxNrOs5JGifTpt13%2BnLgvcVfmGjlEzWQSIb5OFfcT6Da8RmnVXkmofcKmbaq8u%2FihPm8C%2FmWKLPB3CP79PuclyPhuMRzfXAwpxFRW2olA0wA1zRWJ%2BxZ4k1715qk9DD8m0OilnG9ScFqqPufXrwlMjhFIKuc7WJLzoiyfzRNrmgLvtikAEuBHATFlJA3CymSabH%2F4Wp%2B1JmTucmgmRzFxudvtzm38hESLnuALPC0WcqL8YOn5UxR5lGJF8gStU2MnObKhYUOFcWMbZU5dO7%2B%2Bj8jFso1kEKlyMjriEoyeumgeARXR8B0opP%2BNCO9EEqs42%2Fs4fo9U6HisFsQdN5WaopXgodP7%2BELL%2F18w3nd50S5PEzN18XIoZ2X9m5nNCYaRLywwg9dES9rGnbZ3RJTiyZen3Bsi9NPf6laHWv7xOKrguFSH0XIqw1ZNatozs%2BILY2mxerHhemDAPSjy9dKhZ9I1MbECO%2FZwAF4Nyq9q0ReYP8NBVe7QuBiOKforXBSemx3bwEoYopDsnad3Gj0gM1wZjMnvBH9TGsWdvLI%2BoP%2BR%2FGq5asxgGHyZ6wP0CaPtAER32LWe1jJbyNLnLtq7Hjg8ItIH0k6jGgw5NSCwgY6pgHKy5%2B380oxzX3FEup9zmWKPY9lGeDJZ3DORe30s0Jm2sqJFnbdQ67dQqyVED2g6E1IgWfEoZywxgvrC5s3vaeHK8LtpTcJWg9rV6Zm2AyJWP7E%2BupPWGT7FvkmENyFb8QQZ9WOHcu60Np6ocWzfH4eewbhfk3ZdcY4K0KGa%2FS370vUydDMk4s1E%2BD7hsRhWKZWCswUXn1uWb0SXq5c831jpXh3Dpnx&X-Amz-Signature=3c93768be90fcc90dace7d16c55553add469c3db7566d63da7249358fd5310b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43D7U43%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAkB0LbFaIATpjRUynZZ5a21saAXFtHgKHbC31N39QokAiAM0bJbCrZ9PcU7sNWEK0lpY3Z%2BuzHfkqcWwFPdC8shRir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMnxf7FrAoRSJyGAMXKtwDLjecmX7PK7yDRahbshikwHmgfxNrOs5JGifTpt13%2BnLgvcVfmGjlEzWQSIb5OFfcT6Da8RmnVXkmofcKmbaq8u%2FihPm8C%2FmWKLPB3CP79PuclyPhuMRzfXAwpxFRW2olA0wA1zRWJ%2BxZ4k1715qk9DD8m0OilnG9ScFqqPufXrwlMjhFIKuc7WJLzoiyfzRNrmgLvtikAEuBHATFlJA3CymSabH%2F4Wp%2B1JmTucmgmRzFxudvtzm38hESLnuALPC0WcqL8YOn5UxR5lGJF8gStU2MnObKhYUOFcWMbZU5dO7%2B%2Bj8jFso1kEKlyMjriEoyeumgeARXR8B0opP%2BNCO9EEqs42%2Fs4fo9U6HisFsQdN5WaopXgodP7%2BELL%2F18w3nd50S5PEzN18XIoZ2X9m5nNCYaRLywwg9dES9rGnbZ3RJTiyZen3Bsi9NPf6laHWv7xOKrguFSH0XIqw1ZNatozs%2BILY2mxerHhemDAPSjy9dKhZ9I1MbECO%2FZwAF4Nyq9q0ReYP8NBVe7QuBiOKforXBSemx3bwEoYopDsnad3Gj0gM1wZjMnvBH9TGsWdvLI%2BoP%2BR%2FGq5asxgGHyZ6wP0CaPtAER32LWe1jJbyNLnLtq7Hjg8ItIH0k6jGgw5NSCwgY6pgHKy5%2B380oxzX3FEup9zmWKPY9lGeDJZ3DORe30s0Jm2sqJFnbdQ67dQqyVED2g6E1IgWfEoZywxgvrC5s3vaeHK8LtpTcJWg9rV6Zm2AyJWP7E%2BupPWGT7FvkmENyFb8QQZ9WOHcu60Np6ocWzfH4eewbhfk3ZdcY4K0KGa%2FS370vUydDMk4s1E%2BD7hsRhWKZWCswUXn1uWb0SXq5c831jpXh3Dpnx&X-Amz-Signature=bb20e40ae742778a96f3ba4a8d56e6a9e6583f74d2b121b3a2702c88d5e715b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43D7U43%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAkB0LbFaIATpjRUynZZ5a21saAXFtHgKHbC31N39QokAiAM0bJbCrZ9PcU7sNWEK0lpY3Z%2BuzHfkqcWwFPdC8shRir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMnxf7FrAoRSJyGAMXKtwDLjecmX7PK7yDRahbshikwHmgfxNrOs5JGifTpt13%2BnLgvcVfmGjlEzWQSIb5OFfcT6Da8RmnVXkmofcKmbaq8u%2FihPm8C%2FmWKLPB3CP79PuclyPhuMRzfXAwpxFRW2olA0wA1zRWJ%2BxZ4k1715qk9DD8m0OilnG9ScFqqPufXrwlMjhFIKuc7WJLzoiyfzRNrmgLvtikAEuBHATFlJA3CymSabH%2F4Wp%2B1JmTucmgmRzFxudvtzm38hESLnuALPC0WcqL8YOn5UxR5lGJF8gStU2MnObKhYUOFcWMbZU5dO7%2B%2Bj8jFso1kEKlyMjriEoyeumgeARXR8B0opP%2BNCO9EEqs42%2Fs4fo9U6HisFsQdN5WaopXgodP7%2BELL%2F18w3nd50S5PEzN18XIoZ2X9m5nNCYaRLywwg9dES9rGnbZ3RJTiyZen3Bsi9NPf6laHWv7xOKrguFSH0XIqw1ZNatozs%2BILY2mxerHhemDAPSjy9dKhZ9I1MbECO%2FZwAF4Nyq9q0ReYP8NBVe7QuBiOKforXBSemx3bwEoYopDsnad3Gj0gM1wZjMnvBH9TGsWdvLI%2BoP%2BR%2FGq5asxgGHyZ6wP0CaPtAER32LWe1jJbyNLnLtq7Hjg8ItIH0k6jGgw5NSCwgY6pgHKy5%2B380oxzX3FEup9zmWKPY9lGeDJZ3DORe30s0Jm2sqJFnbdQ67dQqyVED2g6E1IgWfEoZywxgvrC5s3vaeHK8LtpTcJWg9rV6Zm2AyJWP7E%2BupPWGT7FvkmENyFb8QQZ9WOHcu60Np6ocWzfH4eewbhfk3ZdcY4K0KGa%2FS370vUydDMk4s1E%2BD7hsRhWKZWCswUXn1uWb0SXq5c831jpXh3Dpnx&X-Amz-Signature=6c0b2f7b00ce24c291de33978e616e457093688286c0003d1caa2848f7526244&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43D7U43%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAkB0LbFaIATpjRUynZZ5a21saAXFtHgKHbC31N39QokAiAM0bJbCrZ9PcU7sNWEK0lpY3Z%2BuzHfkqcWwFPdC8shRir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMnxf7FrAoRSJyGAMXKtwDLjecmX7PK7yDRahbshikwHmgfxNrOs5JGifTpt13%2BnLgvcVfmGjlEzWQSIb5OFfcT6Da8RmnVXkmofcKmbaq8u%2FihPm8C%2FmWKLPB3CP79PuclyPhuMRzfXAwpxFRW2olA0wA1zRWJ%2BxZ4k1715qk9DD8m0OilnG9ScFqqPufXrwlMjhFIKuc7WJLzoiyfzRNrmgLvtikAEuBHATFlJA3CymSabH%2F4Wp%2B1JmTucmgmRzFxudvtzm38hESLnuALPC0WcqL8YOn5UxR5lGJF8gStU2MnObKhYUOFcWMbZU5dO7%2B%2Bj8jFso1kEKlyMjriEoyeumgeARXR8B0opP%2BNCO9EEqs42%2Fs4fo9U6HisFsQdN5WaopXgodP7%2BELL%2F18w3nd50S5PEzN18XIoZ2X9m5nNCYaRLywwg9dES9rGnbZ3RJTiyZen3Bsi9NPf6laHWv7xOKrguFSH0XIqw1ZNatozs%2BILY2mxerHhemDAPSjy9dKhZ9I1MbECO%2FZwAF4Nyq9q0ReYP8NBVe7QuBiOKforXBSemx3bwEoYopDsnad3Gj0gM1wZjMnvBH9TGsWdvLI%2BoP%2BR%2FGq5asxgGHyZ6wP0CaPtAER32LWe1jJbyNLnLtq7Hjg8ItIH0k6jGgw5NSCwgY6pgHKy5%2B380oxzX3FEup9zmWKPY9lGeDJZ3DORe30s0Jm2sqJFnbdQ67dQqyVED2g6E1IgWfEoZywxgvrC5s3vaeHK8LtpTcJWg9rV6Zm2AyJWP7E%2BupPWGT7FvkmENyFb8QQZ9WOHcu60Np6ocWzfH4eewbhfk3ZdcY4K0KGa%2FS370vUydDMk4s1E%2BD7hsRhWKZWCswUXn1uWb0SXq5c831jpXh3Dpnx&X-Amz-Signature=24132c71c159ad25a4517ec3023742c55567ae1a5a9d2489512041f7c8f0bd7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43D7U43%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAkB0LbFaIATpjRUynZZ5a21saAXFtHgKHbC31N39QokAiAM0bJbCrZ9PcU7sNWEK0lpY3Z%2BuzHfkqcWwFPdC8shRir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMnxf7FrAoRSJyGAMXKtwDLjecmX7PK7yDRahbshikwHmgfxNrOs5JGifTpt13%2BnLgvcVfmGjlEzWQSIb5OFfcT6Da8RmnVXkmofcKmbaq8u%2FihPm8C%2FmWKLPB3CP79PuclyPhuMRzfXAwpxFRW2olA0wA1zRWJ%2BxZ4k1715qk9DD8m0OilnG9ScFqqPufXrwlMjhFIKuc7WJLzoiyfzRNrmgLvtikAEuBHATFlJA3CymSabH%2F4Wp%2B1JmTucmgmRzFxudvtzm38hESLnuALPC0WcqL8YOn5UxR5lGJF8gStU2MnObKhYUOFcWMbZU5dO7%2B%2Bj8jFso1kEKlyMjriEoyeumgeARXR8B0opP%2BNCO9EEqs42%2Fs4fo9U6HisFsQdN5WaopXgodP7%2BELL%2F18w3nd50S5PEzN18XIoZ2X9m5nNCYaRLywwg9dES9rGnbZ3RJTiyZen3Bsi9NPf6laHWv7xOKrguFSH0XIqw1ZNatozs%2BILY2mxerHhemDAPSjy9dKhZ9I1MbECO%2FZwAF4Nyq9q0ReYP8NBVe7QuBiOKforXBSemx3bwEoYopDsnad3Gj0gM1wZjMnvBH9TGsWdvLI%2BoP%2BR%2FGq5asxgGHyZ6wP0CaPtAER32LWe1jJbyNLnLtq7Hjg8ItIH0k6jGgw5NSCwgY6pgHKy5%2B380oxzX3FEup9zmWKPY9lGeDJZ3DORe30s0Jm2sqJFnbdQ67dQqyVED2g6E1IgWfEoZywxgvrC5s3vaeHK8LtpTcJWg9rV6Zm2AyJWP7E%2BupPWGT7FvkmENyFb8QQZ9WOHcu60Np6ocWzfH4eewbhfk3ZdcY4K0KGa%2FS370vUydDMk4s1E%2BD7hsRhWKZWCswUXn1uWb0SXq5c831jpXh3Dpnx&X-Amz-Signature=b447b6534773f88ae20d869b892257686c5238b0e4d6016f43e25db971e1bb48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43D7U43%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAkB0LbFaIATpjRUynZZ5a21saAXFtHgKHbC31N39QokAiAM0bJbCrZ9PcU7sNWEK0lpY3Z%2BuzHfkqcWwFPdC8shRir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMnxf7FrAoRSJyGAMXKtwDLjecmX7PK7yDRahbshikwHmgfxNrOs5JGifTpt13%2BnLgvcVfmGjlEzWQSIb5OFfcT6Da8RmnVXkmofcKmbaq8u%2FihPm8C%2FmWKLPB3CP79PuclyPhuMRzfXAwpxFRW2olA0wA1zRWJ%2BxZ4k1715qk9DD8m0OilnG9ScFqqPufXrwlMjhFIKuc7WJLzoiyfzRNrmgLvtikAEuBHATFlJA3CymSabH%2F4Wp%2B1JmTucmgmRzFxudvtzm38hESLnuALPC0WcqL8YOn5UxR5lGJF8gStU2MnObKhYUOFcWMbZU5dO7%2B%2Bj8jFso1kEKlyMjriEoyeumgeARXR8B0opP%2BNCO9EEqs42%2Fs4fo9U6HisFsQdN5WaopXgodP7%2BELL%2F18w3nd50S5PEzN18XIoZ2X9m5nNCYaRLywwg9dES9rGnbZ3RJTiyZen3Bsi9NPf6laHWv7xOKrguFSH0XIqw1ZNatozs%2BILY2mxerHhemDAPSjy9dKhZ9I1MbECO%2FZwAF4Nyq9q0ReYP8NBVe7QuBiOKforXBSemx3bwEoYopDsnad3Gj0gM1wZjMnvBH9TGsWdvLI%2BoP%2BR%2FGq5asxgGHyZ6wP0CaPtAER32LWe1jJbyNLnLtq7Hjg8ItIH0k6jGgw5NSCwgY6pgHKy5%2B380oxzX3FEup9zmWKPY9lGeDJZ3DORe30s0Jm2sqJFnbdQ67dQqyVED2g6E1IgWfEoZywxgvrC5s3vaeHK8LtpTcJWg9rV6Zm2AyJWP7E%2BupPWGT7FvkmENyFb8QQZ9WOHcu60Np6ocWzfH4eewbhfk3ZdcY4K0KGa%2FS370vUydDMk4s1E%2BD7hsRhWKZWCswUXn1uWb0SXq5c831jpXh3Dpnx&X-Amz-Signature=26fcb1fe2b93b057c1f11e829806042119274c4ebe27aa4a67757ae35315bd19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
