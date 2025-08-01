---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZET4VG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLaYhfKJqXkVtNNBaEZTJ6kbPtLq%2BU3LBUOYHe%2BFWkBAiA0wygHABFsbiLG8213KJrOWvZa%2BZ7hiPddAVgIvzDGGSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLollaoIwSadfMTJhKtwDMPhbinTt3DxNqDQwIkUuAfJNojKrupd4jgklzmR2TItHqjuAe0wLwZXjkie66kPMxXksIvp4DbWMEG5zlNQMBqsfnAwvclOWL9ak2QrriFJxXN0fvpVSEgozgSYhDE2pJyYQqMZ0PO5ZQrmzRStv%2FFAfbynuoOrdQr9zbxtax2Q%2FGMkdLewEbqxXoLqmB9g8uZFio1GPspghh8pQlcZU%2BCa%2BXLoMH%2FUgmtHMwVbU96G6NrvbEcIiR2Bl1WkwevWoSH4Z0rwy5dn3SG%2B8mi5w%2B9DIeUH8IYs3klcqJmHQXxZtusJgGDmISIZgFGLszNxt%2FyTI62i3h9sL%2BbQTqsjtx8frcXdwwXUlgvELBpTsGoQsBlkHPLi39qhaPMAceQx56lYN9i%2FjLFrMFb1VHlXazpmGvKrw2Grn1yV0brLZnq8v7O1VXTy%2Bgvk4TYQnUSSiF6Zwe3tjshrONZRjKYiInwmYbmwLrHYI18gMpWT8kp8APxO8j4wRMHgjfnFaTz3Pf%2Bga%2BgAFNSY%2BkRfTaRoVHFjesjxIhDAa0P559fqjam%2Bwnjlf5%2FdU31obVgz6qlK9RtG7ytzImctQenwQziZU5EBv1Xa8Ys82Gx%2F299fUe6jI%2B2Rj1Rz431frU3gwnsa0xAY6pgF7KVVQU5u284Z8tOSceNk1N4fUkSQHbCQHXfEDfBUJ%2FuCZ6bZGVAVKoatFRzldwKC0dcplTSQiaNPz6YhWB47Hqh0zi%2BhdA10xH%2Fg4D8zToFpN4e8qOgMfh5wuA7Cngyg7ISD8%2FiJlgch5ATazHZH0H1svCxQXnqLjKl1C3r%2BRJlFw6znlu4F%2FZ7npsMDfAw5C4RxgqHcBXuH5rmYSPg2MuqfnW8ot&X-Amz-Signature=c67670e7fde8bd77e713f086e73c578427d3f968ac8c022034b481d4d1399843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZET4VG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLaYhfKJqXkVtNNBaEZTJ6kbPtLq%2BU3LBUOYHe%2BFWkBAiA0wygHABFsbiLG8213KJrOWvZa%2BZ7hiPddAVgIvzDGGSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLollaoIwSadfMTJhKtwDMPhbinTt3DxNqDQwIkUuAfJNojKrupd4jgklzmR2TItHqjuAe0wLwZXjkie66kPMxXksIvp4DbWMEG5zlNQMBqsfnAwvclOWL9ak2QrriFJxXN0fvpVSEgozgSYhDE2pJyYQqMZ0PO5ZQrmzRStv%2FFAfbynuoOrdQr9zbxtax2Q%2FGMkdLewEbqxXoLqmB9g8uZFio1GPspghh8pQlcZU%2BCa%2BXLoMH%2FUgmtHMwVbU96G6NrvbEcIiR2Bl1WkwevWoSH4Z0rwy5dn3SG%2B8mi5w%2B9DIeUH8IYs3klcqJmHQXxZtusJgGDmISIZgFGLszNxt%2FyTI62i3h9sL%2BbQTqsjtx8frcXdwwXUlgvELBpTsGoQsBlkHPLi39qhaPMAceQx56lYN9i%2FjLFrMFb1VHlXazpmGvKrw2Grn1yV0brLZnq8v7O1VXTy%2Bgvk4TYQnUSSiF6Zwe3tjshrONZRjKYiInwmYbmwLrHYI18gMpWT8kp8APxO8j4wRMHgjfnFaTz3Pf%2Bga%2BgAFNSY%2BkRfTaRoVHFjesjxIhDAa0P559fqjam%2Bwnjlf5%2FdU31obVgz6qlK9RtG7ytzImctQenwQziZU5EBv1Xa8Ys82Gx%2F299fUe6jI%2B2Rj1Rz431frU3gwnsa0xAY6pgF7KVVQU5u284Z8tOSceNk1N4fUkSQHbCQHXfEDfBUJ%2FuCZ6bZGVAVKoatFRzldwKC0dcplTSQiaNPz6YhWB47Hqh0zi%2BhdA10xH%2Fg4D8zToFpN4e8qOgMfh5wuA7Cngyg7ISD8%2FiJlgch5ATazHZH0H1svCxQXnqLjKl1C3r%2BRJlFw6znlu4F%2FZ7npsMDfAw5C4RxgqHcBXuH5rmYSPg2MuqfnW8ot&X-Amz-Signature=d06fe8ce5261d020e43252cb4bc0aae37ff0c85a4881f885080488c04da1ded6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZET4VG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLaYhfKJqXkVtNNBaEZTJ6kbPtLq%2BU3LBUOYHe%2BFWkBAiA0wygHABFsbiLG8213KJrOWvZa%2BZ7hiPddAVgIvzDGGSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLollaoIwSadfMTJhKtwDMPhbinTt3DxNqDQwIkUuAfJNojKrupd4jgklzmR2TItHqjuAe0wLwZXjkie66kPMxXksIvp4DbWMEG5zlNQMBqsfnAwvclOWL9ak2QrriFJxXN0fvpVSEgozgSYhDE2pJyYQqMZ0PO5ZQrmzRStv%2FFAfbynuoOrdQr9zbxtax2Q%2FGMkdLewEbqxXoLqmB9g8uZFio1GPspghh8pQlcZU%2BCa%2BXLoMH%2FUgmtHMwVbU96G6NrvbEcIiR2Bl1WkwevWoSH4Z0rwy5dn3SG%2B8mi5w%2B9DIeUH8IYs3klcqJmHQXxZtusJgGDmISIZgFGLszNxt%2FyTI62i3h9sL%2BbQTqsjtx8frcXdwwXUlgvELBpTsGoQsBlkHPLi39qhaPMAceQx56lYN9i%2FjLFrMFb1VHlXazpmGvKrw2Grn1yV0brLZnq8v7O1VXTy%2Bgvk4TYQnUSSiF6Zwe3tjshrONZRjKYiInwmYbmwLrHYI18gMpWT8kp8APxO8j4wRMHgjfnFaTz3Pf%2Bga%2BgAFNSY%2BkRfTaRoVHFjesjxIhDAa0P559fqjam%2Bwnjlf5%2FdU31obVgz6qlK9RtG7ytzImctQenwQziZU5EBv1Xa8Ys82Gx%2F299fUe6jI%2B2Rj1Rz431frU3gwnsa0xAY6pgF7KVVQU5u284Z8tOSceNk1N4fUkSQHbCQHXfEDfBUJ%2FuCZ6bZGVAVKoatFRzldwKC0dcplTSQiaNPz6YhWB47Hqh0zi%2BhdA10xH%2Fg4D8zToFpN4e8qOgMfh5wuA7Cngyg7ISD8%2FiJlgch5ATazHZH0H1svCxQXnqLjKl1C3r%2BRJlFw6znlu4F%2FZ7npsMDfAw5C4RxgqHcBXuH5rmYSPg2MuqfnW8ot&X-Amz-Signature=182730f9163975aab3b7613b785a7e937fe13fb468f8892e6aee4edb57b86f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZET4VG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLaYhfKJqXkVtNNBaEZTJ6kbPtLq%2BU3LBUOYHe%2BFWkBAiA0wygHABFsbiLG8213KJrOWvZa%2BZ7hiPddAVgIvzDGGSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLollaoIwSadfMTJhKtwDMPhbinTt3DxNqDQwIkUuAfJNojKrupd4jgklzmR2TItHqjuAe0wLwZXjkie66kPMxXksIvp4DbWMEG5zlNQMBqsfnAwvclOWL9ak2QrriFJxXN0fvpVSEgozgSYhDE2pJyYQqMZ0PO5ZQrmzRStv%2FFAfbynuoOrdQr9zbxtax2Q%2FGMkdLewEbqxXoLqmB9g8uZFio1GPspghh8pQlcZU%2BCa%2BXLoMH%2FUgmtHMwVbU96G6NrvbEcIiR2Bl1WkwevWoSH4Z0rwy5dn3SG%2B8mi5w%2B9DIeUH8IYs3klcqJmHQXxZtusJgGDmISIZgFGLszNxt%2FyTI62i3h9sL%2BbQTqsjtx8frcXdwwXUlgvELBpTsGoQsBlkHPLi39qhaPMAceQx56lYN9i%2FjLFrMFb1VHlXazpmGvKrw2Grn1yV0brLZnq8v7O1VXTy%2Bgvk4TYQnUSSiF6Zwe3tjshrONZRjKYiInwmYbmwLrHYI18gMpWT8kp8APxO8j4wRMHgjfnFaTz3Pf%2Bga%2BgAFNSY%2BkRfTaRoVHFjesjxIhDAa0P559fqjam%2Bwnjlf5%2FdU31obVgz6qlK9RtG7ytzImctQenwQziZU5EBv1Xa8Ys82Gx%2F299fUe6jI%2B2Rj1Rz431frU3gwnsa0xAY6pgF7KVVQU5u284Z8tOSceNk1N4fUkSQHbCQHXfEDfBUJ%2FuCZ6bZGVAVKoatFRzldwKC0dcplTSQiaNPz6YhWB47Hqh0zi%2BhdA10xH%2Fg4D8zToFpN4e8qOgMfh5wuA7Cngyg7ISD8%2FiJlgch5ATazHZH0H1svCxQXnqLjKl1C3r%2BRJlFw6znlu4F%2FZ7npsMDfAw5C4RxgqHcBXuH5rmYSPg2MuqfnW8ot&X-Amz-Signature=3b099d69ef40fef4b6eba25b76a80d98a400f59d1f422ca2ba3fb64ba2325fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZET4VG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLaYhfKJqXkVtNNBaEZTJ6kbPtLq%2BU3LBUOYHe%2BFWkBAiA0wygHABFsbiLG8213KJrOWvZa%2BZ7hiPddAVgIvzDGGSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLollaoIwSadfMTJhKtwDMPhbinTt3DxNqDQwIkUuAfJNojKrupd4jgklzmR2TItHqjuAe0wLwZXjkie66kPMxXksIvp4DbWMEG5zlNQMBqsfnAwvclOWL9ak2QrriFJxXN0fvpVSEgozgSYhDE2pJyYQqMZ0PO5ZQrmzRStv%2FFAfbynuoOrdQr9zbxtax2Q%2FGMkdLewEbqxXoLqmB9g8uZFio1GPspghh8pQlcZU%2BCa%2BXLoMH%2FUgmtHMwVbU96G6NrvbEcIiR2Bl1WkwevWoSH4Z0rwy5dn3SG%2B8mi5w%2B9DIeUH8IYs3klcqJmHQXxZtusJgGDmISIZgFGLszNxt%2FyTI62i3h9sL%2BbQTqsjtx8frcXdwwXUlgvELBpTsGoQsBlkHPLi39qhaPMAceQx56lYN9i%2FjLFrMFb1VHlXazpmGvKrw2Grn1yV0brLZnq8v7O1VXTy%2Bgvk4TYQnUSSiF6Zwe3tjshrONZRjKYiInwmYbmwLrHYI18gMpWT8kp8APxO8j4wRMHgjfnFaTz3Pf%2Bga%2BgAFNSY%2BkRfTaRoVHFjesjxIhDAa0P559fqjam%2Bwnjlf5%2FdU31obVgz6qlK9RtG7ytzImctQenwQziZU5EBv1Xa8Ys82Gx%2F299fUe6jI%2B2Rj1Rz431frU3gwnsa0xAY6pgF7KVVQU5u284Z8tOSceNk1N4fUkSQHbCQHXfEDfBUJ%2FuCZ6bZGVAVKoatFRzldwKC0dcplTSQiaNPz6YhWB47Hqh0zi%2BhdA10xH%2Fg4D8zToFpN4e8qOgMfh5wuA7Cngyg7ISD8%2FiJlgch5ATazHZH0H1svCxQXnqLjKl1C3r%2BRJlFw6znlu4F%2FZ7npsMDfAw5C4RxgqHcBXuH5rmYSPg2MuqfnW8ot&X-Amz-Signature=4f04c2dd00e9a7d59fffdff1cfe09ab5dccce00eaf50296e049997488a87bfe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZET4VG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLaYhfKJqXkVtNNBaEZTJ6kbPtLq%2BU3LBUOYHe%2BFWkBAiA0wygHABFsbiLG8213KJrOWvZa%2BZ7hiPddAVgIvzDGGSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLollaoIwSadfMTJhKtwDMPhbinTt3DxNqDQwIkUuAfJNojKrupd4jgklzmR2TItHqjuAe0wLwZXjkie66kPMxXksIvp4DbWMEG5zlNQMBqsfnAwvclOWL9ak2QrriFJxXN0fvpVSEgozgSYhDE2pJyYQqMZ0PO5ZQrmzRStv%2FFAfbynuoOrdQr9zbxtax2Q%2FGMkdLewEbqxXoLqmB9g8uZFio1GPspghh8pQlcZU%2BCa%2BXLoMH%2FUgmtHMwVbU96G6NrvbEcIiR2Bl1WkwevWoSH4Z0rwy5dn3SG%2B8mi5w%2B9DIeUH8IYs3klcqJmHQXxZtusJgGDmISIZgFGLszNxt%2FyTI62i3h9sL%2BbQTqsjtx8frcXdwwXUlgvELBpTsGoQsBlkHPLi39qhaPMAceQx56lYN9i%2FjLFrMFb1VHlXazpmGvKrw2Grn1yV0brLZnq8v7O1VXTy%2Bgvk4TYQnUSSiF6Zwe3tjshrONZRjKYiInwmYbmwLrHYI18gMpWT8kp8APxO8j4wRMHgjfnFaTz3Pf%2Bga%2BgAFNSY%2BkRfTaRoVHFjesjxIhDAa0P559fqjam%2Bwnjlf5%2FdU31obVgz6qlK9RtG7ytzImctQenwQziZU5EBv1Xa8Ys82Gx%2F299fUe6jI%2B2Rj1Rz431frU3gwnsa0xAY6pgF7KVVQU5u284Z8tOSceNk1N4fUkSQHbCQHXfEDfBUJ%2FuCZ6bZGVAVKoatFRzldwKC0dcplTSQiaNPz6YhWB47Hqh0zi%2BhdA10xH%2Fg4D8zToFpN4e8qOgMfh5wuA7Cngyg7ISD8%2FiJlgch5ATazHZH0H1svCxQXnqLjKl1C3r%2BRJlFw6znlu4F%2FZ7npsMDfAw5C4RxgqHcBXuH5rmYSPg2MuqfnW8ot&X-Amz-Signature=dd7818d1555474d5783cd97f7bb30487980198df730fa50a0882c6bfcd29cca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZET4VG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLaYhfKJqXkVtNNBaEZTJ6kbPtLq%2BU3LBUOYHe%2BFWkBAiA0wygHABFsbiLG8213KJrOWvZa%2BZ7hiPddAVgIvzDGGSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLollaoIwSadfMTJhKtwDMPhbinTt3DxNqDQwIkUuAfJNojKrupd4jgklzmR2TItHqjuAe0wLwZXjkie66kPMxXksIvp4DbWMEG5zlNQMBqsfnAwvclOWL9ak2QrriFJxXN0fvpVSEgozgSYhDE2pJyYQqMZ0PO5ZQrmzRStv%2FFAfbynuoOrdQr9zbxtax2Q%2FGMkdLewEbqxXoLqmB9g8uZFio1GPspghh8pQlcZU%2BCa%2BXLoMH%2FUgmtHMwVbU96G6NrvbEcIiR2Bl1WkwevWoSH4Z0rwy5dn3SG%2B8mi5w%2B9DIeUH8IYs3klcqJmHQXxZtusJgGDmISIZgFGLszNxt%2FyTI62i3h9sL%2BbQTqsjtx8frcXdwwXUlgvELBpTsGoQsBlkHPLi39qhaPMAceQx56lYN9i%2FjLFrMFb1VHlXazpmGvKrw2Grn1yV0brLZnq8v7O1VXTy%2Bgvk4TYQnUSSiF6Zwe3tjshrONZRjKYiInwmYbmwLrHYI18gMpWT8kp8APxO8j4wRMHgjfnFaTz3Pf%2Bga%2BgAFNSY%2BkRfTaRoVHFjesjxIhDAa0P559fqjam%2Bwnjlf5%2FdU31obVgz6qlK9RtG7ytzImctQenwQziZU5EBv1Xa8Ys82Gx%2F299fUe6jI%2B2Rj1Rz431frU3gwnsa0xAY6pgF7KVVQU5u284Z8tOSceNk1N4fUkSQHbCQHXfEDfBUJ%2FuCZ6bZGVAVKoatFRzldwKC0dcplTSQiaNPz6YhWB47Hqh0zi%2BhdA10xH%2Fg4D8zToFpN4e8qOgMfh5wuA7Cngyg7ISD8%2FiJlgch5ATazHZH0H1svCxQXnqLjKl1C3r%2BRJlFw6znlu4F%2FZ7npsMDfAw5C4RxgqHcBXuH5rmYSPg2MuqfnW8ot&X-Amz-Signature=1719e133085e42be664a5f513d6e6f4e92deb4488bf7e3796c3926d29c0458f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZET4VG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLaYhfKJqXkVtNNBaEZTJ6kbPtLq%2BU3LBUOYHe%2BFWkBAiA0wygHABFsbiLG8213KJrOWvZa%2BZ7hiPddAVgIvzDGGSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLollaoIwSadfMTJhKtwDMPhbinTt3DxNqDQwIkUuAfJNojKrupd4jgklzmR2TItHqjuAe0wLwZXjkie66kPMxXksIvp4DbWMEG5zlNQMBqsfnAwvclOWL9ak2QrriFJxXN0fvpVSEgozgSYhDE2pJyYQqMZ0PO5ZQrmzRStv%2FFAfbynuoOrdQr9zbxtax2Q%2FGMkdLewEbqxXoLqmB9g8uZFio1GPspghh8pQlcZU%2BCa%2BXLoMH%2FUgmtHMwVbU96G6NrvbEcIiR2Bl1WkwevWoSH4Z0rwy5dn3SG%2B8mi5w%2B9DIeUH8IYs3klcqJmHQXxZtusJgGDmISIZgFGLszNxt%2FyTI62i3h9sL%2BbQTqsjtx8frcXdwwXUlgvELBpTsGoQsBlkHPLi39qhaPMAceQx56lYN9i%2FjLFrMFb1VHlXazpmGvKrw2Grn1yV0brLZnq8v7O1VXTy%2Bgvk4TYQnUSSiF6Zwe3tjshrONZRjKYiInwmYbmwLrHYI18gMpWT8kp8APxO8j4wRMHgjfnFaTz3Pf%2Bga%2BgAFNSY%2BkRfTaRoVHFjesjxIhDAa0P559fqjam%2Bwnjlf5%2FdU31obVgz6qlK9RtG7ytzImctQenwQziZU5EBv1Xa8Ys82Gx%2F299fUe6jI%2B2Rj1Rz431frU3gwnsa0xAY6pgF7KVVQU5u284Z8tOSceNk1N4fUkSQHbCQHXfEDfBUJ%2FuCZ6bZGVAVKoatFRzldwKC0dcplTSQiaNPz6YhWB47Hqh0zi%2BhdA10xH%2Fg4D8zToFpN4e8qOgMfh5wuA7Cngyg7ISD8%2FiJlgch5ATazHZH0H1svCxQXnqLjKl1C3r%2BRJlFw6znlu4F%2FZ7npsMDfAw5C4RxgqHcBXuH5rmYSPg2MuqfnW8ot&X-Amz-Signature=9883a9f3e2b312d7c4c8d993c7c2c1e46e162ddf9051205670301462d7a4a609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
