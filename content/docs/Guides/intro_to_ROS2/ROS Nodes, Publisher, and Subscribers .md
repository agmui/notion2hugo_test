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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZHBCIZ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5DJGDeh3H5hqmy%2BEA5sQDEdMrXJ16jqd5OAdlE3QBWAiAv0GR%2BzFhAJyaW4pDh2apz6U6VhuGYpsLQQJtg3afQLir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfq2SySGgwxRPCuDhKtwDJ5S55FNlH0Vxk7gCwzCQK6S7DXFfYveSym9LjvUbOL%2BISEJYUPn4sgeJLrTAkFuc6g0k%2FnZIgI4NgF55heBW8%2FYqHWNe3%2BH3z95KZPMCWS87ruy1QZLAZnkzWTyodrDKm5fIocfaQOn2TESXebPASZ5SdmvTKDr%2Frmf7RJwnMS6I0zN6wXjf0l1sVVm8pVga1GiFSv41l3%2Bp3nJKEcp%2FPQCKydNepUrLUc%2BERzx%2FGiz7yO%2FlkcS3LrS%2B1UtGYzF0j70S1TZQJwI7e5URLgiffFBZ2CCrBeRb8si88ExNy64oK5zsfszW92H9Oj0MIPDkphsyQmTBImkZHa%2B3%2B1ynt1a5C8psuQNKOtfBeiIV4IruRZP9iXFcRP7C1aRUJiOVrzFEzviuO3%2FqLIU1fpWZA9KF9E2%2F%2Frag8q0vN85T8bsP%2FDhF3yFvX8d2rvGsNEYRueRGDhNjg%2FQkPsWMPWr9OFEuI8QMp23F1Y1w0nKJRDDPf8LUJ14a7nRo2eZuLpkaWgijMdlHit1F0Wduuj1cuekbvxr3j0ulwczBt1m6P8IgvZX7Zpk%2BqV0U0IB8lkB4PE5iPxGlep1F1t2PjWZW7ugC%2Ffd%2FD24cp%2BgTEHzOVejno9WMgemTvyN91YQw%2FomgyAY6pgHyRFS8iKzLpcl62Ma6I%2BgT%2BWIyXQOLRwUiKbK6%2FdgoxQUNtDjJjZBmAzQbprYcB9NjPE%2FPOzly2W0gmbxVWwi8NsGDOkSX3FUGsVAjHKl8qZSPOYglH2WaI6U3bXh2o3cC0P8uQhvkITuRO5fAouZB1hTcuKia%2FpEQ%2BgXV9AppjSWRlNBoRuJ%2F08bo0pqBQuLjfyKjX8YcZi%2BfJ%2BzHf%2BJertcpmlbw&X-Amz-Signature=a9a5f3d646e4b60ba9daeab0d476f686276e868cf655ddb0b199230a5a83c1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZHBCIZ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5DJGDeh3H5hqmy%2BEA5sQDEdMrXJ16jqd5OAdlE3QBWAiAv0GR%2BzFhAJyaW4pDh2apz6U6VhuGYpsLQQJtg3afQLir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfq2SySGgwxRPCuDhKtwDJ5S55FNlH0Vxk7gCwzCQK6S7DXFfYveSym9LjvUbOL%2BISEJYUPn4sgeJLrTAkFuc6g0k%2FnZIgI4NgF55heBW8%2FYqHWNe3%2BH3z95KZPMCWS87ruy1QZLAZnkzWTyodrDKm5fIocfaQOn2TESXebPASZ5SdmvTKDr%2Frmf7RJwnMS6I0zN6wXjf0l1sVVm8pVga1GiFSv41l3%2Bp3nJKEcp%2FPQCKydNepUrLUc%2BERzx%2FGiz7yO%2FlkcS3LrS%2B1UtGYzF0j70S1TZQJwI7e5URLgiffFBZ2CCrBeRb8si88ExNy64oK5zsfszW92H9Oj0MIPDkphsyQmTBImkZHa%2B3%2B1ynt1a5C8psuQNKOtfBeiIV4IruRZP9iXFcRP7C1aRUJiOVrzFEzviuO3%2FqLIU1fpWZA9KF9E2%2F%2Frag8q0vN85T8bsP%2FDhF3yFvX8d2rvGsNEYRueRGDhNjg%2FQkPsWMPWr9OFEuI8QMp23F1Y1w0nKJRDDPf8LUJ14a7nRo2eZuLpkaWgijMdlHit1F0Wduuj1cuekbvxr3j0ulwczBt1m6P8IgvZX7Zpk%2BqV0U0IB8lkB4PE5iPxGlep1F1t2PjWZW7ugC%2Ffd%2FD24cp%2BgTEHzOVejno9WMgemTvyN91YQw%2FomgyAY6pgHyRFS8iKzLpcl62Ma6I%2BgT%2BWIyXQOLRwUiKbK6%2FdgoxQUNtDjJjZBmAzQbprYcB9NjPE%2FPOzly2W0gmbxVWwi8NsGDOkSX3FUGsVAjHKl8qZSPOYglH2WaI6U3bXh2o3cC0P8uQhvkITuRO5fAouZB1hTcuKia%2FpEQ%2BgXV9AppjSWRlNBoRuJ%2F08bo0pqBQuLjfyKjX8YcZi%2BfJ%2BzHf%2BJertcpmlbw&X-Amz-Signature=f85a7595234ceb3650c3b8fefde883ec58ccad9dd423ff30a87136d9d040717f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZHBCIZ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5DJGDeh3H5hqmy%2BEA5sQDEdMrXJ16jqd5OAdlE3QBWAiAv0GR%2BzFhAJyaW4pDh2apz6U6VhuGYpsLQQJtg3afQLir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfq2SySGgwxRPCuDhKtwDJ5S55FNlH0Vxk7gCwzCQK6S7DXFfYveSym9LjvUbOL%2BISEJYUPn4sgeJLrTAkFuc6g0k%2FnZIgI4NgF55heBW8%2FYqHWNe3%2BH3z95KZPMCWS87ruy1QZLAZnkzWTyodrDKm5fIocfaQOn2TESXebPASZ5SdmvTKDr%2Frmf7RJwnMS6I0zN6wXjf0l1sVVm8pVga1GiFSv41l3%2Bp3nJKEcp%2FPQCKydNepUrLUc%2BERzx%2FGiz7yO%2FlkcS3LrS%2B1UtGYzF0j70S1TZQJwI7e5URLgiffFBZ2CCrBeRb8si88ExNy64oK5zsfszW92H9Oj0MIPDkphsyQmTBImkZHa%2B3%2B1ynt1a5C8psuQNKOtfBeiIV4IruRZP9iXFcRP7C1aRUJiOVrzFEzviuO3%2FqLIU1fpWZA9KF9E2%2F%2Frag8q0vN85T8bsP%2FDhF3yFvX8d2rvGsNEYRueRGDhNjg%2FQkPsWMPWr9OFEuI8QMp23F1Y1w0nKJRDDPf8LUJ14a7nRo2eZuLpkaWgijMdlHit1F0Wduuj1cuekbvxr3j0ulwczBt1m6P8IgvZX7Zpk%2BqV0U0IB8lkB4PE5iPxGlep1F1t2PjWZW7ugC%2Ffd%2FD24cp%2BgTEHzOVejno9WMgemTvyN91YQw%2FomgyAY6pgHyRFS8iKzLpcl62Ma6I%2BgT%2BWIyXQOLRwUiKbK6%2FdgoxQUNtDjJjZBmAzQbprYcB9NjPE%2FPOzly2W0gmbxVWwi8NsGDOkSX3FUGsVAjHKl8qZSPOYglH2WaI6U3bXh2o3cC0P8uQhvkITuRO5fAouZB1hTcuKia%2FpEQ%2BgXV9AppjSWRlNBoRuJ%2F08bo0pqBQuLjfyKjX8YcZi%2BfJ%2BzHf%2BJertcpmlbw&X-Amz-Signature=ad16b9ac5e29b546f263e2ebe5568c02bb7454e5c6598ba5ee8b66b16e13c3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZHBCIZ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5DJGDeh3H5hqmy%2BEA5sQDEdMrXJ16jqd5OAdlE3QBWAiAv0GR%2BzFhAJyaW4pDh2apz6U6VhuGYpsLQQJtg3afQLir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfq2SySGgwxRPCuDhKtwDJ5S55FNlH0Vxk7gCwzCQK6S7DXFfYveSym9LjvUbOL%2BISEJYUPn4sgeJLrTAkFuc6g0k%2FnZIgI4NgF55heBW8%2FYqHWNe3%2BH3z95KZPMCWS87ruy1QZLAZnkzWTyodrDKm5fIocfaQOn2TESXebPASZ5SdmvTKDr%2Frmf7RJwnMS6I0zN6wXjf0l1sVVm8pVga1GiFSv41l3%2Bp3nJKEcp%2FPQCKydNepUrLUc%2BERzx%2FGiz7yO%2FlkcS3LrS%2B1UtGYzF0j70S1TZQJwI7e5URLgiffFBZ2CCrBeRb8si88ExNy64oK5zsfszW92H9Oj0MIPDkphsyQmTBImkZHa%2B3%2B1ynt1a5C8psuQNKOtfBeiIV4IruRZP9iXFcRP7C1aRUJiOVrzFEzviuO3%2FqLIU1fpWZA9KF9E2%2F%2Frag8q0vN85T8bsP%2FDhF3yFvX8d2rvGsNEYRueRGDhNjg%2FQkPsWMPWr9OFEuI8QMp23F1Y1w0nKJRDDPf8LUJ14a7nRo2eZuLpkaWgijMdlHit1F0Wduuj1cuekbvxr3j0ulwczBt1m6P8IgvZX7Zpk%2BqV0U0IB8lkB4PE5iPxGlep1F1t2PjWZW7ugC%2Ffd%2FD24cp%2BgTEHzOVejno9WMgemTvyN91YQw%2FomgyAY6pgHyRFS8iKzLpcl62Ma6I%2BgT%2BWIyXQOLRwUiKbK6%2FdgoxQUNtDjJjZBmAzQbprYcB9NjPE%2FPOzly2W0gmbxVWwi8NsGDOkSX3FUGsVAjHKl8qZSPOYglH2WaI6U3bXh2o3cC0P8uQhvkITuRO5fAouZB1hTcuKia%2FpEQ%2BgXV9AppjSWRlNBoRuJ%2F08bo0pqBQuLjfyKjX8YcZi%2BfJ%2BzHf%2BJertcpmlbw&X-Amz-Signature=608ff651f44f5307bf392b935b7245a0c5953b8f014c6734626f5f9abbdcf29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZHBCIZ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5DJGDeh3H5hqmy%2BEA5sQDEdMrXJ16jqd5OAdlE3QBWAiAv0GR%2BzFhAJyaW4pDh2apz6U6VhuGYpsLQQJtg3afQLir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfq2SySGgwxRPCuDhKtwDJ5S55FNlH0Vxk7gCwzCQK6S7DXFfYveSym9LjvUbOL%2BISEJYUPn4sgeJLrTAkFuc6g0k%2FnZIgI4NgF55heBW8%2FYqHWNe3%2BH3z95KZPMCWS87ruy1QZLAZnkzWTyodrDKm5fIocfaQOn2TESXebPASZ5SdmvTKDr%2Frmf7RJwnMS6I0zN6wXjf0l1sVVm8pVga1GiFSv41l3%2Bp3nJKEcp%2FPQCKydNepUrLUc%2BERzx%2FGiz7yO%2FlkcS3LrS%2B1UtGYzF0j70S1TZQJwI7e5URLgiffFBZ2CCrBeRb8si88ExNy64oK5zsfszW92H9Oj0MIPDkphsyQmTBImkZHa%2B3%2B1ynt1a5C8psuQNKOtfBeiIV4IruRZP9iXFcRP7C1aRUJiOVrzFEzviuO3%2FqLIU1fpWZA9KF9E2%2F%2Frag8q0vN85T8bsP%2FDhF3yFvX8d2rvGsNEYRueRGDhNjg%2FQkPsWMPWr9OFEuI8QMp23F1Y1w0nKJRDDPf8LUJ14a7nRo2eZuLpkaWgijMdlHit1F0Wduuj1cuekbvxr3j0ulwczBt1m6P8IgvZX7Zpk%2BqV0U0IB8lkB4PE5iPxGlep1F1t2PjWZW7ugC%2Ffd%2FD24cp%2BgTEHzOVejno9WMgemTvyN91YQw%2FomgyAY6pgHyRFS8iKzLpcl62Ma6I%2BgT%2BWIyXQOLRwUiKbK6%2FdgoxQUNtDjJjZBmAzQbprYcB9NjPE%2FPOzly2W0gmbxVWwi8NsGDOkSX3FUGsVAjHKl8qZSPOYglH2WaI6U3bXh2o3cC0P8uQhvkITuRO5fAouZB1hTcuKia%2FpEQ%2BgXV9AppjSWRlNBoRuJ%2F08bo0pqBQuLjfyKjX8YcZi%2BfJ%2BzHf%2BJertcpmlbw&X-Amz-Signature=2afd21d604d45471992691f62d8c720443591ff91b2edf24c540f372619effef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZHBCIZ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5DJGDeh3H5hqmy%2BEA5sQDEdMrXJ16jqd5OAdlE3QBWAiAv0GR%2BzFhAJyaW4pDh2apz6U6VhuGYpsLQQJtg3afQLir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfq2SySGgwxRPCuDhKtwDJ5S55FNlH0Vxk7gCwzCQK6S7DXFfYveSym9LjvUbOL%2BISEJYUPn4sgeJLrTAkFuc6g0k%2FnZIgI4NgF55heBW8%2FYqHWNe3%2BH3z95KZPMCWS87ruy1QZLAZnkzWTyodrDKm5fIocfaQOn2TESXebPASZ5SdmvTKDr%2Frmf7RJwnMS6I0zN6wXjf0l1sVVm8pVga1GiFSv41l3%2Bp3nJKEcp%2FPQCKydNepUrLUc%2BERzx%2FGiz7yO%2FlkcS3LrS%2B1UtGYzF0j70S1TZQJwI7e5URLgiffFBZ2CCrBeRb8si88ExNy64oK5zsfszW92H9Oj0MIPDkphsyQmTBImkZHa%2B3%2B1ynt1a5C8psuQNKOtfBeiIV4IruRZP9iXFcRP7C1aRUJiOVrzFEzviuO3%2FqLIU1fpWZA9KF9E2%2F%2Frag8q0vN85T8bsP%2FDhF3yFvX8d2rvGsNEYRueRGDhNjg%2FQkPsWMPWr9OFEuI8QMp23F1Y1w0nKJRDDPf8LUJ14a7nRo2eZuLpkaWgijMdlHit1F0Wduuj1cuekbvxr3j0ulwczBt1m6P8IgvZX7Zpk%2BqV0U0IB8lkB4PE5iPxGlep1F1t2PjWZW7ugC%2Ffd%2FD24cp%2BgTEHzOVejno9WMgemTvyN91YQw%2FomgyAY6pgHyRFS8iKzLpcl62Ma6I%2BgT%2BWIyXQOLRwUiKbK6%2FdgoxQUNtDjJjZBmAzQbprYcB9NjPE%2FPOzly2W0gmbxVWwi8NsGDOkSX3FUGsVAjHKl8qZSPOYglH2WaI6U3bXh2o3cC0P8uQhvkITuRO5fAouZB1hTcuKia%2FpEQ%2BgXV9AppjSWRlNBoRuJ%2F08bo0pqBQuLjfyKjX8YcZi%2BfJ%2BzHf%2BJertcpmlbw&X-Amz-Signature=6e6f536bafa9608eb16885ddb63ff4792cab342a8e34b8cb1aeabfabb75f6a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZHBCIZ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5DJGDeh3H5hqmy%2BEA5sQDEdMrXJ16jqd5OAdlE3QBWAiAv0GR%2BzFhAJyaW4pDh2apz6U6VhuGYpsLQQJtg3afQLir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfq2SySGgwxRPCuDhKtwDJ5S55FNlH0Vxk7gCwzCQK6S7DXFfYveSym9LjvUbOL%2BISEJYUPn4sgeJLrTAkFuc6g0k%2FnZIgI4NgF55heBW8%2FYqHWNe3%2BH3z95KZPMCWS87ruy1QZLAZnkzWTyodrDKm5fIocfaQOn2TESXebPASZ5SdmvTKDr%2Frmf7RJwnMS6I0zN6wXjf0l1sVVm8pVga1GiFSv41l3%2Bp3nJKEcp%2FPQCKydNepUrLUc%2BERzx%2FGiz7yO%2FlkcS3LrS%2B1UtGYzF0j70S1TZQJwI7e5URLgiffFBZ2CCrBeRb8si88ExNy64oK5zsfszW92H9Oj0MIPDkphsyQmTBImkZHa%2B3%2B1ynt1a5C8psuQNKOtfBeiIV4IruRZP9iXFcRP7C1aRUJiOVrzFEzviuO3%2FqLIU1fpWZA9KF9E2%2F%2Frag8q0vN85T8bsP%2FDhF3yFvX8d2rvGsNEYRueRGDhNjg%2FQkPsWMPWr9OFEuI8QMp23F1Y1w0nKJRDDPf8LUJ14a7nRo2eZuLpkaWgijMdlHit1F0Wduuj1cuekbvxr3j0ulwczBt1m6P8IgvZX7Zpk%2BqV0U0IB8lkB4PE5iPxGlep1F1t2PjWZW7ugC%2Ffd%2FD24cp%2BgTEHzOVejno9WMgemTvyN91YQw%2FomgyAY6pgHyRFS8iKzLpcl62Ma6I%2BgT%2BWIyXQOLRwUiKbK6%2FdgoxQUNtDjJjZBmAzQbprYcB9NjPE%2FPOzly2W0gmbxVWwi8NsGDOkSX3FUGsVAjHKl8qZSPOYglH2WaI6U3bXh2o3cC0P8uQhvkITuRO5fAouZB1hTcuKia%2FpEQ%2BgXV9AppjSWRlNBoRuJ%2F08bo0pqBQuLjfyKjX8YcZi%2BfJ%2BzHf%2BJertcpmlbw&X-Amz-Signature=e554f50aa496431685ed0abcda1a408b98604b266653c40878e7090daf49c40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2ZHBCIZ%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5DJGDeh3H5hqmy%2BEA5sQDEdMrXJ16jqd5OAdlE3QBWAiAv0GR%2BzFhAJyaW4pDh2apz6U6VhuGYpsLQQJtg3afQLir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMfq2SySGgwxRPCuDhKtwDJ5S55FNlH0Vxk7gCwzCQK6S7DXFfYveSym9LjvUbOL%2BISEJYUPn4sgeJLrTAkFuc6g0k%2FnZIgI4NgF55heBW8%2FYqHWNe3%2BH3z95KZPMCWS87ruy1QZLAZnkzWTyodrDKm5fIocfaQOn2TESXebPASZ5SdmvTKDr%2Frmf7RJwnMS6I0zN6wXjf0l1sVVm8pVga1GiFSv41l3%2Bp3nJKEcp%2FPQCKydNepUrLUc%2BERzx%2FGiz7yO%2FlkcS3LrS%2B1UtGYzF0j70S1TZQJwI7e5URLgiffFBZ2CCrBeRb8si88ExNy64oK5zsfszW92H9Oj0MIPDkphsyQmTBImkZHa%2B3%2B1ynt1a5C8psuQNKOtfBeiIV4IruRZP9iXFcRP7C1aRUJiOVrzFEzviuO3%2FqLIU1fpWZA9KF9E2%2F%2Frag8q0vN85T8bsP%2FDhF3yFvX8d2rvGsNEYRueRGDhNjg%2FQkPsWMPWr9OFEuI8QMp23F1Y1w0nKJRDDPf8LUJ14a7nRo2eZuLpkaWgijMdlHit1F0Wduuj1cuekbvxr3j0ulwczBt1m6P8IgvZX7Zpk%2BqV0U0IB8lkB4PE5iPxGlep1F1t2PjWZW7ugC%2Ffd%2FD24cp%2BgTEHzOVejno9WMgemTvyN91YQw%2FomgyAY6pgHyRFS8iKzLpcl62Ma6I%2BgT%2BWIyXQOLRwUiKbK6%2FdgoxQUNtDjJjZBmAzQbprYcB9NjPE%2FPOzly2W0gmbxVWwi8NsGDOkSX3FUGsVAjHKl8qZSPOYglH2WaI6U3bXh2o3cC0P8uQhvkITuRO5fAouZB1hTcuKia%2FpEQ%2BgXV9AppjSWRlNBoRuJ%2F08bo0pqBQuLjfyKjX8YcZi%2BfJ%2BzHf%2BJertcpmlbw&X-Amz-Signature=ee48d72e157dd708fe798389bd532877977d378adbae20d19f240cb4ceb0522b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
