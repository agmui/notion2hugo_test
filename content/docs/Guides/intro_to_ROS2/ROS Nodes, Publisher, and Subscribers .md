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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z66CZXWJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC4Qx%2F%2FbF4DSOG5Urwv6Mj8R1JvnZE8SMjDr6yEEwpVnAIhANi1Yo4Fh3SWR%2B9yxV6JqJzb5%2BCkVXbV%2Br54x0RUiN2zKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY62srG%2FgZjqMok3sq3APHKKh88S%2BiLQSZdN84x5JXxSi2FrsTWgkku4xYQuQ2rtb%2BsO%2FysZhBa53%2BPSophPWTqX3pMEK%2FmMWL77u%2Bt2joVd5V6CYIear81IZzkmEXAX3e6vWtchDHM6eZdSqupD56W9duAn51H31AB%2BaWyXSpUahlZloAiD40gfuAnjARIIZcqe6jr%2FhffV3UCVUbCcRGeKQQcumhc3VauVPJ047ZoHIsvuK7ws5jd6HaDy3IVUvXEaKvMK3daEMBtmkouRDPiryv8xhCQBnlZBlSRqDzDik0bxtAk3zNWiRmKcKgnhnIaq3fixlzCKiQrUXh0%2BOdYGGemnjLVEZgRWg5Nw9nL813QYaCTFLMyrYVtZY5qukRC9l2Hh1MZKFSkLFq7bp69arXgSdFnqMSZn5MX1l6Cz31ASUTRqTSD%2FgYRHxxUIHZViiKfBtt7BvPjCHJrIDQ7fhTYnD3ZhHDeeBultSA3h%2FP3tBgk6dq96LMlDFBWOPuRgWtJjHiNhGfpRQPh%2FRb%2F%2BTbs86%2BQRcXxhvSwLefef%2FU6qweenrWo2b4Dkfc1EQ%2BcXoV%2BP%2BLX6koMtZdPm5gbWfMfhAOf4X7rWp3tOOZQaxlASyyIyXokj8nhv089OjvYMon5rjlyvZdGzCMpba%2FBjqkASfCCgiIJE1rcOYryLYsmdQMPaTpRQxuJdnPAVWwu6jcH2itw54brNj8%2F5ukampayxXCmaSuD3SGu1ygrSjTqxyYcGz%2FtedDtomWh2%2BTKylvewrJOndOg549gSx6LfAifY2ZeNaElNvvfp1MGkMyZUnwhrhDWEOM%2FzFrwQd%2BvbvRRVVIVcg2TggnO3sfTAWXP3QapympKkwMJgWwU7dtZHeFK6K6&X-Amz-Signature=d93eca0d49438345b1f3bf507b8757a786d9a3e6720e340c1aaae7d348ef93a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z66CZXWJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC4Qx%2F%2FbF4DSOG5Urwv6Mj8R1JvnZE8SMjDr6yEEwpVnAIhANi1Yo4Fh3SWR%2B9yxV6JqJzb5%2BCkVXbV%2Br54x0RUiN2zKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY62srG%2FgZjqMok3sq3APHKKh88S%2BiLQSZdN84x5JXxSi2FrsTWgkku4xYQuQ2rtb%2BsO%2FysZhBa53%2BPSophPWTqX3pMEK%2FmMWL77u%2Bt2joVd5V6CYIear81IZzkmEXAX3e6vWtchDHM6eZdSqupD56W9duAn51H31AB%2BaWyXSpUahlZloAiD40gfuAnjARIIZcqe6jr%2FhffV3UCVUbCcRGeKQQcumhc3VauVPJ047ZoHIsvuK7ws5jd6HaDy3IVUvXEaKvMK3daEMBtmkouRDPiryv8xhCQBnlZBlSRqDzDik0bxtAk3zNWiRmKcKgnhnIaq3fixlzCKiQrUXh0%2BOdYGGemnjLVEZgRWg5Nw9nL813QYaCTFLMyrYVtZY5qukRC9l2Hh1MZKFSkLFq7bp69arXgSdFnqMSZn5MX1l6Cz31ASUTRqTSD%2FgYRHxxUIHZViiKfBtt7BvPjCHJrIDQ7fhTYnD3ZhHDeeBultSA3h%2FP3tBgk6dq96LMlDFBWOPuRgWtJjHiNhGfpRQPh%2FRb%2F%2BTbs86%2BQRcXxhvSwLefef%2FU6qweenrWo2b4Dkfc1EQ%2BcXoV%2BP%2BLX6koMtZdPm5gbWfMfhAOf4X7rWp3tOOZQaxlASyyIyXokj8nhv089OjvYMon5rjlyvZdGzCMpba%2FBjqkASfCCgiIJE1rcOYryLYsmdQMPaTpRQxuJdnPAVWwu6jcH2itw54brNj8%2F5ukampayxXCmaSuD3SGu1ygrSjTqxyYcGz%2FtedDtomWh2%2BTKylvewrJOndOg549gSx6LfAifY2ZeNaElNvvfp1MGkMyZUnwhrhDWEOM%2FzFrwQd%2BvbvRRVVIVcg2TggnO3sfTAWXP3QapympKkwMJgWwU7dtZHeFK6K6&X-Amz-Signature=c8a63335fd3282b5662fd13b29a037788f18745c7cf8da7de38ae0232ad16b9a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z66CZXWJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC4Qx%2F%2FbF4DSOG5Urwv6Mj8R1JvnZE8SMjDr6yEEwpVnAIhANi1Yo4Fh3SWR%2B9yxV6JqJzb5%2BCkVXbV%2Br54x0RUiN2zKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY62srG%2FgZjqMok3sq3APHKKh88S%2BiLQSZdN84x5JXxSi2FrsTWgkku4xYQuQ2rtb%2BsO%2FysZhBa53%2BPSophPWTqX3pMEK%2FmMWL77u%2Bt2joVd5V6CYIear81IZzkmEXAX3e6vWtchDHM6eZdSqupD56W9duAn51H31AB%2BaWyXSpUahlZloAiD40gfuAnjARIIZcqe6jr%2FhffV3UCVUbCcRGeKQQcumhc3VauVPJ047ZoHIsvuK7ws5jd6HaDy3IVUvXEaKvMK3daEMBtmkouRDPiryv8xhCQBnlZBlSRqDzDik0bxtAk3zNWiRmKcKgnhnIaq3fixlzCKiQrUXh0%2BOdYGGemnjLVEZgRWg5Nw9nL813QYaCTFLMyrYVtZY5qukRC9l2Hh1MZKFSkLFq7bp69arXgSdFnqMSZn5MX1l6Cz31ASUTRqTSD%2FgYRHxxUIHZViiKfBtt7BvPjCHJrIDQ7fhTYnD3ZhHDeeBultSA3h%2FP3tBgk6dq96LMlDFBWOPuRgWtJjHiNhGfpRQPh%2FRb%2F%2BTbs86%2BQRcXxhvSwLefef%2FU6qweenrWo2b4Dkfc1EQ%2BcXoV%2BP%2BLX6koMtZdPm5gbWfMfhAOf4X7rWp3tOOZQaxlASyyIyXokj8nhv089OjvYMon5rjlyvZdGzCMpba%2FBjqkASfCCgiIJE1rcOYryLYsmdQMPaTpRQxuJdnPAVWwu6jcH2itw54brNj8%2F5ukampayxXCmaSuD3SGu1ygrSjTqxyYcGz%2FtedDtomWh2%2BTKylvewrJOndOg549gSx6LfAifY2ZeNaElNvvfp1MGkMyZUnwhrhDWEOM%2FzFrwQd%2BvbvRRVVIVcg2TggnO3sfTAWXP3QapympKkwMJgWwU7dtZHeFK6K6&X-Amz-Signature=28c5435a89a2e5e4ec6645be4f0438b6a4528644882e4fc45d55adb36355d638&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z66CZXWJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC4Qx%2F%2FbF4DSOG5Urwv6Mj8R1JvnZE8SMjDr6yEEwpVnAIhANi1Yo4Fh3SWR%2B9yxV6JqJzb5%2BCkVXbV%2Br54x0RUiN2zKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY62srG%2FgZjqMok3sq3APHKKh88S%2BiLQSZdN84x5JXxSi2FrsTWgkku4xYQuQ2rtb%2BsO%2FysZhBa53%2BPSophPWTqX3pMEK%2FmMWL77u%2Bt2joVd5V6CYIear81IZzkmEXAX3e6vWtchDHM6eZdSqupD56W9duAn51H31AB%2BaWyXSpUahlZloAiD40gfuAnjARIIZcqe6jr%2FhffV3UCVUbCcRGeKQQcumhc3VauVPJ047ZoHIsvuK7ws5jd6HaDy3IVUvXEaKvMK3daEMBtmkouRDPiryv8xhCQBnlZBlSRqDzDik0bxtAk3zNWiRmKcKgnhnIaq3fixlzCKiQrUXh0%2BOdYGGemnjLVEZgRWg5Nw9nL813QYaCTFLMyrYVtZY5qukRC9l2Hh1MZKFSkLFq7bp69arXgSdFnqMSZn5MX1l6Cz31ASUTRqTSD%2FgYRHxxUIHZViiKfBtt7BvPjCHJrIDQ7fhTYnD3ZhHDeeBultSA3h%2FP3tBgk6dq96LMlDFBWOPuRgWtJjHiNhGfpRQPh%2FRb%2F%2BTbs86%2BQRcXxhvSwLefef%2FU6qweenrWo2b4Dkfc1EQ%2BcXoV%2BP%2BLX6koMtZdPm5gbWfMfhAOf4X7rWp3tOOZQaxlASyyIyXokj8nhv089OjvYMon5rjlyvZdGzCMpba%2FBjqkASfCCgiIJE1rcOYryLYsmdQMPaTpRQxuJdnPAVWwu6jcH2itw54brNj8%2F5ukampayxXCmaSuD3SGu1ygrSjTqxyYcGz%2FtedDtomWh2%2BTKylvewrJOndOg549gSx6LfAifY2ZeNaElNvvfp1MGkMyZUnwhrhDWEOM%2FzFrwQd%2BvbvRRVVIVcg2TggnO3sfTAWXP3QapympKkwMJgWwU7dtZHeFK6K6&X-Amz-Signature=49837095d890e9421ca407f93367424605e4beb6f869ba7603ced14bca6a83cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z66CZXWJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC4Qx%2F%2FbF4DSOG5Urwv6Mj8R1JvnZE8SMjDr6yEEwpVnAIhANi1Yo4Fh3SWR%2B9yxV6JqJzb5%2BCkVXbV%2Br54x0RUiN2zKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY62srG%2FgZjqMok3sq3APHKKh88S%2BiLQSZdN84x5JXxSi2FrsTWgkku4xYQuQ2rtb%2BsO%2FysZhBa53%2BPSophPWTqX3pMEK%2FmMWL77u%2Bt2joVd5V6CYIear81IZzkmEXAX3e6vWtchDHM6eZdSqupD56W9duAn51H31AB%2BaWyXSpUahlZloAiD40gfuAnjARIIZcqe6jr%2FhffV3UCVUbCcRGeKQQcumhc3VauVPJ047ZoHIsvuK7ws5jd6HaDy3IVUvXEaKvMK3daEMBtmkouRDPiryv8xhCQBnlZBlSRqDzDik0bxtAk3zNWiRmKcKgnhnIaq3fixlzCKiQrUXh0%2BOdYGGemnjLVEZgRWg5Nw9nL813QYaCTFLMyrYVtZY5qukRC9l2Hh1MZKFSkLFq7bp69arXgSdFnqMSZn5MX1l6Cz31ASUTRqTSD%2FgYRHxxUIHZViiKfBtt7BvPjCHJrIDQ7fhTYnD3ZhHDeeBultSA3h%2FP3tBgk6dq96LMlDFBWOPuRgWtJjHiNhGfpRQPh%2FRb%2F%2BTbs86%2BQRcXxhvSwLefef%2FU6qweenrWo2b4Dkfc1EQ%2BcXoV%2BP%2BLX6koMtZdPm5gbWfMfhAOf4X7rWp3tOOZQaxlASyyIyXokj8nhv089OjvYMon5rjlyvZdGzCMpba%2FBjqkASfCCgiIJE1rcOYryLYsmdQMPaTpRQxuJdnPAVWwu6jcH2itw54brNj8%2F5ukampayxXCmaSuD3SGu1ygrSjTqxyYcGz%2FtedDtomWh2%2BTKylvewrJOndOg549gSx6LfAifY2ZeNaElNvvfp1MGkMyZUnwhrhDWEOM%2FzFrwQd%2BvbvRRVVIVcg2TggnO3sfTAWXP3QapympKkwMJgWwU7dtZHeFK6K6&X-Amz-Signature=4cb3a2000f31edb8ccc37a6c96e3b80f2d71833f928839c51163632c3caed850&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z66CZXWJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC4Qx%2F%2FbF4DSOG5Urwv6Mj8R1JvnZE8SMjDr6yEEwpVnAIhANi1Yo4Fh3SWR%2B9yxV6JqJzb5%2BCkVXbV%2Br54x0RUiN2zKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY62srG%2FgZjqMok3sq3APHKKh88S%2BiLQSZdN84x5JXxSi2FrsTWgkku4xYQuQ2rtb%2BsO%2FysZhBa53%2BPSophPWTqX3pMEK%2FmMWL77u%2Bt2joVd5V6CYIear81IZzkmEXAX3e6vWtchDHM6eZdSqupD56W9duAn51H31AB%2BaWyXSpUahlZloAiD40gfuAnjARIIZcqe6jr%2FhffV3UCVUbCcRGeKQQcumhc3VauVPJ047ZoHIsvuK7ws5jd6HaDy3IVUvXEaKvMK3daEMBtmkouRDPiryv8xhCQBnlZBlSRqDzDik0bxtAk3zNWiRmKcKgnhnIaq3fixlzCKiQrUXh0%2BOdYGGemnjLVEZgRWg5Nw9nL813QYaCTFLMyrYVtZY5qukRC9l2Hh1MZKFSkLFq7bp69arXgSdFnqMSZn5MX1l6Cz31ASUTRqTSD%2FgYRHxxUIHZViiKfBtt7BvPjCHJrIDQ7fhTYnD3ZhHDeeBultSA3h%2FP3tBgk6dq96LMlDFBWOPuRgWtJjHiNhGfpRQPh%2FRb%2F%2BTbs86%2BQRcXxhvSwLefef%2FU6qweenrWo2b4Dkfc1EQ%2BcXoV%2BP%2BLX6koMtZdPm5gbWfMfhAOf4X7rWp3tOOZQaxlASyyIyXokj8nhv089OjvYMon5rjlyvZdGzCMpba%2FBjqkASfCCgiIJE1rcOYryLYsmdQMPaTpRQxuJdnPAVWwu6jcH2itw54brNj8%2F5ukampayxXCmaSuD3SGu1ygrSjTqxyYcGz%2FtedDtomWh2%2BTKylvewrJOndOg549gSx6LfAifY2ZeNaElNvvfp1MGkMyZUnwhrhDWEOM%2FzFrwQd%2BvbvRRVVIVcg2TggnO3sfTAWXP3QapympKkwMJgWwU7dtZHeFK6K6&X-Amz-Signature=8cf9d59b50ea1df3471c0801554084b6688c443580b40fc4b0b1705007740cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z66CZXWJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC4Qx%2F%2FbF4DSOG5Urwv6Mj8R1JvnZE8SMjDr6yEEwpVnAIhANi1Yo4Fh3SWR%2B9yxV6JqJzb5%2BCkVXbV%2Br54x0RUiN2zKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY62srG%2FgZjqMok3sq3APHKKh88S%2BiLQSZdN84x5JXxSi2FrsTWgkku4xYQuQ2rtb%2BsO%2FysZhBa53%2BPSophPWTqX3pMEK%2FmMWL77u%2Bt2joVd5V6CYIear81IZzkmEXAX3e6vWtchDHM6eZdSqupD56W9duAn51H31AB%2BaWyXSpUahlZloAiD40gfuAnjARIIZcqe6jr%2FhffV3UCVUbCcRGeKQQcumhc3VauVPJ047ZoHIsvuK7ws5jd6HaDy3IVUvXEaKvMK3daEMBtmkouRDPiryv8xhCQBnlZBlSRqDzDik0bxtAk3zNWiRmKcKgnhnIaq3fixlzCKiQrUXh0%2BOdYGGemnjLVEZgRWg5Nw9nL813QYaCTFLMyrYVtZY5qukRC9l2Hh1MZKFSkLFq7bp69arXgSdFnqMSZn5MX1l6Cz31ASUTRqTSD%2FgYRHxxUIHZViiKfBtt7BvPjCHJrIDQ7fhTYnD3ZhHDeeBultSA3h%2FP3tBgk6dq96LMlDFBWOPuRgWtJjHiNhGfpRQPh%2FRb%2F%2BTbs86%2BQRcXxhvSwLefef%2FU6qweenrWo2b4Dkfc1EQ%2BcXoV%2BP%2BLX6koMtZdPm5gbWfMfhAOf4X7rWp3tOOZQaxlASyyIyXokj8nhv089OjvYMon5rjlyvZdGzCMpba%2FBjqkASfCCgiIJE1rcOYryLYsmdQMPaTpRQxuJdnPAVWwu6jcH2itw54brNj8%2F5ukampayxXCmaSuD3SGu1ygrSjTqxyYcGz%2FtedDtomWh2%2BTKylvewrJOndOg549gSx6LfAifY2ZeNaElNvvfp1MGkMyZUnwhrhDWEOM%2FzFrwQd%2BvbvRRVVIVcg2TggnO3sfTAWXP3QapympKkwMJgWwU7dtZHeFK6K6&X-Amz-Signature=feec1b4e83f820ee4c5948ccb90c753225f94b23a49ad880e5a4db11d8520596&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z66CZXWJ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC4Qx%2F%2FbF4DSOG5Urwv6Mj8R1JvnZE8SMjDr6yEEwpVnAIhANi1Yo4Fh3SWR%2B9yxV6JqJzb5%2BCkVXbV%2Br54x0RUiN2zKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY62srG%2FgZjqMok3sq3APHKKh88S%2BiLQSZdN84x5JXxSi2FrsTWgkku4xYQuQ2rtb%2BsO%2FysZhBa53%2BPSophPWTqX3pMEK%2FmMWL77u%2Bt2joVd5V6CYIear81IZzkmEXAX3e6vWtchDHM6eZdSqupD56W9duAn51H31AB%2BaWyXSpUahlZloAiD40gfuAnjARIIZcqe6jr%2FhffV3UCVUbCcRGeKQQcumhc3VauVPJ047ZoHIsvuK7ws5jd6HaDy3IVUvXEaKvMK3daEMBtmkouRDPiryv8xhCQBnlZBlSRqDzDik0bxtAk3zNWiRmKcKgnhnIaq3fixlzCKiQrUXh0%2BOdYGGemnjLVEZgRWg5Nw9nL813QYaCTFLMyrYVtZY5qukRC9l2Hh1MZKFSkLFq7bp69arXgSdFnqMSZn5MX1l6Cz31ASUTRqTSD%2FgYRHxxUIHZViiKfBtt7BvPjCHJrIDQ7fhTYnD3ZhHDeeBultSA3h%2FP3tBgk6dq96LMlDFBWOPuRgWtJjHiNhGfpRQPh%2FRb%2F%2BTbs86%2BQRcXxhvSwLefef%2FU6qweenrWo2b4Dkfc1EQ%2BcXoV%2BP%2BLX6koMtZdPm5gbWfMfhAOf4X7rWp3tOOZQaxlASyyIyXokj8nhv089OjvYMon5rjlyvZdGzCMpba%2FBjqkASfCCgiIJE1rcOYryLYsmdQMPaTpRQxuJdnPAVWwu6jcH2itw54brNj8%2F5ukampayxXCmaSuD3SGu1ygrSjTqxyYcGz%2FtedDtomWh2%2BTKylvewrJOndOg549gSx6LfAifY2ZeNaElNvvfp1MGkMyZUnwhrhDWEOM%2FzFrwQd%2BvbvRRVVIVcg2TggnO3sfTAWXP3QapympKkwMJgWwU7dtZHeFK6K6&X-Amz-Signature=d4de566797d355283e0c78d42b09e229df388b60e3f3f1ea284fb0653670eac7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
