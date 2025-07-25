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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ECK65YP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSAlg%2FyUv8u5%2FeluxP2L3rgtmQfztEqYluVO4TI6ZjvgIgXOWNrOju3vnwAo%2BxYl9AJiZb%2FOsveSINMM0oZ%2Fvld%2B8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAEsPrTqghJa4wdAXyrcA633ulLqLLr4e0BHDAtYD1mkVuhdzyXIlZo2T04cva5pnw04iUuCC6qlRcBiGLIQmCyvEgk%2FNFHkNVc9CB0jvPxB62h59p8ZTdZJLPYo81nSI5H1IYZMyKE%2FCS7fUJU3ONPgoGSzlS8l7JOhjNdSTEOaEfHFKqSsk0lqeyKOXLcL20iM1i4blx5gHXoNnvPvhuC8CO2m8BBv2P3eRS6HhqPB%2BswQzWLKkW4bWkTm2S0kPRNK3tSzhJfrcmLsvluZOxM1L6C3F%2BG%2B70MkXYiIxtZfIkOc%2BW%2F6%2BeuyoZ%2BxK9y4DoByomw%2Bq1QTPqDGnCWi5jOgfkkK0bGxue%2BIRk6CdA6XhdV0Y6EcyCYgbZg7XtBq8oGUPPArlulLBta38fmLOrRKOfvrllR3KMQ4vndxz5P8g2%2FluS826EKVy1FNcu5PtJFJBDXyQwbdqMx%2FWciKtct9jVeWMTAmiSbOSmZmN4mXVL7w4OS%2FcfcDF57GDbBjDzoT9gyRVSyb8tyc5BVoXkTKGD0MDRJOliqQXxWsbMPtRmvX0tfp0eznNIiHxZVwIoak8%2F8RE97s8F00HbRASRtkmbnjhpl%2Fh99iS8qa5RKWX%2BnVKf%2F9ajM%2B%2BY%2FAJ19Yp9ZAcfFw7R2wo7JJMKz4i8QGOqUBANovT1glDAnsd%2F8ZPOljWVXCbaLb8HDwvUkwWkSVkRQPWWQ8IIL8TTMYvJ8R66ax%2BbnZd0AMhuhkscDQdvdaz5mttebPFFGYKBp%2F7OxJvKz8pkehiIrqWrL9vl7IOUN%2F3twz878lCFz9jW7k%2F3CiVRW5D1phPqC9uR9sg3sXjWXJm8Xn0%2BjIURL7RTKnjwpXMEHNoAD7mNsMkmkg3sHvxC%2FeAf5B&X-Amz-Signature=0a775f80a59d54ec6b6234de97fac7aa77fcffa95f065cf6c52e9a5c7d7a3147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ECK65YP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSAlg%2FyUv8u5%2FeluxP2L3rgtmQfztEqYluVO4TI6ZjvgIgXOWNrOju3vnwAo%2BxYl9AJiZb%2FOsveSINMM0oZ%2Fvld%2B8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAEsPrTqghJa4wdAXyrcA633ulLqLLr4e0BHDAtYD1mkVuhdzyXIlZo2T04cva5pnw04iUuCC6qlRcBiGLIQmCyvEgk%2FNFHkNVc9CB0jvPxB62h59p8ZTdZJLPYo81nSI5H1IYZMyKE%2FCS7fUJU3ONPgoGSzlS8l7JOhjNdSTEOaEfHFKqSsk0lqeyKOXLcL20iM1i4blx5gHXoNnvPvhuC8CO2m8BBv2P3eRS6HhqPB%2BswQzWLKkW4bWkTm2S0kPRNK3tSzhJfrcmLsvluZOxM1L6C3F%2BG%2B70MkXYiIxtZfIkOc%2BW%2F6%2BeuyoZ%2BxK9y4DoByomw%2Bq1QTPqDGnCWi5jOgfkkK0bGxue%2BIRk6CdA6XhdV0Y6EcyCYgbZg7XtBq8oGUPPArlulLBta38fmLOrRKOfvrllR3KMQ4vndxz5P8g2%2FluS826EKVy1FNcu5PtJFJBDXyQwbdqMx%2FWciKtct9jVeWMTAmiSbOSmZmN4mXVL7w4OS%2FcfcDF57GDbBjDzoT9gyRVSyb8tyc5BVoXkTKGD0MDRJOliqQXxWsbMPtRmvX0tfp0eznNIiHxZVwIoak8%2F8RE97s8F00HbRASRtkmbnjhpl%2Fh99iS8qa5RKWX%2BnVKf%2F9ajM%2B%2BY%2FAJ19Yp9ZAcfFw7R2wo7JJMKz4i8QGOqUBANovT1glDAnsd%2F8ZPOljWVXCbaLb8HDwvUkwWkSVkRQPWWQ8IIL8TTMYvJ8R66ax%2BbnZd0AMhuhkscDQdvdaz5mttebPFFGYKBp%2F7OxJvKz8pkehiIrqWrL9vl7IOUN%2F3twz878lCFz9jW7k%2F3CiVRW5D1phPqC9uR9sg3sXjWXJm8Xn0%2BjIURL7RTKnjwpXMEHNoAD7mNsMkmkg3sHvxC%2FeAf5B&X-Amz-Signature=81b8a9042b1c66b3f6ea1cc0deef0065c434cc901161edceeed73429a62d5f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ECK65YP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSAlg%2FyUv8u5%2FeluxP2L3rgtmQfztEqYluVO4TI6ZjvgIgXOWNrOju3vnwAo%2BxYl9AJiZb%2FOsveSINMM0oZ%2Fvld%2B8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAEsPrTqghJa4wdAXyrcA633ulLqLLr4e0BHDAtYD1mkVuhdzyXIlZo2T04cva5pnw04iUuCC6qlRcBiGLIQmCyvEgk%2FNFHkNVc9CB0jvPxB62h59p8ZTdZJLPYo81nSI5H1IYZMyKE%2FCS7fUJU3ONPgoGSzlS8l7JOhjNdSTEOaEfHFKqSsk0lqeyKOXLcL20iM1i4blx5gHXoNnvPvhuC8CO2m8BBv2P3eRS6HhqPB%2BswQzWLKkW4bWkTm2S0kPRNK3tSzhJfrcmLsvluZOxM1L6C3F%2BG%2B70MkXYiIxtZfIkOc%2BW%2F6%2BeuyoZ%2BxK9y4DoByomw%2Bq1QTPqDGnCWi5jOgfkkK0bGxue%2BIRk6CdA6XhdV0Y6EcyCYgbZg7XtBq8oGUPPArlulLBta38fmLOrRKOfvrllR3KMQ4vndxz5P8g2%2FluS826EKVy1FNcu5PtJFJBDXyQwbdqMx%2FWciKtct9jVeWMTAmiSbOSmZmN4mXVL7w4OS%2FcfcDF57GDbBjDzoT9gyRVSyb8tyc5BVoXkTKGD0MDRJOliqQXxWsbMPtRmvX0tfp0eznNIiHxZVwIoak8%2F8RE97s8F00HbRASRtkmbnjhpl%2Fh99iS8qa5RKWX%2BnVKf%2F9ajM%2B%2BY%2FAJ19Yp9ZAcfFw7R2wo7JJMKz4i8QGOqUBANovT1glDAnsd%2F8ZPOljWVXCbaLb8HDwvUkwWkSVkRQPWWQ8IIL8TTMYvJ8R66ax%2BbnZd0AMhuhkscDQdvdaz5mttebPFFGYKBp%2F7OxJvKz8pkehiIrqWrL9vl7IOUN%2F3twz878lCFz9jW7k%2F3CiVRW5D1phPqC9uR9sg3sXjWXJm8Xn0%2BjIURL7RTKnjwpXMEHNoAD7mNsMkmkg3sHvxC%2FeAf5B&X-Amz-Signature=6950fbcb3e9864e2a0d91b101129c17a0e0be00693e262783b8870b5eee65dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ECK65YP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSAlg%2FyUv8u5%2FeluxP2L3rgtmQfztEqYluVO4TI6ZjvgIgXOWNrOju3vnwAo%2BxYl9AJiZb%2FOsveSINMM0oZ%2Fvld%2B8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAEsPrTqghJa4wdAXyrcA633ulLqLLr4e0BHDAtYD1mkVuhdzyXIlZo2T04cva5pnw04iUuCC6qlRcBiGLIQmCyvEgk%2FNFHkNVc9CB0jvPxB62h59p8ZTdZJLPYo81nSI5H1IYZMyKE%2FCS7fUJU3ONPgoGSzlS8l7JOhjNdSTEOaEfHFKqSsk0lqeyKOXLcL20iM1i4blx5gHXoNnvPvhuC8CO2m8BBv2P3eRS6HhqPB%2BswQzWLKkW4bWkTm2S0kPRNK3tSzhJfrcmLsvluZOxM1L6C3F%2BG%2B70MkXYiIxtZfIkOc%2BW%2F6%2BeuyoZ%2BxK9y4DoByomw%2Bq1QTPqDGnCWi5jOgfkkK0bGxue%2BIRk6CdA6XhdV0Y6EcyCYgbZg7XtBq8oGUPPArlulLBta38fmLOrRKOfvrllR3KMQ4vndxz5P8g2%2FluS826EKVy1FNcu5PtJFJBDXyQwbdqMx%2FWciKtct9jVeWMTAmiSbOSmZmN4mXVL7w4OS%2FcfcDF57GDbBjDzoT9gyRVSyb8tyc5BVoXkTKGD0MDRJOliqQXxWsbMPtRmvX0tfp0eznNIiHxZVwIoak8%2F8RE97s8F00HbRASRtkmbnjhpl%2Fh99iS8qa5RKWX%2BnVKf%2F9ajM%2B%2BY%2FAJ19Yp9ZAcfFw7R2wo7JJMKz4i8QGOqUBANovT1glDAnsd%2F8ZPOljWVXCbaLb8HDwvUkwWkSVkRQPWWQ8IIL8TTMYvJ8R66ax%2BbnZd0AMhuhkscDQdvdaz5mttebPFFGYKBp%2F7OxJvKz8pkehiIrqWrL9vl7IOUN%2F3twz878lCFz9jW7k%2F3CiVRW5D1phPqC9uR9sg3sXjWXJm8Xn0%2BjIURL7RTKnjwpXMEHNoAD7mNsMkmkg3sHvxC%2FeAf5B&X-Amz-Signature=0b0abfba31e8a0aae43abf41f1b893e8d2b88260f272fa7f64dfca2c10ea8c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ECK65YP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSAlg%2FyUv8u5%2FeluxP2L3rgtmQfztEqYluVO4TI6ZjvgIgXOWNrOju3vnwAo%2BxYl9AJiZb%2FOsveSINMM0oZ%2Fvld%2B8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAEsPrTqghJa4wdAXyrcA633ulLqLLr4e0BHDAtYD1mkVuhdzyXIlZo2T04cva5pnw04iUuCC6qlRcBiGLIQmCyvEgk%2FNFHkNVc9CB0jvPxB62h59p8ZTdZJLPYo81nSI5H1IYZMyKE%2FCS7fUJU3ONPgoGSzlS8l7JOhjNdSTEOaEfHFKqSsk0lqeyKOXLcL20iM1i4blx5gHXoNnvPvhuC8CO2m8BBv2P3eRS6HhqPB%2BswQzWLKkW4bWkTm2S0kPRNK3tSzhJfrcmLsvluZOxM1L6C3F%2BG%2B70MkXYiIxtZfIkOc%2BW%2F6%2BeuyoZ%2BxK9y4DoByomw%2Bq1QTPqDGnCWi5jOgfkkK0bGxue%2BIRk6CdA6XhdV0Y6EcyCYgbZg7XtBq8oGUPPArlulLBta38fmLOrRKOfvrllR3KMQ4vndxz5P8g2%2FluS826EKVy1FNcu5PtJFJBDXyQwbdqMx%2FWciKtct9jVeWMTAmiSbOSmZmN4mXVL7w4OS%2FcfcDF57GDbBjDzoT9gyRVSyb8tyc5BVoXkTKGD0MDRJOliqQXxWsbMPtRmvX0tfp0eznNIiHxZVwIoak8%2F8RE97s8F00HbRASRtkmbnjhpl%2Fh99iS8qa5RKWX%2BnVKf%2F9ajM%2B%2BY%2FAJ19Yp9ZAcfFw7R2wo7JJMKz4i8QGOqUBANovT1glDAnsd%2F8ZPOljWVXCbaLb8HDwvUkwWkSVkRQPWWQ8IIL8TTMYvJ8R66ax%2BbnZd0AMhuhkscDQdvdaz5mttebPFFGYKBp%2F7OxJvKz8pkehiIrqWrL9vl7IOUN%2F3twz878lCFz9jW7k%2F3CiVRW5D1phPqC9uR9sg3sXjWXJm8Xn0%2BjIURL7RTKnjwpXMEHNoAD7mNsMkmkg3sHvxC%2FeAf5B&X-Amz-Signature=49e10ae808e4e26a8fc0b43d66c51e6ba7ed85474eb53fb37fc9bf315d2e3dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ECK65YP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSAlg%2FyUv8u5%2FeluxP2L3rgtmQfztEqYluVO4TI6ZjvgIgXOWNrOju3vnwAo%2BxYl9AJiZb%2FOsveSINMM0oZ%2Fvld%2B8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAEsPrTqghJa4wdAXyrcA633ulLqLLr4e0BHDAtYD1mkVuhdzyXIlZo2T04cva5pnw04iUuCC6qlRcBiGLIQmCyvEgk%2FNFHkNVc9CB0jvPxB62h59p8ZTdZJLPYo81nSI5H1IYZMyKE%2FCS7fUJU3ONPgoGSzlS8l7JOhjNdSTEOaEfHFKqSsk0lqeyKOXLcL20iM1i4blx5gHXoNnvPvhuC8CO2m8BBv2P3eRS6HhqPB%2BswQzWLKkW4bWkTm2S0kPRNK3tSzhJfrcmLsvluZOxM1L6C3F%2BG%2B70MkXYiIxtZfIkOc%2BW%2F6%2BeuyoZ%2BxK9y4DoByomw%2Bq1QTPqDGnCWi5jOgfkkK0bGxue%2BIRk6CdA6XhdV0Y6EcyCYgbZg7XtBq8oGUPPArlulLBta38fmLOrRKOfvrllR3KMQ4vndxz5P8g2%2FluS826EKVy1FNcu5PtJFJBDXyQwbdqMx%2FWciKtct9jVeWMTAmiSbOSmZmN4mXVL7w4OS%2FcfcDF57GDbBjDzoT9gyRVSyb8tyc5BVoXkTKGD0MDRJOliqQXxWsbMPtRmvX0tfp0eznNIiHxZVwIoak8%2F8RE97s8F00HbRASRtkmbnjhpl%2Fh99iS8qa5RKWX%2BnVKf%2F9ajM%2B%2BY%2FAJ19Yp9ZAcfFw7R2wo7JJMKz4i8QGOqUBANovT1glDAnsd%2F8ZPOljWVXCbaLb8HDwvUkwWkSVkRQPWWQ8IIL8TTMYvJ8R66ax%2BbnZd0AMhuhkscDQdvdaz5mttebPFFGYKBp%2F7OxJvKz8pkehiIrqWrL9vl7IOUN%2F3twz878lCFz9jW7k%2F3CiVRW5D1phPqC9uR9sg3sXjWXJm8Xn0%2BjIURL7RTKnjwpXMEHNoAD7mNsMkmkg3sHvxC%2FeAf5B&X-Amz-Signature=3ed88354659ef73f8ee9077210476c37ade21c7d7caac1587f2005cf0722a075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ECK65YP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSAlg%2FyUv8u5%2FeluxP2L3rgtmQfztEqYluVO4TI6ZjvgIgXOWNrOju3vnwAo%2BxYl9AJiZb%2FOsveSINMM0oZ%2Fvld%2B8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAEsPrTqghJa4wdAXyrcA633ulLqLLr4e0BHDAtYD1mkVuhdzyXIlZo2T04cva5pnw04iUuCC6qlRcBiGLIQmCyvEgk%2FNFHkNVc9CB0jvPxB62h59p8ZTdZJLPYo81nSI5H1IYZMyKE%2FCS7fUJU3ONPgoGSzlS8l7JOhjNdSTEOaEfHFKqSsk0lqeyKOXLcL20iM1i4blx5gHXoNnvPvhuC8CO2m8BBv2P3eRS6HhqPB%2BswQzWLKkW4bWkTm2S0kPRNK3tSzhJfrcmLsvluZOxM1L6C3F%2BG%2B70MkXYiIxtZfIkOc%2BW%2F6%2BeuyoZ%2BxK9y4DoByomw%2Bq1QTPqDGnCWi5jOgfkkK0bGxue%2BIRk6CdA6XhdV0Y6EcyCYgbZg7XtBq8oGUPPArlulLBta38fmLOrRKOfvrllR3KMQ4vndxz5P8g2%2FluS826EKVy1FNcu5PtJFJBDXyQwbdqMx%2FWciKtct9jVeWMTAmiSbOSmZmN4mXVL7w4OS%2FcfcDF57GDbBjDzoT9gyRVSyb8tyc5BVoXkTKGD0MDRJOliqQXxWsbMPtRmvX0tfp0eznNIiHxZVwIoak8%2F8RE97s8F00HbRASRtkmbnjhpl%2Fh99iS8qa5RKWX%2BnVKf%2F9ajM%2B%2BY%2FAJ19Yp9ZAcfFw7R2wo7JJMKz4i8QGOqUBANovT1glDAnsd%2F8ZPOljWVXCbaLb8HDwvUkwWkSVkRQPWWQ8IIL8TTMYvJ8R66ax%2BbnZd0AMhuhkscDQdvdaz5mttebPFFGYKBp%2F7OxJvKz8pkehiIrqWrL9vl7IOUN%2F3twz878lCFz9jW7k%2F3CiVRW5D1phPqC9uR9sg3sXjWXJm8Xn0%2BjIURL7RTKnjwpXMEHNoAD7mNsMkmkg3sHvxC%2FeAf5B&X-Amz-Signature=a11cc549c054358ee317355c3083e158b07cc1d96d41a2ae4131899811726f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ECK65YP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T042931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSAlg%2FyUv8u5%2FeluxP2L3rgtmQfztEqYluVO4TI6ZjvgIgXOWNrOju3vnwAo%2BxYl9AJiZb%2FOsveSINMM0oZ%2Fvld%2B8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAEsPrTqghJa4wdAXyrcA633ulLqLLr4e0BHDAtYD1mkVuhdzyXIlZo2T04cva5pnw04iUuCC6qlRcBiGLIQmCyvEgk%2FNFHkNVc9CB0jvPxB62h59p8ZTdZJLPYo81nSI5H1IYZMyKE%2FCS7fUJU3ONPgoGSzlS8l7JOhjNdSTEOaEfHFKqSsk0lqeyKOXLcL20iM1i4blx5gHXoNnvPvhuC8CO2m8BBv2P3eRS6HhqPB%2BswQzWLKkW4bWkTm2S0kPRNK3tSzhJfrcmLsvluZOxM1L6C3F%2BG%2B70MkXYiIxtZfIkOc%2BW%2F6%2BeuyoZ%2BxK9y4DoByomw%2Bq1QTPqDGnCWi5jOgfkkK0bGxue%2BIRk6CdA6XhdV0Y6EcyCYgbZg7XtBq8oGUPPArlulLBta38fmLOrRKOfvrllR3KMQ4vndxz5P8g2%2FluS826EKVy1FNcu5PtJFJBDXyQwbdqMx%2FWciKtct9jVeWMTAmiSbOSmZmN4mXVL7w4OS%2FcfcDF57GDbBjDzoT9gyRVSyb8tyc5BVoXkTKGD0MDRJOliqQXxWsbMPtRmvX0tfp0eznNIiHxZVwIoak8%2F8RE97s8F00HbRASRtkmbnjhpl%2Fh99iS8qa5RKWX%2BnVKf%2F9ajM%2B%2BY%2FAJ19Yp9ZAcfFw7R2wo7JJMKz4i8QGOqUBANovT1glDAnsd%2F8ZPOljWVXCbaLb8HDwvUkwWkSVkRQPWWQ8IIL8TTMYvJ8R66ax%2BbnZd0AMhuhkscDQdvdaz5mttebPFFGYKBp%2F7OxJvKz8pkehiIrqWrL9vl7IOUN%2F3twz878lCFz9jW7k%2F3CiVRW5D1phPqC9uR9sg3sXjWXJm8Xn0%2BjIURL7RTKnjwpXMEHNoAD7mNsMkmkg3sHvxC%2FeAf5B&X-Amz-Signature=7f3b01f3673b0b0654201b388364a400d16b33bca73d8206d203540f47a2c2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
