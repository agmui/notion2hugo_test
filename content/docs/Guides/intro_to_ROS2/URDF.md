---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2025-08-02T06:32:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2025-08-02T06:32:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

[https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf](https://articulatedrobotics.xyz/tutorials/ready-for-ros/urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPVNM54%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBq5facW2nBFaGcrGKHcfsZDM6MRR5qdT9IUi%2F%2F6soDYAiAzYhFP0sZ4i0vA0ze9bIdfLzDYew9ipWjwwByYz0DQvyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMhyDP2NhUpUjO1xNiKtwDa06jRR8ymCctb%2BVg5EnA%2BQZ7LXY5YhY4uCWuC88yn4yuN%2BUBjOr1qy0gIW8bjfScFkz99GH2%2FSEze3%2F9KQtLaBTJPQKeOOHGRgsPQg0%2BMZ5A400MgND6KI5AOle2r8UEDQLh3yt5uyZ94uY%2FlajOq7JHbNVsoygVh4j07l7Z7xDaUgOTccD7Rc9WAFvOIDYtsRwy850fRnvYch2MqUfj60EgVTI8%2F3WFhkMK%2FVx1aP9klJ4SIifYAJkw5cIZ%2BBXcgmOboxXdGc8DiTr9UWZA6u3QPvyNR3GOtXIKUT1cEVH6kRdE1FDrw6glejGANfX%2BTE0NubK5WKxqKthaozHZZ7nCa4vF53gy%2FtowfNlqVdYu9k%2FjX%2Bn3P07xElqN2KzSzg4fO3RM8W0YaL6HrzQRV4bgAmVPe%2FZRNOeholU02x2PHYAUAz7BedMgB3JAkUfDL8LDie6jRJZaSXEPAEunTxjr3wyjGoSLvOhVYYEWpzJLH7HgzRg58VY3XkKRACGxCM0Di7uS6a0wKYQY7kXymyM3WNF913u9x61o2RkvszJwJayIhwL6DvxFFIMa9YngzQBT3%2F3wa9hI%2F2iX2yt8K%2B49o5AVrV1tZeJol7Mp51ym7pFd77Sz5hKLJgAwnvC2xAY6pgFYFR%2B3nED2znAC%2FyIgrsWwwlDKf0bWnqeXw%2FIcUf56k0zLB7k%2BL0BfxpDJ1icFmI3Xh6R4MILc9QW9yylRkvhkd5%2Bm6DiZGf1e8kfloVaJqnmex4%2BlAQ9U2Q815%2FfcJYhFOPJXnUBkHtMYlymFk6p6R%2FEw0fUlxBuolbmJ32J2I9q6Z2vN7vIfITzFaAiWMO4S2px%2FwbhlPg8WO%2B9hIxrdruWiR4hX&X-Amz-Signature=7103a5215ca11464efb2eba658bd73c584ffae1a0830a48b14ea2c42bff8e79d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPVNM54%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBq5facW2nBFaGcrGKHcfsZDM6MRR5qdT9IUi%2F%2F6soDYAiAzYhFP0sZ4i0vA0ze9bIdfLzDYew9ipWjwwByYz0DQvyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMhyDP2NhUpUjO1xNiKtwDa06jRR8ymCctb%2BVg5EnA%2BQZ7LXY5YhY4uCWuC88yn4yuN%2BUBjOr1qy0gIW8bjfScFkz99GH2%2FSEze3%2F9KQtLaBTJPQKeOOHGRgsPQg0%2BMZ5A400MgND6KI5AOle2r8UEDQLh3yt5uyZ94uY%2FlajOq7JHbNVsoygVh4j07l7Z7xDaUgOTccD7Rc9WAFvOIDYtsRwy850fRnvYch2MqUfj60EgVTI8%2F3WFhkMK%2FVx1aP9klJ4SIifYAJkw5cIZ%2BBXcgmOboxXdGc8DiTr9UWZA6u3QPvyNR3GOtXIKUT1cEVH6kRdE1FDrw6glejGANfX%2BTE0NubK5WKxqKthaozHZZ7nCa4vF53gy%2FtowfNlqVdYu9k%2FjX%2Bn3P07xElqN2KzSzg4fO3RM8W0YaL6HrzQRV4bgAmVPe%2FZRNOeholU02x2PHYAUAz7BedMgB3JAkUfDL8LDie6jRJZaSXEPAEunTxjr3wyjGoSLvOhVYYEWpzJLH7HgzRg58VY3XkKRACGxCM0Di7uS6a0wKYQY7kXymyM3WNF913u9x61o2RkvszJwJayIhwL6DvxFFIMa9YngzQBT3%2F3wa9hI%2F2iX2yt8K%2B49o5AVrV1tZeJol7Mp51ym7pFd77Sz5hKLJgAwnvC2xAY6pgFYFR%2B3nED2znAC%2FyIgrsWwwlDKf0bWnqeXw%2FIcUf56k0zLB7k%2BL0BfxpDJ1icFmI3Xh6R4MILc9QW9yylRkvhkd5%2Bm6DiZGf1e8kfloVaJqnmex4%2BlAQ9U2Q815%2FfcJYhFOPJXnUBkHtMYlymFk6p6R%2FEw0fUlxBuolbmJ32J2I9q6Z2vN7vIfITzFaAiWMO4S2px%2FwbhlPg8WO%2B9hIxrdruWiR4hX&X-Amz-Signature=0476adb07d3949f7aac10c4c4cbed2f0d5dbd3cb986a49a345d5c76011ebb3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
