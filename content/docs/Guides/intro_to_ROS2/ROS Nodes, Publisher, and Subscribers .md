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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMW3KC7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtmRzFiZJYharAt1EpfYNd9pUY98IyFD5ir0m1J1tUswIgNjIlrgore7CpMn99yc%2FhTvKnIfNJSkz0hMYy0eHpzeAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBYEJpRdVbFVSPesKSrcA6rrThNwFRRSf2FLzXGHIyeW4VSqCu4GjRTAhIVwZ2qN%2BWfU5tRH5ZsDnRjwyBvJcl5SIDFnIwKcltZW1V3N6YhY9yheHW5zzHLX6bMOqEU0jdBhIDrHSgRqTjPTNYoT1BcyzCTmcD2Y3bGGkH8uErz0B5fT%2BzFSneSA%2F0A7D1OI1o0Rwd28uW0rlkWBXYfYeI03MK96hSKUX1K0w8mEtLQv%2FOSgE5urJrvSGVKn919zibhXKSw%2FnPFPrrXqnOY%2FzhreZhR6PEjWFD7OscIlKB1EFYhIezzv%2BpSsxhFRK%2FaZpgqiU9ceEbdcS2wX%2BP8te%2BjdAx6IWD6vnhNATJuA6UPEPJ%2B4rKnbxM0U0PEvEdNgZwJjJnBf1SFLcSykxttcFsbvNsGP3zhjfX4gleQhviFNvcN%2Ba6RPqenUC%2Fav5Xj%2BJyQSox6Nqg5bHBK9Nm7WmJy9eCchUpDp5%2FcP1I%2F1z3o2Yle7njmvIh7B6u7okp4euAN4YJwVuarBF1AWAEEk2hsfnTEICfGUNSA%2FneiLtkpOIWqKjfkFbjA9RJAuvzDoA0yd%2FwImONSPavFHa0iVYwpvwp2KUaq4LA6AtQVyoUqGD0xFCW7Z8BLptHCxlKxcE1%2FpCwuoXnBz55j1MLDx%2BL8GOqUBsQnY47oNIgZe9h87e8YtkamDbky1Uk2hqhp6yL2trnpanIc5xplf8gpXEHDv1LngJQ4Y0Uvf19XHOVBqRMsJ8acCTg8gQGllsQUDaNqDb2HS7aXXuyzBfjHNIstPn5DgpcwqV8hV4Lb49KFsO1f%2B%2B9K3KtDgU76ktHzOtc%2F4aVlJUf1Ynfziyv%2BDkFszPUer82CtSuh5LarTEm9c9nyxKqAKoNl6&X-Amz-Signature=24b165f0021b387e8ebb7919e565acbfd74a113a64a67ae964edb568c44e9ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMW3KC7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtmRzFiZJYharAt1EpfYNd9pUY98IyFD5ir0m1J1tUswIgNjIlrgore7CpMn99yc%2FhTvKnIfNJSkz0hMYy0eHpzeAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBYEJpRdVbFVSPesKSrcA6rrThNwFRRSf2FLzXGHIyeW4VSqCu4GjRTAhIVwZ2qN%2BWfU5tRH5ZsDnRjwyBvJcl5SIDFnIwKcltZW1V3N6YhY9yheHW5zzHLX6bMOqEU0jdBhIDrHSgRqTjPTNYoT1BcyzCTmcD2Y3bGGkH8uErz0B5fT%2BzFSneSA%2F0A7D1OI1o0Rwd28uW0rlkWBXYfYeI03MK96hSKUX1K0w8mEtLQv%2FOSgE5urJrvSGVKn919zibhXKSw%2FnPFPrrXqnOY%2FzhreZhR6PEjWFD7OscIlKB1EFYhIezzv%2BpSsxhFRK%2FaZpgqiU9ceEbdcS2wX%2BP8te%2BjdAx6IWD6vnhNATJuA6UPEPJ%2B4rKnbxM0U0PEvEdNgZwJjJnBf1SFLcSykxttcFsbvNsGP3zhjfX4gleQhviFNvcN%2Ba6RPqenUC%2Fav5Xj%2BJyQSox6Nqg5bHBK9Nm7WmJy9eCchUpDp5%2FcP1I%2F1z3o2Yle7njmvIh7B6u7okp4euAN4YJwVuarBF1AWAEEk2hsfnTEICfGUNSA%2FneiLtkpOIWqKjfkFbjA9RJAuvzDoA0yd%2FwImONSPavFHa0iVYwpvwp2KUaq4LA6AtQVyoUqGD0xFCW7Z8BLptHCxlKxcE1%2FpCwuoXnBz55j1MLDx%2BL8GOqUBsQnY47oNIgZe9h87e8YtkamDbky1Uk2hqhp6yL2trnpanIc5xplf8gpXEHDv1LngJQ4Y0Uvf19XHOVBqRMsJ8acCTg8gQGllsQUDaNqDb2HS7aXXuyzBfjHNIstPn5DgpcwqV8hV4Lb49KFsO1f%2B%2B9K3KtDgU76ktHzOtc%2F4aVlJUf1Ynfziyv%2BDkFszPUer82CtSuh5LarTEm9c9nyxKqAKoNl6&X-Amz-Signature=8e8d35d8a00615b62c1522fd4574495befc6f64120eb120dc87a40aba193d557&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMW3KC7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtmRzFiZJYharAt1EpfYNd9pUY98IyFD5ir0m1J1tUswIgNjIlrgore7CpMn99yc%2FhTvKnIfNJSkz0hMYy0eHpzeAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBYEJpRdVbFVSPesKSrcA6rrThNwFRRSf2FLzXGHIyeW4VSqCu4GjRTAhIVwZ2qN%2BWfU5tRH5ZsDnRjwyBvJcl5SIDFnIwKcltZW1V3N6YhY9yheHW5zzHLX6bMOqEU0jdBhIDrHSgRqTjPTNYoT1BcyzCTmcD2Y3bGGkH8uErz0B5fT%2BzFSneSA%2F0A7D1OI1o0Rwd28uW0rlkWBXYfYeI03MK96hSKUX1K0w8mEtLQv%2FOSgE5urJrvSGVKn919zibhXKSw%2FnPFPrrXqnOY%2FzhreZhR6PEjWFD7OscIlKB1EFYhIezzv%2BpSsxhFRK%2FaZpgqiU9ceEbdcS2wX%2BP8te%2BjdAx6IWD6vnhNATJuA6UPEPJ%2B4rKnbxM0U0PEvEdNgZwJjJnBf1SFLcSykxttcFsbvNsGP3zhjfX4gleQhviFNvcN%2Ba6RPqenUC%2Fav5Xj%2BJyQSox6Nqg5bHBK9Nm7WmJy9eCchUpDp5%2FcP1I%2F1z3o2Yle7njmvIh7B6u7okp4euAN4YJwVuarBF1AWAEEk2hsfnTEICfGUNSA%2FneiLtkpOIWqKjfkFbjA9RJAuvzDoA0yd%2FwImONSPavFHa0iVYwpvwp2KUaq4LA6AtQVyoUqGD0xFCW7Z8BLptHCxlKxcE1%2FpCwuoXnBz55j1MLDx%2BL8GOqUBsQnY47oNIgZe9h87e8YtkamDbky1Uk2hqhp6yL2trnpanIc5xplf8gpXEHDv1LngJQ4Y0Uvf19XHOVBqRMsJ8acCTg8gQGllsQUDaNqDb2HS7aXXuyzBfjHNIstPn5DgpcwqV8hV4Lb49KFsO1f%2B%2B9K3KtDgU76ktHzOtc%2F4aVlJUf1Ynfziyv%2BDkFszPUer82CtSuh5LarTEm9c9nyxKqAKoNl6&X-Amz-Signature=6a36d96731c5d2fa0f6b69654639dbf0c3ec82f9691cf5a0c905ee28b1b89b82&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMW3KC7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtmRzFiZJYharAt1EpfYNd9pUY98IyFD5ir0m1J1tUswIgNjIlrgore7CpMn99yc%2FhTvKnIfNJSkz0hMYy0eHpzeAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBYEJpRdVbFVSPesKSrcA6rrThNwFRRSf2FLzXGHIyeW4VSqCu4GjRTAhIVwZ2qN%2BWfU5tRH5ZsDnRjwyBvJcl5SIDFnIwKcltZW1V3N6YhY9yheHW5zzHLX6bMOqEU0jdBhIDrHSgRqTjPTNYoT1BcyzCTmcD2Y3bGGkH8uErz0B5fT%2BzFSneSA%2F0A7D1OI1o0Rwd28uW0rlkWBXYfYeI03MK96hSKUX1K0w8mEtLQv%2FOSgE5urJrvSGVKn919zibhXKSw%2FnPFPrrXqnOY%2FzhreZhR6PEjWFD7OscIlKB1EFYhIezzv%2BpSsxhFRK%2FaZpgqiU9ceEbdcS2wX%2BP8te%2BjdAx6IWD6vnhNATJuA6UPEPJ%2B4rKnbxM0U0PEvEdNgZwJjJnBf1SFLcSykxttcFsbvNsGP3zhjfX4gleQhviFNvcN%2Ba6RPqenUC%2Fav5Xj%2BJyQSox6Nqg5bHBK9Nm7WmJy9eCchUpDp5%2FcP1I%2F1z3o2Yle7njmvIh7B6u7okp4euAN4YJwVuarBF1AWAEEk2hsfnTEICfGUNSA%2FneiLtkpOIWqKjfkFbjA9RJAuvzDoA0yd%2FwImONSPavFHa0iVYwpvwp2KUaq4LA6AtQVyoUqGD0xFCW7Z8BLptHCxlKxcE1%2FpCwuoXnBz55j1MLDx%2BL8GOqUBsQnY47oNIgZe9h87e8YtkamDbky1Uk2hqhp6yL2trnpanIc5xplf8gpXEHDv1LngJQ4Y0Uvf19XHOVBqRMsJ8acCTg8gQGllsQUDaNqDb2HS7aXXuyzBfjHNIstPn5DgpcwqV8hV4Lb49KFsO1f%2B%2B9K3KtDgU76ktHzOtc%2F4aVlJUf1Ynfziyv%2BDkFszPUer82CtSuh5LarTEm9c9nyxKqAKoNl6&X-Amz-Signature=5b9470c0eff7bd2217921b91f8ea69a0976b8cad2b4e90c2d238beafe03147a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMW3KC7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtmRzFiZJYharAt1EpfYNd9pUY98IyFD5ir0m1J1tUswIgNjIlrgore7CpMn99yc%2FhTvKnIfNJSkz0hMYy0eHpzeAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBYEJpRdVbFVSPesKSrcA6rrThNwFRRSf2FLzXGHIyeW4VSqCu4GjRTAhIVwZ2qN%2BWfU5tRH5ZsDnRjwyBvJcl5SIDFnIwKcltZW1V3N6YhY9yheHW5zzHLX6bMOqEU0jdBhIDrHSgRqTjPTNYoT1BcyzCTmcD2Y3bGGkH8uErz0B5fT%2BzFSneSA%2F0A7D1OI1o0Rwd28uW0rlkWBXYfYeI03MK96hSKUX1K0w8mEtLQv%2FOSgE5urJrvSGVKn919zibhXKSw%2FnPFPrrXqnOY%2FzhreZhR6PEjWFD7OscIlKB1EFYhIezzv%2BpSsxhFRK%2FaZpgqiU9ceEbdcS2wX%2BP8te%2BjdAx6IWD6vnhNATJuA6UPEPJ%2B4rKnbxM0U0PEvEdNgZwJjJnBf1SFLcSykxttcFsbvNsGP3zhjfX4gleQhviFNvcN%2Ba6RPqenUC%2Fav5Xj%2BJyQSox6Nqg5bHBK9Nm7WmJy9eCchUpDp5%2FcP1I%2F1z3o2Yle7njmvIh7B6u7okp4euAN4YJwVuarBF1AWAEEk2hsfnTEICfGUNSA%2FneiLtkpOIWqKjfkFbjA9RJAuvzDoA0yd%2FwImONSPavFHa0iVYwpvwp2KUaq4LA6AtQVyoUqGD0xFCW7Z8BLptHCxlKxcE1%2FpCwuoXnBz55j1MLDx%2BL8GOqUBsQnY47oNIgZe9h87e8YtkamDbky1Uk2hqhp6yL2trnpanIc5xplf8gpXEHDv1LngJQ4Y0Uvf19XHOVBqRMsJ8acCTg8gQGllsQUDaNqDb2HS7aXXuyzBfjHNIstPn5DgpcwqV8hV4Lb49KFsO1f%2B%2B9K3KtDgU76ktHzOtc%2F4aVlJUf1Ynfziyv%2BDkFszPUer82CtSuh5LarTEm9c9nyxKqAKoNl6&X-Amz-Signature=b195f843344a3587f0a55708dce6cfc3bb813942dc1d12babb05d6639b7d294d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMW3KC7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtmRzFiZJYharAt1EpfYNd9pUY98IyFD5ir0m1J1tUswIgNjIlrgore7CpMn99yc%2FhTvKnIfNJSkz0hMYy0eHpzeAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBYEJpRdVbFVSPesKSrcA6rrThNwFRRSf2FLzXGHIyeW4VSqCu4GjRTAhIVwZ2qN%2BWfU5tRH5ZsDnRjwyBvJcl5SIDFnIwKcltZW1V3N6YhY9yheHW5zzHLX6bMOqEU0jdBhIDrHSgRqTjPTNYoT1BcyzCTmcD2Y3bGGkH8uErz0B5fT%2BzFSneSA%2F0A7D1OI1o0Rwd28uW0rlkWBXYfYeI03MK96hSKUX1K0w8mEtLQv%2FOSgE5urJrvSGVKn919zibhXKSw%2FnPFPrrXqnOY%2FzhreZhR6PEjWFD7OscIlKB1EFYhIezzv%2BpSsxhFRK%2FaZpgqiU9ceEbdcS2wX%2BP8te%2BjdAx6IWD6vnhNATJuA6UPEPJ%2B4rKnbxM0U0PEvEdNgZwJjJnBf1SFLcSykxttcFsbvNsGP3zhjfX4gleQhviFNvcN%2Ba6RPqenUC%2Fav5Xj%2BJyQSox6Nqg5bHBK9Nm7WmJy9eCchUpDp5%2FcP1I%2F1z3o2Yle7njmvIh7B6u7okp4euAN4YJwVuarBF1AWAEEk2hsfnTEICfGUNSA%2FneiLtkpOIWqKjfkFbjA9RJAuvzDoA0yd%2FwImONSPavFHa0iVYwpvwp2KUaq4LA6AtQVyoUqGD0xFCW7Z8BLptHCxlKxcE1%2FpCwuoXnBz55j1MLDx%2BL8GOqUBsQnY47oNIgZe9h87e8YtkamDbky1Uk2hqhp6yL2trnpanIc5xplf8gpXEHDv1LngJQ4Y0Uvf19XHOVBqRMsJ8acCTg8gQGllsQUDaNqDb2HS7aXXuyzBfjHNIstPn5DgpcwqV8hV4Lb49KFsO1f%2B%2B9K3KtDgU76ktHzOtc%2F4aVlJUf1Ynfziyv%2BDkFszPUer82CtSuh5LarTEm9c9nyxKqAKoNl6&X-Amz-Signature=a4da273da7fd8311f632ecd0c925933d45e642d3f3cec1b04341b741fbc20471&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMW3KC7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtmRzFiZJYharAt1EpfYNd9pUY98IyFD5ir0m1J1tUswIgNjIlrgore7CpMn99yc%2FhTvKnIfNJSkz0hMYy0eHpzeAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBYEJpRdVbFVSPesKSrcA6rrThNwFRRSf2FLzXGHIyeW4VSqCu4GjRTAhIVwZ2qN%2BWfU5tRH5ZsDnRjwyBvJcl5SIDFnIwKcltZW1V3N6YhY9yheHW5zzHLX6bMOqEU0jdBhIDrHSgRqTjPTNYoT1BcyzCTmcD2Y3bGGkH8uErz0B5fT%2BzFSneSA%2F0A7D1OI1o0Rwd28uW0rlkWBXYfYeI03MK96hSKUX1K0w8mEtLQv%2FOSgE5urJrvSGVKn919zibhXKSw%2FnPFPrrXqnOY%2FzhreZhR6PEjWFD7OscIlKB1EFYhIezzv%2BpSsxhFRK%2FaZpgqiU9ceEbdcS2wX%2BP8te%2BjdAx6IWD6vnhNATJuA6UPEPJ%2B4rKnbxM0U0PEvEdNgZwJjJnBf1SFLcSykxttcFsbvNsGP3zhjfX4gleQhviFNvcN%2Ba6RPqenUC%2Fav5Xj%2BJyQSox6Nqg5bHBK9Nm7WmJy9eCchUpDp5%2FcP1I%2F1z3o2Yle7njmvIh7B6u7okp4euAN4YJwVuarBF1AWAEEk2hsfnTEICfGUNSA%2FneiLtkpOIWqKjfkFbjA9RJAuvzDoA0yd%2FwImONSPavFHa0iVYwpvwp2KUaq4LA6AtQVyoUqGD0xFCW7Z8BLptHCxlKxcE1%2FpCwuoXnBz55j1MLDx%2BL8GOqUBsQnY47oNIgZe9h87e8YtkamDbky1Uk2hqhp6yL2trnpanIc5xplf8gpXEHDv1LngJQ4Y0Uvf19XHOVBqRMsJ8acCTg8gQGllsQUDaNqDb2HS7aXXuyzBfjHNIstPn5DgpcwqV8hV4Lb49KFsO1f%2B%2B9K3KtDgU76ktHzOtc%2F4aVlJUf1Ynfziyv%2BDkFszPUer82CtSuh5LarTEm9c9nyxKqAKoNl6&X-Amz-Signature=e177d62b344c5c1451401370356e7367dbcd84947de0d71eea360674df978f04&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOMW3KC7%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtmRzFiZJYharAt1EpfYNd9pUY98IyFD5ir0m1J1tUswIgNjIlrgore7CpMn99yc%2FhTvKnIfNJSkz0hMYy0eHpzeAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBYEJpRdVbFVSPesKSrcA6rrThNwFRRSf2FLzXGHIyeW4VSqCu4GjRTAhIVwZ2qN%2BWfU5tRH5ZsDnRjwyBvJcl5SIDFnIwKcltZW1V3N6YhY9yheHW5zzHLX6bMOqEU0jdBhIDrHSgRqTjPTNYoT1BcyzCTmcD2Y3bGGkH8uErz0B5fT%2BzFSneSA%2F0A7D1OI1o0Rwd28uW0rlkWBXYfYeI03MK96hSKUX1K0w8mEtLQv%2FOSgE5urJrvSGVKn919zibhXKSw%2FnPFPrrXqnOY%2FzhreZhR6PEjWFD7OscIlKB1EFYhIezzv%2BpSsxhFRK%2FaZpgqiU9ceEbdcS2wX%2BP8te%2BjdAx6IWD6vnhNATJuA6UPEPJ%2B4rKnbxM0U0PEvEdNgZwJjJnBf1SFLcSykxttcFsbvNsGP3zhjfX4gleQhviFNvcN%2Ba6RPqenUC%2Fav5Xj%2BJyQSox6Nqg5bHBK9Nm7WmJy9eCchUpDp5%2FcP1I%2F1z3o2Yle7njmvIh7B6u7okp4euAN4YJwVuarBF1AWAEEk2hsfnTEICfGUNSA%2FneiLtkpOIWqKjfkFbjA9RJAuvzDoA0yd%2FwImONSPavFHa0iVYwpvwp2KUaq4LA6AtQVyoUqGD0xFCW7Z8BLptHCxlKxcE1%2FpCwuoXnBz55j1MLDx%2BL8GOqUBsQnY47oNIgZe9h87e8YtkamDbky1Uk2hqhp6yL2trnpanIc5xplf8gpXEHDv1LngJQ4Y0Uvf19XHOVBqRMsJ8acCTg8gQGllsQUDaNqDb2HS7aXXuyzBfjHNIstPn5DgpcwqV8hV4Lb49KFsO1f%2B%2B9K3KtDgU76ktHzOtc%2F4aVlJUf1Ynfziyv%2BDkFszPUer82CtSuh5LarTEm9c9nyxKqAKoNl6&X-Amz-Signature=72a2a9e14350c2015f5c02e0128236f36f2b84c0719a138b816f62405a814cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
