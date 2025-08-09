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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRMVGQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcTEdmJCgoexurlD13bQxl%2Bb4A%2FZ4nlp%2F%2BKjaUs5dSgAIhAMdzYgCxMmZDRsCBckZQEqraDG7qD8DyN6vUVKVLYRDSKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTSlpM2uxBzbo9XnAq3AMmbyXhVYwxzlkcb%2FTEYWTYYT7vaHL7Gyr8uYfUil3RswOTqNius3kFIfCNhh5vMUDW2H6DSQNJqjDKJYhjff6cWdHl4w30%2BWeomi%2BZ57msr%2BvkBTNwqb1eHuL6CoJBtAL%2F5DdUbwzr47ZMAyY02w2qgLq35e7IEnzu4dE%2FaVchIEWPKS8nT7IIc0FHDHT00D6lFAZ%2FAZE4p%2B85I2z4%2FE%2BgOpr3r1l3vmsI94wZmhyC%2BVw0Qr8t%2F0eaWWEbSopTPerNfj%2BQNaaJADJJygeCFVk8qpmvSvsjNL9bDfJDa16dZb%2Bdees8WEjcRJZioNMMWLUX7YYq4OCEhE8WZxzW7b3boq1RyEotdFC8GR1DpZp%2F0eTZRG8sCUFgRjPJ%2BADWv5B8ebOjhT3ZPIyQNysNylGvnskNiaKZLr84ZvoCP4T5ZtqifcXaI%2FtGZV6DXTetvbrt4Od5hYbgQoILx8Tfr6z%2FHBclqvraC3bDp84BsayI4e2fwO6%2B%2FYz%2FfbUwOfK27jstBxiIQqjKN2rOzEATu6LtFbiCC73l%2FqNF05eI6oGV5HV1OXhLE23B7thMl5voSYQZfWn0cwwknMpUVhk0ZbVHhNkV2RosT2wcfPz%2BnBJfJDLy1y%2F38XcStxYEbDDCi9%2FEBjqkAYkw1sc80hO6WBF3Z%2FjtM7OGRs%2BIo9TvSF%2B16gWqPSzG%2FvBXbPqJmbXs5jn%2F8OY23y4Jj9YXWUg83kVUnfI7ygzF7EI2yqxzYahK5%2FnOuTglI4VuWxfluCR0nAz8faiqmE%2FBRYZdCj7DeIz3X3BBEBct9AQ82Xui0pD2JFnCJNLuRQNFlKKf240sr9S92MXQp3zN0Qz2pZ1qQfHGVcfBOW5U1dub&X-Amz-Signature=ce961ded8d81ebb9063c602cb7fb3c15be59672d542c957c484366d31d95225d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRMVGQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcTEdmJCgoexurlD13bQxl%2Bb4A%2FZ4nlp%2F%2BKjaUs5dSgAIhAMdzYgCxMmZDRsCBckZQEqraDG7qD8DyN6vUVKVLYRDSKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTSlpM2uxBzbo9XnAq3AMmbyXhVYwxzlkcb%2FTEYWTYYT7vaHL7Gyr8uYfUil3RswOTqNius3kFIfCNhh5vMUDW2H6DSQNJqjDKJYhjff6cWdHl4w30%2BWeomi%2BZ57msr%2BvkBTNwqb1eHuL6CoJBtAL%2F5DdUbwzr47ZMAyY02w2qgLq35e7IEnzu4dE%2FaVchIEWPKS8nT7IIc0FHDHT00D6lFAZ%2FAZE4p%2B85I2z4%2FE%2BgOpr3r1l3vmsI94wZmhyC%2BVw0Qr8t%2F0eaWWEbSopTPerNfj%2BQNaaJADJJygeCFVk8qpmvSvsjNL9bDfJDa16dZb%2Bdees8WEjcRJZioNMMWLUX7YYq4OCEhE8WZxzW7b3boq1RyEotdFC8GR1DpZp%2F0eTZRG8sCUFgRjPJ%2BADWv5B8ebOjhT3ZPIyQNysNylGvnskNiaKZLr84ZvoCP4T5ZtqifcXaI%2FtGZV6DXTetvbrt4Od5hYbgQoILx8Tfr6z%2FHBclqvraC3bDp84BsayI4e2fwO6%2B%2FYz%2FfbUwOfK27jstBxiIQqjKN2rOzEATu6LtFbiCC73l%2FqNF05eI6oGV5HV1OXhLE23B7thMl5voSYQZfWn0cwwknMpUVhk0ZbVHhNkV2RosT2wcfPz%2BnBJfJDLy1y%2F38XcStxYEbDDCi9%2FEBjqkAYkw1sc80hO6WBF3Z%2FjtM7OGRs%2BIo9TvSF%2B16gWqPSzG%2FvBXbPqJmbXs5jn%2F8OY23y4Jj9YXWUg83kVUnfI7ygzF7EI2yqxzYahK5%2FnOuTglI4VuWxfluCR0nAz8faiqmE%2FBRYZdCj7DeIz3X3BBEBct9AQ82Xui0pD2JFnCJNLuRQNFlKKf240sr9S92MXQp3zN0Qz2pZ1qQfHGVcfBOW5U1dub&X-Amz-Signature=d988866afb4fecfc4fc2b6555ba93128093c810e3f5a9854a97ec43b317205c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRMVGQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcTEdmJCgoexurlD13bQxl%2Bb4A%2FZ4nlp%2F%2BKjaUs5dSgAIhAMdzYgCxMmZDRsCBckZQEqraDG7qD8DyN6vUVKVLYRDSKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTSlpM2uxBzbo9XnAq3AMmbyXhVYwxzlkcb%2FTEYWTYYT7vaHL7Gyr8uYfUil3RswOTqNius3kFIfCNhh5vMUDW2H6DSQNJqjDKJYhjff6cWdHl4w30%2BWeomi%2BZ57msr%2BvkBTNwqb1eHuL6CoJBtAL%2F5DdUbwzr47ZMAyY02w2qgLq35e7IEnzu4dE%2FaVchIEWPKS8nT7IIc0FHDHT00D6lFAZ%2FAZE4p%2B85I2z4%2FE%2BgOpr3r1l3vmsI94wZmhyC%2BVw0Qr8t%2F0eaWWEbSopTPerNfj%2BQNaaJADJJygeCFVk8qpmvSvsjNL9bDfJDa16dZb%2Bdees8WEjcRJZioNMMWLUX7YYq4OCEhE8WZxzW7b3boq1RyEotdFC8GR1DpZp%2F0eTZRG8sCUFgRjPJ%2BADWv5B8ebOjhT3ZPIyQNysNylGvnskNiaKZLr84ZvoCP4T5ZtqifcXaI%2FtGZV6DXTetvbrt4Od5hYbgQoILx8Tfr6z%2FHBclqvraC3bDp84BsayI4e2fwO6%2B%2FYz%2FfbUwOfK27jstBxiIQqjKN2rOzEATu6LtFbiCC73l%2FqNF05eI6oGV5HV1OXhLE23B7thMl5voSYQZfWn0cwwknMpUVhk0ZbVHhNkV2RosT2wcfPz%2BnBJfJDLy1y%2F38XcStxYEbDDCi9%2FEBjqkAYkw1sc80hO6WBF3Z%2FjtM7OGRs%2BIo9TvSF%2B16gWqPSzG%2FvBXbPqJmbXs5jn%2F8OY23y4Jj9YXWUg83kVUnfI7ygzF7EI2yqxzYahK5%2FnOuTglI4VuWxfluCR0nAz8faiqmE%2FBRYZdCj7DeIz3X3BBEBct9AQ82Xui0pD2JFnCJNLuRQNFlKKf240sr9S92MXQp3zN0Qz2pZ1qQfHGVcfBOW5U1dub&X-Amz-Signature=387f946c7c143d8d1789555758a5375d5bd08bc2e8f9ca2d5ee69ee2b91649b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRMVGQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcTEdmJCgoexurlD13bQxl%2Bb4A%2FZ4nlp%2F%2BKjaUs5dSgAIhAMdzYgCxMmZDRsCBckZQEqraDG7qD8DyN6vUVKVLYRDSKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTSlpM2uxBzbo9XnAq3AMmbyXhVYwxzlkcb%2FTEYWTYYT7vaHL7Gyr8uYfUil3RswOTqNius3kFIfCNhh5vMUDW2H6DSQNJqjDKJYhjff6cWdHl4w30%2BWeomi%2BZ57msr%2BvkBTNwqb1eHuL6CoJBtAL%2F5DdUbwzr47ZMAyY02w2qgLq35e7IEnzu4dE%2FaVchIEWPKS8nT7IIc0FHDHT00D6lFAZ%2FAZE4p%2B85I2z4%2FE%2BgOpr3r1l3vmsI94wZmhyC%2BVw0Qr8t%2F0eaWWEbSopTPerNfj%2BQNaaJADJJygeCFVk8qpmvSvsjNL9bDfJDa16dZb%2Bdees8WEjcRJZioNMMWLUX7YYq4OCEhE8WZxzW7b3boq1RyEotdFC8GR1DpZp%2F0eTZRG8sCUFgRjPJ%2BADWv5B8ebOjhT3ZPIyQNysNylGvnskNiaKZLr84ZvoCP4T5ZtqifcXaI%2FtGZV6DXTetvbrt4Od5hYbgQoILx8Tfr6z%2FHBclqvraC3bDp84BsayI4e2fwO6%2B%2FYz%2FfbUwOfK27jstBxiIQqjKN2rOzEATu6LtFbiCC73l%2FqNF05eI6oGV5HV1OXhLE23B7thMl5voSYQZfWn0cwwknMpUVhk0ZbVHhNkV2RosT2wcfPz%2BnBJfJDLy1y%2F38XcStxYEbDDCi9%2FEBjqkAYkw1sc80hO6WBF3Z%2FjtM7OGRs%2BIo9TvSF%2B16gWqPSzG%2FvBXbPqJmbXs5jn%2F8OY23y4Jj9YXWUg83kVUnfI7ygzF7EI2yqxzYahK5%2FnOuTglI4VuWxfluCR0nAz8faiqmE%2FBRYZdCj7DeIz3X3BBEBct9AQ82Xui0pD2JFnCJNLuRQNFlKKf240sr9S92MXQp3zN0Qz2pZ1qQfHGVcfBOW5U1dub&X-Amz-Signature=f55d28912e02517b4302204f89e5cd30bdd0a88777afcfada00cbfb8f8b60a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRMVGQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcTEdmJCgoexurlD13bQxl%2Bb4A%2FZ4nlp%2F%2BKjaUs5dSgAIhAMdzYgCxMmZDRsCBckZQEqraDG7qD8DyN6vUVKVLYRDSKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTSlpM2uxBzbo9XnAq3AMmbyXhVYwxzlkcb%2FTEYWTYYT7vaHL7Gyr8uYfUil3RswOTqNius3kFIfCNhh5vMUDW2H6DSQNJqjDKJYhjff6cWdHl4w30%2BWeomi%2BZ57msr%2BvkBTNwqb1eHuL6CoJBtAL%2F5DdUbwzr47ZMAyY02w2qgLq35e7IEnzu4dE%2FaVchIEWPKS8nT7IIc0FHDHT00D6lFAZ%2FAZE4p%2B85I2z4%2FE%2BgOpr3r1l3vmsI94wZmhyC%2BVw0Qr8t%2F0eaWWEbSopTPerNfj%2BQNaaJADJJygeCFVk8qpmvSvsjNL9bDfJDa16dZb%2Bdees8WEjcRJZioNMMWLUX7YYq4OCEhE8WZxzW7b3boq1RyEotdFC8GR1DpZp%2F0eTZRG8sCUFgRjPJ%2BADWv5B8ebOjhT3ZPIyQNysNylGvnskNiaKZLr84ZvoCP4T5ZtqifcXaI%2FtGZV6DXTetvbrt4Od5hYbgQoILx8Tfr6z%2FHBclqvraC3bDp84BsayI4e2fwO6%2B%2FYz%2FfbUwOfK27jstBxiIQqjKN2rOzEATu6LtFbiCC73l%2FqNF05eI6oGV5HV1OXhLE23B7thMl5voSYQZfWn0cwwknMpUVhk0ZbVHhNkV2RosT2wcfPz%2BnBJfJDLy1y%2F38XcStxYEbDDCi9%2FEBjqkAYkw1sc80hO6WBF3Z%2FjtM7OGRs%2BIo9TvSF%2B16gWqPSzG%2FvBXbPqJmbXs5jn%2F8OY23y4Jj9YXWUg83kVUnfI7ygzF7EI2yqxzYahK5%2FnOuTglI4VuWxfluCR0nAz8faiqmE%2FBRYZdCj7DeIz3X3BBEBct9AQ82Xui0pD2JFnCJNLuRQNFlKKf240sr9S92MXQp3zN0Qz2pZ1qQfHGVcfBOW5U1dub&X-Amz-Signature=8cc34c1ece06c3bfd557add63463f42a68d4d20eb06fd6f23ba11f291791ec53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRMVGQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcTEdmJCgoexurlD13bQxl%2Bb4A%2FZ4nlp%2F%2BKjaUs5dSgAIhAMdzYgCxMmZDRsCBckZQEqraDG7qD8DyN6vUVKVLYRDSKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTSlpM2uxBzbo9XnAq3AMmbyXhVYwxzlkcb%2FTEYWTYYT7vaHL7Gyr8uYfUil3RswOTqNius3kFIfCNhh5vMUDW2H6DSQNJqjDKJYhjff6cWdHl4w30%2BWeomi%2BZ57msr%2BvkBTNwqb1eHuL6CoJBtAL%2F5DdUbwzr47ZMAyY02w2qgLq35e7IEnzu4dE%2FaVchIEWPKS8nT7IIc0FHDHT00D6lFAZ%2FAZE4p%2B85I2z4%2FE%2BgOpr3r1l3vmsI94wZmhyC%2BVw0Qr8t%2F0eaWWEbSopTPerNfj%2BQNaaJADJJygeCFVk8qpmvSvsjNL9bDfJDa16dZb%2Bdees8WEjcRJZioNMMWLUX7YYq4OCEhE8WZxzW7b3boq1RyEotdFC8GR1DpZp%2F0eTZRG8sCUFgRjPJ%2BADWv5B8ebOjhT3ZPIyQNysNylGvnskNiaKZLr84ZvoCP4T5ZtqifcXaI%2FtGZV6DXTetvbrt4Od5hYbgQoILx8Tfr6z%2FHBclqvraC3bDp84BsayI4e2fwO6%2B%2FYz%2FfbUwOfK27jstBxiIQqjKN2rOzEATu6LtFbiCC73l%2FqNF05eI6oGV5HV1OXhLE23B7thMl5voSYQZfWn0cwwknMpUVhk0ZbVHhNkV2RosT2wcfPz%2BnBJfJDLy1y%2F38XcStxYEbDDCi9%2FEBjqkAYkw1sc80hO6WBF3Z%2FjtM7OGRs%2BIo9TvSF%2B16gWqPSzG%2FvBXbPqJmbXs5jn%2F8OY23y4Jj9YXWUg83kVUnfI7ygzF7EI2yqxzYahK5%2FnOuTglI4VuWxfluCR0nAz8faiqmE%2FBRYZdCj7DeIz3X3BBEBct9AQ82Xui0pD2JFnCJNLuRQNFlKKf240sr9S92MXQp3zN0Qz2pZ1qQfHGVcfBOW5U1dub&X-Amz-Signature=cbe13fbebfeef196cbb4276ef06720456345d43df21d2479d7faed086e82ce05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRMVGQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcTEdmJCgoexurlD13bQxl%2Bb4A%2FZ4nlp%2F%2BKjaUs5dSgAIhAMdzYgCxMmZDRsCBckZQEqraDG7qD8DyN6vUVKVLYRDSKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTSlpM2uxBzbo9XnAq3AMmbyXhVYwxzlkcb%2FTEYWTYYT7vaHL7Gyr8uYfUil3RswOTqNius3kFIfCNhh5vMUDW2H6DSQNJqjDKJYhjff6cWdHl4w30%2BWeomi%2BZ57msr%2BvkBTNwqb1eHuL6CoJBtAL%2F5DdUbwzr47ZMAyY02w2qgLq35e7IEnzu4dE%2FaVchIEWPKS8nT7IIc0FHDHT00D6lFAZ%2FAZE4p%2B85I2z4%2FE%2BgOpr3r1l3vmsI94wZmhyC%2BVw0Qr8t%2F0eaWWEbSopTPerNfj%2BQNaaJADJJygeCFVk8qpmvSvsjNL9bDfJDa16dZb%2Bdees8WEjcRJZioNMMWLUX7YYq4OCEhE8WZxzW7b3boq1RyEotdFC8GR1DpZp%2F0eTZRG8sCUFgRjPJ%2BADWv5B8ebOjhT3ZPIyQNysNylGvnskNiaKZLr84ZvoCP4T5ZtqifcXaI%2FtGZV6DXTetvbrt4Od5hYbgQoILx8Tfr6z%2FHBclqvraC3bDp84BsayI4e2fwO6%2B%2FYz%2FfbUwOfK27jstBxiIQqjKN2rOzEATu6LtFbiCC73l%2FqNF05eI6oGV5HV1OXhLE23B7thMl5voSYQZfWn0cwwknMpUVhk0ZbVHhNkV2RosT2wcfPz%2BnBJfJDLy1y%2F38XcStxYEbDDCi9%2FEBjqkAYkw1sc80hO6WBF3Z%2FjtM7OGRs%2BIo9TvSF%2B16gWqPSzG%2FvBXbPqJmbXs5jn%2F8OY23y4Jj9YXWUg83kVUnfI7ygzF7EI2yqxzYahK5%2FnOuTglI4VuWxfluCR0nAz8faiqmE%2FBRYZdCj7DeIz3X3BBEBct9AQ82Xui0pD2JFnCJNLuRQNFlKKf240sr9S92MXQp3zN0Qz2pZ1qQfHGVcfBOW5U1dub&X-Amz-Signature=23517056dc58616b7a722a27f412bb7dcf077079b87bc0c6f2d34267517e9fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRMVGQJ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcTEdmJCgoexurlD13bQxl%2Bb4A%2FZ4nlp%2F%2BKjaUs5dSgAIhAMdzYgCxMmZDRsCBckZQEqraDG7qD8DyN6vUVKVLYRDSKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTSlpM2uxBzbo9XnAq3AMmbyXhVYwxzlkcb%2FTEYWTYYT7vaHL7Gyr8uYfUil3RswOTqNius3kFIfCNhh5vMUDW2H6DSQNJqjDKJYhjff6cWdHl4w30%2BWeomi%2BZ57msr%2BvkBTNwqb1eHuL6CoJBtAL%2F5DdUbwzr47ZMAyY02w2qgLq35e7IEnzu4dE%2FaVchIEWPKS8nT7IIc0FHDHT00D6lFAZ%2FAZE4p%2B85I2z4%2FE%2BgOpr3r1l3vmsI94wZmhyC%2BVw0Qr8t%2F0eaWWEbSopTPerNfj%2BQNaaJADJJygeCFVk8qpmvSvsjNL9bDfJDa16dZb%2Bdees8WEjcRJZioNMMWLUX7YYq4OCEhE8WZxzW7b3boq1RyEotdFC8GR1DpZp%2F0eTZRG8sCUFgRjPJ%2BADWv5B8ebOjhT3ZPIyQNysNylGvnskNiaKZLr84ZvoCP4T5ZtqifcXaI%2FtGZV6DXTetvbrt4Od5hYbgQoILx8Tfr6z%2FHBclqvraC3bDp84BsayI4e2fwO6%2B%2FYz%2FfbUwOfK27jstBxiIQqjKN2rOzEATu6LtFbiCC73l%2FqNF05eI6oGV5HV1OXhLE23B7thMl5voSYQZfWn0cwwknMpUVhk0ZbVHhNkV2RosT2wcfPz%2BnBJfJDLy1y%2F38XcStxYEbDDCi9%2FEBjqkAYkw1sc80hO6WBF3Z%2FjtM7OGRs%2BIo9TvSF%2B16gWqPSzG%2FvBXbPqJmbXs5jn%2F8OY23y4Jj9YXWUg83kVUnfI7ygzF7EI2yqxzYahK5%2FnOuTglI4VuWxfluCR0nAz8faiqmE%2FBRYZdCj7DeIz3X3BBEBct9AQ82Xui0pD2JFnCJNLuRQNFlKKf240sr9S92MXQp3zN0Qz2pZ1qQfHGVcfBOW5U1dub&X-Amz-Signature=7afc22105a2e42cb646336ade104e295f05e1b3273d5d497ea9bd3e3f250269d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
