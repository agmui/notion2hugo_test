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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKA46PL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXjjZNut4mqx%2F%2Fu7hG6oEsNorBkoAjtkX4yKY9TsfgOgIgVJdp%2FzmfVVoYSY9mZbQ1HN7cQ118EHHYQPq9i49g5agq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM8qPUZuN9HD4ALQzCrcAx9%2FMr2DddDpX7x5zHvlifLQ7IRuqtyO1g3FQtvUscG08r41sDwY%2B5sVc0%2BsoU0dtZhg9Od5Kwgk2iFGsVvOSwrdVQoA0jPZ%2FoLsaMRz1dh9Fby21LDZ3FGNkq4I7nG9qpYr3mecAuGMjK4pbCwltbSwCZT%2BoVaxKZ%2FXiod1Bsluq2zlZBCDAMb2rFMxoQb9%2FZk5iLWS6ajjg1ZOwXC%2BFTH0qEJ4pYIIisDx%2FW43eRjliPaoSgHyBx2kTwiDhN0IfGKfop3yt%2BHSeGw1g1ffnhAm%2BM5TDDOJXhsq4Ll7DvO8d83b1lF8HUPVyghNmni%2Btk8ZtwtnDkfKo7FhbbbsCEv%2BN2bkwPkSEENxpBktz%2BYOMDlzA2r%2BWx5TLUHsVWF7v0s7PHluGbDG8tk%2Fh1D3XYwrYKyLJLy%2FiBO7IHC6yC62DpIJ9f9L8%2F4EHAAqb%2BFwl8XtjlOOw6v%2Bt13OryWgMH6FrreDMuVduthymPTtXcp3%2F2sdVdWYYZpfd9RZXl0qmAKw%2FFTSjEwZ2fC6rJmSZPYYVdl2d85XhGamqRfyj2%2FcAQXurcnL3jqeFviaTwfalVCAPTpJ9J%2FpuHdqZqGo7P6fZL7cXQYxUZlWW8TmKzphor7C5DMHTokEMuocMPqdgsUGOqUBotjFcka%2F8o6ScZdN8R2JtI4o8OWVfrB1%2BdGYVf8qVuQs7cc6GmqYuz5NEnyEStU6%2FTv0MHF0zFEufcrmz8Qi9m92FSI%2Fmjj4B3UC9VU0%2B1Wq8wNmHgm88yAvZ9YgCMEyvfSFg7OJNGvEwe7FopCubOPeVQ%2FicoA2x79kYOV%2BoHqGe6yuraYsxsylsr68%2FPRZxFgDN7%2BSGszdhouPxcYt4Yvo7gXU&X-Amz-Signature=b55393ee15f9cb15de21bcf5dc58cc3a7342876d0b97fd2d4aa210f812951068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKA46PL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXjjZNut4mqx%2F%2Fu7hG6oEsNorBkoAjtkX4yKY9TsfgOgIgVJdp%2FzmfVVoYSY9mZbQ1HN7cQ118EHHYQPq9i49g5agq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM8qPUZuN9HD4ALQzCrcAx9%2FMr2DddDpX7x5zHvlifLQ7IRuqtyO1g3FQtvUscG08r41sDwY%2B5sVc0%2BsoU0dtZhg9Od5Kwgk2iFGsVvOSwrdVQoA0jPZ%2FoLsaMRz1dh9Fby21LDZ3FGNkq4I7nG9qpYr3mecAuGMjK4pbCwltbSwCZT%2BoVaxKZ%2FXiod1Bsluq2zlZBCDAMb2rFMxoQb9%2FZk5iLWS6ajjg1ZOwXC%2BFTH0qEJ4pYIIisDx%2FW43eRjliPaoSgHyBx2kTwiDhN0IfGKfop3yt%2BHSeGw1g1ffnhAm%2BM5TDDOJXhsq4Ll7DvO8d83b1lF8HUPVyghNmni%2Btk8ZtwtnDkfKo7FhbbbsCEv%2BN2bkwPkSEENxpBktz%2BYOMDlzA2r%2BWx5TLUHsVWF7v0s7PHluGbDG8tk%2Fh1D3XYwrYKyLJLy%2FiBO7IHC6yC62DpIJ9f9L8%2F4EHAAqb%2BFwl8XtjlOOw6v%2Bt13OryWgMH6FrreDMuVduthymPTtXcp3%2F2sdVdWYYZpfd9RZXl0qmAKw%2FFTSjEwZ2fC6rJmSZPYYVdl2d85XhGamqRfyj2%2FcAQXurcnL3jqeFviaTwfalVCAPTpJ9J%2FpuHdqZqGo7P6fZL7cXQYxUZlWW8TmKzphor7C5DMHTokEMuocMPqdgsUGOqUBotjFcka%2F8o6ScZdN8R2JtI4o8OWVfrB1%2BdGYVf8qVuQs7cc6GmqYuz5NEnyEStU6%2FTv0MHF0zFEufcrmz8Qi9m92FSI%2Fmjj4B3UC9VU0%2B1Wq8wNmHgm88yAvZ9YgCMEyvfSFg7OJNGvEwe7FopCubOPeVQ%2FicoA2x79kYOV%2BoHqGe6yuraYsxsylsr68%2FPRZxFgDN7%2BSGszdhouPxcYt4Yvo7gXU&X-Amz-Signature=8ec6960e52573f70f86e0e21bbb67a3962826a6c626c19f94a1a673e534a4576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKA46PL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXjjZNut4mqx%2F%2Fu7hG6oEsNorBkoAjtkX4yKY9TsfgOgIgVJdp%2FzmfVVoYSY9mZbQ1HN7cQ118EHHYQPq9i49g5agq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM8qPUZuN9HD4ALQzCrcAx9%2FMr2DddDpX7x5zHvlifLQ7IRuqtyO1g3FQtvUscG08r41sDwY%2B5sVc0%2BsoU0dtZhg9Od5Kwgk2iFGsVvOSwrdVQoA0jPZ%2FoLsaMRz1dh9Fby21LDZ3FGNkq4I7nG9qpYr3mecAuGMjK4pbCwltbSwCZT%2BoVaxKZ%2FXiod1Bsluq2zlZBCDAMb2rFMxoQb9%2FZk5iLWS6ajjg1ZOwXC%2BFTH0qEJ4pYIIisDx%2FW43eRjliPaoSgHyBx2kTwiDhN0IfGKfop3yt%2BHSeGw1g1ffnhAm%2BM5TDDOJXhsq4Ll7DvO8d83b1lF8HUPVyghNmni%2Btk8ZtwtnDkfKo7FhbbbsCEv%2BN2bkwPkSEENxpBktz%2BYOMDlzA2r%2BWx5TLUHsVWF7v0s7PHluGbDG8tk%2Fh1D3XYwrYKyLJLy%2FiBO7IHC6yC62DpIJ9f9L8%2F4EHAAqb%2BFwl8XtjlOOw6v%2Bt13OryWgMH6FrreDMuVduthymPTtXcp3%2F2sdVdWYYZpfd9RZXl0qmAKw%2FFTSjEwZ2fC6rJmSZPYYVdl2d85XhGamqRfyj2%2FcAQXurcnL3jqeFviaTwfalVCAPTpJ9J%2FpuHdqZqGo7P6fZL7cXQYxUZlWW8TmKzphor7C5DMHTokEMuocMPqdgsUGOqUBotjFcka%2F8o6ScZdN8R2JtI4o8OWVfrB1%2BdGYVf8qVuQs7cc6GmqYuz5NEnyEStU6%2FTv0MHF0zFEufcrmz8Qi9m92FSI%2Fmjj4B3UC9VU0%2B1Wq8wNmHgm88yAvZ9YgCMEyvfSFg7OJNGvEwe7FopCubOPeVQ%2FicoA2x79kYOV%2BoHqGe6yuraYsxsylsr68%2FPRZxFgDN7%2BSGszdhouPxcYt4Yvo7gXU&X-Amz-Signature=ba42e5bbd5da602c8c2eb3cfae339c059da92558891665a77d7167a41ce374b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKA46PL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXjjZNut4mqx%2F%2Fu7hG6oEsNorBkoAjtkX4yKY9TsfgOgIgVJdp%2FzmfVVoYSY9mZbQ1HN7cQ118EHHYQPq9i49g5agq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM8qPUZuN9HD4ALQzCrcAx9%2FMr2DddDpX7x5zHvlifLQ7IRuqtyO1g3FQtvUscG08r41sDwY%2B5sVc0%2BsoU0dtZhg9Od5Kwgk2iFGsVvOSwrdVQoA0jPZ%2FoLsaMRz1dh9Fby21LDZ3FGNkq4I7nG9qpYr3mecAuGMjK4pbCwltbSwCZT%2BoVaxKZ%2FXiod1Bsluq2zlZBCDAMb2rFMxoQb9%2FZk5iLWS6ajjg1ZOwXC%2BFTH0qEJ4pYIIisDx%2FW43eRjliPaoSgHyBx2kTwiDhN0IfGKfop3yt%2BHSeGw1g1ffnhAm%2BM5TDDOJXhsq4Ll7DvO8d83b1lF8HUPVyghNmni%2Btk8ZtwtnDkfKo7FhbbbsCEv%2BN2bkwPkSEENxpBktz%2BYOMDlzA2r%2BWx5TLUHsVWF7v0s7PHluGbDG8tk%2Fh1D3XYwrYKyLJLy%2FiBO7IHC6yC62DpIJ9f9L8%2F4EHAAqb%2BFwl8XtjlOOw6v%2Bt13OryWgMH6FrreDMuVduthymPTtXcp3%2F2sdVdWYYZpfd9RZXl0qmAKw%2FFTSjEwZ2fC6rJmSZPYYVdl2d85XhGamqRfyj2%2FcAQXurcnL3jqeFviaTwfalVCAPTpJ9J%2FpuHdqZqGo7P6fZL7cXQYxUZlWW8TmKzphor7C5DMHTokEMuocMPqdgsUGOqUBotjFcka%2F8o6ScZdN8R2JtI4o8OWVfrB1%2BdGYVf8qVuQs7cc6GmqYuz5NEnyEStU6%2FTv0MHF0zFEufcrmz8Qi9m92FSI%2Fmjj4B3UC9VU0%2B1Wq8wNmHgm88yAvZ9YgCMEyvfSFg7OJNGvEwe7FopCubOPeVQ%2FicoA2x79kYOV%2BoHqGe6yuraYsxsylsr68%2FPRZxFgDN7%2BSGszdhouPxcYt4Yvo7gXU&X-Amz-Signature=96864b48d9926e6a1c430cca2b49a459f7e823d699310ce50677ac9e35de1c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKA46PL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXjjZNut4mqx%2F%2Fu7hG6oEsNorBkoAjtkX4yKY9TsfgOgIgVJdp%2FzmfVVoYSY9mZbQ1HN7cQ118EHHYQPq9i49g5agq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM8qPUZuN9HD4ALQzCrcAx9%2FMr2DddDpX7x5zHvlifLQ7IRuqtyO1g3FQtvUscG08r41sDwY%2B5sVc0%2BsoU0dtZhg9Od5Kwgk2iFGsVvOSwrdVQoA0jPZ%2FoLsaMRz1dh9Fby21LDZ3FGNkq4I7nG9qpYr3mecAuGMjK4pbCwltbSwCZT%2BoVaxKZ%2FXiod1Bsluq2zlZBCDAMb2rFMxoQb9%2FZk5iLWS6ajjg1ZOwXC%2BFTH0qEJ4pYIIisDx%2FW43eRjliPaoSgHyBx2kTwiDhN0IfGKfop3yt%2BHSeGw1g1ffnhAm%2BM5TDDOJXhsq4Ll7DvO8d83b1lF8HUPVyghNmni%2Btk8ZtwtnDkfKo7FhbbbsCEv%2BN2bkwPkSEENxpBktz%2BYOMDlzA2r%2BWx5TLUHsVWF7v0s7PHluGbDG8tk%2Fh1D3XYwrYKyLJLy%2FiBO7IHC6yC62DpIJ9f9L8%2F4EHAAqb%2BFwl8XtjlOOw6v%2Bt13OryWgMH6FrreDMuVduthymPTtXcp3%2F2sdVdWYYZpfd9RZXl0qmAKw%2FFTSjEwZ2fC6rJmSZPYYVdl2d85XhGamqRfyj2%2FcAQXurcnL3jqeFviaTwfalVCAPTpJ9J%2FpuHdqZqGo7P6fZL7cXQYxUZlWW8TmKzphor7C5DMHTokEMuocMPqdgsUGOqUBotjFcka%2F8o6ScZdN8R2JtI4o8OWVfrB1%2BdGYVf8qVuQs7cc6GmqYuz5NEnyEStU6%2FTv0MHF0zFEufcrmz8Qi9m92FSI%2Fmjj4B3UC9VU0%2B1Wq8wNmHgm88yAvZ9YgCMEyvfSFg7OJNGvEwe7FopCubOPeVQ%2FicoA2x79kYOV%2BoHqGe6yuraYsxsylsr68%2FPRZxFgDN7%2BSGszdhouPxcYt4Yvo7gXU&X-Amz-Signature=08c66271089e21cfd994553336e31eac087e20b21bcd26a36a574bbfe91336aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKA46PL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXjjZNut4mqx%2F%2Fu7hG6oEsNorBkoAjtkX4yKY9TsfgOgIgVJdp%2FzmfVVoYSY9mZbQ1HN7cQ118EHHYQPq9i49g5agq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM8qPUZuN9HD4ALQzCrcAx9%2FMr2DddDpX7x5zHvlifLQ7IRuqtyO1g3FQtvUscG08r41sDwY%2B5sVc0%2BsoU0dtZhg9Od5Kwgk2iFGsVvOSwrdVQoA0jPZ%2FoLsaMRz1dh9Fby21LDZ3FGNkq4I7nG9qpYr3mecAuGMjK4pbCwltbSwCZT%2BoVaxKZ%2FXiod1Bsluq2zlZBCDAMb2rFMxoQb9%2FZk5iLWS6ajjg1ZOwXC%2BFTH0qEJ4pYIIisDx%2FW43eRjliPaoSgHyBx2kTwiDhN0IfGKfop3yt%2BHSeGw1g1ffnhAm%2BM5TDDOJXhsq4Ll7DvO8d83b1lF8HUPVyghNmni%2Btk8ZtwtnDkfKo7FhbbbsCEv%2BN2bkwPkSEENxpBktz%2BYOMDlzA2r%2BWx5TLUHsVWF7v0s7PHluGbDG8tk%2Fh1D3XYwrYKyLJLy%2FiBO7IHC6yC62DpIJ9f9L8%2F4EHAAqb%2BFwl8XtjlOOw6v%2Bt13OryWgMH6FrreDMuVduthymPTtXcp3%2F2sdVdWYYZpfd9RZXl0qmAKw%2FFTSjEwZ2fC6rJmSZPYYVdl2d85XhGamqRfyj2%2FcAQXurcnL3jqeFviaTwfalVCAPTpJ9J%2FpuHdqZqGo7P6fZL7cXQYxUZlWW8TmKzphor7C5DMHTokEMuocMPqdgsUGOqUBotjFcka%2F8o6ScZdN8R2JtI4o8OWVfrB1%2BdGYVf8qVuQs7cc6GmqYuz5NEnyEStU6%2FTv0MHF0zFEufcrmz8Qi9m92FSI%2Fmjj4B3UC9VU0%2B1Wq8wNmHgm88yAvZ9YgCMEyvfSFg7OJNGvEwe7FopCubOPeVQ%2FicoA2x79kYOV%2BoHqGe6yuraYsxsylsr68%2FPRZxFgDN7%2BSGszdhouPxcYt4Yvo7gXU&X-Amz-Signature=1bee2713ef850a7ccef9062be0bc3c871734a2e08d3ba02ecebc71b3556edd0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKA46PL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXjjZNut4mqx%2F%2Fu7hG6oEsNorBkoAjtkX4yKY9TsfgOgIgVJdp%2FzmfVVoYSY9mZbQ1HN7cQ118EHHYQPq9i49g5agq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM8qPUZuN9HD4ALQzCrcAx9%2FMr2DddDpX7x5zHvlifLQ7IRuqtyO1g3FQtvUscG08r41sDwY%2B5sVc0%2BsoU0dtZhg9Od5Kwgk2iFGsVvOSwrdVQoA0jPZ%2FoLsaMRz1dh9Fby21LDZ3FGNkq4I7nG9qpYr3mecAuGMjK4pbCwltbSwCZT%2BoVaxKZ%2FXiod1Bsluq2zlZBCDAMb2rFMxoQb9%2FZk5iLWS6ajjg1ZOwXC%2BFTH0qEJ4pYIIisDx%2FW43eRjliPaoSgHyBx2kTwiDhN0IfGKfop3yt%2BHSeGw1g1ffnhAm%2BM5TDDOJXhsq4Ll7DvO8d83b1lF8HUPVyghNmni%2Btk8ZtwtnDkfKo7FhbbbsCEv%2BN2bkwPkSEENxpBktz%2BYOMDlzA2r%2BWx5TLUHsVWF7v0s7PHluGbDG8tk%2Fh1D3XYwrYKyLJLy%2FiBO7IHC6yC62DpIJ9f9L8%2F4EHAAqb%2BFwl8XtjlOOw6v%2Bt13OryWgMH6FrreDMuVduthymPTtXcp3%2F2sdVdWYYZpfd9RZXl0qmAKw%2FFTSjEwZ2fC6rJmSZPYYVdl2d85XhGamqRfyj2%2FcAQXurcnL3jqeFviaTwfalVCAPTpJ9J%2FpuHdqZqGo7P6fZL7cXQYxUZlWW8TmKzphor7C5DMHTokEMuocMPqdgsUGOqUBotjFcka%2F8o6ScZdN8R2JtI4o8OWVfrB1%2BdGYVf8qVuQs7cc6GmqYuz5NEnyEStU6%2FTv0MHF0zFEufcrmz8Qi9m92FSI%2Fmjj4B3UC9VU0%2B1Wq8wNmHgm88yAvZ9YgCMEyvfSFg7OJNGvEwe7FopCubOPeVQ%2FicoA2x79kYOV%2BoHqGe6yuraYsxsylsr68%2FPRZxFgDN7%2BSGszdhouPxcYt4Yvo7gXU&X-Amz-Signature=1fac1f0cc2b46d879e99042ada5e6d8ce520df58e12b73f5f8e154299f5772d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKA46PL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T140739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXjjZNut4mqx%2F%2Fu7hG6oEsNorBkoAjtkX4yKY9TsfgOgIgVJdp%2FzmfVVoYSY9mZbQ1HN7cQ118EHHYQPq9i49g5agq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDM8qPUZuN9HD4ALQzCrcAx9%2FMr2DddDpX7x5zHvlifLQ7IRuqtyO1g3FQtvUscG08r41sDwY%2B5sVc0%2BsoU0dtZhg9Od5Kwgk2iFGsVvOSwrdVQoA0jPZ%2FoLsaMRz1dh9Fby21LDZ3FGNkq4I7nG9qpYr3mecAuGMjK4pbCwltbSwCZT%2BoVaxKZ%2FXiod1Bsluq2zlZBCDAMb2rFMxoQb9%2FZk5iLWS6ajjg1ZOwXC%2BFTH0qEJ4pYIIisDx%2FW43eRjliPaoSgHyBx2kTwiDhN0IfGKfop3yt%2BHSeGw1g1ffnhAm%2BM5TDDOJXhsq4Ll7DvO8d83b1lF8HUPVyghNmni%2Btk8ZtwtnDkfKo7FhbbbsCEv%2BN2bkwPkSEENxpBktz%2BYOMDlzA2r%2BWx5TLUHsVWF7v0s7PHluGbDG8tk%2Fh1D3XYwrYKyLJLy%2FiBO7IHC6yC62DpIJ9f9L8%2F4EHAAqb%2BFwl8XtjlOOw6v%2Bt13OryWgMH6FrreDMuVduthymPTtXcp3%2F2sdVdWYYZpfd9RZXl0qmAKw%2FFTSjEwZ2fC6rJmSZPYYVdl2d85XhGamqRfyj2%2FcAQXurcnL3jqeFviaTwfalVCAPTpJ9J%2FpuHdqZqGo7P6fZL7cXQYxUZlWW8TmKzphor7C5DMHTokEMuocMPqdgsUGOqUBotjFcka%2F8o6ScZdN8R2JtI4o8OWVfrB1%2BdGYVf8qVuQs7cc6GmqYuz5NEnyEStU6%2FTv0MHF0zFEufcrmz8Qi9m92FSI%2Fmjj4B3UC9VU0%2B1Wq8wNmHgm88yAvZ9YgCMEyvfSFg7OJNGvEwe7FopCubOPeVQ%2FicoA2x79kYOV%2BoHqGe6yuraYsxsylsr68%2FPRZxFgDN7%2BSGszdhouPxcYt4Yvo7gXU&X-Amz-Signature=019d75646d7127cd3b4c2ff6010221062626c263f4d6be7b1350e9ccc87befd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
