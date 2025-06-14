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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU3MPXG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIH4SkJ4Q7LDX%2BqCz%2BK8xbHqgCGXp1iNViC%2BIhwqNnIEtAiEA4zb%2BswAR0%2BAuLWmOQ4qzUyRbrT%2BkUqOJ6y199kFBZbsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMwNRJgLwv7mqPxN9SrcA5qt3p%2FrPZApvClgc7%2BJz%2BeP%2Byc%2FTbGMS88okr446tYwqZuwI3E2Zby2F73CdjGLqkq2FPHoysnZy5KXJSmb%2BrZuxMpZcaV4owVP0p1FTogg3ic13c0nUEaz1eDwQO34jf1ovn4evPESY5ConadHmuW7Olz2HMFqZqHk8kuw5oCbH%2BpQ0nA%2F3QM8aE%2BRSh5EKSmUy9rM6kroLDHcQmMNt84FmKgIigIVkjnCZLS3kzY90zb5lOg2ICAr%2BCkQSDs%2FKSaFdfTxl%2Fxyh8a1PQxDVRehz7Uu3REfXM7cYOqxQT1%2BHClSxKLarSgOVokn88ybggsI1n8Iz8xxGCeeOwdFRX5wpqnDouEVoYHSpyovr2wc5VHFkRxwJxubpXWjBqlzKE0G%2Bj7g27lnd8zCnRDPJPsOkL7oVl1%2FnS%2FrChPk7JcWjMLwQYD%2FKWAgQAbp7g%2Bgxds6S97Lm%2FeJmjfbru6swOmklqZBLkHun03e0CaYN1kxWDfYj4wj9JUCJhnptnD%2BxgF01ELftWfP9bkuYSQubkGm3E3U1BnTjt1kJP55P9Ang153JfOHfOsClv5mZBiuVl%2BjU8%2B7i%2F%2BtyjBxyqo3cdWoS0owHQLs4rAWmTcUYUH78Qj0My%2B3SBSnTICjMOi6tsIGOqUBtUgzCtgxXQMIdXgDldkPuUFqsuDjaeQIqgE7ix0dTI3iIPFSHd1PIn6X8rUSxyewk1l8%2Frv%2BO45%2FkAb0QWezCsPdD%2BKzre1eyxs9EoQjt3%2F4Goco2hDT4SA7VgKdFedyof1UVlEGfEXSOGNbL0Q5gVUY71Iwmoqgze1QPsGyhHP%2Bs9rZT8CEmWr3xTQdMIVFzLT8a3SMmVb1hjk7ryUjl3pLvqHN&X-Amz-Signature=8183c55f128dad1aebbe665c637f84340a88978a82b9f09e557409e30bd7ad96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU3MPXG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIH4SkJ4Q7LDX%2BqCz%2BK8xbHqgCGXp1iNViC%2BIhwqNnIEtAiEA4zb%2BswAR0%2BAuLWmOQ4qzUyRbrT%2BkUqOJ6y199kFBZbsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMwNRJgLwv7mqPxN9SrcA5qt3p%2FrPZApvClgc7%2BJz%2BeP%2Byc%2FTbGMS88okr446tYwqZuwI3E2Zby2F73CdjGLqkq2FPHoysnZy5KXJSmb%2BrZuxMpZcaV4owVP0p1FTogg3ic13c0nUEaz1eDwQO34jf1ovn4evPESY5ConadHmuW7Olz2HMFqZqHk8kuw5oCbH%2BpQ0nA%2F3QM8aE%2BRSh5EKSmUy9rM6kroLDHcQmMNt84FmKgIigIVkjnCZLS3kzY90zb5lOg2ICAr%2BCkQSDs%2FKSaFdfTxl%2Fxyh8a1PQxDVRehz7Uu3REfXM7cYOqxQT1%2BHClSxKLarSgOVokn88ybggsI1n8Iz8xxGCeeOwdFRX5wpqnDouEVoYHSpyovr2wc5VHFkRxwJxubpXWjBqlzKE0G%2Bj7g27lnd8zCnRDPJPsOkL7oVl1%2FnS%2FrChPk7JcWjMLwQYD%2FKWAgQAbp7g%2Bgxds6S97Lm%2FeJmjfbru6swOmklqZBLkHun03e0CaYN1kxWDfYj4wj9JUCJhnptnD%2BxgF01ELftWfP9bkuYSQubkGm3E3U1BnTjt1kJP55P9Ang153JfOHfOsClv5mZBiuVl%2BjU8%2B7i%2F%2BtyjBxyqo3cdWoS0owHQLs4rAWmTcUYUH78Qj0My%2B3SBSnTICjMOi6tsIGOqUBtUgzCtgxXQMIdXgDldkPuUFqsuDjaeQIqgE7ix0dTI3iIPFSHd1PIn6X8rUSxyewk1l8%2Frv%2BO45%2FkAb0QWezCsPdD%2BKzre1eyxs9EoQjt3%2F4Goco2hDT4SA7VgKdFedyof1UVlEGfEXSOGNbL0Q5gVUY71Iwmoqgze1QPsGyhHP%2Bs9rZT8CEmWr3xTQdMIVFzLT8a3SMmVb1hjk7ryUjl3pLvqHN&X-Amz-Signature=1cd43897fa8c78fe6744ca8774c17388ff273591ea2772499a85e766aaa8b340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU3MPXG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIH4SkJ4Q7LDX%2BqCz%2BK8xbHqgCGXp1iNViC%2BIhwqNnIEtAiEA4zb%2BswAR0%2BAuLWmOQ4qzUyRbrT%2BkUqOJ6y199kFBZbsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMwNRJgLwv7mqPxN9SrcA5qt3p%2FrPZApvClgc7%2BJz%2BeP%2Byc%2FTbGMS88okr446tYwqZuwI3E2Zby2F73CdjGLqkq2FPHoysnZy5KXJSmb%2BrZuxMpZcaV4owVP0p1FTogg3ic13c0nUEaz1eDwQO34jf1ovn4evPESY5ConadHmuW7Olz2HMFqZqHk8kuw5oCbH%2BpQ0nA%2F3QM8aE%2BRSh5EKSmUy9rM6kroLDHcQmMNt84FmKgIigIVkjnCZLS3kzY90zb5lOg2ICAr%2BCkQSDs%2FKSaFdfTxl%2Fxyh8a1PQxDVRehz7Uu3REfXM7cYOqxQT1%2BHClSxKLarSgOVokn88ybggsI1n8Iz8xxGCeeOwdFRX5wpqnDouEVoYHSpyovr2wc5VHFkRxwJxubpXWjBqlzKE0G%2Bj7g27lnd8zCnRDPJPsOkL7oVl1%2FnS%2FrChPk7JcWjMLwQYD%2FKWAgQAbp7g%2Bgxds6S97Lm%2FeJmjfbru6swOmklqZBLkHun03e0CaYN1kxWDfYj4wj9JUCJhnptnD%2BxgF01ELftWfP9bkuYSQubkGm3E3U1BnTjt1kJP55P9Ang153JfOHfOsClv5mZBiuVl%2BjU8%2B7i%2F%2BtyjBxyqo3cdWoS0owHQLs4rAWmTcUYUH78Qj0My%2B3SBSnTICjMOi6tsIGOqUBtUgzCtgxXQMIdXgDldkPuUFqsuDjaeQIqgE7ix0dTI3iIPFSHd1PIn6X8rUSxyewk1l8%2Frv%2BO45%2FkAb0QWezCsPdD%2BKzre1eyxs9EoQjt3%2F4Goco2hDT4SA7VgKdFedyof1UVlEGfEXSOGNbL0Q5gVUY71Iwmoqgze1QPsGyhHP%2Bs9rZT8CEmWr3xTQdMIVFzLT8a3SMmVb1hjk7ryUjl3pLvqHN&X-Amz-Signature=34b3015f9d2be7009c31179ee85498a0500d7f38f27fdf03a054fe6b35df5cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU3MPXG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIH4SkJ4Q7LDX%2BqCz%2BK8xbHqgCGXp1iNViC%2BIhwqNnIEtAiEA4zb%2BswAR0%2BAuLWmOQ4qzUyRbrT%2BkUqOJ6y199kFBZbsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMwNRJgLwv7mqPxN9SrcA5qt3p%2FrPZApvClgc7%2BJz%2BeP%2Byc%2FTbGMS88okr446tYwqZuwI3E2Zby2F73CdjGLqkq2FPHoysnZy5KXJSmb%2BrZuxMpZcaV4owVP0p1FTogg3ic13c0nUEaz1eDwQO34jf1ovn4evPESY5ConadHmuW7Olz2HMFqZqHk8kuw5oCbH%2BpQ0nA%2F3QM8aE%2BRSh5EKSmUy9rM6kroLDHcQmMNt84FmKgIigIVkjnCZLS3kzY90zb5lOg2ICAr%2BCkQSDs%2FKSaFdfTxl%2Fxyh8a1PQxDVRehz7Uu3REfXM7cYOqxQT1%2BHClSxKLarSgOVokn88ybggsI1n8Iz8xxGCeeOwdFRX5wpqnDouEVoYHSpyovr2wc5VHFkRxwJxubpXWjBqlzKE0G%2Bj7g27lnd8zCnRDPJPsOkL7oVl1%2FnS%2FrChPk7JcWjMLwQYD%2FKWAgQAbp7g%2Bgxds6S97Lm%2FeJmjfbru6swOmklqZBLkHun03e0CaYN1kxWDfYj4wj9JUCJhnptnD%2BxgF01ELftWfP9bkuYSQubkGm3E3U1BnTjt1kJP55P9Ang153JfOHfOsClv5mZBiuVl%2BjU8%2B7i%2F%2BtyjBxyqo3cdWoS0owHQLs4rAWmTcUYUH78Qj0My%2B3SBSnTICjMOi6tsIGOqUBtUgzCtgxXQMIdXgDldkPuUFqsuDjaeQIqgE7ix0dTI3iIPFSHd1PIn6X8rUSxyewk1l8%2Frv%2BO45%2FkAb0QWezCsPdD%2BKzre1eyxs9EoQjt3%2F4Goco2hDT4SA7VgKdFedyof1UVlEGfEXSOGNbL0Q5gVUY71Iwmoqgze1QPsGyhHP%2Bs9rZT8CEmWr3xTQdMIVFzLT8a3SMmVb1hjk7ryUjl3pLvqHN&X-Amz-Signature=00155c97f2290d0868adc68f174fa1f16cc5ead18fbbd75428f89a66290ed601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU3MPXG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIH4SkJ4Q7LDX%2BqCz%2BK8xbHqgCGXp1iNViC%2BIhwqNnIEtAiEA4zb%2BswAR0%2BAuLWmOQ4qzUyRbrT%2BkUqOJ6y199kFBZbsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMwNRJgLwv7mqPxN9SrcA5qt3p%2FrPZApvClgc7%2BJz%2BeP%2Byc%2FTbGMS88okr446tYwqZuwI3E2Zby2F73CdjGLqkq2FPHoysnZy5KXJSmb%2BrZuxMpZcaV4owVP0p1FTogg3ic13c0nUEaz1eDwQO34jf1ovn4evPESY5ConadHmuW7Olz2HMFqZqHk8kuw5oCbH%2BpQ0nA%2F3QM8aE%2BRSh5EKSmUy9rM6kroLDHcQmMNt84FmKgIigIVkjnCZLS3kzY90zb5lOg2ICAr%2BCkQSDs%2FKSaFdfTxl%2Fxyh8a1PQxDVRehz7Uu3REfXM7cYOqxQT1%2BHClSxKLarSgOVokn88ybggsI1n8Iz8xxGCeeOwdFRX5wpqnDouEVoYHSpyovr2wc5VHFkRxwJxubpXWjBqlzKE0G%2Bj7g27lnd8zCnRDPJPsOkL7oVl1%2FnS%2FrChPk7JcWjMLwQYD%2FKWAgQAbp7g%2Bgxds6S97Lm%2FeJmjfbru6swOmklqZBLkHun03e0CaYN1kxWDfYj4wj9JUCJhnptnD%2BxgF01ELftWfP9bkuYSQubkGm3E3U1BnTjt1kJP55P9Ang153JfOHfOsClv5mZBiuVl%2BjU8%2B7i%2F%2BtyjBxyqo3cdWoS0owHQLs4rAWmTcUYUH78Qj0My%2B3SBSnTICjMOi6tsIGOqUBtUgzCtgxXQMIdXgDldkPuUFqsuDjaeQIqgE7ix0dTI3iIPFSHd1PIn6X8rUSxyewk1l8%2Frv%2BO45%2FkAb0QWezCsPdD%2BKzre1eyxs9EoQjt3%2F4Goco2hDT4SA7VgKdFedyof1UVlEGfEXSOGNbL0Q5gVUY71Iwmoqgze1QPsGyhHP%2Bs9rZT8CEmWr3xTQdMIVFzLT8a3SMmVb1hjk7ryUjl3pLvqHN&X-Amz-Signature=5232171810fa2da36a2e48cab5ed9f8f5491011ef4208007dc4f2534b781af79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU3MPXG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIH4SkJ4Q7LDX%2BqCz%2BK8xbHqgCGXp1iNViC%2BIhwqNnIEtAiEA4zb%2BswAR0%2BAuLWmOQ4qzUyRbrT%2BkUqOJ6y199kFBZbsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMwNRJgLwv7mqPxN9SrcA5qt3p%2FrPZApvClgc7%2BJz%2BeP%2Byc%2FTbGMS88okr446tYwqZuwI3E2Zby2F73CdjGLqkq2FPHoysnZy5KXJSmb%2BrZuxMpZcaV4owVP0p1FTogg3ic13c0nUEaz1eDwQO34jf1ovn4evPESY5ConadHmuW7Olz2HMFqZqHk8kuw5oCbH%2BpQ0nA%2F3QM8aE%2BRSh5EKSmUy9rM6kroLDHcQmMNt84FmKgIigIVkjnCZLS3kzY90zb5lOg2ICAr%2BCkQSDs%2FKSaFdfTxl%2Fxyh8a1PQxDVRehz7Uu3REfXM7cYOqxQT1%2BHClSxKLarSgOVokn88ybggsI1n8Iz8xxGCeeOwdFRX5wpqnDouEVoYHSpyovr2wc5VHFkRxwJxubpXWjBqlzKE0G%2Bj7g27lnd8zCnRDPJPsOkL7oVl1%2FnS%2FrChPk7JcWjMLwQYD%2FKWAgQAbp7g%2Bgxds6S97Lm%2FeJmjfbru6swOmklqZBLkHun03e0CaYN1kxWDfYj4wj9JUCJhnptnD%2BxgF01ELftWfP9bkuYSQubkGm3E3U1BnTjt1kJP55P9Ang153JfOHfOsClv5mZBiuVl%2BjU8%2B7i%2F%2BtyjBxyqo3cdWoS0owHQLs4rAWmTcUYUH78Qj0My%2B3SBSnTICjMOi6tsIGOqUBtUgzCtgxXQMIdXgDldkPuUFqsuDjaeQIqgE7ix0dTI3iIPFSHd1PIn6X8rUSxyewk1l8%2Frv%2BO45%2FkAb0QWezCsPdD%2BKzre1eyxs9EoQjt3%2F4Goco2hDT4SA7VgKdFedyof1UVlEGfEXSOGNbL0Q5gVUY71Iwmoqgze1QPsGyhHP%2Bs9rZT8CEmWr3xTQdMIVFzLT8a3SMmVb1hjk7ryUjl3pLvqHN&X-Amz-Signature=474454aac1b2aade55e38e12cd766a3c052817883176664fc17453d07752b5d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU3MPXG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIH4SkJ4Q7LDX%2BqCz%2BK8xbHqgCGXp1iNViC%2BIhwqNnIEtAiEA4zb%2BswAR0%2BAuLWmOQ4qzUyRbrT%2BkUqOJ6y199kFBZbsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMwNRJgLwv7mqPxN9SrcA5qt3p%2FrPZApvClgc7%2BJz%2BeP%2Byc%2FTbGMS88okr446tYwqZuwI3E2Zby2F73CdjGLqkq2FPHoysnZy5KXJSmb%2BrZuxMpZcaV4owVP0p1FTogg3ic13c0nUEaz1eDwQO34jf1ovn4evPESY5ConadHmuW7Olz2HMFqZqHk8kuw5oCbH%2BpQ0nA%2F3QM8aE%2BRSh5EKSmUy9rM6kroLDHcQmMNt84FmKgIigIVkjnCZLS3kzY90zb5lOg2ICAr%2BCkQSDs%2FKSaFdfTxl%2Fxyh8a1PQxDVRehz7Uu3REfXM7cYOqxQT1%2BHClSxKLarSgOVokn88ybggsI1n8Iz8xxGCeeOwdFRX5wpqnDouEVoYHSpyovr2wc5VHFkRxwJxubpXWjBqlzKE0G%2Bj7g27lnd8zCnRDPJPsOkL7oVl1%2FnS%2FrChPk7JcWjMLwQYD%2FKWAgQAbp7g%2Bgxds6S97Lm%2FeJmjfbru6swOmklqZBLkHun03e0CaYN1kxWDfYj4wj9JUCJhnptnD%2BxgF01ELftWfP9bkuYSQubkGm3E3U1BnTjt1kJP55P9Ang153JfOHfOsClv5mZBiuVl%2BjU8%2B7i%2F%2BtyjBxyqo3cdWoS0owHQLs4rAWmTcUYUH78Qj0My%2B3SBSnTICjMOi6tsIGOqUBtUgzCtgxXQMIdXgDldkPuUFqsuDjaeQIqgE7ix0dTI3iIPFSHd1PIn6X8rUSxyewk1l8%2Frv%2BO45%2FkAb0QWezCsPdD%2BKzre1eyxs9EoQjt3%2F4Goco2hDT4SA7VgKdFedyof1UVlEGfEXSOGNbL0Q5gVUY71Iwmoqgze1QPsGyhHP%2Bs9rZT8CEmWr3xTQdMIVFzLT8a3SMmVb1hjk7ryUjl3pLvqHN&X-Amz-Signature=30100eebfd7fb8dbbb0bb9866fe39531f131d31ffbbeb5e556e8a786e7a87bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSU3MPXG%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIH4SkJ4Q7LDX%2BqCz%2BK8xbHqgCGXp1iNViC%2BIhwqNnIEtAiEA4zb%2BswAR0%2BAuLWmOQ4qzUyRbrT%2BkUqOJ6y199kFBZbsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMwNRJgLwv7mqPxN9SrcA5qt3p%2FrPZApvClgc7%2BJz%2BeP%2Byc%2FTbGMS88okr446tYwqZuwI3E2Zby2F73CdjGLqkq2FPHoysnZy5KXJSmb%2BrZuxMpZcaV4owVP0p1FTogg3ic13c0nUEaz1eDwQO34jf1ovn4evPESY5ConadHmuW7Olz2HMFqZqHk8kuw5oCbH%2BpQ0nA%2F3QM8aE%2BRSh5EKSmUy9rM6kroLDHcQmMNt84FmKgIigIVkjnCZLS3kzY90zb5lOg2ICAr%2BCkQSDs%2FKSaFdfTxl%2Fxyh8a1PQxDVRehz7Uu3REfXM7cYOqxQT1%2BHClSxKLarSgOVokn88ybggsI1n8Iz8xxGCeeOwdFRX5wpqnDouEVoYHSpyovr2wc5VHFkRxwJxubpXWjBqlzKE0G%2Bj7g27lnd8zCnRDPJPsOkL7oVl1%2FnS%2FrChPk7JcWjMLwQYD%2FKWAgQAbp7g%2Bgxds6S97Lm%2FeJmjfbru6swOmklqZBLkHun03e0CaYN1kxWDfYj4wj9JUCJhnptnD%2BxgF01ELftWfP9bkuYSQubkGm3E3U1BnTjt1kJP55P9Ang153JfOHfOsClv5mZBiuVl%2BjU8%2B7i%2F%2BtyjBxyqo3cdWoS0owHQLs4rAWmTcUYUH78Qj0My%2B3SBSnTICjMOi6tsIGOqUBtUgzCtgxXQMIdXgDldkPuUFqsuDjaeQIqgE7ix0dTI3iIPFSHd1PIn6X8rUSxyewk1l8%2Frv%2BO45%2FkAb0QWezCsPdD%2BKzre1eyxs9EoQjt3%2F4Goco2hDT4SA7VgKdFedyof1UVlEGfEXSOGNbL0Q5gVUY71Iwmoqgze1QPsGyhHP%2Bs9rZT8CEmWr3xTQdMIVFzLT8a3SMmVb1hjk7ryUjl3pLvqHN&X-Amz-Signature=5917115c119bf9bdb73f3762e6d59efc14f822adf2547d464dcda8f9be407337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
