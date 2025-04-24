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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE22UT2R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDDZiqkpBnjo5v2X6LdEj88TCri1INTK3vKDfPaRfu6ugIgAjpX7%2FZdfN8stptAIaKtH8bP4q5q0YjJcLwLM1J3Zmoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIrt7cbEzVf90pJ2aSrcA%2F4ipb9bpAF3JYL0hzFOO6OaUeJqvFsIVs%2BajavmNZDrVh%2Fz9QT%2B4SfZ2vXzNuEEoQDsr4CXfyW3eajzNn8B%2FDek%2Fqw%2BfB5R41ri18C19onkNXWO46bRcisZULpcQh4hN%2FpCvmFzoDBggqDoGKzBB%2BQX%2Bp1CnZdb9LKWVSVlwrp3Vy91cTzOvOyyR%2Bq88sTEpi2PIn2GEPhOMVJ1ca5yzlK249lOvo7OxriAm4SaW7M5NfYAYXPtxy9liAYh%2BNiVOFowwgOBKY%2B78FrkhhtU5qMTbSiYij6t%2BuvJwcm6PNDVvp1XfLtEJAvNo%2Be6U%2Fu13K1fn1DIsOZgS5xCgjbk9kRq0%2Bux3TMeaPEqT6jhCCLm04sB9gRKX1aZdQTV%2B5lPIGuSs0LMkGfJuvTIJgzT40SHIVkyCgyhT%2B5B35TdxbhW3BYEfkDS1R4lRucLLvXnc5fHldXtYHUCaUoud9yp6VbaB%2FeMpMWFcy0yKG%2BNemHGWURtZZzjuL7QNdSvSFwAAaCoD0BLqenpnKZButjYrzaIttORXpFXfoa9wpPQX5bJ1bLRenaltsB43lu38T0vlAZ2PgLctDic%2BQlnbjV4NzNygtMnewy%2FRXkCnLqiP5vilf4iaciSNubvkDl3MPSEqcAGOqUBrT1lHIUOYJACy7V7zscQYdlEn9SuiOegFT4ILvWjxC5Ghe%2BsstKhiRQjPkX6uqByXDUeU18oz7dy%2FQ%2FeV3VDaACX6%2BQGeyQe0bjhdX89GPQedLfldovjPMseCdd9fmxSBuwHJoDBt9yYjJk%2F9o%2BJU8cm9sYs08Y6sSQT2Y9Fs3mH8CZ0vnnEzTlfo7ez9krsowky7eIhPbsb0kUrB3lSvkIPzgdu&X-Amz-Signature=ea212bf82ff24fcda95c9b608a3aac789314216c0b5ce6f645cb49001751a57d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE22UT2R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDDZiqkpBnjo5v2X6LdEj88TCri1INTK3vKDfPaRfu6ugIgAjpX7%2FZdfN8stptAIaKtH8bP4q5q0YjJcLwLM1J3Zmoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIrt7cbEzVf90pJ2aSrcA%2F4ipb9bpAF3JYL0hzFOO6OaUeJqvFsIVs%2BajavmNZDrVh%2Fz9QT%2B4SfZ2vXzNuEEoQDsr4CXfyW3eajzNn8B%2FDek%2Fqw%2BfB5R41ri18C19onkNXWO46bRcisZULpcQh4hN%2FpCvmFzoDBggqDoGKzBB%2BQX%2Bp1CnZdb9LKWVSVlwrp3Vy91cTzOvOyyR%2Bq88sTEpi2PIn2GEPhOMVJ1ca5yzlK249lOvo7OxriAm4SaW7M5NfYAYXPtxy9liAYh%2BNiVOFowwgOBKY%2B78FrkhhtU5qMTbSiYij6t%2BuvJwcm6PNDVvp1XfLtEJAvNo%2Be6U%2Fu13K1fn1DIsOZgS5xCgjbk9kRq0%2Bux3TMeaPEqT6jhCCLm04sB9gRKX1aZdQTV%2B5lPIGuSs0LMkGfJuvTIJgzT40SHIVkyCgyhT%2B5B35TdxbhW3BYEfkDS1R4lRucLLvXnc5fHldXtYHUCaUoud9yp6VbaB%2FeMpMWFcy0yKG%2BNemHGWURtZZzjuL7QNdSvSFwAAaCoD0BLqenpnKZButjYrzaIttORXpFXfoa9wpPQX5bJ1bLRenaltsB43lu38T0vlAZ2PgLctDic%2BQlnbjV4NzNygtMnewy%2FRXkCnLqiP5vilf4iaciSNubvkDl3MPSEqcAGOqUBrT1lHIUOYJACy7V7zscQYdlEn9SuiOegFT4ILvWjxC5Ghe%2BsstKhiRQjPkX6uqByXDUeU18oz7dy%2FQ%2FeV3VDaACX6%2BQGeyQe0bjhdX89GPQedLfldovjPMseCdd9fmxSBuwHJoDBt9yYjJk%2F9o%2BJU8cm9sYs08Y6sSQT2Y9Fs3mH8CZ0vnnEzTlfo7ez9krsowky7eIhPbsb0kUrB3lSvkIPzgdu&X-Amz-Signature=adbf0f1e7f263dbdbfccef69019d60943014f19e161def7fd57f569691f63c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE22UT2R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDDZiqkpBnjo5v2X6LdEj88TCri1INTK3vKDfPaRfu6ugIgAjpX7%2FZdfN8stptAIaKtH8bP4q5q0YjJcLwLM1J3Zmoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIrt7cbEzVf90pJ2aSrcA%2F4ipb9bpAF3JYL0hzFOO6OaUeJqvFsIVs%2BajavmNZDrVh%2Fz9QT%2B4SfZ2vXzNuEEoQDsr4CXfyW3eajzNn8B%2FDek%2Fqw%2BfB5R41ri18C19onkNXWO46bRcisZULpcQh4hN%2FpCvmFzoDBggqDoGKzBB%2BQX%2Bp1CnZdb9LKWVSVlwrp3Vy91cTzOvOyyR%2Bq88sTEpi2PIn2GEPhOMVJ1ca5yzlK249lOvo7OxriAm4SaW7M5NfYAYXPtxy9liAYh%2BNiVOFowwgOBKY%2B78FrkhhtU5qMTbSiYij6t%2BuvJwcm6PNDVvp1XfLtEJAvNo%2Be6U%2Fu13K1fn1DIsOZgS5xCgjbk9kRq0%2Bux3TMeaPEqT6jhCCLm04sB9gRKX1aZdQTV%2B5lPIGuSs0LMkGfJuvTIJgzT40SHIVkyCgyhT%2B5B35TdxbhW3BYEfkDS1R4lRucLLvXnc5fHldXtYHUCaUoud9yp6VbaB%2FeMpMWFcy0yKG%2BNemHGWURtZZzjuL7QNdSvSFwAAaCoD0BLqenpnKZButjYrzaIttORXpFXfoa9wpPQX5bJ1bLRenaltsB43lu38T0vlAZ2PgLctDic%2BQlnbjV4NzNygtMnewy%2FRXkCnLqiP5vilf4iaciSNubvkDl3MPSEqcAGOqUBrT1lHIUOYJACy7V7zscQYdlEn9SuiOegFT4ILvWjxC5Ghe%2BsstKhiRQjPkX6uqByXDUeU18oz7dy%2FQ%2FeV3VDaACX6%2BQGeyQe0bjhdX89GPQedLfldovjPMseCdd9fmxSBuwHJoDBt9yYjJk%2F9o%2BJU8cm9sYs08Y6sSQT2Y9Fs3mH8CZ0vnnEzTlfo7ez9krsowky7eIhPbsb0kUrB3lSvkIPzgdu&X-Amz-Signature=6746bf9a3e6a6e06e5ea9564ee0b907fe1c8434f305e084a05ffc5fbc5368f42&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE22UT2R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDDZiqkpBnjo5v2X6LdEj88TCri1INTK3vKDfPaRfu6ugIgAjpX7%2FZdfN8stptAIaKtH8bP4q5q0YjJcLwLM1J3Zmoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIrt7cbEzVf90pJ2aSrcA%2F4ipb9bpAF3JYL0hzFOO6OaUeJqvFsIVs%2BajavmNZDrVh%2Fz9QT%2B4SfZ2vXzNuEEoQDsr4CXfyW3eajzNn8B%2FDek%2Fqw%2BfB5R41ri18C19onkNXWO46bRcisZULpcQh4hN%2FpCvmFzoDBggqDoGKzBB%2BQX%2Bp1CnZdb9LKWVSVlwrp3Vy91cTzOvOyyR%2Bq88sTEpi2PIn2GEPhOMVJ1ca5yzlK249lOvo7OxriAm4SaW7M5NfYAYXPtxy9liAYh%2BNiVOFowwgOBKY%2B78FrkhhtU5qMTbSiYij6t%2BuvJwcm6PNDVvp1XfLtEJAvNo%2Be6U%2Fu13K1fn1DIsOZgS5xCgjbk9kRq0%2Bux3TMeaPEqT6jhCCLm04sB9gRKX1aZdQTV%2B5lPIGuSs0LMkGfJuvTIJgzT40SHIVkyCgyhT%2B5B35TdxbhW3BYEfkDS1R4lRucLLvXnc5fHldXtYHUCaUoud9yp6VbaB%2FeMpMWFcy0yKG%2BNemHGWURtZZzjuL7QNdSvSFwAAaCoD0BLqenpnKZButjYrzaIttORXpFXfoa9wpPQX5bJ1bLRenaltsB43lu38T0vlAZ2PgLctDic%2BQlnbjV4NzNygtMnewy%2FRXkCnLqiP5vilf4iaciSNubvkDl3MPSEqcAGOqUBrT1lHIUOYJACy7V7zscQYdlEn9SuiOegFT4ILvWjxC5Ghe%2BsstKhiRQjPkX6uqByXDUeU18oz7dy%2FQ%2FeV3VDaACX6%2BQGeyQe0bjhdX89GPQedLfldovjPMseCdd9fmxSBuwHJoDBt9yYjJk%2F9o%2BJU8cm9sYs08Y6sSQT2Y9Fs3mH8CZ0vnnEzTlfo7ez9krsowky7eIhPbsb0kUrB3lSvkIPzgdu&X-Amz-Signature=2ea80c1ee610a3c8399444df27ba644beb7dcaeb65995c4d9f6c87ea0dc36bd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE22UT2R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDDZiqkpBnjo5v2X6LdEj88TCri1INTK3vKDfPaRfu6ugIgAjpX7%2FZdfN8stptAIaKtH8bP4q5q0YjJcLwLM1J3Zmoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIrt7cbEzVf90pJ2aSrcA%2F4ipb9bpAF3JYL0hzFOO6OaUeJqvFsIVs%2BajavmNZDrVh%2Fz9QT%2B4SfZ2vXzNuEEoQDsr4CXfyW3eajzNn8B%2FDek%2Fqw%2BfB5R41ri18C19onkNXWO46bRcisZULpcQh4hN%2FpCvmFzoDBggqDoGKzBB%2BQX%2Bp1CnZdb9LKWVSVlwrp3Vy91cTzOvOyyR%2Bq88sTEpi2PIn2GEPhOMVJ1ca5yzlK249lOvo7OxriAm4SaW7M5NfYAYXPtxy9liAYh%2BNiVOFowwgOBKY%2B78FrkhhtU5qMTbSiYij6t%2BuvJwcm6PNDVvp1XfLtEJAvNo%2Be6U%2Fu13K1fn1DIsOZgS5xCgjbk9kRq0%2Bux3TMeaPEqT6jhCCLm04sB9gRKX1aZdQTV%2B5lPIGuSs0LMkGfJuvTIJgzT40SHIVkyCgyhT%2B5B35TdxbhW3BYEfkDS1R4lRucLLvXnc5fHldXtYHUCaUoud9yp6VbaB%2FeMpMWFcy0yKG%2BNemHGWURtZZzjuL7QNdSvSFwAAaCoD0BLqenpnKZButjYrzaIttORXpFXfoa9wpPQX5bJ1bLRenaltsB43lu38T0vlAZ2PgLctDic%2BQlnbjV4NzNygtMnewy%2FRXkCnLqiP5vilf4iaciSNubvkDl3MPSEqcAGOqUBrT1lHIUOYJACy7V7zscQYdlEn9SuiOegFT4ILvWjxC5Ghe%2BsstKhiRQjPkX6uqByXDUeU18oz7dy%2FQ%2FeV3VDaACX6%2BQGeyQe0bjhdX89GPQedLfldovjPMseCdd9fmxSBuwHJoDBt9yYjJk%2F9o%2BJU8cm9sYs08Y6sSQT2Y9Fs3mH8CZ0vnnEzTlfo7ez9krsowky7eIhPbsb0kUrB3lSvkIPzgdu&X-Amz-Signature=01b05f502e5e8e95f08815807bc81a562f7afbbdac0ebe058d754ae00604d54f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE22UT2R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDDZiqkpBnjo5v2X6LdEj88TCri1INTK3vKDfPaRfu6ugIgAjpX7%2FZdfN8stptAIaKtH8bP4q5q0YjJcLwLM1J3Zmoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIrt7cbEzVf90pJ2aSrcA%2F4ipb9bpAF3JYL0hzFOO6OaUeJqvFsIVs%2BajavmNZDrVh%2Fz9QT%2B4SfZ2vXzNuEEoQDsr4CXfyW3eajzNn8B%2FDek%2Fqw%2BfB5R41ri18C19onkNXWO46bRcisZULpcQh4hN%2FpCvmFzoDBggqDoGKzBB%2BQX%2Bp1CnZdb9LKWVSVlwrp3Vy91cTzOvOyyR%2Bq88sTEpi2PIn2GEPhOMVJ1ca5yzlK249lOvo7OxriAm4SaW7M5NfYAYXPtxy9liAYh%2BNiVOFowwgOBKY%2B78FrkhhtU5qMTbSiYij6t%2BuvJwcm6PNDVvp1XfLtEJAvNo%2Be6U%2Fu13K1fn1DIsOZgS5xCgjbk9kRq0%2Bux3TMeaPEqT6jhCCLm04sB9gRKX1aZdQTV%2B5lPIGuSs0LMkGfJuvTIJgzT40SHIVkyCgyhT%2B5B35TdxbhW3BYEfkDS1R4lRucLLvXnc5fHldXtYHUCaUoud9yp6VbaB%2FeMpMWFcy0yKG%2BNemHGWURtZZzjuL7QNdSvSFwAAaCoD0BLqenpnKZButjYrzaIttORXpFXfoa9wpPQX5bJ1bLRenaltsB43lu38T0vlAZ2PgLctDic%2BQlnbjV4NzNygtMnewy%2FRXkCnLqiP5vilf4iaciSNubvkDl3MPSEqcAGOqUBrT1lHIUOYJACy7V7zscQYdlEn9SuiOegFT4ILvWjxC5Ghe%2BsstKhiRQjPkX6uqByXDUeU18oz7dy%2FQ%2FeV3VDaACX6%2BQGeyQe0bjhdX89GPQedLfldovjPMseCdd9fmxSBuwHJoDBt9yYjJk%2F9o%2BJU8cm9sYs08Y6sSQT2Y9Fs3mH8CZ0vnnEzTlfo7ez9krsowky7eIhPbsb0kUrB3lSvkIPzgdu&X-Amz-Signature=95fd9f440fd5a7982637df83f4c1cc10b7e1f3808b2cb889722badf461681d85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE22UT2R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDDZiqkpBnjo5v2X6LdEj88TCri1INTK3vKDfPaRfu6ugIgAjpX7%2FZdfN8stptAIaKtH8bP4q5q0YjJcLwLM1J3Zmoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIrt7cbEzVf90pJ2aSrcA%2F4ipb9bpAF3JYL0hzFOO6OaUeJqvFsIVs%2BajavmNZDrVh%2Fz9QT%2B4SfZ2vXzNuEEoQDsr4CXfyW3eajzNn8B%2FDek%2Fqw%2BfB5R41ri18C19onkNXWO46bRcisZULpcQh4hN%2FpCvmFzoDBggqDoGKzBB%2BQX%2Bp1CnZdb9LKWVSVlwrp3Vy91cTzOvOyyR%2Bq88sTEpi2PIn2GEPhOMVJ1ca5yzlK249lOvo7OxriAm4SaW7M5NfYAYXPtxy9liAYh%2BNiVOFowwgOBKY%2B78FrkhhtU5qMTbSiYij6t%2BuvJwcm6PNDVvp1XfLtEJAvNo%2Be6U%2Fu13K1fn1DIsOZgS5xCgjbk9kRq0%2Bux3TMeaPEqT6jhCCLm04sB9gRKX1aZdQTV%2B5lPIGuSs0LMkGfJuvTIJgzT40SHIVkyCgyhT%2B5B35TdxbhW3BYEfkDS1R4lRucLLvXnc5fHldXtYHUCaUoud9yp6VbaB%2FeMpMWFcy0yKG%2BNemHGWURtZZzjuL7QNdSvSFwAAaCoD0BLqenpnKZButjYrzaIttORXpFXfoa9wpPQX5bJ1bLRenaltsB43lu38T0vlAZ2PgLctDic%2BQlnbjV4NzNygtMnewy%2FRXkCnLqiP5vilf4iaciSNubvkDl3MPSEqcAGOqUBrT1lHIUOYJACy7V7zscQYdlEn9SuiOegFT4ILvWjxC5Ghe%2BsstKhiRQjPkX6uqByXDUeU18oz7dy%2FQ%2FeV3VDaACX6%2BQGeyQe0bjhdX89GPQedLfldovjPMseCdd9fmxSBuwHJoDBt9yYjJk%2F9o%2BJU8cm9sYs08Y6sSQT2Y9Fs3mH8CZ0vnnEzTlfo7ez9krsowky7eIhPbsb0kUrB3lSvkIPzgdu&X-Amz-Signature=388591f9f11e0590e73396ba2979a26f1ec2b6a4dd244f5cc4a05e0bd1f3e99a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE22UT2R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDDZiqkpBnjo5v2X6LdEj88TCri1INTK3vKDfPaRfu6ugIgAjpX7%2FZdfN8stptAIaKtH8bP4q5q0YjJcLwLM1J3Zmoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIrt7cbEzVf90pJ2aSrcA%2F4ipb9bpAF3JYL0hzFOO6OaUeJqvFsIVs%2BajavmNZDrVh%2Fz9QT%2B4SfZ2vXzNuEEoQDsr4CXfyW3eajzNn8B%2FDek%2Fqw%2BfB5R41ri18C19onkNXWO46bRcisZULpcQh4hN%2FpCvmFzoDBggqDoGKzBB%2BQX%2Bp1CnZdb9LKWVSVlwrp3Vy91cTzOvOyyR%2Bq88sTEpi2PIn2GEPhOMVJ1ca5yzlK249lOvo7OxriAm4SaW7M5NfYAYXPtxy9liAYh%2BNiVOFowwgOBKY%2B78FrkhhtU5qMTbSiYij6t%2BuvJwcm6PNDVvp1XfLtEJAvNo%2Be6U%2Fu13K1fn1DIsOZgS5xCgjbk9kRq0%2Bux3TMeaPEqT6jhCCLm04sB9gRKX1aZdQTV%2B5lPIGuSs0LMkGfJuvTIJgzT40SHIVkyCgyhT%2B5B35TdxbhW3BYEfkDS1R4lRucLLvXnc5fHldXtYHUCaUoud9yp6VbaB%2FeMpMWFcy0yKG%2BNemHGWURtZZzjuL7QNdSvSFwAAaCoD0BLqenpnKZButjYrzaIttORXpFXfoa9wpPQX5bJ1bLRenaltsB43lu38T0vlAZ2PgLctDic%2BQlnbjV4NzNygtMnewy%2FRXkCnLqiP5vilf4iaciSNubvkDl3MPSEqcAGOqUBrT1lHIUOYJACy7V7zscQYdlEn9SuiOegFT4ILvWjxC5Ghe%2BsstKhiRQjPkX6uqByXDUeU18oz7dy%2FQ%2FeV3VDaACX6%2BQGeyQe0bjhdX89GPQedLfldovjPMseCdd9fmxSBuwHJoDBt9yYjJk%2F9o%2BJU8cm9sYs08Y6sSQT2Y9Fs3mH8CZ0vnnEzTlfo7ez9krsowky7eIhPbsb0kUrB3lSvkIPzgdu&X-Amz-Signature=0e9839acdb5eddf924fba640a1042ab84ad9d9addacca7ddeb0696efbfa08d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
