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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTA5JB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICdoqxxwvl%2FHZaMvMyoyPZ9ZI%2BVKd5PM0jiAQZJJxCCKAiEA3lvGSLjJIuP743DKmKKqcDPp2sZO8I4QwWQ8IbhnP5Aq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA1p95HGzlmveudIFircA3YqblucDjWN154VgpLMvGRluCMZjEQ3FBsbxU9VWoR7yumYCrMCJuifD1WXahlJWDHbhyxZOp30gNvlnPJxRmHQWuZ0%2B75gRvUmGplERZPZ6F9Z0Jlj5%2BBhPOIWwzWIfTKBzuCzTl0kp21koyEOZuPWJa9QSGrel3qwo6GQ%2FkpZkiWpylaSnnQsXUBvQ0iDM4XODwTi8a7ylRfO%2B%2BbBgIY%2BQx1jAA%2FONw%2Blu0DiHPB0QHjEPtuiIuWAT1AYpBkgONb3OXvJCpays8WTncdQz46CiqV3iYOqpIfxMrDbpt2jkRgwGUHJp%2BjDzSB2vyCMiQ%2BaWjyh7msLNZ1cpWgk4gTzqWe3capCWKKcWeGK4jJoKcL%2BQYHV6TQA8RVrME42CGRauMACS4jMzxh40h3w9e1%2FmZ9JG8RoCpggiYkcwiC2qAYFb5YVr1nvkC0m2RE4EdLaUpOzaxiFVXgg9MAYSYFGMkyvmpcp3p6qGU2pz2a9MicNSgGSCSAgjPFun%2BGiNiE9ELueMZ434PWy525tjSLZ4c2eqSpWYB4y1rAh010p%2BTCEiTQrH7zNKWw2iDaOwPEynFqkhs1ecbyE1KjocVJHgG3IO9TMllpMBWf0raKr%2B69jCvkmrUq6trROMJSfiL0GOqUBytEZjw77F%2BRx1xmONe3r%2B%2B8UgQtx%2BCUSg0MpuzcywM73s8ch9ryp7BsOSTvjsb1QvUqxOUdC54K%2BE7YeR2YS2mwyB6K%2FbLc13gAloBipR%2F2556Zy1yB%2BwgctW5K1gnwCSEXZY8A7R0ZqiydAu4T210Sk2vDcIjK26QpOSgx6BgofzqCGX92VtFTBFkK3C3b4TotGHwRkVKB6y5VEY%2FHKt0grYyWi&X-Amz-Signature=20b022ce1a89db733d8e1fcd9f9e5924157996891344b95d53ec6d3c70e4a828&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTA5JB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICdoqxxwvl%2FHZaMvMyoyPZ9ZI%2BVKd5PM0jiAQZJJxCCKAiEA3lvGSLjJIuP743DKmKKqcDPp2sZO8I4QwWQ8IbhnP5Aq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA1p95HGzlmveudIFircA3YqblucDjWN154VgpLMvGRluCMZjEQ3FBsbxU9VWoR7yumYCrMCJuifD1WXahlJWDHbhyxZOp30gNvlnPJxRmHQWuZ0%2B75gRvUmGplERZPZ6F9Z0Jlj5%2BBhPOIWwzWIfTKBzuCzTl0kp21koyEOZuPWJa9QSGrel3qwo6GQ%2FkpZkiWpylaSnnQsXUBvQ0iDM4XODwTi8a7ylRfO%2B%2BbBgIY%2BQx1jAA%2FONw%2Blu0DiHPB0QHjEPtuiIuWAT1AYpBkgONb3OXvJCpays8WTncdQz46CiqV3iYOqpIfxMrDbpt2jkRgwGUHJp%2BjDzSB2vyCMiQ%2BaWjyh7msLNZ1cpWgk4gTzqWe3capCWKKcWeGK4jJoKcL%2BQYHV6TQA8RVrME42CGRauMACS4jMzxh40h3w9e1%2FmZ9JG8RoCpggiYkcwiC2qAYFb5YVr1nvkC0m2RE4EdLaUpOzaxiFVXgg9MAYSYFGMkyvmpcp3p6qGU2pz2a9MicNSgGSCSAgjPFun%2BGiNiE9ELueMZ434PWy525tjSLZ4c2eqSpWYB4y1rAh010p%2BTCEiTQrH7zNKWw2iDaOwPEynFqkhs1ecbyE1KjocVJHgG3IO9TMllpMBWf0raKr%2B69jCvkmrUq6trROMJSfiL0GOqUBytEZjw77F%2BRx1xmONe3r%2B%2B8UgQtx%2BCUSg0MpuzcywM73s8ch9ryp7BsOSTvjsb1QvUqxOUdC54K%2BE7YeR2YS2mwyB6K%2FbLc13gAloBipR%2F2556Zy1yB%2BwgctW5K1gnwCSEXZY8A7R0ZqiydAu4T210Sk2vDcIjK26QpOSgx6BgofzqCGX92VtFTBFkK3C3b4TotGHwRkVKB6y5VEY%2FHKt0grYyWi&X-Amz-Signature=a344c1983ab77a0397863cc596158ff991cf121b19447da75cabe371458df31d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTA5JB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICdoqxxwvl%2FHZaMvMyoyPZ9ZI%2BVKd5PM0jiAQZJJxCCKAiEA3lvGSLjJIuP743DKmKKqcDPp2sZO8I4QwWQ8IbhnP5Aq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA1p95HGzlmveudIFircA3YqblucDjWN154VgpLMvGRluCMZjEQ3FBsbxU9VWoR7yumYCrMCJuifD1WXahlJWDHbhyxZOp30gNvlnPJxRmHQWuZ0%2B75gRvUmGplERZPZ6F9Z0Jlj5%2BBhPOIWwzWIfTKBzuCzTl0kp21koyEOZuPWJa9QSGrel3qwo6GQ%2FkpZkiWpylaSnnQsXUBvQ0iDM4XODwTi8a7ylRfO%2B%2BbBgIY%2BQx1jAA%2FONw%2Blu0DiHPB0QHjEPtuiIuWAT1AYpBkgONb3OXvJCpays8WTncdQz46CiqV3iYOqpIfxMrDbpt2jkRgwGUHJp%2BjDzSB2vyCMiQ%2BaWjyh7msLNZ1cpWgk4gTzqWe3capCWKKcWeGK4jJoKcL%2BQYHV6TQA8RVrME42CGRauMACS4jMzxh40h3w9e1%2FmZ9JG8RoCpggiYkcwiC2qAYFb5YVr1nvkC0m2RE4EdLaUpOzaxiFVXgg9MAYSYFGMkyvmpcp3p6qGU2pz2a9MicNSgGSCSAgjPFun%2BGiNiE9ELueMZ434PWy525tjSLZ4c2eqSpWYB4y1rAh010p%2BTCEiTQrH7zNKWw2iDaOwPEynFqkhs1ecbyE1KjocVJHgG3IO9TMllpMBWf0raKr%2B69jCvkmrUq6trROMJSfiL0GOqUBytEZjw77F%2BRx1xmONe3r%2B%2B8UgQtx%2BCUSg0MpuzcywM73s8ch9ryp7BsOSTvjsb1QvUqxOUdC54K%2BE7YeR2YS2mwyB6K%2FbLc13gAloBipR%2F2556Zy1yB%2BwgctW5K1gnwCSEXZY8A7R0ZqiydAu4T210Sk2vDcIjK26QpOSgx6BgofzqCGX92VtFTBFkK3C3b4TotGHwRkVKB6y5VEY%2FHKt0grYyWi&X-Amz-Signature=09df9468c1406c927c18e9e87d66533f6a9793918a31c36d5a55143cec3c737b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTA5JB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICdoqxxwvl%2FHZaMvMyoyPZ9ZI%2BVKd5PM0jiAQZJJxCCKAiEA3lvGSLjJIuP743DKmKKqcDPp2sZO8I4QwWQ8IbhnP5Aq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA1p95HGzlmveudIFircA3YqblucDjWN154VgpLMvGRluCMZjEQ3FBsbxU9VWoR7yumYCrMCJuifD1WXahlJWDHbhyxZOp30gNvlnPJxRmHQWuZ0%2B75gRvUmGplERZPZ6F9Z0Jlj5%2BBhPOIWwzWIfTKBzuCzTl0kp21koyEOZuPWJa9QSGrel3qwo6GQ%2FkpZkiWpylaSnnQsXUBvQ0iDM4XODwTi8a7ylRfO%2B%2BbBgIY%2BQx1jAA%2FONw%2Blu0DiHPB0QHjEPtuiIuWAT1AYpBkgONb3OXvJCpays8WTncdQz46CiqV3iYOqpIfxMrDbpt2jkRgwGUHJp%2BjDzSB2vyCMiQ%2BaWjyh7msLNZ1cpWgk4gTzqWe3capCWKKcWeGK4jJoKcL%2BQYHV6TQA8RVrME42CGRauMACS4jMzxh40h3w9e1%2FmZ9JG8RoCpggiYkcwiC2qAYFb5YVr1nvkC0m2RE4EdLaUpOzaxiFVXgg9MAYSYFGMkyvmpcp3p6qGU2pz2a9MicNSgGSCSAgjPFun%2BGiNiE9ELueMZ434PWy525tjSLZ4c2eqSpWYB4y1rAh010p%2BTCEiTQrH7zNKWw2iDaOwPEynFqkhs1ecbyE1KjocVJHgG3IO9TMllpMBWf0raKr%2B69jCvkmrUq6trROMJSfiL0GOqUBytEZjw77F%2BRx1xmONe3r%2B%2B8UgQtx%2BCUSg0MpuzcywM73s8ch9ryp7BsOSTvjsb1QvUqxOUdC54K%2BE7YeR2YS2mwyB6K%2FbLc13gAloBipR%2F2556Zy1yB%2BwgctW5K1gnwCSEXZY8A7R0ZqiydAu4T210Sk2vDcIjK26QpOSgx6BgofzqCGX92VtFTBFkK3C3b4TotGHwRkVKB6y5VEY%2FHKt0grYyWi&X-Amz-Signature=f4f33ba71e3ab0b52cd936e8e69898675ee09169868f95b1262e8255de5d33fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTA5JB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICdoqxxwvl%2FHZaMvMyoyPZ9ZI%2BVKd5PM0jiAQZJJxCCKAiEA3lvGSLjJIuP743DKmKKqcDPp2sZO8I4QwWQ8IbhnP5Aq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA1p95HGzlmveudIFircA3YqblucDjWN154VgpLMvGRluCMZjEQ3FBsbxU9VWoR7yumYCrMCJuifD1WXahlJWDHbhyxZOp30gNvlnPJxRmHQWuZ0%2B75gRvUmGplERZPZ6F9Z0Jlj5%2BBhPOIWwzWIfTKBzuCzTl0kp21koyEOZuPWJa9QSGrel3qwo6GQ%2FkpZkiWpylaSnnQsXUBvQ0iDM4XODwTi8a7ylRfO%2B%2BbBgIY%2BQx1jAA%2FONw%2Blu0DiHPB0QHjEPtuiIuWAT1AYpBkgONb3OXvJCpays8WTncdQz46CiqV3iYOqpIfxMrDbpt2jkRgwGUHJp%2BjDzSB2vyCMiQ%2BaWjyh7msLNZ1cpWgk4gTzqWe3capCWKKcWeGK4jJoKcL%2BQYHV6TQA8RVrME42CGRauMACS4jMzxh40h3w9e1%2FmZ9JG8RoCpggiYkcwiC2qAYFb5YVr1nvkC0m2RE4EdLaUpOzaxiFVXgg9MAYSYFGMkyvmpcp3p6qGU2pz2a9MicNSgGSCSAgjPFun%2BGiNiE9ELueMZ434PWy525tjSLZ4c2eqSpWYB4y1rAh010p%2BTCEiTQrH7zNKWw2iDaOwPEynFqkhs1ecbyE1KjocVJHgG3IO9TMllpMBWf0raKr%2B69jCvkmrUq6trROMJSfiL0GOqUBytEZjw77F%2BRx1xmONe3r%2B%2B8UgQtx%2BCUSg0MpuzcywM73s8ch9ryp7BsOSTvjsb1QvUqxOUdC54K%2BE7YeR2YS2mwyB6K%2FbLc13gAloBipR%2F2556Zy1yB%2BwgctW5K1gnwCSEXZY8A7R0ZqiydAu4T210Sk2vDcIjK26QpOSgx6BgofzqCGX92VtFTBFkK3C3b4TotGHwRkVKB6y5VEY%2FHKt0grYyWi&X-Amz-Signature=eed714141706076f3a099fd188caa011d606741cb441a56bf2355bdf0c863ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTA5JB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICdoqxxwvl%2FHZaMvMyoyPZ9ZI%2BVKd5PM0jiAQZJJxCCKAiEA3lvGSLjJIuP743DKmKKqcDPp2sZO8I4QwWQ8IbhnP5Aq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA1p95HGzlmveudIFircA3YqblucDjWN154VgpLMvGRluCMZjEQ3FBsbxU9VWoR7yumYCrMCJuifD1WXahlJWDHbhyxZOp30gNvlnPJxRmHQWuZ0%2B75gRvUmGplERZPZ6F9Z0Jlj5%2BBhPOIWwzWIfTKBzuCzTl0kp21koyEOZuPWJa9QSGrel3qwo6GQ%2FkpZkiWpylaSnnQsXUBvQ0iDM4XODwTi8a7ylRfO%2B%2BbBgIY%2BQx1jAA%2FONw%2Blu0DiHPB0QHjEPtuiIuWAT1AYpBkgONb3OXvJCpays8WTncdQz46CiqV3iYOqpIfxMrDbpt2jkRgwGUHJp%2BjDzSB2vyCMiQ%2BaWjyh7msLNZ1cpWgk4gTzqWe3capCWKKcWeGK4jJoKcL%2BQYHV6TQA8RVrME42CGRauMACS4jMzxh40h3w9e1%2FmZ9JG8RoCpggiYkcwiC2qAYFb5YVr1nvkC0m2RE4EdLaUpOzaxiFVXgg9MAYSYFGMkyvmpcp3p6qGU2pz2a9MicNSgGSCSAgjPFun%2BGiNiE9ELueMZ434PWy525tjSLZ4c2eqSpWYB4y1rAh010p%2BTCEiTQrH7zNKWw2iDaOwPEynFqkhs1ecbyE1KjocVJHgG3IO9TMllpMBWf0raKr%2B69jCvkmrUq6trROMJSfiL0GOqUBytEZjw77F%2BRx1xmONe3r%2B%2B8UgQtx%2BCUSg0MpuzcywM73s8ch9ryp7BsOSTvjsb1QvUqxOUdC54K%2BE7YeR2YS2mwyB6K%2FbLc13gAloBipR%2F2556Zy1yB%2BwgctW5K1gnwCSEXZY8A7R0ZqiydAu4T210Sk2vDcIjK26QpOSgx6BgofzqCGX92VtFTBFkK3C3b4TotGHwRkVKB6y5VEY%2FHKt0grYyWi&X-Amz-Signature=14461a905972a6691bcf3d01c57fc91d577ba699f917baffa556dbc5cd281c14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTA5JB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICdoqxxwvl%2FHZaMvMyoyPZ9ZI%2BVKd5PM0jiAQZJJxCCKAiEA3lvGSLjJIuP743DKmKKqcDPp2sZO8I4QwWQ8IbhnP5Aq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA1p95HGzlmveudIFircA3YqblucDjWN154VgpLMvGRluCMZjEQ3FBsbxU9VWoR7yumYCrMCJuifD1WXahlJWDHbhyxZOp30gNvlnPJxRmHQWuZ0%2B75gRvUmGplERZPZ6F9Z0Jlj5%2BBhPOIWwzWIfTKBzuCzTl0kp21koyEOZuPWJa9QSGrel3qwo6GQ%2FkpZkiWpylaSnnQsXUBvQ0iDM4XODwTi8a7ylRfO%2B%2BbBgIY%2BQx1jAA%2FONw%2Blu0DiHPB0QHjEPtuiIuWAT1AYpBkgONb3OXvJCpays8WTncdQz46CiqV3iYOqpIfxMrDbpt2jkRgwGUHJp%2BjDzSB2vyCMiQ%2BaWjyh7msLNZ1cpWgk4gTzqWe3capCWKKcWeGK4jJoKcL%2BQYHV6TQA8RVrME42CGRauMACS4jMzxh40h3w9e1%2FmZ9JG8RoCpggiYkcwiC2qAYFb5YVr1nvkC0m2RE4EdLaUpOzaxiFVXgg9MAYSYFGMkyvmpcp3p6qGU2pz2a9MicNSgGSCSAgjPFun%2BGiNiE9ELueMZ434PWy525tjSLZ4c2eqSpWYB4y1rAh010p%2BTCEiTQrH7zNKWw2iDaOwPEynFqkhs1ecbyE1KjocVJHgG3IO9TMllpMBWf0raKr%2B69jCvkmrUq6trROMJSfiL0GOqUBytEZjw77F%2BRx1xmONe3r%2B%2B8UgQtx%2BCUSg0MpuzcywM73s8ch9ryp7BsOSTvjsb1QvUqxOUdC54K%2BE7YeR2YS2mwyB6K%2FbLc13gAloBipR%2F2556Zy1yB%2BwgctW5K1gnwCSEXZY8A7R0ZqiydAu4T210Sk2vDcIjK26QpOSgx6BgofzqCGX92VtFTBFkK3C3b4TotGHwRkVKB6y5VEY%2FHKt0grYyWi&X-Amz-Signature=ec080af623323071ee3f48ba49a81af70098b55ca37b6dbe156914df6e73c544&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTA5JB7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T140749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICdoqxxwvl%2FHZaMvMyoyPZ9ZI%2BVKd5PM0jiAQZJJxCCKAiEA3lvGSLjJIuP743DKmKKqcDPp2sZO8I4QwWQ8IbhnP5Aq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDA1p95HGzlmveudIFircA3YqblucDjWN154VgpLMvGRluCMZjEQ3FBsbxU9VWoR7yumYCrMCJuifD1WXahlJWDHbhyxZOp30gNvlnPJxRmHQWuZ0%2B75gRvUmGplERZPZ6F9Z0Jlj5%2BBhPOIWwzWIfTKBzuCzTl0kp21koyEOZuPWJa9QSGrel3qwo6GQ%2FkpZkiWpylaSnnQsXUBvQ0iDM4XODwTi8a7ylRfO%2B%2BbBgIY%2BQx1jAA%2FONw%2Blu0DiHPB0QHjEPtuiIuWAT1AYpBkgONb3OXvJCpays8WTncdQz46CiqV3iYOqpIfxMrDbpt2jkRgwGUHJp%2BjDzSB2vyCMiQ%2BaWjyh7msLNZ1cpWgk4gTzqWe3capCWKKcWeGK4jJoKcL%2BQYHV6TQA8RVrME42CGRauMACS4jMzxh40h3w9e1%2FmZ9JG8RoCpggiYkcwiC2qAYFb5YVr1nvkC0m2RE4EdLaUpOzaxiFVXgg9MAYSYFGMkyvmpcp3p6qGU2pz2a9MicNSgGSCSAgjPFun%2BGiNiE9ELueMZ434PWy525tjSLZ4c2eqSpWYB4y1rAh010p%2BTCEiTQrH7zNKWw2iDaOwPEynFqkhs1ecbyE1KjocVJHgG3IO9TMllpMBWf0raKr%2B69jCvkmrUq6trROMJSfiL0GOqUBytEZjw77F%2BRx1xmONe3r%2B%2B8UgQtx%2BCUSg0MpuzcywM73s8ch9ryp7BsOSTvjsb1QvUqxOUdC54K%2BE7YeR2YS2mwyB6K%2FbLc13gAloBipR%2F2556Zy1yB%2BwgctW5K1gnwCSEXZY8A7R0ZqiydAu4T210Sk2vDcIjK26QpOSgx6BgofzqCGX92VtFTBFkK3C3b4TotGHwRkVKB6y5VEY%2FHKt0grYyWi&X-Amz-Signature=44448c429ca92b80210e41d7e8c8048ba6cdf66567bade31886ceec9fea6e020&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
