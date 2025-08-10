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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOETRIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwdlg8RN%2F1l%2Bqz0Wz%2FH4VfyWxR9MvJ7K8j0BKWRHG8JAiAVL9574OsD8MIRV8IenvCHua5RWFpU8XM1h2QVPWhSsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2BNwOPelpFJfbZXEKtwDN0dfl77pGACwPWXn2Ug763haIP6WqShAQF5iRX6bVtBJ8G6JzY1dFH0Fa0hvQsYmUk31BtyccZnk2UkO3kRCAWooW8Mli%2BfajjptakzdOqEzQtcpJ0GV%2F7mPR1Sq05CGJ2IMwBGDQfyxY5okUHRf%2BFMpyBXAUxDfsuRU0hfxNKelKUq4pdra7NZP4%2F1qTNnT4AkQzUcwu7vkOMDjd1%2Bn7nVfBrJAEfCNmKwFSp8rWCACVML72uiz7K8fGWvrWdB1Oc%2B4wTZkTXzjtzmy4TuAoKjXoJORLQUqr9yPBrhfn6lHV1FKpIKNMPT6k8Zq1yN6yxslTc2bLuO%2BuoiOUKLG31Sggx1QxKloot%2BanNdfnMc%2BOY06mM0ekMyf9C%2FVRGIgwMn7hV0jQy34g029C5%2BJUwUNHsHte7rQpES0fWsT6%2Bd1x1h%2BzwEdfPnpTu9M4DYwAUjM5%2FCUPlEtM1ZdFXZi1wsb%2FlLTU5hmXT1K0QnFfjfMetrRk7sLR126XdTqf%2FMYDtAnnowmTNdqeDkZqkGfV804jrJ7xGKLiVGZrBkARIiT80gDg9pVMXnGThw%2B1nhrWG%2FO5y8TcRogworveaOMWLDgLzAqeNfxTTuBQVzcvCZMCvVcGkGIN81fVjww1LrjxAY6pgGhDsxpJu7TJHymMTskZLAg8wTBv%2F6Odao40TZhL5H%2BYDswwewwAVmdeNNmlLEHDEcZNAKQzjOGaNmiJPrR3gczxiTw0%2F8H303EPddrvKGbE0R06uvFPiHMawWc1WspZpshRSxTRNaxX76zt2FUeGUIhm2AkbcNN4nhF0Ci29alls%2B6%2BV%2B1HdL0N17y3l0mEtOw72xtxxQyiwORAuTd5iegMXfxbt8W&X-Amz-Signature=1c9e5081bb5e7b50c4493e0da04267e6b869cab9866fe0b7896922f0604fcf86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOETRIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwdlg8RN%2F1l%2Bqz0Wz%2FH4VfyWxR9MvJ7K8j0BKWRHG8JAiAVL9574OsD8MIRV8IenvCHua5RWFpU8XM1h2QVPWhSsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2BNwOPelpFJfbZXEKtwDN0dfl77pGACwPWXn2Ug763haIP6WqShAQF5iRX6bVtBJ8G6JzY1dFH0Fa0hvQsYmUk31BtyccZnk2UkO3kRCAWooW8Mli%2BfajjptakzdOqEzQtcpJ0GV%2F7mPR1Sq05CGJ2IMwBGDQfyxY5okUHRf%2BFMpyBXAUxDfsuRU0hfxNKelKUq4pdra7NZP4%2F1qTNnT4AkQzUcwu7vkOMDjd1%2Bn7nVfBrJAEfCNmKwFSp8rWCACVML72uiz7K8fGWvrWdB1Oc%2B4wTZkTXzjtzmy4TuAoKjXoJORLQUqr9yPBrhfn6lHV1FKpIKNMPT6k8Zq1yN6yxslTc2bLuO%2BuoiOUKLG31Sggx1QxKloot%2BanNdfnMc%2BOY06mM0ekMyf9C%2FVRGIgwMn7hV0jQy34g029C5%2BJUwUNHsHte7rQpES0fWsT6%2Bd1x1h%2BzwEdfPnpTu9M4DYwAUjM5%2FCUPlEtM1ZdFXZi1wsb%2FlLTU5hmXT1K0QnFfjfMetrRk7sLR126XdTqf%2FMYDtAnnowmTNdqeDkZqkGfV804jrJ7xGKLiVGZrBkARIiT80gDg9pVMXnGThw%2B1nhrWG%2FO5y8TcRogworveaOMWLDgLzAqeNfxTTuBQVzcvCZMCvVcGkGIN81fVjww1LrjxAY6pgGhDsxpJu7TJHymMTskZLAg8wTBv%2F6Odao40TZhL5H%2BYDswwewwAVmdeNNmlLEHDEcZNAKQzjOGaNmiJPrR3gczxiTw0%2F8H303EPddrvKGbE0R06uvFPiHMawWc1WspZpshRSxTRNaxX76zt2FUeGUIhm2AkbcNN4nhF0Ci29alls%2B6%2BV%2B1HdL0N17y3l0mEtOw72xtxxQyiwORAuTd5iegMXfxbt8W&X-Amz-Signature=23887a268ad974fadb276fbefbeebcc0c832679a1265d57716382e87abf2fb5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOETRIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwdlg8RN%2F1l%2Bqz0Wz%2FH4VfyWxR9MvJ7K8j0BKWRHG8JAiAVL9574OsD8MIRV8IenvCHua5RWFpU8XM1h2QVPWhSsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2BNwOPelpFJfbZXEKtwDN0dfl77pGACwPWXn2Ug763haIP6WqShAQF5iRX6bVtBJ8G6JzY1dFH0Fa0hvQsYmUk31BtyccZnk2UkO3kRCAWooW8Mli%2BfajjptakzdOqEzQtcpJ0GV%2F7mPR1Sq05CGJ2IMwBGDQfyxY5okUHRf%2BFMpyBXAUxDfsuRU0hfxNKelKUq4pdra7NZP4%2F1qTNnT4AkQzUcwu7vkOMDjd1%2Bn7nVfBrJAEfCNmKwFSp8rWCACVML72uiz7K8fGWvrWdB1Oc%2B4wTZkTXzjtzmy4TuAoKjXoJORLQUqr9yPBrhfn6lHV1FKpIKNMPT6k8Zq1yN6yxslTc2bLuO%2BuoiOUKLG31Sggx1QxKloot%2BanNdfnMc%2BOY06mM0ekMyf9C%2FVRGIgwMn7hV0jQy34g029C5%2BJUwUNHsHte7rQpES0fWsT6%2Bd1x1h%2BzwEdfPnpTu9M4DYwAUjM5%2FCUPlEtM1ZdFXZi1wsb%2FlLTU5hmXT1K0QnFfjfMetrRk7sLR126XdTqf%2FMYDtAnnowmTNdqeDkZqkGfV804jrJ7xGKLiVGZrBkARIiT80gDg9pVMXnGThw%2B1nhrWG%2FO5y8TcRogworveaOMWLDgLzAqeNfxTTuBQVzcvCZMCvVcGkGIN81fVjww1LrjxAY6pgGhDsxpJu7TJHymMTskZLAg8wTBv%2F6Odao40TZhL5H%2BYDswwewwAVmdeNNmlLEHDEcZNAKQzjOGaNmiJPrR3gczxiTw0%2F8H303EPddrvKGbE0R06uvFPiHMawWc1WspZpshRSxTRNaxX76zt2FUeGUIhm2AkbcNN4nhF0Ci29alls%2B6%2BV%2B1HdL0N17y3l0mEtOw72xtxxQyiwORAuTd5iegMXfxbt8W&X-Amz-Signature=2d04d93a07b6eacfb4a8cdda680a5b6929a83207407e83617dc02b06ee1d8be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOETRIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwdlg8RN%2F1l%2Bqz0Wz%2FH4VfyWxR9MvJ7K8j0BKWRHG8JAiAVL9574OsD8MIRV8IenvCHua5RWFpU8XM1h2QVPWhSsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2BNwOPelpFJfbZXEKtwDN0dfl77pGACwPWXn2Ug763haIP6WqShAQF5iRX6bVtBJ8G6JzY1dFH0Fa0hvQsYmUk31BtyccZnk2UkO3kRCAWooW8Mli%2BfajjptakzdOqEzQtcpJ0GV%2F7mPR1Sq05CGJ2IMwBGDQfyxY5okUHRf%2BFMpyBXAUxDfsuRU0hfxNKelKUq4pdra7NZP4%2F1qTNnT4AkQzUcwu7vkOMDjd1%2Bn7nVfBrJAEfCNmKwFSp8rWCACVML72uiz7K8fGWvrWdB1Oc%2B4wTZkTXzjtzmy4TuAoKjXoJORLQUqr9yPBrhfn6lHV1FKpIKNMPT6k8Zq1yN6yxslTc2bLuO%2BuoiOUKLG31Sggx1QxKloot%2BanNdfnMc%2BOY06mM0ekMyf9C%2FVRGIgwMn7hV0jQy34g029C5%2BJUwUNHsHte7rQpES0fWsT6%2Bd1x1h%2BzwEdfPnpTu9M4DYwAUjM5%2FCUPlEtM1ZdFXZi1wsb%2FlLTU5hmXT1K0QnFfjfMetrRk7sLR126XdTqf%2FMYDtAnnowmTNdqeDkZqkGfV804jrJ7xGKLiVGZrBkARIiT80gDg9pVMXnGThw%2B1nhrWG%2FO5y8TcRogworveaOMWLDgLzAqeNfxTTuBQVzcvCZMCvVcGkGIN81fVjww1LrjxAY6pgGhDsxpJu7TJHymMTskZLAg8wTBv%2F6Odao40TZhL5H%2BYDswwewwAVmdeNNmlLEHDEcZNAKQzjOGaNmiJPrR3gczxiTw0%2F8H303EPddrvKGbE0R06uvFPiHMawWc1WspZpshRSxTRNaxX76zt2FUeGUIhm2AkbcNN4nhF0Ci29alls%2B6%2BV%2B1HdL0N17y3l0mEtOw72xtxxQyiwORAuTd5iegMXfxbt8W&X-Amz-Signature=7abd9e6fae2f1d4012abab3646419e316816ef526575285a557148c4782af76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOETRIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwdlg8RN%2F1l%2Bqz0Wz%2FH4VfyWxR9MvJ7K8j0BKWRHG8JAiAVL9574OsD8MIRV8IenvCHua5RWFpU8XM1h2QVPWhSsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2BNwOPelpFJfbZXEKtwDN0dfl77pGACwPWXn2Ug763haIP6WqShAQF5iRX6bVtBJ8G6JzY1dFH0Fa0hvQsYmUk31BtyccZnk2UkO3kRCAWooW8Mli%2BfajjptakzdOqEzQtcpJ0GV%2F7mPR1Sq05CGJ2IMwBGDQfyxY5okUHRf%2BFMpyBXAUxDfsuRU0hfxNKelKUq4pdra7NZP4%2F1qTNnT4AkQzUcwu7vkOMDjd1%2Bn7nVfBrJAEfCNmKwFSp8rWCACVML72uiz7K8fGWvrWdB1Oc%2B4wTZkTXzjtzmy4TuAoKjXoJORLQUqr9yPBrhfn6lHV1FKpIKNMPT6k8Zq1yN6yxslTc2bLuO%2BuoiOUKLG31Sggx1QxKloot%2BanNdfnMc%2BOY06mM0ekMyf9C%2FVRGIgwMn7hV0jQy34g029C5%2BJUwUNHsHte7rQpES0fWsT6%2Bd1x1h%2BzwEdfPnpTu9M4DYwAUjM5%2FCUPlEtM1ZdFXZi1wsb%2FlLTU5hmXT1K0QnFfjfMetrRk7sLR126XdTqf%2FMYDtAnnowmTNdqeDkZqkGfV804jrJ7xGKLiVGZrBkARIiT80gDg9pVMXnGThw%2B1nhrWG%2FO5y8TcRogworveaOMWLDgLzAqeNfxTTuBQVzcvCZMCvVcGkGIN81fVjww1LrjxAY6pgGhDsxpJu7TJHymMTskZLAg8wTBv%2F6Odao40TZhL5H%2BYDswwewwAVmdeNNmlLEHDEcZNAKQzjOGaNmiJPrR3gczxiTw0%2F8H303EPddrvKGbE0R06uvFPiHMawWc1WspZpshRSxTRNaxX76zt2FUeGUIhm2AkbcNN4nhF0Ci29alls%2B6%2BV%2B1HdL0N17y3l0mEtOw72xtxxQyiwORAuTd5iegMXfxbt8W&X-Amz-Signature=7ddaab6276ed326ae820efd8678ec55aee99dd557dc1ff43106adb55d0940f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOETRIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwdlg8RN%2F1l%2Bqz0Wz%2FH4VfyWxR9MvJ7K8j0BKWRHG8JAiAVL9574OsD8MIRV8IenvCHua5RWFpU8XM1h2QVPWhSsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2BNwOPelpFJfbZXEKtwDN0dfl77pGACwPWXn2Ug763haIP6WqShAQF5iRX6bVtBJ8G6JzY1dFH0Fa0hvQsYmUk31BtyccZnk2UkO3kRCAWooW8Mli%2BfajjptakzdOqEzQtcpJ0GV%2F7mPR1Sq05CGJ2IMwBGDQfyxY5okUHRf%2BFMpyBXAUxDfsuRU0hfxNKelKUq4pdra7NZP4%2F1qTNnT4AkQzUcwu7vkOMDjd1%2Bn7nVfBrJAEfCNmKwFSp8rWCACVML72uiz7K8fGWvrWdB1Oc%2B4wTZkTXzjtzmy4TuAoKjXoJORLQUqr9yPBrhfn6lHV1FKpIKNMPT6k8Zq1yN6yxslTc2bLuO%2BuoiOUKLG31Sggx1QxKloot%2BanNdfnMc%2BOY06mM0ekMyf9C%2FVRGIgwMn7hV0jQy34g029C5%2BJUwUNHsHte7rQpES0fWsT6%2Bd1x1h%2BzwEdfPnpTu9M4DYwAUjM5%2FCUPlEtM1ZdFXZi1wsb%2FlLTU5hmXT1K0QnFfjfMetrRk7sLR126XdTqf%2FMYDtAnnowmTNdqeDkZqkGfV804jrJ7xGKLiVGZrBkARIiT80gDg9pVMXnGThw%2B1nhrWG%2FO5y8TcRogworveaOMWLDgLzAqeNfxTTuBQVzcvCZMCvVcGkGIN81fVjww1LrjxAY6pgGhDsxpJu7TJHymMTskZLAg8wTBv%2F6Odao40TZhL5H%2BYDswwewwAVmdeNNmlLEHDEcZNAKQzjOGaNmiJPrR3gczxiTw0%2F8H303EPddrvKGbE0R06uvFPiHMawWc1WspZpshRSxTRNaxX76zt2FUeGUIhm2AkbcNN4nhF0Ci29alls%2B6%2BV%2B1HdL0N17y3l0mEtOw72xtxxQyiwORAuTd5iegMXfxbt8W&X-Amz-Signature=eadbcfee632d47b66c144d7f9e82b15f0e8b8cb30acffd8ebd75790d62b7fe6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOETRIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwdlg8RN%2F1l%2Bqz0Wz%2FH4VfyWxR9MvJ7K8j0BKWRHG8JAiAVL9574OsD8MIRV8IenvCHua5RWFpU8XM1h2QVPWhSsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2BNwOPelpFJfbZXEKtwDN0dfl77pGACwPWXn2Ug763haIP6WqShAQF5iRX6bVtBJ8G6JzY1dFH0Fa0hvQsYmUk31BtyccZnk2UkO3kRCAWooW8Mli%2BfajjptakzdOqEzQtcpJ0GV%2F7mPR1Sq05CGJ2IMwBGDQfyxY5okUHRf%2BFMpyBXAUxDfsuRU0hfxNKelKUq4pdra7NZP4%2F1qTNnT4AkQzUcwu7vkOMDjd1%2Bn7nVfBrJAEfCNmKwFSp8rWCACVML72uiz7K8fGWvrWdB1Oc%2B4wTZkTXzjtzmy4TuAoKjXoJORLQUqr9yPBrhfn6lHV1FKpIKNMPT6k8Zq1yN6yxslTc2bLuO%2BuoiOUKLG31Sggx1QxKloot%2BanNdfnMc%2BOY06mM0ekMyf9C%2FVRGIgwMn7hV0jQy34g029C5%2BJUwUNHsHte7rQpES0fWsT6%2Bd1x1h%2BzwEdfPnpTu9M4DYwAUjM5%2FCUPlEtM1ZdFXZi1wsb%2FlLTU5hmXT1K0QnFfjfMetrRk7sLR126XdTqf%2FMYDtAnnowmTNdqeDkZqkGfV804jrJ7xGKLiVGZrBkARIiT80gDg9pVMXnGThw%2B1nhrWG%2FO5y8TcRogworveaOMWLDgLzAqeNfxTTuBQVzcvCZMCvVcGkGIN81fVjww1LrjxAY6pgGhDsxpJu7TJHymMTskZLAg8wTBv%2F6Odao40TZhL5H%2BYDswwewwAVmdeNNmlLEHDEcZNAKQzjOGaNmiJPrR3gczxiTw0%2F8H303EPddrvKGbE0R06uvFPiHMawWc1WspZpshRSxTRNaxX76zt2FUeGUIhm2AkbcNN4nhF0Ci29alls%2B6%2BV%2B1HdL0N17y3l0mEtOw72xtxxQyiwORAuTd5iegMXfxbt8W&X-Amz-Signature=9a290499328fc8c829e8e5a75e8183c7d12cf0ef958e91aa2c5e14669a120a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOETRIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwdlg8RN%2F1l%2Bqz0Wz%2FH4VfyWxR9MvJ7K8j0BKWRHG8JAiAVL9574OsD8MIRV8IenvCHua5RWFpU8XM1h2QVPWhSsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2BNwOPelpFJfbZXEKtwDN0dfl77pGACwPWXn2Ug763haIP6WqShAQF5iRX6bVtBJ8G6JzY1dFH0Fa0hvQsYmUk31BtyccZnk2UkO3kRCAWooW8Mli%2BfajjptakzdOqEzQtcpJ0GV%2F7mPR1Sq05CGJ2IMwBGDQfyxY5okUHRf%2BFMpyBXAUxDfsuRU0hfxNKelKUq4pdra7NZP4%2F1qTNnT4AkQzUcwu7vkOMDjd1%2Bn7nVfBrJAEfCNmKwFSp8rWCACVML72uiz7K8fGWvrWdB1Oc%2B4wTZkTXzjtzmy4TuAoKjXoJORLQUqr9yPBrhfn6lHV1FKpIKNMPT6k8Zq1yN6yxslTc2bLuO%2BuoiOUKLG31Sggx1QxKloot%2BanNdfnMc%2BOY06mM0ekMyf9C%2FVRGIgwMn7hV0jQy34g029C5%2BJUwUNHsHte7rQpES0fWsT6%2Bd1x1h%2BzwEdfPnpTu9M4DYwAUjM5%2FCUPlEtM1ZdFXZi1wsb%2FlLTU5hmXT1K0QnFfjfMetrRk7sLR126XdTqf%2FMYDtAnnowmTNdqeDkZqkGfV804jrJ7xGKLiVGZrBkARIiT80gDg9pVMXnGThw%2B1nhrWG%2FO5y8TcRogworveaOMWLDgLzAqeNfxTTuBQVzcvCZMCvVcGkGIN81fVjww1LrjxAY6pgGhDsxpJu7TJHymMTskZLAg8wTBv%2F6Odao40TZhL5H%2BYDswwewwAVmdeNNmlLEHDEcZNAKQzjOGaNmiJPrR3gczxiTw0%2F8H303EPddrvKGbE0R06uvFPiHMawWc1WspZpshRSxTRNaxX76zt2FUeGUIhm2AkbcNN4nhF0Ci29alls%2B6%2BV%2B1HdL0N17y3l0mEtOw72xtxxQyiwORAuTd5iegMXfxbt8W&X-Amz-Signature=1724c0b9616e9f0b591043180c54a34a1335e5eef4635fabc0db6f00d357b3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
