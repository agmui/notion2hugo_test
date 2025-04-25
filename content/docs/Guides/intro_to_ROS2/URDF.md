---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
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

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC476NG4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8ftOpln8Sj961VHkW379rLMOAGufqYU4Bvf7uD40AAIhAJBmU98d9Z9rRCw23Y9cqtYKv23QEp2hmYEhk6ZTztNuKv8DCC0QABoMNjM3NDIzMTgzODA1IgwK0FoGkGLj5mJ0rM4q3ANuiwFFP5eugkCpKkJqj9xNDNiSzTD4WBTTrsRiH0l%2Fd4xR1K%2B%2Bq2SiiwmvDk9SKY554tfYUkYqjS%2Bj9JXyP0JsdfXpWy1a%2B2zrE5NFvzCvPGModG9nNff5pKiSL608fHsDcjrKrs%2BOp7FouC%2F3rO6Q7FZ6X2HGt8qKcd%2BAN%2F2EPN3%2BfgySYHRxrqxE%2FZYGekycMQWILNT6ykGY2%2B8bsbEhMN%2Fvmx60jhro8%2FzKOPO0rQOnCwEU1Cra%2BjRRRQLqA79%2BctNvaQ2CKqXOXLdN2MdIiDdxBwwwHRyUrObyHgGVWDFs70trZttxe4LzPuXBEzUDysABe6hssIv%2FZvHvtkISncKBy37KrpLhBDyj9NygNUiV9hY4wvcayr%2BLU0vwL%2BvcsaP61gRY0pZe1RAnt5jCkWjBUfGWsZr86c8CWGHf2gXRUIFb6H9fUdUJ%2BXc%2FTsIbP8Kw1QBUFJgvZoNDB4g8FwwIGtzwBh2zW9hwbgGhWkZ5C3BXtP8TK9DlYGUb1abQNDszyi6b4O9FdeJl9RsP8kaNVk9o5xJBqAkuWA0XDuypNvNqtK1acot194SzlTSiSVjeeujOStF%2BtDVQcS8PJVVOrx%2BSCGG1mgfI0SuKQwJDYKPknHw%2F33IsxTCh9q3ABjqkAf0ZR7DhfK6YQQ4LJJVqdSKiUs3y02GIfj3DhPbQTvzdcjC3MY%2BhTFL7iXlddRGfWZHy3MN0HAZoqUlYRpAkonyqetmpv5Zm6w67BRLvD%2BK5hVjXyI65pwe1XRsI7%2FwOeZIXqfNT3FGXe%2FNZwZRY3JlASZLS2PPzdRUbhE%2FE43%2F46vZVFqY2h0129INKN6iGZvCIDn%2BT8%2F04E4w7k5IXUH01Fu5d&X-Amz-Signature=9d18243e54e5e29df6e3864993741ba7ff3b8a4a87e6de18c23762fd8d20f9b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC476NG4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDY8ftOpln8Sj961VHkW379rLMOAGufqYU4Bvf7uD40AAIhAJBmU98d9Z9rRCw23Y9cqtYKv23QEp2hmYEhk6ZTztNuKv8DCC0QABoMNjM3NDIzMTgzODA1IgwK0FoGkGLj5mJ0rM4q3ANuiwFFP5eugkCpKkJqj9xNDNiSzTD4WBTTrsRiH0l%2Fd4xR1K%2B%2Bq2SiiwmvDk9SKY554tfYUkYqjS%2Bj9JXyP0JsdfXpWy1a%2B2zrE5NFvzCvPGModG9nNff5pKiSL608fHsDcjrKrs%2BOp7FouC%2F3rO6Q7FZ6X2HGt8qKcd%2BAN%2F2EPN3%2BfgySYHRxrqxE%2FZYGekycMQWILNT6ykGY2%2B8bsbEhMN%2Fvmx60jhro8%2FzKOPO0rQOnCwEU1Cra%2BjRRRQLqA79%2BctNvaQ2CKqXOXLdN2MdIiDdxBwwwHRyUrObyHgGVWDFs70trZttxe4LzPuXBEzUDysABe6hssIv%2FZvHvtkISncKBy37KrpLhBDyj9NygNUiV9hY4wvcayr%2BLU0vwL%2BvcsaP61gRY0pZe1RAnt5jCkWjBUfGWsZr86c8CWGHf2gXRUIFb6H9fUdUJ%2BXc%2FTsIbP8Kw1QBUFJgvZoNDB4g8FwwIGtzwBh2zW9hwbgGhWkZ5C3BXtP8TK9DlYGUb1abQNDszyi6b4O9FdeJl9RsP8kaNVk9o5xJBqAkuWA0XDuypNvNqtK1acot194SzlTSiSVjeeujOStF%2BtDVQcS8PJVVOrx%2BSCGG1mgfI0SuKQwJDYKPknHw%2F33IsxTCh9q3ABjqkAf0ZR7DhfK6YQQ4LJJVqdSKiUs3y02GIfj3DhPbQTvzdcjC3MY%2BhTFL7iXlddRGfWZHy3MN0HAZoqUlYRpAkonyqetmpv5Zm6w67BRLvD%2BK5hVjXyI65pwe1XRsI7%2FwOeZIXqfNT3FGXe%2FNZwZRY3JlASZLS2PPzdRUbhE%2FE43%2F46vZVFqY2h0129INKN6iGZvCIDn%2BT8%2F04E4w7k5IXUH01Fu5d&X-Amz-Signature=0b0148f658d77c78b3a19eaef724d6b29599d53215cf83538b0ce18f32852808&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
