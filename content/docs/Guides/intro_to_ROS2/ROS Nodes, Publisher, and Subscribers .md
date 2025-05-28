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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKMYRX4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRDo7qKvquyI5%2F82z1QfYWDpGL2Y9%2BjflzXVxK4qcMPAIgMZvJaNDqz2OD99FWDPtsPurTakJbSRH%2Fbmh%2FTGOPM9oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKWXgF8%2FcRdvIoJmjCrcA5UJ7xuP1ssYb5%2F8OzPf4QT2O84LogVMMSjy2JVa0e0pj0MyAf0YAEmjS%2F9hizVwxT9onQNRrBK98LwYCjKa94fPGDWyFbzKvRGXRehguz%2BVbnorBPTmR8Bcc3F5Wf%2FEVDDex%2FVnhy4QCAUQzTy%2FyCp8I6iW%2BLVO1SYOmJdCiGwa4Lq6nPB2%2FKyDjpCz%2FXK02AZ%2B1umcp9Mc%2FWKaD1uQBIN9yddZt0qG%2BmLLlFgN2j63jYr%2BzTfEPCfdnzc7He949X0b6y%2BoHjbzZOxrbaTzvu5C2uqCn%2B17PYPGcyealXz8vOyItsNnBf8LlqE5nMLIraw%2BYVeDY9mkiMm8OBgXJaUMxn4wl3IcwTk%2BY5Jhr0H9lA9KQfcqW8HopnV1759JruK5ndhI2VX%2Ft3xXCrT0%2BbsXW4o4dfP6h2t2NmT%2FyHcJzyq445ccvaft%2Fz16BHw7Sig%2FA0nnuimwl1qmUzvhmNfLyh8DdrYY5vl3XwXNNDl37BiTNWztdtGPunxbEXyCoJJmleaWMa20Ai%2BcoMd9Yjjg1KyOBelHoNd4Nif3jVmOP5tf%2FAyw7X71GKoBcTCbObupsSbAFL6YPxEkgYsgouZuspkGIB4aj0rAusU%2FIrEO5t%2FzLDil4TWMYXv%2FMOuQ3sEGOqUB3JuZNdwKQ0e97uhow28DRYLGdcni%2BOBm57DutXDJTEWAY2tmGtEt1NPtyKZOvvQt2bSb7Ti9yLa5UA8axLrpY4WSSIvPHgygjhRthlFvClkJR%2FuCOiZ862aX3cxXgkIVlaZY1dhJiTr3%2BWUhPUurV4dFkzd%2FO107FOxxTd9tvKJkQYi%2FAp0je8L5Bywrw7%2FWZ0cDmzeqBrxpfkvDtJQSugUxThXM&X-Amz-Signature=55e324d8e9d5719dd82f9c878a702a2daa1019d4c2c5ce6d64ff0deb0a583502&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKMYRX4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRDo7qKvquyI5%2F82z1QfYWDpGL2Y9%2BjflzXVxK4qcMPAIgMZvJaNDqz2OD99FWDPtsPurTakJbSRH%2Fbmh%2FTGOPM9oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKWXgF8%2FcRdvIoJmjCrcA5UJ7xuP1ssYb5%2F8OzPf4QT2O84LogVMMSjy2JVa0e0pj0MyAf0YAEmjS%2F9hizVwxT9onQNRrBK98LwYCjKa94fPGDWyFbzKvRGXRehguz%2BVbnorBPTmR8Bcc3F5Wf%2FEVDDex%2FVnhy4QCAUQzTy%2FyCp8I6iW%2BLVO1SYOmJdCiGwa4Lq6nPB2%2FKyDjpCz%2FXK02AZ%2B1umcp9Mc%2FWKaD1uQBIN9yddZt0qG%2BmLLlFgN2j63jYr%2BzTfEPCfdnzc7He949X0b6y%2BoHjbzZOxrbaTzvu5C2uqCn%2B17PYPGcyealXz8vOyItsNnBf8LlqE5nMLIraw%2BYVeDY9mkiMm8OBgXJaUMxn4wl3IcwTk%2BY5Jhr0H9lA9KQfcqW8HopnV1759JruK5ndhI2VX%2Ft3xXCrT0%2BbsXW4o4dfP6h2t2NmT%2FyHcJzyq445ccvaft%2Fz16BHw7Sig%2FA0nnuimwl1qmUzvhmNfLyh8DdrYY5vl3XwXNNDl37BiTNWztdtGPunxbEXyCoJJmleaWMa20Ai%2BcoMd9Yjjg1KyOBelHoNd4Nif3jVmOP5tf%2FAyw7X71GKoBcTCbObupsSbAFL6YPxEkgYsgouZuspkGIB4aj0rAusU%2FIrEO5t%2FzLDil4TWMYXv%2FMOuQ3sEGOqUB3JuZNdwKQ0e97uhow28DRYLGdcni%2BOBm57DutXDJTEWAY2tmGtEt1NPtyKZOvvQt2bSb7Ti9yLa5UA8axLrpY4WSSIvPHgygjhRthlFvClkJR%2FuCOiZ862aX3cxXgkIVlaZY1dhJiTr3%2BWUhPUurV4dFkzd%2FO107FOxxTd9tvKJkQYi%2FAp0je8L5Bywrw7%2FWZ0cDmzeqBrxpfkvDtJQSugUxThXM&X-Amz-Signature=eef992a4cd175595b65a9b799481385fd54fa2a19b5b8fc9042f57820c74cf0d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKMYRX4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRDo7qKvquyI5%2F82z1QfYWDpGL2Y9%2BjflzXVxK4qcMPAIgMZvJaNDqz2OD99FWDPtsPurTakJbSRH%2Fbmh%2FTGOPM9oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKWXgF8%2FcRdvIoJmjCrcA5UJ7xuP1ssYb5%2F8OzPf4QT2O84LogVMMSjy2JVa0e0pj0MyAf0YAEmjS%2F9hizVwxT9onQNRrBK98LwYCjKa94fPGDWyFbzKvRGXRehguz%2BVbnorBPTmR8Bcc3F5Wf%2FEVDDex%2FVnhy4QCAUQzTy%2FyCp8I6iW%2BLVO1SYOmJdCiGwa4Lq6nPB2%2FKyDjpCz%2FXK02AZ%2B1umcp9Mc%2FWKaD1uQBIN9yddZt0qG%2BmLLlFgN2j63jYr%2BzTfEPCfdnzc7He949X0b6y%2BoHjbzZOxrbaTzvu5C2uqCn%2B17PYPGcyealXz8vOyItsNnBf8LlqE5nMLIraw%2BYVeDY9mkiMm8OBgXJaUMxn4wl3IcwTk%2BY5Jhr0H9lA9KQfcqW8HopnV1759JruK5ndhI2VX%2Ft3xXCrT0%2BbsXW4o4dfP6h2t2NmT%2FyHcJzyq445ccvaft%2Fz16BHw7Sig%2FA0nnuimwl1qmUzvhmNfLyh8DdrYY5vl3XwXNNDl37BiTNWztdtGPunxbEXyCoJJmleaWMa20Ai%2BcoMd9Yjjg1KyOBelHoNd4Nif3jVmOP5tf%2FAyw7X71GKoBcTCbObupsSbAFL6YPxEkgYsgouZuspkGIB4aj0rAusU%2FIrEO5t%2FzLDil4TWMYXv%2FMOuQ3sEGOqUB3JuZNdwKQ0e97uhow28DRYLGdcni%2BOBm57DutXDJTEWAY2tmGtEt1NPtyKZOvvQt2bSb7Ti9yLa5UA8axLrpY4WSSIvPHgygjhRthlFvClkJR%2FuCOiZ862aX3cxXgkIVlaZY1dhJiTr3%2BWUhPUurV4dFkzd%2FO107FOxxTd9tvKJkQYi%2FAp0je8L5Bywrw7%2FWZ0cDmzeqBrxpfkvDtJQSugUxThXM&X-Amz-Signature=33b93011c77035799433f7ff6523ec6ecce1e57adda1a6ae47f2ea7f3064f84e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKMYRX4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRDo7qKvquyI5%2F82z1QfYWDpGL2Y9%2BjflzXVxK4qcMPAIgMZvJaNDqz2OD99FWDPtsPurTakJbSRH%2Fbmh%2FTGOPM9oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKWXgF8%2FcRdvIoJmjCrcA5UJ7xuP1ssYb5%2F8OzPf4QT2O84LogVMMSjy2JVa0e0pj0MyAf0YAEmjS%2F9hizVwxT9onQNRrBK98LwYCjKa94fPGDWyFbzKvRGXRehguz%2BVbnorBPTmR8Bcc3F5Wf%2FEVDDex%2FVnhy4QCAUQzTy%2FyCp8I6iW%2BLVO1SYOmJdCiGwa4Lq6nPB2%2FKyDjpCz%2FXK02AZ%2B1umcp9Mc%2FWKaD1uQBIN9yddZt0qG%2BmLLlFgN2j63jYr%2BzTfEPCfdnzc7He949X0b6y%2BoHjbzZOxrbaTzvu5C2uqCn%2B17PYPGcyealXz8vOyItsNnBf8LlqE5nMLIraw%2BYVeDY9mkiMm8OBgXJaUMxn4wl3IcwTk%2BY5Jhr0H9lA9KQfcqW8HopnV1759JruK5ndhI2VX%2Ft3xXCrT0%2BbsXW4o4dfP6h2t2NmT%2FyHcJzyq445ccvaft%2Fz16BHw7Sig%2FA0nnuimwl1qmUzvhmNfLyh8DdrYY5vl3XwXNNDl37BiTNWztdtGPunxbEXyCoJJmleaWMa20Ai%2BcoMd9Yjjg1KyOBelHoNd4Nif3jVmOP5tf%2FAyw7X71GKoBcTCbObupsSbAFL6YPxEkgYsgouZuspkGIB4aj0rAusU%2FIrEO5t%2FzLDil4TWMYXv%2FMOuQ3sEGOqUB3JuZNdwKQ0e97uhow28DRYLGdcni%2BOBm57DutXDJTEWAY2tmGtEt1NPtyKZOvvQt2bSb7Ti9yLa5UA8axLrpY4WSSIvPHgygjhRthlFvClkJR%2FuCOiZ862aX3cxXgkIVlaZY1dhJiTr3%2BWUhPUurV4dFkzd%2FO107FOxxTd9tvKJkQYi%2FAp0je8L5Bywrw7%2FWZ0cDmzeqBrxpfkvDtJQSugUxThXM&X-Amz-Signature=de2ff381fd8d20e589e366bc3c2f99062563514835652a3d037b30846ded98d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKMYRX4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRDo7qKvquyI5%2F82z1QfYWDpGL2Y9%2BjflzXVxK4qcMPAIgMZvJaNDqz2OD99FWDPtsPurTakJbSRH%2Fbmh%2FTGOPM9oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKWXgF8%2FcRdvIoJmjCrcA5UJ7xuP1ssYb5%2F8OzPf4QT2O84LogVMMSjy2JVa0e0pj0MyAf0YAEmjS%2F9hizVwxT9onQNRrBK98LwYCjKa94fPGDWyFbzKvRGXRehguz%2BVbnorBPTmR8Bcc3F5Wf%2FEVDDex%2FVnhy4QCAUQzTy%2FyCp8I6iW%2BLVO1SYOmJdCiGwa4Lq6nPB2%2FKyDjpCz%2FXK02AZ%2B1umcp9Mc%2FWKaD1uQBIN9yddZt0qG%2BmLLlFgN2j63jYr%2BzTfEPCfdnzc7He949X0b6y%2BoHjbzZOxrbaTzvu5C2uqCn%2B17PYPGcyealXz8vOyItsNnBf8LlqE5nMLIraw%2BYVeDY9mkiMm8OBgXJaUMxn4wl3IcwTk%2BY5Jhr0H9lA9KQfcqW8HopnV1759JruK5ndhI2VX%2Ft3xXCrT0%2BbsXW4o4dfP6h2t2NmT%2FyHcJzyq445ccvaft%2Fz16BHw7Sig%2FA0nnuimwl1qmUzvhmNfLyh8DdrYY5vl3XwXNNDl37BiTNWztdtGPunxbEXyCoJJmleaWMa20Ai%2BcoMd9Yjjg1KyOBelHoNd4Nif3jVmOP5tf%2FAyw7X71GKoBcTCbObupsSbAFL6YPxEkgYsgouZuspkGIB4aj0rAusU%2FIrEO5t%2FzLDil4TWMYXv%2FMOuQ3sEGOqUB3JuZNdwKQ0e97uhow28DRYLGdcni%2BOBm57DutXDJTEWAY2tmGtEt1NPtyKZOvvQt2bSb7Ti9yLa5UA8axLrpY4WSSIvPHgygjhRthlFvClkJR%2FuCOiZ862aX3cxXgkIVlaZY1dhJiTr3%2BWUhPUurV4dFkzd%2FO107FOxxTd9tvKJkQYi%2FAp0je8L5Bywrw7%2FWZ0cDmzeqBrxpfkvDtJQSugUxThXM&X-Amz-Signature=83c81a63e8c8eea600a4271f7bcffd8e9c6db73194bd18413ab6443040ef9f03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKMYRX4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRDo7qKvquyI5%2F82z1QfYWDpGL2Y9%2BjflzXVxK4qcMPAIgMZvJaNDqz2OD99FWDPtsPurTakJbSRH%2Fbmh%2FTGOPM9oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKWXgF8%2FcRdvIoJmjCrcA5UJ7xuP1ssYb5%2F8OzPf4QT2O84LogVMMSjy2JVa0e0pj0MyAf0YAEmjS%2F9hizVwxT9onQNRrBK98LwYCjKa94fPGDWyFbzKvRGXRehguz%2BVbnorBPTmR8Bcc3F5Wf%2FEVDDex%2FVnhy4QCAUQzTy%2FyCp8I6iW%2BLVO1SYOmJdCiGwa4Lq6nPB2%2FKyDjpCz%2FXK02AZ%2B1umcp9Mc%2FWKaD1uQBIN9yddZt0qG%2BmLLlFgN2j63jYr%2BzTfEPCfdnzc7He949X0b6y%2BoHjbzZOxrbaTzvu5C2uqCn%2B17PYPGcyealXz8vOyItsNnBf8LlqE5nMLIraw%2BYVeDY9mkiMm8OBgXJaUMxn4wl3IcwTk%2BY5Jhr0H9lA9KQfcqW8HopnV1759JruK5ndhI2VX%2Ft3xXCrT0%2BbsXW4o4dfP6h2t2NmT%2FyHcJzyq445ccvaft%2Fz16BHw7Sig%2FA0nnuimwl1qmUzvhmNfLyh8DdrYY5vl3XwXNNDl37BiTNWztdtGPunxbEXyCoJJmleaWMa20Ai%2BcoMd9Yjjg1KyOBelHoNd4Nif3jVmOP5tf%2FAyw7X71GKoBcTCbObupsSbAFL6YPxEkgYsgouZuspkGIB4aj0rAusU%2FIrEO5t%2FzLDil4TWMYXv%2FMOuQ3sEGOqUB3JuZNdwKQ0e97uhow28DRYLGdcni%2BOBm57DutXDJTEWAY2tmGtEt1NPtyKZOvvQt2bSb7Ti9yLa5UA8axLrpY4WSSIvPHgygjhRthlFvClkJR%2FuCOiZ862aX3cxXgkIVlaZY1dhJiTr3%2BWUhPUurV4dFkzd%2FO107FOxxTd9tvKJkQYi%2FAp0je8L5Bywrw7%2FWZ0cDmzeqBrxpfkvDtJQSugUxThXM&X-Amz-Signature=dbbb9ba672421c95009d140814fa523ea788d4ffba61f032a3e33feb618637c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKMYRX4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRDo7qKvquyI5%2F82z1QfYWDpGL2Y9%2BjflzXVxK4qcMPAIgMZvJaNDqz2OD99FWDPtsPurTakJbSRH%2Fbmh%2FTGOPM9oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKWXgF8%2FcRdvIoJmjCrcA5UJ7xuP1ssYb5%2F8OzPf4QT2O84LogVMMSjy2JVa0e0pj0MyAf0YAEmjS%2F9hizVwxT9onQNRrBK98LwYCjKa94fPGDWyFbzKvRGXRehguz%2BVbnorBPTmR8Bcc3F5Wf%2FEVDDex%2FVnhy4QCAUQzTy%2FyCp8I6iW%2BLVO1SYOmJdCiGwa4Lq6nPB2%2FKyDjpCz%2FXK02AZ%2B1umcp9Mc%2FWKaD1uQBIN9yddZt0qG%2BmLLlFgN2j63jYr%2BzTfEPCfdnzc7He949X0b6y%2BoHjbzZOxrbaTzvu5C2uqCn%2B17PYPGcyealXz8vOyItsNnBf8LlqE5nMLIraw%2BYVeDY9mkiMm8OBgXJaUMxn4wl3IcwTk%2BY5Jhr0H9lA9KQfcqW8HopnV1759JruK5ndhI2VX%2Ft3xXCrT0%2BbsXW4o4dfP6h2t2NmT%2FyHcJzyq445ccvaft%2Fz16BHw7Sig%2FA0nnuimwl1qmUzvhmNfLyh8DdrYY5vl3XwXNNDl37BiTNWztdtGPunxbEXyCoJJmleaWMa20Ai%2BcoMd9Yjjg1KyOBelHoNd4Nif3jVmOP5tf%2FAyw7X71GKoBcTCbObupsSbAFL6YPxEkgYsgouZuspkGIB4aj0rAusU%2FIrEO5t%2FzLDil4TWMYXv%2FMOuQ3sEGOqUB3JuZNdwKQ0e97uhow28DRYLGdcni%2BOBm57DutXDJTEWAY2tmGtEt1NPtyKZOvvQt2bSb7Ti9yLa5UA8axLrpY4WSSIvPHgygjhRthlFvClkJR%2FuCOiZ862aX3cxXgkIVlaZY1dhJiTr3%2BWUhPUurV4dFkzd%2FO107FOxxTd9tvKJkQYi%2FAp0je8L5Bywrw7%2FWZ0cDmzeqBrxpfkvDtJQSugUxThXM&X-Amz-Signature=170e9886ac8cd692a12339ad0a141c108fd9545d349ecf4bf4fd9e45ef4efc4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BKMYRX4%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRDo7qKvquyI5%2F82z1QfYWDpGL2Y9%2BjflzXVxK4qcMPAIgMZvJaNDqz2OD99FWDPtsPurTakJbSRH%2Fbmh%2FTGOPM9oq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKWXgF8%2FcRdvIoJmjCrcA5UJ7xuP1ssYb5%2F8OzPf4QT2O84LogVMMSjy2JVa0e0pj0MyAf0YAEmjS%2F9hizVwxT9onQNRrBK98LwYCjKa94fPGDWyFbzKvRGXRehguz%2BVbnorBPTmR8Bcc3F5Wf%2FEVDDex%2FVnhy4QCAUQzTy%2FyCp8I6iW%2BLVO1SYOmJdCiGwa4Lq6nPB2%2FKyDjpCz%2FXK02AZ%2B1umcp9Mc%2FWKaD1uQBIN9yddZt0qG%2BmLLlFgN2j63jYr%2BzTfEPCfdnzc7He949X0b6y%2BoHjbzZOxrbaTzvu5C2uqCn%2B17PYPGcyealXz8vOyItsNnBf8LlqE5nMLIraw%2BYVeDY9mkiMm8OBgXJaUMxn4wl3IcwTk%2BY5Jhr0H9lA9KQfcqW8HopnV1759JruK5ndhI2VX%2Ft3xXCrT0%2BbsXW4o4dfP6h2t2NmT%2FyHcJzyq445ccvaft%2Fz16BHw7Sig%2FA0nnuimwl1qmUzvhmNfLyh8DdrYY5vl3XwXNNDl37BiTNWztdtGPunxbEXyCoJJmleaWMa20Ai%2BcoMd9Yjjg1KyOBelHoNd4Nif3jVmOP5tf%2FAyw7X71GKoBcTCbObupsSbAFL6YPxEkgYsgouZuspkGIB4aj0rAusU%2FIrEO5t%2FzLDil4TWMYXv%2FMOuQ3sEGOqUB3JuZNdwKQ0e97uhow28DRYLGdcni%2BOBm57DutXDJTEWAY2tmGtEt1NPtyKZOvvQt2bSb7Ti9yLa5UA8axLrpY4WSSIvPHgygjhRthlFvClkJR%2FuCOiZ862aX3cxXgkIVlaZY1dhJiTr3%2BWUhPUurV4dFkzd%2FO107FOxxTd9tvKJkQYi%2FAp0je8L5Bywrw7%2FWZ0cDmzeqBrxpfkvDtJQSugUxThXM&X-Amz-Signature=e115a7bd9b6fb9fef82068676cfc0ea15efa5f782993fa997080d9ae4a14389b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
