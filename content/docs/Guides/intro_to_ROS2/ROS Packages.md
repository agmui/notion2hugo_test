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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IOZVAM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmGG35RhPq2ZfTz0lwpYIPV1EApgMU7Usfz%2BnWNQVSMAiEA5GhPR%2BZJ7jS4BvhRoI7HTml6NTnZpEMBW%2BvpTefRHs4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBZiBgDs%2FHkECaDchyrcA7mSMzfVvF7vAL6U8GcuRSbNsHkZz5IZkW2O967p7KrOG9FHKwI%2B5gd8kq0VoIxIoIG3ZG%2B8xe2eBc3mbIJtx1zPTVXq%2F0A3BbGuc8FdqRvq9k7%2Bnmg3QB7sxaynRAQQeK33FRLGXb9sUXcfu41Vsp%2B6ddGrpUUZnewp4aHSy5SB6Q3mPT2YIUSyR0X0ZnaX8xkY1JbrhrDwKv2rqFxWNQW9%2Bqr66Cvbx5wvNefLC2hTVraoGgAqzxUhh62ctSCGoY7kWLd65EAL4vtxOg18tL2D7WSU1EEeiUL5rl6nivzp4cwnHU%2BsOngNX2GSuZSlm3aXXR7Lxcor17ly9lITokwGbLC511qCg24cERk4COm%2FiPi7lExk%2BjmM3wes541D0YBOoxP7f2nNo0di4QQ89cPrz34dj9VpiUD47FCfgEVY0tPfUbjeSCYqcD4y6KsEPfeEEBI5DtoYeuCnjC2YA1JMpFRV6Wrffq%2FIrg9KJ9FM8mywGU6f9jXMo3WjtNpgD0BNVKT%2FSF6wWW0SnDwo5Ky9SboPNZ8VDZUF8%2FBgIIz4HkYlT%2BdEnZkCKH%2BdxGNW2cXOU4H7Bx%2FQDJzAPsEGCcQ3W9VgC2Qf24aNUFtHfK0cbvnm0eGlfzQmt%2BbWMPec3b4GOqUBpNfbW%2BuTXp7MylkRi7EG2K0nvA6O1cyVpM7EEsPE5Vclmvepot6P875olNXMhjBRbn0rl0Ljig0BckzoN2%2FTZAI%2B0NLnHx6fRiyRRK24n5Slf3zz8zf6638bqc1FOew6tk4Y74Yt4XU2yCk8JjJVcrctczjoKOzUK7o1e0FGyIqo7mQ5vjy%2FO9iJpG4mbKmh4MPf4LOTMEg42m2bwZktSv8h%2FfmO&X-Amz-Signature=de35c3ab5c943d3503233160cf9392efb4b53b79f68442a79ff055e09d3ca336&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IOZVAM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmGG35RhPq2ZfTz0lwpYIPV1EApgMU7Usfz%2BnWNQVSMAiEA5GhPR%2BZJ7jS4BvhRoI7HTml6NTnZpEMBW%2BvpTefRHs4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBZiBgDs%2FHkECaDchyrcA7mSMzfVvF7vAL6U8GcuRSbNsHkZz5IZkW2O967p7KrOG9FHKwI%2B5gd8kq0VoIxIoIG3ZG%2B8xe2eBc3mbIJtx1zPTVXq%2F0A3BbGuc8FdqRvq9k7%2Bnmg3QB7sxaynRAQQeK33FRLGXb9sUXcfu41Vsp%2B6ddGrpUUZnewp4aHSy5SB6Q3mPT2YIUSyR0X0ZnaX8xkY1JbrhrDwKv2rqFxWNQW9%2Bqr66Cvbx5wvNefLC2hTVraoGgAqzxUhh62ctSCGoY7kWLd65EAL4vtxOg18tL2D7WSU1EEeiUL5rl6nivzp4cwnHU%2BsOngNX2GSuZSlm3aXXR7Lxcor17ly9lITokwGbLC511qCg24cERk4COm%2FiPi7lExk%2BjmM3wes541D0YBOoxP7f2nNo0di4QQ89cPrz34dj9VpiUD47FCfgEVY0tPfUbjeSCYqcD4y6KsEPfeEEBI5DtoYeuCnjC2YA1JMpFRV6Wrffq%2FIrg9KJ9FM8mywGU6f9jXMo3WjtNpgD0BNVKT%2FSF6wWW0SnDwo5Ky9SboPNZ8VDZUF8%2FBgIIz4HkYlT%2BdEnZkCKH%2BdxGNW2cXOU4H7Bx%2FQDJzAPsEGCcQ3W9VgC2Qf24aNUFtHfK0cbvnm0eGlfzQmt%2BbWMPec3b4GOqUBpNfbW%2BuTXp7MylkRi7EG2K0nvA6O1cyVpM7EEsPE5Vclmvepot6P875olNXMhjBRbn0rl0Ljig0BckzoN2%2FTZAI%2B0NLnHx6fRiyRRK24n5Slf3zz8zf6638bqc1FOew6tk4Y74Yt4XU2yCk8JjJVcrctczjoKOzUK7o1e0FGyIqo7mQ5vjy%2FO9iJpG4mbKmh4MPf4LOTMEg42m2bwZktSv8h%2FfmO&X-Amz-Signature=04c438e0db4f6ca1ffa6818f93eff2d2a05bd4657b23646d01806f2856ab0ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IOZVAM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmGG35RhPq2ZfTz0lwpYIPV1EApgMU7Usfz%2BnWNQVSMAiEA5GhPR%2BZJ7jS4BvhRoI7HTml6NTnZpEMBW%2BvpTefRHs4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBZiBgDs%2FHkECaDchyrcA7mSMzfVvF7vAL6U8GcuRSbNsHkZz5IZkW2O967p7KrOG9FHKwI%2B5gd8kq0VoIxIoIG3ZG%2B8xe2eBc3mbIJtx1zPTVXq%2F0A3BbGuc8FdqRvq9k7%2Bnmg3QB7sxaynRAQQeK33FRLGXb9sUXcfu41Vsp%2B6ddGrpUUZnewp4aHSy5SB6Q3mPT2YIUSyR0X0ZnaX8xkY1JbrhrDwKv2rqFxWNQW9%2Bqr66Cvbx5wvNefLC2hTVraoGgAqzxUhh62ctSCGoY7kWLd65EAL4vtxOg18tL2D7WSU1EEeiUL5rl6nivzp4cwnHU%2BsOngNX2GSuZSlm3aXXR7Lxcor17ly9lITokwGbLC511qCg24cERk4COm%2FiPi7lExk%2BjmM3wes541D0YBOoxP7f2nNo0di4QQ89cPrz34dj9VpiUD47FCfgEVY0tPfUbjeSCYqcD4y6KsEPfeEEBI5DtoYeuCnjC2YA1JMpFRV6Wrffq%2FIrg9KJ9FM8mywGU6f9jXMo3WjtNpgD0BNVKT%2FSF6wWW0SnDwo5Ky9SboPNZ8VDZUF8%2FBgIIz4HkYlT%2BdEnZkCKH%2BdxGNW2cXOU4H7Bx%2FQDJzAPsEGCcQ3W9VgC2Qf24aNUFtHfK0cbvnm0eGlfzQmt%2BbWMPec3b4GOqUBpNfbW%2BuTXp7MylkRi7EG2K0nvA6O1cyVpM7EEsPE5Vclmvepot6P875olNXMhjBRbn0rl0Ljig0BckzoN2%2FTZAI%2B0NLnHx6fRiyRRK24n5Slf3zz8zf6638bqc1FOew6tk4Y74Yt4XU2yCk8JjJVcrctczjoKOzUK7o1e0FGyIqo7mQ5vjy%2FO9iJpG4mbKmh4MPf4LOTMEg42m2bwZktSv8h%2FfmO&X-Amz-Signature=ce1b81927dd95bc2eea5c6ed80e274a6c3c141fb66ca0d790b40c8eda89ce139&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IOZVAM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmGG35RhPq2ZfTz0lwpYIPV1EApgMU7Usfz%2BnWNQVSMAiEA5GhPR%2BZJ7jS4BvhRoI7HTml6NTnZpEMBW%2BvpTefRHs4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBZiBgDs%2FHkECaDchyrcA7mSMzfVvF7vAL6U8GcuRSbNsHkZz5IZkW2O967p7KrOG9FHKwI%2B5gd8kq0VoIxIoIG3ZG%2B8xe2eBc3mbIJtx1zPTVXq%2F0A3BbGuc8FdqRvq9k7%2Bnmg3QB7sxaynRAQQeK33FRLGXb9sUXcfu41Vsp%2B6ddGrpUUZnewp4aHSy5SB6Q3mPT2YIUSyR0X0ZnaX8xkY1JbrhrDwKv2rqFxWNQW9%2Bqr66Cvbx5wvNefLC2hTVraoGgAqzxUhh62ctSCGoY7kWLd65EAL4vtxOg18tL2D7WSU1EEeiUL5rl6nivzp4cwnHU%2BsOngNX2GSuZSlm3aXXR7Lxcor17ly9lITokwGbLC511qCg24cERk4COm%2FiPi7lExk%2BjmM3wes541D0YBOoxP7f2nNo0di4QQ89cPrz34dj9VpiUD47FCfgEVY0tPfUbjeSCYqcD4y6KsEPfeEEBI5DtoYeuCnjC2YA1JMpFRV6Wrffq%2FIrg9KJ9FM8mywGU6f9jXMo3WjtNpgD0BNVKT%2FSF6wWW0SnDwo5Ky9SboPNZ8VDZUF8%2FBgIIz4HkYlT%2BdEnZkCKH%2BdxGNW2cXOU4H7Bx%2FQDJzAPsEGCcQ3W9VgC2Qf24aNUFtHfK0cbvnm0eGlfzQmt%2BbWMPec3b4GOqUBpNfbW%2BuTXp7MylkRi7EG2K0nvA6O1cyVpM7EEsPE5Vclmvepot6P875olNXMhjBRbn0rl0Ljig0BckzoN2%2FTZAI%2B0NLnHx6fRiyRRK24n5Slf3zz8zf6638bqc1FOew6tk4Y74Yt4XU2yCk8JjJVcrctczjoKOzUK7o1e0FGyIqo7mQ5vjy%2FO9iJpG4mbKmh4MPf4LOTMEg42m2bwZktSv8h%2FfmO&X-Amz-Signature=b4b35bcc29f715a876805e7d1860f1ac7606bcbd07ef679077e2a3cdc1be9ed5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IOZVAM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmGG35RhPq2ZfTz0lwpYIPV1EApgMU7Usfz%2BnWNQVSMAiEA5GhPR%2BZJ7jS4BvhRoI7HTml6NTnZpEMBW%2BvpTefRHs4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBZiBgDs%2FHkECaDchyrcA7mSMzfVvF7vAL6U8GcuRSbNsHkZz5IZkW2O967p7KrOG9FHKwI%2B5gd8kq0VoIxIoIG3ZG%2B8xe2eBc3mbIJtx1zPTVXq%2F0A3BbGuc8FdqRvq9k7%2Bnmg3QB7sxaynRAQQeK33FRLGXb9sUXcfu41Vsp%2B6ddGrpUUZnewp4aHSy5SB6Q3mPT2YIUSyR0X0ZnaX8xkY1JbrhrDwKv2rqFxWNQW9%2Bqr66Cvbx5wvNefLC2hTVraoGgAqzxUhh62ctSCGoY7kWLd65EAL4vtxOg18tL2D7WSU1EEeiUL5rl6nivzp4cwnHU%2BsOngNX2GSuZSlm3aXXR7Lxcor17ly9lITokwGbLC511qCg24cERk4COm%2FiPi7lExk%2BjmM3wes541D0YBOoxP7f2nNo0di4QQ89cPrz34dj9VpiUD47FCfgEVY0tPfUbjeSCYqcD4y6KsEPfeEEBI5DtoYeuCnjC2YA1JMpFRV6Wrffq%2FIrg9KJ9FM8mywGU6f9jXMo3WjtNpgD0BNVKT%2FSF6wWW0SnDwo5Ky9SboPNZ8VDZUF8%2FBgIIz4HkYlT%2BdEnZkCKH%2BdxGNW2cXOU4H7Bx%2FQDJzAPsEGCcQ3W9VgC2Qf24aNUFtHfK0cbvnm0eGlfzQmt%2BbWMPec3b4GOqUBpNfbW%2BuTXp7MylkRi7EG2K0nvA6O1cyVpM7EEsPE5Vclmvepot6P875olNXMhjBRbn0rl0Ljig0BckzoN2%2FTZAI%2B0NLnHx6fRiyRRK24n5Slf3zz8zf6638bqc1FOew6tk4Y74Yt4XU2yCk8JjJVcrctczjoKOzUK7o1e0FGyIqo7mQ5vjy%2FO9iJpG4mbKmh4MPf4LOTMEg42m2bwZktSv8h%2FfmO&X-Amz-Signature=ae88dde7a072fcede5e55171c8c667faea3a207aa8065a9941bc367c859dc22d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IOZVAM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmGG35RhPq2ZfTz0lwpYIPV1EApgMU7Usfz%2BnWNQVSMAiEA5GhPR%2BZJ7jS4BvhRoI7HTml6NTnZpEMBW%2BvpTefRHs4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBZiBgDs%2FHkECaDchyrcA7mSMzfVvF7vAL6U8GcuRSbNsHkZz5IZkW2O967p7KrOG9FHKwI%2B5gd8kq0VoIxIoIG3ZG%2B8xe2eBc3mbIJtx1zPTVXq%2F0A3BbGuc8FdqRvq9k7%2Bnmg3QB7sxaynRAQQeK33FRLGXb9sUXcfu41Vsp%2B6ddGrpUUZnewp4aHSy5SB6Q3mPT2YIUSyR0X0ZnaX8xkY1JbrhrDwKv2rqFxWNQW9%2Bqr66Cvbx5wvNefLC2hTVraoGgAqzxUhh62ctSCGoY7kWLd65EAL4vtxOg18tL2D7WSU1EEeiUL5rl6nivzp4cwnHU%2BsOngNX2GSuZSlm3aXXR7Lxcor17ly9lITokwGbLC511qCg24cERk4COm%2FiPi7lExk%2BjmM3wes541D0YBOoxP7f2nNo0di4QQ89cPrz34dj9VpiUD47FCfgEVY0tPfUbjeSCYqcD4y6KsEPfeEEBI5DtoYeuCnjC2YA1JMpFRV6Wrffq%2FIrg9KJ9FM8mywGU6f9jXMo3WjtNpgD0BNVKT%2FSF6wWW0SnDwo5Ky9SboPNZ8VDZUF8%2FBgIIz4HkYlT%2BdEnZkCKH%2BdxGNW2cXOU4H7Bx%2FQDJzAPsEGCcQ3W9VgC2Qf24aNUFtHfK0cbvnm0eGlfzQmt%2BbWMPec3b4GOqUBpNfbW%2BuTXp7MylkRi7EG2K0nvA6O1cyVpM7EEsPE5Vclmvepot6P875olNXMhjBRbn0rl0Ljig0BckzoN2%2FTZAI%2B0NLnHx6fRiyRRK24n5Slf3zz8zf6638bqc1FOew6tk4Y74Yt4XU2yCk8JjJVcrctczjoKOzUK7o1e0FGyIqo7mQ5vjy%2FO9iJpG4mbKmh4MPf4LOTMEg42m2bwZktSv8h%2FfmO&X-Amz-Signature=11525e496efa602f364363b2299014fd7b8502e9d26990faf1778c1c1c94ee40&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3IOZVAM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmGG35RhPq2ZfTz0lwpYIPV1EApgMU7Usfz%2BnWNQVSMAiEA5GhPR%2BZJ7jS4BvhRoI7HTml6NTnZpEMBW%2BvpTefRHs4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBZiBgDs%2FHkECaDchyrcA7mSMzfVvF7vAL6U8GcuRSbNsHkZz5IZkW2O967p7KrOG9FHKwI%2B5gd8kq0VoIxIoIG3ZG%2B8xe2eBc3mbIJtx1zPTVXq%2F0A3BbGuc8FdqRvq9k7%2Bnmg3QB7sxaynRAQQeK33FRLGXb9sUXcfu41Vsp%2B6ddGrpUUZnewp4aHSy5SB6Q3mPT2YIUSyR0X0ZnaX8xkY1JbrhrDwKv2rqFxWNQW9%2Bqr66Cvbx5wvNefLC2hTVraoGgAqzxUhh62ctSCGoY7kWLd65EAL4vtxOg18tL2D7WSU1EEeiUL5rl6nivzp4cwnHU%2BsOngNX2GSuZSlm3aXXR7Lxcor17ly9lITokwGbLC511qCg24cERk4COm%2FiPi7lExk%2BjmM3wes541D0YBOoxP7f2nNo0di4QQ89cPrz34dj9VpiUD47FCfgEVY0tPfUbjeSCYqcD4y6KsEPfeEEBI5DtoYeuCnjC2YA1JMpFRV6Wrffq%2FIrg9KJ9FM8mywGU6f9jXMo3WjtNpgD0BNVKT%2FSF6wWW0SnDwo5Ky9SboPNZ8VDZUF8%2FBgIIz4HkYlT%2BdEnZkCKH%2BdxGNW2cXOU4H7Bx%2FQDJzAPsEGCcQ3W9VgC2Qf24aNUFtHfK0cbvnm0eGlfzQmt%2BbWMPec3b4GOqUBpNfbW%2BuTXp7MylkRi7EG2K0nvA6O1cyVpM7EEsPE5Vclmvepot6P875olNXMhjBRbn0rl0Ljig0BckzoN2%2FTZAI%2B0NLnHx6fRiyRRK24n5Slf3zz8zf6638bqc1FOew6tk4Y74Yt4XU2yCk8JjJVcrctczjoKOzUK7o1e0FGyIqo7mQ5vjy%2FO9iJpG4mbKmh4MPf4LOTMEg42m2bwZktSv8h%2FfmO&X-Amz-Signature=4932904989e1e19eb7b74b40a7950d4d5a3355f684f625d1f4a263de40dee058&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
