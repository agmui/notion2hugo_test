---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZUE7EQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAnVt2AT1e5EZwwb31e2PiyGDKMmB8vjCJQQJnZF9foWAiEA%2BMh6WiGr%2F4I5CmapYngjBkFwi8VP%2FIWo2w6MFOvxZYUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLgcC8FvXVP0pBeU1ircA%2B4SBEBU%2Brual8VmcmEi8vmc%2Fp2fk6L7c4iYRNm1LqLdY%2BpDa%2FwfEMZ0PcU6bvouG8zhC4EmoY8b7bvLO5uEWgkNw%2BmadeUU9pyUvZlUHIli7UvmRO8f53UGDhBPuxPwfAZ67KsYAI2wGkhKRdUZDAWuc4pV1jKyMmx0v37zwaqyk5xge2cCMIf1a5RBBImCvOGoauMfU6JQmLYvix0nOJrpT%2BOEV2BfpfX%2B2gs9zWAgbDaNNvTmjlVzbMpGUQqgucQt5D1N3dvjmM7kML%2BEf7%2BCIiFcU63nZsALxsNgNYr65quSAO2Tu2zgAeI09gEEmCawU6udWtuRraoEBAy3ikLTcycU78B0U5%2BxVr%2BvLM70ZolN%2BEcjxhmmhNoEvesS1qUThxcbsSQ2yzvDisKSLCd9tcMOmwzi2A3rfyeZk6l3G7QL2q1PSKYMzKjcPatQHbeUKsnoAhOg4%2BWlZZ3hzLTC1Z%2BWeQUyp1NmlwvePJGJyofmt1%2FgIYZdig4JpgnDHPyHfXJwG9Sp4fThzHaYImyGwpEC1r82VvmfKVHx1vOAsddVKbwXGY9dXdb0zROIikdDJJjNgs%2BDlHDOX%2FSdVxLu6gnuD0NGDQz2OHeHGjepnQkLPm9pKX4gX%2Fz%2BMMzgi70GOqUB%2FQTM8s8GHrdebfu790sJB4WcsoP79iJOkwBJ9kPaM1rJwT81SuNmdQTH2fy6YLd6xHhcyOsMnn3cedZL5wKhDRsc7TXBk43iDyVINEWfqStE6x1mgiZkOb%2FeXQOD19auRQ3i8jkc0flcR06VPnonnD%2FvdUemkbUEPutfPrF95rjjIDPVEbXCnjuLdNbnSbixO4sRxQs%2BlBbdK%2FY93RInRiQ9M4vY&X-Amz-Signature=4ff3c1f410088a32a93c62c109396e32c4f9efff52a0b752480cdcf2e1a03d03&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZUE7EQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAnVt2AT1e5EZwwb31e2PiyGDKMmB8vjCJQQJnZF9foWAiEA%2BMh6WiGr%2F4I5CmapYngjBkFwi8VP%2FIWo2w6MFOvxZYUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLgcC8FvXVP0pBeU1ircA%2B4SBEBU%2Brual8VmcmEi8vmc%2Fp2fk6L7c4iYRNm1LqLdY%2BpDa%2FwfEMZ0PcU6bvouG8zhC4EmoY8b7bvLO5uEWgkNw%2BmadeUU9pyUvZlUHIli7UvmRO8f53UGDhBPuxPwfAZ67KsYAI2wGkhKRdUZDAWuc4pV1jKyMmx0v37zwaqyk5xge2cCMIf1a5RBBImCvOGoauMfU6JQmLYvix0nOJrpT%2BOEV2BfpfX%2B2gs9zWAgbDaNNvTmjlVzbMpGUQqgucQt5D1N3dvjmM7kML%2BEf7%2BCIiFcU63nZsALxsNgNYr65quSAO2Tu2zgAeI09gEEmCawU6udWtuRraoEBAy3ikLTcycU78B0U5%2BxVr%2BvLM70ZolN%2BEcjxhmmhNoEvesS1qUThxcbsSQ2yzvDisKSLCd9tcMOmwzi2A3rfyeZk6l3G7QL2q1PSKYMzKjcPatQHbeUKsnoAhOg4%2BWlZZ3hzLTC1Z%2BWeQUyp1NmlwvePJGJyofmt1%2FgIYZdig4JpgnDHPyHfXJwG9Sp4fThzHaYImyGwpEC1r82VvmfKVHx1vOAsddVKbwXGY9dXdb0zROIikdDJJjNgs%2BDlHDOX%2FSdVxLu6gnuD0NGDQz2OHeHGjepnQkLPm9pKX4gX%2Fz%2BMMzgi70GOqUB%2FQTM8s8GHrdebfu790sJB4WcsoP79iJOkwBJ9kPaM1rJwT81SuNmdQTH2fy6YLd6xHhcyOsMnn3cedZL5wKhDRsc7TXBk43iDyVINEWfqStE6x1mgiZkOb%2FeXQOD19auRQ3i8jkc0flcR06VPnonnD%2FvdUemkbUEPutfPrF95rjjIDPVEbXCnjuLdNbnSbixO4sRxQs%2BlBbdK%2FY93RInRiQ9M4vY&X-Amz-Signature=380feed7d57ddbcf0b561434656ff1e6f669881e1a2e01a66c9d589a117771f8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZUE7EQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAnVt2AT1e5EZwwb31e2PiyGDKMmB8vjCJQQJnZF9foWAiEA%2BMh6WiGr%2F4I5CmapYngjBkFwi8VP%2FIWo2w6MFOvxZYUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLgcC8FvXVP0pBeU1ircA%2B4SBEBU%2Brual8VmcmEi8vmc%2Fp2fk6L7c4iYRNm1LqLdY%2BpDa%2FwfEMZ0PcU6bvouG8zhC4EmoY8b7bvLO5uEWgkNw%2BmadeUU9pyUvZlUHIli7UvmRO8f53UGDhBPuxPwfAZ67KsYAI2wGkhKRdUZDAWuc4pV1jKyMmx0v37zwaqyk5xge2cCMIf1a5RBBImCvOGoauMfU6JQmLYvix0nOJrpT%2BOEV2BfpfX%2B2gs9zWAgbDaNNvTmjlVzbMpGUQqgucQt5D1N3dvjmM7kML%2BEf7%2BCIiFcU63nZsALxsNgNYr65quSAO2Tu2zgAeI09gEEmCawU6udWtuRraoEBAy3ikLTcycU78B0U5%2BxVr%2BvLM70ZolN%2BEcjxhmmhNoEvesS1qUThxcbsSQ2yzvDisKSLCd9tcMOmwzi2A3rfyeZk6l3G7QL2q1PSKYMzKjcPatQHbeUKsnoAhOg4%2BWlZZ3hzLTC1Z%2BWeQUyp1NmlwvePJGJyofmt1%2FgIYZdig4JpgnDHPyHfXJwG9Sp4fThzHaYImyGwpEC1r82VvmfKVHx1vOAsddVKbwXGY9dXdb0zROIikdDJJjNgs%2BDlHDOX%2FSdVxLu6gnuD0NGDQz2OHeHGjepnQkLPm9pKX4gX%2Fz%2BMMzgi70GOqUB%2FQTM8s8GHrdebfu790sJB4WcsoP79iJOkwBJ9kPaM1rJwT81SuNmdQTH2fy6YLd6xHhcyOsMnn3cedZL5wKhDRsc7TXBk43iDyVINEWfqStE6x1mgiZkOb%2FeXQOD19auRQ3i8jkc0flcR06VPnonnD%2FvdUemkbUEPutfPrF95rjjIDPVEbXCnjuLdNbnSbixO4sRxQs%2BlBbdK%2FY93RInRiQ9M4vY&X-Amz-Signature=efd256aa2abf2a5bbea6cdc2516475a03b8824a1b2c73a517b335f257c61b00f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZUE7EQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAnVt2AT1e5EZwwb31e2PiyGDKMmB8vjCJQQJnZF9foWAiEA%2BMh6WiGr%2F4I5CmapYngjBkFwi8VP%2FIWo2w6MFOvxZYUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLgcC8FvXVP0pBeU1ircA%2B4SBEBU%2Brual8VmcmEi8vmc%2Fp2fk6L7c4iYRNm1LqLdY%2BpDa%2FwfEMZ0PcU6bvouG8zhC4EmoY8b7bvLO5uEWgkNw%2BmadeUU9pyUvZlUHIli7UvmRO8f53UGDhBPuxPwfAZ67KsYAI2wGkhKRdUZDAWuc4pV1jKyMmx0v37zwaqyk5xge2cCMIf1a5RBBImCvOGoauMfU6JQmLYvix0nOJrpT%2BOEV2BfpfX%2B2gs9zWAgbDaNNvTmjlVzbMpGUQqgucQt5D1N3dvjmM7kML%2BEf7%2BCIiFcU63nZsALxsNgNYr65quSAO2Tu2zgAeI09gEEmCawU6udWtuRraoEBAy3ikLTcycU78B0U5%2BxVr%2BvLM70ZolN%2BEcjxhmmhNoEvesS1qUThxcbsSQ2yzvDisKSLCd9tcMOmwzi2A3rfyeZk6l3G7QL2q1PSKYMzKjcPatQHbeUKsnoAhOg4%2BWlZZ3hzLTC1Z%2BWeQUyp1NmlwvePJGJyofmt1%2FgIYZdig4JpgnDHPyHfXJwG9Sp4fThzHaYImyGwpEC1r82VvmfKVHx1vOAsddVKbwXGY9dXdb0zROIikdDJJjNgs%2BDlHDOX%2FSdVxLu6gnuD0NGDQz2OHeHGjepnQkLPm9pKX4gX%2Fz%2BMMzgi70GOqUB%2FQTM8s8GHrdebfu790sJB4WcsoP79iJOkwBJ9kPaM1rJwT81SuNmdQTH2fy6YLd6xHhcyOsMnn3cedZL5wKhDRsc7TXBk43iDyVINEWfqStE6x1mgiZkOb%2FeXQOD19auRQ3i8jkc0flcR06VPnonnD%2FvdUemkbUEPutfPrF95rjjIDPVEbXCnjuLdNbnSbixO4sRxQs%2BlBbdK%2FY93RInRiQ9M4vY&X-Amz-Signature=956d153e5a50f1440f85f980a8bd00f1f8fb952e9008f98b94a0c266fa29f850&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZUE7EQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAnVt2AT1e5EZwwb31e2PiyGDKMmB8vjCJQQJnZF9foWAiEA%2BMh6WiGr%2F4I5CmapYngjBkFwi8VP%2FIWo2w6MFOvxZYUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLgcC8FvXVP0pBeU1ircA%2B4SBEBU%2Brual8VmcmEi8vmc%2Fp2fk6L7c4iYRNm1LqLdY%2BpDa%2FwfEMZ0PcU6bvouG8zhC4EmoY8b7bvLO5uEWgkNw%2BmadeUU9pyUvZlUHIli7UvmRO8f53UGDhBPuxPwfAZ67KsYAI2wGkhKRdUZDAWuc4pV1jKyMmx0v37zwaqyk5xge2cCMIf1a5RBBImCvOGoauMfU6JQmLYvix0nOJrpT%2BOEV2BfpfX%2B2gs9zWAgbDaNNvTmjlVzbMpGUQqgucQt5D1N3dvjmM7kML%2BEf7%2BCIiFcU63nZsALxsNgNYr65quSAO2Tu2zgAeI09gEEmCawU6udWtuRraoEBAy3ikLTcycU78B0U5%2BxVr%2BvLM70ZolN%2BEcjxhmmhNoEvesS1qUThxcbsSQ2yzvDisKSLCd9tcMOmwzi2A3rfyeZk6l3G7QL2q1PSKYMzKjcPatQHbeUKsnoAhOg4%2BWlZZ3hzLTC1Z%2BWeQUyp1NmlwvePJGJyofmt1%2FgIYZdig4JpgnDHPyHfXJwG9Sp4fThzHaYImyGwpEC1r82VvmfKVHx1vOAsddVKbwXGY9dXdb0zROIikdDJJjNgs%2BDlHDOX%2FSdVxLu6gnuD0NGDQz2OHeHGjepnQkLPm9pKX4gX%2Fz%2BMMzgi70GOqUB%2FQTM8s8GHrdebfu790sJB4WcsoP79iJOkwBJ9kPaM1rJwT81SuNmdQTH2fy6YLd6xHhcyOsMnn3cedZL5wKhDRsc7TXBk43iDyVINEWfqStE6x1mgiZkOb%2FeXQOD19auRQ3i8jkc0flcR06VPnonnD%2FvdUemkbUEPutfPrF95rjjIDPVEbXCnjuLdNbnSbixO4sRxQs%2BlBbdK%2FY93RInRiQ9M4vY&X-Amz-Signature=c5224cf7b81282e4af4de511097844890b521345695f37533b8969c98cc38eea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZUE7EQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAnVt2AT1e5EZwwb31e2PiyGDKMmB8vjCJQQJnZF9foWAiEA%2BMh6WiGr%2F4I5CmapYngjBkFwi8VP%2FIWo2w6MFOvxZYUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLgcC8FvXVP0pBeU1ircA%2B4SBEBU%2Brual8VmcmEi8vmc%2Fp2fk6L7c4iYRNm1LqLdY%2BpDa%2FwfEMZ0PcU6bvouG8zhC4EmoY8b7bvLO5uEWgkNw%2BmadeUU9pyUvZlUHIli7UvmRO8f53UGDhBPuxPwfAZ67KsYAI2wGkhKRdUZDAWuc4pV1jKyMmx0v37zwaqyk5xge2cCMIf1a5RBBImCvOGoauMfU6JQmLYvix0nOJrpT%2BOEV2BfpfX%2B2gs9zWAgbDaNNvTmjlVzbMpGUQqgucQt5D1N3dvjmM7kML%2BEf7%2BCIiFcU63nZsALxsNgNYr65quSAO2Tu2zgAeI09gEEmCawU6udWtuRraoEBAy3ikLTcycU78B0U5%2BxVr%2BvLM70ZolN%2BEcjxhmmhNoEvesS1qUThxcbsSQ2yzvDisKSLCd9tcMOmwzi2A3rfyeZk6l3G7QL2q1PSKYMzKjcPatQHbeUKsnoAhOg4%2BWlZZ3hzLTC1Z%2BWeQUyp1NmlwvePJGJyofmt1%2FgIYZdig4JpgnDHPyHfXJwG9Sp4fThzHaYImyGwpEC1r82VvmfKVHx1vOAsddVKbwXGY9dXdb0zROIikdDJJjNgs%2BDlHDOX%2FSdVxLu6gnuD0NGDQz2OHeHGjepnQkLPm9pKX4gX%2Fz%2BMMzgi70GOqUB%2FQTM8s8GHrdebfu790sJB4WcsoP79iJOkwBJ9kPaM1rJwT81SuNmdQTH2fy6YLd6xHhcyOsMnn3cedZL5wKhDRsc7TXBk43iDyVINEWfqStE6x1mgiZkOb%2FeXQOD19auRQ3i8jkc0flcR06VPnonnD%2FvdUemkbUEPutfPrF95rjjIDPVEbXCnjuLdNbnSbixO4sRxQs%2BlBbdK%2FY93RInRiQ9M4vY&X-Amz-Signature=305da287b6e5a48cdebcd47298ee704e19a82acffd1eefdd5e5f02064e4d51e5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZUE7EQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAnVt2AT1e5EZwwb31e2PiyGDKMmB8vjCJQQJnZF9foWAiEA%2BMh6WiGr%2F4I5CmapYngjBkFwi8VP%2FIWo2w6MFOvxZYUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLgcC8FvXVP0pBeU1ircA%2B4SBEBU%2Brual8VmcmEi8vmc%2Fp2fk6L7c4iYRNm1LqLdY%2BpDa%2FwfEMZ0PcU6bvouG8zhC4EmoY8b7bvLO5uEWgkNw%2BmadeUU9pyUvZlUHIli7UvmRO8f53UGDhBPuxPwfAZ67KsYAI2wGkhKRdUZDAWuc4pV1jKyMmx0v37zwaqyk5xge2cCMIf1a5RBBImCvOGoauMfU6JQmLYvix0nOJrpT%2BOEV2BfpfX%2B2gs9zWAgbDaNNvTmjlVzbMpGUQqgucQt5D1N3dvjmM7kML%2BEf7%2BCIiFcU63nZsALxsNgNYr65quSAO2Tu2zgAeI09gEEmCawU6udWtuRraoEBAy3ikLTcycU78B0U5%2BxVr%2BvLM70ZolN%2BEcjxhmmhNoEvesS1qUThxcbsSQ2yzvDisKSLCd9tcMOmwzi2A3rfyeZk6l3G7QL2q1PSKYMzKjcPatQHbeUKsnoAhOg4%2BWlZZ3hzLTC1Z%2BWeQUyp1NmlwvePJGJyofmt1%2FgIYZdig4JpgnDHPyHfXJwG9Sp4fThzHaYImyGwpEC1r82VvmfKVHx1vOAsddVKbwXGY9dXdb0zROIikdDJJjNgs%2BDlHDOX%2FSdVxLu6gnuD0NGDQz2OHeHGjepnQkLPm9pKX4gX%2Fz%2BMMzgi70GOqUB%2FQTM8s8GHrdebfu790sJB4WcsoP79iJOkwBJ9kPaM1rJwT81SuNmdQTH2fy6YLd6xHhcyOsMnn3cedZL5wKhDRsc7TXBk43iDyVINEWfqStE6x1mgiZkOb%2FeXQOD19auRQ3i8jkc0flcR06VPnonnD%2FvdUemkbUEPutfPrF95rjjIDPVEbXCnjuLdNbnSbixO4sRxQs%2BlBbdK%2FY93RInRiQ9M4vY&X-Amz-Signature=c1d685f9d3ddc51adb2b3131cd218a658c5749aba40f786ab530d0eb89a12d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZUE7EQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIAnVt2AT1e5EZwwb31e2PiyGDKMmB8vjCJQQJnZF9foWAiEA%2BMh6WiGr%2F4I5CmapYngjBkFwi8VP%2FIWo2w6MFOvxZYUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLgcC8FvXVP0pBeU1ircA%2B4SBEBU%2Brual8VmcmEi8vmc%2Fp2fk6L7c4iYRNm1LqLdY%2BpDa%2FwfEMZ0PcU6bvouG8zhC4EmoY8b7bvLO5uEWgkNw%2BmadeUU9pyUvZlUHIli7UvmRO8f53UGDhBPuxPwfAZ67KsYAI2wGkhKRdUZDAWuc4pV1jKyMmx0v37zwaqyk5xge2cCMIf1a5RBBImCvOGoauMfU6JQmLYvix0nOJrpT%2BOEV2BfpfX%2B2gs9zWAgbDaNNvTmjlVzbMpGUQqgucQt5D1N3dvjmM7kML%2BEf7%2BCIiFcU63nZsALxsNgNYr65quSAO2Tu2zgAeI09gEEmCawU6udWtuRraoEBAy3ikLTcycU78B0U5%2BxVr%2BvLM70ZolN%2BEcjxhmmhNoEvesS1qUThxcbsSQ2yzvDisKSLCd9tcMOmwzi2A3rfyeZk6l3G7QL2q1PSKYMzKjcPatQHbeUKsnoAhOg4%2BWlZZ3hzLTC1Z%2BWeQUyp1NmlwvePJGJyofmt1%2FgIYZdig4JpgnDHPyHfXJwG9Sp4fThzHaYImyGwpEC1r82VvmfKVHx1vOAsddVKbwXGY9dXdb0zROIikdDJJjNgs%2BDlHDOX%2FSdVxLu6gnuD0NGDQz2OHeHGjepnQkLPm9pKX4gX%2Fz%2BMMzgi70GOqUB%2FQTM8s8GHrdebfu790sJB4WcsoP79iJOkwBJ9kPaM1rJwT81SuNmdQTH2fy6YLd6xHhcyOsMnn3cedZL5wKhDRsc7TXBk43iDyVINEWfqStE6x1mgiZkOb%2FeXQOD19auRQ3i8jkc0flcR06VPnonnD%2FvdUemkbUEPutfPrF95rjjIDPVEbXCnjuLdNbnSbixO4sRxQs%2BlBbdK%2FY93RInRiQ9M4vY&X-Amz-Signature=be3c2341a95e1b908b8aeaac2b8c3479c773f5864a5bbdd51c88520547fde956&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
