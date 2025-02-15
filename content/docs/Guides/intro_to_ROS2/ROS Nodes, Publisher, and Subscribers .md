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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JG36R3R%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkDHJ4Nldmt%2FiOA%2FzY3f5Klxn%2FDSjWn4a0xYltJBE7yQIgL10zdg4kB8x1FXlOsGp7b1TOlveogRioDM1mAEKox4Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDGECQV88rUW6GoP4yrcA2HhOpJKjgGiBKTcRPLit5aiR95udw614sL7o0JPKO5McwjsaIJi3GBpQcBLT%2Bhq9Pg46EWwiqkp46YwIEO3zXtehqMWMMX%2BWdqo3fSu95NfZoKl3bDkvTlt%2BH8HaxY3F%2FwvkQDE%2BNONBPFpV6DD1x8GSL0W4uHD3SGnUHehiAp3nUSDi4RQcVZ8p0BrlzFI7BDl5BaAJcmYXeSB%2FZK9FCBSUNjbzH5QUbkQJHuNYRZFbJl6VJ9%2BqHCOXG61Bd0cyGuilNhom5uHgXNQpHtTSEwimLKWfAUJX0PULclkiXN9g%2Fvmyaw7U5%2FI3%2BERaSsJnKSMuq0hArLH06inGZhy%2FOnN2TH42fD3wA4Mg5Ay8fFjtuksvGXpks2eE84x8s4egHmC90Lo1v6XzsvDG1dvgkrDLm9fsSh2BtmVqfVbkgmK%2F%2BI%2B0dA6whEQ8awolzQoKpUHGUPzvu95UTi9bXE8FPUrzQFVOIePFO9Y53LfyoD6GWpn%2B9JKFk%2F0NK03vLvnx0F7C3%2ByrhOMzti8v4ej7Kz0SRXL8szm0ey8CusXjq%2BFhBMCdYBy%2BjX2iQay5%2BSprAT5YL3kl2bCbPLK%2Fzz1sWCX%2Blzd%2Fuh9mehVd21ctTtwdBHwtXJ75gT%2BgBBCMOmEwb0GOqUBPS86R4aRvwP1ytWmOQoG8uuX6RpkowFhEAaq3hwLpZoA7MbCx%2B%2Ftct6GkQ%2FluLPvcis7Gqb8w95xuWFqQ7DplCombNNqQdAruvNvpAeiiKQCWCYGVagylI93dCYnmgvJdV10jyD7KFnRnO4QNy11juOI2FqDtdDD4ek3FKtVQJ19uuR%2F%2BZxi5765Po5gXKQBsPK3CFrv71Q5UJl5fQ5e5OyqVIlk&X-Amz-Signature=ef9845370b0d80a13a240ffd2d70bef499d57db8cef82e8ab21164d442d7976a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JG36R3R%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkDHJ4Nldmt%2FiOA%2FzY3f5Klxn%2FDSjWn4a0xYltJBE7yQIgL10zdg4kB8x1FXlOsGp7b1TOlveogRioDM1mAEKox4Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDGECQV88rUW6GoP4yrcA2HhOpJKjgGiBKTcRPLit5aiR95udw614sL7o0JPKO5McwjsaIJi3GBpQcBLT%2Bhq9Pg46EWwiqkp46YwIEO3zXtehqMWMMX%2BWdqo3fSu95NfZoKl3bDkvTlt%2BH8HaxY3F%2FwvkQDE%2BNONBPFpV6DD1x8GSL0W4uHD3SGnUHehiAp3nUSDi4RQcVZ8p0BrlzFI7BDl5BaAJcmYXeSB%2FZK9FCBSUNjbzH5QUbkQJHuNYRZFbJl6VJ9%2BqHCOXG61Bd0cyGuilNhom5uHgXNQpHtTSEwimLKWfAUJX0PULclkiXN9g%2Fvmyaw7U5%2FI3%2BERaSsJnKSMuq0hArLH06inGZhy%2FOnN2TH42fD3wA4Mg5Ay8fFjtuksvGXpks2eE84x8s4egHmC90Lo1v6XzsvDG1dvgkrDLm9fsSh2BtmVqfVbkgmK%2F%2BI%2B0dA6whEQ8awolzQoKpUHGUPzvu95UTi9bXE8FPUrzQFVOIePFO9Y53LfyoD6GWpn%2B9JKFk%2F0NK03vLvnx0F7C3%2ByrhOMzti8v4ej7Kz0SRXL8szm0ey8CusXjq%2BFhBMCdYBy%2BjX2iQay5%2BSprAT5YL3kl2bCbPLK%2Fzz1sWCX%2Blzd%2Fuh9mehVd21ctTtwdBHwtXJ75gT%2BgBBCMOmEwb0GOqUBPS86R4aRvwP1ytWmOQoG8uuX6RpkowFhEAaq3hwLpZoA7MbCx%2B%2Ftct6GkQ%2FluLPvcis7Gqb8w95xuWFqQ7DplCombNNqQdAruvNvpAeiiKQCWCYGVagylI93dCYnmgvJdV10jyD7KFnRnO4QNy11juOI2FqDtdDD4ek3FKtVQJ19uuR%2F%2BZxi5765Po5gXKQBsPK3CFrv71Q5UJl5fQ5e5OyqVIlk&X-Amz-Signature=e3b811db7d6900e9565939292bbc64a8e2810568af27173155af2afc8a25305e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JG36R3R%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkDHJ4Nldmt%2FiOA%2FzY3f5Klxn%2FDSjWn4a0xYltJBE7yQIgL10zdg4kB8x1FXlOsGp7b1TOlveogRioDM1mAEKox4Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDGECQV88rUW6GoP4yrcA2HhOpJKjgGiBKTcRPLit5aiR95udw614sL7o0JPKO5McwjsaIJi3GBpQcBLT%2Bhq9Pg46EWwiqkp46YwIEO3zXtehqMWMMX%2BWdqo3fSu95NfZoKl3bDkvTlt%2BH8HaxY3F%2FwvkQDE%2BNONBPFpV6DD1x8GSL0W4uHD3SGnUHehiAp3nUSDi4RQcVZ8p0BrlzFI7BDl5BaAJcmYXeSB%2FZK9FCBSUNjbzH5QUbkQJHuNYRZFbJl6VJ9%2BqHCOXG61Bd0cyGuilNhom5uHgXNQpHtTSEwimLKWfAUJX0PULclkiXN9g%2Fvmyaw7U5%2FI3%2BERaSsJnKSMuq0hArLH06inGZhy%2FOnN2TH42fD3wA4Mg5Ay8fFjtuksvGXpks2eE84x8s4egHmC90Lo1v6XzsvDG1dvgkrDLm9fsSh2BtmVqfVbkgmK%2F%2BI%2B0dA6whEQ8awolzQoKpUHGUPzvu95UTi9bXE8FPUrzQFVOIePFO9Y53LfyoD6GWpn%2B9JKFk%2F0NK03vLvnx0F7C3%2ByrhOMzti8v4ej7Kz0SRXL8szm0ey8CusXjq%2BFhBMCdYBy%2BjX2iQay5%2BSprAT5YL3kl2bCbPLK%2Fzz1sWCX%2Blzd%2Fuh9mehVd21ctTtwdBHwtXJ75gT%2BgBBCMOmEwb0GOqUBPS86R4aRvwP1ytWmOQoG8uuX6RpkowFhEAaq3hwLpZoA7MbCx%2B%2Ftct6GkQ%2FluLPvcis7Gqb8w95xuWFqQ7DplCombNNqQdAruvNvpAeiiKQCWCYGVagylI93dCYnmgvJdV10jyD7KFnRnO4QNy11juOI2FqDtdDD4ek3FKtVQJ19uuR%2F%2BZxi5765Po5gXKQBsPK3CFrv71Q5UJl5fQ5e5OyqVIlk&X-Amz-Signature=e92522b55970028b6d90e20b8987b13ea15f17d14ba14c43413baeeba48f830e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JG36R3R%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkDHJ4Nldmt%2FiOA%2FzY3f5Klxn%2FDSjWn4a0xYltJBE7yQIgL10zdg4kB8x1FXlOsGp7b1TOlveogRioDM1mAEKox4Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDGECQV88rUW6GoP4yrcA2HhOpJKjgGiBKTcRPLit5aiR95udw614sL7o0JPKO5McwjsaIJi3GBpQcBLT%2Bhq9Pg46EWwiqkp46YwIEO3zXtehqMWMMX%2BWdqo3fSu95NfZoKl3bDkvTlt%2BH8HaxY3F%2FwvkQDE%2BNONBPFpV6DD1x8GSL0W4uHD3SGnUHehiAp3nUSDi4RQcVZ8p0BrlzFI7BDl5BaAJcmYXeSB%2FZK9FCBSUNjbzH5QUbkQJHuNYRZFbJl6VJ9%2BqHCOXG61Bd0cyGuilNhom5uHgXNQpHtTSEwimLKWfAUJX0PULclkiXN9g%2Fvmyaw7U5%2FI3%2BERaSsJnKSMuq0hArLH06inGZhy%2FOnN2TH42fD3wA4Mg5Ay8fFjtuksvGXpks2eE84x8s4egHmC90Lo1v6XzsvDG1dvgkrDLm9fsSh2BtmVqfVbkgmK%2F%2BI%2B0dA6whEQ8awolzQoKpUHGUPzvu95UTi9bXE8FPUrzQFVOIePFO9Y53LfyoD6GWpn%2B9JKFk%2F0NK03vLvnx0F7C3%2ByrhOMzti8v4ej7Kz0SRXL8szm0ey8CusXjq%2BFhBMCdYBy%2BjX2iQay5%2BSprAT5YL3kl2bCbPLK%2Fzz1sWCX%2Blzd%2Fuh9mehVd21ctTtwdBHwtXJ75gT%2BgBBCMOmEwb0GOqUBPS86R4aRvwP1ytWmOQoG8uuX6RpkowFhEAaq3hwLpZoA7MbCx%2B%2Ftct6GkQ%2FluLPvcis7Gqb8w95xuWFqQ7DplCombNNqQdAruvNvpAeiiKQCWCYGVagylI93dCYnmgvJdV10jyD7KFnRnO4QNy11juOI2FqDtdDD4ek3FKtVQJ19uuR%2F%2BZxi5765Po5gXKQBsPK3CFrv71Q5UJl5fQ5e5OyqVIlk&X-Amz-Signature=5d86dc93e49b407cea739c1543943c0f51b916c53a89b079f62efa9ebbbb585d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JG36R3R%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkDHJ4Nldmt%2FiOA%2FzY3f5Klxn%2FDSjWn4a0xYltJBE7yQIgL10zdg4kB8x1FXlOsGp7b1TOlveogRioDM1mAEKox4Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDGECQV88rUW6GoP4yrcA2HhOpJKjgGiBKTcRPLit5aiR95udw614sL7o0JPKO5McwjsaIJi3GBpQcBLT%2Bhq9Pg46EWwiqkp46YwIEO3zXtehqMWMMX%2BWdqo3fSu95NfZoKl3bDkvTlt%2BH8HaxY3F%2FwvkQDE%2BNONBPFpV6DD1x8GSL0W4uHD3SGnUHehiAp3nUSDi4RQcVZ8p0BrlzFI7BDl5BaAJcmYXeSB%2FZK9FCBSUNjbzH5QUbkQJHuNYRZFbJl6VJ9%2BqHCOXG61Bd0cyGuilNhom5uHgXNQpHtTSEwimLKWfAUJX0PULclkiXN9g%2Fvmyaw7U5%2FI3%2BERaSsJnKSMuq0hArLH06inGZhy%2FOnN2TH42fD3wA4Mg5Ay8fFjtuksvGXpks2eE84x8s4egHmC90Lo1v6XzsvDG1dvgkrDLm9fsSh2BtmVqfVbkgmK%2F%2BI%2B0dA6whEQ8awolzQoKpUHGUPzvu95UTi9bXE8FPUrzQFVOIePFO9Y53LfyoD6GWpn%2B9JKFk%2F0NK03vLvnx0F7C3%2ByrhOMzti8v4ej7Kz0SRXL8szm0ey8CusXjq%2BFhBMCdYBy%2BjX2iQay5%2BSprAT5YL3kl2bCbPLK%2Fzz1sWCX%2Blzd%2Fuh9mehVd21ctTtwdBHwtXJ75gT%2BgBBCMOmEwb0GOqUBPS86R4aRvwP1ytWmOQoG8uuX6RpkowFhEAaq3hwLpZoA7MbCx%2B%2Ftct6GkQ%2FluLPvcis7Gqb8w95xuWFqQ7DplCombNNqQdAruvNvpAeiiKQCWCYGVagylI93dCYnmgvJdV10jyD7KFnRnO4QNy11juOI2FqDtdDD4ek3FKtVQJ19uuR%2F%2BZxi5765Po5gXKQBsPK3CFrv71Q5UJl5fQ5e5OyqVIlk&X-Amz-Signature=ce8b1996061b9d8a82ab3164d7030a56b63b7c448124498afc1d327569a4682e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JG36R3R%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkDHJ4Nldmt%2FiOA%2FzY3f5Klxn%2FDSjWn4a0xYltJBE7yQIgL10zdg4kB8x1FXlOsGp7b1TOlveogRioDM1mAEKox4Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDGECQV88rUW6GoP4yrcA2HhOpJKjgGiBKTcRPLit5aiR95udw614sL7o0JPKO5McwjsaIJi3GBpQcBLT%2Bhq9Pg46EWwiqkp46YwIEO3zXtehqMWMMX%2BWdqo3fSu95NfZoKl3bDkvTlt%2BH8HaxY3F%2FwvkQDE%2BNONBPFpV6DD1x8GSL0W4uHD3SGnUHehiAp3nUSDi4RQcVZ8p0BrlzFI7BDl5BaAJcmYXeSB%2FZK9FCBSUNjbzH5QUbkQJHuNYRZFbJl6VJ9%2BqHCOXG61Bd0cyGuilNhom5uHgXNQpHtTSEwimLKWfAUJX0PULclkiXN9g%2Fvmyaw7U5%2FI3%2BERaSsJnKSMuq0hArLH06inGZhy%2FOnN2TH42fD3wA4Mg5Ay8fFjtuksvGXpks2eE84x8s4egHmC90Lo1v6XzsvDG1dvgkrDLm9fsSh2BtmVqfVbkgmK%2F%2BI%2B0dA6whEQ8awolzQoKpUHGUPzvu95UTi9bXE8FPUrzQFVOIePFO9Y53LfyoD6GWpn%2B9JKFk%2F0NK03vLvnx0F7C3%2ByrhOMzti8v4ej7Kz0SRXL8szm0ey8CusXjq%2BFhBMCdYBy%2BjX2iQay5%2BSprAT5YL3kl2bCbPLK%2Fzz1sWCX%2Blzd%2Fuh9mehVd21ctTtwdBHwtXJ75gT%2BgBBCMOmEwb0GOqUBPS86R4aRvwP1ytWmOQoG8uuX6RpkowFhEAaq3hwLpZoA7MbCx%2B%2Ftct6GkQ%2FluLPvcis7Gqb8w95xuWFqQ7DplCombNNqQdAruvNvpAeiiKQCWCYGVagylI93dCYnmgvJdV10jyD7KFnRnO4QNy11juOI2FqDtdDD4ek3FKtVQJ19uuR%2F%2BZxi5765Po5gXKQBsPK3CFrv71Q5UJl5fQ5e5OyqVIlk&X-Amz-Signature=7572c93f2c0e1a1459de0a85e828af59c35f8d99a55c96ccfb6823176ab61e27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JG36R3R%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkDHJ4Nldmt%2FiOA%2FzY3f5Klxn%2FDSjWn4a0xYltJBE7yQIgL10zdg4kB8x1FXlOsGp7b1TOlveogRioDM1mAEKox4Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDGECQV88rUW6GoP4yrcA2HhOpJKjgGiBKTcRPLit5aiR95udw614sL7o0JPKO5McwjsaIJi3GBpQcBLT%2Bhq9Pg46EWwiqkp46YwIEO3zXtehqMWMMX%2BWdqo3fSu95NfZoKl3bDkvTlt%2BH8HaxY3F%2FwvkQDE%2BNONBPFpV6DD1x8GSL0W4uHD3SGnUHehiAp3nUSDi4RQcVZ8p0BrlzFI7BDl5BaAJcmYXeSB%2FZK9FCBSUNjbzH5QUbkQJHuNYRZFbJl6VJ9%2BqHCOXG61Bd0cyGuilNhom5uHgXNQpHtTSEwimLKWfAUJX0PULclkiXN9g%2Fvmyaw7U5%2FI3%2BERaSsJnKSMuq0hArLH06inGZhy%2FOnN2TH42fD3wA4Mg5Ay8fFjtuksvGXpks2eE84x8s4egHmC90Lo1v6XzsvDG1dvgkrDLm9fsSh2BtmVqfVbkgmK%2F%2BI%2B0dA6whEQ8awolzQoKpUHGUPzvu95UTi9bXE8FPUrzQFVOIePFO9Y53LfyoD6GWpn%2B9JKFk%2F0NK03vLvnx0F7C3%2ByrhOMzti8v4ej7Kz0SRXL8szm0ey8CusXjq%2BFhBMCdYBy%2BjX2iQay5%2BSprAT5YL3kl2bCbPLK%2Fzz1sWCX%2Blzd%2Fuh9mehVd21ctTtwdBHwtXJ75gT%2BgBBCMOmEwb0GOqUBPS86R4aRvwP1ytWmOQoG8uuX6RpkowFhEAaq3hwLpZoA7MbCx%2B%2Ftct6GkQ%2FluLPvcis7Gqb8w95xuWFqQ7DplCombNNqQdAruvNvpAeiiKQCWCYGVagylI93dCYnmgvJdV10jyD7KFnRnO4QNy11juOI2FqDtdDD4ek3FKtVQJ19uuR%2F%2BZxi5765Po5gXKQBsPK3CFrv71Q5UJl5fQ5e5OyqVIlk&X-Amz-Signature=52fec945db42e0ad99c530d0d95d5dbf90395c30f871a596dd2c2f248d8cc471&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JG36R3R%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDkDHJ4Nldmt%2FiOA%2FzY3f5Klxn%2FDSjWn4a0xYltJBE7yQIgL10zdg4kB8x1FXlOsGp7b1TOlveogRioDM1mAEKox4Iq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDGECQV88rUW6GoP4yrcA2HhOpJKjgGiBKTcRPLit5aiR95udw614sL7o0JPKO5McwjsaIJi3GBpQcBLT%2Bhq9Pg46EWwiqkp46YwIEO3zXtehqMWMMX%2BWdqo3fSu95NfZoKl3bDkvTlt%2BH8HaxY3F%2FwvkQDE%2BNONBPFpV6DD1x8GSL0W4uHD3SGnUHehiAp3nUSDi4RQcVZ8p0BrlzFI7BDl5BaAJcmYXeSB%2FZK9FCBSUNjbzH5QUbkQJHuNYRZFbJl6VJ9%2BqHCOXG61Bd0cyGuilNhom5uHgXNQpHtTSEwimLKWfAUJX0PULclkiXN9g%2Fvmyaw7U5%2FI3%2BERaSsJnKSMuq0hArLH06inGZhy%2FOnN2TH42fD3wA4Mg5Ay8fFjtuksvGXpks2eE84x8s4egHmC90Lo1v6XzsvDG1dvgkrDLm9fsSh2BtmVqfVbkgmK%2F%2BI%2B0dA6whEQ8awolzQoKpUHGUPzvu95UTi9bXE8FPUrzQFVOIePFO9Y53LfyoD6GWpn%2B9JKFk%2F0NK03vLvnx0F7C3%2ByrhOMzti8v4ej7Kz0SRXL8szm0ey8CusXjq%2BFhBMCdYBy%2BjX2iQay5%2BSprAT5YL3kl2bCbPLK%2Fzz1sWCX%2Blzd%2Fuh9mehVd21ctTtwdBHwtXJ75gT%2BgBBCMOmEwb0GOqUBPS86R4aRvwP1ytWmOQoG8uuX6RpkowFhEAaq3hwLpZoA7MbCx%2B%2Ftct6GkQ%2FluLPvcis7Gqb8w95xuWFqQ7DplCombNNqQdAruvNvpAeiiKQCWCYGVagylI93dCYnmgvJdV10jyD7KFnRnO4QNy11juOI2FqDtdDD4ek3FKtVQJ19uuR%2F%2BZxi5765Po5gXKQBsPK3CFrv71Q5UJl5fQ5e5OyqVIlk&X-Amz-Signature=1aaec035bd55544215c8a1ac261c4e6abee4e1d63ef0220fb47fa4117cf33c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
