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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEG7YZD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5r0aklHb2Ho%2B4ZLASEhKNswk%2BQpaHEp630HFheTvsuAiEAgn6dT%2FAbwXszJ1FwysOoqFQByJSWtjOYLqM5pc4FRBUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHj1M4tzjHP5%2F6V6oircAy84WvkqYGI3UtvkFTmGsv7DTiMIvLoDpo67Xt9%2FZUv06gcHfZXjL6COpwW175ijAO52%2F19N0ra5RwZ1HSiXTka6r2RlMc8Mi9kdGZWQBMLlqcXrDecXkuZjl9EWCshyrmVkDidHI61QI1iX3Xk4IVawNdQoPJwr1Xo0rjYO32kmnHwAIoV1a%2BbxUfRjZV98lEY3NJ1Q3nOP8VKgmwiLRuU3FZjfP7njv1UzknmRIoviWtrrDu6QvJIe8UPaqZYBR08ItKbXD6fLljDiOoH3zN3%2FR1P6QaaZSnwENcfyADdUNQft2eiLocMNVSGuI82MxbTIPnh261mX5oxURvruym6%2FtEC8Dt2YcQePpOHWd83MkKZiixDTx88WsijwRuh%2BbYuT6%2BWt%2FGBcsdLTAyrZMC0bEtk%2BKAK7K7a%2FLVVVIjaS8kiDNgA1puT0M0yjf9Mq%2F7ILZ%2B8FF2qnno%2Fgm1Qv%2BdlEygJb2psifbolmhXotSI1BnJwHMofi%2BrdOPras8Y6wQsz8zW2CYgmfiDMcUrXmRxC%2FJSa1I5P1TTk2Z%2BfV6gRiHdLX%2BCPfEr6IlXyFxuAeMLBdf350dunPfgSCY3tOaeN1gbX2sWv3xUiV9vrfb32vD%2BsFUSBhiD5cLK5MMiUgsAGOqUBHqfKmhSEyy0cP1Z7Cl7%2ByPDMe0%2BilFlW8Wi0pAtOKuuILOmC5cNOdEiSpIlfzNL1hJ%2FRFCEy58MgHn4xxTq55h%2FUSqtku0wjxun1RqFGgWZj0zBQkY0b1auNvHazsJoefVizfOYz%2FoeInJcWkLuZ%2B7PZ%2BafW%2B4kWbmaHYndZWrQwzauLDzqeU5%2FFItzU8oiTT2zonDV5SqH2zxezNe3GEM7g3CPE&X-Amz-Signature=d40b71935bc2e3652fb214a7aa131bddbe466d020c0c7f49a2296d1a2169964b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEG7YZD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5r0aklHb2Ho%2B4ZLASEhKNswk%2BQpaHEp630HFheTvsuAiEAgn6dT%2FAbwXszJ1FwysOoqFQByJSWtjOYLqM5pc4FRBUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHj1M4tzjHP5%2F6V6oircAy84WvkqYGI3UtvkFTmGsv7DTiMIvLoDpo67Xt9%2FZUv06gcHfZXjL6COpwW175ijAO52%2F19N0ra5RwZ1HSiXTka6r2RlMc8Mi9kdGZWQBMLlqcXrDecXkuZjl9EWCshyrmVkDidHI61QI1iX3Xk4IVawNdQoPJwr1Xo0rjYO32kmnHwAIoV1a%2BbxUfRjZV98lEY3NJ1Q3nOP8VKgmwiLRuU3FZjfP7njv1UzknmRIoviWtrrDu6QvJIe8UPaqZYBR08ItKbXD6fLljDiOoH3zN3%2FR1P6QaaZSnwENcfyADdUNQft2eiLocMNVSGuI82MxbTIPnh261mX5oxURvruym6%2FtEC8Dt2YcQePpOHWd83MkKZiixDTx88WsijwRuh%2BbYuT6%2BWt%2FGBcsdLTAyrZMC0bEtk%2BKAK7K7a%2FLVVVIjaS8kiDNgA1puT0M0yjf9Mq%2F7ILZ%2B8FF2qnno%2Fgm1Qv%2BdlEygJb2psifbolmhXotSI1BnJwHMofi%2BrdOPras8Y6wQsz8zW2CYgmfiDMcUrXmRxC%2FJSa1I5P1TTk2Z%2BfV6gRiHdLX%2BCPfEr6IlXyFxuAeMLBdf350dunPfgSCY3tOaeN1gbX2sWv3xUiV9vrfb32vD%2BsFUSBhiD5cLK5MMiUgsAGOqUBHqfKmhSEyy0cP1Z7Cl7%2ByPDMe0%2BilFlW8Wi0pAtOKuuILOmC5cNOdEiSpIlfzNL1hJ%2FRFCEy58MgHn4xxTq55h%2FUSqtku0wjxun1RqFGgWZj0zBQkY0b1auNvHazsJoefVizfOYz%2FoeInJcWkLuZ%2B7PZ%2BafW%2B4kWbmaHYndZWrQwzauLDzqeU5%2FFItzU8oiTT2zonDV5SqH2zxezNe3GEM7g3CPE&X-Amz-Signature=99fcd8e1eb081d3b88ae760a9e94a50e3dc8b7e76a6c578a054b0586ab274c87&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEG7YZD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5r0aklHb2Ho%2B4ZLASEhKNswk%2BQpaHEp630HFheTvsuAiEAgn6dT%2FAbwXszJ1FwysOoqFQByJSWtjOYLqM5pc4FRBUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHj1M4tzjHP5%2F6V6oircAy84WvkqYGI3UtvkFTmGsv7DTiMIvLoDpo67Xt9%2FZUv06gcHfZXjL6COpwW175ijAO52%2F19N0ra5RwZ1HSiXTka6r2RlMc8Mi9kdGZWQBMLlqcXrDecXkuZjl9EWCshyrmVkDidHI61QI1iX3Xk4IVawNdQoPJwr1Xo0rjYO32kmnHwAIoV1a%2BbxUfRjZV98lEY3NJ1Q3nOP8VKgmwiLRuU3FZjfP7njv1UzknmRIoviWtrrDu6QvJIe8UPaqZYBR08ItKbXD6fLljDiOoH3zN3%2FR1P6QaaZSnwENcfyADdUNQft2eiLocMNVSGuI82MxbTIPnh261mX5oxURvruym6%2FtEC8Dt2YcQePpOHWd83MkKZiixDTx88WsijwRuh%2BbYuT6%2BWt%2FGBcsdLTAyrZMC0bEtk%2BKAK7K7a%2FLVVVIjaS8kiDNgA1puT0M0yjf9Mq%2F7ILZ%2B8FF2qnno%2Fgm1Qv%2BdlEygJb2psifbolmhXotSI1BnJwHMofi%2BrdOPras8Y6wQsz8zW2CYgmfiDMcUrXmRxC%2FJSa1I5P1TTk2Z%2BfV6gRiHdLX%2BCPfEr6IlXyFxuAeMLBdf350dunPfgSCY3tOaeN1gbX2sWv3xUiV9vrfb32vD%2BsFUSBhiD5cLK5MMiUgsAGOqUBHqfKmhSEyy0cP1Z7Cl7%2ByPDMe0%2BilFlW8Wi0pAtOKuuILOmC5cNOdEiSpIlfzNL1hJ%2FRFCEy58MgHn4xxTq55h%2FUSqtku0wjxun1RqFGgWZj0zBQkY0b1auNvHazsJoefVizfOYz%2FoeInJcWkLuZ%2B7PZ%2BafW%2B4kWbmaHYndZWrQwzauLDzqeU5%2FFItzU8oiTT2zonDV5SqH2zxezNe3GEM7g3CPE&X-Amz-Signature=e278cf309365e2a93ba3a43d3ffa5bc8441a5ba1fbec611479be5f5c1613d55b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEG7YZD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5r0aklHb2Ho%2B4ZLASEhKNswk%2BQpaHEp630HFheTvsuAiEAgn6dT%2FAbwXszJ1FwysOoqFQByJSWtjOYLqM5pc4FRBUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHj1M4tzjHP5%2F6V6oircAy84WvkqYGI3UtvkFTmGsv7DTiMIvLoDpo67Xt9%2FZUv06gcHfZXjL6COpwW175ijAO52%2F19N0ra5RwZ1HSiXTka6r2RlMc8Mi9kdGZWQBMLlqcXrDecXkuZjl9EWCshyrmVkDidHI61QI1iX3Xk4IVawNdQoPJwr1Xo0rjYO32kmnHwAIoV1a%2BbxUfRjZV98lEY3NJ1Q3nOP8VKgmwiLRuU3FZjfP7njv1UzknmRIoviWtrrDu6QvJIe8UPaqZYBR08ItKbXD6fLljDiOoH3zN3%2FR1P6QaaZSnwENcfyADdUNQft2eiLocMNVSGuI82MxbTIPnh261mX5oxURvruym6%2FtEC8Dt2YcQePpOHWd83MkKZiixDTx88WsijwRuh%2BbYuT6%2BWt%2FGBcsdLTAyrZMC0bEtk%2BKAK7K7a%2FLVVVIjaS8kiDNgA1puT0M0yjf9Mq%2F7ILZ%2B8FF2qnno%2Fgm1Qv%2BdlEygJb2psifbolmhXotSI1BnJwHMofi%2BrdOPras8Y6wQsz8zW2CYgmfiDMcUrXmRxC%2FJSa1I5P1TTk2Z%2BfV6gRiHdLX%2BCPfEr6IlXyFxuAeMLBdf350dunPfgSCY3tOaeN1gbX2sWv3xUiV9vrfb32vD%2BsFUSBhiD5cLK5MMiUgsAGOqUBHqfKmhSEyy0cP1Z7Cl7%2ByPDMe0%2BilFlW8Wi0pAtOKuuILOmC5cNOdEiSpIlfzNL1hJ%2FRFCEy58MgHn4xxTq55h%2FUSqtku0wjxun1RqFGgWZj0zBQkY0b1auNvHazsJoefVizfOYz%2FoeInJcWkLuZ%2B7PZ%2BafW%2B4kWbmaHYndZWrQwzauLDzqeU5%2FFItzU8oiTT2zonDV5SqH2zxezNe3GEM7g3CPE&X-Amz-Signature=8e716df9fd870f0d45e884229f49e81207fe40915523b86e4576ab0056f6adf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEG7YZD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5r0aklHb2Ho%2B4ZLASEhKNswk%2BQpaHEp630HFheTvsuAiEAgn6dT%2FAbwXszJ1FwysOoqFQByJSWtjOYLqM5pc4FRBUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHj1M4tzjHP5%2F6V6oircAy84WvkqYGI3UtvkFTmGsv7DTiMIvLoDpo67Xt9%2FZUv06gcHfZXjL6COpwW175ijAO52%2F19N0ra5RwZ1HSiXTka6r2RlMc8Mi9kdGZWQBMLlqcXrDecXkuZjl9EWCshyrmVkDidHI61QI1iX3Xk4IVawNdQoPJwr1Xo0rjYO32kmnHwAIoV1a%2BbxUfRjZV98lEY3NJ1Q3nOP8VKgmwiLRuU3FZjfP7njv1UzknmRIoviWtrrDu6QvJIe8UPaqZYBR08ItKbXD6fLljDiOoH3zN3%2FR1P6QaaZSnwENcfyADdUNQft2eiLocMNVSGuI82MxbTIPnh261mX5oxURvruym6%2FtEC8Dt2YcQePpOHWd83MkKZiixDTx88WsijwRuh%2BbYuT6%2BWt%2FGBcsdLTAyrZMC0bEtk%2BKAK7K7a%2FLVVVIjaS8kiDNgA1puT0M0yjf9Mq%2F7ILZ%2B8FF2qnno%2Fgm1Qv%2BdlEygJb2psifbolmhXotSI1BnJwHMofi%2BrdOPras8Y6wQsz8zW2CYgmfiDMcUrXmRxC%2FJSa1I5P1TTk2Z%2BfV6gRiHdLX%2BCPfEr6IlXyFxuAeMLBdf350dunPfgSCY3tOaeN1gbX2sWv3xUiV9vrfb32vD%2BsFUSBhiD5cLK5MMiUgsAGOqUBHqfKmhSEyy0cP1Z7Cl7%2ByPDMe0%2BilFlW8Wi0pAtOKuuILOmC5cNOdEiSpIlfzNL1hJ%2FRFCEy58MgHn4xxTq55h%2FUSqtku0wjxun1RqFGgWZj0zBQkY0b1auNvHazsJoefVizfOYz%2FoeInJcWkLuZ%2B7PZ%2BafW%2B4kWbmaHYndZWrQwzauLDzqeU5%2FFItzU8oiTT2zonDV5SqH2zxezNe3GEM7g3CPE&X-Amz-Signature=157b8a087956a1e37cb0dba430847ba2b0ebeceaef8a263435476bf8ef3cfe03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEG7YZD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5r0aklHb2Ho%2B4ZLASEhKNswk%2BQpaHEp630HFheTvsuAiEAgn6dT%2FAbwXszJ1FwysOoqFQByJSWtjOYLqM5pc4FRBUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHj1M4tzjHP5%2F6V6oircAy84WvkqYGI3UtvkFTmGsv7DTiMIvLoDpo67Xt9%2FZUv06gcHfZXjL6COpwW175ijAO52%2F19N0ra5RwZ1HSiXTka6r2RlMc8Mi9kdGZWQBMLlqcXrDecXkuZjl9EWCshyrmVkDidHI61QI1iX3Xk4IVawNdQoPJwr1Xo0rjYO32kmnHwAIoV1a%2BbxUfRjZV98lEY3NJ1Q3nOP8VKgmwiLRuU3FZjfP7njv1UzknmRIoviWtrrDu6QvJIe8UPaqZYBR08ItKbXD6fLljDiOoH3zN3%2FR1P6QaaZSnwENcfyADdUNQft2eiLocMNVSGuI82MxbTIPnh261mX5oxURvruym6%2FtEC8Dt2YcQePpOHWd83MkKZiixDTx88WsijwRuh%2BbYuT6%2BWt%2FGBcsdLTAyrZMC0bEtk%2BKAK7K7a%2FLVVVIjaS8kiDNgA1puT0M0yjf9Mq%2F7ILZ%2B8FF2qnno%2Fgm1Qv%2BdlEygJb2psifbolmhXotSI1BnJwHMofi%2BrdOPras8Y6wQsz8zW2CYgmfiDMcUrXmRxC%2FJSa1I5P1TTk2Z%2BfV6gRiHdLX%2BCPfEr6IlXyFxuAeMLBdf350dunPfgSCY3tOaeN1gbX2sWv3xUiV9vrfb32vD%2BsFUSBhiD5cLK5MMiUgsAGOqUBHqfKmhSEyy0cP1Z7Cl7%2ByPDMe0%2BilFlW8Wi0pAtOKuuILOmC5cNOdEiSpIlfzNL1hJ%2FRFCEy58MgHn4xxTq55h%2FUSqtku0wjxun1RqFGgWZj0zBQkY0b1auNvHazsJoefVizfOYz%2FoeInJcWkLuZ%2B7PZ%2BafW%2B4kWbmaHYndZWrQwzauLDzqeU5%2FFItzU8oiTT2zonDV5SqH2zxezNe3GEM7g3CPE&X-Amz-Signature=177e318e58ba9d33476a895f0021b4ccf218a261dc88ea0f9fa2277469db1eed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEG7YZD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5r0aklHb2Ho%2B4ZLASEhKNswk%2BQpaHEp630HFheTvsuAiEAgn6dT%2FAbwXszJ1FwysOoqFQByJSWtjOYLqM5pc4FRBUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHj1M4tzjHP5%2F6V6oircAy84WvkqYGI3UtvkFTmGsv7DTiMIvLoDpo67Xt9%2FZUv06gcHfZXjL6COpwW175ijAO52%2F19N0ra5RwZ1HSiXTka6r2RlMc8Mi9kdGZWQBMLlqcXrDecXkuZjl9EWCshyrmVkDidHI61QI1iX3Xk4IVawNdQoPJwr1Xo0rjYO32kmnHwAIoV1a%2BbxUfRjZV98lEY3NJ1Q3nOP8VKgmwiLRuU3FZjfP7njv1UzknmRIoviWtrrDu6QvJIe8UPaqZYBR08ItKbXD6fLljDiOoH3zN3%2FR1P6QaaZSnwENcfyADdUNQft2eiLocMNVSGuI82MxbTIPnh261mX5oxURvruym6%2FtEC8Dt2YcQePpOHWd83MkKZiixDTx88WsijwRuh%2BbYuT6%2BWt%2FGBcsdLTAyrZMC0bEtk%2BKAK7K7a%2FLVVVIjaS8kiDNgA1puT0M0yjf9Mq%2F7ILZ%2B8FF2qnno%2Fgm1Qv%2BdlEygJb2psifbolmhXotSI1BnJwHMofi%2BrdOPras8Y6wQsz8zW2CYgmfiDMcUrXmRxC%2FJSa1I5P1TTk2Z%2BfV6gRiHdLX%2BCPfEr6IlXyFxuAeMLBdf350dunPfgSCY3tOaeN1gbX2sWv3xUiV9vrfb32vD%2BsFUSBhiD5cLK5MMiUgsAGOqUBHqfKmhSEyy0cP1Z7Cl7%2ByPDMe0%2BilFlW8Wi0pAtOKuuILOmC5cNOdEiSpIlfzNL1hJ%2FRFCEy58MgHn4xxTq55h%2FUSqtku0wjxun1RqFGgWZj0zBQkY0b1auNvHazsJoefVizfOYz%2FoeInJcWkLuZ%2B7PZ%2BafW%2B4kWbmaHYndZWrQwzauLDzqeU5%2FFItzU8oiTT2zonDV5SqH2zxezNe3GEM7g3CPE&X-Amz-Signature=11ab549c497900ff4f0aa15a161f300301fe6cf31c8421766ceb17828a183ebf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEG7YZD%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID5r0aklHb2Ho%2B4ZLASEhKNswk%2BQpaHEp630HFheTvsuAiEAgn6dT%2FAbwXszJ1FwysOoqFQByJSWtjOYLqM5pc4FRBUq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDHj1M4tzjHP5%2F6V6oircAy84WvkqYGI3UtvkFTmGsv7DTiMIvLoDpo67Xt9%2FZUv06gcHfZXjL6COpwW175ijAO52%2F19N0ra5RwZ1HSiXTka6r2RlMc8Mi9kdGZWQBMLlqcXrDecXkuZjl9EWCshyrmVkDidHI61QI1iX3Xk4IVawNdQoPJwr1Xo0rjYO32kmnHwAIoV1a%2BbxUfRjZV98lEY3NJ1Q3nOP8VKgmwiLRuU3FZjfP7njv1UzknmRIoviWtrrDu6QvJIe8UPaqZYBR08ItKbXD6fLljDiOoH3zN3%2FR1P6QaaZSnwENcfyADdUNQft2eiLocMNVSGuI82MxbTIPnh261mX5oxURvruym6%2FtEC8Dt2YcQePpOHWd83MkKZiixDTx88WsijwRuh%2BbYuT6%2BWt%2FGBcsdLTAyrZMC0bEtk%2BKAK7K7a%2FLVVVIjaS8kiDNgA1puT0M0yjf9Mq%2F7ILZ%2B8FF2qnno%2Fgm1Qv%2BdlEygJb2psifbolmhXotSI1BnJwHMofi%2BrdOPras8Y6wQsz8zW2CYgmfiDMcUrXmRxC%2FJSa1I5P1TTk2Z%2BfV6gRiHdLX%2BCPfEr6IlXyFxuAeMLBdf350dunPfgSCY3tOaeN1gbX2sWv3xUiV9vrfb32vD%2BsFUSBhiD5cLK5MMiUgsAGOqUBHqfKmhSEyy0cP1Z7Cl7%2ByPDMe0%2BilFlW8Wi0pAtOKuuILOmC5cNOdEiSpIlfzNL1hJ%2FRFCEy58MgHn4xxTq55h%2FUSqtku0wjxun1RqFGgWZj0zBQkY0b1auNvHazsJoefVizfOYz%2FoeInJcWkLuZ%2B7PZ%2BafW%2B4kWbmaHYndZWrQwzauLDzqeU5%2FFItzU8oiTT2zonDV5SqH2zxezNe3GEM7g3CPE&X-Amz-Signature=eb0b3816dc437629a1fb8395fc2c2d1313109cc3778b11476339a8d8b13051f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
