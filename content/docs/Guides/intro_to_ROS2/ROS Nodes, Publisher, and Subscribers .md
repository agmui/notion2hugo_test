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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHGQFG5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhjupzQpCPNMJe7dReZZIDmp3g5kP676dvEhJVvBQ%2FGAiEAhwD1M5Wy9bE5p6QRL85M%2F59cF6yQX1TL4o8hmgJMtI4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLQs8I5G6K3CuWGkHCrcA64EZNQOzUDSyVxrK8vCauSjXhLdEu1Ix%2BhPvIDouBuAhhXsON4HMDTmLTJpW7swCSdYR9IeAdQDWHMhrmpZMK7evrKRKeHww1vvQV6TiqLbpr2rWCDoaVOUIcXb4CLjEtp21wD575OryGj%2BZF9TxCjsRUeDgha6JL2%2Fa0Nek7emDWxv4DA7ieX138vFiL%2F7X6JjDvAFZAbnQcYzDmUpr97S0STKlb1TICj%2FEtuZZjSRvIJqWvVwqz87xu21euj8Tro1axOCO%2Brh%2BEBUFlA71jOBmUbwYxKCp8imxeSUphwDxMbrWgMdvWCJPSmjUis51gkNEv1P3sMGO5tJc%2Fpw9%2FGdlMRMC6Rq9LxOBV4T1PqbJiAkMaE6rfwT7vsuOZVdqebJldJnV4O9kwcTJe362P1ShLVbP3TafGejCyXcZUJvhplcHI%2BCvSE5mpyLPHY9e8jyrQqopsNB176cz%2BSwHbzOU4L6aiXotjw1m5TlOZbZIkWkZ9EAzDOnW%2Fg2fqbOn46isDaZRk3UzB6lL0vOixK5ISk2ry9CUMLRgLT%2FRUHy5C4RGcujdY8Q2rCTHLosaQuAhRFnve2sywQxhCR7TIWSw98HD%2BPtIFQCpubRvpfRLLPIU5yHxk%2BXwGVcMNXF4b4GOqUB6Gxjs5yB%2Fptn78qdnc8XM4tK8%2BzZPrO7x6yPcvvnvELjb5eAGCatgqKCLbb0ZoDgBIwdTRBaFC6aBaYRYUOQMAf2UIbHHlRklWOv2rQg6f%2B15sPaG8bSj2zdYBscKKAF50DRVwSmh0Hsn6WBGZm1pquHNVaokQusyfRxfSsrKgg4ty8s1MFLGhE%2Bl7lCqL8w8DLdwCmD2I0JE99X6y5%2BONQI0RfS&X-Amz-Signature=a43f24a710c3b856378d2ce3c2fa53dde6b780a5ba49bcd1155b20ecdc02b05c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHGQFG5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhjupzQpCPNMJe7dReZZIDmp3g5kP676dvEhJVvBQ%2FGAiEAhwD1M5Wy9bE5p6QRL85M%2F59cF6yQX1TL4o8hmgJMtI4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLQs8I5G6K3CuWGkHCrcA64EZNQOzUDSyVxrK8vCauSjXhLdEu1Ix%2BhPvIDouBuAhhXsON4HMDTmLTJpW7swCSdYR9IeAdQDWHMhrmpZMK7evrKRKeHww1vvQV6TiqLbpr2rWCDoaVOUIcXb4CLjEtp21wD575OryGj%2BZF9TxCjsRUeDgha6JL2%2Fa0Nek7emDWxv4DA7ieX138vFiL%2F7X6JjDvAFZAbnQcYzDmUpr97S0STKlb1TICj%2FEtuZZjSRvIJqWvVwqz87xu21euj8Tro1axOCO%2Brh%2BEBUFlA71jOBmUbwYxKCp8imxeSUphwDxMbrWgMdvWCJPSmjUis51gkNEv1P3sMGO5tJc%2Fpw9%2FGdlMRMC6Rq9LxOBV4T1PqbJiAkMaE6rfwT7vsuOZVdqebJldJnV4O9kwcTJe362P1ShLVbP3TafGejCyXcZUJvhplcHI%2BCvSE5mpyLPHY9e8jyrQqopsNB176cz%2BSwHbzOU4L6aiXotjw1m5TlOZbZIkWkZ9EAzDOnW%2Fg2fqbOn46isDaZRk3UzB6lL0vOixK5ISk2ry9CUMLRgLT%2FRUHy5C4RGcujdY8Q2rCTHLosaQuAhRFnve2sywQxhCR7TIWSw98HD%2BPtIFQCpubRvpfRLLPIU5yHxk%2BXwGVcMNXF4b4GOqUB6Gxjs5yB%2Fptn78qdnc8XM4tK8%2BzZPrO7x6yPcvvnvELjb5eAGCatgqKCLbb0ZoDgBIwdTRBaFC6aBaYRYUOQMAf2UIbHHlRklWOv2rQg6f%2B15sPaG8bSj2zdYBscKKAF50DRVwSmh0Hsn6WBGZm1pquHNVaokQusyfRxfSsrKgg4ty8s1MFLGhE%2Bl7lCqL8w8DLdwCmD2I0JE99X6y5%2BONQI0RfS&X-Amz-Signature=3381ef5895072e05b50fa31b6a8b5e651a482bcc6007396129799a424bea376e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHGQFG5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhjupzQpCPNMJe7dReZZIDmp3g5kP676dvEhJVvBQ%2FGAiEAhwD1M5Wy9bE5p6QRL85M%2F59cF6yQX1TL4o8hmgJMtI4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLQs8I5G6K3CuWGkHCrcA64EZNQOzUDSyVxrK8vCauSjXhLdEu1Ix%2BhPvIDouBuAhhXsON4HMDTmLTJpW7swCSdYR9IeAdQDWHMhrmpZMK7evrKRKeHww1vvQV6TiqLbpr2rWCDoaVOUIcXb4CLjEtp21wD575OryGj%2BZF9TxCjsRUeDgha6JL2%2Fa0Nek7emDWxv4DA7ieX138vFiL%2F7X6JjDvAFZAbnQcYzDmUpr97S0STKlb1TICj%2FEtuZZjSRvIJqWvVwqz87xu21euj8Tro1axOCO%2Brh%2BEBUFlA71jOBmUbwYxKCp8imxeSUphwDxMbrWgMdvWCJPSmjUis51gkNEv1P3sMGO5tJc%2Fpw9%2FGdlMRMC6Rq9LxOBV4T1PqbJiAkMaE6rfwT7vsuOZVdqebJldJnV4O9kwcTJe362P1ShLVbP3TafGejCyXcZUJvhplcHI%2BCvSE5mpyLPHY9e8jyrQqopsNB176cz%2BSwHbzOU4L6aiXotjw1m5TlOZbZIkWkZ9EAzDOnW%2Fg2fqbOn46isDaZRk3UzB6lL0vOixK5ISk2ry9CUMLRgLT%2FRUHy5C4RGcujdY8Q2rCTHLosaQuAhRFnve2sywQxhCR7TIWSw98HD%2BPtIFQCpubRvpfRLLPIU5yHxk%2BXwGVcMNXF4b4GOqUB6Gxjs5yB%2Fptn78qdnc8XM4tK8%2BzZPrO7x6yPcvvnvELjb5eAGCatgqKCLbb0ZoDgBIwdTRBaFC6aBaYRYUOQMAf2UIbHHlRklWOv2rQg6f%2B15sPaG8bSj2zdYBscKKAF50DRVwSmh0Hsn6WBGZm1pquHNVaokQusyfRxfSsrKgg4ty8s1MFLGhE%2Bl7lCqL8w8DLdwCmD2I0JE99X6y5%2BONQI0RfS&X-Amz-Signature=cc5bd6a0a9225b5896ee1c7bc00c880c1faa607373cf764cfbbc43cc495e3a5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHGQFG5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhjupzQpCPNMJe7dReZZIDmp3g5kP676dvEhJVvBQ%2FGAiEAhwD1M5Wy9bE5p6QRL85M%2F59cF6yQX1TL4o8hmgJMtI4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLQs8I5G6K3CuWGkHCrcA64EZNQOzUDSyVxrK8vCauSjXhLdEu1Ix%2BhPvIDouBuAhhXsON4HMDTmLTJpW7swCSdYR9IeAdQDWHMhrmpZMK7evrKRKeHww1vvQV6TiqLbpr2rWCDoaVOUIcXb4CLjEtp21wD575OryGj%2BZF9TxCjsRUeDgha6JL2%2Fa0Nek7emDWxv4DA7ieX138vFiL%2F7X6JjDvAFZAbnQcYzDmUpr97S0STKlb1TICj%2FEtuZZjSRvIJqWvVwqz87xu21euj8Tro1axOCO%2Brh%2BEBUFlA71jOBmUbwYxKCp8imxeSUphwDxMbrWgMdvWCJPSmjUis51gkNEv1P3sMGO5tJc%2Fpw9%2FGdlMRMC6Rq9LxOBV4T1PqbJiAkMaE6rfwT7vsuOZVdqebJldJnV4O9kwcTJe362P1ShLVbP3TafGejCyXcZUJvhplcHI%2BCvSE5mpyLPHY9e8jyrQqopsNB176cz%2BSwHbzOU4L6aiXotjw1m5TlOZbZIkWkZ9EAzDOnW%2Fg2fqbOn46isDaZRk3UzB6lL0vOixK5ISk2ry9CUMLRgLT%2FRUHy5C4RGcujdY8Q2rCTHLosaQuAhRFnve2sywQxhCR7TIWSw98HD%2BPtIFQCpubRvpfRLLPIU5yHxk%2BXwGVcMNXF4b4GOqUB6Gxjs5yB%2Fptn78qdnc8XM4tK8%2BzZPrO7x6yPcvvnvELjb5eAGCatgqKCLbb0ZoDgBIwdTRBaFC6aBaYRYUOQMAf2UIbHHlRklWOv2rQg6f%2B15sPaG8bSj2zdYBscKKAF50DRVwSmh0Hsn6WBGZm1pquHNVaokQusyfRxfSsrKgg4ty8s1MFLGhE%2Bl7lCqL8w8DLdwCmD2I0JE99X6y5%2BONQI0RfS&X-Amz-Signature=ef5aefaaa9b471d7b1de0c9a9c4ab4b961238987cd05dc42e2f044ba3c7d2302&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHGQFG5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhjupzQpCPNMJe7dReZZIDmp3g5kP676dvEhJVvBQ%2FGAiEAhwD1M5Wy9bE5p6QRL85M%2F59cF6yQX1TL4o8hmgJMtI4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLQs8I5G6K3CuWGkHCrcA64EZNQOzUDSyVxrK8vCauSjXhLdEu1Ix%2BhPvIDouBuAhhXsON4HMDTmLTJpW7swCSdYR9IeAdQDWHMhrmpZMK7evrKRKeHww1vvQV6TiqLbpr2rWCDoaVOUIcXb4CLjEtp21wD575OryGj%2BZF9TxCjsRUeDgha6JL2%2Fa0Nek7emDWxv4DA7ieX138vFiL%2F7X6JjDvAFZAbnQcYzDmUpr97S0STKlb1TICj%2FEtuZZjSRvIJqWvVwqz87xu21euj8Tro1axOCO%2Brh%2BEBUFlA71jOBmUbwYxKCp8imxeSUphwDxMbrWgMdvWCJPSmjUis51gkNEv1P3sMGO5tJc%2Fpw9%2FGdlMRMC6Rq9LxOBV4T1PqbJiAkMaE6rfwT7vsuOZVdqebJldJnV4O9kwcTJe362P1ShLVbP3TafGejCyXcZUJvhplcHI%2BCvSE5mpyLPHY9e8jyrQqopsNB176cz%2BSwHbzOU4L6aiXotjw1m5TlOZbZIkWkZ9EAzDOnW%2Fg2fqbOn46isDaZRk3UzB6lL0vOixK5ISk2ry9CUMLRgLT%2FRUHy5C4RGcujdY8Q2rCTHLosaQuAhRFnve2sywQxhCR7TIWSw98HD%2BPtIFQCpubRvpfRLLPIU5yHxk%2BXwGVcMNXF4b4GOqUB6Gxjs5yB%2Fptn78qdnc8XM4tK8%2BzZPrO7x6yPcvvnvELjb5eAGCatgqKCLbb0ZoDgBIwdTRBaFC6aBaYRYUOQMAf2UIbHHlRklWOv2rQg6f%2B15sPaG8bSj2zdYBscKKAF50DRVwSmh0Hsn6WBGZm1pquHNVaokQusyfRxfSsrKgg4ty8s1MFLGhE%2Bl7lCqL8w8DLdwCmD2I0JE99X6y5%2BONQI0RfS&X-Amz-Signature=1687483f6e5cfcdd89f47500369cca343a9244c56acbe0625a449ccd8c2730e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHGQFG5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhjupzQpCPNMJe7dReZZIDmp3g5kP676dvEhJVvBQ%2FGAiEAhwD1M5Wy9bE5p6QRL85M%2F59cF6yQX1TL4o8hmgJMtI4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLQs8I5G6K3CuWGkHCrcA64EZNQOzUDSyVxrK8vCauSjXhLdEu1Ix%2BhPvIDouBuAhhXsON4HMDTmLTJpW7swCSdYR9IeAdQDWHMhrmpZMK7evrKRKeHww1vvQV6TiqLbpr2rWCDoaVOUIcXb4CLjEtp21wD575OryGj%2BZF9TxCjsRUeDgha6JL2%2Fa0Nek7emDWxv4DA7ieX138vFiL%2F7X6JjDvAFZAbnQcYzDmUpr97S0STKlb1TICj%2FEtuZZjSRvIJqWvVwqz87xu21euj8Tro1axOCO%2Brh%2BEBUFlA71jOBmUbwYxKCp8imxeSUphwDxMbrWgMdvWCJPSmjUis51gkNEv1P3sMGO5tJc%2Fpw9%2FGdlMRMC6Rq9LxOBV4T1PqbJiAkMaE6rfwT7vsuOZVdqebJldJnV4O9kwcTJe362P1ShLVbP3TafGejCyXcZUJvhplcHI%2BCvSE5mpyLPHY9e8jyrQqopsNB176cz%2BSwHbzOU4L6aiXotjw1m5TlOZbZIkWkZ9EAzDOnW%2Fg2fqbOn46isDaZRk3UzB6lL0vOixK5ISk2ry9CUMLRgLT%2FRUHy5C4RGcujdY8Q2rCTHLosaQuAhRFnve2sywQxhCR7TIWSw98HD%2BPtIFQCpubRvpfRLLPIU5yHxk%2BXwGVcMNXF4b4GOqUB6Gxjs5yB%2Fptn78qdnc8XM4tK8%2BzZPrO7x6yPcvvnvELjb5eAGCatgqKCLbb0ZoDgBIwdTRBaFC6aBaYRYUOQMAf2UIbHHlRklWOv2rQg6f%2B15sPaG8bSj2zdYBscKKAF50DRVwSmh0Hsn6WBGZm1pquHNVaokQusyfRxfSsrKgg4ty8s1MFLGhE%2Bl7lCqL8w8DLdwCmD2I0JE99X6y5%2BONQI0RfS&X-Amz-Signature=51f98a7dc631bb905b178e951fe3340c47f28722affc36bf116d2f77ae5e31cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHGQFG5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhjupzQpCPNMJe7dReZZIDmp3g5kP676dvEhJVvBQ%2FGAiEAhwD1M5Wy9bE5p6QRL85M%2F59cF6yQX1TL4o8hmgJMtI4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLQs8I5G6K3CuWGkHCrcA64EZNQOzUDSyVxrK8vCauSjXhLdEu1Ix%2BhPvIDouBuAhhXsON4HMDTmLTJpW7swCSdYR9IeAdQDWHMhrmpZMK7evrKRKeHww1vvQV6TiqLbpr2rWCDoaVOUIcXb4CLjEtp21wD575OryGj%2BZF9TxCjsRUeDgha6JL2%2Fa0Nek7emDWxv4DA7ieX138vFiL%2F7X6JjDvAFZAbnQcYzDmUpr97S0STKlb1TICj%2FEtuZZjSRvIJqWvVwqz87xu21euj8Tro1axOCO%2Brh%2BEBUFlA71jOBmUbwYxKCp8imxeSUphwDxMbrWgMdvWCJPSmjUis51gkNEv1P3sMGO5tJc%2Fpw9%2FGdlMRMC6Rq9LxOBV4T1PqbJiAkMaE6rfwT7vsuOZVdqebJldJnV4O9kwcTJe362P1ShLVbP3TafGejCyXcZUJvhplcHI%2BCvSE5mpyLPHY9e8jyrQqopsNB176cz%2BSwHbzOU4L6aiXotjw1m5TlOZbZIkWkZ9EAzDOnW%2Fg2fqbOn46isDaZRk3UzB6lL0vOixK5ISk2ry9CUMLRgLT%2FRUHy5C4RGcujdY8Q2rCTHLosaQuAhRFnve2sywQxhCR7TIWSw98HD%2BPtIFQCpubRvpfRLLPIU5yHxk%2BXwGVcMNXF4b4GOqUB6Gxjs5yB%2Fptn78qdnc8XM4tK8%2BzZPrO7x6yPcvvnvELjb5eAGCatgqKCLbb0ZoDgBIwdTRBaFC6aBaYRYUOQMAf2UIbHHlRklWOv2rQg6f%2B15sPaG8bSj2zdYBscKKAF50DRVwSmh0Hsn6WBGZm1pquHNVaokQusyfRxfSsrKgg4ty8s1MFLGhE%2Bl7lCqL8w8DLdwCmD2I0JE99X6y5%2BONQI0RfS&X-Amz-Signature=a2b5504f868261990ee80d6a134d372ffc4d780579718a83b1799571258813fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSHGQFG5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEhjupzQpCPNMJe7dReZZIDmp3g5kP676dvEhJVvBQ%2FGAiEAhwD1M5Wy9bE5p6QRL85M%2F59cF6yQX1TL4o8hmgJMtI4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDLQs8I5G6K3CuWGkHCrcA64EZNQOzUDSyVxrK8vCauSjXhLdEu1Ix%2BhPvIDouBuAhhXsON4HMDTmLTJpW7swCSdYR9IeAdQDWHMhrmpZMK7evrKRKeHww1vvQV6TiqLbpr2rWCDoaVOUIcXb4CLjEtp21wD575OryGj%2BZF9TxCjsRUeDgha6JL2%2Fa0Nek7emDWxv4DA7ieX138vFiL%2F7X6JjDvAFZAbnQcYzDmUpr97S0STKlb1TICj%2FEtuZZjSRvIJqWvVwqz87xu21euj8Tro1axOCO%2Brh%2BEBUFlA71jOBmUbwYxKCp8imxeSUphwDxMbrWgMdvWCJPSmjUis51gkNEv1P3sMGO5tJc%2Fpw9%2FGdlMRMC6Rq9LxOBV4T1PqbJiAkMaE6rfwT7vsuOZVdqebJldJnV4O9kwcTJe362P1ShLVbP3TafGejCyXcZUJvhplcHI%2BCvSE5mpyLPHY9e8jyrQqopsNB176cz%2BSwHbzOU4L6aiXotjw1m5TlOZbZIkWkZ9EAzDOnW%2Fg2fqbOn46isDaZRk3UzB6lL0vOixK5ISk2ry9CUMLRgLT%2FRUHy5C4RGcujdY8Q2rCTHLosaQuAhRFnve2sywQxhCR7TIWSw98HD%2BPtIFQCpubRvpfRLLPIU5yHxk%2BXwGVcMNXF4b4GOqUB6Gxjs5yB%2Fptn78qdnc8XM4tK8%2BzZPrO7x6yPcvvnvELjb5eAGCatgqKCLbb0ZoDgBIwdTRBaFC6aBaYRYUOQMAf2UIbHHlRklWOv2rQg6f%2B15sPaG8bSj2zdYBscKKAF50DRVwSmh0Hsn6WBGZm1pquHNVaokQusyfRxfSsrKgg4ty8s1MFLGhE%2Bl7lCqL8w8DLdwCmD2I0JE99X6y5%2BONQI0RfS&X-Amz-Signature=d689919a35b05143d7abd34f77b67b70ba48a800be78cc0cb1a4252b89a7cc72&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
