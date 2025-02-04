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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLEUMPZF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEw2QpUt%2FT%2FfQiTIdwCF%2B1vpDZ%2FoQiDLUafPKaGkV2dOAiANWmF9RXNiwGC1VWbkGqFlv5KiPXF%2FW8IvU2NBb1%2FXhCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIuDqCqvKQGtsEay%2BKtwD%2BofwJ%2BxWSBpdCOK092i%2F4pj78XCv4k6uL6klXxybw0WARG4YkznuENoe2WNjnPNdzbJhyBeYswmxMd8N1U3HJZKWIPMjhHLmWFkiNMb1NPtWGrs1JSteA4YfcFLzL2JTIYxelqPDdscX7LjvvV0VKUKS5OgWY%2F%2F2XWifM1U07lecTvqBunmOfd9wCuUdiOwTUliK8BhUoBNeGD1Pi03DyG8PuFhKbgYSs41hNIPow2G8zjOR%2FudvtPMn947wSYoDzik1%2Bb0VRSNPOIh7PFiIjxDwowppDe8yjc1xG5o9VhqOElmsucpP1BIwehDJlZDZVuohLvLstowokG5hy7K0wMbVo2WZIuvUI7K%2Fw5Qxtzrs2oReMPIe1xgrZN5%2B71sGVLr02AszBQ8zyNZFoGjjf9op0ew5ZbYiFOiB8VGBY47isn%2BzWr2TZNBIrig1RQh7uN0SPJJMX0Mxuk1mG9JftdWt%2FI42J2%2F17YgirC6b032xuwu0Ci0pk3T2TvOBjd%2F1C7%2BnCJBbGKsVSfoOZLAErGKdospEpvGKk3eR1HucbA8m7l%2F7ocgX8adHnSpI9iNySjgwp%2FUaInlQ4AupzuQosWAPnodjxv27kpS%2B6sPBObzVtdHXxA6%2BLkttYC4wv5OHvQY6pgFLMGj%2BWzvLWYvHsHvDtb45%2BEK1rROWRR6DlqclQvbF3xQVH9NiB523MIBLwEaZob0%2BHpBbwG386LVGGPy3%2BIwxj9%2BnTBxOJofv%2B7fa1AoxLPmtkym2mrOa4WA%2Fu0wheWAF%2F%2Bb%2FGyhGH5cwDlBVAiS4H1lo%2FgJo32sHsoXia1Fub0jG%2BAWnEQpFaJj3GoTGK8wSrhKPcEGY779VaNJao0O4rkSIyDEV&X-Amz-Signature=234908016016278a7aecf570b01bee6789c7549e1f9498539c31d490174ac819&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLEUMPZF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEw2QpUt%2FT%2FfQiTIdwCF%2B1vpDZ%2FoQiDLUafPKaGkV2dOAiANWmF9RXNiwGC1VWbkGqFlv5KiPXF%2FW8IvU2NBb1%2FXhCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIuDqCqvKQGtsEay%2BKtwD%2BofwJ%2BxWSBpdCOK092i%2F4pj78XCv4k6uL6klXxybw0WARG4YkznuENoe2WNjnPNdzbJhyBeYswmxMd8N1U3HJZKWIPMjhHLmWFkiNMb1NPtWGrs1JSteA4YfcFLzL2JTIYxelqPDdscX7LjvvV0VKUKS5OgWY%2F%2F2XWifM1U07lecTvqBunmOfd9wCuUdiOwTUliK8BhUoBNeGD1Pi03DyG8PuFhKbgYSs41hNIPow2G8zjOR%2FudvtPMn947wSYoDzik1%2Bb0VRSNPOIh7PFiIjxDwowppDe8yjc1xG5o9VhqOElmsucpP1BIwehDJlZDZVuohLvLstowokG5hy7K0wMbVo2WZIuvUI7K%2Fw5Qxtzrs2oReMPIe1xgrZN5%2B71sGVLr02AszBQ8zyNZFoGjjf9op0ew5ZbYiFOiB8VGBY47isn%2BzWr2TZNBIrig1RQh7uN0SPJJMX0Mxuk1mG9JftdWt%2FI42J2%2F17YgirC6b032xuwu0Ci0pk3T2TvOBjd%2F1C7%2BnCJBbGKsVSfoOZLAErGKdospEpvGKk3eR1HucbA8m7l%2F7ocgX8adHnSpI9iNySjgwp%2FUaInlQ4AupzuQosWAPnodjxv27kpS%2B6sPBObzVtdHXxA6%2BLkttYC4wv5OHvQY6pgFLMGj%2BWzvLWYvHsHvDtb45%2BEK1rROWRR6DlqclQvbF3xQVH9NiB523MIBLwEaZob0%2BHpBbwG386LVGGPy3%2BIwxj9%2BnTBxOJofv%2B7fa1AoxLPmtkym2mrOa4WA%2Fu0wheWAF%2F%2Bb%2FGyhGH5cwDlBVAiS4H1lo%2FgJo32sHsoXia1Fub0jG%2BAWnEQpFaJj3GoTGK8wSrhKPcEGY779VaNJao0O4rkSIyDEV&X-Amz-Signature=0013cf419d6b7920a804ec41c9edb929e33297efaddda6eb10323110cb6969ca&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLEUMPZF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEw2QpUt%2FT%2FfQiTIdwCF%2B1vpDZ%2FoQiDLUafPKaGkV2dOAiANWmF9RXNiwGC1VWbkGqFlv5KiPXF%2FW8IvU2NBb1%2FXhCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIuDqCqvKQGtsEay%2BKtwD%2BofwJ%2BxWSBpdCOK092i%2F4pj78XCv4k6uL6klXxybw0WARG4YkznuENoe2WNjnPNdzbJhyBeYswmxMd8N1U3HJZKWIPMjhHLmWFkiNMb1NPtWGrs1JSteA4YfcFLzL2JTIYxelqPDdscX7LjvvV0VKUKS5OgWY%2F%2F2XWifM1U07lecTvqBunmOfd9wCuUdiOwTUliK8BhUoBNeGD1Pi03DyG8PuFhKbgYSs41hNIPow2G8zjOR%2FudvtPMn947wSYoDzik1%2Bb0VRSNPOIh7PFiIjxDwowppDe8yjc1xG5o9VhqOElmsucpP1BIwehDJlZDZVuohLvLstowokG5hy7K0wMbVo2WZIuvUI7K%2Fw5Qxtzrs2oReMPIe1xgrZN5%2B71sGVLr02AszBQ8zyNZFoGjjf9op0ew5ZbYiFOiB8VGBY47isn%2BzWr2TZNBIrig1RQh7uN0SPJJMX0Mxuk1mG9JftdWt%2FI42J2%2F17YgirC6b032xuwu0Ci0pk3T2TvOBjd%2F1C7%2BnCJBbGKsVSfoOZLAErGKdospEpvGKk3eR1HucbA8m7l%2F7ocgX8adHnSpI9iNySjgwp%2FUaInlQ4AupzuQosWAPnodjxv27kpS%2B6sPBObzVtdHXxA6%2BLkttYC4wv5OHvQY6pgFLMGj%2BWzvLWYvHsHvDtb45%2BEK1rROWRR6DlqclQvbF3xQVH9NiB523MIBLwEaZob0%2BHpBbwG386LVGGPy3%2BIwxj9%2BnTBxOJofv%2B7fa1AoxLPmtkym2mrOa4WA%2Fu0wheWAF%2F%2Bb%2FGyhGH5cwDlBVAiS4H1lo%2FgJo32sHsoXia1Fub0jG%2BAWnEQpFaJj3GoTGK8wSrhKPcEGY779VaNJao0O4rkSIyDEV&X-Amz-Signature=a413f8bdcbced9830b6b025414b17fff26ca7984ee410d5b2a2822d8eb22db60&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLEUMPZF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEw2QpUt%2FT%2FfQiTIdwCF%2B1vpDZ%2FoQiDLUafPKaGkV2dOAiANWmF9RXNiwGC1VWbkGqFlv5KiPXF%2FW8IvU2NBb1%2FXhCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIuDqCqvKQGtsEay%2BKtwD%2BofwJ%2BxWSBpdCOK092i%2F4pj78XCv4k6uL6klXxybw0WARG4YkznuENoe2WNjnPNdzbJhyBeYswmxMd8N1U3HJZKWIPMjhHLmWFkiNMb1NPtWGrs1JSteA4YfcFLzL2JTIYxelqPDdscX7LjvvV0VKUKS5OgWY%2F%2F2XWifM1U07lecTvqBunmOfd9wCuUdiOwTUliK8BhUoBNeGD1Pi03DyG8PuFhKbgYSs41hNIPow2G8zjOR%2FudvtPMn947wSYoDzik1%2Bb0VRSNPOIh7PFiIjxDwowppDe8yjc1xG5o9VhqOElmsucpP1BIwehDJlZDZVuohLvLstowokG5hy7K0wMbVo2WZIuvUI7K%2Fw5Qxtzrs2oReMPIe1xgrZN5%2B71sGVLr02AszBQ8zyNZFoGjjf9op0ew5ZbYiFOiB8VGBY47isn%2BzWr2TZNBIrig1RQh7uN0SPJJMX0Mxuk1mG9JftdWt%2FI42J2%2F17YgirC6b032xuwu0Ci0pk3T2TvOBjd%2F1C7%2BnCJBbGKsVSfoOZLAErGKdospEpvGKk3eR1HucbA8m7l%2F7ocgX8adHnSpI9iNySjgwp%2FUaInlQ4AupzuQosWAPnodjxv27kpS%2B6sPBObzVtdHXxA6%2BLkttYC4wv5OHvQY6pgFLMGj%2BWzvLWYvHsHvDtb45%2BEK1rROWRR6DlqclQvbF3xQVH9NiB523MIBLwEaZob0%2BHpBbwG386LVGGPy3%2BIwxj9%2BnTBxOJofv%2B7fa1AoxLPmtkym2mrOa4WA%2Fu0wheWAF%2F%2Bb%2FGyhGH5cwDlBVAiS4H1lo%2FgJo32sHsoXia1Fub0jG%2BAWnEQpFaJj3GoTGK8wSrhKPcEGY779VaNJao0O4rkSIyDEV&X-Amz-Signature=80359af9eefe0c48b83bc600fd07165c2ee3f92e185114865c9df2c2388359e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLEUMPZF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEw2QpUt%2FT%2FfQiTIdwCF%2B1vpDZ%2FoQiDLUafPKaGkV2dOAiANWmF9RXNiwGC1VWbkGqFlv5KiPXF%2FW8IvU2NBb1%2FXhCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIuDqCqvKQGtsEay%2BKtwD%2BofwJ%2BxWSBpdCOK092i%2F4pj78XCv4k6uL6klXxybw0WARG4YkznuENoe2WNjnPNdzbJhyBeYswmxMd8N1U3HJZKWIPMjhHLmWFkiNMb1NPtWGrs1JSteA4YfcFLzL2JTIYxelqPDdscX7LjvvV0VKUKS5OgWY%2F%2F2XWifM1U07lecTvqBunmOfd9wCuUdiOwTUliK8BhUoBNeGD1Pi03DyG8PuFhKbgYSs41hNIPow2G8zjOR%2FudvtPMn947wSYoDzik1%2Bb0VRSNPOIh7PFiIjxDwowppDe8yjc1xG5o9VhqOElmsucpP1BIwehDJlZDZVuohLvLstowokG5hy7K0wMbVo2WZIuvUI7K%2Fw5Qxtzrs2oReMPIe1xgrZN5%2B71sGVLr02AszBQ8zyNZFoGjjf9op0ew5ZbYiFOiB8VGBY47isn%2BzWr2TZNBIrig1RQh7uN0SPJJMX0Mxuk1mG9JftdWt%2FI42J2%2F17YgirC6b032xuwu0Ci0pk3T2TvOBjd%2F1C7%2BnCJBbGKsVSfoOZLAErGKdospEpvGKk3eR1HucbA8m7l%2F7ocgX8adHnSpI9iNySjgwp%2FUaInlQ4AupzuQosWAPnodjxv27kpS%2B6sPBObzVtdHXxA6%2BLkttYC4wv5OHvQY6pgFLMGj%2BWzvLWYvHsHvDtb45%2BEK1rROWRR6DlqclQvbF3xQVH9NiB523MIBLwEaZob0%2BHpBbwG386LVGGPy3%2BIwxj9%2BnTBxOJofv%2B7fa1AoxLPmtkym2mrOa4WA%2Fu0wheWAF%2F%2Bb%2FGyhGH5cwDlBVAiS4H1lo%2FgJo32sHsoXia1Fub0jG%2BAWnEQpFaJj3GoTGK8wSrhKPcEGY779VaNJao0O4rkSIyDEV&X-Amz-Signature=d6813406a3913deacf54ee166e28ce833b4361e7ac26226f4a525b48e1b12f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLEUMPZF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEw2QpUt%2FT%2FfQiTIdwCF%2B1vpDZ%2FoQiDLUafPKaGkV2dOAiANWmF9RXNiwGC1VWbkGqFlv5KiPXF%2FW8IvU2NBb1%2FXhCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIuDqCqvKQGtsEay%2BKtwD%2BofwJ%2BxWSBpdCOK092i%2F4pj78XCv4k6uL6klXxybw0WARG4YkznuENoe2WNjnPNdzbJhyBeYswmxMd8N1U3HJZKWIPMjhHLmWFkiNMb1NPtWGrs1JSteA4YfcFLzL2JTIYxelqPDdscX7LjvvV0VKUKS5OgWY%2F%2F2XWifM1U07lecTvqBunmOfd9wCuUdiOwTUliK8BhUoBNeGD1Pi03DyG8PuFhKbgYSs41hNIPow2G8zjOR%2FudvtPMn947wSYoDzik1%2Bb0VRSNPOIh7PFiIjxDwowppDe8yjc1xG5o9VhqOElmsucpP1BIwehDJlZDZVuohLvLstowokG5hy7K0wMbVo2WZIuvUI7K%2Fw5Qxtzrs2oReMPIe1xgrZN5%2B71sGVLr02AszBQ8zyNZFoGjjf9op0ew5ZbYiFOiB8VGBY47isn%2BzWr2TZNBIrig1RQh7uN0SPJJMX0Mxuk1mG9JftdWt%2FI42J2%2F17YgirC6b032xuwu0Ci0pk3T2TvOBjd%2F1C7%2BnCJBbGKsVSfoOZLAErGKdospEpvGKk3eR1HucbA8m7l%2F7ocgX8adHnSpI9iNySjgwp%2FUaInlQ4AupzuQosWAPnodjxv27kpS%2B6sPBObzVtdHXxA6%2BLkttYC4wv5OHvQY6pgFLMGj%2BWzvLWYvHsHvDtb45%2BEK1rROWRR6DlqclQvbF3xQVH9NiB523MIBLwEaZob0%2BHpBbwG386LVGGPy3%2BIwxj9%2BnTBxOJofv%2B7fa1AoxLPmtkym2mrOa4WA%2Fu0wheWAF%2F%2Bb%2FGyhGH5cwDlBVAiS4H1lo%2FgJo32sHsoXia1Fub0jG%2BAWnEQpFaJj3GoTGK8wSrhKPcEGY779VaNJao0O4rkSIyDEV&X-Amz-Signature=95d16e0dac115ff7634a25ea8f4a668d3cf351df657150f41d57d6be840fa3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLEUMPZF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEw2QpUt%2FT%2FfQiTIdwCF%2B1vpDZ%2FoQiDLUafPKaGkV2dOAiANWmF9RXNiwGC1VWbkGqFlv5KiPXF%2FW8IvU2NBb1%2FXhCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIuDqCqvKQGtsEay%2BKtwD%2BofwJ%2BxWSBpdCOK092i%2F4pj78XCv4k6uL6klXxybw0WARG4YkznuENoe2WNjnPNdzbJhyBeYswmxMd8N1U3HJZKWIPMjhHLmWFkiNMb1NPtWGrs1JSteA4YfcFLzL2JTIYxelqPDdscX7LjvvV0VKUKS5OgWY%2F%2F2XWifM1U07lecTvqBunmOfd9wCuUdiOwTUliK8BhUoBNeGD1Pi03DyG8PuFhKbgYSs41hNIPow2G8zjOR%2FudvtPMn947wSYoDzik1%2Bb0VRSNPOIh7PFiIjxDwowppDe8yjc1xG5o9VhqOElmsucpP1BIwehDJlZDZVuohLvLstowokG5hy7K0wMbVo2WZIuvUI7K%2Fw5Qxtzrs2oReMPIe1xgrZN5%2B71sGVLr02AszBQ8zyNZFoGjjf9op0ew5ZbYiFOiB8VGBY47isn%2BzWr2TZNBIrig1RQh7uN0SPJJMX0Mxuk1mG9JftdWt%2FI42J2%2F17YgirC6b032xuwu0Ci0pk3T2TvOBjd%2F1C7%2BnCJBbGKsVSfoOZLAErGKdospEpvGKk3eR1HucbA8m7l%2F7ocgX8adHnSpI9iNySjgwp%2FUaInlQ4AupzuQosWAPnodjxv27kpS%2B6sPBObzVtdHXxA6%2BLkttYC4wv5OHvQY6pgFLMGj%2BWzvLWYvHsHvDtb45%2BEK1rROWRR6DlqclQvbF3xQVH9NiB523MIBLwEaZob0%2BHpBbwG386LVGGPy3%2BIwxj9%2BnTBxOJofv%2B7fa1AoxLPmtkym2mrOa4WA%2Fu0wheWAF%2F%2Bb%2FGyhGH5cwDlBVAiS4H1lo%2FgJo32sHsoXia1Fub0jG%2BAWnEQpFaJj3GoTGK8wSrhKPcEGY779VaNJao0O4rkSIyDEV&X-Amz-Signature=1592f2f20389e8531f77fbd8c55707a549b412a521c20ceef051f86dba3a88ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLEUMPZF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEw2QpUt%2FT%2FfQiTIdwCF%2B1vpDZ%2FoQiDLUafPKaGkV2dOAiANWmF9RXNiwGC1VWbkGqFlv5KiPXF%2FW8IvU2NBb1%2FXhCr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMIuDqCqvKQGtsEay%2BKtwD%2BofwJ%2BxWSBpdCOK092i%2F4pj78XCv4k6uL6klXxybw0WARG4YkznuENoe2WNjnPNdzbJhyBeYswmxMd8N1U3HJZKWIPMjhHLmWFkiNMb1NPtWGrs1JSteA4YfcFLzL2JTIYxelqPDdscX7LjvvV0VKUKS5OgWY%2F%2F2XWifM1U07lecTvqBunmOfd9wCuUdiOwTUliK8BhUoBNeGD1Pi03DyG8PuFhKbgYSs41hNIPow2G8zjOR%2FudvtPMn947wSYoDzik1%2Bb0VRSNPOIh7PFiIjxDwowppDe8yjc1xG5o9VhqOElmsucpP1BIwehDJlZDZVuohLvLstowokG5hy7K0wMbVo2WZIuvUI7K%2Fw5Qxtzrs2oReMPIe1xgrZN5%2B71sGVLr02AszBQ8zyNZFoGjjf9op0ew5ZbYiFOiB8VGBY47isn%2BzWr2TZNBIrig1RQh7uN0SPJJMX0Mxuk1mG9JftdWt%2FI42J2%2F17YgirC6b032xuwu0Ci0pk3T2TvOBjd%2F1C7%2BnCJBbGKsVSfoOZLAErGKdospEpvGKk3eR1HucbA8m7l%2F7ocgX8adHnSpI9iNySjgwp%2FUaInlQ4AupzuQosWAPnodjxv27kpS%2B6sPBObzVtdHXxA6%2BLkttYC4wv5OHvQY6pgFLMGj%2BWzvLWYvHsHvDtb45%2BEK1rROWRR6DlqclQvbF3xQVH9NiB523MIBLwEaZob0%2BHpBbwG386LVGGPy3%2BIwxj9%2BnTBxOJofv%2B7fa1AoxLPmtkym2mrOa4WA%2Fu0wheWAF%2F%2Bb%2FGyhGH5cwDlBVAiS4H1lo%2FgJo32sHsoXia1Fub0jG%2BAWnEQpFaJj3GoTGK8wSrhKPcEGY779VaNJao0O4rkSIyDEV&X-Amz-Signature=a8c52d3c152a365f682875585437eaa576c5ce501b1b55fe45430b0983974ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
