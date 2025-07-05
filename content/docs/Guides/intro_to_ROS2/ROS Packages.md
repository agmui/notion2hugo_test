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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4QPUAA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDcFf8M5efLS8w4YXwohjHGRiSg35buOBPB068rA%2BTwNgIgMJfKjbAHPeicLJ%2BHukK8U6rQ76Dp0WXs%2BMemTBuh12cq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPLOl%2BZwgpkiRTfnyyrcA85Z3zRq7pjzmeda%2BsXLt56EXXW5UxQXQsomRaN7t3j973cW79qFI0D4rrCHA58zBTcyhJVXZ0si3Vg9L0W3sQXtWx0xC1VKA7Fd45AKFgUsxu4XjMpoDD9nWMnCbOmTKmGdAaE1Yu%2F1PK8%2BJdL%2FaPkG%2FhtNyPaCVFjjFlSiJaUT4EP%2FGjy4kDUoaiG4dLRN5RTb8Bq0KVi0b%2F%2FQOUp1E4QNp9KUkgv%2B4N7zIIYaPfi%2FwbpBC93pdiNMk3WpHsnW%2FVZLiDQGdIJnjgy5%2FVmOk50drsS2%2BH8U2YSb%2FesgUXtLUTdcvWdjXSo6HCOGicoGT8Ko4e60PAUKAZZ%2FOfeprgDijN05g9CUH7c2Iq%2F6xsH0d0xXfFyxaqm99cib4cBXjBtImHfHX9veeS1cun57F0DHX33VAnHjjJv7q3fkR22T7BbzdDjD6DjttDry%2BSMDhb8RKeuBLknxeXhQUFIH6y8LGlnr3fpoxbs8QWJdwjGkwIxuQqEZJOI%2FPWfajK8XDCYxgu513I%2BRBnNGZz3UgOdSJAKJLWCWXY%2BGwQMnBgVw2OeRu6iiZwgyMKRUeEPYoYanPGUj84aJg3YL42I3p6nB8Vxf8QYJTqcXymHrM%2BUtj13%2FL5N4h%2BIxGnf%2BMN%2BLosMGOqUBEc%2BZVgsON3btuDvaX7k6H5paFmtPs6VCWFwWdccmLwy6JtBXdu3ENczMMSvy2Cci5C5wpyqMYEbpISNSsasFYv%2BYQjWP2%2F0NmsuuvmmXOvpEtnWOwxvyPwdNkBvB%2BR4JXhXwX%2FKsfP4%2F2%2FgSu0DnKa2FetBRzF9zkm6mirJpqF8ux1qqdfEboWiXsIuoHYGq3K5vTZeq2RX8%2BWxexcCO2iaFzGid&X-Amz-Signature=7a1e1b27b60c1748ab92f193141e08a41018e3206a848f5b671013e2b51f2e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4QPUAA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDcFf8M5efLS8w4YXwohjHGRiSg35buOBPB068rA%2BTwNgIgMJfKjbAHPeicLJ%2BHukK8U6rQ76Dp0WXs%2BMemTBuh12cq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPLOl%2BZwgpkiRTfnyyrcA85Z3zRq7pjzmeda%2BsXLt56EXXW5UxQXQsomRaN7t3j973cW79qFI0D4rrCHA58zBTcyhJVXZ0si3Vg9L0W3sQXtWx0xC1VKA7Fd45AKFgUsxu4XjMpoDD9nWMnCbOmTKmGdAaE1Yu%2F1PK8%2BJdL%2FaPkG%2FhtNyPaCVFjjFlSiJaUT4EP%2FGjy4kDUoaiG4dLRN5RTb8Bq0KVi0b%2F%2FQOUp1E4QNp9KUkgv%2B4N7zIIYaPfi%2FwbpBC93pdiNMk3WpHsnW%2FVZLiDQGdIJnjgy5%2FVmOk50drsS2%2BH8U2YSb%2FesgUXtLUTdcvWdjXSo6HCOGicoGT8Ko4e60PAUKAZZ%2FOfeprgDijN05g9CUH7c2Iq%2F6xsH0d0xXfFyxaqm99cib4cBXjBtImHfHX9veeS1cun57F0DHX33VAnHjjJv7q3fkR22T7BbzdDjD6DjttDry%2BSMDhb8RKeuBLknxeXhQUFIH6y8LGlnr3fpoxbs8QWJdwjGkwIxuQqEZJOI%2FPWfajK8XDCYxgu513I%2BRBnNGZz3UgOdSJAKJLWCWXY%2BGwQMnBgVw2OeRu6iiZwgyMKRUeEPYoYanPGUj84aJg3YL42I3p6nB8Vxf8QYJTqcXymHrM%2BUtj13%2FL5N4h%2BIxGnf%2BMN%2BLosMGOqUBEc%2BZVgsON3btuDvaX7k6H5paFmtPs6VCWFwWdccmLwy6JtBXdu3ENczMMSvy2Cci5C5wpyqMYEbpISNSsasFYv%2BYQjWP2%2F0NmsuuvmmXOvpEtnWOwxvyPwdNkBvB%2BR4JXhXwX%2FKsfP4%2F2%2FgSu0DnKa2FetBRzF9zkm6mirJpqF8ux1qqdfEboWiXsIuoHYGq3K5vTZeq2RX8%2BWxexcCO2iaFzGid&X-Amz-Signature=e24fd10ee113e5fa1c69f38036c7200de61321caae329c499622381f9fc60477&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4QPUAA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDcFf8M5efLS8w4YXwohjHGRiSg35buOBPB068rA%2BTwNgIgMJfKjbAHPeicLJ%2BHukK8U6rQ76Dp0WXs%2BMemTBuh12cq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPLOl%2BZwgpkiRTfnyyrcA85Z3zRq7pjzmeda%2BsXLt56EXXW5UxQXQsomRaN7t3j973cW79qFI0D4rrCHA58zBTcyhJVXZ0si3Vg9L0W3sQXtWx0xC1VKA7Fd45AKFgUsxu4XjMpoDD9nWMnCbOmTKmGdAaE1Yu%2F1PK8%2BJdL%2FaPkG%2FhtNyPaCVFjjFlSiJaUT4EP%2FGjy4kDUoaiG4dLRN5RTb8Bq0KVi0b%2F%2FQOUp1E4QNp9KUkgv%2B4N7zIIYaPfi%2FwbpBC93pdiNMk3WpHsnW%2FVZLiDQGdIJnjgy5%2FVmOk50drsS2%2BH8U2YSb%2FesgUXtLUTdcvWdjXSo6HCOGicoGT8Ko4e60PAUKAZZ%2FOfeprgDijN05g9CUH7c2Iq%2F6xsH0d0xXfFyxaqm99cib4cBXjBtImHfHX9veeS1cun57F0DHX33VAnHjjJv7q3fkR22T7BbzdDjD6DjttDry%2BSMDhb8RKeuBLknxeXhQUFIH6y8LGlnr3fpoxbs8QWJdwjGkwIxuQqEZJOI%2FPWfajK8XDCYxgu513I%2BRBnNGZz3UgOdSJAKJLWCWXY%2BGwQMnBgVw2OeRu6iiZwgyMKRUeEPYoYanPGUj84aJg3YL42I3p6nB8Vxf8QYJTqcXymHrM%2BUtj13%2FL5N4h%2BIxGnf%2BMN%2BLosMGOqUBEc%2BZVgsON3btuDvaX7k6H5paFmtPs6VCWFwWdccmLwy6JtBXdu3ENczMMSvy2Cci5C5wpyqMYEbpISNSsasFYv%2BYQjWP2%2F0NmsuuvmmXOvpEtnWOwxvyPwdNkBvB%2BR4JXhXwX%2FKsfP4%2F2%2FgSu0DnKa2FetBRzF9zkm6mirJpqF8ux1qqdfEboWiXsIuoHYGq3K5vTZeq2RX8%2BWxexcCO2iaFzGid&X-Amz-Signature=a339ad6762a6071d0ad1d9b2f27b5a8fa4e7928bafef16f3d39a931eec2a5b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4QPUAA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDcFf8M5efLS8w4YXwohjHGRiSg35buOBPB068rA%2BTwNgIgMJfKjbAHPeicLJ%2BHukK8U6rQ76Dp0WXs%2BMemTBuh12cq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPLOl%2BZwgpkiRTfnyyrcA85Z3zRq7pjzmeda%2BsXLt56EXXW5UxQXQsomRaN7t3j973cW79qFI0D4rrCHA58zBTcyhJVXZ0si3Vg9L0W3sQXtWx0xC1VKA7Fd45AKFgUsxu4XjMpoDD9nWMnCbOmTKmGdAaE1Yu%2F1PK8%2BJdL%2FaPkG%2FhtNyPaCVFjjFlSiJaUT4EP%2FGjy4kDUoaiG4dLRN5RTb8Bq0KVi0b%2F%2FQOUp1E4QNp9KUkgv%2B4N7zIIYaPfi%2FwbpBC93pdiNMk3WpHsnW%2FVZLiDQGdIJnjgy5%2FVmOk50drsS2%2BH8U2YSb%2FesgUXtLUTdcvWdjXSo6HCOGicoGT8Ko4e60PAUKAZZ%2FOfeprgDijN05g9CUH7c2Iq%2F6xsH0d0xXfFyxaqm99cib4cBXjBtImHfHX9veeS1cun57F0DHX33VAnHjjJv7q3fkR22T7BbzdDjD6DjttDry%2BSMDhb8RKeuBLknxeXhQUFIH6y8LGlnr3fpoxbs8QWJdwjGkwIxuQqEZJOI%2FPWfajK8XDCYxgu513I%2BRBnNGZz3UgOdSJAKJLWCWXY%2BGwQMnBgVw2OeRu6iiZwgyMKRUeEPYoYanPGUj84aJg3YL42I3p6nB8Vxf8QYJTqcXymHrM%2BUtj13%2FL5N4h%2BIxGnf%2BMN%2BLosMGOqUBEc%2BZVgsON3btuDvaX7k6H5paFmtPs6VCWFwWdccmLwy6JtBXdu3ENczMMSvy2Cci5C5wpyqMYEbpISNSsasFYv%2BYQjWP2%2F0NmsuuvmmXOvpEtnWOwxvyPwdNkBvB%2BR4JXhXwX%2FKsfP4%2F2%2FgSu0DnKa2FetBRzF9zkm6mirJpqF8ux1qqdfEboWiXsIuoHYGq3K5vTZeq2RX8%2BWxexcCO2iaFzGid&X-Amz-Signature=071b248627fc283fcf841d21d2442bc4aa2bc4a70c6e4d5ade1e500af78beaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4QPUAA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDcFf8M5efLS8w4YXwohjHGRiSg35buOBPB068rA%2BTwNgIgMJfKjbAHPeicLJ%2BHukK8U6rQ76Dp0WXs%2BMemTBuh12cq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPLOl%2BZwgpkiRTfnyyrcA85Z3zRq7pjzmeda%2BsXLt56EXXW5UxQXQsomRaN7t3j973cW79qFI0D4rrCHA58zBTcyhJVXZ0si3Vg9L0W3sQXtWx0xC1VKA7Fd45AKFgUsxu4XjMpoDD9nWMnCbOmTKmGdAaE1Yu%2F1PK8%2BJdL%2FaPkG%2FhtNyPaCVFjjFlSiJaUT4EP%2FGjy4kDUoaiG4dLRN5RTb8Bq0KVi0b%2F%2FQOUp1E4QNp9KUkgv%2B4N7zIIYaPfi%2FwbpBC93pdiNMk3WpHsnW%2FVZLiDQGdIJnjgy5%2FVmOk50drsS2%2BH8U2YSb%2FesgUXtLUTdcvWdjXSo6HCOGicoGT8Ko4e60PAUKAZZ%2FOfeprgDijN05g9CUH7c2Iq%2F6xsH0d0xXfFyxaqm99cib4cBXjBtImHfHX9veeS1cun57F0DHX33VAnHjjJv7q3fkR22T7BbzdDjD6DjttDry%2BSMDhb8RKeuBLknxeXhQUFIH6y8LGlnr3fpoxbs8QWJdwjGkwIxuQqEZJOI%2FPWfajK8XDCYxgu513I%2BRBnNGZz3UgOdSJAKJLWCWXY%2BGwQMnBgVw2OeRu6iiZwgyMKRUeEPYoYanPGUj84aJg3YL42I3p6nB8Vxf8QYJTqcXymHrM%2BUtj13%2FL5N4h%2BIxGnf%2BMN%2BLosMGOqUBEc%2BZVgsON3btuDvaX7k6H5paFmtPs6VCWFwWdccmLwy6JtBXdu3ENczMMSvy2Cci5C5wpyqMYEbpISNSsasFYv%2BYQjWP2%2F0NmsuuvmmXOvpEtnWOwxvyPwdNkBvB%2BR4JXhXwX%2FKsfP4%2F2%2FgSu0DnKa2FetBRzF9zkm6mirJpqF8ux1qqdfEboWiXsIuoHYGq3K5vTZeq2RX8%2BWxexcCO2iaFzGid&X-Amz-Signature=6ebd1a5ea21f229ac14f9c6b5868d79a5b4722a12e10e39da46de6e394b70eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4QPUAA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDcFf8M5efLS8w4YXwohjHGRiSg35buOBPB068rA%2BTwNgIgMJfKjbAHPeicLJ%2BHukK8U6rQ76Dp0WXs%2BMemTBuh12cq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPLOl%2BZwgpkiRTfnyyrcA85Z3zRq7pjzmeda%2BsXLt56EXXW5UxQXQsomRaN7t3j973cW79qFI0D4rrCHA58zBTcyhJVXZ0si3Vg9L0W3sQXtWx0xC1VKA7Fd45AKFgUsxu4XjMpoDD9nWMnCbOmTKmGdAaE1Yu%2F1PK8%2BJdL%2FaPkG%2FhtNyPaCVFjjFlSiJaUT4EP%2FGjy4kDUoaiG4dLRN5RTb8Bq0KVi0b%2F%2FQOUp1E4QNp9KUkgv%2B4N7zIIYaPfi%2FwbpBC93pdiNMk3WpHsnW%2FVZLiDQGdIJnjgy5%2FVmOk50drsS2%2BH8U2YSb%2FesgUXtLUTdcvWdjXSo6HCOGicoGT8Ko4e60PAUKAZZ%2FOfeprgDijN05g9CUH7c2Iq%2F6xsH0d0xXfFyxaqm99cib4cBXjBtImHfHX9veeS1cun57F0DHX33VAnHjjJv7q3fkR22T7BbzdDjD6DjttDry%2BSMDhb8RKeuBLknxeXhQUFIH6y8LGlnr3fpoxbs8QWJdwjGkwIxuQqEZJOI%2FPWfajK8XDCYxgu513I%2BRBnNGZz3UgOdSJAKJLWCWXY%2BGwQMnBgVw2OeRu6iiZwgyMKRUeEPYoYanPGUj84aJg3YL42I3p6nB8Vxf8QYJTqcXymHrM%2BUtj13%2FL5N4h%2BIxGnf%2BMN%2BLosMGOqUBEc%2BZVgsON3btuDvaX7k6H5paFmtPs6VCWFwWdccmLwy6JtBXdu3ENczMMSvy2Cci5C5wpyqMYEbpISNSsasFYv%2BYQjWP2%2F0NmsuuvmmXOvpEtnWOwxvyPwdNkBvB%2BR4JXhXwX%2FKsfP4%2F2%2FgSu0DnKa2FetBRzF9zkm6mirJpqF8ux1qqdfEboWiXsIuoHYGq3K5vTZeq2RX8%2BWxexcCO2iaFzGid&X-Amz-Signature=1395477240351f3bd535189419e14629698768be2ce226fde6f2142d5c55ec05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4QPUAA%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T022820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDcFf8M5efLS8w4YXwohjHGRiSg35buOBPB068rA%2BTwNgIgMJfKjbAHPeicLJ%2BHukK8U6rQ76Dp0WXs%2BMemTBuh12cq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPLOl%2BZwgpkiRTfnyyrcA85Z3zRq7pjzmeda%2BsXLt56EXXW5UxQXQsomRaN7t3j973cW79qFI0D4rrCHA58zBTcyhJVXZ0si3Vg9L0W3sQXtWx0xC1VKA7Fd45AKFgUsxu4XjMpoDD9nWMnCbOmTKmGdAaE1Yu%2F1PK8%2BJdL%2FaPkG%2FhtNyPaCVFjjFlSiJaUT4EP%2FGjy4kDUoaiG4dLRN5RTb8Bq0KVi0b%2F%2FQOUp1E4QNp9KUkgv%2B4N7zIIYaPfi%2FwbpBC93pdiNMk3WpHsnW%2FVZLiDQGdIJnjgy5%2FVmOk50drsS2%2BH8U2YSb%2FesgUXtLUTdcvWdjXSo6HCOGicoGT8Ko4e60PAUKAZZ%2FOfeprgDijN05g9CUH7c2Iq%2F6xsH0d0xXfFyxaqm99cib4cBXjBtImHfHX9veeS1cun57F0DHX33VAnHjjJv7q3fkR22T7BbzdDjD6DjttDry%2BSMDhb8RKeuBLknxeXhQUFIH6y8LGlnr3fpoxbs8QWJdwjGkwIxuQqEZJOI%2FPWfajK8XDCYxgu513I%2BRBnNGZz3UgOdSJAKJLWCWXY%2BGwQMnBgVw2OeRu6iiZwgyMKRUeEPYoYanPGUj84aJg3YL42I3p6nB8Vxf8QYJTqcXymHrM%2BUtj13%2FL5N4h%2BIxGnf%2BMN%2BLosMGOqUBEc%2BZVgsON3btuDvaX7k6H5paFmtPs6VCWFwWdccmLwy6JtBXdu3ENczMMSvy2Cci5C5wpyqMYEbpISNSsasFYv%2BYQjWP2%2F0NmsuuvmmXOvpEtnWOwxvyPwdNkBvB%2BR4JXhXwX%2FKsfP4%2F2%2FgSu0DnKa2FetBRzF9zkm6mirJpqF8ux1qqdfEboWiXsIuoHYGq3K5vTZeq2RX8%2BWxexcCO2iaFzGid&X-Amz-Signature=fbe1c8f64cb7fcecbe38cb88fc7aa8a46419e922ba767be940c325fc6efd84e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
