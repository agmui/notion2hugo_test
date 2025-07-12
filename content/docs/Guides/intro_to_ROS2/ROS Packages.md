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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK7A5VF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9WAHnykGMiJBJ1d8a5pcuG2RcHZE14WpJa0lm7ytqCAiB%2F7k%2Bu%2F9jUpzcE4ImcFONen6SuGI2GWt4QWesdXr9zHiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78neD%2F980WdxEFa8KtwDgrjVVg8rgxy%2BIXrj%2BsXR%2FM6b3OtlgUHGTIgStY1FuxFbSu23NdBT%2FaxANd6jvAB9gkt3McRBmdIEX1yNYYsOrjXUUP30uezycXR4JhJ4MTivsc0bYc%2B%2FJLTYIcggq6IyUv4fxJ9qWW2g7Oxl%2FWO9PqSHkOM7n3KD6HfQnsnHq%2BbyvY%2Bvh%2FN9lNcMKQP1N4DkqsEnaDi6yGIpBRIwe10q5fJq7p5NP%2BwP5y1HEzsJGld8Q9Fd%2F3o8bTWF40HoKPKGgQ0tvu96mHgTnzcWOJKU2bF3uShDFNiQeuv3pvjABOR9AnlsrH8I6BTBRErnighkING2oUCJQ7%2FcN9gMRNeRldT6y4wcMDVLv1mmHzCVKbKl9JZojC1N7y4nbJZEK5oIDq1mF7zWgllqVTCNLx6svNihd1%2FlJgzhOPqm0wZ3uZuCYu3TqfeJ9lr0N0pUXcC%2F8sVfwoDDfdUfjUI9Q6PSKsf02u%2FMgbhLpObiKaS%2FtDdgZTaGl7Y0QBs39ya5zhafJBPqc2UKoiKMH2%2FA3mgsBDxFhnqRpOQXmhX2W%2FdKSEqsFjnt8BwRhGOrbK1OhS2Cb7w67t%2BO%2BUkb0Y5diU5p%2BybNYn0jLBU%2B0KjuTWzmCrYLnbogYzPXZNI5GuQwq7XGwwY6pgF%2FyeXuLO6Q7hG8PdAaLaYGa6yfABAnyWSXA33xeJPpIrchi3%2F4pBKYnuLoh7kW7jpqv23WGwULSA0dKudmtTpFjMGO1MvM3LeZYqEjFwZvk3GCNNPxhbjdonSZrLItAEwIbgIZNSX%2FYNQ62t7ilPNWCVFB0bh2VcW%2Fc7rY8WaZdy1U2mCRlW4oP4cNwNaqylNUgi%2B%2BIB8jKDe%2B3OU5Sp69q0Ovjk7w&X-Amz-Signature=49922dbe326dbd85001225892734994907e6df33c528aac5cdbe8c1a4f92e94c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK7A5VF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9WAHnykGMiJBJ1d8a5pcuG2RcHZE14WpJa0lm7ytqCAiB%2F7k%2Bu%2F9jUpzcE4ImcFONen6SuGI2GWt4QWesdXr9zHiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78neD%2F980WdxEFa8KtwDgrjVVg8rgxy%2BIXrj%2BsXR%2FM6b3OtlgUHGTIgStY1FuxFbSu23NdBT%2FaxANd6jvAB9gkt3McRBmdIEX1yNYYsOrjXUUP30uezycXR4JhJ4MTivsc0bYc%2B%2FJLTYIcggq6IyUv4fxJ9qWW2g7Oxl%2FWO9PqSHkOM7n3KD6HfQnsnHq%2BbyvY%2Bvh%2FN9lNcMKQP1N4DkqsEnaDi6yGIpBRIwe10q5fJq7p5NP%2BwP5y1HEzsJGld8Q9Fd%2F3o8bTWF40HoKPKGgQ0tvu96mHgTnzcWOJKU2bF3uShDFNiQeuv3pvjABOR9AnlsrH8I6BTBRErnighkING2oUCJQ7%2FcN9gMRNeRldT6y4wcMDVLv1mmHzCVKbKl9JZojC1N7y4nbJZEK5oIDq1mF7zWgllqVTCNLx6svNihd1%2FlJgzhOPqm0wZ3uZuCYu3TqfeJ9lr0N0pUXcC%2F8sVfwoDDfdUfjUI9Q6PSKsf02u%2FMgbhLpObiKaS%2FtDdgZTaGl7Y0QBs39ya5zhafJBPqc2UKoiKMH2%2FA3mgsBDxFhnqRpOQXmhX2W%2FdKSEqsFjnt8BwRhGOrbK1OhS2Cb7w67t%2BO%2BUkb0Y5diU5p%2BybNYn0jLBU%2B0KjuTWzmCrYLnbogYzPXZNI5GuQwq7XGwwY6pgF%2FyeXuLO6Q7hG8PdAaLaYGa6yfABAnyWSXA33xeJPpIrchi3%2F4pBKYnuLoh7kW7jpqv23WGwULSA0dKudmtTpFjMGO1MvM3LeZYqEjFwZvk3GCNNPxhbjdonSZrLItAEwIbgIZNSX%2FYNQ62t7ilPNWCVFB0bh2VcW%2Fc7rY8WaZdy1U2mCRlW4oP4cNwNaqylNUgi%2B%2BIB8jKDe%2B3OU5Sp69q0Ovjk7w&X-Amz-Signature=c8b041467e749ff59a40665f8ce21dcb6d132bfa2ab8a77a09f1bc65e67af0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK7A5VF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9WAHnykGMiJBJ1d8a5pcuG2RcHZE14WpJa0lm7ytqCAiB%2F7k%2Bu%2F9jUpzcE4ImcFONen6SuGI2GWt4QWesdXr9zHiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78neD%2F980WdxEFa8KtwDgrjVVg8rgxy%2BIXrj%2BsXR%2FM6b3OtlgUHGTIgStY1FuxFbSu23NdBT%2FaxANd6jvAB9gkt3McRBmdIEX1yNYYsOrjXUUP30uezycXR4JhJ4MTivsc0bYc%2B%2FJLTYIcggq6IyUv4fxJ9qWW2g7Oxl%2FWO9PqSHkOM7n3KD6HfQnsnHq%2BbyvY%2Bvh%2FN9lNcMKQP1N4DkqsEnaDi6yGIpBRIwe10q5fJq7p5NP%2BwP5y1HEzsJGld8Q9Fd%2F3o8bTWF40HoKPKGgQ0tvu96mHgTnzcWOJKU2bF3uShDFNiQeuv3pvjABOR9AnlsrH8I6BTBRErnighkING2oUCJQ7%2FcN9gMRNeRldT6y4wcMDVLv1mmHzCVKbKl9JZojC1N7y4nbJZEK5oIDq1mF7zWgllqVTCNLx6svNihd1%2FlJgzhOPqm0wZ3uZuCYu3TqfeJ9lr0N0pUXcC%2F8sVfwoDDfdUfjUI9Q6PSKsf02u%2FMgbhLpObiKaS%2FtDdgZTaGl7Y0QBs39ya5zhafJBPqc2UKoiKMH2%2FA3mgsBDxFhnqRpOQXmhX2W%2FdKSEqsFjnt8BwRhGOrbK1OhS2Cb7w67t%2BO%2BUkb0Y5diU5p%2BybNYn0jLBU%2B0KjuTWzmCrYLnbogYzPXZNI5GuQwq7XGwwY6pgF%2FyeXuLO6Q7hG8PdAaLaYGa6yfABAnyWSXA33xeJPpIrchi3%2F4pBKYnuLoh7kW7jpqv23WGwULSA0dKudmtTpFjMGO1MvM3LeZYqEjFwZvk3GCNNPxhbjdonSZrLItAEwIbgIZNSX%2FYNQ62t7ilPNWCVFB0bh2VcW%2Fc7rY8WaZdy1U2mCRlW4oP4cNwNaqylNUgi%2B%2BIB8jKDe%2B3OU5Sp69q0Ovjk7w&X-Amz-Signature=fdddcea9216eb20bd19c8779b50f61d07cc9e3548abc83efcbe42225ec8f32a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK7A5VF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9WAHnykGMiJBJ1d8a5pcuG2RcHZE14WpJa0lm7ytqCAiB%2F7k%2Bu%2F9jUpzcE4ImcFONen6SuGI2GWt4QWesdXr9zHiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78neD%2F980WdxEFa8KtwDgrjVVg8rgxy%2BIXrj%2BsXR%2FM6b3OtlgUHGTIgStY1FuxFbSu23NdBT%2FaxANd6jvAB9gkt3McRBmdIEX1yNYYsOrjXUUP30uezycXR4JhJ4MTivsc0bYc%2B%2FJLTYIcggq6IyUv4fxJ9qWW2g7Oxl%2FWO9PqSHkOM7n3KD6HfQnsnHq%2BbyvY%2Bvh%2FN9lNcMKQP1N4DkqsEnaDi6yGIpBRIwe10q5fJq7p5NP%2BwP5y1HEzsJGld8Q9Fd%2F3o8bTWF40HoKPKGgQ0tvu96mHgTnzcWOJKU2bF3uShDFNiQeuv3pvjABOR9AnlsrH8I6BTBRErnighkING2oUCJQ7%2FcN9gMRNeRldT6y4wcMDVLv1mmHzCVKbKl9JZojC1N7y4nbJZEK5oIDq1mF7zWgllqVTCNLx6svNihd1%2FlJgzhOPqm0wZ3uZuCYu3TqfeJ9lr0N0pUXcC%2F8sVfwoDDfdUfjUI9Q6PSKsf02u%2FMgbhLpObiKaS%2FtDdgZTaGl7Y0QBs39ya5zhafJBPqc2UKoiKMH2%2FA3mgsBDxFhnqRpOQXmhX2W%2FdKSEqsFjnt8BwRhGOrbK1OhS2Cb7w67t%2BO%2BUkb0Y5diU5p%2BybNYn0jLBU%2B0KjuTWzmCrYLnbogYzPXZNI5GuQwq7XGwwY6pgF%2FyeXuLO6Q7hG8PdAaLaYGa6yfABAnyWSXA33xeJPpIrchi3%2F4pBKYnuLoh7kW7jpqv23WGwULSA0dKudmtTpFjMGO1MvM3LeZYqEjFwZvk3GCNNPxhbjdonSZrLItAEwIbgIZNSX%2FYNQ62t7ilPNWCVFB0bh2VcW%2Fc7rY8WaZdy1U2mCRlW4oP4cNwNaqylNUgi%2B%2BIB8jKDe%2B3OU5Sp69q0Ovjk7w&X-Amz-Signature=67e7c05e4582bc4cb4ad76aab02c592c9fd677412c18b4339c666493bc04c46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK7A5VF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9WAHnykGMiJBJ1d8a5pcuG2RcHZE14WpJa0lm7ytqCAiB%2F7k%2Bu%2F9jUpzcE4ImcFONen6SuGI2GWt4QWesdXr9zHiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78neD%2F980WdxEFa8KtwDgrjVVg8rgxy%2BIXrj%2BsXR%2FM6b3OtlgUHGTIgStY1FuxFbSu23NdBT%2FaxANd6jvAB9gkt3McRBmdIEX1yNYYsOrjXUUP30uezycXR4JhJ4MTivsc0bYc%2B%2FJLTYIcggq6IyUv4fxJ9qWW2g7Oxl%2FWO9PqSHkOM7n3KD6HfQnsnHq%2BbyvY%2Bvh%2FN9lNcMKQP1N4DkqsEnaDi6yGIpBRIwe10q5fJq7p5NP%2BwP5y1HEzsJGld8Q9Fd%2F3o8bTWF40HoKPKGgQ0tvu96mHgTnzcWOJKU2bF3uShDFNiQeuv3pvjABOR9AnlsrH8I6BTBRErnighkING2oUCJQ7%2FcN9gMRNeRldT6y4wcMDVLv1mmHzCVKbKl9JZojC1N7y4nbJZEK5oIDq1mF7zWgllqVTCNLx6svNihd1%2FlJgzhOPqm0wZ3uZuCYu3TqfeJ9lr0N0pUXcC%2F8sVfwoDDfdUfjUI9Q6PSKsf02u%2FMgbhLpObiKaS%2FtDdgZTaGl7Y0QBs39ya5zhafJBPqc2UKoiKMH2%2FA3mgsBDxFhnqRpOQXmhX2W%2FdKSEqsFjnt8BwRhGOrbK1OhS2Cb7w67t%2BO%2BUkb0Y5diU5p%2BybNYn0jLBU%2B0KjuTWzmCrYLnbogYzPXZNI5GuQwq7XGwwY6pgF%2FyeXuLO6Q7hG8PdAaLaYGa6yfABAnyWSXA33xeJPpIrchi3%2F4pBKYnuLoh7kW7jpqv23WGwULSA0dKudmtTpFjMGO1MvM3LeZYqEjFwZvk3GCNNPxhbjdonSZrLItAEwIbgIZNSX%2FYNQ62t7ilPNWCVFB0bh2VcW%2Fc7rY8WaZdy1U2mCRlW4oP4cNwNaqylNUgi%2B%2BIB8jKDe%2B3OU5Sp69q0Ovjk7w&X-Amz-Signature=6aae846b331110e80a4c31af70072a0b0d17d9c3de2530e23f3e50ace34e791d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK7A5VF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9WAHnykGMiJBJ1d8a5pcuG2RcHZE14WpJa0lm7ytqCAiB%2F7k%2Bu%2F9jUpzcE4ImcFONen6SuGI2GWt4QWesdXr9zHiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78neD%2F980WdxEFa8KtwDgrjVVg8rgxy%2BIXrj%2BsXR%2FM6b3OtlgUHGTIgStY1FuxFbSu23NdBT%2FaxANd6jvAB9gkt3McRBmdIEX1yNYYsOrjXUUP30uezycXR4JhJ4MTivsc0bYc%2B%2FJLTYIcggq6IyUv4fxJ9qWW2g7Oxl%2FWO9PqSHkOM7n3KD6HfQnsnHq%2BbyvY%2Bvh%2FN9lNcMKQP1N4DkqsEnaDi6yGIpBRIwe10q5fJq7p5NP%2BwP5y1HEzsJGld8Q9Fd%2F3o8bTWF40HoKPKGgQ0tvu96mHgTnzcWOJKU2bF3uShDFNiQeuv3pvjABOR9AnlsrH8I6BTBRErnighkING2oUCJQ7%2FcN9gMRNeRldT6y4wcMDVLv1mmHzCVKbKl9JZojC1N7y4nbJZEK5oIDq1mF7zWgllqVTCNLx6svNihd1%2FlJgzhOPqm0wZ3uZuCYu3TqfeJ9lr0N0pUXcC%2F8sVfwoDDfdUfjUI9Q6PSKsf02u%2FMgbhLpObiKaS%2FtDdgZTaGl7Y0QBs39ya5zhafJBPqc2UKoiKMH2%2FA3mgsBDxFhnqRpOQXmhX2W%2FdKSEqsFjnt8BwRhGOrbK1OhS2Cb7w67t%2BO%2BUkb0Y5diU5p%2BybNYn0jLBU%2B0KjuTWzmCrYLnbogYzPXZNI5GuQwq7XGwwY6pgF%2FyeXuLO6Q7hG8PdAaLaYGa6yfABAnyWSXA33xeJPpIrchi3%2F4pBKYnuLoh7kW7jpqv23WGwULSA0dKudmtTpFjMGO1MvM3LeZYqEjFwZvk3GCNNPxhbjdonSZrLItAEwIbgIZNSX%2FYNQ62t7ilPNWCVFB0bh2VcW%2Fc7rY8WaZdy1U2mCRlW4oP4cNwNaqylNUgi%2B%2BIB8jKDe%2B3OU5Sp69q0Ovjk7w&X-Amz-Signature=b6f2cb4d5deba10c74f70b4f6f8014455f39a485035d420b6d0b71367296a076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJK7A5VF%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T024711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9WAHnykGMiJBJ1d8a5pcuG2RcHZE14WpJa0lm7ytqCAiB%2F7k%2Bu%2F9jUpzcE4ImcFONen6SuGI2GWt4QWesdXr9zHiqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78neD%2F980WdxEFa8KtwDgrjVVg8rgxy%2BIXrj%2BsXR%2FM6b3OtlgUHGTIgStY1FuxFbSu23NdBT%2FaxANd6jvAB9gkt3McRBmdIEX1yNYYsOrjXUUP30uezycXR4JhJ4MTivsc0bYc%2B%2FJLTYIcggq6IyUv4fxJ9qWW2g7Oxl%2FWO9PqSHkOM7n3KD6HfQnsnHq%2BbyvY%2Bvh%2FN9lNcMKQP1N4DkqsEnaDi6yGIpBRIwe10q5fJq7p5NP%2BwP5y1HEzsJGld8Q9Fd%2F3o8bTWF40HoKPKGgQ0tvu96mHgTnzcWOJKU2bF3uShDFNiQeuv3pvjABOR9AnlsrH8I6BTBRErnighkING2oUCJQ7%2FcN9gMRNeRldT6y4wcMDVLv1mmHzCVKbKl9JZojC1N7y4nbJZEK5oIDq1mF7zWgllqVTCNLx6svNihd1%2FlJgzhOPqm0wZ3uZuCYu3TqfeJ9lr0N0pUXcC%2F8sVfwoDDfdUfjUI9Q6PSKsf02u%2FMgbhLpObiKaS%2FtDdgZTaGl7Y0QBs39ya5zhafJBPqc2UKoiKMH2%2FA3mgsBDxFhnqRpOQXmhX2W%2FdKSEqsFjnt8BwRhGOrbK1OhS2Cb7w67t%2BO%2BUkb0Y5diU5p%2BybNYn0jLBU%2B0KjuTWzmCrYLnbogYzPXZNI5GuQwq7XGwwY6pgF%2FyeXuLO6Q7hG8PdAaLaYGa6yfABAnyWSXA33xeJPpIrchi3%2F4pBKYnuLoh7kW7jpqv23WGwULSA0dKudmtTpFjMGO1MvM3LeZYqEjFwZvk3GCNNPxhbjdonSZrLItAEwIbgIZNSX%2FYNQ62t7ilPNWCVFB0bh2VcW%2Fc7rY8WaZdy1U2mCRlW4oP4cNwNaqylNUgi%2B%2BIB8jKDe%2B3OU5Sp69q0Ovjk7w&X-Amz-Signature=58f0fa07e4a745833b703aaa9497bc28d4f4724f0ec94b57846a777a819f20ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
