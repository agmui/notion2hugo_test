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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5DWBRY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgltoQPCWRThHwSZ317NtwcMhL1dqLdr2CxUhKoXqvwIhAPDMIENku2fn2xiDL7uS1lnOeJ1PhXlBJASqeb0G%2FrwQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4f7BJqvpCpB1rF4q3AMWVRO%2B03PzIaTHQp6WPUNKz0dVSWpCWqEvWlZYfcfSZyQCKyR7nTYu9n7EEbgxx%2B%2FY3v%2FUxQlgdaQ4N0k7xwodICgw%2FfyOTpiTMKfBW%2FnAZTVtOqenyUcz%2BYB8gap7z6kU98wmszdUvTIUwRdYrDUBGcowSX8lq4%2FCkgR6KBPoPsyErs1TnsxMQcA6HETGPLmV2IKUVIzIf53mtTeSXNgbJJVCmibT7A7d5ymSSssG%2BXQdrZclFDC8r3C9LPJPKLmJ8lULaEXM%2FzLhxcB6MHw6X%2B1d867SfRbosCgWzlG%2BNLAedK%2FE5HNU1%2BcgSl5AyaoG1cgu2%2Fzc539mraUGJJAn4KyWGzv98iqdOLsLnhAvevBhOL6ridfxs7%2F0S3eXLaAKEM0MlclsFBvil11LORJYOE%2Fo5IRbZzy0mm1d94GZRClBJBP9jtxs11xJCWqnOQKBf8UP9jcOFReSfZDWvWcMwoJTC2suIn%2BxEXKn9qX%2FMYaGREeMjmfVOMx1gUe26vAnk3SN8NzT37vqA8l1T4EksIzBNnHXdTRGah%2B2XBlfSHA1%2FRcWlGhvCAKuJoEkn%2Fv5xrbKgW7ZHNDEfxOmkHlRxUEsg9%2BBHf3fspLOUHoROghBo1fZHuM5M4ppPjCmy6%2FBBjqkAYf2qjFUVyXveC3D8wuf%2Fa5Q5kQAAsWl5BTYuXOJyVDwW8fA%2FCwXQ%2BtFE2Dk0v0VbmWbWIy59ipaBfBPq1K30GgNeYdoVRLjH2tzYIMdZDRupg9pGzVP4TY7WMf9cxicBu0whcBU09kmiVn8mj3LSUi7jJv2qewc4Wk9bN7WDXHrulAuIAIrNFVMt6Fz147kcPEaLqppv9jOTbK4QTjnOP9YMFFT&X-Amz-Signature=0cfba1f5641b63408ae1c016f92a249a25a04d3319c57185a35527a7fffa824b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5DWBRY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgltoQPCWRThHwSZ317NtwcMhL1dqLdr2CxUhKoXqvwIhAPDMIENku2fn2xiDL7uS1lnOeJ1PhXlBJASqeb0G%2FrwQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4f7BJqvpCpB1rF4q3AMWVRO%2B03PzIaTHQp6WPUNKz0dVSWpCWqEvWlZYfcfSZyQCKyR7nTYu9n7EEbgxx%2B%2FY3v%2FUxQlgdaQ4N0k7xwodICgw%2FfyOTpiTMKfBW%2FnAZTVtOqenyUcz%2BYB8gap7z6kU98wmszdUvTIUwRdYrDUBGcowSX8lq4%2FCkgR6KBPoPsyErs1TnsxMQcA6HETGPLmV2IKUVIzIf53mtTeSXNgbJJVCmibT7A7d5ymSSssG%2BXQdrZclFDC8r3C9LPJPKLmJ8lULaEXM%2FzLhxcB6MHw6X%2B1d867SfRbosCgWzlG%2BNLAedK%2FE5HNU1%2BcgSl5AyaoG1cgu2%2Fzc539mraUGJJAn4KyWGzv98iqdOLsLnhAvevBhOL6ridfxs7%2F0S3eXLaAKEM0MlclsFBvil11LORJYOE%2Fo5IRbZzy0mm1d94GZRClBJBP9jtxs11xJCWqnOQKBf8UP9jcOFReSfZDWvWcMwoJTC2suIn%2BxEXKn9qX%2FMYaGREeMjmfVOMx1gUe26vAnk3SN8NzT37vqA8l1T4EksIzBNnHXdTRGah%2B2XBlfSHA1%2FRcWlGhvCAKuJoEkn%2Fv5xrbKgW7ZHNDEfxOmkHlRxUEsg9%2BBHf3fspLOUHoROghBo1fZHuM5M4ppPjCmy6%2FBBjqkAYf2qjFUVyXveC3D8wuf%2Fa5Q5kQAAsWl5BTYuXOJyVDwW8fA%2FCwXQ%2BtFE2Dk0v0VbmWbWIy59ipaBfBPq1K30GgNeYdoVRLjH2tzYIMdZDRupg9pGzVP4TY7WMf9cxicBu0whcBU09kmiVn8mj3LSUi7jJv2qewc4Wk9bN7WDXHrulAuIAIrNFVMt6Fz147kcPEaLqppv9jOTbK4QTjnOP9YMFFT&X-Amz-Signature=d7f1573fb7293894893dd0c2cea4f740e45585bab78bfdf4a8d715eb6489a312&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5DWBRY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgltoQPCWRThHwSZ317NtwcMhL1dqLdr2CxUhKoXqvwIhAPDMIENku2fn2xiDL7uS1lnOeJ1PhXlBJASqeb0G%2FrwQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4f7BJqvpCpB1rF4q3AMWVRO%2B03PzIaTHQp6WPUNKz0dVSWpCWqEvWlZYfcfSZyQCKyR7nTYu9n7EEbgxx%2B%2FY3v%2FUxQlgdaQ4N0k7xwodICgw%2FfyOTpiTMKfBW%2FnAZTVtOqenyUcz%2BYB8gap7z6kU98wmszdUvTIUwRdYrDUBGcowSX8lq4%2FCkgR6KBPoPsyErs1TnsxMQcA6HETGPLmV2IKUVIzIf53mtTeSXNgbJJVCmibT7A7d5ymSSssG%2BXQdrZclFDC8r3C9LPJPKLmJ8lULaEXM%2FzLhxcB6MHw6X%2B1d867SfRbosCgWzlG%2BNLAedK%2FE5HNU1%2BcgSl5AyaoG1cgu2%2Fzc539mraUGJJAn4KyWGzv98iqdOLsLnhAvevBhOL6ridfxs7%2F0S3eXLaAKEM0MlclsFBvil11LORJYOE%2Fo5IRbZzy0mm1d94GZRClBJBP9jtxs11xJCWqnOQKBf8UP9jcOFReSfZDWvWcMwoJTC2suIn%2BxEXKn9qX%2FMYaGREeMjmfVOMx1gUe26vAnk3SN8NzT37vqA8l1T4EksIzBNnHXdTRGah%2B2XBlfSHA1%2FRcWlGhvCAKuJoEkn%2Fv5xrbKgW7ZHNDEfxOmkHlRxUEsg9%2BBHf3fspLOUHoROghBo1fZHuM5M4ppPjCmy6%2FBBjqkAYf2qjFUVyXveC3D8wuf%2Fa5Q5kQAAsWl5BTYuXOJyVDwW8fA%2FCwXQ%2BtFE2Dk0v0VbmWbWIy59ipaBfBPq1K30GgNeYdoVRLjH2tzYIMdZDRupg9pGzVP4TY7WMf9cxicBu0whcBU09kmiVn8mj3LSUi7jJv2qewc4Wk9bN7WDXHrulAuIAIrNFVMt6Fz147kcPEaLqppv9jOTbK4QTjnOP9YMFFT&X-Amz-Signature=4dfd0d43ee63eaa7200795bdae0c4b3b9e8460b9de84659bf6499d5016a850f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5DWBRY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgltoQPCWRThHwSZ317NtwcMhL1dqLdr2CxUhKoXqvwIhAPDMIENku2fn2xiDL7uS1lnOeJ1PhXlBJASqeb0G%2FrwQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4f7BJqvpCpB1rF4q3AMWVRO%2B03PzIaTHQp6WPUNKz0dVSWpCWqEvWlZYfcfSZyQCKyR7nTYu9n7EEbgxx%2B%2FY3v%2FUxQlgdaQ4N0k7xwodICgw%2FfyOTpiTMKfBW%2FnAZTVtOqenyUcz%2BYB8gap7z6kU98wmszdUvTIUwRdYrDUBGcowSX8lq4%2FCkgR6KBPoPsyErs1TnsxMQcA6HETGPLmV2IKUVIzIf53mtTeSXNgbJJVCmibT7A7d5ymSSssG%2BXQdrZclFDC8r3C9LPJPKLmJ8lULaEXM%2FzLhxcB6MHw6X%2B1d867SfRbosCgWzlG%2BNLAedK%2FE5HNU1%2BcgSl5AyaoG1cgu2%2Fzc539mraUGJJAn4KyWGzv98iqdOLsLnhAvevBhOL6ridfxs7%2F0S3eXLaAKEM0MlclsFBvil11LORJYOE%2Fo5IRbZzy0mm1d94GZRClBJBP9jtxs11xJCWqnOQKBf8UP9jcOFReSfZDWvWcMwoJTC2suIn%2BxEXKn9qX%2FMYaGREeMjmfVOMx1gUe26vAnk3SN8NzT37vqA8l1T4EksIzBNnHXdTRGah%2B2XBlfSHA1%2FRcWlGhvCAKuJoEkn%2Fv5xrbKgW7ZHNDEfxOmkHlRxUEsg9%2BBHf3fspLOUHoROghBo1fZHuM5M4ppPjCmy6%2FBBjqkAYf2qjFUVyXveC3D8wuf%2Fa5Q5kQAAsWl5BTYuXOJyVDwW8fA%2FCwXQ%2BtFE2Dk0v0VbmWbWIy59ipaBfBPq1K30GgNeYdoVRLjH2tzYIMdZDRupg9pGzVP4TY7WMf9cxicBu0whcBU09kmiVn8mj3LSUi7jJv2qewc4Wk9bN7WDXHrulAuIAIrNFVMt6Fz147kcPEaLqppv9jOTbK4QTjnOP9YMFFT&X-Amz-Signature=c7bba80f22b194ab63af51d32beb90e785fa588fe8921db6b807e183848684c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5DWBRY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgltoQPCWRThHwSZ317NtwcMhL1dqLdr2CxUhKoXqvwIhAPDMIENku2fn2xiDL7uS1lnOeJ1PhXlBJASqeb0G%2FrwQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4f7BJqvpCpB1rF4q3AMWVRO%2B03PzIaTHQp6WPUNKz0dVSWpCWqEvWlZYfcfSZyQCKyR7nTYu9n7EEbgxx%2B%2FY3v%2FUxQlgdaQ4N0k7xwodICgw%2FfyOTpiTMKfBW%2FnAZTVtOqenyUcz%2BYB8gap7z6kU98wmszdUvTIUwRdYrDUBGcowSX8lq4%2FCkgR6KBPoPsyErs1TnsxMQcA6HETGPLmV2IKUVIzIf53mtTeSXNgbJJVCmibT7A7d5ymSSssG%2BXQdrZclFDC8r3C9LPJPKLmJ8lULaEXM%2FzLhxcB6MHw6X%2B1d867SfRbosCgWzlG%2BNLAedK%2FE5HNU1%2BcgSl5AyaoG1cgu2%2Fzc539mraUGJJAn4KyWGzv98iqdOLsLnhAvevBhOL6ridfxs7%2F0S3eXLaAKEM0MlclsFBvil11LORJYOE%2Fo5IRbZzy0mm1d94GZRClBJBP9jtxs11xJCWqnOQKBf8UP9jcOFReSfZDWvWcMwoJTC2suIn%2BxEXKn9qX%2FMYaGREeMjmfVOMx1gUe26vAnk3SN8NzT37vqA8l1T4EksIzBNnHXdTRGah%2B2XBlfSHA1%2FRcWlGhvCAKuJoEkn%2Fv5xrbKgW7ZHNDEfxOmkHlRxUEsg9%2BBHf3fspLOUHoROghBo1fZHuM5M4ppPjCmy6%2FBBjqkAYf2qjFUVyXveC3D8wuf%2Fa5Q5kQAAsWl5BTYuXOJyVDwW8fA%2FCwXQ%2BtFE2Dk0v0VbmWbWIy59ipaBfBPq1K30GgNeYdoVRLjH2tzYIMdZDRupg9pGzVP4TY7WMf9cxicBu0whcBU09kmiVn8mj3LSUi7jJv2qewc4Wk9bN7WDXHrulAuIAIrNFVMt6Fz147kcPEaLqppv9jOTbK4QTjnOP9YMFFT&X-Amz-Signature=5e917627ab3acb275cbedef1ca08294e4cd22df38ade57c7eb72988851bf4e93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5DWBRY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgltoQPCWRThHwSZ317NtwcMhL1dqLdr2CxUhKoXqvwIhAPDMIENku2fn2xiDL7uS1lnOeJ1PhXlBJASqeb0G%2FrwQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4f7BJqvpCpB1rF4q3AMWVRO%2B03PzIaTHQp6WPUNKz0dVSWpCWqEvWlZYfcfSZyQCKyR7nTYu9n7EEbgxx%2B%2FY3v%2FUxQlgdaQ4N0k7xwodICgw%2FfyOTpiTMKfBW%2FnAZTVtOqenyUcz%2BYB8gap7z6kU98wmszdUvTIUwRdYrDUBGcowSX8lq4%2FCkgR6KBPoPsyErs1TnsxMQcA6HETGPLmV2IKUVIzIf53mtTeSXNgbJJVCmibT7A7d5ymSSssG%2BXQdrZclFDC8r3C9LPJPKLmJ8lULaEXM%2FzLhxcB6MHw6X%2B1d867SfRbosCgWzlG%2BNLAedK%2FE5HNU1%2BcgSl5AyaoG1cgu2%2Fzc539mraUGJJAn4KyWGzv98iqdOLsLnhAvevBhOL6ridfxs7%2F0S3eXLaAKEM0MlclsFBvil11LORJYOE%2Fo5IRbZzy0mm1d94GZRClBJBP9jtxs11xJCWqnOQKBf8UP9jcOFReSfZDWvWcMwoJTC2suIn%2BxEXKn9qX%2FMYaGREeMjmfVOMx1gUe26vAnk3SN8NzT37vqA8l1T4EksIzBNnHXdTRGah%2B2XBlfSHA1%2FRcWlGhvCAKuJoEkn%2Fv5xrbKgW7ZHNDEfxOmkHlRxUEsg9%2BBHf3fspLOUHoROghBo1fZHuM5M4ppPjCmy6%2FBBjqkAYf2qjFUVyXveC3D8wuf%2Fa5Q5kQAAsWl5BTYuXOJyVDwW8fA%2FCwXQ%2BtFE2Dk0v0VbmWbWIy59ipaBfBPq1K30GgNeYdoVRLjH2tzYIMdZDRupg9pGzVP4TY7WMf9cxicBu0whcBU09kmiVn8mj3LSUi7jJv2qewc4Wk9bN7WDXHrulAuIAIrNFVMt6Fz147kcPEaLqppv9jOTbK4QTjnOP9YMFFT&X-Amz-Signature=06fadefa78fb860ad87ef42bd9a57cdefa5989db656f2365565f534224a20cee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5DWBRY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgltoQPCWRThHwSZ317NtwcMhL1dqLdr2CxUhKoXqvwIhAPDMIENku2fn2xiDL7uS1lnOeJ1PhXlBJASqeb0G%2FrwQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4f7BJqvpCpB1rF4q3AMWVRO%2B03PzIaTHQp6WPUNKz0dVSWpCWqEvWlZYfcfSZyQCKyR7nTYu9n7EEbgxx%2B%2FY3v%2FUxQlgdaQ4N0k7xwodICgw%2FfyOTpiTMKfBW%2FnAZTVtOqenyUcz%2BYB8gap7z6kU98wmszdUvTIUwRdYrDUBGcowSX8lq4%2FCkgR6KBPoPsyErs1TnsxMQcA6HETGPLmV2IKUVIzIf53mtTeSXNgbJJVCmibT7A7d5ymSSssG%2BXQdrZclFDC8r3C9LPJPKLmJ8lULaEXM%2FzLhxcB6MHw6X%2B1d867SfRbosCgWzlG%2BNLAedK%2FE5HNU1%2BcgSl5AyaoG1cgu2%2Fzc539mraUGJJAn4KyWGzv98iqdOLsLnhAvevBhOL6ridfxs7%2F0S3eXLaAKEM0MlclsFBvil11LORJYOE%2Fo5IRbZzy0mm1d94GZRClBJBP9jtxs11xJCWqnOQKBf8UP9jcOFReSfZDWvWcMwoJTC2suIn%2BxEXKn9qX%2FMYaGREeMjmfVOMx1gUe26vAnk3SN8NzT37vqA8l1T4EksIzBNnHXdTRGah%2B2XBlfSHA1%2FRcWlGhvCAKuJoEkn%2Fv5xrbKgW7ZHNDEfxOmkHlRxUEsg9%2BBHf3fspLOUHoROghBo1fZHuM5M4ppPjCmy6%2FBBjqkAYf2qjFUVyXveC3D8wuf%2Fa5Q5kQAAsWl5BTYuXOJyVDwW8fA%2FCwXQ%2BtFE2Dk0v0VbmWbWIy59ipaBfBPq1K30GgNeYdoVRLjH2tzYIMdZDRupg9pGzVP4TY7WMf9cxicBu0whcBU09kmiVn8mj3LSUi7jJv2qewc4Wk9bN7WDXHrulAuIAIrNFVMt6Fz147kcPEaLqppv9jOTbK4QTjnOP9YMFFT&X-Amz-Signature=570ae7eec7c426ce0effcfb793d599d8cb36493d53457b2723f5e46956010ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA5DWBRY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTgltoQPCWRThHwSZ317NtwcMhL1dqLdr2CxUhKoXqvwIhAPDMIENku2fn2xiDL7uS1lnOeJ1PhXlBJASqeb0G%2FrwQKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW4f7BJqvpCpB1rF4q3AMWVRO%2B03PzIaTHQp6WPUNKz0dVSWpCWqEvWlZYfcfSZyQCKyR7nTYu9n7EEbgxx%2B%2FY3v%2FUxQlgdaQ4N0k7xwodICgw%2FfyOTpiTMKfBW%2FnAZTVtOqenyUcz%2BYB8gap7z6kU98wmszdUvTIUwRdYrDUBGcowSX8lq4%2FCkgR6KBPoPsyErs1TnsxMQcA6HETGPLmV2IKUVIzIf53mtTeSXNgbJJVCmibT7A7d5ymSSssG%2BXQdrZclFDC8r3C9LPJPKLmJ8lULaEXM%2FzLhxcB6MHw6X%2B1d867SfRbosCgWzlG%2BNLAedK%2FE5HNU1%2BcgSl5AyaoG1cgu2%2Fzc539mraUGJJAn4KyWGzv98iqdOLsLnhAvevBhOL6ridfxs7%2F0S3eXLaAKEM0MlclsFBvil11LORJYOE%2Fo5IRbZzy0mm1d94GZRClBJBP9jtxs11xJCWqnOQKBf8UP9jcOFReSfZDWvWcMwoJTC2suIn%2BxEXKn9qX%2FMYaGREeMjmfVOMx1gUe26vAnk3SN8NzT37vqA8l1T4EksIzBNnHXdTRGah%2B2XBlfSHA1%2FRcWlGhvCAKuJoEkn%2Fv5xrbKgW7ZHNDEfxOmkHlRxUEsg9%2BBHf3fspLOUHoROghBo1fZHuM5M4ppPjCmy6%2FBBjqkAYf2qjFUVyXveC3D8wuf%2Fa5Q5kQAAsWl5BTYuXOJyVDwW8fA%2FCwXQ%2BtFE2Dk0v0VbmWbWIy59ipaBfBPq1K30GgNeYdoVRLjH2tzYIMdZDRupg9pGzVP4TY7WMf9cxicBu0whcBU09kmiVn8mj3LSUi7jJv2qewc4Wk9bN7WDXHrulAuIAIrNFVMt6Fz147kcPEaLqppv9jOTbK4QTjnOP9YMFFT&X-Amz-Signature=776a54e7861f694a335a0a8ac08fd30a07e1e34c0482cf09a261093edd1f99f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
