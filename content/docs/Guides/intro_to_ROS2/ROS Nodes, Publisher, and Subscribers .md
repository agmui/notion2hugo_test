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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MVNZS2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBApHIUSjFekoyWAb9M6w8QkA9It8Oz6v%2FJPr8KO0QRdAiBolQGDh%2FfEJ5AG%2FTru8rURFXEmthw%2Fe49vmRTCgiM2giqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMempuPAcS4%2BSzeGtkKtwDSVYrqCpUtWsdzmpfhcKuwpf4WB2TBDMx2goVOkeq0ehMsTmlSh68oSwcqcvdBKZE8TY8KsWikvLu0yGE4TwGy51tGo31lQXz5pMzgt7nBhGjDuIJXWu6WfKhA3YvRV%2Bu7PCRAP7i5hJeQuBv7k1TgNIesCwp4nekOClG0KlYPZ%2Fqz2u%2B1uFfcdubFGzMgapF6Q8z5PGa%2F5fcKyr4TQGZ2d67qhNhEt9QZaEYJXBRe8c4JiUoMGclgY1qynk4pgGl9Jv3EqZQ0oiMHzW3gIi610LG%2FtIsTc7gavXpHSrEgLc5JXSMEWzm1rQj3FsmTThyWTJFhjZXMoycvamaF0gtnUMpt8i%2FS8PUazGdr6eHtJmkCfMzue4um244oEBJXZb%2FbexBJbqwqMbbb1k%2F7EZjJYHclfBH1Pc%2BEV4dPSWoBVcD0%2BkIBNtwazYeE%2FeHOBzKV61oZwLUgdtwlPSseAyF%2BJc2OcgnOdAEoAdZDWB6OTxVRT6gVNXMcw2tiYYRf6MgEFLt%2FkCQm48A08ApvOvblP2y2D555AGt4wsyx%2Bpnjokt%2BjLHSZ5r9yUkkx5udW8yaKQq9DWU7zOFB2%2F7qQQ3OkB22dZFnQIHslZUggP5k81nA6YM%2BAulEuT%2BID0w75f0vgY6pgF6OP3ul%2FxvU6YS2mQH03%2FpypC%2BrfV%2FJ%2FUERxqP2LmcE2c7paN5jxuMPy4Qf79h44RxWeGYLeVyH%2FsVliuW0DZJ6mQ%2B%2FCL7p9yhqbUALLv9Ioyw6RDRhfsjDAa4RRpYcvwMfnWnPtPlsOoGd51%2BZ9D4yDSh4fzfm7DwlqsXnVrUH5r%2FDpX8HhTZvPXrwfGloBvJKJGuqjOqXKi9oi1t%2FV%2F3JbmfABdw&X-Amz-Signature=502a8ea9c71f94d8a4b186d60ec9ed8fce93e6488f120aa93070608bcb6ecc6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MVNZS2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBApHIUSjFekoyWAb9M6w8QkA9It8Oz6v%2FJPr8KO0QRdAiBolQGDh%2FfEJ5AG%2FTru8rURFXEmthw%2Fe49vmRTCgiM2giqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMempuPAcS4%2BSzeGtkKtwDSVYrqCpUtWsdzmpfhcKuwpf4WB2TBDMx2goVOkeq0ehMsTmlSh68oSwcqcvdBKZE8TY8KsWikvLu0yGE4TwGy51tGo31lQXz5pMzgt7nBhGjDuIJXWu6WfKhA3YvRV%2Bu7PCRAP7i5hJeQuBv7k1TgNIesCwp4nekOClG0KlYPZ%2Fqz2u%2B1uFfcdubFGzMgapF6Q8z5PGa%2F5fcKyr4TQGZ2d67qhNhEt9QZaEYJXBRe8c4JiUoMGclgY1qynk4pgGl9Jv3EqZQ0oiMHzW3gIi610LG%2FtIsTc7gavXpHSrEgLc5JXSMEWzm1rQj3FsmTThyWTJFhjZXMoycvamaF0gtnUMpt8i%2FS8PUazGdr6eHtJmkCfMzue4um244oEBJXZb%2FbexBJbqwqMbbb1k%2F7EZjJYHclfBH1Pc%2BEV4dPSWoBVcD0%2BkIBNtwazYeE%2FeHOBzKV61oZwLUgdtwlPSseAyF%2BJc2OcgnOdAEoAdZDWB6OTxVRT6gVNXMcw2tiYYRf6MgEFLt%2FkCQm48A08ApvOvblP2y2D555AGt4wsyx%2Bpnjokt%2BjLHSZ5r9yUkkx5udW8yaKQq9DWU7zOFB2%2F7qQQ3OkB22dZFnQIHslZUggP5k81nA6YM%2BAulEuT%2BID0w75f0vgY6pgF6OP3ul%2FxvU6YS2mQH03%2FpypC%2BrfV%2FJ%2FUERxqP2LmcE2c7paN5jxuMPy4Qf79h44RxWeGYLeVyH%2FsVliuW0DZJ6mQ%2B%2FCL7p9yhqbUALLv9Ioyw6RDRhfsjDAa4RRpYcvwMfnWnPtPlsOoGd51%2BZ9D4yDSh4fzfm7DwlqsXnVrUH5r%2FDpX8HhTZvPXrwfGloBvJKJGuqjOqXKi9oi1t%2FV%2F3JbmfABdw&X-Amz-Signature=eae053bddc0e717db5f9bc6a32eaa17831f76392b03cbe9b81b07062e4bc3e3c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MVNZS2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBApHIUSjFekoyWAb9M6w8QkA9It8Oz6v%2FJPr8KO0QRdAiBolQGDh%2FfEJ5AG%2FTru8rURFXEmthw%2Fe49vmRTCgiM2giqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMempuPAcS4%2BSzeGtkKtwDSVYrqCpUtWsdzmpfhcKuwpf4WB2TBDMx2goVOkeq0ehMsTmlSh68oSwcqcvdBKZE8TY8KsWikvLu0yGE4TwGy51tGo31lQXz5pMzgt7nBhGjDuIJXWu6WfKhA3YvRV%2Bu7PCRAP7i5hJeQuBv7k1TgNIesCwp4nekOClG0KlYPZ%2Fqz2u%2B1uFfcdubFGzMgapF6Q8z5PGa%2F5fcKyr4TQGZ2d67qhNhEt9QZaEYJXBRe8c4JiUoMGclgY1qynk4pgGl9Jv3EqZQ0oiMHzW3gIi610LG%2FtIsTc7gavXpHSrEgLc5JXSMEWzm1rQj3FsmTThyWTJFhjZXMoycvamaF0gtnUMpt8i%2FS8PUazGdr6eHtJmkCfMzue4um244oEBJXZb%2FbexBJbqwqMbbb1k%2F7EZjJYHclfBH1Pc%2BEV4dPSWoBVcD0%2BkIBNtwazYeE%2FeHOBzKV61oZwLUgdtwlPSseAyF%2BJc2OcgnOdAEoAdZDWB6OTxVRT6gVNXMcw2tiYYRf6MgEFLt%2FkCQm48A08ApvOvblP2y2D555AGt4wsyx%2Bpnjokt%2BjLHSZ5r9yUkkx5udW8yaKQq9DWU7zOFB2%2F7qQQ3OkB22dZFnQIHslZUggP5k81nA6YM%2BAulEuT%2BID0w75f0vgY6pgF6OP3ul%2FxvU6YS2mQH03%2FpypC%2BrfV%2FJ%2FUERxqP2LmcE2c7paN5jxuMPy4Qf79h44RxWeGYLeVyH%2FsVliuW0DZJ6mQ%2B%2FCL7p9yhqbUALLv9Ioyw6RDRhfsjDAa4RRpYcvwMfnWnPtPlsOoGd51%2BZ9D4yDSh4fzfm7DwlqsXnVrUH5r%2FDpX8HhTZvPXrwfGloBvJKJGuqjOqXKi9oi1t%2FV%2F3JbmfABdw&X-Amz-Signature=d90e0719b6d63bcb886e19ca67b4a65423c74d104812f15610f21d130fb0dcd1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MVNZS2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBApHIUSjFekoyWAb9M6w8QkA9It8Oz6v%2FJPr8KO0QRdAiBolQGDh%2FfEJ5AG%2FTru8rURFXEmthw%2Fe49vmRTCgiM2giqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMempuPAcS4%2BSzeGtkKtwDSVYrqCpUtWsdzmpfhcKuwpf4WB2TBDMx2goVOkeq0ehMsTmlSh68oSwcqcvdBKZE8TY8KsWikvLu0yGE4TwGy51tGo31lQXz5pMzgt7nBhGjDuIJXWu6WfKhA3YvRV%2Bu7PCRAP7i5hJeQuBv7k1TgNIesCwp4nekOClG0KlYPZ%2Fqz2u%2B1uFfcdubFGzMgapF6Q8z5PGa%2F5fcKyr4TQGZ2d67qhNhEt9QZaEYJXBRe8c4JiUoMGclgY1qynk4pgGl9Jv3EqZQ0oiMHzW3gIi610LG%2FtIsTc7gavXpHSrEgLc5JXSMEWzm1rQj3FsmTThyWTJFhjZXMoycvamaF0gtnUMpt8i%2FS8PUazGdr6eHtJmkCfMzue4um244oEBJXZb%2FbexBJbqwqMbbb1k%2F7EZjJYHclfBH1Pc%2BEV4dPSWoBVcD0%2BkIBNtwazYeE%2FeHOBzKV61oZwLUgdtwlPSseAyF%2BJc2OcgnOdAEoAdZDWB6OTxVRT6gVNXMcw2tiYYRf6MgEFLt%2FkCQm48A08ApvOvblP2y2D555AGt4wsyx%2Bpnjokt%2BjLHSZ5r9yUkkx5udW8yaKQq9DWU7zOFB2%2F7qQQ3OkB22dZFnQIHslZUggP5k81nA6YM%2BAulEuT%2BID0w75f0vgY6pgF6OP3ul%2FxvU6YS2mQH03%2FpypC%2BrfV%2FJ%2FUERxqP2LmcE2c7paN5jxuMPy4Qf79h44RxWeGYLeVyH%2FsVliuW0DZJ6mQ%2B%2FCL7p9yhqbUALLv9Ioyw6RDRhfsjDAa4RRpYcvwMfnWnPtPlsOoGd51%2BZ9D4yDSh4fzfm7DwlqsXnVrUH5r%2FDpX8HhTZvPXrwfGloBvJKJGuqjOqXKi9oi1t%2FV%2F3JbmfABdw&X-Amz-Signature=6b29d3c053e9d67f51e0823246204e866227d2a9e09703c64e3776faf196cf60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MVNZS2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBApHIUSjFekoyWAb9M6w8QkA9It8Oz6v%2FJPr8KO0QRdAiBolQGDh%2FfEJ5AG%2FTru8rURFXEmthw%2Fe49vmRTCgiM2giqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMempuPAcS4%2BSzeGtkKtwDSVYrqCpUtWsdzmpfhcKuwpf4WB2TBDMx2goVOkeq0ehMsTmlSh68oSwcqcvdBKZE8TY8KsWikvLu0yGE4TwGy51tGo31lQXz5pMzgt7nBhGjDuIJXWu6WfKhA3YvRV%2Bu7PCRAP7i5hJeQuBv7k1TgNIesCwp4nekOClG0KlYPZ%2Fqz2u%2B1uFfcdubFGzMgapF6Q8z5PGa%2F5fcKyr4TQGZ2d67qhNhEt9QZaEYJXBRe8c4JiUoMGclgY1qynk4pgGl9Jv3EqZQ0oiMHzW3gIi610LG%2FtIsTc7gavXpHSrEgLc5JXSMEWzm1rQj3FsmTThyWTJFhjZXMoycvamaF0gtnUMpt8i%2FS8PUazGdr6eHtJmkCfMzue4um244oEBJXZb%2FbexBJbqwqMbbb1k%2F7EZjJYHclfBH1Pc%2BEV4dPSWoBVcD0%2BkIBNtwazYeE%2FeHOBzKV61oZwLUgdtwlPSseAyF%2BJc2OcgnOdAEoAdZDWB6OTxVRT6gVNXMcw2tiYYRf6MgEFLt%2FkCQm48A08ApvOvblP2y2D555AGt4wsyx%2Bpnjokt%2BjLHSZ5r9yUkkx5udW8yaKQq9DWU7zOFB2%2F7qQQ3OkB22dZFnQIHslZUggP5k81nA6YM%2BAulEuT%2BID0w75f0vgY6pgF6OP3ul%2FxvU6YS2mQH03%2FpypC%2BrfV%2FJ%2FUERxqP2LmcE2c7paN5jxuMPy4Qf79h44RxWeGYLeVyH%2FsVliuW0DZJ6mQ%2B%2FCL7p9yhqbUALLv9Ioyw6RDRhfsjDAa4RRpYcvwMfnWnPtPlsOoGd51%2BZ9D4yDSh4fzfm7DwlqsXnVrUH5r%2FDpX8HhTZvPXrwfGloBvJKJGuqjOqXKi9oi1t%2FV%2F3JbmfABdw&X-Amz-Signature=c2bb8b5024962e45c939655a24e5470690d0eafb881ea8208ec799ff0084aeb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MVNZS2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBApHIUSjFekoyWAb9M6w8QkA9It8Oz6v%2FJPr8KO0QRdAiBolQGDh%2FfEJ5AG%2FTru8rURFXEmthw%2Fe49vmRTCgiM2giqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMempuPAcS4%2BSzeGtkKtwDSVYrqCpUtWsdzmpfhcKuwpf4WB2TBDMx2goVOkeq0ehMsTmlSh68oSwcqcvdBKZE8TY8KsWikvLu0yGE4TwGy51tGo31lQXz5pMzgt7nBhGjDuIJXWu6WfKhA3YvRV%2Bu7PCRAP7i5hJeQuBv7k1TgNIesCwp4nekOClG0KlYPZ%2Fqz2u%2B1uFfcdubFGzMgapF6Q8z5PGa%2F5fcKyr4TQGZ2d67qhNhEt9QZaEYJXBRe8c4JiUoMGclgY1qynk4pgGl9Jv3EqZQ0oiMHzW3gIi610LG%2FtIsTc7gavXpHSrEgLc5JXSMEWzm1rQj3FsmTThyWTJFhjZXMoycvamaF0gtnUMpt8i%2FS8PUazGdr6eHtJmkCfMzue4um244oEBJXZb%2FbexBJbqwqMbbb1k%2F7EZjJYHclfBH1Pc%2BEV4dPSWoBVcD0%2BkIBNtwazYeE%2FeHOBzKV61oZwLUgdtwlPSseAyF%2BJc2OcgnOdAEoAdZDWB6OTxVRT6gVNXMcw2tiYYRf6MgEFLt%2FkCQm48A08ApvOvblP2y2D555AGt4wsyx%2Bpnjokt%2BjLHSZ5r9yUkkx5udW8yaKQq9DWU7zOFB2%2F7qQQ3OkB22dZFnQIHslZUggP5k81nA6YM%2BAulEuT%2BID0w75f0vgY6pgF6OP3ul%2FxvU6YS2mQH03%2FpypC%2BrfV%2FJ%2FUERxqP2LmcE2c7paN5jxuMPy4Qf79h44RxWeGYLeVyH%2FsVliuW0DZJ6mQ%2B%2FCL7p9yhqbUALLv9Ioyw6RDRhfsjDAa4RRpYcvwMfnWnPtPlsOoGd51%2BZ9D4yDSh4fzfm7DwlqsXnVrUH5r%2FDpX8HhTZvPXrwfGloBvJKJGuqjOqXKi9oi1t%2FV%2F3JbmfABdw&X-Amz-Signature=49d963d99c84a6e3a28d67b76e62a9c0a41f2240b8aab7477ad63e5b45b3a67f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MVNZS2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBApHIUSjFekoyWAb9M6w8QkA9It8Oz6v%2FJPr8KO0QRdAiBolQGDh%2FfEJ5AG%2FTru8rURFXEmthw%2Fe49vmRTCgiM2giqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMempuPAcS4%2BSzeGtkKtwDSVYrqCpUtWsdzmpfhcKuwpf4WB2TBDMx2goVOkeq0ehMsTmlSh68oSwcqcvdBKZE8TY8KsWikvLu0yGE4TwGy51tGo31lQXz5pMzgt7nBhGjDuIJXWu6WfKhA3YvRV%2Bu7PCRAP7i5hJeQuBv7k1TgNIesCwp4nekOClG0KlYPZ%2Fqz2u%2B1uFfcdubFGzMgapF6Q8z5PGa%2F5fcKyr4TQGZ2d67qhNhEt9QZaEYJXBRe8c4JiUoMGclgY1qynk4pgGl9Jv3EqZQ0oiMHzW3gIi610LG%2FtIsTc7gavXpHSrEgLc5JXSMEWzm1rQj3FsmTThyWTJFhjZXMoycvamaF0gtnUMpt8i%2FS8PUazGdr6eHtJmkCfMzue4um244oEBJXZb%2FbexBJbqwqMbbb1k%2F7EZjJYHclfBH1Pc%2BEV4dPSWoBVcD0%2BkIBNtwazYeE%2FeHOBzKV61oZwLUgdtwlPSseAyF%2BJc2OcgnOdAEoAdZDWB6OTxVRT6gVNXMcw2tiYYRf6MgEFLt%2FkCQm48A08ApvOvblP2y2D555AGt4wsyx%2Bpnjokt%2BjLHSZ5r9yUkkx5udW8yaKQq9DWU7zOFB2%2F7qQQ3OkB22dZFnQIHslZUggP5k81nA6YM%2BAulEuT%2BID0w75f0vgY6pgF6OP3ul%2FxvU6YS2mQH03%2FpypC%2BrfV%2FJ%2FUERxqP2LmcE2c7paN5jxuMPy4Qf79h44RxWeGYLeVyH%2FsVliuW0DZJ6mQ%2B%2FCL7p9yhqbUALLv9Ioyw6RDRhfsjDAa4RRpYcvwMfnWnPtPlsOoGd51%2BZ9D4yDSh4fzfm7DwlqsXnVrUH5r%2FDpX8HhTZvPXrwfGloBvJKJGuqjOqXKi9oi1t%2FV%2F3JbmfABdw&X-Amz-Signature=ec931aef40392698964f65501d5c72d2b7648a931b88374c07e983c3cd173339&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3MVNZS2%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIBApHIUSjFekoyWAb9M6w8QkA9It8Oz6v%2FJPr8KO0QRdAiBolQGDh%2FfEJ5AG%2FTru8rURFXEmthw%2Fe49vmRTCgiM2giqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMempuPAcS4%2BSzeGtkKtwDSVYrqCpUtWsdzmpfhcKuwpf4WB2TBDMx2goVOkeq0ehMsTmlSh68oSwcqcvdBKZE8TY8KsWikvLu0yGE4TwGy51tGo31lQXz5pMzgt7nBhGjDuIJXWu6WfKhA3YvRV%2Bu7PCRAP7i5hJeQuBv7k1TgNIesCwp4nekOClG0KlYPZ%2Fqz2u%2B1uFfcdubFGzMgapF6Q8z5PGa%2F5fcKyr4TQGZ2d67qhNhEt9QZaEYJXBRe8c4JiUoMGclgY1qynk4pgGl9Jv3EqZQ0oiMHzW3gIi610LG%2FtIsTc7gavXpHSrEgLc5JXSMEWzm1rQj3FsmTThyWTJFhjZXMoycvamaF0gtnUMpt8i%2FS8PUazGdr6eHtJmkCfMzue4um244oEBJXZb%2FbexBJbqwqMbbb1k%2F7EZjJYHclfBH1Pc%2BEV4dPSWoBVcD0%2BkIBNtwazYeE%2FeHOBzKV61oZwLUgdtwlPSseAyF%2BJc2OcgnOdAEoAdZDWB6OTxVRT6gVNXMcw2tiYYRf6MgEFLt%2FkCQm48A08ApvOvblP2y2D555AGt4wsyx%2Bpnjokt%2BjLHSZ5r9yUkkx5udW8yaKQq9DWU7zOFB2%2F7qQQ3OkB22dZFnQIHslZUggP5k81nA6YM%2BAulEuT%2BID0w75f0vgY6pgF6OP3ul%2FxvU6YS2mQH03%2FpypC%2BrfV%2FJ%2FUERxqP2LmcE2c7paN5jxuMPy4Qf79h44RxWeGYLeVyH%2FsVliuW0DZJ6mQ%2B%2FCL7p9yhqbUALLv9Ioyw6RDRhfsjDAa4RRpYcvwMfnWnPtPlsOoGd51%2BZ9D4yDSh4fzfm7DwlqsXnVrUH5r%2FDpX8HhTZvPXrwfGloBvJKJGuqjOqXKi9oi1t%2FV%2F3JbmfABdw&X-Amz-Signature=47b29fe989037b3627bdb66a501f51b8992c150966df95439e1f09302a87cdc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
