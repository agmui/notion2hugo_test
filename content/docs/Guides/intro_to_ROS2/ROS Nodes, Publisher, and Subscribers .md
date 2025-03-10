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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWVWMZQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH%2BpZRHF8OajfoJ1eoYzl9uEV%2BOgyvHlf9i06mMGGtmnAiEAjAvUtynlJjoUGKEC4KXBOLeLeUdWawD2ph%2Bcq%2Fms1jwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0VG86SehNEfX8xSSrcAwDyrgM02Yk2mgc0lDP%2BqeFUB7fDniT5v43riSS5ZEF9HZaN2TrrmLT%2BsidzdpN47X59W7aPrAEiu2ndQVicepzU4xukhgInVfJhtOEZXmxPRUZipwMHW8NdobP5aW7KmyUnTzBwUGu1LTmMlHcLYxGjIgQ60vfsMzLFN40JiMEpOtVNnLfr4TbUq%2FeomzqPAGTzf%2BgvEHC075arz5jngH0e7pVaeh%2BMPvk9ubDXX75eySOvd90q1E%2FyXNvbDnGJBGafx3E1YcGndjYKPb9XW1DmHSwKhQ7af5pJCxKIvols99yL2C7dSRtnm7cIiGbntPgM50D7V1WUkO6q5i5%2Bqg1usxkk6uJQWz5z7dFQf%2BsQQjUVgnXYobWPLTt1Totl0I1IprdXx3nP8dmVJp9FukiF4JG5NXN9NYbWb6169mijRqgpKNb1sm1s5shGm%2FwbYjskRmhkTJ7q9WFMQX34a2gn1xOBNiz%2BT5IwWbB1IYuPEvwz2aPI6PhAP170BX9hzQwTyW0n11N%2BcpWcCP2g3w%2Bw6rSffGQTkuLtPWlYogf70dAobqVuGvZ2WIVsj7%2BpMrVSo9TNLtdeAdWVbLvyhF7kqYOyWIVH338w1FkADuxOKfy2eoXrHgRUSVc0MJz7uL4GOqUB7g3RYmFaSjm7FBZEjB39PoDSdfoxUJVL%2F35kJIC9zQXtQW28Fh%2FJVQx%2Bs39UX0b1KliyfB7ytKX3gG8d7qNke8Sow30c0U8idgmG%2Bfv33x8bEOTQApWCqPMQ9ScgTVZW3pf2Vsh5GVokihKGTkCxoa6fRDby9y1vCILN%2BaPMfhMZePGMLTr%2F%2Fl1SwJJI4BcNwXolf9CUX4z78Xho8p1LyPLyIAup&X-Amz-Signature=4feeba6a6a767f1fbc2e915b75b596b55179c71c5381aa26644bf39f3645e080&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWVWMZQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH%2BpZRHF8OajfoJ1eoYzl9uEV%2BOgyvHlf9i06mMGGtmnAiEAjAvUtynlJjoUGKEC4KXBOLeLeUdWawD2ph%2Bcq%2Fms1jwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0VG86SehNEfX8xSSrcAwDyrgM02Yk2mgc0lDP%2BqeFUB7fDniT5v43riSS5ZEF9HZaN2TrrmLT%2BsidzdpN47X59W7aPrAEiu2ndQVicepzU4xukhgInVfJhtOEZXmxPRUZipwMHW8NdobP5aW7KmyUnTzBwUGu1LTmMlHcLYxGjIgQ60vfsMzLFN40JiMEpOtVNnLfr4TbUq%2FeomzqPAGTzf%2BgvEHC075arz5jngH0e7pVaeh%2BMPvk9ubDXX75eySOvd90q1E%2FyXNvbDnGJBGafx3E1YcGndjYKPb9XW1DmHSwKhQ7af5pJCxKIvols99yL2C7dSRtnm7cIiGbntPgM50D7V1WUkO6q5i5%2Bqg1usxkk6uJQWz5z7dFQf%2BsQQjUVgnXYobWPLTt1Totl0I1IprdXx3nP8dmVJp9FukiF4JG5NXN9NYbWb6169mijRqgpKNb1sm1s5shGm%2FwbYjskRmhkTJ7q9WFMQX34a2gn1xOBNiz%2BT5IwWbB1IYuPEvwz2aPI6PhAP170BX9hzQwTyW0n11N%2BcpWcCP2g3w%2Bw6rSffGQTkuLtPWlYogf70dAobqVuGvZ2WIVsj7%2BpMrVSo9TNLtdeAdWVbLvyhF7kqYOyWIVH338w1FkADuxOKfy2eoXrHgRUSVc0MJz7uL4GOqUB7g3RYmFaSjm7FBZEjB39PoDSdfoxUJVL%2F35kJIC9zQXtQW28Fh%2FJVQx%2Bs39UX0b1KliyfB7ytKX3gG8d7qNke8Sow30c0U8idgmG%2Bfv33x8bEOTQApWCqPMQ9ScgTVZW3pf2Vsh5GVokihKGTkCxoa6fRDby9y1vCILN%2BaPMfhMZePGMLTr%2F%2Fl1SwJJI4BcNwXolf9CUX4z78Xho8p1LyPLyIAup&X-Amz-Signature=cda7c0ed9f36249a4b6ae370fb529869878903f707de85529b8e6b9030778539&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWVWMZQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH%2BpZRHF8OajfoJ1eoYzl9uEV%2BOgyvHlf9i06mMGGtmnAiEAjAvUtynlJjoUGKEC4KXBOLeLeUdWawD2ph%2Bcq%2Fms1jwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0VG86SehNEfX8xSSrcAwDyrgM02Yk2mgc0lDP%2BqeFUB7fDniT5v43riSS5ZEF9HZaN2TrrmLT%2BsidzdpN47X59W7aPrAEiu2ndQVicepzU4xukhgInVfJhtOEZXmxPRUZipwMHW8NdobP5aW7KmyUnTzBwUGu1LTmMlHcLYxGjIgQ60vfsMzLFN40JiMEpOtVNnLfr4TbUq%2FeomzqPAGTzf%2BgvEHC075arz5jngH0e7pVaeh%2BMPvk9ubDXX75eySOvd90q1E%2FyXNvbDnGJBGafx3E1YcGndjYKPb9XW1DmHSwKhQ7af5pJCxKIvols99yL2C7dSRtnm7cIiGbntPgM50D7V1WUkO6q5i5%2Bqg1usxkk6uJQWz5z7dFQf%2BsQQjUVgnXYobWPLTt1Totl0I1IprdXx3nP8dmVJp9FukiF4JG5NXN9NYbWb6169mijRqgpKNb1sm1s5shGm%2FwbYjskRmhkTJ7q9WFMQX34a2gn1xOBNiz%2BT5IwWbB1IYuPEvwz2aPI6PhAP170BX9hzQwTyW0n11N%2BcpWcCP2g3w%2Bw6rSffGQTkuLtPWlYogf70dAobqVuGvZ2WIVsj7%2BpMrVSo9TNLtdeAdWVbLvyhF7kqYOyWIVH338w1FkADuxOKfy2eoXrHgRUSVc0MJz7uL4GOqUB7g3RYmFaSjm7FBZEjB39PoDSdfoxUJVL%2F35kJIC9zQXtQW28Fh%2FJVQx%2Bs39UX0b1KliyfB7ytKX3gG8d7qNke8Sow30c0U8idgmG%2Bfv33x8bEOTQApWCqPMQ9ScgTVZW3pf2Vsh5GVokihKGTkCxoa6fRDby9y1vCILN%2BaPMfhMZePGMLTr%2F%2Fl1SwJJI4BcNwXolf9CUX4z78Xho8p1LyPLyIAup&X-Amz-Signature=1bdc78bcb7356343aa589d94a345ecc77519ea10acba9e1094b6a4fe3c4d16f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWVWMZQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH%2BpZRHF8OajfoJ1eoYzl9uEV%2BOgyvHlf9i06mMGGtmnAiEAjAvUtynlJjoUGKEC4KXBOLeLeUdWawD2ph%2Bcq%2Fms1jwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0VG86SehNEfX8xSSrcAwDyrgM02Yk2mgc0lDP%2BqeFUB7fDniT5v43riSS5ZEF9HZaN2TrrmLT%2BsidzdpN47X59W7aPrAEiu2ndQVicepzU4xukhgInVfJhtOEZXmxPRUZipwMHW8NdobP5aW7KmyUnTzBwUGu1LTmMlHcLYxGjIgQ60vfsMzLFN40JiMEpOtVNnLfr4TbUq%2FeomzqPAGTzf%2BgvEHC075arz5jngH0e7pVaeh%2BMPvk9ubDXX75eySOvd90q1E%2FyXNvbDnGJBGafx3E1YcGndjYKPb9XW1DmHSwKhQ7af5pJCxKIvols99yL2C7dSRtnm7cIiGbntPgM50D7V1WUkO6q5i5%2Bqg1usxkk6uJQWz5z7dFQf%2BsQQjUVgnXYobWPLTt1Totl0I1IprdXx3nP8dmVJp9FukiF4JG5NXN9NYbWb6169mijRqgpKNb1sm1s5shGm%2FwbYjskRmhkTJ7q9WFMQX34a2gn1xOBNiz%2BT5IwWbB1IYuPEvwz2aPI6PhAP170BX9hzQwTyW0n11N%2BcpWcCP2g3w%2Bw6rSffGQTkuLtPWlYogf70dAobqVuGvZ2WIVsj7%2BpMrVSo9TNLtdeAdWVbLvyhF7kqYOyWIVH338w1FkADuxOKfy2eoXrHgRUSVc0MJz7uL4GOqUB7g3RYmFaSjm7FBZEjB39PoDSdfoxUJVL%2F35kJIC9zQXtQW28Fh%2FJVQx%2Bs39UX0b1KliyfB7ytKX3gG8d7qNke8Sow30c0U8idgmG%2Bfv33x8bEOTQApWCqPMQ9ScgTVZW3pf2Vsh5GVokihKGTkCxoa6fRDby9y1vCILN%2BaPMfhMZePGMLTr%2F%2Fl1SwJJI4BcNwXolf9CUX4z78Xho8p1LyPLyIAup&X-Amz-Signature=ad66cd194faf8dffd975bf36ae0f9a22741fdb9bb0ba7572b86d8c4f3ff5a744&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWVWMZQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH%2BpZRHF8OajfoJ1eoYzl9uEV%2BOgyvHlf9i06mMGGtmnAiEAjAvUtynlJjoUGKEC4KXBOLeLeUdWawD2ph%2Bcq%2Fms1jwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0VG86SehNEfX8xSSrcAwDyrgM02Yk2mgc0lDP%2BqeFUB7fDniT5v43riSS5ZEF9HZaN2TrrmLT%2BsidzdpN47X59W7aPrAEiu2ndQVicepzU4xukhgInVfJhtOEZXmxPRUZipwMHW8NdobP5aW7KmyUnTzBwUGu1LTmMlHcLYxGjIgQ60vfsMzLFN40JiMEpOtVNnLfr4TbUq%2FeomzqPAGTzf%2BgvEHC075arz5jngH0e7pVaeh%2BMPvk9ubDXX75eySOvd90q1E%2FyXNvbDnGJBGafx3E1YcGndjYKPb9XW1DmHSwKhQ7af5pJCxKIvols99yL2C7dSRtnm7cIiGbntPgM50D7V1WUkO6q5i5%2Bqg1usxkk6uJQWz5z7dFQf%2BsQQjUVgnXYobWPLTt1Totl0I1IprdXx3nP8dmVJp9FukiF4JG5NXN9NYbWb6169mijRqgpKNb1sm1s5shGm%2FwbYjskRmhkTJ7q9WFMQX34a2gn1xOBNiz%2BT5IwWbB1IYuPEvwz2aPI6PhAP170BX9hzQwTyW0n11N%2BcpWcCP2g3w%2Bw6rSffGQTkuLtPWlYogf70dAobqVuGvZ2WIVsj7%2BpMrVSo9TNLtdeAdWVbLvyhF7kqYOyWIVH338w1FkADuxOKfy2eoXrHgRUSVc0MJz7uL4GOqUB7g3RYmFaSjm7FBZEjB39PoDSdfoxUJVL%2F35kJIC9zQXtQW28Fh%2FJVQx%2Bs39UX0b1KliyfB7ytKX3gG8d7qNke8Sow30c0U8idgmG%2Bfv33x8bEOTQApWCqPMQ9ScgTVZW3pf2Vsh5GVokihKGTkCxoa6fRDby9y1vCILN%2BaPMfhMZePGMLTr%2F%2Fl1SwJJI4BcNwXolf9CUX4z78Xho8p1LyPLyIAup&X-Amz-Signature=990c51df4c380805a0c2a9cf78e39ed2e5033566df1f7f9b5b653d532ad78c54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWVWMZQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH%2BpZRHF8OajfoJ1eoYzl9uEV%2BOgyvHlf9i06mMGGtmnAiEAjAvUtynlJjoUGKEC4KXBOLeLeUdWawD2ph%2Bcq%2Fms1jwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0VG86SehNEfX8xSSrcAwDyrgM02Yk2mgc0lDP%2BqeFUB7fDniT5v43riSS5ZEF9HZaN2TrrmLT%2BsidzdpN47X59W7aPrAEiu2ndQVicepzU4xukhgInVfJhtOEZXmxPRUZipwMHW8NdobP5aW7KmyUnTzBwUGu1LTmMlHcLYxGjIgQ60vfsMzLFN40JiMEpOtVNnLfr4TbUq%2FeomzqPAGTzf%2BgvEHC075arz5jngH0e7pVaeh%2BMPvk9ubDXX75eySOvd90q1E%2FyXNvbDnGJBGafx3E1YcGndjYKPb9XW1DmHSwKhQ7af5pJCxKIvols99yL2C7dSRtnm7cIiGbntPgM50D7V1WUkO6q5i5%2Bqg1usxkk6uJQWz5z7dFQf%2BsQQjUVgnXYobWPLTt1Totl0I1IprdXx3nP8dmVJp9FukiF4JG5NXN9NYbWb6169mijRqgpKNb1sm1s5shGm%2FwbYjskRmhkTJ7q9WFMQX34a2gn1xOBNiz%2BT5IwWbB1IYuPEvwz2aPI6PhAP170BX9hzQwTyW0n11N%2BcpWcCP2g3w%2Bw6rSffGQTkuLtPWlYogf70dAobqVuGvZ2WIVsj7%2BpMrVSo9TNLtdeAdWVbLvyhF7kqYOyWIVH338w1FkADuxOKfy2eoXrHgRUSVc0MJz7uL4GOqUB7g3RYmFaSjm7FBZEjB39PoDSdfoxUJVL%2F35kJIC9zQXtQW28Fh%2FJVQx%2Bs39UX0b1KliyfB7ytKX3gG8d7qNke8Sow30c0U8idgmG%2Bfv33x8bEOTQApWCqPMQ9ScgTVZW3pf2Vsh5GVokihKGTkCxoa6fRDby9y1vCILN%2BaPMfhMZePGMLTr%2F%2Fl1SwJJI4BcNwXolf9CUX4z78Xho8p1LyPLyIAup&X-Amz-Signature=17c7cbf3ee1d53a1b7126306ecfa29179a4d6384982fbff9f79eb634514c28a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWVWMZQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH%2BpZRHF8OajfoJ1eoYzl9uEV%2BOgyvHlf9i06mMGGtmnAiEAjAvUtynlJjoUGKEC4KXBOLeLeUdWawD2ph%2Bcq%2Fms1jwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0VG86SehNEfX8xSSrcAwDyrgM02Yk2mgc0lDP%2BqeFUB7fDniT5v43riSS5ZEF9HZaN2TrrmLT%2BsidzdpN47X59W7aPrAEiu2ndQVicepzU4xukhgInVfJhtOEZXmxPRUZipwMHW8NdobP5aW7KmyUnTzBwUGu1LTmMlHcLYxGjIgQ60vfsMzLFN40JiMEpOtVNnLfr4TbUq%2FeomzqPAGTzf%2BgvEHC075arz5jngH0e7pVaeh%2BMPvk9ubDXX75eySOvd90q1E%2FyXNvbDnGJBGafx3E1YcGndjYKPb9XW1DmHSwKhQ7af5pJCxKIvols99yL2C7dSRtnm7cIiGbntPgM50D7V1WUkO6q5i5%2Bqg1usxkk6uJQWz5z7dFQf%2BsQQjUVgnXYobWPLTt1Totl0I1IprdXx3nP8dmVJp9FukiF4JG5NXN9NYbWb6169mijRqgpKNb1sm1s5shGm%2FwbYjskRmhkTJ7q9WFMQX34a2gn1xOBNiz%2BT5IwWbB1IYuPEvwz2aPI6PhAP170BX9hzQwTyW0n11N%2BcpWcCP2g3w%2Bw6rSffGQTkuLtPWlYogf70dAobqVuGvZ2WIVsj7%2BpMrVSo9TNLtdeAdWVbLvyhF7kqYOyWIVH338w1FkADuxOKfy2eoXrHgRUSVc0MJz7uL4GOqUB7g3RYmFaSjm7FBZEjB39PoDSdfoxUJVL%2F35kJIC9zQXtQW28Fh%2FJVQx%2Bs39UX0b1KliyfB7ytKX3gG8d7qNke8Sow30c0U8idgmG%2Bfv33x8bEOTQApWCqPMQ9ScgTVZW3pf2Vsh5GVokihKGTkCxoa6fRDby9y1vCILN%2BaPMfhMZePGMLTr%2F%2Fl1SwJJI4BcNwXolf9CUX4z78Xho8p1LyPLyIAup&X-Amz-Signature=0cfab85deced312cada629587a7381e329ed42069a2d116a3bc4d8d585506b75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDWVWMZQ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH%2BpZRHF8OajfoJ1eoYzl9uEV%2BOgyvHlf9i06mMGGtmnAiEAjAvUtynlJjoUGKEC4KXBOLeLeUdWawD2ph%2Bcq%2Fms1jwqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA0VG86SehNEfX8xSSrcAwDyrgM02Yk2mgc0lDP%2BqeFUB7fDniT5v43riSS5ZEF9HZaN2TrrmLT%2BsidzdpN47X59W7aPrAEiu2ndQVicepzU4xukhgInVfJhtOEZXmxPRUZipwMHW8NdobP5aW7KmyUnTzBwUGu1LTmMlHcLYxGjIgQ60vfsMzLFN40JiMEpOtVNnLfr4TbUq%2FeomzqPAGTzf%2BgvEHC075arz5jngH0e7pVaeh%2BMPvk9ubDXX75eySOvd90q1E%2FyXNvbDnGJBGafx3E1YcGndjYKPb9XW1DmHSwKhQ7af5pJCxKIvols99yL2C7dSRtnm7cIiGbntPgM50D7V1WUkO6q5i5%2Bqg1usxkk6uJQWz5z7dFQf%2BsQQjUVgnXYobWPLTt1Totl0I1IprdXx3nP8dmVJp9FukiF4JG5NXN9NYbWb6169mijRqgpKNb1sm1s5shGm%2FwbYjskRmhkTJ7q9WFMQX34a2gn1xOBNiz%2BT5IwWbB1IYuPEvwz2aPI6PhAP170BX9hzQwTyW0n11N%2BcpWcCP2g3w%2Bw6rSffGQTkuLtPWlYogf70dAobqVuGvZ2WIVsj7%2BpMrVSo9TNLtdeAdWVbLvyhF7kqYOyWIVH338w1FkADuxOKfy2eoXrHgRUSVc0MJz7uL4GOqUB7g3RYmFaSjm7FBZEjB39PoDSdfoxUJVL%2F35kJIC9zQXtQW28Fh%2FJVQx%2Bs39UX0b1KliyfB7ytKX3gG8d7qNke8Sow30c0U8idgmG%2Bfv33x8bEOTQApWCqPMQ9ScgTVZW3pf2Vsh5GVokihKGTkCxoa6fRDby9y1vCILN%2BaPMfhMZePGMLTr%2F%2Fl1SwJJI4BcNwXolf9CUX4z78Xho8p1LyPLyIAup&X-Amz-Signature=d910ee1b50edf4680d940fe41b69adb9ab3a9fa4aae02ecad8b9dc42e7c751f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
