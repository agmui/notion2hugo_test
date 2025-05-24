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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQI63QK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCffM2dpXT9pIr8GhB2Ps7bz3WDgsaPxvXeoZsWC3sbAQIhAI0PC5%2Fs3ZJ6GUwUAy0rvRCtaMDuU4BXv8EMfHfvvUq6Kv8DCBcQABoMNjM3NDIzMTgzODA1Igwhp6jd2jL1zrdsvB0q3AMAr0%2FFoxBYGy0mkj7sgSyeemLQlI7Qof3lHURnjwpU7DgKEbluFINl4trryGv6NcQmhZOXcIjtbk30owvfJSO8k%2BKk%2FOleZzRgyjvKP2jP6fRXPOxOvmF38xnIhO76eSz1ficQRxU9B%2BdUO%2BOUem9ZRObX3bYJ%2BoZUmFmfvBNRXj9spUvsD0OR6G3u4yGyDDbOzLKRP8voeC68AXqN9cerMekFhR8%2FAzj7SldazYOJFUdV1ZB0v%2BXcxb5YA381%2F%2BXYlXflbL4COjoUCT%2F8Tk67EgFJVTbWRPJWj1kZUW6e4wpu3N3ryTBscapCTkJ0xtDCRo2vgBQDsM5mxXvxWTxQcix5pXWamMFplPIcyYPMW5HncTrJie7%2FLoze88zus%2BFHETH7TcMW9jCMlLuig1pL%2Bnz9JtJ005%2BM8AdUZlWKENXzR5A4OU%2FOlcaCt3D6HZqM20aR2fAy8AkTDgrr2gVf8h7a7l%2BaAT30TvA4Bv0M2kikuXyYIwYFExhIGf%2Fz5wRc%2F6uSgk6dythCM1h5RdWvk5TGwuL4xSrA6GPzErUP%2Fpj5TYpmwHy58h2PdBZj%2BW67cFVY2Vt991n6VEDVuwsL%2FdIkvXFTi6NlDcSV7jmObn8v%2FZTF3QG0LwU7wjCBpMfBBjqkAZihlL%2FyMpatWxAzPAbb5VyKVbvmcBWBZmzhPVKd9fDA95ejEHfnVCh4hgCdWFIN4yzPvBJPVT8MPpdWQKvQOdJ%2FvsyTQ8QKve85SZ7eIffFGnNBNObKKhgW7HBtW9ki4ypnBiUwn82d1EdtXlfiRmfySIcBK5i9fsg7pXU5yVTy1wBBqRp267sDUSt5pfIXrnzl4NyyItqRwxIcWDXkaRPg5DF4&X-Amz-Signature=9376783204e9bab9c178073d5084ce2b24b15ad3b3560c72cef7804529e94536&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQI63QK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCffM2dpXT9pIr8GhB2Ps7bz3WDgsaPxvXeoZsWC3sbAQIhAI0PC5%2Fs3ZJ6GUwUAy0rvRCtaMDuU4BXv8EMfHfvvUq6Kv8DCBcQABoMNjM3NDIzMTgzODA1Igwhp6jd2jL1zrdsvB0q3AMAr0%2FFoxBYGy0mkj7sgSyeemLQlI7Qof3lHURnjwpU7DgKEbluFINl4trryGv6NcQmhZOXcIjtbk30owvfJSO8k%2BKk%2FOleZzRgyjvKP2jP6fRXPOxOvmF38xnIhO76eSz1ficQRxU9B%2BdUO%2BOUem9ZRObX3bYJ%2BoZUmFmfvBNRXj9spUvsD0OR6G3u4yGyDDbOzLKRP8voeC68AXqN9cerMekFhR8%2FAzj7SldazYOJFUdV1ZB0v%2BXcxb5YA381%2F%2BXYlXflbL4COjoUCT%2F8Tk67EgFJVTbWRPJWj1kZUW6e4wpu3N3ryTBscapCTkJ0xtDCRo2vgBQDsM5mxXvxWTxQcix5pXWamMFplPIcyYPMW5HncTrJie7%2FLoze88zus%2BFHETH7TcMW9jCMlLuig1pL%2Bnz9JtJ005%2BM8AdUZlWKENXzR5A4OU%2FOlcaCt3D6HZqM20aR2fAy8AkTDgrr2gVf8h7a7l%2BaAT30TvA4Bv0M2kikuXyYIwYFExhIGf%2Fz5wRc%2F6uSgk6dythCM1h5RdWvk5TGwuL4xSrA6GPzErUP%2Fpj5TYpmwHy58h2PdBZj%2BW67cFVY2Vt991n6VEDVuwsL%2FdIkvXFTi6NlDcSV7jmObn8v%2FZTF3QG0LwU7wjCBpMfBBjqkAZihlL%2FyMpatWxAzPAbb5VyKVbvmcBWBZmzhPVKd9fDA95ejEHfnVCh4hgCdWFIN4yzPvBJPVT8MPpdWQKvQOdJ%2FvsyTQ8QKve85SZ7eIffFGnNBNObKKhgW7HBtW9ki4ypnBiUwn82d1EdtXlfiRmfySIcBK5i9fsg7pXU5yVTy1wBBqRp267sDUSt5pfIXrnzl4NyyItqRwxIcWDXkaRPg5DF4&X-Amz-Signature=97746f0ce0a2a7647537b7ecf68238a002b9a965713d45fa08aecf8eece452bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQI63QK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCffM2dpXT9pIr8GhB2Ps7bz3WDgsaPxvXeoZsWC3sbAQIhAI0PC5%2Fs3ZJ6GUwUAy0rvRCtaMDuU4BXv8EMfHfvvUq6Kv8DCBcQABoMNjM3NDIzMTgzODA1Igwhp6jd2jL1zrdsvB0q3AMAr0%2FFoxBYGy0mkj7sgSyeemLQlI7Qof3lHURnjwpU7DgKEbluFINl4trryGv6NcQmhZOXcIjtbk30owvfJSO8k%2BKk%2FOleZzRgyjvKP2jP6fRXPOxOvmF38xnIhO76eSz1ficQRxU9B%2BdUO%2BOUem9ZRObX3bYJ%2BoZUmFmfvBNRXj9spUvsD0OR6G3u4yGyDDbOzLKRP8voeC68AXqN9cerMekFhR8%2FAzj7SldazYOJFUdV1ZB0v%2BXcxb5YA381%2F%2BXYlXflbL4COjoUCT%2F8Tk67EgFJVTbWRPJWj1kZUW6e4wpu3N3ryTBscapCTkJ0xtDCRo2vgBQDsM5mxXvxWTxQcix5pXWamMFplPIcyYPMW5HncTrJie7%2FLoze88zus%2BFHETH7TcMW9jCMlLuig1pL%2Bnz9JtJ005%2BM8AdUZlWKENXzR5A4OU%2FOlcaCt3D6HZqM20aR2fAy8AkTDgrr2gVf8h7a7l%2BaAT30TvA4Bv0M2kikuXyYIwYFExhIGf%2Fz5wRc%2F6uSgk6dythCM1h5RdWvk5TGwuL4xSrA6GPzErUP%2Fpj5TYpmwHy58h2PdBZj%2BW67cFVY2Vt991n6VEDVuwsL%2FdIkvXFTi6NlDcSV7jmObn8v%2FZTF3QG0LwU7wjCBpMfBBjqkAZihlL%2FyMpatWxAzPAbb5VyKVbvmcBWBZmzhPVKd9fDA95ejEHfnVCh4hgCdWFIN4yzPvBJPVT8MPpdWQKvQOdJ%2FvsyTQ8QKve85SZ7eIffFGnNBNObKKhgW7HBtW9ki4ypnBiUwn82d1EdtXlfiRmfySIcBK5i9fsg7pXU5yVTy1wBBqRp267sDUSt5pfIXrnzl4NyyItqRwxIcWDXkaRPg5DF4&X-Amz-Signature=5b545147773d66544d299843502fec56496b5eb7b170501d310fd316b7167351&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQI63QK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCffM2dpXT9pIr8GhB2Ps7bz3WDgsaPxvXeoZsWC3sbAQIhAI0PC5%2Fs3ZJ6GUwUAy0rvRCtaMDuU4BXv8EMfHfvvUq6Kv8DCBcQABoMNjM3NDIzMTgzODA1Igwhp6jd2jL1zrdsvB0q3AMAr0%2FFoxBYGy0mkj7sgSyeemLQlI7Qof3lHURnjwpU7DgKEbluFINl4trryGv6NcQmhZOXcIjtbk30owvfJSO8k%2BKk%2FOleZzRgyjvKP2jP6fRXPOxOvmF38xnIhO76eSz1ficQRxU9B%2BdUO%2BOUem9ZRObX3bYJ%2BoZUmFmfvBNRXj9spUvsD0OR6G3u4yGyDDbOzLKRP8voeC68AXqN9cerMekFhR8%2FAzj7SldazYOJFUdV1ZB0v%2BXcxb5YA381%2F%2BXYlXflbL4COjoUCT%2F8Tk67EgFJVTbWRPJWj1kZUW6e4wpu3N3ryTBscapCTkJ0xtDCRo2vgBQDsM5mxXvxWTxQcix5pXWamMFplPIcyYPMW5HncTrJie7%2FLoze88zus%2BFHETH7TcMW9jCMlLuig1pL%2Bnz9JtJ005%2BM8AdUZlWKENXzR5A4OU%2FOlcaCt3D6HZqM20aR2fAy8AkTDgrr2gVf8h7a7l%2BaAT30TvA4Bv0M2kikuXyYIwYFExhIGf%2Fz5wRc%2F6uSgk6dythCM1h5RdWvk5TGwuL4xSrA6GPzErUP%2Fpj5TYpmwHy58h2PdBZj%2BW67cFVY2Vt991n6VEDVuwsL%2FdIkvXFTi6NlDcSV7jmObn8v%2FZTF3QG0LwU7wjCBpMfBBjqkAZihlL%2FyMpatWxAzPAbb5VyKVbvmcBWBZmzhPVKd9fDA95ejEHfnVCh4hgCdWFIN4yzPvBJPVT8MPpdWQKvQOdJ%2FvsyTQ8QKve85SZ7eIffFGnNBNObKKhgW7HBtW9ki4ypnBiUwn82d1EdtXlfiRmfySIcBK5i9fsg7pXU5yVTy1wBBqRp267sDUSt5pfIXrnzl4NyyItqRwxIcWDXkaRPg5DF4&X-Amz-Signature=83c0fd30f2bbf503c9c3114d94adaf52a863dc387db3593ac873a3d11643d1f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQI63QK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCffM2dpXT9pIr8GhB2Ps7bz3WDgsaPxvXeoZsWC3sbAQIhAI0PC5%2Fs3ZJ6GUwUAy0rvRCtaMDuU4BXv8EMfHfvvUq6Kv8DCBcQABoMNjM3NDIzMTgzODA1Igwhp6jd2jL1zrdsvB0q3AMAr0%2FFoxBYGy0mkj7sgSyeemLQlI7Qof3lHURnjwpU7DgKEbluFINl4trryGv6NcQmhZOXcIjtbk30owvfJSO8k%2BKk%2FOleZzRgyjvKP2jP6fRXPOxOvmF38xnIhO76eSz1ficQRxU9B%2BdUO%2BOUem9ZRObX3bYJ%2BoZUmFmfvBNRXj9spUvsD0OR6G3u4yGyDDbOzLKRP8voeC68AXqN9cerMekFhR8%2FAzj7SldazYOJFUdV1ZB0v%2BXcxb5YA381%2F%2BXYlXflbL4COjoUCT%2F8Tk67EgFJVTbWRPJWj1kZUW6e4wpu3N3ryTBscapCTkJ0xtDCRo2vgBQDsM5mxXvxWTxQcix5pXWamMFplPIcyYPMW5HncTrJie7%2FLoze88zus%2BFHETH7TcMW9jCMlLuig1pL%2Bnz9JtJ005%2BM8AdUZlWKENXzR5A4OU%2FOlcaCt3D6HZqM20aR2fAy8AkTDgrr2gVf8h7a7l%2BaAT30TvA4Bv0M2kikuXyYIwYFExhIGf%2Fz5wRc%2F6uSgk6dythCM1h5RdWvk5TGwuL4xSrA6GPzErUP%2Fpj5TYpmwHy58h2PdBZj%2BW67cFVY2Vt991n6VEDVuwsL%2FdIkvXFTi6NlDcSV7jmObn8v%2FZTF3QG0LwU7wjCBpMfBBjqkAZihlL%2FyMpatWxAzPAbb5VyKVbvmcBWBZmzhPVKd9fDA95ejEHfnVCh4hgCdWFIN4yzPvBJPVT8MPpdWQKvQOdJ%2FvsyTQ8QKve85SZ7eIffFGnNBNObKKhgW7HBtW9ki4ypnBiUwn82d1EdtXlfiRmfySIcBK5i9fsg7pXU5yVTy1wBBqRp267sDUSt5pfIXrnzl4NyyItqRwxIcWDXkaRPg5DF4&X-Amz-Signature=29211e6669c57e309894ea481b5d624d3985830159b58ab60ab1e14c5f3e25e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQI63QK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCffM2dpXT9pIr8GhB2Ps7bz3WDgsaPxvXeoZsWC3sbAQIhAI0PC5%2Fs3ZJ6GUwUAy0rvRCtaMDuU4BXv8EMfHfvvUq6Kv8DCBcQABoMNjM3NDIzMTgzODA1Igwhp6jd2jL1zrdsvB0q3AMAr0%2FFoxBYGy0mkj7sgSyeemLQlI7Qof3lHURnjwpU7DgKEbluFINl4trryGv6NcQmhZOXcIjtbk30owvfJSO8k%2BKk%2FOleZzRgyjvKP2jP6fRXPOxOvmF38xnIhO76eSz1ficQRxU9B%2BdUO%2BOUem9ZRObX3bYJ%2BoZUmFmfvBNRXj9spUvsD0OR6G3u4yGyDDbOzLKRP8voeC68AXqN9cerMekFhR8%2FAzj7SldazYOJFUdV1ZB0v%2BXcxb5YA381%2F%2BXYlXflbL4COjoUCT%2F8Tk67EgFJVTbWRPJWj1kZUW6e4wpu3N3ryTBscapCTkJ0xtDCRo2vgBQDsM5mxXvxWTxQcix5pXWamMFplPIcyYPMW5HncTrJie7%2FLoze88zus%2BFHETH7TcMW9jCMlLuig1pL%2Bnz9JtJ005%2BM8AdUZlWKENXzR5A4OU%2FOlcaCt3D6HZqM20aR2fAy8AkTDgrr2gVf8h7a7l%2BaAT30TvA4Bv0M2kikuXyYIwYFExhIGf%2Fz5wRc%2F6uSgk6dythCM1h5RdWvk5TGwuL4xSrA6GPzErUP%2Fpj5TYpmwHy58h2PdBZj%2BW67cFVY2Vt991n6VEDVuwsL%2FdIkvXFTi6NlDcSV7jmObn8v%2FZTF3QG0LwU7wjCBpMfBBjqkAZihlL%2FyMpatWxAzPAbb5VyKVbvmcBWBZmzhPVKd9fDA95ejEHfnVCh4hgCdWFIN4yzPvBJPVT8MPpdWQKvQOdJ%2FvsyTQ8QKve85SZ7eIffFGnNBNObKKhgW7HBtW9ki4ypnBiUwn82d1EdtXlfiRmfySIcBK5i9fsg7pXU5yVTy1wBBqRp267sDUSt5pfIXrnzl4NyyItqRwxIcWDXkaRPg5DF4&X-Amz-Signature=1cadb22bd79d2f292090ec929f32b023578dcd6affe23502f37f13027457b12a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQI63QK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCffM2dpXT9pIr8GhB2Ps7bz3WDgsaPxvXeoZsWC3sbAQIhAI0PC5%2Fs3ZJ6GUwUAy0rvRCtaMDuU4BXv8EMfHfvvUq6Kv8DCBcQABoMNjM3NDIzMTgzODA1Igwhp6jd2jL1zrdsvB0q3AMAr0%2FFoxBYGy0mkj7sgSyeemLQlI7Qof3lHURnjwpU7DgKEbluFINl4trryGv6NcQmhZOXcIjtbk30owvfJSO8k%2BKk%2FOleZzRgyjvKP2jP6fRXPOxOvmF38xnIhO76eSz1ficQRxU9B%2BdUO%2BOUem9ZRObX3bYJ%2BoZUmFmfvBNRXj9spUvsD0OR6G3u4yGyDDbOzLKRP8voeC68AXqN9cerMekFhR8%2FAzj7SldazYOJFUdV1ZB0v%2BXcxb5YA381%2F%2BXYlXflbL4COjoUCT%2F8Tk67EgFJVTbWRPJWj1kZUW6e4wpu3N3ryTBscapCTkJ0xtDCRo2vgBQDsM5mxXvxWTxQcix5pXWamMFplPIcyYPMW5HncTrJie7%2FLoze88zus%2BFHETH7TcMW9jCMlLuig1pL%2Bnz9JtJ005%2BM8AdUZlWKENXzR5A4OU%2FOlcaCt3D6HZqM20aR2fAy8AkTDgrr2gVf8h7a7l%2BaAT30TvA4Bv0M2kikuXyYIwYFExhIGf%2Fz5wRc%2F6uSgk6dythCM1h5RdWvk5TGwuL4xSrA6GPzErUP%2Fpj5TYpmwHy58h2PdBZj%2BW67cFVY2Vt991n6VEDVuwsL%2FdIkvXFTi6NlDcSV7jmObn8v%2FZTF3QG0LwU7wjCBpMfBBjqkAZihlL%2FyMpatWxAzPAbb5VyKVbvmcBWBZmzhPVKd9fDA95ejEHfnVCh4hgCdWFIN4yzPvBJPVT8MPpdWQKvQOdJ%2FvsyTQ8QKve85SZ7eIffFGnNBNObKKhgW7HBtW9ki4ypnBiUwn82d1EdtXlfiRmfySIcBK5i9fsg7pXU5yVTy1wBBqRp267sDUSt5pfIXrnzl4NyyItqRwxIcWDXkaRPg5DF4&X-Amz-Signature=2f196d93b0a4e96afb859341d5d20a3a30154fbde65e4101b366d8884b486280&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQI63QK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQCffM2dpXT9pIr8GhB2Ps7bz3WDgsaPxvXeoZsWC3sbAQIhAI0PC5%2Fs3ZJ6GUwUAy0rvRCtaMDuU4BXv8EMfHfvvUq6Kv8DCBcQABoMNjM3NDIzMTgzODA1Igwhp6jd2jL1zrdsvB0q3AMAr0%2FFoxBYGy0mkj7sgSyeemLQlI7Qof3lHURnjwpU7DgKEbluFINl4trryGv6NcQmhZOXcIjtbk30owvfJSO8k%2BKk%2FOleZzRgyjvKP2jP6fRXPOxOvmF38xnIhO76eSz1ficQRxU9B%2BdUO%2BOUem9ZRObX3bYJ%2BoZUmFmfvBNRXj9spUvsD0OR6G3u4yGyDDbOzLKRP8voeC68AXqN9cerMekFhR8%2FAzj7SldazYOJFUdV1ZB0v%2BXcxb5YA381%2F%2BXYlXflbL4COjoUCT%2F8Tk67EgFJVTbWRPJWj1kZUW6e4wpu3N3ryTBscapCTkJ0xtDCRo2vgBQDsM5mxXvxWTxQcix5pXWamMFplPIcyYPMW5HncTrJie7%2FLoze88zus%2BFHETH7TcMW9jCMlLuig1pL%2Bnz9JtJ005%2BM8AdUZlWKENXzR5A4OU%2FOlcaCt3D6HZqM20aR2fAy8AkTDgrr2gVf8h7a7l%2BaAT30TvA4Bv0M2kikuXyYIwYFExhIGf%2Fz5wRc%2F6uSgk6dythCM1h5RdWvk5TGwuL4xSrA6GPzErUP%2Fpj5TYpmwHy58h2PdBZj%2BW67cFVY2Vt991n6VEDVuwsL%2FdIkvXFTi6NlDcSV7jmObn8v%2FZTF3QG0LwU7wjCBpMfBBjqkAZihlL%2FyMpatWxAzPAbb5VyKVbvmcBWBZmzhPVKd9fDA95ejEHfnVCh4hgCdWFIN4yzPvBJPVT8MPpdWQKvQOdJ%2FvsyTQ8QKve85SZ7eIffFGnNBNObKKhgW7HBtW9ki4ypnBiUwn82d1EdtXlfiRmfySIcBK5i9fsg7pXU5yVTy1wBBqRp267sDUSt5pfIXrnzl4NyyItqRwxIcWDXkaRPg5DF4&X-Amz-Signature=fd715f4e39e088767157fd0203fce80a285596cf7173b2e5319009e4bc4159bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
