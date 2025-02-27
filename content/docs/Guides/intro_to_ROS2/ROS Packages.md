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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677FSP3DR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDn2hVSw%2FBOv2m6r1iQ%2FZbIx6a06T0M9UpPIYi%2FbaCmuAiEAya%2B2UbwuPxMwtbdT7oh33VkLCLICO7TGlCjsKWKCcTsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIbdXZW6BPLPkirB5CrcA9w%2FhwOWoQJY0PLxLZXZ2K18LezLWJjyViKlUJeAytyqRKJB33eBijFmOrou%2FgDtv07wI8YUZTO41g9eyGScAqRtdZuwphIdpGmHDmd5rzSx34DDV2m63ceT13Rlcbs88Hxb%2BTCaN5qs%2B8qjft%2BjYX7waY%2B9MWOCza0odxQmFM6fHDNZvPr1DCwwcjRo%2F4L8CVvJj2TIKKwj47Z4%2FJCed%2BcNom%2BRNYkZbI27Kl0qbVEteZ5PgUSkF%2BpvFooPC%2FISjAw8eDQc3d32K2THe8DlEnda2OY6%2FKOgg8TLd0XWKuj9y02XxwT%2FcSAyqk%2Fvyo%2BhaS%2Bg%2FE7%2F9mZrLU24Bj47e86m0NQMIdPyaFCGwOpS%2B8KfeIWdy%2BAjow3DK%2FCxpeeO%2BvAz2aVlnvqscQJ1WtG%2FUTCmxjyV2jhAvL0STUMU68uCtwfF2sJBsv8X%2FW9Apo5MisCddbOHVgvvzgHWCZSCsXYHsSWrVwO1VWkVQDWut20Co1IZ6VNeyrDeze6iN1WBGZ8Bx9idXvqyBrRjWZY5k8hQt%2BZuHnhns0SRqZZlB4KVHD08a20FuPlqyLV67zubw3%2FEktDyvvCBtSpH0fH7dDbbPdi92Iqv6wlw0KmYkrJNthXx1FMPxICkFcnIMM%2FSgr4GOqUBLUpJ8Q%2BZoI5R1CzGwcECl7TzWtMz6uiw4mq11in3Cp2%2BOuADf0X5NS3P%2FL8tNAOetfiZzciq%2FcdgzKpy%2FHOK3stAPYh%2BWCzAhMYIbSZcw0xNPi89wQOnAmBi2cS4ICLSCEvaD0%2F3BZW32fpL3W0ZgUcAfYN1RZ4T9QPGd1shnQpnpoJNn9FgXSRcPg6GxXiAAXjNfYF1D2p4bq5Q%2F7S1D4m5MPOx&X-Amz-Signature=ed7d193af07bbd279d471eb4cbdad8c3d586b36ee5e171ce0e148c7d044c54bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677FSP3DR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDn2hVSw%2FBOv2m6r1iQ%2FZbIx6a06T0M9UpPIYi%2FbaCmuAiEAya%2B2UbwuPxMwtbdT7oh33VkLCLICO7TGlCjsKWKCcTsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIbdXZW6BPLPkirB5CrcA9w%2FhwOWoQJY0PLxLZXZ2K18LezLWJjyViKlUJeAytyqRKJB33eBijFmOrou%2FgDtv07wI8YUZTO41g9eyGScAqRtdZuwphIdpGmHDmd5rzSx34DDV2m63ceT13Rlcbs88Hxb%2BTCaN5qs%2B8qjft%2BjYX7waY%2B9MWOCza0odxQmFM6fHDNZvPr1DCwwcjRo%2F4L8CVvJj2TIKKwj47Z4%2FJCed%2BcNom%2BRNYkZbI27Kl0qbVEteZ5PgUSkF%2BpvFooPC%2FISjAw8eDQc3d32K2THe8DlEnda2OY6%2FKOgg8TLd0XWKuj9y02XxwT%2FcSAyqk%2Fvyo%2BhaS%2Bg%2FE7%2F9mZrLU24Bj47e86m0NQMIdPyaFCGwOpS%2B8KfeIWdy%2BAjow3DK%2FCxpeeO%2BvAz2aVlnvqscQJ1WtG%2FUTCmxjyV2jhAvL0STUMU68uCtwfF2sJBsv8X%2FW9Apo5MisCddbOHVgvvzgHWCZSCsXYHsSWrVwO1VWkVQDWut20Co1IZ6VNeyrDeze6iN1WBGZ8Bx9idXvqyBrRjWZY5k8hQt%2BZuHnhns0SRqZZlB4KVHD08a20FuPlqyLV67zubw3%2FEktDyvvCBtSpH0fH7dDbbPdi92Iqv6wlw0KmYkrJNthXx1FMPxICkFcnIMM%2FSgr4GOqUBLUpJ8Q%2BZoI5R1CzGwcECl7TzWtMz6uiw4mq11in3Cp2%2BOuADf0X5NS3P%2FL8tNAOetfiZzciq%2FcdgzKpy%2FHOK3stAPYh%2BWCzAhMYIbSZcw0xNPi89wQOnAmBi2cS4ICLSCEvaD0%2F3BZW32fpL3W0ZgUcAfYN1RZ4T9QPGd1shnQpnpoJNn9FgXSRcPg6GxXiAAXjNfYF1D2p4bq5Q%2F7S1D4m5MPOx&X-Amz-Signature=c85a25631f7473a5e8becf39e15b25b4ccd1e0cdc7cedb06f6180fe322ada650&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677FSP3DR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDn2hVSw%2FBOv2m6r1iQ%2FZbIx6a06T0M9UpPIYi%2FbaCmuAiEAya%2B2UbwuPxMwtbdT7oh33VkLCLICO7TGlCjsKWKCcTsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIbdXZW6BPLPkirB5CrcA9w%2FhwOWoQJY0PLxLZXZ2K18LezLWJjyViKlUJeAytyqRKJB33eBijFmOrou%2FgDtv07wI8YUZTO41g9eyGScAqRtdZuwphIdpGmHDmd5rzSx34DDV2m63ceT13Rlcbs88Hxb%2BTCaN5qs%2B8qjft%2BjYX7waY%2B9MWOCza0odxQmFM6fHDNZvPr1DCwwcjRo%2F4L8CVvJj2TIKKwj47Z4%2FJCed%2BcNom%2BRNYkZbI27Kl0qbVEteZ5PgUSkF%2BpvFooPC%2FISjAw8eDQc3d32K2THe8DlEnda2OY6%2FKOgg8TLd0XWKuj9y02XxwT%2FcSAyqk%2Fvyo%2BhaS%2Bg%2FE7%2F9mZrLU24Bj47e86m0NQMIdPyaFCGwOpS%2B8KfeIWdy%2BAjow3DK%2FCxpeeO%2BvAz2aVlnvqscQJ1WtG%2FUTCmxjyV2jhAvL0STUMU68uCtwfF2sJBsv8X%2FW9Apo5MisCddbOHVgvvzgHWCZSCsXYHsSWrVwO1VWkVQDWut20Co1IZ6VNeyrDeze6iN1WBGZ8Bx9idXvqyBrRjWZY5k8hQt%2BZuHnhns0SRqZZlB4KVHD08a20FuPlqyLV67zubw3%2FEktDyvvCBtSpH0fH7dDbbPdi92Iqv6wlw0KmYkrJNthXx1FMPxICkFcnIMM%2FSgr4GOqUBLUpJ8Q%2BZoI5R1CzGwcECl7TzWtMz6uiw4mq11in3Cp2%2BOuADf0X5NS3P%2FL8tNAOetfiZzciq%2FcdgzKpy%2FHOK3stAPYh%2BWCzAhMYIbSZcw0xNPi89wQOnAmBi2cS4ICLSCEvaD0%2F3BZW32fpL3W0ZgUcAfYN1RZ4T9QPGd1shnQpnpoJNn9FgXSRcPg6GxXiAAXjNfYF1D2p4bq5Q%2F7S1D4m5MPOx&X-Amz-Signature=39755296876cdbf1f95664f14af43b18f53030c109e4b2bc7d17abbd0534657a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677FSP3DR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDn2hVSw%2FBOv2m6r1iQ%2FZbIx6a06T0M9UpPIYi%2FbaCmuAiEAya%2B2UbwuPxMwtbdT7oh33VkLCLICO7TGlCjsKWKCcTsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIbdXZW6BPLPkirB5CrcA9w%2FhwOWoQJY0PLxLZXZ2K18LezLWJjyViKlUJeAytyqRKJB33eBijFmOrou%2FgDtv07wI8YUZTO41g9eyGScAqRtdZuwphIdpGmHDmd5rzSx34DDV2m63ceT13Rlcbs88Hxb%2BTCaN5qs%2B8qjft%2BjYX7waY%2B9MWOCza0odxQmFM6fHDNZvPr1DCwwcjRo%2F4L8CVvJj2TIKKwj47Z4%2FJCed%2BcNom%2BRNYkZbI27Kl0qbVEteZ5PgUSkF%2BpvFooPC%2FISjAw8eDQc3d32K2THe8DlEnda2OY6%2FKOgg8TLd0XWKuj9y02XxwT%2FcSAyqk%2Fvyo%2BhaS%2Bg%2FE7%2F9mZrLU24Bj47e86m0NQMIdPyaFCGwOpS%2B8KfeIWdy%2BAjow3DK%2FCxpeeO%2BvAz2aVlnvqscQJ1WtG%2FUTCmxjyV2jhAvL0STUMU68uCtwfF2sJBsv8X%2FW9Apo5MisCddbOHVgvvzgHWCZSCsXYHsSWrVwO1VWkVQDWut20Co1IZ6VNeyrDeze6iN1WBGZ8Bx9idXvqyBrRjWZY5k8hQt%2BZuHnhns0SRqZZlB4KVHD08a20FuPlqyLV67zubw3%2FEktDyvvCBtSpH0fH7dDbbPdi92Iqv6wlw0KmYkrJNthXx1FMPxICkFcnIMM%2FSgr4GOqUBLUpJ8Q%2BZoI5R1CzGwcECl7TzWtMz6uiw4mq11in3Cp2%2BOuADf0X5NS3P%2FL8tNAOetfiZzciq%2FcdgzKpy%2FHOK3stAPYh%2BWCzAhMYIbSZcw0xNPi89wQOnAmBi2cS4ICLSCEvaD0%2F3BZW32fpL3W0ZgUcAfYN1RZ4T9QPGd1shnQpnpoJNn9FgXSRcPg6GxXiAAXjNfYF1D2p4bq5Q%2F7S1D4m5MPOx&X-Amz-Signature=7bb968529ca96573f9f47ba8d75dbf532f31ed31f6505ed32e3ac196f5fd38cf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677FSP3DR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDn2hVSw%2FBOv2m6r1iQ%2FZbIx6a06T0M9UpPIYi%2FbaCmuAiEAya%2B2UbwuPxMwtbdT7oh33VkLCLICO7TGlCjsKWKCcTsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIbdXZW6BPLPkirB5CrcA9w%2FhwOWoQJY0PLxLZXZ2K18LezLWJjyViKlUJeAytyqRKJB33eBijFmOrou%2FgDtv07wI8YUZTO41g9eyGScAqRtdZuwphIdpGmHDmd5rzSx34DDV2m63ceT13Rlcbs88Hxb%2BTCaN5qs%2B8qjft%2BjYX7waY%2B9MWOCza0odxQmFM6fHDNZvPr1DCwwcjRo%2F4L8CVvJj2TIKKwj47Z4%2FJCed%2BcNom%2BRNYkZbI27Kl0qbVEteZ5PgUSkF%2BpvFooPC%2FISjAw8eDQc3d32K2THe8DlEnda2OY6%2FKOgg8TLd0XWKuj9y02XxwT%2FcSAyqk%2Fvyo%2BhaS%2Bg%2FE7%2F9mZrLU24Bj47e86m0NQMIdPyaFCGwOpS%2B8KfeIWdy%2BAjow3DK%2FCxpeeO%2BvAz2aVlnvqscQJ1WtG%2FUTCmxjyV2jhAvL0STUMU68uCtwfF2sJBsv8X%2FW9Apo5MisCddbOHVgvvzgHWCZSCsXYHsSWrVwO1VWkVQDWut20Co1IZ6VNeyrDeze6iN1WBGZ8Bx9idXvqyBrRjWZY5k8hQt%2BZuHnhns0SRqZZlB4KVHD08a20FuPlqyLV67zubw3%2FEktDyvvCBtSpH0fH7dDbbPdi92Iqv6wlw0KmYkrJNthXx1FMPxICkFcnIMM%2FSgr4GOqUBLUpJ8Q%2BZoI5R1CzGwcECl7TzWtMz6uiw4mq11in3Cp2%2BOuADf0X5NS3P%2FL8tNAOetfiZzciq%2FcdgzKpy%2FHOK3stAPYh%2BWCzAhMYIbSZcw0xNPi89wQOnAmBi2cS4ICLSCEvaD0%2F3BZW32fpL3W0ZgUcAfYN1RZ4T9QPGd1shnQpnpoJNn9FgXSRcPg6GxXiAAXjNfYF1D2p4bq5Q%2F7S1D4m5MPOx&X-Amz-Signature=f52fae029673a39192c809756fb4fdb82a9bcc0a554817e3f18c7c462730136c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677FSP3DR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDn2hVSw%2FBOv2m6r1iQ%2FZbIx6a06T0M9UpPIYi%2FbaCmuAiEAya%2B2UbwuPxMwtbdT7oh33VkLCLICO7TGlCjsKWKCcTsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIbdXZW6BPLPkirB5CrcA9w%2FhwOWoQJY0PLxLZXZ2K18LezLWJjyViKlUJeAytyqRKJB33eBijFmOrou%2FgDtv07wI8YUZTO41g9eyGScAqRtdZuwphIdpGmHDmd5rzSx34DDV2m63ceT13Rlcbs88Hxb%2BTCaN5qs%2B8qjft%2BjYX7waY%2B9MWOCza0odxQmFM6fHDNZvPr1DCwwcjRo%2F4L8CVvJj2TIKKwj47Z4%2FJCed%2BcNom%2BRNYkZbI27Kl0qbVEteZ5PgUSkF%2BpvFooPC%2FISjAw8eDQc3d32K2THe8DlEnda2OY6%2FKOgg8TLd0XWKuj9y02XxwT%2FcSAyqk%2Fvyo%2BhaS%2Bg%2FE7%2F9mZrLU24Bj47e86m0NQMIdPyaFCGwOpS%2B8KfeIWdy%2BAjow3DK%2FCxpeeO%2BvAz2aVlnvqscQJ1WtG%2FUTCmxjyV2jhAvL0STUMU68uCtwfF2sJBsv8X%2FW9Apo5MisCddbOHVgvvzgHWCZSCsXYHsSWrVwO1VWkVQDWut20Co1IZ6VNeyrDeze6iN1WBGZ8Bx9idXvqyBrRjWZY5k8hQt%2BZuHnhns0SRqZZlB4KVHD08a20FuPlqyLV67zubw3%2FEktDyvvCBtSpH0fH7dDbbPdi92Iqv6wlw0KmYkrJNthXx1FMPxICkFcnIMM%2FSgr4GOqUBLUpJ8Q%2BZoI5R1CzGwcECl7TzWtMz6uiw4mq11in3Cp2%2BOuADf0X5NS3P%2FL8tNAOetfiZzciq%2FcdgzKpy%2FHOK3stAPYh%2BWCzAhMYIbSZcw0xNPi89wQOnAmBi2cS4ICLSCEvaD0%2F3BZW32fpL3W0ZgUcAfYN1RZ4T9QPGd1shnQpnpoJNn9FgXSRcPg6GxXiAAXjNfYF1D2p4bq5Q%2F7S1D4m5MPOx&X-Amz-Signature=355504b2091acfed2a35d1779722d634216ca8db5301c1e560572f32cd597a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677FSP3DR%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIDn2hVSw%2FBOv2m6r1iQ%2FZbIx6a06T0M9UpPIYi%2FbaCmuAiEAya%2B2UbwuPxMwtbdT7oh33VkLCLICO7TGlCjsKWKCcTsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIbdXZW6BPLPkirB5CrcA9w%2FhwOWoQJY0PLxLZXZ2K18LezLWJjyViKlUJeAytyqRKJB33eBijFmOrou%2FgDtv07wI8YUZTO41g9eyGScAqRtdZuwphIdpGmHDmd5rzSx34DDV2m63ceT13Rlcbs88Hxb%2BTCaN5qs%2B8qjft%2BjYX7waY%2B9MWOCza0odxQmFM6fHDNZvPr1DCwwcjRo%2F4L8CVvJj2TIKKwj47Z4%2FJCed%2BcNom%2BRNYkZbI27Kl0qbVEteZ5PgUSkF%2BpvFooPC%2FISjAw8eDQc3d32K2THe8DlEnda2OY6%2FKOgg8TLd0XWKuj9y02XxwT%2FcSAyqk%2Fvyo%2BhaS%2Bg%2FE7%2F9mZrLU24Bj47e86m0NQMIdPyaFCGwOpS%2B8KfeIWdy%2BAjow3DK%2FCxpeeO%2BvAz2aVlnvqscQJ1WtG%2FUTCmxjyV2jhAvL0STUMU68uCtwfF2sJBsv8X%2FW9Apo5MisCddbOHVgvvzgHWCZSCsXYHsSWrVwO1VWkVQDWut20Co1IZ6VNeyrDeze6iN1WBGZ8Bx9idXvqyBrRjWZY5k8hQt%2BZuHnhns0SRqZZlB4KVHD08a20FuPlqyLV67zubw3%2FEktDyvvCBtSpH0fH7dDbbPdi92Iqv6wlw0KmYkrJNthXx1FMPxICkFcnIMM%2FSgr4GOqUBLUpJ8Q%2BZoI5R1CzGwcECl7TzWtMz6uiw4mq11in3Cp2%2BOuADf0X5NS3P%2FL8tNAOetfiZzciq%2FcdgzKpy%2FHOK3stAPYh%2BWCzAhMYIbSZcw0xNPi89wQOnAmBi2cS4ICLSCEvaD0%2F3BZW32fpL3W0ZgUcAfYN1RZ4T9QPGd1shnQpnpoJNn9FgXSRcPg6GxXiAAXjNfYF1D2p4bq5Q%2F7S1D4m5MPOx&X-Amz-Signature=19b1f3e68e00ccf26a7886ec858c70f77260eb6e3861537b58807d45a0e6ea42&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
