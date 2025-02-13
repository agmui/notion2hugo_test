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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECCNCAT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ygvw7biR4f2rP9HZEX0IGitWoblbaOBB1oVbjRX0LAIgBDB4xnkKtjj9%2Fq33m28%2FHZ3LOLpzQpq6lhc6u86i2zcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI%2F6qMX6F4uOs9csbircA8NDovgqz7928yDyr%2BoZO%2BhBT0LQCEOHvbT5DIpP9rR6NtRqA6c1FVLWV1izQ%2BdfStgXpSICZlD7BwtAH8LjWF%2B3yddQr9G7l9KAWNfeCO2UUyM7K2S79ttVEuAhjOzSzJdp5aTXz00Y6MM1sWsPQVW7toshtvtEgAQXQK14ssz2Fp3JvjUv5zGvUQyfI%2BYjZpHIjdMtU5UT%2B8JfjeXgR59I1DnIOGVJbmd2oW39E5efk6xecXEvtPHWVj1xjaP4aukpKya%2FG76Fy2b4kWf1B8BuoOCj07r2MY5xO9Rp8yAXbcHxBYkDG1wO1UcTHxVR1iBE573HpGz%2FzhC2g%2F5FAOErUXLKwkk3BD66%2BGFv40Q0sQLKxKFsvo%2FgwPVKzGKavaJgeHFdx2QCBX8SXYZF3QmN0GAuabn1NDPDqVWZI0xijonMdQoCPT6nB%2FOmSU9h8BJ33lfKuNkkxunOJ19OjycAiMFjJqjJsk711SudJ1QkFv2pX7ZV2Z5ptUNJ7RENzKYN8eyK3bGuve2Y2DvJw2Ha7pUO6%2Bo202OTbEsONhpwzELnaQjO8Op%2BIXwUh2oAdN0puVZydnTHpLjmHzRmytnYQK7TywUvq14WjIQmEa65qaMobtoTdq79lQakMPu%2BuL0GOqUBCQztk%2FaBzOth9csxBfXuk5bmZvghBF0EC7cTMO9RidngMCMOrJihgwtsAFzCf%2BRalgKTwBJ%2FPSYlMj%2FN2QF0%2BYFbl2%2B5pI5qHN4VUEH21h4GVrwHyQmpdhThwGzsy6Tr%2FmbvWyotJKPMyr%2BWjtgyM0CyYd9%2FLFPHPw9adleucGlaKP4RtQGByK%2F%2B9nUtNK80qcVEmj40DH3I43a27jFr4J4y9KYJ&X-Amz-Signature=09244ab8643a373da1bd991c98cb4fa70ba2906b7b0ec1faf84df0c81b84eb39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECCNCAT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ygvw7biR4f2rP9HZEX0IGitWoblbaOBB1oVbjRX0LAIgBDB4xnkKtjj9%2Fq33m28%2FHZ3LOLpzQpq6lhc6u86i2zcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI%2F6qMX6F4uOs9csbircA8NDovgqz7928yDyr%2BoZO%2BhBT0LQCEOHvbT5DIpP9rR6NtRqA6c1FVLWV1izQ%2BdfStgXpSICZlD7BwtAH8LjWF%2B3yddQr9G7l9KAWNfeCO2UUyM7K2S79ttVEuAhjOzSzJdp5aTXz00Y6MM1sWsPQVW7toshtvtEgAQXQK14ssz2Fp3JvjUv5zGvUQyfI%2BYjZpHIjdMtU5UT%2B8JfjeXgR59I1DnIOGVJbmd2oW39E5efk6xecXEvtPHWVj1xjaP4aukpKya%2FG76Fy2b4kWf1B8BuoOCj07r2MY5xO9Rp8yAXbcHxBYkDG1wO1UcTHxVR1iBE573HpGz%2FzhC2g%2F5FAOErUXLKwkk3BD66%2BGFv40Q0sQLKxKFsvo%2FgwPVKzGKavaJgeHFdx2QCBX8SXYZF3QmN0GAuabn1NDPDqVWZI0xijonMdQoCPT6nB%2FOmSU9h8BJ33lfKuNkkxunOJ19OjycAiMFjJqjJsk711SudJ1QkFv2pX7ZV2Z5ptUNJ7RENzKYN8eyK3bGuve2Y2DvJw2Ha7pUO6%2Bo202OTbEsONhpwzELnaQjO8Op%2BIXwUh2oAdN0puVZydnTHpLjmHzRmytnYQK7TywUvq14WjIQmEa65qaMobtoTdq79lQakMPu%2BuL0GOqUBCQztk%2FaBzOth9csxBfXuk5bmZvghBF0EC7cTMO9RidngMCMOrJihgwtsAFzCf%2BRalgKTwBJ%2FPSYlMj%2FN2QF0%2BYFbl2%2B5pI5qHN4VUEH21h4GVrwHyQmpdhThwGzsy6Tr%2FmbvWyotJKPMyr%2BWjtgyM0CyYd9%2FLFPHPw9adleucGlaKP4RtQGByK%2F%2B9nUtNK80qcVEmj40DH3I43a27jFr4J4y9KYJ&X-Amz-Signature=461c8cac6cd47db638b782b872f43b7e967d1507ee7676a43bcf019066a1ed89&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECCNCAT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ygvw7biR4f2rP9HZEX0IGitWoblbaOBB1oVbjRX0LAIgBDB4xnkKtjj9%2Fq33m28%2FHZ3LOLpzQpq6lhc6u86i2zcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI%2F6qMX6F4uOs9csbircA8NDovgqz7928yDyr%2BoZO%2BhBT0LQCEOHvbT5DIpP9rR6NtRqA6c1FVLWV1izQ%2BdfStgXpSICZlD7BwtAH8LjWF%2B3yddQr9G7l9KAWNfeCO2UUyM7K2S79ttVEuAhjOzSzJdp5aTXz00Y6MM1sWsPQVW7toshtvtEgAQXQK14ssz2Fp3JvjUv5zGvUQyfI%2BYjZpHIjdMtU5UT%2B8JfjeXgR59I1DnIOGVJbmd2oW39E5efk6xecXEvtPHWVj1xjaP4aukpKya%2FG76Fy2b4kWf1B8BuoOCj07r2MY5xO9Rp8yAXbcHxBYkDG1wO1UcTHxVR1iBE573HpGz%2FzhC2g%2F5FAOErUXLKwkk3BD66%2BGFv40Q0sQLKxKFsvo%2FgwPVKzGKavaJgeHFdx2QCBX8SXYZF3QmN0GAuabn1NDPDqVWZI0xijonMdQoCPT6nB%2FOmSU9h8BJ33lfKuNkkxunOJ19OjycAiMFjJqjJsk711SudJ1QkFv2pX7ZV2Z5ptUNJ7RENzKYN8eyK3bGuve2Y2DvJw2Ha7pUO6%2Bo202OTbEsONhpwzELnaQjO8Op%2BIXwUh2oAdN0puVZydnTHpLjmHzRmytnYQK7TywUvq14WjIQmEa65qaMobtoTdq79lQakMPu%2BuL0GOqUBCQztk%2FaBzOth9csxBfXuk5bmZvghBF0EC7cTMO9RidngMCMOrJihgwtsAFzCf%2BRalgKTwBJ%2FPSYlMj%2FN2QF0%2BYFbl2%2B5pI5qHN4VUEH21h4GVrwHyQmpdhThwGzsy6Tr%2FmbvWyotJKPMyr%2BWjtgyM0CyYd9%2FLFPHPw9adleucGlaKP4RtQGByK%2F%2B9nUtNK80qcVEmj40DH3I43a27jFr4J4y9KYJ&X-Amz-Signature=05fffbdc3f404ac8eae8d8c985b719b674a155bea438be078be76b023a633038&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECCNCAT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ygvw7biR4f2rP9HZEX0IGitWoblbaOBB1oVbjRX0LAIgBDB4xnkKtjj9%2Fq33m28%2FHZ3LOLpzQpq6lhc6u86i2zcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI%2F6qMX6F4uOs9csbircA8NDovgqz7928yDyr%2BoZO%2BhBT0LQCEOHvbT5DIpP9rR6NtRqA6c1FVLWV1izQ%2BdfStgXpSICZlD7BwtAH8LjWF%2B3yddQr9G7l9KAWNfeCO2UUyM7K2S79ttVEuAhjOzSzJdp5aTXz00Y6MM1sWsPQVW7toshtvtEgAQXQK14ssz2Fp3JvjUv5zGvUQyfI%2BYjZpHIjdMtU5UT%2B8JfjeXgR59I1DnIOGVJbmd2oW39E5efk6xecXEvtPHWVj1xjaP4aukpKya%2FG76Fy2b4kWf1B8BuoOCj07r2MY5xO9Rp8yAXbcHxBYkDG1wO1UcTHxVR1iBE573HpGz%2FzhC2g%2F5FAOErUXLKwkk3BD66%2BGFv40Q0sQLKxKFsvo%2FgwPVKzGKavaJgeHFdx2QCBX8SXYZF3QmN0GAuabn1NDPDqVWZI0xijonMdQoCPT6nB%2FOmSU9h8BJ33lfKuNkkxunOJ19OjycAiMFjJqjJsk711SudJ1QkFv2pX7ZV2Z5ptUNJ7RENzKYN8eyK3bGuve2Y2DvJw2Ha7pUO6%2Bo202OTbEsONhpwzELnaQjO8Op%2BIXwUh2oAdN0puVZydnTHpLjmHzRmytnYQK7TywUvq14WjIQmEa65qaMobtoTdq79lQakMPu%2BuL0GOqUBCQztk%2FaBzOth9csxBfXuk5bmZvghBF0EC7cTMO9RidngMCMOrJihgwtsAFzCf%2BRalgKTwBJ%2FPSYlMj%2FN2QF0%2BYFbl2%2B5pI5qHN4VUEH21h4GVrwHyQmpdhThwGzsy6Tr%2FmbvWyotJKPMyr%2BWjtgyM0CyYd9%2FLFPHPw9adleucGlaKP4RtQGByK%2F%2B9nUtNK80qcVEmj40DH3I43a27jFr4J4y9KYJ&X-Amz-Signature=6595ab07d9af62bbc0cb78f21353bf098173faed693fd6138009d802805350d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECCNCAT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ygvw7biR4f2rP9HZEX0IGitWoblbaOBB1oVbjRX0LAIgBDB4xnkKtjj9%2Fq33m28%2FHZ3LOLpzQpq6lhc6u86i2zcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI%2F6qMX6F4uOs9csbircA8NDovgqz7928yDyr%2BoZO%2BhBT0LQCEOHvbT5DIpP9rR6NtRqA6c1FVLWV1izQ%2BdfStgXpSICZlD7BwtAH8LjWF%2B3yddQr9G7l9KAWNfeCO2UUyM7K2S79ttVEuAhjOzSzJdp5aTXz00Y6MM1sWsPQVW7toshtvtEgAQXQK14ssz2Fp3JvjUv5zGvUQyfI%2BYjZpHIjdMtU5UT%2B8JfjeXgR59I1DnIOGVJbmd2oW39E5efk6xecXEvtPHWVj1xjaP4aukpKya%2FG76Fy2b4kWf1B8BuoOCj07r2MY5xO9Rp8yAXbcHxBYkDG1wO1UcTHxVR1iBE573HpGz%2FzhC2g%2F5FAOErUXLKwkk3BD66%2BGFv40Q0sQLKxKFsvo%2FgwPVKzGKavaJgeHFdx2QCBX8SXYZF3QmN0GAuabn1NDPDqVWZI0xijonMdQoCPT6nB%2FOmSU9h8BJ33lfKuNkkxunOJ19OjycAiMFjJqjJsk711SudJ1QkFv2pX7ZV2Z5ptUNJ7RENzKYN8eyK3bGuve2Y2DvJw2Ha7pUO6%2Bo202OTbEsONhpwzELnaQjO8Op%2BIXwUh2oAdN0puVZydnTHpLjmHzRmytnYQK7TywUvq14WjIQmEa65qaMobtoTdq79lQakMPu%2BuL0GOqUBCQztk%2FaBzOth9csxBfXuk5bmZvghBF0EC7cTMO9RidngMCMOrJihgwtsAFzCf%2BRalgKTwBJ%2FPSYlMj%2FN2QF0%2BYFbl2%2B5pI5qHN4VUEH21h4GVrwHyQmpdhThwGzsy6Tr%2FmbvWyotJKPMyr%2BWjtgyM0CyYd9%2FLFPHPw9adleucGlaKP4RtQGByK%2F%2B9nUtNK80qcVEmj40DH3I43a27jFr4J4y9KYJ&X-Amz-Signature=805cea171fd8e66ac8e89deb3c03d7a9e8a128a4553fc6e4f3d30f4945dbbaf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECCNCAT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ygvw7biR4f2rP9HZEX0IGitWoblbaOBB1oVbjRX0LAIgBDB4xnkKtjj9%2Fq33m28%2FHZ3LOLpzQpq6lhc6u86i2zcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI%2F6qMX6F4uOs9csbircA8NDovgqz7928yDyr%2BoZO%2BhBT0LQCEOHvbT5DIpP9rR6NtRqA6c1FVLWV1izQ%2BdfStgXpSICZlD7BwtAH8LjWF%2B3yddQr9G7l9KAWNfeCO2UUyM7K2S79ttVEuAhjOzSzJdp5aTXz00Y6MM1sWsPQVW7toshtvtEgAQXQK14ssz2Fp3JvjUv5zGvUQyfI%2BYjZpHIjdMtU5UT%2B8JfjeXgR59I1DnIOGVJbmd2oW39E5efk6xecXEvtPHWVj1xjaP4aukpKya%2FG76Fy2b4kWf1B8BuoOCj07r2MY5xO9Rp8yAXbcHxBYkDG1wO1UcTHxVR1iBE573HpGz%2FzhC2g%2F5FAOErUXLKwkk3BD66%2BGFv40Q0sQLKxKFsvo%2FgwPVKzGKavaJgeHFdx2QCBX8SXYZF3QmN0GAuabn1NDPDqVWZI0xijonMdQoCPT6nB%2FOmSU9h8BJ33lfKuNkkxunOJ19OjycAiMFjJqjJsk711SudJ1QkFv2pX7ZV2Z5ptUNJ7RENzKYN8eyK3bGuve2Y2DvJw2Ha7pUO6%2Bo202OTbEsONhpwzELnaQjO8Op%2BIXwUh2oAdN0puVZydnTHpLjmHzRmytnYQK7TywUvq14WjIQmEa65qaMobtoTdq79lQakMPu%2BuL0GOqUBCQztk%2FaBzOth9csxBfXuk5bmZvghBF0EC7cTMO9RidngMCMOrJihgwtsAFzCf%2BRalgKTwBJ%2FPSYlMj%2FN2QF0%2BYFbl2%2B5pI5qHN4VUEH21h4GVrwHyQmpdhThwGzsy6Tr%2FmbvWyotJKPMyr%2BWjtgyM0CyYd9%2FLFPHPw9adleucGlaKP4RtQGByK%2F%2B9nUtNK80qcVEmj40DH3I43a27jFr4J4y9KYJ&X-Amz-Signature=7e118b32957c91295c8b7808d051129f4ab2d859744db986e3a4f0395cff4287&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECCNCAT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ygvw7biR4f2rP9HZEX0IGitWoblbaOBB1oVbjRX0LAIgBDB4xnkKtjj9%2Fq33m28%2FHZ3LOLpzQpq6lhc6u86i2zcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI%2F6qMX6F4uOs9csbircA8NDovgqz7928yDyr%2BoZO%2BhBT0LQCEOHvbT5DIpP9rR6NtRqA6c1FVLWV1izQ%2BdfStgXpSICZlD7BwtAH8LjWF%2B3yddQr9G7l9KAWNfeCO2UUyM7K2S79ttVEuAhjOzSzJdp5aTXz00Y6MM1sWsPQVW7toshtvtEgAQXQK14ssz2Fp3JvjUv5zGvUQyfI%2BYjZpHIjdMtU5UT%2B8JfjeXgR59I1DnIOGVJbmd2oW39E5efk6xecXEvtPHWVj1xjaP4aukpKya%2FG76Fy2b4kWf1B8BuoOCj07r2MY5xO9Rp8yAXbcHxBYkDG1wO1UcTHxVR1iBE573HpGz%2FzhC2g%2F5FAOErUXLKwkk3BD66%2BGFv40Q0sQLKxKFsvo%2FgwPVKzGKavaJgeHFdx2QCBX8SXYZF3QmN0GAuabn1NDPDqVWZI0xijonMdQoCPT6nB%2FOmSU9h8BJ33lfKuNkkxunOJ19OjycAiMFjJqjJsk711SudJ1QkFv2pX7ZV2Z5ptUNJ7RENzKYN8eyK3bGuve2Y2DvJw2Ha7pUO6%2Bo202OTbEsONhpwzELnaQjO8Op%2BIXwUh2oAdN0puVZydnTHpLjmHzRmytnYQK7TywUvq14WjIQmEa65qaMobtoTdq79lQakMPu%2BuL0GOqUBCQztk%2FaBzOth9csxBfXuk5bmZvghBF0EC7cTMO9RidngMCMOrJihgwtsAFzCf%2BRalgKTwBJ%2FPSYlMj%2FN2QF0%2BYFbl2%2B5pI5qHN4VUEH21h4GVrwHyQmpdhThwGzsy6Tr%2FmbvWyotJKPMyr%2BWjtgyM0CyYd9%2FLFPHPw9adleucGlaKP4RtQGByK%2F%2B9nUtNK80qcVEmj40DH3I43a27jFr4J4y9KYJ&X-Amz-Signature=6a3981ef38a8c0bee7fb0a5159d9e33a0fd46267590101ce17b6e94e4a7ba67d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ECCNCAT%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T170217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0ygvw7biR4f2rP9HZEX0IGitWoblbaOBB1oVbjRX0LAIgBDB4xnkKtjj9%2Fq33m28%2FHZ3LOLpzQpq6lhc6u86i2zcq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI%2F6qMX6F4uOs9csbircA8NDovgqz7928yDyr%2BoZO%2BhBT0LQCEOHvbT5DIpP9rR6NtRqA6c1FVLWV1izQ%2BdfStgXpSICZlD7BwtAH8LjWF%2B3yddQr9G7l9KAWNfeCO2UUyM7K2S79ttVEuAhjOzSzJdp5aTXz00Y6MM1sWsPQVW7toshtvtEgAQXQK14ssz2Fp3JvjUv5zGvUQyfI%2BYjZpHIjdMtU5UT%2B8JfjeXgR59I1DnIOGVJbmd2oW39E5efk6xecXEvtPHWVj1xjaP4aukpKya%2FG76Fy2b4kWf1B8BuoOCj07r2MY5xO9Rp8yAXbcHxBYkDG1wO1UcTHxVR1iBE573HpGz%2FzhC2g%2F5FAOErUXLKwkk3BD66%2BGFv40Q0sQLKxKFsvo%2FgwPVKzGKavaJgeHFdx2QCBX8SXYZF3QmN0GAuabn1NDPDqVWZI0xijonMdQoCPT6nB%2FOmSU9h8BJ33lfKuNkkxunOJ19OjycAiMFjJqjJsk711SudJ1QkFv2pX7ZV2Z5ptUNJ7RENzKYN8eyK3bGuve2Y2DvJw2Ha7pUO6%2Bo202OTbEsONhpwzELnaQjO8Op%2BIXwUh2oAdN0puVZydnTHpLjmHzRmytnYQK7TywUvq14WjIQmEa65qaMobtoTdq79lQakMPu%2BuL0GOqUBCQztk%2FaBzOth9csxBfXuk5bmZvghBF0EC7cTMO9RidngMCMOrJihgwtsAFzCf%2BRalgKTwBJ%2FPSYlMj%2FN2QF0%2BYFbl2%2B5pI5qHN4VUEH21h4GVrwHyQmpdhThwGzsy6Tr%2FmbvWyotJKPMyr%2BWjtgyM0CyYd9%2FLFPHPw9adleucGlaKP4RtQGByK%2F%2B9nUtNK80qcVEmj40DH3I43a27jFr4J4y9KYJ&X-Amz-Signature=725dbd0a2eba574bd4f54ee14df23086af9c533b0e97e8af2d059fb159d48bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
