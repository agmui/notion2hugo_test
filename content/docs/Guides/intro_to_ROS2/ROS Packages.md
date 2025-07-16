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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666I5YQSA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCo4wWnrK1QT1yyDXhUynawgG3PhmxGMbUyOZwdZe5wmwIhALvy1Snp66E8NvLZJRzFhT3wdHgoiPf34u1tPmlUACg3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxOn7kxYBn4pcTykF0q3ANOz1HbWSabtzJeBTUEBDsXcmKAPjXm8IshnDUKBOD5%2FhW4N%2Fj5M2qA9GE4LFOmVrRkzVh1eUgk9pLb9ttdjYJsctl%2F7L4uyEiT9c6UWITWhM1UlKvjNItD26ZFt2I9WrvjPyK1%2BR%2BHVcjpVjiHf9OtsZCup1lkezLwLiPMpHFA4fW0ghC%2B%2FcRj1s3O%2Fhxak6wNZCNj%2FC%2FS%2F7DxxsKDukeFtbQ3T5DN7HS%2B7uORA0Nd%2BfiGpvh%2FLyOoJXj6IB%2By2L%2BWn3SpXUkUvnHfX%2F6HTfiWt9FTz2bPYf2KwKHIa0JD6Df2N5AvNL6OlKnBudv7Oh4gZR9xgEJNDw1n1Ewd2%2BPqFNEK7MMPZCSdXggoGAAjG4Mjw07QjKS0iDiIRzzBzlhgWD4E5od9dtx6YilZWQxZ74Y2tkgBWXwVo8v4Idp%2FfHBeHjivPfv1Esk0mBwdTOu29RaARdxkwahDpF%2Bm2Zo9vVz2sLbT9MDKU0%2Fuk1RQrK1zkjmw1z4MjN14FSMERY7qkH8JIzq%2F%2B2a3xy1pddzPMq9jSGx575DjRzwLKN8LaEuZkY7w7mrnkn%2FMBikmKFPjM5isQhy%2FD5FO2EO%2FfUc6T0CIWA11kpmew8w0Yil7aX0chVcfdZsvSQ27UzDetd%2FDBjqkAWcgwVSaObeGVJ5fZg8Fk4nzYM%2F%2B6sp1vREh7Dz9yiikLxPKtWWLXI396hZdZNeEkl7zFWGuFiXEddtkGF2zo9pGPb3vMF8yMqnGyrBzRnFCZ8hN7DT8cb9i%2FCLhqSFalaagP4aasIkLnUw6NcD1KJWVROGMF1V3SlN2S%2BKlBjaZkpMwtTtjVNZmO87LfkDVIXj%2FqCQfBgUxwui%2BYbV9HoZYPC6S&X-Amz-Signature=dcf8d49ba90792bd4dd6612913fbb86a5971a64fe90790850ef1a6f86d5174f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666I5YQSA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCo4wWnrK1QT1yyDXhUynawgG3PhmxGMbUyOZwdZe5wmwIhALvy1Snp66E8NvLZJRzFhT3wdHgoiPf34u1tPmlUACg3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxOn7kxYBn4pcTykF0q3ANOz1HbWSabtzJeBTUEBDsXcmKAPjXm8IshnDUKBOD5%2FhW4N%2Fj5M2qA9GE4LFOmVrRkzVh1eUgk9pLb9ttdjYJsctl%2F7L4uyEiT9c6UWITWhM1UlKvjNItD26ZFt2I9WrvjPyK1%2BR%2BHVcjpVjiHf9OtsZCup1lkezLwLiPMpHFA4fW0ghC%2B%2FcRj1s3O%2Fhxak6wNZCNj%2FC%2FS%2F7DxxsKDukeFtbQ3T5DN7HS%2B7uORA0Nd%2BfiGpvh%2FLyOoJXj6IB%2By2L%2BWn3SpXUkUvnHfX%2F6HTfiWt9FTz2bPYf2KwKHIa0JD6Df2N5AvNL6OlKnBudv7Oh4gZR9xgEJNDw1n1Ewd2%2BPqFNEK7MMPZCSdXggoGAAjG4Mjw07QjKS0iDiIRzzBzlhgWD4E5od9dtx6YilZWQxZ74Y2tkgBWXwVo8v4Idp%2FfHBeHjivPfv1Esk0mBwdTOu29RaARdxkwahDpF%2Bm2Zo9vVz2sLbT9MDKU0%2Fuk1RQrK1zkjmw1z4MjN14FSMERY7qkH8JIzq%2F%2B2a3xy1pddzPMq9jSGx575DjRzwLKN8LaEuZkY7w7mrnkn%2FMBikmKFPjM5isQhy%2FD5FO2EO%2FfUc6T0CIWA11kpmew8w0Yil7aX0chVcfdZsvSQ27UzDetd%2FDBjqkAWcgwVSaObeGVJ5fZg8Fk4nzYM%2F%2B6sp1vREh7Dz9yiikLxPKtWWLXI396hZdZNeEkl7zFWGuFiXEddtkGF2zo9pGPb3vMF8yMqnGyrBzRnFCZ8hN7DT8cb9i%2FCLhqSFalaagP4aasIkLnUw6NcD1KJWVROGMF1V3SlN2S%2BKlBjaZkpMwtTtjVNZmO87LfkDVIXj%2FqCQfBgUxwui%2BYbV9HoZYPC6S&X-Amz-Signature=34dd21cf20ba264c69bfcee0481af47988d76ec5bc50468fc4b95c8e9dc46f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666I5YQSA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCo4wWnrK1QT1yyDXhUynawgG3PhmxGMbUyOZwdZe5wmwIhALvy1Snp66E8NvLZJRzFhT3wdHgoiPf34u1tPmlUACg3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxOn7kxYBn4pcTykF0q3ANOz1HbWSabtzJeBTUEBDsXcmKAPjXm8IshnDUKBOD5%2FhW4N%2Fj5M2qA9GE4LFOmVrRkzVh1eUgk9pLb9ttdjYJsctl%2F7L4uyEiT9c6UWITWhM1UlKvjNItD26ZFt2I9WrvjPyK1%2BR%2BHVcjpVjiHf9OtsZCup1lkezLwLiPMpHFA4fW0ghC%2B%2FcRj1s3O%2Fhxak6wNZCNj%2FC%2FS%2F7DxxsKDukeFtbQ3T5DN7HS%2B7uORA0Nd%2BfiGpvh%2FLyOoJXj6IB%2By2L%2BWn3SpXUkUvnHfX%2F6HTfiWt9FTz2bPYf2KwKHIa0JD6Df2N5AvNL6OlKnBudv7Oh4gZR9xgEJNDw1n1Ewd2%2BPqFNEK7MMPZCSdXggoGAAjG4Mjw07QjKS0iDiIRzzBzlhgWD4E5od9dtx6YilZWQxZ74Y2tkgBWXwVo8v4Idp%2FfHBeHjivPfv1Esk0mBwdTOu29RaARdxkwahDpF%2Bm2Zo9vVz2sLbT9MDKU0%2Fuk1RQrK1zkjmw1z4MjN14FSMERY7qkH8JIzq%2F%2B2a3xy1pddzPMq9jSGx575DjRzwLKN8LaEuZkY7w7mrnkn%2FMBikmKFPjM5isQhy%2FD5FO2EO%2FfUc6T0CIWA11kpmew8w0Yil7aX0chVcfdZsvSQ27UzDetd%2FDBjqkAWcgwVSaObeGVJ5fZg8Fk4nzYM%2F%2B6sp1vREh7Dz9yiikLxPKtWWLXI396hZdZNeEkl7zFWGuFiXEddtkGF2zo9pGPb3vMF8yMqnGyrBzRnFCZ8hN7DT8cb9i%2FCLhqSFalaagP4aasIkLnUw6NcD1KJWVROGMF1V3SlN2S%2BKlBjaZkpMwtTtjVNZmO87LfkDVIXj%2FqCQfBgUxwui%2BYbV9HoZYPC6S&X-Amz-Signature=4c6fb29913d5d2ef8e2373324c5ab2d2ddf7c6a136895bf1ded67a82d3531872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666I5YQSA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCo4wWnrK1QT1yyDXhUynawgG3PhmxGMbUyOZwdZe5wmwIhALvy1Snp66E8NvLZJRzFhT3wdHgoiPf34u1tPmlUACg3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxOn7kxYBn4pcTykF0q3ANOz1HbWSabtzJeBTUEBDsXcmKAPjXm8IshnDUKBOD5%2FhW4N%2Fj5M2qA9GE4LFOmVrRkzVh1eUgk9pLb9ttdjYJsctl%2F7L4uyEiT9c6UWITWhM1UlKvjNItD26ZFt2I9WrvjPyK1%2BR%2BHVcjpVjiHf9OtsZCup1lkezLwLiPMpHFA4fW0ghC%2B%2FcRj1s3O%2Fhxak6wNZCNj%2FC%2FS%2F7DxxsKDukeFtbQ3T5DN7HS%2B7uORA0Nd%2BfiGpvh%2FLyOoJXj6IB%2By2L%2BWn3SpXUkUvnHfX%2F6HTfiWt9FTz2bPYf2KwKHIa0JD6Df2N5AvNL6OlKnBudv7Oh4gZR9xgEJNDw1n1Ewd2%2BPqFNEK7MMPZCSdXggoGAAjG4Mjw07QjKS0iDiIRzzBzlhgWD4E5od9dtx6YilZWQxZ74Y2tkgBWXwVo8v4Idp%2FfHBeHjivPfv1Esk0mBwdTOu29RaARdxkwahDpF%2Bm2Zo9vVz2sLbT9MDKU0%2Fuk1RQrK1zkjmw1z4MjN14FSMERY7qkH8JIzq%2F%2B2a3xy1pddzPMq9jSGx575DjRzwLKN8LaEuZkY7w7mrnkn%2FMBikmKFPjM5isQhy%2FD5FO2EO%2FfUc6T0CIWA11kpmew8w0Yil7aX0chVcfdZsvSQ27UzDetd%2FDBjqkAWcgwVSaObeGVJ5fZg8Fk4nzYM%2F%2B6sp1vREh7Dz9yiikLxPKtWWLXI396hZdZNeEkl7zFWGuFiXEddtkGF2zo9pGPb3vMF8yMqnGyrBzRnFCZ8hN7DT8cb9i%2FCLhqSFalaagP4aasIkLnUw6NcD1KJWVROGMF1V3SlN2S%2BKlBjaZkpMwtTtjVNZmO87LfkDVIXj%2FqCQfBgUxwui%2BYbV9HoZYPC6S&X-Amz-Signature=1e1ba63a8d428ad07d821eacba8f6978f3f54c2255609185399a7c1451bce400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666I5YQSA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCo4wWnrK1QT1yyDXhUynawgG3PhmxGMbUyOZwdZe5wmwIhALvy1Snp66E8NvLZJRzFhT3wdHgoiPf34u1tPmlUACg3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxOn7kxYBn4pcTykF0q3ANOz1HbWSabtzJeBTUEBDsXcmKAPjXm8IshnDUKBOD5%2FhW4N%2Fj5M2qA9GE4LFOmVrRkzVh1eUgk9pLb9ttdjYJsctl%2F7L4uyEiT9c6UWITWhM1UlKvjNItD26ZFt2I9WrvjPyK1%2BR%2BHVcjpVjiHf9OtsZCup1lkezLwLiPMpHFA4fW0ghC%2B%2FcRj1s3O%2Fhxak6wNZCNj%2FC%2FS%2F7DxxsKDukeFtbQ3T5DN7HS%2B7uORA0Nd%2BfiGpvh%2FLyOoJXj6IB%2By2L%2BWn3SpXUkUvnHfX%2F6HTfiWt9FTz2bPYf2KwKHIa0JD6Df2N5AvNL6OlKnBudv7Oh4gZR9xgEJNDw1n1Ewd2%2BPqFNEK7MMPZCSdXggoGAAjG4Mjw07QjKS0iDiIRzzBzlhgWD4E5od9dtx6YilZWQxZ74Y2tkgBWXwVo8v4Idp%2FfHBeHjivPfv1Esk0mBwdTOu29RaARdxkwahDpF%2Bm2Zo9vVz2sLbT9MDKU0%2Fuk1RQrK1zkjmw1z4MjN14FSMERY7qkH8JIzq%2F%2B2a3xy1pddzPMq9jSGx575DjRzwLKN8LaEuZkY7w7mrnkn%2FMBikmKFPjM5isQhy%2FD5FO2EO%2FfUc6T0CIWA11kpmew8w0Yil7aX0chVcfdZsvSQ27UzDetd%2FDBjqkAWcgwVSaObeGVJ5fZg8Fk4nzYM%2F%2B6sp1vREh7Dz9yiikLxPKtWWLXI396hZdZNeEkl7zFWGuFiXEddtkGF2zo9pGPb3vMF8yMqnGyrBzRnFCZ8hN7DT8cb9i%2FCLhqSFalaagP4aasIkLnUw6NcD1KJWVROGMF1V3SlN2S%2BKlBjaZkpMwtTtjVNZmO87LfkDVIXj%2FqCQfBgUxwui%2BYbV9HoZYPC6S&X-Amz-Signature=b3771a40954b01543db4edd3b6893c985f8dce9c96db97e6d5cfbd40e8658883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666I5YQSA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCo4wWnrK1QT1yyDXhUynawgG3PhmxGMbUyOZwdZe5wmwIhALvy1Snp66E8NvLZJRzFhT3wdHgoiPf34u1tPmlUACg3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxOn7kxYBn4pcTykF0q3ANOz1HbWSabtzJeBTUEBDsXcmKAPjXm8IshnDUKBOD5%2FhW4N%2Fj5M2qA9GE4LFOmVrRkzVh1eUgk9pLb9ttdjYJsctl%2F7L4uyEiT9c6UWITWhM1UlKvjNItD26ZFt2I9WrvjPyK1%2BR%2BHVcjpVjiHf9OtsZCup1lkezLwLiPMpHFA4fW0ghC%2B%2FcRj1s3O%2Fhxak6wNZCNj%2FC%2FS%2F7DxxsKDukeFtbQ3T5DN7HS%2B7uORA0Nd%2BfiGpvh%2FLyOoJXj6IB%2By2L%2BWn3SpXUkUvnHfX%2F6HTfiWt9FTz2bPYf2KwKHIa0JD6Df2N5AvNL6OlKnBudv7Oh4gZR9xgEJNDw1n1Ewd2%2BPqFNEK7MMPZCSdXggoGAAjG4Mjw07QjKS0iDiIRzzBzlhgWD4E5od9dtx6YilZWQxZ74Y2tkgBWXwVo8v4Idp%2FfHBeHjivPfv1Esk0mBwdTOu29RaARdxkwahDpF%2Bm2Zo9vVz2sLbT9MDKU0%2Fuk1RQrK1zkjmw1z4MjN14FSMERY7qkH8JIzq%2F%2B2a3xy1pddzPMq9jSGx575DjRzwLKN8LaEuZkY7w7mrnkn%2FMBikmKFPjM5isQhy%2FD5FO2EO%2FfUc6T0CIWA11kpmew8w0Yil7aX0chVcfdZsvSQ27UzDetd%2FDBjqkAWcgwVSaObeGVJ5fZg8Fk4nzYM%2F%2B6sp1vREh7Dz9yiikLxPKtWWLXI396hZdZNeEkl7zFWGuFiXEddtkGF2zo9pGPb3vMF8yMqnGyrBzRnFCZ8hN7DT8cb9i%2FCLhqSFalaagP4aasIkLnUw6NcD1KJWVROGMF1V3SlN2S%2BKlBjaZkpMwtTtjVNZmO87LfkDVIXj%2FqCQfBgUxwui%2BYbV9HoZYPC6S&X-Amz-Signature=86d878af3e5b28a9befc7bcf593d8357bd975caf53e1fc44846ea5d1c1c7f7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666I5YQSA%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCo4wWnrK1QT1yyDXhUynawgG3PhmxGMbUyOZwdZe5wmwIhALvy1Snp66E8NvLZJRzFhT3wdHgoiPf34u1tPmlUACg3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgxOn7kxYBn4pcTykF0q3ANOz1HbWSabtzJeBTUEBDsXcmKAPjXm8IshnDUKBOD5%2FhW4N%2Fj5M2qA9GE4LFOmVrRkzVh1eUgk9pLb9ttdjYJsctl%2F7L4uyEiT9c6UWITWhM1UlKvjNItD26ZFt2I9WrvjPyK1%2BR%2BHVcjpVjiHf9OtsZCup1lkezLwLiPMpHFA4fW0ghC%2B%2FcRj1s3O%2Fhxak6wNZCNj%2FC%2FS%2F7DxxsKDukeFtbQ3T5DN7HS%2B7uORA0Nd%2BfiGpvh%2FLyOoJXj6IB%2By2L%2BWn3SpXUkUvnHfX%2F6HTfiWt9FTz2bPYf2KwKHIa0JD6Df2N5AvNL6OlKnBudv7Oh4gZR9xgEJNDw1n1Ewd2%2BPqFNEK7MMPZCSdXggoGAAjG4Mjw07QjKS0iDiIRzzBzlhgWD4E5od9dtx6YilZWQxZ74Y2tkgBWXwVo8v4Idp%2FfHBeHjivPfv1Esk0mBwdTOu29RaARdxkwahDpF%2Bm2Zo9vVz2sLbT9MDKU0%2Fuk1RQrK1zkjmw1z4MjN14FSMERY7qkH8JIzq%2F%2B2a3xy1pddzPMq9jSGx575DjRzwLKN8LaEuZkY7w7mrnkn%2FMBikmKFPjM5isQhy%2FD5FO2EO%2FfUc6T0CIWA11kpmew8w0Yil7aX0chVcfdZsvSQ27UzDetd%2FDBjqkAWcgwVSaObeGVJ5fZg8Fk4nzYM%2F%2B6sp1vREh7Dz9yiikLxPKtWWLXI396hZdZNeEkl7zFWGuFiXEddtkGF2zo9pGPb3vMF8yMqnGyrBzRnFCZ8hN7DT8cb9i%2FCLhqSFalaagP4aasIkLnUw6NcD1KJWVROGMF1V3SlN2S%2BKlBjaZkpMwtTtjVNZmO87LfkDVIXj%2FqCQfBgUxwui%2BYbV9HoZYPC6S&X-Amz-Signature=9f6fbb443c884bc3efdd00bc528970d2e4ac97afce32f89ed3266227ebcdc140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
