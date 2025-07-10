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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3VAJEY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE2uHIVaHkR%2FW18fCiEhC8%2BmMYPMuoeXPHM6u%2Fl2ezlwIgIIemBuMtsk%2FU33VctYNHVKBYK%2FT8r44L47ig5XOge8MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwUuzIs3yBiUItNWyrcAzgIjQONI0FDrhYt1dPxmow91pYryl5stJ4iT013szeV3mEyZ66AY694E3rh9odyk3N2EPu8Jel9YcWeRtZr%2F8j3y1UD7ge6Y16ugixdP2ljxCC%2FbRv9jGKPFOzDch%2F4ym4pnKB9P2eBYCnddkiKEp0VbZM88Rei%2B4m4OvoaLcKQyeKNQDGecr8lToNdkv0DnAf74Y7uPn%2FvWAEqcN3M3boAkhoHpt0oZfOf4CMfdaX2aZNAwOw17HfZ0GwKf2V%2B5fAMcm%2FgGq8FqAy70jeX%2B%2Fy2Ak4PNw744oa3AOJc8yHhUVGVPVrs%2Fhqht2XARYms6xxUMy09lhr%2F0Ms%2BPLSlQ%2BYGYa047lOpU3GRtWddtpw2GHG1zRwnU1Fme2q1pQeXSiU8WCT9AGZxmYfavKWlLKcRpOBhxJrghK%2ByinCBx2gBipUkgIHZmnxlxo1Pf2UXYUqG%2FXXrAPpD5r7lEIcVAfNOwS9x3ugrs%2BXEmLi8MC%2F7hf62%2FI8ZBByHncPpV2H9eO5TO8Ba5IBqfoGZFzura7mt6VMeDEhV%2Bu49mIjf1stFEP4Ofxu1JPIDS434BaouQ0TPI7UyLmsoNlbWMw%2BPZPjTqPkc6JMPrjAWwOqYHPta5hLG1HBVLARIS1cTMMjPvMMGOqUB8mXbD8cIEYiK%2Bfi2GEmh%2BabNqzxEN6bLiI4vHj3PXyoGD%2BWQxd1GFdaUIS5fmFGRhjwcNUNo2u82Fh6x%2BXCdtZbzariMUFdS0uHHoeClzVCnARSl%2BfLLB2LIDZ1q16DnAQAjr7d27yzSRDa2yx9zc25Iyx2AMvFOHRBjL8fU0WxJvCsdBD4M1cFYG%2F4R4oyytIZ3Im%2F0nOzF%2FsyH9m4c8gT%2FagtJ&X-Amz-Signature=992009403a8584c9c146c88184771537f5d4603a68ed840a044554aae84d676f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3VAJEY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE2uHIVaHkR%2FW18fCiEhC8%2BmMYPMuoeXPHM6u%2Fl2ezlwIgIIemBuMtsk%2FU33VctYNHVKBYK%2FT8r44L47ig5XOge8MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwUuzIs3yBiUItNWyrcAzgIjQONI0FDrhYt1dPxmow91pYryl5stJ4iT013szeV3mEyZ66AY694E3rh9odyk3N2EPu8Jel9YcWeRtZr%2F8j3y1UD7ge6Y16ugixdP2ljxCC%2FbRv9jGKPFOzDch%2F4ym4pnKB9P2eBYCnddkiKEp0VbZM88Rei%2B4m4OvoaLcKQyeKNQDGecr8lToNdkv0DnAf74Y7uPn%2FvWAEqcN3M3boAkhoHpt0oZfOf4CMfdaX2aZNAwOw17HfZ0GwKf2V%2B5fAMcm%2FgGq8FqAy70jeX%2B%2Fy2Ak4PNw744oa3AOJc8yHhUVGVPVrs%2Fhqht2XARYms6xxUMy09lhr%2F0Ms%2BPLSlQ%2BYGYa047lOpU3GRtWddtpw2GHG1zRwnU1Fme2q1pQeXSiU8WCT9AGZxmYfavKWlLKcRpOBhxJrghK%2ByinCBx2gBipUkgIHZmnxlxo1Pf2UXYUqG%2FXXrAPpD5r7lEIcVAfNOwS9x3ugrs%2BXEmLi8MC%2F7hf62%2FI8ZBByHncPpV2H9eO5TO8Ba5IBqfoGZFzura7mt6VMeDEhV%2Bu49mIjf1stFEP4Ofxu1JPIDS434BaouQ0TPI7UyLmsoNlbWMw%2BPZPjTqPkc6JMPrjAWwOqYHPta5hLG1HBVLARIS1cTMMjPvMMGOqUB8mXbD8cIEYiK%2Bfi2GEmh%2BabNqzxEN6bLiI4vHj3PXyoGD%2BWQxd1GFdaUIS5fmFGRhjwcNUNo2u82Fh6x%2BXCdtZbzariMUFdS0uHHoeClzVCnARSl%2BfLLB2LIDZ1q16DnAQAjr7d27yzSRDa2yx9zc25Iyx2AMvFOHRBjL8fU0WxJvCsdBD4M1cFYG%2F4R4oyytIZ3Im%2F0nOzF%2FsyH9m4c8gT%2FagtJ&X-Amz-Signature=3458f3e21f97d1c397259462b789189f876d5aa386c592a728e52cfc6e582d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3VAJEY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE2uHIVaHkR%2FW18fCiEhC8%2BmMYPMuoeXPHM6u%2Fl2ezlwIgIIemBuMtsk%2FU33VctYNHVKBYK%2FT8r44L47ig5XOge8MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwUuzIs3yBiUItNWyrcAzgIjQONI0FDrhYt1dPxmow91pYryl5stJ4iT013szeV3mEyZ66AY694E3rh9odyk3N2EPu8Jel9YcWeRtZr%2F8j3y1UD7ge6Y16ugixdP2ljxCC%2FbRv9jGKPFOzDch%2F4ym4pnKB9P2eBYCnddkiKEp0VbZM88Rei%2B4m4OvoaLcKQyeKNQDGecr8lToNdkv0DnAf74Y7uPn%2FvWAEqcN3M3boAkhoHpt0oZfOf4CMfdaX2aZNAwOw17HfZ0GwKf2V%2B5fAMcm%2FgGq8FqAy70jeX%2B%2Fy2Ak4PNw744oa3AOJc8yHhUVGVPVrs%2Fhqht2XARYms6xxUMy09lhr%2F0Ms%2BPLSlQ%2BYGYa047lOpU3GRtWddtpw2GHG1zRwnU1Fme2q1pQeXSiU8WCT9AGZxmYfavKWlLKcRpOBhxJrghK%2ByinCBx2gBipUkgIHZmnxlxo1Pf2UXYUqG%2FXXrAPpD5r7lEIcVAfNOwS9x3ugrs%2BXEmLi8MC%2F7hf62%2FI8ZBByHncPpV2H9eO5TO8Ba5IBqfoGZFzura7mt6VMeDEhV%2Bu49mIjf1stFEP4Ofxu1JPIDS434BaouQ0TPI7UyLmsoNlbWMw%2BPZPjTqPkc6JMPrjAWwOqYHPta5hLG1HBVLARIS1cTMMjPvMMGOqUB8mXbD8cIEYiK%2Bfi2GEmh%2BabNqzxEN6bLiI4vHj3PXyoGD%2BWQxd1GFdaUIS5fmFGRhjwcNUNo2u82Fh6x%2BXCdtZbzariMUFdS0uHHoeClzVCnARSl%2BfLLB2LIDZ1q16DnAQAjr7d27yzSRDa2yx9zc25Iyx2AMvFOHRBjL8fU0WxJvCsdBD4M1cFYG%2F4R4oyytIZ3Im%2F0nOzF%2FsyH9m4c8gT%2FagtJ&X-Amz-Signature=6849f07f91fa9e7dfd1b8a7cbe1598c63df939e3839ae076811e014150837cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3VAJEY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE2uHIVaHkR%2FW18fCiEhC8%2BmMYPMuoeXPHM6u%2Fl2ezlwIgIIemBuMtsk%2FU33VctYNHVKBYK%2FT8r44L47ig5XOge8MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwUuzIs3yBiUItNWyrcAzgIjQONI0FDrhYt1dPxmow91pYryl5stJ4iT013szeV3mEyZ66AY694E3rh9odyk3N2EPu8Jel9YcWeRtZr%2F8j3y1UD7ge6Y16ugixdP2ljxCC%2FbRv9jGKPFOzDch%2F4ym4pnKB9P2eBYCnddkiKEp0VbZM88Rei%2B4m4OvoaLcKQyeKNQDGecr8lToNdkv0DnAf74Y7uPn%2FvWAEqcN3M3boAkhoHpt0oZfOf4CMfdaX2aZNAwOw17HfZ0GwKf2V%2B5fAMcm%2FgGq8FqAy70jeX%2B%2Fy2Ak4PNw744oa3AOJc8yHhUVGVPVrs%2Fhqht2XARYms6xxUMy09lhr%2F0Ms%2BPLSlQ%2BYGYa047lOpU3GRtWddtpw2GHG1zRwnU1Fme2q1pQeXSiU8WCT9AGZxmYfavKWlLKcRpOBhxJrghK%2ByinCBx2gBipUkgIHZmnxlxo1Pf2UXYUqG%2FXXrAPpD5r7lEIcVAfNOwS9x3ugrs%2BXEmLi8MC%2F7hf62%2FI8ZBByHncPpV2H9eO5TO8Ba5IBqfoGZFzura7mt6VMeDEhV%2Bu49mIjf1stFEP4Ofxu1JPIDS434BaouQ0TPI7UyLmsoNlbWMw%2BPZPjTqPkc6JMPrjAWwOqYHPta5hLG1HBVLARIS1cTMMjPvMMGOqUB8mXbD8cIEYiK%2Bfi2GEmh%2BabNqzxEN6bLiI4vHj3PXyoGD%2BWQxd1GFdaUIS5fmFGRhjwcNUNo2u82Fh6x%2BXCdtZbzariMUFdS0uHHoeClzVCnARSl%2BfLLB2LIDZ1q16DnAQAjr7d27yzSRDa2yx9zc25Iyx2AMvFOHRBjL8fU0WxJvCsdBD4M1cFYG%2F4R4oyytIZ3Im%2F0nOzF%2FsyH9m4c8gT%2FagtJ&X-Amz-Signature=d40f3ba099baf3d53555907a7856835ae5e792a49f74e9bd2161b2ea11d1cb4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3VAJEY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE2uHIVaHkR%2FW18fCiEhC8%2BmMYPMuoeXPHM6u%2Fl2ezlwIgIIemBuMtsk%2FU33VctYNHVKBYK%2FT8r44L47ig5XOge8MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwUuzIs3yBiUItNWyrcAzgIjQONI0FDrhYt1dPxmow91pYryl5stJ4iT013szeV3mEyZ66AY694E3rh9odyk3N2EPu8Jel9YcWeRtZr%2F8j3y1UD7ge6Y16ugixdP2ljxCC%2FbRv9jGKPFOzDch%2F4ym4pnKB9P2eBYCnddkiKEp0VbZM88Rei%2B4m4OvoaLcKQyeKNQDGecr8lToNdkv0DnAf74Y7uPn%2FvWAEqcN3M3boAkhoHpt0oZfOf4CMfdaX2aZNAwOw17HfZ0GwKf2V%2B5fAMcm%2FgGq8FqAy70jeX%2B%2Fy2Ak4PNw744oa3AOJc8yHhUVGVPVrs%2Fhqht2XARYms6xxUMy09lhr%2F0Ms%2BPLSlQ%2BYGYa047lOpU3GRtWddtpw2GHG1zRwnU1Fme2q1pQeXSiU8WCT9AGZxmYfavKWlLKcRpOBhxJrghK%2ByinCBx2gBipUkgIHZmnxlxo1Pf2UXYUqG%2FXXrAPpD5r7lEIcVAfNOwS9x3ugrs%2BXEmLi8MC%2F7hf62%2FI8ZBByHncPpV2H9eO5TO8Ba5IBqfoGZFzura7mt6VMeDEhV%2Bu49mIjf1stFEP4Ofxu1JPIDS434BaouQ0TPI7UyLmsoNlbWMw%2BPZPjTqPkc6JMPrjAWwOqYHPta5hLG1HBVLARIS1cTMMjPvMMGOqUB8mXbD8cIEYiK%2Bfi2GEmh%2BabNqzxEN6bLiI4vHj3PXyoGD%2BWQxd1GFdaUIS5fmFGRhjwcNUNo2u82Fh6x%2BXCdtZbzariMUFdS0uHHoeClzVCnARSl%2BfLLB2LIDZ1q16DnAQAjr7d27yzSRDa2yx9zc25Iyx2AMvFOHRBjL8fU0WxJvCsdBD4M1cFYG%2F4R4oyytIZ3Im%2F0nOzF%2FsyH9m4c8gT%2FagtJ&X-Amz-Signature=dcfbe24638de6ba8c8f33fb9f4f4e764e973b076ba6ee9ee1e4fb5a8c5f52441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3VAJEY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE2uHIVaHkR%2FW18fCiEhC8%2BmMYPMuoeXPHM6u%2Fl2ezlwIgIIemBuMtsk%2FU33VctYNHVKBYK%2FT8r44L47ig5XOge8MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwUuzIs3yBiUItNWyrcAzgIjQONI0FDrhYt1dPxmow91pYryl5stJ4iT013szeV3mEyZ66AY694E3rh9odyk3N2EPu8Jel9YcWeRtZr%2F8j3y1UD7ge6Y16ugixdP2ljxCC%2FbRv9jGKPFOzDch%2F4ym4pnKB9P2eBYCnddkiKEp0VbZM88Rei%2B4m4OvoaLcKQyeKNQDGecr8lToNdkv0DnAf74Y7uPn%2FvWAEqcN3M3boAkhoHpt0oZfOf4CMfdaX2aZNAwOw17HfZ0GwKf2V%2B5fAMcm%2FgGq8FqAy70jeX%2B%2Fy2Ak4PNw744oa3AOJc8yHhUVGVPVrs%2Fhqht2XARYms6xxUMy09lhr%2F0Ms%2BPLSlQ%2BYGYa047lOpU3GRtWddtpw2GHG1zRwnU1Fme2q1pQeXSiU8WCT9AGZxmYfavKWlLKcRpOBhxJrghK%2ByinCBx2gBipUkgIHZmnxlxo1Pf2UXYUqG%2FXXrAPpD5r7lEIcVAfNOwS9x3ugrs%2BXEmLi8MC%2F7hf62%2FI8ZBByHncPpV2H9eO5TO8Ba5IBqfoGZFzura7mt6VMeDEhV%2Bu49mIjf1stFEP4Ofxu1JPIDS434BaouQ0TPI7UyLmsoNlbWMw%2BPZPjTqPkc6JMPrjAWwOqYHPta5hLG1HBVLARIS1cTMMjPvMMGOqUB8mXbD8cIEYiK%2Bfi2GEmh%2BabNqzxEN6bLiI4vHj3PXyoGD%2BWQxd1GFdaUIS5fmFGRhjwcNUNo2u82Fh6x%2BXCdtZbzariMUFdS0uHHoeClzVCnARSl%2BfLLB2LIDZ1q16DnAQAjr7d27yzSRDa2yx9zc25Iyx2AMvFOHRBjL8fU0WxJvCsdBD4M1cFYG%2F4R4oyytIZ3Im%2F0nOzF%2FsyH9m4c8gT%2FagtJ&X-Amz-Signature=29009133a21964dfdea19984f1be5c9fe8a9cd6ed31fa971c0460319e1885545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3VAJEY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE2uHIVaHkR%2FW18fCiEhC8%2BmMYPMuoeXPHM6u%2Fl2ezlwIgIIemBuMtsk%2FU33VctYNHVKBYK%2FT8r44L47ig5XOge8MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwUuzIs3yBiUItNWyrcAzgIjQONI0FDrhYt1dPxmow91pYryl5stJ4iT013szeV3mEyZ66AY694E3rh9odyk3N2EPu8Jel9YcWeRtZr%2F8j3y1UD7ge6Y16ugixdP2ljxCC%2FbRv9jGKPFOzDch%2F4ym4pnKB9P2eBYCnddkiKEp0VbZM88Rei%2B4m4OvoaLcKQyeKNQDGecr8lToNdkv0DnAf74Y7uPn%2FvWAEqcN3M3boAkhoHpt0oZfOf4CMfdaX2aZNAwOw17HfZ0GwKf2V%2B5fAMcm%2FgGq8FqAy70jeX%2B%2Fy2Ak4PNw744oa3AOJc8yHhUVGVPVrs%2Fhqht2XARYms6xxUMy09lhr%2F0Ms%2BPLSlQ%2BYGYa047lOpU3GRtWddtpw2GHG1zRwnU1Fme2q1pQeXSiU8WCT9AGZxmYfavKWlLKcRpOBhxJrghK%2ByinCBx2gBipUkgIHZmnxlxo1Pf2UXYUqG%2FXXrAPpD5r7lEIcVAfNOwS9x3ugrs%2BXEmLi8MC%2F7hf62%2FI8ZBByHncPpV2H9eO5TO8Ba5IBqfoGZFzura7mt6VMeDEhV%2Bu49mIjf1stFEP4Ofxu1JPIDS434BaouQ0TPI7UyLmsoNlbWMw%2BPZPjTqPkc6JMPrjAWwOqYHPta5hLG1HBVLARIS1cTMMjPvMMGOqUB8mXbD8cIEYiK%2Bfi2GEmh%2BabNqzxEN6bLiI4vHj3PXyoGD%2BWQxd1GFdaUIS5fmFGRhjwcNUNo2u82Fh6x%2BXCdtZbzariMUFdS0uHHoeClzVCnARSl%2BfLLB2LIDZ1q16DnAQAjr7d27yzSRDa2yx9zc25Iyx2AMvFOHRBjL8fU0WxJvCsdBD4M1cFYG%2F4R4oyytIZ3Im%2F0nOzF%2FsyH9m4c8gT%2FagtJ&X-Amz-Signature=0515ca58840888f92560e9113cf1ebdde9f29a326ea697d8b63c4dca0e594725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3VAJEY%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCE2uHIVaHkR%2FW18fCiEhC8%2BmMYPMuoeXPHM6u%2Fl2ezlwIgIIemBuMtsk%2FU33VctYNHVKBYK%2FT8r44L47ig5XOge8MqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwUuzIs3yBiUItNWyrcAzgIjQONI0FDrhYt1dPxmow91pYryl5stJ4iT013szeV3mEyZ66AY694E3rh9odyk3N2EPu8Jel9YcWeRtZr%2F8j3y1UD7ge6Y16ugixdP2ljxCC%2FbRv9jGKPFOzDch%2F4ym4pnKB9P2eBYCnddkiKEp0VbZM88Rei%2B4m4OvoaLcKQyeKNQDGecr8lToNdkv0DnAf74Y7uPn%2FvWAEqcN3M3boAkhoHpt0oZfOf4CMfdaX2aZNAwOw17HfZ0GwKf2V%2B5fAMcm%2FgGq8FqAy70jeX%2B%2Fy2Ak4PNw744oa3AOJc8yHhUVGVPVrs%2Fhqht2XARYms6xxUMy09lhr%2F0Ms%2BPLSlQ%2BYGYa047lOpU3GRtWddtpw2GHG1zRwnU1Fme2q1pQeXSiU8WCT9AGZxmYfavKWlLKcRpOBhxJrghK%2ByinCBx2gBipUkgIHZmnxlxo1Pf2UXYUqG%2FXXrAPpD5r7lEIcVAfNOwS9x3ugrs%2BXEmLi8MC%2F7hf62%2FI8ZBByHncPpV2H9eO5TO8Ba5IBqfoGZFzura7mt6VMeDEhV%2Bu49mIjf1stFEP4Ofxu1JPIDS434BaouQ0TPI7UyLmsoNlbWMw%2BPZPjTqPkc6JMPrjAWwOqYHPta5hLG1HBVLARIS1cTMMjPvMMGOqUB8mXbD8cIEYiK%2Bfi2GEmh%2BabNqzxEN6bLiI4vHj3PXyoGD%2BWQxd1GFdaUIS5fmFGRhjwcNUNo2u82Fh6x%2BXCdtZbzariMUFdS0uHHoeClzVCnARSl%2BfLLB2LIDZ1q16DnAQAjr7d27yzSRDa2yx9zc25Iyx2AMvFOHRBjL8fU0WxJvCsdBD4M1cFYG%2F4R4oyytIZ3Im%2F0nOzF%2FsyH9m4c8gT%2FagtJ&X-Amz-Signature=bb1cdbaa94aa57f73e25a007e6fc9c5f3f9e0d4d4ed08d447cbdf7426971bcac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
