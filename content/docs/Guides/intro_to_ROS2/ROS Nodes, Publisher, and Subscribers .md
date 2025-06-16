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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW273CVA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDi7PNrAUjHq10%2BXLPyFqAamvVEBQUU90Y6W2wNBO2YCgIgKJ05EVE9nT8bfFyuvT4LywYYMyzd6c8XaPpstig95%2Bcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCwpTObIXaWmCDhhwyrcA7W4Yp%2BBPMZHpu8y8tFMDGm6P23CKHuWuRBU4qCdAsbx18W%2BNQ32GtDeMKQV0RqP34GoOO%2FEKLChwS6gnc6j1SIwGRQz%2FNxjIc4y6E4aPSetoQqXM4b5ajhEMo7rz96kL8f5a182o6vf0MMFGjV2BOh4GK%2BnV93WzTS8maiB9NLUAXPDISrFn29TkC717kUBnKJQZx10vpK%2F9H58B9xVreWMuVF%2BlIB5ge2QxuTC5i9tktgInJS17johwRaOfLvw03e7843pc%2FLg3b0g3P3YEsQIaQM7igk5%2BnstmN6piI1T4EIhMqDN1W0tpbwzOFcDKqYQdcoMK5Ol9Nwio6ZosiW13w9mS1X1csxP%2FMbCB%2BsG9iG5kWFiWJlTaIoKfnpLbJez%2BBgeG8hHEPGYnfFEE%2BUbjgA6AwTpgTvDtHmuhDtQfOO8BJBfNnB1BxPEKoHqsuMyVTfbPRQUd4LkgjpUhTz8DNU85cEyG%2BbgYBhva2uZFhpP5RBy6r7EgZCvRphqfv2N8MemjMLLhUnhCL4DnNquaAcyx%2F9TUMfGFqWouHAV32YT5l%2BiebkKwbT1wVCOp7BrCvS8Xi8IIw%2FSPD0rT75Z9k1c9YJum0aQUIWtmNw0mdQOTM3WWXDgPtu3MLqvvcIGOqUBYRts1fdU%2BJheJNtPy8m5VIWX6%2BVcaq1UT1re2stM2ZO1yXv5k9BuivB9yc3PlU0lnXhhEHPxkuuD0AByHOW4n2MvkyBj68IBQ6Om6OAUvlM2Vam9deSWHBDlbv6Mgftt32feVjbh7Bc11zq12quqwyppkt440TOhT%2FkQ%2F6%2BuRAOfKNkv7C0VdYGbOLyPdllmLVmL2Yc%2Bw1e%2B1k93jcDJEWU7bS1j&X-Amz-Signature=fa43d835f2aab9b1f42b6f9050b3d5e4ab4ae38dd30ce594015222c6bc11161c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW273CVA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDi7PNrAUjHq10%2BXLPyFqAamvVEBQUU90Y6W2wNBO2YCgIgKJ05EVE9nT8bfFyuvT4LywYYMyzd6c8XaPpstig95%2Bcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCwpTObIXaWmCDhhwyrcA7W4Yp%2BBPMZHpu8y8tFMDGm6P23CKHuWuRBU4qCdAsbx18W%2BNQ32GtDeMKQV0RqP34GoOO%2FEKLChwS6gnc6j1SIwGRQz%2FNxjIc4y6E4aPSetoQqXM4b5ajhEMo7rz96kL8f5a182o6vf0MMFGjV2BOh4GK%2BnV93WzTS8maiB9NLUAXPDISrFn29TkC717kUBnKJQZx10vpK%2F9H58B9xVreWMuVF%2BlIB5ge2QxuTC5i9tktgInJS17johwRaOfLvw03e7843pc%2FLg3b0g3P3YEsQIaQM7igk5%2BnstmN6piI1T4EIhMqDN1W0tpbwzOFcDKqYQdcoMK5Ol9Nwio6ZosiW13w9mS1X1csxP%2FMbCB%2BsG9iG5kWFiWJlTaIoKfnpLbJez%2BBgeG8hHEPGYnfFEE%2BUbjgA6AwTpgTvDtHmuhDtQfOO8BJBfNnB1BxPEKoHqsuMyVTfbPRQUd4LkgjpUhTz8DNU85cEyG%2BbgYBhva2uZFhpP5RBy6r7EgZCvRphqfv2N8MemjMLLhUnhCL4DnNquaAcyx%2F9TUMfGFqWouHAV32YT5l%2BiebkKwbT1wVCOp7BrCvS8Xi8IIw%2FSPD0rT75Z9k1c9YJum0aQUIWtmNw0mdQOTM3WWXDgPtu3MLqvvcIGOqUBYRts1fdU%2BJheJNtPy8m5VIWX6%2BVcaq1UT1re2stM2ZO1yXv5k9BuivB9yc3PlU0lnXhhEHPxkuuD0AByHOW4n2MvkyBj68IBQ6Om6OAUvlM2Vam9deSWHBDlbv6Mgftt32feVjbh7Bc11zq12quqwyppkt440TOhT%2FkQ%2F6%2BuRAOfKNkv7C0VdYGbOLyPdllmLVmL2Yc%2Bw1e%2B1k93jcDJEWU7bS1j&X-Amz-Signature=a6b381614cd3e3e825c0d73bb38d7eb882fd014dbfff001e33fe047c57391811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW273CVA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDi7PNrAUjHq10%2BXLPyFqAamvVEBQUU90Y6W2wNBO2YCgIgKJ05EVE9nT8bfFyuvT4LywYYMyzd6c8XaPpstig95%2Bcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCwpTObIXaWmCDhhwyrcA7W4Yp%2BBPMZHpu8y8tFMDGm6P23CKHuWuRBU4qCdAsbx18W%2BNQ32GtDeMKQV0RqP34GoOO%2FEKLChwS6gnc6j1SIwGRQz%2FNxjIc4y6E4aPSetoQqXM4b5ajhEMo7rz96kL8f5a182o6vf0MMFGjV2BOh4GK%2BnV93WzTS8maiB9NLUAXPDISrFn29TkC717kUBnKJQZx10vpK%2F9H58B9xVreWMuVF%2BlIB5ge2QxuTC5i9tktgInJS17johwRaOfLvw03e7843pc%2FLg3b0g3P3YEsQIaQM7igk5%2BnstmN6piI1T4EIhMqDN1W0tpbwzOFcDKqYQdcoMK5Ol9Nwio6ZosiW13w9mS1X1csxP%2FMbCB%2BsG9iG5kWFiWJlTaIoKfnpLbJez%2BBgeG8hHEPGYnfFEE%2BUbjgA6AwTpgTvDtHmuhDtQfOO8BJBfNnB1BxPEKoHqsuMyVTfbPRQUd4LkgjpUhTz8DNU85cEyG%2BbgYBhva2uZFhpP5RBy6r7EgZCvRphqfv2N8MemjMLLhUnhCL4DnNquaAcyx%2F9TUMfGFqWouHAV32YT5l%2BiebkKwbT1wVCOp7BrCvS8Xi8IIw%2FSPD0rT75Z9k1c9YJum0aQUIWtmNw0mdQOTM3WWXDgPtu3MLqvvcIGOqUBYRts1fdU%2BJheJNtPy8m5VIWX6%2BVcaq1UT1re2stM2ZO1yXv5k9BuivB9yc3PlU0lnXhhEHPxkuuD0AByHOW4n2MvkyBj68IBQ6Om6OAUvlM2Vam9deSWHBDlbv6Mgftt32feVjbh7Bc11zq12quqwyppkt440TOhT%2FkQ%2F6%2BuRAOfKNkv7C0VdYGbOLyPdllmLVmL2Yc%2Bw1e%2B1k93jcDJEWU7bS1j&X-Amz-Signature=e0e1dc80a80869b9b6657914c8ebe8357b4c43cd9ec086d9d8279c650b8c991b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW273CVA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDi7PNrAUjHq10%2BXLPyFqAamvVEBQUU90Y6W2wNBO2YCgIgKJ05EVE9nT8bfFyuvT4LywYYMyzd6c8XaPpstig95%2Bcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCwpTObIXaWmCDhhwyrcA7W4Yp%2BBPMZHpu8y8tFMDGm6P23CKHuWuRBU4qCdAsbx18W%2BNQ32GtDeMKQV0RqP34GoOO%2FEKLChwS6gnc6j1SIwGRQz%2FNxjIc4y6E4aPSetoQqXM4b5ajhEMo7rz96kL8f5a182o6vf0MMFGjV2BOh4GK%2BnV93WzTS8maiB9NLUAXPDISrFn29TkC717kUBnKJQZx10vpK%2F9H58B9xVreWMuVF%2BlIB5ge2QxuTC5i9tktgInJS17johwRaOfLvw03e7843pc%2FLg3b0g3P3YEsQIaQM7igk5%2BnstmN6piI1T4EIhMqDN1W0tpbwzOFcDKqYQdcoMK5Ol9Nwio6ZosiW13w9mS1X1csxP%2FMbCB%2BsG9iG5kWFiWJlTaIoKfnpLbJez%2BBgeG8hHEPGYnfFEE%2BUbjgA6AwTpgTvDtHmuhDtQfOO8BJBfNnB1BxPEKoHqsuMyVTfbPRQUd4LkgjpUhTz8DNU85cEyG%2BbgYBhva2uZFhpP5RBy6r7EgZCvRphqfv2N8MemjMLLhUnhCL4DnNquaAcyx%2F9TUMfGFqWouHAV32YT5l%2BiebkKwbT1wVCOp7BrCvS8Xi8IIw%2FSPD0rT75Z9k1c9YJum0aQUIWtmNw0mdQOTM3WWXDgPtu3MLqvvcIGOqUBYRts1fdU%2BJheJNtPy8m5VIWX6%2BVcaq1UT1re2stM2ZO1yXv5k9BuivB9yc3PlU0lnXhhEHPxkuuD0AByHOW4n2MvkyBj68IBQ6Om6OAUvlM2Vam9deSWHBDlbv6Mgftt32feVjbh7Bc11zq12quqwyppkt440TOhT%2FkQ%2F6%2BuRAOfKNkv7C0VdYGbOLyPdllmLVmL2Yc%2Bw1e%2B1k93jcDJEWU7bS1j&X-Amz-Signature=50be3f24e808bc84ea1848a5b0370dd704d767ad2e89d332230c954b08ba622c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW273CVA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDi7PNrAUjHq10%2BXLPyFqAamvVEBQUU90Y6W2wNBO2YCgIgKJ05EVE9nT8bfFyuvT4LywYYMyzd6c8XaPpstig95%2Bcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCwpTObIXaWmCDhhwyrcA7W4Yp%2BBPMZHpu8y8tFMDGm6P23CKHuWuRBU4qCdAsbx18W%2BNQ32GtDeMKQV0RqP34GoOO%2FEKLChwS6gnc6j1SIwGRQz%2FNxjIc4y6E4aPSetoQqXM4b5ajhEMo7rz96kL8f5a182o6vf0MMFGjV2BOh4GK%2BnV93WzTS8maiB9NLUAXPDISrFn29TkC717kUBnKJQZx10vpK%2F9H58B9xVreWMuVF%2BlIB5ge2QxuTC5i9tktgInJS17johwRaOfLvw03e7843pc%2FLg3b0g3P3YEsQIaQM7igk5%2BnstmN6piI1T4EIhMqDN1W0tpbwzOFcDKqYQdcoMK5Ol9Nwio6ZosiW13w9mS1X1csxP%2FMbCB%2BsG9iG5kWFiWJlTaIoKfnpLbJez%2BBgeG8hHEPGYnfFEE%2BUbjgA6AwTpgTvDtHmuhDtQfOO8BJBfNnB1BxPEKoHqsuMyVTfbPRQUd4LkgjpUhTz8DNU85cEyG%2BbgYBhva2uZFhpP5RBy6r7EgZCvRphqfv2N8MemjMLLhUnhCL4DnNquaAcyx%2F9TUMfGFqWouHAV32YT5l%2BiebkKwbT1wVCOp7BrCvS8Xi8IIw%2FSPD0rT75Z9k1c9YJum0aQUIWtmNw0mdQOTM3WWXDgPtu3MLqvvcIGOqUBYRts1fdU%2BJheJNtPy8m5VIWX6%2BVcaq1UT1re2stM2ZO1yXv5k9BuivB9yc3PlU0lnXhhEHPxkuuD0AByHOW4n2MvkyBj68IBQ6Om6OAUvlM2Vam9deSWHBDlbv6Mgftt32feVjbh7Bc11zq12quqwyppkt440TOhT%2FkQ%2F6%2BuRAOfKNkv7C0VdYGbOLyPdllmLVmL2Yc%2Bw1e%2B1k93jcDJEWU7bS1j&X-Amz-Signature=ceb52392566f857bb2ef5b172726f4c7b1ddf881721428b327aad1224090b253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW273CVA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDi7PNrAUjHq10%2BXLPyFqAamvVEBQUU90Y6W2wNBO2YCgIgKJ05EVE9nT8bfFyuvT4LywYYMyzd6c8XaPpstig95%2Bcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCwpTObIXaWmCDhhwyrcA7W4Yp%2BBPMZHpu8y8tFMDGm6P23CKHuWuRBU4qCdAsbx18W%2BNQ32GtDeMKQV0RqP34GoOO%2FEKLChwS6gnc6j1SIwGRQz%2FNxjIc4y6E4aPSetoQqXM4b5ajhEMo7rz96kL8f5a182o6vf0MMFGjV2BOh4GK%2BnV93WzTS8maiB9NLUAXPDISrFn29TkC717kUBnKJQZx10vpK%2F9H58B9xVreWMuVF%2BlIB5ge2QxuTC5i9tktgInJS17johwRaOfLvw03e7843pc%2FLg3b0g3P3YEsQIaQM7igk5%2BnstmN6piI1T4EIhMqDN1W0tpbwzOFcDKqYQdcoMK5Ol9Nwio6ZosiW13w9mS1X1csxP%2FMbCB%2BsG9iG5kWFiWJlTaIoKfnpLbJez%2BBgeG8hHEPGYnfFEE%2BUbjgA6AwTpgTvDtHmuhDtQfOO8BJBfNnB1BxPEKoHqsuMyVTfbPRQUd4LkgjpUhTz8DNU85cEyG%2BbgYBhva2uZFhpP5RBy6r7EgZCvRphqfv2N8MemjMLLhUnhCL4DnNquaAcyx%2F9TUMfGFqWouHAV32YT5l%2BiebkKwbT1wVCOp7BrCvS8Xi8IIw%2FSPD0rT75Z9k1c9YJum0aQUIWtmNw0mdQOTM3WWXDgPtu3MLqvvcIGOqUBYRts1fdU%2BJheJNtPy8m5VIWX6%2BVcaq1UT1re2stM2ZO1yXv5k9BuivB9yc3PlU0lnXhhEHPxkuuD0AByHOW4n2MvkyBj68IBQ6Om6OAUvlM2Vam9deSWHBDlbv6Mgftt32feVjbh7Bc11zq12quqwyppkt440TOhT%2FkQ%2F6%2BuRAOfKNkv7C0VdYGbOLyPdllmLVmL2Yc%2Bw1e%2B1k93jcDJEWU7bS1j&X-Amz-Signature=76382f235ecd1867a492650630c6e33fb2ccabe87612b1b710ffcbb8d6115c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW273CVA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDi7PNrAUjHq10%2BXLPyFqAamvVEBQUU90Y6W2wNBO2YCgIgKJ05EVE9nT8bfFyuvT4LywYYMyzd6c8XaPpstig95%2Bcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCwpTObIXaWmCDhhwyrcA7W4Yp%2BBPMZHpu8y8tFMDGm6P23CKHuWuRBU4qCdAsbx18W%2BNQ32GtDeMKQV0RqP34GoOO%2FEKLChwS6gnc6j1SIwGRQz%2FNxjIc4y6E4aPSetoQqXM4b5ajhEMo7rz96kL8f5a182o6vf0MMFGjV2BOh4GK%2BnV93WzTS8maiB9NLUAXPDISrFn29TkC717kUBnKJQZx10vpK%2F9H58B9xVreWMuVF%2BlIB5ge2QxuTC5i9tktgInJS17johwRaOfLvw03e7843pc%2FLg3b0g3P3YEsQIaQM7igk5%2BnstmN6piI1T4EIhMqDN1W0tpbwzOFcDKqYQdcoMK5Ol9Nwio6ZosiW13w9mS1X1csxP%2FMbCB%2BsG9iG5kWFiWJlTaIoKfnpLbJez%2BBgeG8hHEPGYnfFEE%2BUbjgA6AwTpgTvDtHmuhDtQfOO8BJBfNnB1BxPEKoHqsuMyVTfbPRQUd4LkgjpUhTz8DNU85cEyG%2BbgYBhva2uZFhpP5RBy6r7EgZCvRphqfv2N8MemjMLLhUnhCL4DnNquaAcyx%2F9TUMfGFqWouHAV32YT5l%2BiebkKwbT1wVCOp7BrCvS8Xi8IIw%2FSPD0rT75Z9k1c9YJum0aQUIWtmNw0mdQOTM3WWXDgPtu3MLqvvcIGOqUBYRts1fdU%2BJheJNtPy8m5VIWX6%2BVcaq1UT1re2stM2ZO1yXv5k9BuivB9yc3PlU0lnXhhEHPxkuuD0AByHOW4n2MvkyBj68IBQ6Om6OAUvlM2Vam9deSWHBDlbv6Mgftt32feVjbh7Bc11zq12quqwyppkt440TOhT%2FkQ%2F6%2BuRAOfKNkv7C0VdYGbOLyPdllmLVmL2Yc%2Bw1e%2B1k93jcDJEWU7bS1j&X-Amz-Signature=64b7833b35e80497438a8c81e8a2c4ae5f4151b4533cb77e60db206c768e9af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW273CVA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDi7PNrAUjHq10%2BXLPyFqAamvVEBQUU90Y6W2wNBO2YCgIgKJ05EVE9nT8bfFyuvT4LywYYMyzd6c8XaPpstig95%2Bcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCwpTObIXaWmCDhhwyrcA7W4Yp%2BBPMZHpu8y8tFMDGm6P23CKHuWuRBU4qCdAsbx18W%2BNQ32GtDeMKQV0RqP34GoOO%2FEKLChwS6gnc6j1SIwGRQz%2FNxjIc4y6E4aPSetoQqXM4b5ajhEMo7rz96kL8f5a182o6vf0MMFGjV2BOh4GK%2BnV93WzTS8maiB9NLUAXPDISrFn29TkC717kUBnKJQZx10vpK%2F9H58B9xVreWMuVF%2BlIB5ge2QxuTC5i9tktgInJS17johwRaOfLvw03e7843pc%2FLg3b0g3P3YEsQIaQM7igk5%2BnstmN6piI1T4EIhMqDN1W0tpbwzOFcDKqYQdcoMK5Ol9Nwio6ZosiW13w9mS1X1csxP%2FMbCB%2BsG9iG5kWFiWJlTaIoKfnpLbJez%2BBgeG8hHEPGYnfFEE%2BUbjgA6AwTpgTvDtHmuhDtQfOO8BJBfNnB1BxPEKoHqsuMyVTfbPRQUd4LkgjpUhTz8DNU85cEyG%2BbgYBhva2uZFhpP5RBy6r7EgZCvRphqfv2N8MemjMLLhUnhCL4DnNquaAcyx%2F9TUMfGFqWouHAV32YT5l%2BiebkKwbT1wVCOp7BrCvS8Xi8IIw%2FSPD0rT75Z9k1c9YJum0aQUIWtmNw0mdQOTM3WWXDgPtu3MLqvvcIGOqUBYRts1fdU%2BJheJNtPy8m5VIWX6%2BVcaq1UT1re2stM2ZO1yXv5k9BuivB9yc3PlU0lnXhhEHPxkuuD0AByHOW4n2MvkyBj68IBQ6Om6OAUvlM2Vam9deSWHBDlbv6Mgftt32feVjbh7Bc11zq12quqwyppkt440TOhT%2FkQ%2F6%2BuRAOfKNkv7C0VdYGbOLyPdllmLVmL2Yc%2Bw1e%2B1k93jcDJEWU7bS1j&X-Amz-Signature=ac010a008bcbc0f66a5beb0290f4d61a9653ad9b50cd6102db929690a30f241b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
