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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MHZW3ZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuRYjnj7evhKbz94Q626JwXw%2BMsBjLcgZpdagHxvT1QIgRcWRcCmoZsFuYriEpwDOhPM%2FZsbxdKOlaNaus7T7BWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPJ5LGTd6yufKLerLSrcA8ErFSBrJpmYBCsuq2nqThLzRSYaz90XIN996QzJ1iZ5ijqj5ZVLDtcW6vvWwL9qTgJCYB0HTVJnUhoMd%2FOZtlJYZZYEFFVRQAAaFvkgmxO%2FFak6w29ED5dvdXi%2F418HMMHI9ZH2fUlu02%2FOTXcdzCnqUQoF%2FKmUrCik1vxp5EJUhcW0Pnvl9wl%2FH2ZAv4OXB316DAjFy3W%2BOPdA4i9H%2FG4L8OLdMd7Pw8gNj8Q%2FrXIyGnGreNfg6Htqg7wn94mKvCikxXHLGDNwpL2rwmIRSw4VQHCbNJ%2BTV9as%2BiDuaUOd1ZtRZ3SXkhrNu23eQ%2Beus9jLOX6YDxcJZTyISux9A%2BLyy%2BtmqOmGcyF01AAxLFZ4OCWHq0fNdbOHrPcLcD8%2BCYaKjODGjRWgsRgNotjOBBafwC8522isbUsxgQPEY3mpqMIsFA%2F87WPrQ0lp5zjj2XWtF4XsU2aq14umaaZ%2FBTZOoAGy1QlqNCgxayEJB7rkjpRAFBe6bN4a9HVR1W49zalQc%2FXaKoGeRPmNCKLEPv9at5jjOpY9cqH76OJtPvgs8qjOFa%2F%2FD8J5wLVhXi%2FUxxGUMUTqZBqLEiVf8yJCz4BIeDTrE7AglUb1kNlo3rbq2VvCHqkGKCcGBdqHMMvEnsEGOqUBnu3d8d4N%2FJb207Gj5526QRqTXZ6Li%2B9Q9uqjqKrb2kqvhfDUoqv1jAPhWEHqxrB0QwNolw5%2BKFTgo41qr78qZBxWga3plifDWXmsCUPM4nLDx2ou0hgnOr5FrC2q7DCv%2Fs%2FfphREI2yc%2BFYySfW7cN%2FomjkQSdyRrp1bBxS4B%2F1YWbfAu9GHN7UNSmpcXJIEaNZFTs6Tt609PAT9MX%2FVmOkuIC7%2F&X-Amz-Signature=e69526b609bf3bb6a3ca34d9ad581c56b52c6e29506d0976dbc65fa226847d61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MHZW3ZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuRYjnj7evhKbz94Q626JwXw%2BMsBjLcgZpdagHxvT1QIgRcWRcCmoZsFuYriEpwDOhPM%2FZsbxdKOlaNaus7T7BWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPJ5LGTd6yufKLerLSrcA8ErFSBrJpmYBCsuq2nqThLzRSYaz90XIN996QzJ1iZ5ijqj5ZVLDtcW6vvWwL9qTgJCYB0HTVJnUhoMd%2FOZtlJYZZYEFFVRQAAaFvkgmxO%2FFak6w29ED5dvdXi%2F418HMMHI9ZH2fUlu02%2FOTXcdzCnqUQoF%2FKmUrCik1vxp5EJUhcW0Pnvl9wl%2FH2ZAv4OXB316DAjFy3W%2BOPdA4i9H%2FG4L8OLdMd7Pw8gNj8Q%2FrXIyGnGreNfg6Htqg7wn94mKvCikxXHLGDNwpL2rwmIRSw4VQHCbNJ%2BTV9as%2BiDuaUOd1ZtRZ3SXkhrNu23eQ%2Beus9jLOX6YDxcJZTyISux9A%2BLyy%2BtmqOmGcyF01AAxLFZ4OCWHq0fNdbOHrPcLcD8%2BCYaKjODGjRWgsRgNotjOBBafwC8522isbUsxgQPEY3mpqMIsFA%2F87WPrQ0lp5zjj2XWtF4XsU2aq14umaaZ%2FBTZOoAGy1QlqNCgxayEJB7rkjpRAFBe6bN4a9HVR1W49zalQc%2FXaKoGeRPmNCKLEPv9at5jjOpY9cqH76OJtPvgs8qjOFa%2F%2FD8J5wLVhXi%2FUxxGUMUTqZBqLEiVf8yJCz4BIeDTrE7AglUb1kNlo3rbq2VvCHqkGKCcGBdqHMMvEnsEGOqUBnu3d8d4N%2FJb207Gj5526QRqTXZ6Li%2B9Q9uqjqKrb2kqvhfDUoqv1jAPhWEHqxrB0QwNolw5%2BKFTgo41qr78qZBxWga3plifDWXmsCUPM4nLDx2ou0hgnOr5FrC2q7DCv%2Fs%2FfphREI2yc%2BFYySfW7cN%2FomjkQSdyRrp1bBxS4B%2F1YWbfAu9GHN7UNSmpcXJIEaNZFTs6Tt609PAT9MX%2FVmOkuIC7%2F&X-Amz-Signature=2480fe98c32616331e071153ed52d2147efd926c8839ac0fc1528999d63cedca&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MHZW3ZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuRYjnj7evhKbz94Q626JwXw%2BMsBjLcgZpdagHxvT1QIgRcWRcCmoZsFuYriEpwDOhPM%2FZsbxdKOlaNaus7T7BWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPJ5LGTd6yufKLerLSrcA8ErFSBrJpmYBCsuq2nqThLzRSYaz90XIN996QzJ1iZ5ijqj5ZVLDtcW6vvWwL9qTgJCYB0HTVJnUhoMd%2FOZtlJYZZYEFFVRQAAaFvkgmxO%2FFak6w29ED5dvdXi%2F418HMMHI9ZH2fUlu02%2FOTXcdzCnqUQoF%2FKmUrCik1vxp5EJUhcW0Pnvl9wl%2FH2ZAv4OXB316DAjFy3W%2BOPdA4i9H%2FG4L8OLdMd7Pw8gNj8Q%2FrXIyGnGreNfg6Htqg7wn94mKvCikxXHLGDNwpL2rwmIRSw4VQHCbNJ%2BTV9as%2BiDuaUOd1ZtRZ3SXkhrNu23eQ%2Beus9jLOX6YDxcJZTyISux9A%2BLyy%2BtmqOmGcyF01AAxLFZ4OCWHq0fNdbOHrPcLcD8%2BCYaKjODGjRWgsRgNotjOBBafwC8522isbUsxgQPEY3mpqMIsFA%2F87WPrQ0lp5zjj2XWtF4XsU2aq14umaaZ%2FBTZOoAGy1QlqNCgxayEJB7rkjpRAFBe6bN4a9HVR1W49zalQc%2FXaKoGeRPmNCKLEPv9at5jjOpY9cqH76OJtPvgs8qjOFa%2F%2FD8J5wLVhXi%2FUxxGUMUTqZBqLEiVf8yJCz4BIeDTrE7AglUb1kNlo3rbq2VvCHqkGKCcGBdqHMMvEnsEGOqUBnu3d8d4N%2FJb207Gj5526QRqTXZ6Li%2B9Q9uqjqKrb2kqvhfDUoqv1jAPhWEHqxrB0QwNolw5%2BKFTgo41qr78qZBxWga3plifDWXmsCUPM4nLDx2ou0hgnOr5FrC2q7DCv%2Fs%2FfphREI2yc%2BFYySfW7cN%2FomjkQSdyRrp1bBxS4B%2F1YWbfAu9GHN7UNSmpcXJIEaNZFTs6Tt609PAT9MX%2FVmOkuIC7%2F&X-Amz-Signature=ddb1e91b739c64922a463728ab2b1a2273534c746a027f9e7fc4d4fffc2211ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MHZW3ZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuRYjnj7evhKbz94Q626JwXw%2BMsBjLcgZpdagHxvT1QIgRcWRcCmoZsFuYriEpwDOhPM%2FZsbxdKOlaNaus7T7BWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPJ5LGTd6yufKLerLSrcA8ErFSBrJpmYBCsuq2nqThLzRSYaz90XIN996QzJ1iZ5ijqj5ZVLDtcW6vvWwL9qTgJCYB0HTVJnUhoMd%2FOZtlJYZZYEFFVRQAAaFvkgmxO%2FFak6w29ED5dvdXi%2F418HMMHI9ZH2fUlu02%2FOTXcdzCnqUQoF%2FKmUrCik1vxp5EJUhcW0Pnvl9wl%2FH2ZAv4OXB316DAjFy3W%2BOPdA4i9H%2FG4L8OLdMd7Pw8gNj8Q%2FrXIyGnGreNfg6Htqg7wn94mKvCikxXHLGDNwpL2rwmIRSw4VQHCbNJ%2BTV9as%2BiDuaUOd1ZtRZ3SXkhrNu23eQ%2Beus9jLOX6YDxcJZTyISux9A%2BLyy%2BtmqOmGcyF01AAxLFZ4OCWHq0fNdbOHrPcLcD8%2BCYaKjODGjRWgsRgNotjOBBafwC8522isbUsxgQPEY3mpqMIsFA%2F87WPrQ0lp5zjj2XWtF4XsU2aq14umaaZ%2FBTZOoAGy1QlqNCgxayEJB7rkjpRAFBe6bN4a9HVR1W49zalQc%2FXaKoGeRPmNCKLEPv9at5jjOpY9cqH76OJtPvgs8qjOFa%2F%2FD8J5wLVhXi%2FUxxGUMUTqZBqLEiVf8yJCz4BIeDTrE7AglUb1kNlo3rbq2VvCHqkGKCcGBdqHMMvEnsEGOqUBnu3d8d4N%2FJb207Gj5526QRqTXZ6Li%2B9Q9uqjqKrb2kqvhfDUoqv1jAPhWEHqxrB0QwNolw5%2BKFTgo41qr78qZBxWga3plifDWXmsCUPM4nLDx2ou0hgnOr5FrC2q7DCv%2Fs%2FfphREI2yc%2BFYySfW7cN%2FomjkQSdyRrp1bBxS4B%2F1YWbfAu9GHN7UNSmpcXJIEaNZFTs6Tt609PAT9MX%2FVmOkuIC7%2F&X-Amz-Signature=b0b74920ba568f1acf81ddd919411c2eb406d7b38ab41acc737477a041866e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MHZW3ZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuRYjnj7evhKbz94Q626JwXw%2BMsBjLcgZpdagHxvT1QIgRcWRcCmoZsFuYriEpwDOhPM%2FZsbxdKOlaNaus7T7BWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPJ5LGTd6yufKLerLSrcA8ErFSBrJpmYBCsuq2nqThLzRSYaz90XIN996QzJ1iZ5ijqj5ZVLDtcW6vvWwL9qTgJCYB0HTVJnUhoMd%2FOZtlJYZZYEFFVRQAAaFvkgmxO%2FFak6w29ED5dvdXi%2F418HMMHI9ZH2fUlu02%2FOTXcdzCnqUQoF%2FKmUrCik1vxp5EJUhcW0Pnvl9wl%2FH2ZAv4OXB316DAjFy3W%2BOPdA4i9H%2FG4L8OLdMd7Pw8gNj8Q%2FrXIyGnGreNfg6Htqg7wn94mKvCikxXHLGDNwpL2rwmIRSw4VQHCbNJ%2BTV9as%2BiDuaUOd1ZtRZ3SXkhrNu23eQ%2Beus9jLOX6YDxcJZTyISux9A%2BLyy%2BtmqOmGcyF01AAxLFZ4OCWHq0fNdbOHrPcLcD8%2BCYaKjODGjRWgsRgNotjOBBafwC8522isbUsxgQPEY3mpqMIsFA%2F87WPrQ0lp5zjj2XWtF4XsU2aq14umaaZ%2FBTZOoAGy1QlqNCgxayEJB7rkjpRAFBe6bN4a9HVR1W49zalQc%2FXaKoGeRPmNCKLEPv9at5jjOpY9cqH76OJtPvgs8qjOFa%2F%2FD8J5wLVhXi%2FUxxGUMUTqZBqLEiVf8yJCz4BIeDTrE7AglUb1kNlo3rbq2VvCHqkGKCcGBdqHMMvEnsEGOqUBnu3d8d4N%2FJb207Gj5526QRqTXZ6Li%2B9Q9uqjqKrb2kqvhfDUoqv1jAPhWEHqxrB0QwNolw5%2BKFTgo41qr78qZBxWga3plifDWXmsCUPM4nLDx2ou0hgnOr5FrC2q7DCv%2Fs%2FfphREI2yc%2BFYySfW7cN%2FomjkQSdyRrp1bBxS4B%2F1YWbfAu9GHN7UNSmpcXJIEaNZFTs6Tt609PAT9MX%2FVmOkuIC7%2F&X-Amz-Signature=41d299635ca87fbf84234a2d201b92cec9d92f369f7fa4a2a8afd1b2faf8715d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MHZW3ZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuRYjnj7evhKbz94Q626JwXw%2BMsBjLcgZpdagHxvT1QIgRcWRcCmoZsFuYriEpwDOhPM%2FZsbxdKOlaNaus7T7BWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPJ5LGTd6yufKLerLSrcA8ErFSBrJpmYBCsuq2nqThLzRSYaz90XIN996QzJ1iZ5ijqj5ZVLDtcW6vvWwL9qTgJCYB0HTVJnUhoMd%2FOZtlJYZZYEFFVRQAAaFvkgmxO%2FFak6w29ED5dvdXi%2F418HMMHI9ZH2fUlu02%2FOTXcdzCnqUQoF%2FKmUrCik1vxp5EJUhcW0Pnvl9wl%2FH2ZAv4OXB316DAjFy3W%2BOPdA4i9H%2FG4L8OLdMd7Pw8gNj8Q%2FrXIyGnGreNfg6Htqg7wn94mKvCikxXHLGDNwpL2rwmIRSw4VQHCbNJ%2BTV9as%2BiDuaUOd1ZtRZ3SXkhrNu23eQ%2Beus9jLOX6YDxcJZTyISux9A%2BLyy%2BtmqOmGcyF01AAxLFZ4OCWHq0fNdbOHrPcLcD8%2BCYaKjODGjRWgsRgNotjOBBafwC8522isbUsxgQPEY3mpqMIsFA%2F87WPrQ0lp5zjj2XWtF4XsU2aq14umaaZ%2FBTZOoAGy1QlqNCgxayEJB7rkjpRAFBe6bN4a9HVR1W49zalQc%2FXaKoGeRPmNCKLEPv9at5jjOpY9cqH76OJtPvgs8qjOFa%2F%2FD8J5wLVhXi%2FUxxGUMUTqZBqLEiVf8yJCz4BIeDTrE7AglUb1kNlo3rbq2VvCHqkGKCcGBdqHMMvEnsEGOqUBnu3d8d4N%2FJb207Gj5526QRqTXZ6Li%2B9Q9uqjqKrb2kqvhfDUoqv1jAPhWEHqxrB0QwNolw5%2BKFTgo41qr78qZBxWga3plifDWXmsCUPM4nLDx2ou0hgnOr5FrC2q7DCv%2Fs%2FfphREI2yc%2BFYySfW7cN%2FomjkQSdyRrp1bBxS4B%2F1YWbfAu9GHN7UNSmpcXJIEaNZFTs6Tt609PAT9MX%2FVmOkuIC7%2F&X-Amz-Signature=9df0196276dc0f68b16e29f6386d4db6ffddf57aff02381a43a8e656a294fba8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MHZW3ZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuRYjnj7evhKbz94Q626JwXw%2BMsBjLcgZpdagHxvT1QIgRcWRcCmoZsFuYriEpwDOhPM%2FZsbxdKOlaNaus7T7BWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPJ5LGTd6yufKLerLSrcA8ErFSBrJpmYBCsuq2nqThLzRSYaz90XIN996QzJ1iZ5ijqj5ZVLDtcW6vvWwL9qTgJCYB0HTVJnUhoMd%2FOZtlJYZZYEFFVRQAAaFvkgmxO%2FFak6w29ED5dvdXi%2F418HMMHI9ZH2fUlu02%2FOTXcdzCnqUQoF%2FKmUrCik1vxp5EJUhcW0Pnvl9wl%2FH2ZAv4OXB316DAjFy3W%2BOPdA4i9H%2FG4L8OLdMd7Pw8gNj8Q%2FrXIyGnGreNfg6Htqg7wn94mKvCikxXHLGDNwpL2rwmIRSw4VQHCbNJ%2BTV9as%2BiDuaUOd1ZtRZ3SXkhrNu23eQ%2Beus9jLOX6YDxcJZTyISux9A%2BLyy%2BtmqOmGcyF01AAxLFZ4OCWHq0fNdbOHrPcLcD8%2BCYaKjODGjRWgsRgNotjOBBafwC8522isbUsxgQPEY3mpqMIsFA%2F87WPrQ0lp5zjj2XWtF4XsU2aq14umaaZ%2FBTZOoAGy1QlqNCgxayEJB7rkjpRAFBe6bN4a9HVR1W49zalQc%2FXaKoGeRPmNCKLEPv9at5jjOpY9cqH76OJtPvgs8qjOFa%2F%2FD8J5wLVhXi%2FUxxGUMUTqZBqLEiVf8yJCz4BIeDTrE7AglUb1kNlo3rbq2VvCHqkGKCcGBdqHMMvEnsEGOqUBnu3d8d4N%2FJb207Gj5526QRqTXZ6Li%2B9Q9uqjqKrb2kqvhfDUoqv1jAPhWEHqxrB0QwNolw5%2BKFTgo41qr78qZBxWga3plifDWXmsCUPM4nLDx2ou0hgnOr5FrC2q7DCv%2Fs%2FfphREI2yc%2BFYySfW7cN%2FomjkQSdyRrp1bBxS4B%2F1YWbfAu9GHN7UNSmpcXJIEaNZFTs6Tt609PAT9MX%2FVmOkuIC7%2F&X-Amz-Signature=6ebc2775a6712e491682b44815031be13c7ab036cd53ffee40f194e1cca0a7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MHZW3ZR%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRuRYjnj7evhKbz94Q626JwXw%2BMsBjLcgZpdagHxvT1QIgRcWRcCmoZsFuYriEpwDOhPM%2FZsbxdKOlaNaus7T7BWAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPJ5LGTd6yufKLerLSrcA8ErFSBrJpmYBCsuq2nqThLzRSYaz90XIN996QzJ1iZ5ijqj5ZVLDtcW6vvWwL9qTgJCYB0HTVJnUhoMd%2FOZtlJYZZYEFFVRQAAaFvkgmxO%2FFak6w29ED5dvdXi%2F418HMMHI9ZH2fUlu02%2FOTXcdzCnqUQoF%2FKmUrCik1vxp5EJUhcW0Pnvl9wl%2FH2ZAv4OXB316DAjFy3W%2BOPdA4i9H%2FG4L8OLdMd7Pw8gNj8Q%2FrXIyGnGreNfg6Htqg7wn94mKvCikxXHLGDNwpL2rwmIRSw4VQHCbNJ%2BTV9as%2BiDuaUOd1ZtRZ3SXkhrNu23eQ%2Beus9jLOX6YDxcJZTyISux9A%2BLyy%2BtmqOmGcyF01AAxLFZ4OCWHq0fNdbOHrPcLcD8%2BCYaKjODGjRWgsRgNotjOBBafwC8522isbUsxgQPEY3mpqMIsFA%2F87WPrQ0lp5zjj2XWtF4XsU2aq14umaaZ%2FBTZOoAGy1QlqNCgxayEJB7rkjpRAFBe6bN4a9HVR1W49zalQc%2FXaKoGeRPmNCKLEPv9at5jjOpY9cqH76OJtPvgs8qjOFa%2F%2FD8J5wLVhXi%2FUxxGUMUTqZBqLEiVf8yJCz4BIeDTrE7AglUb1kNlo3rbq2VvCHqkGKCcGBdqHMMvEnsEGOqUBnu3d8d4N%2FJb207Gj5526QRqTXZ6Li%2B9Q9uqjqKrb2kqvhfDUoqv1jAPhWEHqxrB0QwNolw5%2BKFTgo41qr78qZBxWga3plifDWXmsCUPM4nLDx2ou0hgnOr5FrC2q7DCv%2Fs%2FfphREI2yc%2BFYySfW7cN%2FomjkQSdyRrp1bBxS4B%2F1YWbfAu9GHN7UNSmpcXJIEaNZFTs6Tt609PAT9MX%2FVmOkuIC7%2F&X-Amz-Signature=430d6290db3de7b1fd9ad08818e7d2a7436d72936c643a76e310a4acb13be47d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
