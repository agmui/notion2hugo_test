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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXX2SRIL%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEMhuAubII7I6MPDJpT8H3cXmoYbypbFXXZAMP9abw4iAiEA4PevK2x74Y%2FFkEVoygI3UO01AFUp3GCq9iVs7uwl6REqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1TkjM1Hg0d%2BC8XzyrcA3zWg3d5BfVsqKeflJagfrxpWOMoev7oKFXWNiImUnWeV0h7rgFwQjO8kiQ6ZGsDz53%2FztcsIJs5hH1faZ0CJotrSolEPE0or5abCV6jzw751iJiVJZXZs67iuL6sEUKGTizWMuCRD0uUTyOb%2Ft7hH4cmwMMX%2F0kHELAmJESCzD3Js8HvkDdF3YIh%2B5jGVow9i2tCkSjOSENyPyq3fHx6FJF6nK%2B21qGEqVTC8%2FJtxHhcbPl3IMdii0GYjSdZXeCo1hnpYv5y4wJqeqkr2UbPAE63HIKQbUafphPv9N4c0u%2FDcxjffs5cJ4R3UT8bigOOI%2Belde1cXT%2F552hDs%2B%2B56fbYhWNd088ZF8N9lMEcB1wjnoH3gVHU%2Bxbv2iTFA8CLVjOuRt2fB6DKR7FuAjSfn%2Bw94qXB6dXNCf7KtTZXMwQ1RCuz%2BzyZ2Q0CWFIXwklmd9fPvnVL4Irh6FWostvovb0w6aFz2cNmqeky3OYgiI9nb37Gw92Bl4I5OcsWGh%2Fc7lBXRenz%2FygP2dsYDfbyCcmSTUVtnAFk%2Fm3OElNzpNHZwP5upIuY%2BvP4DPTpblcLOtp%2BDad%2FQufieLYdLmT28Q1PbwFVVGrmgW09Ghvuh3%2B806suXhpSIwK%2FtKBMKbEgNMGOqUBlPkPr%2BNgPO3UMbxdUMkArk6Xtigx78NcXwC%2FA7dRboJrlMYGpfCHpo2SHkUk4XFHw6wJZjyNtm5nbrpjNCqRz8%2F8U6mBheIPDMD86H9yVkQWwAorRturGN%2BSj0ta4oo2w0njcfh3MXaJiAJXVZnBDpdpH9XrwQmHuXqE5C1HgFTdWfR8bM%2B1tbMkP2OBF2uYGZT%2Fg5swGfGmQerTQbBA9uLqR3tX&X-Amz-Signature=5463bb273e44ece7b7e7c7b5e44f5fd9429bc5fcca0dfc3fe041733e161ba7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXX2SRIL%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEMhuAubII7I6MPDJpT8H3cXmoYbypbFXXZAMP9abw4iAiEA4PevK2x74Y%2FFkEVoygI3UO01AFUp3GCq9iVs7uwl6REqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1TkjM1Hg0d%2BC8XzyrcA3zWg3d5BfVsqKeflJagfrxpWOMoev7oKFXWNiImUnWeV0h7rgFwQjO8kiQ6ZGsDz53%2FztcsIJs5hH1faZ0CJotrSolEPE0or5abCV6jzw751iJiVJZXZs67iuL6sEUKGTizWMuCRD0uUTyOb%2Ft7hH4cmwMMX%2F0kHELAmJESCzD3Js8HvkDdF3YIh%2B5jGVow9i2tCkSjOSENyPyq3fHx6FJF6nK%2B21qGEqVTC8%2FJtxHhcbPl3IMdii0GYjSdZXeCo1hnpYv5y4wJqeqkr2UbPAE63HIKQbUafphPv9N4c0u%2FDcxjffs5cJ4R3UT8bigOOI%2Belde1cXT%2F552hDs%2B%2B56fbYhWNd088ZF8N9lMEcB1wjnoH3gVHU%2Bxbv2iTFA8CLVjOuRt2fB6DKR7FuAjSfn%2Bw94qXB6dXNCf7KtTZXMwQ1RCuz%2BzyZ2Q0CWFIXwklmd9fPvnVL4Irh6FWostvovb0w6aFz2cNmqeky3OYgiI9nb37Gw92Bl4I5OcsWGh%2Fc7lBXRenz%2FygP2dsYDfbyCcmSTUVtnAFk%2Fm3OElNzpNHZwP5upIuY%2BvP4DPTpblcLOtp%2BDad%2FQufieLYdLmT28Q1PbwFVVGrmgW09Ghvuh3%2B806suXhpSIwK%2FtKBMKbEgNMGOqUBlPkPr%2BNgPO3UMbxdUMkArk6Xtigx78NcXwC%2FA7dRboJrlMYGpfCHpo2SHkUk4XFHw6wJZjyNtm5nbrpjNCqRz8%2F8U6mBheIPDMD86H9yVkQWwAorRturGN%2BSj0ta4oo2w0njcfh3MXaJiAJXVZnBDpdpH9XrwQmHuXqE5C1HgFTdWfR8bM%2B1tbMkP2OBF2uYGZT%2Fg5swGfGmQerTQbBA9uLqR3tX&X-Amz-Signature=6248f3b0608d64d522d0a8739e2a8266ea3ad8e51c96b54883094e81047a131b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXX2SRIL%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEMhuAubII7I6MPDJpT8H3cXmoYbypbFXXZAMP9abw4iAiEA4PevK2x74Y%2FFkEVoygI3UO01AFUp3GCq9iVs7uwl6REqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1TkjM1Hg0d%2BC8XzyrcA3zWg3d5BfVsqKeflJagfrxpWOMoev7oKFXWNiImUnWeV0h7rgFwQjO8kiQ6ZGsDz53%2FztcsIJs5hH1faZ0CJotrSolEPE0or5abCV6jzw751iJiVJZXZs67iuL6sEUKGTizWMuCRD0uUTyOb%2Ft7hH4cmwMMX%2F0kHELAmJESCzD3Js8HvkDdF3YIh%2B5jGVow9i2tCkSjOSENyPyq3fHx6FJF6nK%2B21qGEqVTC8%2FJtxHhcbPl3IMdii0GYjSdZXeCo1hnpYv5y4wJqeqkr2UbPAE63HIKQbUafphPv9N4c0u%2FDcxjffs5cJ4R3UT8bigOOI%2Belde1cXT%2F552hDs%2B%2B56fbYhWNd088ZF8N9lMEcB1wjnoH3gVHU%2Bxbv2iTFA8CLVjOuRt2fB6DKR7FuAjSfn%2Bw94qXB6dXNCf7KtTZXMwQ1RCuz%2BzyZ2Q0CWFIXwklmd9fPvnVL4Irh6FWostvovb0w6aFz2cNmqeky3OYgiI9nb37Gw92Bl4I5OcsWGh%2Fc7lBXRenz%2FygP2dsYDfbyCcmSTUVtnAFk%2Fm3OElNzpNHZwP5upIuY%2BvP4DPTpblcLOtp%2BDad%2FQufieLYdLmT28Q1PbwFVVGrmgW09Ghvuh3%2B806suXhpSIwK%2FtKBMKbEgNMGOqUBlPkPr%2BNgPO3UMbxdUMkArk6Xtigx78NcXwC%2FA7dRboJrlMYGpfCHpo2SHkUk4XFHw6wJZjyNtm5nbrpjNCqRz8%2F8U6mBheIPDMD86H9yVkQWwAorRturGN%2BSj0ta4oo2w0njcfh3MXaJiAJXVZnBDpdpH9XrwQmHuXqE5C1HgFTdWfR8bM%2B1tbMkP2OBF2uYGZT%2Fg5swGfGmQerTQbBA9uLqR3tX&X-Amz-Signature=bf1f87c5802cc68d0b8ad6e3e6d4436ed2fd2ec351632d235c43447208aed15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXX2SRIL%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEMhuAubII7I6MPDJpT8H3cXmoYbypbFXXZAMP9abw4iAiEA4PevK2x74Y%2FFkEVoygI3UO01AFUp3GCq9iVs7uwl6REqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1TkjM1Hg0d%2BC8XzyrcA3zWg3d5BfVsqKeflJagfrxpWOMoev7oKFXWNiImUnWeV0h7rgFwQjO8kiQ6ZGsDz53%2FztcsIJs5hH1faZ0CJotrSolEPE0or5abCV6jzw751iJiVJZXZs67iuL6sEUKGTizWMuCRD0uUTyOb%2Ft7hH4cmwMMX%2F0kHELAmJESCzD3Js8HvkDdF3YIh%2B5jGVow9i2tCkSjOSENyPyq3fHx6FJF6nK%2B21qGEqVTC8%2FJtxHhcbPl3IMdii0GYjSdZXeCo1hnpYv5y4wJqeqkr2UbPAE63HIKQbUafphPv9N4c0u%2FDcxjffs5cJ4R3UT8bigOOI%2Belde1cXT%2F552hDs%2B%2B56fbYhWNd088ZF8N9lMEcB1wjnoH3gVHU%2Bxbv2iTFA8CLVjOuRt2fB6DKR7FuAjSfn%2Bw94qXB6dXNCf7KtTZXMwQ1RCuz%2BzyZ2Q0CWFIXwklmd9fPvnVL4Irh6FWostvovb0w6aFz2cNmqeky3OYgiI9nb37Gw92Bl4I5OcsWGh%2Fc7lBXRenz%2FygP2dsYDfbyCcmSTUVtnAFk%2Fm3OElNzpNHZwP5upIuY%2BvP4DPTpblcLOtp%2BDad%2FQufieLYdLmT28Q1PbwFVVGrmgW09Ghvuh3%2B806suXhpSIwK%2FtKBMKbEgNMGOqUBlPkPr%2BNgPO3UMbxdUMkArk6Xtigx78NcXwC%2FA7dRboJrlMYGpfCHpo2SHkUk4XFHw6wJZjyNtm5nbrpjNCqRz8%2F8U6mBheIPDMD86H9yVkQWwAorRturGN%2BSj0ta4oo2w0njcfh3MXaJiAJXVZnBDpdpH9XrwQmHuXqE5C1HgFTdWfR8bM%2B1tbMkP2OBF2uYGZT%2Fg5swGfGmQerTQbBA9uLqR3tX&X-Amz-Signature=ecef827b93f45d4119c216774a57db76d2dc5b96d5fdac1b25b391177f53b231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXX2SRIL%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEMhuAubII7I6MPDJpT8H3cXmoYbypbFXXZAMP9abw4iAiEA4PevK2x74Y%2FFkEVoygI3UO01AFUp3GCq9iVs7uwl6REqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1TkjM1Hg0d%2BC8XzyrcA3zWg3d5BfVsqKeflJagfrxpWOMoev7oKFXWNiImUnWeV0h7rgFwQjO8kiQ6ZGsDz53%2FztcsIJs5hH1faZ0CJotrSolEPE0or5abCV6jzw751iJiVJZXZs67iuL6sEUKGTizWMuCRD0uUTyOb%2Ft7hH4cmwMMX%2F0kHELAmJESCzD3Js8HvkDdF3YIh%2B5jGVow9i2tCkSjOSENyPyq3fHx6FJF6nK%2B21qGEqVTC8%2FJtxHhcbPl3IMdii0GYjSdZXeCo1hnpYv5y4wJqeqkr2UbPAE63HIKQbUafphPv9N4c0u%2FDcxjffs5cJ4R3UT8bigOOI%2Belde1cXT%2F552hDs%2B%2B56fbYhWNd088ZF8N9lMEcB1wjnoH3gVHU%2Bxbv2iTFA8CLVjOuRt2fB6DKR7FuAjSfn%2Bw94qXB6dXNCf7KtTZXMwQ1RCuz%2BzyZ2Q0CWFIXwklmd9fPvnVL4Irh6FWostvovb0w6aFz2cNmqeky3OYgiI9nb37Gw92Bl4I5OcsWGh%2Fc7lBXRenz%2FygP2dsYDfbyCcmSTUVtnAFk%2Fm3OElNzpNHZwP5upIuY%2BvP4DPTpblcLOtp%2BDad%2FQufieLYdLmT28Q1PbwFVVGrmgW09Ghvuh3%2B806suXhpSIwK%2FtKBMKbEgNMGOqUBlPkPr%2BNgPO3UMbxdUMkArk6Xtigx78NcXwC%2FA7dRboJrlMYGpfCHpo2SHkUk4XFHw6wJZjyNtm5nbrpjNCqRz8%2F8U6mBheIPDMD86H9yVkQWwAorRturGN%2BSj0ta4oo2w0njcfh3MXaJiAJXVZnBDpdpH9XrwQmHuXqE5C1HgFTdWfR8bM%2B1tbMkP2OBF2uYGZT%2Fg5swGfGmQerTQbBA9uLqR3tX&X-Amz-Signature=0b03bd56b6c04b510b1b5a3cc929ccfffcfc17a45f6853e7a1de3e0452022ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXX2SRIL%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEMhuAubII7I6MPDJpT8H3cXmoYbypbFXXZAMP9abw4iAiEA4PevK2x74Y%2FFkEVoygI3UO01AFUp3GCq9iVs7uwl6REqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1TkjM1Hg0d%2BC8XzyrcA3zWg3d5BfVsqKeflJagfrxpWOMoev7oKFXWNiImUnWeV0h7rgFwQjO8kiQ6ZGsDz53%2FztcsIJs5hH1faZ0CJotrSolEPE0or5abCV6jzw751iJiVJZXZs67iuL6sEUKGTizWMuCRD0uUTyOb%2Ft7hH4cmwMMX%2F0kHELAmJESCzD3Js8HvkDdF3YIh%2B5jGVow9i2tCkSjOSENyPyq3fHx6FJF6nK%2B21qGEqVTC8%2FJtxHhcbPl3IMdii0GYjSdZXeCo1hnpYv5y4wJqeqkr2UbPAE63HIKQbUafphPv9N4c0u%2FDcxjffs5cJ4R3UT8bigOOI%2Belde1cXT%2F552hDs%2B%2B56fbYhWNd088ZF8N9lMEcB1wjnoH3gVHU%2Bxbv2iTFA8CLVjOuRt2fB6DKR7FuAjSfn%2Bw94qXB6dXNCf7KtTZXMwQ1RCuz%2BzyZ2Q0CWFIXwklmd9fPvnVL4Irh6FWostvovb0w6aFz2cNmqeky3OYgiI9nb37Gw92Bl4I5OcsWGh%2Fc7lBXRenz%2FygP2dsYDfbyCcmSTUVtnAFk%2Fm3OElNzpNHZwP5upIuY%2BvP4DPTpblcLOtp%2BDad%2FQufieLYdLmT28Q1PbwFVVGrmgW09Ghvuh3%2B806suXhpSIwK%2FtKBMKbEgNMGOqUBlPkPr%2BNgPO3UMbxdUMkArk6Xtigx78NcXwC%2FA7dRboJrlMYGpfCHpo2SHkUk4XFHw6wJZjyNtm5nbrpjNCqRz8%2F8U6mBheIPDMD86H9yVkQWwAorRturGN%2BSj0ta4oo2w0njcfh3MXaJiAJXVZnBDpdpH9XrwQmHuXqE5C1HgFTdWfR8bM%2B1tbMkP2OBF2uYGZT%2Fg5swGfGmQerTQbBA9uLqR3tX&X-Amz-Signature=6cce83430a265531d1cdf0a94895e82865e3175acb7d4346ff7806737c295ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXX2SRIL%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEMhuAubII7I6MPDJpT8H3cXmoYbypbFXXZAMP9abw4iAiEA4PevK2x74Y%2FFkEVoygI3UO01AFUp3GCq9iVs7uwl6REqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1TkjM1Hg0d%2BC8XzyrcA3zWg3d5BfVsqKeflJagfrxpWOMoev7oKFXWNiImUnWeV0h7rgFwQjO8kiQ6ZGsDz53%2FztcsIJs5hH1faZ0CJotrSolEPE0or5abCV6jzw751iJiVJZXZs67iuL6sEUKGTizWMuCRD0uUTyOb%2Ft7hH4cmwMMX%2F0kHELAmJESCzD3Js8HvkDdF3YIh%2B5jGVow9i2tCkSjOSENyPyq3fHx6FJF6nK%2B21qGEqVTC8%2FJtxHhcbPl3IMdii0GYjSdZXeCo1hnpYv5y4wJqeqkr2UbPAE63HIKQbUafphPv9N4c0u%2FDcxjffs5cJ4R3UT8bigOOI%2Belde1cXT%2F552hDs%2B%2B56fbYhWNd088ZF8N9lMEcB1wjnoH3gVHU%2Bxbv2iTFA8CLVjOuRt2fB6DKR7FuAjSfn%2Bw94qXB6dXNCf7KtTZXMwQ1RCuz%2BzyZ2Q0CWFIXwklmd9fPvnVL4Irh6FWostvovb0w6aFz2cNmqeky3OYgiI9nb37Gw92Bl4I5OcsWGh%2Fc7lBXRenz%2FygP2dsYDfbyCcmSTUVtnAFk%2Fm3OElNzpNHZwP5upIuY%2BvP4DPTpblcLOtp%2BDad%2FQufieLYdLmT28Q1PbwFVVGrmgW09Ghvuh3%2B806suXhpSIwK%2FtKBMKbEgNMGOqUBlPkPr%2BNgPO3UMbxdUMkArk6Xtigx78NcXwC%2FA7dRboJrlMYGpfCHpo2SHkUk4XFHw6wJZjyNtm5nbrpjNCqRz8%2F8U6mBheIPDMD86H9yVkQWwAorRturGN%2BSj0ta4oo2w0njcfh3MXaJiAJXVZnBDpdpH9XrwQmHuXqE5C1HgFTdWfR8bM%2B1tbMkP2OBF2uYGZT%2Fg5swGfGmQerTQbBA9uLqR3tX&X-Amz-Signature=8c110fd6f939da685b493bc74cf0d8b21ed055124c58f46a142f39e44d0adb85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXX2SRIL%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEMhuAubII7I6MPDJpT8H3cXmoYbypbFXXZAMP9abw4iAiEA4PevK2x74Y%2FFkEVoygI3UO01AFUp3GCq9iVs7uwl6REqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1TkjM1Hg0d%2BC8XzyrcA3zWg3d5BfVsqKeflJagfrxpWOMoev7oKFXWNiImUnWeV0h7rgFwQjO8kiQ6ZGsDz53%2FztcsIJs5hH1faZ0CJotrSolEPE0or5abCV6jzw751iJiVJZXZs67iuL6sEUKGTizWMuCRD0uUTyOb%2Ft7hH4cmwMMX%2F0kHELAmJESCzD3Js8HvkDdF3YIh%2B5jGVow9i2tCkSjOSENyPyq3fHx6FJF6nK%2B21qGEqVTC8%2FJtxHhcbPl3IMdii0GYjSdZXeCo1hnpYv5y4wJqeqkr2UbPAE63HIKQbUafphPv9N4c0u%2FDcxjffs5cJ4R3UT8bigOOI%2Belde1cXT%2F552hDs%2B%2B56fbYhWNd088ZF8N9lMEcB1wjnoH3gVHU%2Bxbv2iTFA8CLVjOuRt2fB6DKR7FuAjSfn%2Bw94qXB6dXNCf7KtTZXMwQ1RCuz%2BzyZ2Q0CWFIXwklmd9fPvnVL4Irh6FWostvovb0w6aFz2cNmqeky3OYgiI9nb37Gw92Bl4I5OcsWGh%2Fc7lBXRenz%2FygP2dsYDfbyCcmSTUVtnAFk%2Fm3OElNzpNHZwP5upIuY%2BvP4DPTpblcLOtp%2BDad%2FQufieLYdLmT28Q1PbwFVVGrmgW09Ghvuh3%2B806suXhpSIwK%2FtKBMKbEgNMGOqUBlPkPr%2BNgPO3UMbxdUMkArk6Xtigx78NcXwC%2FA7dRboJrlMYGpfCHpo2SHkUk4XFHw6wJZjyNtm5nbrpjNCqRz8%2F8U6mBheIPDMD86H9yVkQWwAorRturGN%2BSj0ta4oo2w0njcfh3MXaJiAJXVZnBDpdpH9XrwQmHuXqE5C1HgFTdWfR8bM%2B1tbMkP2OBF2uYGZT%2Fg5swGfGmQerTQbBA9uLqR3tX&X-Amz-Signature=8edc993a2a9fc327faf9b2d4a53e5326180715278d7db26403e1026dc761c639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
