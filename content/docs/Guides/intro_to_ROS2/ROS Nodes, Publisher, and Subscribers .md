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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQLLHT5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHOxs6KKhSFELd%2FavImmGq1RoYQMCQNC6t7ZmGv2zeGAIhAIr3FMOL1hOPpHVU5pPquAjQkx55s0O7t2x6VGBbsJ53KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztP0d4U5n%2FKHrLofUq3APGsQnJPOqw8jkY5ap4bErBXc%2FHuq8qycfmoYHJhAUSiijqO3phHD7hbI52xHRFSoD%2BuioldH0tZUlKzKX%2BE1eL2RNgmUFSzKEH1bbOoxqgI3WC7F449QKFRHikTkzb4122%2FHk9XACKsJ5nmrFEuiAfjPAhKLnBVRBc%2B2Kn26Y0wTZevF3zqyoHezRMRFwbgh3qlruLp6BA4G2waUS0oR017UBP7WAVoFz5fYPeZ6KoP0ItaButWbHQC23Ps7iQwnn6puJKNu%2Bw7MmhvLlsj0wssIXsFZ7xbTsQfqA6I94MmhOmuSO%2BbUJaG3a1zoCX6Iyigdd44hu7GhpyEhhbcFXlYFzzlBVZY5iANcUrO06orOScSLlM5229VSwXL6wATBbv8cMIB45aQOXL2FVnDqQQLKb%2Bsn4qbwvxymEsZQLeVHwNbQSSJ03%2FhV5YD3eawq7vDZP9sBU%2BZWMLzUwvci6ZoOXaVI%2FzMU1gr1Tzj%2FpXdgAeE%2B92fh0dACO8Ad8W2sLGfULVK93qShn4kQk%2B5SCHFpyxfN1gF3L6o28Bo9KucrDR8ucmWRmoWLNkbmTwvG6S4%2BkARiz4SAKXhRRiz2sMqGXpe1Z%2FelL9OlSSTJeDMaHdxdaGaIrn5HbmyzCU4%2FTABjqkAcqAMGEdiY0AGYFqmye7pLFZLTGm%2BiJDLqYuum%2BJMdQ%2Fnumse4y3F2ln6howFbpf%2FY3NkbRgAbf4yaWGTVgSdjKXsbIdFh9R9RCXCPgrYt97DGviH0Gcu4mrRvVS8UhHoGryOOE5x3gPlSf7rer%2Bc3NS7PytkGAUeoUIz3wuUKqT8a3EQ2h7p7i8kQ5Uh%2BojvD%2FZa80lvmUguLePuShMdshXafmX&X-Amz-Signature=23626a47e6bed001fce2ca0ed44a1cf4e3f74e87712ef16b5902026fb82b22ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQLLHT5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHOxs6KKhSFELd%2FavImmGq1RoYQMCQNC6t7ZmGv2zeGAIhAIr3FMOL1hOPpHVU5pPquAjQkx55s0O7t2x6VGBbsJ53KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztP0d4U5n%2FKHrLofUq3APGsQnJPOqw8jkY5ap4bErBXc%2FHuq8qycfmoYHJhAUSiijqO3phHD7hbI52xHRFSoD%2BuioldH0tZUlKzKX%2BE1eL2RNgmUFSzKEH1bbOoxqgI3WC7F449QKFRHikTkzb4122%2FHk9XACKsJ5nmrFEuiAfjPAhKLnBVRBc%2B2Kn26Y0wTZevF3zqyoHezRMRFwbgh3qlruLp6BA4G2waUS0oR017UBP7WAVoFz5fYPeZ6KoP0ItaButWbHQC23Ps7iQwnn6puJKNu%2Bw7MmhvLlsj0wssIXsFZ7xbTsQfqA6I94MmhOmuSO%2BbUJaG3a1zoCX6Iyigdd44hu7GhpyEhhbcFXlYFzzlBVZY5iANcUrO06orOScSLlM5229VSwXL6wATBbv8cMIB45aQOXL2FVnDqQQLKb%2Bsn4qbwvxymEsZQLeVHwNbQSSJ03%2FhV5YD3eawq7vDZP9sBU%2BZWMLzUwvci6ZoOXaVI%2FzMU1gr1Tzj%2FpXdgAeE%2B92fh0dACO8Ad8W2sLGfULVK93qShn4kQk%2B5SCHFpyxfN1gF3L6o28Bo9KucrDR8ucmWRmoWLNkbmTwvG6S4%2BkARiz4SAKXhRRiz2sMqGXpe1Z%2FelL9OlSSTJeDMaHdxdaGaIrn5HbmyzCU4%2FTABjqkAcqAMGEdiY0AGYFqmye7pLFZLTGm%2BiJDLqYuum%2BJMdQ%2Fnumse4y3F2ln6howFbpf%2FY3NkbRgAbf4yaWGTVgSdjKXsbIdFh9R9RCXCPgrYt97DGviH0Gcu4mrRvVS8UhHoGryOOE5x3gPlSf7rer%2Bc3NS7PytkGAUeoUIz3wuUKqT8a3EQ2h7p7i8kQ5Uh%2BojvD%2FZa80lvmUguLePuShMdshXafmX&X-Amz-Signature=3df94e055a480be368457db1192b9819bb81d9f748fe95000a85a5e77516a858&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQLLHT5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHOxs6KKhSFELd%2FavImmGq1RoYQMCQNC6t7ZmGv2zeGAIhAIr3FMOL1hOPpHVU5pPquAjQkx55s0O7t2x6VGBbsJ53KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztP0d4U5n%2FKHrLofUq3APGsQnJPOqw8jkY5ap4bErBXc%2FHuq8qycfmoYHJhAUSiijqO3phHD7hbI52xHRFSoD%2BuioldH0tZUlKzKX%2BE1eL2RNgmUFSzKEH1bbOoxqgI3WC7F449QKFRHikTkzb4122%2FHk9XACKsJ5nmrFEuiAfjPAhKLnBVRBc%2B2Kn26Y0wTZevF3zqyoHezRMRFwbgh3qlruLp6BA4G2waUS0oR017UBP7WAVoFz5fYPeZ6KoP0ItaButWbHQC23Ps7iQwnn6puJKNu%2Bw7MmhvLlsj0wssIXsFZ7xbTsQfqA6I94MmhOmuSO%2BbUJaG3a1zoCX6Iyigdd44hu7GhpyEhhbcFXlYFzzlBVZY5iANcUrO06orOScSLlM5229VSwXL6wATBbv8cMIB45aQOXL2FVnDqQQLKb%2Bsn4qbwvxymEsZQLeVHwNbQSSJ03%2FhV5YD3eawq7vDZP9sBU%2BZWMLzUwvci6ZoOXaVI%2FzMU1gr1Tzj%2FpXdgAeE%2B92fh0dACO8Ad8W2sLGfULVK93qShn4kQk%2B5SCHFpyxfN1gF3L6o28Bo9KucrDR8ucmWRmoWLNkbmTwvG6S4%2BkARiz4SAKXhRRiz2sMqGXpe1Z%2FelL9OlSSTJeDMaHdxdaGaIrn5HbmyzCU4%2FTABjqkAcqAMGEdiY0AGYFqmye7pLFZLTGm%2BiJDLqYuum%2BJMdQ%2Fnumse4y3F2ln6howFbpf%2FY3NkbRgAbf4yaWGTVgSdjKXsbIdFh9R9RCXCPgrYt97DGviH0Gcu4mrRvVS8UhHoGryOOE5x3gPlSf7rer%2Bc3NS7PytkGAUeoUIz3wuUKqT8a3EQ2h7p7i8kQ5Uh%2BojvD%2FZa80lvmUguLePuShMdshXafmX&X-Amz-Signature=1e3d3d08e81d02cb3ab8cdcd6030d3158daef940f3356594696c86da92e03fe6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQLLHT5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHOxs6KKhSFELd%2FavImmGq1RoYQMCQNC6t7ZmGv2zeGAIhAIr3FMOL1hOPpHVU5pPquAjQkx55s0O7t2x6VGBbsJ53KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztP0d4U5n%2FKHrLofUq3APGsQnJPOqw8jkY5ap4bErBXc%2FHuq8qycfmoYHJhAUSiijqO3phHD7hbI52xHRFSoD%2BuioldH0tZUlKzKX%2BE1eL2RNgmUFSzKEH1bbOoxqgI3WC7F449QKFRHikTkzb4122%2FHk9XACKsJ5nmrFEuiAfjPAhKLnBVRBc%2B2Kn26Y0wTZevF3zqyoHezRMRFwbgh3qlruLp6BA4G2waUS0oR017UBP7WAVoFz5fYPeZ6KoP0ItaButWbHQC23Ps7iQwnn6puJKNu%2Bw7MmhvLlsj0wssIXsFZ7xbTsQfqA6I94MmhOmuSO%2BbUJaG3a1zoCX6Iyigdd44hu7GhpyEhhbcFXlYFzzlBVZY5iANcUrO06orOScSLlM5229VSwXL6wATBbv8cMIB45aQOXL2FVnDqQQLKb%2Bsn4qbwvxymEsZQLeVHwNbQSSJ03%2FhV5YD3eawq7vDZP9sBU%2BZWMLzUwvci6ZoOXaVI%2FzMU1gr1Tzj%2FpXdgAeE%2B92fh0dACO8Ad8W2sLGfULVK93qShn4kQk%2B5SCHFpyxfN1gF3L6o28Bo9KucrDR8ucmWRmoWLNkbmTwvG6S4%2BkARiz4SAKXhRRiz2sMqGXpe1Z%2FelL9OlSSTJeDMaHdxdaGaIrn5HbmyzCU4%2FTABjqkAcqAMGEdiY0AGYFqmye7pLFZLTGm%2BiJDLqYuum%2BJMdQ%2Fnumse4y3F2ln6howFbpf%2FY3NkbRgAbf4yaWGTVgSdjKXsbIdFh9R9RCXCPgrYt97DGviH0Gcu4mrRvVS8UhHoGryOOE5x3gPlSf7rer%2Bc3NS7PytkGAUeoUIz3wuUKqT8a3EQ2h7p7i8kQ5Uh%2BojvD%2FZa80lvmUguLePuShMdshXafmX&X-Amz-Signature=5edcb904f8be73dfbf9b8bbb2374448faf0dc4c0859e4103bfcfa66e22133851&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQLLHT5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHOxs6KKhSFELd%2FavImmGq1RoYQMCQNC6t7ZmGv2zeGAIhAIr3FMOL1hOPpHVU5pPquAjQkx55s0O7t2x6VGBbsJ53KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztP0d4U5n%2FKHrLofUq3APGsQnJPOqw8jkY5ap4bErBXc%2FHuq8qycfmoYHJhAUSiijqO3phHD7hbI52xHRFSoD%2BuioldH0tZUlKzKX%2BE1eL2RNgmUFSzKEH1bbOoxqgI3WC7F449QKFRHikTkzb4122%2FHk9XACKsJ5nmrFEuiAfjPAhKLnBVRBc%2B2Kn26Y0wTZevF3zqyoHezRMRFwbgh3qlruLp6BA4G2waUS0oR017UBP7WAVoFz5fYPeZ6KoP0ItaButWbHQC23Ps7iQwnn6puJKNu%2Bw7MmhvLlsj0wssIXsFZ7xbTsQfqA6I94MmhOmuSO%2BbUJaG3a1zoCX6Iyigdd44hu7GhpyEhhbcFXlYFzzlBVZY5iANcUrO06orOScSLlM5229VSwXL6wATBbv8cMIB45aQOXL2FVnDqQQLKb%2Bsn4qbwvxymEsZQLeVHwNbQSSJ03%2FhV5YD3eawq7vDZP9sBU%2BZWMLzUwvci6ZoOXaVI%2FzMU1gr1Tzj%2FpXdgAeE%2B92fh0dACO8Ad8W2sLGfULVK93qShn4kQk%2B5SCHFpyxfN1gF3L6o28Bo9KucrDR8ucmWRmoWLNkbmTwvG6S4%2BkARiz4SAKXhRRiz2sMqGXpe1Z%2FelL9OlSSTJeDMaHdxdaGaIrn5HbmyzCU4%2FTABjqkAcqAMGEdiY0AGYFqmye7pLFZLTGm%2BiJDLqYuum%2BJMdQ%2Fnumse4y3F2ln6howFbpf%2FY3NkbRgAbf4yaWGTVgSdjKXsbIdFh9R9RCXCPgrYt97DGviH0Gcu4mrRvVS8UhHoGryOOE5x3gPlSf7rer%2Bc3NS7PytkGAUeoUIz3wuUKqT8a3EQ2h7p7i8kQ5Uh%2BojvD%2FZa80lvmUguLePuShMdshXafmX&X-Amz-Signature=90106cf2929a800d19bee21d0726a898ecf6a84fc114cc5e90d2da36865fb87d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQLLHT5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHOxs6KKhSFELd%2FavImmGq1RoYQMCQNC6t7ZmGv2zeGAIhAIr3FMOL1hOPpHVU5pPquAjQkx55s0O7t2x6VGBbsJ53KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztP0d4U5n%2FKHrLofUq3APGsQnJPOqw8jkY5ap4bErBXc%2FHuq8qycfmoYHJhAUSiijqO3phHD7hbI52xHRFSoD%2BuioldH0tZUlKzKX%2BE1eL2RNgmUFSzKEH1bbOoxqgI3WC7F449QKFRHikTkzb4122%2FHk9XACKsJ5nmrFEuiAfjPAhKLnBVRBc%2B2Kn26Y0wTZevF3zqyoHezRMRFwbgh3qlruLp6BA4G2waUS0oR017UBP7WAVoFz5fYPeZ6KoP0ItaButWbHQC23Ps7iQwnn6puJKNu%2Bw7MmhvLlsj0wssIXsFZ7xbTsQfqA6I94MmhOmuSO%2BbUJaG3a1zoCX6Iyigdd44hu7GhpyEhhbcFXlYFzzlBVZY5iANcUrO06orOScSLlM5229VSwXL6wATBbv8cMIB45aQOXL2FVnDqQQLKb%2Bsn4qbwvxymEsZQLeVHwNbQSSJ03%2FhV5YD3eawq7vDZP9sBU%2BZWMLzUwvci6ZoOXaVI%2FzMU1gr1Tzj%2FpXdgAeE%2B92fh0dACO8Ad8W2sLGfULVK93qShn4kQk%2B5SCHFpyxfN1gF3L6o28Bo9KucrDR8ucmWRmoWLNkbmTwvG6S4%2BkARiz4SAKXhRRiz2sMqGXpe1Z%2FelL9OlSSTJeDMaHdxdaGaIrn5HbmyzCU4%2FTABjqkAcqAMGEdiY0AGYFqmye7pLFZLTGm%2BiJDLqYuum%2BJMdQ%2Fnumse4y3F2ln6howFbpf%2FY3NkbRgAbf4yaWGTVgSdjKXsbIdFh9R9RCXCPgrYt97DGviH0Gcu4mrRvVS8UhHoGryOOE5x3gPlSf7rer%2Bc3NS7PytkGAUeoUIz3wuUKqT8a3EQ2h7p7i8kQ5Uh%2BojvD%2FZa80lvmUguLePuShMdshXafmX&X-Amz-Signature=3c50fceaa43d6868e666fb3b311712d4a1825c29ce6b90850433906c4c5f92ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQLLHT5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHOxs6KKhSFELd%2FavImmGq1RoYQMCQNC6t7ZmGv2zeGAIhAIr3FMOL1hOPpHVU5pPquAjQkx55s0O7t2x6VGBbsJ53KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztP0d4U5n%2FKHrLofUq3APGsQnJPOqw8jkY5ap4bErBXc%2FHuq8qycfmoYHJhAUSiijqO3phHD7hbI52xHRFSoD%2BuioldH0tZUlKzKX%2BE1eL2RNgmUFSzKEH1bbOoxqgI3WC7F449QKFRHikTkzb4122%2FHk9XACKsJ5nmrFEuiAfjPAhKLnBVRBc%2B2Kn26Y0wTZevF3zqyoHezRMRFwbgh3qlruLp6BA4G2waUS0oR017UBP7WAVoFz5fYPeZ6KoP0ItaButWbHQC23Ps7iQwnn6puJKNu%2Bw7MmhvLlsj0wssIXsFZ7xbTsQfqA6I94MmhOmuSO%2BbUJaG3a1zoCX6Iyigdd44hu7GhpyEhhbcFXlYFzzlBVZY5iANcUrO06orOScSLlM5229VSwXL6wATBbv8cMIB45aQOXL2FVnDqQQLKb%2Bsn4qbwvxymEsZQLeVHwNbQSSJ03%2FhV5YD3eawq7vDZP9sBU%2BZWMLzUwvci6ZoOXaVI%2FzMU1gr1Tzj%2FpXdgAeE%2B92fh0dACO8Ad8W2sLGfULVK93qShn4kQk%2B5SCHFpyxfN1gF3L6o28Bo9KucrDR8ucmWRmoWLNkbmTwvG6S4%2BkARiz4SAKXhRRiz2sMqGXpe1Z%2FelL9OlSSTJeDMaHdxdaGaIrn5HbmyzCU4%2FTABjqkAcqAMGEdiY0AGYFqmye7pLFZLTGm%2BiJDLqYuum%2BJMdQ%2Fnumse4y3F2ln6howFbpf%2FY3NkbRgAbf4yaWGTVgSdjKXsbIdFh9R9RCXCPgrYt97DGviH0Gcu4mrRvVS8UhHoGryOOE5x3gPlSf7rer%2Bc3NS7PytkGAUeoUIz3wuUKqT8a3EQ2h7p7i8kQ5Uh%2BojvD%2FZa80lvmUguLePuShMdshXafmX&X-Amz-Signature=91d0fd66a7e1f2955ed50ffdebbfa1d8c057a0f5300c02d36b819fd7e9cd1e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YQLLHT5%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHOxs6KKhSFELd%2FavImmGq1RoYQMCQNC6t7ZmGv2zeGAIhAIr3FMOL1hOPpHVU5pPquAjQkx55s0O7t2x6VGBbsJ53KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztP0d4U5n%2FKHrLofUq3APGsQnJPOqw8jkY5ap4bErBXc%2FHuq8qycfmoYHJhAUSiijqO3phHD7hbI52xHRFSoD%2BuioldH0tZUlKzKX%2BE1eL2RNgmUFSzKEH1bbOoxqgI3WC7F449QKFRHikTkzb4122%2FHk9XACKsJ5nmrFEuiAfjPAhKLnBVRBc%2B2Kn26Y0wTZevF3zqyoHezRMRFwbgh3qlruLp6BA4G2waUS0oR017UBP7WAVoFz5fYPeZ6KoP0ItaButWbHQC23Ps7iQwnn6puJKNu%2Bw7MmhvLlsj0wssIXsFZ7xbTsQfqA6I94MmhOmuSO%2BbUJaG3a1zoCX6Iyigdd44hu7GhpyEhhbcFXlYFzzlBVZY5iANcUrO06orOScSLlM5229VSwXL6wATBbv8cMIB45aQOXL2FVnDqQQLKb%2Bsn4qbwvxymEsZQLeVHwNbQSSJ03%2FhV5YD3eawq7vDZP9sBU%2BZWMLzUwvci6ZoOXaVI%2FzMU1gr1Tzj%2FpXdgAeE%2B92fh0dACO8Ad8W2sLGfULVK93qShn4kQk%2B5SCHFpyxfN1gF3L6o28Bo9KucrDR8ucmWRmoWLNkbmTwvG6S4%2BkARiz4SAKXhRRiz2sMqGXpe1Z%2FelL9OlSSTJeDMaHdxdaGaIrn5HbmyzCU4%2FTABjqkAcqAMGEdiY0AGYFqmye7pLFZLTGm%2BiJDLqYuum%2BJMdQ%2Fnumse4y3F2ln6howFbpf%2FY3NkbRgAbf4yaWGTVgSdjKXsbIdFh9R9RCXCPgrYt97DGviH0Gcu4mrRvVS8UhHoGryOOE5x3gPlSf7rer%2Bc3NS7PytkGAUeoUIz3wuUKqT8a3EQ2h7p7i8kQ5Uh%2BojvD%2FZa80lvmUguLePuShMdshXafmX&X-Amz-Signature=7f3959e83378d4de940fed67deb781b6a116ae7748a6500241e292e2da9917d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
