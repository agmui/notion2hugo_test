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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXPZ54P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIApguM0rxwDx0YfWK7MwnDdkaGm3QzmQ%2Fd3MMz2d8bTuAiAd72vkMEiSCOS0F81mqz3t8Q6CJoae2%2BaTY%2FegWUUfHSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMJT7YmIrmsh%2Fwr5LpKtwDoZvnt7Z%2BLSnn50kzCW19kYVf7wi7MSKVwSFfEASES065UpFBVwjKc91fhdiZSsiZdtF%2FMQzeilAY7shuO2pi4CjAqLahJi1UOC%2B5s13fytbjAj3WyklLQbEVcwndZd4ay2ncY4Dh%2B3eaTK9DDJtxk9b2%2Fl%2FLzdUhEePvKbkYWu6A47nHNX0tIsQ47hcyRBO7hlElprTXfLYWYSMkLuy44Q%2FdovAlTryYehAZ1M4%2BOb6Vihc1lFxtSw9mPadgXZD9KG9mcFkG52ZEzzdM1ygw1wcVdjm1L3%2BXWfgW83SG0rhTSsLgMlVtGLFE2LHEBG2to0iceAFFHSWhdIfCw2FaeAYnPnHLFWqzF2mX4phea3Y19wmO9Ht5oZgxq1Cx17XWFm8qKyHB7XdPLjdI80aIW4cSWfr%2BzSMzG4u8AvQORnc%2BUW1smgaFnCvnFDwtJhXKHeGeOvNQkwPznZFf7j7q3o778wYIb9UtwOBuC4nvqCf0ZkZlxWAFDhplNCzTPG3aGGegc34mhfRMYqysxmOWKjkfdPxGvVjtBOylo2l8ICdnJLem%2F7x87WTRegyDK8qwg3tv9nCkiO4sTnHdGUFFYDdqFg8ceWl3sOEnD6fbg%2Bu%2FLbu2CMGNvwZXo8gw%2BZ31wgY6pgHZ7DzUtAMtndY6GmA1t8d%2FglCfLhR9vZu0SqSzURDXJdVwrF7MprP3NsH%2BmmUnfsBG%2BHFJ0XH2O8pprcNE9JAmZe7mvB5nb3ahOUjQP0VhK%2BX45nj2Pc7X%2B68c7NMAOLlIZcKtWgKsoRAZTWHFPPrFlhVfWw0F5RUV%2Bum%2Bo5zxvWgHfMJL7hQfYO6GoOMQjUeGlBR2IcHuJrvOzWdyTsuDTaKtCG7L&X-Amz-Signature=b26bc8595b803455981dc726feeba35da0663f758719c97f5f504544cb5b4ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXPZ54P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIApguM0rxwDx0YfWK7MwnDdkaGm3QzmQ%2Fd3MMz2d8bTuAiAd72vkMEiSCOS0F81mqz3t8Q6CJoae2%2BaTY%2FegWUUfHSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMJT7YmIrmsh%2Fwr5LpKtwDoZvnt7Z%2BLSnn50kzCW19kYVf7wi7MSKVwSFfEASES065UpFBVwjKc91fhdiZSsiZdtF%2FMQzeilAY7shuO2pi4CjAqLahJi1UOC%2B5s13fytbjAj3WyklLQbEVcwndZd4ay2ncY4Dh%2B3eaTK9DDJtxk9b2%2Fl%2FLzdUhEePvKbkYWu6A47nHNX0tIsQ47hcyRBO7hlElprTXfLYWYSMkLuy44Q%2FdovAlTryYehAZ1M4%2BOb6Vihc1lFxtSw9mPadgXZD9KG9mcFkG52ZEzzdM1ygw1wcVdjm1L3%2BXWfgW83SG0rhTSsLgMlVtGLFE2LHEBG2to0iceAFFHSWhdIfCw2FaeAYnPnHLFWqzF2mX4phea3Y19wmO9Ht5oZgxq1Cx17XWFm8qKyHB7XdPLjdI80aIW4cSWfr%2BzSMzG4u8AvQORnc%2BUW1smgaFnCvnFDwtJhXKHeGeOvNQkwPznZFf7j7q3o778wYIb9UtwOBuC4nvqCf0ZkZlxWAFDhplNCzTPG3aGGegc34mhfRMYqysxmOWKjkfdPxGvVjtBOylo2l8ICdnJLem%2F7x87WTRegyDK8qwg3tv9nCkiO4sTnHdGUFFYDdqFg8ceWl3sOEnD6fbg%2Bu%2FLbu2CMGNvwZXo8gw%2BZ31wgY6pgHZ7DzUtAMtndY6GmA1t8d%2FglCfLhR9vZu0SqSzURDXJdVwrF7MprP3NsH%2BmmUnfsBG%2BHFJ0XH2O8pprcNE9JAmZe7mvB5nb3ahOUjQP0VhK%2BX45nj2Pc7X%2B68c7NMAOLlIZcKtWgKsoRAZTWHFPPrFlhVfWw0F5RUV%2Bum%2Bo5zxvWgHfMJL7hQfYO6GoOMQjUeGlBR2IcHuJrvOzWdyTsuDTaKtCG7L&X-Amz-Signature=29c1f21279fbb5a3707dc2c343a1bca821ce1f17387cb156d47ba92263f56dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXPZ54P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIApguM0rxwDx0YfWK7MwnDdkaGm3QzmQ%2Fd3MMz2d8bTuAiAd72vkMEiSCOS0F81mqz3t8Q6CJoae2%2BaTY%2FegWUUfHSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMJT7YmIrmsh%2Fwr5LpKtwDoZvnt7Z%2BLSnn50kzCW19kYVf7wi7MSKVwSFfEASES065UpFBVwjKc91fhdiZSsiZdtF%2FMQzeilAY7shuO2pi4CjAqLahJi1UOC%2B5s13fytbjAj3WyklLQbEVcwndZd4ay2ncY4Dh%2B3eaTK9DDJtxk9b2%2Fl%2FLzdUhEePvKbkYWu6A47nHNX0tIsQ47hcyRBO7hlElprTXfLYWYSMkLuy44Q%2FdovAlTryYehAZ1M4%2BOb6Vihc1lFxtSw9mPadgXZD9KG9mcFkG52ZEzzdM1ygw1wcVdjm1L3%2BXWfgW83SG0rhTSsLgMlVtGLFE2LHEBG2to0iceAFFHSWhdIfCw2FaeAYnPnHLFWqzF2mX4phea3Y19wmO9Ht5oZgxq1Cx17XWFm8qKyHB7XdPLjdI80aIW4cSWfr%2BzSMzG4u8AvQORnc%2BUW1smgaFnCvnFDwtJhXKHeGeOvNQkwPznZFf7j7q3o778wYIb9UtwOBuC4nvqCf0ZkZlxWAFDhplNCzTPG3aGGegc34mhfRMYqysxmOWKjkfdPxGvVjtBOylo2l8ICdnJLem%2F7x87WTRegyDK8qwg3tv9nCkiO4sTnHdGUFFYDdqFg8ceWl3sOEnD6fbg%2Bu%2FLbu2CMGNvwZXo8gw%2BZ31wgY6pgHZ7DzUtAMtndY6GmA1t8d%2FglCfLhR9vZu0SqSzURDXJdVwrF7MprP3NsH%2BmmUnfsBG%2BHFJ0XH2O8pprcNE9JAmZe7mvB5nb3ahOUjQP0VhK%2BX45nj2Pc7X%2B68c7NMAOLlIZcKtWgKsoRAZTWHFPPrFlhVfWw0F5RUV%2Bum%2Bo5zxvWgHfMJL7hQfYO6GoOMQjUeGlBR2IcHuJrvOzWdyTsuDTaKtCG7L&X-Amz-Signature=a72125c916471f4195ef9bdf3a8c477c4abeb1d2fbf6784a74193a993673b022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXPZ54P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIApguM0rxwDx0YfWK7MwnDdkaGm3QzmQ%2Fd3MMz2d8bTuAiAd72vkMEiSCOS0F81mqz3t8Q6CJoae2%2BaTY%2FegWUUfHSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMJT7YmIrmsh%2Fwr5LpKtwDoZvnt7Z%2BLSnn50kzCW19kYVf7wi7MSKVwSFfEASES065UpFBVwjKc91fhdiZSsiZdtF%2FMQzeilAY7shuO2pi4CjAqLahJi1UOC%2B5s13fytbjAj3WyklLQbEVcwndZd4ay2ncY4Dh%2B3eaTK9DDJtxk9b2%2Fl%2FLzdUhEePvKbkYWu6A47nHNX0tIsQ47hcyRBO7hlElprTXfLYWYSMkLuy44Q%2FdovAlTryYehAZ1M4%2BOb6Vihc1lFxtSw9mPadgXZD9KG9mcFkG52ZEzzdM1ygw1wcVdjm1L3%2BXWfgW83SG0rhTSsLgMlVtGLFE2LHEBG2to0iceAFFHSWhdIfCw2FaeAYnPnHLFWqzF2mX4phea3Y19wmO9Ht5oZgxq1Cx17XWFm8qKyHB7XdPLjdI80aIW4cSWfr%2BzSMzG4u8AvQORnc%2BUW1smgaFnCvnFDwtJhXKHeGeOvNQkwPznZFf7j7q3o778wYIb9UtwOBuC4nvqCf0ZkZlxWAFDhplNCzTPG3aGGegc34mhfRMYqysxmOWKjkfdPxGvVjtBOylo2l8ICdnJLem%2F7x87WTRegyDK8qwg3tv9nCkiO4sTnHdGUFFYDdqFg8ceWl3sOEnD6fbg%2Bu%2FLbu2CMGNvwZXo8gw%2BZ31wgY6pgHZ7DzUtAMtndY6GmA1t8d%2FglCfLhR9vZu0SqSzURDXJdVwrF7MprP3NsH%2BmmUnfsBG%2BHFJ0XH2O8pprcNE9JAmZe7mvB5nb3ahOUjQP0VhK%2BX45nj2Pc7X%2B68c7NMAOLlIZcKtWgKsoRAZTWHFPPrFlhVfWw0F5RUV%2Bum%2Bo5zxvWgHfMJL7hQfYO6GoOMQjUeGlBR2IcHuJrvOzWdyTsuDTaKtCG7L&X-Amz-Signature=80f50b8c14a3c15b6f5b713cf1eb195a754dcccc48c383583796e70b96bf9a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXPZ54P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIApguM0rxwDx0YfWK7MwnDdkaGm3QzmQ%2Fd3MMz2d8bTuAiAd72vkMEiSCOS0F81mqz3t8Q6CJoae2%2BaTY%2FegWUUfHSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMJT7YmIrmsh%2Fwr5LpKtwDoZvnt7Z%2BLSnn50kzCW19kYVf7wi7MSKVwSFfEASES065UpFBVwjKc91fhdiZSsiZdtF%2FMQzeilAY7shuO2pi4CjAqLahJi1UOC%2B5s13fytbjAj3WyklLQbEVcwndZd4ay2ncY4Dh%2B3eaTK9DDJtxk9b2%2Fl%2FLzdUhEePvKbkYWu6A47nHNX0tIsQ47hcyRBO7hlElprTXfLYWYSMkLuy44Q%2FdovAlTryYehAZ1M4%2BOb6Vihc1lFxtSw9mPadgXZD9KG9mcFkG52ZEzzdM1ygw1wcVdjm1L3%2BXWfgW83SG0rhTSsLgMlVtGLFE2LHEBG2to0iceAFFHSWhdIfCw2FaeAYnPnHLFWqzF2mX4phea3Y19wmO9Ht5oZgxq1Cx17XWFm8qKyHB7XdPLjdI80aIW4cSWfr%2BzSMzG4u8AvQORnc%2BUW1smgaFnCvnFDwtJhXKHeGeOvNQkwPznZFf7j7q3o778wYIb9UtwOBuC4nvqCf0ZkZlxWAFDhplNCzTPG3aGGegc34mhfRMYqysxmOWKjkfdPxGvVjtBOylo2l8ICdnJLem%2F7x87WTRegyDK8qwg3tv9nCkiO4sTnHdGUFFYDdqFg8ceWl3sOEnD6fbg%2Bu%2FLbu2CMGNvwZXo8gw%2BZ31wgY6pgHZ7DzUtAMtndY6GmA1t8d%2FglCfLhR9vZu0SqSzURDXJdVwrF7MprP3NsH%2BmmUnfsBG%2BHFJ0XH2O8pprcNE9JAmZe7mvB5nb3ahOUjQP0VhK%2BX45nj2Pc7X%2B68c7NMAOLlIZcKtWgKsoRAZTWHFPPrFlhVfWw0F5RUV%2Bum%2Bo5zxvWgHfMJL7hQfYO6GoOMQjUeGlBR2IcHuJrvOzWdyTsuDTaKtCG7L&X-Amz-Signature=cccedeab1e9b4cc375d32547e708dfa9501386c4e644bd6e00d7b4cb12e3150b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXPZ54P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIApguM0rxwDx0YfWK7MwnDdkaGm3QzmQ%2Fd3MMz2d8bTuAiAd72vkMEiSCOS0F81mqz3t8Q6CJoae2%2BaTY%2FegWUUfHSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMJT7YmIrmsh%2Fwr5LpKtwDoZvnt7Z%2BLSnn50kzCW19kYVf7wi7MSKVwSFfEASES065UpFBVwjKc91fhdiZSsiZdtF%2FMQzeilAY7shuO2pi4CjAqLahJi1UOC%2B5s13fytbjAj3WyklLQbEVcwndZd4ay2ncY4Dh%2B3eaTK9DDJtxk9b2%2Fl%2FLzdUhEePvKbkYWu6A47nHNX0tIsQ47hcyRBO7hlElprTXfLYWYSMkLuy44Q%2FdovAlTryYehAZ1M4%2BOb6Vihc1lFxtSw9mPadgXZD9KG9mcFkG52ZEzzdM1ygw1wcVdjm1L3%2BXWfgW83SG0rhTSsLgMlVtGLFE2LHEBG2to0iceAFFHSWhdIfCw2FaeAYnPnHLFWqzF2mX4phea3Y19wmO9Ht5oZgxq1Cx17XWFm8qKyHB7XdPLjdI80aIW4cSWfr%2BzSMzG4u8AvQORnc%2BUW1smgaFnCvnFDwtJhXKHeGeOvNQkwPznZFf7j7q3o778wYIb9UtwOBuC4nvqCf0ZkZlxWAFDhplNCzTPG3aGGegc34mhfRMYqysxmOWKjkfdPxGvVjtBOylo2l8ICdnJLem%2F7x87WTRegyDK8qwg3tv9nCkiO4sTnHdGUFFYDdqFg8ceWl3sOEnD6fbg%2Bu%2FLbu2CMGNvwZXo8gw%2BZ31wgY6pgHZ7DzUtAMtndY6GmA1t8d%2FglCfLhR9vZu0SqSzURDXJdVwrF7MprP3NsH%2BmmUnfsBG%2BHFJ0XH2O8pprcNE9JAmZe7mvB5nb3ahOUjQP0VhK%2BX45nj2Pc7X%2B68c7NMAOLlIZcKtWgKsoRAZTWHFPPrFlhVfWw0F5RUV%2Bum%2Bo5zxvWgHfMJL7hQfYO6GoOMQjUeGlBR2IcHuJrvOzWdyTsuDTaKtCG7L&X-Amz-Signature=e6ebdbe3f4f81b27aa0e9898dfe2addf9c6d8c919d0f997a14da7d067b312122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXPZ54P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIApguM0rxwDx0YfWK7MwnDdkaGm3QzmQ%2Fd3MMz2d8bTuAiAd72vkMEiSCOS0F81mqz3t8Q6CJoae2%2BaTY%2FegWUUfHSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMJT7YmIrmsh%2Fwr5LpKtwDoZvnt7Z%2BLSnn50kzCW19kYVf7wi7MSKVwSFfEASES065UpFBVwjKc91fhdiZSsiZdtF%2FMQzeilAY7shuO2pi4CjAqLahJi1UOC%2B5s13fytbjAj3WyklLQbEVcwndZd4ay2ncY4Dh%2B3eaTK9DDJtxk9b2%2Fl%2FLzdUhEePvKbkYWu6A47nHNX0tIsQ47hcyRBO7hlElprTXfLYWYSMkLuy44Q%2FdovAlTryYehAZ1M4%2BOb6Vihc1lFxtSw9mPadgXZD9KG9mcFkG52ZEzzdM1ygw1wcVdjm1L3%2BXWfgW83SG0rhTSsLgMlVtGLFE2LHEBG2to0iceAFFHSWhdIfCw2FaeAYnPnHLFWqzF2mX4phea3Y19wmO9Ht5oZgxq1Cx17XWFm8qKyHB7XdPLjdI80aIW4cSWfr%2BzSMzG4u8AvQORnc%2BUW1smgaFnCvnFDwtJhXKHeGeOvNQkwPznZFf7j7q3o778wYIb9UtwOBuC4nvqCf0ZkZlxWAFDhplNCzTPG3aGGegc34mhfRMYqysxmOWKjkfdPxGvVjtBOylo2l8ICdnJLem%2F7x87WTRegyDK8qwg3tv9nCkiO4sTnHdGUFFYDdqFg8ceWl3sOEnD6fbg%2Bu%2FLbu2CMGNvwZXo8gw%2BZ31wgY6pgHZ7DzUtAMtndY6GmA1t8d%2FglCfLhR9vZu0SqSzURDXJdVwrF7MprP3NsH%2BmmUnfsBG%2BHFJ0XH2O8pprcNE9JAmZe7mvB5nb3ahOUjQP0VhK%2BX45nj2Pc7X%2B68c7NMAOLlIZcKtWgKsoRAZTWHFPPrFlhVfWw0F5RUV%2Bum%2Bo5zxvWgHfMJL7hQfYO6GoOMQjUeGlBR2IcHuJrvOzWdyTsuDTaKtCG7L&X-Amz-Signature=f21a5cdf434045db919c459ee9cc9bb454e88e556840f0caf6d04d2a2d066d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGXPZ54P%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIApguM0rxwDx0YfWK7MwnDdkaGm3QzmQ%2Fd3MMz2d8bTuAiAd72vkMEiSCOS0F81mqz3t8Q6CJoae2%2BaTY%2FegWUUfHSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMJT7YmIrmsh%2Fwr5LpKtwDoZvnt7Z%2BLSnn50kzCW19kYVf7wi7MSKVwSFfEASES065UpFBVwjKc91fhdiZSsiZdtF%2FMQzeilAY7shuO2pi4CjAqLahJi1UOC%2B5s13fytbjAj3WyklLQbEVcwndZd4ay2ncY4Dh%2B3eaTK9DDJtxk9b2%2Fl%2FLzdUhEePvKbkYWu6A47nHNX0tIsQ47hcyRBO7hlElprTXfLYWYSMkLuy44Q%2FdovAlTryYehAZ1M4%2BOb6Vihc1lFxtSw9mPadgXZD9KG9mcFkG52ZEzzdM1ygw1wcVdjm1L3%2BXWfgW83SG0rhTSsLgMlVtGLFE2LHEBG2to0iceAFFHSWhdIfCw2FaeAYnPnHLFWqzF2mX4phea3Y19wmO9Ht5oZgxq1Cx17XWFm8qKyHB7XdPLjdI80aIW4cSWfr%2BzSMzG4u8AvQORnc%2BUW1smgaFnCvnFDwtJhXKHeGeOvNQkwPznZFf7j7q3o778wYIb9UtwOBuC4nvqCf0ZkZlxWAFDhplNCzTPG3aGGegc34mhfRMYqysxmOWKjkfdPxGvVjtBOylo2l8ICdnJLem%2F7x87WTRegyDK8qwg3tv9nCkiO4sTnHdGUFFYDdqFg8ceWl3sOEnD6fbg%2Bu%2FLbu2CMGNvwZXo8gw%2BZ31wgY6pgHZ7DzUtAMtndY6GmA1t8d%2FglCfLhR9vZu0SqSzURDXJdVwrF7MprP3NsH%2BmmUnfsBG%2BHFJ0XH2O8pprcNE9JAmZe7mvB5nb3ahOUjQP0VhK%2BX45nj2Pc7X%2B68c7NMAOLlIZcKtWgKsoRAZTWHFPPrFlhVfWw0F5RUV%2Bum%2Bo5zxvWgHfMJL7hQfYO6GoOMQjUeGlBR2IcHuJrvOzWdyTsuDTaKtCG7L&X-Amz-Signature=a85e7e2e3b0bcb743f4bb61d6f970b95828f3d1da3fe2bac1006ff29e1960bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
