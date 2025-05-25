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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTJ67TM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCQVxLNnSIPU836aZA%2BYke0J1NX96qOaCB2tt9JB8AidAIhAPKlelPjZsKy7N58EVGRDX7Pr2bOnLq%2B%2BudSyj42zSTJKv8DCDUQABoMNjM3NDIzMTgzODA1IgwVJKvcdd2mAhD0QJkq3APTSnikkC6Ck2nvdvTt8zW1sM7qm%2BUzmQ7YBcgX5YNWA3B%2FTiflwdXAjCyaZUF3fuInrOQydal2j3NOdc7QpjSs0c9bRtmHAx4PTDufBNzxRqu4TFBGHXqnlpzBqgP0DKePDDYvzUAw8o6zQgUnhPMzk8UJrrXV9z9rp%2F0PI2ltJ5Kid5fJHy3iQcyNxh1dnAiELmWFcEXAfln%2BXpYwm8bj3vu7uji7%2ByMWvPJW2xcvD2h1XNeX5Fmz7LkGUS9w3UEZtOCPxGTKk4vKMLM34RczusXKGMII9eBHsvoAcqaYyR5oLp2HPs7pmDfB36W9P9TiTcjkD%2B8v%2BfwJePIZhYak70uNgWch%2BEiTZp%2FlmMjhkjIEUJlpXKvgZPWiDKaoSw8u00UR5i1GeZDvhxj46HKW7FyLeDcX%2FBqdmf3tPm%2FKByT03JCCb51s%2FAWwUhzOJSE9Hp6KJ7qMah4dL9807YIL%2BTO%2FpXMrLg%2BCQioahMOErt96e4QwSGfKW7Xq3vP9vAdlXUNhPJZMZP2YjQjL1SsxjYoXEh2qxtCWa4Nn9sTDXg23TFEbj1iOI%2BnXgu3%2BemP45tNemHg%2B98eQHQr0vCBx%2BbrjQYbeHwScOmhceL3LoX9zr3pCu72sfulL5DCg9c3BBjqkAZSwhWjEYGgCazzkaQ31UONiFN0eiIhL0H5qLoJaKBBy6YVvo7YoBYPDYE1xCAxvoI%2BTkdDxJB6vnDAPOQ7ms9KcFQZOA9gexSkhV7dagnXhauS4qU86vRFQMXw%2FajbEVsN%2FnMhVvJV3zH5DD3ZsdN%2FF5rtfSO5QGd9pdCEuEFbn1Ljid24%2Fb76zTNZxxaoF1i8jO3XwcrewxKPVIuXP%2BeNMmRqa&X-Amz-Signature=439884e26349dac694d0b6f7e2378fb2cc3d2238fe668346fb9bd160cd34a32e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTJ67TM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCQVxLNnSIPU836aZA%2BYke0J1NX96qOaCB2tt9JB8AidAIhAPKlelPjZsKy7N58EVGRDX7Pr2bOnLq%2B%2BudSyj42zSTJKv8DCDUQABoMNjM3NDIzMTgzODA1IgwVJKvcdd2mAhD0QJkq3APTSnikkC6Ck2nvdvTt8zW1sM7qm%2BUzmQ7YBcgX5YNWA3B%2FTiflwdXAjCyaZUF3fuInrOQydal2j3NOdc7QpjSs0c9bRtmHAx4PTDufBNzxRqu4TFBGHXqnlpzBqgP0DKePDDYvzUAw8o6zQgUnhPMzk8UJrrXV9z9rp%2F0PI2ltJ5Kid5fJHy3iQcyNxh1dnAiELmWFcEXAfln%2BXpYwm8bj3vu7uji7%2ByMWvPJW2xcvD2h1XNeX5Fmz7LkGUS9w3UEZtOCPxGTKk4vKMLM34RczusXKGMII9eBHsvoAcqaYyR5oLp2HPs7pmDfB36W9P9TiTcjkD%2B8v%2BfwJePIZhYak70uNgWch%2BEiTZp%2FlmMjhkjIEUJlpXKvgZPWiDKaoSw8u00UR5i1GeZDvhxj46HKW7FyLeDcX%2FBqdmf3tPm%2FKByT03JCCb51s%2FAWwUhzOJSE9Hp6KJ7qMah4dL9807YIL%2BTO%2FpXMrLg%2BCQioahMOErt96e4QwSGfKW7Xq3vP9vAdlXUNhPJZMZP2YjQjL1SsxjYoXEh2qxtCWa4Nn9sTDXg23TFEbj1iOI%2BnXgu3%2BemP45tNemHg%2B98eQHQr0vCBx%2BbrjQYbeHwScOmhceL3LoX9zr3pCu72sfulL5DCg9c3BBjqkAZSwhWjEYGgCazzkaQ31UONiFN0eiIhL0H5qLoJaKBBy6YVvo7YoBYPDYE1xCAxvoI%2BTkdDxJB6vnDAPOQ7ms9KcFQZOA9gexSkhV7dagnXhauS4qU86vRFQMXw%2FajbEVsN%2FnMhVvJV3zH5DD3ZsdN%2FF5rtfSO5QGd9pdCEuEFbn1Ljid24%2Fb76zTNZxxaoF1i8jO3XwcrewxKPVIuXP%2BeNMmRqa&X-Amz-Signature=1ba8d8a9827b7b8064c1a1b474ce83a5a4d40bfc70f6c800a8737448efe1d6ab&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTJ67TM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCQVxLNnSIPU836aZA%2BYke0J1NX96qOaCB2tt9JB8AidAIhAPKlelPjZsKy7N58EVGRDX7Pr2bOnLq%2B%2BudSyj42zSTJKv8DCDUQABoMNjM3NDIzMTgzODA1IgwVJKvcdd2mAhD0QJkq3APTSnikkC6Ck2nvdvTt8zW1sM7qm%2BUzmQ7YBcgX5YNWA3B%2FTiflwdXAjCyaZUF3fuInrOQydal2j3NOdc7QpjSs0c9bRtmHAx4PTDufBNzxRqu4TFBGHXqnlpzBqgP0DKePDDYvzUAw8o6zQgUnhPMzk8UJrrXV9z9rp%2F0PI2ltJ5Kid5fJHy3iQcyNxh1dnAiELmWFcEXAfln%2BXpYwm8bj3vu7uji7%2ByMWvPJW2xcvD2h1XNeX5Fmz7LkGUS9w3UEZtOCPxGTKk4vKMLM34RczusXKGMII9eBHsvoAcqaYyR5oLp2HPs7pmDfB36W9P9TiTcjkD%2B8v%2BfwJePIZhYak70uNgWch%2BEiTZp%2FlmMjhkjIEUJlpXKvgZPWiDKaoSw8u00UR5i1GeZDvhxj46HKW7FyLeDcX%2FBqdmf3tPm%2FKByT03JCCb51s%2FAWwUhzOJSE9Hp6KJ7qMah4dL9807YIL%2BTO%2FpXMrLg%2BCQioahMOErt96e4QwSGfKW7Xq3vP9vAdlXUNhPJZMZP2YjQjL1SsxjYoXEh2qxtCWa4Nn9sTDXg23TFEbj1iOI%2BnXgu3%2BemP45tNemHg%2B98eQHQr0vCBx%2BbrjQYbeHwScOmhceL3LoX9zr3pCu72sfulL5DCg9c3BBjqkAZSwhWjEYGgCazzkaQ31UONiFN0eiIhL0H5qLoJaKBBy6YVvo7YoBYPDYE1xCAxvoI%2BTkdDxJB6vnDAPOQ7ms9KcFQZOA9gexSkhV7dagnXhauS4qU86vRFQMXw%2FajbEVsN%2FnMhVvJV3zH5DD3ZsdN%2FF5rtfSO5QGd9pdCEuEFbn1Ljid24%2Fb76zTNZxxaoF1i8jO3XwcrewxKPVIuXP%2BeNMmRqa&X-Amz-Signature=c9bb0293c3ff2356bdcbb62385183b5f979cea8d5976f4a73635aaab08767510&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTJ67TM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCQVxLNnSIPU836aZA%2BYke0J1NX96qOaCB2tt9JB8AidAIhAPKlelPjZsKy7N58EVGRDX7Pr2bOnLq%2B%2BudSyj42zSTJKv8DCDUQABoMNjM3NDIzMTgzODA1IgwVJKvcdd2mAhD0QJkq3APTSnikkC6Ck2nvdvTt8zW1sM7qm%2BUzmQ7YBcgX5YNWA3B%2FTiflwdXAjCyaZUF3fuInrOQydal2j3NOdc7QpjSs0c9bRtmHAx4PTDufBNzxRqu4TFBGHXqnlpzBqgP0DKePDDYvzUAw8o6zQgUnhPMzk8UJrrXV9z9rp%2F0PI2ltJ5Kid5fJHy3iQcyNxh1dnAiELmWFcEXAfln%2BXpYwm8bj3vu7uji7%2ByMWvPJW2xcvD2h1XNeX5Fmz7LkGUS9w3UEZtOCPxGTKk4vKMLM34RczusXKGMII9eBHsvoAcqaYyR5oLp2HPs7pmDfB36W9P9TiTcjkD%2B8v%2BfwJePIZhYak70uNgWch%2BEiTZp%2FlmMjhkjIEUJlpXKvgZPWiDKaoSw8u00UR5i1GeZDvhxj46HKW7FyLeDcX%2FBqdmf3tPm%2FKByT03JCCb51s%2FAWwUhzOJSE9Hp6KJ7qMah4dL9807YIL%2BTO%2FpXMrLg%2BCQioahMOErt96e4QwSGfKW7Xq3vP9vAdlXUNhPJZMZP2YjQjL1SsxjYoXEh2qxtCWa4Nn9sTDXg23TFEbj1iOI%2BnXgu3%2BemP45tNemHg%2B98eQHQr0vCBx%2BbrjQYbeHwScOmhceL3LoX9zr3pCu72sfulL5DCg9c3BBjqkAZSwhWjEYGgCazzkaQ31UONiFN0eiIhL0H5qLoJaKBBy6YVvo7YoBYPDYE1xCAxvoI%2BTkdDxJB6vnDAPOQ7ms9KcFQZOA9gexSkhV7dagnXhauS4qU86vRFQMXw%2FajbEVsN%2FnMhVvJV3zH5DD3ZsdN%2FF5rtfSO5QGd9pdCEuEFbn1Ljid24%2Fb76zTNZxxaoF1i8jO3XwcrewxKPVIuXP%2BeNMmRqa&X-Amz-Signature=b7fa485906a43d044a6e93ec7b91f5747b007e6625487b666c5fd8bf29df6d15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTJ67TM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCQVxLNnSIPU836aZA%2BYke0J1NX96qOaCB2tt9JB8AidAIhAPKlelPjZsKy7N58EVGRDX7Pr2bOnLq%2B%2BudSyj42zSTJKv8DCDUQABoMNjM3NDIzMTgzODA1IgwVJKvcdd2mAhD0QJkq3APTSnikkC6Ck2nvdvTt8zW1sM7qm%2BUzmQ7YBcgX5YNWA3B%2FTiflwdXAjCyaZUF3fuInrOQydal2j3NOdc7QpjSs0c9bRtmHAx4PTDufBNzxRqu4TFBGHXqnlpzBqgP0DKePDDYvzUAw8o6zQgUnhPMzk8UJrrXV9z9rp%2F0PI2ltJ5Kid5fJHy3iQcyNxh1dnAiELmWFcEXAfln%2BXpYwm8bj3vu7uji7%2ByMWvPJW2xcvD2h1XNeX5Fmz7LkGUS9w3UEZtOCPxGTKk4vKMLM34RczusXKGMII9eBHsvoAcqaYyR5oLp2HPs7pmDfB36W9P9TiTcjkD%2B8v%2BfwJePIZhYak70uNgWch%2BEiTZp%2FlmMjhkjIEUJlpXKvgZPWiDKaoSw8u00UR5i1GeZDvhxj46HKW7FyLeDcX%2FBqdmf3tPm%2FKByT03JCCb51s%2FAWwUhzOJSE9Hp6KJ7qMah4dL9807YIL%2BTO%2FpXMrLg%2BCQioahMOErt96e4QwSGfKW7Xq3vP9vAdlXUNhPJZMZP2YjQjL1SsxjYoXEh2qxtCWa4Nn9sTDXg23TFEbj1iOI%2BnXgu3%2BemP45tNemHg%2B98eQHQr0vCBx%2BbrjQYbeHwScOmhceL3LoX9zr3pCu72sfulL5DCg9c3BBjqkAZSwhWjEYGgCazzkaQ31UONiFN0eiIhL0H5qLoJaKBBy6YVvo7YoBYPDYE1xCAxvoI%2BTkdDxJB6vnDAPOQ7ms9KcFQZOA9gexSkhV7dagnXhauS4qU86vRFQMXw%2FajbEVsN%2FnMhVvJV3zH5DD3ZsdN%2FF5rtfSO5QGd9pdCEuEFbn1Ljid24%2Fb76zTNZxxaoF1i8jO3XwcrewxKPVIuXP%2BeNMmRqa&X-Amz-Signature=8a77884592833d6aa826be795db013d06248f4a998469593685fe96ec8aaa57b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTJ67TM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCQVxLNnSIPU836aZA%2BYke0J1NX96qOaCB2tt9JB8AidAIhAPKlelPjZsKy7N58EVGRDX7Pr2bOnLq%2B%2BudSyj42zSTJKv8DCDUQABoMNjM3NDIzMTgzODA1IgwVJKvcdd2mAhD0QJkq3APTSnikkC6Ck2nvdvTt8zW1sM7qm%2BUzmQ7YBcgX5YNWA3B%2FTiflwdXAjCyaZUF3fuInrOQydal2j3NOdc7QpjSs0c9bRtmHAx4PTDufBNzxRqu4TFBGHXqnlpzBqgP0DKePDDYvzUAw8o6zQgUnhPMzk8UJrrXV9z9rp%2F0PI2ltJ5Kid5fJHy3iQcyNxh1dnAiELmWFcEXAfln%2BXpYwm8bj3vu7uji7%2ByMWvPJW2xcvD2h1XNeX5Fmz7LkGUS9w3UEZtOCPxGTKk4vKMLM34RczusXKGMII9eBHsvoAcqaYyR5oLp2HPs7pmDfB36W9P9TiTcjkD%2B8v%2BfwJePIZhYak70uNgWch%2BEiTZp%2FlmMjhkjIEUJlpXKvgZPWiDKaoSw8u00UR5i1GeZDvhxj46HKW7FyLeDcX%2FBqdmf3tPm%2FKByT03JCCb51s%2FAWwUhzOJSE9Hp6KJ7qMah4dL9807YIL%2BTO%2FpXMrLg%2BCQioahMOErt96e4QwSGfKW7Xq3vP9vAdlXUNhPJZMZP2YjQjL1SsxjYoXEh2qxtCWa4Nn9sTDXg23TFEbj1iOI%2BnXgu3%2BemP45tNemHg%2B98eQHQr0vCBx%2BbrjQYbeHwScOmhceL3LoX9zr3pCu72sfulL5DCg9c3BBjqkAZSwhWjEYGgCazzkaQ31UONiFN0eiIhL0H5qLoJaKBBy6YVvo7YoBYPDYE1xCAxvoI%2BTkdDxJB6vnDAPOQ7ms9KcFQZOA9gexSkhV7dagnXhauS4qU86vRFQMXw%2FajbEVsN%2FnMhVvJV3zH5DD3ZsdN%2FF5rtfSO5QGd9pdCEuEFbn1Ljid24%2Fb76zTNZxxaoF1i8jO3XwcrewxKPVIuXP%2BeNMmRqa&X-Amz-Signature=04d78dde1a0e87837bdfeaeabcf10c9c85fdecf97ad43cc6fbb26fb4de0b4e78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTJ67TM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCQVxLNnSIPU836aZA%2BYke0J1NX96qOaCB2tt9JB8AidAIhAPKlelPjZsKy7N58EVGRDX7Pr2bOnLq%2B%2BudSyj42zSTJKv8DCDUQABoMNjM3NDIzMTgzODA1IgwVJKvcdd2mAhD0QJkq3APTSnikkC6Ck2nvdvTt8zW1sM7qm%2BUzmQ7YBcgX5YNWA3B%2FTiflwdXAjCyaZUF3fuInrOQydal2j3NOdc7QpjSs0c9bRtmHAx4PTDufBNzxRqu4TFBGHXqnlpzBqgP0DKePDDYvzUAw8o6zQgUnhPMzk8UJrrXV9z9rp%2F0PI2ltJ5Kid5fJHy3iQcyNxh1dnAiELmWFcEXAfln%2BXpYwm8bj3vu7uji7%2ByMWvPJW2xcvD2h1XNeX5Fmz7LkGUS9w3UEZtOCPxGTKk4vKMLM34RczusXKGMII9eBHsvoAcqaYyR5oLp2HPs7pmDfB36W9P9TiTcjkD%2B8v%2BfwJePIZhYak70uNgWch%2BEiTZp%2FlmMjhkjIEUJlpXKvgZPWiDKaoSw8u00UR5i1GeZDvhxj46HKW7FyLeDcX%2FBqdmf3tPm%2FKByT03JCCb51s%2FAWwUhzOJSE9Hp6KJ7qMah4dL9807YIL%2BTO%2FpXMrLg%2BCQioahMOErt96e4QwSGfKW7Xq3vP9vAdlXUNhPJZMZP2YjQjL1SsxjYoXEh2qxtCWa4Nn9sTDXg23TFEbj1iOI%2BnXgu3%2BemP45tNemHg%2B98eQHQr0vCBx%2BbrjQYbeHwScOmhceL3LoX9zr3pCu72sfulL5DCg9c3BBjqkAZSwhWjEYGgCazzkaQ31UONiFN0eiIhL0H5qLoJaKBBy6YVvo7YoBYPDYE1xCAxvoI%2BTkdDxJB6vnDAPOQ7ms9KcFQZOA9gexSkhV7dagnXhauS4qU86vRFQMXw%2FajbEVsN%2FnMhVvJV3zH5DD3ZsdN%2FF5rtfSO5QGd9pdCEuEFbn1Ljid24%2Fb76zTNZxxaoF1i8jO3XwcrewxKPVIuXP%2BeNMmRqa&X-Amz-Signature=68d4ef8ac7059c69d8c12bdd1b097d9b309991febbbb9e3e9a04874711b3f1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTJ67TM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T220754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQCQVxLNnSIPU836aZA%2BYke0J1NX96qOaCB2tt9JB8AidAIhAPKlelPjZsKy7N58EVGRDX7Pr2bOnLq%2B%2BudSyj42zSTJKv8DCDUQABoMNjM3NDIzMTgzODA1IgwVJKvcdd2mAhD0QJkq3APTSnikkC6Ck2nvdvTt8zW1sM7qm%2BUzmQ7YBcgX5YNWA3B%2FTiflwdXAjCyaZUF3fuInrOQydal2j3NOdc7QpjSs0c9bRtmHAx4PTDufBNzxRqu4TFBGHXqnlpzBqgP0DKePDDYvzUAw8o6zQgUnhPMzk8UJrrXV9z9rp%2F0PI2ltJ5Kid5fJHy3iQcyNxh1dnAiELmWFcEXAfln%2BXpYwm8bj3vu7uji7%2ByMWvPJW2xcvD2h1XNeX5Fmz7LkGUS9w3UEZtOCPxGTKk4vKMLM34RczusXKGMII9eBHsvoAcqaYyR5oLp2HPs7pmDfB36W9P9TiTcjkD%2B8v%2BfwJePIZhYak70uNgWch%2BEiTZp%2FlmMjhkjIEUJlpXKvgZPWiDKaoSw8u00UR5i1GeZDvhxj46HKW7FyLeDcX%2FBqdmf3tPm%2FKByT03JCCb51s%2FAWwUhzOJSE9Hp6KJ7qMah4dL9807YIL%2BTO%2FpXMrLg%2BCQioahMOErt96e4QwSGfKW7Xq3vP9vAdlXUNhPJZMZP2YjQjL1SsxjYoXEh2qxtCWa4Nn9sTDXg23TFEbj1iOI%2BnXgu3%2BemP45tNemHg%2B98eQHQr0vCBx%2BbrjQYbeHwScOmhceL3LoX9zr3pCu72sfulL5DCg9c3BBjqkAZSwhWjEYGgCazzkaQ31UONiFN0eiIhL0H5qLoJaKBBy6YVvo7YoBYPDYE1xCAxvoI%2BTkdDxJB6vnDAPOQ7ms9KcFQZOA9gexSkhV7dagnXhauS4qU86vRFQMXw%2FajbEVsN%2FnMhVvJV3zH5DD3ZsdN%2FF5rtfSO5QGd9pdCEuEFbn1Ljid24%2Fb76zTNZxxaoF1i8jO3XwcrewxKPVIuXP%2BeNMmRqa&X-Amz-Signature=e0c661f6b491c0a2adcb1a3bd9e5c530a7302290ef0535f6302e08745ac2e9f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
