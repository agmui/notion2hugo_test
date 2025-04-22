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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYN6YZW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCmbLEuJntBZvF7mP6nURJMDG4JItw3UCx5ufKMcg%2BofgIgS%2B0U5me%2BLsfLPtGxZRQ6AklaikO48TFDFtmjSn52EdMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJAACCag3%2BT8EixrCrcA%2BEL6ZMNxjPnpf1D%2BsryLJEcPA6Lk7KVQVvabC0tulP2aGgsHfD72e%2BaZ1sup4QHxS6%2FzRLAmKpEd8fbImwMn3bzM%2BaKhdR1OOIeAa%2FbiWqG7Gp61o1M%2F%2BgYz7iet4zkcrT0EhFI7xUrGzbGIXTe2IdzmWvLCJDfUQ3AaghEEghwoyyJocEGjIExH7e3vsNsIbLjwXx9e0hb0qFvxoObNwFuvKCkzoG7U8fRtOfqcuV9oJLRGxY02EceXgBVqY5uxUx6tyhrbpbk7NdBtnCxulEzQCHAxrAsdsSn3Iv4%2FIHZNWPmgB3vItfnx7RZAqtF8APT3%2FfV7ErVi6AlYsmIQAzcBRdwdyqwb97AGdDo%2FjaOwQzCwYjvA1%2FDVMANjx9YXc4o7Wkkzogbi%2F7AZsfF6SYHktayL8KxWoSxu71hdUjlcH5KlQM9JmnO1dllIzNQ7i%2Fat1FxrGFmWv35nDJE0Xpk6tXfdmj0o4xOd7hu3c7nMwn94u8Hffo1%2BiPIWmiTGoPLlOFEzYT26yuuT3c6AgDoZ2FJJiLgqERwHLBnNh2ekmanzbKQ2H6lKHnN302uBwoYX6bY8JOmRnckdm0lzJL5Z5fZcTLb%2B%2BnwJH2y9dF8Qq3YAPC1FBn1utFlMJ2LncAGOqUBYWLbAKhN7Fwd1zjOU1UD9vgrHu0VndCtn7gPpsaKpHjW7nOFNYvln0D%2BJRCCpyeT%2FPinO2ib7w%2BIPexd3oqUxVqH%2BDPrQAXJzNdW61xFT%2Bm2CjniOwXyhOOXHsKw1cmfeYmbEeFsZ0dBHz0n%2F83R3PDCiNk4iWnlzp5omKqZ6dZKCytTABkoty3C0p21WR01J%2Fw8WCXSoUDOdI2imxlNqwuGYknx&X-Amz-Signature=4972ffd349f33352a2cc41c5862da75db6f57452ee9ab81e49a3c182d42f625c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYN6YZW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCmbLEuJntBZvF7mP6nURJMDG4JItw3UCx5ufKMcg%2BofgIgS%2B0U5me%2BLsfLPtGxZRQ6AklaikO48TFDFtmjSn52EdMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJAACCag3%2BT8EixrCrcA%2BEL6ZMNxjPnpf1D%2BsryLJEcPA6Lk7KVQVvabC0tulP2aGgsHfD72e%2BaZ1sup4QHxS6%2FzRLAmKpEd8fbImwMn3bzM%2BaKhdR1OOIeAa%2FbiWqG7Gp61o1M%2F%2BgYz7iet4zkcrT0EhFI7xUrGzbGIXTe2IdzmWvLCJDfUQ3AaghEEghwoyyJocEGjIExH7e3vsNsIbLjwXx9e0hb0qFvxoObNwFuvKCkzoG7U8fRtOfqcuV9oJLRGxY02EceXgBVqY5uxUx6tyhrbpbk7NdBtnCxulEzQCHAxrAsdsSn3Iv4%2FIHZNWPmgB3vItfnx7RZAqtF8APT3%2FfV7ErVi6AlYsmIQAzcBRdwdyqwb97AGdDo%2FjaOwQzCwYjvA1%2FDVMANjx9YXc4o7Wkkzogbi%2F7AZsfF6SYHktayL8KxWoSxu71hdUjlcH5KlQM9JmnO1dllIzNQ7i%2Fat1FxrGFmWv35nDJE0Xpk6tXfdmj0o4xOd7hu3c7nMwn94u8Hffo1%2BiPIWmiTGoPLlOFEzYT26yuuT3c6AgDoZ2FJJiLgqERwHLBnNh2ekmanzbKQ2H6lKHnN302uBwoYX6bY8JOmRnckdm0lzJL5Z5fZcTLb%2B%2BnwJH2y9dF8Qq3YAPC1FBn1utFlMJ2LncAGOqUBYWLbAKhN7Fwd1zjOU1UD9vgrHu0VndCtn7gPpsaKpHjW7nOFNYvln0D%2BJRCCpyeT%2FPinO2ib7w%2BIPexd3oqUxVqH%2BDPrQAXJzNdW61xFT%2Bm2CjniOwXyhOOXHsKw1cmfeYmbEeFsZ0dBHz0n%2F83R3PDCiNk4iWnlzp5omKqZ6dZKCytTABkoty3C0p21WR01J%2Fw8WCXSoUDOdI2imxlNqwuGYknx&X-Amz-Signature=c536b086df73b808e48be6c56dabb01e58e95bb94a87b31957c14e0cad379bea&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYN6YZW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCmbLEuJntBZvF7mP6nURJMDG4JItw3UCx5ufKMcg%2BofgIgS%2B0U5me%2BLsfLPtGxZRQ6AklaikO48TFDFtmjSn52EdMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJAACCag3%2BT8EixrCrcA%2BEL6ZMNxjPnpf1D%2BsryLJEcPA6Lk7KVQVvabC0tulP2aGgsHfD72e%2BaZ1sup4QHxS6%2FzRLAmKpEd8fbImwMn3bzM%2BaKhdR1OOIeAa%2FbiWqG7Gp61o1M%2F%2BgYz7iet4zkcrT0EhFI7xUrGzbGIXTe2IdzmWvLCJDfUQ3AaghEEghwoyyJocEGjIExH7e3vsNsIbLjwXx9e0hb0qFvxoObNwFuvKCkzoG7U8fRtOfqcuV9oJLRGxY02EceXgBVqY5uxUx6tyhrbpbk7NdBtnCxulEzQCHAxrAsdsSn3Iv4%2FIHZNWPmgB3vItfnx7RZAqtF8APT3%2FfV7ErVi6AlYsmIQAzcBRdwdyqwb97AGdDo%2FjaOwQzCwYjvA1%2FDVMANjx9YXc4o7Wkkzogbi%2F7AZsfF6SYHktayL8KxWoSxu71hdUjlcH5KlQM9JmnO1dllIzNQ7i%2Fat1FxrGFmWv35nDJE0Xpk6tXfdmj0o4xOd7hu3c7nMwn94u8Hffo1%2BiPIWmiTGoPLlOFEzYT26yuuT3c6AgDoZ2FJJiLgqERwHLBnNh2ekmanzbKQ2H6lKHnN302uBwoYX6bY8JOmRnckdm0lzJL5Z5fZcTLb%2B%2BnwJH2y9dF8Qq3YAPC1FBn1utFlMJ2LncAGOqUBYWLbAKhN7Fwd1zjOU1UD9vgrHu0VndCtn7gPpsaKpHjW7nOFNYvln0D%2BJRCCpyeT%2FPinO2ib7w%2BIPexd3oqUxVqH%2BDPrQAXJzNdW61xFT%2Bm2CjniOwXyhOOXHsKw1cmfeYmbEeFsZ0dBHz0n%2F83R3PDCiNk4iWnlzp5omKqZ6dZKCytTABkoty3C0p21WR01J%2Fw8WCXSoUDOdI2imxlNqwuGYknx&X-Amz-Signature=687a09bbae92bef377a455c5108661d8ba835dfa8a7c8b4ce9a206f9a6ab6492&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYN6YZW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCmbLEuJntBZvF7mP6nURJMDG4JItw3UCx5ufKMcg%2BofgIgS%2B0U5me%2BLsfLPtGxZRQ6AklaikO48TFDFtmjSn52EdMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJAACCag3%2BT8EixrCrcA%2BEL6ZMNxjPnpf1D%2BsryLJEcPA6Lk7KVQVvabC0tulP2aGgsHfD72e%2BaZ1sup4QHxS6%2FzRLAmKpEd8fbImwMn3bzM%2BaKhdR1OOIeAa%2FbiWqG7Gp61o1M%2F%2BgYz7iet4zkcrT0EhFI7xUrGzbGIXTe2IdzmWvLCJDfUQ3AaghEEghwoyyJocEGjIExH7e3vsNsIbLjwXx9e0hb0qFvxoObNwFuvKCkzoG7U8fRtOfqcuV9oJLRGxY02EceXgBVqY5uxUx6tyhrbpbk7NdBtnCxulEzQCHAxrAsdsSn3Iv4%2FIHZNWPmgB3vItfnx7RZAqtF8APT3%2FfV7ErVi6AlYsmIQAzcBRdwdyqwb97AGdDo%2FjaOwQzCwYjvA1%2FDVMANjx9YXc4o7Wkkzogbi%2F7AZsfF6SYHktayL8KxWoSxu71hdUjlcH5KlQM9JmnO1dllIzNQ7i%2Fat1FxrGFmWv35nDJE0Xpk6tXfdmj0o4xOd7hu3c7nMwn94u8Hffo1%2BiPIWmiTGoPLlOFEzYT26yuuT3c6AgDoZ2FJJiLgqERwHLBnNh2ekmanzbKQ2H6lKHnN302uBwoYX6bY8JOmRnckdm0lzJL5Z5fZcTLb%2B%2BnwJH2y9dF8Qq3YAPC1FBn1utFlMJ2LncAGOqUBYWLbAKhN7Fwd1zjOU1UD9vgrHu0VndCtn7gPpsaKpHjW7nOFNYvln0D%2BJRCCpyeT%2FPinO2ib7w%2BIPexd3oqUxVqH%2BDPrQAXJzNdW61xFT%2Bm2CjniOwXyhOOXHsKw1cmfeYmbEeFsZ0dBHz0n%2F83R3PDCiNk4iWnlzp5omKqZ6dZKCytTABkoty3C0p21WR01J%2Fw8WCXSoUDOdI2imxlNqwuGYknx&X-Amz-Signature=2e5da573177cf74c782f3181a98dcfee38c87628e7f3d0f0c55324701e15af2a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYN6YZW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCmbLEuJntBZvF7mP6nURJMDG4JItw3UCx5ufKMcg%2BofgIgS%2B0U5me%2BLsfLPtGxZRQ6AklaikO48TFDFtmjSn52EdMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJAACCag3%2BT8EixrCrcA%2BEL6ZMNxjPnpf1D%2BsryLJEcPA6Lk7KVQVvabC0tulP2aGgsHfD72e%2BaZ1sup4QHxS6%2FzRLAmKpEd8fbImwMn3bzM%2BaKhdR1OOIeAa%2FbiWqG7Gp61o1M%2F%2BgYz7iet4zkcrT0EhFI7xUrGzbGIXTe2IdzmWvLCJDfUQ3AaghEEghwoyyJocEGjIExH7e3vsNsIbLjwXx9e0hb0qFvxoObNwFuvKCkzoG7U8fRtOfqcuV9oJLRGxY02EceXgBVqY5uxUx6tyhrbpbk7NdBtnCxulEzQCHAxrAsdsSn3Iv4%2FIHZNWPmgB3vItfnx7RZAqtF8APT3%2FfV7ErVi6AlYsmIQAzcBRdwdyqwb97AGdDo%2FjaOwQzCwYjvA1%2FDVMANjx9YXc4o7Wkkzogbi%2F7AZsfF6SYHktayL8KxWoSxu71hdUjlcH5KlQM9JmnO1dllIzNQ7i%2Fat1FxrGFmWv35nDJE0Xpk6tXfdmj0o4xOd7hu3c7nMwn94u8Hffo1%2BiPIWmiTGoPLlOFEzYT26yuuT3c6AgDoZ2FJJiLgqERwHLBnNh2ekmanzbKQ2H6lKHnN302uBwoYX6bY8JOmRnckdm0lzJL5Z5fZcTLb%2B%2BnwJH2y9dF8Qq3YAPC1FBn1utFlMJ2LncAGOqUBYWLbAKhN7Fwd1zjOU1UD9vgrHu0VndCtn7gPpsaKpHjW7nOFNYvln0D%2BJRCCpyeT%2FPinO2ib7w%2BIPexd3oqUxVqH%2BDPrQAXJzNdW61xFT%2Bm2CjniOwXyhOOXHsKw1cmfeYmbEeFsZ0dBHz0n%2F83R3PDCiNk4iWnlzp5omKqZ6dZKCytTABkoty3C0p21WR01J%2Fw8WCXSoUDOdI2imxlNqwuGYknx&X-Amz-Signature=f2ce1c750374af8ddaaa2f02545ad62981d585e1ea808740a6ddd73bf0d5f1b0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYN6YZW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCmbLEuJntBZvF7mP6nURJMDG4JItw3UCx5ufKMcg%2BofgIgS%2B0U5me%2BLsfLPtGxZRQ6AklaikO48TFDFtmjSn52EdMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJAACCag3%2BT8EixrCrcA%2BEL6ZMNxjPnpf1D%2BsryLJEcPA6Lk7KVQVvabC0tulP2aGgsHfD72e%2BaZ1sup4QHxS6%2FzRLAmKpEd8fbImwMn3bzM%2BaKhdR1OOIeAa%2FbiWqG7Gp61o1M%2F%2BgYz7iet4zkcrT0EhFI7xUrGzbGIXTe2IdzmWvLCJDfUQ3AaghEEghwoyyJocEGjIExH7e3vsNsIbLjwXx9e0hb0qFvxoObNwFuvKCkzoG7U8fRtOfqcuV9oJLRGxY02EceXgBVqY5uxUx6tyhrbpbk7NdBtnCxulEzQCHAxrAsdsSn3Iv4%2FIHZNWPmgB3vItfnx7RZAqtF8APT3%2FfV7ErVi6AlYsmIQAzcBRdwdyqwb97AGdDo%2FjaOwQzCwYjvA1%2FDVMANjx9YXc4o7Wkkzogbi%2F7AZsfF6SYHktayL8KxWoSxu71hdUjlcH5KlQM9JmnO1dllIzNQ7i%2Fat1FxrGFmWv35nDJE0Xpk6tXfdmj0o4xOd7hu3c7nMwn94u8Hffo1%2BiPIWmiTGoPLlOFEzYT26yuuT3c6AgDoZ2FJJiLgqERwHLBnNh2ekmanzbKQ2H6lKHnN302uBwoYX6bY8JOmRnckdm0lzJL5Z5fZcTLb%2B%2BnwJH2y9dF8Qq3YAPC1FBn1utFlMJ2LncAGOqUBYWLbAKhN7Fwd1zjOU1UD9vgrHu0VndCtn7gPpsaKpHjW7nOFNYvln0D%2BJRCCpyeT%2FPinO2ib7w%2BIPexd3oqUxVqH%2BDPrQAXJzNdW61xFT%2Bm2CjniOwXyhOOXHsKw1cmfeYmbEeFsZ0dBHz0n%2F83R3PDCiNk4iWnlzp5omKqZ6dZKCytTABkoty3C0p21WR01J%2Fw8WCXSoUDOdI2imxlNqwuGYknx&X-Amz-Signature=3ed582ad56c79ed016f3fb634b851f070e0f5c062d21da4a4c26ae34cdb2156d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZYN6YZW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T090921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCmbLEuJntBZvF7mP6nURJMDG4JItw3UCx5ufKMcg%2BofgIgS%2B0U5me%2BLsfLPtGxZRQ6AklaikO48TFDFtmjSn52EdMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJAACCag3%2BT8EixrCrcA%2BEL6ZMNxjPnpf1D%2BsryLJEcPA6Lk7KVQVvabC0tulP2aGgsHfD72e%2BaZ1sup4QHxS6%2FzRLAmKpEd8fbImwMn3bzM%2BaKhdR1OOIeAa%2FbiWqG7Gp61o1M%2F%2BgYz7iet4zkcrT0EhFI7xUrGzbGIXTe2IdzmWvLCJDfUQ3AaghEEghwoyyJocEGjIExH7e3vsNsIbLjwXx9e0hb0qFvxoObNwFuvKCkzoG7U8fRtOfqcuV9oJLRGxY02EceXgBVqY5uxUx6tyhrbpbk7NdBtnCxulEzQCHAxrAsdsSn3Iv4%2FIHZNWPmgB3vItfnx7RZAqtF8APT3%2FfV7ErVi6AlYsmIQAzcBRdwdyqwb97AGdDo%2FjaOwQzCwYjvA1%2FDVMANjx9YXc4o7Wkkzogbi%2F7AZsfF6SYHktayL8KxWoSxu71hdUjlcH5KlQM9JmnO1dllIzNQ7i%2Fat1FxrGFmWv35nDJE0Xpk6tXfdmj0o4xOd7hu3c7nMwn94u8Hffo1%2BiPIWmiTGoPLlOFEzYT26yuuT3c6AgDoZ2FJJiLgqERwHLBnNh2ekmanzbKQ2H6lKHnN302uBwoYX6bY8JOmRnckdm0lzJL5Z5fZcTLb%2B%2BnwJH2y9dF8Qq3YAPC1FBn1utFlMJ2LncAGOqUBYWLbAKhN7Fwd1zjOU1UD9vgrHu0VndCtn7gPpsaKpHjW7nOFNYvln0D%2BJRCCpyeT%2FPinO2ib7w%2BIPexd3oqUxVqH%2BDPrQAXJzNdW61xFT%2Bm2CjniOwXyhOOXHsKw1cmfeYmbEeFsZ0dBHz0n%2F83R3PDCiNk4iWnlzp5omKqZ6dZKCytTABkoty3C0p21WR01J%2Fw8WCXSoUDOdI2imxlNqwuGYknx&X-Amz-Signature=9e3ffedbf83d41bb32c164868dce81a16e634c7fc8a91bc4969116e90623974b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
