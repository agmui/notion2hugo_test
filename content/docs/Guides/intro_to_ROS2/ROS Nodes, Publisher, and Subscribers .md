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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD3OUWK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDwx1Wu%2Fls%2Bw0FpY%2Bdk1gaFM1BFIpPdndxWYBF8ovV2swIgO1zW92txaeqlgWcfEdl11sahVk5fxOXtEgC%2Bg1EZ8tUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEatGymHMdP0ffjgircAxChCJD9nTm4Aqk%2B%2Bs0qCxBKy5gz7YBtuMT5olIw2m9PZPGAmS7AvD3Se5mMOxK5UzmKLoDrQYlkNkQsScmR86wth0R%2Fn15xzALq93kG2YUsw9zQxUaHd8QJnamK80aeko0fLPs%2Fw%2Fb7NfUFSxhg6vDRMX0BiciLW5tcJ6qov%2FpQtTk%2Bd0TUWlfYEGAaqqSCNX0p%2F22D92OYPFZY%2BaGh2nJvBQgS34ml3WJOlt1cnD26HV1kUzRug7MBZH1Yv3yyqXDOMaUk70orpLlGnyUVnj8Un4NBHpilZFakF7pBWBLDwQA4AeCYvH1TeGamVcuuu9cqbeJg5HnDdE8PXUt%2FBL48NgjZDRnuAM6owWU0qRyqu99DznqCDN%2Bf03%2BH7Z0h%2F%2BoHqxQW5CGEiE8PJR4gOAAtPg6z2Q1IhMzjQQ2W%2Bjx6FxBqPdPN8vXmlkSB5%2BsHa2Ay5%2FDs7vCohXaY1OCoPgytOcEq61zr46KFrsjxeSY9PuOZvgVRaKC3dw%2B9CrMKf388ggIDBlsx%2BRUyPNJH1Cp0soC1HANXhxTA271%2B2%2FsuitE%2BF9fazFSyLTR%2Bx4CqENzJZrmlaHuAn37qiMEV4jeRb4y0XxCCWqBlpJZEq1%2BEvKGlYeUPlp8DmAFOMOeez8EGOqUBosfrZwF8aIsujgtmfM9eSMM5rIGzzDROJEJLGLyN1QPiJjHz5c46RZiiBpUoSnqglGLkg5ONhW1%2Ft0TElnIaoCL14543GyjZFwp%2Ba93ZSM5eSvQUDbuSInTmiztMamlHFuOfOpOh6ui%2BsGEEnydXx%2FR92wKPTrILZxGwj4%2F8d6RxiO%2Fl30SEsu9XNJfCf009mBbewEnGY3IjDdxztZHbbQSJV2aM&X-Amz-Signature=ce4ef37e5867594560a6f81f42890356055f7d30e22e6132863518a343570ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD3OUWK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDwx1Wu%2Fls%2Bw0FpY%2Bdk1gaFM1BFIpPdndxWYBF8ovV2swIgO1zW92txaeqlgWcfEdl11sahVk5fxOXtEgC%2Bg1EZ8tUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEatGymHMdP0ffjgircAxChCJD9nTm4Aqk%2B%2Bs0qCxBKy5gz7YBtuMT5olIw2m9PZPGAmS7AvD3Se5mMOxK5UzmKLoDrQYlkNkQsScmR86wth0R%2Fn15xzALq93kG2YUsw9zQxUaHd8QJnamK80aeko0fLPs%2Fw%2Fb7NfUFSxhg6vDRMX0BiciLW5tcJ6qov%2FpQtTk%2Bd0TUWlfYEGAaqqSCNX0p%2F22D92OYPFZY%2BaGh2nJvBQgS34ml3WJOlt1cnD26HV1kUzRug7MBZH1Yv3yyqXDOMaUk70orpLlGnyUVnj8Un4NBHpilZFakF7pBWBLDwQA4AeCYvH1TeGamVcuuu9cqbeJg5HnDdE8PXUt%2FBL48NgjZDRnuAM6owWU0qRyqu99DznqCDN%2Bf03%2BH7Z0h%2F%2BoHqxQW5CGEiE8PJR4gOAAtPg6z2Q1IhMzjQQ2W%2Bjx6FxBqPdPN8vXmlkSB5%2BsHa2Ay5%2FDs7vCohXaY1OCoPgytOcEq61zr46KFrsjxeSY9PuOZvgVRaKC3dw%2B9CrMKf388ggIDBlsx%2BRUyPNJH1Cp0soC1HANXhxTA271%2B2%2FsuitE%2BF9fazFSyLTR%2Bx4CqENzJZrmlaHuAn37qiMEV4jeRb4y0XxCCWqBlpJZEq1%2BEvKGlYeUPlp8DmAFOMOeez8EGOqUBosfrZwF8aIsujgtmfM9eSMM5rIGzzDROJEJLGLyN1QPiJjHz5c46RZiiBpUoSnqglGLkg5ONhW1%2Ft0TElnIaoCL14543GyjZFwp%2Ba93ZSM5eSvQUDbuSInTmiztMamlHFuOfOpOh6ui%2BsGEEnydXx%2FR92wKPTrILZxGwj4%2F8d6RxiO%2Fl30SEsu9XNJfCf009mBbewEnGY3IjDdxztZHbbQSJV2aM&X-Amz-Signature=eb3c65bc3ba1fc27327e8ac66c4df0d19d45d9112ed981d3434839ca53fc1884&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD3OUWK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDwx1Wu%2Fls%2Bw0FpY%2Bdk1gaFM1BFIpPdndxWYBF8ovV2swIgO1zW92txaeqlgWcfEdl11sahVk5fxOXtEgC%2Bg1EZ8tUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEatGymHMdP0ffjgircAxChCJD9nTm4Aqk%2B%2Bs0qCxBKy5gz7YBtuMT5olIw2m9PZPGAmS7AvD3Se5mMOxK5UzmKLoDrQYlkNkQsScmR86wth0R%2Fn15xzALq93kG2YUsw9zQxUaHd8QJnamK80aeko0fLPs%2Fw%2Fb7NfUFSxhg6vDRMX0BiciLW5tcJ6qov%2FpQtTk%2Bd0TUWlfYEGAaqqSCNX0p%2F22D92OYPFZY%2BaGh2nJvBQgS34ml3WJOlt1cnD26HV1kUzRug7MBZH1Yv3yyqXDOMaUk70orpLlGnyUVnj8Un4NBHpilZFakF7pBWBLDwQA4AeCYvH1TeGamVcuuu9cqbeJg5HnDdE8PXUt%2FBL48NgjZDRnuAM6owWU0qRyqu99DznqCDN%2Bf03%2BH7Z0h%2F%2BoHqxQW5CGEiE8PJR4gOAAtPg6z2Q1IhMzjQQ2W%2Bjx6FxBqPdPN8vXmlkSB5%2BsHa2Ay5%2FDs7vCohXaY1OCoPgytOcEq61zr46KFrsjxeSY9PuOZvgVRaKC3dw%2B9CrMKf388ggIDBlsx%2BRUyPNJH1Cp0soC1HANXhxTA271%2B2%2FsuitE%2BF9fazFSyLTR%2Bx4CqENzJZrmlaHuAn37qiMEV4jeRb4y0XxCCWqBlpJZEq1%2BEvKGlYeUPlp8DmAFOMOeez8EGOqUBosfrZwF8aIsujgtmfM9eSMM5rIGzzDROJEJLGLyN1QPiJjHz5c46RZiiBpUoSnqglGLkg5ONhW1%2Ft0TElnIaoCL14543GyjZFwp%2Ba93ZSM5eSvQUDbuSInTmiztMamlHFuOfOpOh6ui%2BsGEEnydXx%2FR92wKPTrILZxGwj4%2F8d6RxiO%2Fl30SEsu9XNJfCf009mBbewEnGY3IjDdxztZHbbQSJV2aM&X-Amz-Signature=a4b40f5410a90a4198963c374fff6c6433bab207daed4ba071859baf0d7b4fed&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD3OUWK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDwx1Wu%2Fls%2Bw0FpY%2Bdk1gaFM1BFIpPdndxWYBF8ovV2swIgO1zW92txaeqlgWcfEdl11sahVk5fxOXtEgC%2Bg1EZ8tUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEatGymHMdP0ffjgircAxChCJD9nTm4Aqk%2B%2Bs0qCxBKy5gz7YBtuMT5olIw2m9PZPGAmS7AvD3Se5mMOxK5UzmKLoDrQYlkNkQsScmR86wth0R%2Fn15xzALq93kG2YUsw9zQxUaHd8QJnamK80aeko0fLPs%2Fw%2Fb7NfUFSxhg6vDRMX0BiciLW5tcJ6qov%2FpQtTk%2Bd0TUWlfYEGAaqqSCNX0p%2F22D92OYPFZY%2BaGh2nJvBQgS34ml3WJOlt1cnD26HV1kUzRug7MBZH1Yv3yyqXDOMaUk70orpLlGnyUVnj8Un4NBHpilZFakF7pBWBLDwQA4AeCYvH1TeGamVcuuu9cqbeJg5HnDdE8PXUt%2FBL48NgjZDRnuAM6owWU0qRyqu99DznqCDN%2Bf03%2BH7Z0h%2F%2BoHqxQW5CGEiE8PJR4gOAAtPg6z2Q1IhMzjQQ2W%2Bjx6FxBqPdPN8vXmlkSB5%2BsHa2Ay5%2FDs7vCohXaY1OCoPgytOcEq61zr46KFrsjxeSY9PuOZvgVRaKC3dw%2B9CrMKf388ggIDBlsx%2BRUyPNJH1Cp0soC1HANXhxTA271%2B2%2FsuitE%2BF9fazFSyLTR%2Bx4CqENzJZrmlaHuAn37qiMEV4jeRb4y0XxCCWqBlpJZEq1%2BEvKGlYeUPlp8DmAFOMOeez8EGOqUBosfrZwF8aIsujgtmfM9eSMM5rIGzzDROJEJLGLyN1QPiJjHz5c46RZiiBpUoSnqglGLkg5ONhW1%2Ft0TElnIaoCL14543GyjZFwp%2Ba93ZSM5eSvQUDbuSInTmiztMamlHFuOfOpOh6ui%2BsGEEnydXx%2FR92wKPTrILZxGwj4%2F8d6RxiO%2Fl30SEsu9XNJfCf009mBbewEnGY3IjDdxztZHbbQSJV2aM&X-Amz-Signature=d2aed44bb610866910ca2a7ae1078069bb923dd2f9bbcf99b2b1fcaddcf5595b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD3OUWK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDwx1Wu%2Fls%2Bw0FpY%2Bdk1gaFM1BFIpPdndxWYBF8ovV2swIgO1zW92txaeqlgWcfEdl11sahVk5fxOXtEgC%2Bg1EZ8tUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEatGymHMdP0ffjgircAxChCJD9nTm4Aqk%2B%2Bs0qCxBKy5gz7YBtuMT5olIw2m9PZPGAmS7AvD3Se5mMOxK5UzmKLoDrQYlkNkQsScmR86wth0R%2Fn15xzALq93kG2YUsw9zQxUaHd8QJnamK80aeko0fLPs%2Fw%2Fb7NfUFSxhg6vDRMX0BiciLW5tcJ6qov%2FpQtTk%2Bd0TUWlfYEGAaqqSCNX0p%2F22D92OYPFZY%2BaGh2nJvBQgS34ml3WJOlt1cnD26HV1kUzRug7MBZH1Yv3yyqXDOMaUk70orpLlGnyUVnj8Un4NBHpilZFakF7pBWBLDwQA4AeCYvH1TeGamVcuuu9cqbeJg5HnDdE8PXUt%2FBL48NgjZDRnuAM6owWU0qRyqu99DznqCDN%2Bf03%2BH7Z0h%2F%2BoHqxQW5CGEiE8PJR4gOAAtPg6z2Q1IhMzjQQ2W%2Bjx6FxBqPdPN8vXmlkSB5%2BsHa2Ay5%2FDs7vCohXaY1OCoPgytOcEq61zr46KFrsjxeSY9PuOZvgVRaKC3dw%2B9CrMKf388ggIDBlsx%2BRUyPNJH1Cp0soC1HANXhxTA271%2B2%2FsuitE%2BF9fazFSyLTR%2Bx4CqENzJZrmlaHuAn37qiMEV4jeRb4y0XxCCWqBlpJZEq1%2BEvKGlYeUPlp8DmAFOMOeez8EGOqUBosfrZwF8aIsujgtmfM9eSMM5rIGzzDROJEJLGLyN1QPiJjHz5c46RZiiBpUoSnqglGLkg5ONhW1%2Ft0TElnIaoCL14543GyjZFwp%2Ba93ZSM5eSvQUDbuSInTmiztMamlHFuOfOpOh6ui%2BsGEEnydXx%2FR92wKPTrILZxGwj4%2F8d6RxiO%2Fl30SEsu9XNJfCf009mBbewEnGY3IjDdxztZHbbQSJV2aM&X-Amz-Signature=b738ca04b19a16a87fa484834a1074c5d45fef46191c42941cbb980763c89e76&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD3OUWK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDwx1Wu%2Fls%2Bw0FpY%2Bdk1gaFM1BFIpPdndxWYBF8ovV2swIgO1zW92txaeqlgWcfEdl11sahVk5fxOXtEgC%2Bg1EZ8tUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEatGymHMdP0ffjgircAxChCJD9nTm4Aqk%2B%2Bs0qCxBKy5gz7YBtuMT5olIw2m9PZPGAmS7AvD3Se5mMOxK5UzmKLoDrQYlkNkQsScmR86wth0R%2Fn15xzALq93kG2YUsw9zQxUaHd8QJnamK80aeko0fLPs%2Fw%2Fb7NfUFSxhg6vDRMX0BiciLW5tcJ6qov%2FpQtTk%2Bd0TUWlfYEGAaqqSCNX0p%2F22D92OYPFZY%2BaGh2nJvBQgS34ml3WJOlt1cnD26HV1kUzRug7MBZH1Yv3yyqXDOMaUk70orpLlGnyUVnj8Un4NBHpilZFakF7pBWBLDwQA4AeCYvH1TeGamVcuuu9cqbeJg5HnDdE8PXUt%2FBL48NgjZDRnuAM6owWU0qRyqu99DznqCDN%2Bf03%2BH7Z0h%2F%2BoHqxQW5CGEiE8PJR4gOAAtPg6z2Q1IhMzjQQ2W%2Bjx6FxBqPdPN8vXmlkSB5%2BsHa2Ay5%2FDs7vCohXaY1OCoPgytOcEq61zr46KFrsjxeSY9PuOZvgVRaKC3dw%2B9CrMKf388ggIDBlsx%2BRUyPNJH1Cp0soC1HANXhxTA271%2B2%2FsuitE%2BF9fazFSyLTR%2Bx4CqENzJZrmlaHuAn37qiMEV4jeRb4y0XxCCWqBlpJZEq1%2BEvKGlYeUPlp8DmAFOMOeez8EGOqUBosfrZwF8aIsujgtmfM9eSMM5rIGzzDROJEJLGLyN1QPiJjHz5c46RZiiBpUoSnqglGLkg5ONhW1%2Ft0TElnIaoCL14543GyjZFwp%2Ba93ZSM5eSvQUDbuSInTmiztMamlHFuOfOpOh6ui%2BsGEEnydXx%2FR92wKPTrILZxGwj4%2F8d6RxiO%2Fl30SEsu9XNJfCf009mBbewEnGY3IjDdxztZHbbQSJV2aM&X-Amz-Signature=441672c12f333fdfdefeb20dc1cfe201d16b5429e958dc3fb81cfebc15333127&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD3OUWK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDwx1Wu%2Fls%2Bw0FpY%2Bdk1gaFM1BFIpPdndxWYBF8ovV2swIgO1zW92txaeqlgWcfEdl11sahVk5fxOXtEgC%2Bg1EZ8tUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEatGymHMdP0ffjgircAxChCJD9nTm4Aqk%2B%2Bs0qCxBKy5gz7YBtuMT5olIw2m9PZPGAmS7AvD3Se5mMOxK5UzmKLoDrQYlkNkQsScmR86wth0R%2Fn15xzALq93kG2YUsw9zQxUaHd8QJnamK80aeko0fLPs%2Fw%2Fb7NfUFSxhg6vDRMX0BiciLW5tcJ6qov%2FpQtTk%2Bd0TUWlfYEGAaqqSCNX0p%2F22D92OYPFZY%2BaGh2nJvBQgS34ml3WJOlt1cnD26HV1kUzRug7MBZH1Yv3yyqXDOMaUk70orpLlGnyUVnj8Un4NBHpilZFakF7pBWBLDwQA4AeCYvH1TeGamVcuuu9cqbeJg5HnDdE8PXUt%2FBL48NgjZDRnuAM6owWU0qRyqu99DznqCDN%2Bf03%2BH7Z0h%2F%2BoHqxQW5CGEiE8PJR4gOAAtPg6z2Q1IhMzjQQ2W%2Bjx6FxBqPdPN8vXmlkSB5%2BsHa2Ay5%2FDs7vCohXaY1OCoPgytOcEq61zr46KFrsjxeSY9PuOZvgVRaKC3dw%2B9CrMKf388ggIDBlsx%2BRUyPNJH1Cp0soC1HANXhxTA271%2B2%2FsuitE%2BF9fazFSyLTR%2Bx4CqENzJZrmlaHuAn37qiMEV4jeRb4y0XxCCWqBlpJZEq1%2BEvKGlYeUPlp8DmAFOMOeez8EGOqUBosfrZwF8aIsujgtmfM9eSMM5rIGzzDROJEJLGLyN1QPiJjHz5c46RZiiBpUoSnqglGLkg5ONhW1%2Ft0TElnIaoCL14543GyjZFwp%2Ba93ZSM5eSvQUDbuSInTmiztMamlHFuOfOpOh6ui%2BsGEEnydXx%2FR92wKPTrILZxGwj4%2F8d6RxiO%2Fl30SEsu9XNJfCf009mBbewEnGY3IjDdxztZHbbQSJV2aM&X-Amz-Signature=6e9a3a3edd64088a55cc9653341154b8f5f59c5d1de30c5d01b31712d0f50082&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJD3OUWK%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDwx1Wu%2Fls%2Bw0FpY%2Bdk1gaFM1BFIpPdndxWYBF8ovV2swIgO1zW92txaeqlgWcfEdl11sahVk5fxOXtEgC%2Bg1EZ8tUq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCEatGymHMdP0ffjgircAxChCJD9nTm4Aqk%2B%2Bs0qCxBKy5gz7YBtuMT5olIw2m9PZPGAmS7AvD3Se5mMOxK5UzmKLoDrQYlkNkQsScmR86wth0R%2Fn15xzALq93kG2YUsw9zQxUaHd8QJnamK80aeko0fLPs%2Fw%2Fb7NfUFSxhg6vDRMX0BiciLW5tcJ6qov%2FpQtTk%2Bd0TUWlfYEGAaqqSCNX0p%2F22D92OYPFZY%2BaGh2nJvBQgS34ml3WJOlt1cnD26HV1kUzRug7MBZH1Yv3yyqXDOMaUk70orpLlGnyUVnj8Un4NBHpilZFakF7pBWBLDwQA4AeCYvH1TeGamVcuuu9cqbeJg5HnDdE8PXUt%2FBL48NgjZDRnuAM6owWU0qRyqu99DznqCDN%2Bf03%2BH7Z0h%2F%2BoHqxQW5CGEiE8PJR4gOAAtPg6z2Q1IhMzjQQ2W%2Bjx6FxBqPdPN8vXmlkSB5%2BsHa2Ay5%2FDs7vCohXaY1OCoPgytOcEq61zr46KFrsjxeSY9PuOZvgVRaKC3dw%2B9CrMKf388ggIDBlsx%2BRUyPNJH1Cp0soC1HANXhxTA271%2B2%2FsuitE%2BF9fazFSyLTR%2Bx4CqENzJZrmlaHuAn37qiMEV4jeRb4y0XxCCWqBlpJZEq1%2BEvKGlYeUPlp8DmAFOMOeez8EGOqUBosfrZwF8aIsujgtmfM9eSMM5rIGzzDROJEJLGLyN1QPiJjHz5c46RZiiBpUoSnqglGLkg5ONhW1%2Ft0TElnIaoCL14543GyjZFwp%2Ba93ZSM5eSvQUDbuSInTmiztMamlHFuOfOpOh6ui%2BsGEEnydXx%2FR92wKPTrILZxGwj4%2F8d6RxiO%2Fl30SEsu9XNJfCf009mBbewEnGY3IjDdxztZHbbQSJV2aM&X-Amz-Signature=faa0253b231acfc78301fae2dc59d177d3708b81a25c540a3aebaf47043833d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
