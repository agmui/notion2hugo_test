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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJTCRLU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtiXxaH9UuqwDDCRETPWjyR5UOrrX5Mfh30c75UeYSuAiEAv7uTqKqNHcRN4rBQaoYfXa%2Fec9GnMMn4WhUaxuB75aIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOe9q0cgUwfvwRL6FyrcA5eKHzR9DtDrVp%2B91S64MGiOfia9qQfJ5CBw3DvWaFXjMD9g9i14p3FV6Ez7A4S0WMFQPzS%2FSSuC0wFrgL91F3RPEmkgPgoDQxKHzghzsSq2rIOOiKONRrQBrcjMJR6gqmXK0QuVgvs1hntUMahpHzc8UuNoD%2FdlSoBJLiPJP30VYR9u7jp9NPlg3UkuNIIx1%2FldfbRuj4F62F%2FjoqxHOq6Gp1sxqTEEHI42%2Fcajf2Kla1u6cSys7USXbCcEp6RYqdS%2BQon2JcrStYfSBws1Xf5eg0joAKYpVFQEHpTCrK51o0Nyu3h6BD2geXN30ZKpnjLJenT4RQxLzgyGbPKY8EQrQ6DIuTjgKnNaL3sXc2HN5m%2BmQhYp7pDDfiR2guh3rAtcbhHbhIy9k%2FKqfetHfhxGu2YAMix1uaguJlIR1zMoqhnOgGPcVd5kPvifmkt8t0sNINqe6uwtZTFdrSm5o3GepBc1BhydQ9VBFIjDOZdxyS%2FdmQ9LPqH6NsiW2FPaFHpSekxFdlVk6rmE2oFK%2Bi7SxkT%2FkTz4igcQ9srHigUF%2BvHUM87CPVNpmNrJ8IIB3C%2F4wSYGI1JVB8yqWa7dTu1xfB0k19iAJbuJ2u6MA2cd2OgHgINXaXfoD0d2MOLkisAGOqUBlKN6msUGNiYengl%2FDLV0ZD8LI0gl38YOKA%2BXvJ0%2FE4Rht9%2FZIBXg4oaHE66whKKP7SowZXS8FaAH8es4avHWUD%2BEFWnEfn%2By9Yk6bKNu1GgnPt%2FBmPs397mnnF8qRVsBnWCqEgAtznvXpcZBzXmrqe5PvEauWlxF4XptMQr02B2C9vrLAkHJUFqx%2Fh9MCdgPV4aNs6ZeVhjYIyo1aC9TJLB9WjfL&X-Amz-Signature=35a58330cbfbf7fdd11d627e515b41bdc03f0a212b58329abb14da4d6003ee3d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJTCRLU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtiXxaH9UuqwDDCRETPWjyR5UOrrX5Mfh30c75UeYSuAiEAv7uTqKqNHcRN4rBQaoYfXa%2Fec9GnMMn4WhUaxuB75aIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOe9q0cgUwfvwRL6FyrcA5eKHzR9DtDrVp%2B91S64MGiOfia9qQfJ5CBw3DvWaFXjMD9g9i14p3FV6Ez7A4S0WMFQPzS%2FSSuC0wFrgL91F3RPEmkgPgoDQxKHzghzsSq2rIOOiKONRrQBrcjMJR6gqmXK0QuVgvs1hntUMahpHzc8UuNoD%2FdlSoBJLiPJP30VYR9u7jp9NPlg3UkuNIIx1%2FldfbRuj4F62F%2FjoqxHOq6Gp1sxqTEEHI42%2Fcajf2Kla1u6cSys7USXbCcEp6RYqdS%2BQon2JcrStYfSBws1Xf5eg0joAKYpVFQEHpTCrK51o0Nyu3h6BD2geXN30ZKpnjLJenT4RQxLzgyGbPKY8EQrQ6DIuTjgKnNaL3sXc2HN5m%2BmQhYp7pDDfiR2guh3rAtcbhHbhIy9k%2FKqfetHfhxGu2YAMix1uaguJlIR1zMoqhnOgGPcVd5kPvifmkt8t0sNINqe6uwtZTFdrSm5o3GepBc1BhydQ9VBFIjDOZdxyS%2FdmQ9LPqH6NsiW2FPaFHpSekxFdlVk6rmE2oFK%2Bi7SxkT%2FkTz4igcQ9srHigUF%2BvHUM87CPVNpmNrJ8IIB3C%2F4wSYGI1JVB8yqWa7dTu1xfB0k19iAJbuJ2u6MA2cd2OgHgINXaXfoD0d2MOLkisAGOqUBlKN6msUGNiYengl%2FDLV0ZD8LI0gl38YOKA%2BXvJ0%2FE4Rht9%2FZIBXg4oaHE66whKKP7SowZXS8FaAH8es4avHWUD%2BEFWnEfn%2By9Yk6bKNu1GgnPt%2FBmPs397mnnF8qRVsBnWCqEgAtznvXpcZBzXmrqe5PvEauWlxF4XptMQr02B2C9vrLAkHJUFqx%2Fh9MCdgPV4aNs6ZeVhjYIyo1aC9TJLB9WjfL&X-Amz-Signature=25d7654b4ca5c579b62fc7300a01ca2258ec7a1dda229d86ddb67a1181a297c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJTCRLU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtiXxaH9UuqwDDCRETPWjyR5UOrrX5Mfh30c75UeYSuAiEAv7uTqKqNHcRN4rBQaoYfXa%2Fec9GnMMn4WhUaxuB75aIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOe9q0cgUwfvwRL6FyrcA5eKHzR9DtDrVp%2B91S64MGiOfia9qQfJ5CBw3DvWaFXjMD9g9i14p3FV6Ez7A4S0WMFQPzS%2FSSuC0wFrgL91F3RPEmkgPgoDQxKHzghzsSq2rIOOiKONRrQBrcjMJR6gqmXK0QuVgvs1hntUMahpHzc8UuNoD%2FdlSoBJLiPJP30VYR9u7jp9NPlg3UkuNIIx1%2FldfbRuj4F62F%2FjoqxHOq6Gp1sxqTEEHI42%2Fcajf2Kla1u6cSys7USXbCcEp6RYqdS%2BQon2JcrStYfSBws1Xf5eg0joAKYpVFQEHpTCrK51o0Nyu3h6BD2geXN30ZKpnjLJenT4RQxLzgyGbPKY8EQrQ6DIuTjgKnNaL3sXc2HN5m%2BmQhYp7pDDfiR2guh3rAtcbhHbhIy9k%2FKqfetHfhxGu2YAMix1uaguJlIR1zMoqhnOgGPcVd5kPvifmkt8t0sNINqe6uwtZTFdrSm5o3GepBc1BhydQ9VBFIjDOZdxyS%2FdmQ9LPqH6NsiW2FPaFHpSekxFdlVk6rmE2oFK%2Bi7SxkT%2FkTz4igcQ9srHigUF%2BvHUM87CPVNpmNrJ8IIB3C%2F4wSYGI1JVB8yqWa7dTu1xfB0k19iAJbuJ2u6MA2cd2OgHgINXaXfoD0d2MOLkisAGOqUBlKN6msUGNiYengl%2FDLV0ZD8LI0gl38YOKA%2BXvJ0%2FE4Rht9%2FZIBXg4oaHE66whKKP7SowZXS8FaAH8es4avHWUD%2BEFWnEfn%2By9Yk6bKNu1GgnPt%2FBmPs397mnnF8qRVsBnWCqEgAtznvXpcZBzXmrqe5PvEauWlxF4XptMQr02B2C9vrLAkHJUFqx%2Fh9MCdgPV4aNs6ZeVhjYIyo1aC9TJLB9WjfL&X-Amz-Signature=8817725a381b83d52928be9130edc218bcc516df11815103208c6e12f6913c74&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJTCRLU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtiXxaH9UuqwDDCRETPWjyR5UOrrX5Mfh30c75UeYSuAiEAv7uTqKqNHcRN4rBQaoYfXa%2Fec9GnMMn4WhUaxuB75aIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOe9q0cgUwfvwRL6FyrcA5eKHzR9DtDrVp%2B91S64MGiOfia9qQfJ5CBw3DvWaFXjMD9g9i14p3FV6Ez7A4S0WMFQPzS%2FSSuC0wFrgL91F3RPEmkgPgoDQxKHzghzsSq2rIOOiKONRrQBrcjMJR6gqmXK0QuVgvs1hntUMahpHzc8UuNoD%2FdlSoBJLiPJP30VYR9u7jp9NPlg3UkuNIIx1%2FldfbRuj4F62F%2FjoqxHOq6Gp1sxqTEEHI42%2Fcajf2Kla1u6cSys7USXbCcEp6RYqdS%2BQon2JcrStYfSBws1Xf5eg0joAKYpVFQEHpTCrK51o0Nyu3h6BD2geXN30ZKpnjLJenT4RQxLzgyGbPKY8EQrQ6DIuTjgKnNaL3sXc2HN5m%2BmQhYp7pDDfiR2guh3rAtcbhHbhIy9k%2FKqfetHfhxGu2YAMix1uaguJlIR1zMoqhnOgGPcVd5kPvifmkt8t0sNINqe6uwtZTFdrSm5o3GepBc1BhydQ9VBFIjDOZdxyS%2FdmQ9LPqH6NsiW2FPaFHpSekxFdlVk6rmE2oFK%2Bi7SxkT%2FkTz4igcQ9srHigUF%2BvHUM87CPVNpmNrJ8IIB3C%2F4wSYGI1JVB8yqWa7dTu1xfB0k19iAJbuJ2u6MA2cd2OgHgINXaXfoD0d2MOLkisAGOqUBlKN6msUGNiYengl%2FDLV0ZD8LI0gl38YOKA%2BXvJ0%2FE4Rht9%2FZIBXg4oaHE66whKKP7SowZXS8FaAH8es4avHWUD%2BEFWnEfn%2By9Yk6bKNu1GgnPt%2FBmPs397mnnF8qRVsBnWCqEgAtznvXpcZBzXmrqe5PvEauWlxF4XptMQr02B2C9vrLAkHJUFqx%2Fh9MCdgPV4aNs6ZeVhjYIyo1aC9TJLB9WjfL&X-Amz-Signature=4beb93a24b55ea15c6090d45c51ef8b3657aa8b6d6bf1c6b48ab3c2ff1aa22be&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJTCRLU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtiXxaH9UuqwDDCRETPWjyR5UOrrX5Mfh30c75UeYSuAiEAv7uTqKqNHcRN4rBQaoYfXa%2Fec9GnMMn4WhUaxuB75aIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOe9q0cgUwfvwRL6FyrcA5eKHzR9DtDrVp%2B91S64MGiOfia9qQfJ5CBw3DvWaFXjMD9g9i14p3FV6Ez7A4S0WMFQPzS%2FSSuC0wFrgL91F3RPEmkgPgoDQxKHzghzsSq2rIOOiKONRrQBrcjMJR6gqmXK0QuVgvs1hntUMahpHzc8UuNoD%2FdlSoBJLiPJP30VYR9u7jp9NPlg3UkuNIIx1%2FldfbRuj4F62F%2FjoqxHOq6Gp1sxqTEEHI42%2Fcajf2Kla1u6cSys7USXbCcEp6RYqdS%2BQon2JcrStYfSBws1Xf5eg0joAKYpVFQEHpTCrK51o0Nyu3h6BD2geXN30ZKpnjLJenT4RQxLzgyGbPKY8EQrQ6DIuTjgKnNaL3sXc2HN5m%2BmQhYp7pDDfiR2guh3rAtcbhHbhIy9k%2FKqfetHfhxGu2YAMix1uaguJlIR1zMoqhnOgGPcVd5kPvifmkt8t0sNINqe6uwtZTFdrSm5o3GepBc1BhydQ9VBFIjDOZdxyS%2FdmQ9LPqH6NsiW2FPaFHpSekxFdlVk6rmE2oFK%2Bi7SxkT%2FkTz4igcQ9srHigUF%2BvHUM87CPVNpmNrJ8IIB3C%2F4wSYGI1JVB8yqWa7dTu1xfB0k19iAJbuJ2u6MA2cd2OgHgINXaXfoD0d2MOLkisAGOqUBlKN6msUGNiYengl%2FDLV0ZD8LI0gl38YOKA%2BXvJ0%2FE4Rht9%2FZIBXg4oaHE66whKKP7SowZXS8FaAH8es4avHWUD%2BEFWnEfn%2By9Yk6bKNu1GgnPt%2FBmPs397mnnF8qRVsBnWCqEgAtznvXpcZBzXmrqe5PvEauWlxF4XptMQr02B2C9vrLAkHJUFqx%2Fh9MCdgPV4aNs6ZeVhjYIyo1aC9TJLB9WjfL&X-Amz-Signature=1e5611c6e24b07b34ce8493d1b04447652dfe8baafae17fdd4a1f1bf80bca513&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJTCRLU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtiXxaH9UuqwDDCRETPWjyR5UOrrX5Mfh30c75UeYSuAiEAv7uTqKqNHcRN4rBQaoYfXa%2Fec9GnMMn4WhUaxuB75aIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOe9q0cgUwfvwRL6FyrcA5eKHzR9DtDrVp%2B91S64MGiOfia9qQfJ5CBw3DvWaFXjMD9g9i14p3FV6Ez7A4S0WMFQPzS%2FSSuC0wFrgL91F3RPEmkgPgoDQxKHzghzsSq2rIOOiKONRrQBrcjMJR6gqmXK0QuVgvs1hntUMahpHzc8UuNoD%2FdlSoBJLiPJP30VYR9u7jp9NPlg3UkuNIIx1%2FldfbRuj4F62F%2FjoqxHOq6Gp1sxqTEEHI42%2Fcajf2Kla1u6cSys7USXbCcEp6RYqdS%2BQon2JcrStYfSBws1Xf5eg0joAKYpVFQEHpTCrK51o0Nyu3h6BD2geXN30ZKpnjLJenT4RQxLzgyGbPKY8EQrQ6DIuTjgKnNaL3sXc2HN5m%2BmQhYp7pDDfiR2guh3rAtcbhHbhIy9k%2FKqfetHfhxGu2YAMix1uaguJlIR1zMoqhnOgGPcVd5kPvifmkt8t0sNINqe6uwtZTFdrSm5o3GepBc1BhydQ9VBFIjDOZdxyS%2FdmQ9LPqH6NsiW2FPaFHpSekxFdlVk6rmE2oFK%2Bi7SxkT%2FkTz4igcQ9srHigUF%2BvHUM87CPVNpmNrJ8IIB3C%2F4wSYGI1JVB8yqWa7dTu1xfB0k19iAJbuJ2u6MA2cd2OgHgINXaXfoD0d2MOLkisAGOqUBlKN6msUGNiYengl%2FDLV0ZD8LI0gl38YOKA%2BXvJ0%2FE4Rht9%2FZIBXg4oaHE66whKKP7SowZXS8FaAH8es4avHWUD%2BEFWnEfn%2By9Yk6bKNu1GgnPt%2FBmPs397mnnF8qRVsBnWCqEgAtznvXpcZBzXmrqe5PvEauWlxF4XptMQr02B2C9vrLAkHJUFqx%2Fh9MCdgPV4aNs6ZeVhjYIyo1aC9TJLB9WjfL&X-Amz-Signature=d437549b01c653b8cb074748615f704ab7831ed066baa3cd2fcaaf6ffd341c19&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPJTCRLU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtiXxaH9UuqwDDCRETPWjyR5UOrrX5Mfh30c75UeYSuAiEAv7uTqKqNHcRN4rBQaoYfXa%2Fec9GnMMn4WhUaxuB75aIq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOe9q0cgUwfvwRL6FyrcA5eKHzR9DtDrVp%2B91S64MGiOfia9qQfJ5CBw3DvWaFXjMD9g9i14p3FV6Ez7A4S0WMFQPzS%2FSSuC0wFrgL91F3RPEmkgPgoDQxKHzghzsSq2rIOOiKONRrQBrcjMJR6gqmXK0QuVgvs1hntUMahpHzc8UuNoD%2FdlSoBJLiPJP30VYR9u7jp9NPlg3UkuNIIx1%2FldfbRuj4F62F%2FjoqxHOq6Gp1sxqTEEHI42%2Fcajf2Kla1u6cSys7USXbCcEp6RYqdS%2BQon2JcrStYfSBws1Xf5eg0joAKYpVFQEHpTCrK51o0Nyu3h6BD2geXN30ZKpnjLJenT4RQxLzgyGbPKY8EQrQ6DIuTjgKnNaL3sXc2HN5m%2BmQhYp7pDDfiR2guh3rAtcbhHbhIy9k%2FKqfetHfhxGu2YAMix1uaguJlIR1zMoqhnOgGPcVd5kPvifmkt8t0sNINqe6uwtZTFdrSm5o3GepBc1BhydQ9VBFIjDOZdxyS%2FdmQ9LPqH6NsiW2FPaFHpSekxFdlVk6rmE2oFK%2Bi7SxkT%2FkTz4igcQ9srHigUF%2BvHUM87CPVNpmNrJ8IIB3C%2F4wSYGI1JVB8yqWa7dTu1xfB0k19iAJbuJ2u6MA2cd2OgHgINXaXfoD0d2MOLkisAGOqUBlKN6msUGNiYengl%2FDLV0ZD8LI0gl38YOKA%2BXvJ0%2FE4Rht9%2FZIBXg4oaHE66whKKP7SowZXS8FaAH8es4avHWUD%2BEFWnEfn%2By9Yk6bKNu1GgnPt%2FBmPs397mnnF8qRVsBnWCqEgAtznvXpcZBzXmrqe5PvEauWlxF4XptMQr02B2C9vrLAkHJUFqx%2Fh9MCdgPV4aNs6ZeVhjYIyo1aC9TJLB9WjfL&X-Amz-Signature=b2997e26c66dfe094a0c8b40048820667e822ecef05a012ca9d3c17077b982b8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
