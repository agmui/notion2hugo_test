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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALG7S2Z%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8meRrGTSvqJDG1%2BXMgaI7paoviNyC6NDkdNoE3FR2YAIgUvJB9y7J05dqsO6JFNGPOHiG1Qjv3jpT4wJ%2Fs%2Fwp2TUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbwZrQn332IVwjqIircA2iRSBp6bDH6mfucjVB%2BbAn73avQ7ydZ7vcrDI%2FFUoQkerE3GcNzr1IzGTJFGAW%2B0iyNaHMdoDV3epnFntpw3ZIE2u38h9aMJB46sZ7ltgLBiUe1JQgXYqdhv1AZYyOjEHQGv3l%2F33Bn0lzjD29RHERrLEPm%2F%2ByK1vRsgj7CrdFH%2FxH4I3HYfhRyUTb6mx42pFmLZi%2BlQpueBBmGR%2FLtyXwcYeiEheeRaB20PAQggipSkJjxvp6947gRReX%2B7ckJFXxbEv%2B5s1hYsYIWAHnfYEg9XyKMfzvXa2GsYOc8gwKq0G8QECNXvlpXci09X1%2BD1skmGgNaLUwJ9aQYdJq3MkYyn0v66k9fbf277WjRyuFJ7yppGRmm9Xqu2VBydiRLRaentptd55YdNx4RD8pU%2Bl8NBbZ78Z%2FVBs%2FBzp0Wwm04BURukpgSwnSYmu7136E3HNx857f83fGFE0HfVqFwTBtRUgGX%2B3lFzWmQNO%2BJrB5W3jgNGSMNkcZBLzHT%2FP9%2FuFx4tgqXfybZnxHJkotcv8SP%2FG%2B2w5IHwJwav9ClVMFt9IakZgucM02V%2BrQIaYSsY9jOGrGwTW5oJlrnpfst8kjWDg858IaA0ifZwVA80S3m4jA%2FErGiyeZ6%2F4D9MI23tdMGOqUBkC2%2FMmK4vzAP6VKrMLZm0QXTHPyrd8veuk4zF6NqVAyBTASGKuYF8HjzDCKIyRqMAATzmGCUCBpwKbOVLulq8lWhFWhHPHkPz7m%2Bn3gpnK3x8qTF6AbXLxNsd2AiMSFzPW0BT0rnicid2ZQSeP1HusjdADEXHn9kzU61Xi5i6O5toNPmz%2FmyupJvxeiM4SH0DzvuTNu9C1Vf93HZVO5HOpSymtdg&X-Amz-Signature=5d359dc7813cc262f7849e99917001d8f09e99de008b1dbe6874940c8f748663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALG7S2Z%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8meRrGTSvqJDG1%2BXMgaI7paoviNyC6NDkdNoE3FR2YAIgUvJB9y7J05dqsO6JFNGPOHiG1Qjv3jpT4wJ%2Fs%2Fwp2TUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbwZrQn332IVwjqIircA2iRSBp6bDH6mfucjVB%2BbAn73avQ7ydZ7vcrDI%2FFUoQkerE3GcNzr1IzGTJFGAW%2B0iyNaHMdoDV3epnFntpw3ZIE2u38h9aMJB46sZ7ltgLBiUe1JQgXYqdhv1AZYyOjEHQGv3l%2F33Bn0lzjD29RHERrLEPm%2F%2ByK1vRsgj7CrdFH%2FxH4I3HYfhRyUTb6mx42pFmLZi%2BlQpueBBmGR%2FLtyXwcYeiEheeRaB20PAQggipSkJjxvp6947gRReX%2B7ckJFXxbEv%2B5s1hYsYIWAHnfYEg9XyKMfzvXa2GsYOc8gwKq0G8QECNXvlpXci09X1%2BD1skmGgNaLUwJ9aQYdJq3MkYyn0v66k9fbf277WjRyuFJ7yppGRmm9Xqu2VBydiRLRaentptd55YdNx4RD8pU%2Bl8NBbZ78Z%2FVBs%2FBzp0Wwm04BURukpgSwnSYmu7136E3HNx857f83fGFE0HfVqFwTBtRUgGX%2B3lFzWmQNO%2BJrB5W3jgNGSMNkcZBLzHT%2FP9%2FuFx4tgqXfybZnxHJkotcv8SP%2FG%2B2w5IHwJwav9ClVMFt9IakZgucM02V%2BrQIaYSsY9jOGrGwTW5oJlrnpfst8kjWDg858IaA0ifZwVA80S3m4jA%2FErGiyeZ6%2F4D9MI23tdMGOqUBkC2%2FMmK4vzAP6VKrMLZm0QXTHPyrd8veuk4zF6NqVAyBTASGKuYF8HjzDCKIyRqMAATzmGCUCBpwKbOVLulq8lWhFWhHPHkPz7m%2Bn3gpnK3x8qTF6AbXLxNsd2AiMSFzPW0BT0rnicid2ZQSeP1HusjdADEXHn9kzU61Xi5i6O5toNPmz%2FmyupJvxeiM4SH0DzvuTNu9C1Vf93HZVO5HOpSymtdg&X-Amz-Signature=70f17af02d92bfccf00954546e4868dcf2f0ad96e59fd56ad4583e5251cffd4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALG7S2Z%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8meRrGTSvqJDG1%2BXMgaI7paoviNyC6NDkdNoE3FR2YAIgUvJB9y7J05dqsO6JFNGPOHiG1Qjv3jpT4wJ%2Fs%2Fwp2TUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbwZrQn332IVwjqIircA2iRSBp6bDH6mfucjVB%2BbAn73avQ7ydZ7vcrDI%2FFUoQkerE3GcNzr1IzGTJFGAW%2B0iyNaHMdoDV3epnFntpw3ZIE2u38h9aMJB46sZ7ltgLBiUe1JQgXYqdhv1AZYyOjEHQGv3l%2F33Bn0lzjD29RHERrLEPm%2F%2ByK1vRsgj7CrdFH%2FxH4I3HYfhRyUTb6mx42pFmLZi%2BlQpueBBmGR%2FLtyXwcYeiEheeRaB20PAQggipSkJjxvp6947gRReX%2B7ckJFXxbEv%2B5s1hYsYIWAHnfYEg9XyKMfzvXa2GsYOc8gwKq0G8QECNXvlpXci09X1%2BD1skmGgNaLUwJ9aQYdJq3MkYyn0v66k9fbf277WjRyuFJ7yppGRmm9Xqu2VBydiRLRaentptd55YdNx4RD8pU%2Bl8NBbZ78Z%2FVBs%2FBzp0Wwm04BURukpgSwnSYmu7136E3HNx857f83fGFE0HfVqFwTBtRUgGX%2B3lFzWmQNO%2BJrB5W3jgNGSMNkcZBLzHT%2FP9%2FuFx4tgqXfybZnxHJkotcv8SP%2FG%2B2w5IHwJwav9ClVMFt9IakZgucM02V%2BrQIaYSsY9jOGrGwTW5oJlrnpfst8kjWDg858IaA0ifZwVA80S3m4jA%2FErGiyeZ6%2F4D9MI23tdMGOqUBkC2%2FMmK4vzAP6VKrMLZm0QXTHPyrd8veuk4zF6NqVAyBTASGKuYF8HjzDCKIyRqMAATzmGCUCBpwKbOVLulq8lWhFWhHPHkPz7m%2Bn3gpnK3x8qTF6AbXLxNsd2AiMSFzPW0BT0rnicid2ZQSeP1HusjdADEXHn9kzU61Xi5i6O5toNPmz%2FmyupJvxeiM4SH0DzvuTNu9C1Vf93HZVO5HOpSymtdg&X-Amz-Signature=0f3b4288cc6fe097050f030e5f5dd4cc498cf83ffc1f5fe0d7e08d99e287721f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALG7S2Z%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8meRrGTSvqJDG1%2BXMgaI7paoviNyC6NDkdNoE3FR2YAIgUvJB9y7J05dqsO6JFNGPOHiG1Qjv3jpT4wJ%2Fs%2Fwp2TUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbwZrQn332IVwjqIircA2iRSBp6bDH6mfucjVB%2BbAn73avQ7ydZ7vcrDI%2FFUoQkerE3GcNzr1IzGTJFGAW%2B0iyNaHMdoDV3epnFntpw3ZIE2u38h9aMJB46sZ7ltgLBiUe1JQgXYqdhv1AZYyOjEHQGv3l%2F33Bn0lzjD29RHERrLEPm%2F%2ByK1vRsgj7CrdFH%2FxH4I3HYfhRyUTb6mx42pFmLZi%2BlQpueBBmGR%2FLtyXwcYeiEheeRaB20PAQggipSkJjxvp6947gRReX%2B7ckJFXxbEv%2B5s1hYsYIWAHnfYEg9XyKMfzvXa2GsYOc8gwKq0G8QECNXvlpXci09X1%2BD1skmGgNaLUwJ9aQYdJq3MkYyn0v66k9fbf277WjRyuFJ7yppGRmm9Xqu2VBydiRLRaentptd55YdNx4RD8pU%2Bl8NBbZ78Z%2FVBs%2FBzp0Wwm04BURukpgSwnSYmu7136E3HNx857f83fGFE0HfVqFwTBtRUgGX%2B3lFzWmQNO%2BJrB5W3jgNGSMNkcZBLzHT%2FP9%2FuFx4tgqXfybZnxHJkotcv8SP%2FG%2B2w5IHwJwav9ClVMFt9IakZgucM02V%2BrQIaYSsY9jOGrGwTW5oJlrnpfst8kjWDg858IaA0ifZwVA80S3m4jA%2FErGiyeZ6%2F4D9MI23tdMGOqUBkC2%2FMmK4vzAP6VKrMLZm0QXTHPyrd8veuk4zF6NqVAyBTASGKuYF8HjzDCKIyRqMAATzmGCUCBpwKbOVLulq8lWhFWhHPHkPz7m%2Bn3gpnK3x8qTF6AbXLxNsd2AiMSFzPW0BT0rnicid2ZQSeP1HusjdADEXHn9kzU61Xi5i6O5toNPmz%2FmyupJvxeiM4SH0DzvuTNu9C1Vf93HZVO5HOpSymtdg&X-Amz-Signature=2beb2bd92fc05f297e7bcbeaf28eed756dc309186403aadd64c635edf56ca701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALG7S2Z%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8meRrGTSvqJDG1%2BXMgaI7paoviNyC6NDkdNoE3FR2YAIgUvJB9y7J05dqsO6JFNGPOHiG1Qjv3jpT4wJ%2Fs%2Fwp2TUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbwZrQn332IVwjqIircA2iRSBp6bDH6mfucjVB%2BbAn73avQ7ydZ7vcrDI%2FFUoQkerE3GcNzr1IzGTJFGAW%2B0iyNaHMdoDV3epnFntpw3ZIE2u38h9aMJB46sZ7ltgLBiUe1JQgXYqdhv1AZYyOjEHQGv3l%2F33Bn0lzjD29RHERrLEPm%2F%2ByK1vRsgj7CrdFH%2FxH4I3HYfhRyUTb6mx42pFmLZi%2BlQpueBBmGR%2FLtyXwcYeiEheeRaB20PAQggipSkJjxvp6947gRReX%2B7ckJFXxbEv%2B5s1hYsYIWAHnfYEg9XyKMfzvXa2GsYOc8gwKq0G8QECNXvlpXci09X1%2BD1skmGgNaLUwJ9aQYdJq3MkYyn0v66k9fbf277WjRyuFJ7yppGRmm9Xqu2VBydiRLRaentptd55YdNx4RD8pU%2Bl8NBbZ78Z%2FVBs%2FBzp0Wwm04BURukpgSwnSYmu7136E3HNx857f83fGFE0HfVqFwTBtRUgGX%2B3lFzWmQNO%2BJrB5W3jgNGSMNkcZBLzHT%2FP9%2FuFx4tgqXfybZnxHJkotcv8SP%2FG%2B2w5IHwJwav9ClVMFt9IakZgucM02V%2BrQIaYSsY9jOGrGwTW5oJlrnpfst8kjWDg858IaA0ifZwVA80S3m4jA%2FErGiyeZ6%2F4D9MI23tdMGOqUBkC2%2FMmK4vzAP6VKrMLZm0QXTHPyrd8veuk4zF6NqVAyBTASGKuYF8HjzDCKIyRqMAATzmGCUCBpwKbOVLulq8lWhFWhHPHkPz7m%2Bn3gpnK3x8qTF6AbXLxNsd2AiMSFzPW0BT0rnicid2ZQSeP1HusjdADEXHn9kzU61Xi5i6O5toNPmz%2FmyupJvxeiM4SH0DzvuTNu9C1Vf93HZVO5HOpSymtdg&X-Amz-Signature=5f9ed70aaf91963502741e71b670bd4f45419c1acff41d566a2b8723690e898b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALG7S2Z%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8meRrGTSvqJDG1%2BXMgaI7paoviNyC6NDkdNoE3FR2YAIgUvJB9y7J05dqsO6JFNGPOHiG1Qjv3jpT4wJ%2Fs%2Fwp2TUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbwZrQn332IVwjqIircA2iRSBp6bDH6mfucjVB%2BbAn73avQ7ydZ7vcrDI%2FFUoQkerE3GcNzr1IzGTJFGAW%2B0iyNaHMdoDV3epnFntpw3ZIE2u38h9aMJB46sZ7ltgLBiUe1JQgXYqdhv1AZYyOjEHQGv3l%2F33Bn0lzjD29RHERrLEPm%2F%2ByK1vRsgj7CrdFH%2FxH4I3HYfhRyUTb6mx42pFmLZi%2BlQpueBBmGR%2FLtyXwcYeiEheeRaB20PAQggipSkJjxvp6947gRReX%2B7ckJFXxbEv%2B5s1hYsYIWAHnfYEg9XyKMfzvXa2GsYOc8gwKq0G8QECNXvlpXci09X1%2BD1skmGgNaLUwJ9aQYdJq3MkYyn0v66k9fbf277WjRyuFJ7yppGRmm9Xqu2VBydiRLRaentptd55YdNx4RD8pU%2Bl8NBbZ78Z%2FVBs%2FBzp0Wwm04BURukpgSwnSYmu7136E3HNx857f83fGFE0HfVqFwTBtRUgGX%2B3lFzWmQNO%2BJrB5W3jgNGSMNkcZBLzHT%2FP9%2FuFx4tgqXfybZnxHJkotcv8SP%2FG%2B2w5IHwJwav9ClVMFt9IakZgucM02V%2BrQIaYSsY9jOGrGwTW5oJlrnpfst8kjWDg858IaA0ifZwVA80S3m4jA%2FErGiyeZ6%2F4D9MI23tdMGOqUBkC2%2FMmK4vzAP6VKrMLZm0QXTHPyrd8veuk4zF6NqVAyBTASGKuYF8HjzDCKIyRqMAATzmGCUCBpwKbOVLulq8lWhFWhHPHkPz7m%2Bn3gpnK3x8qTF6AbXLxNsd2AiMSFzPW0BT0rnicid2ZQSeP1HusjdADEXHn9kzU61Xi5i6O5toNPmz%2FmyupJvxeiM4SH0DzvuTNu9C1Vf93HZVO5HOpSymtdg&X-Amz-Signature=831ff6839fccddc7fb81ee4ab1a1e22a35063adb8b510bbf2bc70da643b5f577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALG7S2Z%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8meRrGTSvqJDG1%2BXMgaI7paoviNyC6NDkdNoE3FR2YAIgUvJB9y7J05dqsO6JFNGPOHiG1Qjv3jpT4wJ%2Fs%2Fwp2TUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbwZrQn332IVwjqIircA2iRSBp6bDH6mfucjVB%2BbAn73avQ7ydZ7vcrDI%2FFUoQkerE3GcNzr1IzGTJFGAW%2B0iyNaHMdoDV3epnFntpw3ZIE2u38h9aMJB46sZ7ltgLBiUe1JQgXYqdhv1AZYyOjEHQGv3l%2F33Bn0lzjD29RHERrLEPm%2F%2ByK1vRsgj7CrdFH%2FxH4I3HYfhRyUTb6mx42pFmLZi%2BlQpueBBmGR%2FLtyXwcYeiEheeRaB20PAQggipSkJjxvp6947gRReX%2B7ckJFXxbEv%2B5s1hYsYIWAHnfYEg9XyKMfzvXa2GsYOc8gwKq0G8QECNXvlpXci09X1%2BD1skmGgNaLUwJ9aQYdJq3MkYyn0v66k9fbf277WjRyuFJ7yppGRmm9Xqu2VBydiRLRaentptd55YdNx4RD8pU%2Bl8NBbZ78Z%2FVBs%2FBzp0Wwm04BURukpgSwnSYmu7136E3HNx857f83fGFE0HfVqFwTBtRUgGX%2B3lFzWmQNO%2BJrB5W3jgNGSMNkcZBLzHT%2FP9%2FuFx4tgqXfybZnxHJkotcv8SP%2FG%2B2w5IHwJwav9ClVMFt9IakZgucM02V%2BrQIaYSsY9jOGrGwTW5oJlrnpfst8kjWDg858IaA0ifZwVA80S3m4jA%2FErGiyeZ6%2F4D9MI23tdMGOqUBkC2%2FMmK4vzAP6VKrMLZm0QXTHPyrd8veuk4zF6NqVAyBTASGKuYF8HjzDCKIyRqMAATzmGCUCBpwKbOVLulq8lWhFWhHPHkPz7m%2Bn3gpnK3x8qTF6AbXLxNsd2AiMSFzPW0BT0rnicid2ZQSeP1HusjdADEXHn9kzU61Xi5i6O5toNPmz%2FmyupJvxeiM4SH0DzvuTNu9C1Vf93HZVO5HOpSymtdg&X-Amz-Signature=6301e8b26d11dab2f9c7420ef90b2a58d5becdd1c175240776d9120054189eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RALG7S2Z%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8meRrGTSvqJDG1%2BXMgaI7paoviNyC6NDkdNoE3FR2YAIgUvJB9y7J05dqsO6JFNGPOHiG1Qjv3jpT4wJ%2Fs%2Fwp2TUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbwZrQn332IVwjqIircA2iRSBp6bDH6mfucjVB%2BbAn73avQ7ydZ7vcrDI%2FFUoQkerE3GcNzr1IzGTJFGAW%2B0iyNaHMdoDV3epnFntpw3ZIE2u38h9aMJB46sZ7ltgLBiUe1JQgXYqdhv1AZYyOjEHQGv3l%2F33Bn0lzjD29RHERrLEPm%2F%2ByK1vRsgj7CrdFH%2FxH4I3HYfhRyUTb6mx42pFmLZi%2BlQpueBBmGR%2FLtyXwcYeiEheeRaB20PAQggipSkJjxvp6947gRReX%2B7ckJFXxbEv%2B5s1hYsYIWAHnfYEg9XyKMfzvXa2GsYOc8gwKq0G8QECNXvlpXci09X1%2BD1skmGgNaLUwJ9aQYdJq3MkYyn0v66k9fbf277WjRyuFJ7yppGRmm9Xqu2VBydiRLRaentptd55YdNx4RD8pU%2Bl8NBbZ78Z%2FVBs%2FBzp0Wwm04BURukpgSwnSYmu7136E3HNx857f83fGFE0HfVqFwTBtRUgGX%2B3lFzWmQNO%2BJrB5W3jgNGSMNkcZBLzHT%2FP9%2FuFx4tgqXfybZnxHJkotcv8SP%2FG%2B2w5IHwJwav9ClVMFt9IakZgucM02V%2BrQIaYSsY9jOGrGwTW5oJlrnpfst8kjWDg858IaA0ifZwVA80S3m4jA%2FErGiyeZ6%2F4D9MI23tdMGOqUBkC2%2FMmK4vzAP6VKrMLZm0QXTHPyrd8veuk4zF6NqVAyBTASGKuYF8HjzDCKIyRqMAATzmGCUCBpwKbOVLulq8lWhFWhHPHkPz7m%2Bn3gpnK3x8qTF6AbXLxNsd2AiMSFzPW0BT0rnicid2ZQSeP1HusjdADEXHn9kzU61Xi5i6O5toNPmz%2FmyupJvxeiM4SH0DzvuTNu9C1Vf93HZVO5HOpSymtdg&X-Amz-Signature=7ec2769abfc0f27cc1b92db90d2916523f399fab6b6b5d9dc4ae80a415839696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
