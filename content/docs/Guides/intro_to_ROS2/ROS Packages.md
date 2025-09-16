---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3N7UR5%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDzoUAc3TZ4g4QWsKm7Xx2%2Fknnf%2BYslOKmxzjzowChukwIhAPh5SJg4CkYHpJVaAuN8ST0dQaqJJp0cR9pD3YUWTwTUKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8%2Ba4SmZ31juYaLkq3AO%2BXhUIAWJ8QjW8OwF8wn6MvLwqmgPHk%2BmtuK6WBvBSHvLq7HGeJ5VpUSC015g1B1jDP9CF7UuGMSGFO86UAXgsN7Q66aIH3J%2BmPk1S9P8iD7QDKqInv0eimXsEiNy78pF6P6ecwT0UXwtGX6YIwxQ5OGcAgy05EbaYtrtyGORxr76xb5WMJuT5xiO27eK9bgLXdzpwuM04wclV%2BR7K9oLR8DF%2F%2Bpo3ewAeDn2RWuNDF5XZXUOcKKsS83z4sl1CxExLRbuMvvVB%2FnFmyfaijg2XtnyE9ovYwvsjKLDdy%2Fmzs3bAjD0WZi0huU4oUQZyJKFplPAuCdVd5MbM1vAsJXhIP4xmqWTDwOpa2H2k%2FlzN1PPW%2BEUKHt5JFCvlFJ3vHhqyJ8sb5HacjNG5F1aeaEUXwmi9HuVg04qCMPXpWmRwbj09ePOdrGjm%2B3ljKheMs%2FnnbVVIkuzy1k%2FIgyUPsh7Rubq4YjIvWkqJCtyjK0H9Zk%2BNa6JaWarXee4gN1Fu3H7jq5BUk%2B9smAGvMxsstDk16T%2FPqhLoZJYs6UV3%2FNXtInqqhTt8w4sDFD7t5PPjrxmsmiRbJ%2BxFup7vtruTTRn7KrLnKZjYdlh09VrspcCMGUbNxnleV3ihVfzWMTD87qLGBjqkAfBCBDQM%2B7QMi2TuhGm5uZle%2F1zhalrzBHqMuhl%2Fo6ELK924L13JqvcOfoArCvP4r6SV1%2F7Sa8UbR9GJdJSq4g06tLtVxueIbOM%2BGu3IwkEZqeJ1gocMiqR1%2FfRHV6EmLerWP11R%2FMFcrkEb2ua1ixijMcTN9%2Fa4psqsL6%2FOEPBdkR8jrtiQczzQMfXQXrvhBMaYD%2Fwz6CnkseKtXafMX4Pb9RRu&X-Amz-Signature=ed61ee3e57ab89862bf132c666d05cdcf2b18a10dd2139e864926bdbe2ee5e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3N7UR5%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDzoUAc3TZ4g4QWsKm7Xx2%2Fknnf%2BYslOKmxzjzowChukwIhAPh5SJg4CkYHpJVaAuN8ST0dQaqJJp0cR9pD3YUWTwTUKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8%2Ba4SmZ31juYaLkq3AO%2BXhUIAWJ8QjW8OwF8wn6MvLwqmgPHk%2BmtuK6WBvBSHvLq7HGeJ5VpUSC015g1B1jDP9CF7UuGMSGFO86UAXgsN7Q66aIH3J%2BmPk1S9P8iD7QDKqInv0eimXsEiNy78pF6P6ecwT0UXwtGX6YIwxQ5OGcAgy05EbaYtrtyGORxr76xb5WMJuT5xiO27eK9bgLXdzpwuM04wclV%2BR7K9oLR8DF%2F%2Bpo3ewAeDn2RWuNDF5XZXUOcKKsS83z4sl1CxExLRbuMvvVB%2FnFmyfaijg2XtnyE9ovYwvsjKLDdy%2Fmzs3bAjD0WZi0huU4oUQZyJKFplPAuCdVd5MbM1vAsJXhIP4xmqWTDwOpa2H2k%2FlzN1PPW%2BEUKHt5JFCvlFJ3vHhqyJ8sb5HacjNG5F1aeaEUXwmi9HuVg04qCMPXpWmRwbj09ePOdrGjm%2B3ljKheMs%2FnnbVVIkuzy1k%2FIgyUPsh7Rubq4YjIvWkqJCtyjK0H9Zk%2BNa6JaWarXee4gN1Fu3H7jq5BUk%2B9smAGvMxsstDk16T%2FPqhLoZJYs6UV3%2FNXtInqqhTt8w4sDFD7t5PPjrxmsmiRbJ%2BxFup7vtruTTRn7KrLnKZjYdlh09VrspcCMGUbNxnleV3ihVfzWMTD87qLGBjqkAfBCBDQM%2B7QMi2TuhGm5uZle%2F1zhalrzBHqMuhl%2Fo6ELK924L13JqvcOfoArCvP4r6SV1%2F7Sa8UbR9GJdJSq4g06tLtVxueIbOM%2BGu3IwkEZqeJ1gocMiqR1%2FfRHV6EmLerWP11R%2FMFcrkEb2ua1ixijMcTN9%2Fa4psqsL6%2FOEPBdkR8jrtiQczzQMfXQXrvhBMaYD%2Fwz6CnkseKtXafMX4Pb9RRu&X-Amz-Signature=929ad9c95f93ffc800d51c6ff312b608b1dcf80e1005e2e3b5459001d0554460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3N7UR5%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDzoUAc3TZ4g4QWsKm7Xx2%2Fknnf%2BYslOKmxzjzowChukwIhAPh5SJg4CkYHpJVaAuN8ST0dQaqJJp0cR9pD3YUWTwTUKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8%2Ba4SmZ31juYaLkq3AO%2BXhUIAWJ8QjW8OwF8wn6MvLwqmgPHk%2BmtuK6WBvBSHvLq7HGeJ5VpUSC015g1B1jDP9CF7UuGMSGFO86UAXgsN7Q66aIH3J%2BmPk1S9P8iD7QDKqInv0eimXsEiNy78pF6P6ecwT0UXwtGX6YIwxQ5OGcAgy05EbaYtrtyGORxr76xb5WMJuT5xiO27eK9bgLXdzpwuM04wclV%2BR7K9oLR8DF%2F%2Bpo3ewAeDn2RWuNDF5XZXUOcKKsS83z4sl1CxExLRbuMvvVB%2FnFmyfaijg2XtnyE9ovYwvsjKLDdy%2Fmzs3bAjD0WZi0huU4oUQZyJKFplPAuCdVd5MbM1vAsJXhIP4xmqWTDwOpa2H2k%2FlzN1PPW%2BEUKHt5JFCvlFJ3vHhqyJ8sb5HacjNG5F1aeaEUXwmi9HuVg04qCMPXpWmRwbj09ePOdrGjm%2B3ljKheMs%2FnnbVVIkuzy1k%2FIgyUPsh7Rubq4YjIvWkqJCtyjK0H9Zk%2BNa6JaWarXee4gN1Fu3H7jq5BUk%2B9smAGvMxsstDk16T%2FPqhLoZJYs6UV3%2FNXtInqqhTt8w4sDFD7t5PPjrxmsmiRbJ%2BxFup7vtruTTRn7KrLnKZjYdlh09VrspcCMGUbNxnleV3ihVfzWMTD87qLGBjqkAfBCBDQM%2B7QMi2TuhGm5uZle%2F1zhalrzBHqMuhl%2Fo6ELK924L13JqvcOfoArCvP4r6SV1%2F7Sa8UbR9GJdJSq4g06tLtVxueIbOM%2BGu3IwkEZqeJ1gocMiqR1%2FfRHV6EmLerWP11R%2FMFcrkEb2ua1ixijMcTN9%2Fa4psqsL6%2FOEPBdkR8jrtiQczzQMfXQXrvhBMaYD%2Fwz6CnkseKtXafMX4Pb9RRu&X-Amz-Signature=44f8df9c45df8eb8ca62b7c6b945f739337e965b1cdef6b2fbd91cd6fec21ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3N7UR5%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDzoUAc3TZ4g4QWsKm7Xx2%2Fknnf%2BYslOKmxzjzowChukwIhAPh5SJg4CkYHpJVaAuN8ST0dQaqJJp0cR9pD3YUWTwTUKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8%2Ba4SmZ31juYaLkq3AO%2BXhUIAWJ8QjW8OwF8wn6MvLwqmgPHk%2BmtuK6WBvBSHvLq7HGeJ5VpUSC015g1B1jDP9CF7UuGMSGFO86UAXgsN7Q66aIH3J%2BmPk1S9P8iD7QDKqInv0eimXsEiNy78pF6P6ecwT0UXwtGX6YIwxQ5OGcAgy05EbaYtrtyGORxr76xb5WMJuT5xiO27eK9bgLXdzpwuM04wclV%2BR7K9oLR8DF%2F%2Bpo3ewAeDn2RWuNDF5XZXUOcKKsS83z4sl1CxExLRbuMvvVB%2FnFmyfaijg2XtnyE9ovYwvsjKLDdy%2Fmzs3bAjD0WZi0huU4oUQZyJKFplPAuCdVd5MbM1vAsJXhIP4xmqWTDwOpa2H2k%2FlzN1PPW%2BEUKHt5JFCvlFJ3vHhqyJ8sb5HacjNG5F1aeaEUXwmi9HuVg04qCMPXpWmRwbj09ePOdrGjm%2B3ljKheMs%2FnnbVVIkuzy1k%2FIgyUPsh7Rubq4YjIvWkqJCtyjK0H9Zk%2BNa6JaWarXee4gN1Fu3H7jq5BUk%2B9smAGvMxsstDk16T%2FPqhLoZJYs6UV3%2FNXtInqqhTt8w4sDFD7t5PPjrxmsmiRbJ%2BxFup7vtruTTRn7KrLnKZjYdlh09VrspcCMGUbNxnleV3ihVfzWMTD87qLGBjqkAfBCBDQM%2B7QMi2TuhGm5uZle%2F1zhalrzBHqMuhl%2Fo6ELK924L13JqvcOfoArCvP4r6SV1%2F7Sa8UbR9GJdJSq4g06tLtVxueIbOM%2BGu3IwkEZqeJ1gocMiqR1%2FfRHV6EmLerWP11R%2FMFcrkEb2ua1ixijMcTN9%2Fa4psqsL6%2FOEPBdkR8jrtiQczzQMfXQXrvhBMaYD%2Fwz6CnkseKtXafMX4Pb9RRu&X-Amz-Signature=2eed53b302f278fcdc2f0dc154fde0caf5a2964d909b7aaeb93f95344e69c13d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3N7UR5%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDzoUAc3TZ4g4QWsKm7Xx2%2Fknnf%2BYslOKmxzjzowChukwIhAPh5SJg4CkYHpJVaAuN8ST0dQaqJJp0cR9pD3YUWTwTUKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8%2Ba4SmZ31juYaLkq3AO%2BXhUIAWJ8QjW8OwF8wn6MvLwqmgPHk%2BmtuK6WBvBSHvLq7HGeJ5VpUSC015g1B1jDP9CF7UuGMSGFO86UAXgsN7Q66aIH3J%2BmPk1S9P8iD7QDKqInv0eimXsEiNy78pF6P6ecwT0UXwtGX6YIwxQ5OGcAgy05EbaYtrtyGORxr76xb5WMJuT5xiO27eK9bgLXdzpwuM04wclV%2BR7K9oLR8DF%2F%2Bpo3ewAeDn2RWuNDF5XZXUOcKKsS83z4sl1CxExLRbuMvvVB%2FnFmyfaijg2XtnyE9ovYwvsjKLDdy%2Fmzs3bAjD0WZi0huU4oUQZyJKFplPAuCdVd5MbM1vAsJXhIP4xmqWTDwOpa2H2k%2FlzN1PPW%2BEUKHt5JFCvlFJ3vHhqyJ8sb5HacjNG5F1aeaEUXwmi9HuVg04qCMPXpWmRwbj09ePOdrGjm%2B3ljKheMs%2FnnbVVIkuzy1k%2FIgyUPsh7Rubq4YjIvWkqJCtyjK0H9Zk%2BNa6JaWarXee4gN1Fu3H7jq5BUk%2B9smAGvMxsstDk16T%2FPqhLoZJYs6UV3%2FNXtInqqhTt8w4sDFD7t5PPjrxmsmiRbJ%2BxFup7vtruTTRn7KrLnKZjYdlh09VrspcCMGUbNxnleV3ihVfzWMTD87qLGBjqkAfBCBDQM%2B7QMi2TuhGm5uZle%2F1zhalrzBHqMuhl%2Fo6ELK924L13JqvcOfoArCvP4r6SV1%2F7Sa8UbR9GJdJSq4g06tLtVxueIbOM%2BGu3IwkEZqeJ1gocMiqR1%2FfRHV6EmLerWP11R%2FMFcrkEb2ua1ixijMcTN9%2Fa4psqsL6%2FOEPBdkR8jrtiQczzQMfXQXrvhBMaYD%2Fwz6CnkseKtXafMX4Pb9RRu&X-Amz-Signature=58d5b9788325aac899a40f17340f166f903c3c37399c35e221857dc221f77497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3N7UR5%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDzoUAc3TZ4g4QWsKm7Xx2%2Fknnf%2BYslOKmxzjzowChukwIhAPh5SJg4CkYHpJVaAuN8ST0dQaqJJp0cR9pD3YUWTwTUKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8%2Ba4SmZ31juYaLkq3AO%2BXhUIAWJ8QjW8OwF8wn6MvLwqmgPHk%2BmtuK6WBvBSHvLq7HGeJ5VpUSC015g1B1jDP9CF7UuGMSGFO86UAXgsN7Q66aIH3J%2BmPk1S9P8iD7QDKqInv0eimXsEiNy78pF6P6ecwT0UXwtGX6YIwxQ5OGcAgy05EbaYtrtyGORxr76xb5WMJuT5xiO27eK9bgLXdzpwuM04wclV%2BR7K9oLR8DF%2F%2Bpo3ewAeDn2RWuNDF5XZXUOcKKsS83z4sl1CxExLRbuMvvVB%2FnFmyfaijg2XtnyE9ovYwvsjKLDdy%2Fmzs3bAjD0WZi0huU4oUQZyJKFplPAuCdVd5MbM1vAsJXhIP4xmqWTDwOpa2H2k%2FlzN1PPW%2BEUKHt5JFCvlFJ3vHhqyJ8sb5HacjNG5F1aeaEUXwmi9HuVg04qCMPXpWmRwbj09ePOdrGjm%2B3ljKheMs%2FnnbVVIkuzy1k%2FIgyUPsh7Rubq4YjIvWkqJCtyjK0H9Zk%2BNa6JaWarXee4gN1Fu3H7jq5BUk%2B9smAGvMxsstDk16T%2FPqhLoZJYs6UV3%2FNXtInqqhTt8w4sDFD7t5PPjrxmsmiRbJ%2BxFup7vtruTTRn7KrLnKZjYdlh09VrspcCMGUbNxnleV3ihVfzWMTD87qLGBjqkAfBCBDQM%2B7QMi2TuhGm5uZle%2F1zhalrzBHqMuhl%2Fo6ELK924L13JqvcOfoArCvP4r6SV1%2F7Sa8UbR9GJdJSq4g06tLtVxueIbOM%2BGu3IwkEZqeJ1gocMiqR1%2FfRHV6EmLerWP11R%2FMFcrkEb2ua1ixijMcTN9%2Fa4psqsL6%2FOEPBdkR8jrtiQczzQMfXQXrvhBMaYD%2Fwz6CnkseKtXafMX4Pb9RRu&X-Amz-Signature=5c0e3315bd0af52c64f4da7538c8bbe13a2ef0c974faea3ef7b61ab60984f00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3N7UR5%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDzoUAc3TZ4g4QWsKm7Xx2%2Fknnf%2BYslOKmxzjzowChukwIhAPh5SJg4CkYHpJVaAuN8ST0dQaqJJp0cR9pD3YUWTwTUKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp8%2Ba4SmZ31juYaLkq3AO%2BXhUIAWJ8QjW8OwF8wn6MvLwqmgPHk%2BmtuK6WBvBSHvLq7HGeJ5VpUSC015g1B1jDP9CF7UuGMSGFO86UAXgsN7Q66aIH3J%2BmPk1S9P8iD7QDKqInv0eimXsEiNy78pF6P6ecwT0UXwtGX6YIwxQ5OGcAgy05EbaYtrtyGORxr76xb5WMJuT5xiO27eK9bgLXdzpwuM04wclV%2BR7K9oLR8DF%2F%2Bpo3ewAeDn2RWuNDF5XZXUOcKKsS83z4sl1CxExLRbuMvvVB%2FnFmyfaijg2XtnyE9ovYwvsjKLDdy%2Fmzs3bAjD0WZi0huU4oUQZyJKFplPAuCdVd5MbM1vAsJXhIP4xmqWTDwOpa2H2k%2FlzN1PPW%2BEUKHt5JFCvlFJ3vHhqyJ8sb5HacjNG5F1aeaEUXwmi9HuVg04qCMPXpWmRwbj09ePOdrGjm%2B3ljKheMs%2FnnbVVIkuzy1k%2FIgyUPsh7Rubq4YjIvWkqJCtyjK0H9Zk%2BNa6JaWarXee4gN1Fu3H7jq5BUk%2B9smAGvMxsstDk16T%2FPqhLoZJYs6UV3%2FNXtInqqhTt8w4sDFD7t5PPjrxmsmiRbJ%2BxFup7vtruTTRn7KrLnKZjYdlh09VrspcCMGUbNxnleV3ihVfzWMTD87qLGBjqkAfBCBDQM%2B7QMi2TuhGm5uZle%2F1zhalrzBHqMuhl%2Fo6ELK924L13JqvcOfoArCvP4r6SV1%2F7Sa8UbR9GJdJSq4g06tLtVxueIbOM%2BGu3IwkEZqeJ1gocMiqR1%2FfRHV6EmLerWP11R%2FMFcrkEb2ua1ixijMcTN9%2Fa4psqsL6%2FOEPBdkR8jrtiQczzQMfXQXrvhBMaYD%2Fwz6CnkseKtXafMX4Pb9RRu&X-Amz-Signature=bb8fd1c7e782c81a18bc3cca11671de8f651c542690bc109479334bdd45d5233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
