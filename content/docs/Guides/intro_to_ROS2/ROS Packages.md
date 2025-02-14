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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VAI2PM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD0wQQPQB5YN1M6%2FvlpqnmymieLLteHbozNYt9uIVb14wIgIXbdQqSQKdWlLjvRefKhs%2BVx4o9Sn7WlQHL%2FuLcpZI4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDObNdNaw%2FQeoCDMyoCrcA8A4pnTDjxr17a5xkxUrzR1SzX7c25YWzNTh8atYWWq63r6CS7TiFVq4B8huS1tUUwxcW8dsju%2F1nhJnUOPmEQPtB85z1%2BCKm0wMJH5K1SLXNHmgmPyPQ3rPCa6rguogJPKIRfrX2VunmmcMT8Q4WZsAWXvwLsqzLRq3c1sv3aPjqAB%2FhjP67mDc%2B0LJ2ZbNRuwWG2yOrNERq%2FxlVlLTD9VUEd1zEa39CPLeY3JGPeLgEOhO5QxQqOeuUvSK%2F1U%2Fupy8NmZ6qXCutnLvpRbuRDUl4lcEtVvleLXfYz5a3Uqr44q%2FtQcTuTA1tEynZ4bFU3ryjRmT5GnCeGr%2BCg7IM3Dnjk7wqNKFa%2BQnpz03uLoBerXqUhU67m0kimoWZEbIZsI41tbPUgH9bmFXVoH4r0SMrOikVPkJjrVULD%2BEjyWqV1cEG2O%2FtFhefTdva0EpSjepI06oQnSGr7JdAFGF5p%2FPfPV29VTr5shBvWq6dDo4iwCu1tUG%2FovJq5IgxvLH0HyJZIp8OsVEriT%2FqN4ywaeUc2TZj1vL6dB48k1KXuImRFpuxNHunaWF9WT%2FJt6NSs9xV9v5lVFpRLvEFqq30FhOJBRqPrRiqnBvjh4lDGFLoPTp1cLpwekUn%2BIdMMaxvL0GOqUB7pjLI9Ov31aKTmX%2FJCEvG07jIphuTC%2FqMzIjz%2FMeWHUkKOu0sLnLTy6RkCYawMERhXWYS7EPQw4hB5z4%2FqiTnDEXX2hmtSu3BUpz8fe3tEpBE99cUenns8upEjJbqXSYqZgcM23%2BM214ZJstSLzB0XdhoOApLesdGYlzlBLGnu8RXVtpxUCsxNNxGPxj3K%2FG578Clkt0FV1ZwqkRtwwFbCd%2F1uYF&X-Amz-Signature=bc235da1d0bb635cd1a2e675d10d384d5e0ae4e39fb9c7c830729964314887bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VAI2PM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD0wQQPQB5YN1M6%2FvlpqnmymieLLteHbozNYt9uIVb14wIgIXbdQqSQKdWlLjvRefKhs%2BVx4o9Sn7WlQHL%2FuLcpZI4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDObNdNaw%2FQeoCDMyoCrcA8A4pnTDjxr17a5xkxUrzR1SzX7c25YWzNTh8atYWWq63r6CS7TiFVq4B8huS1tUUwxcW8dsju%2F1nhJnUOPmEQPtB85z1%2BCKm0wMJH5K1SLXNHmgmPyPQ3rPCa6rguogJPKIRfrX2VunmmcMT8Q4WZsAWXvwLsqzLRq3c1sv3aPjqAB%2FhjP67mDc%2B0LJ2ZbNRuwWG2yOrNERq%2FxlVlLTD9VUEd1zEa39CPLeY3JGPeLgEOhO5QxQqOeuUvSK%2F1U%2Fupy8NmZ6qXCutnLvpRbuRDUl4lcEtVvleLXfYz5a3Uqr44q%2FtQcTuTA1tEynZ4bFU3ryjRmT5GnCeGr%2BCg7IM3Dnjk7wqNKFa%2BQnpz03uLoBerXqUhU67m0kimoWZEbIZsI41tbPUgH9bmFXVoH4r0SMrOikVPkJjrVULD%2BEjyWqV1cEG2O%2FtFhefTdva0EpSjepI06oQnSGr7JdAFGF5p%2FPfPV29VTr5shBvWq6dDo4iwCu1tUG%2FovJq5IgxvLH0HyJZIp8OsVEriT%2FqN4ywaeUc2TZj1vL6dB48k1KXuImRFpuxNHunaWF9WT%2FJt6NSs9xV9v5lVFpRLvEFqq30FhOJBRqPrRiqnBvjh4lDGFLoPTp1cLpwekUn%2BIdMMaxvL0GOqUB7pjLI9Ov31aKTmX%2FJCEvG07jIphuTC%2FqMzIjz%2FMeWHUkKOu0sLnLTy6RkCYawMERhXWYS7EPQw4hB5z4%2FqiTnDEXX2hmtSu3BUpz8fe3tEpBE99cUenns8upEjJbqXSYqZgcM23%2BM214ZJstSLzB0XdhoOApLesdGYlzlBLGnu8RXVtpxUCsxNNxGPxj3K%2FG578Clkt0FV1ZwqkRtwwFbCd%2F1uYF&X-Amz-Signature=8ec1d36ce05be619ff9ce48268ab00b4ef846d65d25cf511d35168c8570e695a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VAI2PM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD0wQQPQB5YN1M6%2FvlpqnmymieLLteHbozNYt9uIVb14wIgIXbdQqSQKdWlLjvRefKhs%2BVx4o9Sn7WlQHL%2FuLcpZI4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDObNdNaw%2FQeoCDMyoCrcA8A4pnTDjxr17a5xkxUrzR1SzX7c25YWzNTh8atYWWq63r6CS7TiFVq4B8huS1tUUwxcW8dsju%2F1nhJnUOPmEQPtB85z1%2BCKm0wMJH5K1SLXNHmgmPyPQ3rPCa6rguogJPKIRfrX2VunmmcMT8Q4WZsAWXvwLsqzLRq3c1sv3aPjqAB%2FhjP67mDc%2B0LJ2ZbNRuwWG2yOrNERq%2FxlVlLTD9VUEd1zEa39CPLeY3JGPeLgEOhO5QxQqOeuUvSK%2F1U%2Fupy8NmZ6qXCutnLvpRbuRDUl4lcEtVvleLXfYz5a3Uqr44q%2FtQcTuTA1tEynZ4bFU3ryjRmT5GnCeGr%2BCg7IM3Dnjk7wqNKFa%2BQnpz03uLoBerXqUhU67m0kimoWZEbIZsI41tbPUgH9bmFXVoH4r0SMrOikVPkJjrVULD%2BEjyWqV1cEG2O%2FtFhefTdva0EpSjepI06oQnSGr7JdAFGF5p%2FPfPV29VTr5shBvWq6dDo4iwCu1tUG%2FovJq5IgxvLH0HyJZIp8OsVEriT%2FqN4ywaeUc2TZj1vL6dB48k1KXuImRFpuxNHunaWF9WT%2FJt6NSs9xV9v5lVFpRLvEFqq30FhOJBRqPrRiqnBvjh4lDGFLoPTp1cLpwekUn%2BIdMMaxvL0GOqUB7pjLI9Ov31aKTmX%2FJCEvG07jIphuTC%2FqMzIjz%2FMeWHUkKOu0sLnLTy6RkCYawMERhXWYS7EPQw4hB5z4%2FqiTnDEXX2hmtSu3BUpz8fe3tEpBE99cUenns8upEjJbqXSYqZgcM23%2BM214ZJstSLzB0XdhoOApLesdGYlzlBLGnu8RXVtpxUCsxNNxGPxj3K%2FG578Clkt0FV1ZwqkRtwwFbCd%2F1uYF&X-Amz-Signature=4b9fe64f999d4b2a98eea3df254c8747a1ab206241ec15ea518035a15f7946a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VAI2PM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD0wQQPQB5YN1M6%2FvlpqnmymieLLteHbozNYt9uIVb14wIgIXbdQqSQKdWlLjvRefKhs%2BVx4o9Sn7WlQHL%2FuLcpZI4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDObNdNaw%2FQeoCDMyoCrcA8A4pnTDjxr17a5xkxUrzR1SzX7c25YWzNTh8atYWWq63r6CS7TiFVq4B8huS1tUUwxcW8dsju%2F1nhJnUOPmEQPtB85z1%2BCKm0wMJH5K1SLXNHmgmPyPQ3rPCa6rguogJPKIRfrX2VunmmcMT8Q4WZsAWXvwLsqzLRq3c1sv3aPjqAB%2FhjP67mDc%2B0LJ2ZbNRuwWG2yOrNERq%2FxlVlLTD9VUEd1zEa39CPLeY3JGPeLgEOhO5QxQqOeuUvSK%2F1U%2Fupy8NmZ6qXCutnLvpRbuRDUl4lcEtVvleLXfYz5a3Uqr44q%2FtQcTuTA1tEynZ4bFU3ryjRmT5GnCeGr%2BCg7IM3Dnjk7wqNKFa%2BQnpz03uLoBerXqUhU67m0kimoWZEbIZsI41tbPUgH9bmFXVoH4r0SMrOikVPkJjrVULD%2BEjyWqV1cEG2O%2FtFhefTdva0EpSjepI06oQnSGr7JdAFGF5p%2FPfPV29VTr5shBvWq6dDo4iwCu1tUG%2FovJq5IgxvLH0HyJZIp8OsVEriT%2FqN4ywaeUc2TZj1vL6dB48k1KXuImRFpuxNHunaWF9WT%2FJt6NSs9xV9v5lVFpRLvEFqq30FhOJBRqPrRiqnBvjh4lDGFLoPTp1cLpwekUn%2BIdMMaxvL0GOqUB7pjLI9Ov31aKTmX%2FJCEvG07jIphuTC%2FqMzIjz%2FMeWHUkKOu0sLnLTy6RkCYawMERhXWYS7EPQw4hB5z4%2FqiTnDEXX2hmtSu3BUpz8fe3tEpBE99cUenns8upEjJbqXSYqZgcM23%2BM214ZJstSLzB0XdhoOApLesdGYlzlBLGnu8RXVtpxUCsxNNxGPxj3K%2FG578Clkt0FV1ZwqkRtwwFbCd%2F1uYF&X-Amz-Signature=541cfee0a82a33db75d27d98790a84173b4d013d117a5d8d108211b74453f504&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VAI2PM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD0wQQPQB5YN1M6%2FvlpqnmymieLLteHbozNYt9uIVb14wIgIXbdQqSQKdWlLjvRefKhs%2BVx4o9Sn7WlQHL%2FuLcpZI4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDObNdNaw%2FQeoCDMyoCrcA8A4pnTDjxr17a5xkxUrzR1SzX7c25YWzNTh8atYWWq63r6CS7TiFVq4B8huS1tUUwxcW8dsju%2F1nhJnUOPmEQPtB85z1%2BCKm0wMJH5K1SLXNHmgmPyPQ3rPCa6rguogJPKIRfrX2VunmmcMT8Q4WZsAWXvwLsqzLRq3c1sv3aPjqAB%2FhjP67mDc%2B0LJ2ZbNRuwWG2yOrNERq%2FxlVlLTD9VUEd1zEa39CPLeY3JGPeLgEOhO5QxQqOeuUvSK%2F1U%2Fupy8NmZ6qXCutnLvpRbuRDUl4lcEtVvleLXfYz5a3Uqr44q%2FtQcTuTA1tEynZ4bFU3ryjRmT5GnCeGr%2BCg7IM3Dnjk7wqNKFa%2BQnpz03uLoBerXqUhU67m0kimoWZEbIZsI41tbPUgH9bmFXVoH4r0SMrOikVPkJjrVULD%2BEjyWqV1cEG2O%2FtFhefTdva0EpSjepI06oQnSGr7JdAFGF5p%2FPfPV29VTr5shBvWq6dDo4iwCu1tUG%2FovJq5IgxvLH0HyJZIp8OsVEriT%2FqN4ywaeUc2TZj1vL6dB48k1KXuImRFpuxNHunaWF9WT%2FJt6NSs9xV9v5lVFpRLvEFqq30FhOJBRqPrRiqnBvjh4lDGFLoPTp1cLpwekUn%2BIdMMaxvL0GOqUB7pjLI9Ov31aKTmX%2FJCEvG07jIphuTC%2FqMzIjz%2FMeWHUkKOu0sLnLTy6RkCYawMERhXWYS7EPQw4hB5z4%2FqiTnDEXX2hmtSu3BUpz8fe3tEpBE99cUenns8upEjJbqXSYqZgcM23%2BM214ZJstSLzB0XdhoOApLesdGYlzlBLGnu8RXVtpxUCsxNNxGPxj3K%2FG578Clkt0FV1ZwqkRtwwFbCd%2F1uYF&X-Amz-Signature=694d587fa0b9c6e13fcc9d12f177a8c0f844be012500987773c6403790df118c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VAI2PM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD0wQQPQB5YN1M6%2FvlpqnmymieLLteHbozNYt9uIVb14wIgIXbdQqSQKdWlLjvRefKhs%2BVx4o9Sn7WlQHL%2FuLcpZI4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDObNdNaw%2FQeoCDMyoCrcA8A4pnTDjxr17a5xkxUrzR1SzX7c25YWzNTh8atYWWq63r6CS7TiFVq4B8huS1tUUwxcW8dsju%2F1nhJnUOPmEQPtB85z1%2BCKm0wMJH5K1SLXNHmgmPyPQ3rPCa6rguogJPKIRfrX2VunmmcMT8Q4WZsAWXvwLsqzLRq3c1sv3aPjqAB%2FhjP67mDc%2B0LJ2ZbNRuwWG2yOrNERq%2FxlVlLTD9VUEd1zEa39CPLeY3JGPeLgEOhO5QxQqOeuUvSK%2F1U%2Fupy8NmZ6qXCutnLvpRbuRDUl4lcEtVvleLXfYz5a3Uqr44q%2FtQcTuTA1tEynZ4bFU3ryjRmT5GnCeGr%2BCg7IM3Dnjk7wqNKFa%2BQnpz03uLoBerXqUhU67m0kimoWZEbIZsI41tbPUgH9bmFXVoH4r0SMrOikVPkJjrVULD%2BEjyWqV1cEG2O%2FtFhefTdva0EpSjepI06oQnSGr7JdAFGF5p%2FPfPV29VTr5shBvWq6dDo4iwCu1tUG%2FovJq5IgxvLH0HyJZIp8OsVEriT%2FqN4ywaeUc2TZj1vL6dB48k1KXuImRFpuxNHunaWF9WT%2FJt6NSs9xV9v5lVFpRLvEFqq30FhOJBRqPrRiqnBvjh4lDGFLoPTp1cLpwekUn%2BIdMMaxvL0GOqUB7pjLI9Ov31aKTmX%2FJCEvG07jIphuTC%2FqMzIjz%2FMeWHUkKOu0sLnLTy6RkCYawMERhXWYS7EPQw4hB5z4%2FqiTnDEXX2hmtSu3BUpz8fe3tEpBE99cUenns8upEjJbqXSYqZgcM23%2BM214ZJstSLzB0XdhoOApLesdGYlzlBLGnu8RXVtpxUCsxNNxGPxj3K%2FG578Clkt0FV1ZwqkRtwwFbCd%2F1uYF&X-Amz-Signature=7df46c5c5b2a4a716fc7fb09ba1ec7b93f28a72f632847a786ed1c555aa6b446&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655VAI2PM%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQD0wQQPQB5YN1M6%2FvlpqnmymieLLteHbozNYt9uIVb14wIgIXbdQqSQKdWlLjvRefKhs%2BVx4o9Sn7WlQHL%2FuLcpZI4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDObNdNaw%2FQeoCDMyoCrcA8A4pnTDjxr17a5xkxUrzR1SzX7c25YWzNTh8atYWWq63r6CS7TiFVq4B8huS1tUUwxcW8dsju%2F1nhJnUOPmEQPtB85z1%2BCKm0wMJH5K1SLXNHmgmPyPQ3rPCa6rguogJPKIRfrX2VunmmcMT8Q4WZsAWXvwLsqzLRq3c1sv3aPjqAB%2FhjP67mDc%2B0LJ2ZbNRuwWG2yOrNERq%2FxlVlLTD9VUEd1zEa39CPLeY3JGPeLgEOhO5QxQqOeuUvSK%2F1U%2Fupy8NmZ6qXCutnLvpRbuRDUl4lcEtVvleLXfYz5a3Uqr44q%2FtQcTuTA1tEynZ4bFU3ryjRmT5GnCeGr%2BCg7IM3Dnjk7wqNKFa%2BQnpz03uLoBerXqUhU67m0kimoWZEbIZsI41tbPUgH9bmFXVoH4r0SMrOikVPkJjrVULD%2BEjyWqV1cEG2O%2FtFhefTdva0EpSjepI06oQnSGr7JdAFGF5p%2FPfPV29VTr5shBvWq6dDo4iwCu1tUG%2FovJq5IgxvLH0HyJZIp8OsVEriT%2FqN4ywaeUc2TZj1vL6dB48k1KXuImRFpuxNHunaWF9WT%2FJt6NSs9xV9v5lVFpRLvEFqq30FhOJBRqPrRiqnBvjh4lDGFLoPTp1cLpwekUn%2BIdMMaxvL0GOqUB7pjLI9Ov31aKTmX%2FJCEvG07jIphuTC%2FqMzIjz%2FMeWHUkKOu0sLnLTy6RkCYawMERhXWYS7EPQw4hB5z4%2FqiTnDEXX2hmtSu3BUpz8fe3tEpBE99cUenns8upEjJbqXSYqZgcM23%2BM214ZJstSLzB0XdhoOApLesdGYlzlBLGnu8RXVtpxUCsxNNxGPxj3K%2FG578Clkt0FV1ZwqkRtwwFbCd%2F1uYF&X-Amz-Signature=b43e7731fb243751053623916cf230e4ded0fa00aea9390e054e25ca45f5ffda&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
