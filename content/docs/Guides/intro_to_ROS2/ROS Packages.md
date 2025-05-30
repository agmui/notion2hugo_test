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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRA7NWWH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuDAyvQwM2dMITmNMl53OStRsVZmo%2BqOOvMmdhRi7VXAiEA%2F8mMj%2F8PYBotnR2jc%2F8KTWrxMfNMeRGK3Q29urldvlQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC%2Fa1wpqz6g6L60rSrcAxXYoKZq7xz9mxcHcd6ijy8U%2BZQMutDNhy%2BkTGLUsajY3joitfOMlLjN5X%2FzXVkt6nO3iOdRV8q6d5mWRDu9qMS9%2FNiGijbck3hNVUH5werAFP2Oya3R9%2FcZYEONqlA3YIR2hAGwOE%2BsAaIfwAzNTjzTXWfoCWZJKb6VaH%2FRQrzwGqJRdiD0SIdmNFVx0TIZbrGEuhK%2FQIk8ym3xiSE1a2MY21zQ5eevzqGWWvYCe5Pf8pPdZbFzhldopFrMX7HJzrgtJiOE3IZq6T0zveg5n3%2BVhQqIE05PFpqbworUxBapoFvrl5EHoS9Apg4Xqf7PWye9goK0EWj0yoxmpo1WH0mo%2BEBobAkvzrGniftIpzPz62F0o6tC%2BSo%2BcHR%2FmpvNf8YcCPOEPBxB9AwZibb1QlxhXk3vFeZbJMi%2BcGwb9rdNbmLxtKVvkz%2FvfqKe33UcKAjxRQaKGuGYM1Zn5CUppz78O%2FXCyTB9QrwTMMu%2BfIhT10uk9eGnkqwk2vLq794ETC8EmBO3mZ225h8U9bg8g7flBRlXzw1Y802y0phCP38Z4VD6Dq3ws%2BKsC%2B3P%2FEKrLXAnF6qCtvP5CDxhPd%2B9lNwB1Bn0dpYPwhmaya9EWEmJm7NFAKewDCEMO25SMLby5sEGOqUBm8AkdKkEW%2BmWuD6aDnyaK7Vc2YdbmdOHvnCnQTHE9Jh2GYX8ymnMV17pGDfeMZ1G3eGb0Wd2PtZSAggDvUc72o%2FAnJmrYkJJv6OxmMKCOodt%2FEePy1tzhtco4m9M9zoNczCGmRRcMpw7iJgl9VVSz8zbUgPSN53OWlwkofMqTVhOYtOPo38R117glB99xAGBZm%2F5ZOZ0Uo18%2BlGy9VresEawyVnu&X-Amz-Signature=327af6197700ec483895242efaad2168819c6f376208e36de84f8bc1e36571fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRA7NWWH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuDAyvQwM2dMITmNMl53OStRsVZmo%2BqOOvMmdhRi7VXAiEA%2F8mMj%2F8PYBotnR2jc%2F8KTWrxMfNMeRGK3Q29urldvlQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC%2Fa1wpqz6g6L60rSrcAxXYoKZq7xz9mxcHcd6ijy8U%2BZQMutDNhy%2BkTGLUsajY3joitfOMlLjN5X%2FzXVkt6nO3iOdRV8q6d5mWRDu9qMS9%2FNiGijbck3hNVUH5werAFP2Oya3R9%2FcZYEONqlA3YIR2hAGwOE%2BsAaIfwAzNTjzTXWfoCWZJKb6VaH%2FRQrzwGqJRdiD0SIdmNFVx0TIZbrGEuhK%2FQIk8ym3xiSE1a2MY21zQ5eevzqGWWvYCe5Pf8pPdZbFzhldopFrMX7HJzrgtJiOE3IZq6T0zveg5n3%2BVhQqIE05PFpqbworUxBapoFvrl5EHoS9Apg4Xqf7PWye9goK0EWj0yoxmpo1WH0mo%2BEBobAkvzrGniftIpzPz62F0o6tC%2BSo%2BcHR%2FmpvNf8YcCPOEPBxB9AwZibb1QlxhXk3vFeZbJMi%2BcGwb9rdNbmLxtKVvkz%2FvfqKe33UcKAjxRQaKGuGYM1Zn5CUppz78O%2FXCyTB9QrwTMMu%2BfIhT10uk9eGnkqwk2vLq794ETC8EmBO3mZ225h8U9bg8g7flBRlXzw1Y802y0phCP38Z4VD6Dq3ws%2BKsC%2B3P%2FEKrLXAnF6qCtvP5CDxhPd%2B9lNwB1Bn0dpYPwhmaya9EWEmJm7NFAKewDCEMO25SMLby5sEGOqUBm8AkdKkEW%2BmWuD6aDnyaK7Vc2YdbmdOHvnCnQTHE9Jh2GYX8ymnMV17pGDfeMZ1G3eGb0Wd2PtZSAggDvUc72o%2FAnJmrYkJJv6OxmMKCOodt%2FEePy1tzhtco4m9M9zoNczCGmRRcMpw7iJgl9VVSz8zbUgPSN53OWlwkofMqTVhOYtOPo38R117glB99xAGBZm%2F5ZOZ0Uo18%2BlGy9VresEawyVnu&X-Amz-Signature=e4b5166c7cbba7790ee1c9e01d386a54c81301adbef5c65da0afe0c692d326f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRA7NWWH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuDAyvQwM2dMITmNMl53OStRsVZmo%2BqOOvMmdhRi7VXAiEA%2F8mMj%2F8PYBotnR2jc%2F8KTWrxMfNMeRGK3Q29urldvlQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC%2Fa1wpqz6g6L60rSrcAxXYoKZq7xz9mxcHcd6ijy8U%2BZQMutDNhy%2BkTGLUsajY3joitfOMlLjN5X%2FzXVkt6nO3iOdRV8q6d5mWRDu9qMS9%2FNiGijbck3hNVUH5werAFP2Oya3R9%2FcZYEONqlA3YIR2hAGwOE%2BsAaIfwAzNTjzTXWfoCWZJKb6VaH%2FRQrzwGqJRdiD0SIdmNFVx0TIZbrGEuhK%2FQIk8ym3xiSE1a2MY21zQ5eevzqGWWvYCe5Pf8pPdZbFzhldopFrMX7HJzrgtJiOE3IZq6T0zveg5n3%2BVhQqIE05PFpqbworUxBapoFvrl5EHoS9Apg4Xqf7PWye9goK0EWj0yoxmpo1WH0mo%2BEBobAkvzrGniftIpzPz62F0o6tC%2BSo%2BcHR%2FmpvNf8YcCPOEPBxB9AwZibb1QlxhXk3vFeZbJMi%2BcGwb9rdNbmLxtKVvkz%2FvfqKe33UcKAjxRQaKGuGYM1Zn5CUppz78O%2FXCyTB9QrwTMMu%2BfIhT10uk9eGnkqwk2vLq794ETC8EmBO3mZ225h8U9bg8g7flBRlXzw1Y802y0phCP38Z4VD6Dq3ws%2BKsC%2B3P%2FEKrLXAnF6qCtvP5CDxhPd%2B9lNwB1Bn0dpYPwhmaya9EWEmJm7NFAKewDCEMO25SMLby5sEGOqUBm8AkdKkEW%2BmWuD6aDnyaK7Vc2YdbmdOHvnCnQTHE9Jh2GYX8ymnMV17pGDfeMZ1G3eGb0Wd2PtZSAggDvUc72o%2FAnJmrYkJJv6OxmMKCOodt%2FEePy1tzhtco4m9M9zoNczCGmRRcMpw7iJgl9VVSz8zbUgPSN53OWlwkofMqTVhOYtOPo38R117glB99xAGBZm%2F5ZOZ0Uo18%2BlGy9VresEawyVnu&X-Amz-Signature=e174a17a368240d454abd458a57d4296d81dbe75f48d9f1c6a6acb5109cbae74&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRA7NWWH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuDAyvQwM2dMITmNMl53OStRsVZmo%2BqOOvMmdhRi7VXAiEA%2F8mMj%2F8PYBotnR2jc%2F8KTWrxMfNMeRGK3Q29urldvlQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC%2Fa1wpqz6g6L60rSrcAxXYoKZq7xz9mxcHcd6ijy8U%2BZQMutDNhy%2BkTGLUsajY3joitfOMlLjN5X%2FzXVkt6nO3iOdRV8q6d5mWRDu9qMS9%2FNiGijbck3hNVUH5werAFP2Oya3R9%2FcZYEONqlA3YIR2hAGwOE%2BsAaIfwAzNTjzTXWfoCWZJKb6VaH%2FRQrzwGqJRdiD0SIdmNFVx0TIZbrGEuhK%2FQIk8ym3xiSE1a2MY21zQ5eevzqGWWvYCe5Pf8pPdZbFzhldopFrMX7HJzrgtJiOE3IZq6T0zveg5n3%2BVhQqIE05PFpqbworUxBapoFvrl5EHoS9Apg4Xqf7PWye9goK0EWj0yoxmpo1WH0mo%2BEBobAkvzrGniftIpzPz62F0o6tC%2BSo%2BcHR%2FmpvNf8YcCPOEPBxB9AwZibb1QlxhXk3vFeZbJMi%2BcGwb9rdNbmLxtKVvkz%2FvfqKe33UcKAjxRQaKGuGYM1Zn5CUppz78O%2FXCyTB9QrwTMMu%2BfIhT10uk9eGnkqwk2vLq794ETC8EmBO3mZ225h8U9bg8g7flBRlXzw1Y802y0phCP38Z4VD6Dq3ws%2BKsC%2B3P%2FEKrLXAnF6qCtvP5CDxhPd%2B9lNwB1Bn0dpYPwhmaya9EWEmJm7NFAKewDCEMO25SMLby5sEGOqUBm8AkdKkEW%2BmWuD6aDnyaK7Vc2YdbmdOHvnCnQTHE9Jh2GYX8ymnMV17pGDfeMZ1G3eGb0Wd2PtZSAggDvUc72o%2FAnJmrYkJJv6OxmMKCOodt%2FEePy1tzhtco4m9M9zoNczCGmRRcMpw7iJgl9VVSz8zbUgPSN53OWlwkofMqTVhOYtOPo38R117glB99xAGBZm%2F5ZOZ0Uo18%2BlGy9VresEawyVnu&X-Amz-Signature=5a3884b2f713ee26229e3785cdea74f99f38d3e1b7947a9a783cac71a8654116&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRA7NWWH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuDAyvQwM2dMITmNMl53OStRsVZmo%2BqOOvMmdhRi7VXAiEA%2F8mMj%2F8PYBotnR2jc%2F8KTWrxMfNMeRGK3Q29urldvlQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC%2Fa1wpqz6g6L60rSrcAxXYoKZq7xz9mxcHcd6ijy8U%2BZQMutDNhy%2BkTGLUsajY3joitfOMlLjN5X%2FzXVkt6nO3iOdRV8q6d5mWRDu9qMS9%2FNiGijbck3hNVUH5werAFP2Oya3R9%2FcZYEONqlA3YIR2hAGwOE%2BsAaIfwAzNTjzTXWfoCWZJKb6VaH%2FRQrzwGqJRdiD0SIdmNFVx0TIZbrGEuhK%2FQIk8ym3xiSE1a2MY21zQ5eevzqGWWvYCe5Pf8pPdZbFzhldopFrMX7HJzrgtJiOE3IZq6T0zveg5n3%2BVhQqIE05PFpqbworUxBapoFvrl5EHoS9Apg4Xqf7PWye9goK0EWj0yoxmpo1WH0mo%2BEBobAkvzrGniftIpzPz62F0o6tC%2BSo%2BcHR%2FmpvNf8YcCPOEPBxB9AwZibb1QlxhXk3vFeZbJMi%2BcGwb9rdNbmLxtKVvkz%2FvfqKe33UcKAjxRQaKGuGYM1Zn5CUppz78O%2FXCyTB9QrwTMMu%2BfIhT10uk9eGnkqwk2vLq794ETC8EmBO3mZ225h8U9bg8g7flBRlXzw1Y802y0phCP38Z4VD6Dq3ws%2BKsC%2B3P%2FEKrLXAnF6qCtvP5CDxhPd%2B9lNwB1Bn0dpYPwhmaya9EWEmJm7NFAKewDCEMO25SMLby5sEGOqUBm8AkdKkEW%2BmWuD6aDnyaK7Vc2YdbmdOHvnCnQTHE9Jh2GYX8ymnMV17pGDfeMZ1G3eGb0Wd2PtZSAggDvUc72o%2FAnJmrYkJJv6OxmMKCOodt%2FEePy1tzhtco4m9M9zoNczCGmRRcMpw7iJgl9VVSz8zbUgPSN53OWlwkofMqTVhOYtOPo38R117glB99xAGBZm%2F5ZOZ0Uo18%2BlGy9VresEawyVnu&X-Amz-Signature=c388c2768825372ae606cb569e5672bc720114292bd5e8b39da028bbfbf98d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRA7NWWH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuDAyvQwM2dMITmNMl53OStRsVZmo%2BqOOvMmdhRi7VXAiEA%2F8mMj%2F8PYBotnR2jc%2F8KTWrxMfNMeRGK3Q29urldvlQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC%2Fa1wpqz6g6L60rSrcAxXYoKZq7xz9mxcHcd6ijy8U%2BZQMutDNhy%2BkTGLUsajY3joitfOMlLjN5X%2FzXVkt6nO3iOdRV8q6d5mWRDu9qMS9%2FNiGijbck3hNVUH5werAFP2Oya3R9%2FcZYEONqlA3YIR2hAGwOE%2BsAaIfwAzNTjzTXWfoCWZJKb6VaH%2FRQrzwGqJRdiD0SIdmNFVx0TIZbrGEuhK%2FQIk8ym3xiSE1a2MY21zQ5eevzqGWWvYCe5Pf8pPdZbFzhldopFrMX7HJzrgtJiOE3IZq6T0zveg5n3%2BVhQqIE05PFpqbworUxBapoFvrl5EHoS9Apg4Xqf7PWye9goK0EWj0yoxmpo1WH0mo%2BEBobAkvzrGniftIpzPz62F0o6tC%2BSo%2BcHR%2FmpvNf8YcCPOEPBxB9AwZibb1QlxhXk3vFeZbJMi%2BcGwb9rdNbmLxtKVvkz%2FvfqKe33UcKAjxRQaKGuGYM1Zn5CUppz78O%2FXCyTB9QrwTMMu%2BfIhT10uk9eGnkqwk2vLq794ETC8EmBO3mZ225h8U9bg8g7flBRlXzw1Y802y0phCP38Z4VD6Dq3ws%2BKsC%2B3P%2FEKrLXAnF6qCtvP5CDxhPd%2B9lNwB1Bn0dpYPwhmaya9EWEmJm7NFAKewDCEMO25SMLby5sEGOqUBm8AkdKkEW%2BmWuD6aDnyaK7Vc2YdbmdOHvnCnQTHE9Jh2GYX8ymnMV17pGDfeMZ1G3eGb0Wd2PtZSAggDvUc72o%2FAnJmrYkJJv6OxmMKCOodt%2FEePy1tzhtco4m9M9zoNczCGmRRcMpw7iJgl9VVSz8zbUgPSN53OWlwkofMqTVhOYtOPo38R117glB99xAGBZm%2F5ZOZ0Uo18%2BlGy9VresEawyVnu&X-Amz-Signature=4c00bcfe2bb4d6cffc63d1aae542ff46bb1a7be973d8be0cd0b3aa07ac5e4250&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRA7NWWH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuDAyvQwM2dMITmNMl53OStRsVZmo%2BqOOvMmdhRi7VXAiEA%2F8mMj%2F8PYBotnR2jc%2F8KTWrxMfNMeRGK3Q29urldvlQqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDC%2Fa1wpqz6g6L60rSrcAxXYoKZq7xz9mxcHcd6ijy8U%2BZQMutDNhy%2BkTGLUsajY3joitfOMlLjN5X%2FzXVkt6nO3iOdRV8q6d5mWRDu9qMS9%2FNiGijbck3hNVUH5werAFP2Oya3R9%2FcZYEONqlA3YIR2hAGwOE%2BsAaIfwAzNTjzTXWfoCWZJKb6VaH%2FRQrzwGqJRdiD0SIdmNFVx0TIZbrGEuhK%2FQIk8ym3xiSE1a2MY21zQ5eevzqGWWvYCe5Pf8pPdZbFzhldopFrMX7HJzrgtJiOE3IZq6T0zveg5n3%2BVhQqIE05PFpqbworUxBapoFvrl5EHoS9Apg4Xqf7PWye9goK0EWj0yoxmpo1WH0mo%2BEBobAkvzrGniftIpzPz62F0o6tC%2BSo%2BcHR%2FmpvNf8YcCPOEPBxB9AwZibb1QlxhXk3vFeZbJMi%2BcGwb9rdNbmLxtKVvkz%2FvfqKe33UcKAjxRQaKGuGYM1Zn5CUppz78O%2FXCyTB9QrwTMMu%2BfIhT10uk9eGnkqwk2vLq794ETC8EmBO3mZ225h8U9bg8g7flBRlXzw1Y802y0phCP38Z4VD6Dq3ws%2BKsC%2B3P%2FEKrLXAnF6qCtvP5CDxhPd%2B9lNwB1Bn0dpYPwhmaya9EWEmJm7NFAKewDCEMO25SMLby5sEGOqUBm8AkdKkEW%2BmWuD6aDnyaK7Vc2YdbmdOHvnCnQTHE9Jh2GYX8ymnMV17pGDfeMZ1G3eGb0Wd2PtZSAggDvUc72o%2FAnJmrYkJJv6OxmMKCOodt%2FEePy1tzhtco4m9M9zoNczCGmRRcMpw7iJgl9VVSz8zbUgPSN53OWlwkofMqTVhOYtOPo38R117glB99xAGBZm%2F5ZOZ0Uo18%2BlGy9VresEawyVnu&X-Amz-Signature=2d02a59d8a2f21c70399b0797ff7cf1686039b5b5c977d859e0f70540955bccb&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
