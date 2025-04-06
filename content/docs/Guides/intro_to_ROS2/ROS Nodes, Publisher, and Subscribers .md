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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWT7C67%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3%2FsVsELVgYmEJxBTu7gPt6Jz65KM8y5qqn4dIpi7fcAiEAyn6RJXK01381qGWg5yritVoNeuEP9eCce%2FpBFmol8D0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKrQJMQbYXhVOQcxSircA4GIaRkbM4OThdN4Is%2B108cn780xkYTM70n6ec3WFPq5pFJTJQQExAnJ%2BHDw%2Bd4H%2FU6sLnzFLDAq0iTQqFosKPeZ%2Bi5Gd%2FSljdzgfGg6pYpYwWVxcb%2Fp%2FlrHA%2BfEwLm7exvrwx8ubWfPNl5FWyj07l1U%2BclZbSU9%2FhDW6A7YErwKiXlWXaLiuKgbK%2BM2IN4ljtLSqr9TVZSXlSms4W8duetUt3zp%2Fw5xUek3y70%2F89o5TSpf7erIAxtV4AUjJrJNRK2T65byGwSSPxA6OQ9ZYH3FK6VJeZrcnnAR9D6u9fQI5k%2BeeZQvB3VcyoS%2BtiGNjcC8NY92iReHr5UCIw9G55d6dMyfGwPbVfMhPTiMNlfL29bl33ZX5ejR7va1%2Fsp8Y4czBh4DcF2gW0mQsk1k19xVW9NgZuU5e%2F5Pv7WL5%2BDul9Ega%2FPrpLO%2F4HuzRqaxo%2BkKgK2Fr2Qiz7YLGy%2BIboc0VqoaMjzJlWNuo7Yilez7BSKhTOqH2RfdlJttWG3MzXTeNzkQ79FmfkoVCCkEV6MyksUHPqlZgPlQnfwdb7hf5pCGoqx0FelCMYWWblc21thdL5banFu26ov3ENIbRfjH%2Btgo%2FP%2BgCifbyY%2F74ANRrZLU9gd1dvkx3yCHMO6byr8GOqUBvr%2BxpQMT2vE6D9VgZOoJtPrlEsmOLMa1bXyPi7B3BTLlqvoxbrDpm1iH92d84n9EVct8%2Fwvzkpgh7gfTsp%2F5Q65zUP8peGvxZDja3qB1qlB1BTLarUhTC8yNSZW%2Fj2RaYPolKfxHVih29v685NmdNazvG9Abv52jUtVRCQFzRbpnMc1laATb4W7kszNVmXj4b7xaDQTCzWyekGCfWl9EQ0HE2n%2Bc&X-Amz-Signature=3044d97741464ff028555a722b8d33dd385b9c284346b2b38cf748036a09278a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWT7C67%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3%2FsVsELVgYmEJxBTu7gPt6Jz65KM8y5qqn4dIpi7fcAiEAyn6RJXK01381qGWg5yritVoNeuEP9eCce%2FpBFmol8D0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKrQJMQbYXhVOQcxSircA4GIaRkbM4OThdN4Is%2B108cn780xkYTM70n6ec3WFPq5pFJTJQQExAnJ%2BHDw%2Bd4H%2FU6sLnzFLDAq0iTQqFosKPeZ%2Bi5Gd%2FSljdzgfGg6pYpYwWVxcb%2Fp%2FlrHA%2BfEwLm7exvrwx8ubWfPNl5FWyj07l1U%2BclZbSU9%2FhDW6A7YErwKiXlWXaLiuKgbK%2BM2IN4ljtLSqr9TVZSXlSms4W8duetUt3zp%2Fw5xUek3y70%2F89o5TSpf7erIAxtV4AUjJrJNRK2T65byGwSSPxA6OQ9ZYH3FK6VJeZrcnnAR9D6u9fQI5k%2BeeZQvB3VcyoS%2BtiGNjcC8NY92iReHr5UCIw9G55d6dMyfGwPbVfMhPTiMNlfL29bl33ZX5ejR7va1%2Fsp8Y4czBh4DcF2gW0mQsk1k19xVW9NgZuU5e%2F5Pv7WL5%2BDul9Ega%2FPrpLO%2F4HuzRqaxo%2BkKgK2Fr2Qiz7YLGy%2BIboc0VqoaMjzJlWNuo7Yilez7BSKhTOqH2RfdlJttWG3MzXTeNzkQ79FmfkoVCCkEV6MyksUHPqlZgPlQnfwdb7hf5pCGoqx0FelCMYWWblc21thdL5banFu26ov3ENIbRfjH%2Btgo%2FP%2BgCifbyY%2F74ANRrZLU9gd1dvkx3yCHMO6byr8GOqUBvr%2BxpQMT2vE6D9VgZOoJtPrlEsmOLMa1bXyPi7B3BTLlqvoxbrDpm1iH92d84n9EVct8%2Fwvzkpgh7gfTsp%2F5Q65zUP8peGvxZDja3qB1qlB1BTLarUhTC8yNSZW%2Fj2RaYPolKfxHVih29v685NmdNazvG9Abv52jUtVRCQFzRbpnMc1laATb4W7kszNVmXj4b7xaDQTCzWyekGCfWl9EQ0HE2n%2Bc&X-Amz-Signature=1a62d1b8500c108276da5f0a92331bc143438076476113e022d925cf4b08a1c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWT7C67%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3%2FsVsELVgYmEJxBTu7gPt6Jz65KM8y5qqn4dIpi7fcAiEAyn6RJXK01381qGWg5yritVoNeuEP9eCce%2FpBFmol8D0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKrQJMQbYXhVOQcxSircA4GIaRkbM4OThdN4Is%2B108cn780xkYTM70n6ec3WFPq5pFJTJQQExAnJ%2BHDw%2Bd4H%2FU6sLnzFLDAq0iTQqFosKPeZ%2Bi5Gd%2FSljdzgfGg6pYpYwWVxcb%2Fp%2FlrHA%2BfEwLm7exvrwx8ubWfPNl5FWyj07l1U%2BclZbSU9%2FhDW6A7YErwKiXlWXaLiuKgbK%2BM2IN4ljtLSqr9TVZSXlSms4W8duetUt3zp%2Fw5xUek3y70%2F89o5TSpf7erIAxtV4AUjJrJNRK2T65byGwSSPxA6OQ9ZYH3FK6VJeZrcnnAR9D6u9fQI5k%2BeeZQvB3VcyoS%2BtiGNjcC8NY92iReHr5UCIw9G55d6dMyfGwPbVfMhPTiMNlfL29bl33ZX5ejR7va1%2Fsp8Y4czBh4DcF2gW0mQsk1k19xVW9NgZuU5e%2F5Pv7WL5%2BDul9Ega%2FPrpLO%2F4HuzRqaxo%2BkKgK2Fr2Qiz7YLGy%2BIboc0VqoaMjzJlWNuo7Yilez7BSKhTOqH2RfdlJttWG3MzXTeNzkQ79FmfkoVCCkEV6MyksUHPqlZgPlQnfwdb7hf5pCGoqx0FelCMYWWblc21thdL5banFu26ov3ENIbRfjH%2Btgo%2FP%2BgCifbyY%2F74ANRrZLU9gd1dvkx3yCHMO6byr8GOqUBvr%2BxpQMT2vE6D9VgZOoJtPrlEsmOLMa1bXyPi7B3BTLlqvoxbrDpm1iH92d84n9EVct8%2Fwvzkpgh7gfTsp%2F5Q65zUP8peGvxZDja3qB1qlB1BTLarUhTC8yNSZW%2Fj2RaYPolKfxHVih29v685NmdNazvG9Abv52jUtVRCQFzRbpnMc1laATb4W7kszNVmXj4b7xaDQTCzWyekGCfWl9EQ0HE2n%2Bc&X-Amz-Signature=8a077702592f0c570ac8acfa38f59a712424d5192bdebb4326c19866cda3bff3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWT7C67%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3%2FsVsELVgYmEJxBTu7gPt6Jz65KM8y5qqn4dIpi7fcAiEAyn6RJXK01381qGWg5yritVoNeuEP9eCce%2FpBFmol8D0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKrQJMQbYXhVOQcxSircA4GIaRkbM4OThdN4Is%2B108cn780xkYTM70n6ec3WFPq5pFJTJQQExAnJ%2BHDw%2Bd4H%2FU6sLnzFLDAq0iTQqFosKPeZ%2Bi5Gd%2FSljdzgfGg6pYpYwWVxcb%2Fp%2FlrHA%2BfEwLm7exvrwx8ubWfPNl5FWyj07l1U%2BclZbSU9%2FhDW6A7YErwKiXlWXaLiuKgbK%2BM2IN4ljtLSqr9TVZSXlSms4W8duetUt3zp%2Fw5xUek3y70%2F89o5TSpf7erIAxtV4AUjJrJNRK2T65byGwSSPxA6OQ9ZYH3FK6VJeZrcnnAR9D6u9fQI5k%2BeeZQvB3VcyoS%2BtiGNjcC8NY92iReHr5UCIw9G55d6dMyfGwPbVfMhPTiMNlfL29bl33ZX5ejR7va1%2Fsp8Y4czBh4DcF2gW0mQsk1k19xVW9NgZuU5e%2F5Pv7WL5%2BDul9Ega%2FPrpLO%2F4HuzRqaxo%2BkKgK2Fr2Qiz7YLGy%2BIboc0VqoaMjzJlWNuo7Yilez7BSKhTOqH2RfdlJttWG3MzXTeNzkQ79FmfkoVCCkEV6MyksUHPqlZgPlQnfwdb7hf5pCGoqx0FelCMYWWblc21thdL5banFu26ov3ENIbRfjH%2Btgo%2FP%2BgCifbyY%2F74ANRrZLU9gd1dvkx3yCHMO6byr8GOqUBvr%2BxpQMT2vE6D9VgZOoJtPrlEsmOLMa1bXyPi7B3BTLlqvoxbrDpm1iH92d84n9EVct8%2Fwvzkpgh7gfTsp%2F5Q65zUP8peGvxZDja3qB1qlB1BTLarUhTC8yNSZW%2Fj2RaYPolKfxHVih29v685NmdNazvG9Abv52jUtVRCQFzRbpnMc1laATb4W7kszNVmXj4b7xaDQTCzWyekGCfWl9EQ0HE2n%2Bc&X-Amz-Signature=bb651922b8219adaa047db55d7693378caeb51d2056fb381c9e36943e48d6b80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWT7C67%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3%2FsVsELVgYmEJxBTu7gPt6Jz65KM8y5qqn4dIpi7fcAiEAyn6RJXK01381qGWg5yritVoNeuEP9eCce%2FpBFmol8D0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKrQJMQbYXhVOQcxSircA4GIaRkbM4OThdN4Is%2B108cn780xkYTM70n6ec3WFPq5pFJTJQQExAnJ%2BHDw%2Bd4H%2FU6sLnzFLDAq0iTQqFosKPeZ%2Bi5Gd%2FSljdzgfGg6pYpYwWVxcb%2Fp%2FlrHA%2BfEwLm7exvrwx8ubWfPNl5FWyj07l1U%2BclZbSU9%2FhDW6A7YErwKiXlWXaLiuKgbK%2BM2IN4ljtLSqr9TVZSXlSms4W8duetUt3zp%2Fw5xUek3y70%2F89o5TSpf7erIAxtV4AUjJrJNRK2T65byGwSSPxA6OQ9ZYH3FK6VJeZrcnnAR9D6u9fQI5k%2BeeZQvB3VcyoS%2BtiGNjcC8NY92iReHr5UCIw9G55d6dMyfGwPbVfMhPTiMNlfL29bl33ZX5ejR7va1%2Fsp8Y4czBh4DcF2gW0mQsk1k19xVW9NgZuU5e%2F5Pv7WL5%2BDul9Ega%2FPrpLO%2F4HuzRqaxo%2BkKgK2Fr2Qiz7YLGy%2BIboc0VqoaMjzJlWNuo7Yilez7BSKhTOqH2RfdlJttWG3MzXTeNzkQ79FmfkoVCCkEV6MyksUHPqlZgPlQnfwdb7hf5pCGoqx0FelCMYWWblc21thdL5banFu26ov3ENIbRfjH%2Btgo%2FP%2BgCifbyY%2F74ANRrZLU9gd1dvkx3yCHMO6byr8GOqUBvr%2BxpQMT2vE6D9VgZOoJtPrlEsmOLMa1bXyPi7B3BTLlqvoxbrDpm1iH92d84n9EVct8%2Fwvzkpgh7gfTsp%2F5Q65zUP8peGvxZDja3qB1qlB1BTLarUhTC8yNSZW%2Fj2RaYPolKfxHVih29v685NmdNazvG9Abv52jUtVRCQFzRbpnMc1laATb4W7kszNVmXj4b7xaDQTCzWyekGCfWl9EQ0HE2n%2Bc&X-Amz-Signature=e13ea386f3b3505b9581e1bdf24a21010601f764df6bff0405d8913acdc69e35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWT7C67%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3%2FsVsELVgYmEJxBTu7gPt6Jz65KM8y5qqn4dIpi7fcAiEAyn6RJXK01381qGWg5yritVoNeuEP9eCce%2FpBFmol8D0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKrQJMQbYXhVOQcxSircA4GIaRkbM4OThdN4Is%2B108cn780xkYTM70n6ec3WFPq5pFJTJQQExAnJ%2BHDw%2Bd4H%2FU6sLnzFLDAq0iTQqFosKPeZ%2Bi5Gd%2FSljdzgfGg6pYpYwWVxcb%2Fp%2FlrHA%2BfEwLm7exvrwx8ubWfPNl5FWyj07l1U%2BclZbSU9%2FhDW6A7YErwKiXlWXaLiuKgbK%2BM2IN4ljtLSqr9TVZSXlSms4W8duetUt3zp%2Fw5xUek3y70%2F89o5TSpf7erIAxtV4AUjJrJNRK2T65byGwSSPxA6OQ9ZYH3FK6VJeZrcnnAR9D6u9fQI5k%2BeeZQvB3VcyoS%2BtiGNjcC8NY92iReHr5UCIw9G55d6dMyfGwPbVfMhPTiMNlfL29bl33ZX5ejR7va1%2Fsp8Y4czBh4DcF2gW0mQsk1k19xVW9NgZuU5e%2F5Pv7WL5%2BDul9Ega%2FPrpLO%2F4HuzRqaxo%2BkKgK2Fr2Qiz7YLGy%2BIboc0VqoaMjzJlWNuo7Yilez7BSKhTOqH2RfdlJttWG3MzXTeNzkQ79FmfkoVCCkEV6MyksUHPqlZgPlQnfwdb7hf5pCGoqx0FelCMYWWblc21thdL5banFu26ov3ENIbRfjH%2Btgo%2FP%2BgCifbyY%2F74ANRrZLU9gd1dvkx3yCHMO6byr8GOqUBvr%2BxpQMT2vE6D9VgZOoJtPrlEsmOLMa1bXyPi7B3BTLlqvoxbrDpm1iH92d84n9EVct8%2Fwvzkpgh7gfTsp%2F5Q65zUP8peGvxZDja3qB1qlB1BTLarUhTC8yNSZW%2Fj2RaYPolKfxHVih29v685NmdNazvG9Abv52jUtVRCQFzRbpnMc1laATb4W7kszNVmXj4b7xaDQTCzWyekGCfWl9EQ0HE2n%2Bc&X-Amz-Signature=387474c6f079f5bb008852e1170cbf7ef9c658ad4bb3a28ce6876c478c78fc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWT7C67%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3%2FsVsELVgYmEJxBTu7gPt6Jz65KM8y5qqn4dIpi7fcAiEAyn6RJXK01381qGWg5yritVoNeuEP9eCce%2FpBFmol8D0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKrQJMQbYXhVOQcxSircA4GIaRkbM4OThdN4Is%2B108cn780xkYTM70n6ec3WFPq5pFJTJQQExAnJ%2BHDw%2Bd4H%2FU6sLnzFLDAq0iTQqFosKPeZ%2Bi5Gd%2FSljdzgfGg6pYpYwWVxcb%2Fp%2FlrHA%2BfEwLm7exvrwx8ubWfPNl5FWyj07l1U%2BclZbSU9%2FhDW6A7YErwKiXlWXaLiuKgbK%2BM2IN4ljtLSqr9TVZSXlSms4W8duetUt3zp%2Fw5xUek3y70%2F89o5TSpf7erIAxtV4AUjJrJNRK2T65byGwSSPxA6OQ9ZYH3FK6VJeZrcnnAR9D6u9fQI5k%2BeeZQvB3VcyoS%2BtiGNjcC8NY92iReHr5UCIw9G55d6dMyfGwPbVfMhPTiMNlfL29bl33ZX5ejR7va1%2Fsp8Y4czBh4DcF2gW0mQsk1k19xVW9NgZuU5e%2F5Pv7WL5%2BDul9Ega%2FPrpLO%2F4HuzRqaxo%2BkKgK2Fr2Qiz7YLGy%2BIboc0VqoaMjzJlWNuo7Yilez7BSKhTOqH2RfdlJttWG3MzXTeNzkQ79FmfkoVCCkEV6MyksUHPqlZgPlQnfwdb7hf5pCGoqx0FelCMYWWblc21thdL5banFu26ov3ENIbRfjH%2Btgo%2FP%2BgCifbyY%2F74ANRrZLU9gd1dvkx3yCHMO6byr8GOqUBvr%2BxpQMT2vE6D9VgZOoJtPrlEsmOLMa1bXyPi7B3BTLlqvoxbrDpm1iH92d84n9EVct8%2Fwvzkpgh7gfTsp%2F5Q65zUP8peGvxZDja3qB1qlB1BTLarUhTC8yNSZW%2Fj2RaYPolKfxHVih29v685NmdNazvG9Abv52jUtVRCQFzRbpnMc1laATb4W7kszNVmXj4b7xaDQTCzWyekGCfWl9EQ0HE2n%2Bc&X-Amz-Signature=3f1d662b48ebd3b35bb5cd891173ea6e960659fbdad06cba69c95a00d8f11a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TWT7C67%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T170253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3%2FsVsELVgYmEJxBTu7gPt6Jz65KM8y5qqn4dIpi7fcAiEAyn6RJXK01381qGWg5yritVoNeuEP9eCce%2FpBFmol8D0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKrQJMQbYXhVOQcxSircA4GIaRkbM4OThdN4Is%2B108cn780xkYTM70n6ec3WFPq5pFJTJQQExAnJ%2BHDw%2Bd4H%2FU6sLnzFLDAq0iTQqFosKPeZ%2Bi5Gd%2FSljdzgfGg6pYpYwWVxcb%2Fp%2FlrHA%2BfEwLm7exvrwx8ubWfPNl5FWyj07l1U%2BclZbSU9%2FhDW6A7YErwKiXlWXaLiuKgbK%2BM2IN4ljtLSqr9TVZSXlSms4W8duetUt3zp%2Fw5xUek3y70%2F89o5TSpf7erIAxtV4AUjJrJNRK2T65byGwSSPxA6OQ9ZYH3FK6VJeZrcnnAR9D6u9fQI5k%2BeeZQvB3VcyoS%2BtiGNjcC8NY92iReHr5UCIw9G55d6dMyfGwPbVfMhPTiMNlfL29bl33ZX5ejR7va1%2Fsp8Y4czBh4DcF2gW0mQsk1k19xVW9NgZuU5e%2F5Pv7WL5%2BDul9Ega%2FPrpLO%2F4HuzRqaxo%2BkKgK2Fr2Qiz7YLGy%2BIboc0VqoaMjzJlWNuo7Yilez7BSKhTOqH2RfdlJttWG3MzXTeNzkQ79FmfkoVCCkEV6MyksUHPqlZgPlQnfwdb7hf5pCGoqx0FelCMYWWblc21thdL5banFu26ov3ENIbRfjH%2Btgo%2FP%2BgCifbyY%2F74ANRrZLU9gd1dvkx3yCHMO6byr8GOqUBvr%2BxpQMT2vE6D9VgZOoJtPrlEsmOLMa1bXyPi7B3BTLlqvoxbrDpm1iH92d84n9EVct8%2Fwvzkpgh7gfTsp%2F5Q65zUP8peGvxZDja3qB1qlB1BTLarUhTC8yNSZW%2Fj2RaYPolKfxHVih29v685NmdNazvG9Abv52jUtVRCQFzRbpnMc1laATb4W7kszNVmXj4b7xaDQTCzWyekGCfWl9EQ0HE2n%2Bc&X-Amz-Signature=2476752086969c753229ce9c34e1f3aee5e1a4d12621c27df51d80ded88ea0d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
