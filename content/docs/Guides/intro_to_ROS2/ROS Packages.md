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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSLOGMH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKLCItYqJ8ATXOP%2FTo4q4Jaq4aigPb5ki4tRnVc9uPAAiEA%2BvRuzI5xU8anpLVJQ4DblfSDNU621NqbTuVSxitOY%2Boq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDM39MquNT8CxUmtr0SrcA2BiKwSVRIOyBbMNuG1ZevwNnpWG2zEevtVZSxo79oFGtTnytzonnKjYun5jgO8yQDZ%2Bui%2BKoIZ0J1EYP0GT35%2F5S8Pb96wyemGJkSYshyKKF0%2BaakGhpYgWD61mZO%2B3kVObyfVkwq1c9P0T%2BUt97%2Bac%2FsXMhFXNjZLrba7mGda0Y9E16FKv9COnAyXo00rhvvjxOmGFmpdQPOLgt%2FJ3NxCCOiiwGU1OHkwpHQQKBCDX%2BEtFDTaDKW%2FYRp5ki3Ad77ZQ0df8GwhDVNH9byEy9Le4MTPlOFoBUqrFQ%2FcNsyEVa9DHQRg2aJL46xOK4Ln%2BhiZF3a2qlUzWXvCuIcmmZzDTLzAYYKejQAPqNIX7qGsQJnMVAaJXgBYMtRojfz2xcqS%2BNSoEGKaT8u06980ZhozR2Nm2zd3zN0jcpJbTb3RmcpWr7xT3Nrezb8AXBUh56lJeK8bzpoOlscjW1A55g4BZraXEo%2BSIqGS9c3CM6GWJU1FzzQ0sf%2BZmUp66gShAe%2FdtCvfmo%2Fp4ZGGVUtHDbAzfCsvXOsxBvCNzVpQXjvJfI8HOjpSk5fngAPjYWACZbDw63zzvcXRqHXLes4vOkl89SsfZ9lfycIspmfsthrw0q%2BMT0pLmgnmRBrUTMPmq%2F78GOqUB%2FkRWhGwtFgK4%2FDGXaKFP2cBeryZc49CdM8UdclLqyixKX6222028MoZ5CmFM6M8NpVoMf2lLXtOvmU9yp2P2iqBYqHOVqCfPhGdiGQ7nUXmO8bldPHC3SyMZYIY8yVseVJhovSuDF1P%2FayqAmExFwDWJV7n%2FlqRcUq36VMaq7g7La8cwy5mxXiYGt7mvYC9Y9nqY2vwbR7bjF5Pk1HXRGop7Xiu9&X-Amz-Signature=96900e902c94cc6fb4756ac63a788857de8dca64037a79cdda5262cbc1b7d428&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSLOGMH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKLCItYqJ8ATXOP%2FTo4q4Jaq4aigPb5ki4tRnVc9uPAAiEA%2BvRuzI5xU8anpLVJQ4DblfSDNU621NqbTuVSxitOY%2Boq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDM39MquNT8CxUmtr0SrcA2BiKwSVRIOyBbMNuG1ZevwNnpWG2zEevtVZSxo79oFGtTnytzonnKjYun5jgO8yQDZ%2Bui%2BKoIZ0J1EYP0GT35%2F5S8Pb96wyemGJkSYshyKKF0%2BaakGhpYgWD61mZO%2B3kVObyfVkwq1c9P0T%2BUt97%2Bac%2FsXMhFXNjZLrba7mGda0Y9E16FKv9COnAyXo00rhvvjxOmGFmpdQPOLgt%2FJ3NxCCOiiwGU1OHkwpHQQKBCDX%2BEtFDTaDKW%2FYRp5ki3Ad77ZQ0df8GwhDVNH9byEy9Le4MTPlOFoBUqrFQ%2FcNsyEVa9DHQRg2aJL46xOK4Ln%2BhiZF3a2qlUzWXvCuIcmmZzDTLzAYYKejQAPqNIX7qGsQJnMVAaJXgBYMtRojfz2xcqS%2BNSoEGKaT8u06980ZhozR2Nm2zd3zN0jcpJbTb3RmcpWr7xT3Nrezb8AXBUh56lJeK8bzpoOlscjW1A55g4BZraXEo%2BSIqGS9c3CM6GWJU1FzzQ0sf%2BZmUp66gShAe%2FdtCvfmo%2Fp4ZGGVUtHDbAzfCsvXOsxBvCNzVpQXjvJfI8HOjpSk5fngAPjYWACZbDw63zzvcXRqHXLes4vOkl89SsfZ9lfycIspmfsthrw0q%2BMT0pLmgnmRBrUTMPmq%2F78GOqUB%2FkRWhGwtFgK4%2FDGXaKFP2cBeryZc49CdM8UdclLqyixKX6222028MoZ5CmFM6M8NpVoMf2lLXtOvmU9yp2P2iqBYqHOVqCfPhGdiGQ7nUXmO8bldPHC3SyMZYIY8yVseVJhovSuDF1P%2FayqAmExFwDWJV7n%2FlqRcUq36VMaq7g7La8cwy5mxXiYGt7mvYC9Y9nqY2vwbR7bjF5Pk1HXRGop7Xiu9&X-Amz-Signature=99c604cecc3383911a4da34b50800ae2f1d4f9f4df120704811491986bb7e2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSLOGMH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKLCItYqJ8ATXOP%2FTo4q4Jaq4aigPb5ki4tRnVc9uPAAiEA%2BvRuzI5xU8anpLVJQ4DblfSDNU621NqbTuVSxitOY%2Boq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDM39MquNT8CxUmtr0SrcA2BiKwSVRIOyBbMNuG1ZevwNnpWG2zEevtVZSxo79oFGtTnytzonnKjYun5jgO8yQDZ%2Bui%2BKoIZ0J1EYP0GT35%2F5S8Pb96wyemGJkSYshyKKF0%2BaakGhpYgWD61mZO%2B3kVObyfVkwq1c9P0T%2BUt97%2Bac%2FsXMhFXNjZLrba7mGda0Y9E16FKv9COnAyXo00rhvvjxOmGFmpdQPOLgt%2FJ3NxCCOiiwGU1OHkwpHQQKBCDX%2BEtFDTaDKW%2FYRp5ki3Ad77ZQ0df8GwhDVNH9byEy9Le4MTPlOFoBUqrFQ%2FcNsyEVa9DHQRg2aJL46xOK4Ln%2BhiZF3a2qlUzWXvCuIcmmZzDTLzAYYKejQAPqNIX7qGsQJnMVAaJXgBYMtRojfz2xcqS%2BNSoEGKaT8u06980ZhozR2Nm2zd3zN0jcpJbTb3RmcpWr7xT3Nrezb8AXBUh56lJeK8bzpoOlscjW1A55g4BZraXEo%2BSIqGS9c3CM6GWJU1FzzQ0sf%2BZmUp66gShAe%2FdtCvfmo%2Fp4ZGGVUtHDbAzfCsvXOsxBvCNzVpQXjvJfI8HOjpSk5fngAPjYWACZbDw63zzvcXRqHXLes4vOkl89SsfZ9lfycIspmfsthrw0q%2BMT0pLmgnmRBrUTMPmq%2F78GOqUB%2FkRWhGwtFgK4%2FDGXaKFP2cBeryZc49CdM8UdclLqyixKX6222028MoZ5CmFM6M8NpVoMf2lLXtOvmU9yp2P2iqBYqHOVqCfPhGdiGQ7nUXmO8bldPHC3SyMZYIY8yVseVJhovSuDF1P%2FayqAmExFwDWJV7n%2FlqRcUq36VMaq7g7La8cwy5mxXiYGt7mvYC9Y9nqY2vwbR7bjF5Pk1HXRGop7Xiu9&X-Amz-Signature=45df1298b3c5bb48c1df1ca965206529f207d1479654d8065a4b5897bb985e91&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSLOGMH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKLCItYqJ8ATXOP%2FTo4q4Jaq4aigPb5ki4tRnVc9uPAAiEA%2BvRuzI5xU8anpLVJQ4DblfSDNU621NqbTuVSxitOY%2Boq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDM39MquNT8CxUmtr0SrcA2BiKwSVRIOyBbMNuG1ZevwNnpWG2zEevtVZSxo79oFGtTnytzonnKjYun5jgO8yQDZ%2Bui%2BKoIZ0J1EYP0GT35%2F5S8Pb96wyemGJkSYshyKKF0%2BaakGhpYgWD61mZO%2B3kVObyfVkwq1c9P0T%2BUt97%2Bac%2FsXMhFXNjZLrba7mGda0Y9E16FKv9COnAyXo00rhvvjxOmGFmpdQPOLgt%2FJ3NxCCOiiwGU1OHkwpHQQKBCDX%2BEtFDTaDKW%2FYRp5ki3Ad77ZQ0df8GwhDVNH9byEy9Le4MTPlOFoBUqrFQ%2FcNsyEVa9DHQRg2aJL46xOK4Ln%2BhiZF3a2qlUzWXvCuIcmmZzDTLzAYYKejQAPqNIX7qGsQJnMVAaJXgBYMtRojfz2xcqS%2BNSoEGKaT8u06980ZhozR2Nm2zd3zN0jcpJbTb3RmcpWr7xT3Nrezb8AXBUh56lJeK8bzpoOlscjW1A55g4BZraXEo%2BSIqGS9c3CM6GWJU1FzzQ0sf%2BZmUp66gShAe%2FdtCvfmo%2Fp4ZGGVUtHDbAzfCsvXOsxBvCNzVpQXjvJfI8HOjpSk5fngAPjYWACZbDw63zzvcXRqHXLes4vOkl89SsfZ9lfycIspmfsthrw0q%2BMT0pLmgnmRBrUTMPmq%2F78GOqUB%2FkRWhGwtFgK4%2FDGXaKFP2cBeryZc49CdM8UdclLqyixKX6222028MoZ5CmFM6M8NpVoMf2lLXtOvmU9yp2P2iqBYqHOVqCfPhGdiGQ7nUXmO8bldPHC3SyMZYIY8yVseVJhovSuDF1P%2FayqAmExFwDWJV7n%2FlqRcUq36VMaq7g7La8cwy5mxXiYGt7mvYC9Y9nqY2vwbR7bjF5Pk1HXRGop7Xiu9&X-Amz-Signature=2e31e31bb5b676c470b2a037b3bca9995a076f9dc2b2ec245dd1c0cdbe877f92&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSLOGMH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKLCItYqJ8ATXOP%2FTo4q4Jaq4aigPb5ki4tRnVc9uPAAiEA%2BvRuzI5xU8anpLVJQ4DblfSDNU621NqbTuVSxitOY%2Boq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDM39MquNT8CxUmtr0SrcA2BiKwSVRIOyBbMNuG1ZevwNnpWG2zEevtVZSxo79oFGtTnytzonnKjYun5jgO8yQDZ%2Bui%2BKoIZ0J1EYP0GT35%2F5S8Pb96wyemGJkSYshyKKF0%2BaakGhpYgWD61mZO%2B3kVObyfVkwq1c9P0T%2BUt97%2Bac%2FsXMhFXNjZLrba7mGda0Y9E16FKv9COnAyXo00rhvvjxOmGFmpdQPOLgt%2FJ3NxCCOiiwGU1OHkwpHQQKBCDX%2BEtFDTaDKW%2FYRp5ki3Ad77ZQ0df8GwhDVNH9byEy9Le4MTPlOFoBUqrFQ%2FcNsyEVa9DHQRg2aJL46xOK4Ln%2BhiZF3a2qlUzWXvCuIcmmZzDTLzAYYKejQAPqNIX7qGsQJnMVAaJXgBYMtRojfz2xcqS%2BNSoEGKaT8u06980ZhozR2Nm2zd3zN0jcpJbTb3RmcpWr7xT3Nrezb8AXBUh56lJeK8bzpoOlscjW1A55g4BZraXEo%2BSIqGS9c3CM6GWJU1FzzQ0sf%2BZmUp66gShAe%2FdtCvfmo%2Fp4ZGGVUtHDbAzfCsvXOsxBvCNzVpQXjvJfI8HOjpSk5fngAPjYWACZbDw63zzvcXRqHXLes4vOkl89SsfZ9lfycIspmfsthrw0q%2BMT0pLmgnmRBrUTMPmq%2F78GOqUB%2FkRWhGwtFgK4%2FDGXaKFP2cBeryZc49CdM8UdclLqyixKX6222028MoZ5CmFM6M8NpVoMf2lLXtOvmU9yp2P2iqBYqHOVqCfPhGdiGQ7nUXmO8bldPHC3SyMZYIY8yVseVJhovSuDF1P%2FayqAmExFwDWJV7n%2FlqRcUq36VMaq7g7La8cwy5mxXiYGt7mvYC9Y9nqY2vwbR7bjF5Pk1HXRGop7Xiu9&X-Amz-Signature=41fad637e787c070769d8cbbe05e933fc1fa450784b8d3cb280d87ac8a143d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSLOGMH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKLCItYqJ8ATXOP%2FTo4q4Jaq4aigPb5ki4tRnVc9uPAAiEA%2BvRuzI5xU8anpLVJQ4DblfSDNU621NqbTuVSxitOY%2Boq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDM39MquNT8CxUmtr0SrcA2BiKwSVRIOyBbMNuG1ZevwNnpWG2zEevtVZSxo79oFGtTnytzonnKjYun5jgO8yQDZ%2Bui%2BKoIZ0J1EYP0GT35%2F5S8Pb96wyemGJkSYshyKKF0%2BaakGhpYgWD61mZO%2B3kVObyfVkwq1c9P0T%2BUt97%2Bac%2FsXMhFXNjZLrba7mGda0Y9E16FKv9COnAyXo00rhvvjxOmGFmpdQPOLgt%2FJ3NxCCOiiwGU1OHkwpHQQKBCDX%2BEtFDTaDKW%2FYRp5ki3Ad77ZQ0df8GwhDVNH9byEy9Le4MTPlOFoBUqrFQ%2FcNsyEVa9DHQRg2aJL46xOK4Ln%2BhiZF3a2qlUzWXvCuIcmmZzDTLzAYYKejQAPqNIX7qGsQJnMVAaJXgBYMtRojfz2xcqS%2BNSoEGKaT8u06980ZhozR2Nm2zd3zN0jcpJbTb3RmcpWr7xT3Nrezb8AXBUh56lJeK8bzpoOlscjW1A55g4BZraXEo%2BSIqGS9c3CM6GWJU1FzzQ0sf%2BZmUp66gShAe%2FdtCvfmo%2Fp4ZGGVUtHDbAzfCsvXOsxBvCNzVpQXjvJfI8HOjpSk5fngAPjYWACZbDw63zzvcXRqHXLes4vOkl89SsfZ9lfycIspmfsthrw0q%2BMT0pLmgnmRBrUTMPmq%2F78GOqUB%2FkRWhGwtFgK4%2FDGXaKFP2cBeryZc49CdM8UdclLqyixKX6222028MoZ5CmFM6M8NpVoMf2lLXtOvmU9yp2P2iqBYqHOVqCfPhGdiGQ7nUXmO8bldPHC3SyMZYIY8yVseVJhovSuDF1P%2FayqAmExFwDWJV7n%2FlqRcUq36VMaq7g7La8cwy5mxXiYGt7mvYC9Y9nqY2vwbR7bjF5Pk1HXRGop7Xiu9&X-Amz-Signature=862873fe3005a14f79bd7c78aef858824ada02ff578f02480928621e38d650b4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TSLOGMH%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKLCItYqJ8ATXOP%2FTo4q4Jaq4aigPb5ki4tRnVc9uPAAiEA%2BvRuzI5xU8anpLVJQ4DblfSDNU621NqbTuVSxitOY%2Boq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDM39MquNT8CxUmtr0SrcA2BiKwSVRIOyBbMNuG1ZevwNnpWG2zEevtVZSxo79oFGtTnytzonnKjYun5jgO8yQDZ%2Bui%2BKoIZ0J1EYP0GT35%2F5S8Pb96wyemGJkSYshyKKF0%2BaakGhpYgWD61mZO%2B3kVObyfVkwq1c9P0T%2BUt97%2Bac%2FsXMhFXNjZLrba7mGda0Y9E16FKv9COnAyXo00rhvvjxOmGFmpdQPOLgt%2FJ3NxCCOiiwGU1OHkwpHQQKBCDX%2BEtFDTaDKW%2FYRp5ki3Ad77ZQ0df8GwhDVNH9byEy9Le4MTPlOFoBUqrFQ%2FcNsyEVa9DHQRg2aJL46xOK4Ln%2BhiZF3a2qlUzWXvCuIcmmZzDTLzAYYKejQAPqNIX7qGsQJnMVAaJXgBYMtRojfz2xcqS%2BNSoEGKaT8u06980ZhozR2Nm2zd3zN0jcpJbTb3RmcpWr7xT3Nrezb8AXBUh56lJeK8bzpoOlscjW1A55g4BZraXEo%2BSIqGS9c3CM6GWJU1FzzQ0sf%2BZmUp66gShAe%2FdtCvfmo%2Fp4ZGGVUtHDbAzfCsvXOsxBvCNzVpQXjvJfI8HOjpSk5fngAPjYWACZbDw63zzvcXRqHXLes4vOkl89SsfZ9lfycIspmfsthrw0q%2BMT0pLmgnmRBrUTMPmq%2F78GOqUB%2FkRWhGwtFgK4%2FDGXaKFP2cBeryZc49CdM8UdclLqyixKX6222028MoZ5CmFM6M8NpVoMf2lLXtOvmU9yp2P2iqBYqHOVqCfPhGdiGQ7nUXmO8bldPHC3SyMZYIY8yVseVJhovSuDF1P%2FayqAmExFwDWJV7n%2FlqRcUq36VMaq7g7La8cwy5mxXiYGt7mvYC9Y9nqY2vwbR7bjF5Pk1HXRGop7Xiu9&X-Amz-Signature=05b453a0ffd469c4cc86084cbdfcae110ba8787e4206f7d4959d1d1fbe84b2b6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
