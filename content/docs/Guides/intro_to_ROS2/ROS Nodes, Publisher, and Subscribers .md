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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMUDNX3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIE8Uy3TPpufHfhQg6ie%2FxGlWO3wlFJxqKh5TCM0Lg9HJAiBNPAq1Bbl%2Bt8vGKW6JSHhecNQS4teZ5OgzcU%2B4Rqo%2F1yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMfcxWbKqp5uU9dUblKtwDMy6UIu1raebWMEA64l1G%2BiPZWuzaPw8diH8gE7D6Yip4nMFBaQDeROEAp49WLAFot3RKaE8T9Rbqxn21G8VFR5ee81V%2FDFaWXW5RKbWUDPv4nNC786g6vlbkc5K1EcDPvPeveYYsXXyEi3htjLnevoXXVB%2F2yjTykladbhPGaIC4TNWO%2FPV4wNmrto%2BitJA%2Bm40Xry%2FcCdTpw%2FRKOKg6%2BAy3cb82ex40JfPU%2Bat82fHRM8Id4nIzFfC1AHd%2BiuFrlLrH0tlsMSSeKkbwNnhU%2BmMUJ2fl3xLFDRYTzKW%2F95ynk0YWCDpnmS6wl%2F5TU%2BVCyS74gmZWAAGUh%2F52hVKdWHkapMAxqdbpwVt4DGpS4PomJ%2Fxnu7F0wc9CcDD3%2FqFp%2FJweNwqmIn53uPk8542kXpC1J3rqFVwuzVXlVNEJon8XLoYc9HApFXgBMeJ9hA%2FLBbemu5d3zfOCK4jQe9JHNnPkN7Lt9cfGhnvCZJzF3x8d4CpAopz7L6YxTzQBsASKHEMkBXIHzqeX8NZEjtM%2BOLiuk9GYI1ut%2BqRvvlO%2FGBYrMru1nDs22tkeez8HtKWb6VvgFuYY71X5fTCC0Q%2Baj2VHAprlx5qggvweAqAnMYbZpZkq013LdQLNZpAwo571wgY6pgG%2FxkcwjLy8zQP1CawqUE9fx%2FEduvESO8Fwy%2F%2FUw1EjVa13DlRufVLWKTVDE8pQ5KwKN8b348oPZDh204IZhsz24GgNWIlUkw5ZVUBm5M04tiO7JYYPnoCP1b4vpWopBYdROaHgST03vaOTVCRVg1AA13rCi21KTWJrePd6B%2BnmAzqC2%2BVDh4L7zk2bvE4VkL40KWVNH7PztA48D1Dkzl24JKNLp5Jz&X-Amz-Signature=4fe118f2cf1c7d13cd08a657e0890d54cd18faf29c75b7e51e2028afcec6e637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMUDNX3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIE8Uy3TPpufHfhQg6ie%2FxGlWO3wlFJxqKh5TCM0Lg9HJAiBNPAq1Bbl%2Bt8vGKW6JSHhecNQS4teZ5OgzcU%2B4Rqo%2F1yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMfcxWbKqp5uU9dUblKtwDMy6UIu1raebWMEA64l1G%2BiPZWuzaPw8diH8gE7D6Yip4nMFBaQDeROEAp49WLAFot3RKaE8T9Rbqxn21G8VFR5ee81V%2FDFaWXW5RKbWUDPv4nNC786g6vlbkc5K1EcDPvPeveYYsXXyEi3htjLnevoXXVB%2F2yjTykladbhPGaIC4TNWO%2FPV4wNmrto%2BitJA%2Bm40Xry%2FcCdTpw%2FRKOKg6%2BAy3cb82ex40JfPU%2Bat82fHRM8Id4nIzFfC1AHd%2BiuFrlLrH0tlsMSSeKkbwNnhU%2BmMUJ2fl3xLFDRYTzKW%2F95ynk0YWCDpnmS6wl%2F5TU%2BVCyS74gmZWAAGUh%2F52hVKdWHkapMAxqdbpwVt4DGpS4PomJ%2Fxnu7F0wc9CcDD3%2FqFp%2FJweNwqmIn53uPk8542kXpC1J3rqFVwuzVXlVNEJon8XLoYc9HApFXgBMeJ9hA%2FLBbemu5d3zfOCK4jQe9JHNnPkN7Lt9cfGhnvCZJzF3x8d4CpAopz7L6YxTzQBsASKHEMkBXIHzqeX8NZEjtM%2BOLiuk9GYI1ut%2BqRvvlO%2FGBYrMru1nDs22tkeez8HtKWb6VvgFuYY71X5fTCC0Q%2Baj2VHAprlx5qggvweAqAnMYbZpZkq013LdQLNZpAwo571wgY6pgG%2FxkcwjLy8zQP1CawqUE9fx%2FEduvESO8Fwy%2F%2FUw1EjVa13DlRufVLWKTVDE8pQ5KwKN8b348oPZDh204IZhsz24GgNWIlUkw5ZVUBm5M04tiO7JYYPnoCP1b4vpWopBYdROaHgST03vaOTVCRVg1AA13rCi21KTWJrePd6B%2BnmAzqC2%2BVDh4L7zk2bvE4VkL40KWVNH7PztA48D1Dkzl24JKNLp5Jz&X-Amz-Signature=348ba055490ee50fa831434cbf0b86ad03fe101da6f049d675e48f1be978a8af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMUDNX3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIE8Uy3TPpufHfhQg6ie%2FxGlWO3wlFJxqKh5TCM0Lg9HJAiBNPAq1Bbl%2Bt8vGKW6JSHhecNQS4teZ5OgzcU%2B4Rqo%2F1yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMfcxWbKqp5uU9dUblKtwDMy6UIu1raebWMEA64l1G%2BiPZWuzaPw8diH8gE7D6Yip4nMFBaQDeROEAp49WLAFot3RKaE8T9Rbqxn21G8VFR5ee81V%2FDFaWXW5RKbWUDPv4nNC786g6vlbkc5K1EcDPvPeveYYsXXyEi3htjLnevoXXVB%2F2yjTykladbhPGaIC4TNWO%2FPV4wNmrto%2BitJA%2Bm40Xry%2FcCdTpw%2FRKOKg6%2BAy3cb82ex40JfPU%2Bat82fHRM8Id4nIzFfC1AHd%2BiuFrlLrH0tlsMSSeKkbwNnhU%2BmMUJ2fl3xLFDRYTzKW%2F95ynk0YWCDpnmS6wl%2F5TU%2BVCyS74gmZWAAGUh%2F52hVKdWHkapMAxqdbpwVt4DGpS4PomJ%2Fxnu7F0wc9CcDD3%2FqFp%2FJweNwqmIn53uPk8542kXpC1J3rqFVwuzVXlVNEJon8XLoYc9HApFXgBMeJ9hA%2FLBbemu5d3zfOCK4jQe9JHNnPkN7Lt9cfGhnvCZJzF3x8d4CpAopz7L6YxTzQBsASKHEMkBXIHzqeX8NZEjtM%2BOLiuk9GYI1ut%2BqRvvlO%2FGBYrMru1nDs22tkeez8HtKWb6VvgFuYY71X5fTCC0Q%2Baj2VHAprlx5qggvweAqAnMYbZpZkq013LdQLNZpAwo571wgY6pgG%2FxkcwjLy8zQP1CawqUE9fx%2FEduvESO8Fwy%2F%2FUw1EjVa13DlRufVLWKTVDE8pQ5KwKN8b348oPZDh204IZhsz24GgNWIlUkw5ZVUBm5M04tiO7JYYPnoCP1b4vpWopBYdROaHgST03vaOTVCRVg1AA13rCi21KTWJrePd6B%2BnmAzqC2%2BVDh4L7zk2bvE4VkL40KWVNH7PztA48D1Dkzl24JKNLp5Jz&X-Amz-Signature=5d9eb095b1a1383c877168a81379b3516e57ad81fae0d361360065a066ccc5b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMUDNX3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIE8Uy3TPpufHfhQg6ie%2FxGlWO3wlFJxqKh5TCM0Lg9HJAiBNPAq1Bbl%2Bt8vGKW6JSHhecNQS4teZ5OgzcU%2B4Rqo%2F1yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMfcxWbKqp5uU9dUblKtwDMy6UIu1raebWMEA64l1G%2BiPZWuzaPw8diH8gE7D6Yip4nMFBaQDeROEAp49WLAFot3RKaE8T9Rbqxn21G8VFR5ee81V%2FDFaWXW5RKbWUDPv4nNC786g6vlbkc5K1EcDPvPeveYYsXXyEi3htjLnevoXXVB%2F2yjTykladbhPGaIC4TNWO%2FPV4wNmrto%2BitJA%2Bm40Xry%2FcCdTpw%2FRKOKg6%2BAy3cb82ex40JfPU%2Bat82fHRM8Id4nIzFfC1AHd%2BiuFrlLrH0tlsMSSeKkbwNnhU%2BmMUJ2fl3xLFDRYTzKW%2F95ynk0YWCDpnmS6wl%2F5TU%2BVCyS74gmZWAAGUh%2F52hVKdWHkapMAxqdbpwVt4DGpS4PomJ%2Fxnu7F0wc9CcDD3%2FqFp%2FJweNwqmIn53uPk8542kXpC1J3rqFVwuzVXlVNEJon8XLoYc9HApFXgBMeJ9hA%2FLBbemu5d3zfOCK4jQe9JHNnPkN7Lt9cfGhnvCZJzF3x8d4CpAopz7L6YxTzQBsASKHEMkBXIHzqeX8NZEjtM%2BOLiuk9GYI1ut%2BqRvvlO%2FGBYrMru1nDs22tkeez8HtKWb6VvgFuYY71X5fTCC0Q%2Baj2VHAprlx5qggvweAqAnMYbZpZkq013LdQLNZpAwo571wgY6pgG%2FxkcwjLy8zQP1CawqUE9fx%2FEduvESO8Fwy%2F%2FUw1EjVa13DlRufVLWKTVDE8pQ5KwKN8b348oPZDh204IZhsz24GgNWIlUkw5ZVUBm5M04tiO7JYYPnoCP1b4vpWopBYdROaHgST03vaOTVCRVg1AA13rCi21KTWJrePd6B%2BnmAzqC2%2BVDh4L7zk2bvE4VkL40KWVNH7PztA48D1Dkzl24JKNLp5Jz&X-Amz-Signature=7392f866be48a6cd366e5006bc2c467ae42f160a92b2438813082db2eaaf3fa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMUDNX3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIE8Uy3TPpufHfhQg6ie%2FxGlWO3wlFJxqKh5TCM0Lg9HJAiBNPAq1Bbl%2Bt8vGKW6JSHhecNQS4teZ5OgzcU%2B4Rqo%2F1yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMfcxWbKqp5uU9dUblKtwDMy6UIu1raebWMEA64l1G%2BiPZWuzaPw8diH8gE7D6Yip4nMFBaQDeROEAp49WLAFot3RKaE8T9Rbqxn21G8VFR5ee81V%2FDFaWXW5RKbWUDPv4nNC786g6vlbkc5K1EcDPvPeveYYsXXyEi3htjLnevoXXVB%2F2yjTykladbhPGaIC4TNWO%2FPV4wNmrto%2BitJA%2Bm40Xry%2FcCdTpw%2FRKOKg6%2BAy3cb82ex40JfPU%2Bat82fHRM8Id4nIzFfC1AHd%2BiuFrlLrH0tlsMSSeKkbwNnhU%2BmMUJ2fl3xLFDRYTzKW%2F95ynk0YWCDpnmS6wl%2F5TU%2BVCyS74gmZWAAGUh%2F52hVKdWHkapMAxqdbpwVt4DGpS4PomJ%2Fxnu7F0wc9CcDD3%2FqFp%2FJweNwqmIn53uPk8542kXpC1J3rqFVwuzVXlVNEJon8XLoYc9HApFXgBMeJ9hA%2FLBbemu5d3zfOCK4jQe9JHNnPkN7Lt9cfGhnvCZJzF3x8d4CpAopz7L6YxTzQBsASKHEMkBXIHzqeX8NZEjtM%2BOLiuk9GYI1ut%2BqRvvlO%2FGBYrMru1nDs22tkeez8HtKWb6VvgFuYY71X5fTCC0Q%2Baj2VHAprlx5qggvweAqAnMYbZpZkq013LdQLNZpAwo571wgY6pgG%2FxkcwjLy8zQP1CawqUE9fx%2FEduvESO8Fwy%2F%2FUw1EjVa13DlRufVLWKTVDE8pQ5KwKN8b348oPZDh204IZhsz24GgNWIlUkw5ZVUBm5M04tiO7JYYPnoCP1b4vpWopBYdROaHgST03vaOTVCRVg1AA13rCi21KTWJrePd6B%2BnmAzqC2%2BVDh4L7zk2bvE4VkL40KWVNH7PztA48D1Dkzl24JKNLp5Jz&X-Amz-Signature=b0d80ca9cd63482a20fe70ec041a415a49ffe0c3daa2a6de0e82236a94ab61d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMUDNX3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIE8Uy3TPpufHfhQg6ie%2FxGlWO3wlFJxqKh5TCM0Lg9HJAiBNPAq1Bbl%2Bt8vGKW6JSHhecNQS4teZ5OgzcU%2B4Rqo%2F1yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMfcxWbKqp5uU9dUblKtwDMy6UIu1raebWMEA64l1G%2BiPZWuzaPw8diH8gE7D6Yip4nMFBaQDeROEAp49WLAFot3RKaE8T9Rbqxn21G8VFR5ee81V%2FDFaWXW5RKbWUDPv4nNC786g6vlbkc5K1EcDPvPeveYYsXXyEi3htjLnevoXXVB%2F2yjTykladbhPGaIC4TNWO%2FPV4wNmrto%2BitJA%2Bm40Xry%2FcCdTpw%2FRKOKg6%2BAy3cb82ex40JfPU%2Bat82fHRM8Id4nIzFfC1AHd%2BiuFrlLrH0tlsMSSeKkbwNnhU%2BmMUJ2fl3xLFDRYTzKW%2F95ynk0YWCDpnmS6wl%2F5TU%2BVCyS74gmZWAAGUh%2F52hVKdWHkapMAxqdbpwVt4DGpS4PomJ%2Fxnu7F0wc9CcDD3%2FqFp%2FJweNwqmIn53uPk8542kXpC1J3rqFVwuzVXlVNEJon8XLoYc9HApFXgBMeJ9hA%2FLBbemu5d3zfOCK4jQe9JHNnPkN7Lt9cfGhnvCZJzF3x8d4CpAopz7L6YxTzQBsASKHEMkBXIHzqeX8NZEjtM%2BOLiuk9GYI1ut%2BqRvvlO%2FGBYrMru1nDs22tkeez8HtKWb6VvgFuYY71X5fTCC0Q%2Baj2VHAprlx5qggvweAqAnMYbZpZkq013LdQLNZpAwo571wgY6pgG%2FxkcwjLy8zQP1CawqUE9fx%2FEduvESO8Fwy%2F%2FUw1EjVa13DlRufVLWKTVDE8pQ5KwKN8b348oPZDh204IZhsz24GgNWIlUkw5ZVUBm5M04tiO7JYYPnoCP1b4vpWopBYdROaHgST03vaOTVCRVg1AA13rCi21KTWJrePd6B%2BnmAzqC2%2BVDh4L7zk2bvE4VkL40KWVNH7PztA48D1Dkzl24JKNLp5Jz&X-Amz-Signature=23e4af84a1ac966ae25a45d20b02281f7e87d6bdfd06021690816cf32c75f6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMUDNX3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIE8Uy3TPpufHfhQg6ie%2FxGlWO3wlFJxqKh5TCM0Lg9HJAiBNPAq1Bbl%2Bt8vGKW6JSHhecNQS4teZ5OgzcU%2B4Rqo%2F1yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMfcxWbKqp5uU9dUblKtwDMy6UIu1raebWMEA64l1G%2BiPZWuzaPw8diH8gE7D6Yip4nMFBaQDeROEAp49WLAFot3RKaE8T9Rbqxn21G8VFR5ee81V%2FDFaWXW5RKbWUDPv4nNC786g6vlbkc5K1EcDPvPeveYYsXXyEi3htjLnevoXXVB%2F2yjTykladbhPGaIC4TNWO%2FPV4wNmrto%2BitJA%2Bm40Xry%2FcCdTpw%2FRKOKg6%2BAy3cb82ex40JfPU%2Bat82fHRM8Id4nIzFfC1AHd%2BiuFrlLrH0tlsMSSeKkbwNnhU%2BmMUJ2fl3xLFDRYTzKW%2F95ynk0YWCDpnmS6wl%2F5TU%2BVCyS74gmZWAAGUh%2F52hVKdWHkapMAxqdbpwVt4DGpS4PomJ%2Fxnu7F0wc9CcDD3%2FqFp%2FJweNwqmIn53uPk8542kXpC1J3rqFVwuzVXlVNEJon8XLoYc9HApFXgBMeJ9hA%2FLBbemu5d3zfOCK4jQe9JHNnPkN7Lt9cfGhnvCZJzF3x8d4CpAopz7L6YxTzQBsASKHEMkBXIHzqeX8NZEjtM%2BOLiuk9GYI1ut%2BqRvvlO%2FGBYrMru1nDs22tkeez8HtKWb6VvgFuYY71X5fTCC0Q%2Baj2VHAprlx5qggvweAqAnMYbZpZkq013LdQLNZpAwo571wgY6pgG%2FxkcwjLy8zQP1CawqUE9fx%2FEduvESO8Fwy%2F%2FUw1EjVa13DlRufVLWKTVDE8pQ5KwKN8b348oPZDh204IZhsz24GgNWIlUkw5ZVUBm5M04tiO7JYYPnoCP1b4vpWopBYdROaHgST03vaOTVCRVg1AA13rCi21KTWJrePd6B%2BnmAzqC2%2BVDh4L7zk2bvE4VkL40KWVNH7PztA48D1Dkzl24JKNLp5Jz&X-Amz-Signature=0539c42c486b3869df996dbb2bdc9c6835424f0888150e491d96050f55ea68e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMUDNX3%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIE8Uy3TPpufHfhQg6ie%2FxGlWO3wlFJxqKh5TCM0Lg9HJAiBNPAq1Bbl%2Bt8vGKW6JSHhecNQS4teZ5OgzcU%2B4Rqo%2F1yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMfcxWbKqp5uU9dUblKtwDMy6UIu1raebWMEA64l1G%2BiPZWuzaPw8diH8gE7D6Yip4nMFBaQDeROEAp49WLAFot3RKaE8T9Rbqxn21G8VFR5ee81V%2FDFaWXW5RKbWUDPv4nNC786g6vlbkc5K1EcDPvPeveYYsXXyEi3htjLnevoXXVB%2F2yjTykladbhPGaIC4TNWO%2FPV4wNmrto%2BitJA%2Bm40Xry%2FcCdTpw%2FRKOKg6%2BAy3cb82ex40JfPU%2Bat82fHRM8Id4nIzFfC1AHd%2BiuFrlLrH0tlsMSSeKkbwNnhU%2BmMUJ2fl3xLFDRYTzKW%2F95ynk0YWCDpnmS6wl%2F5TU%2BVCyS74gmZWAAGUh%2F52hVKdWHkapMAxqdbpwVt4DGpS4PomJ%2Fxnu7F0wc9CcDD3%2FqFp%2FJweNwqmIn53uPk8542kXpC1J3rqFVwuzVXlVNEJon8XLoYc9HApFXgBMeJ9hA%2FLBbemu5d3zfOCK4jQe9JHNnPkN7Lt9cfGhnvCZJzF3x8d4CpAopz7L6YxTzQBsASKHEMkBXIHzqeX8NZEjtM%2BOLiuk9GYI1ut%2BqRvvlO%2FGBYrMru1nDs22tkeez8HtKWb6VvgFuYY71X5fTCC0Q%2Baj2VHAprlx5qggvweAqAnMYbZpZkq013LdQLNZpAwo571wgY6pgG%2FxkcwjLy8zQP1CawqUE9fx%2FEduvESO8Fwy%2F%2FUw1EjVa13DlRufVLWKTVDE8pQ5KwKN8b348oPZDh204IZhsz24GgNWIlUkw5ZVUBm5M04tiO7JYYPnoCP1b4vpWopBYdROaHgST03vaOTVCRVg1AA13rCi21KTWJrePd6B%2BnmAzqC2%2BVDh4L7zk2bvE4VkL40KWVNH7PztA48D1Dkzl24JKNLp5Jz&X-Amz-Signature=4572658e6bdd1840c7df0c0a8109d94528eece8a5cc73ecd551d8cdd78ee2b28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
