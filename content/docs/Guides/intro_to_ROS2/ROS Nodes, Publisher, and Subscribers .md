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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6L4LCG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDMZMyEj3FVLhkOy2VA0of%2FMGON5snKMt7aWZzM9qKBygIhAOVGGffYtN4Zr2jn3ZpzXshvX1tQvdXDIqdd8X3DoJ8xKv8DCFAQABoMNjM3NDIzMTgzODA1IgxBy%2FjL1ZJVzzg69%2B0q3AO3nHvghBAlyB0yNNUcvSjoyHkO2a7JSxgTV4MUyHtnwg9iS7pan24XPvPnH%2Bm44lRyQWTwsjn2nWFjsW%2Bc8wrs4TOvXQUUUpr%2FzNassGcPD6qOrdij8qw1BJparyo85b86dt2eeWnjwWRs2B1y8n6zdJtBwAqgIZ2vlFg66DHvrbh0zRgkLlcrUACg7T2Sx157g0jSH8Zbn9WYYJuL9HyHffRPtO%2FLElnlnm1yhGM0jgU7TY7ImGEznIdnfRNTnzqejldUSLAo6mt0BHs8kXW19GyzfHX7gcFppCE7UYc9bifjVZpA6wbIPmZnuxoMpGT01ERZQyX%2BZWLlSdBqiwea97siB7U5ehg3uCX2ekJvQldfRnZozO5DvOgIbWLGPHzguNBH0QB9MFHR2%2FTrTEa6P8XrjYx5xHm00IPSWVnPx32HQiqh6ttsVBQ6Xlh56it3HU%2BlNrmclMEvkf8MF1gzWG4hcRfiBu7FZ9vEmaqocyfBSLJqqocM6Q70pAXAoQdgmPMMiNFXQcSevQbfAz%2FuTlEip0AgtSVxBcwcJagOAslU0mDX2SeSBHSOyNXr7VfmqWx7h1vbw4XAUmIWOKLngn%2BSgQNX1buII0HlaPQPhbRFvIov2PZ7ssCLEDC09MTEBjqkAfjLv5R0REPC%2FyCgrrM%2B0rVEEpyqwEfuDVylKUcq6Fl3ajIi9YF%2B49trNP0thhanPVWAHfzEQ8l%2Bt4NGUPQls2yhv%2B8IScDkJx5Cq2ukg9yJtVoaEngUvukCHstWtSOQv%2FVdD1%2BSWP98EgGEXcTSOAP5pOblsuURubez63iT00wTSQCXP5%2FMyDgaQBJ3ad%2Bww8Br429cgh1kAhscBr%2B9n9mxa4xo&X-Amz-Signature=2c161f8a7df8440057725f22db110ade01f354d36cd69e8bc4ddcc5a174f1757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6L4LCG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDMZMyEj3FVLhkOy2VA0of%2FMGON5snKMt7aWZzM9qKBygIhAOVGGffYtN4Zr2jn3ZpzXshvX1tQvdXDIqdd8X3DoJ8xKv8DCFAQABoMNjM3NDIzMTgzODA1IgxBy%2FjL1ZJVzzg69%2B0q3AO3nHvghBAlyB0yNNUcvSjoyHkO2a7JSxgTV4MUyHtnwg9iS7pan24XPvPnH%2Bm44lRyQWTwsjn2nWFjsW%2Bc8wrs4TOvXQUUUpr%2FzNassGcPD6qOrdij8qw1BJparyo85b86dt2eeWnjwWRs2B1y8n6zdJtBwAqgIZ2vlFg66DHvrbh0zRgkLlcrUACg7T2Sx157g0jSH8Zbn9WYYJuL9HyHffRPtO%2FLElnlnm1yhGM0jgU7TY7ImGEznIdnfRNTnzqejldUSLAo6mt0BHs8kXW19GyzfHX7gcFppCE7UYc9bifjVZpA6wbIPmZnuxoMpGT01ERZQyX%2BZWLlSdBqiwea97siB7U5ehg3uCX2ekJvQldfRnZozO5DvOgIbWLGPHzguNBH0QB9MFHR2%2FTrTEa6P8XrjYx5xHm00IPSWVnPx32HQiqh6ttsVBQ6Xlh56it3HU%2BlNrmclMEvkf8MF1gzWG4hcRfiBu7FZ9vEmaqocyfBSLJqqocM6Q70pAXAoQdgmPMMiNFXQcSevQbfAz%2FuTlEip0AgtSVxBcwcJagOAslU0mDX2SeSBHSOyNXr7VfmqWx7h1vbw4XAUmIWOKLngn%2BSgQNX1buII0HlaPQPhbRFvIov2PZ7ssCLEDC09MTEBjqkAfjLv5R0REPC%2FyCgrrM%2B0rVEEpyqwEfuDVylKUcq6Fl3ajIi9YF%2B49trNP0thhanPVWAHfzEQ8l%2Bt4NGUPQls2yhv%2B8IScDkJx5Cq2ukg9yJtVoaEngUvukCHstWtSOQv%2FVdD1%2BSWP98EgGEXcTSOAP5pOblsuURubez63iT00wTSQCXP5%2FMyDgaQBJ3ad%2Bww8Br429cgh1kAhscBr%2B9n9mxa4xo&X-Amz-Signature=17d7b7af5572e49d441aea7c4375506d1af7e60533f0aea5c89966d5f80708e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6L4LCG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDMZMyEj3FVLhkOy2VA0of%2FMGON5snKMt7aWZzM9qKBygIhAOVGGffYtN4Zr2jn3ZpzXshvX1tQvdXDIqdd8X3DoJ8xKv8DCFAQABoMNjM3NDIzMTgzODA1IgxBy%2FjL1ZJVzzg69%2B0q3AO3nHvghBAlyB0yNNUcvSjoyHkO2a7JSxgTV4MUyHtnwg9iS7pan24XPvPnH%2Bm44lRyQWTwsjn2nWFjsW%2Bc8wrs4TOvXQUUUpr%2FzNassGcPD6qOrdij8qw1BJparyo85b86dt2eeWnjwWRs2B1y8n6zdJtBwAqgIZ2vlFg66DHvrbh0zRgkLlcrUACg7T2Sx157g0jSH8Zbn9WYYJuL9HyHffRPtO%2FLElnlnm1yhGM0jgU7TY7ImGEznIdnfRNTnzqejldUSLAo6mt0BHs8kXW19GyzfHX7gcFppCE7UYc9bifjVZpA6wbIPmZnuxoMpGT01ERZQyX%2BZWLlSdBqiwea97siB7U5ehg3uCX2ekJvQldfRnZozO5DvOgIbWLGPHzguNBH0QB9MFHR2%2FTrTEa6P8XrjYx5xHm00IPSWVnPx32HQiqh6ttsVBQ6Xlh56it3HU%2BlNrmclMEvkf8MF1gzWG4hcRfiBu7FZ9vEmaqocyfBSLJqqocM6Q70pAXAoQdgmPMMiNFXQcSevQbfAz%2FuTlEip0AgtSVxBcwcJagOAslU0mDX2SeSBHSOyNXr7VfmqWx7h1vbw4XAUmIWOKLngn%2BSgQNX1buII0HlaPQPhbRFvIov2PZ7ssCLEDC09MTEBjqkAfjLv5R0REPC%2FyCgrrM%2B0rVEEpyqwEfuDVylKUcq6Fl3ajIi9YF%2B49trNP0thhanPVWAHfzEQ8l%2Bt4NGUPQls2yhv%2B8IScDkJx5Cq2ukg9yJtVoaEngUvukCHstWtSOQv%2FVdD1%2BSWP98EgGEXcTSOAP5pOblsuURubez63iT00wTSQCXP5%2FMyDgaQBJ3ad%2Bww8Br429cgh1kAhscBr%2B9n9mxa4xo&X-Amz-Signature=acdeb915f9261ef66bbe8b0643124c274243f2f33e195cc23fd1a07402078eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6L4LCG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDMZMyEj3FVLhkOy2VA0of%2FMGON5snKMt7aWZzM9qKBygIhAOVGGffYtN4Zr2jn3ZpzXshvX1tQvdXDIqdd8X3DoJ8xKv8DCFAQABoMNjM3NDIzMTgzODA1IgxBy%2FjL1ZJVzzg69%2B0q3AO3nHvghBAlyB0yNNUcvSjoyHkO2a7JSxgTV4MUyHtnwg9iS7pan24XPvPnH%2Bm44lRyQWTwsjn2nWFjsW%2Bc8wrs4TOvXQUUUpr%2FzNassGcPD6qOrdij8qw1BJparyo85b86dt2eeWnjwWRs2B1y8n6zdJtBwAqgIZ2vlFg66DHvrbh0zRgkLlcrUACg7T2Sx157g0jSH8Zbn9WYYJuL9HyHffRPtO%2FLElnlnm1yhGM0jgU7TY7ImGEznIdnfRNTnzqejldUSLAo6mt0BHs8kXW19GyzfHX7gcFppCE7UYc9bifjVZpA6wbIPmZnuxoMpGT01ERZQyX%2BZWLlSdBqiwea97siB7U5ehg3uCX2ekJvQldfRnZozO5DvOgIbWLGPHzguNBH0QB9MFHR2%2FTrTEa6P8XrjYx5xHm00IPSWVnPx32HQiqh6ttsVBQ6Xlh56it3HU%2BlNrmclMEvkf8MF1gzWG4hcRfiBu7FZ9vEmaqocyfBSLJqqocM6Q70pAXAoQdgmPMMiNFXQcSevQbfAz%2FuTlEip0AgtSVxBcwcJagOAslU0mDX2SeSBHSOyNXr7VfmqWx7h1vbw4XAUmIWOKLngn%2BSgQNX1buII0HlaPQPhbRFvIov2PZ7ssCLEDC09MTEBjqkAfjLv5R0REPC%2FyCgrrM%2B0rVEEpyqwEfuDVylKUcq6Fl3ajIi9YF%2B49trNP0thhanPVWAHfzEQ8l%2Bt4NGUPQls2yhv%2B8IScDkJx5Cq2ukg9yJtVoaEngUvukCHstWtSOQv%2FVdD1%2BSWP98EgGEXcTSOAP5pOblsuURubez63iT00wTSQCXP5%2FMyDgaQBJ3ad%2Bww8Br429cgh1kAhscBr%2B9n9mxa4xo&X-Amz-Signature=89acdec68b114a55630b7cb9cc602da9a46ca72f6c28b0c2d0e2a2e94fba0cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6L4LCG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDMZMyEj3FVLhkOy2VA0of%2FMGON5snKMt7aWZzM9qKBygIhAOVGGffYtN4Zr2jn3ZpzXshvX1tQvdXDIqdd8X3DoJ8xKv8DCFAQABoMNjM3NDIzMTgzODA1IgxBy%2FjL1ZJVzzg69%2B0q3AO3nHvghBAlyB0yNNUcvSjoyHkO2a7JSxgTV4MUyHtnwg9iS7pan24XPvPnH%2Bm44lRyQWTwsjn2nWFjsW%2Bc8wrs4TOvXQUUUpr%2FzNassGcPD6qOrdij8qw1BJparyo85b86dt2eeWnjwWRs2B1y8n6zdJtBwAqgIZ2vlFg66DHvrbh0zRgkLlcrUACg7T2Sx157g0jSH8Zbn9WYYJuL9HyHffRPtO%2FLElnlnm1yhGM0jgU7TY7ImGEznIdnfRNTnzqejldUSLAo6mt0BHs8kXW19GyzfHX7gcFppCE7UYc9bifjVZpA6wbIPmZnuxoMpGT01ERZQyX%2BZWLlSdBqiwea97siB7U5ehg3uCX2ekJvQldfRnZozO5DvOgIbWLGPHzguNBH0QB9MFHR2%2FTrTEa6P8XrjYx5xHm00IPSWVnPx32HQiqh6ttsVBQ6Xlh56it3HU%2BlNrmclMEvkf8MF1gzWG4hcRfiBu7FZ9vEmaqocyfBSLJqqocM6Q70pAXAoQdgmPMMiNFXQcSevQbfAz%2FuTlEip0AgtSVxBcwcJagOAslU0mDX2SeSBHSOyNXr7VfmqWx7h1vbw4XAUmIWOKLngn%2BSgQNX1buII0HlaPQPhbRFvIov2PZ7ssCLEDC09MTEBjqkAfjLv5R0REPC%2FyCgrrM%2B0rVEEpyqwEfuDVylKUcq6Fl3ajIi9YF%2B49trNP0thhanPVWAHfzEQ8l%2Bt4NGUPQls2yhv%2B8IScDkJx5Cq2ukg9yJtVoaEngUvukCHstWtSOQv%2FVdD1%2BSWP98EgGEXcTSOAP5pOblsuURubez63iT00wTSQCXP5%2FMyDgaQBJ3ad%2Bww8Br429cgh1kAhscBr%2B9n9mxa4xo&X-Amz-Signature=da7ef8b9abaad0725c7d9c19cb2053edf01e66508c6a6d352609d65b2e5b8bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6L4LCG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDMZMyEj3FVLhkOy2VA0of%2FMGON5snKMt7aWZzM9qKBygIhAOVGGffYtN4Zr2jn3ZpzXshvX1tQvdXDIqdd8X3DoJ8xKv8DCFAQABoMNjM3NDIzMTgzODA1IgxBy%2FjL1ZJVzzg69%2B0q3AO3nHvghBAlyB0yNNUcvSjoyHkO2a7JSxgTV4MUyHtnwg9iS7pan24XPvPnH%2Bm44lRyQWTwsjn2nWFjsW%2Bc8wrs4TOvXQUUUpr%2FzNassGcPD6qOrdij8qw1BJparyo85b86dt2eeWnjwWRs2B1y8n6zdJtBwAqgIZ2vlFg66DHvrbh0zRgkLlcrUACg7T2Sx157g0jSH8Zbn9WYYJuL9HyHffRPtO%2FLElnlnm1yhGM0jgU7TY7ImGEznIdnfRNTnzqejldUSLAo6mt0BHs8kXW19GyzfHX7gcFppCE7UYc9bifjVZpA6wbIPmZnuxoMpGT01ERZQyX%2BZWLlSdBqiwea97siB7U5ehg3uCX2ekJvQldfRnZozO5DvOgIbWLGPHzguNBH0QB9MFHR2%2FTrTEa6P8XrjYx5xHm00IPSWVnPx32HQiqh6ttsVBQ6Xlh56it3HU%2BlNrmclMEvkf8MF1gzWG4hcRfiBu7FZ9vEmaqocyfBSLJqqocM6Q70pAXAoQdgmPMMiNFXQcSevQbfAz%2FuTlEip0AgtSVxBcwcJagOAslU0mDX2SeSBHSOyNXr7VfmqWx7h1vbw4XAUmIWOKLngn%2BSgQNX1buII0HlaPQPhbRFvIov2PZ7ssCLEDC09MTEBjqkAfjLv5R0REPC%2FyCgrrM%2B0rVEEpyqwEfuDVylKUcq6Fl3ajIi9YF%2B49trNP0thhanPVWAHfzEQ8l%2Bt4NGUPQls2yhv%2B8IScDkJx5Cq2ukg9yJtVoaEngUvukCHstWtSOQv%2FVdD1%2BSWP98EgGEXcTSOAP5pOblsuURubez63iT00wTSQCXP5%2FMyDgaQBJ3ad%2Bww8Br429cgh1kAhscBr%2B9n9mxa4xo&X-Amz-Signature=f12ef9dbcb52dd72bc71acc2050c9268aa3bb7964699b845ed1a5cd73bebbb83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6L4LCG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDMZMyEj3FVLhkOy2VA0of%2FMGON5snKMt7aWZzM9qKBygIhAOVGGffYtN4Zr2jn3ZpzXshvX1tQvdXDIqdd8X3DoJ8xKv8DCFAQABoMNjM3NDIzMTgzODA1IgxBy%2FjL1ZJVzzg69%2B0q3AO3nHvghBAlyB0yNNUcvSjoyHkO2a7JSxgTV4MUyHtnwg9iS7pan24XPvPnH%2Bm44lRyQWTwsjn2nWFjsW%2Bc8wrs4TOvXQUUUpr%2FzNassGcPD6qOrdij8qw1BJparyo85b86dt2eeWnjwWRs2B1y8n6zdJtBwAqgIZ2vlFg66DHvrbh0zRgkLlcrUACg7T2Sx157g0jSH8Zbn9WYYJuL9HyHffRPtO%2FLElnlnm1yhGM0jgU7TY7ImGEznIdnfRNTnzqejldUSLAo6mt0BHs8kXW19GyzfHX7gcFppCE7UYc9bifjVZpA6wbIPmZnuxoMpGT01ERZQyX%2BZWLlSdBqiwea97siB7U5ehg3uCX2ekJvQldfRnZozO5DvOgIbWLGPHzguNBH0QB9MFHR2%2FTrTEa6P8XrjYx5xHm00IPSWVnPx32HQiqh6ttsVBQ6Xlh56it3HU%2BlNrmclMEvkf8MF1gzWG4hcRfiBu7FZ9vEmaqocyfBSLJqqocM6Q70pAXAoQdgmPMMiNFXQcSevQbfAz%2FuTlEip0AgtSVxBcwcJagOAslU0mDX2SeSBHSOyNXr7VfmqWx7h1vbw4XAUmIWOKLngn%2BSgQNX1buII0HlaPQPhbRFvIov2PZ7ssCLEDC09MTEBjqkAfjLv5R0REPC%2FyCgrrM%2B0rVEEpyqwEfuDVylKUcq6Fl3ajIi9YF%2B49trNP0thhanPVWAHfzEQ8l%2Bt4NGUPQls2yhv%2B8IScDkJx5Cq2ukg9yJtVoaEngUvukCHstWtSOQv%2FVdD1%2BSWP98EgGEXcTSOAP5pOblsuURubez63iT00wTSQCXP5%2FMyDgaQBJ3ad%2Bww8Br429cgh1kAhscBr%2B9n9mxa4xo&X-Amz-Signature=396426dd307b90178f47659f62a05ce7332cc8fa8c6e81d60385a49a90f1740b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW6L4LCG%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDMZMyEj3FVLhkOy2VA0of%2FMGON5snKMt7aWZzM9qKBygIhAOVGGffYtN4Zr2jn3ZpzXshvX1tQvdXDIqdd8X3DoJ8xKv8DCFAQABoMNjM3NDIzMTgzODA1IgxBy%2FjL1ZJVzzg69%2B0q3AO3nHvghBAlyB0yNNUcvSjoyHkO2a7JSxgTV4MUyHtnwg9iS7pan24XPvPnH%2Bm44lRyQWTwsjn2nWFjsW%2Bc8wrs4TOvXQUUUpr%2FzNassGcPD6qOrdij8qw1BJparyo85b86dt2eeWnjwWRs2B1y8n6zdJtBwAqgIZ2vlFg66DHvrbh0zRgkLlcrUACg7T2Sx157g0jSH8Zbn9WYYJuL9HyHffRPtO%2FLElnlnm1yhGM0jgU7TY7ImGEznIdnfRNTnzqejldUSLAo6mt0BHs8kXW19GyzfHX7gcFppCE7UYc9bifjVZpA6wbIPmZnuxoMpGT01ERZQyX%2BZWLlSdBqiwea97siB7U5ehg3uCX2ekJvQldfRnZozO5DvOgIbWLGPHzguNBH0QB9MFHR2%2FTrTEa6P8XrjYx5xHm00IPSWVnPx32HQiqh6ttsVBQ6Xlh56it3HU%2BlNrmclMEvkf8MF1gzWG4hcRfiBu7FZ9vEmaqocyfBSLJqqocM6Q70pAXAoQdgmPMMiNFXQcSevQbfAz%2FuTlEip0AgtSVxBcwcJagOAslU0mDX2SeSBHSOyNXr7VfmqWx7h1vbw4XAUmIWOKLngn%2BSgQNX1buII0HlaPQPhbRFvIov2PZ7ssCLEDC09MTEBjqkAfjLv5R0REPC%2FyCgrrM%2B0rVEEpyqwEfuDVylKUcq6Fl3ajIi9YF%2B49trNP0thhanPVWAHfzEQ8l%2Bt4NGUPQls2yhv%2B8IScDkJx5Cq2ukg9yJtVoaEngUvukCHstWtSOQv%2FVdD1%2BSWP98EgGEXcTSOAP5pOblsuURubez63iT00wTSQCXP5%2FMyDgaQBJ3ad%2Bww8Br429cgh1kAhscBr%2B9n9mxa4xo&X-Amz-Signature=1b7a587861f636d52c5cd89638df0862fd4592b5f5159b046528384c33e12753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
