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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHXESHH%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1pqdvUYuAJz5dcFxhAkTb059RrF2szB%2B%2BXscVu76mHAiEA5YhDzc1g%2BC8gS1uBaXrtsOSUTJXD8oItpU8bmbwYUKIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDInMSXUcK8rw%2BOX80yrcA1WSQ%2F7D7WrMWINsctUGhTJuHYtk3enFF9q%2FSKmUGCS0%2BedrTc%2B5ORIEzsqhbOjvQvZSbCcLfZlS9zLr0Evk3tF8%2FYdAG34kNP9AJA6V703bB6AhD3DCf9pmPY9etx%2FiQicfZ9%2B%2Fnlv%2BUsRsVDEBfQZOSgyvGGD%2F0LF0iyhj%2Blz6OF98z8jr5tHw1Hm94CZQ5sm4BayAu%2FuJgP9P%2BxDP13Hsta1Iluky925homMT5TVZZ%2FTRg9mrj5ZVWcWFqhckJYxP%2FeBs4Some4iZ9O7EhKcfN0U2rsF0w0%2BjaC4cLwxrXbrKTo40s%2FaOXTz0sfAsn4jLLFoeWuHhf0HvlTP%2BSwhxv0WKuM5bYKnPJaCaV9WFgyUi5qWnM52FVMCACLcy2tfwTcE0iVFS0K81UbQeCbeIfi11j206zp1KZxGcRMufeP0mN8j8vNxVDlvRHK5C0ZDguUAGkfjPh7EwrdYDjDQOz2wIOwTqxpOFvZM5RfFfwKUO5ke97dVcKxNmUG6xxk%2BQCeQnW7bGTK9P6sgbLK5yLGp4fzNkHOkyVHo4%2FM0Au%2FUeEluxE3h3Qviv8PEdKKrRXVIurlYwuQzfFIswdD%2F4CV%2BTpkKaSIVjfJtiMloxUCZ0HG6yTqNt9YUxMN71hscGOqUBB1cP7uIGq5hSNtkJTznXZe0TbSrp%2FjwM%2Bumbe0j%2F4EOa%2Fi3Lbqz%2F9%2B4Y03l6wMUOON3oZkEWHQfMd8DFxKa2yP%2BqfB3tDpNk9PidtFXpqmCiVsd%2FFyhR4fu6rZ7N0%2BU75vmyw7wipPQvEDDZiIe97%2Bvj7i46ZjYH7aiO%2FbnPejs07DvtBPEjpv8SIT0sSw3dBrsHMYMD5SedfvvMlqJ2wBysrgjA&X-Amz-Signature=6db3d4debd03340996ee71d7ba930008b761bf55bf53a428bfccb162779146da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHXESHH%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1pqdvUYuAJz5dcFxhAkTb059RrF2szB%2B%2BXscVu76mHAiEA5YhDzc1g%2BC8gS1uBaXrtsOSUTJXD8oItpU8bmbwYUKIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDInMSXUcK8rw%2BOX80yrcA1WSQ%2F7D7WrMWINsctUGhTJuHYtk3enFF9q%2FSKmUGCS0%2BedrTc%2B5ORIEzsqhbOjvQvZSbCcLfZlS9zLr0Evk3tF8%2FYdAG34kNP9AJA6V703bB6AhD3DCf9pmPY9etx%2FiQicfZ9%2B%2Fnlv%2BUsRsVDEBfQZOSgyvGGD%2F0LF0iyhj%2Blz6OF98z8jr5tHw1Hm94CZQ5sm4BayAu%2FuJgP9P%2BxDP13Hsta1Iluky925homMT5TVZZ%2FTRg9mrj5ZVWcWFqhckJYxP%2FeBs4Some4iZ9O7EhKcfN0U2rsF0w0%2BjaC4cLwxrXbrKTo40s%2FaOXTz0sfAsn4jLLFoeWuHhf0HvlTP%2BSwhxv0WKuM5bYKnPJaCaV9WFgyUi5qWnM52FVMCACLcy2tfwTcE0iVFS0K81UbQeCbeIfi11j206zp1KZxGcRMufeP0mN8j8vNxVDlvRHK5C0ZDguUAGkfjPh7EwrdYDjDQOz2wIOwTqxpOFvZM5RfFfwKUO5ke97dVcKxNmUG6xxk%2BQCeQnW7bGTK9P6sgbLK5yLGp4fzNkHOkyVHo4%2FM0Au%2FUeEluxE3h3Qviv8PEdKKrRXVIurlYwuQzfFIswdD%2F4CV%2BTpkKaSIVjfJtiMloxUCZ0HG6yTqNt9YUxMN71hscGOqUBB1cP7uIGq5hSNtkJTznXZe0TbSrp%2FjwM%2Bumbe0j%2F4EOa%2Fi3Lbqz%2F9%2B4Y03l6wMUOON3oZkEWHQfMd8DFxKa2yP%2BqfB3tDpNk9PidtFXpqmCiVsd%2FFyhR4fu6rZ7N0%2BU75vmyw7wipPQvEDDZiIe97%2Bvj7i46ZjYH7aiO%2FbnPejs07DvtBPEjpv8SIT0sSw3dBrsHMYMD5SedfvvMlqJ2wBysrgjA&X-Amz-Signature=1305671953a5aafef33abf003a0efe6897b4304f00bdfa3fc71ff2b6bbd1e945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHXESHH%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1pqdvUYuAJz5dcFxhAkTb059RrF2szB%2B%2BXscVu76mHAiEA5YhDzc1g%2BC8gS1uBaXrtsOSUTJXD8oItpU8bmbwYUKIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDInMSXUcK8rw%2BOX80yrcA1WSQ%2F7D7WrMWINsctUGhTJuHYtk3enFF9q%2FSKmUGCS0%2BedrTc%2B5ORIEzsqhbOjvQvZSbCcLfZlS9zLr0Evk3tF8%2FYdAG34kNP9AJA6V703bB6AhD3DCf9pmPY9etx%2FiQicfZ9%2B%2Fnlv%2BUsRsVDEBfQZOSgyvGGD%2F0LF0iyhj%2Blz6OF98z8jr5tHw1Hm94CZQ5sm4BayAu%2FuJgP9P%2BxDP13Hsta1Iluky925homMT5TVZZ%2FTRg9mrj5ZVWcWFqhckJYxP%2FeBs4Some4iZ9O7EhKcfN0U2rsF0w0%2BjaC4cLwxrXbrKTo40s%2FaOXTz0sfAsn4jLLFoeWuHhf0HvlTP%2BSwhxv0WKuM5bYKnPJaCaV9WFgyUi5qWnM52FVMCACLcy2tfwTcE0iVFS0K81UbQeCbeIfi11j206zp1KZxGcRMufeP0mN8j8vNxVDlvRHK5C0ZDguUAGkfjPh7EwrdYDjDQOz2wIOwTqxpOFvZM5RfFfwKUO5ke97dVcKxNmUG6xxk%2BQCeQnW7bGTK9P6sgbLK5yLGp4fzNkHOkyVHo4%2FM0Au%2FUeEluxE3h3Qviv8PEdKKrRXVIurlYwuQzfFIswdD%2F4CV%2BTpkKaSIVjfJtiMloxUCZ0HG6yTqNt9YUxMN71hscGOqUBB1cP7uIGq5hSNtkJTznXZe0TbSrp%2FjwM%2Bumbe0j%2F4EOa%2Fi3Lbqz%2F9%2B4Y03l6wMUOON3oZkEWHQfMd8DFxKa2yP%2BqfB3tDpNk9PidtFXpqmCiVsd%2FFyhR4fu6rZ7N0%2BU75vmyw7wipPQvEDDZiIe97%2Bvj7i46ZjYH7aiO%2FbnPejs07DvtBPEjpv8SIT0sSw3dBrsHMYMD5SedfvvMlqJ2wBysrgjA&X-Amz-Signature=f8fb9342a2a3e214eadfbb42a286f51615b4b27b93bda2bf2c3b9809b5d4c692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHXESHH%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1pqdvUYuAJz5dcFxhAkTb059RrF2szB%2B%2BXscVu76mHAiEA5YhDzc1g%2BC8gS1uBaXrtsOSUTJXD8oItpU8bmbwYUKIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDInMSXUcK8rw%2BOX80yrcA1WSQ%2F7D7WrMWINsctUGhTJuHYtk3enFF9q%2FSKmUGCS0%2BedrTc%2B5ORIEzsqhbOjvQvZSbCcLfZlS9zLr0Evk3tF8%2FYdAG34kNP9AJA6V703bB6AhD3DCf9pmPY9etx%2FiQicfZ9%2B%2Fnlv%2BUsRsVDEBfQZOSgyvGGD%2F0LF0iyhj%2Blz6OF98z8jr5tHw1Hm94CZQ5sm4BayAu%2FuJgP9P%2BxDP13Hsta1Iluky925homMT5TVZZ%2FTRg9mrj5ZVWcWFqhckJYxP%2FeBs4Some4iZ9O7EhKcfN0U2rsF0w0%2BjaC4cLwxrXbrKTo40s%2FaOXTz0sfAsn4jLLFoeWuHhf0HvlTP%2BSwhxv0WKuM5bYKnPJaCaV9WFgyUi5qWnM52FVMCACLcy2tfwTcE0iVFS0K81UbQeCbeIfi11j206zp1KZxGcRMufeP0mN8j8vNxVDlvRHK5C0ZDguUAGkfjPh7EwrdYDjDQOz2wIOwTqxpOFvZM5RfFfwKUO5ke97dVcKxNmUG6xxk%2BQCeQnW7bGTK9P6sgbLK5yLGp4fzNkHOkyVHo4%2FM0Au%2FUeEluxE3h3Qviv8PEdKKrRXVIurlYwuQzfFIswdD%2F4CV%2BTpkKaSIVjfJtiMloxUCZ0HG6yTqNt9YUxMN71hscGOqUBB1cP7uIGq5hSNtkJTznXZe0TbSrp%2FjwM%2Bumbe0j%2F4EOa%2Fi3Lbqz%2F9%2B4Y03l6wMUOON3oZkEWHQfMd8DFxKa2yP%2BqfB3tDpNk9PidtFXpqmCiVsd%2FFyhR4fu6rZ7N0%2BU75vmyw7wipPQvEDDZiIe97%2Bvj7i46ZjYH7aiO%2FbnPejs07DvtBPEjpv8SIT0sSw3dBrsHMYMD5SedfvvMlqJ2wBysrgjA&X-Amz-Signature=b9e81b4a6fd9116538e42f47d107f8547d32cc7f5fe45daf35ae6148330faac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHXESHH%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1pqdvUYuAJz5dcFxhAkTb059RrF2szB%2B%2BXscVu76mHAiEA5YhDzc1g%2BC8gS1uBaXrtsOSUTJXD8oItpU8bmbwYUKIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDInMSXUcK8rw%2BOX80yrcA1WSQ%2F7D7WrMWINsctUGhTJuHYtk3enFF9q%2FSKmUGCS0%2BedrTc%2B5ORIEzsqhbOjvQvZSbCcLfZlS9zLr0Evk3tF8%2FYdAG34kNP9AJA6V703bB6AhD3DCf9pmPY9etx%2FiQicfZ9%2B%2Fnlv%2BUsRsVDEBfQZOSgyvGGD%2F0LF0iyhj%2Blz6OF98z8jr5tHw1Hm94CZQ5sm4BayAu%2FuJgP9P%2BxDP13Hsta1Iluky925homMT5TVZZ%2FTRg9mrj5ZVWcWFqhckJYxP%2FeBs4Some4iZ9O7EhKcfN0U2rsF0w0%2BjaC4cLwxrXbrKTo40s%2FaOXTz0sfAsn4jLLFoeWuHhf0HvlTP%2BSwhxv0WKuM5bYKnPJaCaV9WFgyUi5qWnM52FVMCACLcy2tfwTcE0iVFS0K81UbQeCbeIfi11j206zp1KZxGcRMufeP0mN8j8vNxVDlvRHK5C0ZDguUAGkfjPh7EwrdYDjDQOz2wIOwTqxpOFvZM5RfFfwKUO5ke97dVcKxNmUG6xxk%2BQCeQnW7bGTK9P6sgbLK5yLGp4fzNkHOkyVHo4%2FM0Au%2FUeEluxE3h3Qviv8PEdKKrRXVIurlYwuQzfFIswdD%2F4CV%2BTpkKaSIVjfJtiMloxUCZ0HG6yTqNt9YUxMN71hscGOqUBB1cP7uIGq5hSNtkJTznXZe0TbSrp%2FjwM%2Bumbe0j%2F4EOa%2Fi3Lbqz%2F9%2B4Y03l6wMUOON3oZkEWHQfMd8DFxKa2yP%2BqfB3tDpNk9PidtFXpqmCiVsd%2FFyhR4fu6rZ7N0%2BU75vmyw7wipPQvEDDZiIe97%2Bvj7i46ZjYH7aiO%2FbnPejs07DvtBPEjpv8SIT0sSw3dBrsHMYMD5SedfvvMlqJ2wBysrgjA&X-Amz-Signature=5e1d26860b5eff16150962ad8a16f17548b0fee099c1b408d15613c7425c9a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHXESHH%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1pqdvUYuAJz5dcFxhAkTb059RrF2szB%2B%2BXscVu76mHAiEA5YhDzc1g%2BC8gS1uBaXrtsOSUTJXD8oItpU8bmbwYUKIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDInMSXUcK8rw%2BOX80yrcA1WSQ%2F7D7WrMWINsctUGhTJuHYtk3enFF9q%2FSKmUGCS0%2BedrTc%2B5ORIEzsqhbOjvQvZSbCcLfZlS9zLr0Evk3tF8%2FYdAG34kNP9AJA6V703bB6AhD3DCf9pmPY9etx%2FiQicfZ9%2B%2Fnlv%2BUsRsVDEBfQZOSgyvGGD%2F0LF0iyhj%2Blz6OF98z8jr5tHw1Hm94CZQ5sm4BayAu%2FuJgP9P%2BxDP13Hsta1Iluky925homMT5TVZZ%2FTRg9mrj5ZVWcWFqhckJYxP%2FeBs4Some4iZ9O7EhKcfN0U2rsF0w0%2BjaC4cLwxrXbrKTo40s%2FaOXTz0sfAsn4jLLFoeWuHhf0HvlTP%2BSwhxv0WKuM5bYKnPJaCaV9WFgyUi5qWnM52FVMCACLcy2tfwTcE0iVFS0K81UbQeCbeIfi11j206zp1KZxGcRMufeP0mN8j8vNxVDlvRHK5C0ZDguUAGkfjPh7EwrdYDjDQOz2wIOwTqxpOFvZM5RfFfwKUO5ke97dVcKxNmUG6xxk%2BQCeQnW7bGTK9P6sgbLK5yLGp4fzNkHOkyVHo4%2FM0Au%2FUeEluxE3h3Qviv8PEdKKrRXVIurlYwuQzfFIswdD%2F4CV%2BTpkKaSIVjfJtiMloxUCZ0HG6yTqNt9YUxMN71hscGOqUBB1cP7uIGq5hSNtkJTznXZe0TbSrp%2FjwM%2Bumbe0j%2F4EOa%2Fi3Lbqz%2F9%2B4Y03l6wMUOON3oZkEWHQfMd8DFxKa2yP%2BqfB3tDpNk9PidtFXpqmCiVsd%2FFyhR4fu6rZ7N0%2BU75vmyw7wipPQvEDDZiIe97%2Bvj7i46ZjYH7aiO%2FbnPejs07DvtBPEjpv8SIT0sSw3dBrsHMYMD5SedfvvMlqJ2wBysrgjA&X-Amz-Signature=532f1084d02c155c31a422cce55168b9e7b129b7aec23e60ced7c931436a26e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHXESHH%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1pqdvUYuAJz5dcFxhAkTb059RrF2szB%2B%2BXscVu76mHAiEA5YhDzc1g%2BC8gS1uBaXrtsOSUTJXD8oItpU8bmbwYUKIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDInMSXUcK8rw%2BOX80yrcA1WSQ%2F7D7WrMWINsctUGhTJuHYtk3enFF9q%2FSKmUGCS0%2BedrTc%2B5ORIEzsqhbOjvQvZSbCcLfZlS9zLr0Evk3tF8%2FYdAG34kNP9AJA6V703bB6AhD3DCf9pmPY9etx%2FiQicfZ9%2B%2Fnlv%2BUsRsVDEBfQZOSgyvGGD%2F0LF0iyhj%2Blz6OF98z8jr5tHw1Hm94CZQ5sm4BayAu%2FuJgP9P%2BxDP13Hsta1Iluky925homMT5TVZZ%2FTRg9mrj5ZVWcWFqhckJYxP%2FeBs4Some4iZ9O7EhKcfN0U2rsF0w0%2BjaC4cLwxrXbrKTo40s%2FaOXTz0sfAsn4jLLFoeWuHhf0HvlTP%2BSwhxv0WKuM5bYKnPJaCaV9WFgyUi5qWnM52FVMCACLcy2tfwTcE0iVFS0K81UbQeCbeIfi11j206zp1KZxGcRMufeP0mN8j8vNxVDlvRHK5C0ZDguUAGkfjPh7EwrdYDjDQOz2wIOwTqxpOFvZM5RfFfwKUO5ke97dVcKxNmUG6xxk%2BQCeQnW7bGTK9P6sgbLK5yLGp4fzNkHOkyVHo4%2FM0Au%2FUeEluxE3h3Qviv8PEdKKrRXVIurlYwuQzfFIswdD%2F4CV%2BTpkKaSIVjfJtiMloxUCZ0HG6yTqNt9YUxMN71hscGOqUBB1cP7uIGq5hSNtkJTznXZe0TbSrp%2FjwM%2Bumbe0j%2F4EOa%2Fi3Lbqz%2F9%2B4Y03l6wMUOON3oZkEWHQfMd8DFxKa2yP%2BqfB3tDpNk9PidtFXpqmCiVsd%2FFyhR4fu6rZ7N0%2BU75vmyw7wipPQvEDDZiIe97%2Bvj7i46ZjYH7aiO%2FbnPejs07DvtBPEjpv8SIT0sSw3dBrsHMYMD5SedfvvMlqJ2wBysrgjA&X-Amz-Signature=3a885f29fc4ab33b06608829f5ef709c1e622736400f45bcdc2ac4ec64c827ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EHXESHH%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1pqdvUYuAJz5dcFxhAkTb059RrF2szB%2B%2BXscVu76mHAiEA5YhDzc1g%2BC8gS1uBaXrtsOSUTJXD8oItpU8bmbwYUKIq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDInMSXUcK8rw%2BOX80yrcA1WSQ%2F7D7WrMWINsctUGhTJuHYtk3enFF9q%2FSKmUGCS0%2BedrTc%2B5ORIEzsqhbOjvQvZSbCcLfZlS9zLr0Evk3tF8%2FYdAG34kNP9AJA6V703bB6AhD3DCf9pmPY9etx%2FiQicfZ9%2B%2Fnlv%2BUsRsVDEBfQZOSgyvGGD%2F0LF0iyhj%2Blz6OF98z8jr5tHw1Hm94CZQ5sm4BayAu%2FuJgP9P%2BxDP13Hsta1Iluky925homMT5TVZZ%2FTRg9mrj5ZVWcWFqhckJYxP%2FeBs4Some4iZ9O7EhKcfN0U2rsF0w0%2BjaC4cLwxrXbrKTo40s%2FaOXTz0sfAsn4jLLFoeWuHhf0HvlTP%2BSwhxv0WKuM5bYKnPJaCaV9WFgyUi5qWnM52FVMCACLcy2tfwTcE0iVFS0K81UbQeCbeIfi11j206zp1KZxGcRMufeP0mN8j8vNxVDlvRHK5C0ZDguUAGkfjPh7EwrdYDjDQOz2wIOwTqxpOFvZM5RfFfwKUO5ke97dVcKxNmUG6xxk%2BQCeQnW7bGTK9P6sgbLK5yLGp4fzNkHOkyVHo4%2FM0Au%2FUeEluxE3h3Qviv8PEdKKrRXVIurlYwuQzfFIswdD%2F4CV%2BTpkKaSIVjfJtiMloxUCZ0HG6yTqNt9YUxMN71hscGOqUBB1cP7uIGq5hSNtkJTznXZe0TbSrp%2FjwM%2Bumbe0j%2F4EOa%2Fi3Lbqz%2F9%2B4Y03l6wMUOON3oZkEWHQfMd8DFxKa2yP%2BqfB3tDpNk9PidtFXpqmCiVsd%2FFyhR4fu6rZ7N0%2BU75vmyw7wipPQvEDDZiIe97%2Bvj7i46ZjYH7aiO%2FbnPejs07DvtBPEjpv8SIT0sSw3dBrsHMYMD5SedfvvMlqJ2wBysrgjA&X-Amz-Signature=02f78b91ec6dcba78903c1a1dea6c5b56369591506500e2b1f46686202ded672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
