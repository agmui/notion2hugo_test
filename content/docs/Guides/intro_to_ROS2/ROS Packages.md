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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKIQEQ3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBnJqzWTVEs90O2M%2F2xHW%2FwG1D2PJMMrESdhwJuvqlGQIgAVKdsWzlyx9GrG%2BTmtW0aB9JHSvmT59maLvskTlGpEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZPY05KoG6dYWzRCyrcA%2FNa2gqlmOyLKQwJVhtiIdlI9Eulfk3TaEtlwSCsGKZUokdaqsiGxX9IUdu5P7hdtTZ6VzQN01MKWxutCk4NsdOowGXJpHJwaCuaxhflL5MulFiCJixPKD0irG3SoKurScWWyfcN0sfPjme1iqtMesrVSBtXh8%2Bqxc8AogFQlVaXxu83SbsvDfpwr3pXAd2LSA8bJBPTbBmlHa%2FHva4X1awz17nhDEaXrWXSCNpS%2BLEbCzM0CZpLP8Lte0%2FeWYOVXH%2F9Mjm5iYWqiRBKjSFqMq7lh1tk2%2Bvo4IgkyFl84N6th0jQn0LPJMf%2BtsKhKwNkeI3LR7em5qfkC06A5jrmfHXyL10ys%2F4l1oNJwR8CMpCK7V0BxlcZzfQMpkjNOX7U9dgLT7zeADUMxymeuVqXhz1FPahMb02Y1r9dTnj%2BZ7ZWmV7bZEpELZWV78ZHRa7l%2F0j5BP76UUF0QLBB0DCENt0OlrgzZKOcWLB8TtfTL9QCqpoHQ8hahqzDtcaQC2Q5ynG8k%2BpJpwFqdCnBXX%2FOcuO4zkQtvb%2BDTpcfBpsGRz%2BJNv8W0q7hFHiRFHLpbzRxRMprGAu0Y0%2BrgQQBUxwGbbL%2BqK9jKgW1ltVhqIkmve2x5fue3%2BIZzuB2CmQdMLey38QGOqUBR%2FWE3046FpDM5uUKQtgAeNKS8OUVlSqjBXlxHOzDux8ztLagsN%2Bk8TJ%2BxoFFmI0zZke%2FHe8Itt4Eg0bSN3R0aLbPCubqiiZkE%2BegV0Ge6v%2FvCb%2BKu8x%2FWTZFjDuKKje%2Fv0dAyzC3Y10kit752J5XzUO%2B33dwi0r9d1gMU4EXBhXsC3DPWqdLEBhbHGMI9PKAsmrBbB3vd1KdEug50SRFCzcaRJ8t&X-Amz-Signature=47a458c7c34c4e320c5d78e0e6aec3132d71638f50ee494a9b4e4836ec8b1396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKIQEQ3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBnJqzWTVEs90O2M%2F2xHW%2FwG1D2PJMMrESdhwJuvqlGQIgAVKdsWzlyx9GrG%2BTmtW0aB9JHSvmT59maLvskTlGpEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZPY05KoG6dYWzRCyrcA%2FNa2gqlmOyLKQwJVhtiIdlI9Eulfk3TaEtlwSCsGKZUokdaqsiGxX9IUdu5P7hdtTZ6VzQN01MKWxutCk4NsdOowGXJpHJwaCuaxhflL5MulFiCJixPKD0irG3SoKurScWWyfcN0sfPjme1iqtMesrVSBtXh8%2Bqxc8AogFQlVaXxu83SbsvDfpwr3pXAd2LSA8bJBPTbBmlHa%2FHva4X1awz17nhDEaXrWXSCNpS%2BLEbCzM0CZpLP8Lte0%2FeWYOVXH%2F9Mjm5iYWqiRBKjSFqMq7lh1tk2%2Bvo4IgkyFl84N6th0jQn0LPJMf%2BtsKhKwNkeI3LR7em5qfkC06A5jrmfHXyL10ys%2F4l1oNJwR8CMpCK7V0BxlcZzfQMpkjNOX7U9dgLT7zeADUMxymeuVqXhz1FPahMb02Y1r9dTnj%2BZ7ZWmV7bZEpELZWV78ZHRa7l%2F0j5BP76UUF0QLBB0DCENt0OlrgzZKOcWLB8TtfTL9QCqpoHQ8hahqzDtcaQC2Q5ynG8k%2BpJpwFqdCnBXX%2FOcuO4zkQtvb%2BDTpcfBpsGRz%2BJNv8W0q7hFHiRFHLpbzRxRMprGAu0Y0%2BrgQQBUxwGbbL%2BqK9jKgW1ltVhqIkmve2x5fue3%2BIZzuB2CmQdMLey38QGOqUBR%2FWE3046FpDM5uUKQtgAeNKS8OUVlSqjBXlxHOzDux8ztLagsN%2Bk8TJ%2BxoFFmI0zZke%2FHe8Itt4Eg0bSN3R0aLbPCubqiiZkE%2BegV0Ge6v%2FvCb%2BKu8x%2FWTZFjDuKKje%2Fv0dAyzC3Y10kit752J5XzUO%2B33dwi0r9d1gMU4EXBhXsC3DPWqdLEBhbHGMI9PKAsmrBbB3vd1KdEug50SRFCzcaRJ8t&X-Amz-Signature=d4889e69920df188baee70da34088d4271ac64a2b7eb1ff78cbc7f79481d1995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKIQEQ3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBnJqzWTVEs90O2M%2F2xHW%2FwG1D2PJMMrESdhwJuvqlGQIgAVKdsWzlyx9GrG%2BTmtW0aB9JHSvmT59maLvskTlGpEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZPY05KoG6dYWzRCyrcA%2FNa2gqlmOyLKQwJVhtiIdlI9Eulfk3TaEtlwSCsGKZUokdaqsiGxX9IUdu5P7hdtTZ6VzQN01MKWxutCk4NsdOowGXJpHJwaCuaxhflL5MulFiCJixPKD0irG3SoKurScWWyfcN0sfPjme1iqtMesrVSBtXh8%2Bqxc8AogFQlVaXxu83SbsvDfpwr3pXAd2LSA8bJBPTbBmlHa%2FHva4X1awz17nhDEaXrWXSCNpS%2BLEbCzM0CZpLP8Lte0%2FeWYOVXH%2F9Mjm5iYWqiRBKjSFqMq7lh1tk2%2Bvo4IgkyFl84N6th0jQn0LPJMf%2BtsKhKwNkeI3LR7em5qfkC06A5jrmfHXyL10ys%2F4l1oNJwR8CMpCK7V0BxlcZzfQMpkjNOX7U9dgLT7zeADUMxymeuVqXhz1FPahMb02Y1r9dTnj%2BZ7ZWmV7bZEpELZWV78ZHRa7l%2F0j5BP76UUF0QLBB0DCENt0OlrgzZKOcWLB8TtfTL9QCqpoHQ8hahqzDtcaQC2Q5ynG8k%2BpJpwFqdCnBXX%2FOcuO4zkQtvb%2BDTpcfBpsGRz%2BJNv8W0q7hFHiRFHLpbzRxRMprGAu0Y0%2BrgQQBUxwGbbL%2BqK9jKgW1ltVhqIkmve2x5fue3%2BIZzuB2CmQdMLey38QGOqUBR%2FWE3046FpDM5uUKQtgAeNKS8OUVlSqjBXlxHOzDux8ztLagsN%2Bk8TJ%2BxoFFmI0zZke%2FHe8Itt4Eg0bSN3R0aLbPCubqiiZkE%2BegV0Ge6v%2FvCb%2BKu8x%2FWTZFjDuKKje%2Fv0dAyzC3Y10kit752J5XzUO%2B33dwi0r9d1gMU4EXBhXsC3DPWqdLEBhbHGMI9PKAsmrBbB3vd1KdEug50SRFCzcaRJ8t&X-Amz-Signature=7034220f9f2e893a36996509fd4862354148b69b37df7b28ec1f3f59936362ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKIQEQ3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBnJqzWTVEs90O2M%2F2xHW%2FwG1D2PJMMrESdhwJuvqlGQIgAVKdsWzlyx9GrG%2BTmtW0aB9JHSvmT59maLvskTlGpEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZPY05KoG6dYWzRCyrcA%2FNa2gqlmOyLKQwJVhtiIdlI9Eulfk3TaEtlwSCsGKZUokdaqsiGxX9IUdu5P7hdtTZ6VzQN01MKWxutCk4NsdOowGXJpHJwaCuaxhflL5MulFiCJixPKD0irG3SoKurScWWyfcN0sfPjme1iqtMesrVSBtXh8%2Bqxc8AogFQlVaXxu83SbsvDfpwr3pXAd2LSA8bJBPTbBmlHa%2FHva4X1awz17nhDEaXrWXSCNpS%2BLEbCzM0CZpLP8Lte0%2FeWYOVXH%2F9Mjm5iYWqiRBKjSFqMq7lh1tk2%2Bvo4IgkyFl84N6th0jQn0LPJMf%2BtsKhKwNkeI3LR7em5qfkC06A5jrmfHXyL10ys%2F4l1oNJwR8CMpCK7V0BxlcZzfQMpkjNOX7U9dgLT7zeADUMxymeuVqXhz1FPahMb02Y1r9dTnj%2BZ7ZWmV7bZEpELZWV78ZHRa7l%2F0j5BP76UUF0QLBB0DCENt0OlrgzZKOcWLB8TtfTL9QCqpoHQ8hahqzDtcaQC2Q5ynG8k%2BpJpwFqdCnBXX%2FOcuO4zkQtvb%2BDTpcfBpsGRz%2BJNv8W0q7hFHiRFHLpbzRxRMprGAu0Y0%2BrgQQBUxwGbbL%2BqK9jKgW1ltVhqIkmve2x5fue3%2BIZzuB2CmQdMLey38QGOqUBR%2FWE3046FpDM5uUKQtgAeNKS8OUVlSqjBXlxHOzDux8ztLagsN%2Bk8TJ%2BxoFFmI0zZke%2FHe8Itt4Eg0bSN3R0aLbPCubqiiZkE%2BegV0Ge6v%2FvCb%2BKu8x%2FWTZFjDuKKje%2Fv0dAyzC3Y10kit752J5XzUO%2B33dwi0r9d1gMU4EXBhXsC3DPWqdLEBhbHGMI9PKAsmrBbB3vd1KdEug50SRFCzcaRJ8t&X-Amz-Signature=bd4800eb82ada12a5a43b5059367e5cdbd1ba11c47c63e5d5f49bf6c988c76c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKIQEQ3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBnJqzWTVEs90O2M%2F2xHW%2FwG1D2PJMMrESdhwJuvqlGQIgAVKdsWzlyx9GrG%2BTmtW0aB9JHSvmT59maLvskTlGpEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZPY05KoG6dYWzRCyrcA%2FNa2gqlmOyLKQwJVhtiIdlI9Eulfk3TaEtlwSCsGKZUokdaqsiGxX9IUdu5P7hdtTZ6VzQN01MKWxutCk4NsdOowGXJpHJwaCuaxhflL5MulFiCJixPKD0irG3SoKurScWWyfcN0sfPjme1iqtMesrVSBtXh8%2Bqxc8AogFQlVaXxu83SbsvDfpwr3pXAd2LSA8bJBPTbBmlHa%2FHva4X1awz17nhDEaXrWXSCNpS%2BLEbCzM0CZpLP8Lte0%2FeWYOVXH%2F9Mjm5iYWqiRBKjSFqMq7lh1tk2%2Bvo4IgkyFl84N6th0jQn0LPJMf%2BtsKhKwNkeI3LR7em5qfkC06A5jrmfHXyL10ys%2F4l1oNJwR8CMpCK7V0BxlcZzfQMpkjNOX7U9dgLT7zeADUMxymeuVqXhz1FPahMb02Y1r9dTnj%2BZ7ZWmV7bZEpELZWV78ZHRa7l%2F0j5BP76UUF0QLBB0DCENt0OlrgzZKOcWLB8TtfTL9QCqpoHQ8hahqzDtcaQC2Q5ynG8k%2BpJpwFqdCnBXX%2FOcuO4zkQtvb%2BDTpcfBpsGRz%2BJNv8W0q7hFHiRFHLpbzRxRMprGAu0Y0%2BrgQQBUxwGbbL%2BqK9jKgW1ltVhqIkmve2x5fue3%2BIZzuB2CmQdMLey38QGOqUBR%2FWE3046FpDM5uUKQtgAeNKS8OUVlSqjBXlxHOzDux8ztLagsN%2Bk8TJ%2BxoFFmI0zZke%2FHe8Itt4Eg0bSN3R0aLbPCubqiiZkE%2BegV0Ge6v%2FvCb%2BKu8x%2FWTZFjDuKKje%2Fv0dAyzC3Y10kit752J5XzUO%2B33dwi0r9d1gMU4EXBhXsC3DPWqdLEBhbHGMI9PKAsmrBbB3vd1KdEug50SRFCzcaRJ8t&X-Amz-Signature=7cfb4c1575ee4aa2df81e8d05206d250d77b9e5afea9b8c1f5f670094ef88dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKIQEQ3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBnJqzWTVEs90O2M%2F2xHW%2FwG1D2PJMMrESdhwJuvqlGQIgAVKdsWzlyx9GrG%2BTmtW0aB9JHSvmT59maLvskTlGpEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZPY05KoG6dYWzRCyrcA%2FNa2gqlmOyLKQwJVhtiIdlI9Eulfk3TaEtlwSCsGKZUokdaqsiGxX9IUdu5P7hdtTZ6VzQN01MKWxutCk4NsdOowGXJpHJwaCuaxhflL5MulFiCJixPKD0irG3SoKurScWWyfcN0sfPjme1iqtMesrVSBtXh8%2Bqxc8AogFQlVaXxu83SbsvDfpwr3pXAd2LSA8bJBPTbBmlHa%2FHva4X1awz17nhDEaXrWXSCNpS%2BLEbCzM0CZpLP8Lte0%2FeWYOVXH%2F9Mjm5iYWqiRBKjSFqMq7lh1tk2%2Bvo4IgkyFl84N6th0jQn0LPJMf%2BtsKhKwNkeI3LR7em5qfkC06A5jrmfHXyL10ys%2F4l1oNJwR8CMpCK7V0BxlcZzfQMpkjNOX7U9dgLT7zeADUMxymeuVqXhz1FPahMb02Y1r9dTnj%2BZ7ZWmV7bZEpELZWV78ZHRa7l%2F0j5BP76UUF0QLBB0DCENt0OlrgzZKOcWLB8TtfTL9QCqpoHQ8hahqzDtcaQC2Q5ynG8k%2BpJpwFqdCnBXX%2FOcuO4zkQtvb%2BDTpcfBpsGRz%2BJNv8W0q7hFHiRFHLpbzRxRMprGAu0Y0%2BrgQQBUxwGbbL%2BqK9jKgW1ltVhqIkmve2x5fue3%2BIZzuB2CmQdMLey38QGOqUBR%2FWE3046FpDM5uUKQtgAeNKS8OUVlSqjBXlxHOzDux8ztLagsN%2Bk8TJ%2BxoFFmI0zZke%2FHe8Itt4Eg0bSN3R0aLbPCubqiiZkE%2BegV0Ge6v%2FvCb%2BKu8x%2FWTZFjDuKKje%2Fv0dAyzC3Y10kit752J5XzUO%2B33dwi0r9d1gMU4EXBhXsC3DPWqdLEBhbHGMI9PKAsmrBbB3vd1KdEug50SRFCzcaRJ8t&X-Amz-Signature=1badbac187281f515488d5ef2176154b109302c49343523fccd5b7275e256e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEKIQEQ3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBnJqzWTVEs90O2M%2F2xHW%2FwG1D2PJMMrESdhwJuvqlGQIgAVKdsWzlyx9GrG%2BTmtW0aB9JHSvmT59maLvskTlGpEcqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZPY05KoG6dYWzRCyrcA%2FNa2gqlmOyLKQwJVhtiIdlI9Eulfk3TaEtlwSCsGKZUokdaqsiGxX9IUdu5P7hdtTZ6VzQN01MKWxutCk4NsdOowGXJpHJwaCuaxhflL5MulFiCJixPKD0irG3SoKurScWWyfcN0sfPjme1iqtMesrVSBtXh8%2Bqxc8AogFQlVaXxu83SbsvDfpwr3pXAd2LSA8bJBPTbBmlHa%2FHva4X1awz17nhDEaXrWXSCNpS%2BLEbCzM0CZpLP8Lte0%2FeWYOVXH%2F9Mjm5iYWqiRBKjSFqMq7lh1tk2%2Bvo4IgkyFl84N6th0jQn0LPJMf%2BtsKhKwNkeI3LR7em5qfkC06A5jrmfHXyL10ys%2F4l1oNJwR8CMpCK7V0BxlcZzfQMpkjNOX7U9dgLT7zeADUMxymeuVqXhz1FPahMb02Y1r9dTnj%2BZ7ZWmV7bZEpELZWV78ZHRa7l%2F0j5BP76UUF0QLBB0DCENt0OlrgzZKOcWLB8TtfTL9QCqpoHQ8hahqzDtcaQC2Q5ynG8k%2BpJpwFqdCnBXX%2FOcuO4zkQtvb%2BDTpcfBpsGRz%2BJNv8W0q7hFHiRFHLpbzRxRMprGAu0Y0%2BrgQQBUxwGbbL%2BqK9jKgW1ltVhqIkmve2x5fue3%2BIZzuB2CmQdMLey38QGOqUBR%2FWE3046FpDM5uUKQtgAeNKS8OUVlSqjBXlxHOzDux8ztLagsN%2Bk8TJ%2BxoFFmI0zZke%2FHe8Itt4Eg0bSN3R0aLbPCubqiiZkE%2BegV0Ge6v%2FvCb%2BKu8x%2FWTZFjDuKKje%2Fv0dAyzC3Y10kit752J5XzUO%2B33dwi0r9d1gMU4EXBhXsC3DPWqdLEBhbHGMI9PKAsmrBbB3vd1KdEug50SRFCzcaRJ8t&X-Amz-Signature=04c2ef6d6bd6122491d054fe24f96dcb363aac8866ca514997e5da0a8718f275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
