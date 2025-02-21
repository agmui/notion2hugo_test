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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ4YGSL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoh8gYeaNDABLzDii5bTkE8NxJFH2%2BZJv5akg7SoWfvAiEA0qJu0%2FoLkInHZpHGqWSuTntkU3yswTeOcm3pdx83LwwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJ%2BISoDOZEaMfPATCrcA8FQXOkX1znjT87NFRxb1af%2BhSMTPmVE9vchwLriMysSQmNl%2B6FeQUR2ZwIzL7AzyuDLbbcBPM2w2m6xZHfC49UqYLRkWSm52UWDOB%2F52O%2F5SPKzMmFSIFQUaJ1Mre2Fp3lbCwzmbujVZn%2B6ed2oBzCIFwjC5983KN6rvN3ts8njKeAUWIGe9Wh01QR5thO0%2FedZg9nRSU4S7xcRKDi4FW9Dxil86VuN6GBgS%2BFjOUWakFg8zLwcrMC357dTvQeSJRoIxRUpgaUmwRwBsrO%2FHN3T0gqgwk6kIOzu4dRwkCLy61J87jGN0bgNLKh%2BQv%2FW6Y0kJqnoeb0abSYEe9U%2BTziBmZJmbzXjxH8A6J6bkRoderBUZop87qPPgWwFGC8HcOevJDwEtOMW0VMpNlPavF9aQExGqZDCl926EBa487KXAlgOSo961zrAPbBER8J52rZOtPJdXna%2ByspzRSVFlm9PRGACq9D9Amzv8hz0MvkRuHBzgxq5LZkbSRY2h2wFp7jDrzmciR7sTx3Cu1rGOQ2MSUF6ltymLm2OMRnXx%2BYbnSxwTdvkzwgaTPWB8XNKDo7fxI7y3yLrzGR8i4MEYzRXbZMWEXqyJjWtp%2FXJ%2Bmd9f2%2BwMzznhiQJC43ZMMWG4L0GOqUBhocRLJMJATicIb45qVa8ieD2VPxgsApbzlIcORSZ9ViBT%2BTovPDEAWygIdLnzutoqCxhanTlhHQ%2FnXnHN1jZpXOYhOg4DErXQqKm2hyii8JZdC%2BE5%2B8d8PKBDlN9%2BfCQeD43gbsqLXlgzA9R%2BZi1tOtmsOYyzkfrQ2QtZHujkEKB5bwqv6kCFM6vm6hlVXUfgfIanLTGVxO1IeHaepdvD59pANUm&X-Amz-Signature=a8f99983959ece2dcbd4316656e22bb6ccbc726f4e3d60846ffa0a7909d5d82a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ4YGSL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoh8gYeaNDABLzDii5bTkE8NxJFH2%2BZJv5akg7SoWfvAiEA0qJu0%2FoLkInHZpHGqWSuTntkU3yswTeOcm3pdx83LwwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJ%2BISoDOZEaMfPATCrcA8FQXOkX1znjT87NFRxb1af%2BhSMTPmVE9vchwLriMysSQmNl%2B6FeQUR2ZwIzL7AzyuDLbbcBPM2w2m6xZHfC49UqYLRkWSm52UWDOB%2F52O%2F5SPKzMmFSIFQUaJ1Mre2Fp3lbCwzmbujVZn%2B6ed2oBzCIFwjC5983KN6rvN3ts8njKeAUWIGe9Wh01QR5thO0%2FedZg9nRSU4S7xcRKDi4FW9Dxil86VuN6GBgS%2BFjOUWakFg8zLwcrMC357dTvQeSJRoIxRUpgaUmwRwBsrO%2FHN3T0gqgwk6kIOzu4dRwkCLy61J87jGN0bgNLKh%2BQv%2FW6Y0kJqnoeb0abSYEe9U%2BTziBmZJmbzXjxH8A6J6bkRoderBUZop87qPPgWwFGC8HcOevJDwEtOMW0VMpNlPavF9aQExGqZDCl926EBa487KXAlgOSo961zrAPbBER8J52rZOtPJdXna%2ByspzRSVFlm9PRGACq9D9Amzv8hz0MvkRuHBzgxq5LZkbSRY2h2wFp7jDrzmciR7sTx3Cu1rGOQ2MSUF6ltymLm2OMRnXx%2BYbnSxwTdvkzwgaTPWB8XNKDo7fxI7y3yLrzGR8i4MEYzRXbZMWEXqyJjWtp%2FXJ%2Bmd9f2%2BwMzznhiQJC43ZMMWG4L0GOqUBhocRLJMJATicIb45qVa8ieD2VPxgsApbzlIcORSZ9ViBT%2BTovPDEAWygIdLnzutoqCxhanTlhHQ%2FnXnHN1jZpXOYhOg4DErXQqKm2hyii8JZdC%2BE5%2B8d8PKBDlN9%2BfCQeD43gbsqLXlgzA9R%2BZi1tOtmsOYyzkfrQ2QtZHujkEKB5bwqv6kCFM6vm6hlVXUfgfIanLTGVxO1IeHaepdvD59pANUm&X-Amz-Signature=ef28806364a1592ec11fc515c8f99084c65d8f28cb7dee5899c7654e16cac6cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ4YGSL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoh8gYeaNDABLzDii5bTkE8NxJFH2%2BZJv5akg7SoWfvAiEA0qJu0%2FoLkInHZpHGqWSuTntkU3yswTeOcm3pdx83LwwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJ%2BISoDOZEaMfPATCrcA8FQXOkX1znjT87NFRxb1af%2BhSMTPmVE9vchwLriMysSQmNl%2B6FeQUR2ZwIzL7AzyuDLbbcBPM2w2m6xZHfC49UqYLRkWSm52UWDOB%2F52O%2F5SPKzMmFSIFQUaJ1Mre2Fp3lbCwzmbujVZn%2B6ed2oBzCIFwjC5983KN6rvN3ts8njKeAUWIGe9Wh01QR5thO0%2FedZg9nRSU4S7xcRKDi4FW9Dxil86VuN6GBgS%2BFjOUWakFg8zLwcrMC357dTvQeSJRoIxRUpgaUmwRwBsrO%2FHN3T0gqgwk6kIOzu4dRwkCLy61J87jGN0bgNLKh%2BQv%2FW6Y0kJqnoeb0abSYEe9U%2BTziBmZJmbzXjxH8A6J6bkRoderBUZop87qPPgWwFGC8HcOevJDwEtOMW0VMpNlPavF9aQExGqZDCl926EBa487KXAlgOSo961zrAPbBER8J52rZOtPJdXna%2ByspzRSVFlm9PRGACq9D9Amzv8hz0MvkRuHBzgxq5LZkbSRY2h2wFp7jDrzmciR7sTx3Cu1rGOQ2MSUF6ltymLm2OMRnXx%2BYbnSxwTdvkzwgaTPWB8XNKDo7fxI7y3yLrzGR8i4MEYzRXbZMWEXqyJjWtp%2FXJ%2Bmd9f2%2BwMzznhiQJC43ZMMWG4L0GOqUBhocRLJMJATicIb45qVa8ieD2VPxgsApbzlIcORSZ9ViBT%2BTovPDEAWygIdLnzutoqCxhanTlhHQ%2FnXnHN1jZpXOYhOg4DErXQqKm2hyii8JZdC%2BE5%2B8d8PKBDlN9%2BfCQeD43gbsqLXlgzA9R%2BZi1tOtmsOYyzkfrQ2QtZHujkEKB5bwqv6kCFM6vm6hlVXUfgfIanLTGVxO1IeHaepdvD59pANUm&X-Amz-Signature=471c0a2b8068ada746d030e8da160680721bf07bd46965f2e8ee7e584eeac968&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ4YGSL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoh8gYeaNDABLzDii5bTkE8NxJFH2%2BZJv5akg7SoWfvAiEA0qJu0%2FoLkInHZpHGqWSuTntkU3yswTeOcm3pdx83LwwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJ%2BISoDOZEaMfPATCrcA8FQXOkX1znjT87NFRxb1af%2BhSMTPmVE9vchwLriMysSQmNl%2B6FeQUR2ZwIzL7AzyuDLbbcBPM2w2m6xZHfC49UqYLRkWSm52UWDOB%2F52O%2F5SPKzMmFSIFQUaJ1Mre2Fp3lbCwzmbujVZn%2B6ed2oBzCIFwjC5983KN6rvN3ts8njKeAUWIGe9Wh01QR5thO0%2FedZg9nRSU4S7xcRKDi4FW9Dxil86VuN6GBgS%2BFjOUWakFg8zLwcrMC357dTvQeSJRoIxRUpgaUmwRwBsrO%2FHN3T0gqgwk6kIOzu4dRwkCLy61J87jGN0bgNLKh%2BQv%2FW6Y0kJqnoeb0abSYEe9U%2BTziBmZJmbzXjxH8A6J6bkRoderBUZop87qPPgWwFGC8HcOevJDwEtOMW0VMpNlPavF9aQExGqZDCl926EBa487KXAlgOSo961zrAPbBER8J52rZOtPJdXna%2ByspzRSVFlm9PRGACq9D9Amzv8hz0MvkRuHBzgxq5LZkbSRY2h2wFp7jDrzmciR7sTx3Cu1rGOQ2MSUF6ltymLm2OMRnXx%2BYbnSxwTdvkzwgaTPWB8XNKDo7fxI7y3yLrzGR8i4MEYzRXbZMWEXqyJjWtp%2FXJ%2Bmd9f2%2BwMzznhiQJC43ZMMWG4L0GOqUBhocRLJMJATicIb45qVa8ieD2VPxgsApbzlIcORSZ9ViBT%2BTovPDEAWygIdLnzutoqCxhanTlhHQ%2FnXnHN1jZpXOYhOg4DErXQqKm2hyii8JZdC%2BE5%2B8d8PKBDlN9%2BfCQeD43gbsqLXlgzA9R%2BZi1tOtmsOYyzkfrQ2QtZHujkEKB5bwqv6kCFM6vm6hlVXUfgfIanLTGVxO1IeHaepdvD59pANUm&X-Amz-Signature=b7b2edf5da683b063bf6f0ff978ff16d8a383e6741622e2c87059430deb091a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ4YGSL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoh8gYeaNDABLzDii5bTkE8NxJFH2%2BZJv5akg7SoWfvAiEA0qJu0%2FoLkInHZpHGqWSuTntkU3yswTeOcm3pdx83LwwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJ%2BISoDOZEaMfPATCrcA8FQXOkX1znjT87NFRxb1af%2BhSMTPmVE9vchwLriMysSQmNl%2B6FeQUR2ZwIzL7AzyuDLbbcBPM2w2m6xZHfC49UqYLRkWSm52UWDOB%2F52O%2F5SPKzMmFSIFQUaJ1Mre2Fp3lbCwzmbujVZn%2B6ed2oBzCIFwjC5983KN6rvN3ts8njKeAUWIGe9Wh01QR5thO0%2FedZg9nRSU4S7xcRKDi4FW9Dxil86VuN6GBgS%2BFjOUWakFg8zLwcrMC357dTvQeSJRoIxRUpgaUmwRwBsrO%2FHN3T0gqgwk6kIOzu4dRwkCLy61J87jGN0bgNLKh%2BQv%2FW6Y0kJqnoeb0abSYEe9U%2BTziBmZJmbzXjxH8A6J6bkRoderBUZop87qPPgWwFGC8HcOevJDwEtOMW0VMpNlPavF9aQExGqZDCl926EBa487KXAlgOSo961zrAPbBER8J52rZOtPJdXna%2ByspzRSVFlm9PRGACq9D9Amzv8hz0MvkRuHBzgxq5LZkbSRY2h2wFp7jDrzmciR7sTx3Cu1rGOQ2MSUF6ltymLm2OMRnXx%2BYbnSxwTdvkzwgaTPWB8XNKDo7fxI7y3yLrzGR8i4MEYzRXbZMWEXqyJjWtp%2FXJ%2Bmd9f2%2BwMzznhiQJC43ZMMWG4L0GOqUBhocRLJMJATicIb45qVa8ieD2VPxgsApbzlIcORSZ9ViBT%2BTovPDEAWygIdLnzutoqCxhanTlhHQ%2FnXnHN1jZpXOYhOg4DErXQqKm2hyii8JZdC%2BE5%2B8d8PKBDlN9%2BfCQeD43gbsqLXlgzA9R%2BZi1tOtmsOYyzkfrQ2QtZHujkEKB5bwqv6kCFM6vm6hlVXUfgfIanLTGVxO1IeHaepdvD59pANUm&X-Amz-Signature=258ceb676478a3442a902c91d2f8f95b98d3d9319bb4d27df4c439e85716591a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ4YGSL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoh8gYeaNDABLzDii5bTkE8NxJFH2%2BZJv5akg7SoWfvAiEA0qJu0%2FoLkInHZpHGqWSuTntkU3yswTeOcm3pdx83LwwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJ%2BISoDOZEaMfPATCrcA8FQXOkX1znjT87NFRxb1af%2BhSMTPmVE9vchwLriMysSQmNl%2B6FeQUR2ZwIzL7AzyuDLbbcBPM2w2m6xZHfC49UqYLRkWSm52UWDOB%2F52O%2F5SPKzMmFSIFQUaJ1Mre2Fp3lbCwzmbujVZn%2B6ed2oBzCIFwjC5983KN6rvN3ts8njKeAUWIGe9Wh01QR5thO0%2FedZg9nRSU4S7xcRKDi4FW9Dxil86VuN6GBgS%2BFjOUWakFg8zLwcrMC357dTvQeSJRoIxRUpgaUmwRwBsrO%2FHN3T0gqgwk6kIOzu4dRwkCLy61J87jGN0bgNLKh%2BQv%2FW6Y0kJqnoeb0abSYEe9U%2BTziBmZJmbzXjxH8A6J6bkRoderBUZop87qPPgWwFGC8HcOevJDwEtOMW0VMpNlPavF9aQExGqZDCl926EBa487KXAlgOSo961zrAPbBER8J52rZOtPJdXna%2ByspzRSVFlm9PRGACq9D9Amzv8hz0MvkRuHBzgxq5LZkbSRY2h2wFp7jDrzmciR7sTx3Cu1rGOQ2MSUF6ltymLm2OMRnXx%2BYbnSxwTdvkzwgaTPWB8XNKDo7fxI7y3yLrzGR8i4MEYzRXbZMWEXqyJjWtp%2FXJ%2Bmd9f2%2BwMzznhiQJC43ZMMWG4L0GOqUBhocRLJMJATicIb45qVa8ieD2VPxgsApbzlIcORSZ9ViBT%2BTovPDEAWygIdLnzutoqCxhanTlhHQ%2FnXnHN1jZpXOYhOg4DErXQqKm2hyii8JZdC%2BE5%2B8d8PKBDlN9%2BfCQeD43gbsqLXlgzA9R%2BZi1tOtmsOYyzkfrQ2QtZHujkEKB5bwqv6kCFM6vm6hlVXUfgfIanLTGVxO1IeHaepdvD59pANUm&X-Amz-Signature=83a96452581bf35058f6b51ab496723fe94b114d78ff9084e20ff753d04ae25c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ4YGSL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoh8gYeaNDABLzDii5bTkE8NxJFH2%2BZJv5akg7SoWfvAiEA0qJu0%2FoLkInHZpHGqWSuTntkU3yswTeOcm3pdx83LwwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJ%2BISoDOZEaMfPATCrcA8FQXOkX1znjT87NFRxb1af%2BhSMTPmVE9vchwLriMysSQmNl%2B6FeQUR2ZwIzL7AzyuDLbbcBPM2w2m6xZHfC49UqYLRkWSm52UWDOB%2F52O%2F5SPKzMmFSIFQUaJ1Mre2Fp3lbCwzmbujVZn%2B6ed2oBzCIFwjC5983KN6rvN3ts8njKeAUWIGe9Wh01QR5thO0%2FedZg9nRSU4S7xcRKDi4FW9Dxil86VuN6GBgS%2BFjOUWakFg8zLwcrMC357dTvQeSJRoIxRUpgaUmwRwBsrO%2FHN3T0gqgwk6kIOzu4dRwkCLy61J87jGN0bgNLKh%2BQv%2FW6Y0kJqnoeb0abSYEe9U%2BTziBmZJmbzXjxH8A6J6bkRoderBUZop87qPPgWwFGC8HcOevJDwEtOMW0VMpNlPavF9aQExGqZDCl926EBa487KXAlgOSo961zrAPbBER8J52rZOtPJdXna%2ByspzRSVFlm9PRGACq9D9Amzv8hz0MvkRuHBzgxq5LZkbSRY2h2wFp7jDrzmciR7sTx3Cu1rGOQ2MSUF6ltymLm2OMRnXx%2BYbnSxwTdvkzwgaTPWB8XNKDo7fxI7y3yLrzGR8i4MEYzRXbZMWEXqyJjWtp%2FXJ%2Bmd9f2%2BwMzznhiQJC43ZMMWG4L0GOqUBhocRLJMJATicIb45qVa8ieD2VPxgsApbzlIcORSZ9ViBT%2BTovPDEAWygIdLnzutoqCxhanTlhHQ%2FnXnHN1jZpXOYhOg4DErXQqKm2hyii8JZdC%2BE5%2B8d8PKBDlN9%2BfCQeD43gbsqLXlgzA9R%2BZi1tOtmsOYyzkfrQ2QtZHujkEKB5bwqv6kCFM6vm6hlVXUfgfIanLTGVxO1IeHaepdvD59pANUm&X-Amz-Signature=9b1bfb91bcd704fe85249842fcc7bf24ae46d81f18bfefcabfa2985669f38e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJ4YGSL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBoh8gYeaNDABLzDii5bTkE8NxJFH2%2BZJv5akg7SoWfvAiEA0qJu0%2FoLkInHZpHGqWSuTntkU3yswTeOcm3pdx83LwwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJ%2BISoDOZEaMfPATCrcA8FQXOkX1znjT87NFRxb1af%2BhSMTPmVE9vchwLriMysSQmNl%2B6FeQUR2ZwIzL7AzyuDLbbcBPM2w2m6xZHfC49UqYLRkWSm52UWDOB%2F52O%2F5SPKzMmFSIFQUaJ1Mre2Fp3lbCwzmbujVZn%2B6ed2oBzCIFwjC5983KN6rvN3ts8njKeAUWIGe9Wh01QR5thO0%2FedZg9nRSU4S7xcRKDi4FW9Dxil86VuN6GBgS%2BFjOUWakFg8zLwcrMC357dTvQeSJRoIxRUpgaUmwRwBsrO%2FHN3T0gqgwk6kIOzu4dRwkCLy61J87jGN0bgNLKh%2BQv%2FW6Y0kJqnoeb0abSYEe9U%2BTziBmZJmbzXjxH8A6J6bkRoderBUZop87qPPgWwFGC8HcOevJDwEtOMW0VMpNlPavF9aQExGqZDCl926EBa487KXAlgOSo961zrAPbBER8J52rZOtPJdXna%2ByspzRSVFlm9PRGACq9D9Amzv8hz0MvkRuHBzgxq5LZkbSRY2h2wFp7jDrzmciR7sTx3Cu1rGOQ2MSUF6ltymLm2OMRnXx%2BYbnSxwTdvkzwgaTPWB8XNKDo7fxI7y3yLrzGR8i4MEYzRXbZMWEXqyJjWtp%2FXJ%2Bmd9f2%2BwMzznhiQJC43ZMMWG4L0GOqUBhocRLJMJATicIb45qVa8ieD2VPxgsApbzlIcORSZ9ViBT%2BTovPDEAWygIdLnzutoqCxhanTlhHQ%2FnXnHN1jZpXOYhOg4DErXQqKm2hyii8JZdC%2BE5%2B8d8PKBDlN9%2BfCQeD43gbsqLXlgzA9R%2BZi1tOtmsOYyzkfrQ2QtZHujkEKB5bwqv6kCFM6vm6hlVXUfgfIanLTGVxO1IeHaepdvD59pANUm&X-Amz-Signature=a79c96769d104ae3ed363c19d0b8db559f7124336b4650766179f1f87efa5f11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
