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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVIAHIX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFU5wQleRZjemggJKM1dtgNTE%2Bc9iELYbOv%2B0eB1XbpAiAmOFahry8U8TEgKCjxpN2eXlPu%2F6ok%2B%2Fy5jhMpRa5OfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZehrOBiBceMUQkgYKtwDWlh6Q81sjMpVa9BhI%2BZMGUQki9p3avZ3l0D0L%2BNouxottiDqXIUpVH5W%2BFE7wsIbZjZm1HiWZH%2BVouxbEfZEh7p71Ecu8R3xr72RQ0wm%2BteCTAkas76x6eotEz%2BRHelgtV8J2wYzc5xL2V%2F0eeuw5A3qPcXH3vzFuWlz7n8newk4IceH%2B1w9iHaKeBrNfOBuIk7iP%2BLn%2Bk7FO37oJ7Nr5Zsj%2BjAq%2FizmACODUPE8MLkt9%2FBSh7TmwdG6KHdgO1LjY7h5YIHgzkJRg16cQrVx77ExrHw5JQCfZEMH9J1xn1vQjDYcXzM7B1xmvjASMYXjp378j5wgcBM0OkSXaw%2FF%2BBy7nDDUWeNyMBAEf%2Bo5zaeMto2ZiZq769U1OqrxYjxhL2G5BDTPYAjPO5U3RXwOGImTYLp06%2BAT%2FDaoAY%2FvkYScyOyFye%2FIgflDaT78MWwAPsOjAWF%2F%2B0rGVM%2BZY63FtgVcm7ME4%2FL2doXKAzfl3z3rdQ00FKwJGUeGqk6xp9OX%2FXGXeuGUsvUkvbqtDjkjSIDF7AIGghj%2BOX5d96LAphnrRnhiaIKX968n8IOUOSydbqDe%2F7NB7714Poj78RSDt7FwTZRPKewFpZ%2FOvMoNGap%2FaI%2FI9sGNVf4lQFMwz6PKvgY6pgGUfdodVGCct6ttdvHrAL8lMa51N6nH8sZ16pDaINXH7Sz2slCIYs%2FibRrZiYXAtxRifxeY8fKLCVRkFtX0qT1rg%2FAVElDF4DlvCxeITEhz7wS%2BiH9ivZI9UBIwO%2Fos%2FIvVJotnWSLdmjHIwHKAKSlcGQKWw2LywCIML9u1PUmrXrUl4%2BzkiaPysaa2PWKmwV%2BK8s1c%2BSQ%2F5pV6Q6y26suO2rZAjDI5&X-Amz-Signature=2ae243f31356778a108b2fe4e389a68aa733c0cea77ae773c0bcfb2a2745bc4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVIAHIX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFU5wQleRZjemggJKM1dtgNTE%2Bc9iELYbOv%2B0eB1XbpAiAmOFahry8U8TEgKCjxpN2eXlPu%2F6ok%2B%2Fy5jhMpRa5OfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZehrOBiBceMUQkgYKtwDWlh6Q81sjMpVa9BhI%2BZMGUQki9p3avZ3l0D0L%2BNouxottiDqXIUpVH5W%2BFE7wsIbZjZm1HiWZH%2BVouxbEfZEh7p71Ecu8R3xr72RQ0wm%2BteCTAkas76x6eotEz%2BRHelgtV8J2wYzc5xL2V%2F0eeuw5A3qPcXH3vzFuWlz7n8newk4IceH%2B1w9iHaKeBrNfOBuIk7iP%2BLn%2Bk7FO37oJ7Nr5Zsj%2BjAq%2FizmACODUPE8MLkt9%2FBSh7TmwdG6KHdgO1LjY7h5YIHgzkJRg16cQrVx77ExrHw5JQCfZEMH9J1xn1vQjDYcXzM7B1xmvjASMYXjp378j5wgcBM0OkSXaw%2FF%2BBy7nDDUWeNyMBAEf%2Bo5zaeMto2ZiZq769U1OqrxYjxhL2G5BDTPYAjPO5U3RXwOGImTYLp06%2BAT%2FDaoAY%2FvkYScyOyFye%2FIgflDaT78MWwAPsOjAWF%2F%2B0rGVM%2BZY63FtgVcm7ME4%2FL2doXKAzfl3z3rdQ00FKwJGUeGqk6xp9OX%2FXGXeuGUsvUkvbqtDjkjSIDF7AIGghj%2BOX5d96LAphnrRnhiaIKX968n8IOUOSydbqDe%2F7NB7714Poj78RSDt7FwTZRPKewFpZ%2FOvMoNGap%2FaI%2FI9sGNVf4lQFMwz6PKvgY6pgGUfdodVGCct6ttdvHrAL8lMa51N6nH8sZ16pDaINXH7Sz2slCIYs%2FibRrZiYXAtxRifxeY8fKLCVRkFtX0qT1rg%2FAVElDF4DlvCxeITEhz7wS%2BiH9ivZI9UBIwO%2Fos%2FIvVJotnWSLdmjHIwHKAKSlcGQKWw2LywCIML9u1PUmrXrUl4%2BzkiaPysaa2PWKmwV%2BK8s1c%2BSQ%2F5pV6Q6y26suO2rZAjDI5&X-Amz-Signature=eef6e90b6e27fe261bdb96206a78587c820436a52cdb74a6efd532333ef5ba76&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVIAHIX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFU5wQleRZjemggJKM1dtgNTE%2Bc9iELYbOv%2B0eB1XbpAiAmOFahry8U8TEgKCjxpN2eXlPu%2F6ok%2B%2Fy5jhMpRa5OfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZehrOBiBceMUQkgYKtwDWlh6Q81sjMpVa9BhI%2BZMGUQki9p3avZ3l0D0L%2BNouxottiDqXIUpVH5W%2BFE7wsIbZjZm1HiWZH%2BVouxbEfZEh7p71Ecu8R3xr72RQ0wm%2BteCTAkas76x6eotEz%2BRHelgtV8J2wYzc5xL2V%2F0eeuw5A3qPcXH3vzFuWlz7n8newk4IceH%2B1w9iHaKeBrNfOBuIk7iP%2BLn%2Bk7FO37oJ7Nr5Zsj%2BjAq%2FizmACODUPE8MLkt9%2FBSh7TmwdG6KHdgO1LjY7h5YIHgzkJRg16cQrVx77ExrHw5JQCfZEMH9J1xn1vQjDYcXzM7B1xmvjASMYXjp378j5wgcBM0OkSXaw%2FF%2BBy7nDDUWeNyMBAEf%2Bo5zaeMto2ZiZq769U1OqrxYjxhL2G5BDTPYAjPO5U3RXwOGImTYLp06%2BAT%2FDaoAY%2FvkYScyOyFye%2FIgflDaT78MWwAPsOjAWF%2F%2B0rGVM%2BZY63FtgVcm7ME4%2FL2doXKAzfl3z3rdQ00FKwJGUeGqk6xp9OX%2FXGXeuGUsvUkvbqtDjkjSIDF7AIGghj%2BOX5d96LAphnrRnhiaIKX968n8IOUOSydbqDe%2F7NB7714Poj78RSDt7FwTZRPKewFpZ%2FOvMoNGap%2FaI%2FI9sGNVf4lQFMwz6PKvgY6pgGUfdodVGCct6ttdvHrAL8lMa51N6nH8sZ16pDaINXH7Sz2slCIYs%2FibRrZiYXAtxRifxeY8fKLCVRkFtX0qT1rg%2FAVElDF4DlvCxeITEhz7wS%2BiH9ivZI9UBIwO%2Fos%2FIvVJotnWSLdmjHIwHKAKSlcGQKWw2LywCIML9u1PUmrXrUl4%2BzkiaPysaa2PWKmwV%2BK8s1c%2BSQ%2F5pV6Q6y26suO2rZAjDI5&X-Amz-Signature=e3f31e3882f306b863c81fbb1a1de993aae4dc61691f808a8bed7a219110d04c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVIAHIX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFU5wQleRZjemggJKM1dtgNTE%2Bc9iELYbOv%2B0eB1XbpAiAmOFahry8U8TEgKCjxpN2eXlPu%2F6ok%2B%2Fy5jhMpRa5OfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZehrOBiBceMUQkgYKtwDWlh6Q81sjMpVa9BhI%2BZMGUQki9p3avZ3l0D0L%2BNouxottiDqXIUpVH5W%2BFE7wsIbZjZm1HiWZH%2BVouxbEfZEh7p71Ecu8R3xr72RQ0wm%2BteCTAkas76x6eotEz%2BRHelgtV8J2wYzc5xL2V%2F0eeuw5A3qPcXH3vzFuWlz7n8newk4IceH%2B1w9iHaKeBrNfOBuIk7iP%2BLn%2Bk7FO37oJ7Nr5Zsj%2BjAq%2FizmACODUPE8MLkt9%2FBSh7TmwdG6KHdgO1LjY7h5YIHgzkJRg16cQrVx77ExrHw5JQCfZEMH9J1xn1vQjDYcXzM7B1xmvjASMYXjp378j5wgcBM0OkSXaw%2FF%2BBy7nDDUWeNyMBAEf%2Bo5zaeMto2ZiZq769U1OqrxYjxhL2G5BDTPYAjPO5U3RXwOGImTYLp06%2BAT%2FDaoAY%2FvkYScyOyFye%2FIgflDaT78MWwAPsOjAWF%2F%2B0rGVM%2BZY63FtgVcm7ME4%2FL2doXKAzfl3z3rdQ00FKwJGUeGqk6xp9OX%2FXGXeuGUsvUkvbqtDjkjSIDF7AIGghj%2BOX5d96LAphnrRnhiaIKX968n8IOUOSydbqDe%2F7NB7714Poj78RSDt7FwTZRPKewFpZ%2FOvMoNGap%2FaI%2FI9sGNVf4lQFMwz6PKvgY6pgGUfdodVGCct6ttdvHrAL8lMa51N6nH8sZ16pDaINXH7Sz2slCIYs%2FibRrZiYXAtxRifxeY8fKLCVRkFtX0qT1rg%2FAVElDF4DlvCxeITEhz7wS%2BiH9ivZI9UBIwO%2Fos%2FIvVJotnWSLdmjHIwHKAKSlcGQKWw2LywCIML9u1PUmrXrUl4%2BzkiaPysaa2PWKmwV%2BK8s1c%2BSQ%2F5pV6Q6y26suO2rZAjDI5&X-Amz-Signature=f65f2af222392b919902948b9f2df4e3153dc54e33e3eda72a4dd38e911f8d34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVIAHIX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFU5wQleRZjemggJKM1dtgNTE%2Bc9iELYbOv%2B0eB1XbpAiAmOFahry8U8TEgKCjxpN2eXlPu%2F6ok%2B%2Fy5jhMpRa5OfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZehrOBiBceMUQkgYKtwDWlh6Q81sjMpVa9BhI%2BZMGUQki9p3avZ3l0D0L%2BNouxottiDqXIUpVH5W%2BFE7wsIbZjZm1HiWZH%2BVouxbEfZEh7p71Ecu8R3xr72RQ0wm%2BteCTAkas76x6eotEz%2BRHelgtV8J2wYzc5xL2V%2F0eeuw5A3qPcXH3vzFuWlz7n8newk4IceH%2B1w9iHaKeBrNfOBuIk7iP%2BLn%2Bk7FO37oJ7Nr5Zsj%2BjAq%2FizmACODUPE8MLkt9%2FBSh7TmwdG6KHdgO1LjY7h5YIHgzkJRg16cQrVx77ExrHw5JQCfZEMH9J1xn1vQjDYcXzM7B1xmvjASMYXjp378j5wgcBM0OkSXaw%2FF%2BBy7nDDUWeNyMBAEf%2Bo5zaeMto2ZiZq769U1OqrxYjxhL2G5BDTPYAjPO5U3RXwOGImTYLp06%2BAT%2FDaoAY%2FvkYScyOyFye%2FIgflDaT78MWwAPsOjAWF%2F%2B0rGVM%2BZY63FtgVcm7ME4%2FL2doXKAzfl3z3rdQ00FKwJGUeGqk6xp9OX%2FXGXeuGUsvUkvbqtDjkjSIDF7AIGghj%2BOX5d96LAphnrRnhiaIKX968n8IOUOSydbqDe%2F7NB7714Poj78RSDt7FwTZRPKewFpZ%2FOvMoNGap%2FaI%2FI9sGNVf4lQFMwz6PKvgY6pgGUfdodVGCct6ttdvHrAL8lMa51N6nH8sZ16pDaINXH7Sz2slCIYs%2FibRrZiYXAtxRifxeY8fKLCVRkFtX0qT1rg%2FAVElDF4DlvCxeITEhz7wS%2BiH9ivZI9UBIwO%2Fos%2FIvVJotnWSLdmjHIwHKAKSlcGQKWw2LywCIML9u1PUmrXrUl4%2BzkiaPysaa2PWKmwV%2BK8s1c%2BSQ%2F5pV6Q6y26suO2rZAjDI5&X-Amz-Signature=72826c00d7cde0fac9288e97d8d6fd4d9097ba0ad366b310bca9d093884cd5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVIAHIX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFU5wQleRZjemggJKM1dtgNTE%2Bc9iELYbOv%2B0eB1XbpAiAmOFahry8U8TEgKCjxpN2eXlPu%2F6ok%2B%2Fy5jhMpRa5OfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZehrOBiBceMUQkgYKtwDWlh6Q81sjMpVa9BhI%2BZMGUQki9p3avZ3l0D0L%2BNouxottiDqXIUpVH5W%2BFE7wsIbZjZm1HiWZH%2BVouxbEfZEh7p71Ecu8R3xr72RQ0wm%2BteCTAkas76x6eotEz%2BRHelgtV8J2wYzc5xL2V%2F0eeuw5A3qPcXH3vzFuWlz7n8newk4IceH%2B1w9iHaKeBrNfOBuIk7iP%2BLn%2Bk7FO37oJ7Nr5Zsj%2BjAq%2FizmACODUPE8MLkt9%2FBSh7TmwdG6KHdgO1LjY7h5YIHgzkJRg16cQrVx77ExrHw5JQCfZEMH9J1xn1vQjDYcXzM7B1xmvjASMYXjp378j5wgcBM0OkSXaw%2FF%2BBy7nDDUWeNyMBAEf%2Bo5zaeMto2ZiZq769U1OqrxYjxhL2G5BDTPYAjPO5U3RXwOGImTYLp06%2BAT%2FDaoAY%2FvkYScyOyFye%2FIgflDaT78MWwAPsOjAWF%2F%2B0rGVM%2BZY63FtgVcm7ME4%2FL2doXKAzfl3z3rdQ00FKwJGUeGqk6xp9OX%2FXGXeuGUsvUkvbqtDjkjSIDF7AIGghj%2BOX5d96LAphnrRnhiaIKX968n8IOUOSydbqDe%2F7NB7714Poj78RSDt7FwTZRPKewFpZ%2FOvMoNGap%2FaI%2FI9sGNVf4lQFMwz6PKvgY6pgGUfdodVGCct6ttdvHrAL8lMa51N6nH8sZ16pDaINXH7Sz2slCIYs%2FibRrZiYXAtxRifxeY8fKLCVRkFtX0qT1rg%2FAVElDF4DlvCxeITEhz7wS%2BiH9ivZI9UBIwO%2Fos%2FIvVJotnWSLdmjHIwHKAKSlcGQKWw2LywCIML9u1PUmrXrUl4%2BzkiaPysaa2PWKmwV%2BK8s1c%2BSQ%2F5pV6Q6y26suO2rZAjDI5&X-Amz-Signature=4fbe0bc8b204c2db8e27acd6879106fd22eeb2ca79d76c4455ea60d2d35b8320&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVIAHIX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFU5wQleRZjemggJKM1dtgNTE%2Bc9iELYbOv%2B0eB1XbpAiAmOFahry8U8TEgKCjxpN2eXlPu%2F6ok%2B%2Fy5jhMpRa5OfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZehrOBiBceMUQkgYKtwDWlh6Q81sjMpVa9BhI%2BZMGUQki9p3avZ3l0D0L%2BNouxottiDqXIUpVH5W%2BFE7wsIbZjZm1HiWZH%2BVouxbEfZEh7p71Ecu8R3xr72RQ0wm%2BteCTAkas76x6eotEz%2BRHelgtV8J2wYzc5xL2V%2F0eeuw5A3qPcXH3vzFuWlz7n8newk4IceH%2B1w9iHaKeBrNfOBuIk7iP%2BLn%2Bk7FO37oJ7Nr5Zsj%2BjAq%2FizmACODUPE8MLkt9%2FBSh7TmwdG6KHdgO1LjY7h5YIHgzkJRg16cQrVx77ExrHw5JQCfZEMH9J1xn1vQjDYcXzM7B1xmvjASMYXjp378j5wgcBM0OkSXaw%2FF%2BBy7nDDUWeNyMBAEf%2Bo5zaeMto2ZiZq769U1OqrxYjxhL2G5BDTPYAjPO5U3RXwOGImTYLp06%2BAT%2FDaoAY%2FvkYScyOyFye%2FIgflDaT78MWwAPsOjAWF%2F%2B0rGVM%2BZY63FtgVcm7ME4%2FL2doXKAzfl3z3rdQ00FKwJGUeGqk6xp9OX%2FXGXeuGUsvUkvbqtDjkjSIDF7AIGghj%2BOX5d96LAphnrRnhiaIKX968n8IOUOSydbqDe%2F7NB7714Poj78RSDt7FwTZRPKewFpZ%2FOvMoNGap%2FaI%2FI9sGNVf4lQFMwz6PKvgY6pgGUfdodVGCct6ttdvHrAL8lMa51N6nH8sZ16pDaINXH7Sz2slCIYs%2FibRrZiYXAtxRifxeY8fKLCVRkFtX0qT1rg%2FAVElDF4DlvCxeITEhz7wS%2BiH9ivZI9UBIwO%2Fos%2FIvVJotnWSLdmjHIwHKAKSlcGQKWw2LywCIML9u1PUmrXrUl4%2BzkiaPysaa2PWKmwV%2BK8s1c%2BSQ%2F5pV6Q6y26suO2rZAjDI5&X-Amz-Signature=82d4703b8964b7e83a4e7d3a15e8e8bbbb7a6df7442b8829b12085e6cd035767&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKVIAHIX%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFU5wQleRZjemggJKM1dtgNTE%2Bc9iELYbOv%2B0eB1XbpAiAmOFahry8U8TEgKCjxpN2eXlPu%2F6ok%2B%2Fy5jhMpRa5OfyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZehrOBiBceMUQkgYKtwDWlh6Q81sjMpVa9BhI%2BZMGUQki9p3avZ3l0D0L%2BNouxottiDqXIUpVH5W%2BFE7wsIbZjZm1HiWZH%2BVouxbEfZEh7p71Ecu8R3xr72RQ0wm%2BteCTAkas76x6eotEz%2BRHelgtV8J2wYzc5xL2V%2F0eeuw5A3qPcXH3vzFuWlz7n8newk4IceH%2B1w9iHaKeBrNfOBuIk7iP%2BLn%2Bk7FO37oJ7Nr5Zsj%2BjAq%2FizmACODUPE8MLkt9%2FBSh7TmwdG6KHdgO1LjY7h5YIHgzkJRg16cQrVx77ExrHw5JQCfZEMH9J1xn1vQjDYcXzM7B1xmvjASMYXjp378j5wgcBM0OkSXaw%2FF%2BBy7nDDUWeNyMBAEf%2Bo5zaeMto2ZiZq769U1OqrxYjxhL2G5BDTPYAjPO5U3RXwOGImTYLp06%2BAT%2FDaoAY%2FvkYScyOyFye%2FIgflDaT78MWwAPsOjAWF%2F%2B0rGVM%2BZY63FtgVcm7ME4%2FL2doXKAzfl3z3rdQ00FKwJGUeGqk6xp9OX%2FXGXeuGUsvUkvbqtDjkjSIDF7AIGghj%2BOX5d96LAphnrRnhiaIKX968n8IOUOSydbqDe%2F7NB7714Poj78RSDt7FwTZRPKewFpZ%2FOvMoNGap%2FaI%2FI9sGNVf4lQFMwz6PKvgY6pgGUfdodVGCct6ttdvHrAL8lMa51N6nH8sZ16pDaINXH7Sz2slCIYs%2FibRrZiYXAtxRifxeY8fKLCVRkFtX0qT1rg%2FAVElDF4DlvCxeITEhz7wS%2BiH9ivZI9UBIwO%2Fos%2FIvVJotnWSLdmjHIwHKAKSlcGQKWw2LywCIML9u1PUmrXrUl4%2BzkiaPysaa2PWKmwV%2BK8s1c%2BSQ%2F5pV6Q6y26suO2rZAjDI5&X-Amz-Signature=4722ef45449923f2b16aa41e3c6824c3cb27ccafdf651003821fa01b1e30ee66&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
