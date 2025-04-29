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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNY4KGF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8o7zZoIijLIhq6DAHx99CizkQwj411zZBm58Q2NaQvAiEA4uFC1%2FYdwEOWybW%2Fd1z%2Bm%2F9y0YKVoqIHyO4%2FTHrlSkAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BkGBVL1jTuccEx9SrcA27hG85CJ4c5UC2rLGTKCEir6Kyjq0Tv8g%2B2%2F3e70r8zGE8eAhVwqdUbWZbmDuKevTmPQirSwT4%2BFMQTabNMHIQJ3GmQ5CWVZd51v9nCTBaIHThCl9qzz56YO39HSuvHByfGhJgiYXlmjYiQa%2BBzV3VFt432IEgijR6xeHetVBnq5wn0QO5lUXA%2BXchCmKMn4lUltp8pP%2BDVddZn2BaijKy%2FImTcXTvqko14w4wqPXsCyv6MAqO%2F8LfQuKrm%2Bh%2FsGjaUFcGDTqqortiRgqbw9AdsOVnce0NUZLr%2BGQgH%2BhncK%2B9LH9cELypFwHIr29tR9%2BJfz0BmSsGAAJafa%2FradaUdyB5L6DAkpCfXG7v%2B9JcqJGj6o%2FVaAJ0S6Ny8KcqIFXF8sXyoSs3zBdjInGdA%2BZm6XB6kUCKZZKuOoWmyGZeW7ROcxmaBAzmqEjfV0xkoYyp9PezUqpHDqPkwcM6b9g1dT4FBA6w%2F1U7jxNEjhJvRVHJv5GydVqioTNEONkhqaaKXY9yniZWmYyclbZnk7JBQjE4SCErZQegBhc28uRqNIZR6lKJZdXu3WjEVE%2B3aCzkBrq5niv9cmkNdxEcDpm9beVDISffSdoyQCMemlgmArMklKzHePDrM%2Fsf1ML%2Fbw8AGOqUBI1mxPbVPNKNlgpt9JRTDauks4HcIDbuKMmzL50gEkLUdXJrJr8zDNLLBMLayUYlbgbg2KWoxAcSmDUdck4K67A%2Frdc%2Bm16jWPGgFXOCq62DzaOGl%2BJ%2Fg3I3MK55IaBvrBzFKr8MARF9BdF7uEJNGgsiPFb9%2FsbWcRH4lGyJgNjKukMoNYpbWo6R5z5pPZdDmadGA2C7%2Fo4JzAawHMCAHFds2etcb&X-Amz-Signature=41abe5541e19820a3a0446b425ce65ed9f4264f6ea0b15ec8c2fea20fe9ac351&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNY4KGF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8o7zZoIijLIhq6DAHx99CizkQwj411zZBm58Q2NaQvAiEA4uFC1%2FYdwEOWybW%2Fd1z%2Bm%2F9y0YKVoqIHyO4%2FTHrlSkAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BkGBVL1jTuccEx9SrcA27hG85CJ4c5UC2rLGTKCEir6Kyjq0Tv8g%2B2%2F3e70r8zGE8eAhVwqdUbWZbmDuKevTmPQirSwT4%2BFMQTabNMHIQJ3GmQ5CWVZd51v9nCTBaIHThCl9qzz56YO39HSuvHByfGhJgiYXlmjYiQa%2BBzV3VFt432IEgijR6xeHetVBnq5wn0QO5lUXA%2BXchCmKMn4lUltp8pP%2BDVddZn2BaijKy%2FImTcXTvqko14w4wqPXsCyv6MAqO%2F8LfQuKrm%2Bh%2FsGjaUFcGDTqqortiRgqbw9AdsOVnce0NUZLr%2BGQgH%2BhncK%2B9LH9cELypFwHIr29tR9%2BJfz0BmSsGAAJafa%2FradaUdyB5L6DAkpCfXG7v%2B9JcqJGj6o%2FVaAJ0S6Ny8KcqIFXF8sXyoSs3zBdjInGdA%2BZm6XB6kUCKZZKuOoWmyGZeW7ROcxmaBAzmqEjfV0xkoYyp9PezUqpHDqPkwcM6b9g1dT4FBA6w%2F1U7jxNEjhJvRVHJv5GydVqioTNEONkhqaaKXY9yniZWmYyclbZnk7JBQjE4SCErZQegBhc28uRqNIZR6lKJZdXu3WjEVE%2B3aCzkBrq5niv9cmkNdxEcDpm9beVDISffSdoyQCMemlgmArMklKzHePDrM%2Fsf1ML%2Fbw8AGOqUBI1mxPbVPNKNlgpt9JRTDauks4HcIDbuKMmzL50gEkLUdXJrJr8zDNLLBMLayUYlbgbg2KWoxAcSmDUdck4K67A%2Frdc%2Bm16jWPGgFXOCq62DzaOGl%2BJ%2Fg3I3MK55IaBvrBzFKr8MARF9BdF7uEJNGgsiPFb9%2FsbWcRH4lGyJgNjKukMoNYpbWo6R5z5pPZdDmadGA2C7%2Fo4JzAawHMCAHFds2etcb&X-Amz-Signature=9b4c82d14796bf3c43cecfdbc8d4b1c310d579ab183451a376c285efcdba4a61&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNY4KGF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8o7zZoIijLIhq6DAHx99CizkQwj411zZBm58Q2NaQvAiEA4uFC1%2FYdwEOWybW%2Fd1z%2Bm%2F9y0YKVoqIHyO4%2FTHrlSkAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BkGBVL1jTuccEx9SrcA27hG85CJ4c5UC2rLGTKCEir6Kyjq0Tv8g%2B2%2F3e70r8zGE8eAhVwqdUbWZbmDuKevTmPQirSwT4%2BFMQTabNMHIQJ3GmQ5CWVZd51v9nCTBaIHThCl9qzz56YO39HSuvHByfGhJgiYXlmjYiQa%2BBzV3VFt432IEgijR6xeHetVBnq5wn0QO5lUXA%2BXchCmKMn4lUltp8pP%2BDVddZn2BaijKy%2FImTcXTvqko14w4wqPXsCyv6MAqO%2F8LfQuKrm%2Bh%2FsGjaUFcGDTqqortiRgqbw9AdsOVnce0NUZLr%2BGQgH%2BhncK%2B9LH9cELypFwHIr29tR9%2BJfz0BmSsGAAJafa%2FradaUdyB5L6DAkpCfXG7v%2B9JcqJGj6o%2FVaAJ0S6Ny8KcqIFXF8sXyoSs3zBdjInGdA%2BZm6XB6kUCKZZKuOoWmyGZeW7ROcxmaBAzmqEjfV0xkoYyp9PezUqpHDqPkwcM6b9g1dT4FBA6w%2F1U7jxNEjhJvRVHJv5GydVqioTNEONkhqaaKXY9yniZWmYyclbZnk7JBQjE4SCErZQegBhc28uRqNIZR6lKJZdXu3WjEVE%2B3aCzkBrq5niv9cmkNdxEcDpm9beVDISffSdoyQCMemlgmArMklKzHePDrM%2Fsf1ML%2Fbw8AGOqUBI1mxPbVPNKNlgpt9JRTDauks4HcIDbuKMmzL50gEkLUdXJrJr8zDNLLBMLayUYlbgbg2KWoxAcSmDUdck4K67A%2Frdc%2Bm16jWPGgFXOCq62DzaOGl%2BJ%2Fg3I3MK55IaBvrBzFKr8MARF9BdF7uEJNGgsiPFb9%2FsbWcRH4lGyJgNjKukMoNYpbWo6R5z5pPZdDmadGA2C7%2Fo4JzAawHMCAHFds2etcb&X-Amz-Signature=9fc2d33b7f994feeb3e0c38047191e350259bb10dea5e1d043567c119583cca7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNY4KGF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8o7zZoIijLIhq6DAHx99CizkQwj411zZBm58Q2NaQvAiEA4uFC1%2FYdwEOWybW%2Fd1z%2Bm%2F9y0YKVoqIHyO4%2FTHrlSkAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BkGBVL1jTuccEx9SrcA27hG85CJ4c5UC2rLGTKCEir6Kyjq0Tv8g%2B2%2F3e70r8zGE8eAhVwqdUbWZbmDuKevTmPQirSwT4%2BFMQTabNMHIQJ3GmQ5CWVZd51v9nCTBaIHThCl9qzz56YO39HSuvHByfGhJgiYXlmjYiQa%2BBzV3VFt432IEgijR6xeHetVBnq5wn0QO5lUXA%2BXchCmKMn4lUltp8pP%2BDVddZn2BaijKy%2FImTcXTvqko14w4wqPXsCyv6MAqO%2F8LfQuKrm%2Bh%2FsGjaUFcGDTqqortiRgqbw9AdsOVnce0NUZLr%2BGQgH%2BhncK%2B9LH9cELypFwHIr29tR9%2BJfz0BmSsGAAJafa%2FradaUdyB5L6DAkpCfXG7v%2B9JcqJGj6o%2FVaAJ0S6Ny8KcqIFXF8sXyoSs3zBdjInGdA%2BZm6XB6kUCKZZKuOoWmyGZeW7ROcxmaBAzmqEjfV0xkoYyp9PezUqpHDqPkwcM6b9g1dT4FBA6w%2F1U7jxNEjhJvRVHJv5GydVqioTNEONkhqaaKXY9yniZWmYyclbZnk7JBQjE4SCErZQegBhc28uRqNIZR6lKJZdXu3WjEVE%2B3aCzkBrq5niv9cmkNdxEcDpm9beVDISffSdoyQCMemlgmArMklKzHePDrM%2Fsf1ML%2Fbw8AGOqUBI1mxPbVPNKNlgpt9JRTDauks4HcIDbuKMmzL50gEkLUdXJrJr8zDNLLBMLayUYlbgbg2KWoxAcSmDUdck4K67A%2Frdc%2Bm16jWPGgFXOCq62DzaOGl%2BJ%2Fg3I3MK55IaBvrBzFKr8MARF9BdF7uEJNGgsiPFb9%2FsbWcRH4lGyJgNjKukMoNYpbWo6R5z5pPZdDmadGA2C7%2Fo4JzAawHMCAHFds2etcb&X-Amz-Signature=68b892dbd132f656ae168d36ef888b1e8bc092de00cc3917ecba1b0877cd224d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNY4KGF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8o7zZoIijLIhq6DAHx99CizkQwj411zZBm58Q2NaQvAiEA4uFC1%2FYdwEOWybW%2Fd1z%2Bm%2F9y0YKVoqIHyO4%2FTHrlSkAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BkGBVL1jTuccEx9SrcA27hG85CJ4c5UC2rLGTKCEir6Kyjq0Tv8g%2B2%2F3e70r8zGE8eAhVwqdUbWZbmDuKevTmPQirSwT4%2BFMQTabNMHIQJ3GmQ5CWVZd51v9nCTBaIHThCl9qzz56YO39HSuvHByfGhJgiYXlmjYiQa%2BBzV3VFt432IEgijR6xeHetVBnq5wn0QO5lUXA%2BXchCmKMn4lUltp8pP%2BDVddZn2BaijKy%2FImTcXTvqko14w4wqPXsCyv6MAqO%2F8LfQuKrm%2Bh%2FsGjaUFcGDTqqortiRgqbw9AdsOVnce0NUZLr%2BGQgH%2BhncK%2B9LH9cELypFwHIr29tR9%2BJfz0BmSsGAAJafa%2FradaUdyB5L6DAkpCfXG7v%2B9JcqJGj6o%2FVaAJ0S6Ny8KcqIFXF8sXyoSs3zBdjInGdA%2BZm6XB6kUCKZZKuOoWmyGZeW7ROcxmaBAzmqEjfV0xkoYyp9PezUqpHDqPkwcM6b9g1dT4FBA6w%2F1U7jxNEjhJvRVHJv5GydVqioTNEONkhqaaKXY9yniZWmYyclbZnk7JBQjE4SCErZQegBhc28uRqNIZR6lKJZdXu3WjEVE%2B3aCzkBrq5niv9cmkNdxEcDpm9beVDISffSdoyQCMemlgmArMklKzHePDrM%2Fsf1ML%2Fbw8AGOqUBI1mxPbVPNKNlgpt9JRTDauks4HcIDbuKMmzL50gEkLUdXJrJr8zDNLLBMLayUYlbgbg2KWoxAcSmDUdck4K67A%2Frdc%2Bm16jWPGgFXOCq62DzaOGl%2BJ%2Fg3I3MK55IaBvrBzFKr8MARF9BdF7uEJNGgsiPFb9%2FsbWcRH4lGyJgNjKukMoNYpbWo6R5z5pPZdDmadGA2C7%2Fo4JzAawHMCAHFds2etcb&X-Amz-Signature=b3fe5a3772d9965d44a1bf3cf413152761379c978e66e4b104873dbf00374895&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNY4KGF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8o7zZoIijLIhq6DAHx99CizkQwj411zZBm58Q2NaQvAiEA4uFC1%2FYdwEOWybW%2Fd1z%2Bm%2F9y0YKVoqIHyO4%2FTHrlSkAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BkGBVL1jTuccEx9SrcA27hG85CJ4c5UC2rLGTKCEir6Kyjq0Tv8g%2B2%2F3e70r8zGE8eAhVwqdUbWZbmDuKevTmPQirSwT4%2BFMQTabNMHIQJ3GmQ5CWVZd51v9nCTBaIHThCl9qzz56YO39HSuvHByfGhJgiYXlmjYiQa%2BBzV3VFt432IEgijR6xeHetVBnq5wn0QO5lUXA%2BXchCmKMn4lUltp8pP%2BDVddZn2BaijKy%2FImTcXTvqko14w4wqPXsCyv6MAqO%2F8LfQuKrm%2Bh%2FsGjaUFcGDTqqortiRgqbw9AdsOVnce0NUZLr%2BGQgH%2BhncK%2B9LH9cELypFwHIr29tR9%2BJfz0BmSsGAAJafa%2FradaUdyB5L6DAkpCfXG7v%2B9JcqJGj6o%2FVaAJ0S6Ny8KcqIFXF8sXyoSs3zBdjInGdA%2BZm6XB6kUCKZZKuOoWmyGZeW7ROcxmaBAzmqEjfV0xkoYyp9PezUqpHDqPkwcM6b9g1dT4FBA6w%2F1U7jxNEjhJvRVHJv5GydVqioTNEONkhqaaKXY9yniZWmYyclbZnk7JBQjE4SCErZQegBhc28uRqNIZR6lKJZdXu3WjEVE%2B3aCzkBrq5niv9cmkNdxEcDpm9beVDISffSdoyQCMemlgmArMklKzHePDrM%2Fsf1ML%2Fbw8AGOqUBI1mxPbVPNKNlgpt9JRTDauks4HcIDbuKMmzL50gEkLUdXJrJr8zDNLLBMLayUYlbgbg2KWoxAcSmDUdck4K67A%2Frdc%2Bm16jWPGgFXOCq62DzaOGl%2BJ%2Fg3I3MK55IaBvrBzFKr8MARF9BdF7uEJNGgsiPFb9%2FsbWcRH4lGyJgNjKukMoNYpbWo6R5z5pPZdDmadGA2C7%2Fo4JzAawHMCAHFds2etcb&X-Amz-Signature=56f88ae0d41bfe90c8171bbe817db059a02c9678bebf3d7642a9181d60a0c5df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNY4KGF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8o7zZoIijLIhq6DAHx99CizkQwj411zZBm58Q2NaQvAiEA4uFC1%2FYdwEOWybW%2Fd1z%2Bm%2F9y0YKVoqIHyO4%2FTHrlSkAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BkGBVL1jTuccEx9SrcA27hG85CJ4c5UC2rLGTKCEir6Kyjq0Tv8g%2B2%2F3e70r8zGE8eAhVwqdUbWZbmDuKevTmPQirSwT4%2BFMQTabNMHIQJ3GmQ5CWVZd51v9nCTBaIHThCl9qzz56YO39HSuvHByfGhJgiYXlmjYiQa%2BBzV3VFt432IEgijR6xeHetVBnq5wn0QO5lUXA%2BXchCmKMn4lUltp8pP%2BDVddZn2BaijKy%2FImTcXTvqko14w4wqPXsCyv6MAqO%2F8LfQuKrm%2Bh%2FsGjaUFcGDTqqortiRgqbw9AdsOVnce0NUZLr%2BGQgH%2BhncK%2B9LH9cELypFwHIr29tR9%2BJfz0BmSsGAAJafa%2FradaUdyB5L6DAkpCfXG7v%2B9JcqJGj6o%2FVaAJ0S6Ny8KcqIFXF8sXyoSs3zBdjInGdA%2BZm6XB6kUCKZZKuOoWmyGZeW7ROcxmaBAzmqEjfV0xkoYyp9PezUqpHDqPkwcM6b9g1dT4FBA6w%2F1U7jxNEjhJvRVHJv5GydVqioTNEONkhqaaKXY9yniZWmYyclbZnk7JBQjE4SCErZQegBhc28uRqNIZR6lKJZdXu3WjEVE%2B3aCzkBrq5niv9cmkNdxEcDpm9beVDISffSdoyQCMemlgmArMklKzHePDrM%2Fsf1ML%2Fbw8AGOqUBI1mxPbVPNKNlgpt9JRTDauks4HcIDbuKMmzL50gEkLUdXJrJr8zDNLLBMLayUYlbgbg2KWoxAcSmDUdck4K67A%2Frdc%2Bm16jWPGgFXOCq62DzaOGl%2BJ%2Fg3I3MK55IaBvrBzFKr8MARF9BdF7uEJNGgsiPFb9%2FsbWcRH4lGyJgNjKukMoNYpbWo6R5z5pPZdDmadGA2C7%2Fo4JzAawHMCAHFds2etcb&X-Amz-Signature=4975eb49374a01c75985ecdcfae017299c788749dadbdb1c727d5e48aecf1cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNY4KGF%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T161037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8o7zZoIijLIhq6DAHx99CizkQwj411zZBm58Q2NaQvAiEA4uFC1%2FYdwEOWybW%2Fd1z%2Bm%2F9y0YKVoqIHyO4%2FTHrlSkAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BkGBVL1jTuccEx9SrcA27hG85CJ4c5UC2rLGTKCEir6Kyjq0Tv8g%2B2%2F3e70r8zGE8eAhVwqdUbWZbmDuKevTmPQirSwT4%2BFMQTabNMHIQJ3GmQ5CWVZd51v9nCTBaIHThCl9qzz56YO39HSuvHByfGhJgiYXlmjYiQa%2BBzV3VFt432IEgijR6xeHetVBnq5wn0QO5lUXA%2BXchCmKMn4lUltp8pP%2BDVddZn2BaijKy%2FImTcXTvqko14w4wqPXsCyv6MAqO%2F8LfQuKrm%2Bh%2FsGjaUFcGDTqqortiRgqbw9AdsOVnce0NUZLr%2BGQgH%2BhncK%2B9LH9cELypFwHIr29tR9%2BJfz0BmSsGAAJafa%2FradaUdyB5L6DAkpCfXG7v%2B9JcqJGj6o%2FVaAJ0S6Ny8KcqIFXF8sXyoSs3zBdjInGdA%2BZm6XB6kUCKZZKuOoWmyGZeW7ROcxmaBAzmqEjfV0xkoYyp9PezUqpHDqPkwcM6b9g1dT4FBA6w%2F1U7jxNEjhJvRVHJv5GydVqioTNEONkhqaaKXY9yniZWmYyclbZnk7JBQjE4SCErZQegBhc28uRqNIZR6lKJZdXu3WjEVE%2B3aCzkBrq5niv9cmkNdxEcDpm9beVDISffSdoyQCMemlgmArMklKzHePDrM%2Fsf1ML%2Fbw8AGOqUBI1mxPbVPNKNlgpt9JRTDauks4HcIDbuKMmzL50gEkLUdXJrJr8zDNLLBMLayUYlbgbg2KWoxAcSmDUdck4K67A%2Frdc%2Bm16jWPGgFXOCq62DzaOGl%2BJ%2Fg3I3MK55IaBvrBzFKr8MARF9BdF7uEJNGgsiPFb9%2FsbWcRH4lGyJgNjKukMoNYpbWo6R5z5pPZdDmadGA2C7%2Fo4JzAawHMCAHFds2etcb&X-Amz-Signature=cf1fc078a771ecb488f75610b4394c866a464646c6ee71cbf0c449c45febf61d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
