---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APE3DGL%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmi9K3dXJ%2B5rRTU7dTnGw5ewgCpPS%2FwhlySyL4uPsFNAiEAnAZZ1kq47I2ADkknmwCygjaeHFeOZqxNfLePjofutgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO5Cc4WlNm5sq5OERyrcA6%2By8j8iZfxLa%2BNXXm2OpRXlPIGfmt6AdBW1lJPvds9psWy3bd6Yh3wMmWXwHJiQAFl%2BOA9gztsnuCfJ%2B0liTKQ717l4A2ONiYwhIdw24jN3pYVJ7z%2BVSEceN2t97b5lONOP%2Bjs6gVLGkHDXdSMYkcAq%2BpLm90QXyyI7Nm84DzhVhEHUOpNCd1JLo5j0drRiyyO7Jjt3uWV7NvHCzxohWUVYNBZa9e6I7zkG%2BDxfIRSAgwvHUAY5YG8BcBfY%2BHxatbIarisGF6vAT36090lA1a7Ce%2FDVNFdrZF42tD1kJBLNBFlkagjamWMJbtiubuk6EWPSaMiTF7P%2BTSfs3Kvf7bcUcDARCNomvfUck6pB6FPDdKiqy8f0y0Vq2nzA2FDxcuaPs14PYxkjAZgyLN1fOs%2F5ayrpNgz2S%2Fy2YiTqVHi6J2aKUUIkAEFVhR6BOVfE9hwehm%2BtbjZ%2FRMIfyRhglIfIYXbWq0s8Vll9jVmpfE5Wbfd36PN1ER%2BT2dpTYkiwc1gS0Xcr5jwQKVqbRXu8IyP8RvNJRt3UvuM7SvvC%2FjcWxlQoV56Ga1gHSVA9hcfi6AwRTrux9%2FDAstMJHcIabD9kftP6VSK8mAwzj4cOEg8aTxlCB2EqJPpfhD%2BXMLa5ztAGOqUBJXfqtDmz9R2b5wXrevr6myCfWEbkcMfgEppTstcwV50j8B1318x7CCd2izdTkmmjtCLSSmtfj8ewvDxWWeKI04NGY0AEuiSFFtCTNj4ZKneXvSlK%2B1EBkc1%2FaWgpOyI5uzP9xsL0rLlkuE6K9t6J8Eo%2FY8KlSxf41MlCxnlVlnG38fQBak4SEQ6gdxQUSqQbHSM0To0f3XhJtnO0bCtiMF9w9ExS&X-Amz-Signature=36622ed1819889c3a4a044e64eee8515621864b9d0aee639afe11cb409b14e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APE3DGL%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmi9K3dXJ%2B5rRTU7dTnGw5ewgCpPS%2FwhlySyL4uPsFNAiEAnAZZ1kq47I2ADkknmwCygjaeHFeOZqxNfLePjofutgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO5Cc4WlNm5sq5OERyrcA6%2By8j8iZfxLa%2BNXXm2OpRXlPIGfmt6AdBW1lJPvds9psWy3bd6Yh3wMmWXwHJiQAFl%2BOA9gztsnuCfJ%2B0liTKQ717l4A2ONiYwhIdw24jN3pYVJ7z%2BVSEceN2t97b5lONOP%2Bjs6gVLGkHDXdSMYkcAq%2BpLm90QXyyI7Nm84DzhVhEHUOpNCd1JLo5j0drRiyyO7Jjt3uWV7NvHCzxohWUVYNBZa9e6I7zkG%2BDxfIRSAgwvHUAY5YG8BcBfY%2BHxatbIarisGF6vAT36090lA1a7Ce%2FDVNFdrZF42tD1kJBLNBFlkagjamWMJbtiubuk6EWPSaMiTF7P%2BTSfs3Kvf7bcUcDARCNomvfUck6pB6FPDdKiqy8f0y0Vq2nzA2FDxcuaPs14PYxkjAZgyLN1fOs%2F5ayrpNgz2S%2Fy2YiTqVHi6J2aKUUIkAEFVhR6BOVfE9hwehm%2BtbjZ%2FRMIfyRhglIfIYXbWq0s8Vll9jVmpfE5Wbfd36PN1ER%2BT2dpTYkiwc1gS0Xcr5jwQKVqbRXu8IyP8RvNJRt3UvuM7SvvC%2FjcWxlQoV56Ga1gHSVA9hcfi6AwRTrux9%2FDAstMJHcIabD9kftP6VSK8mAwzj4cOEg8aTxlCB2EqJPpfhD%2BXMLa5ztAGOqUBJXfqtDmz9R2b5wXrevr6myCfWEbkcMfgEppTstcwV50j8B1318x7CCd2izdTkmmjtCLSSmtfj8ewvDxWWeKI04NGY0AEuiSFFtCTNj4ZKneXvSlK%2B1EBkc1%2FaWgpOyI5uzP9xsL0rLlkuE6K9t6J8Eo%2FY8KlSxf41MlCxnlVlnG38fQBak4SEQ6gdxQUSqQbHSM0To0f3XhJtnO0bCtiMF9w9ExS&X-Amz-Signature=0bf94c0751e2252bb865b06561dc9497cd22172546e538debf3d6b1468900e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APE3DGL%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmi9K3dXJ%2B5rRTU7dTnGw5ewgCpPS%2FwhlySyL4uPsFNAiEAnAZZ1kq47I2ADkknmwCygjaeHFeOZqxNfLePjofutgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO5Cc4WlNm5sq5OERyrcA6%2By8j8iZfxLa%2BNXXm2OpRXlPIGfmt6AdBW1lJPvds9psWy3bd6Yh3wMmWXwHJiQAFl%2BOA9gztsnuCfJ%2B0liTKQ717l4A2ONiYwhIdw24jN3pYVJ7z%2BVSEceN2t97b5lONOP%2Bjs6gVLGkHDXdSMYkcAq%2BpLm90QXyyI7Nm84DzhVhEHUOpNCd1JLo5j0drRiyyO7Jjt3uWV7NvHCzxohWUVYNBZa9e6I7zkG%2BDxfIRSAgwvHUAY5YG8BcBfY%2BHxatbIarisGF6vAT36090lA1a7Ce%2FDVNFdrZF42tD1kJBLNBFlkagjamWMJbtiubuk6EWPSaMiTF7P%2BTSfs3Kvf7bcUcDARCNomvfUck6pB6FPDdKiqy8f0y0Vq2nzA2FDxcuaPs14PYxkjAZgyLN1fOs%2F5ayrpNgz2S%2Fy2YiTqVHi6J2aKUUIkAEFVhR6BOVfE9hwehm%2BtbjZ%2FRMIfyRhglIfIYXbWq0s8Vll9jVmpfE5Wbfd36PN1ER%2BT2dpTYkiwc1gS0Xcr5jwQKVqbRXu8IyP8RvNJRt3UvuM7SvvC%2FjcWxlQoV56Ga1gHSVA9hcfi6AwRTrux9%2FDAstMJHcIabD9kftP6VSK8mAwzj4cOEg8aTxlCB2EqJPpfhD%2BXMLa5ztAGOqUBJXfqtDmz9R2b5wXrevr6myCfWEbkcMfgEppTstcwV50j8B1318x7CCd2izdTkmmjtCLSSmtfj8ewvDxWWeKI04NGY0AEuiSFFtCTNj4ZKneXvSlK%2B1EBkc1%2FaWgpOyI5uzP9xsL0rLlkuE6K9t6J8Eo%2FY8KlSxf41MlCxnlVlnG38fQBak4SEQ6gdxQUSqQbHSM0To0f3XhJtnO0bCtiMF9w9ExS&X-Amz-Signature=88aab76c17acbdeb4a84cec853e2dacd5934a112c4385ddf93f329e6e149533f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APE3DGL%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmi9K3dXJ%2B5rRTU7dTnGw5ewgCpPS%2FwhlySyL4uPsFNAiEAnAZZ1kq47I2ADkknmwCygjaeHFeOZqxNfLePjofutgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO5Cc4WlNm5sq5OERyrcA6%2By8j8iZfxLa%2BNXXm2OpRXlPIGfmt6AdBW1lJPvds9psWy3bd6Yh3wMmWXwHJiQAFl%2BOA9gztsnuCfJ%2B0liTKQ717l4A2ONiYwhIdw24jN3pYVJ7z%2BVSEceN2t97b5lONOP%2Bjs6gVLGkHDXdSMYkcAq%2BpLm90QXyyI7Nm84DzhVhEHUOpNCd1JLo5j0drRiyyO7Jjt3uWV7NvHCzxohWUVYNBZa9e6I7zkG%2BDxfIRSAgwvHUAY5YG8BcBfY%2BHxatbIarisGF6vAT36090lA1a7Ce%2FDVNFdrZF42tD1kJBLNBFlkagjamWMJbtiubuk6EWPSaMiTF7P%2BTSfs3Kvf7bcUcDARCNomvfUck6pB6FPDdKiqy8f0y0Vq2nzA2FDxcuaPs14PYxkjAZgyLN1fOs%2F5ayrpNgz2S%2Fy2YiTqVHi6J2aKUUIkAEFVhR6BOVfE9hwehm%2BtbjZ%2FRMIfyRhglIfIYXbWq0s8Vll9jVmpfE5Wbfd36PN1ER%2BT2dpTYkiwc1gS0Xcr5jwQKVqbRXu8IyP8RvNJRt3UvuM7SvvC%2FjcWxlQoV56Ga1gHSVA9hcfi6AwRTrux9%2FDAstMJHcIabD9kftP6VSK8mAwzj4cOEg8aTxlCB2EqJPpfhD%2BXMLa5ztAGOqUBJXfqtDmz9R2b5wXrevr6myCfWEbkcMfgEppTstcwV50j8B1318x7CCd2izdTkmmjtCLSSmtfj8ewvDxWWeKI04NGY0AEuiSFFtCTNj4ZKneXvSlK%2B1EBkc1%2FaWgpOyI5uzP9xsL0rLlkuE6K9t6J8Eo%2FY8KlSxf41MlCxnlVlnG38fQBak4SEQ6gdxQUSqQbHSM0To0f3XhJtnO0bCtiMF9w9ExS&X-Amz-Signature=ddea1852707d9b3b521174a2abc0a59871121a450f4daa72c6e34ec41abe4137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APE3DGL%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmi9K3dXJ%2B5rRTU7dTnGw5ewgCpPS%2FwhlySyL4uPsFNAiEAnAZZ1kq47I2ADkknmwCygjaeHFeOZqxNfLePjofutgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO5Cc4WlNm5sq5OERyrcA6%2By8j8iZfxLa%2BNXXm2OpRXlPIGfmt6AdBW1lJPvds9psWy3bd6Yh3wMmWXwHJiQAFl%2BOA9gztsnuCfJ%2B0liTKQ717l4A2ONiYwhIdw24jN3pYVJ7z%2BVSEceN2t97b5lONOP%2Bjs6gVLGkHDXdSMYkcAq%2BpLm90QXyyI7Nm84DzhVhEHUOpNCd1JLo5j0drRiyyO7Jjt3uWV7NvHCzxohWUVYNBZa9e6I7zkG%2BDxfIRSAgwvHUAY5YG8BcBfY%2BHxatbIarisGF6vAT36090lA1a7Ce%2FDVNFdrZF42tD1kJBLNBFlkagjamWMJbtiubuk6EWPSaMiTF7P%2BTSfs3Kvf7bcUcDARCNomvfUck6pB6FPDdKiqy8f0y0Vq2nzA2FDxcuaPs14PYxkjAZgyLN1fOs%2F5ayrpNgz2S%2Fy2YiTqVHi6J2aKUUIkAEFVhR6BOVfE9hwehm%2BtbjZ%2FRMIfyRhglIfIYXbWq0s8Vll9jVmpfE5Wbfd36PN1ER%2BT2dpTYkiwc1gS0Xcr5jwQKVqbRXu8IyP8RvNJRt3UvuM7SvvC%2FjcWxlQoV56Ga1gHSVA9hcfi6AwRTrux9%2FDAstMJHcIabD9kftP6VSK8mAwzj4cOEg8aTxlCB2EqJPpfhD%2BXMLa5ztAGOqUBJXfqtDmz9R2b5wXrevr6myCfWEbkcMfgEppTstcwV50j8B1318x7CCd2izdTkmmjtCLSSmtfj8ewvDxWWeKI04NGY0AEuiSFFtCTNj4ZKneXvSlK%2B1EBkc1%2FaWgpOyI5uzP9xsL0rLlkuE6K9t6J8Eo%2FY8KlSxf41MlCxnlVlnG38fQBak4SEQ6gdxQUSqQbHSM0To0f3XhJtnO0bCtiMF9w9ExS&X-Amz-Signature=55f7203911a48c5703d1214d93ac29b3f27ba96808c7746b5192ec7e89bc8a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APE3DGL%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmi9K3dXJ%2B5rRTU7dTnGw5ewgCpPS%2FwhlySyL4uPsFNAiEAnAZZ1kq47I2ADkknmwCygjaeHFeOZqxNfLePjofutgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO5Cc4WlNm5sq5OERyrcA6%2By8j8iZfxLa%2BNXXm2OpRXlPIGfmt6AdBW1lJPvds9psWy3bd6Yh3wMmWXwHJiQAFl%2BOA9gztsnuCfJ%2B0liTKQ717l4A2ONiYwhIdw24jN3pYVJ7z%2BVSEceN2t97b5lONOP%2Bjs6gVLGkHDXdSMYkcAq%2BpLm90QXyyI7Nm84DzhVhEHUOpNCd1JLo5j0drRiyyO7Jjt3uWV7NvHCzxohWUVYNBZa9e6I7zkG%2BDxfIRSAgwvHUAY5YG8BcBfY%2BHxatbIarisGF6vAT36090lA1a7Ce%2FDVNFdrZF42tD1kJBLNBFlkagjamWMJbtiubuk6EWPSaMiTF7P%2BTSfs3Kvf7bcUcDARCNomvfUck6pB6FPDdKiqy8f0y0Vq2nzA2FDxcuaPs14PYxkjAZgyLN1fOs%2F5ayrpNgz2S%2Fy2YiTqVHi6J2aKUUIkAEFVhR6BOVfE9hwehm%2BtbjZ%2FRMIfyRhglIfIYXbWq0s8Vll9jVmpfE5Wbfd36PN1ER%2BT2dpTYkiwc1gS0Xcr5jwQKVqbRXu8IyP8RvNJRt3UvuM7SvvC%2FjcWxlQoV56Ga1gHSVA9hcfi6AwRTrux9%2FDAstMJHcIabD9kftP6VSK8mAwzj4cOEg8aTxlCB2EqJPpfhD%2BXMLa5ztAGOqUBJXfqtDmz9R2b5wXrevr6myCfWEbkcMfgEppTstcwV50j8B1318x7CCd2izdTkmmjtCLSSmtfj8ewvDxWWeKI04NGY0AEuiSFFtCTNj4ZKneXvSlK%2B1EBkc1%2FaWgpOyI5uzP9xsL0rLlkuE6K9t6J8Eo%2FY8KlSxf41MlCxnlVlnG38fQBak4SEQ6gdxQUSqQbHSM0To0f3XhJtnO0bCtiMF9w9ExS&X-Amz-Signature=e72c64eb8699b5b5de2aeee567495ceb5611e29c0f455bf4103db8b6720410d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664APE3DGL%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAmi9K3dXJ%2B5rRTU7dTnGw5ewgCpPS%2FwhlySyL4uPsFNAiEAnAZZ1kq47I2ADkknmwCygjaeHFeOZqxNfLePjofutgUq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDO5Cc4WlNm5sq5OERyrcA6%2By8j8iZfxLa%2BNXXm2OpRXlPIGfmt6AdBW1lJPvds9psWy3bd6Yh3wMmWXwHJiQAFl%2BOA9gztsnuCfJ%2B0liTKQ717l4A2ONiYwhIdw24jN3pYVJ7z%2BVSEceN2t97b5lONOP%2Bjs6gVLGkHDXdSMYkcAq%2BpLm90QXyyI7Nm84DzhVhEHUOpNCd1JLo5j0drRiyyO7Jjt3uWV7NvHCzxohWUVYNBZa9e6I7zkG%2BDxfIRSAgwvHUAY5YG8BcBfY%2BHxatbIarisGF6vAT36090lA1a7Ce%2FDVNFdrZF42tD1kJBLNBFlkagjamWMJbtiubuk6EWPSaMiTF7P%2BTSfs3Kvf7bcUcDARCNomvfUck6pB6FPDdKiqy8f0y0Vq2nzA2FDxcuaPs14PYxkjAZgyLN1fOs%2F5ayrpNgz2S%2Fy2YiTqVHi6J2aKUUIkAEFVhR6BOVfE9hwehm%2BtbjZ%2FRMIfyRhglIfIYXbWq0s8Vll9jVmpfE5Wbfd36PN1ER%2BT2dpTYkiwc1gS0Xcr5jwQKVqbRXu8IyP8RvNJRt3UvuM7SvvC%2FjcWxlQoV56Ga1gHSVA9hcfi6AwRTrux9%2FDAstMJHcIabD9kftP6VSK8mAwzj4cOEg8aTxlCB2EqJPpfhD%2BXMLa5ztAGOqUBJXfqtDmz9R2b5wXrevr6myCfWEbkcMfgEppTstcwV50j8B1318x7CCd2izdTkmmjtCLSSmtfj8ewvDxWWeKI04NGY0AEuiSFFtCTNj4ZKneXvSlK%2B1EBkc1%2FaWgpOyI5uzP9xsL0rLlkuE6K9t6J8Eo%2FY8KlSxf41MlCxnlVlnG38fQBak4SEQ6gdxQUSqQbHSM0To0f3XhJtnO0bCtiMF9w9ExS&X-Amz-Signature=b9608e5204ed5ff3e20f9e7bdb70f767315c7c07b3cdf83134c6d65918c9a6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
