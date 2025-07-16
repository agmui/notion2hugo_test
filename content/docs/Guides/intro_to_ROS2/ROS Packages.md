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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5YPK3O%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCK%2FXLwuZcOJ%2F9RyrPO8x6vOm6LoD9acXWfhqYO2vsztQIgAPaYK%2BVN0CBbpUIPx5WJyyoq6v4ETda%2B0iKDwpaaH38q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK9MOsNI%2B09WCK7zUyrcA%2Fvbl0eyJEkgQ68Njcl7Fv2p7QsU2BjRKlz5%2BK0HfewNQCckMZtwJRQ%2FmJuI1d3MYZUJ1aZMJjRuMaK3mmlP%2FSR%2F6nS%2FaizdGKbOwHXRIN6QoPAB%2FNOcLutaAGAN8XH0bqeebH26iyi0o3vELOeFHib9uO0Zx4nuu1EObQ%2F69dEbpYboGutaIrUOk3aEa9TxP7IOSbjVg7OV02Fvd%2FAUoUTpIK6IzyGXONCFR94pzOJ1tGMSdqZFWl9PJSC%2F%2Fp%2BSHQIjkzR9ED91b3ZXeEQFkLK%2Bj20ZyRk9tF8FcV8sEQBr1Io81PT%2F5OTib47jtxnDyVihEgrEus2EzPiOG1Gdql2RJZPmaush3oe15dRT0KEH4YguUtjja7XEAF2uXDKiXVAtpG%2BAorfkaQvhZnb%2BuQcUfurGxhHLHaooOz38HCdOtAkjQKeNEYGCy8n152TGOaKPaxbAu2KWvkuERaTm9asT5FWUE4wbMAFJS7PkPkhYclT0EqRgZx97XItr0wRdyB0nZqrHLu1eJIVJ7gh9wMhqnk3004lHYHT%2BeLi0sIY38UjT5DqPCoqFQzw6GbDw1SNFmXGTDp14YDdq8GIYY3%2BpP9D5zluNUdeG%2F2PpL4%2Bik7zh6JuglvdiGa9AMIPo3cMGOqUB3DJBzuUsGxhedxcku1BE9EYP2GYaVW3zDFYiAALa2gqAl4rN%2BaXqkSL2zHuMBuFNIRrx%2FepWt6I%2B6Tnb1Gnmx3WuTo5LKr6GPjms0fW%2BriEwzu1k4Nr74YGpqHqoeMo1Ky9zvXy0UVKnOdu9BX2xBe9fAmMdIlygbiWQcihfmsS%2FQqX8ONLxV1NebaiFWwPbVR7gdGmTVw4A05atNDIvIULKwXBd&X-Amz-Signature=f448a4da4d5b14dd78439f7cbefe69b2cca5ef4009f8b9694c1424fc0c831ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5YPK3O%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCK%2FXLwuZcOJ%2F9RyrPO8x6vOm6LoD9acXWfhqYO2vsztQIgAPaYK%2BVN0CBbpUIPx5WJyyoq6v4ETda%2B0iKDwpaaH38q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK9MOsNI%2B09WCK7zUyrcA%2Fvbl0eyJEkgQ68Njcl7Fv2p7QsU2BjRKlz5%2BK0HfewNQCckMZtwJRQ%2FmJuI1d3MYZUJ1aZMJjRuMaK3mmlP%2FSR%2F6nS%2FaizdGKbOwHXRIN6QoPAB%2FNOcLutaAGAN8XH0bqeebH26iyi0o3vELOeFHib9uO0Zx4nuu1EObQ%2F69dEbpYboGutaIrUOk3aEa9TxP7IOSbjVg7OV02Fvd%2FAUoUTpIK6IzyGXONCFR94pzOJ1tGMSdqZFWl9PJSC%2F%2Fp%2BSHQIjkzR9ED91b3ZXeEQFkLK%2Bj20ZyRk9tF8FcV8sEQBr1Io81PT%2F5OTib47jtxnDyVihEgrEus2EzPiOG1Gdql2RJZPmaush3oe15dRT0KEH4YguUtjja7XEAF2uXDKiXVAtpG%2BAorfkaQvhZnb%2BuQcUfurGxhHLHaooOz38HCdOtAkjQKeNEYGCy8n152TGOaKPaxbAu2KWvkuERaTm9asT5FWUE4wbMAFJS7PkPkhYclT0EqRgZx97XItr0wRdyB0nZqrHLu1eJIVJ7gh9wMhqnk3004lHYHT%2BeLi0sIY38UjT5DqPCoqFQzw6GbDw1SNFmXGTDp14YDdq8GIYY3%2BpP9D5zluNUdeG%2F2PpL4%2Bik7zh6JuglvdiGa9AMIPo3cMGOqUB3DJBzuUsGxhedxcku1BE9EYP2GYaVW3zDFYiAALa2gqAl4rN%2BaXqkSL2zHuMBuFNIRrx%2FepWt6I%2B6Tnb1Gnmx3WuTo5LKr6GPjms0fW%2BriEwzu1k4Nr74YGpqHqoeMo1Ky9zvXy0UVKnOdu9BX2xBe9fAmMdIlygbiWQcihfmsS%2FQqX8ONLxV1NebaiFWwPbVR7gdGmTVw4A05atNDIvIULKwXBd&X-Amz-Signature=ba083c3b6aa839cc9468beed6530bb165b442475d74d1d722b6338dd1887d47d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5YPK3O%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCK%2FXLwuZcOJ%2F9RyrPO8x6vOm6LoD9acXWfhqYO2vsztQIgAPaYK%2BVN0CBbpUIPx5WJyyoq6v4ETda%2B0iKDwpaaH38q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK9MOsNI%2B09WCK7zUyrcA%2Fvbl0eyJEkgQ68Njcl7Fv2p7QsU2BjRKlz5%2BK0HfewNQCckMZtwJRQ%2FmJuI1d3MYZUJ1aZMJjRuMaK3mmlP%2FSR%2F6nS%2FaizdGKbOwHXRIN6QoPAB%2FNOcLutaAGAN8XH0bqeebH26iyi0o3vELOeFHib9uO0Zx4nuu1EObQ%2F69dEbpYboGutaIrUOk3aEa9TxP7IOSbjVg7OV02Fvd%2FAUoUTpIK6IzyGXONCFR94pzOJ1tGMSdqZFWl9PJSC%2F%2Fp%2BSHQIjkzR9ED91b3ZXeEQFkLK%2Bj20ZyRk9tF8FcV8sEQBr1Io81PT%2F5OTib47jtxnDyVihEgrEus2EzPiOG1Gdql2RJZPmaush3oe15dRT0KEH4YguUtjja7XEAF2uXDKiXVAtpG%2BAorfkaQvhZnb%2BuQcUfurGxhHLHaooOz38HCdOtAkjQKeNEYGCy8n152TGOaKPaxbAu2KWvkuERaTm9asT5FWUE4wbMAFJS7PkPkhYclT0EqRgZx97XItr0wRdyB0nZqrHLu1eJIVJ7gh9wMhqnk3004lHYHT%2BeLi0sIY38UjT5DqPCoqFQzw6GbDw1SNFmXGTDp14YDdq8GIYY3%2BpP9D5zluNUdeG%2F2PpL4%2Bik7zh6JuglvdiGa9AMIPo3cMGOqUB3DJBzuUsGxhedxcku1BE9EYP2GYaVW3zDFYiAALa2gqAl4rN%2BaXqkSL2zHuMBuFNIRrx%2FepWt6I%2B6Tnb1Gnmx3WuTo5LKr6GPjms0fW%2BriEwzu1k4Nr74YGpqHqoeMo1Ky9zvXy0UVKnOdu9BX2xBe9fAmMdIlygbiWQcihfmsS%2FQqX8ONLxV1NebaiFWwPbVR7gdGmTVw4A05atNDIvIULKwXBd&X-Amz-Signature=d01545c9cccabb97c75ab3d0816e2fe889a8c1e1639fa2240c5b9f93bc75f394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5YPK3O%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCK%2FXLwuZcOJ%2F9RyrPO8x6vOm6LoD9acXWfhqYO2vsztQIgAPaYK%2BVN0CBbpUIPx5WJyyoq6v4ETda%2B0iKDwpaaH38q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK9MOsNI%2B09WCK7zUyrcA%2Fvbl0eyJEkgQ68Njcl7Fv2p7QsU2BjRKlz5%2BK0HfewNQCckMZtwJRQ%2FmJuI1d3MYZUJ1aZMJjRuMaK3mmlP%2FSR%2F6nS%2FaizdGKbOwHXRIN6QoPAB%2FNOcLutaAGAN8XH0bqeebH26iyi0o3vELOeFHib9uO0Zx4nuu1EObQ%2F69dEbpYboGutaIrUOk3aEa9TxP7IOSbjVg7OV02Fvd%2FAUoUTpIK6IzyGXONCFR94pzOJ1tGMSdqZFWl9PJSC%2F%2Fp%2BSHQIjkzR9ED91b3ZXeEQFkLK%2Bj20ZyRk9tF8FcV8sEQBr1Io81PT%2F5OTib47jtxnDyVihEgrEus2EzPiOG1Gdql2RJZPmaush3oe15dRT0KEH4YguUtjja7XEAF2uXDKiXVAtpG%2BAorfkaQvhZnb%2BuQcUfurGxhHLHaooOz38HCdOtAkjQKeNEYGCy8n152TGOaKPaxbAu2KWvkuERaTm9asT5FWUE4wbMAFJS7PkPkhYclT0EqRgZx97XItr0wRdyB0nZqrHLu1eJIVJ7gh9wMhqnk3004lHYHT%2BeLi0sIY38UjT5DqPCoqFQzw6GbDw1SNFmXGTDp14YDdq8GIYY3%2BpP9D5zluNUdeG%2F2PpL4%2Bik7zh6JuglvdiGa9AMIPo3cMGOqUB3DJBzuUsGxhedxcku1BE9EYP2GYaVW3zDFYiAALa2gqAl4rN%2BaXqkSL2zHuMBuFNIRrx%2FepWt6I%2B6Tnb1Gnmx3WuTo5LKr6GPjms0fW%2BriEwzu1k4Nr74YGpqHqoeMo1Ky9zvXy0UVKnOdu9BX2xBe9fAmMdIlygbiWQcihfmsS%2FQqX8ONLxV1NebaiFWwPbVR7gdGmTVw4A05atNDIvIULKwXBd&X-Amz-Signature=c6909c4a114e7f0dedfdd9c1c9f77e64465e1a38b495bfb83f108a6834952b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5YPK3O%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCK%2FXLwuZcOJ%2F9RyrPO8x6vOm6LoD9acXWfhqYO2vsztQIgAPaYK%2BVN0CBbpUIPx5WJyyoq6v4ETda%2B0iKDwpaaH38q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK9MOsNI%2B09WCK7zUyrcA%2Fvbl0eyJEkgQ68Njcl7Fv2p7QsU2BjRKlz5%2BK0HfewNQCckMZtwJRQ%2FmJuI1d3MYZUJ1aZMJjRuMaK3mmlP%2FSR%2F6nS%2FaizdGKbOwHXRIN6QoPAB%2FNOcLutaAGAN8XH0bqeebH26iyi0o3vELOeFHib9uO0Zx4nuu1EObQ%2F69dEbpYboGutaIrUOk3aEa9TxP7IOSbjVg7OV02Fvd%2FAUoUTpIK6IzyGXONCFR94pzOJ1tGMSdqZFWl9PJSC%2F%2Fp%2BSHQIjkzR9ED91b3ZXeEQFkLK%2Bj20ZyRk9tF8FcV8sEQBr1Io81PT%2F5OTib47jtxnDyVihEgrEus2EzPiOG1Gdql2RJZPmaush3oe15dRT0KEH4YguUtjja7XEAF2uXDKiXVAtpG%2BAorfkaQvhZnb%2BuQcUfurGxhHLHaooOz38HCdOtAkjQKeNEYGCy8n152TGOaKPaxbAu2KWvkuERaTm9asT5FWUE4wbMAFJS7PkPkhYclT0EqRgZx97XItr0wRdyB0nZqrHLu1eJIVJ7gh9wMhqnk3004lHYHT%2BeLi0sIY38UjT5DqPCoqFQzw6GbDw1SNFmXGTDp14YDdq8GIYY3%2BpP9D5zluNUdeG%2F2PpL4%2Bik7zh6JuglvdiGa9AMIPo3cMGOqUB3DJBzuUsGxhedxcku1BE9EYP2GYaVW3zDFYiAALa2gqAl4rN%2BaXqkSL2zHuMBuFNIRrx%2FepWt6I%2B6Tnb1Gnmx3WuTo5LKr6GPjms0fW%2BriEwzu1k4Nr74YGpqHqoeMo1Ky9zvXy0UVKnOdu9BX2xBe9fAmMdIlygbiWQcihfmsS%2FQqX8ONLxV1NebaiFWwPbVR7gdGmTVw4A05atNDIvIULKwXBd&X-Amz-Signature=b20837d3f4e9a517d81a5eccee05fb9d71c5bc136226ba0751af6e5709380ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5YPK3O%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCK%2FXLwuZcOJ%2F9RyrPO8x6vOm6LoD9acXWfhqYO2vsztQIgAPaYK%2BVN0CBbpUIPx5WJyyoq6v4ETda%2B0iKDwpaaH38q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK9MOsNI%2B09WCK7zUyrcA%2Fvbl0eyJEkgQ68Njcl7Fv2p7QsU2BjRKlz5%2BK0HfewNQCckMZtwJRQ%2FmJuI1d3MYZUJ1aZMJjRuMaK3mmlP%2FSR%2F6nS%2FaizdGKbOwHXRIN6QoPAB%2FNOcLutaAGAN8XH0bqeebH26iyi0o3vELOeFHib9uO0Zx4nuu1EObQ%2F69dEbpYboGutaIrUOk3aEa9TxP7IOSbjVg7OV02Fvd%2FAUoUTpIK6IzyGXONCFR94pzOJ1tGMSdqZFWl9PJSC%2F%2Fp%2BSHQIjkzR9ED91b3ZXeEQFkLK%2Bj20ZyRk9tF8FcV8sEQBr1Io81PT%2F5OTib47jtxnDyVihEgrEus2EzPiOG1Gdql2RJZPmaush3oe15dRT0KEH4YguUtjja7XEAF2uXDKiXVAtpG%2BAorfkaQvhZnb%2BuQcUfurGxhHLHaooOz38HCdOtAkjQKeNEYGCy8n152TGOaKPaxbAu2KWvkuERaTm9asT5FWUE4wbMAFJS7PkPkhYclT0EqRgZx97XItr0wRdyB0nZqrHLu1eJIVJ7gh9wMhqnk3004lHYHT%2BeLi0sIY38UjT5DqPCoqFQzw6GbDw1SNFmXGTDp14YDdq8GIYY3%2BpP9D5zluNUdeG%2F2PpL4%2Bik7zh6JuglvdiGa9AMIPo3cMGOqUB3DJBzuUsGxhedxcku1BE9EYP2GYaVW3zDFYiAALa2gqAl4rN%2BaXqkSL2zHuMBuFNIRrx%2FepWt6I%2B6Tnb1Gnmx3WuTo5LKr6GPjms0fW%2BriEwzu1k4Nr74YGpqHqoeMo1Ky9zvXy0UVKnOdu9BX2xBe9fAmMdIlygbiWQcihfmsS%2FQqX8ONLxV1NebaiFWwPbVR7gdGmTVw4A05atNDIvIULKwXBd&X-Amz-Signature=ef2923ffac43cc8ed6bf61d14a2dc46628b16a6baef7a195e67291345cb66ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5YPK3O%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCK%2FXLwuZcOJ%2F9RyrPO8x6vOm6LoD9acXWfhqYO2vsztQIgAPaYK%2BVN0CBbpUIPx5WJyyoq6v4ETda%2B0iKDwpaaH38q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK9MOsNI%2B09WCK7zUyrcA%2Fvbl0eyJEkgQ68Njcl7Fv2p7QsU2BjRKlz5%2BK0HfewNQCckMZtwJRQ%2FmJuI1d3MYZUJ1aZMJjRuMaK3mmlP%2FSR%2F6nS%2FaizdGKbOwHXRIN6QoPAB%2FNOcLutaAGAN8XH0bqeebH26iyi0o3vELOeFHib9uO0Zx4nuu1EObQ%2F69dEbpYboGutaIrUOk3aEa9TxP7IOSbjVg7OV02Fvd%2FAUoUTpIK6IzyGXONCFR94pzOJ1tGMSdqZFWl9PJSC%2F%2Fp%2BSHQIjkzR9ED91b3ZXeEQFkLK%2Bj20ZyRk9tF8FcV8sEQBr1Io81PT%2F5OTib47jtxnDyVihEgrEus2EzPiOG1Gdql2RJZPmaush3oe15dRT0KEH4YguUtjja7XEAF2uXDKiXVAtpG%2BAorfkaQvhZnb%2BuQcUfurGxhHLHaooOz38HCdOtAkjQKeNEYGCy8n152TGOaKPaxbAu2KWvkuERaTm9asT5FWUE4wbMAFJS7PkPkhYclT0EqRgZx97XItr0wRdyB0nZqrHLu1eJIVJ7gh9wMhqnk3004lHYHT%2BeLi0sIY38UjT5DqPCoqFQzw6GbDw1SNFmXGTDp14YDdq8GIYY3%2BpP9D5zluNUdeG%2F2PpL4%2Bik7zh6JuglvdiGa9AMIPo3cMGOqUB3DJBzuUsGxhedxcku1BE9EYP2GYaVW3zDFYiAALa2gqAl4rN%2BaXqkSL2zHuMBuFNIRrx%2FepWt6I%2B6Tnb1Gnmx3WuTo5LKr6GPjms0fW%2BriEwzu1k4Nr74YGpqHqoeMo1Ky9zvXy0UVKnOdu9BX2xBe9fAmMdIlygbiWQcihfmsS%2FQqX8ONLxV1NebaiFWwPbVR7gdGmTVw4A05atNDIvIULKwXBd&X-Amz-Signature=12539407d8317ee2a87f0f35040cd3e90cfe091884ac97eb0bbe1679627a355b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
