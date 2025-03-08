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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LL7FKE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBQPO71pqTr4xPU6nanCHikZuNU28k1ydq8lJ63SmAv3AiEAtLr4SjbaV9IDLRZ9GS%2BRV0TRMhAQmAqgoxo%2Fs48nx%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDA5snoNk9QzNnZg4aCrcA8ZBKRquolCnQtLYDaRxU1RZG2ME4MbaaA1%2FKa7ZYY23bO5vbyJlh9ZeKI4XMlJpCP9iWpc8TTXXneLVxoQrl2fv5B5bR6TzepRfR1Vm4MxRTvf6XA%2FfpkW3afjTrPhpQZdD0FlBq2x3DazLpNkX1cpj%2FGWgYAJPXnB22VYBwq3SpntKXCkvwMrK4SStiYAQOCW2LRbU56AeLpaWNhiV0TkjlgRSwygCMXJM51%2FKNBkWybAZCzb5tTRckm%2FiRTJ6du%2BIGb9UCERIA%2F39rS9m3dDI4i3LnOJUhuvaGI51hKVQZvjL7r%2FSPKq7j5hjAxxL9PWvvQC6DOJp2suFg2BLq6RQjDmZJ2N1%2FMBidlLgc7Qykic1YoZmOgZYiSsTnH1xU5x83kv%2BVG0QjlWKb6ESRuHfj7bsQzBx9WDZqCsPNd3A5ZliC303fh71nKPVN2uCyutHKCpvgmnIyJZz1qKF8LklI21D8E09LUzShfv6gPeY9ot0Eou6CyHOF53gslkL%2BkHB%2ByOChFK9F0L5KUlglY%2BdeQVVhpNGUKc%2B8imDPXd1qjXP7jssQ2ENejfbsTfA4jG%2BroJjktLAwuxa1CF%2F3a3MdBM9OHwmTcfkE%2FHo54S0semH5nU9ZRaFQ23dMLvgr74GOqUBihKOgd1DfDRh9ka7TXQCies9wJjsL7dl0nMpw3KYj20bciMbBJFpIqzjHtNOeBQkxhXwpAFdJj12ojZYlpQ%2FNvYrgG9brji1XOAt3kfXo4S%2Bok4tqhFep7%2FxarvdDuZqmkv6aj9pDsy9lXC7qv%2BgGum3enP6Q7Jr4WN4GENS9WbiCeDEDp56MXLzwC57Y0nohnVLqSBW1hPxhXL1wIKgSAXpWM0S&X-Amz-Signature=bc5ee808d9d069ced98d974d12e47eb1a1ec2ed3fee9b249881ddb946c0a9255&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LL7FKE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBQPO71pqTr4xPU6nanCHikZuNU28k1ydq8lJ63SmAv3AiEAtLr4SjbaV9IDLRZ9GS%2BRV0TRMhAQmAqgoxo%2Fs48nx%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDA5snoNk9QzNnZg4aCrcA8ZBKRquolCnQtLYDaRxU1RZG2ME4MbaaA1%2FKa7ZYY23bO5vbyJlh9ZeKI4XMlJpCP9iWpc8TTXXneLVxoQrl2fv5B5bR6TzepRfR1Vm4MxRTvf6XA%2FfpkW3afjTrPhpQZdD0FlBq2x3DazLpNkX1cpj%2FGWgYAJPXnB22VYBwq3SpntKXCkvwMrK4SStiYAQOCW2LRbU56AeLpaWNhiV0TkjlgRSwygCMXJM51%2FKNBkWybAZCzb5tTRckm%2FiRTJ6du%2BIGb9UCERIA%2F39rS9m3dDI4i3LnOJUhuvaGI51hKVQZvjL7r%2FSPKq7j5hjAxxL9PWvvQC6DOJp2suFg2BLq6RQjDmZJ2N1%2FMBidlLgc7Qykic1YoZmOgZYiSsTnH1xU5x83kv%2BVG0QjlWKb6ESRuHfj7bsQzBx9WDZqCsPNd3A5ZliC303fh71nKPVN2uCyutHKCpvgmnIyJZz1qKF8LklI21D8E09LUzShfv6gPeY9ot0Eou6CyHOF53gslkL%2BkHB%2ByOChFK9F0L5KUlglY%2BdeQVVhpNGUKc%2B8imDPXd1qjXP7jssQ2ENejfbsTfA4jG%2BroJjktLAwuxa1CF%2F3a3MdBM9OHwmTcfkE%2FHo54S0semH5nU9ZRaFQ23dMLvgr74GOqUBihKOgd1DfDRh9ka7TXQCies9wJjsL7dl0nMpw3KYj20bciMbBJFpIqzjHtNOeBQkxhXwpAFdJj12ojZYlpQ%2FNvYrgG9brji1XOAt3kfXo4S%2Bok4tqhFep7%2FxarvdDuZqmkv6aj9pDsy9lXC7qv%2BgGum3enP6Q7Jr4WN4GENS9WbiCeDEDp56MXLzwC57Y0nohnVLqSBW1hPxhXL1wIKgSAXpWM0S&X-Amz-Signature=cdc1148cc853b29cd2528afad0a531e23b204b41d861d52daedc1b5e7d8cf8f8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LL7FKE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBQPO71pqTr4xPU6nanCHikZuNU28k1ydq8lJ63SmAv3AiEAtLr4SjbaV9IDLRZ9GS%2BRV0TRMhAQmAqgoxo%2Fs48nx%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDA5snoNk9QzNnZg4aCrcA8ZBKRquolCnQtLYDaRxU1RZG2ME4MbaaA1%2FKa7ZYY23bO5vbyJlh9ZeKI4XMlJpCP9iWpc8TTXXneLVxoQrl2fv5B5bR6TzepRfR1Vm4MxRTvf6XA%2FfpkW3afjTrPhpQZdD0FlBq2x3DazLpNkX1cpj%2FGWgYAJPXnB22VYBwq3SpntKXCkvwMrK4SStiYAQOCW2LRbU56AeLpaWNhiV0TkjlgRSwygCMXJM51%2FKNBkWybAZCzb5tTRckm%2FiRTJ6du%2BIGb9UCERIA%2F39rS9m3dDI4i3LnOJUhuvaGI51hKVQZvjL7r%2FSPKq7j5hjAxxL9PWvvQC6DOJp2suFg2BLq6RQjDmZJ2N1%2FMBidlLgc7Qykic1YoZmOgZYiSsTnH1xU5x83kv%2BVG0QjlWKb6ESRuHfj7bsQzBx9WDZqCsPNd3A5ZliC303fh71nKPVN2uCyutHKCpvgmnIyJZz1qKF8LklI21D8E09LUzShfv6gPeY9ot0Eou6CyHOF53gslkL%2BkHB%2ByOChFK9F0L5KUlglY%2BdeQVVhpNGUKc%2B8imDPXd1qjXP7jssQ2ENejfbsTfA4jG%2BroJjktLAwuxa1CF%2F3a3MdBM9OHwmTcfkE%2FHo54S0semH5nU9ZRaFQ23dMLvgr74GOqUBihKOgd1DfDRh9ka7TXQCies9wJjsL7dl0nMpw3KYj20bciMbBJFpIqzjHtNOeBQkxhXwpAFdJj12ojZYlpQ%2FNvYrgG9brji1XOAt3kfXo4S%2Bok4tqhFep7%2FxarvdDuZqmkv6aj9pDsy9lXC7qv%2BgGum3enP6Q7Jr4WN4GENS9WbiCeDEDp56MXLzwC57Y0nohnVLqSBW1hPxhXL1wIKgSAXpWM0S&X-Amz-Signature=4ef1cc251bb8c8a9f3aeeb10b9a69bef6ada8020ad8a5bb7a31a7dca823e614c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LL7FKE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBQPO71pqTr4xPU6nanCHikZuNU28k1ydq8lJ63SmAv3AiEAtLr4SjbaV9IDLRZ9GS%2BRV0TRMhAQmAqgoxo%2Fs48nx%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDA5snoNk9QzNnZg4aCrcA8ZBKRquolCnQtLYDaRxU1RZG2ME4MbaaA1%2FKa7ZYY23bO5vbyJlh9ZeKI4XMlJpCP9iWpc8TTXXneLVxoQrl2fv5B5bR6TzepRfR1Vm4MxRTvf6XA%2FfpkW3afjTrPhpQZdD0FlBq2x3DazLpNkX1cpj%2FGWgYAJPXnB22VYBwq3SpntKXCkvwMrK4SStiYAQOCW2LRbU56AeLpaWNhiV0TkjlgRSwygCMXJM51%2FKNBkWybAZCzb5tTRckm%2FiRTJ6du%2BIGb9UCERIA%2F39rS9m3dDI4i3LnOJUhuvaGI51hKVQZvjL7r%2FSPKq7j5hjAxxL9PWvvQC6DOJp2suFg2BLq6RQjDmZJ2N1%2FMBidlLgc7Qykic1YoZmOgZYiSsTnH1xU5x83kv%2BVG0QjlWKb6ESRuHfj7bsQzBx9WDZqCsPNd3A5ZliC303fh71nKPVN2uCyutHKCpvgmnIyJZz1qKF8LklI21D8E09LUzShfv6gPeY9ot0Eou6CyHOF53gslkL%2BkHB%2ByOChFK9F0L5KUlglY%2BdeQVVhpNGUKc%2B8imDPXd1qjXP7jssQ2ENejfbsTfA4jG%2BroJjktLAwuxa1CF%2F3a3MdBM9OHwmTcfkE%2FHo54S0semH5nU9ZRaFQ23dMLvgr74GOqUBihKOgd1DfDRh9ka7TXQCies9wJjsL7dl0nMpw3KYj20bciMbBJFpIqzjHtNOeBQkxhXwpAFdJj12ojZYlpQ%2FNvYrgG9brji1XOAt3kfXo4S%2Bok4tqhFep7%2FxarvdDuZqmkv6aj9pDsy9lXC7qv%2BgGum3enP6Q7Jr4WN4GENS9WbiCeDEDp56MXLzwC57Y0nohnVLqSBW1hPxhXL1wIKgSAXpWM0S&X-Amz-Signature=3d7abe6b4a096c8bc630c6f0d8a8e4f7dfdb1e75fda7f5146155fb261597f849&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LL7FKE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBQPO71pqTr4xPU6nanCHikZuNU28k1ydq8lJ63SmAv3AiEAtLr4SjbaV9IDLRZ9GS%2BRV0TRMhAQmAqgoxo%2Fs48nx%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDA5snoNk9QzNnZg4aCrcA8ZBKRquolCnQtLYDaRxU1RZG2ME4MbaaA1%2FKa7ZYY23bO5vbyJlh9ZeKI4XMlJpCP9iWpc8TTXXneLVxoQrl2fv5B5bR6TzepRfR1Vm4MxRTvf6XA%2FfpkW3afjTrPhpQZdD0FlBq2x3DazLpNkX1cpj%2FGWgYAJPXnB22VYBwq3SpntKXCkvwMrK4SStiYAQOCW2LRbU56AeLpaWNhiV0TkjlgRSwygCMXJM51%2FKNBkWybAZCzb5tTRckm%2FiRTJ6du%2BIGb9UCERIA%2F39rS9m3dDI4i3LnOJUhuvaGI51hKVQZvjL7r%2FSPKq7j5hjAxxL9PWvvQC6DOJp2suFg2BLq6RQjDmZJ2N1%2FMBidlLgc7Qykic1YoZmOgZYiSsTnH1xU5x83kv%2BVG0QjlWKb6ESRuHfj7bsQzBx9WDZqCsPNd3A5ZliC303fh71nKPVN2uCyutHKCpvgmnIyJZz1qKF8LklI21D8E09LUzShfv6gPeY9ot0Eou6CyHOF53gslkL%2BkHB%2ByOChFK9F0L5KUlglY%2BdeQVVhpNGUKc%2B8imDPXd1qjXP7jssQ2ENejfbsTfA4jG%2BroJjktLAwuxa1CF%2F3a3MdBM9OHwmTcfkE%2FHo54S0semH5nU9ZRaFQ23dMLvgr74GOqUBihKOgd1DfDRh9ka7TXQCies9wJjsL7dl0nMpw3KYj20bciMbBJFpIqzjHtNOeBQkxhXwpAFdJj12ojZYlpQ%2FNvYrgG9brji1XOAt3kfXo4S%2Bok4tqhFep7%2FxarvdDuZqmkv6aj9pDsy9lXC7qv%2BgGum3enP6Q7Jr4WN4GENS9WbiCeDEDp56MXLzwC57Y0nohnVLqSBW1hPxhXL1wIKgSAXpWM0S&X-Amz-Signature=3c65448b23e764f7b90d115683b350b5e51c4a0db9fc08b1af8cef132430d45f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LL7FKE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBQPO71pqTr4xPU6nanCHikZuNU28k1ydq8lJ63SmAv3AiEAtLr4SjbaV9IDLRZ9GS%2BRV0TRMhAQmAqgoxo%2Fs48nx%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDA5snoNk9QzNnZg4aCrcA8ZBKRquolCnQtLYDaRxU1RZG2ME4MbaaA1%2FKa7ZYY23bO5vbyJlh9ZeKI4XMlJpCP9iWpc8TTXXneLVxoQrl2fv5B5bR6TzepRfR1Vm4MxRTvf6XA%2FfpkW3afjTrPhpQZdD0FlBq2x3DazLpNkX1cpj%2FGWgYAJPXnB22VYBwq3SpntKXCkvwMrK4SStiYAQOCW2LRbU56AeLpaWNhiV0TkjlgRSwygCMXJM51%2FKNBkWybAZCzb5tTRckm%2FiRTJ6du%2BIGb9UCERIA%2F39rS9m3dDI4i3LnOJUhuvaGI51hKVQZvjL7r%2FSPKq7j5hjAxxL9PWvvQC6DOJp2suFg2BLq6RQjDmZJ2N1%2FMBidlLgc7Qykic1YoZmOgZYiSsTnH1xU5x83kv%2BVG0QjlWKb6ESRuHfj7bsQzBx9WDZqCsPNd3A5ZliC303fh71nKPVN2uCyutHKCpvgmnIyJZz1qKF8LklI21D8E09LUzShfv6gPeY9ot0Eou6CyHOF53gslkL%2BkHB%2ByOChFK9F0L5KUlglY%2BdeQVVhpNGUKc%2B8imDPXd1qjXP7jssQ2ENejfbsTfA4jG%2BroJjktLAwuxa1CF%2F3a3MdBM9OHwmTcfkE%2FHo54S0semH5nU9ZRaFQ23dMLvgr74GOqUBihKOgd1DfDRh9ka7TXQCies9wJjsL7dl0nMpw3KYj20bciMbBJFpIqzjHtNOeBQkxhXwpAFdJj12ojZYlpQ%2FNvYrgG9brji1XOAt3kfXo4S%2Bok4tqhFep7%2FxarvdDuZqmkv6aj9pDsy9lXC7qv%2BgGum3enP6Q7Jr4WN4GENS9WbiCeDEDp56MXLzwC57Y0nohnVLqSBW1hPxhXL1wIKgSAXpWM0S&X-Amz-Signature=c5aecb3949e6623cb53d5a4c356f1bbb879b2fbfea4ffa92243398fcebf1cc38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LL7FKE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBQPO71pqTr4xPU6nanCHikZuNU28k1ydq8lJ63SmAv3AiEAtLr4SjbaV9IDLRZ9GS%2BRV0TRMhAQmAqgoxo%2Fs48nx%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDA5snoNk9QzNnZg4aCrcA8ZBKRquolCnQtLYDaRxU1RZG2ME4MbaaA1%2FKa7ZYY23bO5vbyJlh9ZeKI4XMlJpCP9iWpc8TTXXneLVxoQrl2fv5B5bR6TzepRfR1Vm4MxRTvf6XA%2FfpkW3afjTrPhpQZdD0FlBq2x3DazLpNkX1cpj%2FGWgYAJPXnB22VYBwq3SpntKXCkvwMrK4SStiYAQOCW2LRbU56AeLpaWNhiV0TkjlgRSwygCMXJM51%2FKNBkWybAZCzb5tTRckm%2FiRTJ6du%2BIGb9UCERIA%2F39rS9m3dDI4i3LnOJUhuvaGI51hKVQZvjL7r%2FSPKq7j5hjAxxL9PWvvQC6DOJp2suFg2BLq6RQjDmZJ2N1%2FMBidlLgc7Qykic1YoZmOgZYiSsTnH1xU5x83kv%2BVG0QjlWKb6ESRuHfj7bsQzBx9WDZqCsPNd3A5ZliC303fh71nKPVN2uCyutHKCpvgmnIyJZz1qKF8LklI21D8E09LUzShfv6gPeY9ot0Eou6CyHOF53gslkL%2BkHB%2ByOChFK9F0L5KUlglY%2BdeQVVhpNGUKc%2B8imDPXd1qjXP7jssQ2ENejfbsTfA4jG%2BroJjktLAwuxa1CF%2F3a3MdBM9OHwmTcfkE%2FHo54S0semH5nU9ZRaFQ23dMLvgr74GOqUBihKOgd1DfDRh9ka7TXQCies9wJjsL7dl0nMpw3KYj20bciMbBJFpIqzjHtNOeBQkxhXwpAFdJj12ojZYlpQ%2FNvYrgG9brji1XOAt3kfXo4S%2Bok4tqhFep7%2FxarvdDuZqmkv6aj9pDsy9lXC7qv%2BgGum3enP6Q7Jr4WN4GENS9WbiCeDEDp56MXLzwC57Y0nohnVLqSBW1hPxhXL1wIKgSAXpWM0S&X-Amz-Signature=93415ed75c5973de6bcc7f8c778ccb500e7d06b45f242feaa29269cae41e9512&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LL7FKE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIBQPO71pqTr4xPU6nanCHikZuNU28k1ydq8lJ63SmAv3AiEAtLr4SjbaV9IDLRZ9GS%2BRV0TRMhAQmAqgoxo%2Fs48nx%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDA5snoNk9QzNnZg4aCrcA8ZBKRquolCnQtLYDaRxU1RZG2ME4MbaaA1%2FKa7ZYY23bO5vbyJlh9ZeKI4XMlJpCP9iWpc8TTXXneLVxoQrl2fv5B5bR6TzepRfR1Vm4MxRTvf6XA%2FfpkW3afjTrPhpQZdD0FlBq2x3DazLpNkX1cpj%2FGWgYAJPXnB22VYBwq3SpntKXCkvwMrK4SStiYAQOCW2LRbU56AeLpaWNhiV0TkjlgRSwygCMXJM51%2FKNBkWybAZCzb5tTRckm%2FiRTJ6du%2BIGb9UCERIA%2F39rS9m3dDI4i3LnOJUhuvaGI51hKVQZvjL7r%2FSPKq7j5hjAxxL9PWvvQC6DOJp2suFg2BLq6RQjDmZJ2N1%2FMBidlLgc7Qykic1YoZmOgZYiSsTnH1xU5x83kv%2BVG0QjlWKb6ESRuHfj7bsQzBx9WDZqCsPNd3A5ZliC303fh71nKPVN2uCyutHKCpvgmnIyJZz1qKF8LklI21D8E09LUzShfv6gPeY9ot0Eou6CyHOF53gslkL%2BkHB%2ByOChFK9F0L5KUlglY%2BdeQVVhpNGUKc%2B8imDPXd1qjXP7jssQ2ENejfbsTfA4jG%2BroJjktLAwuxa1CF%2F3a3MdBM9OHwmTcfkE%2FHo54S0semH5nU9ZRaFQ23dMLvgr74GOqUBihKOgd1DfDRh9ka7TXQCies9wJjsL7dl0nMpw3KYj20bciMbBJFpIqzjHtNOeBQkxhXwpAFdJj12ojZYlpQ%2FNvYrgG9brji1XOAt3kfXo4S%2Bok4tqhFep7%2FxarvdDuZqmkv6aj9pDsy9lXC7qv%2BgGum3enP6Q7Jr4WN4GENS9WbiCeDEDp56MXLzwC57Y0nohnVLqSBW1hPxhXL1wIKgSAXpWM0S&X-Amz-Signature=803bd93f476d106d95b72177153b17a631001bcfa1759e362d5292cee57d566e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
