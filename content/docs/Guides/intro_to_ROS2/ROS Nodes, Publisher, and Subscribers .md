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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3KBZIS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1adnEHougbrbXkz2siv4qx1eA7GFNGopVBFVmGFOOUAiBZw%2Bat1WsL57L4KoVsw82aERVgO9CNEGw7AcML0tTvzir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMybFxpoZIrJGMbjoOKtwDi7Wj0v37NOep0CbH6Li0jbFQrD9IgKyKJj%2BD6eOjV1YiysI%2FTbOSYFqqVq0WzMroQvtw84M3G%2Fw1wCfa7hRW10nTuECCgNKbFX7l5%2FnkKCoohY1FE8kFNQ24R7LcVcKZUF4EHqqgHd3dV2tjQMxJZrLdKx8wGmZHcNe1cFgXQtEq%2BRQYRUmSeGPQqL51d0NSSzvWdhCXZ3rcjX%2B3eSEf9TE6%2FMdvOgsDg42jya8duEaQgsxFwgr2SCH7FfKR%2B6oyOJGOTnCt1iHJeMi4sGChbVrxhrd0lhtjKcV5UY3wJUNLiAgut17igIeHWqjRSTjn0wrb2tEEAxhFQPBqUDpcFxbTpDKTkWhH%2FtUerc5fcC0i%2BbEzlXPCpPVnME8AjoZdypeUlwQwjyT%2FnW0aKW1Y0Gy6WSdLzNs8KTPvzypEyBV6pAx%2BX0%2BCpsrWW24Xppx6LBYRCo4Wqg8YxtZFbKh9yoTnnXkynvcjg5TvaGESuDULPmoaio%2FcKSAKaKfH8LdHzou%2FKV0%2FZgx%2BFJilYDHFH%2BGuFAXQAmp40JQ%2FlIvayZ4N229MYMOymovn60pg28VQ5C6z%2BiCRiGMbavU8t6rG4lQmj%2FaB5XOrnWAtOfwAXpXIPzKssEmI%2BKiKwHQwkJbqwAY6pgEJ7K0xMDe05Lna4y%2BUEm%2FEI1oYgRXcVG6vrOgBEpapUKEaiMhk8Wcx78Ett1rYL3N0EG3lJ4exvV8IRWo%2BrOW4%2BHfI2uKE9tNXJFtmHJ4c9tn3OtC9KCQw7xu3Sf2YrrJnwZ2ayU9NuvHAycX7Ul77PzN5y%2FmFI61tCi6V%2F1lXQ3x0TJVUAL0e0QhVMB6ocmBQe%2FzvDtGparGmAHC9N1C4mnufL6Uj&X-Amz-Signature=6983aba6767efd1944fa79d7e4b1fa0872ea54968c789e034a70b1d13d410879&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3KBZIS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1adnEHougbrbXkz2siv4qx1eA7GFNGopVBFVmGFOOUAiBZw%2Bat1WsL57L4KoVsw82aERVgO9CNEGw7AcML0tTvzir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMybFxpoZIrJGMbjoOKtwDi7Wj0v37NOep0CbH6Li0jbFQrD9IgKyKJj%2BD6eOjV1YiysI%2FTbOSYFqqVq0WzMroQvtw84M3G%2Fw1wCfa7hRW10nTuECCgNKbFX7l5%2FnkKCoohY1FE8kFNQ24R7LcVcKZUF4EHqqgHd3dV2tjQMxJZrLdKx8wGmZHcNe1cFgXQtEq%2BRQYRUmSeGPQqL51d0NSSzvWdhCXZ3rcjX%2B3eSEf9TE6%2FMdvOgsDg42jya8duEaQgsxFwgr2SCH7FfKR%2B6oyOJGOTnCt1iHJeMi4sGChbVrxhrd0lhtjKcV5UY3wJUNLiAgut17igIeHWqjRSTjn0wrb2tEEAxhFQPBqUDpcFxbTpDKTkWhH%2FtUerc5fcC0i%2BbEzlXPCpPVnME8AjoZdypeUlwQwjyT%2FnW0aKW1Y0Gy6WSdLzNs8KTPvzypEyBV6pAx%2BX0%2BCpsrWW24Xppx6LBYRCo4Wqg8YxtZFbKh9yoTnnXkynvcjg5TvaGESuDULPmoaio%2FcKSAKaKfH8LdHzou%2FKV0%2FZgx%2BFJilYDHFH%2BGuFAXQAmp40JQ%2FlIvayZ4N229MYMOymovn60pg28VQ5C6z%2BiCRiGMbavU8t6rG4lQmj%2FaB5XOrnWAtOfwAXpXIPzKssEmI%2BKiKwHQwkJbqwAY6pgEJ7K0xMDe05Lna4y%2BUEm%2FEI1oYgRXcVG6vrOgBEpapUKEaiMhk8Wcx78Ett1rYL3N0EG3lJ4exvV8IRWo%2BrOW4%2BHfI2uKE9tNXJFtmHJ4c9tn3OtC9KCQw7xu3Sf2YrrJnwZ2ayU9NuvHAycX7Ul77PzN5y%2FmFI61tCi6V%2F1lXQ3x0TJVUAL0e0QhVMB6ocmBQe%2FzvDtGparGmAHC9N1C4mnufL6Uj&X-Amz-Signature=27194203d1ef95311a6472c0ea5ff50ef415d031de96d09662bfb2cbfd463a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3KBZIS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1adnEHougbrbXkz2siv4qx1eA7GFNGopVBFVmGFOOUAiBZw%2Bat1WsL57L4KoVsw82aERVgO9CNEGw7AcML0tTvzir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMybFxpoZIrJGMbjoOKtwDi7Wj0v37NOep0CbH6Li0jbFQrD9IgKyKJj%2BD6eOjV1YiysI%2FTbOSYFqqVq0WzMroQvtw84M3G%2Fw1wCfa7hRW10nTuECCgNKbFX7l5%2FnkKCoohY1FE8kFNQ24R7LcVcKZUF4EHqqgHd3dV2tjQMxJZrLdKx8wGmZHcNe1cFgXQtEq%2BRQYRUmSeGPQqL51d0NSSzvWdhCXZ3rcjX%2B3eSEf9TE6%2FMdvOgsDg42jya8duEaQgsxFwgr2SCH7FfKR%2B6oyOJGOTnCt1iHJeMi4sGChbVrxhrd0lhtjKcV5UY3wJUNLiAgut17igIeHWqjRSTjn0wrb2tEEAxhFQPBqUDpcFxbTpDKTkWhH%2FtUerc5fcC0i%2BbEzlXPCpPVnME8AjoZdypeUlwQwjyT%2FnW0aKW1Y0Gy6WSdLzNs8KTPvzypEyBV6pAx%2BX0%2BCpsrWW24Xppx6LBYRCo4Wqg8YxtZFbKh9yoTnnXkynvcjg5TvaGESuDULPmoaio%2FcKSAKaKfH8LdHzou%2FKV0%2FZgx%2BFJilYDHFH%2BGuFAXQAmp40JQ%2FlIvayZ4N229MYMOymovn60pg28VQ5C6z%2BiCRiGMbavU8t6rG4lQmj%2FaB5XOrnWAtOfwAXpXIPzKssEmI%2BKiKwHQwkJbqwAY6pgEJ7K0xMDe05Lna4y%2BUEm%2FEI1oYgRXcVG6vrOgBEpapUKEaiMhk8Wcx78Ett1rYL3N0EG3lJ4exvV8IRWo%2BrOW4%2BHfI2uKE9tNXJFtmHJ4c9tn3OtC9KCQw7xu3Sf2YrrJnwZ2ayU9NuvHAycX7Ul77PzN5y%2FmFI61tCi6V%2F1lXQ3x0TJVUAL0e0QhVMB6ocmBQe%2FzvDtGparGmAHC9N1C4mnufL6Uj&X-Amz-Signature=83a55efb8171a867e24eb638a61f69972b94fcddca51bc367dd2401bc181392e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3KBZIS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1adnEHougbrbXkz2siv4qx1eA7GFNGopVBFVmGFOOUAiBZw%2Bat1WsL57L4KoVsw82aERVgO9CNEGw7AcML0tTvzir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMybFxpoZIrJGMbjoOKtwDi7Wj0v37NOep0CbH6Li0jbFQrD9IgKyKJj%2BD6eOjV1YiysI%2FTbOSYFqqVq0WzMroQvtw84M3G%2Fw1wCfa7hRW10nTuECCgNKbFX7l5%2FnkKCoohY1FE8kFNQ24R7LcVcKZUF4EHqqgHd3dV2tjQMxJZrLdKx8wGmZHcNe1cFgXQtEq%2BRQYRUmSeGPQqL51d0NSSzvWdhCXZ3rcjX%2B3eSEf9TE6%2FMdvOgsDg42jya8duEaQgsxFwgr2SCH7FfKR%2B6oyOJGOTnCt1iHJeMi4sGChbVrxhrd0lhtjKcV5UY3wJUNLiAgut17igIeHWqjRSTjn0wrb2tEEAxhFQPBqUDpcFxbTpDKTkWhH%2FtUerc5fcC0i%2BbEzlXPCpPVnME8AjoZdypeUlwQwjyT%2FnW0aKW1Y0Gy6WSdLzNs8KTPvzypEyBV6pAx%2BX0%2BCpsrWW24Xppx6LBYRCo4Wqg8YxtZFbKh9yoTnnXkynvcjg5TvaGESuDULPmoaio%2FcKSAKaKfH8LdHzou%2FKV0%2FZgx%2BFJilYDHFH%2BGuFAXQAmp40JQ%2FlIvayZ4N229MYMOymovn60pg28VQ5C6z%2BiCRiGMbavU8t6rG4lQmj%2FaB5XOrnWAtOfwAXpXIPzKssEmI%2BKiKwHQwkJbqwAY6pgEJ7K0xMDe05Lna4y%2BUEm%2FEI1oYgRXcVG6vrOgBEpapUKEaiMhk8Wcx78Ett1rYL3N0EG3lJ4exvV8IRWo%2BrOW4%2BHfI2uKE9tNXJFtmHJ4c9tn3OtC9KCQw7xu3Sf2YrrJnwZ2ayU9NuvHAycX7Ul77PzN5y%2FmFI61tCi6V%2F1lXQ3x0TJVUAL0e0QhVMB6ocmBQe%2FzvDtGparGmAHC9N1C4mnufL6Uj&X-Amz-Signature=1db21777c8c9a27e364fbbc7884f337388c3ec1ba4fbc2ac7c0c82be12139947&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3KBZIS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1adnEHougbrbXkz2siv4qx1eA7GFNGopVBFVmGFOOUAiBZw%2Bat1WsL57L4KoVsw82aERVgO9CNEGw7AcML0tTvzir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMybFxpoZIrJGMbjoOKtwDi7Wj0v37NOep0CbH6Li0jbFQrD9IgKyKJj%2BD6eOjV1YiysI%2FTbOSYFqqVq0WzMroQvtw84M3G%2Fw1wCfa7hRW10nTuECCgNKbFX7l5%2FnkKCoohY1FE8kFNQ24R7LcVcKZUF4EHqqgHd3dV2tjQMxJZrLdKx8wGmZHcNe1cFgXQtEq%2BRQYRUmSeGPQqL51d0NSSzvWdhCXZ3rcjX%2B3eSEf9TE6%2FMdvOgsDg42jya8duEaQgsxFwgr2SCH7FfKR%2B6oyOJGOTnCt1iHJeMi4sGChbVrxhrd0lhtjKcV5UY3wJUNLiAgut17igIeHWqjRSTjn0wrb2tEEAxhFQPBqUDpcFxbTpDKTkWhH%2FtUerc5fcC0i%2BbEzlXPCpPVnME8AjoZdypeUlwQwjyT%2FnW0aKW1Y0Gy6WSdLzNs8KTPvzypEyBV6pAx%2BX0%2BCpsrWW24Xppx6LBYRCo4Wqg8YxtZFbKh9yoTnnXkynvcjg5TvaGESuDULPmoaio%2FcKSAKaKfH8LdHzou%2FKV0%2FZgx%2BFJilYDHFH%2BGuFAXQAmp40JQ%2FlIvayZ4N229MYMOymovn60pg28VQ5C6z%2BiCRiGMbavU8t6rG4lQmj%2FaB5XOrnWAtOfwAXpXIPzKssEmI%2BKiKwHQwkJbqwAY6pgEJ7K0xMDe05Lna4y%2BUEm%2FEI1oYgRXcVG6vrOgBEpapUKEaiMhk8Wcx78Ett1rYL3N0EG3lJ4exvV8IRWo%2BrOW4%2BHfI2uKE9tNXJFtmHJ4c9tn3OtC9KCQw7xu3Sf2YrrJnwZ2ayU9NuvHAycX7Ul77PzN5y%2FmFI61tCi6V%2F1lXQ3x0TJVUAL0e0QhVMB6ocmBQe%2FzvDtGparGmAHC9N1C4mnufL6Uj&X-Amz-Signature=97d53aa11a4c14fab9efe19e3c097c17cc40c12af5588a30186761d8a12ce9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3KBZIS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1adnEHougbrbXkz2siv4qx1eA7GFNGopVBFVmGFOOUAiBZw%2Bat1WsL57L4KoVsw82aERVgO9CNEGw7AcML0tTvzir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMybFxpoZIrJGMbjoOKtwDi7Wj0v37NOep0CbH6Li0jbFQrD9IgKyKJj%2BD6eOjV1YiysI%2FTbOSYFqqVq0WzMroQvtw84M3G%2Fw1wCfa7hRW10nTuECCgNKbFX7l5%2FnkKCoohY1FE8kFNQ24R7LcVcKZUF4EHqqgHd3dV2tjQMxJZrLdKx8wGmZHcNe1cFgXQtEq%2BRQYRUmSeGPQqL51d0NSSzvWdhCXZ3rcjX%2B3eSEf9TE6%2FMdvOgsDg42jya8duEaQgsxFwgr2SCH7FfKR%2B6oyOJGOTnCt1iHJeMi4sGChbVrxhrd0lhtjKcV5UY3wJUNLiAgut17igIeHWqjRSTjn0wrb2tEEAxhFQPBqUDpcFxbTpDKTkWhH%2FtUerc5fcC0i%2BbEzlXPCpPVnME8AjoZdypeUlwQwjyT%2FnW0aKW1Y0Gy6WSdLzNs8KTPvzypEyBV6pAx%2BX0%2BCpsrWW24Xppx6LBYRCo4Wqg8YxtZFbKh9yoTnnXkynvcjg5TvaGESuDULPmoaio%2FcKSAKaKfH8LdHzou%2FKV0%2FZgx%2BFJilYDHFH%2BGuFAXQAmp40JQ%2FlIvayZ4N229MYMOymovn60pg28VQ5C6z%2BiCRiGMbavU8t6rG4lQmj%2FaB5XOrnWAtOfwAXpXIPzKssEmI%2BKiKwHQwkJbqwAY6pgEJ7K0xMDe05Lna4y%2BUEm%2FEI1oYgRXcVG6vrOgBEpapUKEaiMhk8Wcx78Ett1rYL3N0EG3lJ4exvV8IRWo%2BrOW4%2BHfI2uKE9tNXJFtmHJ4c9tn3OtC9KCQw7xu3Sf2YrrJnwZ2ayU9NuvHAycX7Ul77PzN5y%2FmFI61tCi6V%2F1lXQ3x0TJVUAL0e0QhVMB6ocmBQe%2FzvDtGparGmAHC9N1C4mnufL6Uj&X-Amz-Signature=6f5eb960fca47801c6ece1cdadbb8b5beec2df69f4c829a937254b3a9b2f20e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3KBZIS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1adnEHougbrbXkz2siv4qx1eA7GFNGopVBFVmGFOOUAiBZw%2Bat1WsL57L4KoVsw82aERVgO9CNEGw7AcML0tTvzir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMybFxpoZIrJGMbjoOKtwDi7Wj0v37NOep0CbH6Li0jbFQrD9IgKyKJj%2BD6eOjV1YiysI%2FTbOSYFqqVq0WzMroQvtw84M3G%2Fw1wCfa7hRW10nTuECCgNKbFX7l5%2FnkKCoohY1FE8kFNQ24R7LcVcKZUF4EHqqgHd3dV2tjQMxJZrLdKx8wGmZHcNe1cFgXQtEq%2BRQYRUmSeGPQqL51d0NSSzvWdhCXZ3rcjX%2B3eSEf9TE6%2FMdvOgsDg42jya8duEaQgsxFwgr2SCH7FfKR%2B6oyOJGOTnCt1iHJeMi4sGChbVrxhrd0lhtjKcV5UY3wJUNLiAgut17igIeHWqjRSTjn0wrb2tEEAxhFQPBqUDpcFxbTpDKTkWhH%2FtUerc5fcC0i%2BbEzlXPCpPVnME8AjoZdypeUlwQwjyT%2FnW0aKW1Y0Gy6WSdLzNs8KTPvzypEyBV6pAx%2BX0%2BCpsrWW24Xppx6LBYRCo4Wqg8YxtZFbKh9yoTnnXkynvcjg5TvaGESuDULPmoaio%2FcKSAKaKfH8LdHzou%2FKV0%2FZgx%2BFJilYDHFH%2BGuFAXQAmp40JQ%2FlIvayZ4N229MYMOymovn60pg28VQ5C6z%2BiCRiGMbavU8t6rG4lQmj%2FaB5XOrnWAtOfwAXpXIPzKssEmI%2BKiKwHQwkJbqwAY6pgEJ7K0xMDe05Lna4y%2BUEm%2FEI1oYgRXcVG6vrOgBEpapUKEaiMhk8Wcx78Ett1rYL3N0EG3lJ4exvV8IRWo%2BrOW4%2BHfI2uKE9tNXJFtmHJ4c9tn3OtC9KCQw7xu3Sf2YrrJnwZ2ayU9NuvHAycX7Ul77PzN5y%2FmFI61tCi6V%2F1lXQ3x0TJVUAL0e0QhVMB6ocmBQe%2FzvDtGparGmAHC9N1C4mnufL6Uj&X-Amz-Signature=3b83df587f9bba277161f69a6f06deb21c4d75bd3534c2abb3fa29dc9d106124&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW3KBZIS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1adnEHougbrbXkz2siv4qx1eA7GFNGopVBFVmGFOOUAiBZw%2Bat1WsL57L4KoVsw82aERVgO9CNEGw7AcML0tTvzir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMybFxpoZIrJGMbjoOKtwDi7Wj0v37NOep0CbH6Li0jbFQrD9IgKyKJj%2BD6eOjV1YiysI%2FTbOSYFqqVq0WzMroQvtw84M3G%2Fw1wCfa7hRW10nTuECCgNKbFX7l5%2FnkKCoohY1FE8kFNQ24R7LcVcKZUF4EHqqgHd3dV2tjQMxJZrLdKx8wGmZHcNe1cFgXQtEq%2BRQYRUmSeGPQqL51d0NSSzvWdhCXZ3rcjX%2B3eSEf9TE6%2FMdvOgsDg42jya8duEaQgsxFwgr2SCH7FfKR%2B6oyOJGOTnCt1iHJeMi4sGChbVrxhrd0lhtjKcV5UY3wJUNLiAgut17igIeHWqjRSTjn0wrb2tEEAxhFQPBqUDpcFxbTpDKTkWhH%2FtUerc5fcC0i%2BbEzlXPCpPVnME8AjoZdypeUlwQwjyT%2FnW0aKW1Y0Gy6WSdLzNs8KTPvzypEyBV6pAx%2BX0%2BCpsrWW24Xppx6LBYRCo4Wqg8YxtZFbKh9yoTnnXkynvcjg5TvaGESuDULPmoaio%2FcKSAKaKfH8LdHzou%2FKV0%2FZgx%2BFJilYDHFH%2BGuFAXQAmp40JQ%2FlIvayZ4N229MYMOymovn60pg28VQ5C6z%2BiCRiGMbavU8t6rG4lQmj%2FaB5XOrnWAtOfwAXpXIPzKssEmI%2BKiKwHQwkJbqwAY6pgEJ7K0xMDe05Lna4y%2BUEm%2FEI1oYgRXcVG6vrOgBEpapUKEaiMhk8Wcx78Ett1rYL3N0EG3lJ4exvV8IRWo%2BrOW4%2BHfI2uKE9tNXJFtmHJ4c9tn3OtC9KCQw7xu3Sf2YrrJnwZ2ayU9NuvHAycX7Ul77PzN5y%2FmFI61tCi6V%2F1lXQ3x0TJVUAL0e0QhVMB6ocmBQe%2FzvDtGparGmAHC9N1C4mnufL6Uj&X-Amz-Signature=ef5b5d172c5c63fb1981753da594264aa409338023a2fb372e3b6b7219015f3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
