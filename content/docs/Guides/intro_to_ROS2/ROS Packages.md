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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDOL7FR%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR3uHRrO1%2FLdqNKlvbgBMCqqXo4a8S775pDLCaxXGMgAiAv5%2BcZWQ27LdBQm3EDR%2FP0KwP8nLF9kEtJQM7t3Xfu7SqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM172JuiKsdIflNcM9KtwD0%2FuOIGPw9KFyE2LPG3K1ETeCOy36lVCBSIjwoQFWDQiHA1rWpB2jIKNZU7Tvcw8gBfeCW0H7Rj27t60mFgtSx%2BpzAVgYihBAUo05yZNnkAaOkWu%2FnohMPyXTiAgtAsW2l8apQuo9Fq4UKFMDgUEtEHKbpcaRMCG4r07C7Xv518YO8qt3hGmpSXBQ7aSX365dimrY%2FM0SuMbgLQzmhJ8%2F3khm5gk3D0bDyxmoxU0UW9Se2lL6qCjnaVIczXh5iUM9phj4KlmmhK3qPVsjJdSaPCdRixTPsYaS24IM6d6uqJntq2Z1olJg80ANldKYxwYMcB3RPDGzTE4gUCIyR09OXeMMBiAEf6j%2F7ss2eWLuGgjVdbw%2F%2BMmeEkXayn%2FDVOsmplpoRp2OlI0boje%2Bn%2FIM1ua2L%2FRvVe88f0g0kGVm449uN0iRDLT7ArBkgnKQJI44gj5U9uDv9NRYj8WE8WPwlmNHxCku9FSdAg%2FV8CGWG%2F1jBlUz4jqpuOVUC1yK2BX7oRACoF6kqsaI4WYlomCnGvypNpA5jEWpRX8GlrYhfd092gaqpGdYdqjkOcacPXi7z2JNOt275a0eZF3kUi%2Bx3EBfsPtNSLuK0ExrgxEPhehnrwd7quYCbdsoBMIwz7rB0gY6pgEs3jGVvA7E0Yvtw96aQupyDF3DVvLqXOpjFTzQKfF79%2Ff3I9RsTn%2BTDitYCu2oQL6gFjvnWTtiojDKaQ79f94S2xPwrvi%2F8LnkaojKu0EFPX1osiWwnNCqge1ifZg9t1j6D2dYlvy1RZWOHbCBKCPXSjCXb%2FbkNjtPONXc6x2d3r7g%2BwOZ18gycXtDOeJG8FpeRgtD591RlDYqSg4SW04rlFwtDVh%2F&X-Amz-Signature=86fa5bedcc408428c207cf8f63f2510ac6e519c6c63e14e17554f61fe30d7661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDOL7FR%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR3uHRrO1%2FLdqNKlvbgBMCqqXo4a8S775pDLCaxXGMgAiAv5%2BcZWQ27LdBQm3EDR%2FP0KwP8nLF9kEtJQM7t3Xfu7SqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM172JuiKsdIflNcM9KtwD0%2FuOIGPw9KFyE2LPG3K1ETeCOy36lVCBSIjwoQFWDQiHA1rWpB2jIKNZU7Tvcw8gBfeCW0H7Rj27t60mFgtSx%2BpzAVgYihBAUo05yZNnkAaOkWu%2FnohMPyXTiAgtAsW2l8apQuo9Fq4UKFMDgUEtEHKbpcaRMCG4r07C7Xv518YO8qt3hGmpSXBQ7aSX365dimrY%2FM0SuMbgLQzmhJ8%2F3khm5gk3D0bDyxmoxU0UW9Se2lL6qCjnaVIczXh5iUM9phj4KlmmhK3qPVsjJdSaPCdRixTPsYaS24IM6d6uqJntq2Z1olJg80ANldKYxwYMcB3RPDGzTE4gUCIyR09OXeMMBiAEf6j%2F7ss2eWLuGgjVdbw%2F%2BMmeEkXayn%2FDVOsmplpoRp2OlI0boje%2Bn%2FIM1ua2L%2FRvVe88f0g0kGVm449uN0iRDLT7ArBkgnKQJI44gj5U9uDv9NRYj8WE8WPwlmNHxCku9FSdAg%2FV8CGWG%2F1jBlUz4jqpuOVUC1yK2BX7oRACoF6kqsaI4WYlomCnGvypNpA5jEWpRX8GlrYhfd092gaqpGdYdqjkOcacPXi7z2JNOt275a0eZF3kUi%2Bx3EBfsPtNSLuK0ExrgxEPhehnrwd7quYCbdsoBMIwz7rB0gY6pgEs3jGVvA7E0Yvtw96aQupyDF3DVvLqXOpjFTzQKfF79%2Ff3I9RsTn%2BTDitYCu2oQL6gFjvnWTtiojDKaQ79f94S2xPwrvi%2F8LnkaojKu0EFPX1osiWwnNCqge1ifZg9t1j6D2dYlvy1RZWOHbCBKCPXSjCXb%2FbkNjtPONXc6x2d3r7g%2BwOZ18gycXtDOeJG8FpeRgtD591RlDYqSg4SW04rlFwtDVh%2F&X-Amz-Signature=fc1ff2dc7fdee61eb9a3095beab7a3ade056b0126492cea5aa71749d562b1598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDOL7FR%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR3uHRrO1%2FLdqNKlvbgBMCqqXo4a8S775pDLCaxXGMgAiAv5%2BcZWQ27LdBQm3EDR%2FP0KwP8nLF9kEtJQM7t3Xfu7SqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM172JuiKsdIflNcM9KtwD0%2FuOIGPw9KFyE2LPG3K1ETeCOy36lVCBSIjwoQFWDQiHA1rWpB2jIKNZU7Tvcw8gBfeCW0H7Rj27t60mFgtSx%2BpzAVgYihBAUo05yZNnkAaOkWu%2FnohMPyXTiAgtAsW2l8apQuo9Fq4UKFMDgUEtEHKbpcaRMCG4r07C7Xv518YO8qt3hGmpSXBQ7aSX365dimrY%2FM0SuMbgLQzmhJ8%2F3khm5gk3D0bDyxmoxU0UW9Se2lL6qCjnaVIczXh5iUM9phj4KlmmhK3qPVsjJdSaPCdRixTPsYaS24IM6d6uqJntq2Z1olJg80ANldKYxwYMcB3RPDGzTE4gUCIyR09OXeMMBiAEf6j%2F7ss2eWLuGgjVdbw%2F%2BMmeEkXayn%2FDVOsmplpoRp2OlI0boje%2Bn%2FIM1ua2L%2FRvVe88f0g0kGVm449uN0iRDLT7ArBkgnKQJI44gj5U9uDv9NRYj8WE8WPwlmNHxCku9FSdAg%2FV8CGWG%2F1jBlUz4jqpuOVUC1yK2BX7oRACoF6kqsaI4WYlomCnGvypNpA5jEWpRX8GlrYhfd092gaqpGdYdqjkOcacPXi7z2JNOt275a0eZF3kUi%2Bx3EBfsPtNSLuK0ExrgxEPhehnrwd7quYCbdsoBMIwz7rB0gY6pgEs3jGVvA7E0Yvtw96aQupyDF3DVvLqXOpjFTzQKfF79%2Ff3I9RsTn%2BTDitYCu2oQL6gFjvnWTtiojDKaQ79f94S2xPwrvi%2F8LnkaojKu0EFPX1osiWwnNCqge1ifZg9t1j6D2dYlvy1RZWOHbCBKCPXSjCXb%2FbkNjtPONXc6x2d3r7g%2BwOZ18gycXtDOeJG8FpeRgtD591RlDYqSg4SW04rlFwtDVh%2F&X-Amz-Signature=5dc940922dfba4214320f33cc0e560b1629dea33be2b41e8184fa5c9976759d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDOL7FR%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR3uHRrO1%2FLdqNKlvbgBMCqqXo4a8S775pDLCaxXGMgAiAv5%2BcZWQ27LdBQm3EDR%2FP0KwP8nLF9kEtJQM7t3Xfu7SqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM172JuiKsdIflNcM9KtwD0%2FuOIGPw9KFyE2LPG3K1ETeCOy36lVCBSIjwoQFWDQiHA1rWpB2jIKNZU7Tvcw8gBfeCW0H7Rj27t60mFgtSx%2BpzAVgYihBAUo05yZNnkAaOkWu%2FnohMPyXTiAgtAsW2l8apQuo9Fq4UKFMDgUEtEHKbpcaRMCG4r07C7Xv518YO8qt3hGmpSXBQ7aSX365dimrY%2FM0SuMbgLQzmhJ8%2F3khm5gk3D0bDyxmoxU0UW9Se2lL6qCjnaVIczXh5iUM9phj4KlmmhK3qPVsjJdSaPCdRixTPsYaS24IM6d6uqJntq2Z1olJg80ANldKYxwYMcB3RPDGzTE4gUCIyR09OXeMMBiAEf6j%2F7ss2eWLuGgjVdbw%2F%2BMmeEkXayn%2FDVOsmplpoRp2OlI0boje%2Bn%2FIM1ua2L%2FRvVe88f0g0kGVm449uN0iRDLT7ArBkgnKQJI44gj5U9uDv9NRYj8WE8WPwlmNHxCku9FSdAg%2FV8CGWG%2F1jBlUz4jqpuOVUC1yK2BX7oRACoF6kqsaI4WYlomCnGvypNpA5jEWpRX8GlrYhfd092gaqpGdYdqjkOcacPXi7z2JNOt275a0eZF3kUi%2Bx3EBfsPtNSLuK0ExrgxEPhehnrwd7quYCbdsoBMIwz7rB0gY6pgEs3jGVvA7E0Yvtw96aQupyDF3DVvLqXOpjFTzQKfF79%2Ff3I9RsTn%2BTDitYCu2oQL6gFjvnWTtiojDKaQ79f94S2xPwrvi%2F8LnkaojKu0EFPX1osiWwnNCqge1ifZg9t1j6D2dYlvy1RZWOHbCBKCPXSjCXb%2FbkNjtPONXc6x2d3r7g%2BwOZ18gycXtDOeJG8FpeRgtD591RlDYqSg4SW04rlFwtDVh%2F&X-Amz-Signature=6b038a58805ac6895b51738c1f33963c1321c9f88536144d90f331a694fb25da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDOL7FR%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR3uHRrO1%2FLdqNKlvbgBMCqqXo4a8S775pDLCaxXGMgAiAv5%2BcZWQ27LdBQm3EDR%2FP0KwP8nLF9kEtJQM7t3Xfu7SqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM172JuiKsdIflNcM9KtwD0%2FuOIGPw9KFyE2LPG3K1ETeCOy36lVCBSIjwoQFWDQiHA1rWpB2jIKNZU7Tvcw8gBfeCW0H7Rj27t60mFgtSx%2BpzAVgYihBAUo05yZNnkAaOkWu%2FnohMPyXTiAgtAsW2l8apQuo9Fq4UKFMDgUEtEHKbpcaRMCG4r07C7Xv518YO8qt3hGmpSXBQ7aSX365dimrY%2FM0SuMbgLQzmhJ8%2F3khm5gk3D0bDyxmoxU0UW9Se2lL6qCjnaVIczXh5iUM9phj4KlmmhK3qPVsjJdSaPCdRixTPsYaS24IM6d6uqJntq2Z1olJg80ANldKYxwYMcB3RPDGzTE4gUCIyR09OXeMMBiAEf6j%2F7ss2eWLuGgjVdbw%2F%2BMmeEkXayn%2FDVOsmplpoRp2OlI0boje%2Bn%2FIM1ua2L%2FRvVe88f0g0kGVm449uN0iRDLT7ArBkgnKQJI44gj5U9uDv9NRYj8WE8WPwlmNHxCku9FSdAg%2FV8CGWG%2F1jBlUz4jqpuOVUC1yK2BX7oRACoF6kqsaI4WYlomCnGvypNpA5jEWpRX8GlrYhfd092gaqpGdYdqjkOcacPXi7z2JNOt275a0eZF3kUi%2Bx3EBfsPtNSLuK0ExrgxEPhehnrwd7quYCbdsoBMIwz7rB0gY6pgEs3jGVvA7E0Yvtw96aQupyDF3DVvLqXOpjFTzQKfF79%2Ff3I9RsTn%2BTDitYCu2oQL6gFjvnWTtiojDKaQ79f94S2xPwrvi%2F8LnkaojKu0EFPX1osiWwnNCqge1ifZg9t1j6D2dYlvy1RZWOHbCBKCPXSjCXb%2FbkNjtPONXc6x2d3r7g%2BwOZ18gycXtDOeJG8FpeRgtD591RlDYqSg4SW04rlFwtDVh%2F&X-Amz-Signature=f5e1e23c2b3dd31b03acfa24d278f4f6d641aae8b2310212377cbc3e057a95a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDOL7FR%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR3uHRrO1%2FLdqNKlvbgBMCqqXo4a8S775pDLCaxXGMgAiAv5%2BcZWQ27LdBQm3EDR%2FP0KwP8nLF9kEtJQM7t3Xfu7SqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM172JuiKsdIflNcM9KtwD0%2FuOIGPw9KFyE2LPG3K1ETeCOy36lVCBSIjwoQFWDQiHA1rWpB2jIKNZU7Tvcw8gBfeCW0H7Rj27t60mFgtSx%2BpzAVgYihBAUo05yZNnkAaOkWu%2FnohMPyXTiAgtAsW2l8apQuo9Fq4UKFMDgUEtEHKbpcaRMCG4r07C7Xv518YO8qt3hGmpSXBQ7aSX365dimrY%2FM0SuMbgLQzmhJ8%2F3khm5gk3D0bDyxmoxU0UW9Se2lL6qCjnaVIczXh5iUM9phj4KlmmhK3qPVsjJdSaPCdRixTPsYaS24IM6d6uqJntq2Z1olJg80ANldKYxwYMcB3RPDGzTE4gUCIyR09OXeMMBiAEf6j%2F7ss2eWLuGgjVdbw%2F%2BMmeEkXayn%2FDVOsmplpoRp2OlI0boje%2Bn%2FIM1ua2L%2FRvVe88f0g0kGVm449uN0iRDLT7ArBkgnKQJI44gj5U9uDv9NRYj8WE8WPwlmNHxCku9FSdAg%2FV8CGWG%2F1jBlUz4jqpuOVUC1yK2BX7oRACoF6kqsaI4WYlomCnGvypNpA5jEWpRX8GlrYhfd092gaqpGdYdqjkOcacPXi7z2JNOt275a0eZF3kUi%2Bx3EBfsPtNSLuK0ExrgxEPhehnrwd7quYCbdsoBMIwz7rB0gY6pgEs3jGVvA7E0Yvtw96aQupyDF3DVvLqXOpjFTzQKfF79%2Ff3I9RsTn%2BTDitYCu2oQL6gFjvnWTtiojDKaQ79f94S2xPwrvi%2F8LnkaojKu0EFPX1osiWwnNCqge1ifZg9t1j6D2dYlvy1RZWOHbCBKCPXSjCXb%2FbkNjtPONXc6x2d3r7g%2BwOZ18gycXtDOeJG8FpeRgtD591RlDYqSg4SW04rlFwtDVh%2F&X-Amz-Signature=3a28fdd0b626cc5ed1c7f89cf3b24f5a9e2c4b17f52d46d4050f2ab271ba32d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XDOL7FR%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR3uHRrO1%2FLdqNKlvbgBMCqqXo4a8S775pDLCaxXGMgAiAv5%2BcZWQ27LdBQm3EDR%2FP0KwP8nLF9kEtJQM7t3Xfu7SqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM172JuiKsdIflNcM9KtwD0%2FuOIGPw9KFyE2LPG3K1ETeCOy36lVCBSIjwoQFWDQiHA1rWpB2jIKNZU7Tvcw8gBfeCW0H7Rj27t60mFgtSx%2BpzAVgYihBAUo05yZNnkAaOkWu%2FnohMPyXTiAgtAsW2l8apQuo9Fq4UKFMDgUEtEHKbpcaRMCG4r07C7Xv518YO8qt3hGmpSXBQ7aSX365dimrY%2FM0SuMbgLQzmhJ8%2F3khm5gk3D0bDyxmoxU0UW9Se2lL6qCjnaVIczXh5iUM9phj4KlmmhK3qPVsjJdSaPCdRixTPsYaS24IM6d6uqJntq2Z1olJg80ANldKYxwYMcB3RPDGzTE4gUCIyR09OXeMMBiAEf6j%2F7ss2eWLuGgjVdbw%2F%2BMmeEkXayn%2FDVOsmplpoRp2OlI0boje%2Bn%2FIM1ua2L%2FRvVe88f0g0kGVm449uN0iRDLT7ArBkgnKQJI44gj5U9uDv9NRYj8WE8WPwlmNHxCku9FSdAg%2FV8CGWG%2F1jBlUz4jqpuOVUC1yK2BX7oRACoF6kqsaI4WYlomCnGvypNpA5jEWpRX8GlrYhfd092gaqpGdYdqjkOcacPXi7z2JNOt275a0eZF3kUi%2Bx3EBfsPtNSLuK0ExrgxEPhehnrwd7quYCbdsoBMIwz7rB0gY6pgEs3jGVvA7E0Yvtw96aQupyDF3DVvLqXOpjFTzQKfF79%2Ff3I9RsTn%2BTDitYCu2oQL6gFjvnWTtiojDKaQ79f94S2xPwrvi%2F8LnkaojKu0EFPX1osiWwnNCqge1ifZg9t1j6D2dYlvy1RZWOHbCBKCPXSjCXb%2FbkNjtPONXc6x2d3r7g%2BwOZ18gycXtDOeJG8FpeRgtD591RlDYqSg4SW04rlFwtDVh%2F&X-Amz-Signature=b34c5b0456be1a94563b158a2336e1bb4ec57b3d011b1050acd01bfa1ad6eb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
