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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZJHHGG6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgPN2AArfxLyIlzM%2BU7zmK67aTF7%2FSaQL6Bp1xP54pAIhANeaaJcHHckSjnCOuwSTlUgGL2ixaNrV%2BMM0ow%2FWDbQ5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgxnhG9NnXENAKaH7Pcq3AOiNMNF8wSy1OmYPldzUNbfaQcvKZmYSQpKIJ7xPecH7Uan6KHtfi1pgtM94nImglyNNb%2B5E2AC1cKpgL7Zbdq9%2BT61VVEGbEoQxC7oLAf4BM%2F2IwEWbPKjQkPugaX8B9UWkYrwNISkp3NG%2BXhAwzphntmPIblGm5fMitlm50rIXR0FJMI0lwcXNH79uksy1oNwhFIJJ0i4dYc8i4tcZ2Ejf82a2i06ABCG%2Fq3HPQQypXfnYaTnr41tqFhZdWqX0Xsn3ntieGU563z%2Bm7art2s0scvK47fZ9FOcv%2F1HrSc19DE2io1rP9HpaeSsBSXLBvJieaGzQ%2FEsrahjBQnIKJ0v2m%2Fb6BuAcm2hF5g7zOhUlpOOma%2Fk7ODPRSDQ7e%2FzbZf%2FBWxXUEqkRMayVXvfRt2Dl9M7Qn9EyQ7c7dp8X2RivDwzrQaE4VaPUD%2FTkeWys3dqhGK3H8HZ2N2ASFBv0M2xaWbUCKJR76gWlWVEEIWzrWEN0uCbJ9RJSClihLzxm1c5iHfvbo%2FwSzXevwqIm49cJiQ4ZW%2FNk9EgkjqHlBnPeL91hvwdNF3HCc8UC3vqYzkhFdqaGWd1y%2BlXMBSSyAAxSDUlI7ZQZdpGG0tGI23bhTOLz0eNA73vfP2c9zCE7eK%2BBjqkAfblvuikO0X4RMlFCOANweJmiSwO7%2FN1jB%2F8zzMVxNh%2F%2FsEBCmoFUh%2Fl9BKCz1CAYam2edYtDh07OAQz9SxYxW59rF%2Fotze8bayVEL1UvYt3Hg6NFdyAZm65%2BTDXtcr9XICCi45X8lR8sPyOXDfHBxGiuEC7R%2F8MmbHdjYCSzZJEv5GJGqgwPhFNwqlyuMper1WwGOAYsiSIuSTRkxhl%2BQpWSQHj&X-Amz-Signature=538424c6680c70e6dc839bf5fc8386521191e2db45bd4a30296221e1f62c1090&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZJHHGG6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgPN2AArfxLyIlzM%2BU7zmK67aTF7%2FSaQL6Bp1xP54pAIhANeaaJcHHckSjnCOuwSTlUgGL2ixaNrV%2BMM0ow%2FWDbQ5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgxnhG9NnXENAKaH7Pcq3AOiNMNF8wSy1OmYPldzUNbfaQcvKZmYSQpKIJ7xPecH7Uan6KHtfi1pgtM94nImglyNNb%2B5E2AC1cKpgL7Zbdq9%2BT61VVEGbEoQxC7oLAf4BM%2F2IwEWbPKjQkPugaX8B9UWkYrwNISkp3NG%2BXhAwzphntmPIblGm5fMitlm50rIXR0FJMI0lwcXNH79uksy1oNwhFIJJ0i4dYc8i4tcZ2Ejf82a2i06ABCG%2Fq3HPQQypXfnYaTnr41tqFhZdWqX0Xsn3ntieGU563z%2Bm7art2s0scvK47fZ9FOcv%2F1HrSc19DE2io1rP9HpaeSsBSXLBvJieaGzQ%2FEsrahjBQnIKJ0v2m%2Fb6BuAcm2hF5g7zOhUlpOOma%2Fk7ODPRSDQ7e%2FzbZf%2FBWxXUEqkRMayVXvfRt2Dl9M7Qn9EyQ7c7dp8X2RivDwzrQaE4VaPUD%2FTkeWys3dqhGK3H8HZ2N2ASFBv0M2xaWbUCKJR76gWlWVEEIWzrWEN0uCbJ9RJSClihLzxm1c5iHfvbo%2FwSzXevwqIm49cJiQ4ZW%2FNk9EgkjqHlBnPeL91hvwdNF3HCc8UC3vqYzkhFdqaGWd1y%2BlXMBSSyAAxSDUlI7ZQZdpGG0tGI23bhTOLz0eNA73vfP2c9zCE7eK%2BBjqkAfblvuikO0X4RMlFCOANweJmiSwO7%2FN1jB%2F8zzMVxNh%2F%2FsEBCmoFUh%2Fl9BKCz1CAYam2edYtDh07OAQz9SxYxW59rF%2Fotze8bayVEL1UvYt3Hg6NFdyAZm65%2BTDXtcr9XICCi45X8lR8sPyOXDfHBxGiuEC7R%2F8MmbHdjYCSzZJEv5GJGqgwPhFNwqlyuMper1WwGOAYsiSIuSTRkxhl%2BQpWSQHj&X-Amz-Signature=3941c38b9ab92c6b3dd0a4f9c22e716b849dac71697e8a485ad403bf3476159e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZJHHGG6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgPN2AArfxLyIlzM%2BU7zmK67aTF7%2FSaQL6Bp1xP54pAIhANeaaJcHHckSjnCOuwSTlUgGL2ixaNrV%2BMM0ow%2FWDbQ5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgxnhG9NnXENAKaH7Pcq3AOiNMNF8wSy1OmYPldzUNbfaQcvKZmYSQpKIJ7xPecH7Uan6KHtfi1pgtM94nImglyNNb%2B5E2AC1cKpgL7Zbdq9%2BT61VVEGbEoQxC7oLAf4BM%2F2IwEWbPKjQkPugaX8B9UWkYrwNISkp3NG%2BXhAwzphntmPIblGm5fMitlm50rIXR0FJMI0lwcXNH79uksy1oNwhFIJJ0i4dYc8i4tcZ2Ejf82a2i06ABCG%2Fq3HPQQypXfnYaTnr41tqFhZdWqX0Xsn3ntieGU563z%2Bm7art2s0scvK47fZ9FOcv%2F1HrSc19DE2io1rP9HpaeSsBSXLBvJieaGzQ%2FEsrahjBQnIKJ0v2m%2Fb6BuAcm2hF5g7zOhUlpOOma%2Fk7ODPRSDQ7e%2FzbZf%2FBWxXUEqkRMayVXvfRt2Dl9M7Qn9EyQ7c7dp8X2RivDwzrQaE4VaPUD%2FTkeWys3dqhGK3H8HZ2N2ASFBv0M2xaWbUCKJR76gWlWVEEIWzrWEN0uCbJ9RJSClihLzxm1c5iHfvbo%2FwSzXevwqIm49cJiQ4ZW%2FNk9EgkjqHlBnPeL91hvwdNF3HCc8UC3vqYzkhFdqaGWd1y%2BlXMBSSyAAxSDUlI7ZQZdpGG0tGI23bhTOLz0eNA73vfP2c9zCE7eK%2BBjqkAfblvuikO0X4RMlFCOANweJmiSwO7%2FN1jB%2F8zzMVxNh%2F%2FsEBCmoFUh%2Fl9BKCz1CAYam2edYtDh07OAQz9SxYxW59rF%2Fotze8bayVEL1UvYt3Hg6NFdyAZm65%2BTDXtcr9XICCi45X8lR8sPyOXDfHBxGiuEC7R%2F8MmbHdjYCSzZJEv5GJGqgwPhFNwqlyuMper1WwGOAYsiSIuSTRkxhl%2BQpWSQHj&X-Amz-Signature=f181f2537cd17da9cbb7a9c6eec74cade7f38423efd59780eed37a555b1ff4fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZJHHGG6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgPN2AArfxLyIlzM%2BU7zmK67aTF7%2FSaQL6Bp1xP54pAIhANeaaJcHHckSjnCOuwSTlUgGL2ixaNrV%2BMM0ow%2FWDbQ5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgxnhG9NnXENAKaH7Pcq3AOiNMNF8wSy1OmYPldzUNbfaQcvKZmYSQpKIJ7xPecH7Uan6KHtfi1pgtM94nImglyNNb%2B5E2AC1cKpgL7Zbdq9%2BT61VVEGbEoQxC7oLAf4BM%2F2IwEWbPKjQkPugaX8B9UWkYrwNISkp3NG%2BXhAwzphntmPIblGm5fMitlm50rIXR0FJMI0lwcXNH79uksy1oNwhFIJJ0i4dYc8i4tcZ2Ejf82a2i06ABCG%2Fq3HPQQypXfnYaTnr41tqFhZdWqX0Xsn3ntieGU563z%2Bm7art2s0scvK47fZ9FOcv%2F1HrSc19DE2io1rP9HpaeSsBSXLBvJieaGzQ%2FEsrahjBQnIKJ0v2m%2Fb6BuAcm2hF5g7zOhUlpOOma%2Fk7ODPRSDQ7e%2FzbZf%2FBWxXUEqkRMayVXvfRt2Dl9M7Qn9EyQ7c7dp8X2RivDwzrQaE4VaPUD%2FTkeWys3dqhGK3H8HZ2N2ASFBv0M2xaWbUCKJR76gWlWVEEIWzrWEN0uCbJ9RJSClihLzxm1c5iHfvbo%2FwSzXevwqIm49cJiQ4ZW%2FNk9EgkjqHlBnPeL91hvwdNF3HCc8UC3vqYzkhFdqaGWd1y%2BlXMBSSyAAxSDUlI7ZQZdpGG0tGI23bhTOLz0eNA73vfP2c9zCE7eK%2BBjqkAfblvuikO0X4RMlFCOANweJmiSwO7%2FN1jB%2F8zzMVxNh%2F%2FsEBCmoFUh%2Fl9BKCz1CAYam2edYtDh07OAQz9SxYxW59rF%2Fotze8bayVEL1UvYt3Hg6NFdyAZm65%2BTDXtcr9XICCi45X8lR8sPyOXDfHBxGiuEC7R%2F8MmbHdjYCSzZJEv5GJGqgwPhFNwqlyuMper1WwGOAYsiSIuSTRkxhl%2BQpWSQHj&X-Amz-Signature=45037e288db05c5f312947a0fa9b591e3fafc5df19fc346cdf6f80c7be65af3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZJHHGG6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgPN2AArfxLyIlzM%2BU7zmK67aTF7%2FSaQL6Bp1xP54pAIhANeaaJcHHckSjnCOuwSTlUgGL2ixaNrV%2BMM0ow%2FWDbQ5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgxnhG9NnXENAKaH7Pcq3AOiNMNF8wSy1OmYPldzUNbfaQcvKZmYSQpKIJ7xPecH7Uan6KHtfi1pgtM94nImglyNNb%2B5E2AC1cKpgL7Zbdq9%2BT61VVEGbEoQxC7oLAf4BM%2F2IwEWbPKjQkPugaX8B9UWkYrwNISkp3NG%2BXhAwzphntmPIblGm5fMitlm50rIXR0FJMI0lwcXNH79uksy1oNwhFIJJ0i4dYc8i4tcZ2Ejf82a2i06ABCG%2Fq3HPQQypXfnYaTnr41tqFhZdWqX0Xsn3ntieGU563z%2Bm7art2s0scvK47fZ9FOcv%2F1HrSc19DE2io1rP9HpaeSsBSXLBvJieaGzQ%2FEsrahjBQnIKJ0v2m%2Fb6BuAcm2hF5g7zOhUlpOOma%2Fk7ODPRSDQ7e%2FzbZf%2FBWxXUEqkRMayVXvfRt2Dl9M7Qn9EyQ7c7dp8X2RivDwzrQaE4VaPUD%2FTkeWys3dqhGK3H8HZ2N2ASFBv0M2xaWbUCKJR76gWlWVEEIWzrWEN0uCbJ9RJSClihLzxm1c5iHfvbo%2FwSzXevwqIm49cJiQ4ZW%2FNk9EgkjqHlBnPeL91hvwdNF3HCc8UC3vqYzkhFdqaGWd1y%2BlXMBSSyAAxSDUlI7ZQZdpGG0tGI23bhTOLz0eNA73vfP2c9zCE7eK%2BBjqkAfblvuikO0X4RMlFCOANweJmiSwO7%2FN1jB%2F8zzMVxNh%2F%2FsEBCmoFUh%2Fl9BKCz1CAYam2edYtDh07OAQz9SxYxW59rF%2Fotze8bayVEL1UvYt3Hg6NFdyAZm65%2BTDXtcr9XICCi45X8lR8sPyOXDfHBxGiuEC7R%2F8MmbHdjYCSzZJEv5GJGqgwPhFNwqlyuMper1WwGOAYsiSIuSTRkxhl%2BQpWSQHj&X-Amz-Signature=e958b9c544296fc139c346d0773954aa2f719af5aad3badff35eaa70a7cce3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZJHHGG6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgPN2AArfxLyIlzM%2BU7zmK67aTF7%2FSaQL6Bp1xP54pAIhANeaaJcHHckSjnCOuwSTlUgGL2ixaNrV%2BMM0ow%2FWDbQ5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgxnhG9NnXENAKaH7Pcq3AOiNMNF8wSy1OmYPldzUNbfaQcvKZmYSQpKIJ7xPecH7Uan6KHtfi1pgtM94nImglyNNb%2B5E2AC1cKpgL7Zbdq9%2BT61VVEGbEoQxC7oLAf4BM%2F2IwEWbPKjQkPugaX8B9UWkYrwNISkp3NG%2BXhAwzphntmPIblGm5fMitlm50rIXR0FJMI0lwcXNH79uksy1oNwhFIJJ0i4dYc8i4tcZ2Ejf82a2i06ABCG%2Fq3HPQQypXfnYaTnr41tqFhZdWqX0Xsn3ntieGU563z%2Bm7art2s0scvK47fZ9FOcv%2F1HrSc19DE2io1rP9HpaeSsBSXLBvJieaGzQ%2FEsrahjBQnIKJ0v2m%2Fb6BuAcm2hF5g7zOhUlpOOma%2Fk7ODPRSDQ7e%2FzbZf%2FBWxXUEqkRMayVXvfRt2Dl9M7Qn9EyQ7c7dp8X2RivDwzrQaE4VaPUD%2FTkeWys3dqhGK3H8HZ2N2ASFBv0M2xaWbUCKJR76gWlWVEEIWzrWEN0uCbJ9RJSClihLzxm1c5iHfvbo%2FwSzXevwqIm49cJiQ4ZW%2FNk9EgkjqHlBnPeL91hvwdNF3HCc8UC3vqYzkhFdqaGWd1y%2BlXMBSSyAAxSDUlI7ZQZdpGG0tGI23bhTOLz0eNA73vfP2c9zCE7eK%2BBjqkAfblvuikO0X4RMlFCOANweJmiSwO7%2FN1jB%2F8zzMVxNh%2F%2FsEBCmoFUh%2Fl9BKCz1CAYam2edYtDh07OAQz9SxYxW59rF%2Fotze8bayVEL1UvYt3Hg6NFdyAZm65%2BTDXtcr9XICCi45X8lR8sPyOXDfHBxGiuEC7R%2F8MmbHdjYCSzZJEv5GJGqgwPhFNwqlyuMper1WwGOAYsiSIuSTRkxhl%2BQpWSQHj&X-Amz-Signature=7e440a5a7492def975a6dafd3cbc82d1ac67ffacaca9dd32fb4ac1ae534aabb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZJHHGG6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgPN2AArfxLyIlzM%2BU7zmK67aTF7%2FSaQL6Bp1xP54pAIhANeaaJcHHckSjnCOuwSTlUgGL2ixaNrV%2BMM0ow%2FWDbQ5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgxnhG9NnXENAKaH7Pcq3AOiNMNF8wSy1OmYPldzUNbfaQcvKZmYSQpKIJ7xPecH7Uan6KHtfi1pgtM94nImglyNNb%2B5E2AC1cKpgL7Zbdq9%2BT61VVEGbEoQxC7oLAf4BM%2F2IwEWbPKjQkPugaX8B9UWkYrwNISkp3NG%2BXhAwzphntmPIblGm5fMitlm50rIXR0FJMI0lwcXNH79uksy1oNwhFIJJ0i4dYc8i4tcZ2Ejf82a2i06ABCG%2Fq3HPQQypXfnYaTnr41tqFhZdWqX0Xsn3ntieGU563z%2Bm7art2s0scvK47fZ9FOcv%2F1HrSc19DE2io1rP9HpaeSsBSXLBvJieaGzQ%2FEsrahjBQnIKJ0v2m%2Fb6BuAcm2hF5g7zOhUlpOOma%2Fk7ODPRSDQ7e%2FzbZf%2FBWxXUEqkRMayVXvfRt2Dl9M7Qn9EyQ7c7dp8X2RivDwzrQaE4VaPUD%2FTkeWys3dqhGK3H8HZ2N2ASFBv0M2xaWbUCKJR76gWlWVEEIWzrWEN0uCbJ9RJSClihLzxm1c5iHfvbo%2FwSzXevwqIm49cJiQ4ZW%2FNk9EgkjqHlBnPeL91hvwdNF3HCc8UC3vqYzkhFdqaGWd1y%2BlXMBSSyAAxSDUlI7ZQZdpGG0tGI23bhTOLz0eNA73vfP2c9zCE7eK%2BBjqkAfblvuikO0X4RMlFCOANweJmiSwO7%2FN1jB%2F8zzMVxNh%2F%2FsEBCmoFUh%2Fl9BKCz1CAYam2edYtDh07OAQz9SxYxW59rF%2Fotze8bayVEL1UvYt3Hg6NFdyAZm65%2BTDXtcr9XICCi45X8lR8sPyOXDfHBxGiuEC7R%2F8MmbHdjYCSzZJEv5GJGqgwPhFNwqlyuMper1WwGOAYsiSIuSTRkxhl%2BQpWSQHj&X-Amz-Signature=450c9f38829aabf39d11d198601013e7094928f860162fdaf0ced1ff0ab6590a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZJHHGG6%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgPN2AArfxLyIlzM%2BU7zmK67aTF7%2FSaQL6Bp1xP54pAIhANeaaJcHHckSjnCOuwSTlUgGL2ixaNrV%2BMM0ow%2FWDbQ5Kv8DCFEQABoMNjM3NDIzMTgzODA1IgxnhG9NnXENAKaH7Pcq3AOiNMNF8wSy1OmYPldzUNbfaQcvKZmYSQpKIJ7xPecH7Uan6KHtfi1pgtM94nImglyNNb%2B5E2AC1cKpgL7Zbdq9%2BT61VVEGbEoQxC7oLAf4BM%2F2IwEWbPKjQkPugaX8B9UWkYrwNISkp3NG%2BXhAwzphntmPIblGm5fMitlm50rIXR0FJMI0lwcXNH79uksy1oNwhFIJJ0i4dYc8i4tcZ2Ejf82a2i06ABCG%2Fq3HPQQypXfnYaTnr41tqFhZdWqX0Xsn3ntieGU563z%2Bm7art2s0scvK47fZ9FOcv%2F1HrSc19DE2io1rP9HpaeSsBSXLBvJieaGzQ%2FEsrahjBQnIKJ0v2m%2Fb6BuAcm2hF5g7zOhUlpOOma%2Fk7ODPRSDQ7e%2FzbZf%2FBWxXUEqkRMayVXvfRt2Dl9M7Qn9EyQ7c7dp8X2RivDwzrQaE4VaPUD%2FTkeWys3dqhGK3H8HZ2N2ASFBv0M2xaWbUCKJR76gWlWVEEIWzrWEN0uCbJ9RJSClihLzxm1c5iHfvbo%2FwSzXevwqIm49cJiQ4ZW%2FNk9EgkjqHlBnPeL91hvwdNF3HCc8UC3vqYzkhFdqaGWd1y%2BlXMBSSyAAxSDUlI7ZQZdpGG0tGI23bhTOLz0eNA73vfP2c9zCE7eK%2BBjqkAfblvuikO0X4RMlFCOANweJmiSwO7%2FN1jB%2F8zzMVxNh%2F%2FsEBCmoFUh%2Fl9BKCz1CAYam2edYtDh07OAQz9SxYxW59rF%2Fotze8bayVEL1UvYt3Hg6NFdyAZm65%2BTDXtcr9XICCi45X8lR8sPyOXDfHBxGiuEC7R%2F8MmbHdjYCSzZJEv5GJGqgwPhFNwqlyuMper1WwGOAYsiSIuSTRkxhl%2BQpWSQHj&X-Amz-Signature=6c999a7d29913d8271e12a7cee4e7402949257f45b304e3ebc6caf3acaa582c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
