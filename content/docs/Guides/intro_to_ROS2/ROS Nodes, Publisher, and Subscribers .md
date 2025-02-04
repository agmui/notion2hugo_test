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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNFEOFR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIEmqaqfBn54PgWbTkhRQpYMlgD4D%2Fj1OIU0UTEBI9cCSAiEA2BulIFziwbtZ8nSZrBlLY%2F6OBlcUfxtoELRwHFgz2UQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJMpWMQCgeVeWr09GSrcA%2FkGJCMpMK9W9INt3d8gq60rZhHfu9W3lOS4hJsuQ2pTNAaf0vkDhAMcU5P0x6Wql2UqGpcUebvPBKPfc9nMFhYEVJtM%2BDrWCQOgxjGzohre3PBiZsnLKNJYYoglQcFdjJvHd%2FBYj3%2F0Jx8YIMmI7iJKz6Z9wBFuWmpt1LOYsx%2FXWdY%2BlhfWSKMosk2f3xr1pp5maYO5rxFx8qB92x1EEpmxZvQc5l1yMe7T6N6aERW4OKMAupwKoUpvw9oWRj7pknUhiFk4qIaprq3gepcge%2B34zLZYhVgVFMTobbVfT0b3XvfbnFJjvtjFshL1noHQ7Zj8NgOSZZqtBc1M3ldWfyyZ%2FGKqaTGVWODjTNgtjrepiQJmHtBVWX%2BTH2xSHhe%2Fm5GB2a4hC1Y6%2FY1zjgm3i9RDjhQ3te4wSyvW38yOg%2Bn8EaXHPZUESDzuIVXjaVOtFg%2F0wJIqqCfPzeimmSRgtVu2rwyAiwouu%2BGC2kNBEBK%2BHe4adEJjToxmyjywCXJNcUxL7hg%2Fp7t%2B%2BbZuTejHHTLrOAYiGYDk5hqQPLC3T4a%2F6ypQ0mKXHSSlF8PfGvrOKT1bUwNNr2EPyR%2Fo4dq3uApAXXekQ34KZVTbmsyLVd7%2FATNBKPY6FegyjoZvMIK%2FiL0GOqUBkf8Aj%2FBtdrUexyhqwy7tmkj3YVFfmC4jnY7pzg9upPlECLqkJF6uQSsjyxtF4k4pBSsrrag11XGro50ToyOJ7efvYYxU9tj0n5vEzAMVD7tPUPJ9E8Q0iiac2mBsaNldBovdREA4%2F3R8XdyreDq2lkV9KuiVqgZjmPPSMD4YqFl1ElQOYqn4o2R%2BnhOKc5TiJxUi9OLCwKNuLh9OGkYvaqk30eiv&X-Amz-Signature=1728e007ed91e9c299c3a70d185449f878873bce734c7bf36beefbcfb6013f51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNFEOFR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIEmqaqfBn54PgWbTkhRQpYMlgD4D%2Fj1OIU0UTEBI9cCSAiEA2BulIFziwbtZ8nSZrBlLY%2F6OBlcUfxtoELRwHFgz2UQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJMpWMQCgeVeWr09GSrcA%2FkGJCMpMK9W9INt3d8gq60rZhHfu9W3lOS4hJsuQ2pTNAaf0vkDhAMcU5P0x6Wql2UqGpcUebvPBKPfc9nMFhYEVJtM%2BDrWCQOgxjGzohre3PBiZsnLKNJYYoglQcFdjJvHd%2FBYj3%2F0Jx8YIMmI7iJKz6Z9wBFuWmpt1LOYsx%2FXWdY%2BlhfWSKMosk2f3xr1pp5maYO5rxFx8qB92x1EEpmxZvQc5l1yMe7T6N6aERW4OKMAupwKoUpvw9oWRj7pknUhiFk4qIaprq3gepcge%2B34zLZYhVgVFMTobbVfT0b3XvfbnFJjvtjFshL1noHQ7Zj8NgOSZZqtBc1M3ldWfyyZ%2FGKqaTGVWODjTNgtjrepiQJmHtBVWX%2BTH2xSHhe%2Fm5GB2a4hC1Y6%2FY1zjgm3i9RDjhQ3te4wSyvW38yOg%2Bn8EaXHPZUESDzuIVXjaVOtFg%2F0wJIqqCfPzeimmSRgtVu2rwyAiwouu%2BGC2kNBEBK%2BHe4adEJjToxmyjywCXJNcUxL7hg%2Fp7t%2B%2BbZuTejHHTLrOAYiGYDk5hqQPLC3T4a%2F6ypQ0mKXHSSlF8PfGvrOKT1bUwNNr2EPyR%2Fo4dq3uApAXXekQ34KZVTbmsyLVd7%2FATNBKPY6FegyjoZvMIK%2FiL0GOqUBkf8Aj%2FBtdrUexyhqwy7tmkj3YVFfmC4jnY7pzg9upPlECLqkJF6uQSsjyxtF4k4pBSsrrag11XGro50ToyOJ7efvYYxU9tj0n5vEzAMVD7tPUPJ9E8Q0iiac2mBsaNldBovdREA4%2F3R8XdyreDq2lkV9KuiVqgZjmPPSMD4YqFl1ElQOYqn4o2R%2BnhOKc5TiJxUi9OLCwKNuLh9OGkYvaqk30eiv&X-Amz-Signature=623b72ebc94520429047c35a2e11abc08aee533ebbadb2bc2b4d1d3386a64af4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNFEOFR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIEmqaqfBn54PgWbTkhRQpYMlgD4D%2Fj1OIU0UTEBI9cCSAiEA2BulIFziwbtZ8nSZrBlLY%2F6OBlcUfxtoELRwHFgz2UQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJMpWMQCgeVeWr09GSrcA%2FkGJCMpMK9W9INt3d8gq60rZhHfu9W3lOS4hJsuQ2pTNAaf0vkDhAMcU5P0x6Wql2UqGpcUebvPBKPfc9nMFhYEVJtM%2BDrWCQOgxjGzohre3PBiZsnLKNJYYoglQcFdjJvHd%2FBYj3%2F0Jx8YIMmI7iJKz6Z9wBFuWmpt1LOYsx%2FXWdY%2BlhfWSKMosk2f3xr1pp5maYO5rxFx8qB92x1EEpmxZvQc5l1yMe7T6N6aERW4OKMAupwKoUpvw9oWRj7pknUhiFk4qIaprq3gepcge%2B34zLZYhVgVFMTobbVfT0b3XvfbnFJjvtjFshL1noHQ7Zj8NgOSZZqtBc1M3ldWfyyZ%2FGKqaTGVWODjTNgtjrepiQJmHtBVWX%2BTH2xSHhe%2Fm5GB2a4hC1Y6%2FY1zjgm3i9RDjhQ3te4wSyvW38yOg%2Bn8EaXHPZUESDzuIVXjaVOtFg%2F0wJIqqCfPzeimmSRgtVu2rwyAiwouu%2BGC2kNBEBK%2BHe4adEJjToxmyjywCXJNcUxL7hg%2Fp7t%2B%2BbZuTejHHTLrOAYiGYDk5hqQPLC3T4a%2F6ypQ0mKXHSSlF8PfGvrOKT1bUwNNr2EPyR%2Fo4dq3uApAXXekQ34KZVTbmsyLVd7%2FATNBKPY6FegyjoZvMIK%2FiL0GOqUBkf8Aj%2FBtdrUexyhqwy7tmkj3YVFfmC4jnY7pzg9upPlECLqkJF6uQSsjyxtF4k4pBSsrrag11XGro50ToyOJ7efvYYxU9tj0n5vEzAMVD7tPUPJ9E8Q0iiac2mBsaNldBovdREA4%2F3R8XdyreDq2lkV9KuiVqgZjmPPSMD4YqFl1ElQOYqn4o2R%2BnhOKc5TiJxUi9OLCwKNuLh9OGkYvaqk30eiv&X-Amz-Signature=6ebd4a2e24341f3715f4baf080bbc4fad766e175ba8b29eb3214a174bcf7a5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNFEOFR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIEmqaqfBn54PgWbTkhRQpYMlgD4D%2Fj1OIU0UTEBI9cCSAiEA2BulIFziwbtZ8nSZrBlLY%2F6OBlcUfxtoELRwHFgz2UQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJMpWMQCgeVeWr09GSrcA%2FkGJCMpMK9W9INt3d8gq60rZhHfu9W3lOS4hJsuQ2pTNAaf0vkDhAMcU5P0x6Wql2UqGpcUebvPBKPfc9nMFhYEVJtM%2BDrWCQOgxjGzohre3PBiZsnLKNJYYoglQcFdjJvHd%2FBYj3%2F0Jx8YIMmI7iJKz6Z9wBFuWmpt1LOYsx%2FXWdY%2BlhfWSKMosk2f3xr1pp5maYO5rxFx8qB92x1EEpmxZvQc5l1yMe7T6N6aERW4OKMAupwKoUpvw9oWRj7pknUhiFk4qIaprq3gepcge%2B34zLZYhVgVFMTobbVfT0b3XvfbnFJjvtjFshL1noHQ7Zj8NgOSZZqtBc1M3ldWfyyZ%2FGKqaTGVWODjTNgtjrepiQJmHtBVWX%2BTH2xSHhe%2Fm5GB2a4hC1Y6%2FY1zjgm3i9RDjhQ3te4wSyvW38yOg%2Bn8EaXHPZUESDzuIVXjaVOtFg%2F0wJIqqCfPzeimmSRgtVu2rwyAiwouu%2BGC2kNBEBK%2BHe4adEJjToxmyjywCXJNcUxL7hg%2Fp7t%2B%2BbZuTejHHTLrOAYiGYDk5hqQPLC3T4a%2F6ypQ0mKXHSSlF8PfGvrOKT1bUwNNr2EPyR%2Fo4dq3uApAXXekQ34KZVTbmsyLVd7%2FATNBKPY6FegyjoZvMIK%2FiL0GOqUBkf8Aj%2FBtdrUexyhqwy7tmkj3YVFfmC4jnY7pzg9upPlECLqkJF6uQSsjyxtF4k4pBSsrrag11XGro50ToyOJ7efvYYxU9tj0n5vEzAMVD7tPUPJ9E8Q0iiac2mBsaNldBovdREA4%2F3R8XdyreDq2lkV9KuiVqgZjmPPSMD4YqFl1ElQOYqn4o2R%2BnhOKc5TiJxUi9OLCwKNuLh9OGkYvaqk30eiv&X-Amz-Signature=ea19279abfa02ddbde9f6897a8ee5db53bc56e2f8f4e21687624e22f6edb5d17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNFEOFR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIEmqaqfBn54PgWbTkhRQpYMlgD4D%2Fj1OIU0UTEBI9cCSAiEA2BulIFziwbtZ8nSZrBlLY%2F6OBlcUfxtoELRwHFgz2UQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJMpWMQCgeVeWr09GSrcA%2FkGJCMpMK9W9INt3d8gq60rZhHfu9W3lOS4hJsuQ2pTNAaf0vkDhAMcU5P0x6Wql2UqGpcUebvPBKPfc9nMFhYEVJtM%2BDrWCQOgxjGzohre3PBiZsnLKNJYYoglQcFdjJvHd%2FBYj3%2F0Jx8YIMmI7iJKz6Z9wBFuWmpt1LOYsx%2FXWdY%2BlhfWSKMosk2f3xr1pp5maYO5rxFx8qB92x1EEpmxZvQc5l1yMe7T6N6aERW4OKMAupwKoUpvw9oWRj7pknUhiFk4qIaprq3gepcge%2B34zLZYhVgVFMTobbVfT0b3XvfbnFJjvtjFshL1noHQ7Zj8NgOSZZqtBc1M3ldWfyyZ%2FGKqaTGVWODjTNgtjrepiQJmHtBVWX%2BTH2xSHhe%2Fm5GB2a4hC1Y6%2FY1zjgm3i9RDjhQ3te4wSyvW38yOg%2Bn8EaXHPZUESDzuIVXjaVOtFg%2F0wJIqqCfPzeimmSRgtVu2rwyAiwouu%2BGC2kNBEBK%2BHe4adEJjToxmyjywCXJNcUxL7hg%2Fp7t%2B%2BbZuTejHHTLrOAYiGYDk5hqQPLC3T4a%2F6ypQ0mKXHSSlF8PfGvrOKT1bUwNNr2EPyR%2Fo4dq3uApAXXekQ34KZVTbmsyLVd7%2FATNBKPY6FegyjoZvMIK%2FiL0GOqUBkf8Aj%2FBtdrUexyhqwy7tmkj3YVFfmC4jnY7pzg9upPlECLqkJF6uQSsjyxtF4k4pBSsrrag11XGro50ToyOJ7efvYYxU9tj0n5vEzAMVD7tPUPJ9E8Q0iiac2mBsaNldBovdREA4%2F3R8XdyreDq2lkV9KuiVqgZjmPPSMD4YqFl1ElQOYqn4o2R%2BnhOKc5TiJxUi9OLCwKNuLh9OGkYvaqk30eiv&X-Amz-Signature=928f88f4fb571ee0aa996dd1f5d0a0d432263dc5eecb37cabbf14c01669b507d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNFEOFR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIEmqaqfBn54PgWbTkhRQpYMlgD4D%2Fj1OIU0UTEBI9cCSAiEA2BulIFziwbtZ8nSZrBlLY%2F6OBlcUfxtoELRwHFgz2UQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJMpWMQCgeVeWr09GSrcA%2FkGJCMpMK9W9INt3d8gq60rZhHfu9W3lOS4hJsuQ2pTNAaf0vkDhAMcU5P0x6Wql2UqGpcUebvPBKPfc9nMFhYEVJtM%2BDrWCQOgxjGzohre3PBiZsnLKNJYYoglQcFdjJvHd%2FBYj3%2F0Jx8YIMmI7iJKz6Z9wBFuWmpt1LOYsx%2FXWdY%2BlhfWSKMosk2f3xr1pp5maYO5rxFx8qB92x1EEpmxZvQc5l1yMe7T6N6aERW4OKMAupwKoUpvw9oWRj7pknUhiFk4qIaprq3gepcge%2B34zLZYhVgVFMTobbVfT0b3XvfbnFJjvtjFshL1noHQ7Zj8NgOSZZqtBc1M3ldWfyyZ%2FGKqaTGVWODjTNgtjrepiQJmHtBVWX%2BTH2xSHhe%2Fm5GB2a4hC1Y6%2FY1zjgm3i9RDjhQ3te4wSyvW38yOg%2Bn8EaXHPZUESDzuIVXjaVOtFg%2F0wJIqqCfPzeimmSRgtVu2rwyAiwouu%2BGC2kNBEBK%2BHe4adEJjToxmyjywCXJNcUxL7hg%2Fp7t%2B%2BbZuTejHHTLrOAYiGYDk5hqQPLC3T4a%2F6ypQ0mKXHSSlF8PfGvrOKT1bUwNNr2EPyR%2Fo4dq3uApAXXekQ34KZVTbmsyLVd7%2FATNBKPY6FegyjoZvMIK%2FiL0GOqUBkf8Aj%2FBtdrUexyhqwy7tmkj3YVFfmC4jnY7pzg9upPlECLqkJF6uQSsjyxtF4k4pBSsrrag11XGro50ToyOJ7efvYYxU9tj0n5vEzAMVD7tPUPJ9E8Q0iiac2mBsaNldBovdREA4%2F3R8XdyreDq2lkV9KuiVqgZjmPPSMD4YqFl1ElQOYqn4o2R%2BnhOKc5TiJxUi9OLCwKNuLh9OGkYvaqk30eiv&X-Amz-Signature=e2968b23d12c53fe560d81328978ff719283b2be1b54e8b26cfdd84eba2952ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNFEOFR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIEmqaqfBn54PgWbTkhRQpYMlgD4D%2Fj1OIU0UTEBI9cCSAiEA2BulIFziwbtZ8nSZrBlLY%2F6OBlcUfxtoELRwHFgz2UQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJMpWMQCgeVeWr09GSrcA%2FkGJCMpMK9W9INt3d8gq60rZhHfu9W3lOS4hJsuQ2pTNAaf0vkDhAMcU5P0x6Wql2UqGpcUebvPBKPfc9nMFhYEVJtM%2BDrWCQOgxjGzohre3PBiZsnLKNJYYoglQcFdjJvHd%2FBYj3%2F0Jx8YIMmI7iJKz6Z9wBFuWmpt1LOYsx%2FXWdY%2BlhfWSKMosk2f3xr1pp5maYO5rxFx8qB92x1EEpmxZvQc5l1yMe7T6N6aERW4OKMAupwKoUpvw9oWRj7pknUhiFk4qIaprq3gepcge%2B34zLZYhVgVFMTobbVfT0b3XvfbnFJjvtjFshL1noHQ7Zj8NgOSZZqtBc1M3ldWfyyZ%2FGKqaTGVWODjTNgtjrepiQJmHtBVWX%2BTH2xSHhe%2Fm5GB2a4hC1Y6%2FY1zjgm3i9RDjhQ3te4wSyvW38yOg%2Bn8EaXHPZUESDzuIVXjaVOtFg%2F0wJIqqCfPzeimmSRgtVu2rwyAiwouu%2BGC2kNBEBK%2BHe4adEJjToxmyjywCXJNcUxL7hg%2Fp7t%2B%2BbZuTejHHTLrOAYiGYDk5hqQPLC3T4a%2F6ypQ0mKXHSSlF8PfGvrOKT1bUwNNr2EPyR%2Fo4dq3uApAXXekQ34KZVTbmsyLVd7%2FATNBKPY6FegyjoZvMIK%2FiL0GOqUBkf8Aj%2FBtdrUexyhqwy7tmkj3YVFfmC4jnY7pzg9upPlECLqkJF6uQSsjyxtF4k4pBSsrrag11XGro50ToyOJ7efvYYxU9tj0n5vEzAMVD7tPUPJ9E8Q0iiac2mBsaNldBovdREA4%2F3R8XdyreDq2lkV9KuiVqgZjmPPSMD4YqFl1ElQOYqn4o2R%2BnhOKc5TiJxUi9OLCwKNuLh9OGkYvaqk30eiv&X-Amz-Signature=dd14b2126ae2a8fd87000cb59ccd54b61c3147aa010493ee952bcf20ce2c583b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXNFEOFR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIEmqaqfBn54PgWbTkhRQpYMlgD4D%2Fj1OIU0UTEBI9cCSAiEA2BulIFziwbtZ8nSZrBlLY%2F6OBlcUfxtoELRwHFgz2UQq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJMpWMQCgeVeWr09GSrcA%2FkGJCMpMK9W9INt3d8gq60rZhHfu9W3lOS4hJsuQ2pTNAaf0vkDhAMcU5P0x6Wql2UqGpcUebvPBKPfc9nMFhYEVJtM%2BDrWCQOgxjGzohre3PBiZsnLKNJYYoglQcFdjJvHd%2FBYj3%2F0Jx8YIMmI7iJKz6Z9wBFuWmpt1LOYsx%2FXWdY%2BlhfWSKMosk2f3xr1pp5maYO5rxFx8qB92x1EEpmxZvQc5l1yMe7T6N6aERW4OKMAupwKoUpvw9oWRj7pknUhiFk4qIaprq3gepcge%2B34zLZYhVgVFMTobbVfT0b3XvfbnFJjvtjFshL1noHQ7Zj8NgOSZZqtBc1M3ldWfyyZ%2FGKqaTGVWODjTNgtjrepiQJmHtBVWX%2BTH2xSHhe%2Fm5GB2a4hC1Y6%2FY1zjgm3i9RDjhQ3te4wSyvW38yOg%2Bn8EaXHPZUESDzuIVXjaVOtFg%2F0wJIqqCfPzeimmSRgtVu2rwyAiwouu%2BGC2kNBEBK%2BHe4adEJjToxmyjywCXJNcUxL7hg%2Fp7t%2B%2BbZuTejHHTLrOAYiGYDk5hqQPLC3T4a%2F6ypQ0mKXHSSlF8PfGvrOKT1bUwNNr2EPyR%2Fo4dq3uApAXXekQ34KZVTbmsyLVd7%2FATNBKPY6FegyjoZvMIK%2FiL0GOqUBkf8Aj%2FBtdrUexyhqwy7tmkj3YVFfmC4jnY7pzg9upPlECLqkJF6uQSsjyxtF4k4pBSsrrag11XGro50ToyOJ7efvYYxU9tj0n5vEzAMVD7tPUPJ9E8Q0iiac2mBsaNldBovdREA4%2F3R8XdyreDq2lkV9KuiVqgZjmPPSMD4YqFl1ElQOYqn4o2R%2BnhOKc5TiJxUi9OLCwKNuLh9OGkYvaqk30eiv&X-Amz-Signature=886cd87e7f22e22ace43a58cb3966f111a275c15cbe6adbfed00c06911799462&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
