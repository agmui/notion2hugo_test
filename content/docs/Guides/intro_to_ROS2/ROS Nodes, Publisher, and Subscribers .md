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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRALNRP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmWsQJGiD4m2QqX5b%2F53XgcCzPdhYQ7mXipXSE0fA9gIgeMjKx7gUbSe3FtEhNCp4W4rv7FDSn2IPiY1CJNdd3s0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGclXowBwZBCR21LqircAzcFj%2BAFp3JVPKVvO7pHpRSAArBkEQeuxHn8EPtsGMclaIMMLvSOu0kSx2jblQ23lwJP9zflVRRPLBaksN3PQDEeugGhX26ic6dDF10b6pgApogzMcMrmPhPVXWvacfrTyn8OCNWMTLUWJNgmE6TLhgiVvXIXkr7zJYxIs31ENu6ZBQ0pAPie%2Bqd%2FqboCDIyHBq5RZd2F4FbczHS%2B3MTbCWNn6EcKsABqWPF17GcNosUhqLKOsqRpaob9XvOzJn5ykZhkRXaQnu0MXPuYz7xc8qMLl6HGJgwOrXvHAmJTkTGvc%2FnOM7%2FoTtSoKsEi0KVg2PJRm2Ge2kQ9w91fv%2B3aQSt8tJmY2LznSwBLsnka2mcW6cHo01mCYI8Lg9B555xwkhQLQ1Qgk0AjlIfvXCU%2B2wI7qArn7TsbJrjRRTeO%2FKe6jtxxLz9iRjPGqmcrBJ2hV37y8MoO1McUxCGMtxAzrOBecAl6JEheRaLTGMsYe7db9iEH9fx8dauiPqYi3EGME1ob%2F3Hh8PHw6IePYS%2B7ZRCsLoS%2FSJSbkE4Hn4EIr7bULgENciAWeJ3EAVvrQBeL8hCQTYus9ze4y8V0RrQZitgxuJftFqeIt9%2B4gxiQuyU2svuwwD%2F76XWIjhWML3E%2BcAGOqUBHHg66GhDdQEwqMG0x%2BZfpwISam5u3QRg17kzb9YaojT7Nr9S5Kdk9uZGwrLDTQn7hrcFCFgZdFBGJgNnz0m4Xn0KSXBvrAPY7Czf9%2BHqZknsjcHhIMOF1GX6CI4uSFMaOZOaEFLhdXZSz0J2%2BHJzN9czK57xNOZ8hD6DXmnksBdLKPzf%2BzX5SdxvjvyFfRYjbQoACJc032dYhvZ%2Fper%2BvezWHstu&X-Amz-Signature=97f015c97ad74579f88599c9dc6b0bec0e96657ccd3c6b248a81149158d898cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRALNRP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmWsQJGiD4m2QqX5b%2F53XgcCzPdhYQ7mXipXSE0fA9gIgeMjKx7gUbSe3FtEhNCp4W4rv7FDSn2IPiY1CJNdd3s0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGclXowBwZBCR21LqircAzcFj%2BAFp3JVPKVvO7pHpRSAArBkEQeuxHn8EPtsGMclaIMMLvSOu0kSx2jblQ23lwJP9zflVRRPLBaksN3PQDEeugGhX26ic6dDF10b6pgApogzMcMrmPhPVXWvacfrTyn8OCNWMTLUWJNgmE6TLhgiVvXIXkr7zJYxIs31ENu6ZBQ0pAPie%2Bqd%2FqboCDIyHBq5RZd2F4FbczHS%2B3MTbCWNn6EcKsABqWPF17GcNosUhqLKOsqRpaob9XvOzJn5ykZhkRXaQnu0MXPuYz7xc8qMLl6HGJgwOrXvHAmJTkTGvc%2FnOM7%2FoTtSoKsEi0KVg2PJRm2Ge2kQ9w91fv%2B3aQSt8tJmY2LznSwBLsnka2mcW6cHo01mCYI8Lg9B555xwkhQLQ1Qgk0AjlIfvXCU%2B2wI7qArn7TsbJrjRRTeO%2FKe6jtxxLz9iRjPGqmcrBJ2hV37y8MoO1McUxCGMtxAzrOBecAl6JEheRaLTGMsYe7db9iEH9fx8dauiPqYi3EGME1ob%2F3Hh8PHw6IePYS%2B7ZRCsLoS%2FSJSbkE4Hn4EIr7bULgENciAWeJ3EAVvrQBeL8hCQTYus9ze4y8V0RrQZitgxuJftFqeIt9%2B4gxiQuyU2svuwwD%2F76XWIjhWML3E%2BcAGOqUBHHg66GhDdQEwqMG0x%2BZfpwISam5u3QRg17kzb9YaojT7Nr9S5Kdk9uZGwrLDTQn7hrcFCFgZdFBGJgNnz0m4Xn0KSXBvrAPY7Czf9%2BHqZknsjcHhIMOF1GX6CI4uSFMaOZOaEFLhdXZSz0J2%2BHJzN9czK57xNOZ8hD6DXmnksBdLKPzf%2BzX5SdxvjvyFfRYjbQoACJc032dYhvZ%2Fper%2BvezWHstu&X-Amz-Signature=4f4744fb208f5db220d98a34ff4d309e1ef960f2e6c2368036c4fa012fa56c54&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRALNRP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmWsQJGiD4m2QqX5b%2F53XgcCzPdhYQ7mXipXSE0fA9gIgeMjKx7gUbSe3FtEhNCp4W4rv7FDSn2IPiY1CJNdd3s0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGclXowBwZBCR21LqircAzcFj%2BAFp3JVPKVvO7pHpRSAArBkEQeuxHn8EPtsGMclaIMMLvSOu0kSx2jblQ23lwJP9zflVRRPLBaksN3PQDEeugGhX26ic6dDF10b6pgApogzMcMrmPhPVXWvacfrTyn8OCNWMTLUWJNgmE6TLhgiVvXIXkr7zJYxIs31ENu6ZBQ0pAPie%2Bqd%2FqboCDIyHBq5RZd2F4FbczHS%2B3MTbCWNn6EcKsABqWPF17GcNosUhqLKOsqRpaob9XvOzJn5ykZhkRXaQnu0MXPuYz7xc8qMLl6HGJgwOrXvHAmJTkTGvc%2FnOM7%2FoTtSoKsEi0KVg2PJRm2Ge2kQ9w91fv%2B3aQSt8tJmY2LznSwBLsnka2mcW6cHo01mCYI8Lg9B555xwkhQLQ1Qgk0AjlIfvXCU%2B2wI7qArn7TsbJrjRRTeO%2FKe6jtxxLz9iRjPGqmcrBJ2hV37y8MoO1McUxCGMtxAzrOBecAl6JEheRaLTGMsYe7db9iEH9fx8dauiPqYi3EGME1ob%2F3Hh8PHw6IePYS%2B7ZRCsLoS%2FSJSbkE4Hn4EIr7bULgENciAWeJ3EAVvrQBeL8hCQTYus9ze4y8V0RrQZitgxuJftFqeIt9%2B4gxiQuyU2svuwwD%2F76XWIjhWML3E%2BcAGOqUBHHg66GhDdQEwqMG0x%2BZfpwISam5u3QRg17kzb9YaojT7Nr9S5Kdk9uZGwrLDTQn7hrcFCFgZdFBGJgNnz0m4Xn0KSXBvrAPY7Czf9%2BHqZknsjcHhIMOF1GX6CI4uSFMaOZOaEFLhdXZSz0J2%2BHJzN9czK57xNOZ8hD6DXmnksBdLKPzf%2BzX5SdxvjvyFfRYjbQoACJc032dYhvZ%2Fper%2BvezWHstu&X-Amz-Signature=b6b8873e7f1b6e470f829c99e50b7f9aafadefc5c365c65516c1e0362eb2b8ad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRALNRP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmWsQJGiD4m2QqX5b%2F53XgcCzPdhYQ7mXipXSE0fA9gIgeMjKx7gUbSe3FtEhNCp4W4rv7FDSn2IPiY1CJNdd3s0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGclXowBwZBCR21LqircAzcFj%2BAFp3JVPKVvO7pHpRSAArBkEQeuxHn8EPtsGMclaIMMLvSOu0kSx2jblQ23lwJP9zflVRRPLBaksN3PQDEeugGhX26ic6dDF10b6pgApogzMcMrmPhPVXWvacfrTyn8OCNWMTLUWJNgmE6TLhgiVvXIXkr7zJYxIs31ENu6ZBQ0pAPie%2Bqd%2FqboCDIyHBq5RZd2F4FbczHS%2B3MTbCWNn6EcKsABqWPF17GcNosUhqLKOsqRpaob9XvOzJn5ykZhkRXaQnu0MXPuYz7xc8qMLl6HGJgwOrXvHAmJTkTGvc%2FnOM7%2FoTtSoKsEi0KVg2PJRm2Ge2kQ9w91fv%2B3aQSt8tJmY2LznSwBLsnka2mcW6cHo01mCYI8Lg9B555xwkhQLQ1Qgk0AjlIfvXCU%2B2wI7qArn7TsbJrjRRTeO%2FKe6jtxxLz9iRjPGqmcrBJ2hV37y8MoO1McUxCGMtxAzrOBecAl6JEheRaLTGMsYe7db9iEH9fx8dauiPqYi3EGME1ob%2F3Hh8PHw6IePYS%2B7ZRCsLoS%2FSJSbkE4Hn4EIr7bULgENciAWeJ3EAVvrQBeL8hCQTYus9ze4y8V0RrQZitgxuJftFqeIt9%2B4gxiQuyU2svuwwD%2F76XWIjhWML3E%2BcAGOqUBHHg66GhDdQEwqMG0x%2BZfpwISam5u3QRg17kzb9YaojT7Nr9S5Kdk9uZGwrLDTQn7hrcFCFgZdFBGJgNnz0m4Xn0KSXBvrAPY7Czf9%2BHqZknsjcHhIMOF1GX6CI4uSFMaOZOaEFLhdXZSz0J2%2BHJzN9czK57xNOZ8hD6DXmnksBdLKPzf%2BzX5SdxvjvyFfRYjbQoACJc032dYhvZ%2Fper%2BvezWHstu&X-Amz-Signature=448cbcce7b7eb09ce6accf2debcfea3c53a49d19f8e456d322f39e35671db48f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRALNRP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmWsQJGiD4m2QqX5b%2F53XgcCzPdhYQ7mXipXSE0fA9gIgeMjKx7gUbSe3FtEhNCp4W4rv7FDSn2IPiY1CJNdd3s0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGclXowBwZBCR21LqircAzcFj%2BAFp3JVPKVvO7pHpRSAArBkEQeuxHn8EPtsGMclaIMMLvSOu0kSx2jblQ23lwJP9zflVRRPLBaksN3PQDEeugGhX26ic6dDF10b6pgApogzMcMrmPhPVXWvacfrTyn8OCNWMTLUWJNgmE6TLhgiVvXIXkr7zJYxIs31ENu6ZBQ0pAPie%2Bqd%2FqboCDIyHBq5RZd2F4FbczHS%2B3MTbCWNn6EcKsABqWPF17GcNosUhqLKOsqRpaob9XvOzJn5ykZhkRXaQnu0MXPuYz7xc8qMLl6HGJgwOrXvHAmJTkTGvc%2FnOM7%2FoTtSoKsEi0KVg2PJRm2Ge2kQ9w91fv%2B3aQSt8tJmY2LznSwBLsnka2mcW6cHo01mCYI8Lg9B555xwkhQLQ1Qgk0AjlIfvXCU%2B2wI7qArn7TsbJrjRRTeO%2FKe6jtxxLz9iRjPGqmcrBJ2hV37y8MoO1McUxCGMtxAzrOBecAl6JEheRaLTGMsYe7db9iEH9fx8dauiPqYi3EGME1ob%2F3Hh8PHw6IePYS%2B7ZRCsLoS%2FSJSbkE4Hn4EIr7bULgENciAWeJ3EAVvrQBeL8hCQTYus9ze4y8V0RrQZitgxuJftFqeIt9%2B4gxiQuyU2svuwwD%2F76XWIjhWML3E%2BcAGOqUBHHg66GhDdQEwqMG0x%2BZfpwISam5u3QRg17kzb9YaojT7Nr9S5Kdk9uZGwrLDTQn7hrcFCFgZdFBGJgNnz0m4Xn0KSXBvrAPY7Czf9%2BHqZknsjcHhIMOF1GX6CI4uSFMaOZOaEFLhdXZSz0J2%2BHJzN9czK57xNOZ8hD6DXmnksBdLKPzf%2BzX5SdxvjvyFfRYjbQoACJc032dYhvZ%2Fper%2BvezWHstu&X-Amz-Signature=0030d90e435c6f40efd3d7f4d244bf80adda2ae73e552c9b06d8668dc61dcbf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRALNRP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmWsQJGiD4m2QqX5b%2F53XgcCzPdhYQ7mXipXSE0fA9gIgeMjKx7gUbSe3FtEhNCp4W4rv7FDSn2IPiY1CJNdd3s0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGclXowBwZBCR21LqircAzcFj%2BAFp3JVPKVvO7pHpRSAArBkEQeuxHn8EPtsGMclaIMMLvSOu0kSx2jblQ23lwJP9zflVRRPLBaksN3PQDEeugGhX26ic6dDF10b6pgApogzMcMrmPhPVXWvacfrTyn8OCNWMTLUWJNgmE6TLhgiVvXIXkr7zJYxIs31ENu6ZBQ0pAPie%2Bqd%2FqboCDIyHBq5RZd2F4FbczHS%2B3MTbCWNn6EcKsABqWPF17GcNosUhqLKOsqRpaob9XvOzJn5ykZhkRXaQnu0MXPuYz7xc8qMLl6HGJgwOrXvHAmJTkTGvc%2FnOM7%2FoTtSoKsEi0KVg2PJRm2Ge2kQ9w91fv%2B3aQSt8tJmY2LznSwBLsnka2mcW6cHo01mCYI8Lg9B555xwkhQLQ1Qgk0AjlIfvXCU%2B2wI7qArn7TsbJrjRRTeO%2FKe6jtxxLz9iRjPGqmcrBJ2hV37y8MoO1McUxCGMtxAzrOBecAl6JEheRaLTGMsYe7db9iEH9fx8dauiPqYi3EGME1ob%2F3Hh8PHw6IePYS%2B7ZRCsLoS%2FSJSbkE4Hn4EIr7bULgENciAWeJ3EAVvrQBeL8hCQTYus9ze4y8V0RrQZitgxuJftFqeIt9%2B4gxiQuyU2svuwwD%2F76XWIjhWML3E%2BcAGOqUBHHg66GhDdQEwqMG0x%2BZfpwISam5u3QRg17kzb9YaojT7Nr9S5Kdk9uZGwrLDTQn7hrcFCFgZdFBGJgNnz0m4Xn0KSXBvrAPY7Czf9%2BHqZknsjcHhIMOF1GX6CI4uSFMaOZOaEFLhdXZSz0J2%2BHJzN9czK57xNOZ8hD6DXmnksBdLKPzf%2BzX5SdxvjvyFfRYjbQoACJc032dYhvZ%2Fper%2BvezWHstu&X-Amz-Signature=45782f54b76a54b756dbc82ea4f0fd8a877908486322f4b72bf8ecbf114c85ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRALNRP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmWsQJGiD4m2QqX5b%2F53XgcCzPdhYQ7mXipXSE0fA9gIgeMjKx7gUbSe3FtEhNCp4W4rv7FDSn2IPiY1CJNdd3s0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGclXowBwZBCR21LqircAzcFj%2BAFp3JVPKVvO7pHpRSAArBkEQeuxHn8EPtsGMclaIMMLvSOu0kSx2jblQ23lwJP9zflVRRPLBaksN3PQDEeugGhX26ic6dDF10b6pgApogzMcMrmPhPVXWvacfrTyn8OCNWMTLUWJNgmE6TLhgiVvXIXkr7zJYxIs31ENu6ZBQ0pAPie%2Bqd%2FqboCDIyHBq5RZd2F4FbczHS%2B3MTbCWNn6EcKsABqWPF17GcNosUhqLKOsqRpaob9XvOzJn5ykZhkRXaQnu0MXPuYz7xc8qMLl6HGJgwOrXvHAmJTkTGvc%2FnOM7%2FoTtSoKsEi0KVg2PJRm2Ge2kQ9w91fv%2B3aQSt8tJmY2LznSwBLsnka2mcW6cHo01mCYI8Lg9B555xwkhQLQ1Qgk0AjlIfvXCU%2B2wI7qArn7TsbJrjRRTeO%2FKe6jtxxLz9iRjPGqmcrBJ2hV37y8MoO1McUxCGMtxAzrOBecAl6JEheRaLTGMsYe7db9iEH9fx8dauiPqYi3EGME1ob%2F3Hh8PHw6IePYS%2B7ZRCsLoS%2FSJSbkE4Hn4EIr7bULgENciAWeJ3EAVvrQBeL8hCQTYus9ze4y8V0RrQZitgxuJftFqeIt9%2B4gxiQuyU2svuwwD%2F76XWIjhWML3E%2BcAGOqUBHHg66GhDdQEwqMG0x%2BZfpwISam5u3QRg17kzb9YaojT7Nr9S5Kdk9uZGwrLDTQn7hrcFCFgZdFBGJgNnz0m4Xn0KSXBvrAPY7Czf9%2BHqZknsjcHhIMOF1GX6CI4uSFMaOZOaEFLhdXZSz0J2%2BHJzN9czK57xNOZ8hD6DXmnksBdLKPzf%2BzX5SdxvjvyFfRYjbQoACJc032dYhvZ%2Fper%2BvezWHstu&X-Amz-Signature=9ea6f76501d48c9939e1858b9470defb2c5a3b20fe1d433501b1e43440ebd82f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SRALNRP%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T220810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTmWsQJGiD4m2QqX5b%2F53XgcCzPdhYQ7mXipXSE0fA9gIgeMjKx7gUbSe3FtEhNCp4W4rv7FDSn2IPiY1CJNdd3s0qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGclXowBwZBCR21LqircAzcFj%2BAFp3JVPKVvO7pHpRSAArBkEQeuxHn8EPtsGMclaIMMLvSOu0kSx2jblQ23lwJP9zflVRRPLBaksN3PQDEeugGhX26ic6dDF10b6pgApogzMcMrmPhPVXWvacfrTyn8OCNWMTLUWJNgmE6TLhgiVvXIXkr7zJYxIs31ENu6ZBQ0pAPie%2Bqd%2FqboCDIyHBq5RZd2F4FbczHS%2B3MTbCWNn6EcKsABqWPF17GcNosUhqLKOsqRpaob9XvOzJn5ykZhkRXaQnu0MXPuYz7xc8qMLl6HGJgwOrXvHAmJTkTGvc%2FnOM7%2FoTtSoKsEi0KVg2PJRm2Ge2kQ9w91fv%2B3aQSt8tJmY2LznSwBLsnka2mcW6cHo01mCYI8Lg9B555xwkhQLQ1Qgk0AjlIfvXCU%2B2wI7qArn7TsbJrjRRTeO%2FKe6jtxxLz9iRjPGqmcrBJ2hV37y8MoO1McUxCGMtxAzrOBecAl6JEheRaLTGMsYe7db9iEH9fx8dauiPqYi3EGME1ob%2F3Hh8PHw6IePYS%2B7ZRCsLoS%2FSJSbkE4Hn4EIr7bULgENciAWeJ3EAVvrQBeL8hCQTYus9ze4y8V0RrQZitgxuJftFqeIt9%2B4gxiQuyU2svuwwD%2F76XWIjhWML3E%2BcAGOqUBHHg66GhDdQEwqMG0x%2BZfpwISam5u3QRg17kzb9YaojT7Nr9S5Kdk9uZGwrLDTQn7hrcFCFgZdFBGJgNnz0m4Xn0KSXBvrAPY7Czf9%2BHqZknsjcHhIMOF1GX6CI4uSFMaOZOaEFLhdXZSz0J2%2BHJzN9czK57xNOZ8hD6DXmnksBdLKPzf%2BzX5SdxvjvyFfRYjbQoACJc032dYhvZ%2Fper%2BvezWHstu&X-Amz-Signature=712cf51829e3274f2659b46f89f03095cdee6720c40ecf00478d2ed9f133e7b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
