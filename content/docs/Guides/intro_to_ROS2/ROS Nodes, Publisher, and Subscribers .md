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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLR3HDT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDwphaXu5mgPY0ebt1MG1cWFwF2pN0rOJjLHEXDr94xAiEAhQwJixklDlC6B9QglwXkvQFVxR9CNYAR8nPrtqApMr8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCLQTXs3ZUwhGJNUCCrcA3fkG1%2Bzuave%2FGL%2BEkiCUy7tLO1vrjPHRtO0Tfu4QnL4r7mq0NlE9MopmpsGYM3SAwanFJn0um3x9oVCfABC2FMdkDdZpBW5XmbNdd%2Fr2y6gObVUzd6ibwcneavBLrpxax2NkuzzRlsb5a372V0TTUtfJaVdqbWfGnoqVjsvTTGuR8fOf7e08qAph%2Fe%2FG3PxDk7Iq63e6ub42tcoVryA9SjdwWGidhhtZwV6AeYndGY6TDWVkbpgfomSFgSOCExJUyIL%2FD31bo322lWrxIQosSzPyKBLvvCgX6qn2Mc71z8R6Htz0bW%2FlJfZKNnntBSfg%2BTxpehFYe5Mh%2BLi%2BJL17DdKsfXiiEZJQbC2%2BSUrCo8sfg882gX751TOuDKhzUdxCwYUeebkKaiPBoRZMNt3sRWC%2FSgw5izp51%2FjLhi2G3qKcUQPYcZ4OjAOPw0L4WaV%2FdS2J8xcQLBvhGWD607GBB9ESYxPZRKZrTvL0uy9rL7xMSnzw5MJ1QPdWimGZoz4HoQBGoa4HyBEAGlHrfe1DtbSzULrG3S97Z6qEgfaN71NLvtMOjYowniVNmO4V2G9xV4qZQx%2FbMRqLIHgEDY2ZSKOS4uWcSMmweSSaen7d%2BIbamEJfhH2lS1Y81xuMNnC8MAGOqUBbMoq0fYMkiGU%2B4fhKHHjfjp1JTsiPEaFr0FJjqEQqNaoIuXvr%2FqzAftINs8jKGVqCDnpLQA9V5%2Fmwb2MGKDSBLrfYcH6gMuQ9wD4xG83%2B6yNfFxzNDBmtT3MoydoWqcrGieBzJWPXxqrF734w%2FmATzuO81Brvg43mLZ%2FWN%2FtLTS9MGzPG5eriypsSKkFJjYJBBv9%2FTsM8%2FVMwlvGeemkrVdjK7vk&X-Amz-Signature=45465f906408871f424b574741f4b7f0d145d226dff64e50fba77c1daf384c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLR3HDT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDwphaXu5mgPY0ebt1MG1cWFwF2pN0rOJjLHEXDr94xAiEAhQwJixklDlC6B9QglwXkvQFVxR9CNYAR8nPrtqApMr8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCLQTXs3ZUwhGJNUCCrcA3fkG1%2Bzuave%2FGL%2BEkiCUy7tLO1vrjPHRtO0Tfu4QnL4r7mq0NlE9MopmpsGYM3SAwanFJn0um3x9oVCfABC2FMdkDdZpBW5XmbNdd%2Fr2y6gObVUzd6ibwcneavBLrpxax2NkuzzRlsb5a372V0TTUtfJaVdqbWfGnoqVjsvTTGuR8fOf7e08qAph%2Fe%2FG3PxDk7Iq63e6ub42tcoVryA9SjdwWGidhhtZwV6AeYndGY6TDWVkbpgfomSFgSOCExJUyIL%2FD31bo322lWrxIQosSzPyKBLvvCgX6qn2Mc71z8R6Htz0bW%2FlJfZKNnntBSfg%2BTxpehFYe5Mh%2BLi%2BJL17DdKsfXiiEZJQbC2%2BSUrCo8sfg882gX751TOuDKhzUdxCwYUeebkKaiPBoRZMNt3sRWC%2FSgw5izp51%2FjLhi2G3qKcUQPYcZ4OjAOPw0L4WaV%2FdS2J8xcQLBvhGWD607GBB9ESYxPZRKZrTvL0uy9rL7xMSnzw5MJ1QPdWimGZoz4HoQBGoa4HyBEAGlHrfe1DtbSzULrG3S97Z6qEgfaN71NLvtMOjYowniVNmO4V2G9xV4qZQx%2FbMRqLIHgEDY2ZSKOS4uWcSMmweSSaen7d%2BIbamEJfhH2lS1Y81xuMNnC8MAGOqUBbMoq0fYMkiGU%2B4fhKHHjfjp1JTsiPEaFr0FJjqEQqNaoIuXvr%2FqzAftINs8jKGVqCDnpLQA9V5%2Fmwb2MGKDSBLrfYcH6gMuQ9wD4xG83%2B6yNfFxzNDBmtT3MoydoWqcrGieBzJWPXxqrF734w%2FmATzuO81Brvg43mLZ%2FWN%2FtLTS9MGzPG5eriypsSKkFJjYJBBv9%2FTsM8%2FVMwlvGeemkrVdjK7vk&X-Amz-Signature=ac891202e76a0204637d11b4fe38347d57fc80409b89ff37106ed5938dd1ef70&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLR3HDT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDwphaXu5mgPY0ebt1MG1cWFwF2pN0rOJjLHEXDr94xAiEAhQwJixklDlC6B9QglwXkvQFVxR9CNYAR8nPrtqApMr8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCLQTXs3ZUwhGJNUCCrcA3fkG1%2Bzuave%2FGL%2BEkiCUy7tLO1vrjPHRtO0Tfu4QnL4r7mq0NlE9MopmpsGYM3SAwanFJn0um3x9oVCfABC2FMdkDdZpBW5XmbNdd%2Fr2y6gObVUzd6ibwcneavBLrpxax2NkuzzRlsb5a372V0TTUtfJaVdqbWfGnoqVjsvTTGuR8fOf7e08qAph%2Fe%2FG3PxDk7Iq63e6ub42tcoVryA9SjdwWGidhhtZwV6AeYndGY6TDWVkbpgfomSFgSOCExJUyIL%2FD31bo322lWrxIQosSzPyKBLvvCgX6qn2Mc71z8R6Htz0bW%2FlJfZKNnntBSfg%2BTxpehFYe5Mh%2BLi%2BJL17DdKsfXiiEZJQbC2%2BSUrCo8sfg882gX751TOuDKhzUdxCwYUeebkKaiPBoRZMNt3sRWC%2FSgw5izp51%2FjLhi2G3qKcUQPYcZ4OjAOPw0L4WaV%2FdS2J8xcQLBvhGWD607GBB9ESYxPZRKZrTvL0uy9rL7xMSnzw5MJ1QPdWimGZoz4HoQBGoa4HyBEAGlHrfe1DtbSzULrG3S97Z6qEgfaN71NLvtMOjYowniVNmO4V2G9xV4qZQx%2FbMRqLIHgEDY2ZSKOS4uWcSMmweSSaen7d%2BIbamEJfhH2lS1Y81xuMNnC8MAGOqUBbMoq0fYMkiGU%2B4fhKHHjfjp1JTsiPEaFr0FJjqEQqNaoIuXvr%2FqzAftINs8jKGVqCDnpLQA9V5%2Fmwb2MGKDSBLrfYcH6gMuQ9wD4xG83%2B6yNfFxzNDBmtT3MoydoWqcrGieBzJWPXxqrF734w%2FmATzuO81Brvg43mLZ%2FWN%2FtLTS9MGzPG5eriypsSKkFJjYJBBv9%2FTsM8%2FVMwlvGeemkrVdjK7vk&X-Amz-Signature=3577240b006440a5a5cdaf50ad44d9dc95e043d6e1167fa3ef16a25e3fca9b0f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLR3HDT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDwphaXu5mgPY0ebt1MG1cWFwF2pN0rOJjLHEXDr94xAiEAhQwJixklDlC6B9QglwXkvQFVxR9CNYAR8nPrtqApMr8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCLQTXs3ZUwhGJNUCCrcA3fkG1%2Bzuave%2FGL%2BEkiCUy7tLO1vrjPHRtO0Tfu4QnL4r7mq0NlE9MopmpsGYM3SAwanFJn0um3x9oVCfABC2FMdkDdZpBW5XmbNdd%2Fr2y6gObVUzd6ibwcneavBLrpxax2NkuzzRlsb5a372V0TTUtfJaVdqbWfGnoqVjsvTTGuR8fOf7e08qAph%2Fe%2FG3PxDk7Iq63e6ub42tcoVryA9SjdwWGidhhtZwV6AeYndGY6TDWVkbpgfomSFgSOCExJUyIL%2FD31bo322lWrxIQosSzPyKBLvvCgX6qn2Mc71z8R6Htz0bW%2FlJfZKNnntBSfg%2BTxpehFYe5Mh%2BLi%2BJL17DdKsfXiiEZJQbC2%2BSUrCo8sfg882gX751TOuDKhzUdxCwYUeebkKaiPBoRZMNt3sRWC%2FSgw5izp51%2FjLhi2G3qKcUQPYcZ4OjAOPw0L4WaV%2FdS2J8xcQLBvhGWD607GBB9ESYxPZRKZrTvL0uy9rL7xMSnzw5MJ1QPdWimGZoz4HoQBGoa4HyBEAGlHrfe1DtbSzULrG3S97Z6qEgfaN71NLvtMOjYowniVNmO4V2G9xV4qZQx%2FbMRqLIHgEDY2ZSKOS4uWcSMmweSSaen7d%2BIbamEJfhH2lS1Y81xuMNnC8MAGOqUBbMoq0fYMkiGU%2B4fhKHHjfjp1JTsiPEaFr0FJjqEQqNaoIuXvr%2FqzAftINs8jKGVqCDnpLQA9V5%2Fmwb2MGKDSBLrfYcH6gMuQ9wD4xG83%2B6yNfFxzNDBmtT3MoydoWqcrGieBzJWPXxqrF734w%2FmATzuO81Brvg43mLZ%2FWN%2FtLTS9MGzPG5eriypsSKkFJjYJBBv9%2FTsM8%2FVMwlvGeemkrVdjK7vk&X-Amz-Signature=b877eacdbd3e834eae50e085c244994727faa8c3a6d270ef8b2999021dddc43a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLR3HDT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDwphaXu5mgPY0ebt1MG1cWFwF2pN0rOJjLHEXDr94xAiEAhQwJixklDlC6B9QglwXkvQFVxR9CNYAR8nPrtqApMr8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCLQTXs3ZUwhGJNUCCrcA3fkG1%2Bzuave%2FGL%2BEkiCUy7tLO1vrjPHRtO0Tfu4QnL4r7mq0NlE9MopmpsGYM3SAwanFJn0um3x9oVCfABC2FMdkDdZpBW5XmbNdd%2Fr2y6gObVUzd6ibwcneavBLrpxax2NkuzzRlsb5a372V0TTUtfJaVdqbWfGnoqVjsvTTGuR8fOf7e08qAph%2Fe%2FG3PxDk7Iq63e6ub42tcoVryA9SjdwWGidhhtZwV6AeYndGY6TDWVkbpgfomSFgSOCExJUyIL%2FD31bo322lWrxIQosSzPyKBLvvCgX6qn2Mc71z8R6Htz0bW%2FlJfZKNnntBSfg%2BTxpehFYe5Mh%2BLi%2BJL17DdKsfXiiEZJQbC2%2BSUrCo8sfg882gX751TOuDKhzUdxCwYUeebkKaiPBoRZMNt3sRWC%2FSgw5izp51%2FjLhi2G3qKcUQPYcZ4OjAOPw0L4WaV%2FdS2J8xcQLBvhGWD607GBB9ESYxPZRKZrTvL0uy9rL7xMSnzw5MJ1QPdWimGZoz4HoQBGoa4HyBEAGlHrfe1DtbSzULrG3S97Z6qEgfaN71NLvtMOjYowniVNmO4V2G9xV4qZQx%2FbMRqLIHgEDY2ZSKOS4uWcSMmweSSaen7d%2BIbamEJfhH2lS1Y81xuMNnC8MAGOqUBbMoq0fYMkiGU%2B4fhKHHjfjp1JTsiPEaFr0FJjqEQqNaoIuXvr%2FqzAftINs8jKGVqCDnpLQA9V5%2Fmwb2MGKDSBLrfYcH6gMuQ9wD4xG83%2B6yNfFxzNDBmtT3MoydoWqcrGieBzJWPXxqrF734w%2FmATzuO81Brvg43mLZ%2FWN%2FtLTS9MGzPG5eriypsSKkFJjYJBBv9%2FTsM8%2FVMwlvGeemkrVdjK7vk&X-Amz-Signature=4de4f93ecd56499870ebe17b5fb925c4f8387b2e496cb7dd407337718086da93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLR3HDT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDwphaXu5mgPY0ebt1MG1cWFwF2pN0rOJjLHEXDr94xAiEAhQwJixklDlC6B9QglwXkvQFVxR9CNYAR8nPrtqApMr8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCLQTXs3ZUwhGJNUCCrcA3fkG1%2Bzuave%2FGL%2BEkiCUy7tLO1vrjPHRtO0Tfu4QnL4r7mq0NlE9MopmpsGYM3SAwanFJn0um3x9oVCfABC2FMdkDdZpBW5XmbNdd%2Fr2y6gObVUzd6ibwcneavBLrpxax2NkuzzRlsb5a372V0TTUtfJaVdqbWfGnoqVjsvTTGuR8fOf7e08qAph%2Fe%2FG3PxDk7Iq63e6ub42tcoVryA9SjdwWGidhhtZwV6AeYndGY6TDWVkbpgfomSFgSOCExJUyIL%2FD31bo322lWrxIQosSzPyKBLvvCgX6qn2Mc71z8R6Htz0bW%2FlJfZKNnntBSfg%2BTxpehFYe5Mh%2BLi%2BJL17DdKsfXiiEZJQbC2%2BSUrCo8sfg882gX751TOuDKhzUdxCwYUeebkKaiPBoRZMNt3sRWC%2FSgw5izp51%2FjLhi2G3qKcUQPYcZ4OjAOPw0L4WaV%2FdS2J8xcQLBvhGWD607GBB9ESYxPZRKZrTvL0uy9rL7xMSnzw5MJ1QPdWimGZoz4HoQBGoa4HyBEAGlHrfe1DtbSzULrG3S97Z6qEgfaN71NLvtMOjYowniVNmO4V2G9xV4qZQx%2FbMRqLIHgEDY2ZSKOS4uWcSMmweSSaen7d%2BIbamEJfhH2lS1Y81xuMNnC8MAGOqUBbMoq0fYMkiGU%2B4fhKHHjfjp1JTsiPEaFr0FJjqEQqNaoIuXvr%2FqzAftINs8jKGVqCDnpLQA9V5%2Fmwb2MGKDSBLrfYcH6gMuQ9wD4xG83%2B6yNfFxzNDBmtT3MoydoWqcrGieBzJWPXxqrF734w%2FmATzuO81Brvg43mLZ%2FWN%2FtLTS9MGzPG5eriypsSKkFJjYJBBv9%2FTsM8%2FVMwlvGeemkrVdjK7vk&X-Amz-Signature=a33a665f960c3ffc514b0c93aa4a82423a657bafcef44513c74adce876361bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLR3HDT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDwphaXu5mgPY0ebt1MG1cWFwF2pN0rOJjLHEXDr94xAiEAhQwJixklDlC6B9QglwXkvQFVxR9CNYAR8nPrtqApMr8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCLQTXs3ZUwhGJNUCCrcA3fkG1%2Bzuave%2FGL%2BEkiCUy7tLO1vrjPHRtO0Tfu4QnL4r7mq0NlE9MopmpsGYM3SAwanFJn0um3x9oVCfABC2FMdkDdZpBW5XmbNdd%2Fr2y6gObVUzd6ibwcneavBLrpxax2NkuzzRlsb5a372V0TTUtfJaVdqbWfGnoqVjsvTTGuR8fOf7e08qAph%2Fe%2FG3PxDk7Iq63e6ub42tcoVryA9SjdwWGidhhtZwV6AeYndGY6TDWVkbpgfomSFgSOCExJUyIL%2FD31bo322lWrxIQosSzPyKBLvvCgX6qn2Mc71z8R6Htz0bW%2FlJfZKNnntBSfg%2BTxpehFYe5Mh%2BLi%2BJL17DdKsfXiiEZJQbC2%2BSUrCo8sfg882gX751TOuDKhzUdxCwYUeebkKaiPBoRZMNt3sRWC%2FSgw5izp51%2FjLhi2G3qKcUQPYcZ4OjAOPw0L4WaV%2FdS2J8xcQLBvhGWD607GBB9ESYxPZRKZrTvL0uy9rL7xMSnzw5MJ1QPdWimGZoz4HoQBGoa4HyBEAGlHrfe1DtbSzULrG3S97Z6qEgfaN71NLvtMOjYowniVNmO4V2G9xV4qZQx%2FbMRqLIHgEDY2ZSKOS4uWcSMmweSSaen7d%2BIbamEJfhH2lS1Y81xuMNnC8MAGOqUBbMoq0fYMkiGU%2B4fhKHHjfjp1JTsiPEaFr0FJjqEQqNaoIuXvr%2FqzAftINs8jKGVqCDnpLQA9V5%2Fmwb2MGKDSBLrfYcH6gMuQ9wD4xG83%2B6yNfFxzNDBmtT3MoydoWqcrGieBzJWPXxqrF734w%2FmATzuO81Brvg43mLZ%2FWN%2FtLTS9MGzPG5eriypsSKkFJjYJBBv9%2FTsM8%2FVMwlvGeemkrVdjK7vk&X-Amz-Signature=53d6dfea383b8396847babb8ff77a0375bd74cd8327d2ce9fe385fcb3722a7b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCLR3HDT%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDwphaXu5mgPY0ebt1MG1cWFwF2pN0rOJjLHEXDr94xAiEAhQwJixklDlC6B9QglwXkvQFVxR9CNYAR8nPrtqApMr8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDCLQTXs3ZUwhGJNUCCrcA3fkG1%2Bzuave%2FGL%2BEkiCUy7tLO1vrjPHRtO0Tfu4QnL4r7mq0NlE9MopmpsGYM3SAwanFJn0um3x9oVCfABC2FMdkDdZpBW5XmbNdd%2Fr2y6gObVUzd6ibwcneavBLrpxax2NkuzzRlsb5a372V0TTUtfJaVdqbWfGnoqVjsvTTGuR8fOf7e08qAph%2Fe%2FG3PxDk7Iq63e6ub42tcoVryA9SjdwWGidhhtZwV6AeYndGY6TDWVkbpgfomSFgSOCExJUyIL%2FD31bo322lWrxIQosSzPyKBLvvCgX6qn2Mc71z8R6Htz0bW%2FlJfZKNnntBSfg%2BTxpehFYe5Mh%2BLi%2BJL17DdKsfXiiEZJQbC2%2BSUrCo8sfg882gX751TOuDKhzUdxCwYUeebkKaiPBoRZMNt3sRWC%2FSgw5izp51%2FjLhi2G3qKcUQPYcZ4OjAOPw0L4WaV%2FdS2J8xcQLBvhGWD607GBB9ESYxPZRKZrTvL0uy9rL7xMSnzw5MJ1QPdWimGZoz4HoQBGoa4HyBEAGlHrfe1DtbSzULrG3S97Z6qEgfaN71NLvtMOjYowniVNmO4V2G9xV4qZQx%2FbMRqLIHgEDY2ZSKOS4uWcSMmweSSaen7d%2BIbamEJfhH2lS1Y81xuMNnC8MAGOqUBbMoq0fYMkiGU%2B4fhKHHjfjp1JTsiPEaFr0FJjqEQqNaoIuXvr%2FqzAftINs8jKGVqCDnpLQA9V5%2Fmwb2MGKDSBLrfYcH6gMuQ9wD4xG83%2B6yNfFxzNDBmtT3MoydoWqcrGieBzJWPXxqrF734w%2FmATzuO81Brvg43mLZ%2FWN%2FtLTS9MGzPG5eriypsSKkFJjYJBBv9%2FTsM8%2FVMwlvGeemkrVdjK7vk&X-Amz-Signature=315234bd184346f4b6c1b20e79d78f963e75f210c896e3314eac6812df0c5536&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
