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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=b76ac8a8d90d24090a6492e825c946d3f1997b436c7cfe307463f8e59e5db485&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=58ffd3d9305ef9532631c68d59b0a4e3a2b1611d8b1bbdd2af3e57cc50103aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=994b3c06324a0877c7ea683a29cb709e7ebd3bad63c58f82110fbd8cf9bf5a72&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=8b767df3e65ca5055f2b5f8e44351297678ada9d2735a9c50f740cbcaf89a761&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=ed0d403c22ac4766b37b1192e67cd0012a8b5294061cabcd4e0ff8df523c110c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=7bc88ab490542c4551ca08051c2f924e37764ac6000eef5b09d617e45859cae6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=ef06a14957fe7550874e785fc35dcc542de032773f18e22757249c691d6711e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AOWCK5B%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T003800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPEjocIFF%2FYfmrZszY4OC6yc8UqT3g7AM6Zn%2B4Pg3KkAiAFUoNDl8XsmKtrMqRPrix5ZhtHg5ZAN6DQBC9EtsPDFiqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwRYDp3dB9toVpX0EKtwDjK6A32j64TVkQvEk7oXhDdnKRJcZfJV3wfP%2FFG%2Fp4oX4GEsNlekk0DFEcRIJnmDwhlf6xtqCrKjjtVmOTPw343tjIdnTfi0peG4csi0tT2qFouruKco7G39jXhjKAC7cCmLrny0UoCGm6lIarW1loJTqW%2F7nN%2FYZbtiXieuNY6pFHX4KVNp9DQLTHlcHsLMre%2BG%2BnmTbm%2FkrFk8G5ARpRo%2FiwSDckOZYfJeJGzeIs93LY424LixJUt7Ccv8Zt%2FtK%2FCUt86oZnSi4tcHk8FFcRWAydLH0aGopBqV2TNRaMvMeHdmlcm0A%2F%2BhoN9ZVjtb1e1KBWsPL8ttnVOcvG3ycBJlQXnMZnm%2FOxSB42tS1h0hvqiPFaXV0oilqgoWWYflmvFpMqWDIELRIndg4Xiw53vVpwAotBa2IoCxr%2Brv3G3Ux%2BjeLohDTEr3RujeQ70TJYZlBYaqUghvD%2FzpZK5sB%2BtCdhPi1OHt68fmX99gfstb8uNLs8MWIqATEOupZgmq1xy4Q3Q8wcesCMoqsl5O7BSq03Rnntkww4mKo3Sj2%2FjYu0udxmDABocTgIOqn49HDlBXAZdLJM7yeJzEOUGoi4bgemXzAZOQTDM4m8G6UuuSt6R91mUtfupQfvYowjfiYvgY6pgGOzq%2BZnFn2w5hc%2Fkp115%2F1mnQTBM3nZJxgU%2B5CcwAtSO96ndBxA%2Bj6%2FfY4lWqXmIuqYcwStplh64Gaw1NS65zFIl9C6qE8MofEJWWmFufGXsk7XDOGK3EuJy00A246MdCqaWRs6d97QRc8Z2Ciyk7y04k8O2zL590oIE12nAk2pfsuawe78m50zZkgd0GNlVSxaIPOomAdxRw1irsmWpJRKVTRzaLo&X-Amz-Signature=b287a952c8124a4a5817088c595796bef1adb044ca345d3f048ec56f7ba22c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
