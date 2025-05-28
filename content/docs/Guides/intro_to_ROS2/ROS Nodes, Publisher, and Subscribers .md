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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMM4T74%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGP9pX3UgiIfD5mWx6JRGdhCkfBhJVB1L1Lx76DP30ErAiEA4NgI7xq5Isihhys9DqSObRaZV4dx8d0%2BXpdXQdu9NZwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCCAjDI0eIyMzVuTxyrcAxMmhITam3BeQu2tmYj3cOOoWw%2Btn4%2Fi1CcPsc1dMp6FF0kPhhMw9IWbfFp%2Bhpz%2FuLdNznPOxvsOYHA8M3MTKviAweDaM1Ce0UAIGMN9r%2FaybDbkCc2qX1W7HxfrVz5Gynw8AJWHsbKtTJ7PzndgbYeApcDMX690zRqIYQn6W5HlH8LFYWsAnYNGvx4B8N%2FvpaTWC3b2nIUEpQQBxShscYxEEPV2z3LO%2FG81ka8XN7jnzwWOyJA1k76NhHndbNimiWov09F%2FEBWabKioTyu0oK6xfnXf%2B86AVctX1o6fNK%2FHPermULjfBqn5HG590mcZRylik3mXw%2B9xi7ZIxi31wZcPECxnpO86wdCyAakIXc8D%2Bf8o2%2BXjkEFu6URIcxqjaggqNqZIbjUbujAfLJVYk8VDHTcZsd%2F59zNDId%2FWF7JSr9NphuQDdGfJyM7kx762ie9yzBh3vP9IFOsMp8%2Fng1mCey%2FkAbC7JBQwlTR8l1fBlvGmMgWqY59Huw2%2BwX2SkYZzIowMamGP%2B3c40k1JE5OtIRbCazEXdrQfEIBKWJNj%2FGuK2cazsvHkpFgpsIB8ndWVus3bMOyDIi7RbZmhitSun260g6lqppqDZt1oSPdyzvsFejn23TJB%2BlgHMMfE2sEGOqUBBaNSxJRrdWiHbqUPYJiRc%2Bh7w8uQW1hIJ3Q35exjErYTN2p16QTaCH0HMELoSqJwZItW0BwY27GnYrGppPpazK1q7lzoeAQPy8wy11JtNFeSo9BD3CRm%2FYC9kL3uY09CIsHYO2Qx3PNWM8P5c2eZ10t%2FQkQvIdCMyVsRWi07fOilu0ZaI8gM8%2BES4YbgmCqbMk%2FwyMSBZujTgFfo11M3EgPq5c9g&X-Amz-Signature=cb497706847e81985f8d403ea340cf6663485d9c5343e690386bdf0833ea3847&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMM4T74%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGP9pX3UgiIfD5mWx6JRGdhCkfBhJVB1L1Lx76DP30ErAiEA4NgI7xq5Isihhys9DqSObRaZV4dx8d0%2BXpdXQdu9NZwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCCAjDI0eIyMzVuTxyrcAxMmhITam3BeQu2tmYj3cOOoWw%2Btn4%2Fi1CcPsc1dMp6FF0kPhhMw9IWbfFp%2Bhpz%2FuLdNznPOxvsOYHA8M3MTKviAweDaM1Ce0UAIGMN9r%2FaybDbkCc2qX1W7HxfrVz5Gynw8AJWHsbKtTJ7PzndgbYeApcDMX690zRqIYQn6W5HlH8LFYWsAnYNGvx4B8N%2FvpaTWC3b2nIUEpQQBxShscYxEEPV2z3LO%2FG81ka8XN7jnzwWOyJA1k76NhHndbNimiWov09F%2FEBWabKioTyu0oK6xfnXf%2B86AVctX1o6fNK%2FHPermULjfBqn5HG590mcZRylik3mXw%2B9xi7ZIxi31wZcPECxnpO86wdCyAakIXc8D%2Bf8o2%2BXjkEFu6URIcxqjaggqNqZIbjUbujAfLJVYk8VDHTcZsd%2F59zNDId%2FWF7JSr9NphuQDdGfJyM7kx762ie9yzBh3vP9IFOsMp8%2Fng1mCey%2FkAbC7JBQwlTR8l1fBlvGmMgWqY59Huw2%2BwX2SkYZzIowMamGP%2B3c40k1JE5OtIRbCazEXdrQfEIBKWJNj%2FGuK2cazsvHkpFgpsIB8ndWVus3bMOyDIi7RbZmhitSun260g6lqppqDZt1oSPdyzvsFejn23TJB%2BlgHMMfE2sEGOqUBBaNSxJRrdWiHbqUPYJiRc%2Bh7w8uQW1hIJ3Q35exjErYTN2p16QTaCH0HMELoSqJwZItW0BwY27GnYrGppPpazK1q7lzoeAQPy8wy11JtNFeSo9BD3CRm%2FYC9kL3uY09CIsHYO2Qx3PNWM8P5c2eZ10t%2FQkQvIdCMyVsRWi07fOilu0ZaI8gM8%2BES4YbgmCqbMk%2FwyMSBZujTgFfo11M3EgPq5c9g&X-Amz-Signature=3ca12a67a603a174eebabf3795b6523944af31e323f5396884f646576eff55d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMM4T74%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGP9pX3UgiIfD5mWx6JRGdhCkfBhJVB1L1Lx76DP30ErAiEA4NgI7xq5Isihhys9DqSObRaZV4dx8d0%2BXpdXQdu9NZwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCCAjDI0eIyMzVuTxyrcAxMmhITam3BeQu2tmYj3cOOoWw%2Btn4%2Fi1CcPsc1dMp6FF0kPhhMw9IWbfFp%2Bhpz%2FuLdNznPOxvsOYHA8M3MTKviAweDaM1Ce0UAIGMN9r%2FaybDbkCc2qX1W7HxfrVz5Gynw8AJWHsbKtTJ7PzndgbYeApcDMX690zRqIYQn6W5HlH8LFYWsAnYNGvx4B8N%2FvpaTWC3b2nIUEpQQBxShscYxEEPV2z3LO%2FG81ka8XN7jnzwWOyJA1k76NhHndbNimiWov09F%2FEBWabKioTyu0oK6xfnXf%2B86AVctX1o6fNK%2FHPermULjfBqn5HG590mcZRylik3mXw%2B9xi7ZIxi31wZcPECxnpO86wdCyAakIXc8D%2Bf8o2%2BXjkEFu6URIcxqjaggqNqZIbjUbujAfLJVYk8VDHTcZsd%2F59zNDId%2FWF7JSr9NphuQDdGfJyM7kx762ie9yzBh3vP9IFOsMp8%2Fng1mCey%2FkAbC7JBQwlTR8l1fBlvGmMgWqY59Huw2%2BwX2SkYZzIowMamGP%2B3c40k1JE5OtIRbCazEXdrQfEIBKWJNj%2FGuK2cazsvHkpFgpsIB8ndWVus3bMOyDIi7RbZmhitSun260g6lqppqDZt1oSPdyzvsFejn23TJB%2BlgHMMfE2sEGOqUBBaNSxJRrdWiHbqUPYJiRc%2Bh7w8uQW1hIJ3Q35exjErYTN2p16QTaCH0HMELoSqJwZItW0BwY27GnYrGppPpazK1q7lzoeAQPy8wy11JtNFeSo9BD3CRm%2FYC9kL3uY09CIsHYO2Qx3PNWM8P5c2eZ10t%2FQkQvIdCMyVsRWi07fOilu0ZaI8gM8%2BES4YbgmCqbMk%2FwyMSBZujTgFfo11M3EgPq5c9g&X-Amz-Signature=1595610726e575ea96f5a622cb696105f12fd345bd860f08c6f7aedd8eb06247&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMM4T74%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGP9pX3UgiIfD5mWx6JRGdhCkfBhJVB1L1Lx76DP30ErAiEA4NgI7xq5Isihhys9DqSObRaZV4dx8d0%2BXpdXQdu9NZwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCCAjDI0eIyMzVuTxyrcAxMmhITam3BeQu2tmYj3cOOoWw%2Btn4%2Fi1CcPsc1dMp6FF0kPhhMw9IWbfFp%2Bhpz%2FuLdNznPOxvsOYHA8M3MTKviAweDaM1Ce0UAIGMN9r%2FaybDbkCc2qX1W7HxfrVz5Gynw8AJWHsbKtTJ7PzndgbYeApcDMX690zRqIYQn6W5HlH8LFYWsAnYNGvx4B8N%2FvpaTWC3b2nIUEpQQBxShscYxEEPV2z3LO%2FG81ka8XN7jnzwWOyJA1k76NhHndbNimiWov09F%2FEBWabKioTyu0oK6xfnXf%2B86AVctX1o6fNK%2FHPermULjfBqn5HG590mcZRylik3mXw%2B9xi7ZIxi31wZcPECxnpO86wdCyAakIXc8D%2Bf8o2%2BXjkEFu6URIcxqjaggqNqZIbjUbujAfLJVYk8VDHTcZsd%2F59zNDId%2FWF7JSr9NphuQDdGfJyM7kx762ie9yzBh3vP9IFOsMp8%2Fng1mCey%2FkAbC7JBQwlTR8l1fBlvGmMgWqY59Huw2%2BwX2SkYZzIowMamGP%2B3c40k1JE5OtIRbCazEXdrQfEIBKWJNj%2FGuK2cazsvHkpFgpsIB8ndWVus3bMOyDIi7RbZmhitSun260g6lqppqDZt1oSPdyzvsFejn23TJB%2BlgHMMfE2sEGOqUBBaNSxJRrdWiHbqUPYJiRc%2Bh7w8uQW1hIJ3Q35exjErYTN2p16QTaCH0HMELoSqJwZItW0BwY27GnYrGppPpazK1q7lzoeAQPy8wy11JtNFeSo9BD3CRm%2FYC9kL3uY09CIsHYO2Qx3PNWM8P5c2eZ10t%2FQkQvIdCMyVsRWi07fOilu0ZaI8gM8%2BES4YbgmCqbMk%2FwyMSBZujTgFfo11M3EgPq5c9g&X-Amz-Signature=c9166ebe0090eb063c024d394f208b541dbe927aae7006a097bd7ba8d5e8f1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMM4T74%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGP9pX3UgiIfD5mWx6JRGdhCkfBhJVB1L1Lx76DP30ErAiEA4NgI7xq5Isihhys9DqSObRaZV4dx8d0%2BXpdXQdu9NZwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCCAjDI0eIyMzVuTxyrcAxMmhITam3BeQu2tmYj3cOOoWw%2Btn4%2Fi1CcPsc1dMp6FF0kPhhMw9IWbfFp%2Bhpz%2FuLdNznPOxvsOYHA8M3MTKviAweDaM1Ce0UAIGMN9r%2FaybDbkCc2qX1W7HxfrVz5Gynw8AJWHsbKtTJ7PzndgbYeApcDMX690zRqIYQn6W5HlH8LFYWsAnYNGvx4B8N%2FvpaTWC3b2nIUEpQQBxShscYxEEPV2z3LO%2FG81ka8XN7jnzwWOyJA1k76NhHndbNimiWov09F%2FEBWabKioTyu0oK6xfnXf%2B86AVctX1o6fNK%2FHPermULjfBqn5HG590mcZRylik3mXw%2B9xi7ZIxi31wZcPECxnpO86wdCyAakIXc8D%2Bf8o2%2BXjkEFu6URIcxqjaggqNqZIbjUbujAfLJVYk8VDHTcZsd%2F59zNDId%2FWF7JSr9NphuQDdGfJyM7kx762ie9yzBh3vP9IFOsMp8%2Fng1mCey%2FkAbC7JBQwlTR8l1fBlvGmMgWqY59Huw2%2BwX2SkYZzIowMamGP%2B3c40k1JE5OtIRbCazEXdrQfEIBKWJNj%2FGuK2cazsvHkpFgpsIB8ndWVus3bMOyDIi7RbZmhitSun260g6lqppqDZt1oSPdyzvsFejn23TJB%2BlgHMMfE2sEGOqUBBaNSxJRrdWiHbqUPYJiRc%2Bh7w8uQW1hIJ3Q35exjErYTN2p16QTaCH0HMELoSqJwZItW0BwY27GnYrGppPpazK1q7lzoeAQPy8wy11JtNFeSo9BD3CRm%2FYC9kL3uY09CIsHYO2Qx3PNWM8P5c2eZ10t%2FQkQvIdCMyVsRWi07fOilu0ZaI8gM8%2BES4YbgmCqbMk%2FwyMSBZujTgFfo11M3EgPq5c9g&X-Amz-Signature=5ab8f7a689823a57b802abd9a2ad48e561d434a4dac102241c2ec49927cdea3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMM4T74%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGP9pX3UgiIfD5mWx6JRGdhCkfBhJVB1L1Lx76DP30ErAiEA4NgI7xq5Isihhys9DqSObRaZV4dx8d0%2BXpdXQdu9NZwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCCAjDI0eIyMzVuTxyrcAxMmhITam3BeQu2tmYj3cOOoWw%2Btn4%2Fi1CcPsc1dMp6FF0kPhhMw9IWbfFp%2Bhpz%2FuLdNznPOxvsOYHA8M3MTKviAweDaM1Ce0UAIGMN9r%2FaybDbkCc2qX1W7HxfrVz5Gynw8AJWHsbKtTJ7PzndgbYeApcDMX690zRqIYQn6W5HlH8LFYWsAnYNGvx4B8N%2FvpaTWC3b2nIUEpQQBxShscYxEEPV2z3LO%2FG81ka8XN7jnzwWOyJA1k76NhHndbNimiWov09F%2FEBWabKioTyu0oK6xfnXf%2B86AVctX1o6fNK%2FHPermULjfBqn5HG590mcZRylik3mXw%2B9xi7ZIxi31wZcPECxnpO86wdCyAakIXc8D%2Bf8o2%2BXjkEFu6URIcxqjaggqNqZIbjUbujAfLJVYk8VDHTcZsd%2F59zNDId%2FWF7JSr9NphuQDdGfJyM7kx762ie9yzBh3vP9IFOsMp8%2Fng1mCey%2FkAbC7JBQwlTR8l1fBlvGmMgWqY59Huw2%2BwX2SkYZzIowMamGP%2B3c40k1JE5OtIRbCazEXdrQfEIBKWJNj%2FGuK2cazsvHkpFgpsIB8ndWVus3bMOyDIi7RbZmhitSun260g6lqppqDZt1oSPdyzvsFejn23TJB%2BlgHMMfE2sEGOqUBBaNSxJRrdWiHbqUPYJiRc%2Bh7w8uQW1hIJ3Q35exjErYTN2p16QTaCH0HMELoSqJwZItW0BwY27GnYrGppPpazK1q7lzoeAQPy8wy11JtNFeSo9BD3CRm%2FYC9kL3uY09CIsHYO2Qx3PNWM8P5c2eZ10t%2FQkQvIdCMyVsRWi07fOilu0ZaI8gM8%2BES4YbgmCqbMk%2FwyMSBZujTgFfo11M3EgPq5c9g&X-Amz-Signature=42944c32f13da0d5c06d86562a4898cfa5e67117273c7205b9c890961e56c381&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMM4T74%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGP9pX3UgiIfD5mWx6JRGdhCkfBhJVB1L1Lx76DP30ErAiEA4NgI7xq5Isihhys9DqSObRaZV4dx8d0%2BXpdXQdu9NZwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCCAjDI0eIyMzVuTxyrcAxMmhITam3BeQu2tmYj3cOOoWw%2Btn4%2Fi1CcPsc1dMp6FF0kPhhMw9IWbfFp%2Bhpz%2FuLdNznPOxvsOYHA8M3MTKviAweDaM1Ce0UAIGMN9r%2FaybDbkCc2qX1W7HxfrVz5Gynw8AJWHsbKtTJ7PzndgbYeApcDMX690zRqIYQn6W5HlH8LFYWsAnYNGvx4B8N%2FvpaTWC3b2nIUEpQQBxShscYxEEPV2z3LO%2FG81ka8XN7jnzwWOyJA1k76NhHndbNimiWov09F%2FEBWabKioTyu0oK6xfnXf%2B86AVctX1o6fNK%2FHPermULjfBqn5HG590mcZRylik3mXw%2B9xi7ZIxi31wZcPECxnpO86wdCyAakIXc8D%2Bf8o2%2BXjkEFu6URIcxqjaggqNqZIbjUbujAfLJVYk8VDHTcZsd%2F59zNDId%2FWF7JSr9NphuQDdGfJyM7kx762ie9yzBh3vP9IFOsMp8%2Fng1mCey%2FkAbC7JBQwlTR8l1fBlvGmMgWqY59Huw2%2BwX2SkYZzIowMamGP%2B3c40k1JE5OtIRbCazEXdrQfEIBKWJNj%2FGuK2cazsvHkpFgpsIB8ndWVus3bMOyDIi7RbZmhitSun260g6lqppqDZt1oSPdyzvsFejn23TJB%2BlgHMMfE2sEGOqUBBaNSxJRrdWiHbqUPYJiRc%2Bh7w8uQW1hIJ3Q35exjErYTN2p16QTaCH0HMELoSqJwZItW0BwY27GnYrGppPpazK1q7lzoeAQPy8wy11JtNFeSo9BD3CRm%2FYC9kL3uY09CIsHYO2Qx3PNWM8P5c2eZ10t%2FQkQvIdCMyVsRWi07fOilu0ZaI8gM8%2BES4YbgmCqbMk%2FwyMSBZujTgFfo11M3EgPq5c9g&X-Amz-Signature=1c1f0fad63c60ed153f8bf7bbb98b3dca310dae560b5201acc688b43d29633e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGMM4T74%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGP9pX3UgiIfD5mWx6JRGdhCkfBhJVB1L1Lx76DP30ErAiEA4NgI7xq5Isihhys9DqSObRaZV4dx8d0%2BXpdXQdu9NZwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDCCAjDI0eIyMzVuTxyrcAxMmhITam3BeQu2tmYj3cOOoWw%2Btn4%2Fi1CcPsc1dMp6FF0kPhhMw9IWbfFp%2Bhpz%2FuLdNznPOxvsOYHA8M3MTKviAweDaM1Ce0UAIGMN9r%2FaybDbkCc2qX1W7HxfrVz5Gynw8AJWHsbKtTJ7PzndgbYeApcDMX690zRqIYQn6W5HlH8LFYWsAnYNGvx4B8N%2FvpaTWC3b2nIUEpQQBxShscYxEEPV2z3LO%2FG81ka8XN7jnzwWOyJA1k76NhHndbNimiWov09F%2FEBWabKioTyu0oK6xfnXf%2B86AVctX1o6fNK%2FHPermULjfBqn5HG590mcZRylik3mXw%2B9xi7ZIxi31wZcPECxnpO86wdCyAakIXc8D%2Bf8o2%2BXjkEFu6URIcxqjaggqNqZIbjUbujAfLJVYk8VDHTcZsd%2F59zNDId%2FWF7JSr9NphuQDdGfJyM7kx762ie9yzBh3vP9IFOsMp8%2Fng1mCey%2FkAbC7JBQwlTR8l1fBlvGmMgWqY59Huw2%2BwX2SkYZzIowMamGP%2B3c40k1JE5OtIRbCazEXdrQfEIBKWJNj%2FGuK2cazsvHkpFgpsIB8ndWVus3bMOyDIi7RbZmhitSun260g6lqppqDZt1oSPdyzvsFejn23TJB%2BlgHMMfE2sEGOqUBBaNSxJRrdWiHbqUPYJiRc%2Bh7w8uQW1hIJ3Q35exjErYTN2p16QTaCH0HMELoSqJwZItW0BwY27GnYrGppPpazK1q7lzoeAQPy8wy11JtNFeSo9BD3CRm%2FYC9kL3uY09CIsHYO2Qx3PNWM8P5c2eZ10t%2FQkQvIdCMyVsRWi07fOilu0ZaI8gM8%2BES4YbgmCqbMk%2FwyMSBZujTgFfo11M3EgPq5c9g&X-Amz-Signature=0618639c42db5bdc6541b8d6bc5c2857ae068d7f0ef77f19b07e2508fafea7f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
