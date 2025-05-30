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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCGLK7JG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm5%2FyxcbhIZRG9wToQJvfuVEo0holUo5q5fPfsRHR%2BvwIgODr1I4C%2BVlx8GU%2FuSE91kFpZtAIdV0s%2Blp7%2B0dJS688qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlazwQ9rgLIfgVaZSrcA19rIgvvPxEDNkILWg4ZUp3iP1DMSuu%2F7FJHPPT1vofbK2e9fEmB1f64vFjGHjvrcrn97TxVLeFDIrJzFjBBQfkxiLZ%2BxOWa5em5WH9YnFN9uHttxFlS6EOZwEs3kUjZ5bBb94mS5Vz9FUePUXSrq75an9g1XM%2FnVgL%2F6rxyT9%2Fn7FScw9mQ%2Bftscb5iW9EEVVEVizHxMn9f5HrcaVJw0qGQf5o0mDNBogn83i5JDoXHLscDCxJ8utSAWLuS5VzcAq1l1W5f7%2FmzIThJDUeU%2BcahYNSqfAQOceTYEOMeAHzI0%2FMh31hlQCUvCYgcbBrUpBxcjwrvszGGqXSma0gil7zRgyYR7zAVg6famtVM8NaKXwDyaawSxzSd30o5DfnOad74jRsprF36UbLQKxHRTClWY%2Fobh2hNMnv6cxSGmYNl3T3eJh6LYX41pGQRQQHdBItBz04F7VPZ%2BRrnY1uIi%2BmTruitlKlyT3RgRaOFTeKHoexivXDh7JRePhHF%2BBgCCHB5Udfv8KkkLoCEsPV5Zpi3pd9%2Bv7M%2BEH11rGURvBsayvRIEOuPAci8Dr0f44IU3RuZONGP1UNWaVWvmQcb6MYCthv9exC7bZWnTZtlsZHhiqPg9q6bUM0hEScQMPPK5cEGOqUBYVJ4fv8auS64wykik8YwbTs5R2YpUW7PJRUELRYbTHQzIagJQmT8nvPg8Yd%2BNWB1cGJLjPIeWlGkePfYsZ2Q50KMKfqTOxWJGfFDDLdB3USZhjliJ0gHhEVKqWLj3v%2F%2FdlcxxsvO4xPzYjHkECf7RMnZHBms%2BlnYz%2BMTvkgQOMDwvxINHTXog5noJKlKZUxscYaM9zKIMEOq1ga8d2RqMLZ0ZpYW&X-Amz-Signature=419d34d0ab9149f7179c1d8314b2ccabdb943ff3ecd28cb89ef943a81413b8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCGLK7JG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm5%2FyxcbhIZRG9wToQJvfuVEo0holUo5q5fPfsRHR%2BvwIgODr1I4C%2BVlx8GU%2FuSE91kFpZtAIdV0s%2Blp7%2B0dJS688qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlazwQ9rgLIfgVaZSrcA19rIgvvPxEDNkILWg4ZUp3iP1DMSuu%2F7FJHPPT1vofbK2e9fEmB1f64vFjGHjvrcrn97TxVLeFDIrJzFjBBQfkxiLZ%2BxOWa5em5WH9YnFN9uHttxFlS6EOZwEs3kUjZ5bBb94mS5Vz9FUePUXSrq75an9g1XM%2FnVgL%2F6rxyT9%2Fn7FScw9mQ%2Bftscb5iW9EEVVEVizHxMn9f5HrcaVJw0qGQf5o0mDNBogn83i5JDoXHLscDCxJ8utSAWLuS5VzcAq1l1W5f7%2FmzIThJDUeU%2BcahYNSqfAQOceTYEOMeAHzI0%2FMh31hlQCUvCYgcbBrUpBxcjwrvszGGqXSma0gil7zRgyYR7zAVg6famtVM8NaKXwDyaawSxzSd30o5DfnOad74jRsprF36UbLQKxHRTClWY%2Fobh2hNMnv6cxSGmYNl3T3eJh6LYX41pGQRQQHdBItBz04F7VPZ%2BRrnY1uIi%2BmTruitlKlyT3RgRaOFTeKHoexivXDh7JRePhHF%2BBgCCHB5Udfv8KkkLoCEsPV5Zpi3pd9%2Bv7M%2BEH11rGURvBsayvRIEOuPAci8Dr0f44IU3RuZONGP1UNWaVWvmQcb6MYCthv9exC7bZWnTZtlsZHhiqPg9q6bUM0hEScQMPPK5cEGOqUBYVJ4fv8auS64wykik8YwbTs5R2YpUW7PJRUELRYbTHQzIagJQmT8nvPg8Yd%2BNWB1cGJLjPIeWlGkePfYsZ2Q50KMKfqTOxWJGfFDDLdB3USZhjliJ0gHhEVKqWLj3v%2F%2FdlcxxsvO4xPzYjHkECf7RMnZHBms%2BlnYz%2BMTvkgQOMDwvxINHTXog5noJKlKZUxscYaM9zKIMEOq1ga8d2RqMLZ0ZpYW&X-Amz-Signature=d8ae820773ee6d1e5edc488c74abbd22a6b784c44919864a2fed18057a7ff354&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCGLK7JG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm5%2FyxcbhIZRG9wToQJvfuVEo0holUo5q5fPfsRHR%2BvwIgODr1I4C%2BVlx8GU%2FuSE91kFpZtAIdV0s%2Blp7%2B0dJS688qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlazwQ9rgLIfgVaZSrcA19rIgvvPxEDNkILWg4ZUp3iP1DMSuu%2F7FJHPPT1vofbK2e9fEmB1f64vFjGHjvrcrn97TxVLeFDIrJzFjBBQfkxiLZ%2BxOWa5em5WH9YnFN9uHttxFlS6EOZwEs3kUjZ5bBb94mS5Vz9FUePUXSrq75an9g1XM%2FnVgL%2F6rxyT9%2Fn7FScw9mQ%2Bftscb5iW9EEVVEVizHxMn9f5HrcaVJw0qGQf5o0mDNBogn83i5JDoXHLscDCxJ8utSAWLuS5VzcAq1l1W5f7%2FmzIThJDUeU%2BcahYNSqfAQOceTYEOMeAHzI0%2FMh31hlQCUvCYgcbBrUpBxcjwrvszGGqXSma0gil7zRgyYR7zAVg6famtVM8NaKXwDyaawSxzSd30o5DfnOad74jRsprF36UbLQKxHRTClWY%2Fobh2hNMnv6cxSGmYNl3T3eJh6LYX41pGQRQQHdBItBz04F7VPZ%2BRrnY1uIi%2BmTruitlKlyT3RgRaOFTeKHoexivXDh7JRePhHF%2BBgCCHB5Udfv8KkkLoCEsPV5Zpi3pd9%2Bv7M%2BEH11rGURvBsayvRIEOuPAci8Dr0f44IU3RuZONGP1UNWaVWvmQcb6MYCthv9exC7bZWnTZtlsZHhiqPg9q6bUM0hEScQMPPK5cEGOqUBYVJ4fv8auS64wykik8YwbTs5R2YpUW7PJRUELRYbTHQzIagJQmT8nvPg8Yd%2BNWB1cGJLjPIeWlGkePfYsZ2Q50KMKfqTOxWJGfFDDLdB3USZhjliJ0gHhEVKqWLj3v%2F%2FdlcxxsvO4xPzYjHkECf7RMnZHBms%2BlnYz%2BMTvkgQOMDwvxINHTXog5noJKlKZUxscYaM9zKIMEOq1ga8d2RqMLZ0ZpYW&X-Amz-Signature=d7b6fdb59a7975a404bd575ef1d0f55ae1f1e6f159ffe1afd5c85a96f5164e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCGLK7JG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm5%2FyxcbhIZRG9wToQJvfuVEo0holUo5q5fPfsRHR%2BvwIgODr1I4C%2BVlx8GU%2FuSE91kFpZtAIdV0s%2Blp7%2B0dJS688qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlazwQ9rgLIfgVaZSrcA19rIgvvPxEDNkILWg4ZUp3iP1DMSuu%2F7FJHPPT1vofbK2e9fEmB1f64vFjGHjvrcrn97TxVLeFDIrJzFjBBQfkxiLZ%2BxOWa5em5WH9YnFN9uHttxFlS6EOZwEs3kUjZ5bBb94mS5Vz9FUePUXSrq75an9g1XM%2FnVgL%2F6rxyT9%2Fn7FScw9mQ%2Bftscb5iW9EEVVEVizHxMn9f5HrcaVJw0qGQf5o0mDNBogn83i5JDoXHLscDCxJ8utSAWLuS5VzcAq1l1W5f7%2FmzIThJDUeU%2BcahYNSqfAQOceTYEOMeAHzI0%2FMh31hlQCUvCYgcbBrUpBxcjwrvszGGqXSma0gil7zRgyYR7zAVg6famtVM8NaKXwDyaawSxzSd30o5DfnOad74jRsprF36UbLQKxHRTClWY%2Fobh2hNMnv6cxSGmYNl3T3eJh6LYX41pGQRQQHdBItBz04F7VPZ%2BRrnY1uIi%2BmTruitlKlyT3RgRaOFTeKHoexivXDh7JRePhHF%2BBgCCHB5Udfv8KkkLoCEsPV5Zpi3pd9%2Bv7M%2BEH11rGURvBsayvRIEOuPAci8Dr0f44IU3RuZONGP1UNWaVWvmQcb6MYCthv9exC7bZWnTZtlsZHhiqPg9q6bUM0hEScQMPPK5cEGOqUBYVJ4fv8auS64wykik8YwbTs5R2YpUW7PJRUELRYbTHQzIagJQmT8nvPg8Yd%2BNWB1cGJLjPIeWlGkePfYsZ2Q50KMKfqTOxWJGfFDDLdB3USZhjliJ0gHhEVKqWLj3v%2F%2FdlcxxsvO4xPzYjHkECf7RMnZHBms%2BlnYz%2BMTvkgQOMDwvxINHTXog5noJKlKZUxscYaM9zKIMEOq1ga8d2RqMLZ0ZpYW&X-Amz-Signature=65d2f679f40f9c040b89f5ad7707ac4967bd2926d1c0f82e4df9b02980b732e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCGLK7JG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm5%2FyxcbhIZRG9wToQJvfuVEo0holUo5q5fPfsRHR%2BvwIgODr1I4C%2BVlx8GU%2FuSE91kFpZtAIdV0s%2Blp7%2B0dJS688qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlazwQ9rgLIfgVaZSrcA19rIgvvPxEDNkILWg4ZUp3iP1DMSuu%2F7FJHPPT1vofbK2e9fEmB1f64vFjGHjvrcrn97TxVLeFDIrJzFjBBQfkxiLZ%2BxOWa5em5WH9YnFN9uHttxFlS6EOZwEs3kUjZ5bBb94mS5Vz9FUePUXSrq75an9g1XM%2FnVgL%2F6rxyT9%2Fn7FScw9mQ%2Bftscb5iW9EEVVEVizHxMn9f5HrcaVJw0qGQf5o0mDNBogn83i5JDoXHLscDCxJ8utSAWLuS5VzcAq1l1W5f7%2FmzIThJDUeU%2BcahYNSqfAQOceTYEOMeAHzI0%2FMh31hlQCUvCYgcbBrUpBxcjwrvszGGqXSma0gil7zRgyYR7zAVg6famtVM8NaKXwDyaawSxzSd30o5DfnOad74jRsprF36UbLQKxHRTClWY%2Fobh2hNMnv6cxSGmYNl3T3eJh6LYX41pGQRQQHdBItBz04F7VPZ%2BRrnY1uIi%2BmTruitlKlyT3RgRaOFTeKHoexivXDh7JRePhHF%2BBgCCHB5Udfv8KkkLoCEsPV5Zpi3pd9%2Bv7M%2BEH11rGURvBsayvRIEOuPAci8Dr0f44IU3RuZONGP1UNWaVWvmQcb6MYCthv9exC7bZWnTZtlsZHhiqPg9q6bUM0hEScQMPPK5cEGOqUBYVJ4fv8auS64wykik8YwbTs5R2YpUW7PJRUELRYbTHQzIagJQmT8nvPg8Yd%2BNWB1cGJLjPIeWlGkePfYsZ2Q50KMKfqTOxWJGfFDDLdB3USZhjliJ0gHhEVKqWLj3v%2F%2FdlcxxsvO4xPzYjHkECf7RMnZHBms%2BlnYz%2BMTvkgQOMDwvxINHTXog5noJKlKZUxscYaM9zKIMEOq1ga8d2RqMLZ0ZpYW&X-Amz-Signature=144fd355b992a251d9514443a26f0d726ff171916db2efd685f6e8fe186f8724&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCGLK7JG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm5%2FyxcbhIZRG9wToQJvfuVEo0holUo5q5fPfsRHR%2BvwIgODr1I4C%2BVlx8GU%2FuSE91kFpZtAIdV0s%2Blp7%2B0dJS688qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlazwQ9rgLIfgVaZSrcA19rIgvvPxEDNkILWg4ZUp3iP1DMSuu%2F7FJHPPT1vofbK2e9fEmB1f64vFjGHjvrcrn97TxVLeFDIrJzFjBBQfkxiLZ%2BxOWa5em5WH9YnFN9uHttxFlS6EOZwEs3kUjZ5bBb94mS5Vz9FUePUXSrq75an9g1XM%2FnVgL%2F6rxyT9%2Fn7FScw9mQ%2Bftscb5iW9EEVVEVizHxMn9f5HrcaVJw0qGQf5o0mDNBogn83i5JDoXHLscDCxJ8utSAWLuS5VzcAq1l1W5f7%2FmzIThJDUeU%2BcahYNSqfAQOceTYEOMeAHzI0%2FMh31hlQCUvCYgcbBrUpBxcjwrvszGGqXSma0gil7zRgyYR7zAVg6famtVM8NaKXwDyaawSxzSd30o5DfnOad74jRsprF36UbLQKxHRTClWY%2Fobh2hNMnv6cxSGmYNl3T3eJh6LYX41pGQRQQHdBItBz04F7VPZ%2BRrnY1uIi%2BmTruitlKlyT3RgRaOFTeKHoexivXDh7JRePhHF%2BBgCCHB5Udfv8KkkLoCEsPV5Zpi3pd9%2Bv7M%2BEH11rGURvBsayvRIEOuPAci8Dr0f44IU3RuZONGP1UNWaVWvmQcb6MYCthv9exC7bZWnTZtlsZHhiqPg9q6bUM0hEScQMPPK5cEGOqUBYVJ4fv8auS64wykik8YwbTs5R2YpUW7PJRUELRYbTHQzIagJQmT8nvPg8Yd%2BNWB1cGJLjPIeWlGkePfYsZ2Q50KMKfqTOxWJGfFDDLdB3USZhjliJ0gHhEVKqWLj3v%2F%2FdlcxxsvO4xPzYjHkECf7RMnZHBms%2BlnYz%2BMTvkgQOMDwvxINHTXog5noJKlKZUxscYaM9zKIMEOq1ga8d2RqMLZ0ZpYW&X-Amz-Signature=60701db524f50a05f14eea71827a578732e703d1694e91d8fe5f37b440709981&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCGLK7JG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm5%2FyxcbhIZRG9wToQJvfuVEo0holUo5q5fPfsRHR%2BvwIgODr1I4C%2BVlx8GU%2FuSE91kFpZtAIdV0s%2Blp7%2B0dJS688qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlazwQ9rgLIfgVaZSrcA19rIgvvPxEDNkILWg4ZUp3iP1DMSuu%2F7FJHPPT1vofbK2e9fEmB1f64vFjGHjvrcrn97TxVLeFDIrJzFjBBQfkxiLZ%2BxOWa5em5WH9YnFN9uHttxFlS6EOZwEs3kUjZ5bBb94mS5Vz9FUePUXSrq75an9g1XM%2FnVgL%2F6rxyT9%2Fn7FScw9mQ%2Bftscb5iW9EEVVEVizHxMn9f5HrcaVJw0qGQf5o0mDNBogn83i5JDoXHLscDCxJ8utSAWLuS5VzcAq1l1W5f7%2FmzIThJDUeU%2BcahYNSqfAQOceTYEOMeAHzI0%2FMh31hlQCUvCYgcbBrUpBxcjwrvszGGqXSma0gil7zRgyYR7zAVg6famtVM8NaKXwDyaawSxzSd30o5DfnOad74jRsprF36UbLQKxHRTClWY%2Fobh2hNMnv6cxSGmYNl3T3eJh6LYX41pGQRQQHdBItBz04F7VPZ%2BRrnY1uIi%2BmTruitlKlyT3RgRaOFTeKHoexivXDh7JRePhHF%2BBgCCHB5Udfv8KkkLoCEsPV5Zpi3pd9%2Bv7M%2BEH11rGURvBsayvRIEOuPAci8Dr0f44IU3RuZONGP1UNWaVWvmQcb6MYCthv9exC7bZWnTZtlsZHhiqPg9q6bUM0hEScQMPPK5cEGOqUBYVJ4fv8auS64wykik8YwbTs5R2YpUW7PJRUELRYbTHQzIagJQmT8nvPg8Yd%2BNWB1cGJLjPIeWlGkePfYsZ2Q50KMKfqTOxWJGfFDDLdB3USZhjliJ0gHhEVKqWLj3v%2F%2FdlcxxsvO4xPzYjHkECf7RMnZHBms%2BlnYz%2BMTvkgQOMDwvxINHTXog5noJKlKZUxscYaM9zKIMEOq1ga8d2RqMLZ0ZpYW&X-Amz-Signature=b4ac726dc4f36974c63d17a72887bde92e4b806e8865dd028b25903e11f75fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCGLK7JG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm5%2FyxcbhIZRG9wToQJvfuVEo0holUo5q5fPfsRHR%2BvwIgODr1I4C%2BVlx8GU%2FuSE91kFpZtAIdV0s%2Blp7%2B0dJS688qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBlazwQ9rgLIfgVaZSrcA19rIgvvPxEDNkILWg4ZUp3iP1DMSuu%2F7FJHPPT1vofbK2e9fEmB1f64vFjGHjvrcrn97TxVLeFDIrJzFjBBQfkxiLZ%2BxOWa5em5WH9YnFN9uHttxFlS6EOZwEs3kUjZ5bBb94mS5Vz9FUePUXSrq75an9g1XM%2FnVgL%2F6rxyT9%2Fn7FScw9mQ%2Bftscb5iW9EEVVEVizHxMn9f5HrcaVJw0qGQf5o0mDNBogn83i5JDoXHLscDCxJ8utSAWLuS5VzcAq1l1W5f7%2FmzIThJDUeU%2BcahYNSqfAQOceTYEOMeAHzI0%2FMh31hlQCUvCYgcbBrUpBxcjwrvszGGqXSma0gil7zRgyYR7zAVg6famtVM8NaKXwDyaawSxzSd30o5DfnOad74jRsprF36UbLQKxHRTClWY%2Fobh2hNMnv6cxSGmYNl3T3eJh6LYX41pGQRQQHdBItBz04F7VPZ%2BRrnY1uIi%2BmTruitlKlyT3RgRaOFTeKHoexivXDh7JRePhHF%2BBgCCHB5Udfv8KkkLoCEsPV5Zpi3pd9%2Bv7M%2BEH11rGURvBsayvRIEOuPAci8Dr0f44IU3RuZONGP1UNWaVWvmQcb6MYCthv9exC7bZWnTZtlsZHhiqPg9q6bUM0hEScQMPPK5cEGOqUBYVJ4fv8auS64wykik8YwbTs5R2YpUW7PJRUELRYbTHQzIagJQmT8nvPg8Yd%2BNWB1cGJLjPIeWlGkePfYsZ2Q50KMKfqTOxWJGfFDDLdB3USZhjliJ0gHhEVKqWLj3v%2F%2FdlcxxsvO4xPzYjHkECf7RMnZHBms%2BlnYz%2BMTvkgQOMDwvxINHTXog5noJKlKZUxscYaM9zKIMEOq1ga8d2RqMLZ0ZpYW&X-Amz-Signature=ae1b31388cdb6ba78b1fad32f248f8864eca152d7ef63795421b031dacd659b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
