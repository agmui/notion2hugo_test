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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3W3QUD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCJD1vIKu1YF1O2jKYD8flFo7JjHVdLsSAmuhs620OhFgIgYA9Sypg78GhukQ23qLsBL0gLwVYOAA5Y1zDRcyF4O2QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI87IB0lyJf0WoTjryrcA5KgzCy7ezW1y1wotp11IJEbbRbaWPxfIkE1Ln15E0MGLzxb1VxKEi1FEoqD%2BbKwQegMnrKj1XdYxStaGnqtlbbmv8Ofz5zdfP7Aqnf7j78ukDX49M0vaeX3ykdFxYiNm1uc3l2ia5qJHwtncdLnjCWW8AumupcwsCsz8OREUYfybMZtmLi%2BgfeBiHIG%2BksPDrlZUpiVl0kNo1EDftCPlsIxShnOX0yMQkcabSoA%2BedYXZ4Ru3mWyDpkNYlLIeKHy0UlO64dAcKX%2F1dCnoXrHTm5yIkAnG4VCHe5%2B0sWBbSSnIAMuSCxbqSic2SX1wCVRHhnsBq6Z%2Ff8qvdphtrb8b5jBOeFvR0BGkdGXtG1DiaWGt%2BzjTFfx9ncMN%2BOfjnLGUX1rt9JFlLPEB0nV1w8WVOMQjDWvxe4bD30MIIbTccxvNZCDsjnSqrabyHy89vH2Ka%2BG9zjRIcFrXbgdU8bqkf0zObYqHfDtCz0jpi76HbesSHRMtPOYd4XpccQKtJysF6fqd0LX4T2BUEd7KG1zDu9OxRBCKSFyFib7wKgZYj8MRZRaH5mqyTMT2HKj3w2ENObnoSmmYM8RI9sZ4qsa4rGT6YFZMujLaIKXpqmtxVPIBFtkto8F6tcLenbMJeGnb0GOqUB%2B6rrtt8xAx6sxqpbRHzA8uyxc3oMygXZVcJlvB3qTuXDMYaYV6Yy0ITbtHKqkHBZo2fxAdIcLncgeErTudzi086%2FoSYKSo%2BWvWKQoajl7rax5brZuGaK9hPs2eOsKXFqkYKM9KCpevDwLlIjdZefEKQBvsC2H0V5511x4ZQhEGRZIoWneiHz3dIXOT0CisAtGRUG3mM0Ad3PH4Hjpz88IMTw5%2F0R&X-Amz-Signature=0969160d4a7334844e77e23b4ad2cd19743ed5f55a662c68a6fedc92adb8a729&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3W3QUD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCJD1vIKu1YF1O2jKYD8flFo7JjHVdLsSAmuhs620OhFgIgYA9Sypg78GhukQ23qLsBL0gLwVYOAA5Y1zDRcyF4O2QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI87IB0lyJf0WoTjryrcA5KgzCy7ezW1y1wotp11IJEbbRbaWPxfIkE1Ln15E0MGLzxb1VxKEi1FEoqD%2BbKwQegMnrKj1XdYxStaGnqtlbbmv8Ofz5zdfP7Aqnf7j78ukDX49M0vaeX3ykdFxYiNm1uc3l2ia5qJHwtncdLnjCWW8AumupcwsCsz8OREUYfybMZtmLi%2BgfeBiHIG%2BksPDrlZUpiVl0kNo1EDftCPlsIxShnOX0yMQkcabSoA%2BedYXZ4Ru3mWyDpkNYlLIeKHy0UlO64dAcKX%2F1dCnoXrHTm5yIkAnG4VCHe5%2B0sWBbSSnIAMuSCxbqSic2SX1wCVRHhnsBq6Z%2Ff8qvdphtrb8b5jBOeFvR0BGkdGXtG1DiaWGt%2BzjTFfx9ncMN%2BOfjnLGUX1rt9JFlLPEB0nV1w8WVOMQjDWvxe4bD30MIIbTccxvNZCDsjnSqrabyHy89vH2Ka%2BG9zjRIcFrXbgdU8bqkf0zObYqHfDtCz0jpi76HbesSHRMtPOYd4XpccQKtJysF6fqd0LX4T2BUEd7KG1zDu9OxRBCKSFyFib7wKgZYj8MRZRaH5mqyTMT2HKj3w2ENObnoSmmYM8RI9sZ4qsa4rGT6YFZMujLaIKXpqmtxVPIBFtkto8F6tcLenbMJeGnb0GOqUB%2B6rrtt8xAx6sxqpbRHzA8uyxc3oMygXZVcJlvB3qTuXDMYaYV6Yy0ITbtHKqkHBZo2fxAdIcLncgeErTudzi086%2FoSYKSo%2BWvWKQoajl7rax5brZuGaK9hPs2eOsKXFqkYKM9KCpevDwLlIjdZefEKQBvsC2H0V5511x4ZQhEGRZIoWneiHz3dIXOT0CisAtGRUG3mM0Ad3PH4Hjpz88IMTw5%2F0R&X-Amz-Signature=5eea1050d7989153e7bb9baab83b50a4b6a563db374dab42fd5e3fc31bcb38af&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3W3QUD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCJD1vIKu1YF1O2jKYD8flFo7JjHVdLsSAmuhs620OhFgIgYA9Sypg78GhukQ23qLsBL0gLwVYOAA5Y1zDRcyF4O2QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI87IB0lyJf0WoTjryrcA5KgzCy7ezW1y1wotp11IJEbbRbaWPxfIkE1Ln15E0MGLzxb1VxKEi1FEoqD%2BbKwQegMnrKj1XdYxStaGnqtlbbmv8Ofz5zdfP7Aqnf7j78ukDX49M0vaeX3ykdFxYiNm1uc3l2ia5qJHwtncdLnjCWW8AumupcwsCsz8OREUYfybMZtmLi%2BgfeBiHIG%2BksPDrlZUpiVl0kNo1EDftCPlsIxShnOX0yMQkcabSoA%2BedYXZ4Ru3mWyDpkNYlLIeKHy0UlO64dAcKX%2F1dCnoXrHTm5yIkAnG4VCHe5%2B0sWBbSSnIAMuSCxbqSic2SX1wCVRHhnsBq6Z%2Ff8qvdphtrb8b5jBOeFvR0BGkdGXtG1DiaWGt%2BzjTFfx9ncMN%2BOfjnLGUX1rt9JFlLPEB0nV1w8WVOMQjDWvxe4bD30MIIbTccxvNZCDsjnSqrabyHy89vH2Ka%2BG9zjRIcFrXbgdU8bqkf0zObYqHfDtCz0jpi76HbesSHRMtPOYd4XpccQKtJysF6fqd0LX4T2BUEd7KG1zDu9OxRBCKSFyFib7wKgZYj8MRZRaH5mqyTMT2HKj3w2ENObnoSmmYM8RI9sZ4qsa4rGT6YFZMujLaIKXpqmtxVPIBFtkto8F6tcLenbMJeGnb0GOqUB%2B6rrtt8xAx6sxqpbRHzA8uyxc3oMygXZVcJlvB3qTuXDMYaYV6Yy0ITbtHKqkHBZo2fxAdIcLncgeErTudzi086%2FoSYKSo%2BWvWKQoajl7rax5brZuGaK9hPs2eOsKXFqkYKM9KCpevDwLlIjdZefEKQBvsC2H0V5511x4ZQhEGRZIoWneiHz3dIXOT0CisAtGRUG3mM0Ad3PH4Hjpz88IMTw5%2F0R&X-Amz-Signature=1ab66fa6b324a3b975837392620796f99a8089abbe525f21b1e8e225ca3c9eb2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3W3QUD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCJD1vIKu1YF1O2jKYD8flFo7JjHVdLsSAmuhs620OhFgIgYA9Sypg78GhukQ23qLsBL0gLwVYOAA5Y1zDRcyF4O2QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI87IB0lyJf0WoTjryrcA5KgzCy7ezW1y1wotp11IJEbbRbaWPxfIkE1Ln15E0MGLzxb1VxKEi1FEoqD%2BbKwQegMnrKj1XdYxStaGnqtlbbmv8Ofz5zdfP7Aqnf7j78ukDX49M0vaeX3ykdFxYiNm1uc3l2ia5qJHwtncdLnjCWW8AumupcwsCsz8OREUYfybMZtmLi%2BgfeBiHIG%2BksPDrlZUpiVl0kNo1EDftCPlsIxShnOX0yMQkcabSoA%2BedYXZ4Ru3mWyDpkNYlLIeKHy0UlO64dAcKX%2F1dCnoXrHTm5yIkAnG4VCHe5%2B0sWBbSSnIAMuSCxbqSic2SX1wCVRHhnsBq6Z%2Ff8qvdphtrb8b5jBOeFvR0BGkdGXtG1DiaWGt%2BzjTFfx9ncMN%2BOfjnLGUX1rt9JFlLPEB0nV1w8WVOMQjDWvxe4bD30MIIbTccxvNZCDsjnSqrabyHy89vH2Ka%2BG9zjRIcFrXbgdU8bqkf0zObYqHfDtCz0jpi76HbesSHRMtPOYd4XpccQKtJysF6fqd0LX4T2BUEd7KG1zDu9OxRBCKSFyFib7wKgZYj8MRZRaH5mqyTMT2HKj3w2ENObnoSmmYM8RI9sZ4qsa4rGT6YFZMujLaIKXpqmtxVPIBFtkto8F6tcLenbMJeGnb0GOqUB%2B6rrtt8xAx6sxqpbRHzA8uyxc3oMygXZVcJlvB3qTuXDMYaYV6Yy0ITbtHKqkHBZo2fxAdIcLncgeErTudzi086%2FoSYKSo%2BWvWKQoajl7rax5brZuGaK9hPs2eOsKXFqkYKM9KCpevDwLlIjdZefEKQBvsC2H0V5511x4ZQhEGRZIoWneiHz3dIXOT0CisAtGRUG3mM0Ad3PH4Hjpz88IMTw5%2F0R&X-Amz-Signature=993f3b93a84e810c31b3131789f7a35b98cbe85b8ba50fe0bda66f8eb2a01746&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3W3QUD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCJD1vIKu1YF1O2jKYD8flFo7JjHVdLsSAmuhs620OhFgIgYA9Sypg78GhukQ23qLsBL0gLwVYOAA5Y1zDRcyF4O2QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI87IB0lyJf0WoTjryrcA5KgzCy7ezW1y1wotp11IJEbbRbaWPxfIkE1Ln15E0MGLzxb1VxKEi1FEoqD%2BbKwQegMnrKj1XdYxStaGnqtlbbmv8Ofz5zdfP7Aqnf7j78ukDX49M0vaeX3ykdFxYiNm1uc3l2ia5qJHwtncdLnjCWW8AumupcwsCsz8OREUYfybMZtmLi%2BgfeBiHIG%2BksPDrlZUpiVl0kNo1EDftCPlsIxShnOX0yMQkcabSoA%2BedYXZ4Ru3mWyDpkNYlLIeKHy0UlO64dAcKX%2F1dCnoXrHTm5yIkAnG4VCHe5%2B0sWBbSSnIAMuSCxbqSic2SX1wCVRHhnsBq6Z%2Ff8qvdphtrb8b5jBOeFvR0BGkdGXtG1DiaWGt%2BzjTFfx9ncMN%2BOfjnLGUX1rt9JFlLPEB0nV1w8WVOMQjDWvxe4bD30MIIbTccxvNZCDsjnSqrabyHy89vH2Ka%2BG9zjRIcFrXbgdU8bqkf0zObYqHfDtCz0jpi76HbesSHRMtPOYd4XpccQKtJysF6fqd0LX4T2BUEd7KG1zDu9OxRBCKSFyFib7wKgZYj8MRZRaH5mqyTMT2HKj3w2ENObnoSmmYM8RI9sZ4qsa4rGT6YFZMujLaIKXpqmtxVPIBFtkto8F6tcLenbMJeGnb0GOqUB%2B6rrtt8xAx6sxqpbRHzA8uyxc3oMygXZVcJlvB3qTuXDMYaYV6Yy0ITbtHKqkHBZo2fxAdIcLncgeErTudzi086%2FoSYKSo%2BWvWKQoajl7rax5brZuGaK9hPs2eOsKXFqkYKM9KCpevDwLlIjdZefEKQBvsC2H0V5511x4ZQhEGRZIoWneiHz3dIXOT0CisAtGRUG3mM0Ad3PH4Hjpz88IMTw5%2F0R&X-Amz-Signature=8e4a62c10cad1081d297474f90e620643788f059bfa64c527c8cb57be14fa2c9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3W3QUD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCJD1vIKu1YF1O2jKYD8flFo7JjHVdLsSAmuhs620OhFgIgYA9Sypg78GhukQ23qLsBL0gLwVYOAA5Y1zDRcyF4O2QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI87IB0lyJf0WoTjryrcA5KgzCy7ezW1y1wotp11IJEbbRbaWPxfIkE1Ln15E0MGLzxb1VxKEi1FEoqD%2BbKwQegMnrKj1XdYxStaGnqtlbbmv8Ofz5zdfP7Aqnf7j78ukDX49M0vaeX3ykdFxYiNm1uc3l2ia5qJHwtncdLnjCWW8AumupcwsCsz8OREUYfybMZtmLi%2BgfeBiHIG%2BksPDrlZUpiVl0kNo1EDftCPlsIxShnOX0yMQkcabSoA%2BedYXZ4Ru3mWyDpkNYlLIeKHy0UlO64dAcKX%2F1dCnoXrHTm5yIkAnG4VCHe5%2B0sWBbSSnIAMuSCxbqSic2SX1wCVRHhnsBq6Z%2Ff8qvdphtrb8b5jBOeFvR0BGkdGXtG1DiaWGt%2BzjTFfx9ncMN%2BOfjnLGUX1rt9JFlLPEB0nV1w8WVOMQjDWvxe4bD30MIIbTccxvNZCDsjnSqrabyHy89vH2Ka%2BG9zjRIcFrXbgdU8bqkf0zObYqHfDtCz0jpi76HbesSHRMtPOYd4XpccQKtJysF6fqd0LX4T2BUEd7KG1zDu9OxRBCKSFyFib7wKgZYj8MRZRaH5mqyTMT2HKj3w2ENObnoSmmYM8RI9sZ4qsa4rGT6YFZMujLaIKXpqmtxVPIBFtkto8F6tcLenbMJeGnb0GOqUB%2B6rrtt8xAx6sxqpbRHzA8uyxc3oMygXZVcJlvB3qTuXDMYaYV6Yy0ITbtHKqkHBZo2fxAdIcLncgeErTudzi086%2FoSYKSo%2BWvWKQoajl7rax5brZuGaK9hPs2eOsKXFqkYKM9KCpevDwLlIjdZefEKQBvsC2H0V5511x4ZQhEGRZIoWneiHz3dIXOT0CisAtGRUG3mM0Ad3PH4Hjpz88IMTw5%2F0R&X-Amz-Signature=9d6afc6378576f9022f10cda903e9a381717449b98bb7b8ee592767118b5aa10&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3W3QUD%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T150255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCJD1vIKu1YF1O2jKYD8flFo7JjHVdLsSAmuhs620OhFgIgYA9Sypg78GhukQ23qLsBL0gLwVYOAA5Y1zDRcyF4O2QqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI87IB0lyJf0WoTjryrcA5KgzCy7ezW1y1wotp11IJEbbRbaWPxfIkE1Ln15E0MGLzxb1VxKEi1FEoqD%2BbKwQegMnrKj1XdYxStaGnqtlbbmv8Ofz5zdfP7Aqnf7j78ukDX49M0vaeX3ykdFxYiNm1uc3l2ia5qJHwtncdLnjCWW8AumupcwsCsz8OREUYfybMZtmLi%2BgfeBiHIG%2BksPDrlZUpiVl0kNo1EDftCPlsIxShnOX0yMQkcabSoA%2BedYXZ4Ru3mWyDpkNYlLIeKHy0UlO64dAcKX%2F1dCnoXrHTm5yIkAnG4VCHe5%2B0sWBbSSnIAMuSCxbqSic2SX1wCVRHhnsBq6Z%2Ff8qvdphtrb8b5jBOeFvR0BGkdGXtG1DiaWGt%2BzjTFfx9ncMN%2BOfjnLGUX1rt9JFlLPEB0nV1w8WVOMQjDWvxe4bD30MIIbTccxvNZCDsjnSqrabyHy89vH2Ka%2BG9zjRIcFrXbgdU8bqkf0zObYqHfDtCz0jpi76HbesSHRMtPOYd4XpccQKtJysF6fqd0LX4T2BUEd7KG1zDu9OxRBCKSFyFib7wKgZYj8MRZRaH5mqyTMT2HKj3w2ENObnoSmmYM8RI9sZ4qsa4rGT6YFZMujLaIKXpqmtxVPIBFtkto8F6tcLenbMJeGnb0GOqUB%2B6rrtt8xAx6sxqpbRHzA8uyxc3oMygXZVcJlvB3qTuXDMYaYV6Yy0ITbtHKqkHBZo2fxAdIcLncgeErTudzi086%2FoSYKSo%2BWvWKQoajl7rax5brZuGaK9hPs2eOsKXFqkYKM9KCpevDwLlIjdZefEKQBvsC2H0V5511x4ZQhEGRZIoWneiHz3dIXOT0CisAtGRUG3mM0Ad3PH4Hjpz88IMTw5%2F0R&X-Amz-Signature=a91f9bfc712380d34d6b7d3654a4310f186d622cfcdacb9d77c9d81936d78e71&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
