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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2DG2KP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICq3zs80BD7plUBvB%2BdVqjjlRFMdUaw6DEN9MNYye7j3AiBfPehdUkj%2FOg6P6sdYPDWDXD56KUeCCcJTvJ35chh3uir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOCZZjGVglDYxZ1qxKtwDMFhZB3HLIsnOWY48sU79KBS07XPF1j4IVWOl1ta69MZl9F6yNvwiioex9pW%2BGm4PwvUBFdIWu3wNHEe7myxJzxlGRtf654rttA9W2RdI8chM00zftWFOucvJ5PNA76vF8pU6oJ%2BjM%2BdYN9bLckQaSrlyDSIegfYAoJECY34Ur%2FsYF04l33TRKriqwYt7ghN6gjeHSkJV7QlqXjk2RHdavejFGf6lNaOmK8cZQbFsizNZkWaMxRw4QAFyba031oV9MeIiWVKLIAhtnI%2FMCpy%2FmftjVudYpRM%2FCBlR79XxBymSt85C4ZVOJSU3qbLgFpZ0g0YrlMUjeCT%2FcmOqGJg44LtQPRuAdsHAHyV6ITWVJebkTwjVNPP7fwUIhM5owvhYi2Hto7YgSqSSfugF7UqNT%2BIwAsUe9tgURrzASRzXqzFrIswDQImiIOecLK1sTmd63iBbhCpOonsspM9jmCrNbNRY0fQHuVMGEx0yJNao7nm4tgOsZKHvcUnzZ251XyHCcf33As5UybeCPb7ropkc%2FtMk087jWGeOF3hdgsi16uU%2FsyoiBUrkpDjNnxoXxGVaOYw9PuZISH5FBaSsN4siETDKdtZAOBpr4STeVEPXqLVCtlTfEMej9nO%2Fg2IwvP%2B4wgY6pgHQouCVfn0ZR4qYR9xdXVI8OvAvJWh5PGjzBiGfMN2q8RLDVeRMf9v5A9p1g59EO3MkNvMR9%2FSiXsOsbll6vNZhq22fVKQbbKsXJmM36WitYKlIFCs4%2FJuXFR68lFzY0n5H0qHmpjLdXwslDIWIvddbFcHj9FjUEuepWumGF5l9XbksVv2wvcwsEavDRkkU%2FOGq%2FSyHCwiSMDkYO9%2BtkHEHwI%2BhYtTF&X-Amz-Signature=92bdf623c9d7400efd37e48d000028691e3e733ebf43462173c32c11f0a40016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2DG2KP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICq3zs80BD7plUBvB%2BdVqjjlRFMdUaw6DEN9MNYye7j3AiBfPehdUkj%2FOg6P6sdYPDWDXD56KUeCCcJTvJ35chh3uir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOCZZjGVglDYxZ1qxKtwDMFhZB3HLIsnOWY48sU79KBS07XPF1j4IVWOl1ta69MZl9F6yNvwiioex9pW%2BGm4PwvUBFdIWu3wNHEe7myxJzxlGRtf654rttA9W2RdI8chM00zftWFOucvJ5PNA76vF8pU6oJ%2BjM%2BdYN9bLckQaSrlyDSIegfYAoJECY34Ur%2FsYF04l33TRKriqwYt7ghN6gjeHSkJV7QlqXjk2RHdavejFGf6lNaOmK8cZQbFsizNZkWaMxRw4QAFyba031oV9MeIiWVKLIAhtnI%2FMCpy%2FmftjVudYpRM%2FCBlR79XxBymSt85C4ZVOJSU3qbLgFpZ0g0YrlMUjeCT%2FcmOqGJg44LtQPRuAdsHAHyV6ITWVJebkTwjVNPP7fwUIhM5owvhYi2Hto7YgSqSSfugF7UqNT%2BIwAsUe9tgURrzASRzXqzFrIswDQImiIOecLK1sTmd63iBbhCpOonsspM9jmCrNbNRY0fQHuVMGEx0yJNao7nm4tgOsZKHvcUnzZ251XyHCcf33As5UybeCPb7ropkc%2FtMk087jWGeOF3hdgsi16uU%2FsyoiBUrkpDjNnxoXxGVaOYw9PuZISH5FBaSsN4siETDKdtZAOBpr4STeVEPXqLVCtlTfEMej9nO%2Fg2IwvP%2B4wgY6pgHQouCVfn0ZR4qYR9xdXVI8OvAvJWh5PGjzBiGfMN2q8RLDVeRMf9v5A9p1g59EO3MkNvMR9%2FSiXsOsbll6vNZhq22fVKQbbKsXJmM36WitYKlIFCs4%2FJuXFR68lFzY0n5H0qHmpjLdXwslDIWIvddbFcHj9FjUEuepWumGF5l9XbksVv2wvcwsEavDRkkU%2FOGq%2FSyHCwiSMDkYO9%2BtkHEHwI%2BhYtTF&X-Amz-Signature=6740bf15bc1582c9a20af0dfd8f5cae8d5982b049c5ac54c3067362dd8000588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2DG2KP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICq3zs80BD7plUBvB%2BdVqjjlRFMdUaw6DEN9MNYye7j3AiBfPehdUkj%2FOg6P6sdYPDWDXD56KUeCCcJTvJ35chh3uir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOCZZjGVglDYxZ1qxKtwDMFhZB3HLIsnOWY48sU79KBS07XPF1j4IVWOl1ta69MZl9F6yNvwiioex9pW%2BGm4PwvUBFdIWu3wNHEe7myxJzxlGRtf654rttA9W2RdI8chM00zftWFOucvJ5PNA76vF8pU6oJ%2BjM%2BdYN9bLckQaSrlyDSIegfYAoJECY34Ur%2FsYF04l33TRKriqwYt7ghN6gjeHSkJV7QlqXjk2RHdavejFGf6lNaOmK8cZQbFsizNZkWaMxRw4QAFyba031oV9MeIiWVKLIAhtnI%2FMCpy%2FmftjVudYpRM%2FCBlR79XxBymSt85C4ZVOJSU3qbLgFpZ0g0YrlMUjeCT%2FcmOqGJg44LtQPRuAdsHAHyV6ITWVJebkTwjVNPP7fwUIhM5owvhYi2Hto7YgSqSSfugF7UqNT%2BIwAsUe9tgURrzASRzXqzFrIswDQImiIOecLK1sTmd63iBbhCpOonsspM9jmCrNbNRY0fQHuVMGEx0yJNao7nm4tgOsZKHvcUnzZ251XyHCcf33As5UybeCPb7ropkc%2FtMk087jWGeOF3hdgsi16uU%2FsyoiBUrkpDjNnxoXxGVaOYw9PuZISH5FBaSsN4siETDKdtZAOBpr4STeVEPXqLVCtlTfEMej9nO%2Fg2IwvP%2B4wgY6pgHQouCVfn0ZR4qYR9xdXVI8OvAvJWh5PGjzBiGfMN2q8RLDVeRMf9v5A9p1g59EO3MkNvMR9%2FSiXsOsbll6vNZhq22fVKQbbKsXJmM36WitYKlIFCs4%2FJuXFR68lFzY0n5H0qHmpjLdXwslDIWIvddbFcHj9FjUEuepWumGF5l9XbksVv2wvcwsEavDRkkU%2FOGq%2FSyHCwiSMDkYO9%2BtkHEHwI%2BhYtTF&X-Amz-Signature=1e5638421dbf015730e9b160c73ed1811721403ab78477f343aa645f2a3b8076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2DG2KP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICq3zs80BD7plUBvB%2BdVqjjlRFMdUaw6DEN9MNYye7j3AiBfPehdUkj%2FOg6P6sdYPDWDXD56KUeCCcJTvJ35chh3uir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOCZZjGVglDYxZ1qxKtwDMFhZB3HLIsnOWY48sU79KBS07XPF1j4IVWOl1ta69MZl9F6yNvwiioex9pW%2BGm4PwvUBFdIWu3wNHEe7myxJzxlGRtf654rttA9W2RdI8chM00zftWFOucvJ5PNA76vF8pU6oJ%2BjM%2BdYN9bLckQaSrlyDSIegfYAoJECY34Ur%2FsYF04l33TRKriqwYt7ghN6gjeHSkJV7QlqXjk2RHdavejFGf6lNaOmK8cZQbFsizNZkWaMxRw4QAFyba031oV9MeIiWVKLIAhtnI%2FMCpy%2FmftjVudYpRM%2FCBlR79XxBymSt85C4ZVOJSU3qbLgFpZ0g0YrlMUjeCT%2FcmOqGJg44LtQPRuAdsHAHyV6ITWVJebkTwjVNPP7fwUIhM5owvhYi2Hto7YgSqSSfugF7UqNT%2BIwAsUe9tgURrzASRzXqzFrIswDQImiIOecLK1sTmd63iBbhCpOonsspM9jmCrNbNRY0fQHuVMGEx0yJNao7nm4tgOsZKHvcUnzZ251XyHCcf33As5UybeCPb7ropkc%2FtMk087jWGeOF3hdgsi16uU%2FsyoiBUrkpDjNnxoXxGVaOYw9PuZISH5FBaSsN4siETDKdtZAOBpr4STeVEPXqLVCtlTfEMej9nO%2Fg2IwvP%2B4wgY6pgHQouCVfn0ZR4qYR9xdXVI8OvAvJWh5PGjzBiGfMN2q8RLDVeRMf9v5A9p1g59EO3MkNvMR9%2FSiXsOsbll6vNZhq22fVKQbbKsXJmM36WitYKlIFCs4%2FJuXFR68lFzY0n5H0qHmpjLdXwslDIWIvddbFcHj9FjUEuepWumGF5l9XbksVv2wvcwsEavDRkkU%2FOGq%2FSyHCwiSMDkYO9%2BtkHEHwI%2BhYtTF&X-Amz-Signature=f88a69ec7c26ea5865ba15a74041e456d8a1110fe1cd28fade8204049d300567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2DG2KP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICq3zs80BD7plUBvB%2BdVqjjlRFMdUaw6DEN9MNYye7j3AiBfPehdUkj%2FOg6P6sdYPDWDXD56KUeCCcJTvJ35chh3uir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOCZZjGVglDYxZ1qxKtwDMFhZB3HLIsnOWY48sU79KBS07XPF1j4IVWOl1ta69MZl9F6yNvwiioex9pW%2BGm4PwvUBFdIWu3wNHEe7myxJzxlGRtf654rttA9W2RdI8chM00zftWFOucvJ5PNA76vF8pU6oJ%2BjM%2BdYN9bLckQaSrlyDSIegfYAoJECY34Ur%2FsYF04l33TRKriqwYt7ghN6gjeHSkJV7QlqXjk2RHdavejFGf6lNaOmK8cZQbFsizNZkWaMxRw4QAFyba031oV9MeIiWVKLIAhtnI%2FMCpy%2FmftjVudYpRM%2FCBlR79XxBymSt85C4ZVOJSU3qbLgFpZ0g0YrlMUjeCT%2FcmOqGJg44LtQPRuAdsHAHyV6ITWVJebkTwjVNPP7fwUIhM5owvhYi2Hto7YgSqSSfugF7UqNT%2BIwAsUe9tgURrzASRzXqzFrIswDQImiIOecLK1sTmd63iBbhCpOonsspM9jmCrNbNRY0fQHuVMGEx0yJNao7nm4tgOsZKHvcUnzZ251XyHCcf33As5UybeCPb7ropkc%2FtMk087jWGeOF3hdgsi16uU%2FsyoiBUrkpDjNnxoXxGVaOYw9PuZISH5FBaSsN4siETDKdtZAOBpr4STeVEPXqLVCtlTfEMej9nO%2Fg2IwvP%2B4wgY6pgHQouCVfn0ZR4qYR9xdXVI8OvAvJWh5PGjzBiGfMN2q8RLDVeRMf9v5A9p1g59EO3MkNvMR9%2FSiXsOsbll6vNZhq22fVKQbbKsXJmM36WitYKlIFCs4%2FJuXFR68lFzY0n5H0qHmpjLdXwslDIWIvddbFcHj9FjUEuepWumGF5l9XbksVv2wvcwsEavDRkkU%2FOGq%2FSyHCwiSMDkYO9%2BtkHEHwI%2BhYtTF&X-Amz-Signature=64c25289260d86c19a51f7ec9a27f3204b644a05f51b1d85b0e1cb8297fc8255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2DG2KP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICq3zs80BD7plUBvB%2BdVqjjlRFMdUaw6DEN9MNYye7j3AiBfPehdUkj%2FOg6P6sdYPDWDXD56KUeCCcJTvJ35chh3uir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOCZZjGVglDYxZ1qxKtwDMFhZB3HLIsnOWY48sU79KBS07XPF1j4IVWOl1ta69MZl9F6yNvwiioex9pW%2BGm4PwvUBFdIWu3wNHEe7myxJzxlGRtf654rttA9W2RdI8chM00zftWFOucvJ5PNA76vF8pU6oJ%2BjM%2BdYN9bLckQaSrlyDSIegfYAoJECY34Ur%2FsYF04l33TRKriqwYt7ghN6gjeHSkJV7QlqXjk2RHdavejFGf6lNaOmK8cZQbFsizNZkWaMxRw4QAFyba031oV9MeIiWVKLIAhtnI%2FMCpy%2FmftjVudYpRM%2FCBlR79XxBymSt85C4ZVOJSU3qbLgFpZ0g0YrlMUjeCT%2FcmOqGJg44LtQPRuAdsHAHyV6ITWVJebkTwjVNPP7fwUIhM5owvhYi2Hto7YgSqSSfugF7UqNT%2BIwAsUe9tgURrzASRzXqzFrIswDQImiIOecLK1sTmd63iBbhCpOonsspM9jmCrNbNRY0fQHuVMGEx0yJNao7nm4tgOsZKHvcUnzZ251XyHCcf33As5UybeCPb7ropkc%2FtMk087jWGeOF3hdgsi16uU%2FsyoiBUrkpDjNnxoXxGVaOYw9PuZISH5FBaSsN4siETDKdtZAOBpr4STeVEPXqLVCtlTfEMej9nO%2Fg2IwvP%2B4wgY6pgHQouCVfn0ZR4qYR9xdXVI8OvAvJWh5PGjzBiGfMN2q8RLDVeRMf9v5A9p1g59EO3MkNvMR9%2FSiXsOsbll6vNZhq22fVKQbbKsXJmM36WitYKlIFCs4%2FJuXFR68lFzY0n5H0qHmpjLdXwslDIWIvddbFcHj9FjUEuepWumGF5l9XbksVv2wvcwsEavDRkkU%2FOGq%2FSyHCwiSMDkYO9%2BtkHEHwI%2BhYtTF&X-Amz-Signature=d1a5fdfaaa0b1ffabcf50d633f43df6b2ad0f33af007d91bdf3f2abf4fc48c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2DG2KP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICq3zs80BD7plUBvB%2BdVqjjlRFMdUaw6DEN9MNYye7j3AiBfPehdUkj%2FOg6P6sdYPDWDXD56KUeCCcJTvJ35chh3uir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMOCZZjGVglDYxZ1qxKtwDMFhZB3HLIsnOWY48sU79KBS07XPF1j4IVWOl1ta69MZl9F6yNvwiioex9pW%2BGm4PwvUBFdIWu3wNHEe7myxJzxlGRtf654rttA9W2RdI8chM00zftWFOucvJ5PNA76vF8pU6oJ%2BjM%2BdYN9bLckQaSrlyDSIegfYAoJECY34Ur%2FsYF04l33TRKriqwYt7ghN6gjeHSkJV7QlqXjk2RHdavejFGf6lNaOmK8cZQbFsizNZkWaMxRw4QAFyba031oV9MeIiWVKLIAhtnI%2FMCpy%2FmftjVudYpRM%2FCBlR79XxBymSt85C4ZVOJSU3qbLgFpZ0g0YrlMUjeCT%2FcmOqGJg44LtQPRuAdsHAHyV6ITWVJebkTwjVNPP7fwUIhM5owvhYi2Hto7YgSqSSfugF7UqNT%2BIwAsUe9tgURrzASRzXqzFrIswDQImiIOecLK1sTmd63iBbhCpOonsspM9jmCrNbNRY0fQHuVMGEx0yJNao7nm4tgOsZKHvcUnzZ251XyHCcf33As5UybeCPb7ropkc%2FtMk087jWGeOF3hdgsi16uU%2FsyoiBUrkpDjNnxoXxGVaOYw9PuZISH5FBaSsN4siETDKdtZAOBpr4STeVEPXqLVCtlTfEMej9nO%2Fg2IwvP%2B4wgY6pgHQouCVfn0ZR4qYR9xdXVI8OvAvJWh5PGjzBiGfMN2q8RLDVeRMf9v5A9p1g59EO3MkNvMR9%2FSiXsOsbll6vNZhq22fVKQbbKsXJmM36WitYKlIFCs4%2FJuXFR68lFzY0n5H0qHmpjLdXwslDIWIvddbFcHj9FjUEuepWumGF5l9XbksVv2wvcwsEavDRkkU%2FOGq%2FSyHCwiSMDkYO9%2BtkHEHwI%2BhYtTF&X-Amz-Signature=b6e229a869375753cad90bb6b964b72024ded222b5cfb66ef3dd86a5c8a4da28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
