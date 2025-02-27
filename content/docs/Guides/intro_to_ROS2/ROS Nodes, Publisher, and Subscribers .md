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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXOYLSW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGcn93uzznzw5YK0ElRH2wXGB1C1d0So%2FV4j5%2Fr3Y0B4AiEAgolMUVlTu1mIYcS%2F5sEb1G0lhlQZiMFGQt0XzUuAo%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMkHHEpjnEd0inD%2FvSrcA5mF9iBvdME1SdiCPHj2CJwPFwoKhSQce7hrbJoyqg5BLPowScnD6Q2xPRf6REanAnXx05z4JAjH3oI6W34t%2BKg4x42mDhtE7y4dleUqom1an3KwPFABnoIis2V0PTAawy5hEob514demO8pX8YO9EF4zqta7ACXPaHn23dEPq1QNwWpUTkhUJ70qwxsE9%2Bs1fbOy%2F37kTGhYR9wriEf9mGYZ5BpCXrtH9o32Bk%2F8lsgpsiXx5dF2lmVT2dvriDBnwhzEHgyoqqVOM6njGw9%2BP5ivjLBktWx40f9jyJ86Pn%2BvIXm0t1VHsXR5Odbl0J%2BSJX4kXI07qvIawV6V%2FaLrIL5V1vaV4qWhIgtQ2nq3jRlOdDv5ODMPwpsQ6C00kCdmg9f1%2BwkcZjYREq3pFUR%2Bwxt16XJtfqZ2UPgZlfxAKp2vZdLpCqvwhr8%2FcFH9jIQdH6a1tbKcXJeaiReD1uhnvsr8Ypgax3pGvhhtH406ZWlB2gaZyUP5gk1ENx2YX009OHR9KmpNWBwUsNw8Bjq6BE05TEaYvujItk4fQU%2Bfz3lCzeJ%2FjBEfS%2FQeKlcw%2FddSorI5FbUpsUYvCt3s2XXL1x0msvZIKJxeTD7xFzLWN3RGK35DGid8v5JmTMfMOzRgL4GOqUBekPFG4cij3g9rExDQGW2bA2jxyteSuN25Wbv10J88g%2BxRY902LNyFccowPMFdqwsibJkczRuyCeTxxPu8QHE6OvPmf6Lv4Rl1gcZyT2BgIMGrXgjohn%2BtRLpb7OlOg%2FHaQEk3S4k1iSBgA3cHz2JxScpKNjXAW2kCJVxz6ypobe6Pfpp9WCXAOS6UGZlckKjAA4s1JC9jCb9jqvoSqYdCcQKOZ7R&X-Amz-Signature=3ea22eec94dd9c48c8ba645f5a1649eb92f4a774d6ae9a420a5abfda77fe4260&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXOYLSW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGcn93uzznzw5YK0ElRH2wXGB1C1d0So%2FV4j5%2Fr3Y0B4AiEAgolMUVlTu1mIYcS%2F5sEb1G0lhlQZiMFGQt0XzUuAo%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMkHHEpjnEd0inD%2FvSrcA5mF9iBvdME1SdiCPHj2CJwPFwoKhSQce7hrbJoyqg5BLPowScnD6Q2xPRf6REanAnXx05z4JAjH3oI6W34t%2BKg4x42mDhtE7y4dleUqom1an3KwPFABnoIis2V0PTAawy5hEob514demO8pX8YO9EF4zqta7ACXPaHn23dEPq1QNwWpUTkhUJ70qwxsE9%2Bs1fbOy%2F37kTGhYR9wriEf9mGYZ5BpCXrtH9o32Bk%2F8lsgpsiXx5dF2lmVT2dvriDBnwhzEHgyoqqVOM6njGw9%2BP5ivjLBktWx40f9jyJ86Pn%2BvIXm0t1VHsXR5Odbl0J%2BSJX4kXI07qvIawV6V%2FaLrIL5V1vaV4qWhIgtQ2nq3jRlOdDv5ODMPwpsQ6C00kCdmg9f1%2BwkcZjYREq3pFUR%2Bwxt16XJtfqZ2UPgZlfxAKp2vZdLpCqvwhr8%2FcFH9jIQdH6a1tbKcXJeaiReD1uhnvsr8Ypgax3pGvhhtH406ZWlB2gaZyUP5gk1ENx2YX009OHR9KmpNWBwUsNw8Bjq6BE05TEaYvujItk4fQU%2Bfz3lCzeJ%2FjBEfS%2FQeKlcw%2FddSorI5FbUpsUYvCt3s2XXL1x0msvZIKJxeTD7xFzLWN3RGK35DGid8v5JmTMfMOzRgL4GOqUBekPFG4cij3g9rExDQGW2bA2jxyteSuN25Wbv10J88g%2BxRY902LNyFccowPMFdqwsibJkczRuyCeTxxPu8QHE6OvPmf6Lv4Rl1gcZyT2BgIMGrXgjohn%2BtRLpb7OlOg%2FHaQEk3S4k1iSBgA3cHz2JxScpKNjXAW2kCJVxz6ypobe6Pfpp9WCXAOS6UGZlckKjAA4s1JC9jCb9jqvoSqYdCcQKOZ7R&X-Amz-Signature=860147a59c7b3e73dc66ccb9ec67321f631a83d4fddde166cec2cf4ad0f8a6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXOYLSW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGcn93uzznzw5YK0ElRH2wXGB1C1d0So%2FV4j5%2Fr3Y0B4AiEAgolMUVlTu1mIYcS%2F5sEb1G0lhlQZiMFGQt0XzUuAo%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMkHHEpjnEd0inD%2FvSrcA5mF9iBvdME1SdiCPHj2CJwPFwoKhSQce7hrbJoyqg5BLPowScnD6Q2xPRf6REanAnXx05z4JAjH3oI6W34t%2BKg4x42mDhtE7y4dleUqom1an3KwPFABnoIis2V0PTAawy5hEob514demO8pX8YO9EF4zqta7ACXPaHn23dEPq1QNwWpUTkhUJ70qwxsE9%2Bs1fbOy%2F37kTGhYR9wriEf9mGYZ5BpCXrtH9o32Bk%2F8lsgpsiXx5dF2lmVT2dvriDBnwhzEHgyoqqVOM6njGw9%2BP5ivjLBktWx40f9jyJ86Pn%2BvIXm0t1VHsXR5Odbl0J%2BSJX4kXI07qvIawV6V%2FaLrIL5V1vaV4qWhIgtQ2nq3jRlOdDv5ODMPwpsQ6C00kCdmg9f1%2BwkcZjYREq3pFUR%2Bwxt16XJtfqZ2UPgZlfxAKp2vZdLpCqvwhr8%2FcFH9jIQdH6a1tbKcXJeaiReD1uhnvsr8Ypgax3pGvhhtH406ZWlB2gaZyUP5gk1ENx2YX009OHR9KmpNWBwUsNw8Bjq6BE05TEaYvujItk4fQU%2Bfz3lCzeJ%2FjBEfS%2FQeKlcw%2FddSorI5FbUpsUYvCt3s2XXL1x0msvZIKJxeTD7xFzLWN3RGK35DGid8v5JmTMfMOzRgL4GOqUBekPFG4cij3g9rExDQGW2bA2jxyteSuN25Wbv10J88g%2BxRY902LNyFccowPMFdqwsibJkczRuyCeTxxPu8QHE6OvPmf6Lv4Rl1gcZyT2BgIMGrXgjohn%2BtRLpb7OlOg%2FHaQEk3S4k1iSBgA3cHz2JxScpKNjXAW2kCJVxz6ypobe6Pfpp9WCXAOS6UGZlckKjAA4s1JC9jCb9jqvoSqYdCcQKOZ7R&X-Amz-Signature=7f26ca508c49ffb91e988aa3870c9537a0441c4c6e0b88f1db6a1d1318326cad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXOYLSW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGcn93uzznzw5YK0ElRH2wXGB1C1d0So%2FV4j5%2Fr3Y0B4AiEAgolMUVlTu1mIYcS%2F5sEb1G0lhlQZiMFGQt0XzUuAo%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMkHHEpjnEd0inD%2FvSrcA5mF9iBvdME1SdiCPHj2CJwPFwoKhSQce7hrbJoyqg5BLPowScnD6Q2xPRf6REanAnXx05z4JAjH3oI6W34t%2BKg4x42mDhtE7y4dleUqom1an3KwPFABnoIis2V0PTAawy5hEob514demO8pX8YO9EF4zqta7ACXPaHn23dEPq1QNwWpUTkhUJ70qwxsE9%2Bs1fbOy%2F37kTGhYR9wriEf9mGYZ5BpCXrtH9o32Bk%2F8lsgpsiXx5dF2lmVT2dvriDBnwhzEHgyoqqVOM6njGw9%2BP5ivjLBktWx40f9jyJ86Pn%2BvIXm0t1VHsXR5Odbl0J%2BSJX4kXI07qvIawV6V%2FaLrIL5V1vaV4qWhIgtQ2nq3jRlOdDv5ODMPwpsQ6C00kCdmg9f1%2BwkcZjYREq3pFUR%2Bwxt16XJtfqZ2UPgZlfxAKp2vZdLpCqvwhr8%2FcFH9jIQdH6a1tbKcXJeaiReD1uhnvsr8Ypgax3pGvhhtH406ZWlB2gaZyUP5gk1ENx2YX009OHR9KmpNWBwUsNw8Bjq6BE05TEaYvujItk4fQU%2Bfz3lCzeJ%2FjBEfS%2FQeKlcw%2FddSorI5FbUpsUYvCt3s2XXL1x0msvZIKJxeTD7xFzLWN3RGK35DGid8v5JmTMfMOzRgL4GOqUBekPFG4cij3g9rExDQGW2bA2jxyteSuN25Wbv10J88g%2BxRY902LNyFccowPMFdqwsibJkczRuyCeTxxPu8QHE6OvPmf6Lv4Rl1gcZyT2BgIMGrXgjohn%2BtRLpb7OlOg%2FHaQEk3S4k1iSBgA3cHz2JxScpKNjXAW2kCJVxz6ypobe6Pfpp9WCXAOS6UGZlckKjAA4s1JC9jCb9jqvoSqYdCcQKOZ7R&X-Amz-Signature=cc0e9a78e8060c9514b8fccb21b8fcfe51dcb17870b679f08e55acd9bd83a736&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXOYLSW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGcn93uzznzw5YK0ElRH2wXGB1C1d0So%2FV4j5%2Fr3Y0B4AiEAgolMUVlTu1mIYcS%2F5sEb1G0lhlQZiMFGQt0XzUuAo%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMkHHEpjnEd0inD%2FvSrcA5mF9iBvdME1SdiCPHj2CJwPFwoKhSQce7hrbJoyqg5BLPowScnD6Q2xPRf6REanAnXx05z4JAjH3oI6W34t%2BKg4x42mDhtE7y4dleUqom1an3KwPFABnoIis2V0PTAawy5hEob514demO8pX8YO9EF4zqta7ACXPaHn23dEPq1QNwWpUTkhUJ70qwxsE9%2Bs1fbOy%2F37kTGhYR9wriEf9mGYZ5BpCXrtH9o32Bk%2F8lsgpsiXx5dF2lmVT2dvriDBnwhzEHgyoqqVOM6njGw9%2BP5ivjLBktWx40f9jyJ86Pn%2BvIXm0t1VHsXR5Odbl0J%2BSJX4kXI07qvIawV6V%2FaLrIL5V1vaV4qWhIgtQ2nq3jRlOdDv5ODMPwpsQ6C00kCdmg9f1%2BwkcZjYREq3pFUR%2Bwxt16XJtfqZ2UPgZlfxAKp2vZdLpCqvwhr8%2FcFH9jIQdH6a1tbKcXJeaiReD1uhnvsr8Ypgax3pGvhhtH406ZWlB2gaZyUP5gk1ENx2YX009OHR9KmpNWBwUsNw8Bjq6BE05TEaYvujItk4fQU%2Bfz3lCzeJ%2FjBEfS%2FQeKlcw%2FddSorI5FbUpsUYvCt3s2XXL1x0msvZIKJxeTD7xFzLWN3RGK35DGid8v5JmTMfMOzRgL4GOqUBekPFG4cij3g9rExDQGW2bA2jxyteSuN25Wbv10J88g%2BxRY902LNyFccowPMFdqwsibJkczRuyCeTxxPu8QHE6OvPmf6Lv4Rl1gcZyT2BgIMGrXgjohn%2BtRLpb7OlOg%2FHaQEk3S4k1iSBgA3cHz2JxScpKNjXAW2kCJVxz6ypobe6Pfpp9WCXAOS6UGZlckKjAA4s1JC9jCb9jqvoSqYdCcQKOZ7R&X-Amz-Signature=9b1e7d52dd1615230cb73d49e7716fb3beaa64e589d482b57c26ac5e60ea0509&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXOYLSW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGcn93uzznzw5YK0ElRH2wXGB1C1d0So%2FV4j5%2Fr3Y0B4AiEAgolMUVlTu1mIYcS%2F5sEb1G0lhlQZiMFGQt0XzUuAo%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMkHHEpjnEd0inD%2FvSrcA5mF9iBvdME1SdiCPHj2CJwPFwoKhSQce7hrbJoyqg5BLPowScnD6Q2xPRf6REanAnXx05z4JAjH3oI6W34t%2BKg4x42mDhtE7y4dleUqom1an3KwPFABnoIis2V0PTAawy5hEob514demO8pX8YO9EF4zqta7ACXPaHn23dEPq1QNwWpUTkhUJ70qwxsE9%2Bs1fbOy%2F37kTGhYR9wriEf9mGYZ5BpCXrtH9o32Bk%2F8lsgpsiXx5dF2lmVT2dvriDBnwhzEHgyoqqVOM6njGw9%2BP5ivjLBktWx40f9jyJ86Pn%2BvIXm0t1VHsXR5Odbl0J%2BSJX4kXI07qvIawV6V%2FaLrIL5V1vaV4qWhIgtQ2nq3jRlOdDv5ODMPwpsQ6C00kCdmg9f1%2BwkcZjYREq3pFUR%2Bwxt16XJtfqZ2UPgZlfxAKp2vZdLpCqvwhr8%2FcFH9jIQdH6a1tbKcXJeaiReD1uhnvsr8Ypgax3pGvhhtH406ZWlB2gaZyUP5gk1ENx2YX009OHR9KmpNWBwUsNw8Bjq6BE05TEaYvujItk4fQU%2Bfz3lCzeJ%2FjBEfS%2FQeKlcw%2FddSorI5FbUpsUYvCt3s2XXL1x0msvZIKJxeTD7xFzLWN3RGK35DGid8v5JmTMfMOzRgL4GOqUBekPFG4cij3g9rExDQGW2bA2jxyteSuN25Wbv10J88g%2BxRY902LNyFccowPMFdqwsibJkczRuyCeTxxPu8QHE6OvPmf6Lv4Rl1gcZyT2BgIMGrXgjohn%2BtRLpb7OlOg%2FHaQEk3S4k1iSBgA3cHz2JxScpKNjXAW2kCJVxz6ypobe6Pfpp9WCXAOS6UGZlckKjAA4s1JC9jCb9jqvoSqYdCcQKOZ7R&X-Amz-Signature=88c1b6f0e84e7da589bcf356d95b350219be94aad41a22fd688bab517debd3eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXOYLSW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGcn93uzznzw5YK0ElRH2wXGB1C1d0So%2FV4j5%2Fr3Y0B4AiEAgolMUVlTu1mIYcS%2F5sEb1G0lhlQZiMFGQt0XzUuAo%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMkHHEpjnEd0inD%2FvSrcA5mF9iBvdME1SdiCPHj2CJwPFwoKhSQce7hrbJoyqg5BLPowScnD6Q2xPRf6REanAnXx05z4JAjH3oI6W34t%2BKg4x42mDhtE7y4dleUqom1an3KwPFABnoIis2V0PTAawy5hEob514demO8pX8YO9EF4zqta7ACXPaHn23dEPq1QNwWpUTkhUJ70qwxsE9%2Bs1fbOy%2F37kTGhYR9wriEf9mGYZ5BpCXrtH9o32Bk%2F8lsgpsiXx5dF2lmVT2dvriDBnwhzEHgyoqqVOM6njGw9%2BP5ivjLBktWx40f9jyJ86Pn%2BvIXm0t1VHsXR5Odbl0J%2BSJX4kXI07qvIawV6V%2FaLrIL5V1vaV4qWhIgtQ2nq3jRlOdDv5ODMPwpsQ6C00kCdmg9f1%2BwkcZjYREq3pFUR%2Bwxt16XJtfqZ2UPgZlfxAKp2vZdLpCqvwhr8%2FcFH9jIQdH6a1tbKcXJeaiReD1uhnvsr8Ypgax3pGvhhtH406ZWlB2gaZyUP5gk1ENx2YX009OHR9KmpNWBwUsNw8Bjq6BE05TEaYvujItk4fQU%2Bfz3lCzeJ%2FjBEfS%2FQeKlcw%2FddSorI5FbUpsUYvCt3s2XXL1x0msvZIKJxeTD7xFzLWN3RGK35DGid8v5JmTMfMOzRgL4GOqUBekPFG4cij3g9rExDQGW2bA2jxyteSuN25Wbv10J88g%2BxRY902LNyFccowPMFdqwsibJkczRuyCeTxxPu8QHE6OvPmf6Lv4Rl1gcZyT2BgIMGrXgjohn%2BtRLpb7OlOg%2FHaQEk3S4k1iSBgA3cHz2JxScpKNjXAW2kCJVxz6ypobe6Pfpp9WCXAOS6UGZlckKjAA4s1JC9jCb9jqvoSqYdCcQKOZ7R&X-Amz-Signature=fc76054965709d0d11aa3d7e12404391225d30a6b08d2834a0a6fa78b51eb8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WXOYLSW%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIGcn93uzznzw5YK0ElRH2wXGB1C1d0So%2FV4j5%2Fr3Y0B4AiEAgolMUVlTu1mIYcS%2F5sEb1G0lhlQZiMFGQt0XzUuAo%2B0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMkHHEpjnEd0inD%2FvSrcA5mF9iBvdME1SdiCPHj2CJwPFwoKhSQce7hrbJoyqg5BLPowScnD6Q2xPRf6REanAnXx05z4JAjH3oI6W34t%2BKg4x42mDhtE7y4dleUqom1an3KwPFABnoIis2V0PTAawy5hEob514demO8pX8YO9EF4zqta7ACXPaHn23dEPq1QNwWpUTkhUJ70qwxsE9%2Bs1fbOy%2F37kTGhYR9wriEf9mGYZ5BpCXrtH9o32Bk%2F8lsgpsiXx5dF2lmVT2dvriDBnwhzEHgyoqqVOM6njGw9%2BP5ivjLBktWx40f9jyJ86Pn%2BvIXm0t1VHsXR5Odbl0J%2BSJX4kXI07qvIawV6V%2FaLrIL5V1vaV4qWhIgtQ2nq3jRlOdDv5ODMPwpsQ6C00kCdmg9f1%2BwkcZjYREq3pFUR%2Bwxt16XJtfqZ2UPgZlfxAKp2vZdLpCqvwhr8%2FcFH9jIQdH6a1tbKcXJeaiReD1uhnvsr8Ypgax3pGvhhtH406ZWlB2gaZyUP5gk1ENx2YX009OHR9KmpNWBwUsNw8Bjq6BE05TEaYvujItk4fQU%2Bfz3lCzeJ%2FjBEfS%2FQeKlcw%2FddSorI5FbUpsUYvCt3s2XXL1x0msvZIKJxeTD7xFzLWN3RGK35DGid8v5JmTMfMOzRgL4GOqUBekPFG4cij3g9rExDQGW2bA2jxyteSuN25Wbv10J88g%2BxRY902LNyFccowPMFdqwsibJkczRuyCeTxxPu8QHE6OvPmf6Lv4Rl1gcZyT2BgIMGrXgjohn%2BtRLpb7OlOg%2FHaQEk3S4k1iSBgA3cHz2JxScpKNjXAW2kCJVxz6ypobe6Pfpp9WCXAOS6UGZlckKjAA4s1JC9jCb9jqvoSqYdCcQKOZ7R&X-Amz-Signature=39480f99c7adfae0f31a7af4e2d0bd7c94143f7fd47093440ca1c5133850d9b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
