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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYWLDZW3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEBh7ST88nTLCx3VTfQFav8G9hzw7XbOculbFRqXlKthAiBT8fHrSACaYIadMXrkBtmUKB%2FO8cWrr9P33E4mlmLi5ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMMihAjLg8zQkP1UpAKtwD4SmjNrEQmhj8%2BoLUIlQKau9QM8cB%2Bi9ZHyqA%2BFu2jbotGPmuZwcIQwALki6UHMBbTOLkocSNuzgFmQ0WXES%2FJtZSAynLod6o6OU92Am9mhKvL%2BnJH2SCO1xNlWCcT4y2NvM0ueK96l8cdllNcCaHTm1I9hNZZJhkFkXY4%2FJ5SCGOCrnCWHAYzmJzd6E1KV5w574CUahvZ4tmXaxxMSTuNFl%2Brqk1ipU5ZI0yvRYA7db0d%2F7mCofO2rVHKUW5VsXmkm3bvg%2Bt7lwiNuKej9bBWHj%2B3Ri9nmSlaQLeyU66Dp7WKSIWzM38Zx%2FOl%2F3hSIZEmKZG6SOgOtBDyLbkTBM9W%2FnrFefkehKTday2UxJIKyKJzigy7k1PdkxHg1l3U7MOECwiM0w8xWYa7vNmto48MmX92Sbcs1uOt4nTH4Ik27kpv5eFnlVAjCAapq%2B0YSzW5bi2LKATPjU0WXZ9%2B7EN7JF64M76tLn0m5XjwIZKDOgbH2f%2BMa3PT4nUmX39eMGtA29jDBvjtnEP2OjjSw0DBuk87O2MYTKbTsGunFjzxXpRVt%2BQBGFBqxasTJcqZVcdWHJZGt0Hdd%2FgFf8vkxx517xIK2URVHzdHjbMeevVR0%2BaasmlQCcxlooOuTEwpbeZvQY6pgHvDo4XmJfr%2FnMk3zQW9%2FckdihuZ3%2FaPMqekuja%2FoTMSagEfTMwT%2Fa62tNMwu9zwLUR%2Fp84IJy7EYrGf1bQpBo5ShMqVmwEfOizaGGh22ZskQPpZS0NCYo3HXIfWo%2Fpulu7ZSu7cyHlBjyDc3wJm7kMXwKOvpUvQqKJtgFaHVOeLNlJZ1QkifNNKbdSqYSCLBJfpAvcU69oqy6TzkcdoEiV8VFaiGju&X-Amz-Signature=35aa6597a176b3c0995734799ae91a5b1df473cdcf966f2ed0dff70bc56794ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYWLDZW3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEBh7ST88nTLCx3VTfQFav8G9hzw7XbOculbFRqXlKthAiBT8fHrSACaYIadMXrkBtmUKB%2FO8cWrr9P33E4mlmLi5ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMMihAjLg8zQkP1UpAKtwD4SmjNrEQmhj8%2BoLUIlQKau9QM8cB%2Bi9ZHyqA%2BFu2jbotGPmuZwcIQwALki6UHMBbTOLkocSNuzgFmQ0WXES%2FJtZSAynLod6o6OU92Am9mhKvL%2BnJH2SCO1xNlWCcT4y2NvM0ueK96l8cdllNcCaHTm1I9hNZZJhkFkXY4%2FJ5SCGOCrnCWHAYzmJzd6E1KV5w574CUahvZ4tmXaxxMSTuNFl%2Brqk1ipU5ZI0yvRYA7db0d%2F7mCofO2rVHKUW5VsXmkm3bvg%2Bt7lwiNuKej9bBWHj%2B3Ri9nmSlaQLeyU66Dp7WKSIWzM38Zx%2FOl%2F3hSIZEmKZG6SOgOtBDyLbkTBM9W%2FnrFefkehKTday2UxJIKyKJzigy7k1PdkxHg1l3U7MOECwiM0w8xWYa7vNmto48MmX92Sbcs1uOt4nTH4Ik27kpv5eFnlVAjCAapq%2B0YSzW5bi2LKATPjU0WXZ9%2B7EN7JF64M76tLn0m5XjwIZKDOgbH2f%2BMa3PT4nUmX39eMGtA29jDBvjtnEP2OjjSw0DBuk87O2MYTKbTsGunFjzxXpRVt%2BQBGFBqxasTJcqZVcdWHJZGt0Hdd%2FgFf8vkxx517xIK2URVHzdHjbMeevVR0%2BaasmlQCcxlooOuTEwpbeZvQY6pgHvDo4XmJfr%2FnMk3zQW9%2FckdihuZ3%2FaPMqekuja%2FoTMSagEfTMwT%2Fa62tNMwu9zwLUR%2Fp84IJy7EYrGf1bQpBo5ShMqVmwEfOizaGGh22ZskQPpZS0NCYo3HXIfWo%2Fpulu7ZSu7cyHlBjyDc3wJm7kMXwKOvpUvQqKJtgFaHVOeLNlJZ1QkifNNKbdSqYSCLBJfpAvcU69oqy6TzkcdoEiV8VFaiGju&X-Amz-Signature=16be9e93516ff1b1ab0842a26c9eb4e834d16741e81494cb7c6d266933c40d41&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYWLDZW3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEBh7ST88nTLCx3VTfQFav8G9hzw7XbOculbFRqXlKthAiBT8fHrSACaYIadMXrkBtmUKB%2FO8cWrr9P33E4mlmLi5ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMMihAjLg8zQkP1UpAKtwD4SmjNrEQmhj8%2BoLUIlQKau9QM8cB%2Bi9ZHyqA%2BFu2jbotGPmuZwcIQwALki6UHMBbTOLkocSNuzgFmQ0WXES%2FJtZSAynLod6o6OU92Am9mhKvL%2BnJH2SCO1xNlWCcT4y2NvM0ueK96l8cdllNcCaHTm1I9hNZZJhkFkXY4%2FJ5SCGOCrnCWHAYzmJzd6E1KV5w574CUahvZ4tmXaxxMSTuNFl%2Brqk1ipU5ZI0yvRYA7db0d%2F7mCofO2rVHKUW5VsXmkm3bvg%2Bt7lwiNuKej9bBWHj%2B3Ri9nmSlaQLeyU66Dp7WKSIWzM38Zx%2FOl%2F3hSIZEmKZG6SOgOtBDyLbkTBM9W%2FnrFefkehKTday2UxJIKyKJzigy7k1PdkxHg1l3U7MOECwiM0w8xWYa7vNmto48MmX92Sbcs1uOt4nTH4Ik27kpv5eFnlVAjCAapq%2B0YSzW5bi2LKATPjU0WXZ9%2B7EN7JF64M76tLn0m5XjwIZKDOgbH2f%2BMa3PT4nUmX39eMGtA29jDBvjtnEP2OjjSw0DBuk87O2MYTKbTsGunFjzxXpRVt%2BQBGFBqxasTJcqZVcdWHJZGt0Hdd%2FgFf8vkxx517xIK2URVHzdHjbMeevVR0%2BaasmlQCcxlooOuTEwpbeZvQY6pgHvDo4XmJfr%2FnMk3zQW9%2FckdihuZ3%2FaPMqekuja%2FoTMSagEfTMwT%2Fa62tNMwu9zwLUR%2Fp84IJy7EYrGf1bQpBo5ShMqVmwEfOizaGGh22ZskQPpZS0NCYo3HXIfWo%2Fpulu7ZSu7cyHlBjyDc3wJm7kMXwKOvpUvQqKJtgFaHVOeLNlJZ1QkifNNKbdSqYSCLBJfpAvcU69oqy6TzkcdoEiV8VFaiGju&X-Amz-Signature=5406daccc4b6e48da8174de9e53c79de543bbc52031c5513a327e387e382b631&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYWLDZW3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEBh7ST88nTLCx3VTfQFav8G9hzw7XbOculbFRqXlKthAiBT8fHrSACaYIadMXrkBtmUKB%2FO8cWrr9P33E4mlmLi5ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMMihAjLg8zQkP1UpAKtwD4SmjNrEQmhj8%2BoLUIlQKau9QM8cB%2Bi9ZHyqA%2BFu2jbotGPmuZwcIQwALki6UHMBbTOLkocSNuzgFmQ0WXES%2FJtZSAynLod6o6OU92Am9mhKvL%2BnJH2SCO1xNlWCcT4y2NvM0ueK96l8cdllNcCaHTm1I9hNZZJhkFkXY4%2FJ5SCGOCrnCWHAYzmJzd6E1KV5w574CUahvZ4tmXaxxMSTuNFl%2Brqk1ipU5ZI0yvRYA7db0d%2F7mCofO2rVHKUW5VsXmkm3bvg%2Bt7lwiNuKej9bBWHj%2B3Ri9nmSlaQLeyU66Dp7WKSIWzM38Zx%2FOl%2F3hSIZEmKZG6SOgOtBDyLbkTBM9W%2FnrFefkehKTday2UxJIKyKJzigy7k1PdkxHg1l3U7MOECwiM0w8xWYa7vNmto48MmX92Sbcs1uOt4nTH4Ik27kpv5eFnlVAjCAapq%2B0YSzW5bi2LKATPjU0WXZ9%2B7EN7JF64M76tLn0m5XjwIZKDOgbH2f%2BMa3PT4nUmX39eMGtA29jDBvjtnEP2OjjSw0DBuk87O2MYTKbTsGunFjzxXpRVt%2BQBGFBqxasTJcqZVcdWHJZGt0Hdd%2FgFf8vkxx517xIK2URVHzdHjbMeevVR0%2BaasmlQCcxlooOuTEwpbeZvQY6pgHvDo4XmJfr%2FnMk3zQW9%2FckdihuZ3%2FaPMqekuja%2FoTMSagEfTMwT%2Fa62tNMwu9zwLUR%2Fp84IJy7EYrGf1bQpBo5ShMqVmwEfOizaGGh22ZskQPpZS0NCYo3HXIfWo%2Fpulu7ZSu7cyHlBjyDc3wJm7kMXwKOvpUvQqKJtgFaHVOeLNlJZ1QkifNNKbdSqYSCLBJfpAvcU69oqy6TzkcdoEiV8VFaiGju&X-Amz-Signature=fbf5e6daa77b854ba48fc27d070a224bec16e8d724e8a49327c434c9a668eeb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYWLDZW3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEBh7ST88nTLCx3VTfQFav8G9hzw7XbOculbFRqXlKthAiBT8fHrSACaYIadMXrkBtmUKB%2FO8cWrr9P33E4mlmLi5ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMMihAjLg8zQkP1UpAKtwD4SmjNrEQmhj8%2BoLUIlQKau9QM8cB%2Bi9ZHyqA%2BFu2jbotGPmuZwcIQwALki6UHMBbTOLkocSNuzgFmQ0WXES%2FJtZSAynLod6o6OU92Am9mhKvL%2BnJH2SCO1xNlWCcT4y2NvM0ueK96l8cdllNcCaHTm1I9hNZZJhkFkXY4%2FJ5SCGOCrnCWHAYzmJzd6E1KV5w574CUahvZ4tmXaxxMSTuNFl%2Brqk1ipU5ZI0yvRYA7db0d%2F7mCofO2rVHKUW5VsXmkm3bvg%2Bt7lwiNuKej9bBWHj%2B3Ri9nmSlaQLeyU66Dp7WKSIWzM38Zx%2FOl%2F3hSIZEmKZG6SOgOtBDyLbkTBM9W%2FnrFefkehKTday2UxJIKyKJzigy7k1PdkxHg1l3U7MOECwiM0w8xWYa7vNmto48MmX92Sbcs1uOt4nTH4Ik27kpv5eFnlVAjCAapq%2B0YSzW5bi2LKATPjU0WXZ9%2B7EN7JF64M76tLn0m5XjwIZKDOgbH2f%2BMa3PT4nUmX39eMGtA29jDBvjtnEP2OjjSw0DBuk87O2MYTKbTsGunFjzxXpRVt%2BQBGFBqxasTJcqZVcdWHJZGt0Hdd%2FgFf8vkxx517xIK2URVHzdHjbMeevVR0%2BaasmlQCcxlooOuTEwpbeZvQY6pgHvDo4XmJfr%2FnMk3zQW9%2FckdihuZ3%2FaPMqekuja%2FoTMSagEfTMwT%2Fa62tNMwu9zwLUR%2Fp84IJy7EYrGf1bQpBo5ShMqVmwEfOizaGGh22ZskQPpZS0NCYo3HXIfWo%2Fpulu7ZSu7cyHlBjyDc3wJm7kMXwKOvpUvQqKJtgFaHVOeLNlJZ1QkifNNKbdSqYSCLBJfpAvcU69oqy6TzkcdoEiV8VFaiGju&X-Amz-Signature=4db1f0ee997c4c6852712bdf8d3c945e041d21cd6e8fd04e7f515f278a907757&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYWLDZW3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEBh7ST88nTLCx3VTfQFav8G9hzw7XbOculbFRqXlKthAiBT8fHrSACaYIadMXrkBtmUKB%2FO8cWrr9P33E4mlmLi5ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMMihAjLg8zQkP1UpAKtwD4SmjNrEQmhj8%2BoLUIlQKau9QM8cB%2Bi9ZHyqA%2BFu2jbotGPmuZwcIQwALki6UHMBbTOLkocSNuzgFmQ0WXES%2FJtZSAynLod6o6OU92Am9mhKvL%2BnJH2SCO1xNlWCcT4y2NvM0ueK96l8cdllNcCaHTm1I9hNZZJhkFkXY4%2FJ5SCGOCrnCWHAYzmJzd6E1KV5w574CUahvZ4tmXaxxMSTuNFl%2Brqk1ipU5ZI0yvRYA7db0d%2F7mCofO2rVHKUW5VsXmkm3bvg%2Bt7lwiNuKej9bBWHj%2B3Ri9nmSlaQLeyU66Dp7WKSIWzM38Zx%2FOl%2F3hSIZEmKZG6SOgOtBDyLbkTBM9W%2FnrFefkehKTday2UxJIKyKJzigy7k1PdkxHg1l3U7MOECwiM0w8xWYa7vNmto48MmX92Sbcs1uOt4nTH4Ik27kpv5eFnlVAjCAapq%2B0YSzW5bi2LKATPjU0WXZ9%2B7EN7JF64M76tLn0m5XjwIZKDOgbH2f%2BMa3PT4nUmX39eMGtA29jDBvjtnEP2OjjSw0DBuk87O2MYTKbTsGunFjzxXpRVt%2BQBGFBqxasTJcqZVcdWHJZGt0Hdd%2FgFf8vkxx517xIK2URVHzdHjbMeevVR0%2BaasmlQCcxlooOuTEwpbeZvQY6pgHvDo4XmJfr%2FnMk3zQW9%2FckdihuZ3%2FaPMqekuja%2FoTMSagEfTMwT%2Fa62tNMwu9zwLUR%2Fp84IJy7EYrGf1bQpBo5ShMqVmwEfOizaGGh22ZskQPpZS0NCYo3HXIfWo%2Fpulu7ZSu7cyHlBjyDc3wJm7kMXwKOvpUvQqKJtgFaHVOeLNlJZ1QkifNNKbdSqYSCLBJfpAvcU69oqy6TzkcdoEiV8VFaiGju&X-Amz-Signature=2a417da9150e630d719cde4e0fac8667324316cfe8ef6858cbf64096ca00d01d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYWLDZW3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEBh7ST88nTLCx3VTfQFav8G9hzw7XbOculbFRqXlKthAiBT8fHrSACaYIadMXrkBtmUKB%2FO8cWrr9P33E4mlmLi5ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMMihAjLg8zQkP1UpAKtwD4SmjNrEQmhj8%2BoLUIlQKau9QM8cB%2Bi9ZHyqA%2BFu2jbotGPmuZwcIQwALki6UHMBbTOLkocSNuzgFmQ0WXES%2FJtZSAynLod6o6OU92Am9mhKvL%2BnJH2SCO1xNlWCcT4y2NvM0ueK96l8cdllNcCaHTm1I9hNZZJhkFkXY4%2FJ5SCGOCrnCWHAYzmJzd6E1KV5w574CUahvZ4tmXaxxMSTuNFl%2Brqk1ipU5ZI0yvRYA7db0d%2F7mCofO2rVHKUW5VsXmkm3bvg%2Bt7lwiNuKej9bBWHj%2B3Ri9nmSlaQLeyU66Dp7WKSIWzM38Zx%2FOl%2F3hSIZEmKZG6SOgOtBDyLbkTBM9W%2FnrFefkehKTday2UxJIKyKJzigy7k1PdkxHg1l3U7MOECwiM0w8xWYa7vNmto48MmX92Sbcs1uOt4nTH4Ik27kpv5eFnlVAjCAapq%2B0YSzW5bi2LKATPjU0WXZ9%2B7EN7JF64M76tLn0m5XjwIZKDOgbH2f%2BMa3PT4nUmX39eMGtA29jDBvjtnEP2OjjSw0DBuk87O2MYTKbTsGunFjzxXpRVt%2BQBGFBqxasTJcqZVcdWHJZGt0Hdd%2FgFf8vkxx517xIK2URVHzdHjbMeevVR0%2BaasmlQCcxlooOuTEwpbeZvQY6pgHvDo4XmJfr%2FnMk3zQW9%2FckdihuZ3%2FaPMqekuja%2FoTMSagEfTMwT%2Fa62tNMwu9zwLUR%2Fp84IJy7EYrGf1bQpBo5ShMqVmwEfOizaGGh22ZskQPpZS0NCYo3HXIfWo%2Fpulu7ZSu7cyHlBjyDc3wJm7kMXwKOvpUvQqKJtgFaHVOeLNlJZ1QkifNNKbdSqYSCLBJfpAvcU69oqy6TzkcdoEiV8VFaiGju&X-Amz-Signature=24ec50af7eef80f7091cf8b05c344aa2121e1925f6e08a0045c47878f5be8ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYWLDZW3%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEBh7ST88nTLCx3VTfQFav8G9hzw7XbOculbFRqXlKthAiBT8fHrSACaYIadMXrkBtmUKB%2FO8cWrr9P33E4mlmLi5ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMMihAjLg8zQkP1UpAKtwD4SmjNrEQmhj8%2BoLUIlQKau9QM8cB%2Bi9ZHyqA%2BFu2jbotGPmuZwcIQwALki6UHMBbTOLkocSNuzgFmQ0WXES%2FJtZSAynLod6o6OU92Am9mhKvL%2BnJH2SCO1xNlWCcT4y2NvM0ueK96l8cdllNcCaHTm1I9hNZZJhkFkXY4%2FJ5SCGOCrnCWHAYzmJzd6E1KV5w574CUahvZ4tmXaxxMSTuNFl%2Brqk1ipU5ZI0yvRYA7db0d%2F7mCofO2rVHKUW5VsXmkm3bvg%2Bt7lwiNuKej9bBWHj%2B3Ri9nmSlaQLeyU66Dp7WKSIWzM38Zx%2FOl%2F3hSIZEmKZG6SOgOtBDyLbkTBM9W%2FnrFefkehKTday2UxJIKyKJzigy7k1PdkxHg1l3U7MOECwiM0w8xWYa7vNmto48MmX92Sbcs1uOt4nTH4Ik27kpv5eFnlVAjCAapq%2B0YSzW5bi2LKATPjU0WXZ9%2B7EN7JF64M76tLn0m5XjwIZKDOgbH2f%2BMa3PT4nUmX39eMGtA29jDBvjtnEP2OjjSw0DBuk87O2MYTKbTsGunFjzxXpRVt%2BQBGFBqxasTJcqZVcdWHJZGt0Hdd%2FgFf8vkxx517xIK2URVHzdHjbMeevVR0%2BaasmlQCcxlooOuTEwpbeZvQY6pgHvDo4XmJfr%2FnMk3zQW9%2FckdihuZ3%2FaPMqekuja%2FoTMSagEfTMwT%2Fa62tNMwu9zwLUR%2Fp84IJy7EYrGf1bQpBo5ShMqVmwEfOizaGGh22ZskQPpZS0NCYo3HXIfWo%2Fpulu7ZSu7cyHlBjyDc3wJm7kMXwKOvpUvQqKJtgFaHVOeLNlJZ1QkifNNKbdSqYSCLBJfpAvcU69oqy6TzkcdoEiV8VFaiGju&X-Amz-Signature=59dc06c3e7d391be94dc53df7431fae535b1ac834fa1409627b1ae0146a73b84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
