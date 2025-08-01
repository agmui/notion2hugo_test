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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTYOE2C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Nh8QPmVnUtZTUQZxx2JS7RVibfFT3uq9h2l0xZo4BAiEAvduC73n9xCFa%2BmzEIgIyqIb9LhhEkpSBMVwUDnLWn04qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp4fEVOsTD%2Fhi7BHircA%2FXDc657Wzyq5XudcVHzc%2BIEVASdN48jCf6cnok1RJZirAroRDZb3vykfnGD%2BY9itlFMhYhzEvehjKqoPZynHN8j5ClsbDMHaZi7Xr%2B7MOv8qKvj606s0hDOWoooa4vc15RILV8WEYzNC6VZ0Yi3nJr17hgkdMme5PEj7P%2F016%2BHNdfxrJtFvXzLQvRq78fPdzf5XfTgdlyifjgT8cOTtHOYam4zaXBY9h21utV4jI53m7B8gLVlfrc0gNB87zOWi6Sdz1iIHQL1HtpPBYyepS0oFlOqxCttY9zrqbL4CytLzSbQOp%2F%2FPIFBLTRS2G8RKbEhmgIoXRHW0FhNFB%2BbknMQ6QzByg1raP6b42CvX7A9fWF4mExssCQYuwRJxtV0TkC%2Fp1yYvrGBKsCk827R4T6XmLhfURqWYVXjqP892VPJhgqi3uMaytlUKpYC9tKhaA38tJix2Ghhpps6x1cDxc0c6HESbYtJBBYZmWW%2Bgwwd24ME6mgLebrC9sGH4zYqVlqE%2FPmSuQu8hGf3nEoN0NnskP%2B1FdcH2LjpjuRHdTK90l9OC3zMtFKMOQQI6MJUSMi%2FsPriNNAyRzsgJNqAru81UqhYYmRYXU5WMkJJ79qF%2FgpNF2nd%2Bk6ylM3yMMnKsMQGOqUBdLnfT0arw%2BYbtjrk0mID7Qdr%2B7iJrTIGXbxz5h2QSaXO1kBJ0btiNIAfxrGG%2Bh6Srheo3%2FwJFbIVBelCcUjn0drXz5gG5S8WLWDRf4%2FXwyGImZqG9b7zgye8kMb04mtwDA%2BE%2FBQl9V0zOwzNlSBWFcTo3%2FQZhQAGNCWXs3tmORikZXYpOEvGxTEc9dOn8hT7eDs158OWpB1DEm1mcTD9TtvoWyHt&X-Amz-Signature=f844863a12fb6491193516b8500f0c0d9a5189cf2fc701e7f5236e5258af927f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTYOE2C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Nh8QPmVnUtZTUQZxx2JS7RVibfFT3uq9h2l0xZo4BAiEAvduC73n9xCFa%2BmzEIgIyqIb9LhhEkpSBMVwUDnLWn04qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp4fEVOsTD%2Fhi7BHircA%2FXDc657Wzyq5XudcVHzc%2BIEVASdN48jCf6cnok1RJZirAroRDZb3vykfnGD%2BY9itlFMhYhzEvehjKqoPZynHN8j5ClsbDMHaZi7Xr%2B7MOv8qKvj606s0hDOWoooa4vc15RILV8WEYzNC6VZ0Yi3nJr17hgkdMme5PEj7P%2F016%2BHNdfxrJtFvXzLQvRq78fPdzf5XfTgdlyifjgT8cOTtHOYam4zaXBY9h21utV4jI53m7B8gLVlfrc0gNB87zOWi6Sdz1iIHQL1HtpPBYyepS0oFlOqxCttY9zrqbL4CytLzSbQOp%2F%2FPIFBLTRS2G8RKbEhmgIoXRHW0FhNFB%2BbknMQ6QzByg1raP6b42CvX7A9fWF4mExssCQYuwRJxtV0TkC%2Fp1yYvrGBKsCk827R4T6XmLhfURqWYVXjqP892VPJhgqi3uMaytlUKpYC9tKhaA38tJix2Ghhpps6x1cDxc0c6HESbYtJBBYZmWW%2Bgwwd24ME6mgLebrC9sGH4zYqVlqE%2FPmSuQu8hGf3nEoN0NnskP%2B1FdcH2LjpjuRHdTK90l9OC3zMtFKMOQQI6MJUSMi%2FsPriNNAyRzsgJNqAru81UqhYYmRYXU5WMkJJ79qF%2FgpNF2nd%2Bk6ylM3yMMnKsMQGOqUBdLnfT0arw%2BYbtjrk0mID7Qdr%2B7iJrTIGXbxz5h2QSaXO1kBJ0btiNIAfxrGG%2Bh6Srheo3%2FwJFbIVBelCcUjn0drXz5gG5S8WLWDRf4%2FXwyGImZqG9b7zgye8kMb04mtwDA%2BE%2FBQl9V0zOwzNlSBWFcTo3%2FQZhQAGNCWXs3tmORikZXYpOEvGxTEc9dOn8hT7eDs158OWpB1DEm1mcTD9TtvoWyHt&X-Amz-Signature=6c6256d886376bbc24a19adcbea5fdbbfb295ac770edd161d9e19bdb056b8f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTYOE2C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Nh8QPmVnUtZTUQZxx2JS7RVibfFT3uq9h2l0xZo4BAiEAvduC73n9xCFa%2BmzEIgIyqIb9LhhEkpSBMVwUDnLWn04qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp4fEVOsTD%2Fhi7BHircA%2FXDc657Wzyq5XudcVHzc%2BIEVASdN48jCf6cnok1RJZirAroRDZb3vykfnGD%2BY9itlFMhYhzEvehjKqoPZynHN8j5ClsbDMHaZi7Xr%2B7MOv8qKvj606s0hDOWoooa4vc15RILV8WEYzNC6VZ0Yi3nJr17hgkdMme5PEj7P%2F016%2BHNdfxrJtFvXzLQvRq78fPdzf5XfTgdlyifjgT8cOTtHOYam4zaXBY9h21utV4jI53m7B8gLVlfrc0gNB87zOWi6Sdz1iIHQL1HtpPBYyepS0oFlOqxCttY9zrqbL4CytLzSbQOp%2F%2FPIFBLTRS2G8RKbEhmgIoXRHW0FhNFB%2BbknMQ6QzByg1raP6b42CvX7A9fWF4mExssCQYuwRJxtV0TkC%2Fp1yYvrGBKsCk827R4T6XmLhfURqWYVXjqP892VPJhgqi3uMaytlUKpYC9tKhaA38tJix2Ghhpps6x1cDxc0c6HESbYtJBBYZmWW%2Bgwwd24ME6mgLebrC9sGH4zYqVlqE%2FPmSuQu8hGf3nEoN0NnskP%2B1FdcH2LjpjuRHdTK90l9OC3zMtFKMOQQI6MJUSMi%2FsPriNNAyRzsgJNqAru81UqhYYmRYXU5WMkJJ79qF%2FgpNF2nd%2Bk6ylM3yMMnKsMQGOqUBdLnfT0arw%2BYbtjrk0mID7Qdr%2B7iJrTIGXbxz5h2QSaXO1kBJ0btiNIAfxrGG%2Bh6Srheo3%2FwJFbIVBelCcUjn0drXz5gG5S8WLWDRf4%2FXwyGImZqG9b7zgye8kMb04mtwDA%2BE%2FBQl9V0zOwzNlSBWFcTo3%2FQZhQAGNCWXs3tmORikZXYpOEvGxTEc9dOn8hT7eDs158OWpB1DEm1mcTD9TtvoWyHt&X-Amz-Signature=838e0f632f72fa91a1a1b9f6d7d8411f856459b450837beba6313149f8ccda10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTYOE2C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Nh8QPmVnUtZTUQZxx2JS7RVibfFT3uq9h2l0xZo4BAiEAvduC73n9xCFa%2BmzEIgIyqIb9LhhEkpSBMVwUDnLWn04qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp4fEVOsTD%2Fhi7BHircA%2FXDc657Wzyq5XudcVHzc%2BIEVASdN48jCf6cnok1RJZirAroRDZb3vykfnGD%2BY9itlFMhYhzEvehjKqoPZynHN8j5ClsbDMHaZi7Xr%2B7MOv8qKvj606s0hDOWoooa4vc15RILV8WEYzNC6VZ0Yi3nJr17hgkdMme5PEj7P%2F016%2BHNdfxrJtFvXzLQvRq78fPdzf5XfTgdlyifjgT8cOTtHOYam4zaXBY9h21utV4jI53m7B8gLVlfrc0gNB87zOWi6Sdz1iIHQL1HtpPBYyepS0oFlOqxCttY9zrqbL4CytLzSbQOp%2F%2FPIFBLTRS2G8RKbEhmgIoXRHW0FhNFB%2BbknMQ6QzByg1raP6b42CvX7A9fWF4mExssCQYuwRJxtV0TkC%2Fp1yYvrGBKsCk827R4T6XmLhfURqWYVXjqP892VPJhgqi3uMaytlUKpYC9tKhaA38tJix2Ghhpps6x1cDxc0c6HESbYtJBBYZmWW%2Bgwwd24ME6mgLebrC9sGH4zYqVlqE%2FPmSuQu8hGf3nEoN0NnskP%2B1FdcH2LjpjuRHdTK90l9OC3zMtFKMOQQI6MJUSMi%2FsPriNNAyRzsgJNqAru81UqhYYmRYXU5WMkJJ79qF%2FgpNF2nd%2Bk6ylM3yMMnKsMQGOqUBdLnfT0arw%2BYbtjrk0mID7Qdr%2B7iJrTIGXbxz5h2QSaXO1kBJ0btiNIAfxrGG%2Bh6Srheo3%2FwJFbIVBelCcUjn0drXz5gG5S8WLWDRf4%2FXwyGImZqG9b7zgye8kMb04mtwDA%2BE%2FBQl9V0zOwzNlSBWFcTo3%2FQZhQAGNCWXs3tmORikZXYpOEvGxTEc9dOn8hT7eDs158OWpB1DEm1mcTD9TtvoWyHt&X-Amz-Signature=dbbc33c7f6c56c6c0e3116c4346c4123673ec6a81f19feb08de848975991b3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTYOE2C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Nh8QPmVnUtZTUQZxx2JS7RVibfFT3uq9h2l0xZo4BAiEAvduC73n9xCFa%2BmzEIgIyqIb9LhhEkpSBMVwUDnLWn04qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp4fEVOsTD%2Fhi7BHircA%2FXDc657Wzyq5XudcVHzc%2BIEVASdN48jCf6cnok1RJZirAroRDZb3vykfnGD%2BY9itlFMhYhzEvehjKqoPZynHN8j5ClsbDMHaZi7Xr%2B7MOv8qKvj606s0hDOWoooa4vc15RILV8WEYzNC6VZ0Yi3nJr17hgkdMme5PEj7P%2F016%2BHNdfxrJtFvXzLQvRq78fPdzf5XfTgdlyifjgT8cOTtHOYam4zaXBY9h21utV4jI53m7B8gLVlfrc0gNB87zOWi6Sdz1iIHQL1HtpPBYyepS0oFlOqxCttY9zrqbL4CytLzSbQOp%2F%2FPIFBLTRS2G8RKbEhmgIoXRHW0FhNFB%2BbknMQ6QzByg1raP6b42CvX7A9fWF4mExssCQYuwRJxtV0TkC%2Fp1yYvrGBKsCk827R4T6XmLhfURqWYVXjqP892VPJhgqi3uMaytlUKpYC9tKhaA38tJix2Ghhpps6x1cDxc0c6HESbYtJBBYZmWW%2Bgwwd24ME6mgLebrC9sGH4zYqVlqE%2FPmSuQu8hGf3nEoN0NnskP%2B1FdcH2LjpjuRHdTK90l9OC3zMtFKMOQQI6MJUSMi%2FsPriNNAyRzsgJNqAru81UqhYYmRYXU5WMkJJ79qF%2FgpNF2nd%2Bk6ylM3yMMnKsMQGOqUBdLnfT0arw%2BYbtjrk0mID7Qdr%2B7iJrTIGXbxz5h2QSaXO1kBJ0btiNIAfxrGG%2Bh6Srheo3%2FwJFbIVBelCcUjn0drXz5gG5S8WLWDRf4%2FXwyGImZqG9b7zgye8kMb04mtwDA%2BE%2FBQl9V0zOwzNlSBWFcTo3%2FQZhQAGNCWXs3tmORikZXYpOEvGxTEc9dOn8hT7eDs158OWpB1DEm1mcTD9TtvoWyHt&X-Amz-Signature=464635dbc3bf30e8782220c94f74bcb8bedbe3ff1d4f7a9edf6849bac3464e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTYOE2C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Nh8QPmVnUtZTUQZxx2JS7RVibfFT3uq9h2l0xZo4BAiEAvduC73n9xCFa%2BmzEIgIyqIb9LhhEkpSBMVwUDnLWn04qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp4fEVOsTD%2Fhi7BHircA%2FXDc657Wzyq5XudcVHzc%2BIEVASdN48jCf6cnok1RJZirAroRDZb3vykfnGD%2BY9itlFMhYhzEvehjKqoPZynHN8j5ClsbDMHaZi7Xr%2B7MOv8qKvj606s0hDOWoooa4vc15RILV8WEYzNC6VZ0Yi3nJr17hgkdMme5PEj7P%2F016%2BHNdfxrJtFvXzLQvRq78fPdzf5XfTgdlyifjgT8cOTtHOYam4zaXBY9h21utV4jI53m7B8gLVlfrc0gNB87zOWi6Sdz1iIHQL1HtpPBYyepS0oFlOqxCttY9zrqbL4CytLzSbQOp%2F%2FPIFBLTRS2G8RKbEhmgIoXRHW0FhNFB%2BbknMQ6QzByg1raP6b42CvX7A9fWF4mExssCQYuwRJxtV0TkC%2Fp1yYvrGBKsCk827R4T6XmLhfURqWYVXjqP892VPJhgqi3uMaytlUKpYC9tKhaA38tJix2Ghhpps6x1cDxc0c6HESbYtJBBYZmWW%2Bgwwd24ME6mgLebrC9sGH4zYqVlqE%2FPmSuQu8hGf3nEoN0NnskP%2B1FdcH2LjpjuRHdTK90l9OC3zMtFKMOQQI6MJUSMi%2FsPriNNAyRzsgJNqAru81UqhYYmRYXU5WMkJJ79qF%2FgpNF2nd%2Bk6ylM3yMMnKsMQGOqUBdLnfT0arw%2BYbtjrk0mID7Qdr%2B7iJrTIGXbxz5h2QSaXO1kBJ0btiNIAfxrGG%2Bh6Srheo3%2FwJFbIVBelCcUjn0drXz5gG5S8WLWDRf4%2FXwyGImZqG9b7zgye8kMb04mtwDA%2BE%2FBQl9V0zOwzNlSBWFcTo3%2FQZhQAGNCWXs3tmORikZXYpOEvGxTEc9dOn8hT7eDs158OWpB1DEm1mcTD9TtvoWyHt&X-Amz-Signature=6734a084d370ecc4d0a2204e5281d9da08d67944c12ade627d8b487c1ddb7428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTYOE2C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Nh8QPmVnUtZTUQZxx2JS7RVibfFT3uq9h2l0xZo4BAiEAvduC73n9xCFa%2BmzEIgIyqIb9LhhEkpSBMVwUDnLWn04qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp4fEVOsTD%2Fhi7BHircA%2FXDc657Wzyq5XudcVHzc%2BIEVASdN48jCf6cnok1RJZirAroRDZb3vykfnGD%2BY9itlFMhYhzEvehjKqoPZynHN8j5ClsbDMHaZi7Xr%2B7MOv8qKvj606s0hDOWoooa4vc15RILV8WEYzNC6VZ0Yi3nJr17hgkdMme5PEj7P%2F016%2BHNdfxrJtFvXzLQvRq78fPdzf5XfTgdlyifjgT8cOTtHOYam4zaXBY9h21utV4jI53m7B8gLVlfrc0gNB87zOWi6Sdz1iIHQL1HtpPBYyepS0oFlOqxCttY9zrqbL4CytLzSbQOp%2F%2FPIFBLTRS2G8RKbEhmgIoXRHW0FhNFB%2BbknMQ6QzByg1raP6b42CvX7A9fWF4mExssCQYuwRJxtV0TkC%2Fp1yYvrGBKsCk827R4T6XmLhfURqWYVXjqP892VPJhgqi3uMaytlUKpYC9tKhaA38tJix2Ghhpps6x1cDxc0c6HESbYtJBBYZmWW%2Bgwwd24ME6mgLebrC9sGH4zYqVlqE%2FPmSuQu8hGf3nEoN0NnskP%2B1FdcH2LjpjuRHdTK90l9OC3zMtFKMOQQI6MJUSMi%2FsPriNNAyRzsgJNqAru81UqhYYmRYXU5WMkJJ79qF%2FgpNF2nd%2Bk6ylM3yMMnKsMQGOqUBdLnfT0arw%2BYbtjrk0mID7Qdr%2B7iJrTIGXbxz5h2QSaXO1kBJ0btiNIAfxrGG%2Bh6Srheo3%2FwJFbIVBelCcUjn0drXz5gG5S8WLWDRf4%2FXwyGImZqG9b7zgye8kMb04mtwDA%2BE%2FBQl9V0zOwzNlSBWFcTo3%2FQZhQAGNCWXs3tmORikZXYpOEvGxTEc9dOn8hT7eDs158OWpB1DEm1mcTD9TtvoWyHt&X-Amz-Signature=63e97543ea7d68464f1d71bb9dccb08dece96cf975da9c616cc8c9d708cbef10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRTYOE2C%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Nh8QPmVnUtZTUQZxx2JS7RVibfFT3uq9h2l0xZo4BAiEAvduC73n9xCFa%2BmzEIgIyqIb9LhhEkpSBMVwUDnLWn04qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAp4fEVOsTD%2Fhi7BHircA%2FXDc657Wzyq5XudcVHzc%2BIEVASdN48jCf6cnok1RJZirAroRDZb3vykfnGD%2BY9itlFMhYhzEvehjKqoPZynHN8j5ClsbDMHaZi7Xr%2B7MOv8qKvj606s0hDOWoooa4vc15RILV8WEYzNC6VZ0Yi3nJr17hgkdMme5PEj7P%2F016%2BHNdfxrJtFvXzLQvRq78fPdzf5XfTgdlyifjgT8cOTtHOYam4zaXBY9h21utV4jI53m7B8gLVlfrc0gNB87zOWi6Sdz1iIHQL1HtpPBYyepS0oFlOqxCttY9zrqbL4CytLzSbQOp%2F%2FPIFBLTRS2G8RKbEhmgIoXRHW0FhNFB%2BbknMQ6QzByg1raP6b42CvX7A9fWF4mExssCQYuwRJxtV0TkC%2Fp1yYvrGBKsCk827R4T6XmLhfURqWYVXjqP892VPJhgqi3uMaytlUKpYC9tKhaA38tJix2Ghhpps6x1cDxc0c6HESbYtJBBYZmWW%2Bgwwd24ME6mgLebrC9sGH4zYqVlqE%2FPmSuQu8hGf3nEoN0NnskP%2B1FdcH2LjpjuRHdTK90l9OC3zMtFKMOQQI6MJUSMi%2FsPriNNAyRzsgJNqAru81UqhYYmRYXU5WMkJJ79qF%2FgpNF2nd%2Bk6ylM3yMMnKsMQGOqUBdLnfT0arw%2BYbtjrk0mID7Qdr%2B7iJrTIGXbxz5h2QSaXO1kBJ0btiNIAfxrGG%2Bh6Srheo3%2FwJFbIVBelCcUjn0drXz5gG5S8WLWDRf4%2FXwyGImZqG9b7zgye8kMb04mtwDA%2BE%2FBQl9V0zOwzNlSBWFcTo3%2FQZhQAGNCWXs3tmORikZXYpOEvGxTEc9dOn8hT7eDs158OWpB1DEm1mcTD9TtvoWyHt&X-Amz-Signature=0f72c1ac53dadd26574074e7c7e501bdd5960049e470cf0e4413fd06e00ead39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
