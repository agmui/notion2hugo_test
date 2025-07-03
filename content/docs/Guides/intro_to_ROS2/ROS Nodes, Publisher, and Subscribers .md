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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQWO7VXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICMs7%2F8WMjnbKZoMKKXJMCOB6PKh1%2BvZckjCaofl1ZNUAiA1PYeKvJLCFmNwbXXQY0g3WvIeRxXGeCxuTzd1OOuzmyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMyISVV7f5W8H6DCKcKtwDPj%2BWfeHa7m%2FalRVghbl%2FcTiTuXARW4cCz5Xry9w%2F2nIB%2F2RydudxsD8thFeMHAWmhkG23eRFT5uGTPjuh5h7ObJcbUQ0svGINCzmXcavrSx%2FzaI5u5oO3Gb82oANYpTsv%2BZpQvv5S5ACckFwG7wio5NajaZGu1k0hbwSFBw%2Ff2mhSGc%2BG%2Bz%2FuGL%2FsSUt0zdng48zDnu%2B3UBOHzPOLR46Sen7jvF8AKznyLM3oyaMraNLCc7yCtyEBWuhR9e5TTL%2F3xm%2B%2Bxc8rITfk1aqaGtHcZgXXKuOQ8PsEmFehIRGDp%2BcZ%2FZWpBZTB1FvVYib8H2gK%2B305Adg9zD%2FZBr6STXQA3yvUp%2FnZAqNFkggARIDYWlnWY4jqaaIBHXFUaQuifK4H3iLG1CgEXdcUW4DuH8DiEMqSW6vg8A8Gba5WT4B%2Br6YHHqT2bYt0PVZFg47B3wQhLtnXP92%2BOwC%2FSv0Nl69wfyEo9Mn%2BH%2FFkFQbE3wNzFrIXN9YrGuM6pefppkuopmxEM7eCiaaa%2BFI%2BKy85v01hJSeHhyFpWeI2sGiYK9drDJF7kN8yUUnT2bSOrTf1d17Jya1KQrmOAhuyvxF4Fp33Ze%2FkGjgZDMLy%2FYZHGJEperceL1ops8D4rUEHnMwhrmawwY6pgHfQTHSFyWLvLr7BDJPEfCTYuVOnzqjpuviAQ0CUzOMhHY5JoxDcQZ0GMMFgujLJfodQJRGDc9zVP9jEFWPiLNYBkm%2BAK%2FuEhaLMlNPO2msOKKjMQZ2bWhBlyylP8ggwMFgtyF9epEo%2B9LPP6uGZA3ki42K3Da7nb%2F%2BE4wI8NnmAWMQeiJpaJnxpoqAnjCwKEojPfRE%2FhTKJxERrBxqlqKwWf7VLNwJ&X-Amz-Signature=f367da0a2e3f3f4175c3726be370b9e517b39cb027fc8783b672064da4e396b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQWO7VXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICMs7%2F8WMjnbKZoMKKXJMCOB6PKh1%2BvZckjCaofl1ZNUAiA1PYeKvJLCFmNwbXXQY0g3WvIeRxXGeCxuTzd1OOuzmyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMyISVV7f5W8H6DCKcKtwDPj%2BWfeHa7m%2FalRVghbl%2FcTiTuXARW4cCz5Xry9w%2F2nIB%2F2RydudxsD8thFeMHAWmhkG23eRFT5uGTPjuh5h7ObJcbUQ0svGINCzmXcavrSx%2FzaI5u5oO3Gb82oANYpTsv%2BZpQvv5S5ACckFwG7wio5NajaZGu1k0hbwSFBw%2Ff2mhSGc%2BG%2Bz%2FuGL%2FsSUt0zdng48zDnu%2B3UBOHzPOLR46Sen7jvF8AKznyLM3oyaMraNLCc7yCtyEBWuhR9e5TTL%2F3xm%2B%2Bxc8rITfk1aqaGtHcZgXXKuOQ8PsEmFehIRGDp%2BcZ%2FZWpBZTB1FvVYib8H2gK%2B305Adg9zD%2FZBr6STXQA3yvUp%2FnZAqNFkggARIDYWlnWY4jqaaIBHXFUaQuifK4H3iLG1CgEXdcUW4DuH8DiEMqSW6vg8A8Gba5WT4B%2Br6YHHqT2bYt0PVZFg47B3wQhLtnXP92%2BOwC%2FSv0Nl69wfyEo9Mn%2BH%2FFkFQbE3wNzFrIXN9YrGuM6pefppkuopmxEM7eCiaaa%2BFI%2BKy85v01hJSeHhyFpWeI2sGiYK9drDJF7kN8yUUnT2bSOrTf1d17Jya1KQrmOAhuyvxF4Fp33Ze%2FkGjgZDMLy%2FYZHGJEperceL1ops8D4rUEHnMwhrmawwY6pgHfQTHSFyWLvLr7BDJPEfCTYuVOnzqjpuviAQ0CUzOMhHY5JoxDcQZ0GMMFgujLJfodQJRGDc9zVP9jEFWPiLNYBkm%2BAK%2FuEhaLMlNPO2msOKKjMQZ2bWhBlyylP8ggwMFgtyF9epEo%2B9LPP6uGZA3ki42K3Da7nb%2F%2BE4wI8NnmAWMQeiJpaJnxpoqAnjCwKEojPfRE%2FhTKJxERrBxqlqKwWf7VLNwJ&X-Amz-Signature=ad43c8b5d94ad23e3c65e9727f982a02212241bbb64f1b7af1efe11ef52a459d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQWO7VXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICMs7%2F8WMjnbKZoMKKXJMCOB6PKh1%2BvZckjCaofl1ZNUAiA1PYeKvJLCFmNwbXXQY0g3WvIeRxXGeCxuTzd1OOuzmyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMyISVV7f5W8H6DCKcKtwDPj%2BWfeHa7m%2FalRVghbl%2FcTiTuXARW4cCz5Xry9w%2F2nIB%2F2RydudxsD8thFeMHAWmhkG23eRFT5uGTPjuh5h7ObJcbUQ0svGINCzmXcavrSx%2FzaI5u5oO3Gb82oANYpTsv%2BZpQvv5S5ACckFwG7wio5NajaZGu1k0hbwSFBw%2Ff2mhSGc%2BG%2Bz%2FuGL%2FsSUt0zdng48zDnu%2B3UBOHzPOLR46Sen7jvF8AKznyLM3oyaMraNLCc7yCtyEBWuhR9e5TTL%2F3xm%2B%2Bxc8rITfk1aqaGtHcZgXXKuOQ8PsEmFehIRGDp%2BcZ%2FZWpBZTB1FvVYib8H2gK%2B305Adg9zD%2FZBr6STXQA3yvUp%2FnZAqNFkggARIDYWlnWY4jqaaIBHXFUaQuifK4H3iLG1CgEXdcUW4DuH8DiEMqSW6vg8A8Gba5WT4B%2Br6YHHqT2bYt0PVZFg47B3wQhLtnXP92%2BOwC%2FSv0Nl69wfyEo9Mn%2BH%2FFkFQbE3wNzFrIXN9YrGuM6pefppkuopmxEM7eCiaaa%2BFI%2BKy85v01hJSeHhyFpWeI2sGiYK9drDJF7kN8yUUnT2bSOrTf1d17Jya1KQrmOAhuyvxF4Fp33Ze%2FkGjgZDMLy%2FYZHGJEperceL1ops8D4rUEHnMwhrmawwY6pgHfQTHSFyWLvLr7BDJPEfCTYuVOnzqjpuviAQ0CUzOMhHY5JoxDcQZ0GMMFgujLJfodQJRGDc9zVP9jEFWPiLNYBkm%2BAK%2FuEhaLMlNPO2msOKKjMQZ2bWhBlyylP8ggwMFgtyF9epEo%2B9LPP6uGZA3ki42K3Da7nb%2F%2BE4wI8NnmAWMQeiJpaJnxpoqAnjCwKEojPfRE%2FhTKJxERrBxqlqKwWf7VLNwJ&X-Amz-Signature=c0110509ad32bcc40471f3abcb651b66b6fcea578e49496db03af1be0fc9386e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQWO7VXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICMs7%2F8WMjnbKZoMKKXJMCOB6PKh1%2BvZckjCaofl1ZNUAiA1PYeKvJLCFmNwbXXQY0g3WvIeRxXGeCxuTzd1OOuzmyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMyISVV7f5W8H6DCKcKtwDPj%2BWfeHa7m%2FalRVghbl%2FcTiTuXARW4cCz5Xry9w%2F2nIB%2F2RydudxsD8thFeMHAWmhkG23eRFT5uGTPjuh5h7ObJcbUQ0svGINCzmXcavrSx%2FzaI5u5oO3Gb82oANYpTsv%2BZpQvv5S5ACckFwG7wio5NajaZGu1k0hbwSFBw%2Ff2mhSGc%2BG%2Bz%2FuGL%2FsSUt0zdng48zDnu%2B3UBOHzPOLR46Sen7jvF8AKznyLM3oyaMraNLCc7yCtyEBWuhR9e5TTL%2F3xm%2B%2Bxc8rITfk1aqaGtHcZgXXKuOQ8PsEmFehIRGDp%2BcZ%2FZWpBZTB1FvVYib8H2gK%2B305Adg9zD%2FZBr6STXQA3yvUp%2FnZAqNFkggARIDYWlnWY4jqaaIBHXFUaQuifK4H3iLG1CgEXdcUW4DuH8DiEMqSW6vg8A8Gba5WT4B%2Br6YHHqT2bYt0PVZFg47B3wQhLtnXP92%2BOwC%2FSv0Nl69wfyEo9Mn%2BH%2FFkFQbE3wNzFrIXN9YrGuM6pefppkuopmxEM7eCiaaa%2BFI%2BKy85v01hJSeHhyFpWeI2sGiYK9drDJF7kN8yUUnT2bSOrTf1d17Jya1KQrmOAhuyvxF4Fp33Ze%2FkGjgZDMLy%2FYZHGJEperceL1ops8D4rUEHnMwhrmawwY6pgHfQTHSFyWLvLr7BDJPEfCTYuVOnzqjpuviAQ0CUzOMhHY5JoxDcQZ0GMMFgujLJfodQJRGDc9zVP9jEFWPiLNYBkm%2BAK%2FuEhaLMlNPO2msOKKjMQZ2bWhBlyylP8ggwMFgtyF9epEo%2B9LPP6uGZA3ki42K3Da7nb%2F%2BE4wI8NnmAWMQeiJpaJnxpoqAnjCwKEojPfRE%2FhTKJxERrBxqlqKwWf7VLNwJ&X-Amz-Signature=b7c9d617ab0966b90aa30d731642e21ef22f8d37f7716aca05789e768e63e2b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQWO7VXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICMs7%2F8WMjnbKZoMKKXJMCOB6PKh1%2BvZckjCaofl1ZNUAiA1PYeKvJLCFmNwbXXQY0g3WvIeRxXGeCxuTzd1OOuzmyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMyISVV7f5W8H6DCKcKtwDPj%2BWfeHa7m%2FalRVghbl%2FcTiTuXARW4cCz5Xry9w%2F2nIB%2F2RydudxsD8thFeMHAWmhkG23eRFT5uGTPjuh5h7ObJcbUQ0svGINCzmXcavrSx%2FzaI5u5oO3Gb82oANYpTsv%2BZpQvv5S5ACckFwG7wio5NajaZGu1k0hbwSFBw%2Ff2mhSGc%2BG%2Bz%2FuGL%2FsSUt0zdng48zDnu%2B3UBOHzPOLR46Sen7jvF8AKznyLM3oyaMraNLCc7yCtyEBWuhR9e5TTL%2F3xm%2B%2Bxc8rITfk1aqaGtHcZgXXKuOQ8PsEmFehIRGDp%2BcZ%2FZWpBZTB1FvVYib8H2gK%2B305Adg9zD%2FZBr6STXQA3yvUp%2FnZAqNFkggARIDYWlnWY4jqaaIBHXFUaQuifK4H3iLG1CgEXdcUW4DuH8DiEMqSW6vg8A8Gba5WT4B%2Br6YHHqT2bYt0PVZFg47B3wQhLtnXP92%2BOwC%2FSv0Nl69wfyEo9Mn%2BH%2FFkFQbE3wNzFrIXN9YrGuM6pefppkuopmxEM7eCiaaa%2BFI%2BKy85v01hJSeHhyFpWeI2sGiYK9drDJF7kN8yUUnT2bSOrTf1d17Jya1KQrmOAhuyvxF4Fp33Ze%2FkGjgZDMLy%2FYZHGJEperceL1ops8D4rUEHnMwhrmawwY6pgHfQTHSFyWLvLr7BDJPEfCTYuVOnzqjpuviAQ0CUzOMhHY5JoxDcQZ0GMMFgujLJfodQJRGDc9zVP9jEFWPiLNYBkm%2BAK%2FuEhaLMlNPO2msOKKjMQZ2bWhBlyylP8ggwMFgtyF9epEo%2B9LPP6uGZA3ki42K3Da7nb%2F%2BE4wI8NnmAWMQeiJpaJnxpoqAnjCwKEojPfRE%2FhTKJxERrBxqlqKwWf7VLNwJ&X-Amz-Signature=78fffcb1c678a99a6ef2f8222b529feef5ce7786a41e0dd677baba6775aa9e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQWO7VXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICMs7%2F8WMjnbKZoMKKXJMCOB6PKh1%2BvZckjCaofl1ZNUAiA1PYeKvJLCFmNwbXXQY0g3WvIeRxXGeCxuTzd1OOuzmyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMyISVV7f5W8H6DCKcKtwDPj%2BWfeHa7m%2FalRVghbl%2FcTiTuXARW4cCz5Xry9w%2F2nIB%2F2RydudxsD8thFeMHAWmhkG23eRFT5uGTPjuh5h7ObJcbUQ0svGINCzmXcavrSx%2FzaI5u5oO3Gb82oANYpTsv%2BZpQvv5S5ACckFwG7wio5NajaZGu1k0hbwSFBw%2Ff2mhSGc%2BG%2Bz%2FuGL%2FsSUt0zdng48zDnu%2B3UBOHzPOLR46Sen7jvF8AKznyLM3oyaMraNLCc7yCtyEBWuhR9e5TTL%2F3xm%2B%2Bxc8rITfk1aqaGtHcZgXXKuOQ8PsEmFehIRGDp%2BcZ%2FZWpBZTB1FvVYib8H2gK%2B305Adg9zD%2FZBr6STXQA3yvUp%2FnZAqNFkggARIDYWlnWY4jqaaIBHXFUaQuifK4H3iLG1CgEXdcUW4DuH8DiEMqSW6vg8A8Gba5WT4B%2Br6YHHqT2bYt0PVZFg47B3wQhLtnXP92%2BOwC%2FSv0Nl69wfyEo9Mn%2BH%2FFkFQbE3wNzFrIXN9YrGuM6pefppkuopmxEM7eCiaaa%2BFI%2BKy85v01hJSeHhyFpWeI2sGiYK9drDJF7kN8yUUnT2bSOrTf1d17Jya1KQrmOAhuyvxF4Fp33Ze%2FkGjgZDMLy%2FYZHGJEperceL1ops8D4rUEHnMwhrmawwY6pgHfQTHSFyWLvLr7BDJPEfCTYuVOnzqjpuviAQ0CUzOMhHY5JoxDcQZ0GMMFgujLJfodQJRGDc9zVP9jEFWPiLNYBkm%2BAK%2FuEhaLMlNPO2msOKKjMQZ2bWhBlyylP8ggwMFgtyF9epEo%2B9LPP6uGZA3ki42K3Da7nb%2F%2BE4wI8NnmAWMQeiJpaJnxpoqAnjCwKEojPfRE%2FhTKJxERrBxqlqKwWf7VLNwJ&X-Amz-Signature=d2f6b45f5bcc1c6850a4c863a6de5fcc1b482680b29baed95dcec1283cb6c353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQWO7VXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICMs7%2F8WMjnbKZoMKKXJMCOB6PKh1%2BvZckjCaofl1ZNUAiA1PYeKvJLCFmNwbXXQY0g3WvIeRxXGeCxuTzd1OOuzmyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMyISVV7f5W8H6DCKcKtwDPj%2BWfeHa7m%2FalRVghbl%2FcTiTuXARW4cCz5Xry9w%2F2nIB%2F2RydudxsD8thFeMHAWmhkG23eRFT5uGTPjuh5h7ObJcbUQ0svGINCzmXcavrSx%2FzaI5u5oO3Gb82oANYpTsv%2BZpQvv5S5ACckFwG7wio5NajaZGu1k0hbwSFBw%2Ff2mhSGc%2BG%2Bz%2FuGL%2FsSUt0zdng48zDnu%2B3UBOHzPOLR46Sen7jvF8AKznyLM3oyaMraNLCc7yCtyEBWuhR9e5TTL%2F3xm%2B%2Bxc8rITfk1aqaGtHcZgXXKuOQ8PsEmFehIRGDp%2BcZ%2FZWpBZTB1FvVYib8H2gK%2B305Adg9zD%2FZBr6STXQA3yvUp%2FnZAqNFkggARIDYWlnWY4jqaaIBHXFUaQuifK4H3iLG1CgEXdcUW4DuH8DiEMqSW6vg8A8Gba5WT4B%2Br6YHHqT2bYt0PVZFg47B3wQhLtnXP92%2BOwC%2FSv0Nl69wfyEo9Mn%2BH%2FFkFQbE3wNzFrIXN9YrGuM6pefppkuopmxEM7eCiaaa%2BFI%2BKy85v01hJSeHhyFpWeI2sGiYK9drDJF7kN8yUUnT2bSOrTf1d17Jya1KQrmOAhuyvxF4Fp33Ze%2FkGjgZDMLy%2FYZHGJEperceL1ops8D4rUEHnMwhrmawwY6pgHfQTHSFyWLvLr7BDJPEfCTYuVOnzqjpuviAQ0CUzOMhHY5JoxDcQZ0GMMFgujLJfodQJRGDc9zVP9jEFWPiLNYBkm%2BAK%2FuEhaLMlNPO2msOKKjMQZ2bWhBlyylP8ggwMFgtyF9epEo%2B9LPP6uGZA3ki42K3Da7nb%2F%2BE4wI8NnmAWMQeiJpaJnxpoqAnjCwKEojPfRE%2FhTKJxERrBxqlqKwWf7VLNwJ&X-Amz-Signature=16e2cf679eb65fe9f733ce38ea55078b14121dd1c89428daf866f3f121fbbf3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQWO7VXR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCICMs7%2F8WMjnbKZoMKKXJMCOB6PKh1%2BvZckjCaofl1ZNUAiA1PYeKvJLCFmNwbXXQY0g3WvIeRxXGeCxuTzd1OOuzmyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMyISVV7f5W8H6DCKcKtwDPj%2BWfeHa7m%2FalRVghbl%2FcTiTuXARW4cCz5Xry9w%2F2nIB%2F2RydudxsD8thFeMHAWmhkG23eRFT5uGTPjuh5h7ObJcbUQ0svGINCzmXcavrSx%2FzaI5u5oO3Gb82oANYpTsv%2BZpQvv5S5ACckFwG7wio5NajaZGu1k0hbwSFBw%2Ff2mhSGc%2BG%2Bz%2FuGL%2FsSUt0zdng48zDnu%2B3UBOHzPOLR46Sen7jvF8AKznyLM3oyaMraNLCc7yCtyEBWuhR9e5TTL%2F3xm%2B%2Bxc8rITfk1aqaGtHcZgXXKuOQ8PsEmFehIRGDp%2BcZ%2FZWpBZTB1FvVYib8H2gK%2B305Adg9zD%2FZBr6STXQA3yvUp%2FnZAqNFkggARIDYWlnWY4jqaaIBHXFUaQuifK4H3iLG1CgEXdcUW4DuH8DiEMqSW6vg8A8Gba5WT4B%2Br6YHHqT2bYt0PVZFg47B3wQhLtnXP92%2BOwC%2FSv0Nl69wfyEo9Mn%2BH%2FFkFQbE3wNzFrIXN9YrGuM6pefppkuopmxEM7eCiaaa%2BFI%2BKy85v01hJSeHhyFpWeI2sGiYK9drDJF7kN8yUUnT2bSOrTf1d17Jya1KQrmOAhuyvxF4Fp33Ze%2FkGjgZDMLy%2FYZHGJEperceL1ops8D4rUEHnMwhrmawwY6pgHfQTHSFyWLvLr7BDJPEfCTYuVOnzqjpuviAQ0CUzOMhHY5JoxDcQZ0GMMFgujLJfodQJRGDc9zVP9jEFWPiLNYBkm%2BAK%2FuEhaLMlNPO2msOKKjMQZ2bWhBlyylP8ggwMFgtyF9epEo%2B9LPP6uGZA3ki42K3Da7nb%2F%2BE4wI8NnmAWMQeiJpaJnxpoqAnjCwKEojPfRE%2FhTKJxERrBxqlqKwWf7VLNwJ&X-Amz-Signature=c63eaa108aaed84cacab526997a89da9f7568cebaa6569d0ef739dd5e2e7df4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
