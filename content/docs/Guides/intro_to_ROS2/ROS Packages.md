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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSPROET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCrZPaIfKXCp5gcXhKITFif437cAqfCZgLM%2BGhbbeHbeQIgAJWSSoiDZvYomvkOpimaC%2Brj3O9qIsSHK2WyfK8LrV8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMc2WpKCAOeX3U%2BWSrcA31qQRoOKY0AoBKwUJV9CKlutoBCbz%2BdN375GLe9Y7wI3VGzKfv%2B54duZoWGzugFyh1ow1n84O1Wb91WMqPSomq4W7KNcA4hrnm2kV1pEAHxF2c31Xk8mBIXDlTRZnYoQkqh6ANCHs%2FRJb8P72hJQrIUuQ238nzqUy7iVrGpzsiK8plThxehtI3hSVFF6mOmvyL1w0iJ4Bw3zsjYp67%2FM4f98Mnshjdb5Vuj%2FDFo0BMXmAjvYNrZZNNnJxoHkiomYAT4umD2NPAnsTRUEHD%2BauXLGJyabHI%2FSSnUAmKkMRboQ%2F%2BmWRtpL9gS0iaD6tvhr4ioMUQLB2%2FsDZ9WLJ15zolSTietwPEFYrHDmR5V3SIhPgNQsxVTbkbg8eIhRmCybK6BPmF7x0rtAcpDIATtqgsP3CbmT5zNmL5F9U7bjJ4agevWNMvx9fxvhSRq7QWmr5D4ABX%2FFoxyB3dN2PRLJB4Ri54fnPD8ZI5pzJ8qXLyFlrgvi5NCItbb6UmNgwrMc%2FZ%2FsJS%2B29ZvQNyMNRTPjqkjdv2QZhYHA%2F7jDUn9h%2FIBGZVY4pioRJEvn8I3k50GFKv7hwj2hcvc1CYioRvRosrevbBg6e5OWrebIOLBEuZW56HlS%2FFQYEZHxzIlMJXFvMEGOqUBX81g8Fo7iO50ZKhC6IP1oBVDA%2BycJ0llCo6vFNwwfRQbO6AgNjf8DSSzltYS4T293m%2B0kk473hfvX9EoZ9Xdq5lWym%2FxwAG%2FehAoYaGvWqxYkmu4zq%2FcKec5nKtb%2BT2dYcsu%2BmTx1QZM%2FcGu%2BEcLv93h5Tshw7opLcN4654PQ2FF%2FF4ba1uD97fYHaCzIO4Gf9EgJUqwFQDgHGhsveL7jaWd5cEm&X-Amz-Signature=57d7b5384cec14ecb57d716fef9655d921abc7bb7b544766d56d43d606f0bb6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSPROET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCrZPaIfKXCp5gcXhKITFif437cAqfCZgLM%2BGhbbeHbeQIgAJWSSoiDZvYomvkOpimaC%2Brj3O9qIsSHK2WyfK8LrV8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMc2WpKCAOeX3U%2BWSrcA31qQRoOKY0AoBKwUJV9CKlutoBCbz%2BdN375GLe9Y7wI3VGzKfv%2B54duZoWGzugFyh1ow1n84O1Wb91WMqPSomq4W7KNcA4hrnm2kV1pEAHxF2c31Xk8mBIXDlTRZnYoQkqh6ANCHs%2FRJb8P72hJQrIUuQ238nzqUy7iVrGpzsiK8plThxehtI3hSVFF6mOmvyL1w0iJ4Bw3zsjYp67%2FM4f98Mnshjdb5Vuj%2FDFo0BMXmAjvYNrZZNNnJxoHkiomYAT4umD2NPAnsTRUEHD%2BauXLGJyabHI%2FSSnUAmKkMRboQ%2F%2BmWRtpL9gS0iaD6tvhr4ioMUQLB2%2FsDZ9WLJ15zolSTietwPEFYrHDmR5V3SIhPgNQsxVTbkbg8eIhRmCybK6BPmF7x0rtAcpDIATtqgsP3CbmT5zNmL5F9U7bjJ4agevWNMvx9fxvhSRq7QWmr5D4ABX%2FFoxyB3dN2PRLJB4Ri54fnPD8ZI5pzJ8qXLyFlrgvi5NCItbb6UmNgwrMc%2FZ%2FsJS%2B29ZvQNyMNRTPjqkjdv2QZhYHA%2F7jDUn9h%2FIBGZVY4pioRJEvn8I3k50GFKv7hwj2hcvc1CYioRvRosrevbBg6e5OWrebIOLBEuZW56HlS%2FFQYEZHxzIlMJXFvMEGOqUBX81g8Fo7iO50ZKhC6IP1oBVDA%2BycJ0llCo6vFNwwfRQbO6AgNjf8DSSzltYS4T293m%2B0kk473hfvX9EoZ9Xdq5lWym%2FxwAG%2FehAoYaGvWqxYkmu4zq%2FcKec5nKtb%2BT2dYcsu%2BmTx1QZM%2FcGu%2BEcLv93h5Tshw7opLcN4654PQ2FF%2FF4ba1uD97fYHaCzIO4Gf9EgJUqwFQDgHGhsveL7jaWd5cEm&X-Amz-Signature=3ba5b93a1c49a29db06c2ec0fe5ce8bfa2d0e432bf12b5dbdb78c87396b9d830&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSPROET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCrZPaIfKXCp5gcXhKITFif437cAqfCZgLM%2BGhbbeHbeQIgAJWSSoiDZvYomvkOpimaC%2Brj3O9qIsSHK2WyfK8LrV8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMc2WpKCAOeX3U%2BWSrcA31qQRoOKY0AoBKwUJV9CKlutoBCbz%2BdN375GLe9Y7wI3VGzKfv%2B54duZoWGzugFyh1ow1n84O1Wb91WMqPSomq4W7KNcA4hrnm2kV1pEAHxF2c31Xk8mBIXDlTRZnYoQkqh6ANCHs%2FRJb8P72hJQrIUuQ238nzqUy7iVrGpzsiK8plThxehtI3hSVFF6mOmvyL1w0iJ4Bw3zsjYp67%2FM4f98Mnshjdb5Vuj%2FDFo0BMXmAjvYNrZZNNnJxoHkiomYAT4umD2NPAnsTRUEHD%2BauXLGJyabHI%2FSSnUAmKkMRboQ%2F%2BmWRtpL9gS0iaD6tvhr4ioMUQLB2%2FsDZ9WLJ15zolSTietwPEFYrHDmR5V3SIhPgNQsxVTbkbg8eIhRmCybK6BPmF7x0rtAcpDIATtqgsP3CbmT5zNmL5F9U7bjJ4agevWNMvx9fxvhSRq7QWmr5D4ABX%2FFoxyB3dN2PRLJB4Ri54fnPD8ZI5pzJ8qXLyFlrgvi5NCItbb6UmNgwrMc%2FZ%2FsJS%2B29ZvQNyMNRTPjqkjdv2QZhYHA%2F7jDUn9h%2FIBGZVY4pioRJEvn8I3k50GFKv7hwj2hcvc1CYioRvRosrevbBg6e5OWrebIOLBEuZW56HlS%2FFQYEZHxzIlMJXFvMEGOqUBX81g8Fo7iO50ZKhC6IP1oBVDA%2BycJ0llCo6vFNwwfRQbO6AgNjf8DSSzltYS4T293m%2B0kk473hfvX9EoZ9Xdq5lWym%2FxwAG%2FehAoYaGvWqxYkmu4zq%2FcKec5nKtb%2BT2dYcsu%2BmTx1QZM%2FcGu%2BEcLv93h5Tshw7opLcN4654PQ2FF%2FF4ba1uD97fYHaCzIO4Gf9EgJUqwFQDgHGhsveL7jaWd5cEm&X-Amz-Signature=2bab0ff87ae98139fcd7e5b8b0d50e450bf313175b9492cd31071b69e4257863&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSPROET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCrZPaIfKXCp5gcXhKITFif437cAqfCZgLM%2BGhbbeHbeQIgAJWSSoiDZvYomvkOpimaC%2Brj3O9qIsSHK2WyfK8LrV8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMc2WpKCAOeX3U%2BWSrcA31qQRoOKY0AoBKwUJV9CKlutoBCbz%2BdN375GLe9Y7wI3VGzKfv%2B54duZoWGzugFyh1ow1n84O1Wb91WMqPSomq4W7KNcA4hrnm2kV1pEAHxF2c31Xk8mBIXDlTRZnYoQkqh6ANCHs%2FRJb8P72hJQrIUuQ238nzqUy7iVrGpzsiK8plThxehtI3hSVFF6mOmvyL1w0iJ4Bw3zsjYp67%2FM4f98Mnshjdb5Vuj%2FDFo0BMXmAjvYNrZZNNnJxoHkiomYAT4umD2NPAnsTRUEHD%2BauXLGJyabHI%2FSSnUAmKkMRboQ%2F%2BmWRtpL9gS0iaD6tvhr4ioMUQLB2%2FsDZ9WLJ15zolSTietwPEFYrHDmR5V3SIhPgNQsxVTbkbg8eIhRmCybK6BPmF7x0rtAcpDIATtqgsP3CbmT5zNmL5F9U7bjJ4agevWNMvx9fxvhSRq7QWmr5D4ABX%2FFoxyB3dN2PRLJB4Ri54fnPD8ZI5pzJ8qXLyFlrgvi5NCItbb6UmNgwrMc%2FZ%2FsJS%2B29ZvQNyMNRTPjqkjdv2QZhYHA%2F7jDUn9h%2FIBGZVY4pioRJEvn8I3k50GFKv7hwj2hcvc1CYioRvRosrevbBg6e5OWrebIOLBEuZW56HlS%2FFQYEZHxzIlMJXFvMEGOqUBX81g8Fo7iO50ZKhC6IP1oBVDA%2BycJ0llCo6vFNwwfRQbO6AgNjf8DSSzltYS4T293m%2B0kk473hfvX9EoZ9Xdq5lWym%2FxwAG%2FehAoYaGvWqxYkmu4zq%2FcKec5nKtb%2BT2dYcsu%2BmTx1QZM%2FcGu%2BEcLv93h5Tshw7opLcN4654PQ2FF%2FF4ba1uD97fYHaCzIO4Gf9EgJUqwFQDgHGhsveL7jaWd5cEm&X-Amz-Signature=ba1424cd0344a1ed4ee2aff8cb4911773f4897af71612965a2faf3c5b7025bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSPROET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCrZPaIfKXCp5gcXhKITFif437cAqfCZgLM%2BGhbbeHbeQIgAJWSSoiDZvYomvkOpimaC%2Brj3O9qIsSHK2WyfK8LrV8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMc2WpKCAOeX3U%2BWSrcA31qQRoOKY0AoBKwUJV9CKlutoBCbz%2BdN375GLe9Y7wI3VGzKfv%2B54duZoWGzugFyh1ow1n84O1Wb91WMqPSomq4W7KNcA4hrnm2kV1pEAHxF2c31Xk8mBIXDlTRZnYoQkqh6ANCHs%2FRJb8P72hJQrIUuQ238nzqUy7iVrGpzsiK8plThxehtI3hSVFF6mOmvyL1w0iJ4Bw3zsjYp67%2FM4f98Mnshjdb5Vuj%2FDFo0BMXmAjvYNrZZNNnJxoHkiomYAT4umD2NPAnsTRUEHD%2BauXLGJyabHI%2FSSnUAmKkMRboQ%2F%2BmWRtpL9gS0iaD6tvhr4ioMUQLB2%2FsDZ9WLJ15zolSTietwPEFYrHDmR5V3SIhPgNQsxVTbkbg8eIhRmCybK6BPmF7x0rtAcpDIATtqgsP3CbmT5zNmL5F9U7bjJ4agevWNMvx9fxvhSRq7QWmr5D4ABX%2FFoxyB3dN2PRLJB4Ri54fnPD8ZI5pzJ8qXLyFlrgvi5NCItbb6UmNgwrMc%2FZ%2FsJS%2B29ZvQNyMNRTPjqkjdv2QZhYHA%2F7jDUn9h%2FIBGZVY4pioRJEvn8I3k50GFKv7hwj2hcvc1CYioRvRosrevbBg6e5OWrebIOLBEuZW56HlS%2FFQYEZHxzIlMJXFvMEGOqUBX81g8Fo7iO50ZKhC6IP1oBVDA%2BycJ0llCo6vFNwwfRQbO6AgNjf8DSSzltYS4T293m%2B0kk473hfvX9EoZ9Xdq5lWym%2FxwAG%2FehAoYaGvWqxYkmu4zq%2FcKec5nKtb%2BT2dYcsu%2BmTx1QZM%2FcGu%2BEcLv93h5Tshw7opLcN4654PQ2FF%2FF4ba1uD97fYHaCzIO4Gf9EgJUqwFQDgHGhsveL7jaWd5cEm&X-Amz-Signature=572f4d52139efad31e8630c75ead93f7fa85b6fe0d316dcc74a868fc387bc157&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSPROET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCrZPaIfKXCp5gcXhKITFif437cAqfCZgLM%2BGhbbeHbeQIgAJWSSoiDZvYomvkOpimaC%2Brj3O9qIsSHK2WyfK8LrV8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMc2WpKCAOeX3U%2BWSrcA31qQRoOKY0AoBKwUJV9CKlutoBCbz%2BdN375GLe9Y7wI3VGzKfv%2B54duZoWGzugFyh1ow1n84O1Wb91WMqPSomq4W7KNcA4hrnm2kV1pEAHxF2c31Xk8mBIXDlTRZnYoQkqh6ANCHs%2FRJb8P72hJQrIUuQ238nzqUy7iVrGpzsiK8plThxehtI3hSVFF6mOmvyL1w0iJ4Bw3zsjYp67%2FM4f98Mnshjdb5Vuj%2FDFo0BMXmAjvYNrZZNNnJxoHkiomYAT4umD2NPAnsTRUEHD%2BauXLGJyabHI%2FSSnUAmKkMRboQ%2F%2BmWRtpL9gS0iaD6tvhr4ioMUQLB2%2FsDZ9WLJ15zolSTietwPEFYrHDmR5V3SIhPgNQsxVTbkbg8eIhRmCybK6BPmF7x0rtAcpDIATtqgsP3CbmT5zNmL5F9U7bjJ4agevWNMvx9fxvhSRq7QWmr5D4ABX%2FFoxyB3dN2PRLJB4Ri54fnPD8ZI5pzJ8qXLyFlrgvi5NCItbb6UmNgwrMc%2FZ%2FsJS%2B29ZvQNyMNRTPjqkjdv2QZhYHA%2F7jDUn9h%2FIBGZVY4pioRJEvn8I3k50GFKv7hwj2hcvc1CYioRvRosrevbBg6e5OWrebIOLBEuZW56HlS%2FFQYEZHxzIlMJXFvMEGOqUBX81g8Fo7iO50ZKhC6IP1oBVDA%2BycJ0llCo6vFNwwfRQbO6AgNjf8DSSzltYS4T293m%2B0kk473hfvX9EoZ9Xdq5lWym%2FxwAG%2FehAoYaGvWqxYkmu4zq%2FcKec5nKtb%2BT2dYcsu%2BmTx1QZM%2FcGu%2BEcLv93h5Tshw7opLcN4654PQ2FF%2FF4ba1uD97fYHaCzIO4Gf9EgJUqwFQDgHGhsveL7jaWd5cEm&X-Amz-Signature=bdd5f8968cc8b0550a268ffbe319c90066f7ca8e809d51424c838c2a88a6dfbd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QSPROET%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCrZPaIfKXCp5gcXhKITFif437cAqfCZgLM%2BGhbbeHbeQIgAJWSSoiDZvYomvkOpimaC%2Brj3O9qIsSHK2WyfK8LrV8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMc2WpKCAOeX3U%2BWSrcA31qQRoOKY0AoBKwUJV9CKlutoBCbz%2BdN375GLe9Y7wI3VGzKfv%2B54duZoWGzugFyh1ow1n84O1Wb91WMqPSomq4W7KNcA4hrnm2kV1pEAHxF2c31Xk8mBIXDlTRZnYoQkqh6ANCHs%2FRJb8P72hJQrIUuQ238nzqUy7iVrGpzsiK8plThxehtI3hSVFF6mOmvyL1w0iJ4Bw3zsjYp67%2FM4f98Mnshjdb5Vuj%2FDFo0BMXmAjvYNrZZNNnJxoHkiomYAT4umD2NPAnsTRUEHD%2BauXLGJyabHI%2FSSnUAmKkMRboQ%2F%2BmWRtpL9gS0iaD6tvhr4ioMUQLB2%2FsDZ9WLJ15zolSTietwPEFYrHDmR5V3SIhPgNQsxVTbkbg8eIhRmCybK6BPmF7x0rtAcpDIATtqgsP3CbmT5zNmL5F9U7bjJ4agevWNMvx9fxvhSRq7QWmr5D4ABX%2FFoxyB3dN2PRLJB4Ri54fnPD8ZI5pzJ8qXLyFlrgvi5NCItbb6UmNgwrMc%2FZ%2FsJS%2B29ZvQNyMNRTPjqkjdv2QZhYHA%2F7jDUn9h%2FIBGZVY4pioRJEvn8I3k50GFKv7hwj2hcvc1CYioRvRosrevbBg6e5OWrebIOLBEuZW56HlS%2FFQYEZHxzIlMJXFvMEGOqUBX81g8Fo7iO50ZKhC6IP1oBVDA%2BycJ0llCo6vFNwwfRQbO6AgNjf8DSSzltYS4T293m%2B0kk473hfvX9EoZ9Xdq5lWym%2FxwAG%2FehAoYaGvWqxYkmu4zq%2FcKec5nKtb%2BT2dYcsu%2BmTx1QZM%2FcGu%2BEcLv93h5Tshw7opLcN4654PQ2FF%2FF4ba1uD97fYHaCzIO4Gf9EgJUqwFQDgHGhsveL7jaWd5cEm&X-Amz-Signature=65339b19f7c1f7c37d0ef5fe01a20d3ffacc313c5d60b872e0bd59e87a8769f7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
