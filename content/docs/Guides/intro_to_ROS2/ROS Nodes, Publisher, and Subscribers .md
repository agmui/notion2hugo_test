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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMQPIBT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICvn1XvV6uplsExNlsCEw3Yzj7PaTrnLuyPiNdSwOUQYAiAAwYQwwvf1WUx6zeasb2hApZACjJ5Qfgi3ZJDDiDvzcCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz85QH%2BMonFypQin7KtwDS6ZEpMBFDqfsggrOKIH8til3HBQ8dfkk3UZNwI0%2F3%2BRsP3FLVzrr3y%2B8m9lNbDqnrnnfQNDqSpV3sRjbYf0Pg%2Bq9eH%2FjJqhP4DWTdCtbI6Y4ZdOv25lpupIL25KHeiUUZPf6R66wXG1SkqFLMPBBxsMq2sW5APwwQZRmU7ehyx5spLMnDB2U8PpvW%2Fm6J8CMGrv6oqpPFtXmvKKeGspwBC2DK%2B4HND%2BYaz%2BWS9fY4RSc9VQ5Gb9f97IJHvRkhz2kLLrD5SAB5SPMQpWSLI68KwA%2F5F%2B7ADYwDSQCEpjGz%2B54J287El5Z9WxZceasn5gKd6jLsN7bJ4wcfmS7DoVnyeEHOYr0ySThg6eoE0zgdwAYX9cnjyamyoWwrTYmgQx4ojovLhujEkEimGF8RvYJScNShBmvEaTKjMM%2BWiYPyUoYr7raVEj4pUr2DnOiTWtwuLYTAU%2F5fsRul%2FhYsNM9Sp079y8jPKzP2wV3bJ%2FpmQauR366iWZtzaPw8DbtKJZFm671ws0lcRaSmQavHCduOOPRCo3IqG%2BbWdc3CMcRvpYqpryv5Zfx9oa%2BXL5hCkaGLlsEM20ZXkB9Ic%2FM2M%2BGW6AXzUm2TccSRv0In2h33Bl7oeDTpfAgMfxiGpUw08acxAY6pgHxNMTn8Kp9wJJZw6N1x8qsHpadarR1SR8kWDHjW6zK9tlOdaPRO2VUj5TwIIzPm2u%2F7PJjUmK%2FrNWFaoW0jHXpPpGSZv1J4ATlpOMgHcX5ELb3G2A6EONKggno0tC3wpk2IW%2F8%2B%2B%2FHDB0x1qw2g%2FCT9Tf9ak9mJUQkLmPwHF6FnI%2BMu1Nm4YVUbkpUzZlfjwdzrY4fbO1rYkK4Pfpyui8lL%2FK6CvO8&X-Amz-Signature=87885d3a54038b0cd274b6c7e6821c3309c0e774c06ba6ac13cfeb85088eb077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMQPIBT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICvn1XvV6uplsExNlsCEw3Yzj7PaTrnLuyPiNdSwOUQYAiAAwYQwwvf1WUx6zeasb2hApZACjJ5Qfgi3ZJDDiDvzcCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz85QH%2BMonFypQin7KtwDS6ZEpMBFDqfsggrOKIH8til3HBQ8dfkk3UZNwI0%2F3%2BRsP3FLVzrr3y%2B8m9lNbDqnrnnfQNDqSpV3sRjbYf0Pg%2Bq9eH%2FjJqhP4DWTdCtbI6Y4ZdOv25lpupIL25KHeiUUZPf6R66wXG1SkqFLMPBBxsMq2sW5APwwQZRmU7ehyx5spLMnDB2U8PpvW%2Fm6J8CMGrv6oqpPFtXmvKKeGspwBC2DK%2B4HND%2BYaz%2BWS9fY4RSc9VQ5Gb9f97IJHvRkhz2kLLrD5SAB5SPMQpWSLI68KwA%2F5F%2B7ADYwDSQCEpjGz%2B54J287El5Z9WxZceasn5gKd6jLsN7bJ4wcfmS7DoVnyeEHOYr0ySThg6eoE0zgdwAYX9cnjyamyoWwrTYmgQx4ojovLhujEkEimGF8RvYJScNShBmvEaTKjMM%2BWiYPyUoYr7raVEj4pUr2DnOiTWtwuLYTAU%2F5fsRul%2FhYsNM9Sp079y8jPKzP2wV3bJ%2FpmQauR366iWZtzaPw8DbtKJZFm671ws0lcRaSmQavHCduOOPRCo3IqG%2BbWdc3CMcRvpYqpryv5Zfx9oa%2BXL5hCkaGLlsEM20ZXkB9Ic%2FM2M%2BGW6AXzUm2TccSRv0In2h33Bl7oeDTpfAgMfxiGpUw08acxAY6pgHxNMTn8Kp9wJJZw6N1x8qsHpadarR1SR8kWDHjW6zK9tlOdaPRO2VUj5TwIIzPm2u%2F7PJjUmK%2FrNWFaoW0jHXpPpGSZv1J4ATlpOMgHcX5ELb3G2A6EONKggno0tC3wpk2IW%2F8%2B%2B%2FHDB0x1qw2g%2FCT9Tf9ak9mJUQkLmPwHF6FnI%2BMu1Nm4YVUbkpUzZlfjwdzrY4fbO1rYkK4Pfpyui8lL%2FK6CvO8&X-Amz-Signature=323d4d03f41f9feaef55609c25be37a18c73326b54065ed792618edd918f999f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMQPIBT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICvn1XvV6uplsExNlsCEw3Yzj7PaTrnLuyPiNdSwOUQYAiAAwYQwwvf1WUx6zeasb2hApZACjJ5Qfgi3ZJDDiDvzcCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz85QH%2BMonFypQin7KtwDS6ZEpMBFDqfsggrOKIH8til3HBQ8dfkk3UZNwI0%2F3%2BRsP3FLVzrr3y%2B8m9lNbDqnrnnfQNDqSpV3sRjbYf0Pg%2Bq9eH%2FjJqhP4DWTdCtbI6Y4ZdOv25lpupIL25KHeiUUZPf6R66wXG1SkqFLMPBBxsMq2sW5APwwQZRmU7ehyx5spLMnDB2U8PpvW%2Fm6J8CMGrv6oqpPFtXmvKKeGspwBC2DK%2B4HND%2BYaz%2BWS9fY4RSc9VQ5Gb9f97IJHvRkhz2kLLrD5SAB5SPMQpWSLI68KwA%2F5F%2B7ADYwDSQCEpjGz%2B54J287El5Z9WxZceasn5gKd6jLsN7bJ4wcfmS7DoVnyeEHOYr0ySThg6eoE0zgdwAYX9cnjyamyoWwrTYmgQx4ojovLhujEkEimGF8RvYJScNShBmvEaTKjMM%2BWiYPyUoYr7raVEj4pUr2DnOiTWtwuLYTAU%2F5fsRul%2FhYsNM9Sp079y8jPKzP2wV3bJ%2FpmQauR366iWZtzaPw8DbtKJZFm671ws0lcRaSmQavHCduOOPRCo3IqG%2BbWdc3CMcRvpYqpryv5Zfx9oa%2BXL5hCkaGLlsEM20ZXkB9Ic%2FM2M%2BGW6AXzUm2TccSRv0In2h33Bl7oeDTpfAgMfxiGpUw08acxAY6pgHxNMTn8Kp9wJJZw6N1x8qsHpadarR1SR8kWDHjW6zK9tlOdaPRO2VUj5TwIIzPm2u%2F7PJjUmK%2FrNWFaoW0jHXpPpGSZv1J4ATlpOMgHcX5ELb3G2A6EONKggno0tC3wpk2IW%2F8%2B%2B%2FHDB0x1qw2g%2FCT9Tf9ak9mJUQkLmPwHF6FnI%2BMu1Nm4YVUbkpUzZlfjwdzrY4fbO1rYkK4Pfpyui8lL%2FK6CvO8&X-Amz-Signature=b881325b166ed82b0139400eb2c0468a5823b8a40686582f585235e81029614b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMQPIBT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICvn1XvV6uplsExNlsCEw3Yzj7PaTrnLuyPiNdSwOUQYAiAAwYQwwvf1WUx6zeasb2hApZACjJ5Qfgi3ZJDDiDvzcCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz85QH%2BMonFypQin7KtwDS6ZEpMBFDqfsggrOKIH8til3HBQ8dfkk3UZNwI0%2F3%2BRsP3FLVzrr3y%2B8m9lNbDqnrnnfQNDqSpV3sRjbYf0Pg%2Bq9eH%2FjJqhP4DWTdCtbI6Y4ZdOv25lpupIL25KHeiUUZPf6R66wXG1SkqFLMPBBxsMq2sW5APwwQZRmU7ehyx5spLMnDB2U8PpvW%2Fm6J8CMGrv6oqpPFtXmvKKeGspwBC2DK%2B4HND%2BYaz%2BWS9fY4RSc9VQ5Gb9f97IJHvRkhz2kLLrD5SAB5SPMQpWSLI68KwA%2F5F%2B7ADYwDSQCEpjGz%2B54J287El5Z9WxZceasn5gKd6jLsN7bJ4wcfmS7DoVnyeEHOYr0ySThg6eoE0zgdwAYX9cnjyamyoWwrTYmgQx4ojovLhujEkEimGF8RvYJScNShBmvEaTKjMM%2BWiYPyUoYr7raVEj4pUr2DnOiTWtwuLYTAU%2F5fsRul%2FhYsNM9Sp079y8jPKzP2wV3bJ%2FpmQauR366iWZtzaPw8DbtKJZFm671ws0lcRaSmQavHCduOOPRCo3IqG%2BbWdc3CMcRvpYqpryv5Zfx9oa%2BXL5hCkaGLlsEM20ZXkB9Ic%2FM2M%2BGW6AXzUm2TccSRv0In2h33Bl7oeDTpfAgMfxiGpUw08acxAY6pgHxNMTn8Kp9wJJZw6N1x8qsHpadarR1SR8kWDHjW6zK9tlOdaPRO2VUj5TwIIzPm2u%2F7PJjUmK%2FrNWFaoW0jHXpPpGSZv1J4ATlpOMgHcX5ELb3G2A6EONKggno0tC3wpk2IW%2F8%2B%2B%2FHDB0x1qw2g%2FCT9Tf9ak9mJUQkLmPwHF6FnI%2BMu1Nm4YVUbkpUzZlfjwdzrY4fbO1rYkK4Pfpyui8lL%2FK6CvO8&X-Amz-Signature=609a88920affecca78f5bce0547df1b2587bdfcdebb2496e6202ba37468eae9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMQPIBT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICvn1XvV6uplsExNlsCEw3Yzj7PaTrnLuyPiNdSwOUQYAiAAwYQwwvf1WUx6zeasb2hApZACjJ5Qfgi3ZJDDiDvzcCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz85QH%2BMonFypQin7KtwDS6ZEpMBFDqfsggrOKIH8til3HBQ8dfkk3UZNwI0%2F3%2BRsP3FLVzrr3y%2B8m9lNbDqnrnnfQNDqSpV3sRjbYf0Pg%2Bq9eH%2FjJqhP4DWTdCtbI6Y4ZdOv25lpupIL25KHeiUUZPf6R66wXG1SkqFLMPBBxsMq2sW5APwwQZRmU7ehyx5spLMnDB2U8PpvW%2Fm6J8CMGrv6oqpPFtXmvKKeGspwBC2DK%2B4HND%2BYaz%2BWS9fY4RSc9VQ5Gb9f97IJHvRkhz2kLLrD5SAB5SPMQpWSLI68KwA%2F5F%2B7ADYwDSQCEpjGz%2B54J287El5Z9WxZceasn5gKd6jLsN7bJ4wcfmS7DoVnyeEHOYr0ySThg6eoE0zgdwAYX9cnjyamyoWwrTYmgQx4ojovLhujEkEimGF8RvYJScNShBmvEaTKjMM%2BWiYPyUoYr7raVEj4pUr2DnOiTWtwuLYTAU%2F5fsRul%2FhYsNM9Sp079y8jPKzP2wV3bJ%2FpmQauR366iWZtzaPw8DbtKJZFm671ws0lcRaSmQavHCduOOPRCo3IqG%2BbWdc3CMcRvpYqpryv5Zfx9oa%2BXL5hCkaGLlsEM20ZXkB9Ic%2FM2M%2BGW6AXzUm2TccSRv0In2h33Bl7oeDTpfAgMfxiGpUw08acxAY6pgHxNMTn8Kp9wJJZw6N1x8qsHpadarR1SR8kWDHjW6zK9tlOdaPRO2VUj5TwIIzPm2u%2F7PJjUmK%2FrNWFaoW0jHXpPpGSZv1J4ATlpOMgHcX5ELb3G2A6EONKggno0tC3wpk2IW%2F8%2B%2B%2FHDB0x1qw2g%2FCT9Tf9ak9mJUQkLmPwHF6FnI%2BMu1Nm4YVUbkpUzZlfjwdzrY4fbO1rYkK4Pfpyui8lL%2FK6CvO8&X-Amz-Signature=9750dd7a1dfff379302de022aaef41e1bd2a45b02c9d429d5d6aceafa21d8fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMQPIBT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICvn1XvV6uplsExNlsCEw3Yzj7PaTrnLuyPiNdSwOUQYAiAAwYQwwvf1WUx6zeasb2hApZACjJ5Qfgi3ZJDDiDvzcCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz85QH%2BMonFypQin7KtwDS6ZEpMBFDqfsggrOKIH8til3HBQ8dfkk3UZNwI0%2F3%2BRsP3FLVzrr3y%2B8m9lNbDqnrnnfQNDqSpV3sRjbYf0Pg%2Bq9eH%2FjJqhP4DWTdCtbI6Y4ZdOv25lpupIL25KHeiUUZPf6R66wXG1SkqFLMPBBxsMq2sW5APwwQZRmU7ehyx5spLMnDB2U8PpvW%2Fm6J8CMGrv6oqpPFtXmvKKeGspwBC2DK%2B4HND%2BYaz%2BWS9fY4RSc9VQ5Gb9f97IJHvRkhz2kLLrD5SAB5SPMQpWSLI68KwA%2F5F%2B7ADYwDSQCEpjGz%2B54J287El5Z9WxZceasn5gKd6jLsN7bJ4wcfmS7DoVnyeEHOYr0ySThg6eoE0zgdwAYX9cnjyamyoWwrTYmgQx4ojovLhujEkEimGF8RvYJScNShBmvEaTKjMM%2BWiYPyUoYr7raVEj4pUr2DnOiTWtwuLYTAU%2F5fsRul%2FhYsNM9Sp079y8jPKzP2wV3bJ%2FpmQauR366iWZtzaPw8DbtKJZFm671ws0lcRaSmQavHCduOOPRCo3IqG%2BbWdc3CMcRvpYqpryv5Zfx9oa%2BXL5hCkaGLlsEM20ZXkB9Ic%2FM2M%2BGW6AXzUm2TccSRv0In2h33Bl7oeDTpfAgMfxiGpUw08acxAY6pgHxNMTn8Kp9wJJZw6N1x8qsHpadarR1SR8kWDHjW6zK9tlOdaPRO2VUj5TwIIzPm2u%2F7PJjUmK%2FrNWFaoW0jHXpPpGSZv1J4ATlpOMgHcX5ELb3G2A6EONKggno0tC3wpk2IW%2F8%2B%2B%2FHDB0x1qw2g%2FCT9Tf9ak9mJUQkLmPwHF6FnI%2BMu1Nm4YVUbkpUzZlfjwdzrY4fbO1rYkK4Pfpyui8lL%2FK6CvO8&X-Amz-Signature=b972ebe4607448f60231cc357f464fc354e7114ff3ce0028f7a12bc2c442b2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMQPIBT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICvn1XvV6uplsExNlsCEw3Yzj7PaTrnLuyPiNdSwOUQYAiAAwYQwwvf1WUx6zeasb2hApZACjJ5Qfgi3ZJDDiDvzcCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz85QH%2BMonFypQin7KtwDS6ZEpMBFDqfsggrOKIH8til3HBQ8dfkk3UZNwI0%2F3%2BRsP3FLVzrr3y%2B8m9lNbDqnrnnfQNDqSpV3sRjbYf0Pg%2Bq9eH%2FjJqhP4DWTdCtbI6Y4ZdOv25lpupIL25KHeiUUZPf6R66wXG1SkqFLMPBBxsMq2sW5APwwQZRmU7ehyx5spLMnDB2U8PpvW%2Fm6J8CMGrv6oqpPFtXmvKKeGspwBC2DK%2B4HND%2BYaz%2BWS9fY4RSc9VQ5Gb9f97IJHvRkhz2kLLrD5SAB5SPMQpWSLI68KwA%2F5F%2B7ADYwDSQCEpjGz%2B54J287El5Z9WxZceasn5gKd6jLsN7bJ4wcfmS7DoVnyeEHOYr0ySThg6eoE0zgdwAYX9cnjyamyoWwrTYmgQx4ojovLhujEkEimGF8RvYJScNShBmvEaTKjMM%2BWiYPyUoYr7raVEj4pUr2DnOiTWtwuLYTAU%2F5fsRul%2FhYsNM9Sp079y8jPKzP2wV3bJ%2FpmQauR366iWZtzaPw8DbtKJZFm671ws0lcRaSmQavHCduOOPRCo3IqG%2BbWdc3CMcRvpYqpryv5Zfx9oa%2BXL5hCkaGLlsEM20ZXkB9Ic%2FM2M%2BGW6AXzUm2TccSRv0In2h33Bl7oeDTpfAgMfxiGpUw08acxAY6pgHxNMTn8Kp9wJJZw6N1x8qsHpadarR1SR8kWDHjW6zK9tlOdaPRO2VUj5TwIIzPm2u%2F7PJjUmK%2FrNWFaoW0jHXpPpGSZv1J4ATlpOMgHcX5ELb3G2A6EONKggno0tC3wpk2IW%2F8%2B%2B%2FHDB0x1qw2g%2FCT9Tf9ak9mJUQkLmPwHF6FnI%2BMu1Nm4YVUbkpUzZlfjwdzrY4fbO1rYkK4Pfpyui8lL%2FK6CvO8&X-Amz-Signature=23f3256ae6bdd6ba8e162ca8493e3e8e1a6cfcb0dbeacc5e86a2f377d9bd5f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AMQPIBT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCICvn1XvV6uplsExNlsCEw3Yzj7PaTrnLuyPiNdSwOUQYAiAAwYQwwvf1WUx6zeasb2hApZACjJ5Qfgi3ZJDDiDvzcCqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMz85QH%2BMonFypQin7KtwDS6ZEpMBFDqfsggrOKIH8til3HBQ8dfkk3UZNwI0%2F3%2BRsP3FLVzrr3y%2B8m9lNbDqnrnnfQNDqSpV3sRjbYf0Pg%2Bq9eH%2FjJqhP4DWTdCtbI6Y4ZdOv25lpupIL25KHeiUUZPf6R66wXG1SkqFLMPBBxsMq2sW5APwwQZRmU7ehyx5spLMnDB2U8PpvW%2Fm6J8CMGrv6oqpPFtXmvKKeGspwBC2DK%2B4HND%2BYaz%2BWS9fY4RSc9VQ5Gb9f97IJHvRkhz2kLLrD5SAB5SPMQpWSLI68KwA%2F5F%2B7ADYwDSQCEpjGz%2B54J287El5Z9WxZceasn5gKd6jLsN7bJ4wcfmS7DoVnyeEHOYr0ySThg6eoE0zgdwAYX9cnjyamyoWwrTYmgQx4ojovLhujEkEimGF8RvYJScNShBmvEaTKjMM%2BWiYPyUoYr7raVEj4pUr2DnOiTWtwuLYTAU%2F5fsRul%2FhYsNM9Sp079y8jPKzP2wV3bJ%2FpmQauR366iWZtzaPw8DbtKJZFm671ws0lcRaSmQavHCduOOPRCo3IqG%2BbWdc3CMcRvpYqpryv5Zfx9oa%2BXL5hCkaGLlsEM20ZXkB9Ic%2FM2M%2BGW6AXzUm2TccSRv0In2h33Bl7oeDTpfAgMfxiGpUw08acxAY6pgHxNMTn8Kp9wJJZw6N1x8qsHpadarR1SR8kWDHjW6zK9tlOdaPRO2VUj5TwIIzPm2u%2F7PJjUmK%2FrNWFaoW0jHXpPpGSZv1J4ATlpOMgHcX5ELb3G2A6EONKggno0tC3wpk2IW%2F8%2B%2B%2FHDB0x1qw2g%2FCT9Tf9ak9mJUQkLmPwHF6FnI%2BMu1Nm4YVUbkpUzZlfjwdzrY4fbO1rYkK4Pfpyui8lL%2FK6CvO8&X-Amz-Signature=88004d81f773f2476799c489e13f65c2d1ca378fa9ad51cfe97d3a742e231ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
