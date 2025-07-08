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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2OQAVG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPBIWABf7UEkv8m7OK%2Br79XjSkSiuTkaqwapQ6LmOtgIhAOXJjBYpffbjjzUWvGe6WymLS9fNuzVV%2BYC%2BgCUCKYNLKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziYuhBYClpHfSFBvYq3APfwedn9qpEQVvbCGqy9vcX0gT9XvoIwQBHrEaoJFpbl2tiwq3e5kSt1VER0561pB%2BTv2Rsui34Z1Pk86psAeGU0LVd7JHl%2Fqr4Wq039zmVV7%2FVTS81Z%2FY6vvWms1lvcdS5%2F6gGk00EZVoKXDS3FhbVa4h1ztAAa2Kq0kST%2BwqYrVw1xuc1TTTmJgXEvdn2qZhjOKGTKC2frD24A6Bv5PyWJzZTPd%2Fu7dienKYfZfW8r1E6%2Fo6ZTgGOHJ5RbwduB4TZGC%2ByiRHgaaat6M2RMJR27EmAW2ZsPAUolKFUQyHThkoCPUcSG4kKLYaun5lx%2FWy6Z9E%2Fo67MyE04UFHSPABGFbXM0cLtFoYinXTv9pYmT0wlFnYsWge3v%2FZZRHBd3fKZWVyMXWCjHPVn2oszxjDI39tE%2FFO1fMv1SS2dJ6DzEVftFTzTux5E5LQWgt54res%2Bcme1AXKcvblqmjVxnjHuDHJP%2F%2Fmi1MDZvZ11VC9h99JEXMmkd86He7GcQsW5Q%2Figi09S0sh8elFEa4Uz2rOePKIruJzxiQJV39rH1lgP8679wXqb%2FWHpSWBLWj0sNLE7T2dox%2BHwQaGyNKLDpwUfjCgJ9Z%2B7rxAFtznxUfC%2Bh7WCmL6eBNiflYnP%2BTCkprTDBjqkAf7HJ1shWb3z2NAICIWSr%2BksFosfpHuqI6yi414et8iOvJ1haqHkf7wQdWLnq6q42w7%2FNkMuRHqlPDyYGHuLnFcCjiXnlYC3GsCruqu2P4wTilZBd2N3OYL%2ByBHXd7QNyjXYMrt4LpVJkrXzxt3y0OU8t6mbVWwOxRvVfT6aKXk53VGdg%2Fuv2p%2BNAh58hx3gIKl%2BEB65nHdOjE6YU517w11CqAzO&X-Amz-Signature=f861638f7a36398ed63cb8066bce9763077a62a7c37416a439f6cf43485da020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2OQAVG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPBIWABf7UEkv8m7OK%2Br79XjSkSiuTkaqwapQ6LmOtgIhAOXJjBYpffbjjzUWvGe6WymLS9fNuzVV%2BYC%2BgCUCKYNLKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziYuhBYClpHfSFBvYq3APfwedn9qpEQVvbCGqy9vcX0gT9XvoIwQBHrEaoJFpbl2tiwq3e5kSt1VER0561pB%2BTv2Rsui34Z1Pk86psAeGU0LVd7JHl%2Fqr4Wq039zmVV7%2FVTS81Z%2FY6vvWms1lvcdS5%2F6gGk00EZVoKXDS3FhbVa4h1ztAAa2Kq0kST%2BwqYrVw1xuc1TTTmJgXEvdn2qZhjOKGTKC2frD24A6Bv5PyWJzZTPd%2Fu7dienKYfZfW8r1E6%2Fo6ZTgGOHJ5RbwduB4TZGC%2ByiRHgaaat6M2RMJR27EmAW2ZsPAUolKFUQyHThkoCPUcSG4kKLYaun5lx%2FWy6Z9E%2Fo67MyE04UFHSPABGFbXM0cLtFoYinXTv9pYmT0wlFnYsWge3v%2FZZRHBd3fKZWVyMXWCjHPVn2oszxjDI39tE%2FFO1fMv1SS2dJ6DzEVftFTzTux5E5LQWgt54res%2Bcme1AXKcvblqmjVxnjHuDHJP%2F%2Fmi1MDZvZ11VC9h99JEXMmkd86He7GcQsW5Q%2Figi09S0sh8elFEa4Uz2rOePKIruJzxiQJV39rH1lgP8679wXqb%2FWHpSWBLWj0sNLE7T2dox%2BHwQaGyNKLDpwUfjCgJ9Z%2B7rxAFtznxUfC%2Bh7WCmL6eBNiflYnP%2BTCkprTDBjqkAf7HJ1shWb3z2NAICIWSr%2BksFosfpHuqI6yi414et8iOvJ1haqHkf7wQdWLnq6q42w7%2FNkMuRHqlPDyYGHuLnFcCjiXnlYC3GsCruqu2P4wTilZBd2N3OYL%2ByBHXd7QNyjXYMrt4LpVJkrXzxt3y0OU8t6mbVWwOxRvVfT6aKXk53VGdg%2Fuv2p%2BNAh58hx3gIKl%2BEB65nHdOjE6YU517w11CqAzO&X-Amz-Signature=dd8da9173310a74aeccb935210e2678918ea11e67c2d572c1eb2c52307315712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2OQAVG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPBIWABf7UEkv8m7OK%2Br79XjSkSiuTkaqwapQ6LmOtgIhAOXJjBYpffbjjzUWvGe6WymLS9fNuzVV%2BYC%2BgCUCKYNLKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziYuhBYClpHfSFBvYq3APfwedn9qpEQVvbCGqy9vcX0gT9XvoIwQBHrEaoJFpbl2tiwq3e5kSt1VER0561pB%2BTv2Rsui34Z1Pk86psAeGU0LVd7JHl%2Fqr4Wq039zmVV7%2FVTS81Z%2FY6vvWms1lvcdS5%2F6gGk00EZVoKXDS3FhbVa4h1ztAAa2Kq0kST%2BwqYrVw1xuc1TTTmJgXEvdn2qZhjOKGTKC2frD24A6Bv5PyWJzZTPd%2Fu7dienKYfZfW8r1E6%2Fo6ZTgGOHJ5RbwduB4TZGC%2ByiRHgaaat6M2RMJR27EmAW2ZsPAUolKFUQyHThkoCPUcSG4kKLYaun5lx%2FWy6Z9E%2Fo67MyE04UFHSPABGFbXM0cLtFoYinXTv9pYmT0wlFnYsWge3v%2FZZRHBd3fKZWVyMXWCjHPVn2oszxjDI39tE%2FFO1fMv1SS2dJ6DzEVftFTzTux5E5LQWgt54res%2Bcme1AXKcvblqmjVxnjHuDHJP%2F%2Fmi1MDZvZ11VC9h99JEXMmkd86He7GcQsW5Q%2Figi09S0sh8elFEa4Uz2rOePKIruJzxiQJV39rH1lgP8679wXqb%2FWHpSWBLWj0sNLE7T2dox%2BHwQaGyNKLDpwUfjCgJ9Z%2B7rxAFtznxUfC%2Bh7WCmL6eBNiflYnP%2BTCkprTDBjqkAf7HJ1shWb3z2NAICIWSr%2BksFosfpHuqI6yi414et8iOvJ1haqHkf7wQdWLnq6q42w7%2FNkMuRHqlPDyYGHuLnFcCjiXnlYC3GsCruqu2P4wTilZBd2N3OYL%2ByBHXd7QNyjXYMrt4LpVJkrXzxt3y0OU8t6mbVWwOxRvVfT6aKXk53VGdg%2Fuv2p%2BNAh58hx3gIKl%2BEB65nHdOjE6YU517w11CqAzO&X-Amz-Signature=ef90b3add03861f2f67e2cc10adca884ceda16056223d7500a7b3f96a5705e0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2OQAVG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPBIWABf7UEkv8m7OK%2Br79XjSkSiuTkaqwapQ6LmOtgIhAOXJjBYpffbjjzUWvGe6WymLS9fNuzVV%2BYC%2BgCUCKYNLKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziYuhBYClpHfSFBvYq3APfwedn9qpEQVvbCGqy9vcX0gT9XvoIwQBHrEaoJFpbl2tiwq3e5kSt1VER0561pB%2BTv2Rsui34Z1Pk86psAeGU0LVd7JHl%2Fqr4Wq039zmVV7%2FVTS81Z%2FY6vvWms1lvcdS5%2F6gGk00EZVoKXDS3FhbVa4h1ztAAa2Kq0kST%2BwqYrVw1xuc1TTTmJgXEvdn2qZhjOKGTKC2frD24A6Bv5PyWJzZTPd%2Fu7dienKYfZfW8r1E6%2Fo6ZTgGOHJ5RbwduB4TZGC%2ByiRHgaaat6M2RMJR27EmAW2ZsPAUolKFUQyHThkoCPUcSG4kKLYaun5lx%2FWy6Z9E%2Fo67MyE04UFHSPABGFbXM0cLtFoYinXTv9pYmT0wlFnYsWge3v%2FZZRHBd3fKZWVyMXWCjHPVn2oszxjDI39tE%2FFO1fMv1SS2dJ6DzEVftFTzTux5E5LQWgt54res%2Bcme1AXKcvblqmjVxnjHuDHJP%2F%2Fmi1MDZvZ11VC9h99JEXMmkd86He7GcQsW5Q%2Figi09S0sh8elFEa4Uz2rOePKIruJzxiQJV39rH1lgP8679wXqb%2FWHpSWBLWj0sNLE7T2dox%2BHwQaGyNKLDpwUfjCgJ9Z%2B7rxAFtznxUfC%2Bh7WCmL6eBNiflYnP%2BTCkprTDBjqkAf7HJ1shWb3z2NAICIWSr%2BksFosfpHuqI6yi414et8iOvJ1haqHkf7wQdWLnq6q42w7%2FNkMuRHqlPDyYGHuLnFcCjiXnlYC3GsCruqu2P4wTilZBd2N3OYL%2ByBHXd7QNyjXYMrt4LpVJkrXzxt3y0OU8t6mbVWwOxRvVfT6aKXk53VGdg%2Fuv2p%2BNAh58hx3gIKl%2BEB65nHdOjE6YU517w11CqAzO&X-Amz-Signature=97c27c0456af1d58279888b07ae7e22e6981d991c219f0c731738302dce2f488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2OQAVG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPBIWABf7UEkv8m7OK%2Br79XjSkSiuTkaqwapQ6LmOtgIhAOXJjBYpffbjjzUWvGe6WymLS9fNuzVV%2BYC%2BgCUCKYNLKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziYuhBYClpHfSFBvYq3APfwedn9qpEQVvbCGqy9vcX0gT9XvoIwQBHrEaoJFpbl2tiwq3e5kSt1VER0561pB%2BTv2Rsui34Z1Pk86psAeGU0LVd7JHl%2Fqr4Wq039zmVV7%2FVTS81Z%2FY6vvWms1lvcdS5%2F6gGk00EZVoKXDS3FhbVa4h1ztAAa2Kq0kST%2BwqYrVw1xuc1TTTmJgXEvdn2qZhjOKGTKC2frD24A6Bv5PyWJzZTPd%2Fu7dienKYfZfW8r1E6%2Fo6ZTgGOHJ5RbwduB4TZGC%2ByiRHgaaat6M2RMJR27EmAW2ZsPAUolKFUQyHThkoCPUcSG4kKLYaun5lx%2FWy6Z9E%2Fo67MyE04UFHSPABGFbXM0cLtFoYinXTv9pYmT0wlFnYsWge3v%2FZZRHBd3fKZWVyMXWCjHPVn2oszxjDI39tE%2FFO1fMv1SS2dJ6DzEVftFTzTux5E5LQWgt54res%2Bcme1AXKcvblqmjVxnjHuDHJP%2F%2Fmi1MDZvZ11VC9h99JEXMmkd86He7GcQsW5Q%2Figi09S0sh8elFEa4Uz2rOePKIruJzxiQJV39rH1lgP8679wXqb%2FWHpSWBLWj0sNLE7T2dox%2BHwQaGyNKLDpwUfjCgJ9Z%2B7rxAFtznxUfC%2Bh7WCmL6eBNiflYnP%2BTCkprTDBjqkAf7HJ1shWb3z2NAICIWSr%2BksFosfpHuqI6yi414et8iOvJ1haqHkf7wQdWLnq6q42w7%2FNkMuRHqlPDyYGHuLnFcCjiXnlYC3GsCruqu2P4wTilZBd2N3OYL%2ByBHXd7QNyjXYMrt4LpVJkrXzxt3y0OU8t6mbVWwOxRvVfT6aKXk53VGdg%2Fuv2p%2BNAh58hx3gIKl%2BEB65nHdOjE6YU517w11CqAzO&X-Amz-Signature=d2f2eee0a8797845c33a19bee5c0b03c1e495975e20ed1959d9443d41fb691fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2OQAVG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPBIWABf7UEkv8m7OK%2Br79XjSkSiuTkaqwapQ6LmOtgIhAOXJjBYpffbjjzUWvGe6WymLS9fNuzVV%2BYC%2BgCUCKYNLKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziYuhBYClpHfSFBvYq3APfwedn9qpEQVvbCGqy9vcX0gT9XvoIwQBHrEaoJFpbl2tiwq3e5kSt1VER0561pB%2BTv2Rsui34Z1Pk86psAeGU0LVd7JHl%2Fqr4Wq039zmVV7%2FVTS81Z%2FY6vvWms1lvcdS5%2F6gGk00EZVoKXDS3FhbVa4h1ztAAa2Kq0kST%2BwqYrVw1xuc1TTTmJgXEvdn2qZhjOKGTKC2frD24A6Bv5PyWJzZTPd%2Fu7dienKYfZfW8r1E6%2Fo6ZTgGOHJ5RbwduB4TZGC%2ByiRHgaaat6M2RMJR27EmAW2ZsPAUolKFUQyHThkoCPUcSG4kKLYaun5lx%2FWy6Z9E%2Fo67MyE04UFHSPABGFbXM0cLtFoYinXTv9pYmT0wlFnYsWge3v%2FZZRHBd3fKZWVyMXWCjHPVn2oszxjDI39tE%2FFO1fMv1SS2dJ6DzEVftFTzTux5E5LQWgt54res%2Bcme1AXKcvblqmjVxnjHuDHJP%2F%2Fmi1MDZvZ11VC9h99JEXMmkd86He7GcQsW5Q%2Figi09S0sh8elFEa4Uz2rOePKIruJzxiQJV39rH1lgP8679wXqb%2FWHpSWBLWj0sNLE7T2dox%2BHwQaGyNKLDpwUfjCgJ9Z%2B7rxAFtznxUfC%2Bh7WCmL6eBNiflYnP%2BTCkprTDBjqkAf7HJ1shWb3z2NAICIWSr%2BksFosfpHuqI6yi414et8iOvJ1haqHkf7wQdWLnq6q42w7%2FNkMuRHqlPDyYGHuLnFcCjiXnlYC3GsCruqu2P4wTilZBd2N3OYL%2ByBHXd7QNyjXYMrt4LpVJkrXzxt3y0OU8t6mbVWwOxRvVfT6aKXk53VGdg%2Fuv2p%2BNAh58hx3gIKl%2BEB65nHdOjE6YU517w11CqAzO&X-Amz-Signature=58a09e2bc8fc93013fa46562d041726bd96317f8e594c57b3c2c3510cd9d2b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2OQAVG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPBIWABf7UEkv8m7OK%2Br79XjSkSiuTkaqwapQ6LmOtgIhAOXJjBYpffbjjzUWvGe6WymLS9fNuzVV%2BYC%2BgCUCKYNLKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziYuhBYClpHfSFBvYq3APfwedn9qpEQVvbCGqy9vcX0gT9XvoIwQBHrEaoJFpbl2tiwq3e5kSt1VER0561pB%2BTv2Rsui34Z1Pk86psAeGU0LVd7JHl%2Fqr4Wq039zmVV7%2FVTS81Z%2FY6vvWms1lvcdS5%2F6gGk00EZVoKXDS3FhbVa4h1ztAAa2Kq0kST%2BwqYrVw1xuc1TTTmJgXEvdn2qZhjOKGTKC2frD24A6Bv5PyWJzZTPd%2Fu7dienKYfZfW8r1E6%2Fo6ZTgGOHJ5RbwduB4TZGC%2ByiRHgaaat6M2RMJR27EmAW2ZsPAUolKFUQyHThkoCPUcSG4kKLYaun5lx%2FWy6Z9E%2Fo67MyE04UFHSPABGFbXM0cLtFoYinXTv9pYmT0wlFnYsWge3v%2FZZRHBd3fKZWVyMXWCjHPVn2oszxjDI39tE%2FFO1fMv1SS2dJ6DzEVftFTzTux5E5LQWgt54res%2Bcme1AXKcvblqmjVxnjHuDHJP%2F%2Fmi1MDZvZ11VC9h99JEXMmkd86He7GcQsW5Q%2Figi09S0sh8elFEa4Uz2rOePKIruJzxiQJV39rH1lgP8679wXqb%2FWHpSWBLWj0sNLE7T2dox%2BHwQaGyNKLDpwUfjCgJ9Z%2B7rxAFtznxUfC%2Bh7WCmL6eBNiflYnP%2BTCkprTDBjqkAf7HJ1shWb3z2NAICIWSr%2BksFosfpHuqI6yi414et8iOvJ1haqHkf7wQdWLnq6q42w7%2FNkMuRHqlPDyYGHuLnFcCjiXnlYC3GsCruqu2P4wTilZBd2N3OYL%2ByBHXd7QNyjXYMrt4LpVJkrXzxt3y0OU8t6mbVWwOxRvVfT6aKXk53VGdg%2Fuv2p%2BNAh58hx3gIKl%2BEB65nHdOjE6YU517w11CqAzO&X-Amz-Signature=4b8bc91d1e4097d2f62a9f88604906795de4c06a43732752c85f7c966b82f0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2OQAVG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T132703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEPBIWABf7UEkv8m7OK%2Br79XjSkSiuTkaqwapQ6LmOtgIhAOXJjBYpffbjjzUWvGe6WymLS9fNuzVV%2BYC%2BgCUCKYNLKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziYuhBYClpHfSFBvYq3APfwedn9qpEQVvbCGqy9vcX0gT9XvoIwQBHrEaoJFpbl2tiwq3e5kSt1VER0561pB%2BTv2Rsui34Z1Pk86psAeGU0LVd7JHl%2Fqr4Wq039zmVV7%2FVTS81Z%2FY6vvWms1lvcdS5%2F6gGk00EZVoKXDS3FhbVa4h1ztAAa2Kq0kST%2BwqYrVw1xuc1TTTmJgXEvdn2qZhjOKGTKC2frD24A6Bv5PyWJzZTPd%2Fu7dienKYfZfW8r1E6%2Fo6ZTgGOHJ5RbwduB4TZGC%2ByiRHgaaat6M2RMJR27EmAW2ZsPAUolKFUQyHThkoCPUcSG4kKLYaun5lx%2FWy6Z9E%2Fo67MyE04UFHSPABGFbXM0cLtFoYinXTv9pYmT0wlFnYsWge3v%2FZZRHBd3fKZWVyMXWCjHPVn2oszxjDI39tE%2FFO1fMv1SS2dJ6DzEVftFTzTux5E5LQWgt54res%2Bcme1AXKcvblqmjVxnjHuDHJP%2F%2Fmi1MDZvZ11VC9h99JEXMmkd86He7GcQsW5Q%2Figi09S0sh8elFEa4Uz2rOePKIruJzxiQJV39rH1lgP8679wXqb%2FWHpSWBLWj0sNLE7T2dox%2BHwQaGyNKLDpwUfjCgJ9Z%2B7rxAFtznxUfC%2Bh7WCmL6eBNiflYnP%2BTCkprTDBjqkAf7HJ1shWb3z2NAICIWSr%2BksFosfpHuqI6yi414et8iOvJ1haqHkf7wQdWLnq6q42w7%2FNkMuRHqlPDyYGHuLnFcCjiXnlYC3GsCruqu2P4wTilZBd2N3OYL%2ByBHXd7QNyjXYMrt4LpVJkrXzxt3y0OU8t6mbVWwOxRvVfT6aKXk53VGdg%2Fuv2p%2BNAh58hx3gIKl%2BEB65nHdOjE6YU517w11CqAzO&X-Amz-Signature=3ce1b1cdc29c32d3fc46e052c1e368bf70d66cb227917812f7ddece45ddf7a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
