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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTFYOVW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQChGOc9kE2VGig9EqqIuhE2V9BeQqg0wpa9jCwOCnq%2FbgIgMi8pkTyyRETakbKIGyj5mOmQpfzyjUrfNFyUY41j4H0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3G93j5EHg8jmCKircA3K3QpGeSjXh3J4UoS6neh1C%2FMupxNvpZJR7gtAkxXhVt3g323ypiNZDkFb2FX%2BxK1XrUxtVVsecN2TA6mWqdc4dWTwgvCIz%2F9r%2BHSjqZK4dzsATrlqj0E7pc%2BYrZZffNDd9Jnh6OqN2TitoMyqgb0eCkV%2BtKJs7We4goWZl8%2BDGuWxVFRF87SrOkQ5szB28eYv23WTIfToZWmP%2FzrXLcwxOsGP1Y5S%2BQ6bFKpN6KaDhlo%2FpwO4%2BaKvq2cg0GNmmmZkke8gQdxvrGzs8vVsG6YhYbtKj2s52fzTbHpta5zUu7fMzfuenBS2cl4Px0%2Ft0pJgAwssg6uni%2BscqxM5zB8zQhcMokkEjyu0hZp0B8QTT4madTJQq4syCyiTHYPWbpCCHMgqLtShMi3ewZ0c4do0msgekwd1dg3raq9Zj%2BhMqkFmBP0WO3YMqfUeIzoQ0smXK6odu25e3wARfXo1mInbR0Z6J7dAIDkKTbuXPSqPraU55bdrzq4UBJhPMo8ifMyaGSGJEeNClQsJWORPNlSXKw4%2BvHs8ZlN%2BafUnf197cTespJ5hF9cvkKswQd11bdtTQkZVBxtWLNLAnyEz2J0eJvAdrsWek7HRxG3%2BriWimlIZTQdyYINPR9DXRMIrQ48IGOqUB4uDpWmkucm9jje6NbiJFbaPBMoq4CL0lS2tMgjBqESifZfsbUrCsK%2BUEOZnAn4Xdwm74OVLbJ7sCIAKfC5QXmNlKOrpSPS6pOYB4YBiK9YPlG6GsaAyffASZp1qKI0UAc%2F9dI8jgAEpw8oSdVgtrdwhW5Lrz4FrQtAWZ3F2%2FJ69OZx%2FfMVDbpIgPGS9YhGpv3B8bvEtuBuoB4LSZiG7Kha6dwsW7&X-Amz-Signature=619688afe07dbe8e2e1ba9608ca45cfcdd3e7ea624d57cf55111eca8b2c8fd89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTFYOVW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQChGOc9kE2VGig9EqqIuhE2V9BeQqg0wpa9jCwOCnq%2FbgIgMi8pkTyyRETakbKIGyj5mOmQpfzyjUrfNFyUY41j4H0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3G93j5EHg8jmCKircA3K3QpGeSjXh3J4UoS6neh1C%2FMupxNvpZJR7gtAkxXhVt3g323ypiNZDkFb2FX%2BxK1XrUxtVVsecN2TA6mWqdc4dWTwgvCIz%2F9r%2BHSjqZK4dzsATrlqj0E7pc%2BYrZZffNDd9Jnh6OqN2TitoMyqgb0eCkV%2BtKJs7We4goWZl8%2BDGuWxVFRF87SrOkQ5szB28eYv23WTIfToZWmP%2FzrXLcwxOsGP1Y5S%2BQ6bFKpN6KaDhlo%2FpwO4%2BaKvq2cg0GNmmmZkke8gQdxvrGzs8vVsG6YhYbtKj2s52fzTbHpta5zUu7fMzfuenBS2cl4Px0%2Ft0pJgAwssg6uni%2BscqxM5zB8zQhcMokkEjyu0hZp0B8QTT4madTJQq4syCyiTHYPWbpCCHMgqLtShMi3ewZ0c4do0msgekwd1dg3raq9Zj%2BhMqkFmBP0WO3YMqfUeIzoQ0smXK6odu25e3wARfXo1mInbR0Z6J7dAIDkKTbuXPSqPraU55bdrzq4UBJhPMo8ifMyaGSGJEeNClQsJWORPNlSXKw4%2BvHs8ZlN%2BafUnf197cTespJ5hF9cvkKswQd11bdtTQkZVBxtWLNLAnyEz2J0eJvAdrsWek7HRxG3%2BriWimlIZTQdyYINPR9DXRMIrQ48IGOqUB4uDpWmkucm9jje6NbiJFbaPBMoq4CL0lS2tMgjBqESifZfsbUrCsK%2BUEOZnAn4Xdwm74OVLbJ7sCIAKfC5QXmNlKOrpSPS6pOYB4YBiK9YPlG6GsaAyffASZp1qKI0UAc%2F9dI8jgAEpw8oSdVgtrdwhW5Lrz4FrQtAWZ3F2%2FJ69OZx%2FfMVDbpIgPGS9YhGpv3B8bvEtuBuoB4LSZiG7Kha6dwsW7&X-Amz-Signature=3f07cc529182f8e413c61cedb55f35705327a5d4459869916b4a890c0b107f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTFYOVW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQChGOc9kE2VGig9EqqIuhE2V9BeQqg0wpa9jCwOCnq%2FbgIgMi8pkTyyRETakbKIGyj5mOmQpfzyjUrfNFyUY41j4H0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3G93j5EHg8jmCKircA3K3QpGeSjXh3J4UoS6neh1C%2FMupxNvpZJR7gtAkxXhVt3g323ypiNZDkFb2FX%2BxK1XrUxtVVsecN2TA6mWqdc4dWTwgvCIz%2F9r%2BHSjqZK4dzsATrlqj0E7pc%2BYrZZffNDd9Jnh6OqN2TitoMyqgb0eCkV%2BtKJs7We4goWZl8%2BDGuWxVFRF87SrOkQ5szB28eYv23WTIfToZWmP%2FzrXLcwxOsGP1Y5S%2BQ6bFKpN6KaDhlo%2FpwO4%2BaKvq2cg0GNmmmZkke8gQdxvrGzs8vVsG6YhYbtKj2s52fzTbHpta5zUu7fMzfuenBS2cl4Px0%2Ft0pJgAwssg6uni%2BscqxM5zB8zQhcMokkEjyu0hZp0B8QTT4madTJQq4syCyiTHYPWbpCCHMgqLtShMi3ewZ0c4do0msgekwd1dg3raq9Zj%2BhMqkFmBP0WO3YMqfUeIzoQ0smXK6odu25e3wARfXo1mInbR0Z6J7dAIDkKTbuXPSqPraU55bdrzq4UBJhPMo8ifMyaGSGJEeNClQsJWORPNlSXKw4%2BvHs8ZlN%2BafUnf197cTespJ5hF9cvkKswQd11bdtTQkZVBxtWLNLAnyEz2J0eJvAdrsWek7HRxG3%2BriWimlIZTQdyYINPR9DXRMIrQ48IGOqUB4uDpWmkucm9jje6NbiJFbaPBMoq4CL0lS2tMgjBqESifZfsbUrCsK%2BUEOZnAn4Xdwm74OVLbJ7sCIAKfC5QXmNlKOrpSPS6pOYB4YBiK9YPlG6GsaAyffASZp1qKI0UAc%2F9dI8jgAEpw8oSdVgtrdwhW5Lrz4FrQtAWZ3F2%2FJ69OZx%2FfMVDbpIgPGS9YhGpv3B8bvEtuBuoB4LSZiG7Kha6dwsW7&X-Amz-Signature=59ce46e4b286eb821d5f7374016e92f4714889ec1e69e18adb44d7115ee4278b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTFYOVW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQChGOc9kE2VGig9EqqIuhE2V9BeQqg0wpa9jCwOCnq%2FbgIgMi8pkTyyRETakbKIGyj5mOmQpfzyjUrfNFyUY41j4H0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3G93j5EHg8jmCKircA3K3QpGeSjXh3J4UoS6neh1C%2FMupxNvpZJR7gtAkxXhVt3g323ypiNZDkFb2FX%2BxK1XrUxtVVsecN2TA6mWqdc4dWTwgvCIz%2F9r%2BHSjqZK4dzsATrlqj0E7pc%2BYrZZffNDd9Jnh6OqN2TitoMyqgb0eCkV%2BtKJs7We4goWZl8%2BDGuWxVFRF87SrOkQ5szB28eYv23WTIfToZWmP%2FzrXLcwxOsGP1Y5S%2BQ6bFKpN6KaDhlo%2FpwO4%2BaKvq2cg0GNmmmZkke8gQdxvrGzs8vVsG6YhYbtKj2s52fzTbHpta5zUu7fMzfuenBS2cl4Px0%2Ft0pJgAwssg6uni%2BscqxM5zB8zQhcMokkEjyu0hZp0B8QTT4madTJQq4syCyiTHYPWbpCCHMgqLtShMi3ewZ0c4do0msgekwd1dg3raq9Zj%2BhMqkFmBP0WO3YMqfUeIzoQ0smXK6odu25e3wARfXo1mInbR0Z6J7dAIDkKTbuXPSqPraU55bdrzq4UBJhPMo8ifMyaGSGJEeNClQsJWORPNlSXKw4%2BvHs8ZlN%2BafUnf197cTespJ5hF9cvkKswQd11bdtTQkZVBxtWLNLAnyEz2J0eJvAdrsWek7HRxG3%2BriWimlIZTQdyYINPR9DXRMIrQ48IGOqUB4uDpWmkucm9jje6NbiJFbaPBMoq4CL0lS2tMgjBqESifZfsbUrCsK%2BUEOZnAn4Xdwm74OVLbJ7sCIAKfC5QXmNlKOrpSPS6pOYB4YBiK9YPlG6GsaAyffASZp1qKI0UAc%2F9dI8jgAEpw8oSdVgtrdwhW5Lrz4FrQtAWZ3F2%2FJ69OZx%2FfMVDbpIgPGS9YhGpv3B8bvEtuBuoB4LSZiG7Kha6dwsW7&X-Amz-Signature=3d3578f2fbea108c6ec0251c18de9a3b3f790eb8e7c540cfb7d7223535881818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTFYOVW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQChGOc9kE2VGig9EqqIuhE2V9BeQqg0wpa9jCwOCnq%2FbgIgMi8pkTyyRETakbKIGyj5mOmQpfzyjUrfNFyUY41j4H0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3G93j5EHg8jmCKircA3K3QpGeSjXh3J4UoS6neh1C%2FMupxNvpZJR7gtAkxXhVt3g323ypiNZDkFb2FX%2BxK1XrUxtVVsecN2TA6mWqdc4dWTwgvCIz%2F9r%2BHSjqZK4dzsATrlqj0E7pc%2BYrZZffNDd9Jnh6OqN2TitoMyqgb0eCkV%2BtKJs7We4goWZl8%2BDGuWxVFRF87SrOkQ5szB28eYv23WTIfToZWmP%2FzrXLcwxOsGP1Y5S%2BQ6bFKpN6KaDhlo%2FpwO4%2BaKvq2cg0GNmmmZkke8gQdxvrGzs8vVsG6YhYbtKj2s52fzTbHpta5zUu7fMzfuenBS2cl4Px0%2Ft0pJgAwssg6uni%2BscqxM5zB8zQhcMokkEjyu0hZp0B8QTT4madTJQq4syCyiTHYPWbpCCHMgqLtShMi3ewZ0c4do0msgekwd1dg3raq9Zj%2BhMqkFmBP0WO3YMqfUeIzoQ0smXK6odu25e3wARfXo1mInbR0Z6J7dAIDkKTbuXPSqPraU55bdrzq4UBJhPMo8ifMyaGSGJEeNClQsJWORPNlSXKw4%2BvHs8ZlN%2BafUnf197cTespJ5hF9cvkKswQd11bdtTQkZVBxtWLNLAnyEz2J0eJvAdrsWek7HRxG3%2BriWimlIZTQdyYINPR9DXRMIrQ48IGOqUB4uDpWmkucm9jje6NbiJFbaPBMoq4CL0lS2tMgjBqESifZfsbUrCsK%2BUEOZnAn4Xdwm74OVLbJ7sCIAKfC5QXmNlKOrpSPS6pOYB4YBiK9YPlG6GsaAyffASZp1qKI0UAc%2F9dI8jgAEpw8oSdVgtrdwhW5Lrz4FrQtAWZ3F2%2FJ69OZx%2FfMVDbpIgPGS9YhGpv3B8bvEtuBuoB4LSZiG7Kha6dwsW7&X-Amz-Signature=96cea8e6212f17cd0405f525b0f993872ed030cbc721b270d0be05bcebc63751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTFYOVW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQChGOc9kE2VGig9EqqIuhE2V9BeQqg0wpa9jCwOCnq%2FbgIgMi8pkTyyRETakbKIGyj5mOmQpfzyjUrfNFyUY41j4H0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3G93j5EHg8jmCKircA3K3QpGeSjXh3J4UoS6neh1C%2FMupxNvpZJR7gtAkxXhVt3g323ypiNZDkFb2FX%2BxK1XrUxtVVsecN2TA6mWqdc4dWTwgvCIz%2F9r%2BHSjqZK4dzsATrlqj0E7pc%2BYrZZffNDd9Jnh6OqN2TitoMyqgb0eCkV%2BtKJs7We4goWZl8%2BDGuWxVFRF87SrOkQ5szB28eYv23WTIfToZWmP%2FzrXLcwxOsGP1Y5S%2BQ6bFKpN6KaDhlo%2FpwO4%2BaKvq2cg0GNmmmZkke8gQdxvrGzs8vVsG6YhYbtKj2s52fzTbHpta5zUu7fMzfuenBS2cl4Px0%2Ft0pJgAwssg6uni%2BscqxM5zB8zQhcMokkEjyu0hZp0B8QTT4madTJQq4syCyiTHYPWbpCCHMgqLtShMi3ewZ0c4do0msgekwd1dg3raq9Zj%2BhMqkFmBP0WO3YMqfUeIzoQ0smXK6odu25e3wARfXo1mInbR0Z6J7dAIDkKTbuXPSqPraU55bdrzq4UBJhPMo8ifMyaGSGJEeNClQsJWORPNlSXKw4%2BvHs8ZlN%2BafUnf197cTespJ5hF9cvkKswQd11bdtTQkZVBxtWLNLAnyEz2J0eJvAdrsWek7HRxG3%2BriWimlIZTQdyYINPR9DXRMIrQ48IGOqUB4uDpWmkucm9jje6NbiJFbaPBMoq4CL0lS2tMgjBqESifZfsbUrCsK%2BUEOZnAn4Xdwm74OVLbJ7sCIAKfC5QXmNlKOrpSPS6pOYB4YBiK9YPlG6GsaAyffASZp1qKI0UAc%2F9dI8jgAEpw8oSdVgtrdwhW5Lrz4FrQtAWZ3F2%2FJ69OZx%2FfMVDbpIgPGS9YhGpv3B8bvEtuBuoB4LSZiG7Kha6dwsW7&X-Amz-Signature=5fc9faa2f9714ff620a272300776e375a0224518142cf2805c6ed9c5af023bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTFYOVW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQChGOc9kE2VGig9EqqIuhE2V9BeQqg0wpa9jCwOCnq%2FbgIgMi8pkTyyRETakbKIGyj5mOmQpfzyjUrfNFyUY41j4H0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3G93j5EHg8jmCKircA3K3QpGeSjXh3J4UoS6neh1C%2FMupxNvpZJR7gtAkxXhVt3g323ypiNZDkFb2FX%2BxK1XrUxtVVsecN2TA6mWqdc4dWTwgvCIz%2F9r%2BHSjqZK4dzsATrlqj0E7pc%2BYrZZffNDd9Jnh6OqN2TitoMyqgb0eCkV%2BtKJs7We4goWZl8%2BDGuWxVFRF87SrOkQ5szB28eYv23WTIfToZWmP%2FzrXLcwxOsGP1Y5S%2BQ6bFKpN6KaDhlo%2FpwO4%2BaKvq2cg0GNmmmZkke8gQdxvrGzs8vVsG6YhYbtKj2s52fzTbHpta5zUu7fMzfuenBS2cl4Px0%2Ft0pJgAwssg6uni%2BscqxM5zB8zQhcMokkEjyu0hZp0B8QTT4madTJQq4syCyiTHYPWbpCCHMgqLtShMi3ewZ0c4do0msgekwd1dg3raq9Zj%2BhMqkFmBP0WO3YMqfUeIzoQ0smXK6odu25e3wARfXo1mInbR0Z6J7dAIDkKTbuXPSqPraU55bdrzq4UBJhPMo8ifMyaGSGJEeNClQsJWORPNlSXKw4%2BvHs8ZlN%2BafUnf197cTespJ5hF9cvkKswQd11bdtTQkZVBxtWLNLAnyEz2J0eJvAdrsWek7HRxG3%2BriWimlIZTQdyYINPR9DXRMIrQ48IGOqUB4uDpWmkucm9jje6NbiJFbaPBMoq4CL0lS2tMgjBqESifZfsbUrCsK%2BUEOZnAn4Xdwm74OVLbJ7sCIAKfC5QXmNlKOrpSPS6pOYB4YBiK9YPlG6GsaAyffASZp1qKI0UAc%2F9dI8jgAEpw8oSdVgtrdwhW5Lrz4FrQtAWZ3F2%2FJ69OZx%2FfMVDbpIgPGS9YhGpv3B8bvEtuBuoB4LSZiG7Kha6dwsW7&X-Amz-Signature=5479aee205f4cc656733aed56691c0e3d19c1e15af2e1a2c7584132eabd71e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVTFYOVW%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T071147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQChGOc9kE2VGig9EqqIuhE2V9BeQqg0wpa9jCwOCnq%2FbgIgMi8pkTyyRETakbKIGyj5mOmQpfzyjUrfNFyUY41j4H0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr3G93j5EHg8jmCKircA3K3QpGeSjXh3J4UoS6neh1C%2FMupxNvpZJR7gtAkxXhVt3g323ypiNZDkFb2FX%2BxK1XrUxtVVsecN2TA6mWqdc4dWTwgvCIz%2F9r%2BHSjqZK4dzsATrlqj0E7pc%2BYrZZffNDd9Jnh6OqN2TitoMyqgb0eCkV%2BtKJs7We4goWZl8%2BDGuWxVFRF87SrOkQ5szB28eYv23WTIfToZWmP%2FzrXLcwxOsGP1Y5S%2BQ6bFKpN6KaDhlo%2FpwO4%2BaKvq2cg0GNmmmZkke8gQdxvrGzs8vVsG6YhYbtKj2s52fzTbHpta5zUu7fMzfuenBS2cl4Px0%2Ft0pJgAwssg6uni%2BscqxM5zB8zQhcMokkEjyu0hZp0B8QTT4madTJQq4syCyiTHYPWbpCCHMgqLtShMi3ewZ0c4do0msgekwd1dg3raq9Zj%2BhMqkFmBP0WO3YMqfUeIzoQ0smXK6odu25e3wARfXo1mInbR0Z6J7dAIDkKTbuXPSqPraU55bdrzq4UBJhPMo8ifMyaGSGJEeNClQsJWORPNlSXKw4%2BvHs8ZlN%2BafUnf197cTespJ5hF9cvkKswQd11bdtTQkZVBxtWLNLAnyEz2J0eJvAdrsWek7HRxG3%2BriWimlIZTQdyYINPR9DXRMIrQ48IGOqUB4uDpWmkucm9jje6NbiJFbaPBMoq4CL0lS2tMgjBqESifZfsbUrCsK%2BUEOZnAn4Xdwm74OVLbJ7sCIAKfC5QXmNlKOrpSPS6pOYB4YBiK9YPlG6GsaAyffASZp1qKI0UAc%2F9dI8jgAEpw8oSdVgtrdwhW5Lrz4FrQtAWZ3F2%2FJ69OZx%2FfMVDbpIgPGS9YhGpv3B8bvEtuBuoB4LSZiG7Kha6dwsW7&X-Amz-Signature=06c8800392d8ea3571adaaa137c365aca26a264cfd0aaa7626bda056aaa47d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
