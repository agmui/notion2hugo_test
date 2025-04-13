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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPELRK7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFxMOT0QCfbLNMaL4HPwG9yP%2Be%2FXNiqadi3t6ua5JpWYAiAzFGHe%2BZ0tdU1Rgml%2BL1POzc%2FallGf2M%2FLDPFAtYN50SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0VNg1mCVu8Db08QKtwDofvsg3yduHa5%2FbjHwz0BdKls4hayVACfzFLYePBZE79jZ18Q0qjfEGasITqw%2FKr0H2EfQmPGtaGoELVdK1w8IoKpMSmV1KJ1XbCPrD9g2s0QBFfjvoGjOaYL%2B8xnJqamsmzZNlmVsxyeKfXBHx7FUKbYNI8sVggI8Gk9%2B09no9JKSrfbytTy%2BBKna2KxQ06%2BnMe7aRKnxhnJFt23jmmFaWoAlsY2oWUgwLVD%2FBjNxtFlHt57NlxJFwdtsNNNiqkYr9Y473%2Bliz8KdB6RUtDr9mPexq1in9bd3Egn49PHbSSKFjd8x9ABy%2BJha5LMbE98Gsr0xeb75Qy8GnAA6THPJfjNYgrjLILLsis8odBDwtt48r8fS1xlQkzpjKJz6Bv7E5ggSeo9wmawiu6%2FJmJJKOYFg1722I2NdeImUyxcb5Wa9ST1fJBI5%2BQwFqITLhCPBcKNstGvHWkD%2FJ1pSKxgQ0eKkpDv2szFz2jA%2FV82%2BBpv9gDLf3r3jQCOSMjCR9Lg%2FKxNHUnYHauZfUFDQGMmAHa1LQQkt%2FcTcJ6zfnGNWwAMwo8ClH7vifHumZ%2BJYn%2FQaxcy74BTmxOhHY3deoYEju6L6JZsX8MaY%2Bm9yVXlnfkqOISxnJGK4OtRMEowi6PuvwY6pgFbKyYwLzRKRq2u6VLlPwnvaaaPATCofTUdiW2Cj98GVT0fOg2b7dln%2BonFOuZO5kL1adl0%2F6iDax7mhhHNSJRAka%2FOHjWVEPlVYMOMUcTQwvF1W4iyQDqPnaGrjlqdrLQrrQA5iumiJWdb0xaL3gYb5soavAK267QG86SsApke6hUpRIRYKrQ%2B25vcypnua0GXP5BkOq2Q1kMUsz79FLu%2BbdmqbnW%2F&X-Amz-Signature=d95471fc3c45b09ad813e0a8a7315403ab8fe96a02895be25904df0087e5301c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPELRK7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFxMOT0QCfbLNMaL4HPwG9yP%2Be%2FXNiqadi3t6ua5JpWYAiAzFGHe%2BZ0tdU1Rgml%2BL1POzc%2FallGf2M%2FLDPFAtYN50SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0VNg1mCVu8Db08QKtwDofvsg3yduHa5%2FbjHwz0BdKls4hayVACfzFLYePBZE79jZ18Q0qjfEGasITqw%2FKr0H2EfQmPGtaGoELVdK1w8IoKpMSmV1KJ1XbCPrD9g2s0QBFfjvoGjOaYL%2B8xnJqamsmzZNlmVsxyeKfXBHx7FUKbYNI8sVggI8Gk9%2B09no9JKSrfbytTy%2BBKna2KxQ06%2BnMe7aRKnxhnJFt23jmmFaWoAlsY2oWUgwLVD%2FBjNxtFlHt57NlxJFwdtsNNNiqkYr9Y473%2Bliz8KdB6RUtDr9mPexq1in9bd3Egn49PHbSSKFjd8x9ABy%2BJha5LMbE98Gsr0xeb75Qy8GnAA6THPJfjNYgrjLILLsis8odBDwtt48r8fS1xlQkzpjKJz6Bv7E5ggSeo9wmawiu6%2FJmJJKOYFg1722I2NdeImUyxcb5Wa9ST1fJBI5%2BQwFqITLhCPBcKNstGvHWkD%2FJ1pSKxgQ0eKkpDv2szFz2jA%2FV82%2BBpv9gDLf3r3jQCOSMjCR9Lg%2FKxNHUnYHauZfUFDQGMmAHa1LQQkt%2FcTcJ6zfnGNWwAMwo8ClH7vifHumZ%2BJYn%2FQaxcy74BTmxOhHY3deoYEju6L6JZsX8MaY%2Bm9yVXlnfkqOISxnJGK4OtRMEowi6PuvwY6pgFbKyYwLzRKRq2u6VLlPwnvaaaPATCofTUdiW2Cj98GVT0fOg2b7dln%2BonFOuZO5kL1adl0%2F6iDax7mhhHNSJRAka%2FOHjWVEPlVYMOMUcTQwvF1W4iyQDqPnaGrjlqdrLQrrQA5iumiJWdb0xaL3gYb5soavAK267QG86SsApke6hUpRIRYKrQ%2B25vcypnua0GXP5BkOq2Q1kMUsz79FLu%2BbdmqbnW%2F&X-Amz-Signature=91a2d1d22f5d6ffe84892d405085e33e1c1fab9676d7ad832bae6fabba7c156f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPELRK7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFxMOT0QCfbLNMaL4HPwG9yP%2Be%2FXNiqadi3t6ua5JpWYAiAzFGHe%2BZ0tdU1Rgml%2BL1POzc%2FallGf2M%2FLDPFAtYN50SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0VNg1mCVu8Db08QKtwDofvsg3yduHa5%2FbjHwz0BdKls4hayVACfzFLYePBZE79jZ18Q0qjfEGasITqw%2FKr0H2EfQmPGtaGoELVdK1w8IoKpMSmV1KJ1XbCPrD9g2s0QBFfjvoGjOaYL%2B8xnJqamsmzZNlmVsxyeKfXBHx7FUKbYNI8sVggI8Gk9%2B09no9JKSrfbytTy%2BBKna2KxQ06%2BnMe7aRKnxhnJFt23jmmFaWoAlsY2oWUgwLVD%2FBjNxtFlHt57NlxJFwdtsNNNiqkYr9Y473%2Bliz8KdB6RUtDr9mPexq1in9bd3Egn49PHbSSKFjd8x9ABy%2BJha5LMbE98Gsr0xeb75Qy8GnAA6THPJfjNYgrjLILLsis8odBDwtt48r8fS1xlQkzpjKJz6Bv7E5ggSeo9wmawiu6%2FJmJJKOYFg1722I2NdeImUyxcb5Wa9ST1fJBI5%2BQwFqITLhCPBcKNstGvHWkD%2FJ1pSKxgQ0eKkpDv2szFz2jA%2FV82%2BBpv9gDLf3r3jQCOSMjCR9Lg%2FKxNHUnYHauZfUFDQGMmAHa1LQQkt%2FcTcJ6zfnGNWwAMwo8ClH7vifHumZ%2BJYn%2FQaxcy74BTmxOhHY3deoYEju6L6JZsX8MaY%2Bm9yVXlnfkqOISxnJGK4OtRMEowi6PuvwY6pgFbKyYwLzRKRq2u6VLlPwnvaaaPATCofTUdiW2Cj98GVT0fOg2b7dln%2BonFOuZO5kL1adl0%2F6iDax7mhhHNSJRAka%2FOHjWVEPlVYMOMUcTQwvF1W4iyQDqPnaGrjlqdrLQrrQA5iumiJWdb0xaL3gYb5soavAK267QG86SsApke6hUpRIRYKrQ%2B25vcypnua0GXP5BkOq2Q1kMUsz79FLu%2BbdmqbnW%2F&X-Amz-Signature=ba9e7c2385eb05ae1089361e932bb0737e3ab4b6855dd2f0df62d56a37e04e7c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPELRK7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFxMOT0QCfbLNMaL4HPwG9yP%2Be%2FXNiqadi3t6ua5JpWYAiAzFGHe%2BZ0tdU1Rgml%2BL1POzc%2FallGf2M%2FLDPFAtYN50SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0VNg1mCVu8Db08QKtwDofvsg3yduHa5%2FbjHwz0BdKls4hayVACfzFLYePBZE79jZ18Q0qjfEGasITqw%2FKr0H2EfQmPGtaGoELVdK1w8IoKpMSmV1KJ1XbCPrD9g2s0QBFfjvoGjOaYL%2B8xnJqamsmzZNlmVsxyeKfXBHx7FUKbYNI8sVggI8Gk9%2B09no9JKSrfbytTy%2BBKna2KxQ06%2BnMe7aRKnxhnJFt23jmmFaWoAlsY2oWUgwLVD%2FBjNxtFlHt57NlxJFwdtsNNNiqkYr9Y473%2Bliz8KdB6RUtDr9mPexq1in9bd3Egn49PHbSSKFjd8x9ABy%2BJha5LMbE98Gsr0xeb75Qy8GnAA6THPJfjNYgrjLILLsis8odBDwtt48r8fS1xlQkzpjKJz6Bv7E5ggSeo9wmawiu6%2FJmJJKOYFg1722I2NdeImUyxcb5Wa9ST1fJBI5%2BQwFqITLhCPBcKNstGvHWkD%2FJ1pSKxgQ0eKkpDv2szFz2jA%2FV82%2BBpv9gDLf3r3jQCOSMjCR9Lg%2FKxNHUnYHauZfUFDQGMmAHa1LQQkt%2FcTcJ6zfnGNWwAMwo8ClH7vifHumZ%2BJYn%2FQaxcy74BTmxOhHY3deoYEju6L6JZsX8MaY%2Bm9yVXlnfkqOISxnJGK4OtRMEowi6PuvwY6pgFbKyYwLzRKRq2u6VLlPwnvaaaPATCofTUdiW2Cj98GVT0fOg2b7dln%2BonFOuZO5kL1adl0%2F6iDax7mhhHNSJRAka%2FOHjWVEPlVYMOMUcTQwvF1W4iyQDqPnaGrjlqdrLQrrQA5iumiJWdb0xaL3gYb5soavAK267QG86SsApke6hUpRIRYKrQ%2B25vcypnua0GXP5BkOq2Q1kMUsz79FLu%2BbdmqbnW%2F&X-Amz-Signature=a257b029385637752babbd3fd62126ef40d541c176ff8e1be10b55c9efccf8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPELRK7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFxMOT0QCfbLNMaL4HPwG9yP%2Be%2FXNiqadi3t6ua5JpWYAiAzFGHe%2BZ0tdU1Rgml%2BL1POzc%2FallGf2M%2FLDPFAtYN50SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0VNg1mCVu8Db08QKtwDofvsg3yduHa5%2FbjHwz0BdKls4hayVACfzFLYePBZE79jZ18Q0qjfEGasITqw%2FKr0H2EfQmPGtaGoELVdK1w8IoKpMSmV1KJ1XbCPrD9g2s0QBFfjvoGjOaYL%2B8xnJqamsmzZNlmVsxyeKfXBHx7FUKbYNI8sVggI8Gk9%2B09no9JKSrfbytTy%2BBKna2KxQ06%2BnMe7aRKnxhnJFt23jmmFaWoAlsY2oWUgwLVD%2FBjNxtFlHt57NlxJFwdtsNNNiqkYr9Y473%2Bliz8KdB6RUtDr9mPexq1in9bd3Egn49PHbSSKFjd8x9ABy%2BJha5LMbE98Gsr0xeb75Qy8GnAA6THPJfjNYgrjLILLsis8odBDwtt48r8fS1xlQkzpjKJz6Bv7E5ggSeo9wmawiu6%2FJmJJKOYFg1722I2NdeImUyxcb5Wa9ST1fJBI5%2BQwFqITLhCPBcKNstGvHWkD%2FJ1pSKxgQ0eKkpDv2szFz2jA%2FV82%2BBpv9gDLf3r3jQCOSMjCR9Lg%2FKxNHUnYHauZfUFDQGMmAHa1LQQkt%2FcTcJ6zfnGNWwAMwo8ClH7vifHumZ%2BJYn%2FQaxcy74BTmxOhHY3deoYEju6L6JZsX8MaY%2Bm9yVXlnfkqOISxnJGK4OtRMEowi6PuvwY6pgFbKyYwLzRKRq2u6VLlPwnvaaaPATCofTUdiW2Cj98GVT0fOg2b7dln%2BonFOuZO5kL1adl0%2F6iDax7mhhHNSJRAka%2FOHjWVEPlVYMOMUcTQwvF1W4iyQDqPnaGrjlqdrLQrrQA5iumiJWdb0xaL3gYb5soavAK267QG86SsApke6hUpRIRYKrQ%2B25vcypnua0GXP5BkOq2Q1kMUsz79FLu%2BbdmqbnW%2F&X-Amz-Signature=fa5f4af6c209fb4c4a3f305ce335f2be7a669b440d09e70028f1c029f1ff68e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPELRK7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFxMOT0QCfbLNMaL4HPwG9yP%2Be%2FXNiqadi3t6ua5JpWYAiAzFGHe%2BZ0tdU1Rgml%2BL1POzc%2FallGf2M%2FLDPFAtYN50SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0VNg1mCVu8Db08QKtwDofvsg3yduHa5%2FbjHwz0BdKls4hayVACfzFLYePBZE79jZ18Q0qjfEGasITqw%2FKr0H2EfQmPGtaGoELVdK1w8IoKpMSmV1KJ1XbCPrD9g2s0QBFfjvoGjOaYL%2B8xnJqamsmzZNlmVsxyeKfXBHx7FUKbYNI8sVggI8Gk9%2B09no9JKSrfbytTy%2BBKna2KxQ06%2BnMe7aRKnxhnJFt23jmmFaWoAlsY2oWUgwLVD%2FBjNxtFlHt57NlxJFwdtsNNNiqkYr9Y473%2Bliz8KdB6RUtDr9mPexq1in9bd3Egn49PHbSSKFjd8x9ABy%2BJha5LMbE98Gsr0xeb75Qy8GnAA6THPJfjNYgrjLILLsis8odBDwtt48r8fS1xlQkzpjKJz6Bv7E5ggSeo9wmawiu6%2FJmJJKOYFg1722I2NdeImUyxcb5Wa9ST1fJBI5%2BQwFqITLhCPBcKNstGvHWkD%2FJ1pSKxgQ0eKkpDv2szFz2jA%2FV82%2BBpv9gDLf3r3jQCOSMjCR9Lg%2FKxNHUnYHauZfUFDQGMmAHa1LQQkt%2FcTcJ6zfnGNWwAMwo8ClH7vifHumZ%2BJYn%2FQaxcy74BTmxOhHY3deoYEju6L6JZsX8MaY%2Bm9yVXlnfkqOISxnJGK4OtRMEowi6PuvwY6pgFbKyYwLzRKRq2u6VLlPwnvaaaPATCofTUdiW2Cj98GVT0fOg2b7dln%2BonFOuZO5kL1adl0%2F6iDax7mhhHNSJRAka%2FOHjWVEPlVYMOMUcTQwvF1W4iyQDqPnaGrjlqdrLQrrQA5iumiJWdb0xaL3gYb5soavAK267QG86SsApke6hUpRIRYKrQ%2B25vcypnua0GXP5BkOq2Q1kMUsz79FLu%2BbdmqbnW%2F&X-Amz-Signature=d95a46f327f6d6ae9245a0b54053b51e8a66923289f9908dd66ae2c2808bd112&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPELRK7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFxMOT0QCfbLNMaL4HPwG9yP%2Be%2FXNiqadi3t6ua5JpWYAiAzFGHe%2BZ0tdU1Rgml%2BL1POzc%2FallGf2M%2FLDPFAtYN50SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0VNg1mCVu8Db08QKtwDofvsg3yduHa5%2FbjHwz0BdKls4hayVACfzFLYePBZE79jZ18Q0qjfEGasITqw%2FKr0H2EfQmPGtaGoELVdK1w8IoKpMSmV1KJ1XbCPrD9g2s0QBFfjvoGjOaYL%2B8xnJqamsmzZNlmVsxyeKfXBHx7FUKbYNI8sVggI8Gk9%2B09no9JKSrfbytTy%2BBKna2KxQ06%2BnMe7aRKnxhnJFt23jmmFaWoAlsY2oWUgwLVD%2FBjNxtFlHt57NlxJFwdtsNNNiqkYr9Y473%2Bliz8KdB6RUtDr9mPexq1in9bd3Egn49PHbSSKFjd8x9ABy%2BJha5LMbE98Gsr0xeb75Qy8GnAA6THPJfjNYgrjLILLsis8odBDwtt48r8fS1xlQkzpjKJz6Bv7E5ggSeo9wmawiu6%2FJmJJKOYFg1722I2NdeImUyxcb5Wa9ST1fJBI5%2BQwFqITLhCPBcKNstGvHWkD%2FJ1pSKxgQ0eKkpDv2szFz2jA%2FV82%2BBpv9gDLf3r3jQCOSMjCR9Lg%2FKxNHUnYHauZfUFDQGMmAHa1LQQkt%2FcTcJ6zfnGNWwAMwo8ClH7vifHumZ%2BJYn%2FQaxcy74BTmxOhHY3deoYEju6L6JZsX8MaY%2Bm9yVXlnfkqOISxnJGK4OtRMEowi6PuvwY6pgFbKyYwLzRKRq2u6VLlPwnvaaaPATCofTUdiW2Cj98GVT0fOg2b7dln%2BonFOuZO5kL1adl0%2F6iDax7mhhHNSJRAka%2FOHjWVEPlVYMOMUcTQwvF1W4iyQDqPnaGrjlqdrLQrrQA5iumiJWdb0xaL3gYb5soavAK267QG86SsApke6hUpRIRYKrQ%2B25vcypnua0GXP5BkOq2Q1kMUsz79FLu%2BbdmqbnW%2F&X-Amz-Signature=c58449e41eca3072caf73cc1a9f16b56aad1707c0999d19f2eb4358e3d0b7af4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPPELRK7%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFxMOT0QCfbLNMaL4HPwG9yP%2Be%2FXNiqadi3t6ua5JpWYAiAzFGHe%2BZ0tdU1Rgml%2BL1POzc%2FallGf2M%2FLDPFAtYN50SqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx0VNg1mCVu8Db08QKtwDofvsg3yduHa5%2FbjHwz0BdKls4hayVACfzFLYePBZE79jZ18Q0qjfEGasITqw%2FKr0H2EfQmPGtaGoELVdK1w8IoKpMSmV1KJ1XbCPrD9g2s0QBFfjvoGjOaYL%2B8xnJqamsmzZNlmVsxyeKfXBHx7FUKbYNI8sVggI8Gk9%2B09no9JKSrfbytTy%2BBKna2KxQ06%2BnMe7aRKnxhnJFt23jmmFaWoAlsY2oWUgwLVD%2FBjNxtFlHt57NlxJFwdtsNNNiqkYr9Y473%2Bliz8KdB6RUtDr9mPexq1in9bd3Egn49PHbSSKFjd8x9ABy%2BJha5LMbE98Gsr0xeb75Qy8GnAA6THPJfjNYgrjLILLsis8odBDwtt48r8fS1xlQkzpjKJz6Bv7E5ggSeo9wmawiu6%2FJmJJKOYFg1722I2NdeImUyxcb5Wa9ST1fJBI5%2BQwFqITLhCPBcKNstGvHWkD%2FJ1pSKxgQ0eKkpDv2szFz2jA%2FV82%2BBpv9gDLf3r3jQCOSMjCR9Lg%2FKxNHUnYHauZfUFDQGMmAHa1LQQkt%2FcTcJ6zfnGNWwAMwo8ClH7vifHumZ%2BJYn%2FQaxcy74BTmxOhHY3deoYEju6L6JZsX8MaY%2Bm9yVXlnfkqOISxnJGK4OtRMEowi6PuvwY6pgFbKyYwLzRKRq2u6VLlPwnvaaaPATCofTUdiW2Cj98GVT0fOg2b7dln%2BonFOuZO5kL1adl0%2F6iDax7mhhHNSJRAka%2FOHjWVEPlVYMOMUcTQwvF1W4iyQDqPnaGrjlqdrLQrrQA5iumiJWdb0xaL3gYb5soavAK267QG86SsApke6hUpRIRYKrQ%2B25vcypnua0GXP5BkOq2Q1kMUsz79FLu%2BbdmqbnW%2F&X-Amz-Signature=9822b6c8ce19ed075efc27e2043513aee207a88b90120ef9e92eb15a906aa9bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
