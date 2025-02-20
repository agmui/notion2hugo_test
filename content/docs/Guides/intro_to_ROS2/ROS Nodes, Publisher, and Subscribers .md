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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46SLUKD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu7kjWWavZOboFao8npQfiOmp9tjE%2B5UZdT4Yil%2B1aRgIgEYyR956nSgLclYtuCvEGa9gfWeNvYpwB8yZ4KSOyQCgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ4SWJb1W2o6GcgvyrcAwnrCeheiX5bG%2FZbOd8VjgWurrj3u25ttmspcvXPtbgwkoQQ1%2BAFs7BRaLGwr2Hl8CaN%2FPgTbxDbq8rtDBGttTCud3HpiiSfMtAft5KT%2FUD6eSEATt59ea%2F0KA%2Bxl27geFYlX0CxDCGGvOY7RiY6KdDZOggGXPTGJnfgeromVgrrHMSV%2BBSTesXq1BVmFoTEbq1VVdm5lfNBAhwRrqNuIQNlBL%2BE082KCOxrpb7dRdb7Vx4VUKqByNLKNuSizcSSrl00XisQRYW2dVmD6E3ucK%2B9clZJsruNberT9%2B6OzivJzwCA%2Bz1VlGwZHjmjCyeErH44Slb44bsCQ907eJnpjmQYyKGT%2BwWR4Eie0sHtPLobGnNxLwOKoAksqMhUFuytT9fXg164sKzeVZTW8gcaaEvW29i9naeIxX%2BqWJ%2F8aATZpiWPLt5PedVNohEShM3%2BDigRSJhrUvt5s26HxG8Cfg1IXqOK4RAShFN9e%2FXE2LoY%2FkyFTApiY9wbp%2BrywjWhaWX44YMzt2U6ikZyyv%2FgwkRpIM8N45VprJq%2ByyLg4lpQR4JGzTmH50TPo%2F47iG2R4KArH1fligrZw%2Fj8oGgY4JbutaqqY%2FuJUDR2RdRmINPgIYGCtoZcDyIoyeGKMOOs3L0GOqUBk0W4ZkHoxxk0Z9UrBkmwgvGI9EQ2d7VC%2FOuF5wwXN2AN8wW1d1IlJmzXt1sM9EEfZFRKIL%2BVg3mv5JEmNm1Fq1M0K8q%2FgYTdbtn%2FYH%2BSnr9rKnu8iWg3%2F69UeaO300OwEPTP0V%2Bpq6nUuOjxGm0GJbgHU%2Fx2BnD%2FnR1xk%2BgsdqDHi2al5uAjoej%2FT9oaNuLyt1c9LfuQTNdA0yQjd62NwPqUEIJH&X-Amz-Signature=f46fa5b9840eb7788fb0f517bf87a6fbf9f9e364d43e62035c5afc35cebfb169&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46SLUKD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu7kjWWavZOboFao8npQfiOmp9tjE%2B5UZdT4Yil%2B1aRgIgEYyR956nSgLclYtuCvEGa9gfWeNvYpwB8yZ4KSOyQCgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ4SWJb1W2o6GcgvyrcAwnrCeheiX5bG%2FZbOd8VjgWurrj3u25ttmspcvXPtbgwkoQQ1%2BAFs7BRaLGwr2Hl8CaN%2FPgTbxDbq8rtDBGttTCud3HpiiSfMtAft5KT%2FUD6eSEATt59ea%2F0KA%2Bxl27geFYlX0CxDCGGvOY7RiY6KdDZOggGXPTGJnfgeromVgrrHMSV%2BBSTesXq1BVmFoTEbq1VVdm5lfNBAhwRrqNuIQNlBL%2BE082KCOxrpb7dRdb7Vx4VUKqByNLKNuSizcSSrl00XisQRYW2dVmD6E3ucK%2B9clZJsruNberT9%2B6OzivJzwCA%2Bz1VlGwZHjmjCyeErH44Slb44bsCQ907eJnpjmQYyKGT%2BwWR4Eie0sHtPLobGnNxLwOKoAksqMhUFuytT9fXg164sKzeVZTW8gcaaEvW29i9naeIxX%2BqWJ%2F8aATZpiWPLt5PedVNohEShM3%2BDigRSJhrUvt5s26HxG8Cfg1IXqOK4RAShFN9e%2FXE2LoY%2FkyFTApiY9wbp%2BrywjWhaWX44YMzt2U6ikZyyv%2FgwkRpIM8N45VprJq%2ByyLg4lpQR4JGzTmH50TPo%2F47iG2R4KArH1fligrZw%2Fj8oGgY4JbutaqqY%2FuJUDR2RdRmINPgIYGCtoZcDyIoyeGKMOOs3L0GOqUBk0W4ZkHoxxk0Z9UrBkmwgvGI9EQ2d7VC%2FOuF5wwXN2AN8wW1d1IlJmzXt1sM9EEfZFRKIL%2BVg3mv5JEmNm1Fq1M0K8q%2FgYTdbtn%2FYH%2BSnr9rKnu8iWg3%2F69UeaO300OwEPTP0V%2Bpq6nUuOjxGm0GJbgHU%2Fx2BnD%2FnR1xk%2BgsdqDHi2al5uAjoej%2FT9oaNuLyt1c9LfuQTNdA0yQjd62NwPqUEIJH&X-Amz-Signature=f0d6df5af3f796987065193b4da539251d2f0d3a4c616c3c233adc70abd483da&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46SLUKD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu7kjWWavZOboFao8npQfiOmp9tjE%2B5UZdT4Yil%2B1aRgIgEYyR956nSgLclYtuCvEGa9gfWeNvYpwB8yZ4KSOyQCgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ4SWJb1W2o6GcgvyrcAwnrCeheiX5bG%2FZbOd8VjgWurrj3u25ttmspcvXPtbgwkoQQ1%2BAFs7BRaLGwr2Hl8CaN%2FPgTbxDbq8rtDBGttTCud3HpiiSfMtAft5KT%2FUD6eSEATt59ea%2F0KA%2Bxl27geFYlX0CxDCGGvOY7RiY6KdDZOggGXPTGJnfgeromVgrrHMSV%2BBSTesXq1BVmFoTEbq1VVdm5lfNBAhwRrqNuIQNlBL%2BE082KCOxrpb7dRdb7Vx4VUKqByNLKNuSizcSSrl00XisQRYW2dVmD6E3ucK%2B9clZJsruNberT9%2B6OzivJzwCA%2Bz1VlGwZHjmjCyeErH44Slb44bsCQ907eJnpjmQYyKGT%2BwWR4Eie0sHtPLobGnNxLwOKoAksqMhUFuytT9fXg164sKzeVZTW8gcaaEvW29i9naeIxX%2BqWJ%2F8aATZpiWPLt5PedVNohEShM3%2BDigRSJhrUvt5s26HxG8Cfg1IXqOK4RAShFN9e%2FXE2LoY%2FkyFTApiY9wbp%2BrywjWhaWX44YMzt2U6ikZyyv%2FgwkRpIM8N45VprJq%2ByyLg4lpQR4JGzTmH50TPo%2F47iG2R4KArH1fligrZw%2Fj8oGgY4JbutaqqY%2FuJUDR2RdRmINPgIYGCtoZcDyIoyeGKMOOs3L0GOqUBk0W4ZkHoxxk0Z9UrBkmwgvGI9EQ2d7VC%2FOuF5wwXN2AN8wW1d1IlJmzXt1sM9EEfZFRKIL%2BVg3mv5JEmNm1Fq1M0K8q%2FgYTdbtn%2FYH%2BSnr9rKnu8iWg3%2F69UeaO300OwEPTP0V%2Bpq6nUuOjxGm0GJbgHU%2Fx2BnD%2FnR1xk%2BgsdqDHi2al5uAjoej%2FT9oaNuLyt1c9LfuQTNdA0yQjd62NwPqUEIJH&X-Amz-Signature=ba13889b04aafd3c4b45babff948ce8f97ae7e880a874d361846f0fd6b68fe13&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46SLUKD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu7kjWWavZOboFao8npQfiOmp9tjE%2B5UZdT4Yil%2B1aRgIgEYyR956nSgLclYtuCvEGa9gfWeNvYpwB8yZ4KSOyQCgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ4SWJb1W2o6GcgvyrcAwnrCeheiX5bG%2FZbOd8VjgWurrj3u25ttmspcvXPtbgwkoQQ1%2BAFs7BRaLGwr2Hl8CaN%2FPgTbxDbq8rtDBGttTCud3HpiiSfMtAft5KT%2FUD6eSEATt59ea%2F0KA%2Bxl27geFYlX0CxDCGGvOY7RiY6KdDZOggGXPTGJnfgeromVgrrHMSV%2BBSTesXq1BVmFoTEbq1VVdm5lfNBAhwRrqNuIQNlBL%2BE082KCOxrpb7dRdb7Vx4VUKqByNLKNuSizcSSrl00XisQRYW2dVmD6E3ucK%2B9clZJsruNberT9%2B6OzivJzwCA%2Bz1VlGwZHjmjCyeErH44Slb44bsCQ907eJnpjmQYyKGT%2BwWR4Eie0sHtPLobGnNxLwOKoAksqMhUFuytT9fXg164sKzeVZTW8gcaaEvW29i9naeIxX%2BqWJ%2F8aATZpiWPLt5PedVNohEShM3%2BDigRSJhrUvt5s26HxG8Cfg1IXqOK4RAShFN9e%2FXE2LoY%2FkyFTApiY9wbp%2BrywjWhaWX44YMzt2U6ikZyyv%2FgwkRpIM8N45VprJq%2ByyLg4lpQR4JGzTmH50TPo%2F47iG2R4KArH1fligrZw%2Fj8oGgY4JbutaqqY%2FuJUDR2RdRmINPgIYGCtoZcDyIoyeGKMOOs3L0GOqUBk0W4ZkHoxxk0Z9UrBkmwgvGI9EQ2d7VC%2FOuF5wwXN2AN8wW1d1IlJmzXt1sM9EEfZFRKIL%2BVg3mv5JEmNm1Fq1M0K8q%2FgYTdbtn%2FYH%2BSnr9rKnu8iWg3%2F69UeaO300OwEPTP0V%2Bpq6nUuOjxGm0GJbgHU%2Fx2BnD%2FnR1xk%2BgsdqDHi2al5uAjoej%2FT9oaNuLyt1c9LfuQTNdA0yQjd62NwPqUEIJH&X-Amz-Signature=bb996cd1ed9de7288ab828b023965f371c89fd3a3e25173d6c9cf79c034096b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46SLUKD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu7kjWWavZOboFao8npQfiOmp9tjE%2B5UZdT4Yil%2B1aRgIgEYyR956nSgLclYtuCvEGa9gfWeNvYpwB8yZ4KSOyQCgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ4SWJb1W2o6GcgvyrcAwnrCeheiX5bG%2FZbOd8VjgWurrj3u25ttmspcvXPtbgwkoQQ1%2BAFs7BRaLGwr2Hl8CaN%2FPgTbxDbq8rtDBGttTCud3HpiiSfMtAft5KT%2FUD6eSEATt59ea%2F0KA%2Bxl27geFYlX0CxDCGGvOY7RiY6KdDZOggGXPTGJnfgeromVgrrHMSV%2BBSTesXq1BVmFoTEbq1VVdm5lfNBAhwRrqNuIQNlBL%2BE082KCOxrpb7dRdb7Vx4VUKqByNLKNuSizcSSrl00XisQRYW2dVmD6E3ucK%2B9clZJsruNberT9%2B6OzivJzwCA%2Bz1VlGwZHjmjCyeErH44Slb44bsCQ907eJnpjmQYyKGT%2BwWR4Eie0sHtPLobGnNxLwOKoAksqMhUFuytT9fXg164sKzeVZTW8gcaaEvW29i9naeIxX%2BqWJ%2F8aATZpiWPLt5PedVNohEShM3%2BDigRSJhrUvt5s26HxG8Cfg1IXqOK4RAShFN9e%2FXE2LoY%2FkyFTApiY9wbp%2BrywjWhaWX44YMzt2U6ikZyyv%2FgwkRpIM8N45VprJq%2ByyLg4lpQR4JGzTmH50TPo%2F47iG2R4KArH1fligrZw%2Fj8oGgY4JbutaqqY%2FuJUDR2RdRmINPgIYGCtoZcDyIoyeGKMOOs3L0GOqUBk0W4ZkHoxxk0Z9UrBkmwgvGI9EQ2d7VC%2FOuF5wwXN2AN8wW1d1IlJmzXt1sM9EEfZFRKIL%2BVg3mv5JEmNm1Fq1M0K8q%2FgYTdbtn%2FYH%2BSnr9rKnu8iWg3%2F69UeaO300OwEPTP0V%2Bpq6nUuOjxGm0GJbgHU%2Fx2BnD%2FnR1xk%2BgsdqDHi2al5uAjoej%2FT9oaNuLyt1c9LfuQTNdA0yQjd62NwPqUEIJH&X-Amz-Signature=f7411f8e640ad6f888212b1a08fe0cf5e247ad361d2e8b059479b015fdfc4335&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46SLUKD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu7kjWWavZOboFao8npQfiOmp9tjE%2B5UZdT4Yil%2B1aRgIgEYyR956nSgLclYtuCvEGa9gfWeNvYpwB8yZ4KSOyQCgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ4SWJb1W2o6GcgvyrcAwnrCeheiX5bG%2FZbOd8VjgWurrj3u25ttmspcvXPtbgwkoQQ1%2BAFs7BRaLGwr2Hl8CaN%2FPgTbxDbq8rtDBGttTCud3HpiiSfMtAft5KT%2FUD6eSEATt59ea%2F0KA%2Bxl27geFYlX0CxDCGGvOY7RiY6KdDZOggGXPTGJnfgeromVgrrHMSV%2BBSTesXq1BVmFoTEbq1VVdm5lfNBAhwRrqNuIQNlBL%2BE082KCOxrpb7dRdb7Vx4VUKqByNLKNuSizcSSrl00XisQRYW2dVmD6E3ucK%2B9clZJsruNberT9%2B6OzivJzwCA%2Bz1VlGwZHjmjCyeErH44Slb44bsCQ907eJnpjmQYyKGT%2BwWR4Eie0sHtPLobGnNxLwOKoAksqMhUFuytT9fXg164sKzeVZTW8gcaaEvW29i9naeIxX%2BqWJ%2F8aATZpiWPLt5PedVNohEShM3%2BDigRSJhrUvt5s26HxG8Cfg1IXqOK4RAShFN9e%2FXE2LoY%2FkyFTApiY9wbp%2BrywjWhaWX44YMzt2U6ikZyyv%2FgwkRpIM8N45VprJq%2ByyLg4lpQR4JGzTmH50TPo%2F47iG2R4KArH1fligrZw%2Fj8oGgY4JbutaqqY%2FuJUDR2RdRmINPgIYGCtoZcDyIoyeGKMOOs3L0GOqUBk0W4ZkHoxxk0Z9UrBkmwgvGI9EQ2d7VC%2FOuF5wwXN2AN8wW1d1IlJmzXt1sM9EEfZFRKIL%2BVg3mv5JEmNm1Fq1M0K8q%2FgYTdbtn%2FYH%2BSnr9rKnu8iWg3%2F69UeaO300OwEPTP0V%2Bpq6nUuOjxGm0GJbgHU%2Fx2BnD%2FnR1xk%2BgsdqDHi2al5uAjoej%2FT9oaNuLyt1c9LfuQTNdA0yQjd62NwPqUEIJH&X-Amz-Signature=ad850e72c7c74c4bed9e370071e2d0f9ee4cf23dfac0c2204a61e65c88d2b929&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46SLUKD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu7kjWWavZOboFao8npQfiOmp9tjE%2B5UZdT4Yil%2B1aRgIgEYyR956nSgLclYtuCvEGa9gfWeNvYpwB8yZ4KSOyQCgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ4SWJb1W2o6GcgvyrcAwnrCeheiX5bG%2FZbOd8VjgWurrj3u25ttmspcvXPtbgwkoQQ1%2BAFs7BRaLGwr2Hl8CaN%2FPgTbxDbq8rtDBGttTCud3HpiiSfMtAft5KT%2FUD6eSEATt59ea%2F0KA%2Bxl27geFYlX0CxDCGGvOY7RiY6KdDZOggGXPTGJnfgeromVgrrHMSV%2BBSTesXq1BVmFoTEbq1VVdm5lfNBAhwRrqNuIQNlBL%2BE082KCOxrpb7dRdb7Vx4VUKqByNLKNuSizcSSrl00XisQRYW2dVmD6E3ucK%2B9clZJsruNberT9%2B6OzivJzwCA%2Bz1VlGwZHjmjCyeErH44Slb44bsCQ907eJnpjmQYyKGT%2BwWR4Eie0sHtPLobGnNxLwOKoAksqMhUFuytT9fXg164sKzeVZTW8gcaaEvW29i9naeIxX%2BqWJ%2F8aATZpiWPLt5PedVNohEShM3%2BDigRSJhrUvt5s26HxG8Cfg1IXqOK4RAShFN9e%2FXE2LoY%2FkyFTApiY9wbp%2BrywjWhaWX44YMzt2U6ikZyyv%2FgwkRpIM8N45VprJq%2ByyLg4lpQR4JGzTmH50TPo%2F47iG2R4KArH1fligrZw%2Fj8oGgY4JbutaqqY%2FuJUDR2RdRmINPgIYGCtoZcDyIoyeGKMOOs3L0GOqUBk0W4ZkHoxxk0Z9UrBkmwgvGI9EQ2d7VC%2FOuF5wwXN2AN8wW1d1IlJmzXt1sM9EEfZFRKIL%2BVg3mv5JEmNm1Fq1M0K8q%2FgYTdbtn%2FYH%2BSnr9rKnu8iWg3%2F69UeaO300OwEPTP0V%2Bpq6nUuOjxGm0GJbgHU%2Fx2BnD%2FnR1xk%2BgsdqDHi2al5uAjoej%2FT9oaNuLyt1c9LfuQTNdA0yQjd62NwPqUEIJH&X-Amz-Signature=164fc997ced839f1c7a63800933d529e751be164a6ad3aae2e7445f73dd91e18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46SLUKD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T121413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu7kjWWavZOboFao8npQfiOmp9tjE%2B5UZdT4Yil%2B1aRgIgEYyR956nSgLclYtuCvEGa9gfWeNvYpwB8yZ4KSOyQCgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ4SWJb1W2o6GcgvyrcAwnrCeheiX5bG%2FZbOd8VjgWurrj3u25ttmspcvXPtbgwkoQQ1%2BAFs7BRaLGwr2Hl8CaN%2FPgTbxDbq8rtDBGttTCud3HpiiSfMtAft5KT%2FUD6eSEATt59ea%2F0KA%2Bxl27geFYlX0CxDCGGvOY7RiY6KdDZOggGXPTGJnfgeromVgrrHMSV%2BBSTesXq1BVmFoTEbq1VVdm5lfNBAhwRrqNuIQNlBL%2BE082KCOxrpb7dRdb7Vx4VUKqByNLKNuSizcSSrl00XisQRYW2dVmD6E3ucK%2B9clZJsruNberT9%2B6OzivJzwCA%2Bz1VlGwZHjmjCyeErH44Slb44bsCQ907eJnpjmQYyKGT%2BwWR4Eie0sHtPLobGnNxLwOKoAksqMhUFuytT9fXg164sKzeVZTW8gcaaEvW29i9naeIxX%2BqWJ%2F8aATZpiWPLt5PedVNohEShM3%2BDigRSJhrUvt5s26HxG8Cfg1IXqOK4RAShFN9e%2FXE2LoY%2FkyFTApiY9wbp%2BrywjWhaWX44YMzt2U6ikZyyv%2FgwkRpIM8N45VprJq%2ByyLg4lpQR4JGzTmH50TPo%2F47iG2R4KArH1fligrZw%2Fj8oGgY4JbutaqqY%2FuJUDR2RdRmINPgIYGCtoZcDyIoyeGKMOOs3L0GOqUBk0W4ZkHoxxk0Z9UrBkmwgvGI9EQ2d7VC%2FOuF5wwXN2AN8wW1d1IlJmzXt1sM9EEfZFRKIL%2BVg3mv5JEmNm1Fq1M0K8q%2FgYTdbtn%2FYH%2BSnr9rKnu8iWg3%2F69UeaO300OwEPTP0V%2Bpq6nUuOjxGm0GJbgHU%2Fx2BnD%2FnR1xk%2BgsdqDHi2al5uAjoej%2FT9oaNuLyt1c9LfuQTNdA0yQjd62NwPqUEIJH&X-Amz-Signature=0ab506067055b392c3f8a1137e874599625126782f2b1550c013291f9543a3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
