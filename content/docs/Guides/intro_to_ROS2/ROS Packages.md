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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2T4644%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Xv%2FiO1sT%2FtPVyaxjfXCQFXOVLpHoPawgDLspYcscygIgPi5XK53HpICE1icXBiSHAjVNBT1153OSFFImB8ktcjUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG97ODWD5N84YZp9HircA5WznwOpFZbbQNL%2FsLSq7khuNWKfSucpVj9bZ8rs1QlgRFKxaQANYVBy%2Fd%2FWvSLl47a0tEjQnsxykX8WnfovaqREZWNYD0%2BZKJgOMvg9cqYKnFnr1cYcJpm5AS5E%2Ftx985DwfXDXDH0f6ISoeTwuxlnqvPOcbUQGHRRfiBXrxfdHFoqBTl%2F%2BYYlHc20AzY%2BgxvwuL1dzcUUqIRyMXhIduC43LuewL6fUVlNUoPG2TKNjAmPe%2F7YfS3mA%2FdhD8HOdlyWEFQHXUaM3DiNGf3k0sl2SVXVhWb4lPB2Kdd0dsw6MIVU5WHwpfO%2F2tD8J9WC109RbytpqUr2D%2BH9zAg4dO3MPUqo4yFvcbAAyuajipreTN%2BgdB9tPhHH5%2FgcldtQl8Uo66WAYMwWa6qrocqz6YJ%2FN1sJHRHgmak9Exd1o%2BdMNoAfbTju5vn5akahHu6ED%2FuURtzGP5bvSma52rieJFF%2FgmvsfsQUvieA%2BsCbqNDjLbYwf1hzoNbRCYTcKPGLO7SuCK1rzzuDCU6Q%2FMwdUJ4li0hmGrwB8DX3aUM8FEZOU9l%2Fwkq4yxL8WPZHSp3%2BG20pw7hW4sYfucDQRzvzozZUmutR77izuRF79ryJRKdOKOnwMJ2MomcGxWycHMMbSq8EGOqUBDkCloGkFzjXl%2BEJCm7ZJHqWmsDuQSi1Nv7FvpUSFTtjjO0m91jzecPRCYkwNQpPPi5ybtDMQdBWDdBSFvTVsaQOKnITboFqKlC9LK0ElnwOpRKA2zpg3xcraeki8K3e9eg9d7vTE%2FbychKD0bRMHtQjhRzdD5TBS%2FrZUIBiRRV%2BBaWhXk0pztbRyOc22XwNukNm%2BG7d9%2FZhCohIqMrxwfhI22wAF&X-Amz-Signature=32bd552246ec764fec838fc871f0e578d4a61e94d55ed8e8fd143ef4fff7b9d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2T4644%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Xv%2FiO1sT%2FtPVyaxjfXCQFXOVLpHoPawgDLspYcscygIgPi5XK53HpICE1icXBiSHAjVNBT1153OSFFImB8ktcjUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG97ODWD5N84YZp9HircA5WznwOpFZbbQNL%2FsLSq7khuNWKfSucpVj9bZ8rs1QlgRFKxaQANYVBy%2Fd%2FWvSLl47a0tEjQnsxykX8WnfovaqREZWNYD0%2BZKJgOMvg9cqYKnFnr1cYcJpm5AS5E%2Ftx985DwfXDXDH0f6ISoeTwuxlnqvPOcbUQGHRRfiBXrxfdHFoqBTl%2F%2BYYlHc20AzY%2BgxvwuL1dzcUUqIRyMXhIduC43LuewL6fUVlNUoPG2TKNjAmPe%2F7YfS3mA%2FdhD8HOdlyWEFQHXUaM3DiNGf3k0sl2SVXVhWb4lPB2Kdd0dsw6MIVU5WHwpfO%2F2tD8J9WC109RbytpqUr2D%2BH9zAg4dO3MPUqo4yFvcbAAyuajipreTN%2BgdB9tPhHH5%2FgcldtQl8Uo66WAYMwWa6qrocqz6YJ%2FN1sJHRHgmak9Exd1o%2BdMNoAfbTju5vn5akahHu6ED%2FuURtzGP5bvSma52rieJFF%2FgmvsfsQUvieA%2BsCbqNDjLbYwf1hzoNbRCYTcKPGLO7SuCK1rzzuDCU6Q%2FMwdUJ4li0hmGrwB8DX3aUM8FEZOU9l%2Fwkq4yxL8WPZHSp3%2BG20pw7hW4sYfucDQRzvzozZUmutR77izuRF79ryJRKdOKOnwMJ2MomcGxWycHMMbSq8EGOqUBDkCloGkFzjXl%2BEJCm7ZJHqWmsDuQSi1Nv7FvpUSFTtjjO0m91jzecPRCYkwNQpPPi5ybtDMQdBWDdBSFvTVsaQOKnITboFqKlC9LK0ElnwOpRKA2zpg3xcraeki8K3e9eg9d7vTE%2FbychKD0bRMHtQjhRzdD5TBS%2FrZUIBiRRV%2BBaWhXk0pztbRyOc22XwNukNm%2BG7d9%2FZhCohIqMrxwfhI22wAF&X-Amz-Signature=dc0c45f598de768d5e3b7fb7163620652c3a7e611ed5f98c3824c0f3e2e3b3dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2T4644%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Xv%2FiO1sT%2FtPVyaxjfXCQFXOVLpHoPawgDLspYcscygIgPi5XK53HpICE1icXBiSHAjVNBT1153OSFFImB8ktcjUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG97ODWD5N84YZp9HircA5WznwOpFZbbQNL%2FsLSq7khuNWKfSucpVj9bZ8rs1QlgRFKxaQANYVBy%2Fd%2FWvSLl47a0tEjQnsxykX8WnfovaqREZWNYD0%2BZKJgOMvg9cqYKnFnr1cYcJpm5AS5E%2Ftx985DwfXDXDH0f6ISoeTwuxlnqvPOcbUQGHRRfiBXrxfdHFoqBTl%2F%2BYYlHc20AzY%2BgxvwuL1dzcUUqIRyMXhIduC43LuewL6fUVlNUoPG2TKNjAmPe%2F7YfS3mA%2FdhD8HOdlyWEFQHXUaM3DiNGf3k0sl2SVXVhWb4lPB2Kdd0dsw6MIVU5WHwpfO%2F2tD8J9WC109RbytpqUr2D%2BH9zAg4dO3MPUqo4yFvcbAAyuajipreTN%2BgdB9tPhHH5%2FgcldtQl8Uo66WAYMwWa6qrocqz6YJ%2FN1sJHRHgmak9Exd1o%2BdMNoAfbTju5vn5akahHu6ED%2FuURtzGP5bvSma52rieJFF%2FgmvsfsQUvieA%2BsCbqNDjLbYwf1hzoNbRCYTcKPGLO7SuCK1rzzuDCU6Q%2FMwdUJ4li0hmGrwB8DX3aUM8FEZOU9l%2Fwkq4yxL8WPZHSp3%2BG20pw7hW4sYfucDQRzvzozZUmutR77izuRF79ryJRKdOKOnwMJ2MomcGxWycHMMbSq8EGOqUBDkCloGkFzjXl%2BEJCm7ZJHqWmsDuQSi1Nv7FvpUSFTtjjO0m91jzecPRCYkwNQpPPi5ybtDMQdBWDdBSFvTVsaQOKnITboFqKlC9LK0ElnwOpRKA2zpg3xcraeki8K3e9eg9d7vTE%2FbychKD0bRMHtQjhRzdD5TBS%2FrZUIBiRRV%2BBaWhXk0pztbRyOc22XwNukNm%2BG7d9%2FZhCohIqMrxwfhI22wAF&X-Amz-Signature=f7d768fa6590d6c3f57059ac30b7fb2c19db587852179ea8bc222a858aba0b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2T4644%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Xv%2FiO1sT%2FtPVyaxjfXCQFXOVLpHoPawgDLspYcscygIgPi5XK53HpICE1icXBiSHAjVNBT1153OSFFImB8ktcjUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG97ODWD5N84YZp9HircA5WznwOpFZbbQNL%2FsLSq7khuNWKfSucpVj9bZ8rs1QlgRFKxaQANYVBy%2Fd%2FWvSLl47a0tEjQnsxykX8WnfovaqREZWNYD0%2BZKJgOMvg9cqYKnFnr1cYcJpm5AS5E%2Ftx985DwfXDXDH0f6ISoeTwuxlnqvPOcbUQGHRRfiBXrxfdHFoqBTl%2F%2BYYlHc20AzY%2BgxvwuL1dzcUUqIRyMXhIduC43LuewL6fUVlNUoPG2TKNjAmPe%2F7YfS3mA%2FdhD8HOdlyWEFQHXUaM3DiNGf3k0sl2SVXVhWb4lPB2Kdd0dsw6MIVU5WHwpfO%2F2tD8J9WC109RbytpqUr2D%2BH9zAg4dO3MPUqo4yFvcbAAyuajipreTN%2BgdB9tPhHH5%2FgcldtQl8Uo66WAYMwWa6qrocqz6YJ%2FN1sJHRHgmak9Exd1o%2BdMNoAfbTju5vn5akahHu6ED%2FuURtzGP5bvSma52rieJFF%2FgmvsfsQUvieA%2BsCbqNDjLbYwf1hzoNbRCYTcKPGLO7SuCK1rzzuDCU6Q%2FMwdUJ4li0hmGrwB8DX3aUM8FEZOU9l%2Fwkq4yxL8WPZHSp3%2BG20pw7hW4sYfucDQRzvzozZUmutR77izuRF79ryJRKdOKOnwMJ2MomcGxWycHMMbSq8EGOqUBDkCloGkFzjXl%2BEJCm7ZJHqWmsDuQSi1Nv7FvpUSFTtjjO0m91jzecPRCYkwNQpPPi5ybtDMQdBWDdBSFvTVsaQOKnITboFqKlC9LK0ElnwOpRKA2zpg3xcraeki8K3e9eg9d7vTE%2FbychKD0bRMHtQjhRzdD5TBS%2FrZUIBiRRV%2BBaWhXk0pztbRyOc22XwNukNm%2BG7d9%2FZhCohIqMrxwfhI22wAF&X-Amz-Signature=fb51fc792f06ed77cecaab1c0f5e8ce1218365628a05e71852d2c1268c4eb60e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2T4644%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Xv%2FiO1sT%2FtPVyaxjfXCQFXOVLpHoPawgDLspYcscygIgPi5XK53HpICE1icXBiSHAjVNBT1153OSFFImB8ktcjUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG97ODWD5N84YZp9HircA5WznwOpFZbbQNL%2FsLSq7khuNWKfSucpVj9bZ8rs1QlgRFKxaQANYVBy%2Fd%2FWvSLl47a0tEjQnsxykX8WnfovaqREZWNYD0%2BZKJgOMvg9cqYKnFnr1cYcJpm5AS5E%2Ftx985DwfXDXDH0f6ISoeTwuxlnqvPOcbUQGHRRfiBXrxfdHFoqBTl%2F%2BYYlHc20AzY%2BgxvwuL1dzcUUqIRyMXhIduC43LuewL6fUVlNUoPG2TKNjAmPe%2F7YfS3mA%2FdhD8HOdlyWEFQHXUaM3DiNGf3k0sl2SVXVhWb4lPB2Kdd0dsw6MIVU5WHwpfO%2F2tD8J9WC109RbytpqUr2D%2BH9zAg4dO3MPUqo4yFvcbAAyuajipreTN%2BgdB9tPhHH5%2FgcldtQl8Uo66WAYMwWa6qrocqz6YJ%2FN1sJHRHgmak9Exd1o%2BdMNoAfbTju5vn5akahHu6ED%2FuURtzGP5bvSma52rieJFF%2FgmvsfsQUvieA%2BsCbqNDjLbYwf1hzoNbRCYTcKPGLO7SuCK1rzzuDCU6Q%2FMwdUJ4li0hmGrwB8DX3aUM8FEZOU9l%2Fwkq4yxL8WPZHSp3%2BG20pw7hW4sYfucDQRzvzozZUmutR77izuRF79ryJRKdOKOnwMJ2MomcGxWycHMMbSq8EGOqUBDkCloGkFzjXl%2BEJCm7ZJHqWmsDuQSi1Nv7FvpUSFTtjjO0m91jzecPRCYkwNQpPPi5ybtDMQdBWDdBSFvTVsaQOKnITboFqKlC9LK0ElnwOpRKA2zpg3xcraeki8K3e9eg9d7vTE%2FbychKD0bRMHtQjhRzdD5TBS%2FrZUIBiRRV%2BBaWhXk0pztbRyOc22XwNukNm%2BG7d9%2FZhCohIqMrxwfhI22wAF&X-Amz-Signature=c8fb1e8d05abcb01232de0f4da9b8e07bf485afc7dc081e2f65c505d6529b1ed&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2T4644%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Xv%2FiO1sT%2FtPVyaxjfXCQFXOVLpHoPawgDLspYcscygIgPi5XK53HpICE1icXBiSHAjVNBT1153OSFFImB8ktcjUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG97ODWD5N84YZp9HircA5WznwOpFZbbQNL%2FsLSq7khuNWKfSucpVj9bZ8rs1QlgRFKxaQANYVBy%2Fd%2FWvSLl47a0tEjQnsxykX8WnfovaqREZWNYD0%2BZKJgOMvg9cqYKnFnr1cYcJpm5AS5E%2Ftx985DwfXDXDH0f6ISoeTwuxlnqvPOcbUQGHRRfiBXrxfdHFoqBTl%2F%2BYYlHc20AzY%2BgxvwuL1dzcUUqIRyMXhIduC43LuewL6fUVlNUoPG2TKNjAmPe%2F7YfS3mA%2FdhD8HOdlyWEFQHXUaM3DiNGf3k0sl2SVXVhWb4lPB2Kdd0dsw6MIVU5WHwpfO%2F2tD8J9WC109RbytpqUr2D%2BH9zAg4dO3MPUqo4yFvcbAAyuajipreTN%2BgdB9tPhHH5%2FgcldtQl8Uo66WAYMwWa6qrocqz6YJ%2FN1sJHRHgmak9Exd1o%2BdMNoAfbTju5vn5akahHu6ED%2FuURtzGP5bvSma52rieJFF%2FgmvsfsQUvieA%2BsCbqNDjLbYwf1hzoNbRCYTcKPGLO7SuCK1rzzuDCU6Q%2FMwdUJ4li0hmGrwB8DX3aUM8FEZOU9l%2Fwkq4yxL8WPZHSp3%2BG20pw7hW4sYfucDQRzvzozZUmutR77izuRF79ryJRKdOKOnwMJ2MomcGxWycHMMbSq8EGOqUBDkCloGkFzjXl%2BEJCm7ZJHqWmsDuQSi1Nv7FvpUSFTtjjO0m91jzecPRCYkwNQpPPi5ybtDMQdBWDdBSFvTVsaQOKnITboFqKlC9LK0ElnwOpRKA2zpg3xcraeki8K3e9eg9d7vTE%2FbychKD0bRMHtQjhRzdD5TBS%2FrZUIBiRRV%2BBaWhXk0pztbRyOc22XwNukNm%2BG7d9%2FZhCohIqMrxwfhI22wAF&X-Amz-Signature=a3e7fab7a245db277e7c77d76a22831964592f7d984c004998d570933e43d414&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2T4644%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7Xv%2FiO1sT%2FtPVyaxjfXCQFXOVLpHoPawgDLspYcscygIgPi5XK53HpICE1icXBiSHAjVNBT1153OSFFImB8ktcjUqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG97ODWD5N84YZp9HircA5WznwOpFZbbQNL%2FsLSq7khuNWKfSucpVj9bZ8rs1QlgRFKxaQANYVBy%2Fd%2FWvSLl47a0tEjQnsxykX8WnfovaqREZWNYD0%2BZKJgOMvg9cqYKnFnr1cYcJpm5AS5E%2Ftx985DwfXDXDH0f6ISoeTwuxlnqvPOcbUQGHRRfiBXrxfdHFoqBTl%2F%2BYYlHc20AzY%2BgxvwuL1dzcUUqIRyMXhIduC43LuewL6fUVlNUoPG2TKNjAmPe%2F7YfS3mA%2FdhD8HOdlyWEFQHXUaM3DiNGf3k0sl2SVXVhWb4lPB2Kdd0dsw6MIVU5WHwpfO%2F2tD8J9WC109RbytpqUr2D%2BH9zAg4dO3MPUqo4yFvcbAAyuajipreTN%2BgdB9tPhHH5%2FgcldtQl8Uo66WAYMwWa6qrocqz6YJ%2FN1sJHRHgmak9Exd1o%2BdMNoAfbTju5vn5akahHu6ED%2FuURtzGP5bvSma52rieJFF%2FgmvsfsQUvieA%2BsCbqNDjLbYwf1hzoNbRCYTcKPGLO7SuCK1rzzuDCU6Q%2FMwdUJ4li0hmGrwB8DX3aUM8FEZOU9l%2Fwkq4yxL8WPZHSp3%2BG20pw7hW4sYfucDQRzvzozZUmutR77izuRF79ryJRKdOKOnwMJ2MomcGxWycHMMbSq8EGOqUBDkCloGkFzjXl%2BEJCm7ZJHqWmsDuQSi1Nv7FvpUSFTtjjO0m91jzecPRCYkwNQpPPi5ybtDMQdBWDdBSFvTVsaQOKnITboFqKlC9LK0ElnwOpRKA2zpg3xcraeki8K3e9eg9d7vTE%2FbychKD0bRMHtQjhRzdD5TBS%2FrZUIBiRRV%2BBaWhXk0pztbRyOc22XwNukNm%2BG7d9%2FZhCohIqMrxwfhI22wAF&X-Amz-Signature=b73d344de74660be6d7b936c7a263077ecd8c039a99ef01a63fe5dd33da67b15&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
