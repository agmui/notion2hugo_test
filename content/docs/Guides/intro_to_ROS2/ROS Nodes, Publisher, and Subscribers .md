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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFTOGUA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICfE2Xyc8Ssw6qttgs75RmM1TaqvNoLJR2mLy4AqiRkuAiEAoOnWrVWalhU6yRN24ScVCd8qAHYBuPm4hnNkd04AaE0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7a6AbRqDK0UcqJ0CrcA3Oo9kr4vUNEgnVoPRvEtul9sFE0YbYV3qV3d04DPfO5T6NE61XoGDTmVqXtsEYmZDa3wuAWX1ApHs3u0p%2F91raYnr1WY9UaUs72nJPyWyl7RTe4QQrvERyhj0pW7Ulg4rBzU7qH9z4H%2FDH%2FTcbVgeu%2B8kxcyZmAZSNi97Pkz5IWCg8tCIN32uyEIGxvijleifX0OkvJ16w0NB5rC44pBPKcUKGvU0t88BH8dXmGcz7tsKYs%2Fs0BqnjHi0dU8K3hnWheJJ8IZ5EzTZatUXiPssTRoV9TyeyWH%2FIRIeutbz43VbdCmpxzreFy%2Bbx%2F6Uk7PS7ai86QNLDNl5sO0jTbEswu%2F6NW%2BIEb9Ek9NV6aTJThuP1SeWPVvjUuoKvD%2FaysmjsaXHxRGg33y1XS0H4Hu8gWS3bD4nPMsa5AQeo7HTwsg4i2wNejA33ZZwyiID2cwtfVCOuR88urknjwGT61WkL89XUHNU7%2F9961JS%2BeJcPW0dybFu3JmK6Pm2sGSeJoIz8C0u2WpsNofORPWnlTr1cqhUPmRWtF%2BO2CxEYUhE9pe8xP58mqkROrbrl91FbNRAJM7PLAuZPI3ZDrhhNxWZmRO%2BNFkbApKE%2BByaReMNx3Ta6aUGiqTAV2faWfMKaqnsAGOqUBGseFXXmNIQBYcJCt5sUZvVnyM0ibC3PpPsf%2F0Qj%2FnktTCzcqYrXxgGi5fAQI%2B%2BZZH%2BNoPgwW3qTEJURTkEdn65oP1dARfoxRZbaFxbP4qo66BjVbgN65kf7fqugG44b32OKCdKqN%2B2sgN56L3NWD5jqDAiWiIsBubJRbzZ2L02LoS%2BXzdDNp11EadzDGI5%2FMG3hqqOxMgYlbVFFWP01NaQQJwrOL&X-Amz-Signature=0ecc8043e727dbbb21740e92168a0f06506c20350924485df496f0070a8100af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFTOGUA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICfE2Xyc8Ssw6qttgs75RmM1TaqvNoLJR2mLy4AqiRkuAiEAoOnWrVWalhU6yRN24ScVCd8qAHYBuPm4hnNkd04AaE0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7a6AbRqDK0UcqJ0CrcA3Oo9kr4vUNEgnVoPRvEtul9sFE0YbYV3qV3d04DPfO5T6NE61XoGDTmVqXtsEYmZDa3wuAWX1ApHs3u0p%2F91raYnr1WY9UaUs72nJPyWyl7RTe4QQrvERyhj0pW7Ulg4rBzU7qH9z4H%2FDH%2FTcbVgeu%2B8kxcyZmAZSNi97Pkz5IWCg8tCIN32uyEIGxvijleifX0OkvJ16w0NB5rC44pBPKcUKGvU0t88BH8dXmGcz7tsKYs%2Fs0BqnjHi0dU8K3hnWheJJ8IZ5EzTZatUXiPssTRoV9TyeyWH%2FIRIeutbz43VbdCmpxzreFy%2Bbx%2F6Uk7PS7ai86QNLDNl5sO0jTbEswu%2F6NW%2BIEb9Ek9NV6aTJThuP1SeWPVvjUuoKvD%2FaysmjsaXHxRGg33y1XS0H4Hu8gWS3bD4nPMsa5AQeo7HTwsg4i2wNejA33ZZwyiID2cwtfVCOuR88urknjwGT61WkL89XUHNU7%2F9961JS%2BeJcPW0dybFu3JmK6Pm2sGSeJoIz8C0u2WpsNofORPWnlTr1cqhUPmRWtF%2BO2CxEYUhE9pe8xP58mqkROrbrl91FbNRAJM7PLAuZPI3ZDrhhNxWZmRO%2BNFkbApKE%2BByaReMNx3Ta6aUGiqTAV2faWfMKaqnsAGOqUBGseFXXmNIQBYcJCt5sUZvVnyM0ibC3PpPsf%2F0Qj%2FnktTCzcqYrXxgGi5fAQI%2B%2BZZH%2BNoPgwW3qTEJURTkEdn65oP1dARfoxRZbaFxbP4qo66BjVbgN65kf7fqugG44b32OKCdKqN%2B2sgN56L3NWD5jqDAiWiIsBubJRbzZ2L02LoS%2BXzdDNp11EadzDGI5%2FMG3hqqOxMgYlbVFFWP01NaQQJwrOL&X-Amz-Signature=c0bf1aa8cbe68ddffb3900831ecc4e27465f868d24ec923613467c72606b1ecf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFTOGUA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICfE2Xyc8Ssw6qttgs75RmM1TaqvNoLJR2mLy4AqiRkuAiEAoOnWrVWalhU6yRN24ScVCd8qAHYBuPm4hnNkd04AaE0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7a6AbRqDK0UcqJ0CrcA3Oo9kr4vUNEgnVoPRvEtul9sFE0YbYV3qV3d04DPfO5T6NE61XoGDTmVqXtsEYmZDa3wuAWX1ApHs3u0p%2F91raYnr1WY9UaUs72nJPyWyl7RTe4QQrvERyhj0pW7Ulg4rBzU7qH9z4H%2FDH%2FTcbVgeu%2B8kxcyZmAZSNi97Pkz5IWCg8tCIN32uyEIGxvijleifX0OkvJ16w0NB5rC44pBPKcUKGvU0t88BH8dXmGcz7tsKYs%2Fs0BqnjHi0dU8K3hnWheJJ8IZ5EzTZatUXiPssTRoV9TyeyWH%2FIRIeutbz43VbdCmpxzreFy%2Bbx%2F6Uk7PS7ai86QNLDNl5sO0jTbEswu%2F6NW%2BIEb9Ek9NV6aTJThuP1SeWPVvjUuoKvD%2FaysmjsaXHxRGg33y1XS0H4Hu8gWS3bD4nPMsa5AQeo7HTwsg4i2wNejA33ZZwyiID2cwtfVCOuR88urknjwGT61WkL89XUHNU7%2F9961JS%2BeJcPW0dybFu3JmK6Pm2sGSeJoIz8C0u2WpsNofORPWnlTr1cqhUPmRWtF%2BO2CxEYUhE9pe8xP58mqkROrbrl91FbNRAJM7PLAuZPI3ZDrhhNxWZmRO%2BNFkbApKE%2BByaReMNx3Ta6aUGiqTAV2faWfMKaqnsAGOqUBGseFXXmNIQBYcJCt5sUZvVnyM0ibC3PpPsf%2F0Qj%2FnktTCzcqYrXxgGi5fAQI%2B%2BZZH%2BNoPgwW3qTEJURTkEdn65oP1dARfoxRZbaFxbP4qo66BjVbgN65kf7fqugG44b32OKCdKqN%2B2sgN56L3NWD5jqDAiWiIsBubJRbzZ2L02LoS%2BXzdDNp11EadzDGI5%2FMG3hqqOxMgYlbVFFWP01NaQQJwrOL&X-Amz-Signature=a1d0c83a474e9161d4929aaff3408611f0f732cc4901b85df28463d48ab1dbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFTOGUA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICfE2Xyc8Ssw6qttgs75RmM1TaqvNoLJR2mLy4AqiRkuAiEAoOnWrVWalhU6yRN24ScVCd8qAHYBuPm4hnNkd04AaE0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7a6AbRqDK0UcqJ0CrcA3Oo9kr4vUNEgnVoPRvEtul9sFE0YbYV3qV3d04DPfO5T6NE61XoGDTmVqXtsEYmZDa3wuAWX1ApHs3u0p%2F91raYnr1WY9UaUs72nJPyWyl7RTe4QQrvERyhj0pW7Ulg4rBzU7qH9z4H%2FDH%2FTcbVgeu%2B8kxcyZmAZSNi97Pkz5IWCg8tCIN32uyEIGxvijleifX0OkvJ16w0NB5rC44pBPKcUKGvU0t88BH8dXmGcz7tsKYs%2Fs0BqnjHi0dU8K3hnWheJJ8IZ5EzTZatUXiPssTRoV9TyeyWH%2FIRIeutbz43VbdCmpxzreFy%2Bbx%2F6Uk7PS7ai86QNLDNl5sO0jTbEswu%2F6NW%2BIEb9Ek9NV6aTJThuP1SeWPVvjUuoKvD%2FaysmjsaXHxRGg33y1XS0H4Hu8gWS3bD4nPMsa5AQeo7HTwsg4i2wNejA33ZZwyiID2cwtfVCOuR88urknjwGT61WkL89XUHNU7%2F9961JS%2BeJcPW0dybFu3JmK6Pm2sGSeJoIz8C0u2WpsNofORPWnlTr1cqhUPmRWtF%2BO2CxEYUhE9pe8xP58mqkROrbrl91FbNRAJM7PLAuZPI3ZDrhhNxWZmRO%2BNFkbApKE%2BByaReMNx3Ta6aUGiqTAV2faWfMKaqnsAGOqUBGseFXXmNIQBYcJCt5sUZvVnyM0ibC3PpPsf%2F0Qj%2FnktTCzcqYrXxgGi5fAQI%2B%2BZZH%2BNoPgwW3qTEJURTkEdn65oP1dARfoxRZbaFxbP4qo66BjVbgN65kf7fqugG44b32OKCdKqN%2B2sgN56L3NWD5jqDAiWiIsBubJRbzZ2L02LoS%2BXzdDNp11EadzDGI5%2FMG3hqqOxMgYlbVFFWP01NaQQJwrOL&X-Amz-Signature=f8b597b9ebfa4c7fbe51c081432a09791bc4b9f0bd9a277769ab42571b5eff16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFTOGUA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICfE2Xyc8Ssw6qttgs75RmM1TaqvNoLJR2mLy4AqiRkuAiEAoOnWrVWalhU6yRN24ScVCd8qAHYBuPm4hnNkd04AaE0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7a6AbRqDK0UcqJ0CrcA3Oo9kr4vUNEgnVoPRvEtul9sFE0YbYV3qV3d04DPfO5T6NE61XoGDTmVqXtsEYmZDa3wuAWX1ApHs3u0p%2F91raYnr1WY9UaUs72nJPyWyl7RTe4QQrvERyhj0pW7Ulg4rBzU7qH9z4H%2FDH%2FTcbVgeu%2B8kxcyZmAZSNi97Pkz5IWCg8tCIN32uyEIGxvijleifX0OkvJ16w0NB5rC44pBPKcUKGvU0t88BH8dXmGcz7tsKYs%2Fs0BqnjHi0dU8K3hnWheJJ8IZ5EzTZatUXiPssTRoV9TyeyWH%2FIRIeutbz43VbdCmpxzreFy%2Bbx%2F6Uk7PS7ai86QNLDNl5sO0jTbEswu%2F6NW%2BIEb9Ek9NV6aTJThuP1SeWPVvjUuoKvD%2FaysmjsaXHxRGg33y1XS0H4Hu8gWS3bD4nPMsa5AQeo7HTwsg4i2wNejA33ZZwyiID2cwtfVCOuR88urknjwGT61WkL89XUHNU7%2F9961JS%2BeJcPW0dybFu3JmK6Pm2sGSeJoIz8C0u2WpsNofORPWnlTr1cqhUPmRWtF%2BO2CxEYUhE9pe8xP58mqkROrbrl91FbNRAJM7PLAuZPI3ZDrhhNxWZmRO%2BNFkbApKE%2BByaReMNx3Ta6aUGiqTAV2faWfMKaqnsAGOqUBGseFXXmNIQBYcJCt5sUZvVnyM0ibC3PpPsf%2F0Qj%2FnktTCzcqYrXxgGi5fAQI%2B%2BZZH%2BNoPgwW3qTEJURTkEdn65oP1dARfoxRZbaFxbP4qo66BjVbgN65kf7fqugG44b32OKCdKqN%2B2sgN56L3NWD5jqDAiWiIsBubJRbzZ2L02LoS%2BXzdDNp11EadzDGI5%2FMG3hqqOxMgYlbVFFWP01NaQQJwrOL&X-Amz-Signature=38ef5bf01e3a32968962990e6157644514aeb4636be039a1aef589e8c308d4b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFTOGUA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICfE2Xyc8Ssw6qttgs75RmM1TaqvNoLJR2mLy4AqiRkuAiEAoOnWrVWalhU6yRN24ScVCd8qAHYBuPm4hnNkd04AaE0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7a6AbRqDK0UcqJ0CrcA3Oo9kr4vUNEgnVoPRvEtul9sFE0YbYV3qV3d04DPfO5T6NE61XoGDTmVqXtsEYmZDa3wuAWX1ApHs3u0p%2F91raYnr1WY9UaUs72nJPyWyl7RTe4QQrvERyhj0pW7Ulg4rBzU7qH9z4H%2FDH%2FTcbVgeu%2B8kxcyZmAZSNi97Pkz5IWCg8tCIN32uyEIGxvijleifX0OkvJ16w0NB5rC44pBPKcUKGvU0t88BH8dXmGcz7tsKYs%2Fs0BqnjHi0dU8K3hnWheJJ8IZ5EzTZatUXiPssTRoV9TyeyWH%2FIRIeutbz43VbdCmpxzreFy%2Bbx%2F6Uk7PS7ai86QNLDNl5sO0jTbEswu%2F6NW%2BIEb9Ek9NV6aTJThuP1SeWPVvjUuoKvD%2FaysmjsaXHxRGg33y1XS0H4Hu8gWS3bD4nPMsa5AQeo7HTwsg4i2wNejA33ZZwyiID2cwtfVCOuR88urknjwGT61WkL89XUHNU7%2F9961JS%2BeJcPW0dybFu3JmK6Pm2sGSeJoIz8C0u2WpsNofORPWnlTr1cqhUPmRWtF%2BO2CxEYUhE9pe8xP58mqkROrbrl91FbNRAJM7PLAuZPI3ZDrhhNxWZmRO%2BNFkbApKE%2BByaReMNx3Ta6aUGiqTAV2faWfMKaqnsAGOqUBGseFXXmNIQBYcJCt5sUZvVnyM0ibC3PpPsf%2F0Qj%2FnktTCzcqYrXxgGi5fAQI%2B%2BZZH%2BNoPgwW3qTEJURTkEdn65oP1dARfoxRZbaFxbP4qo66BjVbgN65kf7fqugG44b32OKCdKqN%2B2sgN56L3NWD5jqDAiWiIsBubJRbzZ2L02LoS%2BXzdDNp11EadzDGI5%2FMG3hqqOxMgYlbVFFWP01NaQQJwrOL&X-Amz-Signature=d586cfd8394e1e9fb51a0bd76a2906be93440ae525db21d58278fc8b71adde2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFTOGUA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICfE2Xyc8Ssw6qttgs75RmM1TaqvNoLJR2mLy4AqiRkuAiEAoOnWrVWalhU6yRN24ScVCd8qAHYBuPm4hnNkd04AaE0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7a6AbRqDK0UcqJ0CrcA3Oo9kr4vUNEgnVoPRvEtul9sFE0YbYV3qV3d04DPfO5T6NE61XoGDTmVqXtsEYmZDa3wuAWX1ApHs3u0p%2F91raYnr1WY9UaUs72nJPyWyl7RTe4QQrvERyhj0pW7Ulg4rBzU7qH9z4H%2FDH%2FTcbVgeu%2B8kxcyZmAZSNi97Pkz5IWCg8tCIN32uyEIGxvijleifX0OkvJ16w0NB5rC44pBPKcUKGvU0t88BH8dXmGcz7tsKYs%2Fs0BqnjHi0dU8K3hnWheJJ8IZ5EzTZatUXiPssTRoV9TyeyWH%2FIRIeutbz43VbdCmpxzreFy%2Bbx%2F6Uk7PS7ai86QNLDNl5sO0jTbEswu%2F6NW%2BIEb9Ek9NV6aTJThuP1SeWPVvjUuoKvD%2FaysmjsaXHxRGg33y1XS0H4Hu8gWS3bD4nPMsa5AQeo7HTwsg4i2wNejA33ZZwyiID2cwtfVCOuR88urknjwGT61WkL89XUHNU7%2F9961JS%2BeJcPW0dybFu3JmK6Pm2sGSeJoIz8C0u2WpsNofORPWnlTr1cqhUPmRWtF%2BO2CxEYUhE9pe8xP58mqkROrbrl91FbNRAJM7PLAuZPI3ZDrhhNxWZmRO%2BNFkbApKE%2BByaReMNx3Ta6aUGiqTAV2faWfMKaqnsAGOqUBGseFXXmNIQBYcJCt5sUZvVnyM0ibC3PpPsf%2F0Qj%2FnktTCzcqYrXxgGi5fAQI%2B%2BZZH%2BNoPgwW3qTEJURTkEdn65oP1dARfoxRZbaFxbP4qo66BjVbgN65kf7fqugG44b32OKCdKqN%2B2sgN56L3NWD5jqDAiWiIsBubJRbzZ2L02LoS%2BXzdDNp11EadzDGI5%2FMG3hqqOxMgYlbVFFWP01NaQQJwrOL&X-Amz-Signature=8f31df3a7d677d007466a24c21d90a035735cb46757ab3f22730b8c0be91cd90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUFTOGUA%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICfE2Xyc8Ssw6qttgs75RmM1TaqvNoLJR2mLy4AqiRkuAiEAoOnWrVWalhU6yRN24ScVCd8qAHYBuPm4hnNkd04AaE0qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7a6AbRqDK0UcqJ0CrcA3Oo9kr4vUNEgnVoPRvEtul9sFE0YbYV3qV3d04DPfO5T6NE61XoGDTmVqXtsEYmZDa3wuAWX1ApHs3u0p%2F91raYnr1WY9UaUs72nJPyWyl7RTe4QQrvERyhj0pW7Ulg4rBzU7qH9z4H%2FDH%2FTcbVgeu%2B8kxcyZmAZSNi97Pkz5IWCg8tCIN32uyEIGxvijleifX0OkvJ16w0NB5rC44pBPKcUKGvU0t88BH8dXmGcz7tsKYs%2Fs0BqnjHi0dU8K3hnWheJJ8IZ5EzTZatUXiPssTRoV9TyeyWH%2FIRIeutbz43VbdCmpxzreFy%2Bbx%2F6Uk7PS7ai86QNLDNl5sO0jTbEswu%2F6NW%2BIEb9Ek9NV6aTJThuP1SeWPVvjUuoKvD%2FaysmjsaXHxRGg33y1XS0H4Hu8gWS3bD4nPMsa5AQeo7HTwsg4i2wNejA33ZZwyiID2cwtfVCOuR88urknjwGT61WkL89XUHNU7%2F9961JS%2BeJcPW0dybFu3JmK6Pm2sGSeJoIz8C0u2WpsNofORPWnlTr1cqhUPmRWtF%2BO2CxEYUhE9pe8xP58mqkROrbrl91FbNRAJM7PLAuZPI3ZDrhhNxWZmRO%2BNFkbApKE%2BByaReMNx3Ta6aUGiqTAV2faWfMKaqnsAGOqUBGseFXXmNIQBYcJCt5sUZvVnyM0ibC3PpPsf%2F0Qj%2FnktTCzcqYrXxgGi5fAQI%2B%2BZZH%2BNoPgwW3qTEJURTkEdn65oP1dARfoxRZbaFxbP4qo66BjVbgN65kf7fqugG44b32OKCdKqN%2B2sgN56L3NWD5jqDAiWiIsBubJRbzZ2L02LoS%2BXzdDNp11EadzDGI5%2FMG3hqqOxMgYlbVFFWP01NaQQJwrOL&X-Amz-Signature=b204ee7b8763c99af44b1410495ad0f1860e53d410a8c4eeb8ac3d1f2d7454f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
