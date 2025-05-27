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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22X5CJT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCai4cO92u%2BZxC%2Bf7LiO9fSfZ0SRr8SECxcugeQCl15lQIgAVK3u1l9HgbTXLxYbRQFYHnkdLBmNVCECRY%2FqWMr60cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH3LF2sGMb2rF9lWuCrcA2GGdWzBxRx5nkGQS62gsMY2qUmVinGkMA8TxAgg6Z5zbOmFKsbxhmgNMLstjJNDUL9ug5HLQF14rATXbxycfU6bow2uQPOEaHMIsy6BCRQEKjiQvLLUjmK6yuyXt7bJDrrWNqw3G7rooSgmgnoAz3uHIJVPb%2BaW9J3O%2B3c1%2F44gvnh%2BE11lfuoZh%2FHPa5rknXIvukXDMF4sjdk9u88yczkGMtN1cWqgZUvtG2zMQG1xnYFBFc0kPDs4YX9%2B8sASG2BItTUd0GeOynlO6ajKEOYUVZ2ziGo61%2Bcqe3ZRcNzih%2BN0omcz6VrxxYZjd5PXWqLl17yXvdQWUwLQfl8Hlwlr%2BwSTVHEUCJ9%2F%2BEb1Z2wQlUV%2BUfJjsDTJeh0rfRUgVjkhXMSa2OwsheGEJH%2Bq%2FU5Kx5wTQHaK8lQJ05tE%2B01gt8jg9YOyH0e6v1ciMweLPzYRRaq4z%2B4UWYKPcd19VReYQudIzJWg00AS2ImutSn%2BzoiUponycS1y6OqSN972eLpwKc10AvNGGulXXnYHMYXyVqYv4RoGtHjKKVBUTPWkLl2NmNMOvlCjFlPyqIvssUec%2Fg8IOohnusBIiGwyDHo1m9SvUE%2FyeRdZeiY5q0BnrURi%2FK22cWSr5ETyMIH81sEGOqUB5i7aLwvEnhayQ6%2B1bQoYxnYwGu2eCRFd4lFGFEtOMQ7zLAFsZroWDHQGsmyo4qLqzUtFT1SSuRtDNlqdkCSkFfGsH404QW9n1fWPjkzn%2BI2drTR5htrOtMsMp4fJO21UVvLhdxuq%2F1vsw%2F4YPWzhgAhVkxOXeelfkruSguz5tdqgntlTyDgt%2B3Rkkoi4mkP9avMg%2FQbhTVYHH8wPxXHEJDeIlPOB&X-Amz-Signature=537cf29b6aae3620d8987a774bffc9dfd46529df54a9c4bcb962bbe9787ab3fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22X5CJT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCai4cO92u%2BZxC%2Bf7LiO9fSfZ0SRr8SECxcugeQCl15lQIgAVK3u1l9HgbTXLxYbRQFYHnkdLBmNVCECRY%2FqWMr60cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH3LF2sGMb2rF9lWuCrcA2GGdWzBxRx5nkGQS62gsMY2qUmVinGkMA8TxAgg6Z5zbOmFKsbxhmgNMLstjJNDUL9ug5HLQF14rATXbxycfU6bow2uQPOEaHMIsy6BCRQEKjiQvLLUjmK6yuyXt7bJDrrWNqw3G7rooSgmgnoAz3uHIJVPb%2BaW9J3O%2B3c1%2F44gvnh%2BE11lfuoZh%2FHPa5rknXIvukXDMF4sjdk9u88yczkGMtN1cWqgZUvtG2zMQG1xnYFBFc0kPDs4YX9%2B8sASG2BItTUd0GeOynlO6ajKEOYUVZ2ziGo61%2Bcqe3ZRcNzih%2BN0omcz6VrxxYZjd5PXWqLl17yXvdQWUwLQfl8Hlwlr%2BwSTVHEUCJ9%2F%2BEb1Z2wQlUV%2BUfJjsDTJeh0rfRUgVjkhXMSa2OwsheGEJH%2Bq%2FU5Kx5wTQHaK8lQJ05tE%2B01gt8jg9YOyH0e6v1ciMweLPzYRRaq4z%2B4UWYKPcd19VReYQudIzJWg00AS2ImutSn%2BzoiUponycS1y6OqSN972eLpwKc10AvNGGulXXnYHMYXyVqYv4RoGtHjKKVBUTPWkLl2NmNMOvlCjFlPyqIvssUec%2Fg8IOohnusBIiGwyDHo1m9SvUE%2FyeRdZeiY5q0BnrURi%2FK22cWSr5ETyMIH81sEGOqUB5i7aLwvEnhayQ6%2B1bQoYxnYwGu2eCRFd4lFGFEtOMQ7zLAFsZroWDHQGsmyo4qLqzUtFT1SSuRtDNlqdkCSkFfGsH404QW9n1fWPjkzn%2BI2drTR5htrOtMsMp4fJO21UVvLhdxuq%2F1vsw%2F4YPWzhgAhVkxOXeelfkruSguz5tdqgntlTyDgt%2B3Rkkoi4mkP9avMg%2FQbhTVYHH8wPxXHEJDeIlPOB&X-Amz-Signature=ae5f28567fc63b50e9ed94d783558b250cb3ac827650c80dc3db6ec30a6c6d71&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22X5CJT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCai4cO92u%2BZxC%2Bf7LiO9fSfZ0SRr8SECxcugeQCl15lQIgAVK3u1l9HgbTXLxYbRQFYHnkdLBmNVCECRY%2FqWMr60cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH3LF2sGMb2rF9lWuCrcA2GGdWzBxRx5nkGQS62gsMY2qUmVinGkMA8TxAgg6Z5zbOmFKsbxhmgNMLstjJNDUL9ug5HLQF14rATXbxycfU6bow2uQPOEaHMIsy6BCRQEKjiQvLLUjmK6yuyXt7bJDrrWNqw3G7rooSgmgnoAz3uHIJVPb%2BaW9J3O%2B3c1%2F44gvnh%2BE11lfuoZh%2FHPa5rknXIvukXDMF4sjdk9u88yczkGMtN1cWqgZUvtG2zMQG1xnYFBFc0kPDs4YX9%2B8sASG2BItTUd0GeOynlO6ajKEOYUVZ2ziGo61%2Bcqe3ZRcNzih%2BN0omcz6VrxxYZjd5PXWqLl17yXvdQWUwLQfl8Hlwlr%2BwSTVHEUCJ9%2F%2BEb1Z2wQlUV%2BUfJjsDTJeh0rfRUgVjkhXMSa2OwsheGEJH%2Bq%2FU5Kx5wTQHaK8lQJ05tE%2B01gt8jg9YOyH0e6v1ciMweLPzYRRaq4z%2B4UWYKPcd19VReYQudIzJWg00AS2ImutSn%2BzoiUponycS1y6OqSN972eLpwKc10AvNGGulXXnYHMYXyVqYv4RoGtHjKKVBUTPWkLl2NmNMOvlCjFlPyqIvssUec%2Fg8IOohnusBIiGwyDHo1m9SvUE%2FyeRdZeiY5q0BnrURi%2FK22cWSr5ETyMIH81sEGOqUB5i7aLwvEnhayQ6%2B1bQoYxnYwGu2eCRFd4lFGFEtOMQ7zLAFsZroWDHQGsmyo4qLqzUtFT1SSuRtDNlqdkCSkFfGsH404QW9n1fWPjkzn%2BI2drTR5htrOtMsMp4fJO21UVvLhdxuq%2F1vsw%2F4YPWzhgAhVkxOXeelfkruSguz5tdqgntlTyDgt%2B3Rkkoi4mkP9avMg%2FQbhTVYHH8wPxXHEJDeIlPOB&X-Amz-Signature=53016a258783d9563f90cde2f961b4a111ac087e4f5bcc157872330da767d96a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22X5CJT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCai4cO92u%2BZxC%2Bf7LiO9fSfZ0SRr8SECxcugeQCl15lQIgAVK3u1l9HgbTXLxYbRQFYHnkdLBmNVCECRY%2FqWMr60cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH3LF2sGMb2rF9lWuCrcA2GGdWzBxRx5nkGQS62gsMY2qUmVinGkMA8TxAgg6Z5zbOmFKsbxhmgNMLstjJNDUL9ug5HLQF14rATXbxycfU6bow2uQPOEaHMIsy6BCRQEKjiQvLLUjmK6yuyXt7bJDrrWNqw3G7rooSgmgnoAz3uHIJVPb%2BaW9J3O%2B3c1%2F44gvnh%2BE11lfuoZh%2FHPa5rknXIvukXDMF4sjdk9u88yczkGMtN1cWqgZUvtG2zMQG1xnYFBFc0kPDs4YX9%2B8sASG2BItTUd0GeOynlO6ajKEOYUVZ2ziGo61%2Bcqe3ZRcNzih%2BN0omcz6VrxxYZjd5PXWqLl17yXvdQWUwLQfl8Hlwlr%2BwSTVHEUCJ9%2F%2BEb1Z2wQlUV%2BUfJjsDTJeh0rfRUgVjkhXMSa2OwsheGEJH%2Bq%2FU5Kx5wTQHaK8lQJ05tE%2B01gt8jg9YOyH0e6v1ciMweLPzYRRaq4z%2B4UWYKPcd19VReYQudIzJWg00AS2ImutSn%2BzoiUponycS1y6OqSN972eLpwKc10AvNGGulXXnYHMYXyVqYv4RoGtHjKKVBUTPWkLl2NmNMOvlCjFlPyqIvssUec%2Fg8IOohnusBIiGwyDHo1m9SvUE%2FyeRdZeiY5q0BnrURi%2FK22cWSr5ETyMIH81sEGOqUB5i7aLwvEnhayQ6%2B1bQoYxnYwGu2eCRFd4lFGFEtOMQ7zLAFsZroWDHQGsmyo4qLqzUtFT1SSuRtDNlqdkCSkFfGsH404QW9n1fWPjkzn%2BI2drTR5htrOtMsMp4fJO21UVvLhdxuq%2F1vsw%2F4YPWzhgAhVkxOXeelfkruSguz5tdqgntlTyDgt%2B3Rkkoi4mkP9avMg%2FQbhTVYHH8wPxXHEJDeIlPOB&X-Amz-Signature=11bb4770a762f300d41c3201e07982f857fc227224ca50aafe219379f53681b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22X5CJT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCai4cO92u%2BZxC%2Bf7LiO9fSfZ0SRr8SECxcugeQCl15lQIgAVK3u1l9HgbTXLxYbRQFYHnkdLBmNVCECRY%2FqWMr60cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH3LF2sGMb2rF9lWuCrcA2GGdWzBxRx5nkGQS62gsMY2qUmVinGkMA8TxAgg6Z5zbOmFKsbxhmgNMLstjJNDUL9ug5HLQF14rATXbxycfU6bow2uQPOEaHMIsy6BCRQEKjiQvLLUjmK6yuyXt7bJDrrWNqw3G7rooSgmgnoAz3uHIJVPb%2BaW9J3O%2B3c1%2F44gvnh%2BE11lfuoZh%2FHPa5rknXIvukXDMF4sjdk9u88yczkGMtN1cWqgZUvtG2zMQG1xnYFBFc0kPDs4YX9%2B8sASG2BItTUd0GeOynlO6ajKEOYUVZ2ziGo61%2Bcqe3ZRcNzih%2BN0omcz6VrxxYZjd5PXWqLl17yXvdQWUwLQfl8Hlwlr%2BwSTVHEUCJ9%2F%2BEb1Z2wQlUV%2BUfJjsDTJeh0rfRUgVjkhXMSa2OwsheGEJH%2Bq%2FU5Kx5wTQHaK8lQJ05tE%2B01gt8jg9YOyH0e6v1ciMweLPzYRRaq4z%2B4UWYKPcd19VReYQudIzJWg00AS2ImutSn%2BzoiUponycS1y6OqSN972eLpwKc10AvNGGulXXnYHMYXyVqYv4RoGtHjKKVBUTPWkLl2NmNMOvlCjFlPyqIvssUec%2Fg8IOohnusBIiGwyDHo1m9SvUE%2FyeRdZeiY5q0BnrURi%2FK22cWSr5ETyMIH81sEGOqUB5i7aLwvEnhayQ6%2B1bQoYxnYwGu2eCRFd4lFGFEtOMQ7zLAFsZroWDHQGsmyo4qLqzUtFT1SSuRtDNlqdkCSkFfGsH404QW9n1fWPjkzn%2BI2drTR5htrOtMsMp4fJO21UVvLhdxuq%2F1vsw%2F4YPWzhgAhVkxOXeelfkruSguz5tdqgntlTyDgt%2B3Rkkoi4mkP9avMg%2FQbhTVYHH8wPxXHEJDeIlPOB&X-Amz-Signature=62ba11274cb31569cd3260f35719266e0be0c4d7cd819082cdb62d046c2356d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22X5CJT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCai4cO92u%2BZxC%2Bf7LiO9fSfZ0SRr8SECxcugeQCl15lQIgAVK3u1l9HgbTXLxYbRQFYHnkdLBmNVCECRY%2FqWMr60cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH3LF2sGMb2rF9lWuCrcA2GGdWzBxRx5nkGQS62gsMY2qUmVinGkMA8TxAgg6Z5zbOmFKsbxhmgNMLstjJNDUL9ug5HLQF14rATXbxycfU6bow2uQPOEaHMIsy6BCRQEKjiQvLLUjmK6yuyXt7bJDrrWNqw3G7rooSgmgnoAz3uHIJVPb%2BaW9J3O%2B3c1%2F44gvnh%2BE11lfuoZh%2FHPa5rknXIvukXDMF4sjdk9u88yczkGMtN1cWqgZUvtG2zMQG1xnYFBFc0kPDs4YX9%2B8sASG2BItTUd0GeOynlO6ajKEOYUVZ2ziGo61%2Bcqe3ZRcNzih%2BN0omcz6VrxxYZjd5PXWqLl17yXvdQWUwLQfl8Hlwlr%2BwSTVHEUCJ9%2F%2BEb1Z2wQlUV%2BUfJjsDTJeh0rfRUgVjkhXMSa2OwsheGEJH%2Bq%2FU5Kx5wTQHaK8lQJ05tE%2B01gt8jg9YOyH0e6v1ciMweLPzYRRaq4z%2B4UWYKPcd19VReYQudIzJWg00AS2ImutSn%2BzoiUponycS1y6OqSN972eLpwKc10AvNGGulXXnYHMYXyVqYv4RoGtHjKKVBUTPWkLl2NmNMOvlCjFlPyqIvssUec%2Fg8IOohnusBIiGwyDHo1m9SvUE%2FyeRdZeiY5q0BnrURi%2FK22cWSr5ETyMIH81sEGOqUB5i7aLwvEnhayQ6%2B1bQoYxnYwGu2eCRFd4lFGFEtOMQ7zLAFsZroWDHQGsmyo4qLqzUtFT1SSuRtDNlqdkCSkFfGsH404QW9n1fWPjkzn%2BI2drTR5htrOtMsMp4fJO21UVvLhdxuq%2F1vsw%2F4YPWzhgAhVkxOXeelfkruSguz5tdqgntlTyDgt%2B3Rkkoi4mkP9avMg%2FQbhTVYHH8wPxXHEJDeIlPOB&X-Amz-Signature=713cc2f9bd899af5565a3bc5023b1043cba11fe521f5115b3f93edf05ea62dda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22X5CJT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCai4cO92u%2BZxC%2Bf7LiO9fSfZ0SRr8SECxcugeQCl15lQIgAVK3u1l9HgbTXLxYbRQFYHnkdLBmNVCECRY%2FqWMr60cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH3LF2sGMb2rF9lWuCrcA2GGdWzBxRx5nkGQS62gsMY2qUmVinGkMA8TxAgg6Z5zbOmFKsbxhmgNMLstjJNDUL9ug5HLQF14rATXbxycfU6bow2uQPOEaHMIsy6BCRQEKjiQvLLUjmK6yuyXt7bJDrrWNqw3G7rooSgmgnoAz3uHIJVPb%2BaW9J3O%2B3c1%2F44gvnh%2BE11lfuoZh%2FHPa5rknXIvukXDMF4sjdk9u88yczkGMtN1cWqgZUvtG2zMQG1xnYFBFc0kPDs4YX9%2B8sASG2BItTUd0GeOynlO6ajKEOYUVZ2ziGo61%2Bcqe3ZRcNzih%2BN0omcz6VrxxYZjd5PXWqLl17yXvdQWUwLQfl8Hlwlr%2BwSTVHEUCJ9%2F%2BEb1Z2wQlUV%2BUfJjsDTJeh0rfRUgVjkhXMSa2OwsheGEJH%2Bq%2FU5Kx5wTQHaK8lQJ05tE%2B01gt8jg9YOyH0e6v1ciMweLPzYRRaq4z%2B4UWYKPcd19VReYQudIzJWg00AS2ImutSn%2BzoiUponycS1y6OqSN972eLpwKc10AvNGGulXXnYHMYXyVqYv4RoGtHjKKVBUTPWkLl2NmNMOvlCjFlPyqIvssUec%2Fg8IOohnusBIiGwyDHo1m9SvUE%2FyeRdZeiY5q0BnrURi%2FK22cWSr5ETyMIH81sEGOqUB5i7aLwvEnhayQ6%2B1bQoYxnYwGu2eCRFd4lFGFEtOMQ7zLAFsZroWDHQGsmyo4qLqzUtFT1SSuRtDNlqdkCSkFfGsH404QW9n1fWPjkzn%2BI2drTR5htrOtMsMp4fJO21UVvLhdxuq%2F1vsw%2F4YPWzhgAhVkxOXeelfkruSguz5tdqgntlTyDgt%2B3Rkkoi4mkP9avMg%2FQbhTVYHH8wPxXHEJDeIlPOB&X-Amz-Signature=b0d7cdad0a2e1020c64cfc6ab7cd585b8213bb5c2fdac5d16d7493dddaac7233&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R22X5CJT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCai4cO92u%2BZxC%2Bf7LiO9fSfZ0SRr8SECxcugeQCl15lQIgAVK3u1l9HgbTXLxYbRQFYHnkdLBmNVCECRY%2FqWMr60cq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDH3LF2sGMb2rF9lWuCrcA2GGdWzBxRx5nkGQS62gsMY2qUmVinGkMA8TxAgg6Z5zbOmFKsbxhmgNMLstjJNDUL9ug5HLQF14rATXbxycfU6bow2uQPOEaHMIsy6BCRQEKjiQvLLUjmK6yuyXt7bJDrrWNqw3G7rooSgmgnoAz3uHIJVPb%2BaW9J3O%2B3c1%2F44gvnh%2BE11lfuoZh%2FHPa5rknXIvukXDMF4sjdk9u88yczkGMtN1cWqgZUvtG2zMQG1xnYFBFc0kPDs4YX9%2B8sASG2BItTUd0GeOynlO6ajKEOYUVZ2ziGo61%2Bcqe3ZRcNzih%2BN0omcz6VrxxYZjd5PXWqLl17yXvdQWUwLQfl8Hlwlr%2BwSTVHEUCJ9%2F%2BEb1Z2wQlUV%2BUfJjsDTJeh0rfRUgVjkhXMSa2OwsheGEJH%2Bq%2FU5Kx5wTQHaK8lQJ05tE%2B01gt8jg9YOyH0e6v1ciMweLPzYRRaq4z%2B4UWYKPcd19VReYQudIzJWg00AS2ImutSn%2BzoiUponycS1y6OqSN972eLpwKc10AvNGGulXXnYHMYXyVqYv4RoGtHjKKVBUTPWkLl2NmNMOvlCjFlPyqIvssUec%2Fg8IOohnusBIiGwyDHo1m9SvUE%2FyeRdZeiY5q0BnrURi%2FK22cWSr5ETyMIH81sEGOqUB5i7aLwvEnhayQ6%2B1bQoYxnYwGu2eCRFd4lFGFEtOMQ7zLAFsZroWDHQGsmyo4qLqzUtFT1SSuRtDNlqdkCSkFfGsH404QW9n1fWPjkzn%2BI2drTR5htrOtMsMp4fJO21UVvLhdxuq%2F1vsw%2F4YPWzhgAhVkxOXeelfkruSguz5tdqgntlTyDgt%2B3Rkkoi4mkP9avMg%2FQbhTVYHH8wPxXHEJDeIlPOB&X-Amz-Signature=36718fda3bbf892fbda92a9ffa5bc67b6dabfea917cb21746dd4717ecbdd14fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
