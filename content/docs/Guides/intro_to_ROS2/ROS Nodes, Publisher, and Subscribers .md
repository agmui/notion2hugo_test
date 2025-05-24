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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOKPUHM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHx6qyrnbk00jwsROomuPcKHpWDvm9NU4cXinEz6F54MAiEA6quT59ToPgq%2Fi20LOSathrVruc6YYq%2FSmzg1VaN5xLEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcdFCdQVSGIMKl8ircAxx%2F14qb0zLw71t7VpSHlcp%2BDVpd%2BkGLm13JT0UWtOTQZgQ62w%2BNozOd%2FoMB7Ji2H1aM2LbqqhiYiFuX9KmGjpi2krqaBlCYwEzfHyge0opNMcripB8IPtrjAf53b%2BksgYB9mFzNbWq08nH12OmFO8KYXVpd2CHW3UVjIFSyAVO4eikaAAXA%2Fm5FDdWpOeaX6Wj7%2FInMj4KevTwgqprMFldM3HgPosFTNZEygPmdFneTnT97wkIGlBffuP6Ldsqg5MX9Ii7xXTPMlRfx3OPNe%2B36zd0Zxg33J%2BWqrhFq1WmAY35%2BAsHdkK%2FKF9IPvztHeNqERlvuQC07m5UaTqBlBjDS%2B3CQPbisPxiiH%2BmLYiwL1FDJAOO%2FTWKw8PlUmlds8gUfNcQTU3nkPifWC7wb71UqiSxmOxYrbRu%2BO3BMeuEwg5j3YZ7ltWQ0josuh7VFkEuzeurz0YHJGv2asaApY4YoAwRszd18TY5ZCyZWu3LIMM6KlNjRTP7SGgZr2vVo5sdDbaitwZ6rcg%2BvVZLvtLSloCrnNw%2FHDjPpoGunolcYhxunazs5WZLcZ1BsRioq52%2BuVLcDXhbXdrYmiZ75CfoNGuSj4%2FXAx2dUp7EyDaxA8x1ueLzr0HzaYcdUMOqrxcEGOqUBlByq%2FKaBwhuQGD7foxZ%2FXx8il0ueC5%2BpOOLRIEJ3cEveWOrWHLYg2a1gUanPJwsNQjEN6mtseNhUKqehPki279L7gQiTnWs7F4BN4D6%2BBbPK3ZqGJNOJoVbw8%2FUE5TMswWXnZochaXymbIhh9LeK0x%2FV6DEt%2FIcIKNw7hMmKilGsrVLvu7o9D6z6c04rzOAPewnuDZte2Mt6ZQ7DSUByUXc%2Bt4K%2F&X-Amz-Signature=e973af828fcd08a6cb6f30cb84b9ef54b4600a446f03f2c9eb7fe839d4601c93&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOKPUHM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHx6qyrnbk00jwsROomuPcKHpWDvm9NU4cXinEz6F54MAiEA6quT59ToPgq%2Fi20LOSathrVruc6YYq%2FSmzg1VaN5xLEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcdFCdQVSGIMKl8ircAxx%2F14qb0zLw71t7VpSHlcp%2BDVpd%2BkGLm13JT0UWtOTQZgQ62w%2BNozOd%2FoMB7Ji2H1aM2LbqqhiYiFuX9KmGjpi2krqaBlCYwEzfHyge0opNMcripB8IPtrjAf53b%2BksgYB9mFzNbWq08nH12OmFO8KYXVpd2CHW3UVjIFSyAVO4eikaAAXA%2Fm5FDdWpOeaX6Wj7%2FInMj4KevTwgqprMFldM3HgPosFTNZEygPmdFneTnT97wkIGlBffuP6Ldsqg5MX9Ii7xXTPMlRfx3OPNe%2B36zd0Zxg33J%2BWqrhFq1WmAY35%2BAsHdkK%2FKF9IPvztHeNqERlvuQC07m5UaTqBlBjDS%2B3CQPbisPxiiH%2BmLYiwL1FDJAOO%2FTWKw8PlUmlds8gUfNcQTU3nkPifWC7wb71UqiSxmOxYrbRu%2BO3BMeuEwg5j3YZ7ltWQ0josuh7VFkEuzeurz0YHJGv2asaApY4YoAwRszd18TY5ZCyZWu3LIMM6KlNjRTP7SGgZr2vVo5sdDbaitwZ6rcg%2BvVZLvtLSloCrnNw%2FHDjPpoGunolcYhxunazs5WZLcZ1BsRioq52%2BuVLcDXhbXdrYmiZ75CfoNGuSj4%2FXAx2dUp7EyDaxA8x1ueLzr0HzaYcdUMOqrxcEGOqUBlByq%2FKaBwhuQGD7foxZ%2FXx8il0ueC5%2BpOOLRIEJ3cEveWOrWHLYg2a1gUanPJwsNQjEN6mtseNhUKqehPki279L7gQiTnWs7F4BN4D6%2BBbPK3ZqGJNOJoVbw8%2FUE5TMswWXnZochaXymbIhh9LeK0x%2FV6DEt%2FIcIKNw7hMmKilGsrVLvu7o9D6z6c04rzOAPewnuDZte2Mt6ZQ7DSUByUXc%2Bt4K%2F&X-Amz-Signature=4bfb15404f38a8760b2693470d89c3309d86096f0b3c34822acba79ed2e74458&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOKPUHM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHx6qyrnbk00jwsROomuPcKHpWDvm9NU4cXinEz6F54MAiEA6quT59ToPgq%2Fi20LOSathrVruc6YYq%2FSmzg1VaN5xLEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcdFCdQVSGIMKl8ircAxx%2F14qb0zLw71t7VpSHlcp%2BDVpd%2BkGLm13JT0UWtOTQZgQ62w%2BNozOd%2FoMB7Ji2H1aM2LbqqhiYiFuX9KmGjpi2krqaBlCYwEzfHyge0opNMcripB8IPtrjAf53b%2BksgYB9mFzNbWq08nH12OmFO8KYXVpd2CHW3UVjIFSyAVO4eikaAAXA%2Fm5FDdWpOeaX6Wj7%2FInMj4KevTwgqprMFldM3HgPosFTNZEygPmdFneTnT97wkIGlBffuP6Ldsqg5MX9Ii7xXTPMlRfx3OPNe%2B36zd0Zxg33J%2BWqrhFq1WmAY35%2BAsHdkK%2FKF9IPvztHeNqERlvuQC07m5UaTqBlBjDS%2B3CQPbisPxiiH%2BmLYiwL1FDJAOO%2FTWKw8PlUmlds8gUfNcQTU3nkPifWC7wb71UqiSxmOxYrbRu%2BO3BMeuEwg5j3YZ7ltWQ0josuh7VFkEuzeurz0YHJGv2asaApY4YoAwRszd18TY5ZCyZWu3LIMM6KlNjRTP7SGgZr2vVo5sdDbaitwZ6rcg%2BvVZLvtLSloCrnNw%2FHDjPpoGunolcYhxunazs5WZLcZ1BsRioq52%2BuVLcDXhbXdrYmiZ75CfoNGuSj4%2FXAx2dUp7EyDaxA8x1ueLzr0HzaYcdUMOqrxcEGOqUBlByq%2FKaBwhuQGD7foxZ%2FXx8il0ueC5%2BpOOLRIEJ3cEveWOrWHLYg2a1gUanPJwsNQjEN6mtseNhUKqehPki279L7gQiTnWs7F4BN4D6%2BBbPK3ZqGJNOJoVbw8%2FUE5TMswWXnZochaXymbIhh9LeK0x%2FV6DEt%2FIcIKNw7hMmKilGsrVLvu7o9D6z6c04rzOAPewnuDZte2Mt6ZQ7DSUByUXc%2Bt4K%2F&X-Amz-Signature=e18426f771a44e0b558abe4f7605f7da1a10c4f8a678a580f4f19da303156b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOKPUHM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHx6qyrnbk00jwsROomuPcKHpWDvm9NU4cXinEz6F54MAiEA6quT59ToPgq%2Fi20LOSathrVruc6YYq%2FSmzg1VaN5xLEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcdFCdQVSGIMKl8ircAxx%2F14qb0zLw71t7VpSHlcp%2BDVpd%2BkGLm13JT0UWtOTQZgQ62w%2BNozOd%2FoMB7Ji2H1aM2LbqqhiYiFuX9KmGjpi2krqaBlCYwEzfHyge0opNMcripB8IPtrjAf53b%2BksgYB9mFzNbWq08nH12OmFO8KYXVpd2CHW3UVjIFSyAVO4eikaAAXA%2Fm5FDdWpOeaX6Wj7%2FInMj4KevTwgqprMFldM3HgPosFTNZEygPmdFneTnT97wkIGlBffuP6Ldsqg5MX9Ii7xXTPMlRfx3OPNe%2B36zd0Zxg33J%2BWqrhFq1WmAY35%2BAsHdkK%2FKF9IPvztHeNqERlvuQC07m5UaTqBlBjDS%2B3CQPbisPxiiH%2BmLYiwL1FDJAOO%2FTWKw8PlUmlds8gUfNcQTU3nkPifWC7wb71UqiSxmOxYrbRu%2BO3BMeuEwg5j3YZ7ltWQ0josuh7VFkEuzeurz0YHJGv2asaApY4YoAwRszd18TY5ZCyZWu3LIMM6KlNjRTP7SGgZr2vVo5sdDbaitwZ6rcg%2BvVZLvtLSloCrnNw%2FHDjPpoGunolcYhxunazs5WZLcZ1BsRioq52%2BuVLcDXhbXdrYmiZ75CfoNGuSj4%2FXAx2dUp7EyDaxA8x1ueLzr0HzaYcdUMOqrxcEGOqUBlByq%2FKaBwhuQGD7foxZ%2FXx8il0ueC5%2BpOOLRIEJ3cEveWOrWHLYg2a1gUanPJwsNQjEN6mtseNhUKqehPki279L7gQiTnWs7F4BN4D6%2BBbPK3ZqGJNOJoVbw8%2FUE5TMswWXnZochaXymbIhh9LeK0x%2FV6DEt%2FIcIKNw7hMmKilGsrVLvu7o9D6z6c04rzOAPewnuDZte2Mt6ZQ7DSUByUXc%2Bt4K%2F&X-Amz-Signature=ed2bdb6c27fbf5399c366d56920937c6d2319e447d7e94d4ab6e17e575d8fd4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOKPUHM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHx6qyrnbk00jwsROomuPcKHpWDvm9NU4cXinEz6F54MAiEA6quT59ToPgq%2Fi20LOSathrVruc6YYq%2FSmzg1VaN5xLEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcdFCdQVSGIMKl8ircAxx%2F14qb0zLw71t7VpSHlcp%2BDVpd%2BkGLm13JT0UWtOTQZgQ62w%2BNozOd%2FoMB7Ji2H1aM2LbqqhiYiFuX9KmGjpi2krqaBlCYwEzfHyge0opNMcripB8IPtrjAf53b%2BksgYB9mFzNbWq08nH12OmFO8KYXVpd2CHW3UVjIFSyAVO4eikaAAXA%2Fm5FDdWpOeaX6Wj7%2FInMj4KevTwgqprMFldM3HgPosFTNZEygPmdFneTnT97wkIGlBffuP6Ldsqg5MX9Ii7xXTPMlRfx3OPNe%2B36zd0Zxg33J%2BWqrhFq1WmAY35%2BAsHdkK%2FKF9IPvztHeNqERlvuQC07m5UaTqBlBjDS%2B3CQPbisPxiiH%2BmLYiwL1FDJAOO%2FTWKw8PlUmlds8gUfNcQTU3nkPifWC7wb71UqiSxmOxYrbRu%2BO3BMeuEwg5j3YZ7ltWQ0josuh7VFkEuzeurz0YHJGv2asaApY4YoAwRszd18TY5ZCyZWu3LIMM6KlNjRTP7SGgZr2vVo5sdDbaitwZ6rcg%2BvVZLvtLSloCrnNw%2FHDjPpoGunolcYhxunazs5WZLcZ1BsRioq52%2BuVLcDXhbXdrYmiZ75CfoNGuSj4%2FXAx2dUp7EyDaxA8x1ueLzr0HzaYcdUMOqrxcEGOqUBlByq%2FKaBwhuQGD7foxZ%2FXx8il0ueC5%2BpOOLRIEJ3cEveWOrWHLYg2a1gUanPJwsNQjEN6mtseNhUKqehPki279L7gQiTnWs7F4BN4D6%2BBbPK3ZqGJNOJoVbw8%2FUE5TMswWXnZochaXymbIhh9LeK0x%2FV6DEt%2FIcIKNw7hMmKilGsrVLvu7o9D6z6c04rzOAPewnuDZte2Mt6ZQ7DSUByUXc%2Bt4K%2F&X-Amz-Signature=ecbc4f890beeb06ff0ae0d0758ecd571234abc877324be9a0e9f1bb2687f587d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOKPUHM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHx6qyrnbk00jwsROomuPcKHpWDvm9NU4cXinEz6F54MAiEA6quT59ToPgq%2Fi20LOSathrVruc6YYq%2FSmzg1VaN5xLEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcdFCdQVSGIMKl8ircAxx%2F14qb0zLw71t7VpSHlcp%2BDVpd%2BkGLm13JT0UWtOTQZgQ62w%2BNozOd%2FoMB7Ji2H1aM2LbqqhiYiFuX9KmGjpi2krqaBlCYwEzfHyge0opNMcripB8IPtrjAf53b%2BksgYB9mFzNbWq08nH12OmFO8KYXVpd2CHW3UVjIFSyAVO4eikaAAXA%2Fm5FDdWpOeaX6Wj7%2FInMj4KevTwgqprMFldM3HgPosFTNZEygPmdFneTnT97wkIGlBffuP6Ldsqg5MX9Ii7xXTPMlRfx3OPNe%2B36zd0Zxg33J%2BWqrhFq1WmAY35%2BAsHdkK%2FKF9IPvztHeNqERlvuQC07m5UaTqBlBjDS%2B3CQPbisPxiiH%2BmLYiwL1FDJAOO%2FTWKw8PlUmlds8gUfNcQTU3nkPifWC7wb71UqiSxmOxYrbRu%2BO3BMeuEwg5j3YZ7ltWQ0josuh7VFkEuzeurz0YHJGv2asaApY4YoAwRszd18TY5ZCyZWu3LIMM6KlNjRTP7SGgZr2vVo5sdDbaitwZ6rcg%2BvVZLvtLSloCrnNw%2FHDjPpoGunolcYhxunazs5WZLcZ1BsRioq52%2BuVLcDXhbXdrYmiZ75CfoNGuSj4%2FXAx2dUp7EyDaxA8x1ueLzr0HzaYcdUMOqrxcEGOqUBlByq%2FKaBwhuQGD7foxZ%2FXx8il0ueC5%2BpOOLRIEJ3cEveWOrWHLYg2a1gUanPJwsNQjEN6mtseNhUKqehPki279L7gQiTnWs7F4BN4D6%2BBbPK3ZqGJNOJoVbw8%2FUE5TMswWXnZochaXymbIhh9LeK0x%2FV6DEt%2FIcIKNw7hMmKilGsrVLvu7o9D6z6c04rzOAPewnuDZte2Mt6ZQ7DSUByUXc%2Bt4K%2F&X-Amz-Signature=0c0e3181e4ac04e5704e1eb6a0fe95b8eab8c5fbbce8211098590574c44f1023&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOKPUHM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHx6qyrnbk00jwsROomuPcKHpWDvm9NU4cXinEz6F54MAiEA6quT59ToPgq%2Fi20LOSathrVruc6YYq%2FSmzg1VaN5xLEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcdFCdQVSGIMKl8ircAxx%2F14qb0zLw71t7VpSHlcp%2BDVpd%2BkGLm13JT0UWtOTQZgQ62w%2BNozOd%2FoMB7Ji2H1aM2LbqqhiYiFuX9KmGjpi2krqaBlCYwEzfHyge0opNMcripB8IPtrjAf53b%2BksgYB9mFzNbWq08nH12OmFO8KYXVpd2CHW3UVjIFSyAVO4eikaAAXA%2Fm5FDdWpOeaX6Wj7%2FInMj4KevTwgqprMFldM3HgPosFTNZEygPmdFneTnT97wkIGlBffuP6Ldsqg5MX9Ii7xXTPMlRfx3OPNe%2B36zd0Zxg33J%2BWqrhFq1WmAY35%2BAsHdkK%2FKF9IPvztHeNqERlvuQC07m5UaTqBlBjDS%2B3CQPbisPxiiH%2BmLYiwL1FDJAOO%2FTWKw8PlUmlds8gUfNcQTU3nkPifWC7wb71UqiSxmOxYrbRu%2BO3BMeuEwg5j3YZ7ltWQ0josuh7VFkEuzeurz0YHJGv2asaApY4YoAwRszd18TY5ZCyZWu3LIMM6KlNjRTP7SGgZr2vVo5sdDbaitwZ6rcg%2BvVZLvtLSloCrnNw%2FHDjPpoGunolcYhxunazs5WZLcZ1BsRioq52%2BuVLcDXhbXdrYmiZ75CfoNGuSj4%2FXAx2dUp7EyDaxA8x1ueLzr0HzaYcdUMOqrxcEGOqUBlByq%2FKaBwhuQGD7foxZ%2FXx8il0ueC5%2BpOOLRIEJ3cEveWOrWHLYg2a1gUanPJwsNQjEN6mtseNhUKqehPki279L7gQiTnWs7F4BN4D6%2BBbPK3ZqGJNOJoVbw8%2FUE5TMswWXnZochaXymbIhh9LeK0x%2FV6DEt%2FIcIKNw7hMmKilGsrVLvu7o9D6z6c04rzOAPewnuDZte2Mt6ZQ7DSUByUXc%2Bt4K%2F&X-Amz-Signature=669b0a3d253fee4c2f6551998b90f85be6756222b92a23a11cf5c79f55e09180&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VOKPUHM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T061058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIHx6qyrnbk00jwsROomuPcKHpWDvm9NU4cXinEz6F54MAiEA6quT59ToPgq%2Fi20LOSathrVruc6YYq%2FSmzg1VaN5xLEqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcdFCdQVSGIMKl8ircAxx%2F14qb0zLw71t7VpSHlcp%2BDVpd%2BkGLm13JT0UWtOTQZgQ62w%2BNozOd%2FoMB7Ji2H1aM2LbqqhiYiFuX9KmGjpi2krqaBlCYwEzfHyge0opNMcripB8IPtrjAf53b%2BksgYB9mFzNbWq08nH12OmFO8KYXVpd2CHW3UVjIFSyAVO4eikaAAXA%2Fm5FDdWpOeaX6Wj7%2FInMj4KevTwgqprMFldM3HgPosFTNZEygPmdFneTnT97wkIGlBffuP6Ldsqg5MX9Ii7xXTPMlRfx3OPNe%2B36zd0Zxg33J%2BWqrhFq1WmAY35%2BAsHdkK%2FKF9IPvztHeNqERlvuQC07m5UaTqBlBjDS%2B3CQPbisPxiiH%2BmLYiwL1FDJAOO%2FTWKw8PlUmlds8gUfNcQTU3nkPifWC7wb71UqiSxmOxYrbRu%2BO3BMeuEwg5j3YZ7ltWQ0josuh7VFkEuzeurz0YHJGv2asaApY4YoAwRszd18TY5ZCyZWu3LIMM6KlNjRTP7SGgZr2vVo5sdDbaitwZ6rcg%2BvVZLvtLSloCrnNw%2FHDjPpoGunolcYhxunazs5WZLcZ1BsRioq52%2BuVLcDXhbXdrYmiZ75CfoNGuSj4%2FXAx2dUp7EyDaxA8x1ueLzr0HzaYcdUMOqrxcEGOqUBlByq%2FKaBwhuQGD7foxZ%2FXx8il0ueC5%2BpOOLRIEJ3cEveWOrWHLYg2a1gUanPJwsNQjEN6mtseNhUKqehPki279L7gQiTnWs7F4BN4D6%2BBbPK3ZqGJNOJoVbw8%2FUE5TMswWXnZochaXymbIhh9LeK0x%2FV6DEt%2FIcIKNw7hMmKilGsrVLvu7o9D6z6c04rzOAPewnuDZte2Mt6ZQ7DSUByUXc%2Bt4K%2F&X-Amz-Signature=cb01a5853e4127096b8b21ab8f9bb707ba4ed3e9fd873586fdcbb1677ba4cda7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
