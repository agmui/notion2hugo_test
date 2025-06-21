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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANUL6C2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH55SRfEvZcWfZ4rmEvUxjDA9lKpwwsHOpgLrqHFE%2FNdAiEAluTuXnwH80VCRmxmsmqOhAlbhjnQwd8bbIAVyN4ed2MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZGVeDUbujXFa%2BcaircA8W5zWTqC6pa3qVHkCwaBIkHTmtFowF0lo8wCo48612MrjcFL68aCVRI8aJt1cTF8iu3QGJ8NQi%2FaTWen11j%2B5YDTb2Dv7hpP1tWwB%2BiGkdP3dBgL8LSzFlICU00cZkQ3e0GHjVnIrK4yy4W8cSzmueLyStP6U%2FFtBHE%2F9NNY0PO0gkfqFWaUHpx0cTRjwrYvDCHzhiFfVQWU0SgG7QPEjAfsZ6ZsGhzxAZY4ttvb4nDQBLkihL8yZroPWvkP4T95BX6gLvdDjoBXc8OSguHQXYCDoCLpmJ5aSP8GIpILh2HTc8VuNj6IydknIuO2PSWjXIVU24YwVL4uk6ec4pbZNLZGQmGRr9SL91rCCZGnrTI5HSIgctoWBKAgL5zCB8t9XqOo6Ry3zb9kOxXB7Yp4Vhlu1CZaHqyPWV2Odhp0hQ19rJxa8YbPr1dVo3rTTvL32rrdRzueYPjb79GSl0C9Vc0ezw5jN1E29UDVc6G78ykUYTfJ6vLpMCmUbJdHyy48r1uZWISRUcRhe9m0e3sSNCL726VGkg%2BN9vm%2FhO1%2FG%2FOYJwQFl5fHyFHJpbJmjmaxD5f0kyaCUHwyb5JTziwM0X08WxsSqzmPj%2BdDmC52BU1saMKXDVFF4Np0J4IMNPW2cIGOqUBeksGjs%2F%2Bnwew01rT3guG%2BZvPdHS4zJQtxIp517ByF4Doqbm3Cv8wrWY3GyvawUh9MN3JgZabxuH0l2pr1PRygH6WnXan0BeVxJpNbwtotCz6CvmXCfdgGsYkt%2Bi%2FjuzjqU1t3hexGVhZaHFRez%2BLqXlqHnSrGJ9aTGjqV8RMAEr1RGSK%2BbdOnMGYSCZK10ah27SKaaj%2F%2B7o%2Binn%2FpLCmw1Rj60aF&X-Amz-Signature=31ae9260217511bcf57f35b97a23ba92d245edc9895ba6e66447e4cd92a25d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANUL6C2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH55SRfEvZcWfZ4rmEvUxjDA9lKpwwsHOpgLrqHFE%2FNdAiEAluTuXnwH80VCRmxmsmqOhAlbhjnQwd8bbIAVyN4ed2MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZGVeDUbujXFa%2BcaircA8W5zWTqC6pa3qVHkCwaBIkHTmtFowF0lo8wCo48612MrjcFL68aCVRI8aJt1cTF8iu3QGJ8NQi%2FaTWen11j%2B5YDTb2Dv7hpP1tWwB%2BiGkdP3dBgL8LSzFlICU00cZkQ3e0GHjVnIrK4yy4W8cSzmueLyStP6U%2FFtBHE%2F9NNY0PO0gkfqFWaUHpx0cTRjwrYvDCHzhiFfVQWU0SgG7QPEjAfsZ6ZsGhzxAZY4ttvb4nDQBLkihL8yZroPWvkP4T95BX6gLvdDjoBXc8OSguHQXYCDoCLpmJ5aSP8GIpILh2HTc8VuNj6IydknIuO2PSWjXIVU24YwVL4uk6ec4pbZNLZGQmGRr9SL91rCCZGnrTI5HSIgctoWBKAgL5zCB8t9XqOo6Ry3zb9kOxXB7Yp4Vhlu1CZaHqyPWV2Odhp0hQ19rJxa8YbPr1dVo3rTTvL32rrdRzueYPjb79GSl0C9Vc0ezw5jN1E29UDVc6G78ykUYTfJ6vLpMCmUbJdHyy48r1uZWISRUcRhe9m0e3sSNCL726VGkg%2BN9vm%2FhO1%2FG%2FOYJwQFl5fHyFHJpbJmjmaxD5f0kyaCUHwyb5JTziwM0X08WxsSqzmPj%2BdDmC52BU1saMKXDVFF4Np0J4IMNPW2cIGOqUBeksGjs%2F%2Bnwew01rT3guG%2BZvPdHS4zJQtxIp517ByF4Doqbm3Cv8wrWY3GyvawUh9MN3JgZabxuH0l2pr1PRygH6WnXan0BeVxJpNbwtotCz6CvmXCfdgGsYkt%2Bi%2FjuzjqU1t3hexGVhZaHFRez%2BLqXlqHnSrGJ9aTGjqV8RMAEr1RGSK%2BbdOnMGYSCZK10ah27SKaaj%2F%2B7o%2Binn%2FpLCmw1Rj60aF&X-Amz-Signature=df78f225e3ae22c770726e12ab8dc9f1422200b615fd9d20c2ce02cdcd800b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANUL6C2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH55SRfEvZcWfZ4rmEvUxjDA9lKpwwsHOpgLrqHFE%2FNdAiEAluTuXnwH80VCRmxmsmqOhAlbhjnQwd8bbIAVyN4ed2MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZGVeDUbujXFa%2BcaircA8W5zWTqC6pa3qVHkCwaBIkHTmtFowF0lo8wCo48612MrjcFL68aCVRI8aJt1cTF8iu3QGJ8NQi%2FaTWen11j%2B5YDTb2Dv7hpP1tWwB%2BiGkdP3dBgL8LSzFlICU00cZkQ3e0GHjVnIrK4yy4W8cSzmueLyStP6U%2FFtBHE%2F9NNY0PO0gkfqFWaUHpx0cTRjwrYvDCHzhiFfVQWU0SgG7QPEjAfsZ6ZsGhzxAZY4ttvb4nDQBLkihL8yZroPWvkP4T95BX6gLvdDjoBXc8OSguHQXYCDoCLpmJ5aSP8GIpILh2HTc8VuNj6IydknIuO2PSWjXIVU24YwVL4uk6ec4pbZNLZGQmGRr9SL91rCCZGnrTI5HSIgctoWBKAgL5zCB8t9XqOo6Ry3zb9kOxXB7Yp4Vhlu1CZaHqyPWV2Odhp0hQ19rJxa8YbPr1dVo3rTTvL32rrdRzueYPjb79GSl0C9Vc0ezw5jN1E29UDVc6G78ykUYTfJ6vLpMCmUbJdHyy48r1uZWISRUcRhe9m0e3sSNCL726VGkg%2BN9vm%2FhO1%2FG%2FOYJwQFl5fHyFHJpbJmjmaxD5f0kyaCUHwyb5JTziwM0X08WxsSqzmPj%2BdDmC52BU1saMKXDVFF4Np0J4IMNPW2cIGOqUBeksGjs%2F%2Bnwew01rT3guG%2BZvPdHS4zJQtxIp517ByF4Doqbm3Cv8wrWY3GyvawUh9MN3JgZabxuH0l2pr1PRygH6WnXan0BeVxJpNbwtotCz6CvmXCfdgGsYkt%2Bi%2FjuzjqU1t3hexGVhZaHFRez%2BLqXlqHnSrGJ9aTGjqV8RMAEr1RGSK%2BbdOnMGYSCZK10ah27SKaaj%2F%2B7o%2Binn%2FpLCmw1Rj60aF&X-Amz-Signature=2ad6b593a843df9d60ad98f62490f8603223f051442d7fc552b033fd17e494b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANUL6C2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH55SRfEvZcWfZ4rmEvUxjDA9lKpwwsHOpgLrqHFE%2FNdAiEAluTuXnwH80VCRmxmsmqOhAlbhjnQwd8bbIAVyN4ed2MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZGVeDUbujXFa%2BcaircA8W5zWTqC6pa3qVHkCwaBIkHTmtFowF0lo8wCo48612MrjcFL68aCVRI8aJt1cTF8iu3QGJ8NQi%2FaTWen11j%2B5YDTb2Dv7hpP1tWwB%2BiGkdP3dBgL8LSzFlICU00cZkQ3e0GHjVnIrK4yy4W8cSzmueLyStP6U%2FFtBHE%2F9NNY0PO0gkfqFWaUHpx0cTRjwrYvDCHzhiFfVQWU0SgG7QPEjAfsZ6ZsGhzxAZY4ttvb4nDQBLkihL8yZroPWvkP4T95BX6gLvdDjoBXc8OSguHQXYCDoCLpmJ5aSP8GIpILh2HTc8VuNj6IydknIuO2PSWjXIVU24YwVL4uk6ec4pbZNLZGQmGRr9SL91rCCZGnrTI5HSIgctoWBKAgL5zCB8t9XqOo6Ry3zb9kOxXB7Yp4Vhlu1CZaHqyPWV2Odhp0hQ19rJxa8YbPr1dVo3rTTvL32rrdRzueYPjb79GSl0C9Vc0ezw5jN1E29UDVc6G78ykUYTfJ6vLpMCmUbJdHyy48r1uZWISRUcRhe9m0e3sSNCL726VGkg%2BN9vm%2FhO1%2FG%2FOYJwQFl5fHyFHJpbJmjmaxD5f0kyaCUHwyb5JTziwM0X08WxsSqzmPj%2BdDmC52BU1saMKXDVFF4Np0J4IMNPW2cIGOqUBeksGjs%2F%2Bnwew01rT3guG%2BZvPdHS4zJQtxIp517ByF4Doqbm3Cv8wrWY3GyvawUh9MN3JgZabxuH0l2pr1PRygH6WnXan0BeVxJpNbwtotCz6CvmXCfdgGsYkt%2Bi%2FjuzjqU1t3hexGVhZaHFRez%2BLqXlqHnSrGJ9aTGjqV8RMAEr1RGSK%2BbdOnMGYSCZK10ah27SKaaj%2F%2B7o%2Binn%2FpLCmw1Rj60aF&X-Amz-Signature=88b1211111bfa5c97b2131e965aa8c831b334c808a351e925a0b81e1dc755ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANUL6C2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH55SRfEvZcWfZ4rmEvUxjDA9lKpwwsHOpgLrqHFE%2FNdAiEAluTuXnwH80VCRmxmsmqOhAlbhjnQwd8bbIAVyN4ed2MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZGVeDUbujXFa%2BcaircA8W5zWTqC6pa3qVHkCwaBIkHTmtFowF0lo8wCo48612MrjcFL68aCVRI8aJt1cTF8iu3QGJ8NQi%2FaTWen11j%2B5YDTb2Dv7hpP1tWwB%2BiGkdP3dBgL8LSzFlICU00cZkQ3e0GHjVnIrK4yy4W8cSzmueLyStP6U%2FFtBHE%2F9NNY0PO0gkfqFWaUHpx0cTRjwrYvDCHzhiFfVQWU0SgG7QPEjAfsZ6ZsGhzxAZY4ttvb4nDQBLkihL8yZroPWvkP4T95BX6gLvdDjoBXc8OSguHQXYCDoCLpmJ5aSP8GIpILh2HTc8VuNj6IydknIuO2PSWjXIVU24YwVL4uk6ec4pbZNLZGQmGRr9SL91rCCZGnrTI5HSIgctoWBKAgL5zCB8t9XqOo6Ry3zb9kOxXB7Yp4Vhlu1CZaHqyPWV2Odhp0hQ19rJxa8YbPr1dVo3rTTvL32rrdRzueYPjb79GSl0C9Vc0ezw5jN1E29UDVc6G78ykUYTfJ6vLpMCmUbJdHyy48r1uZWISRUcRhe9m0e3sSNCL726VGkg%2BN9vm%2FhO1%2FG%2FOYJwQFl5fHyFHJpbJmjmaxD5f0kyaCUHwyb5JTziwM0X08WxsSqzmPj%2BdDmC52BU1saMKXDVFF4Np0J4IMNPW2cIGOqUBeksGjs%2F%2Bnwew01rT3guG%2BZvPdHS4zJQtxIp517ByF4Doqbm3Cv8wrWY3GyvawUh9MN3JgZabxuH0l2pr1PRygH6WnXan0BeVxJpNbwtotCz6CvmXCfdgGsYkt%2Bi%2FjuzjqU1t3hexGVhZaHFRez%2BLqXlqHnSrGJ9aTGjqV8RMAEr1RGSK%2BbdOnMGYSCZK10ah27SKaaj%2F%2B7o%2Binn%2FpLCmw1Rj60aF&X-Amz-Signature=3f7cb2ef44648842bf8409e4adb7a942927516b73a86bd507297c6a9a048aaf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANUL6C2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH55SRfEvZcWfZ4rmEvUxjDA9lKpwwsHOpgLrqHFE%2FNdAiEAluTuXnwH80VCRmxmsmqOhAlbhjnQwd8bbIAVyN4ed2MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZGVeDUbujXFa%2BcaircA8W5zWTqC6pa3qVHkCwaBIkHTmtFowF0lo8wCo48612MrjcFL68aCVRI8aJt1cTF8iu3QGJ8NQi%2FaTWen11j%2B5YDTb2Dv7hpP1tWwB%2BiGkdP3dBgL8LSzFlICU00cZkQ3e0GHjVnIrK4yy4W8cSzmueLyStP6U%2FFtBHE%2F9NNY0PO0gkfqFWaUHpx0cTRjwrYvDCHzhiFfVQWU0SgG7QPEjAfsZ6ZsGhzxAZY4ttvb4nDQBLkihL8yZroPWvkP4T95BX6gLvdDjoBXc8OSguHQXYCDoCLpmJ5aSP8GIpILh2HTc8VuNj6IydknIuO2PSWjXIVU24YwVL4uk6ec4pbZNLZGQmGRr9SL91rCCZGnrTI5HSIgctoWBKAgL5zCB8t9XqOo6Ry3zb9kOxXB7Yp4Vhlu1CZaHqyPWV2Odhp0hQ19rJxa8YbPr1dVo3rTTvL32rrdRzueYPjb79GSl0C9Vc0ezw5jN1E29UDVc6G78ykUYTfJ6vLpMCmUbJdHyy48r1uZWISRUcRhe9m0e3sSNCL726VGkg%2BN9vm%2FhO1%2FG%2FOYJwQFl5fHyFHJpbJmjmaxD5f0kyaCUHwyb5JTziwM0X08WxsSqzmPj%2BdDmC52BU1saMKXDVFF4Np0J4IMNPW2cIGOqUBeksGjs%2F%2Bnwew01rT3guG%2BZvPdHS4zJQtxIp517ByF4Doqbm3Cv8wrWY3GyvawUh9MN3JgZabxuH0l2pr1PRygH6WnXan0BeVxJpNbwtotCz6CvmXCfdgGsYkt%2Bi%2FjuzjqU1t3hexGVhZaHFRez%2BLqXlqHnSrGJ9aTGjqV8RMAEr1RGSK%2BbdOnMGYSCZK10ah27SKaaj%2F%2B7o%2Binn%2FpLCmw1Rj60aF&X-Amz-Signature=56f6ea8c2e6536521c6e35a1efb9e09484f4825f644ac87959664e4b80e1ac16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANUL6C2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH55SRfEvZcWfZ4rmEvUxjDA9lKpwwsHOpgLrqHFE%2FNdAiEAluTuXnwH80VCRmxmsmqOhAlbhjnQwd8bbIAVyN4ed2MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZGVeDUbujXFa%2BcaircA8W5zWTqC6pa3qVHkCwaBIkHTmtFowF0lo8wCo48612MrjcFL68aCVRI8aJt1cTF8iu3QGJ8NQi%2FaTWen11j%2B5YDTb2Dv7hpP1tWwB%2BiGkdP3dBgL8LSzFlICU00cZkQ3e0GHjVnIrK4yy4W8cSzmueLyStP6U%2FFtBHE%2F9NNY0PO0gkfqFWaUHpx0cTRjwrYvDCHzhiFfVQWU0SgG7QPEjAfsZ6ZsGhzxAZY4ttvb4nDQBLkihL8yZroPWvkP4T95BX6gLvdDjoBXc8OSguHQXYCDoCLpmJ5aSP8GIpILh2HTc8VuNj6IydknIuO2PSWjXIVU24YwVL4uk6ec4pbZNLZGQmGRr9SL91rCCZGnrTI5HSIgctoWBKAgL5zCB8t9XqOo6Ry3zb9kOxXB7Yp4Vhlu1CZaHqyPWV2Odhp0hQ19rJxa8YbPr1dVo3rTTvL32rrdRzueYPjb79GSl0C9Vc0ezw5jN1E29UDVc6G78ykUYTfJ6vLpMCmUbJdHyy48r1uZWISRUcRhe9m0e3sSNCL726VGkg%2BN9vm%2FhO1%2FG%2FOYJwQFl5fHyFHJpbJmjmaxD5f0kyaCUHwyb5JTziwM0X08WxsSqzmPj%2BdDmC52BU1saMKXDVFF4Np0J4IMNPW2cIGOqUBeksGjs%2F%2Bnwew01rT3guG%2BZvPdHS4zJQtxIp517ByF4Doqbm3Cv8wrWY3GyvawUh9MN3JgZabxuH0l2pr1PRygH6WnXan0BeVxJpNbwtotCz6CvmXCfdgGsYkt%2Bi%2FjuzjqU1t3hexGVhZaHFRez%2BLqXlqHnSrGJ9aTGjqV8RMAEr1RGSK%2BbdOnMGYSCZK10ah27SKaaj%2F%2B7o%2Binn%2FpLCmw1Rj60aF&X-Amz-Signature=429abe373a4b1a02d5f19f64b88a20fce4a4d6d581cf5d6191c4b7a7bf5139da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XANUL6C2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T131912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH55SRfEvZcWfZ4rmEvUxjDA9lKpwwsHOpgLrqHFE%2FNdAiEAluTuXnwH80VCRmxmsmqOhAlbhjnQwd8bbIAVyN4ed2MqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZGVeDUbujXFa%2BcaircA8W5zWTqC6pa3qVHkCwaBIkHTmtFowF0lo8wCo48612MrjcFL68aCVRI8aJt1cTF8iu3QGJ8NQi%2FaTWen11j%2B5YDTb2Dv7hpP1tWwB%2BiGkdP3dBgL8LSzFlICU00cZkQ3e0GHjVnIrK4yy4W8cSzmueLyStP6U%2FFtBHE%2F9NNY0PO0gkfqFWaUHpx0cTRjwrYvDCHzhiFfVQWU0SgG7QPEjAfsZ6ZsGhzxAZY4ttvb4nDQBLkihL8yZroPWvkP4T95BX6gLvdDjoBXc8OSguHQXYCDoCLpmJ5aSP8GIpILh2HTc8VuNj6IydknIuO2PSWjXIVU24YwVL4uk6ec4pbZNLZGQmGRr9SL91rCCZGnrTI5HSIgctoWBKAgL5zCB8t9XqOo6Ry3zb9kOxXB7Yp4Vhlu1CZaHqyPWV2Odhp0hQ19rJxa8YbPr1dVo3rTTvL32rrdRzueYPjb79GSl0C9Vc0ezw5jN1E29UDVc6G78ykUYTfJ6vLpMCmUbJdHyy48r1uZWISRUcRhe9m0e3sSNCL726VGkg%2BN9vm%2FhO1%2FG%2FOYJwQFl5fHyFHJpbJmjmaxD5f0kyaCUHwyb5JTziwM0X08WxsSqzmPj%2BdDmC52BU1saMKXDVFF4Np0J4IMNPW2cIGOqUBeksGjs%2F%2Bnwew01rT3guG%2BZvPdHS4zJQtxIp517ByF4Doqbm3Cv8wrWY3GyvawUh9MN3JgZabxuH0l2pr1PRygH6WnXan0BeVxJpNbwtotCz6CvmXCfdgGsYkt%2Bi%2FjuzjqU1t3hexGVhZaHFRez%2BLqXlqHnSrGJ9aTGjqV8RMAEr1RGSK%2BbdOnMGYSCZK10ah27SKaaj%2F%2B7o%2Binn%2FpLCmw1Rj60aF&X-Amz-Signature=10e36561224583be8bba79d51e5db9519a21ab332852f6675c4287f32c7aca62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
