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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTULYIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3JMR5ACMg7bkH5DO%2BufNtJAK9MRb4n8CkVl7IturyhAiBVXCYVNM8KW81puH34Zs2HkJGEEIrCMUfCJ8NtIv4r4yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2F%2FFOatN0BGV3Bl%2BKtwDUArEa5HqSkGmr1V28CmgrcZyv%2Fzc%2BHYq0XKKm8xhLQ5FGkzoMIjZXtsdKAQ%2BoH042nsoSio3%2BXPfVEZe0cxlgtzy%2BSiKY5Wfu5%2Bo%2Bbazc9yMqVLhbUGBXKrkRIz4A%2B6hBojtT8UVOcg7gpHvV1CNCI6Y%2BnZXrxzCwHSKf%2F4w82eMV6nTHGz2sTjcL%2Fq50Xx9GXRhbShyQVkJfOv3lN4n%2BUD7bobt5azcmgpoxnGjEMgrmb%2BB96qpeZfctzld5JJ%2FyFNM9%2FwoE2ARY3y2SHbg8O7mI1lLw3HHcpANzZsR%2F3GeTK1c9RqLui9MkdSnhXlE5njLtYzZ8GeNNd%2BLTlYporDUKpBF2NY%2BsUAMYxI1Mu223f3Xf9gzqoE42qP%2FkQi0iDF8RDrcEcwWoQfrozSb8zOtY0Tp%2FnNC56gMSpgn%2FHnLBVI76WkGN1fqGs6ehHkjSu1XND6wjikQI4yfLabx%2BVUlqQMyMVraD1gFCVDRLWup7HuCaNdLt%2BXPKJqJlmUNe5cBOpxpAo728m45mSXs5sVA%2F5GqxQh%2Fmh91QqeY%2BNdt1TeF4wOFUzh%2FOhyVKl2x5%2BUtx3rFusAuF8rvuudXyDtkbayMdrgf%2FQNhl0nHj72IjF1mrmuuhRdDilkwwOypwQY6pgHpaXAw2lVBLgaj7RLzNtf5iTh6AEQY3gZH0kNgMZKeSEN%2BoTf5WCRar0wB5gjH3%2FUZDa%2FrA5OiB3RxZ9b1ZvseVu00%2BOy532jbg72mJkCa8V5i2p5y5HXC2ZpZ8qfQvd%2FJQz%2BPlF8AUQLcYDImr2uQuVUMbQkxkQyWES4EAfBgq8OJ0ljNrjLWHrfe%2FtYJPKSQcEyQcIM29026PDNi5PvngmUiapkQ&X-Amz-Signature=cfaa0160122ba87a255ecd5b3d9849e9521411a769fe6d05d349a04ad148b86a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTULYIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3JMR5ACMg7bkH5DO%2BufNtJAK9MRb4n8CkVl7IturyhAiBVXCYVNM8KW81puH34Zs2HkJGEEIrCMUfCJ8NtIv4r4yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2F%2FFOatN0BGV3Bl%2BKtwDUArEa5HqSkGmr1V28CmgrcZyv%2Fzc%2BHYq0XKKm8xhLQ5FGkzoMIjZXtsdKAQ%2BoH042nsoSio3%2BXPfVEZe0cxlgtzy%2BSiKY5Wfu5%2Bo%2Bbazc9yMqVLhbUGBXKrkRIz4A%2B6hBojtT8UVOcg7gpHvV1CNCI6Y%2BnZXrxzCwHSKf%2F4w82eMV6nTHGz2sTjcL%2Fq50Xx9GXRhbShyQVkJfOv3lN4n%2BUD7bobt5azcmgpoxnGjEMgrmb%2BB96qpeZfctzld5JJ%2FyFNM9%2FwoE2ARY3y2SHbg8O7mI1lLw3HHcpANzZsR%2F3GeTK1c9RqLui9MkdSnhXlE5njLtYzZ8GeNNd%2BLTlYporDUKpBF2NY%2BsUAMYxI1Mu223f3Xf9gzqoE42qP%2FkQi0iDF8RDrcEcwWoQfrozSb8zOtY0Tp%2FnNC56gMSpgn%2FHnLBVI76WkGN1fqGs6ehHkjSu1XND6wjikQI4yfLabx%2BVUlqQMyMVraD1gFCVDRLWup7HuCaNdLt%2BXPKJqJlmUNe5cBOpxpAo728m45mSXs5sVA%2F5GqxQh%2Fmh91QqeY%2BNdt1TeF4wOFUzh%2FOhyVKl2x5%2BUtx3rFusAuF8rvuudXyDtkbayMdrgf%2FQNhl0nHj72IjF1mrmuuhRdDilkwwOypwQY6pgHpaXAw2lVBLgaj7RLzNtf5iTh6AEQY3gZH0kNgMZKeSEN%2BoTf5WCRar0wB5gjH3%2FUZDa%2FrA5OiB3RxZ9b1ZvseVu00%2BOy532jbg72mJkCa8V5i2p5y5HXC2ZpZ8qfQvd%2FJQz%2BPlF8AUQLcYDImr2uQuVUMbQkxkQyWES4EAfBgq8OJ0ljNrjLWHrfe%2FtYJPKSQcEyQcIM29026PDNi5PvngmUiapkQ&X-Amz-Signature=6a14eaa13115c432d80714d23d3c2bedd771cb6496509f800291a01e44443441&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTULYIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3JMR5ACMg7bkH5DO%2BufNtJAK9MRb4n8CkVl7IturyhAiBVXCYVNM8KW81puH34Zs2HkJGEEIrCMUfCJ8NtIv4r4yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2F%2FFOatN0BGV3Bl%2BKtwDUArEa5HqSkGmr1V28CmgrcZyv%2Fzc%2BHYq0XKKm8xhLQ5FGkzoMIjZXtsdKAQ%2BoH042nsoSio3%2BXPfVEZe0cxlgtzy%2BSiKY5Wfu5%2Bo%2Bbazc9yMqVLhbUGBXKrkRIz4A%2B6hBojtT8UVOcg7gpHvV1CNCI6Y%2BnZXrxzCwHSKf%2F4w82eMV6nTHGz2sTjcL%2Fq50Xx9GXRhbShyQVkJfOv3lN4n%2BUD7bobt5azcmgpoxnGjEMgrmb%2BB96qpeZfctzld5JJ%2FyFNM9%2FwoE2ARY3y2SHbg8O7mI1lLw3HHcpANzZsR%2F3GeTK1c9RqLui9MkdSnhXlE5njLtYzZ8GeNNd%2BLTlYporDUKpBF2NY%2BsUAMYxI1Mu223f3Xf9gzqoE42qP%2FkQi0iDF8RDrcEcwWoQfrozSb8zOtY0Tp%2FnNC56gMSpgn%2FHnLBVI76WkGN1fqGs6ehHkjSu1XND6wjikQI4yfLabx%2BVUlqQMyMVraD1gFCVDRLWup7HuCaNdLt%2BXPKJqJlmUNe5cBOpxpAo728m45mSXs5sVA%2F5GqxQh%2Fmh91QqeY%2BNdt1TeF4wOFUzh%2FOhyVKl2x5%2BUtx3rFusAuF8rvuudXyDtkbayMdrgf%2FQNhl0nHj72IjF1mrmuuhRdDilkwwOypwQY6pgHpaXAw2lVBLgaj7RLzNtf5iTh6AEQY3gZH0kNgMZKeSEN%2BoTf5WCRar0wB5gjH3%2FUZDa%2FrA5OiB3RxZ9b1ZvseVu00%2BOy532jbg72mJkCa8V5i2p5y5HXC2ZpZ8qfQvd%2FJQz%2BPlF8AUQLcYDImr2uQuVUMbQkxkQyWES4EAfBgq8OJ0ljNrjLWHrfe%2FtYJPKSQcEyQcIM29026PDNi5PvngmUiapkQ&X-Amz-Signature=646f939b8ffa7096de0f3ae3c99ae46f168238b668a2edfbf0e93505402d3a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTULYIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3JMR5ACMg7bkH5DO%2BufNtJAK9MRb4n8CkVl7IturyhAiBVXCYVNM8KW81puH34Zs2HkJGEEIrCMUfCJ8NtIv4r4yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2F%2FFOatN0BGV3Bl%2BKtwDUArEa5HqSkGmr1V28CmgrcZyv%2Fzc%2BHYq0XKKm8xhLQ5FGkzoMIjZXtsdKAQ%2BoH042nsoSio3%2BXPfVEZe0cxlgtzy%2BSiKY5Wfu5%2Bo%2Bbazc9yMqVLhbUGBXKrkRIz4A%2B6hBojtT8UVOcg7gpHvV1CNCI6Y%2BnZXrxzCwHSKf%2F4w82eMV6nTHGz2sTjcL%2Fq50Xx9GXRhbShyQVkJfOv3lN4n%2BUD7bobt5azcmgpoxnGjEMgrmb%2BB96qpeZfctzld5JJ%2FyFNM9%2FwoE2ARY3y2SHbg8O7mI1lLw3HHcpANzZsR%2F3GeTK1c9RqLui9MkdSnhXlE5njLtYzZ8GeNNd%2BLTlYporDUKpBF2NY%2BsUAMYxI1Mu223f3Xf9gzqoE42qP%2FkQi0iDF8RDrcEcwWoQfrozSb8zOtY0Tp%2FnNC56gMSpgn%2FHnLBVI76WkGN1fqGs6ehHkjSu1XND6wjikQI4yfLabx%2BVUlqQMyMVraD1gFCVDRLWup7HuCaNdLt%2BXPKJqJlmUNe5cBOpxpAo728m45mSXs5sVA%2F5GqxQh%2Fmh91QqeY%2BNdt1TeF4wOFUzh%2FOhyVKl2x5%2BUtx3rFusAuF8rvuudXyDtkbayMdrgf%2FQNhl0nHj72IjF1mrmuuhRdDilkwwOypwQY6pgHpaXAw2lVBLgaj7RLzNtf5iTh6AEQY3gZH0kNgMZKeSEN%2BoTf5WCRar0wB5gjH3%2FUZDa%2FrA5OiB3RxZ9b1ZvseVu00%2BOy532jbg72mJkCa8V5i2p5y5HXC2ZpZ8qfQvd%2FJQz%2BPlF8AUQLcYDImr2uQuVUMbQkxkQyWES4EAfBgq8OJ0ljNrjLWHrfe%2FtYJPKSQcEyQcIM29026PDNi5PvngmUiapkQ&X-Amz-Signature=c8f9eac0d2790a134849546f3594312916ff0ae8fc1bc1602837805635bb0cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTULYIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3JMR5ACMg7bkH5DO%2BufNtJAK9MRb4n8CkVl7IturyhAiBVXCYVNM8KW81puH34Zs2HkJGEEIrCMUfCJ8NtIv4r4yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2F%2FFOatN0BGV3Bl%2BKtwDUArEa5HqSkGmr1V28CmgrcZyv%2Fzc%2BHYq0XKKm8xhLQ5FGkzoMIjZXtsdKAQ%2BoH042nsoSio3%2BXPfVEZe0cxlgtzy%2BSiKY5Wfu5%2Bo%2Bbazc9yMqVLhbUGBXKrkRIz4A%2B6hBojtT8UVOcg7gpHvV1CNCI6Y%2BnZXrxzCwHSKf%2F4w82eMV6nTHGz2sTjcL%2Fq50Xx9GXRhbShyQVkJfOv3lN4n%2BUD7bobt5azcmgpoxnGjEMgrmb%2BB96qpeZfctzld5JJ%2FyFNM9%2FwoE2ARY3y2SHbg8O7mI1lLw3HHcpANzZsR%2F3GeTK1c9RqLui9MkdSnhXlE5njLtYzZ8GeNNd%2BLTlYporDUKpBF2NY%2BsUAMYxI1Mu223f3Xf9gzqoE42qP%2FkQi0iDF8RDrcEcwWoQfrozSb8zOtY0Tp%2FnNC56gMSpgn%2FHnLBVI76WkGN1fqGs6ehHkjSu1XND6wjikQI4yfLabx%2BVUlqQMyMVraD1gFCVDRLWup7HuCaNdLt%2BXPKJqJlmUNe5cBOpxpAo728m45mSXs5sVA%2F5GqxQh%2Fmh91QqeY%2BNdt1TeF4wOFUzh%2FOhyVKl2x5%2BUtx3rFusAuF8rvuudXyDtkbayMdrgf%2FQNhl0nHj72IjF1mrmuuhRdDilkwwOypwQY6pgHpaXAw2lVBLgaj7RLzNtf5iTh6AEQY3gZH0kNgMZKeSEN%2BoTf5WCRar0wB5gjH3%2FUZDa%2FrA5OiB3RxZ9b1ZvseVu00%2BOy532jbg72mJkCa8V5i2p5y5HXC2ZpZ8qfQvd%2FJQz%2BPlF8AUQLcYDImr2uQuVUMbQkxkQyWES4EAfBgq8OJ0ljNrjLWHrfe%2FtYJPKSQcEyQcIM29026PDNi5PvngmUiapkQ&X-Amz-Signature=0765ac08f0152bad298baae587a1e7a6f1a784462f17a441506088bba705c5f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTULYIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3JMR5ACMg7bkH5DO%2BufNtJAK9MRb4n8CkVl7IturyhAiBVXCYVNM8KW81puH34Zs2HkJGEEIrCMUfCJ8NtIv4r4yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2F%2FFOatN0BGV3Bl%2BKtwDUArEa5HqSkGmr1V28CmgrcZyv%2Fzc%2BHYq0XKKm8xhLQ5FGkzoMIjZXtsdKAQ%2BoH042nsoSio3%2BXPfVEZe0cxlgtzy%2BSiKY5Wfu5%2Bo%2Bbazc9yMqVLhbUGBXKrkRIz4A%2B6hBojtT8UVOcg7gpHvV1CNCI6Y%2BnZXrxzCwHSKf%2F4w82eMV6nTHGz2sTjcL%2Fq50Xx9GXRhbShyQVkJfOv3lN4n%2BUD7bobt5azcmgpoxnGjEMgrmb%2BB96qpeZfctzld5JJ%2FyFNM9%2FwoE2ARY3y2SHbg8O7mI1lLw3HHcpANzZsR%2F3GeTK1c9RqLui9MkdSnhXlE5njLtYzZ8GeNNd%2BLTlYporDUKpBF2NY%2BsUAMYxI1Mu223f3Xf9gzqoE42qP%2FkQi0iDF8RDrcEcwWoQfrozSb8zOtY0Tp%2FnNC56gMSpgn%2FHnLBVI76WkGN1fqGs6ehHkjSu1XND6wjikQI4yfLabx%2BVUlqQMyMVraD1gFCVDRLWup7HuCaNdLt%2BXPKJqJlmUNe5cBOpxpAo728m45mSXs5sVA%2F5GqxQh%2Fmh91QqeY%2BNdt1TeF4wOFUzh%2FOhyVKl2x5%2BUtx3rFusAuF8rvuudXyDtkbayMdrgf%2FQNhl0nHj72IjF1mrmuuhRdDilkwwOypwQY6pgHpaXAw2lVBLgaj7RLzNtf5iTh6AEQY3gZH0kNgMZKeSEN%2BoTf5WCRar0wB5gjH3%2FUZDa%2FrA5OiB3RxZ9b1ZvseVu00%2BOy532jbg72mJkCa8V5i2p5y5HXC2ZpZ8qfQvd%2FJQz%2BPlF8AUQLcYDImr2uQuVUMbQkxkQyWES4EAfBgq8OJ0ljNrjLWHrfe%2FtYJPKSQcEyQcIM29026PDNi5PvngmUiapkQ&X-Amz-Signature=510710f28f28d796ac43763beddecb9dd1e42c6f9fbba7bed3551a2c84251ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTULYIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3JMR5ACMg7bkH5DO%2BufNtJAK9MRb4n8CkVl7IturyhAiBVXCYVNM8KW81puH34Zs2HkJGEEIrCMUfCJ8NtIv4r4yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2F%2FFOatN0BGV3Bl%2BKtwDUArEa5HqSkGmr1V28CmgrcZyv%2Fzc%2BHYq0XKKm8xhLQ5FGkzoMIjZXtsdKAQ%2BoH042nsoSio3%2BXPfVEZe0cxlgtzy%2BSiKY5Wfu5%2Bo%2Bbazc9yMqVLhbUGBXKrkRIz4A%2B6hBojtT8UVOcg7gpHvV1CNCI6Y%2BnZXrxzCwHSKf%2F4w82eMV6nTHGz2sTjcL%2Fq50Xx9GXRhbShyQVkJfOv3lN4n%2BUD7bobt5azcmgpoxnGjEMgrmb%2BB96qpeZfctzld5JJ%2FyFNM9%2FwoE2ARY3y2SHbg8O7mI1lLw3HHcpANzZsR%2F3GeTK1c9RqLui9MkdSnhXlE5njLtYzZ8GeNNd%2BLTlYporDUKpBF2NY%2BsUAMYxI1Mu223f3Xf9gzqoE42qP%2FkQi0iDF8RDrcEcwWoQfrozSb8zOtY0Tp%2FnNC56gMSpgn%2FHnLBVI76WkGN1fqGs6ehHkjSu1XND6wjikQI4yfLabx%2BVUlqQMyMVraD1gFCVDRLWup7HuCaNdLt%2BXPKJqJlmUNe5cBOpxpAo728m45mSXs5sVA%2F5GqxQh%2Fmh91QqeY%2BNdt1TeF4wOFUzh%2FOhyVKl2x5%2BUtx3rFusAuF8rvuudXyDtkbayMdrgf%2FQNhl0nHj72IjF1mrmuuhRdDilkwwOypwQY6pgHpaXAw2lVBLgaj7RLzNtf5iTh6AEQY3gZH0kNgMZKeSEN%2BoTf5WCRar0wB5gjH3%2FUZDa%2FrA5OiB3RxZ9b1ZvseVu00%2BOy532jbg72mJkCa8V5i2p5y5HXC2ZpZ8qfQvd%2FJQz%2BPlF8AUQLcYDImr2uQuVUMbQkxkQyWES4EAfBgq8OJ0ljNrjLWHrfe%2FtYJPKSQcEyQcIM29026PDNi5PvngmUiapkQ&X-Amz-Signature=65a305b52171e42872ef5ae017ee1e6379da8da0fd5caf33f050596f9cfb9430&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNTULYIP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T034043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3JMR5ACMg7bkH5DO%2BufNtJAK9MRb4n8CkVl7IturyhAiBVXCYVNM8KW81puH34Zs2HkJGEEIrCMUfCJ8NtIv4r4yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe%2F%2FFOatN0BGV3Bl%2BKtwDUArEa5HqSkGmr1V28CmgrcZyv%2Fzc%2BHYq0XKKm8xhLQ5FGkzoMIjZXtsdKAQ%2BoH042nsoSio3%2BXPfVEZe0cxlgtzy%2BSiKY5Wfu5%2Bo%2Bbazc9yMqVLhbUGBXKrkRIz4A%2B6hBojtT8UVOcg7gpHvV1CNCI6Y%2BnZXrxzCwHSKf%2F4w82eMV6nTHGz2sTjcL%2Fq50Xx9GXRhbShyQVkJfOv3lN4n%2BUD7bobt5azcmgpoxnGjEMgrmb%2BB96qpeZfctzld5JJ%2FyFNM9%2FwoE2ARY3y2SHbg8O7mI1lLw3HHcpANzZsR%2F3GeTK1c9RqLui9MkdSnhXlE5njLtYzZ8GeNNd%2BLTlYporDUKpBF2NY%2BsUAMYxI1Mu223f3Xf9gzqoE42qP%2FkQi0iDF8RDrcEcwWoQfrozSb8zOtY0Tp%2FnNC56gMSpgn%2FHnLBVI76WkGN1fqGs6ehHkjSu1XND6wjikQI4yfLabx%2BVUlqQMyMVraD1gFCVDRLWup7HuCaNdLt%2BXPKJqJlmUNe5cBOpxpAo728m45mSXs5sVA%2F5GqxQh%2Fmh91QqeY%2BNdt1TeF4wOFUzh%2FOhyVKl2x5%2BUtx3rFusAuF8rvuudXyDtkbayMdrgf%2FQNhl0nHj72IjF1mrmuuhRdDilkwwOypwQY6pgHpaXAw2lVBLgaj7RLzNtf5iTh6AEQY3gZH0kNgMZKeSEN%2BoTf5WCRar0wB5gjH3%2FUZDa%2FrA5OiB3RxZ9b1ZvseVu00%2BOy532jbg72mJkCa8V5i2p5y5HXC2ZpZ8qfQvd%2FJQz%2BPlF8AUQLcYDImr2uQuVUMbQkxkQyWES4EAfBgq8OJ0ljNrjLWHrfe%2FtYJPKSQcEyQcIM29026PDNi5PvngmUiapkQ&X-Amz-Signature=5af251e08daddc9b9cc0f0be7eef5ac4d7ba82e5962fbf1ae1e2c150815b803e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
