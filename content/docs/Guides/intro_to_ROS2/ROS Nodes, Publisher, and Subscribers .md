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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMO2EJY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsWIZAg5n1UmqEKlNuL7cP8uB%2Ff%2B9RDJ7Yc763an7GuwIgJewmDnxOewUFa6DLVMSYAhTgGnonYa%2BPA1oCOkANqIoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3EPISrmMXycicLpSrcA1ziN58Y8BUeurmfMy6fee5q%2BAqzKfDbkPMR3UJDQDF%2FmFo59AKQKsKjAEpWqnN2BhKGn%2BDgjjj3w%2F5zi%2BtPH5o4ozzAjuymE%2FaTKM9dEGAANO%2BPtuFwxu2ZVUPsbMc5%2B0zMXdcAqkWthD2l%2B2fbfsuHDp9S7gATqm8Q0Udz%2FL%2BhN0Xh36x%2BYCPogPwz49CsR9uKFDg1HCRj82GWTk0rWvNfp0UKQezDgK6MIZgGTPwgZ8Sb54lR%2BCEvrcoJpjhZ60uo7OjXc3XDm0IyBYSxX2ONlI32f2BIwC2H3Detf368Ffpy99HqdocpFi9zHhnzbG8sZ8iKTLJNXfPEy5UFCJq6A0nYhwKXTZgm8dXV3dixtMsN1SCUZN5EH170yDbbqL2%2F959E7VVSqHCrGWHOJ%2Bamn6UjW9Z0AeXd4YwRJxripUP3e2iHTbZw7DaqsA%2BxrDT9%2Bg%2F9VNTb1ySKiMb1%2FVeMaXbfrqoSAVG60YOWRke9nmISBMtIhCLnfV3kNV4SRCEzqfis8XBS5pLOnqan5zXy%2Fnd7tcwaA4DXjeEdtxTolHqwZeQGySKKYyTVrBZ1ROoxoDSM0l09lN9m9EhMtL1P6hprOVpv4YYI6OXZluRXj%2BWoA5%2BV%2FHKVveJ0MOCtscEGOqUBxeTBQODYYeic9chomfU6pQSO1tT6OppnDkuvE9gL65fIuworo3uS7U0E7gt9%2FM51yWi1Yt4phieUdkv13ApWLSlnwDWJm9%2FHRIqqPabVxD%2BAmTm0bCoqwnRkCPTHQioouuXMGyYFWxCphcS1Rq6KWN7Bfzpsu3akIBk8s2P9qbENNJqR81Pat%2F3qT0ilSC6Ni6%2BzCN6nXHfEF8S8ldvuMlJvbOtj&X-Amz-Signature=3942f0ac0163e40f1d00ea69adeb58aea744f73f0f5e3157c739389b0e30b811&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMO2EJY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsWIZAg5n1UmqEKlNuL7cP8uB%2Ff%2B9RDJ7Yc763an7GuwIgJewmDnxOewUFa6DLVMSYAhTgGnonYa%2BPA1oCOkANqIoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3EPISrmMXycicLpSrcA1ziN58Y8BUeurmfMy6fee5q%2BAqzKfDbkPMR3UJDQDF%2FmFo59AKQKsKjAEpWqnN2BhKGn%2BDgjjj3w%2F5zi%2BtPH5o4ozzAjuymE%2FaTKM9dEGAANO%2BPtuFwxu2ZVUPsbMc5%2B0zMXdcAqkWthD2l%2B2fbfsuHDp9S7gATqm8Q0Udz%2FL%2BhN0Xh36x%2BYCPogPwz49CsR9uKFDg1HCRj82GWTk0rWvNfp0UKQezDgK6MIZgGTPwgZ8Sb54lR%2BCEvrcoJpjhZ60uo7OjXc3XDm0IyBYSxX2ONlI32f2BIwC2H3Detf368Ffpy99HqdocpFi9zHhnzbG8sZ8iKTLJNXfPEy5UFCJq6A0nYhwKXTZgm8dXV3dixtMsN1SCUZN5EH170yDbbqL2%2F959E7VVSqHCrGWHOJ%2Bamn6UjW9Z0AeXd4YwRJxripUP3e2iHTbZw7DaqsA%2BxrDT9%2Bg%2F9VNTb1ySKiMb1%2FVeMaXbfrqoSAVG60YOWRke9nmISBMtIhCLnfV3kNV4SRCEzqfis8XBS5pLOnqan5zXy%2Fnd7tcwaA4DXjeEdtxTolHqwZeQGySKKYyTVrBZ1ROoxoDSM0l09lN9m9EhMtL1P6hprOVpv4YYI6OXZluRXj%2BWoA5%2BV%2FHKVveJ0MOCtscEGOqUBxeTBQODYYeic9chomfU6pQSO1tT6OppnDkuvE9gL65fIuworo3uS7U0E7gt9%2FM51yWi1Yt4phieUdkv13ApWLSlnwDWJm9%2FHRIqqPabVxD%2BAmTm0bCoqwnRkCPTHQioouuXMGyYFWxCphcS1Rq6KWN7Bfzpsu3akIBk8s2P9qbENNJqR81Pat%2F3qT0ilSC6Ni6%2BzCN6nXHfEF8S8ldvuMlJvbOtj&X-Amz-Signature=081440c2b45708a65c1c0c8725979801c564fc58d40b8cf54f56ed7a523b44f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMO2EJY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsWIZAg5n1UmqEKlNuL7cP8uB%2Ff%2B9RDJ7Yc763an7GuwIgJewmDnxOewUFa6DLVMSYAhTgGnonYa%2BPA1oCOkANqIoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3EPISrmMXycicLpSrcA1ziN58Y8BUeurmfMy6fee5q%2BAqzKfDbkPMR3UJDQDF%2FmFo59AKQKsKjAEpWqnN2BhKGn%2BDgjjj3w%2F5zi%2BtPH5o4ozzAjuymE%2FaTKM9dEGAANO%2BPtuFwxu2ZVUPsbMc5%2B0zMXdcAqkWthD2l%2B2fbfsuHDp9S7gATqm8Q0Udz%2FL%2BhN0Xh36x%2BYCPogPwz49CsR9uKFDg1HCRj82GWTk0rWvNfp0UKQezDgK6MIZgGTPwgZ8Sb54lR%2BCEvrcoJpjhZ60uo7OjXc3XDm0IyBYSxX2ONlI32f2BIwC2H3Detf368Ffpy99HqdocpFi9zHhnzbG8sZ8iKTLJNXfPEy5UFCJq6A0nYhwKXTZgm8dXV3dixtMsN1SCUZN5EH170yDbbqL2%2F959E7VVSqHCrGWHOJ%2Bamn6UjW9Z0AeXd4YwRJxripUP3e2iHTbZw7DaqsA%2BxrDT9%2Bg%2F9VNTb1ySKiMb1%2FVeMaXbfrqoSAVG60YOWRke9nmISBMtIhCLnfV3kNV4SRCEzqfis8XBS5pLOnqan5zXy%2Fnd7tcwaA4DXjeEdtxTolHqwZeQGySKKYyTVrBZ1ROoxoDSM0l09lN9m9EhMtL1P6hprOVpv4YYI6OXZluRXj%2BWoA5%2BV%2FHKVveJ0MOCtscEGOqUBxeTBQODYYeic9chomfU6pQSO1tT6OppnDkuvE9gL65fIuworo3uS7U0E7gt9%2FM51yWi1Yt4phieUdkv13ApWLSlnwDWJm9%2FHRIqqPabVxD%2BAmTm0bCoqwnRkCPTHQioouuXMGyYFWxCphcS1Rq6KWN7Bfzpsu3akIBk8s2P9qbENNJqR81Pat%2F3qT0ilSC6Ni6%2BzCN6nXHfEF8S8ldvuMlJvbOtj&X-Amz-Signature=4606fa455c5f8cc3a2f215f57986a45d932e3a5f426f22bcee107fd576d5950a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMO2EJY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsWIZAg5n1UmqEKlNuL7cP8uB%2Ff%2B9RDJ7Yc763an7GuwIgJewmDnxOewUFa6DLVMSYAhTgGnonYa%2BPA1oCOkANqIoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3EPISrmMXycicLpSrcA1ziN58Y8BUeurmfMy6fee5q%2BAqzKfDbkPMR3UJDQDF%2FmFo59AKQKsKjAEpWqnN2BhKGn%2BDgjjj3w%2F5zi%2BtPH5o4ozzAjuymE%2FaTKM9dEGAANO%2BPtuFwxu2ZVUPsbMc5%2B0zMXdcAqkWthD2l%2B2fbfsuHDp9S7gATqm8Q0Udz%2FL%2BhN0Xh36x%2BYCPogPwz49CsR9uKFDg1HCRj82GWTk0rWvNfp0UKQezDgK6MIZgGTPwgZ8Sb54lR%2BCEvrcoJpjhZ60uo7OjXc3XDm0IyBYSxX2ONlI32f2BIwC2H3Detf368Ffpy99HqdocpFi9zHhnzbG8sZ8iKTLJNXfPEy5UFCJq6A0nYhwKXTZgm8dXV3dixtMsN1SCUZN5EH170yDbbqL2%2F959E7VVSqHCrGWHOJ%2Bamn6UjW9Z0AeXd4YwRJxripUP3e2iHTbZw7DaqsA%2BxrDT9%2Bg%2F9VNTb1ySKiMb1%2FVeMaXbfrqoSAVG60YOWRke9nmISBMtIhCLnfV3kNV4SRCEzqfis8XBS5pLOnqan5zXy%2Fnd7tcwaA4DXjeEdtxTolHqwZeQGySKKYyTVrBZ1ROoxoDSM0l09lN9m9EhMtL1P6hprOVpv4YYI6OXZluRXj%2BWoA5%2BV%2FHKVveJ0MOCtscEGOqUBxeTBQODYYeic9chomfU6pQSO1tT6OppnDkuvE9gL65fIuworo3uS7U0E7gt9%2FM51yWi1Yt4phieUdkv13ApWLSlnwDWJm9%2FHRIqqPabVxD%2BAmTm0bCoqwnRkCPTHQioouuXMGyYFWxCphcS1Rq6KWN7Bfzpsu3akIBk8s2P9qbENNJqR81Pat%2F3qT0ilSC6Ni6%2BzCN6nXHfEF8S8ldvuMlJvbOtj&X-Amz-Signature=ed7e0bbce195c5d6a429e3084bcfec8b536f75cb5aef7b4ed82eb5bb74ee7011&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMO2EJY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsWIZAg5n1UmqEKlNuL7cP8uB%2Ff%2B9RDJ7Yc763an7GuwIgJewmDnxOewUFa6DLVMSYAhTgGnonYa%2BPA1oCOkANqIoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3EPISrmMXycicLpSrcA1ziN58Y8BUeurmfMy6fee5q%2BAqzKfDbkPMR3UJDQDF%2FmFo59AKQKsKjAEpWqnN2BhKGn%2BDgjjj3w%2F5zi%2BtPH5o4ozzAjuymE%2FaTKM9dEGAANO%2BPtuFwxu2ZVUPsbMc5%2B0zMXdcAqkWthD2l%2B2fbfsuHDp9S7gATqm8Q0Udz%2FL%2BhN0Xh36x%2BYCPogPwz49CsR9uKFDg1HCRj82GWTk0rWvNfp0UKQezDgK6MIZgGTPwgZ8Sb54lR%2BCEvrcoJpjhZ60uo7OjXc3XDm0IyBYSxX2ONlI32f2BIwC2H3Detf368Ffpy99HqdocpFi9zHhnzbG8sZ8iKTLJNXfPEy5UFCJq6A0nYhwKXTZgm8dXV3dixtMsN1SCUZN5EH170yDbbqL2%2F959E7VVSqHCrGWHOJ%2Bamn6UjW9Z0AeXd4YwRJxripUP3e2iHTbZw7DaqsA%2BxrDT9%2Bg%2F9VNTb1ySKiMb1%2FVeMaXbfrqoSAVG60YOWRke9nmISBMtIhCLnfV3kNV4SRCEzqfis8XBS5pLOnqan5zXy%2Fnd7tcwaA4DXjeEdtxTolHqwZeQGySKKYyTVrBZ1ROoxoDSM0l09lN9m9EhMtL1P6hprOVpv4YYI6OXZluRXj%2BWoA5%2BV%2FHKVveJ0MOCtscEGOqUBxeTBQODYYeic9chomfU6pQSO1tT6OppnDkuvE9gL65fIuworo3uS7U0E7gt9%2FM51yWi1Yt4phieUdkv13ApWLSlnwDWJm9%2FHRIqqPabVxD%2BAmTm0bCoqwnRkCPTHQioouuXMGyYFWxCphcS1Rq6KWN7Bfzpsu3akIBk8s2P9qbENNJqR81Pat%2F3qT0ilSC6Ni6%2BzCN6nXHfEF8S8ldvuMlJvbOtj&X-Amz-Signature=83e532b2f01aae3ca13569d672a4f65ff492c482a21c825a0bcb43eaf72b1975&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMO2EJY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsWIZAg5n1UmqEKlNuL7cP8uB%2Ff%2B9RDJ7Yc763an7GuwIgJewmDnxOewUFa6DLVMSYAhTgGnonYa%2BPA1oCOkANqIoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3EPISrmMXycicLpSrcA1ziN58Y8BUeurmfMy6fee5q%2BAqzKfDbkPMR3UJDQDF%2FmFo59AKQKsKjAEpWqnN2BhKGn%2BDgjjj3w%2F5zi%2BtPH5o4ozzAjuymE%2FaTKM9dEGAANO%2BPtuFwxu2ZVUPsbMc5%2B0zMXdcAqkWthD2l%2B2fbfsuHDp9S7gATqm8Q0Udz%2FL%2BhN0Xh36x%2BYCPogPwz49CsR9uKFDg1HCRj82GWTk0rWvNfp0UKQezDgK6MIZgGTPwgZ8Sb54lR%2BCEvrcoJpjhZ60uo7OjXc3XDm0IyBYSxX2ONlI32f2BIwC2H3Detf368Ffpy99HqdocpFi9zHhnzbG8sZ8iKTLJNXfPEy5UFCJq6A0nYhwKXTZgm8dXV3dixtMsN1SCUZN5EH170yDbbqL2%2F959E7VVSqHCrGWHOJ%2Bamn6UjW9Z0AeXd4YwRJxripUP3e2iHTbZw7DaqsA%2BxrDT9%2Bg%2F9VNTb1ySKiMb1%2FVeMaXbfrqoSAVG60YOWRke9nmISBMtIhCLnfV3kNV4SRCEzqfis8XBS5pLOnqan5zXy%2Fnd7tcwaA4DXjeEdtxTolHqwZeQGySKKYyTVrBZ1ROoxoDSM0l09lN9m9EhMtL1P6hprOVpv4YYI6OXZluRXj%2BWoA5%2BV%2FHKVveJ0MOCtscEGOqUBxeTBQODYYeic9chomfU6pQSO1tT6OppnDkuvE9gL65fIuworo3uS7U0E7gt9%2FM51yWi1Yt4phieUdkv13ApWLSlnwDWJm9%2FHRIqqPabVxD%2BAmTm0bCoqwnRkCPTHQioouuXMGyYFWxCphcS1Rq6KWN7Bfzpsu3akIBk8s2P9qbENNJqR81Pat%2F3qT0ilSC6Ni6%2BzCN6nXHfEF8S8ldvuMlJvbOtj&X-Amz-Signature=1129f5212484717fdb5eada4a4d3d6db20dcd82e44a2bab3a3c033fd9765063c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMO2EJY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsWIZAg5n1UmqEKlNuL7cP8uB%2Ff%2B9RDJ7Yc763an7GuwIgJewmDnxOewUFa6DLVMSYAhTgGnonYa%2BPA1oCOkANqIoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3EPISrmMXycicLpSrcA1ziN58Y8BUeurmfMy6fee5q%2BAqzKfDbkPMR3UJDQDF%2FmFo59AKQKsKjAEpWqnN2BhKGn%2BDgjjj3w%2F5zi%2BtPH5o4ozzAjuymE%2FaTKM9dEGAANO%2BPtuFwxu2ZVUPsbMc5%2B0zMXdcAqkWthD2l%2B2fbfsuHDp9S7gATqm8Q0Udz%2FL%2BhN0Xh36x%2BYCPogPwz49CsR9uKFDg1HCRj82GWTk0rWvNfp0UKQezDgK6MIZgGTPwgZ8Sb54lR%2BCEvrcoJpjhZ60uo7OjXc3XDm0IyBYSxX2ONlI32f2BIwC2H3Detf368Ffpy99HqdocpFi9zHhnzbG8sZ8iKTLJNXfPEy5UFCJq6A0nYhwKXTZgm8dXV3dixtMsN1SCUZN5EH170yDbbqL2%2F959E7VVSqHCrGWHOJ%2Bamn6UjW9Z0AeXd4YwRJxripUP3e2iHTbZw7DaqsA%2BxrDT9%2Bg%2F9VNTb1ySKiMb1%2FVeMaXbfrqoSAVG60YOWRke9nmISBMtIhCLnfV3kNV4SRCEzqfis8XBS5pLOnqan5zXy%2Fnd7tcwaA4DXjeEdtxTolHqwZeQGySKKYyTVrBZ1ROoxoDSM0l09lN9m9EhMtL1P6hprOVpv4YYI6OXZluRXj%2BWoA5%2BV%2FHKVveJ0MOCtscEGOqUBxeTBQODYYeic9chomfU6pQSO1tT6OppnDkuvE9gL65fIuworo3uS7U0E7gt9%2FM51yWi1Yt4phieUdkv13ApWLSlnwDWJm9%2FHRIqqPabVxD%2BAmTm0bCoqwnRkCPTHQioouuXMGyYFWxCphcS1Rq6KWN7Bfzpsu3akIBk8s2P9qbENNJqR81Pat%2F3qT0ilSC6Ni6%2BzCN6nXHfEF8S8ldvuMlJvbOtj&X-Amz-Signature=93bd743c8374e54006656d7925dfbc80397ac23653144c72bad9e15ec9185c91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMO2EJY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsWIZAg5n1UmqEKlNuL7cP8uB%2Ff%2B9RDJ7Yc763an7GuwIgJewmDnxOewUFa6DLVMSYAhTgGnonYa%2BPA1oCOkANqIoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3EPISrmMXycicLpSrcA1ziN58Y8BUeurmfMy6fee5q%2BAqzKfDbkPMR3UJDQDF%2FmFo59AKQKsKjAEpWqnN2BhKGn%2BDgjjj3w%2F5zi%2BtPH5o4ozzAjuymE%2FaTKM9dEGAANO%2BPtuFwxu2ZVUPsbMc5%2B0zMXdcAqkWthD2l%2B2fbfsuHDp9S7gATqm8Q0Udz%2FL%2BhN0Xh36x%2BYCPogPwz49CsR9uKFDg1HCRj82GWTk0rWvNfp0UKQezDgK6MIZgGTPwgZ8Sb54lR%2BCEvrcoJpjhZ60uo7OjXc3XDm0IyBYSxX2ONlI32f2BIwC2H3Detf368Ffpy99HqdocpFi9zHhnzbG8sZ8iKTLJNXfPEy5UFCJq6A0nYhwKXTZgm8dXV3dixtMsN1SCUZN5EH170yDbbqL2%2F959E7VVSqHCrGWHOJ%2Bamn6UjW9Z0AeXd4YwRJxripUP3e2iHTbZw7DaqsA%2BxrDT9%2Bg%2F9VNTb1ySKiMb1%2FVeMaXbfrqoSAVG60YOWRke9nmISBMtIhCLnfV3kNV4SRCEzqfis8XBS5pLOnqan5zXy%2Fnd7tcwaA4DXjeEdtxTolHqwZeQGySKKYyTVrBZ1ROoxoDSM0l09lN9m9EhMtL1P6hprOVpv4YYI6OXZluRXj%2BWoA5%2BV%2FHKVveJ0MOCtscEGOqUBxeTBQODYYeic9chomfU6pQSO1tT6OppnDkuvE9gL65fIuworo3uS7U0E7gt9%2FM51yWi1Yt4phieUdkv13ApWLSlnwDWJm9%2FHRIqqPabVxD%2BAmTm0bCoqwnRkCPTHQioouuXMGyYFWxCphcS1Rq6KWN7Bfzpsu3akIBk8s2P9qbENNJqR81Pat%2F3qT0ilSC6Ni6%2BzCN6nXHfEF8S8ldvuMlJvbOtj&X-Amz-Signature=361782badc6e3bdea1cc3ea00b59a0c55bb94dc342df96b1cc33698a4059bb66&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
