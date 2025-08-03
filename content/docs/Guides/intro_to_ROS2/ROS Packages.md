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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLM2QBL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCofv71bwSsWE%2F0fxRAJfcdz%2BELxD2lC7Pbc3JJ%2BKOmIgIhAPrlTRQCOBu3lZUMC9fB7fkcTrAbwn3M49j%2FmH1IjuQsKv8DCDIQABoMNjM3NDIzMTgzODA1Igygg4SvRYFaVVd7vNIq3AP5uWsuiTFF9rE6FkfOCWwqHms9vJbo6fSc6pYSY3T%2Bzuo8EH3N1tGl9pavMnx4rjuNvk9AcDMnwU86GosRaHNtL1EajolSHi%2FNG0pbc%2FuKe6MQD%2BZJoVx9itfkNjXP5M1j1GCKX0B55%2FMmSaXASubTllfRqrHHOKUfEuWHJ7OoG1KGwp0A6m79KMB3bmuEYNIp2zweug32JUUafBgMvf%2Bb4EcS%2BLCEnlDcQeaMx86WnibJyzm4un1gnYLVCrvX2JglUmVM4FllwvBgLOiU81Qo5Db2JyLGbUR4Ac8N4mPqcUw%2BpiN7d5uz9LouiDQOmZCoyopwoPT2Mu45rOtx7itGs5atkjwe427av1BiVPI71LYv5mvzxlYR9tLpNVYpHjaFjJW0gqHcCb6p%2BOx5fFPtareDrpO78yZ9ulQEA8jYD8tcl91jmZTtnZhJoUTZqGbffp73uaM%2B%2Bun9qzocpidym4YM1w0JXqo3lwEwBnij8zWoEX8N9cQHYAhet6jMurQn96izRI0utKi9yLdUZlUj5j9%2FK1B0yDeWSmemSR3rriMJPlf2wn%2B%2FnQkUnTcRFbPST%2BmJq6KODFGoFHgTbYmG1ZsnDFJk35CkL9eBOgseXaXE7v6GVPv%2Bcn1MkTDOqr7EBjqkAT0dNOkCwX2f0zUPrcyPE4vNse5WsvSqwLStcN0fGdxcPm8JUlwccgSnalVtL%2FxE5p9DgnHuCnimdIBsl1UEAuAdP%2FpssU9jm1Uc3GYLG2RUDI7CWUax1pVk8y%2BkIjvreyjals5%2FlcQrQWiNYtqAknwtS2GZBSTJarx0e4IJXIoW2pipvB72ExD6OfPCWJUIS4AQhJ5Hpgv6ByeBx%2BNXEHb4ODX0&X-Amz-Signature=c166c19b7ce6f757dcbe6e349df566edd601c9ea6fedb4466f1afa6cde937ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLM2QBL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCofv71bwSsWE%2F0fxRAJfcdz%2BELxD2lC7Pbc3JJ%2BKOmIgIhAPrlTRQCOBu3lZUMC9fB7fkcTrAbwn3M49j%2FmH1IjuQsKv8DCDIQABoMNjM3NDIzMTgzODA1Igygg4SvRYFaVVd7vNIq3AP5uWsuiTFF9rE6FkfOCWwqHms9vJbo6fSc6pYSY3T%2Bzuo8EH3N1tGl9pavMnx4rjuNvk9AcDMnwU86GosRaHNtL1EajolSHi%2FNG0pbc%2FuKe6MQD%2BZJoVx9itfkNjXP5M1j1GCKX0B55%2FMmSaXASubTllfRqrHHOKUfEuWHJ7OoG1KGwp0A6m79KMB3bmuEYNIp2zweug32JUUafBgMvf%2Bb4EcS%2BLCEnlDcQeaMx86WnibJyzm4un1gnYLVCrvX2JglUmVM4FllwvBgLOiU81Qo5Db2JyLGbUR4Ac8N4mPqcUw%2BpiN7d5uz9LouiDQOmZCoyopwoPT2Mu45rOtx7itGs5atkjwe427av1BiVPI71LYv5mvzxlYR9tLpNVYpHjaFjJW0gqHcCb6p%2BOx5fFPtareDrpO78yZ9ulQEA8jYD8tcl91jmZTtnZhJoUTZqGbffp73uaM%2B%2Bun9qzocpidym4YM1w0JXqo3lwEwBnij8zWoEX8N9cQHYAhet6jMurQn96izRI0utKi9yLdUZlUj5j9%2FK1B0yDeWSmemSR3rriMJPlf2wn%2B%2FnQkUnTcRFbPST%2BmJq6KODFGoFHgTbYmG1ZsnDFJk35CkL9eBOgseXaXE7v6GVPv%2Bcn1MkTDOqr7EBjqkAT0dNOkCwX2f0zUPrcyPE4vNse5WsvSqwLStcN0fGdxcPm8JUlwccgSnalVtL%2FxE5p9DgnHuCnimdIBsl1UEAuAdP%2FpssU9jm1Uc3GYLG2RUDI7CWUax1pVk8y%2BkIjvreyjals5%2FlcQrQWiNYtqAknwtS2GZBSTJarx0e4IJXIoW2pipvB72ExD6OfPCWJUIS4AQhJ5Hpgv6ByeBx%2BNXEHb4ODX0&X-Amz-Signature=edf46d0331a6352fe4d4d78e7f1dff2fdc2f50d456e338fb45c27dd5eeeeb795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLM2QBL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCofv71bwSsWE%2F0fxRAJfcdz%2BELxD2lC7Pbc3JJ%2BKOmIgIhAPrlTRQCOBu3lZUMC9fB7fkcTrAbwn3M49j%2FmH1IjuQsKv8DCDIQABoMNjM3NDIzMTgzODA1Igygg4SvRYFaVVd7vNIq3AP5uWsuiTFF9rE6FkfOCWwqHms9vJbo6fSc6pYSY3T%2Bzuo8EH3N1tGl9pavMnx4rjuNvk9AcDMnwU86GosRaHNtL1EajolSHi%2FNG0pbc%2FuKe6MQD%2BZJoVx9itfkNjXP5M1j1GCKX0B55%2FMmSaXASubTllfRqrHHOKUfEuWHJ7OoG1KGwp0A6m79KMB3bmuEYNIp2zweug32JUUafBgMvf%2Bb4EcS%2BLCEnlDcQeaMx86WnibJyzm4un1gnYLVCrvX2JglUmVM4FllwvBgLOiU81Qo5Db2JyLGbUR4Ac8N4mPqcUw%2BpiN7d5uz9LouiDQOmZCoyopwoPT2Mu45rOtx7itGs5atkjwe427av1BiVPI71LYv5mvzxlYR9tLpNVYpHjaFjJW0gqHcCb6p%2BOx5fFPtareDrpO78yZ9ulQEA8jYD8tcl91jmZTtnZhJoUTZqGbffp73uaM%2B%2Bun9qzocpidym4YM1w0JXqo3lwEwBnij8zWoEX8N9cQHYAhet6jMurQn96izRI0utKi9yLdUZlUj5j9%2FK1B0yDeWSmemSR3rriMJPlf2wn%2B%2FnQkUnTcRFbPST%2BmJq6KODFGoFHgTbYmG1ZsnDFJk35CkL9eBOgseXaXE7v6GVPv%2Bcn1MkTDOqr7EBjqkAT0dNOkCwX2f0zUPrcyPE4vNse5WsvSqwLStcN0fGdxcPm8JUlwccgSnalVtL%2FxE5p9DgnHuCnimdIBsl1UEAuAdP%2FpssU9jm1Uc3GYLG2RUDI7CWUax1pVk8y%2BkIjvreyjals5%2FlcQrQWiNYtqAknwtS2GZBSTJarx0e4IJXIoW2pipvB72ExD6OfPCWJUIS4AQhJ5Hpgv6ByeBx%2BNXEHb4ODX0&X-Amz-Signature=9c2794ec3acc96a86cadb6f1fd34ffc7ba11743c1a89462726c75a4aad2eb648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLM2QBL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCofv71bwSsWE%2F0fxRAJfcdz%2BELxD2lC7Pbc3JJ%2BKOmIgIhAPrlTRQCOBu3lZUMC9fB7fkcTrAbwn3M49j%2FmH1IjuQsKv8DCDIQABoMNjM3NDIzMTgzODA1Igygg4SvRYFaVVd7vNIq3AP5uWsuiTFF9rE6FkfOCWwqHms9vJbo6fSc6pYSY3T%2Bzuo8EH3N1tGl9pavMnx4rjuNvk9AcDMnwU86GosRaHNtL1EajolSHi%2FNG0pbc%2FuKe6MQD%2BZJoVx9itfkNjXP5M1j1GCKX0B55%2FMmSaXASubTllfRqrHHOKUfEuWHJ7OoG1KGwp0A6m79KMB3bmuEYNIp2zweug32JUUafBgMvf%2Bb4EcS%2BLCEnlDcQeaMx86WnibJyzm4un1gnYLVCrvX2JglUmVM4FllwvBgLOiU81Qo5Db2JyLGbUR4Ac8N4mPqcUw%2BpiN7d5uz9LouiDQOmZCoyopwoPT2Mu45rOtx7itGs5atkjwe427av1BiVPI71LYv5mvzxlYR9tLpNVYpHjaFjJW0gqHcCb6p%2BOx5fFPtareDrpO78yZ9ulQEA8jYD8tcl91jmZTtnZhJoUTZqGbffp73uaM%2B%2Bun9qzocpidym4YM1w0JXqo3lwEwBnij8zWoEX8N9cQHYAhet6jMurQn96izRI0utKi9yLdUZlUj5j9%2FK1B0yDeWSmemSR3rriMJPlf2wn%2B%2FnQkUnTcRFbPST%2BmJq6KODFGoFHgTbYmG1ZsnDFJk35CkL9eBOgseXaXE7v6GVPv%2Bcn1MkTDOqr7EBjqkAT0dNOkCwX2f0zUPrcyPE4vNse5WsvSqwLStcN0fGdxcPm8JUlwccgSnalVtL%2FxE5p9DgnHuCnimdIBsl1UEAuAdP%2FpssU9jm1Uc3GYLG2RUDI7CWUax1pVk8y%2BkIjvreyjals5%2FlcQrQWiNYtqAknwtS2GZBSTJarx0e4IJXIoW2pipvB72ExD6OfPCWJUIS4AQhJ5Hpgv6ByeBx%2BNXEHb4ODX0&X-Amz-Signature=1558ed4c744b5b04cd8ceab119cfbddad8141732b87ebf457056917586b59072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLM2QBL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCofv71bwSsWE%2F0fxRAJfcdz%2BELxD2lC7Pbc3JJ%2BKOmIgIhAPrlTRQCOBu3lZUMC9fB7fkcTrAbwn3M49j%2FmH1IjuQsKv8DCDIQABoMNjM3NDIzMTgzODA1Igygg4SvRYFaVVd7vNIq3AP5uWsuiTFF9rE6FkfOCWwqHms9vJbo6fSc6pYSY3T%2Bzuo8EH3N1tGl9pavMnx4rjuNvk9AcDMnwU86GosRaHNtL1EajolSHi%2FNG0pbc%2FuKe6MQD%2BZJoVx9itfkNjXP5M1j1GCKX0B55%2FMmSaXASubTllfRqrHHOKUfEuWHJ7OoG1KGwp0A6m79KMB3bmuEYNIp2zweug32JUUafBgMvf%2Bb4EcS%2BLCEnlDcQeaMx86WnibJyzm4un1gnYLVCrvX2JglUmVM4FllwvBgLOiU81Qo5Db2JyLGbUR4Ac8N4mPqcUw%2BpiN7d5uz9LouiDQOmZCoyopwoPT2Mu45rOtx7itGs5atkjwe427av1BiVPI71LYv5mvzxlYR9tLpNVYpHjaFjJW0gqHcCb6p%2BOx5fFPtareDrpO78yZ9ulQEA8jYD8tcl91jmZTtnZhJoUTZqGbffp73uaM%2B%2Bun9qzocpidym4YM1w0JXqo3lwEwBnij8zWoEX8N9cQHYAhet6jMurQn96izRI0utKi9yLdUZlUj5j9%2FK1B0yDeWSmemSR3rriMJPlf2wn%2B%2FnQkUnTcRFbPST%2BmJq6KODFGoFHgTbYmG1ZsnDFJk35CkL9eBOgseXaXE7v6GVPv%2Bcn1MkTDOqr7EBjqkAT0dNOkCwX2f0zUPrcyPE4vNse5WsvSqwLStcN0fGdxcPm8JUlwccgSnalVtL%2FxE5p9DgnHuCnimdIBsl1UEAuAdP%2FpssU9jm1Uc3GYLG2RUDI7CWUax1pVk8y%2BkIjvreyjals5%2FlcQrQWiNYtqAknwtS2GZBSTJarx0e4IJXIoW2pipvB72ExD6OfPCWJUIS4AQhJ5Hpgv6ByeBx%2BNXEHb4ODX0&X-Amz-Signature=fc6eec38330118a5fcabf567fcb3e4b893b5d31fa18b464205ed319ef58da596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLM2QBL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCofv71bwSsWE%2F0fxRAJfcdz%2BELxD2lC7Pbc3JJ%2BKOmIgIhAPrlTRQCOBu3lZUMC9fB7fkcTrAbwn3M49j%2FmH1IjuQsKv8DCDIQABoMNjM3NDIzMTgzODA1Igygg4SvRYFaVVd7vNIq3AP5uWsuiTFF9rE6FkfOCWwqHms9vJbo6fSc6pYSY3T%2Bzuo8EH3N1tGl9pavMnx4rjuNvk9AcDMnwU86GosRaHNtL1EajolSHi%2FNG0pbc%2FuKe6MQD%2BZJoVx9itfkNjXP5M1j1GCKX0B55%2FMmSaXASubTllfRqrHHOKUfEuWHJ7OoG1KGwp0A6m79KMB3bmuEYNIp2zweug32JUUafBgMvf%2Bb4EcS%2BLCEnlDcQeaMx86WnibJyzm4un1gnYLVCrvX2JglUmVM4FllwvBgLOiU81Qo5Db2JyLGbUR4Ac8N4mPqcUw%2BpiN7d5uz9LouiDQOmZCoyopwoPT2Mu45rOtx7itGs5atkjwe427av1BiVPI71LYv5mvzxlYR9tLpNVYpHjaFjJW0gqHcCb6p%2BOx5fFPtareDrpO78yZ9ulQEA8jYD8tcl91jmZTtnZhJoUTZqGbffp73uaM%2B%2Bun9qzocpidym4YM1w0JXqo3lwEwBnij8zWoEX8N9cQHYAhet6jMurQn96izRI0utKi9yLdUZlUj5j9%2FK1B0yDeWSmemSR3rriMJPlf2wn%2B%2FnQkUnTcRFbPST%2BmJq6KODFGoFHgTbYmG1ZsnDFJk35CkL9eBOgseXaXE7v6GVPv%2Bcn1MkTDOqr7EBjqkAT0dNOkCwX2f0zUPrcyPE4vNse5WsvSqwLStcN0fGdxcPm8JUlwccgSnalVtL%2FxE5p9DgnHuCnimdIBsl1UEAuAdP%2FpssU9jm1Uc3GYLG2RUDI7CWUax1pVk8y%2BkIjvreyjals5%2FlcQrQWiNYtqAknwtS2GZBSTJarx0e4IJXIoW2pipvB72ExD6OfPCWJUIS4AQhJ5Hpgv6ByeBx%2BNXEHb4ODX0&X-Amz-Signature=03dd49b015351c28350f932a59fc8cc1f7a4f55bfbc32cd920436c09f15f2815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLM2QBL%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCofv71bwSsWE%2F0fxRAJfcdz%2BELxD2lC7Pbc3JJ%2BKOmIgIhAPrlTRQCOBu3lZUMC9fB7fkcTrAbwn3M49j%2FmH1IjuQsKv8DCDIQABoMNjM3NDIzMTgzODA1Igygg4SvRYFaVVd7vNIq3AP5uWsuiTFF9rE6FkfOCWwqHms9vJbo6fSc6pYSY3T%2Bzuo8EH3N1tGl9pavMnx4rjuNvk9AcDMnwU86GosRaHNtL1EajolSHi%2FNG0pbc%2FuKe6MQD%2BZJoVx9itfkNjXP5M1j1GCKX0B55%2FMmSaXASubTllfRqrHHOKUfEuWHJ7OoG1KGwp0A6m79KMB3bmuEYNIp2zweug32JUUafBgMvf%2Bb4EcS%2BLCEnlDcQeaMx86WnibJyzm4un1gnYLVCrvX2JglUmVM4FllwvBgLOiU81Qo5Db2JyLGbUR4Ac8N4mPqcUw%2BpiN7d5uz9LouiDQOmZCoyopwoPT2Mu45rOtx7itGs5atkjwe427av1BiVPI71LYv5mvzxlYR9tLpNVYpHjaFjJW0gqHcCb6p%2BOx5fFPtareDrpO78yZ9ulQEA8jYD8tcl91jmZTtnZhJoUTZqGbffp73uaM%2B%2Bun9qzocpidym4YM1w0JXqo3lwEwBnij8zWoEX8N9cQHYAhet6jMurQn96izRI0utKi9yLdUZlUj5j9%2FK1B0yDeWSmemSR3rriMJPlf2wn%2B%2FnQkUnTcRFbPST%2BmJq6KODFGoFHgTbYmG1ZsnDFJk35CkL9eBOgseXaXE7v6GVPv%2Bcn1MkTDOqr7EBjqkAT0dNOkCwX2f0zUPrcyPE4vNse5WsvSqwLStcN0fGdxcPm8JUlwccgSnalVtL%2FxE5p9DgnHuCnimdIBsl1UEAuAdP%2FpssU9jm1Uc3GYLG2RUDI7CWUax1pVk8y%2BkIjvreyjals5%2FlcQrQWiNYtqAknwtS2GZBSTJarx0e4IJXIoW2pipvB72ExD6OfPCWJUIS4AQhJ5Hpgv6ByeBx%2BNXEHb4ODX0&X-Amz-Signature=59fe763a1e91eae0fe2aa2b6b87f249493df3e8681aa7d5ec65e08522a2a1063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
