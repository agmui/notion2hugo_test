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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DYW2BX4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDA09HOv4bnJ19ERJRb5tiF0Pvd8OXNQeT2y%2BMnxrWJ%2BQIhAPVcQhkcVuzmFMIwWsQ%2BhH0KfMYP6FQ3C51kfBoPR1WaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoYSc4NRoc0rgh7bcq3AN7yUDbglJdvxDMNFhtKBlHoBHRkE5M71srZEquZTJNkJFvgN8hC%2FEJ6FvCdZkQO1jS2TUA9KrT29ey%2Fdbm%2FYWKhT%2F1wfZ2U%2Bs8ISw46U1xaHozlzVxgZWFaUDtjj3Hg4KtNMZcSk7NU6YS4UHLR4ATUlSuRmr0gB%2FA%2FpqRopHaA5PekHILDaYMtwvNsuep80vlO%2FVsolJCDQKVaSvi7EguaE%2FkomrgZKr9bnRvSvWL%2BboFwgs%2FWw5WymjKiDpo%2FZsaAVyo8OAC3ZjXc8DDSS6RPs8ELlk32JEZ80%2BXRuH%2F5jfW8Rclt0D2cXlur0kyhsT3gxObZtugQOUDf03sOhqBMBKhza6SfunPQtfjUSfO%2BghfM8stp5B36MLv408wvNypHmnLJf%2BXMaPAUG8eXwbOwyLAXG8RFOAjSkqnWujCkVW3MWIiXcbxkWcqU7NwKDZKma%2Fy9JxcEbPp1kyNWU4Jd4Fy9gu7fFSuavNbiscviuvdhxmx9JYsqBkEhzt1wySrrTmTAIVod1MW5wIElIrRK3SrIIwUA1zp9K3uumhTWBG9xYYXecQAyROBSgVESaUmgKMSFhKoik4nT%2BJkfdfJ3qioWY8agUvWV%2Fvxerv0SSnx%2FjTokd4nbxOQozDbzYe%2BBjqkAQ5I5xZHFsjvUaTZxN%2BZck%2BDu%2Fw2SI%2BbrT03uuZwfpTSIsWfQJksn%2FPZg%2B5CXIwUOJsOTjNWTv%2Fnthth0Scr5bNrdMehf8QZ%2BEo1mrsWNbf4KgEGtRvHMaCc6J6%2F6%2FG17batjIWEU87v76qGbTfmKo62lDHfS8EuZ4hQX8ivhQHLHRkN1rdIWSm1eFrliy0dueDuAY%2Byc4FgkRbPdxcR2ZDl0cIM&X-Amz-Signature=555f881cf61a5b3b10738caf67019a11a36737447910d801e03feeba5dc13b50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DYW2BX4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDA09HOv4bnJ19ERJRb5tiF0Pvd8OXNQeT2y%2BMnxrWJ%2BQIhAPVcQhkcVuzmFMIwWsQ%2BhH0KfMYP6FQ3C51kfBoPR1WaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoYSc4NRoc0rgh7bcq3AN7yUDbglJdvxDMNFhtKBlHoBHRkE5M71srZEquZTJNkJFvgN8hC%2FEJ6FvCdZkQO1jS2TUA9KrT29ey%2Fdbm%2FYWKhT%2F1wfZ2U%2Bs8ISw46U1xaHozlzVxgZWFaUDtjj3Hg4KtNMZcSk7NU6YS4UHLR4ATUlSuRmr0gB%2FA%2FpqRopHaA5PekHILDaYMtwvNsuep80vlO%2FVsolJCDQKVaSvi7EguaE%2FkomrgZKr9bnRvSvWL%2BboFwgs%2FWw5WymjKiDpo%2FZsaAVyo8OAC3ZjXc8DDSS6RPs8ELlk32JEZ80%2BXRuH%2F5jfW8Rclt0D2cXlur0kyhsT3gxObZtugQOUDf03sOhqBMBKhza6SfunPQtfjUSfO%2BghfM8stp5B36MLv408wvNypHmnLJf%2BXMaPAUG8eXwbOwyLAXG8RFOAjSkqnWujCkVW3MWIiXcbxkWcqU7NwKDZKma%2Fy9JxcEbPp1kyNWU4Jd4Fy9gu7fFSuavNbiscviuvdhxmx9JYsqBkEhzt1wySrrTmTAIVod1MW5wIElIrRK3SrIIwUA1zp9K3uumhTWBG9xYYXecQAyROBSgVESaUmgKMSFhKoik4nT%2BJkfdfJ3qioWY8agUvWV%2Fvxerv0SSnx%2FjTokd4nbxOQozDbzYe%2BBjqkAQ5I5xZHFsjvUaTZxN%2BZck%2BDu%2Fw2SI%2BbrT03uuZwfpTSIsWfQJksn%2FPZg%2B5CXIwUOJsOTjNWTv%2Fnthth0Scr5bNrdMehf8QZ%2BEo1mrsWNbf4KgEGtRvHMaCc6J6%2F6%2FG17batjIWEU87v76qGbTfmKo62lDHfS8EuZ4hQX8ivhQHLHRkN1rdIWSm1eFrliy0dueDuAY%2Byc4FgkRbPdxcR2ZDl0cIM&X-Amz-Signature=228dfb03632dd9c912cb2a5297d261be4b786a4d9df987d921946ec48351fa25&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DYW2BX4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDA09HOv4bnJ19ERJRb5tiF0Pvd8OXNQeT2y%2BMnxrWJ%2BQIhAPVcQhkcVuzmFMIwWsQ%2BhH0KfMYP6FQ3C51kfBoPR1WaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoYSc4NRoc0rgh7bcq3AN7yUDbglJdvxDMNFhtKBlHoBHRkE5M71srZEquZTJNkJFvgN8hC%2FEJ6FvCdZkQO1jS2TUA9KrT29ey%2Fdbm%2FYWKhT%2F1wfZ2U%2Bs8ISw46U1xaHozlzVxgZWFaUDtjj3Hg4KtNMZcSk7NU6YS4UHLR4ATUlSuRmr0gB%2FA%2FpqRopHaA5PekHILDaYMtwvNsuep80vlO%2FVsolJCDQKVaSvi7EguaE%2FkomrgZKr9bnRvSvWL%2BboFwgs%2FWw5WymjKiDpo%2FZsaAVyo8OAC3ZjXc8DDSS6RPs8ELlk32JEZ80%2BXRuH%2F5jfW8Rclt0D2cXlur0kyhsT3gxObZtugQOUDf03sOhqBMBKhza6SfunPQtfjUSfO%2BghfM8stp5B36MLv408wvNypHmnLJf%2BXMaPAUG8eXwbOwyLAXG8RFOAjSkqnWujCkVW3MWIiXcbxkWcqU7NwKDZKma%2Fy9JxcEbPp1kyNWU4Jd4Fy9gu7fFSuavNbiscviuvdhxmx9JYsqBkEhzt1wySrrTmTAIVod1MW5wIElIrRK3SrIIwUA1zp9K3uumhTWBG9xYYXecQAyROBSgVESaUmgKMSFhKoik4nT%2BJkfdfJ3qioWY8agUvWV%2Fvxerv0SSnx%2FjTokd4nbxOQozDbzYe%2BBjqkAQ5I5xZHFsjvUaTZxN%2BZck%2BDu%2Fw2SI%2BbrT03uuZwfpTSIsWfQJksn%2FPZg%2B5CXIwUOJsOTjNWTv%2Fnthth0Scr5bNrdMehf8QZ%2BEo1mrsWNbf4KgEGtRvHMaCc6J6%2F6%2FG17batjIWEU87v76qGbTfmKo62lDHfS8EuZ4hQX8ivhQHLHRkN1rdIWSm1eFrliy0dueDuAY%2Byc4FgkRbPdxcR2ZDl0cIM&X-Amz-Signature=9b2be82551831cfeaa6f3e1953ce1cdaf2bfedf2ae0c199517e652f3813fb695&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DYW2BX4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDA09HOv4bnJ19ERJRb5tiF0Pvd8OXNQeT2y%2BMnxrWJ%2BQIhAPVcQhkcVuzmFMIwWsQ%2BhH0KfMYP6FQ3C51kfBoPR1WaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoYSc4NRoc0rgh7bcq3AN7yUDbglJdvxDMNFhtKBlHoBHRkE5M71srZEquZTJNkJFvgN8hC%2FEJ6FvCdZkQO1jS2TUA9KrT29ey%2Fdbm%2FYWKhT%2F1wfZ2U%2Bs8ISw46U1xaHozlzVxgZWFaUDtjj3Hg4KtNMZcSk7NU6YS4UHLR4ATUlSuRmr0gB%2FA%2FpqRopHaA5PekHILDaYMtwvNsuep80vlO%2FVsolJCDQKVaSvi7EguaE%2FkomrgZKr9bnRvSvWL%2BboFwgs%2FWw5WymjKiDpo%2FZsaAVyo8OAC3ZjXc8DDSS6RPs8ELlk32JEZ80%2BXRuH%2F5jfW8Rclt0D2cXlur0kyhsT3gxObZtugQOUDf03sOhqBMBKhza6SfunPQtfjUSfO%2BghfM8stp5B36MLv408wvNypHmnLJf%2BXMaPAUG8eXwbOwyLAXG8RFOAjSkqnWujCkVW3MWIiXcbxkWcqU7NwKDZKma%2Fy9JxcEbPp1kyNWU4Jd4Fy9gu7fFSuavNbiscviuvdhxmx9JYsqBkEhzt1wySrrTmTAIVod1MW5wIElIrRK3SrIIwUA1zp9K3uumhTWBG9xYYXecQAyROBSgVESaUmgKMSFhKoik4nT%2BJkfdfJ3qioWY8agUvWV%2Fvxerv0SSnx%2FjTokd4nbxOQozDbzYe%2BBjqkAQ5I5xZHFsjvUaTZxN%2BZck%2BDu%2Fw2SI%2BbrT03uuZwfpTSIsWfQJksn%2FPZg%2B5CXIwUOJsOTjNWTv%2Fnthth0Scr5bNrdMehf8QZ%2BEo1mrsWNbf4KgEGtRvHMaCc6J6%2F6%2FG17batjIWEU87v76qGbTfmKo62lDHfS8EuZ4hQX8ivhQHLHRkN1rdIWSm1eFrliy0dueDuAY%2Byc4FgkRbPdxcR2ZDl0cIM&X-Amz-Signature=3ce84b63ac5380b64a020dafd9bcd934dc537836ae765a1449e72e85a8c39470&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DYW2BX4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDA09HOv4bnJ19ERJRb5tiF0Pvd8OXNQeT2y%2BMnxrWJ%2BQIhAPVcQhkcVuzmFMIwWsQ%2BhH0KfMYP6FQ3C51kfBoPR1WaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoYSc4NRoc0rgh7bcq3AN7yUDbglJdvxDMNFhtKBlHoBHRkE5M71srZEquZTJNkJFvgN8hC%2FEJ6FvCdZkQO1jS2TUA9KrT29ey%2Fdbm%2FYWKhT%2F1wfZ2U%2Bs8ISw46U1xaHozlzVxgZWFaUDtjj3Hg4KtNMZcSk7NU6YS4UHLR4ATUlSuRmr0gB%2FA%2FpqRopHaA5PekHILDaYMtwvNsuep80vlO%2FVsolJCDQKVaSvi7EguaE%2FkomrgZKr9bnRvSvWL%2BboFwgs%2FWw5WymjKiDpo%2FZsaAVyo8OAC3ZjXc8DDSS6RPs8ELlk32JEZ80%2BXRuH%2F5jfW8Rclt0D2cXlur0kyhsT3gxObZtugQOUDf03sOhqBMBKhza6SfunPQtfjUSfO%2BghfM8stp5B36MLv408wvNypHmnLJf%2BXMaPAUG8eXwbOwyLAXG8RFOAjSkqnWujCkVW3MWIiXcbxkWcqU7NwKDZKma%2Fy9JxcEbPp1kyNWU4Jd4Fy9gu7fFSuavNbiscviuvdhxmx9JYsqBkEhzt1wySrrTmTAIVod1MW5wIElIrRK3SrIIwUA1zp9K3uumhTWBG9xYYXecQAyROBSgVESaUmgKMSFhKoik4nT%2BJkfdfJ3qioWY8agUvWV%2Fvxerv0SSnx%2FjTokd4nbxOQozDbzYe%2BBjqkAQ5I5xZHFsjvUaTZxN%2BZck%2BDu%2Fw2SI%2BbrT03uuZwfpTSIsWfQJksn%2FPZg%2B5CXIwUOJsOTjNWTv%2Fnthth0Scr5bNrdMehf8QZ%2BEo1mrsWNbf4KgEGtRvHMaCc6J6%2F6%2FG17batjIWEU87v76qGbTfmKo62lDHfS8EuZ4hQX8ivhQHLHRkN1rdIWSm1eFrliy0dueDuAY%2Byc4FgkRbPdxcR2ZDl0cIM&X-Amz-Signature=80595a73b3f6b6b9754fbc1542ee98ea0f345943ae8d68cb9567f002f8d18668&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DYW2BX4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDA09HOv4bnJ19ERJRb5tiF0Pvd8OXNQeT2y%2BMnxrWJ%2BQIhAPVcQhkcVuzmFMIwWsQ%2BhH0KfMYP6FQ3C51kfBoPR1WaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoYSc4NRoc0rgh7bcq3AN7yUDbglJdvxDMNFhtKBlHoBHRkE5M71srZEquZTJNkJFvgN8hC%2FEJ6FvCdZkQO1jS2TUA9KrT29ey%2Fdbm%2FYWKhT%2F1wfZ2U%2Bs8ISw46U1xaHozlzVxgZWFaUDtjj3Hg4KtNMZcSk7NU6YS4UHLR4ATUlSuRmr0gB%2FA%2FpqRopHaA5PekHILDaYMtwvNsuep80vlO%2FVsolJCDQKVaSvi7EguaE%2FkomrgZKr9bnRvSvWL%2BboFwgs%2FWw5WymjKiDpo%2FZsaAVyo8OAC3ZjXc8DDSS6RPs8ELlk32JEZ80%2BXRuH%2F5jfW8Rclt0D2cXlur0kyhsT3gxObZtugQOUDf03sOhqBMBKhza6SfunPQtfjUSfO%2BghfM8stp5B36MLv408wvNypHmnLJf%2BXMaPAUG8eXwbOwyLAXG8RFOAjSkqnWujCkVW3MWIiXcbxkWcqU7NwKDZKma%2Fy9JxcEbPp1kyNWU4Jd4Fy9gu7fFSuavNbiscviuvdhxmx9JYsqBkEhzt1wySrrTmTAIVod1MW5wIElIrRK3SrIIwUA1zp9K3uumhTWBG9xYYXecQAyROBSgVESaUmgKMSFhKoik4nT%2BJkfdfJ3qioWY8agUvWV%2Fvxerv0SSnx%2FjTokd4nbxOQozDbzYe%2BBjqkAQ5I5xZHFsjvUaTZxN%2BZck%2BDu%2Fw2SI%2BbrT03uuZwfpTSIsWfQJksn%2FPZg%2B5CXIwUOJsOTjNWTv%2Fnthth0Scr5bNrdMehf8QZ%2BEo1mrsWNbf4KgEGtRvHMaCc6J6%2F6%2FG17batjIWEU87v76qGbTfmKo62lDHfS8EuZ4hQX8ivhQHLHRkN1rdIWSm1eFrliy0dueDuAY%2Byc4FgkRbPdxcR2ZDl0cIM&X-Amz-Signature=a90c0422c2336e4ae1d4dacbb9c153b13694fcdac9cc0780b0456d461a4389a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DYW2BX4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDA09HOv4bnJ19ERJRb5tiF0Pvd8OXNQeT2y%2BMnxrWJ%2BQIhAPVcQhkcVuzmFMIwWsQ%2BhH0KfMYP6FQ3C51kfBoPR1WaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoYSc4NRoc0rgh7bcq3AN7yUDbglJdvxDMNFhtKBlHoBHRkE5M71srZEquZTJNkJFvgN8hC%2FEJ6FvCdZkQO1jS2TUA9KrT29ey%2Fdbm%2FYWKhT%2F1wfZ2U%2Bs8ISw46U1xaHozlzVxgZWFaUDtjj3Hg4KtNMZcSk7NU6YS4UHLR4ATUlSuRmr0gB%2FA%2FpqRopHaA5PekHILDaYMtwvNsuep80vlO%2FVsolJCDQKVaSvi7EguaE%2FkomrgZKr9bnRvSvWL%2BboFwgs%2FWw5WymjKiDpo%2FZsaAVyo8OAC3ZjXc8DDSS6RPs8ELlk32JEZ80%2BXRuH%2F5jfW8Rclt0D2cXlur0kyhsT3gxObZtugQOUDf03sOhqBMBKhza6SfunPQtfjUSfO%2BghfM8stp5B36MLv408wvNypHmnLJf%2BXMaPAUG8eXwbOwyLAXG8RFOAjSkqnWujCkVW3MWIiXcbxkWcqU7NwKDZKma%2Fy9JxcEbPp1kyNWU4Jd4Fy9gu7fFSuavNbiscviuvdhxmx9JYsqBkEhzt1wySrrTmTAIVod1MW5wIElIrRK3SrIIwUA1zp9K3uumhTWBG9xYYXecQAyROBSgVESaUmgKMSFhKoik4nT%2BJkfdfJ3qioWY8agUvWV%2Fvxerv0SSnx%2FjTokd4nbxOQozDbzYe%2BBjqkAQ5I5xZHFsjvUaTZxN%2BZck%2BDu%2Fw2SI%2BbrT03uuZwfpTSIsWfQJksn%2FPZg%2B5CXIwUOJsOTjNWTv%2Fnthth0Scr5bNrdMehf8QZ%2BEo1mrsWNbf4KgEGtRvHMaCc6J6%2F6%2FG17batjIWEU87v76qGbTfmKo62lDHfS8EuZ4hQX8ivhQHLHRkN1rdIWSm1eFrliy0dueDuAY%2Byc4FgkRbPdxcR2ZDl0cIM&X-Amz-Signature=efe4b391193bccc23bd4b67cc057ec7b7bfffe1ca0b844b15b020208f7897293&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DYW2BX4%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDA09HOv4bnJ19ERJRb5tiF0Pvd8OXNQeT2y%2BMnxrWJ%2BQIhAPVcQhkcVuzmFMIwWsQ%2BhH0KfMYP6FQ3C51kfBoPR1WaKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoYSc4NRoc0rgh7bcq3AN7yUDbglJdvxDMNFhtKBlHoBHRkE5M71srZEquZTJNkJFvgN8hC%2FEJ6FvCdZkQO1jS2TUA9KrT29ey%2Fdbm%2FYWKhT%2F1wfZ2U%2Bs8ISw46U1xaHozlzVxgZWFaUDtjj3Hg4KtNMZcSk7NU6YS4UHLR4ATUlSuRmr0gB%2FA%2FpqRopHaA5PekHILDaYMtwvNsuep80vlO%2FVsolJCDQKVaSvi7EguaE%2FkomrgZKr9bnRvSvWL%2BboFwgs%2FWw5WymjKiDpo%2FZsaAVyo8OAC3ZjXc8DDSS6RPs8ELlk32JEZ80%2BXRuH%2F5jfW8Rclt0D2cXlur0kyhsT3gxObZtugQOUDf03sOhqBMBKhza6SfunPQtfjUSfO%2BghfM8stp5B36MLv408wvNypHmnLJf%2BXMaPAUG8eXwbOwyLAXG8RFOAjSkqnWujCkVW3MWIiXcbxkWcqU7NwKDZKma%2Fy9JxcEbPp1kyNWU4Jd4Fy9gu7fFSuavNbiscviuvdhxmx9JYsqBkEhzt1wySrrTmTAIVod1MW5wIElIrRK3SrIIwUA1zp9K3uumhTWBG9xYYXecQAyROBSgVESaUmgKMSFhKoik4nT%2BJkfdfJ3qioWY8agUvWV%2Fvxerv0SSnx%2FjTokd4nbxOQozDbzYe%2BBjqkAQ5I5xZHFsjvUaTZxN%2BZck%2BDu%2Fw2SI%2BbrT03uuZwfpTSIsWfQJksn%2FPZg%2B5CXIwUOJsOTjNWTv%2Fnthth0Scr5bNrdMehf8QZ%2BEo1mrsWNbf4KgEGtRvHMaCc6J6%2F6%2FG17batjIWEU87v76qGbTfmKo62lDHfS8EuZ4hQX8ivhQHLHRkN1rdIWSm1eFrliy0dueDuAY%2Byc4FgkRbPdxcR2ZDl0cIM&X-Amz-Signature=494b7622366593ada3ef5881cd5196836003d88f04fb1bb99bf4793231351c08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
