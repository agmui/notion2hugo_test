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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYPN5YS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICvPDcSKCR9LMUmjsCF78brCfzEChJHfTVC3N3frMEWrAiAcD8lEy6DPTeVkC6vWnPzvpE5I7QD%2FRUHeKSVW0j%2BcmyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZCo%2BKAdo3OcCKGUKtwD0QyBHDJByIcUetZBpLI1rH5%2F0YvfcGS0BTpohq78MjGYqYGI%2FXp73UXlfl0vj7F%2FqAiWSazTypUwiMZOb4Oesyuqutn2qxy4kwmGTRGx7f%2FXcJO5PKRlTmVtYr2BwZt9fpAWXEN7D%2BoekDuyMIKQKWUHIwU5rsFLrwHZk%2FNIcJ2K6l802lXq6%2F%2BY21pb0QGfwVdC3kZeBuIuSu4tjSaN%2B9nt30OYz6Y%2FzvyvFdPbikQ220H1XlbMzR4k2C9ERtHvZJCwlasP%2BLbcngO%2BeGMEYpTBZN1hybB9QSSntDOXbTx8sCGGSzioDcj5zC67om7cJuh7LCIO23XTgpkJKiPOSl0HEAytUIJmkRQ1efq0G0jXzGgxCtg75T9UrpoXRbMJBTFK1ftoQLN7LkwsXvKg4rk2m6V06swiPSiZaJiyfKqIXDvnhvTdVXM6sZFrwsm1nRstU2L75dEpGFIaWcGOqg0QubiwWsu3i1K2b%2B7GBuelu0qnRKg0Wpl5bFkS0MWzMRhFUYAv2h3qUx%2F6zpjRib5misOydSJSCwIdCIterHRxyBxRXmQ5o0mVWmsjN7xYaiW3I%2Bf8YV6gzhdATEqTZI924CDJyiJWS0lTUCKP7Oxs4dHbNQ2ly14JXp8wwqCPwAY6pgGXvbXae88%2F8kVpuQgxw5bOPmDIeUfjP3vqxwQODUeqQD69vkSEr8nKZbt03leREoMPcOBkjg78FGT0XDiOAHlPDZSTiHev98zw5zF8VkcSY%2FDmvzGUdCF8b2nOw9T%2B7VhlPxLjXHBbwEu21geejyykXVQbM5GW0pPx%2FUUCG9rH1WLpCC9eFjM74oRMNSzwIDrRg0UOMjULjdXvlj%2BM%2BsDFpsD8u41x&X-Amz-Signature=6b3a127371108c09f8aa41b2e728c2c09338cd35e668738fcefd0290b88c7c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYPN5YS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICvPDcSKCR9LMUmjsCF78brCfzEChJHfTVC3N3frMEWrAiAcD8lEy6DPTeVkC6vWnPzvpE5I7QD%2FRUHeKSVW0j%2BcmyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZCo%2BKAdo3OcCKGUKtwD0QyBHDJByIcUetZBpLI1rH5%2F0YvfcGS0BTpohq78MjGYqYGI%2FXp73UXlfl0vj7F%2FqAiWSazTypUwiMZOb4Oesyuqutn2qxy4kwmGTRGx7f%2FXcJO5PKRlTmVtYr2BwZt9fpAWXEN7D%2BoekDuyMIKQKWUHIwU5rsFLrwHZk%2FNIcJ2K6l802lXq6%2F%2BY21pb0QGfwVdC3kZeBuIuSu4tjSaN%2B9nt30OYz6Y%2FzvyvFdPbikQ220H1XlbMzR4k2C9ERtHvZJCwlasP%2BLbcngO%2BeGMEYpTBZN1hybB9QSSntDOXbTx8sCGGSzioDcj5zC67om7cJuh7LCIO23XTgpkJKiPOSl0HEAytUIJmkRQ1efq0G0jXzGgxCtg75T9UrpoXRbMJBTFK1ftoQLN7LkwsXvKg4rk2m6V06swiPSiZaJiyfKqIXDvnhvTdVXM6sZFrwsm1nRstU2L75dEpGFIaWcGOqg0QubiwWsu3i1K2b%2B7GBuelu0qnRKg0Wpl5bFkS0MWzMRhFUYAv2h3qUx%2F6zpjRib5misOydSJSCwIdCIterHRxyBxRXmQ5o0mVWmsjN7xYaiW3I%2Bf8YV6gzhdATEqTZI924CDJyiJWS0lTUCKP7Oxs4dHbNQ2ly14JXp8wwqCPwAY6pgGXvbXae88%2F8kVpuQgxw5bOPmDIeUfjP3vqxwQODUeqQD69vkSEr8nKZbt03leREoMPcOBkjg78FGT0XDiOAHlPDZSTiHev98zw5zF8VkcSY%2FDmvzGUdCF8b2nOw9T%2B7VhlPxLjXHBbwEu21geejyykXVQbM5GW0pPx%2FUUCG9rH1WLpCC9eFjM74oRMNSzwIDrRg0UOMjULjdXvlj%2BM%2BsDFpsD8u41x&X-Amz-Signature=f086a4022a8621acac9184732304ad4d16ebb0bc72ac38fc2324802f08b868bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYPN5YS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICvPDcSKCR9LMUmjsCF78brCfzEChJHfTVC3N3frMEWrAiAcD8lEy6DPTeVkC6vWnPzvpE5I7QD%2FRUHeKSVW0j%2BcmyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZCo%2BKAdo3OcCKGUKtwD0QyBHDJByIcUetZBpLI1rH5%2F0YvfcGS0BTpohq78MjGYqYGI%2FXp73UXlfl0vj7F%2FqAiWSazTypUwiMZOb4Oesyuqutn2qxy4kwmGTRGx7f%2FXcJO5PKRlTmVtYr2BwZt9fpAWXEN7D%2BoekDuyMIKQKWUHIwU5rsFLrwHZk%2FNIcJ2K6l802lXq6%2F%2BY21pb0QGfwVdC3kZeBuIuSu4tjSaN%2B9nt30OYz6Y%2FzvyvFdPbikQ220H1XlbMzR4k2C9ERtHvZJCwlasP%2BLbcngO%2BeGMEYpTBZN1hybB9QSSntDOXbTx8sCGGSzioDcj5zC67om7cJuh7LCIO23XTgpkJKiPOSl0HEAytUIJmkRQ1efq0G0jXzGgxCtg75T9UrpoXRbMJBTFK1ftoQLN7LkwsXvKg4rk2m6V06swiPSiZaJiyfKqIXDvnhvTdVXM6sZFrwsm1nRstU2L75dEpGFIaWcGOqg0QubiwWsu3i1K2b%2B7GBuelu0qnRKg0Wpl5bFkS0MWzMRhFUYAv2h3qUx%2F6zpjRib5misOydSJSCwIdCIterHRxyBxRXmQ5o0mVWmsjN7xYaiW3I%2Bf8YV6gzhdATEqTZI924CDJyiJWS0lTUCKP7Oxs4dHbNQ2ly14JXp8wwqCPwAY6pgGXvbXae88%2F8kVpuQgxw5bOPmDIeUfjP3vqxwQODUeqQD69vkSEr8nKZbt03leREoMPcOBkjg78FGT0XDiOAHlPDZSTiHev98zw5zF8VkcSY%2FDmvzGUdCF8b2nOw9T%2B7VhlPxLjXHBbwEu21geejyykXVQbM5GW0pPx%2FUUCG9rH1WLpCC9eFjM74oRMNSzwIDrRg0UOMjULjdXvlj%2BM%2BsDFpsD8u41x&X-Amz-Signature=e962b399ecbeb490f7fadd92d502b3f30254cc249df8a053f257075b535791b9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYPN5YS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICvPDcSKCR9LMUmjsCF78brCfzEChJHfTVC3N3frMEWrAiAcD8lEy6DPTeVkC6vWnPzvpE5I7QD%2FRUHeKSVW0j%2BcmyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZCo%2BKAdo3OcCKGUKtwD0QyBHDJByIcUetZBpLI1rH5%2F0YvfcGS0BTpohq78MjGYqYGI%2FXp73UXlfl0vj7F%2FqAiWSazTypUwiMZOb4Oesyuqutn2qxy4kwmGTRGx7f%2FXcJO5PKRlTmVtYr2BwZt9fpAWXEN7D%2BoekDuyMIKQKWUHIwU5rsFLrwHZk%2FNIcJ2K6l802lXq6%2F%2BY21pb0QGfwVdC3kZeBuIuSu4tjSaN%2B9nt30OYz6Y%2FzvyvFdPbikQ220H1XlbMzR4k2C9ERtHvZJCwlasP%2BLbcngO%2BeGMEYpTBZN1hybB9QSSntDOXbTx8sCGGSzioDcj5zC67om7cJuh7LCIO23XTgpkJKiPOSl0HEAytUIJmkRQ1efq0G0jXzGgxCtg75T9UrpoXRbMJBTFK1ftoQLN7LkwsXvKg4rk2m6V06swiPSiZaJiyfKqIXDvnhvTdVXM6sZFrwsm1nRstU2L75dEpGFIaWcGOqg0QubiwWsu3i1K2b%2B7GBuelu0qnRKg0Wpl5bFkS0MWzMRhFUYAv2h3qUx%2F6zpjRib5misOydSJSCwIdCIterHRxyBxRXmQ5o0mVWmsjN7xYaiW3I%2Bf8YV6gzhdATEqTZI924CDJyiJWS0lTUCKP7Oxs4dHbNQ2ly14JXp8wwqCPwAY6pgGXvbXae88%2F8kVpuQgxw5bOPmDIeUfjP3vqxwQODUeqQD69vkSEr8nKZbt03leREoMPcOBkjg78FGT0XDiOAHlPDZSTiHev98zw5zF8VkcSY%2FDmvzGUdCF8b2nOw9T%2B7VhlPxLjXHBbwEu21geejyykXVQbM5GW0pPx%2FUUCG9rH1WLpCC9eFjM74oRMNSzwIDrRg0UOMjULjdXvlj%2BM%2BsDFpsD8u41x&X-Amz-Signature=2f585d8410d44a93a09f3e7b9563e5a51ce8737a2d42f5268a8940c63bcca0dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYPN5YS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICvPDcSKCR9LMUmjsCF78brCfzEChJHfTVC3N3frMEWrAiAcD8lEy6DPTeVkC6vWnPzvpE5I7QD%2FRUHeKSVW0j%2BcmyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZCo%2BKAdo3OcCKGUKtwD0QyBHDJByIcUetZBpLI1rH5%2F0YvfcGS0BTpohq78MjGYqYGI%2FXp73UXlfl0vj7F%2FqAiWSazTypUwiMZOb4Oesyuqutn2qxy4kwmGTRGx7f%2FXcJO5PKRlTmVtYr2BwZt9fpAWXEN7D%2BoekDuyMIKQKWUHIwU5rsFLrwHZk%2FNIcJ2K6l802lXq6%2F%2BY21pb0QGfwVdC3kZeBuIuSu4tjSaN%2B9nt30OYz6Y%2FzvyvFdPbikQ220H1XlbMzR4k2C9ERtHvZJCwlasP%2BLbcngO%2BeGMEYpTBZN1hybB9QSSntDOXbTx8sCGGSzioDcj5zC67om7cJuh7LCIO23XTgpkJKiPOSl0HEAytUIJmkRQ1efq0G0jXzGgxCtg75T9UrpoXRbMJBTFK1ftoQLN7LkwsXvKg4rk2m6V06swiPSiZaJiyfKqIXDvnhvTdVXM6sZFrwsm1nRstU2L75dEpGFIaWcGOqg0QubiwWsu3i1K2b%2B7GBuelu0qnRKg0Wpl5bFkS0MWzMRhFUYAv2h3qUx%2F6zpjRib5misOydSJSCwIdCIterHRxyBxRXmQ5o0mVWmsjN7xYaiW3I%2Bf8YV6gzhdATEqTZI924CDJyiJWS0lTUCKP7Oxs4dHbNQ2ly14JXp8wwqCPwAY6pgGXvbXae88%2F8kVpuQgxw5bOPmDIeUfjP3vqxwQODUeqQD69vkSEr8nKZbt03leREoMPcOBkjg78FGT0XDiOAHlPDZSTiHev98zw5zF8VkcSY%2FDmvzGUdCF8b2nOw9T%2B7VhlPxLjXHBbwEu21geejyykXVQbM5GW0pPx%2FUUCG9rH1WLpCC9eFjM74oRMNSzwIDrRg0UOMjULjdXvlj%2BM%2BsDFpsD8u41x&X-Amz-Signature=8a8ef3b919e9632e74f29ec5a5d1a0772e8bf6b2e291e402a0e62678761079ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYPN5YS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICvPDcSKCR9LMUmjsCF78brCfzEChJHfTVC3N3frMEWrAiAcD8lEy6DPTeVkC6vWnPzvpE5I7QD%2FRUHeKSVW0j%2BcmyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZCo%2BKAdo3OcCKGUKtwD0QyBHDJByIcUetZBpLI1rH5%2F0YvfcGS0BTpohq78MjGYqYGI%2FXp73UXlfl0vj7F%2FqAiWSazTypUwiMZOb4Oesyuqutn2qxy4kwmGTRGx7f%2FXcJO5PKRlTmVtYr2BwZt9fpAWXEN7D%2BoekDuyMIKQKWUHIwU5rsFLrwHZk%2FNIcJ2K6l802lXq6%2F%2BY21pb0QGfwVdC3kZeBuIuSu4tjSaN%2B9nt30OYz6Y%2FzvyvFdPbikQ220H1XlbMzR4k2C9ERtHvZJCwlasP%2BLbcngO%2BeGMEYpTBZN1hybB9QSSntDOXbTx8sCGGSzioDcj5zC67om7cJuh7LCIO23XTgpkJKiPOSl0HEAytUIJmkRQ1efq0G0jXzGgxCtg75T9UrpoXRbMJBTFK1ftoQLN7LkwsXvKg4rk2m6V06swiPSiZaJiyfKqIXDvnhvTdVXM6sZFrwsm1nRstU2L75dEpGFIaWcGOqg0QubiwWsu3i1K2b%2B7GBuelu0qnRKg0Wpl5bFkS0MWzMRhFUYAv2h3qUx%2F6zpjRib5misOydSJSCwIdCIterHRxyBxRXmQ5o0mVWmsjN7xYaiW3I%2Bf8YV6gzhdATEqTZI924CDJyiJWS0lTUCKP7Oxs4dHbNQ2ly14JXp8wwqCPwAY6pgGXvbXae88%2F8kVpuQgxw5bOPmDIeUfjP3vqxwQODUeqQD69vkSEr8nKZbt03leREoMPcOBkjg78FGT0XDiOAHlPDZSTiHev98zw5zF8VkcSY%2FDmvzGUdCF8b2nOw9T%2B7VhlPxLjXHBbwEu21geejyykXVQbM5GW0pPx%2FUUCG9rH1WLpCC9eFjM74oRMNSzwIDrRg0UOMjULjdXvlj%2BM%2BsDFpsD8u41x&X-Amz-Signature=6676a8c882033c0064ee56613260a6f452f256f2dd8ce7ed71c8fc27d5d27db2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYPN5YS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICvPDcSKCR9LMUmjsCF78brCfzEChJHfTVC3N3frMEWrAiAcD8lEy6DPTeVkC6vWnPzvpE5I7QD%2FRUHeKSVW0j%2BcmyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZCo%2BKAdo3OcCKGUKtwD0QyBHDJByIcUetZBpLI1rH5%2F0YvfcGS0BTpohq78MjGYqYGI%2FXp73UXlfl0vj7F%2FqAiWSazTypUwiMZOb4Oesyuqutn2qxy4kwmGTRGx7f%2FXcJO5PKRlTmVtYr2BwZt9fpAWXEN7D%2BoekDuyMIKQKWUHIwU5rsFLrwHZk%2FNIcJ2K6l802lXq6%2F%2BY21pb0QGfwVdC3kZeBuIuSu4tjSaN%2B9nt30OYz6Y%2FzvyvFdPbikQ220H1XlbMzR4k2C9ERtHvZJCwlasP%2BLbcngO%2BeGMEYpTBZN1hybB9QSSntDOXbTx8sCGGSzioDcj5zC67om7cJuh7LCIO23XTgpkJKiPOSl0HEAytUIJmkRQ1efq0G0jXzGgxCtg75T9UrpoXRbMJBTFK1ftoQLN7LkwsXvKg4rk2m6V06swiPSiZaJiyfKqIXDvnhvTdVXM6sZFrwsm1nRstU2L75dEpGFIaWcGOqg0QubiwWsu3i1K2b%2B7GBuelu0qnRKg0Wpl5bFkS0MWzMRhFUYAv2h3qUx%2F6zpjRib5misOydSJSCwIdCIterHRxyBxRXmQ5o0mVWmsjN7xYaiW3I%2Bf8YV6gzhdATEqTZI924CDJyiJWS0lTUCKP7Oxs4dHbNQ2ly14JXp8wwqCPwAY6pgGXvbXae88%2F8kVpuQgxw5bOPmDIeUfjP3vqxwQODUeqQD69vkSEr8nKZbt03leREoMPcOBkjg78FGT0XDiOAHlPDZSTiHev98zw5zF8VkcSY%2FDmvzGUdCF8b2nOw9T%2B7VhlPxLjXHBbwEu21geejyykXVQbM5GW0pPx%2FUUCG9rH1WLpCC9eFjM74oRMNSzwIDrRg0UOMjULjdXvlj%2BM%2BsDFpsD8u41x&X-Amz-Signature=1d69cd29ed3e5239801f54fe2863f41a8718526b65717b7fb0b12c788dd51076&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYYPN5YS%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T210234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCICvPDcSKCR9LMUmjsCF78brCfzEChJHfTVC3N3frMEWrAiAcD8lEy6DPTeVkC6vWnPzvpE5I7QD%2FRUHeKSVW0j%2BcmyqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpZCo%2BKAdo3OcCKGUKtwD0QyBHDJByIcUetZBpLI1rH5%2F0YvfcGS0BTpohq78MjGYqYGI%2FXp73UXlfl0vj7F%2FqAiWSazTypUwiMZOb4Oesyuqutn2qxy4kwmGTRGx7f%2FXcJO5PKRlTmVtYr2BwZt9fpAWXEN7D%2BoekDuyMIKQKWUHIwU5rsFLrwHZk%2FNIcJ2K6l802lXq6%2F%2BY21pb0QGfwVdC3kZeBuIuSu4tjSaN%2B9nt30OYz6Y%2FzvyvFdPbikQ220H1XlbMzR4k2C9ERtHvZJCwlasP%2BLbcngO%2BeGMEYpTBZN1hybB9QSSntDOXbTx8sCGGSzioDcj5zC67om7cJuh7LCIO23XTgpkJKiPOSl0HEAytUIJmkRQ1efq0G0jXzGgxCtg75T9UrpoXRbMJBTFK1ftoQLN7LkwsXvKg4rk2m6V06swiPSiZaJiyfKqIXDvnhvTdVXM6sZFrwsm1nRstU2L75dEpGFIaWcGOqg0QubiwWsu3i1K2b%2B7GBuelu0qnRKg0Wpl5bFkS0MWzMRhFUYAv2h3qUx%2F6zpjRib5misOydSJSCwIdCIterHRxyBxRXmQ5o0mVWmsjN7xYaiW3I%2Bf8YV6gzhdATEqTZI924CDJyiJWS0lTUCKP7Oxs4dHbNQ2ly14JXp8wwqCPwAY6pgGXvbXae88%2F8kVpuQgxw5bOPmDIeUfjP3vqxwQODUeqQD69vkSEr8nKZbt03leREoMPcOBkjg78FGT0XDiOAHlPDZSTiHev98zw5zF8VkcSY%2FDmvzGUdCF8b2nOw9T%2B7VhlPxLjXHBbwEu21geejyykXVQbM5GW0pPx%2FUUCG9rH1WLpCC9eFjM74oRMNSzwIDrRg0UOMjULjdXvlj%2BM%2BsDFpsD8u41x&X-Amz-Signature=76e6ea07cd344a84640c940094549bcf292f7ff9225aba7659dad07be4764cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
