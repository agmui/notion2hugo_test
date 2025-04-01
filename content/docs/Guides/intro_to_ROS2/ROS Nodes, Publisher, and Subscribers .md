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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3KJFLD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCjVuy7a%2B1SMyepHu89T6Y1%2F3hz4Mt6PG5%2F%2B1MQqSGTEgIgZep64DJjnfBA7Z%2FpVvjBtUTUWVrwoviZr30LSMyYUo8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE59o7vhlTxeM6u4VSrcA1AYle3eaLhT7QhVL9b5QbqxOCecoekXLBUa%2BTbHoNx3tsHTs%2BQyq9dbcYfCFOttfn%2BwpaepFQTPjNhalUzecHAw0lw%2F%2BS6kq0g2h7b%2FafQbN5pQGEnBGCmPwK7021nJyu6JpmqctsCENILBoDw2alaQybTimtjfAqsxEGLniNPmiJ4LNyQoDtbDx0IF1uF42LIiLQbKlJcSzyNB6pvQUnXvdbBIkRmyNGm5GYCl0CrDowRQzXQrX1xk7s4DiKNI5BE9%2FooONQtIpb1bV9jfGLNwm5fuQ52Tf1tz%2FJCWTwa%2FxYwveAQ5uLEToMThgoLZijVzA0P6UyyVnl7wVV2JP8pvqAuSxsjISaZ5Xu4V7j6SNmesjG7jBC3CPZeSckhCRBIXXU%2FlmKbWvDrnoyFOsOzdEZ8lq%2BR6RtkMiNYxpK9av5JMXMEOPqxSZxYQOZKOAro7AOIDPBsCIDPjeW8Dy8ZlH3ecCikX2h7ojcKwUUKJLgb0WhP16V7vbH3vUA4zk0lPpKtp8JUQe1t0AabIC4NrEcJhWVgrvA0F95IZTDWLoBEoL8lIjhlFBrBOZNfpKyT3UqpwFsPBhEQKNK60uPEj3dyqvWBaFsuyXN44fhmDMrXYAc3t2MLeFBGTMKvmrr8GOqUBqdhj2MO44G5NAVI%2FXLEEAYAAAa6GDwVnh5FLH7TCL18DTVoHZFet9zAppT24hXh3iFb3Cgz0QgHwVPZTE6sX%2BRpV80N3g0LKdA9Dd4wc7lOO6SWK6wGWBTq366%2FJinETGlbnipp8lHp5iK3s8zgN9OEl%2Bb2ysHcBf2IROiVR1GNCwtKB4wi77BdeK3GV9SYutexZk2CdtfwmvQJQGN7G4D23Ppid&X-Amz-Signature=d55d540c29a68ed9d1dc74ad4a9c9a5e68a99ed858c3c90409e2226d28b53d74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3KJFLD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCjVuy7a%2B1SMyepHu89T6Y1%2F3hz4Mt6PG5%2F%2B1MQqSGTEgIgZep64DJjnfBA7Z%2FpVvjBtUTUWVrwoviZr30LSMyYUo8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE59o7vhlTxeM6u4VSrcA1AYle3eaLhT7QhVL9b5QbqxOCecoekXLBUa%2BTbHoNx3tsHTs%2BQyq9dbcYfCFOttfn%2BwpaepFQTPjNhalUzecHAw0lw%2F%2BS6kq0g2h7b%2FafQbN5pQGEnBGCmPwK7021nJyu6JpmqctsCENILBoDw2alaQybTimtjfAqsxEGLniNPmiJ4LNyQoDtbDx0IF1uF42LIiLQbKlJcSzyNB6pvQUnXvdbBIkRmyNGm5GYCl0CrDowRQzXQrX1xk7s4DiKNI5BE9%2FooONQtIpb1bV9jfGLNwm5fuQ52Tf1tz%2FJCWTwa%2FxYwveAQ5uLEToMThgoLZijVzA0P6UyyVnl7wVV2JP8pvqAuSxsjISaZ5Xu4V7j6SNmesjG7jBC3CPZeSckhCRBIXXU%2FlmKbWvDrnoyFOsOzdEZ8lq%2BR6RtkMiNYxpK9av5JMXMEOPqxSZxYQOZKOAro7AOIDPBsCIDPjeW8Dy8ZlH3ecCikX2h7ojcKwUUKJLgb0WhP16V7vbH3vUA4zk0lPpKtp8JUQe1t0AabIC4NrEcJhWVgrvA0F95IZTDWLoBEoL8lIjhlFBrBOZNfpKyT3UqpwFsPBhEQKNK60uPEj3dyqvWBaFsuyXN44fhmDMrXYAc3t2MLeFBGTMKvmrr8GOqUBqdhj2MO44G5NAVI%2FXLEEAYAAAa6GDwVnh5FLH7TCL18DTVoHZFet9zAppT24hXh3iFb3Cgz0QgHwVPZTE6sX%2BRpV80N3g0LKdA9Dd4wc7lOO6SWK6wGWBTq366%2FJinETGlbnipp8lHp5iK3s8zgN9OEl%2Bb2ysHcBf2IROiVR1GNCwtKB4wi77BdeK3GV9SYutexZk2CdtfwmvQJQGN7G4D23Ppid&X-Amz-Signature=fcf2f1f4ba00671ef5544ee079c29e2d86a254551bf57b5e52f4e265a659a5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3KJFLD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCjVuy7a%2B1SMyepHu89T6Y1%2F3hz4Mt6PG5%2F%2B1MQqSGTEgIgZep64DJjnfBA7Z%2FpVvjBtUTUWVrwoviZr30LSMyYUo8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE59o7vhlTxeM6u4VSrcA1AYle3eaLhT7QhVL9b5QbqxOCecoekXLBUa%2BTbHoNx3tsHTs%2BQyq9dbcYfCFOttfn%2BwpaepFQTPjNhalUzecHAw0lw%2F%2BS6kq0g2h7b%2FafQbN5pQGEnBGCmPwK7021nJyu6JpmqctsCENILBoDw2alaQybTimtjfAqsxEGLniNPmiJ4LNyQoDtbDx0IF1uF42LIiLQbKlJcSzyNB6pvQUnXvdbBIkRmyNGm5GYCl0CrDowRQzXQrX1xk7s4DiKNI5BE9%2FooONQtIpb1bV9jfGLNwm5fuQ52Tf1tz%2FJCWTwa%2FxYwveAQ5uLEToMThgoLZijVzA0P6UyyVnl7wVV2JP8pvqAuSxsjISaZ5Xu4V7j6SNmesjG7jBC3CPZeSckhCRBIXXU%2FlmKbWvDrnoyFOsOzdEZ8lq%2BR6RtkMiNYxpK9av5JMXMEOPqxSZxYQOZKOAro7AOIDPBsCIDPjeW8Dy8ZlH3ecCikX2h7ojcKwUUKJLgb0WhP16V7vbH3vUA4zk0lPpKtp8JUQe1t0AabIC4NrEcJhWVgrvA0F95IZTDWLoBEoL8lIjhlFBrBOZNfpKyT3UqpwFsPBhEQKNK60uPEj3dyqvWBaFsuyXN44fhmDMrXYAc3t2MLeFBGTMKvmrr8GOqUBqdhj2MO44G5NAVI%2FXLEEAYAAAa6GDwVnh5FLH7TCL18DTVoHZFet9zAppT24hXh3iFb3Cgz0QgHwVPZTE6sX%2BRpV80N3g0LKdA9Dd4wc7lOO6SWK6wGWBTq366%2FJinETGlbnipp8lHp5iK3s8zgN9OEl%2Bb2ysHcBf2IROiVR1GNCwtKB4wi77BdeK3GV9SYutexZk2CdtfwmvQJQGN7G4D23Ppid&X-Amz-Signature=f6916ece9ee8633140c1c11c10d1fdc44fc4350c184491c8eb60676fbf8fd617&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3KJFLD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCjVuy7a%2B1SMyepHu89T6Y1%2F3hz4Mt6PG5%2F%2B1MQqSGTEgIgZep64DJjnfBA7Z%2FpVvjBtUTUWVrwoviZr30LSMyYUo8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE59o7vhlTxeM6u4VSrcA1AYle3eaLhT7QhVL9b5QbqxOCecoekXLBUa%2BTbHoNx3tsHTs%2BQyq9dbcYfCFOttfn%2BwpaepFQTPjNhalUzecHAw0lw%2F%2BS6kq0g2h7b%2FafQbN5pQGEnBGCmPwK7021nJyu6JpmqctsCENILBoDw2alaQybTimtjfAqsxEGLniNPmiJ4LNyQoDtbDx0IF1uF42LIiLQbKlJcSzyNB6pvQUnXvdbBIkRmyNGm5GYCl0CrDowRQzXQrX1xk7s4DiKNI5BE9%2FooONQtIpb1bV9jfGLNwm5fuQ52Tf1tz%2FJCWTwa%2FxYwveAQ5uLEToMThgoLZijVzA0P6UyyVnl7wVV2JP8pvqAuSxsjISaZ5Xu4V7j6SNmesjG7jBC3CPZeSckhCRBIXXU%2FlmKbWvDrnoyFOsOzdEZ8lq%2BR6RtkMiNYxpK9av5JMXMEOPqxSZxYQOZKOAro7AOIDPBsCIDPjeW8Dy8ZlH3ecCikX2h7ojcKwUUKJLgb0WhP16V7vbH3vUA4zk0lPpKtp8JUQe1t0AabIC4NrEcJhWVgrvA0F95IZTDWLoBEoL8lIjhlFBrBOZNfpKyT3UqpwFsPBhEQKNK60uPEj3dyqvWBaFsuyXN44fhmDMrXYAc3t2MLeFBGTMKvmrr8GOqUBqdhj2MO44G5NAVI%2FXLEEAYAAAa6GDwVnh5FLH7TCL18DTVoHZFet9zAppT24hXh3iFb3Cgz0QgHwVPZTE6sX%2BRpV80N3g0LKdA9Dd4wc7lOO6SWK6wGWBTq366%2FJinETGlbnipp8lHp5iK3s8zgN9OEl%2Bb2ysHcBf2IROiVR1GNCwtKB4wi77BdeK3GV9SYutexZk2CdtfwmvQJQGN7G4D23Ppid&X-Amz-Signature=e300858ad4efe72974d536d5c56bf9634c0fae543d543101c58f205969417e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3KJFLD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCjVuy7a%2B1SMyepHu89T6Y1%2F3hz4Mt6PG5%2F%2B1MQqSGTEgIgZep64DJjnfBA7Z%2FpVvjBtUTUWVrwoviZr30LSMyYUo8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE59o7vhlTxeM6u4VSrcA1AYle3eaLhT7QhVL9b5QbqxOCecoekXLBUa%2BTbHoNx3tsHTs%2BQyq9dbcYfCFOttfn%2BwpaepFQTPjNhalUzecHAw0lw%2F%2BS6kq0g2h7b%2FafQbN5pQGEnBGCmPwK7021nJyu6JpmqctsCENILBoDw2alaQybTimtjfAqsxEGLniNPmiJ4LNyQoDtbDx0IF1uF42LIiLQbKlJcSzyNB6pvQUnXvdbBIkRmyNGm5GYCl0CrDowRQzXQrX1xk7s4DiKNI5BE9%2FooONQtIpb1bV9jfGLNwm5fuQ52Tf1tz%2FJCWTwa%2FxYwveAQ5uLEToMThgoLZijVzA0P6UyyVnl7wVV2JP8pvqAuSxsjISaZ5Xu4V7j6SNmesjG7jBC3CPZeSckhCRBIXXU%2FlmKbWvDrnoyFOsOzdEZ8lq%2BR6RtkMiNYxpK9av5JMXMEOPqxSZxYQOZKOAro7AOIDPBsCIDPjeW8Dy8ZlH3ecCikX2h7ojcKwUUKJLgb0WhP16V7vbH3vUA4zk0lPpKtp8JUQe1t0AabIC4NrEcJhWVgrvA0F95IZTDWLoBEoL8lIjhlFBrBOZNfpKyT3UqpwFsPBhEQKNK60uPEj3dyqvWBaFsuyXN44fhmDMrXYAc3t2MLeFBGTMKvmrr8GOqUBqdhj2MO44G5NAVI%2FXLEEAYAAAa6GDwVnh5FLH7TCL18DTVoHZFet9zAppT24hXh3iFb3Cgz0QgHwVPZTE6sX%2BRpV80N3g0LKdA9Dd4wc7lOO6SWK6wGWBTq366%2FJinETGlbnipp8lHp5iK3s8zgN9OEl%2Bb2ysHcBf2IROiVR1GNCwtKB4wi77BdeK3GV9SYutexZk2CdtfwmvQJQGN7G4D23Ppid&X-Amz-Signature=7bb14975d12f6f02a948ebe2a2d6e5755aead855b8ade5bef1fe9bd0d026d8cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3KJFLD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCjVuy7a%2B1SMyepHu89T6Y1%2F3hz4Mt6PG5%2F%2B1MQqSGTEgIgZep64DJjnfBA7Z%2FpVvjBtUTUWVrwoviZr30LSMyYUo8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE59o7vhlTxeM6u4VSrcA1AYle3eaLhT7QhVL9b5QbqxOCecoekXLBUa%2BTbHoNx3tsHTs%2BQyq9dbcYfCFOttfn%2BwpaepFQTPjNhalUzecHAw0lw%2F%2BS6kq0g2h7b%2FafQbN5pQGEnBGCmPwK7021nJyu6JpmqctsCENILBoDw2alaQybTimtjfAqsxEGLniNPmiJ4LNyQoDtbDx0IF1uF42LIiLQbKlJcSzyNB6pvQUnXvdbBIkRmyNGm5GYCl0CrDowRQzXQrX1xk7s4DiKNI5BE9%2FooONQtIpb1bV9jfGLNwm5fuQ52Tf1tz%2FJCWTwa%2FxYwveAQ5uLEToMThgoLZijVzA0P6UyyVnl7wVV2JP8pvqAuSxsjISaZ5Xu4V7j6SNmesjG7jBC3CPZeSckhCRBIXXU%2FlmKbWvDrnoyFOsOzdEZ8lq%2BR6RtkMiNYxpK9av5JMXMEOPqxSZxYQOZKOAro7AOIDPBsCIDPjeW8Dy8ZlH3ecCikX2h7ojcKwUUKJLgb0WhP16V7vbH3vUA4zk0lPpKtp8JUQe1t0AabIC4NrEcJhWVgrvA0F95IZTDWLoBEoL8lIjhlFBrBOZNfpKyT3UqpwFsPBhEQKNK60uPEj3dyqvWBaFsuyXN44fhmDMrXYAc3t2MLeFBGTMKvmrr8GOqUBqdhj2MO44G5NAVI%2FXLEEAYAAAa6GDwVnh5FLH7TCL18DTVoHZFet9zAppT24hXh3iFb3Cgz0QgHwVPZTE6sX%2BRpV80N3g0LKdA9Dd4wc7lOO6SWK6wGWBTq366%2FJinETGlbnipp8lHp5iK3s8zgN9OEl%2Bb2ysHcBf2IROiVR1GNCwtKB4wi77BdeK3GV9SYutexZk2CdtfwmvQJQGN7G4D23Ppid&X-Amz-Signature=83dd5e310f5a09e260faadc5062e499a823fab113e2b6f6b3e268ed6c78d74d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3KJFLD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCjVuy7a%2B1SMyepHu89T6Y1%2F3hz4Mt6PG5%2F%2B1MQqSGTEgIgZep64DJjnfBA7Z%2FpVvjBtUTUWVrwoviZr30LSMyYUo8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE59o7vhlTxeM6u4VSrcA1AYle3eaLhT7QhVL9b5QbqxOCecoekXLBUa%2BTbHoNx3tsHTs%2BQyq9dbcYfCFOttfn%2BwpaepFQTPjNhalUzecHAw0lw%2F%2BS6kq0g2h7b%2FafQbN5pQGEnBGCmPwK7021nJyu6JpmqctsCENILBoDw2alaQybTimtjfAqsxEGLniNPmiJ4LNyQoDtbDx0IF1uF42LIiLQbKlJcSzyNB6pvQUnXvdbBIkRmyNGm5GYCl0CrDowRQzXQrX1xk7s4DiKNI5BE9%2FooONQtIpb1bV9jfGLNwm5fuQ52Tf1tz%2FJCWTwa%2FxYwveAQ5uLEToMThgoLZijVzA0P6UyyVnl7wVV2JP8pvqAuSxsjISaZ5Xu4V7j6SNmesjG7jBC3CPZeSckhCRBIXXU%2FlmKbWvDrnoyFOsOzdEZ8lq%2BR6RtkMiNYxpK9av5JMXMEOPqxSZxYQOZKOAro7AOIDPBsCIDPjeW8Dy8ZlH3ecCikX2h7ojcKwUUKJLgb0WhP16V7vbH3vUA4zk0lPpKtp8JUQe1t0AabIC4NrEcJhWVgrvA0F95IZTDWLoBEoL8lIjhlFBrBOZNfpKyT3UqpwFsPBhEQKNK60uPEj3dyqvWBaFsuyXN44fhmDMrXYAc3t2MLeFBGTMKvmrr8GOqUBqdhj2MO44G5NAVI%2FXLEEAYAAAa6GDwVnh5FLH7TCL18DTVoHZFet9zAppT24hXh3iFb3Cgz0QgHwVPZTE6sX%2BRpV80N3g0LKdA9Dd4wc7lOO6SWK6wGWBTq366%2FJinETGlbnipp8lHp5iK3s8zgN9OEl%2Bb2ysHcBf2IROiVR1GNCwtKB4wi77BdeK3GV9SYutexZk2CdtfwmvQJQGN7G4D23Ppid&X-Amz-Signature=2bc0659116113fc00116c175a7e1bd1c7d449e1eab84ff2e0ab2e82433645550&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P3KJFLD%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCjVuy7a%2B1SMyepHu89T6Y1%2F3hz4Mt6PG5%2F%2B1MQqSGTEgIgZep64DJjnfBA7Z%2FpVvjBtUTUWVrwoviZr30LSMyYUo8qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE59o7vhlTxeM6u4VSrcA1AYle3eaLhT7QhVL9b5QbqxOCecoekXLBUa%2BTbHoNx3tsHTs%2BQyq9dbcYfCFOttfn%2BwpaepFQTPjNhalUzecHAw0lw%2F%2BS6kq0g2h7b%2FafQbN5pQGEnBGCmPwK7021nJyu6JpmqctsCENILBoDw2alaQybTimtjfAqsxEGLniNPmiJ4LNyQoDtbDx0IF1uF42LIiLQbKlJcSzyNB6pvQUnXvdbBIkRmyNGm5GYCl0CrDowRQzXQrX1xk7s4DiKNI5BE9%2FooONQtIpb1bV9jfGLNwm5fuQ52Tf1tz%2FJCWTwa%2FxYwveAQ5uLEToMThgoLZijVzA0P6UyyVnl7wVV2JP8pvqAuSxsjISaZ5Xu4V7j6SNmesjG7jBC3CPZeSckhCRBIXXU%2FlmKbWvDrnoyFOsOzdEZ8lq%2BR6RtkMiNYxpK9av5JMXMEOPqxSZxYQOZKOAro7AOIDPBsCIDPjeW8Dy8ZlH3ecCikX2h7ojcKwUUKJLgb0WhP16V7vbH3vUA4zk0lPpKtp8JUQe1t0AabIC4NrEcJhWVgrvA0F95IZTDWLoBEoL8lIjhlFBrBOZNfpKyT3UqpwFsPBhEQKNK60uPEj3dyqvWBaFsuyXN44fhmDMrXYAc3t2MLeFBGTMKvmrr8GOqUBqdhj2MO44G5NAVI%2FXLEEAYAAAa6GDwVnh5FLH7TCL18DTVoHZFet9zAppT24hXh3iFb3Cgz0QgHwVPZTE6sX%2BRpV80N3g0LKdA9Dd4wc7lOO6SWK6wGWBTq366%2FJinETGlbnipp8lHp5iK3s8zgN9OEl%2Bb2ysHcBf2IROiVR1GNCwtKB4wi77BdeK3GV9SYutexZk2CdtfwmvQJQGN7G4D23Ppid&X-Amz-Signature=0a0758929053f10aadfb4fa43977a9e44b38d7117105a138fad2be7c4bca23ae&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
