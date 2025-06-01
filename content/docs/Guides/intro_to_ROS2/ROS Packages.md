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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUJSJ3MN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD3%2FTVZVvS8NDlAHOw2glv7761N9NdrCpsTyOO3Vb5ABAIgTN2IzWCCTIFKzDsJ5AKmMKxu1ZsABWA2wMeZ%2FDNIMnsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjP8bhDKQjhOecHiircA%2BCHjKJuUV43CTe%2BgD8BapC7XCne1mIqtzMjy5lNlE8GNZevKD2uR9uY53jO%2B3wAsiKgkfwNKe0fo5qyU6PLIx%2BmxDk4V%2Fr2Z6rayUuHW8MpNCty8lXc7PgPcqIZEMznlhKk3ZC3uzclBzazbq2yqhDkJBtWor9UQPJimclhAPWRBMk56bvmhxsqMRs2%2FZIZ1fGxfCle1dC6Jd%2FBhfdHwkoTyqqmiRmbcOzT3k4nFaf88JqX%2BA%2FnZbSss10PGuP2EY6nds%2BX3FmeCpdz5DT68PlVR52fme29P5pOk2F5GGafIcsXr5x3BnMYifAWqTlCm%2Fq4oTXBbHZw%2Bwa4v0lt7sMQvg5lrzcNweMQh9qHPz99YhlKQT2zu8XNmv3VPOSu6asy1qVxTdFjJfkDn7TghfSlW5lW6L%2FHPaYYf2CVozxKSovzOE4%2BljNAenaPkd6x3PhrGl6bY5o3sj0MF256A00bnnCCTNw05CFYpPwaq8ZzyXCaPRvekSVjM6nw5%2FgXL3WM6CMcyaf60MFHb%2BJxOuG9KhW%2FZLD0n7DghZBghQTAjtbe6n8KW0dd0jyjWN9xEzRBjn9UWIO2JsGGZA5GXsS38xtLaZZXayAJ5QrMvbkSA%2Bm0ZOe4QStJ%2B9RtML7a7sEGOqUBeI4HwLyIZ4Azkev74QSaDJmWO7OStuCE5sqdqj%2BcfsgnLqd8OAcz7dSxrGnHc62I7SyBvgPxJ4qIB%2F5%2FNCHgs%2Bgv584yxUSLyy8NxZOgYmZhsb3%2FBlYK2yN2XQjiUUQxs0zsRBHnpL%2B%2Bp%2BTWeM2wuoj2MxoszD4vnxjb2AEiPbBPpXPZhACW0dv4rhbNFSg5He4IckRHbKniUwT28QJ2kQh%2ByeSX&X-Amz-Signature=5b13c5c70841e8a90d7599be8a29025bb22fad7b0d60f2a46530ffdd08c07ce0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUJSJ3MN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD3%2FTVZVvS8NDlAHOw2glv7761N9NdrCpsTyOO3Vb5ABAIgTN2IzWCCTIFKzDsJ5AKmMKxu1ZsABWA2wMeZ%2FDNIMnsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjP8bhDKQjhOecHiircA%2BCHjKJuUV43CTe%2BgD8BapC7XCne1mIqtzMjy5lNlE8GNZevKD2uR9uY53jO%2B3wAsiKgkfwNKe0fo5qyU6PLIx%2BmxDk4V%2Fr2Z6rayUuHW8MpNCty8lXc7PgPcqIZEMznlhKk3ZC3uzclBzazbq2yqhDkJBtWor9UQPJimclhAPWRBMk56bvmhxsqMRs2%2FZIZ1fGxfCle1dC6Jd%2FBhfdHwkoTyqqmiRmbcOzT3k4nFaf88JqX%2BA%2FnZbSss10PGuP2EY6nds%2BX3FmeCpdz5DT68PlVR52fme29P5pOk2F5GGafIcsXr5x3BnMYifAWqTlCm%2Fq4oTXBbHZw%2Bwa4v0lt7sMQvg5lrzcNweMQh9qHPz99YhlKQT2zu8XNmv3VPOSu6asy1qVxTdFjJfkDn7TghfSlW5lW6L%2FHPaYYf2CVozxKSovzOE4%2BljNAenaPkd6x3PhrGl6bY5o3sj0MF256A00bnnCCTNw05CFYpPwaq8ZzyXCaPRvekSVjM6nw5%2FgXL3WM6CMcyaf60MFHb%2BJxOuG9KhW%2FZLD0n7DghZBghQTAjtbe6n8KW0dd0jyjWN9xEzRBjn9UWIO2JsGGZA5GXsS38xtLaZZXayAJ5QrMvbkSA%2Bm0ZOe4QStJ%2B9RtML7a7sEGOqUBeI4HwLyIZ4Azkev74QSaDJmWO7OStuCE5sqdqj%2BcfsgnLqd8OAcz7dSxrGnHc62I7SyBvgPxJ4qIB%2F5%2FNCHgs%2Bgv584yxUSLyy8NxZOgYmZhsb3%2FBlYK2yN2XQjiUUQxs0zsRBHnpL%2B%2Bp%2BTWeM2wuoj2MxoszD4vnxjb2AEiPbBPpXPZhACW0dv4rhbNFSg5He4IckRHbKniUwT28QJ2kQh%2ByeSX&X-Amz-Signature=f2d701991e1d13a796be6d493548c39c8da658507f4a406197d32698c1ec8b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUJSJ3MN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD3%2FTVZVvS8NDlAHOw2glv7761N9NdrCpsTyOO3Vb5ABAIgTN2IzWCCTIFKzDsJ5AKmMKxu1ZsABWA2wMeZ%2FDNIMnsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjP8bhDKQjhOecHiircA%2BCHjKJuUV43CTe%2BgD8BapC7XCne1mIqtzMjy5lNlE8GNZevKD2uR9uY53jO%2B3wAsiKgkfwNKe0fo5qyU6PLIx%2BmxDk4V%2Fr2Z6rayUuHW8MpNCty8lXc7PgPcqIZEMznlhKk3ZC3uzclBzazbq2yqhDkJBtWor9UQPJimclhAPWRBMk56bvmhxsqMRs2%2FZIZ1fGxfCle1dC6Jd%2FBhfdHwkoTyqqmiRmbcOzT3k4nFaf88JqX%2BA%2FnZbSss10PGuP2EY6nds%2BX3FmeCpdz5DT68PlVR52fme29P5pOk2F5GGafIcsXr5x3BnMYifAWqTlCm%2Fq4oTXBbHZw%2Bwa4v0lt7sMQvg5lrzcNweMQh9qHPz99YhlKQT2zu8XNmv3VPOSu6asy1qVxTdFjJfkDn7TghfSlW5lW6L%2FHPaYYf2CVozxKSovzOE4%2BljNAenaPkd6x3PhrGl6bY5o3sj0MF256A00bnnCCTNw05CFYpPwaq8ZzyXCaPRvekSVjM6nw5%2FgXL3WM6CMcyaf60MFHb%2BJxOuG9KhW%2FZLD0n7DghZBghQTAjtbe6n8KW0dd0jyjWN9xEzRBjn9UWIO2JsGGZA5GXsS38xtLaZZXayAJ5QrMvbkSA%2Bm0ZOe4QStJ%2B9RtML7a7sEGOqUBeI4HwLyIZ4Azkev74QSaDJmWO7OStuCE5sqdqj%2BcfsgnLqd8OAcz7dSxrGnHc62I7SyBvgPxJ4qIB%2F5%2FNCHgs%2Bgv584yxUSLyy8NxZOgYmZhsb3%2FBlYK2yN2XQjiUUQxs0zsRBHnpL%2B%2Bp%2BTWeM2wuoj2MxoszD4vnxjb2AEiPbBPpXPZhACW0dv4rhbNFSg5He4IckRHbKniUwT28QJ2kQh%2ByeSX&X-Amz-Signature=6515232a57c5fe60bd83230cca143749c1f090c5665fe0377a63d04df78222f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUJSJ3MN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD3%2FTVZVvS8NDlAHOw2glv7761N9NdrCpsTyOO3Vb5ABAIgTN2IzWCCTIFKzDsJ5AKmMKxu1ZsABWA2wMeZ%2FDNIMnsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjP8bhDKQjhOecHiircA%2BCHjKJuUV43CTe%2BgD8BapC7XCne1mIqtzMjy5lNlE8GNZevKD2uR9uY53jO%2B3wAsiKgkfwNKe0fo5qyU6PLIx%2BmxDk4V%2Fr2Z6rayUuHW8MpNCty8lXc7PgPcqIZEMznlhKk3ZC3uzclBzazbq2yqhDkJBtWor9UQPJimclhAPWRBMk56bvmhxsqMRs2%2FZIZ1fGxfCle1dC6Jd%2FBhfdHwkoTyqqmiRmbcOzT3k4nFaf88JqX%2BA%2FnZbSss10PGuP2EY6nds%2BX3FmeCpdz5DT68PlVR52fme29P5pOk2F5GGafIcsXr5x3BnMYifAWqTlCm%2Fq4oTXBbHZw%2Bwa4v0lt7sMQvg5lrzcNweMQh9qHPz99YhlKQT2zu8XNmv3VPOSu6asy1qVxTdFjJfkDn7TghfSlW5lW6L%2FHPaYYf2CVozxKSovzOE4%2BljNAenaPkd6x3PhrGl6bY5o3sj0MF256A00bnnCCTNw05CFYpPwaq8ZzyXCaPRvekSVjM6nw5%2FgXL3WM6CMcyaf60MFHb%2BJxOuG9KhW%2FZLD0n7DghZBghQTAjtbe6n8KW0dd0jyjWN9xEzRBjn9UWIO2JsGGZA5GXsS38xtLaZZXayAJ5QrMvbkSA%2Bm0ZOe4QStJ%2B9RtML7a7sEGOqUBeI4HwLyIZ4Azkev74QSaDJmWO7OStuCE5sqdqj%2BcfsgnLqd8OAcz7dSxrGnHc62I7SyBvgPxJ4qIB%2F5%2FNCHgs%2Bgv584yxUSLyy8NxZOgYmZhsb3%2FBlYK2yN2XQjiUUQxs0zsRBHnpL%2B%2Bp%2BTWeM2wuoj2MxoszD4vnxjb2AEiPbBPpXPZhACW0dv4rhbNFSg5He4IckRHbKniUwT28QJ2kQh%2ByeSX&X-Amz-Signature=135ad5fede5dcef4ef40712fc9c50a9681ea8e68a519fd01c714eafc2e9f6355&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUJSJ3MN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD3%2FTVZVvS8NDlAHOw2glv7761N9NdrCpsTyOO3Vb5ABAIgTN2IzWCCTIFKzDsJ5AKmMKxu1ZsABWA2wMeZ%2FDNIMnsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjP8bhDKQjhOecHiircA%2BCHjKJuUV43CTe%2BgD8BapC7XCne1mIqtzMjy5lNlE8GNZevKD2uR9uY53jO%2B3wAsiKgkfwNKe0fo5qyU6PLIx%2BmxDk4V%2Fr2Z6rayUuHW8MpNCty8lXc7PgPcqIZEMznlhKk3ZC3uzclBzazbq2yqhDkJBtWor9UQPJimclhAPWRBMk56bvmhxsqMRs2%2FZIZ1fGxfCle1dC6Jd%2FBhfdHwkoTyqqmiRmbcOzT3k4nFaf88JqX%2BA%2FnZbSss10PGuP2EY6nds%2BX3FmeCpdz5DT68PlVR52fme29P5pOk2F5GGafIcsXr5x3BnMYifAWqTlCm%2Fq4oTXBbHZw%2Bwa4v0lt7sMQvg5lrzcNweMQh9qHPz99YhlKQT2zu8XNmv3VPOSu6asy1qVxTdFjJfkDn7TghfSlW5lW6L%2FHPaYYf2CVozxKSovzOE4%2BljNAenaPkd6x3PhrGl6bY5o3sj0MF256A00bnnCCTNw05CFYpPwaq8ZzyXCaPRvekSVjM6nw5%2FgXL3WM6CMcyaf60MFHb%2BJxOuG9KhW%2FZLD0n7DghZBghQTAjtbe6n8KW0dd0jyjWN9xEzRBjn9UWIO2JsGGZA5GXsS38xtLaZZXayAJ5QrMvbkSA%2Bm0ZOe4QStJ%2B9RtML7a7sEGOqUBeI4HwLyIZ4Azkev74QSaDJmWO7OStuCE5sqdqj%2BcfsgnLqd8OAcz7dSxrGnHc62I7SyBvgPxJ4qIB%2F5%2FNCHgs%2Bgv584yxUSLyy8NxZOgYmZhsb3%2FBlYK2yN2XQjiUUQxs0zsRBHnpL%2B%2Bp%2BTWeM2wuoj2MxoszD4vnxjb2AEiPbBPpXPZhACW0dv4rhbNFSg5He4IckRHbKniUwT28QJ2kQh%2ByeSX&X-Amz-Signature=cba10ed4dcd74fbeb44f81d90715711af3fc90536fbc80cab0fbfb15a333bb00&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUJSJ3MN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD3%2FTVZVvS8NDlAHOw2glv7761N9NdrCpsTyOO3Vb5ABAIgTN2IzWCCTIFKzDsJ5AKmMKxu1ZsABWA2wMeZ%2FDNIMnsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjP8bhDKQjhOecHiircA%2BCHjKJuUV43CTe%2BgD8BapC7XCne1mIqtzMjy5lNlE8GNZevKD2uR9uY53jO%2B3wAsiKgkfwNKe0fo5qyU6PLIx%2BmxDk4V%2Fr2Z6rayUuHW8MpNCty8lXc7PgPcqIZEMznlhKk3ZC3uzclBzazbq2yqhDkJBtWor9UQPJimclhAPWRBMk56bvmhxsqMRs2%2FZIZ1fGxfCle1dC6Jd%2FBhfdHwkoTyqqmiRmbcOzT3k4nFaf88JqX%2BA%2FnZbSss10PGuP2EY6nds%2BX3FmeCpdz5DT68PlVR52fme29P5pOk2F5GGafIcsXr5x3BnMYifAWqTlCm%2Fq4oTXBbHZw%2Bwa4v0lt7sMQvg5lrzcNweMQh9qHPz99YhlKQT2zu8XNmv3VPOSu6asy1qVxTdFjJfkDn7TghfSlW5lW6L%2FHPaYYf2CVozxKSovzOE4%2BljNAenaPkd6x3PhrGl6bY5o3sj0MF256A00bnnCCTNw05CFYpPwaq8ZzyXCaPRvekSVjM6nw5%2FgXL3WM6CMcyaf60MFHb%2BJxOuG9KhW%2FZLD0n7DghZBghQTAjtbe6n8KW0dd0jyjWN9xEzRBjn9UWIO2JsGGZA5GXsS38xtLaZZXayAJ5QrMvbkSA%2Bm0ZOe4QStJ%2B9RtML7a7sEGOqUBeI4HwLyIZ4Azkev74QSaDJmWO7OStuCE5sqdqj%2BcfsgnLqd8OAcz7dSxrGnHc62I7SyBvgPxJ4qIB%2F5%2FNCHgs%2Bgv584yxUSLyy8NxZOgYmZhsb3%2FBlYK2yN2XQjiUUQxs0zsRBHnpL%2B%2Bp%2BTWeM2wuoj2MxoszD4vnxjb2AEiPbBPpXPZhACW0dv4rhbNFSg5He4IckRHbKniUwT28QJ2kQh%2ByeSX&X-Amz-Signature=955fbb589a45de0dfd391436a5f431b0592ab7373dbd34dca5f54ae5a445d75e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUJSJ3MN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD3%2FTVZVvS8NDlAHOw2glv7761N9NdrCpsTyOO3Vb5ABAIgTN2IzWCCTIFKzDsJ5AKmMKxu1ZsABWA2wMeZ%2FDNIMnsqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjP8bhDKQjhOecHiircA%2BCHjKJuUV43CTe%2BgD8BapC7XCne1mIqtzMjy5lNlE8GNZevKD2uR9uY53jO%2B3wAsiKgkfwNKe0fo5qyU6PLIx%2BmxDk4V%2Fr2Z6rayUuHW8MpNCty8lXc7PgPcqIZEMznlhKk3ZC3uzclBzazbq2yqhDkJBtWor9UQPJimclhAPWRBMk56bvmhxsqMRs2%2FZIZ1fGxfCle1dC6Jd%2FBhfdHwkoTyqqmiRmbcOzT3k4nFaf88JqX%2BA%2FnZbSss10PGuP2EY6nds%2BX3FmeCpdz5DT68PlVR52fme29P5pOk2F5GGafIcsXr5x3BnMYifAWqTlCm%2Fq4oTXBbHZw%2Bwa4v0lt7sMQvg5lrzcNweMQh9qHPz99YhlKQT2zu8XNmv3VPOSu6asy1qVxTdFjJfkDn7TghfSlW5lW6L%2FHPaYYf2CVozxKSovzOE4%2BljNAenaPkd6x3PhrGl6bY5o3sj0MF256A00bnnCCTNw05CFYpPwaq8ZzyXCaPRvekSVjM6nw5%2FgXL3WM6CMcyaf60MFHb%2BJxOuG9KhW%2FZLD0n7DghZBghQTAjtbe6n8KW0dd0jyjWN9xEzRBjn9UWIO2JsGGZA5GXsS38xtLaZZXayAJ5QrMvbkSA%2Bm0ZOe4QStJ%2B9RtML7a7sEGOqUBeI4HwLyIZ4Azkev74QSaDJmWO7OStuCE5sqdqj%2BcfsgnLqd8OAcz7dSxrGnHc62I7SyBvgPxJ4qIB%2F5%2FNCHgs%2Bgv584yxUSLyy8NxZOgYmZhsb3%2FBlYK2yN2XQjiUUQxs0zsRBHnpL%2B%2Bp%2BTWeM2wuoj2MxoszD4vnxjb2AEiPbBPpXPZhACW0dv4rhbNFSg5He4IckRHbKniUwT28QJ2kQh%2ByeSX&X-Amz-Signature=4f96f36f616ece951b1b63f7fcb2baadb5649b89219773d9e2801e0f8508a7be&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
