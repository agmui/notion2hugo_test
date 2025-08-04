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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624RW43YM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGqTf3DInBw49pr0IlCh7AeHJ9bUX04NiPanLtQdFf%2FMAiEAxq0uW1miIT4qlxHg84kL%2BeXoptdjXNBMWzJ%2FyZcklPoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHTcJkaQ9gSio6bi7SrcA5TqvhviBeLk%2Ba%2BaSgYkKKeGwzhEzbvEwYm%2Bt0kN3ABWrMkJK95CX%2BHHz2gOtojnDppiaQjEn9J99mEQ6Yff7wJDax88RAT2caZZL2EVJN%2F7Y5LCCK0TJZni1%2FkakGiNku5FQzaNeJVLUQiGIrdOg1chHF8MYgOYrnh8W9CPMiEEvGRGnEnIPHIGDEURugS%2FWli0c%2BcSzFBKHNnx7R1a9OETfzWCLKVbmlPyVsqbTGuBqdPV%2FMJMOmczL7L0Sc0N%2B1UyB2htEhP4kapPDlpO3E55buRu0BagVniTjQvBNNFCjwkO6cOaGup2n%2B5zfc6zv5kI%2F2gKhiDH1vokGphSfMhWZDmUNnl2QvEGuhpzGiFz4bTn7LLx5GENb%2F8iZG9U%2F%2BhWUbrwJ5WEOFHC%2BMrHUlHwQiS5Xo5%2F7uu6Er1RK8WD5TOaSuZboNatOmSpmwSEoRCZeQnHOOoiMmnuK7A33Z2LfdmrwtKNKvWg9CDOjfY8OqbVNhMeWnVylLK3vfJ%2FnTCyHPO9pVKKoxFnKYIgl9ceEjDyl0C8s45uTeswCx1m%2FkB7UjbbwlNiUG3C3JFOnwDSBbBZV8NXav%2Br9euA%2Br0hS9a4xrD2boLwpj3Jt%2FT9Ibjp5DDM85iL1tJMMNvbwcQGOqUBBh%2FavB2XdfdTkFdvnIJ8i7NkOy74y%2B%2FYgBzVh5t8OrgYgpN1a18uMn%2FslgVAF5im3aZOVO79tsPXufFxI93T5%2BbWKzqBXzDmhngHoal8Kj42NqVwYNLpAi%2FjmGHBytsE4OlfH%2Bmo5H%2Fxv4iFDEpAZdC38kFPU%2FsRwbZ3C%2BHN77AVpbYVgcaBTy5USwt1sXbs2F%2Fpd99L%2F1KBoVZygF0cRQ98vcYN&X-Amz-Signature=b00da4f894cabea24d5fb78791ec804065ec2f8e3a53c02584578675feb55355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624RW43YM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGqTf3DInBw49pr0IlCh7AeHJ9bUX04NiPanLtQdFf%2FMAiEAxq0uW1miIT4qlxHg84kL%2BeXoptdjXNBMWzJ%2FyZcklPoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHTcJkaQ9gSio6bi7SrcA5TqvhviBeLk%2Ba%2BaSgYkKKeGwzhEzbvEwYm%2Bt0kN3ABWrMkJK95CX%2BHHz2gOtojnDppiaQjEn9J99mEQ6Yff7wJDax88RAT2caZZL2EVJN%2F7Y5LCCK0TJZni1%2FkakGiNku5FQzaNeJVLUQiGIrdOg1chHF8MYgOYrnh8W9CPMiEEvGRGnEnIPHIGDEURugS%2FWli0c%2BcSzFBKHNnx7R1a9OETfzWCLKVbmlPyVsqbTGuBqdPV%2FMJMOmczL7L0Sc0N%2B1UyB2htEhP4kapPDlpO3E55buRu0BagVniTjQvBNNFCjwkO6cOaGup2n%2B5zfc6zv5kI%2F2gKhiDH1vokGphSfMhWZDmUNnl2QvEGuhpzGiFz4bTn7LLx5GENb%2F8iZG9U%2F%2BhWUbrwJ5WEOFHC%2BMrHUlHwQiS5Xo5%2F7uu6Er1RK8WD5TOaSuZboNatOmSpmwSEoRCZeQnHOOoiMmnuK7A33Z2LfdmrwtKNKvWg9CDOjfY8OqbVNhMeWnVylLK3vfJ%2FnTCyHPO9pVKKoxFnKYIgl9ceEjDyl0C8s45uTeswCx1m%2FkB7UjbbwlNiUG3C3JFOnwDSBbBZV8NXav%2Br9euA%2Br0hS9a4xrD2boLwpj3Jt%2FT9Ibjp5DDM85iL1tJMMNvbwcQGOqUBBh%2FavB2XdfdTkFdvnIJ8i7NkOy74y%2B%2FYgBzVh5t8OrgYgpN1a18uMn%2FslgVAF5im3aZOVO79tsPXufFxI93T5%2BbWKzqBXzDmhngHoal8Kj42NqVwYNLpAi%2FjmGHBytsE4OlfH%2Bmo5H%2Fxv4iFDEpAZdC38kFPU%2FsRwbZ3C%2BHN77AVpbYVgcaBTy5USwt1sXbs2F%2Fpd99L%2F1KBoVZygF0cRQ98vcYN&X-Amz-Signature=871febe7fc5f73dec4b2af0721226e53e6333ce5e0265787e9838d46e4839dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624RW43YM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGqTf3DInBw49pr0IlCh7AeHJ9bUX04NiPanLtQdFf%2FMAiEAxq0uW1miIT4qlxHg84kL%2BeXoptdjXNBMWzJ%2FyZcklPoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHTcJkaQ9gSio6bi7SrcA5TqvhviBeLk%2Ba%2BaSgYkKKeGwzhEzbvEwYm%2Bt0kN3ABWrMkJK95CX%2BHHz2gOtojnDppiaQjEn9J99mEQ6Yff7wJDax88RAT2caZZL2EVJN%2F7Y5LCCK0TJZni1%2FkakGiNku5FQzaNeJVLUQiGIrdOg1chHF8MYgOYrnh8W9CPMiEEvGRGnEnIPHIGDEURugS%2FWli0c%2BcSzFBKHNnx7R1a9OETfzWCLKVbmlPyVsqbTGuBqdPV%2FMJMOmczL7L0Sc0N%2B1UyB2htEhP4kapPDlpO3E55buRu0BagVniTjQvBNNFCjwkO6cOaGup2n%2B5zfc6zv5kI%2F2gKhiDH1vokGphSfMhWZDmUNnl2QvEGuhpzGiFz4bTn7LLx5GENb%2F8iZG9U%2F%2BhWUbrwJ5WEOFHC%2BMrHUlHwQiS5Xo5%2F7uu6Er1RK8WD5TOaSuZboNatOmSpmwSEoRCZeQnHOOoiMmnuK7A33Z2LfdmrwtKNKvWg9CDOjfY8OqbVNhMeWnVylLK3vfJ%2FnTCyHPO9pVKKoxFnKYIgl9ceEjDyl0C8s45uTeswCx1m%2FkB7UjbbwlNiUG3C3JFOnwDSBbBZV8NXav%2Br9euA%2Br0hS9a4xrD2boLwpj3Jt%2FT9Ibjp5DDM85iL1tJMMNvbwcQGOqUBBh%2FavB2XdfdTkFdvnIJ8i7NkOy74y%2B%2FYgBzVh5t8OrgYgpN1a18uMn%2FslgVAF5im3aZOVO79tsPXufFxI93T5%2BbWKzqBXzDmhngHoal8Kj42NqVwYNLpAi%2FjmGHBytsE4OlfH%2Bmo5H%2Fxv4iFDEpAZdC38kFPU%2FsRwbZ3C%2BHN77AVpbYVgcaBTy5USwt1sXbs2F%2Fpd99L%2F1KBoVZygF0cRQ98vcYN&X-Amz-Signature=a1bb21783702fdead2239c1417619386bf0f2948c0496d5d2da74136124bc861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624RW43YM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGqTf3DInBw49pr0IlCh7AeHJ9bUX04NiPanLtQdFf%2FMAiEAxq0uW1miIT4qlxHg84kL%2BeXoptdjXNBMWzJ%2FyZcklPoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHTcJkaQ9gSio6bi7SrcA5TqvhviBeLk%2Ba%2BaSgYkKKeGwzhEzbvEwYm%2Bt0kN3ABWrMkJK95CX%2BHHz2gOtojnDppiaQjEn9J99mEQ6Yff7wJDax88RAT2caZZL2EVJN%2F7Y5LCCK0TJZni1%2FkakGiNku5FQzaNeJVLUQiGIrdOg1chHF8MYgOYrnh8W9CPMiEEvGRGnEnIPHIGDEURugS%2FWli0c%2BcSzFBKHNnx7R1a9OETfzWCLKVbmlPyVsqbTGuBqdPV%2FMJMOmczL7L0Sc0N%2B1UyB2htEhP4kapPDlpO3E55buRu0BagVniTjQvBNNFCjwkO6cOaGup2n%2B5zfc6zv5kI%2F2gKhiDH1vokGphSfMhWZDmUNnl2QvEGuhpzGiFz4bTn7LLx5GENb%2F8iZG9U%2F%2BhWUbrwJ5WEOFHC%2BMrHUlHwQiS5Xo5%2F7uu6Er1RK8WD5TOaSuZboNatOmSpmwSEoRCZeQnHOOoiMmnuK7A33Z2LfdmrwtKNKvWg9CDOjfY8OqbVNhMeWnVylLK3vfJ%2FnTCyHPO9pVKKoxFnKYIgl9ceEjDyl0C8s45uTeswCx1m%2FkB7UjbbwlNiUG3C3JFOnwDSBbBZV8NXav%2Br9euA%2Br0hS9a4xrD2boLwpj3Jt%2FT9Ibjp5DDM85iL1tJMMNvbwcQGOqUBBh%2FavB2XdfdTkFdvnIJ8i7NkOy74y%2B%2FYgBzVh5t8OrgYgpN1a18uMn%2FslgVAF5im3aZOVO79tsPXufFxI93T5%2BbWKzqBXzDmhngHoal8Kj42NqVwYNLpAi%2FjmGHBytsE4OlfH%2Bmo5H%2Fxv4iFDEpAZdC38kFPU%2FsRwbZ3C%2BHN77AVpbYVgcaBTy5USwt1sXbs2F%2Fpd99L%2F1KBoVZygF0cRQ98vcYN&X-Amz-Signature=a897ee48808bc8200dd857ed385b7d0115029000c3e46b401fe03eccc738b9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624RW43YM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGqTf3DInBw49pr0IlCh7AeHJ9bUX04NiPanLtQdFf%2FMAiEAxq0uW1miIT4qlxHg84kL%2BeXoptdjXNBMWzJ%2FyZcklPoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHTcJkaQ9gSio6bi7SrcA5TqvhviBeLk%2Ba%2BaSgYkKKeGwzhEzbvEwYm%2Bt0kN3ABWrMkJK95CX%2BHHz2gOtojnDppiaQjEn9J99mEQ6Yff7wJDax88RAT2caZZL2EVJN%2F7Y5LCCK0TJZni1%2FkakGiNku5FQzaNeJVLUQiGIrdOg1chHF8MYgOYrnh8W9CPMiEEvGRGnEnIPHIGDEURugS%2FWli0c%2BcSzFBKHNnx7R1a9OETfzWCLKVbmlPyVsqbTGuBqdPV%2FMJMOmczL7L0Sc0N%2B1UyB2htEhP4kapPDlpO3E55buRu0BagVniTjQvBNNFCjwkO6cOaGup2n%2B5zfc6zv5kI%2F2gKhiDH1vokGphSfMhWZDmUNnl2QvEGuhpzGiFz4bTn7LLx5GENb%2F8iZG9U%2F%2BhWUbrwJ5WEOFHC%2BMrHUlHwQiS5Xo5%2F7uu6Er1RK8WD5TOaSuZboNatOmSpmwSEoRCZeQnHOOoiMmnuK7A33Z2LfdmrwtKNKvWg9CDOjfY8OqbVNhMeWnVylLK3vfJ%2FnTCyHPO9pVKKoxFnKYIgl9ceEjDyl0C8s45uTeswCx1m%2FkB7UjbbwlNiUG3C3JFOnwDSBbBZV8NXav%2Br9euA%2Br0hS9a4xrD2boLwpj3Jt%2FT9Ibjp5DDM85iL1tJMMNvbwcQGOqUBBh%2FavB2XdfdTkFdvnIJ8i7NkOy74y%2B%2FYgBzVh5t8OrgYgpN1a18uMn%2FslgVAF5im3aZOVO79tsPXufFxI93T5%2BbWKzqBXzDmhngHoal8Kj42NqVwYNLpAi%2FjmGHBytsE4OlfH%2Bmo5H%2Fxv4iFDEpAZdC38kFPU%2FsRwbZ3C%2BHN77AVpbYVgcaBTy5USwt1sXbs2F%2Fpd99L%2F1KBoVZygF0cRQ98vcYN&X-Amz-Signature=972ba8edfd4a0f138c1116db0ceee455af0054a60501febaef6a100cd3b33a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624RW43YM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGqTf3DInBw49pr0IlCh7AeHJ9bUX04NiPanLtQdFf%2FMAiEAxq0uW1miIT4qlxHg84kL%2BeXoptdjXNBMWzJ%2FyZcklPoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHTcJkaQ9gSio6bi7SrcA5TqvhviBeLk%2Ba%2BaSgYkKKeGwzhEzbvEwYm%2Bt0kN3ABWrMkJK95CX%2BHHz2gOtojnDppiaQjEn9J99mEQ6Yff7wJDax88RAT2caZZL2EVJN%2F7Y5LCCK0TJZni1%2FkakGiNku5FQzaNeJVLUQiGIrdOg1chHF8MYgOYrnh8W9CPMiEEvGRGnEnIPHIGDEURugS%2FWli0c%2BcSzFBKHNnx7R1a9OETfzWCLKVbmlPyVsqbTGuBqdPV%2FMJMOmczL7L0Sc0N%2B1UyB2htEhP4kapPDlpO3E55buRu0BagVniTjQvBNNFCjwkO6cOaGup2n%2B5zfc6zv5kI%2F2gKhiDH1vokGphSfMhWZDmUNnl2QvEGuhpzGiFz4bTn7LLx5GENb%2F8iZG9U%2F%2BhWUbrwJ5WEOFHC%2BMrHUlHwQiS5Xo5%2F7uu6Er1RK8WD5TOaSuZboNatOmSpmwSEoRCZeQnHOOoiMmnuK7A33Z2LfdmrwtKNKvWg9CDOjfY8OqbVNhMeWnVylLK3vfJ%2FnTCyHPO9pVKKoxFnKYIgl9ceEjDyl0C8s45uTeswCx1m%2FkB7UjbbwlNiUG3C3JFOnwDSBbBZV8NXav%2Br9euA%2Br0hS9a4xrD2boLwpj3Jt%2FT9Ibjp5DDM85iL1tJMMNvbwcQGOqUBBh%2FavB2XdfdTkFdvnIJ8i7NkOy74y%2B%2FYgBzVh5t8OrgYgpN1a18uMn%2FslgVAF5im3aZOVO79tsPXufFxI93T5%2BbWKzqBXzDmhngHoal8Kj42NqVwYNLpAi%2FjmGHBytsE4OlfH%2Bmo5H%2Fxv4iFDEpAZdC38kFPU%2FsRwbZ3C%2BHN77AVpbYVgcaBTy5USwt1sXbs2F%2Fpd99L%2F1KBoVZygF0cRQ98vcYN&X-Amz-Signature=d83e9d667e66d7a784ed9ed27d1b69a46aab51f4ba23ba862164a840599ba450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624RW43YM%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T091944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGqTf3DInBw49pr0IlCh7AeHJ9bUX04NiPanLtQdFf%2FMAiEAxq0uW1miIT4qlxHg84kL%2BeXoptdjXNBMWzJ%2FyZcklPoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHTcJkaQ9gSio6bi7SrcA5TqvhviBeLk%2Ba%2BaSgYkKKeGwzhEzbvEwYm%2Bt0kN3ABWrMkJK95CX%2BHHz2gOtojnDppiaQjEn9J99mEQ6Yff7wJDax88RAT2caZZL2EVJN%2F7Y5LCCK0TJZni1%2FkakGiNku5FQzaNeJVLUQiGIrdOg1chHF8MYgOYrnh8W9CPMiEEvGRGnEnIPHIGDEURugS%2FWli0c%2BcSzFBKHNnx7R1a9OETfzWCLKVbmlPyVsqbTGuBqdPV%2FMJMOmczL7L0Sc0N%2B1UyB2htEhP4kapPDlpO3E55buRu0BagVniTjQvBNNFCjwkO6cOaGup2n%2B5zfc6zv5kI%2F2gKhiDH1vokGphSfMhWZDmUNnl2QvEGuhpzGiFz4bTn7LLx5GENb%2F8iZG9U%2F%2BhWUbrwJ5WEOFHC%2BMrHUlHwQiS5Xo5%2F7uu6Er1RK8WD5TOaSuZboNatOmSpmwSEoRCZeQnHOOoiMmnuK7A33Z2LfdmrwtKNKvWg9CDOjfY8OqbVNhMeWnVylLK3vfJ%2FnTCyHPO9pVKKoxFnKYIgl9ceEjDyl0C8s45uTeswCx1m%2FkB7UjbbwlNiUG3C3JFOnwDSBbBZV8NXav%2Br9euA%2Br0hS9a4xrD2boLwpj3Jt%2FT9Ibjp5DDM85iL1tJMMNvbwcQGOqUBBh%2FavB2XdfdTkFdvnIJ8i7NkOy74y%2B%2FYgBzVh5t8OrgYgpN1a18uMn%2FslgVAF5im3aZOVO79tsPXufFxI93T5%2BbWKzqBXzDmhngHoal8Kj42NqVwYNLpAi%2FjmGHBytsE4OlfH%2Bmo5H%2Fxv4iFDEpAZdC38kFPU%2FsRwbZ3C%2BHN77AVpbYVgcaBTy5USwt1sXbs2F%2Fpd99L%2F1KBoVZygF0cRQ98vcYN&X-Amz-Signature=e89a8ce2e7c42d24d4666bc20da5cb07ad19f0eac8b2e4d615ea53f2dd279f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
