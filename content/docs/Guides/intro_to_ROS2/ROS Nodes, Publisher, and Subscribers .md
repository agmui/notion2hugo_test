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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=c0b3158872315471d1706ff5f77a2a759491a04c1489272d25d2ff7ada9fed1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=bf5b9533fb5f3cebc6e8d290ebb232ad1c177fe965ca67dbd3a18fc5ff061701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=693fb6152b697c18b4c5fbcae12382a38f6fdb030ea46faebdb88f01800bab1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=339d4fc53b1588227217f0b0d7ebc6a034970b0df89cc1986110e96f6465f9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=ee99edebc17ca61e447c82635a81ee9f5e377a741504c05c8fe93192f1ea331a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=9827c00e508a131e53fd84c7c035daec22933eb402bc4555b987bcbc71b233a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=2851889210e028d73ae938f22532de7407d6bd630dcc96663d921addc25ef04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4E2KMNQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCfC%2B2AkPLr6iJHU6vKIRn7O9b75TkS4QSDB0S2Ja9eqAIgU42Cuth7DC9K%2FZJgfp55tVrczrm%2BWt1SfAupygsTdRYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLuKSPOYUJm1kjqfHircA5KpLJ%2BqVkWM2Ka1ukEvHDnrNqDC5vKUiXtOU3JQkIM%2BHfgP8TPqQ9IuCZ7oGMvEm5RJbXkKej6Ma0eAygF0R2nLmox068OXMfQgUMRo5MWADkdmmNxDuS3f7%2B%2F%2F3lf06LVQPBNtyLSMG1LsxPMQZwnWk3VHZq4kW4lbQqXUZRjafhuabEWSGtwp%2BgeVN94msopsaQjptjeOTEWwBf2kL38%2BRRD2v1GVpj7U%2BQaSRqXaO6Gvcyf47LxpldfvxTThe8PntSzlXn1TyI9ZBh8PIxZ8zTvU4E%2B0v3UTYcLW2gOANdt94mWgAkzTN16ttmlYLBp4GVv99lA76B4mE5RivVao%2Fb%2FNtpBs%2F%2F8LdEyKSC5JWMD2RKYUNODNP7f1aXchcmBV2u1BM0TVKHqI1cYsFv%2BLv6f2GtvQN8jKOqnBztHAnPP9ovuVvF2UbmAg6dPcHw0l6qQ81v%2BTzdE7b8mlmy4h8EiiQRmhqlCYQ8R2KJ%2Fb6f%2Bc%2FrkhRvEH%2FnFGWbvSxrrmh0CKW4Bc8zdLdWoNOkbC3v7C61%2By9iLoxsfE9H5J18Q3bOArjFrtQPgRlrCdW9Kq6d3ix%2FH3TCbGrRPsT2WQpSOoCu%2FdKuFedkd1JLHOb5FijHC8jzglM0xsMMa6lsQGOqUBjk4x0upfK2utuAe%2Ba592rz%2BJtpsFWxwFXCvybMVru4hyEonJejITVq%2BPuUOtC3qGFcDHI0McV8DMnbus7JqdJlbRnqy%2BUuNW5Mnos52eMdOt%2FexaTVCVeYN7X%2ByGniYFkTmudLDT%2B7idRQerYggUv7i%2B45pEyMAJ3z04YBtTammEK%2B2T2nevLPi1H%2B%2F%2BViNGML0T2olKmhHWoU4vIdOCVxJEG8g5&X-Amz-Signature=93060fde0cf9f08edb1c7cec188cfaf203ad676290c8d5026fd40d4effabaa95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
