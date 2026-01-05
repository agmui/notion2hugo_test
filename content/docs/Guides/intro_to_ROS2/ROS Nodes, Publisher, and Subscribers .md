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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZHE5SZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCEoW7Pq9AnkB8R%2B4D3DND7mNsquQPT8D8Ly%2FVjHmGAPwIhAPRMUg9fK8AOaXYcyMKaEkEfL0n2oURMN9ZTcbU3Vk%2FDKv8DCDYQABoMNjM3NDIzMTgzODA1Igwa2WdeA1EpJ7%2FS%2FtUq3AO2GnyaQuuPBW1HjerrgOGhFgGmh64vP1R9SZ9b5bCbQlV9ioz9%2FHofkTYfJNahG%2BoGSytDcONgc4XZdGHXWrTqhIzQDUcxO2wNIkFQ4lT7VcaHfUdMxpdpTWqQunaxlmuCVU1WxJyitv9zyGpWNASqZUx4r%2FAe2MXq5GtjpsjWsYwLZV4%2BSejphsVLbvP285fCUQ0qir7FIfAOdyIaDcuPQPxDwBTxVSRYPApCUiX8eO%2B9eW1zKam%2FFRySNUP1ViCqzzS3GDLr9%2FXoWprbOVkSNhkZ0vk6FRCkN0oHFnHTXiserLzjQhFQyEKdoQO6KQ0%2F4KaYbnL9SjdK3C9zaOtCXuMLtbZuPmQJHfvZFty6SEIVhvnDN2Y5y6urR8jhubSZYP0tG66GfQMUFxDpvmEfH00azwsjf50G34re4RiB9K0JbLDhetQ3s9XfXfdb2EpzQnpjKQDn8aEUErf46l%2FBommNpIqVuo9RqH%2FwQR9DffJlALeetnE9Zhkuxr4mOyuencOcakPh2khyEgVUMhTUQEsypJ2yI%2By%2BIuj%2BiEj07%2Fb%2Bf8N%2B6vvGuq2ggoKhtmQul9rJlXaDjKT3UVxfaNgas0JDlnmHn3uN2zpkmZRm9LlwflqJNZT2Cib%2BZTC1o%2BvKBjqkAf5d%2B5i3rKO%2BPOHn9rRzBUWG1UganD%2FJylixsJYPvPxcCQJ%2Ba%2BPRIPr%2B4AthiYl8A4WJhrnBPDKY7U%2FUdCWEAqpC12d6Cbdmlj%2F1QiI22Z%2BIJcsyt3bCnGbcWMK8NEQAbhfZwYaJv88rJI3sHYr9GVDWz4fsQDp4%2FHP5wntL%2B2sphkk6FZEws6BJ36OT0W9so%2BRj%2BR4R7vhI4jpIm24VFV2GNqwW&X-Amz-Signature=7462f68490c9cbf9b29acf02fdf0c9a9489464fbf2eccb74d3b4af0429437933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZHE5SZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCEoW7Pq9AnkB8R%2B4D3DND7mNsquQPT8D8Ly%2FVjHmGAPwIhAPRMUg9fK8AOaXYcyMKaEkEfL0n2oURMN9ZTcbU3Vk%2FDKv8DCDYQABoMNjM3NDIzMTgzODA1Igwa2WdeA1EpJ7%2FS%2FtUq3AO2GnyaQuuPBW1HjerrgOGhFgGmh64vP1R9SZ9b5bCbQlV9ioz9%2FHofkTYfJNahG%2BoGSytDcONgc4XZdGHXWrTqhIzQDUcxO2wNIkFQ4lT7VcaHfUdMxpdpTWqQunaxlmuCVU1WxJyitv9zyGpWNASqZUx4r%2FAe2MXq5GtjpsjWsYwLZV4%2BSejphsVLbvP285fCUQ0qir7FIfAOdyIaDcuPQPxDwBTxVSRYPApCUiX8eO%2B9eW1zKam%2FFRySNUP1ViCqzzS3GDLr9%2FXoWprbOVkSNhkZ0vk6FRCkN0oHFnHTXiserLzjQhFQyEKdoQO6KQ0%2F4KaYbnL9SjdK3C9zaOtCXuMLtbZuPmQJHfvZFty6SEIVhvnDN2Y5y6urR8jhubSZYP0tG66GfQMUFxDpvmEfH00azwsjf50G34re4RiB9K0JbLDhetQ3s9XfXfdb2EpzQnpjKQDn8aEUErf46l%2FBommNpIqVuo9RqH%2FwQR9DffJlALeetnE9Zhkuxr4mOyuencOcakPh2khyEgVUMhTUQEsypJ2yI%2By%2BIuj%2BiEj07%2Fb%2Bf8N%2B6vvGuq2ggoKhtmQul9rJlXaDjKT3UVxfaNgas0JDlnmHn3uN2zpkmZRm9LlwflqJNZT2Cib%2BZTC1o%2BvKBjqkAf5d%2B5i3rKO%2BPOHn9rRzBUWG1UganD%2FJylixsJYPvPxcCQJ%2Ba%2BPRIPr%2B4AthiYl8A4WJhrnBPDKY7U%2FUdCWEAqpC12d6Cbdmlj%2F1QiI22Z%2BIJcsyt3bCnGbcWMK8NEQAbhfZwYaJv88rJI3sHYr9GVDWz4fsQDp4%2FHP5wntL%2B2sphkk6FZEws6BJ36OT0W9so%2BRj%2BR4R7vhI4jpIm24VFV2GNqwW&X-Amz-Signature=e094d666ede9729f925405f6ac014aeaaf7dccb66f53a08361501a6eea982ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZHE5SZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCEoW7Pq9AnkB8R%2B4D3DND7mNsquQPT8D8Ly%2FVjHmGAPwIhAPRMUg9fK8AOaXYcyMKaEkEfL0n2oURMN9ZTcbU3Vk%2FDKv8DCDYQABoMNjM3NDIzMTgzODA1Igwa2WdeA1EpJ7%2FS%2FtUq3AO2GnyaQuuPBW1HjerrgOGhFgGmh64vP1R9SZ9b5bCbQlV9ioz9%2FHofkTYfJNahG%2BoGSytDcONgc4XZdGHXWrTqhIzQDUcxO2wNIkFQ4lT7VcaHfUdMxpdpTWqQunaxlmuCVU1WxJyitv9zyGpWNASqZUx4r%2FAe2MXq5GtjpsjWsYwLZV4%2BSejphsVLbvP285fCUQ0qir7FIfAOdyIaDcuPQPxDwBTxVSRYPApCUiX8eO%2B9eW1zKam%2FFRySNUP1ViCqzzS3GDLr9%2FXoWprbOVkSNhkZ0vk6FRCkN0oHFnHTXiserLzjQhFQyEKdoQO6KQ0%2F4KaYbnL9SjdK3C9zaOtCXuMLtbZuPmQJHfvZFty6SEIVhvnDN2Y5y6urR8jhubSZYP0tG66GfQMUFxDpvmEfH00azwsjf50G34re4RiB9K0JbLDhetQ3s9XfXfdb2EpzQnpjKQDn8aEUErf46l%2FBommNpIqVuo9RqH%2FwQR9DffJlALeetnE9Zhkuxr4mOyuencOcakPh2khyEgVUMhTUQEsypJ2yI%2By%2BIuj%2BiEj07%2Fb%2Bf8N%2B6vvGuq2ggoKhtmQul9rJlXaDjKT3UVxfaNgas0JDlnmHn3uN2zpkmZRm9LlwflqJNZT2Cib%2BZTC1o%2BvKBjqkAf5d%2B5i3rKO%2BPOHn9rRzBUWG1UganD%2FJylixsJYPvPxcCQJ%2Ba%2BPRIPr%2B4AthiYl8A4WJhrnBPDKY7U%2FUdCWEAqpC12d6Cbdmlj%2F1QiI22Z%2BIJcsyt3bCnGbcWMK8NEQAbhfZwYaJv88rJI3sHYr9GVDWz4fsQDp4%2FHP5wntL%2B2sphkk6FZEws6BJ36OT0W9so%2BRj%2BR4R7vhI4jpIm24VFV2GNqwW&X-Amz-Signature=306e79b2fef5b2fc47eeb487524f6989ec8781d28e1f707e6612eee8ef07ce98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZHE5SZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCEoW7Pq9AnkB8R%2B4D3DND7mNsquQPT8D8Ly%2FVjHmGAPwIhAPRMUg9fK8AOaXYcyMKaEkEfL0n2oURMN9ZTcbU3Vk%2FDKv8DCDYQABoMNjM3NDIzMTgzODA1Igwa2WdeA1EpJ7%2FS%2FtUq3AO2GnyaQuuPBW1HjerrgOGhFgGmh64vP1R9SZ9b5bCbQlV9ioz9%2FHofkTYfJNahG%2BoGSytDcONgc4XZdGHXWrTqhIzQDUcxO2wNIkFQ4lT7VcaHfUdMxpdpTWqQunaxlmuCVU1WxJyitv9zyGpWNASqZUx4r%2FAe2MXq5GtjpsjWsYwLZV4%2BSejphsVLbvP285fCUQ0qir7FIfAOdyIaDcuPQPxDwBTxVSRYPApCUiX8eO%2B9eW1zKam%2FFRySNUP1ViCqzzS3GDLr9%2FXoWprbOVkSNhkZ0vk6FRCkN0oHFnHTXiserLzjQhFQyEKdoQO6KQ0%2F4KaYbnL9SjdK3C9zaOtCXuMLtbZuPmQJHfvZFty6SEIVhvnDN2Y5y6urR8jhubSZYP0tG66GfQMUFxDpvmEfH00azwsjf50G34re4RiB9K0JbLDhetQ3s9XfXfdb2EpzQnpjKQDn8aEUErf46l%2FBommNpIqVuo9RqH%2FwQR9DffJlALeetnE9Zhkuxr4mOyuencOcakPh2khyEgVUMhTUQEsypJ2yI%2By%2BIuj%2BiEj07%2Fb%2Bf8N%2B6vvGuq2ggoKhtmQul9rJlXaDjKT3UVxfaNgas0JDlnmHn3uN2zpkmZRm9LlwflqJNZT2Cib%2BZTC1o%2BvKBjqkAf5d%2B5i3rKO%2BPOHn9rRzBUWG1UganD%2FJylixsJYPvPxcCQJ%2Ba%2BPRIPr%2B4AthiYl8A4WJhrnBPDKY7U%2FUdCWEAqpC12d6Cbdmlj%2F1QiI22Z%2BIJcsyt3bCnGbcWMK8NEQAbhfZwYaJv88rJI3sHYr9GVDWz4fsQDp4%2FHP5wntL%2B2sphkk6FZEws6BJ36OT0W9so%2BRj%2BR4R7vhI4jpIm24VFV2GNqwW&X-Amz-Signature=0979ae22e2fc78f39c2f7df3e3d00652621cb59b61b671f7623637ce1692b8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZHE5SZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCEoW7Pq9AnkB8R%2B4D3DND7mNsquQPT8D8Ly%2FVjHmGAPwIhAPRMUg9fK8AOaXYcyMKaEkEfL0n2oURMN9ZTcbU3Vk%2FDKv8DCDYQABoMNjM3NDIzMTgzODA1Igwa2WdeA1EpJ7%2FS%2FtUq3AO2GnyaQuuPBW1HjerrgOGhFgGmh64vP1R9SZ9b5bCbQlV9ioz9%2FHofkTYfJNahG%2BoGSytDcONgc4XZdGHXWrTqhIzQDUcxO2wNIkFQ4lT7VcaHfUdMxpdpTWqQunaxlmuCVU1WxJyitv9zyGpWNASqZUx4r%2FAe2MXq5GtjpsjWsYwLZV4%2BSejphsVLbvP285fCUQ0qir7FIfAOdyIaDcuPQPxDwBTxVSRYPApCUiX8eO%2B9eW1zKam%2FFRySNUP1ViCqzzS3GDLr9%2FXoWprbOVkSNhkZ0vk6FRCkN0oHFnHTXiserLzjQhFQyEKdoQO6KQ0%2F4KaYbnL9SjdK3C9zaOtCXuMLtbZuPmQJHfvZFty6SEIVhvnDN2Y5y6urR8jhubSZYP0tG66GfQMUFxDpvmEfH00azwsjf50G34re4RiB9K0JbLDhetQ3s9XfXfdb2EpzQnpjKQDn8aEUErf46l%2FBommNpIqVuo9RqH%2FwQR9DffJlALeetnE9Zhkuxr4mOyuencOcakPh2khyEgVUMhTUQEsypJ2yI%2By%2BIuj%2BiEj07%2Fb%2Bf8N%2B6vvGuq2ggoKhtmQul9rJlXaDjKT3UVxfaNgas0JDlnmHn3uN2zpkmZRm9LlwflqJNZT2Cib%2BZTC1o%2BvKBjqkAf5d%2B5i3rKO%2BPOHn9rRzBUWG1UganD%2FJylixsJYPvPxcCQJ%2Ba%2BPRIPr%2B4AthiYl8A4WJhrnBPDKY7U%2FUdCWEAqpC12d6Cbdmlj%2F1QiI22Z%2BIJcsyt3bCnGbcWMK8NEQAbhfZwYaJv88rJI3sHYr9GVDWz4fsQDp4%2FHP5wntL%2B2sphkk6FZEws6BJ36OT0W9so%2BRj%2BR4R7vhI4jpIm24VFV2GNqwW&X-Amz-Signature=4a2bcdb16c310d348381ee6c9e641d8c3a21ae2c319a51c4e4140eb583daa062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZHE5SZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCEoW7Pq9AnkB8R%2B4D3DND7mNsquQPT8D8Ly%2FVjHmGAPwIhAPRMUg9fK8AOaXYcyMKaEkEfL0n2oURMN9ZTcbU3Vk%2FDKv8DCDYQABoMNjM3NDIzMTgzODA1Igwa2WdeA1EpJ7%2FS%2FtUq3AO2GnyaQuuPBW1HjerrgOGhFgGmh64vP1R9SZ9b5bCbQlV9ioz9%2FHofkTYfJNahG%2BoGSytDcONgc4XZdGHXWrTqhIzQDUcxO2wNIkFQ4lT7VcaHfUdMxpdpTWqQunaxlmuCVU1WxJyitv9zyGpWNASqZUx4r%2FAe2MXq5GtjpsjWsYwLZV4%2BSejphsVLbvP285fCUQ0qir7FIfAOdyIaDcuPQPxDwBTxVSRYPApCUiX8eO%2B9eW1zKam%2FFRySNUP1ViCqzzS3GDLr9%2FXoWprbOVkSNhkZ0vk6FRCkN0oHFnHTXiserLzjQhFQyEKdoQO6KQ0%2F4KaYbnL9SjdK3C9zaOtCXuMLtbZuPmQJHfvZFty6SEIVhvnDN2Y5y6urR8jhubSZYP0tG66GfQMUFxDpvmEfH00azwsjf50G34re4RiB9K0JbLDhetQ3s9XfXfdb2EpzQnpjKQDn8aEUErf46l%2FBommNpIqVuo9RqH%2FwQR9DffJlALeetnE9Zhkuxr4mOyuencOcakPh2khyEgVUMhTUQEsypJ2yI%2By%2BIuj%2BiEj07%2Fb%2Bf8N%2B6vvGuq2ggoKhtmQul9rJlXaDjKT3UVxfaNgas0JDlnmHn3uN2zpkmZRm9LlwflqJNZT2Cib%2BZTC1o%2BvKBjqkAf5d%2B5i3rKO%2BPOHn9rRzBUWG1UganD%2FJylixsJYPvPxcCQJ%2Ba%2BPRIPr%2B4AthiYl8A4WJhrnBPDKY7U%2FUdCWEAqpC12d6Cbdmlj%2F1QiI22Z%2BIJcsyt3bCnGbcWMK8NEQAbhfZwYaJv88rJI3sHYr9GVDWz4fsQDp4%2FHP5wntL%2B2sphkk6FZEws6BJ36OT0W9so%2BRj%2BR4R7vhI4jpIm24VFV2GNqwW&X-Amz-Signature=755281d5bfa74fdc5f3755d9a033f19e5e1c7c26372263525590a2f6403f0dbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZHE5SZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCEoW7Pq9AnkB8R%2B4D3DND7mNsquQPT8D8Ly%2FVjHmGAPwIhAPRMUg9fK8AOaXYcyMKaEkEfL0n2oURMN9ZTcbU3Vk%2FDKv8DCDYQABoMNjM3NDIzMTgzODA1Igwa2WdeA1EpJ7%2FS%2FtUq3AO2GnyaQuuPBW1HjerrgOGhFgGmh64vP1R9SZ9b5bCbQlV9ioz9%2FHofkTYfJNahG%2BoGSytDcONgc4XZdGHXWrTqhIzQDUcxO2wNIkFQ4lT7VcaHfUdMxpdpTWqQunaxlmuCVU1WxJyitv9zyGpWNASqZUx4r%2FAe2MXq5GtjpsjWsYwLZV4%2BSejphsVLbvP285fCUQ0qir7FIfAOdyIaDcuPQPxDwBTxVSRYPApCUiX8eO%2B9eW1zKam%2FFRySNUP1ViCqzzS3GDLr9%2FXoWprbOVkSNhkZ0vk6FRCkN0oHFnHTXiserLzjQhFQyEKdoQO6KQ0%2F4KaYbnL9SjdK3C9zaOtCXuMLtbZuPmQJHfvZFty6SEIVhvnDN2Y5y6urR8jhubSZYP0tG66GfQMUFxDpvmEfH00azwsjf50G34re4RiB9K0JbLDhetQ3s9XfXfdb2EpzQnpjKQDn8aEUErf46l%2FBommNpIqVuo9RqH%2FwQR9DffJlALeetnE9Zhkuxr4mOyuencOcakPh2khyEgVUMhTUQEsypJ2yI%2By%2BIuj%2BiEj07%2Fb%2Bf8N%2B6vvGuq2ggoKhtmQul9rJlXaDjKT3UVxfaNgas0JDlnmHn3uN2zpkmZRm9LlwflqJNZT2Cib%2BZTC1o%2BvKBjqkAf5d%2B5i3rKO%2BPOHn9rRzBUWG1UganD%2FJylixsJYPvPxcCQJ%2Ba%2BPRIPr%2B4AthiYl8A4WJhrnBPDKY7U%2FUdCWEAqpC12d6Cbdmlj%2F1QiI22Z%2BIJcsyt3bCnGbcWMK8NEQAbhfZwYaJv88rJI3sHYr9GVDWz4fsQDp4%2FHP5wntL%2B2sphkk6FZEws6BJ36OT0W9so%2BRj%2BR4R7vhI4jpIm24VFV2GNqwW&X-Amz-Signature=9da850baaf60afc0f077f0293f9285b7363dba2b2770e72694b58f537779b1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PZHE5SZ%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCEoW7Pq9AnkB8R%2B4D3DND7mNsquQPT8D8Ly%2FVjHmGAPwIhAPRMUg9fK8AOaXYcyMKaEkEfL0n2oURMN9ZTcbU3Vk%2FDKv8DCDYQABoMNjM3NDIzMTgzODA1Igwa2WdeA1EpJ7%2FS%2FtUq3AO2GnyaQuuPBW1HjerrgOGhFgGmh64vP1R9SZ9b5bCbQlV9ioz9%2FHofkTYfJNahG%2BoGSytDcONgc4XZdGHXWrTqhIzQDUcxO2wNIkFQ4lT7VcaHfUdMxpdpTWqQunaxlmuCVU1WxJyitv9zyGpWNASqZUx4r%2FAe2MXq5GtjpsjWsYwLZV4%2BSejphsVLbvP285fCUQ0qir7FIfAOdyIaDcuPQPxDwBTxVSRYPApCUiX8eO%2B9eW1zKam%2FFRySNUP1ViCqzzS3GDLr9%2FXoWprbOVkSNhkZ0vk6FRCkN0oHFnHTXiserLzjQhFQyEKdoQO6KQ0%2F4KaYbnL9SjdK3C9zaOtCXuMLtbZuPmQJHfvZFty6SEIVhvnDN2Y5y6urR8jhubSZYP0tG66GfQMUFxDpvmEfH00azwsjf50G34re4RiB9K0JbLDhetQ3s9XfXfdb2EpzQnpjKQDn8aEUErf46l%2FBommNpIqVuo9RqH%2FwQR9DffJlALeetnE9Zhkuxr4mOyuencOcakPh2khyEgVUMhTUQEsypJ2yI%2By%2BIuj%2BiEj07%2Fb%2Bf8N%2B6vvGuq2ggoKhtmQul9rJlXaDjKT3UVxfaNgas0JDlnmHn3uN2zpkmZRm9LlwflqJNZT2Cib%2BZTC1o%2BvKBjqkAf5d%2B5i3rKO%2BPOHn9rRzBUWG1UganD%2FJylixsJYPvPxcCQJ%2Ba%2BPRIPr%2B4AthiYl8A4WJhrnBPDKY7U%2FUdCWEAqpC12d6Cbdmlj%2F1QiI22Z%2BIJcsyt3bCnGbcWMK8NEQAbhfZwYaJv88rJI3sHYr9GVDWz4fsQDp4%2FHP5wntL%2B2sphkk6FZEws6BJ36OT0W9so%2BRj%2BR4R7vhI4jpIm24VFV2GNqwW&X-Amz-Signature=5a4d72ec0c97a7e74500c6770e14b58b574e9b362d703df3cd7f3cb1a1840461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
