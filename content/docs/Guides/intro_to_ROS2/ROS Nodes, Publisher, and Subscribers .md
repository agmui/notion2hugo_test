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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK4S5BC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCID38%2BkJ89N6Fd3KrTTu1Qf9xvpNOCDyUkz97bFkfN7%2FiAiEA%2BFxu6onmvsk44moN%2BCDzkFJ1IKwxzc8nGruRGvEUclsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO%2FKAESogQJ%2B8bfP9SrcA54g9gLJFnTxEkngColx7QvXzm3Y%2BX3n6DTXazW0nhNrAnfOCu%2B494Nfo9nRXj1Au3QqWQRWi64xbRldd161P0tgvWwF7%2Fri4e5GDIpaXd3b29Xr2UeL4DVhqRXm4AperH13Zz7Y6GLWKsxCeE0pE2%2B6U7ftDrZnrg9z52TMcRmeHrRmG4suuCRbTHj2feOwJDHgm7uO7lHmmhsZ9xPgYchFsUKf9xBfoa1yTGB1PwQAH0ic2SVi68j33%2FqdNAucs%2FQ9b6JBe4adSPM3P5YLPaanq2DTh1ZCvoul2mmGcquIbhJpjOoggExek%2BthILy%2BLis3eUphFVFfuMRtYCFygJImwA95DTojGXcQByyKbJXy34BQtWbSEp0yxZhsB8gqTosoQCsmfb7f1yOE0iXiS8iFDZtZzxXj%2FZWEesvS8PLFYvyiX2xw%2B7yjEMNvgLrg0d5DLOHkO39G8%2FbQGeyXajZkSiSSolbZKJyq2x%2Fe6YjB%2FUvJhchsTXBSpuT9vFqOgoj9cGmGJduEihgr3zB6XWCxE39rg1Eke9rWi15nm5nzLz8YjOc6oD6sEsNDShKSEk7d%2B5IixfKFGf0VVOYHtZdQIKjO5DCsLsdzBquMYIl50GIvAuwMJ1fot7IUMKaOnsMGOqUBdt67f1SLPCONCzzl9hSy7LZ0M5UBi2wZVGhL8t1YtJJJiO50hVEd4dXTsbWAE9XBtlGyFsTNHc01orGqrz4D2eYYkZIeACM4BiOFvHKHWk2NEHl%2BsaWyfoQtTtuQ3pUk%2FrzcusfmMpPF%2BOY3KLXtQNLD4HGGskIQdShsKd7H0x4qwGC5J16LBAnRgNJL7BfDwHdaoZ3CwP2eCG9%2F8g%2F7zqN9bOzC&X-Amz-Signature=b034017c2a26b283f3afd93ce5888b9c1109b6d8247105a23af0e0dcb0329908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK4S5BC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCID38%2BkJ89N6Fd3KrTTu1Qf9xvpNOCDyUkz97bFkfN7%2FiAiEA%2BFxu6onmvsk44moN%2BCDzkFJ1IKwxzc8nGruRGvEUclsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO%2FKAESogQJ%2B8bfP9SrcA54g9gLJFnTxEkngColx7QvXzm3Y%2BX3n6DTXazW0nhNrAnfOCu%2B494Nfo9nRXj1Au3QqWQRWi64xbRldd161P0tgvWwF7%2Fri4e5GDIpaXd3b29Xr2UeL4DVhqRXm4AperH13Zz7Y6GLWKsxCeE0pE2%2B6U7ftDrZnrg9z52TMcRmeHrRmG4suuCRbTHj2feOwJDHgm7uO7lHmmhsZ9xPgYchFsUKf9xBfoa1yTGB1PwQAH0ic2SVi68j33%2FqdNAucs%2FQ9b6JBe4adSPM3P5YLPaanq2DTh1ZCvoul2mmGcquIbhJpjOoggExek%2BthILy%2BLis3eUphFVFfuMRtYCFygJImwA95DTojGXcQByyKbJXy34BQtWbSEp0yxZhsB8gqTosoQCsmfb7f1yOE0iXiS8iFDZtZzxXj%2FZWEesvS8PLFYvyiX2xw%2B7yjEMNvgLrg0d5DLOHkO39G8%2FbQGeyXajZkSiSSolbZKJyq2x%2Fe6YjB%2FUvJhchsTXBSpuT9vFqOgoj9cGmGJduEihgr3zB6XWCxE39rg1Eke9rWi15nm5nzLz8YjOc6oD6sEsNDShKSEk7d%2B5IixfKFGf0VVOYHtZdQIKjO5DCsLsdzBquMYIl50GIvAuwMJ1fot7IUMKaOnsMGOqUBdt67f1SLPCONCzzl9hSy7LZ0M5UBi2wZVGhL8t1YtJJJiO50hVEd4dXTsbWAE9XBtlGyFsTNHc01orGqrz4D2eYYkZIeACM4BiOFvHKHWk2NEHl%2BsaWyfoQtTtuQ3pUk%2FrzcusfmMpPF%2BOY3KLXtQNLD4HGGskIQdShsKd7H0x4qwGC5J16LBAnRgNJL7BfDwHdaoZ3CwP2eCG9%2F8g%2F7zqN9bOzC&X-Amz-Signature=fbcb02c1e8d3c900c4a632a4d5cc7bbe8a50cddfcf0270802e5ad1030cb18a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK4S5BC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCID38%2BkJ89N6Fd3KrTTu1Qf9xvpNOCDyUkz97bFkfN7%2FiAiEA%2BFxu6onmvsk44moN%2BCDzkFJ1IKwxzc8nGruRGvEUclsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO%2FKAESogQJ%2B8bfP9SrcA54g9gLJFnTxEkngColx7QvXzm3Y%2BX3n6DTXazW0nhNrAnfOCu%2B494Nfo9nRXj1Au3QqWQRWi64xbRldd161P0tgvWwF7%2Fri4e5GDIpaXd3b29Xr2UeL4DVhqRXm4AperH13Zz7Y6GLWKsxCeE0pE2%2B6U7ftDrZnrg9z52TMcRmeHrRmG4suuCRbTHj2feOwJDHgm7uO7lHmmhsZ9xPgYchFsUKf9xBfoa1yTGB1PwQAH0ic2SVi68j33%2FqdNAucs%2FQ9b6JBe4adSPM3P5YLPaanq2DTh1ZCvoul2mmGcquIbhJpjOoggExek%2BthILy%2BLis3eUphFVFfuMRtYCFygJImwA95DTojGXcQByyKbJXy34BQtWbSEp0yxZhsB8gqTosoQCsmfb7f1yOE0iXiS8iFDZtZzxXj%2FZWEesvS8PLFYvyiX2xw%2B7yjEMNvgLrg0d5DLOHkO39G8%2FbQGeyXajZkSiSSolbZKJyq2x%2Fe6YjB%2FUvJhchsTXBSpuT9vFqOgoj9cGmGJduEihgr3zB6XWCxE39rg1Eke9rWi15nm5nzLz8YjOc6oD6sEsNDShKSEk7d%2B5IixfKFGf0VVOYHtZdQIKjO5DCsLsdzBquMYIl50GIvAuwMJ1fot7IUMKaOnsMGOqUBdt67f1SLPCONCzzl9hSy7LZ0M5UBi2wZVGhL8t1YtJJJiO50hVEd4dXTsbWAE9XBtlGyFsTNHc01orGqrz4D2eYYkZIeACM4BiOFvHKHWk2NEHl%2BsaWyfoQtTtuQ3pUk%2FrzcusfmMpPF%2BOY3KLXtQNLD4HGGskIQdShsKd7H0x4qwGC5J16LBAnRgNJL7BfDwHdaoZ3CwP2eCG9%2F8g%2F7zqN9bOzC&X-Amz-Signature=e4ceccf4045537e6597d24eb40c78a00c3cdf68727c9721934cf10f63b938b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK4S5BC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCID38%2BkJ89N6Fd3KrTTu1Qf9xvpNOCDyUkz97bFkfN7%2FiAiEA%2BFxu6onmvsk44moN%2BCDzkFJ1IKwxzc8nGruRGvEUclsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO%2FKAESogQJ%2B8bfP9SrcA54g9gLJFnTxEkngColx7QvXzm3Y%2BX3n6DTXazW0nhNrAnfOCu%2B494Nfo9nRXj1Au3QqWQRWi64xbRldd161P0tgvWwF7%2Fri4e5GDIpaXd3b29Xr2UeL4DVhqRXm4AperH13Zz7Y6GLWKsxCeE0pE2%2B6U7ftDrZnrg9z52TMcRmeHrRmG4suuCRbTHj2feOwJDHgm7uO7lHmmhsZ9xPgYchFsUKf9xBfoa1yTGB1PwQAH0ic2SVi68j33%2FqdNAucs%2FQ9b6JBe4adSPM3P5YLPaanq2DTh1ZCvoul2mmGcquIbhJpjOoggExek%2BthILy%2BLis3eUphFVFfuMRtYCFygJImwA95DTojGXcQByyKbJXy34BQtWbSEp0yxZhsB8gqTosoQCsmfb7f1yOE0iXiS8iFDZtZzxXj%2FZWEesvS8PLFYvyiX2xw%2B7yjEMNvgLrg0d5DLOHkO39G8%2FbQGeyXajZkSiSSolbZKJyq2x%2Fe6YjB%2FUvJhchsTXBSpuT9vFqOgoj9cGmGJduEihgr3zB6XWCxE39rg1Eke9rWi15nm5nzLz8YjOc6oD6sEsNDShKSEk7d%2B5IixfKFGf0VVOYHtZdQIKjO5DCsLsdzBquMYIl50GIvAuwMJ1fot7IUMKaOnsMGOqUBdt67f1SLPCONCzzl9hSy7LZ0M5UBi2wZVGhL8t1YtJJJiO50hVEd4dXTsbWAE9XBtlGyFsTNHc01orGqrz4D2eYYkZIeACM4BiOFvHKHWk2NEHl%2BsaWyfoQtTtuQ3pUk%2FrzcusfmMpPF%2BOY3KLXtQNLD4HGGskIQdShsKd7H0x4qwGC5J16LBAnRgNJL7BfDwHdaoZ3CwP2eCG9%2F8g%2F7zqN9bOzC&X-Amz-Signature=035893df5b76c84f91eb376682fd9edbcd846a37151190833f26a5f64bc34d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK4S5BC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCID38%2BkJ89N6Fd3KrTTu1Qf9xvpNOCDyUkz97bFkfN7%2FiAiEA%2BFxu6onmvsk44moN%2BCDzkFJ1IKwxzc8nGruRGvEUclsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO%2FKAESogQJ%2B8bfP9SrcA54g9gLJFnTxEkngColx7QvXzm3Y%2BX3n6DTXazW0nhNrAnfOCu%2B494Nfo9nRXj1Au3QqWQRWi64xbRldd161P0tgvWwF7%2Fri4e5GDIpaXd3b29Xr2UeL4DVhqRXm4AperH13Zz7Y6GLWKsxCeE0pE2%2B6U7ftDrZnrg9z52TMcRmeHrRmG4suuCRbTHj2feOwJDHgm7uO7lHmmhsZ9xPgYchFsUKf9xBfoa1yTGB1PwQAH0ic2SVi68j33%2FqdNAucs%2FQ9b6JBe4adSPM3P5YLPaanq2DTh1ZCvoul2mmGcquIbhJpjOoggExek%2BthILy%2BLis3eUphFVFfuMRtYCFygJImwA95DTojGXcQByyKbJXy34BQtWbSEp0yxZhsB8gqTosoQCsmfb7f1yOE0iXiS8iFDZtZzxXj%2FZWEesvS8PLFYvyiX2xw%2B7yjEMNvgLrg0d5DLOHkO39G8%2FbQGeyXajZkSiSSolbZKJyq2x%2Fe6YjB%2FUvJhchsTXBSpuT9vFqOgoj9cGmGJduEihgr3zB6XWCxE39rg1Eke9rWi15nm5nzLz8YjOc6oD6sEsNDShKSEk7d%2B5IixfKFGf0VVOYHtZdQIKjO5DCsLsdzBquMYIl50GIvAuwMJ1fot7IUMKaOnsMGOqUBdt67f1SLPCONCzzl9hSy7LZ0M5UBi2wZVGhL8t1YtJJJiO50hVEd4dXTsbWAE9XBtlGyFsTNHc01orGqrz4D2eYYkZIeACM4BiOFvHKHWk2NEHl%2BsaWyfoQtTtuQ3pUk%2FrzcusfmMpPF%2BOY3KLXtQNLD4HGGskIQdShsKd7H0x4qwGC5J16LBAnRgNJL7BfDwHdaoZ3CwP2eCG9%2F8g%2F7zqN9bOzC&X-Amz-Signature=a289e3c16486573bb947d46687ec5c5f340deb450a8ed0ed7b5c352938fac5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK4S5BC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCID38%2BkJ89N6Fd3KrTTu1Qf9xvpNOCDyUkz97bFkfN7%2FiAiEA%2BFxu6onmvsk44moN%2BCDzkFJ1IKwxzc8nGruRGvEUclsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO%2FKAESogQJ%2B8bfP9SrcA54g9gLJFnTxEkngColx7QvXzm3Y%2BX3n6DTXazW0nhNrAnfOCu%2B494Nfo9nRXj1Au3QqWQRWi64xbRldd161P0tgvWwF7%2Fri4e5GDIpaXd3b29Xr2UeL4DVhqRXm4AperH13Zz7Y6GLWKsxCeE0pE2%2B6U7ftDrZnrg9z52TMcRmeHrRmG4suuCRbTHj2feOwJDHgm7uO7lHmmhsZ9xPgYchFsUKf9xBfoa1yTGB1PwQAH0ic2SVi68j33%2FqdNAucs%2FQ9b6JBe4adSPM3P5YLPaanq2DTh1ZCvoul2mmGcquIbhJpjOoggExek%2BthILy%2BLis3eUphFVFfuMRtYCFygJImwA95DTojGXcQByyKbJXy34BQtWbSEp0yxZhsB8gqTosoQCsmfb7f1yOE0iXiS8iFDZtZzxXj%2FZWEesvS8PLFYvyiX2xw%2B7yjEMNvgLrg0d5DLOHkO39G8%2FbQGeyXajZkSiSSolbZKJyq2x%2Fe6YjB%2FUvJhchsTXBSpuT9vFqOgoj9cGmGJduEihgr3zB6XWCxE39rg1Eke9rWi15nm5nzLz8YjOc6oD6sEsNDShKSEk7d%2B5IixfKFGf0VVOYHtZdQIKjO5DCsLsdzBquMYIl50GIvAuwMJ1fot7IUMKaOnsMGOqUBdt67f1SLPCONCzzl9hSy7LZ0M5UBi2wZVGhL8t1YtJJJiO50hVEd4dXTsbWAE9XBtlGyFsTNHc01orGqrz4D2eYYkZIeACM4BiOFvHKHWk2NEHl%2BsaWyfoQtTtuQ3pUk%2FrzcusfmMpPF%2BOY3KLXtQNLD4HGGskIQdShsKd7H0x4qwGC5J16LBAnRgNJL7BfDwHdaoZ3CwP2eCG9%2F8g%2F7zqN9bOzC&X-Amz-Signature=124f58bf20ada088f1021cbcf5bdf5770cdfa0f3bf70b40fb9029ca144dd177c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK4S5BC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCID38%2BkJ89N6Fd3KrTTu1Qf9xvpNOCDyUkz97bFkfN7%2FiAiEA%2BFxu6onmvsk44moN%2BCDzkFJ1IKwxzc8nGruRGvEUclsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO%2FKAESogQJ%2B8bfP9SrcA54g9gLJFnTxEkngColx7QvXzm3Y%2BX3n6DTXazW0nhNrAnfOCu%2B494Nfo9nRXj1Au3QqWQRWi64xbRldd161P0tgvWwF7%2Fri4e5GDIpaXd3b29Xr2UeL4DVhqRXm4AperH13Zz7Y6GLWKsxCeE0pE2%2B6U7ftDrZnrg9z52TMcRmeHrRmG4suuCRbTHj2feOwJDHgm7uO7lHmmhsZ9xPgYchFsUKf9xBfoa1yTGB1PwQAH0ic2SVi68j33%2FqdNAucs%2FQ9b6JBe4adSPM3P5YLPaanq2DTh1ZCvoul2mmGcquIbhJpjOoggExek%2BthILy%2BLis3eUphFVFfuMRtYCFygJImwA95DTojGXcQByyKbJXy34BQtWbSEp0yxZhsB8gqTosoQCsmfb7f1yOE0iXiS8iFDZtZzxXj%2FZWEesvS8PLFYvyiX2xw%2B7yjEMNvgLrg0d5DLOHkO39G8%2FbQGeyXajZkSiSSolbZKJyq2x%2Fe6YjB%2FUvJhchsTXBSpuT9vFqOgoj9cGmGJduEihgr3zB6XWCxE39rg1Eke9rWi15nm5nzLz8YjOc6oD6sEsNDShKSEk7d%2B5IixfKFGf0VVOYHtZdQIKjO5DCsLsdzBquMYIl50GIvAuwMJ1fot7IUMKaOnsMGOqUBdt67f1SLPCONCzzl9hSy7LZ0M5UBi2wZVGhL8t1YtJJJiO50hVEd4dXTsbWAE9XBtlGyFsTNHc01orGqrz4D2eYYkZIeACM4BiOFvHKHWk2NEHl%2BsaWyfoQtTtuQ3pUk%2FrzcusfmMpPF%2BOY3KLXtQNLD4HGGskIQdShsKd7H0x4qwGC5J16LBAnRgNJL7BfDwHdaoZ3CwP2eCG9%2F8g%2F7zqN9bOzC&X-Amz-Signature=508d819051f3600bc5365609c746f2a18bf05f0daf568583e42031c909c741aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FK4S5BC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCID38%2BkJ89N6Fd3KrTTu1Qf9xvpNOCDyUkz97bFkfN7%2FiAiEA%2BFxu6onmvsk44moN%2BCDzkFJ1IKwxzc8nGruRGvEUclsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDO%2FKAESogQJ%2B8bfP9SrcA54g9gLJFnTxEkngColx7QvXzm3Y%2BX3n6DTXazW0nhNrAnfOCu%2B494Nfo9nRXj1Au3QqWQRWi64xbRldd161P0tgvWwF7%2Fri4e5GDIpaXd3b29Xr2UeL4DVhqRXm4AperH13Zz7Y6GLWKsxCeE0pE2%2B6U7ftDrZnrg9z52TMcRmeHrRmG4suuCRbTHj2feOwJDHgm7uO7lHmmhsZ9xPgYchFsUKf9xBfoa1yTGB1PwQAH0ic2SVi68j33%2FqdNAucs%2FQ9b6JBe4adSPM3P5YLPaanq2DTh1ZCvoul2mmGcquIbhJpjOoggExek%2BthILy%2BLis3eUphFVFfuMRtYCFygJImwA95DTojGXcQByyKbJXy34BQtWbSEp0yxZhsB8gqTosoQCsmfb7f1yOE0iXiS8iFDZtZzxXj%2FZWEesvS8PLFYvyiX2xw%2B7yjEMNvgLrg0d5DLOHkO39G8%2FbQGeyXajZkSiSSolbZKJyq2x%2Fe6YjB%2FUvJhchsTXBSpuT9vFqOgoj9cGmGJduEihgr3zB6XWCxE39rg1Eke9rWi15nm5nzLz8YjOc6oD6sEsNDShKSEk7d%2B5IixfKFGf0VVOYHtZdQIKjO5DCsLsdzBquMYIl50GIvAuwMJ1fot7IUMKaOnsMGOqUBdt67f1SLPCONCzzl9hSy7LZ0M5UBi2wZVGhL8t1YtJJJiO50hVEd4dXTsbWAE9XBtlGyFsTNHc01orGqrz4D2eYYkZIeACM4BiOFvHKHWk2NEHl%2BsaWyfoQtTtuQ3pUk%2FrzcusfmMpPF%2BOY3KLXtQNLD4HGGskIQdShsKd7H0x4qwGC5J16LBAnRgNJL7BfDwHdaoZ3CwP2eCG9%2F8g%2F7zqN9bOzC&X-Amz-Signature=5696745d15fbe73e70135512d389da602dfec13407955eb82e641defae6fbea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
