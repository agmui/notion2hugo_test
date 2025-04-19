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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ACEVGF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F2vC6rTxxnMDUA0hlVjS7h0yn1EmjXaI5Jj7yV3rk8AIhAOH8BAlBwKA2F%2BO3Q191RVrv%2BeqY2Qq1XPLvgMFdeiKVKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcuMGM4NGqXUhpJyEq3APcw%2FXtYc5PIstCz6ppVN0FqEjAf4GYKk90gL0CDVFp4ljbdGDdFOfbH7B%2FwqBP9naHTKVOFCJiX9WChpzYS2Is5c9t%2Bdr1VbZkbrxsQ6kvpguzq08cW0RqWLdSiEUp78rSNi7ceubr3ABT24iBuv8zFKRDBl%2FlLDKJ3%2FWAMi%2FUxkkfFJiQGShOFKzHYAVlZhgt9YFaPJ%2FdZhPGqEcGS0DTvfEGMbwlXRMbbgZO30DpKHdjD5Jp9hLDpg41%2Ft47VLGLFDTq9Sw7MoCEjEzD1zRZ9Ne5uIiPvlM7cW8gcv0A2exjJ%2BEY5kuOX8caRes0KG3KwQX9RFKwF57c8q18RqdHKbVtHhhvARPvXQSWECrlPL1XTVUcA%2F%2FNf24Pm1NQuynz5j4p7hdzFQn1x7iJTsZyLE%2FENenZG4DlF4tAuTOkI28ESsvc%2F6sPQPaYV3p39iKepDJBUaVcfOqHE3HEEEwvHvN8%2FZjIrXnPsVOlAlqgG%2BMpnhxWvhWDt5AxqxMX48XidDRI834LGELplon8Mh%2Fwhcss4vFnqDsim0TLmcjho%2FrkXWYRSCBuHbV2ebXhKMxyuXF9VJpyrAxps9nIz33zL%2BYkHr%2BZKGnOxmtRYx2Gbz461djs3n3kOPRVGjDyhYzABjqkAVMEoxsfeEuLAGpu68lHSrYI0dJ4yPSSlizGLAMRHyVMS3%2FiL293bghaXbX26iFznfCOb4DpILe2FoEnkKwQysed4%2Fo4UdEh4StEoB%2BhHLAE%2BacDEZa0ePFJbaE%2BfAOnil1jLgdcvJpTLgsNHHLFDaebYzjKgwvTiHDorSK2Algj%2B9u8BYChtes3XLi70aAOKGAsPdOIpxlt7Nv3rcNoM27mHl0s&X-Amz-Signature=bc683768e70d0280070b2cbdc0c242ba40fa704b8e8b83a16b06a43ecb820778&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ACEVGF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F2vC6rTxxnMDUA0hlVjS7h0yn1EmjXaI5Jj7yV3rk8AIhAOH8BAlBwKA2F%2BO3Q191RVrv%2BeqY2Qq1XPLvgMFdeiKVKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcuMGM4NGqXUhpJyEq3APcw%2FXtYc5PIstCz6ppVN0FqEjAf4GYKk90gL0CDVFp4ljbdGDdFOfbH7B%2FwqBP9naHTKVOFCJiX9WChpzYS2Is5c9t%2Bdr1VbZkbrxsQ6kvpguzq08cW0RqWLdSiEUp78rSNi7ceubr3ABT24iBuv8zFKRDBl%2FlLDKJ3%2FWAMi%2FUxkkfFJiQGShOFKzHYAVlZhgt9YFaPJ%2FdZhPGqEcGS0DTvfEGMbwlXRMbbgZO30DpKHdjD5Jp9hLDpg41%2Ft47VLGLFDTq9Sw7MoCEjEzD1zRZ9Ne5uIiPvlM7cW8gcv0A2exjJ%2BEY5kuOX8caRes0KG3KwQX9RFKwF57c8q18RqdHKbVtHhhvARPvXQSWECrlPL1XTVUcA%2F%2FNf24Pm1NQuynz5j4p7hdzFQn1x7iJTsZyLE%2FENenZG4DlF4tAuTOkI28ESsvc%2F6sPQPaYV3p39iKepDJBUaVcfOqHE3HEEEwvHvN8%2FZjIrXnPsVOlAlqgG%2BMpnhxWvhWDt5AxqxMX48XidDRI834LGELplon8Mh%2Fwhcss4vFnqDsim0TLmcjho%2FrkXWYRSCBuHbV2ebXhKMxyuXF9VJpyrAxps9nIz33zL%2BYkHr%2BZKGnOxmtRYx2Gbz461djs3n3kOPRVGjDyhYzABjqkAVMEoxsfeEuLAGpu68lHSrYI0dJ4yPSSlizGLAMRHyVMS3%2FiL293bghaXbX26iFznfCOb4DpILe2FoEnkKwQysed4%2Fo4UdEh4StEoB%2BhHLAE%2BacDEZa0ePFJbaE%2BfAOnil1jLgdcvJpTLgsNHHLFDaebYzjKgwvTiHDorSK2Algj%2B9u8BYChtes3XLi70aAOKGAsPdOIpxlt7Nv3rcNoM27mHl0s&X-Amz-Signature=27e3e57651125df497f28c85d9d6f224602d37fdd770d3c9894c3c9ca3352f00&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ACEVGF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F2vC6rTxxnMDUA0hlVjS7h0yn1EmjXaI5Jj7yV3rk8AIhAOH8BAlBwKA2F%2BO3Q191RVrv%2BeqY2Qq1XPLvgMFdeiKVKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcuMGM4NGqXUhpJyEq3APcw%2FXtYc5PIstCz6ppVN0FqEjAf4GYKk90gL0CDVFp4ljbdGDdFOfbH7B%2FwqBP9naHTKVOFCJiX9WChpzYS2Is5c9t%2Bdr1VbZkbrxsQ6kvpguzq08cW0RqWLdSiEUp78rSNi7ceubr3ABT24iBuv8zFKRDBl%2FlLDKJ3%2FWAMi%2FUxkkfFJiQGShOFKzHYAVlZhgt9YFaPJ%2FdZhPGqEcGS0DTvfEGMbwlXRMbbgZO30DpKHdjD5Jp9hLDpg41%2Ft47VLGLFDTq9Sw7MoCEjEzD1zRZ9Ne5uIiPvlM7cW8gcv0A2exjJ%2BEY5kuOX8caRes0KG3KwQX9RFKwF57c8q18RqdHKbVtHhhvARPvXQSWECrlPL1XTVUcA%2F%2FNf24Pm1NQuynz5j4p7hdzFQn1x7iJTsZyLE%2FENenZG4DlF4tAuTOkI28ESsvc%2F6sPQPaYV3p39iKepDJBUaVcfOqHE3HEEEwvHvN8%2FZjIrXnPsVOlAlqgG%2BMpnhxWvhWDt5AxqxMX48XidDRI834LGELplon8Mh%2Fwhcss4vFnqDsim0TLmcjho%2FrkXWYRSCBuHbV2ebXhKMxyuXF9VJpyrAxps9nIz33zL%2BYkHr%2BZKGnOxmtRYx2Gbz461djs3n3kOPRVGjDyhYzABjqkAVMEoxsfeEuLAGpu68lHSrYI0dJ4yPSSlizGLAMRHyVMS3%2FiL293bghaXbX26iFznfCOb4DpILe2FoEnkKwQysed4%2Fo4UdEh4StEoB%2BhHLAE%2BacDEZa0ePFJbaE%2BfAOnil1jLgdcvJpTLgsNHHLFDaebYzjKgwvTiHDorSK2Algj%2B9u8BYChtes3XLi70aAOKGAsPdOIpxlt7Nv3rcNoM27mHl0s&X-Amz-Signature=8aba76d7bab4ba2c21940e29c3648faaa04b1a558a627b2e8c3d7051343c656e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ACEVGF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F2vC6rTxxnMDUA0hlVjS7h0yn1EmjXaI5Jj7yV3rk8AIhAOH8BAlBwKA2F%2BO3Q191RVrv%2BeqY2Qq1XPLvgMFdeiKVKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcuMGM4NGqXUhpJyEq3APcw%2FXtYc5PIstCz6ppVN0FqEjAf4GYKk90gL0CDVFp4ljbdGDdFOfbH7B%2FwqBP9naHTKVOFCJiX9WChpzYS2Is5c9t%2Bdr1VbZkbrxsQ6kvpguzq08cW0RqWLdSiEUp78rSNi7ceubr3ABT24iBuv8zFKRDBl%2FlLDKJ3%2FWAMi%2FUxkkfFJiQGShOFKzHYAVlZhgt9YFaPJ%2FdZhPGqEcGS0DTvfEGMbwlXRMbbgZO30DpKHdjD5Jp9hLDpg41%2Ft47VLGLFDTq9Sw7MoCEjEzD1zRZ9Ne5uIiPvlM7cW8gcv0A2exjJ%2BEY5kuOX8caRes0KG3KwQX9RFKwF57c8q18RqdHKbVtHhhvARPvXQSWECrlPL1XTVUcA%2F%2FNf24Pm1NQuynz5j4p7hdzFQn1x7iJTsZyLE%2FENenZG4DlF4tAuTOkI28ESsvc%2F6sPQPaYV3p39iKepDJBUaVcfOqHE3HEEEwvHvN8%2FZjIrXnPsVOlAlqgG%2BMpnhxWvhWDt5AxqxMX48XidDRI834LGELplon8Mh%2Fwhcss4vFnqDsim0TLmcjho%2FrkXWYRSCBuHbV2ebXhKMxyuXF9VJpyrAxps9nIz33zL%2BYkHr%2BZKGnOxmtRYx2Gbz461djs3n3kOPRVGjDyhYzABjqkAVMEoxsfeEuLAGpu68lHSrYI0dJ4yPSSlizGLAMRHyVMS3%2FiL293bghaXbX26iFznfCOb4DpILe2FoEnkKwQysed4%2Fo4UdEh4StEoB%2BhHLAE%2BacDEZa0ePFJbaE%2BfAOnil1jLgdcvJpTLgsNHHLFDaebYzjKgwvTiHDorSK2Algj%2B9u8BYChtes3XLi70aAOKGAsPdOIpxlt7Nv3rcNoM27mHl0s&X-Amz-Signature=8e8898d2d732f8ff3b320e32d6a816acb0cbac9fba73f449db089c7869b12464&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ACEVGF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F2vC6rTxxnMDUA0hlVjS7h0yn1EmjXaI5Jj7yV3rk8AIhAOH8BAlBwKA2F%2BO3Q191RVrv%2BeqY2Qq1XPLvgMFdeiKVKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcuMGM4NGqXUhpJyEq3APcw%2FXtYc5PIstCz6ppVN0FqEjAf4GYKk90gL0CDVFp4ljbdGDdFOfbH7B%2FwqBP9naHTKVOFCJiX9WChpzYS2Is5c9t%2Bdr1VbZkbrxsQ6kvpguzq08cW0RqWLdSiEUp78rSNi7ceubr3ABT24iBuv8zFKRDBl%2FlLDKJ3%2FWAMi%2FUxkkfFJiQGShOFKzHYAVlZhgt9YFaPJ%2FdZhPGqEcGS0DTvfEGMbwlXRMbbgZO30DpKHdjD5Jp9hLDpg41%2Ft47VLGLFDTq9Sw7MoCEjEzD1zRZ9Ne5uIiPvlM7cW8gcv0A2exjJ%2BEY5kuOX8caRes0KG3KwQX9RFKwF57c8q18RqdHKbVtHhhvARPvXQSWECrlPL1XTVUcA%2F%2FNf24Pm1NQuynz5j4p7hdzFQn1x7iJTsZyLE%2FENenZG4DlF4tAuTOkI28ESsvc%2F6sPQPaYV3p39iKepDJBUaVcfOqHE3HEEEwvHvN8%2FZjIrXnPsVOlAlqgG%2BMpnhxWvhWDt5AxqxMX48XidDRI834LGELplon8Mh%2Fwhcss4vFnqDsim0TLmcjho%2FrkXWYRSCBuHbV2ebXhKMxyuXF9VJpyrAxps9nIz33zL%2BYkHr%2BZKGnOxmtRYx2Gbz461djs3n3kOPRVGjDyhYzABjqkAVMEoxsfeEuLAGpu68lHSrYI0dJ4yPSSlizGLAMRHyVMS3%2FiL293bghaXbX26iFznfCOb4DpILe2FoEnkKwQysed4%2Fo4UdEh4StEoB%2BhHLAE%2BacDEZa0ePFJbaE%2BfAOnil1jLgdcvJpTLgsNHHLFDaebYzjKgwvTiHDorSK2Algj%2B9u8BYChtes3XLi70aAOKGAsPdOIpxlt7Nv3rcNoM27mHl0s&X-Amz-Signature=498cd7b1f35eed86bada92b0b737a7811799c4e2d029837d2a219c5efa866c52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ACEVGF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F2vC6rTxxnMDUA0hlVjS7h0yn1EmjXaI5Jj7yV3rk8AIhAOH8BAlBwKA2F%2BO3Q191RVrv%2BeqY2Qq1XPLvgMFdeiKVKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcuMGM4NGqXUhpJyEq3APcw%2FXtYc5PIstCz6ppVN0FqEjAf4GYKk90gL0CDVFp4ljbdGDdFOfbH7B%2FwqBP9naHTKVOFCJiX9WChpzYS2Is5c9t%2Bdr1VbZkbrxsQ6kvpguzq08cW0RqWLdSiEUp78rSNi7ceubr3ABT24iBuv8zFKRDBl%2FlLDKJ3%2FWAMi%2FUxkkfFJiQGShOFKzHYAVlZhgt9YFaPJ%2FdZhPGqEcGS0DTvfEGMbwlXRMbbgZO30DpKHdjD5Jp9hLDpg41%2Ft47VLGLFDTq9Sw7MoCEjEzD1zRZ9Ne5uIiPvlM7cW8gcv0A2exjJ%2BEY5kuOX8caRes0KG3KwQX9RFKwF57c8q18RqdHKbVtHhhvARPvXQSWECrlPL1XTVUcA%2F%2FNf24Pm1NQuynz5j4p7hdzFQn1x7iJTsZyLE%2FENenZG4DlF4tAuTOkI28ESsvc%2F6sPQPaYV3p39iKepDJBUaVcfOqHE3HEEEwvHvN8%2FZjIrXnPsVOlAlqgG%2BMpnhxWvhWDt5AxqxMX48XidDRI834LGELplon8Mh%2Fwhcss4vFnqDsim0TLmcjho%2FrkXWYRSCBuHbV2ebXhKMxyuXF9VJpyrAxps9nIz33zL%2BYkHr%2BZKGnOxmtRYx2Gbz461djs3n3kOPRVGjDyhYzABjqkAVMEoxsfeEuLAGpu68lHSrYI0dJ4yPSSlizGLAMRHyVMS3%2FiL293bghaXbX26iFznfCOb4DpILe2FoEnkKwQysed4%2Fo4UdEh4StEoB%2BhHLAE%2BacDEZa0ePFJbaE%2BfAOnil1jLgdcvJpTLgsNHHLFDaebYzjKgwvTiHDorSK2Algj%2B9u8BYChtes3XLi70aAOKGAsPdOIpxlt7Nv3rcNoM27mHl0s&X-Amz-Signature=b1621723dd54ae5f52810b7bf1f48aad6e9aedfee259d18f4cfca5b4f77d249f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ACEVGF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F2vC6rTxxnMDUA0hlVjS7h0yn1EmjXaI5Jj7yV3rk8AIhAOH8BAlBwKA2F%2BO3Q191RVrv%2BeqY2Qq1XPLvgMFdeiKVKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcuMGM4NGqXUhpJyEq3APcw%2FXtYc5PIstCz6ppVN0FqEjAf4GYKk90gL0CDVFp4ljbdGDdFOfbH7B%2FwqBP9naHTKVOFCJiX9WChpzYS2Is5c9t%2Bdr1VbZkbrxsQ6kvpguzq08cW0RqWLdSiEUp78rSNi7ceubr3ABT24iBuv8zFKRDBl%2FlLDKJ3%2FWAMi%2FUxkkfFJiQGShOFKzHYAVlZhgt9YFaPJ%2FdZhPGqEcGS0DTvfEGMbwlXRMbbgZO30DpKHdjD5Jp9hLDpg41%2Ft47VLGLFDTq9Sw7MoCEjEzD1zRZ9Ne5uIiPvlM7cW8gcv0A2exjJ%2BEY5kuOX8caRes0KG3KwQX9RFKwF57c8q18RqdHKbVtHhhvARPvXQSWECrlPL1XTVUcA%2F%2FNf24Pm1NQuynz5j4p7hdzFQn1x7iJTsZyLE%2FENenZG4DlF4tAuTOkI28ESsvc%2F6sPQPaYV3p39iKepDJBUaVcfOqHE3HEEEwvHvN8%2FZjIrXnPsVOlAlqgG%2BMpnhxWvhWDt5AxqxMX48XidDRI834LGELplon8Mh%2Fwhcss4vFnqDsim0TLmcjho%2FrkXWYRSCBuHbV2ebXhKMxyuXF9VJpyrAxps9nIz33zL%2BYkHr%2BZKGnOxmtRYx2Gbz461djs3n3kOPRVGjDyhYzABjqkAVMEoxsfeEuLAGpu68lHSrYI0dJ4yPSSlizGLAMRHyVMS3%2FiL293bghaXbX26iFznfCOb4DpILe2FoEnkKwQysed4%2Fo4UdEh4StEoB%2BhHLAE%2BacDEZa0ePFJbaE%2BfAOnil1jLgdcvJpTLgsNHHLFDaebYzjKgwvTiHDorSK2Algj%2B9u8BYChtes3XLi70aAOKGAsPdOIpxlt7Nv3rcNoM27mHl0s&X-Amz-Signature=ab91952486ad995de0ca7cc129468f0c924cb1f7129f10eccb8afd296daca3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ACEVGF%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T021535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F2vC6rTxxnMDUA0hlVjS7h0yn1EmjXaI5Jj7yV3rk8AIhAOH8BAlBwKA2F%2BO3Q191RVrv%2BeqY2Qq1XPLvgMFdeiKVKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcuMGM4NGqXUhpJyEq3APcw%2FXtYc5PIstCz6ppVN0FqEjAf4GYKk90gL0CDVFp4ljbdGDdFOfbH7B%2FwqBP9naHTKVOFCJiX9WChpzYS2Is5c9t%2Bdr1VbZkbrxsQ6kvpguzq08cW0RqWLdSiEUp78rSNi7ceubr3ABT24iBuv8zFKRDBl%2FlLDKJ3%2FWAMi%2FUxkkfFJiQGShOFKzHYAVlZhgt9YFaPJ%2FdZhPGqEcGS0DTvfEGMbwlXRMbbgZO30DpKHdjD5Jp9hLDpg41%2Ft47VLGLFDTq9Sw7MoCEjEzD1zRZ9Ne5uIiPvlM7cW8gcv0A2exjJ%2BEY5kuOX8caRes0KG3KwQX9RFKwF57c8q18RqdHKbVtHhhvARPvXQSWECrlPL1XTVUcA%2F%2FNf24Pm1NQuynz5j4p7hdzFQn1x7iJTsZyLE%2FENenZG4DlF4tAuTOkI28ESsvc%2F6sPQPaYV3p39iKepDJBUaVcfOqHE3HEEEwvHvN8%2FZjIrXnPsVOlAlqgG%2BMpnhxWvhWDt5AxqxMX48XidDRI834LGELplon8Mh%2Fwhcss4vFnqDsim0TLmcjho%2FrkXWYRSCBuHbV2ebXhKMxyuXF9VJpyrAxps9nIz33zL%2BYkHr%2BZKGnOxmtRYx2Gbz461djs3n3kOPRVGjDyhYzABjqkAVMEoxsfeEuLAGpu68lHSrYI0dJ4yPSSlizGLAMRHyVMS3%2FiL293bghaXbX26iFznfCOb4DpILe2FoEnkKwQysed4%2Fo4UdEh4StEoB%2BhHLAE%2BacDEZa0ePFJbaE%2BfAOnil1jLgdcvJpTLgsNHHLFDaebYzjKgwvTiHDorSK2Algj%2B9u8BYChtes3XLi70aAOKGAsPdOIpxlt7Nv3rcNoM27mHl0s&X-Amz-Signature=506861ef9f4938b7e07fd9c897f5b386a1c18db0cb355c00c7e634ae90251b18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
