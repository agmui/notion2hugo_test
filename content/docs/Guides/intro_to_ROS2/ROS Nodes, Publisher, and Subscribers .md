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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6VXXN4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5FB3hJqb1%2FSExPwBwyhpb9xg6BlP0pjkyJA8njRELNAIgDBVHjJFDb5gecpoGNbZghyYwGOirTqYIyNN0T1TNleUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDP4UoWammiVkbH%2BFgCrcA%2FoDhrO24LapN2EE47MtehhVd8yIK%2B0URbJKiggeKYvFeuKRvSyIiHnUFvyL0l6nMlFm0mJvF8%2F3%2Fw31r92UEDRwdvkKfVMsxe4IvQ8r2e4FIrZwRGHznRlUW1tt1gUu6ftlVrS3QSMnTctnThB1gPDdSf3zAgc7w4CGy%2Fkwzc0TpdWK8kiZMLR7p95FPpyK5ggIU5JN4TbRDfZV2SeNWhiKu327fCLZINDCpEs6nqsyoq%2Boqqgad73onDnbp3kh4xgHnmfQ10UAC9RCsBGlbO2JF%2BtrRGQuuLBDn3xXEzPRDxb5rmdN%2Fi7AlvJnhJxstS%2BO4%2Bx%2Ft%2B%2BEAZT02gAIIM%2FVcB870rEok9S%2FLjAj4RbivNNpaEXjcshx8UG%2BFl4RKy9swLrK%2Fv7BhSA36MJZeN6YyjZi%2BLWDUljsBxeF5LBt75JJuiuHN3ttkTRfHTNCReq4BYYQER6ZW2bqBb2du1J6LQlKJsgx2PVB0nMxsL0enNvMjC7rBOGRMquI0JMBSVpTqWr931sX5gwxBbs%2F%2BQsmv9BzkIg%2BwJnGIZzGLXYqaha3Zv57%2FdBtIsElwoS8eOZuXd7VOlyIxTw1bwU52STzsvQx5YmT%2BTnAQlLx0CW5v7GoMHLr6bJbQAOnMKLv1b4GOqUBnosQtwfbVgP4RPplX2Fnp1dFaH8nHTOySU3LUZfelcI46jIr3cpuCd6G%2BFMsH6IDbLGWbpBNAAK5s7eOrRtbuECG1mGKw3WvubVItjTE5ypu1V9MJcAY010doKdWe3FlheEwGfYikdFRlAGCAODx1rlcM10SIyoLR3yc6KpqkatUeU74zaEhjRb5SUyhD2vC%2B1SO9HZotvqPuZr%2FgZMQ0E0hB6HI&X-Amz-Signature=0a6128ec0d831b5dc269526a39586897d1a8dd00b254265f6c576d9f56e95479&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6VXXN4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5FB3hJqb1%2FSExPwBwyhpb9xg6BlP0pjkyJA8njRELNAIgDBVHjJFDb5gecpoGNbZghyYwGOirTqYIyNN0T1TNleUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDP4UoWammiVkbH%2BFgCrcA%2FoDhrO24LapN2EE47MtehhVd8yIK%2B0URbJKiggeKYvFeuKRvSyIiHnUFvyL0l6nMlFm0mJvF8%2F3%2Fw31r92UEDRwdvkKfVMsxe4IvQ8r2e4FIrZwRGHznRlUW1tt1gUu6ftlVrS3QSMnTctnThB1gPDdSf3zAgc7w4CGy%2Fkwzc0TpdWK8kiZMLR7p95FPpyK5ggIU5JN4TbRDfZV2SeNWhiKu327fCLZINDCpEs6nqsyoq%2Boqqgad73onDnbp3kh4xgHnmfQ10UAC9RCsBGlbO2JF%2BtrRGQuuLBDn3xXEzPRDxb5rmdN%2Fi7AlvJnhJxstS%2BO4%2Bx%2Ft%2B%2BEAZT02gAIIM%2FVcB870rEok9S%2FLjAj4RbivNNpaEXjcshx8UG%2BFl4RKy9swLrK%2Fv7BhSA36MJZeN6YyjZi%2BLWDUljsBxeF5LBt75JJuiuHN3ttkTRfHTNCReq4BYYQER6ZW2bqBb2du1J6LQlKJsgx2PVB0nMxsL0enNvMjC7rBOGRMquI0JMBSVpTqWr931sX5gwxBbs%2F%2BQsmv9BzkIg%2BwJnGIZzGLXYqaha3Zv57%2FdBtIsElwoS8eOZuXd7VOlyIxTw1bwU52STzsvQx5YmT%2BTnAQlLx0CW5v7GoMHLr6bJbQAOnMKLv1b4GOqUBnosQtwfbVgP4RPplX2Fnp1dFaH8nHTOySU3LUZfelcI46jIr3cpuCd6G%2BFMsH6IDbLGWbpBNAAK5s7eOrRtbuECG1mGKw3WvubVItjTE5ypu1V9MJcAY010doKdWe3FlheEwGfYikdFRlAGCAODx1rlcM10SIyoLR3yc6KpqkatUeU74zaEhjRb5SUyhD2vC%2B1SO9HZotvqPuZr%2FgZMQ0E0hB6HI&X-Amz-Signature=8eda01c58e9110453ddecc9fd66fe4ce64e35b99a9011686acef577b117f756c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6VXXN4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5FB3hJqb1%2FSExPwBwyhpb9xg6BlP0pjkyJA8njRELNAIgDBVHjJFDb5gecpoGNbZghyYwGOirTqYIyNN0T1TNleUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDP4UoWammiVkbH%2BFgCrcA%2FoDhrO24LapN2EE47MtehhVd8yIK%2B0URbJKiggeKYvFeuKRvSyIiHnUFvyL0l6nMlFm0mJvF8%2F3%2Fw31r92UEDRwdvkKfVMsxe4IvQ8r2e4FIrZwRGHznRlUW1tt1gUu6ftlVrS3QSMnTctnThB1gPDdSf3zAgc7w4CGy%2Fkwzc0TpdWK8kiZMLR7p95FPpyK5ggIU5JN4TbRDfZV2SeNWhiKu327fCLZINDCpEs6nqsyoq%2Boqqgad73onDnbp3kh4xgHnmfQ10UAC9RCsBGlbO2JF%2BtrRGQuuLBDn3xXEzPRDxb5rmdN%2Fi7AlvJnhJxstS%2BO4%2Bx%2Ft%2B%2BEAZT02gAIIM%2FVcB870rEok9S%2FLjAj4RbivNNpaEXjcshx8UG%2BFl4RKy9swLrK%2Fv7BhSA36MJZeN6YyjZi%2BLWDUljsBxeF5LBt75JJuiuHN3ttkTRfHTNCReq4BYYQER6ZW2bqBb2du1J6LQlKJsgx2PVB0nMxsL0enNvMjC7rBOGRMquI0JMBSVpTqWr931sX5gwxBbs%2F%2BQsmv9BzkIg%2BwJnGIZzGLXYqaha3Zv57%2FdBtIsElwoS8eOZuXd7VOlyIxTw1bwU52STzsvQx5YmT%2BTnAQlLx0CW5v7GoMHLr6bJbQAOnMKLv1b4GOqUBnosQtwfbVgP4RPplX2Fnp1dFaH8nHTOySU3LUZfelcI46jIr3cpuCd6G%2BFMsH6IDbLGWbpBNAAK5s7eOrRtbuECG1mGKw3WvubVItjTE5ypu1V9MJcAY010doKdWe3FlheEwGfYikdFRlAGCAODx1rlcM10SIyoLR3yc6KpqkatUeU74zaEhjRb5SUyhD2vC%2B1SO9HZotvqPuZr%2FgZMQ0E0hB6HI&X-Amz-Signature=f0e50e993dbfd834bb93e1c44023c5c7768736933727f859e9a78924aabab039&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6VXXN4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5FB3hJqb1%2FSExPwBwyhpb9xg6BlP0pjkyJA8njRELNAIgDBVHjJFDb5gecpoGNbZghyYwGOirTqYIyNN0T1TNleUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDP4UoWammiVkbH%2BFgCrcA%2FoDhrO24LapN2EE47MtehhVd8yIK%2B0URbJKiggeKYvFeuKRvSyIiHnUFvyL0l6nMlFm0mJvF8%2F3%2Fw31r92UEDRwdvkKfVMsxe4IvQ8r2e4FIrZwRGHznRlUW1tt1gUu6ftlVrS3QSMnTctnThB1gPDdSf3zAgc7w4CGy%2Fkwzc0TpdWK8kiZMLR7p95FPpyK5ggIU5JN4TbRDfZV2SeNWhiKu327fCLZINDCpEs6nqsyoq%2Boqqgad73onDnbp3kh4xgHnmfQ10UAC9RCsBGlbO2JF%2BtrRGQuuLBDn3xXEzPRDxb5rmdN%2Fi7AlvJnhJxstS%2BO4%2Bx%2Ft%2B%2BEAZT02gAIIM%2FVcB870rEok9S%2FLjAj4RbivNNpaEXjcshx8UG%2BFl4RKy9swLrK%2Fv7BhSA36MJZeN6YyjZi%2BLWDUljsBxeF5LBt75JJuiuHN3ttkTRfHTNCReq4BYYQER6ZW2bqBb2du1J6LQlKJsgx2PVB0nMxsL0enNvMjC7rBOGRMquI0JMBSVpTqWr931sX5gwxBbs%2F%2BQsmv9BzkIg%2BwJnGIZzGLXYqaha3Zv57%2FdBtIsElwoS8eOZuXd7VOlyIxTw1bwU52STzsvQx5YmT%2BTnAQlLx0CW5v7GoMHLr6bJbQAOnMKLv1b4GOqUBnosQtwfbVgP4RPplX2Fnp1dFaH8nHTOySU3LUZfelcI46jIr3cpuCd6G%2BFMsH6IDbLGWbpBNAAK5s7eOrRtbuECG1mGKw3WvubVItjTE5ypu1V9MJcAY010doKdWe3FlheEwGfYikdFRlAGCAODx1rlcM10SIyoLR3yc6KpqkatUeU74zaEhjRb5SUyhD2vC%2B1SO9HZotvqPuZr%2FgZMQ0E0hB6HI&X-Amz-Signature=422de338dc02a693c832f21e1014f577ef12bb23aa40ddab0f9e9be67c8b5144&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6VXXN4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5FB3hJqb1%2FSExPwBwyhpb9xg6BlP0pjkyJA8njRELNAIgDBVHjJFDb5gecpoGNbZghyYwGOirTqYIyNN0T1TNleUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDP4UoWammiVkbH%2BFgCrcA%2FoDhrO24LapN2EE47MtehhVd8yIK%2B0URbJKiggeKYvFeuKRvSyIiHnUFvyL0l6nMlFm0mJvF8%2F3%2Fw31r92UEDRwdvkKfVMsxe4IvQ8r2e4FIrZwRGHznRlUW1tt1gUu6ftlVrS3QSMnTctnThB1gPDdSf3zAgc7w4CGy%2Fkwzc0TpdWK8kiZMLR7p95FPpyK5ggIU5JN4TbRDfZV2SeNWhiKu327fCLZINDCpEs6nqsyoq%2Boqqgad73onDnbp3kh4xgHnmfQ10UAC9RCsBGlbO2JF%2BtrRGQuuLBDn3xXEzPRDxb5rmdN%2Fi7AlvJnhJxstS%2BO4%2Bx%2Ft%2B%2BEAZT02gAIIM%2FVcB870rEok9S%2FLjAj4RbivNNpaEXjcshx8UG%2BFl4RKy9swLrK%2Fv7BhSA36MJZeN6YyjZi%2BLWDUljsBxeF5LBt75JJuiuHN3ttkTRfHTNCReq4BYYQER6ZW2bqBb2du1J6LQlKJsgx2PVB0nMxsL0enNvMjC7rBOGRMquI0JMBSVpTqWr931sX5gwxBbs%2F%2BQsmv9BzkIg%2BwJnGIZzGLXYqaha3Zv57%2FdBtIsElwoS8eOZuXd7VOlyIxTw1bwU52STzsvQx5YmT%2BTnAQlLx0CW5v7GoMHLr6bJbQAOnMKLv1b4GOqUBnosQtwfbVgP4RPplX2Fnp1dFaH8nHTOySU3LUZfelcI46jIr3cpuCd6G%2BFMsH6IDbLGWbpBNAAK5s7eOrRtbuECG1mGKw3WvubVItjTE5ypu1V9MJcAY010doKdWe3FlheEwGfYikdFRlAGCAODx1rlcM10SIyoLR3yc6KpqkatUeU74zaEhjRb5SUyhD2vC%2B1SO9HZotvqPuZr%2FgZMQ0E0hB6HI&X-Amz-Signature=975dc932db6c3b71fdbaa43dc266aa6a84fb66192f16b8a1d7913043b613f624&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6VXXN4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5FB3hJqb1%2FSExPwBwyhpb9xg6BlP0pjkyJA8njRELNAIgDBVHjJFDb5gecpoGNbZghyYwGOirTqYIyNN0T1TNleUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDP4UoWammiVkbH%2BFgCrcA%2FoDhrO24LapN2EE47MtehhVd8yIK%2B0URbJKiggeKYvFeuKRvSyIiHnUFvyL0l6nMlFm0mJvF8%2F3%2Fw31r92UEDRwdvkKfVMsxe4IvQ8r2e4FIrZwRGHznRlUW1tt1gUu6ftlVrS3QSMnTctnThB1gPDdSf3zAgc7w4CGy%2Fkwzc0TpdWK8kiZMLR7p95FPpyK5ggIU5JN4TbRDfZV2SeNWhiKu327fCLZINDCpEs6nqsyoq%2Boqqgad73onDnbp3kh4xgHnmfQ10UAC9RCsBGlbO2JF%2BtrRGQuuLBDn3xXEzPRDxb5rmdN%2Fi7AlvJnhJxstS%2BO4%2Bx%2Ft%2B%2BEAZT02gAIIM%2FVcB870rEok9S%2FLjAj4RbivNNpaEXjcshx8UG%2BFl4RKy9swLrK%2Fv7BhSA36MJZeN6YyjZi%2BLWDUljsBxeF5LBt75JJuiuHN3ttkTRfHTNCReq4BYYQER6ZW2bqBb2du1J6LQlKJsgx2PVB0nMxsL0enNvMjC7rBOGRMquI0JMBSVpTqWr931sX5gwxBbs%2F%2BQsmv9BzkIg%2BwJnGIZzGLXYqaha3Zv57%2FdBtIsElwoS8eOZuXd7VOlyIxTw1bwU52STzsvQx5YmT%2BTnAQlLx0CW5v7GoMHLr6bJbQAOnMKLv1b4GOqUBnosQtwfbVgP4RPplX2Fnp1dFaH8nHTOySU3LUZfelcI46jIr3cpuCd6G%2BFMsH6IDbLGWbpBNAAK5s7eOrRtbuECG1mGKw3WvubVItjTE5ypu1V9MJcAY010doKdWe3FlheEwGfYikdFRlAGCAODx1rlcM10SIyoLR3yc6KpqkatUeU74zaEhjRb5SUyhD2vC%2B1SO9HZotvqPuZr%2FgZMQ0E0hB6HI&X-Amz-Signature=c9e93619b1047c7f2cec297c26b6c5f12bd5702aea242b745ebb5d69668dbf9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6VXXN4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5FB3hJqb1%2FSExPwBwyhpb9xg6BlP0pjkyJA8njRELNAIgDBVHjJFDb5gecpoGNbZghyYwGOirTqYIyNN0T1TNleUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDP4UoWammiVkbH%2BFgCrcA%2FoDhrO24LapN2EE47MtehhVd8yIK%2B0URbJKiggeKYvFeuKRvSyIiHnUFvyL0l6nMlFm0mJvF8%2F3%2Fw31r92UEDRwdvkKfVMsxe4IvQ8r2e4FIrZwRGHznRlUW1tt1gUu6ftlVrS3QSMnTctnThB1gPDdSf3zAgc7w4CGy%2Fkwzc0TpdWK8kiZMLR7p95FPpyK5ggIU5JN4TbRDfZV2SeNWhiKu327fCLZINDCpEs6nqsyoq%2Boqqgad73onDnbp3kh4xgHnmfQ10UAC9RCsBGlbO2JF%2BtrRGQuuLBDn3xXEzPRDxb5rmdN%2Fi7AlvJnhJxstS%2BO4%2Bx%2Ft%2B%2BEAZT02gAIIM%2FVcB870rEok9S%2FLjAj4RbivNNpaEXjcshx8UG%2BFl4RKy9swLrK%2Fv7BhSA36MJZeN6YyjZi%2BLWDUljsBxeF5LBt75JJuiuHN3ttkTRfHTNCReq4BYYQER6ZW2bqBb2du1J6LQlKJsgx2PVB0nMxsL0enNvMjC7rBOGRMquI0JMBSVpTqWr931sX5gwxBbs%2F%2BQsmv9BzkIg%2BwJnGIZzGLXYqaha3Zv57%2FdBtIsElwoS8eOZuXd7VOlyIxTw1bwU52STzsvQx5YmT%2BTnAQlLx0CW5v7GoMHLr6bJbQAOnMKLv1b4GOqUBnosQtwfbVgP4RPplX2Fnp1dFaH8nHTOySU3LUZfelcI46jIr3cpuCd6G%2BFMsH6IDbLGWbpBNAAK5s7eOrRtbuECG1mGKw3WvubVItjTE5ypu1V9MJcAY010doKdWe3FlheEwGfYikdFRlAGCAODx1rlcM10SIyoLR3yc6KpqkatUeU74zaEhjRb5SUyhD2vC%2B1SO9HZotvqPuZr%2FgZMQ0E0hB6HI&X-Amz-Signature=286ea356cde8ae673f2a8cef82fb96acab3e2d22a9034b48daa517e7211f1086&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6VXXN4%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5FB3hJqb1%2FSExPwBwyhpb9xg6BlP0pjkyJA8njRELNAIgDBVHjJFDb5gecpoGNbZghyYwGOirTqYIyNN0T1TNleUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDP4UoWammiVkbH%2BFgCrcA%2FoDhrO24LapN2EE47MtehhVd8yIK%2B0URbJKiggeKYvFeuKRvSyIiHnUFvyL0l6nMlFm0mJvF8%2F3%2Fw31r92UEDRwdvkKfVMsxe4IvQ8r2e4FIrZwRGHznRlUW1tt1gUu6ftlVrS3QSMnTctnThB1gPDdSf3zAgc7w4CGy%2Fkwzc0TpdWK8kiZMLR7p95FPpyK5ggIU5JN4TbRDfZV2SeNWhiKu327fCLZINDCpEs6nqsyoq%2Boqqgad73onDnbp3kh4xgHnmfQ10UAC9RCsBGlbO2JF%2BtrRGQuuLBDn3xXEzPRDxb5rmdN%2Fi7AlvJnhJxstS%2BO4%2Bx%2Ft%2B%2BEAZT02gAIIM%2FVcB870rEok9S%2FLjAj4RbivNNpaEXjcshx8UG%2BFl4RKy9swLrK%2Fv7BhSA36MJZeN6YyjZi%2BLWDUljsBxeF5LBt75JJuiuHN3ttkTRfHTNCReq4BYYQER6ZW2bqBb2du1J6LQlKJsgx2PVB0nMxsL0enNvMjC7rBOGRMquI0JMBSVpTqWr931sX5gwxBbs%2F%2BQsmv9BzkIg%2BwJnGIZzGLXYqaha3Zv57%2FdBtIsElwoS8eOZuXd7VOlyIxTw1bwU52STzsvQx5YmT%2BTnAQlLx0CW5v7GoMHLr6bJbQAOnMKLv1b4GOqUBnosQtwfbVgP4RPplX2Fnp1dFaH8nHTOySU3LUZfelcI46jIr3cpuCd6G%2BFMsH6IDbLGWbpBNAAK5s7eOrRtbuECG1mGKw3WvubVItjTE5ypu1V9MJcAY010doKdWe3FlheEwGfYikdFRlAGCAODx1rlcM10SIyoLR3yc6KpqkatUeU74zaEhjRb5SUyhD2vC%2B1SO9HZotvqPuZr%2FgZMQ0E0hB6HI&X-Amz-Signature=70a9128725bb79e272c75ec13e359cf0ddd5f9e2c50edd1e9bdefecaf3bfe0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
