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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374QQI4T%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKh1Sth3n4rNYrMR6PcsrL2qcy2Z6dftZ7d2N9gg3YVwIhAL7qKnoMTkaIFxhZ2TDUWpwdS41%2BogQ3OThZzPQFna%2BSKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW27TV4q5pqDzu8iwq3ANgzEs1E77bhga4UPG00naBc0GuOuTMwm%2BPm4L87Nkxr9Y34H3EWK1U6sXdFvkHmM2HYBRc%2BFoWHV%2FQKC2U359cwvvvKl1v5LrX5meribQEC0lQhIuPYmmwpTAdVPNnx9kwWOHW8gLbuqTcj6j4fFf4u0k1h6%2FGaAhcP1ZNfjzmDCAISK6RJOmmBhpy853wH86%2F%2Fep%2Br5pD%2FMYeWlqIri5WJnHBgkzhfaCsEfTx%2BsRQrhcMu3pRx9HshD0tGT1aqu3AKj6bwd6Arng3kiCJ%2BnaJu%2BD4rozYrZa3fT3cMXA9U3G40uRlUkgmtCdE4dSjKXCqARThY2%2FmuShVVuAGkim9Ah6Nhctels5ZuPjazrIOgcT2Mixc0D3JYklMka67FmZV%2Fvz19bzDcBnLldJLlqsVO4yHm%2FDg25PwW30xce86tN6oFlZZeYAQNnr5MrMuU6Hw1QqqLnKn4w0nozxdAfTy2K4Z5dLEqu33FLRZ%2BvfF1Ps30Y1ktidTslKjAxG63engBRUmPmBO%2FuG1gtQ1lyrwn2K9%2FzVAjxC65t1XhFE8dffpWd%2BR2TOJMlgdbRy0SmGgHpD9z%2FJevMUl2PiNBiNbFAiq%2F4mYfPaYy%2FTQ2DpKdNaBUuJ4GjE1OhzeHjCl2MK%2FBjqkAa6b6IrdfOIaqhZM8AZ8xKc7%2FNrvIYgDaiRMIq7ZFuY4nJw3bmxObfbdpdFAcjyHq2IF0BXYblDyaxk6G%2F1l4bkbCuovPtcwCZMyJavGZEI109Nc7OKFOsVs3LCO4cA0EwyOzXljqtg23Ge7u11SpgG0LIh2gyGlAyfkgSyRM7tbueJRHhPEIch6TvhWsRe57kIeGyzIPD6C7SPL9n7NhsI0StYj&X-Amz-Signature=6f765f868597f70f183c40765e446064ce93b07cc29069db2223e2a221f92467&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374QQI4T%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKh1Sth3n4rNYrMR6PcsrL2qcy2Z6dftZ7d2N9gg3YVwIhAL7qKnoMTkaIFxhZ2TDUWpwdS41%2BogQ3OThZzPQFna%2BSKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW27TV4q5pqDzu8iwq3ANgzEs1E77bhga4UPG00naBc0GuOuTMwm%2BPm4L87Nkxr9Y34H3EWK1U6sXdFvkHmM2HYBRc%2BFoWHV%2FQKC2U359cwvvvKl1v5LrX5meribQEC0lQhIuPYmmwpTAdVPNnx9kwWOHW8gLbuqTcj6j4fFf4u0k1h6%2FGaAhcP1ZNfjzmDCAISK6RJOmmBhpy853wH86%2F%2Fep%2Br5pD%2FMYeWlqIri5WJnHBgkzhfaCsEfTx%2BsRQrhcMu3pRx9HshD0tGT1aqu3AKj6bwd6Arng3kiCJ%2BnaJu%2BD4rozYrZa3fT3cMXA9U3G40uRlUkgmtCdE4dSjKXCqARThY2%2FmuShVVuAGkim9Ah6Nhctels5ZuPjazrIOgcT2Mixc0D3JYklMka67FmZV%2Fvz19bzDcBnLldJLlqsVO4yHm%2FDg25PwW30xce86tN6oFlZZeYAQNnr5MrMuU6Hw1QqqLnKn4w0nozxdAfTy2K4Z5dLEqu33FLRZ%2BvfF1Ps30Y1ktidTslKjAxG63engBRUmPmBO%2FuG1gtQ1lyrwn2K9%2FzVAjxC65t1XhFE8dffpWd%2BR2TOJMlgdbRy0SmGgHpD9z%2FJevMUl2PiNBiNbFAiq%2F4mYfPaYy%2FTQ2DpKdNaBUuJ4GjE1OhzeHjCl2MK%2FBjqkAa6b6IrdfOIaqhZM8AZ8xKc7%2FNrvIYgDaiRMIq7ZFuY4nJw3bmxObfbdpdFAcjyHq2IF0BXYblDyaxk6G%2F1l4bkbCuovPtcwCZMyJavGZEI109Nc7OKFOsVs3LCO4cA0EwyOzXljqtg23Ge7u11SpgG0LIh2gyGlAyfkgSyRM7tbueJRHhPEIch6TvhWsRe57kIeGyzIPD6C7SPL9n7NhsI0StYj&X-Amz-Signature=929497282a85f0aad1bc29e4b6dff6d2b2a33105159211889f99f2e98afd0082&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374QQI4T%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKh1Sth3n4rNYrMR6PcsrL2qcy2Z6dftZ7d2N9gg3YVwIhAL7qKnoMTkaIFxhZ2TDUWpwdS41%2BogQ3OThZzPQFna%2BSKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW27TV4q5pqDzu8iwq3ANgzEs1E77bhga4UPG00naBc0GuOuTMwm%2BPm4L87Nkxr9Y34H3EWK1U6sXdFvkHmM2HYBRc%2BFoWHV%2FQKC2U359cwvvvKl1v5LrX5meribQEC0lQhIuPYmmwpTAdVPNnx9kwWOHW8gLbuqTcj6j4fFf4u0k1h6%2FGaAhcP1ZNfjzmDCAISK6RJOmmBhpy853wH86%2F%2Fep%2Br5pD%2FMYeWlqIri5WJnHBgkzhfaCsEfTx%2BsRQrhcMu3pRx9HshD0tGT1aqu3AKj6bwd6Arng3kiCJ%2BnaJu%2BD4rozYrZa3fT3cMXA9U3G40uRlUkgmtCdE4dSjKXCqARThY2%2FmuShVVuAGkim9Ah6Nhctels5ZuPjazrIOgcT2Mixc0D3JYklMka67FmZV%2Fvz19bzDcBnLldJLlqsVO4yHm%2FDg25PwW30xce86tN6oFlZZeYAQNnr5MrMuU6Hw1QqqLnKn4w0nozxdAfTy2K4Z5dLEqu33FLRZ%2BvfF1Ps30Y1ktidTslKjAxG63engBRUmPmBO%2FuG1gtQ1lyrwn2K9%2FzVAjxC65t1XhFE8dffpWd%2BR2TOJMlgdbRy0SmGgHpD9z%2FJevMUl2PiNBiNbFAiq%2F4mYfPaYy%2FTQ2DpKdNaBUuJ4GjE1OhzeHjCl2MK%2FBjqkAa6b6IrdfOIaqhZM8AZ8xKc7%2FNrvIYgDaiRMIq7ZFuY4nJw3bmxObfbdpdFAcjyHq2IF0BXYblDyaxk6G%2F1l4bkbCuovPtcwCZMyJavGZEI109Nc7OKFOsVs3LCO4cA0EwyOzXljqtg23Ge7u11SpgG0LIh2gyGlAyfkgSyRM7tbueJRHhPEIch6TvhWsRe57kIeGyzIPD6C7SPL9n7NhsI0StYj&X-Amz-Signature=e0a6374a0b2b56ee306bae5009c7ac7a859473c828577cbea35a0dcb8fe90850&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374QQI4T%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKh1Sth3n4rNYrMR6PcsrL2qcy2Z6dftZ7d2N9gg3YVwIhAL7qKnoMTkaIFxhZ2TDUWpwdS41%2BogQ3OThZzPQFna%2BSKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW27TV4q5pqDzu8iwq3ANgzEs1E77bhga4UPG00naBc0GuOuTMwm%2BPm4L87Nkxr9Y34H3EWK1U6sXdFvkHmM2HYBRc%2BFoWHV%2FQKC2U359cwvvvKl1v5LrX5meribQEC0lQhIuPYmmwpTAdVPNnx9kwWOHW8gLbuqTcj6j4fFf4u0k1h6%2FGaAhcP1ZNfjzmDCAISK6RJOmmBhpy853wH86%2F%2Fep%2Br5pD%2FMYeWlqIri5WJnHBgkzhfaCsEfTx%2BsRQrhcMu3pRx9HshD0tGT1aqu3AKj6bwd6Arng3kiCJ%2BnaJu%2BD4rozYrZa3fT3cMXA9U3G40uRlUkgmtCdE4dSjKXCqARThY2%2FmuShVVuAGkim9Ah6Nhctels5ZuPjazrIOgcT2Mixc0D3JYklMka67FmZV%2Fvz19bzDcBnLldJLlqsVO4yHm%2FDg25PwW30xce86tN6oFlZZeYAQNnr5MrMuU6Hw1QqqLnKn4w0nozxdAfTy2K4Z5dLEqu33FLRZ%2BvfF1Ps30Y1ktidTslKjAxG63engBRUmPmBO%2FuG1gtQ1lyrwn2K9%2FzVAjxC65t1XhFE8dffpWd%2BR2TOJMlgdbRy0SmGgHpD9z%2FJevMUl2PiNBiNbFAiq%2F4mYfPaYy%2FTQ2DpKdNaBUuJ4GjE1OhzeHjCl2MK%2FBjqkAa6b6IrdfOIaqhZM8AZ8xKc7%2FNrvIYgDaiRMIq7ZFuY4nJw3bmxObfbdpdFAcjyHq2IF0BXYblDyaxk6G%2F1l4bkbCuovPtcwCZMyJavGZEI109Nc7OKFOsVs3LCO4cA0EwyOzXljqtg23Ge7u11SpgG0LIh2gyGlAyfkgSyRM7tbueJRHhPEIch6TvhWsRe57kIeGyzIPD6C7SPL9n7NhsI0StYj&X-Amz-Signature=dfb4e3b184e4c098dc08d98b965ae07e695d13a372c6a5a171ed569fc7f0d153&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374QQI4T%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKh1Sth3n4rNYrMR6PcsrL2qcy2Z6dftZ7d2N9gg3YVwIhAL7qKnoMTkaIFxhZ2TDUWpwdS41%2BogQ3OThZzPQFna%2BSKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW27TV4q5pqDzu8iwq3ANgzEs1E77bhga4UPG00naBc0GuOuTMwm%2BPm4L87Nkxr9Y34H3EWK1U6sXdFvkHmM2HYBRc%2BFoWHV%2FQKC2U359cwvvvKl1v5LrX5meribQEC0lQhIuPYmmwpTAdVPNnx9kwWOHW8gLbuqTcj6j4fFf4u0k1h6%2FGaAhcP1ZNfjzmDCAISK6RJOmmBhpy853wH86%2F%2Fep%2Br5pD%2FMYeWlqIri5WJnHBgkzhfaCsEfTx%2BsRQrhcMu3pRx9HshD0tGT1aqu3AKj6bwd6Arng3kiCJ%2BnaJu%2BD4rozYrZa3fT3cMXA9U3G40uRlUkgmtCdE4dSjKXCqARThY2%2FmuShVVuAGkim9Ah6Nhctels5ZuPjazrIOgcT2Mixc0D3JYklMka67FmZV%2Fvz19bzDcBnLldJLlqsVO4yHm%2FDg25PwW30xce86tN6oFlZZeYAQNnr5MrMuU6Hw1QqqLnKn4w0nozxdAfTy2K4Z5dLEqu33FLRZ%2BvfF1Ps30Y1ktidTslKjAxG63engBRUmPmBO%2FuG1gtQ1lyrwn2K9%2FzVAjxC65t1XhFE8dffpWd%2BR2TOJMlgdbRy0SmGgHpD9z%2FJevMUl2PiNBiNbFAiq%2F4mYfPaYy%2FTQ2DpKdNaBUuJ4GjE1OhzeHjCl2MK%2FBjqkAa6b6IrdfOIaqhZM8AZ8xKc7%2FNrvIYgDaiRMIq7ZFuY4nJw3bmxObfbdpdFAcjyHq2IF0BXYblDyaxk6G%2F1l4bkbCuovPtcwCZMyJavGZEI109Nc7OKFOsVs3LCO4cA0EwyOzXljqtg23Ge7u11SpgG0LIh2gyGlAyfkgSyRM7tbueJRHhPEIch6TvhWsRe57kIeGyzIPD6C7SPL9n7NhsI0StYj&X-Amz-Signature=83576990f2c3e96dbe6f68774f76013fe1fcf4674c5ea8124e8cb5935be1e711&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374QQI4T%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKh1Sth3n4rNYrMR6PcsrL2qcy2Z6dftZ7d2N9gg3YVwIhAL7qKnoMTkaIFxhZ2TDUWpwdS41%2BogQ3OThZzPQFna%2BSKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW27TV4q5pqDzu8iwq3ANgzEs1E77bhga4UPG00naBc0GuOuTMwm%2BPm4L87Nkxr9Y34H3EWK1U6sXdFvkHmM2HYBRc%2BFoWHV%2FQKC2U359cwvvvKl1v5LrX5meribQEC0lQhIuPYmmwpTAdVPNnx9kwWOHW8gLbuqTcj6j4fFf4u0k1h6%2FGaAhcP1ZNfjzmDCAISK6RJOmmBhpy853wH86%2F%2Fep%2Br5pD%2FMYeWlqIri5WJnHBgkzhfaCsEfTx%2BsRQrhcMu3pRx9HshD0tGT1aqu3AKj6bwd6Arng3kiCJ%2BnaJu%2BD4rozYrZa3fT3cMXA9U3G40uRlUkgmtCdE4dSjKXCqARThY2%2FmuShVVuAGkim9Ah6Nhctels5ZuPjazrIOgcT2Mixc0D3JYklMka67FmZV%2Fvz19bzDcBnLldJLlqsVO4yHm%2FDg25PwW30xce86tN6oFlZZeYAQNnr5MrMuU6Hw1QqqLnKn4w0nozxdAfTy2K4Z5dLEqu33FLRZ%2BvfF1Ps30Y1ktidTslKjAxG63engBRUmPmBO%2FuG1gtQ1lyrwn2K9%2FzVAjxC65t1XhFE8dffpWd%2BR2TOJMlgdbRy0SmGgHpD9z%2FJevMUl2PiNBiNbFAiq%2F4mYfPaYy%2FTQ2DpKdNaBUuJ4GjE1OhzeHjCl2MK%2FBjqkAa6b6IrdfOIaqhZM8AZ8xKc7%2FNrvIYgDaiRMIq7ZFuY4nJw3bmxObfbdpdFAcjyHq2IF0BXYblDyaxk6G%2F1l4bkbCuovPtcwCZMyJavGZEI109Nc7OKFOsVs3LCO4cA0EwyOzXljqtg23Ge7u11SpgG0LIh2gyGlAyfkgSyRM7tbueJRHhPEIch6TvhWsRe57kIeGyzIPD6C7SPL9n7NhsI0StYj&X-Amz-Signature=9d01b52587cce2e648b15e5e761860404e61b66599289b60a455f8285dd4280c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374QQI4T%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKh1Sth3n4rNYrMR6PcsrL2qcy2Z6dftZ7d2N9gg3YVwIhAL7qKnoMTkaIFxhZ2TDUWpwdS41%2BogQ3OThZzPQFna%2BSKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW27TV4q5pqDzu8iwq3ANgzEs1E77bhga4UPG00naBc0GuOuTMwm%2BPm4L87Nkxr9Y34H3EWK1U6sXdFvkHmM2HYBRc%2BFoWHV%2FQKC2U359cwvvvKl1v5LrX5meribQEC0lQhIuPYmmwpTAdVPNnx9kwWOHW8gLbuqTcj6j4fFf4u0k1h6%2FGaAhcP1ZNfjzmDCAISK6RJOmmBhpy853wH86%2F%2Fep%2Br5pD%2FMYeWlqIri5WJnHBgkzhfaCsEfTx%2BsRQrhcMu3pRx9HshD0tGT1aqu3AKj6bwd6Arng3kiCJ%2BnaJu%2BD4rozYrZa3fT3cMXA9U3G40uRlUkgmtCdE4dSjKXCqARThY2%2FmuShVVuAGkim9Ah6Nhctels5ZuPjazrIOgcT2Mixc0D3JYklMka67FmZV%2Fvz19bzDcBnLldJLlqsVO4yHm%2FDg25PwW30xce86tN6oFlZZeYAQNnr5MrMuU6Hw1QqqLnKn4w0nozxdAfTy2K4Z5dLEqu33FLRZ%2BvfF1Ps30Y1ktidTslKjAxG63engBRUmPmBO%2FuG1gtQ1lyrwn2K9%2FzVAjxC65t1XhFE8dffpWd%2BR2TOJMlgdbRy0SmGgHpD9z%2FJevMUl2PiNBiNbFAiq%2F4mYfPaYy%2FTQ2DpKdNaBUuJ4GjE1OhzeHjCl2MK%2FBjqkAa6b6IrdfOIaqhZM8AZ8xKc7%2FNrvIYgDaiRMIq7ZFuY4nJw3bmxObfbdpdFAcjyHq2IF0BXYblDyaxk6G%2F1l4bkbCuovPtcwCZMyJavGZEI109Nc7OKFOsVs3LCO4cA0EwyOzXljqtg23Ge7u11SpgG0LIh2gyGlAyfkgSyRM7tbueJRHhPEIch6TvhWsRe57kIeGyzIPD6C7SPL9n7NhsI0StYj&X-Amz-Signature=1430e4d7637f14f5c1f04108c3b29097200e13c62055f234aba9c614ed2ec2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374QQI4T%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKh1Sth3n4rNYrMR6PcsrL2qcy2Z6dftZ7d2N9gg3YVwIhAL7qKnoMTkaIFxhZ2TDUWpwdS41%2BogQ3OThZzPQFna%2BSKv8DCCUQABoMNjM3NDIzMTgzODA1IgwW27TV4q5pqDzu8iwq3ANgzEs1E77bhga4UPG00naBc0GuOuTMwm%2BPm4L87Nkxr9Y34H3EWK1U6sXdFvkHmM2HYBRc%2BFoWHV%2FQKC2U359cwvvvKl1v5LrX5meribQEC0lQhIuPYmmwpTAdVPNnx9kwWOHW8gLbuqTcj6j4fFf4u0k1h6%2FGaAhcP1ZNfjzmDCAISK6RJOmmBhpy853wH86%2F%2Fep%2Br5pD%2FMYeWlqIri5WJnHBgkzhfaCsEfTx%2BsRQrhcMu3pRx9HshD0tGT1aqu3AKj6bwd6Arng3kiCJ%2BnaJu%2BD4rozYrZa3fT3cMXA9U3G40uRlUkgmtCdE4dSjKXCqARThY2%2FmuShVVuAGkim9Ah6Nhctels5ZuPjazrIOgcT2Mixc0D3JYklMka67FmZV%2Fvz19bzDcBnLldJLlqsVO4yHm%2FDg25PwW30xce86tN6oFlZZeYAQNnr5MrMuU6Hw1QqqLnKn4w0nozxdAfTy2K4Z5dLEqu33FLRZ%2BvfF1Ps30Y1ktidTslKjAxG63engBRUmPmBO%2FuG1gtQ1lyrwn2K9%2FzVAjxC65t1XhFE8dffpWd%2BR2TOJMlgdbRy0SmGgHpD9z%2FJevMUl2PiNBiNbFAiq%2F4mYfPaYy%2FTQ2DpKdNaBUuJ4GjE1OhzeHjCl2MK%2FBjqkAa6b6IrdfOIaqhZM8AZ8xKc7%2FNrvIYgDaiRMIq7ZFuY4nJw3bmxObfbdpdFAcjyHq2IF0BXYblDyaxk6G%2F1l4bkbCuovPtcwCZMyJavGZEI109Nc7OKFOsVs3LCO4cA0EwyOzXljqtg23Ge7u11SpgG0LIh2gyGlAyfkgSyRM7tbueJRHhPEIch6TvhWsRe57kIeGyzIPD6C7SPL9n7NhsI0StYj&X-Amz-Signature=eb7d0d460f9b1f49aeb6df5132193f87ccec0803df6c23a075fcf8e71fc4f8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
