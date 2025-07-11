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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNIS66H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf0wS7e%2FY4l99XUUF4TQplWxpnQIoH3czfTi6AAB9rTgIhANB1lHfNj1Wh0m9yk80f%2F21GgUCK6hGunz%2FsyWwYTxV7KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkjXfedXBDc9vaYoq3AOJlan1%2FF6kJKmkzLadCEzeWxYJwYoGqOyRelPp6%2Bm39nFrbim4AAMCGZBjAfdZM8C95W51xXvolPZ3tzwzxeoMOP3ttBfSAa7d35jEMJAqmeXoGLNLhgtDlQF7x9nKM7MuGb3L0tlie0t5GAnxOvmlusaSQtWcvpSrWzkLwu0KBNbbqRzhNNDdUBR1IlGYL3VIIwpVQ1RPaoCQ3zpCD%2BSTyLvlYnjZmhmiufqemGAqbxwtVOtFbvV93jlHXGWFHYHfsg%2BkTSPMar5VUoOvfhqA1%2BlJGHyxyc%2B%2BXXebcEzXlwvc4nIjnXCdSvicIiWOaTbqpLBpK0jhpOj2cSPtNJ4GXMWEDl1m92pDVycR%2FT6AvTEHYEv3x4RvUPVqo2e1OM3pz7zZiHoZgAaAcfHo%2Bvt5fqDPC3WJNOk8TYYkyusKIEUqVwOjBaoYf04AArr3zkgjsk8gHlnK3v01yaazGHD4xBl6pKH3WzA%2FXg3YTWZw%2BLl0s6PWDp7qDCJu6RGIk8TkBBq2DvKg%2FUypWlK%2F6bixgEji1zmuO%2FjEawAvjfHF5Z0XdCr7iva2CPSoeTULHBqI0zzEzW6PFgOgloewVl3OTGF4MIMqaHZVplh3WhqOMCiW1lX5Y4kjbCkbOTCcpsLDBjqkAS61tBjDWyiWrWBAjSBFZSwMK0BQ6da7aMbF5Vg6sOMapV9C22EiGr%2Bh33LoPt3tzGZ58qvoeVcKnm7hW45rd3fMcyUDpzTXt2NH9DTDfHZcnysUchhxGzxcKum2JSuDvV3IzDtnIJPF%2BsMaS8tEdpWhVNaHNL8P35IVebsQk0SDMyGP0e0u4ApH46rt%2F4H9mdg2WI6uycwQGACO8IESZav6lGE4&X-Amz-Signature=3c839ebbc448af5def601cd1c566fdbfc7636bff38e6576b93c16e58abc69384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNIS66H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf0wS7e%2FY4l99XUUF4TQplWxpnQIoH3czfTi6AAB9rTgIhANB1lHfNj1Wh0m9yk80f%2F21GgUCK6hGunz%2FsyWwYTxV7KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkjXfedXBDc9vaYoq3AOJlan1%2FF6kJKmkzLadCEzeWxYJwYoGqOyRelPp6%2Bm39nFrbim4AAMCGZBjAfdZM8C95W51xXvolPZ3tzwzxeoMOP3ttBfSAa7d35jEMJAqmeXoGLNLhgtDlQF7x9nKM7MuGb3L0tlie0t5GAnxOvmlusaSQtWcvpSrWzkLwu0KBNbbqRzhNNDdUBR1IlGYL3VIIwpVQ1RPaoCQ3zpCD%2BSTyLvlYnjZmhmiufqemGAqbxwtVOtFbvV93jlHXGWFHYHfsg%2BkTSPMar5VUoOvfhqA1%2BlJGHyxyc%2B%2BXXebcEzXlwvc4nIjnXCdSvicIiWOaTbqpLBpK0jhpOj2cSPtNJ4GXMWEDl1m92pDVycR%2FT6AvTEHYEv3x4RvUPVqo2e1OM3pz7zZiHoZgAaAcfHo%2Bvt5fqDPC3WJNOk8TYYkyusKIEUqVwOjBaoYf04AArr3zkgjsk8gHlnK3v01yaazGHD4xBl6pKH3WzA%2FXg3YTWZw%2BLl0s6PWDp7qDCJu6RGIk8TkBBq2DvKg%2FUypWlK%2F6bixgEji1zmuO%2FjEawAvjfHF5Z0XdCr7iva2CPSoeTULHBqI0zzEzW6PFgOgloewVl3OTGF4MIMqaHZVplh3WhqOMCiW1lX5Y4kjbCkbOTCcpsLDBjqkAS61tBjDWyiWrWBAjSBFZSwMK0BQ6da7aMbF5Vg6sOMapV9C22EiGr%2Bh33LoPt3tzGZ58qvoeVcKnm7hW45rd3fMcyUDpzTXt2NH9DTDfHZcnysUchhxGzxcKum2JSuDvV3IzDtnIJPF%2BsMaS8tEdpWhVNaHNL8P35IVebsQk0SDMyGP0e0u4ApH46rt%2F4H9mdg2WI6uycwQGACO8IESZav6lGE4&X-Amz-Signature=dd439db2a5d261158c4a84c78ec637a19524a6f0afcbbcecb09d23868b36f8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNIS66H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf0wS7e%2FY4l99XUUF4TQplWxpnQIoH3czfTi6AAB9rTgIhANB1lHfNj1Wh0m9yk80f%2F21GgUCK6hGunz%2FsyWwYTxV7KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkjXfedXBDc9vaYoq3AOJlan1%2FF6kJKmkzLadCEzeWxYJwYoGqOyRelPp6%2Bm39nFrbim4AAMCGZBjAfdZM8C95W51xXvolPZ3tzwzxeoMOP3ttBfSAa7d35jEMJAqmeXoGLNLhgtDlQF7x9nKM7MuGb3L0tlie0t5GAnxOvmlusaSQtWcvpSrWzkLwu0KBNbbqRzhNNDdUBR1IlGYL3VIIwpVQ1RPaoCQ3zpCD%2BSTyLvlYnjZmhmiufqemGAqbxwtVOtFbvV93jlHXGWFHYHfsg%2BkTSPMar5VUoOvfhqA1%2BlJGHyxyc%2B%2BXXebcEzXlwvc4nIjnXCdSvicIiWOaTbqpLBpK0jhpOj2cSPtNJ4GXMWEDl1m92pDVycR%2FT6AvTEHYEv3x4RvUPVqo2e1OM3pz7zZiHoZgAaAcfHo%2Bvt5fqDPC3WJNOk8TYYkyusKIEUqVwOjBaoYf04AArr3zkgjsk8gHlnK3v01yaazGHD4xBl6pKH3WzA%2FXg3YTWZw%2BLl0s6PWDp7qDCJu6RGIk8TkBBq2DvKg%2FUypWlK%2F6bixgEji1zmuO%2FjEawAvjfHF5Z0XdCr7iva2CPSoeTULHBqI0zzEzW6PFgOgloewVl3OTGF4MIMqaHZVplh3WhqOMCiW1lX5Y4kjbCkbOTCcpsLDBjqkAS61tBjDWyiWrWBAjSBFZSwMK0BQ6da7aMbF5Vg6sOMapV9C22EiGr%2Bh33LoPt3tzGZ58qvoeVcKnm7hW45rd3fMcyUDpzTXt2NH9DTDfHZcnysUchhxGzxcKum2JSuDvV3IzDtnIJPF%2BsMaS8tEdpWhVNaHNL8P35IVebsQk0SDMyGP0e0u4ApH46rt%2F4H9mdg2WI6uycwQGACO8IESZav6lGE4&X-Amz-Signature=6f9db50074bf71a478d3ec5bcb9f7d3016f4a824a37db205d19fea62bcf1410b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNIS66H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf0wS7e%2FY4l99XUUF4TQplWxpnQIoH3czfTi6AAB9rTgIhANB1lHfNj1Wh0m9yk80f%2F21GgUCK6hGunz%2FsyWwYTxV7KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkjXfedXBDc9vaYoq3AOJlan1%2FF6kJKmkzLadCEzeWxYJwYoGqOyRelPp6%2Bm39nFrbim4AAMCGZBjAfdZM8C95W51xXvolPZ3tzwzxeoMOP3ttBfSAa7d35jEMJAqmeXoGLNLhgtDlQF7x9nKM7MuGb3L0tlie0t5GAnxOvmlusaSQtWcvpSrWzkLwu0KBNbbqRzhNNDdUBR1IlGYL3VIIwpVQ1RPaoCQ3zpCD%2BSTyLvlYnjZmhmiufqemGAqbxwtVOtFbvV93jlHXGWFHYHfsg%2BkTSPMar5VUoOvfhqA1%2BlJGHyxyc%2B%2BXXebcEzXlwvc4nIjnXCdSvicIiWOaTbqpLBpK0jhpOj2cSPtNJ4GXMWEDl1m92pDVycR%2FT6AvTEHYEv3x4RvUPVqo2e1OM3pz7zZiHoZgAaAcfHo%2Bvt5fqDPC3WJNOk8TYYkyusKIEUqVwOjBaoYf04AArr3zkgjsk8gHlnK3v01yaazGHD4xBl6pKH3WzA%2FXg3YTWZw%2BLl0s6PWDp7qDCJu6RGIk8TkBBq2DvKg%2FUypWlK%2F6bixgEji1zmuO%2FjEawAvjfHF5Z0XdCr7iva2CPSoeTULHBqI0zzEzW6PFgOgloewVl3OTGF4MIMqaHZVplh3WhqOMCiW1lX5Y4kjbCkbOTCcpsLDBjqkAS61tBjDWyiWrWBAjSBFZSwMK0BQ6da7aMbF5Vg6sOMapV9C22EiGr%2Bh33LoPt3tzGZ58qvoeVcKnm7hW45rd3fMcyUDpzTXt2NH9DTDfHZcnysUchhxGzxcKum2JSuDvV3IzDtnIJPF%2BsMaS8tEdpWhVNaHNL8P35IVebsQk0SDMyGP0e0u4ApH46rt%2F4H9mdg2WI6uycwQGACO8IESZav6lGE4&X-Amz-Signature=56c1b4ed4d076c0a078439ec16fb1bd6298ac82a97755825fa638ed2ce12219e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNIS66H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf0wS7e%2FY4l99XUUF4TQplWxpnQIoH3czfTi6AAB9rTgIhANB1lHfNj1Wh0m9yk80f%2F21GgUCK6hGunz%2FsyWwYTxV7KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkjXfedXBDc9vaYoq3AOJlan1%2FF6kJKmkzLadCEzeWxYJwYoGqOyRelPp6%2Bm39nFrbim4AAMCGZBjAfdZM8C95W51xXvolPZ3tzwzxeoMOP3ttBfSAa7d35jEMJAqmeXoGLNLhgtDlQF7x9nKM7MuGb3L0tlie0t5GAnxOvmlusaSQtWcvpSrWzkLwu0KBNbbqRzhNNDdUBR1IlGYL3VIIwpVQ1RPaoCQ3zpCD%2BSTyLvlYnjZmhmiufqemGAqbxwtVOtFbvV93jlHXGWFHYHfsg%2BkTSPMar5VUoOvfhqA1%2BlJGHyxyc%2B%2BXXebcEzXlwvc4nIjnXCdSvicIiWOaTbqpLBpK0jhpOj2cSPtNJ4GXMWEDl1m92pDVycR%2FT6AvTEHYEv3x4RvUPVqo2e1OM3pz7zZiHoZgAaAcfHo%2Bvt5fqDPC3WJNOk8TYYkyusKIEUqVwOjBaoYf04AArr3zkgjsk8gHlnK3v01yaazGHD4xBl6pKH3WzA%2FXg3YTWZw%2BLl0s6PWDp7qDCJu6RGIk8TkBBq2DvKg%2FUypWlK%2F6bixgEji1zmuO%2FjEawAvjfHF5Z0XdCr7iva2CPSoeTULHBqI0zzEzW6PFgOgloewVl3OTGF4MIMqaHZVplh3WhqOMCiW1lX5Y4kjbCkbOTCcpsLDBjqkAS61tBjDWyiWrWBAjSBFZSwMK0BQ6da7aMbF5Vg6sOMapV9C22EiGr%2Bh33LoPt3tzGZ58qvoeVcKnm7hW45rd3fMcyUDpzTXt2NH9DTDfHZcnysUchhxGzxcKum2JSuDvV3IzDtnIJPF%2BsMaS8tEdpWhVNaHNL8P35IVebsQk0SDMyGP0e0u4ApH46rt%2F4H9mdg2WI6uycwQGACO8IESZav6lGE4&X-Amz-Signature=d7ececb1f73bf46387503421d32ced6428bb4e7bafccb48a92380948884239cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNIS66H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf0wS7e%2FY4l99XUUF4TQplWxpnQIoH3czfTi6AAB9rTgIhANB1lHfNj1Wh0m9yk80f%2F21GgUCK6hGunz%2FsyWwYTxV7KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkjXfedXBDc9vaYoq3AOJlan1%2FF6kJKmkzLadCEzeWxYJwYoGqOyRelPp6%2Bm39nFrbim4AAMCGZBjAfdZM8C95W51xXvolPZ3tzwzxeoMOP3ttBfSAa7d35jEMJAqmeXoGLNLhgtDlQF7x9nKM7MuGb3L0tlie0t5GAnxOvmlusaSQtWcvpSrWzkLwu0KBNbbqRzhNNDdUBR1IlGYL3VIIwpVQ1RPaoCQ3zpCD%2BSTyLvlYnjZmhmiufqemGAqbxwtVOtFbvV93jlHXGWFHYHfsg%2BkTSPMar5VUoOvfhqA1%2BlJGHyxyc%2B%2BXXebcEzXlwvc4nIjnXCdSvicIiWOaTbqpLBpK0jhpOj2cSPtNJ4GXMWEDl1m92pDVycR%2FT6AvTEHYEv3x4RvUPVqo2e1OM3pz7zZiHoZgAaAcfHo%2Bvt5fqDPC3WJNOk8TYYkyusKIEUqVwOjBaoYf04AArr3zkgjsk8gHlnK3v01yaazGHD4xBl6pKH3WzA%2FXg3YTWZw%2BLl0s6PWDp7qDCJu6RGIk8TkBBq2DvKg%2FUypWlK%2F6bixgEji1zmuO%2FjEawAvjfHF5Z0XdCr7iva2CPSoeTULHBqI0zzEzW6PFgOgloewVl3OTGF4MIMqaHZVplh3WhqOMCiW1lX5Y4kjbCkbOTCcpsLDBjqkAS61tBjDWyiWrWBAjSBFZSwMK0BQ6da7aMbF5Vg6sOMapV9C22EiGr%2Bh33LoPt3tzGZ58qvoeVcKnm7hW45rd3fMcyUDpzTXt2NH9DTDfHZcnysUchhxGzxcKum2JSuDvV3IzDtnIJPF%2BsMaS8tEdpWhVNaHNL8P35IVebsQk0SDMyGP0e0u4ApH46rt%2F4H9mdg2WI6uycwQGACO8IESZav6lGE4&X-Amz-Signature=aa7dc12a23b839e16c092ad3ae76c03ab8109238a752f9837bb25394437371dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGNIS66H%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf0wS7e%2FY4l99XUUF4TQplWxpnQIoH3czfTi6AAB9rTgIhANB1lHfNj1Wh0m9yk80f%2F21GgUCK6hGunz%2FsyWwYTxV7KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVkjXfedXBDc9vaYoq3AOJlan1%2FF6kJKmkzLadCEzeWxYJwYoGqOyRelPp6%2Bm39nFrbim4AAMCGZBjAfdZM8C95W51xXvolPZ3tzwzxeoMOP3ttBfSAa7d35jEMJAqmeXoGLNLhgtDlQF7x9nKM7MuGb3L0tlie0t5GAnxOvmlusaSQtWcvpSrWzkLwu0KBNbbqRzhNNDdUBR1IlGYL3VIIwpVQ1RPaoCQ3zpCD%2BSTyLvlYnjZmhmiufqemGAqbxwtVOtFbvV93jlHXGWFHYHfsg%2BkTSPMar5VUoOvfhqA1%2BlJGHyxyc%2B%2BXXebcEzXlwvc4nIjnXCdSvicIiWOaTbqpLBpK0jhpOj2cSPtNJ4GXMWEDl1m92pDVycR%2FT6AvTEHYEv3x4RvUPVqo2e1OM3pz7zZiHoZgAaAcfHo%2Bvt5fqDPC3WJNOk8TYYkyusKIEUqVwOjBaoYf04AArr3zkgjsk8gHlnK3v01yaazGHD4xBl6pKH3WzA%2FXg3YTWZw%2BLl0s6PWDp7qDCJu6RGIk8TkBBq2DvKg%2FUypWlK%2F6bixgEji1zmuO%2FjEawAvjfHF5Z0XdCr7iva2CPSoeTULHBqI0zzEzW6PFgOgloewVl3OTGF4MIMqaHZVplh3WhqOMCiW1lX5Y4kjbCkbOTCcpsLDBjqkAS61tBjDWyiWrWBAjSBFZSwMK0BQ6da7aMbF5Vg6sOMapV9C22EiGr%2Bh33LoPt3tzGZ58qvoeVcKnm7hW45rd3fMcyUDpzTXt2NH9DTDfHZcnysUchhxGzxcKum2JSuDvV3IzDtnIJPF%2BsMaS8tEdpWhVNaHNL8P35IVebsQk0SDMyGP0e0u4ApH46rt%2F4H9mdg2WI6uycwQGACO8IESZav6lGE4&X-Amz-Signature=b742c720d81645fce1a50fd29b5794104d34be51cb5154bebf03c66545e2dff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
