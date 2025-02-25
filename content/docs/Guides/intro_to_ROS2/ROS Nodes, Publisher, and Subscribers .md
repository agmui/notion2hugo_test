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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIM2VFA4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC6rFXMeHpIQaJVt1V6Pgfs8vDKmfQx71OxMyaefJw%2FBgIhANCZbsvlPRIv1pk1QyfSPjaddk6KZu0ZxY%2BkOHyEOMB%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwlpRHSaAR3MsVnS%2BMq3APUJH38DvXV43OYGB4AYoDzEP5WqQv9VBRE2rsP9Nf1SHE5xT%2BPsKcG%2FBdMbteDUvPkKe78a4OTuFYY%2BqvLJKYvZnCTiaHQyQUn%2FoNp%2B4pn9zNQy0VVP3ptDCnOuGPr9HYvgVq1qtNmhfAzlOl5nc76HNpTR9%2B6e476iC30MypElOrm%2Fgbwbctea3Yme%2BEMmZ6hkxtuIbR5IFmFF1fQtFP5HgidBCgw%2FDaSXffnbEWKNuiIpyxHaNrqIHKhPlE1u19b7BNzbNyDBawZsz%2F8lnBA5QA4%2BA92OnyVLGFwToFbeGu9fudEMWWyAWMgtJx350pV7ImLqXe4vIljWFOaWQeJI1v6Vn5FRI58pX0SpFJIOhMsu9pbt%2Bx2eWacxqI75f4inUcYiVOssiC421bUj9nNj9g48RhbUknYPHf7YINcxE4i5MuGj6e1G%2Bsd2HoqKDoq2Lgp6qht4EjGncWHnTyUliWOrk%2BnH1mhrna2%2FFIdi49rGiMwSuX%2BkLPTfkRrtWdN2m7QnSWUIeUJ4WgxEuvYJ6%2BXs86jmluQlmDnIM1HVytjWXENJtxGtDwkaQqKXvTznxLzCx%2FkMaQk9KAND2VCd7faAnOP5USHfVwi%2BF6MelVwO98w82HO6nU%2BDDDP3Pa9BjqkASYl%2FFRc9uzTkozdmEyiSbIFdgKmMRvjfIJTxpwEjYnxiPefYtD6hgM19kmld9Lm7pzXtTyf7CqM9SatGgKm5%2FHVVlQHPrpiVN0NRMMb6UrtxKNi6Q0TMzdBPxG3ycyBUUg8Ez8cUxcb8z6ESbXIDBUUNzqtLSYjpiK24aJTfVxencI19Uf%2B4t6CpgPXkk4xPPGALFiIMjkhFBUJ395GjhlQos2V&X-Amz-Signature=5110b89636d6e60326e388dad6aae8c53865b9bd9fe9b386a6951d53b2f7325a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIM2VFA4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC6rFXMeHpIQaJVt1V6Pgfs8vDKmfQx71OxMyaefJw%2FBgIhANCZbsvlPRIv1pk1QyfSPjaddk6KZu0ZxY%2BkOHyEOMB%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwlpRHSaAR3MsVnS%2BMq3APUJH38DvXV43OYGB4AYoDzEP5WqQv9VBRE2rsP9Nf1SHE5xT%2BPsKcG%2FBdMbteDUvPkKe78a4OTuFYY%2BqvLJKYvZnCTiaHQyQUn%2FoNp%2B4pn9zNQy0VVP3ptDCnOuGPr9HYvgVq1qtNmhfAzlOl5nc76HNpTR9%2B6e476iC30MypElOrm%2Fgbwbctea3Yme%2BEMmZ6hkxtuIbR5IFmFF1fQtFP5HgidBCgw%2FDaSXffnbEWKNuiIpyxHaNrqIHKhPlE1u19b7BNzbNyDBawZsz%2F8lnBA5QA4%2BA92OnyVLGFwToFbeGu9fudEMWWyAWMgtJx350pV7ImLqXe4vIljWFOaWQeJI1v6Vn5FRI58pX0SpFJIOhMsu9pbt%2Bx2eWacxqI75f4inUcYiVOssiC421bUj9nNj9g48RhbUknYPHf7YINcxE4i5MuGj6e1G%2Bsd2HoqKDoq2Lgp6qht4EjGncWHnTyUliWOrk%2BnH1mhrna2%2FFIdi49rGiMwSuX%2BkLPTfkRrtWdN2m7QnSWUIeUJ4WgxEuvYJ6%2BXs86jmluQlmDnIM1HVytjWXENJtxGtDwkaQqKXvTznxLzCx%2FkMaQk9KAND2VCd7faAnOP5USHfVwi%2BF6MelVwO98w82HO6nU%2BDDDP3Pa9BjqkASYl%2FFRc9uzTkozdmEyiSbIFdgKmMRvjfIJTxpwEjYnxiPefYtD6hgM19kmld9Lm7pzXtTyf7CqM9SatGgKm5%2FHVVlQHPrpiVN0NRMMb6UrtxKNi6Q0TMzdBPxG3ycyBUUg8Ez8cUxcb8z6ESbXIDBUUNzqtLSYjpiK24aJTfVxencI19Uf%2B4t6CpgPXkk4xPPGALFiIMjkhFBUJ395GjhlQos2V&X-Amz-Signature=cc0890c073ed7f165963f3512d417319205168205397b937d45c9426b8d237ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIM2VFA4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC6rFXMeHpIQaJVt1V6Pgfs8vDKmfQx71OxMyaefJw%2FBgIhANCZbsvlPRIv1pk1QyfSPjaddk6KZu0ZxY%2BkOHyEOMB%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwlpRHSaAR3MsVnS%2BMq3APUJH38DvXV43OYGB4AYoDzEP5WqQv9VBRE2rsP9Nf1SHE5xT%2BPsKcG%2FBdMbteDUvPkKe78a4OTuFYY%2BqvLJKYvZnCTiaHQyQUn%2FoNp%2B4pn9zNQy0VVP3ptDCnOuGPr9HYvgVq1qtNmhfAzlOl5nc76HNpTR9%2B6e476iC30MypElOrm%2Fgbwbctea3Yme%2BEMmZ6hkxtuIbR5IFmFF1fQtFP5HgidBCgw%2FDaSXffnbEWKNuiIpyxHaNrqIHKhPlE1u19b7BNzbNyDBawZsz%2F8lnBA5QA4%2BA92OnyVLGFwToFbeGu9fudEMWWyAWMgtJx350pV7ImLqXe4vIljWFOaWQeJI1v6Vn5FRI58pX0SpFJIOhMsu9pbt%2Bx2eWacxqI75f4inUcYiVOssiC421bUj9nNj9g48RhbUknYPHf7YINcxE4i5MuGj6e1G%2Bsd2HoqKDoq2Lgp6qht4EjGncWHnTyUliWOrk%2BnH1mhrna2%2FFIdi49rGiMwSuX%2BkLPTfkRrtWdN2m7QnSWUIeUJ4WgxEuvYJ6%2BXs86jmluQlmDnIM1HVytjWXENJtxGtDwkaQqKXvTznxLzCx%2FkMaQk9KAND2VCd7faAnOP5USHfVwi%2BF6MelVwO98w82HO6nU%2BDDDP3Pa9BjqkASYl%2FFRc9uzTkozdmEyiSbIFdgKmMRvjfIJTxpwEjYnxiPefYtD6hgM19kmld9Lm7pzXtTyf7CqM9SatGgKm5%2FHVVlQHPrpiVN0NRMMb6UrtxKNi6Q0TMzdBPxG3ycyBUUg8Ez8cUxcb8z6ESbXIDBUUNzqtLSYjpiK24aJTfVxencI19Uf%2B4t6CpgPXkk4xPPGALFiIMjkhFBUJ395GjhlQos2V&X-Amz-Signature=7c4761c4ebd9a7fd5dd5e16660f439661e07ca944ebc6fe84f643394b7665fde&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIM2VFA4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC6rFXMeHpIQaJVt1V6Pgfs8vDKmfQx71OxMyaefJw%2FBgIhANCZbsvlPRIv1pk1QyfSPjaddk6KZu0ZxY%2BkOHyEOMB%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwlpRHSaAR3MsVnS%2BMq3APUJH38DvXV43OYGB4AYoDzEP5WqQv9VBRE2rsP9Nf1SHE5xT%2BPsKcG%2FBdMbteDUvPkKe78a4OTuFYY%2BqvLJKYvZnCTiaHQyQUn%2FoNp%2B4pn9zNQy0VVP3ptDCnOuGPr9HYvgVq1qtNmhfAzlOl5nc76HNpTR9%2B6e476iC30MypElOrm%2Fgbwbctea3Yme%2BEMmZ6hkxtuIbR5IFmFF1fQtFP5HgidBCgw%2FDaSXffnbEWKNuiIpyxHaNrqIHKhPlE1u19b7BNzbNyDBawZsz%2F8lnBA5QA4%2BA92OnyVLGFwToFbeGu9fudEMWWyAWMgtJx350pV7ImLqXe4vIljWFOaWQeJI1v6Vn5FRI58pX0SpFJIOhMsu9pbt%2Bx2eWacxqI75f4inUcYiVOssiC421bUj9nNj9g48RhbUknYPHf7YINcxE4i5MuGj6e1G%2Bsd2HoqKDoq2Lgp6qht4EjGncWHnTyUliWOrk%2BnH1mhrna2%2FFIdi49rGiMwSuX%2BkLPTfkRrtWdN2m7QnSWUIeUJ4WgxEuvYJ6%2BXs86jmluQlmDnIM1HVytjWXENJtxGtDwkaQqKXvTznxLzCx%2FkMaQk9KAND2VCd7faAnOP5USHfVwi%2BF6MelVwO98w82HO6nU%2BDDDP3Pa9BjqkASYl%2FFRc9uzTkozdmEyiSbIFdgKmMRvjfIJTxpwEjYnxiPefYtD6hgM19kmld9Lm7pzXtTyf7CqM9SatGgKm5%2FHVVlQHPrpiVN0NRMMb6UrtxKNi6Q0TMzdBPxG3ycyBUUg8Ez8cUxcb8z6ESbXIDBUUNzqtLSYjpiK24aJTfVxencI19Uf%2B4t6CpgPXkk4xPPGALFiIMjkhFBUJ395GjhlQos2V&X-Amz-Signature=b29b7911ee66dffe534781487e6604f54605ca289d27fb2108b917fa97919cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIM2VFA4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC6rFXMeHpIQaJVt1V6Pgfs8vDKmfQx71OxMyaefJw%2FBgIhANCZbsvlPRIv1pk1QyfSPjaddk6KZu0ZxY%2BkOHyEOMB%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwlpRHSaAR3MsVnS%2BMq3APUJH38DvXV43OYGB4AYoDzEP5WqQv9VBRE2rsP9Nf1SHE5xT%2BPsKcG%2FBdMbteDUvPkKe78a4OTuFYY%2BqvLJKYvZnCTiaHQyQUn%2FoNp%2B4pn9zNQy0VVP3ptDCnOuGPr9HYvgVq1qtNmhfAzlOl5nc76HNpTR9%2B6e476iC30MypElOrm%2Fgbwbctea3Yme%2BEMmZ6hkxtuIbR5IFmFF1fQtFP5HgidBCgw%2FDaSXffnbEWKNuiIpyxHaNrqIHKhPlE1u19b7BNzbNyDBawZsz%2F8lnBA5QA4%2BA92OnyVLGFwToFbeGu9fudEMWWyAWMgtJx350pV7ImLqXe4vIljWFOaWQeJI1v6Vn5FRI58pX0SpFJIOhMsu9pbt%2Bx2eWacxqI75f4inUcYiVOssiC421bUj9nNj9g48RhbUknYPHf7YINcxE4i5MuGj6e1G%2Bsd2HoqKDoq2Lgp6qht4EjGncWHnTyUliWOrk%2BnH1mhrna2%2FFIdi49rGiMwSuX%2BkLPTfkRrtWdN2m7QnSWUIeUJ4WgxEuvYJ6%2BXs86jmluQlmDnIM1HVytjWXENJtxGtDwkaQqKXvTznxLzCx%2FkMaQk9KAND2VCd7faAnOP5USHfVwi%2BF6MelVwO98w82HO6nU%2BDDDP3Pa9BjqkASYl%2FFRc9uzTkozdmEyiSbIFdgKmMRvjfIJTxpwEjYnxiPefYtD6hgM19kmld9Lm7pzXtTyf7CqM9SatGgKm5%2FHVVlQHPrpiVN0NRMMb6UrtxKNi6Q0TMzdBPxG3ycyBUUg8Ez8cUxcb8z6ESbXIDBUUNzqtLSYjpiK24aJTfVxencI19Uf%2B4t6CpgPXkk4xPPGALFiIMjkhFBUJ395GjhlQos2V&X-Amz-Signature=a95ef090142d91534639cd33328d1252379dbde37206d668aa6b93d6f978894b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIM2VFA4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC6rFXMeHpIQaJVt1V6Pgfs8vDKmfQx71OxMyaefJw%2FBgIhANCZbsvlPRIv1pk1QyfSPjaddk6KZu0ZxY%2BkOHyEOMB%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwlpRHSaAR3MsVnS%2BMq3APUJH38DvXV43OYGB4AYoDzEP5WqQv9VBRE2rsP9Nf1SHE5xT%2BPsKcG%2FBdMbteDUvPkKe78a4OTuFYY%2BqvLJKYvZnCTiaHQyQUn%2FoNp%2B4pn9zNQy0VVP3ptDCnOuGPr9HYvgVq1qtNmhfAzlOl5nc76HNpTR9%2B6e476iC30MypElOrm%2Fgbwbctea3Yme%2BEMmZ6hkxtuIbR5IFmFF1fQtFP5HgidBCgw%2FDaSXffnbEWKNuiIpyxHaNrqIHKhPlE1u19b7BNzbNyDBawZsz%2F8lnBA5QA4%2BA92OnyVLGFwToFbeGu9fudEMWWyAWMgtJx350pV7ImLqXe4vIljWFOaWQeJI1v6Vn5FRI58pX0SpFJIOhMsu9pbt%2Bx2eWacxqI75f4inUcYiVOssiC421bUj9nNj9g48RhbUknYPHf7YINcxE4i5MuGj6e1G%2Bsd2HoqKDoq2Lgp6qht4EjGncWHnTyUliWOrk%2BnH1mhrna2%2FFIdi49rGiMwSuX%2BkLPTfkRrtWdN2m7QnSWUIeUJ4WgxEuvYJ6%2BXs86jmluQlmDnIM1HVytjWXENJtxGtDwkaQqKXvTznxLzCx%2FkMaQk9KAND2VCd7faAnOP5USHfVwi%2BF6MelVwO98w82HO6nU%2BDDDP3Pa9BjqkASYl%2FFRc9uzTkozdmEyiSbIFdgKmMRvjfIJTxpwEjYnxiPefYtD6hgM19kmld9Lm7pzXtTyf7CqM9SatGgKm5%2FHVVlQHPrpiVN0NRMMb6UrtxKNi6Q0TMzdBPxG3ycyBUUg8Ez8cUxcb8z6ESbXIDBUUNzqtLSYjpiK24aJTfVxencI19Uf%2B4t6CpgPXkk4xPPGALFiIMjkhFBUJ395GjhlQos2V&X-Amz-Signature=4cb08dc3975997d62b594b4467619aab574b11b86a649ecee35525784c536069&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIM2VFA4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC6rFXMeHpIQaJVt1V6Pgfs8vDKmfQx71OxMyaefJw%2FBgIhANCZbsvlPRIv1pk1QyfSPjaddk6KZu0ZxY%2BkOHyEOMB%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwlpRHSaAR3MsVnS%2BMq3APUJH38DvXV43OYGB4AYoDzEP5WqQv9VBRE2rsP9Nf1SHE5xT%2BPsKcG%2FBdMbteDUvPkKe78a4OTuFYY%2BqvLJKYvZnCTiaHQyQUn%2FoNp%2B4pn9zNQy0VVP3ptDCnOuGPr9HYvgVq1qtNmhfAzlOl5nc76HNpTR9%2B6e476iC30MypElOrm%2Fgbwbctea3Yme%2BEMmZ6hkxtuIbR5IFmFF1fQtFP5HgidBCgw%2FDaSXffnbEWKNuiIpyxHaNrqIHKhPlE1u19b7BNzbNyDBawZsz%2F8lnBA5QA4%2BA92OnyVLGFwToFbeGu9fudEMWWyAWMgtJx350pV7ImLqXe4vIljWFOaWQeJI1v6Vn5FRI58pX0SpFJIOhMsu9pbt%2Bx2eWacxqI75f4inUcYiVOssiC421bUj9nNj9g48RhbUknYPHf7YINcxE4i5MuGj6e1G%2Bsd2HoqKDoq2Lgp6qht4EjGncWHnTyUliWOrk%2BnH1mhrna2%2FFIdi49rGiMwSuX%2BkLPTfkRrtWdN2m7QnSWUIeUJ4WgxEuvYJ6%2BXs86jmluQlmDnIM1HVytjWXENJtxGtDwkaQqKXvTznxLzCx%2FkMaQk9KAND2VCd7faAnOP5USHfVwi%2BF6MelVwO98w82HO6nU%2BDDDP3Pa9BjqkASYl%2FFRc9uzTkozdmEyiSbIFdgKmMRvjfIJTxpwEjYnxiPefYtD6hgM19kmld9Lm7pzXtTyf7CqM9SatGgKm5%2FHVVlQHPrpiVN0NRMMb6UrtxKNi6Q0TMzdBPxG3ycyBUUg8Ez8cUxcb8z6ESbXIDBUUNzqtLSYjpiK24aJTfVxencI19Uf%2B4t6CpgPXkk4xPPGALFiIMjkhFBUJ395GjhlQos2V&X-Amz-Signature=d7eb47080fb16cfc6b1e34e870a0169388875605b44cb948170bc0a1d1bbb4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIM2VFA4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQC6rFXMeHpIQaJVt1V6Pgfs8vDKmfQx71OxMyaefJw%2FBgIhANCZbsvlPRIv1pk1QyfSPjaddk6KZu0ZxY%2BkOHyEOMB%2BKv8DCEUQABoMNjM3NDIzMTgzODA1IgwlpRHSaAR3MsVnS%2BMq3APUJH38DvXV43OYGB4AYoDzEP5WqQv9VBRE2rsP9Nf1SHE5xT%2BPsKcG%2FBdMbteDUvPkKe78a4OTuFYY%2BqvLJKYvZnCTiaHQyQUn%2FoNp%2B4pn9zNQy0VVP3ptDCnOuGPr9HYvgVq1qtNmhfAzlOl5nc76HNpTR9%2B6e476iC30MypElOrm%2Fgbwbctea3Yme%2BEMmZ6hkxtuIbR5IFmFF1fQtFP5HgidBCgw%2FDaSXffnbEWKNuiIpyxHaNrqIHKhPlE1u19b7BNzbNyDBawZsz%2F8lnBA5QA4%2BA92OnyVLGFwToFbeGu9fudEMWWyAWMgtJx350pV7ImLqXe4vIljWFOaWQeJI1v6Vn5FRI58pX0SpFJIOhMsu9pbt%2Bx2eWacxqI75f4inUcYiVOssiC421bUj9nNj9g48RhbUknYPHf7YINcxE4i5MuGj6e1G%2Bsd2HoqKDoq2Lgp6qht4EjGncWHnTyUliWOrk%2BnH1mhrna2%2FFIdi49rGiMwSuX%2BkLPTfkRrtWdN2m7QnSWUIeUJ4WgxEuvYJ6%2BXs86jmluQlmDnIM1HVytjWXENJtxGtDwkaQqKXvTznxLzCx%2FkMaQk9KAND2VCd7faAnOP5USHfVwi%2BF6MelVwO98w82HO6nU%2BDDDP3Pa9BjqkASYl%2FFRc9uzTkozdmEyiSbIFdgKmMRvjfIJTxpwEjYnxiPefYtD6hgM19kmld9Lm7pzXtTyf7CqM9SatGgKm5%2FHVVlQHPrpiVN0NRMMb6UrtxKNi6Q0TMzdBPxG3ycyBUUg8Ez8cUxcb8z6ESbXIDBUUNzqtLSYjpiK24aJTfVxencI19Uf%2B4t6CpgPXkk4xPPGALFiIMjkhFBUJ395GjhlQos2V&X-Amz-Signature=94cac53b61f58eda65027f269e621c68b2648fe9fd02d01bfb6034da4ae323d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
