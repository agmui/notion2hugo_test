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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3KQXGD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmcXt%2BTFKoazSR0moZtaeAZ0eHQT4ej7Tu948pHuHFwIhAOER5YkpnF0T6E%2Ban9vPowEHQzoFlrLagEuFYV5QEEg0Kv8DCHwQABoMNjM3NDIzMTgzODA1Igz1%2FSjMGKBtCOVkJ94q3AMk3mPuv1Tl75ufQJTKgAFQNgVBnqdhlOCJQtnrMviBCUmTDKWhT299qp7uUOnng6SZOkFPK2m9AF66gA2WUCXSyod3ZN1aS8aG0DO%2FB%2BhRjT5xSIfQOZCdHPkR5w9tJn6zYtzt9Jma%2BubkYiZHw8efegSBlqJa1T85q5asskox7ix3at%2BImr3qBfo%2F53BieC9T78XouYmidqW7qWq%2Fvw%2FdHsts4ePWbECFcywUvCUb26tfWrbVG3wZYl%2B0l6itZjG9NxNX6TtFD0OUhv8YiagMW%2B5SKAxmdcG0%2BYIMIRwH6qz6SJtMyRqS17EF0nYkeVwq8scbZ0uWh8ZRlELfT8lm47pM6%2FkfKeZJTeaSmVNW1nyiMo%2Bk%2BxICC4KyYM5MiQAwyn6aran0olYOvGeT%2FQe945t7ah9OmDasEOuoNhQTVfuxLpY6mbNfUdVtg8m%2FEML9gTolklQjCYM%2Fg%2Fk40yoypc3njiV9J2p%2BVAt88tax3CoCTf7gNODEtSREhF3drDvT5%2FJtO4T5dhp3oG9Q8EKickAa9RAVPKyXTSNOfFNIVbQvamcOriso8mVDyMIrtjlZhxge5JRBvi3Vl6i9BFhGPIAedRR0pmnxt10LmSXhLf7RaYIZCY83jvF9QjDpyvvCBjqkARTX31T9xRfetP7rURGoSXiIbw59If8jkLI28%2Bll%2FwdpGd3jq7etHXv4WYFshuXtou1P8%2FbXGCgJHFNzCY9OnNRU3cXZSAlnrwIval3%2BuyHfizBpLaQUmuv8iM7wFYJ%2BJIoHqDo8lxHixC8WKdG%2F2bvfObVNLwjEuNMIvBCFHVaX9Yn4Jx0k8%2BG7X1Dkretyosmjd8PipYdfccrC9BfGZVjo2J25&X-Amz-Signature=a2fa5bc6a13043140f703b3a211dc055452ddc99378a95cbc6f7f53c540119db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3KQXGD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmcXt%2BTFKoazSR0moZtaeAZ0eHQT4ej7Tu948pHuHFwIhAOER5YkpnF0T6E%2Ban9vPowEHQzoFlrLagEuFYV5QEEg0Kv8DCHwQABoMNjM3NDIzMTgzODA1Igz1%2FSjMGKBtCOVkJ94q3AMk3mPuv1Tl75ufQJTKgAFQNgVBnqdhlOCJQtnrMviBCUmTDKWhT299qp7uUOnng6SZOkFPK2m9AF66gA2WUCXSyod3ZN1aS8aG0DO%2FB%2BhRjT5xSIfQOZCdHPkR5w9tJn6zYtzt9Jma%2BubkYiZHw8efegSBlqJa1T85q5asskox7ix3at%2BImr3qBfo%2F53BieC9T78XouYmidqW7qWq%2Fvw%2FdHsts4ePWbECFcywUvCUb26tfWrbVG3wZYl%2B0l6itZjG9NxNX6TtFD0OUhv8YiagMW%2B5SKAxmdcG0%2BYIMIRwH6qz6SJtMyRqS17EF0nYkeVwq8scbZ0uWh8ZRlELfT8lm47pM6%2FkfKeZJTeaSmVNW1nyiMo%2Bk%2BxICC4KyYM5MiQAwyn6aran0olYOvGeT%2FQe945t7ah9OmDasEOuoNhQTVfuxLpY6mbNfUdVtg8m%2FEML9gTolklQjCYM%2Fg%2Fk40yoypc3njiV9J2p%2BVAt88tax3CoCTf7gNODEtSREhF3drDvT5%2FJtO4T5dhp3oG9Q8EKickAa9RAVPKyXTSNOfFNIVbQvamcOriso8mVDyMIrtjlZhxge5JRBvi3Vl6i9BFhGPIAedRR0pmnxt10LmSXhLf7RaYIZCY83jvF9QjDpyvvCBjqkARTX31T9xRfetP7rURGoSXiIbw59If8jkLI28%2Bll%2FwdpGd3jq7etHXv4WYFshuXtou1P8%2FbXGCgJHFNzCY9OnNRU3cXZSAlnrwIval3%2BuyHfizBpLaQUmuv8iM7wFYJ%2BJIoHqDo8lxHixC8WKdG%2F2bvfObVNLwjEuNMIvBCFHVaX9Yn4Jx0k8%2BG7X1Dkretyosmjd8PipYdfccrC9BfGZVjo2J25&X-Amz-Signature=adc2ced0b3707bce6fadfd7223aca28a4ce9d96a6c0d14337590334e63b51c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3KQXGD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmcXt%2BTFKoazSR0moZtaeAZ0eHQT4ej7Tu948pHuHFwIhAOER5YkpnF0T6E%2Ban9vPowEHQzoFlrLagEuFYV5QEEg0Kv8DCHwQABoMNjM3NDIzMTgzODA1Igz1%2FSjMGKBtCOVkJ94q3AMk3mPuv1Tl75ufQJTKgAFQNgVBnqdhlOCJQtnrMviBCUmTDKWhT299qp7uUOnng6SZOkFPK2m9AF66gA2WUCXSyod3ZN1aS8aG0DO%2FB%2BhRjT5xSIfQOZCdHPkR5w9tJn6zYtzt9Jma%2BubkYiZHw8efegSBlqJa1T85q5asskox7ix3at%2BImr3qBfo%2F53BieC9T78XouYmidqW7qWq%2Fvw%2FdHsts4ePWbECFcywUvCUb26tfWrbVG3wZYl%2B0l6itZjG9NxNX6TtFD0OUhv8YiagMW%2B5SKAxmdcG0%2BYIMIRwH6qz6SJtMyRqS17EF0nYkeVwq8scbZ0uWh8ZRlELfT8lm47pM6%2FkfKeZJTeaSmVNW1nyiMo%2Bk%2BxICC4KyYM5MiQAwyn6aran0olYOvGeT%2FQe945t7ah9OmDasEOuoNhQTVfuxLpY6mbNfUdVtg8m%2FEML9gTolklQjCYM%2Fg%2Fk40yoypc3njiV9J2p%2BVAt88tax3CoCTf7gNODEtSREhF3drDvT5%2FJtO4T5dhp3oG9Q8EKickAa9RAVPKyXTSNOfFNIVbQvamcOriso8mVDyMIrtjlZhxge5JRBvi3Vl6i9BFhGPIAedRR0pmnxt10LmSXhLf7RaYIZCY83jvF9QjDpyvvCBjqkARTX31T9xRfetP7rURGoSXiIbw59If8jkLI28%2Bll%2FwdpGd3jq7etHXv4WYFshuXtou1P8%2FbXGCgJHFNzCY9OnNRU3cXZSAlnrwIval3%2BuyHfizBpLaQUmuv8iM7wFYJ%2BJIoHqDo8lxHixC8WKdG%2F2bvfObVNLwjEuNMIvBCFHVaX9Yn4Jx0k8%2BG7X1Dkretyosmjd8PipYdfccrC9BfGZVjo2J25&X-Amz-Signature=6547ccee5c67badba042d839002f6e42ca25fdeeb47f8b6dad4638a568a4a27a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3KQXGD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmcXt%2BTFKoazSR0moZtaeAZ0eHQT4ej7Tu948pHuHFwIhAOER5YkpnF0T6E%2Ban9vPowEHQzoFlrLagEuFYV5QEEg0Kv8DCHwQABoMNjM3NDIzMTgzODA1Igz1%2FSjMGKBtCOVkJ94q3AMk3mPuv1Tl75ufQJTKgAFQNgVBnqdhlOCJQtnrMviBCUmTDKWhT299qp7uUOnng6SZOkFPK2m9AF66gA2WUCXSyod3ZN1aS8aG0DO%2FB%2BhRjT5xSIfQOZCdHPkR5w9tJn6zYtzt9Jma%2BubkYiZHw8efegSBlqJa1T85q5asskox7ix3at%2BImr3qBfo%2F53BieC9T78XouYmidqW7qWq%2Fvw%2FdHsts4ePWbECFcywUvCUb26tfWrbVG3wZYl%2B0l6itZjG9NxNX6TtFD0OUhv8YiagMW%2B5SKAxmdcG0%2BYIMIRwH6qz6SJtMyRqS17EF0nYkeVwq8scbZ0uWh8ZRlELfT8lm47pM6%2FkfKeZJTeaSmVNW1nyiMo%2Bk%2BxICC4KyYM5MiQAwyn6aran0olYOvGeT%2FQe945t7ah9OmDasEOuoNhQTVfuxLpY6mbNfUdVtg8m%2FEML9gTolklQjCYM%2Fg%2Fk40yoypc3njiV9J2p%2BVAt88tax3CoCTf7gNODEtSREhF3drDvT5%2FJtO4T5dhp3oG9Q8EKickAa9RAVPKyXTSNOfFNIVbQvamcOriso8mVDyMIrtjlZhxge5JRBvi3Vl6i9BFhGPIAedRR0pmnxt10LmSXhLf7RaYIZCY83jvF9QjDpyvvCBjqkARTX31T9xRfetP7rURGoSXiIbw59If8jkLI28%2Bll%2FwdpGd3jq7etHXv4WYFshuXtou1P8%2FbXGCgJHFNzCY9OnNRU3cXZSAlnrwIval3%2BuyHfizBpLaQUmuv8iM7wFYJ%2BJIoHqDo8lxHixC8WKdG%2F2bvfObVNLwjEuNMIvBCFHVaX9Yn4Jx0k8%2BG7X1Dkretyosmjd8PipYdfccrC9BfGZVjo2J25&X-Amz-Signature=5ec978f4084395c01d4b6226ddc0b8c20ff84bd0ff11c1dc19a71e658a834780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3KQXGD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmcXt%2BTFKoazSR0moZtaeAZ0eHQT4ej7Tu948pHuHFwIhAOER5YkpnF0T6E%2Ban9vPowEHQzoFlrLagEuFYV5QEEg0Kv8DCHwQABoMNjM3NDIzMTgzODA1Igz1%2FSjMGKBtCOVkJ94q3AMk3mPuv1Tl75ufQJTKgAFQNgVBnqdhlOCJQtnrMviBCUmTDKWhT299qp7uUOnng6SZOkFPK2m9AF66gA2WUCXSyod3ZN1aS8aG0DO%2FB%2BhRjT5xSIfQOZCdHPkR5w9tJn6zYtzt9Jma%2BubkYiZHw8efegSBlqJa1T85q5asskox7ix3at%2BImr3qBfo%2F53BieC9T78XouYmidqW7qWq%2Fvw%2FdHsts4ePWbECFcywUvCUb26tfWrbVG3wZYl%2B0l6itZjG9NxNX6TtFD0OUhv8YiagMW%2B5SKAxmdcG0%2BYIMIRwH6qz6SJtMyRqS17EF0nYkeVwq8scbZ0uWh8ZRlELfT8lm47pM6%2FkfKeZJTeaSmVNW1nyiMo%2Bk%2BxICC4KyYM5MiQAwyn6aran0olYOvGeT%2FQe945t7ah9OmDasEOuoNhQTVfuxLpY6mbNfUdVtg8m%2FEML9gTolklQjCYM%2Fg%2Fk40yoypc3njiV9J2p%2BVAt88tax3CoCTf7gNODEtSREhF3drDvT5%2FJtO4T5dhp3oG9Q8EKickAa9RAVPKyXTSNOfFNIVbQvamcOriso8mVDyMIrtjlZhxge5JRBvi3Vl6i9BFhGPIAedRR0pmnxt10LmSXhLf7RaYIZCY83jvF9QjDpyvvCBjqkARTX31T9xRfetP7rURGoSXiIbw59If8jkLI28%2Bll%2FwdpGd3jq7etHXv4WYFshuXtou1P8%2FbXGCgJHFNzCY9OnNRU3cXZSAlnrwIval3%2BuyHfizBpLaQUmuv8iM7wFYJ%2BJIoHqDo8lxHixC8WKdG%2F2bvfObVNLwjEuNMIvBCFHVaX9Yn4Jx0k8%2BG7X1Dkretyosmjd8PipYdfccrC9BfGZVjo2J25&X-Amz-Signature=b441bc44cfe266f33130be9fe5344fd92e033620c5f7b86a5ca6c73bc6d1938b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3KQXGD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmcXt%2BTFKoazSR0moZtaeAZ0eHQT4ej7Tu948pHuHFwIhAOER5YkpnF0T6E%2Ban9vPowEHQzoFlrLagEuFYV5QEEg0Kv8DCHwQABoMNjM3NDIzMTgzODA1Igz1%2FSjMGKBtCOVkJ94q3AMk3mPuv1Tl75ufQJTKgAFQNgVBnqdhlOCJQtnrMviBCUmTDKWhT299qp7uUOnng6SZOkFPK2m9AF66gA2WUCXSyod3ZN1aS8aG0DO%2FB%2BhRjT5xSIfQOZCdHPkR5w9tJn6zYtzt9Jma%2BubkYiZHw8efegSBlqJa1T85q5asskox7ix3at%2BImr3qBfo%2F53BieC9T78XouYmidqW7qWq%2Fvw%2FdHsts4ePWbECFcywUvCUb26tfWrbVG3wZYl%2B0l6itZjG9NxNX6TtFD0OUhv8YiagMW%2B5SKAxmdcG0%2BYIMIRwH6qz6SJtMyRqS17EF0nYkeVwq8scbZ0uWh8ZRlELfT8lm47pM6%2FkfKeZJTeaSmVNW1nyiMo%2Bk%2BxICC4KyYM5MiQAwyn6aran0olYOvGeT%2FQe945t7ah9OmDasEOuoNhQTVfuxLpY6mbNfUdVtg8m%2FEML9gTolklQjCYM%2Fg%2Fk40yoypc3njiV9J2p%2BVAt88tax3CoCTf7gNODEtSREhF3drDvT5%2FJtO4T5dhp3oG9Q8EKickAa9RAVPKyXTSNOfFNIVbQvamcOriso8mVDyMIrtjlZhxge5JRBvi3Vl6i9BFhGPIAedRR0pmnxt10LmSXhLf7RaYIZCY83jvF9QjDpyvvCBjqkARTX31T9xRfetP7rURGoSXiIbw59If8jkLI28%2Bll%2FwdpGd3jq7etHXv4WYFshuXtou1P8%2FbXGCgJHFNzCY9OnNRU3cXZSAlnrwIval3%2BuyHfizBpLaQUmuv8iM7wFYJ%2BJIoHqDo8lxHixC8WKdG%2F2bvfObVNLwjEuNMIvBCFHVaX9Yn4Jx0k8%2BG7X1Dkretyosmjd8PipYdfccrC9BfGZVjo2J25&X-Amz-Signature=c156ef4a732563cc207fca57b0e24a6b56fcef6cbd7cb159f7af3336183b0e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3KQXGD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmcXt%2BTFKoazSR0moZtaeAZ0eHQT4ej7Tu948pHuHFwIhAOER5YkpnF0T6E%2Ban9vPowEHQzoFlrLagEuFYV5QEEg0Kv8DCHwQABoMNjM3NDIzMTgzODA1Igz1%2FSjMGKBtCOVkJ94q3AMk3mPuv1Tl75ufQJTKgAFQNgVBnqdhlOCJQtnrMviBCUmTDKWhT299qp7uUOnng6SZOkFPK2m9AF66gA2WUCXSyod3ZN1aS8aG0DO%2FB%2BhRjT5xSIfQOZCdHPkR5w9tJn6zYtzt9Jma%2BubkYiZHw8efegSBlqJa1T85q5asskox7ix3at%2BImr3qBfo%2F53BieC9T78XouYmidqW7qWq%2Fvw%2FdHsts4ePWbECFcywUvCUb26tfWrbVG3wZYl%2B0l6itZjG9NxNX6TtFD0OUhv8YiagMW%2B5SKAxmdcG0%2BYIMIRwH6qz6SJtMyRqS17EF0nYkeVwq8scbZ0uWh8ZRlELfT8lm47pM6%2FkfKeZJTeaSmVNW1nyiMo%2Bk%2BxICC4KyYM5MiQAwyn6aran0olYOvGeT%2FQe945t7ah9OmDasEOuoNhQTVfuxLpY6mbNfUdVtg8m%2FEML9gTolklQjCYM%2Fg%2Fk40yoypc3njiV9J2p%2BVAt88tax3CoCTf7gNODEtSREhF3drDvT5%2FJtO4T5dhp3oG9Q8EKickAa9RAVPKyXTSNOfFNIVbQvamcOriso8mVDyMIrtjlZhxge5JRBvi3Vl6i9BFhGPIAedRR0pmnxt10LmSXhLf7RaYIZCY83jvF9QjDpyvvCBjqkARTX31T9xRfetP7rURGoSXiIbw59If8jkLI28%2Bll%2FwdpGd3jq7etHXv4WYFshuXtou1P8%2FbXGCgJHFNzCY9OnNRU3cXZSAlnrwIval3%2BuyHfizBpLaQUmuv8iM7wFYJ%2BJIoHqDo8lxHixC8WKdG%2F2bvfObVNLwjEuNMIvBCFHVaX9Yn4Jx0k8%2BG7X1Dkretyosmjd8PipYdfccrC9BfGZVjo2J25&X-Amz-Signature=36ad16655b51d2be6ac9c1d625912264d6591522bb0e6d73bd08d7dc1978a7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS3KQXGD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFmcXt%2BTFKoazSR0moZtaeAZ0eHQT4ej7Tu948pHuHFwIhAOER5YkpnF0T6E%2Ban9vPowEHQzoFlrLagEuFYV5QEEg0Kv8DCHwQABoMNjM3NDIzMTgzODA1Igz1%2FSjMGKBtCOVkJ94q3AMk3mPuv1Tl75ufQJTKgAFQNgVBnqdhlOCJQtnrMviBCUmTDKWhT299qp7uUOnng6SZOkFPK2m9AF66gA2WUCXSyod3ZN1aS8aG0DO%2FB%2BhRjT5xSIfQOZCdHPkR5w9tJn6zYtzt9Jma%2BubkYiZHw8efegSBlqJa1T85q5asskox7ix3at%2BImr3qBfo%2F53BieC9T78XouYmidqW7qWq%2Fvw%2FdHsts4ePWbECFcywUvCUb26tfWrbVG3wZYl%2B0l6itZjG9NxNX6TtFD0OUhv8YiagMW%2B5SKAxmdcG0%2BYIMIRwH6qz6SJtMyRqS17EF0nYkeVwq8scbZ0uWh8ZRlELfT8lm47pM6%2FkfKeZJTeaSmVNW1nyiMo%2Bk%2BxICC4KyYM5MiQAwyn6aran0olYOvGeT%2FQe945t7ah9OmDasEOuoNhQTVfuxLpY6mbNfUdVtg8m%2FEML9gTolklQjCYM%2Fg%2Fk40yoypc3njiV9J2p%2BVAt88tax3CoCTf7gNODEtSREhF3drDvT5%2FJtO4T5dhp3oG9Q8EKickAa9RAVPKyXTSNOfFNIVbQvamcOriso8mVDyMIrtjlZhxge5JRBvi3Vl6i9BFhGPIAedRR0pmnxt10LmSXhLf7RaYIZCY83jvF9QjDpyvvCBjqkARTX31T9xRfetP7rURGoSXiIbw59If8jkLI28%2Bll%2FwdpGd3jq7etHXv4WYFshuXtou1P8%2FbXGCgJHFNzCY9OnNRU3cXZSAlnrwIval3%2BuyHfizBpLaQUmuv8iM7wFYJ%2BJIoHqDo8lxHixC8WKdG%2F2bvfObVNLwjEuNMIvBCFHVaX9Yn4Jx0k8%2BG7X1Dkretyosmjd8PipYdfccrC9BfGZVjo2J25&X-Amz-Signature=3561ea5017c1fa86c531f0df1170266f8b58e74d11df04e4fd31e9c2c2033edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
