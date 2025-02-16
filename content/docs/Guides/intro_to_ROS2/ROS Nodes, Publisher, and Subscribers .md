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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIFLQF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDweJJ%2Bakfv50A1cxZZRzl65vOjz4Cx7nx6T4POof9cvgIhAKuaw7lzwnGoV4i6wvd9UHtO6avuzWow0p92AGXUDGpnKv8DCGUQABoMNjM3NDIzMTgzODA1IgwlhYH31Xr8JWZuXFgq3ANpiHlsq4%2FHTw8eexiwcoQ0Eq62ekBajLQOzB1mOAx3BH%2Bet19wiGPAZh3xdwqr8bntl58Wvz6a%2Fx2bCpS59%2FgZAp8LP71vX9x9GMn5Gih%2F6uwGPO8WoHTp9%2Fz7PemoG%2FkS2qHkAcS%2ByBPS4WvIbM2CA5iP9bWkRKGOw4kZ5FRP%2F30k8dNtYVmQdfK6FUR%2BnBOYsAvolTzsEkL4xxu0DmgileNijqCGTycH7D6zYnmxiGtiVCjaEViKaDzheXDL88w5gV5bR0oaDdEePmF0k3fp60HaQQhgtiAZMiGDEF30VxUfEUWaRU3ZBvtZ0WyB2av9JrnrFwg6RNc61UxO2KE18vttzg3TC70t99nWKzlU%2B67P71kgQwOO%2FTjWM%2BCgFqbg8lfVgn486sTiDg1atuiY0rKIY2lF7%2F2ubgExpT5yHQtsk%2FIoKZM70QWpEBr2F89KfyoVEntsLsJn83aUtGdWSjw2%2BxY5UZgq%2BYZszINB6YtlaW5hN2itEhT4djghsJmSBJLzF2BT%2FE5IiRY32%2BzZWmIzkfdEFfMkM6mCq7XyB0%2FT%2BHJ2zwGsBqJ%2F5UZTOHpi5LxUhJZufUmWn6JCCgNE7y4JoBNqlWVOIohCDnrRSXwpMzHurn7BZys9bjCXiMm9BjqkAa9CxA6cVMj0liuv%2BbS5trmnjHK4rNTxgAeGOS6JrDQGgRNlYTwAvTyLg2S2tyHgLM0vpFVg7pnCWCrNmZBeZjdEH7gPnnMOppTbqOSpFX6M88zB4ABNUzcg0uedhKMI%2B4L%2FCANngi3tnzrSiH%2FvCBj%2FkSI9iXpP3qYb0HbWNoixH7s%2FNP8PkznbQtouEurQB0olacLzc97NDmMXtBuu2OCroBgB&X-Amz-Signature=89bf9ed79c571e9ca4d9c800d5bd5065057869be3ec07a437d9c1308f36577c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIFLQF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDweJJ%2Bakfv50A1cxZZRzl65vOjz4Cx7nx6T4POof9cvgIhAKuaw7lzwnGoV4i6wvd9UHtO6avuzWow0p92AGXUDGpnKv8DCGUQABoMNjM3NDIzMTgzODA1IgwlhYH31Xr8JWZuXFgq3ANpiHlsq4%2FHTw8eexiwcoQ0Eq62ekBajLQOzB1mOAx3BH%2Bet19wiGPAZh3xdwqr8bntl58Wvz6a%2Fx2bCpS59%2FgZAp8LP71vX9x9GMn5Gih%2F6uwGPO8WoHTp9%2Fz7PemoG%2FkS2qHkAcS%2ByBPS4WvIbM2CA5iP9bWkRKGOw4kZ5FRP%2F30k8dNtYVmQdfK6FUR%2BnBOYsAvolTzsEkL4xxu0DmgileNijqCGTycH7D6zYnmxiGtiVCjaEViKaDzheXDL88w5gV5bR0oaDdEePmF0k3fp60HaQQhgtiAZMiGDEF30VxUfEUWaRU3ZBvtZ0WyB2av9JrnrFwg6RNc61UxO2KE18vttzg3TC70t99nWKzlU%2B67P71kgQwOO%2FTjWM%2BCgFqbg8lfVgn486sTiDg1atuiY0rKIY2lF7%2F2ubgExpT5yHQtsk%2FIoKZM70QWpEBr2F89KfyoVEntsLsJn83aUtGdWSjw2%2BxY5UZgq%2BYZszINB6YtlaW5hN2itEhT4djghsJmSBJLzF2BT%2FE5IiRY32%2BzZWmIzkfdEFfMkM6mCq7XyB0%2FT%2BHJ2zwGsBqJ%2F5UZTOHpi5LxUhJZufUmWn6JCCgNE7y4JoBNqlWVOIohCDnrRSXwpMzHurn7BZys9bjCXiMm9BjqkAa9CxA6cVMj0liuv%2BbS5trmnjHK4rNTxgAeGOS6JrDQGgRNlYTwAvTyLg2S2tyHgLM0vpFVg7pnCWCrNmZBeZjdEH7gPnnMOppTbqOSpFX6M88zB4ABNUzcg0uedhKMI%2B4L%2FCANngi3tnzrSiH%2FvCBj%2FkSI9iXpP3qYb0HbWNoixH7s%2FNP8PkznbQtouEurQB0olacLzc97NDmMXtBuu2OCroBgB&X-Amz-Signature=b63e3d076afd02f8d97e4b6c9523e1de640c6f3836cadec249c21f9f53afc29e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIFLQF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDweJJ%2Bakfv50A1cxZZRzl65vOjz4Cx7nx6T4POof9cvgIhAKuaw7lzwnGoV4i6wvd9UHtO6avuzWow0p92AGXUDGpnKv8DCGUQABoMNjM3NDIzMTgzODA1IgwlhYH31Xr8JWZuXFgq3ANpiHlsq4%2FHTw8eexiwcoQ0Eq62ekBajLQOzB1mOAx3BH%2Bet19wiGPAZh3xdwqr8bntl58Wvz6a%2Fx2bCpS59%2FgZAp8LP71vX9x9GMn5Gih%2F6uwGPO8WoHTp9%2Fz7PemoG%2FkS2qHkAcS%2ByBPS4WvIbM2CA5iP9bWkRKGOw4kZ5FRP%2F30k8dNtYVmQdfK6FUR%2BnBOYsAvolTzsEkL4xxu0DmgileNijqCGTycH7D6zYnmxiGtiVCjaEViKaDzheXDL88w5gV5bR0oaDdEePmF0k3fp60HaQQhgtiAZMiGDEF30VxUfEUWaRU3ZBvtZ0WyB2av9JrnrFwg6RNc61UxO2KE18vttzg3TC70t99nWKzlU%2B67P71kgQwOO%2FTjWM%2BCgFqbg8lfVgn486sTiDg1atuiY0rKIY2lF7%2F2ubgExpT5yHQtsk%2FIoKZM70QWpEBr2F89KfyoVEntsLsJn83aUtGdWSjw2%2BxY5UZgq%2BYZszINB6YtlaW5hN2itEhT4djghsJmSBJLzF2BT%2FE5IiRY32%2BzZWmIzkfdEFfMkM6mCq7XyB0%2FT%2BHJ2zwGsBqJ%2F5UZTOHpi5LxUhJZufUmWn6JCCgNE7y4JoBNqlWVOIohCDnrRSXwpMzHurn7BZys9bjCXiMm9BjqkAa9CxA6cVMj0liuv%2BbS5trmnjHK4rNTxgAeGOS6JrDQGgRNlYTwAvTyLg2S2tyHgLM0vpFVg7pnCWCrNmZBeZjdEH7gPnnMOppTbqOSpFX6M88zB4ABNUzcg0uedhKMI%2B4L%2FCANngi3tnzrSiH%2FvCBj%2FkSI9iXpP3qYb0HbWNoixH7s%2FNP8PkznbQtouEurQB0olacLzc97NDmMXtBuu2OCroBgB&X-Amz-Signature=0c38e6a7268223d5f1b8c4069d4eaf855a2c3193de49e79bae5c385a266998ea&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIFLQF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDweJJ%2Bakfv50A1cxZZRzl65vOjz4Cx7nx6T4POof9cvgIhAKuaw7lzwnGoV4i6wvd9UHtO6avuzWow0p92AGXUDGpnKv8DCGUQABoMNjM3NDIzMTgzODA1IgwlhYH31Xr8JWZuXFgq3ANpiHlsq4%2FHTw8eexiwcoQ0Eq62ekBajLQOzB1mOAx3BH%2Bet19wiGPAZh3xdwqr8bntl58Wvz6a%2Fx2bCpS59%2FgZAp8LP71vX9x9GMn5Gih%2F6uwGPO8WoHTp9%2Fz7PemoG%2FkS2qHkAcS%2ByBPS4WvIbM2CA5iP9bWkRKGOw4kZ5FRP%2F30k8dNtYVmQdfK6FUR%2BnBOYsAvolTzsEkL4xxu0DmgileNijqCGTycH7D6zYnmxiGtiVCjaEViKaDzheXDL88w5gV5bR0oaDdEePmF0k3fp60HaQQhgtiAZMiGDEF30VxUfEUWaRU3ZBvtZ0WyB2av9JrnrFwg6RNc61UxO2KE18vttzg3TC70t99nWKzlU%2B67P71kgQwOO%2FTjWM%2BCgFqbg8lfVgn486sTiDg1atuiY0rKIY2lF7%2F2ubgExpT5yHQtsk%2FIoKZM70QWpEBr2F89KfyoVEntsLsJn83aUtGdWSjw2%2BxY5UZgq%2BYZszINB6YtlaW5hN2itEhT4djghsJmSBJLzF2BT%2FE5IiRY32%2BzZWmIzkfdEFfMkM6mCq7XyB0%2FT%2BHJ2zwGsBqJ%2F5UZTOHpi5LxUhJZufUmWn6JCCgNE7y4JoBNqlWVOIohCDnrRSXwpMzHurn7BZys9bjCXiMm9BjqkAa9CxA6cVMj0liuv%2BbS5trmnjHK4rNTxgAeGOS6JrDQGgRNlYTwAvTyLg2S2tyHgLM0vpFVg7pnCWCrNmZBeZjdEH7gPnnMOppTbqOSpFX6M88zB4ABNUzcg0uedhKMI%2B4L%2FCANngi3tnzrSiH%2FvCBj%2FkSI9iXpP3qYb0HbWNoixH7s%2FNP8PkznbQtouEurQB0olacLzc97NDmMXtBuu2OCroBgB&X-Amz-Signature=b5500f3849918c30d58fd6a946e1511cb056c572935fbc9ebe16c756d78c0362&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIFLQF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDweJJ%2Bakfv50A1cxZZRzl65vOjz4Cx7nx6T4POof9cvgIhAKuaw7lzwnGoV4i6wvd9UHtO6avuzWow0p92AGXUDGpnKv8DCGUQABoMNjM3NDIzMTgzODA1IgwlhYH31Xr8JWZuXFgq3ANpiHlsq4%2FHTw8eexiwcoQ0Eq62ekBajLQOzB1mOAx3BH%2Bet19wiGPAZh3xdwqr8bntl58Wvz6a%2Fx2bCpS59%2FgZAp8LP71vX9x9GMn5Gih%2F6uwGPO8WoHTp9%2Fz7PemoG%2FkS2qHkAcS%2ByBPS4WvIbM2CA5iP9bWkRKGOw4kZ5FRP%2F30k8dNtYVmQdfK6FUR%2BnBOYsAvolTzsEkL4xxu0DmgileNijqCGTycH7D6zYnmxiGtiVCjaEViKaDzheXDL88w5gV5bR0oaDdEePmF0k3fp60HaQQhgtiAZMiGDEF30VxUfEUWaRU3ZBvtZ0WyB2av9JrnrFwg6RNc61UxO2KE18vttzg3TC70t99nWKzlU%2B67P71kgQwOO%2FTjWM%2BCgFqbg8lfVgn486sTiDg1atuiY0rKIY2lF7%2F2ubgExpT5yHQtsk%2FIoKZM70QWpEBr2F89KfyoVEntsLsJn83aUtGdWSjw2%2BxY5UZgq%2BYZszINB6YtlaW5hN2itEhT4djghsJmSBJLzF2BT%2FE5IiRY32%2BzZWmIzkfdEFfMkM6mCq7XyB0%2FT%2BHJ2zwGsBqJ%2F5UZTOHpi5LxUhJZufUmWn6JCCgNE7y4JoBNqlWVOIohCDnrRSXwpMzHurn7BZys9bjCXiMm9BjqkAa9CxA6cVMj0liuv%2BbS5trmnjHK4rNTxgAeGOS6JrDQGgRNlYTwAvTyLg2S2tyHgLM0vpFVg7pnCWCrNmZBeZjdEH7gPnnMOppTbqOSpFX6M88zB4ABNUzcg0uedhKMI%2B4L%2FCANngi3tnzrSiH%2FvCBj%2FkSI9iXpP3qYb0HbWNoixH7s%2FNP8PkznbQtouEurQB0olacLzc97NDmMXtBuu2OCroBgB&X-Amz-Signature=074c98323752cc79cbdc9a5160d2c3cc053dc94c46384c9daabda1fafb6a4796&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIFLQF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDweJJ%2Bakfv50A1cxZZRzl65vOjz4Cx7nx6T4POof9cvgIhAKuaw7lzwnGoV4i6wvd9UHtO6avuzWow0p92AGXUDGpnKv8DCGUQABoMNjM3NDIzMTgzODA1IgwlhYH31Xr8JWZuXFgq3ANpiHlsq4%2FHTw8eexiwcoQ0Eq62ekBajLQOzB1mOAx3BH%2Bet19wiGPAZh3xdwqr8bntl58Wvz6a%2Fx2bCpS59%2FgZAp8LP71vX9x9GMn5Gih%2F6uwGPO8WoHTp9%2Fz7PemoG%2FkS2qHkAcS%2ByBPS4WvIbM2CA5iP9bWkRKGOw4kZ5FRP%2F30k8dNtYVmQdfK6FUR%2BnBOYsAvolTzsEkL4xxu0DmgileNijqCGTycH7D6zYnmxiGtiVCjaEViKaDzheXDL88w5gV5bR0oaDdEePmF0k3fp60HaQQhgtiAZMiGDEF30VxUfEUWaRU3ZBvtZ0WyB2av9JrnrFwg6RNc61UxO2KE18vttzg3TC70t99nWKzlU%2B67P71kgQwOO%2FTjWM%2BCgFqbg8lfVgn486sTiDg1atuiY0rKIY2lF7%2F2ubgExpT5yHQtsk%2FIoKZM70QWpEBr2F89KfyoVEntsLsJn83aUtGdWSjw2%2BxY5UZgq%2BYZszINB6YtlaW5hN2itEhT4djghsJmSBJLzF2BT%2FE5IiRY32%2BzZWmIzkfdEFfMkM6mCq7XyB0%2FT%2BHJ2zwGsBqJ%2F5UZTOHpi5LxUhJZufUmWn6JCCgNE7y4JoBNqlWVOIohCDnrRSXwpMzHurn7BZys9bjCXiMm9BjqkAa9CxA6cVMj0liuv%2BbS5trmnjHK4rNTxgAeGOS6JrDQGgRNlYTwAvTyLg2S2tyHgLM0vpFVg7pnCWCrNmZBeZjdEH7gPnnMOppTbqOSpFX6M88zB4ABNUzcg0uedhKMI%2B4L%2FCANngi3tnzrSiH%2FvCBj%2FkSI9iXpP3qYb0HbWNoixH7s%2FNP8PkznbQtouEurQB0olacLzc97NDmMXtBuu2OCroBgB&X-Amz-Signature=77882ee306c897a3ac5b83f95e1221a8070d26289a09b3614671c7dc95089bf1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIFLQF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDweJJ%2Bakfv50A1cxZZRzl65vOjz4Cx7nx6T4POof9cvgIhAKuaw7lzwnGoV4i6wvd9UHtO6avuzWow0p92AGXUDGpnKv8DCGUQABoMNjM3NDIzMTgzODA1IgwlhYH31Xr8JWZuXFgq3ANpiHlsq4%2FHTw8eexiwcoQ0Eq62ekBajLQOzB1mOAx3BH%2Bet19wiGPAZh3xdwqr8bntl58Wvz6a%2Fx2bCpS59%2FgZAp8LP71vX9x9GMn5Gih%2F6uwGPO8WoHTp9%2Fz7PemoG%2FkS2qHkAcS%2ByBPS4WvIbM2CA5iP9bWkRKGOw4kZ5FRP%2F30k8dNtYVmQdfK6FUR%2BnBOYsAvolTzsEkL4xxu0DmgileNijqCGTycH7D6zYnmxiGtiVCjaEViKaDzheXDL88w5gV5bR0oaDdEePmF0k3fp60HaQQhgtiAZMiGDEF30VxUfEUWaRU3ZBvtZ0WyB2av9JrnrFwg6RNc61UxO2KE18vttzg3TC70t99nWKzlU%2B67P71kgQwOO%2FTjWM%2BCgFqbg8lfVgn486sTiDg1atuiY0rKIY2lF7%2F2ubgExpT5yHQtsk%2FIoKZM70QWpEBr2F89KfyoVEntsLsJn83aUtGdWSjw2%2BxY5UZgq%2BYZszINB6YtlaW5hN2itEhT4djghsJmSBJLzF2BT%2FE5IiRY32%2BzZWmIzkfdEFfMkM6mCq7XyB0%2FT%2BHJ2zwGsBqJ%2F5UZTOHpi5LxUhJZufUmWn6JCCgNE7y4JoBNqlWVOIohCDnrRSXwpMzHurn7BZys9bjCXiMm9BjqkAa9CxA6cVMj0liuv%2BbS5trmnjHK4rNTxgAeGOS6JrDQGgRNlYTwAvTyLg2S2tyHgLM0vpFVg7pnCWCrNmZBeZjdEH7gPnnMOppTbqOSpFX6M88zB4ABNUzcg0uedhKMI%2B4L%2FCANngi3tnzrSiH%2FvCBj%2FkSI9iXpP3qYb0HbWNoixH7s%2FNP8PkznbQtouEurQB0olacLzc97NDmMXtBuu2OCroBgB&X-Amz-Signature=d8461148e7e13e5eb45fe1c357719f44274b56d808f7fb94592dfbbe7e0a0c4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIFLQF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDweJJ%2Bakfv50A1cxZZRzl65vOjz4Cx7nx6T4POof9cvgIhAKuaw7lzwnGoV4i6wvd9UHtO6avuzWow0p92AGXUDGpnKv8DCGUQABoMNjM3NDIzMTgzODA1IgwlhYH31Xr8JWZuXFgq3ANpiHlsq4%2FHTw8eexiwcoQ0Eq62ekBajLQOzB1mOAx3BH%2Bet19wiGPAZh3xdwqr8bntl58Wvz6a%2Fx2bCpS59%2FgZAp8LP71vX9x9GMn5Gih%2F6uwGPO8WoHTp9%2Fz7PemoG%2FkS2qHkAcS%2ByBPS4WvIbM2CA5iP9bWkRKGOw4kZ5FRP%2F30k8dNtYVmQdfK6FUR%2BnBOYsAvolTzsEkL4xxu0DmgileNijqCGTycH7D6zYnmxiGtiVCjaEViKaDzheXDL88w5gV5bR0oaDdEePmF0k3fp60HaQQhgtiAZMiGDEF30VxUfEUWaRU3ZBvtZ0WyB2av9JrnrFwg6RNc61UxO2KE18vttzg3TC70t99nWKzlU%2B67P71kgQwOO%2FTjWM%2BCgFqbg8lfVgn486sTiDg1atuiY0rKIY2lF7%2F2ubgExpT5yHQtsk%2FIoKZM70QWpEBr2F89KfyoVEntsLsJn83aUtGdWSjw2%2BxY5UZgq%2BYZszINB6YtlaW5hN2itEhT4djghsJmSBJLzF2BT%2FE5IiRY32%2BzZWmIzkfdEFfMkM6mCq7XyB0%2FT%2BHJ2zwGsBqJ%2F5UZTOHpi5LxUhJZufUmWn6JCCgNE7y4JoBNqlWVOIohCDnrRSXwpMzHurn7BZys9bjCXiMm9BjqkAa9CxA6cVMj0liuv%2BbS5trmnjHK4rNTxgAeGOS6JrDQGgRNlYTwAvTyLg2S2tyHgLM0vpFVg7pnCWCrNmZBeZjdEH7gPnnMOppTbqOSpFX6M88zB4ABNUzcg0uedhKMI%2B4L%2FCANngi3tnzrSiH%2FvCBj%2FkSI9iXpP3qYb0HbWNoixH7s%2FNP8PkznbQtouEurQB0olacLzc97NDmMXtBuu2OCroBgB&X-Amz-Signature=634a79d9cbb98a8155090046a3372afd5bc5d261e58fe3a55b7ca009d9f9fbf3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
