---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTPQNO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE974aOlnOb1p%2BtWNiJnihqFdK60BWd%2BuWXInaCkOhEQAiBiXzVPRfdDyWXJc7RWiXf6Jql3C398I4%2BluLka8bQWESr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIl26kZzoOoma6C39KtwDED8rLY%2BpTs3wGJ6YPDxpfbXb%2FpJk4oWwZ9Mw%2FLNlGvwGimA4LmCyyRwIivpP9Vu1L4yl3yGQNHvAwJuV024EoVXixUOVf6bwCGLfcrQg4cJCi4air0g96f2%2FJyGeh7e2JHQFKWrVP66AEeqFEBkEjITyBwCw3WZiqBK%2FG8hSxDPnEyfJtbzq8qlSzNuCMKr5ZNHKy9Bc3cLjP%2F8ioAkeV2ilqvfeFqYeA1j5SEHOa%2Fyh%2FKrNWAExSoD18lMYey1WBqGhO5KWz2fcleCuy7zBfqjYQ3PXpduKuzs3ScW%2BN2XG7kLqgDSOD2Atpj1%2FWwEnwtY829Ri2QnKj4UA263y6%2BaQLan%2FXnP7UHZnUoqDCoVcCkjZ%2BnPAOFOOLbpfgJRzl7arqZd0pzhm47yGTMGIUBlTZW8WbZd0%2BWFJ8sGxVwJNHUkA%2F2f6xbsKByZgyzTpXm8J1vjB7ZnJExz%2F6KUuLO%2FLXMHQgBkigPdVRRE09aGtcAVkpkJwP8yLyDIu%2F9pbtnT7AuxPgk3yCMFsedkVBB1ZIrdPN06NKzZnMUkq2qtYKSRND58wdndVXkStaF%2B07021btiJHDsDIZVsAIYOAE6UAxzlbPlsah%2FJvHkfPdqQAQsVJzMDqX%2BjGREwobPGxAY6pgHWDx59JazdB9rdNEjH2msAyD7AH2jo9gR0bhHwh5E%2FEOxV8Fe7dyDLP3O0SazQaRRJHmAJEPomNAY%2F%2FHCyA1l7zVhcUwnuy6JF%2FQsHZW0Feq%2BVgWJePgOvNf3Amkv2HZJsya1EWnMyil2aka8F7EGtkc1QjlsouhPoQbkbr%2F%2BlndaskBF8sq3%2BY6OKu9cgcaqk1ISpniX5C%2FURm2a0sgZXmXVniV1Q&X-Amz-Signature=74284d66e0405b3fb30399c35ecd95b00548930be33801f57e9e5704b3b9a209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTPQNO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE974aOlnOb1p%2BtWNiJnihqFdK60BWd%2BuWXInaCkOhEQAiBiXzVPRfdDyWXJc7RWiXf6Jql3C398I4%2BluLka8bQWESr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIl26kZzoOoma6C39KtwDED8rLY%2BpTs3wGJ6YPDxpfbXb%2FpJk4oWwZ9Mw%2FLNlGvwGimA4LmCyyRwIivpP9Vu1L4yl3yGQNHvAwJuV024EoVXixUOVf6bwCGLfcrQg4cJCi4air0g96f2%2FJyGeh7e2JHQFKWrVP66AEeqFEBkEjITyBwCw3WZiqBK%2FG8hSxDPnEyfJtbzq8qlSzNuCMKr5ZNHKy9Bc3cLjP%2F8ioAkeV2ilqvfeFqYeA1j5SEHOa%2Fyh%2FKrNWAExSoD18lMYey1WBqGhO5KWz2fcleCuy7zBfqjYQ3PXpduKuzs3ScW%2BN2XG7kLqgDSOD2Atpj1%2FWwEnwtY829Ri2QnKj4UA263y6%2BaQLan%2FXnP7UHZnUoqDCoVcCkjZ%2BnPAOFOOLbpfgJRzl7arqZd0pzhm47yGTMGIUBlTZW8WbZd0%2BWFJ8sGxVwJNHUkA%2F2f6xbsKByZgyzTpXm8J1vjB7ZnJExz%2F6KUuLO%2FLXMHQgBkigPdVRRE09aGtcAVkpkJwP8yLyDIu%2F9pbtnT7AuxPgk3yCMFsedkVBB1ZIrdPN06NKzZnMUkq2qtYKSRND58wdndVXkStaF%2B07021btiJHDsDIZVsAIYOAE6UAxzlbPlsah%2FJvHkfPdqQAQsVJzMDqX%2BjGREwobPGxAY6pgHWDx59JazdB9rdNEjH2msAyD7AH2jo9gR0bhHwh5E%2FEOxV8Fe7dyDLP3O0SazQaRRJHmAJEPomNAY%2F%2FHCyA1l7zVhcUwnuy6JF%2FQsHZW0Feq%2BVgWJePgOvNf3Amkv2HZJsya1EWnMyil2aka8F7EGtkc1QjlsouhPoQbkbr%2F%2BlndaskBF8sq3%2BY6OKu9cgcaqk1ISpniX5C%2FURm2a0sgZXmXVniV1Q&X-Amz-Signature=59547ab72628d93cb5199b74d2461bd2fd701ce50126b4730ce4ff89e6150ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTPQNO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE974aOlnOb1p%2BtWNiJnihqFdK60BWd%2BuWXInaCkOhEQAiBiXzVPRfdDyWXJc7RWiXf6Jql3C398I4%2BluLka8bQWESr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIl26kZzoOoma6C39KtwDED8rLY%2BpTs3wGJ6YPDxpfbXb%2FpJk4oWwZ9Mw%2FLNlGvwGimA4LmCyyRwIivpP9Vu1L4yl3yGQNHvAwJuV024EoVXixUOVf6bwCGLfcrQg4cJCi4air0g96f2%2FJyGeh7e2JHQFKWrVP66AEeqFEBkEjITyBwCw3WZiqBK%2FG8hSxDPnEyfJtbzq8qlSzNuCMKr5ZNHKy9Bc3cLjP%2F8ioAkeV2ilqvfeFqYeA1j5SEHOa%2Fyh%2FKrNWAExSoD18lMYey1WBqGhO5KWz2fcleCuy7zBfqjYQ3PXpduKuzs3ScW%2BN2XG7kLqgDSOD2Atpj1%2FWwEnwtY829Ri2QnKj4UA263y6%2BaQLan%2FXnP7UHZnUoqDCoVcCkjZ%2BnPAOFOOLbpfgJRzl7arqZd0pzhm47yGTMGIUBlTZW8WbZd0%2BWFJ8sGxVwJNHUkA%2F2f6xbsKByZgyzTpXm8J1vjB7ZnJExz%2F6KUuLO%2FLXMHQgBkigPdVRRE09aGtcAVkpkJwP8yLyDIu%2F9pbtnT7AuxPgk3yCMFsedkVBB1ZIrdPN06NKzZnMUkq2qtYKSRND58wdndVXkStaF%2B07021btiJHDsDIZVsAIYOAE6UAxzlbPlsah%2FJvHkfPdqQAQsVJzMDqX%2BjGREwobPGxAY6pgHWDx59JazdB9rdNEjH2msAyD7AH2jo9gR0bhHwh5E%2FEOxV8Fe7dyDLP3O0SazQaRRJHmAJEPomNAY%2F%2FHCyA1l7zVhcUwnuy6JF%2FQsHZW0Feq%2BVgWJePgOvNf3Amkv2HZJsya1EWnMyil2aka8F7EGtkc1QjlsouhPoQbkbr%2F%2BlndaskBF8sq3%2BY6OKu9cgcaqk1ISpniX5C%2FURm2a0sgZXmXVniV1Q&X-Amz-Signature=2081392af71543481c481305618719231cb0e8409e38ef0c03ca1781d648dcd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTPQNO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE974aOlnOb1p%2BtWNiJnihqFdK60BWd%2BuWXInaCkOhEQAiBiXzVPRfdDyWXJc7RWiXf6Jql3C398I4%2BluLka8bQWESr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIl26kZzoOoma6C39KtwDED8rLY%2BpTs3wGJ6YPDxpfbXb%2FpJk4oWwZ9Mw%2FLNlGvwGimA4LmCyyRwIivpP9Vu1L4yl3yGQNHvAwJuV024EoVXixUOVf6bwCGLfcrQg4cJCi4air0g96f2%2FJyGeh7e2JHQFKWrVP66AEeqFEBkEjITyBwCw3WZiqBK%2FG8hSxDPnEyfJtbzq8qlSzNuCMKr5ZNHKy9Bc3cLjP%2F8ioAkeV2ilqvfeFqYeA1j5SEHOa%2Fyh%2FKrNWAExSoD18lMYey1WBqGhO5KWz2fcleCuy7zBfqjYQ3PXpduKuzs3ScW%2BN2XG7kLqgDSOD2Atpj1%2FWwEnwtY829Ri2QnKj4UA263y6%2BaQLan%2FXnP7UHZnUoqDCoVcCkjZ%2BnPAOFOOLbpfgJRzl7arqZd0pzhm47yGTMGIUBlTZW8WbZd0%2BWFJ8sGxVwJNHUkA%2F2f6xbsKByZgyzTpXm8J1vjB7ZnJExz%2F6KUuLO%2FLXMHQgBkigPdVRRE09aGtcAVkpkJwP8yLyDIu%2F9pbtnT7AuxPgk3yCMFsedkVBB1ZIrdPN06NKzZnMUkq2qtYKSRND58wdndVXkStaF%2B07021btiJHDsDIZVsAIYOAE6UAxzlbPlsah%2FJvHkfPdqQAQsVJzMDqX%2BjGREwobPGxAY6pgHWDx59JazdB9rdNEjH2msAyD7AH2jo9gR0bhHwh5E%2FEOxV8Fe7dyDLP3O0SazQaRRJHmAJEPomNAY%2F%2FHCyA1l7zVhcUwnuy6JF%2FQsHZW0Feq%2BVgWJePgOvNf3Amkv2HZJsya1EWnMyil2aka8F7EGtkc1QjlsouhPoQbkbr%2F%2BlndaskBF8sq3%2BY6OKu9cgcaqk1ISpniX5C%2FURm2a0sgZXmXVniV1Q&X-Amz-Signature=143ea6209966b9056ce56e665a75490a12a900f4502a0d847f3a310ab82ad5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTPQNO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE974aOlnOb1p%2BtWNiJnihqFdK60BWd%2BuWXInaCkOhEQAiBiXzVPRfdDyWXJc7RWiXf6Jql3C398I4%2BluLka8bQWESr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIl26kZzoOoma6C39KtwDED8rLY%2BpTs3wGJ6YPDxpfbXb%2FpJk4oWwZ9Mw%2FLNlGvwGimA4LmCyyRwIivpP9Vu1L4yl3yGQNHvAwJuV024EoVXixUOVf6bwCGLfcrQg4cJCi4air0g96f2%2FJyGeh7e2JHQFKWrVP66AEeqFEBkEjITyBwCw3WZiqBK%2FG8hSxDPnEyfJtbzq8qlSzNuCMKr5ZNHKy9Bc3cLjP%2F8ioAkeV2ilqvfeFqYeA1j5SEHOa%2Fyh%2FKrNWAExSoD18lMYey1WBqGhO5KWz2fcleCuy7zBfqjYQ3PXpduKuzs3ScW%2BN2XG7kLqgDSOD2Atpj1%2FWwEnwtY829Ri2QnKj4UA263y6%2BaQLan%2FXnP7UHZnUoqDCoVcCkjZ%2BnPAOFOOLbpfgJRzl7arqZd0pzhm47yGTMGIUBlTZW8WbZd0%2BWFJ8sGxVwJNHUkA%2F2f6xbsKByZgyzTpXm8J1vjB7ZnJExz%2F6KUuLO%2FLXMHQgBkigPdVRRE09aGtcAVkpkJwP8yLyDIu%2F9pbtnT7AuxPgk3yCMFsedkVBB1ZIrdPN06NKzZnMUkq2qtYKSRND58wdndVXkStaF%2B07021btiJHDsDIZVsAIYOAE6UAxzlbPlsah%2FJvHkfPdqQAQsVJzMDqX%2BjGREwobPGxAY6pgHWDx59JazdB9rdNEjH2msAyD7AH2jo9gR0bhHwh5E%2FEOxV8Fe7dyDLP3O0SazQaRRJHmAJEPomNAY%2F%2FHCyA1l7zVhcUwnuy6JF%2FQsHZW0Feq%2BVgWJePgOvNf3Amkv2HZJsya1EWnMyil2aka8F7EGtkc1QjlsouhPoQbkbr%2F%2BlndaskBF8sq3%2BY6OKu9cgcaqk1ISpniX5C%2FURm2a0sgZXmXVniV1Q&X-Amz-Signature=9dd4f0b8802d4763dc20260d3cf43883191ddcdcd0ff486679dbdd89bc08319b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTPQNO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE974aOlnOb1p%2BtWNiJnihqFdK60BWd%2BuWXInaCkOhEQAiBiXzVPRfdDyWXJc7RWiXf6Jql3C398I4%2BluLka8bQWESr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIl26kZzoOoma6C39KtwDED8rLY%2BpTs3wGJ6YPDxpfbXb%2FpJk4oWwZ9Mw%2FLNlGvwGimA4LmCyyRwIivpP9Vu1L4yl3yGQNHvAwJuV024EoVXixUOVf6bwCGLfcrQg4cJCi4air0g96f2%2FJyGeh7e2JHQFKWrVP66AEeqFEBkEjITyBwCw3WZiqBK%2FG8hSxDPnEyfJtbzq8qlSzNuCMKr5ZNHKy9Bc3cLjP%2F8ioAkeV2ilqvfeFqYeA1j5SEHOa%2Fyh%2FKrNWAExSoD18lMYey1WBqGhO5KWz2fcleCuy7zBfqjYQ3PXpduKuzs3ScW%2BN2XG7kLqgDSOD2Atpj1%2FWwEnwtY829Ri2QnKj4UA263y6%2BaQLan%2FXnP7UHZnUoqDCoVcCkjZ%2BnPAOFOOLbpfgJRzl7arqZd0pzhm47yGTMGIUBlTZW8WbZd0%2BWFJ8sGxVwJNHUkA%2F2f6xbsKByZgyzTpXm8J1vjB7ZnJExz%2F6KUuLO%2FLXMHQgBkigPdVRRE09aGtcAVkpkJwP8yLyDIu%2F9pbtnT7AuxPgk3yCMFsedkVBB1ZIrdPN06NKzZnMUkq2qtYKSRND58wdndVXkStaF%2B07021btiJHDsDIZVsAIYOAE6UAxzlbPlsah%2FJvHkfPdqQAQsVJzMDqX%2BjGREwobPGxAY6pgHWDx59JazdB9rdNEjH2msAyD7AH2jo9gR0bhHwh5E%2FEOxV8Fe7dyDLP3O0SazQaRRJHmAJEPomNAY%2F%2FHCyA1l7zVhcUwnuy6JF%2FQsHZW0Feq%2BVgWJePgOvNf3Amkv2HZJsya1EWnMyil2aka8F7EGtkc1QjlsouhPoQbkbr%2F%2BlndaskBF8sq3%2BY6OKu9cgcaqk1ISpniX5C%2FURm2a0sgZXmXVniV1Q&X-Amz-Signature=1a2355c5acd63da26bd8e3c129172b28e1d538f034454ee3063f86bc53b6198e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OTPQNO4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE974aOlnOb1p%2BtWNiJnihqFdK60BWd%2BuWXInaCkOhEQAiBiXzVPRfdDyWXJc7RWiXf6Jql3C398I4%2BluLka8bQWESr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMIl26kZzoOoma6C39KtwDED8rLY%2BpTs3wGJ6YPDxpfbXb%2FpJk4oWwZ9Mw%2FLNlGvwGimA4LmCyyRwIivpP9Vu1L4yl3yGQNHvAwJuV024EoVXixUOVf6bwCGLfcrQg4cJCi4air0g96f2%2FJyGeh7e2JHQFKWrVP66AEeqFEBkEjITyBwCw3WZiqBK%2FG8hSxDPnEyfJtbzq8qlSzNuCMKr5ZNHKy9Bc3cLjP%2F8ioAkeV2ilqvfeFqYeA1j5SEHOa%2Fyh%2FKrNWAExSoD18lMYey1WBqGhO5KWz2fcleCuy7zBfqjYQ3PXpduKuzs3ScW%2BN2XG7kLqgDSOD2Atpj1%2FWwEnwtY829Ri2QnKj4UA263y6%2BaQLan%2FXnP7UHZnUoqDCoVcCkjZ%2BnPAOFOOLbpfgJRzl7arqZd0pzhm47yGTMGIUBlTZW8WbZd0%2BWFJ8sGxVwJNHUkA%2F2f6xbsKByZgyzTpXm8J1vjB7ZnJExz%2F6KUuLO%2FLXMHQgBkigPdVRRE09aGtcAVkpkJwP8yLyDIu%2F9pbtnT7AuxPgk3yCMFsedkVBB1ZIrdPN06NKzZnMUkq2qtYKSRND58wdndVXkStaF%2B07021btiJHDsDIZVsAIYOAE6UAxzlbPlsah%2FJvHkfPdqQAQsVJzMDqX%2BjGREwobPGxAY6pgHWDx59JazdB9rdNEjH2msAyD7AH2jo9gR0bhHwh5E%2FEOxV8Fe7dyDLP3O0SazQaRRJHmAJEPomNAY%2F%2FHCyA1l7zVhcUwnuy6JF%2FQsHZW0Feq%2BVgWJePgOvNf3Amkv2HZJsya1EWnMyil2aka8F7EGtkc1QjlsouhPoQbkbr%2F%2BlndaskBF8sq3%2BY6OKu9cgcaqk1ISpniX5C%2FURm2a0sgZXmXVniV1Q&X-Amz-Signature=aed2540b220e0f1c0f3f3ccad598e5ba7e0236177df25a3e4d9e34720b1aba01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
