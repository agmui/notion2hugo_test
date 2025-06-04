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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXXNHN7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHfS7tHq33uyHqXYJOMBeufm2mlfJvyZdijRS2HGnDpCAiBJ7AYUGSNDVj62yWJal0AN25YFKPhSAdfEvwmwNarF8Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIb0%2BDz31lJej3DIDKtwDgChCdqdC22lOCXkmVtbxEJz2F5dJhT35V55dZo%2FKtr2Ft3LPmDMtRAFUHAv1lKsXjWwkLOU1TdrnzxHy7zJyMBHT%2FIBCr2MxoWOPTG6cMFfwe2jZww9DSem%2BaLWDlkwBRK0XcfSveskLQuxe%2BZeJjFuWmP5PwqBgEkKko3Bz1SxAtH6epHeCmeRh8obiljbGjcLWnsailMZjZnjwjPaZj8vAqr%2FpSw8hSbYRPrNBYsD9OkcGWJayQA7BkgvZy05Fnq2BGs%2FLzuMMHyAlfsH4gaAWtIcA9Gq0GkXxoG6jEDyekOkLgmd9JDnHqpY4xyOHzEGb3iXdDiemG%2BJqZ31FuZvwhSRoCEI0LapVQdbiRBUy2miVOyFdyzqlMo%2BCwpfOOwtlvcA%2F3Uzq9bZw6kvp%2F5VlY43zt5RhkBbfGFcMOsXcg7%2BQ2gGok%2BXd7pT4EpBGrUqYF0vwIL1Ber6I4CHzhrmD6LFHJV8Rv00t3B2zqyjfGaWdEbDAclj9Sxpl5moVePkNV5QBqbMEknTnANNd9SFJkt1dPrZJuFuOP1IXV5iVIZV31XNH15AGqSIIeGwWLt%2BshAf5ILkyTUpoRfFQkajEKOpV39ch1mFP78cfax3l%2F%2FWHA%2FZlBtfWIoEw%2Ba2CwgY6pgHOzsS277an6I0w8bgJYZFWc9mYUH4kOMB2SMByZDadJlYNi3V6SmKrJrpOFPMNjNPW6%2FtK7Q2kfltFIAbPiO8Cto4q29BXLvns%2BM22TJ4iYxDY2YIrpJMAD4%2FZ9zSS%2FZ5mJnSvJ75SxvDcjqdBDPkppglJyAmBjr1%2FMLl%2FNQiq%2F83QDv4QzXoaTtET3rlMR7qbyA28ChoSCxo5w%2BUlfnHCzcfjVsr%2B&X-Amz-Signature=3bca6d2bb7388a40c8eb0f7d348d2c603a640602fbcc2d18e6a03a366ab2c464&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXXNHN7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHfS7tHq33uyHqXYJOMBeufm2mlfJvyZdijRS2HGnDpCAiBJ7AYUGSNDVj62yWJal0AN25YFKPhSAdfEvwmwNarF8Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIb0%2BDz31lJej3DIDKtwDgChCdqdC22lOCXkmVtbxEJz2F5dJhT35V55dZo%2FKtr2Ft3LPmDMtRAFUHAv1lKsXjWwkLOU1TdrnzxHy7zJyMBHT%2FIBCr2MxoWOPTG6cMFfwe2jZww9DSem%2BaLWDlkwBRK0XcfSveskLQuxe%2BZeJjFuWmP5PwqBgEkKko3Bz1SxAtH6epHeCmeRh8obiljbGjcLWnsailMZjZnjwjPaZj8vAqr%2FpSw8hSbYRPrNBYsD9OkcGWJayQA7BkgvZy05Fnq2BGs%2FLzuMMHyAlfsH4gaAWtIcA9Gq0GkXxoG6jEDyekOkLgmd9JDnHqpY4xyOHzEGb3iXdDiemG%2BJqZ31FuZvwhSRoCEI0LapVQdbiRBUy2miVOyFdyzqlMo%2BCwpfOOwtlvcA%2F3Uzq9bZw6kvp%2F5VlY43zt5RhkBbfGFcMOsXcg7%2BQ2gGok%2BXd7pT4EpBGrUqYF0vwIL1Ber6I4CHzhrmD6LFHJV8Rv00t3B2zqyjfGaWdEbDAclj9Sxpl5moVePkNV5QBqbMEknTnANNd9SFJkt1dPrZJuFuOP1IXV5iVIZV31XNH15AGqSIIeGwWLt%2BshAf5ILkyTUpoRfFQkajEKOpV39ch1mFP78cfax3l%2F%2FWHA%2FZlBtfWIoEw%2Ba2CwgY6pgHOzsS277an6I0w8bgJYZFWc9mYUH4kOMB2SMByZDadJlYNi3V6SmKrJrpOFPMNjNPW6%2FtK7Q2kfltFIAbPiO8Cto4q29BXLvns%2BM22TJ4iYxDY2YIrpJMAD4%2FZ9zSS%2FZ5mJnSvJ75SxvDcjqdBDPkppglJyAmBjr1%2FMLl%2FNQiq%2F83QDv4QzXoaTtET3rlMR7qbyA28ChoSCxo5w%2BUlfnHCzcfjVsr%2B&X-Amz-Signature=b6d62279778dfbec7d135eaaf2a069eb3407784703fab064baeca1c9cdba0e85&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXXNHN7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHfS7tHq33uyHqXYJOMBeufm2mlfJvyZdijRS2HGnDpCAiBJ7AYUGSNDVj62yWJal0AN25YFKPhSAdfEvwmwNarF8Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIb0%2BDz31lJej3DIDKtwDgChCdqdC22lOCXkmVtbxEJz2F5dJhT35V55dZo%2FKtr2Ft3LPmDMtRAFUHAv1lKsXjWwkLOU1TdrnzxHy7zJyMBHT%2FIBCr2MxoWOPTG6cMFfwe2jZww9DSem%2BaLWDlkwBRK0XcfSveskLQuxe%2BZeJjFuWmP5PwqBgEkKko3Bz1SxAtH6epHeCmeRh8obiljbGjcLWnsailMZjZnjwjPaZj8vAqr%2FpSw8hSbYRPrNBYsD9OkcGWJayQA7BkgvZy05Fnq2BGs%2FLzuMMHyAlfsH4gaAWtIcA9Gq0GkXxoG6jEDyekOkLgmd9JDnHqpY4xyOHzEGb3iXdDiemG%2BJqZ31FuZvwhSRoCEI0LapVQdbiRBUy2miVOyFdyzqlMo%2BCwpfOOwtlvcA%2F3Uzq9bZw6kvp%2F5VlY43zt5RhkBbfGFcMOsXcg7%2BQ2gGok%2BXd7pT4EpBGrUqYF0vwIL1Ber6I4CHzhrmD6LFHJV8Rv00t3B2zqyjfGaWdEbDAclj9Sxpl5moVePkNV5QBqbMEknTnANNd9SFJkt1dPrZJuFuOP1IXV5iVIZV31XNH15AGqSIIeGwWLt%2BshAf5ILkyTUpoRfFQkajEKOpV39ch1mFP78cfax3l%2F%2FWHA%2FZlBtfWIoEw%2Ba2CwgY6pgHOzsS277an6I0w8bgJYZFWc9mYUH4kOMB2SMByZDadJlYNi3V6SmKrJrpOFPMNjNPW6%2FtK7Q2kfltFIAbPiO8Cto4q29BXLvns%2BM22TJ4iYxDY2YIrpJMAD4%2FZ9zSS%2FZ5mJnSvJ75SxvDcjqdBDPkppglJyAmBjr1%2FMLl%2FNQiq%2F83QDv4QzXoaTtET3rlMR7qbyA28ChoSCxo5w%2BUlfnHCzcfjVsr%2B&X-Amz-Signature=43686dbb412431787d37d5c277c7995a69725d54a8054d047a8171b6b3f0d01f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXXNHN7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHfS7tHq33uyHqXYJOMBeufm2mlfJvyZdijRS2HGnDpCAiBJ7AYUGSNDVj62yWJal0AN25YFKPhSAdfEvwmwNarF8Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIb0%2BDz31lJej3DIDKtwDgChCdqdC22lOCXkmVtbxEJz2F5dJhT35V55dZo%2FKtr2Ft3LPmDMtRAFUHAv1lKsXjWwkLOU1TdrnzxHy7zJyMBHT%2FIBCr2MxoWOPTG6cMFfwe2jZww9DSem%2BaLWDlkwBRK0XcfSveskLQuxe%2BZeJjFuWmP5PwqBgEkKko3Bz1SxAtH6epHeCmeRh8obiljbGjcLWnsailMZjZnjwjPaZj8vAqr%2FpSw8hSbYRPrNBYsD9OkcGWJayQA7BkgvZy05Fnq2BGs%2FLzuMMHyAlfsH4gaAWtIcA9Gq0GkXxoG6jEDyekOkLgmd9JDnHqpY4xyOHzEGb3iXdDiemG%2BJqZ31FuZvwhSRoCEI0LapVQdbiRBUy2miVOyFdyzqlMo%2BCwpfOOwtlvcA%2F3Uzq9bZw6kvp%2F5VlY43zt5RhkBbfGFcMOsXcg7%2BQ2gGok%2BXd7pT4EpBGrUqYF0vwIL1Ber6I4CHzhrmD6LFHJV8Rv00t3B2zqyjfGaWdEbDAclj9Sxpl5moVePkNV5QBqbMEknTnANNd9SFJkt1dPrZJuFuOP1IXV5iVIZV31XNH15AGqSIIeGwWLt%2BshAf5ILkyTUpoRfFQkajEKOpV39ch1mFP78cfax3l%2F%2FWHA%2FZlBtfWIoEw%2Ba2CwgY6pgHOzsS277an6I0w8bgJYZFWc9mYUH4kOMB2SMByZDadJlYNi3V6SmKrJrpOFPMNjNPW6%2FtK7Q2kfltFIAbPiO8Cto4q29BXLvns%2BM22TJ4iYxDY2YIrpJMAD4%2FZ9zSS%2FZ5mJnSvJ75SxvDcjqdBDPkppglJyAmBjr1%2FMLl%2FNQiq%2F83QDv4QzXoaTtET3rlMR7qbyA28ChoSCxo5w%2BUlfnHCzcfjVsr%2B&X-Amz-Signature=59d6929f4a65a2805fa874ea4c4b6d9081dd5a4f3381ef575fd4366d7c2343bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXXNHN7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHfS7tHq33uyHqXYJOMBeufm2mlfJvyZdijRS2HGnDpCAiBJ7AYUGSNDVj62yWJal0AN25YFKPhSAdfEvwmwNarF8Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIb0%2BDz31lJej3DIDKtwDgChCdqdC22lOCXkmVtbxEJz2F5dJhT35V55dZo%2FKtr2Ft3LPmDMtRAFUHAv1lKsXjWwkLOU1TdrnzxHy7zJyMBHT%2FIBCr2MxoWOPTG6cMFfwe2jZww9DSem%2BaLWDlkwBRK0XcfSveskLQuxe%2BZeJjFuWmP5PwqBgEkKko3Bz1SxAtH6epHeCmeRh8obiljbGjcLWnsailMZjZnjwjPaZj8vAqr%2FpSw8hSbYRPrNBYsD9OkcGWJayQA7BkgvZy05Fnq2BGs%2FLzuMMHyAlfsH4gaAWtIcA9Gq0GkXxoG6jEDyekOkLgmd9JDnHqpY4xyOHzEGb3iXdDiemG%2BJqZ31FuZvwhSRoCEI0LapVQdbiRBUy2miVOyFdyzqlMo%2BCwpfOOwtlvcA%2F3Uzq9bZw6kvp%2F5VlY43zt5RhkBbfGFcMOsXcg7%2BQ2gGok%2BXd7pT4EpBGrUqYF0vwIL1Ber6I4CHzhrmD6LFHJV8Rv00t3B2zqyjfGaWdEbDAclj9Sxpl5moVePkNV5QBqbMEknTnANNd9SFJkt1dPrZJuFuOP1IXV5iVIZV31XNH15AGqSIIeGwWLt%2BshAf5ILkyTUpoRfFQkajEKOpV39ch1mFP78cfax3l%2F%2FWHA%2FZlBtfWIoEw%2Ba2CwgY6pgHOzsS277an6I0w8bgJYZFWc9mYUH4kOMB2SMByZDadJlYNi3V6SmKrJrpOFPMNjNPW6%2FtK7Q2kfltFIAbPiO8Cto4q29BXLvns%2BM22TJ4iYxDY2YIrpJMAD4%2FZ9zSS%2FZ5mJnSvJ75SxvDcjqdBDPkppglJyAmBjr1%2FMLl%2FNQiq%2F83QDv4QzXoaTtET3rlMR7qbyA28ChoSCxo5w%2BUlfnHCzcfjVsr%2B&X-Amz-Signature=2d19432630640753a3b94b39d9fbf95e64a8adf4757da37efc9ee5cd35f0bdc5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXXNHN7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHfS7tHq33uyHqXYJOMBeufm2mlfJvyZdijRS2HGnDpCAiBJ7AYUGSNDVj62yWJal0AN25YFKPhSAdfEvwmwNarF8Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIb0%2BDz31lJej3DIDKtwDgChCdqdC22lOCXkmVtbxEJz2F5dJhT35V55dZo%2FKtr2Ft3LPmDMtRAFUHAv1lKsXjWwkLOU1TdrnzxHy7zJyMBHT%2FIBCr2MxoWOPTG6cMFfwe2jZww9DSem%2BaLWDlkwBRK0XcfSveskLQuxe%2BZeJjFuWmP5PwqBgEkKko3Bz1SxAtH6epHeCmeRh8obiljbGjcLWnsailMZjZnjwjPaZj8vAqr%2FpSw8hSbYRPrNBYsD9OkcGWJayQA7BkgvZy05Fnq2BGs%2FLzuMMHyAlfsH4gaAWtIcA9Gq0GkXxoG6jEDyekOkLgmd9JDnHqpY4xyOHzEGb3iXdDiemG%2BJqZ31FuZvwhSRoCEI0LapVQdbiRBUy2miVOyFdyzqlMo%2BCwpfOOwtlvcA%2F3Uzq9bZw6kvp%2F5VlY43zt5RhkBbfGFcMOsXcg7%2BQ2gGok%2BXd7pT4EpBGrUqYF0vwIL1Ber6I4CHzhrmD6LFHJV8Rv00t3B2zqyjfGaWdEbDAclj9Sxpl5moVePkNV5QBqbMEknTnANNd9SFJkt1dPrZJuFuOP1IXV5iVIZV31XNH15AGqSIIeGwWLt%2BshAf5ILkyTUpoRfFQkajEKOpV39ch1mFP78cfax3l%2F%2FWHA%2FZlBtfWIoEw%2Ba2CwgY6pgHOzsS277an6I0w8bgJYZFWc9mYUH4kOMB2SMByZDadJlYNi3V6SmKrJrpOFPMNjNPW6%2FtK7Q2kfltFIAbPiO8Cto4q29BXLvns%2BM22TJ4iYxDY2YIrpJMAD4%2FZ9zSS%2FZ5mJnSvJ75SxvDcjqdBDPkppglJyAmBjr1%2FMLl%2FNQiq%2F83QDv4QzXoaTtET3rlMR7qbyA28ChoSCxo5w%2BUlfnHCzcfjVsr%2B&X-Amz-Signature=b6b493a9fa912cd9cc3fa4b641d52bbf07d68652312e3ba3d5dc618be3ea05db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXXNHN7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHfS7tHq33uyHqXYJOMBeufm2mlfJvyZdijRS2HGnDpCAiBJ7AYUGSNDVj62yWJal0AN25YFKPhSAdfEvwmwNarF8Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIb0%2BDz31lJej3DIDKtwDgChCdqdC22lOCXkmVtbxEJz2F5dJhT35V55dZo%2FKtr2Ft3LPmDMtRAFUHAv1lKsXjWwkLOU1TdrnzxHy7zJyMBHT%2FIBCr2MxoWOPTG6cMFfwe2jZww9DSem%2BaLWDlkwBRK0XcfSveskLQuxe%2BZeJjFuWmP5PwqBgEkKko3Bz1SxAtH6epHeCmeRh8obiljbGjcLWnsailMZjZnjwjPaZj8vAqr%2FpSw8hSbYRPrNBYsD9OkcGWJayQA7BkgvZy05Fnq2BGs%2FLzuMMHyAlfsH4gaAWtIcA9Gq0GkXxoG6jEDyekOkLgmd9JDnHqpY4xyOHzEGb3iXdDiemG%2BJqZ31FuZvwhSRoCEI0LapVQdbiRBUy2miVOyFdyzqlMo%2BCwpfOOwtlvcA%2F3Uzq9bZw6kvp%2F5VlY43zt5RhkBbfGFcMOsXcg7%2BQ2gGok%2BXd7pT4EpBGrUqYF0vwIL1Ber6I4CHzhrmD6LFHJV8Rv00t3B2zqyjfGaWdEbDAclj9Sxpl5moVePkNV5QBqbMEknTnANNd9SFJkt1dPrZJuFuOP1IXV5iVIZV31XNH15AGqSIIeGwWLt%2BshAf5ILkyTUpoRfFQkajEKOpV39ch1mFP78cfax3l%2F%2FWHA%2FZlBtfWIoEw%2Ba2CwgY6pgHOzsS277an6I0w8bgJYZFWc9mYUH4kOMB2SMByZDadJlYNi3V6SmKrJrpOFPMNjNPW6%2FtK7Q2kfltFIAbPiO8Cto4q29BXLvns%2BM22TJ4iYxDY2YIrpJMAD4%2FZ9zSS%2FZ5mJnSvJ75SxvDcjqdBDPkppglJyAmBjr1%2FMLl%2FNQiq%2F83QDv4QzXoaTtET3rlMR7qbyA28ChoSCxo5w%2BUlfnHCzcfjVsr%2B&X-Amz-Signature=74b562800f6ad81f5a75e9863782ee4140cd4606e94d0c7d30b08ba984ad841a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXXNHN7%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T200752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHfS7tHq33uyHqXYJOMBeufm2mlfJvyZdijRS2HGnDpCAiBJ7AYUGSNDVj62yWJal0AN25YFKPhSAdfEvwmwNarF8Sr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMIb0%2BDz31lJej3DIDKtwDgChCdqdC22lOCXkmVtbxEJz2F5dJhT35V55dZo%2FKtr2Ft3LPmDMtRAFUHAv1lKsXjWwkLOU1TdrnzxHy7zJyMBHT%2FIBCr2MxoWOPTG6cMFfwe2jZww9DSem%2BaLWDlkwBRK0XcfSveskLQuxe%2BZeJjFuWmP5PwqBgEkKko3Bz1SxAtH6epHeCmeRh8obiljbGjcLWnsailMZjZnjwjPaZj8vAqr%2FpSw8hSbYRPrNBYsD9OkcGWJayQA7BkgvZy05Fnq2BGs%2FLzuMMHyAlfsH4gaAWtIcA9Gq0GkXxoG6jEDyekOkLgmd9JDnHqpY4xyOHzEGb3iXdDiemG%2BJqZ31FuZvwhSRoCEI0LapVQdbiRBUy2miVOyFdyzqlMo%2BCwpfOOwtlvcA%2F3Uzq9bZw6kvp%2F5VlY43zt5RhkBbfGFcMOsXcg7%2BQ2gGok%2BXd7pT4EpBGrUqYF0vwIL1Ber6I4CHzhrmD6LFHJV8Rv00t3B2zqyjfGaWdEbDAclj9Sxpl5moVePkNV5QBqbMEknTnANNd9SFJkt1dPrZJuFuOP1IXV5iVIZV31XNH15AGqSIIeGwWLt%2BshAf5ILkyTUpoRfFQkajEKOpV39ch1mFP78cfax3l%2F%2FWHA%2FZlBtfWIoEw%2Ba2CwgY6pgHOzsS277an6I0w8bgJYZFWc9mYUH4kOMB2SMByZDadJlYNi3V6SmKrJrpOFPMNjNPW6%2FtK7Q2kfltFIAbPiO8Cto4q29BXLvns%2BM22TJ4iYxDY2YIrpJMAD4%2FZ9zSS%2FZ5mJnSvJ75SxvDcjqdBDPkppglJyAmBjr1%2FMLl%2FNQiq%2F83QDv4QzXoaTtET3rlMR7qbyA28ChoSCxo5w%2BUlfnHCzcfjVsr%2B&X-Amz-Signature=bf2e1c33eac3832f40ed1999eb4fa0f8b26bf6336213f903a9d57da24df629c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
