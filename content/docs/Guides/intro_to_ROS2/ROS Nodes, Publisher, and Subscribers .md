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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHNSC6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCln6BJC9GH%2FlBGKxd%2Fy5gu8d7V6ZTK89HIDLyaa00%2FPwIgTW9NUiqZLDrhhljKryyzfEJJRHMQdo919cyxDnBfU5sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgR0eu052plnYv6ZSrcAygiyrFZdnVg5H0BLeis9F3tSTL5FYscnfHdKZGlULnd9Dhkg8Vlnvch0dLjHxuWkc7zOpp4yC411dAjCgoSOhM%2BQe9ozCPtLwrk6GbM9hVoOk%2BLMOJnT7lt%2FlO2f4M5V92uTqniRN48Gfp7x04m8jnNz%2FR7wa4rvy%2BqV1pnI4blrNg3N7YYgqHAWxhCL47jwH2aCmzk%2BkCz7S3s5WiSH5vHfH3kDKSVnjrMcWHLUvlCJ8Wr4alhkJQ%2FNJ9c2MKQUKlj1rkZeChPuIg6uQ06WcNpoW3zaR8VTeORSe81%2F1VoZYfs0qK55YdH5LmH8agrgPRrGy0TnnmHzKQpCZ7SIUH%2BCgEK6ZH8wKvXPO3FYa%2BQUPX68sVpMSKlgM7c%2FwkKdjG3QGYOLCUJpL8BbimsRWD7UcHJcHq6bd5f%2BfUsNgDKVyl5HK8Ums%2BJXsnfBQkMDmarUrm1uug0Vot%2BLdqFwSuoQBeMD%2FaaOjMREJEJx70EHzbyPR4YbjmfhEULEiNAKdDz%2BUQk6w8tOHGfziMAxkmaq1oatXyIAF2YNKto03XN8bgj3%2FUixEVZ2OlfHI42qOo22bniccJjz5ZnB0u6Pk%2BHVKKI65m7tukHAkbCk9tRaxgJe1z6bWOGTL0MML6nv8EGOqUBL2I3DAmMcQaB%2BYgt2GC5PnIX70%2FT970NLNR%2BpUCzYdi0o%2BD%2BHI07VsQyQJMI6e1ClgaMZebSsDv3GsBU3kzCUWS0XUuNRhFiPDVp6Be%2Bjp71KWtDn4UAYsZn5k0SmUNKnnvDRp9f8764sv0ysoWswCdy4WmyKWVFT3zYvQwCTisESoAq4qciJ4X3Mtc2dfCupfs8rKgLAioo%2Fhykfhxsu7NlLe%2BC&X-Amz-Signature=82ec47b87bba3918537986d16cf1bc29ed86272a29906872246d2bb4ca8e41fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHNSC6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCln6BJC9GH%2FlBGKxd%2Fy5gu8d7V6ZTK89HIDLyaa00%2FPwIgTW9NUiqZLDrhhljKryyzfEJJRHMQdo919cyxDnBfU5sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgR0eu052plnYv6ZSrcAygiyrFZdnVg5H0BLeis9F3tSTL5FYscnfHdKZGlULnd9Dhkg8Vlnvch0dLjHxuWkc7zOpp4yC411dAjCgoSOhM%2BQe9ozCPtLwrk6GbM9hVoOk%2BLMOJnT7lt%2FlO2f4M5V92uTqniRN48Gfp7x04m8jnNz%2FR7wa4rvy%2BqV1pnI4blrNg3N7YYgqHAWxhCL47jwH2aCmzk%2BkCz7S3s5WiSH5vHfH3kDKSVnjrMcWHLUvlCJ8Wr4alhkJQ%2FNJ9c2MKQUKlj1rkZeChPuIg6uQ06WcNpoW3zaR8VTeORSe81%2F1VoZYfs0qK55YdH5LmH8agrgPRrGy0TnnmHzKQpCZ7SIUH%2BCgEK6ZH8wKvXPO3FYa%2BQUPX68sVpMSKlgM7c%2FwkKdjG3QGYOLCUJpL8BbimsRWD7UcHJcHq6bd5f%2BfUsNgDKVyl5HK8Ums%2BJXsnfBQkMDmarUrm1uug0Vot%2BLdqFwSuoQBeMD%2FaaOjMREJEJx70EHzbyPR4YbjmfhEULEiNAKdDz%2BUQk6w8tOHGfziMAxkmaq1oatXyIAF2YNKto03XN8bgj3%2FUixEVZ2OlfHI42qOo22bniccJjz5ZnB0u6Pk%2BHVKKI65m7tukHAkbCk9tRaxgJe1z6bWOGTL0MML6nv8EGOqUBL2I3DAmMcQaB%2BYgt2GC5PnIX70%2FT970NLNR%2BpUCzYdi0o%2BD%2BHI07VsQyQJMI6e1ClgaMZebSsDv3GsBU3kzCUWS0XUuNRhFiPDVp6Be%2Bjp71KWtDn4UAYsZn5k0SmUNKnnvDRp9f8764sv0ysoWswCdy4WmyKWVFT3zYvQwCTisESoAq4qciJ4X3Mtc2dfCupfs8rKgLAioo%2Fhykfhxsu7NlLe%2BC&X-Amz-Signature=47361ed22b995ddc92df1f3006aef659455f4b966131e9fbd4f2275741f4206e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHNSC6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCln6BJC9GH%2FlBGKxd%2Fy5gu8d7V6ZTK89HIDLyaa00%2FPwIgTW9NUiqZLDrhhljKryyzfEJJRHMQdo919cyxDnBfU5sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgR0eu052plnYv6ZSrcAygiyrFZdnVg5H0BLeis9F3tSTL5FYscnfHdKZGlULnd9Dhkg8Vlnvch0dLjHxuWkc7zOpp4yC411dAjCgoSOhM%2BQe9ozCPtLwrk6GbM9hVoOk%2BLMOJnT7lt%2FlO2f4M5V92uTqniRN48Gfp7x04m8jnNz%2FR7wa4rvy%2BqV1pnI4blrNg3N7YYgqHAWxhCL47jwH2aCmzk%2BkCz7S3s5WiSH5vHfH3kDKSVnjrMcWHLUvlCJ8Wr4alhkJQ%2FNJ9c2MKQUKlj1rkZeChPuIg6uQ06WcNpoW3zaR8VTeORSe81%2F1VoZYfs0qK55YdH5LmH8agrgPRrGy0TnnmHzKQpCZ7SIUH%2BCgEK6ZH8wKvXPO3FYa%2BQUPX68sVpMSKlgM7c%2FwkKdjG3QGYOLCUJpL8BbimsRWD7UcHJcHq6bd5f%2BfUsNgDKVyl5HK8Ums%2BJXsnfBQkMDmarUrm1uug0Vot%2BLdqFwSuoQBeMD%2FaaOjMREJEJx70EHzbyPR4YbjmfhEULEiNAKdDz%2BUQk6w8tOHGfziMAxkmaq1oatXyIAF2YNKto03XN8bgj3%2FUixEVZ2OlfHI42qOo22bniccJjz5ZnB0u6Pk%2BHVKKI65m7tukHAkbCk9tRaxgJe1z6bWOGTL0MML6nv8EGOqUBL2I3DAmMcQaB%2BYgt2GC5PnIX70%2FT970NLNR%2BpUCzYdi0o%2BD%2BHI07VsQyQJMI6e1ClgaMZebSsDv3GsBU3kzCUWS0XUuNRhFiPDVp6Be%2Bjp71KWtDn4UAYsZn5k0SmUNKnnvDRp9f8764sv0ysoWswCdy4WmyKWVFT3zYvQwCTisESoAq4qciJ4X3Mtc2dfCupfs8rKgLAioo%2Fhykfhxsu7NlLe%2BC&X-Amz-Signature=150724a57808a6fd84ca32c0d18b84910c13923075d862b08c84a17b4388b45f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHNSC6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCln6BJC9GH%2FlBGKxd%2Fy5gu8d7V6ZTK89HIDLyaa00%2FPwIgTW9NUiqZLDrhhljKryyzfEJJRHMQdo919cyxDnBfU5sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgR0eu052plnYv6ZSrcAygiyrFZdnVg5H0BLeis9F3tSTL5FYscnfHdKZGlULnd9Dhkg8Vlnvch0dLjHxuWkc7zOpp4yC411dAjCgoSOhM%2BQe9ozCPtLwrk6GbM9hVoOk%2BLMOJnT7lt%2FlO2f4M5V92uTqniRN48Gfp7x04m8jnNz%2FR7wa4rvy%2BqV1pnI4blrNg3N7YYgqHAWxhCL47jwH2aCmzk%2BkCz7S3s5WiSH5vHfH3kDKSVnjrMcWHLUvlCJ8Wr4alhkJQ%2FNJ9c2MKQUKlj1rkZeChPuIg6uQ06WcNpoW3zaR8VTeORSe81%2F1VoZYfs0qK55YdH5LmH8agrgPRrGy0TnnmHzKQpCZ7SIUH%2BCgEK6ZH8wKvXPO3FYa%2BQUPX68sVpMSKlgM7c%2FwkKdjG3QGYOLCUJpL8BbimsRWD7UcHJcHq6bd5f%2BfUsNgDKVyl5HK8Ums%2BJXsnfBQkMDmarUrm1uug0Vot%2BLdqFwSuoQBeMD%2FaaOjMREJEJx70EHzbyPR4YbjmfhEULEiNAKdDz%2BUQk6w8tOHGfziMAxkmaq1oatXyIAF2YNKto03XN8bgj3%2FUixEVZ2OlfHI42qOo22bniccJjz5ZnB0u6Pk%2BHVKKI65m7tukHAkbCk9tRaxgJe1z6bWOGTL0MML6nv8EGOqUBL2I3DAmMcQaB%2BYgt2GC5PnIX70%2FT970NLNR%2BpUCzYdi0o%2BD%2BHI07VsQyQJMI6e1ClgaMZebSsDv3GsBU3kzCUWS0XUuNRhFiPDVp6Be%2Bjp71KWtDn4UAYsZn5k0SmUNKnnvDRp9f8764sv0ysoWswCdy4WmyKWVFT3zYvQwCTisESoAq4qciJ4X3Mtc2dfCupfs8rKgLAioo%2Fhykfhxsu7NlLe%2BC&X-Amz-Signature=844deedf439a1872ce9222694024bc9ccd5b51000f05d77ca07e43c3c8646581&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHNSC6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCln6BJC9GH%2FlBGKxd%2Fy5gu8d7V6ZTK89HIDLyaa00%2FPwIgTW9NUiqZLDrhhljKryyzfEJJRHMQdo919cyxDnBfU5sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgR0eu052plnYv6ZSrcAygiyrFZdnVg5H0BLeis9F3tSTL5FYscnfHdKZGlULnd9Dhkg8Vlnvch0dLjHxuWkc7zOpp4yC411dAjCgoSOhM%2BQe9ozCPtLwrk6GbM9hVoOk%2BLMOJnT7lt%2FlO2f4M5V92uTqniRN48Gfp7x04m8jnNz%2FR7wa4rvy%2BqV1pnI4blrNg3N7YYgqHAWxhCL47jwH2aCmzk%2BkCz7S3s5WiSH5vHfH3kDKSVnjrMcWHLUvlCJ8Wr4alhkJQ%2FNJ9c2MKQUKlj1rkZeChPuIg6uQ06WcNpoW3zaR8VTeORSe81%2F1VoZYfs0qK55YdH5LmH8agrgPRrGy0TnnmHzKQpCZ7SIUH%2BCgEK6ZH8wKvXPO3FYa%2BQUPX68sVpMSKlgM7c%2FwkKdjG3QGYOLCUJpL8BbimsRWD7UcHJcHq6bd5f%2BfUsNgDKVyl5HK8Ums%2BJXsnfBQkMDmarUrm1uug0Vot%2BLdqFwSuoQBeMD%2FaaOjMREJEJx70EHzbyPR4YbjmfhEULEiNAKdDz%2BUQk6w8tOHGfziMAxkmaq1oatXyIAF2YNKto03XN8bgj3%2FUixEVZ2OlfHI42qOo22bniccJjz5ZnB0u6Pk%2BHVKKI65m7tukHAkbCk9tRaxgJe1z6bWOGTL0MML6nv8EGOqUBL2I3DAmMcQaB%2BYgt2GC5PnIX70%2FT970NLNR%2BpUCzYdi0o%2BD%2BHI07VsQyQJMI6e1ClgaMZebSsDv3GsBU3kzCUWS0XUuNRhFiPDVp6Be%2Bjp71KWtDn4UAYsZn5k0SmUNKnnvDRp9f8764sv0ysoWswCdy4WmyKWVFT3zYvQwCTisESoAq4qciJ4X3Mtc2dfCupfs8rKgLAioo%2Fhykfhxsu7NlLe%2BC&X-Amz-Signature=6d4ff7ade56305a30c81c30383f15a02b4d12f0145fdc4b3d30833ba3b138266&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHNSC6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCln6BJC9GH%2FlBGKxd%2Fy5gu8d7V6ZTK89HIDLyaa00%2FPwIgTW9NUiqZLDrhhljKryyzfEJJRHMQdo919cyxDnBfU5sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgR0eu052plnYv6ZSrcAygiyrFZdnVg5H0BLeis9F3tSTL5FYscnfHdKZGlULnd9Dhkg8Vlnvch0dLjHxuWkc7zOpp4yC411dAjCgoSOhM%2BQe9ozCPtLwrk6GbM9hVoOk%2BLMOJnT7lt%2FlO2f4M5V92uTqniRN48Gfp7x04m8jnNz%2FR7wa4rvy%2BqV1pnI4blrNg3N7YYgqHAWxhCL47jwH2aCmzk%2BkCz7S3s5WiSH5vHfH3kDKSVnjrMcWHLUvlCJ8Wr4alhkJQ%2FNJ9c2MKQUKlj1rkZeChPuIg6uQ06WcNpoW3zaR8VTeORSe81%2F1VoZYfs0qK55YdH5LmH8agrgPRrGy0TnnmHzKQpCZ7SIUH%2BCgEK6ZH8wKvXPO3FYa%2BQUPX68sVpMSKlgM7c%2FwkKdjG3QGYOLCUJpL8BbimsRWD7UcHJcHq6bd5f%2BfUsNgDKVyl5HK8Ums%2BJXsnfBQkMDmarUrm1uug0Vot%2BLdqFwSuoQBeMD%2FaaOjMREJEJx70EHzbyPR4YbjmfhEULEiNAKdDz%2BUQk6w8tOHGfziMAxkmaq1oatXyIAF2YNKto03XN8bgj3%2FUixEVZ2OlfHI42qOo22bniccJjz5ZnB0u6Pk%2BHVKKI65m7tukHAkbCk9tRaxgJe1z6bWOGTL0MML6nv8EGOqUBL2I3DAmMcQaB%2BYgt2GC5PnIX70%2FT970NLNR%2BpUCzYdi0o%2BD%2BHI07VsQyQJMI6e1ClgaMZebSsDv3GsBU3kzCUWS0XUuNRhFiPDVp6Be%2Bjp71KWtDn4UAYsZn5k0SmUNKnnvDRp9f8764sv0ysoWswCdy4WmyKWVFT3zYvQwCTisESoAq4qciJ4X3Mtc2dfCupfs8rKgLAioo%2Fhykfhxsu7NlLe%2BC&X-Amz-Signature=4eb2c8841460e8e1b26c2585e741aeee74a3729f6a4d4a594ab33a45cd2cdcd4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHNSC6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCln6BJC9GH%2FlBGKxd%2Fy5gu8d7V6ZTK89HIDLyaa00%2FPwIgTW9NUiqZLDrhhljKryyzfEJJRHMQdo919cyxDnBfU5sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgR0eu052plnYv6ZSrcAygiyrFZdnVg5H0BLeis9F3tSTL5FYscnfHdKZGlULnd9Dhkg8Vlnvch0dLjHxuWkc7zOpp4yC411dAjCgoSOhM%2BQe9ozCPtLwrk6GbM9hVoOk%2BLMOJnT7lt%2FlO2f4M5V92uTqniRN48Gfp7x04m8jnNz%2FR7wa4rvy%2BqV1pnI4blrNg3N7YYgqHAWxhCL47jwH2aCmzk%2BkCz7S3s5WiSH5vHfH3kDKSVnjrMcWHLUvlCJ8Wr4alhkJQ%2FNJ9c2MKQUKlj1rkZeChPuIg6uQ06WcNpoW3zaR8VTeORSe81%2F1VoZYfs0qK55YdH5LmH8agrgPRrGy0TnnmHzKQpCZ7SIUH%2BCgEK6ZH8wKvXPO3FYa%2BQUPX68sVpMSKlgM7c%2FwkKdjG3QGYOLCUJpL8BbimsRWD7UcHJcHq6bd5f%2BfUsNgDKVyl5HK8Ums%2BJXsnfBQkMDmarUrm1uug0Vot%2BLdqFwSuoQBeMD%2FaaOjMREJEJx70EHzbyPR4YbjmfhEULEiNAKdDz%2BUQk6w8tOHGfziMAxkmaq1oatXyIAF2YNKto03XN8bgj3%2FUixEVZ2OlfHI42qOo22bniccJjz5ZnB0u6Pk%2BHVKKI65m7tukHAkbCk9tRaxgJe1z6bWOGTL0MML6nv8EGOqUBL2I3DAmMcQaB%2BYgt2GC5PnIX70%2FT970NLNR%2BpUCzYdi0o%2BD%2BHI07VsQyQJMI6e1ClgaMZebSsDv3GsBU3kzCUWS0XUuNRhFiPDVp6Be%2Bjp71KWtDn4UAYsZn5k0SmUNKnnvDRp9f8764sv0ysoWswCdy4WmyKWVFT3zYvQwCTisESoAq4qciJ4X3Mtc2dfCupfs8rKgLAioo%2Fhykfhxsu7NlLe%2BC&X-Amz-Signature=0fc29463eab24b113e69fd1c944d33763e0093e84b94e946018f76d1a6927c92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRHNSC6B%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T022739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCln6BJC9GH%2FlBGKxd%2Fy5gu8d7V6ZTK89HIDLyaa00%2FPwIgTW9NUiqZLDrhhljKryyzfEJJRHMQdo919cyxDnBfU5sqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgR0eu052plnYv6ZSrcAygiyrFZdnVg5H0BLeis9F3tSTL5FYscnfHdKZGlULnd9Dhkg8Vlnvch0dLjHxuWkc7zOpp4yC411dAjCgoSOhM%2BQe9ozCPtLwrk6GbM9hVoOk%2BLMOJnT7lt%2FlO2f4M5V92uTqniRN48Gfp7x04m8jnNz%2FR7wa4rvy%2BqV1pnI4blrNg3N7YYgqHAWxhCL47jwH2aCmzk%2BkCz7S3s5WiSH5vHfH3kDKSVnjrMcWHLUvlCJ8Wr4alhkJQ%2FNJ9c2MKQUKlj1rkZeChPuIg6uQ06WcNpoW3zaR8VTeORSe81%2F1VoZYfs0qK55YdH5LmH8agrgPRrGy0TnnmHzKQpCZ7SIUH%2BCgEK6ZH8wKvXPO3FYa%2BQUPX68sVpMSKlgM7c%2FwkKdjG3QGYOLCUJpL8BbimsRWD7UcHJcHq6bd5f%2BfUsNgDKVyl5HK8Ums%2BJXsnfBQkMDmarUrm1uug0Vot%2BLdqFwSuoQBeMD%2FaaOjMREJEJx70EHzbyPR4YbjmfhEULEiNAKdDz%2BUQk6w8tOHGfziMAxkmaq1oatXyIAF2YNKto03XN8bgj3%2FUixEVZ2OlfHI42qOo22bniccJjz5ZnB0u6Pk%2BHVKKI65m7tukHAkbCk9tRaxgJe1z6bWOGTL0MML6nv8EGOqUBL2I3DAmMcQaB%2BYgt2GC5PnIX70%2FT970NLNR%2BpUCzYdi0o%2BD%2BHI07VsQyQJMI6e1ClgaMZebSsDv3GsBU3kzCUWS0XUuNRhFiPDVp6Be%2Bjp71KWtDn4UAYsZn5k0SmUNKnnvDRp9f8764sv0ysoWswCdy4WmyKWVFT3zYvQwCTisESoAq4qciJ4X3Mtc2dfCupfs8rKgLAioo%2Fhykfhxsu7NlLe%2BC&X-Amz-Signature=b289ebf474575e1084c0467f852768a6e70003106aef07c143cf973d1ecee567&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
