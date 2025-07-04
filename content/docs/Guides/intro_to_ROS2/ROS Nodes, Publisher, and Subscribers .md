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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHBV36M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDM9l1kEih39AjnP8Qa1WZhThxQy1ENvGhvNiH3%2FRBxogIhAOwYm%2FHwS%2BZe%2Fmg14tLMrbvuECCDBZ8N8mDHL%2FavcgooKv8DCCQQABoMNjM3NDIzMTgzODA1IgzcREcWTwA3fOI2RIYq3AO5ueYeTjSUpMKKM%2FgkG9eKp9WShQMU1%2FC%2FTRypXQY34nrjIU5%2BCuIiHVqoKqS6kbTBbkD6AsKq%2Fsp4Bo%2B7M5FDnm5enRmj7cZXJm1ouT1z83U4YXeTZYQ%2B1Y7waETmvZavNqaaq8naGE1Va1AoLq2ruRqULe%2BK7ZzyYkNQoQl1lMy5oQN7j8GdTj%2BNdq6%2FWydsQw6%2FlttPi4m8LolxqqOqH0I2049M6V%2BxPvN%2FTLx2GCxqoLM4KJ2TmI8GhMzbD1F%2BFs80nZZRIb7K%2FVYpa7AQTf0KiQhX6uvvGsQrpDceRi%2BdXl8BWx8hbyywaCRet04t%2Byu%2BRI2bZ1gmjxURLLBFDQjMWa2qZm89GVwVG8kpVuL5%2BQCWsB1uc%2BHd9vBd5qSdd%2BcUPob%2BTtM6zVaz5NttstgWkTgx3bGeDrtxzwQCiuwaCNFbHe4n5Bo7Bu6gksuqSEkzRRG6yQtG65US6KLxCd%2BtBsSqJNpymJOafiAj2OcBypRRs3zXFd9xRx4akzVAwdFfCrbALtNYttBcoNNNHUQANfWotafqotUb4FHDhP7XmQ7KKA72DaFVejaMOw3VptV4mzqEcHEOxoBYeP528rUzFRvOObtL%2FaTaymlHTYBsYVpsMjD5VCkn9jDMjp3DBjqkAYO00drIH7DsJiaKsA2gRSclE8qRL2%2FXUjDhnPyAoHb9rV%2Fg84%2FWksDq1IMN9zFBgr0HlpzvJ4pTK2xg8Xyo%2B669%2Bd6pvz0a2Mbm4HOmuY9NdjlDB2gFenCEOyqIMUNUJ2P7hhOZOx5%2FTxPb8qKMoyy%2FVdPVFfa5tCQRc1evoXBzNk8uOt1wuqVZ5s70fwNmwINzu69z0yI9T9nfhlXQ1hqpJoia&X-Amz-Signature=1f050565bb3f3645f1c40b7689b9d11d212b9871b8ee8884e574db7284ea36b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHBV36M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDM9l1kEih39AjnP8Qa1WZhThxQy1ENvGhvNiH3%2FRBxogIhAOwYm%2FHwS%2BZe%2Fmg14tLMrbvuECCDBZ8N8mDHL%2FavcgooKv8DCCQQABoMNjM3NDIzMTgzODA1IgzcREcWTwA3fOI2RIYq3AO5ueYeTjSUpMKKM%2FgkG9eKp9WShQMU1%2FC%2FTRypXQY34nrjIU5%2BCuIiHVqoKqS6kbTBbkD6AsKq%2Fsp4Bo%2B7M5FDnm5enRmj7cZXJm1ouT1z83U4YXeTZYQ%2B1Y7waETmvZavNqaaq8naGE1Va1AoLq2ruRqULe%2BK7ZzyYkNQoQl1lMy5oQN7j8GdTj%2BNdq6%2FWydsQw6%2FlttPi4m8LolxqqOqH0I2049M6V%2BxPvN%2FTLx2GCxqoLM4KJ2TmI8GhMzbD1F%2BFs80nZZRIb7K%2FVYpa7AQTf0KiQhX6uvvGsQrpDceRi%2BdXl8BWx8hbyywaCRet04t%2Byu%2BRI2bZ1gmjxURLLBFDQjMWa2qZm89GVwVG8kpVuL5%2BQCWsB1uc%2BHd9vBd5qSdd%2BcUPob%2BTtM6zVaz5NttstgWkTgx3bGeDrtxzwQCiuwaCNFbHe4n5Bo7Bu6gksuqSEkzRRG6yQtG65US6KLxCd%2BtBsSqJNpymJOafiAj2OcBypRRs3zXFd9xRx4akzVAwdFfCrbALtNYttBcoNNNHUQANfWotafqotUb4FHDhP7XmQ7KKA72DaFVejaMOw3VptV4mzqEcHEOxoBYeP528rUzFRvOObtL%2FaTaymlHTYBsYVpsMjD5VCkn9jDMjp3DBjqkAYO00drIH7DsJiaKsA2gRSclE8qRL2%2FXUjDhnPyAoHb9rV%2Fg84%2FWksDq1IMN9zFBgr0HlpzvJ4pTK2xg8Xyo%2B669%2Bd6pvz0a2Mbm4HOmuY9NdjlDB2gFenCEOyqIMUNUJ2P7hhOZOx5%2FTxPb8qKMoyy%2FVdPVFfa5tCQRc1evoXBzNk8uOt1wuqVZ5s70fwNmwINzu69z0yI9T9nfhlXQ1hqpJoia&X-Amz-Signature=0e31dce6e00f3058d4913059badc8f424b3dd4949372756f03e1c1ce15e7ee82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHBV36M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDM9l1kEih39AjnP8Qa1WZhThxQy1ENvGhvNiH3%2FRBxogIhAOwYm%2FHwS%2BZe%2Fmg14tLMrbvuECCDBZ8N8mDHL%2FavcgooKv8DCCQQABoMNjM3NDIzMTgzODA1IgzcREcWTwA3fOI2RIYq3AO5ueYeTjSUpMKKM%2FgkG9eKp9WShQMU1%2FC%2FTRypXQY34nrjIU5%2BCuIiHVqoKqS6kbTBbkD6AsKq%2Fsp4Bo%2B7M5FDnm5enRmj7cZXJm1ouT1z83U4YXeTZYQ%2B1Y7waETmvZavNqaaq8naGE1Va1AoLq2ruRqULe%2BK7ZzyYkNQoQl1lMy5oQN7j8GdTj%2BNdq6%2FWydsQw6%2FlttPi4m8LolxqqOqH0I2049M6V%2BxPvN%2FTLx2GCxqoLM4KJ2TmI8GhMzbD1F%2BFs80nZZRIb7K%2FVYpa7AQTf0KiQhX6uvvGsQrpDceRi%2BdXl8BWx8hbyywaCRet04t%2Byu%2BRI2bZ1gmjxURLLBFDQjMWa2qZm89GVwVG8kpVuL5%2BQCWsB1uc%2BHd9vBd5qSdd%2BcUPob%2BTtM6zVaz5NttstgWkTgx3bGeDrtxzwQCiuwaCNFbHe4n5Bo7Bu6gksuqSEkzRRG6yQtG65US6KLxCd%2BtBsSqJNpymJOafiAj2OcBypRRs3zXFd9xRx4akzVAwdFfCrbALtNYttBcoNNNHUQANfWotafqotUb4FHDhP7XmQ7KKA72DaFVejaMOw3VptV4mzqEcHEOxoBYeP528rUzFRvOObtL%2FaTaymlHTYBsYVpsMjD5VCkn9jDMjp3DBjqkAYO00drIH7DsJiaKsA2gRSclE8qRL2%2FXUjDhnPyAoHb9rV%2Fg84%2FWksDq1IMN9zFBgr0HlpzvJ4pTK2xg8Xyo%2B669%2Bd6pvz0a2Mbm4HOmuY9NdjlDB2gFenCEOyqIMUNUJ2P7hhOZOx5%2FTxPb8qKMoyy%2FVdPVFfa5tCQRc1evoXBzNk8uOt1wuqVZ5s70fwNmwINzu69z0yI9T9nfhlXQ1hqpJoia&X-Amz-Signature=381292733cdc7a172360b0d38e6c067023c05ce9710f946d2b4cee4676c50880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHBV36M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDM9l1kEih39AjnP8Qa1WZhThxQy1ENvGhvNiH3%2FRBxogIhAOwYm%2FHwS%2BZe%2Fmg14tLMrbvuECCDBZ8N8mDHL%2FavcgooKv8DCCQQABoMNjM3NDIzMTgzODA1IgzcREcWTwA3fOI2RIYq3AO5ueYeTjSUpMKKM%2FgkG9eKp9WShQMU1%2FC%2FTRypXQY34nrjIU5%2BCuIiHVqoKqS6kbTBbkD6AsKq%2Fsp4Bo%2B7M5FDnm5enRmj7cZXJm1ouT1z83U4YXeTZYQ%2B1Y7waETmvZavNqaaq8naGE1Va1AoLq2ruRqULe%2BK7ZzyYkNQoQl1lMy5oQN7j8GdTj%2BNdq6%2FWydsQw6%2FlttPi4m8LolxqqOqH0I2049M6V%2BxPvN%2FTLx2GCxqoLM4KJ2TmI8GhMzbD1F%2BFs80nZZRIb7K%2FVYpa7AQTf0KiQhX6uvvGsQrpDceRi%2BdXl8BWx8hbyywaCRet04t%2Byu%2BRI2bZ1gmjxURLLBFDQjMWa2qZm89GVwVG8kpVuL5%2BQCWsB1uc%2BHd9vBd5qSdd%2BcUPob%2BTtM6zVaz5NttstgWkTgx3bGeDrtxzwQCiuwaCNFbHe4n5Bo7Bu6gksuqSEkzRRG6yQtG65US6KLxCd%2BtBsSqJNpymJOafiAj2OcBypRRs3zXFd9xRx4akzVAwdFfCrbALtNYttBcoNNNHUQANfWotafqotUb4FHDhP7XmQ7KKA72DaFVejaMOw3VptV4mzqEcHEOxoBYeP528rUzFRvOObtL%2FaTaymlHTYBsYVpsMjD5VCkn9jDMjp3DBjqkAYO00drIH7DsJiaKsA2gRSclE8qRL2%2FXUjDhnPyAoHb9rV%2Fg84%2FWksDq1IMN9zFBgr0HlpzvJ4pTK2xg8Xyo%2B669%2Bd6pvz0a2Mbm4HOmuY9NdjlDB2gFenCEOyqIMUNUJ2P7hhOZOx5%2FTxPb8qKMoyy%2FVdPVFfa5tCQRc1evoXBzNk8uOt1wuqVZ5s70fwNmwINzu69z0yI9T9nfhlXQ1hqpJoia&X-Amz-Signature=cba4888ef9a2ecf10121ec63ee490618592bb4e428e078e8bf98cc55095474ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHBV36M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDM9l1kEih39AjnP8Qa1WZhThxQy1ENvGhvNiH3%2FRBxogIhAOwYm%2FHwS%2BZe%2Fmg14tLMrbvuECCDBZ8N8mDHL%2FavcgooKv8DCCQQABoMNjM3NDIzMTgzODA1IgzcREcWTwA3fOI2RIYq3AO5ueYeTjSUpMKKM%2FgkG9eKp9WShQMU1%2FC%2FTRypXQY34nrjIU5%2BCuIiHVqoKqS6kbTBbkD6AsKq%2Fsp4Bo%2B7M5FDnm5enRmj7cZXJm1ouT1z83U4YXeTZYQ%2B1Y7waETmvZavNqaaq8naGE1Va1AoLq2ruRqULe%2BK7ZzyYkNQoQl1lMy5oQN7j8GdTj%2BNdq6%2FWydsQw6%2FlttPi4m8LolxqqOqH0I2049M6V%2BxPvN%2FTLx2GCxqoLM4KJ2TmI8GhMzbD1F%2BFs80nZZRIb7K%2FVYpa7AQTf0KiQhX6uvvGsQrpDceRi%2BdXl8BWx8hbyywaCRet04t%2Byu%2BRI2bZ1gmjxURLLBFDQjMWa2qZm89GVwVG8kpVuL5%2BQCWsB1uc%2BHd9vBd5qSdd%2BcUPob%2BTtM6zVaz5NttstgWkTgx3bGeDrtxzwQCiuwaCNFbHe4n5Bo7Bu6gksuqSEkzRRG6yQtG65US6KLxCd%2BtBsSqJNpymJOafiAj2OcBypRRs3zXFd9xRx4akzVAwdFfCrbALtNYttBcoNNNHUQANfWotafqotUb4FHDhP7XmQ7KKA72DaFVejaMOw3VptV4mzqEcHEOxoBYeP528rUzFRvOObtL%2FaTaymlHTYBsYVpsMjD5VCkn9jDMjp3DBjqkAYO00drIH7DsJiaKsA2gRSclE8qRL2%2FXUjDhnPyAoHb9rV%2Fg84%2FWksDq1IMN9zFBgr0HlpzvJ4pTK2xg8Xyo%2B669%2Bd6pvz0a2Mbm4HOmuY9NdjlDB2gFenCEOyqIMUNUJ2P7hhOZOx5%2FTxPb8qKMoyy%2FVdPVFfa5tCQRc1evoXBzNk8uOt1wuqVZ5s70fwNmwINzu69z0yI9T9nfhlXQ1hqpJoia&X-Amz-Signature=ddd5b3dab08bc57d3c232c25409bd4d6cf092dc49b992c77552673feb6ca82c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHBV36M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDM9l1kEih39AjnP8Qa1WZhThxQy1ENvGhvNiH3%2FRBxogIhAOwYm%2FHwS%2BZe%2Fmg14tLMrbvuECCDBZ8N8mDHL%2FavcgooKv8DCCQQABoMNjM3NDIzMTgzODA1IgzcREcWTwA3fOI2RIYq3AO5ueYeTjSUpMKKM%2FgkG9eKp9WShQMU1%2FC%2FTRypXQY34nrjIU5%2BCuIiHVqoKqS6kbTBbkD6AsKq%2Fsp4Bo%2B7M5FDnm5enRmj7cZXJm1ouT1z83U4YXeTZYQ%2B1Y7waETmvZavNqaaq8naGE1Va1AoLq2ruRqULe%2BK7ZzyYkNQoQl1lMy5oQN7j8GdTj%2BNdq6%2FWydsQw6%2FlttPi4m8LolxqqOqH0I2049M6V%2BxPvN%2FTLx2GCxqoLM4KJ2TmI8GhMzbD1F%2BFs80nZZRIb7K%2FVYpa7AQTf0KiQhX6uvvGsQrpDceRi%2BdXl8BWx8hbyywaCRet04t%2Byu%2BRI2bZ1gmjxURLLBFDQjMWa2qZm89GVwVG8kpVuL5%2BQCWsB1uc%2BHd9vBd5qSdd%2BcUPob%2BTtM6zVaz5NttstgWkTgx3bGeDrtxzwQCiuwaCNFbHe4n5Bo7Bu6gksuqSEkzRRG6yQtG65US6KLxCd%2BtBsSqJNpymJOafiAj2OcBypRRs3zXFd9xRx4akzVAwdFfCrbALtNYttBcoNNNHUQANfWotafqotUb4FHDhP7XmQ7KKA72DaFVejaMOw3VptV4mzqEcHEOxoBYeP528rUzFRvOObtL%2FaTaymlHTYBsYVpsMjD5VCkn9jDMjp3DBjqkAYO00drIH7DsJiaKsA2gRSclE8qRL2%2FXUjDhnPyAoHb9rV%2Fg84%2FWksDq1IMN9zFBgr0HlpzvJ4pTK2xg8Xyo%2B669%2Bd6pvz0a2Mbm4HOmuY9NdjlDB2gFenCEOyqIMUNUJ2P7hhOZOx5%2FTxPb8qKMoyy%2FVdPVFfa5tCQRc1evoXBzNk8uOt1wuqVZ5s70fwNmwINzu69z0yI9T9nfhlXQ1hqpJoia&X-Amz-Signature=aa912b4037570783c6445284757cbc7b8a876af3340758a14d7010d1f983ee92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHBV36M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDM9l1kEih39AjnP8Qa1WZhThxQy1ENvGhvNiH3%2FRBxogIhAOwYm%2FHwS%2BZe%2Fmg14tLMrbvuECCDBZ8N8mDHL%2FavcgooKv8DCCQQABoMNjM3NDIzMTgzODA1IgzcREcWTwA3fOI2RIYq3AO5ueYeTjSUpMKKM%2FgkG9eKp9WShQMU1%2FC%2FTRypXQY34nrjIU5%2BCuIiHVqoKqS6kbTBbkD6AsKq%2Fsp4Bo%2B7M5FDnm5enRmj7cZXJm1ouT1z83U4YXeTZYQ%2B1Y7waETmvZavNqaaq8naGE1Va1AoLq2ruRqULe%2BK7ZzyYkNQoQl1lMy5oQN7j8GdTj%2BNdq6%2FWydsQw6%2FlttPi4m8LolxqqOqH0I2049M6V%2BxPvN%2FTLx2GCxqoLM4KJ2TmI8GhMzbD1F%2BFs80nZZRIb7K%2FVYpa7AQTf0KiQhX6uvvGsQrpDceRi%2BdXl8BWx8hbyywaCRet04t%2Byu%2BRI2bZ1gmjxURLLBFDQjMWa2qZm89GVwVG8kpVuL5%2BQCWsB1uc%2BHd9vBd5qSdd%2BcUPob%2BTtM6zVaz5NttstgWkTgx3bGeDrtxzwQCiuwaCNFbHe4n5Bo7Bu6gksuqSEkzRRG6yQtG65US6KLxCd%2BtBsSqJNpymJOafiAj2OcBypRRs3zXFd9xRx4akzVAwdFfCrbALtNYttBcoNNNHUQANfWotafqotUb4FHDhP7XmQ7KKA72DaFVejaMOw3VptV4mzqEcHEOxoBYeP528rUzFRvOObtL%2FaTaymlHTYBsYVpsMjD5VCkn9jDMjp3DBjqkAYO00drIH7DsJiaKsA2gRSclE8qRL2%2FXUjDhnPyAoHb9rV%2Fg84%2FWksDq1IMN9zFBgr0HlpzvJ4pTK2xg8Xyo%2B669%2Bd6pvz0a2Mbm4HOmuY9NdjlDB2gFenCEOyqIMUNUJ2P7hhOZOx5%2FTxPb8qKMoyy%2FVdPVFfa5tCQRc1evoXBzNk8uOt1wuqVZ5s70fwNmwINzu69z0yI9T9nfhlXQ1hqpJoia&X-Amz-Signature=1e4edf7f2762f32fa8f3077d9f385404a2c58a6ac886ef6aeec6536a8b7a20de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNHBV36M%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T034140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDM9l1kEih39AjnP8Qa1WZhThxQy1ENvGhvNiH3%2FRBxogIhAOwYm%2FHwS%2BZe%2Fmg14tLMrbvuECCDBZ8N8mDHL%2FavcgooKv8DCCQQABoMNjM3NDIzMTgzODA1IgzcREcWTwA3fOI2RIYq3AO5ueYeTjSUpMKKM%2FgkG9eKp9WShQMU1%2FC%2FTRypXQY34nrjIU5%2BCuIiHVqoKqS6kbTBbkD6AsKq%2Fsp4Bo%2B7M5FDnm5enRmj7cZXJm1ouT1z83U4YXeTZYQ%2B1Y7waETmvZavNqaaq8naGE1Va1AoLq2ruRqULe%2BK7ZzyYkNQoQl1lMy5oQN7j8GdTj%2BNdq6%2FWydsQw6%2FlttPi4m8LolxqqOqH0I2049M6V%2BxPvN%2FTLx2GCxqoLM4KJ2TmI8GhMzbD1F%2BFs80nZZRIb7K%2FVYpa7AQTf0KiQhX6uvvGsQrpDceRi%2BdXl8BWx8hbyywaCRet04t%2Byu%2BRI2bZ1gmjxURLLBFDQjMWa2qZm89GVwVG8kpVuL5%2BQCWsB1uc%2BHd9vBd5qSdd%2BcUPob%2BTtM6zVaz5NttstgWkTgx3bGeDrtxzwQCiuwaCNFbHe4n5Bo7Bu6gksuqSEkzRRG6yQtG65US6KLxCd%2BtBsSqJNpymJOafiAj2OcBypRRs3zXFd9xRx4akzVAwdFfCrbALtNYttBcoNNNHUQANfWotafqotUb4FHDhP7XmQ7KKA72DaFVejaMOw3VptV4mzqEcHEOxoBYeP528rUzFRvOObtL%2FaTaymlHTYBsYVpsMjD5VCkn9jDMjp3DBjqkAYO00drIH7DsJiaKsA2gRSclE8qRL2%2FXUjDhnPyAoHb9rV%2Fg84%2FWksDq1IMN9zFBgr0HlpzvJ4pTK2xg8Xyo%2B669%2Bd6pvz0a2Mbm4HOmuY9NdjlDB2gFenCEOyqIMUNUJ2P7hhOZOx5%2FTxPb8qKMoyy%2FVdPVFfa5tCQRc1evoXBzNk8uOt1wuqVZ5s70fwNmwINzu69z0yI9T9nfhlXQ1hqpJoia&X-Amz-Signature=c0c2ab71184082d95b38e848fb8e31ac3297fe71fb166dbd1656819b742c66c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
