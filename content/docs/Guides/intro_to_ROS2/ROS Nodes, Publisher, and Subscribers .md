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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDL253N%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDI%2F5Rf1zW36WtLOcXlI9mnhqxZdZVXfUrGbJjVgmI7jAIhAO6okiMs88tiC%2Bx0IIXCAKrbFZqEqUetzfsUNLnFClAuKv8DCBYQABoMNjM3NDIzMTgzODA1Igw7KwtKyvOw9MMVMGYq3AOJh1A8uK7vMuQRMESDkUAeWWYsq4Ir%2FkAs8ugUEG8Mf245kWDincyGkquFejKno454wTCMog%2FNxL7Z1VNBrcgQxwPSBkKBOAEtUAAVPSz32XdjCoVcrj6oYpeqJUDL%2FEat5c2BGpggqBxdTj8PJc6Zio7ehjR5oh6B5eX2K9PXOtg2qhgQU%2BVDsYCvCYUO0BYvW8Tp9i2swP%2FRDGOnYFGlsTUSK5rUCtgl3VU%2F8QhakTPN2M0xp3IFAvyQbDvYXURWyXQs5mqXWCD9msX6nhbpX5IVHO9ma6NSLdQYrmJmYviR%2BEKZ15RkkZVEPt1wyFbJwGGvnmwc8kK3CQo45d0lT4Pgwo6LbuZPkgxdTslcA%2Fj9nwmr8NacO%2Fg64qdXb2kqVnDee9BLc1v0k0e7di1H76CxkOrTKhzM6cHMxSPOsCmDVs2xwnc%2Byq9AQtyNVDGRhsVzK6FJ3yN0um06IXeiuySlYXvF9flqjmL%2BolvrhgFEoOflN4vt2gdZlYtKtUuOnLBUWrbSo0owDHGR1OZHGA6y3pPPnn8OUbjl%2BlOeNqFuwGQlV7k7hBw0%2B1sKG%2F%2BX%2Ftn1bEzzkKKKK9RxmB1LzkEIO%2F9aCNC00ZUdJYFjBY9R0LRfd244wBkwRjD46KjABjqkAS9zUTxgewMT9OkiJ10dXFpJ0EvTPBu3%2BZvZWOBiEHjvwpP%2BtSnUaZyAsaYJBcEPTKfjlbNYtfg2RWjPm3bGOxV%2B%2B7LC3vEiuUEmdsR259RuGFHGNVQIvd0J7iCYtP%2BW4XILH3OUBdxtS92Bt80Xn%2BT3X4TOsN3YeR8UNcp1Yi%2B71aM0L%2Ft1Zi4qrRm%2FUNQe9gRR61e7stKFvjLoGmoWPRiwAzww&X-Amz-Signature=3809de24e19d9d534fc3fb5c62479c9197fa7e8259dd1b054b61c20c1270fbfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDL253N%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDI%2F5Rf1zW36WtLOcXlI9mnhqxZdZVXfUrGbJjVgmI7jAIhAO6okiMs88tiC%2Bx0IIXCAKrbFZqEqUetzfsUNLnFClAuKv8DCBYQABoMNjM3NDIzMTgzODA1Igw7KwtKyvOw9MMVMGYq3AOJh1A8uK7vMuQRMESDkUAeWWYsq4Ir%2FkAs8ugUEG8Mf245kWDincyGkquFejKno454wTCMog%2FNxL7Z1VNBrcgQxwPSBkKBOAEtUAAVPSz32XdjCoVcrj6oYpeqJUDL%2FEat5c2BGpggqBxdTj8PJc6Zio7ehjR5oh6B5eX2K9PXOtg2qhgQU%2BVDsYCvCYUO0BYvW8Tp9i2swP%2FRDGOnYFGlsTUSK5rUCtgl3VU%2F8QhakTPN2M0xp3IFAvyQbDvYXURWyXQs5mqXWCD9msX6nhbpX5IVHO9ma6NSLdQYrmJmYviR%2BEKZ15RkkZVEPt1wyFbJwGGvnmwc8kK3CQo45d0lT4Pgwo6LbuZPkgxdTslcA%2Fj9nwmr8NacO%2Fg64qdXb2kqVnDee9BLc1v0k0e7di1H76CxkOrTKhzM6cHMxSPOsCmDVs2xwnc%2Byq9AQtyNVDGRhsVzK6FJ3yN0um06IXeiuySlYXvF9flqjmL%2BolvrhgFEoOflN4vt2gdZlYtKtUuOnLBUWrbSo0owDHGR1OZHGA6y3pPPnn8OUbjl%2BlOeNqFuwGQlV7k7hBw0%2B1sKG%2F%2BX%2Ftn1bEzzkKKKK9RxmB1LzkEIO%2F9aCNC00ZUdJYFjBY9R0LRfd244wBkwRjD46KjABjqkAS9zUTxgewMT9OkiJ10dXFpJ0EvTPBu3%2BZvZWOBiEHjvwpP%2BtSnUaZyAsaYJBcEPTKfjlbNYtfg2RWjPm3bGOxV%2B%2B7LC3vEiuUEmdsR259RuGFHGNVQIvd0J7iCYtP%2BW4XILH3OUBdxtS92Bt80Xn%2BT3X4TOsN3YeR8UNcp1Yi%2B71aM0L%2Ft1Zi4qrRm%2FUNQe9gRR61e7stKFvjLoGmoWPRiwAzww&X-Amz-Signature=682ba63bc9f37058996838c3751307d111d9fda901bc98085c0711b7a00b0f89&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDL253N%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDI%2F5Rf1zW36WtLOcXlI9mnhqxZdZVXfUrGbJjVgmI7jAIhAO6okiMs88tiC%2Bx0IIXCAKrbFZqEqUetzfsUNLnFClAuKv8DCBYQABoMNjM3NDIzMTgzODA1Igw7KwtKyvOw9MMVMGYq3AOJh1A8uK7vMuQRMESDkUAeWWYsq4Ir%2FkAs8ugUEG8Mf245kWDincyGkquFejKno454wTCMog%2FNxL7Z1VNBrcgQxwPSBkKBOAEtUAAVPSz32XdjCoVcrj6oYpeqJUDL%2FEat5c2BGpggqBxdTj8PJc6Zio7ehjR5oh6B5eX2K9PXOtg2qhgQU%2BVDsYCvCYUO0BYvW8Tp9i2swP%2FRDGOnYFGlsTUSK5rUCtgl3VU%2F8QhakTPN2M0xp3IFAvyQbDvYXURWyXQs5mqXWCD9msX6nhbpX5IVHO9ma6NSLdQYrmJmYviR%2BEKZ15RkkZVEPt1wyFbJwGGvnmwc8kK3CQo45d0lT4Pgwo6LbuZPkgxdTslcA%2Fj9nwmr8NacO%2Fg64qdXb2kqVnDee9BLc1v0k0e7di1H76CxkOrTKhzM6cHMxSPOsCmDVs2xwnc%2Byq9AQtyNVDGRhsVzK6FJ3yN0um06IXeiuySlYXvF9flqjmL%2BolvrhgFEoOflN4vt2gdZlYtKtUuOnLBUWrbSo0owDHGR1OZHGA6y3pPPnn8OUbjl%2BlOeNqFuwGQlV7k7hBw0%2B1sKG%2F%2BX%2Ftn1bEzzkKKKK9RxmB1LzkEIO%2F9aCNC00ZUdJYFjBY9R0LRfd244wBkwRjD46KjABjqkAS9zUTxgewMT9OkiJ10dXFpJ0EvTPBu3%2BZvZWOBiEHjvwpP%2BtSnUaZyAsaYJBcEPTKfjlbNYtfg2RWjPm3bGOxV%2B%2B7LC3vEiuUEmdsR259RuGFHGNVQIvd0J7iCYtP%2BW4XILH3OUBdxtS92Bt80Xn%2BT3X4TOsN3YeR8UNcp1Yi%2B71aM0L%2Ft1Zi4qrRm%2FUNQe9gRR61e7stKFvjLoGmoWPRiwAzww&X-Amz-Signature=148fdecb030a0546946a5fd7981ca2b15194c0917103a341f38234d7b7be7c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDL253N%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDI%2F5Rf1zW36WtLOcXlI9mnhqxZdZVXfUrGbJjVgmI7jAIhAO6okiMs88tiC%2Bx0IIXCAKrbFZqEqUetzfsUNLnFClAuKv8DCBYQABoMNjM3NDIzMTgzODA1Igw7KwtKyvOw9MMVMGYq3AOJh1A8uK7vMuQRMESDkUAeWWYsq4Ir%2FkAs8ugUEG8Mf245kWDincyGkquFejKno454wTCMog%2FNxL7Z1VNBrcgQxwPSBkKBOAEtUAAVPSz32XdjCoVcrj6oYpeqJUDL%2FEat5c2BGpggqBxdTj8PJc6Zio7ehjR5oh6B5eX2K9PXOtg2qhgQU%2BVDsYCvCYUO0BYvW8Tp9i2swP%2FRDGOnYFGlsTUSK5rUCtgl3VU%2F8QhakTPN2M0xp3IFAvyQbDvYXURWyXQs5mqXWCD9msX6nhbpX5IVHO9ma6NSLdQYrmJmYviR%2BEKZ15RkkZVEPt1wyFbJwGGvnmwc8kK3CQo45d0lT4Pgwo6LbuZPkgxdTslcA%2Fj9nwmr8NacO%2Fg64qdXb2kqVnDee9BLc1v0k0e7di1H76CxkOrTKhzM6cHMxSPOsCmDVs2xwnc%2Byq9AQtyNVDGRhsVzK6FJ3yN0um06IXeiuySlYXvF9flqjmL%2BolvrhgFEoOflN4vt2gdZlYtKtUuOnLBUWrbSo0owDHGR1OZHGA6y3pPPnn8OUbjl%2BlOeNqFuwGQlV7k7hBw0%2B1sKG%2F%2BX%2Ftn1bEzzkKKKK9RxmB1LzkEIO%2F9aCNC00ZUdJYFjBY9R0LRfd244wBkwRjD46KjABjqkAS9zUTxgewMT9OkiJ10dXFpJ0EvTPBu3%2BZvZWOBiEHjvwpP%2BtSnUaZyAsaYJBcEPTKfjlbNYtfg2RWjPm3bGOxV%2B%2B7LC3vEiuUEmdsR259RuGFHGNVQIvd0J7iCYtP%2BW4XILH3OUBdxtS92Bt80Xn%2BT3X4TOsN3YeR8UNcp1Yi%2B71aM0L%2Ft1Zi4qrRm%2FUNQe9gRR61e7stKFvjLoGmoWPRiwAzww&X-Amz-Signature=488a3b0fd68597f7d973f2699de8c63d9f53ee1cb48ddd440d9eb73ca2ac5562&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDL253N%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDI%2F5Rf1zW36WtLOcXlI9mnhqxZdZVXfUrGbJjVgmI7jAIhAO6okiMs88tiC%2Bx0IIXCAKrbFZqEqUetzfsUNLnFClAuKv8DCBYQABoMNjM3NDIzMTgzODA1Igw7KwtKyvOw9MMVMGYq3AOJh1A8uK7vMuQRMESDkUAeWWYsq4Ir%2FkAs8ugUEG8Mf245kWDincyGkquFejKno454wTCMog%2FNxL7Z1VNBrcgQxwPSBkKBOAEtUAAVPSz32XdjCoVcrj6oYpeqJUDL%2FEat5c2BGpggqBxdTj8PJc6Zio7ehjR5oh6B5eX2K9PXOtg2qhgQU%2BVDsYCvCYUO0BYvW8Tp9i2swP%2FRDGOnYFGlsTUSK5rUCtgl3VU%2F8QhakTPN2M0xp3IFAvyQbDvYXURWyXQs5mqXWCD9msX6nhbpX5IVHO9ma6NSLdQYrmJmYviR%2BEKZ15RkkZVEPt1wyFbJwGGvnmwc8kK3CQo45d0lT4Pgwo6LbuZPkgxdTslcA%2Fj9nwmr8NacO%2Fg64qdXb2kqVnDee9BLc1v0k0e7di1H76CxkOrTKhzM6cHMxSPOsCmDVs2xwnc%2Byq9AQtyNVDGRhsVzK6FJ3yN0um06IXeiuySlYXvF9flqjmL%2BolvrhgFEoOflN4vt2gdZlYtKtUuOnLBUWrbSo0owDHGR1OZHGA6y3pPPnn8OUbjl%2BlOeNqFuwGQlV7k7hBw0%2B1sKG%2F%2BX%2Ftn1bEzzkKKKK9RxmB1LzkEIO%2F9aCNC00ZUdJYFjBY9R0LRfd244wBkwRjD46KjABjqkAS9zUTxgewMT9OkiJ10dXFpJ0EvTPBu3%2BZvZWOBiEHjvwpP%2BtSnUaZyAsaYJBcEPTKfjlbNYtfg2RWjPm3bGOxV%2B%2B7LC3vEiuUEmdsR259RuGFHGNVQIvd0J7iCYtP%2BW4XILH3OUBdxtS92Bt80Xn%2BT3X4TOsN3YeR8UNcp1Yi%2B71aM0L%2Ft1Zi4qrRm%2FUNQe9gRR61e7stKFvjLoGmoWPRiwAzww&X-Amz-Signature=72b9a72a376f455830cf61b13f4da91dbc086fe0365cb32b6b85c1b2fd17c104&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDL253N%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDI%2F5Rf1zW36WtLOcXlI9mnhqxZdZVXfUrGbJjVgmI7jAIhAO6okiMs88tiC%2Bx0IIXCAKrbFZqEqUetzfsUNLnFClAuKv8DCBYQABoMNjM3NDIzMTgzODA1Igw7KwtKyvOw9MMVMGYq3AOJh1A8uK7vMuQRMESDkUAeWWYsq4Ir%2FkAs8ugUEG8Mf245kWDincyGkquFejKno454wTCMog%2FNxL7Z1VNBrcgQxwPSBkKBOAEtUAAVPSz32XdjCoVcrj6oYpeqJUDL%2FEat5c2BGpggqBxdTj8PJc6Zio7ehjR5oh6B5eX2K9PXOtg2qhgQU%2BVDsYCvCYUO0BYvW8Tp9i2swP%2FRDGOnYFGlsTUSK5rUCtgl3VU%2F8QhakTPN2M0xp3IFAvyQbDvYXURWyXQs5mqXWCD9msX6nhbpX5IVHO9ma6NSLdQYrmJmYviR%2BEKZ15RkkZVEPt1wyFbJwGGvnmwc8kK3CQo45d0lT4Pgwo6LbuZPkgxdTslcA%2Fj9nwmr8NacO%2Fg64qdXb2kqVnDee9BLc1v0k0e7di1H76CxkOrTKhzM6cHMxSPOsCmDVs2xwnc%2Byq9AQtyNVDGRhsVzK6FJ3yN0um06IXeiuySlYXvF9flqjmL%2BolvrhgFEoOflN4vt2gdZlYtKtUuOnLBUWrbSo0owDHGR1OZHGA6y3pPPnn8OUbjl%2BlOeNqFuwGQlV7k7hBw0%2B1sKG%2F%2BX%2Ftn1bEzzkKKKK9RxmB1LzkEIO%2F9aCNC00ZUdJYFjBY9R0LRfd244wBkwRjD46KjABjqkAS9zUTxgewMT9OkiJ10dXFpJ0EvTPBu3%2BZvZWOBiEHjvwpP%2BtSnUaZyAsaYJBcEPTKfjlbNYtfg2RWjPm3bGOxV%2B%2B7LC3vEiuUEmdsR259RuGFHGNVQIvd0J7iCYtP%2BW4XILH3OUBdxtS92Bt80Xn%2BT3X4TOsN3YeR8UNcp1Yi%2B71aM0L%2Ft1Zi4qrRm%2FUNQe9gRR61e7stKFvjLoGmoWPRiwAzww&X-Amz-Signature=e451749b6d5d8c4461c399063d09a9bec2b803f15d765bac01073e472b2ee029&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDL253N%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDI%2F5Rf1zW36WtLOcXlI9mnhqxZdZVXfUrGbJjVgmI7jAIhAO6okiMs88tiC%2Bx0IIXCAKrbFZqEqUetzfsUNLnFClAuKv8DCBYQABoMNjM3NDIzMTgzODA1Igw7KwtKyvOw9MMVMGYq3AOJh1A8uK7vMuQRMESDkUAeWWYsq4Ir%2FkAs8ugUEG8Mf245kWDincyGkquFejKno454wTCMog%2FNxL7Z1VNBrcgQxwPSBkKBOAEtUAAVPSz32XdjCoVcrj6oYpeqJUDL%2FEat5c2BGpggqBxdTj8PJc6Zio7ehjR5oh6B5eX2K9PXOtg2qhgQU%2BVDsYCvCYUO0BYvW8Tp9i2swP%2FRDGOnYFGlsTUSK5rUCtgl3VU%2F8QhakTPN2M0xp3IFAvyQbDvYXURWyXQs5mqXWCD9msX6nhbpX5IVHO9ma6NSLdQYrmJmYviR%2BEKZ15RkkZVEPt1wyFbJwGGvnmwc8kK3CQo45d0lT4Pgwo6LbuZPkgxdTslcA%2Fj9nwmr8NacO%2Fg64qdXb2kqVnDee9BLc1v0k0e7di1H76CxkOrTKhzM6cHMxSPOsCmDVs2xwnc%2Byq9AQtyNVDGRhsVzK6FJ3yN0um06IXeiuySlYXvF9flqjmL%2BolvrhgFEoOflN4vt2gdZlYtKtUuOnLBUWrbSo0owDHGR1OZHGA6y3pPPnn8OUbjl%2BlOeNqFuwGQlV7k7hBw0%2B1sKG%2F%2BX%2Ftn1bEzzkKKKK9RxmB1LzkEIO%2F9aCNC00ZUdJYFjBY9R0LRfd244wBkwRjD46KjABjqkAS9zUTxgewMT9OkiJ10dXFpJ0EvTPBu3%2BZvZWOBiEHjvwpP%2BtSnUaZyAsaYJBcEPTKfjlbNYtfg2RWjPm3bGOxV%2B%2B7LC3vEiuUEmdsR259RuGFHGNVQIvd0J7iCYtP%2BW4XILH3OUBdxtS92Bt80Xn%2BT3X4TOsN3YeR8UNcp1Yi%2B71aM0L%2Ft1Zi4qrRm%2FUNQe9gRR61e7stKFvjLoGmoWPRiwAzww&X-Amz-Signature=7162a1b070c9e21b1e370df6aee5ee0fefcc8c3fccba8ed656cd5ff1ecda6c99&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSDL253N%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDI%2F5Rf1zW36WtLOcXlI9mnhqxZdZVXfUrGbJjVgmI7jAIhAO6okiMs88tiC%2Bx0IIXCAKrbFZqEqUetzfsUNLnFClAuKv8DCBYQABoMNjM3NDIzMTgzODA1Igw7KwtKyvOw9MMVMGYq3AOJh1A8uK7vMuQRMESDkUAeWWYsq4Ir%2FkAs8ugUEG8Mf245kWDincyGkquFejKno454wTCMog%2FNxL7Z1VNBrcgQxwPSBkKBOAEtUAAVPSz32XdjCoVcrj6oYpeqJUDL%2FEat5c2BGpggqBxdTj8PJc6Zio7ehjR5oh6B5eX2K9PXOtg2qhgQU%2BVDsYCvCYUO0BYvW8Tp9i2swP%2FRDGOnYFGlsTUSK5rUCtgl3VU%2F8QhakTPN2M0xp3IFAvyQbDvYXURWyXQs5mqXWCD9msX6nhbpX5IVHO9ma6NSLdQYrmJmYviR%2BEKZ15RkkZVEPt1wyFbJwGGvnmwc8kK3CQo45d0lT4Pgwo6LbuZPkgxdTslcA%2Fj9nwmr8NacO%2Fg64qdXb2kqVnDee9BLc1v0k0e7di1H76CxkOrTKhzM6cHMxSPOsCmDVs2xwnc%2Byq9AQtyNVDGRhsVzK6FJ3yN0um06IXeiuySlYXvF9flqjmL%2BolvrhgFEoOflN4vt2gdZlYtKtUuOnLBUWrbSo0owDHGR1OZHGA6y3pPPnn8OUbjl%2BlOeNqFuwGQlV7k7hBw0%2B1sKG%2F%2BX%2Ftn1bEzzkKKKK9RxmB1LzkEIO%2F9aCNC00ZUdJYFjBY9R0LRfd244wBkwRjD46KjABjqkAS9zUTxgewMT9OkiJ10dXFpJ0EvTPBu3%2BZvZWOBiEHjvwpP%2BtSnUaZyAsaYJBcEPTKfjlbNYtfg2RWjPm3bGOxV%2B%2B7LC3vEiuUEmdsR259RuGFHGNVQIvd0J7iCYtP%2BW4XILH3OUBdxtS92Bt80Xn%2BT3X4TOsN3YeR8UNcp1Yi%2B71aM0L%2Ft1Zi4qrRm%2FUNQe9gRR61e7stKFvjLoGmoWPRiwAzww&X-Amz-Signature=5b61e644fec1a1ece963b246c0292200b285555dc83f6ce1bb2f85e799cd4951&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
