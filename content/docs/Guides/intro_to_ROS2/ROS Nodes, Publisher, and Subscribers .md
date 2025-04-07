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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2N5TBS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BNGEeQRQAMg3rphbl%2Fp%2BRY2cNto19Hd%2B6LQW1%2Fe16JAiByDuOMPRypLsB9GObwk14PzoOVtUI7ts%2B7n%2FT14qaZ8ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSRAZU4AKVzc65lgVKtwDCMUQntqnPN3bDXhQPAOLNsRGZPpm0hUnEaZpmG5ciNPCIBGA%2Fg2EHr53TOlIG%2Fx1%2FAy%2BPHmFhhkodByf6s8m0czufzFGKxaWYIGiQUDsea9%2FPQS50VGa8vyci%2FNlRcsKYcoe7QZyjtPweS5b%2FVOCnVAhLNbizxBLaVUmue9BP7krXbbmHmNU1u6%2FPhhsSqa4Hz2jiAj6c0NXfikIdATPJXL3akI1Fdm4WmWUNCADCKuqi9p57C0zPxOaAgX7027bOVilPeJRsHJAketyTsY1vjYWmnj365tsSvdhb2TUBqdZjZ%2FEbQF6Vu6Bkid%2FAJioM2ViWEca8aGxl4KoVc%2FFGSr7cwUe0FO0%2BpU3w7%2BXuIMKZfcQDJo3AFPKbXQGGu5s6UM5eIA1NOWeslZ%2BzZ8yf4sKYtINXYhkkmGphAIrsmK19Nfc%2F2TlRuUNdBUveoNIPvRRExWQBxvmMZJb67CGEkXlQ2zabHsKwtbkdNfk%2FcKnp5hoTq9F4BlE%2BfO9L0TZ1rm37DUNgOR%2BfBQBiu%2Fk1hCmByyhHwulbZDqwLw0CuPCEn3m1gBdQCsHZn1y441H8uJvcLHytiTumU1Y22rqibCUW5zsotYn%2Fg7GqbEP24G06scsV5Ph4LY8IL0wr9HPvwY6pgHBkhHntO%2BtkZqULJOvxIF7PxjKLCfgUwcc%2FMF4SwR%2BEeLeuGTSn3xwNlJ%2Bq2T2T%2FWdS0ULW%2Fk%2FibDfc9n4DeoBlJqlB%2BXcxV4KQ%2BYM9UQqk4newK7EprijQP7QaMPssKt1xFxZIt2jES7omTlxuE%2BxAtYSP%2FMDVMRzb0oU4vxmq4n%2BVk8%2BWOUPJNh1Raea1fL0dtPNKgsuYPjbdo5coE1vRWIQ4xVH&X-Amz-Signature=7d6f922e467ae564a84720124e0b9737ccc3ce8c4e14088c41e7e394a4d343d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2N5TBS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BNGEeQRQAMg3rphbl%2Fp%2BRY2cNto19Hd%2B6LQW1%2Fe16JAiByDuOMPRypLsB9GObwk14PzoOVtUI7ts%2B7n%2FT14qaZ8ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSRAZU4AKVzc65lgVKtwDCMUQntqnPN3bDXhQPAOLNsRGZPpm0hUnEaZpmG5ciNPCIBGA%2Fg2EHr53TOlIG%2Fx1%2FAy%2BPHmFhhkodByf6s8m0czufzFGKxaWYIGiQUDsea9%2FPQS50VGa8vyci%2FNlRcsKYcoe7QZyjtPweS5b%2FVOCnVAhLNbizxBLaVUmue9BP7krXbbmHmNU1u6%2FPhhsSqa4Hz2jiAj6c0NXfikIdATPJXL3akI1Fdm4WmWUNCADCKuqi9p57C0zPxOaAgX7027bOVilPeJRsHJAketyTsY1vjYWmnj365tsSvdhb2TUBqdZjZ%2FEbQF6Vu6Bkid%2FAJioM2ViWEca8aGxl4KoVc%2FFGSr7cwUe0FO0%2BpU3w7%2BXuIMKZfcQDJo3AFPKbXQGGu5s6UM5eIA1NOWeslZ%2BzZ8yf4sKYtINXYhkkmGphAIrsmK19Nfc%2F2TlRuUNdBUveoNIPvRRExWQBxvmMZJb67CGEkXlQ2zabHsKwtbkdNfk%2FcKnp5hoTq9F4BlE%2BfO9L0TZ1rm37DUNgOR%2BfBQBiu%2Fk1hCmByyhHwulbZDqwLw0CuPCEn3m1gBdQCsHZn1y441H8uJvcLHytiTumU1Y22rqibCUW5zsotYn%2Fg7GqbEP24G06scsV5Ph4LY8IL0wr9HPvwY6pgHBkhHntO%2BtkZqULJOvxIF7PxjKLCfgUwcc%2FMF4SwR%2BEeLeuGTSn3xwNlJ%2Bq2T2T%2FWdS0ULW%2Fk%2FibDfc9n4DeoBlJqlB%2BXcxV4KQ%2BYM9UQqk4newK7EprijQP7QaMPssKt1xFxZIt2jES7omTlxuE%2BxAtYSP%2FMDVMRzb0oU4vxmq4n%2BVk8%2BWOUPJNh1Raea1fL0dtPNKgsuYPjbdo5coE1vRWIQ4xVH&X-Amz-Signature=6841fb8037ff78340fc2aa32f26e879fdb7cbc45fc6da71665fca987d97f6c82&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2N5TBS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BNGEeQRQAMg3rphbl%2Fp%2BRY2cNto19Hd%2B6LQW1%2Fe16JAiByDuOMPRypLsB9GObwk14PzoOVtUI7ts%2B7n%2FT14qaZ8ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSRAZU4AKVzc65lgVKtwDCMUQntqnPN3bDXhQPAOLNsRGZPpm0hUnEaZpmG5ciNPCIBGA%2Fg2EHr53TOlIG%2Fx1%2FAy%2BPHmFhhkodByf6s8m0czufzFGKxaWYIGiQUDsea9%2FPQS50VGa8vyci%2FNlRcsKYcoe7QZyjtPweS5b%2FVOCnVAhLNbizxBLaVUmue9BP7krXbbmHmNU1u6%2FPhhsSqa4Hz2jiAj6c0NXfikIdATPJXL3akI1Fdm4WmWUNCADCKuqi9p57C0zPxOaAgX7027bOVilPeJRsHJAketyTsY1vjYWmnj365tsSvdhb2TUBqdZjZ%2FEbQF6Vu6Bkid%2FAJioM2ViWEca8aGxl4KoVc%2FFGSr7cwUe0FO0%2BpU3w7%2BXuIMKZfcQDJo3AFPKbXQGGu5s6UM5eIA1NOWeslZ%2BzZ8yf4sKYtINXYhkkmGphAIrsmK19Nfc%2F2TlRuUNdBUveoNIPvRRExWQBxvmMZJb67CGEkXlQ2zabHsKwtbkdNfk%2FcKnp5hoTq9F4BlE%2BfO9L0TZ1rm37DUNgOR%2BfBQBiu%2Fk1hCmByyhHwulbZDqwLw0CuPCEn3m1gBdQCsHZn1y441H8uJvcLHytiTumU1Y22rqibCUW5zsotYn%2Fg7GqbEP24G06scsV5Ph4LY8IL0wr9HPvwY6pgHBkhHntO%2BtkZqULJOvxIF7PxjKLCfgUwcc%2FMF4SwR%2BEeLeuGTSn3xwNlJ%2Bq2T2T%2FWdS0ULW%2Fk%2FibDfc9n4DeoBlJqlB%2BXcxV4KQ%2BYM9UQqk4newK7EprijQP7QaMPssKt1xFxZIt2jES7omTlxuE%2BxAtYSP%2FMDVMRzb0oU4vxmq4n%2BVk8%2BWOUPJNh1Raea1fL0dtPNKgsuYPjbdo5coE1vRWIQ4xVH&X-Amz-Signature=f65b8ceeaccd14d9405fd4ab83a26b1ce71b9b0cfa10696a41c73449cc409301&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2N5TBS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BNGEeQRQAMg3rphbl%2Fp%2BRY2cNto19Hd%2B6LQW1%2Fe16JAiByDuOMPRypLsB9GObwk14PzoOVtUI7ts%2B7n%2FT14qaZ8ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSRAZU4AKVzc65lgVKtwDCMUQntqnPN3bDXhQPAOLNsRGZPpm0hUnEaZpmG5ciNPCIBGA%2Fg2EHr53TOlIG%2Fx1%2FAy%2BPHmFhhkodByf6s8m0czufzFGKxaWYIGiQUDsea9%2FPQS50VGa8vyci%2FNlRcsKYcoe7QZyjtPweS5b%2FVOCnVAhLNbizxBLaVUmue9BP7krXbbmHmNU1u6%2FPhhsSqa4Hz2jiAj6c0NXfikIdATPJXL3akI1Fdm4WmWUNCADCKuqi9p57C0zPxOaAgX7027bOVilPeJRsHJAketyTsY1vjYWmnj365tsSvdhb2TUBqdZjZ%2FEbQF6Vu6Bkid%2FAJioM2ViWEca8aGxl4KoVc%2FFGSr7cwUe0FO0%2BpU3w7%2BXuIMKZfcQDJo3AFPKbXQGGu5s6UM5eIA1NOWeslZ%2BzZ8yf4sKYtINXYhkkmGphAIrsmK19Nfc%2F2TlRuUNdBUveoNIPvRRExWQBxvmMZJb67CGEkXlQ2zabHsKwtbkdNfk%2FcKnp5hoTq9F4BlE%2BfO9L0TZ1rm37DUNgOR%2BfBQBiu%2Fk1hCmByyhHwulbZDqwLw0CuPCEn3m1gBdQCsHZn1y441H8uJvcLHytiTumU1Y22rqibCUW5zsotYn%2Fg7GqbEP24G06scsV5Ph4LY8IL0wr9HPvwY6pgHBkhHntO%2BtkZqULJOvxIF7PxjKLCfgUwcc%2FMF4SwR%2BEeLeuGTSn3xwNlJ%2Bq2T2T%2FWdS0ULW%2Fk%2FibDfc9n4DeoBlJqlB%2BXcxV4KQ%2BYM9UQqk4newK7EprijQP7QaMPssKt1xFxZIt2jES7omTlxuE%2BxAtYSP%2FMDVMRzb0oU4vxmq4n%2BVk8%2BWOUPJNh1Raea1fL0dtPNKgsuYPjbdo5coE1vRWIQ4xVH&X-Amz-Signature=bf228b7869e6dfdd54229b5fcd0f7a2f5a6ce2e945a337d14766dfe15546dc0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2N5TBS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BNGEeQRQAMg3rphbl%2Fp%2BRY2cNto19Hd%2B6LQW1%2Fe16JAiByDuOMPRypLsB9GObwk14PzoOVtUI7ts%2B7n%2FT14qaZ8ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSRAZU4AKVzc65lgVKtwDCMUQntqnPN3bDXhQPAOLNsRGZPpm0hUnEaZpmG5ciNPCIBGA%2Fg2EHr53TOlIG%2Fx1%2FAy%2BPHmFhhkodByf6s8m0czufzFGKxaWYIGiQUDsea9%2FPQS50VGa8vyci%2FNlRcsKYcoe7QZyjtPweS5b%2FVOCnVAhLNbizxBLaVUmue9BP7krXbbmHmNU1u6%2FPhhsSqa4Hz2jiAj6c0NXfikIdATPJXL3akI1Fdm4WmWUNCADCKuqi9p57C0zPxOaAgX7027bOVilPeJRsHJAketyTsY1vjYWmnj365tsSvdhb2TUBqdZjZ%2FEbQF6Vu6Bkid%2FAJioM2ViWEca8aGxl4KoVc%2FFGSr7cwUe0FO0%2BpU3w7%2BXuIMKZfcQDJo3AFPKbXQGGu5s6UM5eIA1NOWeslZ%2BzZ8yf4sKYtINXYhkkmGphAIrsmK19Nfc%2F2TlRuUNdBUveoNIPvRRExWQBxvmMZJb67CGEkXlQ2zabHsKwtbkdNfk%2FcKnp5hoTq9F4BlE%2BfO9L0TZ1rm37DUNgOR%2BfBQBiu%2Fk1hCmByyhHwulbZDqwLw0CuPCEn3m1gBdQCsHZn1y441H8uJvcLHytiTumU1Y22rqibCUW5zsotYn%2Fg7GqbEP24G06scsV5Ph4LY8IL0wr9HPvwY6pgHBkhHntO%2BtkZqULJOvxIF7PxjKLCfgUwcc%2FMF4SwR%2BEeLeuGTSn3xwNlJ%2Bq2T2T%2FWdS0ULW%2Fk%2FibDfc9n4DeoBlJqlB%2BXcxV4KQ%2BYM9UQqk4newK7EprijQP7QaMPssKt1xFxZIt2jES7omTlxuE%2BxAtYSP%2FMDVMRzb0oU4vxmq4n%2BVk8%2BWOUPJNh1Raea1fL0dtPNKgsuYPjbdo5coE1vRWIQ4xVH&X-Amz-Signature=5ab1b7cd3fb9e4f8f6f3d0ca78a9e69231f688f71ff7f3e511a688c9d190648d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2N5TBS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BNGEeQRQAMg3rphbl%2Fp%2BRY2cNto19Hd%2B6LQW1%2Fe16JAiByDuOMPRypLsB9GObwk14PzoOVtUI7ts%2B7n%2FT14qaZ8ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSRAZU4AKVzc65lgVKtwDCMUQntqnPN3bDXhQPAOLNsRGZPpm0hUnEaZpmG5ciNPCIBGA%2Fg2EHr53TOlIG%2Fx1%2FAy%2BPHmFhhkodByf6s8m0czufzFGKxaWYIGiQUDsea9%2FPQS50VGa8vyci%2FNlRcsKYcoe7QZyjtPweS5b%2FVOCnVAhLNbizxBLaVUmue9BP7krXbbmHmNU1u6%2FPhhsSqa4Hz2jiAj6c0NXfikIdATPJXL3akI1Fdm4WmWUNCADCKuqi9p57C0zPxOaAgX7027bOVilPeJRsHJAketyTsY1vjYWmnj365tsSvdhb2TUBqdZjZ%2FEbQF6Vu6Bkid%2FAJioM2ViWEca8aGxl4KoVc%2FFGSr7cwUe0FO0%2BpU3w7%2BXuIMKZfcQDJo3AFPKbXQGGu5s6UM5eIA1NOWeslZ%2BzZ8yf4sKYtINXYhkkmGphAIrsmK19Nfc%2F2TlRuUNdBUveoNIPvRRExWQBxvmMZJb67CGEkXlQ2zabHsKwtbkdNfk%2FcKnp5hoTq9F4BlE%2BfO9L0TZ1rm37DUNgOR%2BfBQBiu%2Fk1hCmByyhHwulbZDqwLw0CuPCEn3m1gBdQCsHZn1y441H8uJvcLHytiTumU1Y22rqibCUW5zsotYn%2Fg7GqbEP24G06scsV5Ph4LY8IL0wr9HPvwY6pgHBkhHntO%2BtkZqULJOvxIF7PxjKLCfgUwcc%2FMF4SwR%2BEeLeuGTSn3xwNlJ%2Bq2T2T%2FWdS0ULW%2Fk%2FibDfc9n4DeoBlJqlB%2BXcxV4KQ%2BYM9UQqk4newK7EprijQP7QaMPssKt1xFxZIt2jES7omTlxuE%2BxAtYSP%2FMDVMRzb0oU4vxmq4n%2BVk8%2BWOUPJNh1Raea1fL0dtPNKgsuYPjbdo5coE1vRWIQ4xVH&X-Amz-Signature=38ae49c8eb22aab71b25c01da66acc2fbcc7b6b064b65059b651487044852e58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2N5TBS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BNGEeQRQAMg3rphbl%2Fp%2BRY2cNto19Hd%2B6LQW1%2Fe16JAiByDuOMPRypLsB9GObwk14PzoOVtUI7ts%2B7n%2FT14qaZ8ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSRAZU4AKVzc65lgVKtwDCMUQntqnPN3bDXhQPAOLNsRGZPpm0hUnEaZpmG5ciNPCIBGA%2Fg2EHr53TOlIG%2Fx1%2FAy%2BPHmFhhkodByf6s8m0czufzFGKxaWYIGiQUDsea9%2FPQS50VGa8vyci%2FNlRcsKYcoe7QZyjtPweS5b%2FVOCnVAhLNbizxBLaVUmue9BP7krXbbmHmNU1u6%2FPhhsSqa4Hz2jiAj6c0NXfikIdATPJXL3akI1Fdm4WmWUNCADCKuqi9p57C0zPxOaAgX7027bOVilPeJRsHJAketyTsY1vjYWmnj365tsSvdhb2TUBqdZjZ%2FEbQF6Vu6Bkid%2FAJioM2ViWEca8aGxl4KoVc%2FFGSr7cwUe0FO0%2BpU3w7%2BXuIMKZfcQDJo3AFPKbXQGGu5s6UM5eIA1NOWeslZ%2BzZ8yf4sKYtINXYhkkmGphAIrsmK19Nfc%2F2TlRuUNdBUveoNIPvRRExWQBxvmMZJb67CGEkXlQ2zabHsKwtbkdNfk%2FcKnp5hoTq9F4BlE%2BfO9L0TZ1rm37DUNgOR%2BfBQBiu%2Fk1hCmByyhHwulbZDqwLw0CuPCEn3m1gBdQCsHZn1y441H8uJvcLHytiTumU1Y22rqibCUW5zsotYn%2Fg7GqbEP24G06scsV5Ph4LY8IL0wr9HPvwY6pgHBkhHntO%2BtkZqULJOvxIF7PxjKLCfgUwcc%2FMF4SwR%2BEeLeuGTSn3xwNlJ%2Bq2T2T%2FWdS0ULW%2Fk%2FibDfc9n4DeoBlJqlB%2BXcxV4KQ%2BYM9UQqk4newK7EprijQP7QaMPssKt1xFxZIt2jES7omTlxuE%2BxAtYSP%2FMDVMRzb0oU4vxmq4n%2BVk8%2BWOUPJNh1Raea1fL0dtPNKgsuYPjbdo5coE1vRWIQ4xVH&X-Amz-Signature=e1a0b6418d321e7bf3b047703d3603f7480ea9ed260443f44063d9212b439930&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2N5TBS%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BNGEeQRQAMg3rphbl%2Fp%2BRY2cNto19Hd%2B6LQW1%2Fe16JAiByDuOMPRypLsB9GObwk14PzoOVtUI7ts%2B7n%2FT14qaZ8ir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMSRAZU4AKVzc65lgVKtwDCMUQntqnPN3bDXhQPAOLNsRGZPpm0hUnEaZpmG5ciNPCIBGA%2Fg2EHr53TOlIG%2Fx1%2FAy%2BPHmFhhkodByf6s8m0czufzFGKxaWYIGiQUDsea9%2FPQS50VGa8vyci%2FNlRcsKYcoe7QZyjtPweS5b%2FVOCnVAhLNbizxBLaVUmue9BP7krXbbmHmNU1u6%2FPhhsSqa4Hz2jiAj6c0NXfikIdATPJXL3akI1Fdm4WmWUNCADCKuqi9p57C0zPxOaAgX7027bOVilPeJRsHJAketyTsY1vjYWmnj365tsSvdhb2TUBqdZjZ%2FEbQF6Vu6Bkid%2FAJioM2ViWEca8aGxl4KoVc%2FFGSr7cwUe0FO0%2BpU3w7%2BXuIMKZfcQDJo3AFPKbXQGGu5s6UM5eIA1NOWeslZ%2BzZ8yf4sKYtINXYhkkmGphAIrsmK19Nfc%2F2TlRuUNdBUveoNIPvRRExWQBxvmMZJb67CGEkXlQ2zabHsKwtbkdNfk%2FcKnp5hoTq9F4BlE%2BfO9L0TZ1rm37DUNgOR%2BfBQBiu%2Fk1hCmByyhHwulbZDqwLw0CuPCEn3m1gBdQCsHZn1y441H8uJvcLHytiTumU1Y22rqibCUW5zsotYn%2Fg7GqbEP24G06scsV5Ph4LY8IL0wr9HPvwY6pgHBkhHntO%2BtkZqULJOvxIF7PxjKLCfgUwcc%2FMF4SwR%2BEeLeuGTSn3xwNlJ%2Bq2T2T%2FWdS0ULW%2Fk%2FibDfc9n4DeoBlJqlB%2BXcxV4KQ%2BYM9UQqk4newK7EprijQP7QaMPssKt1xFxZIt2jES7omTlxuE%2BxAtYSP%2FMDVMRzb0oU4vxmq4n%2BVk8%2BWOUPJNh1Raea1fL0dtPNKgsuYPjbdo5coE1vRWIQ4xVH&X-Amz-Signature=e8c4bb632e50d58f335c9f8bb6e9ce9af696d5f701fd42dcf054c55c5cc29367&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
