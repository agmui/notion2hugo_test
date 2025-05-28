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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YPHDBK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoOslX%2BBVIKROdS00ApXQgQc61Kq18jtmoj0029TKf%2FwIgXVm283UEZf9V9efeiirBrXinax83OBnNFHnORSRMzmAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPgNhrx4EhqRXacCWSrcA0iN6fBf95%2B1oqUo6Manw73jzlDFzHNT%2F%2B4BryMq2gfb4eqo9DDg9M6uiqft02PV5IphzGN%2FMgG%2Bl2nJ04UoHSRLAMtdBjaM2C8SaknSux5x4Uae3BOkYHdfmCcaawXiQFEDIwG4oCjq8ifWWr9FwuSaT8c4Nc0b62Ji%2BLOnLiVlVuTMe6%2Fb1i8Yhs%2FrNdYAZ7oTnVlxxhZaWuk5Yyk3lViB6Y8zK3LHVseIoNgEJe8Wxkh87WCeW7qtjXT%2BViEwIL6AVUsU9wuNxcz2n5GYqCrezMKffAyaRWjzdrEPxDEzf4R88XQpDeDhonlYP%2FTzm6k%2B2w5BOMcYO9Cw0bu1WhjiDjwl%2BBB%2BOyIKdumhFkrcqAaDtKqAPiP4IvLQ8qfU7V3Q2mGnaffJLQ4YHXM4G7GrTTf9fTPqcb7M02HByOFhNZQiJP0UUCF3ZpTYG%2BlF9f7mg6%2BrXgXgPBGNfelg5IJCtrJtkBRlGhxmgp1ckKciI5VwmmgrtkcWKM%2FqgGdNgoV2yK8YIG%2F19EeaYvBN52BMv3mLi%2FM9a4Y27pxDEUQlnGZ3Rq1lxsVmNmfZEcZ4w%2FF78oznXk%2BpuwvYJ3p3KKeWBGqXVLiY1tYoNJiSsf0uRguVrc928bV8w%2FWwMLj43MEGOqUBHcPUWIVOKlC%2Byc0Z%2FMsinYyi759F8zrX7%2BJLwmda5QIpk7ojjG9QUlO9Hg8%2FOR48cf%2Fj4MmvU7BeIZmwu3Ly8QbouWYUGtyHgP50fuBwYiet6K9YTO3xJBG6CjZGGFYBICsRfbprmZcSVBvQqF36HHtDI3qsSgQoALrBNZM8hWz4UEU2jokdMwP%2BxPm%2FB7iPjMaSBl1VD9KEKM0cI2i8VrpFMJ4g&X-Amz-Signature=1e90846cfdd94bde3959bc86f676d3fd4005c92e1b34347f1b4ad0c989136c28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YPHDBK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoOslX%2BBVIKROdS00ApXQgQc61Kq18jtmoj0029TKf%2FwIgXVm283UEZf9V9efeiirBrXinax83OBnNFHnORSRMzmAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPgNhrx4EhqRXacCWSrcA0iN6fBf95%2B1oqUo6Manw73jzlDFzHNT%2F%2B4BryMq2gfb4eqo9DDg9M6uiqft02PV5IphzGN%2FMgG%2Bl2nJ04UoHSRLAMtdBjaM2C8SaknSux5x4Uae3BOkYHdfmCcaawXiQFEDIwG4oCjq8ifWWr9FwuSaT8c4Nc0b62Ji%2BLOnLiVlVuTMe6%2Fb1i8Yhs%2FrNdYAZ7oTnVlxxhZaWuk5Yyk3lViB6Y8zK3LHVseIoNgEJe8Wxkh87WCeW7qtjXT%2BViEwIL6AVUsU9wuNxcz2n5GYqCrezMKffAyaRWjzdrEPxDEzf4R88XQpDeDhonlYP%2FTzm6k%2B2w5BOMcYO9Cw0bu1WhjiDjwl%2BBB%2BOyIKdumhFkrcqAaDtKqAPiP4IvLQ8qfU7V3Q2mGnaffJLQ4YHXM4G7GrTTf9fTPqcb7M02HByOFhNZQiJP0UUCF3ZpTYG%2BlF9f7mg6%2BrXgXgPBGNfelg5IJCtrJtkBRlGhxmgp1ckKciI5VwmmgrtkcWKM%2FqgGdNgoV2yK8YIG%2F19EeaYvBN52BMv3mLi%2FM9a4Y27pxDEUQlnGZ3Rq1lxsVmNmfZEcZ4w%2FF78oznXk%2BpuwvYJ3p3KKeWBGqXVLiY1tYoNJiSsf0uRguVrc928bV8w%2FWwMLj43MEGOqUBHcPUWIVOKlC%2Byc0Z%2FMsinYyi759F8zrX7%2BJLwmda5QIpk7ojjG9QUlO9Hg8%2FOR48cf%2Fj4MmvU7BeIZmwu3Ly8QbouWYUGtyHgP50fuBwYiet6K9YTO3xJBG6CjZGGFYBICsRfbprmZcSVBvQqF36HHtDI3qsSgQoALrBNZM8hWz4UEU2jokdMwP%2BxPm%2FB7iPjMaSBl1VD9KEKM0cI2i8VrpFMJ4g&X-Amz-Signature=da07ec4eb65d21e29df98aa4084288c5b0eca4b20d01be3b5a3c098d88dc7053&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YPHDBK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoOslX%2BBVIKROdS00ApXQgQc61Kq18jtmoj0029TKf%2FwIgXVm283UEZf9V9efeiirBrXinax83OBnNFHnORSRMzmAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPgNhrx4EhqRXacCWSrcA0iN6fBf95%2B1oqUo6Manw73jzlDFzHNT%2F%2B4BryMq2gfb4eqo9DDg9M6uiqft02PV5IphzGN%2FMgG%2Bl2nJ04UoHSRLAMtdBjaM2C8SaknSux5x4Uae3BOkYHdfmCcaawXiQFEDIwG4oCjq8ifWWr9FwuSaT8c4Nc0b62Ji%2BLOnLiVlVuTMe6%2Fb1i8Yhs%2FrNdYAZ7oTnVlxxhZaWuk5Yyk3lViB6Y8zK3LHVseIoNgEJe8Wxkh87WCeW7qtjXT%2BViEwIL6AVUsU9wuNxcz2n5GYqCrezMKffAyaRWjzdrEPxDEzf4R88XQpDeDhonlYP%2FTzm6k%2B2w5BOMcYO9Cw0bu1WhjiDjwl%2BBB%2BOyIKdumhFkrcqAaDtKqAPiP4IvLQ8qfU7V3Q2mGnaffJLQ4YHXM4G7GrTTf9fTPqcb7M02HByOFhNZQiJP0UUCF3ZpTYG%2BlF9f7mg6%2BrXgXgPBGNfelg5IJCtrJtkBRlGhxmgp1ckKciI5VwmmgrtkcWKM%2FqgGdNgoV2yK8YIG%2F19EeaYvBN52BMv3mLi%2FM9a4Y27pxDEUQlnGZ3Rq1lxsVmNmfZEcZ4w%2FF78oznXk%2BpuwvYJ3p3KKeWBGqXVLiY1tYoNJiSsf0uRguVrc928bV8w%2FWwMLj43MEGOqUBHcPUWIVOKlC%2Byc0Z%2FMsinYyi759F8zrX7%2BJLwmda5QIpk7ojjG9QUlO9Hg8%2FOR48cf%2Fj4MmvU7BeIZmwu3Ly8QbouWYUGtyHgP50fuBwYiet6K9YTO3xJBG6CjZGGFYBICsRfbprmZcSVBvQqF36HHtDI3qsSgQoALrBNZM8hWz4UEU2jokdMwP%2BxPm%2FB7iPjMaSBl1VD9KEKM0cI2i8VrpFMJ4g&X-Amz-Signature=21f19c73a87998b5afab2d90626d635869ec6eda0ed33310261e6dfe3de00c74&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YPHDBK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoOslX%2BBVIKROdS00ApXQgQc61Kq18jtmoj0029TKf%2FwIgXVm283UEZf9V9efeiirBrXinax83OBnNFHnORSRMzmAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPgNhrx4EhqRXacCWSrcA0iN6fBf95%2B1oqUo6Manw73jzlDFzHNT%2F%2B4BryMq2gfb4eqo9DDg9M6uiqft02PV5IphzGN%2FMgG%2Bl2nJ04UoHSRLAMtdBjaM2C8SaknSux5x4Uae3BOkYHdfmCcaawXiQFEDIwG4oCjq8ifWWr9FwuSaT8c4Nc0b62Ji%2BLOnLiVlVuTMe6%2Fb1i8Yhs%2FrNdYAZ7oTnVlxxhZaWuk5Yyk3lViB6Y8zK3LHVseIoNgEJe8Wxkh87WCeW7qtjXT%2BViEwIL6AVUsU9wuNxcz2n5GYqCrezMKffAyaRWjzdrEPxDEzf4R88XQpDeDhonlYP%2FTzm6k%2B2w5BOMcYO9Cw0bu1WhjiDjwl%2BBB%2BOyIKdumhFkrcqAaDtKqAPiP4IvLQ8qfU7V3Q2mGnaffJLQ4YHXM4G7GrTTf9fTPqcb7M02HByOFhNZQiJP0UUCF3ZpTYG%2BlF9f7mg6%2BrXgXgPBGNfelg5IJCtrJtkBRlGhxmgp1ckKciI5VwmmgrtkcWKM%2FqgGdNgoV2yK8YIG%2F19EeaYvBN52BMv3mLi%2FM9a4Y27pxDEUQlnGZ3Rq1lxsVmNmfZEcZ4w%2FF78oznXk%2BpuwvYJ3p3KKeWBGqXVLiY1tYoNJiSsf0uRguVrc928bV8w%2FWwMLj43MEGOqUBHcPUWIVOKlC%2Byc0Z%2FMsinYyi759F8zrX7%2BJLwmda5QIpk7ojjG9QUlO9Hg8%2FOR48cf%2Fj4MmvU7BeIZmwu3Ly8QbouWYUGtyHgP50fuBwYiet6K9YTO3xJBG6CjZGGFYBICsRfbprmZcSVBvQqF36HHtDI3qsSgQoALrBNZM8hWz4UEU2jokdMwP%2BxPm%2FB7iPjMaSBl1VD9KEKM0cI2i8VrpFMJ4g&X-Amz-Signature=9092d90d2b3d7f37c6555d34bbb52412273582f10217de4cc2b01a8bb3401522&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YPHDBK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoOslX%2BBVIKROdS00ApXQgQc61Kq18jtmoj0029TKf%2FwIgXVm283UEZf9V9efeiirBrXinax83OBnNFHnORSRMzmAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPgNhrx4EhqRXacCWSrcA0iN6fBf95%2B1oqUo6Manw73jzlDFzHNT%2F%2B4BryMq2gfb4eqo9DDg9M6uiqft02PV5IphzGN%2FMgG%2Bl2nJ04UoHSRLAMtdBjaM2C8SaknSux5x4Uae3BOkYHdfmCcaawXiQFEDIwG4oCjq8ifWWr9FwuSaT8c4Nc0b62Ji%2BLOnLiVlVuTMe6%2Fb1i8Yhs%2FrNdYAZ7oTnVlxxhZaWuk5Yyk3lViB6Y8zK3LHVseIoNgEJe8Wxkh87WCeW7qtjXT%2BViEwIL6AVUsU9wuNxcz2n5GYqCrezMKffAyaRWjzdrEPxDEzf4R88XQpDeDhonlYP%2FTzm6k%2B2w5BOMcYO9Cw0bu1WhjiDjwl%2BBB%2BOyIKdumhFkrcqAaDtKqAPiP4IvLQ8qfU7V3Q2mGnaffJLQ4YHXM4G7GrTTf9fTPqcb7M02HByOFhNZQiJP0UUCF3ZpTYG%2BlF9f7mg6%2BrXgXgPBGNfelg5IJCtrJtkBRlGhxmgp1ckKciI5VwmmgrtkcWKM%2FqgGdNgoV2yK8YIG%2F19EeaYvBN52BMv3mLi%2FM9a4Y27pxDEUQlnGZ3Rq1lxsVmNmfZEcZ4w%2FF78oznXk%2BpuwvYJ3p3KKeWBGqXVLiY1tYoNJiSsf0uRguVrc928bV8w%2FWwMLj43MEGOqUBHcPUWIVOKlC%2Byc0Z%2FMsinYyi759F8zrX7%2BJLwmda5QIpk7ojjG9QUlO9Hg8%2FOR48cf%2Fj4MmvU7BeIZmwu3Ly8QbouWYUGtyHgP50fuBwYiet6K9YTO3xJBG6CjZGGFYBICsRfbprmZcSVBvQqF36HHtDI3qsSgQoALrBNZM8hWz4UEU2jokdMwP%2BxPm%2FB7iPjMaSBl1VD9KEKM0cI2i8VrpFMJ4g&X-Amz-Signature=41a3c8792dfff73f4d1b62fa4c358ac44e2569cc172bbafd50621900085ab3b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YPHDBK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoOslX%2BBVIKROdS00ApXQgQc61Kq18jtmoj0029TKf%2FwIgXVm283UEZf9V9efeiirBrXinax83OBnNFHnORSRMzmAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPgNhrx4EhqRXacCWSrcA0iN6fBf95%2B1oqUo6Manw73jzlDFzHNT%2F%2B4BryMq2gfb4eqo9DDg9M6uiqft02PV5IphzGN%2FMgG%2Bl2nJ04UoHSRLAMtdBjaM2C8SaknSux5x4Uae3BOkYHdfmCcaawXiQFEDIwG4oCjq8ifWWr9FwuSaT8c4Nc0b62Ji%2BLOnLiVlVuTMe6%2Fb1i8Yhs%2FrNdYAZ7oTnVlxxhZaWuk5Yyk3lViB6Y8zK3LHVseIoNgEJe8Wxkh87WCeW7qtjXT%2BViEwIL6AVUsU9wuNxcz2n5GYqCrezMKffAyaRWjzdrEPxDEzf4R88XQpDeDhonlYP%2FTzm6k%2B2w5BOMcYO9Cw0bu1WhjiDjwl%2BBB%2BOyIKdumhFkrcqAaDtKqAPiP4IvLQ8qfU7V3Q2mGnaffJLQ4YHXM4G7GrTTf9fTPqcb7M02HByOFhNZQiJP0UUCF3ZpTYG%2BlF9f7mg6%2BrXgXgPBGNfelg5IJCtrJtkBRlGhxmgp1ckKciI5VwmmgrtkcWKM%2FqgGdNgoV2yK8YIG%2F19EeaYvBN52BMv3mLi%2FM9a4Y27pxDEUQlnGZ3Rq1lxsVmNmfZEcZ4w%2FF78oznXk%2BpuwvYJ3p3KKeWBGqXVLiY1tYoNJiSsf0uRguVrc928bV8w%2FWwMLj43MEGOqUBHcPUWIVOKlC%2Byc0Z%2FMsinYyi759F8zrX7%2BJLwmda5QIpk7ojjG9QUlO9Hg8%2FOR48cf%2Fj4MmvU7BeIZmwu3Ly8QbouWYUGtyHgP50fuBwYiet6K9YTO3xJBG6CjZGGFYBICsRfbprmZcSVBvQqF36HHtDI3qsSgQoALrBNZM8hWz4UEU2jokdMwP%2BxPm%2FB7iPjMaSBl1VD9KEKM0cI2i8VrpFMJ4g&X-Amz-Signature=c470c58cc8094257f4429340b7cca8dcbd71efa650f1cdb75c113e52362fcd81&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YPHDBK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoOslX%2BBVIKROdS00ApXQgQc61Kq18jtmoj0029TKf%2FwIgXVm283UEZf9V9efeiirBrXinax83OBnNFHnORSRMzmAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPgNhrx4EhqRXacCWSrcA0iN6fBf95%2B1oqUo6Manw73jzlDFzHNT%2F%2B4BryMq2gfb4eqo9DDg9M6uiqft02PV5IphzGN%2FMgG%2Bl2nJ04UoHSRLAMtdBjaM2C8SaknSux5x4Uae3BOkYHdfmCcaawXiQFEDIwG4oCjq8ifWWr9FwuSaT8c4Nc0b62Ji%2BLOnLiVlVuTMe6%2Fb1i8Yhs%2FrNdYAZ7oTnVlxxhZaWuk5Yyk3lViB6Y8zK3LHVseIoNgEJe8Wxkh87WCeW7qtjXT%2BViEwIL6AVUsU9wuNxcz2n5GYqCrezMKffAyaRWjzdrEPxDEzf4R88XQpDeDhonlYP%2FTzm6k%2B2w5BOMcYO9Cw0bu1WhjiDjwl%2BBB%2BOyIKdumhFkrcqAaDtKqAPiP4IvLQ8qfU7V3Q2mGnaffJLQ4YHXM4G7GrTTf9fTPqcb7M02HByOFhNZQiJP0UUCF3ZpTYG%2BlF9f7mg6%2BrXgXgPBGNfelg5IJCtrJtkBRlGhxmgp1ckKciI5VwmmgrtkcWKM%2FqgGdNgoV2yK8YIG%2F19EeaYvBN52BMv3mLi%2FM9a4Y27pxDEUQlnGZ3Rq1lxsVmNmfZEcZ4w%2FF78oznXk%2BpuwvYJ3p3KKeWBGqXVLiY1tYoNJiSsf0uRguVrc928bV8w%2FWwMLj43MEGOqUBHcPUWIVOKlC%2Byc0Z%2FMsinYyi759F8zrX7%2BJLwmda5QIpk7ojjG9QUlO9Hg8%2FOR48cf%2Fj4MmvU7BeIZmwu3Ly8QbouWYUGtyHgP50fuBwYiet6K9YTO3xJBG6CjZGGFYBICsRfbprmZcSVBvQqF36HHtDI3qsSgQoALrBNZM8hWz4UEU2jokdMwP%2BxPm%2FB7iPjMaSBl1VD9KEKM0cI2i8VrpFMJ4g&X-Amz-Signature=9f596c18b11938c76ccf9caa47bf862d213757dbbc7adf934aed00ff97bd87fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YPHDBK%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoOslX%2BBVIKROdS00ApXQgQc61Kq18jtmoj0029TKf%2FwIgXVm283UEZf9V9efeiirBrXinax83OBnNFHnORSRMzmAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPgNhrx4EhqRXacCWSrcA0iN6fBf95%2B1oqUo6Manw73jzlDFzHNT%2F%2B4BryMq2gfb4eqo9DDg9M6uiqft02PV5IphzGN%2FMgG%2Bl2nJ04UoHSRLAMtdBjaM2C8SaknSux5x4Uae3BOkYHdfmCcaawXiQFEDIwG4oCjq8ifWWr9FwuSaT8c4Nc0b62Ji%2BLOnLiVlVuTMe6%2Fb1i8Yhs%2FrNdYAZ7oTnVlxxhZaWuk5Yyk3lViB6Y8zK3LHVseIoNgEJe8Wxkh87WCeW7qtjXT%2BViEwIL6AVUsU9wuNxcz2n5GYqCrezMKffAyaRWjzdrEPxDEzf4R88XQpDeDhonlYP%2FTzm6k%2B2w5BOMcYO9Cw0bu1WhjiDjwl%2BBB%2BOyIKdumhFkrcqAaDtKqAPiP4IvLQ8qfU7V3Q2mGnaffJLQ4YHXM4G7GrTTf9fTPqcb7M02HByOFhNZQiJP0UUCF3ZpTYG%2BlF9f7mg6%2BrXgXgPBGNfelg5IJCtrJtkBRlGhxmgp1ckKciI5VwmmgrtkcWKM%2FqgGdNgoV2yK8YIG%2F19EeaYvBN52BMv3mLi%2FM9a4Y27pxDEUQlnGZ3Rq1lxsVmNmfZEcZ4w%2FF78oznXk%2BpuwvYJ3p3KKeWBGqXVLiY1tYoNJiSsf0uRguVrc928bV8w%2FWwMLj43MEGOqUBHcPUWIVOKlC%2Byc0Z%2FMsinYyi759F8zrX7%2BJLwmda5QIpk7ojjG9QUlO9Hg8%2FOR48cf%2Fj4MmvU7BeIZmwu3Ly8QbouWYUGtyHgP50fuBwYiet6K9YTO3xJBG6CjZGGFYBICsRfbprmZcSVBvQqF36HHtDI3qsSgQoALrBNZM8hWz4UEU2jokdMwP%2BxPm%2FB7iPjMaSBl1VD9KEKM0cI2i8VrpFMJ4g&X-Amz-Signature=0122f66677405e586288197c58952eaf41f080f4134cb8f95c7a03ba2cb5dfa4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
