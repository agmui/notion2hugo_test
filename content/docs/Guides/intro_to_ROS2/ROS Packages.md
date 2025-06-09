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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26QIAHV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmCVepJQ9LkB1CjAbszAPNmqOD38qdZPl%2B5766sXvgNAiAcgRZkt7hYpc35KqQw7Lwlv41Yj01evV02Ar03k3Mh%2ByqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpAE1UcVbkwhdtK5KtwDb%2BfdkLLJWo6r%2B%2FfTY1%2BZ7el9XIYcqeJo0YzWurWpbhC0ZEmscKV8VWevewSO235ZTqGjxKkwwn%2BaT%2BxwVGzCMURPbXV%2F3C7CqYr5ryx8dkf%2FPxJpjaRfWCNYfNnwORS%2BoG%2B8Af60RidX4gD1QJPoYym2mrHVY36zzFju2eGvaxuNK8xujt7MsLkTbsS3WRuf4M8RCFk3cgSsD0ow2dstvfj%2FnGyj6XKj1UDVu8j7Wm%2BX7JuS3InZg27MZ0NLSwSq0d3uzpgdehAgOyrTPtbmi2R9H0cbUrrfAz6dh5bUeiTCZpvHnj40LZC9uII%2FjtbAshXVBbtX2ZmaGBlZVpBnL%2Fd9onl3aaPerbu8q4LAucOAhMjS2wtHbiv3dHekqtS%2FL%2FNPzniQ8pzSPaP0RZ9J8%2FWTMoh%2FaFMm8TxpLlHjazCaauesiPbo%2BVcVKBQKQ8n6x%2BLRTFGvgBFPJfb7WQJlP5%2BFAtF0SuAIhE4gtO0Sx81wjQuhZTx8nESQoWs14eocs2Wx84yHtMWHT2ZXhX9Q6zl6sNTgdop3N3JYF7NNBV4vzToFY%2F3j6OcVTcZB4ZkIe8mYOlCyqCwQy7xKEaMkWxrZo7iGsdDX2d4RDCpdmZRgVcDs5alVV3X64NcwxPicwgY6pgE7kf31e3Aitg0VVjzn6LSsuuqneOCzUtJcUe%2BY%2B3VxBGe3Q0TOkNBu6I3edfWyw1pyYUzTbRqj0D0VIIq7umKDZ9%2BiHvRDGUhrfUdUhoF9Dobas1j506h85YNF7n%2BRZpUyYeidvQVl5vbxaoXKdtR8B1Ty%2FmoIhtb3NV4bP8aWhck37Fr604OtN%2FFhJE0ksTGi%2B6BsHip6FWdg9b2RueqMuIxJ%2Beg0&X-Amz-Signature=e0a1c4ef6e22ba3f0bb3d6851c37f6523749d21d851e0974935095d24f764198&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26QIAHV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmCVepJQ9LkB1CjAbszAPNmqOD38qdZPl%2B5766sXvgNAiAcgRZkt7hYpc35KqQw7Lwlv41Yj01evV02Ar03k3Mh%2ByqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpAE1UcVbkwhdtK5KtwDb%2BfdkLLJWo6r%2B%2FfTY1%2BZ7el9XIYcqeJo0YzWurWpbhC0ZEmscKV8VWevewSO235ZTqGjxKkwwn%2BaT%2BxwVGzCMURPbXV%2F3C7CqYr5ryx8dkf%2FPxJpjaRfWCNYfNnwORS%2BoG%2B8Af60RidX4gD1QJPoYym2mrHVY36zzFju2eGvaxuNK8xujt7MsLkTbsS3WRuf4M8RCFk3cgSsD0ow2dstvfj%2FnGyj6XKj1UDVu8j7Wm%2BX7JuS3InZg27MZ0NLSwSq0d3uzpgdehAgOyrTPtbmi2R9H0cbUrrfAz6dh5bUeiTCZpvHnj40LZC9uII%2FjtbAshXVBbtX2ZmaGBlZVpBnL%2Fd9onl3aaPerbu8q4LAucOAhMjS2wtHbiv3dHekqtS%2FL%2FNPzniQ8pzSPaP0RZ9J8%2FWTMoh%2FaFMm8TxpLlHjazCaauesiPbo%2BVcVKBQKQ8n6x%2BLRTFGvgBFPJfb7WQJlP5%2BFAtF0SuAIhE4gtO0Sx81wjQuhZTx8nESQoWs14eocs2Wx84yHtMWHT2ZXhX9Q6zl6sNTgdop3N3JYF7NNBV4vzToFY%2F3j6OcVTcZB4ZkIe8mYOlCyqCwQy7xKEaMkWxrZo7iGsdDX2d4RDCpdmZRgVcDs5alVV3X64NcwxPicwgY6pgE7kf31e3Aitg0VVjzn6LSsuuqneOCzUtJcUe%2BY%2B3VxBGe3Q0TOkNBu6I3edfWyw1pyYUzTbRqj0D0VIIq7umKDZ9%2BiHvRDGUhrfUdUhoF9Dobas1j506h85YNF7n%2BRZpUyYeidvQVl5vbxaoXKdtR8B1Ty%2FmoIhtb3NV4bP8aWhck37Fr604OtN%2FFhJE0ksTGi%2B6BsHip6FWdg9b2RueqMuIxJ%2Beg0&X-Amz-Signature=c30a79e686a653f3c2f57829d7109e9a83357ee9969f1ec6f698c67263dac7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26QIAHV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmCVepJQ9LkB1CjAbszAPNmqOD38qdZPl%2B5766sXvgNAiAcgRZkt7hYpc35KqQw7Lwlv41Yj01evV02Ar03k3Mh%2ByqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpAE1UcVbkwhdtK5KtwDb%2BfdkLLJWo6r%2B%2FfTY1%2BZ7el9XIYcqeJo0YzWurWpbhC0ZEmscKV8VWevewSO235ZTqGjxKkwwn%2BaT%2BxwVGzCMURPbXV%2F3C7CqYr5ryx8dkf%2FPxJpjaRfWCNYfNnwORS%2BoG%2B8Af60RidX4gD1QJPoYym2mrHVY36zzFju2eGvaxuNK8xujt7MsLkTbsS3WRuf4M8RCFk3cgSsD0ow2dstvfj%2FnGyj6XKj1UDVu8j7Wm%2BX7JuS3InZg27MZ0NLSwSq0d3uzpgdehAgOyrTPtbmi2R9H0cbUrrfAz6dh5bUeiTCZpvHnj40LZC9uII%2FjtbAshXVBbtX2ZmaGBlZVpBnL%2Fd9onl3aaPerbu8q4LAucOAhMjS2wtHbiv3dHekqtS%2FL%2FNPzniQ8pzSPaP0RZ9J8%2FWTMoh%2FaFMm8TxpLlHjazCaauesiPbo%2BVcVKBQKQ8n6x%2BLRTFGvgBFPJfb7WQJlP5%2BFAtF0SuAIhE4gtO0Sx81wjQuhZTx8nESQoWs14eocs2Wx84yHtMWHT2ZXhX9Q6zl6sNTgdop3N3JYF7NNBV4vzToFY%2F3j6OcVTcZB4ZkIe8mYOlCyqCwQy7xKEaMkWxrZo7iGsdDX2d4RDCpdmZRgVcDs5alVV3X64NcwxPicwgY6pgE7kf31e3Aitg0VVjzn6LSsuuqneOCzUtJcUe%2BY%2B3VxBGe3Q0TOkNBu6I3edfWyw1pyYUzTbRqj0D0VIIq7umKDZ9%2BiHvRDGUhrfUdUhoF9Dobas1j506h85YNF7n%2BRZpUyYeidvQVl5vbxaoXKdtR8B1Ty%2FmoIhtb3NV4bP8aWhck37Fr604OtN%2FFhJE0ksTGi%2B6BsHip6FWdg9b2RueqMuIxJ%2Beg0&X-Amz-Signature=679d36b0b2f36ee9f608cbb602e048a9857a741baaff2800ba58ac4e63bb3ac8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26QIAHV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmCVepJQ9LkB1CjAbszAPNmqOD38qdZPl%2B5766sXvgNAiAcgRZkt7hYpc35KqQw7Lwlv41Yj01evV02Ar03k3Mh%2ByqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpAE1UcVbkwhdtK5KtwDb%2BfdkLLJWo6r%2B%2FfTY1%2BZ7el9XIYcqeJo0YzWurWpbhC0ZEmscKV8VWevewSO235ZTqGjxKkwwn%2BaT%2BxwVGzCMURPbXV%2F3C7CqYr5ryx8dkf%2FPxJpjaRfWCNYfNnwORS%2BoG%2B8Af60RidX4gD1QJPoYym2mrHVY36zzFju2eGvaxuNK8xujt7MsLkTbsS3WRuf4M8RCFk3cgSsD0ow2dstvfj%2FnGyj6XKj1UDVu8j7Wm%2BX7JuS3InZg27MZ0NLSwSq0d3uzpgdehAgOyrTPtbmi2R9H0cbUrrfAz6dh5bUeiTCZpvHnj40LZC9uII%2FjtbAshXVBbtX2ZmaGBlZVpBnL%2Fd9onl3aaPerbu8q4LAucOAhMjS2wtHbiv3dHekqtS%2FL%2FNPzniQ8pzSPaP0RZ9J8%2FWTMoh%2FaFMm8TxpLlHjazCaauesiPbo%2BVcVKBQKQ8n6x%2BLRTFGvgBFPJfb7WQJlP5%2BFAtF0SuAIhE4gtO0Sx81wjQuhZTx8nESQoWs14eocs2Wx84yHtMWHT2ZXhX9Q6zl6sNTgdop3N3JYF7NNBV4vzToFY%2F3j6OcVTcZB4ZkIe8mYOlCyqCwQy7xKEaMkWxrZo7iGsdDX2d4RDCpdmZRgVcDs5alVV3X64NcwxPicwgY6pgE7kf31e3Aitg0VVjzn6LSsuuqneOCzUtJcUe%2BY%2B3VxBGe3Q0TOkNBu6I3edfWyw1pyYUzTbRqj0D0VIIq7umKDZ9%2BiHvRDGUhrfUdUhoF9Dobas1j506h85YNF7n%2BRZpUyYeidvQVl5vbxaoXKdtR8B1Ty%2FmoIhtb3NV4bP8aWhck37Fr604OtN%2FFhJE0ksTGi%2B6BsHip6FWdg9b2RueqMuIxJ%2Beg0&X-Amz-Signature=567ed86a99b19e13ee4dc1cf07df319ff35952d7901bcf639971e5b67f290240&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26QIAHV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmCVepJQ9LkB1CjAbszAPNmqOD38qdZPl%2B5766sXvgNAiAcgRZkt7hYpc35KqQw7Lwlv41Yj01evV02Ar03k3Mh%2ByqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpAE1UcVbkwhdtK5KtwDb%2BfdkLLJWo6r%2B%2FfTY1%2BZ7el9XIYcqeJo0YzWurWpbhC0ZEmscKV8VWevewSO235ZTqGjxKkwwn%2BaT%2BxwVGzCMURPbXV%2F3C7CqYr5ryx8dkf%2FPxJpjaRfWCNYfNnwORS%2BoG%2B8Af60RidX4gD1QJPoYym2mrHVY36zzFju2eGvaxuNK8xujt7MsLkTbsS3WRuf4M8RCFk3cgSsD0ow2dstvfj%2FnGyj6XKj1UDVu8j7Wm%2BX7JuS3InZg27MZ0NLSwSq0d3uzpgdehAgOyrTPtbmi2R9H0cbUrrfAz6dh5bUeiTCZpvHnj40LZC9uII%2FjtbAshXVBbtX2ZmaGBlZVpBnL%2Fd9onl3aaPerbu8q4LAucOAhMjS2wtHbiv3dHekqtS%2FL%2FNPzniQ8pzSPaP0RZ9J8%2FWTMoh%2FaFMm8TxpLlHjazCaauesiPbo%2BVcVKBQKQ8n6x%2BLRTFGvgBFPJfb7WQJlP5%2BFAtF0SuAIhE4gtO0Sx81wjQuhZTx8nESQoWs14eocs2Wx84yHtMWHT2ZXhX9Q6zl6sNTgdop3N3JYF7NNBV4vzToFY%2F3j6OcVTcZB4ZkIe8mYOlCyqCwQy7xKEaMkWxrZo7iGsdDX2d4RDCpdmZRgVcDs5alVV3X64NcwxPicwgY6pgE7kf31e3Aitg0VVjzn6LSsuuqneOCzUtJcUe%2BY%2B3VxBGe3Q0TOkNBu6I3edfWyw1pyYUzTbRqj0D0VIIq7umKDZ9%2BiHvRDGUhrfUdUhoF9Dobas1j506h85YNF7n%2BRZpUyYeidvQVl5vbxaoXKdtR8B1Ty%2FmoIhtb3NV4bP8aWhck37Fr604OtN%2FFhJE0ksTGi%2B6BsHip6FWdg9b2RueqMuIxJ%2Beg0&X-Amz-Signature=105c7f2457317d5d89967013e185b97190ec9c75e07dbb754aaeb3cf7c17c077&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26QIAHV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmCVepJQ9LkB1CjAbszAPNmqOD38qdZPl%2B5766sXvgNAiAcgRZkt7hYpc35KqQw7Lwlv41Yj01evV02Ar03k3Mh%2ByqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpAE1UcVbkwhdtK5KtwDb%2BfdkLLJWo6r%2B%2FfTY1%2BZ7el9XIYcqeJo0YzWurWpbhC0ZEmscKV8VWevewSO235ZTqGjxKkwwn%2BaT%2BxwVGzCMURPbXV%2F3C7CqYr5ryx8dkf%2FPxJpjaRfWCNYfNnwORS%2BoG%2B8Af60RidX4gD1QJPoYym2mrHVY36zzFju2eGvaxuNK8xujt7MsLkTbsS3WRuf4M8RCFk3cgSsD0ow2dstvfj%2FnGyj6XKj1UDVu8j7Wm%2BX7JuS3InZg27MZ0NLSwSq0d3uzpgdehAgOyrTPtbmi2R9H0cbUrrfAz6dh5bUeiTCZpvHnj40LZC9uII%2FjtbAshXVBbtX2ZmaGBlZVpBnL%2Fd9onl3aaPerbu8q4LAucOAhMjS2wtHbiv3dHekqtS%2FL%2FNPzniQ8pzSPaP0RZ9J8%2FWTMoh%2FaFMm8TxpLlHjazCaauesiPbo%2BVcVKBQKQ8n6x%2BLRTFGvgBFPJfb7WQJlP5%2BFAtF0SuAIhE4gtO0Sx81wjQuhZTx8nESQoWs14eocs2Wx84yHtMWHT2ZXhX9Q6zl6sNTgdop3N3JYF7NNBV4vzToFY%2F3j6OcVTcZB4ZkIe8mYOlCyqCwQy7xKEaMkWxrZo7iGsdDX2d4RDCpdmZRgVcDs5alVV3X64NcwxPicwgY6pgE7kf31e3Aitg0VVjzn6LSsuuqneOCzUtJcUe%2BY%2B3VxBGe3Q0TOkNBu6I3edfWyw1pyYUzTbRqj0D0VIIq7umKDZ9%2BiHvRDGUhrfUdUhoF9Dobas1j506h85YNF7n%2BRZpUyYeidvQVl5vbxaoXKdtR8B1Ty%2FmoIhtb3NV4bP8aWhck37Fr604OtN%2FFhJE0ksTGi%2B6BsHip6FWdg9b2RueqMuIxJ%2Beg0&X-Amz-Signature=dfe0d599c8eddc67f7df4ffabd9bf21a5fdbd7354dad0df6c45e2c3b5ca5afad&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26QIAHV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T200942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmCVepJQ9LkB1CjAbszAPNmqOD38qdZPl%2B5766sXvgNAiAcgRZkt7hYpc35KqQw7Lwlv41Yj01evV02Ar03k3Mh%2ByqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmpAE1UcVbkwhdtK5KtwDb%2BfdkLLJWo6r%2B%2FfTY1%2BZ7el9XIYcqeJo0YzWurWpbhC0ZEmscKV8VWevewSO235ZTqGjxKkwwn%2BaT%2BxwVGzCMURPbXV%2F3C7CqYr5ryx8dkf%2FPxJpjaRfWCNYfNnwORS%2BoG%2B8Af60RidX4gD1QJPoYym2mrHVY36zzFju2eGvaxuNK8xujt7MsLkTbsS3WRuf4M8RCFk3cgSsD0ow2dstvfj%2FnGyj6XKj1UDVu8j7Wm%2BX7JuS3InZg27MZ0NLSwSq0d3uzpgdehAgOyrTPtbmi2R9H0cbUrrfAz6dh5bUeiTCZpvHnj40LZC9uII%2FjtbAshXVBbtX2ZmaGBlZVpBnL%2Fd9onl3aaPerbu8q4LAucOAhMjS2wtHbiv3dHekqtS%2FL%2FNPzniQ8pzSPaP0RZ9J8%2FWTMoh%2FaFMm8TxpLlHjazCaauesiPbo%2BVcVKBQKQ8n6x%2BLRTFGvgBFPJfb7WQJlP5%2BFAtF0SuAIhE4gtO0Sx81wjQuhZTx8nESQoWs14eocs2Wx84yHtMWHT2ZXhX9Q6zl6sNTgdop3N3JYF7NNBV4vzToFY%2F3j6OcVTcZB4ZkIe8mYOlCyqCwQy7xKEaMkWxrZo7iGsdDX2d4RDCpdmZRgVcDs5alVV3X64NcwxPicwgY6pgE7kf31e3Aitg0VVjzn6LSsuuqneOCzUtJcUe%2BY%2B3VxBGe3Q0TOkNBu6I3edfWyw1pyYUzTbRqj0D0VIIq7umKDZ9%2BiHvRDGUhrfUdUhoF9Dobas1j506h85YNF7n%2BRZpUyYeidvQVl5vbxaoXKdtR8B1Ty%2FmoIhtb3NV4bP8aWhck37Fr604OtN%2FFhJE0ksTGi%2B6BsHip6FWdg9b2RueqMuIxJ%2Beg0&X-Amz-Signature=d38f077c6066cbfa4f6c0daa98ddaa13b6e6991a9cca88c71dab9843f712fce2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
