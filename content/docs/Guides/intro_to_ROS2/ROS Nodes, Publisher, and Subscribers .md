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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQS7DRD6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnqezXR3IH3g428ln1ZDw1c0Qan3Xn8tXZl%2FTDaO5T%2FgIhAOulMxSqwN2vNFLlgqPAnGJhsZPVFQbPp7ajDwSS6%2Bf5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzIl8AC8b9J9%2FjbjhUq3AO5ycolNpZAJOqUnYgaBpxnfM%2BQwGpXkP91ZJLQNdVdc4NnFVTeSaRcL3dDaIU0IYUEu7ddpFFl%2FIp8qjcDbsvtvejiRcBoidrR89vqnaet8qwYYq1tBSOd6CKIchn7q32WBs1tSy3BB9g0sL%2B86%2Fb5yD36KHKuN6gaOBk7F2VhFvEpL81LalsMHQiFExCDRAkpDJkSBdReiePMwej2flfyGreuGxmnCOmQG7c09T9Va76BylV6oOXn3TydngV4OX8dTjTooBgAQoEx5yCpbq1ALCOU%2F%2BRSCRwn9GyiJ9AvucTFb4FHlLB%2BuTM7kvV7DbkjyhvywVjkkYKD4r8DWOeyPnuZg7B%2Fy6cTbwb7WLCRpH86uPOtiSiBVvKHOi13co%2FP%2BQvBgin72CP4sOglst3YUr4bD6GZ3QtzgldcuNcGr5oUT4D2f37eT6%2Bg5T8hSNvBlep4bRxAC%2Bgj0HKD91%2Bno4503FdLs6E1GYcH25CjbQzmZrdH9ra3QooAwp2eFfENwyDE%2Bv%2F01IpjNCrDjQ34I2HklD%2B8A7KoEWasQlNY949zlZNRnmo0k9Bo%2B3ENgUJm%2BHHdW6hJ%2FZ0fj6sqDd2rQmFaZeQNNt7ogBzd8KvvU1AZgySyj0bQeeD%2FjDDVjeXDBjqkAQ1RDwJhZ2cSCBU93mXDfm9k2YGMthZiIynLObGpXkTNww0nA8pkNE3HVu7OmzsrSdYVNX8vOFw%2FitoIy1q218cOlaDWvi9R1QjyE80YmmV6UxxN4NwNiop9BcA%2FGCLfgrVeuRtCVMA1Ee9KBs2asQGcmgfwANpiIlNjv%2B%2FJhyXLSLDjBoGArx1ytX04OadiLTqIAhSwhf7yYeIo4TUrnfncqm0i&X-Amz-Signature=d57de7b6e7e50b43d743d0a5026e224b7c1d837a2a6ff12ca3d3b8e63b4e213a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQS7DRD6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnqezXR3IH3g428ln1ZDw1c0Qan3Xn8tXZl%2FTDaO5T%2FgIhAOulMxSqwN2vNFLlgqPAnGJhsZPVFQbPp7ajDwSS6%2Bf5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzIl8AC8b9J9%2FjbjhUq3AO5ycolNpZAJOqUnYgaBpxnfM%2BQwGpXkP91ZJLQNdVdc4NnFVTeSaRcL3dDaIU0IYUEu7ddpFFl%2FIp8qjcDbsvtvejiRcBoidrR89vqnaet8qwYYq1tBSOd6CKIchn7q32WBs1tSy3BB9g0sL%2B86%2Fb5yD36KHKuN6gaOBk7F2VhFvEpL81LalsMHQiFExCDRAkpDJkSBdReiePMwej2flfyGreuGxmnCOmQG7c09T9Va76BylV6oOXn3TydngV4OX8dTjTooBgAQoEx5yCpbq1ALCOU%2F%2BRSCRwn9GyiJ9AvucTFb4FHlLB%2BuTM7kvV7DbkjyhvywVjkkYKD4r8DWOeyPnuZg7B%2Fy6cTbwb7WLCRpH86uPOtiSiBVvKHOi13co%2FP%2BQvBgin72CP4sOglst3YUr4bD6GZ3QtzgldcuNcGr5oUT4D2f37eT6%2Bg5T8hSNvBlep4bRxAC%2Bgj0HKD91%2Bno4503FdLs6E1GYcH25CjbQzmZrdH9ra3QooAwp2eFfENwyDE%2Bv%2F01IpjNCrDjQ34I2HklD%2B8A7KoEWasQlNY949zlZNRnmo0k9Bo%2B3ENgUJm%2BHHdW6hJ%2FZ0fj6sqDd2rQmFaZeQNNt7ogBzd8KvvU1AZgySyj0bQeeD%2FjDDVjeXDBjqkAQ1RDwJhZ2cSCBU93mXDfm9k2YGMthZiIynLObGpXkTNww0nA8pkNE3HVu7OmzsrSdYVNX8vOFw%2FitoIy1q218cOlaDWvi9R1QjyE80YmmV6UxxN4NwNiop9BcA%2FGCLfgrVeuRtCVMA1Ee9KBs2asQGcmgfwANpiIlNjv%2B%2FJhyXLSLDjBoGArx1ytX04OadiLTqIAhSwhf7yYeIo4TUrnfncqm0i&X-Amz-Signature=d0310c221bda365236a8eaf9e0e1ed0cd973dbbeafb43580cb393b51420ea776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQS7DRD6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnqezXR3IH3g428ln1ZDw1c0Qan3Xn8tXZl%2FTDaO5T%2FgIhAOulMxSqwN2vNFLlgqPAnGJhsZPVFQbPp7ajDwSS6%2Bf5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzIl8AC8b9J9%2FjbjhUq3AO5ycolNpZAJOqUnYgaBpxnfM%2BQwGpXkP91ZJLQNdVdc4NnFVTeSaRcL3dDaIU0IYUEu7ddpFFl%2FIp8qjcDbsvtvejiRcBoidrR89vqnaet8qwYYq1tBSOd6CKIchn7q32WBs1tSy3BB9g0sL%2B86%2Fb5yD36KHKuN6gaOBk7F2VhFvEpL81LalsMHQiFExCDRAkpDJkSBdReiePMwej2flfyGreuGxmnCOmQG7c09T9Va76BylV6oOXn3TydngV4OX8dTjTooBgAQoEx5yCpbq1ALCOU%2F%2BRSCRwn9GyiJ9AvucTFb4FHlLB%2BuTM7kvV7DbkjyhvywVjkkYKD4r8DWOeyPnuZg7B%2Fy6cTbwb7WLCRpH86uPOtiSiBVvKHOi13co%2FP%2BQvBgin72CP4sOglst3YUr4bD6GZ3QtzgldcuNcGr5oUT4D2f37eT6%2Bg5T8hSNvBlep4bRxAC%2Bgj0HKD91%2Bno4503FdLs6E1GYcH25CjbQzmZrdH9ra3QooAwp2eFfENwyDE%2Bv%2F01IpjNCrDjQ34I2HklD%2B8A7KoEWasQlNY949zlZNRnmo0k9Bo%2B3ENgUJm%2BHHdW6hJ%2FZ0fj6sqDd2rQmFaZeQNNt7ogBzd8KvvU1AZgySyj0bQeeD%2FjDDVjeXDBjqkAQ1RDwJhZ2cSCBU93mXDfm9k2YGMthZiIynLObGpXkTNww0nA8pkNE3HVu7OmzsrSdYVNX8vOFw%2FitoIy1q218cOlaDWvi9R1QjyE80YmmV6UxxN4NwNiop9BcA%2FGCLfgrVeuRtCVMA1Ee9KBs2asQGcmgfwANpiIlNjv%2B%2FJhyXLSLDjBoGArx1ytX04OadiLTqIAhSwhf7yYeIo4TUrnfncqm0i&X-Amz-Signature=5512beaabefbd6ae36bcaaf0e1387be40dbd35d032a4ba92141a51edf2fc6e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQS7DRD6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnqezXR3IH3g428ln1ZDw1c0Qan3Xn8tXZl%2FTDaO5T%2FgIhAOulMxSqwN2vNFLlgqPAnGJhsZPVFQbPp7ajDwSS6%2Bf5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzIl8AC8b9J9%2FjbjhUq3AO5ycolNpZAJOqUnYgaBpxnfM%2BQwGpXkP91ZJLQNdVdc4NnFVTeSaRcL3dDaIU0IYUEu7ddpFFl%2FIp8qjcDbsvtvejiRcBoidrR89vqnaet8qwYYq1tBSOd6CKIchn7q32WBs1tSy3BB9g0sL%2B86%2Fb5yD36KHKuN6gaOBk7F2VhFvEpL81LalsMHQiFExCDRAkpDJkSBdReiePMwej2flfyGreuGxmnCOmQG7c09T9Va76BylV6oOXn3TydngV4OX8dTjTooBgAQoEx5yCpbq1ALCOU%2F%2BRSCRwn9GyiJ9AvucTFb4FHlLB%2BuTM7kvV7DbkjyhvywVjkkYKD4r8DWOeyPnuZg7B%2Fy6cTbwb7WLCRpH86uPOtiSiBVvKHOi13co%2FP%2BQvBgin72CP4sOglst3YUr4bD6GZ3QtzgldcuNcGr5oUT4D2f37eT6%2Bg5T8hSNvBlep4bRxAC%2Bgj0HKD91%2Bno4503FdLs6E1GYcH25CjbQzmZrdH9ra3QooAwp2eFfENwyDE%2Bv%2F01IpjNCrDjQ34I2HklD%2B8A7KoEWasQlNY949zlZNRnmo0k9Bo%2B3ENgUJm%2BHHdW6hJ%2FZ0fj6sqDd2rQmFaZeQNNt7ogBzd8KvvU1AZgySyj0bQeeD%2FjDDVjeXDBjqkAQ1RDwJhZ2cSCBU93mXDfm9k2YGMthZiIynLObGpXkTNww0nA8pkNE3HVu7OmzsrSdYVNX8vOFw%2FitoIy1q218cOlaDWvi9R1QjyE80YmmV6UxxN4NwNiop9BcA%2FGCLfgrVeuRtCVMA1Ee9KBs2asQGcmgfwANpiIlNjv%2B%2FJhyXLSLDjBoGArx1ytX04OadiLTqIAhSwhf7yYeIo4TUrnfncqm0i&X-Amz-Signature=b3035f5aeab04ce3cbfb25e560b9e4f201074099f51eaa4cb230e2b348fc4843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQS7DRD6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnqezXR3IH3g428ln1ZDw1c0Qan3Xn8tXZl%2FTDaO5T%2FgIhAOulMxSqwN2vNFLlgqPAnGJhsZPVFQbPp7ajDwSS6%2Bf5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzIl8AC8b9J9%2FjbjhUq3AO5ycolNpZAJOqUnYgaBpxnfM%2BQwGpXkP91ZJLQNdVdc4NnFVTeSaRcL3dDaIU0IYUEu7ddpFFl%2FIp8qjcDbsvtvejiRcBoidrR89vqnaet8qwYYq1tBSOd6CKIchn7q32WBs1tSy3BB9g0sL%2B86%2Fb5yD36KHKuN6gaOBk7F2VhFvEpL81LalsMHQiFExCDRAkpDJkSBdReiePMwej2flfyGreuGxmnCOmQG7c09T9Va76BylV6oOXn3TydngV4OX8dTjTooBgAQoEx5yCpbq1ALCOU%2F%2BRSCRwn9GyiJ9AvucTFb4FHlLB%2BuTM7kvV7DbkjyhvywVjkkYKD4r8DWOeyPnuZg7B%2Fy6cTbwb7WLCRpH86uPOtiSiBVvKHOi13co%2FP%2BQvBgin72CP4sOglst3YUr4bD6GZ3QtzgldcuNcGr5oUT4D2f37eT6%2Bg5T8hSNvBlep4bRxAC%2Bgj0HKD91%2Bno4503FdLs6E1GYcH25CjbQzmZrdH9ra3QooAwp2eFfENwyDE%2Bv%2F01IpjNCrDjQ34I2HklD%2B8A7KoEWasQlNY949zlZNRnmo0k9Bo%2B3ENgUJm%2BHHdW6hJ%2FZ0fj6sqDd2rQmFaZeQNNt7ogBzd8KvvU1AZgySyj0bQeeD%2FjDDVjeXDBjqkAQ1RDwJhZ2cSCBU93mXDfm9k2YGMthZiIynLObGpXkTNww0nA8pkNE3HVu7OmzsrSdYVNX8vOFw%2FitoIy1q218cOlaDWvi9R1QjyE80YmmV6UxxN4NwNiop9BcA%2FGCLfgrVeuRtCVMA1Ee9KBs2asQGcmgfwANpiIlNjv%2B%2FJhyXLSLDjBoGArx1ytX04OadiLTqIAhSwhf7yYeIo4TUrnfncqm0i&X-Amz-Signature=9312f29aba0553abdb1d624b9901d883d8188d420a400586a3ce68dfdbd8ad6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQS7DRD6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnqezXR3IH3g428ln1ZDw1c0Qan3Xn8tXZl%2FTDaO5T%2FgIhAOulMxSqwN2vNFLlgqPAnGJhsZPVFQbPp7ajDwSS6%2Bf5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzIl8AC8b9J9%2FjbjhUq3AO5ycolNpZAJOqUnYgaBpxnfM%2BQwGpXkP91ZJLQNdVdc4NnFVTeSaRcL3dDaIU0IYUEu7ddpFFl%2FIp8qjcDbsvtvejiRcBoidrR89vqnaet8qwYYq1tBSOd6CKIchn7q32WBs1tSy3BB9g0sL%2B86%2Fb5yD36KHKuN6gaOBk7F2VhFvEpL81LalsMHQiFExCDRAkpDJkSBdReiePMwej2flfyGreuGxmnCOmQG7c09T9Va76BylV6oOXn3TydngV4OX8dTjTooBgAQoEx5yCpbq1ALCOU%2F%2BRSCRwn9GyiJ9AvucTFb4FHlLB%2BuTM7kvV7DbkjyhvywVjkkYKD4r8DWOeyPnuZg7B%2Fy6cTbwb7WLCRpH86uPOtiSiBVvKHOi13co%2FP%2BQvBgin72CP4sOglst3YUr4bD6GZ3QtzgldcuNcGr5oUT4D2f37eT6%2Bg5T8hSNvBlep4bRxAC%2Bgj0HKD91%2Bno4503FdLs6E1GYcH25CjbQzmZrdH9ra3QooAwp2eFfENwyDE%2Bv%2F01IpjNCrDjQ34I2HklD%2B8A7KoEWasQlNY949zlZNRnmo0k9Bo%2B3ENgUJm%2BHHdW6hJ%2FZ0fj6sqDd2rQmFaZeQNNt7ogBzd8KvvU1AZgySyj0bQeeD%2FjDDVjeXDBjqkAQ1RDwJhZ2cSCBU93mXDfm9k2YGMthZiIynLObGpXkTNww0nA8pkNE3HVu7OmzsrSdYVNX8vOFw%2FitoIy1q218cOlaDWvi9R1QjyE80YmmV6UxxN4NwNiop9BcA%2FGCLfgrVeuRtCVMA1Ee9KBs2asQGcmgfwANpiIlNjv%2B%2FJhyXLSLDjBoGArx1ytX04OadiLTqIAhSwhf7yYeIo4TUrnfncqm0i&X-Amz-Signature=c2ce04613eedbf5b96528e0e974029ddbf971a9ab95b6cac80fb310320377600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQS7DRD6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnqezXR3IH3g428ln1ZDw1c0Qan3Xn8tXZl%2FTDaO5T%2FgIhAOulMxSqwN2vNFLlgqPAnGJhsZPVFQbPp7ajDwSS6%2Bf5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzIl8AC8b9J9%2FjbjhUq3AO5ycolNpZAJOqUnYgaBpxnfM%2BQwGpXkP91ZJLQNdVdc4NnFVTeSaRcL3dDaIU0IYUEu7ddpFFl%2FIp8qjcDbsvtvejiRcBoidrR89vqnaet8qwYYq1tBSOd6CKIchn7q32WBs1tSy3BB9g0sL%2B86%2Fb5yD36KHKuN6gaOBk7F2VhFvEpL81LalsMHQiFExCDRAkpDJkSBdReiePMwej2flfyGreuGxmnCOmQG7c09T9Va76BylV6oOXn3TydngV4OX8dTjTooBgAQoEx5yCpbq1ALCOU%2F%2BRSCRwn9GyiJ9AvucTFb4FHlLB%2BuTM7kvV7DbkjyhvywVjkkYKD4r8DWOeyPnuZg7B%2Fy6cTbwb7WLCRpH86uPOtiSiBVvKHOi13co%2FP%2BQvBgin72CP4sOglst3YUr4bD6GZ3QtzgldcuNcGr5oUT4D2f37eT6%2Bg5T8hSNvBlep4bRxAC%2Bgj0HKD91%2Bno4503FdLs6E1GYcH25CjbQzmZrdH9ra3QooAwp2eFfENwyDE%2Bv%2F01IpjNCrDjQ34I2HklD%2B8A7KoEWasQlNY949zlZNRnmo0k9Bo%2B3ENgUJm%2BHHdW6hJ%2FZ0fj6sqDd2rQmFaZeQNNt7ogBzd8KvvU1AZgySyj0bQeeD%2FjDDVjeXDBjqkAQ1RDwJhZ2cSCBU93mXDfm9k2YGMthZiIynLObGpXkTNww0nA8pkNE3HVu7OmzsrSdYVNX8vOFw%2FitoIy1q218cOlaDWvi9R1QjyE80YmmV6UxxN4NwNiop9BcA%2FGCLfgrVeuRtCVMA1Ee9KBs2asQGcmgfwANpiIlNjv%2B%2FJhyXLSLDjBoGArx1ytX04OadiLTqIAhSwhf7yYeIo4TUrnfncqm0i&X-Amz-Signature=4b954a08959334d7f6840578795a8dea9e6349ca175fd69a734d38dfa3cf5ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQS7DRD6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCnqezXR3IH3g428ln1ZDw1c0Qan3Xn8tXZl%2FTDaO5T%2FgIhAOulMxSqwN2vNFLlgqPAnGJhsZPVFQbPp7ajDwSS6%2Bf5Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzIl8AC8b9J9%2FjbjhUq3AO5ycolNpZAJOqUnYgaBpxnfM%2BQwGpXkP91ZJLQNdVdc4NnFVTeSaRcL3dDaIU0IYUEu7ddpFFl%2FIp8qjcDbsvtvejiRcBoidrR89vqnaet8qwYYq1tBSOd6CKIchn7q32WBs1tSy3BB9g0sL%2B86%2Fb5yD36KHKuN6gaOBk7F2VhFvEpL81LalsMHQiFExCDRAkpDJkSBdReiePMwej2flfyGreuGxmnCOmQG7c09T9Va76BylV6oOXn3TydngV4OX8dTjTooBgAQoEx5yCpbq1ALCOU%2F%2BRSCRwn9GyiJ9AvucTFb4FHlLB%2BuTM7kvV7DbkjyhvywVjkkYKD4r8DWOeyPnuZg7B%2Fy6cTbwb7WLCRpH86uPOtiSiBVvKHOi13co%2FP%2BQvBgin72CP4sOglst3YUr4bD6GZ3QtzgldcuNcGr5oUT4D2f37eT6%2Bg5T8hSNvBlep4bRxAC%2Bgj0HKD91%2Bno4503FdLs6E1GYcH25CjbQzmZrdH9ra3QooAwp2eFfENwyDE%2Bv%2F01IpjNCrDjQ34I2HklD%2B8A7KoEWasQlNY949zlZNRnmo0k9Bo%2B3ENgUJm%2BHHdW6hJ%2FZ0fj6sqDd2rQmFaZeQNNt7ogBzd8KvvU1AZgySyj0bQeeD%2FjDDVjeXDBjqkAQ1RDwJhZ2cSCBU93mXDfm9k2YGMthZiIynLObGpXkTNww0nA8pkNE3HVu7OmzsrSdYVNX8vOFw%2FitoIy1q218cOlaDWvi9R1QjyE80YmmV6UxxN4NwNiop9BcA%2FGCLfgrVeuRtCVMA1Ee9KBs2asQGcmgfwANpiIlNjv%2B%2FJhyXLSLDjBoGArx1ytX04OadiLTqIAhSwhf7yYeIo4TUrnfncqm0i&X-Amz-Signature=46f7ad423cdd319d5bb59c46e874cae15617b029b23cf67becf0e946ad3c0cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
