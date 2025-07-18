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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDEEOCO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFfVoVzzYTGTgY16rrN%2BbMt29W%2FpA2sOol0MH3w%2F8YbfAiEA24QTWGrPecdJOMDKMkAsKaz1HKkBEryDgjeQyMAGo1oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnod7utCWBwdL4dMyrcAxZYvXiZCIKwnlt1HDYZtuvlLuyHndP3%2Bhup89apQYtK6OrOUSAaLT4oFEbOdRLl0GVL7W4M5%2FSIQkiuwdWupxEm%2FOCuG8JRGYZjuxNqdxKLYwJJbxrKhvlP1WkvctTA285AQWuLA9ixjf2s5ygY7UI%2FKOoueC7pX%2BqmuG7zLhUMjgmrwizH1AjG%2F%2FUfgqlmGLxdQ8w6QS4uo4YzXk9yQOovoOQ97ofoaqafv62lTrVYxwvBJZhMegbN0SmPDXxWEXjQQoDwpPcBDc65kJk9BHhOzGKmgw9s3Ig3DcUcXCrOv75K17Iwg00v87CtH%2BtgKggzim61nOcpccO1GM%2BxMbG26dZ%2FylW98jd%2FY%2B4MUdZf7RntIJLIr3P8pPnMjxO3D3lKT6Zb6yOwz0nheSq4h45CvPSJ5fUKDT1455OIFCTUNfk4vK4etPwesDKeQQ0rnUDT1r%2BwePAD3SwMXm1RZWud52Te6%2Bo8BCnzNlIIyk0r%2FXPEvEmD72K%2B1TOcY2wMVfT7S33LTl7Lvl0mVxrpupRYx6rYZhnQYJETWRFmvQcvoVxYwO8LfTypHNht2QXj9m%2F40Aygvto2G2HIemV3iibHSbty9Zz9MomNhAW2YIJnxKCjKiAYJb4FmSOzMKyw58MGOqUBM%2F5UvngVHngY3d9Kk873P9rK4Nef%2BMUbkHmE3u2B6BMQ2crNykkifrysD5yvk%2F%2BNr4tRY8gmhT7dzJnXu9acXmxs1RVUNCR8T0vrrwysRZTq2QVaaH7y%2F4FWMCXUdSZPPHb382PA3EkqtHL5okZ%2B9ghzGCOXGuZMUxBq%2BgqaKOP6FQ%2Bq5gwFwmId4UNyVqfKCXURJbvUoXKM8LCr%2BoQKLa6zdOmQ&X-Amz-Signature=a61223cff1884b8802d934e4bbf5c367899bef7fa4c540e50d078524905f9b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDEEOCO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFfVoVzzYTGTgY16rrN%2BbMt29W%2FpA2sOol0MH3w%2F8YbfAiEA24QTWGrPecdJOMDKMkAsKaz1HKkBEryDgjeQyMAGo1oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnod7utCWBwdL4dMyrcAxZYvXiZCIKwnlt1HDYZtuvlLuyHndP3%2Bhup89apQYtK6OrOUSAaLT4oFEbOdRLl0GVL7W4M5%2FSIQkiuwdWupxEm%2FOCuG8JRGYZjuxNqdxKLYwJJbxrKhvlP1WkvctTA285AQWuLA9ixjf2s5ygY7UI%2FKOoueC7pX%2BqmuG7zLhUMjgmrwizH1AjG%2F%2FUfgqlmGLxdQ8w6QS4uo4YzXk9yQOovoOQ97ofoaqafv62lTrVYxwvBJZhMegbN0SmPDXxWEXjQQoDwpPcBDc65kJk9BHhOzGKmgw9s3Ig3DcUcXCrOv75K17Iwg00v87CtH%2BtgKggzim61nOcpccO1GM%2BxMbG26dZ%2FylW98jd%2FY%2B4MUdZf7RntIJLIr3P8pPnMjxO3D3lKT6Zb6yOwz0nheSq4h45CvPSJ5fUKDT1455OIFCTUNfk4vK4etPwesDKeQQ0rnUDT1r%2BwePAD3SwMXm1RZWud52Te6%2Bo8BCnzNlIIyk0r%2FXPEvEmD72K%2B1TOcY2wMVfT7S33LTl7Lvl0mVxrpupRYx6rYZhnQYJETWRFmvQcvoVxYwO8LfTypHNht2QXj9m%2F40Aygvto2G2HIemV3iibHSbty9Zz9MomNhAW2YIJnxKCjKiAYJb4FmSOzMKyw58MGOqUBM%2F5UvngVHngY3d9Kk873P9rK4Nef%2BMUbkHmE3u2B6BMQ2crNykkifrysD5yvk%2F%2BNr4tRY8gmhT7dzJnXu9acXmxs1RVUNCR8T0vrrwysRZTq2QVaaH7y%2F4FWMCXUdSZPPHb382PA3EkqtHL5okZ%2B9ghzGCOXGuZMUxBq%2BgqaKOP6FQ%2Bq5gwFwmId4UNyVqfKCXURJbvUoXKM8LCr%2BoQKLa6zdOmQ&X-Amz-Signature=23c17a1698994c065f75f8770f99a3ce6730439a23efe2760cb5fade3bae549c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDEEOCO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFfVoVzzYTGTgY16rrN%2BbMt29W%2FpA2sOol0MH3w%2F8YbfAiEA24QTWGrPecdJOMDKMkAsKaz1HKkBEryDgjeQyMAGo1oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnod7utCWBwdL4dMyrcAxZYvXiZCIKwnlt1HDYZtuvlLuyHndP3%2Bhup89apQYtK6OrOUSAaLT4oFEbOdRLl0GVL7W4M5%2FSIQkiuwdWupxEm%2FOCuG8JRGYZjuxNqdxKLYwJJbxrKhvlP1WkvctTA285AQWuLA9ixjf2s5ygY7UI%2FKOoueC7pX%2BqmuG7zLhUMjgmrwizH1AjG%2F%2FUfgqlmGLxdQ8w6QS4uo4YzXk9yQOovoOQ97ofoaqafv62lTrVYxwvBJZhMegbN0SmPDXxWEXjQQoDwpPcBDc65kJk9BHhOzGKmgw9s3Ig3DcUcXCrOv75K17Iwg00v87CtH%2BtgKggzim61nOcpccO1GM%2BxMbG26dZ%2FylW98jd%2FY%2B4MUdZf7RntIJLIr3P8pPnMjxO3D3lKT6Zb6yOwz0nheSq4h45CvPSJ5fUKDT1455OIFCTUNfk4vK4etPwesDKeQQ0rnUDT1r%2BwePAD3SwMXm1RZWud52Te6%2Bo8BCnzNlIIyk0r%2FXPEvEmD72K%2B1TOcY2wMVfT7S33LTl7Lvl0mVxrpupRYx6rYZhnQYJETWRFmvQcvoVxYwO8LfTypHNht2QXj9m%2F40Aygvto2G2HIemV3iibHSbty9Zz9MomNhAW2YIJnxKCjKiAYJb4FmSOzMKyw58MGOqUBM%2F5UvngVHngY3d9Kk873P9rK4Nef%2BMUbkHmE3u2B6BMQ2crNykkifrysD5yvk%2F%2BNr4tRY8gmhT7dzJnXu9acXmxs1RVUNCR8T0vrrwysRZTq2QVaaH7y%2F4FWMCXUdSZPPHb382PA3EkqtHL5okZ%2B9ghzGCOXGuZMUxBq%2BgqaKOP6FQ%2Bq5gwFwmId4UNyVqfKCXURJbvUoXKM8LCr%2BoQKLa6zdOmQ&X-Amz-Signature=591eb092190c679abce0890883684e5b223eb7b784be583de6fbbece97e4dfb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDEEOCO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFfVoVzzYTGTgY16rrN%2BbMt29W%2FpA2sOol0MH3w%2F8YbfAiEA24QTWGrPecdJOMDKMkAsKaz1HKkBEryDgjeQyMAGo1oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnod7utCWBwdL4dMyrcAxZYvXiZCIKwnlt1HDYZtuvlLuyHndP3%2Bhup89apQYtK6OrOUSAaLT4oFEbOdRLl0GVL7W4M5%2FSIQkiuwdWupxEm%2FOCuG8JRGYZjuxNqdxKLYwJJbxrKhvlP1WkvctTA285AQWuLA9ixjf2s5ygY7UI%2FKOoueC7pX%2BqmuG7zLhUMjgmrwizH1AjG%2F%2FUfgqlmGLxdQ8w6QS4uo4YzXk9yQOovoOQ97ofoaqafv62lTrVYxwvBJZhMegbN0SmPDXxWEXjQQoDwpPcBDc65kJk9BHhOzGKmgw9s3Ig3DcUcXCrOv75K17Iwg00v87CtH%2BtgKggzim61nOcpccO1GM%2BxMbG26dZ%2FylW98jd%2FY%2B4MUdZf7RntIJLIr3P8pPnMjxO3D3lKT6Zb6yOwz0nheSq4h45CvPSJ5fUKDT1455OIFCTUNfk4vK4etPwesDKeQQ0rnUDT1r%2BwePAD3SwMXm1RZWud52Te6%2Bo8BCnzNlIIyk0r%2FXPEvEmD72K%2B1TOcY2wMVfT7S33LTl7Lvl0mVxrpupRYx6rYZhnQYJETWRFmvQcvoVxYwO8LfTypHNht2QXj9m%2F40Aygvto2G2HIemV3iibHSbty9Zz9MomNhAW2YIJnxKCjKiAYJb4FmSOzMKyw58MGOqUBM%2F5UvngVHngY3d9Kk873P9rK4Nef%2BMUbkHmE3u2B6BMQ2crNykkifrysD5yvk%2F%2BNr4tRY8gmhT7dzJnXu9acXmxs1RVUNCR8T0vrrwysRZTq2QVaaH7y%2F4FWMCXUdSZPPHb382PA3EkqtHL5okZ%2B9ghzGCOXGuZMUxBq%2BgqaKOP6FQ%2Bq5gwFwmId4UNyVqfKCXURJbvUoXKM8LCr%2BoQKLa6zdOmQ&X-Amz-Signature=0dd5b9bbff6f54c3ec80752e14c732f8cce58fa0e1210eeed221add908203d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDEEOCO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFfVoVzzYTGTgY16rrN%2BbMt29W%2FpA2sOol0MH3w%2F8YbfAiEA24QTWGrPecdJOMDKMkAsKaz1HKkBEryDgjeQyMAGo1oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnod7utCWBwdL4dMyrcAxZYvXiZCIKwnlt1HDYZtuvlLuyHndP3%2Bhup89apQYtK6OrOUSAaLT4oFEbOdRLl0GVL7W4M5%2FSIQkiuwdWupxEm%2FOCuG8JRGYZjuxNqdxKLYwJJbxrKhvlP1WkvctTA285AQWuLA9ixjf2s5ygY7UI%2FKOoueC7pX%2BqmuG7zLhUMjgmrwizH1AjG%2F%2FUfgqlmGLxdQ8w6QS4uo4YzXk9yQOovoOQ97ofoaqafv62lTrVYxwvBJZhMegbN0SmPDXxWEXjQQoDwpPcBDc65kJk9BHhOzGKmgw9s3Ig3DcUcXCrOv75K17Iwg00v87CtH%2BtgKggzim61nOcpccO1GM%2BxMbG26dZ%2FylW98jd%2FY%2B4MUdZf7RntIJLIr3P8pPnMjxO3D3lKT6Zb6yOwz0nheSq4h45CvPSJ5fUKDT1455OIFCTUNfk4vK4etPwesDKeQQ0rnUDT1r%2BwePAD3SwMXm1RZWud52Te6%2Bo8BCnzNlIIyk0r%2FXPEvEmD72K%2B1TOcY2wMVfT7S33LTl7Lvl0mVxrpupRYx6rYZhnQYJETWRFmvQcvoVxYwO8LfTypHNht2QXj9m%2F40Aygvto2G2HIemV3iibHSbty9Zz9MomNhAW2YIJnxKCjKiAYJb4FmSOzMKyw58MGOqUBM%2F5UvngVHngY3d9Kk873P9rK4Nef%2BMUbkHmE3u2B6BMQ2crNykkifrysD5yvk%2F%2BNr4tRY8gmhT7dzJnXu9acXmxs1RVUNCR8T0vrrwysRZTq2QVaaH7y%2F4FWMCXUdSZPPHb382PA3EkqtHL5okZ%2B9ghzGCOXGuZMUxBq%2BgqaKOP6FQ%2Bq5gwFwmId4UNyVqfKCXURJbvUoXKM8LCr%2BoQKLa6zdOmQ&X-Amz-Signature=999cf5ae302fa7579d543966c9ecd48b5013bee1f2838496b85d58eb36223146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDEEOCO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFfVoVzzYTGTgY16rrN%2BbMt29W%2FpA2sOol0MH3w%2F8YbfAiEA24QTWGrPecdJOMDKMkAsKaz1HKkBEryDgjeQyMAGo1oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnod7utCWBwdL4dMyrcAxZYvXiZCIKwnlt1HDYZtuvlLuyHndP3%2Bhup89apQYtK6OrOUSAaLT4oFEbOdRLl0GVL7W4M5%2FSIQkiuwdWupxEm%2FOCuG8JRGYZjuxNqdxKLYwJJbxrKhvlP1WkvctTA285AQWuLA9ixjf2s5ygY7UI%2FKOoueC7pX%2BqmuG7zLhUMjgmrwizH1AjG%2F%2FUfgqlmGLxdQ8w6QS4uo4YzXk9yQOovoOQ97ofoaqafv62lTrVYxwvBJZhMegbN0SmPDXxWEXjQQoDwpPcBDc65kJk9BHhOzGKmgw9s3Ig3DcUcXCrOv75K17Iwg00v87CtH%2BtgKggzim61nOcpccO1GM%2BxMbG26dZ%2FylW98jd%2FY%2B4MUdZf7RntIJLIr3P8pPnMjxO3D3lKT6Zb6yOwz0nheSq4h45CvPSJ5fUKDT1455OIFCTUNfk4vK4etPwesDKeQQ0rnUDT1r%2BwePAD3SwMXm1RZWud52Te6%2Bo8BCnzNlIIyk0r%2FXPEvEmD72K%2B1TOcY2wMVfT7S33LTl7Lvl0mVxrpupRYx6rYZhnQYJETWRFmvQcvoVxYwO8LfTypHNht2QXj9m%2F40Aygvto2G2HIemV3iibHSbty9Zz9MomNhAW2YIJnxKCjKiAYJb4FmSOzMKyw58MGOqUBM%2F5UvngVHngY3d9Kk873P9rK4Nef%2BMUbkHmE3u2B6BMQ2crNykkifrysD5yvk%2F%2BNr4tRY8gmhT7dzJnXu9acXmxs1RVUNCR8T0vrrwysRZTq2QVaaH7y%2F4FWMCXUdSZPPHb382PA3EkqtHL5okZ%2B9ghzGCOXGuZMUxBq%2BgqaKOP6FQ%2Bq5gwFwmId4UNyVqfKCXURJbvUoXKM8LCr%2BoQKLa6zdOmQ&X-Amz-Signature=25650dd71d56d2c4d55f32262144149f96a7697cdd20d65812e78e611d000a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDEEOCO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFfVoVzzYTGTgY16rrN%2BbMt29W%2FpA2sOol0MH3w%2F8YbfAiEA24QTWGrPecdJOMDKMkAsKaz1HKkBEryDgjeQyMAGo1oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnod7utCWBwdL4dMyrcAxZYvXiZCIKwnlt1HDYZtuvlLuyHndP3%2Bhup89apQYtK6OrOUSAaLT4oFEbOdRLl0GVL7W4M5%2FSIQkiuwdWupxEm%2FOCuG8JRGYZjuxNqdxKLYwJJbxrKhvlP1WkvctTA285AQWuLA9ixjf2s5ygY7UI%2FKOoueC7pX%2BqmuG7zLhUMjgmrwizH1AjG%2F%2FUfgqlmGLxdQ8w6QS4uo4YzXk9yQOovoOQ97ofoaqafv62lTrVYxwvBJZhMegbN0SmPDXxWEXjQQoDwpPcBDc65kJk9BHhOzGKmgw9s3Ig3DcUcXCrOv75K17Iwg00v87CtH%2BtgKggzim61nOcpccO1GM%2BxMbG26dZ%2FylW98jd%2FY%2B4MUdZf7RntIJLIr3P8pPnMjxO3D3lKT6Zb6yOwz0nheSq4h45CvPSJ5fUKDT1455OIFCTUNfk4vK4etPwesDKeQQ0rnUDT1r%2BwePAD3SwMXm1RZWud52Te6%2Bo8BCnzNlIIyk0r%2FXPEvEmD72K%2B1TOcY2wMVfT7S33LTl7Lvl0mVxrpupRYx6rYZhnQYJETWRFmvQcvoVxYwO8LfTypHNht2QXj9m%2F40Aygvto2G2HIemV3iibHSbty9Zz9MomNhAW2YIJnxKCjKiAYJb4FmSOzMKyw58MGOqUBM%2F5UvngVHngY3d9Kk873P9rK4Nef%2BMUbkHmE3u2B6BMQ2crNykkifrysD5yvk%2F%2BNr4tRY8gmhT7dzJnXu9acXmxs1RVUNCR8T0vrrwysRZTq2QVaaH7y%2F4FWMCXUdSZPPHb382PA3EkqtHL5okZ%2B9ghzGCOXGuZMUxBq%2BgqaKOP6FQ%2Bq5gwFwmId4UNyVqfKCXURJbvUoXKM8LCr%2BoQKLa6zdOmQ&X-Amz-Signature=5295c548c912e9bd1401810151c79469b5d72db360722113f08da15a244b50a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDEEOCO%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIFfVoVzzYTGTgY16rrN%2BbMt29W%2FpA2sOol0MH3w%2F8YbfAiEA24QTWGrPecdJOMDKMkAsKaz1HKkBEryDgjeQyMAGo1oqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnod7utCWBwdL4dMyrcAxZYvXiZCIKwnlt1HDYZtuvlLuyHndP3%2Bhup89apQYtK6OrOUSAaLT4oFEbOdRLl0GVL7W4M5%2FSIQkiuwdWupxEm%2FOCuG8JRGYZjuxNqdxKLYwJJbxrKhvlP1WkvctTA285AQWuLA9ixjf2s5ygY7UI%2FKOoueC7pX%2BqmuG7zLhUMjgmrwizH1AjG%2F%2FUfgqlmGLxdQ8w6QS4uo4YzXk9yQOovoOQ97ofoaqafv62lTrVYxwvBJZhMegbN0SmPDXxWEXjQQoDwpPcBDc65kJk9BHhOzGKmgw9s3Ig3DcUcXCrOv75K17Iwg00v87CtH%2BtgKggzim61nOcpccO1GM%2BxMbG26dZ%2FylW98jd%2FY%2B4MUdZf7RntIJLIr3P8pPnMjxO3D3lKT6Zb6yOwz0nheSq4h45CvPSJ5fUKDT1455OIFCTUNfk4vK4etPwesDKeQQ0rnUDT1r%2BwePAD3SwMXm1RZWud52Te6%2Bo8BCnzNlIIyk0r%2FXPEvEmD72K%2B1TOcY2wMVfT7S33LTl7Lvl0mVxrpupRYx6rYZhnQYJETWRFmvQcvoVxYwO8LfTypHNht2QXj9m%2F40Aygvto2G2HIemV3iibHSbty9Zz9MomNhAW2YIJnxKCjKiAYJb4FmSOzMKyw58MGOqUBM%2F5UvngVHngY3d9Kk873P9rK4Nef%2BMUbkHmE3u2B6BMQ2crNykkifrysD5yvk%2F%2BNr4tRY8gmhT7dzJnXu9acXmxs1RVUNCR8T0vrrwysRZTq2QVaaH7y%2F4FWMCXUdSZPPHb382PA3EkqtHL5okZ%2B9ghzGCOXGuZMUxBq%2BgqaKOP6FQ%2Bq5gwFwmId4UNyVqfKCXURJbvUoXKM8LCr%2BoQKLa6zdOmQ&X-Amz-Signature=a4e6906748549694858d2c5c002f9fc0ce10c55b50657b46e39305b42b232d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
