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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZCSK564%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDIkt351BLAVRq8eYXMU6EQ0CRG2xfoNIw2N1PKfO28kAiAFrcbc2lgH1dFSGUACqBFxM0CMkGqcr35%2FPJzGqBK%2FYyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMq1lXgkG8uSEitezKtwDqxR10oDcfmwW45sJ5aHlWphRwuuNVAk%2BlWZPIgKW%2BrL4qtu8SBhS45O6kNpfXYcxC3%2BiwccJ1BeS02TkyqxM2GMNueo2XL0flqyvTqHjrYswnhbmJraUxM0wq0YySWJs73U59MVQxLrwV%2FCh82zl4MHVMsD55pPJsU6mrxR0f9l0fcu1jXLUsjMdBaxdTmo%2BkARtbnw%2FAJWiOxwd8wqa8jdJGN4b30fGgU%2B82bC4DqBDHFfotFADGJLC0KS0C2SZR6VHybjYUs2%2FOc40zu4IcSQU6o2p4Uu2jB05UuYL2lr0jtFUaVzInO7J6GNppvlI%2BSs1SLNEufSeBlIHTtFeY4TWVhW8IOCCXDKqpPXweptXvGh%2F2XlDi%2FfsCwSR7BKrh%2FXPvCluQIjTAB0pTwlkG%2BmiC5qfA1pT%2FF%2BittTvb9oH60OUZ9uuK0qc59i9lmn7OhzhN4puBZwd4pAjl7NgkUZN2SpZmZSXO%2FnjRGWw4UFBmde6TyGAo0JryKwfjE8ZrRHSEo4mhknBB54yTwaMt2oE%2BjXwuEzf34CeB0OgPWPajPNXRDsW%2F%2Fq29QPmB3rqSVxo7CUTa15br5uW5EQr91Afo2oeN3dEPTNtBNLdj55B4WP7EJ8DH7mK6KMwlczJwQY6pgHHI%2BRcCHY%2FxJVbbZcq3T6Z1Sikr49m7QyWlpaE7tL7A9NnugRvzCbbnAMzu4VaR2R%2BAF6n6Cq%2FhF07plvwvo8ZemMxqRSv9VguNQf75bv%2FKXrdPkX%2BqOmV72%2FlarBEjZakVTar9akb8teIrQK3FExK7aJDMCeLBjKmStXmLQE9FOPlNaK3Mdgy1TY4BKazna5CL5l9q6vviYzmiJJ3EvMqwocjnLJf&X-Amz-Signature=91ca61c14dc8d25dd53cf53502816b85f322bb0fb2cdef3f29c46bef7594a73b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZCSK564%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDIkt351BLAVRq8eYXMU6EQ0CRG2xfoNIw2N1PKfO28kAiAFrcbc2lgH1dFSGUACqBFxM0CMkGqcr35%2FPJzGqBK%2FYyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMq1lXgkG8uSEitezKtwDqxR10oDcfmwW45sJ5aHlWphRwuuNVAk%2BlWZPIgKW%2BrL4qtu8SBhS45O6kNpfXYcxC3%2BiwccJ1BeS02TkyqxM2GMNueo2XL0flqyvTqHjrYswnhbmJraUxM0wq0YySWJs73U59MVQxLrwV%2FCh82zl4MHVMsD55pPJsU6mrxR0f9l0fcu1jXLUsjMdBaxdTmo%2BkARtbnw%2FAJWiOxwd8wqa8jdJGN4b30fGgU%2B82bC4DqBDHFfotFADGJLC0KS0C2SZR6VHybjYUs2%2FOc40zu4IcSQU6o2p4Uu2jB05UuYL2lr0jtFUaVzInO7J6GNppvlI%2BSs1SLNEufSeBlIHTtFeY4TWVhW8IOCCXDKqpPXweptXvGh%2F2XlDi%2FfsCwSR7BKrh%2FXPvCluQIjTAB0pTwlkG%2BmiC5qfA1pT%2FF%2BittTvb9oH60OUZ9uuK0qc59i9lmn7OhzhN4puBZwd4pAjl7NgkUZN2SpZmZSXO%2FnjRGWw4UFBmde6TyGAo0JryKwfjE8ZrRHSEo4mhknBB54yTwaMt2oE%2BjXwuEzf34CeB0OgPWPajPNXRDsW%2F%2Fq29QPmB3rqSVxo7CUTa15br5uW5EQr91Afo2oeN3dEPTNtBNLdj55B4WP7EJ8DH7mK6KMwlczJwQY6pgHHI%2BRcCHY%2FxJVbbZcq3T6Z1Sikr49m7QyWlpaE7tL7A9NnugRvzCbbnAMzu4VaR2R%2BAF6n6Cq%2FhF07plvwvo8ZemMxqRSv9VguNQf75bv%2FKXrdPkX%2BqOmV72%2FlarBEjZakVTar9akb8teIrQK3FExK7aJDMCeLBjKmStXmLQE9FOPlNaK3Mdgy1TY4BKazna5CL5l9q6vviYzmiJJ3EvMqwocjnLJf&X-Amz-Signature=6becf564eb56dfe9fb32cc7bc738447712028ec2c00fa8fe0c425ff69128d797&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZCSK564%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDIkt351BLAVRq8eYXMU6EQ0CRG2xfoNIw2N1PKfO28kAiAFrcbc2lgH1dFSGUACqBFxM0CMkGqcr35%2FPJzGqBK%2FYyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMq1lXgkG8uSEitezKtwDqxR10oDcfmwW45sJ5aHlWphRwuuNVAk%2BlWZPIgKW%2BrL4qtu8SBhS45O6kNpfXYcxC3%2BiwccJ1BeS02TkyqxM2GMNueo2XL0flqyvTqHjrYswnhbmJraUxM0wq0YySWJs73U59MVQxLrwV%2FCh82zl4MHVMsD55pPJsU6mrxR0f9l0fcu1jXLUsjMdBaxdTmo%2BkARtbnw%2FAJWiOxwd8wqa8jdJGN4b30fGgU%2B82bC4DqBDHFfotFADGJLC0KS0C2SZR6VHybjYUs2%2FOc40zu4IcSQU6o2p4Uu2jB05UuYL2lr0jtFUaVzInO7J6GNppvlI%2BSs1SLNEufSeBlIHTtFeY4TWVhW8IOCCXDKqpPXweptXvGh%2F2XlDi%2FfsCwSR7BKrh%2FXPvCluQIjTAB0pTwlkG%2BmiC5qfA1pT%2FF%2BittTvb9oH60OUZ9uuK0qc59i9lmn7OhzhN4puBZwd4pAjl7NgkUZN2SpZmZSXO%2FnjRGWw4UFBmde6TyGAo0JryKwfjE8ZrRHSEo4mhknBB54yTwaMt2oE%2BjXwuEzf34CeB0OgPWPajPNXRDsW%2F%2Fq29QPmB3rqSVxo7CUTa15br5uW5EQr91Afo2oeN3dEPTNtBNLdj55B4WP7EJ8DH7mK6KMwlczJwQY6pgHHI%2BRcCHY%2FxJVbbZcq3T6Z1Sikr49m7QyWlpaE7tL7A9NnugRvzCbbnAMzu4VaR2R%2BAF6n6Cq%2FhF07plvwvo8ZemMxqRSv9VguNQf75bv%2FKXrdPkX%2BqOmV72%2FlarBEjZakVTar9akb8teIrQK3FExK7aJDMCeLBjKmStXmLQE9FOPlNaK3Mdgy1TY4BKazna5CL5l9q6vviYzmiJJ3EvMqwocjnLJf&X-Amz-Signature=c29b80b4ca53d24111be635e2ea34a0e0a21d9eb964d64ae531f0def1552c97d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZCSK564%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDIkt351BLAVRq8eYXMU6EQ0CRG2xfoNIw2N1PKfO28kAiAFrcbc2lgH1dFSGUACqBFxM0CMkGqcr35%2FPJzGqBK%2FYyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMq1lXgkG8uSEitezKtwDqxR10oDcfmwW45sJ5aHlWphRwuuNVAk%2BlWZPIgKW%2BrL4qtu8SBhS45O6kNpfXYcxC3%2BiwccJ1BeS02TkyqxM2GMNueo2XL0flqyvTqHjrYswnhbmJraUxM0wq0YySWJs73U59MVQxLrwV%2FCh82zl4MHVMsD55pPJsU6mrxR0f9l0fcu1jXLUsjMdBaxdTmo%2BkARtbnw%2FAJWiOxwd8wqa8jdJGN4b30fGgU%2B82bC4DqBDHFfotFADGJLC0KS0C2SZR6VHybjYUs2%2FOc40zu4IcSQU6o2p4Uu2jB05UuYL2lr0jtFUaVzInO7J6GNppvlI%2BSs1SLNEufSeBlIHTtFeY4TWVhW8IOCCXDKqpPXweptXvGh%2F2XlDi%2FfsCwSR7BKrh%2FXPvCluQIjTAB0pTwlkG%2BmiC5qfA1pT%2FF%2BittTvb9oH60OUZ9uuK0qc59i9lmn7OhzhN4puBZwd4pAjl7NgkUZN2SpZmZSXO%2FnjRGWw4UFBmde6TyGAo0JryKwfjE8ZrRHSEo4mhknBB54yTwaMt2oE%2BjXwuEzf34CeB0OgPWPajPNXRDsW%2F%2Fq29QPmB3rqSVxo7CUTa15br5uW5EQr91Afo2oeN3dEPTNtBNLdj55B4WP7EJ8DH7mK6KMwlczJwQY6pgHHI%2BRcCHY%2FxJVbbZcq3T6Z1Sikr49m7QyWlpaE7tL7A9NnugRvzCbbnAMzu4VaR2R%2BAF6n6Cq%2FhF07plvwvo8ZemMxqRSv9VguNQf75bv%2FKXrdPkX%2BqOmV72%2FlarBEjZakVTar9akb8teIrQK3FExK7aJDMCeLBjKmStXmLQE9FOPlNaK3Mdgy1TY4BKazna5CL5l9q6vviYzmiJJ3EvMqwocjnLJf&X-Amz-Signature=e419f1a8e216e963309a21dd344f4d9166f3e7176c235786187c590ccdf99521&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZCSK564%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDIkt351BLAVRq8eYXMU6EQ0CRG2xfoNIw2N1PKfO28kAiAFrcbc2lgH1dFSGUACqBFxM0CMkGqcr35%2FPJzGqBK%2FYyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMq1lXgkG8uSEitezKtwDqxR10oDcfmwW45sJ5aHlWphRwuuNVAk%2BlWZPIgKW%2BrL4qtu8SBhS45O6kNpfXYcxC3%2BiwccJ1BeS02TkyqxM2GMNueo2XL0flqyvTqHjrYswnhbmJraUxM0wq0YySWJs73U59MVQxLrwV%2FCh82zl4MHVMsD55pPJsU6mrxR0f9l0fcu1jXLUsjMdBaxdTmo%2BkARtbnw%2FAJWiOxwd8wqa8jdJGN4b30fGgU%2B82bC4DqBDHFfotFADGJLC0KS0C2SZR6VHybjYUs2%2FOc40zu4IcSQU6o2p4Uu2jB05UuYL2lr0jtFUaVzInO7J6GNppvlI%2BSs1SLNEufSeBlIHTtFeY4TWVhW8IOCCXDKqpPXweptXvGh%2F2XlDi%2FfsCwSR7BKrh%2FXPvCluQIjTAB0pTwlkG%2BmiC5qfA1pT%2FF%2BittTvb9oH60OUZ9uuK0qc59i9lmn7OhzhN4puBZwd4pAjl7NgkUZN2SpZmZSXO%2FnjRGWw4UFBmde6TyGAo0JryKwfjE8ZrRHSEo4mhknBB54yTwaMt2oE%2BjXwuEzf34CeB0OgPWPajPNXRDsW%2F%2Fq29QPmB3rqSVxo7CUTa15br5uW5EQr91Afo2oeN3dEPTNtBNLdj55B4WP7EJ8DH7mK6KMwlczJwQY6pgHHI%2BRcCHY%2FxJVbbZcq3T6Z1Sikr49m7QyWlpaE7tL7A9NnugRvzCbbnAMzu4VaR2R%2BAF6n6Cq%2FhF07plvwvo8ZemMxqRSv9VguNQf75bv%2FKXrdPkX%2BqOmV72%2FlarBEjZakVTar9akb8teIrQK3FExK7aJDMCeLBjKmStXmLQE9FOPlNaK3Mdgy1TY4BKazna5CL5l9q6vviYzmiJJ3EvMqwocjnLJf&X-Amz-Signature=a852e3c614620cfe63e549934eec1c4343c06392c9db936513658cad95eeec2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZCSK564%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDIkt351BLAVRq8eYXMU6EQ0CRG2xfoNIw2N1PKfO28kAiAFrcbc2lgH1dFSGUACqBFxM0CMkGqcr35%2FPJzGqBK%2FYyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMq1lXgkG8uSEitezKtwDqxR10oDcfmwW45sJ5aHlWphRwuuNVAk%2BlWZPIgKW%2BrL4qtu8SBhS45O6kNpfXYcxC3%2BiwccJ1BeS02TkyqxM2GMNueo2XL0flqyvTqHjrYswnhbmJraUxM0wq0YySWJs73U59MVQxLrwV%2FCh82zl4MHVMsD55pPJsU6mrxR0f9l0fcu1jXLUsjMdBaxdTmo%2BkARtbnw%2FAJWiOxwd8wqa8jdJGN4b30fGgU%2B82bC4DqBDHFfotFADGJLC0KS0C2SZR6VHybjYUs2%2FOc40zu4IcSQU6o2p4Uu2jB05UuYL2lr0jtFUaVzInO7J6GNppvlI%2BSs1SLNEufSeBlIHTtFeY4TWVhW8IOCCXDKqpPXweptXvGh%2F2XlDi%2FfsCwSR7BKrh%2FXPvCluQIjTAB0pTwlkG%2BmiC5qfA1pT%2FF%2BittTvb9oH60OUZ9uuK0qc59i9lmn7OhzhN4puBZwd4pAjl7NgkUZN2SpZmZSXO%2FnjRGWw4UFBmde6TyGAo0JryKwfjE8ZrRHSEo4mhknBB54yTwaMt2oE%2BjXwuEzf34CeB0OgPWPajPNXRDsW%2F%2Fq29QPmB3rqSVxo7CUTa15br5uW5EQr91Afo2oeN3dEPTNtBNLdj55B4WP7EJ8DH7mK6KMwlczJwQY6pgHHI%2BRcCHY%2FxJVbbZcq3T6Z1Sikr49m7QyWlpaE7tL7A9NnugRvzCbbnAMzu4VaR2R%2BAF6n6Cq%2FhF07plvwvo8ZemMxqRSv9VguNQf75bv%2FKXrdPkX%2BqOmV72%2FlarBEjZakVTar9akb8teIrQK3FExK7aJDMCeLBjKmStXmLQE9FOPlNaK3Mdgy1TY4BKazna5CL5l9q6vviYzmiJJ3EvMqwocjnLJf&X-Amz-Signature=3133ec68c81a1c92be3ecdb477da1e3914023d2f72a787443c2f30d0bdd97b47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZCSK564%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDIkt351BLAVRq8eYXMU6EQ0CRG2xfoNIw2N1PKfO28kAiAFrcbc2lgH1dFSGUACqBFxM0CMkGqcr35%2FPJzGqBK%2FYyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMq1lXgkG8uSEitezKtwDqxR10oDcfmwW45sJ5aHlWphRwuuNVAk%2BlWZPIgKW%2BrL4qtu8SBhS45O6kNpfXYcxC3%2BiwccJ1BeS02TkyqxM2GMNueo2XL0flqyvTqHjrYswnhbmJraUxM0wq0YySWJs73U59MVQxLrwV%2FCh82zl4MHVMsD55pPJsU6mrxR0f9l0fcu1jXLUsjMdBaxdTmo%2BkARtbnw%2FAJWiOxwd8wqa8jdJGN4b30fGgU%2B82bC4DqBDHFfotFADGJLC0KS0C2SZR6VHybjYUs2%2FOc40zu4IcSQU6o2p4Uu2jB05UuYL2lr0jtFUaVzInO7J6GNppvlI%2BSs1SLNEufSeBlIHTtFeY4TWVhW8IOCCXDKqpPXweptXvGh%2F2XlDi%2FfsCwSR7BKrh%2FXPvCluQIjTAB0pTwlkG%2BmiC5qfA1pT%2FF%2BittTvb9oH60OUZ9uuK0qc59i9lmn7OhzhN4puBZwd4pAjl7NgkUZN2SpZmZSXO%2FnjRGWw4UFBmde6TyGAo0JryKwfjE8ZrRHSEo4mhknBB54yTwaMt2oE%2BjXwuEzf34CeB0OgPWPajPNXRDsW%2F%2Fq29QPmB3rqSVxo7CUTa15br5uW5EQr91Afo2oeN3dEPTNtBNLdj55B4WP7EJ8DH7mK6KMwlczJwQY6pgHHI%2BRcCHY%2FxJVbbZcq3T6Z1Sikr49m7QyWlpaE7tL7A9NnugRvzCbbnAMzu4VaR2R%2BAF6n6Cq%2FhF07plvwvo8ZemMxqRSv9VguNQf75bv%2FKXrdPkX%2BqOmV72%2FlarBEjZakVTar9akb8teIrQK3FExK7aJDMCeLBjKmStXmLQE9FOPlNaK3Mdgy1TY4BKazna5CL5l9q6vviYzmiJJ3EvMqwocjnLJf&X-Amz-Signature=cb9db82eea84a8ef2afcdf70ea422539eaf3d94562a7dacaf548e0a681cea16e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZCSK564%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T004626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIDIkt351BLAVRq8eYXMU6EQ0CRG2xfoNIw2N1PKfO28kAiAFrcbc2lgH1dFSGUACqBFxM0CMkGqcr35%2FPJzGqBK%2FYyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMq1lXgkG8uSEitezKtwDqxR10oDcfmwW45sJ5aHlWphRwuuNVAk%2BlWZPIgKW%2BrL4qtu8SBhS45O6kNpfXYcxC3%2BiwccJ1BeS02TkyqxM2GMNueo2XL0flqyvTqHjrYswnhbmJraUxM0wq0YySWJs73U59MVQxLrwV%2FCh82zl4MHVMsD55pPJsU6mrxR0f9l0fcu1jXLUsjMdBaxdTmo%2BkARtbnw%2FAJWiOxwd8wqa8jdJGN4b30fGgU%2B82bC4DqBDHFfotFADGJLC0KS0C2SZR6VHybjYUs2%2FOc40zu4IcSQU6o2p4Uu2jB05UuYL2lr0jtFUaVzInO7J6GNppvlI%2BSs1SLNEufSeBlIHTtFeY4TWVhW8IOCCXDKqpPXweptXvGh%2F2XlDi%2FfsCwSR7BKrh%2FXPvCluQIjTAB0pTwlkG%2BmiC5qfA1pT%2FF%2BittTvb9oH60OUZ9uuK0qc59i9lmn7OhzhN4puBZwd4pAjl7NgkUZN2SpZmZSXO%2FnjRGWw4UFBmde6TyGAo0JryKwfjE8ZrRHSEo4mhknBB54yTwaMt2oE%2BjXwuEzf34CeB0OgPWPajPNXRDsW%2F%2Fq29QPmB3rqSVxo7CUTa15br5uW5EQr91Afo2oeN3dEPTNtBNLdj55B4WP7EJ8DH7mK6KMwlczJwQY6pgHHI%2BRcCHY%2FxJVbbZcq3T6Z1Sikr49m7QyWlpaE7tL7A9NnugRvzCbbnAMzu4VaR2R%2BAF6n6Cq%2FhF07plvwvo8ZemMxqRSv9VguNQf75bv%2FKXrdPkX%2BqOmV72%2FlarBEjZakVTar9akb8teIrQK3FExK7aJDMCeLBjKmStXmLQE9FOPlNaK3Mdgy1TY4BKazna5CL5l9q6vviYzmiJJ3EvMqwocjnLJf&X-Amz-Signature=f5cc5643c796fc2785148475e4ccf0f1daaf7175a1ebd352ebff10e554d36d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
