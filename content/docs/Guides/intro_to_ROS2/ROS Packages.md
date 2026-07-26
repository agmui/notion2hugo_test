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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZBAODTH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEC2RpRlPadZYQ10PyCkYAkyYh%2F2TOJ%2Fdn3H7LukPXNgIhALba3uw9NCW4txboR3EAMTMbDWigE7UNr%2FhNjxD%2FOFyAKv8DCCwQABoMNjM3NDIzMTgzODA1Igxe4LH9l9C51J%2FaPw0q3AN1bWRwzjR6FerAQ9iNaHXN9leYxikdV05vjvmfqqplyjZ%2Fk4et6SouCqtllAGCmWCMzT9GZNxLnWrGEGgLNFXxLbP65Y1JuIfzvWI%2BZpm1aOnAL9MWPQ9PuScWAp7RS59JHqTfpcg8%2BgrbkToFWcugy76PTiQkMd3vIvuf8cnBIHmChsdpT%2B5Kbswb9kA%2FDCNMjyf%2FRGAlRVxnpllDnmhqoDVGYYCdw0xG%2FMvf0EuCVJBjlzKrsqXCrHiBt8GsjSUopydCxhYbz6jU%2BVMqWwxulpe%2B7Uv3wIOy%2Fkk1sQLYEbsKoWG%2BMYbTgEG44NBcXs9hdFS4PPuRpBdWVYPu8qSsb5%2B4liV%2FiF4f0MT0cNWU829Aup8SmcdQvD1Oc3O%2Bt5KC8ZB0xnNQNTm3k5uuzECvYM%2BT7ehAzwOk%2BRzttoA5xIWvdkCzC58chU7Ctx0tPZ%2BJXIueRLSkCMRGQZ87RdhiY7g54GmBqrb5X1lGVeoGL8pAFVwwgelJbwgP9eZIhu26GO%2BAbQqWoqukXaj%2BESRFY9UvzjPIN%2BU3%2B9nakP8k8tfjZsWjbNsmtw%2B4O2gaR%2FQEkNPT50THNszZLHdyDKrq1kp79rqaamka3wEWNcGDYzjlDvM4pBr%2FwLy4eTCE55XTBjqkAcetOr1Z%2BJGxZ07YurmdMmgJwkixEO46POH6jFw83t90SxPk0tQ0WOpTm%2F%2BMxTM6jwUHOW39cKM0bQQLhABqyI%2FeLRwpOCCJmonVHTKaA%2Fa6PwgTdWf%2F2gd%2B4LYv0jiZkyIt%2FssPAh4jBwK30xsVdyKdcNTdMOR0jd7EfxmOTcaJLxSkFZhKOjGlMN%2FobHD2pajtPLYiOx1kAxUhuG5aiEuWqrOe&X-Amz-Signature=021acda93fad1b885cc7b1f9deabc3133fbb4897e3baa526121a685f0e2a0d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZBAODTH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEC2RpRlPadZYQ10PyCkYAkyYh%2F2TOJ%2Fdn3H7LukPXNgIhALba3uw9NCW4txboR3EAMTMbDWigE7UNr%2FhNjxD%2FOFyAKv8DCCwQABoMNjM3NDIzMTgzODA1Igxe4LH9l9C51J%2FaPw0q3AN1bWRwzjR6FerAQ9iNaHXN9leYxikdV05vjvmfqqplyjZ%2Fk4et6SouCqtllAGCmWCMzT9GZNxLnWrGEGgLNFXxLbP65Y1JuIfzvWI%2BZpm1aOnAL9MWPQ9PuScWAp7RS59JHqTfpcg8%2BgrbkToFWcugy76PTiQkMd3vIvuf8cnBIHmChsdpT%2B5Kbswb9kA%2FDCNMjyf%2FRGAlRVxnpllDnmhqoDVGYYCdw0xG%2FMvf0EuCVJBjlzKrsqXCrHiBt8GsjSUopydCxhYbz6jU%2BVMqWwxulpe%2B7Uv3wIOy%2Fkk1sQLYEbsKoWG%2BMYbTgEG44NBcXs9hdFS4PPuRpBdWVYPu8qSsb5%2B4liV%2FiF4f0MT0cNWU829Aup8SmcdQvD1Oc3O%2Bt5KC8ZB0xnNQNTm3k5uuzECvYM%2BT7ehAzwOk%2BRzttoA5xIWvdkCzC58chU7Ctx0tPZ%2BJXIueRLSkCMRGQZ87RdhiY7g54GmBqrb5X1lGVeoGL8pAFVwwgelJbwgP9eZIhu26GO%2BAbQqWoqukXaj%2BESRFY9UvzjPIN%2BU3%2B9nakP8k8tfjZsWjbNsmtw%2B4O2gaR%2FQEkNPT50THNszZLHdyDKrq1kp79rqaamka3wEWNcGDYzjlDvM4pBr%2FwLy4eTCE55XTBjqkAcetOr1Z%2BJGxZ07YurmdMmgJwkixEO46POH6jFw83t90SxPk0tQ0WOpTm%2F%2BMxTM6jwUHOW39cKM0bQQLhABqyI%2FeLRwpOCCJmonVHTKaA%2Fa6PwgTdWf%2F2gd%2B4LYv0jiZkyIt%2FssPAh4jBwK30xsVdyKdcNTdMOR0jd7EfxmOTcaJLxSkFZhKOjGlMN%2FobHD2pajtPLYiOx1kAxUhuG5aiEuWqrOe&X-Amz-Signature=a169c971e86cf5ec07e2de2c2d076f437f509d83f56861cfbee7c385046084a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZBAODTH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEC2RpRlPadZYQ10PyCkYAkyYh%2F2TOJ%2Fdn3H7LukPXNgIhALba3uw9NCW4txboR3EAMTMbDWigE7UNr%2FhNjxD%2FOFyAKv8DCCwQABoMNjM3NDIzMTgzODA1Igxe4LH9l9C51J%2FaPw0q3AN1bWRwzjR6FerAQ9iNaHXN9leYxikdV05vjvmfqqplyjZ%2Fk4et6SouCqtllAGCmWCMzT9GZNxLnWrGEGgLNFXxLbP65Y1JuIfzvWI%2BZpm1aOnAL9MWPQ9PuScWAp7RS59JHqTfpcg8%2BgrbkToFWcugy76PTiQkMd3vIvuf8cnBIHmChsdpT%2B5Kbswb9kA%2FDCNMjyf%2FRGAlRVxnpllDnmhqoDVGYYCdw0xG%2FMvf0EuCVJBjlzKrsqXCrHiBt8GsjSUopydCxhYbz6jU%2BVMqWwxulpe%2B7Uv3wIOy%2Fkk1sQLYEbsKoWG%2BMYbTgEG44NBcXs9hdFS4PPuRpBdWVYPu8qSsb5%2B4liV%2FiF4f0MT0cNWU829Aup8SmcdQvD1Oc3O%2Bt5KC8ZB0xnNQNTm3k5uuzECvYM%2BT7ehAzwOk%2BRzttoA5xIWvdkCzC58chU7Ctx0tPZ%2BJXIueRLSkCMRGQZ87RdhiY7g54GmBqrb5X1lGVeoGL8pAFVwwgelJbwgP9eZIhu26GO%2BAbQqWoqukXaj%2BESRFY9UvzjPIN%2BU3%2B9nakP8k8tfjZsWjbNsmtw%2B4O2gaR%2FQEkNPT50THNszZLHdyDKrq1kp79rqaamka3wEWNcGDYzjlDvM4pBr%2FwLy4eTCE55XTBjqkAcetOr1Z%2BJGxZ07YurmdMmgJwkixEO46POH6jFw83t90SxPk0tQ0WOpTm%2F%2BMxTM6jwUHOW39cKM0bQQLhABqyI%2FeLRwpOCCJmonVHTKaA%2Fa6PwgTdWf%2F2gd%2B4LYv0jiZkyIt%2FssPAh4jBwK30xsVdyKdcNTdMOR0jd7EfxmOTcaJLxSkFZhKOjGlMN%2FobHD2pajtPLYiOx1kAxUhuG5aiEuWqrOe&X-Amz-Signature=4fa0b730f6601e42c1eb5814e74a6ce5a0e399e6ab9d2da5badba6672329413a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZBAODTH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEC2RpRlPadZYQ10PyCkYAkyYh%2F2TOJ%2Fdn3H7LukPXNgIhALba3uw9NCW4txboR3EAMTMbDWigE7UNr%2FhNjxD%2FOFyAKv8DCCwQABoMNjM3NDIzMTgzODA1Igxe4LH9l9C51J%2FaPw0q3AN1bWRwzjR6FerAQ9iNaHXN9leYxikdV05vjvmfqqplyjZ%2Fk4et6SouCqtllAGCmWCMzT9GZNxLnWrGEGgLNFXxLbP65Y1JuIfzvWI%2BZpm1aOnAL9MWPQ9PuScWAp7RS59JHqTfpcg8%2BgrbkToFWcugy76PTiQkMd3vIvuf8cnBIHmChsdpT%2B5Kbswb9kA%2FDCNMjyf%2FRGAlRVxnpllDnmhqoDVGYYCdw0xG%2FMvf0EuCVJBjlzKrsqXCrHiBt8GsjSUopydCxhYbz6jU%2BVMqWwxulpe%2B7Uv3wIOy%2Fkk1sQLYEbsKoWG%2BMYbTgEG44NBcXs9hdFS4PPuRpBdWVYPu8qSsb5%2B4liV%2FiF4f0MT0cNWU829Aup8SmcdQvD1Oc3O%2Bt5KC8ZB0xnNQNTm3k5uuzECvYM%2BT7ehAzwOk%2BRzttoA5xIWvdkCzC58chU7Ctx0tPZ%2BJXIueRLSkCMRGQZ87RdhiY7g54GmBqrb5X1lGVeoGL8pAFVwwgelJbwgP9eZIhu26GO%2BAbQqWoqukXaj%2BESRFY9UvzjPIN%2BU3%2B9nakP8k8tfjZsWjbNsmtw%2B4O2gaR%2FQEkNPT50THNszZLHdyDKrq1kp79rqaamka3wEWNcGDYzjlDvM4pBr%2FwLy4eTCE55XTBjqkAcetOr1Z%2BJGxZ07YurmdMmgJwkixEO46POH6jFw83t90SxPk0tQ0WOpTm%2F%2BMxTM6jwUHOW39cKM0bQQLhABqyI%2FeLRwpOCCJmonVHTKaA%2Fa6PwgTdWf%2F2gd%2B4LYv0jiZkyIt%2FssPAh4jBwK30xsVdyKdcNTdMOR0jd7EfxmOTcaJLxSkFZhKOjGlMN%2FobHD2pajtPLYiOx1kAxUhuG5aiEuWqrOe&X-Amz-Signature=d6248fdd8a4d923c4bd8fb38d1fcc3317fd99351f427af0172d71ba8fe822220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZBAODTH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEC2RpRlPadZYQ10PyCkYAkyYh%2F2TOJ%2Fdn3H7LukPXNgIhALba3uw9NCW4txboR3EAMTMbDWigE7UNr%2FhNjxD%2FOFyAKv8DCCwQABoMNjM3NDIzMTgzODA1Igxe4LH9l9C51J%2FaPw0q3AN1bWRwzjR6FerAQ9iNaHXN9leYxikdV05vjvmfqqplyjZ%2Fk4et6SouCqtllAGCmWCMzT9GZNxLnWrGEGgLNFXxLbP65Y1JuIfzvWI%2BZpm1aOnAL9MWPQ9PuScWAp7RS59JHqTfpcg8%2BgrbkToFWcugy76PTiQkMd3vIvuf8cnBIHmChsdpT%2B5Kbswb9kA%2FDCNMjyf%2FRGAlRVxnpllDnmhqoDVGYYCdw0xG%2FMvf0EuCVJBjlzKrsqXCrHiBt8GsjSUopydCxhYbz6jU%2BVMqWwxulpe%2B7Uv3wIOy%2Fkk1sQLYEbsKoWG%2BMYbTgEG44NBcXs9hdFS4PPuRpBdWVYPu8qSsb5%2B4liV%2FiF4f0MT0cNWU829Aup8SmcdQvD1Oc3O%2Bt5KC8ZB0xnNQNTm3k5uuzECvYM%2BT7ehAzwOk%2BRzttoA5xIWvdkCzC58chU7Ctx0tPZ%2BJXIueRLSkCMRGQZ87RdhiY7g54GmBqrb5X1lGVeoGL8pAFVwwgelJbwgP9eZIhu26GO%2BAbQqWoqukXaj%2BESRFY9UvzjPIN%2BU3%2B9nakP8k8tfjZsWjbNsmtw%2B4O2gaR%2FQEkNPT50THNszZLHdyDKrq1kp79rqaamka3wEWNcGDYzjlDvM4pBr%2FwLy4eTCE55XTBjqkAcetOr1Z%2BJGxZ07YurmdMmgJwkixEO46POH6jFw83t90SxPk0tQ0WOpTm%2F%2BMxTM6jwUHOW39cKM0bQQLhABqyI%2FeLRwpOCCJmonVHTKaA%2Fa6PwgTdWf%2F2gd%2B4LYv0jiZkyIt%2FssPAh4jBwK30xsVdyKdcNTdMOR0jd7EfxmOTcaJLxSkFZhKOjGlMN%2FobHD2pajtPLYiOx1kAxUhuG5aiEuWqrOe&X-Amz-Signature=696b06edc6675953ee4e841b7e4f5a6caf7ee3b41713d373cfb6d9c077bd7ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZBAODTH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEC2RpRlPadZYQ10PyCkYAkyYh%2F2TOJ%2Fdn3H7LukPXNgIhALba3uw9NCW4txboR3EAMTMbDWigE7UNr%2FhNjxD%2FOFyAKv8DCCwQABoMNjM3NDIzMTgzODA1Igxe4LH9l9C51J%2FaPw0q3AN1bWRwzjR6FerAQ9iNaHXN9leYxikdV05vjvmfqqplyjZ%2Fk4et6SouCqtllAGCmWCMzT9GZNxLnWrGEGgLNFXxLbP65Y1JuIfzvWI%2BZpm1aOnAL9MWPQ9PuScWAp7RS59JHqTfpcg8%2BgrbkToFWcugy76PTiQkMd3vIvuf8cnBIHmChsdpT%2B5Kbswb9kA%2FDCNMjyf%2FRGAlRVxnpllDnmhqoDVGYYCdw0xG%2FMvf0EuCVJBjlzKrsqXCrHiBt8GsjSUopydCxhYbz6jU%2BVMqWwxulpe%2B7Uv3wIOy%2Fkk1sQLYEbsKoWG%2BMYbTgEG44NBcXs9hdFS4PPuRpBdWVYPu8qSsb5%2B4liV%2FiF4f0MT0cNWU829Aup8SmcdQvD1Oc3O%2Bt5KC8ZB0xnNQNTm3k5uuzECvYM%2BT7ehAzwOk%2BRzttoA5xIWvdkCzC58chU7Ctx0tPZ%2BJXIueRLSkCMRGQZ87RdhiY7g54GmBqrb5X1lGVeoGL8pAFVwwgelJbwgP9eZIhu26GO%2BAbQqWoqukXaj%2BESRFY9UvzjPIN%2BU3%2B9nakP8k8tfjZsWjbNsmtw%2B4O2gaR%2FQEkNPT50THNszZLHdyDKrq1kp79rqaamka3wEWNcGDYzjlDvM4pBr%2FwLy4eTCE55XTBjqkAcetOr1Z%2BJGxZ07YurmdMmgJwkixEO46POH6jFw83t90SxPk0tQ0WOpTm%2F%2BMxTM6jwUHOW39cKM0bQQLhABqyI%2FeLRwpOCCJmonVHTKaA%2Fa6PwgTdWf%2F2gd%2B4LYv0jiZkyIt%2FssPAh4jBwK30xsVdyKdcNTdMOR0jd7EfxmOTcaJLxSkFZhKOjGlMN%2FobHD2pajtPLYiOx1kAxUhuG5aiEuWqrOe&X-Amz-Signature=ef7221f6ea990c3392588e2636b0abfcda0284eb046365f12c9efe6be6093e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZBAODTH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCEC2RpRlPadZYQ10PyCkYAkyYh%2F2TOJ%2Fdn3H7LukPXNgIhALba3uw9NCW4txboR3EAMTMbDWigE7UNr%2FhNjxD%2FOFyAKv8DCCwQABoMNjM3NDIzMTgzODA1Igxe4LH9l9C51J%2FaPw0q3AN1bWRwzjR6FerAQ9iNaHXN9leYxikdV05vjvmfqqplyjZ%2Fk4et6SouCqtllAGCmWCMzT9GZNxLnWrGEGgLNFXxLbP65Y1JuIfzvWI%2BZpm1aOnAL9MWPQ9PuScWAp7RS59JHqTfpcg8%2BgrbkToFWcugy76PTiQkMd3vIvuf8cnBIHmChsdpT%2B5Kbswb9kA%2FDCNMjyf%2FRGAlRVxnpllDnmhqoDVGYYCdw0xG%2FMvf0EuCVJBjlzKrsqXCrHiBt8GsjSUopydCxhYbz6jU%2BVMqWwxulpe%2B7Uv3wIOy%2Fkk1sQLYEbsKoWG%2BMYbTgEG44NBcXs9hdFS4PPuRpBdWVYPu8qSsb5%2B4liV%2FiF4f0MT0cNWU829Aup8SmcdQvD1Oc3O%2Bt5KC8ZB0xnNQNTm3k5uuzECvYM%2BT7ehAzwOk%2BRzttoA5xIWvdkCzC58chU7Ctx0tPZ%2BJXIueRLSkCMRGQZ87RdhiY7g54GmBqrb5X1lGVeoGL8pAFVwwgelJbwgP9eZIhu26GO%2BAbQqWoqukXaj%2BESRFY9UvzjPIN%2BU3%2B9nakP8k8tfjZsWjbNsmtw%2B4O2gaR%2FQEkNPT50THNszZLHdyDKrq1kp79rqaamka3wEWNcGDYzjlDvM4pBr%2FwLy4eTCE55XTBjqkAcetOr1Z%2BJGxZ07YurmdMmgJwkixEO46POH6jFw83t90SxPk0tQ0WOpTm%2F%2BMxTM6jwUHOW39cKM0bQQLhABqyI%2FeLRwpOCCJmonVHTKaA%2Fa6PwgTdWf%2F2gd%2B4LYv0jiZkyIt%2FssPAh4jBwK30xsVdyKdcNTdMOR0jd7EfxmOTcaJLxSkFZhKOjGlMN%2FobHD2pajtPLYiOx1kAxUhuG5aiEuWqrOe&X-Amz-Signature=384a418712d6f86c33b74fd7d0794c7a28e03100841ca39526cc6a6f14ba5f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
