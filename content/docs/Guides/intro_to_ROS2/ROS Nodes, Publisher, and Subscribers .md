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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7LMY4Q%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEPvFWQgJRnXbADwDk8dWbA7w%2Bq6Lf21PiPyO6ccd3dIAiBx2pWG1bREGbruGcCMUV52ueMcTbQHSljHfcbL2%2B7PNSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7etOo%2BorUShQtJoKtwDrrWust5UaC3bEdNed1KBvjLIMoGx0ZTh9HN1PFCUfc9NoALRxpZvafUDdi5vU4%2FlER6SNy%2BNg2Q7fQ5xRJEMS7py%2BRjv8HcSMO3yNBWO%2FdRfsc9M2J2FCUlc10NkouKGT0S33uOb8zFGG4To6kHgwA9Ez%2FhDncvs7GX18Db2p5K%2FOYipCt6rFHjM0gm6KEq9nmU84jPBslddPjXElr0TPJFGve%2FS10BSvJm4EJZIE1wb85yyZILS0%2Fj0EtOtAojx6mbzDcWEO7zvqioo%2B29BPmt69Xb9x5cM79aUU%2BbwnONSU%2F4TZMyegRZ6mGJaKYUZ8AoKfUcClQW78OXMCK6VVKhiWbQn21Su0Mp9gwll6Oxr26QSejEzLGQnFbljhVvCM9nktJmgOJAP2Ti1Lmi4TVt0KhJFLO2%2F6Yly5A4KvDBlahFt%2Bam5IWqsSWoaeqpc5MrVTJp2Rmtqqh3jWNmt24eqysXxMV5qdMRlZqIQLKQ2HRIcmOxKzTPvTgENAkmSwgtBrdqZgX1fkqiXC8jEpQJEQ7zS6%2B71wrh49NBqE3x1tMiloOD7eI%2BfbhTZDQmRluIaWUcgeNkaeJdIRLWMGDBdB6XJp9F8MgswXkQXNfuikL%2FeivkSQUTpetAwotKQwQY6pgHPGAr%2FbBj%2FW4mhzQQFWmpXWvaJWCnOzdRqrw%2BFGAgySVAPEXDUdkVuUIS0Oytrut%2F3HifAnod5smLm1G51puuycXEPG7Rqf%2BvinGjlpHwy8lAOCAxm9DJVNwXhWSc9QjQkHPZPXipd9k%2BEBUQ9gAd1QvL5S94F6iJfdhVv4d5SYxLPCIV3U2uVjCTDkDBCHUwmBLHxyL2gdbtuqDG2eVagBfAMWcp2&X-Amz-Signature=6036a889e77f1290d5661013e0148811877f2d51a79e7fc4f8ff33440c7b72c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7LMY4Q%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEPvFWQgJRnXbADwDk8dWbA7w%2Bq6Lf21PiPyO6ccd3dIAiBx2pWG1bREGbruGcCMUV52ueMcTbQHSljHfcbL2%2B7PNSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7etOo%2BorUShQtJoKtwDrrWust5UaC3bEdNed1KBvjLIMoGx0ZTh9HN1PFCUfc9NoALRxpZvafUDdi5vU4%2FlER6SNy%2BNg2Q7fQ5xRJEMS7py%2BRjv8HcSMO3yNBWO%2FdRfsc9M2J2FCUlc10NkouKGT0S33uOb8zFGG4To6kHgwA9Ez%2FhDncvs7GX18Db2p5K%2FOYipCt6rFHjM0gm6KEq9nmU84jPBslddPjXElr0TPJFGve%2FS10BSvJm4EJZIE1wb85yyZILS0%2Fj0EtOtAojx6mbzDcWEO7zvqioo%2B29BPmt69Xb9x5cM79aUU%2BbwnONSU%2F4TZMyegRZ6mGJaKYUZ8AoKfUcClQW78OXMCK6VVKhiWbQn21Su0Mp9gwll6Oxr26QSejEzLGQnFbljhVvCM9nktJmgOJAP2Ti1Lmi4TVt0KhJFLO2%2F6Yly5A4KvDBlahFt%2Bam5IWqsSWoaeqpc5MrVTJp2Rmtqqh3jWNmt24eqysXxMV5qdMRlZqIQLKQ2HRIcmOxKzTPvTgENAkmSwgtBrdqZgX1fkqiXC8jEpQJEQ7zS6%2B71wrh49NBqE3x1tMiloOD7eI%2BfbhTZDQmRluIaWUcgeNkaeJdIRLWMGDBdB6XJp9F8MgswXkQXNfuikL%2FeivkSQUTpetAwotKQwQY6pgHPGAr%2FbBj%2FW4mhzQQFWmpXWvaJWCnOzdRqrw%2BFGAgySVAPEXDUdkVuUIS0Oytrut%2F3HifAnod5smLm1G51puuycXEPG7Rqf%2BvinGjlpHwy8lAOCAxm9DJVNwXhWSc9QjQkHPZPXipd9k%2BEBUQ9gAd1QvL5S94F6iJfdhVv4d5SYxLPCIV3U2uVjCTDkDBCHUwmBLHxyL2gdbtuqDG2eVagBfAMWcp2&X-Amz-Signature=abdd4586e096ae594440432d2876fa434f96047efa82f4fefdea7f9beb47c0b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7LMY4Q%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEPvFWQgJRnXbADwDk8dWbA7w%2Bq6Lf21PiPyO6ccd3dIAiBx2pWG1bREGbruGcCMUV52ueMcTbQHSljHfcbL2%2B7PNSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7etOo%2BorUShQtJoKtwDrrWust5UaC3bEdNed1KBvjLIMoGx0ZTh9HN1PFCUfc9NoALRxpZvafUDdi5vU4%2FlER6SNy%2BNg2Q7fQ5xRJEMS7py%2BRjv8HcSMO3yNBWO%2FdRfsc9M2J2FCUlc10NkouKGT0S33uOb8zFGG4To6kHgwA9Ez%2FhDncvs7GX18Db2p5K%2FOYipCt6rFHjM0gm6KEq9nmU84jPBslddPjXElr0TPJFGve%2FS10BSvJm4EJZIE1wb85yyZILS0%2Fj0EtOtAojx6mbzDcWEO7zvqioo%2B29BPmt69Xb9x5cM79aUU%2BbwnONSU%2F4TZMyegRZ6mGJaKYUZ8AoKfUcClQW78OXMCK6VVKhiWbQn21Su0Mp9gwll6Oxr26QSejEzLGQnFbljhVvCM9nktJmgOJAP2Ti1Lmi4TVt0KhJFLO2%2F6Yly5A4KvDBlahFt%2Bam5IWqsSWoaeqpc5MrVTJp2Rmtqqh3jWNmt24eqysXxMV5qdMRlZqIQLKQ2HRIcmOxKzTPvTgENAkmSwgtBrdqZgX1fkqiXC8jEpQJEQ7zS6%2B71wrh49NBqE3x1tMiloOD7eI%2BfbhTZDQmRluIaWUcgeNkaeJdIRLWMGDBdB6XJp9F8MgswXkQXNfuikL%2FeivkSQUTpetAwotKQwQY6pgHPGAr%2FbBj%2FW4mhzQQFWmpXWvaJWCnOzdRqrw%2BFGAgySVAPEXDUdkVuUIS0Oytrut%2F3HifAnod5smLm1G51puuycXEPG7Rqf%2BvinGjlpHwy8lAOCAxm9DJVNwXhWSc9QjQkHPZPXipd9k%2BEBUQ9gAd1QvL5S94F6iJfdhVv4d5SYxLPCIV3U2uVjCTDkDBCHUwmBLHxyL2gdbtuqDG2eVagBfAMWcp2&X-Amz-Signature=59e44ccb653cbc2601f0523f38a995505e00d2f29a8c5e0408e85b72d97c5a99&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7LMY4Q%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEPvFWQgJRnXbADwDk8dWbA7w%2Bq6Lf21PiPyO6ccd3dIAiBx2pWG1bREGbruGcCMUV52ueMcTbQHSljHfcbL2%2B7PNSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7etOo%2BorUShQtJoKtwDrrWust5UaC3bEdNed1KBvjLIMoGx0ZTh9HN1PFCUfc9NoALRxpZvafUDdi5vU4%2FlER6SNy%2BNg2Q7fQ5xRJEMS7py%2BRjv8HcSMO3yNBWO%2FdRfsc9M2J2FCUlc10NkouKGT0S33uOb8zFGG4To6kHgwA9Ez%2FhDncvs7GX18Db2p5K%2FOYipCt6rFHjM0gm6KEq9nmU84jPBslddPjXElr0TPJFGve%2FS10BSvJm4EJZIE1wb85yyZILS0%2Fj0EtOtAojx6mbzDcWEO7zvqioo%2B29BPmt69Xb9x5cM79aUU%2BbwnONSU%2F4TZMyegRZ6mGJaKYUZ8AoKfUcClQW78OXMCK6VVKhiWbQn21Su0Mp9gwll6Oxr26QSejEzLGQnFbljhVvCM9nktJmgOJAP2Ti1Lmi4TVt0KhJFLO2%2F6Yly5A4KvDBlahFt%2Bam5IWqsSWoaeqpc5MrVTJp2Rmtqqh3jWNmt24eqysXxMV5qdMRlZqIQLKQ2HRIcmOxKzTPvTgENAkmSwgtBrdqZgX1fkqiXC8jEpQJEQ7zS6%2B71wrh49NBqE3x1tMiloOD7eI%2BfbhTZDQmRluIaWUcgeNkaeJdIRLWMGDBdB6XJp9F8MgswXkQXNfuikL%2FeivkSQUTpetAwotKQwQY6pgHPGAr%2FbBj%2FW4mhzQQFWmpXWvaJWCnOzdRqrw%2BFGAgySVAPEXDUdkVuUIS0Oytrut%2F3HifAnod5smLm1G51puuycXEPG7Rqf%2BvinGjlpHwy8lAOCAxm9DJVNwXhWSc9QjQkHPZPXipd9k%2BEBUQ9gAd1QvL5S94F6iJfdhVv4d5SYxLPCIV3U2uVjCTDkDBCHUwmBLHxyL2gdbtuqDG2eVagBfAMWcp2&X-Amz-Signature=a2116d6c864d3d731690a6a81054d612d852e45c01d4956866cc779bc5884bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7LMY4Q%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEPvFWQgJRnXbADwDk8dWbA7w%2Bq6Lf21PiPyO6ccd3dIAiBx2pWG1bREGbruGcCMUV52ueMcTbQHSljHfcbL2%2B7PNSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7etOo%2BorUShQtJoKtwDrrWust5UaC3bEdNed1KBvjLIMoGx0ZTh9HN1PFCUfc9NoALRxpZvafUDdi5vU4%2FlER6SNy%2BNg2Q7fQ5xRJEMS7py%2BRjv8HcSMO3yNBWO%2FdRfsc9M2J2FCUlc10NkouKGT0S33uOb8zFGG4To6kHgwA9Ez%2FhDncvs7GX18Db2p5K%2FOYipCt6rFHjM0gm6KEq9nmU84jPBslddPjXElr0TPJFGve%2FS10BSvJm4EJZIE1wb85yyZILS0%2Fj0EtOtAojx6mbzDcWEO7zvqioo%2B29BPmt69Xb9x5cM79aUU%2BbwnONSU%2F4TZMyegRZ6mGJaKYUZ8AoKfUcClQW78OXMCK6VVKhiWbQn21Su0Mp9gwll6Oxr26QSejEzLGQnFbljhVvCM9nktJmgOJAP2Ti1Lmi4TVt0KhJFLO2%2F6Yly5A4KvDBlahFt%2Bam5IWqsSWoaeqpc5MrVTJp2Rmtqqh3jWNmt24eqysXxMV5qdMRlZqIQLKQ2HRIcmOxKzTPvTgENAkmSwgtBrdqZgX1fkqiXC8jEpQJEQ7zS6%2B71wrh49NBqE3x1tMiloOD7eI%2BfbhTZDQmRluIaWUcgeNkaeJdIRLWMGDBdB6XJp9F8MgswXkQXNfuikL%2FeivkSQUTpetAwotKQwQY6pgHPGAr%2FbBj%2FW4mhzQQFWmpXWvaJWCnOzdRqrw%2BFGAgySVAPEXDUdkVuUIS0Oytrut%2F3HifAnod5smLm1G51puuycXEPG7Rqf%2BvinGjlpHwy8lAOCAxm9DJVNwXhWSc9QjQkHPZPXipd9k%2BEBUQ9gAd1QvL5S94F6iJfdhVv4d5SYxLPCIV3U2uVjCTDkDBCHUwmBLHxyL2gdbtuqDG2eVagBfAMWcp2&X-Amz-Signature=c4080abbb7d622744ed8ad9cfe281624074decf061febe3dba0dd6476dfb042e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7LMY4Q%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEPvFWQgJRnXbADwDk8dWbA7w%2Bq6Lf21PiPyO6ccd3dIAiBx2pWG1bREGbruGcCMUV52ueMcTbQHSljHfcbL2%2B7PNSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7etOo%2BorUShQtJoKtwDrrWust5UaC3bEdNed1KBvjLIMoGx0ZTh9HN1PFCUfc9NoALRxpZvafUDdi5vU4%2FlER6SNy%2BNg2Q7fQ5xRJEMS7py%2BRjv8HcSMO3yNBWO%2FdRfsc9M2J2FCUlc10NkouKGT0S33uOb8zFGG4To6kHgwA9Ez%2FhDncvs7GX18Db2p5K%2FOYipCt6rFHjM0gm6KEq9nmU84jPBslddPjXElr0TPJFGve%2FS10BSvJm4EJZIE1wb85yyZILS0%2Fj0EtOtAojx6mbzDcWEO7zvqioo%2B29BPmt69Xb9x5cM79aUU%2BbwnONSU%2F4TZMyegRZ6mGJaKYUZ8AoKfUcClQW78OXMCK6VVKhiWbQn21Su0Mp9gwll6Oxr26QSejEzLGQnFbljhVvCM9nktJmgOJAP2Ti1Lmi4TVt0KhJFLO2%2F6Yly5A4KvDBlahFt%2Bam5IWqsSWoaeqpc5MrVTJp2Rmtqqh3jWNmt24eqysXxMV5qdMRlZqIQLKQ2HRIcmOxKzTPvTgENAkmSwgtBrdqZgX1fkqiXC8jEpQJEQ7zS6%2B71wrh49NBqE3x1tMiloOD7eI%2BfbhTZDQmRluIaWUcgeNkaeJdIRLWMGDBdB6XJp9F8MgswXkQXNfuikL%2FeivkSQUTpetAwotKQwQY6pgHPGAr%2FbBj%2FW4mhzQQFWmpXWvaJWCnOzdRqrw%2BFGAgySVAPEXDUdkVuUIS0Oytrut%2F3HifAnod5smLm1G51puuycXEPG7Rqf%2BvinGjlpHwy8lAOCAxm9DJVNwXhWSc9QjQkHPZPXipd9k%2BEBUQ9gAd1QvL5S94F6iJfdhVv4d5SYxLPCIV3U2uVjCTDkDBCHUwmBLHxyL2gdbtuqDG2eVagBfAMWcp2&X-Amz-Signature=0b249f9adc1f64701d31ae40bc629117038895bff7850e5588547648395f1303&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7LMY4Q%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEPvFWQgJRnXbADwDk8dWbA7w%2Bq6Lf21PiPyO6ccd3dIAiBx2pWG1bREGbruGcCMUV52ueMcTbQHSljHfcbL2%2B7PNSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7etOo%2BorUShQtJoKtwDrrWust5UaC3bEdNed1KBvjLIMoGx0ZTh9HN1PFCUfc9NoALRxpZvafUDdi5vU4%2FlER6SNy%2BNg2Q7fQ5xRJEMS7py%2BRjv8HcSMO3yNBWO%2FdRfsc9M2J2FCUlc10NkouKGT0S33uOb8zFGG4To6kHgwA9Ez%2FhDncvs7GX18Db2p5K%2FOYipCt6rFHjM0gm6KEq9nmU84jPBslddPjXElr0TPJFGve%2FS10BSvJm4EJZIE1wb85yyZILS0%2Fj0EtOtAojx6mbzDcWEO7zvqioo%2B29BPmt69Xb9x5cM79aUU%2BbwnONSU%2F4TZMyegRZ6mGJaKYUZ8AoKfUcClQW78OXMCK6VVKhiWbQn21Su0Mp9gwll6Oxr26QSejEzLGQnFbljhVvCM9nktJmgOJAP2Ti1Lmi4TVt0KhJFLO2%2F6Yly5A4KvDBlahFt%2Bam5IWqsSWoaeqpc5MrVTJp2Rmtqqh3jWNmt24eqysXxMV5qdMRlZqIQLKQ2HRIcmOxKzTPvTgENAkmSwgtBrdqZgX1fkqiXC8jEpQJEQ7zS6%2B71wrh49NBqE3x1tMiloOD7eI%2BfbhTZDQmRluIaWUcgeNkaeJdIRLWMGDBdB6XJp9F8MgswXkQXNfuikL%2FeivkSQUTpetAwotKQwQY6pgHPGAr%2FbBj%2FW4mhzQQFWmpXWvaJWCnOzdRqrw%2BFGAgySVAPEXDUdkVuUIS0Oytrut%2F3HifAnod5smLm1G51puuycXEPG7Rqf%2BvinGjlpHwy8lAOCAxm9DJVNwXhWSc9QjQkHPZPXipd9k%2BEBUQ9gAd1QvL5S94F6iJfdhVv4d5SYxLPCIV3U2uVjCTDkDBCHUwmBLHxyL2gdbtuqDG2eVagBfAMWcp2&X-Amz-Signature=a470a7785ae43d0f32d9b17af82f1efa858a8a34de0e1c42d0eeb585eb86e418&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7LMY4Q%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIEPvFWQgJRnXbADwDk8dWbA7w%2Bq6Lf21PiPyO6ccd3dIAiBx2pWG1bREGbruGcCMUV52ueMcTbQHSljHfcbL2%2B7PNSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7etOo%2BorUShQtJoKtwDrrWust5UaC3bEdNed1KBvjLIMoGx0ZTh9HN1PFCUfc9NoALRxpZvafUDdi5vU4%2FlER6SNy%2BNg2Q7fQ5xRJEMS7py%2BRjv8HcSMO3yNBWO%2FdRfsc9M2J2FCUlc10NkouKGT0S33uOb8zFGG4To6kHgwA9Ez%2FhDncvs7GX18Db2p5K%2FOYipCt6rFHjM0gm6KEq9nmU84jPBslddPjXElr0TPJFGve%2FS10BSvJm4EJZIE1wb85yyZILS0%2Fj0EtOtAojx6mbzDcWEO7zvqioo%2B29BPmt69Xb9x5cM79aUU%2BbwnONSU%2F4TZMyegRZ6mGJaKYUZ8AoKfUcClQW78OXMCK6VVKhiWbQn21Su0Mp9gwll6Oxr26QSejEzLGQnFbljhVvCM9nktJmgOJAP2Ti1Lmi4TVt0KhJFLO2%2F6Yly5A4KvDBlahFt%2Bam5IWqsSWoaeqpc5MrVTJp2Rmtqqh3jWNmt24eqysXxMV5qdMRlZqIQLKQ2HRIcmOxKzTPvTgENAkmSwgtBrdqZgX1fkqiXC8jEpQJEQ7zS6%2B71wrh49NBqE3x1tMiloOD7eI%2BfbhTZDQmRluIaWUcgeNkaeJdIRLWMGDBdB6XJp9F8MgswXkQXNfuikL%2FeivkSQUTpetAwotKQwQY6pgHPGAr%2FbBj%2FW4mhzQQFWmpXWvaJWCnOzdRqrw%2BFGAgySVAPEXDUdkVuUIS0Oytrut%2F3HifAnod5smLm1G51puuycXEPG7Rqf%2BvinGjlpHwy8lAOCAxm9DJVNwXhWSc9QjQkHPZPXipd9k%2BEBUQ9gAd1QvL5S94F6iJfdhVv4d5SYxLPCIV3U2uVjCTDkDBCHUwmBLHxyL2gdbtuqDG2eVagBfAMWcp2&X-Amz-Signature=c9e3594e5b6ded27c20531d4cdb566beb57aa5944fe8412a9e5795a668774d33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
