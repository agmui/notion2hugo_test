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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2VS26X%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCqaG245I72SfVZhPx6qy8a7zclr7QKC2uCy6IYDxd7YgIhANXr%2Be9znqzjM8cfI5f2SQaw0V0LQGl2G0Ypn%2FxJReWkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJrhrQ5d4koagu13oq3AOnpdsmgSAReenq%2Boecky4CX%2B75Y6CCW65w9lB4gQr6d7SAXwOZRNQLJ2shZWukqEIcthiEuZKc5AC%2FqokQHaBm4Oa6TTrVvfGWvawxESFrXBUpRN0FviV7cZYgayoVwgaYCE%2FY%2B4woK1x84NHjG9LKUdIaOhx1z5Al2Jnka1i47rEpl%2BhJEI565TNsg9EwPPbAMKxMbVKuzZ3fY%2BExtfGEZq%2F36zIjf%2F0fW6X5svM94z3E5qawVOkt3WkFQ2UwQS1jp5cI1u%2FKPs20VIBPDj8JSz9yw2iIMqmTzFzwkJEAbLcGKhiOL2WfQH9QbiuTKGoP1bkbuKX8EGNxpeQuorSMnmJfT5d56GT6W20zIxU3G%2BdjDy0JHx2JPCcqYfBttFA%2F9tEHNa3lC8YtMCXp5OiOzcOaCPcPUNTM4kuNPyuPgB0UWs7mc47t9x1S9XphO92cgUiNXstA0nBYNx2BmUPj1IFxY2cnCIso7LhT2jVDYBnF%2F9qqtAyS4QD5TcRzMj5WB3EflkU%2B4wDJqd%2FGB12tI0mKcwKXM5QPf7X56MtAEKZyMg5iDWy2Vk5%2FBL%2B4LEalu82NgbYWyx%2FM8W2hWrA%2FdJ%2FlDzxp4Uz06ieiKr0nw9reDSkCt50pb2dwbTCJ6LO%2FBjqkAS9vFRRClkCCNFik7qq0JTeyn7B0dzOcgHZTXlp4SRUPo8PfLPRew3U%2FdkMYXGVzLIkGKsBmR%2FXdu7chON5mWeaXP82%2Fe7LKPyL1ar8ZjTLdG0tRsLcA8EKU14P3LsG8Icax3eaeZkmMOOYH5uDAB%2F8hMtlVm1Anx2hPb%2BPaPZ9mMdT2QnHrMsuJUhG823IApVzG%2B6i14T3UnFXwZNiLyMllybnD&X-Amz-Signature=a7a11f5a7791927b2096fcbda5c1fd9fa886bdc27234512968e43a7970f4eb34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2VS26X%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCqaG245I72SfVZhPx6qy8a7zclr7QKC2uCy6IYDxd7YgIhANXr%2Be9znqzjM8cfI5f2SQaw0V0LQGl2G0Ypn%2FxJReWkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJrhrQ5d4koagu13oq3AOnpdsmgSAReenq%2Boecky4CX%2B75Y6CCW65w9lB4gQr6d7SAXwOZRNQLJ2shZWukqEIcthiEuZKc5AC%2FqokQHaBm4Oa6TTrVvfGWvawxESFrXBUpRN0FviV7cZYgayoVwgaYCE%2FY%2B4woK1x84NHjG9LKUdIaOhx1z5Al2Jnka1i47rEpl%2BhJEI565TNsg9EwPPbAMKxMbVKuzZ3fY%2BExtfGEZq%2F36zIjf%2F0fW6X5svM94z3E5qawVOkt3WkFQ2UwQS1jp5cI1u%2FKPs20VIBPDj8JSz9yw2iIMqmTzFzwkJEAbLcGKhiOL2WfQH9QbiuTKGoP1bkbuKX8EGNxpeQuorSMnmJfT5d56GT6W20zIxU3G%2BdjDy0JHx2JPCcqYfBttFA%2F9tEHNa3lC8YtMCXp5OiOzcOaCPcPUNTM4kuNPyuPgB0UWs7mc47t9x1S9XphO92cgUiNXstA0nBYNx2BmUPj1IFxY2cnCIso7LhT2jVDYBnF%2F9qqtAyS4QD5TcRzMj5WB3EflkU%2B4wDJqd%2FGB12tI0mKcwKXM5QPf7X56MtAEKZyMg5iDWy2Vk5%2FBL%2B4LEalu82NgbYWyx%2FM8W2hWrA%2FdJ%2FlDzxp4Uz06ieiKr0nw9reDSkCt50pb2dwbTCJ6LO%2FBjqkAS9vFRRClkCCNFik7qq0JTeyn7B0dzOcgHZTXlp4SRUPo8PfLPRew3U%2FdkMYXGVzLIkGKsBmR%2FXdu7chON5mWeaXP82%2Fe7LKPyL1ar8ZjTLdG0tRsLcA8EKU14P3LsG8Icax3eaeZkmMOOYH5uDAB%2F8hMtlVm1Anx2hPb%2BPaPZ9mMdT2QnHrMsuJUhG823IApVzG%2B6i14T3UnFXwZNiLyMllybnD&X-Amz-Signature=d0fed0da7b660b32d6706d9ff950cc870765058de4c170a6958920389dcd7fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2VS26X%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCqaG245I72SfVZhPx6qy8a7zclr7QKC2uCy6IYDxd7YgIhANXr%2Be9znqzjM8cfI5f2SQaw0V0LQGl2G0Ypn%2FxJReWkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJrhrQ5d4koagu13oq3AOnpdsmgSAReenq%2Boecky4CX%2B75Y6CCW65w9lB4gQr6d7SAXwOZRNQLJ2shZWukqEIcthiEuZKc5AC%2FqokQHaBm4Oa6TTrVvfGWvawxESFrXBUpRN0FviV7cZYgayoVwgaYCE%2FY%2B4woK1x84NHjG9LKUdIaOhx1z5Al2Jnka1i47rEpl%2BhJEI565TNsg9EwPPbAMKxMbVKuzZ3fY%2BExtfGEZq%2F36zIjf%2F0fW6X5svM94z3E5qawVOkt3WkFQ2UwQS1jp5cI1u%2FKPs20VIBPDj8JSz9yw2iIMqmTzFzwkJEAbLcGKhiOL2WfQH9QbiuTKGoP1bkbuKX8EGNxpeQuorSMnmJfT5d56GT6W20zIxU3G%2BdjDy0JHx2JPCcqYfBttFA%2F9tEHNa3lC8YtMCXp5OiOzcOaCPcPUNTM4kuNPyuPgB0UWs7mc47t9x1S9XphO92cgUiNXstA0nBYNx2BmUPj1IFxY2cnCIso7LhT2jVDYBnF%2F9qqtAyS4QD5TcRzMj5WB3EflkU%2B4wDJqd%2FGB12tI0mKcwKXM5QPf7X56MtAEKZyMg5iDWy2Vk5%2FBL%2B4LEalu82NgbYWyx%2FM8W2hWrA%2FdJ%2FlDzxp4Uz06ieiKr0nw9reDSkCt50pb2dwbTCJ6LO%2FBjqkAS9vFRRClkCCNFik7qq0JTeyn7B0dzOcgHZTXlp4SRUPo8PfLPRew3U%2FdkMYXGVzLIkGKsBmR%2FXdu7chON5mWeaXP82%2Fe7LKPyL1ar8ZjTLdG0tRsLcA8EKU14P3LsG8Icax3eaeZkmMOOYH5uDAB%2F8hMtlVm1Anx2hPb%2BPaPZ9mMdT2QnHrMsuJUhG823IApVzG%2B6i14T3UnFXwZNiLyMllybnD&X-Amz-Signature=675db0c3c97057475c222c3b4d3e310742b3bcbaa595930e4f4865cd93f6e97f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2VS26X%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCqaG245I72SfVZhPx6qy8a7zclr7QKC2uCy6IYDxd7YgIhANXr%2Be9znqzjM8cfI5f2SQaw0V0LQGl2G0Ypn%2FxJReWkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJrhrQ5d4koagu13oq3AOnpdsmgSAReenq%2Boecky4CX%2B75Y6CCW65w9lB4gQr6d7SAXwOZRNQLJ2shZWukqEIcthiEuZKc5AC%2FqokQHaBm4Oa6TTrVvfGWvawxESFrXBUpRN0FviV7cZYgayoVwgaYCE%2FY%2B4woK1x84NHjG9LKUdIaOhx1z5Al2Jnka1i47rEpl%2BhJEI565TNsg9EwPPbAMKxMbVKuzZ3fY%2BExtfGEZq%2F36zIjf%2F0fW6X5svM94z3E5qawVOkt3WkFQ2UwQS1jp5cI1u%2FKPs20VIBPDj8JSz9yw2iIMqmTzFzwkJEAbLcGKhiOL2WfQH9QbiuTKGoP1bkbuKX8EGNxpeQuorSMnmJfT5d56GT6W20zIxU3G%2BdjDy0JHx2JPCcqYfBttFA%2F9tEHNa3lC8YtMCXp5OiOzcOaCPcPUNTM4kuNPyuPgB0UWs7mc47t9x1S9XphO92cgUiNXstA0nBYNx2BmUPj1IFxY2cnCIso7LhT2jVDYBnF%2F9qqtAyS4QD5TcRzMj5WB3EflkU%2B4wDJqd%2FGB12tI0mKcwKXM5QPf7X56MtAEKZyMg5iDWy2Vk5%2FBL%2B4LEalu82NgbYWyx%2FM8W2hWrA%2FdJ%2FlDzxp4Uz06ieiKr0nw9reDSkCt50pb2dwbTCJ6LO%2FBjqkAS9vFRRClkCCNFik7qq0JTeyn7B0dzOcgHZTXlp4SRUPo8PfLPRew3U%2FdkMYXGVzLIkGKsBmR%2FXdu7chON5mWeaXP82%2Fe7LKPyL1ar8ZjTLdG0tRsLcA8EKU14P3LsG8Icax3eaeZkmMOOYH5uDAB%2F8hMtlVm1Anx2hPb%2BPaPZ9mMdT2QnHrMsuJUhG823IApVzG%2B6i14T3UnFXwZNiLyMllybnD&X-Amz-Signature=7bb4e5435afe7aaaeb25428914e3411d19026942742aa88baba6fdedeab5b67a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2VS26X%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCqaG245I72SfVZhPx6qy8a7zclr7QKC2uCy6IYDxd7YgIhANXr%2Be9znqzjM8cfI5f2SQaw0V0LQGl2G0Ypn%2FxJReWkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJrhrQ5d4koagu13oq3AOnpdsmgSAReenq%2Boecky4CX%2B75Y6CCW65w9lB4gQr6d7SAXwOZRNQLJ2shZWukqEIcthiEuZKc5AC%2FqokQHaBm4Oa6TTrVvfGWvawxESFrXBUpRN0FviV7cZYgayoVwgaYCE%2FY%2B4woK1x84NHjG9LKUdIaOhx1z5Al2Jnka1i47rEpl%2BhJEI565TNsg9EwPPbAMKxMbVKuzZ3fY%2BExtfGEZq%2F36zIjf%2F0fW6X5svM94z3E5qawVOkt3WkFQ2UwQS1jp5cI1u%2FKPs20VIBPDj8JSz9yw2iIMqmTzFzwkJEAbLcGKhiOL2WfQH9QbiuTKGoP1bkbuKX8EGNxpeQuorSMnmJfT5d56GT6W20zIxU3G%2BdjDy0JHx2JPCcqYfBttFA%2F9tEHNa3lC8YtMCXp5OiOzcOaCPcPUNTM4kuNPyuPgB0UWs7mc47t9x1S9XphO92cgUiNXstA0nBYNx2BmUPj1IFxY2cnCIso7LhT2jVDYBnF%2F9qqtAyS4QD5TcRzMj5WB3EflkU%2B4wDJqd%2FGB12tI0mKcwKXM5QPf7X56MtAEKZyMg5iDWy2Vk5%2FBL%2B4LEalu82NgbYWyx%2FM8W2hWrA%2FdJ%2FlDzxp4Uz06ieiKr0nw9reDSkCt50pb2dwbTCJ6LO%2FBjqkAS9vFRRClkCCNFik7qq0JTeyn7B0dzOcgHZTXlp4SRUPo8PfLPRew3U%2FdkMYXGVzLIkGKsBmR%2FXdu7chON5mWeaXP82%2Fe7LKPyL1ar8ZjTLdG0tRsLcA8EKU14P3LsG8Icax3eaeZkmMOOYH5uDAB%2F8hMtlVm1Anx2hPb%2BPaPZ9mMdT2QnHrMsuJUhG823IApVzG%2B6i14T3UnFXwZNiLyMllybnD&X-Amz-Signature=3b8aa58001c4dd093c64ecdc2249aebd01dfcc7a898877b5b68f1ef8c2e6787e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2VS26X%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCqaG245I72SfVZhPx6qy8a7zclr7QKC2uCy6IYDxd7YgIhANXr%2Be9znqzjM8cfI5f2SQaw0V0LQGl2G0Ypn%2FxJReWkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJrhrQ5d4koagu13oq3AOnpdsmgSAReenq%2Boecky4CX%2B75Y6CCW65w9lB4gQr6d7SAXwOZRNQLJ2shZWukqEIcthiEuZKc5AC%2FqokQHaBm4Oa6TTrVvfGWvawxESFrXBUpRN0FviV7cZYgayoVwgaYCE%2FY%2B4woK1x84NHjG9LKUdIaOhx1z5Al2Jnka1i47rEpl%2BhJEI565TNsg9EwPPbAMKxMbVKuzZ3fY%2BExtfGEZq%2F36zIjf%2F0fW6X5svM94z3E5qawVOkt3WkFQ2UwQS1jp5cI1u%2FKPs20VIBPDj8JSz9yw2iIMqmTzFzwkJEAbLcGKhiOL2WfQH9QbiuTKGoP1bkbuKX8EGNxpeQuorSMnmJfT5d56GT6W20zIxU3G%2BdjDy0JHx2JPCcqYfBttFA%2F9tEHNa3lC8YtMCXp5OiOzcOaCPcPUNTM4kuNPyuPgB0UWs7mc47t9x1S9XphO92cgUiNXstA0nBYNx2BmUPj1IFxY2cnCIso7LhT2jVDYBnF%2F9qqtAyS4QD5TcRzMj5WB3EflkU%2B4wDJqd%2FGB12tI0mKcwKXM5QPf7X56MtAEKZyMg5iDWy2Vk5%2FBL%2B4LEalu82NgbYWyx%2FM8W2hWrA%2FdJ%2FlDzxp4Uz06ieiKr0nw9reDSkCt50pb2dwbTCJ6LO%2FBjqkAS9vFRRClkCCNFik7qq0JTeyn7B0dzOcgHZTXlp4SRUPo8PfLPRew3U%2FdkMYXGVzLIkGKsBmR%2FXdu7chON5mWeaXP82%2Fe7LKPyL1ar8ZjTLdG0tRsLcA8EKU14P3LsG8Icax3eaeZkmMOOYH5uDAB%2F8hMtlVm1Anx2hPb%2BPaPZ9mMdT2QnHrMsuJUhG823IApVzG%2B6i14T3UnFXwZNiLyMllybnD&X-Amz-Signature=c4e3abf213a845cad29c13492dc9f601de91301f59732ce5629d1d0599196098&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2VS26X%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCqaG245I72SfVZhPx6qy8a7zclr7QKC2uCy6IYDxd7YgIhANXr%2Be9znqzjM8cfI5f2SQaw0V0LQGl2G0Ypn%2FxJReWkKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJrhrQ5d4koagu13oq3AOnpdsmgSAReenq%2Boecky4CX%2B75Y6CCW65w9lB4gQr6d7SAXwOZRNQLJ2shZWukqEIcthiEuZKc5AC%2FqokQHaBm4Oa6TTrVvfGWvawxESFrXBUpRN0FviV7cZYgayoVwgaYCE%2FY%2B4woK1x84NHjG9LKUdIaOhx1z5Al2Jnka1i47rEpl%2BhJEI565TNsg9EwPPbAMKxMbVKuzZ3fY%2BExtfGEZq%2F36zIjf%2F0fW6X5svM94z3E5qawVOkt3WkFQ2UwQS1jp5cI1u%2FKPs20VIBPDj8JSz9yw2iIMqmTzFzwkJEAbLcGKhiOL2WfQH9QbiuTKGoP1bkbuKX8EGNxpeQuorSMnmJfT5d56GT6W20zIxU3G%2BdjDy0JHx2JPCcqYfBttFA%2F9tEHNa3lC8YtMCXp5OiOzcOaCPcPUNTM4kuNPyuPgB0UWs7mc47t9x1S9XphO92cgUiNXstA0nBYNx2BmUPj1IFxY2cnCIso7LhT2jVDYBnF%2F9qqtAyS4QD5TcRzMj5WB3EflkU%2B4wDJqd%2FGB12tI0mKcwKXM5QPf7X56MtAEKZyMg5iDWy2Vk5%2FBL%2B4LEalu82NgbYWyx%2FM8W2hWrA%2FdJ%2FlDzxp4Uz06ieiKr0nw9reDSkCt50pb2dwbTCJ6LO%2FBjqkAS9vFRRClkCCNFik7qq0JTeyn7B0dzOcgHZTXlp4SRUPo8PfLPRew3U%2FdkMYXGVzLIkGKsBmR%2FXdu7chON5mWeaXP82%2Fe7LKPyL1ar8ZjTLdG0tRsLcA8EKU14P3LsG8Icax3eaeZkmMOOYH5uDAB%2F8hMtlVm1Anx2hPb%2BPaPZ9mMdT2QnHrMsuJUhG823IApVzG%2B6i14T3UnFXwZNiLyMllybnD&X-Amz-Signature=513560af359a98b0bf8fc0c58eb16c8ae04fd16423284d80882f0414cdaaf21e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
