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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3VQLUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCPYtK1ukf1lJ4ruA4ftM6BTBxk%2B5D%2FAo6ckBY6dn0UogIhANMqXnb78wA%2B2B3bL78I3y8WM3l9AIOTIXhb4VA4aqszKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4%2BxTmFTVwoDLO8Yq3AM8LxE2VAd6Yko4lqfyEWE9OnHUrPcAs%2BsEV7SokhNiqcfeovLGxchMOHpe3VG2FHls5ZXwnkxWi9GnQGVc%2BcCBL%2BBhhngvaPQGeSWQXHanGb3Uf6m2NwDsopjZMSv4RZoSqx61nTpLrGviLRBlzmVSE61MXOEcVjQe4cLbDIwk19U%2BwcUSFkF%2BYsVnXMEKM8QwMGjfCDea%2Bu5QN2bF3FwNBtUQkUAWyrPKOEIMtzLUDGL066y3LbAXQt6gpGAgt%2BCcxU8s8ZqvYwMSRx4yKYTDUcLxnX0p6MpqrEAmxZhotLoCm6XGuS4xi7aHW3NTB241DdRZYUjeqg2cxxpiNpCc4aZzY9apeJ3TSnKp6NyO8jAJf3i50Nkg7KYB7G%2B7F7GOLOwoLNXyW6wO8HSjQit80ETuATlHKkOTnIifw6s%2FEIxtXP5CUaWMMlbvaGYkdBuCaIJ5xw9N4RsfwV1uKdMCXioNWorfoI8TvmjiFlcEFbVXleNgVoKdTGQecvjbYlc8NwA4NHCt8JOLNiwi2SqV%2BN2Viuz0nxsZhohVoMjrRg5yRQNcTWbBimLlC7jAC5Qai4kx5CqOAFaPbPRIiVYofvolsAI%2BaLpmHRmV%2FC5NeQTXrWDEXCOhTPsHFzDLxrvBBjqkAdyALH81lm2CLSbvLwXzsLa91lHOcGcUkDOFvAWNXNrGs5gn5EIk7JNgXOIodZXiPcqs9%2FTqUpZbCftXnwT2If0XyTxO1gH1sA3h63kvl5RYX71SgntgRVDEYsjUsIxSpkO%2BSnmCQOYdLxHYR9SsoQJSpdUnryjCl6NSChfaaGiOgLpqHYtqMB1VH9jRaiLmCTZdOpoPXL%2BVfhd1QG4CE9k35kL6&X-Amz-Signature=0a4ddac4ede70fe9ef8fe31bc2bf599ee0e520232e74cf2f05ec9f9574a8d66b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3VQLUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCPYtK1ukf1lJ4ruA4ftM6BTBxk%2B5D%2FAo6ckBY6dn0UogIhANMqXnb78wA%2B2B3bL78I3y8WM3l9AIOTIXhb4VA4aqszKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4%2BxTmFTVwoDLO8Yq3AM8LxE2VAd6Yko4lqfyEWE9OnHUrPcAs%2BsEV7SokhNiqcfeovLGxchMOHpe3VG2FHls5ZXwnkxWi9GnQGVc%2BcCBL%2BBhhngvaPQGeSWQXHanGb3Uf6m2NwDsopjZMSv4RZoSqx61nTpLrGviLRBlzmVSE61MXOEcVjQe4cLbDIwk19U%2BwcUSFkF%2BYsVnXMEKM8QwMGjfCDea%2Bu5QN2bF3FwNBtUQkUAWyrPKOEIMtzLUDGL066y3LbAXQt6gpGAgt%2BCcxU8s8ZqvYwMSRx4yKYTDUcLxnX0p6MpqrEAmxZhotLoCm6XGuS4xi7aHW3NTB241DdRZYUjeqg2cxxpiNpCc4aZzY9apeJ3TSnKp6NyO8jAJf3i50Nkg7KYB7G%2B7F7GOLOwoLNXyW6wO8HSjQit80ETuATlHKkOTnIifw6s%2FEIxtXP5CUaWMMlbvaGYkdBuCaIJ5xw9N4RsfwV1uKdMCXioNWorfoI8TvmjiFlcEFbVXleNgVoKdTGQecvjbYlc8NwA4NHCt8JOLNiwi2SqV%2BN2Viuz0nxsZhohVoMjrRg5yRQNcTWbBimLlC7jAC5Qai4kx5CqOAFaPbPRIiVYofvolsAI%2BaLpmHRmV%2FC5NeQTXrWDEXCOhTPsHFzDLxrvBBjqkAdyALH81lm2CLSbvLwXzsLa91lHOcGcUkDOFvAWNXNrGs5gn5EIk7JNgXOIodZXiPcqs9%2FTqUpZbCftXnwT2If0XyTxO1gH1sA3h63kvl5RYX71SgntgRVDEYsjUsIxSpkO%2BSnmCQOYdLxHYR9SsoQJSpdUnryjCl6NSChfaaGiOgLpqHYtqMB1VH9jRaiLmCTZdOpoPXL%2BVfhd1QG4CE9k35kL6&X-Amz-Signature=24548c577310600f171e79058438beb93226d6b80891f88d74b191dbb9f56c91&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3VQLUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCPYtK1ukf1lJ4ruA4ftM6BTBxk%2B5D%2FAo6ckBY6dn0UogIhANMqXnb78wA%2B2B3bL78I3y8WM3l9AIOTIXhb4VA4aqszKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4%2BxTmFTVwoDLO8Yq3AM8LxE2VAd6Yko4lqfyEWE9OnHUrPcAs%2BsEV7SokhNiqcfeovLGxchMOHpe3VG2FHls5ZXwnkxWi9GnQGVc%2BcCBL%2BBhhngvaPQGeSWQXHanGb3Uf6m2NwDsopjZMSv4RZoSqx61nTpLrGviLRBlzmVSE61MXOEcVjQe4cLbDIwk19U%2BwcUSFkF%2BYsVnXMEKM8QwMGjfCDea%2Bu5QN2bF3FwNBtUQkUAWyrPKOEIMtzLUDGL066y3LbAXQt6gpGAgt%2BCcxU8s8ZqvYwMSRx4yKYTDUcLxnX0p6MpqrEAmxZhotLoCm6XGuS4xi7aHW3NTB241DdRZYUjeqg2cxxpiNpCc4aZzY9apeJ3TSnKp6NyO8jAJf3i50Nkg7KYB7G%2B7F7GOLOwoLNXyW6wO8HSjQit80ETuATlHKkOTnIifw6s%2FEIxtXP5CUaWMMlbvaGYkdBuCaIJ5xw9N4RsfwV1uKdMCXioNWorfoI8TvmjiFlcEFbVXleNgVoKdTGQecvjbYlc8NwA4NHCt8JOLNiwi2SqV%2BN2Viuz0nxsZhohVoMjrRg5yRQNcTWbBimLlC7jAC5Qai4kx5CqOAFaPbPRIiVYofvolsAI%2BaLpmHRmV%2FC5NeQTXrWDEXCOhTPsHFzDLxrvBBjqkAdyALH81lm2CLSbvLwXzsLa91lHOcGcUkDOFvAWNXNrGs5gn5EIk7JNgXOIodZXiPcqs9%2FTqUpZbCftXnwT2If0XyTxO1gH1sA3h63kvl5RYX71SgntgRVDEYsjUsIxSpkO%2BSnmCQOYdLxHYR9SsoQJSpdUnryjCl6NSChfaaGiOgLpqHYtqMB1VH9jRaiLmCTZdOpoPXL%2BVfhd1QG4CE9k35kL6&X-Amz-Signature=748471034eaf65059e114f740437b8e49804c856b67b560586d7a442baaa78e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3VQLUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCPYtK1ukf1lJ4ruA4ftM6BTBxk%2B5D%2FAo6ckBY6dn0UogIhANMqXnb78wA%2B2B3bL78I3y8WM3l9AIOTIXhb4VA4aqszKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4%2BxTmFTVwoDLO8Yq3AM8LxE2VAd6Yko4lqfyEWE9OnHUrPcAs%2BsEV7SokhNiqcfeovLGxchMOHpe3VG2FHls5ZXwnkxWi9GnQGVc%2BcCBL%2BBhhngvaPQGeSWQXHanGb3Uf6m2NwDsopjZMSv4RZoSqx61nTpLrGviLRBlzmVSE61MXOEcVjQe4cLbDIwk19U%2BwcUSFkF%2BYsVnXMEKM8QwMGjfCDea%2Bu5QN2bF3FwNBtUQkUAWyrPKOEIMtzLUDGL066y3LbAXQt6gpGAgt%2BCcxU8s8ZqvYwMSRx4yKYTDUcLxnX0p6MpqrEAmxZhotLoCm6XGuS4xi7aHW3NTB241DdRZYUjeqg2cxxpiNpCc4aZzY9apeJ3TSnKp6NyO8jAJf3i50Nkg7KYB7G%2B7F7GOLOwoLNXyW6wO8HSjQit80ETuATlHKkOTnIifw6s%2FEIxtXP5CUaWMMlbvaGYkdBuCaIJ5xw9N4RsfwV1uKdMCXioNWorfoI8TvmjiFlcEFbVXleNgVoKdTGQecvjbYlc8NwA4NHCt8JOLNiwi2SqV%2BN2Viuz0nxsZhohVoMjrRg5yRQNcTWbBimLlC7jAC5Qai4kx5CqOAFaPbPRIiVYofvolsAI%2BaLpmHRmV%2FC5NeQTXrWDEXCOhTPsHFzDLxrvBBjqkAdyALH81lm2CLSbvLwXzsLa91lHOcGcUkDOFvAWNXNrGs5gn5EIk7JNgXOIodZXiPcqs9%2FTqUpZbCftXnwT2If0XyTxO1gH1sA3h63kvl5RYX71SgntgRVDEYsjUsIxSpkO%2BSnmCQOYdLxHYR9SsoQJSpdUnryjCl6NSChfaaGiOgLpqHYtqMB1VH9jRaiLmCTZdOpoPXL%2BVfhd1QG4CE9k35kL6&X-Amz-Signature=91c6c00555f6c8cdd37cf5db158179e799f519750af83e64f88f5fb85349f7f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3VQLUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCPYtK1ukf1lJ4ruA4ftM6BTBxk%2B5D%2FAo6ckBY6dn0UogIhANMqXnb78wA%2B2B3bL78I3y8WM3l9AIOTIXhb4VA4aqszKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4%2BxTmFTVwoDLO8Yq3AM8LxE2VAd6Yko4lqfyEWE9OnHUrPcAs%2BsEV7SokhNiqcfeovLGxchMOHpe3VG2FHls5ZXwnkxWi9GnQGVc%2BcCBL%2BBhhngvaPQGeSWQXHanGb3Uf6m2NwDsopjZMSv4RZoSqx61nTpLrGviLRBlzmVSE61MXOEcVjQe4cLbDIwk19U%2BwcUSFkF%2BYsVnXMEKM8QwMGjfCDea%2Bu5QN2bF3FwNBtUQkUAWyrPKOEIMtzLUDGL066y3LbAXQt6gpGAgt%2BCcxU8s8ZqvYwMSRx4yKYTDUcLxnX0p6MpqrEAmxZhotLoCm6XGuS4xi7aHW3NTB241DdRZYUjeqg2cxxpiNpCc4aZzY9apeJ3TSnKp6NyO8jAJf3i50Nkg7KYB7G%2B7F7GOLOwoLNXyW6wO8HSjQit80ETuATlHKkOTnIifw6s%2FEIxtXP5CUaWMMlbvaGYkdBuCaIJ5xw9N4RsfwV1uKdMCXioNWorfoI8TvmjiFlcEFbVXleNgVoKdTGQecvjbYlc8NwA4NHCt8JOLNiwi2SqV%2BN2Viuz0nxsZhohVoMjrRg5yRQNcTWbBimLlC7jAC5Qai4kx5CqOAFaPbPRIiVYofvolsAI%2BaLpmHRmV%2FC5NeQTXrWDEXCOhTPsHFzDLxrvBBjqkAdyALH81lm2CLSbvLwXzsLa91lHOcGcUkDOFvAWNXNrGs5gn5EIk7JNgXOIodZXiPcqs9%2FTqUpZbCftXnwT2If0XyTxO1gH1sA3h63kvl5RYX71SgntgRVDEYsjUsIxSpkO%2BSnmCQOYdLxHYR9SsoQJSpdUnryjCl6NSChfaaGiOgLpqHYtqMB1VH9jRaiLmCTZdOpoPXL%2BVfhd1QG4CE9k35kL6&X-Amz-Signature=4840b06907c8109fb11f4f85e81fe867407eec38eb1de703d271f3f1f60d01b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3VQLUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCPYtK1ukf1lJ4ruA4ftM6BTBxk%2B5D%2FAo6ckBY6dn0UogIhANMqXnb78wA%2B2B3bL78I3y8WM3l9AIOTIXhb4VA4aqszKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4%2BxTmFTVwoDLO8Yq3AM8LxE2VAd6Yko4lqfyEWE9OnHUrPcAs%2BsEV7SokhNiqcfeovLGxchMOHpe3VG2FHls5ZXwnkxWi9GnQGVc%2BcCBL%2BBhhngvaPQGeSWQXHanGb3Uf6m2NwDsopjZMSv4RZoSqx61nTpLrGviLRBlzmVSE61MXOEcVjQe4cLbDIwk19U%2BwcUSFkF%2BYsVnXMEKM8QwMGjfCDea%2Bu5QN2bF3FwNBtUQkUAWyrPKOEIMtzLUDGL066y3LbAXQt6gpGAgt%2BCcxU8s8ZqvYwMSRx4yKYTDUcLxnX0p6MpqrEAmxZhotLoCm6XGuS4xi7aHW3NTB241DdRZYUjeqg2cxxpiNpCc4aZzY9apeJ3TSnKp6NyO8jAJf3i50Nkg7KYB7G%2B7F7GOLOwoLNXyW6wO8HSjQit80ETuATlHKkOTnIifw6s%2FEIxtXP5CUaWMMlbvaGYkdBuCaIJ5xw9N4RsfwV1uKdMCXioNWorfoI8TvmjiFlcEFbVXleNgVoKdTGQecvjbYlc8NwA4NHCt8JOLNiwi2SqV%2BN2Viuz0nxsZhohVoMjrRg5yRQNcTWbBimLlC7jAC5Qai4kx5CqOAFaPbPRIiVYofvolsAI%2BaLpmHRmV%2FC5NeQTXrWDEXCOhTPsHFzDLxrvBBjqkAdyALH81lm2CLSbvLwXzsLa91lHOcGcUkDOFvAWNXNrGs5gn5EIk7JNgXOIodZXiPcqs9%2FTqUpZbCftXnwT2If0XyTxO1gH1sA3h63kvl5RYX71SgntgRVDEYsjUsIxSpkO%2BSnmCQOYdLxHYR9SsoQJSpdUnryjCl6NSChfaaGiOgLpqHYtqMB1VH9jRaiLmCTZdOpoPXL%2BVfhd1QG4CE9k35kL6&X-Amz-Signature=435336f41d07d0a19ab0d02ccb4824469a39441ffd6587266f9621c9e640a36e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3VQLUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCPYtK1ukf1lJ4ruA4ftM6BTBxk%2B5D%2FAo6ckBY6dn0UogIhANMqXnb78wA%2B2B3bL78I3y8WM3l9AIOTIXhb4VA4aqszKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4%2BxTmFTVwoDLO8Yq3AM8LxE2VAd6Yko4lqfyEWE9OnHUrPcAs%2BsEV7SokhNiqcfeovLGxchMOHpe3VG2FHls5ZXwnkxWi9GnQGVc%2BcCBL%2BBhhngvaPQGeSWQXHanGb3Uf6m2NwDsopjZMSv4RZoSqx61nTpLrGviLRBlzmVSE61MXOEcVjQe4cLbDIwk19U%2BwcUSFkF%2BYsVnXMEKM8QwMGjfCDea%2Bu5QN2bF3FwNBtUQkUAWyrPKOEIMtzLUDGL066y3LbAXQt6gpGAgt%2BCcxU8s8ZqvYwMSRx4yKYTDUcLxnX0p6MpqrEAmxZhotLoCm6XGuS4xi7aHW3NTB241DdRZYUjeqg2cxxpiNpCc4aZzY9apeJ3TSnKp6NyO8jAJf3i50Nkg7KYB7G%2B7F7GOLOwoLNXyW6wO8HSjQit80ETuATlHKkOTnIifw6s%2FEIxtXP5CUaWMMlbvaGYkdBuCaIJ5xw9N4RsfwV1uKdMCXioNWorfoI8TvmjiFlcEFbVXleNgVoKdTGQecvjbYlc8NwA4NHCt8JOLNiwi2SqV%2BN2Viuz0nxsZhohVoMjrRg5yRQNcTWbBimLlC7jAC5Qai4kx5CqOAFaPbPRIiVYofvolsAI%2BaLpmHRmV%2FC5NeQTXrWDEXCOhTPsHFzDLxrvBBjqkAdyALH81lm2CLSbvLwXzsLa91lHOcGcUkDOFvAWNXNrGs5gn5EIk7JNgXOIodZXiPcqs9%2FTqUpZbCftXnwT2If0XyTxO1gH1sA3h63kvl5RYX71SgntgRVDEYsjUsIxSpkO%2BSnmCQOYdLxHYR9SsoQJSpdUnryjCl6NSChfaaGiOgLpqHYtqMB1VH9jRaiLmCTZdOpoPXL%2BVfhd1QG4CE9k35kL6&X-Amz-Signature=106c5363367773225dcdb128310b5bbe731fa4178127cf1f9ebb651c5a2085b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF3VQLUL%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCPYtK1ukf1lJ4ruA4ftM6BTBxk%2B5D%2FAo6ckBY6dn0UogIhANMqXnb78wA%2B2B3bL78I3y8WM3l9AIOTIXhb4VA4aqszKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN4%2BxTmFTVwoDLO8Yq3AM8LxE2VAd6Yko4lqfyEWE9OnHUrPcAs%2BsEV7SokhNiqcfeovLGxchMOHpe3VG2FHls5ZXwnkxWi9GnQGVc%2BcCBL%2BBhhngvaPQGeSWQXHanGb3Uf6m2NwDsopjZMSv4RZoSqx61nTpLrGviLRBlzmVSE61MXOEcVjQe4cLbDIwk19U%2BwcUSFkF%2BYsVnXMEKM8QwMGjfCDea%2Bu5QN2bF3FwNBtUQkUAWyrPKOEIMtzLUDGL066y3LbAXQt6gpGAgt%2BCcxU8s8ZqvYwMSRx4yKYTDUcLxnX0p6MpqrEAmxZhotLoCm6XGuS4xi7aHW3NTB241DdRZYUjeqg2cxxpiNpCc4aZzY9apeJ3TSnKp6NyO8jAJf3i50Nkg7KYB7G%2B7F7GOLOwoLNXyW6wO8HSjQit80ETuATlHKkOTnIifw6s%2FEIxtXP5CUaWMMlbvaGYkdBuCaIJ5xw9N4RsfwV1uKdMCXioNWorfoI8TvmjiFlcEFbVXleNgVoKdTGQecvjbYlc8NwA4NHCt8JOLNiwi2SqV%2BN2Viuz0nxsZhohVoMjrRg5yRQNcTWbBimLlC7jAC5Qai4kx5CqOAFaPbPRIiVYofvolsAI%2BaLpmHRmV%2FC5NeQTXrWDEXCOhTPsHFzDLxrvBBjqkAdyALH81lm2CLSbvLwXzsLa91lHOcGcUkDOFvAWNXNrGs5gn5EIk7JNgXOIodZXiPcqs9%2FTqUpZbCftXnwT2If0XyTxO1gH1sA3h63kvl5RYX71SgntgRVDEYsjUsIxSpkO%2BSnmCQOYdLxHYR9SsoQJSpdUnryjCl6NSChfaaGiOgLpqHYtqMB1VH9jRaiLmCTZdOpoPXL%2BVfhd1QG4CE9k35kL6&X-Amz-Signature=a1b50f6c2fe5009b1e4eeeb2e4b6b039fc57777731d6bac01ca2f15e70c12169&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
