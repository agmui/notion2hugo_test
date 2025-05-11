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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NQWPVY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCXBv6QoUp2THYNYKyxEMa7VI0P9JAdNe1oLD6vuonGDQIgMdNEBLAN%2FP3akC%2FZWK75siUkNjwUuu7r3DP5HgwVGHAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLHFdcaTxYGdR2z4CrcAx4p%2FSU9qMb6%2FcQyYMCtnHCVvp503PKC46GtolK1R9w2RmmMp1N6GapNK8OrrNhP3KGrzD14llvwjLvssjymvBx3%2BPuIu4IqELeysa56Iu%2FJl8F0d%2B07o8qXBF%2BEEQAaoWmYxCg2UHR9cq6gUymrFXYeMDLR%2BEP20%2Bt0muYnei63xE5CzKVbUTTzKE7CGo1W%2B0lfVDtmizqeFUs2kjIi9FbrgNZhfxRJZPANeCWQFvr3qJCifjkBTK5ap%2FxLonAM4K7zbPg6UakWsWnhXaJ35hhYGJem%2FsKRjhM986z1z7W0d606m4K3RYv1JLr0ZvmXB2m38047K38zhG8664aPwdQaWEq7g6jLEJULXIOdBOpvAaLsuNSrs7cnZEJhfO5EmKvaH%2Fapo0GPII4oJYIY%2FLYYmPGWKpKh%2BOzl5sEOyKss05ijFSwqbsZC17itOqM6gbgLsuUYue3TQRIbHmDXvd%2FXjniS4y3n3ihw%2Bf%2F1PCuGrtls8IU%2FBxIZsYSRJmf32LG%2Bukpv2xofurdSXq7SXLLvMBKZMpRMvyayWAuhU0et5nvsYbLndGP6zfxhfEnEgYzY81izBZ21xAJMWdgdZWaIA4tC4eVU0dRKKP2%2B5xihc4AmZU%2FhnSOLJApAMLOZgsEGOqUBMWF5eH40%2F5ZqqrbW6y7B0JxAmDqc8jG95Lv%2FQ%2FDQwQ98ufDW8zPl3GR%2FpXFkTA1Ep31Kt5BmIP4TmBuxNi%2FQD0bQa9GWeg14oHonOy9DPrTJgtjPemRA96qyYwgM2fOV0IRH%2FJFdnrdwPJgbOuIql7IDfaHPduzJ0Z%2BPWveCaiVrbUVpWzE2USCq1Y93C%2F2GSLN4OGdP1ywZnD7FOX9arXfTO18D&X-Amz-Signature=a619fae4d45698dbe11e484133d6ed0a08e676b31dde48c3eead485c4f2c5dc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NQWPVY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCXBv6QoUp2THYNYKyxEMa7VI0P9JAdNe1oLD6vuonGDQIgMdNEBLAN%2FP3akC%2FZWK75siUkNjwUuu7r3DP5HgwVGHAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLHFdcaTxYGdR2z4CrcAx4p%2FSU9qMb6%2FcQyYMCtnHCVvp503PKC46GtolK1R9w2RmmMp1N6GapNK8OrrNhP3KGrzD14llvwjLvssjymvBx3%2BPuIu4IqELeysa56Iu%2FJl8F0d%2B07o8qXBF%2BEEQAaoWmYxCg2UHR9cq6gUymrFXYeMDLR%2BEP20%2Bt0muYnei63xE5CzKVbUTTzKE7CGo1W%2B0lfVDtmizqeFUs2kjIi9FbrgNZhfxRJZPANeCWQFvr3qJCifjkBTK5ap%2FxLonAM4K7zbPg6UakWsWnhXaJ35hhYGJem%2FsKRjhM986z1z7W0d606m4K3RYv1JLr0ZvmXB2m38047K38zhG8664aPwdQaWEq7g6jLEJULXIOdBOpvAaLsuNSrs7cnZEJhfO5EmKvaH%2Fapo0GPII4oJYIY%2FLYYmPGWKpKh%2BOzl5sEOyKss05ijFSwqbsZC17itOqM6gbgLsuUYue3TQRIbHmDXvd%2FXjniS4y3n3ihw%2Bf%2F1PCuGrtls8IU%2FBxIZsYSRJmf32LG%2Bukpv2xofurdSXq7SXLLvMBKZMpRMvyayWAuhU0et5nvsYbLndGP6zfxhfEnEgYzY81izBZ21xAJMWdgdZWaIA4tC4eVU0dRKKP2%2B5xihc4AmZU%2FhnSOLJApAMLOZgsEGOqUBMWF5eH40%2F5ZqqrbW6y7B0JxAmDqc8jG95Lv%2FQ%2FDQwQ98ufDW8zPl3GR%2FpXFkTA1Ep31Kt5BmIP4TmBuxNi%2FQD0bQa9GWeg14oHonOy9DPrTJgtjPemRA96qyYwgM2fOV0IRH%2FJFdnrdwPJgbOuIql7IDfaHPduzJ0Z%2BPWveCaiVrbUVpWzE2USCq1Y93C%2F2GSLN4OGdP1ywZnD7FOX9arXfTO18D&X-Amz-Signature=ae559ae11c680c3e6c37756e85612c826331170079395211c066219dce73a36e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NQWPVY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCXBv6QoUp2THYNYKyxEMa7VI0P9JAdNe1oLD6vuonGDQIgMdNEBLAN%2FP3akC%2FZWK75siUkNjwUuu7r3DP5HgwVGHAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLHFdcaTxYGdR2z4CrcAx4p%2FSU9qMb6%2FcQyYMCtnHCVvp503PKC46GtolK1R9w2RmmMp1N6GapNK8OrrNhP3KGrzD14llvwjLvssjymvBx3%2BPuIu4IqELeysa56Iu%2FJl8F0d%2B07o8qXBF%2BEEQAaoWmYxCg2UHR9cq6gUymrFXYeMDLR%2BEP20%2Bt0muYnei63xE5CzKVbUTTzKE7CGo1W%2B0lfVDtmizqeFUs2kjIi9FbrgNZhfxRJZPANeCWQFvr3qJCifjkBTK5ap%2FxLonAM4K7zbPg6UakWsWnhXaJ35hhYGJem%2FsKRjhM986z1z7W0d606m4K3RYv1JLr0ZvmXB2m38047K38zhG8664aPwdQaWEq7g6jLEJULXIOdBOpvAaLsuNSrs7cnZEJhfO5EmKvaH%2Fapo0GPII4oJYIY%2FLYYmPGWKpKh%2BOzl5sEOyKss05ijFSwqbsZC17itOqM6gbgLsuUYue3TQRIbHmDXvd%2FXjniS4y3n3ihw%2Bf%2F1PCuGrtls8IU%2FBxIZsYSRJmf32LG%2Bukpv2xofurdSXq7SXLLvMBKZMpRMvyayWAuhU0et5nvsYbLndGP6zfxhfEnEgYzY81izBZ21xAJMWdgdZWaIA4tC4eVU0dRKKP2%2B5xihc4AmZU%2FhnSOLJApAMLOZgsEGOqUBMWF5eH40%2F5ZqqrbW6y7B0JxAmDqc8jG95Lv%2FQ%2FDQwQ98ufDW8zPl3GR%2FpXFkTA1Ep31Kt5BmIP4TmBuxNi%2FQD0bQa9GWeg14oHonOy9DPrTJgtjPemRA96qyYwgM2fOV0IRH%2FJFdnrdwPJgbOuIql7IDfaHPduzJ0Z%2BPWveCaiVrbUVpWzE2USCq1Y93C%2F2GSLN4OGdP1ywZnD7FOX9arXfTO18D&X-Amz-Signature=2a23c45a8aa4fc037c07b66fda34a3cdebe0000c36ef16c0ba3b4cdfc8d8606b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NQWPVY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCXBv6QoUp2THYNYKyxEMa7VI0P9JAdNe1oLD6vuonGDQIgMdNEBLAN%2FP3akC%2FZWK75siUkNjwUuu7r3DP5HgwVGHAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLHFdcaTxYGdR2z4CrcAx4p%2FSU9qMb6%2FcQyYMCtnHCVvp503PKC46GtolK1R9w2RmmMp1N6GapNK8OrrNhP3KGrzD14llvwjLvssjymvBx3%2BPuIu4IqELeysa56Iu%2FJl8F0d%2B07o8qXBF%2BEEQAaoWmYxCg2UHR9cq6gUymrFXYeMDLR%2BEP20%2Bt0muYnei63xE5CzKVbUTTzKE7CGo1W%2B0lfVDtmizqeFUs2kjIi9FbrgNZhfxRJZPANeCWQFvr3qJCifjkBTK5ap%2FxLonAM4K7zbPg6UakWsWnhXaJ35hhYGJem%2FsKRjhM986z1z7W0d606m4K3RYv1JLr0ZvmXB2m38047K38zhG8664aPwdQaWEq7g6jLEJULXIOdBOpvAaLsuNSrs7cnZEJhfO5EmKvaH%2Fapo0GPII4oJYIY%2FLYYmPGWKpKh%2BOzl5sEOyKss05ijFSwqbsZC17itOqM6gbgLsuUYue3TQRIbHmDXvd%2FXjniS4y3n3ihw%2Bf%2F1PCuGrtls8IU%2FBxIZsYSRJmf32LG%2Bukpv2xofurdSXq7SXLLvMBKZMpRMvyayWAuhU0et5nvsYbLndGP6zfxhfEnEgYzY81izBZ21xAJMWdgdZWaIA4tC4eVU0dRKKP2%2B5xihc4AmZU%2FhnSOLJApAMLOZgsEGOqUBMWF5eH40%2F5ZqqrbW6y7B0JxAmDqc8jG95Lv%2FQ%2FDQwQ98ufDW8zPl3GR%2FpXFkTA1Ep31Kt5BmIP4TmBuxNi%2FQD0bQa9GWeg14oHonOy9DPrTJgtjPemRA96qyYwgM2fOV0IRH%2FJFdnrdwPJgbOuIql7IDfaHPduzJ0Z%2BPWveCaiVrbUVpWzE2USCq1Y93C%2F2GSLN4OGdP1ywZnD7FOX9arXfTO18D&X-Amz-Signature=1b4631c735a52785e05129abea218c988fadb7b5be11bc1de39f2dbd48d18ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NQWPVY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCXBv6QoUp2THYNYKyxEMa7VI0P9JAdNe1oLD6vuonGDQIgMdNEBLAN%2FP3akC%2FZWK75siUkNjwUuu7r3DP5HgwVGHAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLHFdcaTxYGdR2z4CrcAx4p%2FSU9qMb6%2FcQyYMCtnHCVvp503PKC46GtolK1R9w2RmmMp1N6GapNK8OrrNhP3KGrzD14llvwjLvssjymvBx3%2BPuIu4IqELeysa56Iu%2FJl8F0d%2B07o8qXBF%2BEEQAaoWmYxCg2UHR9cq6gUymrFXYeMDLR%2BEP20%2Bt0muYnei63xE5CzKVbUTTzKE7CGo1W%2B0lfVDtmizqeFUs2kjIi9FbrgNZhfxRJZPANeCWQFvr3qJCifjkBTK5ap%2FxLonAM4K7zbPg6UakWsWnhXaJ35hhYGJem%2FsKRjhM986z1z7W0d606m4K3RYv1JLr0ZvmXB2m38047K38zhG8664aPwdQaWEq7g6jLEJULXIOdBOpvAaLsuNSrs7cnZEJhfO5EmKvaH%2Fapo0GPII4oJYIY%2FLYYmPGWKpKh%2BOzl5sEOyKss05ijFSwqbsZC17itOqM6gbgLsuUYue3TQRIbHmDXvd%2FXjniS4y3n3ihw%2Bf%2F1PCuGrtls8IU%2FBxIZsYSRJmf32LG%2Bukpv2xofurdSXq7SXLLvMBKZMpRMvyayWAuhU0et5nvsYbLndGP6zfxhfEnEgYzY81izBZ21xAJMWdgdZWaIA4tC4eVU0dRKKP2%2B5xihc4AmZU%2FhnSOLJApAMLOZgsEGOqUBMWF5eH40%2F5ZqqrbW6y7B0JxAmDqc8jG95Lv%2FQ%2FDQwQ98ufDW8zPl3GR%2FpXFkTA1Ep31Kt5BmIP4TmBuxNi%2FQD0bQa9GWeg14oHonOy9DPrTJgtjPemRA96qyYwgM2fOV0IRH%2FJFdnrdwPJgbOuIql7IDfaHPduzJ0Z%2BPWveCaiVrbUVpWzE2USCq1Y93C%2F2GSLN4OGdP1ywZnD7FOX9arXfTO18D&X-Amz-Signature=c3165d32f3bbef53b0fdf3ed2b4f1d8aafc0ab1bf7fa2e638c1efaade27b3a32&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NQWPVY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCXBv6QoUp2THYNYKyxEMa7VI0P9JAdNe1oLD6vuonGDQIgMdNEBLAN%2FP3akC%2FZWK75siUkNjwUuu7r3DP5HgwVGHAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLHFdcaTxYGdR2z4CrcAx4p%2FSU9qMb6%2FcQyYMCtnHCVvp503PKC46GtolK1R9w2RmmMp1N6GapNK8OrrNhP3KGrzD14llvwjLvssjymvBx3%2BPuIu4IqELeysa56Iu%2FJl8F0d%2B07o8qXBF%2BEEQAaoWmYxCg2UHR9cq6gUymrFXYeMDLR%2BEP20%2Bt0muYnei63xE5CzKVbUTTzKE7CGo1W%2B0lfVDtmizqeFUs2kjIi9FbrgNZhfxRJZPANeCWQFvr3qJCifjkBTK5ap%2FxLonAM4K7zbPg6UakWsWnhXaJ35hhYGJem%2FsKRjhM986z1z7W0d606m4K3RYv1JLr0ZvmXB2m38047K38zhG8664aPwdQaWEq7g6jLEJULXIOdBOpvAaLsuNSrs7cnZEJhfO5EmKvaH%2Fapo0GPII4oJYIY%2FLYYmPGWKpKh%2BOzl5sEOyKss05ijFSwqbsZC17itOqM6gbgLsuUYue3TQRIbHmDXvd%2FXjniS4y3n3ihw%2Bf%2F1PCuGrtls8IU%2FBxIZsYSRJmf32LG%2Bukpv2xofurdSXq7SXLLvMBKZMpRMvyayWAuhU0et5nvsYbLndGP6zfxhfEnEgYzY81izBZ21xAJMWdgdZWaIA4tC4eVU0dRKKP2%2B5xihc4AmZU%2FhnSOLJApAMLOZgsEGOqUBMWF5eH40%2F5ZqqrbW6y7B0JxAmDqc8jG95Lv%2FQ%2FDQwQ98ufDW8zPl3GR%2FpXFkTA1Ep31Kt5BmIP4TmBuxNi%2FQD0bQa9GWeg14oHonOy9DPrTJgtjPemRA96qyYwgM2fOV0IRH%2FJFdnrdwPJgbOuIql7IDfaHPduzJ0Z%2BPWveCaiVrbUVpWzE2USCq1Y93C%2F2GSLN4OGdP1ywZnD7FOX9arXfTO18D&X-Amz-Signature=05ee8388f22507552f0eb9661bafc5cc112161f49f7f96bad24e2c2d34427e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6NQWPVY%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCXBv6QoUp2THYNYKyxEMa7VI0P9JAdNe1oLD6vuonGDQIgMdNEBLAN%2FP3akC%2FZWK75siUkNjwUuu7r3DP5HgwVGHAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLHFdcaTxYGdR2z4CrcAx4p%2FSU9qMb6%2FcQyYMCtnHCVvp503PKC46GtolK1R9w2RmmMp1N6GapNK8OrrNhP3KGrzD14llvwjLvssjymvBx3%2BPuIu4IqELeysa56Iu%2FJl8F0d%2B07o8qXBF%2BEEQAaoWmYxCg2UHR9cq6gUymrFXYeMDLR%2BEP20%2Bt0muYnei63xE5CzKVbUTTzKE7CGo1W%2B0lfVDtmizqeFUs2kjIi9FbrgNZhfxRJZPANeCWQFvr3qJCifjkBTK5ap%2FxLonAM4K7zbPg6UakWsWnhXaJ35hhYGJem%2FsKRjhM986z1z7W0d606m4K3RYv1JLr0ZvmXB2m38047K38zhG8664aPwdQaWEq7g6jLEJULXIOdBOpvAaLsuNSrs7cnZEJhfO5EmKvaH%2Fapo0GPII4oJYIY%2FLYYmPGWKpKh%2BOzl5sEOyKss05ijFSwqbsZC17itOqM6gbgLsuUYue3TQRIbHmDXvd%2FXjniS4y3n3ihw%2Bf%2F1PCuGrtls8IU%2FBxIZsYSRJmf32LG%2Bukpv2xofurdSXq7SXLLvMBKZMpRMvyayWAuhU0et5nvsYbLndGP6zfxhfEnEgYzY81izBZ21xAJMWdgdZWaIA4tC4eVU0dRKKP2%2B5xihc4AmZU%2FhnSOLJApAMLOZgsEGOqUBMWF5eH40%2F5ZqqrbW6y7B0JxAmDqc8jG95Lv%2FQ%2FDQwQ98ufDW8zPl3GR%2FpXFkTA1Ep31Kt5BmIP4TmBuxNi%2FQD0bQa9GWeg14oHonOy9DPrTJgtjPemRA96qyYwgM2fOV0IRH%2FJFdnrdwPJgbOuIql7IDfaHPduzJ0Z%2BPWveCaiVrbUVpWzE2USCq1Y93C%2F2GSLN4OGdP1ywZnD7FOX9arXfTO18D&X-Amz-Signature=349cb99503dbf23485d09a0e003bbbf68bb975b4a32510a0dc52e86804e7882c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
