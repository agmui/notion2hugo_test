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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VHIV5S%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFGxbd1WfLCD9kffP9tHCwtYKLw71OeDFF%2BLwtDWm48OAiBDXrn%2FcoiGDDnJsZvVF4%2BXOsdLfGvTPAMHQ5umMRr67yr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMaQd%2FtACDI3DCFT0JKtwD4ynVp7tLJNKZd4BCWivSH8Qai2ict4fjeOtQHUk1HH%2BHMwqxtkoDMcT5qu9fnSpAeJvPIT0eH7jHkqoVF%2BLcRJZarsUePMDRcOPDwdnyrt706%2FkzhxMKu20wlgMW73YXzf%2F%2FIsgVxaMm%2B%2FV7m8w7olRcdQWAtXhOPO6Cvw6n%2B1ngyyrgkNWRSOFvvQZMra3vhssHtp5ND32f6rrKN8QAs9hwSwkxOwjB2LZDxcGxSLi3IKLJ3SF3kP%2F%2FOgtsH6Dui5XoMXUiTORb8HAEE0JSj3aQwzzgbZJX4kcS4TXgs8yVxyDlVsP5gZUBdM8eBRT9hN00orvdO74Upl5dUQW%2B%2BfSrHqFa29rSssw4yqpShmzF%2Boa%2F9vtbYhWOk8oXf%2FZUDKm4mivtrw2KLPhIoib7hdUC0ZolWtcxd66wVT6lepw2pDEZikhTH1WCePhg87zL%2Bmn6gCdCjHiQslLQiccZuzj%2Fay9I9ToEk2voB%2BPpRnNADqNwW7QFc1xHXpYZdd7023sh3mIEaQWBkS9321Milwz16TYmQRdzAnghcbne2t%2FIjs5XP6RH5CmV2nlS7aAVfKqSL5DX4rmAZKyoB47Vcv6xI%2Fiu7q%2BMTAuxmjAdXm0kvIhlm27hAe414A4w9ojkwgY6pgGTxuDF%2BqlhkEQ9aJUcdzJgXmndZIgJJhZOpklkRXtrTGHujEccrHjsv2C5sUDai%2F4Vtjl4Ni9jWxwoZBlLXqzgmqrh8Q7GjDcevHc9O5Dsczjro3g145sHAcYk4Ft4x%2FFVFQ%2FNOciAzFiZ3DJ8rR%2BLAyLB%2FxmATODYNi9IEWcixuUNGy4ouNWiPP6OnqObhF10IsfamxOgGitlVAxlEa4JAJousrNV&X-Amz-Signature=d62c07f22de01fb4f8159c00feaef9c0ad641376d3044fd3598d9fc2b904e839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VHIV5S%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFGxbd1WfLCD9kffP9tHCwtYKLw71OeDFF%2BLwtDWm48OAiBDXrn%2FcoiGDDnJsZvVF4%2BXOsdLfGvTPAMHQ5umMRr67yr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMaQd%2FtACDI3DCFT0JKtwD4ynVp7tLJNKZd4BCWivSH8Qai2ict4fjeOtQHUk1HH%2BHMwqxtkoDMcT5qu9fnSpAeJvPIT0eH7jHkqoVF%2BLcRJZarsUePMDRcOPDwdnyrt706%2FkzhxMKu20wlgMW73YXzf%2F%2FIsgVxaMm%2B%2FV7m8w7olRcdQWAtXhOPO6Cvw6n%2B1ngyyrgkNWRSOFvvQZMra3vhssHtp5ND32f6rrKN8QAs9hwSwkxOwjB2LZDxcGxSLi3IKLJ3SF3kP%2F%2FOgtsH6Dui5XoMXUiTORb8HAEE0JSj3aQwzzgbZJX4kcS4TXgs8yVxyDlVsP5gZUBdM8eBRT9hN00orvdO74Upl5dUQW%2B%2BfSrHqFa29rSssw4yqpShmzF%2Boa%2F9vtbYhWOk8oXf%2FZUDKm4mivtrw2KLPhIoib7hdUC0ZolWtcxd66wVT6lepw2pDEZikhTH1WCePhg87zL%2Bmn6gCdCjHiQslLQiccZuzj%2Fay9I9ToEk2voB%2BPpRnNADqNwW7QFc1xHXpYZdd7023sh3mIEaQWBkS9321Milwz16TYmQRdzAnghcbne2t%2FIjs5XP6RH5CmV2nlS7aAVfKqSL5DX4rmAZKyoB47Vcv6xI%2Fiu7q%2BMTAuxmjAdXm0kvIhlm27hAe414A4w9ojkwgY6pgGTxuDF%2BqlhkEQ9aJUcdzJgXmndZIgJJhZOpklkRXtrTGHujEccrHjsv2C5sUDai%2F4Vtjl4Ni9jWxwoZBlLXqzgmqrh8Q7GjDcevHc9O5Dsczjro3g145sHAcYk4Ft4x%2FFVFQ%2FNOciAzFiZ3DJ8rR%2BLAyLB%2FxmATODYNi9IEWcixuUNGy4ouNWiPP6OnqObhF10IsfamxOgGitlVAxlEa4JAJousrNV&X-Amz-Signature=cedb284156956a89c4e45a7aa3b5de9e89d4c84332423a0f51121187d3923c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VHIV5S%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFGxbd1WfLCD9kffP9tHCwtYKLw71OeDFF%2BLwtDWm48OAiBDXrn%2FcoiGDDnJsZvVF4%2BXOsdLfGvTPAMHQ5umMRr67yr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMaQd%2FtACDI3DCFT0JKtwD4ynVp7tLJNKZd4BCWivSH8Qai2ict4fjeOtQHUk1HH%2BHMwqxtkoDMcT5qu9fnSpAeJvPIT0eH7jHkqoVF%2BLcRJZarsUePMDRcOPDwdnyrt706%2FkzhxMKu20wlgMW73YXzf%2F%2FIsgVxaMm%2B%2FV7m8w7olRcdQWAtXhOPO6Cvw6n%2B1ngyyrgkNWRSOFvvQZMra3vhssHtp5ND32f6rrKN8QAs9hwSwkxOwjB2LZDxcGxSLi3IKLJ3SF3kP%2F%2FOgtsH6Dui5XoMXUiTORb8HAEE0JSj3aQwzzgbZJX4kcS4TXgs8yVxyDlVsP5gZUBdM8eBRT9hN00orvdO74Upl5dUQW%2B%2BfSrHqFa29rSssw4yqpShmzF%2Boa%2F9vtbYhWOk8oXf%2FZUDKm4mivtrw2KLPhIoib7hdUC0ZolWtcxd66wVT6lepw2pDEZikhTH1WCePhg87zL%2Bmn6gCdCjHiQslLQiccZuzj%2Fay9I9ToEk2voB%2BPpRnNADqNwW7QFc1xHXpYZdd7023sh3mIEaQWBkS9321Milwz16TYmQRdzAnghcbne2t%2FIjs5XP6RH5CmV2nlS7aAVfKqSL5DX4rmAZKyoB47Vcv6xI%2Fiu7q%2BMTAuxmjAdXm0kvIhlm27hAe414A4w9ojkwgY6pgGTxuDF%2BqlhkEQ9aJUcdzJgXmndZIgJJhZOpklkRXtrTGHujEccrHjsv2C5sUDai%2F4Vtjl4Ni9jWxwoZBlLXqzgmqrh8Q7GjDcevHc9O5Dsczjro3g145sHAcYk4Ft4x%2FFVFQ%2FNOciAzFiZ3DJ8rR%2BLAyLB%2FxmATODYNi9IEWcixuUNGy4ouNWiPP6OnqObhF10IsfamxOgGitlVAxlEa4JAJousrNV&X-Amz-Signature=3c6bdb82d0c6fd02a20dbb1797b24c8f15f58b18daad2fec13c4872e8ffd3299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VHIV5S%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFGxbd1WfLCD9kffP9tHCwtYKLw71OeDFF%2BLwtDWm48OAiBDXrn%2FcoiGDDnJsZvVF4%2BXOsdLfGvTPAMHQ5umMRr67yr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMaQd%2FtACDI3DCFT0JKtwD4ynVp7tLJNKZd4BCWivSH8Qai2ict4fjeOtQHUk1HH%2BHMwqxtkoDMcT5qu9fnSpAeJvPIT0eH7jHkqoVF%2BLcRJZarsUePMDRcOPDwdnyrt706%2FkzhxMKu20wlgMW73YXzf%2F%2FIsgVxaMm%2B%2FV7m8w7olRcdQWAtXhOPO6Cvw6n%2B1ngyyrgkNWRSOFvvQZMra3vhssHtp5ND32f6rrKN8QAs9hwSwkxOwjB2LZDxcGxSLi3IKLJ3SF3kP%2F%2FOgtsH6Dui5XoMXUiTORb8HAEE0JSj3aQwzzgbZJX4kcS4TXgs8yVxyDlVsP5gZUBdM8eBRT9hN00orvdO74Upl5dUQW%2B%2BfSrHqFa29rSssw4yqpShmzF%2Boa%2F9vtbYhWOk8oXf%2FZUDKm4mivtrw2KLPhIoib7hdUC0ZolWtcxd66wVT6lepw2pDEZikhTH1WCePhg87zL%2Bmn6gCdCjHiQslLQiccZuzj%2Fay9I9ToEk2voB%2BPpRnNADqNwW7QFc1xHXpYZdd7023sh3mIEaQWBkS9321Milwz16TYmQRdzAnghcbne2t%2FIjs5XP6RH5CmV2nlS7aAVfKqSL5DX4rmAZKyoB47Vcv6xI%2Fiu7q%2BMTAuxmjAdXm0kvIhlm27hAe414A4w9ojkwgY6pgGTxuDF%2BqlhkEQ9aJUcdzJgXmndZIgJJhZOpklkRXtrTGHujEccrHjsv2C5sUDai%2F4Vtjl4Ni9jWxwoZBlLXqzgmqrh8Q7GjDcevHc9O5Dsczjro3g145sHAcYk4Ft4x%2FFVFQ%2FNOciAzFiZ3DJ8rR%2BLAyLB%2FxmATODYNi9IEWcixuUNGy4ouNWiPP6OnqObhF10IsfamxOgGitlVAxlEa4JAJousrNV&X-Amz-Signature=84ec5fa5b3042e7b9c52b3296ab6e6328da31509bb7fb033900d6e7d6fd39352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VHIV5S%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFGxbd1WfLCD9kffP9tHCwtYKLw71OeDFF%2BLwtDWm48OAiBDXrn%2FcoiGDDnJsZvVF4%2BXOsdLfGvTPAMHQ5umMRr67yr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMaQd%2FtACDI3DCFT0JKtwD4ynVp7tLJNKZd4BCWivSH8Qai2ict4fjeOtQHUk1HH%2BHMwqxtkoDMcT5qu9fnSpAeJvPIT0eH7jHkqoVF%2BLcRJZarsUePMDRcOPDwdnyrt706%2FkzhxMKu20wlgMW73YXzf%2F%2FIsgVxaMm%2B%2FV7m8w7olRcdQWAtXhOPO6Cvw6n%2B1ngyyrgkNWRSOFvvQZMra3vhssHtp5ND32f6rrKN8QAs9hwSwkxOwjB2LZDxcGxSLi3IKLJ3SF3kP%2F%2FOgtsH6Dui5XoMXUiTORb8HAEE0JSj3aQwzzgbZJX4kcS4TXgs8yVxyDlVsP5gZUBdM8eBRT9hN00orvdO74Upl5dUQW%2B%2BfSrHqFa29rSssw4yqpShmzF%2Boa%2F9vtbYhWOk8oXf%2FZUDKm4mivtrw2KLPhIoib7hdUC0ZolWtcxd66wVT6lepw2pDEZikhTH1WCePhg87zL%2Bmn6gCdCjHiQslLQiccZuzj%2Fay9I9ToEk2voB%2BPpRnNADqNwW7QFc1xHXpYZdd7023sh3mIEaQWBkS9321Milwz16TYmQRdzAnghcbne2t%2FIjs5XP6RH5CmV2nlS7aAVfKqSL5DX4rmAZKyoB47Vcv6xI%2Fiu7q%2BMTAuxmjAdXm0kvIhlm27hAe414A4w9ojkwgY6pgGTxuDF%2BqlhkEQ9aJUcdzJgXmndZIgJJhZOpklkRXtrTGHujEccrHjsv2C5sUDai%2F4Vtjl4Ni9jWxwoZBlLXqzgmqrh8Q7GjDcevHc9O5Dsczjro3g145sHAcYk4Ft4x%2FFVFQ%2FNOciAzFiZ3DJ8rR%2BLAyLB%2FxmATODYNi9IEWcixuUNGy4ouNWiPP6OnqObhF10IsfamxOgGitlVAxlEa4JAJousrNV&X-Amz-Signature=cf059a5c6273a4c7e5f0bbf2ac6e8a82ac755f731dc689cf797e851f417e514e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VHIV5S%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFGxbd1WfLCD9kffP9tHCwtYKLw71OeDFF%2BLwtDWm48OAiBDXrn%2FcoiGDDnJsZvVF4%2BXOsdLfGvTPAMHQ5umMRr67yr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMaQd%2FtACDI3DCFT0JKtwD4ynVp7tLJNKZd4BCWivSH8Qai2ict4fjeOtQHUk1HH%2BHMwqxtkoDMcT5qu9fnSpAeJvPIT0eH7jHkqoVF%2BLcRJZarsUePMDRcOPDwdnyrt706%2FkzhxMKu20wlgMW73YXzf%2F%2FIsgVxaMm%2B%2FV7m8w7olRcdQWAtXhOPO6Cvw6n%2B1ngyyrgkNWRSOFvvQZMra3vhssHtp5ND32f6rrKN8QAs9hwSwkxOwjB2LZDxcGxSLi3IKLJ3SF3kP%2F%2FOgtsH6Dui5XoMXUiTORb8HAEE0JSj3aQwzzgbZJX4kcS4TXgs8yVxyDlVsP5gZUBdM8eBRT9hN00orvdO74Upl5dUQW%2B%2BfSrHqFa29rSssw4yqpShmzF%2Boa%2F9vtbYhWOk8oXf%2FZUDKm4mivtrw2KLPhIoib7hdUC0ZolWtcxd66wVT6lepw2pDEZikhTH1WCePhg87zL%2Bmn6gCdCjHiQslLQiccZuzj%2Fay9I9ToEk2voB%2BPpRnNADqNwW7QFc1xHXpYZdd7023sh3mIEaQWBkS9321Milwz16TYmQRdzAnghcbne2t%2FIjs5XP6RH5CmV2nlS7aAVfKqSL5DX4rmAZKyoB47Vcv6xI%2Fiu7q%2BMTAuxmjAdXm0kvIhlm27hAe414A4w9ojkwgY6pgGTxuDF%2BqlhkEQ9aJUcdzJgXmndZIgJJhZOpklkRXtrTGHujEccrHjsv2C5sUDai%2F4Vtjl4Ni9jWxwoZBlLXqzgmqrh8Q7GjDcevHc9O5Dsczjro3g145sHAcYk4Ft4x%2FFVFQ%2FNOciAzFiZ3DJ8rR%2BLAyLB%2FxmATODYNi9IEWcixuUNGy4ouNWiPP6OnqObhF10IsfamxOgGitlVAxlEa4JAJousrNV&X-Amz-Signature=6303eba70c13116f0cc4a0aa4bb6657602a499b5398ae38f5f312b8dcc7e4de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VHIV5S%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFGxbd1WfLCD9kffP9tHCwtYKLw71OeDFF%2BLwtDWm48OAiBDXrn%2FcoiGDDnJsZvVF4%2BXOsdLfGvTPAMHQ5umMRr67yr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMaQd%2FtACDI3DCFT0JKtwD4ynVp7tLJNKZd4BCWivSH8Qai2ict4fjeOtQHUk1HH%2BHMwqxtkoDMcT5qu9fnSpAeJvPIT0eH7jHkqoVF%2BLcRJZarsUePMDRcOPDwdnyrt706%2FkzhxMKu20wlgMW73YXzf%2F%2FIsgVxaMm%2B%2FV7m8w7olRcdQWAtXhOPO6Cvw6n%2B1ngyyrgkNWRSOFvvQZMra3vhssHtp5ND32f6rrKN8QAs9hwSwkxOwjB2LZDxcGxSLi3IKLJ3SF3kP%2F%2FOgtsH6Dui5XoMXUiTORb8HAEE0JSj3aQwzzgbZJX4kcS4TXgs8yVxyDlVsP5gZUBdM8eBRT9hN00orvdO74Upl5dUQW%2B%2BfSrHqFa29rSssw4yqpShmzF%2Boa%2F9vtbYhWOk8oXf%2FZUDKm4mivtrw2KLPhIoib7hdUC0ZolWtcxd66wVT6lepw2pDEZikhTH1WCePhg87zL%2Bmn6gCdCjHiQslLQiccZuzj%2Fay9I9ToEk2voB%2BPpRnNADqNwW7QFc1xHXpYZdd7023sh3mIEaQWBkS9321Milwz16TYmQRdzAnghcbne2t%2FIjs5XP6RH5CmV2nlS7aAVfKqSL5DX4rmAZKyoB47Vcv6xI%2Fiu7q%2BMTAuxmjAdXm0kvIhlm27hAe414A4w9ojkwgY6pgGTxuDF%2BqlhkEQ9aJUcdzJgXmndZIgJJhZOpklkRXtrTGHujEccrHjsv2C5sUDai%2F4Vtjl4Ni9jWxwoZBlLXqzgmqrh8Q7GjDcevHc9O5Dsczjro3g145sHAcYk4Ft4x%2FFVFQ%2FNOciAzFiZ3DJ8rR%2BLAyLB%2FxmATODYNi9IEWcixuUNGy4ouNWiPP6OnqObhF10IsfamxOgGitlVAxlEa4JAJousrNV&X-Amz-Signature=27a457fd0dfa18746dfe442bee918346680be4c651518724065c595fe7f34bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7VHIV5S%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFGxbd1WfLCD9kffP9tHCwtYKLw71OeDFF%2BLwtDWm48OAiBDXrn%2FcoiGDDnJsZvVF4%2BXOsdLfGvTPAMHQ5umMRr67yr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMaQd%2FtACDI3DCFT0JKtwD4ynVp7tLJNKZd4BCWivSH8Qai2ict4fjeOtQHUk1HH%2BHMwqxtkoDMcT5qu9fnSpAeJvPIT0eH7jHkqoVF%2BLcRJZarsUePMDRcOPDwdnyrt706%2FkzhxMKu20wlgMW73YXzf%2F%2FIsgVxaMm%2B%2FV7m8w7olRcdQWAtXhOPO6Cvw6n%2B1ngyyrgkNWRSOFvvQZMra3vhssHtp5ND32f6rrKN8QAs9hwSwkxOwjB2LZDxcGxSLi3IKLJ3SF3kP%2F%2FOgtsH6Dui5XoMXUiTORb8HAEE0JSj3aQwzzgbZJX4kcS4TXgs8yVxyDlVsP5gZUBdM8eBRT9hN00orvdO74Upl5dUQW%2B%2BfSrHqFa29rSssw4yqpShmzF%2Boa%2F9vtbYhWOk8oXf%2FZUDKm4mivtrw2KLPhIoib7hdUC0ZolWtcxd66wVT6lepw2pDEZikhTH1WCePhg87zL%2Bmn6gCdCjHiQslLQiccZuzj%2Fay9I9ToEk2voB%2BPpRnNADqNwW7QFc1xHXpYZdd7023sh3mIEaQWBkS9321Milwz16TYmQRdzAnghcbne2t%2FIjs5XP6RH5CmV2nlS7aAVfKqSL5DX4rmAZKyoB47Vcv6xI%2Fiu7q%2BMTAuxmjAdXm0kvIhlm27hAe414A4w9ojkwgY6pgGTxuDF%2BqlhkEQ9aJUcdzJgXmndZIgJJhZOpklkRXtrTGHujEccrHjsv2C5sUDai%2F4Vtjl4Ni9jWxwoZBlLXqzgmqrh8Q7GjDcevHc9O5Dsczjro3g145sHAcYk4Ft4x%2FFVFQ%2FNOciAzFiZ3DJ8rR%2BLAyLB%2FxmATODYNi9IEWcixuUNGy4ouNWiPP6OnqObhF10IsfamxOgGitlVAxlEa4JAJousrNV&X-Amz-Signature=28d62d411cae2850f0bf99e84630681184ef80848627e1176ed24e6fcca94ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
