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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAA66M4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCxEtjZqaNNin8EdW1%2Bgz%2FWthQM4C2s6jaAdczz2wlwDAIgIGbLpX%2FPLkHtYNEwicbK97dJda58kiciFePcMHJcCEsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkpyshUX11h5d%2FFbCrcA%2BvdSRYZqtsekB5n5lWA7x2ZMe5Flk%2FtvJ9Tg5IpIoImtr%2BaJlRlkMc52gZqeb0FxLxvfw9rC7O57MpETZFck%2Bh2jwA77RU%2BgKdjiR%2FrwI5jkL0YluW%2BWDLvo%2F4Oy2Fj0nSiI9CLaTbPh9gMEvybig6Db0DgC45bM8tDcLKuu2XZuaDvJ4r9QUh3afNMcv0xxFFufUeMjkEVw%2BKtPPlS6dDh%2B6MnqrAgCD5KbtXsYcmWhSguYntBYqWuKEDMHgwaD0RdX%2BcFNk3EbfmBdy3aL2mbmlCWWRPwmurbKw8%2Fr5f7skyjV%2FZ4wpJ%2FmDehyXfoL0CeAbBNlJOthdwGDQK%2BuFCXZT5LJw6%2BOskZAb8XqT6kQl5Ntj6bZ34Rsid7I6qpsze0ctm5Gj41MOrOAZRZWcWnhw79T1Nnr9vHd%2Bw3nMRUtZAGr3e087x%2FnSV1NnZbyIEZrm%2FyJDW1wUJd9m1ejy8QMtOley8K3q0R0DIdvAsh8YDJi9gWo3IzeHciVlsQULGmgR15xavXV4JJxQDaQV5YefXtTj7T4177xHMIuE8mO18fRZvNm5cko9wRFn09uRJYRntsdurtZccFZrJm6jTHa%2FFJ%2F0MqZXPFD43ftdc58wPkZ9GVOpIfrPHPMIKgj8AGOqUBHVdH%2BFEAPKds2%2B9tt5fpvRsg0JWKjxV76WLbv4u1q5PXcbPCxNq0FRK6bUdGeZTX8E3OTE3yA7IKBowJUTIlNPxNUK4oc0nsNDDRTQTG8U7MRg2UmmJBF4kRSNvdFTn8sb2EE5YIW%2FWVO2DtfyfQZACdeZFZCOQXWKWIW3UfcNpfWz6ejRyzY01xcpzJjXr7zZ5Mx1D2%2B9sLqoMasK4q%2BuLfMIv6&X-Amz-Signature=fcbbdcf7b25579cce6c607b0742268a76f92c285c817acbc818f621d7319a5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAA66M4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCxEtjZqaNNin8EdW1%2Bgz%2FWthQM4C2s6jaAdczz2wlwDAIgIGbLpX%2FPLkHtYNEwicbK97dJda58kiciFePcMHJcCEsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkpyshUX11h5d%2FFbCrcA%2BvdSRYZqtsekB5n5lWA7x2ZMe5Flk%2FtvJ9Tg5IpIoImtr%2BaJlRlkMc52gZqeb0FxLxvfw9rC7O57MpETZFck%2Bh2jwA77RU%2BgKdjiR%2FrwI5jkL0YluW%2BWDLvo%2F4Oy2Fj0nSiI9CLaTbPh9gMEvybig6Db0DgC45bM8tDcLKuu2XZuaDvJ4r9QUh3afNMcv0xxFFufUeMjkEVw%2BKtPPlS6dDh%2B6MnqrAgCD5KbtXsYcmWhSguYntBYqWuKEDMHgwaD0RdX%2BcFNk3EbfmBdy3aL2mbmlCWWRPwmurbKw8%2Fr5f7skyjV%2FZ4wpJ%2FmDehyXfoL0CeAbBNlJOthdwGDQK%2BuFCXZT5LJw6%2BOskZAb8XqT6kQl5Ntj6bZ34Rsid7I6qpsze0ctm5Gj41MOrOAZRZWcWnhw79T1Nnr9vHd%2Bw3nMRUtZAGr3e087x%2FnSV1NnZbyIEZrm%2FyJDW1wUJd9m1ejy8QMtOley8K3q0R0DIdvAsh8YDJi9gWo3IzeHciVlsQULGmgR15xavXV4JJxQDaQV5YefXtTj7T4177xHMIuE8mO18fRZvNm5cko9wRFn09uRJYRntsdurtZccFZrJm6jTHa%2FFJ%2F0MqZXPFD43ftdc58wPkZ9GVOpIfrPHPMIKgj8AGOqUBHVdH%2BFEAPKds2%2B9tt5fpvRsg0JWKjxV76WLbv4u1q5PXcbPCxNq0FRK6bUdGeZTX8E3OTE3yA7IKBowJUTIlNPxNUK4oc0nsNDDRTQTG8U7MRg2UmmJBF4kRSNvdFTn8sb2EE5YIW%2FWVO2DtfyfQZACdeZFZCOQXWKWIW3UfcNpfWz6ejRyzY01xcpzJjXr7zZ5Mx1D2%2B9sLqoMasK4q%2BuLfMIv6&X-Amz-Signature=78ffd16ea7d5698769af17e257a02a71a0d1e92e2bc8b66edd0f02058b913b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAA66M4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCxEtjZqaNNin8EdW1%2Bgz%2FWthQM4C2s6jaAdczz2wlwDAIgIGbLpX%2FPLkHtYNEwicbK97dJda58kiciFePcMHJcCEsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkpyshUX11h5d%2FFbCrcA%2BvdSRYZqtsekB5n5lWA7x2ZMe5Flk%2FtvJ9Tg5IpIoImtr%2BaJlRlkMc52gZqeb0FxLxvfw9rC7O57MpETZFck%2Bh2jwA77RU%2BgKdjiR%2FrwI5jkL0YluW%2BWDLvo%2F4Oy2Fj0nSiI9CLaTbPh9gMEvybig6Db0DgC45bM8tDcLKuu2XZuaDvJ4r9QUh3afNMcv0xxFFufUeMjkEVw%2BKtPPlS6dDh%2B6MnqrAgCD5KbtXsYcmWhSguYntBYqWuKEDMHgwaD0RdX%2BcFNk3EbfmBdy3aL2mbmlCWWRPwmurbKw8%2Fr5f7skyjV%2FZ4wpJ%2FmDehyXfoL0CeAbBNlJOthdwGDQK%2BuFCXZT5LJw6%2BOskZAb8XqT6kQl5Ntj6bZ34Rsid7I6qpsze0ctm5Gj41MOrOAZRZWcWnhw79T1Nnr9vHd%2Bw3nMRUtZAGr3e087x%2FnSV1NnZbyIEZrm%2FyJDW1wUJd9m1ejy8QMtOley8K3q0R0DIdvAsh8YDJi9gWo3IzeHciVlsQULGmgR15xavXV4JJxQDaQV5YefXtTj7T4177xHMIuE8mO18fRZvNm5cko9wRFn09uRJYRntsdurtZccFZrJm6jTHa%2FFJ%2F0MqZXPFD43ftdc58wPkZ9GVOpIfrPHPMIKgj8AGOqUBHVdH%2BFEAPKds2%2B9tt5fpvRsg0JWKjxV76WLbv4u1q5PXcbPCxNq0FRK6bUdGeZTX8E3OTE3yA7IKBowJUTIlNPxNUK4oc0nsNDDRTQTG8U7MRg2UmmJBF4kRSNvdFTn8sb2EE5YIW%2FWVO2DtfyfQZACdeZFZCOQXWKWIW3UfcNpfWz6ejRyzY01xcpzJjXr7zZ5Mx1D2%2B9sLqoMasK4q%2BuLfMIv6&X-Amz-Signature=c400fbbcc91515910510cf98e42e10c5546034a2f4cbcfd17290bc59989f7763&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAA66M4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCxEtjZqaNNin8EdW1%2Bgz%2FWthQM4C2s6jaAdczz2wlwDAIgIGbLpX%2FPLkHtYNEwicbK97dJda58kiciFePcMHJcCEsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkpyshUX11h5d%2FFbCrcA%2BvdSRYZqtsekB5n5lWA7x2ZMe5Flk%2FtvJ9Tg5IpIoImtr%2BaJlRlkMc52gZqeb0FxLxvfw9rC7O57MpETZFck%2Bh2jwA77RU%2BgKdjiR%2FrwI5jkL0YluW%2BWDLvo%2F4Oy2Fj0nSiI9CLaTbPh9gMEvybig6Db0DgC45bM8tDcLKuu2XZuaDvJ4r9QUh3afNMcv0xxFFufUeMjkEVw%2BKtPPlS6dDh%2B6MnqrAgCD5KbtXsYcmWhSguYntBYqWuKEDMHgwaD0RdX%2BcFNk3EbfmBdy3aL2mbmlCWWRPwmurbKw8%2Fr5f7skyjV%2FZ4wpJ%2FmDehyXfoL0CeAbBNlJOthdwGDQK%2BuFCXZT5LJw6%2BOskZAb8XqT6kQl5Ntj6bZ34Rsid7I6qpsze0ctm5Gj41MOrOAZRZWcWnhw79T1Nnr9vHd%2Bw3nMRUtZAGr3e087x%2FnSV1NnZbyIEZrm%2FyJDW1wUJd9m1ejy8QMtOley8K3q0R0DIdvAsh8YDJi9gWo3IzeHciVlsQULGmgR15xavXV4JJxQDaQV5YefXtTj7T4177xHMIuE8mO18fRZvNm5cko9wRFn09uRJYRntsdurtZccFZrJm6jTHa%2FFJ%2F0MqZXPFD43ftdc58wPkZ9GVOpIfrPHPMIKgj8AGOqUBHVdH%2BFEAPKds2%2B9tt5fpvRsg0JWKjxV76WLbv4u1q5PXcbPCxNq0FRK6bUdGeZTX8E3OTE3yA7IKBowJUTIlNPxNUK4oc0nsNDDRTQTG8U7MRg2UmmJBF4kRSNvdFTn8sb2EE5YIW%2FWVO2DtfyfQZACdeZFZCOQXWKWIW3UfcNpfWz6ejRyzY01xcpzJjXr7zZ5Mx1D2%2B9sLqoMasK4q%2BuLfMIv6&X-Amz-Signature=4923a895c108d09524fed678f9a827a9c83fe4b839dfcbe9655db2c304904592&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAA66M4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCxEtjZqaNNin8EdW1%2Bgz%2FWthQM4C2s6jaAdczz2wlwDAIgIGbLpX%2FPLkHtYNEwicbK97dJda58kiciFePcMHJcCEsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkpyshUX11h5d%2FFbCrcA%2BvdSRYZqtsekB5n5lWA7x2ZMe5Flk%2FtvJ9Tg5IpIoImtr%2BaJlRlkMc52gZqeb0FxLxvfw9rC7O57MpETZFck%2Bh2jwA77RU%2BgKdjiR%2FrwI5jkL0YluW%2BWDLvo%2F4Oy2Fj0nSiI9CLaTbPh9gMEvybig6Db0DgC45bM8tDcLKuu2XZuaDvJ4r9QUh3afNMcv0xxFFufUeMjkEVw%2BKtPPlS6dDh%2B6MnqrAgCD5KbtXsYcmWhSguYntBYqWuKEDMHgwaD0RdX%2BcFNk3EbfmBdy3aL2mbmlCWWRPwmurbKw8%2Fr5f7skyjV%2FZ4wpJ%2FmDehyXfoL0CeAbBNlJOthdwGDQK%2BuFCXZT5LJw6%2BOskZAb8XqT6kQl5Ntj6bZ34Rsid7I6qpsze0ctm5Gj41MOrOAZRZWcWnhw79T1Nnr9vHd%2Bw3nMRUtZAGr3e087x%2FnSV1NnZbyIEZrm%2FyJDW1wUJd9m1ejy8QMtOley8K3q0R0DIdvAsh8YDJi9gWo3IzeHciVlsQULGmgR15xavXV4JJxQDaQV5YefXtTj7T4177xHMIuE8mO18fRZvNm5cko9wRFn09uRJYRntsdurtZccFZrJm6jTHa%2FFJ%2F0MqZXPFD43ftdc58wPkZ9GVOpIfrPHPMIKgj8AGOqUBHVdH%2BFEAPKds2%2B9tt5fpvRsg0JWKjxV76WLbv4u1q5PXcbPCxNq0FRK6bUdGeZTX8E3OTE3yA7IKBowJUTIlNPxNUK4oc0nsNDDRTQTG8U7MRg2UmmJBF4kRSNvdFTn8sb2EE5YIW%2FWVO2DtfyfQZACdeZFZCOQXWKWIW3UfcNpfWz6ejRyzY01xcpzJjXr7zZ5Mx1D2%2B9sLqoMasK4q%2BuLfMIv6&X-Amz-Signature=780cb64373af8f77ab59e01777146368a4efab2c2b213add8fa7dc30f7ff5b11&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAA66M4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCxEtjZqaNNin8EdW1%2Bgz%2FWthQM4C2s6jaAdczz2wlwDAIgIGbLpX%2FPLkHtYNEwicbK97dJda58kiciFePcMHJcCEsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkpyshUX11h5d%2FFbCrcA%2BvdSRYZqtsekB5n5lWA7x2ZMe5Flk%2FtvJ9Tg5IpIoImtr%2BaJlRlkMc52gZqeb0FxLxvfw9rC7O57MpETZFck%2Bh2jwA77RU%2BgKdjiR%2FrwI5jkL0YluW%2BWDLvo%2F4Oy2Fj0nSiI9CLaTbPh9gMEvybig6Db0DgC45bM8tDcLKuu2XZuaDvJ4r9QUh3afNMcv0xxFFufUeMjkEVw%2BKtPPlS6dDh%2B6MnqrAgCD5KbtXsYcmWhSguYntBYqWuKEDMHgwaD0RdX%2BcFNk3EbfmBdy3aL2mbmlCWWRPwmurbKw8%2Fr5f7skyjV%2FZ4wpJ%2FmDehyXfoL0CeAbBNlJOthdwGDQK%2BuFCXZT5LJw6%2BOskZAb8XqT6kQl5Ntj6bZ34Rsid7I6qpsze0ctm5Gj41MOrOAZRZWcWnhw79T1Nnr9vHd%2Bw3nMRUtZAGr3e087x%2FnSV1NnZbyIEZrm%2FyJDW1wUJd9m1ejy8QMtOley8K3q0R0DIdvAsh8YDJi9gWo3IzeHciVlsQULGmgR15xavXV4JJxQDaQV5YefXtTj7T4177xHMIuE8mO18fRZvNm5cko9wRFn09uRJYRntsdurtZccFZrJm6jTHa%2FFJ%2F0MqZXPFD43ftdc58wPkZ9GVOpIfrPHPMIKgj8AGOqUBHVdH%2BFEAPKds2%2B9tt5fpvRsg0JWKjxV76WLbv4u1q5PXcbPCxNq0FRK6bUdGeZTX8E3OTE3yA7IKBowJUTIlNPxNUK4oc0nsNDDRTQTG8U7MRg2UmmJBF4kRSNvdFTn8sb2EE5YIW%2FWVO2DtfyfQZACdeZFZCOQXWKWIW3UfcNpfWz6ejRyzY01xcpzJjXr7zZ5Mx1D2%2B9sLqoMasK4q%2BuLfMIv6&X-Amz-Signature=fc0137639195bdfc4b7a70a8ba33e28faec75807b811fae428b6bcd3d7a1024a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AAA66M4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T170243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCxEtjZqaNNin8EdW1%2Bgz%2FWthQM4C2s6jaAdczz2wlwDAIgIGbLpX%2FPLkHtYNEwicbK97dJda58kiciFePcMHJcCEsqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkpyshUX11h5d%2FFbCrcA%2BvdSRYZqtsekB5n5lWA7x2ZMe5Flk%2FtvJ9Tg5IpIoImtr%2BaJlRlkMc52gZqeb0FxLxvfw9rC7O57MpETZFck%2Bh2jwA77RU%2BgKdjiR%2FrwI5jkL0YluW%2BWDLvo%2F4Oy2Fj0nSiI9CLaTbPh9gMEvybig6Db0DgC45bM8tDcLKuu2XZuaDvJ4r9QUh3afNMcv0xxFFufUeMjkEVw%2BKtPPlS6dDh%2B6MnqrAgCD5KbtXsYcmWhSguYntBYqWuKEDMHgwaD0RdX%2BcFNk3EbfmBdy3aL2mbmlCWWRPwmurbKw8%2Fr5f7skyjV%2FZ4wpJ%2FmDehyXfoL0CeAbBNlJOthdwGDQK%2BuFCXZT5LJw6%2BOskZAb8XqT6kQl5Ntj6bZ34Rsid7I6qpsze0ctm5Gj41MOrOAZRZWcWnhw79T1Nnr9vHd%2Bw3nMRUtZAGr3e087x%2FnSV1NnZbyIEZrm%2FyJDW1wUJd9m1ejy8QMtOley8K3q0R0DIdvAsh8YDJi9gWo3IzeHciVlsQULGmgR15xavXV4JJxQDaQV5YefXtTj7T4177xHMIuE8mO18fRZvNm5cko9wRFn09uRJYRntsdurtZccFZrJm6jTHa%2FFJ%2F0MqZXPFD43ftdc58wPkZ9GVOpIfrPHPMIKgj8AGOqUBHVdH%2BFEAPKds2%2B9tt5fpvRsg0JWKjxV76WLbv4u1q5PXcbPCxNq0FRK6bUdGeZTX8E3OTE3yA7IKBowJUTIlNPxNUK4oc0nsNDDRTQTG8U7MRg2UmmJBF4kRSNvdFTn8sb2EE5YIW%2FWVO2DtfyfQZACdeZFZCOQXWKWIW3UfcNpfWz6ejRyzY01xcpzJjXr7zZ5Mx1D2%2B9sLqoMasK4q%2BuLfMIv6&X-Amz-Signature=b4cb8e25407964467ab3c50a8d76f286569a4d28df3d8809438d305e3f5a9cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
