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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDNSHTU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkClUB4ap5F72bW27%2BDtIISJ8%2FzBGxY95nF%2BNFz8%2F1QgIhAJuYl6ZLe5mVRYpC%2BPYdlzt%2B4gH0%2FMqDu3fnrmwajFQZKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEzG5dbLQafcKvw6kq3APuKK%2FOhB1%2B02Ot0kuWIfBGb%2FRXiTBLEzWNsRwc47EVESdYclBJwlMspgGkUrjhv%2BQTgQgdkR5eOU%2FOovTTnSnC2F3dxm24vTv2QL7L9N6iM0IrFzOzEzQZIywINZHOqv1wDG0tZJpWoJIrYMPAXp4zUDQpW1Rdk8gpd5nWIKHUA%2Fp%2BSEZwGvrq598p5dqKLydI1ryLDCIFzc2XaZhak2wHstRhinm4DMziU7%2FzYsyfhG9L2rbaGzgtO88q5bzsqiWLZes0Omin%2B%2FL6priLijJ5fqZEjwIxjSHVCIYSGz0%2BLfjAI7YD1qnhXSf7%2BFlosFupT4UMzCPtCMM6UJuWxCDjINcP%2FFsR%2BeNQ8PWRRfTRvH6X53HGXlcAgHnj4Vz%2BQosJE9Uq1NqPCrUw%2BdKKfePR9cs4ZW2kVeeTn5i1ZCyBkW6Ecm0qnOvlToJffNpSgA0R4BrObxVHm7aS2hBLtK23sXX9pJkmvpLHX%2FM2i0A1zcKeeYrXvNrQq70%2BrSwKpXhhw0JyCasiI8ecX%2BLEHsEG%2BW8s0q0omn5kFfRrK0TT2q8RzreYSk5E5RYw9yreQ%2BnauLmXUyIr6z%2FOx0PuiKVvnkme9%2FGnwruiN45HjQpMrVBUm743Q9l1NoL%2BvjC0vZbDBjqkAXcPQwBs3MfC0XxGowxeuW7gnYx9jdWiGC5iEjYjip83gxxa111FlwhVso%2BxopjWhBaQaETdEAiH0vnRy616AsWvozKGPfjZ2jslT%2Bi5OVd3TbEHd7xboRqwv3292yoqRROExDnkuQQ6LI7asKsZ7NiY7FvLc1oOcNWqV1rVsHxNuxgOTti6V1I1om6mbxdGrCUol%2BtzmBVjVGMxbWYKG5G47oqg&X-Amz-Signature=39d264eb49912d31f4a2b3aa2d8236c7b24088a9ba3533cc847d0481e5cc2203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDNSHTU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkClUB4ap5F72bW27%2BDtIISJ8%2FzBGxY95nF%2BNFz8%2F1QgIhAJuYl6ZLe5mVRYpC%2BPYdlzt%2B4gH0%2FMqDu3fnrmwajFQZKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEzG5dbLQafcKvw6kq3APuKK%2FOhB1%2B02Ot0kuWIfBGb%2FRXiTBLEzWNsRwc47EVESdYclBJwlMspgGkUrjhv%2BQTgQgdkR5eOU%2FOovTTnSnC2F3dxm24vTv2QL7L9N6iM0IrFzOzEzQZIywINZHOqv1wDG0tZJpWoJIrYMPAXp4zUDQpW1Rdk8gpd5nWIKHUA%2Fp%2BSEZwGvrq598p5dqKLydI1ryLDCIFzc2XaZhak2wHstRhinm4DMziU7%2FzYsyfhG9L2rbaGzgtO88q5bzsqiWLZes0Omin%2B%2FL6priLijJ5fqZEjwIxjSHVCIYSGz0%2BLfjAI7YD1qnhXSf7%2BFlosFupT4UMzCPtCMM6UJuWxCDjINcP%2FFsR%2BeNQ8PWRRfTRvH6X53HGXlcAgHnj4Vz%2BQosJE9Uq1NqPCrUw%2BdKKfePR9cs4ZW2kVeeTn5i1ZCyBkW6Ecm0qnOvlToJffNpSgA0R4BrObxVHm7aS2hBLtK23sXX9pJkmvpLHX%2FM2i0A1zcKeeYrXvNrQq70%2BrSwKpXhhw0JyCasiI8ecX%2BLEHsEG%2BW8s0q0omn5kFfRrK0TT2q8RzreYSk5E5RYw9yreQ%2BnauLmXUyIr6z%2FOx0PuiKVvnkme9%2FGnwruiN45HjQpMrVBUm743Q9l1NoL%2BvjC0vZbDBjqkAXcPQwBs3MfC0XxGowxeuW7gnYx9jdWiGC5iEjYjip83gxxa111FlwhVso%2BxopjWhBaQaETdEAiH0vnRy616AsWvozKGPfjZ2jslT%2Bi5OVd3TbEHd7xboRqwv3292yoqRROExDnkuQQ6LI7asKsZ7NiY7FvLc1oOcNWqV1rVsHxNuxgOTti6V1I1om6mbxdGrCUol%2BtzmBVjVGMxbWYKG5G47oqg&X-Amz-Signature=b21a1c6be4576a6ec69b064c4265d5b4c6564d6ac8d007f6ad02993e64558193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDNSHTU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkClUB4ap5F72bW27%2BDtIISJ8%2FzBGxY95nF%2BNFz8%2F1QgIhAJuYl6ZLe5mVRYpC%2BPYdlzt%2B4gH0%2FMqDu3fnrmwajFQZKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEzG5dbLQafcKvw6kq3APuKK%2FOhB1%2B02Ot0kuWIfBGb%2FRXiTBLEzWNsRwc47EVESdYclBJwlMspgGkUrjhv%2BQTgQgdkR5eOU%2FOovTTnSnC2F3dxm24vTv2QL7L9N6iM0IrFzOzEzQZIywINZHOqv1wDG0tZJpWoJIrYMPAXp4zUDQpW1Rdk8gpd5nWIKHUA%2Fp%2BSEZwGvrq598p5dqKLydI1ryLDCIFzc2XaZhak2wHstRhinm4DMziU7%2FzYsyfhG9L2rbaGzgtO88q5bzsqiWLZes0Omin%2B%2FL6priLijJ5fqZEjwIxjSHVCIYSGz0%2BLfjAI7YD1qnhXSf7%2BFlosFupT4UMzCPtCMM6UJuWxCDjINcP%2FFsR%2BeNQ8PWRRfTRvH6X53HGXlcAgHnj4Vz%2BQosJE9Uq1NqPCrUw%2BdKKfePR9cs4ZW2kVeeTn5i1ZCyBkW6Ecm0qnOvlToJffNpSgA0R4BrObxVHm7aS2hBLtK23sXX9pJkmvpLHX%2FM2i0A1zcKeeYrXvNrQq70%2BrSwKpXhhw0JyCasiI8ecX%2BLEHsEG%2BW8s0q0omn5kFfRrK0TT2q8RzreYSk5E5RYw9yreQ%2BnauLmXUyIr6z%2FOx0PuiKVvnkme9%2FGnwruiN45HjQpMrVBUm743Q9l1NoL%2BvjC0vZbDBjqkAXcPQwBs3MfC0XxGowxeuW7gnYx9jdWiGC5iEjYjip83gxxa111FlwhVso%2BxopjWhBaQaETdEAiH0vnRy616AsWvozKGPfjZ2jslT%2Bi5OVd3TbEHd7xboRqwv3292yoqRROExDnkuQQ6LI7asKsZ7NiY7FvLc1oOcNWqV1rVsHxNuxgOTti6V1I1om6mbxdGrCUol%2BtzmBVjVGMxbWYKG5G47oqg&X-Amz-Signature=a23d8146d8b547038017e0ba0904b69405366e01f77872a24a98ede033ea3eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDNSHTU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkClUB4ap5F72bW27%2BDtIISJ8%2FzBGxY95nF%2BNFz8%2F1QgIhAJuYl6ZLe5mVRYpC%2BPYdlzt%2B4gH0%2FMqDu3fnrmwajFQZKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEzG5dbLQafcKvw6kq3APuKK%2FOhB1%2B02Ot0kuWIfBGb%2FRXiTBLEzWNsRwc47EVESdYclBJwlMspgGkUrjhv%2BQTgQgdkR5eOU%2FOovTTnSnC2F3dxm24vTv2QL7L9N6iM0IrFzOzEzQZIywINZHOqv1wDG0tZJpWoJIrYMPAXp4zUDQpW1Rdk8gpd5nWIKHUA%2Fp%2BSEZwGvrq598p5dqKLydI1ryLDCIFzc2XaZhak2wHstRhinm4DMziU7%2FzYsyfhG9L2rbaGzgtO88q5bzsqiWLZes0Omin%2B%2FL6priLijJ5fqZEjwIxjSHVCIYSGz0%2BLfjAI7YD1qnhXSf7%2BFlosFupT4UMzCPtCMM6UJuWxCDjINcP%2FFsR%2BeNQ8PWRRfTRvH6X53HGXlcAgHnj4Vz%2BQosJE9Uq1NqPCrUw%2BdKKfePR9cs4ZW2kVeeTn5i1ZCyBkW6Ecm0qnOvlToJffNpSgA0R4BrObxVHm7aS2hBLtK23sXX9pJkmvpLHX%2FM2i0A1zcKeeYrXvNrQq70%2BrSwKpXhhw0JyCasiI8ecX%2BLEHsEG%2BW8s0q0omn5kFfRrK0TT2q8RzreYSk5E5RYw9yreQ%2BnauLmXUyIr6z%2FOx0PuiKVvnkme9%2FGnwruiN45HjQpMrVBUm743Q9l1NoL%2BvjC0vZbDBjqkAXcPQwBs3MfC0XxGowxeuW7gnYx9jdWiGC5iEjYjip83gxxa111FlwhVso%2BxopjWhBaQaETdEAiH0vnRy616AsWvozKGPfjZ2jslT%2Bi5OVd3TbEHd7xboRqwv3292yoqRROExDnkuQQ6LI7asKsZ7NiY7FvLc1oOcNWqV1rVsHxNuxgOTti6V1I1om6mbxdGrCUol%2BtzmBVjVGMxbWYKG5G47oqg&X-Amz-Signature=dbbfb410ad3370b72aae252c8bb43757660c67bfd439fc98f1d7f3017664ca44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDNSHTU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkClUB4ap5F72bW27%2BDtIISJ8%2FzBGxY95nF%2BNFz8%2F1QgIhAJuYl6ZLe5mVRYpC%2BPYdlzt%2B4gH0%2FMqDu3fnrmwajFQZKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEzG5dbLQafcKvw6kq3APuKK%2FOhB1%2B02Ot0kuWIfBGb%2FRXiTBLEzWNsRwc47EVESdYclBJwlMspgGkUrjhv%2BQTgQgdkR5eOU%2FOovTTnSnC2F3dxm24vTv2QL7L9N6iM0IrFzOzEzQZIywINZHOqv1wDG0tZJpWoJIrYMPAXp4zUDQpW1Rdk8gpd5nWIKHUA%2Fp%2BSEZwGvrq598p5dqKLydI1ryLDCIFzc2XaZhak2wHstRhinm4DMziU7%2FzYsyfhG9L2rbaGzgtO88q5bzsqiWLZes0Omin%2B%2FL6priLijJ5fqZEjwIxjSHVCIYSGz0%2BLfjAI7YD1qnhXSf7%2BFlosFupT4UMzCPtCMM6UJuWxCDjINcP%2FFsR%2BeNQ8PWRRfTRvH6X53HGXlcAgHnj4Vz%2BQosJE9Uq1NqPCrUw%2BdKKfePR9cs4ZW2kVeeTn5i1ZCyBkW6Ecm0qnOvlToJffNpSgA0R4BrObxVHm7aS2hBLtK23sXX9pJkmvpLHX%2FM2i0A1zcKeeYrXvNrQq70%2BrSwKpXhhw0JyCasiI8ecX%2BLEHsEG%2BW8s0q0omn5kFfRrK0TT2q8RzreYSk5E5RYw9yreQ%2BnauLmXUyIr6z%2FOx0PuiKVvnkme9%2FGnwruiN45HjQpMrVBUm743Q9l1NoL%2BvjC0vZbDBjqkAXcPQwBs3MfC0XxGowxeuW7gnYx9jdWiGC5iEjYjip83gxxa111FlwhVso%2BxopjWhBaQaETdEAiH0vnRy616AsWvozKGPfjZ2jslT%2Bi5OVd3TbEHd7xboRqwv3292yoqRROExDnkuQQ6LI7asKsZ7NiY7FvLc1oOcNWqV1rVsHxNuxgOTti6V1I1om6mbxdGrCUol%2BtzmBVjVGMxbWYKG5G47oqg&X-Amz-Signature=7f72a43260b23a86943e4069506f65f8281c0acc0c8f1fcd0b7e9332ca17990f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDNSHTU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkClUB4ap5F72bW27%2BDtIISJ8%2FzBGxY95nF%2BNFz8%2F1QgIhAJuYl6ZLe5mVRYpC%2BPYdlzt%2B4gH0%2FMqDu3fnrmwajFQZKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEzG5dbLQafcKvw6kq3APuKK%2FOhB1%2B02Ot0kuWIfBGb%2FRXiTBLEzWNsRwc47EVESdYclBJwlMspgGkUrjhv%2BQTgQgdkR5eOU%2FOovTTnSnC2F3dxm24vTv2QL7L9N6iM0IrFzOzEzQZIywINZHOqv1wDG0tZJpWoJIrYMPAXp4zUDQpW1Rdk8gpd5nWIKHUA%2Fp%2BSEZwGvrq598p5dqKLydI1ryLDCIFzc2XaZhak2wHstRhinm4DMziU7%2FzYsyfhG9L2rbaGzgtO88q5bzsqiWLZes0Omin%2B%2FL6priLijJ5fqZEjwIxjSHVCIYSGz0%2BLfjAI7YD1qnhXSf7%2BFlosFupT4UMzCPtCMM6UJuWxCDjINcP%2FFsR%2BeNQ8PWRRfTRvH6X53HGXlcAgHnj4Vz%2BQosJE9Uq1NqPCrUw%2BdKKfePR9cs4ZW2kVeeTn5i1ZCyBkW6Ecm0qnOvlToJffNpSgA0R4BrObxVHm7aS2hBLtK23sXX9pJkmvpLHX%2FM2i0A1zcKeeYrXvNrQq70%2BrSwKpXhhw0JyCasiI8ecX%2BLEHsEG%2BW8s0q0omn5kFfRrK0TT2q8RzreYSk5E5RYw9yreQ%2BnauLmXUyIr6z%2FOx0PuiKVvnkme9%2FGnwruiN45HjQpMrVBUm743Q9l1NoL%2BvjC0vZbDBjqkAXcPQwBs3MfC0XxGowxeuW7gnYx9jdWiGC5iEjYjip83gxxa111FlwhVso%2BxopjWhBaQaETdEAiH0vnRy616AsWvozKGPfjZ2jslT%2Bi5OVd3TbEHd7xboRqwv3292yoqRROExDnkuQQ6LI7asKsZ7NiY7FvLc1oOcNWqV1rVsHxNuxgOTti6V1I1om6mbxdGrCUol%2BtzmBVjVGMxbWYKG5G47oqg&X-Amz-Signature=2bf2d7eb245e3fa5a15e17c44484bc6166b17e2233256e93ffb47c94e99eecdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDNSHTU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkClUB4ap5F72bW27%2BDtIISJ8%2FzBGxY95nF%2BNFz8%2F1QgIhAJuYl6ZLe5mVRYpC%2BPYdlzt%2B4gH0%2FMqDu3fnrmwajFQZKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEzG5dbLQafcKvw6kq3APuKK%2FOhB1%2B02Ot0kuWIfBGb%2FRXiTBLEzWNsRwc47EVESdYclBJwlMspgGkUrjhv%2BQTgQgdkR5eOU%2FOovTTnSnC2F3dxm24vTv2QL7L9N6iM0IrFzOzEzQZIywINZHOqv1wDG0tZJpWoJIrYMPAXp4zUDQpW1Rdk8gpd5nWIKHUA%2Fp%2BSEZwGvrq598p5dqKLydI1ryLDCIFzc2XaZhak2wHstRhinm4DMziU7%2FzYsyfhG9L2rbaGzgtO88q5bzsqiWLZes0Omin%2B%2FL6priLijJ5fqZEjwIxjSHVCIYSGz0%2BLfjAI7YD1qnhXSf7%2BFlosFupT4UMzCPtCMM6UJuWxCDjINcP%2FFsR%2BeNQ8PWRRfTRvH6X53HGXlcAgHnj4Vz%2BQosJE9Uq1NqPCrUw%2BdKKfePR9cs4ZW2kVeeTn5i1ZCyBkW6Ecm0qnOvlToJffNpSgA0R4BrObxVHm7aS2hBLtK23sXX9pJkmvpLHX%2FM2i0A1zcKeeYrXvNrQq70%2BrSwKpXhhw0JyCasiI8ecX%2BLEHsEG%2BW8s0q0omn5kFfRrK0TT2q8RzreYSk5E5RYw9yreQ%2BnauLmXUyIr6z%2FOx0PuiKVvnkme9%2FGnwruiN45HjQpMrVBUm743Q9l1NoL%2BvjC0vZbDBjqkAXcPQwBs3MfC0XxGowxeuW7gnYx9jdWiGC5iEjYjip83gxxa111FlwhVso%2BxopjWhBaQaETdEAiH0vnRy616AsWvozKGPfjZ2jslT%2Bi5OVd3TbEHd7xboRqwv3292yoqRROExDnkuQQ6LI7asKsZ7NiY7FvLc1oOcNWqV1rVsHxNuxgOTti6V1I1om6mbxdGrCUol%2BtzmBVjVGMxbWYKG5G47oqg&X-Amz-Signature=ac6ed2da8607de37f32b06a6d723633908e98c460513289a8724e46cd4ece23e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THDNSHTU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkClUB4ap5F72bW27%2BDtIISJ8%2FzBGxY95nF%2BNFz8%2F1QgIhAJuYl6ZLe5mVRYpC%2BPYdlzt%2B4gH0%2FMqDu3fnrmwajFQZKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEzG5dbLQafcKvw6kq3APuKK%2FOhB1%2B02Ot0kuWIfBGb%2FRXiTBLEzWNsRwc47EVESdYclBJwlMspgGkUrjhv%2BQTgQgdkR5eOU%2FOovTTnSnC2F3dxm24vTv2QL7L9N6iM0IrFzOzEzQZIywINZHOqv1wDG0tZJpWoJIrYMPAXp4zUDQpW1Rdk8gpd5nWIKHUA%2Fp%2BSEZwGvrq598p5dqKLydI1ryLDCIFzc2XaZhak2wHstRhinm4DMziU7%2FzYsyfhG9L2rbaGzgtO88q5bzsqiWLZes0Omin%2B%2FL6priLijJ5fqZEjwIxjSHVCIYSGz0%2BLfjAI7YD1qnhXSf7%2BFlosFupT4UMzCPtCMM6UJuWxCDjINcP%2FFsR%2BeNQ8PWRRfTRvH6X53HGXlcAgHnj4Vz%2BQosJE9Uq1NqPCrUw%2BdKKfePR9cs4ZW2kVeeTn5i1ZCyBkW6Ecm0qnOvlToJffNpSgA0R4BrObxVHm7aS2hBLtK23sXX9pJkmvpLHX%2FM2i0A1zcKeeYrXvNrQq70%2BrSwKpXhhw0JyCasiI8ecX%2BLEHsEG%2BW8s0q0omn5kFfRrK0TT2q8RzreYSk5E5RYw9yreQ%2BnauLmXUyIr6z%2FOx0PuiKVvnkme9%2FGnwruiN45HjQpMrVBUm743Q9l1NoL%2BvjC0vZbDBjqkAXcPQwBs3MfC0XxGowxeuW7gnYx9jdWiGC5iEjYjip83gxxa111FlwhVso%2BxopjWhBaQaETdEAiH0vnRy616AsWvozKGPfjZ2jslT%2Bi5OVd3TbEHd7xboRqwv3292yoqRROExDnkuQQ6LI7asKsZ7NiY7FvLc1oOcNWqV1rVsHxNuxgOTti6V1I1om6mbxdGrCUol%2BtzmBVjVGMxbWYKG5G47oqg&X-Amz-Signature=dffe4dbcd2a05c82abfdd55a260b18f744def501ab2426af7bd2d6bfbf03c40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
