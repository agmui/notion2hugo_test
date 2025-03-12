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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPPEIIY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIF1DkJqsUsD%2Fp7Yi2h6RnCTpTjmlvQ5QFxTr7lN7y3Z1AiAFwfajp070fhuuh8m1cVxN8LoTtAZosIgdzlI84t9QWiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUCDOsasK5T8YUr7HKtwDx1M41JEquFyDeFIL5aW0Wz47ctiYOkrrkzKdS7AuY28kiMUf0L3wLHn0X%2BjafQwqpUYv%2B3PcYHduwsI5oHTiOhEpwV7VZzmQ5M2pPwuy1gyQiaUzQEHDpkml4vg%2FOZ41y3jqpaRDSAnwABWOTFdTNncOmRmkMLzEg5osQ3HbLcYFPLQBHG7uNoOiAfMMUk%2FpTMmbVGtyq7UamsuBzljIyskf96D50aPyttEVzSvY0M01sMCA%2F8qXvNBzt1OQK%2B66Z9RCmUl78H%2FtGjBUBRolUWsz%2FlN3IaOW2YGgt67ABTBul79nhubDKuZhAYlSVjf7oPjni1z1EHnR4a68jWF%2B8piK%2BLtpRELrtaXAYEm7S%2FZbuLd0XPsF%2BTRV%2FfEjEofQjob0ZwJuzsv3%2F7Rb2UGVXxBuJsFmwkXT4X5zHO4S5%2BG7EDE4LdsV4trPRXqpDiEi46zY8TULMOtkfdI0vGKZovuxnh%2BfSRLSSwMhYNd9ybn1RGTANCKm2LOfwJAeMSgW8%2Fc%2BLGlLm6RwGnRIUyR1tFvE%2B5S9mzRhftu8MxulNdmH7G9eJb8Oisn7iPP2sCWmm5iGVHH%2Fe3%2ByDKN5lB7pi9EtJa6zJoCQpeU%2FBNX32lkOB%2BavXDRRCg3DOOkwvNvEvgY6pgGpQXwwy5B8kNeKW2z4AK0Xz%2FwsJQ9qbe9AEjXsxi5JKOUgzNcJMoobRmuDXw4DfinxRoCQ0yD22gLkCxGiy9SLQN1afieMyWxMOY6JNQGHUZhcLMJJ4vLS%2FwdgQGvgr8uzePMZNlq7VN6FLZZMhOBGOnqFWIEzQAvYLP7l6NlTY08vxYdScnpB%2FNfuY1L4aXEOJsNsEsHDga3zN4FngLMlTGMqpJCG&X-Amz-Signature=643d3659c650a6cf0de9377b2358a2141df6eb4206aaf6a72d811976b01e059b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPPEIIY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIF1DkJqsUsD%2Fp7Yi2h6RnCTpTjmlvQ5QFxTr7lN7y3Z1AiAFwfajp070fhuuh8m1cVxN8LoTtAZosIgdzlI84t9QWiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUCDOsasK5T8YUr7HKtwDx1M41JEquFyDeFIL5aW0Wz47ctiYOkrrkzKdS7AuY28kiMUf0L3wLHn0X%2BjafQwqpUYv%2B3PcYHduwsI5oHTiOhEpwV7VZzmQ5M2pPwuy1gyQiaUzQEHDpkml4vg%2FOZ41y3jqpaRDSAnwABWOTFdTNncOmRmkMLzEg5osQ3HbLcYFPLQBHG7uNoOiAfMMUk%2FpTMmbVGtyq7UamsuBzljIyskf96D50aPyttEVzSvY0M01sMCA%2F8qXvNBzt1OQK%2B66Z9RCmUl78H%2FtGjBUBRolUWsz%2FlN3IaOW2YGgt67ABTBul79nhubDKuZhAYlSVjf7oPjni1z1EHnR4a68jWF%2B8piK%2BLtpRELrtaXAYEm7S%2FZbuLd0XPsF%2BTRV%2FfEjEofQjob0ZwJuzsv3%2F7Rb2UGVXxBuJsFmwkXT4X5zHO4S5%2BG7EDE4LdsV4trPRXqpDiEi46zY8TULMOtkfdI0vGKZovuxnh%2BfSRLSSwMhYNd9ybn1RGTANCKm2LOfwJAeMSgW8%2Fc%2BLGlLm6RwGnRIUyR1tFvE%2B5S9mzRhftu8MxulNdmH7G9eJb8Oisn7iPP2sCWmm5iGVHH%2Fe3%2ByDKN5lB7pi9EtJa6zJoCQpeU%2FBNX32lkOB%2BavXDRRCg3DOOkwvNvEvgY6pgGpQXwwy5B8kNeKW2z4AK0Xz%2FwsJQ9qbe9AEjXsxi5JKOUgzNcJMoobRmuDXw4DfinxRoCQ0yD22gLkCxGiy9SLQN1afieMyWxMOY6JNQGHUZhcLMJJ4vLS%2FwdgQGvgr8uzePMZNlq7VN6FLZZMhOBGOnqFWIEzQAvYLP7l6NlTY08vxYdScnpB%2FNfuY1L4aXEOJsNsEsHDga3zN4FngLMlTGMqpJCG&X-Amz-Signature=1bfa25f7e0e2ca1ce957345c6146adf0a16dacf32182b2b900364a3d151adfa8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPPEIIY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIF1DkJqsUsD%2Fp7Yi2h6RnCTpTjmlvQ5QFxTr7lN7y3Z1AiAFwfajp070fhuuh8m1cVxN8LoTtAZosIgdzlI84t9QWiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUCDOsasK5T8YUr7HKtwDx1M41JEquFyDeFIL5aW0Wz47ctiYOkrrkzKdS7AuY28kiMUf0L3wLHn0X%2BjafQwqpUYv%2B3PcYHduwsI5oHTiOhEpwV7VZzmQ5M2pPwuy1gyQiaUzQEHDpkml4vg%2FOZ41y3jqpaRDSAnwABWOTFdTNncOmRmkMLzEg5osQ3HbLcYFPLQBHG7uNoOiAfMMUk%2FpTMmbVGtyq7UamsuBzljIyskf96D50aPyttEVzSvY0M01sMCA%2F8qXvNBzt1OQK%2B66Z9RCmUl78H%2FtGjBUBRolUWsz%2FlN3IaOW2YGgt67ABTBul79nhubDKuZhAYlSVjf7oPjni1z1EHnR4a68jWF%2B8piK%2BLtpRELrtaXAYEm7S%2FZbuLd0XPsF%2BTRV%2FfEjEofQjob0ZwJuzsv3%2F7Rb2UGVXxBuJsFmwkXT4X5zHO4S5%2BG7EDE4LdsV4trPRXqpDiEi46zY8TULMOtkfdI0vGKZovuxnh%2BfSRLSSwMhYNd9ybn1RGTANCKm2LOfwJAeMSgW8%2Fc%2BLGlLm6RwGnRIUyR1tFvE%2B5S9mzRhftu8MxulNdmH7G9eJb8Oisn7iPP2sCWmm5iGVHH%2Fe3%2ByDKN5lB7pi9EtJa6zJoCQpeU%2FBNX32lkOB%2BavXDRRCg3DOOkwvNvEvgY6pgGpQXwwy5B8kNeKW2z4AK0Xz%2FwsJQ9qbe9AEjXsxi5JKOUgzNcJMoobRmuDXw4DfinxRoCQ0yD22gLkCxGiy9SLQN1afieMyWxMOY6JNQGHUZhcLMJJ4vLS%2FwdgQGvgr8uzePMZNlq7VN6FLZZMhOBGOnqFWIEzQAvYLP7l6NlTY08vxYdScnpB%2FNfuY1L4aXEOJsNsEsHDga3zN4FngLMlTGMqpJCG&X-Amz-Signature=4ff01aa3a533cf385cf12c6ea424afd6abb6b3b859f48481006faf1c14be014f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPPEIIY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIF1DkJqsUsD%2Fp7Yi2h6RnCTpTjmlvQ5QFxTr7lN7y3Z1AiAFwfajp070fhuuh8m1cVxN8LoTtAZosIgdzlI84t9QWiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUCDOsasK5T8YUr7HKtwDx1M41JEquFyDeFIL5aW0Wz47ctiYOkrrkzKdS7AuY28kiMUf0L3wLHn0X%2BjafQwqpUYv%2B3PcYHduwsI5oHTiOhEpwV7VZzmQ5M2pPwuy1gyQiaUzQEHDpkml4vg%2FOZ41y3jqpaRDSAnwABWOTFdTNncOmRmkMLzEg5osQ3HbLcYFPLQBHG7uNoOiAfMMUk%2FpTMmbVGtyq7UamsuBzljIyskf96D50aPyttEVzSvY0M01sMCA%2F8qXvNBzt1OQK%2B66Z9RCmUl78H%2FtGjBUBRolUWsz%2FlN3IaOW2YGgt67ABTBul79nhubDKuZhAYlSVjf7oPjni1z1EHnR4a68jWF%2B8piK%2BLtpRELrtaXAYEm7S%2FZbuLd0XPsF%2BTRV%2FfEjEofQjob0ZwJuzsv3%2F7Rb2UGVXxBuJsFmwkXT4X5zHO4S5%2BG7EDE4LdsV4trPRXqpDiEi46zY8TULMOtkfdI0vGKZovuxnh%2BfSRLSSwMhYNd9ybn1RGTANCKm2LOfwJAeMSgW8%2Fc%2BLGlLm6RwGnRIUyR1tFvE%2B5S9mzRhftu8MxulNdmH7G9eJb8Oisn7iPP2sCWmm5iGVHH%2Fe3%2ByDKN5lB7pi9EtJa6zJoCQpeU%2FBNX32lkOB%2BavXDRRCg3DOOkwvNvEvgY6pgGpQXwwy5B8kNeKW2z4AK0Xz%2FwsJQ9qbe9AEjXsxi5JKOUgzNcJMoobRmuDXw4DfinxRoCQ0yD22gLkCxGiy9SLQN1afieMyWxMOY6JNQGHUZhcLMJJ4vLS%2FwdgQGvgr8uzePMZNlq7VN6FLZZMhOBGOnqFWIEzQAvYLP7l6NlTY08vxYdScnpB%2FNfuY1L4aXEOJsNsEsHDga3zN4FngLMlTGMqpJCG&X-Amz-Signature=59113a9f71d3539ecd5368599466267c1c522f9e111fd9ac980cab4998345e05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPPEIIY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIF1DkJqsUsD%2Fp7Yi2h6RnCTpTjmlvQ5QFxTr7lN7y3Z1AiAFwfajp070fhuuh8m1cVxN8LoTtAZosIgdzlI84t9QWiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUCDOsasK5T8YUr7HKtwDx1M41JEquFyDeFIL5aW0Wz47ctiYOkrrkzKdS7AuY28kiMUf0L3wLHn0X%2BjafQwqpUYv%2B3PcYHduwsI5oHTiOhEpwV7VZzmQ5M2pPwuy1gyQiaUzQEHDpkml4vg%2FOZ41y3jqpaRDSAnwABWOTFdTNncOmRmkMLzEg5osQ3HbLcYFPLQBHG7uNoOiAfMMUk%2FpTMmbVGtyq7UamsuBzljIyskf96D50aPyttEVzSvY0M01sMCA%2F8qXvNBzt1OQK%2B66Z9RCmUl78H%2FtGjBUBRolUWsz%2FlN3IaOW2YGgt67ABTBul79nhubDKuZhAYlSVjf7oPjni1z1EHnR4a68jWF%2B8piK%2BLtpRELrtaXAYEm7S%2FZbuLd0XPsF%2BTRV%2FfEjEofQjob0ZwJuzsv3%2F7Rb2UGVXxBuJsFmwkXT4X5zHO4S5%2BG7EDE4LdsV4trPRXqpDiEi46zY8TULMOtkfdI0vGKZovuxnh%2BfSRLSSwMhYNd9ybn1RGTANCKm2LOfwJAeMSgW8%2Fc%2BLGlLm6RwGnRIUyR1tFvE%2B5S9mzRhftu8MxulNdmH7G9eJb8Oisn7iPP2sCWmm5iGVHH%2Fe3%2ByDKN5lB7pi9EtJa6zJoCQpeU%2FBNX32lkOB%2BavXDRRCg3DOOkwvNvEvgY6pgGpQXwwy5B8kNeKW2z4AK0Xz%2FwsJQ9qbe9AEjXsxi5JKOUgzNcJMoobRmuDXw4DfinxRoCQ0yD22gLkCxGiy9SLQN1afieMyWxMOY6JNQGHUZhcLMJJ4vLS%2FwdgQGvgr8uzePMZNlq7VN6FLZZMhOBGOnqFWIEzQAvYLP7l6NlTY08vxYdScnpB%2FNfuY1L4aXEOJsNsEsHDga3zN4FngLMlTGMqpJCG&X-Amz-Signature=f590eaf9f872b8ce06d943da4b6a1a608e2ef81d93b8a0059c586630b2dfb7be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPPEIIY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIF1DkJqsUsD%2Fp7Yi2h6RnCTpTjmlvQ5QFxTr7lN7y3Z1AiAFwfajp070fhuuh8m1cVxN8LoTtAZosIgdzlI84t9QWiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUCDOsasK5T8YUr7HKtwDx1M41JEquFyDeFIL5aW0Wz47ctiYOkrrkzKdS7AuY28kiMUf0L3wLHn0X%2BjafQwqpUYv%2B3PcYHduwsI5oHTiOhEpwV7VZzmQ5M2pPwuy1gyQiaUzQEHDpkml4vg%2FOZ41y3jqpaRDSAnwABWOTFdTNncOmRmkMLzEg5osQ3HbLcYFPLQBHG7uNoOiAfMMUk%2FpTMmbVGtyq7UamsuBzljIyskf96D50aPyttEVzSvY0M01sMCA%2F8qXvNBzt1OQK%2B66Z9RCmUl78H%2FtGjBUBRolUWsz%2FlN3IaOW2YGgt67ABTBul79nhubDKuZhAYlSVjf7oPjni1z1EHnR4a68jWF%2B8piK%2BLtpRELrtaXAYEm7S%2FZbuLd0XPsF%2BTRV%2FfEjEofQjob0ZwJuzsv3%2F7Rb2UGVXxBuJsFmwkXT4X5zHO4S5%2BG7EDE4LdsV4trPRXqpDiEi46zY8TULMOtkfdI0vGKZovuxnh%2BfSRLSSwMhYNd9ybn1RGTANCKm2LOfwJAeMSgW8%2Fc%2BLGlLm6RwGnRIUyR1tFvE%2B5S9mzRhftu8MxulNdmH7G9eJb8Oisn7iPP2sCWmm5iGVHH%2Fe3%2ByDKN5lB7pi9EtJa6zJoCQpeU%2FBNX32lkOB%2BavXDRRCg3DOOkwvNvEvgY6pgGpQXwwy5B8kNeKW2z4AK0Xz%2FwsJQ9qbe9AEjXsxi5JKOUgzNcJMoobRmuDXw4DfinxRoCQ0yD22gLkCxGiy9SLQN1afieMyWxMOY6JNQGHUZhcLMJJ4vLS%2FwdgQGvgr8uzePMZNlq7VN6FLZZMhOBGOnqFWIEzQAvYLP7l6NlTY08vxYdScnpB%2FNfuY1L4aXEOJsNsEsHDga3zN4FngLMlTGMqpJCG&X-Amz-Signature=f08c2f1ba6d0e17ec8a6a6941544c4609dadb8e4f6874041c8876b988fd2e0db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPPEIIY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIF1DkJqsUsD%2Fp7Yi2h6RnCTpTjmlvQ5QFxTr7lN7y3Z1AiAFwfajp070fhuuh8m1cVxN8LoTtAZosIgdzlI84t9QWiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUCDOsasK5T8YUr7HKtwDx1M41JEquFyDeFIL5aW0Wz47ctiYOkrrkzKdS7AuY28kiMUf0L3wLHn0X%2BjafQwqpUYv%2B3PcYHduwsI5oHTiOhEpwV7VZzmQ5M2pPwuy1gyQiaUzQEHDpkml4vg%2FOZ41y3jqpaRDSAnwABWOTFdTNncOmRmkMLzEg5osQ3HbLcYFPLQBHG7uNoOiAfMMUk%2FpTMmbVGtyq7UamsuBzljIyskf96D50aPyttEVzSvY0M01sMCA%2F8qXvNBzt1OQK%2B66Z9RCmUl78H%2FtGjBUBRolUWsz%2FlN3IaOW2YGgt67ABTBul79nhubDKuZhAYlSVjf7oPjni1z1EHnR4a68jWF%2B8piK%2BLtpRELrtaXAYEm7S%2FZbuLd0XPsF%2BTRV%2FfEjEofQjob0ZwJuzsv3%2F7Rb2UGVXxBuJsFmwkXT4X5zHO4S5%2BG7EDE4LdsV4trPRXqpDiEi46zY8TULMOtkfdI0vGKZovuxnh%2BfSRLSSwMhYNd9ybn1RGTANCKm2LOfwJAeMSgW8%2Fc%2BLGlLm6RwGnRIUyR1tFvE%2B5S9mzRhftu8MxulNdmH7G9eJb8Oisn7iPP2sCWmm5iGVHH%2Fe3%2ByDKN5lB7pi9EtJa6zJoCQpeU%2FBNX32lkOB%2BavXDRRCg3DOOkwvNvEvgY6pgGpQXwwy5B8kNeKW2z4AK0Xz%2FwsJQ9qbe9AEjXsxi5JKOUgzNcJMoobRmuDXw4DfinxRoCQ0yD22gLkCxGiy9SLQN1afieMyWxMOY6JNQGHUZhcLMJJ4vLS%2FwdgQGvgr8uzePMZNlq7VN6FLZZMhOBGOnqFWIEzQAvYLP7l6NlTY08vxYdScnpB%2FNfuY1L4aXEOJsNsEsHDga3zN4FngLMlTGMqpJCG&X-Amz-Signature=2413e9782e58d2b6b41786a7f80e530b1e5e96bbe8ae26eb7cc44c02cf358c5e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIPPEIIY%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIF1DkJqsUsD%2Fp7Yi2h6RnCTpTjmlvQ5QFxTr7lN7y3Z1AiAFwfajp070fhuuh8m1cVxN8LoTtAZosIgdzlI84t9QWiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUCDOsasK5T8YUr7HKtwDx1M41JEquFyDeFIL5aW0Wz47ctiYOkrrkzKdS7AuY28kiMUf0L3wLHn0X%2BjafQwqpUYv%2B3PcYHduwsI5oHTiOhEpwV7VZzmQ5M2pPwuy1gyQiaUzQEHDpkml4vg%2FOZ41y3jqpaRDSAnwABWOTFdTNncOmRmkMLzEg5osQ3HbLcYFPLQBHG7uNoOiAfMMUk%2FpTMmbVGtyq7UamsuBzljIyskf96D50aPyttEVzSvY0M01sMCA%2F8qXvNBzt1OQK%2B66Z9RCmUl78H%2FtGjBUBRolUWsz%2FlN3IaOW2YGgt67ABTBul79nhubDKuZhAYlSVjf7oPjni1z1EHnR4a68jWF%2B8piK%2BLtpRELrtaXAYEm7S%2FZbuLd0XPsF%2BTRV%2FfEjEofQjob0ZwJuzsv3%2F7Rb2UGVXxBuJsFmwkXT4X5zHO4S5%2BG7EDE4LdsV4trPRXqpDiEi46zY8TULMOtkfdI0vGKZovuxnh%2BfSRLSSwMhYNd9ybn1RGTANCKm2LOfwJAeMSgW8%2Fc%2BLGlLm6RwGnRIUyR1tFvE%2B5S9mzRhftu8MxulNdmH7G9eJb8Oisn7iPP2sCWmm5iGVHH%2Fe3%2ByDKN5lB7pi9EtJa6zJoCQpeU%2FBNX32lkOB%2BavXDRRCg3DOOkwvNvEvgY6pgGpQXwwy5B8kNeKW2z4AK0Xz%2FwsJQ9qbe9AEjXsxi5JKOUgzNcJMoobRmuDXw4DfinxRoCQ0yD22gLkCxGiy9SLQN1afieMyWxMOY6JNQGHUZhcLMJJ4vLS%2FwdgQGvgr8uzePMZNlq7VN6FLZZMhOBGOnqFWIEzQAvYLP7l6NlTY08vxYdScnpB%2FNfuY1L4aXEOJsNsEsHDga3zN4FngLMlTGMqpJCG&X-Amz-Signature=277f5c80928ef244269188ada1b8f57d773fd77862840ff123514c970edd1ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
