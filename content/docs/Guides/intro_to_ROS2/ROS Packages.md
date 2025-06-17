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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RYVVQW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6pK3RIjwSAycO34O40lTFFTENq2W4OpO1lZ0f1Hnt6AIhALx3OiKACL30A4qxdjblpOGSU8vPU2b56GPZ6p%2Br%2B%2BE%2BKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2FHlYTCpIYtqiWyQMq3APeSzE62JIDoVxgLDIUf2wE1PbBrW2MDIIrcgsMCHDpNdvCxccYfDijIuXeSVPqfyDInJ1U2137OTAUs1k35w1MbL4kBZqF2nVQXCDYwph2YOdDhxykQCosN6T6VOVUS0ww%2FSx%2BEf7aA7GD51IWM215L18j4H7oYRenOORdCB88fOOPWFTCaNxBTJjDemgk3PcG9D%2F%2BDUwu8AthkNF%2BqKlReJ1xlCSVFNvId3b6Yx4W%2FFxKGkvGYX87WIrd2k0QsUY0gh86rSmYHhl9UUX3T9auquyVkVmmaTWBiUZ%2F%2BpgiGZ%2BCd%2F1x0cFAm0rQsWoGhlGVmNZINBH4c883K5OGG0cfqTJyh8CpBQ6WAfXyXtv0ioPpDt0GatrSaq22SJyfZQc%2BC5sM2hsJMSnOVyVtlhn9F7iquu6jzZ%2FiNfw4kCjTWVEI%2F73Wkw1PzRgHdIhy9xoXtWTDOwG87oS97STD%2FWOrKoUZ5WLUstTNrc46LMWTU0NKJprrKxuR7yWkf4mC6CRPmolRwkOYTVTHhSbzbMTvDO6m2eUfpA7Fi4P4fARrwYnEjY%2BO7%2FudgdZZG2fojfFs0%2BFMyYWWCb0pWV2cF3fD2Ad%2BBPqkwZgmEZKSBKT4ui5AWuBI2LCaxR%2F3jjCRtcbCBjqkAar%2BwQFyvNItOcHrbDnYpgUWjnqwBQvRM9Oonpj6kS54HxeM7qeUIf75FNgjiltxzpmY1LFtwJ2F5z6x3zTxHsAOIB6mzhIjmV56KfZrIaN4UONRbKuwmRJ4OYp0T5riIs6UWnxaLklJM4ZWZ48ACacrS%2F0bv18kn%2FFzX7xp3U%2B1vPv8rPo5t1TOz4a8kRhfyRvCJbQ8OUkOJH6L4rlK%2FP5H6G2x&X-Amz-Signature=31e30db307c3f7fb97e286926cadc73adbcb1d83ca868181edefde80089e5bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RYVVQW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6pK3RIjwSAycO34O40lTFFTENq2W4OpO1lZ0f1Hnt6AIhALx3OiKACL30A4qxdjblpOGSU8vPU2b56GPZ6p%2Br%2B%2BE%2BKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2FHlYTCpIYtqiWyQMq3APeSzE62JIDoVxgLDIUf2wE1PbBrW2MDIIrcgsMCHDpNdvCxccYfDijIuXeSVPqfyDInJ1U2137OTAUs1k35w1MbL4kBZqF2nVQXCDYwph2YOdDhxykQCosN6T6VOVUS0ww%2FSx%2BEf7aA7GD51IWM215L18j4H7oYRenOORdCB88fOOPWFTCaNxBTJjDemgk3PcG9D%2F%2BDUwu8AthkNF%2BqKlReJ1xlCSVFNvId3b6Yx4W%2FFxKGkvGYX87WIrd2k0QsUY0gh86rSmYHhl9UUX3T9auquyVkVmmaTWBiUZ%2F%2BpgiGZ%2BCd%2F1x0cFAm0rQsWoGhlGVmNZINBH4c883K5OGG0cfqTJyh8CpBQ6WAfXyXtv0ioPpDt0GatrSaq22SJyfZQc%2BC5sM2hsJMSnOVyVtlhn9F7iquu6jzZ%2FiNfw4kCjTWVEI%2F73Wkw1PzRgHdIhy9xoXtWTDOwG87oS97STD%2FWOrKoUZ5WLUstTNrc46LMWTU0NKJprrKxuR7yWkf4mC6CRPmolRwkOYTVTHhSbzbMTvDO6m2eUfpA7Fi4P4fARrwYnEjY%2BO7%2FudgdZZG2fojfFs0%2BFMyYWWCb0pWV2cF3fD2Ad%2BBPqkwZgmEZKSBKT4ui5AWuBI2LCaxR%2F3jjCRtcbCBjqkAar%2BwQFyvNItOcHrbDnYpgUWjnqwBQvRM9Oonpj6kS54HxeM7qeUIf75FNgjiltxzpmY1LFtwJ2F5z6x3zTxHsAOIB6mzhIjmV56KfZrIaN4UONRbKuwmRJ4OYp0T5riIs6UWnxaLklJM4ZWZ48ACacrS%2F0bv18kn%2FFzX7xp3U%2B1vPv8rPo5t1TOz4a8kRhfyRvCJbQ8OUkOJH6L4rlK%2FP5H6G2x&X-Amz-Signature=2e1889a677f1400025d1ca2b76120714dc38bc9bf6483d014760bca4e60d1776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RYVVQW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6pK3RIjwSAycO34O40lTFFTENq2W4OpO1lZ0f1Hnt6AIhALx3OiKACL30A4qxdjblpOGSU8vPU2b56GPZ6p%2Br%2B%2BE%2BKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2FHlYTCpIYtqiWyQMq3APeSzE62JIDoVxgLDIUf2wE1PbBrW2MDIIrcgsMCHDpNdvCxccYfDijIuXeSVPqfyDInJ1U2137OTAUs1k35w1MbL4kBZqF2nVQXCDYwph2YOdDhxykQCosN6T6VOVUS0ww%2FSx%2BEf7aA7GD51IWM215L18j4H7oYRenOORdCB88fOOPWFTCaNxBTJjDemgk3PcG9D%2F%2BDUwu8AthkNF%2BqKlReJ1xlCSVFNvId3b6Yx4W%2FFxKGkvGYX87WIrd2k0QsUY0gh86rSmYHhl9UUX3T9auquyVkVmmaTWBiUZ%2F%2BpgiGZ%2BCd%2F1x0cFAm0rQsWoGhlGVmNZINBH4c883K5OGG0cfqTJyh8CpBQ6WAfXyXtv0ioPpDt0GatrSaq22SJyfZQc%2BC5sM2hsJMSnOVyVtlhn9F7iquu6jzZ%2FiNfw4kCjTWVEI%2F73Wkw1PzRgHdIhy9xoXtWTDOwG87oS97STD%2FWOrKoUZ5WLUstTNrc46LMWTU0NKJprrKxuR7yWkf4mC6CRPmolRwkOYTVTHhSbzbMTvDO6m2eUfpA7Fi4P4fARrwYnEjY%2BO7%2FudgdZZG2fojfFs0%2BFMyYWWCb0pWV2cF3fD2Ad%2BBPqkwZgmEZKSBKT4ui5AWuBI2LCaxR%2F3jjCRtcbCBjqkAar%2BwQFyvNItOcHrbDnYpgUWjnqwBQvRM9Oonpj6kS54HxeM7qeUIf75FNgjiltxzpmY1LFtwJ2F5z6x3zTxHsAOIB6mzhIjmV56KfZrIaN4UONRbKuwmRJ4OYp0T5riIs6UWnxaLklJM4ZWZ48ACacrS%2F0bv18kn%2FFzX7xp3U%2B1vPv8rPo5t1TOz4a8kRhfyRvCJbQ8OUkOJH6L4rlK%2FP5H6G2x&X-Amz-Signature=977d6fbce7ee6076a561a53e209952bd1bdeaea2a84ad71359b03b3b06f4ac48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RYVVQW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6pK3RIjwSAycO34O40lTFFTENq2W4OpO1lZ0f1Hnt6AIhALx3OiKACL30A4qxdjblpOGSU8vPU2b56GPZ6p%2Br%2B%2BE%2BKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2FHlYTCpIYtqiWyQMq3APeSzE62JIDoVxgLDIUf2wE1PbBrW2MDIIrcgsMCHDpNdvCxccYfDijIuXeSVPqfyDInJ1U2137OTAUs1k35w1MbL4kBZqF2nVQXCDYwph2YOdDhxykQCosN6T6VOVUS0ww%2FSx%2BEf7aA7GD51IWM215L18j4H7oYRenOORdCB88fOOPWFTCaNxBTJjDemgk3PcG9D%2F%2BDUwu8AthkNF%2BqKlReJ1xlCSVFNvId3b6Yx4W%2FFxKGkvGYX87WIrd2k0QsUY0gh86rSmYHhl9UUX3T9auquyVkVmmaTWBiUZ%2F%2BpgiGZ%2BCd%2F1x0cFAm0rQsWoGhlGVmNZINBH4c883K5OGG0cfqTJyh8CpBQ6WAfXyXtv0ioPpDt0GatrSaq22SJyfZQc%2BC5sM2hsJMSnOVyVtlhn9F7iquu6jzZ%2FiNfw4kCjTWVEI%2F73Wkw1PzRgHdIhy9xoXtWTDOwG87oS97STD%2FWOrKoUZ5WLUstTNrc46LMWTU0NKJprrKxuR7yWkf4mC6CRPmolRwkOYTVTHhSbzbMTvDO6m2eUfpA7Fi4P4fARrwYnEjY%2BO7%2FudgdZZG2fojfFs0%2BFMyYWWCb0pWV2cF3fD2Ad%2BBPqkwZgmEZKSBKT4ui5AWuBI2LCaxR%2F3jjCRtcbCBjqkAar%2BwQFyvNItOcHrbDnYpgUWjnqwBQvRM9Oonpj6kS54HxeM7qeUIf75FNgjiltxzpmY1LFtwJ2F5z6x3zTxHsAOIB6mzhIjmV56KfZrIaN4UONRbKuwmRJ4OYp0T5riIs6UWnxaLklJM4ZWZ48ACacrS%2F0bv18kn%2FFzX7xp3U%2B1vPv8rPo5t1TOz4a8kRhfyRvCJbQ8OUkOJH6L4rlK%2FP5H6G2x&X-Amz-Signature=c7251d2688ed37d982826425b72dfc18361be57ae357c012085949662f1e2d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RYVVQW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6pK3RIjwSAycO34O40lTFFTENq2W4OpO1lZ0f1Hnt6AIhALx3OiKACL30A4qxdjblpOGSU8vPU2b56GPZ6p%2Br%2B%2BE%2BKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2FHlYTCpIYtqiWyQMq3APeSzE62JIDoVxgLDIUf2wE1PbBrW2MDIIrcgsMCHDpNdvCxccYfDijIuXeSVPqfyDInJ1U2137OTAUs1k35w1MbL4kBZqF2nVQXCDYwph2YOdDhxykQCosN6T6VOVUS0ww%2FSx%2BEf7aA7GD51IWM215L18j4H7oYRenOORdCB88fOOPWFTCaNxBTJjDemgk3PcG9D%2F%2BDUwu8AthkNF%2BqKlReJ1xlCSVFNvId3b6Yx4W%2FFxKGkvGYX87WIrd2k0QsUY0gh86rSmYHhl9UUX3T9auquyVkVmmaTWBiUZ%2F%2BpgiGZ%2BCd%2F1x0cFAm0rQsWoGhlGVmNZINBH4c883K5OGG0cfqTJyh8CpBQ6WAfXyXtv0ioPpDt0GatrSaq22SJyfZQc%2BC5sM2hsJMSnOVyVtlhn9F7iquu6jzZ%2FiNfw4kCjTWVEI%2F73Wkw1PzRgHdIhy9xoXtWTDOwG87oS97STD%2FWOrKoUZ5WLUstTNrc46LMWTU0NKJprrKxuR7yWkf4mC6CRPmolRwkOYTVTHhSbzbMTvDO6m2eUfpA7Fi4P4fARrwYnEjY%2BO7%2FudgdZZG2fojfFs0%2BFMyYWWCb0pWV2cF3fD2Ad%2BBPqkwZgmEZKSBKT4ui5AWuBI2LCaxR%2F3jjCRtcbCBjqkAar%2BwQFyvNItOcHrbDnYpgUWjnqwBQvRM9Oonpj6kS54HxeM7qeUIf75FNgjiltxzpmY1LFtwJ2F5z6x3zTxHsAOIB6mzhIjmV56KfZrIaN4UONRbKuwmRJ4OYp0T5riIs6UWnxaLklJM4ZWZ48ACacrS%2F0bv18kn%2FFzX7xp3U%2B1vPv8rPo5t1TOz4a8kRhfyRvCJbQ8OUkOJH6L4rlK%2FP5H6G2x&X-Amz-Signature=51669fd656114dbcff8ea2f7d4f27d79c60311f2da05f2877adcad274d5518c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RYVVQW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6pK3RIjwSAycO34O40lTFFTENq2W4OpO1lZ0f1Hnt6AIhALx3OiKACL30A4qxdjblpOGSU8vPU2b56GPZ6p%2Br%2B%2BE%2BKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2FHlYTCpIYtqiWyQMq3APeSzE62JIDoVxgLDIUf2wE1PbBrW2MDIIrcgsMCHDpNdvCxccYfDijIuXeSVPqfyDInJ1U2137OTAUs1k35w1MbL4kBZqF2nVQXCDYwph2YOdDhxykQCosN6T6VOVUS0ww%2FSx%2BEf7aA7GD51IWM215L18j4H7oYRenOORdCB88fOOPWFTCaNxBTJjDemgk3PcG9D%2F%2BDUwu8AthkNF%2BqKlReJ1xlCSVFNvId3b6Yx4W%2FFxKGkvGYX87WIrd2k0QsUY0gh86rSmYHhl9UUX3T9auquyVkVmmaTWBiUZ%2F%2BpgiGZ%2BCd%2F1x0cFAm0rQsWoGhlGVmNZINBH4c883K5OGG0cfqTJyh8CpBQ6WAfXyXtv0ioPpDt0GatrSaq22SJyfZQc%2BC5sM2hsJMSnOVyVtlhn9F7iquu6jzZ%2FiNfw4kCjTWVEI%2F73Wkw1PzRgHdIhy9xoXtWTDOwG87oS97STD%2FWOrKoUZ5WLUstTNrc46LMWTU0NKJprrKxuR7yWkf4mC6CRPmolRwkOYTVTHhSbzbMTvDO6m2eUfpA7Fi4P4fARrwYnEjY%2BO7%2FudgdZZG2fojfFs0%2BFMyYWWCb0pWV2cF3fD2Ad%2BBPqkwZgmEZKSBKT4ui5AWuBI2LCaxR%2F3jjCRtcbCBjqkAar%2BwQFyvNItOcHrbDnYpgUWjnqwBQvRM9Oonpj6kS54HxeM7qeUIf75FNgjiltxzpmY1LFtwJ2F5z6x3zTxHsAOIB6mzhIjmV56KfZrIaN4UONRbKuwmRJ4OYp0T5riIs6UWnxaLklJM4ZWZ48ACacrS%2F0bv18kn%2FFzX7xp3U%2B1vPv8rPo5t1TOz4a8kRhfyRvCJbQ8OUkOJH6L4rlK%2FP5H6G2x&X-Amz-Signature=5496ae32417c78d71e1fffdeb2e37c963a45ec80ea35e1a3bc8e076c45445897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RYVVQW%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6pK3RIjwSAycO34O40lTFFTENq2W4OpO1lZ0f1Hnt6AIhALx3OiKACL30A4qxdjblpOGSU8vPU2b56GPZ6p%2Br%2B%2BE%2BKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2FHlYTCpIYtqiWyQMq3APeSzE62JIDoVxgLDIUf2wE1PbBrW2MDIIrcgsMCHDpNdvCxccYfDijIuXeSVPqfyDInJ1U2137OTAUs1k35w1MbL4kBZqF2nVQXCDYwph2YOdDhxykQCosN6T6VOVUS0ww%2FSx%2BEf7aA7GD51IWM215L18j4H7oYRenOORdCB88fOOPWFTCaNxBTJjDemgk3PcG9D%2F%2BDUwu8AthkNF%2BqKlReJ1xlCSVFNvId3b6Yx4W%2FFxKGkvGYX87WIrd2k0QsUY0gh86rSmYHhl9UUX3T9auquyVkVmmaTWBiUZ%2F%2BpgiGZ%2BCd%2F1x0cFAm0rQsWoGhlGVmNZINBH4c883K5OGG0cfqTJyh8CpBQ6WAfXyXtv0ioPpDt0GatrSaq22SJyfZQc%2BC5sM2hsJMSnOVyVtlhn9F7iquu6jzZ%2FiNfw4kCjTWVEI%2F73Wkw1PzRgHdIhy9xoXtWTDOwG87oS97STD%2FWOrKoUZ5WLUstTNrc46LMWTU0NKJprrKxuR7yWkf4mC6CRPmolRwkOYTVTHhSbzbMTvDO6m2eUfpA7Fi4P4fARrwYnEjY%2BO7%2FudgdZZG2fojfFs0%2BFMyYWWCb0pWV2cF3fD2Ad%2BBPqkwZgmEZKSBKT4ui5AWuBI2LCaxR%2F3jjCRtcbCBjqkAar%2BwQFyvNItOcHrbDnYpgUWjnqwBQvRM9Oonpj6kS54HxeM7qeUIf75FNgjiltxzpmY1LFtwJ2F5z6x3zTxHsAOIB6mzhIjmV56KfZrIaN4UONRbKuwmRJ4OYp0T5riIs6UWnxaLklJM4ZWZ48ACacrS%2F0bv18kn%2FFzX7xp3U%2B1vPv8rPo5t1TOz4a8kRhfyRvCJbQ8OUkOJH6L4rlK%2FP5H6G2x&X-Amz-Signature=2bbaed4486de29988d3d5f72cf60a16d06d512f6ffb5343c1029574d3d17e3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
