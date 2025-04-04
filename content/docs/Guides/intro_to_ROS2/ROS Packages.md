---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
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

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEEMVI5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsALjkUNXZsMAsvH9QUCrkcRXY3gjpykMcok7DQaN%2F7AiA%2FEC9ncfNOcL3%2FBVGQE7awB3s6iUqdZSHE3OrfRWUc%2Fyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMdK3iDQxZVpto%2B1eCKtwD6QK29AOkDP5vjvCUej1osVc26XAnKHwahbSpUfD%2FRwrdmBXAQaEey%2FqIk0NpiUrIfie4XRR5zIASiubCL5AG7zGQf%2B%2FBkqbX0QkIxZTP%2F55BO1gLa5AjjEqdPzOXqnKVbPm7sxjPec%2BiJ1rQtce7jlRV2Gm2bmryR2iHnL%2BOjSoWOE3hcHCZVwEtox3l6upbp3BWfg%2BC64p7VuFdCQlXgZRgabYdWV0UaxjcRSyh8bunhzOo9SdvVwQ0rA5xp3q5dpN0k4ZgKbFI7Yublui2K9zGDAp1ZQQ1rXQ2UZNsLlRWGB%2BH2B52c885Agf1XmictRzJeZk4AKFpXS%2BTGfOa9L0%2B7qbtmf4UhIvHEewqspbvf%2BV%2BOC8wvxEVgd6U%2F6uOVxaY6BXj5FcjtCE0LwaSVkDX7sgLXHA350GVLWichHABDfJ1AZ7VW%2BcF3QOoKjSnySco4KljCcBBdZZxiV%2FYVn14SIO06E8R8AxVlnOo2UYNI4Lz4i3i6I%2BwfwkXMdp3CTBZLy%2BJMQaXtDjHiK%2FTmzelJqyRP9m3b2U%2F%2FCRZu%2FkOcdLdmkuxUJHum5r%2Fj7Nx4Cvi3LrvtN3cuXPAuHemtpAhJU3itSSwv5kNC2XguPBeyuqPg9bfDy4Q5V8wrOe%2FvwY6pgFtY0bWHnNR0qOdJhSiiJ1lkyCs4mdGBPBKl68uOZ9ad7DQBFHHgyCF3CduJr55UT9q6lB5oKRU%2Bjo%2FXYfHSaVeE%2BS4jtuovqPHtWVl%2FNWKOYZdl3msotC6jYiHGSLjqF5rzeMNQ0%2FqPTg%2FhcjE20jCuqN2wCCoJvXlM4%2B8uRPOXsDIXU6QgzaLcrACHMN%2Bi1P5e2wXKD7ozJCyQVKYER98M7bG52r0&X-Amz-Signature=3b9fb98dafa655f85b9a6addab1d0051f8964f63d5d390b53933837c1c590558&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEEMVI5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsALjkUNXZsMAsvH9QUCrkcRXY3gjpykMcok7DQaN%2F7AiA%2FEC9ncfNOcL3%2FBVGQE7awB3s6iUqdZSHE3OrfRWUc%2Fyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMdK3iDQxZVpto%2B1eCKtwD6QK29AOkDP5vjvCUej1osVc26XAnKHwahbSpUfD%2FRwrdmBXAQaEey%2FqIk0NpiUrIfie4XRR5zIASiubCL5AG7zGQf%2B%2FBkqbX0QkIxZTP%2F55BO1gLa5AjjEqdPzOXqnKVbPm7sxjPec%2BiJ1rQtce7jlRV2Gm2bmryR2iHnL%2BOjSoWOE3hcHCZVwEtox3l6upbp3BWfg%2BC64p7VuFdCQlXgZRgabYdWV0UaxjcRSyh8bunhzOo9SdvVwQ0rA5xp3q5dpN0k4ZgKbFI7Yublui2K9zGDAp1ZQQ1rXQ2UZNsLlRWGB%2BH2B52c885Agf1XmictRzJeZk4AKFpXS%2BTGfOa9L0%2B7qbtmf4UhIvHEewqspbvf%2BV%2BOC8wvxEVgd6U%2F6uOVxaY6BXj5FcjtCE0LwaSVkDX7sgLXHA350GVLWichHABDfJ1AZ7VW%2BcF3QOoKjSnySco4KljCcBBdZZxiV%2FYVn14SIO06E8R8AxVlnOo2UYNI4Lz4i3i6I%2BwfwkXMdp3CTBZLy%2BJMQaXtDjHiK%2FTmzelJqyRP9m3b2U%2F%2FCRZu%2FkOcdLdmkuxUJHum5r%2Fj7Nx4Cvi3LrvtN3cuXPAuHemtpAhJU3itSSwv5kNC2XguPBeyuqPg9bfDy4Q5V8wrOe%2FvwY6pgFtY0bWHnNR0qOdJhSiiJ1lkyCs4mdGBPBKl68uOZ9ad7DQBFHHgyCF3CduJr55UT9q6lB5oKRU%2Bjo%2FXYfHSaVeE%2BS4jtuovqPHtWVl%2FNWKOYZdl3msotC6jYiHGSLjqF5rzeMNQ0%2FqPTg%2FhcjE20jCuqN2wCCoJvXlM4%2B8uRPOXsDIXU6QgzaLcrACHMN%2Bi1P5e2wXKD7ozJCyQVKYER98M7bG52r0&X-Amz-Signature=cdffd6b7e60b55b42ad0778ca87b7e3d2ec5d79be28f5e6167181f594bbb9d6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEEMVI5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsALjkUNXZsMAsvH9QUCrkcRXY3gjpykMcok7DQaN%2F7AiA%2FEC9ncfNOcL3%2FBVGQE7awB3s6iUqdZSHE3OrfRWUc%2Fyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMdK3iDQxZVpto%2B1eCKtwD6QK29AOkDP5vjvCUej1osVc26XAnKHwahbSpUfD%2FRwrdmBXAQaEey%2FqIk0NpiUrIfie4XRR5zIASiubCL5AG7zGQf%2B%2FBkqbX0QkIxZTP%2F55BO1gLa5AjjEqdPzOXqnKVbPm7sxjPec%2BiJ1rQtce7jlRV2Gm2bmryR2iHnL%2BOjSoWOE3hcHCZVwEtox3l6upbp3BWfg%2BC64p7VuFdCQlXgZRgabYdWV0UaxjcRSyh8bunhzOo9SdvVwQ0rA5xp3q5dpN0k4ZgKbFI7Yublui2K9zGDAp1ZQQ1rXQ2UZNsLlRWGB%2BH2B52c885Agf1XmictRzJeZk4AKFpXS%2BTGfOa9L0%2B7qbtmf4UhIvHEewqspbvf%2BV%2BOC8wvxEVgd6U%2F6uOVxaY6BXj5FcjtCE0LwaSVkDX7sgLXHA350GVLWichHABDfJ1AZ7VW%2BcF3QOoKjSnySco4KljCcBBdZZxiV%2FYVn14SIO06E8R8AxVlnOo2UYNI4Lz4i3i6I%2BwfwkXMdp3CTBZLy%2BJMQaXtDjHiK%2FTmzelJqyRP9m3b2U%2F%2FCRZu%2FkOcdLdmkuxUJHum5r%2Fj7Nx4Cvi3LrvtN3cuXPAuHemtpAhJU3itSSwv5kNC2XguPBeyuqPg9bfDy4Q5V8wrOe%2FvwY6pgFtY0bWHnNR0qOdJhSiiJ1lkyCs4mdGBPBKl68uOZ9ad7DQBFHHgyCF3CduJr55UT9q6lB5oKRU%2Bjo%2FXYfHSaVeE%2BS4jtuovqPHtWVl%2FNWKOYZdl3msotC6jYiHGSLjqF5rzeMNQ0%2FqPTg%2FhcjE20jCuqN2wCCoJvXlM4%2B8uRPOXsDIXU6QgzaLcrACHMN%2Bi1P5e2wXKD7ozJCyQVKYER98M7bG52r0&X-Amz-Signature=5770f4c7ccae494e324a4bc60052692cd24ecbadbef5d981908e648bbb011555&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEEMVI5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsALjkUNXZsMAsvH9QUCrkcRXY3gjpykMcok7DQaN%2F7AiA%2FEC9ncfNOcL3%2FBVGQE7awB3s6iUqdZSHE3OrfRWUc%2Fyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMdK3iDQxZVpto%2B1eCKtwD6QK29AOkDP5vjvCUej1osVc26XAnKHwahbSpUfD%2FRwrdmBXAQaEey%2FqIk0NpiUrIfie4XRR5zIASiubCL5AG7zGQf%2B%2FBkqbX0QkIxZTP%2F55BO1gLa5AjjEqdPzOXqnKVbPm7sxjPec%2BiJ1rQtce7jlRV2Gm2bmryR2iHnL%2BOjSoWOE3hcHCZVwEtox3l6upbp3BWfg%2BC64p7VuFdCQlXgZRgabYdWV0UaxjcRSyh8bunhzOo9SdvVwQ0rA5xp3q5dpN0k4ZgKbFI7Yublui2K9zGDAp1ZQQ1rXQ2UZNsLlRWGB%2BH2B52c885Agf1XmictRzJeZk4AKFpXS%2BTGfOa9L0%2B7qbtmf4UhIvHEewqspbvf%2BV%2BOC8wvxEVgd6U%2F6uOVxaY6BXj5FcjtCE0LwaSVkDX7sgLXHA350GVLWichHABDfJ1AZ7VW%2BcF3QOoKjSnySco4KljCcBBdZZxiV%2FYVn14SIO06E8R8AxVlnOo2UYNI4Lz4i3i6I%2BwfwkXMdp3CTBZLy%2BJMQaXtDjHiK%2FTmzelJqyRP9m3b2U%2F%2FCRZu%2FkOcdLdmkuxUJHum5r%2Fj7Nx4Cvi3LrvtN3cuXPAuHemtpAhJU3itSSwv5kNC2XguPBeyuqPg9bfDy4Q5V8wrOe%2FvwY6pgFtY0bWHnNR0qOdJhSiiJ1lkyCs4mdGBPBKl68uOZ9ad7DQBFHHgyCF3CduJr55UT9q6lB5oKRU%2Bjo%2FXYfHSaVeE%2BS4jtuovqPHtWVl%2FNWKOYZdl3msotC6jYiHGSLjqF5rzeMNQ0%2FqPTg%2FhcjE20jCuqN2wCCoJvXlM4%2B8uRPOXsDIXU6QgzaLcrACHMN%2Bi1P5e2wXKD7ozJCyQVKYER98M7bG52r0&X-Amz-Signature=477e37e58fb5e954aca6bba93a071493fd1449eb008c29de37e024b4f7b86c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEEMVI5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsALjkUNXZsMAsvH9QUCrkcRXY3gjpykMcok7DQaN%2F7AiA%2FEC9ncfNOcL3%2FBVGQE7awB3s6iUqdZSHE3OrfRWUc%2Fyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMdK3iDQxZVpto%2B1eCKtwD6QK29AOkDP5vjvCUej1osVc26XAnKHwahbSpUfD%2FRwrdmBXAQaEey%2FqIk0NpiUrIfie4XRR5zIASiubCL5AG7zGQf%2B%2FBkqbX0QkIxZTP%2F55BO1gLa5AjjEqdPzOXqnKVbPm7sxjPec%2BiJ1rQtce7jlRV2Gm2bmryR2iHnL%2BOjSoWOE3hcHCZVwEtox3l6upbp3BWfg%2BC64p7VuFdCQlXgZRgabYdWV0UaxjcRSyh8bunhzOo9SdvVwQ0rA5xp3q5dpN0k4ZgKbFI7Yublui2K9zGDAp1ZQQ1rXQ2UZNsLlRWGB%2BH2B52c885Agf1XmictRzJeZk4AKFpXS%2BTGfOa9L0%2B7qbtmf4UhIvHEewqspbvf%2BV%2BOC8wvxEVgd6U%2F6uOVxaY6BXj5FcjtCE0LwaSVkDX7sgLXHA350GVLWichHABDfJ1AZ7VW%2BcF3QOoKjSnySco4KljCcBBdZZxiV%2FYVn14SIO06E8R8AxVlnOo2UYNI4Lz4i3i6I%2BwfwkXMdp3CTBZLy%2BJMQaXtDjHiK%2FTmzelJqyRP9m3b2U%2F%2FCRZu%2FkOcdLdmkuxUJHum5r%2Fj7Nx4Cvi3LrvtN3cuXPAuHemtpAhJU3itSSwv5kNC2XguPBeyuqPg9bfDy4Q5V8wrOe%2FvwY6pgFtY0bWHnNR0qOdJhSiiJ1lkyCs4mdGBPBKl68uOZ9ad7DQBFHHgyCF3CduJr55UT9q6lB5oKRU%2Bjo%2FXYfHSaVeE%2BS4jtuovqPHtWVl%2FNWKOYZdl3msotC6jYiHGSLjqF5rzeMNQ0%2FqPTg%2FhcjE20jCuqN2wCCoJvXlM4%2B8uRPOXsDIXU6QgzaLcrACHMN%2Bi1P5e2wXKD7ozJCyQVKYER98M7bG52r0&X-Amz-Signature=3209c9ba8b4397f9c1a6ee7ab5c2f3ea9bc34c7f31a7b7646e81a544c7545c18&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEEMVI5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsALjkUNXZsMAsvH9QUCrkcRXY3gjpykMcok7DQaN%2F7AiA%2FEC9ncfNOcL3%2FBVGQE7awB3s6iUqdZSHE3OrfRWUc%2Fyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMdK3iDQxZVpto%2B1eCKtwD6QK29AOkDP5vjvCUej1osVc26XAnKHwahbSpUfD%2FRwrdmBXAQaEey%2FqIk0NpiUrIfie4XRR5zIASiubCL5AG7zGQf%2B%2FBkqbX0QkIxZTP%2F55BO1gLa5AjjEqdPzOXqnKVbPm7sxjPec%2BiJ1rQtce7jlRV2Gm2bmryR2iHnL%2BOjSoWOE3hcHCZVwEtox3l6upbp3BWfg%2BC64p7VuFdCQlXgZRgabYdWV0UaxjcRSyh8bunhzOo9SdvVwQ0rA5xp3q5dpN0k4ZgKbFI7Yublui2K9zGDAp1ZQQ1rXQ2UZNsLlRWGB%2BH2B52c885Agf1XmictRzJeZk4AKFpXS%2BTGfOa9L0%2B7qbtmf4UhIvHEewqspbvf%2BV%2BOC8wvxEVgd6U%2F6uOVxaY6BXj5FcjtCE0LwaSVkDX7sgLXHA350GVLWichHABDfJ1AZ7VW%2BcF3QOoKjSnySco4KljCcBBdZZxiV%2FYVn14SIO06E8R8AxVlnOo2UYNI4Lz4i3i6I%2BwfwkXMdp3CTBZLy%2BJMQaXtDjHiK%2FTmzelJqyRP9m3b2U%2F%2FCRZu%2FkOcdLdmkuxUJHum5r%2Fj7Nx4Cvi3LrvtN3cuXPAuHemtpAhJU3itSSwv5kNC2XguPBeyuqPg9bfDy4Q5V8wrOe%2FvwY6pgFtY0bWHnNR0qOdJhSiiJ1lkyCs4mdGBPBKl68uOZ9ad7DQBFHHgyCF3CduJr55UT9q6lB5oKRU%2Bjo%2FXYfHSaVeE%2BS4jtuovqPHtWVl%2FNWKOYZdl3msotC6jYiHGSLjqF5rzeMNQ0%2FqPTg%2FhcjE20jCuqN2wCCoJvXlM4%2B8uRPOXsDIXU6QgzaLcrACHMN%2Bi1P5e2wXKD7ozJCyQVKYER98M7bG52r0&X-Amz-Signature=8942dac333ac543ccdb46d903154299e07521c462670b004b01671eb5abaf283&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CEEMVI5%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsALjkUNXZsMAsvH9QUCrkcRXY3gjpykMcok7DQaN%2F7AiA%2FEC9ncfNOcL3%2FBVGQE7awB3s6iUqdZSHE3OrfRWUc%2Fyr%2FAwgYEAAaDDYzNzQyMzE4MzgwNSIMdK3iDQxZVpto%2B1eCKtwD6QK29AOkDP5vjvCUej1osVc26XAnKHwahbSpUfD%2FRwrdmBXAQaEey%2FqIk0NpiUrIfie4XRR5zIASiubCL5AG7zGQf%2B%2FBkqbX0QkIxZTP%2F55BO1gLa5AjjEqdPzOXqnKVbPm7sxjPec%2BiJ1rQtce7jlRV2Gm2bmryR2iHnL%2BOjSoWOE3hcHCZVwEtox3l6upbp3BWfg%2BC64p7VuFdCQlXgZRgabYdWV0UaxjcRSyh8bunhzOo9SdvVwQ0rA5xp3q5dpN0k4ZgKbFI7Yublui2K9zGDAp1ZQQ1rXQ2UZNsLlRWGB%2BH2B52c885Agf1XmictRzJeZk4AKFpXS%2BTGfOa9L0%2B7qbtmf4UhIvHEewqspbvf%2BV%2BOC8wvxEVgd6U%2F6uOVxaY6BXj5FcjtCE0LwaSVkDX7sgLXHA350GVLWichHABDfJ1AZ7VW%2BcF3QOoKjSnySco4KljCcBBdZZxiV%2FYVn14SIO06E8R8AxVlnOo2UYNI4Lz4i3i6I%2BwfwkXMdp3CTBZLy%2BJMQaXtDjHiK%2FTmzelJqyRP9m3b2U%2F%2FCRZu%2FkOcdLdmkuxUJHum5r%2Fj7Nx4Cvi3LrvtN3cuXPAuHemtpAhJU3itSSwv5kNC2XguPBeyuqPg9bfDy4Q5V8wrOe%2FvwY6pgFtY0bWHnNR0qOdJhSiiJ1lkyCs4mdGBPBKl68uOZ9ad7DQBFHHgyCF3CduJr55UT9q6lB5oKRU%2Bjo%2FXYfHSaVeE%2BS4jtuovqPHtWVl%2FNWKOYZdl3msotC6jYiHGSLjqF5rzeMNQ0%2FqPTg%2FhcjE20jCuqN2wCCoJvXlM4%2B8uRPOXsDIXU6QgzaLcrACHMN%2Bi1P5e2wXKD7ozJCyQVKYER98M7bG52r0&X-Amz-Signature=6deab608ec2e268ee0eba4802b9379aea3435d2a1d426a7340a989f0b328c06f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
