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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3ND62J%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCzPDKW3%2FaDaNzBeQ%2BA3ndfRft%2FmVnWi7YNm2OL0D%2FhIgIhAN%2FK3W0ValW7hgoKaQ6xZ7JqfTGpgpl6ZMrK6jSLkeBqKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1bNUdUrWRncOFnpMq3AOkhmlRAxep0yqDQhnwtX7L9yvREoGv9ByhsMZcl6eKD7X20VyWNzu7fDmAGTCvcncUClFK2rWCTsfQNtUFQI6k22ScltP0FfZnnytrWJmXna9zqdkyt3KxLUWL38n1GHrbw4RhmLl8%2FgluCYjBL3KEq%2FONb6qKPwhb9lUxUbbTpn3M0SVdR3y7SeaP%2FAZwiPR41vnUQf9AKSb7tL%2F3B4%2BJDLouxS3EO8NzY8yofgVCMbSLzmygC4I%2BN4sRR1Vigbvz1%2Ft5%2FLRTRlQaIKv1XFyeC2sXiiGZMGpd0AJdnU5Cvgf%2BNir7GA4BD2qOgZNeK00RtBmw4pMpfQAWDgrrkQ8I89jnmDqFBowrrMICIFPtYNcwBKzS5SYqbtpnI61jUDryGbjNsI5tAxgA50t0fuUREuW0LGzMJWWgZXQHw5IDgklCdAqzpq6IATbiVS%2BZxOB5eD7u4p0p5QLGQ57BZKJiILm25yYP8WcZU1cDHIcxfpGVQJqcgXhAo%2FGuK8IqcwLZMZIs1GKNUCcvXF2K332onx%2FhLjwHD2Nb9FgKbmQ2FFjCmdfDfoHwFSy96TeeToski2UM0v07Gw6ffgNq8SFN%2BTt%2BIj4CjpFQ4BrQuU%2B4MFwe2Qhk8F9xy%2B976TCcpqjRBjqkATsl6n%2FG8oSNOAyOvetaCrU6p88fnmWNrqRrTvhfpRillKYaiCXe2fEZI3M5PtufXDr58pwl7g896jJVz%2Bi%2FyAw6mfzURZT8aOs1XJBDOnaeKgwGkd8Fr2Lpmv%2B4wyOtqV%2BOAHjdGLl0tgnPOImcc4P5%2B8hmN%2FJDcRWK6cyq3Uvz8oYvO4gVYDsXrmbKQZUGoPcL7wQ79F83u21NWHkYRxGXe2xZ&X-Amz-Signature=f1ab8274283851d0e944c3ace51edeb81b042fa602bf68402ac6b1a5a27ed779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3ND62J%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCzPDKW3%2FaDaNzBeQ%2BA3ndfRft%2FmVnWi7YNm2OL0D%2FhIgIhAN%2FK3W0ValW7hgoKaQ6xZ7JqfTGpgpl6ZMrK6jSLkeBqKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1bNUdUrWRncOFnpMq3AOkhmlRAxep0yqDQhnwtX7L9yvREoGv9ByhsMZcl6eKD7X20VyWNzu7fDmAGTCvcncUClFK2rWCTsfQNtUFQI6k22ScltP0FfZnnytrWJmXna9zqdkyt3KxLUWL38n1GHrbw4RhmLl8%2FgluCYjBL3KEq%2FONb6qKPwhb9lUxUbbTpn3M0SVdR3y7SeaP%2FAZwiPR41vnUQf9AKSb7tL%2F3B4%2BJDLouxS3EO8NzY8yofgVCMbSLzmygC4I%2BN4sRR1Vigbvz1%2Ft5%2FLRTRlQaIKv1XFyeC2sXiiGZMGpd0AJdnU5Cvgf%2BNir7GA4BD2qOgZNeK00RtBmw4pMpfQAWDgrrkQ8I89jnmDqFBowrrMICIFPtYNcwBKzS5SYqbtpnI61jUDryGbjNsI5tAxgA50t0fuUREuW0LGzMJWWgZXQHw5IDgklCdAqzpq6IATbiVS%2BZxOB5eD7u4p0p5QLGQ57BZKJiILm25yYP8WcZU1cDHIcxfpGVQJqcgXhAo%2FGuK8IqcwLZMZIs1GKNUCcvXF2K332onx%2FhLjwHD2Nb9FgKbmQ2FFjCmdfDfoHwFSy96TeeToski2UM0v07Gw6ffgNq8SFN%2BTt%2BIj4CjpFQ4BrQuU%2B4MFwe2Qhk8F9xy%2B976TCcpqjRBjqkATsl6n%2FG8oSNOAyOvetaCrU6p88fnmWNrqRrTvhfpRillKYaiCXe2fEZI3M5PtufXDr58pwl7g896jJVz%2Bi%2FyAw6mfzURZT8aOs1XJBDOnaeKgwGkd8Fr2Lpmv%2B4wyOtqV%2BOAHjdGLl0tgnPOImcc4P5%2B8hmN%2FJDcRWK6cyq3Uvz8oYvO4gVYDsXrmbKQZUGoPcL7wQ79F83u21NWHkYRxGXe2xZ&X-Amz-Signature=3a4be7eca75b203cb4546e4eda6fbf501ff05d0cc29e75da2339d13378c30d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3ND62J%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCzPDKW3%2FaDaNzBeQ%2BA3ndfRft%2FmVnWi7YNm2OL0D%2FhIgIhAN%2FK3W0ValW7hgoKaQ6xZ7JqfTGpgpl6ZMrK6jSLkeBqKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1bNUdUrWRncOFnpMq3AOkhmlRAxep0yqDQhnwtX7L9yvREoGv9ByhsMZcl6eKD7X20VyWNzu7fDmAGTCvcncUClFK2rWCTsfQNtUFQI6k22ScltP0FfZnnytrWJmXna9zqdkyt3KxLUWL38n1GHrbw4RhmLl8%2FgluCYjBL3KEq%2FONb6qKPwhb9lUxUbbTpn3M0SVdR3y7SeaP%2FAZwiPR41vnUQf9AKSb7tL%2F3B4%2BJDLouxS3EO8NzY8yofgVCMbSLzmygC4I%2BN4sRR1Vigbvz1%2Ft5%2FLRTRlQaIKv1XFyeC2sXiiGZMGpd0AJdnU5Cvgf%2BNir7GA4BD2qOgZNeK00RtBmw4pMpfQAWDgrrkQ8I89jnmDqFBowrrMICIFPtYNcwBKzS5SYqbtpnI61jUDryGbjNsI5tAxgA50t0fuUREuW0LGzMJWWgZXQHw5IDgklCdAqzpq6IATbiVS%2BZxOB5eD7u4p0p5QLGQ57BZKJiILm25yYP8WcZU1cDHIcxfpGVQJqcgXhAo%2FGuK8IqcwLZMZIs1GKNUCcvXF2K332onx%2FhLjwHD2Nb9FgKbmQ2FFjCmdfDfoHwFSy96TeeToski2UM0v07Gw6ffgNq8SFN%2BTt%2BIj4CjpFQ4BrQuU%2B4MFwe2Qhk8F9xy%2B976TCcpqjRBjqkATsl6n%2FG8oSNOAyOvetaCrU6p88fnmWNrqRrTvhfpRillKYaiCXe2fEZI3M5PtufXDr58pwl7g896jJVz%2Bi%2FyAw6mfzURZT8aOs1XJBDOnaeKgwGkd8Fr2Lpmv%2B4wyOtqV%2BOAHjdGLl0tgnPOImcc4P5%2B8hmN%2FJDcRWK6cyq3Uvz8oYvO4gVYDsXrmbKQZUGoPcL7wQ79F83u21NWHkYRxGXe2xZ&X-Amz-Signature=f67ae7d1e4ad902fec6296edda158648fe3601d9083429af463969b75a2698b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3ND62J%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCzPDKW3%2FaDaNzBeQ%2BA3ndfRft%2FmVnWi7YNm2OL0D%2FhIgIhAN%2FK3W0ValW7hgoKaQ6xZ7JqfTGpgpl6ZMrK6jSLkeBqKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1bNUdUrWRncOFnpMq3AOkhmlRAxep0yqDQhnwtX7L9yvREoGv9ByhsMZcl6eKD7X20VyWNzu7fDmAGTCvcncUClFK2rWCTsfQNtUFQI6k22ScltP0FfZnnytrWJmXna9zqdkyt3KxLUWL38n1GHrbw4RhmLl8%2FgluCYjBL3KEq%2FONb6qKPwhb9lUxUbbTpn3M0SVdR3y7SeaP%2FAZwiPR41vnUQf9AKSb7tL%2F3B4%2BJDLouxS3EO8NzY8yofgVCMbSLzmygC4I%2BN4sRR1Vigbvz1%2Ft5%2FLRTRlQaIKv1XFyeC2sXiiGZMGpd0AJdnU5Cvgf%2BNir7GA4BD2qOgZNeK00RtBmw4pMpfQAWDgrrkQ8I89jnmDqFBowrrMICIFPtYNcwBKzS5SYqbtpnI61jUDryGbjNsI5tAxgA50t0fuUREuW0LGzMJWWgZXQHw5IDgklCdAqzpq6IATbiVS%2BZxOB5eD7u4p0p5QLGQ57BZKJiILm25yYP8WcZU1cDHIcxfpGVQJqcgXhAo%2FGuK8IqcwLZMZIs1GKNUCcvXF2K332onx%2FhLjwHD2Nb9FgKbmQ2FFjCmdfDfoHwFSy96TeeToski2UM0v07Gw6ffgNq8SFN%2BTt%2BIj4CjpFQ4BrQuU%2B4MFwe2Qhk8F9xy%2B976TCcpqjRBjqkATsl6n%2FG8oSNOAyOvetaCrU6p88fnmWNrqRrTvhfpRillKYaiCXe2fEZI3M5PtufXDr58pwl7g896jJVz%2Bi%2FyAw6mfzURZT8aOs1XJBDOnaeKgwGkd8Fr2Lpmv%2B4wyOtqV%2BOAHjdGLl0tgnPOImcc4P5%2B8hmN%2FJDcRWK6cyq3Uvz8oYvO4gVYDsXrmbKQZUGoPcL7wQ79F83u21NWHkYRxGXe2xZ&X-Amz-Signature=731712966cff510b4d48a3e2527f155745355a9ab7f35796b3c10de751f48873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3ND62J%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCzPDKW3%2FaDaNzBeQ%2BA3ndfRft%2FmVnWi7YNm2OL0D%2FhIgIhAN%2FK3W0ValW7hgoKaQ6xZ7JqfTGpgpl6ZMrK6jSLkeBqKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1bNUdUrWRncOFnpMq3AOkhmlRAxep0yqDQhnwtX7L9yvREoGv9ByhsMZcl6eKD7X20VyWNzu7fDmAGTCvcncUClFK2rWCTsfQNtUFQI6k22ScltP0FfZnnytrWJmXna9zqdkyt3KxLUWL38n1GHrbw4RhmLl8%2FgluCYjBL3KEq%2FONb6qKPwhb9lUxUbbTpn3M0SVdR3y7SeaP%2FAZwiPR41vnUQf9AKSb7tL%2F3B4%2BJDLouxS3EO8NzY8yofgVCMbSLzmygC4I%2BN4sRR1Vigbvz1%2Ft5%2FLRTRlQaIKv1XFyeC2sXiiGZMGpd0AJdnU5Cvgf%2BNir7GA4BD2qOgZNeK00RtBmw4pMpfQAWDgrrkQ8I89jnmDqFBowrrMICIFPtYNcwBKzS5SYqbtpnI61jUDryGbjNsI5tAxgA50t0fuUREuW0LGzMJWWgZXQHw5IDgklCdAqzpq6IATbiVS%2BZxOB5eD7u4p0p5QLGQ57BZKJiILm25yYP8WcZU1cDHIcxfpGVQJqcgXhAo%2FGuK8IqcwLZMZIs1GKNUCcvXF2K332onx%2FhLjwHD2Nb9FgKbmQ2FFjCmdfDfoHwFSy96TeeToski2UM0v07Gw6ffgNq8SFN%2BTt%2BIj4CjpFQ4BrQuU%2B4MFwe2Qhk8F9xy%2B976TCcpqjRBjqkATsl6n%2FG8oSNOAyOvetaCrU6p88fnmWNrqRrTvhfpRillKYaiCXe2fEZI3M5PtufXDr58pwl7g896jJVz%2Bi%2FyAw6mfzURZT8aOs1XJBDOnaeKgwGkd8Fr2Lpmv%2B4wyOtqV%2BOAHjdGLl0tgnPOImcc4P5%2B8hmN%2FJDcRWK6cyq3Uvz8oYvO4gVYDsXrmbKQZUGoPcL7wQ79F83u21NWHkYRxGXe2xZ&X-Amz-Signature=b821918e2336615e8f78eeeea8021591fa95cef4bb9e0cb04fa5c405039641c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3ND62J%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCzPDKW3%2FaDaNzBeQ%2BA3ndfRft%2FmVnWi7YNm2OL0D%2FhIgIhAN%2FK3W0ValW7hgoKaQ6xZ7JqfTGpgpl6ZMrK6jSLkeBqKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1bNUdUrWRncOFnpMq3AOkhmlRAxep0yqDQhnwtX7L9yvREoGv9ByhsMZcl6eKD7X20VyWNzu7fDmAGTCvcncUClFK2rWCTsfQNtUFQI6k22ScltP0FfZnnytrWJmXna9zqdkyt3KxLUWL38n1GHrbw4RhmLl8%2FgluCYjBL3KEq%2FONb6qKPwhb9lUxUbbTpn3M0SVdR3y7SeaP%2FAZwiPR41vnUQf9AKSb7tL%2F3B4%2BJDLouxS3EO8NzY8yofgVCMbSLzmygC4I%2BN4sRR1Vigbvz1%2Ft5%2FLRTRlQaIKv1XFyeC2sXiiGZMGpd0AJdnU5Cvgf%2BNir7GA4BD2qOgZNeK00RtBmw4pMpfQAWDgrrkQ8I89jnmDqFBowrrMICIFPtYNcwBKzS5SYqbtpnI61jUDryGbjNsI5tAxgA50t0fuUREuW0LGzMJWWgZXQHw5IDgklCdAqzpq6IATbiVS%2BZxOB5eD7u4p0p5QLGQ57BZKJiILm25yYP8WcZU1cDHIcxfpGVQJqcgXhAo%2FGuK8IqcwLZMZIs1GKNUCcvXF2K332onx%2FhLjwHD2Nb9FgKbmQ2FFjCmdfDfoHwFSy96TeeToski2UM0v07Gw6ffgNq8SFN%2BTt%2BIj4CjpFQ4BrQuU%2B4MFwe2Qhk8F9xy%2B976TCcpqjRBjqkATsl6n%2FG8oSNOAyOvetaCrU6p88fnmWNrqRrTvhfpRillKYaiCXe2fEZI3M5PtufXDr58pwl7g896jJVz%2Bi%2FyAw6mfzURZT8aOs1XJBDOnaeKgwGkd8Fr2Lpmv%2B4wyOtqV%2BOAHjdGLl0tgnPOImcc4P5%2B8hmN%2FJDcRWK6cyq3Uvz8oYvO4gVYDsXrmbKQZUGoPcL7wQ79F83u21NWHkYRxGXe2xZ&X-Amz-Signature=d03c3f3a25d0b0ab0b3f8ffbad360b643eac4d643c8fefbc677586653febb4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3ND62J%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCzPDKW3%2FaDaNzBeQ%2BA3ndfRft%2FmVnWi7YNm2OL0D%2FhIgIhAN%2FK3W0ValW7hgoKaQ6xZ7JqfTGpgpl6ZMrK6jSLkeBqKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1bNUdUrWRncOFnpMq3AOkhmlRAxep0yqDQhnwtX7L9yvREoGv9ByhsMZcl6eKD7X20VyWNzu7fDmAGTCvcncUClFK2rWCTsfQNtUFQI6k22ScltP0FfZnnytrWJmXna9zqdkyt3KxLUWL38n1GHrbw4RhmLl8%2FgluCYjBL3KEq%2FONb6qKPwhb9lUxUbbTpn3M0SVdR3y7SeaP%2FAZwiPR41vnUQf9AKSb7tL%2F3B4%2BJDLouxS3EO8NzY8yofgVCMbSLzmygC4I%2BN4sRR1Vigbvz1%2Ft5%2FLRTRlQaIKv1XFyeC2sXiiGZMGpd0AJdnU5Cvgf%2BNir7GA4BD2qOgZNeK00RtBmw4pMpfQAWDgrrkQ8I89jnmDqFBowrrMICIFPtYNcwBKzS5SYqbtpnI61jUDryGbjNsI5tAxgA50t0fuUREuW0LGzMJWWgZXQHw5IDgklCdAqzpq6IATbiVS%2BZxOB5eD7u4p0p5QLGQ57BZKJiILm25yYP8WcZU1cDHIcxfpGVQJqcgXhAo%2FGuK8IqcwLZMZIs1GKNUCcvXF2K332onx%2FhLjwHD2Nb9FgKbmQ2FFjCmdfDfoHwFSy96TeeToski2UM0v07Gw6ffgNq8SFN%2BTt%2BIj4CjpFQ4BrQuU%2B4MFwe2Qhk8F9xy%2B976TCcpqjRBjqkATsl6n%2FG8oSNOAyOvetaCrU6p88fnmWNrqRrTvhfpRillKYaiCXe2fEZI3M5PtufXDr58pwl7g896jJVz%2Bi%2FyAw6mfzURZT8aOs1XJBDOnaeKgwGkd8Fr2Lpmv%2B4wyOtqV%2BOAHjdGLl0tgnPOImcc4P5%2B8hmN%2FJDcRWK6cyq3Uvz8oYvO4gVYDsXrmbKQZUGoPcL7wQ79F83u21NWHkYRxGXe2xZ&X-Amz-Signature=8a314ee2558b6edfe32cb5c20b9622e5b4851d1ba1457d50e4c82e588f38c5b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
