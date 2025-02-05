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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WFGGOT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDYpp5nwcRn2vTRLfxG223DBs9KWj7rH15mafJGwD8v8QIhAN8RUuIu0Zd4xEt634cjOex2L%2FOWYf0tYiLgRFAZkx7aKv8DCEoQABoMNjM3NDIzMTgzODA1IgwbxepYSJ%2F4gPK1tB4q3AOgvVVNE5WFw6%2BWgWiCMITNL4vX62oVFTvxoZjinlOxW9DABd2OzhKP4Gy4ZLtkBX%2F4E3TCYhbSRpcJFhJW0%2Fu7ubtSZrOP1vhfVNsqEVd4yHTtOFdaws3OtD0MhL3C8KosyIUxoZj5jm7tST7Mt55qxk6%2Ff9Lx4MmZTikaKagYXTDr6GwYfMTz2aZNThY64T3uxw4aEmBhfptOwRGDvMboh9RzD33f9xQ6LKkRxEzsRY86xZHc1sfR1tr75FN795Z17y79z2yDqXiW9ASx8gZ1AXlYR4kGHZQhJgCwtapfIADq7SMWztAA5PKW8J0j6QpxA5LZQjhifgUsQkyTmziyvmBYAZT5Uc80t5wDtIVc7FTkFfiEvYmPzPrrEtTyyiG0eRVWK8NxVjK0WzdzG6eDlXVRXJDQj6XxUKzwb%2BiFglS8P%2BuYSBHgNYO1o1V6TH8DjSl%2FcbZYhfyUb%2FLS%2Bw2KPZtgkAyNsJT4SMpke2%2BLQQchJ3QXsfUDoGpOSoP23IwKltrUkt2P11gbtcycbEB7sPPF4XNFgjVPnCF6ZgJ4youdjdxMgs4QYQnTGA7%2FLUhNv%2B0UazCacLHOliBbvlMamc%2F088edhnXCgE1Bwniox9FuJ%2F9xymkbdKFqsjD8u469BjqkASWb56yafn97yiEbM9yJJTg6k8BZRuec7FOW23UG6orfA%2BKDvYvNNY9vMYzcd9ROlP3YSIPwVaN3T0Iu8A1yjBp7zotOg6B7a17GOXJi7xndZMGgNUKOEJn0BGK7z%2B5qdPfXECsshaB3isbooDbxpAWZKo5SlTvL87nVw2KkjtPyEYk2F0RWQg6drlCX8drFlB6VWEHwRETmnfPJys%2FXYmWCTxI2&X-Amz-Signature=d903fd3d9da1dd9dc311072a4d0e6a8e90890f0f54929e5708c59d196ed237db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WFGGOT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDYpp5nwcRn2vTRLfxG223DBs9KWj7rH15mafJGwD8v8QIhAN8RUuIu0Zd4xEt634cjOex2L%2FOWYf0tYiLgRFAZkx7aKv8DCEoQABoMNjM3NDIzMTgzODA1IgwbxepYSJ%2F4gPK1tB4q3AOgvVVNE5WFw6%2BWgWiCMITNL4vX62oVFTvxoZjinlOxW9DABd2OzhKP4Gy4ZLtkBX%2F4E3TCYhbSRpcJFhJW0%2Fu7ubtSZrOP1vhfVNsqEVd4yHTtOFdaws3OtD0MhL3C8KosyIUxoZj5jm7tST7Mt55qxk6%2Ff9Lx4MmZTikaKagYXTDr6GwYfMTz2aZNThY64T3uxw4aEmBhfptOwRGDvMboh9RzD33f9xQ6LKkRxEzsRY86xZHc1sfR1tr75FN795Z17y79z2yDqXiW9ASx8gZ1AXlYR4kGHZQhJgCwtapfIADq7SMWztAA5PKW8J0j6QpxA5LZQjhifgUsQkyTmziyvmBYAZT5Uc80t5wDtIVc7FTkFfiEvYmPzPrrEtTyyiG0eRVWK8NxVjK0WzdzG6eDlXVRXJDQj6XxUKzwb%2BiFglS8P%2BuYSBHgNYO1o1V6TH8DjSl%2FcbZYhfyUb%2FLS%2Bw2KPZtgkAyNsJT4SMpke2%2BLQQchJ3QXsfUDoGpOSoP23IwKltrUkt2P11gbtcycbEB7sPPF4XNFgjVPnCF6ZgJ4youdjdxMgs4QYQnTGA7%2FLUhNv%2B0UazCacLHOliBbvlMamc%2F088edhnXCgE1Bwniox9FuJ%2F9xymkbdKFqsjD8u469BjqkASWb56yafn97yiEbM9yJJTg6k8BZRuec7FOW23UG6orfA%2BKDvYvNNY9vMYzcd9ROlP3YSIPwVaN3T0Iu8A1yjBp7zotOg6B7a17GOXJi7xndZMGgNUKOEJn0BGK7z%2B5qdPfXECsshaB3isbooDbxpAWZKo5SlTvL87nVw2KkjtPyEYk2F0RWQg6drlCX8drFlB6VWEHwRETmnfPJys%2FXYmWCTxI2&X-Amz-Signature=e03a7e7f72b1656cba90d83682431d190e3def16217fb81d5c49ccec59011e35&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WFGGOT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDYpp5nwcRn2vTRLfxG223DBs9KWj7rH15mafJGwD8v8QIhAN8RUuIu0Zd4xEt634cjOex2L%2FOWYf0tYiLgRFAZkx7aKv8DCEoQABoMNjM3NDIzMTgzODA1IgwbxepYSJ%2F4gPK1tB4q3AOgvVVNE5WFw6%2BWgWiCMITNL4vX62oVFTvxoZjinlOxW9DABd2OzhKP4Gy4ZLtkBX%2F4E3TCYhbSRpcJFhJW0%2Fu7ubtSZrOP1vhfVNsqEVd4yHTtOFdaws3OtD0MhL3C8KosyIUxoZj5jm7tST7Mt55qxk6%2Ff9Lx4MmZTikaKagYXTDr6GwYfMTz2aZNThY64T3uxw4aEmBhfptOwRGDvMboh9RzD33f9xQ6LKkRxEzsRY86xZHc1sfR1tr75FN795Z17y79z2yDqXiW9ASx8gZ1AXlYR4kGHZQhJgCwtapfIADq7SMWztAA5PKW8J0j6QpxA5LZQjhifgUsQkyTmziyvmBYAZT5Uc80t5wDtIVc7FTkFfiEvYmPzPrrEtTyyiG0eRVWK8NxVjK0WzdzG6eDlXVRXJDQj6XxUKzwb%2BiFglS8P%2BuYSBHgNYO1o1V6TH8DjSl%2FcbZYhfyUb%2FLS%2Bw2KPZtgkAyNsJT4SMpke2%2BLQQchJ3QXsfUDoGpOSoP23IwKltrUkt2P11gbtcycbEB7sPPF4XNFgjVPnCF6ZgJ4youdjdxMgs4QYQnTGA7%2FLUhNv%2B0UazCacLHOliBbvlMamc%2F088edhnXCgE1Bwniox9FuJ%2F9xymkbdKFqsjD8u469BjqkASWb56yafn97yiEbM9yJJTg6k8BZRuec7FOW23UG6orfA%2BKDvYvNNY9vMYzcd9ROlP3YSIPwVaN3T0Iu8A1yjBp7zotOg6B7a17GOXJi7xndZMGgNUKOEJn0BGK7z%2B5qdPfXECsshaB3isbooDbxpAWZKo5SlTvL87nVw2KkjtPyEYk2F0RWQg6drlCX8drFlB6VWEHwRETmnfPJys%2FXYmWCTxI2&X-Amz-Signature=d39c815f5abcfe2d3a5ad658d37fd85ae73c98ca34d3505f684e135554faa829&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WFGGOT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDYpp5nwcRn2vTRLfxG223DBs9KWj7rH15mafJGwD8v8QIhAN8RUuIu0Zd4xEt634cjOex2L%2FOWYf0tYiLgRFAZkx7aKv8DCEoQABoMNjM3NDIzMTgzODA1IgwbxepYSJ%2F4gPK1tB4q3AOgvVVNE5WFw6%2BWgWiCMITNL4vX62oVFTvxoZjinlOxW9DABd2OzhKP4Gy4ZLtkBX%2F4E3TCYhbSRpcJFhJW0%2Fu7ubtSZrOP1vhfVNsqEVd4yHTtOFdaws3OtD0MhL3C8KosyIUxoZj5jm7tST7Mt55qxk6%2Ff9Lx4MmZTikaKagYXTDr6GwYfMTz2aZNThY64T3uxw4aEmBhfptOwRGDvMboh9RzD33f9xQ6LKkRxEzsRY86xZHc1sfR1tr75FN795Z17y79z2yDqXiW9ASx8gZ1AXlYR4kGHZQhJgCwtapfIADq7SMWztAA5PKW8J0j6QpxA5LZQjhifgUsQkyTmziyvmBYAZT5Uc80t5wDtIVc7FTkFfiEvYmPzPrrEtTyyiG0eRVWK8NxVjK0WzdzG6eDlXVRXJDQj6XxUKzwb%2BiFglS8P%2BuYSBHgNYO1o1V6TH8DjSl%2FcbZYhfyUb%2FLS%2Bw2KPZtgkAyNsJT4SMpke2%2BLQQchJ3QXsfUDoGpOSoP23IwKltrUkt2P11gbtcycbEB7sPPF4XNFgjVPnCF6ZgJ4youdjdxMgs4QYQnTGA7%2FLUhNv%2B0UazCacLHOliBbvlMamc%2F088edhnXCgE1Bwniox9FuJ%2F9xymkbdKFqsjD8u469BjqkASWb56yafn97yiEbM9yJJTg6k8BZRuec7FOW23UG6orfA%2BKDvYvNNY9vMYzcd9ROlP3YSIPwVaN3T0Iu8A1yjBp7zotOg6B7a17GOXJi7xndZMGgNUKOEJn0BGK7z%2B5qdPfXECsshaB3isbooDbxpAWZKo5SlTvL87nVw2KkjtPyEYk2F0RWQg6drlCX8drFlB6VWEHwRETmnfPJys%2FXYmWCTxI2&X-Amz-Signature=5846dd4dfc89004dbf216d9727384d859c7cfc9a7056f57058e85e10f99da8ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WFGGOT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDYpp5nwcRn2vTRLfxG223DBs9KWj7rH15mafJGwD8v8QIhAN8RUuIu0Zd4xEt634cjOex2L%2FOWYf0tYiLgRFAZkx7aKv8DCEoQABoMNjM3NDIzMTgzODA1IgwbxepYSJ%2F4gPK1tB4q3AOgvVVNE5WFw6%2BWgWiCMITNL4vX62oVFTvxoZjinlOxW9DABd2OzhKP4Gy4ZLtkBX%2F4E3TCYhbSRpcJFhJW0%2Fu7ubtSZrOP1vhfVNsqEVd4yHTtOFdaws3OtD0MhL3C8KosyIUxoZj5jm7tST7Mt55qxk6%2Ff9Lx4MmZTikaKagYXTDr6GwYfMTz2aZNThY64T3uxw4aEmBhfptOwRGDvMboh9RzD33f9xQ6LKkRxEzsRY86xZHc1sfR1tr75FN795Z17y79z2yDqXiW9ASx8gZ1AXlYR4kGHZQhJgCwtapfIADq7SMWztAA5PKW8J0j6QpxA5LZQjhifgUsQkyTmziyvmBYAZT5Uc80t5wDtIVc7FTkFfiEvYmPzPrrEtTyyiG0eRVWK8NxVjK0WzdzG6eDlXVRXJDQj6XxUKzwb%2BiFglS8P%2BuYSBHgNYO1o1V6TH8DjSl%2FcbZYhfyUb%2FLS%2Bw2KPZtgkAyNsJT4SMpke2%2BLQQchJ3QXsfUDoGpOSoP23IwKltrUkt2P11gbtcycbEB7sPPF4XNFgjVPnCF6ZgJ4youdjdxMgs4QYQnTGA7%2FLUhNv%2B0UazCacLHOliBbvlMamc%2F088edhnXCgE1Bwniox9FuJ%2F9xymkbdKFqsjD8u469BjqkASWb56yafn97yiEbM9yJJTg6k8BZRuec7FOW23UG6orfA%2BKDvYvNNY9vMYzcd9ROlP3YSIPwVaN3T0Iu8A1yjBp7zotOg6B7a17GOXJi7xndZMGgNUKOEJn0BGK7z%2B5qdPfXECsshaB3isbooDbxpAWZKo5SlTvL87nVw2KkjtPyEYk2F0RWQg6drlCX8drFlB6VWEHwRETmnfPJys%2FXYmWCTxI2&X-Amz-Signature=b4390c5ae3f9e1afa5ebf079a83501d75b248cadf404a70eeff0c200d63bb27f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WFGGOT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDYpp5nwcRn2vTRLfxG223DBs9KWj7rH15mafJGwD8v8QIhAN8RUuIu0Zd4xEt634cjOex2L%2FOWYf0tYiLgRFAZkx7aKv8DCEoQABoMNjM3NDIzMTgzODA1IgwbxepYSJ%2F4gPK1tB4q3AOgvVVNE5WFw6%2BWgWiCMITNL4vX62oVFTvxoZjinlOxW9DABd2OzhKP4Gy4ZLtkBX%2F4E3TCYhbSRpcJFhJW0%2Fu7ubtSZrOP1vhfVNsqEVd4yHTtOFdaws3OtD0MhL3C8KosyIUxoZj5jm7tST7Mt55qxk6%2Ff9Lx4MmZTikaKagYXTDr6GwYfMTz2aZNThY64T3uxw4aEmBhfptOwRGDvMboh9RzD33f9xQ6LKkRxEzsRY86xZHc1sfR1tr75FN795Z17y79z2yDqXiW9ASx8gZ1AXlYR4kGHZQhJgCwtapfIADq7SMWztAA5PKW8J0j6QpxA5LZQjhifgUsQkyTmziyvmBYAZT5Uc80t5wDtIVc7FTkFfiEvYmPzPrrEtTyyiG0eRVWK8NxVjK0WzdzG6eDlXVRXJDQj6XxUKzwb%2BiFglS8P%2BuYSBHgNYO1o1V6TH8DjSl%2FcbZYhfyUb%2FLS%2Bw2KPZtgkAyNsJT4SMpke2%2BLQQchJ3QXsfUDoGpOSoP23IwKltrUkt2P11gbtcycbEB7sPPF4XNFgjVPnCF6ZgJ4youdjdxMgs4QYQnTGA7%2FLUhNv%2B0UazCacLHOliBbvlMamc%2F088edhnXCgE1Bwniox9FuJ%2F9xymkbdKFqsjD8u469BjqkASWb56yafn97yiEbM9yJJTg6k8BZRuec7FOW23UG6orfA%2BKDvYvNNY9vMYzcd9ROlP3YSIPwVaN3T0Iu8A1yjBp7zotOg6B7a17GOXJi7xndZMGgNUKOEJn0BGK7z%2B5qdPfXECsshaB3isbooDbxpAWZKo5SlTvL87nVw2KkjtPyEYk2F0RWQg6drlCX8drFlB6VWEHwRETmnfPJys%2FXYmWCTxI2&X-Amz-Signature=cf1c72c23a25a3d85928d13dcd77f8e18c8f9c75d9369f2fa4f7d30976702914&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WFGGOT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDYpp5nwcRn2vTRLfxG223DBs9KWj7rH15mafJGwD8v8QIhAN8RUuIu0Zd4xEt634cjOex2L%2FOWYf0tYiLgRFAZkx7aKv8DCEoQABoMNjM3NDIzMTgzODA1IgwbxepYSJ%2F4gPK1tB4q3AOgvVVNE5WFw6%2BWgWiCMITNL4vX62oVFTvxoZjinlOxW9DABd2OzhKP4Gy4ZLtkBX%2F4E3TCYhbSRpcJFhJW0%2Fu7ubtSZrOP1vhfVNsqEVd4yHTtOFdaws3OtD0MhL3C8KosyIUxoZj5jm7tST7Mt55qxk6%2Ff9Lx4MmZTikaKagYXTDr6GwYfMTz2aZNThY64T3uxw4aEmBhfptOwRGDvMboh9RzD33f9xQ6LKkRxEzsRY86xZHc1sfR1tr75FN795Z17y79z2yDqXiW9ASx8gZ1AXlYR4kGHZQhJgCwtapfIADq7SMWztAA5PKW8J0j6QpxA5LZQjhifgUsQkyTmziyvmBYAZT5Uc80t5wDtIVc7FTkFfiEvYmPzPrrEtTyyiG0eRVWK8NxVjK0WzdzG6eDlXVRXJDQj6XxUKzwb%2BiFglS8P%2BuYSBHgNYO1o1V6TH8DjSl%2FcbZYhfyUb%2FLS%2Bw2KPZtgkAyNsJT4SMpke2%2BLQQchJ3QXsfUDoGpOSoP23IwKltrUkt2P11gbtcycbEB7sPPF4XNFgjVPnCF6ZgJ4youdjdxMgs4QYQnTGA7%2FLUhNv%2B0UazCacLHOliBbvlMamc%2F088edhnXCgE1Bwniox9FuJ%2F9xymkbdKFqsjD8u469BjqkASWb56yafn97yiEbM9yJJTg6k8BZRuec7FOW23UG6orfA%2BKDvYvNNY9vMYzcd9ROlP3YSIPwVaN3T0Iu8A1yjBp7zotOg6B7a17GOXJi7xndZMGgNUKOEJn0BGK7z%2B5qdPfXECsshaB3isbooDbxpAWZKo5SlTvL87nVw2KkjtPyEYk2F0RWQg6drlCX8drFlB6VWEHwRETmnfPJys%2FXYmWCTxI2&X-Amz-Signature=e07800b92e8ff8f934f90242075fbb43f99a32d864c20da8693f1f8c9fe17dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WFGGOT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDYpp5nwcRn2vTRLfxG223DBs9KWj7rH15mafJGwD8v8QIhAN8RUuIu0Zd4xEt634cjOex2L%2FOWYf0tYiLgRFAZkx7aKv8DCEoQABoMNjM3NDIzMTgzODA1IgwbxepYSJ%2F4gPK1tB4q3AOgvVVNE5WFw6%2BWgWiCMITNL4vX62oVFTvxoZjinlOxW9DABd2OzhKP4Gy4ZLtkBX%2F4E3TCYhbSRpcJFhJW0%2Fu7ubtSZrOP1vhfVNsqEVd4yHTtOFdaws3OtD0MhL3C8KosyIUxoZj5jm7tST7Mt55qxk6%2Ff9Lx4MmZTikaKagYXTDr6GwYfMTz2aZNThY64T3uxw4aEmBhfptOwRGDvMboh9RzD33f9xQ6LKkRxEzsRY86xZHc1sfR1tr75FN795Z17y79z2yDqXiW9ASx8gZ1AXlYR4kGHZQhJgCwtapfIADq7SMWztAA5PKW8J0j6QpxA5LZQjhifgUsQkyTmziyvmBYAZT5Uc80t5wDtIVc7FTkFfiEvYmPzPrrEtTyyiG0eRVWK8NxVjK0WzdzG6eDlXVRXJDQj6XxUKzwb%2BiFglS8P%2BuYSBHgNYO1o1V6TH8DjSl%2FcbZYhfyUb%2FLS%2Bw2KPZtgkAyNsJT4SMpke2%2BLQQchJ3QXsfUDoGpOSoP23IwKltrUkt2P11gbtcycbEB7sPPF4XNFgjVPnCF6ZgJ4youdjdxMgs4QYQnTGA7%2FLUhNv%2B0UazCacLHOliBbvlMamc%2F088edhnXCgE1Bwniox9FuJ%2F9xymkbdKFqsjD8u469BjqkASWb56yafn97yiEbM9yJJTg6k8BZRuec7FOW23UG6orfA%2BKDvYvNNY9vMYzcd9ROlP3YSIPwVaN3T0Iu8A1yjBp7zotOg6B7a17GOXJi7xndZMGgNUKOEJn0BGK7z%2B5qdPfXECsshaB3isbooDbxpAWZKo5SlTvL87nVw2KkjtPyEYk2F0RWQg6drlCX8drFlB6VWEHwRETmnfPJys%2FXYmWCTxI2&X-Amz-Signature=eb893c1b468201bf6fdaa956c3434a041e5c39968495fee9f321cfbe7b387b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
