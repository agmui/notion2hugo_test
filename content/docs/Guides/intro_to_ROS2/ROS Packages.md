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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVPSS3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGxN2zZviw1DxN0N4%2F4KVD%2B9ClPhxq%2Bi%2BZ1mMtrohtvWAiEAmx989wZfdbuLvbrdocne2AzGAA7EgHhCyvi5%2B%2FHEJFUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEGMmy3M89Ct1KHACrcA%2BC%2F9BGV9buh3SR3vpXURbW8espICGcVk7maaWxvqWUduIhd6nu0nYpc2huc%2BWSHAge2fjtyXqmk9teAXl0E2cLmC9CDfHDej6bdWweVGGoqjFK4eHE7FOreqopAJoE99rqDKJ%2FKHinRTvU5aSHvErg9dANOXL5hPlAZik8ekdK%2FyNVOPusUdEOBdBd%2BdvyvwYcapklury6fYSHfce%2BLLcyblr%2BvwB8OIMJgLCZRgTp6Nnwanb77Ymnfy02n1EdETjYaTBGz8TY7UUSIjTlPIcxvN9FXeoEXGXqodUcwWKZ7SWY86F%2BduU7EamK4BXtNuwUwixU2XnpcWptlqxoqix2KIklZquX0EaUPuazYTL6lWckpS2X40yAa4P1PTC42l1IqrD1cbdpR2p37MwaFhqRir1l3LJrKP%2FEmuGBSZYOmpkpXXjeC9UyiLW4Y3O%2FLqoaS8ZlrDzRXYHCBcbXH40RXr88a%2Bgvn5YfCO%2BxJXt9x06nRKZ2FOHpzQF5EgGRIANm2yuZUC69jQDzBoEMMa%2FYQ3PlXAy7hE62pbqsVsL0cRq8u6vN8IkKCqJOFAuWtpiUko4xlXqDS5eCqUh5MwqIeIOni9xn5592fXsTqXrQqkwRSC2AecrIpP5zFMJfZ5b8GOqUBejVa2C4Fb53kLvDbnw73LfkLRQ4L94CfloyL1Ss5EeVpzVC5iRs42IKhFG1t4%2FGnGBqn84AQN6PU6Y9g7U8B7RRlm%2BGW47jntJscSf2wmBHRMuEqnTa%2FZ9IMIe80Oht43w7kqvJvU4W5LIYB%2FeraLXtnqsCYnNDVhaOPVfd7ozmUg3o2vfU7rAC7e7NJ1SQs1njFz0I8qvEcJCK5%2BXyzMfumK7PR&X-Amz-Signature=b9e02ff75d423c44171fd8adf7217dac813731c2a0bc2a31b39c124e1eb37cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVPSS3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGxN2zZviw1DxN0N4%2F4KVD%2B9ClPhxq%2Bi%2BZ1mMtrohtvWAiEAmx989wZfdbuLvbrdocne2AzGAA7EgHhCyvi5%2B%2FHEJFUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEGMmy3M89Ct1KHACrcA%2BC%2F9BGV9buh3SR3vpXURbW8espICGcVk7maaWxvqWUduIhd6nu0nYpc2huc%2BWSHAge2fjtyXqmk9teAXl0E2cLmC9CDfHDej6bdWweVGGoqjFK4eHE7FOreqopAJoE99rqDKJ%2FKHinRTvU5aSHvErg9dANOXL5hPlAZik8ekdK%2FyNVOPusUdEOBdBd%2BdvyvwYcapklury6fYSHfce%2BLLcyblr%2BvwB8OIMJgLCZRgTp6Nnwanb77Ymnfy02n1EdETjYaTBGz8TY7UUSIjTlPIcxvN9FXeoEXGXqodUcwWKZ7SWY86F%2BduU7EamK4BXtNuwUwixU2XnpcWptlqxoqix2KIklZquX0EaUPuazYTL6lWckpS2X40yAa4P1PTC42l1IqrD1cbdpR2p37MwaFhqRir1l3LJrKP%2FEmuGBSZYOmpkpXXjeC9UyiLW4Y3O%2FLqoaS8ZlrDzRXYHCBcbXH40RXr88a%2Bgvn5YfCO%2BxJXt9x06nRKZ2FOHpzQF5EgGRIANm2yuZUC69jQDzBoEMMa%2FYQ3PlXAy7hE62pbqsVsL0cRq8u6vN8IkKCqJOFAuWtpiUko4xlXqDS5eCqUh5MwqIeIOni9xn5592fXsTqXrQqkwRSC2AecrIpP5zFMJfZ5b8GOqUBejVa2C4Fb53kLvDbnw73LfkLRQ4L94CfloyL1Ss5EeVpzVC5iRs42IKhFG1t4%2FGnGBqn84AQN6PU6Y9g7U8B7RRlm%2BGW47jntJscSf2wmBHRMuEqnTa%2FZ9IMIe80Oht43w7kqvJvU4W5LIYB%2FeraLXtnqsCYnNDVhaOPVfd7ozmUg3o2vfU7rAC7e7NJ1SQs1njFz0I8qvEcJCK5%2BXyzMfumK7PR&X-Amz-Signature=b82519c98bfec48ae6b25b6a40c064898d967c38bcaaae1a160e8ff96dca193b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVPSS3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGxN2zZviw1DxN0N4%2F4KVD%2B9ClPhxq%2Bi%2BZ1mMtrohtvWAiEAmx989wZfdbuLvbrdocne2AzGAA7EgHhCyvi5%2B%2FHEJFUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEGMmy3M89Ct1KHACrcA%2BC%2F9BGV9buh3SR3vpXURbW8espICGcVk7maaWxvqWUduIhd6nu0nYpc2huc%2BWSHAge2fjtyXqmk9teAXl0E2cLmC9CDfHDej6bdWweVGGoqjFK4eHE7FOreqopAJoE99rqDKJ%2FKHinRTvU5aSHvErg9dANOXL5hPlAZik8ekdK%2FyNVOPusUdEOBdBd%2BdvyvwYcapklury6fYSHfce%2BLLcyblr%2BvwB8OIMJgLCZRgTp6Nnwanb77Ymnfy02n1EdETjYaTBGz8TY7UUSIjTlPIcxvN9FXeoEXGXqodUcwWKZ7SWY86F%2BduU7EamK4BXtNuwUwixU2XnpcWptlqxoqix2KIklZquX0EaUPuazYTL6lWckpS2X40yAa4P1PTC42l1IqrD1cbdpR2p37MwaFhqRir1l3LJrKP%2FEmuGBSZYOmpkpXXjeC9UyiLW4Y3O%2FLqoaS8ZlrDzRXYHCBcbXH40RXr88a%2Bgvn5YfCO%2BxJXt9x06nRKZ2FOHpzQF5EgGRIANm2yuZUC69jQDzBoEMMa%2FYQ3PlXAy7hE62pbqsVsL0cRq8u6vN8IkKCqJOFAuWtpiUko4xlXqDS5eCqUh5MwqIeIOni9xn5592fXsTqXrQqkwRSC2AecrIpP5zFMJfZ5b8GOqUBejVa2C4Fb53kLvDbnw73LfkLRQ4L94CfloyL1Ss5EeVpzVC5iRs42IKhFG1t4%2FGnGBqn84AQN6PU6Y9g7U8B7RRlm%2BGW47jntJscSf2wmBHRMuEqnTa%2FZ9IMIe80Oht43w7kqvJvU4W5LIYB%2FeraLXtnqsCYnNDVhaOPVfd7ozmUg3o2vfU7rAC7e7NJ1SQs1njFz0I8qvEcJCK5%2BXyzMfumK7PR&X-Amz-Signature=8a1ac62c53baece9fc1e2e56ca70f29eed151afc8b50409934d28e7d3816f83c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVPSS3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGxN2zZviw1DxN0N4%2F4KVD%2B9ClPhxq%2Bi%2BZ1mMtrohtvWAiEAmx989wZfdbuLvbrdocne2AzGAA7EgHhCyvi5%2B%2FHEJFUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEGMmy3M89Ct1KHACrcA%2BC%2F9BGV9buh3SR3vpXURbW8espICGcVk7maaWxvqWUduIhd6nu0nYpc2huc%2BWSHAge2fjtyXqmk9teAXl0E2cLmC9CDfHDej6bdWweVGGoqjFK4eHE7FOreqopAJoE99rqDKJ%2FKHinRTvU5aSHvErg9dANOXL5hPlAZik8ekdK%2FyNVOPusUdEOBdBd%2BdvyvwYcapklury6fYSHfce%2BLLcyblr%2BvwB8OIMJgLCZRgTp6Nnwanb77Ymnfy02n1EdETjYaTBGz8TY7UUSIjTlPIcxvN9FXeoEXGXqodUcwWKZ7SWY86F%2BduU7EamK4BXtNuwUwixU2XnpcWptlqxoqix2KIklZquX0EaUPuazYTL6lWckpS2X40yAa4P1PTC42l1IqrD1cbdpR2p37MwaFhqRir1l3LJrKP%2FEmuGBSZYOmpkpXXjeC9UyiLW4Y3O%2FLqoaS8ZlrDzRXYHCBcbXH40RXr88a%2Bgvn5YfCO%2BxJXt9x06nRKZ2FOHpzQF5EgGRIANm2yuZUC69jQDzBoEMMa%2FYQ3PlXAy7hE62pbqsVsL0cRq8u6vN8IkKCqJOFAuWtpiUko4xlXqDS5eCqUh5MwqIeIOni9xn5592fXsTqXrQqkwRSC2AecrIpP5zFMJfZ5b8GOqUBejVa2C4Fb53kLvDbnw73LfkLRQ4L94CfloyL1Ss5EeVpzVC5iRs42IKhFG1t4%2FGnGBqn84AQN6PU6Y9g7U8B7RRlm%2BGW47jntJscSf2wmBHRMuEqnTa%2FZ9IMIe80Oht43w7kqvJvU4W5LIYB%2FeraLXtnqsCYnNDVhaOPVfd7ozmUg3o2vfU7rAC7e7NJ1SQs1njFz0I8qvEcJCK5%2BXyzMfumK7PR&X-Amz-Signature=7a9a14a58bf253c0b5fa6b035644465727281c676ed69abba9e3925699afb1a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVPSS3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGxN2zZviw1DxN0N4%2F4KVD%2B9ClPhxq%2Bi%2BZ1mMtrohtvWAiEAmx989wZfdbuLvbrdocne2AzGAA7EgHhCyvi5%2B%2FHEJFUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEGMmy3M89Ct1KHACrcA%2BC%2F9BGV9buh3SR3vpXURbW8espICGcVk7maaWxvqWUduIhd6nu0nYpc2huc%2BWSHAge2fjtyXqmk9teAXl0E2cLmC9CDfHDej6bdWweVGGoqjFK4eHE7FOreqopAJoE99rqDKJ%2FKHinRTvU5aSHvErg9dANOXL5hPlAZik8ekdK%2FyNVOPusUdEOBdBd%2BdvyvwYcapklury6fYSHfce%2BLLcyblr%2BvwB8OIMJgLCZRgTp6Nnwanb77Ymnfy02n1EdETjYaTBGz8TY7UUSIjTlPIcxvN9FXeoEXGXqodUcwWKZ7SWY86F%2BduU7EamK4BXtNuwUwixU2XnpcWptlqxoqix2KIklZquX0EaUPuazYTL6lWckpS2X40yAa4P1PTC42l1IqrD1cbdpR2p37MwaFhqRir1l3LJrKP%2FEmuGBSZYOmpkpXXjeC9UyiLW4Y3O%2FLqoaS8ZlrDzRXYHCBcbXH40RXr88a%2Bgvn5YfCO%2BxJXt9x06nRKZ2FOHpzQF5EgGRIANm2yuZUC69jQDzBoEMMa%2FYQ3PlXAy7hE62pbqsVsL0cRq8u6vN8IkKCqJOFAuWtpiUko4xlXqDS5eCqUh5MwqIeIOni9xn5592fXsTqXrQqkwRSC2AecrIpP5zFMJfZ5b8GOqUBejVa2C4Fb53kLvDbnw73LfkLRQ4L94CfloyL1Ss5EeVpzVC5iRs42IKhFG1t4%2FGnGBqn84AQN6PU6Y9g7U8B7RRlm%2BGW47jntJscSf2wmBHRMuEqnTa%2FZ9IMIe80Oht43w7kqvJvU4W5LIYB%2FeraLXtnqsCYnNDVhaOPVfd7ozmUg3o2vfU7rAC7e7NJ1SQs1njFz0I8qvEcJCK5%2BXyzMfumK7PR&X-Amz-Signature=8e331102147f4c7b7cafdc744d4dfa375f0587ec48ca32dad328bfe5db066ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVPSS3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGxN2zZviw1DxN0N4%2F4KVD%2B9ClPhxq%2Bi%2BZ1mMtrohtvWAiEAmx989wZfdbuLvbrdocne2AzGAA7EgHhCyvi5%2B%2FHEJFUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEGMmy3M89Ct1KHACrcA%2BC%2F9BGV9buh3SR3vpXURbW8espICGcVk7maaWxvqWUduIhd6nu0nYpc2huc%2BWSHAge2fjtyXqmk9teAXl0E2cLmC9CDfHDej6bdWweVGGoqjFK4eHE7FOreqopAJoE99rqDKJ%2FKHinRTvU5aSHvErg9dANOXL5hPlAZik8ekdK%2FyNVOPusUdEOBdBd%2BdvyvwYcapklury6fYSHfce%2BLLcyblr%2BvwB8OIMJgLCZRgTp6Nnwanb77Ymnfy02n1EdETjYaTBGz8TY7UUSIjTlPIcxvN9FXeoEXGXqodUcwWKZ7SWY86F%2BduU7EamK4BXtNuwUwixU2XnpcWptlqxoqix2KIklZquX0EaUPuazYTL6lWckpS2X40yAa4P1PTC42l1IqrD1cbdpR2p37MwaFhqRir1l3LJrKP%2FEmuGBSZYOmpkpXXjeC9UyiLW4Y3O%2FLqoaS8ZlrDzRXYHCBcbXH40RXr88a%2Bgvn5YfCO%2BxJXt9x06nRKZ2FOHpzQF5EgGRIANm2yuZUC69jQDzBoEMMa%2FYQ3PlXAy7hE62pbqsVsL0cRq8u6vN8IkKCqJOFAuWtpiUko4xlXqDS5eCqUh5MwqIeIOni9xn5592fXsTqXrQqkwRSC2AecrIpP5zFMJfZ5b8GOqUBejVa2C4Fb53kLvDbnw73LfkLRQ4L94CfloyL1Ss5EeVpzVC5iRs42IKhFG1t4%2FGnGBqn84AQN6PU6Y9g7U8B7RRlm%2BGW47jntJscSf2wmBHRMuEqnTa%2FZ9IMIe80Oht43w7kqvJvU4W5LIYB%2FeraLXtnqsCYnNDVhaOPVfd7ozmUg3o2vfU7rAC7e7NJ1SQs1njFz0I8qvEcJCK5%2BXyzMfumK7PR&X-Amz-Signature=d2a542fe7bdf00f6583de0900c083622db02ad1b5cd2de94ac9cdb240e6a06cc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVPSS3%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIGxN2zZviw1DxN0N4%2F4KVD%2B9ClPhxq%2Bi%2BZ1mMtrohtvWAiEAmx989wZfdbuLvbrdocne2AzGAA7EgHhCyvi5%2B%2FHEJFUqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEGMmy3M89Ct1KHACrcA%2BC%2F9BGV9buh3SR3vpXURbW8espICGcVk7maaWxvqWUduIhd6nu0nYpc2huc%2BWSHAge2fjtyXqmk9teAXl0E2cLmC9CDfHDej6bdWweVGGoqjFK4eHE7FOreqopAJoE99rqDKJ%2FKHinRTvU5aSHvErg9dANOXL5hPlAZik8ekdK%2FyNVOPusUdEOBdBd%2BdvyvwYcapklury6fYSHfce%2BLLcyblr%2BvwB8OIMJgLCZRgTp6Nnwanb77Ymnfy02n1EdETjYaTBGz8TY7UUSIjTlPIcxvN9FXeoEXGXqodUcwWKZ7SWY86F%2BduU7EamK4BXtNuwUwixU2XnpcWptlqxoqix2KIklZquX0EaUPuazYTL6lWckpS2X40yAa4P1PTC42l1IqrD1cbdpR2p37MwaFhqRir1l3LJrKP%2FEmuGBSZYOmpkpXXjeC9UyiLW4Y3O%2FLqoaS8ZlrDzRXYHCBcbXH40RXr88a%2Bgvn5YfCO%2BxJXt9x06nRKZ2FOHpzQF5EgGRIANm2yuZUC69jQDzBoEMMa%2FYQ3PlXAy7hE62pbqsVsL0cRq8u6vN8IkKCqJOFAuWtpiUko4xlXqDS5eCqUh5MwqIeIOni9xn5592fXsTqXrQqkwRSC2AecrIpP5zFMJfZ5b8GOqUBejVa2C4Fb53kLvDbnw73LfkLRQ4L94CfloyL1Ss5EeVpzVC5iRs42IKhFG1t4%2FGnGBqn84AQN6PU6Y9g7U8B7RRlm%2BGW47jntJscSf2wmBHRMuEqnTa%2FZ9IMIe80Oht43w7kqvJvU4W5LIYB%2FeraLXtnqsCYnNDVhaOPVfd7ozmUg3o2vfU7rAC7e7NJ1SQs1njFz0I8qvEcJCK5%2BXyzMfumK7PR&X-Amz-Signature=dcb8d369f2872a03867c169b32a5e595a25a63b7373319fc86ca74c9c59141a8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
