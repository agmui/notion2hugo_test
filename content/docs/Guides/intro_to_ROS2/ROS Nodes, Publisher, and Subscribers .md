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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIYGQLX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRn1Ol3i7hNWx1oDxYAlsnBZiv93F%2B8k%2F0i0IKvbceFAiAcikuxgWd%2B%2F0rnIFGj4RDh%2FPeugW8CC24ZpFikqOG34CqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJd8ffzPqZf1FlrElKtwDOyjxhbuj%2BLC5oly4vibh0mVSPCHsa2TJQcZIAYx%2FxcAZBzll8VbVYgByNJ%2Ftm%2BXaahHBDv3LzVIeGc5XwJaMCNGna64f7DNUPNzEIPkYlBewIZgYIFEK9Vjv9LlvIAVc%2FIncjCI8LlWU%2B5qMuJqEGZrBCBn0pwR8HF8wgZ449pRHS%2FGJu1ZbdpscT87KmIR07Eo8SsRmgfqUE8%2FxTrBC4pxhXYj%2FNzRRKxMAdrSZlvDp4izCpBh03e9EqYmO7iRLtOzv36tix8V1xLzb2optja17Tj8O7Y%2BeEkxLnLy23udMSE82tYzJ3YG7tasr15adsH%2B%2Bwmy8gpW861rMA%2Bvo14cMEJipQkc3Y8NcZUz%2BVjxdk9sSHvcKpbdgNJaHfgSFGYXlOInS4mQdCRrymHtZoT3%2Bimu5AEeYD9QaEUQnrySxs%2BptgWfdR%2FEBpwvvdKDZmr4k50B2oahxiP48HD9DVhO%2BtvYrel8OAv1D2OGComVEcMRDB0KrTjFBHMzgM9CJ5gilHp4PISD8oPIB9gs9kU7rmaQZkBCcLhAlvXJHPQosgYNlkSNenPTPWsjTqec3f9jcHi6gpk0vjLaCnzGzACxFTZjcfFpZ5TKyFE8JEU8KJ0a8gejTRkudPkcwj7fKwgY6pgGl45nim7hbikwpVwiYKfVbXG%2BdrZUMDZcL4vygyUk79tOA%2Fgl7Sq9ctb%2FQCKMuRkmFr618E9eGshpkfo%2BUAthW%2FPcwSYfWU%2F8hbY4tX2tBK6VPMwbwOimKXEmxQIlClQPD2K%2B%2Bvi7a32WAt3ss46iecvhuz7%2BdiPKIVdrItE6T6tWfnvDZxg061KeOpZ8ZIMeeDgCWKxR8p3AHmGoGllnrWgH2IuuL&X-Amz-Signature=41baa3141a1dc66e3ac5a6ed51efc4b579970cb9c24c5382145889379df1fd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIYGQLX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRn1Ol3i7hNWx1oDxYAlsnBZiv93F%2B8k%2F0i0IKvbceFAiAcikuxgWd%2B%2F0rnIFGj4RDh%2FPeugW8CC24ZpFikqOG34CqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJd8ffzPqZf1FlrElKtwDOyjxhbuj%2BLC5oly4vibh0mVSPCHsa2TJQcZIAYx%2FxcAZBzll8VbVYgByNJ%2Ftm%2BXaahHBDv3LzVIeGc5XwJaMCNGna64f7DNUPNzEIPkYlBewIZgYIFEK9Vjv9LlvIAVc%2FIncjCI8LlWU%2B5qMuJqEGZrBCBn0pwR8HF8wgZ449pRHS%2FGJu1ZbdpscT87KmIR07Eo8SsRmgfqUE8%2FxTrBC4pxhXYj%2FNzRRKxMAdrSZlvDp4izCpBh03e9EqYmO7iRLtOzv36tix8V1xLzb2optja17Tj8O7Y%2BeEkxLnLy23udMSE82tYzJ3YG7tasr15adsH%2B%2Bwmy8gpW861rMA%2Bvo14cMEJipQkc3Y8NcZUz%2BVjxdk9sSHvcKpbdgNJaHfgSFGYXlOInS4mQdCRrymHtZoT3%2Bimu5AEeYD9QaEUQnrySxs%2BptgWfdR%2FEBpwvvdKDZmr4k50B2oahxiP48HD9DVhO%2BtvYrel8OAv1D2OGComVEcMRDB0KrTjFBHMzgM9CJ5gilHp4PISD8oPIB9gs9kU7rmaQZkBCcLhAlvXJHPQosgYNlkSNenPTPWsjTqec3f9jcHi6gpk0vjLaCnzGzACxFTZjcfFpZ5TKyFE8JEU8KJ0a8gejTRkudPkcwj7fKwgY6pgGl45nim7hbikwpVwiYKfVbXG%2BdrZUMDZcL4vygyUk79tOA%2Fgl7Sq9ctb%2FQCKMuRkmFr618E9eGshpkfo%2BUAthW%2FPcwSYfWU%2F8hbY4tX2tBK6VPMwbwOimKXEmxQIlClQPD2K%2B%2Bvi7a32WAt3ss46iecvhuz7%2BdiPKIVdrItE6T6tWfnvDZxg061KeOpZ8ZIMeeDgCWKxR8p3AHmGoGllnrWgH2IuuL&X-Amz-Signature=d87e3b3e451b0f402674cde85cd29735b5b6b80d0eed07858964e817e6d46137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIYGQLX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRn1Ol3i7hNWx1oDxYAlsnBZiv93F%2B8k%2F0i0IKvbceFAiAcikuxgWd%2B%2F0rnIFGj4RDh%2FPeugW8CC24ZpFikqOG34CqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJd8ffzPqZf1FlrElKtwDOyjxhbuj%2BLC5oly4vibh0mVSPCHsa2TJQcZIAYx%2FxcAZBzll8VbVYgByNJ%2Ftm%2BXaahHBDv3LzVIeGc5XwJaMCNGna64f7DNUPNzEIPkYlBewIZgYIFEK9Vjv9LlvIAVc%2FIncjCI8LlWU%2B5qMuJqEGZrBCBn0pwR8HF8wgZ449pRHS%2FGJu1ZbdpscT87KmIR07Eo8SsRmgfqUE8%2FxTrBC4pxhXYj%2FNzRRKxMAdrSZlvDp4izCpBh03e9EqYmO7iRLtOzv36tix8V1xLzb2optja17Tj8O7Y%2BeEkxLnLy23udMSE82tYzJ3YG7tasr15adsH%2B%2Bwmy8gpW861rMA%2Bvo14cMEJipQkc3Y8NcZUz%2BVjxdk9sSHvcKpbdgNJaHfgSFGYXlOInS4mQdCRrymHtZoT3%2Bimu5AEeYD9QaEUQnrySxs%2BptgWfdR%2FEBpwvvdKDZmr4k50B2oahxiP48HD9DVhO%2BtvYrel8OAv1D2OGComVEcMRDB0KrTjFBHMzgM9CJ5gilHp4PISD8oPIB9gs9kU7rmaQZkBCcLhAlvXJHPQosgYNlkSNenPTPWsjTqec3f9jcHi6gpk0vjLaCnzGzACxFTZjcfFpZ5TKyFE8JEU8KJ0a8gejTRkudPkcwj7fKwgY6pgGl45nim7hbikwpVwiYKfVbXG%2BdrZUMDZcL4vygyUk79tOA%2Fgl7Sq9ctb%2FQCKMuRkmFr618E9eGshpkfo%2BUAthW%2FPcwSYfWU%2F8hbY4tX2tBK6VPMwbwOimKXEmxQIlClQPD2K%2B%2Bvi7a32WAt3ss46iecvhuz7%2BdiPKIVdrItE6T6tWfnvDZxg061KeOpZ8ZIMeeDgCWKxR8p3AHmGoGllnrWgH2IuuL&X-Amz-Signature=75d0cc2aa002fc0f0a0d3d870a8e2a8cd01124d314f405d15f93243a07b7462f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIYGQLX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRn1Ol3i7hNWx1oDxYAlsnBZiv93F%2B8k%2F0i0IKvbceFAiAcikuxgWd%2B%2F0rnIFGj4RDh%2FPeugW8CC24ZpFikqOG34CqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJd8ffzPqZf1FlrElKtwDOyjxhbuj%2BLC5oly4vibh0mVSPCHsa2TJQcZIAYx%2FxcAZBzll8VbVYgByNJ%2Ftm%2BXaahHBDv3LzVIeGc5XwJaMCNGna64f7DNUPNzEIPkYlBewIZgYIFEK9Vjv9LlvIAVc%2FIncjCI8LlWU%2B5qMuJqEGZrBCBn0pwR8HF8wgZ449pRHS%2FGJu1ZbdpscT87KmIR07Eo8SsRmgfqUE8%2FxTrBC4pxhXYj%2FNzRRKxMAdrSZlvDp4izCpBh03e9EqYmO7iRLtOzv36tix8V1xLzb2optja17Tj8O7Y%2BeEkxLnLy23udMSE82tYzJ3YG7tasr15adsH%2B%2Bwmy8gpW861rMA%2Bvo14cMEJipQkc3Y8NcZUz%2BVjxdk9sSHvcKpbdgNJaHfgSFGYXlOInS4mQdCRrymHtZoT3%2Bimu5AEeYD9QaEUQnrySxs%2BptgWfdR%2FEBpwvvdKDZmr4k50B2oahxiP48HD9DVhO%2BtvYrel8OAv1D2OGComVEcMRDB0KrTjFBHMzgM9CJ5gilHp4PISD8oPIB9gs9kU7rmaQZkBCcLhAlvXJHPQosgYNlkSNenPTPWsjTqec3f9jcHi6gpk0vjLaCnzGzACxFTZjcfFpZ5TKyFE8JEU8KJ0a8gejTRkudPkcwj7fKwgY6pgGl45nim7hbikwpVwiYKfVbXG%2BdrZUMDZcL4vygyUk79tOA%2Fgl7Sq9ctb%2FQCKMuRkmFr618E9eGshpkfo%2BUAthW%2FPcwSYfWU%2F8hbY4tX2tBK6VPMwbwOimKXEmxQIlClQPD2K%2B%2Bvi7a32WAt3ss46iecvhuz7%2BdiPKIVdrItE6T6tWfnvDZxg061KeOpZ8ZIMeeDgCWKxR8p3AHmGoGllnrWgH2IuuL&X-Amz-Signature=0144a0724dcb7904fc2064a555bd6087fb68734f16f2dad0f3061c30378c7ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIYGQLX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRn1Ol3i7hNWx1oDxYAlsnBZiv93F%2B8k%2F0i0IKvbceFAiAcikuxgWd%2B%2F0rnIFGj4RDh%2FPeugW8CC24ZpFikqOG34CqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJd8ffzPqZf1FlrElKtwDOyjxhbuj%2BLC5oly4vibh0mVSPCHsa2TJQcZIAYx%2FxcAZBzll8VbVYgByNJ%2Ftm%2BXaahHBDv3LzVIeGc5XwJaMCNGna64f7DNUPNzEIPkYlBewIZgYIFEK9Vjv9LlvIAVc%2FIncjCI8LlWU%2B5qMuJqEGZrBCBn0pwR8HF8wgZ449pRHS%2FGJu1ZbdpscT87KmIR07Eo8SsRmgfqUE8%2FxTrBC4pxhXYj%2FNzRRKxMAdrSZlvDp4izCpBh03e9EqYmO7iRLtOzv36tix8V1xLzb2optja17Tj8O7Y%2BeEkxLnLy23udMSE82tYzJ3YG7tasr15adsH%2B%2Bwmy8gpW861rMA%2Bvo14cMEJipQkc3Y8NcZUz%2BVjxdk9sSHvcKpbdgNJaHfgSFGYXlOInS4mQdCRrymHtZoT3%2Bimu5AEeYD9QaEUQnrySxs%2BptgWfdR%2FEBpwvvdKDZmr4k50B2oahxiP48HD9DVhO%2BtvYrel8OAv1D2OGComVEcMRDB0KrTjFBHMzgM9CJ5gilHp4PISD8oPIB9gs9kU7rmaQZkBCcLhAlvXJHPQosgYNlkSNenPTPWsjTqec3f9jcHi6gpk0vjLaCnzGzACxFTZjcfFpZ5TKyFE8JEU8KJ0a8gejTRkudPkcwj7fKwgY6pgGl45nim7hbikwpVwiYKfVbXG%2BdrZUMDZcL4vygyUk79tOA%2Fgl7Sq9ctb%2FQCKMuRkmFr618E9eGshpkfo%2BUAthW%2FPcwSYfWU%2F8hbY4tX2tBK6VPMwbwOimKXEmxQIlClQPD2K%2B%2Bvi7a32WAt3ss46iecvhuz7%2BdiPKIVdrItE6T6tWfnvDZxg061KeOpZ8ZIMeeDgCWKxR8p3AHmGoGllnrWgH2IuuL&X-Amz-Signature=a2506b2002af34700eb51211adfd66eef973fb2c84272ede8ae4a68820dd12f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIYGQLX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRn1Ol3i7hNWx1oDxYAlsnBZiv93F%2B8k%2F0i0IKvbceFAiAcikuxgWd%2B%2F0rnIFGj4RDh%2FPeugW8CC24ZpFikqOG34CqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJd8ffzPqZf1FlrElKtwDOyjxhbuj%2BLC5oly4vibh0mVSPCHsa2TJQcZIAYx%2FxcAZBzll8VbVYgByNJ%2Ftm%2BXaahHBDv3LzVIeGc5XwJaMCNGna64f7DNUPNzEIPkYlBewIZgYIFEK9Vjv9LlvIAVc%2FIncjCI8LlWU%2B5qMuJqEGZrBCBn0pwR8HF8wgZ449pRHS%2FGJu1ZbdpscT87KmIR07Eo8SsRmgfqUE8%2FxTrBC4pxhXYj%2FNzRRKxMAdrSZlvDp4izCpBh03e9EqYmO7iRLtOzv36tix8V1xLzb2optja17Tj8O7Y%2BeEkxLnLy23udMSE82tYzJ3YG7tasr15adsH%2B%2Bwmy8gpW861rMA%2Bvo14cMEJipQkc3Y8NcZUz%2BVjxdk9sSHvcKpbdgNJaHfgSFGYXlOInS4mQdCRrymHtZoT3%2Bimu5AEeYD9QaEUQnrySxs%2BptgWfdR%2FEBpwvvdKDZmr4k50B2oahxiP48HD9DVhO%2BtvYrel8OAv1D2OGComVEcMRDB0KrTjFBHMzgM9CJ5gilHp4PISD8oPIB9gs9kU7rmaQZkBCcLhAlvXJHPQosgYNlkSNenPTPWsjTqec3f9jcHi6gpk0vjLaCnzGzACxFTZjcfFpZ5TKyFE8JEU8KJ0a8gejTRkudPkcwj7fKwgY6pgGl45nim7hbikwpVwiYKfVbXG%2BdrZUMDZcL4vygyUk79tOA%2Fgl7Sq9ctb%2FQCKMuRkmFr618E9eGshpkfo%2BUAthW%2FPcwSYfWU%2F8hbY4tX2tBK6VPMwbwOimKXEmxQIlClQPD2K%2B%2Bvi7a32WAt3ss46iecvhuz7%2BdiPKIVdrItE6T6tWfnvDZxg061KeOpZ8ZIMeeDgCWKxR8p3AHmGoGllnrWgH2IuuL&X-Amz-Signature=7b68ed25c9f9d24af2a3325a7e4b1898ddf1ce0aa3dfff89414e37cbbfb03d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIYGQLX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRn1Ol3i7hNWx1oDxYAlsnBZiv93F%2B8k%2F0i0IKvbceFAiAcikuxgWd%2B%2F0rnIFGj4RDh%2FPeugW8CC24ZpFikqOG34CqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJd8ffzPqZf1FlrElKtwDOyjxhbuj%2BLC5oly4vibh0mVSPCHsa2TJQcZIAYx%2FxcAZBzll8VbVYgByNJ%2Ftm%2BXaahHBDv3LzVIeGc5XwJaMCNGna64f7DNUPNzEIPkYlBewIZgYIFEK9Vjv9LlvIAVc%2FIncjCI8LlWU%2B5qMuJqEGZrBCBn0pwR8HF8wgZ449pRHS%2FGJu1ZbdpscT87KmIR07Eo8SsRmgfqUE8%2FxTrBC4pxhXYj%2FNzRRKxMAdrSZlvDp4izCpBh03e9EqYmO7iRLtOzv36tix8V1xLzb2optja17Tj8O7Y%2BeEkxLnLy23udMSE82tYzJ3YG7tasr15adsH%2B%2Bwmy8gpW861rMA%2Bvo14cMEJipQkc3Y8NcZUz%2BVjxdk9sSHvcKpbdgNJaHfgSFGYXlOInS4mQdCRrymHtZoT3%2Bimu5AEeYD9QaEUQnrySxs%2BptgWfdR%2FEBpwvvdKDZmr4k50B2oahxiP48HD9DVhO%2BtvYrel8OAv1D2OGComVEcMRDB0KrTjFBHMzgM9CJ5gilHp4PISD8oPIB9gs9kU7rmaQZkBCcLhAlvXJHPQosgYNlkSNenPTPWsjTqec3f9jcHi6gpk0vjLaCnzGzACxFTZjcfFpZ5TKyFE8JEU8KJ0a8gejTRkudPkcwj7fKwgY6pgGl45nim7hbikwpVwiYKfVbXG%2BdrZUMDZcL4vygyUk79tOA%2Fgl7Sq9ctb%2FQCKMuRkmFr618E9eGshpkfo%2BUAthW%2FPcwSYfWU%2F8hbY4tX2tBK6VPMwbwOimKXEmxQIlClQPD2K%2B%2Bvi7a32WAt3ss46iecvhuz7%2BdiPKIVdrItE6T6tWfnvDZxg061KeOpZ8ZIMeeDgCWKxR8p3AHmGoGllnrWgH2IuuL&X-Amz-Signature=9b27e4a3a9335fbf5a0618996819f946462eb1fc2500277d3f5aece96fc49b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKIYGQLX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRn1Ol3i7hNWx1oDxYAlsnBZiv93F%2B8k%2F0i0IKvbceFAiAcikuxgWd%2B%2F0rnIFGj4RDh%2FPeugW8CC24ZpFikqOG34CqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJd8ffzPqZf1FlrElKtwDOyjxhbuj%2BLC5oly4vibh0mVSPCHsa2TJQcZIAYx%2FxcAZBzll8VbVYgByNJ%2Ftm%2BXaahHBDv3LzVIeGc5XwJaMCNGna64f7DNUPNzEIPkYlBewIZgYIFEK9Vjv9LlvIAVc%2FIncjCI8LlWU%2B5qMuJqEGZrBCBn0pwR8HF8wgZ449pRHS%2FGJu1ZbdpscT87KmIR07Eo8SsRmgfqUE8%2FxTrBC4pxhXYj%2FNzRRKxMAdrSZlvDp4izCpBh03e9EqYmO7iRLtOzv36tix8V1xLzb2optja17Tj8O7Y%2BeEkxLnLy23udMSE82tYzJ3YG7tasr15adsH%2B%2Bwmy8gpW861rMA%2Bvo14cMEJipQkc3Y8NcZUz%2BVjxdk9sSHvcKpbdgNJaHfgSFGYXlOInS4mQdCRrymHtZoT3%2Bimu5AEeYD9QaEUQnrySxs%2BptgWfdR%2FEBpwvvdKDZmr4k50B2oahxiP48HD9DVhO%2BtvYrel8OAv1D2OGComVEcMRDB0KrTjFBHMzgM9CJ5gilHp4PISD8oPIB9gs9kU7rmaQZkBCcLhAlvXJHPQosgYNlkSNenPTPWsjTqec3f9jcHi6gpk0vjLaCnzGzACxFTZjcfFpZ5TKyFE8JEU8KJ0a8gejTRkudPkcwj7fKwgY6pgGl45nim7hbikwpVwiYKfVbXG%2BdrZUMDZcL4vygyUk79tOA%2Fgl7Sq9ctb%2FQCKMuRkmFr618E9eGshpkfo%2BUAthW%2FPcwSYfWU%2F8hbY4tX2tBK6VPMwbwOimKXEmxQIlClQPD2K%2B%2Bvi7a32WAt3ss46iecvhuz7%2BdiPKIVdrItE6T6tWfnvDZxg061KeOpZ8ZIMeeDgCWKxR8p3AHmGoGllnrWgH2IuuL&X-Amz-Signature=8272da859744de8f77a4d0ee85da01b5d64f5e92f962b78e66f71416ec293a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
