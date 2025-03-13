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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTU4OFMC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkc90OYWSybG%2FNWwWJEVID6q6eVJeiVw%2Fp6ldYqc48fAiEA%2BeVB3OmSp4Y0jDEmjPUuiBzrkD%2BePftDdzjClT5mfXEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCZioGxwsZ8HyK2kSrcAws5sze5xjPKxrZPQB%2ByVnlD%2BzCty%2FiofpxD4xOKIp50OCbZZadlaYmY1G4DyySovj%2FFqPpZYjnTjJXBV7ymxWo%2FVkv%2BNtyiMmmvMebBtbc%2F%2BVcIx1jQlvLWGyRM0GA6vNoySkH03wx%2F4bPFO75cPQ9n8r99M9IngP9jMM%2BnEt09YxeuXxGL6Ill7gawBiVA7OPAgcT8%2BL40EotX1C21FOGBx9QlGwdmTuPPlB%2F%2FHyGcGoTF8BiJTmURVtGa6ROrIaerFBn72wafcsW%2BbdL2FcNhPry%2F8ea%2FFCAxclax5JZXb5OQqW9jDHdqZY3nZfomNJYmOQT%2BUV6TXH4mQgcMa9aOY0QAK%2BnxQLE6c30z8dgQak9yKDgFmjxm5NpxAigqSjZauquc34Ov3IDHUnPeRKfnTvWNgSbDNyJgkI2YaMEHlruZWKSMmqGnVa1BaLRlbC0UC8bgj1Ebtkq%2BQtlXm1qBDvsH3Ck5nUThTq3HSeim%2B4BX%2B7efxX8F0Juif7hzcgsPIUTulXom%2F8p%2BNcZZs82sdZ9r7R8saRy%2FcnY7xWJfVIGO29i1cO2POnswEgfy9qei7EFoxohf3meN0pLnbGespKz%2B4acsCSo%2BU7mwN7ZQFKjPAh4RfUQhuc9MMJXByL4GOqUB5dbSib6KUYHSq6Hrq5t%2BO4dZDQgtNCOu7olB3eEgJuq4irIR9H9%2BMNJdRmSebzMawwivW2qteM3f%2Fjz16%2FAjV5n3YGZKP8FUEVr9JeDZFkLCXbUqee1MwmOzGGAkKxigy8p2bN9xR2Yu8jREz01ulZOhPku32WRgvn2q4MikyS%2FRFL3RHQhENDCNWkfwUk%2BnxsItZMp%2BRifX7dmtSFKHjdgLYfxC&X-Amz-Signature=01406426ee12964e252213c1a213d65c06eec52193f7f4aa912a49207a405b67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTU4OFMC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkc90OYWSybG%2FNWwWJEVID6q6eVJeiVw%2Fp6ldYqc48fAiEA%2BeVB3OmSp4Y0jDEmjPUuiBzrkD%2BePftDdzjClT5mfXEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCZioGxwsZ8HyK2kSrcAws5sze5xjPKxrZPQB%2ByVnlD%2BzCty%2FiofpxD4xOKIp50OCbZZadlaYmY1G4DyySovj%2FFqPpZYjnTjJXBV7ymxWo%2FVkv%2BNtyiMmmvMebBtbc%2F%2BVcIx1jQlvLWGyRM0GA6vNoySkH03wx%2F4bPFO75cPQ9n8r99M9IngP9jMM%2BnEt09YxeuXxGL6Ill7gawBiVA7OPAgcT8%2BL40EotX1C21FOGBx9QlGwdmTuPPlB%2F%2FHyGcGoTF8BiJTmURVtGa6ROrIaerFBn72wafcsW%2BbdL2FcNhPry%2F8ea%2FFCAxclax5JZXb5OQqW9jDHdqZY3nZfomNJYmOQT%2BUV6TXH4mQgcMa9aOY0QAK%2BnxQLE6c30z8dgQak9yKDgFmjxm5NpxAigqSjZauquc34Ov3IDHUnPeRKfnTvWNgSbDNyJgkI2YaMEHlruZWKSMmqGnVa1BaLRlbC0UC8bgj1Ebtkq%2BQtlXm1qBDvsH3Ck5nUThTq3HSeim%2B4BX%2B7efxX8F0Juif7hzcgsPIUTulXom%2F8p%2BNcZZs82sdZ9r7R8saRy%2FcnY7xWJfVIGO29i1cO2POnswEgfy9qei7EFoxohf3meN0pLnbGespKz%2B4acsCSo%2BU7mwN7ZQFKjPAh4RfUQhuc9MMJXByL4GOqUB5dbSib6KUYHSq6Hrq5t%2BO4dZDQgtNCOu7olB3eEgJuq4irIR9H9%2BMNJdRmSebzMawwivW2qteM3f%2Fjz16%2FAjV5n3YGZKP8FUEVr9JeDZFkLCXbUqee1MwmOzGGAkKxigy8p2bN9xR2Yu8jREz01ulZOhPku32WRgvn2q4MikyS%2FRFL3RHQhENDCNWkfwUk%2BnxsItZMp%2BRifX7dmtSFKHjdgLYfxC&X-Amz-Signature=e93ed533d7004a647539bfc8421854bd1fcbc93976c15e0593db799c92460f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTU4OFMC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkc90OYWSybG%2FNWwWJEVID6q6eVJeiVw%2Fp6ldYqc48fAiEA%2BeVB3OmSp4Y0jDEmjPUuiBzrkD%2BePftDdzjClT5mfXEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCZioGxwsZ8HyK2kSrcAws5sze5xjPKxrZPQB%2ByVnlD%2BzCty%2FiofpxD4xOKIp50OCbZZadlaYmY1G4DyySovj%2FFqPpZYjnTjJXBV7ymxWo%2FVkv%2BNtyiMmmvMebBtbc%2F%2BVcIx1jQlvLWGyRM0GA6vNoySkH03wx%2F4bPFO75cPQ9n8r99M9IngP9jMM%2BnEt09YxeuXxGL6Ill7gawBiVA7OPAgcT8%2BL40EotX1C21FOGBx9QlGwdmTuPPlB%2F%2FHyGcGoTF8BiJTmURVtGa6ROrIaerFBn72wafcsW%2BbdL2FcNhPry%2F8ea%2FFCAxclax5JZXb5OQqW9jDHdqZY3nZfomNJYmOQT%2BUV6TXH4mQgcMa9aOY0QAK%2BnxQLE6c30z8dgQak9yKDgFmjxm5NpxAigqSjZauquc34Ov3IDHUnPeRKfnTvWNgSbDNyJgkI2YaMEHlruZWKSMmqGnVa1BaLRlbC0UC8bgj1Ebtkq%2BQtlXm1qBDvsH3Ck5nUThTq3HSeim%2B4BX%2B7efxX8F0Juif7hzcgsPIUTulXom%2F8p%2BNcZZs82sdZ9r7R8saRy%2FcnY7xWJfVIGO29i1cO2POnswEgfy9qei7EFoxohf3meN0pLnbGespKz%2B4acsCSo%2BU7mwN7ZQFKjPAh4RfUQhuc9MMJXByL4GOqUB5dbSib6KUYHSq6Hrq5t%2BO4dZDQgtNCOu7olB3eEgJuq4irIR9H9%2BMNJdRmSebzMawwivW2qteM3f%2Fjz16%2FAjV5n3YGZKP8FUEVr9JeDZFkLCXbUqee1MwmOzGGAkKxigy8p2bN9xR2Yu8jREz01ulZOhPku32WRgvn2q4MikyS%2FRFL3RHQhENDCNWkfwUk%2BnxsItZMp%2BRifX7dmtSFKHjdgLYfxC&X-Amz-Signature=b70a40a082f34e27a60b53949a9e3c91ab28f0d69bbbc99662b95febdbf5ee4e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTU4OFMC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkc90OYWSybG%2FNWwWJEVID6q6eVJeiVw%2Fp6ldYqc48fAiEA%2BeVB3OmSp4Y0jDEmjPUuiBzrkD%2BePftDdzjClT5mfXEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCZioGxwsZ8HyK2kSrcAws5sze5xjPKxrZPQB%2ByVnlD%2BzCty%2FiofpxD4xOKIp50OCbZZadlaYmY1G4DyySovj%2FFqPpZYjnTjJXBV7ymxWo%2FVkv%2BNtyiMmmvMebBtbc%2F%2BVcIx1jQlvLWGyRM0GA6vNoySkH03wx%2F4bPFO75cPQ9n8r99M9IngP9jMM%2BnEt09YxeuXxGL6Ill7gawBiVA7OPAgcT8%2BL40EotX1C21FOGBx9QlGwdmTuPPlB%2F%2FHyGcGoTF8BiJTmURVtGa6ROrIaerFBn72wafcsW%2BbdL2FcNhPry%2F8ea%2FFCAxclax5JZXb5OQqW9jDHdqZY3nZfomNJYmOQT%2BUV6TXH4mQgcMa9aOY0QAK%2BnxQLE6c30z8dgQak9yKDgFmjxm5NpxAigqSjZauquc34Ov3IDHUnPeRKfnTvWNgSbDNyJgkI2YaMEHlruZWKSMmqGnVa1BaLRlbC0UC8bgj1Ebtkq%2BQtlXm1qBDvsH3Ck5nUThTq3HSeim%2B4BX%2B7efxX8F0Juif7hzcgsPIUTulXom%2F8p%2BNcZZs82sdZ9r7R8saRy%2FcnY7xWJfVIGO29i1cO2POnswEgfy9qei7EFoxohf3meN0pLnbGespKz%2B4acsCSo%2BU7mwN7ZQFKjPAh4RfUQhuc9MMJXByL4GOqUB5dbSib6KUYHSq6Hrq5t%2BO4dZDQgtNCOu7olB3eEgJuq4irIR9H9%2BMNJdRmSebzMawwivW2qteM3f%2Fjz16%2FAjV5n3YGZKP8FUEVr9JeDZFkLCXbUqee1MwmOzGGAkKxigy8p2bN9xR2Yu8jREz01ulZOhPku32WRgvn2q4MikyS%2FRFL3RHQhENDCNWkfwUk%2BnxsItZMp%2BRifX7dmtSFKHjdgLYfxC&X-Amz-Signature=d39d1335fcc143a09c347a9bea508736e46667fd1e4d40702482e0d9aa2f9ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTU4OFMC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkc90OYWSybG%2FNWwWJEVID6q6eVJeiVw%2Fp6ldYqc48fAiEA%2BeVB3OmSp4Y0jDEmjPUuiBzrkD%2BePftDdzjClT5mfXEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCZioGxwsZ8HyK2kSrcAws5sze5xjPKxrZPQB%2ByVnlD%2BzCty%2FiofpxD4xOKIp50OCbZZadlaYmY1G4DyySovj%2FFqPpZYjnTjJXBV7ymxWo%2FVkv%2BNtyiMmmvMebBtbc%2F%2BVcIx1jQlvLWGyRM0GA6vNoySkH03wx%2F4bPFO75cPQ9n8r99M9IngP9jMM%2BnEt09YxeuXxGL6Ill7gawBiVA7OPAgcT8%2BL40EotX1C21FOGBx9QlGwdmTuPPlB%2F%2FHyGcGoTF8BiJTmURVtGa6ROrIaerFBn72wafcsW%2BbdL2FcNhPry%2F8ea%2FFCAxclax5JZXb5OQqW9jDHdqZY3nZfomNJYmOQT%2BUV6TXH4mQgcMa9aOY0QAK%2BnxQLE6c30z8dgQak9yKDgFmjxm5NpxAigqSjZauquc34Ov3IDHUnPeRKfnTvWNgSbDNyJgkI2YaMEHlruZWKSMmqGnVa1BaLRlbC0UC8bgj1Ebtkq%2BQtlXm1qBDvsH3Ck5nUThTq3HSeim%2B4BX%2B7efxX8F0Juif7hzcgsPIUTulXom%2F8p%2BNcZZs82sdZ9r7R8saRy%2FcnY7xWJfVIGO29i1cO2POnswEgfy9qei7EFoxohf3meN0pLnbGespKz%2B4acsCSo%2BU7mwN7ZQFKjPAh4RfUQhuc9MMJXByL4GOqUB5dbSib6KUYHSq6Hrq5t%2BO4dZDQgtNCOu7olB3eEgJuq4irIR9H9%2BMNJdRmSebzMawwivW2qteM3f%2Fjz16%2FAjV5n3YGZKP8FUEVr9JeDZFkLCXbUqee1MwmOzGGAkKxigy8p2bN9xR2Yu8jREz01ulZOhPku32WRgvn2q4MikyS%2FRFL3RHQhENDCNWkfwUk%2BnxsItZMp%2BRifX7dmtSFKHjdgLYfxC&X-Amz-Signature=6e877357f1e1152fcde5f63e40802c18a7d439c2ca6c5ff344fe4b46d41df33e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTU4OFMC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkc90OYWSybG%2FNWwWJEVID6q6eVJeiVw%2Fp6ldYqc48fAiEA%2BeVB3OmSp4Y0jDEmjPUuiBzrkD%2BePftDdzjClT5mfXEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCZioGxwsZ8HyK2kSrcAws5sze5xjPKxrZPQB%2ByVnlD%2BzCty%2FiofpxD4xOKIp50OCbZZadlaYmY1G4DyySovj%2FFqPpZYjnTjJXBV7ymxWo%2FVkv%2BNtyiMmmvMebBtbc%2F%2BVcIx1jQlvLWGyRM0GA6vNoySkH03wx%2F4bPFO75cPQ9n8r99M9IngP9jMM%2BnEt09YxeuXxGL6Ill7gawBiVA7OPAgcT8%2BL40EotX1C21FOGBx9QlGwdmTuPPlB%2F%2FHyGcGoTF8BiJTmURVtGa6ROrIaerFBn72wafcsW%2BbdL2FcNhPry%2F8ea%2FFCAxclax5JZXb5OQqW9jDHdqZY3nZfomNJYmOQT%2BUV6TXH4mQgcMa9aOY0QAK%2BnxQLE6c30z8dgQak9yKDgFmjxm5NpxAigqSjZauquc34Ov3IDHUnPeRKfnTvWNgSbDNyJgkI2YaMEHlruZWKSMmqGnVa1BaLRlbC0UC8bgj1Ebtkq%2BQtlXm1qBDvsH3Ck5nUThTq3HSeim%2B4BX%2B7efxX8F0Juif7hzcgsPIUTulXom%2F8p%2BNcZZs82sdZ9r7R8saRy%2FcnY7xWJfVIGO29i1cO2POnswEgfy9qei7EFoxohf3meN0pLnbGespKz%2B4acsCSo%2BU7mwN7ZQFKjPAh4RfUQhuc9MMJXByL4GOqUB5dbSib6KUYHSq6Hrq5t%2BO4dZDQgtNCOu7olB3eEgJuq4irIR9H9%2BMNJdRmSebzMawwivW2qteM3f%2Fjz16%2FAjV5n3YGZKP8FUEVr9JeDZFkLCXbUqee1MwmOzGGAkKxigy8p2bN9xR2Yu8jREz01ulZOhPku32WRgvn2q4MikyS%2FRFL3RHQhENDCNWkfwUk%2BnxsItZMp%2BRifX7dmtSFKHjdgLYfxC&X-Amz-Signature=7486ed6a09662e4140d8dbee3e0b1634ba12cabd0c69e59a946fd3070a8df5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTU4OFMC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkc90OYWSybG%2FNWwWJEVID6q6eVJeiVw%2Fp6ldYqc48fAiEA%2BeVB3OmSp4Y0jDEmjPUuiBzrkD%2BePftDdzjClT5mfXEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCZioGxwsZ8HyK2kSrcAws5sze5xjPKxrZPQB%2ByVnlD%2BzCty%2FiofpxD4xOKIp50OCbZZadlaYmY1G4DyySovj%2FFqPpZYjnTjJXBV7ymxWo%2FVkv%2BNtyiMmmvMebBtbc%2F%2BVcIx1jQlvLWGyRM0GA6vNoySkH03wx%2F4bPFO75cPQ9n8r99M9IngP9jMM%2BnEt09YxeuXxGL6Ill7gawBiVA7OPAgcT8%2BL40EotX1C21FOGBx9QlGwdmTuPPlB%2F%2FHyGcGoTF8BiJTmURVtGa6ROrIaerFBn72wafcsW%2BbdL2FcNhPry%2F8ea%2FFCAxclax5JZXb5OQqW9jDHdqZY3nZfomNJYmOQT%2BUV6TXH4mQgcMa9aOY0QAK%2BnxQLE6c30z8dgQak9yKDgFmjxm5NpxAigqSjZauquc34Ov3IDHUnPeRKfnTvWNgSbDNyJgkI2YaMEHlruZWKSMmqGnVa1BaLRlbC0UC8bgj1Ebtkq%2BQtlXm1qBDvsH3Ck5nUThTq3HSeim%2B4BX%2B7efxX8F0Juif7hzcgsPIUTulXom%2F8p%2BNcZZs82sdZ9r7R8saRy%2FcnY7xWJfVIGO29i1cO2POnswEgfy9qei7EFoxohf3meN0pLnbGespKz%2B4acsCSo%2BU7mwN7ZQFKjPAh4RfUQhuc9MMJXByL4GOqUB5dbSib6KUYHSq6Hrq5t%2BO4dZDQgtNCOu7olB3eEgJuq4irIR9H9%2BMNJdRmSebzMawwivW2qteM3f%2Fjz16%2FAjV5n3YGZKP8FUEVr9JeDZFkLCXbUqee1MwmOzGGAkKxigy8p2bN9xR2Yu8jREz01ulZOhPku32WRgvn2q4MikyS%2FRFL3RHQhENDCNWkfwUk%2BnxsItZMp%2BRifX7dmtSFKHjdgLYfxC&X-Amz-Signature=145bc0fe7c7939473d7c1addeb7027efded1322ff04ddc9c84734aa3496456f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTU4OFMC%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkc90OYWSybG%2FNWwWJEVID6q6eVJeiVw%2Fp6ldYqc48fAiEA%2BeVB3OmSp4Y0jDEmjPUuiBzrkD%2BePftDdzjClT5mfXEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCCZioGxwsZ8HyK2kSrcAws5sze5xjPKxrZPQB%2ByVnlD%2BzCty%2FiofpxD4xOKIp50OCbZZadlaYmY1G4DyySovj%2FFqPpZYjnTjJXBV7ymxWo%2FVkv%2BNtyiMmmvMebBtbc%2F%2BVcIx1jQlvLWGyRM0GA6vNoySkH03wx%2F4bPFO75cPQ9n8r99M9IngP9jMM%2BnEt09YxeuXxGL6Ill7gawBiVA7OPAgcT8%2BL40EotX1C21FOGBx9QlGwdmTuPPlB%2F%2FHyGcGoTF8BiJTmURVtGa6ROrIaerFBn72wafcsW%2BbdL2FcNhPry%2F8ea%2FFCAxclax5JZXb5OQqW9jDHdqZY3nZfomNJYmOQT%2BUV6TXH4mQgcMa9aOY0QAK%2BnxQLE6c30z8dgQak9yKDgFmjxm5NpxAigqSjZauquc34Ov3IDHUnPeRKfnTvWNgSbDNyJgkI2YaMEHlruZWKSMmqGnVa1BaLRlbC0UC8bgj1Ebtkq%2BQtlXm1qBDvsH3Ck5nUThTq3HSeim%2B4BX%2B7efxX8F0Juif7hzcgsPIUTulXom%2F8p%2BNcZZs82sdZ9r7R8saRy%2FcnY7xWJfVIGO29i1cO2POnswEgfy9qei7EFoxohf3meN0pLnbGespKz%2B4acsCSo%2BU7mwN7ZQFKjPAh4RfUQhuc9MMJXByL4GOqUB5dbSib6KUYHSq6Hrq5t%2BO4dZDQgtNCOu7olB3eEgJuq4irIR9H9%2BMNJdRmSebzMawwivW2qteM3f%2Fjz16%2FAjV5n3YGZKP8FUEVr9JeDZFkLCXbUqee1MwmOzGGAkKxigy8p2bN9xR2Yu8jREz01ulZOhPku32WRgvn2q4MikyS%2FRFL3RHQhENDCNWkfwUk%2BnxsItZMp%2BRifX7dmtSFKHjdgLYfxC&X-Amz-Signature=73607047badc11466d72b39d8a32281d8f734e76e2ed2b141a2e2ea4f65a64b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
