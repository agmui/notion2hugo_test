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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2AFZ5SY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxG5iyZVz8AsVuEbFpthh1YfbN%2Ftsbvq5xbuJQ61UrCQIgbk2N9kTZrTgD4ifHKMyKrbSklT6ZrxNEUhh%2FpJUnBB0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQuZhewM4oN6%2FSHJyrcA0PgI5U%2FZsixa1ft5%2BDzxAN8o1y5YpdNSNq4hQl2Klf%2BCgX7fmb9%2FPZO7IkreK8yjgpQRKF%2FVQgOV0iFRbo%2BEzN9PEgIUNngxYP%2BCNg0Hp7b%2FahZ%2FFvHHD4WJtv9rfkL6e9Gsc%2B5yd%2F5udZr62Kj6ddzzezAs%2BxADCmbXIBd3jazb6jWbVBECWh1aDVS5okgRkSd21GEYGMmwMT%2Bo5XVauUPMYMnY5t5ix%2F5UAWGG5%2FXDktzE1X5b4Bg9gWxVMFLLLxty48kCipV3Zz%2F8Rxwebixvy8OWQmmR5XWPZrKcqHE8K5yf%2B1EZwRwKPQLgDQbKP1Q7V9rIWgRg6w1p2aGhqlcN%2Flbs81onAhIqX2UtBji5%2FAcCJLI2K01eiVwE6Q7TVJc9ERcgp3tPN3C%2FZXJLQWvVEnSgVNcz3Tb%2FohrfSaX2cPyIvybrsFk0kEU4ZhZ3PsvULAdMiz2x4PKXM9Hood%2Fru1AfHTb%2FLP%2FqO1LG2%2FPLAHfy540cncheQrpmOXkB1O4mfkNU48sO8k5hP1XvP17MU5dUwvbfeuG7I558EYhsasZ0w2XgjiyuGzyrTwR6r4PWg4v4EsV1op%2FjemEtMuKSesgUvmFWcdbTANbFx2grPDP8n5hs5LfqIiWMOiwosQGOqUBaWoCUEW06iAt6HKSN%2B09KrR1mRMcaDTvkgJpts5sFEm%2BuYv9HGEhDuXoSqsrMacRyGmQ%2BXskMbqLKwwtZ%2BFfzbFLxVZJx6klIyV9RBhqkvSnT%2FqjNMKcu19Gc1L4rNKCgUaX81XrwnYPplqbF9iGG%2FyklXiwfwVOsbkrTjEMI8wexdzxbGfUJfsc9c0UWpnXCSeBfCfThP3Na%2BbfwKBozt5xNx84&X-Amz-Signature=72ace2fe39fa3ce4483930ba0d9e29dcd0009fd25beeee9b5c198b17cd3d038d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2AFZ5SY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxG5iyZVz8AsVuEbFpthh1YfbN%2Ftsbvq5xbuJQ61UrCQIgbk2N9kTZrTgD4ifHKMyKrbSklT6ZrxNEUhh%2FpJUnBB0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQuZhewM4oN6%2FSHJyrcA0PgI5U%2FZsixa1ft5%2BDzxAN8o1y5YpdNSNq4hQl2Klf%2BCgX7fmb9%2FPZO7IkreK8yjgpQRKF%2FVQgOV0iFRbo%2BEzN9PEgIUNngxYP%2BCNg0Hp7b%2FahZ%2FFvHHD4WJtv9rfkL6e9Gsc%2B5yd%2F5udZr62Kj6ddzzezAs%2BxADCmbXIBd3jazb6jWbVBECWh1aDVS5okgRkSd21GEYGMmwMT%2Bo5XVauUPMYMnY5t5ix%2F5UAWGG5%2FXDktzE1X5b4Bg9gWxVMFLLLxty48kCipV3Zz%2F8Rxwebixvy8OWQmmR5XWPZrKcqHE8K5yf%2B1EZwRwKPQLgDQbKP1Q7V9rIWgRg6w1p2aGhqlcN%2Flbs81onAhIqX2UtBji5%2FAcCJLI2K01eiVwE6Q7TVJc9ERcgp3tPN3C%2FZXJLQWvVEnSgVNcz3Tb%2FohrfSaX2cPyIvybrsFk0kEU4ZhZ3PsvULAdMiz2x4PKXM9Hood%2Fru1AfHTb%2FLP%2FqO1LG2%2FPLAHfy540cncheQrpmOXkB1O4mfkNU48sO8k5hP1XvP17MU5dUwvbfeuG7I558EYhsasZ0w2XgjiyuGzyrTwR6r4PWg4v4EsV1op%2FjemEtMuKSesgUvmFWcdbTANbFx2grPDP8n5hs5LfqIiWMOiwosQGOqUBaWoCUEW06iAt6HKSN%2B09KrR1mRMcaDTvkgJpts5sFEm%2BuYv9HGEhDuXoSqsrMacRyGmQ%2BXskMbqLKwwtZ%2BFfzbFLxVZJx6klIyV9RBhqkvSnT%2FqjNMKcu19Gc1L4rNKCgUaX81XrwnYPplqbF9iGG%2FyklXiwfwVOsbkrTjEMI8wexdzxbGfUJfsc9c0UWpnXCSeBfCfThP3Na%2BbfwKBozt5xNx84&X-Amz-Signature=432705174f39ec1598e89154b9df78aa97b2d68f4f0f11f033b576c81b4fad6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2AFZ5SY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxG5iyZVz8AsVuEbFpthh1YfbN%2Ftsbvq5xbuJQ61UrCQIgbk2N9kTZrTgD4ifHKMyKrbSklT6ZrxNEUhh%2FpJUnBB0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQuZhewM4oN6%2FSHJyrcA0PgI5U%2FZsixa1ft5%2BDzxAN8o1y5YpdNSNq4hQl2Klf%2BCgX7fmb9%2FPZO7IkreK8yjgpQRKF%2FVQgOV0iFRbo%2BEzN9PEgIUNngxYP%2BCNg0Hp7b%2FahZ%2FFvHHD4WJtv9rfkL6e9Gsc%2B5yd%2F5udZr62Kj6ddzzezAs%2BxADCmbXIBd3jazb6jWbVBECWh1aDVS5okgRkSd21GEYGMmwMT%2Bo5XVauUPMYMnY5t5ix%2F5UAWGG5%2FXDktzE1X5b4Bg9gWxVMFLLLxty48kCipV3Zz%2F8Rxwebixvy8OWQmmR5XWPZrKcqHE8K5yf%2B1EZwRwKPQLgDQbKP1Q7V9rIWgRg6w1p2aGhqlcN%2Flbs81onAhIqX2UtBji5%2FAcCJLI2K01eiVwE6Q7TVJc9ERcgp3tPN3C%2FZXJLQWvVEnSgVNcz3Tb%2FohrfSaX2cPyIvybrsFk0kEU4ZhZ3PsvULAdMiz2x4PKXM9Hood%2Fru1AfHTb%2FLP%2FqO1LG2%2FPLAHfy540cncheQrpmOXkB1O4mfkNU48sO8k5hP1XvP17MU5dUwvbfeuG7I558EYhsasZ0w2XgjiyuGzyrTwR6r4PWg4v4EsV1op%2FjemEtMuKSesgUvmFWcdbTANbFx2grPDP8n5hs5LfqIiWMOiwosQGOqUBaWoCUEW06iAt6HKSN%2B09KrR1mRMcaDTvkgJpts5sFEm%2BuYv9HGEhDuXoSqsrMacRyGmQ%2BXskMbqLKwwtZ%2BFfzbFLxVZJx6klIyV9RBhqkvSnT%2FqjNMKcu19Gc1L4rNKCgUaX81XrwnYPplqbF9iGG%2FyklXiwfwVOsbkrTjEMI8wexdzxbGfUJfsc9c0UWpnXCSeBfCfThP3Na%2BbfwKBozt5xNx84&X-Amz-Signature=fd87f6850865a8f0636ef684d0d64e69c72b0d37fa8b389586aa27ab5e4085c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2AFZ5SY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxG5iyZVz8AsVuEbFpthh1YfbN%2Ftsbvq5xbuJQ61UrCQIgbk2N9kTZrTgD4ifHKMyKrbSklT6ZrxNEUhh%2FpJUnBB0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQuZhewM4oN6%2FSHJyrcA0PgI5U%2FZsixa1ft5%2BDzxAN8o1y5YpdNSNq4hQl2Klf%2BCgX7fmb9%2FPZO7IkreK8yjgpQRKF%2FVQgOV0iFRbo%2BEzN9PEgIUNngxYP%2BCNg0Hp7b%2FahZ%2FFvHHD4WJtv9rfkL6e9Gsc%2B5yd%2F5udZr62Kj6ddzzezAs%2BxADCmbXIBd3jazb6jWbVBECWh1aDVS5okgRkSd21GEYGMmwMT%2Bo5XVauUPMYMnY5t5ix%2F5UAWGG5%2FXDktzE1X5b4Bg9gWxVMFLLLxty48kCipV3Zz%2F8Rxwebixvy8OWQmmR5XWPZrKcqHE8K5yf%2B1EZwRwKPQLgDQbKP1Q7V9rIWgRg6w1p2aGhqlcN%2Flbs81onAhIqX2UtBji5%2FAcCJLI2K01eiVwE6Q7TVJc9ERcgp3tPN3C%2FZXJLQWvVEnSgVNcz3Tb%2FohrfSaX2cPyIvybrsFk0kEU4ZhZ3PsvULAdMiz2x4PKXM9Hood%2Fru1AfHTb%2FLP%2FqO1LG2%2FPLAHfy540cncheQrpmOXkB1O4mfkNU48sO8k5hP1XvP17MU5dUwvbfeuG7I558EYhsasZ0w2XgjiyuGzyrTwR6r4PWg4v4EsV1op%2FjemEtMuKSesgUvmFWcdbTANbFx2grPDP8n5hs5LfqIiWMOiwosQGOqUBaWoCUEW06iAt6HKSN%2B09KrR1mRMcaDTvkgJpts5sFEm%2BuYv9HGEhDuXoSqsrMacRyGmQ%2BXskMbqLKwwtZ%2BFfzbFLxVZJx6klIyV9RBhqkvSnT%2FqjNMKcu19Gc1L4rNKCgUaX81XrwnYPplqbF9iGG%2FyklXiwfwVOsbkrTjEMI8wexdzxbGfUJfsc9c0UWpnXCSeBfCfThP3Na%2BbfwKBozt5xNx84&X-Amz-Signature=937e3295b12e6fb776bc604e7afffe90d1e6de9d66540459483ddff5b7e0899c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2AFZ5SY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxG5iyZVz8AsVuEbFpthh1YfbN%2Ftsbvq5xbuJQ61UrCQIgbk2N9kTZrTgD4ifHKMyKrbSklT6ZrxNEUhh%2FpJUnBB0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQuZhewM4oN6%2FSHJyrcA0PgI5U%2FZsixa1ft5%2BDzxAN8o1y5YpdNSNq4hQl2Klf%2BCgX7fmb9%2FPZO7IkreK8yjgpQRKF%2FVQgOV0iFRbo%2BEzN9PEgIUNngxYP%2BCNg0Hp7b%2FahZ%2FFvHHD4WJtv9rfkL6e9Gsc%2B5yd%2F5udZr62Kj6ddzzezAs%2BxADCmbXIBd3jazb6jWbVBECWh1aDVS5okgRkSd21GEYGMmwMT%2Bo5XVauUPMYMnY5t5ix%2F5UAWGG5%2FXDktzE1X5b4Bg9gWxVMFLLLxty48kCipV3Zz%2F8Rxwebixvy8OWQmmR5XWPZrKcqHE8K5yf%2B1EZwRwKPQLgDQbKP1Q7V9rIWgRg6w1p2aGhqlcN%2Flbs81onAhIqX2UtBji5%2FAcCJLI2K01eiVwE6Q7TVJc9ERcgp3tPN3C%2FZXJLQWvVEnSgVNcz3Tb%2FohrfSaX2cPyIvybrsFk0kEU4ZhZ3PsvULAdMiz2x4PKXM9Hood%2Fru1AfHTb%2FLP%2FqO1LG2%2FPLAHfy540cncheQrpmOXkB1O4mfkNU48sO8k5hP1XvP17MU5dUwvbfeuG7I558EYhsasZ0w2XgjiyuGzyrTwR6r4PWg4v4EsV1op%2FjemEtMuKSesgUvmFWcdbTANbFx2grPDP8n5hs5LfqIiWMOiwosQGOqUBaWoCUEW06iAt6HKSN%2B09KrR1mRMcaDTvkgJpts5sFEm%2BuYv9HGEhDuXoSqsrMacRyGmQ%2BXskMbqLKwwtZ%2BFfzbFLxVZJx6klIyV9RBhqkvSnT%2FqjNMKcu19Gc1L4rNKCgUaX81XrwnYPplqbF9iGG%2FyklXiwfwVOsbkrTjEMI8wexdzxbGfUJfsc9c0UWpnXCSeBfCfThP3Na%2BbfwKBozt5xNx84&X-Amz-Signature=4d37c56d41f27a97ab805ac910975cf28fb7682f95525aaae455a9fa34150379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2AFZ5SY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxG5iyZVz8AsVuEbFpthh1YfbN%2Ftsbvq5xbuJQ61UrCQIgbk2N9kTZrTgD4ifHKMyKrbSklT6ZrxNEUhh%2FpJUnBB0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQuZhewM4oN6%2FSHJyrcA0PgI5U%2FZsixa1ft5%2BDzxAN8o1y5YpdNSNq4hQl2Klf%2BCgX7fmb9%2FPZO7IkreK8yjgpQRKF%2FVQgOV0iFRbo%2BEzN9PEgIUNngxYP%2BCNg0Hp7b%2FahZ%2FFvHHD4WJtv9rfkL6e9Gsc%2B5yd%2F5udZr62Kj6ddzzezAs%2BxADCmbXIBd3jazb6jWbVBECWh1aDVS5okgRkSd21GEYGMmwMT%2Bo5XVauUPMYMnY5t5ix%2F5UAWGG5%2FXDktzE1X5b4Bg9gWxVMFLLLxty48kCipV3Zz%2F8Rxwebixvy8OWQmmR5XWPZrKcqHE8K5yf%2B1EZwRwKPQLgDQbKP1Q7V9rIWgRg6w1p2aGhqlcN%2Flbs81onAhIqX2UtBji5%2FAcCJLI2K01eiVwE6Q7TVJc9ERcgp3tPN3C%2FZXJLQWvVEnSgVNcz3Tb%2FohrfSaX2cPyIvybrsFk0kEU4ZhZ3PsvULAdMiz2x4PKXM9Hood%2Fru1AfHTb%2FLP%2FqO1LG2%2FPLAHfy540cncheQrpmOXkB1O4mfkNU48sO8k5hP1XvP17MU5dUwvbfeuG7I558EYhsasZ0w2XgjiyuGzyrTwR6r4PWg4v4EsV1op%2FjemEtMuKSesgUvmFWcdbTANbFx2grPDP8n5hs5LfqIiWMOiwosQGOqUBaWoCUEW06iAt6HKSN%2B09KrR1mRMcaDTvkgJpts5sFEm%2BuYv9HGEhDuXoSqsrMacRyGmQ%2BXskMbqLKwwtZ%2BFfzbFLxVZJx6klIyV9RBhqkvSnT%2FqjNMKcu19Gc1L4rNKCgUaX81XrwnYPplqbF9iGG%2FyklXiwfwVOsbkrTjEMI8wexdzxbGfUJfsc9c0UWpnXCSeBfCfThP3Na%2BbfwKBozt5xNx84&X-Amz-Signature=e43ad842f1afaf794964c5f6f2f480c720b621387f0a0957b7000f5406f4e50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2AFZ5SY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T101043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCxG5iyZVz8AsVuEbFpthh1YfbN%2Ftsbvq5xbuJQ61UrCQIgbk2N9kTZrTgD4ifHKMyKrbSklT6ZrxNEUhh%2FpJUnBB0qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQuZhewM4oN6%2FSHJyrcA0PgI5U%2FZsixa1ft5%2BDzxAN8o1y5YpdNSNq4hQl2Klf%2BCgX7fmb9%2FPZO7IkreK8yjgpQRKF%2FVQgOV0iFRbo%2BEzN9PEgIUNngxYP%2BCNg0Hp7b%2FahZ%2FFvHHD4WJtv9rfkL6e9Gsc%2B5yd%2F5udZr62Kj6ddzzezAs%2BxADCmbXIBd3jazb6jWbVBECWh1aDVS5okgRkSd21GEYGMmwMT%2Bo5XVauUPMYMnY5t5ix%2F5UAWGG5%2FXDktzE1X5b4Bg9gWxVMFLLLxty48kCipV3Zz%2F8Rxwebixvy8OWQmmR5XWPZrKcqHE8K5yf%2B1EZwRwKPQLgDQbKP1Q7V9rIWgRg6w1p2aGhqlcN%2Flbs81onAhIqX2UtBji5%2FAcCJLI2K01eiVwE6Q7TVJc9ERcgp3tPN3C%2FZXJLQWvVEnSgVNcz3Tb%2FohrfSaX2cPyIvybrsFk0kEU4ZhZ3PsvULAdMiz2x4PKXM9Hood%2Fru1AfHTb%2FLP%2FqO1LG2%2FPLAHfy540cncheQrpmOXkB1O4mfkNU48sO8k5hP1XvP17MU5dUwvbfeuG7I558EYhsasZ0w2XgjiyuGzyrTwR6r4PWg4v4EsV1op%2FjemEtMuKSesgUvmFWcdbTANbFx2grPDP8n5hs5LfqIiWMOiwosQGOqUBaWoCUEW06iAt6HKSN%2B09KrR1mRMcaDTvkgJpts5sFEm%2BuYv9HGEhDuXoSqsrMacRyGmQ%2BXskMbqLKwwtZ%2BFfzbFLxVZJx6klIyV9RBhqkvSnT%2FqjNMKcu19Gc1L4rNKCgUaX81XrwnYPplqbF9iGG%2FyklXiwfwVOsbkrTjEMI8wexdzxbGfUJfsc9c0UWpnXCSeBfCfThP3Na%2BbfwKBozt5xNx84&X-Amz-Signature=e6bc6d531eee71209687e28f4a63a6e496e74e5ed9c951420fb25b239c5ea114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
