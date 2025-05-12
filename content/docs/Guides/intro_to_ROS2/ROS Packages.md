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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROHDVA3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB%2B7GMGjXysNxbJv8iIC%2FN6xRdhL4WTlQAA1YT0Mt7xuAiEA1dQIjteF5h16y9J%2BzNMAekVK4lHprYkv9lpZ%2F4R3ZN0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3eRmorFO3m2n6z8CrcA20MqFy1UNBGAi4ZROEqrBY6SsjIcmluddbzdrDu1HetByFbkSJ7PWLkIt5CvOKR%2BwmZGQP2GoHe1HEgcJaIuppwhl5uM8tyjR86EIzZKoyaXfwriZkCaFmTS91Fgnq7UQzGj3F1C3PnotyU4I0%2Bw1%2FShxRZGHzAm7S3g8T5ZpN5Dx%2BWyY8R%2BjcZLU2i0FI6eQ97FVhkiuR3cUtP4QECmlfZt4PJY%2B9lxETGLI4mc4JJNSY0CILKVmW%2BzhEoy9TjW0hvU2iM9SZuOpmkH68r8i4eFYIzOCUHN5C4vVSkmqeb7gC4%2B1iLht9NnA2qe4DPTLCAeZxLmdwDoj6KCO32zX9BN23IGbWRXZI4Ye7OBymYcUGv33Px7w6VcxJMAmdFcUTwhpHkefF3cblifyP35DftBkltPKkqfQ9rwhrMQwiDidN2CjygJWU4R7L7PQsNYWcWenwKl9nhi6rGTNS3xFY7yWI1fg1JYeL7xrsIggCAfu6C9g81R02Djpw0PtOS%2BKP8y4oUbUwfBUSr3U4Ms1E87FsRQjShXOudICc0hKlPdrIu7NmAY9KJ0wpK4VSGYh4QRHXKeUPcaGn%2Fu6tF3mGioK8WPBLGPzOpCFtfzZCNIWY2%2Bgd9IgROFpXrMJ2diMEGOqUBXOnnjY8yh5hHVN2j4YkEZJOWSOTbBtZVWrA%2Fb4NYtkexolvZT8puMYMRwLGp2M46Joa5d8vMJgjL7%2BStAnKo%2BoKesSirstPiWjycaCTIMNqqYRvbWVloq6lqoWS63FyKNL%2BTDXMKWPFKt5Btm0RnXAcE6M1bSciN6nSFPXluwbrZSdM%2Fyf%2BRu8CEyUGY8%2BlPsjxOrM6L0vpumd5nA73D91e3jPDH&X-Amz-Signature=f2914d28c6b9b9cb5bc71404f78921354a90225a92e0997d02731b6582133f87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROHDVA3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB%2B7GMGjXysNxbJv8iIC%2FN6xRdhL4WTlQAA1YT0Mt7xuAiEA1dQIjteF5h16y9J%2BzNMAekVK4lHprYkv9lpZ%2F4R3ZN0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3eRmorFO3m2n6z8CrcA20MqFy1UNBGAi4ZROEqrBY6SsjIcmluddbzdrDu1HetByFbkSJ7PWLkIt5CvOKR%2BwmZGQP2GoHe1HEgcJaIuppwhl5uM8tyjR86EIzZKoyaXfwriZkCaFmTS91Fgnq7UQzGj3F1C3PnotyU4I0%2Bw1%2FShxRZGHzAm7S3g8T5ZpN5Dx%2BWyY8R%2BjcZLU2i0FI6eQ97FVhkiuR3cUtP4QECmlfZt4PJY%2B9lxETGLI4mc4JJNSY0CILKVmW%2BzhEoy9TjW0hvU2iM9SZuOpmkH68r8i4eFYIzOCUHN5C4vVSkmqeb7gC4%2B1iLht9NnA2qe4DPTLCAeZxLmdwDoj6KCO32zX9BN23IGbWRXZI4Ye7OBymYcUGv33Px7w6VcxJMAmdFcUTwhpHkefF3cblifyP35DftBkltPKkqfQ9rwhrMQwiDidN2CjygJWU4R7L7PQsNYWcWenwKl9nhi6rGTNS3xFY7yWI1fg1JYeL7xrsIggCAfu6C9g81R02Djpw0PtOS%2BKP8y4oUbUwfBUSr3U4Ms1E87FsRQjShXOudICc0hKlPdrIu7NmAY9KJ0wpK4VSGYh4QRHXKeUPcaGn%2Fu6tF3mGioK8WPBLGPzOpCFtfzZCNIWY2%2Bgd9IgROFpXrMJ2diMEGOqUBXOnnjY8yh5hHVN2j4YkEZJOWSOTbBtZVWrA%2Fb4NYtkexolvZT8puMYMRwLGp2M46Joa5d8vMJgjL7%2BStAnKo%2BoKesSirstPiWjycaCTIMNqqYRvbWVloq6lqoWS63FyKNL%2BTDXMKWPFKt5Btm0RnXAcE6M1bSciN6nSFPXluwbrZSdM%2Fyf%2BRu8CEyUGY8%2BlPsjxOrM6L0vpumd5nA73D91e3jPDH&X-Amz-Signature=2285b2f230be0d1cb8711b9bcee0df4b4b344cc24e40eb72e2a4acde6efe5935&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROHDVA3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB%2B7GMGjXysNxbJv8iIC%2FN6xRdhL4WTlQAA1YT0Mt7xuAiEA1dQIjteF5h16y9J%2BzNMAekVK4lHprYkv9lpZ%2F4R3ZN0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3eRmorFO3m2n6z8CrcA20MqFy1UNBGAi4ZROEqrBY6SsjIcmluddbzdrDu1HetByFbkSJ7PWLkIt5CvOKR%2BwmZGQP2GoHe1HEgcJaIuppwhl5uM8tyjR86EIzZKoyaXfwriZkCaFmTS91Fgnq7UQzGj3F1C3PnotyU4I0%2Bw1%2FShxRZGHzAm7S3g8T5ZpN5Dx%2BWyY8R%2BjcZLU2i0FI6eQ97FVhkiuR3cUtP4QECmlfZt4PJY%2B9lxETGLI4mc4JJNSY0CILKVmW%2BzhEoy9TjW0hvU2iM9SZuOpmkH68r8i4eFYIzOCUHN5C4vVSkmqeb7gC4%2B1iLht9NnA2qe4DPTLCAeZxLmdwDoj6KCO32zX9BN23IGbWRXZI4Ye7OBymYcUGv33Px7w6VcxJMAmdFcUTwhpHkefF3cblifyP35DftBkltPKkqfQ9rwhrMQwiDidN2CjygJWU4R7L7PQsNYWcWenwKl9nhi6rGTNS3xFY7yWI1fg1JYeL7xrsIggCAfu6C9g81R02Djpw0PtOS%2BKP8y4oUbUwfBUSr3U4Ms1E87FsRQjShXOudICc0hKlPdrIu7NmAY9KJ0wpK4VSGYh4QRHXKeUPcaGn%2Fu6tF3mGioK8WPBLGPzOpCFtfzZCNIWY2%2Bgd9IgROFpXrMJ2diMEGOqUBXOnnjY8yh5hHVN2j4YkEZJOWSOTbBtZVWrA%2Fb4NYtkexolvZT8puMYMRwLGp2M46Joa5d8vMJgjL7%2BStAnKo%2BoKesSirstPiWjycaCTIMNqqYRvbWVloq6lqoWS63FyKNL%2BTDXMKWPFKt5Btm0RnXAcE6M1bSciN6nSFPXluwbrZSdM%2Fyf%2BRu8CEyUGY8%2BlPsjxOrM6L0vpumd5nA73D91e3jPDH&X-Amz-Signature=1e74704ddc271752e88caa03751b2aaea6fa780523b863dc8256f9264070f2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROHDVA3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB%2B7GMGjXysNxbJv8iIC%2FN6xRdhL4WTlQAA1YT0Mt7xuAiEA1dQIjteF5h16y9J%2BzNMAekVK4lHprYkv9lpZ%2F4R3ZN0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3eRmorFO3m2n6z8CrcA20MqFy1UNBGAi4ZROEqrBY6SsjIcmluddbzdrDu1HetByFbkSJ7PWLkIt5CvOKR%2BwmZGQP2GoHe1HEgcJaIuppwhl5uM8tyjR86EIzZKoyaXfwriZkCaFmTS91Fgnq7UQzGj3F1C3PnotyU4I0%2Bw1%2FShxRZGHzAm7S3g8T5ZpN5Dx%2BWyY8R%2BjcZLU2i0FI6eQ97FVhkiuR3cUtP4QECmlfZt4PJY%2B9lxETGLI4mc4JJNSY0CILKVmW%2BzhEoy9TjW0hvU2iM9SZuOpmkH68r8i4eFYIzOCUHN5C4vVSkmqeb7gC4%2B1iLht9NnA2qe4DPTLCAeZxLmdwDoj6KCO32zX9BN23IGbWRXZI4Ye7OBymYcUGv33Px7w6VcxJMAmdFcUTwhpHkefF3cblifyP35DftBkltPKkqfQ9rwhrMQwiDidN2CjygJWU4R7L7PQsNYWcWenwKl9nhi6rGTNS3xFY7yWI1fg1JYeL7xrsIggCAfu6C9g81R02Djpw0PtOS%2BKP8y4oUbUwfBUSr3U4Ms1E87FsRQjShXOudICc0hKlPdrIu7NmAY9KJ0wpK4VSGYh4QRHXKeUPcaGn%2Fu6tF3mGioK8WPBLGPzOpCFtfzZCNIWY2%2Bgd9IgROFpXrMJ2diMEGOqUBXOnnjY8yh5hHVN2j4YkEZJOWSOTbBtZVWrA%2Fb4NYtkexolvZT8puMYMRwLGp2M46Joa5d8vMJgjL7%2BStAnKo%2BoKesSirstPiWjycaCTIMNqqYRvbWVloq6lqoWS63FyKNL%2BTDXMKWPFKt5Btm0RnXAcE6M1bSciN6nSFPXluwbrZSdM%2Fyf%2BRu8CEyUGY8%2BlPsjxOrM6L0vpumd5nA73D91e3jPDH&X-Amz-Signature=d31e63f1d1938cb965902e681a58d74e85ebea99550dc4676f30094f3ac5bfb0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROHDVA3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB%2B7GMGjXysNxbJv8iIC%2FN6xRdhL4WTlQAA1YT0Mt7xuAiEA1dQIjteF5h16y9J%2BzNMAekVK4lHprYkv9lpZ%2F4R3ZN0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3eRmorFO3m2n6z8CrcA20MqFy1UNBGAi4ZROEqrBY6SsjIcmluddbzdrDu1HetByFbkSJ7PWLkIt5CvOKR%2BwmZGQP2GoHe1HEgcJaIuppwhl5uM8tyjR86EIzZKoyaXfwriZkCaFmTS91Fgnq7UQzGj3F1C3PnotyU4I0%2Bw1%2FShxRZGHzAm7S3g8T5ZpN5Dx%2BWyY8R%2BjcZLU2i0FI6eQ97FVhkiuR3cUtP4QECmlfZt4PJY%2B9lxETGLI4mc4JJNSY0CILKVmW%2BzhEoy9TjW0hvU2iM9SZuOpmkH68r8i4eFYIzOCUHN5C4vVSkmqeb7gC4%2B1iLht9NnA2qe4DPTLCAeZxLmdwDoj6KCO32zX9BN23IGbWRXZI4Ye7OBymYcUGv33Px7w6VcxJMAmdFcUTwhpHkefF3cblifyP35DftBkltPKkqfQ9rwhrMQwiDidN2CjygJWU4R7L7PQsNYWcWenwKl9nhi6rGTNS3xFY7yWI1fg1JYeL7xrsIggCAfu6C9g81R02Djpw0PtOS%2BKP8y4oUbUwfBUSr3U4Ms1E87FsRQjShXOudICc0hKlPdrIu7NmAY9KJ0wpK4VSGYh4QRHXKeUPcaGn%2Fu6tF3mGioK8WPBLGPzOpCFtfzZCNIWY2%2Bgd9IgROFpXrMJ2diMEGOqUBXOnnjY8yh5hHVN2j4YkEZJOWSOTbBtZVWrA%2Fb4NYtkexolvZT8puMYMRwLGp2M46Joa5d8vMJgjL7%2BStAnKo%2BoKesSirstPiWjycaCTIMNqqYRvbWVloq6lqoWS63FyKNL%2BTDXMKWPFKt5Btm0RnXAcE6M1bSciN6nSFPXluwbrZSdM%2Fyf%2BRu8CEyUGY8%2BlPsjxOrM6L0vpumd5nA73D91e3jPDH&X-Amz-Signature=da90c977ca590f7ce247623a9a1be8aa27a603c49e052024d9e16da7a293051e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROHDVA3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB%2B7GMGjXysNxbJv8iIC%2FN6xRdhL4WTlQAA1YT0Mt7xuAiEA1dQIjteF5h16y9J%2BzNMAekVK4lHprYkv9lpZ%2F4R3ZN0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3eRmorFO3m2n6z8CrcA20MqFy1UNBGAi4ZROEqrBY6SsjIcmluddbzdrDu1HetByFbkSJ7PWLkIt5CvOKR%2BwmZGQP2GoHe1HEgcJaIuppwhl5uM8tyjR86EIzZKoyaXfwriZkCaFmTS91Fgnq7UQzGj3F1C3PnotyU4I0%2Bw1%2FShxRZGHzAm7S3g8T5ZpN5Dx%2BWyY8R%2BjcZLU2i0FI6eQ97FVhkiuR3cUtP4QECmlfZt4PJY%2B9lxETGLI4mc4JJNSY0CILKVmW%2BzhEoy9TjW0hvU2iM9SZuOpmkH68r8i4eFYIzOCUHN5C4vVSkmqeb7gC4%2B1iLht9NnA2qe4DPTLCAeZxLmdwDoj6KCO32zX9BN23IGbWRXZI4Ye7OBymYcUGv33Px7w6VcxJMAmdFcUTwhpHkefF3cblifyP35DftBkltPKkqfQ9rwhrMQwiDidN2CjygJWU4R7L7PQsNYWcWenwKl9nhi6rGTNS3xFY7yWI1fg1JYeL7xrsIggCAfu6C9g81R02Djpw0PtOS%2BKP8y4oUbUwfBUSr3U4Ms1E87FsRQjShXOudICc0hKlPdrIu7NmAY9KJ0wpK4VSGYh4QRHXKeUPcaGn%2Fu6tF3mGioK8WPBLGPzOpCFtfzZCNIWY2%2Bgd9IgROFpXrMJ2diMEGOqUBXOnnjY8yh5hHVN2j4YkEZJOWSOTbBtZVWrA%2Fb4NYtkexolvZT8puMYMRwLGp2M46Joa5d8vMJgjL7%2BStAnKo%2BoKesSirstPiWjycaCTIMNqqYRvbWVloq6lqoWS63FyKNL%2BTDXMKWPFKt5Btm0RnXAcE6M1bSciN6nSFPXluwbrZSdM%2Fyf%2BRu8CEyUGY8%2BlPsjxOrM6L0vpumd5nA73D91e3jPDH&X-Amz-Signature=7fd734fd6459cabbe4b2a2832c05fa9b7d86f262e9679f830cf55cc2b9f2951f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WROHDVA3%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIB%2B7GMGjXysNxbJv8iIC%2FN6xRdhL4WTlQAA1YT0Mt7xuAiEA1dQIjteF5h16y9J%2BzNMAekVK4lHprYkv9lpZ%2F4R3ZN0qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3eRmorFO3m2n6z8CrcA20MqFy1UNBGAi4ZROEqrBY6SsjIcmluddbzdrDu1HetByFbkSJ7PWLkIt5CvOKR%2BwmZGQP2GoHe1HEgcJaIuppwhl5uM8tyjR86EIzZKoyaXfwriZkCaFmTS91Fgnq7UQzGj3F1C3PnotyU4I0%2Bw1%2FShxRZGHzAm7S3g8T5ZpN5Dx%2BWyY8R%2BjcZLU2i0FI6eQ97FVhkiuR3cUtP4QECmlfZt4PJY%2B9lxETGLI4mc4JJNSY0CILKVmW%2BzhEoy9TjW0hvU2iM9SZuOpmkH68r8i4eFYIzOCUHN5C4vVSkmqeb7gC4%2B1iLht9NnA2qe4DPTLCAeZxLmdwDoj6KCO32zX9BN23IGbWRXZI4Ye7OBymYcUGv33Px7w6VcxJMAmdFcUTwhpHkefF3cblifyP35DftBkltPKkqfQ9rwhrMQwiDidN2CjygJWU4R7L7PQsNYWcWenwKl9nhi6rGTNS3xFY7yWI1fg1JYeL7xrsIggCAfu6C9g81R02Djpw0PtOS%2BKP8y4oUbUwfBUSr3U4Ms1E87FsRQjShXOudICc0hKlPdrIu7NmAY9KJ0wpK4VSGYh4QRHXKeUPcaGn%2Fu6tF3mGioK8WPBLGPzOpCFtfzZCNIWY2%2Bgd9IgROFpXrMJ2diMEGOqUBXOnnjY8yh5hHVN2j4YkEZJOWSOTbBtZVWrA%2Fb4NYtkexolvZT8puMYMRwLGp2M46Joa5d8vMJgjL7%2BStAnKo%2BoKesSirstPiWjycaCTIMNqqYRvbWVloq6lqoWS63FyKNL%2BTDXMKWPFKt5Btm0RnXAcE6M1bSciN6nSFPXluwbrZSdM%2Fyf%2BRu8CEyUGY8%2BlPsjxOrM6L0vpumd5nA73D91e3jPDH&X-Amz-Signature=56b7c002231eddb645ccfa4d566a86332dd298d095a098558b86ce7f188adfec&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
