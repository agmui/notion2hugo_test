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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPHU5P%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeip%2BRpBka9x7obivOkuXHedLjMzDnEqtnWqb1ZDVOXAiEAoCVTGcw4HKKsv9ucADvttexn2hwvuUvP6eEWx8RHjIMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLK4Q3xXpnjnqIYFMSrcAyEwoonJjHbnny0O3v1rBYKcSBvoSLDmLGKGMSO7QJyosCHeLiZpEFc5TD7w%2BdkHrYqk8SVFzDRsHxjM785s39xDx9OZyWeOn8pVUbFVTuShjAHe3o1osVlqgLCxbVaPQlLcMeCDRBEkosh7IWkvkNYhssUjn4gYvEWsUaKZuZ2mv7FJkCo5NWG9VVW5k3JcUeAD4JscWvfik1JIyi8AbTTTcORqehLrOwpU70d6Ec0UufdLFehKkdks6ygKCeGK0f1ZCZt2Kp8GJDTddrIqzl1ddoLqslVm4%2BZL%2FBKNJtBwT7esqpMaywul4oXrMvgg03MhfaDCV%2BPsJngkKAoH3%2Fa%2BV14wsUQ%2Fb%2FQFRTcGQzrhJSVtuZiq9jCnhjIuEXiMTg8NTv31UUaavWGrb8jn%2B5MPKf9jIg0LQ4u7mA%2Blr3YEDw68jQEMrKXezjMBc7lyebRnNmbDDB%2BPYFWyxk7y06SEK2UEfL86zl2zY58t41LyklXho%2B4luXD1nP0NExDeBek4iz5TTpXbzBqj3OQnbU1qjosgmUG7nx82m1Y%2BKmb7ngITpt%2F9Sajz7OEvamz4Iii3l%2B4qYsUHED2pGde%2F0YhXlIyRpGe3fJvP7Vw9zeJZuwGIwUJDqt34NzcQMIeptMAGOqUBBwCuC4BV57ngNRjaFi099OqyVDWXgJhSqQhytSpA%2B4c7qvHZ8pM3e2yPwBl3eOHQZl20%2F4J0%2BruA%2F2%2BbXveV7i01WWmjkWL8rk%2FODb2DZ2146SjycSCl5QmQi2YNl6MY2ODN6Auh%2F5ot8%2FX5PBherYpn5HZGASoH%2BTmcIGwCm%2BBQSmEapOJTYUUvRvsGucQ4d9sOEGwUgNZ1QULt4uVYwDK2FyST&X-Amz-Signature=23a722aa05301dbb9cab884cd87bded1cda429b4c71a2c2be8c0c457079b583e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPHU5P%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeip%2BRpBka9x7obivOkuXHedLjMzDnEqtnWqb1ZDVOXAiEAoCVTGcw4HKKsv9ucADvttexn2hwvuUvP6eEWx8RHjIMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLK4Q3xXpnjnqIYFMSrcAyEwoonJjHbnny0O3v1rBYKcSBvoSLDmLGKGMSO7QJyosCHeLiZpEFc5TD7w%2BdkHrYqk8SVFzDRsHxjM785s39xDx9OZyWeOn8pVUbFVTuShjAHe3o1osVlqgLCxbVaPQlLcMeCDRBEkosh7IWkvkNYhssUjn4gYvEWsUaKZuZ2mv7FJkCo5NWG9VVW5k3JcUeAD4JscWvfik1JIyi8AbTTTcORqehLrOwpU70d6Ec0UufdLFehKkdks6ygKCeGK0f1ZCZt2Kp8GJDTddrIqzl1ddoLqslVm4%2BZL%2FBKNJtBwT7esqpMaywul4oXrMvgg03MhfaDCV%2BPsJngkKAoH3%2Fa%2BV14wsUQ%2Fb%2FQFRTcGQzrhJSVtuZiq9jCnhjIuEXiMTg8NTv31UUaavWGrb8jn%2B5MPKf9jIg0LQ4u7mA%2Blr3YEDw68jQEMrKXezjMBc7lyebRnNmbDDB%2BPYFWyxk7y06SEK2UEfL86zl2zY58t41LyklXho%2B4luXD1nP0NExDeBek4iz5TTpXbzBqj3OQnbU1qjosgmUG7nx82m1Y%2BKmb7ngITpt%2F9Sajz7OEvamz4Iii3l%2B4qYsUHED2pGde%2F0YhXlIyRpGe3fJvP7Vw9zeJZuwGIwUJDqt34NzcQMIeptMAGOqUBBwCuC4BV57ngNRjaFi099OqyVDWXgJhSqQhytSpA%2B4c7qvHZ8pM3e2yPwBl3eOHQZl20%2F4J0%2BruA%2F2%2BbXveV7i01WWmjkWL8rk%2FODb2DZ2146SjycSCl5QmQi2YNl6MY2ODN6Auh%2F5ot8%2FX5PBherYpn5HZGASoH%2BTmcIGwCm%2BBQSmEapOJTYUUvRvsGucQ4d9sOEGwUgNZ1QULt4uVYwDK2FyST&X-Amz-Signature=c5988a35288bfc5b9a752f6ddc7bcb066a7ffbd49f8431bbec0a3eb42ba92ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPHU5P%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeip%2BRpBka9x7obivOkuXHedLjMzDnEqtnWqb1ZDVOXAiEAoCVTGcw4HKKsv9ucADvttexn2hwvuUvP6eEWx8RHjIMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLK4Q3xXpnjnqIYFMSrcAyEwoonJjHbnny0O3v1rBYKcSBvoSLDmLGKGMSO7QJyosCHeLiZpEFc5TD7w%2BdkHrYqk8SVFzDRsHxjM785s39xDx9OZyWeOn8pVUbFVTuShjAHe3o1osVlqgLCxbVaPQlLcMeCDRBEkosh7IWkvkNYhssUjn4gYvEWsUaKZuZ2mv7FJkCo5NWG9VVW5k3JcUeAD4JscWvfik1JIyi8AbTTTcORqehLrOwpU70d6Ec0UufdLFehKkdks6ygKCeGK0f1ZCZt2Kp8GJDTddrIqzl1ddoLqslVm4%2BZL%2FBKNJtBwT7esqpMaywul4oXrMvgg03MhfaDCV%2BPsJngkKAoH3%2Fa%2BV14wsUQ%2Fb%2FQFRTcGQzrhJSVtuZiq9jCnhjIuEXiMTg8NTv31UUaavWGrb8jn%2B5MPKf9jIg0LQ4u7mA%2Blr3YEDw68jQEMrKXezjMBc7lyebRnNmbDDB%2BPYFWyxk7y06SEK2UEfL86zl2zY58t41LyklXho%2B4luXD1nP0NExDeBek4iz5TTpXbzBqj3OQnbU1qjosgmUG7nx82m1Y%2BKmb7ngITpt%2F9Sajz7OEvamz4Iii3l%2B4qYsUHED2pGde%2F0YhXlIyRpGe3fJvP7Vw9zeJZuwGIwUJDqt34NzcQMIeptMAGOqUBBwCuC4BV57ngNRjaFi099OqyVDWXgJhSqQhytSpA%2B4c7qvHZ8pM3e2yPwBl3eOHQZl20%2F4J0%2BruA%2F2%2BbXveV7i01WWmjkWL8rk%2FODb2DZ2146SjycSCl5QmQi2YNl6MY2ODN6Auh%2F5ot8%2FX5PBherYpn5HZGASoH%2BTmcIGwCm%2BBQSmEapOJTYUUvRvsGucQ4d9sOEGwUgNZ1QULt4uVYwDK2FyST&X-Amz-Signature=075865c182fd7e436833bc8fbddfee11b58f1ffb53c0ba2a90510c783d9ced5c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPHU5P%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeip%2BRpBka9x7obivOkuXHedLjMzDnEqtnWqb1ZDVOXAiEAoCVTGcw4HKKsv9ucADvttexn2hwvuUvP6eEWx8RHjIMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLK4Q3xXpnjnqIYFMSrcAyEwoonJjHbnny0O3v1rBYKcSBvoSLDmLGKGMSO7QJyosCHeLiZpEFc5TD7w%2BdkHrYqk8SVFzDRsHxjM785s39xDx9OZyWeOn8pVUbFVTuShjAHe3o1osVlqgLCxbVaPQlLcMeCDRBEkosh7IWkvkNYhssUjn4gYvEWsUaKZuZ2mv7FJkCo5NWG9VVW5k3JcUeAD4JscWvfik1JIyi8AbTTTcORqehLrOwpU70d6Ec0UufdLFehKkdks6ygKCeGK0f1ZCZt2Kp8GJDTddrIqzl1ddoLqslVm4%2BZL%2FBKNJtBwT7esqpMaywul4oXrMvgg03MhfaDCV%2BPsJngkKAoH3%2Fa%2BV14wsUQ%2Fb%2FQFRTcGQzrhJSVtuZiq9jCnhjIuEXiMTg8NTv31UUaavWGrb8jn%2B5MPKf9jIg0LQ4u7mA%2Blr3YEDw68jQEMrKXezjMBc7lyebRnNmbDDB%2BPYFWyxk7y06SEK2UEfL86zl2zY58t41LyklXho%2B4luXD1nP0NExDeBek4iz5TTpXbzBqj3OQnbU1qjosgmUG7nx82m1Y%2BKmb7ngITpt%2F9Sajz7OEvamz4Iii3l%2B4qYsUHED2pGde%2F0YhXlIyRpGe3fJvP7Vw9zeJZuwGIwUJDqt34NzcQMIeptMAGOqUBBwCuC4BV57ngNRjaFi099OqyVDWXgJhSqQhytSpA%2B4c7qvHZ8pM3e2yPwBl3eOHQZl20%2F4J0%2BruA%2F2%2BbXveV7i01WWmjkWL8rk%2FODb2DZ2146SjycSCl5QmQi2YNl6MY2ODN6Auh%2F5ot8%2FX5PBherYpn5HZGASoH%2BTmcIGwCm%2BBQSmEapOJTYUUvRvsGucQ4d9sOEGwUgNZ1QULt4uVYwDK2FyST&X-Amz-Signature=fca6e259dd35d58dd9903f7729cc16469d0bcb9203aa61bfb15676376f43fb91&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPHU5P%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeip%2BRpBka9x7obivOkuXHedLjMzDnEqtnWqb1ZDVOXAiEAoCVTGcw4HKKsv9ucADvttexn2hwvuUvP6eEWx8RHjIMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLK4Q3xXpnjnqIYFMSrcAyEwoonJjHbnny0O3v1rBYKcSBvoSLDmLGKGMSO7QJyosCHeLiZpEFc5TD7w%2BdkHrYqk8SVFzDRsHxjM785s39xDx9OZyWeOn8pVUbFVTuShjAHe3o1osVlqgLCxbVaPQlLcMeCDRBEkosh7IWkvkNYhssUjn4gYvEWsUaKZuZ2mv7FJkCo5NWG9VVW5k3JcUeAD4JscWvfik1JIyi8AbTTTcORqehLrOwpU70d6Ec0UufdLFehKkdks6ygKCeGK0f1ZCZt2Kp8GJDTddrIqzl1ddoLqslVm4%2BZL%2FBKNJtBwT7esqpMaywul4oXrMvgg03MhfaDCV%2BPsJngkKAoH3%2Fa%2BV14wsUQ%2Fb%2FQFRTcGQzrhJSVtuZiq9jCnhjIuEXiMTg8NTv31UUaavWGrb8jn%2B5MPKf9jIg0LQ4u7mA%2Blr3YEDw68jQEMrKXezjMBc7lyebRnNmbDDB%2BPYFWyxk7y06SEK2UEfL86zl2zY58t41LyklXho%2B4luXD1nP0NExDeBek4iz5TTpXbzBqj3OQnbU1qjosgmUG7nx82m1Y%2BKmb7ngITpt%2F9Sajz7OEvamz4Iii3l%2B4qYsUHED2pGde%2F0YhXlIyRpGe3fJvP7Vw9zeJZuwGIwUJDqt34NzcQMIeptMAGOqUBBwCuC4BV57ngNRjaFi099OqyVDWXgJhSqQhytSpA%2B4c7qvHZ8pM3e2yPwBl3eOHQZl20%2F4J0%2BruA%2F2%2BbXveV7i01WWmjkWL8rk%2FODb2DZ2146SjycSCl5QmQi2YNl6MY2ODN6Auh%2F5ot8%2FX5PBherYpn5HZGASoH%2BTmcIGwCm%2BBQSmEapOJTYUUvRvsGucQ4d9sOEGwUgNZ1QULt4uVYwDK2FyST&X-Amz-Signature=df969d570ef3ef69e3df4608d99e327f5f35e3b22302e58460848c5379cd46ba&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPHU5P%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeip%2BRpBka9x7obivOkuXHedLjMzDnEqtnWqb1ZDVOXAiEAoCVTGcw4HKKsv9ucADvttexn2hwvuUvP6eEWx8RHjIMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLK4Q3xXpnjnqIYFMSrcAyEwoonJjHbnny0O3v1rBYKcSBvoSLDmLGKGMSO7QJyosCHeLiZpEFc5TD7w%2BdkHrYqk8SVFzDRsHxjM785s39xDx9OZyWeOn8pVUbFVTuShjAHe3o1osVlqgLCxbVaPQlLcMeCDRBEkosh7IWkvkNYhssUjn4gYvEWsUaKZuZ2mv7FJkCo5NWG9VVW5k3JcUeAD4JscWvfik1JIyi8AbTTTcORqehLrOwpU70d6Ec0UufdLFehKkdks6ygKCeGK0f1ZCZt2Kp8GJDTddrIqzl1ddoLqslVm4%2BZL%2FBKNJtBwT7esqpMaywul4oXrMvgg03MhfaDCV%2BPsJngkKAoH3%2Fa%2BV14wsUQ%2Fb%2FQFRTcGQzrhJSVtuZiq9jCnhjIuEXiMTg8NTv31UUaavWGrb8jn%2B5MPKf9jIg0LQ4u7mA%2Blr3YEDw68jQEMrKXezjMBc7lyebRnNmbDDB%2BPYFWyxk7y06SEK2UEfL86zl2zY58t41LyklXho%2B4luXD1nP0NExDeBek4iz5TTpXbzBqj3OQnbU1qjosgmUG7nx82m1Y%2BKmb7ngITpt%2F9Sajz7OEvamz4Iii3l%2B4qYsUHED2pGde%2F0YhXlIyRpGe3fJvP7Vw9zeJZuwGIwUJDqt34NzcQMIeptMAGOqUBBwCuC4BV57ngNRjaFi099OqyVDWXgJhSqQhytSpA%2B4c7qvHZ8pM3e2yPwBl3eOHQZl20%2F4J0%2BruA%2F2%2BbXveV7i01WWmjkWL8rk%2FODb2DZ2146SjycSCl5QmQi2YNl6MY2ODN6Auh%2F5ot8%2FX5PBherYpn5HZGASoH%2BTmcIGwCm%2BBQSmEapOJTYUUvRvsGucQ4d9sOEGwUgNZ1QULt4uVYwDK2FyST&X-Amz-Signature=585f81ffb9b6ef9835ef2fff1bf4d73ff64cd1d8b81ded47b7895aa782de20c7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPKPHU5P%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T180950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAeip%2BRpBka9x7obivOkuXHedLjMzDnEqtnWqb1ZDVOXAiEAoCVTGcw4HKKsv9ucADvttexn2hwvuUvP6eEWx8RHjIMq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLK4Q3xXpnjnqIYFMSrcAyEwoonJjHbnny0O3v1rBYKcSBvoSLDmLGKGMSO7QJyosCHeLiZpEFc5TD7w%2BdkHrYqk8SVFzDRsHxjM785s39xDx9OZyWeOn8pVUbFVTuShjAHe3o1osVlqgLCxbVaPQlLcMeCDRBEkosh7IWkvkNYhssUjn4gYvEWsUaKZuZ2mv7FJkCo5NWG9VVW5k3JcUeAD4JscWvfik1JIyi8AbTTTcORqehLrOwpU70d6Ec0UufdLFehKkdks6ygKCeGK0f1ZCZt2Kp8GJDTddrIqzl1ddoLqslVm4%2BZL%2FBKNJtBwT7esqpMaywul4oXrMvgg03MhfaDCV%2BPsJngkKAoH3%2Fa%2BV14wsUQ%2Fb%2FQFRTcGQzrhJSVtuZiq9jCnhjIuEXiMTg8NTv31UUaavWGrb8jn%2B5MPKf9jIg0LQ4u7mA%2Blr3YEDw68jQEMrKXezjMBc7lyebRnNmbDDB%2BPYFWyxk7y06SEK2UEfL86zl2zY58t41LyklXho%2B4luXD1nP0NExDeBek4iz5TTpXbzBqj3OQnbU1qjosgmUG7nx82m1Y%2BKmb7ngITpt%2F9Sajz7OEvamz4Iii3l%2B4qYsUHED2pGde%2F0YhXlIyRpGe3fJvP7Vw9zeJZuwGIwUJDqt34NzcQMIeptMAGOqUBBwCuC4BV57ngNRjaFi099OqyVDWXgJhSqQhytSpA%2B4c7qvHZ8pM3e2yPwBl3eOHQZl20%2F4J0%2BruA%2F2%2BbXveV7i01WWmjkWL8rk%2FODb2DZ2146SjycSCl5QmQi2YNl6MY2ODN6Auh%2F5ot8%2FX5PBherYpn5HZGASoH%2BTmcIGwCm%2BBQSmEapOJTYUUvRvsGucQ4d9sOEGwUgNZ1QULt4uVYwDK2FyST&X-Amz-Signature=c2c9f714403f2a2c4f41834e9e1c4a77e66f7193137ce722843129f7ce76dcce&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
