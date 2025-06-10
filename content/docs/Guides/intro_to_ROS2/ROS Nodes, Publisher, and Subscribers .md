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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNSG3WB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8PHGgd2xxG0oa0Y7u0zz80jBnISqT4XKuM2tMNZl8MQIhANBCTqs1AXRj8dERTXdCoeznN9hi6C%2BV8969JGfrJT1CKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz01K5kvqct25Ufp6oq3AM1fBco0zdRE8Qkyr7mwC38CfpOjxbAcs07NMY3mRSaVm1kCmEI9h%2BfDgNJdyvXMcDmhVvpawR8PHyQEElXkRGumUFMqL0LlnuyWy%2BqiQsKvsG23vz6oRQ2ZRHd%2F%2FtCeuvsvNfNIwsm0szBaI%2FgOQy62VVoevyqoZ9S2xGToD7eqHDsLwW0%2FF9XDu4H%2FaKmV%2FOALfLKB%2Fn6i29nqH0skntF1Lbv3LNHhB0qT5dFy7FTNtL5kzaElyYgkYY8li%2BUzA49haeK3mgNJAm2oy6cSruyFZ%2FY1cEnenL8PVLvcZRQTkx4tlczXZt9CFofOfmFrWdgbAZEMh30a6DHPefpgFe9oS3dB%2BUhvjFSmOCUbZ7wa2mC6KuQR0CIxTqvqsWNJT14AgAaEN17FccrKyV98WhZbZaGZD5fhQj%2BjE23Q87vFUtBdtLYxvZvfgmlGE9PS8D4wRkrzMr7CrY6z4cA%2BKeZKnLWl6L9%2FuabPelO%2BaivkeTK%2FZkMJ399onoj%2Bs%2FG92YR7JHXDzVkuwjvtwI8ybg3sJWGKFbeuAxvtqfMWOXX0PzBTGy5BfGYstBQdieAu9IbwQv%2FJ7QePXg7fsPOVbrVhoTYsB2nRsk8iTXl0fzDkwqc9QC42IaXs3QwVzDr8J3CBjqkAc%2BphGrbXZePEYFGE3kI2JxwoSqi%2BD3TYUxG8%2BHI8UbptDwkPvtxErnZP3dMWSLtisL5iBzoIdLNMb%2Fx9tBhCjn2aZlKOkl7o7jfk%2Be8fpT6coi1m8Dtxt0RR17GaVlOYgLbJabDiSArv3OZ7siXIh%2Bo15zy2QZ4Q0KK4S4ku1jKk9d4F6OWoBygkhsPeWN2EdUGW1fDKfBEUipxRomYxgNEHXIv&X-Amz-Signature=86412e71662102d376f77f9f8d97e4ededa11780ea5bff3b6928efe975c49a62&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNSG3WB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8PHGgd2xxG0oa0Y7u0zz80jBnISqT4XKuM2tMNZl8MQIhANBCTqs1AXRj8dERTXdCoeznN9hi6C%2BV8969JGfrJT1CKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz01K5kvqct25Ufp6oq3AM1fBco0zdRE8Qkyr7mwC38CfpOjxbAcs07NMY3mRSaVm1kCmEI9h%2BfDgNJdyvXMcDmhVvpawR8PHyQEElXkRGumUFMqL0LlnuyWy%2BqiQsKvsG23vz6oRQ2ZRHd%2F%2FtCeuvsvNfNIwsm0szBaI%2FgOQy62VVoevyqoZ9S2xGToD7eqHDsLwW0%2FF9XDu4H%2FaKmV%2FOALfLKB%2Fn6i29nqH0skntF1Lbv3LNHhB0qT5dFy7FTNtL5kzaElyYgkYY8li%2BUzA49haeK3mgNJAm2oy6cSruyFZ%2FY1cEnenL8PVLvcZRQTkx4tlczXZt9CFofOfmFrWdgbAZEMh30a6DHPefpgFe9oS3dB%2BUhvjFSmOCUbZ7wa2mC6KuQR0CIxTqvqsWNJT14AgAaEN17FccrKyV98WhZbZaGZD5fhQj%2BjE23Q87vFUtBdtLYxvZvfgmlGE9PS8D4wRkrzMr7CrY6z4cA%2BKeZKnLWl6L9%2FuabPelO%2BaivkeTK%2FZkMJ399onoj%2Bs%2FG92YR7JHXDzVkuwjvtwI8ybg3sJWGKFbeuAxvtqfMWOXX0PzBTGy5BfGYstBQdieAu9IbwQv%2FJ7QePXg7fsPOVbrVhoTYsB2nRsk8iTXl0fzDkwqc9QC42IaXs3QwVzDr8J3CBjqkAc%2BphGrbXZePEYFGE3kI2JxwoSqi%2BD3TYUxG8%2BHI8UbptDwkPvtxErnZP3dMWSLtisL5iBzoIdLNMb%2Fx9tBhCjn2aZlKOkl7o7jfk%2Be8fpT6coi1m8Dtxt0RR17GaVlOYgLbJabDiSArv3OZ7siXIh%2Bo15zy2QZ4Q0KK4S4ku1jKk9d4F6OWoBygkhsPeWN2EdUGW1fDKfBEUipxRomYxgNEHXIv&X-Amz-Signature=e89fc3b93917d969509c5136ea74b33ea16a8de415a14ea3b3870b271190ada2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNSG3WB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8PHGgd2xxG0oa0Y7u0zz80jBnISqT4XKuM2tMNZl8MQIhANBCTqs1AXRj8dERTXdCoeznN9hi6C%2BV8969JGfrJT1CKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz01K5kvqct25Ufp6oq3AM1fBco0zdRE8Qkyr7mwC38CfpOjxbAcs07NMY3mRSaVm1kCmEI9h%2BfDgNJdyvXMcDmhVvpawR8PHyQEElXkRGumUFMqL0LlnuyWy%2BqiQsKvsG23vz6oRQ2ZRHd%2F%2FtCeuvsvNfNIwsm0szBaI%2FgOQy62VVoevyqoZ9S2xGToD7eqHDsLwW0%2FF9XDu4H%2FaKmV%2FOALfLKB%2Fn6i29nqH0skntF1Lbv3LNHhB0qT5dFy7FTNtL5kzaElyYgkYY8li%2BUzA49haeK3mgNJAm2oy6cSruyFZ%2FY1cEnenL8PVLvcZRQTkx4tlczXZt9CFofOfmFrWdgbAZEMh30a6DHPefpgFe9oS3dB%2BUhvjFSmOCUbZ7wa2mC6KuQR0CIxTqvqsWNJT14AgAaEN17FccrKyV98WhZbZaGZD5fhQj%2BjE23Q87vFUtBdtLYxvZvfgmlGE9PS8D4wRkrzMr7CrY6z4cA%2BKeZKnLWl6L9%2FuabPelO%2BaivkeTK%2FZkMJ399onoj%2Bs%2FG92YR7JHXDzVkuwjvtwI8ybg3sJWGKFbeuAxvtqfMWOXX0PzBTGy5BfGYstBQdieAu9IbwQv%2FJ7QePXg7fsPOVbrVhoTYsB2nRsk8iTXl0fzDkwqc9QC42IaXs3QwVzDr8J3CBjqkAc%2BphGrbXZePEYFGE3kI2JxwoSqi%2BD3TYUxG8%2BHI8UbptDwkPvtxErnZP3dMWSLtisL5iBzoIdLNMb%2Fx9tBhCjn2aZlKOkl7o7jfk%2Be8fpT6coi1m8Dtxt0RR17GaVlOYgLbJabDiSArv3OZ7siXIh%2Bo15zy2QZ4Q0KK4S4ku1jKk9d4F6OWoBygkhsPeWN2EdUGW1fDKfBEUipxRomYxgNEHXIv&X-Amz-Signature=a69e7f584dbcf939e382abd4bb1c04292e40b75b519f4f7672a6fcfa4de73c0f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNSG3WB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8PHGgd2xxG0oa0Y7u0zz80jBnISqT4XKuM2tMNZl8MQIhANBCTqs1AXRj8dERTXdCoeznN9hi6C%2BV8969JGfrJT1CKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz01K5kvqct25Ufp6oq3AM1fBco0zdRE8Qkyr7mwC38CfpOjxbAcs07NMY3mRSaVm1kCmEI9h%2BfDgNJdyvXMcDmhVvpawR8PHyQEElXkRGumUFMqL0LlnuyWy%2BqiQsKvsG23vz6oRQ2ZRHd%2F%2FtCeuvsvNfNIwsm0szBaI%2FgOQy62VVoevyqoZ9S2xGToD7eqHDsLwW0%2FF9XDu4H%2FaKmV%2FOALfLKB%2Fn6i29nqH0skntF1Lbv3LNHhB0qT5dFy7FTNtL5kzaElyYgkYY8li%2BUzA49haeK3mgNJAm2oy6cSruyFZ%2FY1cEnenL8PVLvcZRQTkx4tlczXZt9CFofOfmFrWdgbAZEMh30a6DHPefpgFe9oS3dB%2BUhvjFSmOCUbZ7wa2mC6KuQR0CIxTqvqsWNJT14AgAaEN17FccrKyV98WhZbZaGZD5fhQj%2BjE23Q87vFUtBdtLYxvZvfgmlGE9PS8D4wRkrzMr7CrY6z4cA%2BKeZKnLWl6L9%2FuabPelO%2BaivkeTK%2FZkMJ399onoj%2Bs%2FG92YR7JHXDzVkuwjvtwI8ybg3sJWGKFbeuAxvtqfMWOXX0PzBTGy5BfGYstBQdieAu9IbwQv%2FJ7QePXg7fsPOVbrVhoTYsB2nRsk8iTXl0fzDkwqc9QC42IaXs3QwVzDr8J3CBjqkAc%2BphGrbXZePEYFGE3kI2JxwoSqi%2BD3TYUxG8%2BHI8UbptDwkPvtxErnZP3dMWSLtisL5iBzoIdLNMb%2Fx9tBhCjn2aZlKOkl7o7jfk%2Be8fpT6coi1m8Dtxt0RR17GaVlOYgLbJabDiSArv3OZ7siXIh%2Bo15zy2QZ4Q0KK4S4ku1jKk9d4F6OWoBygkhsPeWN2EdUGW1fDKfBEUipxRomYxgNEHXIv&X-Amz-Signature=4c0886d89a0670382b635f4bd115e56e2e652cc9dd0596b63e841c13c9a876f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNSG3WB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8PHGgd2xxG0oa0Y7u0zz80jBnISqT4XKuM2tMNZl8MQIhANBCTqs1AXRj8dERTXdCoeznN9hi6C%2BV8969JGfrJT1CKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz01K5kvqct25Ufp6oq3AM1fBco0zdRE8Qkyr7mwC38CfpOjxbAcs07NMY3mRSaVm1kCmEI9h%2BfDgNJdyvXMcDmhVvpawR8PHyQEElXkRGumUFMqL0LlnuyWy%2BqiQsKvsG23vz6oRQ2ZRHd%2F%2FtCeuvsvNfNIwsm0szBaI%2FgOQy62VVoevyqoZ9S2xGToD7eqHDsLwW0%2FF9XDu4H%2FaKmV%2FOALfLKB%2Fn6i29nqH0skntF1Lbv3LNHhB0qT5dFy7FTNtL5kzaElyYgkYY8li%2BUzA49haeK3mgNJAm2oy6cSruyFZ%2FY1cEnenL8PVLvcZRQTkx4tlczXZt9CFofOfmFrWdgbAZEMh30a6DHPefpgFe9oS3dB%2BUhvjFSmOCUbZ7wa2mC6KuQR0CIxTqvqsWNJT14AgAaEN17FccrKyV98WhZbZaGZD5fhQj%2BjE23Q87vFUtBdtLYxvZvfgmlGE9PS8D4wRkrzMr7CrY6z4cA%2BKeZKnLWl6L9%2FuabPelO%2BaivkeTK%2FZkMJ399onoj%2Bs%2FG92YR7JHXDzVkuwjvtwI8ybg3sJWGKFbeuAxvtqfMWOXX0PzBTGy5BfGYstBQdieAu9IbwQv%2FJ7QePXg7fsPOVbrVhoTYsB2nRsk8iTXl0fzDkwqc9QC42IaXs3QwVzDr8J3CBjqkAc%2BphGrbXZePEYFGE3kI2JxwoSqi%2BD3TYUxG8%2BHI8UbptDwkPvtxErnZP3dMWSLtisL5iBzoIdLNMb%2Fx9tBhCjn2aZlKOkl7o7jfk%2Be8fpT6coi1m8Dtxt0RR17GaVlOYgLbJabDiSArv3OZ7siXIh%2Bo15zy2QZ4Q0KK4S4ku1jKk9d4F6OWoBygkhsPeWN2EdUGW1fDKfBEUipxRomYxgNEHXIv&X-Amz-Signature=242168bc36f820fb42638cb61b55eab486ffe2454e0f3d813316f159c7ca5aed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNSG3WB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8PHGgd2xxG0oa0Y7u0zz80jBnISqT4XKuM2tMNZl8MQIhANBCTqs1AXRj8dERTXdCoeznN9hi6C%2BV8969JGfrJT1CKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz01K5kvqct25Ufp6oq3AM1fBco0zdRE8Qkyr7mwC38CfpOjxbAcs07NMY3mRSaVm1kCmEI9h%2BfDgNJdyvXMcDmhVvpawR8PHyQEElXkRGumUFMqL0LlnuyWy%2BqiQsKvsG23vz6oRQ2ZRHd%2F%2FtCeuvsvNfNIwsm0szBaI%2FgOQy62VVoevyqoZ9S2xGToD7eqHDsLwW0%2FF9XDu4H%2FaKmV%2FOALfLKB%2Fn6i29nqH0skntF1Lbv3LNHhB0qT5dFy7FTNtL5kzaElyYgkYY8li%2BUzA49haeK3mgNJAm2oy6cSruyFZ%2FY1cEnenL8PVLvcZRQTkx4tlczXZt9CFofOfmFrWdgbAZEMh30a6DHPefpgFe9oS3dB%2BUhvjFSmOCUbZ7wa2mC6KuQR0CIxTqvqsWNJT14AgAaEN17FccrKyV98WhZbZaGZD5fhQj%2BjE23Q87vFUtBdtLYxvZvfgmlGE9PS8D4wRkrzMr7CrY6z4cA%2BKeZKnLWl6L9%2FuabPelO%2BaivkeTK%2FZkMJ399onoj%2Bs%2FG92YR7JHXDzVkuwjvtwI8ybg3sJWGKFbeuAxvtqfMWOXX0PzBTGy5BfGYstBQdieAu9IbwQv%2FJ7QePXg7fsPOVbrVhoTYsB2nRsk8iTXl0fzDkwqc9QC42IaXs3QwVzDr8J3CBjqkAc%2BphGrbXZePEYFGE3kI2JxwoSqi%2BD3TYUxG8%2BHI8UbptDwkPvtxErnZP3dMWSLtisL5iBzoIdLNMb%2Fx9tBhCjn2aZlKOkl7o7jfk%2Be8fpT6coi1m8Dtxt0RR17GaVlOYgLbJabDiSArv3OZ7siXIh%2Bo15zy2QZ4Q0KK4S4ku1jKk9d4F6OWoBygkhsPeWN2EdUGW1fDKfBEUipxRomYxgNEHXIv&X-Amz-Signature=855b5314633cf76082c141469253b2e4dfb6551388e0dbee09ed24655a860246&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNSG3WB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8PHGgd2xxG0oa0Y7u0zz80jBnISqT4XKuM2tMNZl8MQIhANBCTqs1AXRj8dERTXdCoeznN9hi6C%2BV8969JGfrJT1CKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz01K5kvqct25Ufp6oq3AM1fBco0zdRE8Qkyr7mwC38CfpOjxbAcs07NMY3mRSaVm1kCmEI9h%2BfDgNJdyvXMcDmhVvpawR8PHyQEElXkRGumUFMqL0LlnuyWy%2BqiQsKvsG23vz6oRQ2ZRHd%2F%2FtCeuvsvNfNIwsm0szBaI%2FgOQy62VVoevyqoZ9S2xGToD7eqHDsLwW0%2FF9XDu4H%2FaKmV%2FOALfLKB%2Fn6i29nqH0skntF1Lbv3LNHhB0qT5dFy7FTNtL5kzaElyYgkYY8li%2BUzA49haeK3mgNJAm2oy6cSruyFZ%2FY1cEnenL8PVLvcZRQTkx4tlczXZt9CFofOfmFrWdgbAZEMh30a6DHPefpgFe9oS3dB%2BUhvjFSmOCUbZ7wa2mC6KuQR0CIxTqvqsWNJT14AgAaEN17FccrKyV98WhZbZaGZD5fhQj%2BjE23Q87vFUtBdtLYxvZvfgmlGE9PS8D4wRkrzMr7CrY6z4cA%2BKeZKnLWl6L9%2FuabPelO%2BaivkeTK%2FZkMJ399onoj%2Bs%2FG92YR7JHXDzVkuwjvtwI8ybg3sJWGKFbeuAxvtqfMWOXX0PzBTGy5BfGYstBQdieAu9IbwQv%2FJ7QePXg7fsPOVbrVhoTYsB2nRsk8iTXl0fzDkwqc9QC42IaXs3QwVzDr8J3CBjqkAc%2BphGrbXZePEYFGE3kI2JxwoSqi%2BD3TYUxG8%2BHI8UbptDwkPvtxErnZP3dMWSLtisL5iBzoIdLNMb%2Fx9tBhCjn2aZlKOkl7o7jfk%2Be8fpT6coi1m8Dtxt0RR17GaVlOYgLbJabDiSArv3OZ7siXIh%2Bo15zy2QZ4Q0KK4S4ku1jKk9d4F6OWoBygkhsPeWN2EdUGW1fDKfBEUipxRomYxgNEHXIv&X-Amz-Signature=1cfcbb5f52c94528d34c42dae0969ccdf1948684945374e5ee2098cc0ef986eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNSG3WB%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8PHGgd2xxG0oa0Y7u0zz80jBnISqT4XKuM2tMNZl8MQIhANBCTqs1AXRj8dERTXdCoeznN9hi6C%2BV8969JGfrJT1CKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz01K5kvqct25Ufp6oq3AM1fBco0zdRE8Qkyr7mwC38CfpOjxbAcs07NMY3mRSaVm1kCmEI9h%2BfDgNJdyvXMcDmhVvpawR8PHyQEElXkRGumUFMqL0LlnuyWy%2BqiQsKvsG23vz6oRQ2ZRHd%2F%2FtCeuvsvNfNIwsm0szBaI%2FgOQy62VVoevyqoZ9S2xGToD7eqHDsLwW0%2FF9XDu4H%2FaKmV%2FOALfLKB%2Fn6i29nqH0skntF1Lbv3LNHhB0qT5dFy7FTNtL5kzaElyYgkYY8li%2BUzA49haeK3mgNJAm2oy6cSruyFZ%2FY1cEnenL8PVLvcZRQTkx4tlczXZt9CFofOfmFrWdgbAZEMh30a6DHPefpgFe9oS3dB%2BUhvjFSmOCUbZ7wa2mC6KuQR0CIxTqvqsWNJT14AgAaEN17FccrKyV98WhZbZaGZD5fhQj%2BjE23Q87vFUtBdtLYxvZvfgmlGE9PS8D4wRkrzMr7CrY6z4cA%2BKeZKnLWl6L9%2FuabPelO%2BaivkeTK%2FZkMJ399onoj%2Bs%2FG92YR7JHXDzVkuwjvtwI8ybg3sJWGKFbeuAxvtqfMWOXX0PzBTGy5BfGYstBQdieAu9IbwQv%2FJ7QePXg7fsPOVbrVhoTYsB2nRsk8iTXl0fzDkwqc9QC42IaXs3QwVzDr8J3CBjqkAc%2BphGrbXZePEYFGE3kI2JxwoSqi%2BD3TYUxG8%2BHI8UbptDwkPvtxErnZP3dMWSLtisL5iBzoIdLNMb%2Fx9tBhCjn2aZlKOkl7o7jfk%2Be8fpT6coi1m8Dtxt0RR17GaVlOYgLbJabDiSArv3OZ7siXIh%2Bo15zy2QZ4Q0KK4S4ku1jKk9d4F6OWoBygkhsPeWN2EdUGW1fDKfBEUipxRomYxgNEHXIv&X-Amz-Signature=943c8f591e957b5472db6aa881130ebfbaaf9e724f9091980a55a4823199113a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
