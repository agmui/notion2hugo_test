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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFWS5OW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDw33znZrCxD4OgI3lOAoDvNlAmeMsJb16AMbMd%2FGcQRwIgTWdOseUQHz%2BpysaRHlD5hWRA7TmFO1kaoB1tKpL5Xcgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDA7fSanbLkuMkhPOcyrcA7RrsM9YIczEdfjUfMMTN6wrKuYdjIjYN0mV4UYNJgRhkg3pa2Hm8ZQb7MV1pQI9HSoimA%2FhANa97iVT%2Fey1L7A2W%2FhuAUuxh7Mseuw0QY73OGlcRU9am7bCSlMrthMPDk85rpUEqRuat1RJmrZXLxQEefEczetP0Qc62rKI3pHs%2BOHPKQo%2BRNSVZ4elIcDpMTFSR6DLsimWLH81Ks5Nt0D0ejesfB7fzCs0mIgg5iB2u3d%2BXshsvcSEUy0lR0iEjUSy3qlQek%2BdYQ%2BT1yw9U%2Few7H7OT1dIfgXX2qvwzZ04ZRq%2F7VgJfDJLd%2Fsx1XBGll5z7Yu9%2FTK1jU%2F%2FIKi3l1xZuepVu1I7oCvET%2BG%2FvTDXN3l5QzEwskcwzUZtTqMvZwJwcA0lMn4y4JA2gn2zqgL1owcWrkdze9%2Bp5IuPPeuoDJgvM9a5II1I%2Fe2ORCsOMMNf6GkMw2ml5NvFmOroot7BAV8SkUbFmSw2R049xvMD7wDbedTgJvG7bMoO8e2IXcKOm15zIu7mRAFzcIB2mc7sG8kiITSsQCvdav8r2ahQo1ov9zSkCtmonMGYZgKuDuBDIqqQKvbLx%2BujSUQnBZ2VYuhCAp5%2FyuGW7tU6dbELXKJfPmNxFHAcRenDMJL%2FzMEGOqUBfMQz0oVpm2%2BG5yqU1IaOt%2F8oAjC%2BVAWWMNg38gSSDIEZtI8ZWAM%2BG9rmN4fAIJqbQ44IWHcSRdn6yeKlWaLYNRLOVMsu%2FsX1WWuwS3Ms1pVxPQ9Hd5h6j2grS%2BUDAnq1eAB0o20gcaE4bz48jFsuBG53ULgLKLlFYykllXVhyS8zra8fkMWy8%2BiRGYrkxC5vii5dFOzo6RQjKiALs50MS93kkvs3&X-Amz-Signature=81430b66d878b5a26bd9c0c5d10f20f452e606f77d6d41468e7f522108636c56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFWS5OW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDw33znZrCxD4OgI3lOAoDvNlAmeMsJb16AMbMd%2FGcQRwIgTWdOseUQHz%2BpysaRHlD5hWRA7TmFO1kaoB1tKpL5Xcgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDA7fSanbLkuMkhPOcyrcA7RrsM9YIczEdfjUfMMTN6wrKuYdjIjYN0mV4UYNJgRhkg3pa2Hm8ZQb7MV1pQI9HSoimA%2FhANa97iVT%2Fey1L7A2W%2FhuAUuxh7Mseuw0QY73OGlcRU9am7bCSlMrthMPDk85rpUEqRuat1RJmrZXLxQEefEczetP0Qc62rKI3pHs%2BOHPKQo%2BRNSVZ4elIcDpMTFSR6DLsimWLH81Ks5Nt0D0ejesfB7fzCs0mIgg5iB2u3d%2BXshsvcSEUy0lR0iEjUSy3qlQek%2BdYQ%2BT1yw9U%2Few7H7OT1dIfgXX2qvwzZ04ZRq%2F7VgJfDJLd%2Fsx1XBGll5z7Yu9%2FTK1jU%2F%2FIKi3l1xZuepVu1I7oCvET%2BG%2FvTDXN3l5QzEwskcwzUZtTqMvZwJwcA0lMn4y4JA2gn2zqgL1owcWrkdze9%2Bp5IuPPeuoDJgvM9a5II1I%2Fe2ORCsOMMNf6GkMw2ml5NvFmOroot7BAV8SkUbFmSw2R049xvMD7wDbedTgJvG7bMoO8e2IXcKOm15zIu7mRAFzcIB2mc7sG8kiITSsQCvdav8r2ahQo1ov9zSkCtmonMGYZgKuDuBDIqqQKvbLx%2BujSUQnBZ2VYuhCAp5%2FyuGW7tU6dbELXKJfPmNxFHAcRenDMJL%2FzMEGOqUBfMQz0oVpm2%2BG5yqU1IaOt%2F8oAjC%2BVAWWMNg38gSSDIEZtI8ZWAM%2BG9rmN4fAIJqbQ44IWHcSRdn6yeKlWaLYNRLOVMsu%2FsX1WWuwS3Ms1pVxPQ9Hd5h6j2grS%2BUDAnq1eAB0o20gcaE4bz48jFsuBG53ULgLKLlFYykllXVhyS8zra8fkMWy8%2BiRGYrkxC5vii5dFOzo6RQjKiALs50MS93kkvs3&X-Amz-Signature=dc0513a7c761d0c586d4cc0545be676b3bd75a670300210bfbd7b27a8aea6178&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFWS5OW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDw33znZrCxD4OgI3lOAoDvNlAmeMsJb16AMbMd%2FGcQRwIgTWdOseUQHz%2BpysaRHlD5hWRA7TmFO1kaoB1tKpL5Xcgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDA7fSanbLkuMkhPOcyrcA7RrsM9YIczEdfjUfMMTN6wrKuYdjIjYN0mV4UYNJgRhkg3pa2Hm8ZQb7MV1pQI9HSoimA%2FhANa97iVT%2Fey1L7A2W%2FhuAUuxh7Mseuw0QY73OGlcRU9am7bCSlMrthMPDk85rpUEqRuat1RJmrZXLxQEefEczetP0Qc62rKI3pHs%2BOHPKQo%2BRNSVZ4elIcDpMTFSR6DLsimWLH81Ks5Nt0D0ejesfB7fzCs0mIgg5iB2u3d%2BXshsvcSEUy0lR0iEjUSy3qlQek%2BdYQ%2BT1yw9U%2Few7H7OT1dIfgXX2qvwzZ04ZRq%2F7VgJfDJLd%2Fsx1XBGll5z7Yu9%2FTK1jU%2F%2FIKi3l1xZuepVu1I7oCvET%2BG%2FvTDXN3l5QzEwskcwzUZtTqMvZwJwcA0lMn4y4JA2gn2zqgL1owcWrkdze9%2Bp5IuPPeuoDJgvM9a5II1I%2Fe2ORCsOMMNf6GkMw2ml5NvFmOroot7BAV8SkUbFmSw2R049xvMD7wDbedTgJvG7bMoO8e2IXcKOm15zIu7mRAFzcIB2mc7sG8kiITSsQCvdav8r2ahQo1ov9zSkCtmonMGYZgKuDuBDIqqQKvbLx%2BujSUQnBZ2VYuhCAp5%2FyuGW7tU6dbELXKJfPmNxFHAcRenDMJL%2FzMEGOqUBfMQz0oVpm2%2BG5yqU1IaOt%2F8oAjC%2BVAWWMNg38gSSDIEZtI8ZWAM%2BG9rmN4fAIJqbQ44IWHcSRdn6yeKlWaLYNRLOVMsu%2FsX1WWuwS3Ms1pVxPQ9Hd5h6j2grS%2BUDAnq1eAB0o20gcaE4bz48jFsuBG53ULgLKLlFYykllXVhyS8zra8fkMWy8%2BiRGYrkxC5vii5dFOzo6RQjKiALs50MS93kkvs3&X-Amz-Signature=3e7f57f3daf3f84bec68235335c7c40a89027a3283323769f062d00e1cc6d3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFWS5OW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDw33znZrCxD4OgI3lOAoDvNlAmeMsJb16AMbMd%2FGcQRwIgTWdOseUQHz%2BpysaRHlD5hWRA7TmFO1kaoB1tKpL5Xcgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDA7fSanbLkuMkhPOcyrcA7RrsM9YIczEdfjUfMMTN6wrKuYdjIjYN0mV4UYNJgRhkg3pa2Hm8ZQb7MV1pQI9HSoimA%2FhANa97iVT%2Fey1L7A2W%2FhuAUuxh7Mseuw0QY73OGlcRU9am7bCSlMrthMPDk85rpUEqRuat1RJmrZXLxQEefEczetP0Qc62rKI3pHs%2BOHPKQo%2BRNSVZ4elIcDpMTFSR6DLsimWLH81Ks5Nt0D0ejesfB7fzCs0mIgg5iB2u3d%2BXshsvcSEUy0lR0iEjUSy3qlQek%2BdYQ%2BT1yw9U%2Few7H7OT1dIfgXX2qvwzZ04ZRq%2F7VgJfDJLd%2Fsx1XBGll5z7Yu9%2FTK1jU%2F%2FIKi3l1xZuepVu1I7oCvET%2BG%2FvTDXN3l5QzEwskcwzUZtTqMvZwJwcA0lMn4y4JA2gn2zqgL1owcWrkdze9%2Bp5IuPPeuoDJgvM9a5II1I%2Fe2ORCsOMMNf6GkMw2ml5NvFmOroot7BAV8SkUbFmSw2R049xvMD7wDbedTgJvG7bMoO8e2IXcKOm15zIu7mRAFzcIB2mc7sG8kiITSsQCvdav8r2ahQo1ov9zSkCtmonMGYZgKuDuBDIqqQKvbLx%2BujSUQnBZ2VYuhCAp5%2FyuGW7tU6dbELXKJfPmNxFHAcRenDMJL%2FzMEGOqUBfMQz0oVpm2%2BG5yqU1IaOt%2F8oAjC%2BVAWWMNg38gSSDIEZtI8ZWAM%2BG9rmN4fAIJqbQ44IWHcSRdn6yeKlWaLYNRLOVMsu%2FsX1WWuwS3Ms1pVxPQ9Hd5h6j2grS%2BUDAnq1eAB0o20gcaE4bz48jFsuBG53ULgLKLlFYykllXVhyS8zra8fkMWy8%2BiRGYrkxC5vii5dFOzo6RQjKiALs50MS93kkvs3&X-Amz-Signature=0eddfd521be855e4e6d5981e804a46a7c6445ae775d4ac91c50a9bc0edfe0ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFWS5OW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDw33znZrCxD4OgI3lOAoDvNlAmeMsJb16AMbMd%2FGcQRwIgTWdOseUQHz%2BpysaRHlD5hWRA7TmFO1kaoB1tKpL5Xcgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDA7fSanbLkuMkhPOcyrcA7RrsM9YIczEdfjUfMMTN6wrKuYdjIjYN0mV4UYNJgRhkg3pa2Hm8ZQb7MV1pQI9HSoimA%2FhANa97iVT%2Fey1L7A2W%2FhuAUuxh7Mseuw0QY73OGlcRU9am7bCSlMrthMPDk85rpUEqRuat1RJmrZXLxQEefEczetP0Qc62rKI3pHs%2BOHPKQo%2BRNSVZ4elIcDpMTFSR6DLsimWLH81Ks5Nt0D0ejesfB7fzCs0mIgg5iB2u3d%2BXshsvcSEUy0lR0iEjUSy3qlQek%2BdYQ%2BT1yw9U%2Few7H7OT1dIfgXX2qvwzZ04ZRq%2F7VgJfDJLd%2Fsx1XBGll5z7Yu9%2FTK1jU%2F%2FIKi3l1xZuepVu1I7oCvET%2BG%2FvTDXN3l5QzEwskcwzUZtTqMvZwJwcA0lMn4y4JA2gn2zqgL1owcWrkdze9%2Bp5IuPPeuoDJgvM9a5II1I%2Fe2ORCsOMMNf6GkMw2ml5NvFmOroot7BAV8SkUbFmSw2R049xvMD7wDbedTgJvG7bMoO8e2IXcKOm15zIu7mRAFzcIB2mc7sG8kiITSsQCvdav8r2ahQo1ov9zSkCtmonMGYZgKuDuBDIqqQKvbLx%2BujSUQnBZ2VYuhCAp5%2FyuGW7tU6dbELXKJfPmNxFHAcRenDMJL%2FzMEGOqUBfMQz0oVpm2%2BG5yqU1IaOt%2F8oAjC%2BVAWWMNg38gSSDIEZtI8ZWAM%2BG9rmN4fAIJqbQ44IWHcSRdn6yeKlWaLYNRLOVMsu%2FsX1WWuwS3Ms1pVxPQ9Hd5h6j2grS%2BUDAnq1eAB0o20gcaE4bz48jFsuBG53ULgLKLlFYykllXVhyS8zra8fkMWy8%2BiRGYrkxC5vii5dFOzo6RQjKiALs50MS93kkvs3&X-Amz-Signature=57883a4823f0f2bcdbf9ed6985332a3b54714e10ca6bb733f23b04785bb31e09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFWS5OW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDw33znZrCxD4OgI3lOAoDvNlAmeMsJb16AMbMd%2FGcQRwIgTWdOseUQHz%2BpysaRHlD5hWRA7TmFO1kaoB1tKpL5Xcgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDA7fSanbLkuMkhPOcyrcA7RrsM9YIczEdfjUfMMTN6wrKuYdjIjYN0mV4UYNJgRhkg3pa2Hm8ZQb7MV1pQI9HSoimA%2FhANa97iVT%2Fey1L7A2W%2FhuAUuxh7Mseuw0QY73OGlcRU9am7bCSlMrthMPDk85rpUEqRuat1RJmrZXLxQEefEczetP0Qc62rKI3pHs%2BOHPKQo%2BRNSVZ4elIcDpMTFSR6DLsimWLH81Ks5Nt0D0ejesfB7fzCs0mIgg5iB2u3d%2BXshsvcSEUy0lR0iEjUSy3qlQek%2BdYQ%2BT1yw9U%2Few7H7OT1dIfgXX2qvwzZ04ZRq%2F7VgJfDJLd%2Fsx1XBGll5z7Yu9%2FTK1jU%2F%2FIKi3l1xZuepVu1I7oCvET%2BG%2FvTDXN3l5QzEwskcwzUZtTqMvZwJwcA0lMn4y4JA2gn2zqgL1owcWrkdze9%2Bp5IuPPeuoDJgvM9a5II1I%2Fe2ORCsOMMNf6GkMw2ml5NvFmOroot7BAV8SkUbFmSw2R049xvMD7wDbedTgJvG7bMoO8e2IXcKOm15zIu7mRAFzcIB2mc7sG8kiITSsQCvdav8r2ahQo1ov9zSkCtmonMGYZgKuDuBDIqqQKvbLx%2BujSUQnBZ2VYuhCAp5%2FyuGW7tU6dbELXKJfPmNxFHAcRenDMJL%2FzMEGOqUBfMQz0oVpm2%2BG5yqU1IaOt%2F8oAjC%2BVAWWMNg38gSSDIEZtI8ZWAM%2BG9rmN4fAIJqbQ44IWHcSRdn6yeKlWaLYNRLOVMsu%2FsX1WWuwS3Ms1pVxPQ9Hd5h6j2grS%2BUDAnq1eAB0o20gcaE4bz48jFsuBG53ULgLKLlFYykllXVhyS8zra8fkMWy8%2BiRGYrkxC5vii5dFOzo6RQjKiALs50MS93kkvs3&X-Amz-Signature=7e9d8ac104803e9a553df71bb600deef2d58a01c9df9a119a683bd6cbbb6ccc1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFWS5OW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDw33znZrCxD4OgI3lOAoDvNlAmeMsJb16AMbMd%2FGcQRwIgTWdOseUQHz%2BpysaRHlD5hWRA7TmFO1kaoB1tKpL5Xcgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDA7fSanbLkuMkhPOcyrcA7RrsM9YIczEdfjUfMMTN6wrKuYdjIjYN0mV4UYNJgRhkg3pa2Hm8ZQb7MV1pQI9HSoimA%2FhANa97iVT%2Fey1L7A2W%2FhuAUuxh7Mseuw0QY73OGlcRU9am7bCSlMrthMPDk85rpUEqRuat1RJmrZXLxQEefEczetP0Qc62rKI3pHs%2BOHPKQo%2BRNSVZ4elIcDpMTFSR6DLsimWLH81Ks5Nt0D0ejesfB7fzCs0mIgg5iB2u3d%2BXshsvcSEUy0lR0iEjUSy3qlQek%2BdYQ%2BT1yw9U%2Few7H7OT1dIfgXX2qvwzZ04ZRq%2F7VgJfDJLd%2Fsx1XBGll5z7Yu9%2FTK1jU%2F%2FIKi3l1xZuepVu1I7oCvET%2BG%2FvTDXN3l5QzEwskcwzUZtTqMvZwJwcA0lMn4y4JA2gn2zqgL1owcWrkdze9%2Bp5IuPPeuoDJgvM9a5II1I%2Fe2ORCsOMMNf6GkMw2ml5NvFmOroot7BAV8SkUbFmSw2R049xvMD7wDbedTgJvG7bMoO8e2IXcKOm15zIu7mRAFzcIB2mc7sG8kiITSsQCvdav8r2ahQo1ov9zSkCtmonMGYZgKuDuBDIqqQKvbLx%2BujSUQnBZ2VYuhCAp5%2FyuGW7tU6dbELXKJfPmNxFHAcRenDMJL%2FzMEGOqUBfMQz0oVpm2%2BG5yqU1IaOt%2F8oAjC%2BVAWWMNg38gSSDIEZtI8ZWAM%2BG9rmN4fAIJqbQ44IWHcSRdn6yeKlWaLYNRLOVMsu%2FsX1WWuwS3Ms1pVxPQ9Hd5h6j2grS%2BUDAnq1eAB0o20gcaE4bz48jFsuBG53ULgLKLlFYykllXVhyS8zra8fkMWy8%2BiRGYrkxC5vii5dFOzo6RQjKiALs50MS93kkvs3&X-Amz-Signature=25d19b84ecde9084ad4958d2009b0d7300963c1048ea913418a0e0bdb40e9dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFWS5OW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDw33znZrCxD4OgI3lOAoDvNlAmeMsJb16AMbMd%2FGcQRwIgTWdOseUQHz%2BpysaRHlD5hWRA7TmFO1kaoB1tKpL5Xcgq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDA7fSanbLkuMkhPOcyrcA7RrsM9YIczEdfjUfMMTN6wrKuYdjIjYN0mV4UYNJgRhkg3pa2Hm8ZQb7MV1pQI9HSoimA%2FhANa97iVT%2Fey1L7A2W%2FhuAUuxh7Mseuw0QY73OGlcRU9am7bCSlMrthMPDk85rpUEqRuat1RJmrZXLxQEefEczetP0Qc62rKI3pHs%2BOHPKQo%2BRNSVZ4elIcDpMTFSR6DLsimWLH81Ks5Nt0D0ejesfB7fzCs0mIgg5iB2u3d%2BXshsvcSEUy0lR0iEjUSy3qlQek%2BdYQ%2BT1yw9U%2Few7H7OT1dIfgXX2qvwzZ04ZRq%2F7VgJfDJLd%2Fsx1XBGll5z7Yu9%2FTK1jU%2F%2FIKi3l1xZuepVu1I7oCvET%2BG%2FvTDXN3l5QzEwskcwzUZtTqMvZwJwcA0lMn4y4JA2gn2zqgL1owcWrkdze9%2Bp5IuPPeuoDJgvM9a5II1I%2Fe2ORCsOMMNf6GkMw2ml5NvFmOroot7BAV8SkUbFmSw2R049xvMD7wDbedTgJvG7bMoO8e2IXcKOm15zIu7mRAFzcIB2mc7sG8kiITSsQCvdav8r2ahQo1ov9zSkCtmonMGYZgKuDuBDIqqQKvbLx%2BujSUQnBZ2VYuhCAp5%2FyuGW7tU6dbELXKJfPmNxFHAcRenDMJL%2FzMEGOqUBfMQz0oVpm2%2BG5yqU1IaOt%2F8oAjC%2BVAWWMNg38gSSDIEZtI8ZWAM%2BG9rmN4fAIJqbQ44IWHcSRdn6yeKlWaLYNRLOVMsu%2FsX1WWuwS3Ms1pVxPQ9Hd5h6j2grS%2BUDAnq1eAB0o20gcaE4bz48jFsuBG53ULgLKLlFYykllXVhyS8zra8fkMWy8%2BiRGYrkxC5vii5dFOzo6RQjKiALs50MS93kkvs3&X-Amz-Signature=6eccc07a8956fe6c88f6d362882dc2df94294e23d721b25898f95acda525ce38&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
