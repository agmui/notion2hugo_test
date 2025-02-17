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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FDNQLOJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCppQE4JatnsP7alBIs8SzeHPhEZbpvsIz6AvqI8nA3XAIhAKrMzkI3l%2BhZDMcveEVDDgGpIKR%2Bp%2Bh%2FaaGKyhfJatpFKv8DCGwQABoMNjM3NDIzMTgzODA1Igys1jh0Px4wGmRarGcq3AMHzAMsxJFUeYa8Qs7Cv3f7YtvqkjQy%2Bs%2Fqo1CTEGFOg47KoN%2BUuOUVzlM71gYq1%2Bzn0G2fqSJ1JdIUOP9YbwKC1xMMkd%2FvV7%2FxojhT07x21mqRnZKcAGaiehpOYFFATVQXFr78nlHKwaywsYRv%2BHtvGWCCDwSnk3SY3aHl04hQDN%2Fr1rNqzutNkTv4l0iK444UNTW3Y9ljBJLIQRZIO0pn0oGR5XQ3s73KzruNrQ0bu9HbbAb26sCYsgYA0HhHouOnhPALyjT%2FlJZU7j9sLCZkehu%2FxqAczwEuTlmcf52NoVlLQD9lZr5uXMGpqm%2FrbcJtIz1%2Fqc4BX23zYRMCzSscyPk8YqtJfYKTO6GYr%2B6OLN%2F9cjpKy%2BvrK%2FR1xwxihzv8OPdTAolGXUZdle1U4Y7SLrDaxbvAd%2FXzV2EGLQeQ5kaz2qMN9C56gaLblifbTHLk8Fd1KiTrH259Xh%2BpA8VYDim%2BhZYbeDBkZV1ytHI1IcWH%2Binj0nZqElDlnueCPlx7ERtADBHGf3bNpOUNgGWbj0wwPxJKewWztpRyY2N%2B%2FzU0PKIHvDruEhF467ekqgbbjr3ocMTOhu87Sc4eBDHAQzHu0eXIqbsqMHuATFMCBt0jgbOgDGL64Q5lazCMysq9BjqkAUABzvQop3J0qv7WlDowfWd71gsE7I8wZOcbO8d65pgC4QF7XNZgqaipFMCPasX1z9hxsYtpx8LUxkr5AlvnPwRxzJ6sHOq0ZF%2Fomv03dUlHg41zlVes4MU%2BEaHq%2BZbw61A%2BJ16mbtu5pNFIwqcPkBu01Ry0pQqm2JKi2tbXeSU7atQ8MKt40w2X3mdbUi2mAxLodktNFLiPApvtpnh7i8Qv7cn1&X-Amz-Signature=f0c478ac4f2966002ca2a533b3b566ce97170fd0df6dec32b298ca6cc56f4a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FDNQLOJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCppQE4JatnsP7alBIs8SzeHPhEZbpvsIz6AvqI8nA3XAIhAKrMzkI3l%2BhZDMcveEVDDgGpIKR%2Bp%2Bh%2FaaGKyhfJatpFKv8DCGwQABoMNjM3NDIzMTgzODA1Igys1jh0Px4wGmRarGcq3AMHzAMsxJFUeYa8Qs7Cv3f7YtvqkjQy%2Bs%2Fqo1CTEGFOg47KoN%2BUuOUVzlM71gYq1%2Bzn0G2fqSJ1JdIUOP9YbwKC1xMMkd%2FvV7%2FxojhT07x21mqRnZKcAGaiehpOYFFATVQXFr78nlHKwaywsYRv%2BHtvGWCCDwSnk3SY3aHl04hQDN%2Fr1rNqzutNkTv4l0iK444UNTW3Y9ljBJLIQRZIO0pn0oGR5XQ3s73KzruNrQ0bu9HbbAb26sCYsgYA0HhHouOnhPALyjT%2FlJZU7j9sLCZkehu%2FxqAczwEuTlmcf52NoVlLQD9lZr5uXMGpqm%2FrbcJtIz1%2Fqc4BX23zYRMCzSscyPk8YqtJfYKTO6GYr%2B6OLN%2F9cjpKy%2BvrK%2FR1xwxihzv8OPdTAolGXUZdle1U4Y7SLrDaxbvAd%2FXzV2EGLQeQ5kaz2qMN9C56gaLblifbTHLk8Fd1KiTrH259Xh%2BpA8VYDim%2BhZYbeDBkZV1ytHI1IcWH%2Binj0nZqElDlnueCPlx7ERtADBHGf3bNpOUNgGWbj0wwPxJKewWztpRyY2N%2B%2FzU0PKIHvDruEhF467ekqgbbjr3ocMTOhu87Sc4eBDHAQzHu0eXIqbsqMHuATFMCBt0jgbOgDGL64Q5lazCMysq9BjqkAUABzvQop3J0qv7WlDowfWd71gsE7I8wZOcbO8d65pgC4QF7XNZgqaipFMCPasX1z9hxsYtpx8LUxkr5AlvnPwRxzJ6sHOq0ZF%2Fomv03dUlHg41zlVes4MU%2BEaHq%2BZbw61A%2BJ16mbtu5pNFIwqcPkBu01Ry0pQqm2JKi2tbXeSU7atQ8MKt40w2X3mdbUi2mAxLodktNFLiPApvtpnh7i8Qv7cn1&X-Amz-Signature=fb93b5840b9d4718367556da2776b2f002924c046b5328b9783e9677fc71f885&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FDNQLOJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCppQE4JatnsP7alBIs8SzeHPhEZbpvsIz6AvqI8nA3XAIhAKrMzkI3l%2BhZDMcveEVDDgGpIKR%2Bp%2Bh%2FaaGKyhfJatpFKv8DCGwQABoMNjM3NDIzMTgzODA1Igys1jh0Px4wGmRarGcq3AMHzAMsxJFUeYa8Qs7Cv3f7YtvqkjQy%2Bs%2Fqo1CTEGFOg47KoN%2BUuOUVzlM71gYq1%2Bzn0G2fqSJ1JdIUOP9YbwKC1xMMkd%2FvV7%2FxojhT07x21mqRnZKcAGaiehpOYFFATVQXFr78nlHKwaywsYRv%2BHtvGWCCDwSnk3SY3aHl04hQDN%2Fr1rNqzutNkTv4l0iK444UNTW3Y9ljBJLIQRZIO0pn0oGR5XQ3s73KzruNrQ0bu9HbbAb26sCYsgYA0HhHouOnhPALyjT%2FlJZU7j9sLCZkehu%2FxqAczwEuTlmcf52NoVlLQD9lZr5uXMGpqm%2FrbcJtIz1%2Fqc4BX23zYRMCzSscyPk8YqtJfYKTO6GYr%2B6OLN%2F9cjpKy%2BvrK%2FR1xwxihzv8OPdTAolGXUZdle1U4Y7SLrDaxbvAd%2FXzV2EGLQeQ5kaz2qMN9C56gaLblifbTHLk8Fd1KiTrH259Xh%2BpA8VYDim%2BhZYbeDBkZV1ytHI1IcWH%2Binj0nZqElDlnueCPlx7ERtADBHGf3bNpOUNgGWbj0wwPxJKewWztpRyY2N%2B%2FzU0PKIHvDruEhF467ekqgbbjr3ocMTOhu87Sc4eBDHAQzHu0eXIqbsqMHuATFMCBt0jgbOgDGL64Q5lazCMysq9BjqkAUABzvQop3J0qv7WlDowfWd71gsE7I8wZOcbO8d65pgC4QF7XNZgqaipFMCPasX1z9hxsYtpx8LUxkr5AlvnPwRxzJ6sHOq0ZF%2Fomv03dUlHg41zlVes4MU%2BEaHq%2BZbw61A%2BJ16mbtu5pNFIwqcPkBu01Ry0pQqm2JKi2tbXeSU7atQ8MKt40w2X3mdbUi2mAxLodktNFLiPApvtpnh7i8Qv7cn1&X-Amz-Signature=24a34777450edcdbbaa7df9217fbbd06ce4e74b40536f3fdd36b2b28b951e381&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FDNQLOJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCppQE4JatnsP7alBIs8SzeHPhEZbpvsIz6AvqI8nA3XAIhAKrMzkI3l%2BhZDMcveEVDDgGpIKR%2Bp%2Bh%2FaaGKyhfJatpFKv8DCGwQABoMNjM3NDIzMTgzODA1Igys1jh0Px4wGmRarGcq3AMHzAMsxJFUeYa8Qs7Cv3f7YtvqkjQy%2Bs%2Fqo1CTEGFOg47KoN%2BUuOUVzlM71gYq1%2Bzn0G2fqSJ1JdIUOP9YbwKC1xMMkd%2FvV7%2FxojhT07x21mqRnZKcAGaiehpOYFFATVQXFr78nlHKwaywsYRv%2BHtvGWCCDwSnk3SY3aHl04hQDN%2Fr1rNqzutNkTv4l0iK444UNTW3Y9ljBJLIQRZIO0pn0oGR5XQ3s73KzruNrQ0bu9HbbAb26sCYsgYA0HhHouOnhPALyjT%2FlJZU7j9sLCZkehu%2FxqAczwEuTlmcf52NoVlLQD9lZr5uXMGpqm%2FrbcJtIz1%2Fqc4BX23zYRMCzSscyPk8YqtJfYKTO6GYr%2B6OLN%2F9cjpKy%2BvrK%2FR1xwxihzv8OPdTAolGXUZdle1U4Y7SLrDaxbvAd%2FXzV2EGLQeQ5kaz2qMN9C56gaLblifbTHLk8Fd1KiTrH259Xh%2BpA8VYDim%2BhZYbeDBkZV1ytHI1IcWH%2Binj0nZqElDlnueCPlx7ERtADBHGf3bNpOUNgGWbj0wwPxJKewWztpRyY2N%2B%2FzU0PKIHvDruEhF467ekqgbbjr3ocMTOhu87Sc4eBDHAQzHu0eXIqbsqMHuATFMCBt0jgbOgDGL64Q5lazCMysq9BjqkAUABzvQop3J0qv7WlDowfWd71gsE7I8wZOcbO8d65pgC4QF7XNZgqaipFMCPasX1z9hxsYtpx8LUxkr5AlvnPwRxzJ6sHOq0ZF%2Fomv03dUlHg41zlVes4MU%2BEaHq%2BZbw61A%2BJ16mbtu5pNFIwqcPkBu01Ry0pQqm2JKi2tbXeSU7atQ8MKt40w2X3mdbUi2mAxLodktNFLiPApvtpnh7i8Qv7cn1&X-Amz-Signature=c77c47cfb51c27965fef54a9b130166e04c9590a1b2eaa7c1efb0108bf7868ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FDNQLOJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCppQE4JatnsP7alBIs8SzeHPhEZbpvsIz6AvqI8nA3XAIhAKrMzkI3l%2BhZDMcveEVDDgGpIKR%2Bp%2Bh%2FaaGKyhfJatpFKv8DCGwQABoMNjM3NDIzMTgzODA1Igys1jh0Px4wGmRarGcq3AMHzAMsxJFUeYa8Qs7Cv3f7YtvqkjQy%2Bs%2Fqo1CTEGFOg47KoN%2BUuOUVzlM71gYq1%2Bzn0G2fqSJ1JdIUOP9YbwKC1xMMkd%2FvV7%2FxojhT07x21mqRnZKcAGaiehpOYFFATVQXFr78nlHKwaywsYRv%2BHtvGWCCDwSnk3SY3aHl04hQDN%2Fr1rNqzutNkTv4l0iK444UNTW3Y9ljBJLIQRZIO0pn0oGR5XQ3s73KzruNrQ0bu9HbbAb26sCYsgYA0HhHouOnhPALyjT%2FlJZU7j9sLCZkehu%2FxqAczwEuTlmcf52NoVlLQD9lZr5uXMGpqm%2FrbcJtIz1%2Fqc4BX23zYRMCzSscyPk8YqtJfYKTO6GYr%2B6OLN%2F9cjpKy%2BvrK%2FR1xwxihzv8OPdTAolGXUZdle1U4Y7SLrDaxbvAd%2FXzV2EGLQeQ5kaz2qMN9C56gaLblifbTHLk8Fd1KiTrH259Xh%2BpA8VYDim%2BhZYbeDBkZV1ytHI1IcWH%2Binj0nZqElDlnueCPlx7ERtADBHGf3bNpOUNgGWbj0wwPxJKewWztpRyY2N%2B%2FzU0PKIHvDruEhF467ekqgbbjr3ocMTOhu87Sc4eBDHAQzHu0eXIqbsqMHuATFMCBt0jgbOgDGL64Q5lazCMysq9BjqkAUABzvQop3J0qv7WlDowfWd71gsE7I8wZOcbO8d65pgC4QF7XNZgqaipFMCPasX1z9hxsYtpx8LUxkr5AlvnPwRxzJ6sHOq0ZF%2Fomv03dUlHg41zlVes4MU%2BEaHq%2BZbw61A%2BJ16mbtu5pNFIwqcPkBu01Ry0pQqm2JKi2tbXeSU7atQ8MKt40w2X3mdbUi2mAxLodktNFLiPApvtpnh7i8Qv7cn1&X-Amz-Signature=b1e6d5482d66cc85af9fdc3be066e354bfc2a264a849efec35344c09c7fcf45f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FDNQLOJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCppQE4JatnsP7alBIs8SzeHPhEZbpvsIz6AvqI8nA3XAIhAKrMzkI3l%2BhZDMcveEVDDgGpIKR%2Bp%2Bh%2FaaGKyhfJatpFKv8DCGwQABoMNjM3NDIzMTgzODA1Igys1jh0Px4wGmRarGcq3AMHzAMsxJFUeYa8Qs7Cv3f7YtvqkjQy%2Bs%2Fqo1CTEGFOg47KoN%2BUuOUVzlM71gYq1%2Bzn0G2fqSJ1JdIUOP9YbwKC1xMMkd%2FvV7%2FxojhT07x21mqRnZKcAGaiehpOYFFATVQXFr78nlHKwaywsYRv%2BHtvGWCCDwSnk3SY3aHl04hQDN%2Fr1rNqzutNkTv4l0iK444UNTW3Y9ljBJLIQRZIO0pn0oGR5XQ3s73KzruNrQ0bu9HbbAb26sCYsgYA0HhHouOnhPALyjT%2FlJZU7j9sLCZkehu%2FxqAczwEuTlmcf52NoVlLQD9lZr5uXMGpqm%2FrbcJtIz1%2Fqc4BX23zYRMCzSscyPk8YqtJfYKTO6GYr%2B6OLN%2F9cjpKy%2BvrK%2FR1xwxihzv8OPdTAolGXUZdle1U4Y7SLrDaxbvAd%2FXzV2EGLQeQ5kaz2qMN9C56gaLblifbTHLk8Fd1KiTrH259Xh%2BpA8VYDim%2BhZYbeDBkZV1ytHI1IcWH%2Binj0nZqElDlnueCPlx7ERtADBHGf3bNpOUNgGWbj0wwPxJKewWztpRyY2N%2B%2FzU0PKIHvDruEhF467ekqgbbjr3ocMTOhu87Sc4eBDHAQzHu0eXIqbsqMHuATFMCBt0jgbOgDGL64Q5lazCMysq9BjqkAUABzvQop3J0qv7WlDowfWd71gsE7I8wZOcbO8d65pgC4QF7XNZgqaipFMCPasX1z9hxsYtpx8LUxkr5AlvnPwRxzJ6sHOq0ZF%2Fomv03dUlHg41zlVes4MU%2BEaHq%2BZbw61A%2BJ16mbtu5pNFIwqcPkBu01Ry0pQqm2JKi2tbXeSU7atQ8MKt40w2X3mdbUi2mAxLodktNFLiPApvtpnh7i8Qv7cn1&X-Amz-Signature=398ada8b0bc756d6dd5eb52dedc9e0de8165342c3a19a9e670028c8689448b35&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FDNQLOJ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQCppQE4JatnsP7alBIs8SzeHPhEZbpvsIz6AvqI8nA3XAIhAKrMzkI3l%2BhZDMcveEVDDgGpIKR%2Bp%2Bh%2FaaGKyhfJatpFKv8DCGwQABoMNjM3NDIzMTgzODA1Igys1jh0Px4wGmRarGcq3AMHzAMsxJFUeYa8Qs7Cv3f7YtvqkjQy%2Bs%2Fqo1CTEGFOg47KoN%2BUuOUVzlM71gYq1%2Bzn0G2fqSJ1JdIUOP9YbwKC1xMMkd%2FvV7%2FxojhT07x21mqRnZKcAGaiehpOYFFATVQXFr78nlHKwaywsYRv%2BHtvGWCCDwSnk3SY3aHl04hQDN%2Fr1rNqzutNkTv4l0iK444UNTW3Y9ljBJLIQRZIO0pn0oGR5XQ3s73KzruNrQ0bu9HbbAb26sCYsgYA0HhHouOnhPALyjT%2FlJZU7j9sLCZkehu%2FxqAczwEuTlmcf52NoVlLQD9lZr5uXMGpqm%2FrbcJtIz1%2Fqc4BX23zYRMCzSscyPk8YqtJfYKTO6GYr%2B6OLN%2F9cjpKy%2BvrK%2FR1xwxihzv8OPdTAolGXUZdle1U4Y7SLrDaxbvAd%2FXzV2EGLQeQ5kaz2qMN9C56gaLblifbTHLk8Fd1KiTrH259Xh%2BpA8VYDim%2BhZYbeDBkZV1ytHI1IcWH%2Binj0nZqElDlnueCPlx7ERtADBHGf3bNpOUNgGWbj0wwPxJKewWztpRyY2N%2B%2FzU0PKIHvDruEhF467ekqgbbjr3ocMTOhu87Sc4eBDHAQzHu0eXIqbsqMHuATFMCBt0jgbOgDGL64Q5lazCMysq9BjqkAUABzvQop3J0qv7WlDowfWd71gsE7I8wZOcbO8d65pgC4QF7XNZgqaipFMCPasX1z9hxsYtpx8LUxkr5AlvnPwRxzJ6sHOq0ZF%2Fomv03dUlHg41zlVes4MU%2BEaHq%2BZbw61A%2BJ16mbtu5pNFIwqcPkBu01Ry0pQqm2JKi2tbXeSU7atQ8MKt40w2X3mdbUi2mAxLodktNFLiPApvtpnh7i8Qv7cn1&X-Amz-Signature=7f667e94e11cefe8cb25ce25279ef1c0e36f3b269d0e265061e329d4334168d4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
