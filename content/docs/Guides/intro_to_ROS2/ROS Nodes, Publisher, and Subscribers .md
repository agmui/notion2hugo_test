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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIZXJU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC0vurwOG5rrjgEvtcRKGW9WKwEiAtdc28dcBCAJZbSAgIhAM9WwiSTWV5umIYUNKuj67imtO57A4ZRQObHxF48BStdKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0wDd%2FLqh9R9Trokcq3AMyBTT8w3imjmX19Cuio9Mb54Qidn05nctC2YdtMafNW4i9h%2FrFo7jW7Ak6WjALv53u9zsncmiU2%2F%2FjST2zF9gZf%2BOuV%2BSWHwdoiboO5Ai0frZpUB8ElHuAhDryLrHtlISc5xhtk1WSUhbDjhCnfVizpWRW7CmllVQfkChObiXK%2FxCTpFUYN8bmHwCvgXnKp1TfzajacZd6bKsqM3PzeMxQ%2Fp%2BHjXTPEPP1Ow%2FEe2JWPOGD2JJHn6Zj7P3PdDSy%2FkcAh%2Bu1zHssLrhd5f5RKHKbt23Iqkd4Ml%2B4%2Bz6eKH12lC5a9QZQwlpf7IGlk7ynBLFbaj5MitRiQDNAbRTqrJeNU%2FZg%2F4aLoaK6fpCnqN355AzKQoY2JyKeB6HXaspxah6f%2B8Z1SmY70hCgNJ9EcqPHQzki5AHWbtduNos3dD6kHyBKNE7aQ5IJFXZSHubCodMrUt%2BQYlQPfbfRnFlvEhTL7On%2BYyi2bLtiCbtOgIAnJMmL5sU%2Fdbcttfgdly220DcwNN8VjQgY81VnLEtEUbRCsmbZi3azOibH9fmr1qFd%2FtZPiAAnURIVnD4nKKlvDVDtFj4r0imfJCpHp9nhcsvBB%2FPuT%2BAR9vlsIlOoA6uLOIRSGeEj3GBhhbJoWTCUlYy%2BBjqkAT2cCBXJnF49OJ6CBl%2FL%2B587UpBUnMTk98I3VKKTonorIxu5HiBy2T2eUVMQrbYm8%2BCmFcmmV4D7W42Q8eH2p5rT8nCEaSJKAcfCRtWoik5IDz72X7nGjUaV1LfSJ3%2B31n8O5%2BSfZvuhMDgDCQN7MaGhAXxVaWd7%2BRkVJ3gdjl966GUj1JfsFMV5oQzHcWriphl%2BSiljW3RAtJAYYfIZfDRuU3d3&X-Amz-Signature=92ed840fbe121094cb6b16a55792764694147df23baae624a6c3b10781b9d3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIZXJU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC0vurwOG5rrjgEvtcRKGW9WKwEiAtdc28dcBCAJZbSAgIhAM9WwiSTWV5umIYUNKuj67imtO57A4ZRQObHxF48BStdKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0wDd%2FLqh9R9Trokcq3AMyBTT8w3imjmX19Cuio9Mb54Qidn05nctC2YdtMafNW4i9h%2FrFo7jW7Ak6WjALv53u9zsncmiU2%2F%2FjST2zF9gZf%2BOuV%2BSWHwdoiboO5Ai0frZpUB8ElHuAhDryLrHtlISc5xhtk1WSUhbDjhCnfVizpWRW7CmllVQfkChObiXK%2FxCTpFUYN8bmHwCvgXnKp1TfzajacZd6bKsqM3PzeMxQ%2Fp%2BHjXTPEPP1Ow%2FEe2JWPOGD2JJHn6Zj7P3PdDSy%2FkcAh%2Bu1zHssLrhd5f5RKHKbt23Iqkd4Ml%2B4%2Bz6eKH12lC5a9QZQwlpf7IGlk7ynBLFbaj5MitRiQDNAbRTqrJeNU%2FZg%2F4aLoaK6fpCnqN355AzKQoY2JyKeB6HXaspxah6f%2B8Z1SmY70hCgNJ9EcqPHQzki5AHWbtduNos3dD6kHyBKNE7aQ5IJFXZSHubCodMrUt%2BQYlQPfbfRnFlvEhTL7On%2BYyi2bLtiCbtOgIAnJMmL5sU%2Fdbcttfgdly220DcwNN8VjQgY81VnLEtEUbRCsmbZi3azOibH9fmr1qFd%2FtZPiAAnURIVnD4nKKlvDVDtFj4r0imfJCpHp9nhcsvBB%2FPuT%2BAR9vlsIlOoA6uLOIRSGeEj3GBhhbJoWTCUlYy%2BBjqkAT2cCBXJnF49OJ6CBl%2FL%2B587UpBUnMTk98I3VKKTonorIxu5HiBy2T2eUVMQrbYm8%2BCmFcmmV4D7W42Q8eH2p5rT8nCEaSJKAcfCRtWoik5IDz72X7nGjUaV1LfSJ3%2B31n8O5%2BSfZvuhMDgDCQN7MaGhAXxVaWd7%2BRkVJ3gdjl966GUj1JfsFMV5oQzHcWriphl%2BSiljW3RAtJAYYfIZfDRuU3d3&X-Amz-Signature=c3e01bbc7434346bae05c2dd3d9721c83e8c904bedbeccda0ace0ba42efd6838&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIZXJU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC0vurwOG5rrjgEvtcRKGW9WKwEiAtdc28dcBCAJZbSAgIhAM9WwiSTWV5umIYUNKuj67imtO57A4ZRQObHxF48BStdKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0wDd%2FLqh9R9Trokcq3AMyBTT8w3imjmX19Cuio9Mb54Qidn05nctC2YdtMafNW4i9h%2FrFo7jW7Ak6WjALv53u9zsncmiU2%2F%2FjST2zF9gZf%2BOuV%2BSWHwdoiboO5Ai0frZpUB8ElHuAhDryLrHtlISc5xhtk1WSUhbDjhCnfVizpWRW7CmllVQfkChObiXK%2FxCTpFUYN8bmHwCvgXnKp1TfzajacZd6bKsqM3PzeMxQ%2Fp%2BHjXTPEPP1Ow%2FEe2JWPOGD2JJHn6Zj7P3PdDSy%2FkcAh%2Bu1zHssLrhd5f5RKHKbt23Iqkd4Ml%2B4%2Bz6eKH12lC5a9QZQwlpf7IGlk7ynBLFbaj5MitRiQDNAbRTqrJeNU%2FZg%2F4aLoaK6fpCnqN355AzKQoY2JyKeB6HXaspxah6f%2B8Z1SmY70hCgNJ9EcqPHQzki5AHWbtduNos3dD6kHyBKNE7aQ5IJFXZSHubCodMrUt%2BQYlQPfbfRnFlvEhTL7On%2BYyi2bLtiCbtOgIAnJMmL5sU%2Fdbcttfgdly220DcwNN8VjQgY81VnLEtEUbRCsmbZi3azOibH9fmr1qFd%2FtZPiAAnURIVnD4nKKlvDVDtFj4r0imfJCpHp9nhcsvBB%2FPuT%2BAR9vlsIlOoA6uLOIRSGeEj3GBhhbJoWTCUlYy%2BBjqkAT2cCBXJnF49OJ6CBl%2FL%2B587UpBUnMTk98I3VKKTonorIxu5HiBy2T2eUVMQrbYm8%2BCmFcmmV4D7W42Q8eH2p5rT8nCEaSJKAcfCRtWoik5IDz72X7nGjUaV1LfSJ3%2B31n8O5%2BSfZvuhMDgDCQN7MaGhAXxVaWd7%2BRkVJ3gdjl966GUj1JfsFMV5oQzHcWriphl%2BSiljW3RAtJAYYfIZfDRuU3d3&X-Amz-Signature=b078930b8adbd054bd873523d9ca3da70f0f8829c05716200f50aa1a5432d3a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIZXJU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC0vurwOG5rrjgEvtcRKGW9WKwEiAtdc28dcBCAJZbSAgIhAM9WwiSTWV5umIYUNKuj67imtO57A4ZRQObHxF48BStdKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0wDd%2FLqh9R9Trokcq3AMyBTT8w3imjmX19Cuio9Mb54Qidn05nctC2YdtMafNW4i9h%2FrFo7jW7Ak6WjALv53u9zsncmiU2%2F%2FjST2zF9gZf%2BOuV%2BSWHwdoiboO5Ai0frZpUB8ElHuAhDryLrHtlISc5xhtk1WSUhbDjhCnfVizpWRW7CmllVQfkChObiXK%2FxCTpFUYN8bmHwCvgXnKp1TfzajacZd6bKsqM3PzeMxQ%2Fp%2BHjXTPEPP1Ow%2FEe2JWPOGD2JJHn6Zj7P3PdDSy%2FkcAh%2Bu1zHssLrhd5f5RKHKbt23Iqkd4Ml%2B4%2Bz6eKH12lC5a9QZQwlpf7IGlk7ynBLFbaj5MitRiQDNAbRTqrJeNU%2FZg%2F4aLoaK6fpCnqN355AzKQoY2JyKeB6HXaspxah6f%2B8Z1SmY70hCgNJ9EcqPHQzki5AHWbtduNos3dD6kHyBKNE7aQ5IJFXZSHubCodMrUt%2BQYlQPfbfRnFlvEhTL7On%2BYyi2bLtiCbtOgIAnJMmL5sU%2Fdbcttfgdly220DcwNN8VjQgY81VnLEtEUbRCsmbZi3azOibH9fmr1qFd%2FtZPiAAnURIVnD4nKKlvDVDtFj4r0imfJCpHp9nhcsvBB%2FPuT%2BAR9vlsIlOoA6uLOIRSGeEj3GBhhbJoWTCUlYy%2BBjqkAT2cCBXJnF49OJ6CBl%2FL%2B587UpBUnMTk98I3VKKTonorIxu5HiBy2T2eUVMQrbYm8%2BCmFcmmV4D7W42Q8eH2p5rT8nCEaSJKAcfCRtWoik5IDz72X7nGjUaV1LfSJ3%2B31n8O5%2BSfZvuhMDgDCQN7MaGhAXxVaWd7%2BRkVJ3gdjl966GUj1JfsFMV5oQzHcWriphl%2BSiljW3RAtJAYYfIZfDRuU3d3&X-Amz-Signature=e9e021fbd2e5e637f989434655a93eb5a698b8f628c2a33c0b97a21dba918e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIZXJU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC0vurwOG5rrjgEvtcRKGW9WKwEiAtdc28dcBCAJZbSAgIhAM9WwiSTWV5umIYUNKuj67imtO57A4ZRQObHxF48BStdKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0wDd%2FLqh9R9Trokcq3AMyBTT8w3imjmX19Cuio9Mb54Qidn05nctC2YdtMafNW4i9h%2FrFo7jW7Ak6WjALv53u9zsncmiU2%2F%2FjST2zF9gZf%2BOuV%2BSWHwdoiboO5Ai0frZpUB8ElHuAhDryLrHtlISc5xhtk1WSUhbDjhCnfVizpWRW7CmllVQfkChObiXK%2FxCTpFUYN8bmHwCvgXnKp1TfzajacZd6bKsqM3PzeMxQ%2Fp%2BHjXTPEPP1Ow%2FEe2JWPOGD2JJHn6Zj7P3PdDSy%2FkcAh%2Bu1zHssLrhd5f5RKHKbt23Iqkd4Ml%2B4%2Bz6eKH12lC5a9QZQwlpf7IGlk7ynBLFbaj5MitRiQDNAbRTqrJeNU%2FZg%2F4aLoaK6fpCnqN355AzKQoY2JyKeB6HXaspxah6f%2B8Z1SmY70hCgNJ9EcqPHQzki5AHWbtduNos3dD6kHyBKNE7aQ5IJFXZSHubCodMrUt%2BQYlQPfbfRnFlvEhTL7On%2BYyi2bLtiCbtOgIAnJMmL5sU%2Fdbcttfgdly220DcwNN8VjQgY81VnLEtEUbRCsmbZi3azOibH9fmr1qFd%2FtZPiAAnURIVnD4nKKlvDVDtFj4r0imfJCpHp9nhcsvBB%2FPuT%2BAR9vlsIlOoA6uLOIRSGeEj3GBhhbJoWTCUlYy%2BBjqkAT2cCBXJnF49OJ6CBl%2FL%2B587UpBUnMTk98I3VKKTonorIxu5HiBy2T2eUVMQrbYm8%2BCmFcmmV4D7W42Q8eH2p5rT8nCEaSJKAcfCRtWoik5IDz72X7nGjUaV1LfSJ3%2B31n8O5%2BSfZvuhMDgDCQN7MaGhAXxVaWd7%2BRkVJ3gdjl966GUj1JfsFMV5oQzHcWriphl%2BSiljW3RAtJAYYfIZfDRuU3d3&X-Amz-Signature=278857f595b2535eb2df63ecf8527cf6fa808fc6d10f78a62ab227adc9cab3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIZXJU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC0vurwOG5rrjgEvtcRKGW9WKwEiAtdc28dcBCAJZbSAgIhAM9WwiSTWV5umIYUNKuj67imtO57A4ZRQObHxF48BStdKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0wDd%2FLqh9R9Trokcq3AMyBTT8w3imjmX19Cuio9Mb54Qidn05nctC2YdtMafNW4i9h%2FrFo7jW7Ak6WjALv53u9zsncmiU2%2F%2FjST2zF9gZf%2BOuV%2BSWHwdoiboO5Ai0frZpUB8ElHuAhDryLrHtlISc5xhtk1WSUhbDjhCnfVizpWRW7CmllVQfkChObiXK%2FxCTpFUYN8bmHwCvgXnKp1TfzajacZd6bKsqM3PzeMxQ%2Fp%2BHjXTPEPP1Ow%2FEe2JWPOGD2JJHn6Zj7P3PdDSy%2FkcAh%2Bu1zHssLrhd5f5RKHKbt23Iqkd4Ml%2B4%2Bz6eKH12lC5a9QZQwlpf7IGlk7ynBLFbaj5MitRiQDNAbRTqrJeNU%2FZg%2F4aLoaK6fpCnqN355AzKQoY2JyKeB6HXaspxah6f%2B8Z1SmY70hCgNJ9EcqPHQzki5AHWbtduNos3dD6kHyBKNE7aQ5IJFXZSHubCodMrUt%2BQYlQPfbfRnFlvEhTL7On%2BYyi2bLtiCbtOgIAnJMmL5sU%2Fdbcttfgdly220DcwNN8VjQgY81VnLEtEUbRCsmbZi3azOibH9fmr1qFd%2FtZPiAAnURIVnD4nKKlvDVDtFj4r0imfJCpHp9nhcsvBB%2FPuT%2BAR9vlsIlOoA6uLOIRSGeEj3GBhhbJoWTCUlYy%2BBjqkAT2cCBXJnF49OJ6CBl%2FL%2B587UpBUnMTk98I3VKKTonorIxu5HiBy2T2eUVMQrbYm8%2BCmFcmmV4D7W42Q8eH2p5rT8nCEaSJKAcfCRtWoik5IDz72X7nGjUaV1LfSJ3%2B31n8O5%2BSfZvuhMDgDCQN7MaGhAXxVaWd7%2BRkVJ3gdjl966GUj1JfsFMV5oQzHcWriphl%2BSiljW3RAtJAYYfIZfDRuU3d3&X-Amz-Signature=6d89f8487ac08b5b76653314b2356adbc50de2d6bd27d48d2234be08a02842b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIZXJU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC0vurwOG5rrjgEvtcRKGW9WKwEiAtdc28dcBCAJZbSAgIhAM9WwiSTWV5umIYUNKuj67imtO57A4ZRQObHxF48BStdKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0wDd%2FLqh9R9Trokcq3AMyBTT8w3imjmX19Cuio9Mb54Qidn05nctC2YdtMafNW4i9h%2FrFo7jW7Ak6WjALv53u9zsncmiU2%2F%2FjST2zF9gZf%2BOuV%2BSWHwdoiboO5Ai0frZpUB8ElHuAhDryLrHtlISc5xhtk1WSUhbDjhCnfVizpWRW7CmllVQfkChObiXK%2FxCTpFUYN8bmHwCvgXnKp1TfzajacZd6bKsqM3PzeMxQ%2Fp%2BHjXTPEPP1Ow%2FEe2JWPOGD2JJHn6Zj7P3PdDSy%2FkcAh%2Bu1zHssLrhd5f5RKHKbt23Iqkd4Ml%2B4%2Bz6eKH12lC5a9QZQwlpf7IGlk7ynBLFbaj5MitRiQDNAbRTqrJeNU%2FZg%2F4aLoaK6fpCnqN355AzKQoY2JyKeB6HXaspxah6f%2B8Z1SmY70hCgNJ9EcqPHQzki5AHWbtduNos3dD6kHyBKNE7aQ5IJFXZSHubCodMrUt%2BQYlQPfbfRnFlvEhTL7On%2BYyi2bLtiCbtOgIAnJMmL5sU%2Fdbcttfgdly220DcwNN8VjQgY81VnLEtEUbRCsmbZi3azOibH9fmr1qFd%2FtZPiAAnURIVnD4nKKlvDVDtFj4r0imfJCpHp9nhcsvBB%2FPuT%2BAR9vlsIlOoA6uLOIRSGeEj3GBhhbJoWTCUlYy%2BBjqkAT2cCBXJnF49OJ6CBl%2FL%2B587UpBUnMTk98I3VKKTonorIxu5HiBy2T2eUVMQrbYm8%2BCmFcmmV4D7W42Q8eH2p5rT8nCEaSJKAcfCRtWoik5IDz72X7nGjUaV1LfSJ3%2B31n8O5%2BSfZvuhMDgDCQN7MaGhAXxVaWd7%2BRkVJ3gdjl966GUj1JfsFMV5oQzHcWriphl%2BSiljW3RAtJAYYfIZfDRuU3d3&X-Amz-Signature=a36f3539ac609bf5ea39aac8c8bc5cad7dda3d3992cb417836575f86a2ad8573&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IFIZXJU%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T180917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQC0vurwOG5rrjgEvtcRKGW9WKwEiAtdc28dcBCAJZbSAgIhAM9WwiSTWV5umIYUNKuj67imtO57A4ZRQObHxF48BStdKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0wDd%2FLqh9R9Trokcq3AMyBTT8w3imjmX19Cuio9Mb54Qidn05nctC2YdtMafNW4i9h%2FrFo7jW7Ak6WjALv53u9zsncmiU2%2F%2FjST2zF9gZf%2BOuV%2BSWHwdoiboO5Ai0frZpUB8ElHuAhDryLrHtlISc5xhtk1WSUhbDjhCnfVizpWRW7CmllVQfkChObiXK%2FxCTpFUYN8bmHwCvgXnKp1TfzajacZd6bKsqM3PzeMxQ%2Fp%2BHjXTPEPP1Ow%2FEe2JWPOGD2JJHn6Zj7P3PdDSy%2FkcAh%2Bu1zHssLrhd5f5RKHKbt23Iqkd4Ml%2B4%2Bz6eKH12lC5a9QZQwlpf7IGlk7ynBLFbaj5MitRiQDNAbRTqrJeNU%2FZg%2F4aLoaK6fpCnqN355AzKQoY2JyKeB6HXaspxah6f%2B8Z1SmY70hCgNJ9EcqPHQzki5AHWbtduNos3dD6kHyBKNE7aQ5IJFXZSHubCodMrUt%2BQYlQPfbfRnFlvEhTL7On%2BYyi2bLtiCbtOgIAnJMmL5sU%2Fdbcttfgdly220DcwNN8VjQgY81VnLEtEUbRCsmbZi3azOibH9fmr1qFd%2FtZPiAAnURIVnD4nKKlvDVDtFj4r0imfJCpHp9nhcsvBB%2FPuT%2BAR9vlsIlOoA6uLOIRSGeEj3GBhhbJoWTCUlYy%2BBjqkAT2cCBXJnF49OJ6CBl%2FL%2B587UpBUnMTk98I3VKKTonorIxu5HiBy2T2eUVMQrbYm8%2BCmFcmmV4D7W42Q8eH2p5rT8nCEaSJKAcfCRtWoik5IDz72X7nGjUaV1LfSJ3%2B31n8O5%2BSfZvuhMDgDCQN7MaGhAXxVaWd7%2BRkVJ3gdjl966GUj1JfsFMV5oQzHcWriphl%2BSiljW3RAtJAYYfIZfDRuU3d3&X-Amz-Signature=4b05e76fed809d63cb73248ace5e8173403fb1c9ca58d61096d26ef57abd6c18&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
