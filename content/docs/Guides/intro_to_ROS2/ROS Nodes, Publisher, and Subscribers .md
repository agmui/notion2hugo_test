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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHW5NEIF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Va4L0QARt01bTYRy8BG0P2DsrASBhhjKTRI%2Fj9ze1QIgSb4Pm5yK8vdZYDeCXUTmqgbj1YqehZaJ8lPYn3YVaKQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETdjAEyCTNJ%2BPGvpCrcAxFG9K1pXC2JZC7yckyudEdlUgqSNOEELHm3rUTB79V5DDbopAEFIeT80tfpOFdlRMjxkudfBuWp8f9eEqaIzf4E8hOe7OvRdmjUdNJgqdR%2BD9ct5oS530Ma1X9nKZOQhV5US0NJGpH%2FXr9yNpH%2Bgvc7ToVZIQKt%2FWOiTqcljzi6kZyJazcXbz6V1es3SrZ0pVwWq1SyEgaGTTOvYyeA2WQiK%2B3k52rV2PCxzI1CnTGvkvMgzGMZ6a8amhofhB%2FYFCpGKID6Mo6vWmuSFfM32Ejk1W93vyv4I1ZAAU2eM64ruLEkkdIrTW3Bz0d7xoz2Ik13K8Jw8ZVS8HvVzjxvebci07w6IHu12svZmucmetDFy0PvhngFQTLipZbkMt8h9ASL%2Bm%2BIaWWeOdTLkT28gs71pIz%2BUIEI32MdsB%2FCmpAZr3u2CFjqjiNC4f%2B38pHedRbi4nU9x%2BYOyvRGdv6HeADYKm%2BHWOGDJKUyCT7lAcgb7zKPtp0bBon2G1L9YrMOUDK2hthAMJE8XQMnFEEhMDOFREi%2FgpLKo%2F2F5MdkbJY6LDrmoCYbEBQOsIdhdVWVvhkWtV1SIB6ic7aNiPu68SfW%2BLfWmk3wNYE%2B2Ha1Vv%2Bv9D2JR3Z%2Fup5RObv7MLzaksMGOqUBal4oHa4fbJpQAnns8HXa7CZIV0CzkvD9hybgW%2Bf65lflXAmoB5w59ZWvunhxI37JOwvaeeDO3NS%2FIbkpossQNr0N6NWOeLI4Zk0pEVUyYkFFWEwLRgRXQgkO6R3tpzvxlcu0NneZ42bvI3Wkf6q7tnzNhIBBOvyI0JGu%2BjteJ9bS3aLts2gyiuxzPJ5Wjo6290h1jC8tcyIB76x5XTDw9QffL3Ci&X-Amz-Signature=53dd835d6570df985bf409ec015540b82d16bcad22d9a0a6c3e26ca5b7f0f7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHW5NEIF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Va4L0QARt01bTYRy8BG0P2DsrASBhhjKTRI%2Fj9ze1QIgSb4Pm5yK8vdZYDeCXUTmqgbj1YqehZaJ8lPYn3YVaKQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETdjAEyCTNJ%2BPGvpCrcAxFG9K1pXC2JZC7yckyudEdlUgqSNOEELHm3rUTB79V5DDbopAEFIeT80tfpOFdlRMjxkudfBuWp8f9eEqaIzf4E8hOe7OvRdmjUdNJgqdR%2BD9ct5oS530Ma1X9nKZOQhV5US0NJGpH%2FXr9yNpH%2Bgvc7ToVZIQKt%2FWOiTqcljzi6kZyJazcXbz6V1es3SrZ0pVwWq1SyEgaGTTOvYyeA2WQiK%2B3k52rV2PCxzI1CnTGvkvMgzGMZ6a8amhofhB%2FYFCpGKID6Mo6vWmuSFfM32Ejk1W93vyv4I1ZAAU2eM64ruLEkkdIrTW3Bz0d7xoz2Ik13K8Jw8ZVS8HvVzjxvebci07w6IHu12svZmucmetDFy0PvhngFQTLipZbkMt8h9ASL%2Bm%2BIaWWeOdTLkT28gs71pIz%2BUIEI32MdsB%2FCmpAZr3u2CFjqjiNC4f%2B38pHedRbi4nU9x%2BYOyvRGdv6HeADYKm%2BHWOGDJKUyCT7lAcgb7zKPtp0bBon2G1L9YrMOUDK2hthAMJE8XQMnFEEhMDOFREi%2FgpLKo%2F2F5MdkbJY6LDrmoCYbEBQOsIdhdVWVvhkWtV1SIB6ic7aNiPu68SfW%2BLfWmk3wNYE%2B2Ha1Vv%2Bv9D2JR3Z%2Fup5RObv7MLzaksMGOqUBal4oHa4fbJpQAnns8HXa7CZIV0CzkvD9hybgW%2Bf65lflXAmoB5w59ZWvunhxI37JOwvaeeDO3NS%2FIbkpossQNr0N6NWOeLI4Zk0pEVUyYkFFWEwLRgRXQgkO6R3tpzvxlcu0NneZ42bvI3Wkf6q7tnzNhIBBOvyI0JGu%2BjteJ9bS3aLts2gyiuxzPJ5Wjo6290h1jC8tcyIB76x5XTDw9QffL3Ci&X-Amz-Signature=e75acfe29ca80eba35159807a625932112b7500175feb023a7604104f868fe09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHW5NEIF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Va4L0QARt01bTYRy8BG0P2DsrASBhhjKTRI%2Fj9ze1QIgSb4Pm5yK8vdZYDeCXUTmqgbj1YqehZaJ8lPYn3YVaKQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETdjAEyCTNJ%2BPGvpCrcAxFG9K1pXC2JZC7yckyudEdlUgqSNOEELHm3rUTB79V5DDbopAEFIeT80tfpOFdlRMjxkudfBuWp8f9eEqaIzf4E8hOe7OvRdmjUdNJgqdR%2BD9ct5oS530Ma1X9nKZOQhV5US0NJGpH%2FXr9yNpH%2Bgvc7ToVZIQKt%2FWOiTqcljzi6kZyJazcXbz6V1es3SrZ0pVwWq1SyEgaGTTOvYyeA2WQiK%2B3k52rV2PCxzI1CnTGvkvMgzGMZ6a8amhofhB%2FYFCpGKID6Mo6vWmuSFfM32Ejk1W93vyv4I1ZAAU2eM64ruLEkkdIrTW3Bz0d7xoz2Ik13K8Jw8ZVS8HvVzjxvebci07w6IHu12svZmucmetDFy0PvhngFQTLipZbkMt8h9ASL%2Bm%2BIaWWeOdTLkT28gs71pIz%2BUIEI32MdsB%2FCmpAZr3u2CFjqjiNC4f%2B38pHedRbi4nU9x%2BYOyvRGdv6HeADYKm%2BHWOGDJKUyCT7lAcgb7zKPtp0bBon2G1L9YrMOUDK2hthAMJE8XQMnFEEhMDOFREi%2FgpLKo%2F2F5MdkbJY6LDrmoCYbEBQOsIdhdVWVvhkWtV1SIB6ic7aNiPu68SfW%2BLfWmk3wNYE%2B2Ha1Vv%2Bv9D2JR3Z%2Fup5RObv7MLzaksMGOqUBal4oHa4fbJpQAnns8HXa7CZIV0CzkvD9hybgW%2Bf65lflXAmoB5w59ZWvunhxI37JOwvaeeDO3NS%2FIbkpossQNr0N6NWOeLI4Zk0pEVUyYkFFWEwLRgRXQgkO6R3tpzvxlcu0NneZ42bvI3Wkf6q7tnzNhIBBOvyI0JGu%2BjteJ9bS3aLts2gyiuxzPJ5Wjo6290h1jC8tcyIB76x5XTDw9QffL3Ci&X-Amz-Signature=78a87fb48d8e40f43216bdbe5f923bff0c5b4db9b7f547a7aeaab7c3d8ad203c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHW5NEIF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Va4L0QARt01bTYRy8BG0P2DsrASBhhjKTRI%2Fj9ze1QIgSb4Pm5yK8vdZYDeCXUTmqgbj1YqehZaJ8lPYn3YVaKQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETdjAEyCTNJ%2BPGvpCrcAxFG9K1pXC2JZC7yckyudEdlUgqSNOEELHm3rUTB79V5DDbopAEFIeT80tfpOFdlRMjxkudfBuWp8f9eEqaIzf4E8hOe7OvRdmjUdNJgqdR%2BD9ct5oS530Ma1X9nKZOQhV5US0NJGpH%2FXr9yNpH%2Bgvc7ToVZIQKt%2FWOiTqcljzi6kZyJazcXbz6V1es3SrZ0pVwWq1SyEgaGTTOvYyeA2WQiK%2B3k52rV2PCxzI1CnTGvkvMgzGMZ6a8amhofhB%2FYFCpGKID6Mo6vWmuSFfM32Ejk1W93vyv4I1ZAAU2eM64ruLEkkdIrTW3Bz0d7xoz2Ik13K8Jw8ZVS8HvVzjxvebci07w6IHu12svZmucmetDFy0PvhngFQTLipZbkMt8h9ASL%2Bm%2BIaWWeOdTLkT28gs71pIz%2BUIEI32MdsB%2FCmpAZr3u2CFjqjiNC4f%2B38pHedRbi4nU9x%2BYOyvRGdv6HeADYKm%2BHWOGDJKUyCT7lAcgb7zKPtp0bBon2G1L9YrMOUDK2hthAMJE8XQMnFEEhMDOFREi%2FgpLKo%2F2F5MdkbJY6LDrmoCYbEBQOsIdhdVWVvhkWtV1SIB6ic7aNiPu68SfW%2BLfWmk3wNYE%2B2Ha1Vv%2Bv9D2JR3Z%2Fup5RObv7MLzaksMGOqUBal4oHa4fbJpQAnns8HXa7CZIV0CzkvD9hybgW%2Bf65lflXAmoB5w59ZWvunhxI37JOwvaeeDO3NS%2FIbkpossQNr0N6NWOeLI4Zk0pEVUyYkFFWEwLRgRXQgkO6R3tpzvxlcu0NneZ42bvI3Wkf6q7tnzNhIBBOvyI0JGu%2BjteJ9bS3aLts2gyiuxzPJ5Wjo6290h1jC8tcyIB76x5XTDw9QffL3Ci&X-Amz-Signature=2d303eca0abfe7e330ee8905a87bb89681cf3095c6b9cc4a4b3c76a8c78cb545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHW5NEIF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Va4L0QARt01bTYRy8BG0P2DsrASBhhjKTRI%2Fj9ze1QIgSb4Pm5yK8vdZYDeCXUTmqgbj1YqehZaJ8lPYn3YVaKQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETdjAEyCTNJ%2BPGvpCrcAxFG9K1pXC2JZC7yckyudEdlUgqSNOEELHm3rUTB79V5DDbopAEFIeT80tfpOFdlRMjxkudfBuWp8f9eEqaIzf4E8hOe7OvRdmjUdNJgqdR%2BD9ct5oS530Ma1X9nKZOQhV5US0NJGpH%2FXr9yNpH%2Bgvc7ToVZIQKt%2FWOiTqcljzi6kZyJazcXbz6V1es3SrZ0pVwWq1SyEgaGTTOvYyeA2WQiK%2B3k52rV2PCxzI1CnTGvkvMgzGMZ6a8amhofhB%2FYFCpGKID6Mo6vWmuSFfM32Ejk1W93vyv4I1ZAAU2eM64ruLEkkdIrTW3Bz0d7xoz2Ik13K8Jw8ZVS8HvVzjxvebci07w6IHu12svZmucmetDFy0PvhngFQTLipZbkMt8h9ASL%2Bm%2BIaWWeOdTLkT28gs71pIz%2BUIEI32MdsB%2FCmpAZr3u2CFjqjiNC4f%2B38pHedRbi4nU9x%2BYOyvRGdv6HeADYKm%2BHWOGDJKUyCT7lAcgb7zKPtp0bBon2G1L9YrMOUDK2hthAMJE8XQMnFEEhMDOFREi%2FgpLKo%2F2F5MdkbJY6LDrmoCYbEBQOsIdhdVWVvhkWtV1SIB6ic7aNiPu68SfW%2BLfWmk3wNYE%2B2Ha1Vv%2Bv9D2JR3Z%2Fup5RObv7MLzaksMGOqUBal4oHa4fbJpQAnns8HXa7CZIV0CzkvD9hybgW%2Bf65lflXAmoB5w59ZWvunhxI37JOwvaeeDO3NS%2FIbkpossQNr0N6NWOeLI4Zk0pEVUyYkFFWEwLRgRXQgkO6R3tpzvxlcu0NneZ42bvI3Wkf6q7tnzNhIBBOvyI0JGu%2BjteJ9bS3aLts2gyiuxzPJ5Wjo6290h1jC8tcyIB76x5XTDw9QffL3Ci&X-Amz-Signature=6d4be9b62d3368fe712f6d4713a996486f7526b00b46fc3bbfea5ebe56dd6979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHW5NEIF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Va4L0QARt01bTYRy8BG0P2DsrASBhhjKTRI%2Fj9ze1QIgSb4Pm5yK8vdZYDeCXUTmqgbj1YqehZaJ8lPYn3YVaKQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETdjAEyCTNJ%2BPGvpCrcAxFG9K1pXC2JZC7yckyudEdlUgqSNOEELHm3rUTB79V5DDbopAEFIeT80tfpOFdlRMjxkudfBuWp8f9eEqaIzf4E8hOe7OvRdmjUdNJgqdR%2BD9ct5oS530Ma1X9nKZOQhV5US0NJGpH%2FXr9yNpH%2Bgvc7ToVZIQKt%2FWOiTqcljzi6kZyJazcXbz6V1es3SrZ0pVwWq1SyEgaGTTOvYyeA2WQiK%2B3k52rV2PCxzI1CnTGvkvMgzGMZ6a8amhofhB%2FYFCpGKID6Mo6vWmuSFfM32Ejk1W93vyv4I1ZAAU2eM64ruLEkkdIrTW3Bz0d7xoz2Ik13K8Jw8ZVS8HvVzjxvebci07w6IHu12svZmucmetDFy0PvhngFQTLipZbkMt8h9ASL%2Bm%2BIaWWeOdTLkT28gs71pIz%2BUIEI32MdsB%2FCmpAZr3u2CFjqjiNC4f%2B38pHedRbi4nU9x%2BYOyvRGdv6HeADYKm%2BHWOGDJKUyCT7lAcgb7zKPtp0bBon2G1L9YrMOUDK2hthAMJE8XQMnFEEhMDOFREi%2FgpLKo%2F2F5MdkbJY6LDrmoCYbEBQOsIdhdVWVvhkWtV1SIB6ic7aNiPu68SfW%2BLfWmk3wNYE%2B2Ha1Vv%2Bv9D2JR3Z%2Fup5RObv7MLzaksMGOqUBal4oHa4fbJpQAnns8HXa7CZIV0CzkvD9hybgW%2Bf65lflXAmoB5w59ZWvunhxI37JOwvaeeDO3NS%2FIbkpossQNr0N6NWOeLI4Zk0pEVUyYkFFWEwLRgRXQgkO6R3tpzvxlcu0NneZ42bvI3Wkf6q7tnzNhIBBOvyI0JGu%2BjteJ9bS3aLts2gyiuxzPJ5Wjo6290h1jC8tcyIB76x5XTDw9QffL3Ci&X-Amz-Signature=4d000ce87036be48b7c8d52e13f8e38e055e7c96548a72a1fbe0aa046c6009b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHW5NEIF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Va4L0QARt01bTYRy8BG0P2DsrASBhhjKTRI%2Fj9ze1QIgSb4Pm5yK8vdZYDeCXUTmqgbj1YqehZaJ8lPYn3YVaKQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETdjAEyCTNJ%2BPGvpCrcAxFG9K1pXC2JZC7yckyudEdlUgqSNOEELHm3rUTB79V5DDbopAEFIeT80tfpOFdlRMjxkudfBuWp8f9eEqaIzf4E8hOe7OvRdmjUdNJgqdR%2BD9ct5oS530Ma1X9nKZOQhV5US0NJGpH%2FXr9yNpH%2Bgvc7ToVZIQKt%2FWOiTqcljzi6kZyJazcXbz6V1es3SrZ0pVwWq1SyEgaGTTOvYyeA2WQiK%2B3k52rV2PCxzI1CnTGvkvMgzGMZ6a8amhofhB%2FYFCpGKID6Mo6vWmuSFfM32Ejk1W93vyv4I1ZAAU2eM64ruLEkkdIrTW3Bz0d7xoz2Ik13K8Jw8ZVS8HvVzjxvebci07w6IHu12svZmucmetDFy0PvhngFQTLipZbkMt8h9ASL%2Bm%2BIaWWeOdTLkT28gs71pIz%2BUIEI32MdsB%2FCmpAZr3u2CFjqjiNC4f%2B38pHedRbi4nU9x%2BYOyvRGdv6HeADYKm%2BHWOGDJKUyCT7lAcgb7zKPtp0bBon2G1L9YrMOUDK2hthAMJE8XQMnFEEhMDOFREi%2FgpLKo%2F2F5MdkbJY6LDrmoCYbEBQOsIdhdVWVvhkWtV1SIB6ic7aNiPu68SfW%2BLfWmk3wNYE%2B2Ha1Vv%2Bv9D2JR3Z%2Fup5RObv7MLzaksMGOqUBal4oHa4fbJpQAnns8HXa7CZIV0CzkvD9hybgW%2Bf65lflXAmoB5w59ZWvunhxI37JOwvaeeDO3NS%2FIbkpossQNr0N6NWOeLI4Zk0pEVUyYkFFWEwLRgRXQgkO6R3tpzvxlcu0NneZ42bvI3Wkf6q7tnzNhIBBOvyI0JGu%2BjteJ9bS3aLts2gyiuxzPJ5Wjo6290h1jC8tcyIB76x5XTDw9QffL3Ci&X-Amz-Signature=b30d03197e6bf0c734b96472dea2e5b80f1c567f43ece3003a6c780319681691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHW5NEIF%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Va4L0QARt01bTYRy8BG0P2DsrASBhhjKTRI%2Fj9ze1QIgSb4Pm5yK8vdZYDeCXUTmqgbj1YqehZaJ8lPYn3YVaKQqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETdjAEyCTNJ%2BPGvpCrcAxFG9K1pXC2JZC7yckyudEdlUgqSNOEELHm3rUTB79V5DDbopAEFIeT80tfpOFdlRMjxkudfBuWp8f9eEqaIzf4E8hOe7OvRdmjUdNJgqdR%2BD9ct5oS530Ma1X9nKZOQhV5US0NJGpH%2FXr9yNpH%2Bgvc7ToVZIQKt%2FWOiTqcljzi6kZyJazcXbz6V1es3SrZ0pVwWq1SyEgaGTTOvYyeA2WQiK%2B3k52rV2PCxzI1CnTGvkvMgzGMZ6a8amhofhB%2FYFCpGKID6Mo6vWmuSFfM32Ejk1W93vyv4I1ZAAU2eM64ruLEkkdIrTW3Bz0d7xoz2Ik13K8Jw8ZVS8HvVzjxvebci07w6IHu12svZmucmetDFy0PvhngFQTLipZbkMt8h9ASL%2Bm%2BIaWWeOdTLkT28gs71pIz%2BUIEI32MdsB%2FCmpAZr3u2CFjqjiNC4f%2B38pHedRbi4nU9x%2BYOyvRGdv6HeADYKm%2BHWOGDJKUyCT7lAcgb7zKPtp0bBon2G1L9YrMOUDK2hthAMJE8XQMnFEEhMDOFREi%2FgpLKo%2F2F5MdkbJY6LDrmoCYbEBQOsIdhdVWVvhkWtV1SIB6ic7aNiPu68SfW%2BLfWmk3wNYE%2B2Ha1Vv%2Bv9D2JR3Z%2Fup5RObv7MLzaksMGOqUBal4oHa4fbJpQAnns8HXa7CZIV0CzkvD9hybgW%2Bf65lflXAmoB5w59ZWvunhxI37JOwvaeeDO3NS%2FIbkpossQNr0N6NWOeLI4Zk0pEVUyYkFFWEwLRgRXQgkO6R3tpzvxlcu0NneZ42bvI3Wkf6q7tnzNhIBBOvyI0JGu%2BjteJ9bS3aLts2gyiuxzPJ5Wjo6290h1jC8tcyIB76x5XTDw9QffL3Ci&X-Amz-Signature=2fcf1d876e6da77a6b6c0d97fe92154d425718f17bb671e960f2a59cdb1d1f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
