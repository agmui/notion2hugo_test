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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4Y7JW7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcuyN6qqiiJHC7n0H71czhElYut71KiRslaSCrdtuAAIgHPFuxXFYbL0%2FePU6YxXMAioEQ0JVmd9%2BSBivxRHxzWYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDNy0d%2B%2FAUmWbGn6qyrcA%2B3%2BnEYbmdQLHGqbrKVaMjGA3yiGv6WqRYFNkudYnVxnm%2BScqUyVyXKYR3eWxZmtnCfLpoTrr5JpfT8FJIZbiGJtvurusr42s22pKHbDzCpt0mzFcI94THH3maXyqL2NZJWNudUxPWMhU2AjEOc1cYPpPOFFWqJiOHtbRRyxCYbtkB%2FYEEz0WXQJOfaPKBzb2snA9DHKop83K48QWNt1y8W3tS5YDjREGXUTqpVw2qvxdoHByB1pd0LTweJVTv9KBPcvuCKDUyc1s%2F%2BHaotmoEtjYiJPCNmFE7AkWJLhMjugFSia30htgbWOEZVF6RQ7hXM33RZ2RbcPajrAH7s3ndoIOQgpS8Q4FQTfZjqbd12sL9etE3cxTxANt2bG%2FSIid7MSFx1XWQtpgsF4DatRrtJFYmk2WQSZA9ewQJ%2FpbRMsFQ735b1kMdLjheURqzV61IjCQHskS3x%2BinqWebVa2k%2FDIppL0yDzmMLy%2FCiJILTdmnQ0reF3ITlkjIsZFGxx30ScogqMKG20GZcuIQjPhqSpoXmB8Wb%2Ffkj6Pf3OFl89BTEKeJ3gE%2Fy3%2FfQMMLDZc5qnXDSlIoHdhmV6DPdOzyNOeZnr4dl%2Fo0QyNdpgPLgB9yls97kiiQ8DTxDLMJSM7b0GOqUBVpGiXIO6boB17Qr%2FbKHcvQsKcdEBaC9AsVw9k0s%2F2V0IQ414WBiyR3Ozqr5PJiAWWDCOKeMX5qJb7sPYx%2FRrh9pkcBpLDigB%2B%2B%2BzGnhb2qV0JivNLemMaS4bW%2FcsFMr1Aj4RUUn%2FVrGFjROz3v0JBJf%2FG1cKA3Y8ddNyZ7Pek%2F15Mut%2FklnqJCYJkcuTJNx0TAfMY1FIl%2BkEaAhsEVQWvf9N%2Flwt&X-Amz-Signature=af24da54d6c97cadc9a96fd27f9074262d4d634b026b5c68826039676c7fd188&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4Y7JW7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcuyN6qqiiJHC7n0H71czhElYut71KiRslaSCrdtuAAIgHPFuxXFYbL0%2FePU6YxXMAioEQ0JVmd9%2BSBivxRHxzWYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDNy0d%2B%2FAUmWbGn6qyrcA%2B3%2BnEYbmdQLHGqbrKVaMjGA3yiGv6WqRYFNkudYnVxnm%2BScqUyVyXKYR3eWxZmtnCfLpoTrr5JpfT8FJIZbiGJtvurusr42s22pKHbDzCpt0mzFcI94THH3maXyqL2NZJWNudUxPWMhU2AjEOc1cYPpPOFFWqJiOHtbRRyxCYbtkB%2FYEEz0WXQJOfaPKBzb2snA9DHKop83K48QWNt1y8W3tS5YDjREGXUTqpVw2qvxdoHByB1pd0LTweJVTv9KBPcvuCKDUyc1s%2F%2BHaotmoEtjYiJPCNmFE7AkWJLhMjugFSia30htgbWOEZVF6RQ7hXM33RZ2RbcPajrAH7s3ndoIOQgpS8Q4FQTfZjqbd12sL9etE3cxTxANt2bG%2FSIid7MSFx1XWQtpgsF4DatRrtJFYmk2WQSZA9ewQJ%2FpbRMsFQ735b1kMdLjheURqzV61IjCQHskS3x%2BinqWebVa2k%2FDIppL0yDzmMLy%2FCiJILTdmnQ0reF3ITlkjIsZFGxx30ScogqMKG20GZcuIQjPhqSpoXmB8Wb%2Ffkj6Pf3OFl89BTEKeJ3gE%2Fy3%2FfQMMLDZc5qnXDSlIoHdhmV6DPdOzyNOeZnr4dl%2Fo0QyNdpgPLgB9yls97kiiQ8DTxDLMJSM7b0GOqUBVpGiXIO6boB17Qr%2FbKHcvQsKcdEBaC9AsVw9k0s%2F2V0IQ414WBiyR3Ozqr5PJiAWWDCOKeMX5qJb7sPYx%2FRrh9pkcBpLDigB%2B%2B%2BzGnhb2qV0JivNLemMaS4bW%2FcsFMr1Aj4RUUn%2FVrGFjROz3v0JBJf%2FG1cKA3Y8ddNyZ7Pek%2F15Mut%2FklnqJCYJkcuTJNx0TAfMY1FIl%2BkEaAhsEVQWvf9N%2Flwt&X-Amz-Signature=07d99e570dfc100ab518f9fc818214b98c9622bc796afcfa9a251da43dab8a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4Y7JW7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcuyN6qqiiJHC7n0H71czhElYut71KiRslaSCrdtuAAIgHPFuxXFYbL0%2FePU6YxXMAioEQ0JVmd9%2BSBivxRHxzWYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDNy0d%2B%2FAUmWbGn6qyrcA%2B3%2BnEYbmdQLHGqbrKVaMjGA3yiGv6WqRYFNkudYnVxnm%2BScqUyVyXKYR3eWxZmtnCfLpoTrr5JpfT8FJIZbiGJtvurusr42s22pKHbDzCpt0mzFcI94THH3maXyqL2NZJWNudUxPWMhU2AjEOc1cYPpPOFFWqJiOHtbRRyxCYbtkB%2FYEEz0WXQJOfaPKBzb2snA9DHKop83K48QWNt1y8W3tS5YDjREGXUTqpVw2qvxdoHByB1pd0LTweJVTv9KBPcvuCKDUyc1s%2F%2BHaotmoEtjYiJPCNmFE7AkWJLhMjugFSia30htgbWOEZVF6RQ7hXM33RZ2RbcPajrAH7s3ndoIOQgpS8Q4FQTfZjqbd12sL9etE3cxTxANt2bG%2FSIid7MSFx1XWQtpgsF4DatRrtJFYmk2WQSZA9ewQJ%2FpbRMsFQ735b1kMdLjheURqzV61IjCQHskS3x%2BinqWebVa2k%2FDIppL0yDzmMLy%2FCiJILTdmnQ0reF3ITlkjIsZFGxx30ScogqMKG20GZcuIQjPhqSpoXmB8Wb%2Ffkj6Pf3OFl89BTEKeJ3gE%2Fy3%2FfQMMLDZc5qnXDSlIoHdhmV6DPdOzyNOeZnr4dl%2Fo0QyNdpgPLgB9yls97kiiQ8DTxDLMJSM7b0GOqUBVpGiXIO6boB17Qr%2FbKHcvQsKcdEBaC9AsVw9k0s%2F2V0IQ414WBiyR3Ozqr5PJiAWWDCOKeMX5qJb7sPYx%2FRrh9pkcBpLDigB%2B%2B%2BzGnhb2qV0JivNLemMaS4bW%2FcsFMr1Aj4RUUn%2FVrGFjROz3v0JBJf%2FG1cKA3Y8ddNyZ7Pek%2F15Mut%2FklnqJCYJkcuTJNx0TAfMY1FIl%2BkEaAhsEVQWvf9N%2Flwt&X-Amz-Signature=60e87b9b9c3dffb386747ee0b51eaaea4714d28e4c1ce8068af009e206c8582e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4Y7JW7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcuyN6qqiiJHC7n0H71czhElYut71KiRslaSCrdtuAAIgHPFuxXFYbL0%2FePU6YxXMAioEQ0JVmd9%2BSBivxRHxzWYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDNy0d%2B%2FAUmWbGn6qyrcA%2B3%2BnEYbmdQLHGqbrKVaMjGA3yiGv6WqRYFNkudYnVxnm%2BScqUyVyXKYR3eWxZmtnCfLpoTrr5JpfT8FJIZbiGJtvurusr42s22pKHbDzCpt0mzFcI94THH3maXyqL2NZJWNudUxPWMhU2AjEOc1cYPpPOFFWqJiOHtbRRyxCYbtkB%2FYEEz0WXQJOfaPKBzb2snA9DHKop83K48QWNt1y8W3tS5YDjREGXUTqpVw2qvxdoHByB1pd0LTweJVTv9KBPcvuCKDUyc1s%2F%2BHaotmoEtjYiJPCNmFE7AkWJLhMjugFSia30htgbWOEZVF6RQ7hXM33RZ2RbcPajrAH7s3ndoIOQgpS8Q4FQTfZjqbd12sL9etE3cxTxANt2bG%2FSIid7MSFx1XWQtpgsF4DatRrtJFYmk2WQSZA9ewQJ%2FpbRMsFQ735b1kMdLjheURqzV61IjCQHskS3x%2BinqWebVa2k%2FDIppL0yDzmMLy%2FCiJILTdmnQ0reF3ITlkjIsZFGxx30ScogqMKG20GZcuIQjPhqSpoXmB8Wb%2Ffkj6Pf3OFl89BTEKeJ3gE%2Fy3%2FfQMMLDZc5qnXDSlIoHdhmV6DPdOzyNOeZnr4dl%2Fo0QyNdpgPLgB9yls97kiiQ8DTxDLMJSM7b0GOqUBVpGiXIO6boB17Qr%2FbKHcvQsKcdEBaC9AsVw9k0s%2F2V0IQ414WBiyR3Ozqr5PJiAWWDCOKeMX5qJb7sPYx%2FRrh9pkcBpLDigB%2B%2B%2BzGnhb2qV0JivNLemMaS4bW%2FcsFMr1Aj4RUUn%2FVrGFjROz3v0JBJf%2FG1cKA3Y8ddNyZ7Pek%2F15Mut%2FklnqJCYJkcuTJNx0TAfMY1FIl%2BkEaAhsEVQWvf9N%2Flwt&X-Amz-Signature=4c25041206c3bc625ea83bdaf6c6d7482e156c16fab5e6ecd7a069b9b5e07638&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4Y7JW7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcuyN6qqiiJHC7n0H71czhElYut71KiRslaSCrdtuAAIgHPFuxXFYbL0%2FePU6YxXMAioEQ0JVmd9%2BSBivxRHxzWYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDNy0d%2B%2FAUmWbGn6qyrcA%2B3%2BnEYbmdQLHGqbrKVaMjGA3yiGv6WqRYFNkudYnVxnm%2BScqUyVyXKYR3eWxZmtnCfLpoTrr5JpfT8FJIZbiGJtvurusr42s22pKHbDzCpt0mzFcI94THH3maXyqL2NZJWNudUxPWMhU2AjEOc1cYPpPOFFWqJiOHtbRRyxCYbtkB%2FYEEz0WXQJOfaPKBzb2snA9DHKop83K48QWNt1y8W3tS5YDjREGXUTqpVw2qvxdoHByB1pd0LTweJVTv9KBPcvuCKDUyc1s%2F%2BHaotmoEtjYiJPCNmFE7AkWJLhMjugFSia30htgbWOEZVF6RQ7hXM33RZ2RbcPajrAH7s3ndoIOQgpS8Q4FQTfZjqbd12sL9etE3cxTxANt2bG%2FSIid7MSFx1XWQtpgsF4DatRrtJFYmk2WQSZA9ewQJ%2FpbRMsFQ735b1kMdLjheURqzV61IjCQHskS3x%2BinqWebVa2k%2FDIppL0yDzmMLy%2FCiJILTdmnQ0reF3ITlkjIsZFGxx30ScogqMKG20GZcuIQjPhqSpoXmB8Wb%2Ffkj6Pf3OFl89BTEKeJ3gE%2Fy3%2FfQMMLDZc5qnXDSlIoHdhmV6DPdOzyNOeZnr4dl%2Fo0QyNdpgPLgB9yls97kiiQ8DTxDLMJSM7b0GOqUBVpGiXIO6boB17Qr%2FbKHcvQsKcdEBaC9AsVw9k0s%2F2V0IQ414WBiyR3Ozqr5PJiAWWDCOKeMX5qJb7sPYx%2FRrh9pkcBpLDigB%2B%2B%2BzGnhb2qV0JivNLemMaS4bW%2FcsFMr1Aj4RUUn%2FVrGFjROz3v0JBJf%2FG1cKA3Y8ddNyZ7Pek%2F15Mut%2FklnqJCYJkcuTJNx0TAfMY1FIl%2BkEaAhsEVQWvf9N%2Flwt&X-Amz-Signature=f179ff5a0b14e4d24c8b288244a2731a87232d91cc3418465243902b6c35d243&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4Y7JW7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcuyN6qqiiJHC7n0H71czhElYut71KiRslaSCrdtuAAIgHPFuxXFYbL0%2FePU6YxXMAioEQ0JVmd9%2BSBivxRHxzWYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDNy0d%2B%2FAUmWbGn6qyrcA%2B3%2BnEYbmdQLHGqbrKVaMjGA3yiGv6WqRYFNkudYnVxnm%2BScqUyVyXKYR3eWxZmtnCfLpoTrr5JpfT8FJIZbiGJtvurusr42s22pKHbDzCpt0mzFcI94THH3maXyqL2NZJWNudUxPWMhU2AjEOc1cYPpPOFFWqJiOHtbRRyxCYbtkB%2FYEEz0WXQJOfaPKBzb2snA9DHKop83K48QWNt1y8W3tS5YDjREGXUTqpVw2qvxdoHByB1pd0LTweJVTv9KBPcvuCKDUyc1s%2F%2BHaotmoEtjYiJPCNmFE7AkWJLhMjugFSia30htgbWOEZVF6RQ7hXM33RZ2RbcPajrAH7s3ndoIOQgpS8Q4FQTfZjqbd12sL9etE3cxTxANt2bG%2FSIid7MSFx1XWQtpgsF4DatRrtJFYmk2WQSZA9ewQJ%2FpbRMsFQ735b1kMdLjheURqzV61IjCQHskS3x%2BinqWebVa2k%2FDIppL0yDzmMLy%2FCiJILTdmnQ0reF3ITlkjIsZFGxx30ScogqMKG20GZcuIQjPhqSpoXmB8Wb%2Ffkj6Pf3OFl89BTEKeJ3gE%2Fy3%2FfQMMLDZc5qnXDSlIoHdhmV6DPdOzyNOeZnr4dl%2Fo0QyNdpgPLgB9yls97kiiQ8DTxDLMJSM7b0GOqUBVpGiXIO6boB17Qr%2FbKHcvQsKcdEBaC9AsVw9k0s%2F2V0IQ414WBiyR3Ozqr5PJiAWWDCOKeMX5qJb7sPYx%2FRrh9pkcBpLDigB%2B%2B%2BzGnhb2qV0JivNLemMaS4bW%2FcsFMr1Aj4RUUn%2FVrGFjROz3v0JBJf%2FG1cKA3Y8ddNyZ7Pek%2F15Mut%2FklnqJCYJkcuTJNx0TAfMY1FIl%2BkEaAhsEVQWvf9N%2Flwt&X-Amz-Signature=29139023d1f15ecd8206ca974fd394c980bb2d0852861b1b76689074cef50cf8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF4Y7JW7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T180859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTcuyN6qqiiJHC7n0H71czhElYut71KiRslaSCrdtuAAIgHPFuxXFYbL0%2FePU6YxXMAioEQ0JVmd9%2BSBivxRHxzWYq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDNy0d%2B%2FAUmWbGn6qyrcA%2B3%2BnEYbmdQLHGqbrKVaMjGA3yiGv6WqRYFNkudYnVxnm%2BScqUyVyXKYR3eWxZmtnCfLpoTrr5JpfT8FJIZbiGJtvurusr42s22pKHbDzCpt0mzFcI94THH3maXyqL2NZJWNudUxPWMhU2AjEOc1cYPpPOFFWqJiOHtbRRyxCYbtkB%2FYEEz0WXQJOfaPKBzb2snA9DHKop83K48QWNt1y8W3tS5YDjREGXUTqpVw2qvxdoHByB1pd0LTweJVTv9KBPcvuCKDUyc1s%2F%2BHaotmoEtjYiJPCNmFE7AkWJLhMjugFSia30htgbWOEZVF6RQ7hXM33RZ2RbcPajrAH7s3ndoIOQgpS8Q4FQTfZjqbd12sL9etE3cxTxANt2bG%2FSIid7MSFx1XWQtpgsF4DatRrtJFYmk2WQSZA9ewQJ%2FpbRMsFQ735b1kMdLjheURqzV61IjCQHskS3x%2BinqWebVa2k%2FDIppL0yDzmMLy%2FCiJILTdmnQ0reF3ITlkjIsZFGxx30ScogqMKG20GZcuIQjPhqSpoXmB8Wb%2Ffkj6Pf3OFl89BTEKeJ3gE%2Fy3%2FfQMMLDZc5qnXDSlIoHdhmV6DPdOzyNOeZnr4dl%2Fo0QyNdpgPLgB9yls97kiiQ8DTxDLMJSM7b0GOqUBVpGiXIO6boB17Qr%2FbKHcvQsKcdEBaC9AsVw9k0s%2F2V0IQ414WBiyR3Ozqr5PJiAWWDCOKeMX5qJb7sPYx%2FRrh9pkcBpLDigB%2B%2B%2BzGnhb2qV0JivNLemMaS4bW%2FcsFMr1Aj4RUUn%2FVrGFjROz3v0JBJf%2FG1cKA3Y8ddNyZ7Pek%2F15Mut%2FklnqJCYJkcuTJNx0TAfMY1FIl%2BkEaAhsEVQWvf9N%2Flwt&X-Amz-Signature=1938524166d1204170dd40f5f2095944e7ce3c438802b75a5058305312bda876&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
