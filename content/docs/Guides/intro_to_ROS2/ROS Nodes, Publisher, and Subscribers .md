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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIFJMNG%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLO7B6cXW54OcGAj0wR0xDBJX8s1TELZ0GP42NuXVJHgIgFPSuOmxco4gTHSgdyKGdwLhOfo5qAJVYBa%2F652SVqSoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNZKOuniwOw%2FexUDMircA9m0ZfkCy339o0rHRlJAnaVWlkXmqlcS4vJjuKaV72VT1HFV1hfBf%2F0%2Bazp161x6RrfAvrbmGHaMRfaEJbdk%2F8C%2FI4MGqYissiyfzimQjJAUnDam0vOz8quKviz7qbnmiSfQWDWbYIXZWXBFeVOXELVaFJ6ZqVNDrCXn3sp34xnr9lwRsMDGvYCZXKjEbPiha6I8zYAVDphYfr0Kw6u3niZL6TsjFGhLYv%2BQhjCWCowvSPjerskKdNBEPAD3P5U9npnEQ2KC8DIcOC153kEA%2F%2BSsEv5qqtOpf6fPCNYjesvgpqagX4YWLAkTvWrptWGSaO3euKhOmAd0OFFW5%2BX81ZEPZ86JOIbKJ2hnvD0oaaIdtHlyN532a4IreTKFp2A1flS8IHXe7ENpgGPVMbGQn36VcfRTzIBsIrUOa1CpytckoCesasj3j1M3vWmUaE4SwY%2BQoQCkXBO2Jum3KAqoWVcyHacMd1HzUhpEpvezxxUyYYPr68oQiMlvO9yTg6%2FH8a4mPcjL%2FRTYoBZnu7mgRcDgkMbRY4xMX1GLL7iaccJEjlJkpYeK6tVKTxDJXjLlJdGZuoI1yS3cSfazUtf8ZLCyMkMVW99jiH35bHWkmlRbTf%2Flyur0JoQAw15pML2ujs0GOqUBhojEcjE3gWGvElhPszdXtjwX3uV9b9CRuX3BCfQloO8h6uyWnutut8fAtXIlss%2FMZ8cbjnA7sNE50V0AOZ1Y8o9fLKHwuCxtjHSvnmxZkFqcACGh%2Fk3dAWYS06Pe%2BDMNZwhMTJ%2BuyQISkJZ4axJwTfDL2rDr3keQ3qyjunIAd8CD59OwLuHGQpdnS1u8htRiabA3TWzjvIF7mLTQdHD7bTYCChNR&X-Amz-Signature=e8b99e3c13e4d592d6980ebebceb95488299d2a0925bc69a1cd9a64e0741f4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIFJMNG%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLO7B6cXW54OcGAj0wR0xDBJX8s1TELZ0GP42NuXVJHgIgFPSuOmxco4gTHSgdyKGdwLhOfo5qAJVYBa%2F652SVqSoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNZKOuniwOw%2FexUDMircA9m0ZfkCy339o0rHRlJAnaVWlkXmqlcS4vJjuKaV72VT1HFV1hfBf%2F0%2Bazp161x6RrfAvrbmGHaMRfaEJbdk%2F8C%2FI4MGqYissiyfzimQjJAUnDam0vOz8quKviz7qbnmiSfQWDWbYIXZWXBFeVOXELVaFJ6ZqVNDrCXn3sp34xnr9lwRsMDGvYCZXKjEbPiha6I8zYAVDphYfr0Kw6u3niZL6TsjFGhLYv%2BQhjCWCowvSPjerskKdNBEPAD3P5U9npnEQ2KC8DIcOC153kEA%2F%2BSsEv5qqtOpf6fPCNYjesvgpqagX4YWLAkTvWrptWGSaO3euKhOmAd0OFFW5%2BX81ZEPZ86JOIbKJ2hnvD0oaaIdtHlyN532a4IreTKFp2A1flS8IHXe7ENpgGPVMbGQn36VcfRTzIBsIrUOa1CpytckoCesasj3j1M3vWmUaE4SwY%2BQoQCkXBO2Jum3KAqoWVcyHacMd1HzUhpEpvezxxUyYYPr68oQiMlvO9yTg6%2FH8a4mPcjL%2FRTYoBZnu7mgRcDgkMbRY4xMX1GLL7iaccJEjlJkpYeK6tVKTxDJXjLlJdGZuoI1yS3cSfazUtf8ZLCyMkMVW99jiH35bHWkmlRbTf%2Flyur0JoQAw15pML2ujs0GOqUBhojEcjE3gWGvElhPszdXtjwX3uV9b9CRuX3BCfQloO8h6uyWnutut8fAtXIlss%2FMZ8cbjnA7sNE50V0AOZ1Y8o9fLKHwuCxtjHSvnmxZkFqcACGh%2Fk3dAWYS06Pe%2BDMNZwhMTJ%2BuyQISkJZ4axJwTfDL2rDr3keQ3qyjunIAd8CD59OwLuHGQpdnS1u8htRiabA3TWzjvIF7mLTQdHD7bTYCChNR&X-Amz-Signature=cf66a36fca3bf554ad1aa471ec4b780be703ca9e50373eef3da7210a8c188ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIFJMNG%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLO7B6cXW54OcGAj0wR0xDBJX8s1TELZ0GP42NuXVJHgIgFPSuOmxco4gTHSgdyKGdwLhOfo5qAJVYBa%2F652SVqSoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNZKOuniwOw%2FexUDMircA9m0ZfkCy339o0rHRlJAnaVWlkXmqlcS4vJjuKaV72VT1HFV1hfBf%2F0%2Bazp161x6RrfAvrbmGHaMRfaEJbdk%2F8C%2FI4MGqYissiyfzimQjJAUnDam0vOz8quKviz7qbnmiSfQWDWbYIXZWXBFeVOXELVaFJ6ZqVNDrCXn3sp34xnr9lwRsMDGvYCZXKjEbPiha6I8zYAVDphYfr0Kw6u3niZL6TsjFGhLYv%2BQhjCWCowvSPjerskKdNBEPAD3P5U9npnEQ2KC8DIcOC153kEA%2F%2BSsEv5qqtOpf6fPCNYjesvgpqagX4YWLAkTvWrptWGSaO3euKhOmAd0OFFW5%2BX81ZEPZ86JOIbKJ2hnvD0oaaIdtHlyN532a4IreTKFp2A1flS8IHXe7ENpgGPVMbGQn36VcfRTzIBsIrUOa1CpytckoCesasj3j1M3vWmUaE4SwY%2BQoQCkXBO2Jum3KAqoWVcyHacMd1HzUhpEpvezxxUyYYPr68oQiMlvO9yTg6%2FH8a4mPcjL%2FRTYoBZnu7mgRcDgkMbRY4xMX1GLL7iaccJEjlJkpYeK6tVKTxDJXjLlJdGZuoI1yS3cSfazUtf8ZLCyMkMVW99jiH35bHWkmlRbTf%2Flyur0JoQAw15pML2ujs0GOqUBhojEcjE3gWGvElhPszdXtjwX3uV9b9CRuX3BCfQloO8h6uyWnutut8fAtXIlss%2FMZ8cbjnA7sNE50V0AOZ1Y8o9fLKHwuCxtjHSvnmxZkFqcACGh%2Fk3dAWYS06Pe%2BDMNZwhMTJ%2BuyQISkJZ4axJwTfDL2rDr3keQ3qyjunIAd8CD59OwLuHGQpdnS1u8htRiabA3TWzjvIF7mLTQdHD7bTYCChNR&X-Amz-Signature=370b193cdff7524121136f102bb2b076c9eb25289345eb1d08b891093df91f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIFJMNG%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLO7B6cXW54OcGAj0wR0xDBJX8s1TELZ0GP42NuXVJHgIgFPSuOmxco4gTHSgdyKGdwLhOfo5qAJVYBa%2F652SVqSoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNZKOuniwOw%2FexUDMircA9m0ZfkCy339o0rHRlJAnaVWlkXmqlcS4vJjuKaV72VT1HFV1hfBf%2F0%2Bazp161x6RrfAvrbmGHaMRfaEJbdk%2F8C%2FI4MGqYissiyfzimQjJAUnDam0vOz8quKviz7qbnmiSfQWDWbYIXZWXBFeVOXELVaFJ6ZqVNDrCXn3sp34xnr9lwRsMDGvYCZXKjEbPiha6I8zYAVDphYfr0Kw6u3niZL6TsjFGhLYv%2BQhjCWCowvSPjerskKdNBEPAD3P5U9npnEQ2KC8DIcOC153kEA%2F%2BSsEv5qqtOpf6fPCNYjesvgpqagX4YWLAkTvWrptWGSaO3euKhOmAd0OFFW5%2BX81ZEPZ86JOIbKJ2hnvD0oaaIdtHlyN532a4IreTKFp2A1flS8IHXe7ENpgGPVMbGQn36VcfRTzIBsIrUOa1CpytckoCesasj3j1M3vWmUaE4SwY%2BQoQCkXBO2Jum3KAqoWVcyHacMd1HzUhpEpvezxxUyYYPr68oQiMlvO9yTg6%2FH8a4mPcjL%2FRTYoBZnu7mgRcDgkMbRY4xMX1GLL7iaccJEjlJkpYeK6tVKTxDJXjLlJdGZuoI1yS3cSfazUtf8ZLCyMkMVW99jiH35bHWkmlRbTf%2Flyur0JoQAw15pML2ujs0GOqUBhojEcjE3gWGvElhPszdXtjwX3uV9b9CRuX3BCfQloO8h6uyWnutut8fAtXIlss%2FMZ8cbjnA7sNE50V0AOZ1Y8o9fLKHwuCxtjHSvnmxZkFqcACGh%2Fk3dAWYS06Pe%2BDMNZwhMTJ%2BuyQISkJZ4axJwTfDL2rDr3keQ3qyjunIAd8CD59OwLuHGQpdnS1u8htRiabA3TWzjvIF7mLTQdHD7bTYCChNR&X-Amz-Signature=0b3577ee468a85261c30c4d06a1220ab524f756e0b0fd91ba53172d9d113b512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIFJMNG%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLO7B6cXW54OcGAj0wR0xDBJX8s1TELZ0GP42NuXVJHgIgFPSuOmxco4gTHSgdyKGdwLhOfo5qAJVYBa%2F652SVqSoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNZKOuniwOw%2FexUDMircA9m0ZfkCy339o0rHRlJAnaVWlkXmqlcS4vJjuKaV72VT1HFV1hfBf%2F0%2Bazp161x6RrfAvrbmGHaMRfaEJbdk%2F8C%2FI4MGqYissiyfzimQjJAUnDam0vOz8quKviz7qbnmiSfQWDWbYIXZWXBFeVOXELVaFJ6ZqVNDrCXn3sp34xnr9lwRsMDGvYCZXKjEbPiha6I8zYAVDphYfr0Kw6u3niZL6TsjFGhLYv%2BQhjCWCowvSPjerskKdNBEPAD3P5U9npnEQ2KC8DIcOC153kEA%2F%2BSsEv5qqtOpf6fPCNYjesvgpqagX4YWLAkTvWrptWGSaO3euKhOmAd0OFFW5%2BX81ZEPZ86JOIbKJ2hnvD0oaaIdtHlyN532a4IreTKFp2A1flS8IHXe7ENpgGPVMbGQn36VcfRTzIBsIrUOa1CpytckoCesasj3j1M3vWmUaE4SwY%2BQoQCkXBO2Jum3KAqoWVcyHacMd1HzUhpEpvezxxUyYYPr68oQiMlvO9yTg6%2FH8a4mPcjL%2FRTYoBZnu7mgRcDgkMbRY4xMX1GLL7iaccJEjlJkpYeK6tVKTxDJXjLlJdGZuoI1yS3cSfazUtf8ZLCyMkMVW99jiH35bHWkmlRbTf%2Flyur0JoQAw15pML2ujs0GOqUBhojEcjE3gWGvElhPszdXtjwX3uV9b9CRuX3BCfQloO8h6uyWnutut8fAtXIlss%2FMZ8cbjnA7sNE50V0AOZ1Y8o9fLKHwuCxtjHSvnmxZkFqcACGh%2Fk3dAWYS06Pe%2BDMNZwhMTJ%2BuyQISkJZ4axJwTfDL2rDr3keQ3qyjunIAd8CD59OwLuHGQpdnS1u8htRiabA3TWzjvIF7mLTQdHD7bTYCChNR&X-Amz-Signature=4576d8f06627b272269475dfd496389bf23f5c39f45a9407fd5b29e038f16852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIFJMNG%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLO7B6cXW54OcGAj0wR0xDBJX8s1TELZ0GP42NuXVJHgIgFPSuOmxco4gTHSgdyKGdwLhOfo5qAJVYBa%2F652SVqSoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNZKOuniwOw%2FexUDMircA9m0ZfkCy339o0rHRlJAnaVWlkXmqlcS4vJjuKaV72VT1HFV1hfBf%2F0%2Bazp161x6RrfAvrbmGHaMRfaEJbdk%2F8C%2FI4MGqYissiyfzimQjJAUnDam0vOz8quKviz7qbnmiSfQWDWbYIXZWXBFeVOXELVaFJ6ZqVNDrCXn3sp34xnr9lwRsMDGvYCZXKjEbPiha6I8zYAVDphYfr0Kw6u3niZL6TsjFGhLYv%2BQhjCWCowvSPjerskKdNBEPAD3P5U9npnEQ2KC8DIcOC153kEA%2F%2BSsEv5qqtOpf6fPCNYjesvgpqagX4YWLAkTvWrptWGSaO3euKhOmAd0OFFW5%2BX81ZEPZ86JOIbKJ2hnvD0oaaIdtHlyN532a4IreTKFp2A1flS8IHXe7ENpgGPVMbGQn36VcfRTzIBsIrUOa1CpytckoCesasj3j1M3vWmUaE4SwY%2BQoQCkXBO2Jum3KAqoWVcyHacMd1HzUhpEpvezxxUyYYPr68oQiMlvO9yTg6%2FH8a4mPcjL%2FRTYoBZnu7mgRcDgkMbRY4xMX1GLL7iaccJEjlJkpYeK6tVKTxDJXjLlJdGZuoI1yS3cSfazUtf8ZLCyMkMVW99jiH35bHWkmlRbTf%2Flyur0JoQAw15pML2ujs0GOqUBhojEcjE3gWGvElhPszdXtjwX3uV9b9CRuX3BCfQloO8h6uyWnutut8fAtXIlss%2FMZ8cbjnA7sNE50V0AOZ1Y8o9fLKHwuCxtjHSvnmxZkFqcACGh%2Fk3dAWYS06Pe%2BDMNZwhMTJ%2BuyQISkJZ4axJwTfDL2rDr3keQ3qyjunIAd8CD59OwLuHGQpdnS1u8htRiabA3TWzjvIF7mLTQdHD7bTYCChNR&X-Amz-Signature=82a2876723c84863a5abca11bcf2635011b02736a6e578a4f6eb1aded756293c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIFJMNG%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLO7B6cXW54OcGAj0wR0xDBJX8s1TELZ0GP42NuXVJHgIgFPSuOmxco4gTHSgdyKGdwLhOfo5qAJVYBa%2F652SVqSoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNZKOuniwOw%2FexUDMircA9m0ZfkCy339o0rHRlJAnaVWlkXmqlcS4vJjuKaV72VT1HFV1hfBf%2F0%2Bazp161x6RrfAvrbmGHaMRfaEJbdk%2F8C%2FI4MGqYissiyfzimQjJAUnDam0vOz8quKviz7qbnmiSfQWDWbYIXZWXBFeVOXELVaFJ6ZqVNDrCXn3sp34xnr9lwRsMDGvYCZXKjEbPiha6I8zYAVDphYfr0Kw6u3niZL6TsjFGhLYv%2BQhjCWCowvSPjerskKdNBEPAD3P5U9npnEQ2KC8DIcOC153kEA%2F%2BSsEv5qqtOpf6fPCNYjesvgpqagX4YWLAkTvWrptWGSaO3euKhOmAd0OFFW5%2BX81ZEPZ86JOIbKJ2hnvD0oaaIdtHlyN532a4IreTKFp2A1flS8IHXe7ENpgGPVMbGQn36VcfRTzIBsIrUOa1CpytckoCesasj3j1M3vWmUaE4SwY%2BQoQCkXBO2Jum3KAqoWVcyHacMd1HzUhpEpvezxxUyYYPr68oQiMlvO9yTg6%2FH8a4mPcjL%2FRTYoBZnu7mgRcDgkMbRY4xMX1GLL7iaccJEjlJkpYeK6tVKTxDJXjLlJdGZuoI1yS3cSfazUtf8ZLCyMkMVW99jiH35bHWkmlRbTf%2Flyur0JoQAw15pML2ujs0GOqUBhojEcjE3gWGvElhPszdXtjwX3uV9b9CRuX3BCfQloO8h6uyWnutut8fAtXIlss%2FMZ8cbjnA7sNE50V0AOZ1Y8o9fLKHwuCxtjHSvnmxZkFqcACGh%2Fk3dAWYS06Pe%2BDMNZwhMTJ%2BuyQISkJZ4axJwTfDL2rDr3keQ3qyjunIAd8CD59OwLuHGQpdnS1u8htRiabA3TWzjvIF7mLTQdHD7bTYCChNR&X-Amz-Signature=59a4773c28d8facba4fceac1f833cb459dd5f95dd3c61c8f1ce42cef3c017664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIFJMNG%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLO7B6cXW54OcGAj0wR0xDBJX8s1TELZ0GP42NuXVJHgIgFPSuOmxco4gTHSgdyKGdwLhOfo5qAJVYBa%2F652SVqSoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNZKOuniwOw%2FexUDMircA9m0ZfkCy339o0rHRlJAnaVWlkXmqlcS4vJjuKaV72VT1HFV1hfBf%2F0%2Bazp161x6RrfAvrbmGHaMRfaEJbdk%2F8C%2FI4MGqYissiyfzimQjJAUnDam0vOz8quKviz7qbnmiSfQWDWbYIXZWXBFeVOXELVaFJ6ZqVNDrCXn3sp34xnr9lwRsMDGvYCZXKjEbPiha6I8zYAVDphYfr0Kw6u3niZL6TsjFGhLYv%2BQhjCWCowvSPjerskKdNBEPAD3P5U9npnEQ2KC8DIcOC153kEA%2F%2BSsEv5qqtOpf6fPCNYjesvgpqagX4YWLAkTvWrptWGSaO3euKhOmAd0OFFW5%2BX81ZEPZ86JOIbKJ2hnvD0oaaIdtHlyN532a4IreTKFp2A1flS8IHXe7ENpgGPVMbGQn36VcfRTzIBsIrUOa1CpytckoCesasj3j1M3vWmUaE4SwY%2BQoQCkXBO2Jum3KAqoWVcyHacMd1HzUhpEpvezxxUyYYPr68oQiMlvO9yTg6%2FH8a4mPcjL%2FRTYoBZnu7mgRcDgkMbRY4xMX1GLL7iaccJEjlJkpYeK6tVKTxDJXjLlJdGZuoI1yS3cSfazUtf8ZLCyMkMVW99jiH35bHWkmlRbTf%2Flyur0JoQAw15pML2ujs0GOqUBhojEcjE3gWGvElhPszdXtjwX3uV9b9CRuX3BCfQloO8h6uyWnutut8fAtXIlss%2FMZ8cbjnA7sNE50V0AOZ1Y8o9fLKHwuCxtjHSvnmxZkFqcACGh%2Fk3dAWYS06Pe%2BDMNZwhMTJ%2BuyQISkJZ4axJwTfDL2rDr3keQ3qyjunIAd8CD59OwLuHGQpdnS1u8htRiabA3TWzjvIF7mLTQdHD7bTYCChNR&X-Amz-Signature=8e5e1225b73bb9928be467d6dc68805959da143c82fc85ff3331542f16097415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
