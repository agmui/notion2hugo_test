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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQNO555%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ZXztgonZbXoRsdN3DwrHpscEQcf8M6pSK3shn24XGAiBRyQyjJbCO6ZkklDihWIkbIxvq7f1phAde1zorrqjkTir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9f7gMlsZSskx8wPSKtwDfDtx3oM4vHVheRy8HEcvDwr4Cgtg7rGTjbIHO%2FQSlWfoIm2ThRh3aK2fOqvQf2%2FuGaM0N2cjcB%2FmIUD68i8wRdqhFmU7VI8ljdXwkoVu5hy7RVWwSwudq0Z5%2BoK0ijIxJouDQrBseGuqn85JRpVjiZUiwAduN9RGIvVCwC3B4KMleBb1aN%2FDfq4KAz72Z5IkUi22n1istoIq0BX4bUEGBElvDdYlek9%2FOSqlVyJR2HY10aGB7%2Fg9CFMdIeZXEpANiNXorSBbM1zOQLjqaiXoHp%2BaAMDEml03hyXXV3H8Yg8PxWTMdCN2L48I9c%2FR8gi2AskxP9I2Ms4m40HVagFAbgb8q93WkAtl2muCqVT0OR%2FgVwZJP8EqA1zP%2FebcmUSwrF%2FtY7P5b57n4rKSMjjWHJDXumhPO6gXhsfdjLYlX4wLQPMcI6ZUygBa6li%2BUeVJbv%2BlXdPOrj0DChZuzvadV%2FCidqc0tXsCRDsOPRhYxNBeUYMx3XJGfJTxbsb%2Bz7xfCdGwB%2B7vdfWTxmPGYd2whl78silsd1HP6HDKk06WxnfMoKgk%2F%2BXMVJcZhy7Swd6WbkEdzjC5xunZ1JI2CgoiMONXjjYUN51QXQPcgoJPg9t0H4FVuXlOVgewpogwye%2BzwAY6pgGwuUrwsAQlx6rVtXB8LZzP%2B49jRAZt8Y509bguTAy5ZSElTSX0J1gFXs7lNQOWzJF%2BBIleiccm3ZQsCnEl%2F4bzOyw3qIaLf17wBGZLlPGTPTVYBmTSksvUHUaKWAWJqZwtXWt%2FLK4OoKswLb6LLYxKHsukEZHyHfn2p35BjhloNbskM9GnHPh8BQxRlErTnKcDvhCcom3B0UyW7IMq8XO63MZERh%2B1&X-Amz-Signature=241aaa28bfb528d29db2cd3c4772698266a1b12603ec536c3eb501e1c9cc91bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQNO555%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ZXztgonZbXoRsdN3DwrHpscEQcf8M6pSK3shn24XGAiBRyQyjJbCO6ZkklDihWIkbIxvq7f1phAde1zorrqjkTir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9f7gMlsZSskx8wPSKtwDfDtx3oM4vHVheRy8HEcvDwr4Cgtg7rGTjbIHO%2FQSlWfoIm2ThRh3aK2fOqvQf2%2FuGaM0N2cjcB%2FmIUD68i8wRdqhFmU7VI8ljdXwkoVu5hy7RVWwSwudq0Z5%2BoK0ijIxJouDQrBseGuqn85JRpVjiZUiwAduN9RGIvVCwC3B4KMleBb1aN%2FDfq4KAz72Z5IkUi22n1istoIq0BX4bUEGBElvDdYlek9%2FOSqlVyJR2HY10aGB7%2Fg9CFMdIeZXEpANiNXorSBbM1zOQLjqaiXoHp%2BaAMDEml03hyXXV3H8Yg8PxWTMdCN2L48I9c%2FR8gi2AskxP9I2Ms4m40HVagFAbgb8q93WkAtl2muCqVT0OR%2FgVwZJP8EqA1zP%2FebcmUSwrF%2FtY7P5b57n4rKSMjjWHJDXumhPO6gXhsfdjLYlX4wLQPMcI6ZUygBa6li%2BUeVJbv%2BlXdPOrj0DChZuzvadV%2FCidqc0tXsCRDsOPRhYxNBeUYMx3XJGfJTxbsb%2Bz7xfCdGwB%2B7vdfWTxmPGYd2whl78silsd1HP6HDKk06WxnfMoKgk%2F%2BXMVJcZhy7Swd6WbkEdzjC5xunZ1JI2CgoiMONXjjYUN51QXQPcgoJPg9t0H4FVuXlOVgewpogwye%2BzwAY6pgGwuUrwsAQlx6rVtXB8LZzP%2B49jRAZt8Y509bguTAy5ZSElTSX0J1gFXs7lNQOWzJF%2BBIleiccm3ZQsCnEl%2F4bzOyw3qIaLf17wBGZLlPGTPTVYBmTSksvUHUaKWAWJqZwtXWt%2FLK4OoKswLb6LLYxKHsukEZHyHfn2p35BjhloNbskM9GnHPh8BQxRlErTnKcDvhCcom3B0UyW7IMq8XO63MZERh%2B1&X-Amz-Signature=e783d205a3dfe4ad06687085f352c2745b6681e1c4eec65fdada5a3a57f4ff77&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQNO555%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ZXztgonZbXoRsdN3DwrHpscEQcf8M6pSK3shn24XGAiBRyQyjJbCO6ZkklDihWIkbIxvq7f1phAde1zorrqjkTir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9f7gMlsZSskx8wPSKtwDfDtx3oM4vHVheRy8HEcvDwr4Cgtg7rGTjbIHO%2FQSlWfoIm2ThRh3aK2fOqvQf2%2FuGaM0N2cjcB%2FmIUD68i8wRdqhFmU7VI8ljdXwkoVu5hy7RVWwSwudq0Z5%2BoK0ijIxJouDQrBseGuqn85JRpVjiZUiwAduN9RGIvVCwC3B4KMleBb1aN%2FDfq4KAz72Z5IkUi22n1istoIq0BX4bUEGBElvDdYlek9%2FOSqlVyJR2HY10aGB7%2Fg9CFMdIeZXEpANiNXorSBbM1zOQLjqaiXoHp%2BaAMDEml03hyXXV3H8Yg8PxWTMdCN2L48I9c%2FR8gi2AskxP9I2Ms4m40HVagFAbgb8q93WkAtl2muCqVT0OR%2FgVwZJP8EqA1zP%2FebcmUSwrF%2FtY7P5b57n4rKSMjjWHJDXumhPO6gXhsfdjLYlX4wLQPMcI6ZUygBa6li%2BUeVJbv%2BlXdPOrj0DChZuzvadV%2FCidqc0tXsCRDsOPRhYxNBeUYMx3XJGfJTxbsb%2Bz7xfCdGwB%2B7vdfWTxmPGYd2whl78silsd1HP6HDKk06WxnfMoKgk%2F%2BXMVJcZhy7Swd6WbkEdzjC5xunZ1JI2CgoiMONXjjYUN51QXQPcgoJPg9t0H4FVuXlOVgewpogwye%2BzwAY6pgGwuUrwsAQlx6rVtXB8LZzP%2B49jRAZt8Y509bguTAy5ZSElTSX0J1gFXs7lNQOWzJF%2BBIleiccm3ZQsCnEl%2F4bzOyw3qIaLf17wBGZLlPGTPTVYBmTSksvUHUaKWAWJqZwtXWt%2FLK4OoKswLb6LLYxKHsukEZHyHfn2p35BjhloNbskM9GnHPh8BQxRlErTnKcDvhCcom3B0UyW7IMq8XO63MZERh%2B1&X-Amz-Signature=7fcd8eb16263938c1d2294b44fdf7ede3b95f3881c7741ed60b995c5dcc54977&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQNO555%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ZXztgonZbXoRsdN3DwrHpscEQcf8M6pSK3shn24XGAiBRyQyjJbCO6ZkklDihWIkbIxvq7f1phAde1zorrqjkTir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9f7gMlsZSskx8wPSKtwDfDtx3oM4vHVheRy8HEcvDwr4Cgtg7rGTjbIHO%2FQSlWfoIm2ThRh3aK2fOqvQf2%2FuGaM0N2cjcB%2FmIUD68i8wRdqhFmU7VI8ljdXwkoVu5hy7RVWwSwudq0Z5%2BoK0ijIxJouDQrBseGuqn85JRpVjiZUiwAduN9RGIvVCwC3B4KMleBb1aN%2FDfq4KAz72Z5IkUi22n1istoIq0BX4bUEGBElvDdYlek9%2FOSqlVyJR2HY10aGB7%2Fg9CFMdIeZXEpANiNXorSBbM1zOQLjqaiXoHp%2BaAMDEml03hyXXV3H8Yg8PxWTMdCN2L48I9c%2FR8gi2AskxP9I2Ms4m40HVagFAbgb8q93WkAtl2muCqVT0OR%2FgVwZJP8EqA1zP%2FebcmUSwrF%2FtY7P5b57n4rKSMjjWHJDXumhPO6gXhsfdjLYlX4wLQPMcI6ZUygBa6li%2BUeVJbv%2BlXdPOrj0DChZuzvadV%2FCidqc0tXsCRDsOPRhYxNBeUYMx3XJGfJTxbsb%2Bz7xfCdGwB%2B7vdfWTxmPGYd2whl78silsd1HP6HDKk06WxnfMoKgk%2F%2BXMVJcZhy7Swd6WbkEdzjC5xunZ1JI2CgoiMONXjjYUN51QXQPcgoJPg9t0H4FVuXlOVgewpogwye%2BzwAY6pgGwuUrwsAQlx6rVtXB8LZzP%2B49jRAZt8Y509bguTAy5ZSElTSX0J1gFXs7lNQOWzJF%2BBIleiccm3ZQsCnEl%2F4bzOyw3qIaLf17wBGZLlPGTPTVYBmTSksvUHUaKWAWJqZwtXWt%2FLK4OoKswLb6LLYxKHsukEZHyHfn2p35BjhloNbskM9GnHPh8BQxRlErTnKcDvhCcom3B0UyW7IMq8XO63MZERh%2B1&X-Amz-Signature=1292e107bb632bc064c171ff839c0fa2475be23fde990e8f1ccddc60879d011a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQNO555%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ZXztgonZbXoRsdN3DwrHpscEQcf8M6pSK3shn24XGAiBRyQyjJbCO6ZkklDihWIkbIxvq7f1phAde1zorrqjkTir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9f7gMlsZSskx8wPSKtwDfDtx3oM4vHVheRy8HEcvDwr4Cgtg7rGTjbIHO%2FQSlWfoIm2ThRh3aK2fOqvQf2%2FuGaM0N2cjcB%2FmIUD68i8wRdqhFmU7VI8ljdXwkoVu5hy7RVWwSwudq0Z5%2BoK0ijIxJouDQrBseGuqn85JRpVjiZUiwAduN9RGIvVCwC3B4KMleBb1aN%2FDfq4KAz72Z5IkUi22n1istoIq0BX4bUEGBElvDdYlek9%2FOSqlVyJR2HY10aGB7%2Fg9CFMdIeZXEpANiNXorSBbM1zOQLjqaiXoHp%2BaAMDEml03hyXXV3H8Yg8PxWTMdCN2L48I9c%2FR8gi2AskxP9I2Ms4m40HVagFAbgb8q93WkAtl2muCqVT0OR%2FgVwZJP8EqA1zP%2FebcmUSwrF%2FtY7P5b57n4rKSMjjWHJDXumhPO6gXhsfdjLYlX4wLQPMcI6ZUygBa6li%2BUeVJbv%2BlXdPOrj0DChZuzvadV%2FCidqc0tXsCRDsOPRhYxNBeUYMx3XJGfJTxbsb%2Bz7xfCdGwB%2B7vdfWTxmPGYd2whl78silsd1HP6HDKk06WxnfMoKgk%2F%2BXMVJcZhy7Swd6WbkEdzjC5xunZ1JI2CgoiMONXjjYUN51QXQPcgoJPg9t0H4FVuXlOVgewpogwye%2BzwAY6pgGwuUrwsAQlx6rVtXB8LZzP%2B49jRAZt8Y509bguTAy5ZSElTSX0J1gFXs7lNQOWzJF%2BBIleiccm3ZQsCnEl%2F4bzOyw3qIaLf17wBGZLlPGTPTVYBmTSksvUHUaKWAWJqZwtXWt%2FLK4OoKswLb6LLYxKHsukEZHyHfn2p35BjhloNbskM9GnHPh8BQxRlErTnKcDvhCcom3B0UyW7IMq8XO63MZERh%2B1&X-Amz-Signature=62387494a657a201fb82d2962fdabac1039449fc761be0a5053d309fa3001622&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQNO555%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ZXztgonZbXoRsdN3DwrHpscEQcf8M6pSK3shn24XGAiBRyQyjJbCO6ZkklDihWIkbIxvq7f1phAde1zorrqjkTir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9f7gMlsZSskx8wPSKtwDfDtx3oM4vHVheRy8HEcvDwr4Cgtg7rGTjbIHO%2FQSlWfoIm2ThRh3aK2fOqvQf2%2FuGaM0N2cjcB%2FmIUD68i8wRdqhFmU7VI8ljdXwkoVu5hy7RVWwSwudq0Z5%2BoK0ijIxJouDQrBseGuqn85JRpVjiZUiwAduN9RGIvVCwC3B4KMleBb1aN%2FDfq4KAz72Z5IkUi22n1istoIq0BX4bUEGBElvDdYlek9%2FOSqlVyJR2HY10aGB7%2Fg9CFMdIeZXEpANiNXorSBbM1zOQLjqaiXoHp%2BaAMDEml03hyXXV3H8Yg8PxWTMdCN2L48I9c%2FR8gi2AskxP9I2Ms4m40HVagFAbgb8q93WkAtl2muCqVT0OR%2FgVwZJP8EqA1zP%2FebcmUSwrF%2FtY7P5b57n4rKSMjjWHJDXumhPO6gXhsfdjLYlX4wLQPMcI6ZUygBa6li%2BUeVJbv%2BlXdPOrj0DChZuzvadV%2FCidqc0tXsCRDsOPRhYxNBeUYMx3XJGfJTxbsb%2Bz7xfCdGwB%2B7vdfWTxmPGYd2whl78silsd1HP6HDKk06WxnfMoKgk%2F%2BXMVJcZhy7Swd6WbkEdzjC5xunZ1JI2CgoiMONXjjYUN51QXQPcgoJPg9t0H4FVuXlOVgewpogwye%2BzwAY6pgGwuUrwsAQlx6rVtXB8LZzP%2B49jRAZt8Y509bguTAy5ZSElTSX0J1gFXs7lNQOWzJF%2BBIleiccm3ZQsCnEl%2F4bzOyw3qIaLf17wBGZLlPGTPTVYBmTSksvUHUaKWAWJqZwtXWt%2FLK4OoKswLb6LLYxKHsukEZHyHfn2p35BjhloNbskM9GnHPh8BQxRlErTnKcDvhCcom3B0UyW7IMq8XO63MZERh%2B1&X-Amz-Signature=df338b0909a122b01a1246ebb14cc30b2f3e314b821f7f6e3238c90a318919f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQNO555%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ZXztgonZbXoRsdN3DwrHpscEQcf8M6pSK3shn24XGAiBRyQyjJbCO6ZkklDihWIkbIxvq7f1phAde1zorrqjkTir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9f7gMlsZSskx8wPSKtwDfDtx3oM4vHVheRy8HEcvDwr4Cgtg7rGTjbIHO%2FQSlWfoIm2ThRh3aK2fOqvQf2%2FuGaM0N2cjcB%2FmIUD68i8wRdqhFmU7VI8ljdXwkoVu5hy7RVWwSwudq0Z5%2BoK0ijIxJouDQrBseGuqn85JRpVjiZUiwAduN9RGIvVCwC3B4KMleBb1aN%2FDfq4KAz72Z5IkUi22n1istoIq0BX4bUEGBElvDdYlek9%2FOSqlVyJR2HY10aGB7%2Fg9CFMdIeZXEpANiNXorSBbM1zOQLjqaiXoHp%2BaAMDEml03hyXXV3H8Yg8PxWTMdCN2L48I9c%2FR8gi2AskxP9I2Ms4m40HVagFAbgb8q93WkAtl2muCqVT0OR%2FgVwZJP8EqA1zP%2FebcmUSwrF%2FtY7P5b57n4rKSMjjWHJDXumhPO6gXhsfdjLYlX4wLQPMcI6ZUygBa6li%2BUeVJbv%2BlXdPOrj0DChZuzvadV%2FCidqc0tXsCRDsOPRhYxNBeUYMx3XJGfJTxbsb%2Bz7xfCdGwB%2B7vdfWTxmPGYd2whl78silsd1HP6HDKk06WxnfMoKgk%2F%2BXMVJcZhy7Swd6WbkEdzjC5xunZ1JI2CgoiMONXjjYUN51QXQPcgoJPg9t0H4FVuXlOVgewpogwye%2BzwAY6pgGwuUrwsAQlx6rVtXB8LZzP%2B49jRAZt8Y509bguTAy5ZSElTSX0J1gFXs7lNQOWzJF%2BBIleiccm3ZQsCnEl%2F4bzOyw3qIaLf17wBGZLlPGTPTVYBmTSksvUHUaKWAWJqZwtXWt%2FLK4OoKswLb6LLYxKHsukEZHyHfn2p35BjhloNbskM9GnHPh8BQxRlErTnKcDvhCcom3B0UyW7IMq8XO63MZERh%2B1&X-Amz-Signature=9fced1bb4a8df34fb74b79d9757ea418809053766e1f4f7e6a7ccfc336a4fb20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBQNO555%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4ZXztgonZbXoRsdN3DwrHpscEQcf8M6pSK3shn24XGAiBRyQyjJbCO6ZkklDihWIkbIxvq7f1phAde1zorrqjkTir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM9f7gMlsZSskx8wPSKtwDfDtx3oM4vHVheRy8HEcvDwr4Cgtg7rGTjbIHO%2FQSlWfoIm2ThRh3aK2fOqvQf2%2FuGaM0N2cjcB%2FmIUD68i8wRdqhFmU7VI8ljdXwkoVu5hy7RVWwSwudq0Z5%2BoK0ijIxJouDQrBseGuqn85JRpVjiZUiwAduN9RGIvVCwC3B4KMleBb1aN%2FDfq4KAz72Z5IkUi22n1istoIq0BX4bUEGBElvDdYlek9%2FOSqlVyJR2HY10aGB7%2Fg9CFMdIeZXEpANiNXorSBbM1zOQLjqaiXoHp%2BaAMDEml03hyXXV3H8Yg8PxWTMdCN2L48I9c%2FR8gi2AskxP9I2Ms4m40HVagFAbgb8q93WkAtl2muCqVT0OR%2FgVwZJP8EqA1zP%2FebcmUSwrF%2FtY7P5b57n4rKSMjjWHJDXumhPO6gXhsfdjLYlX4wLQPMcI6ZUygBa6li%2BUeVJbv%2BlXdPOrj0DChZuzvadV%2FCidqc0tXsCRDsOPRhYxNBeUYMx3XJGfJTxbsb%2Bz7xfCdGwB%2B7vdfWTxmPGYd2whl78silsd1HP6HDKk06WxnfMoKgk%2F%2BXMVJcZhy7Swd6WbkEdzjC5xunZ1JI2CgoiMONXjjYUN51QXQPcgoJPg9t0H4FVuXlOVgewpogwye%2BzwAY6pgGwuUrwsAQlx6rVtXB8LZzP%2B49jRAZt8Y509bguTAy5ZSElTSX0J1gFXs7lNQOWzJF%2BBIleiccm3ZQsCnEl%2F4bzOyw3qIaLf17wBGZLlPGTPTVYBmTSksvUHUaKWAWJqZwtXWt%2FLK4OoKswLb6LLYxKHsukEZHyHfn2p35BjhloNbskM9GnHPh8BQxRlErTnKcDvhCcom3B0UyW7IMq8XO63MZERh%2B1&X-Amz-Signature=4b91d67f94655b87df4d58f52b07af0105c7af8464a1c44fc45067e12f5f572c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
