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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IILCZDI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEDGxzW7v1tZiHNQa4tWbA88RZbmqWAfdb%2FterEx%2F5PZAiEAq1KwjNnZgvqf6jyaNDsyPD7Wq1ln8yyS64UvHVHz1oQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAMebmOax%2BqDkPPxCrcAytlhuc8ZjS56kLqbdFNAQBc65nyfR8%2Bzp8mc6iR9JspEJmuaqzPHUgtAOb4JMzvNqIvd6lX6Ix%2FgvMG88Dn1xwHJRXI%2Bom4liGvsFEKoG3FNYE%2BrclzLVd%2FRBMqYFLKm4%2BxTwAX%2BKwNKNUSMsPEf9c6EhhrX2rrkvSsdEO9Sg7gsu0jAt1hu9U9%2BlTS4PvpX%2B8s5KYv9wXlgDUe20vkNLsBQGB8ttcWToecpXMjUkrWjl5GOy7tD%2BK80DsCABAebde0q4qpvCP1MY3H8Z23bx4wy7yLHsCRryLwDJ3Ix3OsTCSJ4ZGTdXTIihordJRVdvKlohr7xDRcU97LbBrqoVTgJrAtiOi67Tapy%2BTmhoMMgzeNZYF4E%2B1t99j30iSSfH716YyS6OHQLZ050mGie7Wk%2BP2DzDAPo%2FSuvvyyBswx0%2BdQEyZl9luAHcNkGhSCXjXPdW0qlpKkkKtyjshNSaTw21seSCouklq%2FFUAVbdkYLHCtD7pEMeqXZB%2F7A4TmtnEC96gbBx58O2Z5e6WW0S1ODNCW8T%2F%2FeyEYQaGLAvbrxcuJ7p2Mncz0AW8apZzEn%2BjEAmYe2A9LM4XpBCtLUyHZADWoXV7y3DUixYBXgormNqxRjkZTHibduhh%2BMNSG1sAGOqUBY3d%2Fb97UV2p36mTiOblQLm7%2Fc%2BEMFL4ig2IiVRK2IXk7uoJb1Bj2sbNfJtx%2FiKFZMgG7b7elsIEZy1Pj%2FqNOjghDRow6MNdUT67DNtqe7ERWv5%2F%2BBUQQBcasOgKl0MvtLvWVviBnmrP9uB%2B33IXvbFW%2FenQxjm%2Ft0VbnOWt%2FMQfvIk4cKeFqyVuX10DxGFQl6I9d4TM9m6UgeduAPK2wWsRt9jDP&X-Amz-Signature=b6b0ecd918f6c72e7578941f2fed7f2fd9e185704eb89f890f3815560eb2ac9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IILCZDI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEDGxzW7v1tZiHNQa4tWbA88RZbmqWAfdb%2FterEx%2F5PZAiEAq1KwjNnZgvqf6jyaNDsyPD7Wq1ln8yyS64UvHVHz1oQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAMebmOax%2BqDkPPxCrcAytlhuc8ZjS56kLqbdFNAQBc65nyfR8%2Bzp8mc6iR9JspEJmuaqzPHUgtAOb4JMzvNqIvd6lX6Ix%2FgvMG88Dn1xwHJRXI%2Bom4liGvsFEKoG3FNYE%2BrclzLVd%2FRBMqYFLKm4%2BxTwAX%2BKwNKNUSMsPEf9c6EhhrX2rrkvSsdEO9Sg7gsu0jAt1hu9U9%2BlTS4PvpX%2B8s5KYv9wXlgDUe20vkNLsBQGB8ttcWToecpXMjUkrWjl5GOy7tD%2BK80DsCABAebde0q4qpvCP1MY3H8Z23bx4wy7yLHsCRryLwDJ3Ix3OsTCSJ4ZGTdXTIihordJRVdvKlohr7xDRcU97LbBrqoVTgJrAtiOi67Tapy%2BTmhoMMgzeNZYF4E%2B1t99j30iSSfH716YyS6OHQLZ050mGie7Wk%2BP2DzDAPo%2FSuvvyyBswx0%2BdQEyZl9luAHcNkGhSCXjXPdW0qlpKkkKtyjshNSaTw21seSCouklq%2FFUAVbdkYLHCtD7pEMeqXZB%2F7A4TmtnEC96gbBx58O2Z5e6WW0S1ODNCW8T%2F%2FeyEYQaGLAvbrxcuJ7p2Mncz0AW8apZzEn%2BjEAmYe2A9LM4XpBCtLUyHZADWoXV7y3DUixYBXgormNqxRjkZTHibduhh%2BMNSG1sAGOqUBY3d%2Fb97UV2p36mTiOblQLm7%2Fc%2BEMFL4ig2IiVRK2IXk7uoJb1Bj2sbNfJtx%2FiKFZMgG7b7elsIEZy1Pj%2FqNOjghDRow6MNdUT67DNtqe7ERWv5%2F%2BBUQQBcasOgKl0MvtLvWVviBnmrP9uB%2B33IXvbFW%2FenQxjm%2Ft0VbnOWt%2FMQfvIk4cKeFqyVuX10DxGFQl6I9d4TM9m6UgeduAPK2wWsRt9jDP&X-Amz-Signature=c2315aef2843ac6a2f44ed15f564df7377fba782f685a0a0e1264466a8b8a14d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IILCZDI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEDGxzW7v1tZiHNQa4tWbA88RZbmqWAfdb%2FterEx%2F5PZAiEAq1KwjNnZgvqf6jyaNDsyPD7Wq1ln8yyS64UvHVHz1oQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAMebmOax%2BqDkPPxCrcAytlhuc8ZjS56kLqbdFNAQBc65nyfR8%2Bzp8mc6iR9JspEJmuaqzPHUgtAOb4JMzvNqIvd6lX6Ix%2FgvMG88Dn1xwHJRXI%2Bom4liGvsFEKoG3FNYE%2BrclzLVd%2FRBMqYFLKm4%2BxTwAX%2BKwNKNUSMsPEf9c6EhhrX2rrkvSsdEO9Sg7gsu0jAt1hu9U9%2BlTS4PvpX%2B8s5KYv9wXlgDUe20vkNLsBQGB8ttcWToecpXMjUkrWjl5GOy7tD%2BK80DsCABAebde0q4qpvCP1MY3H8Z23bx4wy7yLHsCRryLwDJ3Ix3OsTCSJ4ZGTdXTIihordJRVdvKlohr7xDRcU97LbBrqoVTgJrAtiOi67Tapy%2BTmhoMMgzeNZYF4E%2B1t99j30iSSfH716YyS6OHQLZ050mGie7Wk%2BP2DzDAPo%2FSuvvyyBswx0%2BdQEyZl9luAHcNkGhSCXjXPdW0qlpKkkKtyjshNSaTw21seSCouklq%2FFUAVbdkYLHCtD7pEMeqXZB%2F7A4TmtnEC96gbBx58O2Z5e6WW0S1ODNCW8T%2F%2FeyEYQaGLAvbrxcuJ7p2Mncz0AW8apZzEn%2BjEAmYe2A9LM4XpBCtLUyHZADWoXV7y3DUixYBXgormNqxRjkZTHibduhh%2BMNSG1sAGOqUBY3d%2Fb97UV2p36mTiOblQLm7%2Fc%2BEMFL4ig2IiVRK2IXk7uoJb1Bj2sbNfJtx%2FiKFZMgG7b7elsIEZy1Pj%2FqNOjghDRow6MNdUT67DNtqe7ERWv5%2F%2BBUQQBcasOgKl0MvtLvWVviBnmrP9uB%2B33IXvbFW%2FenQxjm%2Ft0VbnOWt%2FMQfvIk4cKeFqyVuX10DxGFQl6I9d4TM9m6UgeduAPK2wWsRt9jDP&X-Amz-Signature=7b30ac28d34484be3c87c6cbb0bb01e580e4b46d264fd1b57494c874223afcf5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IILCZDI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEDGxzW7v1tZiHNQa4tWbA88RZbmqWAfdb%2FterEx%2F5PZAiEAq1KwjNnZgvqf6jyaNDsyPD7Wq1ln8yyS64UvHVHz1oQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAMebmOax%2BqDkPPxCrcAytlhuc8ZjS56kLqbdFNAQBc65nyfR8%2Bzp8mc6iR9JspEJmuaqzPHUgtAOb4JMzvNqIvd6lX6Ix%2FgvMG88Dn1xwHJRXI%2Bom4liGvsFEKoG3FNYE%2BrclzLVd%2FRBMqYFLKm4%2BxTwAX%2BKwNKNUSMsPEf9c6EhhrX2rrkvSsdEO9Sg7gsu0jAt1hu9U9%2BlTS4PvpX%2B8s5KYv9wXlgDUe20vkNLsBQGB8ttcWToecpXMjUkrWjl5GOy7tD%2BK80DsCABAebde0q4qpvCP1MY3H8Z23bx4wy7yLHsCRryLwDJ3Ix3OsTCSJ4ZGTdXTIihordJRVdvKlohr7xDRcU97LbBrqoVTgJrAtiOi67Tapy%2BTmhoMMgzeNZYF4E%2B1t99j30iSSfH716YyS6OHQLZ050mGie7Wk%2BP2DzDAPo%2FSuvvyyBswx0%2BdQEyZl9luAHcNkGhSCXjXPdW0qlpKkkKtyjshNSaTw21seSCouklq%2FFUAVbdkYLHCtD7pEMeqXZB%2F7A4TmtnEC96gbBx58O2Z5e6WW0S1ODNCW8T%2F%2FeyEYQaGLAvbrxcuJ7p2Mncz0AW8apZzEn%2BjEAmYe2A9LM4XpBCtLUyHZADWoXV7y3DUixYBXgormNqxRjkZTHibduhh%2BMNSG1sAGOqUBY3d%2Fb97UV2p36mTiOblQLm7%2Fc%2BEMFL4ig2IiVRK2IXk7uoJb1Bj2sbNfJtx%2FiKFZMgG7b7elsIEZy1Pj%2FqNOjghDRow6MNdUT67DNtqe7ERWv5%2F%2BBUQQBcasOgKl0MvtLvWVviBnmrP9uB%2B33IXvbFW%2FenQxjm%2Ft0VbnOWt%2FMQfvIk4cKeFqyVuX10DxGFQl6I9d4TM9m6UgeduAPK2wWsRt9jDP&X-Amz-Signature=b9210f3b7abac7268cf8c70d748a822ef74f778c1784d5023aadb51825c0453e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IILCZDI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEDGxzW7v1tZiHNQa4tWbA88RZbmqWAfdb%2FterEx%2F5PZAiEAq1KwjNnZgvqf6jyaNDsyPD7Wq1ln8yyS64UvHVHz1oQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAMebmOax%2BqDkPPxCrcAytlhuc8ZjS56kLqbdFNAQBc65nyfR8%2Bzp8mc6iR9JspEJmuaqzPHUgtAOb4JMzvNqIvd6lX6Ix%2FgvMG88Dn1xwHJRXI%2Bom4liGvsFEKoG3FNYE%2BrclzLVd%2FRBMqYFLKm4%2BxTwAX%2BKwNKNUSMsPEf9c6EhhrX2rrkvSsdEO9Sg7gsu0jAt1hu9U9%2BlTS4PvpX%2B8s5KYv9wXlgDUe20vkNLsBQGB8ttcWToecpXMjUkrWjl5GOy7tD%2BK80DsCABAebde0q4qpvCP1MY3H8Z23bx4wy7yLHsCRryLwDJ3Ix3OsTCSJ4ZGTdXTIihordJRVdvKlohr7xDRcU97LbBrqoVTgJrAtiOi67Tapy%2BTmhoMMgzeNZYF4E%2B1t99j30iSSfH716YyS6OHQLZ050mGie7Wk%2BP2DzDAPo%2FSuvvyyBswx0%2BdQEyZl9luAHcNkGhSCXjXPdW0qlpKkkKtyjshNSaTw21seSCouklq%2FFUAVbdkYLHCtD7pEMeqXZB%2F7A4TmtnEC96gbBx58O2Z5e6WW0S1ODNCW8T%2F%2FeyEYQaGLAvbrxcuJ7p2Mncz0AW8apZzEn%2BjEAmYe2A9LM4XpBCtLUyHZADWoXV7y3DUixYBXgormNqxRjkZTHibduhh%2BMNSG1sAGOqUBY3d%2Fb97UV2p36mTiOblQLm7%2Fc%2BEMFL4ig2IiVRK2IXk7uoJb1Bj2sbNfJtx%2FiKFZMgG7b7elsIEZy1Pj%2FqNOjghDRow6MNdUT67DNtqe7ERWv5%2F%2BBUQQBcasOgKl0MvtLvWVviBnmrP9uB%2B33IXvbFW%2FenQxjm%2Ft0VbnOWt%2FMQfvIk4cKeFqyVuX10DxGFQl6I9d4TM9m6UgeduAPK2wWsRt9jDP&X-Amz-Signature=acf276755c459bbbde00c14d92f30cdbe224887fc6223f2bb178983a2f3fbc02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IILCZDI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEDGxzW7v1tZiHNQa4tWbA88RZbmqWAfdb%2FterEx%2F5PZAiEAq1KwjNnZgvqf6jyaNDsyPD7Wq1ln8yyS64UvHVHz1oQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAMebmOax%2BqDkPPxCrcAytlhuc8ZjS56kLqbdFNAQBc65nyfR8%2Bzp8mc6iR9JspEJmuaqzPHUgtAOb4JMzvNqIvd6lX6Ix%2FgvMG88Dn1xwHJRXI%2Bom4liGvsFEKoG3FNYE%2BrclzLVd%2FRBMqYFLKm4%2BxTwAX%2BKwNKNUSMsPEf9c6EhhrX2rrkvSsdEO9Sg7gsu0jAt1hu9U9%2BlTS4PvpX%2B8s5KYv9wXlgDUe20vkNLsBQGB8ttcWToecpXMjUkrWjl5GOy7tD%2BK80DsCABAebde0q4qpvCP1MY3H8Z23bx4wy7yLHsCRryLwDJ3Ix3OsTCSJ4ZGTdXTIihordJRVdvKlohr7xDRcU97LbBrqoVTgJrAtiOi67Tapy%2BTmhoMMgzeNZYF4E%2B1t99j30iSSfH716YyS6OHQLZ050mGie7Wk%2BP2DzDAPo%2FSuvvyyBswx0%2BdQEyZl9luAHcNkGhSCXjXPdW0qlpKkkKtyjshNSaTw21seSCouklq%2FFUAVbdkYLHCtD7pEMeqXZB%2F7A4TmtnEC96gbBx58O2Z5e6WW0S1ODNCW8T%2F%2FeyEYQaGLAvbrxcuJ7p2Mncz0AW8apZzEn%2BjEAmYe2A9LM4XpBCtLUyHZADWoXV7y3DUixYBXgormNqxRjkZTHibduhh%2BMNSG1sAGOqUBY3d%2Fb97UV2p36mTiOblQLm7%2Fc%2BEMFL4ig2IiVRK2IXk7uoJb1Bj2sbNfJtx%2FiKFZMgG7b7elsIEZy1Pj%2FqNOjghDRow6MNdUT67DNtqe7ERWv5%2F%2BBUQQBcasOgKl0MvtLvWVviBnmrP9uB%2B33IXvbFW%2FenQxjm%2Ft0VbnOWt%2FMQfvIk4cKeFqyVuX10DxGFQl6I9d4TM9m6UgeduAPK2wWsRt9jDP&X-Amz-Signature=9f64f1eb9b41705038d15947d9ec8a91488c4d2b9e4849ae92846857f20db180&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IILCZDI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEDGxzW7v1tZiHNQa4tWbA88RZbmqWAfdb%2FterEx%2F5PZAiEAq1KwjNnZgvqf6jyaNDsyPD7Wq1ln8yyS64UvHVHz1oQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAMebmOax%2BqDkPPxCrcAytlhuc8ZjS56kLqbdFNAQBc65nyfR8%2Bzp8mc6iR9JspEJmuaqzPHUgtAOb4JMzvNqIvd6lX6Ix%2FgvMG88Dn1xwHJRXI%2Bom4liGvsFEKoG3FNYE%2BrclzLVd%2FRBMqYFLKm4%2BxTwAX%2BKwNKNUSMsPEf9c6EhhrX2rrkvSsdEO9Sg7gsu0jAt1hu9U9%2BlTS4PvpX%2B8s5KYv9wXlgDUe20vkNLsBQGB8ttcWToecpXMjUkrWjl5GOy7tD%2BK80DsCABAebde0q4qpvCP1MY3H8Z23bx4wy7yLHsCRryLwDJ3Ix3OsTCSJ4ZGTdXTIihordJRVdvKlohr7xDRcU97LbBrqoVTgJrAtiOi67Tapy%2BTmhoMMgzeNZYF4E%2B1t99j30iSSfH716YyS6OHQLZ050mGie7Wk%2BP2DzDAPo%2FSuvvyyBswx0%2BdQEyZl9luAHcNkGhSCXjXPdW0qlpKkkKtyjshNSaTw21seSCouklq%2FFUAVbdkYLHCtD7pEMeqXZB%2F7A4TmtnEC96gbBx58O2Z5e6WW0S1ODNCW8T%2F%2FeyEYQaGLAvbrxcuJ7p2Mncz0AW8apZzEn%2BjEAmYe2A9LM4XpBCtLUyHZADWoXV7y3DUixYBXgormNqxRjkZTHibduhh%2BMNSG1sAGOqUBY3d%2Fb97UV2p36mTiOblQLm7%2Fc%2BEMFL4ig2IiVRK2IXk7uoJb1Bj2sbNfJtx%2FiKFZMgG7b7elsIEZy1Pj%2FqNOjghDRow6MNdUT67DNtqe7ERWv5%2F%2BBUQQBcasOgKl0MvtLvWVviBnmrP9uB%2B33IXvbFW%2FenQxjm%2Ft0VbnOWt%2FMQfvIk4cKeFqyVuX10DxGFQl6I9d4TM9m6UgeduAPK2wWsRt9jDP&X-Amz-Signature=b4e922cf5c49483e014ecb5ccb5d0cec7aa1ac8fb94376b076a4dacd82cc50de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IILCZDI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T032858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIEDGxzW7v1tZiHNQa4tWbA88RZbmqWAfdb%2FterEx%2F5PZAiEAq1KwjNnZgvqf6jyaNDsyPD7Wq1ln8yyS64UvHVHz1oQqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAMebmOax%2BqDkPPxCrcAytlhuc8ZjS56kLqbdFNAQBc65nyfR8%2Bzp8mc6iR9JspEJmuaqzPHUgtAOb4JMzvNqIvd6lX6Ix%2FgvMG88Dn1xwHJRXI%2Bom4liGvsFEKoG3FNYE%2BrclzLVd%2FRBMqYFLKm4%2BxTwAX%2BKwNKNUSMsPEf9c6EhhrX2rrkvSsdEO9Sg7gsu0jAt1hu9U9%2BlTS4PvpX%2B8s5KYv9wXlgDUe20vkNLsBQGB8ttcWToecpXMjUkrWjl5GOy7tD%2BK80DsCABAebde0q4qpvCP1MY3H8Z23bx4wy7yLHsCRryLwDJ3Ix3OsTCSJ4ZGTdXTIihordJRVdvKlohr7xDRcU97LbBrqoVTgJrAtiOi67Tapy%2BTmhoMMgzeNZYF4E%2B1t99j30iSSfH716YyS6OHQLZ050mGie7Wk%2BP2DzDAPo%2FSuvvyyBswx0%2BdQEyZl9luAHcNkGhSCXjXPdW0qlpKkkKtyjshNSaTw21seSCouklq%2FFUAVbdkYLHCtD7pEMeqXZB%2F7A4TmtnEC96gbBx58O2Z5e6WW0S1ODNCW8T%2F%2FeyEYQaGLAvbrxcuJ7p2Mncz0AW8apZzEn%2BjEAmYe2A9LM4XpBCtLUyHZADWoXV7y3DUixYBXgormNqxRjkZTHibduhh%2BMNSG1sAGOqUBY3d%2Fb97UV2p36mTiOblQLm7%2Fc%2BEMFL4ig2IiVRK2IXk7uoJb1Bj2sbNfJtx%2FiKFZMgG7b7elsIEZy1Pj%2FqNOjghDRow6MNdUT67DNtqe7ERWv5%2F%2BBUQQBcasOgKl0MvtLvWVviBnmrP9uB%2B33IXvbFW%2FenQxjm%2Ft0VbnOWt%2FMQfvIk4cKeFqyVuX10DxGFQl6I9d4TM9m6UgeduAPK2wWsRt9jDP&X-Amz-Signature=0f2de6a76f1502745639375985008fe54e5021129dabf6dbdb42f500d7f92d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
