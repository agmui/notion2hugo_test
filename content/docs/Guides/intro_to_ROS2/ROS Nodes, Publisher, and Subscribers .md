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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCBIZOD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDAnycRnLoemvF70WmSQEYoUqEEiTcgUjmyuYvJXspgrQIgMwxuOjehoEG1j5o597Ry%2BtjAlOOqqcUuQgaiRlnUtSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA8AEDg%2Fwjo%2BiAecnCrcA50c%2FIpLowYG2623ZKAes45HJMe4rt5LnfoE4eiUZc%2FP1EzvCJPdbXUf4QsNp1Mt49hVh3erLzjbApmIL3RZ5ZNkbSXFXLPcXVzvGfkhku0huTL%2BYsehfnefaWrxnDwDnSknj5uLKnBt%2FmBn3t5aMVBQ%2BEIgVAVwSDfe6sVP3OdgMd4Oni2%2FSlkJfIF4SzSVDDRMjXxOrCCr5o5VxU1hjwbJERt2MGnQ4rEy1qoe1feOhpNCW4YRpzJJgbyXFezCQR%2B02R56ufJsUYJa2w8HZr5rK4oxYh%2Bh2yJogwok47gXLT0x%2Bff2qZXCkXNi2HHoVJiaTK66fwbeKulOYKbxvTo%2FQIF75jjBesk85ajeYqIOeEceBqzjXCbS7%2B3%2BcVrbBH2lVmJMH3nT4tPdgc1sVTLYYLkIs%2BUESLCyM92BfNKlg7lGY20XsuDYkq2rQKsfa6vA29vGf5MLa7PH1aUR9T0SODDEskO63JgDgmIULiuQaiM4kX4EsjMVSX1OXb3s0rOVGZNiknJQvuylmHyyYyWwPSUGiSp0AGgA1dP8voxGlvVkWfas5cmyHJXQaHkVQvDIoWc8XKI388ZjGuD1JoBRSV7Ay3xiwDsVeKjAZsQWmmWcf%2F0W6KLzLMPPMIb5zL0GOqUB23zu6KNT42Y0fw7QYs5q0M1fnmIEKj0dXp85bfeefSMQG%2BK4nhW7j%2FB1WFgmm7ixPefgSONKjA60XHR%2FmZHWwRqVmxftauu%2FgqDGtI5ZeTdW4LrxgOTG5%2BpR489UE%2F%2FoUl9%2FK%2FJyV3gfVa%2By%2BHDiA3KHk5s1wELX0o5jqDloFjCdVUrgUIo2rUbF6JK%2FPyPhNTTOSu18Zprx9cA6RHkMqz9Jwq5Q&X-Amz-Signature=e92c13dabb8d03a5b737ce5aed8eb5a9df7ea98a94cd7b593f55dade6f5a2ef6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCBIZOD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDAnycRnLoemvF70WmSQEYoUqEEiTcgUjmyuYvJXspgrQIgMwxuOjehoEG1j5o597Ry%2BtjAlOOqqcUuQgaiRlnUtSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA8AEDg%2Fwjo%2BiAecnCrcA50c%2FIpLowYG2623ZKAes45HJMe4rt5LnfoE4eiUZc%2FP1EzvCJPdbXUf4QsNp1Mt49hVh3erLzjbApmIL3RZ5ZNkbSXFXLPcXVzvGfkhku0huTL%2BYsehfnefaWrxnDwDnSknj5uLKnBt%2FmBn3t5aMVBQ%2BEIgVAVwSDfe6sVP3OdgMd4Oni2%2FSlkJfIF4SzSVDDRMjXxOrCCr5o5VxU1hjwbJERt2MGnQ4rEy1qoe1feOhpNCW4YRpzJJgbyXFezCQR%2B02R56ufJsUYJa2w8HZr5rK4oxYh%2Bh2yJogwok47gXLT0x%2Bff2qZXCkXNi2HHoVJiaTK66fwbeKulOYKbxvTo%2FQIF75jjBesk85ajeYqIOeEceBqzjXCbS7%2B3%2BcVrbBH2lVmJMH3nT4tPdgc1sVTLYYLkIs%2BUESLCyM92BfNKlg7lGY20XsuDYkq2rQKsfa6vA29vGf5MLa7PH1aUR9T0SODDEskO63JgDgmIULiuQaiM4kX4EsjMVSX1OXb3s0rOVGZNiknJQvuylmHyyYyWwPSUGiSp0AGgA1dP8voxGlvVkWfas5cmyHJXQaHkVQvDIoWc8XKI388ZjGuD1JoBRSV7Ay3xiwDsVeKjAZsQWmmWcf%2F0W6KLzLMPPMIb5zL0GOqUB23zu6KNT42Y0fw7QYs5q0M1fnmIEKj0dXp85bfeefSMQG%2BK4nhW7j%2FB1WFgmm7ixPefgSONKjA60XHR%2FmZHWwRqVmxftauu%2FgqDGtI5ZeTdW4LrxgOTG5%2BpR489UE%2F%2FoUl9%2FK%2FJyV3gfVa%2By%2BHDiA3KHk5s1wELX0o5jqDloFjCdVUrgUIo2rUbF6JK%2FPyPhNTTOSu18Zprx9cA6RHkMqz9Jwq5Q&X-Amz-Signature=bc5a199f792ea699483af69837102467c5f4bd01c8dfda2ff5c2f2e371c75a86&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCBIZOD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDAnycRnLoemvF70WmSQEYoUqEEiTcgUjmyuYvJXspgrQIgMwxuOjehoEG1j5o597Ry%2BtjAlOOqqcUuQgaiRlnUtSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA8AEDg%2Fwjo%2BiAecnCrcA50c%2FIpLowYG2623ZKAes45HJMe4rt5LnfoE4eiUZc%2FP1EzvCJPdbXUf4QsNp1Mt49hVh3erLzjbApmIL3RZ5ZNkbSXFXLPcXVzvGfkhku0huTL%2BYsehfnefaWrxnDwDnSknj5uLKnBt%2FmBn3t5aMVBQ%2BEIgVAVwSDfe6sVP3OdgMd4Oni2%2FSlkJfIF4SzSVDDRMjXxOrCCr5o5VxU1hjwbJERt2MGnQ4rEy1qoe1feOhpNCW4YRpzJJgbyXFezCQR%2B02R56ufJsUYJa2w8HZr5rK4oxYh%2Bh2yJogwok47gXLT0x%2Bff2qZXCkXNi2HHoVJiaTK66fwbeKulOYKbxvTo%2FQIF75jjBesk85ajeYqIOeEceBqzjXCbS7%2B3%2BcVrbBH2lVmJMH3nT4tPdgc1sVTLYYLkIs%2BUESLCyM92BfNKlg7lGY20XsuDYkq2rQKsfa6vA29vGf5MLa7PH1aUR9T0SODDEskO63JgDgmIULiuQaiM4kX4EsjMVSX1OXb3s0rOVGZNiknJQvuylmHyyYyWwPSUGiSp0AGgA1dP8voxGlvVkWfas5cmyHJXQaHkVQvDIoWc8XKI388ZjGuD1JoBRSV7Ay3xiwDsVeKjAZsQWmmWcf%2F0W6KLzLMPPMIb5zL0GOqUB23zu6KNT42Y0fw7QYs5q0M1fnmIEKj0dXp85bfeefSMQG%2BK4nhW7j%2FB1WFgmm7ixPefgSONKjA60XHR%2FmZHWwRqVmxftauu%2FgqDGtI5ZeTdW4LrxgOTG5%2BpR489UE%2F%2FoUl9%2FK%2FJyV3gfVa%2By%2BHDiA3KHk5s1wELX0o5jqDloFjCdVUrgUIo2rUbF6JK%2FPyPhNTTOSu18Zprx9cA6RHkMqz9Jwq5Q&X-Amz-Signature=1e304aa91550c5d07ed5c5476624ad316de1d19a9700989534f7447e9176bd65&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCBIZOD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDAnycRnLoemvF70WmSQEYoUqEEiTcgUjmyuYvJXspgrQIgMwxuOjehoEG1j5o597Ry%2BtjAlOOqqcUuQgaiRlnUtSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA8AEDg%2Fwjo%2BiAecnCrcA50c%2FIpLowYG2623ZKAes45HJMe4rt5LnfoE4eiUZc%2FP1EzvCJPdbXUf4QsNp1Mt49hVh3erLzjbApmIL3RZ5ZNkbSXFXLPcXVzvGfkhku0huTL%2BYsehfnefaWrxnDwDnSknj5uLKnBt%2FmBn3t5aMVBQ%2BEIgVAVwSDfe6sVP3OdgMd4Oni2%2FSlkJfIF4SzSVDDRMjXxOrCCr5o5VxU1hjwbJERt2MGnQ4rEy1qoe1feOhpNCW4YRpzJJgbyXFezCQR%2B02R56ufJsUYJa2w8HZr5rK4oxYh%2Bh2yJogwok47gXLT0x%2Bff2qZXCkXNi2HHoVJiaTK66fwbeKulOYKbxvTo%2FQIF75jjBesk85ajeYqIOeEceBqzjXCbS7%2B3%2BcVrbBH2lVmJMH3nT4tPdgc1sVTLYYLkIs%2BUESLCyM92BfNKlg7lGY20XsuDYkq2rQKsfa6vA29vGf5MLa7PH1aUR9T0SODDEskO63JgDgmIULiuQaiM4kX4EsjMVSX1OXb3s0rOVGZNiknJQvuylmHyyYyWwPSUGiSp0AGgA1dP8voxGlvVkWfas5cmyHJXQaHkVQvDIoWc8XKI388ZjGuD1JoBRSV7Ay3xiwDsVeKjAZsQWmmWcf%2F0W6KLzLMPPMIb5zL0GOqUB23zu6KNT42Y0fw7QYs5q0M1fnmIEKj0dXp85bfeefSMQG%2BK4nhW7j%2FB1WFgmm7ixPefgSONKjA60XHR%2FmZHWwRqVmxftauu%2FgqDGtI5ZeTdW4LrxgOTG5%2BpR489UE%2F%2FoUl9%2FK%2FJyV3gfVa%2By%2BHDiA3KHk5s1wELX0o5jqDloFjCdVUrgUIo2rUbF6JK%2FPyPhNTTOSu18Zprx9cA6RHkMqz9Jwq5Q&X-Amz-Signature=2c8fac53b17c5d3381887c020bdb7e82894e26176ea28e7a531a522e01bad999&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCBIZOD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDAnycRnLoemvF70WmSQEYoUqEEiTcgUjmyuYvJXspgrQIgMwxuOjehoEG1j5o597Ry%2BtjAlOOqqcUuQgaiRlnUtSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA8AEDg%2Fwjo%2BiAecnCrcA50c%2FIpLowYG2623ZKAes45HJMe4rt5LnfoE4eiUZc%2FP1EzvCJPdbXUf4QsNp1Mt49hVh3erLzjbApmIL3RZ5ZNkbSXFXLPcXVzvGfkhku0huTL%2BYsehfnefaWrxnDwDnSknj5uLKnBt%2FmBn3t5aMVBQ%2BEIgVAVwSDfe6sVP3OdgMd4Oni2%2FSlkJfIF4SzSVDDRMjXxOrCCr5o5VxU1hjwbJERt2MGnQ4rEy1qoe1feOhpNCW4YRpzJJgbyXFezCQR%2B02R56ufJsUYJa2w8HZr5rK4oxYh%2Bh2yJogwok47gXLT0x%2Bff2qZXCkXNi2HHoVJiaTK66fwbeKulOYKbxvTo%2FQIF75jjBesk85ajeYqIOeEceBqzjXCbS7%2B3%2BcVrbBH2lVmJMH3nT4tPdgc1sVTLYYLkIs%2BUESLCyM92BfNKlg7lGY20XsuDYkq2rQKsfa6vA29vGf5MLa7PH1aUR9T0SODDEskO63JgDgmIULiuQaiM4kX4EsjMVSX1OXb3s0rOVGZNiknJQvuylmHyyYyWwPSUGiSp0AGgA1dP8voxGlvVkWfas5cmyHJXQaHkVQvDIoWc8XKI388ZjGuD1JoBRSV7Ay3xiwDsVeKjAZsQWmmWcf%2F0W6KLzLMPPMIb5zL0GOqUB23zu6KNT42Y0fw7QYs5q0M1fnmIEKj0dXp85bfeefSMQG%2BK4nhW7j%2FB1WFgmm7ixPefgSONKjA60XHR%2FmZHWwRqVmxftauu%2FgqDGtI5ZeTdW4LrxgOTG5%2BpR489UE%2F%2FoUl9%2FK%2FJyV3gfVa%2By%2BHDiA3KHk5s1wELX0o5jqDloFjCdVUrgUIo2rUbF6JK%2FPyPhNTTOSu18Zprx9cA6RHkMqz9Jwq5Q&X-Amz-Signature=374f126605213ccbd6e5631bfcee816951f7c916960a1679f52e60d8d47e44ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCBIZOD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDAnycRnLoemvF70WmSQEYoUqEEiTcgUjmyuYvJXspgrQIgMwxuOjehoEG1j5o597Ry%2BtjAlOOqqcUuQgaiRlnUtSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA8AEDg%2Fwjo%2BiAecnCrcA50c%2FIpLowYG2623ZKAes45HJMe4rt5LnfoE4eiUZc%2FP1EzvCJPdbXUf4QsNp1Mt49hVh3erLzjbApmIL3RZ5ZNkbSXFXLPcXVzvGfkhku0huTL%2BYsehfnefaWrxnDwDnSknj5uLKnBt%2FmBn3t5aMVBQ%2BEIgVAVwSDfe6sVP3OdgMd4Oni2%2FSlkJfIF4SzSVDDRMjXxOrCCr5o5VxU1hjwbJERt2MGnQ4rEy1qoe1feOhpNCW4YRpzJJgbyXFezCQR%2B02R56ufJsUYJa2w8HZr5rK4oxYh%2Bh2yJogwok47gXLT0x%2Bff2qZXCkXNi2HHoVJiaTK66fwbeKulOYKbxvTo%2FQIF75jjBesk85ajeYqIOeEceBqzjXCbS7%2B3%2BcVrbBH2lVmJMH3nT4tPdgc1sVTLYYLkIs%2BUESLCyM92BfNKlg7lGY20XsuDYkq2rQKsfa6vA29vGf5MLa7PH1aUR9T0SODDEskO63JgDgmIULiuQaiM4kX4EsjMVSX1OXb3s0rOVGZNiknJQvuylmHyyYyWwPSUGiSp0AGgA1dP8voxGlvVkWfas5cmyHJXQaHkVQvDIoWc8XKI388ZjGuD1JoBRSV7Ay3xiwDsVeKjAZsQWmmWcf%2F0W6KLzLMPPMIb5zL0GOqUB23zu6KNT42Y0fw7QYs5q0M1fnmIEKj0dXp85bfeefSMQG%2BK4nhW7j%2FB1WFgmm7ixPefgSONKjA60XHR%2FmZHWwRqVmxftauu%2FgqDGtI5ZeTdW4LrxgOTG5%2BpR489UE%2F%2FoUl9%2FK%2FJyV3gfVa%2By%2BHDiA3KHk5s1wELX0o5jqDloFjCdVUrgUIo2rUbF6JK%2FPyPhNTTOSu18Zprx9cA6RHkMqz9Jwq5Q&X-Amz-Signature=d5597447a397e7bf8830312f991cee9bc847769989f8556564a0a686e181ec5c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCBIZOD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDAnycRnLoemvF70WmSQEYoUqEEiTcgUjmyuYvJXspgrQIgMwxuOjehoEG1j5o597Ry%2BtjAlOOqqcUuQgaiRlnUtSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA8AEDg%2Fwjo%2BiAecnCrcA50c%2FIpLowYG2623ZKAes45HJMe4rt5LnfoE4eiUZc%2FP1EzvCJPdbXUf4QsNp1Mt49hVh3erLzjbApmIL3RZ5ZNkbSXFXLPcXVzvGfkhku0huTL%2BYsehfnefaWrxnDwDnSknj5uLKnBt%2FmBn3t5aMVBQ%2BEIgVAVwSDfe6sVP3OdgMd4Oni2%2FSlkJfIF4SzSVDDRMjXxOrCCr5o5VxU1hjwbJERt2MGnQ4rEy1qoe1feOhpNCW4YRpzJJgbyXFezCQR%2B02R56ufJsUYJa2w8HZr5rK4oxYh%2Bh2yJogwok47gXLT0x%2Bff2qZXCkXNi2HHoVJiaTK66fwbeKulOYKbxvTo%2FQIF75jjBesk85ajeYqIOeEceBqzjXCbS7%2B3%2BcVrbBH2lVmJMH3nT4tPdgc1sVTLYYLkIs%2BUESLCyM92BfNKlg7lGY20XsuDYkq2rQKsfa6vA29vGf5MLa7PH1aUR9T0SODDEskO63JgDgmIULiuQaiM4kX4EsjMVSX1OXb3s0rOVGZNiknJQvuylmHyyYyWwPSUGiSp0AGgA1dP8voxGlvVkWfas5cmyHJXQaHkVQvDIoWc8XKI388ZjGuD1JoBRSV7Ay3xiwDsVeKjAZsQWmmWcf%2F0W6KLzLMPPMIb5zL0GOqUB23zu6KNT42Y0fw7QYs5q0M1fnmIEKj0dXp85bfeefSMQG%2BK4nhW7j%2FB1WFgmm7ixPefgSONKjA60XHR%2FmZHWwRqVmxftauu%2FgqDGtI5ZeTdW4LrxgOTG5%2BpR489UE%2F%2FoUl9%2FK%2FJyV3gfVa%2By%2BHDiA3KHk5s1wELX0o5jqDloFjCdVUrgUIo2rUbF6JK%2FPyPhNTTOSu18Zprx9cA6RHkMqz9Jwq5Q&X-Amz-Signature=e93b98086bdd74e21cc6cbf415a195372873d457bed54b00c90dfe33762c7096&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCBIZOD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQDAnycRnLoemvF70WmSQEYoUqEEiTcgUjmyuYvJXspgrQIgMwxuOjehoEG1j5o597Ry%2BtjAlOOqqcUuQgaiRlnUtSwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA8AEDg%2Fwjo%2BiAecnCrcA50c%2FIpLowYG2623ZKAes45HJMe4rt5LnfoE4eiUZc%2FP1EzvCJPdbXUf4QsNp1Mt49hVh3erLzjbApmIL3RZ5ZNkbSXFXLPcXVzvGfkhku0huTL%2BYsehfnefaWrxnDwDnSknj5uLKnBt%2FmBn3t5aMVBQ%2BEIgVAVwSDfe6sVP3OdgMd4Oni2%2FSlkJfIF4SzSVDDRMjXxOrCCr5o5VxU1hjwbJERt2MGnQ4rEy1qoe1feOhpNCW4YRpzJJgbyXFezCQR%2B02R56ufJsUYJa2w8HZr5rK4oxYh%2Bh2yJogwok47gXLT0x%2Bff2qZXCkXNi2HHoVJiaTK66fwbeKulOYKbxvTo%2FQIF75jjBesk85ajeYqIOeEceBqzjXCbS7%2B3%2BcVrbBH2lVmJMH3nT4tPdgc1sVTLYYLkIs%2BUESLCyM92BfNKlg7lGY20XsuDYkq2rQKsfa6vA29vGf5MLa7PH1aUR9T0SODDEskO63JgDgmIULiuQaiM4kX4EsjMVSX1OXb3s0rOVGZNiknJQvuylmHyyYyWwPSUGiSp0AGgA1dP8voxGlvVkWfas5cmyHJXQaHkVQvDIoWc8XKI388ZjGuD1JoBRSV7Ay3xiwDsVeKjAZsQWmmWcf%2F0W6KLzLMPPMIb5zL0GOqUB23zu6KNT42Y0fw7QYs5q0M1fnmIEKj0dXp85bfeefSMQG%2BK4nhW7j%2FB1WFgmm7ixPefgSONKjA60XHR%2FmZHWwRqVmxftauu%2FgqDGtI5ZeTdW4LrxgOTG5%2BpR489UE%2F%2FoUl9%2FK%2FJyV3gfVa%2By%2BHDiA3KHk5s1wELX0o5jqDloFjCdVUrgUIo2rUbF6JK%2FPyPhNTTOSu18Zprx9cA6RHkMqz9Jwq5Q&X-Amz-Signature=7b1765a45716263de3efb33c60514ca3c6cdade82a965e76381bb0771e732491&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
