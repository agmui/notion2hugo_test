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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WL7RMX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAiD%2BNTsz3iQmUhmvNcl%2FzhH91Szx%2BG5NPR6y447LFWXAiEAloGv7RlfTM1mar3vtNd7506xJg82tMyJVy3LryHNo3YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvRjVF5FLOWXSS25ircA2kHLllTqyXP%2F5yVbhzm0UHTFrr3xa%2B33Az9YoPCIV%2BzJTaSHdNypnNB%2FtXrYFJAkx9quOvJsRkGF3TgrkAQyocOiDBjAHKU8SDhDsjmKsmcjKRcOE7lHwtNZg630UT9f90JXNIp%2FfC1%2F9YWlxI68sRyPK5X06K8CaMI%2B7wXG7lmnXazhuH2XA0OXI6%2B%2FlBBZMuPTlUWQU0DG5S%2FA6W4elKVjumwcJWRVjZuM2BJokVsSM97n%2B6t5kaRUdr5WzUAo%2BsPm%2B%2FiInbHgfRV1IldmVReFdoMgIqaLpiSlpHfAcHH8RCk0ORq0bS3s1yPHt5ZFW5GLr3dB1QOLe4p9QpxdPoBQTfzYl4qcpnfQCNV%2BjoXnOAU4CnBz5QXjewBrymQ1tr8Tom5aMEsT2QEESxYql4RguXcugHAlGRXRtnHnnEUf365TLGqi88gEU3uqd92p2RdGjPnso5tnbkGkqyd7voaVORaFst6zQlABPFfpibQMqf5eSY8K4aZMeIVxk8UR08Oky1nYvjkBB%2BNHkNYhVSUzryh4V%2FUzjZIrFHt7J6Xadc4HyLKEx89%2FPzTFIhlkzIxQIKVwIRpsx6Su9fo3ES2T0nvMYsWw5RwvuxlHajx0XOcMMFcT%2Bgq2kgAMKfk08AGOqUBDa4E7OK8Rfp3tRxsHrCIvrKfr%2BGUQr38utZHxQUfLM9eCf9HK3Nt4wm34LNU9FlToGnDQEwlyXFAIqDqeZlkFCOMiTXUhx0yAWh8HxsN0UGfSPKxCVoYf%2ByU90mtMRcjX97zE3IsX2%2Fyc7yci3E6YORl3ckQTVyPKlAL6Ujm31JVkH%2FIiDUp5jXvBrguNfKmT99%2BFS8UdQfu0Y%2FJd8%2FIFeFS6jef&X-Amz-Signature=d1d4e4ca5a334c368ca2775cf5b40f0bb6f7534aebec1b6e18d25a5842378815&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WL7RMX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAiD%2BNTsz3iQmUhmvNcl%2FzhH91Szx%2BG5NPR6y447LFWXAiEAloGv7RlfTM1mar3vtNd7506xJg82tMyJVy3LryHNo3YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvRjVF5FLOWXSS25ircA2kHLllTqyXP%2F5yVbhzm0UHTFrr3xa%2B33Az9YoPCIV%2BzJTaSHdNypnNB%2FtXrYFJAkx9quOvJsRkGF3TgrkAQyocOiDBjAHKU8SDhDsjmKsmcjKRcOE7lHwtNZg630UT9f90JXNIp%2FfC1%2F9YWlxI68sRyPK5X06K8CaMI%2B7wXG7lmnXazhuH2XA0OXI6%2B%2FlBBZMuPTlUWQU0DG5S%2FA6W4elKVjumwcJWRVjZuM2BJokVsSM97n%2B6t5kaRUdr5WzUAo%2BsPm%2B%2FiInbHgfRV1IldmVReFdoMgIqaLpiSlpHfAcHH8RCk0ORq0bS3s1yPHt5ZFW5GLr3dB1QOLe4p9QpxdPoBQTfzYl4qcpnfQCNV%2BjoXnOAU4CnBz5QXjewBrymQ1tr8Tom5aMEsT2QEESxYql4RguXcugHAlGRXRtnHnnEUf365TLGqi88gEU3uqd92p2RdGjPnso5tnbkGkqyd7voaVORaFst6zQlABPFfpibQMqf5eSY8K4aZMeIVxk8UR08Oky1nYvjkBB%2BNHkNYhVSUzryh4V%2FUzjZIrFHt7J6Xadc4HyLKEx89%2FPzTFIhlkzIxQIKVwIRpsx6Su9fo3ES2T0nvMYsWw5RwvuxlHajx0XOcMMFcT%2Bgq2kgAMKfk08AGOqUBDa4E7OK8Rfp3tRxsHrCIvrKfr%2BGUQr38utZHxQUfLM9eCf9HK3Nt4wm34LNU9FlToGnDQEwlyXFAIqDqeZlkFCOMiTXUhx0yAWh8HxsN0UGfSPKxCVoYf%2ByU90mtMRcjX97zE3IsX2%2Fyc7yci3E6YORl3ckQTVyPKlAL6Ujm31JVkH%2FIiDUp5jXvBrguNfKmT99%2BFS8UdQfu0Y%2FJd8%2FIFeFS6jef&X-Amz-Signature=ca6e1f49974be49801f09889ce3a2ce122712217fb61549695f7f410a86fe2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WL7RMX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAiD%2BNTsz3iQmUhmvNcl%2FzhH91Szx%2BG5NPR6y447LFWXAiEAloGv7RlfTM1mar3vtNd7506xJg82tMyJVy3LryHNo3YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvRjVF5FLOWXSS25ircA2kHLllTqyXP%2F5yVbhzm0UHTFrr3xa%2B33Az9YoPCIV%2BzJTaSHdNypnNB%2FtXrYFJAkx9quOvJsRkGF3TgrkAQyocOiDBjAHKU8SDhDsjmKsmcjKRcOE7lHwtNZg630UT9f90JXNIp%2FfC1%2F9YWlxI68sRyPK5X06K8CaMI%2B7wXG7lmnXazhuH2XA0OXI6%2B%2FlBBZMuPTlUWQU0DG5S%2FA6W4elKVjumwcJWRVjZuM2BJokVsSM97n%2B6t5kaRUdr5WzUAo%2BsPm%2B%2FiInbHgfRV1IldmVReFdoMgIqaLpiSlpHfAcHH8RCk0ORq0bS3s1yPHt5ZFW5GLr3dB1QOLe4p9QpxdPoBQTfzYl4qcpnfQCNV%2BjoXnOAU4CnBz5QXjewBrymQ1tr8Tom5aMEsT2QEESxYql4RguXcugHAlGRXRtnHnnEUf365TLGqi88gEU3uqd92p2RdGjPnso5tnbkGkqyd7voaVORaFst6zQlABPFfpibQMqf5eSY8K4aZMeIVxk8UR08Oky1nYvjkBB%2BNHkNYhVSUzryh4V%2FUzjZIrFHt7J6Xadc4HyLKEx89%2FPzTFIhlkzIxQIKVwIRpsx6Su9fo3ES2T0nvMYsWw5RwvuxlHajx0XOcMMFcT%2Bgq2kgAMKfk08AGOqUBDa4E7OK8Rfp3tRxsHrCIvrKfr%2BGUQr38utZHxQUfLM9eCf9HK3Nt4wm34LNU9FlToGnDQEwlyXFAIqDqeZlkFCOMiTXUhx0yAWh8HxsN0UGfSPKxCVoYf%2ByU90mtMRcjX97zE3IsX2%2Fyc7yci3E6YORl3ckQTVyPKlAL6Ujm31JVkH%2FIiDUp5jXvBrguNfKmT99%2BFS8UdQfu0Y%2FJd8%2FIFeFS6jef&X-Amz-Signature=b46c7fcc7382062d23a6e46ed5ee88bada3eb5d280667965a05bbe1b7eb19459&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WL7RMX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAiD%2BNTsz3iQmUhmvNcl%2FzhH91Szx%2BG5NPR6y447LFWXAiEAloGv7RlfTM1mar3vtNd7506xJg82tMyJVy3LryHNo3YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvRjVF5FLOWXSS25ircA2kHLllTqyXP%2F5yVbhzm0UHTFrr3xa%2B33Az9YoPCIV%2BzJTaSHdNypnNB%2FtXrYFJAkx9quOvJsRkGF3TgrkAQyocOiDBjAHKU8SDhDsjmKsmcjKRcOE7lHwtNZg630UT9f90JXNIp%2FfC1%2F9YWlxI68sRyPK5X06K8CaMI%2B7wXG7lmnXazhuH2XA0OXI6%2B%2FlBBZMuPTlUWQU0DG5S%2FA6W4elKVjumwcJWRVjZuM2BJokVsSM97n%2B6t5kaRUdr5WzUAo%2BsPm%2B%2FiInbHgfRV1IldmVReFdoMgIqaLpiSlpHfAcHH8RCk0ORq0bS3s1yPHt5ZFW5GLr3dB1QOLe4p9QpxdPoBQTfzYl4qcpnfQCNV%2BjoXnOAU4CnBz5QXjewBrymQ1tr8Tom5aMEsT2QEESxYql4RguXcugHAlGRXRtnHnnEUf365TLGqi88gEU3uqd92p2RdGjPnso5tnbkGkqyd7voaVORaFst6zQlABPFfpibQMqf5eSY8K4aZMeIVxk8UR08Oky1nYvjkBB%2BNHkNYhVSUzryh4V%2FUzjZIrFHt7J6Xadc4HyLKEx89%2FPzTFIhlkzIxQIKVwIRpsx6Su9fo3ES2T0nvMYsWw5RwvuxlHajx0XOcMMFcT%2Bgq2kgAMKfk08AGOqUBDa4E7OK8Rfp3tRxsHrCIvrKfr%2BGUQr38utZHxQUfLM9eCf9HK3Nt4wm34LNU9FlToGnDQEwlyXFAIqDqeZlkFCOMiTXUhx0yAWh8HxsN0UGfSPKxCVoYf%2ByU90mtMRcjX97zE3IsX2%2Fyc7yci3E6YORl3ckQTVyPKlAL6Ujm31JVkH%2FIiDUp5jXvBrguNfKmT99%2BFS8UdQfu0Y%2FJd8%2FIFeFS6jef&X-Amz-Signature=3b5a4305e534cc736d70f42557a4003603e4e60c5ba88f994e2679ecb413d964&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WL7RMX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAiD%2BNTsz3iQmUhmvNcl%2FzhH91Szx%2BG5NPR6y447LFWXAiEAloGv7RlfTM1mar3vtNd7506xJg82tMyJVy3LryHNo3YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvRjVF5FLOWXSS25ircA2kHLllTqyXP%2F5yVbhzm0UHTFrr3xa%2B33Az9YoPCIV%2BzJTaSHdNypnNB%2FtXrYFJAkx9quOvJsRkGF3TgrkAQyocOiDBjAHKU8SDhDsjmKsmcjKRcOE7lHwtNZg630UT9f90JXNIp%2FfC1%2F9YWlxI68sRyPK5X06K8CaMI%2B7wXG7lmnXazhuH2XA0OXI6%2B%2FlBBZMuPTlUWQU0DG5S%2FA6W4elKVjumwcJWRVjZuM2BJokVsSM97n%2B6t5kaRUdr5WzUAo%2BsPm%2B%2FiInbHgfRV1IldmVReFdoMgIqaLpiSlpHfAcHH8RCk0ORq0bS3s1yPHt5ZFW5GLr3dB1QOLe4p9QpxdPoBQTfzYl4qcpnfQCNV%2BjoXnOAU4CnBz5QXjewBrymQ1tr8Tom5aMEsT2QEESxYql4RguXcugHAlGRXRtnHnnEUf365TLGqi88gEU3uqd92p2RdGjPnso5tnbkGkqyd7voaVORaFst6zQlABPFfpibQMqf5eSY8K4aZMeIVxk8UR08Oky1nYvjkBB%2BNHkNYhVSUzryh4V%2FUzjZIrFHt7J6Xadc4HyLKEx89%2FPzTFIhlkzIxQIKVwIRpsx6Su9fo3ES2T0nvMYsWw5RwvuxlHajx0XOcMMFcT%2Bgq2kgAMKfk08AGOqUBDa4E7OK8Rfp3tRxsHrCIvrKfr%2BGUQr38utZHxQUfLM9eCf9HK3Nt4wm34LNU9FlToGnDQEwlyXFAIqDqeZlkFCOMiTXUhx0yAWh8HxsN0UGfSPKxCVoYf%2ByU90mtMRcjX97zE3IsX2%2Fyc7yci3E6YORl3ckQTVyPKlAL6Ujm31JVkH%2FIiDUp5jXvBrguNfKmT99%2BFS8UdQfu0Y%2FJd8%2FIFeFS6jef&X-Amz-Signature=27d13f86b4ef5c1deceaa49ad1960a6540ff5aaf240593f909eebc220234f952&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WL7RMX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAiD%2BNTsz3iQmUhmvNcl%2FzhH91Szx%2BG5NPR6y447LFWXAiEAloGv7RlfTM1mar3vtNd7506xJg82tMyJVy3LryHNo3YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvRjVF5FLOWXSS25ircA2kHLllTqyXP%2F5yVbhzm0UHTFrr3xa%2B33Az9YoPCIV%2BzJTaSHdNypnNB%2FtXrYFJAkx9quOvJsRkGF3TgrkAQyocOiDBjAHKU8SDhDsjmKsmcjKRcOE7lHwtNZg630UT9f90JXNIp%2FfC1%2F9YWlxI68sRyPK5X06K8CaMI%2B7wXG7lmnXazhuH2XA0OXI6%2B%2FlBBZMuPTlUWQU0DG5S%2FA6W4elKVjumwcJWRVjZuM2BJokVsSM97n%2B6t5kaRUdr5WzUAo%2BsPm%2B%2FiInbHgfRV1IldmVReFdoMgIqaLpiSlpHfAcHH8RCk0ORq0bS3s1yPHt5ZFW5GLr3dB1QOLe4p9QpxdPoBQTfzYl4qcpnfQCNV%2BjoXnOAU4CnBz5QXjewBrymQ1tr8Tom5aMEsT2QEESxYql4RguXcugHAlGRXRtnHnnEUf365TLGqi88gEU3uqd92p2RdGjPnso5tnbkGkqyd7voaVORaFst6zQlABPFfpibQMqf5eSY8K4aZMeIVxk8UR08Oky1nYvjkBB%2BNHkNYhVSUzryh4V%2FUzjZIrFHt7J6Xadc4HyLKEx89%2FPzTFIhlkzIxQIKVwIRpsx6Su9fo3ES2T0nvMYsWw5RwvuxlHajx0XOcMMFcT%2Bgq2kgAMKfk08AGOqUBDa4E7OK8Rfp3tRxsHrCIvrKfr%2BGUQr38utZHxQUfLM9eCf9HK3Nt4wm34LNU9FlToGnDQEwlyXFAIqDqeZlkFCOMiTXUhx0yAWh8HxsN0UGfSPKxCVoYf%2ByU90mtMRcjX97zE3IsX2%2Fyc7yci3E6YORl3ckQTVyPKlAL6Ujm31JVkH%2FIiDUp5jXvBrguNfKmT99%2BFS8UdQfu0Y%2FJd8%2FIFeFS6jef&X-Amz-Signature=947ab5b0c4480e16280827a36e2fafec0099e77f22ef06c9684040e249445186&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WL7RMX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIAiD%2BNTsz3iQmUhmvNcl%2FzhH91Szx%2BG5NPR6y447LFWXAiEAloGv7RlfTM1mar3vtNd7506xJg82tMyJVy3LryHNo3YqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvRjVF5FLOWXSS25ircA2kHLllTqyXP%2F5yVbhzm0UHTFrr3xa%2B33Az9YoPCIV%2BzJTaSHdNypnNB%2FtXrYFJAkx9quOvJsRkGF3TgrkAQyocOiDBjAHKU8SDhDsjmKsmcjKRcOE7lHwtNZg630UT9f90JXNIp%2FfC1%2F9YWlxI68sRyPK5X06K8CaMI%2B7wXG7lmnXazhuH2XA0OXI6%2B%2FlBBZMuPTlUWQU0DG5S%2FA6W4elKVjumwcJWRVjZuM2BJokVsSM97n%2B6t5kaRUdr5WzUAo%2BsPm%2B%2FiInbHgfRV1IldmVReFdoMgIqaLpiSlpHfAcHH8RCk0ORq0bS3s1yPHt5ZFW5GLr3dB1QOLe4p9QpxdPoBQTfzYl4qcpnfQCNV%2BjoXnOAU4CnBz5QXjewBrymQ1tr8Tom5aMEsT2QEESxYql4RguXcugHAlGRXRtnHnnEUf365TLGqi88gEU3uqd92p2RdGjPnso5tnbkGkqyd7voaVORaFst6zQlABPFfpibQMqf5eSY8K4aZMeIVxk8UR08Oky1nYvjkBB%2BNHkNYhVSUzryh4V%2FUzjZIrFHt7J6Xadc4HyLKEx89%2FPzTFIhlkzIxQIKVwIRpsx6Su9fo3ES2T0nvMYsWw5RwvuxlHajx0XOcMMFcT%2Bgq2kgAMKfk08AGOqUBDa4E7OK8Rfp3tRxsHrCIvrKfr%2BGUQr38utZHxQUfLM9eCf9HK3Nt4wm34LNU9FlToGnDQEwlyXFAIqDqeZlkFCOMiTXUhx0yAWh8HxsN0UGfSPKxCVoYf%2ByU90mtMRcjX97zE3IsX2%2Fyc7yci3E6YORl3ckQTVyPKlAL6Ujm31JVkH%2FIiDUp5jXvBrguNfKmT99%2BFS8UdQfu0Y%2FJd8%2FIFeFS6jef&X-Amz-Signature=927f425bf68d08d4456d72096756e1a567df265b339c61d051a6df2d977b5549&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
