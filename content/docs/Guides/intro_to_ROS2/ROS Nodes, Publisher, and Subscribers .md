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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TE246KJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFfm2o1FMIPqaG%2FfCoj6DLPWVL8VSss7p0sgt1SjXSt0AiEAq3rXNZHhrhY7Qk%2B1AJk4qzOgFaI1y1yoAVCseVsZ2ocq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOVodUBomWYT5%2FlAfyrcA1VluHp38cJozyk239E%2FZAbrG5DiECQUevCRKrYyXKWz%2BIETNK0F4S1220YZcLn04sp9qhMyzSlWbMevejzMhOimlyqhahLKUcmuaw%2FSouKGxgWRPQ8s6%2Fsu2E0AicvVzAbuJdjnbym5CP%2FmLqwiAE%2BSElX4XYiQzQCqgWq%2BDqo1wheQ%2BzejKXUPbwaJC9mCy%2BweHcfJYWbXSEZRldYwPhacrqqsvKyLkCgzTmWArqXKxGLJg9pWrhcxQsqVgcdN33PH7RInZhDfrxyGlIJhM4HNVKUV9MtpYkaBii1q1vJre44F5DfyQENU4SQ2ACurGcNB9%2BohkCUn6tfqUPPprhUd2SY6hLH9sscrpZ9C%2Fbt2f%2BXYWgxJs3ZdsPHyDys41%2BLaeFFjFFgEbNN2a3DZtk4ZbC2R%2F9MurndwgGUZQzINeXoVoZXpp3J7LmBY9M5qgs7M1JKZFi7EkliXYI7nGjq1JRJcrgv4fKnRjaXEdSdT0QieKH%2F2U1OuA%2FR60IL9vHUOl992XadGxkn50C1DRDidqCoxiKyvft4tMHm9ssRkOgqXRfRLFA2ds93bdpdunOABRO1x9GlGitQnONoHKvV7sXBLxiT3n%2FwUs%2FIaEJUDkHe3tykh77RxkeUoMMfFwMQGOqUB6H49iFuCBunVrFwcTsLH3pzQ2OwGsjwv8SuzmpFq%2BrUUTFukWpjMafjPfHnhJqHobMMSokXP9XlfFjGHrGl4kMJUuo0GfELuvcINHCep4TmRinhvdqRTb4%2FYsSmwNtkP%2FdLi5bJqWDOmv%2BiZqsrQ%2BEQw1aoTVhRekmTzAIkuxXjxKXIJSes%2FwZEsMYIOyh4%2BLdBq%2BAyqF%2F161YI%2FYCASm4mqm6uc&X-Amz-Signature=07b7a2ffcd076c504e898da13a00f6d081bfb6a3aa2835fd80c57619359a1998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TE246KJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFfm2o1FMIPqaG%2FfCoj6DLPWVL8VSss7p0sgt1SjXSt0AiEAq3rXNZHhrhY7Qk%2B1AJk4qzOgFaI1y1yoAVCseVsZ2ocq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOVodUBomWYT5%2FlAfyrcA1VluHp38cJozyk239E%2FZAbrG5DiECQUevCRKrYyXKWz%2BIETNK0F4S1220YZcLn04sp9qhMyzSlWbMevejzMhOimlyqhahLKUcmuaw%2FSouKGxgWRPQ8s6%2Fsu2E0AicvVzAbuJdjnbym5CP%2FmLqwiAE%2BSElX4XYiQzQCqgWq%2BDqo1wheQ%2BzejKXUPbwaJC9mCy%2BweHcfJYWbXSEZRldYwPhacrqqsvKyLkCgzTmWArqXKxGLJg9pWrhcxQsqVgcdN33PH7RInZhDfrxyGlIJhM4HNVKUV9MtpYkaBii1q1vJre44F5DfyQENU4SQ2ACurGcNB9%2BohkCUn6tfqUPPprhUd2SY6hLH9sscrpZ9C%2Fbt2f%2BXYWgxJs3ZdsPHyDys41%2BLaeFFjFFgEbNN2a3DZtk4ZbC2R%2F9MurndwgGUZQzINeXoVoZXpp3J7LmBY9M5qgs7M1JKZFi7EkliXYI7nGjq1JRJcrgv4fKnRjaXEdSdT0QieKH%2F2U1OuA%2FR60IL9vHUOl992XadGxkn50C1DRDidqCoxiKyvft4tMHm9ssRkOgqXRfRLFA2ds93bdpdunOABRO1x9GlGitQnONoHKvV7sXBLxiT3n%2FwUs%2FIaEJUDkHe3tykh77RxkeUoMMfFwMQGOqUB6H49iFuCBunVrFwcTsLH3pzQ2OwGsjwv8SuzmpFq%2BrUUTFukWpjMafjPfHnhJqHobMMSokXP9XlfFjGHrGl4kMJUuo0GfELuvcINHCep4TmRinhvdqRTb4%2FYsSmwNtkP%2FdLi5bJqWDOmv%2BiZqsrQ%2BEQw1aoTVhRekmTzAIkuxXjxKXIJSes%2FwZEsMYIOyh4%2BLdBq%2BAyqF%2F161YI%2FYCASm4mqm6uc&X-Amz-Signature=5fd3c0330846dd3d136ace489c8d6e230d667b4037f1687e2b42afa1173cc4b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TE246KJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFfm2o1FMIPqaG%2FfCoj6DLPWVL8VSss7p0sgt1SjXSt0AiEAq3rXNZHhrhY7Qk%2B1AJk4qzOgFaI1y1yoAVCseVsZ2ocq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOVodUBomWYT5%2FlAfyrcA1VluHp38cJozyk239E%2FZAbrG5DiECQUevCRKrYyXKWz%2BIETNK0F4S1220YZcLn04sp9qhMyzSlWbMevejzMhOimlyqhahLKUcmuaw%2FSouKGxgWRPQ8s6%2Fsu2E0AicvVzAbuJdjnbym5CP%2FmLqwiAE%2BSElX4XYiQzQCqgWq%2BDqo1wheQ%2BzejKXUPbwaJC9mCy%2BweHcfJYWbXSEZRldYwPhacrqqsvKyLkCgzTmWArqXKxGLJg9pWrhcxQsqVgcdN33PH7RInZhDfrxyGlIJhM4HNVKUV9MtpYkaBii1q1vJre44F5DfyQENU4SQ2ACurGcNB9%2BohkCUn6tfqUPPprhUd2SY6hLH9sscrpZ9C%2Fbt2f%2BXYWgxJs3ZdsPHyDys41%2BLaeFFjFFgEbNN2a3DZtk4ZbC2R%2F9MurndwgGUZQzINeXoVoZXpp3J7LmBY9M5qgs7M1JKZFi7EkliXYI7nGjq1JRJcrgv4fKnRjaXEdSdT0QieKH%2F2U1OuA%2FR60IL9vHUOl992XadGxkn50C1DRDidqCoxiKyvft4tMHm9ssRkOgqXRfRLFA2ds93bdpdunOABRO1x9GlGitQnONoHKvV7sXBLxiT3n%2FwUs%2FIaEJUDkHe3tykh77RxkeUoMMfFwMQGOqUB6H49iFuCBunVrFwcTsLH3pzQ2OwGsjwv8SuzmpFq%2BrUUTFukWpjMafjPfHnhJqHobMMSokXP9XlfFjGHrGl4kMJUuo0GfELuvcINHCep4TmRinhvdqRTb4%2FYsSmwNtkP%2FdLi5bJqWDOmv%2BiZqsrQ%2BEQw1aoTVhRekmTzAIkuxXjxKXIJSes%2FwZEsMYIOyh4%2BLdBq%2BAyqF%2F161YI%2FYCASm4mqm6uc&X-Amz-Signature=f77863152b2c011a23321563593d94742b52dd44120f529bc766776f7491e390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TE246KJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFfm2o1FMIPqaG%2FfCoj6DLPWVL8VSss7p0sgt1SjXSt0AiEAq3rXNZHhrhY7Qk%2B1AJk4qzOgFaI1y1yoAVCseVsZ2ocq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOVodUBomWYT5%2FlAfyrcA1VluHp38cJozyk239E%2FZAbrG5DiECQUevCRKrYyXKWz%2BIETNK0F4S1220YZcLn04sp9qhMyzSlWbMevejzMhOimlyqhahLKUcmuaw%2FSouKGxgWRPQ8s6%2Fsu2E0AicvVzAbuJdjnbym5CP%2FmLqwiAE%2BSElX4XYiQzQCqgWq%2BDqo1wheQ%2BzejKXUPbwaJC9mCy%2BweHcfJYWbXSEZRldYwPhacrqqsvKyLkCgzTmWArqXKxGLJg9pWrhcxQsqVgcdN33PH7RInZhDfrxyGlIJhM4HNVKUV9MtpYkaBii1q1vJre44F5DfyQENU4SQ2ACurGcNB9%2BohkCUn6tfqUPPprhUd2SY6hLH9sscrpZ9C%2Fbt2f%2BXYWgxJs3ZdsPHyDys41%2BLaeFFjFFgEbNN2a3DZtk4ZbC2R%2F9MurndwgGUZQzINeXoVoZXpp3J7LmBY9M5qgs7M1JKZFi7EkliXYI7nGjq1JRJcrgv4fKnRjaXEdSdT0QieKH%2F2U1OuA%2FR60IL9vHUOl992XadGxkn50C1DRDidqCoxiKyvft4tMHm9ssRkOgqXRfRLFA2ds93bdpdunOABRO1x9GlGitQnONoHKvV7sXBLxiT3n%2FwUs%2FIaEJUDkHe3tykh77RxkeUoMMfFwMQGOqUB6H49iFuCBunVrFwcTsLH3pzQ2OwGsjwv8SuzmpFq%2BrUUTFukWpjMafjPfHnhJqHobMMSokXP9XlfFjGHrGl4kMJUuo0GfELuvcINHCep4TmRinhvdqRTb4%2FYsSmwNtkP%2FdLi5bJqWDOmv%2BiZqsrQ%2BEQw1aoTVhRekmTzAIkuxXjxKXIJSes%2FwZEsMYIOyh4%2BLdBq%2BAyqF%2F161YI%2FYCASm4mqm6uc&X-Amz-Signature=f19f179668be2bf47a7bf00bb179fa5798698a20cdbca1eb39c15dfdd1002467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TE246KJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFfm2o1FMIPqaG%2FfCoj6DLPWVL8VSss7p0sgt1SjXSt0AiEAq3rXNZHhrhY7Qk%2B1AJk4qzOgFaI1y1yoAVCseVsZ2ocq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOVodUBomWYT5%2FlAfyrcA1VluHp38cJozyk239E%2FZAbrG5DiECQUevCRKrYyXKWz%2BIETNK0F4S1220YZcLn04sp9qhMyzSlWbMevejzMhOimlyqhahLKUcmuaw%2FSouKGxgWRPQ8s6%2Fsu2E0AicvVzAbuJdjnbym5CP%2FmLqwiAE%2BSElX4XYiQzQCqgWq%2BDqo1wheQ%2BzejKXUPbwaJC9mCy%2BweHcfJYWbXSEZRldYwPhacrqqsvKyLkCgzTmWArqXKxGLJg9pWrhcxQsqVgcdN33PH7RInZhDfrxyGlIJhM4HNVKUV9MtpYkaBii1q1vJre44F5DfyQENU4SQ2ACurGcNB9%2BohkCUn6tfqUPPprhUd2SY6hLH9sscrpZ9C%2Fbt2f%2BXYWgxJs3ZdsPHyDys41%2BLaeFFjFFgEbNN2a3DZtk4ZbC2R%2F9MurndwgGUZQzINeXoVoZXpp3J7LmBY9M5qgs7M1JKZFi7EkliXYI7nGjq1JRJcrgv4fKnRjaXEdSdT0QieKH%2F2U1OuA%2FR60IL9vHUOl992XadGxkn50C1DRDidqCoxiKyvft4tMHm9ssRkOgqXRfRLFA2ds93bdpdunOABRO1x9GlGitQnONoHKvV7sXBLxiT3n%2FwUs%2FIaEJUDkHe3tykh77RxkeUoMMfFwMQGOqUB6H49iFuCBunVrFwcTsLH3pzQ2OwGsjwv8SuzmpFq%2BrUUTFukWpjMafjPfHnhJqHobMMSokXP9XlfFjGHrGl4kMJUuo0GfELuvcINHCep4TmRinhvdqRTb4%2FYsSmwNtkP%2FdLi5bJqWDOmv%2BiZqsrQ%2BEQw1aoTVhRekmTzAIkuxXjxKXIJSes%2FwZEsMYIOyh4%2BLdBq%2BAyqF%2F161YI%2FYCASm4mqm6uc&X-Amz-Signature=697faaff946ba5071185b635527d09592542e089a8a4e91181103956ebfff74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TE246KJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFfm2o1FMIPqaG%2FfCoj6DLPWVL8VSss7p0sgt1SjXSt0AiEAq3rXNZHhrhY7Qk%2B1AJk4qzOgFaI1y1yoAVCseVsZ2ocq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOVodUBomWYT5%2FlAfyrcA1VluHp38cJozyk239E%2FZAbrG5DiECQUevCRKrYyXKWz%2BIETNK0F4S1220YZcLn04sp9qhMyzSlWbMevejzMhOimlyqhahLKUcmuaw%2FSouKGxgWRPQ8s6%2Fsu2E0AicvVzAbuJdjnbym5CP%2FmLqwiAE%2BSElX4XYiQzQCqgWq%2BDqo1wheQ%2BzejKXUPbwaJC9mCy%2BweHcfJYWbXSEZRldYwPhacrqqsvKyLkCgzTmWArqXKxGLJg9pWrhcxQsqVgcdN33PH7RInZhDfrxyGlIJhM4HNVKUV9MtpYkaBii1q1vJre44F5DfyQENU4SQ2ACurGcNB9%2BohkCUn6tfqUPPprhUd2SY6hLH9sscrpZ9C%2Fbt2f%2BXYWgxJs3ZdsPHyDys41%2BLaeFFjFFgEbNN2a3DZtk4ZbC2R%2F9MurndwgGUZQzINeXoVoZXpp3J7LmBY9M5qgs7M1JKZFi7EkliXYI7nGjq1JRJcrgv4fKnRjaXEdSdT0QieKH%2F2U1OuA%2FR60IL9vHUOl992XadGxkn50C1DRDidqCoxiKyvft4tMHm9ssRkOgqXRfRLFA2ds93bdpdunOABRO1x9GlGitQnONoHKvV7sXBLxiT3n%2FwUs%2FIaEJUDkHe3tykh77RxkeUoMMfFwMQGOqUB6H49iFuCBunVrFwcTsLH3pzQ2OwGsjwv8SuzmpFq%2BrUUTFukWpjMafjPfHnhJqHobMMSokXP9XlfFjGHrGl4kMJUuo0GfELuvcINHCep4TmRinhvdqRTb4%2FYsSmwNtkP%2FdLi5bJqWDOmv%2BiZqsrQ%2BEQw1aoTVhRekmTzAIkuxXjxKXIJSes%2FwZEsMYIOyh4%2BLdBq%2BAyqF%2F161YI%2FYCASm4mqm6uc&X-Amz-Signature=3ba7b7527924420ff24e1b3eee6217480ecde24a08c1a86a4ad174258508e233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TE246KJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFfm2o1FMIPqaG%2FfCoj6DLPWVL8VSss7p0sgt1SjXSt0AiEAq3rXNZHhrhY7Qk%2B1AJk4qzOgFaI1y1yoAVCseVsZ2ocq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOVodUBomWYT5%2FlAfyrcA1VluHp38cJozyk239E%2FZAbrG5DiECQUevCRKrYyXKWz%2BIETNK0F4S1220YZcLn04sp9qhMyzSlWbMevejzMhOimlyqhahLKUcmuaw%2FSouKGxgWRPQ8s6%2Fsu2E0AicvVzAbuJdjnbym5CP%2FmLqwiAE%2BSElX4XYiQzQCqgWq%2BDqo1wheQ%2BzejKXUPbwaJC9mCy%2BweHcfJYWbXSEZRldYwPhacrqqsvKyLkCgzTmWArqXKxGLJg9pWrhcxQsqVgcdN33PH7RInZhDfrxyGlIJhM4HNVKUV9MtpYkaBii1q1vJre44F5DfyQENU4SQ2ACurGcNB9%2BohkCUn6tfqUPPprhUd2SY6hLH9sscrpZ9C%2Fbt2f%2BXYWgxJs3ZdsPHyDys41%2BLaeFFjFFgEbNN2a3DZtk4ZbC2R%2F9MurndwgGUZQzINeXoVoZXpp3J7LmBY9M5qgs7M1JKZFi7EkliXYI7nGjq1JRJcrgv4fKnRjaXEdSdT0QieKH%2F2U1OuA%2FR60IL9vHUOl992XadGxkn50C1DRDidqCoxiKyvft4tMHm9ssRkOgqXRfRLFA2ds93bdpdunOABRO1x9GlGitQnONoHKvV7sXBLxiT3n%2FwUs%2FIaEJUDkHe3tykh77RxkeUoMMfFwMQGOqUB6H49iFuCBunVrFwcTsLH3pzQ2OwGsjwv8SuzmpFq%2BrUUTFukWpjMafjPfHnhJqHobMMSokXP9XlfFjGHrGl4kMJUuo0GfELuvcINHCep4TmRinhvdqRTb4%2FYsSmwNtkP%2FdLi5bJqWDOmv%2BiZqsrQ%2BEQw1aoTVhRekmTzAIkuxXjxKXIJSes%2FwZEsMYIOyh4%2BLdBq%2BAyqF%2F161YI%2FYCASm4mqm6uc&X-Amz-Signature=d3ea42e61ebc3346f4a3d0e7b3f9492e7e73fcb07e47b14e02fc81da6e8ae319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TE246KJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFfm2o1FMIPqaG%2FfCoj6DLPWVL8VSss7p0sgt1SjXSt0AiEAq3rXNZHhrhY7Qk%2B1AJk4qzOgFaI1y1yoAVCseVsZ2ocq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDOVodUBomWYT5%2FlAfyrcA1VluHp38cJozyk239E%2FZAbrG5DiECQUevCRKrYyXKWz%2BIETNK0F4S1220YZcLn04sp9qhMyzSlWbMevejzMhOimlyqhahLKUcmuaw%2FSouKGxgWRPQ8s6%2Fsu2E0AicvVzAbuJdjnbym5CP%2FmLqwiAE%2BSElX4XYiQzQCqgWq%2BDqo1wheQ%2BzejKXUPbwaJC9mCy%2BweHcfJYWbXSEZRldYwPhacrqqsvKyLkCgzTmWArqXKxGLJg9pWrhcxQsqVgcdN33PH7RInZhDfrxyGlIJhM4HNVKUV9MtpYkaBii1q1vJre44F5DfyQENU4SQ2ACurGcNB9%2BohkCUn6tfqUPPprhUd2SY6hLH9sscrpZ9C%2Fbt2f%2BXYWgxJs3ZdsPHyDys41%2BLaeFFjFFgEbNN2a3DZtk4ZbC2R%2F9MurndwgGUZQzINeXoVoZXpp3J7LmBY9M5qgs7M1JKZFi7EkliXYI7nGjq1JRJcrgv4fKnRjaXEdSdT0QieKH%2F2U1OuA%2FR60IL9vHUOl992XadGxkn50C1DRDidqCoxiKyvft4tMHm9ssRkOgqXRfRLFA2ds93bdpdunOABRO1x9GlGitQnONoHKvV7sXBLxiT3n%2FwUs%2FIaEJUDkHe3tykh77RxkeUoMMfFwMQGOqUB6H49iFuCBunVrFwcTsLH3pzQ2OwGsjwv8SuzmpFq%2BrUUTFukWpjMafjPfHnhJqHobMMSokXP9XlfFjGHrGl4kMJUuo0GfELuvcINHCep4TmRinhvdqRTb4%2FYsSmwNtkP%2FdLi5bJqWDOmv%2BiZqsrQ%2BEQw1aoTVhRekmTzAIkuxXjxKXIJSes%2FwZEsMYIOyh4%2BLdBq%2BAyqF%2F161YI%2FYCASm4mqm6uc&X-Amz-Signature=2dca81c2ba5b9dff64cd3bb51ac5ddc5a27c7ad246288cd80f1742c4556a324e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
