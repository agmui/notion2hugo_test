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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IICMLE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6fx2yvcbv%2FyDl2X9YxjYw8ketF593y3gSSdzxSXXe8AiARMnoKZBW7fBxr%2FDpec3ZTn%2B17hfopm3tJ3JRmL5B34Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7%2FBr8a%2B%2FOSjTLoxVKtwDUy4sOFMWC876fGCJyjd%2BLCUogcYUdR0cjtPw7Zr2EZbO8pBP7f1HO7neH1oqd7q631tK3rfSdhGeVNCsFA%2BuacI7XUPKNthTGMjOQLiV2IbV%2BFqBREAsinGZ2CJKjUuU9RgtwJOUJovdViCzpgbKY0LBduUzFyDw%2FvO3M34UyV3ODQWkW1s8f%2FI1lCmi7B8dfK73e5bHp4hZo0TAPiVEQmZctGeOFYEcyJlkvo7ca1X%2BFm27XgWYst7Ks1M%2FzlRkIs4EsK5IJpN0%2B2Ex0pmhcl77yZquLXR0nF%2F89sYG52fplh2FV%2BXaQ5sAjJb9eCfg2xBM6tNtgyNePDi7baYwWQWzoXP%2BNVKQ%2FfeiabiJzPQbSh2fsoSEaH%2BLo0dieqm9R7JJ2T4cTqVf0rsFelqeRjQPugzqaDpebyCf9lYAubvMsrtqxVLXO7snUkuD%2FW81GDDeQ8VClbpufFX0j628xMofqi27wy93vQC7sYJFI%2Fur9jpaVHHIMX6ygqnvFERVh51yRw%2Fy89OHcXI6H1ICFy4DYabRzX3dnufmpr70AGG5hBB4OoTLXkC3drs%2F4H6R8Fm0haX8Fdcen60vVJZr9rKKGTxCrMwmELvGHWOCEKa4lYa2YoehWTle5%2FEwx9uXvwY6pgEa3qmkz63fEhOxtAWzhVwcAu5LDwvusdTWgZFIgglzSJiB5pUBq0CHszaBwYs%2BvTk5qLsrmtM%2Bv7VPWwJDw56nFpwFhEkBTNnteUw1U6glaIq2kCdn2njTbfzcA8WXHs3NXsE4zmNmVaGWUuckbNGo1L6e8LJ8JEuVsVpBaVQRq9Ft4c75cPuS84x3u1nGcWcDYXz0GAzccgIwaOPMJbhKQEpnx1KA&X-Amz-Signature=3eb832655ddfd31c470f98c56edfac5652370173c4ecb6165d93260a9695fb43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IICMLE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6fx2yvcbv%2FyDl2X9YxjYw8ketF593y3gSSdzxSXXe8AiARMnoKZBW7fBxr%2FDpec3ZTn%2B17hfopm3tJ3JRmL5B34Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7%2FBr8a%2B%2FOSjTLoxVKtwDUy4sOFMWC876fGCJyjd%2BLCUogcYUdR0cjtPw7Zr2EZbO8pBP7f1HO7neH1oqd7q631tK3rfSdhGeVNCsFA%2BuacI7XUPKNthTGMjOQLiV2IbV%2BFqBREAsinGZ2CJKjUuU9RgtwJOUJovdViCzpgbKY0LBduUzFyDw%2FvO3M34UyV3ODQWkW1s8f%2FI1lCmi7B8dfK73e5bHp4hZo0TAPiVEQmZctGeOFYEcyJlkvo7ca1X%2BFm27XgWYst7Ks1M%2FzlRkIs4EsK5IJpN0%2B2Ex0pmhcl77yZquLXR0nF%2F89sYG52fplh2FV%2BXaQ5sAjJb9eCfg2xBM6tNtgyNePDi7baYwWQWzoXP%2BNVKQ%2FfeiabiJzPQbSh2fsoSEaH%2BLo0dieqm9R7JJ2T4cTqVf0rsFelqeRjQPugzqaDpebyCf9lYAubvMsrtqxVLXO7snUkuD%2FW81GDDeQ8VClbpufFX0j628xMofqi27wy93vQC7sYJFI%2Fur9jpaVHHIMX6ygqnvFERVh51yRw%2Fy89OHcXI6H1ICFy4DYabRzX3dnufmpr70AGG5hBB4OoTLXkC3drs%2F4H6R8Fm0haX8Fdcen60vVJZr9rKKGTxCrMwmELvGHWOCEKa4lYa2YoehWTle5%2FEwx9uXvwY6pgEa3qmkz63fEhOxtAWzhVwcAu5LDwvusdTWgZFIgglzSJiB5pUBq0CHszaBwYs%2BvTk5qLsrmtM%2Bv7VPWwJDw56nFpwFhEkBTNnteUw1U6glaIq2kCdn2njTbfzcA8WXHs3NXsE4zmNmVaGWUuckbNGo1L6e8LJ8JEuVsVpBaVQRq9Ft4c75cPuS84x3u1nGcWcDYXz0GAzccgIwaOPMJbhKQEpnx1KA&X-Amz-Signature=8421511bbd8e0bcd9edf9f1d0985b26ebcd52c0cda60cf1fe94d57b76ec8b5f3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IICMLE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6fx2yvcbv%2FyDl2X9YxjYw8ketF593y3gSSdzxSXXe8AiARMnoKZBW7fBxr%2FDpec3ZTn%2B17hfopm3tJ3JRmL5B34Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7%2FBr8a%2B%2FOSjTLoxVKtwDUy4sOFMWC876fGCJyjd%2BLCUogcYUdR0cjtPw7Zr2EZbO8pBP7f1HO7neH1oqd7q631tK3rfSdhGeVNCsFA%2BuacI7XUPKNthTGMjOQLiV2IbV%2BFqBREAsinGZ2CJKjUuU9RgtwJOUJovdViCzpgbKY0LBduUzFyDw%2FvO3M34UyV3ODQWkW1s8f%2FI1lCmi7B8dfK73e5bHp4hZo0TAPiVEQmZctGeOFYEcyJlkvo7ca1X%2BFm27XgWYst7Ks1M%2FzlRkIs4EsK5IJpN0%2B2Ex0pmhcl77yZquLXR0nF%2F89sYG52fplh2FV%2BXaQ5sAjJb9eCfg2xBM6tNtgyNePDi7baYwWQWzoXP%2BNVKQ%2FfeiabiJzPQbSh2fsoSEaH%2BLo0dieqm9R7JJ2T4cTqVf0rsFelqeRjQPugzqaDpebyCf9lYAubvMsrtqxVLXO7snUkuD%2FW81GDDeQ8VClbpufFX0j628xMofqi27wy93vQC7sYJFI%2Fur9jpaVHHIMX6ygqnvFERVh51yRw%2Fy89OHcXI6H1ICFy4DYabRzX3dnufmpr70AGG5hBB4OoTLXkC3drs%2F4H6R8Fm0haX8Fdcen60vVJZr9rKKGTxCrMwmELvGHWOCEKa4lYa2YoehWTle5%2FEwx9uXvwY6pgEa3qmkz63fEhOxtAWzhVwcAu5LDwvusdTWgZFIgglzSJiB5pUBq0CHszaBwYs%2BvTk5qLsrmtM%2Bv7VPWwJDw56nFpwFhEkBTNnteUw1U6glaIq2kCdn2njTbfzcA8WXHs3NXsE4zmNmVaGWUuckbNGo1L6e8LJ8JEuVsVpBaVQRq9Ft4c75cPuS84x3u1nGcWcDYXz0GAzccgIwaOPMJbhKQEpnx1KA&X-Amz-Signature=778ae0b8515edd0175f0284f8caf6d1ba1e50c5786083030cd68c407e5b23ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IICMLE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6fx2yvcbv%2FyDl2X9YxjYw8ketF593y3gSSdzxSXXe8AiARMnoKZBW7fBxr%2FDpec3ZTn%2B17hfopm3tJ3JRmL5B34Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7%2FBr8a%2B%2FOSjTLoxVKtwDUy4sOFMWC876fGCJyjd%2BLCUogcYUdR0cjtPw7Zr2EZbO8pBP7f1HO7neH1oqd7q631tK3rfSdhGeVNCsFA%2BuacI7XUPKNthTGMjOQLiV2IbV%2BFqBREAsinGZ2CJKjUuU9RgtwJOUJovdViCzpgbKY0LBduUzFyDw%2FvO3M34UyV3ODQWkW1s8f%2FI1lCmi7B8dfK73e5bHp4hZo0TAPiVEQmZctGeOFYEcyJlkvo7ca1X%2BFm27XgWYst7Ks1M%2FzlRkIs4EsK5IJpN0%2B2Ex0pmhcl77yZquLXR0nF%2F89sYG52fplh2FV%2BXaQ5sAjJb9eCfg2xBM6tNtgyNePDi7baYwWQWzoXP%2BNVKQ%2FfeiabiJzPQbSh2fsoSEaH%2BLo0dieqm9R7JJ2T4cTqVf0rsFelqeRjQPugzqaDpebyCf9lYAubvMsrtqxVLXO7snUkuD%2FW81GDDeQ8VClbpufFX0j628xMofqi27wy93vQC7sYJFI%2Fur9jpaVHHIMX6ygqnvFERVh51yRw%2Fy89OHcXI6H1ICFy4DYabRzX3dnufmpr70AGG5hBB4OoTLXkC3drs%2F4H6R8Fm0haX8Fdcen60vVJZr9rKKGTxCrMwmELvGHWOCEKa4lYa2YoehWTle5%2FEwx9uXvwY6pgEa3qmkz63fEhOxtAWzhVwcAu5LDwvusdTWgZFIgglzSJiB5pUBq0CHszaBwYs%2BvTk5qLsrmtM%2Bv7VPWwJDw56nFpwFhEkBTNnteUw1U6glaIq2kCdn2njTbfzcA8WXHs3NXsE4zmNmVaGWUuckbNGo1L6e8LJ8JEuVsVpBaVQRq9Ft4c75cPuS84x3u1nGcWcDYXz0GAzccgIwaOPMJbhKQEpnx1KA&X-Amz-Signature=6c20ab4cb9b31b226d594bfc492ad743613eea0b526c1e7ebf6ba6332a1855d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IICMLE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6fx2yvcbv%2FyDl2X9YxjYw8ketF593y3gSSdzxSXXe8AiARMnoKZBW7fBxr%2FDpec3ZTn%2B17hfopm3tJ3JRmL5B34Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7%2FBr8a%2B%2FOSjTLoxVKtwDUy4sOFMWC876fGCJyjd%2BLCUogcYUdR0cjtPw7Zr2EZbO8pBP7f1HO7neH1oqd7q631tK3rfSdhGeVNCsFA%2BuacI7XUPKNthTGMjOQLiV2IbV%2BFqBREAsinGZ2CJKjUuU9RgtwJOUJovdViCzpgbKY0LBduUzFyDw%2FvO3M34UyV3ODQWkW1s8f%2FI1lCmi7B8dfK73e5bHp4hZo0TAPiVEQmZctGeOFYEcyJlkvo7ca1X%2BFm27XgWYst7Ks1M%2FzlRkIs4EsK5IJpN0%2B2Ex0pmhcl77yZquLXR0nF%2F89sYG52fplh2FV%2BXaQ5sAjJb9eCfg2xBM6tNtgyNePDi7baYwWQWzoXP%2BNVKQ%2FfeiabiJzPQbSh2fsoSEaH%2BLo0dieqm9R7JJ2T4cTqVf0rsFelqeRjQPugzqaDpebyCf9lYAubvMsrtqxVLXO7snUkuD%2FW81GDDeQ8VClbpufFX0j628xMofqi27wy93vQC7sYJFI%2Fur9jpaVHHIMX6ygqnvFERVh51yRw%2Fy89OHcXI6H1ICFy4DYabRzX3dnufmpr70AGG5hBB4OoTLXkC3drs%2F4H6R8Fm0haX8Fdcen60vVJZr9rKKGTxCrMwmELvGHWOCEKa4lYa2YoehWTle5%2FEwx9uXvwY6pgEa3qmkz63fEhOxtAWzhVwcAu5LDwvusdTWgZFIgglzSJiB5pUBq0CHszaBwYs%2BvTk5qLsrmtM%2Bv7VPWwJDw56nFpwFhEkBTNnteUw1U6glaIq2kCdn2njTbfzcA8WXHs3NXsE4zmNmVaGWUuckbNGo1L6e8LJ8JEuVsVpBaVQRq9Ft4c75cPuS84x3u1nGcWcDYXz0GAzccgIwaOPMJbhKQEpnx1KA&X-Amz-Signature=b90e6a053e06c56606dd96988b13e6fefc9a5a9c50c60e4aa1db7fe1951b4bf1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IICMLE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6fx2yvcbv%2FyDl2X9YxjYw8ketF593y3gSSdzxSXXe8AiARMnoKZBW7fBxr%2FDpec3ZTn%2B17hfopm3tJ3JRmL5B34Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7%2FBr8a%2B%2FOSjTLoxVKtwDUy4sOFMWC876fGCJyjd%2BLCUogcYUdR0cjtPw7Zr2EZbO8pBP7f1HO7neH1oqd7q631tK3rfSdhGeVNCsFA%2BuacI7XUPKNthTGMjOQLiV2IbV%2BFqBREAsinGZ2CJKjUuU9RgtwJOUJovdViCzpgbKY0LBduUzFyDw%2FvO3M34UyV3ODQWkW1s8f%2FI1lCmi7B8dfK73e5bHp4hZo0TAPiVEQmZctGeOFYEcyJlkvo7ca1X%2BFm27XgWYst7Ks1M%2FzlRkIs4EsK5IJpN0%2B2Ex0pmhcl77yZquLXR0nF%2F89sYG52fplh2FV%2BXaQ5sAjJb9eCfg2xBM6tNtgyNePDi7baYwWQWzoXP%2BNVKQ%2FfeiabiJzPQbSh2fsoSEaH%2BLo0dieqm9R7JJ2T4cTqVf0rsFelqeRjQPugzqaDpebyCf9lYAubvMsrtqxVLXO7snUkuD%2FW81GDDeQ8VClbpufFX0j628xMofqi27wy93vQC7sYJFI%2Fur9jpaVHHIMX6ygqnvFERVh51yRw%2Fy89OHcXI6H1ICFy4DYabRzX3dnufmpr70AGG5hBB4OoTLXkC3drs%2F4H6R8Fm0haX8Fdcen60vVJZr9rKKGTxCrMwmELvGHWOCEKa4lYa2YoehWTle5%2FEwx9uXvwY6pgEa3qmkz63fEhOxtAWzhVwcAu5LDwvusdTWgZFIgglzSJiB5pUBq0CHszaBwYs%2BvTk5qLsrmtM%2Bv7VPWwJDw56nFpwFhEkBTNnteUw1U6glaIq2kCdn2njTbfzcA8WXHs3NXsE4zmNmVaGWUuckbNGo1L6e8LJ8JEuVsVpBaVQRq9Ft4c75cPuS84x3u1nGcWcDYXz0GAzccgIwaOPMJbhKQEpnx1KA&X-Amz-Signature=e16e0d4a3c3ca2ceb3574ac74594c748f46ca59e8b4c1516a95225e88d5b9bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IICMLE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6fx2yvcbv%2FyDl2X9YxjYw8ketF593y3gSSdzxSXXe8AiARMnoKZBW7fBxr%2FDpec3ZTn%2B17hfopm3tJ3JRmL5B34Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7%2FBr8a%2B%2FOSjTLoxVKtwDUy4sOFMWC876fGCJyjd%2BLCUogcYUdR0cjtPw7Zr2EZbO8pBP7f1HO7neH1oqd7q631tK3rfSdhGeVNCsFA%2BuacI7XUPKNthTGMjOQLiV2IbV%2BFqBREAsinGZ2CJKjUuU9RgtwJOUJovdViCzpgbKY0LBduUzFyDw%2FvO3M34UyV3ODQWkW1s8f%2FI1lCmi7B8dfK73e5bHp4hZo0TAPiVEQmZctGeOFYEcyJlkvo7ca1X%2BFm27XgWYst7Ks1M%2FzlRkIs4EsK5IJpN0%2B2Ex0pmhcl77yZquLXR0nF%2F89sYG52fplh2FV%2BXaQ5sAjJb9eCfg2xBM6tNtgyNePDi7baYwWQWzoXP%2BNVKQ%2FfeiabiJzPQbSh2fsoSEaH%2BLo0dieqm9R7JJ2T4cTqVf0rsFelqeRjQPugzqaDpebyCf9lYAubvMsrtqxVLXO7snUkuD%2FW81GDDeQ8VClbpufFX0j628xMofqi27wy93vQC7sYJFI%2Fur9jpaVHHIMX6ygqnvFERVh51yRw%2Fy89OHcXI6H1ICFy4DYabRzX3dnufmpr70AGG5hBB4OoTLXkC3drs%2F4H6R8Fm0haX8Fdcen60vVJZr9rKKGTxCrMwmELvGHWOCEKa4lYa2YoehWTle5%2FEwx9uXvwY6pgEa3qmkz63fEhOxtAWzhVwcAu5LDwvusdTWgZFIgglzSJiB5pUBq0CHszaBwYs%2BvTk5qLsrmtM%2Bv7VPWwJDw56nFpwFhEkBTNnteUw1U6glaIq2kCdn2njTbfzcA8WXHs3NXsE4zmNmVaGWUuckbNGo1L6e8LJ8JEuVsVpBaVQRq9Ft4c75cPuS84x3u1nGcWcDYXz0GAzccgIwaOPMJbhKQEpnx1KA&X-Amz-Signature=d73fce37f75ccfa7d344bce8f660c919301e41dde6ba0930d9889227b9242d64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4IICMLE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6fx2yvcbv%2FyDl2X9YxjYw8ketF593y3gSSdzxSXXe8AiARMnoKZBW7fBxr%2FDpec3ZTn%2B17hfopm3tJ3JRmL5B34Cr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7%2FBr8a%2B%2FOSjTLoxVKtwDUy4sOFMWC876fGCJyjd%2BLCUogcYUdR0cjtPw7Zr2EZbO8pBP7f1HO7neH1oqd7q631tK3rfSdhGeVNCsFA%2BuacI7XUPKNthTGMjOQLiV2IbV%2BFqBREAsinGZ2CJKjUuU9RgtwJOUJovdViCzpgbKY0LBduUzFyDw%2FvO3M34UyV3ODQWkW1s8f%2FI1lCmi7B8dfK73e5bHp4hZo0TAPiVEQmZctGeOFYEcyJlkvo7ca1X%2BFm27XgWYst7Ks1M%2FzlRkIs4EsK5IJpN0%2B2Ex0pmhcl77yZquLXR0nF%2F89sYG52fplh2FV%2BXaQ5sAjJb9eCfg2xBM6tNtgyNePDi7baYwWQWzoXP%2BNVKQ%2FfeiabiJzPQbSh2fsoSEaH%2BLo0dieqm9R7JJ2T4cTqVf0rsFelqeRjQPugzqaDpebyCf9lYAubvMsrtqxVLXO7snUkuD%2FW81GDDeQ8VClbpufFX0j628xMofqi27wy93vQC7sYJFI%2Fur9jpaVHHIMX6ygqnvFERVh51yRw%2Fy89OHcXI6H1ICFy4DYabRzX3dnufmpr70AGG5hBB4OoTLXkC3drs%2F4H6R8Fm0haX8Fdcen60vVJZr9rKKGTxCrMwmELvGHWOCEKa4lYa2YoehWTle5%2FEwx9uXvwY6pgEa3qmkz63fEhOxtAWzhVwcAu5LDwvusdTWgZFIgglzSJiB5pUBq0CHszaBwYs%2BvTk5qLsrmtM%2Bv7VPWwJDw56nFpwFhEkBTNnteUw1U6glaIq2kCdn2njTbfzcA8WXHs3NXsE4zmNmVaGWUuckbNGo1L6e8LJ8JEuVsVpBaVQRq9Ft4c75cPuS84x3u1nGcWcDYXz0GAzccgIwaOPMJbhKQEpnx1KA&X-Amz-Signature=078dc98d21f20fa3a9afeab912a28225a7edbbf38eb93347e8ca05a3dc95ee84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
