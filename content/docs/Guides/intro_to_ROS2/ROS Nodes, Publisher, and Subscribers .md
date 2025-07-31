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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC2W6EM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1eD0ToSM%2B0M4Be4Xa4d%2Bk%2FBoIibn5w391GesQVLOU3QIgN4mm%2FbIZbXGZQmZ7NH2KV7cLqK81im77GFetJ79mtjwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiSu5XCpkhLAANjeCrcA2H0Mneui7%2B39xxGV%2BPctpyUuAOtGqqs40nZp7rDBWDs7cqM4onRAno9ShQQfVn5IwOVOuExbECuw2iY6UUD4u3r6wFqDXL3Fw3AbSg3uKaI3jUqeT0GIJ53k%2BDkwK3mlBtMwJn%2FhJSTc4SrZMN7DcH95AS0NWGTPod%2Fn46kOquV%2F9leIhzvK11cQkOnH%2FsGyV9%2FmiKMpb9ebU02dg2IMeC6vnlkjsD3sGII%2FmJ2tzOlvh9XAimPs%2BkmNcUfHjl8ccFPcqe8hMTxLSlPvOd9%2F2Bi4aCeb3jpI2XjsgFy92zrzC6BF1vHiFsDbNGKPVQu7VG4ZUNa7lHv59uZtHUB2k3xIA%2FEUK430Xkmqd00P0cLxgBW9N1lRvke78sMsVgpvpNHA%2FEzrWp0T0x%2BWUPFs2PM8ksOehnv0TjV%2BWslmg1m%2FjZy0GXUCwo5coE6sC8rNdwhxJyEAe5%2FvMNe%2BCnWb9Lgk8TmCLvGNS4Cmsmg4XipZNBb9ipSsVA5qJ%2BeholECS0RXGYDdGp4lAqnf7BrVx1nzLCtkvsKPuaZ1Tf9f%2F%2BXibSRKk41YDVE72u2gKElfOnSQ2bCnYco72FJGiSB5fdjHiUv%2FMKSLMCTI6nvhMyDsy5DfAVOfz2qweW8MJemr8QGOqUB%2BDRvvIY32VM89Q65yiyNYFHK94kBRAQ84PG%2BDOhK6jF5Alx4BNbWbcwxUwrFaKbMxBidt%2BB%2B3%2FrcttvI85wEa40chZjozwx9fBN3RHktpLzHvDmO2fLXp8w3G%2F5N0QY8Wj4UFy1gIr4L3Pxl3GLBcfgYFAl1thPyaV0V0mrFtuIJCG0F6BUWPTDvzfW1f9LTFYHIgd9MU%2F2nz9hXDkU7cB5dh%2BlM&X-Amz-Signature=3a3034cb3791d80e7fb5ff9b04347927192b3190532672e69760110cbe6406eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC2W6EM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1eD0ToSM%2B0M4Be4Xa4d%2Bk%2FBoIibn5w391GesQVLOU3QIgN4mm%2FbIZbXGZQmZ7NH2KV7cLqK81im77GFetJ79mtjwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiSu5XCpkhLAANjeCrcA2H0Mneui7%2B39xxGV%2BPctpyUuAOtGqqs40nZp7rDBWDs7cqM4onRAno9ShQQfVn5IwOVOuExbECuw2iY6UUD4u3r6wFqDXL3Fw3AbSg3uKaI3jUqeT0GIJ53k%2BDkwK3mlBtMwJn%2FhJSTc4SrZMN7DcH95AS0NWGTPod%2Fn46kOquV%2F9leIhzvK11cQkOnH%2FsGyV9%2FmiKMpb9ebU02dg2IMeC6vnlkjsD3sGII%2FmJ2tzOlvh9XAimPs%2BkmNcUfHjl8ccFPcqe8hMTxLSlPvOd9%2F2Bi4aCeb3jpI2XjsgFy92zrzC6BF1vHiFsDbNGKPVQu7VG4ZUNa7lHv59uZtHUB2k3xIA%2FEUK430Xkmqd00P0cLxgBW9N1lRvke78sMsVgpvpNHA%2FEzrWp0T0x%2BWUPFs2PM8ksOehnv0TjV%2BWslmg1m%2FjZy0GXUCwo5coE6sC8rNdwhxJyEAe5%2FvMNe%2BCnWb9Lgk8TmCLvGNS4Cmsmg4XipZNBb9ipSsVA5qJ%2BeholECS0RXGYDdGp4lAqnf7BrVx1nzLCtkvsKPuaZ1Tf9f%2F%2BXibSRKk41YDVE72u2gKElfOnSQ2bCnYco72FJGiSB5fdjHiUv%2FMKSLMCTI6nvhMyDsy5DfAVOfz2qweW8MJemr8QGOqUB%2BDRvvIY32VM89Q65yiyNYFHK94kBRAQ84PG%2BDOhK6jF5Alx4BNbWbcwxUwrFaKbMxBidt%2BB%2B3%2FrcttvI85wEa40chZjozwx9fBN3RHktpLzHvDmO2fLXp8w3G%2F5N0QY8Wj4UFy1gIr4L3Pxl3GLBcfgYFAl1thPyaV0V0mrFtuIJCG0F6BUWPTDvzfW1f9LTFYHIgd9MU%2F2nz9hXDkU7cB5dh%2BlM&X-Amz-Signature=7bfb894143f1bb72a793aec3e34d3658367325b0cd1075b7299c0620c6c1e476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC2W6EM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1eD0ToSM%2B0M4Be4Xa4d%2Bk%2FBoIibn5w391GesQVLOU3QIgN4mm%2FbIZbXGZQmZ7NH2KV7cLqK81im77GFetJ79mtjwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiSu5XCpkhLAANjeCrcA2H0Mneui7%2B39xxGV%2BPctpyUuAOtGqqs40nZp7rDBWDs7cqM4onRAno9ShQQfVn5IwOVOuExbECuw2iY6UUD4u3r6wFqDXL3Fw3AbSg3uKaI3jUqeT0GIJ53k%2BDkwK3mlBtMwJn%2FhJSTc4SrZMN7DcH95AS0NWGTPod%2Fn46kOquV%2F9leIhzvK11cQkOnH%2FsGyV9%2FmiKMpb9ebU02dg2IMeC6vnlkjsD3sGII%2FmJ2tzOlvh9XAimPs%2BkmNcUfHjl8ccFPcqe8hMTxLSlPvOd9%2F2Bi4aCeb3jpI2XjsgFy92zrzC6BF1vHiFsDbNGKPVQu7VG4ZUNa7lHv59uZtHUB2k3xIA%2FEUK430Xkmqd00P0cLxgBW9N1lRvke78sMsVgpvpNHA%2FEzrWp0T0x%2BWUPFs2PM8ksOehnv0TjV%2BWslmg1m%2FjZy0GXUCwo5coE6sC8rNdwhxJyEAe5%2FvMNe%2BCnWb9Lgk8TmCLvGNS4Cmsmg4XipZNBb9ipSsVA5qJ%2BeholECS0RXGYDdGp4lAqnf7BrVx1nzLCtkvsKPuaZ1Tf9f%2F%2BXibSRKk41YDVE72u2gKElfOnSQ2bCnYco72FJGiSB5fdjHiUv%2FMKSLMCTI6nvhMyDsy5DfAVOfz2qweW8MJemr8QGOqUB%2BDRvvIY32VM89Q65yiyNYFHK94kBRAQ84PG%2BDOhK6jF5Alx4BNbWbcwxUwrFaKbMxBidt%2BB%2B3%2FrcttvI85wEa40chZjozwx9fBN3RHktpLzHvDmO2fLXp8w3G%2F5N0QY8Wj4UFy1gIr4L3Pxl3GLBcfgYFAl1thPyaV0V0mrFtuIJCG0F6BUWPTDvzfW1f9LTFYHIgd9MU%2F2nz9hXDkU7cB5dh%2BlM&X-Amz-Signature=dea41369457f9409f46a86040c832ab54b8977387b011bb83578da5974bcec8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC2W6EM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1eD0ToSM%2B0M4Be4Xa4d%2Bk%2FBoIibn5w391GesQVLOU3QIgN4mm%2FbIZbXGZQmZ7NH2KV7cLqK81im77GFetJ79mtjwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiSu5XCpkhLAANjeCrcA2H0Mneui7%2B39xxGV%2BPctpyUuAOtGqqs40nZp7rDBWDs7cqM4onRAno9ShQQfVn5IwOVOuExbECuw2iY6UUD4u3r6wFqDXL3Fw3AbSg3uKaI3jUqeT0GIJ53k%2BDkwK3mlBtMwJn%2FhJSTc4SrZMN7DcH95AS0NWGTPod%2Fn46kOquV%2F9leIhzvK11cQkOnH%2FsGyV9%2FmiKMpb9ebU02dg2IMeC6vnlkjsD3sGII%2FmJ2tzOlvh9XAimPs%2BkmNcUfHjl8ccFPcqe8hMTxLSlPvOd9%2F2Bi4aCeb3jpI2XjsgFy92zrzC6BF1vHiFsDbNGKPVQu7VG4ZUNa7lHv59uZtHUB2k3xIA%2FEUK430Xkmqd00P0cLxgBW9N1lRvke78sMsVgpvpNHA%2FEzrWp0T0x%2BWUPFs2PM8ksOehnv0TjV%2BWslmg1m%2FjZy0GXUCwo5coE6sC8rNdwhxJyEAe5%2FvMNe%2BCnWb9Lgk8TmCLvGNS4Cmsmg4XipZNBb9ipSsVA5qJ%2BeholECS0RXGYDdGp4lAqnf7BrVx1nzLCtkvsKPuaZ1Tf9f%2F%2BXibSRKk41YDVE72u2gKElfOnSQ2bCnYco72FJGiSB5fdjHiUv%2FMKSLMCTI6nvhMyDsy5DfAVOfz2qweW8MJemr8QGOqUB%2BDRvvIY32VM89Q65yiyNYFHK94kBRAQ84PG%2BDOhK6jF5Alx4BNbWbcwxUwrFaKbMxBidt%2BB%2B3%2FrcttvI85wEa40chZjozwx9fBN3RHktpLzHvDmO2fLXp8w3G%2F5N0QY8Wj4UFy1gIr4L3Pxl3GLBcfgYFAl1thPyaV0V0mrFtuIJCG0F6BUWPTDvzfW1f9LTFYHIgd9MU%2F2nz9hXDkU7cB5dh%2BlM&X-Amz-Signature=84e778710b66c9461079bc8ef47c9ab2eb62c32b9d7beaaed5bf43d7b5f6ef25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC2W6EM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1eD0ToSM%2B0M4Be4Xa4d%2Bk%2FBoIibn5w391GesQVLOU3QIgN4mm%2FbIZbXGZQmZ7NH2KV7cLqK81im77GFetJ79mtjwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiSu5XCpkhLAANjeCrcA2H0Mneui7%2B39xxGV%2BPctpyUuAOtGqqs40nZp7rDBWDs7cqM4onRAno9ShQQfVn5IwOVOuExbECuw2iY6UUD4u3r6wFqDXL3Fw3AbSg3uKaI3jUqeT0GIJ53k%2BDkwK3mlBtMwJn%2FhJSTc4SrZMN7DcH95AS0NWGTPod%2Fn46kOquV%2F9leIhzvK11cQkOnH%2FsGyV9%2FmiKMpb9ebU02dg2IMeC6vnlkjsD3sGII%2FmJ2tzOlvh9XAimPs%2BkmNcUfHjl8ccFPcqe8hMTxLSlPvOd9%2F2Bi4aCeb3jpI2XjsgFy92zrzC6BF1vHiFsDbNGKPVQu7VG4ZUNa7lHv59uZtHUB2k3xIA%2FEUK430Xkmqd00P0cLxgBW9N1lRvke78sMsVgpvpNHA%2FEzrWp0T0x%2BWUPFs2PM8ksOehnv0TjV%2BWslmg1m%2FjZy0GXUCwo5coE6sC8rNdwhxJyEAe5%2FvMNe%2BCnWb9Lgk8TmCLvGNS4Cmsmg4XipZNBb9ipSsVA5qJ%2BeholECS0RXGYDdGp4lAqnf7BrVx1nzLCtkvsKPuaZ1Tf9f%2F%2BXibSRKk41YDVE72u2gKElfOnSQ2bCnYco72FJGiSB5fdjHiUv%2FMKSLMCTI6nvhMyDsy5DfAVOfz2qweW8MJemr8QGOqUB%2BDRvvIY32VM89Q65yiyNYFHK94kBRAQ84PG%2BDOhK6jF5Alx4BNbWbcwxUwrFaKbMxBidt%2BB%2B3%2FrcttvI85wEa40chZjozwx9fBN3RHktpLzHvDmO2fLXp8w3G%2F5N0QY8Wj4UFy1gIr4L3Pxl3GLBcfgYFAl1thPyaV0V0mrFtuIJCG0F6BUWPTDvzfW1f9LTFYHIgd9MU%2F2nz9hXDkU7cB5dh%2BlM&X-Amz-Signature=a202e0b5ea06566e0d5b51521bab67f60ccf4e0737e01ba20685b5bd2ae1f802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC2W6EM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1eD0ToSM%2B0M4Be4Xa4d%2Bk%2FBoIibn5w391GesQVLOU3QIgN4mm%2FbIZbXGZQmZ7NH2KV7cLqK81im77GFetJ79mtjwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiSu5XCpkhLAANjeCrcA2H0Mneui7%2B39xxGV%2BPctpyUuAOtGqqs40nZp7rDBWDs7cqM4onRAno9ShQQfVn5IwOVOuExbECuw2iY6UUD4u3r6wFqDXL3Fw3AbSg3uKaI3jUqeT0GIJ53k%2BDkwK3mlBtMwJn%2FhJSTc4SrZMN7DcH95AS0NWGTPod%2Fn46kOquV%2F9leIhzvK11cQkOnH%2FsGyV9%2FmiKMpb9ebU02dg2IMeC6vnlkjsD3sGII%2FmJ2tzOlvh9XAimPs%2BkmNcUfHjl8ccFPcqe8hMTxLSlPvOd9%2F2Bi4aCeb3jpI2XjsgFy92zrzC6BF1vHiFsDbNGKPVQu7VG4ZUNa7lHv59uZtHUB2k3xIA%2FEUK430Xkmqd00P0cLxgBW9N1lRvke78sMsVgpvpNHA%2FEzrWp0T0x%2BWUPFs2PM8ksOehnv0TjV%2BWslmg1m%2FjZy0GXUCwo5coE6sC8rNdwhxJyEAe5%2FvMNe%2BCnWb9Lgk8TmCLvGNS4Cmsmg4XipZNBb9ipSsVA5qJ%2BeholECS0RXGYDdGp4lAqnf7BrVx1nzLCtkvsKPuaZ1Tf9f%2F%2BXibSRKk41YDVE72u2gKElfOnSQ2bCnYco72FJGiSB5fdjHiUv%2FMKSLMCTI6nvhMyDsy5DfAVOfz2qweW8MJemr8QGOqUB%2BDRvvIY32VM89Q65yiyNYFHK94kBRAQ84PG%2BDOhK6jF5Alx4BNbWbcwxUwrFaKbMxBidt%2BB%2B3%2FrcttvI85wEa40chZjozwx9fBN3RHktpLzHvDmO2fLXp8w3G%2F5N0QY8Wj4UFy1gIr4L3Pxl3GLBcfgYFAl1thPyaV0V0mrFtuIJCG0F6BUWPTDvzfW1f9LTFYHIgd9MU%2F2nz9hXDkU7cB5dh%2BlM&X-Amz-Signature=b8e5322d5d0c1583b8b87c199ee3fc3f6816b90c99e84f015132c72408e15d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC2W6EM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1eD0ToSM%2B0M4Be4Xa4d%2Bk%2FBoIibn5w391GesQVLOU3QIgN4mm%2FbIZbXGZQmZ7NH2KV7cLqK81im77GFetJ79mtjwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiSu5XCpkhLAANjeCrcA2H0Mneui7%2B39xxGV%2BPctpyUuAOtGqqs40nZp7rDBWDs7cqM4onRAno9ShQQfVn5IwOVOuExbECuw2iY6UUD4u3r6wFqDXL3Fw3AbSg3uKaI3jUqeT0GIJ53k%2BDkwK3mlBtMwJn%2FhJSTc4SrZMN7DcH95AS0NWGTPod%2Fn46kOquV%2F9leIhzvK11cQkOnH%2FsGyV9%2FmiKMpb9ebU02dg2IMeC6vnlkjsD3sGII%2FmJ2tzOlvh9XAimPs%2BkmNcUfHjl8ccFPcqe8hMTxLSlPvOd9%2F2Bi4aCeb3jpI2XjsgFy92zrzC6BF1vHiFsDbNGKPVQu7VG4ZUNa7lHv59uZtHUB2k3xIA%2FEUK430Xkmqd00P0cLxgBW9N1lRvke78sMsVgpvpNHA%2FEzrWp0T0x%2BWUPFs2PM8ksOehnv0TjV%2BWslmg1m%2FjZy0GXUCwo5coE6sC8rNdwhxJyEAe5%2FvMNe%2BCnWb9Lgk8TmCLvGNS4Cmsmg4XipZNBb9ipSsVA5qJ%2BeholECS0RXGYDdGp4lAqnf7BrVx1nzLCtkvsKPuaZ1Tf9f%2F%2BXibSRKk41YDVE72u2gKElfOnSQ2bCnYco72FJGiSB5fdjHiUv%2FMKSLMCTI6nvhMyDsy5DfAVOfz2qweW8MJemr8QGOqUB%2BDRvvIY32VM89Q65yiyNYFHK94kBRAQ84PG%2BDOhK6jF5Alx4BNbWbcwxUwrFaKbMxBidt%2BB%2B3%2FrcttvI85wEa40chZjozwx9fBN3RHktpLzHvDmO2fLXp8w3G%2F5N0QY8Wj4UFy1gIr4L3Pxl3GLBcfgYFAl1thPyaV0V0mrFtuIJCG0F6BUWPTDvzfW1f9LTFYHIgd9MU%2F2nz9hXDkU7cB5dh%2BlM&X-Amz-Signature=e67b41ae20d03db9c8b0f4e34ec97cdb94d84fc0270137807e392eb1667973a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VC2W6EM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1eD0ToSM%2B0M4Be4Xa4d%2Bk%2FBoIibn5w391GesQVLOU3QIgN4mm%2FbIZbXGZQmZ7NH2KV7cLqK81im77GFetJ79mtjwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiSu5XCpkhLAANjeCrcA2H0Mneui7%2B39xxGV%2BPctpyUuAOtGqqs40nZp7rDBWDs7cqM4onRAno9ShQQfVn5IwOVOuExbECuw2iY6UUD4u3r6wFqDXL3Fw3AbSg3uKaI3jUqeT0GIJ53k%2BDkwK3mlBtMwJn%2FhJSTc4SrZMN7DcH95AS0NWGTPod%2Fn46kOquV%2F9leIhzvK11cQkOnH%2FsGyV9%2FmiKMpb9ebU02dg2IMeC6vnlkjsD3sGII%2FmJ2tzOlvh9XAimPs%2BkmNcUfHjl8ccFPcqe8hMTxLSlPvOd9%2F2Bi4aCeb3jpI2XjsgFy92zrzC6BF1vHiFsDbNGKPVQu7VG4ZUNa7lHv59uZtHUB2k3xIA%2FEUK430Xkmqd00P0cLxgBW9N1lRvke78sMsVgpvpNHA%2FEzrWp0T0x%2BWUPFs2PM8ksOehnv0TjV%2BWslmg1m%2FjZy0GXUCwo5coE6sC8rNdwhxJyEAe5%2FvMNe%2BCnWb9Lgk8TmCLvGNS4Cmsmg4XipZNBb9ipSsVA5qJ%2BeholECS0RXGYDdGp4lAqnf7BrVx1nzLCtkvsKPuaZ1Tf9f%2F%2BXibSRKk41YDVE72u2gKElfOnSQ2bCnYco72FJGiSB5fdjHiUv%2FMKSLMCTI6nvhMyDsy5DfAVOfz2qweW8MJemr8QGOqUB%2BDRvvIY32VM89Q65yiyNYFHK94kBRAQ84PG%2BDOhK6jF5Alx4BNbWbcwxUwrFaKbMxBidt%2BB%2B3%2FrcttvI85wEa40chZjozwx9fBN3RHktpLzHvDmO2fLXp8w3G%2F5N0QY8Wj4UFy1gIr4L3Pxl3GLBcfgYFAl1thPyaV0V0mrFtuIJCG0F6BUWPTDvzfW1f9LTFYHIgd9MU%2F2nz9hXDkU7cB5dh%2BlM&X-Amz-Signature=d1b3118467c441295a5c13d02fcd3ceca4e9fc930321e319e922ebf5b6e1994c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
