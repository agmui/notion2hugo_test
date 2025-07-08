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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQV6QBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoW04O7Rywu9scZrwZuGKmTo68F6O9k3LxQTdCUgbDMwIgYcf4RgUXnz269R2o11pHqttbse%2FWyo7LxAuZAuPS6y0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI869tmK2cdkvdjHVyrcA%2FOH6eamcBSZP7aFR08UuXjpJ5ph48Dyyvvwfiiou12VKHmYOjILql7C2zeKOOFxtmmIOEMbPgFAzZWPbfJsAe%2BhlXXb63fS6e77%2F4bPW0xaTrmlS1Y%2F4X9T3W6Vv5NMEURsUIthMXqSUSR601jaJJApzdliSi6E6noHn9byACYADIAcc407Tz4zGUfmZP6UoQGlviuJlisznlNP7zv3w4ZT6b9eRikcZx0tNwcjWhpcwFnptW08jo0YDKDlsFbewkgGse2LL5mnPnqs5NSvVH1OOHCZw73%2BVI4iy7FMRYv1ccxNt0q5lKgr%2By5i80tMax7NcqkR59nCliTvxp4Ed9%2FTelLPq7mL96pSeQj0wLszd%2F%2BFZIRPtG%2BS%2BSbHFOtMA4MhyLyz01NNEws0UCNCvYFrHkaeg9AWJ76FTPFE2bvPLHV0W7L2e7v%2B87MFbry5SsH%2BU%2BAGDfgOTVwJGwP5vcJALLpu7EqWcOA0BZ7UHwRPmlPiFDylmlpfVgrUQRy0JoxcCcNZaEKE3fanDkRNRjywXQh5snSVX6%2Be5rDfU3oaBDjBXpI1nbe5hs2BCIJHxZd3ZH7XTv623SZeP7DcpGJ6J%2FhEv13%2FgeCexmeqCIIG9Ay2uK3IENerjl9iMLL9s8MGOqUBVtsr%2BuUYzQHcreARTB6TvQwa0R3fX3ZWKAUCijquy0imq%2F4%2FYgsmt%2FvTpVoNZrvHRcrL5ZWDQA8ZvLAn1%2BX6Qik8%2FAyl8EWwwNXy%2B2etiUjhDlLhg5F4OulAjOuEG2ojlyDg7JxW6HnwgCQZHBFqMKgikqtNrLQgz%2FMUsbD71N6IErhqqnGIR3unDwC2CQPIrwryRsYsb6%2FkBCwQsHmpiKGJNc1%2F&X-Amz-Signature=17d0ae517556cdb58dca62912f4fa4a04894d84bf9037840ac94c46154738c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQV6QBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoW04O7Rywu9scZrwZuGKmTo68F6O9k3LxQTdCUgbDMwIgYcf4RgUXnz269R2o11pHqttbse%2FWyo7LxAuZAuPS6y0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI869tmK2cdkvdjHVyrcA%2FOH6eamcBSZP7aFR08UuXjpJ5ph48Dyyvvwfiiou12VKHmYOjILql7C2zeKOOFxtmmIOEMbPgFAzZWPbfJsAe%2BhlXXb63fS6e77%2F4bPW0xaTrmlS1Y%2F4X9T3W6Vv5NMEURsUIthMXqSUSR601jaJJApzdliSi6E6noHn9byACYADIAcc407Tz4zGUfmZP6UoQGlviuJlisznlNP7zv3w4ZT6b9eRikcZx0tNwcjWhpcwFnptW08jo0YDKDlsFbewkgGse2LL5mnPnqs5NSvVH1OOHCZw73%2BVI4iy7FMRYv1ccxNt0q5lKgr%2By5i80tMax7NcqkR59nCliTvxp4Ed9%2FTelLPq7mL96pSeQj0wLszd%2F%2BFZIRPtG%2BS%2BSbHFOtMA4MhyLyz01NNEws0UCNCvYFrHkaeg9AWJ76FTPFE2bvPLHV0W7L2e7v%2B87MFbry5SsH%2BU%2BAGDfgOTVwJGwP5vcJALLpu7EqWcOA0BZ7UHwRPmlPiFDylmlpfVgrUQRy0JoxcCcNZaEKE3fanDkRNRjywXQh5snSVX6%2Be5rDfU3oaBDjBXpI1nbe5hs2BCIJHxZd3ZH7XTv623SZeP7DcpGJ6J%2FhEv13%2FgeCexmeqCIIG9Ay2uK3IENerjl9iMLL9s8MGOqUBVtsr%2BuUYzQHcreARTB6TvQwa0R3fX3ZWKAUCijquy0imq%2F4%2FYgsmt%2FvTpVoNZrvHRcrL5ZWDQA8ZvLAn1%2BX6Qik8%2FAyl8EWwwNXy%2B2etiUjhDlLhg5F4OulAjOuEG2ojlyDg7JxW6HnwgCQZHBFqMKgikqtNrLQgz%2FMUsbD71N6IErhqqnGIR3unDwC2CQPIrwryRsYsb6%2FkBCwQsHmpiKGJNc1%2F&X-Amz-Signature=8400b53c582aeb268c05bc2c7a57c7e2aca74512492a9b50f4ba9b5e90293dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQV6QBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoW04O7Rywu9scZrwZuGKmTo68F6O9k3LxQTdCUgbDMwIgYcf4RgUXnz269R2o11pHqttbse%2FWyo7LxAuZAuPS6y0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI869tmK2cdkvdjHVyrcA%2FOH6eamcBSZP7aFR08UuXjpJ5ph48Dyyvvwfiiou12VKHmYOjILql7C2zeKOOFxtmmIOEMbPgFAzZWPbfJsAe%2BhlXXb63fS6e77%2F4bPW0xaTrmlS1Y%2F4X9T3W6Vv5NMEURsUIthMXqSUSR601jaJJApzdliSi6E6noHn9byACYADIAcc407Tz4zGUfmZP6UoQGlviuJlisznlNP7zv3w4ZT6b9eRikcZx0tNwcjWhpcwFnptW08jo0YDKDlsFbewkgGse2LL5mnPnqs5NSvVH1OOHCZw73%2BVI4iy7FMRYv1ccxNt0q5lKgr%2By5i80tMax7NcqkR59nCliTvxp4Ed9%2FTelLPq7mL96pSeQj0wLszd%2F%2BFZIRPtG%2BS%2BSbHFOtMA4MhyLyz01NNEws0UCNCvYFrHkaeg9AWJ76FTPFE2bvPLHV0W7L2e7v%2B87MFbry5SsH%2BU%2BAGDfgOTVwJGwP5vcJALLpu7EqWcOA0BZ7UHwRPmlPiFDylmlpfVgrUQRy0JoxcCcNZaEKE3fanDkRNRjywXQh5snSVX6%2Be5rDfU3oaBDjBXpI1nbe5hs2BCIJHxZd3ZH7XTv623SZeP7DcpGJ6J%2FhEv13%2FgeCexmeqCIIG9Ay2uK3IENerjl9iMLL9s8MGOqUBVtsr%2BuUYzQHcreARTB6TvQwa0R3fX3ZWKAUCijquy0imq%2F4%2FYgsmt%2FvTpVoNZrvHRcrL5ZWDQA8ZvLAn1%2BX6Qik8%2FAyl8EWwwNXy%2B2etiUjhDlLhg5F4OulAjOuEG2ojlyDg7JxW6HnwgCQZHBFqMKgikqtNrLQgz%2FMUsbD71N6IErhqqnGIR3unDwC2CQPIrwryRsYsb6%2FkBCwQsHmpiKGJNc1%2F&X-Amz-Signature=59d4fb7395a4071046afcc2b50280ca26ddd62a601c2ab37e8ddab22c09d575b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQV6QBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoW04O7Rywu9scZrwZuGKmTo68F6O9k3LxQTdCUgbDMwIgYcf4RgUXnz269R2o11pHqttbse%2FWyo7LxAuZAuPS6y0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI869tmK2cdkvdjHVyrcA%2FOH6eamcBSZP7aFR08UuXjpJ5ph48Dyyvvwfiiou12VKHmYOjILql7C2zeKOOFxtmmIOEMbPgFAzZWPbfJsAe%2BhlXXb63fS6e77%2F4bPW0xaTrmlS1Y%2F4X9T3W6Vv5NMEURsUIthMXqSUSR601jaJJApzdliSi6E6noHn9byACYADIAcc407Tz4zGUfmZP6UoQGlviuJlisznlNP7zv3w4ZT6b9eRikcZx0tNwcjWhpcwFnptW08jo0YDKDlsFbewkgGse2LL5mnPnqs5NSvVH1OOHCZw73%2BVI4iy7FMRYv1ccxNt0q5lKgr%2By5i80tMax7NcqkR59nCliTvxp4Ed9%2FTelLPq7mL96pSeQj0wLszd%2F%2BFZIRPtG%2BS%2BSbHFOtMA4MhyLyz01NNEws0UCNCvYFrHkaeg9AWJ76FTPFE2bvPLHV0W7L2e7v%2B87MFbry5SsH%2BU%2BAGDfgOTVwJGwP5vcJALLpu7EqWcOA0BZ7UHwRPmlPiFDylmlpfVgrUQRy0JoxcCcNZaEKE3fanDkRNRjywXQh5snSVX6%2Be5rDfU3oaBDjBXpI1nbe5hs2BCIJHxZd3ZH7XTv623SZeP7DcpGJ6J%2FhEv13%2FgeCexmeqCIIG9Ay2uK3IENerjl9iMLL9s8MGOqUBVtsr%2BuUYzQHcreARTB6TvQwa0R3fX3ZWKAUCijquy0imq%2F4%2FYgsmt%2FvTpVoNZrvHRcrL5ZWDQA8ZvLAn1%2BX6Qik8%2FAyl8EWwwNXy%2B2etiUjhDlLhg5F4OulAjOuEG2ojlyDg7JxW6HnwgCQZHBFqMKgikqtNrLQgz%2FMUsbD71N6IErhqqnGIR3unDwC2CQPIrwryRsYsb6%2FkBCwQsHmpiKGJNc1%2F&X-Amz-Signature=28fa308fc85e6053c5208c96ab979092a251abf79c5a132823b0dcbc5f9f4770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQV6QBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoW04O7Rywu9scZrwZuGKmTo68F6O9k3LxQTdCUgbDMwIgYcf4RgUXnz269R2o11pHqttbse%2FWyo7LxAuZAuPS6y0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI869tmK2cdkvdjHVyrcA%2FOH6eamcBSZP7aFR08UuXjpJ5ph48Dyyvvwfiiou12VKHmYOjILql7C2zeKOOFxtmmIOEMbPgFAzZWPbfJsAe%2BhlXXb63fS6e77%2F4bPW0xaTrmlS1Y%2F4X9T3W6Vv5NMEURsUIthMXqSUSR601jaJJApzdliSi6E6noHn9byACYADIAcc407Tz4zGUfmZP6UoQGlviuJlisznlNP7zv3w4ZT6b9eRikcZx0tNwcjWhpcwFnptW08jo0YDKDlsFbewkgGse2LL5mnPnqs5NSvVH1OOHCZw73%2BVI4iy7FMRYv1ccxNt0q5lKgr%2By5i80tMax7NcqkR59nCliTvxp4Ed9%2FTelLPq7mL96pSeQj0wLszd%2F%2BFZIRPtG%2BS%2BSbHFOtMA4MhyLyz01NNEws0UCNCvYFrHkaeg9AWJ76FTPFE2bvPLHV0W7L2e7v%2B87MFbry5SsH%2BU%2BAGDfgOTVwJGwP5vcJALLpu7EqWcOA0BZ7UHwRPmlPiFDylmlpfVgrUQRy0JoxcCcNZaEKE3fanDkRNRjywXQh5snSVX6%2Be5rDfU3oaBDjBXpI1nbe5hs2BCIJHxZd3ZH7XTv623SZeP7DcpGJ6J%2FhEv13%2FgeCexmeqCIIG9Ay2uK3IENerjl9iMLL9s8MGOqUBVtsr%2BuUYzQHcreARTB6TvQwa0R3fX3ZWKAUCijquy0imq%2F4%2FYgsmt%2FvTpVoNZrvHRcrL5ZWDQA8ZvLAn1%2BX6Qik8%2FAyl8EWwwNXy%2B2etiUjhDlLhg5F4OulAjOuEG2ojlyDg7JxW6HnwgCQZHBFqMKgikqtNrLQgz%2FMUsbD71N6IErhqqnGIR3unDwC2CQPIrwryRsYsb6%2FkBCwQsHmpiKGJNc1%2F&X-Amz-Signature=8f3aff8c42193e4c53e2102fb5763fa55793ee1a804898cb1f743091a29aacd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQV6QBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoW04O7Rywu9scZrwZuGKmTo68F6O9k3LxQTdCUgbDMwIgYcf4RgUXnz269R2o11pHqttbse%2FWyo7LxAuZAuPS6y0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI869tmK2cdkvdjHVyrcA%2FOH6eamcBSZP7aFR08UuXjpJ5ph48Dyyvvwfiiou12VKHmYOjILql7C2zeKOOFxtmmIOEMbPgFAzZWPbfJsAe%2BhlXXb63fS6e77%2F4bPW0xaTrmlS1Y%2F4X9T3W6Vv5NMEURsUIthMXqSUSR601jaJJApzdliSi6E6noHn9byACYADIAcc407Tz4zGUfmZP6UoQGlviuJlisznlNP7zv3w4ZT6b9eRikcZx0tNwcjWhpcwFnptW08jo0YDKDlsFbewkgGse2LL5mnPnqs5NSvVH1OOHCZw73%2BVI4iy7FMRYv1ccxNt0q5lKgr%2By5i80tMax7NcqkR59nCliTvxp4Ed9%2FTelLPq7mL96pSeQj0wLszd%2F%2BFZIRPtG%2BS%2BSbHFOtMA4MhyLyz01NNEws0UCNCvYFrHkaeg9AWJ76FTPFE2bvPLHV0W7L2e7v%2B87MFbry5SsH%2BU%2BAGDfgOTVwJGwP5vcJALLpu7EqWcOA0BZ7UHwRPmlPiFDylmlpfVgrUQRy0JoxcCcNZaEKE3fanDkRNRjywXQh5snSVX6%2Be5rDfU3oaBDjBXpI1nbe5hs2BCIJHxZd3ZH7XTv623SZeP7DcpGJ6J%2FhEv13%2FgeCexmeqCIIG9Ay2uK3IENerjl9iMLL9s8MGOqUBVtsr%2BuUYzQHcreARTB6TvQwa0R3fX3ZWKAUCijquy0imq%2F4%2FYgsmt%2FvTpVoNZrvHRcrL5ZWDQA8ZvLAn1%2BX6Qik8%2FAyl8EWwwNXy%2B2etiUjhDlLhg5F4OulAjOuEG2ojlyDg7JxW6HnwgCQZHBFqMKgikqtNrLQgz%2FMUsbD71N6IErhqqnGIR3unDwC2CQPIrwryRsYsb6%2FkBCwQsHmpiKGJNc1%2F&X-Amz-Signature=cfdfc047bc9e9ce3a4dfecd794107fb4331065a7f6c87cd44a221bb65fa9b59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQV6QBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoW04O7Rywu9scZrwZuGKmTo68F6O9k3LxQTdCUgbDMwIgYcf4RgUXnz269R2o11pHqttbse%2FWyo7LxAuZAuPS6y0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI869tmK2cdkvdjHVyrcA%2FOH6eamcBSZP7aFR08UuXjpJ5ph48Dyyvvwfiiou12VKHmYOjILql7C2zeKOOFxtmmIOEMbPgFAzZWPbfJsAe%2BhlXXb63fS6e77%2F4bPW0xaTrmlS1Y%2F4X9T3W6Vv5NMEURsUIthMXqSUSR601jaJJApzdliSi6E6noHn9byACYADIAcc407Tz4zGUfmZP6UoQGlviuJlisznlNP7zv3w4ZT6b9eRikcZx0tNwcjWhpcwFnptW08jo0YDKDlsFbewkgGse2LL5mnPnqs5NSvVH1OOHCZw73%2BVI4iy7FMRYv1ccxNt0q5lKgr%2By5i80tMax7NcqkR59nCliTvxp4Ed9%2FTelLPq7mL96pSeQj0wLszd%2F%2BFZIRPtG%2BS%2BSbHFOtMA4MhyLyz01NNEws0UCNCvYFrHkaeg9AWJ76FTPFE2bvPLHV0W7L2e7v%2B87MFbry5SsH%2BU%2BAGDfgOTVwJGwP5vcJALLpu7EqWcOA0BZ7UHwRPmlPiFDylmlpfVgrUQRy0JoxcCcNZaEKE3fanDkRNRjywXQh5snSVX6%2Be5rDfU3oaBDjBXpI1nbe5hs2BCIJHxZd3ZH7XTv623SZeP7DcpGJ6J%2FhEv13%2FgeCexmeqCIIG9Ay2uK3IENerjl9iMLL9s8MGOqUBVtsr%2BuUYzQHcreARTB6TvQwa0R3fX3ZWKAUCijquy0imq%2F4%2FYgsmt%2FvTpVoNZrvHRcrL5ZWDQA8ZvLAn1%2BX6Qik8%2FAyl8EWwwNXy%2B2etiUjhDlLhg5F4OulAjOuEG2ojlyDg7JxW6HnwgCQZHBFqMKgikqtNrLQgz%2FMUsbD71N6IErhqqnGIR3unDwC2CQPIrwryRsYsb6%2FkBCwQsHmpiKGJNc1%2F&X-Amz-Signature=0b15f0258b0dda796576540c1345e0dd33d79ab137ba7ac026afdc7e066cd849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQV6QBOR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoW04O7Rywu9scZrwZuGKmTo68F6O9k3LxQTdCUgbDMwIgYcf4RgUXnz269R2o11pHqttbse%2FWyo7LxAuZAuPS6y0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI869tmK2cdkvdjHVyrcA%2FOH6eamcBSZP7aFR08UuXjpJ5ph48Dyyvvwfiiou12VKHmYOjILql7C2zeKOOFxtmmIOEMbPgFAzZWPbfJsAe%2BhlXXb63fS6e77%2F4bPW0xaTrmlS1Y%2F4X9T3W6Vv5NMEURsUIthMXqSUSR601jaJJApzdliSi6E6noHn9byACYADIAcc407Tz4zGUfmZP6UoQGlviuJlisznlNP7zv3w4ZT6b9eRikcZx0tNwcjWhpcwFnptW08jo0YDKDlsFbewkgGse2LL5mnPnqs5NSvVH1OOHCZw73%2BVI4iy7FMRYv1ccxNt0q5lKgr%2By5i80tMax7NcqkR59nCliTvxp4Ed9%2FTelLPq7mL96pSeQj0wLszd%2F%2BFZIRPtG%2BS%2BSbHFOtMA4MhyLyz01NNEws0UCNCvYFrHkaeg9AWJ76FTPFE2bvPLHV0W7L2e7v%2B87MFbry5SsH%2BU%2BAGDfgOTVwJGwP5vcJALLpu7EqWcOA0BZ7UHwRPmlPiFDylmlpfVgrUQRy0JoxcCcNZaEKE3fanDkRNRjywXQh5snSVX6%2Be5rDfU3oaBDjBXpI1nbe5hs2BCIJHxZd3ZH7XTv623SZeP7DcpGJ6J%2FhEv13%2FgeCexmeqCIIG9Ay2uK3IENerjl9iMLL9s8MGOqUBVtsr%2BuUYzQHcreARTB6TvQwa0R3fX3ZWKAUCijquy0imq%2F4%2FYgsmt%2FvTpVoNZrvHRcrL5ZWDQA8ZvLAn1%2BX6Qik8%2FAyl8EWwwNXy%2B2etiUjhDlLhg5F4OulAjOuEG2ojlyDg7JxW6HnwgCQZHBFqMKgikqtNrLQgz%2FMUsbD71N6IErhqqnGIR3unDwC2CQPIrwryRsYsb6%2FkBCwQsHmpiKGJNc1%2F&X-Amz-Signature=905730d27babbc7770ba53fd6e9c85dc80793b80f7b7b9485c19dc2ce6a4c1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
