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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZXY6OG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8O7SYRvdiqu8WRkHYYjGjlfziTdKYNsHnQlY92irP0AiBsuStWLM3M7aGFWc8iYcA1aWownHVm04F8Xqf9XNmB0yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMSpLoOdM9nc%2B3sleLKtwDjDUSLvPKDTzCwSnDbfePj2SSzic%2F1n4FQaA4T8likSDDs8mawW81j4ce%2BPsTOeGJfZwAQBOR1ZF1%2BACd4vZJyJQR6iCarMgytfZKtdcQFNcZKohECkml2w%2B37BKn1NYiCW569fuVuk8QI%2BaGQS3pMoNU7Vo7g9WALl7d%2FYDZqsqD7%2FFBy%2FhqfoV955N5MfToctiYRyqW8I9zpTegYIWdkKihH3yk5LWdqZgOAO4xaYW4t9x370aAGdMiIzvPvfL6GaWUeObR%2FGjlxOuMP1a9NyhbH%2B53qHuHMhGuzFaS5M6Enkl0k0%2FWXS8N9uQoYLXq%2Bj6fdDb9S4AXI4XMPCfft369qnr74OaF8i%2BETRpNZk%2Fv3rX7jALKEkChGQdSSh7OHVi97oEJ76g9nh%2BteI8WhEJA3TBh5ex4Gim0n%2B8LnwHuFNwS1dr0TO4Hw6I0j2muAqr4lnMpzafnk7b%2BbfT4SIoCUPb6eAtW0%2FtfgjiB1Sn0FyY3W0qVoeFJed%2FO8U3XlRKlz5lGX%2BMmDQ5gbFXZj63Lz%2B83c1%2BAlCMl3j0VoZNvlDRzGiIW1LC4fVhmUS2ahQU0J7YHcAN9FDf8rTl9PrEuHzei8d9wx%2BNimdLePFQpo6XUU8Yxb4PGJ%2Fcw%2BN%2FxwAY6pgEcqRG7ls1QWQ%2Bf3%2BN%2Fc3P%2BSkHK8cP48yALKLwnholvQGt9y%2B1wzh8g64cPf2dcpCMxRvyNvI2nTPwPbLTPYXWiCZ93%2Bct4lWkQ6SFS3xQmtw7Vpu4eBpZuNb74qm%2BQrAv37TP3OWZP6h0yUnst5wk3Y69o2BWTNlQ3f5Ab6qhmQcRA51ykrraAfCZm6ELbHuHrHvKHVb0H6%2BYPPxDMWZlJAD%2BViQ%2BI&X-Amz-Signature=f83a3a22d96ee2cf6c0ad90e11768ee6f921179fcd14aa99233383e285a6ca77&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZXY6OG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8O7SYRvdiqu8WRkHYYjGjlfziTdKYNsHnQlY92irP0AiBsuStWLM3M7aGFWc8iYcA1aWownHVm04F8Xqf9XNmB0yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMSpLoOdM9nc%2B3sleLKtwDjDUSLvPKDTzCwSnDbfePj2SSzic%2F1n4FQaA4T8likSDDs8mawW81j4ce%2BPsTOeGJfZwAQBOR1ZF1%2BACd4vZJyJQR6iCarMgytfZKtdcQFNcZKohECkml2w%2B37BKn1NYiCW569fuVuk8QI%2BaGQS3pMoNU7Vo7g9WALl7d%2FYDZqsqD7%2FFBy%2FhqfoV955N5MfToctiYRyqW8I9zpTegYIWdkKihH3yk5LWdqZgOAO4xaYW4t9x370aAGdMiIzvPvfL6GaWUeObR%2FGjlxOuMP1a9NyhbH%2B53qHuHMhGuzFaS5M6Enkl0k0%2FWXS8N9uQoYLXq%2Bj6fdDb9S4AXI4XMPCfft369qnr74OaF8i%2BETRpNZk%2Fv3rX7jALKEkChGQdSSh7OHVi97oEJ76g9nh%2BteI8WhEJA3TBh5ex4Gim0n%2B8LnwHuFNwS1dr0TO4Hw6I0j2muAqr4lnMpzafnk7b%2BbfT4SIoCUPb6eAtW0%2FtfgjiB1Sn0FyY3W0qVoeFJed%2FO8U3XlRKlz5lGX%2BMmDQ5gbFXZj63Lz%2B83c1%2BAlCMl3j0VoZNvlDRzGiIW1LC4fVhmUS2ahQU0J7YHcAN9FDf8rTl9PrEuHzei8d9wx%2BNimdLePFQpo6XUU8Yxb4PGJ%2Fcw%2BN%2FxwAY6pgEcqRG7ls1QWQ%2Bf3%2BN%2Fc3P%2BSkHK8cP48yALKLwnholvQGt9y%2B1wzh8g64cPf2dcpCMxRvyNvI2nTPwPbLTPYXWiCZ93%2Bct4lWkQ6SFS3xQmtw7Vpu4eBpZuNb74qm%2BQrAv37TP3OWZP6h0yUnst5wk3Y69o2BWTNlQ3f5Ab6qhmQcRA51ykrraAfCZm6ELbHuHrHvKHVb0H6%2BYPPxDMWZlJAD%2BViQ%2BI&X-Amz-Signature=2b42d74dc40039e23e36fa0c4e5d7b3a7d73650db6b943c31e015aaaed439613&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZXY6OG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8O7SYRvdiqu8WRkHYYjGjlfziTdKYNsHnQlY92irP0AiBsuStWLM3M7aGFWc8iYcA1aWownHVm04F8Xqf9XNmB0yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMSpLoOdM9nc%2B3sleLKtwDjDUSLvPKDTzCwSnDbfePj2SSzic%2F1n4FQaA4T8likSDDs8mawW81j4ce%2BPsTOeGJfZwAQBOR1ZF1%2BACd4vZJyJQR6iCarMgytfZKtdcQFNcZKohECkml2w%2B37BKn1NYiCW569fuVuk8QI%2BaGQS3pMoNU7Vo7g9WALl7d%2FYDZqsqD7%2FFBy%2FhqfoV955N5MfToctiYRyqW8I9zpTegYIWdkKihH3yk5LWdqZgOAO4xaYW4t9x370aAGdMiIzvPvfL6GaWUeObR%2FGjlxOuMP1a9NyhbH%2B53qHuHMhGuzFaS5M6Enkl0k0%2FWXS8N9uQoYLXq%2Bj6fdDb9S4AXI4XMPCfft369qnr74OaF8i%2BETRpNZk%2Fv3rX7jALKEkChGQdSSh7OHVi97oEJ76g9nh%2BteI8WhEJA3TBh5ex4Gim0n%2B8LnwHuFNwS1dr0TO4Hw6I0j2muAqr4lnMpzafnk7b%2BbfT4SIoCUPb6eAtW0%2FtfgjiB1Sn0FyY3W0qVoeFJed%2FO8U3XlRKlz5lGX%2BMmDQ5gbFXZj63Lz%2B83c1%2BAlCMl3j0VoZNvlDRzGiIW1LC4fVhmUS2ahQU0J7YHcAN9FDf8rTl9PrEuHzei8d9wx%2BNimdLePFQpo6XUU8Yxb4PGJ%2Fcw%2BN%2FxwAY6pgEcqRG7ls1QWQ%2Bf3%2BN%2Fc3P%2BSkHK8cP48yALKLwnholvQGt9y%2B1wzh8g64cPf2dcpCMxRvyNvI2nTPwPbLTPYXWiCZ93%2Bct4lWkQ6SFS3xQmtw7Vpu4eBpZuNb74qm%2BQrAv37TP3OWZP6h0yUnst5wk3Y69o2BWTNlQ3f5Ab6qhmQcRA51ykrraAfCZm6ELbHuHrHvKHVb0H6%2BYPPxDMWZlJAD%2BViQ%2BI&X-Amz-Signature=ebc6f34440dc209281fa6ea9e535bf51d1ad88fa2b16a61cd4b9c59ad3bb1ede&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZXY6OG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8O7SYRvdiqu8WRkHYYjGjlfziTdKYNsHnQlY92irP0AiBsuStWLM3M7aGFWc8iYcA1aWownHVm04F8Xqf9XNmB0yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMSpLoOdM9nc%2B3sleLKtwDjDUSLvPKDTzCwSnDbfePj2SSzic%2F1n4FQaA4T8likSDDs8mawW81j4ce%2BPsTOeGJfZwAQBOR1ZF1%2BACd4vZJyJQR6iCarMgytfZKtdcQFNcZKohECkml2w%2B37BKn1NYiCW569fuVuk8QI%2BaGQS3pMoNU7Vo7g9WALl7d%2FYDZqsqD7%2FFBy%2FhqfoV955N5MfToctiYRyqW8I9zpTegYIWdkKihH3yk5LWdqZgOAO4xaYW4t9x370aAGdMiIzvPvfL6GaWUeObR%2FGjlxOuMP1a9NyhbH%2B53qHuHMhGuzFaS5M6Enkl0k0%2FWXS8N9uQoYLXq%2Bj6fdDb9S4AXI4XMPCfft369qnr74OaF8i%2BETRpNZk%2Fv3rX7jALKEkChGQdSSh7OHVi97oEJ76g9nh%2BteI8WhEJA3TBh5ex4Gim0n%2B8LnwHuFNwS1dr0TO4Hw6I0j2muAqr4lnMpzafnk7b%2BbfT4SIoCUPb6eAtW0%2FtfgjiB1Sn0FyY3W0qVoeFJed%2FO8U3XlRKlz5lGX%2BMmDQ5gbFXZj63Lz%2B83c1%2BAlCMl3j0VoZNvlDRzGiIW1LC4fVhmUS2ahQU0J7YHcAN9FDf8rTl9PrEuHzei8d9wx%2BNimdLePFQpo6XUU8Yxb4PGJ%2Fcw%2BN%2FxwAY6pgEcqRG7ls1QWQ%2Bf3%2BN%2Fc3P%2BSkHK8cP48yALKLwnholvQGt9y%2B1wzh8g64cPf2dcpCMxRvyNvI2nTPwPbLTPYXWiCZ93%2Bct4lWkQ6SFS3xQmtw7Vpu4eBpZuNb74qm%2BQrAv37TP3OWZP6h0yUnst5wk3Y69o2BWTNlQ3f5Ab6qhmQcRA51ykrraAfCZm6ELbHuHrHvKHVb0H6%2BYPPxDMWZlJAD%2BViQ%2BI&X-Amz-Signature=4d22662e7be50b4ac87a8dd642f085c0d495b7291ef00d010e9dd6ad59d69e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZXY6OG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8O7SYRvdiqu8WRkHYYjGjlfziTdKYNsHnQlY92irP0AiBsuStWLM3M7aGFWc8iYcA1aWownHVm04F8Xqf9XNmB0yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMSpLoOdM9nc%2B3sleLKtwDjDUSLvPKDTzCwSnDbfePj2SSzic%2F1n4FQaA4T8likSDDs8mawW81j4ce%2BPsTOeGJfZwAQBOR1ZF1%2BACd4vZJyJQR6iCarMgytfZKtdcQFNcZKohECkml2w%2B37BKn1NYiCW569fuVuk8QI%2BaGQS3pMoNU7Vo7g9WALl7d%2FYDZqsqD7%2FFBy%2FhqfoV955N5MfToctiYRyqW8I9zpTegYIWdkKihH3yk5LWdqZgOAO4xaYW4t9x370aAGdMiIzvPvfL6GaWUeObR%2FGjlxOuMP1a9NyhbH%2B53qHuHMhGuzFaS5M6Enkl0k0%2FWXS8N9uQoYLXq%2Bj6fdDb9S4AXI4XMPCfft369qnr74OaF8i%2BETRpNZk%2Fv3rX7jALKEkChGQdSSh7OHVi97oEJ76g9nh%2BteI8WhEJA3TBh5ex4Gim0n%2B8LnwHuFNwS1dr0TO4Hw6I0j2muAqr4lnMpzafnk7b%2BbfT4SIoCUPb6eAtW0%2FtfgjiB1Sn0FyY3W0qVoeFJed%2FO8U3XlRKlz5lGX%2BMmDQ5gbFXZj63Lz%2B83c1%2BAlCMl3j0VoZNvlDRzGiIW1LC4fVhmUS2ahQU0J7YHcAN9FDf8rTl9PrEuHzei8d9wx%2BNimdLePFQpo6XUU8Yxb4PGJ%2Fcw%2BN%2FxwAY6pgEcqRG7ls1QWQ%2Bf3%2BN%2Fc3P%2BSkHK8cP48yALKLwnholvQGt9y%2B1wzh8g64cPf2dcpCMxRvyNvI2nTPwPbLTPYXWiCZ93%2Bct4lWkQ6SFS3xQmtw7Vpu4eBpZuNb74qm%2BQrAv37TP3OWZP6h0yUnst5wk3Y69o2BWTNlQ3f5Ab6qhmQcRA51ykrraAfCZm6ELbHuHrHvKHVb0H6%2BYPPxDMWZlJAD%2BViQ%2BI&X-Amz-Signature=047fa309802ceb24a6704726898622fec6c065e26cb8ad907a273ca362a32cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZXY6OG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8O7SYRvdiqu8WRkHYYjGjlfziTdKYNsHnQlY92irP0AiBsuStWLM3M7aGFWc8iYcA1aWownHVm04F8Xqf9XNmB0yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMSpLoOdM9nc%2B3sleLKtwDjDUSLvPKDTzCwSnDbfePj2SSzic%2F1n4FQaA4T8likSDDs8mawW81j4ce%2BPsTOeGJfZwAQBOR1ZF1%2BACd4vZJyJQR6iCarMgytfZKtdcQFNcZKohECkml2w%2B37BKn1NYiCW569fuVuk8QI%2BaGQS3pMoNU7Vo7g9WALl7d%2FYDZqsqD7%2FFBy%2FhqfoV955N5MfToctiYRyqW8I9zpTegYIWdkKihH3yk5LWdqZgOAO4xaYW4t9x370aAGdMiIzvPvfL6GaWUeObR%2FGjlxOuMP1a9NyhbH%2B53qHuHMhGuzFaS5M6Enkl0k0%2FWXS8N9uQoYLXq%2Bj6fdDb9S4AXI4XMPCfft369qnr74OaF8i%2BETRpNZk%2Fv3rX7jALKEkChGQdSSh7OHVi97oEJ76g9nh%2BteI8WhEJA3TBh5ex4Gim0n%2B8LnwHuFNwS1dr0TO4Hw6I0j2muAqr4lnMpzafnk7b%2BbfT4SIoCUPb6eAtW0%2FtfgjiB1Sn0FyY3W0qVoeFJed%2FO8U3XlRKlz5lGX%2BMmDQ5gbFXZj63Lz%2B83c1%2BAlCMl3j0VoZNvlDRzGiIW1LC4fVhmUS2ahQU0J7YHcAN9FDf8rTl9PrEuHzei8d9wx%2BNimdLePFQpo6XUU8Yxb4PGJ%2Fcw%2BN%2FxwAY6pgEcqRG7ls1QWQ%2Bf3%2BN%2Fc3P%2BSkHK8cP48yALKLwnholvQGt9y%2B1wzh8g64cPf2dcpCMxRvyNvI2nTPwPbLTPYXWiCZ93%2Bct4lWkQ6SFS3xQmtw7Vpu4eBpZuNb74qm%2BQrAv37TP3OWZP6h0yUnst5wk3Y69o2BWTNlQ3f5Ab6qhmQcRA51ykrraAfCZm6ELbHuHrHvKHVb0H6%2BYPPxDMWZlJAD%2BViQ%2BI&X-Amz-Signature=e0febe9c2a3b99ee515c02d98c265b297909036609916c47a00bf543f541dee0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FZXY6OG%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8O7SYRvdiqu8WRkHYYjGjlfziTdKYNsHnQlY92irP0AiBsuStWLM3M7aGFWc8iYcA1aWownHVm04F8Xqf9XNmB0yr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMSpLoOdM9nc%2B3sleLKtwDjDUSLvPKDTzCwSnDbfePj2SSzic%2F1n4FQaA4T8likSDDs8mawW81j4ce%2BPsTOeGJfZwAQBOR1ZF1%2BACd4vZJyJQR6iCarMgytfZKtdcQFNcZKohECkml2w%2B37BKn1NYiCW569fuVuk8QI%2BaGQS3pMoNU7Vo7g9WALl7d%2FYDZqsqD7%2FFBy%2FhqfoV955N5MfToctiYRyqW8I9zpTegYIWdkKihH3yk5LWdqZgOAO4xaYW4t9x370aAGdMiIzvPvfL6GaWUeObR%2FGjlxOuMP1a9NyhbH%2B53qHuHMhGuzFaS5M6Enkl0k0%2FWXS8N9uQoYLXq%2Bj6fdDb9S4AXI4XMPCfft369qnr74OaF8i%2BETRpNZk%2Fv3rX7jALKEkChGQdSSh7OHVi97oEJ76g9nh%2BteI8WhEJA3TBh5ex4Gim0n%2B8LnwHuFNwS1dr0TO4Hw6I0j2muAqr4lnMpzafnk7b%2BbfT4SIoCUPb6eAtW0%2FtfgjiB1Sn0FyY3W0qVoeFJed%2FO8U3XlRKlz5lGX%2BMmDQ5gbFXZj63Lz%2B83c1%2BAlCMl3j0VoZNvlDRzGiIW1LC4fVhmUS2ahQU0J7YHcAN9FDf8rTl9PrEuHzei8d9wx%2BNimdLePFQpo6XUU8Yxb4PGJ%2Fcw%2BN%2FxwAY6pgEcqRG7ls1QWQ%2Bf3%2BN%2Fc3P%2BSkHK8cP48yALKLwnholvQGt9y%2B1wzh8g64cPf2dcpCMxRvyNvI2nTPwPbLTPYXWiCZ93%2Bct4lWkQ6SFS3xQmtw7Vpu4eBpZuNb74qm%2BQrAv37TP3OWZP6h0yUnst5wk3Y69o2BWTNlQ3f5Ab6qhmQcRA51ykrraAfCZm6ELbHuHrHvKHVb0H6%2BYPPxDMWZlJAD%2BViQ%2BI&X-Amz-Signature=4b5d7e91a1935fb4b25de7651702329726aceb7a88412b0596993280fdf39dc4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
