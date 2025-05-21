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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPBHVQS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFLiQX%2FsAchUhkYzer8W5hIYwTfRHmM6L30W%2BicUBh88AiAxF4siijwabXfeFtmRxU1FWrtXjfVPNsi67aIvVaId8CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27lX6fdTcFMhthndKtwDH2Ob7BCb6taVYe6ozYfR%2BnzhAt2Jzj5oDL%2FVclRBikkqnR28fwXm3bsvr4EuFYtlntSPsA4g78xadmgHzGdu9412lDWsWDGsJBt%2BpxuHMnTkuqaoSyzRsWsjDrIejbCWqlPVgaccnQsweOZ1ANq56Ph9lvRTlEPNfHqGBFA%2BTAchQuc3VniyFURT3df7mTqTJQEFyMWxdCqeaZwm10p09mJ0uuk0gYfsRJj7bAi8Uw30MtsiZiekn%2FsUrvntB21kNSJFZkSbYbZW8hlwNuw0Ygqa8V97LUV6CaGhItpUZlJguoV4PYYoJQp%2FjiH5FI3LkOYxnHjQJ2THcKq8lSB%2Fq4hXN8eYCnQEVbf3s6pcajaqFpmoMpIkH5Yp7ZnBfC5APkFPmzdTcS5I5xhwFlximz%2Fqyv2C36zgrhnVXrVFDeuEeUPvT3yDTcIcSc5ecGcC9N8zVtwhZf5WD4XJE5ckKIxftLCWdfrfodpI3O%2Fz1YmdA70Q1JlVJp2K7k3LAgryYG9uHWLmskWBIFffiYL5VfefhCAxRV2TsX5fMgRR6sOYibsmHV5b2ArDAB10%2B9JFiaa2FWcDhMj0OXebN5K%2BB42DJCC7oQse0wBwrHU2l41AqCZt6a%2FA6IbCf98wr%2B62wQY6pgFg33Kkh9Rgs%2BRtkS9vsNAmyt%2Bbts%2F%2B5kGHLskWjE3UnvNKH6JS7V%2BIVRF0hexsJXzrKGm1%2FlpurQF83E7XJcFEkO4uSzThSNMSN%2B%2BHGJyJos%2F8KKqllDcOlKfMRHydEkwxiqdIwMhEclKXD5%2BdXC7v7rQeNJqny4Wq75C0rYWnZMPQXYcvcvIU5vcoPd50jIW53peMhP1duv3pQy53THM46wdT%2Fgdu&X-Amz-Signature=e19cb4357e6dbbde15e20a06520b3d1ec8b0af1c1a9495dd24342b658f853bca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPBHVQS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFLiQX%2FsAchUhkYzer8W5hIYwTfRHmM6L30W%2BicUBh88AiAxF4siijwabXfeFtmRxU1FWrtXjfVPNsi67aIvVaId8CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27lX6fdTcFMhthndKtwDH2Ob7BCb6taVYe6ozYfR%2BnzhAt2Jzj5oDL%2FVclRBikkqnR28fwXm3bsvr4EuFYtlntSPsA4g78xadmgHzGdu9412lDWsWDGsJBt%2BpxuHMnTkuqaoSyzRsWsjDrIejbCWqlPVgaccnQsweOZ1ANq56Ph9lvRTlEPNfHqGBFA%2BTAchQuc3VniyFURT3df7mTqTJQEFyMWxdCqeaZwm10p09mJ0uuk0gYfsRJj7bAi8Uw30MtsiZiekn%2FsUrvntB21kNSJFZkSbYbZW8hlwNuw0Ygqa8V97LUV6CaGhItpUZlJguoV4PYYoJQp%2FjiH5FI3LkOYxnHjQJ2THcKq8lSB%2Fq4hXN8eYCnQEVbf3s6pcajaqFpmoMpIkH5Yp7ZnBfC5APkFPmzdTcS5I5xhwFlximz%2Fqyv2C36zgrhnVXrVFDeuEeUPvT3yDTcIcSc5ecGcC9N8zVtwhZf5WD4XJE5ckKIxftLCWdfrfodpI3O%2Fz1YmdA70Q1JlVJp2K7k3LAgryYG9uHWLmskWBIFffiYL5VfefhCAxRV2TsX5fMgRR6sOYibsmHV5b2ArDAB10%2B9JFiaa2FWcDhMj0OXebN5K%2BB42DJCC7oQse0wBwrHU2l41AqCZt6a%2FA6IbCf98wr%2B62wQY6pgFg33Kkh9Rgs%2BRtkS9vsNAmyt%2Bbts%2F%2B5kGHLskWjE3UnvNKH6JS7V%2BIVRF0hexsJXzrKGm1%2FlpurQF83E7XJcFEkO4uSzThSNMSN%2B%2BHGJyJos%2F8KKqllDcOlKfMRHydEkwxiqdIwMhEclKXD5%2BdXC7v7rQeNJqny4Wq75C0rYWnZMPQXYcvcvIU5vcoPd50jIW53peMhP1duv3pQy53THM46wdT%2Fgdu&X-Amz-Signature=2a70c36f35a1d9ac88f88578f9bfc3635b48aba3ae279c8a84b5464db35bc80c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPBHVQS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFLiQX%2FsAchUhkYzer8W5hIYwTfRHmM6L30W%2BicUBh88AiAxF4siijwabXfeFtmRxU1FWrtXjfVPNsi67aIvVaId8CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27lX6fdTcFMhthndKtwDH2Ob7BCb6taVYe6ozYfR%2BnzhAt2Jzj5oDL%2FVclRBikkqnR28fwXm3bsvr4EuFYtlntSPsA4g78xadmgHzGdu9412lDWsWDGsJBt%2BpxuHMnTkuqaoSyzRsWsjDrIejbCWqlPVgaccnQsweOZ1ANq56Ph9lvRTlEPNfHqGBFA%2BTAchQuc3VniyFURT3df7mTqTJQEFyMWxdCqeaZwm10p09mJ0uuk0gYfsRJj7bAi8Uw30MtsiZiekn%2FsUrvntB21kNSJFZkSbYbZW8hlwNuw0Ygqa8V97LUV6CaGhItpUZlJguoV4PYYoJQp%2FjiH5FI3LkOYxnHjQJ2THcKq8lSB%2Fq4hXN8eYCnQEVbf3s6pcajaqFpmoMpIkH5Yp7ZnBfC5APkFPmzdTcS5I5xhwFlximz%2Fqyv2C36zgrhnVXrVFDeuEeUPvT3yDTcIcSc5ecGcC9N8zVtwhZf5WD4XJE5ckKIxftLCWdfrfodpI3O%2Fz1YmdA70Q1JlVJp2K7k3LAgryYG9uHWLmskWBIFffiYL5VfefhCAxRV2TsX5fMgRR6sOYibsmHV5b2ArDAB10%2B9JFiaa2FWcDhMj0OXebN5K%2BB42DJCC7oQse0wBwrHU2l41AqCZt6a%2FA6IbCf98wr%2B62wQY6pgFg33Kkh9Rgs%2BRtkS9vsNAmyt%2Bbts%2F%2B5kGHLskWjE3UnvNKH6JS7V%2BIVRF0hexsJXzrKGm1%2FlpurQF83E7XJcFEkO4uSzThSNMSN%2B%2BHGJyJos%2F8KKqllDcOlKfMRHydEkwxiqdIwMhEclKXD5%2BdXC7v7rQeNJqny4Wq75C0rYWnZMPQXYcvcvIU5vcoPd50jIW53peMhP1duv3pQy53THM46wdT%2Fgdu&X-Amz-Signature=391bf9dae5f2d637efec291e6183497a1e71129e1731f25bfb6b96e5e7e2a14c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPBHVQS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFLiQX%2FsAchUhkYzer8W5hIYwTfRHmM6L30W%2BicUBh88AiAxF4siijwabXfeFtmRxU1FWrtXjfVPNsi67aIvVaId8CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27lX6fdTcFMhthndKtwDH2Ob7BCb6taVYe6ozYfR%2BnzhAt2Jzj5oDL%2FVclRBikkqnR28fwXm3bsvr4EuFYtlntSPsA4g78xadmgHzGdu9412lDWsWDGsJBt%2BpxuHMnTkuqaoSyzRsWsjDrIejbCWqlPVgaccnQsweOZ1ANq56Ph9lvRTlEPNfHqGBFA%2BTAchQuc3VniyFURT3df7mTqTJQEFyMWxdCqeaZwm10p09mJ0uuk0gYfsRJj7bAi8Uw30MtsiZiekn%2FsUrvntB21kNSJFZkSbYbZW8hlwNuw0Ygqa8V97LUV6CaGhItpUZlJguoV4PYYoJQp%2FjiH5FI3LkOYxnHjQJ2THcKq8lSB%2Fq4hXN8eYCnQEVbf3s6pcajaqFpmoMpIkH5Yp7ZnBfC5APkFPmzdTcS5I5xhwFlximz%2Fqyv2C36zgrhnVXrVFDeuEeUPvT3yDTcIcSc5ecGcC9N8zVtwhZf5WD4XJE5ckKIxftLCWdfrfodpI3O%2Fz1YmdA70Q1JlVJp2K7k3LAgryYG9uHWLmskWBIFffiYL5VfefhCAxRV2TsX5fMgRR6sOYibsmHV5b2ArDAB10%2B9JFiaa2FWcDhMj0OXebN5K%2BB42DJCC7oQse0wBwrHU2l41AqCZt6a%2FA6IbCf98wr%2B62wQY6pgFg33Kkh9Rgs%2BRtkS9vsNAmyt%2Bbts%2F%2B5kGHLskWjE3UnvNKH6JS7V%2BIVRF0hexsJXzrKGm1%2FlpurQF83E7XJcFEkO4uSzThSNMSN%2B%2BHGJyJos%2F8KKqllDcOlKfMRHydEkwxiqdIwMhEclKXD5%2BdXC7v7rQeNJqny4Wq75C0rYWnZMPQXYcvcvIU5vcoPd50jIW53peMhP1duv3pQy53THM46wdT%2Fgdu&X-Amz-Signature=c8f6eeee73ff2e59353f06e66276c69e24cb293662ca3d565a0476f57b1a9c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPBHVQS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFLiQX%2FsAchUhkYzer8W5hIYwTfRHmM6L30W%2BicUBh88AiAxF4siijwabXfeFtmRxU1FWrtXjfVPNsi67aIvVaId8CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27lX6fdTcFMhthndKtwDH2Ob7BCb6taVYe6ozYfR%2BnzhAt2Jzj5oDL%2FVclRBikkqnR28fwXm3bsvr4EuFYtlntSPsA4g78xadmgHzGdu9412lDWsWDGsJBt%2BpxuHMnTkuqaoSyzRsWsjDrIejbCWqlPVgaccnQsweOZ1ANq56Ph9lvRTlEPNfHqGBFA%2BTAchQuc3VniyFURT3df7mTqTJQEFyMWxdCqeaZwm10p09mJ0uuk0gYfsRJj7bAi8Uw30MtsiZiekn%2FsUrvntB21kNSJFZkSbYbZW8hlwNuw0Ygqa8V97LUV6CaGhItpUZlJguoV4PYYoJQp%2FjiH5FI3LkOYxnHjQJ2THcKq8lSB%2Fq4hXN8eYCnQEVbf3s6pcajaqFpmoMpIkH5Yp7ZnBfC5APkFPmzdTcS5I5xhwFlximz%2Fqyv2C36zgrhnVXrVFDeuEeUPvT3yDTcIcSc5ecGcC9N8zVtwhZf5WD4XJE5ckKIxftLCWdfrfodpI3O%2Fz1YmdA70Q1JlVJp2K7k3LAgryYG9uHWLmskWBIFffiYL5VfefhCAxRV2TsX5fMgRR6sOYibsmHV5b2ArDAB10%2B9JFiaa2FWcDhMj0OXebN5K%2BB42DJCC7oQse0wBwrHU2l41AqCZt6a%2FA6IbCf98wr%2B62wQY6pgFg33Kkh9Rgs%2BRtkS9vsNAmyt%2Bbts%2F%2B5kGHLskWjE3UnvNKH6JS7V%2BIVRF0hexsJXzrKGm1%2FlpurQF83E7XJcFEkO4uSzThSNMSN%2B%2BHGJyJos%2F8KKqllDcOlKfMRHydEkwxiqdIwMhEclKXD5%2BdXC7v7rQeNJqny4Wq75C0rYWnZMPQXYcvcvIU5vcoPd50jIW53peMhP1duv3pQy53THM46wdT%2Fgdu&X-Amz-Signature=5ffe2519afd86130130b89b3f7865fd4aa89f4bfbee2795ba64e803125f23a81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPBHVQS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFLiQX%2FsAchUhkYzer8W5hIYwTfRHmM6L30W%2BicUBh88AiAxF4siijwabXfeFtmRxU1FWrtXjfVPNsi67aIvVaId8CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27lX6fdTcFMhthndKtwDH2Ob7BCb6taVYe6ozYfR%2BnzhAt2Jzj5oDL%2FVclRBikkqnR28fwXm3bsvr4EuFYtlntSPsA4g78xadmgHzGdu9412lDWsWDGsJBt%2BpxuHMnTkuqaoSyzRsWsjDrIejbCWqlPVgaccnQsweOZ1ANq56Ph9lvRTlEPNfHqGBFA%2BTAchQuc3VniyFURT3df7mTqTJQEFyMWxdCqeaZwm10p09mJ0uuk0gYfsRJj7bAi8Uw30MtsiZiekn%2FsUrvntB21kNSJFZkSbYbZW8hlwNuw0Ygqa8V97LUV6CaGhItpUZlJguoV4PYYoJQp%2FjiH5FI3LkOYxnHjQJ2THcKq8lSB%2Fq4hXN8eYCnQEVbf3s6pcajaqFpmoMpIkH5Yp7ZnBfC5APkFPmzdTcS5I5xhwFlximz%2Fqyv2C36zgrhnVXrVFDeuEeUPvT3yDTcIcSc5ecGcC9N8zVtwhZf5WD4XJE5ckKIxftLCWdfrfodpI3O%2Fz1YmdA70Q1JlVJp2K7k3LAgryYG9uHWLmskWBIFffiYL5VfefhCAxRV2TsX5fMgRR6sOYibsmHV5b2ArDAB10%2B9JFiaa2FWcDhMj0OXebN5K%2BB42DJCC7oQse0wBwrHU2l41AqCZt6a%2FA6IbCf98wr%2B62wQY6pgFg33Kkh9Rgs%2BRtkS9vsNAmyt%2Bbts%2F%2B5kGHLskWjE3UnvNKH6JS7V%2BIVRF0hexsJXzrKGm1%2FlpurQF83E7XJcFEkO4uSzThSNMSN%2B%2BHGJyJos%2F8KKqllDcOlKfMRHydEkwxiqdIwMhEclKXD5%2BdXC7v7rQeNJqny4Wq75C0rYWnZMPQXYcvcvIU5vcoPd50jIW53peMhP1duv3pQy53THM46wdT%2Fgdu&X-Amz-Signature=d6a17e3bac2210b9d944f78fbc266a584271240316ffef10f95ebe1a7f21223d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPBHVQS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFLiQX%2FsAchUhkYzer8W5hIYwTfRHmM6L30W%2BicUBh88AiAxF4siijwabXfeFtmRxU1FWrtXjfVPNsi67aIvVaId8CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27lX6fdTcFMhthndKtwDH2Ob7BCb6taVYe6ozYfR%2BnzhAt2Jzj5oDL%2FVclRBikkqnR28fwXm3bsvr4EuFYtlntSPsA4g78xadmgHzGdu9412lDWsWDGsJBt%2BpxuHMnTkuqaoSyzRsWsjDrIejbCWqlPVgaccnQsweOZ1ANq56Ph9lvRTlEPNfHqGBFA%2BTAchQuc3VniyFURT3df7mTqTJQEFyMWxdCqeaZwm10p09mJ0uuk0gYfsRJj7bAi8Uw30MtsiZiekn%2FsUrvntB21kNSJFZkSbYbZW8hlwNuw0Ygqa8V97LUV6CaGhItpUZlJguoV4PYYoJQp%2FjiH5FI3LkOYxnHjQJ2THcKq8lSB%2Fq4hXN8eYCnQEVbf3s6pcajaqFpmoMpIkH5Yp7ZnBfC5APkFPmzdTcS5I5xhwFlximz%2Fqyv2C36zgrhnVXrVFDeuEeUPvT3yDTcIcSc5ecGcC9N8zVtwhZf5WD4XJE5ckKIxftLCWdfrfodpI3O%2Fz1YmdA70Q1JlVJp2K7k3LAgryYG9uHWLmskWBIFffiYL5VfefhCAxRV2TsX5fMgRR6sOYibsmHV5b2ArDAB10%2B9JFiaa2FWcDhMj0OXebN5K%2BB42DJCC7oQse0wBwrHU2l41AqCZt6a%2FA6IbCf98wr%2B62wQY6pgFg33Kkh9Rgs%2BRtkS9vsNAmyt%2Bbts%2F%2B5kGHLskWjE3UnvNKH6JS7V%2BIVRF0hexsJXzrKGm1%2FlpurQF83E7XJcFEkO4uSzThSNMSN%2B%2BHGJyJos%2F8KKqllDcOlKfMRHydEkwxiqdIwMhEclKXD5%2BdXC7v7rQeNJqny4Wq75C0rYWnZMPQXYcvcvIU5vcoPd50jIW53peMhP1duv3pQy53THM46wdT%2Fgdu&X-Amz-Signature=794e0b2004c4bac1b8e86a41ef2ed705b26c44cf0f508f9dff5706c1b0c73ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JPBHVQS%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFLiQX%2FsAchUhkYzer8W5hIYwTfRHmM6L30W%2BicUBh88AiAxF4siijwabXfeFtmRxU1FWrtXjfVPNsi67aIvVaId8CqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27lX6fdTcFMhthndKtwDH2Ob7BCb6taVYe6ozYfR%2BnzhAt2Jzj5oDL%2FVclRBikkqnR28fwXm3bsvr4EuFYtlntSPsA4g78xadmgHzGdu9412lDWsWDGsJBt%2BpxuHMnTkuqaoSyzRsWsjDrIejbCWqlPVgaccnQsweOZ1ANq56Ph9lvRTlEPNfHqGBFA%2BTAchQuc3VniyFURT3df7mTqTJQEFyMWxdCqeaZwm10p09mJ0uuk0gYfsRJj7bAi8Uw30MtsiZiekn%2FsUrvntB21kNSJFZkSbYbZW8hlwNuw0Ygqa8V97LUV6CaGhItpUZlJguoV4PYYoJQp%2FjiH5FI3LkOYxnHjQJ2THcKq8lSB%2Fq4hXN8eYCnQEVbf3s6pcajaqFpmoMpIkH5Yp7ZnBfC5APkFPmzdTcS5I5xhwFlximz%2Fqyv2C36zgrhnVXrVFDeuEeUPvT3yDTcIcSc5ecGcC9N8zVtwhZf5WD4XJE5ckKIxftLCWdfrfodpI3O%2Fz1YmdA70Q1JlVJp2K7k3LAgryYG9uHWLmskWBIFffiYL5VfefhCAxRV2TsX5fMgRR6sOYibsmHV5b2ArDAB10%2B9JFiaa2FWcDhMj0OXebN5K%2BB42DJCC7oQse0wBwrHU2l41AqCZt6a%2FA6IbCf98wr%2B62wQY6pgFg33Kkh9Rgs%2BRtkS9vsNAmyt%2Bbts%2F%2B5kGHLskWjE3UnvNKH6JS7V%2BIVRF0hexsJXzrKGm1%2FlpurQF83E7XJcFEkO4uSzThSNMSN%2B%2BHGJyJos%2F8KKqllDcOlKfMRHydEkwxiqdIwMhEclKXD5%2BdXC7v7rQeNJqny4Wq75C0rYWnZMPQXYcvcvIU5vcoPd50jIW53peMhP1duv3pQy53THM46wdT%2Fgdu&X-Amz-Signature=92bde8a36cfa5e71b579a92b5c47f48c3ff723c7337a491c3fac8f699da60b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
