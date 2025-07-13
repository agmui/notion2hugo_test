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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2YKPVDX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzYETLR9pW35iMtzGlI8G4Q46N%2FYYIs2DzZYNj9%2FEpkQIge%2F2bFn8429laRoFpojw3h%2BrgqJ8KaT33twvWfFMBpIoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKiTohGRuI%2FYAHT3yrcA8bStGdHiVWFUwdHbh%2BsJp3EigDSu2nahVbJK4MzBrImMAYZlyfR4d%2BTCsCYuxZUSHKOHToVpnHjzYJ%2Fi6kQzFEbaR7d2%2BFt%2By333ipA80qU03ZKmSZ4MYCTvV59hrDW5tQvHgSbG8cmNL322MF2QIICYaPV9fZkcexQ%2FlKQoi7spE7fOaMIBQR7SO5mtmskD0Emm4zTHqIKjQmNrdrL1C1LF1qfJffIVc9IeDhaWBUyqGMFFm9upLprcc4AZkkCb%2FDJq126%2FBWQEyCev9y96higwcADSomIki1rbFVqbD9edTO46Zqn1c6kjmIe1%2F5rVjIACU6IJeIadpp6Gt2lgP3DK8KwOVD%2FPyEhbMi%2FqZYMfUAnlBicSO0iS%2FsMjKAWDvrN33MWAIF0TX%2FjAPgOALlI%2F8aXrP95Wbs4Fi3V3IGZeo1hJILEjFeJV%2BpviChSUAMj3FVDGmeAovkjFoOc4DoIcYbtghjSaOJLEvyWvN%2BbUKo9o%2FpwhQGgSPrSpIBxDyjnLhIS2vCHUfSG0%2FzE9WN%2BNenzTTBmpnw7Mrgd3ilj7c%2BKSrLtxCXZLRzD6WtaW2U9os7QWIitPO%2FLNgK%2FCbKD4oavsqR%2BslzDHdb8AAP29wLPo5z8F2PoMcndMIHZzMMGOqUBRrGZC7seWEfX3jjr%2F9%2FSXz7dRuMHLSOkxjTzC5MJB0o877rTydEe7c4hKS4MbksejqYb4LH8wpIyDR5u96m%2B6ZLnXyq%2FuRcw%2FxOASlqbgDZnPEXTifY2ZQOuKLBUBOM4w%2Bn2v7xWVg62eKt1jPP7I%2BMgVcOrlJgNiWZ1dsjyigLciVfNX9RqIIp34Mdopzm9aHqLcwroK9k4vrgOTOMbhXogSE49&X-Amz-Signature=fb2455994db714fc8269908505a09875bfdf421a5508d4b4677df3b125c9fcf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2YKPVDX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzYETLR9pW35iMtzGlI8G4Q46N%2FYYIs2DzZYNj9%2FEpkQIge%2F2bFn8429laRoFpojw3h%2BrgqJ8KaT33twvWfFMBpIoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKiTohGRuI%2FYAHT3yrcA8bStGdHiVWFUwdHbh%2BsJp3EigDSu2nahVbJK4MzBrImMAYZlyfR4d%2BTCsCYuxZUSHKOHToVpnHjzYJ%2Fi6kQzFEbaR7d2%2BFt%2By333ipA80qU03ZKmSZ4MYCTvV59hrDW5tQvHgSbG8cmNL322MF2QIICYaPV9fZkcexQ%2FlKQoi7spE7fOaMIBQR7SO5mtmskD0Emm4zTHqIKjQmNrdrL1C1LF1qfJffIVc9IeDhaWBUyqGMFFm9upLprcc4AZkkCb%2FDJq126%2FBWQEyCev9y96higwcADSomIki1rbFVqbD9edTO46Zqn1c6kjmIe1%2F5rVjIACU6IJeIadpp6Gt2lgP3DK8KwOVD%2FPyEhbMi%2FqZYMfUAnlBicSO0iS%2FsMjKAWDvrN33MWAIF0TX%2FjAPgOALlI%2F8aXrP95Wbs4Fi3V3IGZeo1hJILEjFeJV%2BpviChSUAMj3FVDGmeAovkjFoOc4DoIcYbtghjSaOJLEvyWvN%2BbUKo9o%2FpwhQGgSPrSpIBxDyjnLhIS2vCHUfSG0%2FzE9WN%2BNenzTTBmpnw7Mrgd3ilj7c%2BKSrLtxCXZLRzD6WtaW2U9os7QWIitPO%2FLNgK%2FCbKD4oavsqR%2BslzDHdb8AAP29wLPo5z8F2PoMcndMIHZzMMGOqUBRrGZC7seWEfX3jjr%2F9%2FSXz7dRuMHLSOkxjTzC5MJB0o877rTydEe7c4hKS4MbksejqYb4LH8wpIyDR5u96m%2B6ZLnXyq%2FuRcw%2FxOASlqbgDZnPEXTifY2ZQOuKLBUBOM4w%2Bn2v7xWVg62eKt1jPP7I%2BMgVcOrlJgNiWZ1dsjyigLciVfNX9RqIIp34Mdopzm9aHqLcwroK9k4vrgOTOMbhXogSE49&X-Amz-Signature=a09f93f81f2677b454fb20cde31a35ff57b2e840947fa51c7032a9c7c3debecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2YKPVDX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzYETLR9pW35iMtzGlI8G4Q46N%2FYYIs2DzZYNj9%2FEpkQIge%2F2bFn8429laRoFpojw3h%2BrgqJ8KaT33twvWfFMBpIoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKiTohGRuI%2FYAHT3yrcA8bStGdHiVWFUwdHbh%2BsJp3EigDSu2nahVbJK4MzBrImMAYZlyfR4d%2BTCsCYuxZUSHKOHToVpnHjzYJ%2Fi6kQzFEbaR7d2%2BFt%2By333ipA80qU03ZKmSZ4MYCTvV59hrDW5tQvHgSbG8cmNL322MF2QIICYaPV9fZkcexQ%2FlKQoi7spE7fOaMIBQR7SO5mtmskD0Emm4zTHqIKjQmNrdrL1C1LF1qfJffIVc9IeDhaWBUyqGMFFm9upLprcc4AZkkCb%2FDJq126%2FBWQEyCev9y96higwcADSomIki1rbFVqbD9edTO46Zqn1c6kjmIe1%2F5rVjIACU6IJeIadpp6Gt2lgP3DK8KwOVD%2FPyEhbMi%2FqZYMfUAnlBicSO0iS%2FsMjKAWDvrN33MWAIF0TX%2FjAPgOALlI%2F8aXrP95Wbs4Fi3V3IGZeo1hJILEjFeJV%2BpviChSUAMj3FVDGmeAovkjFoOc4DoIcYbtghjSaOJLEvyWvN%2BbUKo9o%2FpwhQGgSPrSpIBxDyjnLhIS2vCHUfSG0%2FzE9WN%2BNenzTTBmpnw7Mrgd3ilj7c%2BKSrLtxCXZLRzD6WtaW2U9os7QWIitPO%2FLNgK%2FCbKD4oavsqR%2BslzDHdb8AAP29wLPo5z8F2PoMcndMIHZzMMGOqUBRrGZC7seWEfX3jjr%2F9%2FSXz7dRuMHLSOkxjTzC5MJB0o877rTydEe7c4hKS4MbksejqYb4LH8wpIyDR5u96m%2B6ZLnXyq%2FuRcw%2FxOASlqbgDZnPEXTifY2ZQOuKLBUBOM4w%2Bn2v7xWVg62eKt1jPP7I%2BMgVcOrlJgNiWZ1dsjyigLciVfNX9RqIIp34Mdopzm9aHqLcwroK9k4vrgOTOMbhXogSE49&X-Amz-Signature=f9ee7090e7bff14b20fc64e72df6a8a44c435e57d91fc2fde4d3add8c4523dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2YKPVDX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzYETLR9pW35iMtzGlI8G4Q46N%2FYYIs2DzZYNj9%2FEpkQIge%2F2bFn8429laRoFpojw3h%2BrgqJ8KaT33twvWfFMBpIoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKiTohGRuI%2FYAHT3yrcA8bStGdHiVWFUwdHbh%2BsJp3EigDSu2nahVbJK4MzBrImMAYZlyfR4d%2BTCsCYuxZUSHKOHToVpnHjzYJ%2Fi6kQzFEbaR7d2%2BFt%2By333ipA80qU03ZKmSZ4MYCTvV59hrDW5tQvHgSbG8cmNL322MF2QIICYaPV9fZkcexQ%2FlKQoi7spE7fOaMIBQR7SO5mtmskD0Emm4zTHqIKjQmNrdrL1C1LF1qfJffIVc9IeDhaWBUyqGMFFm9upLprcc4AZkkCb%2FDJq126%2FBWQEyCev9y96higwcADSomIki1rbFVqbD9edTO46Zqn1c6kjmIe1%2F5rVjIACU6IJeIadpp6Gt2lgP3DK8KwOVD%2FPyEhbMi%2FqZYMfUAnlBicSO0iS%2FsMjKAWDvrN33MWAIF0TX%2FjAPgOALlI%2F8aXrP95Wbs4Fi3V3IGZeo1hJILEjFeJV%2BpviChSUAMj3FVDGmeAovkjFoOc4DoIcYbtghjSaOJLEvyWvN%2BbUKo9o%2FpwhQGgSPrSpIBxDyjnLhIS2vCHUfSG0%2FzE9WN%2BNenzTTBmpnw7Mrgd3ilj7c%2BKSrLtxCXZLRzD6WtaW2U9os7QWIitPO%2FLNgK%2FCbKD4oavsqR%2BslzDHdb8AAP29wLPo5z8F2PoMcndMIHZzMMGOqUBRrGZC7seWEfX3jjr%2F9%2FSXz7dRuMHLSOkxjTzC5MJB0o877rTydEe7c4hKS4MbksejqYb4LH8wpIyDR5u96m%2B6ZLnXyq%2FuRcw%2FxOASlqbgDZnPEXTifY2ZQOuKLBUBOM4w%2Bn2v7xWVg62eKt1jPP7I%2BMgVcOrlJgNiWZ1dsjyigLciVfNX9RqIIp34Mdopzm9aHqLcwroK9k4vrgOTOMbhXogSE49&X-Amz-Signature=dcf44a88bc961166c0977ef39e55408b68b5fc3db3429ee971684646dd306ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2YKPVDX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzYETLR9pW35iMtzGlI8G4Q46N%2FYYIs2DzZYNj9%2FEpkQIge%2F2bFn8429laRoFpojw3h%2BrgqJ8KaT33twvWfFMBpIoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKiTohGRuI%2FYAHT3yrcA8bStGdHiVWFUwdHbh%2BsJp3EigDSu2nahVbJK4MzBrImMAYZlyfR4d%2BTCsCYuxZUSHKOHToVpnHjzYJ%2Fi6kQzFEbaR7d2%2BFt%2By333ipA80qU03ZKmSZ4MYCTvV59hrDW5tQvHgSbG8cmNL322MF2QIICYaPV9fZkcexQ%2FlKQoi7spE7fOaMIBQR7SO5mtmskD0Emm4zTHqIKjQmNrdrL1C1LF1qfJffIVc9IeDhaWBUyqGMFFm9upLprcc4AZkkCb%2FDJq126%2FBWQEyCev9y96higwcADSomIki1rbFVqbD9edTO46Zqn1c6kjmIe1%2F5rVjIACU6IJeIadpp6Gt2lgP3DK8KwOVD%2FPyEhbMi%2FqZYMfUAnlBicSO0iS%2FsMjKAWDvrN33MWAIF0TX%2FjAPgOALlI%2F8aXrP95Wbs4Fi3V3IGZeo1hJILEjFeJV%2BpviChSUAMj3FVDGmeAovkjFoOc4DoIcYbtghjSaOJLEvyWvN%2BbUKo9o%2FpwhQGgSPrSpIBxDyjnLhIS2vCHUfSG0%2FzE9WN%2BNenzTTBmpnw7Mrgd3ilj7c%2BKSrLtxCXZLRzD6WtaW2U9os7QWIitPO%2FLNgK%2FCbKD4oavsqR%2BslzDHdb8AAP29wLPo5z8F2PoMcndMIHZzMMGOqUBRrGZC7seWEfX3jjr%2F9%2FSXz7dRuMHLSOkxjTzC5MJB0o877rTydEe7c4hKS4MbksejqYb4LH8wpIyDR5u96m%2B6ZLnXyq%2FuRcw%2FxOASlqbgDZnPEXTifY2ZQOuKLBUBOM4w%2Bn2v7xWVg62eKt1jPP7I%2BMgVcOrlJgNiWZ1dsjyigLciVfNX9RqIIp34Mdopzm9aHqLcwroK9k4vrgOTOMbhXogSE49&X-Amz-Signature=d4d13728058767ded24f3d2cb284e9fc6ede8f9b55a0f9b04f1b6dea97b0138e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2YKPVDX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzYETLR9pW35iMtzGlI8G4Q46N%2FYYIs2DzZYNj9%2FEpkQIge%2F2bFn8429laRoFpojw3h%2BrgqJ8KaT33twvWfFMBpIoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKiTohGRuI%2FYAHT3yrcA8bStGdHiVWFUwdHbh%2BsJp3EigDSu2nahVbJK4MzBrImMAYZlyfR4d%2BTCsCYuxZUSHKOHToVpnHjzYJ%2Fi6kQzFEbaR7d2%2BFt%2By333ipA80qU03ZKmSZ4MYCTvV59hrDW5tQvHgSbG8cmNL322MF2QIICYaPV9fZkcexQ%2FlKQoi7spE7fOaMIBQR7SO5mtmskD0Emm4zTHqIKjQmNrdrL1C1LF1qfJffIVc9IeDhaWBUyqGMFFm9upLprcc4AZkkCb%2FDJq126%2FBWQEyCev9y96higwcADSomIki1rbFVqbD9edTO46Zqn1c6kjmIe1%2F5rVjIACU6IJeIadpp6Gt2lgP3DK8KwOVD%2FPyEhbMi%2FqZYMfUAnlBicSO0iS%2FsMjKAWDvrN33MWAIF0TX%2FjAPgOALlI%2F8aXrP95Wbs4Fi3V3IGZeo1hJILEjFeJV%2BpviChSUAMj3FVDGmeAovkjFoOc4DoIcYbtghjSaOJLEvyWvN%2BbUKo9o%2FpwhQGgSPrSpIBxDyjnLhIS2vCHUfSG0%2FzE9WN%2BNenzTTBmpnw7Mrgd3ilj7c%2BKSrLtxCXZLRzD6WtaW2U9os7QWIitPO%2FLNgK%2FCbKD4oavsqR%2BslzDHdb8AAP29wLPo5z8F2PoMcndMIHZzMMGOqUBRrGZC7seWEfX3jjr%2F9%2FSXz7dRuMHLSOkxjTzC5MJB0o877rTydEe7c4hKS4MbksejqYb4LH8wpIyDR5u96m%2B6ZLnXyq%2FuRcw%2FxOASlqbgDZnPEXTifY2ZQOuKLBUBOM4w%2Bn2v7xWVg62eKt1jPP7I%2BMgVcOrlJgNiWZ1dsjyigLciVfNX9RqIIp34Mdopzm9aHqLcwroK9k4vrgOTOMbhXogSE49&X-Amz-Signature=749b673fb8186a3ac653cd1cdc2a62dbd366ad7c4eaedce04ae635661999060a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2YKPVDX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzYETLR9pW35iMtzGlI8G4Q46N%2FYYIs2DzZYNj9%2FEpkQIge%2F2bFn8429laRoFpojw3h%2BrgqJ8KaT33twvWfFMBpIoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKiTohGRuI%2FYAHT3yrcA8bStGdHiVWFUwdHbh%2BsJp3EigDSu2nahVbJK4MzBrImMAYZlyfR4d%2BTCsCYuxZUSHKOHToVpnHjzYJ%2Fi6kQzFEbaR7d2%2BFt%2By333ipA80qU03ZKmSZ4MYCTvV59hrDW5tQvHgSbG8cmNL322MF2QIICYaPV9fZkcexQ%2FlKQoi7spE7fOaMIBQR7SO5mtmskD0Emm4zTHqIKjQmNrdrL1C1LF1qfJffIVc9IeDhaWBUyqGMFFm9upLprcc4AZkkCb%2FDJq126%2FBWQEyCev9y96higwcADSomIki1rbFVqbD9edTO46Zqn1c6kjmIe1%2F5rVjIACU6IJeIadpp6Gt2lgP3DK8KwOVD%2FPyEhbMi%2FqZYMfUAnlBicSO0iS%2FsMjKAWDvrN33MWAIF0TX%2FjAPgOALlI%2F8aXrP95Wbs4Fi3V3IGZeo1hJILEjFeJV%2BpviChSUAMj3FVDGmeAovkjFoOc4DoIcYbtghjSaOJLEvyWvN%2BbUKo9o%2FpwhQGgSPrSpIBxDyjnLhIS2vCHUfSG0%2FzE9WN%2BNenzTTBmpnw7Mrgd3ilj7c%2BKSrLtxCXZLRzD6WtaW2U9os7QWIitPO%2FLNgK%2FCbKD4oavsqR%2BslzDHdb8AAP29wLPo5z8F2PoMcndMIHZzMMGOqUBRrGZC7seWEfX3jjr%2F9%2FSXz7dRuMHLSOkxjTzC5MJB0o877rTydEe7c4hKS4MbksejqYb4LH8wpIyDR5u96m%2B6ZLnXyq%2FuRcw%2FxOASlqbgDZnPEXTifY2ZQOuKLBUBOM4w%2Bn2v7xWVg62eKt1jPP7I%2BMgVcOrlJgNiWZ1dsjyigLciVfNX9RqIIp34Mdopzm9aHqLcwroK9k4vrgOTOMbhXogSE49&X-Amz-Signature=9bd5d0bd0df58f627134c0ab4542ad2955cded5f3406555dc742142280d1fbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2YKPVDX%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzYETLR9pW35iMtzGlI8G4Q46N%2FYYIs2DzZYNj9%2FEpkQIge%2F2bFn8429laRoFpojw3h%2BrgqJ8KaT33twvWfFMBpIoqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKiTohGRuI%2FYAHT3yrcA8bStGdHiVWFUwdHbh%2BsJp3EigDSu2nahVbJK4MzBrImMAYZlyfR4d%2BTCsCYuxZUSHKOHToVpnHjzYJ%2Fi6kQzFEbaR7d2%2BFt%2By333ipA80qU03ZKmSZ4MYCTvV59hrDW5tQvHgSbG8cmNL322MF2QIICYaPV9fZkcexQ%2FlKQoi7spE7fOaMIBQR7SO5mtmskD0Emm4zTHqIKjQmNrdrL1C1LF1qfJffIVc9IeDhaWBUyqGMFFm9upLprcc4AZkkCb%2FDJq126%2FBWQEyCev9y96higwcADSomIki1rbFVqbD9edTO46Zqn1c6kjmIe1%2F5rVjIACU6IJeIadpp6Gt2lgP3DK8KwOVD%2FPyEhbMi%2FqZYMfUAnlBicSO0iS%2FsMjKAWDvrN33MWAIF0TX%2FjAPgOALlI%2F8aXrP95Wbs4Fi3V3IGZeo1hJILEjFeJV%2BpviChSUAMj3FVDGmeAovkjFoOc4DoIcYbtghjSaOJLEvyWvN%2BbUKo9o%2FpwhQGgSPrSpIBxDyjnLhIS2vCHUfSG0%2FzE9WN%2BNenzTTBmpnw7Mrgd3ilj7c%2BKSrLtxCXZLRzD6WtaW2U9os7QWIitPO%2FLNgK%2FCbKD4oavsqR%2BslzDHdb8AAP29wLPo5z8F2PoMcndMIHZzMMGOqUBRrGZC7seWEfX3jjr%2F9%2FSXz7dRuMHLSOkxjTzC5MJB0o877rTydEe7c4hKS4MbksejqYb4LH8wpIyDR5u96m%2B6ZLnXyq%2FuRcw%2FxOASlqbgDZnPEXTifY2ZQOuKLBUBOM4w%2Bn2v7xWVg62eKt1jPP7I%2BMgVcOrlJgNiWZ1dsjyigLciVfNX9RqIIp34Mdopzm9aHqLcwroK9k4vrgOTOMbhXogSE49&X-Amz-Signature=8ce07ff6ce6c5110be8c4d6f10cff84c525251e7d00b41682e67eaf98522d2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
