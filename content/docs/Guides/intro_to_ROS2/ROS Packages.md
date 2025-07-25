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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVVFPJD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDBnxWdVlCVm53UV%2FPziXF55vZbKTz8TTVmavESVSITqAIgCmVVgD8CE3wRXVi9pMOBoQBgfq85MS1l9kn50Hvy8Rcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAi1IopSbwLfrmKnRSrcA0uNixvWKfT0IAZNgK3f7LgYd7Rshpu1NEDJGevLF8SdYp70nNJFu1cPE3rzpzyRrP7WCkJs6KYm4XBBZCu0Cajliv3QaK9dWkJyTgbMuZDU1HyhxbEDtyKFIAtAZBfujMsaAETbAExR7EczlPjAPqDw%2FDEJZsbUN8OqD20rkSbSDSASpKnCdRLHLnXvHE3CZNBbh8x87IbPuYKmk6ocxhO0ZP2qoer9Adi9iKOrJI7lpwZ4Fq%2Fj5c%2B6mR1TOEvRzpEx%2FPx0XeLmzKoyISq7CLNTU0rqa291LNpG1foefiub2Aa5fsBVKGFRiNHkbsGmsqsF2FUSGV35a95ajDqJu%2FmBdakejdTuIYZfjEaejz91Agcwcn6SfMJOGQCS3pAWfk3si6tR1swx7nh1%2FYzrI%2BOSpaxo8%2BQf2fbTBHJocrgz84%2Bah%2FVh7IwBrwb4RhMaPYfSqobHuDYFc8uBiM%2B4jF68O1TVlxXjZTsWqWCAxr2cu3m2A8vA34uzPNwlJNt03pcsRISMVCDpOf4Q4ZNLkjzwx%2FYQIuUwZflucNCz1En1uH9C1L5yDw2rUHxqW%2Be9S2oWgrFYIb4RBDxi4oNeCOsBb7307724cohaGP3y7H0ZcGIeTw95YCRMlD39MMWKi8QGOqUBeZfqk4GttqSW269ttaBx2JujnNvc0KIn%2BYXaWs7%2FIHC%2FZTs0JMZeotSHjl62prmI1KlymfpPK43Iv60WBOo6L4IfKwjYQjoopAcP9iIIYm2RBuR8OWI%2BwIqfF4dZ5pGLzWHN1gJJpCPKB%2BYr92AXK14goIP9kX1Vxhl3G8aROYVMHVWjX4JBi3yuX2qsyb0NwgqAjw1NsAqBFmYb%2F%2F5%2BHErICvRU&X-Amz-Signature=22a748a2e73f6171c2bae7c5eb6f1b1d21d931fe67d80c328d85570111667575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVVFPJD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDBnxWdVlCVm53UV%2FPziXF55vZbKTz8TTVmavESVSITqAIgCmVVgD8CE3wRXVi9pMOBoQBgfq85MS1l9kn50Hvy8Rcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAi1IopSbwLfrmKnRSrcA0uNixvWKfT0IAZNgK3f7LgYd7Rshpu1NEDJGevLF8SdYp70nNJFu1cPE3rzpzyRrP7WCkJs6KYm4XBBZCu0Cajliv3QaK9dWkJyTgbMuZDU1HyhxbEDtyKFIAtAZBfujMsaAETbAExR7EczlPjAPqDw%2FDEJZsbUN8OqD20rkSbSDSASpKnCdRLHLnXvHE3CZNBbh8x87IbPuYKmk6ocxhO0ZP2qoer9Adi9iKOrJI7lpwZ4Fq%2Fj5c%2B6mR1TOEvRzpEx%2FPx0XeLmzKoyISq7CLNTU0rqa291LNpG1foefiub2Aa5fsBVKGFRiNHkbsGmsqsF2FUSGV35a95ajDqJu%2FmBdakejdTuIYZfjEaejz91Agcwcn6SfMJOGQCS3pAWfk3si6tR1swx7nh1%2FYzrI%2BOSpaxo8%2BQf2fbTBHJocrgz84%2Bah%2FVh7IwBrwb4RhMaPYfSqobHuDYFc8uBiM%2B4jF68O1TVlxXjZTsWqWCAxr2cu3m2A8vA34uzPNwlJNt03pcsRISMVCDpOf4Q4ZNLkjzwx%2FYQIuUwZflucNCz1En1uH9C1L5yDw2rUHxqW%2Be9S2oWgrFYIb4RBDxi4oNeCOsBb7307724cohaGP3y7H0ZcGIeTw95YCRMlD39MMWKi8QGOqUBeZfqk4GttqSW269ttaBx2JujnNvc0KIn%2BYXaWs7%2FIHC%2FZTs0JMZeotSHjl62prmI1KlymfpPK43Iv60WBOo6L4IfKwjYQjoopAcP9iIIYm2RBuR8OWI%2BwIqfF4dZ5pGLzWHN1gJJpCPKB%2BYr92AXK14goIP9kX1Vxhl3G8aROYVMHVWjX4JBi3yuX2qsyb0NwgqAjw1NsAqBFmYb%2F%2F5%2BHErICvRU&X-Amz-Signature=4fdef8e1fc016577b878c6146bd554814f62ac7cc66ecdd21081e21195603e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVVFPJD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDBnxWdVlCVm53UV%2FPziXF55vZbKTz8TTVmavESVSITqAIgCmVVgD8CE3wRXVi9pMOBoQBgfq85MS1l9kn50Hvy8Rcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAi1IopSbwLfrmKnRSrcA0uNixvWKfT0IAZNgK3f7LgYd7Rshpu1NEDJGevLF8SdYp70nNJFu1cPE3rzpzyRrP7WCkJs6KYm4XBBZCu0Cajliv3QaK9dWkJyTgbMuZDU1HyhxbEDtyKFIAtAZBfujMsaAETbAExR7EczlPjAPqDw%2FDEJZsbUN8OqD20rkSbSDSASpKnCdRLHLnXvHE3CZNBbh8x87IbPuYKmk6ocxhO0ZP2qoer9Adi9iKOrJI7lpwZ4Fq%2Fj5c%2B6mR1TOEvRzpEx%2FPx0XeLmzKoyISq7CLNTU0rqa291LNpG1foefiub2Aa5fsBVKGFRiNHkbsGmsqsF2FUSGV35a95ajDqJu%2FmBdakejdTuIYZfjEaejz91Agcwcn6SfMJOGQCS3pAWfk3si6tR1swx7nh1%2FYzrI%2BOSpaxo8%2BQf2fbTBHJocrgz84%2Bah%2FVh7IwBrwb4RhMaPYfSqobHuDYFc8uBiM%2B4jF68O1TVlxXjZTsWqWCAxr2cu3m2A8vA34uzPNwlJNt03pcsRISMVCDpOf4Q4ZNLkjzwx%2FYQIuUwZflucNCz1En1uH9C1L5yDw2rUHxqW%2Be9S2oWgrFYIb4RBDxi4oNeCOsBb7307724cohaGP3y7H0ZcGIeTw95YCRMlD39MMWKi8QGOqUBeZfqk4GttqSW269ttaBx2JujnNvc0KIn%2BYXaWs7%2FIHC%2FZTs0JMZeotSHjl62prmI1KlymfpPK43Iv60WBOo6L4IfKwjYQjoopAcP9iIIYm2RBuR8OWI%2BwIqfF4dZ5pGLzWHN1gJJpCPKB%2BYr92AXK14goIP9kX1Vxhl3G8aROYVMHVWjX4JBi3yuX2qsyb0NwgqAjw1NsAqBFmYb%2F%2F5%2BHErICvRU&X-Amz-Signature=a6379ce27f713e0e8869333cc1b995e0270ee3c5501756a9057a099f10d2720e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVVFPJD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDBnxWdVlCVm53UV%2FPziXF55vZbKTz8TTVmavESVSITqAIgCmVVgD8CE3wRXVi9pMOBoQBgfq85MS1l9kn50Hvy8Rcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAi1IopSbwLfrmKnRSrcA0uNixvWKfT0IAZNgK3f7LgYd7Rshpu1NEDJGevLF8SdYp70nNJFu1cPE3rzpzyRrP7WCkJs6KYm4XBBZCu0Cajliv3QaK9dWkJyTgbMuZDU1HyhxbEDtyKFIAtAZBfujMsaAETbAExR7EczlPjAPqDw%2FDEJZsbUN8OqD20rkSbSDSASpKnCdRLHLnXvHE3CZNBbh8x87IbPuYKmk6ocxhO0ZP2qoer9Adi9iKOrJI7lpwZ4Fq%2Fj5c%2B6mR1TOEvRzpEx%2FPx0XeLmzKoyISq7CLNTU0rqa291LNpG1foefiub2Aa5fsBVKGFRiNHkbsGmsqsF2FUSGV35a95ajDqJu%2FmBdakejdTuIYZfjEaejz91Agcwcn6SfMJOGQCS3pAWfk3si6tR1swx7nh1%2FYzrI%2BOSpaxo8%2BQf2fbTBHJocrgz84%2Bah%2FVh7IwBrwb4RhMaPYfSqobHuDYFc8uBiM%2B4jF68O1TVlxXjZTsWqWCAxr2cu3m2A8vA34uzPNwlJNt03pcsRISMVCDpOf4Q4ZNLkjzwx%2FYQIuUwZflucNCz1En1uH9C1L5yDw2rUHxqW%2Be9S2oWgrFYIb4RBDxi4oNeCOsBb7307724cohaGP3y7H0ZcGIeTw95YCRMlD39MMWKi8QGOqUBeZfqk4GttqSW269ttaBx2JujnNvc0KIn%2BYXaWs7%2FIHC%2FZTs0JMZeotSHjl62prmI1KlymfpPK43Iv60WBOo6L4IfKwjYQjoopAcP9iIIYm2RBuR8OWI%2BwIqfF4dZ5pGLzWHN1gJJpCPKB%2BYr92AXK14goIP9kX1Vxhl3G8aROYVMHVWjX4JBi3yuX2qsyb0NwgqAjw1NsAqBFmYb%2F%2F5%2BHErICvRU&X-Amz-Signature=f1e241feadc34103213c491f1f7566cac77f030a1d0eae4653271c221c1fad0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVVFPJD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDBnxWdVlCVm53UV%2FPziXF55vZbKTz8TTVmavESVSITqAIgCmVVgD8CE3wRXVi9pMOBoQBgfq85MS1l9kn50Hvy8Rcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAi1IopSbwLfrmKnRSrcA0uNixvWKfT0IAZNgK3f7LgYd7Rshpu1NEDJGevLF8SdYp70nNJFu1cPE3rzpzyRrP7WCkJs6KYm4XBBZCu0Cajliv3QaK9dWkJyTgbMuZDU1HyhxbEDtyKFIAtAZBfujMsaAETbAExR7EczlPjAPqDw%2FDEJZsbUN8OqD20rkSbSDSASpKnCdRLHLnXvHE3CZNBbh8x87IbPuYKmk6ocxhO0ZP2qoer9Adi9iKOrJI7lpwZ4Fq%2Fj5c%2B6mR1TOEvRzpEx%2FPx0XeLmzKoyISq7CLNTU0rqa291LNpG1foefiub2Aa5fsBVKGFRiNHkbsGmsqsF2FUSGV35a95ajDqJu%2FmBdakejdTuIYZfjEaejz91Agcwcn6SfMJOGQCS3pAWfk3si6tR1swx7nh1%2FYzrI%2BOSpaxo8%2BQf2fbTBHJocrgz84%2Bah%2FVh7IwBrwb4RhMaPYfSqobHuDYFc8uBiM%2B4jF68O1TVlxXjZTsWqWCAxr2cu3m2A8vA34uzPNwlJNt03pcsRISMVCDpOf4Q4ZNLkjzwx%2FYQIuUwZflucNCz1En1uH9C1L5yDw2rUHxqW%2Be9S2oWgrFYIb4RBDxi4oNeCOsBb7307724cohaGP3y7H0ZcGIeTw95YCRMlD39MMWKi8QGOqUBeZfqk4GttqSW269ttaBx2JujnNvc0KIn%2BYXaWs7%2FIHC%2FZTs0JMZeotSHjl62prmI1KlymfpPK43Iv60WBOo6L4IfKwjYQjoopAcP9iIIYm2RBuR8OWI%2BwIqfF4dZ5pGLzWHN1gJJpCPKB%2BYr92AXK14goIP9kX1Vxhl3G8aROYVMHVWjX4JBi3yuX2qsyb0NwgqAjw1NsAqBFmYb%2F%2F5%2BHErICvRU&X-Amz-Signature=720a8f85532f030263bcfc9bf90a6ee2bba0de8a294361128ab8d06378f9f26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVVFPJD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDBnxWdVlCVm53UV%2FPziXF55vZbKTz8TTVmavESVSITqAIgCmVVgD8CE3wRXVi9pMOBoQBgfq85MS1l9kn50Hvy8Rcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAi1IopSbwLfrmKnRSrcA0uNixvWKfT0IAZNgK3f7LgYd7Rshpu1NEDJGevLF8SdYp70nNJFu1cPE3rzpzyRrP7WCkJs6KYm4XBBZCu0Cajliv3QaK9dWkJyTgbMuZDU1HyhxbEDtyKFIAtAZBfujMsaAETbAExR7EczlPjAPqDw%2FDEJZsbUN8OqD20rkSbSDSASpKnCdRLHLnXvHE3CZNBbh8x87IbPuYKmk6ocxhO0ZP2qoer9Adi9iKOrJI7lpwZ4Fq%2Fj5c%2B6mR1TOEvRzpEx%2FPx0XeLmzKoyISq7CLNTU0rqa291LNpG1foefiub2Aa5fsBVKGFRiNHkbsGmsqsF2FUSGV35a95ajDqJu%2FmBdakejdTuIYZfjEaejz91Agcwcn6SfMJOGQCS3pAWfk3si6tR1swx7nh1%2FYzrI%2BOSpaxo8%2BQf2fbTBHJocrgz84%2Bah%2FVh7IwBrwb4RhMaPYfSqobHuDYFc8uBiM%2B4jF68O1TVlxXjZTsWqWCAxr2cu3m2A8vA34uzPNwlJNt03pcsRISMVCDpOf4Q4ZNLkjzwx%2FYQIuUwZflucNCz1En1uH9C1L5yDw2rUHxqW%2Be9S2oWgrFYIb4RBDxi4oNeCOsBb7307724cohaGP3y7H0ZcGIeTw95YCRMlD39MMWKi8QGOqUBeZfqk4GttqSW269ttaBx2JujnNvc0KIn%2BYXaWs7%2FIHC%2FZTs0JMZeotSHjl62prmI1KlymfpPK43Iv60WBOo6L4IfKwjYQjoopAcP9iIIYm2RBuR8OWI%2BwIqfF4dZ5pGLzWHN1gJJpCPKB%2BYr92AXK14goIP9kX1Vxhl3G8aROYVMHVWjX4JBi3yuX2qsyb0NwgqAjw1NsAqBFmYb%2F%2F5%2BHErICvRU&X-Amz-Signature=d10cc281f5393ed1ac15166e878168a671d371187e1d69c4f5efcecadb9123b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JVVFPJD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDBnxWdVlCVm53UV%2FPziXF55vZbKTz8TTVmavESVSITqAIgCmVVgD8CE3wRXVi9pMOBoQBgfq85MS1l9kn50Hvy8Rcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAi1IopSbwLfrmKnRSrcA0uNixvWKfT0IAZNgK3f7LgYd7Rshpu1NEDJGevLF8SdYp70nNJFu1cPE3rzpzyRrP7WCkJs6KYm4XBBZCu0Cajliv3QaK9dWkJyTgbMuZDU1HyhxbEDtyKFIAtAZBfujMsaAETbAExR7EczlPjAPqDw%2FDEJZsbUN8OqD20rkSbSDSASpKnCdRLHLnXvHE3CZNBbh8x87IbPuYKmk6ocxhO0ZP2qoer9Adi9iKOrJI7lpwZ4Fq%2Fj5c%2B6mR1TOEvRzpEx%2FPx0XeLmzKoyISq7CLNTU0rqa291LNpG1foefiub2Aa5fsBVKGFRiNHkbsGmsqsF2FUSGV35a95ajDqJu%2FmBdakejdTuIYZfjEaejz91Agcwcn6SfMJOGQCS3pAWfk3si6tR1swx7nh1%2FYzrI%2BOSpaxo8%2BQf2fbTBHJocrgz84%2Bah%2FVh7IwBrwb4RhMaPYfSqobHuDYFc8uBiM%2B4jF68O1TVlxXjZTsWqWCAxr2cu3m2A8vA34uzPNwlJNt03pcsRISMVCDpOf4Q4ZNLkjzwx%2FYQIuUwZflucNCz1En1uH9C1L5yDw2rUHxqW%2Be9S2oWgrFYIb4RBDxi4oNeCOsBb7307724cohaGP3y7H0ZcGIeTw95YCRMlD39MMWKi8QGOqUBeZfqk4GttqSW269ttaBx2JujnNvc0KIn%2BYXaWs7%2FIHC%2FZTs0JMZeotSHjl62prmI1KlymfpPK43Iv60WBOo6L4IfKwjYQjoopAcP9iIIYm2RBuR8OWI%2BwIqfF4dZ5pGLzWHN1gJJpCPKB%2BYr92AXK14goIP9kX1Vxhl3G8aROYVMHVWjX4JBi3yuX2qsyb0NwgqAjw1NsAqBFmYb%2F%2F5%2BHErICvRU&X-Amz-Signature=a2809e1021c1e9a4deb5d3656c998f15b95c998671e2ea3d4828e5261c268841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
