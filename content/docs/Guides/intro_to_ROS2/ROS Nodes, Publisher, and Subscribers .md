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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPENH5D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkjsWVublfKxh2V%2FMtmjFFhyeDL6NP73I3wBaepi4u5AIgUryi1%2FZc9dKtuhM0mplBewXBtoMVDK9UbEPofsK70sMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbwiWW9q1fIPqmEiircAy2gJQ1OOkl%2B%2FrkLKq0t6a3e0h%2FC%2BflZ0PEszpa8u2at2dmlhQV2MGnvabfRCugguIGFPLGOBXAkMo0Hv3O1POer5oe%2FNFKyLdQyMYxlNesTkYcQekV3iGOnVtJGcP1JeJfqfRQBJyiSfnHTx8E%2BmVb6ct1vciUKlSijoq675RiCX8W4bjB3OVM4vADlc3mkSpJOhOOKdEEM1i4mWlvd%2BnYhCLSax6eykG%2BQTlLDn70wpYWMaA2lop7XOu9%2FrYj1RTedeUc8wyt%2Bzt6L%2BOyzvO7CgxIk%2Bk91Yr5zBGnrIYNeIfdn908Gxm54jM2%2FYlBs25W5fUM3SoLXLlGGAYrirGteBR1QsY8392LH9PuYFnlekf5SspihEporKnkY24r2Nder2Kn4CMSCLiZenPGjm7dtyVoG%2FV%2FyHb%2FTmf%2Bz88pfU9HnkJXtFfccaStv0j1zWFp%2BPfPWkGkHIDuaDApZgRpvsDyAJDQ1TFQJNeNOGEpmKxIG0ejtTqzDAjbIBuga6wBiK8QsB4TuGzBgRRIsVqfYE83coVD7%2BhIXbPBEYN0ElMh0Oj31D0beZ%2FlI1WS2erQW7MwnV%2B5oQCuuetTEdlAKvW8pSV2cceiyQJzw9AVdoaSQCJFYZgpRrskZMNmck8IGOqUB4O3ZCuRop6VFhSUepWAxZroDkVyde4XjYAS%2BSuHzYp%2BiWPYy1IsBihUdyNGL64%2B9%2FYed3eKS56oqml3VwxR6d8rH2f2Nr9WPE%2BhEHwErDrV1462z146g0p%2F44WWeHUSwRawMuga99etIKEYMnqHiTm14Hkp31zdEG8Pl5vcHyyJLF1Fa9vdu%2BXs2ycNKoiqAdlnl8m3NjTxTg4kuCMYi0KX4eLFo&X-Amz-Signature=197caf3ba60860cb8f9141f90ebd38da2e501bf65bc916755b4e0ee33b4d4e25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPENH5D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkjsWVublfKxh2V%2FMtmjFFhyeDL6NP73I3wBaepi4u5AIgUryi1%2FZc9dKtuhM0mplBewXBtoMVDK9UbEPofsK70sMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbwiWW9q1fIPqmEiircAy2gJQ1OOkl%2B%2FrkLKq0t6a3e0h%2FC%2BflZ0PEszpa8u2at2dmlhQV2MGnvabfRCugguIGFPLGOBXAkMo0Hv3O1POer5oe%2FNFKyLdQyMYxlNesTkYcQekV3iGOnVtJGcP1JeJfqfRQBJyiSfnHTx8E%2BmVb6ct1vciUKlSijoq675RiCX8W4bjB3OVM4vADlc3mkSpJOhOOKdEEM1i4mWlvd%2BnYhCLSax6eykG%2BQTlLDn70wpYWMaA2lop7XOu9%2FrYj1RTedeUc8wyt%2Bzt6L%2BOyzvO7CgxIk%2Bk91Yr5zBGnrIYNeIfdn908Gxm54jM2%2FYlBs25W5fUM3SoLXLlGGAYrirGteBR1QsY8392LH9PuYFnlekf5SspihEporKnkY24r2Nder2Kn4CMSCLiZenPGjm7dtyVoG%2FV%2FyHb%2FTmf%2Bz88pfU9HnkJXtFfccaStv0j1zWFp%2BPfPWkGkHIDuaDApZgRpvsDyAJDQ1TFQJNeNOGEpmKxIG0ejtTqzDAjbIBuga6wBiK8QsB4TuGzBgRRIsVqfYE83coVD7%2BhIXbPBEYN0ElMh0Oj31D0beZ%2FlI1WS2erQW7MwnV%2B5oQCuuetTEdlAKvW8pSV2cceiyQJzw9AVdoaSQCJFYZgpRrskZMNmck8IGOqUB4O3ZCuRop6VFhSUepWAxZroDkVyde4XjYAS%2BSuHzYp%2BiWPYy1IsBihUdyNGL64%2B9%2FYed3eKS56oqml3VwxR6d8rH2f2Nr9WPE%2BhEHwErDrV1462z146g0p%2F44WWeHUSwRawMuga99etIKEYMnqHiTm14Hkp31zdEG8Pl5vcHyyJLF1Fa9vdu%2BXs2ycNKoiqAdlnl8m3NjTxTg4kuCMYi0KX4eLFo&X-Amz-Signature=e9bc145b6f0b8bfe7046c10107608a587c00a86a53f8b6cd0ee56ce7f66934cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPENH5D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkjsWVublfKxh2V%2FMtmjFFhyeDL6NP73I3wBaepi4u5AIgUryi1%2FZc9dKtuhM0mplBewXBtoMVDK9UbEPofsK70sMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbwiWW9q1fIPqmEiircAy2gJQ1OOkl%2B%2FrkLKq0t6a3e0h%2FC%2BflZ0PEszpa8u2at2dmlhQV2MGnvabfRCugguIGFPLGOBXAkMo0Hv3O1POer5oe%2FNFKyLdQyMYxlNesTkYcQekV3iGOnVtJGcP1JeJfqfRQBJyiSfnHTx8E%2BmVb6ct1vciUKlSijoq675RiCX8W4bjB3OVM4vADlc3mkSpJOhOOKdEEM1i4mWlvd%2BnYhCLSax6eykG%2BQTlLDn70wpYWMaA2lop7XOu9%2FrYj1RTedeUc8wyt%2Bzt6L%2BOyzvO7CgxIk%2Bk91Yr5zBGnrIYNeIfdn908Gxm54jM2%2FYlBs25W5fUM3SoLXLlGGAYrirGteBR1QsY8392LH9PuYFnlekf5SspihEporKnkY24r2Nder2Kn4CMSCLiZenPGjm7dtyVoG%2FV%2FyHb%2FTmf%2Bz88pfU9HnkJXtFfccaStv0j1zWFp%2BPfPWkGkHIDuaDApZgRpvsDyAJDQ1TFQJNeNOGEpmKxIG0ejtTqzDAjbIBuga6wBiK8QsB4TuGzBgRRIsVqfYE83coVD7%2BhIXbPBEYN0ElMh0Oj31D0beZ%2FlI1WS2erQW7MwnV%2B5oQCuuetTEdlAKvW8pSV2cceiyQJzw9AVdoaSQCJFYZgpRrskZMNmck8IGOqUB4O3ZCuRop6VFhSUepWAxZroDkVyde4XjYAS%2BSuHzYp%2BiWPYy1IsBihUdyNGL64%2B9%2FYed3eKS56oqml3VwxR6d8rH2f2Nr9WPE%2BhEHwErDrV1462z146g0p%2F44WWeHUSwRawMuga99etIKEYMnqHiTm14Hkp31zdEG8Pl5vcHyyJLF1Fa9vdu%2BXs2ycNKoiqAdlnl8m3NjTxTg4kuCMYi0KX4eLFo&X-Amz-Signature=e9580aaa6f0c0d9030489635fd17f2e7a24867b9980ba4dbd08e21d6f9b0d3c8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPENH5D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkjsWVublfKxh2V%2FMtmjFFhyeDL6NP73I3wBaepi4u5AIgUryi1%2FZc9dKtuhM0mplBewXBtoMVDK9UbEPofsK70sMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbwiWW9q1fIPqmEiircAy2gJQ1OOkl%2B%2FrkLKq0t6a3e0h%2FC%2BflZ0PEszpa8u2at2dmlhQV2MGnvabfRCugguIGFPLGOBXAkMo0Hv3O1POer5oe%2FNFKyLdQyMYxlNesTkYcQekV3iGOnVtJGcP1JeJfqfRQBJyiSfnHTx8E%2BmVb6ct1vciUKlSijoq675RiCX8W4bjB3OVM4vADlc3mkSpJOhOOKdEEM1i4mWlvd%2BnYhCLSax6eykG%2BQTlLDn70wpYWMaA2lop7XOu9%2FrYj1RTedeUc8wyt%2Bzt6L%2BOyzvO7CgxIk%2Bk91Yr5zBGnrIYNeIfdn908Gxm54jM2%2FYlBs25W5fUM3SoLXLlGGAYrirGteBR1QsY8392LH9PuYFnlekf5SspihEporKnkY24r2Nder2Kn4CMSCLiZenPGjm7dtyVoG%2FV%2FyHb%2FTmf%2Bz88pfU9HnkJXtFfccaStv0j1zWFp%2BPfPWkGkHIDuaDApZgRpvsDyAJDQ1TFQJNeNOGEpmKxIG0ejtTqzDAjbIBuga6wBiK8QsB4TuGzBgRRIsVqfYE83coVD7%2BhIXbPBEYN0ElMh0Oj31D0beZ%2FlI1WS2erQW7MwnV%2B5oQCuuetTEdlAKvW8pSV2cceiyQJzw9AVdoaSQCJFYZgpRrskZMNmck8IGOqUB4O3ZCuRop6VFhSUepWAxZroDkVyde4XjYAS%2BSuHzYp%2BiWPYy1IsBihUdyNGL64%2B9%2FYed3eKS56oqml3VwxR6d8rH2f2Nr9WPE%2BhEHwErDrV1462z146g0p%2F44WWeHUSwRawMuga99etIKEYMnqHiTm14Hkp31zdEG8Pl5vcHyyJLF1Fa9vdu%2BXs2ycNKoiqAdlnl8m3NjTxTg4kuCMYi0KX4eLFo&X-Amz-Signature=4160e7117ce8bbeff1a53f8dad42d2b67957f1e49af702148b7ab100c69a0096&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPENH5D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkjsWVublfKxh2V%2FMtmjFFhyeDL6NP73I3wBaepi4u5AIgUryi1%2FZc9dKtuhM0mplBewXBtoMVDK9UbEPofsK70sMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbwiWW9q1fIPqmEiircAy2gJQ1OOkl%2B%2FrkLKq0t6a3e0h%2FC%2BflZ0PEszpa8u2at2dmlhQV2MGnvabfRCugguIGFPLGOBXAkMo0Hv3O1POer5oe%2FNFKyLdQyMYxlNesTkYcQekV3iGOnVtJGcP1JeJfqfRQBJyiSfnHTx8E%2BmVb6ct1vciUKlSijoq675RiCX8W4bjB3OVM4vADlc3mkSpJOhOOKdEEM1i4mWlvd%2BnYhCLSax6eykG%2BQTlLDn70wpYWMaA2lop7XOu9%2FrYj1RTedeUc8wyt%2Bzt6L%2BOyzvO7CgxIk%2Bk91Yr5zBGnrIYNeIfdn908Gxm54jM2%2FYlBs25W5fUM3SoLXLlGGAYrirGteBR1QsY8392LH9PuYFnlekf5SspihEporKnkY24r2Nder2Kn4CMSCLiZenPGjm7dtyVoG%2FV%2FyHb%2FTmf%2Bz88pfU9HnkJXtFfccaStv0j1zWFp%2BPfPWkGkHIDuaDApZgRpvsDyAJDQ1TFQJNeNOGEpmKxIG0ejtTqzDAjbIBuga6wBiK8QsB4TuGzBgRRIsVqfYE83coVD7%2BhIXbPBEYN0ElMh0Oj31D0beZ%2FlI1WS2erQW7MwnV%2B5oQCuuetTEdlAKvW8pSV2cceiyQJzw9AVdoaSQCJFYZgpRrskZMNmck8IGOqUB4O3ZCuRop6VFhSUepWAxZroDkVyde4XjYAS%2BSuHzYp%2BiWPYy1IsBihUdyNGL64%2B9%2FYed3eKS56oqml3VwxR6d8rH2f2Nr9WPE%2BhEHwErDrV1462z146g0p%2F44WWeHUSwRawMuga99etIKEYMnqHiTm14Hkp31zdEG8Pl5vcHyyJLF1Fa9vdu%2BXs2ycNKoiqAdlnl8m3NjTxTg4kuCMYi0KX4eLFo&X-Amz-Signature=0e764bf99b3be853f85d1c2e31a695b49e7ce460601a195f118f41f09252b2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPENH5D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkjsWVublfKxh2V%2FMtmjFFhyeDL6NP73I3wBaepi4u5AIgUryi1%2FZc9dKtuhM0mplBewXBtoMVDK9UbEPofsK70sMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbwiWW9q1fIPqmEiircAy2gJQ1OOkl%2B%2FrkLKq0t6a3e0h%2FC%2BflZ0PEszpa8u2at2dmlhQV2MGnvabfRCugguIGFPLGOBXAkMo0Hv3O1POer5oe%2FNFKyLdQyMYxlNesTkYcQekV3iGOnVtJGcP1JeJfqfRQBJyiSfnHTx8E%2BmVb6ct1vciUKlSijoq675RiCX8W4bjB3OVM4vADlc3mkSpJOhOOKdEEM1i4mWlvd%2BnYhCLSax6eykG%2BQTlLDn70wpYWMaA2lop7XOu9%2FrYj1RTedeUc8wyt%2Bzt6L%2BOyzvO7CgxIk%2Bk91Yr5zBGnrIYNeIfdn908Gxm54jM2%2FYlBs25W5fUM3SoLXLlGGAYrirGteBR1QsY8392LH9PuYFnlekf5SspihEporKnkY24r2Nder2Kn4CMSCLiZenPGjm7dtyVoG%2FV%2FyHb%2FTmf%2Bz88pfU9HnkJXtFfccaStv0j1zWFp%2BPfPWkGkHIDuaDApZgRpvsDyAJDQ1TFQJNeNOGEpmKxIG0ejtTqzDAjbIBuga6wBiK8QsB4TuGzBgRRIsVqfYE83coVD7%2BhIXbPBEYN0ElMh0Oj31D0beZ%2FlI1WS2erQW7MwnV%2B5oQCuuetTEdlAKvW8pSV2cceiyQJzw9AVdoaSQCJFYZgpRrskZMNmck8IGOqUB4O3ZCuRop6VFhSUepWAxZroDkVyde4XjYAS%2BSuHzYp%2BiWPYy1IsBihUdyNGL64%2B9%2FYed3eKS56oqml3VwxR6d8rH2f2Nr9WPE%2BhEHwErDrV1462z146g0p%2F44WWeHUSwRawMuga99etIKEYMnqHiTm14Hkp31zdEG8Pl5vcHyyJLF1Fa9vdu%2BXs2ycNKoiqAdlnl8m3NjTxTg4kuCMYi0KX4eLFo&X-Amz-Signature=803814bacdbb4bbc0ae681a2162c43923af8583cc0ef01798fcd6b25197c4730&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPENH5D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkjsWVublfKxh2V%2FMtmjFFhyeDL6NP73I3wBaepi4u5AIgUryi1%2FZc9dKtuhM0mplBewXBtoMVDK9UbEPofsK70sMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbwiWW9q1fIPqmEiircAy2gJQ1OOkl%2B%2FrkLKq0t6a3e0h%2FC%2BflZ0PEszpa8u2at2dmlhQV2MGnvabfRCugguIGFPLGOBXAkMo0Hv3O1POer5oe%2FNFKyLdQyMYxlNesTkYcQekV3iGOnVtJGcP1JeJfqfRQBJyiSfnHTx8E%2BmVb6ct1vciUKlSijoq675RiCX8W4bjB3OVM4vADlc3mkSpJOhOOKdEEM1i4mWlvd%2BnYhCLSax6eykG%2BQTlLDn70wpYWMaA2lop7XOu9%2FrYj1RTedeUc8wyt%2Bzt6L%2BOyzvO7CgxIk%2Bk91Yr5zBGnrIYNeIfdn908Gxm54jM2%2FYlBs25W5fUM3SoLXLlGGAYrirGteBR1QsY8392LH9PuYFnlekf5SspihEporKnkY24r2Nder2Kn4CMSCLiZenPGjm7dtyVoG%2FV%2FyHb%2FTmf%2Bz88pfU9HnkJXtFfccaStv0j1zWFp%2BPfPWkGkHIDuaDApZgRpvsDyAJDQ1TFQJNeNOGEpmKxIG0ejtTqzDAjbIBuga6wBiK8QsB4TuGzBgRRIsVqfYE83coVD7%2BhIXbPBEYN0ElMh0Oj31D0beZ%2FlI1WS2erQW7MwnV%2B5oQCuuetTEdlAKvW8pSV2cceiyQJzw9AVdoaSQCJFYZgpRrskZMNmck8IGOqUB4O3ZCuRop6VFhSUepWAxZroDkVyde4XjYAS%2BSuHzYp%2BiWPYy1IsBihUdyNGL64%2B9%2FYed3eKS56oqml3VwxR6d8rH2f2Nr9WPE%2BhEHwErDrV1462z146g0p%2F44WWeHUSwRawMuga99etIKEYMnqHiTm14Hkp31zdEG8Pl5vcHyyJLF1Fa9vdu%2BXs2ycNKoiqAdlnl8m3NjTxTg4kuCMYi0KX4eLFo&X-Amz-Signature=58ac405fff29050c9dbe3465033648cb1e0c211c7bd7ee978377955e3f54b065&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPENH5D%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T024649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkjsWVublfKxh2V%2FMtmjFFhyeDL6NP73I3wBaepi4u5AIgUryi1%2FZc9dKtuhM0mplBewXBtoMVDK9UbEPofsK70sMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbwiWW9q1fIPqmEiircAy2gJQ1OOkl%2B%2FrkLKq0t6a3e0h%2FC%2BflZ0PEszpa8u2at2dmlhQV2MGnvabfRCugguIGFPLGOBXAkMo0Hv3O1POer5oe%2FNFKyLdQyMYxlNesTkYcQekV3iGOnVtJGcP1JeJfqfRQBJyiSfnHTx8E%2BmVb6ct1vciUKlSijoq675RiCX8W4bjB3OVM4vADlc3mkSpJOhOOKdEEM1i4mWlvd%2BnYhCLSax6eykG%2BQTlLDn70wpYWMaA2lop7XOu9%2FrYj1RTedeUc8wyt%2Bzt6L%2BOyzvO7CgxIk%2Bk91Yr5zBGnrIYNeIfdn908Gxm54jM2%2FYlBs25W5fUM3SoLXLlGGAYrirGteBR1QsY8392LH9PuYFnlekf5SspihEporKnkY24r2Nder2Kn4CMSCLiZenPGjm7dtyVoG%2FV%2FyHb%2FTmf%2Bz88pfU9HnkJXtFfccaStv0j1zWFp%2BPfPWkGkHIDuaDApZgRpvsDyAJDQ1TFQJNeNOGEpmKxIG0ejtTqzDAjbIBuga6wBiK8QsB4TuGzBgRRIsVqfYE83coVD7%2BhIXbPBEYN0ElMh0Oj31D0beZ%2FlI1WS2erQW7MwnV%2B5oQCuuetTEdlAKvW8pSV2cceiyQJzw9AVdoaSQCJFYZgpRrskZMNmck8IGOqUB4O3ZCuRop6VFhSUepWAxZroDkVyde4XjYAS%2BSuHzYp%2BiWPYy1IsBihUdyNGL64%2B9%2FYed3eKS56oqml3VwxR6d8rH2f2Nr9WPE%2BhEHwErDrV1462z146g0p%2F44WWeHUSwRawMuga99etIKEYMnqHiTm14Hkp31zdEG8Pl5vcHyyJLF1Fa9vdu%2BXs2ycNKoiqAdlnl8m3NjTxTg4kuCMYi0KX4eLFo&X-Amz-Signature=f7c54b463082ac0028d602053d53996d5b36c9686af6ed9fb38c9428958ee9f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
