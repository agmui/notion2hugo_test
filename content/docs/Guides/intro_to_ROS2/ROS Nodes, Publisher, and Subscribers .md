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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHJMAQS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMh59KtjfoSslWNwEh3AB9LYeti41llybMJVrV3DlBzAiAeax00UJ97%2F1Q%2BNxcujUggO4NSdirv8mqugnFN8KRMjCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMtIOzrpRm9HzLWYA7KtwDBvVLNvGMMMhsVCY1ASGWYpttiCG0xOaO9uABtSnUPNjMPrjMb%2B%2FshXgfkyNmb2vuz%2Fnrv5zibqcIxbY2SStdaOxESMMA7nsnxvkAczlsljs9wMZJnivm4d%2BPwSRMPf%2F5eYooSnmIuPtpF7RbhOwhi5hiL%2F%2FxQFXagOufKRVcKIxNsMIL8apqr3thIRE6hH3eFQGmqGsEUpFAPrJX%2F07HYb748X%2BzcmuoCEgsdauHTruHESWCO9jfgoJFKDoWG5BleO%2Fyrbt5%2F7mAS0NJrru%2BiTWiEBAiOk6jeopDXpcO1ocHU%2BLMyhQ9tzvALN%2BXtXrwYqK003TZHB8Sv2gcaCn0lAjgG9axwvWXFAM77b1OtSIQKR%2BxvlenF2FDurawxnUNCfL24IgDSkoxNL2FIt48rMpsWIFUGZX%2BRgq0lx4metQpZC%2Bpbb%2Bb7CWrtZPxIAqwyabHQIfmc6IBUcFM65Khiq3k%2FabtJMp0iSu9QkjVpxKjDNyYn72Ncr2DS8Rd2LeaJxxb3WenxDAtqwu%2FoGJDa1P9rWCrukPw9ac1%2FgRPoWtyCPuKf8BnzFMOUWwDGH8H4QgKmUjLzExS%2FkAxkvB1EijMwSFPcjTtIHzCrsDqN9hTENvxAiuin3RxkIsw%2BsrlwAY6pgHgZRkq8JIaXiNQBcE6NLGhU4bCPMs1JZFBPTLK1zsK3%2BetAUko4YJWlmdL6rCv%2F6d20Dj4fpePQp3hq2EOEF2WknlnNKH5n2cW1hm8dKMoidqsf6%2BvQGX%2BJvmaRnu991cqmekX9ej5pGTNB%2BTjOlp%2Bo5xX668PnxxK5afxFRt96e9NdaNCKXf0g8%2BGhmlgkOvEr8SKPr%2F5TbjVW80Es9s5t9tjb2h3&X-Amz-Signature=7b9baa9d4f03785d547e8f94a591eeb571d709e04cd474f38463d731d011fc4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHJMAQS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMh59KtjfoSslWNwEh3AB9LYeti41llybMJVrV3DlBzAiAeax00UJ97%2F1Q%2BNxcujUggO4NSdirv8mqugnFN8KRMjCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMtIOzrpRm9HzLWYA7KtwDBvVLNvGMMMhsVCY1ASGWYpttiCG0xOaO9uABtSnUPNjMPrjMb%2B%2FshXgfkyNmb2vuz%2Fnrv5zibqcIxbY2SStdaOxESMMA7nsnxvkAczlsljs9wMZJnivm4d%2BPwSRMPf%2F5eYooSnmIuPtpF7RbhOwhi5hiL%2F%2FxQFXagOufKRVcKIxNsMIL8apqr3thIRE6hH3eFQGmqGsEUpFAPrJX%2F07HYb748X%2BzcmuoCEgsdauHTruHESWCO9jfgoJFKDoWG5BleO%2Fyrbt5%2F7mAS0NJrru%2BiTWiEBAiOk6jeopDXpcO1ocHU%2BLMyhQ9tzvALN%2BXtXrwYqK003TZHB8Sv2gcaCn0lAjgG9axwvWXFAM77b1OtSIQKR%2BxvlenF2FDurawxnUNCfL24IgDSkoxNL2FIt48rMpsWIFUGZX%2BRgq0lx4metQpZC%2Bpbb%2Bb7CWrtZPxIAqwyabHQIfmc6IBUcFM65Khiq3k%2FabtJMp0iSu9QkjVpxKjDNyYn72Ncr2DS8Rd2LeaJxxb3WenxDAtqwu%2FoGJDa1P9rWCrukPw9ac1%2FgRPoWtyCPuKf8BnzFMOUWwDGH8H4QgKmUjLzExS%2FkAxkvB1EijMwSFPcjTtIHzCrsDqN9hTENvxAiuin3RxkIsw%2BsrlwAY6pgHgZRkq8JIaXiNQBcE6NLGhU4bCPMs1JZFBPTLK1zsK3%2BetAUko4YJWlmdL6rCv%2F6d20Dj4fpePQp3hq2EOEF2WknlnNKH5n2cW1hm8dKMoidqsf6%2BvQGX%2BJvmaRnu991cqmekX9ej5pGTNB%2BTjOlp%2Bo5xX668PnxxK5afxFRt96e9NdaNCKXf0g8%2BGhmlgkOvEr8SKPr%2F5TbjVW80Es9s5t9tjb2h3&X-Amz-Signature=b9bc751e998d1e2a98999b80d843ed69c0168feb16af82e51dd5cd492002c3f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHJMAQS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMh59KtjfoSslWNwEh3AB9LYeti41llybMJVrV3DlBzAiAeax00UJ97%2F1Q%2BNxcujUggO4NSdirv8mqugnFN8KRMjCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMtIOzrpRm9HzLWYA7KtwDBvVLNvGMMMhsVCY1ASGWYpttiCG0xOaO9uABtSnUPNjMPrjMb%2B%2FshXgfkyNmb2vuz%2Fnrv5zibqcIxbY2SStdaOxESMMA7nsnxvkAczlsljs9wMZJnivm4d%2BPwSRMPf%2F5eYooSnmIuPtpF7RbhOwhi5hiL%2F%2FxQFXagOufKRVcKIxNsMIL8apqr3thIRE6hH3eFQGmqGsEUpFAPrJX%2F07HYb748X%2BzcmuoCEgsdauHTruHESWCO9jfgoJFKDoWG5BleO%2Fyrbt5%2F7mAS0NJrru%2BiTWiEBAiOk6jeopDXpcO1ocHU%2BLMyhQ9tzvALN%2BXtXrwYqK003TZHB8Sv2gcaCn0lAjgG9axwvWXFAM77b1OtSIQKR%2BxvlenF2FDurawxnUNCfL24IgDSkoxNL2FIt48rMpsWIFUGZX%2BRgq0lx4metQpZC%2Bpbb%2Bb7CWrtZPxIAqwyabHQIfmc6IBUcFM65Khiq3k%2FabtJMp0iSu9QkjVpxKjDNyYn72Ncr2DS8Rd2LeaJxxb3WenxDAtqwu%2FoGJDa1P9rWCrukPw9ac1%2FgRPoWtyCPuKf8BnzFMOUWwDGH8H4QgKmUjLzExS%2FkAxkvB1EijMwSFPcjTtIHzCrsDqN9hTENvxAiuin3RxkIsw%2BsrlwAY6pgHgZRkq8JIaXiNQBcE6NLGhU4bCPMs1JZFBPTLK1zsK3%2BetAUko4YJWlmdL6rCv%2F6d20Dj4fpePQp3hq2EOEF2WknlnNKH5n2cW1hm8dKMoidqsf6%2BvQGX%2BJvmaRnu991cqmekX9ej5pGTNB%2BTjOlp%2Bo5xX668PnxxK5afxFRt96e9NdaNCKXf0g8%2BGhmlgkOvEr8SKPr%2F5TbjVW80Es9s5t9tjb2h3&X-Amz-Signature=45a54504ff0aa14a91519bf2d9353c3a8d26d70f4f7695a6e73a69947aa27343&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHJMAQS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMh59KtjfoSslWNwEh3AB9LYeti41llybMJVrV3DlBzAiAeax00UJ97%2F1Q%2BNxcujUggO4NSdirv8mqugnFN8KRMjCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMtIOzrpRm9HzLWYA7KtwDBvVLNvGMMMhsVCY1ASGWYpttiCG0xOaO9uABtSnUPNjMPrjMb%2B%2FshXgfkyNmb2vuz%2Fnrv5zibqcIxbY2SStdaOxESMMA7nsnxvkAczlsljs9wMZJnivm4d%2BPwSRMPf%2F5eYooSnmIuPtpF7RbhOwhi5hiL%2F%2FxQFXagOufKRVcKIxNsMIL8apqr3thIRE6hH3eFQGmqGsEUpFAPrJX%2F07HYb748X%2BzcmuoCEgsdauHTruHESWCO9jfgoJFKDoWG5BleO%2Fyrbt5%2F7mAS0NJrru%2BiTWiEBAiOk6jeopDXpcO1ocHU%2BLMyhQ9tzvALN%2BXtXrwYqK003TZHB8Sv2gcaCn0lAjgG9axwvWXFAM77b1OtSIQKR%2BxvlenF2FDurawxnUNCfL24IgDSkoxNL2FIt48rMpsWIFUGZX%2BRgq0lx4metQpZC%2Bpbb%2Bb7CWrtZPxIAqwyabHQIfmc6IBUcFM65Khiq3k%2FabtJMp0iSu9QkjVpxKjDNyYn72Ncr2DS8Rd2LeaJxxb3WenxDAtqwu%2FoGJDa1P9rWCrukPw9ac1%2FgRPoWtyCPuKf8BnzFMOUWwDGH8H4QgKmUjLzExS%2FkAxkvB1EijMwSFPcjTtIHzCrsDqN9hTENvxAiuin3RxkIsw%2BsrlwAY6pgHgZRkq8JIaXiNQBcE6NLGhU4bCPMs1JZFBPTLK1zsK3%2BetAUko4YJWlmdL6rCv%2F6d20Dj4fpePQp3hq2EOEF2WknlnNKH5n2cW1hm8dKMoidqsf6%2BvQGX%2BJvmaRnu991cqmekX9ej5pGTNB%2BTjOlp%2Bo5xX668PnxxK5afxFRt96e9NdaNCKXf0g8%2BGhmlgkOvEr8SKPr%2F5TbjVW80Es9s5t9tjb2h3&X-Amz-Signature=3713a67009a4a2188b7dfa978ebcf2e81dc9921af12d3c7ab0fec88209abf5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHJMAQS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMh59KtjfoSslWNwEh3AB9LYeti41llybMJVrV3DlBzAiAeax00UJ97%2F1Q%2BNxcujUggO4NSdirv8mqugnFN8KRMjCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMtIOzrpRm9HzLWYA7KtwDBvVLNvGMMMhsVCY1ASGWYpttiCG0xOaO9uABtSnUPNjMPrjMb%2B%2FshXgfkyNmb2vuz%2Fnrv5zibqcIxbY2SStdaOxESMMA7nsnxvkAczlsljs9wMZJnivm4d%2BPwSRMPf%2F5eYooSnmIuPtpF7RbhOwhi5hiL%2F%2FxQFXagOufKRVcKIxNsMIL8apqr3thIRE6hH3eFQGmqGsEUpFAPrJX%2F07HYb748X%2BzcmuoCEgsdauHTruHESWCO9jfgoJFKDoWG5BleO%2Fyrbt5%2F7mAS0NJrru%2BiTWiEBAiOk6jeopDXpcO1ocHU%2BLMyhQ9tzvALN%2BXtXrwYqK003TZHB8Sv2gcaCn0lAjgG9axwvWXFAM77b1OtSIQKR%2BxvlenF2FDurawxnUNCfL24IgDSkoxNL2FIt48rMpsWIFUGZX%2BRgq0lx4metQpZC%2Bpbb%2Bb7CWrtZPxIAqwyabHQIfmc6IBUcFM65Khiq3k%2FabtJMp0iSu9QkjVpxKjDNyYn72Ncr2DS8Rd2LeaJxxb3WenxDAtqwu%2FoGJDa1P9rWCrukPw9ac1%2FgRPoWtyCPuKf8BnzFMOUWwDGH8H4QgKmUjLzExS%2FkAxkvB1EijMwSFPcjTtIHzCrsDqN9hTENvxAiuin3RxkIsw%2BsrlwAY6pgHgZRkq8JIaXiNQBcE6NLGhU4bCPMs1JZFBPTLK1zsK3%2BetAUko4YJWlmdL6rCv%2F6d20Dj4fpePQp3hq2EOEF2WknlnNKH5n2cW1hm8dKMoidqsf6%2BvQGX%2BJvmaRnu991cqmekX9ej5pGTNB%2BTjOlp%2Bo5xX668PnxxK5afxFRt96e9NdaNCKXf0g8%2BGhmlgkOvEr8SKPr%2F5TbjVW80Es9s5t9tjb2h3&X-Amz-Signature=78dab3e56141c04f1e10e3e2a59d47bd8b18142904c06bc0f78d4074a2ec8589&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHJMAQS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMh59KtjfoSslWNwEh3AB9LYeti41llybMJVrV3DlBzAiAeax00UJ97%2F1Q%2BNxcujUggO4NSdirv8mqugnFN8KRMjCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMtIOzrpRm9HzLWYA7KtwDBvVLNvGMMMhsVCY1ASGWYpttiCG0xOaO9uABtSnUPNjMPrjMb%2B%2FshXgfkyNmb2vuz%2Fnrv5zibqcIxbY2SStdaOxESMMA7nsnxvkAczlsljs9wMZJnivm4d%2BPwSRMPf%2F5eYooSnmIuPtpF7RbhOwhi5hiL%2F%2FxQFXagOufKRVcKIxNsMIL8apqr3thIRE6hH3eFQGmqGsEUpFAPrJX%2F07HYb748X%2BzcmuoCEgsdauHTruHESWCO9jfgoJFKDoWG5BleO%2Fyrbt5%2F7mAS0NJrru%2BiTWiEBAiOk6jeopDXpcO1ocHU%2BLMyhQ9tzvALN%2BXtXrwYqK003TZHB8Sv2gcaCn0lAjgG9axwvWXFAM77b1OtSIQKR%2BxvlenF2FDurawxnUNCfL24IgDSkoxNL2FIt48rMpsWIFUGZX%2BRgq0lx4metQpZC%2Bpbb%2Bb7CWrtZPxIAqwyabHQIfmc6IBUcFM65Khiq3k%2FabtJMp0iSu9QkjVpxKjDNyYn72Ncr2DS8Rd2LeaJxxb3WenxDAtqwu%2FoGJDa1P9rWCrukPw9ac1%2FgRPoWtyCPuKf8BnzFMOUWwDGH8H4QgKmUjLzExS%2FkAxkvB1EijMwSFPcjTtIHzCrsDqN9hTENvxAiuin3RxkIsw%2BsrlwAY6pgHgZRkq8JIaXiNQBcE6NLGhU4bCPMs1JZFBPTLK1zsK3%2BetAUko4YJWlmdL6rCv%2F6d20Dj4fpePQp3hq2EOEF2WknlnNKH5n2cW1hm8dKMoidqsf6%2BvQGX%2BJvmaRnu991cqmekX9ej5pGTNB%2BTjOlp%2Bo5xX668PnxxK5afxFRt96e9NdaNCKXf0g8%2BGhmlgkOvEr8SKPr%2F5TbjVW80Es9s5t9tjb2h3&X-Amz-Signature=05ff9edd003db64b652d45c0b65a8f76a262c5e68e34a5a1a57fe4f70d8ea004&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHJMAQS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMh59KtjfoSslWNwEh3AB9LYeti41llybMJVrV3DlBzAiAeax00UJ97%2F1Q%2BNxcujUggO4NSdirv8mqugnFN8KRMjCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMtIOzrpRm9HzLWYA7KtwDBvVLNvGMMMhsVCY1ASGWYpttiCG0xOaO9uABtSnUPNjMPrjMb%2B%2FshXgfkyNmb2vuz%2Fnrv5zibqcIxbY2SStdaOxESMMA7nsnxvkAczlsljs9wMZJnivm4d%2BPwSRMPf%2F5eYooSnmIuPtpF7RbhOwhi5hiL%2F%2FxQFXagOufKRVcKIxNsMIL8apqr3thIRE6hH3eFQGmqGsEUpFAPrJX%2F07HYb748X%2BzcmuoCEgsdauHTruHESWCO9jfgoJFKDoWG5BleO%2Fyrbt5%2F7mAS0NJrru%2BiTWiEBAiOk6jeopDXpcO1ocHU%2BLMyhQ9tzvALN%2BXtXrwYqK003TZHB8Sv2gcaCn0lAjgG9axwvWXFAM77b1OtSIQKR%2BxvlenF2FDurawxnUNCfL24IgDSkoxNL2FIt48rMpsWIFUGZX%2BRgq0lx4metQpZC%2Bpbb%2Bb7CWrtZPxIAqwyabHQIfmc6IBUcFM65Khiq3k%2FabtJMp0iSu9QkjVpxKjDNyYn72Ncr2DS8Rd2LeaJxxb3WenxDAtqwu%2FoGJDa1P9rWCrukPw9ac1%2FgRPoWtyCPuKf8BnzFMOUWwDGH8H4QgKmUjLzExS%2FkAxkvB1EijMwSFPcjTtIHzCrsDqN9hTENvxAiuin3RxkIsw%2BsrlwAY6pgHgZRkq8JIaXiNQBcE6NLGhU4bCPMs1JZFBPTLK1zsK3%2BetAUko4YJWlmdL6rCv%2F6d20Dj4fpePQp3hq2EOEF2WknlnNKH5n2cW1hm8dKMoidqsf6%2BvQGX%2BJvmaRnu991cqmekX9ej5pGTNB%2BTjOlp%2Bo5xX668PnxxK5afxFRt96e9NdaNCKXf0g8%2BGhmlgkOvEr8SKPr%2F5TbjVW80Es9s5t9tjb2h3&X-Amz-Signature=932cf22820776fdb48d5432a0736d17d6fe9ca877029495e7c97b08235485bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHJMAQS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMh59KtjfoSslWNwEh3AB9LYeti41llybMJVrV3DlBzAiAeax00UJ97%2F1Q%2BNxcujUggO4NSdirv8mqugnFN8KRMjCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMtIOzrpRm9HzLWYA7KtwDBvVLNvGMMMhsVCY1ASGWYpttiCG0xOaO9uABtSnUPNjMPrjMb%2B%2FshXgfkyNmb2vuz%2Fnrv5zibqcIxbY2SStdaOxESMMA7nsnxvkAczlsljs9wMZJnivm4d%2BPwSRMPf%2F5eYooSnmIuPtpF7RbhOwhi5hiL%2F%2FxQFXagOufKRVcKIxNsMIL8apqr3thIRE6hH3eFQGmqGsEUpFAPrJX%2F07HYb748X%2BzcmuoCEgsdauHTruHESWCO9jfgoJFKDoWG5BleO%2Fyrbt5%2F7mAS0NJrru%2BiTWiEBAiOk6jeopDXpcO1ocHU%2BLMyhQ9tzvALN%2BXtXrwYqK003TZHB8Sv2gcaCn0lAjgG9axwvWXFAM77b1OtSIQKR%2BxvlenF2FDurawxnUNCfL24IgDSkoxNL2FIt48rMpsWIFUGZX%2BRgq0lx4metQpZC%2Bpbb%2Bb7CWrtZPxIAqwyabHQIfmc6IBUcFM65Khiq3k%2FabtJMp0iSu9QkjVpxKjDNyYn72Ncr2DS8Rd2LeaJxxb3WenxDAtqwu%2FoGJDa1P9rWCrukPw9ac1%2FgRPoWtyCPuKf8BnzFMOUWwDGH8H4QgKmUjLzExS%2FkAxkvB1EijMwSFPcjTtIHzCrsDqN9hTENvxAiuin3RxkIsw%2BsrlwAY6pgHgZRkq8JIaXiNQBcE6NLGhU4bCPMs1JZFBPTLK1zsK3%2BetAUko4YJWlmdL6rCv%2F6d20Dj4fpePQp3hq2EOEF2WknlnNKH5n2cW1hm8dKMoidqsf6%2BvQGX%2BJvmaRnu991cqmekX9ej5pGTNB%2BTjOlp%2Bo5xX668PnxxK5afxFRt96e9NdaNCKXf0g8%2BGhmlgkOvEr8SKPr%2F5TbjVW80Es9s5t9tjb2h3&X-Amz-Signature=d73c4f025d44d7d60e16ff049138c2d8a95f96d92881cb9586009d73f9a58fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
