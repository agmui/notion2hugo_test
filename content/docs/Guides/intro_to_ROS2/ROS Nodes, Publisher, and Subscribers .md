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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZHKVMZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTMqsxxpNvaUzcSOfLHzFUyVglyQxiv%2F2CdeURhR2YAIgP9pQyMBfvl7QyZ3R3TM1RibPN3o0csXs%2FwgdQjv4YpMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXftuvYnewpL3CT2ircA%2BHKSxsZGDhM6AqUT%2B3n7gIYXCgEBSgZHXu%2B7S7iE3iAEnyH7Nu7edLiogvX8W%2BEhgioGYN5iZsl0VI7H0HRGtex9PGnbtgqRV7RpJ11MuwpQh4RVl0V8LQ0iFuwR%2FgwCZingiTxlDbwy9Dh6Lya%2BSbrTKxReQcF2%2FxcHCYEkI4yxNC1o2V1mgkRpHmkk4QlF8tOOd7FmggMmnGQ5NDbKsItAsbLoLfUDOBQDhIyqIx17Y7e2ro9dyQu3Ic2ELLWz7xLQxRZOFxeWgsANc2PVSdMrFnF3tZFC6XRkElVJt16Iqo8hRGBFF4r7qB6wyuWi3r%2BY15vmFjBAspc7KjJFAOyeLu5LAWzz2LaEY%2F9ArmuldQ0y22yaftEmx8Bpf5%2BTxJWkk5lS2az3F5IR3sz%2B9yEvgpJb91iaRtZW%2B%2Bf2IsQksBnoGblgLxOoYjlnL4eOUv4SyskndypzlwxPbyIc92soT87mroO0%2BrS652OmkNG0xJVRb4XsXSYMXibT%2BWaQDhL%2Bz4b1QJkU1J1JwFfWgRQcsikV%2BJZyCNkDwRlkgbRutPiiYBlgZuhlDEDZMCA6tI7doarNA7jIicQs7w3jupB3eMtBbwNXD%2B8t61R139ZXyzbPu2rJjPoL%2BQKMNvNwMMGOqUB53ITWX427nkXjz4HYIeeFHDaO958jATEFtyQwnpneHm67qhSKcrCbOxE7%2B%2B3B5MPYoC%2B1a3NJQyK9C2WSKDbPHKFLBscLdLZvqd5RPgKrd1%2B0Q7AWAufe3s1dpGJV7ypepZ4OuaScV0uFw9Trxn8ECkUaN9%2FfRADksCMxXWiPBUhhRPuMRdW5U9s1FbIYyjL7VY7H3nmRUjQFF55pjgZFB3Vh6xV&X-Amz-Signature=12a157c06b7dac63d05ef355c2302a6ea3cbe4bfad0582aeb1c8fa6526279ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZHKVMZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTMqsxxpNvaUzcSOfLHzFUyVglyQxiv%2F2CdeURhR2YAIgP9pQyMBfvl7QyZ3R3TM1RibPN3o0csXs%2FwgdQjv4YpMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXftuvYnewpL3CT2ircA%2BHKSxsZGDhM6AqUT%2B3n7gIYXCgEBSgZHXu%2B7S7iE3iAEnyH7Nu7edLiogvX8W%2BEhgioGYN5iZsl0VI7H0HRGtex9PGnbtgqRV7RpJ11MuwpQh4RVl0V8LQ0iFuwR%2FgwCZingiTxlDbwy9Dh6Lya%2BSbrTKxReQcF2%2FxcHCYEkI4yxNC1o2V1mgkRpHmkk4QlF8tOOd7FmggMmnGQ5NDbKsItAsbLoLfUDOBQDhIyqIx17Y7e2ro9dyQu3Ic2ELLWz7xLQxRZOFxeWgsANc2PVSdMrFnF3tZFC6XRkElVJt16Iqo8hRGBFF4r7qB6wyuWi3r%2BY15vmFjBAspc7KjJFAOyeLu5LAWzz2LaEY%2F9ArmuldQ0y22yaftEmx8Bpf5%2BTxJWkk5lS2az3F5IR3sz%2B9yEvgpJb91iaRtZW%2B%2Bf2IsQksBnoGblgLxOoYjlnL4eOUv4SyskndypzlwxPbyIc92soT87mroO0%2BrS652OmkNG0xJVRb4XsXSYMXibT%2BWaQDhL%2Bz4b1QJkU1J1JwFfWgRQcsikV%2BJZyCNkDwRlkgbRutPiiYBlgZuhlDEDZMCA6tI7doarNA7jIicQs7w3jupB3eMtBbwNXD%2B8t61R139ZXyzbPu2rJjPoL%2BQKMNvNwMMGOqUB53ITWX427nkXjz4HYIeeFHDaO958jATEFtyQwnpneHm67qhSKcrCbOxE7%2B%2B3B5MPYoC%2B1a3NJQyK9C2WSKDbPHKFLBscLdLZvqd5RPgKrd1%2B0Q7AWAufe3s1dpGJV7ypepZ4OuaScV0uFw9Trxn8ECkUaN9%2FfRADksCMxXWiPBUhhRPuMRdW5U9s1FbIYyjL7VY7H3nmRUjQFF55pjgZFB3Vh6xV&X-Amz-Signature=78e4c18b76a935dccf4e8ba79ba272a4dc4f4b7bbe7be67934398e68a5f5020c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZHKVMZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTMqsxxpNvaUzcSOfLHzFUyVglyQxiv%2F2CdeURhR2YAIgP9pQyMBfvl7QyZ3R3TM1RibPN3o0csXs%2FwgdQjv4YpMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXftuvYnewpL3CT2ircA%2BHKSxsZGDhM6AqUT%2B3n7gIYXCgEBSgZHXu%2B7S7iE3iAEnyH7Nu7edLiogvX8W%2BEhgioGYN5iZsl0VI7H0HRGtex9PGnbtgqRV7RpJ11MuwpQh4RVl0V8LQ0iFuwR%2FgwCZingiTxlDbwy9Dh6Lya%2BSbrTKxReQcF2%2FxcHCYEkI4yxNC1o2V1mgkRpHmkk4QlF8tOOd7FmggMmnGQ5NDbKsItAsbLoLfUDOBQDhIyqIx17Y7e2ro9dyQu3Ic2ELLWz7xLQxRZOFxeWgsANc2PVSdMrFnF3tZFC6XRkElVJt16Iqo8hRGBFF4r7qB6wyuWi3r%2BY15vmFjBAspc7KjJFAOyeLu5LAWzz2LaEY%2F9ArmuldQ0y22yaftEmx8Bpf5%2BTxJWkk5lS2az3F5IR3sz%2B9yEvgpJb91iaRtZW%2B%2Bf2IsQksBnoGblgLxOoYjlnL4eOUv4SyskndypzlwxPbyIc92soT87mroO0%2BrS652OmkNG0xJVRb4XsXSYMXibT%2BWaQDhL%2Bz4b1QJkU1J1JwFfWgRQcsikV%2BJZyCNkDwRlkgbRutPiiYBlgZuhlDEDZMCA6tI7doarNA7jIicQs7w3jupB3eMtBbwNXD%2B8t61R139ZXyzbPu2rJjPoL%2BQKMNvNwMMGOqUB53ITWX427nkXjz4HYIeeFHDaO958jATEFtyQwnpneHm67qhSKcrCbOxE7%2B%2B3B5MPYoC%2B1a3NJQyK9C2WSKDbPHKFLBscLdLZvqd5RPgKrd1%2B0Q7AWAufe3s1dpGJV7ypepZ4OuaScV0uFw9Trxn8ECkUaN9%2FfRADksCMxXWiPBUhhRPuMRdW5U9s1FbIYyjL7VY7H3nmRUjQFF55pjgZFB3Vh6xV&X-Amz-Signature=5bd368e947686fbdefe5827fe79955f45eaf97f2772208605981c9640f06f335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZHKVMZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTMqsxxpNvaUzcSOfLHzFUyVglyQxiv%2F2CdeURhR2YAIgP9pQyMBfvl7QyZ3R3TM1RibPN3o0csXs%2FwgdQjv4YpMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXftuvYnewpL3CT2ircA%2BHKSxsZGDhM6AqUT%2B3n7gIYXCgEBSgZHXu%2B7S7iE3iAEnyH7Nu7edLiogvX8W%2BEhgioGYN5iZsl0VI7H0HRGtex9PGnbtgqRV7RpJ11MuwpQh4RVl0V8LQ0iFuwR%2FgwCZingiTxlDbwy9Dh6Lya%2BSbrTKxReQcF2%2FxcHCYEkI4yxNC1o2V1mgkRpHmkk4QlF8tOOd7FmggMmnGQ5NDbKsItAsbLoLfUDOBQDhIyqIx17Y7e2ro9dyQu3Ic2ELLWz7xLQxRZOFxeWgsANc2PVSdMrFnF3tZFC6XRkElVJt16Iqo8hRGBFF4r7qB6wyuWi3r%2BY15vmFjBAspc7KjJFAOyeLu5LAWzz2LaEY%2F9ArmuldQ0y22yaftEmx8Bpf5%2BTxJWkk5lS2az3F5IR3sz%2B9yEvgpJb91iaRtZW%2B%2Bf2IsQksBnoGblgLxOoYjlnL4eOUv4SyskndypzlwxPbyIc92soT87mroO0%2BrS652OmkNG0xJVRb4XsXSYMXibT%2BWaQDhL%2Bz4b1QJkU1J1JwFfWgRQcsikV%2BJZyCNkDwRlkgbRutPiiYBlgZuhlDEDZMCA6tI7doarNA7jIicQs7w3jupB3eMtBbwNXD%2B8t61R139ZXyzbPu2rJjPoL%2BQKMNvNwMMGOqUB53ITWX427nkXjz4HYIeeFHDaO958jATEFtyQwnpneHm67qhSKcrCbOxE7%2B%2B3B5MPYoC%2B1a3NJQyK9C2WSKDbPHKFLBscLdLZvqd5RPgKrd1%2B0Q7AWAufe3s1dpGJV7ypepZ4OuaScV0uFw9Trxn8ECkUaN9%2FfRADksCMxXWiPBUhhRPuMRdW5U9s1FbIYyjL7VY7H3nmRUjQFF55pjgZFB3Vh6xV&X-Amz-Signature=51df2d27f18cb37bda8ff0d1df60f921de22f321f576128dc85bd074836ba26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZHKVMZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTMqsxxpNvaUzcSOfLHzFUyVglyQxiv%2F2CdeURhR2YAIgP9pQyMBfvl7QyZ3R3TM1RibPN3o0csXs%2FwgdQjv4YpMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXftuvYnewpL3CT2ircA%2BHKSxsZGDhM6AqUT%2B3n7gIYXCgEBSgZHXu%2B7S7iE3iAEnyH7Nu7edLiogvX8W%2BEhgioGYN5iZsl0VI7H0HRGtex9PGnbtgqRV7RpJ11MuwpQh4RVl0V8LQ0iFuwR%2FgwCZingiTxlDbwy9Dh6Lya%2BSbrTKxReQcF2%2FxcHCYEkI4yxNC1o2V1mgkRpHmkk4QlF8tOOd7FmggMmnGQ5NDbKsItAsbLoLfUDOBQDhIyqIx17Y7e2ro9dyQu3Ic2ELLWz7xLQxRZOFxeWgsANc2PVSdMrFnF3tZFC6XRkElVJt16Iqo8hRGBFF4r7qB6wyuWi3r%2BY15vmFjBAspc7KjJFAOyeLu5LAWzz2LaEY%2F9ArmuldQ0y22yaftEmx8Bpf5%2BTxJWkk5lS2az3F5IR3sz%2B9yEvgpJb91iaRtZW%2B%2Bf2IsQksBnoGblgLxOoYjlnL4eOUv4SyskndypzlwxPbyIc92soT87mroO0%2BrS652OmkNG0xJVRb4XsXSYMXibT%2BWaQDhL%2Bz4b1QJkU1J1JwFfWgRQcsikV%2BJZyCNkDwRlkgbRutPiiYBlgZuhlDEDZMCA6tI7doarNA7jIicQs7w3jupB3eMtBbwNXD%2B8t61R139ZXyzbPu2rJjPoL%2BQKMNvNwMMGOqUB53ITWX427nkXjz4HYIeeFHDaO958jATEFtyQwnpneHm67qhSKcrCbOxE7%2B%2B3B5MPYoC%2B1a3NJQyK9C2WSKDbPHKFLBscLdLZvqd5RPgKrd1%2B0Q7AWAufe3s1dpGJV7ypepZ4OuaScV0uFw9Trxn8ECkUaN9%2FfRADksCMxXWiPBUhhRPuMRdW5U9s1FbIYyjL7VY7H3nmRUjQFF55pjgZFB3Vh6xV&X-Amz-Signature=3678a5793e27285e4ef6e2b27557da68e0828d92d9d26fcedac360cee4dc379b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZHKVMZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTMqsxxpNvaUzcSOfLHzFUyVglyQxiv%2F2CdeURhR2YAIgP9pQyMBfvl7QyZ3R3TM1RibPN3o0csXs%2FwgdQjv4YpMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXftuvYnewpL3CT2ircA%2BHKSxsZGDhM6AqUT%2B3n7gIYXCgEBSgZHXu%2B7S7iE3iAEnyH7Nu7edLiogvX8W%2BEhgioGYN5iZsl0VI7H0HRGtex9PGnbtgqRV7RpJ11MuwpQh4RVl0V8LQ0iFuwR%2FgwCZingiTxlDbwy9Dh6Lya%2BSbrTKxReQcF2%2FxcHCYEkI4yxNC1o2V1mgkRpHmkk4QlF8tOOd7FmggMmnGQ5NDbKsItAsbLoLfUDOBQDhIyqIx17Y7e2ro9dyQu3Ic2ELLWz7xLQxRZOFxeWgsANc2PVSdMrFnF3tZFC6XRkElVJt16Iqo8hRGBFF4r7qB6wyuWi3r%2BY15vmFjBAspc7KjJFAOyeLu5LAWzz2LaEY%2F9ArmuldQ0y22yaftEmx8Bpf5%2BTxJWkk5lS2az3F5IR3sz%2B9yEvgpJb91iaRtZW%2B%2Bf2IsQksBnoGblgLxOoYjlnL4eOUv4SyskndypzlwxPbyIc92soT87mroO0%2BrS652OmkNG0xJVRb4XsXSYMXibT%2BWaQDhL%2Bz4b1QJkU1J1JwFfWgRQcsikV%2BJZyCNkDwRlkgbRutPiiYBlgZuhlDEDZMCA6tI7doarNA7jIicQs7w3jupB3eMtBbwNXD%2B8t61R139ZXyzbPu2rJjPoL%2BQKMNvNwMMGOqUB53ITWX427nkXjz4HYIeeFHDaO958jATEFtyQwnpneHm67qhSKcrCbOxE7%2B%2B3B5MPYoC%2B1a3NJQyK9C2WSKDbPHKFLBscLdLZvqd5RPgKrd1%2B0Q7AWAufe3s1dpGJV7ypepZ4OuaScV0uFw9Trxn8ECkUaN9%2FfRADksCMxXWiPBUhhRPuMRdW5U9s1FbIYyjL7VY7H3nmRUjQFF55pjgZFB3Vh6xV&X-Amz-Signature=2a7590d8db6779f29fcd6a26dc4ec2d245b2ae744440a75fbbc6c3e6b0f791a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZHKVMZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTMqsxxpNvaUzcSOfLHzFUyVglyQxiv%2F2CdeURhR2YAIgP9pQyMBfvl7QyZ3R3TM1RibPN3o0csXs%2FwgdQjv4YpMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXftuvYnewpL3CT2ircA%2BHKSxsZGDhM6AqUT%2B3n7gIYXCgEBSgZHXu%2B7S7iE3iAEnyH7Nu7edLiogvX8W%2BEhgioGYN5iZsl0VI7H0HRGtex9PGnbtgqRV7RpJ11MuwpQh4RVl0V8LQ0iFuwR%2FgwCZingiTxlDbwy9Dh6Lya%2BSbrTKxReQcF2%2FxcHCYEkI4yxNC1o2V1mgkRpHmkk4QlF8tOOd7FmggMmnGQ5NDbKsItAsbLoLfUDOBQDhIyqIx17Y7e2ro9dyQu3Ic2ELLWz7xLQxRZOFxeWgsANc2PVSdMrFnF3tZFC6XRkElVJt16Iqo8hRGBFF4r7qB6wyuWi3r%2BY15vmFjBAspc7KjJFAOyeLu5LAWzz2LaEY%2F9ArmuldQ0y22yaftEmx8Bpf5%2BTxJWkk5lS2az3F5IR3sz%2B9yEvgpJb91iaRtZW%2B%2Bf2IsQksBnoGblgLxOoYjlnL4eOUv4SyskndypzlwxPbyIc92soT87mroO0%2BrS652OmkNG0xJVRb4XsXSYMXibT%2BWaQDhL%2Bz4b1QJkU1J1JwFfWgRQcsikV%2BJZyCNkDwRlkgbRutPiiYBlgZuhlDEDZMCA6tI7doarNA7jIicQs7w3jupB3eMtBbwNXD%2B8t61R139ZXyzbPu2rJjPoL%2BQKMNvNwMMGOqUB53ITWX427nkXjz4HYIeeFHDaO958jATEFtyQwnpneHm67qhSKcrCbOxE7%2B%2B3B5MPYoC%2B1a3NJQyK9C2WSKDbPHKFLBscLdLZvqd5RPgKrd1%2B0Q7AWAufe3s1dpGJV7ypepZ4OuaScV0uFw9Trxn8ECkUaN9%2FfRADksCMxXWiPBUhhRPuMRdW5U9s1FbIYyjL7VY7H3nmRUjQFF55pjgZFB3Vh6xV&X-Amz-Signature=d85250eddc54df180e681c96e2f8d1c73b2dae76ffe468d097c448b64d343410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZHKVMZ%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGTMqsxxpNvaUzcSOfLHzFUyVglyQxiv%2F2CdeURhR2YAIgP9pQyMBfvl7QyZ3R3TM1RibPN3o0csXs%2FwgdQjv4YpMqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXftuvYnewpL3CT2ircA%2BHKSxsZGDhM6AqUT%2B3n7gIYXCgEBSgZHXu%2B7S7iE3iAEnyH7Nu7edLiogvX8W%2BEhgioGYN5iZsl0VI7H0HRGtex9PGnbtgqRV7RpJ11MuwpQh4RVl0V8LQ0iFuwR%2FgwCZingiTxlDbwy9Dh6Lya%2BSbrTKxReQcF2%2FxcHCYEkI4yxNC1o2V1mgkRpHmkk4QlF8tOOd7FmggMmnGQ5NDbKsItAsbLoLfUDOBQDhIyqIx17Y7e2ro9dyQu3Ic2ELLWz7xLQxRZOFxeWgsANc2PVSdMrFnF3tZFC6XRkElVJt16Iqo8hRGBFF4r7qB6wyuWi3r%2BY15vmFjBAspc7KjJFAOyeLu5LAWzz2LaEY%2F9ArmuldQ0y22yaftEmx8Bpf5%2BTxJWkk5lS2az3F5IR3sz%2B9yEvgpJb91iaRtZW%2B%2Bf2IsQksBnoGblgLxOoYjlnL4eOUv4SyskndypzlwxPbyIc92soT87mroO0%2BrS652OmkNG0xJVRb4XsXSYMXibT%2BWaQDhL%2Bz4b1QJkU1J1JwFfWgRQcsikV%2BJZyCNkDwRlkgbRutPiiYBlgZuhlDEDZMCA6tI7doarNA7jIicQs7w3jupB3eMtBbwNXD%2B8t61R139ZXyzbPu2rJjPoL%2BQKMNvNwMMGOqUB53ITWX427nkXjz4HYIeeFHDaO958jATEFtyQwnpneHm67qhSKcrCbOxE7%2B%2B3B5MPYoC%2B1a3NJQyK9C2WSKDbPHKFLBscLdLZvqd5RPgKrd1%2B0Q7AWAufe3s1dpGJV7ypepZ4OuaScV0uFw9Trxn8ECkUaN9%2FfRADksCMxXWiPBUhhRPuMRdW5U9s1FbIYyjL7VY7H3nmRUjQFF55pjgZFB3Vh6xV&X-Amz-Signature=67d7e44c3c85e39be6b7286f48f3b2e952371f023639b3080ded59c1c4428c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
