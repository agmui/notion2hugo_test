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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AAIUC2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8k2dgnoaPXir1gnr%2BYS6M4nPgDLRXtAVignYbOev1XgIhAKIJStq8l%2B8JdeyOtTd6KXaYgiyvM5q%2FyXQFKuveMa6YKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAs%2FZ11PNkBTxkMZIq3APSnDLfFoamE0RVza%2BSPGk96ChCHwSBiWmW30wIuF9opshqIEiERacO78PgIyIY606nOz6f0Km0s3GfcAh7GPTRsugAC7rM15dcs0ThDjrJrkM0sFpPwcXXMVLI5j3LgzYlZQdculfWR57NuVvwQMaGggDV6SF0TTMQJOISD8K1d1%2FT9jIBwRMrGDYbNUBPq4LCSKBwZW8dnBTnxOIm3elsViy%2BN3%2BZl6fo%2Bi9YP%2B4JUK5uz5MB5E9UQ6svVpnee2iHS%2FOsPrEBKllsRf1Hp6GZy%2FQmaqfNQZprGAHQs82z1h4exX9nPnwr5oGVdo6DOA4zJF7lx6IudMA%2Fq0l2WzL1paVxv0k8%2FIQK3lBDwgKQmoR5p23Q7yq%2FJU3lMJAJpkXlQDzsovZMJcZmhQ%2FTODsXUN%2FukoaQ9c0Wq3p%2Fu4M9w0ZoinLdkF534ztAoMgYO7nPsT5o0SqUTCxE2tFqUPi%2B6aNH70%2Bhio%2FHMEPXgmxh1wtItpsMfFlqpddzzx2zMtmxbbaL3kU7HJXwRs4iPqgyuclUl4bwd2Ns5tFkHzrCQmoL6DIJptyred4fif%2FTdWfKlDHCqvnVt80MNMnN8b%2FsmqIHZlrRZPIhr%2FoKyX43UNggBgIo%2BonuRGt%2FDzDpm6W9BjqkAfZ1%2BuIlm7cnsrjRU1hi3rDwTkX3VwsyMeYdQNOToeSNO%2BoZs%2BGA%2FdraIUyHFFwdN1YufRAM%2FTFfzLyBOsLCXt%2B0AmNHHnQWNFIOOmsMwyKVeyUYoPsY%2BzUW%2Fxmq%2FuftM4TqehWMCPXSBPBZzOmzt77Ez%2FdTeVp834ezz62DboGwQfo96nU6sD4ch0XJ%2BO8jMvwNdWgMV9MwRoTlMgJcGjVofM%2Fp&X-Amz-Signature=6978fa579eef33271da2664b94b31241abb3baf3df23488b537ab0b3ae022732&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AAIUC2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8k2dgnoaPXir1gnr%2BYS6M4nPgDLRXtAVignYbOev1XgIhAKIJStq8l%2B8JdeyOtTd6KXaYgiyvM5q%2FyXQFKuveMa6YKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAs%2FZ11PNkBTxkMZIq3APSnDLfFoamE0RVza%2BSPGk96ChCHwSBiWmW30wIuF9opshqIEiERacO78PgIyIY606nOz6f0Km0s3GfcAh7GPTRsugAC7rM15dcs0ThDjrJrkM0sFpPwcXXMVLI5j3LgzYlZQdculfWR57NuVvwQMaGggDV6SF0TTMQJOISD8K1d1%2FT9jIBwRMrGDYbNUBPq4LCSKBwZW8dnBTnxOIm3elsViy%2BN3%2BZl6fo%2Bi9YP%2B4JUK5uz5MB5E9UQ6svVpnee2iHS%2FOsPrEBKllsRf1Hp6GZy%2FQmaqfNQZprGAHQs82z1h4exX9nPnwr5oGVdo6DOA4zJF7lx6IudMA%2Fq0l2WzL1paVxv0k8%2FIQK3lBDwgKQmoR5p23Q7yq%2FJU3lMJAJpkXlQDzsovZMJcZmhQ%2FTODsXUN%2FukoaQ9c0Wq3p%2Fu4M9w0ZoinLdkF534ztAoMgYO7nPsT5o0SqUTCxE2tFqUPi%2B6aNH70%2Bhio%2FHMEPXgmxh1wtItpsMfFlqpddzzx2zMtmxbbaL3kU7HJXwRs4iPqgyuclUl4bwd2Ns5tFkHzrCQmoL6DIJptyred4fif%2FTdWfKlDHCqvnVt80MNMnN8b%2FsmqIHZlrRZPIhr%2FoKyX43UNggBgIo%2BonuRGt%2FDzDpm6W9BjqkAfZ1%2BuIlm7cnsrjRU1hi3rDwTkX3VwsyMeYdQNOToeSNO%2BoZs%2BGA%2FdraIUyHFFwdN1YufRAM%2FTFfzLyBOsLCXt%2B0AmNHHnQWNFIOOmsMwyKVeyUYoPsY%2BzUW%2Fxmq%2FuftM4TqehWMCPXSBPBZzOmzt77Ez%2FdTeVp834ezz62DboGwQfo96nU6sD4ch0XJ%2BO8jMvwNdWgMV9MwRoTlMgJcGjVofM%2Fp&X-Amz-Signature=c03b37b7535a9892d05bba8cd5045159c4ef07f264c165c2271757e38267164a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AAIUC2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8k2dgnoaPXir1gnr%2BYS6M4nPgDLRXtAVignYbOev1XgIhAKIJStq8l%2B8JdeyOtTd6KXaYgiyvM5q%2FyXQFKuveMa6YKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAs%2FZ11PNkBTxkMZIq3APSnDLfFoamE0RVza%2BSPGk96ChCHwSBiWmW30wIuF9opshqIEiERacO78PgIyIY606nOz6f0Km0s3GfcAh7GPTRsugAC7rM15dcs0ThDjrJrkM0sFpPwcXXMVLI5j3LgzYlZQdculfWR57NuVvwQMaGggDV6SF0TTMQJOISD8K1d1%2FT9jIBwRMrGDYbNUBPq4LCSKBwZW8dnBTnxOIm3elsViy%2BN3%2BZl6fo%2Bi9YP%2B4JUK5uz5MB5E9UQ6svVpnee2iHS%2FOsPrEBKllsRf1Hp6GZy%2FQmaqfNQZprGAHQs82z1h4exX9nPnwr5oGVdo6DOA4zJF7lx6IudMA%2Fq0l2WzL1paVxv0k8%2FIQK3lBDwgKQmoR5p23Q7yq%2FJU3lMJAJpkXlQDzsovZMJcZmhQ%2FTODsXUN%2FukoaQ9c0Wq3p%2Fu4M9w0ZoinLdkF534ztAoMgYO7nPsT5o0SqUTCxE2tFqUPi%2B6aNH70%2Bhio%2FHMEPXgmxh1wtItpsMfFlqpddzzx2zMtmxbbaL3kU7HJXwRs4iPqgyuclUl4bwd2Ns5tFkHzrCQmoL6DIJptyred4fif%2FTdWfKlDHCqvnVt80MNMnN8b%2FsmqIHZlrRZPIhr%2FoKyX43UNggBgIo%2BonuRGt%2FDzDpm6W9BjqkAfZ1%2BuIlm7cnsrjRU1hi3rDwTkX3VwsyMeYdQNOToeSNO%2BoZs%2BGA%2FdraIUyHFFwdN1YufRAM%2FTFfzLyBOsLCXt%2B0AmNHHnQWNFIOOmsMwyKVeyUYoPsY%2BzUW%2Fxmq%2FuftM4TqehWMCPXSBPBZzOmzt77Ez%2FdTeVp834ezz62DboGwQfo96nU6sD4ch0XJ%2BO8jMvwNdWgMV9MwRoTlMgJcGjVofM%2Fp&X-Amz-Signature=4f9ac2c0d5a9ed7a92ce642c61759cbfea90df21a6d9e57f4945c578784d041f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AAIUC2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8k2dgnoaPXir1gnr%2BYS6M4nPgDLRXtAVignYbOev1XgIhAKIJStq8l%2B8JdeyOtTd6KXaYgiyvM5q%2FyXQFKuveMa6YKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAs%2FZ11PNkBTxkMZIq3APSnDLfFoamE0RVza%2BSPGk96ChCHwSBiWmW30wIuF9opshqIEiERacO78PgIyIY606nOz6f0Km0s3GfcAh7GPTRsugAC7rM15dcs0ThDjrJrkM0sFpPwcXXMVLI5j3LgzYlZQdculfWR57NuVvwQMaGggDV6SF0TTMQJOISD8K1d1%2FT9jIBwRMrGDYbNUBPq4LCSKBwZW8dnBTnxOIm3elsViy%2BN3%2BZl6fo%2Bi9YP%2B4JUK5uz5MB5E9UQ6svVpnee2iHS%2FOsPrEBKllsRf1Hp6GZy%2FQmaqfNQZprGAHQs82z1h4exX9nPnwr5oGVdo6DOA4zJF7lx6IudMA%2Fq0l2WzL1paVxv0k8%2FIQK3lBDwgKQmoR5p23Q7yq%2FJU3lMJAJpkXlQDzsovZMJcZmhQ%2FTODsXUN%2FukoaQ9c0Wq3p%2Fu4M9w0ZoinLdkF534ztAoMgYO7nPsT5o0SqUTCxE2tFqUPi%2B6aNH70%2Bhio%2FHMEPXgmxh1wtItpsMfFlqpddzzx2zMtmxbbaL3kU7HJXwRs4iPqgyuclUl4bwd2Ns5tFkHzrCQmoL6DIJptyred4fif%2FTdWfKlDHCqvnVt80MNMnN8b%2FsmqIHZlrRZPIhr%2FoKyX43UNggBgIo%2BonuRGt%2FDzDpm6W9BjqkAfZ1%2BuIlm7cnsrjRU1hi3rDwTkX3VwsyMeYdQNOToeSNO%2BoZs%2BGA%2FdraIUyHFFwdN1YufRAM%2FTFfzLyBOsLCXt%2B0AmNHHnQWNFIOOmsMwyKVeyUYoPsY%2BzUW%2Fxmq%2FuftM4TqehWMCPXSBPBZzOmzt77Ez%2FdTeVp834ezz62DboGwQfo96nU6sD4ch0XJ%2BO8jMvwNdWgMV9MwRoTlMgJcGjVofM%2Fp&X-Amz-Signature=69d5096268b6258c1656d3896a59bbb34917c0b2742b34baebec543041c4ce18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AAIUC2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8k2dgnoaPXir1gnr%2BYS6M4nPgDLRXtAVignYbOev1XgIhAKIJStq8l%2B8JdeyOtTd6KXaYgiyvM5q%2FyXQFKuveMa6YKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAs%2FZ11PNkBTxkMZIq3APSnDLfFoamE0RVza%2BSPGk96ChCHwSBiWmW30wIuF9opshqIEiERacO78PgIyIY606nOz6f0Km0s3GfcAh7GPTRsugAC7rM15dcs0ThDjrJrkM0sFpPwcXXMVLI5j3LgzYlZQdculfWR57NuVvwQMaGggDV6SF0TTMQJOISD8K1d1%2FT9jIBwRMrGDYbNUBPq4LCSKBwZW8dnBTnxOIm3elsViy%2BN3%2BZl6fo%2Bi9YP%2B4JUK5uz5MB5E9UQ6svVpnee2iHS%2FOsPrEBKllsRf1Hp6GZy%2FQmaqfNQZprGAHQs82z1h4exX9nPnwr5oGVdo6DOA4zJF7lx6IudMA%2Fq0l2WzL1paVxv0k8%2FIQK3lBDwgKQmoR5p23Q7yq%2FJU3lMJAJpkXlQDzsovZMJcZmhQ%2FTODsXUN%2FukoaQ9c0Wq3p%2Fu4M9w0ZoinLdkF534ztAoMgYO7nPsT5o0SqUTCxE2tFqUPi%2B6aNH70%2Bhio%2FHMEPXgmxh1wtItpsMfFlqpddzzx2zMtmxbbaL3kU7HJXwRs4iPqgyuclUl4bwd2Ns5tFkHzrCQmoL6DIJptyred4fif%2FTdWfKlDHCqvnVt80MNMnN8b%2FsmqIHZlrRZPIhr%2FoKyX43UNggBgIo%2BonuRGt%2FDzDpm6W9BjqkAfZ1%2BuIlm7cnsrjRU1hi3rDwTkX3VwsyMeYdQNOToeSNO%2BoZs%2BGA%2FdraIUyHFFwdN1YufRAM%2FTFfzLyBOsLCXt%2B0AmNHHnQWNFIOOmsMwyKVeyUYoPsY%2BzUW%2Fxmq%2FuftM4TqehWMCPXSBPBZzOmzt77Ez%2FdTeVp834ezz62DboGwQfo96nU6sD4ch0XJ%2BO8jMvwNdWgMV9MwRoTlMgJcGjVofM%2Fp&X-Amz-Signature=cb7e065c3b054f0551079888b9b5816b6263b143334ee8a120f5aa0d0f8872bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AAIUC2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8k2dgnoaPXir1gnr%2BYS6M4nPgDLRXtAVignYbOev1XgIhAKIJStq8l%2B8JdeyOtTd6KXaYgiyvM5q%2FyXQFKuveMa6YKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAs%2FZ11PNkBTxkMZIq3APSnDLfFoamE0RVza%2BSPGk96ChCHwSBiWmW30wIuF9opshqIEiERacO78PgIyIY606nOz6f0Km0s3GfcAh7GPTRsugAC7rM15dcs0ThDjrJrkM0sFpPwcXXMVLI5j3LgzYlZQdculfWR57NuVvwQMaGggDV6SF0TTMQJOISD8K1d1%2FT9jIBwRMrGDYbNUBPq4LCSKBwZW8dnBTnxOIm3elsViy%2BN3%2BZl6fo%2Bi9YP%2B4JUK5uz5MB5E9UQ6svVpnee2iHS%2FOsPrEBKllsRf1Hp6GZy%2FQmaqfNQZprGAHQs82z1h4exX9nPnwr5oGVdo6DOA4zJF7lx6IudMA%2Fq0l2WzL1paVxv0k8%2FIQK3lBDwgKQmoR5p23Q7yq%2FJU3lMJAJpkXlQDzsovZMJcZmhQ%2FTODsXUN%2FukoaQ9c0Wq3p%2Fu4M9w0ZoinLdkF534ztAoMgYO7nPsT5o0SqUTCxE2tFqUPi%2B6aNH70%2Bhio%2FHMEPXgmxh1wtItpsMfFlqpddzzx2zMtmxbbaL3kU7HJXwRs4iPqgyuclUl4bwd2Ns5tFkHzrCQmoL6DIJptyred4fif%2FTdWfKlDHCqvnVt80MNMnN8b%2FsmqIHZlrRZPIhr%2FoKyX43UNggBgIo%2BonuRGt%2FDzDpm6W9BjqkAfZ1%2BuIlm7cnsrjRU1hi3rDwTkX3VwsyMeYdQNOToeSNO%2BoZs%2BGA%2FdraIUyHFFwdN1YufRAM%2FTFfzLyBOsLCXt%2B0AmNHHnQWNFIOOmsMwyKVeyUYoPsY%2BzUW%2Fxmq%2FuftM4TqehWMCPXSBPBZzOmzt77Ez%2FdTeVp834ezz62DboGwQfo96nU6sD4ch0XJ%2BO8jMvwNdWgMV9MwRoTlMgJcGjVofM%2Fp&X-Amz-Signature=e71bf0111082f7a3fd5b8db829c2c4133fce91583b91382b77447aa9de897ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AAIUC2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8k2dgnoaPXir1gnr%2BYS6M4nPgDLRXtAVignYbOev1XgIhAKIJStq8l%2B8JdeyOtTd6KXaYgiyvM5q%2FyXQFKuveMa6YKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAs%2FZ11PNkBTxkMZIq3APSnDLfFoamE0RVza%2BSPGk96ChCHwSBiWmW30wIuF9opshqIEiERacO78PgIyIY606nOz6f0Km0s3GfcAh7GPTRsugAC7rM15dcs0ThDjrJrkM0sFpPwcXXMVLI5j3LgzYlZQdculfWR57NuVvwQMaGggDV6SF0TTMQJOISD8K1d1%2FT9jIBwRMrGDYbNUBPq4LCSKBwZW8dnBTnxOIm3elsViy%2BN3%2BZl6fo%2Bi9YP%2B4JUK5uz5MB5E9UQ6svVpnee2iHS%2FOsPrEBKllsRf1Hp6GZy%2FQmaqfNQZprGAHQs82z1h4exX9nPnwr5oGVdo6DOA4zJF7lx6IudMA%2Fq0l2WzL1paVxv0k8%2FIQK3lBDwgKQmoR5p23Q7yq%2FJU3lMJAJpkXlQDzsovZMJcZmhQ%2FTODsXUN%2FukoaQ9c0Wq3p%2Fu4M9w0ZoinLdkF534ztAoMgYO7nPsT5o0SqUTCxE2tFqUPi%2B6aNH70%2Bhio%2FHMEPXgmxh1wtItpsMfFlqpddzzx2zMtmxbbaL3kU7HJXwRs4iPqgyuclUl4bwd2Ns5tFkHzrCQmoL6DIJptyred4fif%2FTdWfKlDHCqvnVt80MNMnN8b%2FsmqIHZlrRZPIhr%2FoKyX43UNggBgIo%2BonuRGt%2FDzDpm6W9BjqkAfZ1%2BuIlm7cnsrjRU1hi3rDwTkX3VwsyMeYdQNOToeSNO%2BoZs%2BGA%2FdraIUyHFFwdN1YufRAM%2FTFfzLyBOsLCXt%2B0AmNHHnQWNFIOOmsMwyKVeyUYoPsY%2BzUW%2Fxmq%2FuftM4TqehWMCPXSBPBZzOmzt77Ez%2FdTeVp834ezz62DboGwQfo96nU6sD4ch0XJ%2BO8jMvwNdWgMV9MwRoTlMgJcGjVofM%2Fp&X-Amz-Signature=b8582827179983183d1f2d97441076df5744d912664522714d67d0e3400f295a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662AAIUC2%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T031353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8k2dgnoaPXir1gnr%2BYS6M4nPgDLRXtAVignYbOev1XgIhAKIJStq8l%2B8JdeyOtTd6KXaYgiyvM5q%2FyXQFKuveMa6YKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAs%2FZ11PNkBTxkMZIq3APSnDLfFoamE0RVza%2BSPGk96ChCHwSBiWmW30wIuF9opshqIEiERacO78PgIyIY606nOz6f0Km0s3GfcAh7GPTRsugAC7rM15dcs0ThDjrJrkM0sFpPwcXXMVLI5j3LgzYlZQdculfWR57NuVvwQMaGggDV6SF0TTMQJOISD8K1d1%2FT9jIBwRMrGDYbNUBPq4LCSKBwZW8dnBTnxOIm3elsViy%2BN3%2BZl6fo%2Bi9YP%2B4JUK5uz5MB5E9UQ6svVpnee2iHS%2FOsPrEBKllsRf1Hp6GZy%2FQmaqfNQZprGAHQs82z1h4exX9nPnwr5oGVdo6DOA4zJF7lx6IudMA%2Fq0l2WzL1paVxv0k8%2FIQK3lBDwgKQmoR5p23Q7yq%2FJU3lMJAJpkXlQDzsovZMJcZmhQ%2FTODsXUN%2FukoaQ9c0Wq3p%2Fu4M9w0ZoinLdkF534ztAoMgYO7nPsT5o0SqUTCxE2tFqUPi%2B6aNH70%2Bhio%2FHMEPXgmxh1wtItpsMfFlqpddzzx2zMtmxbbaL3kU7HJXwRs4iPqgyuclUl4bwd2Ns5tFkHzrCQmoL6DIJptyred4fif%2FTdWfKlDHCqvnVt80MNMnN8b%2FsmqIHZlrRZPIhr%2FoKyX43UNggBgIo%2BonuRGt%2FDzDpm6W9BjqkAfZ1%2BuIlm7cnsrjRU1hi3rDwTkX3VwsyMeYdQNOToeSNO%2BoZs%2BGA%2FdraIUyHFFwdN1YufRAM%2FTFfzLyBOsLCXt%2B0AmNHHnQWNFIOOmsMwyKVeyUYoPsY%2BzUW%2Fxmq%2FuftM4TqehWMCPXSBPBZzOmzt77Ez%2FdTeVp834ezz62DboGwQfo96nU6sD4ch0XJ%2BO8jMvwNdWgMV9MwRoTlMgJcGjVofM%2Fp&X-Amz-Signature=c4fb09770d3e29ee0140a2fc7408f327dd1f459be5bdc36fb26a2e041aeadde2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
