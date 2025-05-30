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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VXVCDX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdx5%2BrA0bCwkj86Mzsjl163J%2BIYx4RNfc08FW0tydLFgIhAO30jB%2FMiP%2FV%2FfqiV5FwKZ%2Bz4QY03GEwKrPTsC3ZlSPFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU4TXEQ8%2BbY1gLmFcq3AP7yEqzaJ6k6ifI59Vlq6tUlLdPY3678pETFOjRYa9S31tHsyuzyw3UHxL130TiowN55YQTNWJUBk%2B7evUgccnuUk%2B9RNWqDdIid%2FknnoaAgBATvDsrR%2BYEdhXFuwdVReNYuSSHT49SEoGPs2qw3Qk6M9JEasR3TXpbehlQuAHSNvifFSI1WLUO3NClcAmRlYF%2B2B0X1Z5vqW7hDhrJzpviarxZHytjWj4RwUNF5h5%2BojgP3P44jTreKd6jVkAzdKCfJUZrr8%2B357i4SdQZK3HywkezAWH9KAe39WMBF0bkXPTNv55oOs9WC4znOsmrqkflQ5YHtIOj%2B%2F1%2BLCOH3afk35KvY4TfW4lWhjKfaUu8ULjtVEgPYgtcTMmKIO4Ww4PggMdAC5%2FkRtL1JH10mlcib4R6ouKASDwb4dMbMXp%2BLE55mo1UtKjd7Cx3rXgGMdQuyG52SSP7a4pATkf466sLDuifpSDvV%2FtwhWtMaipsg7lFK1GO%2BJYvXfIFbaJz1SYSRg4NmJNyXVKEgyPTAe1aua%2B6roR621vdTuAHs9NDR%2Bpvmi8HvIiXFWI9JWPOyr%2F8nwe1Md48VcMeWfWrAdg6T%2B7OkPHYfcC5EmDh9vvcoOQw9Rdtrj6J17kA8jDZ8ubBBjqkAQfUTDipFdn2JWj%2BMcm2B10rIBdu5JTRRmcJugPzkl2tmPzdH%2FhMEuvnAZCXFQ%2BrcfEAKuEMfTcWGUKXcScCj5V%2F979R%2F2aNxsm%2FIp99xCuX5nIK73ZPzOgjeiq6BMJRvY%2BYqurOTiMj%2Fmg6YFha8Q2OxIP8vlDPkjWl7LPSPN7tUUxXQ9iyf6d7mge8XUP2BXrxBObOsuKdqA9BXaszSgXyrSEx&X-Amz-Signature=8148eefad798ecf46443bd09f43becdd19da56a9306cbc5c634984b6b7c3c803&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VXVCDX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdx5%2BrA0bCwkj86Mzsjl163J%2BIYx4RNfc08FW0tydLFgIhAO30jB%2FMiP%2FV%2FfqiV5FwKZ%2Bz4QY03GEwKrPTsC3ZlSPFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU4TXEQ8%2BbY1gLmFcq3AP7yEqzaJ6k6ifI59Vlq6tUlLdPY3678pETFOjRYa9S31tHsyuzyw3UHxL130TiowN55YQTNWJUBk%2B7evUgccnuUk%2B9RNWqDdIid%2FknnoaAgBATvDsrR%2BYEdhXFuwdVReNYuSSHT49SEoGPs2qw3Qk6M9JEasR3TXpbehlQuAHSNvifFSI1WLUO3NClcAmRlYF%2B2B0X1Z5vqW7hDhrJzpviarxZHytjWj4RwUNF5h5%2BojgP3P44jTreKd6jVkAzdKCfJUZrr8%2B357i4SdQZK3HywkezAWH9KAe39WMBF0bkXPTNv55oOs9WC4znOsmrqkflQ5YHtIOj%2B%2F1%2BLCOH3afk35KvY4TfW4lWhjKfaUu8ULjtVEgPYgtcTMmKIO4Ww4PggMdAC5%2FkRtL1JH10mlcib4R6ouKASDwb4dMbMXp%2BLE55mo1UtKjd7Cx3rXgGMdQuyG52SSP7a4pATkf466sLDuifpSDvV%2FtwhWtMaipsg7lFK1GO%2BJYvXfIFbaJz1SYSRg4NmJNyXVKEgyPTAe1aua%2B6roR621vdTuAHs9NDR%2Bpvmi8HvIiXFWI9JWPOyr%2F8nwe1Md48VcMeWfWrAdg6T%2B7OkPHYfcC5EmDh9vvcoOQw9Rdtrj6J17kA8jDZ8ubBBjqkAQfUTDipFdn2JWj%2BMcm2B10rIBdu5JTRRmcJugPzkl2tmPzdH%2FhMEuvnAZCXFQ%2BrcfEAKuEMfTcWGUKXcScCj5V%2F979R%2F2aNxsm%2FIp99xCuX5nIK73ZPzOgjeiq6BMJRvY%2BYqurOTiMj%2Fmg6YFha8Q2OxIP8vlDPkjWl7LPSPN7tUUxXQ9iyf6d7mge8XUP2BXrxBObOsuKdqA9BXaszSgXyrSEx&X-Amz-Signature=ece8cdb9281e4c9956f211020956c4bd9ebfeace6515adbe124236afcaae2f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VXVCDX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdx5%2BrA0bCwkj86Mzsjl163J%2BIYx4RNfc08FW0tydLFgIhAO30jB%2FMiP%2FV%2FfqiV5FwKZ%2Bz4QY03GEwKrPTsC3ZlSPFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU4TXEQ8%2BbY1gLmFcq3AP7yEqzaJ6k6ifI59Vlq6tUlLdPY3678pETFOjRYa9S31tHsyuzyw3UHxL130TiowN55YQTNWJUBk%2B7evUgccnuUk%2B9RNWqDdIid%2FknnoaAgBATvDsrR%2BYEdhXFuwdVReNYuSSHT49SEoGPs2qw3Qk6M9JEasR3TXpbehlQuAHSNvifFSI1WLUO3NClcAmRlYF%2B2B0X1Z5vqW7hDhrJzpviarxZHytjWj4RwUNF5h5%2BojgP3P44jTreKd6jVkAzdKCfJUZrr8%2B357i4SdQZK3HywkezAWH9KAe39WMBF0bkXPTNv55oOs9WC4znOsmrqkflQ5YHtIOj%2B%2F1%2BLCOH3afk35KvY4TfW4lWhjKfaUu8ULjtVEgPYgtcTMmKIO4Ww4PggMdAC5%2FkRtL1JH10mlcib4R6ouKASDwb4dMbMXp%2BLE55mo1UtKjd7Cx3rXgGMdQuyG52SSP7a4pATkf466sLDuifpSDvV%2FtwhWtMaipsg7lFK1GO%2BJYvXfIFbaJz1SYSRg4NmJNyXVKEgyPTAe1aua%2B6roR621vdTuAHs9NDR%2Bpvmi8HvIiXFWI9JWPOyr%2F8nwe1Md48VcMeWfWrAdg6T%2B7OkPHYfcC5EmDh9vvcoOQw9Rdtrj6J17kA8jDZ8ubBBjqkAQfUTDipFdn2JWj%2BMcm2B10rIBdu5JTRRmcJugPzkl2tmPzdH%2FhMEuvnAZCXFQ%2BrcfEAKuEMfTcWGUKXcScCj5V%2F979R%2F2aNxsm%2FIp99xCuX5nIK73ZPzOgjeiq6BMJRvY%2BYqurOTiMj%2Fmg6YFha8Q2OxIP8vlDPkjWl7LPSPN7tUUxXQ9iyf6d7mge8XUP2BXrxBObOsuKdqA9BXaszSgXyrSEx&X-Amz-Signature=edae830b55e58442cb150e200a07645bc47bcf846997349b9e65985209b455ac&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VXVCDX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdx5%2BrA0bCwkj86Mzsjl163J%2BIYx4RNfc08FW0tydLFgIhAO30jB%2FMiP%2FV%2FfqiV5FwKZ%2Bz4QY03GEwKrPTsC3ZlSPFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU4TXEQ8%2BbY1gLmFcq3AP7yEqzaJ6k6ifI59Vlq6tUlLdPY3678pETFOjRYa9S31tHsyuzyw3UHxL130TiowN55YQTNWJUBk%2B7evUgccnuUk%2B9RNWqDdIid%2FknnoaAgBATvDsrR%2BYEdhXFuwdVReNYuSSHT49SEoGPs2qw3Qk6M9JEasR3TXpbehlQuAHSNvifFSI1WLUO3NClcAmRlYF%2B2B0X1Z5vqW7hDhrJzpviarxZHytjWj4RwUNF5h5%2BojgP3P44jTreKd6jVkAzdKCfJUZrr8%2B357i4SdQZK3HywkezAWH9KAe39WMBF0bkXPTNv55oOs9WC4znOsmrqkflQ5YHtIOj%2B%2F1%2BLCOH3afk35KvY4TfW4lWhjKfaUu8ULjtVEgPYgtcTMmKIO4Ww4PggMdAC5%2FkRtL1JH10mlcib4R6ouKASDwb4dMbMXp%2BLE55mo1UtKjd7Cx3rXgGMdQuyG52SSP7a4pATkf466sLDuifpSDvV%2FtwhWtMaipsg7lFK1GO%2BJYvXfIFbaJz1SYSRg4NmJNyXVKEgyPTAe1aua%2B6roR621vdTuAHs9NDR%2Bpvmi8HvIiXFWI9JWPOyr%2F8nwe1Md48VcMeWfWrAdg6T%2B7OkPHYfcC5EmDh9vvcoOQw9Rdtrj6J17kA8jDZ8ubBBjqkAQfUTDipFdn2JWj%2BMcm2B10rIBdu5JTRRmcJugPzkl2tmPzdH%2FhMEuvnAZCXFQ%2BrcfEAKuEMfTcWGUKXcScCj5V%2F979R%2F2aNxsm%2FIp99xCuX5nIK73ZPzOgjeiq6BMJRvY%2BYqurOTiMj%2Fmg6YFha8Q2OxIP8vlDPkjWl7LPSPN7tUUxXQ9iyf6d7mge8XUP2BXrxBObOsuKdqA9BXaszSgXyrSEx&X-Amz-Signature=7498900b5c2a030eeaeabe37c4b681cd18739f0e30d4982126bfd10e98f0140c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VXVCDX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdx5%2BrA0bCwkj86Mzsjl163J%2BIYx4RNfc08FW0tydLFgIhAO30jB%2FMiP%2FV%2FfqiV5FwKZ%2Bz4QY03GEwKrPTsC3ZlSPFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU4TXEQ8%2BbY1gLmFcq3AP7yEqzaJ6k6ifI59Vlq6tUlLdPY3678pETFOjRYa9S31tHsyuzyw3UHxL130TiowN55YQTNWJUBk%2B7evUgccnuUk%2B9RNWqDdIid%2FknnoaAgBATvDsrR%2BYEdhXFuwdVReNYuSSHT49SEoGPs2qw3Qk6M9JEasR3TXpbehlQuAHSNvifFSI1WLUO3NClcAmRlYF%2B2B0X1Z5vqW7hDhrJzpviarxZHytjWj4RwUNF5h5%2BojgP3P44jTreKd6jVkAzdKCfJUZrr8%2B357i4SdQZK3HywkezAWH9KAe39WMBF0bkXPTNv55oOs9WC4znOsmrqkflQ5YHtIOj%2B%2F1%2BLCOH3afk35KvY4TfW4lWhjKfaUu8ULjtVEgPYgtcTMmKIO4Ww4PggMdAC5%2FkRtL1JH10mlcib4R6ouKASDwb4dMbMXp%2BLE55mo1UtKjd7Cx3rXgGMdQuyG52SSP7a4pATkf466sLDuifpSDvV%2FtwhWtMaipsg7lFK1GO%2BJYvXfIFbaJz1SYSRg4NmJNyXVKEgyPTAe1aua%2B6roR621vdTuAHs9NDR%2Bpvmi8HvIiXFWI9JWPOyr%2F8nwe1Md48VcMeWfWrAdg6T%2B7OkPHYfcC5EmDh9vvcoOQw9Rdtrj6J17kA8jDZ8ubBBjqkAQfUTDipFdn2JWj%2BMcm2B10rIBdu5JTRRmcJugPzkl2tmPzdH%2FhMEuvnAZCXFQ%2BrcfEAKuEMfTcWGUKXcScCj5V%2F979R%2F2aNxsm%2FIp99xCuX5nIK73ZPzOgjeiq6BMJRvY%2BYqurOTiMj%2Fmg6YFha8Q2OxIP8vlDPkjWl7LPSPN7tUUxXQ9iyf6d7mge8XUP2BXrxBObOsuKdqA9BXaszSgXyrSEx&X-Amz-Signature=80151cf1c7d34e4a526fa08e3fb4a947ccbc56e279ec96f97fe2d9a374c8d5a9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VXVCDX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdx5%2BrA0bCwkj86Mzsjl163J%2BIYx4RNfc08FW0tydLFgIhAO30jB%2FMiP%2FV%2FfqiV5FwKZ%2Bz4QY03GEwKrPTsC3ZlSPFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU4TXEQ8%2BbY1gLmFcq3AP7yEqzaJ6k6ifI59Vlq6tUlLdPY3678pETFOjRYa9S31tHsyuzyw3UHxL130TiowN55YQTNWJUBk%2B7evUgccnuUk%2B9RNWqDdIid%2FknnoaAgBATvDsrR%2BYEdhXFuwdVReNYuSSHT49SEoGPs2qw3Qk6M9JEasR3TXpbehlQuAHSNvifFSI1WLUO3NClcAmRlYF%2B2B0X1Z5vqW7hDhrJzpviarxZHytjWj4RwUNF5h5%2BojgP3P44jTreKd6jVkAzdKCfJUZrr8%2B357i4SdQZK3HywkezAWH9KAe39WMBF0bkXPTNv55oOs9WC4znOsmrqkflQ5YHtIOj%2B%2F1%2BLCOH3afk35KvY4TfW4lWhjKfaUu8ULjtVEgPYgtcTMmKIO4Ww4PggMdAC5%2FkRtL1JH10mlcib4R6ouKASDwb4dMbMXp%2BLE55mo1UtKjd7Cx3rXgGMdQuyG52SSP7a4pATkf466sLDuifpSDvV%2FtwhWtMaipsg7lFK1GO%2BJYvXfIFbaJz1SYSRg4NmJNyXVKEgyPTAe1aua%2B6roR621vdTuAHs9NDR%2Bpvmi8HvIiXFWI9JWPOyr%2F8nwe1Md48VcMeWfWrAdg6T%2B7OkPHYfcC5EmDh9vvcoOQw9Rdtrj6J17kA8jDZ8ubBBjqkAQfUTDipFdn2JWj%2BMcm2B10rIBdu5JTRRmcJugPzkl2tmPzdH%2FhMEuvnAZCXFQ%2BrcfEAKuEMfTcWGUKXcScCj5V%2F979R%2F2aNxsm%2FIp99xCuX5nIK73ZPzOgjeiq6BMJRvY%2BYqurOTiMj%2Fmg6YFha8Q2OxIP8vlDPkjWl7LPSPN7tUUxXQ9iyf6d7mge8XUP2BXrxBObOsuKdqA9BXaszSgXyrSEx&X-Amz-Signature=e66cd3f1c24939904e8a54b9a6843ad2f194971ecac6c50807a97aefac2b9bc3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VXVCDX%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdx5%2BrA0bCwkj86Mzsjl163J%2BIYx4RNfc08FW0tydLFgIhAO30jB%2FMiP%2FV%2FfqiV5FwKZ%2Bz4QY03GEwKrPTsC3ZlSPFKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU4TXEQ8%2BbY1gLmFcq3AP7yEqzaJ6k6ifI59Vlq6tUlLdPY3678pETFOjRYa9S31tHsyuzyw3UHxL130TiowN55YQTNWJUBk%2B7evUgccnuUk%2B9RNWqDdIid%2FknnoaAgBATvDsrR%2BYEdhXFuwdVReNYuSSHT49SEoGPs2qw3Qk6M9JEasR3TXpbehlQuAHSNvifFSI1WLUO3NClcAmRlYF%2B2B0X1Z5vqW7hDhrJzpviarxZHytjWj4RwUNF5h5%2BojgP3P44jTreKd6jVkAzdKCfJUZrr8%2B357i4SdQZK3HywkezAWH9KAe39WMBF0bkXPTNv55oOs9WC4znOsmrqkflQ5YHtIOj%2B%2F1%2BLCOH3afk35KvY4TfW4lWhjKfaUu8ULjtVEgPYgtcTMmKIO4Ww4PggMdAC5%2FkRtL1JH10mlcib4R6ouKASDwb4dMbMXp%2BLE55mo1UtKjd7Cx3rXgGMdQuyG52SSP7a4pATkf466sLDuifpSDvV%2FtwhWtMaipsg7lFK1GO%2BJYvXfIFbaJz1SYSRg4NmJNyXVKEgyPTAe1aua%2B6roR621vdTuAHs9NDR%2Bpvmi8HvIiXFWI9JWPOyr%2F8nwe1Md48VcMeWfWrAdg6T%2B7OkPHYfcC5EmDh9vvcoOQw9Rdtrj6J17kA8jDZ8ubBBjqkAQfUTDipFdn2JWj%2BMcm2B10rIBdu5JTRRmcJugPzkl2tmPzdH%2FhMEuvnAZCXFQ%2BrcfEAKuEMfTcWGUKXcScCj5V%2F979R%2F2aNxsm%2FIp99xCuX5nIK73ZPzOgjeiq6BMJRvY%2BYqurOTiMj%2Fmg6YFha8Q2OxIP8vlDPkjWl7LPSPN7tUUxXQ9iyf6d7mge8XUP2BXrxBObOsuKdqA9BXaszSgXyrSEx&X-Amz-Signature=637724ce74e196bfcd4802a74cb32d47e5464a88f7558d7e2420361a28c44f02&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
