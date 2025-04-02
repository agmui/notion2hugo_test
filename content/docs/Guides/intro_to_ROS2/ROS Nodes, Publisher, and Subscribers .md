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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT65JCXG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFEvE1gDo6%2Fc52EBqC3DGhecWBVJX9xKB8ef26dB%2BuoLAiB9IrjlbKdVGVTSR9sHaB2V%2FYyH0rI8M2dHikGYp5OMkCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7pqCRDDbtu%2B1v3hKtwDWFW3WUWnkD3VUe4KOgyD1oW%2FmZyeuMoZu581qi%2Fgp6jR9MIt53P8FzJ1vvsz1aXyvmTQn1plbkMP0G2JEMNk7VAma9jp08tLL8XDeEBwlMOS2fcuJFmFJMXPlj9kfLGMKbD%2F17R7B1runQ5awojmG%2FLpyIfWnNqA%2BLLX3u4xxPl15OsHFi6VlIgvd8J%2BTg%2BDMD%2F7uau4x9W%2BUR74ZJ1k8befGaAswk7CrcQgaGk0zLAmDNOkty0unp2nKdsnYf4l21Luzwj%2BaFRmdqXTYWAQOEX8WI6%2FPucL5OWrK3wDSQBkImXNXGqftMsOeQYXqpxQ0mT5zJZcphwTwUf8OSfsGvNm9toZBYtzmK1bgDhX40apCs1Jpwx%2BoM1mvooxHIOMsGfcCzpq9tGXowIEvncWVD1KqXxrTvtdhXG2nzV%2FWLP5mA%2FfjDzXG7vwRxrWRGf1vR2FO9nXc64vevY3ONNkiF7r9I6Md8aQGiduJKSOcE3SIEtXlHiRbd2H8GqE%2BswvJPC27YH4weTfnrV215W0uvCUrEaSKpdlmQel6SVx8rP14y%2Bf0UUPI%2FhggPW%2FcOu0NnIpgAxC%2ByviDJQgiSKyKdy5xdED8JReiPoVavMduJKkaTuzRb%2Bl%2FUM9kh4woamxvwY6pgEuar9Esrs%2BuWIIA3npaItTOHfMFF8CYtszgQ9e7IEfOr0CldsQBgq2vCkahTf3DK1xjs7oNS%2FSLqM1WpBI8%2FXKNQ1SOMqJ6SHQBcEDflrAvn%2FOdsBy3QQnJwYclTJUHwArN1JV7osfAdjJ1BQpdoeUnvhGx1OwFov9nEzl6GLwa6c0FiVqu7a%2BxL4whZZ%2BCr4%2FnYWgs8sGMvfHdbIQxRReGJj2TILo&X-Amz-Signature=d720686d47bb42ba2c442a3c6bc1f726aba6fb335c4c2cf6e2b6954079cbedac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT65JCXG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFEvE1gDo6%2Fc52EBqC3DGhecWBVJX9xKB8ef26dB%2BuoLAiB9IrjlbKdVGVTSR9sHaB2V%2FYyH0rI8M2dHikGYp5OMkCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7pqCRDDbtu%2B1v3hKtwDWFW3WUWnkD3VUe4KOgyD1oW%2FmZyeuMoZu581qi%2Fgp6jR9MIt53P8FzJ1vvsz1aXyvmTQn1plbkMP0G2JEMNk7VAma9jp08tLL8XDeEBwlMOS2fcuJFmFJMXPlj9kfLGMKbD%2F17R7B1runQ5awojmG%2FLpyIfWnNqA%2BLLX3u4xxPl15OsHFi6VlIgvd8J%2BTg%2BDMD%2F7uau4x9W%2BUR74ZJ1k8befGaAswk7CrcQgaGk0zLAmDNOkty0unp2nKdsnYf4l21Luzwj%2BaFRmdqXTYWAQOEX8WI6%2FPucL5OWrK3wDSQBkImXNXGqftMsOeQYXqpxQ0mT5zJZcphwTwUf8OSfsGvNm9toZBYtzmK1bgDhX40apCs1Jpwx%2BoM1mvooxHIOMsGfcCzpq9tGXowIEvncWVD1KqXxrTvtdhXG2nzV%2FWLP5mA%2FfjDzXG7vwRxrWRGf1vR2FO9nXc64vevY3ONNkiF7r9I6Md8aQGiduJKSOcE3SIEtXlHiRbd2H8GqE%2BswvJPC27YH4weTfnrV215W0uvCUrEaSKpdlmQel6SVx8rP14y%2Bf0UUPI%2FhggPW%2FcOu0NnIpgAxC%2ByviDJQgiSKyKdy5xdED8JReiPoVavMduJKkaTuzRb%2Bl%2FUM9kh4woamxvwY6pgEuar9Esrs%2BuWIIA3npaItTOHfMFF8CYtszgQ9e7IEfOr0CldsQBgq2vCkahTf3DK1xjs7oNS%2FSLqM1WpBI8%2FXKNQ1SOMqJ6SHQBcEDflrAvn%2FOdsBy3QQnJwYclTJUHwArN1JV7osfAdjJ1BQpdoeUnvhGx1OwFov9nEzl6GLwa6c0FiVqu7a%2BxL4whZZ%2BCr4%2FnYWgs8sGMvfHdbIQxRReGJj2TILo&X-Amz-Signature=59eb3f760d4f06c9e5c69dbeae8248b60e07a83212d2f22becc169962b53610e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT65JCXG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFEvE1gDo6%2Fc52EBqC3DGhecWBVJX9xKB8ef26dB%2BuoLAiB9IrjlbKdVGVTSR9sHaB2V%2FYyH0rI8M2dHikGYp5OMkCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7pqCRDDbtu%2B1v3hKtwDWFW3WUWnkD3VUe4KOgyD1oW%2FmZyeuMoZu581qi%2Fgp6jR9MIt53P8FzJ1vvsz1aXyvmTQn1plbkMP0G2JEMNk7VAma9jp08tLL8XDeEBwlMOS2fcuJFmFJMXPlj9kfLGMKbD%2F17R7B1runQ5awojmG%2FLpyIfWnNqA%2BLLX3u4xxPl15OsHFi6VlIgvd8J%2BTg%2BDMD%2F7uau4x9W%2BUR74ZJ1k8befGaAswk7CrcQgaGk0zLAmDNOkty0unp2nKdsnYf4l21Luzwj%2BaFRmdqXTYWAQOEX8WI6%2FPucL5OWrK3wDSQBkImXNXGqftMsOeQYXqpxQ0mT5zJZcphwTwUf8OSfsGvNm9toZBYtzmK1bgDhX40apCs1Jpwx%2BoM1mvooxHIOMsGfcCzpq9tGXowIEvncWVD1KqXxrTvtdhXG2nzV%2FWLP5mA%2FfjDzXG7vwRxrWRGf1vR2FO9nXc64vevY3ONNkiF7r9I6Md8aQGiduJKSOcE3SIEtXlHiRbd2H8GqE%2BswvJPC27YH4weTfnrV215W0uvCUrEaSKpdlmQel6SVx8rP14y%2Bf0UUPI%2FhggPW%2FcOu0NnIpgAxC%2ByviDJQgiSKyKdy5xdED8JReiPoVavMduJKkaTuzRb%2Bl%2FUM9kh4woamxvwY6pgEuar9Esrs%2BuWIIA3npaItTOHfMFF8CYtszgQ9e7IEfOr0CldsQBgq2vCkahTf3DK1xjs7oNS%2FSLqM1WpBI8%2FXKNQ1SOMqJ6SHQBcEDflrAvn%2FOdsBy3QQnJwYclTJUHwArN1JV7osfAdjJ1BQpdoeUnvhGx1OwFov9nEzl6GLwa6c0FiVqu7a%2BxL4whZZ%2BCr4%2FnYWgs8sGMvfHdbIQxRReGJj2TILo&X-Amz-Signature=f75eb2bc44576e450216753bdd1621c7a9fcf1783f602410196d4475b2e51cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT65JCXG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFEvE1gDo6%2Fc52EBqC3DGhecWBVJX9xKB8ef26dB%2BuoLAiB9IrjlbKdVGVTSR9sHaB2V%2FYyH0rI8M2dHikGYp5OMkCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7pqCRDDbtu%2B1v3hKtwDWFW3WUWnkD3VUe4KOgyD1oW%2FmZyeuMoZu581qi%2Fgp6jR9MIt53P8FzJ1vvsz1aXyvmTQn1plbkMP0G2JEMNk7VAma9jp08tLL8XDeEBwlMOS2fcuJFmFJMXPlj9kfLGMKbD%2F17R7B1runQ5awojmG%2FLpyIfWnNqA%2BLLX3u4xxPl15OsHFi6VlIgvd8J%2BTg%2BDMD%2F7uau4x9W%2BUR74ZJ1k8befGaAswk7CrcQgaGk0zLAmDNOkty0unp2nKdsnYf4l21Luzwj%2BaFRmdqXTYWAQOEX8WI6%2FPucL5OWrK3wDSQBkImXNXGqftMsOeQYXqpxQ0mT5zJZcphwTwUf8OSfsGvNm9toZBYtzmK1bgDhX40apCs1Jpwx%2BoM1mvooxHIOMsGfcCzpq9tGXowIEvncWVD1KqXxrTvtdhXG2nzV%2FWLP5mA%2FfjDzXG7vwRxrWRGf1vR2FO9nXc64vevY3ONNkiF7r9I6Md8aQGiduJKSOcE3SIEtXlHiRbd2H8GqE%2BswvJPC27YH4weTfnrV215W0uvCUrEaSKpdlmQel6SVx8rP14y%2Bf0UUPI%2FhggPW%2FcOu0NnIpgAxC%2ByviDJQgiSKyKdy5xdED8JReiPoVavMduJKkaTuzRb%2Bl%2FUM9kh4woamxvwY6pgEuar9Esrs%2BuWIIA3npaItTOHfMFF8CYtszgQ9e7IEfOr0CldsQBgq2vCkahTf3DK1xjs7oNS%2FSLqM1WpBI8%2FXKNQ1SOMqJ6SHQBcEDflrAvn%2FOdsBy3QQnJwYclTJUHwArN1JV7osfAdjJ1BQpdoeUnvhGx1OwFov9nEzl6GLwa6c0FiVqu7a%2BxL4whZZ%2BCr4%2FnYWgs8sGMvfHdbIQxRReGJj2TILo&X-Amz-Signature=32c76b02a84df29f5a982552517479ca86ff34de8395ca88da31d50b986e6ac2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT65JCXG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFEvE1gDo6%2Fc52EBqC3DGhecWBVJX9xKB8ef26dB%2BuoLAiB9IrjlbKdVGVTSR9sHaB2V%2FYyH0rI8M2dHikGYp5OMkCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7pqCRDDbtu%2B1v3hKtwDWFW3WUWnkD3VUe4KOgyD1oW%2FmZyeuMoZu581qi%2Fgp6jR9MIt53P8FzJ1vvsz1aXyvmTQn1plbkMP0G2JEMNk7VAma9jp08tLL8XDeEBwlMOS2fcuJFmFJMXPlj9kfLGMKbD%2F17R7B1runQ5awojmG%2FLpyIfWnNqA%2BLLX3u4xxPl15OsHFi6VlIgvd8J%2BTg%2BDMD%2F7uau4x9W%2BUR74ZJ1k8befGaAswk7CrcQgaGk0zLAmDNOkty0unp2nKdsnYf4l21Luzwj%2BaFRmdqXTYWAQOEX8WI6%2FPucL5OWrK3wDSQBkImXNXGqftMsOeQYXqpxQ0mT5zJZcphwTwUf8OSfsGvNm9toZBYtzmK1bgDhX40apCs1Jpwx%2BoM1mvooxHIOMsGfcCzpq9tGXowIEvncWVD1KqXxrTvtdhXG2nzV%2FWLP5mA%2FfjDzXG7vwRxrWRGf1vR2FO9nXc64vevY3ONNkiF7r9I6Md8aQGiduJKSOcE3SIEtXlHiRbd2H8GqE%2BswvJPC27YH4weTfnrV215W0uvCUrEaSKpdlmQel6SVx8rP14y%2Bf0UUPI%2FhggPW%2FcOu0NnIpgAxC%2ByviDJQgiSKyKdy5xdED8JReiPoVavMduJKkaTuzRb%2Bl%2FUM9kh4woamxvwY6pgEuar9Esrs%2BuWIIA3npaItTOHfMFF8CYtszgQ9e7IEfOr0CldsQBgq2vCkahTf3DK1xjs7oNS%2FSLqM1WpBI8%2FXKNQ1SOMqJ6SHQBcEDflrAvn%2FOdsBy3QQnJwYclTJUHwArN1JV7osfAdjJ1BQpdoeUnvhGx1OwFov9nEzl6GLwa6c0FiVqu7a%2BxL4whZZ%2BCr4%2FnYWgs8sGMvfHdbIQxRReGJj2TILo&X-Amz-Signature=618121c13f8e153b8f962cd943074676508258e081f852d39a7085c35673f71b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT65JCXG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFEvE1gDo6%2Fc52EBqC3DGhecWBVJX9xKB8ef26dB%2BuoLAiB9IrjlbKdVGVTSR9sHaB2V%2FYyH0rI8M2dHikGYp5OMkCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7pqCRDDbtu%2B1v3hKtwDWFW3WUWnkD3VUe4KOgyD1oW%2FmZyeuMoZu581qi%2Fgp6jR9MIt53P8FzJ1vvsz1aXyvmTQn1plbkMP0G2JEMNk7VAma9jp08tLL8XDeEBwlMOS2fcuJFmFJMXPlj9kfLGMKbD%2F17R7B1runQ5awojmG%2FLpyIfWnNqA%2BLLX3u4xxPl15OsHFi6VlIgvd8J%2BTg%2BDMD%2F7uau4x9W%2BUR74ZJ1k8befGaAswk7CrcQgaGk0zLAmDNOkty0unp2nKdsnYf4l21Luzwj%2BaFRmdqXTYWAQOEX8WI6%2FPucL5OWrK3wDSQBkImXNXGqftMsOeQYXqpxQ0mT5zJZcphwTwUf8OSfsGvNm9toZBYtzmK1bgDhX40apCs1Jpwx%2BoM1mvooxHIOMsGfcCzpq9tGXowIEvncWVD1KqXxrTvtdhXG2nzV%2FWLP5mA%2FfjDzXG7vwRxrWRGf1vR2FO9nXc64vevY3ONNkiF7r9I6Md8aQGiduJKSOcE3SIEtXlHiRbd2H8GqE%2BswvJPC27YH4weTfnrV215W0uvCUrEaSKpdlmQel6SVx8rP14y%2Bf0UUPI%2FhggPW%2FcOu0NnIpgAxC%2ByviDJQgiSKyKdy5xdED8JReiPoVavMduJKkaTuzRb%2Bl%2FUM9kh4woamxvwY6pgEuar9Esrs%2BuWIIA3npaItTOHfMFF8CYtszgQ9e7IEfOr0CldsQBgq2vCkahTf3DK1xjs7oNS%2FSLqM1WpBI8%2FXKNQ1SOMqJ6SHQBcEDflrAvn%2FOdsBy3QQnJwYclTJUHwArN1JV7osfAdjJ1BQpdoeUnvhGx1OwFov9nEzl6GLwa6c0FiVqu7a%2BxL4whZZ%2BCr4%2FnYWgs8sGMvfHdbIQxRReGJj2TILo&X-Amz-Signature=be159ffb2533adb82fa56c67b3bc7e9e71264efd6f7595820f2bbebd7d240c60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT65JCXG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFEvE1gDo6%2Fc52EBqC3DGhecWBVJX9xKB8ef26dB%2BuoLAiB9IrjlbKdVGVTSR9sHaB2V%2FYyH0rI8M2dHikGYp5OMkCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7pqCRDDbtu%2B1v3hKtwDWFW3WUWnkD3VUe4KOgyD1oW%2FmZyeuMoZu581qi%2Fgp6jR9MIt53P8FzJ1vvsz1aXyvmTQn1plbkMP0G2JEMNk7VAma9jp08tLL8XDeEBwlMOS2fcuJFmFJMXPlj9kfLGMKbD%2F17R7B1runQ5awojmG%2FLpyIfWnNqA%2BLLX3u4xxPl15OsHFi6VlIgvd8J%2BTg%2BDMD%2F7uau4x9W%2BUR74ZJ1k8befGaAswk7CrcQgaGk0zLAmDNOkty0unp2nKdsnYf4l21Luzwj%2BaFRmdqXTYWAQOEX8WI6%2FPucL5OWrK3wDSQBkImXNXGqftMsOeQYXqpxQ0mT5zJZcphwTwUf8OSfsGvNm9toZBYtzmK1bgDhX40apCs1Jpwx%2BoM1mvooxHIOMsGfcCzpq9tGXowIEvncWVD1KqXxrTvtdhXG2nzV%2FWLP5mA%2FfjDzXG7vwRxrWRGf1vR2FO9nXc64vevY3ONNkiF7r9I6Md8aQGiduJKSOcE3SIEtXlHiRbd2H8GqE%2BswvJPC27YH4weTfnrV215W0uvCUrEaSKpdlmQel6SVx8rP14y%2Bf0UUPI%2FhggPW%2FcOu0NnIpgAxC%2ByviDJQgiSKyKdy5xdED8JReiPoVavMduJKkaTuzRb%2Bl%2FUM9kh4woamxvwY6pgEuar9Esrs%2BuWIIA3npaItTOHfMFF8CYtszgQ9e7IEfOr0CldsQBgq2vCkahTf3DK1xjs7oNS%2FSLqM1WpBI8%2FXKNQ1SOMqJ6SHQBcEDflrAvn%2FOdsBy3QQnJwYclTJUHwArN1JV7osfAdjJ1BQpdoeUnvhGx1OwFov9nEzl6GLwa6c0FiVqu7a%2BxL4whZZ%2BCr4%2FnYWgs8sGMvfHdbIQxRReGJj2TILo&X-Amz-Signature=1e8165a1990233e9cca0fca4a7357bdcd6ae205a9b45741e9754187796f95afd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT65JCXG%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T003934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFEvE1gDo6%2Fc52EBqC3DGhecWBVJX9xKB8ef26dB%2BuoLAiB9IrjlbKdVGVTSR9sHaB2V%2FYyH0rI8M2dHikGYp5OMkCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML7pqCRDDbtu%2B1v3hKtwDWFW3WUWnkD3VUe4KOgyD1oW%2FmZyeuMoZu581qi%2Fgp6jR9MIt53P8FzJ1vvsz1aXyvmTQn1plbkMP0G2JEMNk7VAma9jp08tLL8XDeEBwlMOS2fcuJFmFJMXPlj9kfLGMKbD%2F17R7B1runQ5awojmG%2FLpyIfWnNqA%2BLLX3u4xxPl15OsHFi6VlIgvd8J%2BTg%2BDMD%2F7uau4x9W%2BUR74ZJ1k8befGaAswk7CrcQgaGk0zLAmDNOkty0unp2nKdsnYf4l21Luzwj%2BaFRmdqXTYWAQOEX8WI6%2FPucL5OWrK3wDSQBkImXNXGqftMsOeQYXqpxQ0mT5zJZcphwTwUf8OSfsGvNm9toZBYtzmK1bgDhX40apCs1Jpwx%2BoM1mvooxHIOMsGfcCzpq9tGXowIEvncWVD1KqXxrTvtdhXG2nzV%2FWLP5mA%2FfjDzXG7vwRxrWRGf1vR2FO9nXc64vevY3ONNkiF7r9I6Md8aQGiduJKSOcE3SIEtXlHiRbd2H8GqE%2BswvJPC27YH4weTfnrV215W0uvCUrEaSKpdlmQel6SVx8rP14y%2Bf0UUPI%2FhggPW%2FcOu0NnIpgAxC%2ByviDJQgiSKyKdy5xdED8JReiPoVavMduJKkaTuzRb%2Bl%2FUM9kh4woamxvwY6pgEuar9Esrs%2BuWIIA3npaItTOHfMFF8CYtszgQ9e7IEfOr0CldsQBgq2vCkahTf3DK1xjs7oNS%2FSLqM1WpBI8%2FXKNQ1SOMqJ6SHQBcEDflrAvn%2FOdsBy3QQnJwYclTJUHwArN1JV7osfAdjJ1BQpdoeUnvhGx1OwFov9nEzl6GLwa6c0FiVqu7a%2BxL4whZZ%2BCr4%2FnYWgs8sGMvfHdbIQxRReGJj2TILo&X-Amz-Signature=115efcb6792d16e60f2bf0e200fec71f19ac2e0c4eef678821a393dc53a02f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
