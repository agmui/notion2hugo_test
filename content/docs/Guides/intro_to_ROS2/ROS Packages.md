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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWW5IND%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FVRoZTafHqPsrU3HGe83ALmSUT%2BuJ91i5%2BNodKKNAQIhAJlEMNPMJSOoGZWj%2B06fP%2BD8jPRDxoLQP%2B%2B61xHsd4NBKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVmG%2Bf8lxxaZlDMAq3AOWSdpQ1KKVi%2Fmo%2FDvKrGgz2folvD2wNXIhqIIKwnyhNIeohAE10Xp5Kinyzc%2Ba71p5ODo75Mlx%2FyGmNdl0YVBUrxP%2Bx27voRrpJRNUzFLWp8%2B8ivzLHWzcRQ1ecjll0t8LZPz%2BogbnG4be9XkLjmLx42SRzoE%2BsaEd4DpOx%2BVA51ofCYb%2BJYxr6Az9UzeL1IQT%2BoJkFz0Aki5%2FOOVAi%2BhdwNXRWb0tduw9YeYzoURZYxiH7tRqU0Gm74vq0flw3yuRLbvnQrLpgOjg0EOoxItssNEduVpf8U0uhCxD%2B9KEB4Has2NyXwmEaXskzeTdc80LfL%2BPMW0LlNmmAXSxIWeW%2FiymVAJ8LB%2FRO4NrtyKwpZvKRepPiJ1PMzDNmMSZTKSzz7GslZjfxMSst3cR%2BE6SiltIDO40xz7p024mOvefc5rklZorZOb8Lj7M1kgImZdCwk2lMP9mt8LORYRwy0NAMmGAFgXKl2zwDWk8zKtj2m4CirbvGy%2Fgn3O%2Bp1uERj9w9xBTbXDokgTKoypjap6WVTKEYKMo9MxuPOc1k0N%2BPDE93AcwSbHWaaRfQhtJiAz%2Fsg9xJwozCLItd7TAKSgaBvkEjnzG2fAjqCQ1lP6Gsg5ZY6bVcIu3t5yI7zD9ipPDBjqkAcu9p7bJinlqXEXI4RkUGfbaDDa4hxUpqTFnYi9zleE4NxjrJ%2FBj3K8B8aW%2B2PS9sjYUIIWIa2Q8pZwZP0LR72Jz7DDetZwMMfG7DCbXdbk45Wda77PAK4vkUempNoWhkA89Ye5Tje2mu8RT9NQN78T85oZJfLAxSaDZQ2T%2Bu%2FnZIHXwXDzmz%2BisT%2FhLu8CkalZDsl8BuXQtmyJWdcRnKapibK5p&X-Amz-Signature=f90e0e157f8d453efab3b2d58671bff2c99ee03ee6d8c5d90e6a06b6aa1443e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWW5IND%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FVRoZTafHqPsrU3HGe83ALmSUT%2BuJ91i5%2BNodKKNAQIhAJlEMNPMJSOoGZWj%2B06fP%2BD8jPRDxoLQP%2B%2B61xHsd4NBKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVmG%2Bf8lxxaZlDMAq3AOWSdpQ1KKVi%2Fmo%2FDvKrGgz2folvD2wNXIhqIIKwnyhNIeohAE10Xp5Kinyzc%2Ba71p5ODo75Mlx%2FyGmNdl0YVBUrxP%2Bx27voRrpJRNUzFLWp8%2B8ivzLHWzcRQ1ecjll0t8LZPz%2BogbnG4be9XkLjmLx42SRzoE%2BsaEd4DpOx%2BVA51ofCYb%2BJYxr6Az9UzeL1IQT%2BoJkFz0Aki5%2FOOVAi%2BhdwNXRWb0tduw9YeYzoURZYxiH7tRqU0Gm74vq0flw3yuRLbvnQrLpgOjg0EOoxItssNEduVpf8U0uhCxD%2B9KEB4Has2NyXwmEaXskzeTdc80LfL%2BPMW0LlNmmAXSxIWeW%2FiymVAJ8LB%2FRO4NrtyKwpZvKRepPiJ1PMzDNmMSZTKSzz7GslZjfxMSst3cR%2BE6SiltIDO40xz7p024mOvefc5rklZorZOb8Lj7M1kgImZdCwk2lMP9mt8LORYRwy0NAMmGAFgXKl2zwDWk8zKtj2m4CirbvGy%2Fgn3O%2Bp1uERj9w9xBTbXDokgTKoypjap6WVTKEYKMo9MxuPOc1k0N%2BPDE93AcwSbHWaaRfQhtJiAz%2Fsg9xJwozCLItd7TAKSgaBvkEjnzG2fAjqCQ1lP6Gsg5ZY6bVcIu3t5yI7zD9ipPDBjqkAcu9p7bJinlqXEXI4RkUGfbaDDa4hxUpqTFnYi9zleE4NxjrJ%2FBj3K8B8aW%2B2PS9sjYUIIWIa2Q8pZwZP0LR72Jz7DDetZwMMfG7DCbXdbk45Wda77PAK4vkUempNoWhkA89Ye5Tje2mu8RT9NQN78T85oZJfLAxSaDZQ2T%2Bu%2FnZIHXwXDzmz%2BisT%2FhLu8CkalZDsl8BuXQtmyJWdcRnKapibK5p&X-Amz-Signature=ec9f17959e4a2cef86663a7d909b8dc26341328f562e00390d706d29fd313d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWW5IND%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FVRoZTafHqPsrU3HGe83ALmSUT%2BuJ91i5%2BNodKKNAQIhAJlEMNPMJSOoGZWj%2B06fP%2BD8jPRDxoLQP%2B%2B61xHsd4NBKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVmG%2Bf8lxxaZlDMAq3AOWSdpQ1KKVi%2Fmo%2FDvKrGgz2folvD2wNXIhqIIKwnyhNIeohAE10Xp5Kinyzc%2Ba71p5ODo75Mlx%2FyGmNdl0YVBUrxP%2Bx27voRrpJRNUzFLWp8%2B8ivzLHWzcRQ1ecjll0t8LZPz%2BogbnG4be9XkLjmLx42SRzoE%2BsaEd4DpOx%2BVA51ofCYb%2BJYxr6Az9UzeL1IQT%2BoJkFz0Aki5%2FOOVAi%2BhdwNXRWb0tduw9YeYzoURZYxiH7tRqU0Gm74vq0flw3yuRLbvnQrLpgOjg0EOoxItssNEduVpf8U0uhCxD%2B9KEB4Has2NyXwmEaXskzeTdc80LfL%2BPMW0LlNmmAXSxIWeW%2FiymVAJ8LB%2FRO4NrtyKwpZvKRepPiJ1PMzDNmMSZTKSzz7GslZjfxMSst3cR%2BE6SiltIDO40xz7p024mOvefc5rklZorZOb8Lj7M1kgImZdCwk2lMP9mt8LORYRwy0NAMmGAFgXKl2zwDWk8zKtj2m4CirbvGy%2Fgn3O%2Bp1uERj9w9xBTbXDokgTKoypjap6WVTKEYKMo9MxuPOc1k0N%2BPDE93AcwSbHWaaRfQhtJiAz%2Fsg9xJwozCLItd7TAKSgaBvkEjnzG2fAjqCQ1lP6Gsg5ZY6bVcIu3t5yI7zD9ipPDBjqkAcu9p7bJinlqXEXI4RkUGfbaDDa4hxUpqTFnYi9zleE4NxjrJ%2FBj3K8B8aW%2B2PS9sjYUIIWIa2Q8pZwZP0LR72Jz7DDetZwMMfG7DCbXdbk45Wda77PAK4vkUempNoWhkA89Ye5Tje2mu8RT9NQN78T85oZJfLAxSaDZQ2T%2Bu%2FnZIHXwXDzmz%2BisT%2FhLu8CkalZDsl8BuXQtmyJWdcRnKapibK5p&X-Amz-Signature=36ecac6fb7dd79330e4d0e5a64cb29be4665b29c68604d61ee7828cd0ace2244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWW5IND%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FVRoZTafHqPsrU3HGe83ALmSUT%2BuJ91i5%2BNodKKNAQIhAJlEMNPMJSOoGZWj%2B06fP%2BD8jPRDxoLQP%2B%2B61xHsd4NBKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVmG%2Bf8lxxaZlDMAq3AOWSdpQ1KKVi%2Fmo%2FDvKrGgz2folvD2wNXIhqIIKwnyhNIeohAE10Xp5Kinyzc%2Ba71p5ODo75Mlx%2FyGmNdl0YVBUrxP%2Bx27voRrpJRNUzFLWp8%2B8ivzLHWzcRQ1ecjll0t8LZPz%2BogbnG4be9XkLjmLx42SRzoE%2BsaEd4DpOx%2BVA51ofCYb%2BJYxr6Az9UzeL1IQT%2BoJkFz0Aki5%2FOOVAi%2BhdwNXRWb0tduw9YeYzoURZYxiH7tRqU0Gm74vq0flw3yuRLbvnQrLpgOjg0EOoxItssNEduVpf8U0uhCxD%2B9KEB4Has2NyXwmEaXskzeTdc80LfL%2BPMW0LlNmmAXSxIWeW%2FiymVAJ8LB%2FRO4NrtyKwpZvKRepPiJ1PMzDNmMSZTKSzz7GslZjfxMSst3cR%2BE6SiltIDO40xz7p024mOvefc5rklZorZOb8Lj7M1kgImZdCwk2lMP9mt8LORYRwy0NAMmGAFgXKl2zwDWk8zKtj2m4CirbvGy%2Fgn3O%2Bp1uERj9w9xBTbXDokgTKoypjap6WVTKEYKMo9MxuPOc1k0N%2BPDE93AcwSbHWaaRfQhtJiAz%2Fsg9xJwozCLItd7TAKSgaBvkEjnzG2fAjqCQ1lP6Gsg5ZY6bVcIu3t5yI7zD9ipPDBjqkAcu9p7bJinlqXEXI4RkUGfbaDDa4hxUpqTFnYi9zleE4NxjrJ%2FBj3K8B8aW%2B2PS9sjYUIIWIa2Q8pZwZP0LR72Jz7DDetZwMMfG7DCbXdbk45Wda77PAK4vkUempNoWhkA89Ye5Tje2mu8RT9NQN78T85oZJfLAxSaDZQ2T%2Bu%2FnZIHXwXDzmz%2BisT%2FhLu8CkalZDsl8BuXQtmyJWdcRnKapibK5p&X-Amz-Signature=f86180f594aa9c03958fd696edffbe123fe75573a9c127af81e5283c9f0b6248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWW5IND%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FVRoZTafHqPsrU3HGe83ALmSUT%2BuJ91i5%2BNodKKNAQIhAJlEMNPMJSOoGZWj%2B06fP%2BD8jPRDxoLQP%2B%2B61xHsd4NBKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVmG%2Bf8lxxaZlDMAq3AOWSdpQ1KKVi%2Fmo%2FDvKrGgz2folvD2wNXIhqIIKwnyhNIeohAE10Xp5Kinyzc%2Ba71p5ODo75Mlx%2FyGmNdl0YVBUrxP%2Bx27voRrpJRNUzFLWp8%2B8ivzLHWzcRQ1ecjll0t8LZPz%2BogbnG4be9XkLjmLx42SRzoE%2BsaEd4DpOx%2BVA51ofCYb%2BJYxr6Az9UzeL1IQT%2BoJkFz0Aki5%2FOOVAi%2BhdwNXRWb0tduw9YeYzoURZYxiH7tRqU0Gm74vq0flw3yuRLbvnQrLpgOjg0EOoxItssNEduVpf8U0uhCxD%2B9KEB4Has2NyXwmEaXskzeTdc80LfL%2BPMW0LlNmmAXSxIWeW%2FiymVAJ8LB%2FRO4NrtyKwpZvKRepPiJ1PMzDNmMSZTKSzz7GslZjfxMSst3cR%2BE6SiltIDO40xz7p024mOvefc5rklZorZOb8Lj7M1kgImZdCwk2lMP9mt8LORYRwy0NAMmGAFgXKl2zwDWk8zKtj2m4CirbvGy%2Fgn3O%2Bp1uERj9w9xBTbXDokgTKoypjap6WVTKEYKMo9MxuPOc1k0N%2BPDE93AcwSbHWaaRfQhtJiAz%2Fsg9xJwozCLItd7TAKSgaBvkEjnzG2fAjqCQ1lP6Gsg5ZY6bVcIu3t5yI7zD9ipPDBjqkAcu9p7bJinlqXEXI4RkUGfbaDDa4hxUpqTFnYi9zleE4NxjrJ%2FBj3K8B8aW%2B2PS9sjYUIIWIa2Q8pZwZP0LR72Jz7DDetZwMMfG7DCbXdbk45Wda77PAK4vkUempNoWhkA89Ye5Tje2mu8RT9NQN78T85oZJfLAxSaDZQ2T%2Bu%2FnZIHXwXDzmz%2BisT%2FhLu8CkalZDsl8BuXQtmyJWdcRnKapibK5p&X-Amz-Signature=101cd421260071108930c37f25bc68017dd9d0271e060918bdbaf9a0cb5f18fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWW5IND%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FVRoZTafHqPsrU3HGe83ALmSUT%2BuJ91i5%2BNodKKNAQIhAJlEMNPMJSOoGZWj%2B06fP%2BD8jPRDxoLQP%2B%2B61xHsd4NBKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVmG%2Bf8lxxaZlDMAq3AOWSdpQ1KKVi%2Fmo%2FDvKrGgz2folvD2wNXIhqIIKwnyhNIeohAE10Xp5Kinyzc%2Ba71p5ODo75Mlx%2FyGmNdl0YVBUrxP%2Bx27voRrpJRNUzFLWp8%2B8ivzLHWzcRQ1ecjll0t8LZPz%2BogbnG4be9XkLjmLx42SRzoE%2BsaEd4DpOx%2BVA51ofCYb%2BJYxr6Az9UzeL1IQT%2BoJkFz0Aki5%2FOOVAi%2BhdwNXRWb0tduw9YeYzoURZYxiH7tRqU0Gm74vq0flw3yuRLbvnQrLpgOjg0EOoxItssNEduVpf8U0uhCxD%2B9KEB4Has2NyXwmEaXskzeTdc80LfL%2BPMW0LlNmmAXSxIWeW%2FiymVAJ8LB%2FRO4NrtyKwpZvKRepPiJ1PMzDNmMSZTKSzz7GslZjfxMSst3cR%2BE6SiltIDO40xz7p024mOvefc5rklZorZOb8Lj7M1kgImZdCwk2lMP9mt8LORYRwy0NAMmGAFgXKl2zwDWk8zKtj2m4CirbvGy%2Fgn3O%2Bp1uERj9w9xBTbXDokgTKoypjap6WVTKEYKMo9MxuPOc1k0N%2BPDE93AcwSbHWaaRfQhtJiAz%2Fsg9xJwozCLItd7TAKSgaBvkEjnzG2fAjqCQ1lP6Gsg5ZY6bVcIu3t5yI7zD9ipPDBjqkAcu9p7bJinlqXEXI4RkUGfbaDDa4hxUpqTFnYi9zleE4NxjrJ%2FBj3K8B8aW%2B2PS9sjYUIIWIa2Q8pZwZP0LR72Jz7DDetZwMMfG7DCbXdbk45Wda77PAK4vkUempNoWhkA89Ye5Tje2mu8RT9NQN78T85oZJfLAxSaDZQ2T%2Bu%2FnZIHXwXDzmz%2BisT%2FhLu8CkalZDsl8BuXQtmyJWdcRnKapibK5p&X-Amz-Signature=8ac81cbf57be492d7daeb1c051595079211555dd3256c37cde144ab1ee8c9693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWW5IND%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2FVRoZTafHqPsrU3HGe83ALmSUT%2BuJ91i5%2BNodKKNAQIhAJlEMNPMJSOoGZWj%2B06fP%2BD8jPRDxoLQP%2B%2B61xHsd4NBKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXVmG%2Bf8lxxaZlDMAq3AOWSdpQ1KKVi%2Fmo%2FDvKrGgz2folvD2wNXIhqIIKwnyhNIeohAE10Xp5Kinyzc%2Ba71p5ODo75Mlx%2FyGmNdl0YVBUrxP%2Bx27voRrpJRNUzFLWp8%2B8ivzLHWzcRQ1ecjll0t8LZPz%2BogbnG4be9XkLjmLx42SRzoE%2BsaEd4DpOx%2BVA51ofCYb%2BJYxr6Az9UzeL1IQT%2BoJkFz0Aki5%2FOOVAi%2BhdwNXRWb0tduw9YeYzoURZYxiH7tRqU0Gm74vq0flw3yuRLbvnQrLpgOjg0EOoxItssNEduVpf8U0uhCxD%2B9KEB4Has2NyXwmEaXskzeTdc80LfL%2BPMW0LlNmmAXSxIWeW%2FiymVAJ8LB%2FRO4NrtyKwpZvKRepPiJ1PMzDNmMSZTKSzz7GslZjfxMSst3cR%2BE6SiltIDO40xz7p024mOvefc5rklZorZOb8Lj7M1kgImZdCwk2lMP9mt8LORYRwy0NAMmGAFgXKl2zwDWk8zKtj2m4CirbvGy%2Fgn3O%2Bp1uERj9w9xBTbXDokgTKoypjap6WVTKEYKMo9MxuPOc1k0N%2BPDE93AcwSbHWaaRfQhtJiAz%2Fsg9xJwozCLItd7TAKSgaBvkEjnzG2fAjqCQ1lP6Gsg5ZY6bVcIu3t5yI7zD9ipPDBjqkAcu9p7bJinlqXEXI4RkUGfbaDDa4hxUpqTFnYi9zleE4NxjrJ%2FBj3K8B8aW%2B2PS9sjYUIIWIa2Q8pZwZP0LR72Jz7DDetZwMMfG7DCbXdbk45Wda77PAK4vkUempNoWhkA89Ye5Tje2mu8RT9NQN78T85oZJfLAxSaDZQ2T%2Bu%2FnZIHXwXDzmz%2BisT%2FhLu8CkalZDsl8BuXQtmyJWdcRnKapibK5p&X-Amz-Signature=3c756ce558b8ac2b3599af941f7a1aa2000d28088d658ce6e2d2decbe929f425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
