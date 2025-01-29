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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQ3VUQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfnmBka56x1WSoFGq7TNqcb2ad2MOy%2Bejy6FBx%2BtJ9mAiEAw6CfeMqfAzWuvTEt1qlekTfz7SDehx6cWHRJ71WN4r4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI1I3%2FTzkpiIoJUBSrcA7wSfZNUI0oyRVNr4gKaftZ00eWx0tSbORibz7jA%2FqKgcmONtuTt5UTYFuKRLB9Z1X8Bo7CrgnoJGNaSVxivdN5rWNqnpz8C4amOTmreSTWrMqbvP6CtdX1FZSKblF7TQWPi9YEVNGdxl2xRg2RbFXyscIAZS%2FZs1G3MXHc44PJqVc1awUIoVtpXDBmxbZn7oBA7uW0mozwrlkhSOGujtAx11BcpXU%2BPmYBPbk7xW0miluHwQb09Hsuze3Dzzw8O65qc4qDUNNKK0ZjRkfnRR%2B1JGsjX4XpKiVFkFL8hnPsqRusUEbp153G6ZB8n%2FT6WGxX4ipTIUma%2BldRFV2TJH3TCj4SdcbOXa0IoY7xCyYwWdOUsryeqH9rsOk29IcBYQ3%2FBqVmJJ2ql%2BfgW4mOHzMCfyWwHmcHF9T6cSUGVUW2iKOtjNxDegPHztY8%2BYrBuSoJReUUfrL7Bs3vYHiuHZYdfi7gcvoxv%2BS4fskNs3OUijbvgvfzpHF5bo4vZEqw567dgZJ4otskEBvv0keXrz2%2BO%2BoC0%2BL4uUH3JlhAiDD3rg1UOFJ7hpDuxEIlXS2ZkP4x9Fm6R%2BCjI%2Fc7jHe4Kh9n1Q8psEDh%2FWdQ4kywk0hEiQt1lPqjazOLwfD4mMKCS57wGOqUB1JE5u6tHRHWhYHv%2FX14o39SyPR198XLfbXpd8HvN0QMmdeIdpMSkVAenQIpsQ9%2BLXcz0iM2sHQ5uezO%2FR6VWDvWtPVgjs9YiDR9Mu%2BoT1ZCxoX1XDxo6p4yxprHh6Q3KxIvp%2FK0ArnwGnQ7%2FJuanTO1URN%2B2FoNFEpYMsBtP2sGHKUigi9q5liJJzwvNph5JQuCwDdk0wl%2Bf4b0lnWvLM8lkDgZV&X-Amz-Signature=8cfb39836955f38e1b89cb32775fce9b79ce715bfbce9e41b0899be135507464&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQ3VUQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfnmBka56x1WSoFGq7TNqcb2ad2MOy%2Bejy6FBx%2BtJ9mAiEAw6CfeMqfAzWuvTEt1qlekTfz7SDehx6cWHRJ71WN4r4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI1I3%2FTzkpiIoJUBSrcA7wSfZNUI0oyRVNr4gKaftZ00eWx0tSbORibz7jA%2FqKgcmONtuTt5UTYFuKRLB9Z1X8Bo7CrgnoJGNaSVxivdN5rWNqnpz8C4amOTmreSTWrMqbvP6CtdX1FZSKblF7TQWPi9YEVNGdxl2xRg2RbFXyscIAZS%2FZs1G3MXHc44PJqVc1awUIoVtpXDBmxbZn7oBA7uW0mozwrlkhSOGujtAx11BcpXU%2BPmYBPbk7xW0miluHwQb09Hsuze3Dzzw8O65qc4qDUNNKK0ZjRkfnRR%2B1JGsjX4XpKiVFkFL8hnPsqRusUEbp153G6ZB8n%2FT6WGxX4ipTIUma%2BldRFV2TJH3TCj4SdcbOXa0IoY7xCyYwWdOUsryeqH9rsOk29IcBYQ3%2FBqVmJJ2ql%2BfgW4mOHzMCfyWwHmcHF9T6cSUGVUW2iKOtjNxDegPHztY8%2BYrBuSoJReUUfrL7Bs3vYHiuHZYdfi7gcvoxv%2BS4fskNs3OUijbvgvfzpHF5bo4vZEqw567dgZJ4otskEBvv0keXrz2%2BO%2BoC0%2BL4uUH3JlhAiDD3rg1UOFJ7hpDuxEIlXS2ZkP4x9Fm6R%2BCjI%2Fc7jHe4Kh9n1Q8psEDh%2FWdQ4kywk0hEiQt1lPqjazOLwfD4mMKCS57wGOqUB1JE5u6tHRHWhYHv%2FX14o39SyPR198XLfbXpd8HvN0QMmdeIdpMSkVAenQIpsQ9%2BLXcz0iM2sHQ5uezO%2FR6VWDvWtPVgjs9YiDR9Mu%2BoT1ZCxoX1XDxo6p4yxprHh6Q3KxIvp%2FK0ArnwGnQ7%2FJuanTO1URN%2B2FoNFEpYMsBtP2sGHKUigi9q5liJJzwvNph5JQuCwDdk0wl%2Bf4b0lnWvLM8lkDgZV&X-Amz-Signature=d2570ad14e2cb14d8bcda49cd4e1771ee17a07e51aaf750392393aa35d2b90a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQ3VUQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfnmBka56x1WSoFGq7TNqcb2ad2MOy%2Bejy6FBx%2BtJ9mAiEAw6CfeMqfAzWuvTEt1qlekTfz7SDehx6cWHRJ71WN4r4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI1I3%2FTzkpiIoJUBSrcA7wSfZNUI0oyRVNr4gKaftZ00eWx0tSbORibz7jA%2FqKgcmONtuTt5UTYFuKRLB9Z1X8Bo7CrgnoJGNaSVxivdN5rWNqnpz8C4amOTmreSTWrMqbvP6CtdX1FZSKblF7TQWPi9YEVNGdxl2xRg2RbFXyscIAZS%2FZs1G3MXHc44PJqVc1awUIoVtpXDBmxbZn7oBA7uW0mozwrlkhSOGujtAx11BcpXU%2BPmYBPbk7xW0miluHwQb09Hsuze3Dzzw8O65qc4qDUNNKK0ZjRkfnRR%2B1JGsjX4XpKiVFkFL8hnPsqRusUEbp153G6ZB8n%2FT6WGxX4ipTIUma%2BldRFV2TJH3TCj4SdcbOXa0IoY7xCyYwWdOUsryeqH9rsOk29IcBYQ3%2FBqVmJJ2ql%2BfgW4mOHzMCfyWwHmcHF9T6cSUGVUW2iKOtjNxDegPHztY8%2BYrBuSoJReUUfrL7Bs3vYHiuHZYdfi7gcvoxv%2BS4fskNs3OUijbvgvfzpHF5bo4vZEqw567dgZJ4otskEBvv0keXrz2%2BO%2BoC0%2BL4uUH3JlhAiDD3rg1UOFJ7hpDuxEIlXS2ZkP4x9Fm6R%2BCjI%2Fc7jHe4Kh9n1Q8psEDh%2FWdQ4kywk0hEiQt1lPqjazOLwfD4mMKCS57wGOqUB1JE5u6tHRHWhYHv%2FX14o39SyPR198XLfbXpd8HvN0QMmdeIdpMSkVAenQIpsQ9%2BLXcz0iM2sHQ5uezO%2FR6VWDvWtPVgjs9YiDR9Mu%2BoT1ZCxoX1XDxo6p4yxprHh6Q3KxIvp%2FK0ArnwGnQ7%2FJuanTO1URN%2B2FoNFEpYMsBtP2sGHKUigi9q5liJJzwvNph5JQuCwDdk0wl%2Bf4b0lnWvLM8lkDgZV&X-Amz-Signature=36bf5f477a493f4015581c5400c21ab7aacfa0078c1b44a34cbfc7101f3bcdbe&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQ3VUQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfnmBka56x1WSoFGq7TNqcb2ad2MOy%2Bejy6FBx%2BtJ9mAiEAw6CfeMqfAzWuvTEt1qlekTfz7SDehx6cWHRJ71WN4r4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI1I3%2FTzkpiIoJUBSrcA7wSfZNUI0oyRVNr4gKaftZ00eWx0tSbORibz7jA%2FqKgcmONtuTt5UTYFuKRLB9Z1X8Bo7CrgnoJGNaSVxivdN5rWNqnpz8C4amOTmreSTWrMqbvP6CtdX1FZSKblF7TQWPi9YEVNGdxl2xRg2RbFXyscIAZS%2FZs1G3MXHc44PJqVc1awUIoVtpXDBmxbZn7oBA7uW0mozwrlkhSOGujtAx11BcpXU%2BPmYBPbk7xW0miluHwQb09Hsuze3Dzzw8O65qc4qDUNNKK0ZjRkfnRR%2B1JGsjX4XpKiVFkFL8hnPsqRusUEbp153G6ZB8n%2FT6WGxX4ipTIUma%2BldRFV2TJH3TCj4SdcbOXa0IoY7xCyYwWdOUsryeqH9rsOk29IcBYQ3%2FBqVmJJ2ql%2BfgW4mOHzMCfyWwHmcHF9T6cSUGVUW2iKOtjNxDegPHztY8%2BYrBuSoJReUUfrL7Bs3vYHiuHZYdfi7gcvoxv%2BS4fskNs3OUijbvgvfzpHF5bo4vZEqw567dgZJ4otskEBvv0keXrz2%2BO%2BoC0%2BL4uUH3JlhAiDD3rg1UOFJ7hpDuxEIlXS2ZkP4x9Fm6R%2BCjI%2Fc7jHe4Kh9n1Q8psEDh%2FWdQ4kywk0hEiQt1lPqjazOLwfD4mMKCS57wGOqUB1JE5u6tHRHWhYHv%2FX14o39SyPR198XLfbXpd8HvN0QMmdeIdpMSkVAenQIpsQ9%2BLXcz0iM2sHQ5uezO%2FR6VWDvWtPVgjs9YiDR9Mu%2BoT1ZCxoX1XDxo6p4yxprHh6Q3KxIvp%2FK0ArnwGnQ7%2FJuanTO1URN%2B2FoNFEpYMsBtP2sGHKUigi9q5liJJzwvNph5JQuCwDdk0wl%2Bf4b0lnWvLM8lkDgZV&X-Amz-Signature=a976a8f60eeba070bd4ffc90ef0efb5c4e2fe851528a4ee3cda820be6bf601f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQ3VUQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfnmBka56x1WSoFGq7TNqcb2ad2MOy%2Bejy6FBx%2BtJ9mAiEAw6CfeMqfAzWuvTEt1qlekTfz7SDehx6cWHRJ71WN4r4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI1I3%2FTzkpiIoJUBSrcA7wSfZNUI0oyRVNr4gKaftZ00eWx0tSbORibz7jA%2FqKgcmONtuTt5UTYFuKRLB9Z1X8Bo7CrgnoJGNaSVxivdN5rWNqnpz8C4amOTmreSTWrMqbvP6CtdX1FZSKblF7TQWPi9YEVNGdxl2xRg2RbFXyscIAZS%2FZs1G3MXHc44PJqVc1awUIoVtpXDBmxbZn7oBA7uW0mozwrlkhSOGujtAx11BcpXU%2BPmYBPbk7xW0miluHwQb09Hsuze3Dzzw8O65qc4qDUNNKK0ZjRkfnRR%2B1JGsjX4XpKiVFkFL8hnPsqRusUEbp153G6ZB8n%2FT6WGxX4ipTIUma%2BldRFV2TJH3TCj4SdcbOXa0IoY7xCyYwWdOUsryeqH9rsOk29IcBYQ3%2FBqVmJJ2ql%2BfgW4mOHzMCfyWwHmcHF9T6cSUGVUW2iKOtjNxDegPHztY8%2BYrBuSoJReUUfrL7Bs3vYHiuHZYdfi7gcvoxv%2BS4fskNs3OUijbvgvfzpHF5bo4vZEqw567dgZJ4otskEBvv0keXrz2%2BO%2BoC0%2BL4uUH3JlhAiDD3rg1UOFJ7hpDuxEIlXS2ZkP4x9Fm6R%2BCjI%2Fc7jHe4Kh9n1Q8psEDh%2FWdQ4kywk0hEiQt1lPqjazOLwfD4mMKCS57wGOqUB1JE5u6tHRHWhYHv%2FX14o39SyPR198XLfbXpd8HvN0QMmdeIdpMSkVAenQIpsQ9%2BLXcz0iM2sHQ5uezO%2FR6VWDvWtPVgjs9YiDR9Mu%2BoT1ZCxoX1XDxo6p4yxprHh6Q3KxIvp%2FK0ArnwGnQ7%2FJuanTO1URN%2B2FoNFEpYMsBtP2sGHKUigi9q5liJJzwvNph5JQuCwDdk0wl%2Bf4b0lnWvLM8lkDgZV&X-Amz-Signature=444d072089591eba0715fd02f0d2509c0181f56a1f7265756ddef9d3fbc2de9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQ3VUQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfnmBka56x1WSoFGq7TNqcb2ad2MOy%2Bejy6FBx%2BtJ9mAiEAw6CfeMqfAzWuvTEt1qlekTfz7SDehx6cWHRJ71WN4r4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI1I3%2FTzkpiIoJUBSrcA7wSfZNUI0oyRVNr4gKaftZ00eWx0tSbORibz7jA%2FqKgcmONtuTt5UTYFuKRLB9Z1X8Bo7CrgnoJGNaSVxivdN5rWNqnpz8C4amOTmreSTWrMqbvP6CtdX1FZSKblF7TQWPi9YEVNGdxl2xRg2RbFXyscIAZS%2FZs1G3MXHc44PJqVc1awUIoVtpXDBmxbZn7oBA7uW0mozwrlkhSOGujtAx11BcpXU%2BPmYBPbk7xW0miluHwQb09Hsuze3Dzzw8O65qc4qDUNNKK0ZjRkfnRR%2B1JGsjX4XpKiVFkFL8hnPsqRusUEbp153G6ZB8n%2FT6WGxX4ipTIUma%2BldRFV2TJH3TCj4SdcbOXa0IoY7xCyYwWdOUsryeqH9rsOk29IcBYQ3%2FBqVmJJ2ql%2BfgW4mOHzMCfyWwHmcHF9T6cSUGVUW2iKOtjNxDegPHztY8%2BYrBuSoJReUUfrL7Bs3vYHiuHZYdfi7gcvoxv%2BS4fskNs3OUijbvgvfzpHF5bo4vZEqw567dgZJ4otskEBvv0keXrz2%2BO%2BoC0%2BL4uUH3JlhAiDD3rg1UOFJ7hpDuxEIlXS2ZkP4x9Fm6R%2BCjI%2Fc7jHe4Kh9n1Q8psEDh%2FWdQ4kywk0hEiQt1lPqjazOLwfD4mMKCS57wGOqUB1JE5u6tHRHWhYHv%2FX14o39SyPR198XLfbXpd8HvN0QMmdeIdpMSkVAenQIpsQ9%2BLXcz0iM2sHQ5uezO%2FR6VWDvWtPVgjs9YiDR9Mu%2BoT1ZCxoX1XDxo6p4yxprHh6Q3KxIvp%2FK0ArnwGnQ7%2FJuanTO1URN%2B2FoNFEpYMsBtP2sGHKUigi9q5liJJzwvNph5JQuCwDdk0wl%2Bf4b0lnWvLM8lkDgZV&X-Amz-Signature=ddd3af848bab23be6e002a23fba8099d4652063af68c26a896a7b1b2c5597bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQ3VUQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfnmBka56x1WSoFGq7TNqcb2ad2MOy%2Bejy6FBx%2BtJ9mAiEAw6CfeMqfAzWuvTEt1qlekTfz7SDehx6cWHRJ71WN4r4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI1I3%2FTzkpiIoJUBSrcA7wSfZNUI0oyRVNr4gKaftZ00eWx0tSbORibz7jA%2FqKgcmONtuTt5UTYFuKRLB9Z1X8Bo7CrgnoJGNaSVxivdN5rWNqnpz8C4amOTmreSTWrMqbvP6CtdX1FZSKblF7TQWPi9YEVNGdxl2xRg2RbFXyscIAZS%2FZs1G3MXHc44PJqVc1awUIoVtpXDBmxbZn7oBA7uW0mozwrlkhSOGujtAx11BcpXU%2BPmYBPbk7xW0miluHwQb09Hsuze3Dzzw8O65qc4qDUNNKK0ZjRkfnRR%2B1JGsjX4XpKiVFkFL8hnPsqRusUEbp153G6ZB8n%2FT6WGxX4ipTIUma%2BldRFV2TJH3TCj4SdcbOXa0IoY7xCyYwWdOUsryeqH9rsOk29IcBYQ3%2FBqVmJJ2ql%2BfgW4mOHzMCfyWwHmcHF9T6cSUGVUW2iKOtjNxDegPHztY8%2BYrBuSoJReUUfrL7Bs3vYHiuHZYdfi7gcvoxv%2BS4fskNs3OUijbvgvfzpHF5bo4vZEqw567dgZJ4otskEBvv0keXrz2%2BO%2BoC0%2BL4uUH3JlhAiDD3rg1UOFJ7hpDuxEIlXS2ZkP4x9Fm6R%2BCjI%2Fc7jHe4Kh9n1Q8psEDh%2FWdQ4kywk0hEiQt1lPqjazOLwfD4mMKCS57wGOqUB1JE5u6tHRHWhYHv%2FX14o39SyPR198XLfbXpd8HvN0QMmdeIdpMSkVAenQIpsQ9%2BLXcz0iM2sHQ5uezO%2FR6VWDvWtPVgjs9YiDR9Mu%2BoT1ZCxoX1XDxo6p4yxprHh6Q3KxIvp%2FK0ArnwGnQ7%2FJuanTO1URN%2B2FoNFEpYMsBtP2sGHKUigi9q5liJJzwvNph5JQuCwDdk0wl%2Bf4b0lnWvLM8lkDgZV&X-Amz-Signature=1950d4c9aa87020842e35da1cf3b2cabbb79e3aea4f36dfb9c4ae104ded86cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQ3VUQE%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T070733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGfnmBka56x1WSoFGq7TNqcb2ad2MOy%2Bejy6FBx%2BtJ9mAiEAw6CfeMqfAzWuvTEt1qlekTfz7SDehx6cWHRJ71WN4r4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNI1I3%2FTzkpiIoJUBSrcA7wSfZNUI0oyRVNr4gKaftZ00eWx0tSbORibz7jA%2FqKgcmONtuTt5UTYFuKRLB9Z1X8Bo7CrgnoJGNaSVxivdN5rWNqnpz8C4amOTmreSTWrMqbvP6CtdX1FZSKblF7TQWPi9YEVNGdxl2xRg2RbFXyscIAZS%2FZs1G3MXHc44PJqVc1awUIoVtpXDBmxbZn7oBA7uW0mozwrlkhSOGujtAx11BcpXU%2BPmYBPbk7xW0miluHwQb09Hsuze3Dzzw8O65qc4qDUNNKK0ZjRkfnRR%2B1JGsjX4XpKiVFkFL8hnPsqRusUEbp153G6ZB8n%2FT6WGxX4ipTIUma%2BldRFV2TJH3TCj4SdcbOXa0IoY7xCyYwWdOUsryeqH9rsOk29IcBYQ3%2FBqVmJJ2ql%2BfgW4mOHzMCfyWwHmcHF9T6cSUGVUW2iKOtjNxDegPHztY8%2BYrBuSoJReUUfrL7Bs3vYHiuHZYdfi7gcvoxv%2BS4fskNs3OUijbvgvfzpHF5bo4vZEqw567dgZJ4otskEBvv0keXrz2%2BO%2BoC0%2BL4uUH3JlhAiDD3rg1UOFJ7hpDuxEIlXS2ZkP4x9Fm6R%2BCjI%2Fc7jHe4Kh9n1Q8psEDh%2FWdQ4kywk0hEiQt1lPqjazOLwfD4mMKCS57wGOqUB1JE5u6tHRHWhYHv%2FX14o39SyPR198XLfbXpd8HvN0QMmdeIdpMSkVAenQIpsQ9%2BLXcz0iM2sHQ5uezO%2FR6VWDvWtPVgjs9YiDR9Mu%2BoT1ZCxoX1XDxo6p4yxprHh6Q3KxIvp%2FK0ArnwGnQ7%2FJuanTO1URN%2B2FoNFEpYMsBtP2sGHKUigi9q5liJJzwvNph5JQuCwDdk0wl%2Bf4b0lnWvLM8lkDgZV&X-Amz-Signature=d62e5fed54aa0046b55ac85446df16c6f8c0a256fe3df25b10090194e004ddb4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
