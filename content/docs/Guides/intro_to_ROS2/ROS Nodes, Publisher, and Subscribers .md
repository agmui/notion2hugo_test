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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCSVQK76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnfcb9TxSXuc49vdiMQ9nj7k0yPgQFbTCC%2FLWLLZOI7wIgBcSn6Tuqa%2FZlfbJhV0UH8uKdDPQ8yOvQyL9ZlgaKRkAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK16Og5Md%2Bf8VfdgWircA%2B0V5cZVq473BonxKsvTcA3TEca5WA7%2BKTQSaCiJemq9mwISTL88X0AYiQImkki78AtNGgfgyCBq0V8hFAraFH50R8rmI34Cs5S42GuPPLePN3I%2Blt55rMFnfOVhgbyzHT0gLDfUiGmHFNGuU9IuDTcuh%2BVSQHeANESviCF65uCP1W83RE5rrlNvFm0hsnFtPoAdJYUhZP0S3LleLl%2BmBm83MR9hirQWRQdrXtffkpJEdCD2ux%2F1BER1ktrbM9MlQ6psrspBagTRYcjBdOSZewupYPsMgtQTnlvI7I6XER1Hkp4NU11WipQ0hevFzwNWOmX7daZMEISf0r38pkYKbdZY%2BsIvak85BriTDAVMaGwwJQTApsSEpgCztSC26ksObLbcalC6sI%2BveUQqOnPXSaXDwao41NgSatKsmXv6KB6ov0qVt6Y4kCPBFqnZNiNQNb%2Bn5JY1bwbSl1D95EplW%2F%2Bvd8UVWWtAMimKwhiz7B2dNswetSZMiKMStLQiNZp5%2Fhft88NfUu0eEL4U7B%2FZDAfgi2DHlyXe0963UVoLF%2FrwNBQONjKRi3%2Bz4k2DT8CSTMqRgIJhMb56Kd%2F8zKgWV94QUZs%2FPV0oMaioh2pTSn3WjFzTpruoDecyWUc%2BMPXR8LwGOqUBjiCcOGjcoreR4davQpFiuUr1beZjgvHIeQ%2BJimt7cJew8MKvOK6x5se06RIhVKrvoKhFV4yIpDLL%2F3O6gX3wOnnF5uTCnYtynYOG3lYZdsfD%2FaoIEW0Fw1dmOBOChXrPu7CnyXCz1XDUyJjXPVIuCDuRL8FLIXD58sgF65P%2B58uINXVgRjAxgW5Gduq7diYNikOmpoLaxwieD1FOVDpdGnLfbLwE&X-Amz-Signature=14d5a1e217c573f6ef7f2fdd03e77ce2af4970dc880533f05104df7501cc52bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCSVQK76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnfcb9TxSXuc49vdiMQ9nj7k0yPgQFbTCC%2FLWLLZOI7wIgBcSn6Tuqa%2FZlfbJhV0UH8uKdDPQ8yOvQyL9ZlgaKRkAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK16Og5Md%2Bf8VfdgWircA%2B0V5cZVq473BonxKsvTcA3TEca5WA7%2BKTQSaCiJemq9mwISTL88X0AYiQImkki78AtNGgfgyCBq0V8hFAraFH50R8rmI34Cs5S42GuPPLePN3I%2Blt55rMFnfOVhgbyzHT0gLDfUiGmHFNGuU9IuDTcuh%2BVSQHeANESviCF65uCP1W83RE5rrlNvFm0hsnFtPoAdJYUhZP0S3LleLl%2BmBm83MR9hirQWRQdrXtffkpJEdCD2ux%2F1BER1ktrbM9MlQ6psrspBagTRYcjBdOSZewupYPsMgtQTnlvI7I6XER1Hkp4NU11WipQ0hevFzwNWOmX7daZMEISf0r38pkYKbdZY%2BsIvak85BriTDAVMaGwwJQTApsSEpgCztSC26ksObLbcalC6sI%2BveUQqOnPXSaXDwao41NgSatKsmXv6KB6ov0qVt6Y4kCPBFqnZNiNQNb%2Bn5JY1bwbSl1D95EplW%2F%2Bvd8UVWWtAMimKwhiz7B2dNswetSZMiKMStLQiNZp5%2Fhft88NfUu0eEL4U7B%2FZDAfgi2DHlyXe0963UVoLF%2FrwNBQONjKRi3%2Bz4k2DT8CSTMqRgIJhMb56Kd%2F8zKgWV94QUZs%2FPV0oMaioh2pTSn3WjFzTpruoDecyWUc%2BMPXR8LwGOqUBjiCcOGjcoreR4davQpFiuUr1beZjgvHIeQ%2BJimt7cJew8MKvOK6x5se06RIhVKrvoKhFV4yIpDLL%2F3O6gX3wOnnF5uTCnYtynYOG3lYZdsfD%2FaoIEW0Fw1dmOBOChXrPu7CnyXCz1XDUyJjXPVIuCDuRL8FLIXD58sgF65P%2B58uINXVgRjAxgW5Gduq7diYNikOmpoLaxwieD1FOVDpdGnLfbLwE&X-Amz-Signature=4c347f5bc6eb0302f0578c28d7bac8d5a773a086cfa009d9c9949d9e20f1d82a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCSVQK76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnfcb9TxSXuc49vdiMQ9nj7k0yPgQFbTCC%2FLWLLZOI7wIgBcSn6Tuqa%2FZlfbJhV0UH8uKdDPQ8yOvQyL9ZlgaKRkAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK16Og5Md%2Bf8VfdgWircA%2B0V5cZVq473BonxKsvTcA3TEca5WA7%2BKTQSaCiJemq9mwISTL88X0AYiQImkki78AtNGgfgyCBq0V8hFAraFH50R8rmI34Cs5S42GuPPLePN3I%2Blt55rMFnfOVhgbyzHT0gLDfUiGmHFNGuU9IuDTcuh%2BVSQHeANESviCF65uCP1W83RE5rrlNvFm0hsnFtPoAdJYUhZP0S3LleLl%2BmBm83MR9hirQWRQdrXtffkpJEdCD2ux%2F1BER1ktrbM9MlQ6psrspBagTRYcjBdOSZewupYPsMgtQTnlvI7I6XER1Hkp4NU11WipQ0hevFzwNWOmX7daZMEISf0r38pkYKbdZY%2BsIvak85BriTDAVMaGwwJQTApsSEpgCztSC26ksObLbcalC6sI%2BveUQqOnPXSaXDwao41NgSatKsmXv6KB6ov0qVt6Y4kCPBFqnZNiNQNb%2Bn5JY1bwbSl1D95EplW%2F%2Bvd8UVWWtAMimKwhiz7B2dNswetSZMiKMStLQiNZp5%2Fhft88NfUu0eEL4U7B%2FZDAfgi2DHlyXe0963UVoLF%2FrwNBQONjKRi3%2Bz4k2DT8CSTMqRgIJhMb56Kd%2F8zKgWV94QUZs%2FPV0oMaioh2pTSn3WjFzTpruoDecyWUc%2BMPXR8LwGOqUBjiCcOGjcoreR4davQpFiuUr1beZjgvHIeQ%2BJimt7cJew8MKvOK6x5se06RIhVKrvoKhFV4yIpDLL%2F3O6gX3wOnnF5uTCnYtynYOG3lYZdsfD%2FaoIEW0Fw1dmOBOChXrPu7CnyXCz1XDUyJjXPVIuCDuRL8FLIXD58sgF65P%2B58uINXVgRjAxgW5Gduq7diYNikOmpoLaxwieD1FOVDpdGnLfbLwE&X-Amz-Signature=9f92db11125d4e4db436eef2f79e31584f8c8805557d7d9e08004b031ff683f2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCSVQK76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnfcb9TxSXuc49vdiMQ9nj7k0yPgQFbTCC%2FLWLLZOI7wIgBcSn6Tuqa%2FZlfbJhV0UH8uKdDPQ8yOvQyL9ZlgaKRkAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK16Og5Md%2Bf8VfdgWircA%2B0V5cZVq473BonxKsvTcA3TEca5WA7%2BKTQSaCiJemq9mwISTL88X0AYiQImkki78AtNGgfgyCBq0V8hFAraFH50R8rmI34Cs5S42GuPPLePN3I%2Blt55rMFnfOVhgbyzHT0gLDfUiGmHFNGuU9IuDTcuh%2BVSQHeANESviCF65uCP1W83RE5rrlNvFm0hsnFtPoAdJYUhZP0S3LleLl%2BmBm83MR9hirQWRQdrXtffkpJEdCD2ux%2F1BER1ktrbM9MlQ6psrspBagTRYcjBdOSZewupYPsMgtQTnlvI7I6XER1Hkp4NU11WipQ0hevFzwNWOmX7daZMEISf0r38pkYKbdZY%2BsIvak85BriTDAVMaGwwJQTApsSEpgCztSC26ksObLbcalC6sI%2BveUQqOnPXSaXDwao41NgSatKsmXv6KB6ov0qVt6Y4kCPBFqnZNiNQNb%2Bn5JY1bwbSl1D95EplW%2F%2Bvd8UVWWtAMimKwhiz7B2dNswetSZMiKMStLQiNZp5%2Fhft88NfUu0eEL4U7B%2FZDAfgi2DHlyXe0963UVoLF%2FrwNBQONjKRi3%2Bz4k2DT8CSTMqRgIJhMb56Kd%2F8zKgWV94QUZs%2FPV0oMaioh2pTSn3WjFzTpruoDecyWUc%2BMPXR8LwGOqUBjiCcOGjcoreR4davQpFiuUr1beZjgvHIeQ%2BJimt7cJew8MKvOK6x5se06RIhVKrvoKhFV4yIpDLL%2F3O6gX3wOnnF5uTCnYtynYOG3lYZdsfD%2FaoIEW0Fw1dmOBOChXrPu7CnyXCz1XDUyJjXPVIuCDuRL8FLIXD58sgF65P%2B58uINXVgRjAxgW5Gduq7diYNikOmpoLaxwieD1FOVDpdGnLfbLwE&X-Amz-Signature=9b526bf638bac0ed76ab2c88b43e419fea040a1a03626a6cf109280bdf1de871&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCSVQK76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnfcb9TxSXuc49vdiMQ9nj7k0yPgQFbTCC%2FLWLLZOI7wIgBcSn6Tuqa%2FZlfbJhV0UH8uKdDPQ8yOvQyL9ZlgaKRkAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK16Og5Md%2Bf8VfdgWircA%2B0V5cZVq473BonxKsvTcA3TEca5WA7%2BKTQSaCiJemq9mwISTL88X0AYiQImkki78AtNGgfgyCBq0V8hFAraFH50R8rmI34Cs5S42GuPPLePN3I%2Blt55rMFnfOVhgbyzHT0gLDfUiGmHFNGuU9IuDTcuh%2BVSQHeANESviCF65uCP1W83RE5rrlNvFm0hsnFtPoAdJYUhZP0S3LleLl%2BmBm83MR9hirQWRQdrXtffkpJEdCD2ux%2F1BER1ktrbM9MlQ6psrspBagTRYcjBdOSZewupYPsMgtQTnlvI7I6XER1Hkp4NU11WipQ0hevFzwNWOmX7daZMEISf0r38pkYKbdZY%2BsIvak85BriTDAVMaGwwJQTApsSEpgCztSC26ksObLbcalC6sI%2BveUQqOnPXSaXDwao41NgSatKsmXv6KB6ov0qVt6Y4kCPBFqnZNiNQNb%2Bn5JY1bwbSl1D95EplW%2F%2Bvd8UVWWtAMimKwhiz7B2dNswetSZMiKMStLQiNZp5%2Fhft88NfUu0eEL4U7B%2FZDAfgi2DHlyXe0963UVoLF%2FrwNBQONjKRi3%2Bz4k2DT8CSTMqRgIJhMb56Kd%2F8zKgWV94QUZs%2FPV0oMaioh2pTSn3WjFzTpruoDecyWUc%2BMPXR8LwGOqUBjiCcOGjcoreR4davQpFiuUr1beZjgvHIeQ%2BJimt7cJew8MKvOK6x5se06RIhVKrvoKhFV4yIpDLL%2F3O6gX3wOnnF5uTCnYtynYOG3lYZdsfD%2FaoIEW0Fw1dmOBOChXrPu7CnyXCz1XDUyJjXPVIuCDuRL8FLIXD58sgF65P%2B58uINXVgRjAxgW5Gduq7diYNikOmpoLaxwieD1FOVDpdGnLfbLwE&X-Amz-Signature=b6fb5fdfe117f3455982425cc2be50d209ea6f0e30101dbd7ecfb666b8306821&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCSVQK76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnfcb9TxSXuc49vdiMQ9nj7k0yPgQFbTCC%2FLWLLZOI7wIgBcSn6Tuqa%2FZlfbJhV0UH8uKdDPQ8yOvQyL9ZlgaKRkAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK16Og5Md%2Bf8VfdgWircA%2B0V5cZVq473BonxKsvTcA3TEca5WA7%2BKTQSaCiJemq9mwISTL88X0AYiQImkki78AtNGgfgyCBq0V8hFAraFH50R8rmI34Cs5S42GuPPLePN3I%2Blt55rMFnfOVhgbyzHT0gLDfUiGmHFNGuU9IuDTcuh%2BVSQHeANESviCF65uCP1W83RE5rrlNvFm0hsnFtPoAdJYUhZP0S3LleLl%2BmBm83MR9hirQWRQdrXtffkpJEdCD2ux%2F1BER1ktrbM9MlQ6psrspBagTRYcjBdOSZewupYPsMgtQTnlvI7I6XER1Hkp4NU11WipQ0hevFzwNWOmX7daZMEISf0r38pkYKbdZY%2BsIvak85BriTDAVMaGwwJQTApsSEpgCztSC26ksObLbcalC6sI%2BveUQqOnPXSaXDwao41NgSatKsmXv6KB6ov0qVt6Y4kCPBFqnZNiNQNb%2Bn5JY1bwbSl1D95EplW%2F%2Bvd8UVWWtAMimKwhiz7B2dNswetSZMiKMStLQiNZp5%2Fhft88NfUu0eEL4U7B%2FZDAfgi2DHlyXe0963UVoLF%2FrwNBQONjKRi3%2Bz4k2DT8CSTMqRgIJhMb56Kd%2F8zKgWV94QUZs%2FPV0oMaioh2pTSn3WjFzTpruoDecyWUc%2BMPXR8LwGOqUBjiCcOGjcoreR4davQpFiuUr1beZjgvHIeQ%2BJimt7cJew8MKvOK6x5se06RIhVKrvoKhFV4yIpDLL%2F3O6gX3wOnnF5uTCnYtynYOG3lYZdsfD%2FaoIEW0Fw1dmOBOChXrPu7CnyXCz1XDUyJjXPVIuCDuRL8FLIXD58sgF65P%2B58uINXVgRjAxgW5Gduq7diYNikOmpoLaxwieD1FOVDpdGnLfbLwE&X-Amz-Signature=03092f29d9a56a471626a6fb5b989c28eaa997fa8d79d91d1375752a6cf53fdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCSVQK76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnfcb9TxSXuc49vdiMQ9nj7k0yPgQFbTCC%2FLWLLZOI7wIgBcSn6Tuqa%2FZlfbJhV0UH8uKdDPQ8yOvQyL9ZlgaKRkAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK16Og5Md%2Bf8VfdgWircA%2B0V5cZVq473BonxKsvTcA3TEca5WA7%2BKTQSaCiJemq9mwISTL88X0AYiQImkki78AtNGgfgyCBq0V8hFAraFH50R8rmI34Cs5S42GuPPLePN3I%2Blt55rMFnfOVhgbyzHT0gLDfUiGmHFNGuU9IuDTcuh%2BVSQHeANESviCF65uCP1W83RE5rrlNvFm0hsnFtPoAdJYUhZP0S3LleLl%2BmBm83MR9hirQWRQdrXtffkpJEdCD2ux%2F1BER1ktrbM9MlQ6psrspBagTRYcjBdOSZewupYPsMgtQTnlvI7I6XER1Hkp4NU11WipQ0hevFzwNWOmX7daZMEISf0r38pkYKbdZY%2BsIvak85BriTDAVMaGwwJQTApsSEpgCztSC26ksObLbcalC6sI%2BveUQqOnPXSaXDwao41NgSatKsmXv6KB6ov0qVt6Y4kCPBFqnZNiNQNb%2Bn5JY1bwbSl1D95EplW%2F%2Bvd8UVWWtAMimKwhiz7B2dNswetSZMiKMStLQiNZp5%2Fhft88NfUu0eEL4U7B%2FZDAfgi2DHlyXe0963UVoLF%2FrwNBQONjKRi3%2Bz4k2DT8CSTMqRgIJhMb56Kd%2F8zKgWV94QUZs%2FPV0oMaioh2pTSn3WjFzTpruoDecyWUc%2BMPXR8LwGOqUBjiCcOGjcoreR4davQpFiuUr1beZjgvHIeQ%2BJimt7cJew8MKvOK6x5se06RIhVKrvoKhFV4yIpDLL%2F3O6gX3wOnnF5uTCnYtynYOG3lYZdsfD%2FaoIEW0Fw1dmOBOChXrPu7CnyXCz1XDUyJjXPVIuCDuRL8FLIXD58sgF65P%2B58uINXVgRjAxgW5Gduq7diYNikOmpoLaxwieD1FOVDpdGnLfbLwE&X-Amz-Signature=cd4f1585907e0869a55afe8ed8e80610091e8b9dcd3a8670fe3a5562deffeffb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCSVQK76%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnfcb9TxSXuc49vdiMQ9nj7k0yPgQFbTCC%2FLWLLZOI7wIgBcSn6Tuqa%2FZlfbJhV0UH8uKdDPQ8yOvQyL9ZlgaKRkAqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK16Og5Md%2Bf8VfdgWircA%2B0V5cZVq473BonxKsvTcA3TEca5WA7%2BKTQSaCiJemq9mwISTL88X0AYiQImkki78AtNGgfgyCBq0V8hFAraFH50R8rmI34Cs5S42GuPPLePN3I%2Blt55rMFnfOVhgbyzHT0gLDfUiGmHFNGuU9IuDTcuh%2BVSQHeANESviCF65uCP1W83RE5rrlNvFm0hsnFtPoAdJYUhZP0S3LleLl%2BmBm83MR9hirQWRQdrXtffkpJEdCD2ux%2F1BER1ktrbM9MlQ6psrspBagTRYcjBdOSZewupYPsMgtQTnlvI7I6XER1Hkp4NU11WipQ0hevFzwNWOmX7daZMEISf0r38pkYKbdZY%2BsIvak85BriTDAVMaGwwJQTApsSEpgCztSC26ksObLbcalC6sI%2BveUQqOnPXSaXDwao41NgSatKsmXv6KB6ov0qVt6Y4kCPBFqnZNiNQNb%2Bn5JY1bwbSl1D95EplW%2F%2Bvd8UVWWtAMimKwhiz7B2dNswetSZMiKMStLQiNZp5%2Fhft88NfUu0eEL4U7B%2FZDAfgi2DHlyXe0963UVoLF%2FrwNBQONjKRi3%2Bz4k2DT8CSTMqRgIJhMb56Kd%2F8zKgWV94QUZs%2FPV0oMaioh2pTSn3WjFzTpruoDecyWUc%2BMPXR8LwGOqUBjiCcOGjcoreR4davQpFiuUr1beZjgvHIeQ%2BJimt7cJew8MKvOK6x5se06RIhVKrvoKhFV4yIpDLL%2F3O6gX3wOnnF5uTCnYtynYOG3lYZdsfD%2FaoIEW0Fw1dmOBOChXrPu7CnyXCz1XDUyJjXPVIuCDuRL8FLIXD58sgF65P%2B58uINXVgRjAxgW5Gduq7diYNikOmpoLaxwieD1FOVDpdGnLfbLwE&X-Amz-Signature=fb7166374a042cfdf0fdd9a623eaf438d601fc5c358cb19f7d7efb0ae86f4579&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
