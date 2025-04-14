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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4C57MF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG400kcN%2FjM7ApuAxYiz%2FGROpsuyOolGInoEAs7NwKEAiAilIhkCATRP19nEqyPqqjFanKL0kfQxeUXXmjLwdIFRiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMicLk9GQE5J9ArnU%2FKtwDBDBUVlr7q5G78mPtVdol911S9UQuoaWQbPpVAOP1R4O3MP0RgkHfeNEFriYd6QAsg6KurkX%2Bvo%2Fjw1pPEgPeG40rQiM8g%2FE%2BmAjWT5ziw7SBDtNJlrKLFCk1VO2QmwIi9Rx%2FbTpIEUj2S02ULLepLHRYgo9TUYCszKg48kFr5q5c2Mnk7wNv%2FNjYidi9e073UGxn28o0URXN4qAh2gIycYABj3CSJi7vfbV6xAWzWB1i1Knl%2FTNpWxoRbWtUxNaTqRMLDytLmBuGvMgUqdvxKBY5yXmhmQRgG8NFR7CSD0poe9TEFL2qwPTxWP9H0V8q%2B%2BMfRlAkx1QESDFgNyYwP%2BzndOnUAIyk46X%2F4MzRDOXwNa3VRd9G6qIvYPNAuIRDtFolRdn1okvNjI2h7ZhAgyKY%2BGyxRkYbPuuLtW5jMLb2SbEHJd%2FcekOFgfVKumc68hJA7cZpWWIQjbv1%2BxCvaXCZvMLa%2BtECWLztoJA5Ht%2FkjUNseoSjkL4by1q3LcRt5ocOyWLGyV5IvxZ7hbGHCaVJD73iqKq31x0rCvzNKAqf7vxCKs9Ym06tJyIqEM9mRACTo67xn6ajP65lPAKGwb3Fv7RXLBN%2BdtqikT9dJ5%2Bb4qZ35NXx5Unc1IYw2pDyvwY6pgHInzQsfDuR%2B%2FQYoOrHB5YTANK735LCI9IGiAQIbvQhEDThvBIvUf2FJLaHLi%2FO15JkgvgwvsO%2BMYgJsqnrAWHcHiqlURS%2F0Kr7XUh4BfF%2FzPcWsiCe2nMCS2o0YE5ZIAkL2SVoy5YqsautqgNyUA3yOjku79cuwb3mA%2F4Le5ozEndwDfT3It%2FHogZqeyNtV%2Fgt2DhNLESjVKk%2FMfHG7o5lqWG9f46s&X-Amz-Signature=285b34d3eaf6952e42b08c169c21990231d724fdd67cb0a6445fd2b4d447bc05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4C57MF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG400kcN%2FjM7ApuAxYiz%2FGROpsuyOolGInoEAs7NwKEAiAilIhkCATRP19nEqyPqqjFanKL0kfQxeUXXmjLwdIFRiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMicLk9GQE5J9ArnU%2FKtwDBDBUVlr7q5G78mPtVdol911S9UQuoaWQbPpVAOP1R4O3MP0RgkHfeNEFriYd6QAsg6KurkX%2Bvo%2Fjw1pPEgPeG40rQiM8g%2FE%2BmAjWT5ziw7SBDtNJlrKLFCk1VO2QmwIi9Rx%2FbTpIEUj2S02ULLepLHRYgo9TUYCszKg48kFr5q5c2Mnk7wNv%2FNjYidi9e073UGxn28o0URXN4qAh2gIycYABj3CSJi7vfbV6xAWzWB1i1Knl%2FTNpWxoRbWtUxNaTqRMLDytLmBuGvMgUqdvxKBY5yXmhmQRgG8NFR7CSD0poe9TEFL2qwPTxWP9H0V8q%2B%2BMfRlAkx1QESDFgNyYwP%2BzndOnUAIyk46X%2F4MzRDOXwNa3VRd9G6qIvYPNAuIRDtFolRdn1okvNjI2h7ZhAgyKY%2BGyxRkYbPuuLtW5jMLb2SbEHJd%2FcekOFgfVKumc68hJA7cZpWWIQjbv1%2BxCvaXCZvMLa%2BtECWLztoJA5Ht%2FkjUNseoSjkL4by1q3LcRt5ocOyWLGyV5IvxZ7hbGHCaVJD73iqKq31x0rCvzNKAqf7vxCKs9Ym06tJyIqEM9mRACTo67xn6ajP65lPAKGwb3Fv7RXLBN%2BdtqikT9dJ5%2Bb4qZ35NXx5Unc1IYw2pDyvwY6pgHInzQsfDuR%2B%2FQYoOrHB5YTANK735LCI9IGiAQIbvQhEDThvBIvUf2FJLaHLi%2FO15JkgvgwvsO%2BMYgJsqnrAWHcHiqlURS%2F0Kr7XUh4BfF%2FzPcWsiCe2nMCS2o0YE5ZIAkL2SVoy5YqsautqgNyUA3yOjku79cuwb3mA%2F4Le5ozEndwDfT3It%2FHogZqeyNtV%2Fgt2DhNLESjVKk%2FMfHG7o5lqWG9f46s&X-Amz-Signature=05fe5d886807202614050b1b3938819bcfa264bd52d8eeabb61009d19ca13a40&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4C57MF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG400kcN%2FjM7ApuAxYiz%2FGROpsuyOolGInoEAs7NwKEAiAilIhkCATRP19nEqyPqqjFanKL0kfQxeUXXmjLwdIFRiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMicLk9GQE5J9ArnU%2FKtwDBDBUVlr7q5G78mPtVdol911S9UQuoaWQbPpVAOP1R4O3MP0RgkHfeNEFriYd6QAsg6KurkX%2Bvo%2Fjw1pPEgPeG40rQiM8g%2FE%2BmAjWT5ziw7SBDtNJlrKLFCk1VO2QmwIi9Rx%2FbTpIEUj2S02ULLepLHRYgo9TUYCszKg48kFr5q5c2Mnk7wNv%2FNjYidi9e073UGxn28o0URXN4qAh2gIycYABj3CSJi7vfbV6xAWzWB1i1Knl%2FTNpWxoRbWtUxNaTqRMLDytLmBuGvMgUqdvxKBY5yXmhmQRgG8NFR7CSD0poe9TEFL2qwPTxWP9H0V8q%2B%2BMfRlAkx1QESDFgNyYwP%2BzndOnUAIyk46X%2F4MzRDOXwNa3VRd9G6qIvYPNAuIRDtFolRdn1okvNjI2h7ZhAgyKY%2BGyxRkYbPuuLtW5jMLb2SbEHJd%2FcekOFgfVKumc68hJA7cZpWWIQjbv1%2BxCvaXCZvMLa%2BtECWLztoJA5Ht%2FkjUNseoSjkL4by1q3LcRt5ocOyWLGyV5IvxZ7hbGHCaVJD73iqKq31x0rCvzNKAqf7vxCKs9Ym06tJyIqEM9mRACTo67xn6ajP65lPAKGwb3Fv7RXLBN%2BdtqikT9dJ5%2Bb4qZ35NXx5Unc1IYw2pDyvwY6pgHInzQsfDuR%2B%2FQYoOrHB5YTANK735LCI9IGiAQIbvQhEDThvBIvUf2FJLaHLi%2FO15JkgvgwvsO%2BMYgJsqnrAWHcHiqlURS%2F0Kr7XUh4BfF%2FzPcWsiCe2nMCS2o0YE5ZIAkL2SVoy5YqsautqgNyUA3yOjku79cuwb3mA%2F4Le5ozEndwDfT3It%2FHogZqeyNtV%2Fgt2DhNLESjVKk%2FMfHG7o5lqWG9f46s&X-Amz-Signature=22f8cdab826efe5f8726e5a98a56068c0116624bfa5b2c8ad249d885fc5e1595&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4C57MF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG400kcN%2FjM7ApuAxYiz%2FGROpsuyOolGInoEAs7NwKEAiAilIhkCATRP19nEqyPqqjFanKL0kfQxeUXXmjLwdIFRiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMicLk9GQE5J9ArnU%2FKtwDBDBUVlr7q5G78mPtVdol911S9UQuoaWQbPpVAOP1R4O3MP0RgkHfeNEFriYd6QAsg6KurkX%2Bvo%2Fjw1pPEgPeG40rQiM8g%2FE%2BmAjWT5ziw7SBDtNJlrKLFCk1VO2QmwIi9Rx%2FbTpIEUj2S02ULLepLHRYgo9TUYCszKg48kFr5q5c2Mnk7wNv%2FNjYidi9e073UGxn28o0URXN4qAh2gIycYABj3CSJi7vfbV6xAWzWB1i1Knl%2FTNpWxoRbWtUxNaTqRMLDytLmBuGvMgUqdvxKBY5yXmhmQRgG8NFR7CSD0poe9TEFL2qwPTxWP9H0V8q%2B%2BMfRlAkx1QESDFgNyYwP%2BzndOnUAIyk46X%2F4MzRDOXwNa3VRd9G6qIvYPNAuIRDtFolRdn1okvNjI2h7ZhAgyKY%2BGyxRkYbPuuLtW5jMLb2SbEHJd%2FcekOFgfVKumc68hJA7cZpWWIQjbv1%2BxCvaXCZvMLa%2BtECWLztoJA5Ht%2FkjUNseoSjkL4by1q3LcRt5ocOyWLGyV5IvxZ7hbGHCaVJD73iqKq31x0rCvzNKAqf7vxCKs9Ym06tJyIqEM9mRACTo67xn6ajP65lPAKGwb3Fv7RXLBN%2BdtqikT9dJ5%2Bb4qZ35NXx5Unc1IYw2pDyvwY6pgHInzQsfDuR%2B%2FQYoOrHB5YTANK735LCI9IGiAQIbvQhEDThvBIvUf2FJLaHLi%2FO15JkgvgwvsO%2BMYgJsqnrAWHcHiqlURS%2F0Kr7XUh4BfF%2FzPcWsiCe2nMCS2o0YE5ZIAkL2SVoy5YqsautqgNyUA3yOjku79cuwb3mA%2F4Le5ozEndwDfT3It%2FHogZqeyNtV%2Fgt2DhNLESjVKk%2FMfHG7o5lqWG9f46s&X-Amz-Signature=9be0a1299449f3b5313161d84765474c184ef3c97fde2030ffbb5dea8bc4a01f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4C57MF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG400kcN%2FjM7ApuAxYiz%2FGROpsuyOolGInoEAs7NwKEAiAilIhkCATRP19nEqyPqqjFanKL0kfQxeUXXmjLwdIFRiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMicLk9GQE5J9ArnU%2FKtwDBDBUVlr7q5G78mPtVdol911S9UQuoaWQbPpVAOP1R4O3MP0RgkHfeNEFriYd6QAsg6KurkX%2Bvo%2Fjw1pPEgPeG40rQiM8g%2FE%2BmAjWT5ziw7SBDtNJlrKLFCk1VO2QmwIi9Rx%2FbTpIEUj2S02ULLepLHRYgo9TUYCszKg48kFr5q5c2Mnk7wNv%2FNjYidi9e073UGxn28o0URXN4qAh2gIycYABj3CSJi7vfbV6xAWzWB1i1Knl%2FTNpWxoRbWtUxNaTqRMLDytLmBuGvMgUqdvxKBY5yXmhmQRgG8NFR7CSD0poe9TEFL2qwPTxWP9H0V8q%2B%2BMfRlAkx1QESDFgNyYwP%2BzndOnUAIyk46X%2F4MzRDOXwNa3VRd9G6qIvYPNAuIRDtFolRdn1okvNjI2h7ZhAgyKY%2BGyxRkYbPuuLtW5jMLb2SbEHJd%2FcekOFgfVKumc68hJA7cZpWWIQjbv1%2BxCvaXCZvMLa%2BtECWLztoJA5Ht%2FkjUNseoSjkL4by1q3LcRt5ocOyWLGyV5IvxZ7hbGHCaVJD73iqKq31x0rCvzNKAqf7vxCKs9Ym06tJyIqEM9mRACTo67xn6ajP65lPAKGwb3Fv7RXLBN%2BdtqikT9dJ5%2Bb4qZ35NXx5Unc1IYw2pDyvwY6pgHInzQsfDuR%2B%2FQYoOrHB5YTANK735LCI9IGiAQIbvQhEDThvBIvUf2FJLaHLi%2FO15JkgvgwvsO%2BMYgJsqnrAWHcHiqlURS%2F0Kr7XUh4BfF%2FzPcWsiCe2nMCS2o0YE5ZIAkL2SVoy5YqsautqgNyUA3yOjku79cuwb3mA%2F4Le5ozEndwDfT3It%2FHogZqeyNtV%2Fgt2DhNLESjVKk%2FMfHG7o5lqWG9f46s&X-Amz-Signature=5926557c462e9d645228eb8fff9cb9b387ee0405e506c74b28b9d6e15abaa87a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4C57MF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG400kcN%2FjM7ApuAxYiz%2FGROpsuyOolGInoEAs7NwKEAiAilIhkCATRP19nEqyPqqjFanKL0kfQxeUXXmjLwdIFRiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMicLk9GQE5J9ArnU%2FKtwDBDBUVlr7q5G78mPtVdol911S9UQuoaWQbPpVAOP1R4O3MP0RgkHfeNEFriYd6QAsg6KurkX%2Bvo%2Fjw1pPEgPeG40rQiM8g%2FE%2BmAjWT5ziw7SBDtNJlrKLFCk1VO2QmwIi9Rx%2FbTpIEUj2S02ULLepLHRYgo9TUYCszKg48kFr5q5c2Mnk7wNv%2FNjYidi9e073UGxn28o0URXN4qAh2gIycYABj3CSJi7vfbV6xAWzWB1i1Knl%2FTNpWxoRbWtUxNaTqRMLDytLmBuGvMgUqdvxKBY5yXmhmQRgG8NFR7CSD0poe9TEFL2qwPTxWP9H0V8q%2B%2BMfRlAkx1QESDFgNyYwP%2BzndOnUAIyk46X%2F4MzRDOXwNa3VRd9G6qIvYPNAuIRDtFolRdn1okvNjI2h7ZhAgyKY%2BGyxRkYbPuuLtW5jMLb2SbEHJd%2FcekOFgfVKumc68hJA7cZpWWIQjbv1%2BxCvaXCZvMLa%2BtECWLztoJA5Ht%2FkjUNseoSjkL4by1q3LcRt5ocOyWLGyV5IvxZ7hbGHCaVJD73iqKq31x0rCvzNKAqf7vxCKs9Ym06tJyIqEM9mRACTo67xn6ajP65lPAKGwb3Fv7RXLBN%2BdtqikT9dJ5%2Bb4qZ35NXx5Unc1IYw2pDyvwY6pgHInzQsfDuR%2B%2FQYoOrHB5YTANK735LCI9IGiAQIbvQhEDThvBIvUf2FJLaHLi%2FO15JkgvgwvsO%2BMYgJsqnrAWHcHiqlURS%2F0Kr7XUh4BfF%2FzPcWsiCe2nMCS2o0YE5ZIAkL2SVoy5YqsautqgNyUA3yOjku79cuwb3mA%2F4Le5ozEndwDfT3It%2FHogZqeyNtV%2Fgt2DhNLESjVKk%2FMfHG7o5lqWG9f46s&X-Amz-Signature=80b95c61e5d122a4d3f6d3838aace5ad39e195ef1162ef7c1b08031365b10fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4C57MF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG400kcN%2FjM7ApuAxYiz%2FGROpsuyOolGInoEAs7NwKEAiAilIhkCATRP19nEqyPqqjFanKL0kfQxeUXXmjLwdIFRiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMicLk9GQE5J9ArnU%2FKtwDBDBUVlr7q5G78mPtVdol911S9UQuoaWQbPpVAOP1R4O3MP0RgkHfeNEFriYd6QAsg6KurkX%2Bvo%2Fjw1pPEgPeG40rQiM8g%2FE%2BmAjWT5ziw7SBDtNJlrKLFCk1VO2QmwIi9Rx%2FbTpIEUj2S02ULLepLHRYgo9TUYCszKg48kFr5q5c2Mnk7wNv%2FNjYidi9e073UGxn28o0URXN4qAh2gIycYABj3CSJi7vfbV6xAWzWB1i1Knl%2FTNpWxoRbWtUxNaTqRMLDytLmBuGvMgUqdvxKBY5yXmhmQRgG8NFR7CSD0poe9TEFL2qwPTxWP9H0V8q%2B%2BMfRlAkx1QESDFgNyYwP%2BzndOnUAIyk46X%2F4MzRDOXwNa3VRd9G6qIvYPNAuIRDtFolRdn1okvNjI2h7ZhAgyKY%2BGyxRkYbPuuLtW5jMLb2SbEHJd%2FcekOFgfVKumc68hJA7cZpWWIQjbv1%2BxCvaXCZvMLa%2BtECWLztoJA5Ht%2FkjUNseoSjkL4by1q3LcRt5ocOyWLGyV5IvxZ7hbGHCaVJD73iqKq31x0rCvzNKAqf7vxCKs9Ym06tJyIqEM9mRACTo67xn6ajP65lPAKGwb3Fv7RXLBN%2BdtqikT9dJ5%2Bb4qZ35NXx5Unc1IYw2pDyvwY6pgHInzQsfDuR%2B%2FQYoOrHB5YTANK735LCI9IGiAQIbvQhEDThvBIvUf2FJLaHLi%2FO15JkgvgwvsO%2BMYgJsqnrAWHcHiqlURS%2F0Kr7XUh4BfF%2FzPcWsiCe2nMCS2o0YE5ZIAkL2SVoy5YqsautqgNyUA3yOjku79cuwb3mA%2F4Le5ozEndwDfT3It%2FHogZqeyNtV%2Fgt2DhNLESjVKk%2FMfHG7o5lqWG9f46s&X-Amz-Signature=04ecc16914beb2de19560bea8e0ad9e473bd1ba32e0b59b17eb29bb50240829f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E4C57MF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGG400kcN%2FjM7ApuAxYiz%2FGROpsuyOolGInoEAs7NwKEAiAilIhkCATRP19nEqyPqqjFanKL0kfQxeUXXmjLwdIFRiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMicLk9GQE5J9ArnU%2FKtwDBDBUVlr7q5G78mPtVdol911S9UQuoaWQbPpVAOP1R4O3MP0RgkHfeNEFriYd6QAsg6KurkX%2Bvo%2Fjw1pPEgPeG40rQiM8g%2FE%2BmAjWT5ziw7SBDtNJlrKLFCk1VO2QmwIi9Rx%2FbTpIEUj2S02ULLepLHRYgo9TUYCszKg48kFr5q5c2Mnk7wNv%2FNjYidi9e073UGxn28o0URXN4qAh2gIycYABj3CSJi7vfbV6xAWzWB1i1Knl%2FTNpWxoRbWtUxNaTqRMLDytLmBuGvMgUqdvxKBY5yXmhmQRgG8NFR7CSD0poe9TEFL2qwPTxWP9H0V8q%2B%2BMfRlAkx1QESDFgNyYwP%2BzndOnUAIyk46X%2F4MzRDOXwNa3VRd9G6qIvYPNAuIRDtFolRdn1okvNjI2h7ZhAgyKY%2BGyxRkYbPuuLtW5jMLb2SbEHJd%2FcekOFgfVKumc68hJA7cZpWWIQjbv1%2BxCvaXCZvMLa%2BtECWLztoJA5Ht%2FkjUNseoSjkL4by1q3LcRt5ocOyWLGyV5IvxZ7hbGHCaVJD73iqKq31x0rCvzNKAqf7vxCKs9Ym06tJyIqEM9mRACTo67xn6ajP65lPAKGwb3Fv7RXLBN%2BdtqikT9dJ5%2Bb4qZ35NXx5Unc1IYw2pDyvwY6pgHInzQsfDuR%2B%2FQYoOrHB5YTANK735LCI9IGiAQIbvQhEDThvBIvUf2FJLaHLi%2FO15JkgvgwvsO%2BMYgJsqnrAWHcHiqlURS%2F0Kr7XUh4BfF%2FzPcWsiCe2nMCS2o0YE5ZIAkL2SVoy5YqsautqgNyUA3yOjku79cuwb3mA%2F4Le5ozEndwDfT3It%2FHogZqeyNtV%2Fgt2DhNLESjVKk%2FMfHG7o5lqWG9f46s&X-Amz-Signature=ad317bf7974501eb50f33387b1f0d40f837fda2713cafb31608213ab47a9f75f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
