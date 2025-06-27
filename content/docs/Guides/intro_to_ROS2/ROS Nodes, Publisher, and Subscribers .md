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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFZEQQY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC67IHTxqIQFDJzYd4cuvPgAZqvSO5DidQYDB29A2M1tQIgV4x0QeCq%2Bk6VRax5UAmmE6BxyORmLGOCaX77edlkrtcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJt1DzGXEiw%2FLP7L0ircA9o%2Bls9ALSlkUE28jU%2BUCsbL4vNS6ixEIQj9UJnSjc8hYqAO3GzNVFIdf%2FClL5vnY6n0NYoodQHqm4znbYQVLfm1O7UZfY5VGUSgzyyZfHkCTWs11jKKv%2FWx%2B94NEQsvHmfFcUaHgK2oPKPa%2BTwCbXswgR288VuI3D3RJZ9NLuKFyyBYetIzd7T0k4SsvyOdKujgN8pBlyzMrT7JTOG%2BSyy1CxuR0rVjaeuLcNqvEVFHZzZQQsat5dMdqJywrEYPBITwd1D9eOllz9N5yqvaFyegVp0%2F9HrUD9FXzelEIm8Im5HH7hzNRmLR%2FOiefHL%2BqWNIuGHRoPLWuq%2BjE3XLmIS4ItvC0yh502tII5K8smw8awlUhOVyN0kc7NLNsWuyI7jr2Btf7Ffy6uFUu7GyYQ75Wf7RnX8MfDPfTq4%2Fdi4H4cZqcKiaNubrSuuu%2B%2BaCNV48jUMHMYNb%2BgPM95JrCXSJRj8s0qKpqopbheK%2BUAmVn0gBENBY7rUED32aprfamuWEGu%2BClxtXNMttugETcTJw7DXPu2fBLHPtETMBji265c28%2BBTUez1wekP%2BVKNZ5L0bD6BSYOoNrbGiuGnpgLPlbPrbECJMwGnHCeAh8gAxUeN%2F5d2KgUcfzKCGMOjK%2BMIGOqUBeDAU1nbsuoxwjWAfV7M9PBu6gcqRIs3bR3zD2DvqeKBOKGairGEZF7f16ZLXxlWUlx1f5LaAeKyZcz2WIbvpTAMk14rULJaib68VPFYiNqUjIoyrdNu2%2F2Va1U7Y55PFk0z3SHm4%2FM%2FNIbb1rXKZrk%2BMncqw6yHG4gg1BunkAyYz0e%2B5ARd5OEq34uhk67banMfGRNFvsEpK1rHFLep9jnaCuZaV&X-Amz-Signature=b856d6210dfdb73621f88dba007f65bf5c75b314ddb704baec69b2e5fcf37d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFZEQQY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC67IHTxqIQFDJzYd4cuvPgAZqvSO5DidQYDB29A2M1tQIgV4x0QeCq%2Bk6VRax5UAmmE6BxyORmLGOCaX77edlkrtcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJt1DzGXEiw%2FLP7L0ircA9o%2Bls9ALSlkUE28jU%2BUCsbL4vNS6ixEIQj9UJnSjc8hYqAO3GzNVFIdf%2FClL5vnY6n0NYoodQHqm4znbYQVLfm1O7UZfY5VGUSgzyyZfHkCTWs11jKKv%2FWx%2B94NEQsvHmfFcUaHgK2oPKPa%2BTwCbXswgR288VuI3D3RJZ9NLuKFyyBYetIzd7T0k4SsvyOdKujgN8pBlyzMrT7JTOG%2BSyy1CxuR0rVjaeuLcNqvEVFHZzZQQsat5dMdqJywrEYPBITwd1D9eOllz9N5yqvaFyegVp0%2F9HrUD9FXzelEIm8Im5HH7hzNRmLR%2FOiefHL%2BqWNIuGHRoPLWuq%2BjE3XLmIS4ItvC0yh502tII5K8smw8awlUhOVyN0kc7NLNsWuyI7jr2Btf7Ffy6uFUu7GyYQ75Wf7RnX8MfDPfTq4%2Fdi4H4cZqcKiaNubrSuuu%2B%2BaCNV48jUMHMYNb%2BgPM95JrCXSJRj8s0qKpqopbheK%2BUAmVn0gBENBY7rUED32aprfamuWEGu%2BClxtXNMttugETcTJw7DXPu2fBLHPtETMBji265c28%2BBTUez1wekP%2BVKNZ5L0bD6BSYOoNrbGiuGnpgLPlbPrbECJMwGnHCeAh8gAxUeN%2F5d2KgUcfzKCGMOjK%2BMIGOqUBeDAU1nbsuoxwjWAfV7M9PBu6gcqRIs3bR3zD2DvqeKBOKGairGEZF7f16ZLXxlWUlx1f5LaAeKyZcz2WIbvpTAMk14rULJaib68VPFYiNqUjIoyrdNu2%2F2Va1U7Y55PFk0z3SHm4%2FM%2FNIbb1rXKZrk%2BMncqw6yHG4gg1BunkAyYz0e%2B5ARd5OEq34uhk67banMfGRNFvsEpK1rHFLep9jnaCuZaV&X-Amz-Signature=1f528d13a26a0746f50f8eaec7adbeb5361f097b9e3079a15589ebc12c988cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFZEQQY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC67IHTxqIQFDJzYd4cuvPgAZqvSO5DidQYDB29A2M1tQIgV4x0QeCq%2Bk6VRax5UAmmE6BxyORmLGOCaX77edlkrtcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJt1DzGXEiw%2FLP7L0ircA9o%2Bls9ALSlkUE28jU%2BUCsbL4vNS6ixEIQj9UJnSjc8hYqAO3GzNVFIdf%2FClL5vnY6n0NYoodQHqm4znbYQVLfm1O7UZfY5VGUSgzyyZfHkCTWs11jKKv%2FWx%2B94NEQsvHmfFcUaHgK2oPKPa%2BTwCbXswgR288VuI3D3RJZ9NLuKFyyBYetIzd7T0k4SsvyOdKujgN8pBlyzMrT7JTOG%2BSyy1CxuR0rVjaeuLcNqvEVFHZzZQQsat5dMdqJywrEYPBITwd1D9eOllz9N5yqvaFyegVp0%2F9HrUD9FXzelEIm8Im5HH7hzNRmLR%2FOiefHL%2BqWNIuGHRoPLWuq%2BjE3XLmIS4ItvC0yh502tII5K8smw8awlUhOVyN0kc7NLNsWuyI7jr2Btf7Ffy6uFUu7GyYQ75Wf7RnX8MfDPfTq4%2Fdi4H4cZqcKiaNubrSuuu%2B%2BaCNV48jUMHMYNb%2BgPM95JrCXSJRj8s0qKpqopbheK%2BUAmVn0gBENBY7rUED32aprfamuWEGu%2BClxtXNMttugETcTJw7DXPu2fBLHPtETMBji265c28%2BBTUez1wekP%2BVKNZ5L0bD6BSYOoNrbGiuGnpgLPlbPrbECJMwGnHCeAh8gAxUeN%2F5d2KgUcfzKCGMOjK%2BMIGOqUBeDAU1nbsuoxwjWAfV7M9PBu6gcqRIs3bR3zD2DvqeKBOKGairGEZF7f16ZLXxlWUlx1f5LaAeKyZcz2WIbvpTAMk14rULJaib68VPFYiNqUjIoyrdNu2%2F2Va1U7Y55PFk0z3SHm4%2FM%2FNIbb1rXKZrk%2BMncqw6yHG4gg1BunkAyYz0e%2B5ARd5OEq34uhk67banMfGRNFvsEpK1rHFLep9jnaCuZaV&X-Amz-Signature=4890059cf150c764dde0634dbfcf88dcab015e9c0fbb6dd9250bad7253a64ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFZEQQY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC67IHTxqIQFDJzYd4cuvPgAZqvSO5DidQYDB29A2M1tQIgV4x0QeCq%2Bk6VRax5UAmmE6BxyORmLGOCaX77edlkrtcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJt1DzGXEiw%2FLP7L0ircA9o%2Bls9ALSlkUE28jU%2BUCsbL4vNS6ixEIQj9UJnSjc8hYqAO3GzNVFIdf%2FClL5vnY6n0NYoodQHqm4znbYQVLfm1O7UZfY5VGUSgzyyZfHkCTWs11jKKv%2FWx%2B94NEQsvHmfFcUaHgK2oPKPa%2BTwCbXswgR288VuI3D3RJZ9NLuKFyyBYetIzd7T0k4SsvyOdKujgN8pBlyzMrT7JTOG%2BSyy1CxuR0rVjaeuLcNqvEVFHZzZQQsat5dMdqJywrEYPBITwd1D9eOllz9N5yqvaFyegVp0%2F9HrUD9FXzelEIm8Im5HH7hzNRmLR%2FOiefHL%2BqWNIuGHRoPLWuq%2BjE3XLmIS4ItvC0yh502tII5K8smw8awlUhOVyN0kc7NLNsWuyI7jr2Btf7Ffy6uFUu7GyYQ75Wf7RnX8MfDPfTq4%2Fdi4H4cZqcKiaNubrSuuu%2B%2BaCNV48jUMHMYNb%2BgPM95JrCXSJRj8s0qKpqopbheK%2BUAmVn0gBENBY7rUED32aprfamuWEGu%2BClxtXNMttugETcTJw7DXPu2fBLHPtETMBji265c28%2BBTUez1wekP%2BVKNZ5L0bD6BSYOoNrbGiuGnpgLPlbPrbECJMwGnHCeAh8gAxUeN%2F5d2KgUcfzKCGMOjK%2BMIGOqUBeDAU1nbsuoxwjWAfV7M9PBu6gcqRIs3bR3zD2DvqeKBOKGairGEZF7f16ZLXxlWUlx1f5LaAeKyZcz2WIbvpTAMk14rULJaib68VPFYiNqUjIoyrdNu2%2F2Va1U7Y55PFk0z3SHm4%2FM%2FNIbb1rXKZrk%2BMncqw6yHG4gg1BunkAyYz0e%2B5ARd5OEq34uhk67banMfGRNFvsEpK1rHFLep9jnaCuZaV&X-Amz-Signature=03c4942ed633cef57437d53258250c7c23f02e0751c23d8354a5e63b5c10fd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFZEQQY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC67IHTxqIQFDJzYd4cuvPgAZqvSO5DidQYDB29A2M1tQIgV4x0QeCq%2Bk6VRax5UAmmE6BxyORmLGOCaX77edlkrtcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJt1DzGXEiw%2FLP7L0ircA9o%2Bls9ALSlkUE28jU%2BUCsbL4vNS6ixEIQj9UJnSjc8hYqAO3GzNVFIdf%2FClL5vnY6n0NYoodQHqm4znbYQVLfm1O7UZfY5VGUSgzyyZfHkCTWs11jKKv%2FWx%2B94NEQsvHmfFcUaHgK2oPKPa%2BTwCbXswgR288VuI3D3RJZ9NLuKFyyBYetIzd7T0k4SsvyOdKujgN8pBlyzMrT7JTOG%2BSyy1CxuR0rVjaeuLcNqvEVFHZzZQQsat5dMdqJywrEYPBITwd1D9eOllz9N5yqvaFyegVp0%2F9HrUD9FXzelEIm8Im5HH7hzNRmLR%2FOiefHL%2BqWNIuGHRoPLWuq%2BjE3XLmIS4ItvC0yh502tII5K8smw8awlUhOVyN0kc7NLNsWuyI7jr2Btf7Ffy6uFUu7GyYQ75Wf7RnX8MfDPfTq4%2Fdi4H4cZqcKiaNubrSuuu%2B%2BaCNV48jUMHMYNb%2BgPM95JrCXSJRj8s0qKpqopbheK%2BUAmVn0gBENBY7rUED32aprfamuWEGu%2BClxtXNMttugETcTJw7DXPu2fBLHPtETMBji265c28%2BBTUez1wekP%2BVKNZ5L0bD6BSYOoNrbGiuGnpgLPlbPrbECJMwGnHCeAh8gAxUeN%2F5d2KgUcfzKCGMOjK%2BMIGOqUBeDAU1nbsuoxwjWAfV7M9PBu6gcqRIs3bR3zD2DvqeKBOKGairGEZF7f16ZLXxlWUlx1f5LaAeKyZcz2WIbvpTAMk14rULJaib68VPFYiNqUjIoyrdNu2%2F2Va1U7Y55PFk0z3SHm4%2FM%2FNIbb1rXKZrk%2BMncqw6yHG4gg1BunkAyYz0e%2B5ARd5OEq34uhk67banMfGRNFvsEpK1rHFLep9jnaCuZaV&X-Amz-Signature=d1ac208b04f335580eb5488e125036e4ffef3c459f6ce60a0ec7f6c316c4d207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFZEQQY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC67IHTxqIQFDJzYd4cuvPgAZqvSO5DidQYDB29A2M1tQIgV4x0QeCq%2Bk6VRax5UAmmE6BxyORmLGOCaX77edlkrtcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJt1DzGXEiw%2FLP7L0ircA9o%2Bls9ALSlkUE28jU%2BUCsbL4vNS6ixEIQj9UJnSjc8hYqAO3GzNVFIdf%2FClL5vnY6n0NYoodQHqm4znbYQVLfm1O7UZfY5VGUSgzyyZfHkCTWs11jKKv%2FWx%2B94NEQsvHmfFcUaHgK2oPKPa%2BTwCbXswgR288VuI3D3RJZ9NLuKFyyBYetIzd7T0k4SsvyOdKujgN8pBlyzMrT7JTOG%2BSyy1CxuR0rVjaeuLcNqvEVFHZzZQQsat5dMdqJywrEYPBITwd1D9eOllz9N5yqvaFyegVp0%2F9HrUD9FXzelEIm8Im5HH7hzNRmLR%2FOiefHL%2BqWNIuGHRoPLWuq%2BjE3XLmIS4ItvC0yh502tII5K8smw8awlUhOVyN0kc7NLNsWuyI7jr2Btf7Ffy6uFUu7GyYQ75Wf7RnX8MfDPfTq4%2Fdi4H4cZqcKiaNubrSuuu%2B%2BaCNV48jUMHMYNb%2BgPM95JrCXSJRj8s0qKpqopbheK%2BUAmVn0gBENBY7rUED32aprfamuWEGu%2BClxtXNMttugETcTJw7DXPu2fBLHPtETMBji265c28%2BBTUez1wekP%2BVKNZ5L0bD6BSYOoNrbGiuGnpgLPlbPrbECJMwGnHCeAh8gAxUeN%2F5d2KgUcfzKCGMOjK%2BMIGOqUBeDAU1nbsuoxwjWAfV7M9PBu6gcqRIs3bR3zD2DvqeKBOKGairGEZF7f16ZLXxlWUlx1f5LaAeKyZcz2WIbvpTAMk14rULJaib68VPFYiNqUjIoyrdNu2%2F2Va1U7Y55PFk0z3SHm4%2FM%2FNIbb1rXKZrk%2BMncqw6yHG4gg1BunkAyYz0e%2B5ARd5OEq34uhk67banMfGRNFvsEpK1rHFLep9jnaCuZaV&X-Amz-Signature=4b9cd8553844ed4c95a88e3ceecb08364ad5d8cc7085a43d63cfd470dc098b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFZEQQY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC67IHTxqIQFDJzYd4cuvPgAZqvSO5DidQYDB29A2M1tQIgV4x0QeCq%2Bk6VRax5UAmmE6BxyORmLGOCaX77edlkrtcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJt1DzGXEiw%2FLP7L0ircA9o%2Bls9ALSlkUE28jU%2BUCsbL4vNS6ixEIQj9UJnSjc8hYqAO3GzNVFIdf%2FClL5vnY6n0NYoodQHqm4znbYQVLfm1O7UZfY5VGUSgzyyZfHkCTWs11jKKv%2FWx%2B94NEQsvHmfFcUaHgK2oPKPa%2BTwCbXswgR288VuI3D3RJZ9NLuKFyyBYetIzd7T0k4SsvyOdKujgN8pBlyzMrT7JTOG%2BSyy1CxuR0rVjaeuLcNqvEVFHZzZQQsat5dMdqJywrEYPBITwd1D9eOllz9N5yqvaFyegVp0%2F9HrUD9FXzelEIm8Im5HH7hzNRmLR%2FOiefHL%2BqWNIuGHRoPLWuq%2BjE3XLmIS4ItvC0yh502tII5K8smw8awlUhOVyN0kc7NLNsWuyI7jr2Btf7Ffy6uFUu7GyYQ75Wf7RnX8MfDPfTq4%2Fdi4H4cZqcKiaNubrSuuu%2B%2BaCNV48jUMHMYNb%2BgPM95JrCXSJRj8s0qKpqopbheK%2BUAmVn0gBENBY7rUED32aprfamuWEGu%2BClxtXNMttugETcTJw7DXPu2fBLHPtETMBji265c28%2BBTUez1wekP%2BVKNZ5L0bD6BSYOoNrbGiuGnpgLPlbPrbECJMwGnHCeAh8gAxUeN%2F5d2KgUcfzKCGMOjK%2BMIGOqUBeDAU1nbsuoxwjWAfV7M9PBu6gcqRIs3bR3zD2DvqeKBOKGairGEZF7f16ZLXxlWUlx1f5LaAeKyZcz2WIbvpTAMk14rULJaib68VPFYiNqUjIoyrdNu2%2F2Va1U7Y55PFk0z3SHm4%2FM%2FNIbb1rXKZrk%2BMncqw6yHG4gg1BunkAyYz0e%2B5ARd5OEq34uhk67banMfGRNFvsEpK1rHFLep9jnaCuZaV&X-Amz-Signature=8b8e7572ec2e1dc9321994391ff121d75a4bf3bb18db30f1407be5f64d185a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UFZEQQY%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC67IHTxqIQFDJzYd4cuvPgAZqvSO5DidQYDB29A2M1tQIgV4x0QeCq%2Bk6VRax5UAmmE6BxyORmLGOCaX77edlkrtcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJt1DzGXEiw%2FLP7L0ircA9o%2Bls9ALSlkUE28jU%2BUCsbL4vNS6ixEIQj9UJnSjc8hYqAO3GzNVFIdf%2FClL5vnY6n0NYoodQHqm4znbYQVLfm1O7UZfY5VGUSgzyyZfHkCTWs11jKKv%2FWx%2B94NEQsvHmfFcUaHgK2oPKPa%2BTwCbXswgR288VuI3D3RJZ9NLuKFyyBYetIzd7T0k4SsvyOdKujgN8pBlyzMrT7JTOG%2BSyy1CxuR0rVjaeuLcNqvEVFHZzZQQsat5dMdqJywrEYPBITwd1D9eOllz9N5yqvaFyegVp0%2F9HrUD9FXzelEIm8Im5HH7hzNRmLR%2FOiefHL%2BqWNIuGHRoPLWuq%2BjE3XLmIS4ItvC0yh502tII5K8smw8awlUhOVyN0kc7NLNsWuyI7jr2Btf7Ffy6uFUu7GyYQ75Wf7RnX8MfDPfTq4%2Fdi4H4cZqcKiaNubrSuuu%2B%2BaCNV48jUMHMYNb%2BgPM95JrCXSJRj8s0qKpqopbheK%2BUAmVn0gBENBY7rUED32aprfamuWEGu%2BClxtXNMttugETcTJw7DXPu2fBLHPtETMBji265c28%2BBTUez1wekP%2BVKNZ5L0bD6BSYOoNrbGiuGnpgLPlbPrbECJMwGnHCeAh8gAxUeN%2F5d2KgUcfzKCGMOjK%2BMIGOqUBeDAU1nbsuoxwjWAfV7M9PBu6gcqRIs3bR3zD2DvqeKBOKGairGEZF7f16ZLXxlWUlx1f5LaAeKyZcz2WIbvpTAMk14rULJaib68VPFYiNqUjIoyrdNu2%2F2Va1U7Y55PFk0z3SHm4%2FM%2FNIbb1rXKZrk%2BMncqw6yHG4gg1BunkAyYz0e%2B5ARd5OEq34uhk67banMfGRNFvsEpK1rHFLep9jnaCuZaV&X-Amz-Signature=2df7e86052f8719106fe2fc4972e3059f624724bb3dec19ed4b5b27f0edb42d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
