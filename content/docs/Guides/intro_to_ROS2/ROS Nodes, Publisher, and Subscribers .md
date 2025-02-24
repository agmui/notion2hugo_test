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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6OQAXIT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLyfBJvJwu%2B4HPC4us3GOZJy7qbnauj9A8NaEw8UjxNAiAqtkNMwD1L3nNW0%2F1Up6hn9wrv2l7i4ie2H760JvlhMir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM68K9K5jL4qCtDU7MKtwDAYviX1zz3AnXkrNBmkBJiob9%2FFV%2Fa6NdN%2FKF7w3lF4%2Fx5%2BSvwWVeSEQdhWI5%2B79grE2VFxNrwK9wCsc%2BrmHHAafBCDSIMJcchXnS6ieMEDh%2BBhMLb6BSJfvLj181ilvvQcgpcrJdQeVq%2B5mvUeSAW1cXp8nOAuQn4BGGVT3GGXIwLhq1DEsj%2BB%2Fmjpa4FnQ0NC%2BjjG33Rpis5JYB6LwHPVMSQ%2BLQevp%2FFcixyZ94%2B304WHDf5KI68UFGi2%2FyMBvmdTyAyHSg3Tlq5fys%2BLzJARubncUCkKPVCdCGvXIUQ1UdKJp7CLEedElBVPvExDeFUIlhxRGF6gqFvhEf7ivNV4rti3a4b%2BWnNaBu4ni3xufcUCye8Ku37efru4rAJeUTkMVVwHmvq2jQGdaVA2zwTaQ%2FPXuZ26Gz7J6WKil8bgJyjC5HcUUOsNmQcpnE98VShpQpMhBhG%2FIyKmeVxmuqt%2FnQxVDinrOSLQ9EToXu0%2BwudsfHJl%2BWYSRAgWxMaO0I0Ji2Bc2svq4R2EWQdGD8kKyPiwocZ3CNejholz62mQ8lVSglRW4Ji712aS8OjZLr6Aymf7FqakU4Sk%2FwkSp7dUE8Vi1XX1hkBbs9IU6nRK0Tg4LQYs0Kh%2FKaLIow8OrwvQY6pgFMSMxz3VF917hXPA8u6COZ4qgsHwCYMidbUCMB716rqb7SxRn%2BGmf9OR%2BYgeBmlYqUSDW7p81mGw8%2FuRih%2FqG7y5k7%2BepoXU4WiyPcJxzqbWi73bmz8LTpmSz6kYrsvdT6604xQdTrBfpnRlKNotrpGV%2BpG9bwbwgznUQT4jOSfIdsHTIzQ6fBk4vdw61JqGHpEfgvj2FuvLe%2BLv1rCrkeB4l0mlXa&X-Amz-Signature=ce710cdf50298dc7a835c2a3312f67745a4eddb323b99bde0f9d9c70aac1ff70&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6OQAXIT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLyfBJvJwu%2B4HPC4us3GOZJy7qbnauj9A8NaEw8UjxNAiAqtkNMwD1L3nNW0%2F1Up6hn9wrv2l7i4ie2H760JvlhMir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM68K9K5jL4qCtDU7MKtwDAYviX1zz3AnXkrNBmkBJiob9%2FFV%2Fa6NdN%2FKF7w3lF4%2Fx5%2BSvwWVeSEQdhWI5%2B79grE2VFxNrwK9wCsc%2BrmHHAafBCDSIMJcchXnS6ieMEDh%2BBhMLb6BSJfvLj181ilvvQcgpcrJdQeVq%2B5mvUeSAW1cXp8nOAuQn4BGGVT3GGXIwLhq1DEsj%2BB%2Fmjpa4FnQ0NC%2BjjG33Rpis5JYB6LwHPVMSQ%2BLQevp%2FFcixyZ94%2B304WHDf5KI68UFGi2%2FyMBvmdTyAyHSg3Tlq5fys%2BLzJARubncUCkKPVCdCGvXIUQ1UdKJp7CLEedElBVPvExDeFUIlhxRGF6gqFvhEf7ivNV4rti3a4b%2BWnNaBu4ni3xufcUCye8Ku37efru4rAJeUTkMVVwHmvq2jQGdaVA2zwTaQ%2FPXuZ26Gz7J6WKil8bgJyjC5HcUUOsNmQcpnE98VShpQpMhBhG%2FIyKmeVxmuqt%2FnQxVDinrOSLQ9EToXu0%2BwudsfHJl%2BWYSRAgWxMaO0I0Ji2Bc2svq4R2EWQdGD8kKyPiwocZ3CNejholz62mQ8lVSglRW4Ji712aS8OjZLr6Aymf7FqakU4Sk%2FwkSp7dUE8Vi1XX1hkBbs9IU6nRK0Tg4LQYs0Kh%2FKaLIow8OrwvQY6pgFMSMxz3VF917hXPA8u6COZ4qgsHwCYMidbUCMB716rqb7SxRn%2BGmf9OR%2BYgeBmlYqUSDW7p81mGw8%2FuRih%2FqG7y5k7%2BepoXU4WiyPcJxzqbWi73bmz8LTpmSz6kYrsvdT6604xQdTrBfpnRlKNotrpGV%2BpG9bwbwgznUQT4jOSfIdsHTIzQ6fBk4vdw61JqGHpEfgvj2FuvLe%2BLv1rCrkeB4l0mlXa&X-Amz-Signature=ef3fa4548712aa13b5382600951209cae5e0dcf058b9ece994ce25a39833929a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6OQAXIT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLyfBJvJwu%2B4HPC4us3GOZJy7qbnauj9A8NaEw8UjxNAiAqtkNMwD1L3nNW0%2F1Up6hn9wrv2l7i4ie2H760JvlhMir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM68K9K5jL4qCtDU7MKtwDAYviX1zz3AnXkrNBmkBJiob9%2FFV%2Fa6NdN%2FKF7w3lF4%2Fx5%2BSvwWVeSEQdhWI5%2B79grE2VFxNrwK9wCsc%2BrmHHAafBCDSIMJcchXnS6ieMEDh%2BBhMLb6BSJfvLj181ilvvQcgpcrJdQeVq%2B5mvUeSAW1cXp8nOAuQn4BGGVT3GGXIwLhq1DEsj%2BB%2Fmjpa4FnQ0NC%2BjjG33Rpis5JYB6LwHPVMSQ%2BLQevp%2FFcixyZ94%2B304WHDf5KI68UFGi2%2FyMBvmdTyAyHSg3Tlq5fys%2BLzJARubncUCkKPVCdCGvXIUQ1UdKJp7CLEedElBVPvExDeFUIlhxRGF6gqFvhEf7ivNV4rti3a4b%2BWnNaBu4ni3xufcUCye8Ku37efru4rAJeUTkMVVwHmvq2jQGdaVA2zwTaQ%2FPXuZ26Gz7J6WKil8bgJyjC5HcUUOsNmQcpnE98VShpQpMhBhG%2FIyKmeVxmuqt%2FnQxVDinrOSLQ9EToXu0%2BwudsfHJl%2BWYSRAgWxMaO0I0Ji2Bc2svq4R2EWQdGD8kKyPiwocZ3CNejholz62mQ8lVSglRW4Ji712aS8OjZLr6Aymf7FqakU4Sk%2FwkSp7dUE8Vi1XX1hkBbs9IU6nRK0Tg4LQYs0Kh%2FKaLIow8OrwvQY6pgFMSMxz3VF917hXPA8u6COZ4qgsHwCYMidbUCMB716rqb7SxRn%2BGmf9OR%2BYgeBmlYqUSDW7p81mGw8%2FuRih%2FqG7y5k7%2BepoXU4WiyPcJxzqbWi73bmz8LTpmSz6kYrsvdT6604xQdTrBfpnRlKNotrpGV%2BpG9bwbwgznUQT4jOSfIdsHTIzQ6fBk4vdw61JqGHpEfgvj2FuvLe%2BLv1rCrkeB4l0mlXa&X-Amz-Signature=a445627a54f45727b2fd82038abefecb0de4ef17dfa8c47c71e00fb66c8daffc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6OQAXIT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLyfBJvJwu%2B4HPC4us3GOZJy7qbnauj9A8NaEw8UjxNAiAqtkNMwD1L3nNW0%2F1Up6hn9wrv2l7i4ie2H760JvlhMir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM68K9K5jL4qCtDU7MKtwDAYviX1zz3AnXkrNBmkBJiob9%2FFV%2Fa6NdN%2FKF7w3lF4%2Fx5%2BSvwWVeSEQdhWI5%2B79grE2VFxNrwK9wCsc%2BrmHHAafBCDSIMJcchXnS6ieMEDh%2BBhMLb6BSJfvLj181ilvvQcgpcrJdQeVq%2B5mvUeSAW1cXp8nOAuQn4BGGVT3GGXIwLhq1DEsj%2BB%2Fmjpa4FnQ0NC%2BjjG33Rpis5JYB6LwHPVMSQ%2BLQevp%2FFcixyZ94%2B304WHDf5KI68UFGi2%2FyMBvmdTyAyHSg3Tlq5fys%2BLzJARubncUCkKPVCdCGvXIUQ1UdKJp7CLEedElBVPvExDeFUIlhxRGF6gqFvhEf7ivNV4rti3a4b%2BWnNaBu4ni3xufcUCye8Ku37efru4rAJeUTkMVVwHmvq2jQGdaVA2zwTaQ%2FPXuZ26Gz7J6WKil8bgJyjC5HcUUOsNmQcpnE98VShpQpMhBhG%2FIyKmeVxmuqt%2FnQxVDinrOSLQ9EToXu0%2BwudsfHJl%2BWYSRAgWxMaO0I0Ji2Bc2svq4R2EWQdGD8kKyPiwocZ3CNejholz62mQ8lVSglRW4Ji712aS8OjZLr6Aymf7FqakU4Sk%2FwkSp7dUE8Vi1XX1hkBbs9IU6nRK0Tg4LQYs0Kh%2FKaLIow8OrwvQY6pgFMSMxz3VF917hXPA8u6COZ4qgsHwCYMidbUCMB716rqb7SxRn%2BGmf9OR%2BYgeBmlYqUSDW7p81mGw8%2FuRih%2FqG7y5k7%2BepoXU4WiyPcJxzqbWi73bmz8LTpmSz6kYrsvdT6604xQdTrBfpnRlKNotrpGV%2BpG9bwbwgznUQT4jOSfIdsHTIzQ6fBk4vdw61JqGHpEfgvj2FuvLe%2BLv1rCrkeB4l0mlXa&X-Amz-Signature=b723dafab147536556c157d03d4fa555c6971f2282afd0eedc8ef31789b2f196&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6OQAXIT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLyfBJvJwu%2B4HPC4us3GOZJy7qbnauj9A8NaEw8UjxNAiAqtkNMwD1L3nNW0%2F1Up6hn9wrv2l7i4ie2H760JvlhMir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM68K9K5jL4qCtDU7MKtwDAYviX1zz3AnXkrNBmkBJiob9%2FFV%2Fa6NdN%2FKF7w3lF4%2Fx5%2BSvwWVeSEQdhWI5%2B79grE2VFxNrwK9wCsc%2BrmHHAafBCDSIMJcchXnS6ieMEDh%2BBhMLb6BSJfvLj181ilvvQcgpcrJdQeVq%2B5mvUeSAW1cXp8nOAuQn4BGGVT3GGXIwLhq1DEsj%2BB%2Fmjpa4FnQ0NC%2BjjG33Rpis5JYB6LwHPVMSQ%2BLQevp%2FFcixyZ94%2B304WHDf5KI68UFGi2%2FyMBvmdTyAyHSg3Tlq5fys%2BLzJARubncUCkKPVCdCGvXIUQ1UdKJp7CLEedElBVPvExDeFUIlhxRGF6gqFvhEf7ivNV4rti3a4b%2BWnNaBu4ni3xufcUCye8Ku37efru4rAJeUTkMVVwHmvq2jQGdaVA2zwTaQ%2FPXuZ26Gz7J6WKil8bgJyjC5HcUUOsNmQcpnE98VShpQpMhBhG%2FIyKmeVxmuqt%2FnQxVDinrOSLQ9EToXu0%2BwudsfHJl%2BWYSRAgWxMaO0I0Ji2Bc2svq4R2EWQdGD8kKyPiwocZ3CNejholz62mQ8lVSglRW4Ji712aS8OjZLr6Aymf7FqakU4Sk%2FwkSp7dUE8Vi1XX1hkBbs9IU6nRK0Tg4LQYs0Kh%2FKaLIow8OrwvQY6pgFMSMxz3VF917hXPA8u6COZ4qgsHwCYMidbUCMB716rqb7SxRn%2BGmf9OR%2BYgeBmlYqUSDW7p81mGw8%2FuRih%2FqG7y5k7%2BepoXU4WiyPcJxzqbWi73bmz8LTpmSz6kYrsvdT6604xQdTrBfpnRlKNotrpGV%2BpG9bwbwgznUQT4jOSfIdsHTIzQ6fBk4vdw61JqGHpEfgvj2FuvLe%2BLv1rCrkeB4l0mlXa&X-Amz-Signature=b29b36bb650c743b0723593e664f5c88fe9df22f1cacac1dbf2938a68d53732b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6OQAXIT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLyfBJvJwu%2B4HPC4us3GOZJy7qbnauj9A8NaEw8UjxNAiAqtkNMwD1L3nNW0%2F1Up6hn9wrv2l7i4ie2H760JvlhMir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM68K9K5jL4qCtDU7MKtwDAYviX1zz3AnXkrNBmkBJiob9%2FFV%2Fa6NdN%2FKF7w3lF4%2Fx5%2BSvwWVeSEQdhWI5%2B79grE2VFxNrwK9wCsc%2BrmHHAafBCDSIMJcchXnS6ieMEDh%2BBhMLb6BSJfvLj181ilvvQcgpcrJdQeVq%2B5mvUeSAW1cXp8nOAuQn4BGGVT3GGXIwLhq1DEsj%2BB%2Fmjpa4FnQ0NC%2BjjG33Rpis5JYB6LwHPVMSQ%2BLQevp%2FFcixyZ94%2B304WHDf5KI68UFGi2%2FyMBvmdTyAyHSg3Tlq5fys%2BLzJARubncUCkKPVCdCGvXIUQ1UdKJp7CLEedElBVPvExDeFUIlhxRGF6gqFvhEf7ivNV4rti3a4b%2BWnNaBu4ni3xufcUCye8Ku37efru4rAJeUTkMVVwHmvq2jQGdaVA2zwTaQ%2FPXuZ26Gz7J6WKil8bgJyjC5HcUUOsNmQcpnE98VShpQpMhBhG%2FIyKmeVxmuqt%2FnQxVDinrOSLQ9EToXu0%2BwudsfHJl%2BWYSRAgWxMaO0I0Ji2Bc2svq4R2EWQdGD8kKyPiwocZ3CNejholz62mQ8lVSglRW4Ji712aS8OjZLr6Aymf7FqakU4Sk%2FwkSp7dUE8Vi1XX1hkBbs9IU6nRK0Tg4LQYs0Kh%2FKaLIow8OrwvQY6pgFMSMxz3VF917hXPA8u6COZ4qgsHwCYMidbUCMB716rqb7SxRn%2BGmf9OR%2BYgeBmlYqUSDW7p81mGw8%2FuRih%2FqG7y5k7%2BepoXU4WiyPcJxzqbWi73bmz8LTpmSz6kYrsvdT6604xQdTrBfpnRlKNotrpGV%2BpG9bwbwgznUQT4jOSfIdsHTIzQ6fBk4vdw61JqGHpEfgvj2FuvLe%2BLv1rCrkeB4l0mlXa&X-Amz-Signature=4323e737e9ebdeb826a433230186c0fbfef38f425059fb8879ab0f5cdf17325c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6OQAXIT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLyfBJvJwu%2B4HPC4us3GOZJy7qbnauj9A8NaEw8UjxNAiAqtkNMwD1L3nNW0%2F1Up6hn9wrv2l7i4ie2H760JvlhMir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM68K9K5jL4qCtDU7MKtwDAYviX1zz3AnXkrNBmkBJiob9%2FFV%2Fa6NdN%2FKF7w3lF4%2Fx5%2BSvwWVeSEQdhWI5%2B79grE2VFxNrwK9wCsc%2BrmHHAafBCDSIMJcchXnS6ieMEDh%2BBhMLb6BSJfvLj181ilvvQcgpcrJdQeVq%2B5mvUeSAW1cXp8nOAuQn4BGGVT3GGXIwLhq1DEsj%2BB%2Fmjpa4FnQ0NC%2BjjG33Rpis5JYB6LwHPVMSQ%2BLQevp%2FFcixyZ94%2B304WHDf5KI68UFGi2%2FyMBvmdTyAyHSg3Tlq5fys%2BLzJARubncUCkKPVCdCGvXIUQ1UdKJp7CLEedElBVPvExDeFUIlhxRGF6gqFvhEf7ivNV4rti3a4b%2BWnNaBu4ni3xufcUCye8Ku37efru4rAJeUTkMVVwHmvq2jQGdaVA2zwTaQ%2FPXuZ26Gz7J6WKil8bgJyjC5HcUUOsNmQcpnE98VShpQpMhBhG%2FIyKmeVxmuqt%2FnQxVDinrOSLQ9EToXu0%2BwudsfHJl%2BWYSRAgWxMaO0I0Ji2Bc2svq4R2EWQdGD8kKyPiwocZ3CNejholz62mQ8lVSglRW4Ji712aS8OjZLr6Aymf7FqakU4Sk%2FwkSp7dUE8Vi1XX1hkBbs9IU6nRK0Tg4LQYs0Kh%2FKaLIow8OrwvQY6pgFMSMxz3VF917hXPA8u6COZ4qgsHwCYMidbUCMB716rqb7SxRn%2BGmf9OR%2BYgeBmlYqUSDW7p81mGw8%2FuRih%2FqG7y5k7%2BepoXU4WiyPcJxzqbWi73bmz8LTpmSz6kYrsvdT6604xQdTrBfpnRlKNotrpGV%2BpG9bwbwgznUQT4jOSfIdsHTIzQ6fBk4vdw61JqGHpEfgvj2FuvLe%2BLv1rCrkeB4l0mlXa&X-Amz-Signature=506bd739ddf85a8d993947c8c54a314f6e52ebe5d9e95dd0f59a64e6af77fdf7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6OQAXIT%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLyfBJvJwu%2B4HPC4us3GOZJy7qbnauj9A8NaEw8UjxNAiAqtkNMwD1L3nNW0%2F1Up6hn9wrv2l7i4ie2H760JvlhMir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM68K9K5jL4qCtDU7MKtwDAYviX1zz3AnXkrNBmkBJiob9%2FFV%2Fa6NdN%2FKF7w3lF4%2Fx5%2BSvwWVeSEQdhWI5%2B79grE2VFxNrwK9wCsc%2BrmHHAafBCDSIMJcchXnS6ieMEDh%2BBhMLb6BSJfvLj181ilvvQcgpcrJdQeVq%2B5mvUeSAW1cXp8nOAuQn4BGGVT3GGXIwLhq1DEsj%2BB%2Fmjpa4FnQ0NC%2BjjG33Rpis5JYB6LwHPVMSQ%2BLQevp%2FFcixyZ94%2B304WHDf5KI68UFGi2%2FyMBvmdTyAyHSg3Tlq5fys%2BLzJARubncUCkKPVCdCGvXIUQ1UdKJp7CLEedElBVPvExDeFUIlhxRGF6gqFvhEf7ivNV4rti3a4b%2BWnNaBu4ni3xufcUCye8Ku37efru4rAJeUTkMVVwHmvq2jQGdaVA2zwTaQ%2FPXuZ26Gz7J6WKil8bgJyjC5HcUUOsNmQcpnE98VShpQpMhBhG%2FIyKmeVxmuqt%2FnQxVDinrOSLQ9EToXu0%2BwudsfHJl%2BWYSRAgWxMaO0I0Ji2Bc2svq4R2EWQdGD8kKyPiwocZ3CNejholz62mQ8lVSglRW4Ji712aS8OjZLr6Aymf7FqakU4Sk%2FwkSp7dUE8Vi1XX1hkBbs9IU6nRK0Tg4LQYs0Kh%2FKaLIow8OrwvQY6pgFMSMxz3VF917hXPA8u6COZ4qgsHwCYMidbUCMB716rqb7SxRn%2BGmf9OR%2BYgeBmlYqUSDW7p81mGw8%2FuRih%2FqG7y5k7%2BepoXU4WiyPcJxzqbWi73bmz8LTpmSz6kYrsvdT6604xQdTrBfpnRlKNotrpGV%2BpG9bwbwgznUQT4jOSfIdsHTIzQ6fBk4vdw61JqGHpEfgvj2FuvLe%2BLv1rCrkeB4l0mlXa&X-Amz-Signature=03a1ba277a86026cf247a3ff72f768e0a633a9cf0aba64f0ba2b40c784428677&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
