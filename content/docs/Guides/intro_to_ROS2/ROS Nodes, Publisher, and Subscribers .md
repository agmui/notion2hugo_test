---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRPJRLH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDwp8AkaVQUx4pzcVRc5DM6xiZtlXCSDn83DJUVltLcZAiEA6eLG6EfA6DNCbPb7RFziMe3vQdMSjywNdkz6Mt1%2BljYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwfKWm8DI7JZwA%2BtSrcA5T1nFvtMMQ3d2sR%2FBm8z14rGy8welTp1A46yow3zOnTS12V6vZsHkuUPjCpOpMvxRaRlH%2FLUeAlAwBvtUN6u63zUKnExrq6IHnj4F0bZRq%2BEoMVgA2qlYs5o6%2FecqtH7hKKYBQRluFCr%2B3mTW4BZS5RgT2nlYLo0U2HpcwnnkG0NrjuBiTN7L1i6iWuE1YgON8tyB8uPl2Tw2KqJbckWywHDMibmxN5nD%2FmYZCvH%2BYfCiHFsGHfNg0aRj67TPfjrWiG1sKUaH5YuU2nr8vk%2Fz2KlnrODp%2BezgeEMYgOzAO%2BNDLuVA25%2Byj6UZoJS29PXMtPdv%2FN0Rj3OBXyX%2BIrcjpXus1oioCtZSbNhDXDPMZplFDmaro1fspKWKQZUB0Zw4lIg3M2unUGw2pJzJKFKyvxOES%2FtCpZBVvsbRREid1%2FeioyVIY8D0HpJCNNpW%2F5EeVRml4oJ63Hen3%2FJDm9vsjiAGu5zrrUsTq39P2LtwxEe%2Fx0%2FqLOECp%2BvqgK5Y3Ox1dwyTecqf0bB3GrQsekYHe5a2r6Tlhz9o8undb40zOpvBCyStxK5wdyF240lPTZcbm%2FgRuq%2BX8T%2BL37dShVKENen7lBU1rGAMNPbD2ffhU%2B71GFGpyDebyZQkEFMJXU0sQGOqUBqAQ%2Fq3xl7ssCRAf9qjsrwMSswvJhjCZJMUE3vToElICX%2BlbhPUWlp5IoDgeeoOmHcaPl4a5kd7Wz2f5a0BP8dcu%2BlR%2BuKvD4V%2BCscH58eAOvQOiKqNvOGMYakRBWru228t%2B2GRnahye9c1dNV3An1PnhLLWkcB6c033ATAbWzplfcUdkG6M1tA%2Fw1uxkWLM71XcZQ%2FpUCSb3u2%2FOC2vxsJ19ZHoP&X-Amz-Signature=a29849a2f96085631702c41c930986747b06565b63b46760759a32bd51a2cd81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRPJRLH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDwp8AkaVQUx4pzcVRc5DM6xiZtlXCSDn83DJUVltLcZAiEA6eLG6EfA6DNCbPb7RFziMe3vQdMSjywNdkz6Mt1%2BljYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwfKWm8DI7JZwA%2BtSrcA5T1nFvtMMQ3d2sR%2FBm8z14rGy8welTp1A46yow3zOnTS12V6vZsHkuUPjCpOpMvxRaRlH%2FLUeAlAwBvtUN6u63zUKnExrq6IHnj4F0bZRq%2BEoMVgA2qlYs5o6%2FecqtH7hKKYBQRluFCr%2B3mTW4BZS5RgT2nlYLo0U2HpcwnnkG0NrjuBiTN7L1i6iWuE1YgON8tyB8uPl2Tw2KqJbckWywHDMibmxN5nD%2FmYZCvH%2BYfCiHFsGHfNg0aRj67TPfjrWiG1sKUaH5YuU2nr8vk%2Fz2KlnrODp%2BezgeEMYgOzAO%2BNDLuVA25%2Byj6UZoJS29PXMtPdv%2FN0Rj3OBXyX%2BIrcjpXus1oioCtZSbNhDXDPMZplFDmaro1fspKWKQZUB0Zw4lIg3M2unUGw2pJzJKFKyvxOES%2FtCpZBVvsbRREid1%2FeioyVIY8D0HpJCNNpW%2F5EeVRml4oJ63Hen3%2FJDm9vsjiAGu5zrrUsTq39P2LtwxEe%2Fx0%2FqLOECp%2BvqgK5Y3Ox1dwyTecqf0bB3GrQsekYHe5a2r6Tlhz9o8undb40zOpvBCyStxK5wdyF240lPTZcbm%2FgRuq%2BX8T%2BL37dShVKENen7lBU1rGAMNPbD2ffhU%2B71GFGpyDebyZQkEFMJXU0sQGOqUBqAQ%2Fq3xl7ssCRAf9qjsrwMSswvJhjCZJMUE3vToElICX%2BlbhPUWlp5IoDgeeoOmHcaPl4a5kd7Wz2f5a0BP8dcu%2BlR%2BuKvD4V%2BCscH58eAOvQOiKqNvOGMYakRBWru228t%2B2GRnahye9c1dNV3An1PnhLLWkcB6c033ATAbWzplfcUdkG6M1tA%2Fw1uxkWLM71XcZQ%2FpUCSb3u2%2FOC2vxsJ19ZHoP&X-Amz-Signature=417fe1f30a0afd252c61be5c68646f64700b3464b1f54501617915e0d528c263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRPJRLH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDwp8AkaVQUx4pzcVRc5DM6xiZtlXCSDn83DJUVltLcZAiEA6eLG6EfA6DNCbPb7RFziMe3vQdMSjywNdkz6Mt1%2BljYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwfKWm8DI7JZwA%2BtSrcA5T1nFvtMMQ3d2sR%2FBm8z14rGy8welTp1A46yow3zOnTS12V6vZsHkuUPjCpOpMvxRaRlH%2FLUeAlAwBvtUN6u63zUKnExrq6IHnj4F0bZRq%2BEoMVgA2qlYs5o6%2FecqtH7hKKYBQRluFCr%2B3mTW4BZS5RgT2nlYLo0U2HpcwnnkG0NrjuBiTN7L1i6iWuE1YgON8tyB8uPl2Tw2KqJbckWywHDMibmxN5nD%2FmYZCvH%2BYfCiHFsGHfNg0aRj67TPfjrWiG1sKUaH5YuU2nr8vk%2Fz2KlnrODp%2BezgeEMYgOzAO%2BNDLuVA25%2Byj6UZoJS29PXMtPdv%2FN0Rj3OBXyX%2BIrcjpXus1oioCtZSbNhDXDPMZplFDmaro1fspKWKQZUB0Zw4lIg3M2unUGw2pJzJKFKyvxOES%2FtCpZBVvsbRREid1%2FeioyVIY8D0HpJCNNpW%2F5EeVRml4oJ63Hen3%2FJDm9vsjiAGu5zrrUsTq39P2LtwxEe%2Fx0%2FqLOECp%2BvqgK5Y3Ox1dwyTecqf0bB3GrQsekYHe5a2r6Tlhz9o8undb40zOpvBCyStxK5wdyF240lPTZcbm%2FgRuq%2BX8T%2BL37dShVKENen7lBU1rGAMNPbD2ffhU%2B71GFGpyDebyZQkEFMJXU0sQGOqUBqAQ%2Fq3xl7ssCRAf9qjsrwMSswvJhjCZJMUE3vToElICX%2BlbhPUWlp5IoDgeeoOmHcaPl4a5kd7Wz2f5a0BP8dcu%2BlR%2BuKvD4V%2BCscH58eAOvQOiKqNvOGMYakRBWru228t%2B2GRnahye9c1dNV3An1PnhLLWkcB6c033ATAbWzplfcUdkG6M1tA%2Fw1uxkWLM71XcZQ%2FpUCSb3u2%2FOC2vxsJ19ZHoP&X-Amz-Signature=fde83e9589b9d5e4481d67a9490a6b8e2953be12c1f3e5a29a39558cac462765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRPJRLH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDwp8AkaVQUx4pzcVRc5DM6xiZtlXCSDn83DJUVltLcZAiEA6eLG6EfA6DNCbPb7RFziMe3vQdMSjywNdkz6Mt1%2BljYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwfKWm8DI7JZwA%2BtSrcA5T1nFvtMMQ3d2sR%2FBm8z14rGy8welTp1A46yow3zOnTS12V6vZsHkuUPjCpOpMvxRaRlH%2FLUeAlAwBvtUN6u63zUKnExrq6IHnj4F0bZRq%2BEoMVgA2qlYs5o6%2FecqtH7hKKYBQRluFCr%2B3mTW4BZS5RgT2nlYLo0U2HpcwnnkG0NrjuBiTN7L1i6iWuE1YgON8tyB8uPl2Tw2KqJbckWywHDMibmxN5nD%2FmYZCvH%2BYfCiHFsGHfNg0aRj67TPfjrWiG1sKUaH5YuU2nr8vk%2Fz2KlnrODp%2BezgeEMYgOzAO%2BNDLuVA25%2Byj6UZoJS29PXMtPdv%2FN0Rj3OBXyX%2BIrcjpXus1oioCtZSbNhDXDPMZplFDmaro1fspKWKQZUB0Zw4lIg3M2unUGw2pJzJKFKyvxOES%2FtCpZBVvsbRREid1%2FeioyVIY8D0HpJCNNpW%2F5EeVRml4oJ63Hen3%2FJDm9vsjiAGu5zrrUsTq39P2LtwxEe%2Fx0%2FqLOECp%2BvqgK5Y3Ox1dwyTecqf0bB3GrQsekYHe5a2r6Tlhz9o8undb40zOpvBCyStxK5wdyF240lPTZcbm%2FgRuq%2BX8T%2BL37dShVKENen7lBU1rGAMNPbD2ffhU%2B71GFGpyDebyZQkEFMJXU0sQGOqUBqAQ%2Fq3xl7ssCRAf9qjsrwMSswvJhjCZJMUE3vToElICX%2BlbhPUWlp5IoDgeeoOmHcaPl4a5kd7Wz2f5a0BP8dcu%2BlR%2BuKvD4V%2BCscH58eAOvQOiKqNvOGMYakRBWru228t%2B2GRnahye9c1dNV3An1PnhLLWkcB6c033ATAbWzplfcUdkG6M1tA%2Fw1uxkWLM71XcZQ%2FpUCSb3u2%2FOC2vxsJ19ZHoP&X-Amz-Signature=0eb370764988d26673df3f37183c86a131acdd272f5412ecf5b9d328e01cff72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRPJRLH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDwp8AkaVQUx4pzcVRc5DM6xiZtlXCSDn83DJUVltLcZAiEA6eLG6EfA6DNCbPb7RFziMe3vQdMSjywNdkz6Mt1%2BljYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwfKWm8DI7JZwA%2BtSrcA5T1nFvtMMQ3d2sR%2FBm8z14rGy8welTp1A46yow3zOnTS12V6vZsHkuUPjCpOpMvxRaRlH%2FLUeAlAwBvtUN6u63zUKnExrq6IHnj4F0bZRq%2BEoMVgA2qlYs5o6%2FecqtH7hKKYBQRluFCr%2B3mTW4BZS5RgT2nlYLo0U2HpcwnnkG0NrjuBiTN7L1i6iWuE1YgON8tyB8uPl2Tw2KqJbckWywHDMibmxN5nD%2FmYZCvH%2BYfCiHFsGHfNg0aRj67TPfjrWiG1sKUaH5YuU2nr8vk%2Fz2KlnrODp%2BezgeEMYgOzAO%2BNDLuVA25%2Byj6UZoJS29PXMtPdv%2FN0Rj3OBXyX%2BIrcjpXus1oioCtZSbNhDXDPMZplFDmaro1fspKWKQZUB0Zw4lIg3M2unUGw2pJzJKFKyvxOES%2FtCpZBVvsbRREid1%2FeioyVIY8D0HpJCNNpW%2F5EeVRml4oJ63Hen3%2FJDm9vsjiAGu5zrrUsTq39P2LtwxEe%2Fx0%2FqLOECp%2BvqgK5Y3Ox1dwyTecqf0bB3GrQsekYHe5a2r6Tlhz9o8undb40zOpvBCyStxK5wdyF240lPTZcbm%2FgRuq%2BX8T%2BL37dShVKENen7lBU1rGAMNPbD2ffhU%2B71GFGpyDebyZQkEFMJXU0sQGOqUBqAQ%2Fq3xl7ssCRAf9qjsrwMSswvJhjCZJMUE3vToElICX%2BlbhPUWlp5IoDgeeoOmHcaPl4a5kd7Wz2f5a0BP8dcu%2BlR%2BuKvD4V%2BCscH58eAOvQOiKqNvOGMYakRBWru228t%2B2GRnahye9c1dNV3An1PnhLLWkcB6c033ATAbWzplfcUdkG6M1tA%2Fw1uxkWLM71XcZQ%2FpUCSb3u2%2FOC2vxsJ19ZHoP&X-Amz-Signature=99d37e3f9643dc8d60a168d1884050464f5120d635da9508cd815fc55289faa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRPJRLH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDwp8AkaVQUx4pzcVRc5DM6xiZtlXCSDn83DJUVltLcZAiEA6eLG6EfA6DNCbPb7RFziMe3vQdMSjywNdkz6Mt1%2BljYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwfKWm8DI7JZwA%2BtSrcA5T1nFvtMMQ3d2sR%2FBm8z14rGy8welTp1A46yow3zOnTS12V6vZsHkuUPjCpOpMvxRaRlH%2FLUeAlAwBvtUN6u63zUKnExrq6IHnj4F0bZRq%2BEoMVgA2qlYs5o6%2FecqtH7hKKYBQRluFCr%2B3mTW4BZS5RgT2nlYLo0U2HpcwnnkG0NrjuBiTN7L1i6iWuE1YgON8tyB8uPl2Tw2KqJbckWywHDMibmxN5nD%2FmYZCvH%2BYfCiHFsGHfNg0aRj67TPfjrWiG1sKUaH5YuU2nr8vk%2Fz2KlnrODp%2BezgeEMYgOzAO%2BNDLuVA25%2Byj6UZoJS29PXMtPdv%2FN0Rj3OBXyX%2BIrcjpXus1oioCtZSbNhDXDPMZplFDmaro1fspKWKQZUB0Zw4lIg3M2unUGw2pJzJKFKyvxOES%2FtCpZBVvsbRREid1%2FeioyVIY8D0HpJCNNpW%2F5EeVRml4oJ63Hen3%2FJDm9vsjiAGu5zrrUsTq39P2LtwxEe%2Fx0%2FqLOECp%2BvqgK5Y3Ox1dwyTecqf0bB3GrQsekYHe5a2r6Tlhz9o8undb40zOpvBCyStxK5wdyF240lPTZcbm%2FgRuq%2BX8T%2BL37dShVKENen7lBU1rGAMNPbD2ffhU%2B71GFGpyDebyZQkEFMJXU0sQGOqUBqAQ%2Fq3xl7ssCRAf9qjsrwMSswvJhjCZJMUE3vToElICX%2BlbhPUWlp5IoDgeeoOmHcaPl4a5kd7Wz2f5a0BP8dcu%2BlR%2BuKvD4V%2BCscH58eAOvQOiKqNvOGMYakRBWru228t%2B2GRnahye9c1dNV3An1PnhLLWkcB6c033ATAbWzplfcUdkG6M1tA%2Fw1uxkWLM71XcZQ%2FpUCSb3u2%2FOC2vxsJ19ZHoP&X-Amz-Signature=f07ce0df116e589c7ef36f66b27d3847c4701bdcbe2136d43944fbfcb2784f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRPJRLH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDwp8AkaVQUx4pzcVRc5DM6xiZtlXCSDn83DJUVltLcZAiEA6eLG6EfA6DNCbPb7RFziMe3vQdMSjywNdkz6Mt1%2BljYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwfKWm8DI7JZwA%2BtSrcA5T1nFvtMMQ3d2sR%2FBm8z14rGy8welTp1A46yow3zOnTS12V6vZsHkuUPjCpOpMvxRaRlH%2FLUeAlAwBvtUN6u63zUKnExrq6IHnj4F0bZRq%2BEoMVgA2qlYs5o6%2FecqtH7hKKYBQRluFCr%2B3mTW4BZS5RgT2nlYLo0U2HpcwnnkG0NrjuBiTN7L1i6iWuE1YgON8tyB8uPl2Tw2KqJbckWywHDMibmxN5nD%2FmYZCvH%2BYfCiHFsGHfNg0aRj67TPfjrWiG1sKUaH5YuU2nr8vk%2Fz2KlnrODp%2BezgeEMYgOzAO%2BNDLuVA25%2Byj6UZoJS29PXMtPdv%2FN0Rj3OBXyX%2BIrcjpXus1oioCtZSbNhDXDPMZplFDmaro1fspKWKQZUB0Zw4lIg3M2unUGw2pJzJKFKyvxOES%2FtCpZBVvsbRREid1%2FeioyVIY8D0HpJCNNpW%2F5EeVRml4oJ63Hen3%2FJDm9vsjiAGu5zrrUsTq39P2LtwxEe%2Fx0%2FqLOECp%2BvqgK5Y3Ox1dwyTecqf0bB3GrQsekYHe5a2r6Tlhz9o8undb40zOpvBCyStxK5wdyF240lPTZcbm%2FgRuq%2BX8T%2BL37dShVKENen7lBU1rGAMNPbD2ffhU%2B71GFGpyDebyZQkEFMJXU0sQGOqUBqAQ%2Fq3xl7ssCRAf9qjsrwMSswvJhjCZJMUE3vToElICX%2BlbhPUWlp5IoDgeeoOmHcaPl4a5kd7Wz2f5a0BP8dcu%2BlR%2BuKvD4V%2BCscH58eAOvQOiKqNvOGMYakRBWru228t%2B2GRnahye9c1dNV3An1PnhLLWkcB6c033ATAbWzplfcUdkG6M1tA%2Fw1uxkWLM71XcZQ%2FpUCSb3u2%2FOC2vxsJ19ZHoP&X-Amz-Signature=d1d4539277cb8e87629faa7ce058db4b05230b6d1c6075188abff6e904199f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNRPJRLH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T141413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIDwp8AkaVQUx4pzcVRc5DM6xiZtlXCSDn83DJUVltLcZAiEA6eLG6EfA6DNCbPb7RFziMe3vQdMSjywNdkz6Mt1%2BljYqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwfKWm8DI7JZwA%2BtSrcA5T1nFvtMMQ3d2sR%2FBm8z14rGy8welTp1A46yow3zOnTS12V6vZsHkuUPjCpOpMvxRaRlH%2FLUeAlAwBvtUN6u63zUKnExrq6IHnj4F0bZRq%2BEoMVgA2qlYs5o6%2FecqtH7hKKYBQRluFCr%2B3mTW4BZS5RgT2nlYLo0U2HpcwnnkG0NrjuBiTN7L1i6iWuE1YgON8tyB8uPl2Tw2KqJbckWywHDMibmxN5nD%2FmYZCvH%2BYfCiHFsGHfNg0aRj67TPfjrWiG1sKUaH5YuU2nr8vk%2Fz2KlnrODp%2BezgeEMYgOzAO%2BNDLuVA25%2Byj6UZoJS29PXMtPdv%2FN0Rj3OBXyX%2BIrcjpXus1oioCtZSbNhDXDPMZplFDmaro1fspKWKQZUB0Zw4lIg3M2unUGw2pJzJKFKyvxOES%2FtCpZBVvsbRREid1%2FeioyVIY8D0HpJCNNpW%2F5EeVRml4oJ63Hen3%2FJDm9vsjiAGu5zrrUsTq39P2LtwxEe%2Fx0%2FqLOECp%2BvqgK5Y3Ox1dwyTecqf0bB3GrQsekYHe5a2r6Tlhz9o8undb40zOpvBCyStxK5wdyF240lPTZcbm%2FgRuq%2BX8T%2BL37dShVKENen7lBU1rGAMNPbD2ffhU%2B71GFGpyDebyZQkEFMJXU0sQGOqUBqAQ%2Fq3xl7ssCRAf9qjsrwMSswvJhjCZJMUE3vToElICX%2BlbhPUWlp5IoDgeeoOmHcaPl4a5kd7Wz2f5a0BP8dcu%2BlR%2BuKvD4V%2BCscH58eAOvQOiKqNvOGMYakRBWru228t%2B2GRnahye9c1dNV3An1PnhLLWkcB6c033ATAbWzplfcUdkG6M1tA%2Fw1uxkWLM71XcZQ%2FpUCSb3u2%2FOC2vxsJ19ZHoP&X-Amz-Signature=ba5419d6d7ddcd3624334d9662f35e81cd089bf4184e0eddd899d0beb9cc1702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
