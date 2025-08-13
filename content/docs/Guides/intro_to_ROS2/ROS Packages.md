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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WL6QT7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4NsLZfBRoAmCiW9Z49BvX6BhuCpfWeLNS0%2BXC4VltQIgHKPDALeVd9mE9fa%2BiXnZ4Q0F%2FNEMfxm9NbcEHOwhXHQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPWcJajkttSudK1WGCrcA64bzk1zU0LoWx18RGvqs8cIFpopbsd2WtrlvR3yUGnISoyHKfrDF4%2BbINT5VAKxUE2bCsBMgPXPJ1icthGtvpz09eyo5R27VzYHEJ4kDFfUeEO3s1m78nTZgm8iay1Spmd8pWWHFZSh6MWsUMmaYNak5mc5WdxiTimxtwuCHUAeUU1yzS16uHwBF%2FgTo4qnqGL2Ifc1vQug7DZitdla76PvTJocPXF3LsMpODBSWeWU79y%2F%2FJsCpHOm5zr48Ciyyg9IJ3a%2F1bUIBY3hXMGvWUvXKViMHeKGRUtGeUY%2BF2AjM0MiwXxnfHjN7ircn18I9lJsFskO9yVEYqIVChrumOxfXGWO%2BKj2lq4R%2FH%2B2dy3BSlEOcIqaR9ntF4q6Enis0mPM5AsIXB5J130E9Yoqk9diP3gJC2%2BD7eMbUKIYDJp3gvZwW5YF5On3kUqT1wt8jJORK2Hw1%2FsSJKHif33z4HZ0ORGK9FjgA0m7Mj0ACsaa%2BfceOO2EAS%2Fu7s5C4F%2BZFMjvn%2F7lYdhWR95H7AnnBiA59DfkXYR5AP51ZkEM%2B8ajYYYuOvoAMbe1g3CZPj6hvnDKQheF8Wp%2Bvn1QYBustwFNvYRYyM9%2FWZltvh8rD1bd4zX4qumCNJcEvvxpMJme8cQGOqUB%2BnDfUUdym%2F8MavpqOAp8ojh4kn%2FOAc3eGTzl3bXqCV9s0cESst4okEKR5pANxtJr7pr9ZaPd9%2FB4JO7O9Vu0%2FPd0fyiSlcxSOnDP3izxtMUs4uS51kWY6XwznLKBhx0m1mfk0eZeQabnDxEQLfc4UBp4oeZokxr5zC8oPExE5ULRU%2BtBz%2B6AWZ2axTiNnXKKzLpmeugSZha2IEJRMqobP20y27kE&X-Amz-Signature=015e57545eae559be1516f8117107fd4e379110523f13137336d86a8490afd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WL6QT7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4NsLZfBRoAmCiW9Z49BvX6BhuCpfWeLNS0%2BXC4VltQIgHKPDALeVd9mE9fa%2BiXnZ4Q0F%2FNEMfxm9NbcEHOwhXHQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPWcJajkttSudK1WGCrcA64bzk1zU0LoWx18RGvqs8cIFpopbsd2WtrlvR3yUGnISoyHKfrDF4%2BbINT5VAKxUE2bCsBMgPXPJ1icthGtvpz09eyo5R27VzYHEJ4kDFfUeEO3s1m78nTZgm8iay1Spmd8pWWHFZSh6MWsUMmaYNak5mc5WdxiTimxtwuCHUAeUU1yzS16uHwBF%2FgTo4qnqGL2Ifc1vQug7DZitdla76PvTJocPXF3LsMpODBSWeWU79y%2F%2FJsCpHOm5zr48Ciyyg9IJ3a%2F1bUIBY3hXMGvWUvXKViMHeKGRUtGeUY%2BF2AjM0MiwXxnfHjN7ircn18I9lJsFskO9yVEYqIVChrumOxfXGWO%2BKj2lq4R%2FH%2B2dy3BSlEOcIqaR9ntF4q6Enis0mPM5AsIXB5J130E9Yoqk9diP3gJC2%2BD7eMbUKIYDJp3gvZwW5YF5On3kUqT1wt8jJORK2Hw1%2FsSJKHif33z4HZ0ORGK9FjgA0m7Mj0ACsaa%2BfceOO2EAS%2Fu7s5C4F%2BZFMjvn%2F7lYdhWR95H7AnnBiA59DfkXYR5AP51ZkEM%2B8ajYYYuOvoAMbe1g3CZPj6hvnDKQheF8Wp%2Bvn1QYBustwFNvYRYyM9%2FWZltvh8rD1bd4zX4qumCNJcEvvxpMJme8cQGOqUB%2BnDfUUdym%2F8MavpqOAp8ojh4kn%2FOAc3eGTzl3bXqCV9s0cESst4okEKR5pANxtJr7pr9ZaPd9%2FB4JO7O9Vu0%2FPd0fyiSlcxSOnDP3izxtMUs4uS51kWY6XwznLKBhx0m1mfk0eZeQabnDxEQLfc4UBp4oeZokxr5zC8oPExE5ULRU%2BtBz%2B6AWZ2axTiNnXKKzLpmeugSZha2IEJRMqobP20y27kE&X-Amz-Signature=1971d073205b49e73c724ceca7cd50546a0ccb63dad72a5ede569429eca2a777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WL6QT7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4NsLZfBRoAmCiW9Z49BvX6BhuCpfWeLNS0%2BXC4VltQIgHKPDALeVd9mE9fa%2BiXnZ4Q0F%2FNEMfxm9NbcEHOwhXHQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPWcJajkttSudK1WGCrcA64bzk1zU0LoWx18RGvqs8cIFpopbsd2WtrlvR3yUGnISoyHKfrDF4%2BbINT5VAKxUE2bCsBMgPXPJ1icthGtvpz09eyo5R27VzYHEJ4kDFfUeEO3s1m78nTZgm8iay1Spmd8pWWHFZSh6MWsUMmaYNak5mc5WdxiTimxtwuCHUAeUU1yzS16uHwBF%2FgTo4qnqGL2Ifc1vQug7DZitdla76PvTJocPXF3LsMpODBSWeWU79y%2F%2FJsCpHOm5zr48Ciyyg9IJ3a%2F1bUIBY3hXMGvWUvXKViMHeKGRUtGeUY%2BF2AjM0MiwXxnfHjN7ircn18I9lJsFskO9yVEYqIVChrumOxfXGWO%2BKj2lq4R%2FH%2B2dy3BSlEOcIqaR9ntF4q6Enis0mPM5AsIXB5J130E9Yoqk9diP3gJC2%2BD7eMbUKIYDJp3gvZwW5YF5On3kUqT1wt8jJORK2Hw1%2FsSJKHif33z4HZ0ORGK9FjgA0m7Mj0ACsaa%2BfceOO2EAS%2Fu7s5C4F%2BZFMjvn%2F7lYdhWR95H7AnnBiA59DfkXYR5AP51ZkEM%2B8ajYYYuOvoAMbe1g3CZPj6hvnDKQheF8Wp%2Bvn1QYBustwFNvYRYyM9%2FWZltvh8rD1bd4zX4qumCNJcEvvxpMJme8cQGOqUB%2BnDfUUdym%2F8MavpqOAp8ojh4kn%2FOAc3eGTzl3bXqCV9s0cESst4okEKR5pANxtJr7pr9ZaPd9%2FB4JO7O9Vu0%2FPd0fyiSlcxSOnDP3izxtMUs4uS51kWY6XwznLKBhx0m1mfk0eZeQabnDxEQLfc4UBp4oeZokxr5zC8oPExE5ULRU%2BtBz%2B6AWZ2axTiNnXKKzLpmeugSZha2IEJRMqobP20y27kE&X-Amz-Signature=5fdcb5fcd00ebe022d5912ee50d08ce3f2fa7441bc8bbe020d552ed8caba8ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WL6QT7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4NsLZfBRoAmCiW9Z49BvX6BhuCpfWeLNS0%2BXC4VltQIgHKPDALeVd9mE9fa%2BiXnZ4Q0F%2FNEMfxm9NbcEHOwhXHQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPWcJajkttSudK1WGCrcA64bzk1zU0LoWx18RGvqs8cIFpopbsd2WtrlvR3yUGnISoyHKfrDF4%2BbINT5VAKxUE2bCsBMgPXPJ1icthGtvpz09eyo5R27VzYHEJ4kDFfUeEO3s1m78nTZgm8iay1Spmd8pWWHFZSh6MWsUMmaYNak5mc5WdxiTimxtwuCHUAeUU1yzS16uHwBF%2FgTo4qnqGL2Ifc1vQug7DZitdla76PvTJocPXF3LsMpODBSWeWU79y%2F%2FJsCpHOm5zr48Ciyyg9IJ3a%2F1bUIBY3hXMGvWUvXKViMHeKGRUtGeUY%2BF2AjM0MiwXxnfHjN7ircn18I9lJsFskO9yVEYqIVChrumOxfXGWO%2BKj2lq4R%2FH%2B2dy3BSlEOcIqaR9ntF4q6Enis0mPM5AsIXB5J130E9Yoqk9diP3gJC2%2BD7eMbUKIYDJp3gvZwW5YF5On3kUqT1wt8jJORK2Hw1%2FsSJKHif33z4HZ0ORGK9FjgA0m7Mj0ACsaa%2BfceOO2EAS%2Fu7s5C4F%2BZFMjvn%2F7lYdhWR95H7AnnBiA59DfkXYR5AP51ZkEM%2B8ajYYYuOvoAMbe1g3CZPj6hvnDKQheF8Wp%2Bvn1QYBustwFNvYRYyM9%2FWZltvh8rD1bd4zX4qumCNJcEvvxpMJme8cQGOqUB%2BnDfUUdym%2F8MavpqOAp8ojh4kn%2FOAc3eGTzl3bXqCV9s0cESst4okEKR5pANxtJr7pr9ZaPd9%2FB4JO7O9Vu0%2FPd0fyiSlcxSOnDP3izxtMUs4uS51kWY6XwznLKBhx0m1mfk0eZeQabnDxEQLfc4UBp4oeZokxr5zC8oPExE5ULRU%2BtBz%2B6AWZ2axTiNnXKKzLpmeugSZha2IEJRMqobP20y27kE&X-Amz-Signature=9d08f9472c73a0ec1d9c6b9de4e7aa3be99695c35cccce8ac600f21c00e17995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WL6QT7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4NsLZfBRoAmCiW9Z49BvX6BhuCpfWeLNS0%2BXC4VltQIgHKPDALeVd9mE9fa%2BiXnZ4Q0F%2FNEMfxm9NbcEHOwhXHQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPWcJajkttSudK1WGCrcA64bzk1zU0LoWx18RGvqs8cIFpopbsd2WtrlvR3yUGnISoyHKfrDF4%2BbINT5VAKxUE2bCsBMgPXPJ1icthGtvpz09eyo5R27VzYHEJ4kDFfUeEO3s1m78nTZgm8iay1Spmd8pWWHFZSh6MWsUMmaYNak5mc5WdxiTimxtwuCHUAeUU1yzS16uHwBF%2FgTo4qnqGL2Ifc1vQug7DZitdla76PvTJocPXF3LsMpODBSWeWU79y%2F%2FJsCpHOm5zr48Ciyyg9IJ3a%2F1bUIBY3hXMGvWUvXKViMHeKGRUtGeUY%2BF2AjM0MiwXxnfHjN7ircn18I9lJsFskO9yVEYqIVChrumOxfXGWO%2BKj2lq4R%2FH%2B2dy3BSlEOcIqaR9ntF4q6Enis0mPM5AsIXB5J130E9Yoqk9diP3gJC2%2BD7eMbUKIYDJp3gvZwW5YF5On3kUqT1wt8jJORK2Hw1%2FsSJKHif33z4HZ0ORGK9FjgA0m7Mj0ACsaa%2BfceOO2EAS%2Fu7s5C4F%2BZFMjvn%2F7lYdhWR95H7AnnBiA59DfkXYR5AP51ZkEM%2B8ajYYYuOvoAMbe1g3CZPj6hvnDKQheF8Wp%2Bvn1QYBustwFNvYRYyM9%2FWZltvh8rD1bd4zX4qumCNJcEvvxpMJme8cQGOqUB%2BnDfUUdym%2F8MavpqOAp8ojh4kn%2FOAc3eGTzl3bXqCV9s0cESst4okEKR5pANxtJr7pr9ZaPd9%2FB4JO7O9Vu0%2FPd0fyiSlcxSOnDP3izxtMUs4uS51kWY6XwznLKBhx0m1mfk0eZeQabnDxEQLfc4UBp4oeZokxr5zC8oPExE5ULRU%2BtBz%2B6AWZ2axTiNnXKKzLpmeugSZha2IEJRMqobP20y27kE&X-Amz-Signature=0d1685ba03998e98e423fb10dbf3d14d27247ce8ae4abecfb785050345de4ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WL6QT7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4NsLZfBRoAmCiW9Z49BvX6BhuCpfWeLNS0%2BXC4VltQIgHKPDALeVd9mE9fa%2BiXnZ4Q0F%2FNEMfxm9NbcEHOwhXHQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPWcJajkttSudK1WGCrcA64bzk1zU0LoWx18RGvqs8cIFpopbsd2WtrlvR3yUGnISoyHKfrDF4%2BbINT5VAKxUE2bCsBMgPXPJ1icthGtvpz09eyo5R27VzYHEJ4kDFfUeEO3s1m78nTZgm8iay1Spmd8pWWHFZSh6MWsUMmaYNak5mc5WdxiTimxtwuCHUAeUU1yzS16uHwBF%2FgTo4qnqGL2Ifc1vQug7DZitdla76PvTJocPXF3LsMpODBSWeWU79y%2F%2FJsCpHOm5zr48Ciyyg9IJ3a%2F1bUIBY3hXMGvWUvXKViMHeKGRUtGeUY%2BF2AjM0MiwXxnfHjN7ircn18I9lJsFskO9yVEYqIVChrumOxfXGWO%2BKj2lq4R%2FH%2B2dy3BSlEOcIqaR9ntF4q6Enis0mPM5AsIXB5J130E9Yoqk9diP3gJC2%2BD7eMbUKIYDJp3gvZwW5YF5On3kUqT1wt8jJORK2Hw1%2FsSJKHif33z4HZ0ORGK9FjgA0m7Mj0ACsaa%2BfceOO2EAS%2Fu7s5C4F%2BZFMjvn%2F7lYdhWR95H7AnnBiA59DfkXYR5AP51ZkEM%2B8ajYYYuOvoAMbe1g3CZPj6hvnDKQheF8Wp%2Bvn1QYBustwFNvYRYyM9%2FWZltvh8rD1bd4zX4qumCNJcEvvxpMJme8cQGOqUB%2BnDfUUdym%2F8MavpqOAp8ojh4kn%2FOAc3eGTzl3bXqCV9s0cESst4okEKR5pANxtJr7pr9ZaPd9%2FB4JO7O9Vu0%2FPd0fyiSlcxSOnDP3izxtMUs4uS51kWY6XwznLKBhx0m1mfk0eZeQabnDxEQLfc4UBp4oeZokxr5zC8oPExE5ULRU%2BtBz%2B6AWZ2axTiNnXKKzLpmeugSZha2IEJRMqobP20y27kE&X-Amz-Signature=30555a2727cea1c7339a5c72249c1cee20d7aad33fa66d0c4ddff634a8cf791c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WL6QT7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4NsLZfBRoAmCiW9Z49BvX6BhuCpfWeLNS0%2BXC4VltQIgHKPDALeVd9mE9fa%2BiXnZ4Q0F%2FNEMfxm9NbcEHOwhXHQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPWcJajkttSudK1WGCrcA64bzk1zU0LoWx18RGvqs8cIFpopbsd2WtrlvR3yUGnISoyHKfrDF4%2BbINT5VAKxUE2bCsBMgPXPJ1icthGtvpz09eyo5R27VzYHEJ4kDFfUeEO3s1m78nTZgm8iay1Spmd8pWWHFZSh6MWsUMmaYNak5mc5WdxiTimxtwuCHUAeUU1yzS16uHwBF%2FgTo4qnqGL2Ifc1vQug7DZitdla76PvTJocPXF3LsMpODBSWeWU79y%2F%2FJsCpHOm5zr48Ciyyg9IJ3a%2F1bUIBY3hXMGvWUvXKViMHeKGRUtGeUY%2BF2AjM0MiwXxnfHjN7ircn18I9lJsFskO9yVEYqIVChrumOxfXGWO%2BKj2lq4R%2FH%2B2dy3BSlEOcIqaR9ntF4q6Enis0mPM5AsIXB5J130E9Yoqk9diP3gJC2%2BD7eMbUKIYDJp3gvZwW5YF5On3kUqT1wt8jJORK2Hw1%2FsSJKHif33z4HZ0ORGK9FjgA0m7Mj0ACsaa%2BfceOO2EAS%2Fu7s5C4F%2BZFMjvn%2F7lYdhWR95H7AnnBiA59DfkXYR5AP51ZkEM%2B8ajYYYuOvoAMbe1g3CZPj6hvnDKQheF8Wp%2Bvn1QYBustwFNvYRYyM9%2FWZltvh8rD1bd4zX4qumCNJcEvvxpMJme8cQGOqUB%2BnDfUUdym%2F8MavpqOAp8ojh4kn%2FOAc3eGTzl3bXqCV9s0cESst4okEKR5pANxtJr7pr9ZaPd9%2FB4JO7O9Vu0%2FPd0fyiSlcxSOnDP3izxtMUs4uS51kWY6XwznLKBhx0m1mfk0eZeQabnDxEQLfc4UBp4oeZokxr5zC8oPExE5ULRU%2BtBz%2B6AWZ2axTiNnXKKzLpmeugSZha2IEJRMqobP20y27kE&X-Amz-Signature=7c1562cb6e8061b0de6850ce064e954f4c19283e9f17d9da2034bba42cdd3c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
