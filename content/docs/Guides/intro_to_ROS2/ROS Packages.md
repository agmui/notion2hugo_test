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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIZNEXQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFN%2B%2Ba2unQZuvkHltsxRrhtWZnsPZLU0MkOfLmCBV6sAiBEL0cDMftb6gL1znxZRMAnszMo%2BSqk1uiqIFT6YCIm9Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM07TW0lnJBWOmwK0nKtwDbjupDJKgPn5MK4kbJy6owQGP%2FMHzqJ676cf7Pcuhz0QE7sdXgguWe6bfzx1q78%2F79GdaEKKFfesFGrhZO5HZSx8A5TIMcxWNifDY8B7ltfSEtE5gnupo5C6n417tpjSu%2FqfR4gb%2BVDXANK0aXnTDmT6dXwmkg1YYEOTs9n6uYYoaKhkzfLlrWq1DxkA8FrA2%2B7mB96lwJSCDQ6cArEc%2BVhDbCm2Ngi3C2VMoLaua80PTcD5OkQnHuYemxDd1V%2FOuySmKRtsnphmgZ4rrdPSWVVSwsg1flbeKspPa%2BdQU%2B%2F9YeW0JxY%2BfGvpOgPvPoQo%2Bg2QkEHLP3dApe%2F1v%2Bk5RWKEmFhE7nJUDHUwSuRhyv0WiIQ7M19HEHLNhBzts71Qo1iRiO6hoLCEgI4kJ1uJYd0UDaIuFR8xK4yotK%2B7isOpg%2F22Lh2a1rtYfYKhtXH19O9YadqJQ5va0rw9rqBCAwwKpUmaXviNL%2BJjW31soC1OUCqSfT219d7tBvFKjmMubesRBtPeVjF4%2Bw03bf7hmCVBICLJW0V9lyVlm9f%2FMdmMEBdNi34J%2Fe0Ffr7y4ayP%2FFBlySmNuizkOkZOplHsyUZvfLexbtxrlID%2Bu2YSKTHHRDiTlQRj%2Faf6Guc8w06%2BYvwY6pgEN5FMtdtQRS32d9%2BIquW1eZii2hICnhReWYM1wCyB%2Bp%2BtvJXoRXxsBSU6wsMbCP1WOZp%2BzVT95YfaIjrNvLn5vXBueAvHDui6rwJO1xrNbvnJdLDpag3IdewadWYYympAGoMZJPKV0fd93aGhPJhg3jdkl1uwvtVhOvAGdzF93mNzawtB%2FZWrUBUzxDwrEDLDuYyfzTwVMTFJR5Gpo4JbaViVWoIBJ&X-Amz-Signature=79013e524b4fb09e04ea4621e165e969538d48599d19b138d8eb6770650c902a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIZNEXQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFN%2B%2Ba2unQZuvkHltsxRrhtWZnsPZLU0MkOfLmCBV6sAiBEL0cDMftb6gL1znxZRMAnszMo%2BSqk1uiqIFT6YCIm9Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM07TW0lnJBWOmwK0nKtwDbjupDJKgPn5MK4kbJy6owQGP%2FMHzqJ676cf7Pcuhz0QE7sdXgguWe6bfzx1q78%2F79GdaEKKFfesFGrhZO5HZSx8A5TIMcxWNifDY8B7ltfSEtE5gnupo5C6n417tpjSu%2FqfR4gb%2BVDXANK0aXnTDmT6dXwmkg1YYEOTs9n6uYYoaKhkzfLlrWq1DxkA8FrA2%2B7mB96lwJSCDQ6cArEc%2BVhDbCm2Ngi3C2VMoLaua80PTcD5OkQnHuYemxDd1V%2FOuySmKRtsnphmgZ4rrdPSWVVSwsg1flbeKspPa%2BdQU%2B%2F9YeW0JxY%2BfGvpOgPvPoQo%2Bg2QkEHLP3dApe%2F1v%2Bk5RWKEmFhE7nJUDHUwSuRhyv0WiIQ7M19HEHLNhBzts71Qo1iRiO6hoLCEgI4kJ1uJYd0UDaIuFR8xK4yotK%2B7isOpg%2F22Lh2a1rtYfYKhtXH19O9YadqJQ5va0rw9rqBCAwwKpUmaXviNL%2BJjW31soC1OUCqSfT219d7tBvFKjmMubesRBtPeVjF4%2Bw03bf7hmCVBICLJW0V9lyVlm9f%2FMdmMEBdNi34J%2Fe0Ffr7y4ayP%2FFBlySmNuizkOkZOplHsyUZvfLexbtxrlID%2Bu2YSKTHHRDiTlQRj%2Faf6Guc8w06%2BYvwY6pgEN5FMtdtQRS32d9%2BIquW1eZii2hICnhReWYM1wCyB%2Bp%2BtvJXoRXxsBSU6wsMbCP1WOZp%2BzVT95YfaIjrNvLn5vXBueAvHDui6rwJO1xrNbvnJdLDpag3IdewadWYYympAGoMZJPKV0fd93aGhPJhg3jdkl1uwvtVhOvAGdzF93mNzawtB%2FZWrUBUzxDwrEDLDuYyfzTwVMTFJR5Gpo4JbaViVWoIBJ&X-Amz-Signature=82c98160f866064d2a44c4cdf187774a6b9b72a8023ccf2228996f9b5a14411c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIZNEXQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFN%2B%2Ba2unQZuvkHltsxRrhtWZnsPZLU0MkOfLmCBV6sAiBEL0cDMftb6gL1znxZRMAnszMo%2BSqk1uiqIFT6YCIm9Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM07TW0lnJBWOmwK0nKtwDbjupDJKgPn5MK4kbJy6owQGP%2FMHzqJ676cf7Pcuhz0QE7sdXgguWe6bfzx1q78%2F79GdaEKKFfesFGrhZO5HZSx8A5TIMcxWNifDY8B7ltfSEtE5gnupo5C6n417tpjSu%2FqfR4gb%2BVDXANK0aXnTDmT6dXwmkg1YYEOTs9n6uYYoaKhkzfLlrWq1DxkA8FrA2%2B7mB96lwJSCDQ6cArEc%2BVhDbCm2Ngi3C2VMoLaua80PTcD5OkQnHuYemxDd1V%2FOuySmKRtsnphmgZ4rrdPSWVVSwsg1flbeKspPa%2BdQU%2B%2F9YeW0JxY%2BfGvpOgPvPoQo%2Bg2QkEHLP3dApe%2F1v%2Bk5RWKEmFhE7nJUDHUwSuRhyv0WiIQ7M19HEHLNhBzts71Qo1iRiO6hoLCEgI4kJ1uJYd0UDaIuFR8xK4yotK%2B7isOpg%2F22Lh2a1rtYfYKhtXH19O9YadqJQ5va0rw9rqBCAwwKpUmaXviNL%2BJjW31soC1OUCqSfT219d7tBvFKjmMubesRBtPeVjF4%2Bw03bf7hmCVBICLJW0V9lyVlm9f%2FMdmMEBdNi34J%2Fe0Ffr7y4ayP%2FFBlySmNuizkOkZOplHsyUZvfLexbtxrlID%2Bu2YSKTHHRDiTlQRj%2Faf6Guc8w06%2BYvwY6pgEN5FMtdtQRS32d9%2BIquW1eZii2hICnhReWYM1wCyB%2Bp%2BtvJXoRXxsBSU6wsMbCP1WOZp%2BzVT95YfaIjrNvLn5vXBueAvHDui6rwJO1xrNbvnJdLDpag3IdewadWYYympAGoMZJPKV0fd93aGhPJhg3jdkl1uwvtVhOvAGdzF93mNzawtB%2FZWrUBUzxDwrEDLDuYyfzTwVMTFJR5Gpo4JbaViVWoIBJ&X-Amz-Signature=5ef205ea58a6a0aed2d11428a78b04fc3172fa25d42b4d9cefe0b9ac86fb3111&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIZNEXQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFN%2B%2Ba2unQZuvkHltsxRrhtWZnsPZLU0MkOfLmCBV6sAiBEL0cDMftb6gL1znxZRMAnszMo%2BSqk1uiqIFT6YCIm9Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM07TW0lnJBWOmwK0nKtwDbjupDJKgPn5MK4kbJy6owQGP%2FMHzqJ676cf7Pcuhz0QE7sdXgguWe6bfzx1q78%2F79GdaEKKFfesFGrhZO5HZSx8A5TIMcxWNifDY8B7ltfSEtE5gnupo5C6n417tpjSu%2FqfR4gb%2BVDXANK0aXnTDmT6dXwmkg1YYEOTs9n6uYYoaKhkzfLlrWq1DxkA8FrA2%2B7mB96lwJSCDQ6cArEc%2BVhDbCm2Ngi3C2VMoLaua80PTcD5OkQnHuYemxDd1V%2FOuySmKRtsnphmgZ4rrdPSWVVSwsg1flbeKspPa%2BdQU%2B%2F9YeW0JxY%2BfGvpOgPvPoQo%2Bg2QkEHLP3dApe%2F1v%2Bk5RWKEmFhE7nJUDHUwSuRhyv0WiIQ7M19HEHLNhBzts71Qo1iRiO6hoLCEgI4kJ1uJYd0UDaIuFR8xK4yotK%2B7isOpg%2F22Lh2a1rtYfYKhtXH19O9YadqJQ5va0rw9rqBCAwwKpUmaXviNL%2BJjW31soC1OUCqSfT219d7tBvFKjmMubesRBtPeVjF4%2Bw03bf7hmCVBICLJW0V9lyVlm9f%2FMdmMEBdNi34J%2Fe0Ffr7y4ayP%2FFBlySmNuizkOkZOplHsyUZvfLexbtxrlID%2Bu2YSKTHHRDiTlQRj%2Faf6Guc8w06%2BYvwY6pgEN5FMtdtQRS32d9%2BIquW1eZii2hICnhReWYM1wCyB%2Bp%2BtvJXoRXxsBSU6wsMbCP1WOZp%2BzVT95YfaIjrNvLn5vXBueAvHDui6rwJO1xrNbvnJdLDpag3IdewadWYYympAGoMZJPKV0fd93aGhPJhg3jdkl1uwvtVhOvAGdzF93mNzawtB%2FZWrUBUzxDwrEDLDuYyfzTwVMTFJR5Gpo4JbaViVWoIBJ&X-Amz-Signature=b6a42464b788a491813e5cee5e7892a2219ad438474726527f02a0781c216e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIZNEXQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFN%2B%2Ba2unQZuvkHltsxRrhtWZnsPZLU0MkOfLmCBV6sAiBEL0cDMftb6gL1znxZRMAnszMo%2BSqk1uiqIFT6YCIm9Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM07TW0lnJBWOmwK0nKtwDbjupDJKgPn5MK4kbJy6owQGP%2FMHzqJ676cf7Pcuhz0QE7sdXgguWe6bfzx1q78%2F79GdaEKKFfesFGrhZO5HZSx8A5TIMcxWNifDY8B7ltfSEtE5gnupo5C6n417tpjSu%2FqfR4gb%2BVDXANK0aXnTDmT6dXwmkg1YYEOTs9n6uYYoaKhkzfLlrWq1DxkA8FrA2%2B7mB96lwJSCDQ6cArEc%2BVhDbCm2Ngi3C2VMoLaua80PTcD5OkQnHuYemxDd1V%2FOuySmKRtsnphmgZ4rrdPSWVVSwsg1flbeKspPa%2BdQU%2B%2F9YeW0JxY%2BfGvpOgPvPoQo%2Bg2QkEHLP3dApe%2F1v%2Bk5RWKEmFhE7nJUDHUwSuRhyv0WiIQ7M19HEHLNhBzts71Qo1iRiO6hoLCEgI4kJ1uJYd0UDaIuFR8xK4yotK%2B7isOpg%2F22Lh2a1rtYfYKhtXH19O9YadqJQ5va0rw9rqBCAwwKpUmaXviNL%2BJjW31soC1OUCqSfT219d7tBvFKjmMubesRBtPeVjF4%2Bw03bf7hmCVBICLJW0V9lyVlm9f%2FMdmMEBdNi34J%2Fe0Ffr7y4ayP%2FFBlySmNuizkOkZOplHsyUZvfLexbtxrlID%2Bu2YSKTHHRDiTlQRj%2Faf6Guc8w06%2BYvwY6pgEN5FMtdtQRS32d9%2BIquW1eZii2hICnhReWYM1wCyB%2Bp%2BtvJXoRXxsBSU6wsMbCP1WOZp%2BzVT95YfaIjrNvLn5vXBueAvHDui6rwJO1xrNbvnJdLDpag3IdewadWYYympAGoMZJPKV0fd93aGhPJhg3jdkl1uwvtVhOvAGdzF93mNzawtB%2FZWrUBUzxDwrEDLDuYyfzTwVMTFJR5Gpo4JbaViVWoIBJ&X-Amz-Signature=43f64afa11c1fd64098b34d0b395b583bc00f01cea54715cf138a693101a5e59&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIZNEXQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFN%2B%2Ba2unQZuvkHltsxRrhtWZnsPZLU0MkOfLmCBV6sAiBEL0cDMftb6gL1znxZRMAnszMo%2BSqk1uiqIFT6YCIm9Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM07TW0lnJBWOmwK0nKtwDbjupDJKgPn5MK4kbJy6owQGP%2FMHzqJ676cf7Pcuhz0QE7sdXgguWe6bfzx1q78%2F79GdaEKKFfesFGrhZO5HZSx8A5TIMcxWNifDY8B7ltfSEtE5gnupo5C6n417tpjSu%2FqfR4gb%2BVDXANK0aXnTDmT6dXwmkg1YYEOTs9n6uYYoaKhkzfLlrWq1DxkA8FrA2%2B7mB96lwJSCDQ6cArEc%2BVhDbCm2Ngi3C2VMoLaua80PTcD5OkQnHuYemxDd1V%2FOuySmKRtsnphmgZ4rrdPSWVVSwsg1flbeKspPa%2BdQU%2B%2F9YeW0JxY%2BfGvpOgPvPoQo%2Bg2QkEHLP3dApe%2F1v%2Bk5RWKEmFhE7nJUDHUwSuRhyv0WiIQ7M19HEHLNhBzts71Qo1iRiO6hoLCEgI4kJ1uJYd0UDaIuFR8xK4yotK%2B7isOpg%2F22Lh2a1rtYfYKhtXH19O9YadqJQ5va0rw9rqBCAwwKpUmaXviNL%2BJjW31soC1OUCqSfT219d7tBvFKjmMubesRBtPeVjF4%2Bw03bf7hmCVBICLJW0V9lyVlm9f%2FMdmMEBdNi34J%2Fe0Ffr7y4ayP%2FFBlySmNuizkOkZOplHsyUZvfLexbtxrlID%2Bu2YSKTHHRDiTlQRj%2Faf6Guc8w06%2BYvwY6pgEN5FMtdtQRS32d9%2BIquW1eZii2hICnhReWYM1wCyB%2Bp%2BtvJXoRXxsBSU6wsMbCP1WOZp%2BzVT95YfaIjrNvLn5vXBueAvHDui6rwJO1xrNbvnJdLDpag3IdewadWYYympAGoMZJPKV0fd93aGhPJhg3jdkl1uwvtVhOvAGdzF93mNzawtB%2FZWrUBUzxDwrEDLDuYyfzTwVMTFJR5Gpo4JbaViVWoIBJ&X-Amz-Signature=2335676b6ff0156d1c79791f7f13b97002ce29b95637fda01fadd87930467c68&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIZNEXQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFN%2B%2Ba2unQZuvkHltsxRrhtWZnsPZLU0MkOfLmCBV6sAiBEL0cDMftb6gL1znxZRMAnszMo%2BSqk1uiqIFT6YCIm9Sr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM07TW0lnJBWOmwK0nKtwDbjupDJKgPn5MK4kbJy6owQGP%2FMHzqJ676cf7Pcuhz0QE7sdXgguWe6bfzx1q78%2F79GdaEKKFfesFGrhZO5HZSx8A5TIMcxWNifDY8B7ltfSEtE5gnupo5C6n417tpjSu%2FqfR4gb%2BVDXANK0aXnTDmT6dXwmkg1YYEOTs9n6uYYoaKhkzfLlrWq1DxkA8FrA2%2B7mB96lwJSCDQ6cArEc%2BVhDbCm2Ngi3C2VMoLaua80PTcD5OkQnHuYemxDd1V%2FOuySmKRtsnphmgZ4rrdPSWVVSwsg1flbeKspPa%2BdQU%2B%2F9YeW0JxY%2BfGvpOgPvPoQo%2Bg2QkEHLP3dApe%2F1v%2Bk5RWKEmFhE7nJUDHUwSuRhyv0WiIQ7M19HEHLNhBzts71Qo1iRiO6hoLCEgI4kJ1uJYd0UDaIuFR8xK4yotK%2B7isOpg%2F22Lh2a1rtYfYKhtXH19O9YadqJQ5va0rw9rqBCAwwKpUmaXviNL%2BJjW31soC1OUCqSfT219d7tBvFKjmMubesRBtPeVjF4%2Bw03bf7hmCVBICLJW0V9lyVlm9f%2FMdmMEBdNi34J%2Fe0Ffr7y4ayP%2FFBlySmNuizkOkZOplHsyUZvfLexbtxrlID%2Bu2YSKTHHRDiTlQRj%2Faf6Guc8w06%2BYvwY6pgEN5FMtdtQRS32d9%2BIquW1eZii2hICnhReWYM1wCyB%2Bp%2BtvJXoRXxsBSU6wsMbCP1WOZp%2BzVT95YfaIjrNvLn5vXBueAvHDui6rwJO1xrNbvnJdLDpag3IdewadWYYympAGoMZJPKV0fd93aGhPJhg3jdkl1uwvtVhOvAGdzF93mNzawtB%2FZWrUBUzxDwrEDLDuYyfzTwVMTFJR5Gpo4JbaViVWoIBJ&X-Amz-Signature=0deb91f70dd03232ff89ba078a25832a3afca1f2b0b557aff9c0c2fd931ea3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
