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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJIXMZC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDLKfBu02dmsqRMjdwKuSFcpYpe1r7A4grkAMit%2B%2FsykAiEAwZVRHGawMDwrojbfQKxyh8n%2F1SvhIKtBxYJMY%2FEU7w4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOop55wPKLpp%2F7qeyrcA%2F0Tf1AfLkrLm0S7zMS753QqjD15CHMePfTcssPH9eQymalBKEUrPKJ2z%2B2SkvAf4hEwTJdLUgbZ1peC%2FfZPrDFCUyFMFFe%2FBFyFkC0o67D8lw%2FgjhoyEORJcn8ScV7zu8TkG7xlZ%2FRIsNF9tWKWT92vIJO49s4e4qaourB8SYApkaqYDam1Jsi5rQFpxdg75MaVaWNgxI086sIzGmbOhz%2BfwBqJR8IrC0z2Nlw99qxrnYWYxFIsHQ%2FS4IpWSJDbynQZRv7utLN7FRN5SXtFR%2BtDoci2iRQ0Wtcn9WYImHJfrDlClMB2tfmELfvYHV%2B7TVl1vV9sxMjj%2FYTXQXpKxOSShCdG12MsrmMNEl0fKM0o1PIdAPm4U93yHfz2T4OE%2BKfxigX%2BbSxnBLxB3k7Ad8vGrFUnNpBSxLRXCY%2F9AbH53%2FkLYAEEPvSrVnfB3Lv7w0g9XwJcUU61FXeBaic7isQML09Bo%2Bz43BUPxFvzD9DL0g94vcMx24k57cGTxBsnTcja5iYljF6sD9w%2FAYHploHM%2F5Ll%2FPFY%2F%2Fes2V%2BVUmrBS6FreK0IdGcQVG5UN3D3CERR7OhSYLr3ZUzBTneDeXS5zT%2FflkakOQGMqjeVooQVOxW9d9oUCGQUCMgtMISV678GOqUBS%2F0w5ETHGjd8dC0LKA04jevbooZDaiMYknz5l6Pu3WNAkqia%2FwJwt4cobhKAEPAUrCHOpU5mPAcXQSpNcWRiaZQtsj742bBVyj5oQOs%2FszspNLjbnj8ixBib9fEBD9mZ%2FTlc13Y2nATeQEwrU%2FfHoguwNY8Z6S%2BBHZrxfbaV0yoAqqPcBDj3QT3WLWTmMU3zhu4W6P3iH72%2F%2BjufBKkHQRC8YLOY&X-Amz-Signature=067579af824dab0c93781c4f3f0e3edcb39195e5cc19cba82b75a09fa91c10b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJIXMZC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDLKfBu02dmsqRMjdwKuSFcpYpe1r7A4grkAMit%2B%2FsykAiEAwZVRHGawMDwrojbfQKxyh8n%2F1SvhIKtBxYJMY%2FEU7w4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOop55wPKLpp%2F7qeyrcA%2F0Tf1AfLkrLm0S7zMS753QqjD15CHMePfTcssPH9eQymalBKEUrPKJ2z%2B2SkvAf4hEwTJdLUgbZ1peC%2FfZPrDFCUyFMFFe%2FBFyFkC0o67D8lw%2FgjhoyEORJcn8ScV7zu8TkG7xlZ%2FRIsNF9tWKWT92vIJO49s4e4qaourB8SYApkaqYDam1Jsi5rQFpxdg75MaVaWNgxI086sIzGmbOhz%2BfwBqJR8IrC0z2Nlw99qxrnYWYxFIsHQ%2FS4IpWSJDbynQZRv7utLN7FRN5SXtFR%2BtDoci2iRQ0Wtcn9WYImHJfrDlClMB2tfmELfvYHV%2B7TVl1vV9sxMjj%2FYTXQXpKxOSShCdG12MsrmMNEl0fKM0o1PIdAPm4U93yHfz2T4OE%2BKfxigX%2BbSxnBLxB3k7Ad8vGrFUnNpBSxLRXCY%2F9AbH53%2FkLYAEEPvSrVnfB3Lv7w0g9XwJcUU61FXeBaic7isQML09Bo%2Bz43BUPxFvzD9DL0g94vcMx24k57cGTxBsnTcja5iYljF6sD9w%2FAYHploHM%2F5Ll%2FPFY%2F%2Fes2V%2BVUmrBS6FreK0IdGcQVG5UN3D3CERR7OhSYLr3ZUzBTneDeXS5zT%2FflkakOQGMqjeVooQVOxW9d9oUCGQUCMgtMISV678GOqUBS%2F0w5ETHGjd8dC0LKA04jevbooZDaiMYknz5l6Pu3WNAkqia%2FwJwt4cobhKAEPAUrCHOpU5mPAcXQSpNcWRiaZQtsj742bBVyj5oQOs%2FszspNLjbnj8ixBib9fEBD9mZ%2FTlc13Y2nATeQEwrU%2FfHoguwNY8Z6S%2BBHZrxfbaV0yoAqqPcBDj3QT3WLWTmMU3zhu4W6P3iH72%2F%2BjufBKkHQRC8YLOY&X-Amz-Signature=f89c24973403d01e72de964d68cba4283a811cd892f30c203572cba3d5c16bab&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJIXMZC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDLKfBu02dmsqRMjdwKuSFcpYpe1r7A4grkAMit%2B%2FsykAiEAwZVRHGawMDwrojbfQKxyh8n%2F1SvhIKtBxYJMY%2FEU7w4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOop55wPKLpp%2F7qeyrcA%2F0Tf1AfLkrLm0S7zMS753QqjD15CHMePfTcssPH9eQymalBKEUrPKJ2z%2B2SkvAf4hEwTJdLUgbZ1peC%2FfZPrDFCUyFMFFe%2FBFyFkC0o67D8lw%2FgjhoyEORJcn8ScV7zu8TkG7xlZ%2FRIsNF9tWKWT92vIJO49s4e4qaourB8SYApkaqYDam1Jsi5rQFpxdg75MaVaWNgxI086sIzGmbOhz%2BfwBqJR8IrC0z2Nlw99qxrnYWYxFIsHQ%2FS4IpWSJDbynQZRv7utLN7FRN5SXtFR%2BtDoci2iRQ0Wtcn9WYImHJfrDlClMB2tfmELfvYHV%2B7TVl1vV9sxMjj%2FYTXQXpKxOSShCdG12MsrmMNEl0fKM0o1PIdAPm4U93yHfz2T4OE%2BKfxigX%2BbSxnBLxB3k7Ad8vGrFUnNpBSxLRXCY%2F9AbH53%2FkLYAEEPvSrVnfB3Lv7w0g9XwJcUU61FXeBaic7isQML09Bo%2Bz43BUPxFvzD9DL0g94vcMx24k57cGTxBsnTcja5iYljF6sD9w%2FAYHploHM%2F5Ll%2FPFY%2F%2Fes2V%2BVUmrBS6FreK0IdGcQVG5UN3D3CERR7OhSYLr3ZUzBTneDeXS5zT%2FflkakOQGMqjeVooQVOxW9d9oUCGQUCMgtMISV678GOqUBS%2F0w5ETHGjd8dC0LKA04jevbooZDaiMYknz5l6Pu3WNAkqia%2FwJwt4cobhKAEPAUrCHOpU5mPAcXQSpNcWRiaZQtsj742bBVyj5oQOs%2FszspNLjbnj8ixBib9fEBD9mZ%2FTlc13Y2nATeQEwrU%2FfHoguwNY8Z6S%2BBHZrxfbaV0yoAqqPcBDj3QT3WLWTmMU3zhu4W6P3iH72%2F%2BjufBKkHQRC8YLOY&X-Amz-Signature=e1e712b5cc7209c1e2ea0d7e237077562ef1279340af39813e3451dee950fb77&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJIXMZC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDLKfBu02dmsqRMjdwKuSFcpYpe1r7A4grkAMit%2B%2FsykAiEAwZVRHGawMDwrojbfQKxyh8n%2F1SvhIKtBxYJMY%2FEU7w4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOop55wPKLpp%2F7qeyrcA%2F0Tf1AfLkrLm0S7zMS753QqjD15CHMePfTcssPH9eQymalBKEUrPKJ2z%2B2SkvAf4hEwTJdLUgbZ1peC%2FfZPrDFCUyFMFFe%2FBFyFkC0o67D8lw%2FgjhoyEORJcn8ScV7zu8TkG7xlZ%2FRIsNF9tWKWT92vIJO49s4e4qaourB8SYApkaqYDam1Jsi5rQFpxdg75MaVaWNgxI086sIzGmbOhz%2BfwBqJR8IrC0z2Nlw99qxrnYWYxFIsHQ%2FS4IpWSJDbynQZRv7utLN7FRN5SXtFR%2BtDoci2iRQ0Wtcn9WYImHJfrDlClMB2tfmELfvYHV%2B7TVl1vV9sxMjj%2FYTXQXpKxOSShCdG12MsrmMNEl0fKM0o1PIdAPm4U93yHfz2T4OE%2BKfxigX%2BbSxnBLxB3k7Ad8vGrFUnNpBSxLRXCY%2F9AbH53%2FkLYAEEPvSrVnfB3Lv7w0g9XwJcUU61FXeBaic7isQML09Bo%2Bz43BUPxFvzD9DL0g94vcMx24k57cGTxBsnTcja5iYljF6sD9w%2FAYHploHM%2F5Ll%2FPFY%2F%2Fes2V%2BVUmrBS6FreK0IdGcQVG5UN3D3CERR7OhSYLr3ZUzBTneDeXS5zT%2FflkakOQGMqjeVooQVOxW9d9oUCGQUCMgtMISV678GOqUBS%2F0w5ETHGjd8dC0LKA04jevbooZDaiMYknz5l6Pu3WNAkqia%2FwJwt4cobhKAEPAUrCHOpU5mPAcXQSpNcWRiaZQtsj742bBVyj5oQOs%2FszspNLjbnj8ixBib9fEBD9mZ%2FTlc13Y2nATeQEwrU%2FfHoguwNY8Z6S%2BBHZrxfbaV0yoAqqPcBDj3QT3WLWTmMU3zhu4W6P3iH72%2F%2BjufBKkHQRC8YLOY&X-Amz-Signature=ebf6bccaaf4bbbfcfbba500575d5c9e6927d2a7a97496381f4e46fa5f78bbef4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJIXMZC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDLKfBu02dmsqRMjdwKuSFcpYpe1r7A4grkAMit%2B%2FsykAiEAwZVRHGawMDwrojbfQKxyh8n%2F1SvhIKtBxYJMY%2FEU7w4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOop55wPKLpp%2F7qeyrcA%2F0Tf1AfLkrLm0S7zMS753QqjD15CHMePfTcssPH9eQymalBKEUrPKJ2z%2B2SkvAf4hEwTJdLUgbZ1peC%2FfZPrDFCUyFMFFe%2FBFyFkC0o67D8lw%2FgjhoyEORJcn8ScV7zu8TkG7xlZ%2FRIsNF9tWKWT92vIJO49s4e4qaourB8SYApkaqYDam1Jsi5rQFpxdg75MaVaWNgxI086sIzGmbOhz%2BfwBqJR8IrC0z2Nlw99qxrnYWYxFIsHQ%2FS4IpWSJDbynQZRv7utLN7FRN5SXtFR%2BtDoci2iRQ0Wtcn9WYImHJfrDlClMB2tfmELfvYHV%2B7TVl1vV9sxMjj%2FYTXQXpKxOSShCdG12MsrmMNEl0fKM0o1PIdAPm4U93yHfz2T4OE%2BKfxigX%2BbSxnBLxB3k7Ad8vGrFUnNpBSxLRXCY%2F9AbH53%2FkLYAEEPvSrVnfB3Lv7w0g9XwJcUU61FXeBaic7isQML09Bo%2Bz43BUPxFvzD9DL0g94vcMx24k57cGTxBsnTcja5iYljF6sD9w%2FAYHploHM%2F5Ll%2FPFY%2F%2Fes2V%2BVUmrBS6FreK0IdGcQVG5UN3D3CERR7OhSYLr3ZUzBTneDeXS5zT%2FflkakOQGMqjeVooQVOxW9d9oUCGQUCMgtMISV678GOqUBS%2F0w5ETHGjd8dC0LKA04jevbooZDaiMYknz5l6Pu3WNAkqia%2FwJwt4cobhKAEPAUrCHOpU5mPAcXQSpNcWRiaZQtsj742bBVyj5oQOs%2FszspNLjbnj8ixBib9fEBD9mZ%2FTlc13Y2nATeQEwrU%2FfHoguwNY8Z6S%2BBHZrxfbaV0yoAqqPcBDj3QT3WLWTmMU3zhu4W6P3iH72%2F%2BjufBKkHQRC8YLOY&X-Amz-Signature=7169fb378beda620a1180de10733dd99c48ab7b2a4d8b7e12f7c0eed3d0e5f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJIXMZC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDLKfBu02dmsqRMjdwKuSFcpYpe1r7A4grkAMit%2B%2FsykAiEAwZVRHGawMDwrojbfQKxyh8n%2F1SvhIKtBxYJMY%2FEU7w4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOop55wPKLpp%2F7qeyrcA%2F0Tf1AfLkrLm0S7zMS753QqjD15CHMePfTcssPH9eQymalBKEUrPKJ2z%2B2SkvAf4hEwTJdLUgbZ1peC%2FfZPrDFCUyFMFFe%2FBFyFkC0o67D8lw%2FgjhoyEORJcn8ScV7zu8TkG7xlZ%2FRIsNF9tWKWT92vIJO49s4e4qaourB8SYApkaqYDam1Jsi5rQFpxdg75MaVaWNgxI086sIzGmbOhz%2BfwBqJR8IrC0z2Nlw99qxrnYWYxFIsHQ%2FS4IpWSJDbynQZRv7utLN7FRN5SXtFR%2BtDoci2iRQ0Wtcn9WYImHJfrDlClMB2tfmELfvYHV%2B7TVl1vV9sxMjj%2FYTXQXpKxOSShCdG12MsrmMNEl0fKM0o1PIdAPm4U93yHfz2T4OE%2BKfxigX%2BbSxnBLxB3k7Ad8vGrFUnNpBSxLRXCY%2F9AbH53%2FkLYAEEPvSrVnfB3Lv7w0g9XwJcUU61FXeBaic7isQML09Bo%2Bz43BUPxFvzD9DL0g94vcMx24k57cGTxBsnTcja5iYljF6sD9w%2FAYHploHM%2F5Ll%2FPFY%2F%2Fes2V%2BVUmrBS6FreK0IdGcQVG5UN3D3CERR7OhSYLr3ZUzBTneDeXS5zT%2FflkakOQGMqjeVooQVOxW9d9oUCGQUCMgtMISV678GOqUBS%2F0w5ETHGjd8dC0LKA04jevbooZDaiMYknz5l6Pu3WNAkqia%2FwJwt4cobhKAEPAUrCHOpU5mPAcXQSpNcWRiaZQtsj742bBVyj5oQOs%2FszspNLjbnj8ixBib9fEBD9mZ%2FTlc13Y2nATeQEwrU%2FfHoguwNY8Z6S%2BBHZrxfbaV0yoAqqPcBDj3QT3WLWTmMU3zhu4W6P3iH72%2F%2BjufBKkHQRC8YLOY&X-Amz-Signature=f9bbc32bec9c1cef7401f4222ab0b15e3217a3eb5f823f36f6d0e79388ce138b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJIXMZC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDLKfBu02dmsqRMjdwKuSFcpYpe1r7A4grkAMit%2B%2FsykAiEAwZVRHGawMDwrojbfQKxyh8n%2F1SvhIKtBxYJMY%2FEU7w4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOop55wPKLpp%2F7qeyrcA%2F0Tf1AfLkrLm0S7zMS753QqjD15CHMePfTcssPH9eQymalBKEUrPKJ2z%2B2SkvAf4hEwTJdLUgbZ1peC%2FfZPrDFCUyFMFFe%2FBFyFkC0o67D8lw%2FgjhoyEORJcn8ScV7zu8TkG7xlZ%2FRIsNF9tWKWT92vIJO49s4e4qaourB8SYApkaqYDam1Jsi5rQFpxdg75MaVaWNgxI086sIzGmbOhz%2BfwBqJR8IrC0z2Nlw99qxrnYWYxFIsHQ%2FS4IpWSJDbynQZRv7utLN7FRN5SXtFR%2BtDoci2iRQ0Wtcn9WYImHJfrDlClMB2tfmELfvYHV%2B7TVl1vV9sxMjj%2FYTXQXpKxOSShCdG12MsrmMNEl0fKM0o1PIdAPm4U93yHfz2T4OE%2BKfxigX%2BbSxnBLxB3k7Ad8vGrFUnNpBSxLRXCY%2F9AbH53%2FkLYAEEPvSrVnfB3Lv7w0g9XwJcUU61FXeBaic7isQML09Bo%2Bz43BUPxFvzD9DL0g94vcMx24k57cGTxBsnTcja5iYljF6sD9w%2FAYHploHM%2F5Ll%2FPFY%2F%2Fes2V%2BVUmrBS6FreK0IdGcQVG5UN3D3CERR7OhSYLr3ZUzBTneDeXS5zT%2FflkakOQGMqjeVooQVOxW9d9oUCGQUCMgtMISV678GOqUBS%2F0w5ETHGjd8dC0LKA04jevbooZDaiMYknz5l6Pu3WNAkqia%2FwJwt4cobhKAEPAUrCHOpU5mPAcXQSpNcWRiaZQtsj742bBVyj5oQOs%2FszspNLjbnj8ixBib9fEBD9mZ%2FTlc13Y2nATeQEwrU%2FfHoguwNY8Z6S%2BBHZrxfbaV0yoAqqPcBDj3QT3WLWTmMU3zhu4W6P3iH72%2F%2BjufBKkHQRC8YLOY&X-Amz-Signature=10cddb38afe7ee589e2917d4585fa2bd6d2496ebd873f468c31d35f7b5f0b133&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWJIXMZC%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T210237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDLKfBu02dmsqRMjdwKuSFcpYpe1r7A4grkAMit%2B%2FsykAiEAwZVRHGawMDwrojbfQKxyh8n%2F1SvhIKtBxYJMY%2FEU7w4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOop55wPKLpp%2F7qeyrcA%2F0Tf1AfLkrLm0S7zMS753QqjD15CHMePfTcssPH9eQymalBKEUrPKJ2z%2B2SkvAf4hEwTJdLUgbZ1peC%2FfZPrDFCUyFMFFe%2FBFyFkC0o67D8lw%2FgjhoyEORJcn8ScV7zu8TkG7xlZ%2FRIsNF9tWKWT92vIJO49s4e4qaourB8SYApkaqYDam1Jsi5rQFpxdg75MaVaWNgxI086sIzGmbOhz%2BfwBqJR8IrC0z2Nlw99qxrnYWYxFIsHQ%2FS4IpWSJDbynQZRv7utLN7FRN5SXtFR%2BtDoci2iRQ0Wtcn9WYImHJfrDlClMB2tfmELfvYHV%2B7TVl1vV9sxMjj%2FYTXQXpKxOSShCdG12MsrmMNEl0fKM0o1PIdAPm4U93yHfz2T4OE%2BKfxigX%2BbSxnBLxB3k7Ad8vGrFUnNpBSxLRXCY%2F9AbH53%2FkLYAEEPvSrVnfB3Lv7w0g9XwJcUU61FXeBaic7isQML09Bo%2Bz43BUPxFvzD9DL0g94vcMx24k57cGTxBsnTcja5iYljF6sD9w%2FAYHploHM%2F5Ll%2FPFY%2F%2Fes2V%2BVUmrBS6FreK0IdGcQVG5UN3D3CERR7OhSYLr3ZUzBTneDeXS5zT%2FflkakOQGMqjeVooQVOxW9d9oUCGQUCMgtMISV678GOqUBS%2F0w5ETHGjd8dC0LKA04jevbooZDaiMYknz5l6Pu3WNAkqia%2FwJwt4cobhKAEPAUrCHOpU5mPAcXQSpNcWRiaZQtsj742bBVyj5oQOs%2FszspNLjbnj8ixBib9fEBD9mZ%2FTlc13Y2nATeQEwrU%2FfHoguwNY8Z6S%2BBHZrxfbaV0yoAqqPcBDj3QT3WLWTmMU3zhu4W6P3iH72%2F%2BjufBKkHQRC8YLOY&X-Amz-Signature=c7f42588dc4071a751d98b68a7c11fb88765f42689219972f2633de11fa05d42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
