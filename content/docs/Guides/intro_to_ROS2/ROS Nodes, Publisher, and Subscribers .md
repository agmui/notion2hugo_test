---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7X2B3NF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDW5ldakdo0XLysJDxapNecCG6K2wZGsAnze7BcK4%2BlmAiBVulmmjsIk1oFx%2F75vs8YwwI7%2F04q9MiDZvwfx661yySr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLTh7uZdLRqyY%2BXoPKtwDYZ927Vk2%2FIcpvlviDXL9d7%2FhAca94SdFuPThEP2uOt07ZC4JmfcU2ID%2BQaE6ZE2ohEsXW5T9PU4IgyyHycHTUYWb%2B52sjiJzYRhH5XHDrrPolP8xQGjFPNYJvqldrGEswubPpdC02bGHYlXqpRbPGTNE2ZVw9NZdmK0NHd1ofX8Slm5%2FZ3oJLIp%2FzBnpro8rvvUq0JW6samdw7IsQ7FYPSepZjqhb3%2Bsl5xzJZ6VOvfDSDEEz1h%2FD9knd7QG1DtFM2LdAmvWUj9sPLNoWVEJi0%2BZwsB1Yfsd4FCkPHUz7roCRo19ZojdgmNxHiwM2gqw26DzdTvbuo9oOTzBOGEqehYCZU4XA75pkPBju5JNSJF8PHgeperYu79nKw6HU27WYl3fbwfcbatE634jhXmCc2XVALnRNsQtpdmDTwXeJP8%2Fo3IOSo5IYO%2BbGiqtIW5NaAMgwlo7VZKjDg4htMB%2BEXSL7wskUI4xyc9R8kvXtZyzW0gh0Y%2B%2BZWje0%2BDqD1m%2BaXpGu82HUJC2SEZmB2qeABNtGNXE1Io5TtlLEqAKlfWsdx8APEPxwx%2By%2BC7JU78%2BBB%2F4%2FY%2BnlKPoDluy9UpVgf2Ik55zTz8JsCeashdMHICdiS41QvWPwpeulYwwgMvLxAY6pgEGBM%2Byvg3chzjrGoEj0RZ07ZE1NT%2FkkG5tqeaIev8J1VhZH2cIumodIwRixgOyPs%2FRpxEMbWVoH570%2FfaAxky6sP9sxM0OnAZAtj5n%2Bw7amQ1EbaJK4xlqEWo4Y8hO4XKi7x3yZav%2BEpx9F2TWI7LkaWAVqe9NtT0kR%2B1jCN5cPwqNMCvbyAPji%2BSqqCu0FI5LCSgbn2XoURaURp2v0eF732pw6xke&X-Amz-Signature=b445076dbaaf0eed3ea89835a1d8e2efd0c2e79dd18f901fd8272bd0d29beeeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7X2B3NF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDW5ldakdo0XLysJDxapNecCG6K2wZGsAnze7BcK4%2BlmAiBVulmmjsIk1oFx%2F75vs8YwwI7%2F04q9MiDZvwfx661yySr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLTh7uZdLRqyY%2BXoPKtwDYZ927Vk2%2FIcpvlviDXL9d7%2FhAca94SdFuPThEP2uOt07ZC4JmfcU2ID%2BQaE6ZE2ohEsXW5T9PU4IgyyHycHTUYWb%2B52sjiJzYRhH5XHDrrPolP8xQGjFPNYJvqldrGEswubPpdC02bGHYlXqpRbPGTNE2ZVw9NZdmK0NHd1ofX8Slm5%2FZ3oJLIp%2FzBnpro8rvvUq0JW6samdw7IsQ7FYPSepZjqhb3%2Bsl5xzJZ6VOvfDSDEEz1h%2FD9knd7QG1DtFM2LdAmvWUj9sPLNoWVEJi0%2BZwsB1Yfsd4FCkPHUz7roCRo19ZojdgmNxHiwM2gqw26DzdTvbuo9oOTzBOGEqehYCZU4XA75pkPBju5JNSJF8PHgeperYu79nKw6HU27WYl3fbwfcbatE634jhXmCc2XVALnRNsQtpdmDTwXeJP8%2Fo3IOSo5IYO%2BbGiqtIW5NaAMgwlo7VZKjDg4htMB%2BEXSL7wskUI4xyc9R8kvXtZyzW0gh0Y%2B%2BZWje0%2BDqD1m%2BaXpGu82HUJC2SEZmB2qeABNtGNXE1Io5TtlLEqAKlfWsdx8APEPxwx%2By%2BC7JU78%2BBB%2F4%2FY%2BnlKPoDluy9UpVgf2Ik55zTz8JsCeashdMHICdiS41QvWPwpeulYwwgMvLxAY6pgEGBM%2Byvg3chzjrGoEj0RZ07ZE1NT%2FkkG5tqeaIev8J1VhZH2cIumodIwRixgOyPs%2FRpxEMbWVoH570%2FfaAxky6sP9sxM0OnAZAtj5n%2Bw7amQ1EbaJK4xlqEWo4Y8hO4XKi7x3yZav%2BEpx9F2TWI7LkaWAVqe9NtT0kR%2B1jCN5cPwqNMCvbyAPji%2BSqqCu0FI5LCSgbn2XoURaURp2v0eF732pw6xke&X-Amz-Signature=400755673183a1a6549f79e2b3aea2278e8b79647f705b197a77abd932c86fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7X2B3NF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDW5ldakdo0XLysJDxapNecCG6K2wZGsAnze7BcK4%2BlmAiBVulmmjsIk1oFx%2F75vs8YwwI7%2F04q9MiDZvwfx661yySr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLTh7uZdLRqyY%2BXoPKtwDYZ927Vk2%2FIcpvlviDXL9d7%2FhAca94SdFuPThEP2uOt07ZC4JmfcU2ID%2BQaE6ZE2ohEsXW5T9PU4IgyyHycHTUYWb%2B52sjiJzYRhH5XHDrrPolP8xQGjFPNYJvqldrGEswubPpdC02bGHYlXqpRbPGTNE2ZVw9NZdmK0NHd1ofX8Slm5%2FZ3oJLIp%2FzBnpro8rvvUq0JW6samdw7IsQ7FYPSepZjqhb3%2Bsl5xzJZ6VOvfDSDEEz1h%2FD9knd7QG1DtFM2LdAmvWUj9sPLNoWVEJi0%2BZwsB1Yfsd4FCkPHUz7roCRo19ZojdgmNxHiwM2gqw26DzdTvbuo9oOTzBOGEqehYCZU4XA75pkPBju5JNSJF8PHgeperYu79nKw6HU27WYl3fbwfcbatE634jhXmCc2XVALnRNsQtpdmDTwXeJP8%2Fo3IOSo5IYO%2BbGiqtIW5NaAMgwlo7VZKjDg4htMB%2BEXSL7wskUI4xyc9R8kvXtZyzW0gh0Y%2B%2BZWje0%2BDqD1m%2BaXpGu82HUJC2SEZmB2qeABNtGNXE1Io5TtlLEqAKlfWsdx8APEPxwx%2By%2BC7JU78%2BBB%2F4%2FY%2BnlKPoDluy9UpVgf2Ik55zTz8JsCeashdMHICdiS41QvWPwpeulYwwgMvLxAY6pgEGBM%2Byvg3chzjrGoEj0RZ07ZE1NT%2FkkG5tqeaIev8J1VhZH2cIumodIwRixgOyPs%2FRpxEMbWVoH570%2FfaAxky6sP9sxM0OnAZAtj5n%2Bw7amQ1EbaJK4xlqEWo4Y8hO4XKi7x3yZav%2BEpx9F2TWI7LkaWAVqe9NtT0kR%2B1jCN5cPwqNMCvbyAPji%2BSqqCu0FI5LCSgbn2XoURaURp2v0eF732pw6xke&X-Amz-Signature=44d25303004107720b12ac5909f2325c62ed1a400d4351ac8ec6a1194390cd62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7X2B3NF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDW5ldakdo0XLysJDxapNecCG6K2wZGsAnze7BcK4%2BlmAiBVulmmjsIk1oFx%2F75vs8YwwI7%2F04q9MiDZvwfx661yySr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLTh7uZdLRqyY%2BXoPKtwDYZ927Vk2%2FIcpvlviDXL9d7%2FhAca94SdFuPThEP2uOt07ZC4JmfcU2ID%2BQaE6ZE2ohEsXW5T9PU4IgyyHycHTUYWb%2B52sjiJzYRhH5XHDrrPolP8xQGjFPNYJvqldrGEswubPpdC02bGHYlXqpRbPGTNE2ZVw9NZdmK0NHd1ofX8Slm5%2FZ3oJLIp%2FzBnpro8rvvUq0JW6samdw7IsQ7FYPSepZjqhb3%2Bsl5xzJZ6VOvfDSDEEz1h%2FD9knd7QG1DtFM2LdAmvWUj9sPLNoWVEJi0%2BZwsB1Yfsd4FCkPHUz7roCRo19ZojdgmNxHiwM2gqw26DzdTvbuo9oOTzBOGEqehYCZU4XA75pkPBju5JNSJF8PHgeperYu79nKw6HU27WYl3fbwfcbatE634jhXmCc2XVALnRNsQtpdmDTwXeJP8%2Fo3IOSo5IYO%2BbGiqtIW5NaAMgwlo7VZKjDg4htMB%2BEXSL7wskUI4xyc9R8kvXtZyzW0gh0Y%2B%2BZWje0%2BDqD1m%2BaXpGu82HUJC2SEZmB2qeABNtGNXE1Io5TtlLEqAKlfWsdx8APEPxwx%2By%2BC7JU78%2BBB%2F4%2FY%2BnlKPoDluy9UpVgf2Ik55zTz8JsCeashdMHICdiS41QvWPwpeulYwwgMvLxAY6pgEGBM%2Byvg3chzjrGoEj0RZ07ZE1NT%2FkkG5tqeaIev8J1VhZH2cIumodIwRixgOyPs%2FRpxEMbWVoH570%2FfaAxky6sP9sxM0OnAZAtj5n%2Bw7amQ1EbaJK4xlqEWo4Y8hO4XKi7x3yZav%2BEpx9F2TWI7LkaWAVqe9NtT0kR%2B1jCN5cPwqNMCvbyAPji%2BSqqCu0FI5LCSgbn2XoURaURp2v0eF732pw6xke&X-Amz-Signature=a5a746aeff576aa8dc69c331f8986e042523e4a9db6365e1481b618263818425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7X2B3NF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDW5ldakdo0XLysJDxapNecCG6K2wZGsAnze7BcK4%2BlmAiBVulmmjsIk1oFx%2F75vs8YwwI7%2F04q9MiDZvwfx661yySr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLTh7uZdLRqyY%2BXoPKtwDYZ927Vk2%2FIcpvlviDXL9d7%2FhAca94SdFuPThEP2uOt07ZC4JmfcU2ID%2BQaE6ZE2ohEsXW5T9PU4IgyyHycHTUYWb%2B52sjiJzYRhH5XHDrrPolP8xQGjFPNYJvqldrGEswubPpdC02bGHYlXqpRbPGTNE2ZVw9NZdmK0NHd1ofX8Slm5%2FZ3oJLIp%2FzBnpro8rvvUq0JW6samdw7IsQ7FYPSepZjqhb3%2Bsl5xzJZ6VOvfDSDEEz1h%2FD9knd7QG1DtFM2LdAmvWUj9sPLNoWVEJi0%2BZwsB1Yfsd4FCkPHUz7roCRo19ZojdgmNxHiwM2gqw26DzdTvbuo9oOTzBOGEqehYCZU4XA75pkPBju5JNSJF8PHgeperYu79nKw6HU27WYl3fbwfcbatE634jhXmCc2XVALnRNsQtpdmDTwXeJP8%2Fo3IOSo5IYO%2BbGiqtIW5NaAMgwlo7VZKjDg4htMB%2BEXSL7wskUI4xyc9R8kvXtZyzW0gh0Y%2B%2BZWje0%2BDqD1m%2BaXpGu82HUJC2SEZmB2qeABNtGNXE1Io5TtlLEqAKlfWsdx8APEPxwx%2By%2BC7JU78%2BBB%2F4%2FY%2BnlKPoDluy9UpVgf2Ik55zTz8JsCeashdMHICdiS41QvWPwpeulYwwgMvLxAY6pgEGBM%2Byvg3chzjrGoEj0RZ07ZE1NT%2FkkG5tqeaIev8J1VhZH2cIumodIwRixgOyPs%2FRpxEMbWVoH570%2FfaAxky6sP9sxM0OnAZAtj5n%2Bw7amQ1EbaJK4xlqEWo4Y8hO4XKi7x3yZav%2BEpx9F2TWI7LkaWAVqe9NtT0kR%2B1jCN5cPwqNMCvbyAPji%2BSqqCu0FI5LCSgbn2XoURaURp2v0eF732pw6xke&X-Amz-Signature=6610e0ecd1e97fd50af480b294bfb14c622b5411d4b8a61b60fe6b4ee81254d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7X2B3NF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDW5ldakdo0XLysJDxapNecCG6K2wZGsAnze7BcK4%2BlmAiBVulmmjsIk1oFx%2F75vs8YwwI7%2F04q9MiDZvwfx661yySr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLTh7uZdLRqyY%2BXoPKtwDYZ927Vk2%2FIcpvlviDXL9d7%2FhAca94SdFuPThEP2uOt07ZC4JmfcU2ID%2BQaE6ZE2ohEsXW5T9PU4IgyyHycHTUYWb%2B52sjiJzYRhH5XHDrrPolP8xQGjFPNYJvqldrGEswubPpdC02bGHYlXqpRbPGTNE2ZVw9NZdmK0NHd1ofX8Slm5%2FZ3oJLIp%2FzBnpro8rvvUq0JW6samdw7IsQ7FYPSepZjqhb3%2Bsl5xzJZ6VOvfDSDEEz1h%2FD9knd7QG1DtFM2LdAmvWUj9sPLNoWVEJi0%2BZwsB1Yfsd4FCkPHUz7roCRo19ZojdgmNxHiwM2gqw26DzdTvbuo9oOTzBOGEqehYCZU4XA75pkPBju5JNSJF8PHgeperYu79nKw6HU27WYl3fbwfcbatE634jhXmCc2XVALnRNsQtpdmDTwXeJP8%2Fo3IOSo5IYO%2BbGiqtIW5NaAMgwlo7VZKjDg4htMB%2BEXSL7wskUI4xyc9R8kvXtZyzW0gh0Y%2B%2BZWje0%2BDqD1m%2BaXpGu82HUJC2SEZmB2qeABNtGNXE1Io5TtlLEqAKlfWsdx8APEPxwx%2By%2BC7JU78%2BBB%2F4%2FY%2BnlKPoDluy9UpVgf2Ik55zTz8JsCeashdMHICdiS41QvWPwpeulYwwgMvLxAY6pgEGBM%2Byvg3chzjrGoEj0RZ07ZE1NT%2FkkG5tqeaIev8J1VhZH2cIumodIwRixgOyPs%2FRpxEMbWVoH570%2FfaAxky6sP9sxM0OnAZAtj5n%2Bw7amQ1EbaJK4xlqEWo4Y8hO4XKi7x3yZav%2BEpx9F2TWI7LkaWAVqe9NtT0kR%2B1jCN5cPwqNMCvbyAPji%2BSqqCu0FI5LCSgbn2XoURaURp2v0eF732pw6xke&X-Amz-Signature=8a17cd11ea317c26abda8922fef2ff9241d69b59f6aff5d64868dca494489fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7X2B3NF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDW5ldakdo0XLysJDxapNecCG6K2wZGsAnze7BcK4%2BlmAiBVulmmjsIk1oFx%2F75vs8YwwI7%2F04q9MiDZvwfx661yySr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLTh7uZdLRqyY%2BXoPKtwDYZ927Vk2%2FIcpvlviDXL9d7%2FhAca94SdFuPThEP2uOt07ZC4JmfcU2ID%2BQaE6ZE2ohEsXW5T9PU4IgyyHycHTUYWb%2B52sjiJzYRhH5XHDrrPolP8xQGjFPNYJvqldrGEswubPpdC02bGHYlXqpRbPGTNE2ZVw9NZdmK0NHd1ofX8Slm5%2FZ3oJLIp%2FzBnpro8rvvUq0JW6samdw7IsQ7FYPSepZjqhb3%2Bsl5xzJZ6VOvfDSDEEz1h%2FD9knd7QG1DtFM2LdAmvWUj9sPLNoWVEJi0%2BZwsB1Yfsd4FCkPHUz7roCRo19ZojdgmNxHiwM2gqw26DzdTvbuo9oOTzBOGEqehYCZU4XA75pkPBju5JNSJF8PHgeperYu79nKw6HU27WYl3fbwfcbatE634jhXmCc2XVALnRNsQtpdmDTwXeJP8%2Fo3IOSo5IYO%2BbGiqtIW5NaAMgwlo7VZKjDg4htMB%2BEXSL7wskUI4xyc9R8kvXtZyzW0gh0Y%2B%2BZWje0%2BDqD1m%2BaXpGu82HUJC2SEZmB2qeABNtGNXE1Io5TtlLEqAKlfWsdx8APEPxwx%2By%2BC7JU78%2BBB%2F4%2FY%2BnlKPoDluy9UpVgf2Ik55zTz8JsCeashdMHICdiS41QvWPwpeulYwwgMvLxAY6pgEGBM%2Byvg3chzjrGoEj0RZ07ZE1NT%2FkkG5tqeaIev8J1VhZH2cIumodIwRixgOyPs%2FRpxEMbWVoH570%2FfaAxky6sP9sxM0OnAZAtj5n%2Bw7amQ1EbaJK4xlqEWo4Y8hO4XKi7x3yZav%2BEpx9F2TWI7LkaWAVqe9NtT0kR%2B1jCN5cPwqNMCvbyAPji%2BSqqCu0FI5LCSgbn2XoURaURp2v0eF732pw6xke&X-Amz-Signature=7e0760e1631a2566f4d879b881434a15e9f429d807a6dea89c06ab0e9a5f4c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7X2B3NF%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T061646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIDW5ldakdo0XLysJDxapNecCG6K2wZGsAnze7BcK4%2BlmAiBVulmmjsIk1oFx%2F75vs8YwwI7%2F04q9MiDZvwfx661yySr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMLTh7uZdLRqyY%2BXoPKtwDYZ927Vk2%2FIcpvlviDXL9d7%2FhAca94SdFuPThEP2uOt07ZC4JmfcU2ID%2BQaE6ZE2ohEsXW5T9PU4IgyyHycHTUYWb%2B52sjiJzYRhH5XHDrrPolP8xQGjFPNYJvqldrGEswubPpdC02bGHYlXqpRbPGTNE2ZVw9NZdmK0NHd1ofX8Slm5%2FZ3oJLIp%2FzBnpro8rvvUq0JW6samdw7IsQ7FYPSepZjqhb3%2Bsl5xzJZ6VOvfDSDEEz1h%2FD9knd7QG1DtFM2LdAmvWUj9sPLNoWVEJi0%2BZwsB1Yfsd4FCkPHUz7roCRo19ZojdgmNxHiwM2gqw26DzdTvbuo9oOTzBOGEqehYCZU4XA75pkPBju5JNSJF8PHgeperYu79nKw6HU27WYl3fbwfcbatE634jhXmCc2XVALnRNsQtpdmDTwXeJP8%2Fo3IOSo5IYO%2BbGiqtIW5NaAMgwlo7VZKjDg4htMB%2BEXSL7wskUI4xyc9R8kvXtZyzW0gh0Y%2B%2BZWje0%2BDqD1m%2BaXpGu82HUJC2SEZmB2qeABNtGNXE1Io5TtlLEqAKlfWsdx8APEPxwx%2By%2BC7JU78%2BBB%2F4%2FY%2BnlKPoDluy9UpVgf2Ik55zTz8JsCeashdMHICdiS41QvWPwpeulYwwgMvLxAY6pgEGBM%2Byvg3chzjrGoEj0RZ07ZE1NT%2FkkG5tqeaIev8J1VhZH2cIumodIwRixgOyPs%2FRpxEMbWVoH570%2FfaAxky6sP9sxM0OnAZAtj5n%2Bw7amQ1EbaJK4xlqEWo4Y8hO4XKi7x3yZav%2BEpx9F2TWI7LkaWAVqe9NtT0kR%2B1jCN5cPwqNMCvbyAPji%2BSqqCu0FI5LCSgbn2XoURaURp2v0eF732pw6xke&X-Amz-Signature=58c475cd4b392279c2686fa30b5a5e7d9d2b79c463c570bb4b83a9be5f6ccc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
