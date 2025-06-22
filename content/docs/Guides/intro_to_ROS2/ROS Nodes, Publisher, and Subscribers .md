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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZI4DIV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBDFgG7P1WEWX1i0J8O7iXdHfLpTv9q9GPQ4sMBW21TeAiEA39UT%2BQKz%2BcvNz7HfDsexp1AHXPMvgGNmadQ%2BWRFAMPMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs4GH6wSXCTnFtN8SrcA0x2WzHLX7oQWXsYjovybnt7dtSY5ey9%2BsXx9s8yvbI7z89BmlD2M4F%2Brk1SK4xo2knQCckmj%2FcbdPRvRdCwtG4DYxpraoFi3WCh3BocFwc0YZSOg7NBhC5Nrn%2BW1lB5Hr8R15VYopye9JD7BCcpbv%2FfBQmCawvUKc9huFn7Tv%2BvuL0ojOM0txp9WTPIrpn0coYq1D%2FQUL8%2BP0lKGIdLBR8AY1WlsGzjUHuswCIePTwNRGXG7O%2Bj5PCeHFMafUo5ibuULoIDcEZEoK30CA9fZuG9fqpoYZGm5ReG6OaEgkvyb9l4gqrqt08JdAhh78PXRN%2Bcwy4Z9x24Gs7tJauCU9vQ3bCmS5Hk04%2FjDpv9iMxbdAQ4K0YOdQ4peONKW9kG0YXkan3XyKTQVGH5rtdNAWYP4F5c2kCoAkUk6rE4x4E61KxWd7WFxJn%2Fendo6ChVs%2Bzh2%2BUnPoPiB1af5tDRA%2BFbfxpwSY%2B1bckPqpsqec%2BXRWPcS%2Fftg33IE4vSLr8SrKJS3ug%2BeOsGkLmFT0Pu0Fq0MrnqPd3nOc51ReYqQxdJmfxPlIYYMs58a10Tp01DwzKYxVLAU9Cm7RIIu4XrEWBlod7u038ayC1LkrggYyhYeZjDHfK0DQyOqs%2FYMPfo4MIGOqUB%2FDLcYiDAfmcRH6W5VJgfRPwI1FTumE%2BwCErQXRuO6UpRijao8RaBL0si%2FfU%2BEqlGI038%2FRH4rfV%2FZjIuglQ9JyRg2CEaOpi1zWU2zegbEjzoED0eZXZYWzkv7PnRQcOfznt%2B8QaM7TjQygpcWJHMJexFZbl74auHzrsqL9GGxBaDtrhV47iuj7dEcE8taa7ZTuRVMJ3%2BJRfJkv7jikaJU9vEAG06&X-Amz-Signature=242cdbe074f7957d62f2f20457840782a7bd9d24df446b9dc5b9d4fa9a7b4832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZI4DIV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBDFgG7P1WEWX1i0J8O7iXdHfLpTv9q9GPQ4sMBW21TeAiEA39UT%2BQKz%2BcvNz7HfDsexp1AHXPMvgGNmadQ%2BWRFAMPMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs4GH6wSXCTnFtN8SrcA0x2WzHLX7oQWXsYjovybnt7dtSY5ey9%2BsXx9s8yvbI7z89BmlD2M4F%2Brk1SK4xo2knQCckmj%2FcbdPRvRdCwtG4DYxpraoFi3WCh3BocFwc0YZSOg7NBhC5Nrn%2BW1lB5Hr8R15VYopye9JD7BCcpbv%2FfBQmCawvUKc9huFn7Tv%2BvuL0ojOM0txp9WTPIrpn0coYq1D%2FQUL8%2BP0lKGIdLBR8AY1WlsGzjUHuswCIePTwNRGXG7O%2Bj5PCeHFMafUo5ibuULoIDcEZEoK30CA9fZuG9fqpoYZGm5ReG6OaEgkvyb9l4gqrqt08JdAhh78PXRN%2Bcwy4Z9x24Gs7tJauCU9vQ3bCmS5Hk04%2FjDpv9iMxbdAQ4K0YOdQ4peONKW9kG0YXkan3XyKTQVGH5rtdNAWYP4F5c2kCoAkUk6rE4x4E61KxWd7WFxJn%2Fendo6ChVs%2Bzh2%2BUnPoPiB1af5tDRA%2BFbfxpwSY%2B1bckPqpsqec%2BXRWPcS%2Fftg33IE4vSLr8SrKJS3ug%2BeOsGkLmFT0Pu0Fq0MrnqPd3nOc51ReYqQxdJmfxPlIYYMs58a10Tp01DwzKYxVLAU9Cm7RIIu4XrEWBlod7u038ayC1LkrggYyhYeZjDHfK0DQyOqs%2FYMPfo4MIGOqUB%2FDLcYiDAfmcRH6W5VJgfRPwI1FTumE%2BwCErQXRuO6UpRijao8RaBL0si%2FfU%2BEqlGI038%2FRH4rfV%2FZjIuglQ9JyRg2CEaOpi1zWU2zegbEjzoED0eZXZYWzkv7PnRQcOfznt%2B8QaM7TjQygpcWJHMJexFZbl74auHzrsqL9GGxBaDtrhV47iuj7dEcE8taa7ZTuRVMJ3%2BJRfJkv7jikaJU9vEAG06&X-Amz-Signature=f53a0b62d1b4ca67bfb58a0b0afa6b828c634cea123e42bf3908ece5458f89bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZI4DIV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBDFgG7P1WEWX1i0J8O7iXdHfLpTv9q9GPQ4sMBW21TeAiEA39UT%2BQKz%2BcvNz7HfDsexp1AHXPMvgGNmadQ%2BWRFAMPMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs4GH6wSXCTnFtN8SrcA0x2WzHLX7oQWXsYjovybnt7dtSY5ey9%2BsXx9s8yvbI7z89BmlD2M4F%2Brk1SK4xo2knQCckmj%2FcbdPRvRdCwtG4DYxpraoFi3WCh3BocFwc0YZSOg7NBhC5Nrn%2BW1lB5Hr8R15VYopye9JD7BCcpbv%2FfBQmCawvUKc9huFn7Tv%2BvuL0ojOM0txp9WTPIrpn0coYq1D%2FQUL8%2BP0lKGIdLBR8AY1WlsGzjUHuswCIePTwNRGXG7O%2Bj5PCeHFMafUo5ibuULoIDcEZEoK30CA9fZuG9fqpoYZGm5ReG6OaEgkvyb9l4gqrqt08JdAhh78PXRN%2Bcwy4Z9x24Gs7tJauCU9vQ3bCmS5Hk04%2FjDpv9iMxbdAQ4K0YOdQ4peONKW9kG0YXkan3XyKTQVGH5rtdNAWYP4F5c2kCoAkUk6rE4x4E61KxWd7WFxJn%2Fendo6ChVs%2Bzh2%2BUnPoPiB1af5tDRA%2BFbfxpwSY%2B1bckPqpsqec%2BXRWPcS%2Fftg33IE4vSLr8SrKJS3ug%2BeOsGkLmFT0Pu0Fq0MrnqPd3nOc51ReYqQxdJmfxPlIYYMs58a10Tp01DwzKYxVLAU9Cm7RIIu4XrEWBlod7u038ayC1LkrggYyhYeZjDHfK0DQyOqs%2FYMPfo4MIGOqUB%2FDLcYiDAfmcRH6W5VJgfRPwI1FTumE%2BwCErQXRuO6UpRijao8RaBL0si%2FfU%2BEqlGI038%2FRH4rfV%2FZjIuglQ9JyRg2CEaOpi1zWU2zegbEjzoED0eZXZYWzkv7PnRQcOfznt%2B8QaM7TjQygpcWJHMJexFZbl74auHzrsqL9GGxBaDtrhV47iuj7dEcE8taa7ZTuRVMJ3%2BJRfJkv7jikaJU9vEAG06&X-Amz-Signature=985c09982cd4e65023b2cec091e59c773f6159dcc4123f877ba57fe650f2f143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZI4DIV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBDFgG7P1WEWX1i0J8O7iXdHfLpTv9q9GPQ4sMBW21TeAiEA39UT%2BQKz%2BcvNz7HfDsexp1AHXPMvgGNmadQ%2BWRFAMPMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs4GH6wSXCTnFtN8SrcA0x2WzHLX7oQWXsYjovybnt7dtSY5ey9%2BsXx9s8yvbI7z89BmlD2M4F%2Brk1SK4xo2knQCckmj%2FcbdPRvRdCwtG4DYxpraoFi3WCh3BocFwc0YZSOg7NBhC5Nrn%2BW1lB5Hr8R15VYopye9JD7BCcpbv%2FfBQmCawvUKc9huFn7Tv%2BvuL0ojOM0txp9WTPIrpn0coYq1D%2FQUL8%2BP0lKGIdLBR8AY1WlsGzjUHuswCIePTwNRGXG7O%2Bj5PCeHFMafUo5ibuULoIDcEZEoK30CA9fZuG9fqpoYZGm5ReG6OaEgkvyb9l4gqrqt08JdAhh78PXRN%2Bcwy4Z9x24Gs7tJauCU9vQ3bCmS5Hk04%2FjDpv9iMxbdAQ4K0YOdQ4peONKW9kG0YXkan3XyKTQVGH5rtdNAWYP4F5c2kCoAkUk6rE4x4E61KxWd7WFxJn%2Fendo6ChVs%2Bzh2%2BUnPoPiB1af5tDRA%2BFbfxpwSY%2B1bckPqpsqec%2BXRWPcS%2Fftg33IE4vSLr8SrKJS3ug%2BeOsGkLmFT0Pu0Fq0MrnqPd3nOc51ReYqQxdJmfxPlIYYMs58a10Tp01DwzKYxVLAU9Cm7RIIu4XrEWBlod7u038ayC1LkrggYyhYeZjDHfK0DQyOqs%2FYMPfo4MIGOqUB%2FDLcYiDAfmcRH6W5VJgfRPwI1FTumE%2BwCErQXRuO6UpRijao8RaBL0si%2FfU%2BEqlGI038%2FRH4rfV%2FZjIuglQ9JyRg2CEaOpi1zWU2zegbEjzoED0eZXZYWzkv7PnRQcOfznt%2B8QaM7TjQygpcWJHMJexFZbl74auHzrsqL9GGxBaDtrhV47iuj7dEcE8taa7ZTuRVMJ3%2BJRfJkv7jikaJU9vEAG06&X-Amz-Signature=acd111ab93cdd35cd2d01ee5fc986cdee8c2e31fe00d57f364558f7e9bd7b9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZI4DIV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBDFgG7P1WEWX1i0J8O7iXdHfLpTv9q9GPQ4sMBW21TeAiEA39UT%2BQKz%2BcvNz7HfDsexp1AHXPMvgGNmadQ%2BWRFAMPMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs4GH6wSXCTnFtN8SrcA0x2WzHLX7oQWXsYjovybnt7dtSY5ey9%2BsXx9s8yvbI7z89BmlD2M4F%2Brk1SK4xo2knQCckmj%2FcbdPRvRdCwtG4DYxpraoFi3WCh3BocFwc0YZSOg7NBhC5Nrn%2BW1lB5Hr8R15VYopye9JD7BCcpbv%2FfBQmCawvUKc9huFn7Tv%2BvuL0ojOM0txp9WTPIrpn0coYq1D%2FQUL8%2BP0lKGIdLBR8AY1WlsGzjUHuswCIePTwNRGXG7O%2Bj5PCeHFMafUo5ibuULoIDcEZEoK30CA9fZuG9fqpoYZGm5ReG6OaEgkvyb9l4gqrqt08JdAhh78PXRN%2Bcwy4Z9x24Gs7tJauCU9vQ3bCmS5Hk04%2FjDpv9iMxbdAQ4K0YOdQ4peONKW9kG0YXkan3XyKTQVGH5rtdNAWYP4F5c2kCoAkUk6rE4x4E61KxWd7WFxJn%2Fendo6ChVs%2Bzh2%2BUnPoPiB1af5tDRA%2BFbfxpwSY%2B1bckPqpsqec%2BXRWPcS%2Fftg33IE4vSLr8SrKJS3ug%2BeOsGkLmFT0Pu0Fq0MrnqPd3nOc51ReYqQxdJmfxPlIYYMs58a10Tp01DwzKYxVLAU9Cm7RIIu4XrEWBlod7u038ayC1LkrggYyhYeZjDHfK0DQyOqs%2FYMPfo4MIGOqUB%2FDLcYiDAfmcRH6W5VJgfRPwI1FTumE%2BwCErQXRuO6UpRijao8RaBL0si%2FfU%2BEqlGI038%2FRH4rfV%2FZjIuglQ9JyRg2CEaOpi1zWU2zegbEjzoED0eZXZYWzkv7PnRQcOfznt%2B8QaM7TjQygpcWJHMJexFZbl74auHzrsqL9GGxBaDtrhV47iuj7dEcE8taa7ZTuRVMJ3%2BJRfJkv7jikaJU9vEAG06&X-Amz-Signature=8762e4c2bb63dc5f59a27c4a297744c28aac0b2c10201840a5577dcefa1dfe5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZI4DIV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBDFgG7P1WEWX1i0J8O7iXdHfLpTv9q9GPQ4sMBW21TeAiEA39UT%2BQKz%2BcvNz7HfDsexp1AHXPMvgGNmadQ%2BWRFAMPMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs4GH6wSXCTnFtN8SrcA0x2WzHLX7oQWXsYjovybnt7dtSY5ey9%2BsXx9s8yvbI7z89BmlD2M4F%2Brk1SK4xo2knQCckmj%2FcbdPRvRdCwtG4DYxpraoFi3WCh3BocFwc0YZSOg7NBhC5Nrn%2BW1lB5Hr8R15VYopye9JD7BCcpbv%2FfBQmCawvUKc9huFn7Tv%2BvuL0ojOM0txp9WTPIrpn0coYq1D%2FQUL8%2BP0lKGIdLBR8AY1WlsGzjUHuswCIePTwNRGXG7O%2Bj5PCeHFMafUo5ibuULoIDcEZEoK30CA9fZuG9fqpoYZGm5ReG6OaEgkvyb9l4gqrqt08JdAhh78PXRN%2Bcwy4Z9x24Gs7tJauCU9vQ3bCmS5Hk04%2FjDpv9iMxbdAQ4K0YOdQ4peONKW9kG0YXkan3XyKTQVGH5rtdNAWYP4F5c2kCoAkUk6rE4x4E61KxWd7WFxJn%2Fendo6ChVs%2Bzh2%2BUnPoPiB1af5tDRA%2BFbfxpwSY%2B1bckPqpsqec%2BXRWPcS%2Fftg33IE4vSLr8SrKJS3ug%2BeOsGkLmFT0Pu0Fq0MrnqPd3nOc51ReYqQxdJmfxPlIYYMs58a10Tp01DwzKYxVLAU9Cm7RIIu4XrEWBlod7u038ayC1LkrggYyhYeZjDHfK0DQyOqs%2FYMPfo4MIGOqUB%2FDLcYiDAfmcRH6W5VJgfRPwI1FTumE%2BwCErQXRuO6UpRijao8RaBL0si%2FfU%2BEqlGI038%2FRH4rfV%2FZjIuglQ9JyRg2CEaOpi1zWU2zegbEjzoED0eZXZYWzkv7PnRQcOfznt%2B8QaM7TjQygpcWJHMJexFZbl74auHzrsqL9GGxBaDtrhV47iuj7dEcE8taa7ZTuRVMJ3%2BJRfJkv7jikaJU9vEAG06&X-Amz-Signature=0300156da3fe4e6197765155a5f3fc5c071cf8ccf72903fdd52b08f3ae96d7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZI4DIV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBDFgG7P1WEWX1i0J8O7iXdHfLpTv9q9GPQ4sMBW21TeAiEA39UT%2BQKz%2BcvNz7HfDsexp1AHXPMvgGNmadQ%2BWRFAMPMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs4GH6wSXCTnFtN8SrcA0x2WzHLX7oQWXsYjovybnt7dtSY5ey9%2BsXx9s8yvbI7z89BmlD2M4F%2Brk1SK4xo2knQCckmj%2FcbdPRvRdCwtG4DYxpraoFi3WCh3BocFwc0YZSOg7NBhC5Nrn%2BW1lB5Hr8R15VYopye9JD7BCcpbv%2FfBQmCawvUKc9huFn7Tv%2BvuL0ojOM0txp9WTPIrpn0coYq1D%2FQUL8%2BP0lKGIdLBR8AY1WlsGzjUHuswCIePTwNRGXG7O%2Bj5PCeHFMafUo5ibuULoIDcEZEoK30CA9fZuG9fqpoYZGm5ReG6OaEgkvyb9l4gqrqt08JdAhh78PXRN%2Bcwy4Z9x24Gs7tJauCU9vQ3bCmS5Hk04%2FjDpv9iMxbdAQ4K0YOdQ4peONKW9kG0YXkan3XyKTQVGH5rtdNAWYP4F5c2kCoAkUk6rE4x4E61KxWd7WFxJn%2Fendo6ChVs%2Bzh2%2BUnPoPiB1af5tDRA%2BFbfxpwSY%2B1bckPqpsqec%2BXRWPcS%2Fftg33IE4vSLr8SrKJS3ug%2BeOsGkLmFT0Pu0Fq0MrnqPd3nOc51ReYqQxdJmfxPlIYYMs58a10Tp01DwzKYxVLAU9Cm7RIIu4XrEWBlod7u038ayC1LkrggYyhYeZjDHfK0DQyOqs%2FYMPfo4MIGOqUB%2FDLcYiDAfmcRH6W5VJgfRPwI1FTumE%2BwCErQXRuO6UpRijao8RaBL0si%2FfU%2BEqlGI038%2FRH4rfV%2FZjIuglQ9JyRg2CEaOpi1zWU2zegbEjzoED0eZXZYWzkv7PnRQcOfznt%2B8QaM7TjQygpcWJHMJexFZbl74auHzrsqL9GGxBaDtrhV47iuj7dEcE8taa7ZTuRVMJ3%2BJRfJkv7jikaJU9vEAG06&X-Amz-Signature=f80d4c369ad7495ff575a837e53eefdbb2bcd689e49ba89dc3c9ee2a9f9579b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIZI4DIV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIBDFgG7P1WEWX1i0J8O7iXdHfLpTv9q9GPQ4sMBW21TeAiEA39UT%2BQKz%2BcvNz7HfDsexp1AHXPMvgGNmadQ%2BWRFAMPMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs4GH6wSXCTnFtN8SrcA0x2WzHLX7oQWXsYjovybnt7dtSY5ey9%2BsXx9s8yvbI7z89BmlD2M4F%2Brk1SK4xo2knQCckmj%2FcbdPRvRdCwtG4DYxpraoFi3WCh3BocFwc0YZSOg7NBhC5Nrn%2BW1lB5Hr8R15VYopye9JD7BCcpbv%2FfBQmCawvUKc9huFn7Tv%2BvuL0ojOM0txp9WTPIrpn0coYq1D%2FQUL8%2BP0lKGIdLBR8AY1WlsGzjUHuswCIePTwNRGXG7O%2Bj5PCeHFMafUo5ibuULoIDcEZEoK30CA9fZuG9fqpoYZGm5ReG6OaEgkvyb9l4gqrqt08JdAhh78PXRN%2Bcwy4Z9x24Gs7tJauCU9vQ3bCmS5Hk04%2FjDpv9iMxbdAQ4K0YOdQ4peONKW9kG0YXkan3XyKTQVGH5rtdNAWYP4F5c2kCoAkUk6rE4x4E61KxWd7WFxJn%2Fendo6ChVs%2Bzh2%2BUnPoPiB1af5tDRA%2BFbfxpwSY%2B1bckPqpsqec%2BXRWPcS%2Fftg33IE4vSLr8SrKJS3ug%2BeOsGkLmFT0Pu0Fq0MrnqPd3nOc51ReYqQxdJmfxPlIYYMs58a10Tp01DwzKYxVLAU9Cm7RIIu4XrEWBlod7u038ayC1LkrggYyhYeZjDHfK0DQyOqs%2FYMPfo4MIGOqUB%2FDLcYiDAfmcRH6W5VJgfRPwI1FTumE%2BwCErQXRuO6UpRijao8RaBL0si%2FfU%2BEqlGI038%2FRH4rfV%2FZjIuglQ9JyRg2CEaOpi1zWU2zegbEjzoED0eZXZYWzkv7PnRQcOfznt%2B8QaM7TjQygpcWJHMJexFZbl74auHzrsqL9GGxBaDtrhV47iuj7dEcE8taa7ZTuRVMJ3%2BJRfJkv7jikaJU9vEAG06&X-Amz-Signature=6f56bf72026f087dd1d6af05d59a5ad50b410dcbd27c9ade6f07d4358e9fcd10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
