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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72SWPOL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3i%2B2j8FlNicNxxQhyz%2BWa06NIkLPOMjqy8QzlCxxBQIgMlKG311G6FqP0ENss5pueHogPuwlhPG%2FFdRKAp8hjgMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDI2e2G9PL2q8T8uMCSrcA4mNhfkt2g1L49T8uhq%2FELNN3IVwFlsj%2BkoJboQcVi%2FN41WEyjmzcK4eh0LPuIGGSMJzhbxMBJMwpYb7BtWWycgmIN4%2FXbs7p3FSLoTvb19IOIGPtOQPbFSgmiX7mqtdYN0uFy29ANxUl3I0M%2FqpfHuRCCW4RLTiS4JW2ph9ammE4NKN9qdJJMMiXEKMaFSV03VPhLBGN76HcEoqdIf%2BjdmK1m9jU5YrMilCWUyQnD1Q18eEJhaGa%2FpzWo5lt2bdUeDcWMrioryE8jc0XjAWadau7hUs5S8UoBGbxQz348pLB2bREQF3xdHS84vGSYCXnfailswGEyqbGEbFBJQYshimJF%2F8zo6j7IhF3IxXCAiEnDKp1v1lc4k1TGKQmXLdAFkAzw4mC8MwE4X5%2BQ9B6y064r5AfbFM8XVgpkWnDEHMqzSgaoRaWoxu28TsqHBCMpKBfw1KniXazghbT%2FJ%2B%2BUycXJQtLjAxQS5OgDjpcKvOepMMm3jz7dGV90znUic%2B3wxIqJpIeHsZwfUSkz%2FlPQgNj%2Fi77rQV9%2F31TrcHlBb8R27AIZ5e29Nm0xQB%2BRtRKUDClPnWL%2BIZ6y%2FqiOWXXvhW7DBC47NUPZHCyJRM%2FYk7FKfSGX7ckbKmQ5pWMJ6Okr8GOqUBeUZzqu3m1rNlyyUtirgHeMhWSwHYSk4PZWAkj%2FIqp5bEkApvE7D3Bg4ufWxyNES5l8aPXKywR85yQiZkGhIIMVttaWV%2Beru0hbCMj4NWHhzuoJBu5cIids35MqVx%2FsJft6y4Ykzq9fsoiC8rVz0XghJYDNgpWwmudPhEl%2Fg2MtWuGMTYkJLG3gI2KD7BIANe%2F%2BK%2Bal9OiA8jfXUkzNpiSD1g%2B9If&X-Amz-Signature=9f0565d40153134e3311cf5f671d25dfa6c3628e19c2bbb20e32d0514c22e8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72SWPOL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3i%2B2j8FlNicNxxQhyz%2BWa06NIkLPOMjqy8QzlCxxBQIgMlKG311G6FqP0ENss5pueHogPuwlhPG%2FFdRKAp8hjgMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDI2e2G9PL2q8T8uMCSrcA4mNhfkt2g1L49T8uhq%2FELNN3IVwFlsj%2BkoJboQcVi%2FN41WEyjmzcK4eh0LPuIGGSMJzhbxMBJMwpYb7BtWWycgmIN4%2FXbs7p3FSLoTvb19IOIGPtOQPbFSgmiX7mqtdYN0uFy29ANxUl3I0M%2FqpfHuRCCW4RLTiS4JW2ph9ammE4NKN9qdJJMMiXEKMaFSV03VPhLBGN76HcEoqdIf%2BjdmK1m9jU5YrMilCWUyQnD1Q18eEJhaGa%2FpzWo5lt2bdUeDcWMrioryE8jc0XjAWadau7hUs5S8UoBGbxQz348pLB2bREQF3xdHS84vGSYCXnfailswGEyqbGEbFBJQYshimJF%2F8zo6j7IhF3IxXCAiEnDKp1v1lc4k1TGKQmXLdAFkAzw4mC8MwE4X5%2BQ9B6y064r5AfbFM8XVgpkWnDEHMqzSgaoRaWoxu28TsqHBCMpKBfw1KniXazghbT%2FJ%2B%2BUycXJQtLjAxQS5OgDjpcKvOepMMm3jz7dGV90znUic%2B3wxIqJpIeHsZwfUSkz%2FlPQgNj%2Fi77rQV9%2F31TrcHlBb8R27AIZ5e29Nm0xQB%2BRtRKUDClPnWL%2BIZ6y%2FqiOWXXvhW7DBC47NUPZHCyJRM%2FYk7FKfSGX7ckbKmQ5pWMJ6Okr8GOqUBeUZzqu3m1rNlyyUtirgHeMhWSwHYSk4PZWAkj%2FIqp5bEkApvE7D3Bg4ufWxyNES5l8aPXKywR85yQiZkGhIIMVttaWV%2Beru0hbCMj4NWHhzuoJBu5cIids35MqVx%2FsJft6y4Ykzq9fsoiC8rVz0XghJYDNgpWwmudPhEl%2Fg2MtWuGMTYkJLG3gI2KD7BIANe%2F%2BK%2Bal9OiA8jfXUkzNpiSD1g%2B9If&X-Amz-Signature=8228a5c5fe8c16e98279b246688d4dd19864463e88bcc8f69e8b41fc905256c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72SWPOL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3i%2B2j8FlNicNxxQhyz%2BWa06NIkLPOMjqy8QzlCxxBQIgMlKG311G6FqP0ENss5pueHogPuwlhPG%2FFdRKAp8hjgMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDI2e2G9PL2q8T8uMCSrcA4mNhfkt2g1L49T8uhq%2FELNN3IVwFlsj%2BkoJboQcVi%2FN41WEyjmzcK4eh0LPuIGGSMJzhbxMBJMwpYb7BtWWycgmIN4%2FXbs7p3FSLoTvb19IOIGPtOQPbFSgmiX7mqtdYN0uFy29ANxUl3I0M%2FqpfHuRCCW4RLTiS4JW2ph9ammE4NKN9qdJJMMiXEKMaFSV03VPhLBGN76HcEoqdIf%2BjdmK1m9jU5YrMilCWUyQnD1Q18eEJhaGa%2FpzWo5lt2bdUeDcWMrioryE8jc0XjAWadau7hUs5S8UoBGbxQz348pLB2bREQF3xdHS84vGSYCXnfailswGEyqbGEbFBJQYshimJF%2F8zo6j7IhF3IxXCAiEnDKp1v1lc4k1TGKQmXLdAFkAzw4mC8MwE4X5%2BQ9B6y064r5AfbFM8XVgpkWnDEHMqzSgaoRaWoxu28TsqHBCMpKBfw1KniXazghbT%2FJ%2B%2BUycXJQtLjAxQS5OgDjpcKvOepMMm3jz7dGV90znUic%2B3wxIqJpIeHsZwfUSkz%2FlPQgNj%2Fi77rQV9%2F31TrcHlBb8R27AIZ5e29Nm0xQB%2BRtRKUDClPnWL%2BIZ6y%2FqiOWXXvhW7DBC47NUPZHCyJRM%2FYk7FKfSGX7ckbKmQ5pWMJ6Okr8GOqUBeUZzqu3m1rNlyyUtirgHeMhWSwHYSk4PZWAkj%2FIqp5bEkApvE7D3Bg4ufWxyNES5l8aPXKywR85yQiZkGhIIMVttaWV%2Beru0hbCMj4NWHhzuoJBu5cIids35MqVx%2FsJft6y4Ykzq9fsoiC8rVz0XghJYDNgpWwmudPhEl%2Fg2MtWuGMTYkJLG3gI2KD7BIANe%2F%2BK%2Bal9OiA8jfXUkzNpiSD1g%2B9If&X-Amz-Signature=167ed681a371531005fecb81032b3c960d3f86b8072da1cca557fd4fcc707677&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72SWPOL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3i%2B2j8FlNicNxxQhyz%2BWa06NIkLPOMjqy8QzlCxxBQIgMlKG311G6FqP0ENss5pueHogPuwlhPG%2FFdRKAp8hjgMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDI2e2G9PL2q8T8uMCSrcA4mNhfkt2g1L49T8uhq%2FELNN3IVwFlsj%2BkoJboQcVi%2FN41WEyjmzcK4eh0LPuIGGSMJzhbxMBJMwpYb7BtWWycgmIN4%2FXbs7p3FSLoTvb19IOIGPtOQPbFSgmiX7mqtdYN0uFy29ANxUl3I0M%2FqpfHuRCCW4RLTiS4JW2ph9ammE4NKN9qdJJMMiXEKMaFSV03VPhLBGN76HcEoqdIf%2BjdmK1m9jU5YrMilCWUyQnD1Q18eEJhaGa%2FpzWo5lt2bdUeDcWMrioryE8jc0XjAWadau7hUs5S8UoBGbxQz348pLB2bREQF3xdHS84vGSYCXnfailswGEyqbGEbFBJQYshimJF%2F8zo6j7IhF3IxXCAiEnDKp1v1lc4k1TGKQmXLdAFkAzw4mC8MwE4X5%2BQ9B6y064r5AfbFM8XVgpkWnDEHMqzSgaoRaWoxu28TsqHBCMpKBfw1KniXazghbT%2FJ%2B%2BUycXJQtLjAxQS5OgDjpcKvOepMMm3jz7dGV90znUic%2B3wxIqJpIeHsZwfUSkz%2FlPQgNj%2Fi77rQV9%2F31TrcHlBb8R27AIZ5e29Nm0xQB%2BRtRKUDClPnWL%2BIZ6y%2FqiOWXXvhW7DBC47NUPZHCyJRM%2FYk7FKfSGX7ckbKmQ5pWMJ6Okr8GOqUBeUZzqu3m1rNlyyUtirgHeMhWSwHYSk4PZWAkj%2FIqp5bEkApvE7D3Bg4ufWxyNES5l8aPXKywR85yQiZkGhIIMVttaWV%2Beru0hbCMj4NWHhzuoJBu5cIids35MqVx%2FsJft6y4Ykzq9fsoiC8rVz0XghJYDNgpWwmudPhEl%2Fg2MtWuGMTYkJLG3gI2KD7BIANe%2F%2BK%2Bal9OiA8jfXUkzNpiSD1g%2B9If&X-Amz-Signature=e73261af1706729d1cbf74213a66c02926d8fc070aa42f782fc12dc34e0396d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72SWPOL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3i%2B2j8FlNicNxxQhyz%2BWa06NIkLPOMjqy8QzlCxxBQIgMlKG311G6FqP0ENss5pueHogPuwlhPG%2FFdRKAp8hjgMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDI2e2G9PL2q8T8uMCSrcA4mNhfkt2g1L49T8uhq%2FELNN3IVwFlsj%2BkoJboQcVi%2FN41WEyjmzcK4eh0LPuIGGSMJzhbxMBJMwpYb7BtWWycgmIN4%2FXbs7p3FSLoTvb19IOIGPtOQPbFSgmiX7mqtdYN0uFy29ANxUl3I0M%2FqpfHuRCCW4RLTiS4JW2ph9ammE4NKN9qdJJMMiXEKMaFSV03VPhLBGN76HcEoqdIf%2BjdmK1m9jU5YrMilCWUyQnD1Q18eEJhaGa%2FpzWo5lt2bdUeDcWMrioryE8jc0XjAWadau7hUs5S8UoBGbxQz348pLB2bREQF3xdHS84vGSYCXnfailswGEyqbGEbFBJQYshimJF%2F8zo6j7IhF3IxXCAiEnDKp1v1lc4k1TGKQmXLdAFkAzw4mC8MwE4X5%2BQ9B6y064r5AfbFM8XVgpkWnDEHMqzSgaoRaWoxu28TsqHBCMpKBfw1KniXazghbT%2FJ%2B%2BUycXJQtLjAxQS5OgDjpcKvOepMMm3jz7dGV90znUic%2B3wxIqJpIeHsZwfUSkz%2FlPQgNj%2Fi77rQV9%2F31TrcHlBb8R27AIZ5e29Nm0xQB%2BRtRKUDClPnWL%2BIZ6y%2FqiOWXXvhW7DBC47NUPZHCyJRM%2FYk7FKfSGX7ckbKmQ5pWMJ6Okr8GOqUBeUZzqu3m1rNlyyUtirgHeMhWSwHYSk4PZWAkj%2FIqp5bEkApvE7D3Bg4ufWxyNES5l8aPXKywR85yQiZkGhIIMVttaWV%2Beru0hbCMj4NWHhzuoJBu5cIids35MqVx%2FsJft6y4Ykzq9fsoiC8rVz0XghJYDNgpWwmudPhEl%2Fg2MtWuGMTYkJLG3gI2KD7BIANe%2F%2BK%2Bal9OiA8jfXUkzNpiSD1g%2B9If&X-Amz-Signature=2cab9953821e37cc1347994692858a9cd5ef9f51be30e34c8bdfaa4fd71cb27a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72SWPOL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3i%2B2j8FlNicNxxQhyz%2BWa06NIkLPOMjqy8QzlCxxBQIgMlKG311G6FqP0ENss5pueHogPuwlhPG%2FFdRKAp8hjgMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDI2e2G9PL2q8T8uMCSrcA4mNhfkt2g1L49T8uhq%2FELNN3IVwFlsj%2BkoJboQcVi%2FN41WEyjmzcK4eh0LPuIGGSMJzhbxMBJMwpYb7BtWWycgmIN4%2FXbs7p3FSLoTvb19IOIGPtOQPbFSgmiX7mqtdYN0uFy29ANxUl3I0M%2FqpfHuRCCW4RLTiS4JW2ph9ammE4NKN9qdJJMMiXEKMaFSV03VPhLBGN76HcEoqdIf%2BjdmK1m9jU5YrMilCWUyQnD1Q18eEJhaGa%2FpzWo5lt2bdUeDcWMrioryE8jc0XjAWadau7hUs5S8UoBGbxQz348pLB2bREQF3xdHS84vGSYCXnfailswGEyqbGEbFBJQYshimJF%2F8zo6j7IhF3IxXCAiEnDKp1v1lc4k1TGKQmXLdAFkAzw4mC8MwE4X5%2BQ9B6y064r5AfbFM8XVgpkWnDEHMqzSgaoRaWoxu28TsqHBCMpKBfw1KniXazghbT%2FJ%2B%2BUycXJQtLjAxQS5OgDjpcKvOepMMm3jz7dGV90znUic%2B3wxIqJpIeHsZwfUSkz%2FlPQgNj%2Fi77rQV9%2F31TrcHlBb8R27AIZ5e29Nm0xQB%2BRtRKUDClPnWL%2BIZ6y%2FqiOWXXvhW7DBC47NUPZHCyJRM%2FYk7FKfSGX7ckbKmQ5pWMJ6Okr8GOqUBeUZzqu3m1rNlyyUtirgHeMhWSwHYSk4PZWAkj%2FIqp5bEkApvE7D3Bg4ufWxyNES5l8aPXKywR85yQiZkGhIIMVttaWV%2Beru0hbCMj4NWHhzuoJBu5cIids35MqVx%2FsJft6y4Ykzq9fsoiC8rVz0XghJYDNgpWwmudPhEl%2Fg2MtWuGMTYkJLG3gI2KD7BIANe%2F%2BK%2Bal9OiA8jfXUkzNpiSD1g%2B9If&X-Amz-Signature=460da503ace181d76fc20a7e1a391c6d81a719b3c4297612d0c16f189a6c5b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72SWPOL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3i%2B2j8FlNicNxxQhyz%2BWa06NIkLPOMjqy8QzlCxxBQIgMlKG311G6FqP0ENss5pueHogPuwlhPG%2FFdRKAp8hjgMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDI2e2G9PL2q8T8uMCSrcA4mNhfkt2g1L49T8uhq%2FELNN3IVwFlsj%2BkoJboQcVi%2FN41WEyjmzcK4eh0LPuIGGSMJzhbxMBJMwpYb7BtWWycgmIN4%2FXbs7p3FSLoTvb19IOIGPtOQPbFSgmiX7mqtdYN0uFy29ANxUl3I0M%2FqpfHuRCCW4RLTiS4JW2ph9ammE4NKN9qdJJMMiXEKMaFSV03VPhLBGN76HcEoqdIf%2BjdmK1m9jU5YrMilCWUyQnD1Q18eEJhaGa%2FpzWo5lt2bdUeDcWMrioryE8jc0XjAWadau7hUs5S8UoBGbxQz348pLB2bREQF3xdHS84vGSYCXnfailswGEyqbGEbFBJQYshimJF%2F8zo6j7IhF3IxXCAiEnDKp1v1lc4k1TGKQmXLdAFkAzw4mC8MwE4X5%2BQ9B6y064r5AfbFM8XVgpkWnDEHMqzSgaoRaWoxu28TsqHBCMpKBfw1KniXazghbT%2FJ%2B%2BUycXJQtLjAxQS5OgDjpcKvOepMMm3jz7dGV90znUic%2B3wxIqJpIeHsZwfUSkz%2FlPQgNj%2Fi77rQV9%2F31TrcHlBb8R27AIZ5e29Nm0xQB%2BRtRKUDClPnWL%2BIZ6y%2FqiOWXXvhW7DBC47NUPZHCyJRM%2FYk7FKfSGX7ckbKmQ5pWMJ6Okr8GOqUBeUZzqu3m1rNlyyUtirgHeMhWSwHYSk4PZWAkj%2FIqp5bEkApvE7D3Bg4ufWxyNES5l8aPXKywR85yQiZkGhIIMVttaWV%2Beru0hbCMj4NWHhzuoJBu5cIids35MqVx%2FsJft6y4Ykzq9fsoiC8rVz0XghJYDNgpWwmudPhEl%2Fg2MtWuGMTYkJLG3gI2KD7BIANe%2F%2BK%2Bal9OiA8jfXUkzNpiSD1g%2B9If&X-Amz-Signature=14bea155358c9b9f35fe248f39a7f9db653a5e2e2856ba606b5ee9d8d0568d22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z72SWPOL%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T003843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC3i%2B2j8FlNicNxxQhyz%2BWa06NIkLPOMjqy8QzlCxxBQIgMlKG311G6FqP0ENss5pueHogPuwlhPG%2FFdRKAp8hjgMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDI2e2G9PL2q8T8uMCSrcA4mNhfkt2g1L49T8uhq%2FELNN3IVwFlsj%2BkoJboQcVi%2FN41WEyjmzcK4eh0LPuIGGSMJzhbxMBJMwpYb7BtWWycgmIN4%2FXbs7p3FSLoTvb19IOIGPtOQPbFSgmiX7mqtdYN0uFy29ANxUl3I0M%2FqpfHuRCCW4RLTiS4JW2ph9ammE4NKN9qdJJMMiXEKMaFSV03VPhLBGN76HcEoqdIf%2BjdmK1m9jU5YrMilCWUyQnD1Q18eEJhaGa%2FpzWo5lt2bdUeDcWMrioryE8jc0XjAWadau7hUs5S8UoBGbxQz348pLB2bREQF3xdHS84vGSYCXnfailswGEyqbGEbFBJQYshimJF%2F8zo6j7IhF3IxXCAiEnDKp1v1lc4k1TGKQmXLdAFkAzw4mC8MwE4X5%2BQ9B6y064r5AfbFM8XVgpkWnDEHMqzSgaoRaWoxu28TsqHBCMpKBfw1KniXazghbT%2FJ%2B%2BUycXJQtLjAxQS5OgDjpcKvOepMMm3jz7dGV90znUic%2B3wxIqJpIeHsZwfUSkz%2FlPQgNj%2Fi77rQV9%2F31TrcHlBb8R27AIZ5e29Nm0xQB%2BRtRKUDClPnWL%2BIZ6y%2FqiOWXXvhW7DBC47NUPZHCyJRM%2FYk7FKfSGX7ckbKmQ5pWMJ6Okr8GOqUBeUZzqu3m1rNlyyUtirgHeMhWSwHYSk4PZWAkj%2FIqp5bEkApvE7D3Bg4ufWxyNES5l8aPXKywR85yQiZkGhIIMVttaWV%2Beru0hbCMj4NWHhzuoJBu5cIids35MqVx%2FsJft6y4Ykzq9fsoiC8rVz0XghJYDNgpWwmudPhEl%2Fg2MtWuGMTYkJLG3gI2KD7BIANe%2F%2BK%2Bal9OiA8jfXUkzNpiSD1g%2B9If&X-Amz-Signature=6f25fde08a3bf65b01017f7e46db88b569becd8c6d16ab9a7d66c9d062aed922&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
