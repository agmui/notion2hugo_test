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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42TE6GK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgjnzqbbWPkvf3W90Jdk4mFj8I6I9lZP%2FKunXDrn6nwIhALPn9fgbfGuvjLUzrAq3e1kg8u9pY%2BFI3BmgFK%2Fwdy2nKv8DCCAQABoMNjM3NDIzMTgzODA1IgznDvmLMrWMDKnxqwEq3AMyrCagjwgcU0eN2zYCof0o5Aty1xQ3wlypvqxNbsV%2FkpegrhsS2DkOqRnJY3Q9mkKygX0dBcjpT0pObSeWtkyomTAK262%2Fz60i69EBUSOpqp3nlu%2FuzJ17NrkYNCmTPEoOOlINdinuJEDyv0Mmb1zt6ts7HDrjvd%2BABi98y34mX0ZHlSP100w3dDtArS4oCeDm1EhTnHFCoeMaVuH73jKtVR9T%2FSkK9dxjrBjPZLrENLrOGmPRjJ8POmM4J7bZzR7PgxB34GcBa9gPdk9P%2FZUzkHlcrLRtTYz5bu98AcwQHrV%2FGYGH6yEpLxcfnOC0j1NmGwf4dzvB05%2F8vozuXVMJxNtgIoU8YgcP52RMB48Nts7zPNSZAdnimbKy8ycEOgMhuj5pdm4mVtMO5Tc0J%2BZ9KWbMiRA7y%2BoJo%2BhKKxKQ%2Bu9MYYuiIlt%2F9nLi%2BQzL%2BeLRVk4JIxOIhVzM5JounqUxMxpKmLg7mQ3gnPmuk%2Bpc3S%2FBNm%2FE%2BXsVjTsJLDh3m3LMlScrjm2aWuUMTnG5nZPS6si%2Fs%2BvpHTo5aJ0Hes9YsNT4dkbXp7m9zC1a%2BSF1IF70F%2Bqe0D1e%2BGSz4CTjnkYqtkScVvCUvBENbXE8mrbbQOcy%2F0iVxaxZR03FkDDfgdi%2BBjqkAd6yAd2lZhRsWCoSb3q2iln1jD1%2Fstq87Di3P8ubBrgt8Z7gkj%2F%2BBhxXEp56AVAECQcZLRKBLfkRZn%2BuYL3EcgjDltAXje4Cv2V5wz50oMBHPu33g%2Bzn2VR1EXpGi%2BQzphHxDN5%2FtgXaC29HdA2j2g7clijgk9ek2HM6t7VRvfVVkCWduUy0h7iNBPngWt6ypGjMJJFMd1NmmYFh6ghwJrNC81S4&X-Amz-Signature=250540849b40c469425ca8a9593a12aaa4ec322019bbdc78c74c5bb51273e326&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42TE6GK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgjnzqbbWPkvf3W90Jdk4mFj8I6I9lZP%2FKunXDrn6nwIhALPn9fgbfGuvjLUzrAq3e1kg8u9pY%2BFI3BmgFK%2Fwdy2nKv8DCCAQABoMNjM3NDIzMTgzODA1IgznDvmLMrWMDKnxqwEq3AMyrCagjwgcU0eN2zYCof0o5Aty1xQ3wlypvqxNbsV%2FkpegrhsS2DkOqRnJY3Q9mkKygX0dBcjpT0pObSeWtkyomTAK262%2Fz60i69EBUSOpqp3nlu%2FuzJ17NrkYNCmTPEoOOlINdinuJEDyv0Mmb1zt6ts7HDrjvd%2BABi98y34mX0ZHlSP100w3dDtArS4oCeDm1EhTnHFCoeMaVuH73jKtVR9T%2FSkK9dxjrBjPZLrENLrOGmPRjJ8POmM4J7bZzR7PgxB34GcBa9gPdk9P%2FZUzkHlcrLRtTYz5bu98AcwQHrV%2FGYGH6yEpLxcfnOC0j1NmGwf4dzvB05%2F8vozuXVMJxNtgIoU8YgcP52RMB48Nts7zPNSZAdnimbKy8ycEOgMhuj5pdm4mVtMO5Tc0J%2BZ9KWbMiRA7y%2BoJo%2BhKKxKQ%2Bu9MYYuiIlt%2F9nLi%2BQzL%2BeLRVk4JIxOIhVzM5JounqUxMxpKmLg7mQ3gnPmuk%2Bpc3S%2FBNm%2FE%2BXsVjTsJLDh3m3LMlScrjm2aWuUMTnG5nZPS6si%2Fs%2BvpHTo5aJ0Hes9YsNT4dkbXp7m9zC1a%2BSF1IF70F%2Bqe0D1e%2BGSz4CTjnkYqtkScVvCUvBENbXE8mrbbQOcy%2F0iVxaxZR03FkDDfgdi%2BBjqkAd6yAd2lZhRsWCoSb3q2iln1jD1%2Fstq87Di3P8ubBrgt8Z7gkj%2F%2BBhxXEp56AVAECQcZLRKBLfkRZn%2BuYL3EcgjDltAXje4Cv2V5wz50oMBHPu33g%2Bzn2VR1EXpGi%2BQzphHxDN5%2FtgXaC29HdA2j2g7clijgk9ek2HM6t7VRvfVVkCWduUy0h7iNBPngWt6ypGjMJJFMd1NmmYFh6ghwJrNC81S4&X-Amz-Signature=c603bae6f43e212199fc2f597136fb3a7d11361a152da62c07ad83f59b6a1537&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42TE6GK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgjnzqbbWPkvf3W90Jdk4mFj8I6I9lZP%2FKunXDrn6nwIhALPn9fgbfGuvjLUzrAq3e1kg8u9pY%2BFI3BmgFK%2Fwdy2nKv8DCCAQABoMNjM3NDIzMTgzODA1IgznDvmLMrWMDKnxqwEq3AMyrCagjwgcU0eN2zYCof0o5Aty1xQ3wlypvqxNbsV%2FkpegrhsS2DkOqRnJY3Q9mkKygX0dBcjpT0pObSeWtkyomTAK262%2Fz60i69EBUSOpqp3nlu%2FuzJ17NrkYNCmTPEoOOlINdinuJEDyv0Mmb1zt6ts7HDrjvd%2BABi98y34mX0ZHlSP100w3dDtArS4oCeDm1EhTnHFCoeMaVuH73jKtVR9T%2FSkK9dxjrBjPZLrENLrOGmPRjJ8POmM4J7bZzR7PgxB34GcBa9gPdk9P%2FZUzkHlcrLRtTYz5bu98AcwQHrV%2FGYGH6yEpLxcfnOC0j1NmGwf4dzvB05%2F8vozuXVMJxNtgIoU8YgcP52RMB48Nts7zPNSZAdnimbKy8ycEOgMhuj5pdm4mVtMO5Tc0J%2BZ9KWbMiRA7y%2BoJo%2BhKKxKQ%2Bu9MYYuiIlt%2F9nLi%2BQzL%2BeLRVk4JIxOIhVzM5JounqUxMxpKmLg7mQ3gnPmuk%2Bpc3S%2FBNm%2FE%2BXsVjTsJLDh3m3LMlScrjm2aWuUMTnG5nZPS6si%2Fs%2BvpHTo5aJ0Hes9YsNT4dkbXp7m9zC1a%2BSF1IF70F%2Bqe0D1e%2BGSz4CTjnkYqtkScVvCUvBENbXE8mrbbQOcy%2F0iVxaxZR03FkDDfgdi%2BBjqkAd6yAd2lZhRsWCoSb3q2iln1jD1%2Fstq87Di3P8ubBrgt8Z7gkj%2F%2BBhxXEp56AVAECQcZLRKBLfkRZn%2BuYL3EcgjDltAXje4Cv2V5wz50oMBHPu33g%2Bzn2VR1EXpGi%2BQzphHxDN5%2FtgXaC29HdA2j2g7clijgk9ek2HM6t7VRvfVVkCWduUy0h7iNBPngWt6ypGjMJJFMd1NmmYFh6ghwJrNC81S4&X-Amz-Signature=c6290a1ce8c49b0ef76708a1c04ad8d2171af8dbbc0f045ca97969053778a805&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42TE6GK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgjnzqbbWPkvf3W90Jdk4mFj8I6I9lZP%2FKunXDrn6nwIhALPn9fgbfGuvjLUzrAq3e1kg8u9pY%2BFI3BmgFK%2Fwdy2nKv8DCCAQABoMNjM3NDIzMTgzODA1IgznDvmLMrWMDKnxqwEq3AMyrCagjwgcU0eN2zYCof0o5Aty1xQ3wlypvqxNbsV%2FkpegrhsS2DkOqRnJY3Q9mkKygX0dBcjpT0pObSeWtkyomTAK262%2Fz60i69EBUSOpqp3nlu%2FuzJ17NrkYNCmTPEoOOlINdinuJEDyv0Mmb1zt6ts7HDrjvd%2BABi98y34mX0ZHlSP100w3dDtArS4oCeDm1EhTnHFCoeMaVuH73jKtVR9T%2FSkK9dxjrBjPZLrENLrOGmPRjJ8POmM4J7bZzR7PgxB34GcBa9gPdk9P%2FZUzkHlcrLRtTYz5bu98AcwQHrV%2FGYGH6yEpLxcfnOC0j1NmGwf4dzvB05%2F8vozuXVMJxNtgIoU8YgcP52RMB48Nts7zPNSZAdnimbKy8ycEOgMhuj5pdm4mVtMO5Tc0J%2BZ9KWbMiRA7y%2BoJo%2BhKKxKQ%2Bu9MYYuiIlt%2F9nLi%2BQzL%2BeLRVk4JIxOIhVzM5JounqUxMxpKmLg7mQ3gnPmuk%2Bpc3S%2FBNm%2FE%2BXsVjTsJLDh3m3LMlScrjm2aWuUMTnG5nZPS6si%2Fs%2BvpHTo5aJ0Hes9YsNT4dkbXp7m9zC1a%2BSF1IF70F%2Bqe0D1e%2BGSz4CTjnkYqtkScVvCUvBENbXE8mrbbQOcy%2F0iVxaxZR03FkDDfgdi%2BBjqkAd6yAd2lZhRsWCoSb3q2iln1jD1%2Fstq87Di3P8ubBrgt8Z7gkj%2F%2BBhxXEp56AVAECQcZLRKBLfkRZn%2BuYL3EcgjDltAXje4Cv2V5wz50oMBHPu33g%2Bzn2VR1EXpGi%2BQzphHxDN5%2FtgXaC29HdA2j2g7clijgk9ek2HM6t7VRvfVVkCWduUy0h7iNBPngWt6ypGjMJJFMd1NmmYFh6ghwJrNC81S4&X-Amz-Signature=4aa3680153dcb1bb60eddec46125108a998d0f0d4f3839a6afa687e68d5d0b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42TE6GK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgjnzqbbWPkvf3W90Jdk4mFj8I6I9lZP%2FKunXDrn6nwIhALPn9fgbfGuvjLUzrAq3e1kg8u9pY%2BFI3BmgFK%2Fwdy2nKv8DCCAQABoMNjM3NDIzMTgzODA1IgznDvmLMrWMDKnxqwEq3AMyrCagjwgcU0eN2zYCof0o5Aty1xQ3wlypvqxNbsV%2FkpegrhsS2DkOqRnJY3Q9mkKygX0dBcjpT0pObSeWtkyomTAK262%2Fz60i69EBUSOpqp3nlu%2FuzJ17NrkYNCmTPEoOOlINdinuJEDyv0Mmb1zt6ts7HDrjvd%2BABi98y34mX0ZHlSP100w3dDtArS4oCeDm1EhTnHFCoeMaVuH73jKtVR9T%2FSkK9dxjrBjPZLrENLrOGmPRjJ8POmM4J7bZzR7PgxB34GcBa9gPdk9P%2FZUzkHlcrLRtTYz5bu98AcwQHrV%2FGYGH6yEpLxcfnOC0j1NmGwf4dzvB05%2F8vozuXVMJxNtgIoU8YgcP52RMB48Nts7zPNSZAdnimbKy8ycEOgMhuj5pdm4mVtMO5Tc0J%2BZ9KWbMiRA7y%2BoJo%2BhKKxKQ%2Bu9MYYuiIlt%2F9nLi%2BQzL%2BeLRVk4JIxOIhVzM5JounqUxMxpKmLg7mQ3gnPmuk%2Bpc3S%2FBNm%2FE%2BXsVjTsJLDh3m3LMlScrjm2aWuUMTnG5nZPS6si%2Fs%2BvpHTo5aJ0Hes9YsNT4dkbXp7m9zC1a%2BSF1IF70F%2Bqe0D1e%2BGSz4CTjnkYqtkScVvCUvBENbXE8mrbbQOcy%2F0iVxaxZR03FkDDfgdi%2BBjqkAd6yAd2lZhRsWCoSb3q2iln1jD1%2Fstq87Di3P8ubBrgt8Z7gkj%2F%2BBhxXEp56AVAECQcZLRKBLfkRZn%2BuYL3EcgjDltAXje4Cv2V5wz50oMBHPu33g%2Bzn2VR1EXpGi%2BQzphHxDN5%2FtgXaC29HdA2j2g7clijgk9ek2HM6t7VRvfVVkCWduUy0h7iNBPngWt6ypGjMJJFMd1NmmYFh6ghwJrNC81S4&X-Amz-Signature=c88d21b086a32e221db66585c952bc38a71ed2f4b3021cba8279391812406d24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42TE6GK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgjnzqbbWPkvf3W90Jdk4mFj8I6I9lZP%2FKunXDrn6nwIhALPn9fgbfGuvjLUzrAq3e1kg8u9pY%2BFI3BmgFK%2Fwdy2nKv8DCCAQABoMNjM3NDIzMTgzODA1IgznDvmLMrWMDKnxqwEq3AMyrCagjwgcU0eN2zYCof0o5Aty1xQ3wlypvqxNbsV%2FkpegrhsS2DkOqRnJY3Q9mkKygX0dBcjpT0pObSeWtkyomTAK262%2Fz60i69EBUSOpqp3nlu%2FuzJ17NrkYNCmTPEoOOlINdinuJEDyv0Mmb1zt6ts7HDrjvd%2BABi98y34mX0ZHlSP100w3dDtArS4oCeDm1EhTnHFCoeMaVuH73jKtVR9T%2FSkK9dxjrBjPZLrENLrOGmPRjJ8POmM4J7bZzR7PgxB34GcBa9gPdk9P%2FZUzkHlcrLRtTYz5bu98AcwQHrV%2FGYGH6yEpLxcfnOC0j1NmGwf4dzvB05%2F8vozuXVMJxNtgIoU8YgcP52RMB48Nts7zPNSZAdnimbKy8ycEOgMhuj5pdm4mVtMO5Tc0J%2BZ9KWbMiRA7y%2BoJo%2BhKKxKQ%2Bu9MYYuiIlt%2F9nLi%2BQzL%2BeLRVk4JIxOIhVzM5JounqUxMxpKmLg7mQ3gnPmuk%2Bpc3S%2FBNm%2FE%2BXsVjTsJLDh3m3LMlScrjm2aWuUMTnG5nZPS6si%2Fs%2BvpHTo5aJ0Hes9YsNT4dkbXp7m9zC1a%2BSF1IF70F%2Bqe0D1e%2BGSz4CTjnkYqtkScVvCUvBENbXE8mrbbQOcy%2F0iVxaxZR03FkDDfgdi%2BBjqkAd6yAd2lZhRsWCoSb3q2iln1jD1%2Fstq87Di3P8ubBrgt8Z7gkj%2F%2BBhxXEp56AVAECQcZLRKBLfkRZn%2BuYL3EcgjDltAXje4Cv2V5wz50oMBHPu33g%2Bzn2VR1EXpGi%2BQzphHxDN5%2FtgXaC29HdA2j2g7clijgk9ek2HM6t7VRvfVVkCWduUy0h7iNBPngWt6ypGjMJJFMd1NmmYFh6ghwJrNC81S4&X-Amz-Signature=10d274fd2f91ae4959aeb8d943b7676ac8e7360b4761f45897ab3375def38536&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42TE6GK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgjnzqbbWPkvf3W90Jdk4mFj8I6I9lZP%2FKunXDrn6nwIhALPn9fgbfGuvjLUzrAq3e1kg8u9pY%2BFI3BmgFK%2Fwdy2nKv8DCCAQABoMNjM3NDIzMTgzODA1IgznDvmLMrWMDKnxqwEq3AMyrCagjwgcU0eN2zYCof0o5Aty1xQ3wlypvqxNbsV%2FkpegrhsS2DkOqRnJY3Q9mkKygX0dBcjpT0pObSeWtkyomTAK262%2Fz60i69EBUSOpqp3nlu%2FuzJ17NrkYNCmTPEoOOlINdinuJEDyv0Mmb1zt6ts7HDrjvd%2BABi98y34mX0ZHlSP100w3dDtArS4oCeDm1EhTnHFCoeMaVuH73jKtVR9T%2FSkK9dxjrBjPZLrENLrOGmPRjJ8POmM4J7bZzR7PgxB34GcBa9gPdk9P%2FZUzkHlcrLRtTYz5bu98AcwQHrV%2FGYGH6yEpLxcfnOC0j1NmGwf4dzvB05%2F8vozuXVMJxNtgIoU8YgcP52RMB48Nts7zPNSZAdnimbKy8ycEOgMhuj5pdm4mVtMO5Tc0J%2BZ9KWbMiRA7y%2BoJo%2BhKKxKQ%2Bu9MYYuiIlt%2F9nLi%2BQzL%2BeLRVk4JIxOIhVzM5JounqUxMxpKmLg7mQ3gnPmuk%2Bpc3S%2FBNm%2FE%2BXsVjTsJLDh3m3LMlScrjm2aWuUMTnG5nZPS6si%2Fs%2BvpHTo5aJ0Hes9YsNT4dkbXp7m9zC1a%2BSF1IF70F%2Bqe0D1e%2BGSz4CTjnkYqtkScVvCUvBENbXE8mrbbQOcy%2F0iVxaxZR03FkDDfgdi%2BBjqkAd6yAd2lZhRsWCoSb3q2iln1jD1%2Fstq87Di3P8ubBrgt8Z7gkj%2F%2BBhxXEp56AVAECQcZLRKBLfkRZn%2BuYL3EcgjDltAXje4Cv2V5wz50oMBHPu33g%2Bzn2VR1EXpGi%2BQzphHxDN5%2FtgXaC29HdA2j2g7clijgk9ek2HM6t7VRvfVVkCWduUy0h7iNBPngWt6ypGjMJJFMd1NmmYFh6ghwJrNC81S4&X-Amz-Signature=fd0ae31983666d1feb39ebf021b990a2c189b7f7c623cb0b5516bc23dc2c5b75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42TE6GK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgjnzqbbWPkvf3W90Jdk4mFj8I6I9lZP%2FKunXDrn6nwIhALPn9fgbfGuvjLUzrAq3e1kg8u9pY%2BFI3BmgFK%2Fwdy2nKv8DCCAQABoMNjM3NDIzMTgzODA1IgznDvmLMrWMDKnxqwEq3AMyrCagjwgcU0eN2zYCof0o5Aty1xQ3wlypvqxNbsV%2FkpegrhsS2DkOqRnJY3Q9mkKygX0dBcjpT0pObSeWtkyomTAK262%2Fz60i69EBUSOpqp3nlu%2FuzJ17NrkYNCmTPEoOOlINdinuJEDyv0Mmb1zt6ts7HDrjvd%2BABi98y34mX0ZHlSP100w3dDtArS4oCeDm1EhTnHFCoeMaVuH73jKtVR9T%2FSkK9dxjrBjPZLrENLrOGmPRjJ8POmM4J7bZzR7PgxB34GcBa9gPdk9P%2FZUzkHlcrLRtTYz5bu98AcwQHrV%2FGYGH6yEpLxcfnOC0j1NmGwf4dzvB05%2F8vozuXVMJxNtgIoU8YgcP52RMB48Nts7zPNSZAdnimbKy8ycEOgMhuj5pdm4mVtMO5Tc0J%2BZ9KWbMiRA7y%2BoJo%2BhKKxKQ%2Bu9MYYuiIlt%2F9nLi%2BQzL%2BeLRVk4JIxOIhVzM5JounqUxMxpKmLg7mQ3gnPmuk%2Bpc3S%2FBNm%2FE%2BXsVjTsJLDh3m3LMlScrjm2aWuUMTnG5nZPS6si%2Fs%2BvpHTo5aJ0Hes9YsNT4dkbXp7m9zC1a%2BSF1IF70F%2Bqe0D1e%2BGSz4CTjnkYqtkScVvCUvBENbXE8mrbbQOcy%2F0iVxaxZR03FkDDfgdi%2BBjqkAd6yAd2lZhRsWCoSb3q2iln1jD1%2Fstq87Di3P8ubBrgt8Z7gkj%2F%2BBhxXEp56AVAECQcZLRKBLfkRZn%2BuYL3EcgjDltAXje4Cv2V5wz50oMBHPu33g%2Bzn2VR1EXpGi%2BQzphHxDN5%2FtgXaC29HdA2j2g7clijgk9ek2HM6t7VRvfVVkCWduUy0h7iNBPngWt6ypGjMJJFMd1NmmYFh6ghwJrNC81S4&X-Amz-Signature=102ebb49951d7a761a2367c18ace488a494966a2251bfa4d79b173470fe26f08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
