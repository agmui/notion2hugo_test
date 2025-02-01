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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MOW4R7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMs8zjxh47BEffZYTu56Hrn9xfZHARSUSARX2HneS%2FPAiEA3YsowrToPGL%2FesLXu2WWEZN3tATA9rZmrMT4hyX76hwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpuYbc3%2FQWfw6fPqircA35wuMwM%2BZLGaOO6r7d4NqYtJ6Airj%2B8P%2Bsfd%2B90Zr0oVnk3ANMj6hoKUjBQaHoE%2BpYMqNhZAJsILcWI6oo6dEtekydZvaPIMM937UtD15COWQh3758K%2FcLAcQ5bivIJGgY5hItUqYpqYLf10tn%2FSUGo4N%2FBjpEIe%2Bi9f8USPtnFMw4wzgSvw26OXuPs3RouyC8jWwq3at1lVsUWUZWYnjfvRzEL4ZDUbDxKRcAp43ia6dJhKxffGd9BiRemp4mK1tsnAs%2BrnbASurUPohCfgOOgRvUy7YEFU3UheuT5nywQDWmaGPRbQEIM3z2Z6F28kL8gxuspyX1xIvyN482bRmlMYYN2P5OY1WE6wgtPRD%2Bm5AUMqbf0h3qaQf7uBHLR%2F9mtbw25ZwbXsVW7gVzei0dQOApRFVXEDb2j82cx8rCIbkw89jFwliGF4J87c21Tl8zAtgj26pFaxGn%2BqbMhYrzh%2Bxv47%2BKBcDXUC1tQQ4%2FLX1U5RqVj%2BbT6rpcGDFd26dVAcO3BoGtIiwLKXOPy%2BLB3PEfuwGhWas0gvQ8m521hJNYWuSjTJxqWPaUbxa8kuNtuUn2bJxlUDb8gMzVQcgP4bupBU%2BBzpncIUos3dcOMys20bYgxADDHZTR%2FMIKn9rwGOqUB9jqQYRW0UWfqVXbkroCLGcWl3S1eAoliKoFxPy5HTfvzAI93uzopjWRAFEeUDatTSSssku0zKM1FkUuXSSQZS1%2Fcndj67GcIlZRFlVW1d5ZAE6ue5j4wUyJbjuofEmlQFOu7vgsTAlL9wSOFX6ElPqkqNtnzy4AvGWBOZK0zsrkWIZWEByaNiuJH0TxCFw%2BGuhUFmCE%2Bdvk%2B19sDYDqjJfuQicwH&X-Amz-Signature=1179e233e90a99849f22e6dd28c20005cb45324ae2072c44788b60c8fb559bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MOW4R7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMs8zjxh47BEffZYTu56Hrn9xfZHARSUSARX2HneS%2FPAiEA3YsowrToPGL%2FesLXu2WWEZN3tATA9rZmrMT4hyX76hwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpuYbc3%2FQWfw6fPqircA35wuMwM%2BZLGaOO6r7d4NqYtJ6Airj%2B8P%2Bsfd%2B90Zr0oVnk3ANMj6hoKUjBQaHoE%2BpYMqNhZAJsILcWI6oo6dEtekydZvaPIMM937UtD15COWQh3758K%2FcLAcQ5bivIJGgY5hItUqYpqYLf10tn%2FSUGo4N%2FBjpEIe%2Bi9f8USPtnFMw4wzgSvw26OXuPs3RouyC8jWwq3at1lVsUWUZWYnjfvRzEL4ZDUbDxKRcAp43ia6dJhKxffGd9BiRemp4mK1tsnAs%2BrnbASurUPohCfgOOgRvUy7YEFU3UheuT5nywQDWmaGPRbQEIM3z2Z6F28kL8gxuspyX1xIvyN482bRmlMYYN2P5OY1WE6wgtPRD%2Bm5AUMqbf0h3qaQf7uBHLR%2F9mtbw25ZwbXsVW7gVzei0dQOApRFVXEDb2j82cx8rCIbkw89jFwliGF4J87c21Tl8zAtgj26pFaxGn%2BqbMhYrzh%2Bxv47%2BKBcDXUC1tQQ4%2FLX1U5RqVj%2BbT6rpcGDFd26dVAcO3BoGtIiwLKXOPy%2BLB3PEfuwGhWas0gvQ8m521hJNYWuSjTJxqWPaUbxa8kuNtuUn2bJxlUDb8gMzVQcgP4bupBU%2BBzpncIUos3dcOMys20bYgxADDHZTR%2FMIKn9rwGOqUB9jqQYRW0UWfqVXbkroCLGcWl3S1eAoliKoFxPy5HTfvzAI93uzopjWRAFEeUDatTSSssku0zKM1FkUuXSSQZS1%2Fcndj67GcIlZRFlVW1d5ZAE6ue5j4wUyJbjuofEmlQFOu7vgsTAlL9wSOFX6ElPqkqNtnzy4AvGWBOZK0zsrkWIZWEByaNiuJH0TxCFw%2BGuhUFmCE%2Bdvk%2B19sDYDqjJfuQicwH&X-Amz-Signature=ee51dd88238e4b6f2f0016069677225724653356015f35636fb648555c3758f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MOW4R7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMs8zjxh47BEffZYTu56Hrn9xfZHARSUSARX2HneS%2FPAiEA3YsowrToPGL%2FesLXu2WWEZN3tATA9rZmrMT4hyX76hwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpuYbc3%2FQWfw6fPqircA35wuMwM%2BZLGaOO6r7d4NqYtJ6Airj%2B8P%2Bsfd%2B90Zr0oVnk3ANMj6hoKUjBQaHoE%2BpYMqNhZAJsILcWI6oo6dEtekydZvaPIMM937UtD15COWQh3758K%2FcLAcQ5bivIJGgY5hItUqYpqYLf10tn%2FSUGo4N%2FBjpEIe%2Bi9f8USPtnFMw4wzgSvw26OXuPs3RouyC8jWwq3at1lVsUWUZWYnjfvRzEL4ZDUbDxKRcAp43ia6dJhKxffGd9BiRemp4mK1tsnAs%2BrnbASurUPohCfgOOgRvUy7YEFU3UheuT5nywQDWmaGPRbQEIM3z2Z6F28kL8gxuspyX1xIvyN482bRmlMYYN2P5OY1WE6wgtPRD%2Bm5AUMqbf0h3qaQf7uBHLR%2F9mtbw25ZwbXsVW7gVzei0dQOApRFVXEDb2j82cx8rCIbkw89jFwliGF4J87c21Tl8zAtgj26pFaxGn%2BqbMhYrzh%2Bxv47%2BKBcDXUC1tQQ4%2FLX1U5RqVj%2BbT6rpcGDFd26dVAcO3BoGtIiwLKXOPy%2BLB3PEfuwGhWas0gvQ8m521hJNYWuSjTJxqWPaUbxa8kuNtuUn2bJxlUDb8gMzVQcgP4bupBU%2BBzpncIUos3dcOMys20bYgxADDHZTR%2FMIKn9rwGOqUB9jqQYRW0UWfqVXbkroCLGcWl3S1eAoliKoFxPy5HTfvzAI93uzopjWRAFEeUDatTSSssku0zKM1FkUuXSSQZS1%2Fcndj67GcIlZRFlVW1d5ZAE6ue5j4wUyJbjuofEmlQFOu7vgsTAlL9wSOFX6ElPqkqNtnzy4AvGWBOZK0zsrkWIZWEByaNiuJH0TxCFw%2BGuhUFmCE%2Bdvk%2B19sDYDqjJfuQicwH&X-Amz-Signature=beb5dccdd9504075c4d4119f4474e31fe07eb74da4713df5d9647cbf4b00e0d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MOW4R7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMs8zjxh47BEffZYTu56Hrn9xfZHARSUSARX2HneS%2FPAiEA3YsowrToPGL%2FesLXu2WWEZN3tATA9rZmrMT4hyX76hwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpuYbc3%2FQWfw6fPqircA35wuMwM%2BZLGaOO6r7d4NqYtJ6Airj%2B8P%2Bsfd%2B90Zr0oVnk3ANMj6hoKUjBQaHoE%2BpYMqNhZAJsILcWI6oo6dEtekydZvaPIMM937UtD15COWQh3758K%2FcLAcQ5bivIJGgY5hItUqYpqYLf10tn%2FSUGo4N%2FBjpEIe%2Bi9f8USPtnFMw4wzgSvw26OXuPs3RouyC8jWwq3at1lVsUWUZWYnjfvRzEL4ZDUbDxKRcAp43ia6dJhKxffGd9BiRemp4mK1tsnAs%2BrnbASurUPohCfgOOgRvUy7YEFU3UheuT5nywQDWmaGPRbQEIM3z2Z6F28kL8gxuspyX1xIvyN482bRmlMYYN2P5OY1WE6wgtPRD%2Bm5AUMqbf0h3qaQf7uBHLR%2F9mtbw25ZwbXsVW7gVzei0dQOApRFVXEDb2j82cx8rCIbkw89jFwliGF4J87c21Tl8zAtgj26pFaxGn%2BqbMhYrzh%2Bxv47%2BKBcDXUC1tQQ4%2FLX1U5RqVj%2BbT6rpcGDFd26dVAcO3BoGtIiwLKXOPy%2BLB3PEfuwGhWas0gvQ8m521hJNYWuSjTJxqWPaUbxa8kuNtuUn2bJxlUDb8gMzVQcgP4bupBU%2BBzpncIUos3dcOMys20bYgxADDHZTR%2FMIKn9rwGOqUB9jqQYRW0UWfqVXbkroCLGcWl3S1eAoliKoFxPy5HTfvzAI93uzopjWRAFEeUDatTSSssku0zKM1FkUuXSSQZS1%2Fcndj67GcIlZRFlVW1d5ZAE6ue5j4wUyJbjuofEmlQFOu7vgsTAlL9wSOFX6ElPqkqNtnzy4AvGWBOZK0zsrkWIZWEByaNiuJH0TxCFw%2BGuhUFmCE%2Bdvk%2B19sDYDqjJfuQicwH&X-Amz-Signature=c2357e52fb38ac1503ce8c8682d0e26da84ea8c588dd779dd368a2544a60aa21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MOW4R7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMs8zjxh47BEffZYTu56Hrn9xfZHARSUSARX2HneS%2FPAiEA3YsowrToPGL%2FesLXu2WWEZN3tATA9rZmrMT4hyX76hwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpuYbc3%2FQWfw6fPqircA35wuMwM%2BZLGaOO6r7d4NqYtJ6Airj%2B8P%2Bsfd%2B90Zr0oVnk3ANMj6hoKUjBQaHoE%2BpYMqNhZAJsILcWI6oo6dEtekydZvaPIMM937UtD15COWQh3758K%2FcLAcQ5bivIJGgY5hItUqYpqYLf10tn%2FSUGo4N%2FBjpEIe%2Bi9f8USPtnFMw4wzgSvw26OXuPs3RouyC8jWwq3at1lVsUWUZWYnjfvRzEL4ZDUbDxKRcAp43ia6dJhKxffGd9BiRemp4mK1tsnAs%2BrnbASurUPohCfgOOgRvUy7YEFU3UheuT5nywQDWmaGPRbQEIM3z2Z6F28kL8gxuspyX1xIvyN482bRmlMYYN2P5OY1WE6wgtPRD%2Bm5AUMqbf0h3qaQf7uBHLR%2F9mtbw25ZwbXsVW7gVzei0dQOApRFVXEDb2j82cx8rCIbkw89jFwliGF4J87c21Tl8zAtgj26pFaxGn%2BqbMhYrzh%2Bxv47%2BKBcDXUC1tQQ4%2FLX1U5RqVj%2BbT6rpcGDFd26dVAcO3BoGtIiwLKXOPy%2BLB3PEfuwGhWas0gvQ8m521hJNYWuSjTJxqWPaUbxa8kuNtuUn2bJxlUDb8gMzVQcgP4bupBU%2BBzpncIUos3dcOMys20bYgxADDHZTR%2FMIKn9rwGOqUB9jqQYRW0UWfqVXbkroCLGcWl3S1eAoliKoFxPy5HTfvzAI93uzopjWRAFEeUDatTSSssku0zKM1FkUuXSSQZS1%2Fcndj67GcIlZRFlVW1d5ZAE6ue5j4wUyJbjuofEmlQFOu7vgsTAlL9wSOFX6ElPqkqNtnzy4AvGWBOZK0zsrkWIZWEByaNiuJH0TxCFw%2BGuhUFmCE%2Bdvk%2B19sDYDqjJfuQicwH&X-Amz-Signature=1c7d2af77006cb162a47dbb217433bcee514408e14f0ad90177ddf4913c9ada0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MOW4R7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMs8zjxh47BEffZYTu56Hrn9xfZHARSUSARX2HneS%2FPAiEA3YsowrToPGL%2FesLXu2WWEZN3tATA9rZmrMT4hyX76hwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpuYbc3%2FQWfw6fPqircA35wuMwM%2BZLGaOO6r7d4NqYtJ6Airj%2B8P%2Bsfd%2B90Zr0oVnk3ANMj6hoKUjBQaHoE%2BpYMqNhZAJsILcWI6oo6dEtekydZvaPIMM937UtD15COWQh3758K%2FcLAcQ5bivIJGgY5hItUqYpqYLf10tn%2FSUGo4N%2FBjpEIe%2Bi9f8USPtnFMw4wzgSvw26OXuPs3RouyC8jWwq3at1lVsUWUZWYnjfvRzEL4ZDUbDxKRcAp43ia6dJhKxffGd9BiRemp4mK1tsnAs%2BrnbASurUPohCfgOOgRvUy7YEFU3UheuT5nywQDWmaGPRbQEIM3z2Z6F28kL8gxuspyX1xIvyN482bRmlMYYN2P5OY1WE6wgtPRD%2Bm5AUMqbf0h3qaQf7uBHLR%2F9mtbw25ZwbXsVW7gVzei0dQOApRFVXEDb2j82cx8rCIbkw89jFwliGF4J87c21Tl8zAtgj26pFaxGn%2BqbMhYrzh%2Bxv47%2BKBcDXUC1tQQ4%2FLX1U5RqVj%2BbT6rpcGDFd26dVAcO3BoGtIiwLKXOPy%2BLB3PEfuwGhWas0gvQ8m521hJNYWuSjTJxqWPaUbxa8kuNtuUn2bJxlUDb8gMzVQcgP4bupBU%2BBzpncIUos3dcOMys20bYgxADDHZTR%2FMIKn9rwGOqUB9jqQYRW0UWfqVXbkroCLGcWl3S1eAoliKoFxPy5HTfvzAI93uzopjWRAFEeUDatTSSssku0zKM1FkUuXSSQZS1%2Fcndj67GcIlZRFlVW1d5ZAE6ue5j4wUyJbjuofEmlQFOu7vgsTAlL9wSOFX6ElPqkqNtnzy4AvGWBOZK0zsrkWIZWEByaNiuJH0TxCFw%2BGuhUFmCE%2Bdvk%2B19sDYDqjJfuQicwH&X-Amz-Signature=d0880e32ad2e066c558ad999fd329c35f2fc8f7fe433e852acd8afb8e3318e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MOW4R7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMs8zjxh47BEffZYTu56Hrn9xfZHARSUSARX2HneS%2FPAiEA3YsowrToPGL%2FesLXu2WWEZN3tATA9rZmrMT4hyX76hwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpuYbc3%2FQWfw6fPqircA35wuMwM%2BZLGaOO6r7d4NqYtJ6Airj%2B8P%2Bsfd%2B90Zr0oVnk3ANMj6hoKUjBQaHoE%2BpYMqNhZAJsILcWI6oo6dEtekydZvaPIMM937UtD15COWQh3758K%2FcLAcQ5bivIJGgY5hItUqYpqYLf10tn%2FSUGo4N%2FBjpEIe%2Bi9f8USPtnFMw4wzgSvw26OXuPs3RouyC8jWwq3at1lVsUWUZWYnjfvRzEL4ZDUbDxKRcAp43ia6dJhKxffGd9BiRemp4mK1tsnAs%2BrnbASurUPohCfgOOgRvUy7YEFU3UheuT5nywQDWmaGPRbQEIM3z2Z6F28kL8gxuspyX1xIvyN482bRmlMYYN2P5OY1WE6wgtPRD%2Bm5AUMqbf0h3qaQf7uBHLR%2F9mtbw25ZwbXsVW7gVzei0dQOApRFVXEDb2j82cx8rCIbkw89jFwliGF4J87c21Tl8zAtgj26pFaxGn%2BqbMhYrzh%2Bxv47%2BKBcDXUC1tQQ4%2FLX1U5RqVj%2BbT6rpcGDFd26dVAcO3BoGtIiwLKXOPy%2BLB3PEfuwGhWas0gvQ8m521hJNYWuSjTJxqWPaUbxa8kuNtuUn2bJxlUDb8gMzVQcgP4bupBU%2BBzpncIUos3dcOMys20bYgxADDHZTR%2FMIKn9rwGOqUB9jqQYRW0UWfqVXbkroCLGcWl3S1eAoliKoFxPy5HTfvzAI93uzopjWRAFEeUDatTSSssku0zKM1FkUuXSSQZS1%2Fcndj67GcIlZRFlVW1d5ZAE6ue5j4wUyJbjuofEmlQFOu7vgsTAlL9wSOFX6ElPqkqNtnzy4AvGWBOZK0zsrkWIZWEByaNiuJH0TxCFw%2BGuhUFmCE%2Bdvk%2B19sDYDqjJfuQicwH&X-Amz-Signature=3774d2f273c4b67a70072b86d05d2efa7e291db1234fad0feb5bd4155add41ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6MOW4R7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T040859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMs8zjxh47BEffZYTu56Hrn9xfZHARSUSARX2HneS%2FPAiEA3YsowrToPGL%2FesLXu2WWEZN3tATA9rZmrMT4hyX76hwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJpuYbc3%2FQWfw6fPqircA35wuMwM%2BZLGaOO6r7d4NqYtJ6Airj%2B8P%2Bsfd%2B90Zr0oVnk3ANMj6hoKUjBQaHoE%2BpYMqNhZAJsILcWI6oo6dEtekydZvaPIMM937UtD15COWQh3758K%2FcLAcQ5bivIJGgY5hItUqYpqYLf10tn%2FSUGo4N%2FBjpEIe%2Bi9f8USPtnFMw4wzgSvw26OXuPs3RouyC8jWwq3at1lVsUWUZWYnjfvRzEL4ZDUbDxKRcAp43ia6dJhKxffGd9BiRemp4mK1tsnAs%2BrnbASurUPohCfgOOgRvUy7YEFU3UheuT5nywQDWmaGPRbQEIM3z2Z6F28kL8gxuspyX1xIvyN482bRmlMYYN2P5OY1WE6wgtPRD%2Bm5AUMqbf0h3qaQf7uBHLR%2F9mtbw25ZwbXsVW7gVzei0dQOApRFVXEDb2j82cx8rCIbkw89jFwliGF4J87c21Tl8zAtgj26pFaxGn%2BqbMhYrzh%2Bxv47%2BKBcDXUC1tQQ4%2FLX1U5RqVj%2BbT6rpcGDFd26dVAcO3BoGtIiwLKXOPy%2BLB3PEfuwGhWas0gvQ8m521hJNYWuSjTJxqWPaUbxa8kuNtuUn2bJxlUDb8gMzVQcgP4bupBU%2BBzpncIUos3dcOMys20bYgxADDHZTR%2FMIKn9rwGOqUB9jqQYRW0UWfqVXbkroCLGcWl3S1eAoliKoFxPy5HTfvzAI93uzopjWRAFEeUDatTSSssku0zKM1FkUuXSSQZS1%2Fcndj67GcIlZRFlVW1d5ZAE6ue5j4wUyJbjuofEmlQFOu7vgsTAlL9wSOFX6ElPqkqNtnzy4AvGWBOZK0zsrkWIZWEByaNiuJH0TxCFw%2BGuhUFmCE%2Bdvk%2B19sDYDqjJfuQicwH&X-Amz-Signature=0cc650cd83f465c7764e3f229a3ba517a50224a1d09d89635c20617da8ac0429&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
