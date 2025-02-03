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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIBZNVA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBodrBuA0jFOSMNqOijl3ispUyl94hCouAWtLVcgRW3dAiBfnoiUhtZ5kZDSJ1kmVj5fT%2B3MLYVV6EEGo86G5Xi6OCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMNN2znSLJ01Vw3bWaKtwDerZF8QIiULLFiohahTT2NTh9pNudp%2BoWuSvwgLV1ZdHXZ6Rnz8INdOa9CgwXC5ysGqfEwnUf1k6R9SBkBJlpkRMlRE6nhb6x3KjZaox%2F6a2OLTIPhua1NArSdpQCzcZsfITOouu%2Bk%2BYTr6yVwsf29XjfWueAMkAQCBLNoIp34QSU9M75wWDbuKfVjSeTyTJoBP1fjC3rMHLDOmHp6s7dFKsYZWPhNtUTX5CJiRe3iWXbzk2ZYPeLN5l9UOWjfnQcf9CWC2VkNf8%2FN01netGJzkUqpL403kiK%2FC5kxHPcU69JKYT5ZkcSx3droZ1vebVJKW7MmRWNEToBWN9XvzW0hohp9in0LxzBEIvAOXk%2Frq%2BKNNRQUq%2Bcrm%2BNlanBgL8qECHxwxI8mJSwJ%2BYCuq05l6d9atENoxLFWOt7mwoJcsdZ%2BKwMsm3GR2dlXcxPzQ8tyuuJthRx6MZproDbKsrifw6EbiL2u70EivlzPzMy3M3YcK5%2FvJaGBi6YK185rw%2FiBXqWANcyaIqSXSnUf1xWxpgFKaWXtJw4hLKSgt5c8q9o9XTlny8DTFQMZVRzqoQytdEsnH8SKoo3LVFNCZ7GqRe0Q%2B0cq2NOE5N8BnMFQigw17%2BzR3SuBVPScv8w9JWFvQY6pgEqQYBh0ho0LdlHDL87shd16fx6CHUHsBgev4RjOd1BVR9XqOIPPv0xQBC3n5NNSnA31SWl0meds%2B0ARogmIMR4OQopyb5uFznJrAY0MefEqc2cbB2z8mcTvwOf3h6VCJLdKMsQVD2yYOycVl8BPoe1sFmnYeYb6tayEj348fHvscWyiR7OJMx%2FTOjFcCxH2Mq0H6INsvyVqrlsQfAJAC65A92paF%2Fp&X-Amz-Signature=9cca6b88d8c777e2ac36c69079b67cf2d1e749d39a5c2bb4fc8cfba4ce100a16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIBZNVA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBodrBuA0jFOSMNqOijl3ispUyl94hCouAWtLVcgRW3dAiBfnoiUhtZ5kZDSJ1kmVj5fT%2B3MLYVV6EEGo86G5Xi6OCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMNN2znSLJ01Vw3bWaKtwDerZF8QIiULLFiohahTT2NTh9pNudp%2BoWuSvwgLV1ZdHXZ6Rnz8INdOa9CgwXC5ysGqfEwnUf1k6R9SBkBJlpkRMlRE6nhb6x3KjZaox%2F6a2OLTIPhua1NArSdpQCzcZsfITOouu%2Bk%2BYTr6yVwsf29XjfWueAMkAQCBLNoIp34QSU9M75wWDbuKfVjSeTyTJoBP1fjC3rMHLDOmHp6s7dFKsYZWPhNtUTX5CJiRe3iWXbzk2ZYPeLN5l9UOWjfnQcf9CWC2VkNf8%2FN01netGJzkUqpL403kiK%2FC5kxHPcU69JKYT5ZkcSx3droZ1vebVJKW7MmRWNEToBWN9XvzW0hohp9in0LxzBEIvAOXk%2Frq%2BKNNRQUq%2Bcrm%2BNlanBgL8qECHxwxI8mJSwJ%2BYCuq05l6d9atENoxLFWOt7mwoJcsdZ%2BKwMsm3GR2dlXcxPzQ8tyuuJthRx6MZproDbKsrifw6EbiL2u70EivlzPzMy3M3YcK5%2FvJaGBi6YK185rw%2FiBXqWANcyaIqSXSnUf1xWxpgFKaWXtJw4hLKSgt5c8q9o9XTlny8DTFQMZVRzqoQytdEsnH8SKoo3LVFNCZ7GqRe0Q%2B0cq2NOE5N8BnMFQigw17%2BzR3SuBVPScv8w9JWFvQY6pgEqQYBh0ho0LdlHDL87shd16fx6CHUHsBgev4RjOd1BVR9XqOIPPv0xQBC3n5NNSnA31SWl0meds%2B0ARogmIMR4OQopyb5uFznJrAY0MefEqc2cbB2z8mcTvwOf3h6VCJLdKMsQVD2yYOycVl8BPoe1sFmnYeYb6tayEj348fHvscWyiR7OJMx%2FTOjFcCxH2Mq0H6INsvyVqrlsQfAJAC65A92paF%2Fp&X-Amz-Signature=b20bcc3ac51fa09f6c56d5f2f8f0359bd2bd3ee42a41b5ca19f5f7ef3c990d5f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIBZNVA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBodrBuA0jFOSMNqOijl3ispUyl94hCouAWtLVcgRW3dAiBfnoiUhtZ5kZDSJ1kmVj5fT%2B3MLYVV6EEGo86G5Xi6OCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMNN2znSLJ01Vw3bWaKtwDerZF8QIiULLFiohahTT2NTh9pNudp%2BoWuSvwgLV1ZdHXZ6Rnz8INdOa9CgwXC5ysGqfEwnUf1k6R9SBkBJlpkRMlRE6nhb6x3KjZaox%2F6a2OLTIPhua1NArSdpQCzcZsfITOouu%2Bk%2BYTr6yVwsf29XjfWueAMkAQCBLNoIp34QSU9M75wWDbuKfVjSeTyTJoBP1fjC3rMHLDOmHp6s7dFKsYZWPhNtUTX5CJiRe3iWXbzk2ZYPeLN5l9UOWjfnQcf9CWC2VkNf8%2FN01netGJzkUqpL403kiK%2FC5kxHPcU69JKYT5ZkcSx3droZ1vebVJKW7MmRWNEToBWN9XvzW0hohp9in0LxzBEIvAOXk%2Frq%2BKNNRQUq%2Bcrm%2BNlanBgL8qECHxwxI8mJSwJ%2BYCuq05l6d9atENoxLFWOt7mwoJcsdZ%2BKwMsm3GR2dlXcxPzQ8tyuuJthRx6MZproDbKsrifw6EbiL2u70EivlzPzMy3M3YcK5%2FvJaGBi6YK185rw%2FiBXqWANcyaIqSXSnUf1xWxpgFKaWXtJw4hLKSgt5c8q9o9XTlny8DTFQMZVRzqoQytdEsnH8SKoo3LVFNCZ7GqRe0Q%2B0cq2NOE5N8BnMFQigw17%2BzR3SuBVPScv8w9JWFvQY6pgEqQYBh0ho0LdlHDL87shd16fx6CHUHsBgev4RjOd1BVR9XqOIPPv0xQBC3n5NNSnA31SWl0meds%2B0ARogmIMR4OQopyb5uFznJrAY0MefEqc2cbB2z8mcTvwOf3h6VCJLdKMsQVD2yYOycVl8BPoe1sFmnYeYb6tayEj348fHvscWyiR7OJMx%2FTOjFcCxH2Mq0H6INsvyVqrlsQfAJAC65A92paF%2Fp&X-Amz-Signature=d7577748f5db78c548a58d90f23fb53a4532e89da49c551fc9887b8ecad7480f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIBZNVA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBodrBuA0jFOSMNqOijl3ispUyl94hCouAWtLVcgRW3dAiBfnoiUhtZ5kZDSJ1kmVj5fT%2B3MLYVV6EEGo86G5Xi6OCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMNN2znSLJ01Vw3bWaKtwDerZF8QIiULLFiohahTT2NTh9pNudp%2BoWuSvwgLV1ZdHXZ6Rnz8INdOa9CgwXC5ysGqfEwnUf1k6R9SBkBJlpkRMlRE6nhb6x3KjZaox%2F6a2OLTIPhua1NArSdpQCzcZsfITOouu%2Bk%2BYTr6yVwsf29XjfWueAMkAQCBLNoIp34QSU9M75wWDbuKfVjSeTyTJoBP1fjC3rMHLDOmHp6s7dFKsYZWPhNtUTX5CJiRe3iWXbzk2ZYPeLN5l9UOWjfnQcf9CWC2VkNf8%2FN01netGJzkUqpL403kiK%2FC5kxHPcU69JKYT5ZkcSx3droZ1vebVJKW7MmRWNEToBWN9XvzW0hohp9in0LxzBEIvAOXk%2Frq%2BKNNRQUq%2Bcrm%2BNlanBgL8qECHxwxI8mJSwJ%2BYCuq05l6d9atENoxLFWOt7mwoJcsdZ%2BKwMsm3GR2dlXcxPzQ8tyuuJthRx6MZproDbKsrifw6EbiL2u70EivlzPzMy3M3YcK5%2FvJaGBi6YK185rw%2FiBXqWANcyaIqSXSnUf1xWxpgFKaWXtJw4hLKSgt5c8q9o9XTlny8DTFQMZVRzqoQytdEsnH8SKoo3LVFNCZ7GqRe0Q%2B0cq2NOE5N8BnMFQigw17%2BzR3SuBVPScv8w9JWFvQY6pgEqQYBh0ho0LdlHDL87shd16fx6CHUHsBgev4RjOd1BVR9XqOIPPv0xQBC3n5NNSnA31SWl0meds%2B0ARogmIMR4OQopyb5uFznJrAY0MefEqc2cbB2z8mcTvwOf3h6VCJLdKMsQVD2yYOycVl8BPoe1sFmnYeYb6tayEj348fHvscWyiR7OJMx%2FTOjFcCxH2Mq0H6INsvyVqrlsQfAJAC65A92paF%2Fp&X-Amz-Signature=1446040b061d0e00a92d8108e834a535a496e069058d7068e41d6bf44bfad822&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIBZNVA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBodrBuA0jFOSMNqOijl3ispUyl94hCouAWtLVcgRW3dAiBfnoiUhtZ5kZDSJ1kmVj5fT%2B3MLYVV6EEGo86G5Xi6OCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMNN2znSLJ01Vw3bWaKtwDerZF8QIiULLFiohahTT2NTh9pNudp%2BoWuSvwgLV1ZdHXZ6Rnz8INdOa9CgwXC5ysGqfEwnUf1k6R9SBkBJlpkRMlRE6nhb6x3KjZaox%2F6a2OLTIPhua1NArSdpQCzcZsfITOouu%2Bk%2BYTr6yVwsf29XjfWueAMkAQCBLNoIp34QSU9M75wWDbuKfVjSeTyTJoBP1fjC3rMHLDOmHp6s7dFKsYZWPhNtUTX5CJiRe3iWXbzk2ZYPeLN5l9UOWjfnQcf9CWC2VkNf8%2FN01netGJzkUqpL403kiK%2FC5kxHPcU69JKYT5ZkcSx3droZ1vebVJKW7MmRWNEToBWN9XvzW0hohp9in0LxzBEIvAOXk%2Frq%2BKNNRQUq%2Bcrm%2BNlanBgL8qECHxwxI8mJSwJ%2BYCuq05l6d9atENoxLFWOt7mwoJcsdZ%2BKwMsm3GR2dlXcxPzQ8tyuuJthRx6MZproDbKsrifw6EbiL2u70EivlzPzMy3M3YcK5%2FvJaGBi6YK185rw%2FiBXqWANcyaIqSXSnUf1xWxpgFKaWXtJw4hLKSgt5c8q9o9XTlny8DTFQMZVRzqoQytdEsnH8SKoo3LVFNCZ7GqRe0Q%2B0cq2NOE5N8BnMFQigw17%2BzR3SuBVPScv8w9JWFvQY6pgEqQYBh0ho0LdlHDL87shd16fx6CHUHsBgev4RjOd1BVR9XqOIPPv0xQBC3n5NNSnA31SWl0meds%2B0ARogmIMR4OQopyb5uFznJrAY0MefEqc2cbB2z8mcTvwOf3h6VCJLdKMsQVD2yYOycVl8BPoe1sFmnYeYb6tayEj348fHvscWyiR7OJMx%2FTOjFcCxH2Mq0H6INsvyVqrlsQfAJAC65A92paF%2Fp&X-Amz-Signature=222de407141e28157a78e5af3e630d17c090bf6f6be2951d119cbc6a2c73e60d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIBZNVA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBodrBuA0jFOSMNqOijl3ispUyl94hCouAWtLVcgRW3dAiBfnoiUhtZ5kZDSJ1kmVj5fT%2B3MLYVV6EEGo86G5Xi6OCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMNN2znSLJ01Vw3bWaKtwDerZF8QIiULLFiohahTT2NTh9pNudp%2BoWuSvwgLV1ZdHXZ6Rnz8INdOa9CgwXC5ysGqfEwnUf1k6R9SBkBJlpkRMlRE6nhb6x3KjZaox%2F6a2OLTIPhua1NArSdpQCzcZsfITOouu%2Bk%2BYTr6yVwsf29XjfWueAMkAQCBLNoIp34QSU9M75wWDbuKfVjSeTyTJoBP1fjC3rMHLDOmHp6s7dFKsYZWPhNtUTX5CJiRe3iWXbzk2ZYPeLN5l9UOWjfnQcf9CWC2VkNf8%2FN01netGJzkUqpL403kiK%2FC5kxHPcU69JKYT5ZkcSx3droZ1vebVJKW7MmRWNEToBWN9XvzW0hohp9in0LxzBEIvAOXk%2Frq%2BKNNRQUq%2Bcrm%2BNlanBgL8qECHxwxI8mJSwJ%2BYCuq05l6d9atENoxLFWOt7mwoJcsdZ%2BKwMsm3GR2dlXcxPzQ8tyuuJthRx6MZproDbKsrifw6EbiL2u70EivlzPzMy3M3YcK5%2FvJaGBi6YK185rw%2FiBXqWANcyaIqSXSnUf1xWxpgFKaWXtJw4hLKSgt5c8q9o9XTlny8DTFQMZVRzqoQytdEsnH8SKoo3LVFNCZ7GqRe0Q%2B0cq2NOE5N8BnMFQigw17%2BzR3SuBVPScv8w9JWFvQY6pgEqQYBh0ho0LdlHDL87shd16fx6CHUHsBgev4RjOd1BVR9XqOIPPv0xQBC3n5NNSnA31SWl0meds%2B0ARogmIMR4OQopyb5uFznJrAY0MefEqc2cbB2z8mcTvwOf3h6VCJLdKMsQVD2yYOycVl8BPoe1sFmnYeYb6tayEj348fHvscWyiR7OJMx%2FTOjFcCxH2Mq0H6INsvyVqrlsQfAJAC65A92paF%2Fp&X-Amz-Signature=9fe94f5b58ec8565ddf226b1162ae415dc62804e4554d57006cc2717125956c7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUIBZNVA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T230725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBodrBuA0jFOSMNqOijl3ispUyl94hCouAWtLVcgRW3dAiBfnoiUhtZ5kZDSJ1kmVj5fT%2B3MLYVV6EEGo86G5Xi6OCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMNN2znSLJ01Vw3bWaKtwDerZF8QIiULLFiohahTT2NTh9pNudp%2BoWuSvwgLV1ZdHXZ6Rnz8INdOa9CgwXC5ysGqfEwnUf1k6R9SBkBJlpkRMlRE6nhb6x3KjZaox%2F6a2OLTIPhua1NArSdpQCzcZsfITOouu%2Bk%2BYTr6yVwsf29XjfWueAMkAQCBLNoIp34QSU9M75wWDbuKfVjSeTyTJoBP1fjC3rMHLDOmHp6s7dFKsYZWPhNtUTX5CJiRe3iWXbzk2ZYPeLN5l9UOWjfnQcf9CWC2VkNf8%2FN01netGJzkUqpL403kiK%2FC5kxHPcU69JKYT5ZkcSx3droZ1vebVJKW7MmRWNEToBWN9XvzW0hohp9in0LxzBEIvAOXk%2Frq%2BKNNRQUq%2Bcrm%2BNlanBgL8qECHxwxI8mJSwJ%2BYCuq05l6d9atENoxLFWOt7mwoJcsdZ%2BKwMsm3GR2dlXcxPzQ8tyuuJthRx6MZproDbKsrifw6EbiL2u70EivlzPzMy3M3YcK5%2FvJaGBi6YK185rw%2FiBXqWANcyaIqSXSnUf1xWxpgFKaWXtJw4hLKSgt5c8q9o9XTlny8DTFQMZVRzqoQytdEsnH8SKoo3LVFNCZ7GqRe0Q%2B0cq2NOE5N8BnMFQigw17%2BzR3SuBVPScv8w9JWFvQY6pgEqQYBh0ho0LdlHDL87shd16fx6CHUHsBgev4RjOd1BVR9XqOIPPv0xQBC3n5NNSnA31SWl0meds%2B0ARogmIMR4OQopyb5uFznJrAY0MefEqc2cbB2z8mcTvwOf3h6VCJLdKMsQVD2yYOycVl8BPoe1sFmnYeYb6tayEj348fHvscWyiR7OJMx%2FTOjFcCxH2Mq0H6INsvyVqrlsQfAJAC65A92paF%2Fp&X-Amz-Signature=7062ca59c7fbb05c190dd37bd35265ebe4beda8b52d34baca6a8babefd2df685&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
