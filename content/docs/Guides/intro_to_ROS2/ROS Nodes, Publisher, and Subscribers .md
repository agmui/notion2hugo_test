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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2RTCQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIWKBEdG3gpL5inYSSYKbQf5O2fWttQahyRSgaoKgdIAiBLb1zSxKmvgl8z4Z%2FyAFXtrRIcRyPqRJscxtyhZhqwoyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM56qo1v%2FELuVXfafbKtwDYcaYL%2FRs2Y0zGioRKgFu7bvt%2BKSqzW6IT0DwvrmTb%2FXVtczhJnR0J3opwwI13HybjEOFKJFfWu4wSeHmpJiDRI1Ik5aTvoIp1%2BH%2F6o%2FQWxkih2mIJ3r0feqRWSaTChPhqRJKZlZv8cY20uFBettvVwVTNs%2BbH50mSbUBYxMMIovbxd4%2BUrPteHKIY8u5WssPvjla10tLl9nXJTPLnwjVr6bHW31ZmCLLWnyd2kYxeuq%2FTOBXpDrHrWu2P8TsCGQRATMWVByU9Ai9cGB%2BkK9Zixqqjvq9OZGvVotvt6cxFlh%2FRWonQL0bT3qmA9cu9yOmIyNJzbio04iUEaJIw26p5TM%2BoRsz9C7XyMdUClghpGcp7XIWKkV2azY2h5jQ8b4mobaotLIUR1yn8YtvRhGVf0AGDC6086v9Sz8Kkvwn0iWzus%2BmfdF%2BbqjyjQQOBj0E2n%2BxGWg59zLqsxTYv1RcAe4i3k3gvyNh%2B%2FnhgrXN%2FrueGkHC4ynSFbliuEdceaCCeDmX0x9NCrv6DxUmVENlunbBsvsQ58sUrwUfTKLspKVsMDT3gHF3f4YQ3y4uA9VeKsTyToSWJ2eDKvZj5p8X4ZjcB4U7LE3Kzux6IfoS51sHYf3sCYzZ2Ompfd8wgb6LwgY6pgGKuWrRJfvEZEN8I45tY7lBEn73owClE1yN08uuPOrP69BxslYs6%2FzTG6bSVLUpM7rWrYL4FlDsGtdNZoyDKrIofvnz6EDzz8O08f9%2FSgTQ4%2BrPjh7saHR%2BAac0ME3hQlpEGlqsfvZcpUq%2F0dLJFFYSvww7UaVpHjVCPaMafuFkbxkYvXDLPpNmfux4v5GwNspdsp1CkAZ52vqnduSF4VWTkPqPJW3L&X-Amz-Signature=7a9267bc8980e2c9052199a23499878495e2453f694b1bc8e3f9ffbbfc57548f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2RTCQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIWKBEdG3gpL5inYSSYKbQf5O2fWttQahyRSgaoKgdIAiBLb1zSxKmvgl8z4Z%2FyAFXtrRIcRyPqRJscxtyhZhqwoyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM56qo1v%2FELuVXfafbKtwDYcaYL%2FRs2Y0zGioRKgFu7bvt%2BKSqzW6IT0DwvrmTb%2FXVtczhJnR0J3opwwI13HybjEOFKJFfWu4wSeHmpJiDRI1Ik5aTvoIp1%2BH%2F6o%2FQWxkih2mIJ3r0feqRWSaTChPhqRJKZlZv8cY20uFBettvVwVTNs%2BbH50mSbUBYxMMIovbxd4%2BUrPteHKIY8u5WssPvjla10tLl9nXJTPLnwjVr6bHW31ZmCLLWnyd2kYxeuq%2FTOBXpDrHrWu2P8TsCGQRATMWVByU9Ai9cGB%2BkK9Zixqqjvq9OZGvVotvt6cxFlh%2FRWonQL0bT3qmA9cu9yOmIyNJzbio04iUEaJIw26p5TM%2BoRsz9C7XyMdUClghpGcp7XIWKkV2azY2h5jQ8b4mobaotLIUR1yn8YtvRhGVf0AGDC6086v9Sz8Kkvwn0iWzus%2BmfdF%2BbqjyjQQOBj0E2n%2BxGWg59zLqsxTYv1RcAe4i3k3gvyNh%2B%2FnhgrXN%2FrueGkHC4ynSFbliuEdceaCCeDmX0x9NCrv6DxUmVENlunbBsvsQ58sUrwUfTKLspKVsMDT3gHF3f4YQ3y4uA9VeKsTyToSWJ2eDKvZj5p8X4ZjcB4U7LE3Kzux6IfoS51sHYf3sCYzZ2Ompfd8wgb6LwgY6pgGKuWrRJfvEZEN8I45tY7lBEn73owClE1yN08uuPOrP69BxslYs6%2FzTG6bSVLUpM7rWrYL4FlDsGtdNZoyDKrIofvnz6EDzz8O08f9%2FSgTQ4%2BrPjh7saHR%2BAac0ME3hQlpEGlqsfvZcpUq%2F0dLJFFYSvww7UaVpHjVCPaMafuFkbxkYvXDLPpNmfux4v5GwNspdsp1CkAZ52vqnduSF4VWTkPqPJW3L&X-Amz-Signature=d005f7b423f4d193c19badc8df48e15227481f7e26d1c96eae6f9e0657618dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2RTCQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIWKBEdG3gpL5inYSSYKbQf5O2fWttQahyRSgaoKgdIAiBLb1zSxKmvgl8z4Z%2FyAFXtrRIcRyPqRJscxtyhZhqwoyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM56qo1v%2FELuVXfafbKtwDYcaYL%2FRs2Y0zGioRKgFu7bvt%2BKSqzW6IT0DwvrmTb%2FXVtczhJnR0J3opwwI13HybjEOFKJFfWu4wSeHmpJiDRI1Ik5aTvoIp1%2BH%2F6o%2FQWxkih2mIJ3r0feqRWSaTChPhqRJKZlZv8cY20uFBettvVwVTNs%2BbH50mSbUBYxMMIovbxd4%2BUrPteHKIY8u5WssPvjla10tLl9nXJTPLnwjVr6bHW31ZmCLLWnyd2kYxeuq%2FTOBXpDrHrWu2P8TsCGQRATMWVByU9Ai9cGB%2BkK9Zixqqjvq9OZGvVotvt6cxFlh%2FRWonQL0bT3qmA9cu9yOmIyNJzbio04iUEaJIw26p5TM%2BoRsz9C7XyMdUClghpGcp7XIWKkV2azY2h5jQ8b4mobaotLIUR1yn8YtvRhGVf0AGDC6086v9Sz8Kkvwn0iWzus%2BmfdF%2BbqjyjQQOBj0E2n%2BxGWg59zLqsxTYv1RcAe4i3k3gvyNh%2B%2FnhgrXN%2FrueGkHC4ynSFbliuEdceaCCeDmX0x9NCrv6DxUmVENlunbBsvsQ58sUrwUfTKLspKVsMDT3gHF3f4YQ3y4uA9VeKsTyToSWJ2eDKvZj5p8X4ZjcB4U7LE3Kzux6IfoS51sHYf3sCYzZ2Ompfd8wgb6LwgY6pgGKuWrRJfvEZEN8I45tY7lBEn73owClE1yN08uuPOrP69BxslYs6%2FzTG6bSVLUpM7rWrYL4FlDsGtdNZoyDKrIofvnz6EDzz8O08f9%2FSgTQ4%2BrPjh7saHR%2BAac0ME3hQlpEGlqsfvZcpUq%2F0dLJFFYSvww7UaVpHjVCPaMafuFkbxkYvXDLPpNmfux4v5GwNspdsp1CkAZ52vqnduSF4VWTkPqPJW3L&X-Amz-Signature=2617a962caacef07abf9728d859af2f28f6004176686df16de5d610cd54554ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2RTCQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIWKBEdG3gpL5inYSSYKbQf5O2fWttQahyRSgaoKgdIAiBLb1zSxKmvgl8z4Z%2FyAFXtrRIcRyPqRJscxtyhZhqwoyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM56qo1v%2FELuVXfafbKtwDYcaYL%2FRs2Y0zGioRKgFu7bvt%2BKSqzW6IT0DwvrmTb%2FXVtczhJnR0J3opwwI13HybjEOFKJFfWu4wSeHmpJiDRI1Ik5aTvoIp1%2BH%2F6o%2FQWxkih2mIJ3r0feqRWSaTChPhqRJKZlZv8cY20uFBettvVwVTNs%2BbH50mSbUBYxMMIovbxd4%2BUrPteHKIY8u5WssPvjla10tLl9nXJTPLnwjVr6bHW31ZmCLLWnyd2kYxeuq%2FTOBXpDrHrWu2P8TsCGQRATMWVByU9Ai9cGB%2BkK9Zixqqjvq9OZGvVotvt6cxFlh%2FRWonQL0bT3qmA9cu9yOmIyNJzbio04iUEaJIw26p5TM%2BoRsz9C7XyMdUClghpGcp7XIWKkV2azY2h5jQ8b4mobaotLIUR1yn8YtvRhGVf0AGDC6086v9Sz8Kkvwn0iWzus%2BmfdF%2BbqjyjQQOBj0E2n%2BxGWg59zLqsxTYv1RcAe4i3k3gvyNh%2B%2FnhgrXN%2FrueGkHC4ynSFbliuEdceaCCeDmX0x9NCrv6DxUmVENlunbBsvsQ58sUrwUfTKLspKVsMDT3gHF3f4YQ3y4uA9VeKsTyToSWJ2eDKvZj5p8X4ZjcB4U7LE3Kzux6IfoS51sHYf3sCYzZ2Ompfd8wgb6LwgY6pgGKuWrRJfvEZEN8I45tY7lBEn73owClE1yN08uuPOrP69BxslYs6%2FzTG6bSVLUpM7rWrYL4FlDsGtdNZoyDKrIofvnz6EDzz8O08f9%2FSgTQ4%2BrPjh7saHR%2BAac0ME3hQlpEGlqsfvZcpUq%2F0dLJFFYSvww7UaVpHjVCPaMafuFkbxkYvXDLPpNmfux4v5GwNspdsp1CkAZ52vqnduSF4VWTkPqPJW3L&X-Amz-Signature=7d869b77a18a0aaaf39233c894cf1dea2f183af166fd4cec6ca89c5eabd86d34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2RTCQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIWKBEdG3gpL5inYSSYKbQf5O2fWttQahyRSgaoKgdIAiBLb1zSxKmvgl8z4Z%2FyAFXtrRIcRyPqRJscxtyhZhqwoyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM56qo1v%2FELuVXfafbKtwDYcaYL%2FRs2Y0zGioRKgFu7bvt%2BKSqzW6IT0DwvrmTb%2FXVtczhJnR0J3opwwI13HybjEOFKJFfWu4wSeHmpJiDRI1Ik5aTvoIp1%2BH%2F6o%2FQWxkih2mIJ3r0feqRWSaTChPhqRJKZlZv8cY20uFBettvVwVTNs%2BbH50mSbUBYxMMIovbxd4%2BUrPteHKIY8u5WssPvjla10tLl9nXJTPLnwjVr6bHW31ZmCLLWnyd2kYxeuq%2FTOBXpDrHrWu2P8TsCGQRATMWVByU9Ai9cGB%2BkK9Zixqqjvq9OZGvVotvt6cxFlh%2FRWonQL0bT3qmA9cu9yOmIyNJzbio04iUEaJIw26p5TM%2BoRsz9C7XyMdUClghpGcp7XIWKkV2azY2h5jQ8b4mobaotLIUR1yn8YtvRhGVf0AGDC6086v9Sz8Kkvwn0iWzus%2BmfdF%2BbqjyjQQOBj0E2n%2BxGWg59zLqsxTYv1RcAe4i3k3gvyNh%2B%2FnhgrXN%2FrueGkHC4ynSFbliuEdceaCCeDmX0x9NCrv6DxUmVENlunbBsvsQ58sUrwUfTKLspKVsMDT3gHF3f4YQ3y4uA9VeKsTyToSWJ2eDKvZj5p8X4ZjcB4U7LE3Kzux6IfoS51sHYf3sCYzZ2Ompfd8wgb6LwgY6pgGKuWrRJfvEZEN8I45tY7lBEn73owClE1yN08uuPOrP69BxslYs6%2FzTG6bSVLUpM7rWrYL4FlDsGtdNZoyDKrIofvnz6EDzz8O08f9%2FSgTQ4%2BrPjh7saHR%2BAac0ME3hQlpEGlqsfvZcpUq%2F0dLJFFYSvww7UaVpHjVCPaMafuFkbxkYvXDLPpNmfux4v5GwNspdsp1CkAZ52vqnduSF4VWTkPqPJW3L&X-Amz-Signature=3ec4d9e2c8f7c11b228b3797ead4f4e5d34c6971019dd784f7ca0958f7909cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2RTCQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIWKBEdG3gpL5inYSSYKbQf5O2fWttQahyRSgaoKgdIAiBLb1zSxKmvgl8z4Z%2FyAFXtrRIcRyPqRJscxtyhZhqwoyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM56qo1v%2FELuVXfafbKtwDYcaYL%2FRs2Y0zGioRKgFu7bvt%2BKSqzW6IT0DwvrmTb%2FXVtczhJnR0J3opwwI13HybjEOFKJFfWu4wSeHmpJiDRI1Ik5aTvoIp1%2BH%2F6o%2FQWxkih2mIJ3r0feqRWSaTChPhqRJKZlZv8cY20uFBettvVwVTNs%2BbH50mSbUBYxMMIovbxd4%2BUrPteHKIY8u5WssPvjla10tLl9nXJTPLnwjVr6bHW31ZmCLLWnyd2kYxeuq%2FTOBXpDrHrWu2P8TsCGQRATMWVByU9Ai9cGB%2BkK9Zixqqjvq9OZGvVotvt6cxFlh%2FRWonQL0bT3qmA9cu9yOmIyNJzbio04iUEaJIw26p5TM%2BoRsz9C7XyMdUClghpGcp7XIWKkV2azY2h5jQ8b4mobaotLIUR1yn8YtvRhGVf0AGDC6086v9Sz8Kkvwn0iWzus%2BmfdF%2BbqjyjQQOBj0E2n%2BxGWg59zLqsxTYv1RcAe4i3k3gvyNh%2B%2FnhgrXN%2FrueGkHC4ynSFbliuEdceaCCeDmX0x9NCrv6DxUmVENlunbBsvsQ58sUrwUfTKLspKVsMDT3gHF3f4YQ3y4uA9VeKsTyToSWJ2eDKvZj5p8X4ZjcB4U7LE3Kzux6IfoS51sHYf3sCYzZ2Ompfd8wgb6LwgY6pgGKuWrRJfvEZEN8I45tY7lBEn73owClE1yN08uuPOrP69BxslYs6%2FzTG6bSVLUpM7rWrYL4FlDsGtdNZoyDKrIofvnz6EDzz8O08f9%2FSgTQ4%2BrPjh7saHR%2BAac0ME3hQlpEGlqsfvZcpUq%2F0dLJFFYSvww7UaVpHjVCPaMafuFkbxkYvXDLPpNmfux4v5GwNspdsp1CkAZ52vqnduSF4VWTkPqPJW3L&X-Amz-Signature=7d949edae734a118d9d68fc7abc728e041fcac528e2dab936d9ae8a2da839bec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2RTCQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIWKBEdG3gpL5inYSSYKbQf5O2fWttQahyRSgaoKgdIAiBLb1zSxKmvgl8z4Z%2FyAFXtrRIcRyPqRJscxtyhZhqwoyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM56qo1v%2FELuVXfafbKtwDYcaYL%2FRs2Y0zGioRKgFu7bvt%2BKSqzW6IT0DwvrmTb%2FXVtczhJnR0J3opwwI13HybjEOFKJFfWu4wSeHmpJiDRI1Ik5aTvoIp1%2BH%2F6o%2FQWxkih2mIJ3r0feqRWSaTChPhqRJKZlZv8cY20uFBettvVwVTNs%2BbH50mSbUBYxMMIovbxd4%2BUrPteHKIY8u5WssPvjla10tLl9nXJTPLnwjVr6bHW31ZmCLLWnyd2kYxeuq%2FTOBXpDrHrWu2P8TsCGQRATMWVByU9Ai9cGB%2BkK9Zixqqjvq9OZGvVotvt6cxFlh%2FRWonQL0bT3qmA9cu9yOmIyNJzbio04iUEaJIw26p5TM%2BoRsz9C7XyMdUClghpGcp7XIWKkV2azY2h5jQ8b4mobaotLIUR1yn8YtvRhGVf0AGDC6086v9Sz8Kkvwn0iWzus%2BmfdF%2BbqjyjQQOBj0E2n%2BxGWg59zLqsxTYv1RcAe4i3k3gvyNh%2B%2FnhgrXN%2FrueGkHC4ynSFbliuEdceaCCeDmX0x9NCrv6DxUmVENlunbBsvsQ58sUrwUfTKLspKVsMDT3gHF3f4YQ3y4uA9VeKsTyToSWJ2eDKvZj5p8X4ZjcB4U7LE3Kzux6IfoS51sHYf3sCYzZ2Ompfd8wgb6LwgY6pgGKuWrRJfvEZEN8I45tY7lBEn73owClE1yN08uuPOrP69BxslYs6%2FzTG6bSVLUpM7rWrYL4FlDsGtdNZoyDKrIofvnz6EDzz8O08f9%2FSgTQ4%2BrPjh7saHR%2BAac0ME3hQlpEGlqsfvZcpUq%2F0dLJFFYSvww7UaVpHjVCPaMafuFkbxkYvXDLPpNmfux4v5GwNspdsp1CkAZ52vqnduSF4VWTkPqPJW3L&X-Amz-Signature=724509282e595061e814f898b86e9cc878aa858f4ac9eece0ba3043cd4b97150&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5Y2RTCQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIWKBEdG3gpL5inYSSYKbQf5O2fWttQahyRSgaoKgdIAiBLb1zSxKmvgl8z4Z%2FyAFXtrRIcRyPqRJscxtyhZhqwoyr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIM56qo1v%2FELuVXfafbKtwDYcaYL%2FRs2Y0zGioRKgFu7bvt%2BKSqzW6IT0DwvrmTb%2FXVtczhJnR0J3opwwI13HybjEOFKJFfWu4wSeHmpJiDRI1Ik5aTvoIp1%2BH%2F6o%2FQWxkih2mIJ3r0feqRWSaTChPhqRJKZlZv8cY20uFBettvVwVTNs%2BbH50mSbUBYxMMIovbxd4%2BUrPteHKIY8u5WssPvjla10tLl9nXJTPLnwjVr6bHW31ZmCLLWnyd2kYxeuq%2FTOBXpDrHrWu2P8TsCGQRATMWVByU9Ai9cGB%2BkK9Zixqqjvq9OZGvVotvt6cxFlh%2FRWonQL0bT3qmA9cu9yOmIyNJzbio04iUEaJIw26p5TM%2BoRsz9C7XyMdUClghpGcp7XIWKkV2azY2h5jQ8b4mobaotLIUR1yn8YtvRhGVf0AGDC6086v9Sz8Kkvwn0iWzus%2BmfdF%2BbqjyjQQOBj0E2n%2BxGWg59zLqsxTYv1RcAe4i3k3gvyNh%2B%2FnhgrXN%2FrueGkHC4ynSFbliuEdceaCCeDmX0x9NCrv6DxUmVENlunbBsvsQ58sUrwUfTKLspKVsMDT3gHF3f4YQ3y4uA9VeKsTyToSWJ2eDKvZj5p8X4ZjcB4U7LE3Kzux6IfoS51sHYf3sCYzZ2Ompfd8wgb6LwgY6pgGKuWrRJfvEZEN8I45tY7lBEn73owClE1yN08uuPOrP69BxslYs6%2FzTG6bSVLUpM7rWrYL4FlDsGtdNZoyDKrIofvnz6EDzz8O08f9%2FSgTQ4%2BrPjh7saHR%2BAac0ME3hQlpEGlqsfvZcpUq%2F0dLJFFYSvww7UaVpHjVCPaMafuFkbxkYvXDLPpNmfux4v5GwNspdsp1CkAZ52vqnduSF4VWTkPqPJW3L&X-Amz-Signature=20348cb67ffecf4cb9617c2a0a12b22b36f6143f5a28934cc3a034b810734e95&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
