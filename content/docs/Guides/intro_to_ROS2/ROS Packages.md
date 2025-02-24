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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UG4LAA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMNXYdiewuVYUYMj202kCShEPtQW3FnUifTeyKHNUdgIhAOjqJvTiy83QczyJa6i%2FecWm35WflECMkhs414oSpcNJKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdqffTeDpmI5wKhYoq3AOn61mbhLnfySwEJtaBSOngjnCdJ%2BTE4fo607TUtr2XB848dBgpxYKH7F7vozD7yaPCvS0ohuYLoYIKxzOSmuNSH4mdW8j%2B1CKTPZ9g1w79K86QPDFUqdjIXIy%2FrbtoUFVYrU8YRwEbKKW2hqsXV5FlNsr%2B1I6kmrbGUZGsWZAtAtgqQy5k6k1iDKRYZXQvYi3qrUTgo%2BAUk3JJLzj%2FSvUMg11GWNccowZkac22Alnydg6G%2B%2FRBEjMkDlRcgOcvN47E74txVix2CB6B8X5Mt1dUBaLMxgFQbfQJtn3%2BwaR51NkfcWcxt7ehcJYjJp71iQfGAVDQss3oC83vSSFzz1jfNHzrVqbmb4XPqHCUpGIVgfFctSrxlmgzwtHfSLeKltC8DU9VclZhOhxAgNKdNW7fLQn6%2FrtPQwD6avotODHRKNZKVCSU9KHQ7lxsaQkEwbpIfC2X%2FA8vKA9ulzTrtrp%2B2ydCbz8%2FU4igTZrQN1dntL6XeY2vFpyAW5cn0SBku3%2BSA%2B7fSwq%2Bm3AGB6C5K0mGzEAVEe5U%2F73UUWMi0%2Blzvmy6IIt9LCF%2BuYzzODiJw0M9%2FzbfU3TRNxZ8s9s596bkXxyaG%2FVyw6dy%2BxOl%2BhCYJOdhbbBurDed8YGuCzDe1fO9BjqkASCbo1LisyLXmLmrcr4a1azkemw0FD7XSauRy1nElT5n1uamivUMiLmc%2BHH2uXo2poxFYichYNdMDZspkxoViyH9PzAokdP%2B%2FwwQMHsV6SDdZAdmD0dCXyyvBF7ywnE26MpGooJ%2FHdM6zE7puRLyYEN6EJlS5Jbc4LWaCJWftW7SLC0Qvd%2FUxzAVKlsKz1BVnJN9T37%2Bl93FxJ5aMbjTOTMaLOwc&X-Amz-Signature=87b1dd9d6a8f6e36da349db12681b5e4587c53ba087908e3540a12546361f109&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UG4LAA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMNXYdiewuVYUYMj202kCShEPtQW3FnUifTeyKHNUdgIhAOjqJvTiy83QczyJa6i%2FecWm35WflECMkhs414oSpcNJKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdqffTeDpmI5wKhYoq3AOn61mbhLnfySwEJtaBSOngjnCdJ%2BTE4fo607TUtr2XB848dBgpxYKH7F7vozD7yaPCvS0ohuYLoYIKxzOSmuNSH4mdW8j%2B1CKTPZ9g1w79K86QPDFUqdjIXIy%2FrbtoUFVYrU8YRwEbKKW2hqsXV5FlNsr%2B1I6kmrbGUZGsWZAtAtgqQy5k6k1iDKRYZXQvYi3qrUTgo%2BAUk3JJLzj%2FSvUMg11GWNccowZkac22Alnydg6G%2B%2FRBEjMkDlRcgOcvN47E74txVix2CB6B8X5Mt1dUBaLMxgFQbfQJtn3%2BwaR51NkfcWcxt7ehcJYjJp71iQfGAVDQss3oC83vSSFzz1jfNHzrVqbmb4XPqHCUpGIVgfFctSrxlmgzwtHfSLeKltC8DU9VclZhOhxAgNKdNW7fLQn6%2FrtPQwD6avotODHRKNZKVCSU9KHQ7lxsaQkEwbpIfC2X%2FA8vKA9ulzTrtrp%2B2ydCbz8%2FU4igTZrQN1dntL6XeY2vFpyAW5cn0SBku3%2BSA%2B7fSwq%2Bm3AGB6C5K0mGzEAVEe5U%2F73UUWMi0%2Blzvmy6IIt9LCF%2BuYzzODiJw0M9%2FzbfU3TRNxZ8s9s596bkXxyaG%2FVyw6dy%2BxOl%2BhCYJOdhbbBurDed8YGuCzDe1fO9BjqkASCbo1LisyLXmLmrcr4a1azkemw0FD7XSauRy1nElT5n1uamivUMiLmc%2BHH2uXo2poxFYichYNdMDZspkxoViyH9PzAokdP%2B%2FwwQMHsV6SDdZAdmD0dCXyyvBF7ywnE26MpGooJ%2FHdM6zE7puRLyYEN6EJlS5Jbc4LWaCJWftW7SLC0Qvd%2FUxzAVKlsKz1BVnJN9T37%2Bl93FxJ5aMbjTOTMaLOwc&X-Amz-Signature=865d6d52cfc224c8ada691b0790b5bb5fa91a5ea8d1d383f3070350d43b72607&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UG4LAA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMNXYdiewuVYUYMj202kCShEPtQW3FnUifTeyKHNUdgIhAOjqJvTiy83QczyJa6i%2FecWm35WflECMkhs414oSpcNJKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdqffTeDpmI5wKhYoq3AOn61mbhLnfySwEJtaBSOngjnCdJ%2BTE4fo607TUtr2XB848dBgpxYKH7F7vozD7yaPCvS0ohuYLoYIKxzOSmuNSH4mdW8j%2B1CKTPZ9g1w79K86QPDFUqdjIXIy%2FrbtoUFVYrU8YRwEbKKW2hqsXV5FlNsr%2B1I6kmrbGUZGsWZAtAtgqQy5k6k1iDKRYZXQvYi3qrUTgo%2BAUk3JJLzj%2FSvUMg11GWNccowZkac22Alnydg6G%2B%2FRBEjMkDlRcgOcvN47E74txVix2CB6B8X5Mt1dUBaLMxgFQbfQJtn3%2BwaR51NkfcWcxt7ehcJYjJp71iQfGAVDQss3oC83vSSFzz1jfNHzrVqbmb4XPqHCUpGIVgfFctSrxlmgzwtHfSLeKltC8DU9VclZhOhxAgNKdNW7fLQn6%2FrtPQwD6avotODHRKNZKVCSU9KHQ7lxsaQkEwbpIfC2X%2FA8vKA9ulzTrtrp%2B2ydCbz8%2FU4igTZrQN1dntL6XeY2vFpyAW5cn0SBku3%2BSA%2B7fSwq%2Bm3AGB6C5K0mGzEAVEe5U%2F73UUWMi0%2Blzvmy6IIt9LCF%2BuYzzODiJw0M9%2FzbfU3TRNxZ8s9s596bkXxyaG%2FVyw6dy%2BxOl%2BhCYJOdhbbBurDed8YGuCzDe1fO9BjqkASCbo1LisyLXmLmrcr4a1azkemw0FD7XSauRy1nElT5n1uamivUMiLmc%2BHH2uXo2poxFYichYNdMDZspkxoViyH9PzAokdP%2B%2FwwQMHsV6SDdZAdmD0dCXyyvBF7ywnE26MpGooJ%2FHdM6zE7puRLyYEN6EJlS5Jbc4LWaCJWftW7SLC0Qvd%2FUxzAVKlsKz1BVnJN9T37%2Bl93FxJ5aMbjTOTMaLOwc&X-Amz-Signature=0b0ad7b5af131cfebeac1654cf95203f7f6caa8c5c38e29e17f2942cb19825c9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UG4LAA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMNXYdiewuVYUYMj202kCShEPtQW3FnUifTeyKHNUdgIhAOjqJvTiy83QczyJa6i%2FecWm35WflECMkhs414oSpcNJKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdqffTeDpmI5wKhYoq3AOn61mbhLnfySwEJtaBSOngjnCdJ%2BTE4fo607TUtr2XB848dBgpxYKH7F7vozD7yaPCvS0ohuYLoYIKxzOSmuNSH4mdW8j%2B1CKTPZ9g1w79K86QPDFUqdjIXIy%2FrbtoUFVYrU8YRwEbKKW2hqsXV5FlNsr%2B1I6kmrbGUZGsWZAtAtgqQy5k6k1iDKRYZXQvYi3qrUTgo%2BAUk3JJLzj%2FSvUMg11GWNccowZkac22Alnydg6G%2B%2FRBEjMkDlRcgOcvN47E74txVix2CB6B8X5Mt1dUBaLMxgFQbfQJtn3%2BwaR51NkfcWcxt7ehcJYjJp71iQfGAVDQss3oC83vSSFzz1jfNHzrVqbmb4XPqHCUpGIVgfFctSrxlmgzwtHfSLeKltC8DU9VclZhOhxAgNKdNW7fLQn6%2FrtPQwD6avotODHRKNZKVCSU9KHQ7lxsaQkEwbpIfC2X%2FA8vKA9ulzTrtrp%2B2ydCbz8%2FU4igTZrQN1dntL6XeY2vFpyAW5cn0SBku3%2BSA%2B7fSwq%2Bm3AGB6C5K0mGzEAVEe5U%2F73UUWMi0%2Blzvmy6IIt9LCF%2BuYzzODiJw0M9%2FzbfU3TRNxZ8s9s596bkXxyaG%2FVyw6dy%2BxOl%2BhCYJOdhbbBurDed8YGuCzDe1fO9BjqkASCbo1LisyLXmLmrcr4a1azkemw0FD7XSauRy1nElT5n1uamivUMiLmc%2BHH2uXo2poxFYichYNdMDZspkxoViyH9PzAokdP%2B%2FwwQMHsV6SDdZAdmD0dCXyyvBF7ywnE26MpGooJ%2FHdM6zE7puRLyYEN6EJlS5Jbc4LWaCJWftW7SLC0Qvd%2FUxzAVKlsKz1BVnJN9T37%2Bl93FxJ5aMbjTOTMaLOwc&X-Amz-Signature=f5c2535781417d96424d668fdcf116a8d1f68312e2ebeb46a096a8a9302b9827&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UG4LAA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMNXYdiewuVYUYMj202kCShEPtQW3FnUifTeyKHNUdgIhAOjqJvTiy83QczyJa6i%2FecWm35WflECMkhs414oSpcNJKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdqffTeDpmI5wKhYoq3AOn61mbhLnfySwEJtaBSOngjnCdJ%2BTE4fo607TUtr2XB848dBgpxYKH7F7vozD7yaPCvS0ohuYLoYIKxzOSmuNSH4mdW8j%2B1CKTPZ9g1w79K86QPDFUqdjIXIy%2FrbtoUFVYrU8YRwEbKKW2hqsXV5FlNsr%2B1I6kmrbGUZGsWZAtAtgqQy5k6k1iDKRYZXQvYi3qrUTgo%2BAUk3JJLzj%2FSvUMg11GWNccowZkac22Alnydg6G%2B%2FRBEjMkDlRcgOcvN47E74txVix2CB6B8X5Mt1dUBaLMxgFQbfQJtn3%2BwaR51NkfcWcxt7ehcJYjJp71iQfGAVDQss3oC83vSSFzz1jfNHzrVqbmb4XPqHCUpGIVgfFctSrxlmgzwtHfSLeKltC8DU9VclZhOhxAgNKdNW7fLQn6%2FrtPQwD6avotODHRKNZKVCSU9KHQ7lxsaQkEwbpIfC2X%2FA8vKA9ulzTrtrp%2B2ydCbz8%2FU4igTZrQN1dntL6XeY2vFpyAW5cn0SBku3%2BSA%2B7fSwq%2Bm3AGB6C5K0mGzEAVEe5U%2F73UUWMi0%2Blzvmy6IIt9LCF%2BuYzzODiJw0M9%2FzbfU3TRNxZ8s9s596bkXxyaG%2FVyw6dy%2BxOl%2BhCYJOdhbbBurDed8YGuCzDe1fO9BjqkASCbo1LisyLXmLmrcr4a1azkemw0FD7XSauRy1nElT5n1uamivUMiLmc%2BHH2uXo2poxFYichYNdMDZspkxoViyH9PzAokdP%2B%2FwwQMHsV6SDdZAdmD0dCXyyvBF7ywnE26MpGooJ%2FHdM6zE7puRLyYEN6EJlS5Jbc4LWaCJWftW7SLC0Qvd%2FUxzAVKlsKz1BVnJN9T37%2Bl93FxJ5aMbjTOTMaLOwc&X-Amz-Signature=cdbbd08d24b1dca7743327af628a5cfc0f1918bd3d3011ff070057830678e5e5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UG4LAA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMNXYdiewuVYUYMj202kCShEPtQW3FnUifTeyKHNUdgIhAOjqJvTiy83QczyJa6i%2FecWm35WflECMkhs414oSpcNJKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdqffTeDpmI5wKhYoq3AOn61mbhLnfySwEJtaBSOngjnCdJ%2BTE4fo607TUtr2XB848dBgpxYKH7F7vozD7yaPCvS0ohuYLoYIKxzOSmuNSH4mdW8j%2B1CKTPZ9g1w79K86QPDFUqdjIXIy%2FrbtoUFVYrU8YRwEbKKW2hqsXV5FlNsr%2B1I6kmrbGUZGsWZAtAtgqQy5k6k1iDKRYZXQvYi3qrUTgo%2BAUk3JJLzj%2FSvUMg11GWNccowZkac22Alnydg6G%2B%2FRBEjMkDlRcgOcvN47E74txVix2CB6B8X5Mt1dUBaLMxgFQbfQJtn3%2BwaR51NkfcWcxt7ehcJYjJp71iQfGAVDQss3oC83vSSFzz1jfNHzrVqbmb4XPqHCUpGIVgfFctSrxlmgzwtHfSLeKltC8DU9VclZhOhxAgNKdNW7fLQn6%2FrtPQwD6avotODHRKNZKVCSU9KHQ7lxsaQkEwbpIfC2X%2FA8vKA9ulzTrtrp%2B2ydCbz8%2FU4igTZrQN1dntL6XeY2vFpyAW5cn0SBku3%2BSA%2B7fSwq%2Bm3AGB6C5K0mGzEAVEe5U%2F73UUWMi0%2Blzvmy6IIt9LCF%2BuYzzODiJw0M9%2FzbfU3TRNxZ8s9s596bkXxyaG%2FVyw6dy%2BxOl%2BhCYJOdhbbBurDed8YGuCzDe1fO9BjqkASCbo1LisyLXmLmrcr4a1azkemw0FD7XSauRy1nElT5n1uamivUMiLmc%2BHH2uXo2poxFYichYNdMDZspkxoViyH9PzAokdP%2B%2FwwQMHsV6SDdZAdmD0dCXyyvBF7ywnE26MpGooJ%2FHdM6zE7puRLyYEN6EJlS5Jbc4LWaCJWftW7SLC0Qvd%2FUxzAVKlsKz1BVnJN9T37%2Bl93FxJ5aMbjTOTMaLOwc&X-Amz-Signature=5772a246c2cbf806c9d7f1fcf34c3c7194c465328505631cdf9a5850a05ebf15&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UG4LAA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMNXYdiewuVYUYMj202kCShEPtQW3FnUifTeyKHNUdgIhAOjqJvTiy83QczyJa6i%2FecWm35WflECMkhs414oSpcNJKv8DCDcQABoMNjM3NDIzMTgzODA1IgxdqffTeDpmI5wKhYoq3AOn61mbhLnfySwEJtaBSOngjnCdJ%2BTE4fo607TUtr2XB848dBgpxYKH7F7vozD7yaPCvS0ohuYLoYIKxzOSmuNSH4mdW8j%2B1CKTPZ9g1w79K86QPDFUqdjIXIy%2FrbtoUFVYrU8YRwEbKKW2hqsXV5FlNsr%2B1I6kmrbGUZGsWZAtAtgqQy5k6k1iDKRYZXQvYi3qrUTgo%2BAUk3JJLzj%2FSvUMg11GWNccowZkac22Alnydg6G%2B%2FRBEjMkDlRcgOcvN47E74txVix2CB6B8X5Mt1dUBaLMxgFQbfQJtn3%2BwaR51NkfcWcxt7ehcJYjJp71iQfGAVDQss3oC83vSSFzz1jfNHzrVqbmb4XPqHCUpGIVgfFctSrxlmgzwtHfSLeKltC8DU9VclZhOhxAgNKdNW7fLQn6%2FrtPQwD6avotODHRKNZKVCSU9KHQ7lxsaQkEwbpIfC2X%2FA8vKA9ulzTrtrp%2B2ydCbz8%2FU4igTZrQN1dntL6XeY2vFpyAW5cn0SBku3%2BSA%2B7fSwq%2Bm3AGB6C5K0mGzEAVEe5U%2F73UUWMi0%2Blzvmy6IIt9LCF%2BuYzzODiJw0M9%2FzbfU3TRNxZ8s9s596bkXxyaG%2FVyw6dy%2BxOl%2BhCYJOdhbbBurDed8YGuCzDe1fO9BjqkASCbo1LisyLXmLmrcr4a1azkemw0FD7XSauRy1nElT5n1uamivUMiLmc%2BHH2uXo2poxFYichYNdMDZspkxoViyH9PzAokdP%2B%2FwwQMHsV6SDdZAdmD0dCXyyvBF7ywnE26MpGooJ%2FHdM6zE7puRLyYEN6EJlS5Jbc4LWaCJWftW7SLC0Qvd%2FUxzAVKlsKz1BVnJN9T37%2Bl93FxJ5aMbjTOTMaLOwc&X-Amz-Signature=2be9391b39a240492457be096168257c1960e8b5f0e00cdd5bc04b513250b316&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
