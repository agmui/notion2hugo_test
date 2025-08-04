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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFE33PJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFkslsIaC8Ls%2BW%2F6ljAq7vBMcJwPz2urBWy%2BzPZvjeJDAiEA0bnqlqoztui4mNUuCT4qqhOHnMFrEYnpyVhxPBtZ%2F6cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFw9cgYYRh5gyRGlZCrcA2LKG4Gn%2FEOm4iuhHsOZ%2BMK92972EzLwevuGMDio6OInvGsmZMTo%2FBpyhXKiIfP4mnPwr%2BJG8bjH04ryjStvvFzB0qQbnZW9cbbR9iT8Ek9slpfPzA4w9ac2duJhl5xFrsraZ%2FQIdfbrKHIWyFdO%2ByMF2CgQr%2Bcu%2FANqxMOww158RLY%2FBixWGfJ9pUbzGsu5MntHgESfzb5JuL%2BIy5oLUOL3c%2Bu%2B18gtXk5yHO2axvd5pzKEjvVGYwbgnvadjX6mjc1i8eY9AnDUZ39uM6Y73BQXr%2Fl35u21gByJOMeswjAtGeXukaYrgQjIZHau%2FhaAurGprX62Brnugb7Boj8atsPHkudUPOsBu5SJ2qRZ73EEhOnrx7U9ga1vOgukzwy%2FJhxIZufuu1wHWLDM7i3OG%2Bn4P60lKnDxu%2Bp9Z0s8xXXoRpK7Yo9b1rLtZ1yjLvyI6ZJjRh6wOpwOd3iA%2F6iRFfKZKfXYecigRGh34oCE70vrd6JTL2WWPwxMkjuFLNpFcJkO%2Fgm6JL62ZBIdqgoA4BQESJNgQvqyjBhLwL5BsRMgQ9msyWbg5Zqw1Nc6T9d%2FsYHlC%2BztapmzNpe7HfeLHlycmhlU0Vast0x%2FnlzDjT0b21oqP2A%2B0mGh%2BXDiMPjowMQGOqUB0CzL%2BXlqXkxdk3bG6gBKf29bBhiXBO433OJiBKesoQYB5g6ZGq58IK2%2B9lJtKWnpocz3QdPr%2Fnsgqgm2qIS1poKaATuKtw6a7yom5bIXoXLJPHrnxDk3cI1cl2VwH5dq79Gj3ttHFQs%2BhDx2TUc%2BqfnXO4iTkI3BNZl9jZFj4StB14R326%2FipscY3V8MSWL6zlVFfcZ06VSPSBVSAGQTXK57l4v4&X-Amz-Signature=e5a0ab7857e7ac2791883eaddbeb4d60a9795763f5727031718a5e6e406a1302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFE33PJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFkslsIaC8Ls%2BW%2F6ljAq7vBMcJwPz2urBWy%2BzPZvjeJDAiEA0bnqlqoztui4mNUuCT4qqhOHnMFrEYnpyVhxPBtZ%2F6cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFw9cgYYRh5gyRGlZCrcA2LKG4Gn%2FEOm4iuhHsOZ%2BMK92972EzLwevuGMDio6OInvGsmZMTo%2FBpyhXKiIfP4mnPwr%2BJG8bjH04ryjStvvFzB0qQbnZW9cbbR9iT8Ek9slpfPzA4w9ac2duJhl5xFrsraZ%2FQIdfbrKHIWyFdO%2ByMF2CgQr%2Bcu%2FANqxMOww158RLY%2FBixWGfJ9pUbzGsu5MntHgESfzb5JuL%2BIy5oLUOL3c%2Bu%2B18gtXk5yHO2axvd5pzKEjvVGYwbgnvadjX6mjc1i8eY9AnDUZ39uM6Y73BQXr%2Fl35u21gByJOMeswjAtGeXukaYrgQjIZHau%2FhaAurGprX62Brnugb7Boj8atsPHkudUPOsBu5SJ2qRZ73EEhOnrx7U9ga1vOgukzwy%2FJhxIZufuu1wHWLDM7i3OG%2Bn4P60lKnDxu%2Bp9Z0s8xXXoRpK7Yo9b1rLtZ1yjLvyI6ZJjRh6wOpwOd3iA%2F6iRFfKZKfXYecigRGh34oCE70vrd6JTL2WWPwxMkjuFLNpFcJkO%2Fgm6JL62ZBIdqgoA4BQESJNgQvqyjBhLwL5BsRMgQ9msyWbg5Zqw1Nc6T9d%2FsYHlC%2BztapmzNpe7HfeLHlycmhlU0Vast0x%2FnlzDjT0b21oqP2A%2B0mGh%2BXDiMPjowMQGOqUB0CzL%2BXlqXkxdk3bG6gBKf29bBhiXBO433OJiBKesoQYB5g6ZGq58IK2%2B9lJtKWnpocz3QdPr%2Fnsgqgm2qIS1poKaATuKtw6a7yom5bIXoXLJPHrnxDk3cI1cl2VwH5dq79Gj3ttHFQs%2BhDx2TUc%2BqfnXO4iTkI3BNZl9jZFj4StB14R326%2FipscY3V8MSWL6zlVFfcZ06VSPSBVSAGQTXK57l4v4&X-Amz-Signature=b43c43bb8c1625ebb5ef5ce6e5530823838116c9752c54ceea15c53cb312aad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFE33PJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFkslsIaC8Ls%2BW%2F6ljAq7vBMcJwPz2urBWy%2BzPZvjeJDAiEA0bnqlqoztui4mNUuCT4qqhOHnMFrEYnpyVhxPBtZ%2F6cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFw9cgYYRh5gyRGlZCrcA2LKG4Gn%2FEOm4iuhHsOZ%2BMK92972EzLwevuGMDio6OInvGsmZMTo%2FBpyhXKiIfP4mnPwr%2BJG8bjH04ryjStvvFzB0qQbnZW9cbbR9iT8Ek9slpfPzA4w9ac2duJhl5xFrsraZ%2FQIdfbrKHIWyFdO%2ByMF2CgQr%2Bcu%2FANqxMOww158RLY%2FBixWGfJ9pUbzGsu5MntHgESfzb5JuL%2BIy5oLUOL3c%2Bu%2B18gtXk5yHO2axvd5pzKEjvVGYwbgnvadjX6mjc1i8eY9AnDUZ39uM6Y73BQXr%2Fl35u21gByJOMeswjAtGeXukaYrgQjIZHau%2FhaAurGprX62Brnugb7Boj8atsPHkudUPOsBu5SJ2qRZ73EEhOnrx7U9ga1vOgukzwy%2FJhxIZufuu1wHWLDM7i3OG%2Bn4P60lKnDxu%2Bp9Z0s8xXXoRpK7Yo9b1rLtZ1yjLvyI6ZJjRh6wOpwOd3iA%2F6iRFfKZKfXYecigRGh34oCE70vrd6JTL2WWPwxMkjuFLNpFcJkO%2Fgm6JL62ZBIdqgoA4BQESJNgQvqyjBhLwL5BsRMgQ9msyWbg5Zqw1Nc6T9d%2FsYHlC%2BztapmzNpe7HfeLHlycmhlU0Vast0x%2FnlzDjT0b21oqP2A%2B0mGh%2BXDiMPjowMQGOqUB0CzL%2BXlqXkxdk3bG6gBKf29bBhiXBO433OJiBKesoQYB5g6ZGq58IK2%2B9lJtKWnpocz3QdPr%2Fnsgqgm2qIS1poKaATuKtw6a7yom5bIXoXLJPHrnxDk3cI1cl2VwH5dq79Gj3ttHFQs%2BhDx2TUc%2BqfnXO4iTkI3BNZl9jZFj4StB14R326%2FipscY3V8MSWL6zlVFfcZ06VSPSBVSAGQTXK57l4v4&X-Amz-Signature=ce68f48ce5ca52cb5ef73735570d3e526afa0bf3948b83f24c687a8f573f072c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFE33PJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFkslsIaC8Ls%2BW%2F6ljAq7vBMcJwPz2urBWy%2BzPZvjeJDAiEA0bnqlqoztui4mNUuCT4qqhOHnMFrEYnpyVhxPBtZ%2F6cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFw9cgYYRh5gyRGlZCrcA2LKG4Gn%2FEOm4iuhHsOZ%2BMK92972EzLwevuGMDio6OInvGsmZMTo%2FBpyhXKiIfP4mnPwr%2BJG8bjH04ryjStvvFzB0qQbnZW9cbbR9iT8Ek9slpfPzA4w9ac2duJhl5xFrsraZ%2FQIdfbrKHIWyFdO%2ByMF2CgQr%2Bcu%2FANqxMOww158RLY%2FBixWGfJ9pUbzGsu5MntHgESfzb5JuL%2BIy5oLUOL3c%2Bu%2B18gtXk5yHO2axvd5pzKEjvVGYwbgnvadjX6mjc1i8eY9AnDUZ39uM6Y73BQXr%2Fl35u21gByJOMeswjAtGeXukaYrgQjIZHau%2FhaAurGprX62Brnugb7Boj8atsPHkudUPOsBu5SJ2qRZ73EEhOnrx7U9ga1vOgukzwy%2FJhxIZufuu1wHWLDM7i3OG%2Bn4P60lKnDxu%2Bp9Z0s8xXXoRpK7Yo9b1rLtZ1yjLvyI6ZJjRh6wOpwOd3iA%2F6iRFfKZKfXYecigRGh34oCE70vrd6JTL2WWPwxMkjuFLNpFcJkO%2Fgm6JL62ZBIdqgoA4BQESJNgQvqyjBhLwL5BsRMgQ9msyWbg5Zqw1Nc6T9d%2FsYHlC%2BztapmzNpe7HfeLHlycmhlU0Vast0x%2FnlzDjT0b21oqP2A%2B0mGh%2BXDiMPjowMQGOqUB0CzL%2BXlqXkxdk3bG6gBKf29bBhiXBO433OJiBKesoQYB5g6ZGq58IK2%2B9lJtKWnpocz3QdPr%2Fnsgqgm2qIS1poKaATuKtw6a7yom5bIXoXLJPHrnxDk3cI1cl2VwH5dq79Gj3ttHFQs%2BhDx2TUc%2BqfnXO4iTkI3BNZl9jZFj4StB14R326%2FipscY3V8MSWL6zlVFfcZ06VSPSBVSAGQTXK57l4v4&X-Amz-Signature=15d6321a7609bc4a5b09e82e6bc0ab1df669788b761167a9dc50f2ebf3a8c1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFE33PJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFkslsIaC8Ls%2BW%2F6ljAq7vBMcJwPz2urBWy%2BzPZvjeJDAiEA0bnqlqoztui4mNUuCT4qqhOHnMFrEYnpyVhxPBtZ%2F6cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFw9cgYYRh5gyRGlZCrcA2LKG4Gn%2FEOm4iuhHsOZ%2BMK92972EzLwevuGMDio6OInvGsmZMTo%2FBpyhXKiIfP4mnPwr%2BJG8bjH04ryjStvvFzB0qQbnZW9cbbR9iT8Ek9slpfPzA4w9ac2duJhl5xFrsraZ%2FQIdfbrKHIWyFdO%2ByMF2CgQr%2Bcu%2FANqxMOww158RLY%2FBixWGfJ9pUbzGsu5MntHgESfzb5JuL%2BIy5oLUOL3c%2Bu%2B18gtXk5yHO2axvd5pzKEjvVGYwbgnvadjX6mjc1i8eY9AnDUZ39uM6Y73BQXr%2Fl35u21gByJOMeswjAtGeXukaYrgQjIZHau%2FhaAurGprX62Brnugb7Boj8atsPHkudUPOsBu5SJ2qRZ73EEhOnrx7U9ga1vOgukzwy%2FJhxIZufuu1wHWLDM7i3OG%2Bn4P60lKnDxu%2Bp9Z0s8xXXoRpK7Yo9b1rLtZ1yjLvyI6ZJjRh6wOpwOd3iA%2F6iRFfKZKfXYecigRGh34oCE70vrd6JTL2WWPwxMkjuFLNpFcJkO%2Fgm6JL62ZBIdqgoA4BQESJNgQvqyjBhLwL5BsRMgQ9msyWbg5Zqw1Nc6T9d%2FsYHlC%2BztapmzNpe7HfeLHlycmhlU0Vast0x%2FnlzDjT0b21oqP2A%2B0mGh%2BXDiMPjowMQGOqUB0CzL%2BXlqXkxdk3bG6gBKf29bBhiXBO433OJiBKesoQYB5g6ZGq58IK2%2B9lJtKWnpocz3QdPr%2Fnsgqgm2qIS1poKaATuKtw6a7yom5bIXoXLJPHrnxDk3cI1cl2VwH5dq79Gj3ttHFQs%2BhDx2TUc%2BqfnXO4iTkI3BNZl9jZFj4StB14R326%2FipscY3V8MSWL6zlVFfcZ06VSPSBVSAGQTXK57l4v4&X-Amz-Signature=4e19468c53997af37a6e5040882a7e11d34e05a7ee38e395cb050c731995a0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFE33PJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFkslsIaC8Ls%2BW%2F6ljAq7vBMcJwPz2urBWy%2BzPZvjeJDAiEA0bnqlqoztui4mNUuCT4qqhOHnMFrEYnpyVhxPBtZ%2F6cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFw9cgYYRh5gyRGlZCrcA2LKG4Gn%2FEOm4iuhHsOZ%2BMK92972EzLwevuGMDio6OInvGsmZMTo%2FBpyhXKiIfP4mnPwr%2BJG8bjH04ryjStvvFzB0qQbnZW9cbbR9iT8Ek9slpfPzA4w9ac2duJhl5xFrsraZ%2FQIdfbrKHIWyFdO%2ByMF2CgQr%2Bcu%2FANqxMOww158RLY%2FBixWGfJ9pUbzGsu5MntHgESfzb5JuL%2BIy5oLUOL3c%2Bu%2B18gtXk5yHO2axvd5pzKEjvVGYwbgnvadjX6mjc1i8eY9AnDUZ39uM6Y73BQXr%2Fl35u21gByJOMeswjAtGeXukaYrgQjIZHau%2FhaAurGprX62Brnugb7Boj8atsPHkudUPOsBu5SJ2qRZ73EEhOnrx7U9ga1vOgukzwy%2FJhxIZufuu1wHWLDM7i3OG%2Bn4P60lKnDxu%2Bp9Z0s8xXXoRpK7Yo9b1rLtZ1yjLvyI6ZJjRh6wOpwOd3iA%2F6iRFfKZKfXYecigRGh34oCE70vrd6JTL2WWPwxMkjuFLNpFcJkO%2Fgm6JL62ZBIdqgoA4BQESJNgQvqyjBhLwL5BsRMgQ9msyWbg5Zqw1Nc6T9d%2FsYHlC%2BztapmzNpe7HfeLHlycmhlU0Vast0x%2FnlzDjT0b21oqP2A%2B0mGh%2BXDiMPjowMQGOqUB0CzL%2BXlqXkxdk3bG6gBKf29bBhiXBO433OJiBKesoQYB5g6ZGq58IK2%2B9lJtKWnpocz3QdPr%2Fnsgqgm2qIS1poKaATuKtw6a7yom5bIXoXLJPHrnxDk3cI1cl2VwH5dq79Gj3ttHFQs%2BhDx2TUc%2BqfnXO4iTkI3BNZl9jZFj4StB14R326%2FipscY3V8MSWL6zlVFfcZ06VSPSBVSAGQTXK57l4v4&X-Amz-Signature=724ac5c997fb40ea1f5a0016725db2f4e06f1794d34f2d865775b98ddae0a1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZFE33PJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T052901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFkslsIaC8Ls%2BW%2F6ljAq7vBMcJwPz2urBWy%2BzPZvjeJDAiEA0bnqlqoztui4mNUuCT4qqhOHnMFrEYnpyVhxPBtZ%2F6cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFw9cgYYRh5gyRGlZCrcA2LKG4Gn%2FEOm4iuhHsOZ%2BMK92972EzLwevuGMDio6OInvGsmZMTo%2FBpyhXKiIfP4mnPwr%2BJG8bjH04ryjStvvFzB0qQbnZW9cbbR9iT8Ek9slpfPzA4w9ac2duJhl5xFrsraZ%2FQIdfbrKHIWyFdO%2ByMF2CgQr%2Bcu%2FANqxMOww158RLY%2FBixWGfJ9pUbzGsu5MntHgESfzb5JuL%2BIy5oLUOL3c%2Bu%2B18gtXk5yHO2axvd5pzKEjvVGYwbgnvadjX6mjc1i8eY9AnDUZ39uM6Y73BQXr%2Fl35u21gByJOMeswjAtGeXukaYrgQjIZHau%2FhaAurGprX62Brnugb7Boj8atsPHkudUPOsBu5SJ2qRZ73EEhOnrx7U9ga1vOgukzwy%2FJhxIZufuu1wHWLDM7i3OG%2Bn4P60lKnDxu%2Bp9Z0s8xXXoRpK7Yo9b1rLtZ1yjLvyI6ZJjRh6wOpwOd3iA%2F6iRFfKZKfXYecigRGh34oCE70vrd6JTL2WWPwxMkjuFLNpFcJkO%2Fgm6JL62ZBIdqgoA4BQESJNgQvqyjBhLwL5BsRMgQ9msyWbg5Zqw1Nc6T9d%2FsYHlC%2BztapmzNpe7HfeLHlycmhlU0Vast0x%2FnlzDjT0b21oqP2A%2B0mGh%2BXDiMPjowMQGOqUB0CzL%2BXlqXkxdk3bG6gBKf29bBhiXBO433OJiBKesoQYB5g6ZGq58IK2%2B9lJtKWnpocz3QdPr%2Fnsgqgm2qIS1poKaATuKtw6a7yom5bIXoXLJPHrnxDk3cI1cl2VwH5dq79Gj3ttHFQs%2BhDx2TUc%2BqfnXO4iTkI3BNZl9jZFj4StB14R326%2FipscY3V8MSWL6zlVFfcZ06VSPSBVSAGQTXK57l4v4&X-Amz-Signature=cfa18be08fdf1a9ff471990c00e881d7490cef58cf19143e8f0495d7c6d13dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
