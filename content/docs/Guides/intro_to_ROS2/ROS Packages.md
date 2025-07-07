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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWKWTTS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCc%2BxbGKNsbJ9BMx0eCdkidtQhUk2NT0Yxx%2BFZoEjYYvAIgdOCFo4Q7GmFYzDCqC%2BHsFSyW9Ik9MA7V1u5MK789fRYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPs%2FNpweuVW%2Fn9FY0ircAw2ZW0PedlUYaocYhsjboWhvEEdK5GhJ8BW8OkIQ5oo%2Ffc6wan%2BHzVXmOnnxoiTcC85ZxdXCh4I8DOMVpiVmLiq3EfKNHsqhN%2Ft1EHf9TbUrBA4PWRxrEm3D2kEjI2xwEIwXPM6Y3ojG4Ymb9kNSTMoN3qB%2B9kPAvXYorKXo0eUi2gaVw5MKw7TIJ82rwwuUsoU0Sy%2BJ%2FNm79rdr3Tcelhs6sf04MgvlgNUdwgupOKv%2Fgpsq6q1yML2%2FNVbuUhJfyl%2F2UVzAAKsHnVGr1EDrwsabfEVq7ugKqGpsbUUJF52pfHVVXEFm%2F3yKq4PAHN4Hc3k3bBl59sfR1xEBXksw04RbJA5bmmbHo%2Bq5jKbbYF%2BNRgYRNfDMssa4mO3o2CT%2F98nNIjKqyjvKlQ%2FeDB5OJwh6CTvYEGvdJM4RHiL1qif61W78XMHADo%2FokBNnq4RSs9Q6IVBb1mBhWMrBfDOr6Ol9wsj%2BR2pa7Y%2F61iGZN2emjXZhD89WTsvhzICBj8AxSws%2BM8zBVV9k0ANQquSuBmqSTHIdrhvffBD5Qb6xsWSCz9XlYn6FhkKE8JAwe5pJSCljmJkndJhYzKxeM9ihWZrDz9dPgUtNnvtN2f550fOmz3HN9GnGr5V6PPd%2FMK%2BMr8MGOqUBslC0hfF4TVdFbbvU3fZ0BaVj1OvGW5u3hs77XAMFaGuZ5gzwGa71nNs%2BtN%2Fy2pOAHRxyif3tkqbP%2FMy2pUAazDXXUI7XvFzYhL5UVTt2dhCTksbUOw9HwxOKxPo5Ih9%2FehsLEeH4mIKi9VqewblOt2O74yKFZOTJCSz2IBcK4dMFWAjdphnk1BxMfSIN7V3920q1V1JDiHZ%2FQBNZaN3gk7345Ik9&X-Amz-Signature=dd48a7ef64adee9951276f6f1ce2b512f1cb4dadf3b41cf128cde97b0977474a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWKWTTS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCc%2BxbGKNsbJ9BMx0eCdkidtQhUk2NT0Yxx%2BFZoEjYYvAIgdOCFo4Q7GmFYzDCqC%2BHsFSyW9Ik9MA7V1u5MK789fRYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPs%2FNpweuVW%2Fn9FY0ircAw2ZW0PedlUYaocYhsjboWhvEEdK5GhJ8BW8OkIQ5oo%2Ffc6wan%2BHzVXmOnnxoiTcC85ZxdXCh4I8DOMVpiVmLiq3EfKNHsqhN%2Ft1EHf9TbUrBA4PWRxrEm3D2kEjI2xwEIwXPM6Y3ojG4Ymb9kNSTMoN3qB%2B9kPAvXYorKXo0eUi2gaVw5MKw7TIJ82rwwuUsoU0Sy%2BJ%2FNm79rdr3Tcelhs6sf04MgvlgNUdwgupOKv%2Fgpsq6q1yML2%2FNVbuUhJfyl%2F2UVzAAKsHnVGr1EDrwsabfEVq7ugKqGpsbUUJF52pfHVVXEFm%2F3yKq4PAHN4Hc3k3bBl59sfR1xEBXksw04RbJA5bmmbHo%2Bq5jKbbYF%2BNRgYRNfDMssa4mO3o2CT%2F98nNIjKqyjvKlQ%2FeDB5OJwh6CTvYEGvdJM4RHiL1qif61W78XMHADo%2FokBNnq4RSs9Q6IVBb1mBhWMrBfDOr6Ol9wsj%2BR2pa7Y%2F61iGZN2emjXZhD89WTsvhzICBj8AxSws%2BM8zBVV9k0ANQquSuBmqSTHIdrhvffBD5Qb6xsWSCz9XlYn6FhkKE8JAwe5pJSCljmJkndJhYzKxeM9ihWZrDz9dPgUtNnvtN2f550fOmz3HN9GnGr5V6PPd%2FMK%2BMr8MGOqUBslC0hfF4TVdFbbvU3fZ0BaVj1OvGW5u3hs77XAMFaGuZ5gzwGa71nNs%2BtN%2Fy2pOAHRxyif3tkqbP%2FMy2pUAazDXXUI7XvFzYhL5UVTt2dhCTksbUOw9HwxOKxPo5Ih9%2FehsLEeH4mIKi9VqewblOt2O74yKFZOTJCSz2IBcK4dMFWAjdphnk1BxMfSIN7V3920q1V1JDiHZ%2FQBNZaN3gk7345Ik9&X-Amz-Signature=adbb29b451754386de8d9e26ce95985203f2cbdeed6d7c622cad8001439dc583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWKWTTS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCc%2BxbGKNsbJ9BMx0eCdkidtQhUk2NT0Yxx%2BFZoEjYYvAIgdOCFo4Q7GmFYzDCqC%2BHsFSyW9Ik9MA7V1u5MK789fRYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPs%2FNpweuVW%2Fn9FY0ircAw2ZW0PedlUYaocYhsjboWhvEEdK5GhJ8BW8OkIQ5oo%2Ffc6wan%2BHzVXmOnnxoiTcC85ZxdXCh4I8DOMVpiVmLiq3EfKNHsqhN%2Ft1EHf9TbUrBA4PWRxrEm3D2kEjI2xwEIwXPM6Y3ojG4Ymb9kNSTMoN3qB%2B9kPAvXYorKXo0eUi2gaVw5MKw7TIJ82rwwuUsoU0Sy%2BJ%2FNm79rdr3Tcelhs6sf04MgvlgNUdwgupOKv%2Fgpsq6q1yML2%2FNVbuUhJfyl%2F2UVzAAKsHnVGr1EDrwsabfEVq7ugKqGpsbUUJF52pfHVVXEFm%2F3yKq4PAHN4Hc3k3bBl59sfR1xEBXksw04RbJA5bmmbHo%2Bq5jKbbYF%2BNRgYRNfDMssa4mO3o2CT%2F98nNIjKqyjvKlQ%2FeDB5OJwh6CTvYEGvdJM4RHiL1qif61W78XMHADo%2FokBNnq4RSs9Q6IVBb1mBhWMrBfDOr6Ol9wsj%2BR2pa7Y%2F61iGZN2emjXZhD89WTsvhzICBj8AxSws%2BM8zBVV9k0ANQquSuBmqSTHIdrhvffBD5Qb6xsWSCz9XlYn6FhkKE8JAwe5pJSCljmJkndJhYzKxeM9ihWZrDz9dPgUtNnvtN2f550fOmz3HN9GnGr5V6PPd%2FMK%2BMr8MGOqUBslC0hfF4TVdFbbvU3fZ0BaVj1OvGW5u3hs77XAMFaGuZ5gzwGa71nNs%2BtN%2Fy2pOAHRxyif3tkqbP%2FMy2pUAazDXXUI7XvFzYhL5UVTt2dhCTksbUOw9HwxOKxPo5Ih9%2FehsLEeH4mIKi9VqewblOt2O74yKFZOTJCSz2IBcK4dMFWAjdphnk1BxMfSIN7V3920q1V1JDiHZ%2FQBNZaN3gk7345Ik9&X-Amz-Signature=ba96a255fc9df0f9ac6fa9c0466b8866b97939932d987dd174bfce483dd1c69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWKWTTS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCc%2BxbGKNsbJ9BMx0eCdkidtQhUk2NT0Yxx%2BFZoEjYYvAIgdOCFo4Q7GmFYzDCqC%2BHsFSyW9Ik9MA7V1u5MK789fRYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPs%2FNpweuVW%2Fn9FY0ircAw2ZW0PedlUYaocYhsjboWhvEEdK5GhJ8BW8OkIQ5oo%2Ffc6wan%2BHzVXmOnnxoiTcC85ZxdXCh4I8DOMVpiVmLiq3EfKNHsqhN%2Ft1EHf9TbUrBA4PWRxrEm3D2kEjI2xwEIwXPM6Y3ojG4Ymb9kNSTMoN3qB%2B9kPAvXYorKXo0eUi2gaVw5MKw7TIJ82rwwuUsoU0Sy%2BJ%2FNm79rdr3Tcelhs6sf04MgvlgNUdwgupOKv%2Fgpsq6q1yML2%2FNVbuUhJfyl%2F2UVzAAKsHnVGr1EDrwsabfEVq7ugKqGpsbUUJF52pfHVVXEFm%2F3yKq4PAHN4Hc3k3bBl59sfR1xEBXksw04RbJA5bmmbHo%2Bq5jKbbYF%2BNRgYRNfDMssa4mO3o2CT%2F98nNIjKqyjvKlQ%2FeDB5OJwh6CTvYEGvdJM4RHiL1qif61W78XMHADo%2FokBNnq4RSs9Q6IVBb1mBhWMrBfDOr6Ol9wsj%2BR2pa7Y%2F61iGZN2emjXZhD89WTsvhzICBj8AxSws%2BM8zBVV9k0ANQquSuBmqSTHIdrhvffBD5Qb6xsWSCz9XlYn6FhkKE8JAwe5pJSCljmJkndJhYzKxeM9ihWZrDz9dPgUtNnvtN2f550fOmz3HN9GnGr5V6PPd%2FMK%2BMr8MGOqUBslC0hfF4TVdFbbvU3fZ0BaVj1OvGW5u3hs77XAMFaGuZ5gzwGa71nNs%2BtN%2Fy2pOAHRxyif3tkqbP%2FMy2pUAazDXXUI7XvFzYhL5UVTt2dhCTksbUOw9HwxOKxPo5Ih9%2FehsLEeH4mIKi9VqewblOt2O74yKFZOTJCSz2IBcK4dMFWAjdphnk1BxMfSIN7V3920q1V1JDiHZ%2FQBNZaN3gk7345Ik9&X-Amz-Signature=fd658d8b0e218e29e36af6164ef569de9051615833867538d6803d8c49b01771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWKWTTS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCc%2BxbGKNsbJ9BMx0eCdkidtQhUk2NT0Yxx%2BFZoEjYYvAIgdOCFo4Q7GmFYzDCqC%2BHsFSyW9Ik9MA7V1u5MK789fRYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPs%2FNpweuVW%2Fn9FY0ircAw2ZW0PedlUYaocYhsjboWhvEEdK5GhJ8BW8OkIQ5oo%2Ffc6wan%2BHzVXmOnnxoiTcC85ZxdXCh4I8DOMVpiVmLiq3EfKNHsqhN%2Ft1EHf9TbUrBA4PWRxrEm3D2kEjI2xwEIwXPM6Y3ojG4Ymb9kNSTMoN3qB%2B9kPAvXYorKXo0eUi2gaVw5MKw7TIJ82rwwuUsoU0Sy%2BJ%2FNm79rdr3Tcelhs6sf04MgvlgNUdwgupOKv%2Fgpsq6q1yML2%2FNVbuUhJfyl%2F2UVzAAKsHnVGr1EDrwsabfEVq7ugKqGpsbUUJF52pfHVVXEFm%2F3yKq4PAHN4Hc3k3bBl59sfR1xEBXksw04RbJA5bmmbHo%2Bq5jKbbYF%2BNRgYRNfDMssa4mO3o2CT%2F98nNIjKqyjvKlQ%2FeDB5OJwh6CTvYEGvdJM4RHiL1qif61W78XMHADo%2FokBNnq4RSs9Q6IVBb1mBhWMrBfDOr6Ol9wsj%2BR2pa7Y%2F61iGZN2emjXZhD89WTsvhzICBj8AxSws%2BM8zBVV9k0ANQquSuBmqSTHIdrhvffBD5Qb6xsWSCz9XlYn6FhkKE8JAwe5pJSCljmJkndJhYzKxeM9ihWZrDz9dPgUtNnvtN2f550fOmz3HN9GnGr5V6PPd%2FMK%2BMr8MGOqUBslC0hfF4TVdFbbvU3fZ0BaVj1OvGW5u3hs77XAMFaGuZ5gzwGa71nNs%2BtN%2Fy2pOAHRxyif3tkqbP%2FMy2pUAazDXXUI7XvFzYhL5UVTt2dhCTksbUOw9HwxOKxPo5Ih9%2FehsLEeH4mIKi9VqewblOt2O74yKFZOTJCSz2IBcK4dMFWAjdphnk1BxMfSIN7V3920q1V1JDiHZ%2FQBNZaN3gk7345Ik9&X-Amz-Signature=62a5f2311448efce95cd5e9e423d05aaef9bcf917c5deb5bf1ce8cbcf8542d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWKWTTS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCc%2BxbGKNsbJ9BMx0eCdkidtQhUk2NT0Yxx%2BFZoEjYYvAIgdOCFo4Q7GmFYzDCqC%2BHsFSyW9Ik9MA7V1u5MK789fRYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPs%2FNpweuVW%2Fn9FY0ircAw2ZW0PedlUYaocYhsjboWhvEEdK5GhJ8BW8OkIQ5oo%2Ffc6wan%2BHzVXmOnnxoiTcC85ZxdXCh4I8DOMVpiVmLiq3EfKNHsqhN%2Ft1EHf9TbUrBA4PWRxrEm3D2kEjI2xwEIwXPM6Y3ojG4Ymb9kNSTMoN3qB%2B9kPAvXYorKXo0eUi2gaVw5MKw7TIJ82rwwuUsoU0Sy%2BJ%2FNm79rdr3Tcelhs6sf04MgvlgNUdwgupOKv%2Fgpsq6q1yML2%2FNVbuUhJfyl%2F2UVzAAKsHnVGr1EDrwsabfEVq7ugKqGpsbUUJF52pfHVVXEFm%2F3yKq4PAHN4Hc3k3bBl59sfR1xEBXksw04RbJA5bmmbHo%2Bq5jKbbYF%2BNRgYRNfDMssa4mO3o2CT%2F98nNIjKqyjvKlQ%2FeDB5OJwh6CTvYEGvdJM4RHiL1qif61W78XMHADo%2FokBNnq4RSs9Q6IVBb1mBhWMrBfDOr6Ol9wsj%2BR2pa7Y%2F61iGZN2emjXZhD89WTsvhzICBj8AxSws%2BM8zBVV9k0ANQquSuBmqSTHIdrhvffBD5Qb6xsWSCz9XlYn6FhkKE8JAwe5pJSCljmJkndJhYzKxeM9ihWZrDz9dPgUtNnvtN2f550fOmz3HN9GnGr5V6PPd%2FMK%2BMr8MGOqUBslC0hfF4TVdFbbvU3fZ0BaVj1OvGW5u3hs77XAMFaGuZ5gzwGa71nNs%2BtN%2Fy2pOAHRxyif3tkqbP%2FMy2pUAazDXXUI7XvFzYhL5UVTt2dhCTksbUOw9HwxOKxPo5Ih9%2FehsLEeH4mIKi9VqewblOt2O74yKFZOTJCSz2IBcK4dMFWAjdphnk1BxMfSIN7V3920q1V1JDiHZ%2FQBNZaN3gk7345Ik9&X-Amz-Signature=01fa1b7668ad32d6f73c1592bbaee4cbcdd16a0f816686816079dad48bf6e223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYWKWTTS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T140956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCc%2BxbGKNsbJ9BMx0eCdkidtQhUk2NT0Yxx%2BFZoEjYYvAIgdOCFo4Q7GmFYzDCqC%2BHsFSyW9Ik9MA7V1u5MK789fRYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPs%2FNpweuVW%2Fn9FY0ircAw2ZW0PedlUYaocYhsjboWhvEEdK5GhJ8BW8OkIQ5oo%2Ffc6wan%2BHzVXmOnnxoiTcC85ZxdXCh4I8DOMVpiVmLiq3EfKNHsqhN%2Ft1EHf9TbUrBA4PWRxrEm3D2kEjI2xwEIwXPM6Y3ojG4Ymb9kNSTMoN3qB%2B9kPAvXYorKXo0eUi2gaVw5MKw7TIJ82rwwuUsoU0Sy%2BJ%2FNm79rdr3Tcelhs6sf04MgvlgNUdwgupOKv%2Fgpsq6q1yML2%2FNVbuUhJfyl%2F2UVzAAKsHnVGr1EDrwsabfEVq7ugKqGpsbUUJF52pfHVVXEFm%2F3yKq4PAHN4Hc3k3bBl59sfR1xEBXksw04RbJA5bmmbHo%2Bq5jKbbYF%2BNRgYRNfDMssa4mO3o2CT%2F98nNIjKqyjvKlQ%2FeDB5OJwh6CTvYEGvdJM4RHiL1qif61W78XMHADo%2FokBNnq4RSs9Q6IVBb1mBhWMrBfDOr6Ol9wsj%2BR2pa7Y%2F61iGZN2emjXZhD89WTsvhzICBj8AxSws%2BM8zBVV9k0ANQquSuBmqSTHIdrhvffBD5Qb6xsWSCz9XlYn6FhkKE8JAwe5pJSCljmJkndJhYzKxeM9ihWZrDz9dPgUtNnvtN2f550fOmz3HN9GnGr5V6PPd%2FMK%2BMr8MGOqUBslC0hfF4TVdFbbvU3fZ0BaVj1OvGW5u3hs77XAMFaGuZ5gzwGa71nNs%2BtN%2Fy2pOAHRxyif3tkqbP%2FMy2pUAazDXXUI7XvFzYhL5UVTt2dhCTksbUOw9HwxOKxPo5Ih9%2FehsLEeH4mIKi9VqewblOt2O74yKFZOTJCSz2IBcK4dMFWAjdphnk1BxMfSIN7V3920q1V1JDiHZ%2FQBNZaN3gk7345Ik9&X-Amz-Signature=96a36e0f2c4bdcb317bb589270f59fc23217c937c44c87e06cf6d38346e2d6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
