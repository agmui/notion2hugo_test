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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655SCN23S%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkG%2B8ubrZOfNuCNgqD3V4rs0lv1aIKS%2B74lkWlnFarvwIgMYeLR3RoYRsYevbF1VSvKLWCmhPr3aQdLP4kYM975wUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGtMO8RvJB5L4LX0ySrcA%2BtJ3iKBg8fVKSToZq%2BqJwngJQwUfj4gHtNDpWOpmZNplQLrP8H%2BFvQukolgZtYDD9AfXz4voxGUE5%2BwvusfsNb3G59p31KZRtaGLttYnbNEUlwNKkmYDciWsjm1DDePaToLesZVbxAY9EltNV4Z%2FfGqHUk2fbl5rhY%2BFim0E%2Fj3qPg2pPob%2FmU4GrQLAZid9%2F9MYBWOZZDoDB0Zilyz1XuffRH2FDtwhUae3xDngM4uu40vgmy9FjyLpQLnYnAIbUBdwK5WmQ8iyK%2F91um5GaiCtqK1nSmvU7%2FCQSC6vlfR%2B1p9HFwMUVaEM93PLV%2BmOt%2BYIzHNnj22wKH4LejvrkhXLhbMeI3KMeesvnfbVcFZVa%2FqQZZi1L4PGweArjP7J88nlTfe0OuQ%2FY0F9yzh8lHF8VgizDrrQX7ZgEbr%2BrLG87jBnv0HYV5XPJyfS%2BapG3Focd329MHBVGTOM6OmoGiKwKHRTFXMdSghTcmeA4XqHBD%2BoJd7U5beAKgMm2nL5hf5cpMc%2FNF5v0W1WsWVRPTVh8sKRxaq0WeFIrswZiaQZ2qml%2Fg5GrUcMGU1Puq%2FEN39sYRL%2FqWxeSjYHTm%2BgCgUEGnTg8G2HXe72z2Bm6IoKFgfsxV4Ft4ff%2BsEMIrRjcYGOqUBwYIcnTKn0HZBd0lljZXfiNPwXtP0PO0mfBGsTFP3rqgy%2FEf96ndi3Vd8FBp7Gcbe7KmNUnDHDHZuKwqZKW1uc6hjxDl5wPyVxkEXy0DGJLZ7yRQLbtzmXpTuTq%2BShcZWHvYilxT%2BXQzNbIyWmd9mJmjkCLEEHMl3ndMQ23kccw6OXx52lzIQKuuaEYyDFjV20BK6IDT3sLPqpNR686JaxMX7u76p&X-Amz-Signature=6bd13cf1fd8e0f6bbd2f25e3debf99c683be65d3f9fe70bfaaf64b896e9e88c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655SCN23S%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkG%2B8ubrZOfNuCNgqD3V4rs0lv1aIKS%2B74lkWlnFarvwIgMYeLR3RoYRsYevbF1VSvKLWCmhPr3aQdLP4kYM975wUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGtMO8RvJB5L4LX0ySrcA%2BtJ3iKBg8fVKSToZq%2BqJwngJQwUfj4gHtNDpWOpmZNplQLrP8H%2BFvQukolgZtYDD9AfXz4voxGUE5%2BwvusfsNb3G59p31KZRtaGLttYnbNEUlwNKkmYDciWsjm1DDePaToLesZVbxAY9EltNV4Z%2FfGqHUk2fbl5rhY%2BFim0E%2Fj3qPg2pPob%2FmU4GrQLAZid9%2F9MYBWOZZDoDB0Zilyz1XuffRH2FDtwhUae3xDngM4uu40vgmy9FjyLpQLnYnAIbUBdwK5WmQ8iyK%2F91um5GaiCtqK1nSmvU7%2FCQSC6vlfR%2B1p9HFwMUVaEM93PLV%2BmOt%2BYIzHNnj22wKH4LejvrkhXLhbMeI3KMeesvnfbVcFZVa%2FqQZZi1L4PGweArjP7J88nlTfe0OuQ%2FY0F9yzh8lHF8VgizDrrQX7ZgEbr%2BrLG87jBnv0HYV5XPJyfS%2BapG3Focd329MHBVGTOM6OmoGiKwKHRTFXMdSghTcmeA4XqHBD%2BoJd7U5beAKgMm2nL5hf5cpMc%2FNF5v0W1WsWVRPTVh8sKRxaq0WeFIrswZiaQZ2qml%2Fg5GrUcMGU1Puq%2FEN39sYRL%2FqWxeSjYHTm%2BgCgUEGnTg8G2HXe72z2Bm6IoKFgfsxV4Ft4ff%2BsEMIrRjcYGOqUBwYIcnTKn0HZBd0lljZXfiNPwXtP0PO0mfBGsTFP3rqgy%2FEf96ndi3Vd8FBp7Gcbe7KmNUnDHDHZuKwqZKW1uc6hjxDl5wPyVxkEXy0DGJLZ7yRQLbtzmXpTuTq%2BShcZWHvYilxT%2BXQzNbIyWmd9mJmjkCLEEHMl3ndMQ23kccw6OXx52lzIQKuuaEYyDFjV20BK6IDT3sLPqpNR686JaxMX7u76p&X-Amz-Signature=8f1f271c80b07fa135c7bbb8d88c1d2fe95e84b1f918ed2412aa6c9a903e1662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655SCN23S%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkG%2B8ubrZOfNuCNgqD3V4rs0lv1aIKS%2B74lkWlnFarvwIgMYeLR3RoYRsYevbF1VSvKLWCmhPr3aQdLP4kYM975wUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGtMO8RvJB5L4LX0ySrcA%2BtJ3iKBg8fVKSToZq%2BqJwngJQwUfj4gHtNDpWOpmZNplQLrP8H%2BFvQukolgZtYDD9AfXz4voxGUE5%2BwvusfsNb3G59p31KZRtaGLttYnbNEUlwNKkmYDciWsjm1DDePaToLesZVbxAY9EltNV4Z%2FfGqHUk2fbl5rhY%2BFim0E%2Fj3qPg2pPob%2FmU4GrQLAZid9%2F9MYBWOZZDoDB0Zilyz1XuffRH2FDtwhUae3xDngM4uu40vgmy9FjyLpQLnYnAIbUBdwK5WmQ8iyK%2F91um5GaiCtqK1nSmvU7%2FCQSC6vlfR%2B1p9HFwMUVaEM93PLV%2BmOt%2BYIzHNnj22wKH4LejvrkhXLhbMeI3KMeesvnfbVcFZVa%2FqQZZi1L4PGweArjP7J88nlTfe0OuQ%2FY0F9yzh8lHF8VgizDrrQX7ZgEbr%2BrLG87jBnv0HYV5XPJyfS%2BapG3Focd329MHBVGTOM6OmoGiKwKHRTFXMdSghTcmeA4XqHBD%2BoJd7U5beAKgMm2nL5hf5cpMc%2FNF5v0W1WsWVRPTVh8sKRxaq0WeFIrswZiaQZ2qml%2Fg5GrUcMGU1Puq%2FEN39sYRL%2FqWxeSjYHTm%2BgCgUEGnTg8G2HXe72z2Bm6IoKFgfsxV4Ft4ff%2BsEMIrRjcYGOqUBwYIcnTKn0HZBd0lljZXfiNPwXtP0PO0mfBGsTFP3rqgy%2FEf96ndi3Vd8FBp7Gcbe7KmNUnDHDHZuKwqZKW1uc6hjxDl5wPyVxkEXy0DGJLZ7yRQLbtzmXpTuTq%2BShcZWHvYilxT%2BXQzNbIyWmd9mJmjkCLEEHMl3ndMQ23kccw6OXx52lzIQKuuaEYyDFjV20BK6IDT3sLPqpNR686JaxMX7u76p&X-Amz-Signature=55056edfb31e3b810193334e56a1a68410501b5e2f06e992e7391bde7f0ea8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655SCN23S%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkG%2B8ubrZOfNuCNgqD3V4rs0lv1aIKS%2B74lkWlnFarvwIgMYeLR3RoYRsYevbF1VSvKLWCmhPr3aQdLP4kYM975wUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGtMO8RvJB5L4LX0ySrcA%2BtJ3iKBg8fVKSToZq%2BqJwngJQwUfj4gHtNDpWOpmZNplQLrP8H%2BFvQukolgZtYDD9AfXz4voxGUE5%2BwvusfsNb3G59p31KZRtaGLttYnbNEUlwNKkmYDciWsjm1DDePaToLesZVbxAY9EltNV4Z%2FfGqHUk2fbl5rhY%2BFim0E%2Fj3qPg2pPob%2FmU4GrQLAZid9%2F9MYBWOZZDoDB0Zilyz1XuffRH2FDtwhUae3xDngM4uu40vgmy9FjyLpQLnYnAIbUBdwK5WmQ8iyK%2F91um5GaiCtqK1nSmvU7%2FCQSC6vlfR%2B1p9HFwMUVaEM93PLV%2BmOt%2BYIzHNnj22wKH4LejvrkhXLhbMeI3KMeesvnfbVcFZVa%2FqQZZi1L4PGweArjP7J88nlTfe0OuQ%2FY0F9yzh8lHF8VgizDrrQX7ZgEbr%2BrLG87jBnv0HYV5XPJyfS%2BapG3Focd329MHBVGTOM6OmoGiKwKHRTFXMdSghTcmeA4XqHBD%2BoJd7U5beAKgMm2nL5hf5cpMc%2FNF5v0W1WsWVRPTVh8sKRxaq0WeFIrswZiaQZ2qml%2Fg5GrUcMGU1Puq%2FEN39sYRL%2FqWxeSjYHTm%2BgCgUEGnTg8G2HXe72z2Bm6IoKFgfsxV4Ft4ff%2BsEMIrRjcYGOqUBwYIcnTKn0HZBd0lljZXfiNPwXtP0PO0mfBGsTFP3rqgy%2FEf96ndi3Vd8FBp7Gcbe7KmNUnDHDHZuKwqZKW1uc6hjxDl5wPyVxkEXy0DGJLZ7yRQLbtzmXpTuTq%2BShcZWHvYilxT%2BXQzNbIyWmd9mJmjkCLEEHMl3ndMQ23kccw6OXx52lzIQKuuaEYyDFjV20BK6IDT3sLPqpNR686JaxMX7u76p&X-Amz-Signature=5cf6562bbf7f2bfa77b9863c50937588c6da941ca0be5ece51822387cedae874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655SCN23S%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkG%2B8ubrZOfNuCNgqD3V4rs0lv1aIKS%2B74lkWlnFarvwIgMYeLR3RoYRsYevbF1VSvKLWCmhPr3aQdLP4kYM975wUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGtMO8RvJB5L4LX0ySrcA%2BtJ3iKBg8fVKSToZq%2BqJwngJQwUfj4gHtNDpWOpmZNplQLrP8H%2BFvQukolgZtYDD9AfXz4voxGUE5%2BwvusfsNb3G59p31KZRtaGLttYnbNEUlwNKkmYDciWsjm1DDePaToLesZVbxAY9EltNV4Z%2FfGqHUk2fbl5rhY%2BFim0E%2Fj3qPg2pPob%2FmU4GrQLAZid9%2F9MYBWOZZDoDB0Zilyz1XuffRH2FDtwhUae3xDngM4uu40vgmy9FjyLpQLnYnAIbUBdwK5WmQ8iyK%2F91um5GaiCtqK1nSmvU7%2FCQSC6vlfR%2B1p9HFwMUVaEM93PLV%2BmOt%2BYIzHNnj22wKH4LejvrkhXLhbMeI3KMeesvnfbVcFZVa%2FqQZZi1L4PGweArjP7J88nlTfe0OuQ%2FY0F9yzh8lHF8VgizDrrQX7ZgEbr%2BrLG87jBnv0HYV5XPJyfS%2BapG3Focd329MHBVGTOM6OmoGiKwKHRTFXMdSghTcmeA4XqHBD%2BoJd7U5beAKgMm2nL5hf5cpMc%2FNF5v0W1WsWVRPTVh8sKRxaq0WeFIrswZiaQZ2qml%2Fg5GrUcMGU1Puq%2FEN39sYRL%2FqWxeSjYHTm%2BgCgUEGnTg8G2HXe72z2Bm6IoKFgfsxV4Ft4ff%2BsEMIrRjcYGOqUBwYIcnTKn0HZBd0lljZXfiNPwXtP0PO0mfBGsTFP3rqgy%2FEf96ndi3Vd8FBp7Gcbe7KmNUnDHDHZuKwqZKW1uc6hjxDl5wPyVxkEXy0DGJLZ7yRQLbtzmXpTuTq%2BShcZWHvYilxT%2BXQzNbIyWmd9mJmjkCLEEHMl3ndMQ23kccw6OXx52lzIQKuuaEYyDFjV20BK6IDT3sLPqpNR686JaxMX7u76p&X-Amz-Signature=e061daa922ada6c072d670fe7bea0a1828742fda016bcfa0e98cfafe77ec4525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655SCN23S%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkG%2B8ubrZOfNuCNgqD3V4rs0lv1aIKS%2B74lkWlnFarvwIgMYeLR3RoYRsYevbF1VSvKLWCmhPr3aQdLP4kYM975wUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGtMO8RvJB5L4LX0ySrcA%2BtJ3iKBg8fVKSToZq%2BqJwngJQwUfj4gHtNDpWOpmZNplQLrP8H%2BFvQukolgZtYDD9AfXz4voxGUE5%2BwvusfsNb3G59p31KZRtaGLttYnbNEUlwNKkmYDciWsjm1DDePaToLesZVbxAY9EltNV4Z%2FfGqHUk2fbl5rhY%2BFim0E%2Fj3qPg2pPob%2FmU4GrQLAZid9%2F9MYBWOZZDoDB0Zilyz1XuffRH2FDtwhUae3xDngM4uu40vgmy9FjyLpQLnYnAIbUBdwK5WmQ8iyK%2F91um5GaiCtqK1nSmvU7%2FCQSC6vlfR%2B1p9HFwMUVaEM93PLV%2BmOt%2BYIzHNnj22wKH4LejvrkhXLhbMeI3KMeesvnfbVcFZVa%2FqQZZi1L4PGweArjP7J88nlTfe0OuQ%2FY0F9yzh8lHF8VgizDrrQX7ZgEbr%2BrLG87jBnv0HYV5XPJyfS%2BapG3Focd329MHBVGTOM6OmoGiKwKHRTFXMdSghTcmeA4XqHBD%2BoJd7U5beAKgMm2nL5hf5cpMc%2FNF5v0W1WsWVRPTVh8sKRxaq0WeFIrswZiaQZ2qml%2Fg5GrUcMGU1Puq%2FEN39sYRL%2FqWxeSjYHTm%2BgCgUEGnTg8G2HXe72z2Bm6IoKFgfsxV4Ft4ff%2BsEMIrRjcYGOqUBwYIcnTKn0HZBd0lljZXfiNPwXtP0PO0mfBGsTFP3rqgy%2FEf96ndi3Vd8FBp7Gcbe7KmNUnDHDHZuKwqZKW1uc6hjxDl5wPyVxkEXy0DGJLZ7yRQLbtzmXpTuTq%2BShcZWHvYilxT%2BXQzNbIyWmd9mJmjkCLEEHMl3ndMQ23kccw6OXx52lzIQKuuaEYyDFjV20BK6IDT3sLPqpNR686JaxMX7u76p&X-Amz-Signature=5d2b3ce5d3b354771566045ae135578907bb6d29e823b6ced60f5d22cc59e6f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655SCN23S%2F20250912%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250912T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkG%2B8ubrZOfNuCNgqD3V4rs0lv1aIKS%2B74lkWlnFarvwIgMYeLR3RoYRsYevbF1VSvKLWCmhPr3aQdLP4kYM975wUq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDGtMO8RvJB5L4LX0ySrcA%2BtJ3iKBg8fVKSToZq%2BqJwngJQwUfj4gHtNDpWOpmZNplQLrP8H%2BFvQukolgZtYDD9AfXz4voxGUE5%2BwvusfsNb3G59p31KZRtaGLttYnbNEUlwNKkmYDciWsjm1DDePaToLesZVbxAY9EltNV4Z%2FfGqHUk2fbl5rhY%2BFim0E%2Fj3qPg2pPob%2FmU4GrQLAZid9%2F9MYBWOZZDoDB0Zilyz1XuffRH2FDtwhUae3xDngM4uu40vgmy9FjyLpQLnYnAIbUBdwK5WmQ8iyK%2F91um5GaiCtqK1nSmvU7%2FCQSC6vlfR%2B1p9HFwMUVaEM93PLV%2BmOt%2BYIzHNnj22wKH4LejvrkhXLhbMeI3KMeesvnfbVcFZVa%2FqQZZi1L4PGweArjP7J88nlTfe0OuQ%2FY0F9yzh8lHF8VgizDrrQX7ZgEbr%2BrLG87jBnv0HYV5XPJyfS%2BapG3Focd329MHBVGTOM6OmoGiKwKHRTFXMdSghTcmeA4XqHBD%2BoJd7U5beAKgMm2nL5hf5cpMc%2FNF5v0W1WsWVRPTVh8sKRxaq0WeFIrswZiaQZ2qml%2Fg5GrUcMGU1Puq%2FEN39sYRL%2FqWxeSjYHTm%2BgCgUEGnTg8G2HXe72z2Bm6IoKFgfsxV4Ft4ff%2BsEMIrRjcYGOqUBwYIcnTKn0HZBd0lljZXfiNPwXtP0PO0mfBGsTFP3rqgy%2FEf96ndi3Vd8FBp7Gcbe7KmNUnDHDHZuKwqZKW1uc6hjxDl5wPyVxkEXy0DGJLZ7yRQLbtzmXpTuTq%2BShcZWHvYilxT%2BXQzNbIyWmd9mJmjkCLEEHMl3ndMQ23kccw6OXx52lzIQKuuaEYyDFjV20BK6IDT3sLPqpNR686JaxMX7u76p&X-Amz-Signature=0717012710252d799e9181077fb37ac854c2bd0fd3657d8da761b5a73d8c7e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
