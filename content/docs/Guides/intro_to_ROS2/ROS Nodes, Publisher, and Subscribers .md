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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6HQL2T%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvs22Af%2BFMoG%2Fc5v1TvtjnqlOsmy6w1d34uQBfff7wRAiEAxiltxoqMxd2iPYS6O643qbGp4tvxWw9rK13C0zH%2B7p0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDON6Rra96BUkLXeB%2FSrcAzpyiTezWg4kF3CDVGSca9rzs5jjSyRgQ6NAqV%2BVxRyrw0RTGMEi40XPtX406n50DJOq51Vshsn2mpNS7KcPwMstY9%2BNMfygjiU3eE59bL28LfAkefDbr9VdxJF1FYkUcnHna7djW8bvpBUz2LXlCNqO8kHTT04q8IyvYpE0UKXv1CeXg2cUGIB7oinAJLcaQzYcCMNH2%2FsghNP3KscPxac1xyd1PU%2BlLbxCb%2Fo9TFjbtvukwLFio37ouAiJuDeupeOUKj7XMisHsXHylqGCyj%2BYCHngJBuSiFzDsnYwAdD03%2FOwebyGQ98OkDvEjd1qJcqYp5hYo2Rj5hHHcqOuXe41gEF7aPHuobMwjHbZmaIGQN5bli5XJ9YG6i3OLX7X%2FrleWtYs61OWT3Wnj07z%2Fgr3w4aW9iiyqEVFVHMlPZJYa9G5Or4krQhEcAKBmG22ZQc3HSTbd%2BOkvjOQAPixhBlgsIOMO0d7zCQUJnsnCYeJ1kOnta%2B8kVM8OPZ0JicK7yDJDXIBpgEL%2BoEmCtcLeEt%2FUX6fQCKplsgZionSgyv%2BzQ%2FwOVORRCWBu36L%2BM%2FVzpVGdJ47YbqEyYIby0F6rXw4PByQyWRmiTgh%2BBDAPQirnK0ZhcQe535FSC3LMPyb%2BL8GOqUB7Cf98PYcP3gf2Alqie0h1mN4HhtSJH1OPFhbaFtPKW2airSSfmtzvitm%2BEDkk4hpY3DH0uyn5LG4qE07QpuozEs9%2F9bgWbaBGDdIKAgLSri6dPLEZbibwWl%2BqR9nXXo0FIjvkCYaXGSo2p5u6DFlMZu8t8xyqClWMZ228oU4T360WzxBWR60d7vcqZmX9C%2F81Hgx6v1UJ6UDKD76DtWujhw0ArWH&X-Amz-Signature=02affc5a3bbe2a2fa5a863da1fe056f50c08137d767f92fa584ddc8da3fb7eec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6HQL2T%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvs22Af%2BFMoG%2Fc5v1TvtjnqlOsmy6w1d34uQBfff7wRAiEAxiltxoqMxd2iPYS6O643qbGp4tvxWw9rK13C0zH%2B7p0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDON6Rra96BUkLXeB%2FSrcAzpyiTezWg4kF3CDVGSca9rzs5jjSyRgQ6NAqV%2BVxRyrw0RTGMEi40XPtX406n50DJOq51Vshsn2mpNS7KcPwMstY9%2BNMfygjiU3eE59bL28LfAkefDbr9VdxJF1FYkUcnHna7djW8bvpBUz2LXlCNqO8kHTT04q8IyvYpE0UKXv1CeXg2cUGIB7oinAJLcaQzYcCMNH2%2FsghNP3KscPxac1xyd1PU%2BlLbxCb%2Fo9TFjbtvukwLFio37ouAiJuDeupeOUKj7XMisHsXHylqGCyj%2BYCHngJBuSiFzDsnYwAdD03%2FOwebyGQ98OkDvEjd1qJcqYp5hYo2Rj5hHHcqOuXe41gEF7aPHuobMwjHbZmaIGQN5bli5XJ9YG6i3OLX7X%2FrleWtYs61OWT3Wnj07z%2Fgr3w4aW9iiyqEVFVHMlPZJYa9G5Or4krQhEcAKBmG22ZQc3HSTbd%2BOkvjOQAPixhBlgsIOMO0d7zCQUJnsnCYeJ1kOnta%2B8kVM8OPZ0JicK7yDJDXIBpgEL%2BoEmCtcLeEt%2FUX6fQCKplsgZionSgyv%2BzQ%2FwOVORRCWBu36L%2BM%2FVzpVGdJ47YbqEyYIby0F6rXw4PByQyWRmiTgh%2BBDAPQirnK0ZhcQe535FSC3LMPyb%2BL8GOqUB7Cf98PYcP3gf2Alqie0h1mN4HhtSJH1OPFhbaFtPKW2airSSfmtzvitm%2BEDkk4hpY3DH0uyn5LG4qE07QpuozEs9%2F9bgWbaBGDdIKAgLSri6dPLEZbibwWl%2BqR9nXXo0FIjvkCYaXGSo2p5u6DFlMZu8t8xyqClWMZ228oU4T360WzxBWR60d7vcqZmX9C%2F81Hgx6v1UJ6UDKD76DtWujhw0ArWH&X-Amz-Signature=1d6c5fcf2b99b98ae305cfa53571f3425df776f020b8d86dc4253ff9c59315fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6HQL2T%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvs22Af%2BFMoG%2Fc5v1TvtjnqlOsmy6w1d34uQBfff7wRAiEAxiltxoqMxd2iPYS6O643qbGp4tvxWw9rK13C0zH%2B7p0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDON6Rra96BUkLXeB%2FSrcAzpyiTezWg4kF3CDVGSca9rzs5jjSyRgQ6NAqV%2BVxRyrw0RTGMEi40XPtX406n50DJOq51Vshsn2mpNS7KcPwMstY9%2BNMfygjiU3eE59bL28LfAkefDbr9VdxJF1FYkUcnHna7djW8bvpBUz2LXlCNqO8kHTT04q8IyvYpE0UKXv1CeXg2cUGIB7oinAJLcaQzYcCMNH2%2FsghNP3KscPxac1xyd1PU%2BlLbxCb%2Fo9TFjbtvukwLFio37ouAiJuDeupeOUKj7XMisHsXHylqGCyj%2BYCHngJBuSiFzDsnYwAdD03%2FOwebyGQ98OkDvEjd1qJcqYp5hYo2Rj5hHHcqOuXe41gEF7aPHuobMwjHbZmaIGQN5bli5XJ9YG6i3OLX7X%2FrleWtYs61OWT3Wnj07z%2Fgr3w4aW9iiyqEVFVHMlPZJYa9G5Or4krQhEcAKBmG22ZQc3HSTbd%2BOkvjOQAPixhBlgsIOMO0d7zCQUJnsnCYeJ1kOnta%2B8kVM8OPZ0JicK7yDJDXIBpgEL%2BoEmCtcLeEt%2FUX6fQCKplsgZionSgyv%2BzQ%2FwOVORRCWBu36L%2BM%2FVzpVGdJ47YbqEyYIby0F6rXw4PByQyWRmiTgh%2BBDAPQirnK0ZhcQe535FSC3LMPyb%2BL8GOqUB7Cf98PYcP3gf2Alqie0h1mN4HhtSJH1OPFhbaFtPKW2airSSfmtzvitm%2BEDkk4hpY3DH0uyn5LG4qE07QpuozEs9%2F9bgWbaBGDdIKAgLSri6dPLEZbibwWl%2BqR9nXXo0FIjvkCYaXGSo2p5u6DFlMZu8t8xyqClWMZ228oU4T360WzxBWR60d7vcqZmX9C%2F81Hgx6v1UJ6UDKD76DtWujhw0ArWH&X-Amz-Signature=40280a473578970502ac5e3fba616a40395a73160bb24def36bd46b8673d61f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6HQL2T%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvs22Af%2BFMoG%2Fc5v1TvtjnqlOsmy6w1d34uQBfff7wRAiEAxiltxoqMxd2iPYS6O643qbGp4tvxWw9rK13C0zH%2B7p0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDON6Rra96BUkLXeB%2FSrcAzpyiTezWg4kF3CDVGSca9rzs5jjSyRgQ6NAqV%2BVxRyrw0RTGMEi40XPtX406n50DJOq51Vshsn2mpNS7KcPwMstY9%2BNMfygjiU3eE59bL28LfAkefDbr9VdxJF1FYkUcnHna7djW8bvpBUz2LXlCNqO8kHTT04q8IyvYpE0UKXv1CeXg2cUGIB7oinAJLcaQzYcCMNH2%2FsghNP3KscPxac1xyd1PU%2BlLbxCb%2Fo9TFjbtvukwLFio37ouAiJuDeupeOUKj7XMisHsXHylqGCyj%2BYCHngJBuSiFzDsnYwAdD03%2FOwebyGQ98OkDvEjd1qJcqYp5hYo2Rj5hHHcqOuXe41gEF7aPHuobMwjHbZmaIGQN5bli5XJ9YG6i3OLX7X%2FrleWtYs61OWT3Wnj07z%2Fgr3w4aW9iiyqEVFVHMlPZJYa9G5Or4krQhEcAKBmG22ZQc3HSTbd%2BOkvjOQAPixhBlgsIOMO0d7zCQUJnsnCYeJ1kOnta%2B8kVM8OPZ0JicK7yDJDXIBpgEL%2BoEmCtcLeEt%2FUX6fQCKplsgZionSgyv%2BzQ%2FwOVORRCWBu36L%2BM%2FVzpVGdJ47YbqEyYIby0F6rXw4PByQyWRmiTgh%2BBDAPQirnK0ZhcQe535FSC3LMPyb%2BL8GOqUB7Cf98PYcP3gf2Alqie0h1mN4HhtSJH1OPFhbaFtPKW2airSSfmtzvitm%2BEDkk4hpY3DH0uyn5LG4qE07QpuozEs9%2F9bgWbaBGDdIKAgLSri6dPLEZbibwWl%2BqR9nXXo0FIjvkCYaXGSo2p5u6DFlMZu8t8xyqClWMZ228oU4T360WzxBWR60d7vcqZmX9C%2F81Hgx6v1UJ6UDKD76DtWujhw0ArWH&X-Amz-Signature=f8161d7e53fe54f9bd9fcc43dd2d2cf60d7181b8414211f23c42402732c73ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6HQL2T%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvs22Af%2BFMoG%2Fc5v1TvtjnqlOsmy6w1d34uQBfff7wRAiEAxiltxoqMxd2iPYS6O643qbGp4tvxWw9rK13C0zH%2B7p0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDON6Rra96BUkLXeB%2FSrcAzpyiTezWg4kF3CDVGSca9rzs5jjSyRgQ6NAqV%2BVxRyrw0RTGMEi40XPtX406n50DJOq51Vshsn2mpNS7KcPwMstY9%2BNMfygjiU3eE59bL28LfAkefDbr9VdxJF1FYkUcnHna7djW8bvpBUz2LXlCNqO8kHTT04q8IyvYpE0UKXv1CeXg2cUGIB7oinAJLcaQzYcCMNH2%2FsghNP3KscPxac1xyd1PU%2BlLbxCb%2Fo9TFjbtvukwLFio37ouAiJuDeupeOUKj7XMisHsXHylqGCyj%2BYCHngJBuSiFzDsnYwAdD03%2FOwebyGQ98OkDvEjd1qJcqYp5hYo2Rj5hHHcqOuXe41gEF7aPHuobMwjHbZmaIGQN5bli5XJ9YG6i3OLX7X%2FrleWtYs61OWT3Wnj07z%2Fgr3w4aW9iiyqEVFVHMlPZJYa9G5Or4krQhEcAKBmG22ZQc3HSTbd%2BOkvjOQAPixhBlgsIOMO0d7zCQUJnsnCYeJ1kOnta%2B8kVM8OPZ0JicK7yDJDXIBpgEL%2BoEmCtcLeEt%2FUX6fQCKplsgZionSgyv%2BzQ%2FwOVORRCWBu36L%2BM%2FVzpVGdJ47YbqEyYIby0F6rXw4PByQyWRmiTgh%2BBDAPQirnK0ZhcQe535FSC3LMPyb%2BL8GOqUB7Cf98PYcP3gf2Alqie0h1mN4HhtSJH1OPFhbaFtPKW2airSSfmtzvitm%2BEDkk4hpY3DH0uyn5LG4qE07QpuozEs9%2F9bgWbaBGDdIKAgLSri6dPLEZbibwWl%2BqR9nXXo0FIjvkCYaXGSo2p5u6DFlMZu8t8xyqClWMZ228oU4T360WzxBWR60d7vcqZmX9C%2F81Hgx6v1UJ6UDKD76DtWujhw0ArWH&X-Amz-Signature=12a8ff1e08ec8985d15aec1b5dc7f5ed9bbae8257c791c40e353f53fe7a72d36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6HQL2T%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvs22Af%2BFMoG%2Fc5v1TvtjnqlOsmy6w1d34uQBfff7wRAiEAxiltxoqMxd2iPYS6O643qbGp4tvxWw9rK13C0zH%2B7p0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDON6Rra96BUkLXeB%2FSrcAzpyiTezWg4kF3CDVGSca9rzs5jjSyRgQ6NAqV%2BVxRyrw0RTGMEi40XPtX406n50DJOq51Vshsn2mpNS7KcPwMstY9%2BNMfygjiU3eE59bL28LfAkefDbr9VdxJF1FYkUcnHna7djW8bvpBUz2LXlCNqO8kHTT04q8IyvYpE0UKXv1CeXg2cUGIB7oinAJLcaQzYcCMNH2%2FsghNP3KscPxac1xyd1PU%2BlLbxCb%2Fo9TFjbtvukwLFio37ouAiJuDeupeOUKj7XMisHsXHylqGCyj%2BYCHngJBuSiFzDsnYwAdD03%2FOwebyGQ98OkDvEjd1qJcqYp5hYo2Rj5hHHcqOuXe41gEF7aPHuobMwjHbZmaIGQN5bli5XJ9YG6i3OLX7X%2FrleWtYs61OWT3Wnj07z%2Fgr3w4aW9iiyqEVFVHMlPZJYa9G5Or4krQhEcAKBmG22ZQc3HSTbd%2BOkvjOQAPixhBlgsIOMO0d7zCQUJnsnCYeJ1kOnta%2B8kVM8OPZ0JicK7yDJDXIBpgEL%2BoEmCtcLeEt%2FUX6fQCKplsgZionSgyv%2BzQ%2FwOVORRCWBu36L%2BM%2FVzpVGdJ47YbqEyYIby0F6rXw4PByQyWRmiTgh%2BBDAPQirnK0ZhcQe535FSC3LMPyb%2BL8GOqUB7Cf98PYcP3gf2Alqie0h1mN4HhtSJH1OPFhbaFtPKW2airSSfmtzvitm%2BEDkk4hpY3DH0uyn5LG4qE07QpuozEs9%2F9bgWbaBGDdIKAgLSri6dPLEZbibwWl%2BqR9nXXo0FIjvkCYaXGSo2p5u6DFlMZu8t8xyqClWMZ228oU4T360WzxBWR60d7vcqZmX9C%2F81Hgx6v1UJ6UDKD76DtWujhw0ArWH&X-Amz-Signature=0f615ce3299fcfcfa8bb8609d021fe01b6d85f98d79e448787840975bd035233&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6HQL2T%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvs22Af%2BFMoG%2Fc5v1TvtjnqlOsmy6w1d34uQBfff7wRAiEAxiltxoqMxd2iPYS6O643qbGp4tvxWw9rK13C0zH%2B7p0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDON6Rra96BUkLXeB%2FSrcAzpyiTezWg4kF3CDVGSca9rzs5jjSyRgQ6NAqV%2BVxRyrw0RTGMEi40XPtX406n50DJOq51Vshsn2mpNS7KcPwMstY9%2BNMfygjiU3eE59bL28LfAkefDbr9VdxJF1FYkUcnHna7djW8bvpBUz2LXlCNqO8kHTT04q8IyvYpE0UKXv1CeXg2cUGIB7oinAJLcaQzYcCMNH2%2FsghNP3KscPxac1xyd1PU%2BlLbxCb%2Fo9TFjbtvukwLFio37ouAiJuDeupeOUKj7XMisHsXHylqGCyj%2BYCHngJBuSiFzDsnYwAdD03%2FOwebyGQ98OkDvEjd1qJcqYp5hYo2Rj5hHHcqOuXe41gEF7aPHuobMwjHbZmaIGQN5bli5XJ9YG6i3OLX7X%2FrleWtYs61OWT3Wnj07z%2Fgr3w4aW9iiyqEVFVHMlPZJYa9G5Or4krQhEcAKBmG22ZQc3HSTbd%2BOkvjOQAPixhBlgsIOMO0d7zCQUJnsnCYeJ1kOnta%2B8kVM8OPZ0JicK7yDJDXIBpgEL%2BoEmCtcLeEt%2FUX6fQCKplsgZionSgyv%2BzQ%2FwOVORRCWBu36L%2BM%2FVzpVGdJ47YbqEyYIby0F6rXw4PByQyWRmiTgh%2BBDAPQirnK0ZhcQe535FSC3LMPyb%2BL8GOqUB7Cf98PYcP3gf2Alqie0h1mN4HhtSJH1OPFhbaFtPKW2airSSfmtzvitm%2BEDkk4hpY3DH0uyn5LG4qE07QpuozEs9%2F9bgWbaBGDdIKAgLSri6dPLEZbibwWl%2BqR9nXXo0FIjvkCYaXGSo2p5u6DFlMZu8t8xyqClWMZ228oU4T360WzxBWR60d7vcqZmX9C%2F81Hgx6v1UJ6UDKD76DtWujhw0ArWH&X-Amz-Signature=408fe3feb60701abf2de76905a45cdd1a5a2c8d27bbe0e80af3c0037b1105cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC6HQL2T%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvs22Af%2BFMoG%2Fc5v1TvtjnqlOsmy6w1d34uQBfff7wRAiEAxiltxoqMxd2iPYS6O643qbGp4tvxWw9rK13C0zH%2B7p0q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDON6Rra96BUkLXeB%2FSrcAzpyiTezWg4kF3CDVGSca9rzs5jjSyRgQ6NAqV%2BVxRyrw0RTGMEi40XPtX406n50DJOq51Vshsn2mpNS7KcPwMstY9%2BNMfygjiU3eE59bL28LfAkefDbr9VdxJF1FYkUcnHna7djW8bvpBUz2LXlCNqO8kHTT04q8IyvYpE0UKXv1CeXg2cUGIB7oinAJLcaQzYcCMNH2%2FsghNP3KscPxac1xyd1PU%2BlLbxCb%2Fo9TFjbtvukwLFio37ouAiJuDeupeOUKj7XMisHsXHylqGCyj%2BYCHngJBuSiFzDsnYwAdD03%2FOwebyGQ98OkDvEjd1qJcqYp5hYo2Rj5hHHcqOuXe41gEF7aPHuobMwjHbZmaIGQN5bli5XJ9YG6i3OLX7X%2FrleWtYs61OWT3Wnj07z%2Fgr3w4aW9iiyqEVFVHMlPZJYa9G5Or4krQhEcAKBmG22ZQc3HSTbd%2BOkvjOQAPixhBlgsIOMO0d7zCQUJnsnCYeJ1kOnta%2B8kVM8OPZ0JicK7yDJDXIBpgEL%2BoEmCtcLeEt%2FUX6fQCKplsgZionSgyv%2BzQ%2FwOVORRCWBu36L%2BM%2FVzpVGdJ47YbqEyYIby0F6rXw4PByQyWRmiTgh%2BBDAPQirnK0ZhcQe535FSC3LMPyb%2BL8GOqUB7Cf98PYcP3gf2Alqie0h1mN4HhtSJH1OPFhbaFtPKW2airSSfmtzvitm%2BEDkk4hpY3DH0uyn5LG4qE07QpuozEs9%2F9bgWbaBGDdIKAgLSri6dPLEZbibwWl%2BqR9nXXo0FIjvkCYaXGSo2p5u6DFlMZu8t8xyqClWMZ228oU4T360WzxBWR60d7vcqZmX9C%2F81Hgx6v1UJ6UDKD76DtWujhw0ArWH&X-Amz-Signature=dd54ede93f3c239612e3f47e15c7260dce92979086f402b9d579e973a461d383&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
