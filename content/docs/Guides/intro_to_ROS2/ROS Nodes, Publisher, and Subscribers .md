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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX2OS76%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkJAR%2BZV2qnql4rAlFAJjjLnsxnF2%2BJrobpP54ElNZOAIgTUSbvxrQQyvkyDHEvAMiJN5T5BEQJCR%2FRVeMIc%2FW6eMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTINzzip7wX1rcYHSrcA6uhUcPBzaILDRmn5zBjPLpUK9M2s6YSjRM4Ce9%2Bd6i9EZ%2BYOFJNq2q54dbZj0DNaxVdQ1II5A7fWI5X7i%2BQZZfzjZARkjV%2Fh%2FntQPqB1KzpB2kKJF%2Fz23eaMWeI%2F%2FHlrOIYCcNciYs9k0PHUmYL2VcmPl7Le2wjAhFNOQbmEOUrNpfJY%2F5Q2FuSzUxOryCC5nNVVXdzmZ4QQ140EPVgKqiSmKRvpV981HAH1jdEnaVJ8z2qlgKQa5xZOlFPivGnTgqIphoIo6hSz2l8D5trBfXz%2FkkEp3yoCLwpHpyeo6KY1%2FT%2FFZwt63LucD6MbZhlQ4G8%2Bw%2FcZewgTMBfM3Y6W226hZPWIFFj6Ch0SRO%2FLqHdSTW3fFzAFbKF3LS3%2BUmV%2FWNOPGa9UPZJceJMyZVk%2BvZDATfUG88828t4wK2eFx3nWwLxY09J4segPvC1DgtSzbrG7qFYZtlg8IGhWrIHztjTQIw5qDpW7OaLfkCgwWiHYLciQ3NHs6nB5EJZgOODVZJQLybk%2BwJr%2FbLHK0Jk449WqphzUINLO7xMFTqfoOuA92apQhsT3iAd3FMzGMwhpG%2F9tcVHfgwKnCOzZzzeCzrlSDmmSZRLKfVH6YujUw1byCTQBm%2BEu4YPBKysMOyv2MIGOqUBqJOEvq1iWc8vhrC79qVimLUhgV9VloMpt%2FXUjOc6282WIXcb4nQD8icFd02wHYdmiocgSKiM5YhRPVDV1WwPPN4c1TjH%2FyS8jdMEFQoSORB8o%2BjqVLW2mcbHKzINxsCNNS7AJIaSMivTvmo%2FOVh0F0AbI1FkVZeEI7H2euoWztp2HXIzaCyhW7%2FvSs3sD76mZ5215JX8CGkmzfkSnjq9nM2OqqIz&X-Amz-Signature=6a12e7b4aaff3b576cd4954c81b09c6723492197b748529eeae4047d1deee2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX2OS76%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkJAR%2BZV2qnql4rAlFAJjjLnsxnF2%2BJrobpP54ElNZOAIgTUSbvxrQQyvkyDHEvAMiJN5T5BEQJCR%2FRVeMIc%2FW6eMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTINzzip7wX1rcYHSrcA6uhUcPBzaILDRmn5zBjPLpUK9M2s6YSjRM4Ce9%2Bd6i9EZ%2BYOFJNq2q54dbZj0DNaxVdQ1II5A7fWI5X7i%2BQZZfzjZARkjV%2Fh%2FntQPqB1KzpB2kKJF%2Fz23eaMWeI%2F%2FHlrOIYCcNciYs9k0PHUmYL2VcmPl7Le2wjAhFNOQbmEOUrNpfJY%2F5Q2FuSzUxOryCC5nNVVXdzmZ4QQ140EPVgKqiSmKRvpV981HAH1jdEnaVJ8z2qlgKQa5xZOlFPivGnTgqIphoIo6hSz2l8D5trBfXz%2FkkEp3yoCLwpHpyeo6KY1%2FT%2FFZwt63LucD6MbZhlQ4G8%2Bw%2FcZewgTMBfM3Y6W226hZPWIFFj6Ch0SRO%2FLqHdSTW3fFzAFbKF3LS3%2BUmV%2FWNOPGa9UPZJceJMyZVk%2BvZDATfUG88828t4wK2eFx3nWwLxY09J4segPvC1DgtSzbrG7qFYZtlg8IGhWrIHztjTQIw5qDpW7OaLfkCgwWiHYLciQ3NHs6nB5EJZgOODVZJQLybk%2BwJr%2FbLHK0Jk449WqphzUINLO7xMFTqfoOuA92apQhsT3iAd3FMzGMwhpG%2F9tcVHfgwKnCOzZzzeCzrlSDmmSZRLKfVH6YujUw1byCTQBm%2BEu4YPBKysMOyv2MIGOqUBqJOEvq1iWc8vhrC79qVimLUhgV9VloMpt%2FXUjOc6282WIXcb4nQD8icFd02wHYdmiocgSKiM5YhRPVDV1WwPPN4c1TjH%2FyS8jdMEFQoSORB8o%2BjqVLW2mcbHKzINxsCNNS7AJIaSMivTvmo%2FOVh0F0AbI1FkVZeEI7H2euoWztp2HXIzaCyhW7%2FvSs3sD76mZ5215JX8CGkmzfkSnjq9nM2OqqIz&X-Amz-Signature=64611d41e597055f198dc41a1a24e03d2cda1e3b43a953dbbcd809fe80a7c835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX2OS76%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkJAR%2BZV2qnql4rAlFAJjjLnsxnF2%2BJrobpP54ElNZOAIgTUSbvxrQQyvkyDHEvAMiJN5T5BEQJCR%2FRVeMIc%2FW6eMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTINzzip7wX1rcYHSrcA6uhUcPBzaILDRmn5zBjPLpUK9M2s6YSjRM4Ce9%2Bd6i9EZ%2BYOFJNq2q54dbZj0DNaxVdQ1II5A7fWI5X7i%2BQZZfzjZARkjV%2Fh%2FntQPqB1KzpB2kKJF%2Fz23eaMWeI%2F%2FHlrOIYCcNciYs9k0PHUmYL2VcmPl7Le2wjAhFNOQbmEOUrNpfJY%2F5Q2FuSzUxOryCC5nNVVXdzmZ4QQ140EPVgKqiSmKRvpV981HAH1jdEnaVJ8z2qlgKQa5xZOlFPivGnTgqIphoIo6hSz2l8D5trBfXz%2FkkEp3yoCLwpHpyeo6KY1%2FT%2FFZwt63LucD6MbZhlQ4G8%2Bw%2FcZewgTMBfM3Y6W226hZPWIFFj6Ch0SRO%2FLqHdSTW3fFzAFbKF3LS3%2BUmV%2FWNOPGa9UPZJceJMyZVk%2BvZDATfUG88828t4wK2eFx3nWwLxY09J4segPvC1DgtSzbrG7qFYZtlg8IGhWrIHztjTQIw5qDpW7OaLfkCgwWiHYLciQ3NHs6nB5EJZgOODVZJQLybk%2BwJr%2FbLHK0Jk449WqphzUINLO7xMFTqfoOuA92apQhsT3iAd3FMzGMwhpG%2F9tcVHfgwKnCOzZzzeCzrlSDmmSZRLKfVH6YujUw1byCTQBm%2BEu4YPBKysMOyv2MIGOqUBqJOEvq1iWc8vhrC79qVimLUhgV9VloMpt%2FXUjOc6282WIXcb4nQD8icFd02wHYdmiocgSKiM5YhRPVDV1WwPPN4c1TjH%2FyS8jdMEFQoSORB8o%2BjqVLW2mcbHKzINxsCNNS7AJIaSMivTvmo%2FOVh0F0AbI1FkVZeEI7H2euoWztp2HXIzaCyhW7%2FvSs3sD76mZ5215JX8CGkmzfkSnjq9nM2OqqIz&X-Amz-Signature=7388e9213082125e9a3b6b182e6314bd172281ebaa3e60b91e6ad11f3449ae39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX2OS76%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkJAR%2BZV2qnql4rAlFAJjjLnsxnF2%2BJrobpP54ElNZOAIgTUSbvxrQQyvkyDHEvAMiJN5T5BEQJCR%2FRVeMIc%2FW6eMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTINzzip7wX1rcYHSrcA6uhUcPBzaILDRmn5zBjPLpUK9M2s6YSjRM4Ce9%2Bd6i9EZ%2BYOFJNq2q54dbZj0DNaxVdQ1II5A7fWI5X7i%2BQZZfzjZARkjV%2Fh%2FntQPqB1KzpB2kKJF%2Fz23eaMWeI%2F%2FHlrOIYCcNciYs9k0PHUmYL2VcmPl7Le2wjAhFNOQbmEOUrNpfJY%2F5Q2FuSzUxOryCC5nNVVXdzmZ4QQ140EPVgKqiSmKRvpV981HAH1jdEnaVJ8z2qlgKQa5xZOlFPivGnTgqIphoIo6hSz2l8D5trBfXz%2FkkEp3yoCLwpHpyeo6KY1%2FT%2FFZwt63LucD6MbZhlQ4G8%2Bw%2FcZewgTMBfM3Y6W226hZPWIFFj6Ch0SRO%2FLqHdSTW3fFzAFbKF3LS3%2BUmV%2FWNOPGa9UPZJceJMyZVk%2BvZDATfUG88828t4wK2eFx3nWwLxY09J4segPvC1DgtSzbrG7qFYZtlg8IGhWrIHztjTQIw5qDpW7OaLfkCgwWiHYLciQ3NHs6nB5EJZgOODVZJQLybk%2BwJr%2FbLHK0Jk449WqphzUINLO7xMFTqfoOuA92apQhsT3iAd3FMzGMwhpG%2F9tcVHfgwKnCOzZzzeCzrlSDmmSZRLKfVH6YujUw1byCTQBm%2BEu4YPBKysMOyv2MIGOqUBqJOEvq1iWc8vhrC79qVimLUhgV9VloMpt%2FXUjOc6282WIXcb4nQD8icFd02wHYdmiocgSKiM5YhRPVDV1WwPPN4c1TjH%2FyS8jdMEFQoSORB8o%2BjqVLW2mcbHKzINxsCNNS7AJIaSMivTvmo%2FOVh0F0AbI1FkVZeEI7H2euoWztp2HXIzaCyhW7%2FvSs3sD76mZ5215JX8CGkmzfkSnjq9nM2OqqIz&X-Amz-Signature=e9a966f74d5af7f837bb7e2212dcc4f9c9352b5132ad009d224791a73051c88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX2OS76%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkJAR%2BZV2qnql4rAlFAJjjLnsxnF2%2BJrobpP54ElNZOAIgTUSbvxrQQyvkyDHEvAMiJN5T5BEQJCR%2FRVeMIc%2FW6eMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTINzzip7wX1rcYHSrcA6uhUcPBzaILDRmn5zBjPLpUK9M2s6YSjRM4Ce9%2Bd6i9EZ%2BYOFJNq2q54dbZj0DNaxVdQ1II5A7fWI5X7i%2BQZZfzjZARkjV%2Fh%2FntQPqB1KzpB2kKJF%2Fz23eaMWeI%2F%2FHlrOIYCcNciYs9k0PHUmYL2VcmPl7Le2wjAhFNOQbmEOUrNpfJY%2F5Q2FuSzUxOryCC5nNVVXdzmZ4QQ140EPVgKqiSmKRvpV981HAH1jdEnaVJ8z2qlgKQa5xZOlFPivGnTgqIphoIo6hSz2l8D5trBfXz%2FkkEp3yoCLwpHpyeo6KY1%2FT%2FFZwt63LucD6MbZhlQ4G8%2Bw%2FcZewgTMBfM3Y6W226hZPWIFFj6Ch0SRO%2FLqHdSTW3fFzAFbKF3LS3%2BUmV%2FWNOPGa9UPZJceJMyZVk%2BvZDATfUG88828t4wK2eFx3nWwLxY09J4segPvC1DgtSzbrG7qFYZtlg8IGhWrIHztjTQIw5qDpW7OaLfkCgwWiHYLciQ3NHs6nB5EJZgOODVZJQLybk%2BwJr%2FbLHK0Jk449WqphzUINLO7xMFTqfoOuA92apQhsT3iAd3FMzGMwhpG%2F9tcVHfgwKnCOzZzzeCzrlSDmmSZRLKfVH6YujUw1byCTQBm%2BEu4YPBKysMOyv2MIGOqUBqJOEvq1iWc8vhrC79qVimLUhgV9VloMpt%2FXUjOc6282WIXcb4nQD8icFd02wHYdmiocgSKiM5YhRPVDV1WwPPN4c1TjH%2FyS8jdMEFQoSORB8o%2BjqVLW2mcbHKzINxsCNNS7AJIaSMivTvmo%2FOVh0F0AbI1FkVZeEI7H2euoWztp2HXIzaCyhW7%2FvSs3sD76mZ5215JX8CGkmzfkSnjq9nM2OqqIz&X-Amz-Signature=1eea15febada552b9fbae0e3ce841d6f91cdab47bd66430e56cadd05408ae6a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX2OS76%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkJAR%2BZV2qnql4rAlFAJjjLnsxnF2%2BJrobpP54ElNZOAIgTUSbvxrQQyvkyDHEvAMiJN5T5BEQJCR%2FRVeMIc%2FW6eMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTINzzip7wX1rcYHSrcA6uhUcPBzaILDRmn5zBjPLpUK9M2s6YSjRM4Ce9%2Bd6i9EZ%2BYOFJNq2q54dbZj0DNaxVdQ1II5A7fWI5X7i%2BQZZfzjZARkjV%2Fh%2FntQPqB1KzpB2kKJF%2Fz23eaMWeI%2F%2FHlrOIYCcNciYs9k0PHUmYL2VcmPl7Le2wjAhFNOQbmEOUrNpfJY%2F5Q2FuSzUxOryCC5nNVVXdzmZ4QQ140EPVgKqiSmKRvpV981HAH1jdEnaVJ8z2qlgKQa5xZOlFPivGnTgqIphoIo6hSz2l8D5trBfXz%2FkkEp3yoCLwpHpyeo6KY1%2FT%2FFZwt63LucD6MbZhlQ4G8%2Bw%2FcZewgTMBfM3Y6W226hZPWIFFj6Ch0SRO%2FLqHdSTW3fFzAFbKF3LS3%2BUmV%2FWNOPGa9UPZJceJMyZVk%2BvZDATfUG88828t4wK2eFx3nWwLxY09J4segPvC1DgtSzbrG7qFYZtlg8IGhWrIHztjTQIw5qDpW7OaLfkCgwWiHYLciQ3NHs6nB5EJZgOODVZJQLybk%2BwJr%2FbLHK0Jk449WqphzUINLO7xMFTqfoOuA92apQhsT3iAd3FMzGMwhpG%2F9tcVHfgwKnCOzZzzeCzrlSDmmSZRLKfVH6YujUw1byCTQBm%2BEu4YPBKysMOyv2MIGOqUBqJOEvq1iWc8vhrC79qVimLUhgV9VloMpt%2FXUjOc6282WIXcb4nQD8icFd02wHYdmiocgSKiM5YhRPVDV1WwPPN4c1TjH%2FyS8jdMEFQoSORB8o%2BjqVLW2mcbHKzINxsCNNS7AJIaSMivTvmo%2FOVh0F0AbI1FkVZeEI7H2euoWztp2HXIzaCyhW7%2FvSs3sD76mZ5215JX8CGkmzfkSnjq9nM2OqqIz&X-Amz-Signature=16b6a8f9031bf256d783f5c03e60bf1436b61405dd9aa8649a4dc71738c1b02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX2OS76%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkJAR%2BZV2qnql4rAlFAJjjLnsxnF2%2BJrobpP54ElNZOAIgTUSbvxrQQyvkyDHEvAMiJN5T5BEQJCR%2FRVeMIc%2FW6eMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTINzzip7wX1rcYHSrcA6uhUcPBzaILDRmn5zBjPLpUK9M2s6YSjRM4Ce9%2Bd6i9EZ%2BYOFJNq2q54dbZj0DNaxVdQ1II5A7fWI5X7i%2BQZZfzjZARkjV%2Fh%2FntQPqB1KzpB2kKJF%2Fz23eaMWeI%2F%2FHlrOIYCcNciYs9k0PHUmYL2VcmPl7Le2wjAhFNOQbmEOUrNpfJY%2F5Q2FuSzUxOryCC5nNVVXdzmZ4QQ140EPVgKqiSmKRvpV981HAH1jdEnaVJ8z2qlgKQa5xZOlFPivGnTgqIphoIo6hSz2l8D5trBfXz%2FkkEp3yoCLwpHpyeo6KY1%2FT%2FFZwt63LucD6MbZhlQ4G8%2Bw%2FcZewgTMBfM3Y6W226hZPWIFFj6Ch0SRO%2FLqHdSTW3fFzAFbKF3LS3%2BUmV%2FWNOPGa9UPZJceJMyZVk%2BvZDATfUG88828t4wK2eFx3nWwLxY09J4segPvC1DgtSzbrG7qFYZtlg8IGhWrIHztjTQIw5qDpW7OaLfkCgwWiHYLciQ3NHs6nB5EJZgOODVZJQLybk%2BwJr%2FbLHK0Jk449WqphzUINLO7xMFTqfoOuA92apQhsT3iAd3FMzGMwhpG%2F9tcVHfgwKnCOzZzzeCzrlSDmmSZRLKfVH6YujUw1byCTQBm%2BEu4YPBKysMOyv2MIGOqUBqJOEvq1iWc8vhrC79qVimLUhgV9VloMpt%2FXUjOc6282WIXcb4nQD8icFd02wHYdmiocgSKiM5YhRPVDV1WwPPN4c1TjH%2FyS8jdMEFQoSORB8o%2BjqVLW2mcbHKzINxsCNNS7AJIaSMivTvmo%2FOVh0F0AbI1FkVZeEI7H2euoWztp2HXIzaCyhW7%2FvSs3sD76mZ5215JX8CGkmzfkSnjq9nM2OqqIz&X-Amz-Signature=5000fef6f074bedc264854980d9c94fb6ef6bbbe44d3102f91e9ec56abedb965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHX2OS76%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkJAR%2BZV2qnql4rAlFAJjjLnsxnF2%2BJrobpP54ElNZOAIgTUSbvxrQQyvkyDHEvAMiJN5T5BEQJCR%2FRVeMIc%2FW6eMqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTINzzip7wX1rcYHSrcA6uhUcPBzaILDRmn5zBjPLpUK9M2s6YSjRM4Ce9%2Bd6i9EZ%2BYOFJNq2q54dbZj0DNaxVdQ1II5A7fWI5X7i%2BQZZfzjZARkjV%2Fh%2FntQPqB1KzpB2kKJF%2Fz23eaMWeI%2F%2FHlrOIYCcNciYs9k0PHUmYL2VcmPl7Le2wjAhFNOQbmEOUrNpfJY%2F5Q2FuSzUxOryCC5nNVVXdzmZ4QQ140EPVgKqiSmKRvpV981HAH1jdEnaVJ8z2qlgKQa5xZOlFPivGnTgqIphoIo6hSz2l8D5trBfXz%2FkkEp3yoCLwpHpyeo6KY1%2FT%2FFZwt63LucD6MbZhlQ4G8%2Bw%2FcZewgTMBfM3Y6W226hZPWIFFj6Ch0SRO%2FLqHdSTW3fFzAFbKF3LS3%2BUmV%2FWNOPGa9UPZJceJMyZVk%2BvZDATfUG88828t4wK2eFx3nWwLxY09J4segPvC1DgtSzbrG7qFYZtlg8IGhWrIHztjTQIw5qDpW7OaLfkCgwWiHYLciQ3NHs6nB5EJZgOODVZJQLybk%2BwJr%2FbLHK0Jk449WqphzUINLO7xMFTqfoOuA92apQhsT3iAd3FMzGMwhpG%2F9tcVHfgwKnCOzZzzeCzrlSDmmSZRLKfVH6YujUw1byCTQBm%2BEu4YPBKysMOyv2MIGOqUBqJOEvq1iWc8vhrC79qVimLUhgV9VloMpt%2FXUjOc6282WIXcb4nQD8icFd02wHYdmiocgSKiM5YhRPVDV1WwPPN4c1TjH%2FyS8jdMEFQoSORB8o%2BjqVLW2mcbHKzINxsCNNS7AJIaSMivTvmo%2FOVh0F0AbI1FkVZeEI7H2euoWztp2HXIzaCyhW7%2FvSs3sD76mZ5215JX8CGkmzfkSnjq9nM2OqqIz&X-Amz-Signature=0d77f7044568033569f972671137da7a2df29741fa6d5bc7eef8317409fe3f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
