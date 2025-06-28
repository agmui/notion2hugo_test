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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UBGTIE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4VsYpSp7oMu7nIblGRqdjm8Y%2FBPEO1UkYtVpLNNPMBAiEAouqJueIqnpncOoxq%2FdJC63jBLBW%2BKoH9VgnYNHkEn6sqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNKhkZeUN3N5iRwhircA%2FvDv5FlPSt1HfO1VeX5aEltMIhjisxesPgl0pEFDStU%2Bof0bZNjq4sZ8N%2BhEe04rVIf0Wc1eZ4D4NGfqmT%2FynjLZeAOdd6IMtM0SaTUjEIxktcW4weYcvAnjhaoiOGAoMelUQr4ZwmjMcj6oOcbGGaEKpCwt9AZ9Pq%2BBLr1VkgBRTxQfixsez3kky%2FD6CbrZRUhKkojKYJeKfnUPHWWiMVK9m1uu2LLrWsnStMwbjvQ95DBNO7hylgIVnrTSb6wrcfNnWwWwli7x8pyx12aZl6uFMo3tztY68IR%2Fbptf7skts4EEQOKz0y%2BwTQvNIrC3a3Yx3XLQAWY4W6CljYQq1PSPJna51Y%2BgHRScN%2Bsm1PVXKIOzwom6hQEOuozl%2BVsmBdQ0ie1v63KLJUN6yDGTYrMcuPcWDO5tliOTNxmDe2KS%2FXsLZkeomDDyiEctgRPClWZYn%2F5ITwYfm5WqSdLw1raNnbuFe%2BatZAEtwLQLEPyVc050cWrTUybIkN3bwUvD5ECOUMEvKlicymbywnNdHsqhXHaJYNrmbAKnZCZUGpiNCRy7yq9AdwqysgaKbbFXtBPcEKbpXnSjoz1Z1LUfqAZZnfbT%2F%2FRwSKSXOLMS53%2Fotkf%2FYuBjo3ZpKhfMPDK%2FsIGOqUBzD1xaWriLERstqZjnyonIWosnitjJu5DPDCVu9vvA1dz90UPJfVPNna0X68yZSN4FlvYRetPWtAPcrG458gNWHDsNQmKmzbWnnGkA%2Fvc%2Fwy21dfec%2FKKvCM0AvZtfaB6hEj7y8VGT8aRlDN%2Bz1sw0QfPrkHWojcyF3Ta%2FFvAQMD00PURxvSVuLQZ8Eiluv4XGpFJ6aiWLyRBq79iTjRQcSO10tEw&X-Amz-Signature=0997f1dd14697a613cea14f67c2c1bd967e478238bd1875b97b59921f0e76a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UBGTIE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4VsYpSp7oMu7nIblGRqdjm8Y%2FBPEO1UkYtVpLNNPMBAiEAouqJueIqnpncOoxq%2FdJC63jBLBW%2BKoH9VgnYNHkEn6sqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNKhkZeUN3N5iRwhircA%2FvDv5FlPSt1HfO1VeX5aEltMIhjisxesPgl0pEFDStU%2Bof0bZNjq4sZ8N%2BhEe04rVIf0Wc1eZ4D4NGfqmT%2FynjLZeAOdd6IMtM0SaTUjEIxktcW4weYcvAnjhaoiOGAoMelUQr4ZwmjMcj6oOcbGGaEKpCwt9AZ9Pq%2BBLr1VkgBRTxQfixsez3kky%2FD6CbrZRUhKkojKYJeKfnUPHWWiMVK9m1uu2LLrWsnStMwbjvQ95DBNO7hylgIVnrTSb6wrcfNnWwWwli7x8pyx12aZl6uFMo3tztY68IR%2Fbptf7skts4EEQOKz0y%2BwTQvNIrC3a3Yx3XLQAWY4W6CljYQq1PSPJna51Y%2BgHRScN%2Bsm1PVXKIOzwom6hQEOuozl%2BVsmBdQ0ie1v63KLJUN6yDGTYrMcuPcWDO5tliOTNxmDe2KS%2FXsLZkeomDDyiEctgRPClWZYn%2F5ITwYfm5WqSdLw1raNnbuFe%2BatZAEtwLQLEPyVc050cWrTUybIkN3bwUvD5ECOUMEvKlicymbywnNdHsqhXHaJYNrmbAKnZCZUGpiNCRy7yq9AdwqysgaKbbFXtBPcEKbpXnSjoz1Z1LUfqAZZnfbT%2F%2FRwSKSXOLMS53%2Fotkf%2FYuBjo3ZpKhfMPDK%2FsIGOqUBzD1xaWriLERstqZjnyonIWosnitjJu5DPDCVu9vvA1dz90UPJfVPNna0X68yZSN4FlvYRetPWtAPcrG458gNWHDsNQmKmzbWnnGkA%2Fvc%2Fwy21dfec%2FKKvCM0AvZtfaB6hEj7y8VGT8aRlDN%2Bz1sw0QfPrkHWojcyF3Ta%2FFvAQMD00PURxvSVuLQZ8Eiluv4XGpFJ6aiWLyRBq79iTjRQcSO10tEw&X-Amz-Signature=149e6b9eaf24ad2ea8a268074505895c2e5d1ff63e0f2d1563ced8f1a4801ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UBGTIE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4VsYpSp7oMu7nIblGRqdjm8Y%2FBPEO1UkYtVpLNNPMBAiEAouqJueIqnpncOoxq%2FdJC63jBLBW%2BKoH9VgnYNHkEn6sqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNKhkZeUN3N5iRwhircA%2FvDv5FlPSt1HfO1VeX5aEltMIhjisxesPgl0pEFDStU%2Bof0bZNjq4sZ8N%2BhEe04rVIf0Wc1eZ4D4NGfqmT%2FynjLZeAOdd6IMtM0SaTUjEIxktcW4weYcvAnjhaoiOGAoMelUQr4ZwmjMcj6oOcbGGaEKpCwt9AZ9Pq%2BBLr1VkgBRTxQfixsez3kky%2FD6CbrZRUhKkojKYJeKfnUPHWWiMVK9m1uu2LLrWsnStMwbjvQ95DBNO7hylgIVnrTSb6wrcfNnWwWwli7x8pyx12aZl6uFMo3tztY68IR%2Fbptf7skts4EEQOKz0y%2BwTQvNIrC3a3Yx3XLQAWY4W6CljYQq1PSPJna51Y%2BgHRScN%2Bsm1PVXKIOzwom6hQEOuozl%2BVsmBdQ0ie1v63KLJUN6yDGTYrMcuPcWDO5tliOTNxmDe2KS%2FXsLZkeomDDyiEctgRPClWZYn%2F5ITwYfm5WqSdLw1raNnbuFe%2BatZAEtwLQLEPyVc050cWrTUybIkN3bwUvD5ECOUMEvKlicymbywnNdHsqhXHaJYNrmbAKnZCZUGpiNCRy7yq9AdwqysgaKbbFXtBPcEKbpXnSjoz1Z1LUfqAZZnfbT%2F%2FRwSKSXOLMS53%2Fotkf%2FYuBjo3ZpKhfMPDK%2FsIGOqUBzD1xaWriLERstqZjnyonIWosnitjJu5DPDCVu9vvA1dz90UPJfVPNna0X68yZSN4FlvYRetPWtAPcrG458gNWHDsNQmKmzbWnnGkA%2Fvc%2Fwy21dfec%2FKKvCM0AvZtfaB6hEj7y8VGT8aRlDN%2Bz1sw0QfPrkHWojcyF3Ta%2FFvAQMD00PURxvSVuLQZ8Eiluv4XGpFJ6aiWLyRBq79iTjRQcSO10tEw&X-Amz-Signature=cc28de17d33a9e0767c9028f2ea106b6f5e9c66d7dec6e71b9359271cbf7aa43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UBGTIE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4VsYpSp7oMu7nIblGRqdjm8Y%2FBPEO1UkYtVpLNNPMBAiEAouqJueIqnpncOoxq%2FdJC63jBLBW%2BKoH9VgnYNHkEn6sqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNKhkZeUN3N5iRwhircA%2FvDv5FlPSt1HfO1VeX5aEltMIhjisxesPgl0pEFDStU%2Bof0bZNjq4sZ8N%2BhEe04rVIf0Wc1eZ4D4NGfqmT%2FynjLZeAOdd6IMtM0SaTUjEIxktcW4weYcvAnjhaoiOGAoMelUQr4ZwmjMcj6oOcbGGaEKpCwt9AZ9Pq%2BBLr1VkgBRTxQfixsez3kky%2FD6CbrZRUhKkojKYJeKfnUPHWWiMVK9m1uu2LLrWsnStMwbjvQ95DBNO7hylgIVnrTSb6wrcfNnWwWwli7x8pyx12aZl6uFMo3tztY68IR%2Fbptf7skts4EEQOKz0y%2BwTQvNIrC3a3Yx3XLQAWY4W6CljYQq1PSPJna51Y%2BgHRScN%2Bsm1PVXKIOzwom6hQEOuozl%2BVsmBdQ0ie1v63KLJUN6yDGTYrMcuPcWDO5tliOTNxmDe2KS%2FXsLZkeomDDyiEctgRPClWZYn%2F5ITwYfm5WqSdLw1raNnbuFe%2BatZAEtwLQLEPyVc050cWrTUybIkN3bwUvD5ECOUMEvKlicymbywnNdHsqhXHaJYNrmbAKnZCZUGpiNCRy7yq9AdwqysgaKbbFXtBPcEKbpXnSjoz1Z1LUfqAZZnfbT%2F%2FRwSKSXOLMS53%2Fotkf%2FYuBjo3ZpKhfMPDK%2FsIGOqUBzD1xaWriLERstqZjnyonIWosnitjJu5DPDCVu9vvA1dz90UPJfVPNna0X68yZSN4FlvYRetPWtAPcrG458gNWHDsNQmKmzbWnnGkA%2Fvc%2Fwy21dfec%2FKKvCM0AvZtfaB6hEj7y8VGT8aRlDN%2Bz1sw0QfPrkHWojcyF3Ta%2FFvAQMD00PURxvSVuLQZ8Eiluv4XGpFJ6aiWLyRBq79iTjRQcSO10tEw&X-Amz-Signature=08abb8feca34d7806e623e06474516a3e1686ccdad0542450584afcaeefe0e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UBGTIE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4VsYpSp7oMu7nIblGRqdjm8Y%2FBPEO1UkYtVpLNNPMBAiEAouqJueIqnpncOoxq%2FdJC63jBLBW%2BKoH9VgnYNHkEn6sqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNKhkZeUN3N5iRwhircA%2FvDv5FlPSt1HfO1VeX5aEltMIhjisxesPgl0pEFDStU%2Bof0bZNjq4sZ8N%2BhEe04rVIf0Wc1eZ4D4NGfqmT%2FynjLZeAOdd6IMtM0SaTUjEIxktcW4weYcvAnjhaoiOGAoMelUQr4ZwmjMcj6oOcbGGaEKpCwt9AZ9Pq%2BBLr1VkgBRTxQfixsez3kky%2FD6CbrZRUhKkojKYJeKfnUPHWWiMVK9m1uu2LLrWsnStMwbjvQ95DBNO7hylgIVnrTSb6wrcfNnWwWwli7x8pyx12aZl6uFMo3tztY68IR%2Fbptf7skts4EEQOKz0y%2BwTQvNIrC3a3Yx3XLQAWY4W6CljYQq1PSPJna51Y%2BgHRScN%2Bsm1PVXKIOzwom6hQEOuozl%2BVsmBdQ0ie1v63KLJUN6yDGTYrMcuPcWDO5tliOTNxmDe2KS%2FXsLZkeomDDyiEctgRPClWZYn%2F5ITwYfm5WqSdLw1raNnbuFe%2BatZAEtwLQLEPyVc050cWrTUybIkN3bwUvD5ECOUMEvKlicymbywnNdHsqhXHaJYNrmbAKnZCZUGpiNCRy7yq9AdwqysgaKbbFXtBPcEKbpXnSjoz1Z1LUfqAZZnfbT%2F%2FRwSKSXOLMS53%2Fotkf%2FYuBjo3ZpKhfMPDK%2FsIGOqUBzD1xaWriLERstqZjnyonIWosnitjJu5DPDCVu9vvA1dz90UPJfVPNna0X68yZSN4FlvYRetPWtAPcrG458gNWHDsNQmKmzbWnnGkA%2Fvc%2Fwy21dfec%2FKKvCM0AvZtfaB6hEj7y8VGT8aRlDN%2Bz1sw0QfPrkHWojcyF3Ta%2FFvAQMD00PURxvSVuLQZ8Eiluv4XGpFJ6aiWLyRBq79iTjRQcSO10tEw&X-Amz-Signature=fd8dedabe4233eea53e95813b1c57f1d680f18f17fecf3e816973ae6dc37ba7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UBGTIE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4VsYpSp7oMu7nIblGRqdjm8Y%2FBPEO1UkYtVpLNNPMBAiEAouqJueIqnpncOoxq%2FdJC63jBLBW%2BKoH9VgnYNHkEn6sqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNKhkZeUN3N5iRwhircA%2FvDv5FlPSt1HfO1VeX5aEltMIhjisxesPgl0pEFDStU%2Bof0bZNjq4sZ8N%2BhEe04rVIf0Wc1eZ4D4NGfqmT%2FynjLZeAOdd6IMtM0SaTUjEIxktcW4weYcvAnjhaoiOGAoMelUQr4ZwmjMcj6oOcbGGaEKpCwt9AZ9Pq%2BBLr1VkgBRTxQfixsez3kky%2FD6CbrZRUhKkojKYJeKfnUPHWWiMVK9m1uu2LLrWsnStMwbjvQ95DBNO7hylgIVnrTSb6wrcfNnWwWwli7x8pyx12aZl6uFMo3tztY68IR%2Fbptf7skts4EEQOKz0y%2BwTQvNIrC3a3Yx3XLQAWY4W6CljYQq1PSPJna51Y%2BgHRScN%2Bsm1PVXKIOzwom6hQEOuozl%2BVsmBdQ0ie1v63KLJUN6yDGTYrMcuPcWDO5tliOTNxmDe2KS%2FXsLZkeomDDyiEctgRPClWZYn%2F5ITwYfm5WqSdLw1raNnbuFe%2BatZAEtwLQLEPyVc050cWrTUybIkN3bwUvD5ECOUMEvKlicymbywnNdHsqhXHaJYNrmbAKnZCZUGpiNCRy7yq9AdwqysgaKbbFXtBPcEKbpXnSjoz1Z1LUfqAZZnfbT%2F%2FRwSKSXOLMS53%2Fotkf%2FYuBjo3ZpKhfMPDK%2FsIGOqUBzD1xaWriLERstqZjnyonIWosnitjJu5DPDCVu9vvA1dz90UPJfVPNna0X68yZSN4FlvYRetPWtAPcrG458gNWHDsNQmKmzbWnnGkA%2Fvc%2Fwy21dfec%2FKKvCM0AvZtfaB6hEj7y8VGT8aRlDN%2Bz1sw0QfPrkHWojcyF3Ta%2FFvAQMD00PURxvSVuLQZ8Eiluv4XGpFJ6aiWLyRBq79iTjRQcSO10tEw&X-Amz-Signature=50379cf3d3e87b483a944105e8be8318770e600ebf54a26c6c000cf22148ba96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UBGTIE%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4VsYpSp7oMu7nIblGRqdjm8Y%2FBPEO1UkYtVpLNNPMBAiEAouqJueIqnpncOoxq%2FdJC63jBLBW%2BKoH9VgnYNHkEn6sqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNKhkZeUN3N5iRwhircA%2FvDv5FlPSt1HfO1VeX5aEltMIhjisxesPgl0pEFDStU%2Bof0bZNjq4sZ8N%2BhEe04rVIf0Wc1eZ4D4NGfqmT%2FynjLZeAOdd6IMtM0SaTUjEIxktcW4weYcvAnjhaoiOGAoMelUQr4ZwmjMcj6oOcbGGaEKpCwt9AZ9Pq%2BBLr1VkgBRTxQfixsez3kky%2FD6CbrZRUhKkojKYJeKfnUPHWWiMVK9m1uu2LLrWsnStMwbjvQ95DBNO7hylgIVnrTSb6wrcfNnWwWwli7x8pyx12aZl6uFMo3tztY68IR%2Fbptf7skts4EEQOKz0y%2BwTQvNIrC3a3Yx3XLQAWY4W6CljYQq1PSPJna51Y%2BgHRScN%2Bsm1PVXKIOzwom6hQEOuozl%2BVsmBdQ0ie1v63KLJUN6yDGTYrMcuPcWDO5tliOTNxmDe2KS%2FXsLZkeomDDyiEctgRPClWZYn%2F5ITwYfm5WqSdLw1raNnbuFe%2BatZAEtwLQLEPyVc050cWrTUybIkN3bwUvD5ECOUMEvKlicymbywnNdHsqhXHaJYNrmbAKnZCZUGpiNCRy7yq9AdwqysgaKbbFXtBPcEKbpXnSjoz1Z1LUfqAZZnfbT%2F%2FRwSKSXOLMS53%2Fotkf%2FYuBjo3ZpKhfMPDK%2FsIGOqUBzD1xaWriLERstqZjnyonIWosnitjJu5DPDCVu9vvA1dz90UPJfVPNna0X68yZSN4FlvYRetPWtAPcrG458gNWHDsNQmKmzbWnnGkA%2Fvc%2Fwy21dfec%2FKKvCM0AvZtfaB6hEj7y8VGT8aRlDN%2Bz1sw0QfPrkHWojcyF3Ta%2FFvAQMD00PURxvSVuLQZ8Eiluv4XGpFJ6aiWLyRBq79iTjRQcSO10tEw&X-Amz-Signature=9bd6d390264080431afc0590e5b5b6bd0f3151deade62b7854d029a68c4c15e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
