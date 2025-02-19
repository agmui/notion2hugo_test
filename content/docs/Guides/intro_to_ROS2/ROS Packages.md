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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2IEBG4U%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9zVR%2FXDSF8Rgqui%2FpRXWjaAz0GIrEZ8cXh6P1IafyKQIgN1PVhfD7xzk%2B16V5Kqv0ZsWlQ1DlTT%2FB7WN3tteV0NsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBO%2FnhsO0UNQLp80CrcA25oc%2F%2F%2Bt%2ByTIKgiPGBmDrzTusvYEZZBzwI4pr98cmUfsHVbGkB1iKgLPOnhYX8Ujraj7ipOda9BCkjcl9TleKuuVwrAh6REWe6r2iVPyL%2FOpZ8UrRoG2Zql1RW9B7%2Fx%2B%2BNyUcQXUjeWbVa1P2BL31KcDs97Tzq%2FA8BKo7tAerb4kAZVhoCveTfcXaxeE%2FSCWnrs3mCqDYHZ3c8kpzwn4K52X4lEWf7j1bDQTiAG9GVeC8kVwuWkB6xV8kwsH18JGZVRsqjR9XbAjNwQ0IPyB17sk5fMkZ5rnOwnbeZsBojxVKcYP3inyFwMVJdLgksv6KClIA0bw94FiYOpnwb6XNdnsMsliOr7aNq8gG1D3MEbZjCq8C6m%2F3u%2FK2QBlyKg6zIa%2FgOdrHFlGS1oKJ6A0vAyKk%2B2RoOUIBBrX3%2Ftj1pvfmIMqpv9BiyauAPcAxF1hQOEdNVS5bPGcda2hSI7QbUnPlkFiW3QaqNlfP5na8T01PGqZ7DsKO3KL9EgPRq%2F5ETeQk9u3GTRvYbLQLEG8%2FvT8cD2l7rqQJixfIyxeSXR2Qw2UpwR5P4zxpS6OHgRIxpmBpg9NcbymQcrJwrUWYrT04yxMDnCWNEzcUEPC8MikJRMMa5rX7ICfPx9MKbT2L0GOqUBmpphT7br2buyVcerUUKotGMoFKbEH5rwEDKutRLvJ8xFBcmWrm4ZAVwqgWWAt7mApyVL5PYLJYCFVgh%2FvHT0V%2Be4wekZrVCIcSkhPukIxw2oy22P%2Fl74TyYG4%2BfrprmPs1tjkn17n6M739R9mzphQGyfyVp1HA%2FhmRZ3dUTmZJLG7KWk6H92k84mnNahHebk6L6XxJwPnhHFkkqgQJ%2BIX0Lo402i&X-Amz-Signature=c6836d90736d474059177411884ac8239ff370089ef2e10603204b59c2bba288&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2IEBG4U%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9zVR%2FXDSF8Rgqui%2FpRXWjaAz0GIrEZ8cXh6P1IafyKQIgN1PVhfD7xzk%2B16V5Kqv0ZsWlQ1DlTT%2FB7WN3tteV0NsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBO%2FnhsO0UNQLp80CrcA25oc%2F%2F%2Bt%2ByTIKgiPGBmDrzTusvYEZZBzwI4pr98cmUfsHVbGkB1iKgLPOnhYX8Ujraj7ipOda9BCkjcl9TleKuuVwrAh6REWe6r2iVPyL%2FOpZ8UrRoG2Zql1RW9B7%2Fx%2B%2BNyUcQXUjeWbVa1P2BL31KcDs97Tzq%2FA8BKo7tAerb4kAZVhoCveTfcXaxeE%2FSCWnrs3mCqDYHZ3c8kpzwn4K52X4lEWf7j1bDQTiAG9GVeC8kVwuWkB6xV8kwsH18JGZVRsqjR9XbAjNwQ0IPyB17sk5fMkZ5rnOwnbeZsBojxVKcYP3inyFwMVJdLgksv6KClIA0bw94FiYOpnwb6XNdnsMsliOr7aNq8gG1D3MEbZjCq8C6m%2F3u%2FK2QBlyKg6zIa%2FgOdrHFlGS1oKJ6A0vAyKk%2B2RoOUIBBrX3%2Ftj1pvfmIMqpv9BiyauAPcAxF1hQOEdNVS5bPGcda2hSI7QbUnPlkFiW3QaqNlfP5na8T01PGqZ7DsKO3KL9EgPRq%2F5ETeQk9u3GTRvYbLQLEG8%2FvT8cD2l7rqQJixfIyxeSXR2Qw2UpwR5P4zxpS6OHgRIxpmBpg9NcbymQcrJwrUWYrT04yxMDnCWNEzcUEPC8MikJRMMa5rX7ICfPx9MKbT2L0GOqUBmpphT7br2buyVcerUUKotGMoFKbEH5rwEDKutRLvJ8xFBcmWrm4ZAVwqgWWAt7mApyVL5PYLJYCFVgh%2FvHT0V%2Be4wekZrVCIcSkhPukIxw2oy22P%2Fl74TyYG4%2BfrprmPs1tjkn17n6M739R9mzphQGyfyVp1HA%2FhmRZ3dUTmZJLG7KWk6H92k84mnNahHebk6L6XxJwPnhHFkkqgQJ%2BIX0Lo402i&X-Amz-Signature=e784f7ed87db731f7128497fcbc0caf46747373d3464dda45038e7dc183b1fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2IEBG4U%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9zVR%2FXDSF8Rgqui%2FpRXWjaAz0GIrEZ8cXh6P1IafyKQIgN1PVhfD7xzk%2B16V5Kqv0ZsWlQ1DlTT%2FB7WN3tteV0NsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBO%2FnhsO0UNQLp80CrcA25oc%2F%2F%2Bt%2ByTIKgiPGBmDrzTusvYEZZBzwI4pr98cmUfsHVbGkB1iKgLPOnhYX8Ujraj7ipOda9BCkjcl9TleKuuVwrAh6REWe6r2iVPyL%2FOpZ8UrRoG2Zql1RW9B7%2Fx%2B%2BNyUcQXUjeWbVa1P2BL31KcDs97Tzq%2FA8BKo7tAerb4kAZVhoCveTfcXaxeE%2FSCWnrs3mCqDYHZ3c8kpzwn4K52X4lEWf7j1bDQTiAG9GVeC8kVwuWkB6xV8kwsH18JGZVRsqjR9XbAjNwQ0IPyB17sk5fMkZ5rnOwnbeZsBojxVKcYP3inyFwMVJdLgksv6KClIA0bw94FiYOpnwb6XNdnsMsliOr7aNq8gG1D3MEbZjCq8C6m%2F3u%2FK2QBlyKg6zIa%2FgOdrHFlGS1oKJ6A0vAyKk%2B2RoOUIBBrX3%2Ftj1pvfmIMqpv9BiyauAPcAxF1hQOEdNVS5bPGcda2hSI7QbUnPlkFiW3QaqNlfP5na8T01PGqZ7DsKO3KL9EgPRq%2F5ETeQk9u3GTRvYbLQLEG8%2FvT8cD2l7rqQJixfIyxeSXR2Qw2UpwR5P4zxpS6OHgRIxpmBpg9NcbymQcrJwrUWYrT04yxMDnCWNEzcUEPC8MikJRMMa5rX7ICfPx9MKbT2L0GOqUBmpphT7br2buyVcerUUKotGMoFKbEH5rwEDKutRLvJ8xFBcmWrm4ZAVwqgWWAt7mApyVL5PYLJYCFVgh%2FvHT0V%2Be4wekZrVCIcSkhPukIxw2oy22P%2Fl74TyYG4%2BfrprmPs1tjkn17n6M739R9mzphQGyfyVp1HA%2FhmRZ3dUTmZJLG7KWk6H92k84mnNahHebk6L6XxJwPnhHFkkqgQJ%2BIX0Lo402i&X-Amz-Signature=70fdf2913a68308164b1647a00603e9c50bd278747a257422839536aab3bcc7c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2IEBG4U%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9zVR%2FXDSF8Rgqui%2FpRXWjaAz0GIrEZ8cXh6P1IafyKQIgN1PVhfD7xzk%2B16V5Kqv0ZsWlQ1DlTT%2FB7WN3tteV0NsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBO%2FnhsO0UNQLp80CrcA25oc%2F%2F%2Bt%2ByTIKgiPGBmDrzTusvYEZZBzwI4pr98cmUfsHVbGkB1iKgLPOnhYX8Ujraj7ipOda9BCkjcl9TleKuuVwrAh6REWe6r2iVPyL%2FOpZ8UrRoG2Zql1RW9B7%2Fx%2B%2BNyUcQXUjeWbVa1P2BL31KcDs97Tzq%2FA8BKo7tAerb4kAZVhoCveTfcXaxeE%2FSCWnrs3mCqDYHZ3c8kpzwn4K52X4lEWf7j1bDQTiAG9GVeC8kVwuWkB6xV8kwsH18JGZVRsqjR9XbAjNwQ0IPyB17sk5fMkZ5rnOwnbeZsBojxVKcYP3inyFwMVJdLgksv6KClIA0bw94FiYOpnwb6XNdnsMsliOr7aNq8gG1D3MEbZjCq8C6m%2F3u%2FK2QBlyKg6zIa%2FgOdrHFlGS1oKJ6A0vAyKk%2B2RoOUIBBrX3%2Ftj1pvfmIMqpv9BiyauAPcAxF1hQOEdNVS5bPGcda2hSI7QbUnPlkFiW3QaqNlfP5na8T01PGqZ7DsKO3KL9EgPRq%2F5ETeQk9u3GTRvYbLQLEG8%2FvT8cD2l7rqQJixfIyxeSXR2Qw2UpwR5P4zxpS6OHgRIxpmBpg9NcbymQcrJwrUWYrT04yxMDnCWNEzcUEPC8MikJRMMa5rX7ICfPx9MKbT2L0GOqUBmpphT7br2buyVcerUUKotGMoFKbEH5rwEDKutRLvJ8xFBcmWrm4ZAVwqgWWAt7mApyVL5PYLJYCFVgh%2FvHT0V%2Be4wekZrVCIcSkhPukIxw2oy22P%2Fl74TyYG4%2BfrprmPs1tjkn17n6M739R9mzphQGyfyVp1HA%2FhmRZ3dUTmZJLG7KWk6H92k84mnNahHebk6L6XxJwPnhHFkkqgQJ%2BIX0Lo402i&X-Amz-Signature=0529e555bff47b5d618e64824e8fb32325890c70a9220ed134894b0ec9731753&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2IEBG4U%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9zVR%2FXDSF8Rgqui%2FpRXWjaAz0GIrEZ8cXh6P1IafyKQIgN1PVhfD7xzk%2B16V5Kqv0ZsWlQ1DlTT%2FB7WN3tteV0NsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBO%2FnhsO0UNQLp80CrcA25oc%2F%2F%2Bt%2ByTIKgiPGBmDrzTusvYEZZBzwI4pr98cmUfsHVbGkB1iKgLPOnhYX8Ujraj7ipOda9BCkjcl9TleKuuVwrAh6REWe6r2iVPyL%2FOpZ8UrRoG2Zql1RW9B7%2Fx%2B%2BNyUcQXUjeWbVa1P2BL31KcDs97Tzq%2FA8BKo7tAerb4kAZVhoCveTfcXaxeE%2FSCWnrs3mCqDYHZ3c8kpzwn4K52X4lEWf7j1bDQTiAG9GVeC8kVwuWkB6xV8kwsH18JGZVRsqjR9XbAjNwQ0IPyB17sk5fMkZ5rnOwnbeZsBojxVKcYP3inyFwMVJdLgksv6KClIA0bw94FiYOpnwb6XNdnsMsliOr7aNq8gG1D3MEbZjCq8C6m%2F3u%2FK2QBlyKg6zIa%2FgOdrHFlGS1oKJ6A0vAyKk%2B2RoOUIBBrX3%2Ftj1pvfmIMqpv9BiyauAPcAxF1hQOEdNVS5bPGcda2hSI7QbUnPlkFiW3QaqNlfP5na8T01PGqZ7DsKO3KL9EgPRq%2F5ETeQk9u3GTRvYbLQLEG8%2FvT8cD2l7rqQJixfIyxeSXR2Qw2UpwR5P4zxpS6OHgRIxpmBpg9NcbymQcrJwrUWYrT04yxMDnCWNEzcUEPC8MikJRMMa5rX7ICfPx9MKbT2L0GOqUBmpphT7br2buyVcerUUKotGMoFKbEH5rwEDKutRLvJ8xFBcmWrm4ZAVwqgWWAt7mApyVL5PYLJYCFVgh%2FvHT0V%2Be4wekZrVCIcSkhPukIxw2oy22P%2Fl74TyYG4%2BfrprmPs1tjkn17n6M739R9mzphQGyfyVp1HA%2FhmRZ3dUTmZJLG7KWk6H92k84mnNahHebk6L6XxJwPnhHFkkqgQJ%2BIX0Lo402i&X-Amz-Signature=58038ff1d0629906fe2cf7b75a40343c5436831bc578f273b745b2b82d951775&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2IEBG4U%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9zVR%2FXDSF8Rgqui%2FpRXWjaAz0GIrEZ8cXh6P1IafyKQIgN1PVhfD7xzk%2B16V5Kqv0ZsWlQ1DlTT%2FB7WN3tteV0NsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBO%2FnhsO0UNQLp80CrcA25oc%2F%2F%2Bt%2ByTIKgiPGBmDrzTusvYEZZBzwI4pr98cmUfsHVbGkB1iKgLPOnhYX8Ujraj7ipOda9BCkjcl9TleKuuVwrAh6REWe6r2iVPyL%2FOpZ8UrRoG2Zql1RW9B7%2Fx%2B%2BNyUcQXUjeWbVa1P2BL31KcDs97Tzq%2FA8BKo7tAerb4kAZVhoCveTfcXaxeE%2FSCWnrs3mCqDYHZ3c8kpzwn4K52X4lEWf7j1bDQTiAG9GVeC8kVwuWkB6xV8kwsH18JGZVRsqjR9XbAjNwQ0IPyB17sk5fMkZ5rnOwnbeZsBojxVKcYP3inyFwMVJdLgksv6KClIA0bw94FiYOpnwb6XNdnsMsliOr7aNq8gG1D3MEbZjCq8C6m%2F3u%2FK2QBlyKg6zIa%2FgOdrHFlGS1oKJ6A0vAyKk%2B2RoOUIBBrX3%2Ftj1pvfmIMqpv9BiyauAPcAxF1hQOEdNVS5bPGcda2hSI7QbUnPlkFiW3QaqNlfP5na8T01PGqZ7DsKO3KL9EgPRq%2F5ETeQk9u3GTRvYbLQLEG8%2FvT8cD2l7rqQJixfIyxeSXR2Qw2UpwR5P4zxpS6OHgRIxpmBpg9NcbymQcrJwrUWYrT04yxMDnCWNEzcUEPC8MikJRMMa5rX7ICfPx9MKbT2L0GOqUBmpphT7br2buyVcerUUKotGMoFKbEH5rwEDKutRLvJ8xFBcmWrm4ZAVwqgWWAt7mApyVL5PYLJYCFVgh%2FvHT0V%2Be4wekZrVCIcSkhPukIxw2oy22P%2Fl74TyYG4%2BfrprmPs1tjkn17n6M739R9mzphQGyfyVp1HA%2FhmRZ3dUTmZJLG7KWk6H92k84mnNahHebk6L6XxJwPnhHFkkqgQJ%2BIX0Lo402i&X-Amz-Signature=74f9c787af6a0630507a4dcd27bcce8b6ae3adf06896660fd3a68c871337aec4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2IEBG4U%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9zVR%2FXDSF8Rgqui%2FpRXWjaAz0GIrEZ8cXh6P1IafyKQIgN1PVhfD7xzk%2B16V5Kqv0ZsWlQ1DlTT%2FB7WN3tteV0NsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBO%2FnhsO0UNQLp80CrcA25oc%2F%2F%2Bt%2ByTIKgiPGBmDrzTusvYEZZBzwI4pr98cmUfsHVbGkB1iKgLPOnhYX8Ujraj7ipOda9BCkjcl9TleKuuVwrAh6REWe6r2iVPyL%2FOpZ8UrRoG2Zql1RW9B7%2Fx%2B%2BNyUcQXUjeWbVa1P2BL31KcDs97Tzq%2FA8BKo7tAerb4kAZVhoCveTfcXaxeE%2FSCWnrs3mCqDYHZ3c8kpzwn4K52X4lEWf7j1bDQTiAG9GVeC8kVwuWkB6xV8kwsH18JGZVRsqjR9XbAjNwQ0IPyB17sk5fMkZ5rnOwnbeZsBojxVKcYP3inyFwMVJdLgksv6KClIA0bw94FiYOpnwb6XNdnsMsliOr7aNq8gG1D3MEbZjCq8C6m%2F3u%2FK2QBlyKg6zIa%2FgOdrHFlGS1oKJ6A0vAyKk%2B2RoOUIBBrX3%2Ftj1pvfmIMqpv9BiyauAPcAxF1hQOEdNVS5bPGcda2hSI7QbUnPlkFiW3QaqNlfP5na8T01PGqZ7DsKO3KL9EgPRq%2F5ETeQk9u3GTRvYbLQLEG8%2FvT8cD2l7rqQJixfIyxeSXR2Qw2UpwR5P4zxpS6OHgRIxpmBpg9NcbymQcrJwrUWYrT04yxMDnCWNEzcUEPC8MikJRMMa5rX7ICfPx9MKbT2L0GOqUBmpphT7br2buyVcerUUKotGMoFKbEH5rwEDKutRLvJ8xFBcmWrm4ZAVwqgWWAt7mApyVL5PYLJYCFVgh%2FvHT0V%2Be4wekZrVCIcSkhPukIxw2oy22P%2Fl74TyYG4%2BfrprmPs1tjkn17n6M739R9mzphQGyfyVp1HA%2FhmRZ3dUTmZJLG7KWk6H92k84mnNahHebk6L6XxJwPnhHFkkqgQJ%2BIX0Lo402i&X-Amz-Signature=25694e3450989193b70863e72d2132dbe6f83e9e6fcc4c11830c03928bcbcdea&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
