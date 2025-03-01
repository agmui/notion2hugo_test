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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EADU6BY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDzqYBdhVnouDQyZZ9Y6nGYNSVGd%2B7MeZsboyIa7GM9wwIgZwVz4%2B8gxWsQFJjQ85Dj9wNiOZpFfZVTASQZHVFEEPUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8SJ5iOxoxBEXbAgyrcA0wrTdf2DtsiKnSAKuYDBJXQZZC4WWgbRCB%2FQ8suQTmRo3Hg5m7IwK09tQkkiCrAoHzALYKzZjLYgIMb%2FC09v%2BDJGLdmGUNoAG2AwB6953C2bOoVFjHr%2FA9XNOELW0zjA1nQx6iNqGzSwv95l0PTwd7irr5S%2BaxmVBn5DdqP0lOFV6b8SKZ6b6UDOlf2%2F%2BLqUgp24XXDyhFzXzAvBVG8Tbqs1LZTOpOvxiIBVC%2F18sp2j1SZd6PCzoMLSkuLnZ29nHW9nznnNLP%2FxqIP5KeWpj3VzucIFKUF5TAeuMpEl2nWwH6MR6K%2FC1m8Qs1sfdk2v1yZ8NvawJpFE%2FgE6BXGg28%2Bzwitz%2BpFCX1BKrxIBzujzOXkyhBzlS9KDVGN9IBEpN8%2BQ8Dj9gtjdise1SYie7%2FGi9Cuelh%2FUPhqKWoaOQP36LmobZlvjrvKy0K2qr0vlJt%2F8XiGGXdYMlGPO9mS7HQyo%2FZqHP6JjsXJJ1skW%2FdaMvufRg5GPVloYAudf3aYsOs8ateN5Prgty8MspwXcXowmquxTD3xzKW%2BZcFMgvDiyIIMpMJToiprAyvyncGCkb225Bu1UXywpP0ANo%2B63iwi1Xh070yzFWdLwrNgRoPX4gg0AD6AFH0FW0H8MMO6i74GOqUBP0IZtiL5eGHY238a4z8iJFLjsSUcOat4r4N4KieezPc9D9VDUhHD77VHe5g7xiagMysaxaVvo1ott3vhBFfAzwf92T3YEslDri5hmHG7182VeMAgUmLIw%2FwO4Y7E%2FLzE87DrAT%2BaebWdwBzBU82VZ78epuimNMs2xzPASy0QON7Yl4t6o%2FhrMQy0NqHY8TdMRvlMFpKYTSJujO3Re3NFHMelj6%2Fs&X-Amz-Signature=82382617439ed28823d0a5200a408bafba87d85b01ddceff0cd2d875da2134c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EADU6BY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDzqYBdhVnouDQyZZ9Y6nGYNSVGd%2B7MeZsboyIa7GM9wwIgZwVz4%2B8gxWsQFJjQ85Dj9wNiOZpFfZVTASQZHVFEEPUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8SJ5iOxoxBEXbAgyrcA0wrTdf2DtsiKnSAKuYDBJXQZZC4WWgbRCB%2FQ8suQTmRo3Hg5m7IwK09tQkkiCrAoHzALYKzZjLYgIMb%2FC09v%2BDJGLdmGUNoAG2AwB6953C2bOoVFjHr%2FA9XNOELW0zjA1nQx6iNqGzSwv95l0PTwd7irr5S%2BaxmVBn5DdqP0lOFV6b8SKZ6b6UDOlf2%2F%2BLqUgp24XXDyhFzXzAvBVG8Tbqs1LZTOpOvxiIBVC%2F18sp2j1SZd6PCzoMLSkuLnZ29nHW9nznnNLP%2FxqIP5KeWpj3VzucIFKUF5TAeuMpEl2nWwH6MR6K%2FC1m8Qs1sfdk2v1yZ8NvawJpFE%2FgE6BXGg28%2Bzwitz%2BpFCX1BKrxIBzujzOXkyhBzlS9KDVGN9IBEpN8%2BQ8Dj9gtjdise1SYie7%2FGi9Cuelh%2FUPhqKWoaOQP36LmobZlvjrvKy0K2qr0vlJt%2F8XiGGXdYMlGPO9mS7HQyo%2FZqHP6JjsXJJ1skW%2FdaMvufRg5GPVloYAudf3aYsOs8ateN5Prgty8MspwXcXowmquxTD3xzKW%2BZcFMgvDiyIIMpMJToiprAyvyncGCkb225Bu1UXywpP0ANo%2B63iwi1Xh070yzFWdLwrNgRoPX4gg0AD6AFH0FW0H8MMO6i74GOqUBP0IZtiL5eGHY238a4z8iJFLjsSUcOat4r4N4KieezPc9D9VDUhHD77VHe5g7xiagMysaxaVvo1ott3vhBFfAzwf92T3YEslDri5hmHG7182VeMAgUmLIw%2FwO4Y7E%2FLzE87DrAT%2BaebWdwBzBU82VZ78epuimNMs2xzPASy0QON7Yl4t6o%2FhrMQy0NqHY8TdMRvlMFpKYTSJujO3Re3NFHMelj6%2Fs&X-Amz-Signature=215fc6470dffd0c785ccd5e3681a262aef9ff2071bbd42ade3d3757f4c5f77e2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EADU6BY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDzqYBdhVnouDQyZZ9Y6nGYNSVGd%2B7MeZsboyIa7GM9wwIgZwVz4%2B8gxWsQFJjQ85Dj9wNiOZpFfZVTASQZHVFEEPUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8SJ5iOxoxBEXbAgyrcA0wrTdf2DtsiKnSAKuYDBJXQZZC4WWgbRCB%2FQ8suQTmRo3Hg5m7IwK09tQkkiCrAoHzALYKzZjLYgIMb%2FC09v%2BDJGLdmGUNoAG2AwB6953C2bOoVFjHr%2FA9XNOELW0zjA1nQx6iNqGzSwv95l0PTwd7irr5S%2BaxmVBn5DdqP0lOFV6b8SKZ6b6UDOlf2%2F%2BLqUgp24XXDyhFzXzAvBVG8Tbqs1LZTOpOvxiIBVC%2F18sp2j1SZd6PCzoMLSkuLnZ29nHW9nznnNLP%2FxqIP5KeWpj3VzucIFKUF5TAeuMpEl2nWwH6MR6K%2FC1m8Qs1sfdk2v1yZ8NvawJpFE%2FgE6BXGg28%2Bzwitz%2BpFCX1BKrxIBzujzOXkyhBzlS9KDVGN9IBEpN8%2BQ8Dj9gtjdise1SYie7%2FGi9Cuelh%2FUPhqKWoaOQP36LmobZlvjrvKy0K2qr0vlJt%2F8XiGGXdYMlGPO9mS7HQyo%2FZqHP6JjsXJJ1skW%2FdaMvufRg5GPVloYAudf3aYsOs8ateN5Prgty8MspwXcXowmquxTD3xzKW%2BZcFMgvDiyIIMpMJToiprAyvyncGCkb225Bu1UXywpP0ANo%2B63iwi1Xh070yzFWdLwrNgRoPX4gg0AD6AFH0FW0H8MMO6i74GOqUBP0IZtiL5eGHY238a4z8iJFLjsSUcOat4r4N4KieezPc9D9VDUhHD77VHe5g7xiagMysaxaVvo1ott3vhBFfAzwf92T3YEslDri5hmHG7182VeMAgUmLIw%2FwO4Y7E%2FLzE87DrAT%2BaebWdwBzBU82VZ78epuimNMs2xzPASy0QON7Yl4t6o%2FhrMQy0NqHY8TdMRvlMFpKYTSJujO3Re3NFHMelj6%2Fs&X-Amz-Signature=745de054d168c807d064daa2d0f45e62c715087b576639f66cec87ac85a92241&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EADU6BY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDzqYBdhVnouDQyZZ9Y6nGYNSVGd%2B7MeZsboyIa7GM9wwIgZwVz4%2B8gxWsQFJjQ85Dj9wNiOZpFfZVTASQZHVFEEPUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8SJ5iOxoxBEXbAgyrcA0wrTdf2DtsiKnSAKuYDBJXQZZC4WWgbRCB%2FQ8suQTmRo3Hg5m7IwK09tQkkiCrAoHzALYKzZjLYgIMb%2FC09v%2BDJGLdmGUNoAG2AwB6953C2bOoVFjHr%2FA9XNOELW0zjA1nQx6iNqGzSwv95l0PTwd7irr5S%2BaxmVBn5DdqP0lOFV6b8SKZ6b6UDOlf2%2F%2BLqUgp24XXDyhFzXzAvBVG8Tbqs1LZTOpOvxiIBVC%2F18sp2j1SZd6PCzoMLSkuLnZ29nHW9nznnNLP%2FxqIP5KeWpj3VzucIFKUF5TAeuMpEl2nWwH6MR6K%2FC1m8Qs1sfdk2v1yZ8NvawJpFE%2FgE6BXGg28%2Bzwitz%2BpFCX1BKrxIBzujzOXkyhBzlS9KDVGN9IBEpN8%2BQ8Dj9gtjdise1SYie7%2FGi9Cuelh%2FUPhqKWoaOQP36LmobZlvjrvKy0K2qr0vlJt%2F8XiGGXdYMlGPO9mS7HQyo%2FZqHP6JjsXJJ1skW%2FdaMvufRg5GPVloYAudf3aYsOs8ateN5Prgty8MspwXcXowmquxTD3xzKW%2BZcFMgvDiyIIMpMJToiprAyvyncGCkb225Bu1UXywpP0ANo%2B63iwi1Xh070yzFWdLwrNgRoPX4gg0AD6AFH0FW0H8MMO6i74GOqUBP0IZtiL5eGHY238a4z8iJFLjsSUcOat4r4N4KieezPc9D9VDUhHD77VHe5g7xiagMysaxaVvo1ott3vhBFfAzwf92T3YEslDri5hmHG7182VeMAgUmLIw%2FwO4Y7E%2FLzE87DrAT%2BaebWdwBzBU82VZ78epuimNMs2xzPASy0QON7Yl4t6o%2FhrMQy0NqHY8TdMRvlMFpKYTSJujO3Re3NFHMelj6%2Fs&X-Amz-Signature=fd0c3306138e8dd4c5c36796f674cf79169dbc0be9c84984fb1dfc6d812d26e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EADU6BY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDzqYBdhVnouDQyZZ9Y6nGYNSVGd%2B7MeZsboyIa7GM9wwIgZwVz4%2B8gxWsQFJjQ85Dj9wNiOZpFfZVTASQZHVFEEPUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8SJ5iOxoxBEXbAgyrcA0wrTdf2DtsiKnSAKuYDBJXQZZC4WWgbRCB%2FQ8suQTmRo3Hg5m7IwK09tQkkiCrAoHzALYKzZjLYgIMb%2FC09v%2BDJGLdmGUNoAG2AwB6953C2bOoVFjHr%2FA9XNOELW0zjA1nQx6iNqGzSwv95l0PTwd7irr5S%2BaxmVBn5DdqP0lOFV6b8SKZ6b6UDOlf2%2F%2BLqUgp24XXDyhFzXzAvBVG8Tbqs1LZTOpOvxiIBVC%2F18sp2j1SZd6PCzoMLSkuLnZ29nHW9nznnNLP%2FxqIP5KeWpj3VzucIFKUF5TAeuMpEl2nWwH6MR6K%2FC1m8Qs1sfdk2v1yZ8NvawJpFE%2FgE6BXGg28%2Bzwitz%2BpFCX1BKrxIBzujzOXkyhBzlS9KDVGN9IBEpN8%2BQ8Dj9gtjdise1SYie7%2FGi9Cuelh%2FUPhqKWoaOQP36LmobZlvjrvKy0K2qr0vlJt%2F8XiGGXdYMlGPO9mS7HQyo%2FZqHP6JjsXJJ1skW%2FdaMvufRg5GPVloYAudf3aYsOs8ateN5Prgty8MspwXcXowmquxTD3xzKW%2BZcFMgvDiyIIMpMJToiprAyvyncGCkb225Bu1UXywpP0ANo%2B63iwi1Xh070yzFWdLwrNgRoPX4gg0AD6AFH0FW0H8MMO6i74GOqUBP0IZtiL5eGHY238a4z8iJFLjsSUcOat4r4N4KieezPc9D9VDUhHD77VHe5g7xiagMysaxaVvo1ott3vhBFfAzwf92T3YEslDri5hmHG7182VeMAgUmLIw%2FwO4Y7E%2FLzE87DrAT%2BaebWdwBzBU82VZ78epuimNMs2xzPASy0QON7Yl4t6o%2FhrMQy0NqHY8TdMRvlMFpKYTSJujO3Re3NFHMelj6%2Fs&X-Amz-Signature=a16183c61944320d5964ffb67aa0ba13020a55c5ac0a116395166f67b35f327b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EADU6BY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDzqYBdhVnouDQyZZ9Y6nGYNSVGd%2B7MeZsboyIa7GM9wwIgZwVz4%2B8gxWsQFJjQ85Dj9wNiOZpFfZVTASQZHVFEEPUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8SJ5iOxoxBEXbAgyrcA0wrTdf2DtsiKnSAKuYDBJXQZZC4WWgbRCB%2FQ8suQTmRo3Hg5m7IwK09tQkkiCrAoHzALYKzZjLYgIMb%2FC09v%2BDJGLdmGUNoAG2AwB6953C2bOoVFjHr%2FA9XNOELW0zjA1nQx6iNqGzSwv95l0PTwd7irr5S%2BaxmVBn5DdqP0lOFV6b8SKZ6b6UDOlf2%2F%2BLqUgp24XXDyhFzXzAvBVG8Tbqs1LZTOpOvxiIBVC%2F18sp2j1SZd6PCzoMLSkuLnZ29nHW9nznnNLP%2FxqIP5KeWpj3VzucIFKUF5TAeuMpEl2nWwH6MR6K%2FC1m8Qs1sfdk2v1yZ8NvawJpFE%2FgE6BXGg28%2Bzwitz%2BpFCX1BKrxIBzujzOXkyhBzlS9KDVGN9IBEpN8%2BQ8Dj9gtjdise1SYie7%2FGi9Cuelh%2FUPhqKWoaOQP36LmobZlvjrvKy0K2qr0vlJt%2F8XiGGXdYMlGPO9mS7HQyo%2FZqHP6JjsXJJ1skW%2FdaMvufRg5GPVloYAudf3aYsOs8ateN5Prgty8MspwXcXowmquxTD3xzKW%2BZcFMgvDiyIIMpMJToiprAyvyncGCkb225Bu1UXywpP0ANo%2B63iwi1Xh070yzFWdLwrNgRoPX4gg0AD6AFH0FW0H8MMO6i74GOqUBP0IZtiL5eGHY238a4z8iJFLjsSUcOat4r4N4KieezPc9D9VDUhHD77VHe5g7xiagMysaxaVvo1ott3vhBFfAzwf92T3YEslDri5hmHG7182VeMAgUmLIw%2FwO4Y7E%2FLzE87DrAT%2BaebWdwBzBU82VZ78epuimNMs2xzPASy0QON7Yl4t6o%2FhrMQy0NqHY8TdMRvlMFpKYTSJujO3Re3NFHMelj6%2Fs&X-Amz-Signature=fbd308f7074900eea83525fe8fd7641580eca84fc5098e557948a2ec881952a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EADU6BY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDzqYBdhVnouDQyZZ9Y6nGYNSVGd%2B7MeZsboyIa7GM9wwIgZwVz4%2B8gxWsQFJjQ85Dj9wNiOZpFfZVTASQZHVFEEPUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8SJ5iOxoxBEXbAgyrcA0wrTdf2DtsiKnSAKuYDBJXQZZC4WWgbRCB%2FQ8suQTmRo3Hg5m7IwK09tQkkiCrAoHzALYKzZjLYgIMb%2FC09v%2BDJGLdmGUNoAG2AwB6953C2bOoVFjHr%2FA9XNOELW0zjA1nQx6iNqGzSwv95l0PTwd7irr5S%2BaxmVBn5DdqP0lOFV6b8SKZ6b6UDOlf2%2F%2BLqUgp24XXDyhFzXzAvBVG8Tbqs1LZTOpOvxiIBVC%2F18sp2j1SZd6PCzoMLSkuLnZ29nHW9nznnNLP%2FxqIP5KeWpj3VzucIFKUF5TAeuMpEl2nWwH6MR6K%2FC1m8Qs1sfdk2v1yZ8NvawJpFE%2FgE6BXGg28%2Bzwitz%2BpFCX1BKrxIBzujzOXkyhBzlS9KDVGN9IBEpN8%2BQ8Dj9gtjdise1SYie7%2FGi9Cuelh%2FUPhqKWoaOQP36LmobZlvjrvKy0K2qr0vlJt%2F8XiGGXdYMlGPO9mS7HQyo%2FZqHP6JjsXJJ1skW%2FdaMvufRg5GPVloYAudf3aYsOs8ateN5Prgty8MspwXcXowmquxTD3xzKW%2BZcFMgvDiyIIMpMJToiprAyvyncGCkb225Bu1UXywpP0ANo%2B63iwi1Xh070yzFWdLwrNgRoPX4gg0AD6AFH0FW0H8MMO6i74GOqUBP0IZtiL5eGHY238a4z8iJFLjsSUcOat4r4N4KieezPc9D9VDUhHD77VHe5g7xiagMysaxaVvo1ott3vhBFfAzwf92T3YEslDri5hmHG7182VeMAgUmLIw%2FwO4Y7E%2FLzE87DrAT%2BaebWdwBzBU82VZ78epuimNMs2xzPASy0QON7Yl4t6o%2FhrMQy0NqHY8TdMRvlMFpKYTSJujO3Re3NFHMelj6%2Fs&X-Amz-Signature=39c8c9c71757b90c8caeae46fb28f8e8fb4ba5ee371a3641ee5cbb265ebd1c7e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EADU6BY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDzqYBdhVnouDQyZZ9Y6nGYNSVGd%2B7MeZsboyIa7GM9wwIgZwVz4%2B8gxWsQFJjQ85Dj9wNiOZpFfZVTASQZHVFEEPUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8SJ5iOxoxBEXbAgyrcA0wrTdf2DtsiKnSAKuYDBJXQZZC4WWgbRCB%2FQ8suQTmRo3Hg5m7IwK09tQkkiCrAoHzALYKzZjLYgIMb%2FC09v%2BDJGLdmGUNoAG2AwB6953C2bOoVFjHr%2FA9XNOELW0zjA1nQx6iNqGzSwv95l0PTwd7irr5S%2BaxmVBn5DdqP0lOFV6b8SKZ6b6UDOlf2%2F%2BLqUgp24XXDyhFzXzAvBVG8Tbqs1LZTOpOvxiIBVC%2F18sp2j1SZd6PCzoMLSkuLnZ29nHW9nznnNLP%2FxqIP5KeWpj3VzucIFKUF5TAeuMpEl2nWwH6MR6K%2FC1m8Qs1sfdk2v1yZ8NvawJpFE%2FgE6BXGg28%2Bzwitz%2BpFCX1BKrxIBzujzOXkyhBzlS9KDVGN9IBEpN8%2BQ8Dj9gtjdise1SYie7%2FGi9Cuelh%2FUPhqKWoaOQP36LmobZlvjrvKy0K2qr0vlJt%2F8XiGGXdYMlGPO9mS7HQyo%2FZqHP6JjsXJJ1skW%2FdaMvufRg5GPVloYAudf3aYsOs8ateN5Prgty8MspwXcXowmquxTD3xzKW%2BZcFMgvDiyIIMpMJToiprAyvyncGCkb225Bu1UXywpP0ANo%2B63iwi1Xh070yzFWdLwrNgRoPX4gg0AD6AFH0FW0H8MMO6i74GOqUBP0IZtiL5eGHY238a4z8iJFLjsSUcOat4r4N4KieezPc9D9VDUhHD77VHe5g7xiagMysaxaVvo1ott3vhBFfAzwf92T3YEslDri5hmHG7182VeMAgUmLIw%2FwO4Y7E%2FLzE87DrAT%2BaebWdwBzBU82VZ78epuimNMs2xzPASy0QON7Yl4t6o%2FhrMQy0NqHY8TdMRvlMFpKYTSJujO3Re3NFHMelj6%2Fs&X-Amz-Signature=be17c01faf0558c862fe79470a0c5b56d34db198759bbbf76bb8befa1690d820&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
