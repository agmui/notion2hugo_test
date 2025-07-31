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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z55R4QCZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW2WBmoafmqmRRkvAIKdSXWE%2F2XyQx671u%2BSwm9nJT7AiEAzmFh6hcrz3%2FAHOtYXD%2B3LcJ9rBZDz3ob%2FIyu6%2BhXw2UqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeuL1Lfd1dpzgCt%2BCrcA%2Bl0r9MFILetcGdEN0EQSKkcN0OAWw4YWniKC2eZIRb%2BRbxZVsRRWg1LGzHzmkwh6kNkS53mtwVToRcqconNb722Hc5WM2BIGNmM9CmqE%2Bj4u84mPPbq2K%2FRVvJ0%2BZoow6JsLaChOlJRrzX1xea7CquTVXy2DyfJdATCRA5qE%2FHOS9CdlqS6gG8Mh0rQuDsHeTQcrImoEknWY56zi7sagPPfxJ4DZRSlit9sLRQBAgXSv1Jh4o5xwO%2FWup3Huw0WkUjBJAIyfw9ApPtZNJ8MVsWe9mk3EswK%2Febi4E4hCFdGA29NRI7AYh%2BgrL3cJdv2ofOx8HpACOXUwVgyCdOkwnCUcim2ZhDw%2Fb9%2B3tniXKmgb%2FUTNDW%2B6ma7P%2FANK7cygHhQksAia%2BEcQQLwqgQW3QwenuKz5cKLA9x%2Foum3z87xRDozy%2BVNHtLhp59cA7V249J8jZ92OP%2B0K9CDG5tQqx8L4fA4%2BoksZ1nRfBO72vSXB8IAr4KAPNk6u%2B4q795Ke72oXmZHBn%2FHLurTV0WtZap5l9sgQxW7LWkdbajys%2FYskKe7xdU16s9i9D7JfhuBpl52%2B0UDKt7MIVj3JdN3ZLonjEI2G1ucP8JepM1STS33uHdqi%2FxI3uYlaPg1MKPMr8QGOqUBis0G4P%2BGY%2BpiD7QM6fh6QTVuy3iDgD2oHeMwoFUEJ9%2B4J2zCqytUdpGPgQ8wZSqpFSXnOSs6Pupzr5z9K5EBdWX6WfMVf%2BRNDd%2FG53SDfZdZzR5whrufuTSMxeKyTVKyqoQ%2FpKrHqvisilUnrJelnAWYBTAdPC0OwUG2sjWUXdgepvRkr1hYVIoFiIFKRFgvUUyNKtcNlDbSDI1AH6mPieRWQQYI&X-Amz-Signature=5c5c6812a863494571107983e3eea7ac518a318695f90da42cb636504a1a438e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z55R4QCZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW2WBmoafmqmRRkvAIKdSXWE%2F2XyQx671u%2BSwm9nJT7AiEAzmFh6hcrz3%2FAHOtYXD%2B3LcJ9rBZDz3ob%2FIyu6%2BhXw2UqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeuL1Lfd1dpzgCt%2BCrcA%2Bl0r9MFILetcGdEN0EQSKkcN0OAWw4YWniKC2eZIRb%2BRbxZVsRRWg1LGzHzmkwh6kNkS53mtwVToRcqconNb722Hc5WM2BIGNmM9CmqE%2Bj4u84mPPbq2K%2FRVvJ0%2BZoow6JsLaChOlJRrzX1xea7CquTVXy2DyfJdATCRA5qE%2FHOS9CdlqS6gG8Mh0rQuDsHeTQcrImoEknWY56zi7sagPPfxJ4DZRSlit9sLRQBAgXSv1Jh4o5xwO%2FWup3Huw0WkUjBJAIyfw9ApPtZNJ8MVsWe9mk3EswK%2Febi4E4hCFdGA29NRI7AYh%2BgrL3cJdv2ofOx8HpACOXUwVgyCdOkwnCUcim2ZhDw%2Fb9%2B3tniXKmgb%2FUTNDW%2B6ma7P%2FANK7cygHhQksAia%2BEcQQLwqgQW3QwenuKz5cKLA9x%2Foum3z87xRDozy%2BVNHtLhp59cA7V249J8jZ92OP%2B0K9CDG5tQqx8L4fA4%2BoksZ1nRfBO72vSXB8IAr4KAPNk6u%2B4q795Ke72oXmZHBn%2FHLurTV0WtZap5l9sgQxW7LWkdbajys%2FYskKe7xdU16s9i9D7JfhuBpl52%2B0UDKt7MIVj3JdN3ZLonjEI2G1ucP8JepM1STS33uHdqi%2FxI3uYlaPg1MKPMr8QGOqUBis0G4P%2BGY%2BpiD7QM6fh6QTVuy3iDgD2oHeMwoFUEJ9%2B4J2zCqytUdpGPgQ8wZSqpFSXnOSs6Pupzr5z9K5EBdWX6WfMVf%2BRNDd%2FG53SDfZdZzR5whrufuTSMxeKyTVKyqoQ%2FpKrHqvisilUnrJelnAWYBTAdPC0OwUG2sjWUXdgepvRkr1hYVIoFiIFKRFgvUUyNKtcNlDbSDI1AH6mPieRWQQYI&X-Amz-Signature=3edff60c9652b7644301b928ed330166400f30bb387d34c4264d0c5f61d82450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z55R4QCZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW2WBmoafmqmRRkvAIKdSXWE%2F2XyQx671u%2BSwm9nJT7AiEAzmFh6hcrz3%2FAHOtYXD%2B3LcJ9rBZDz3ob%2FIyu6%2BhXw2UqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeuL1Lfd1dpzgCt%2BCrcA%2Bl0r9MFILetcGdEN0EQSKkcN0OAWw4YWniKC2eZIRb%2BRbxZVsRRWg1LGzHzmkwh6kNkS53mtwVToRcqconNb722Hc5WM2BIGNmM9CmqE%2Bj4u84mPPbq2K%2FRVvJ0%2BZoow6JsLaChOlJRrzX1xea7CquTVXy2DyfJdATCRA5qE%2FHOS9CdlqS6gG8Mh0rQuDsHeTQcrImoEknWY56zi7sagPPfxJ4DZRSlit9sLRQBAgXSv1Jh4o5xwO%2FWup3Huw0WkUjBJAIyfw9ApPtZNJ8MVsWe9mk3EswK%2Febi4E4hCFdGA29NRI7AYh%2BgrL3cJdv2ofOx8HpACOXUwVgyCdOkwnCUcim2ZhDw%2Fb9%2B3tniXKmgb%2FUTNDW%2B6ma7P%2FANK7cygHhQksAia%2BEcQQLwqgQW3QwenuKz5cKLA9x%2Foum3z87xRDozy%2BVNHtLhp59cA7V249J8jZ92OP%2B0K9CDG5tQqx8L4fA4%2BoksZ1nRfBO72vSXB8IAr4KAPNk6u%2B4q795Ke72oXmZHBn%2FHLurTV0WtZap5l9sgQxW7LWkdbajys%2FYskKe7xdU16s9i9D7JfhuBpl52%2B0UDKt7MIVj3JdN3ZLonjEI2G1ucP8JepM1STS33uHdqi%2FxI3uYlaPg1MKPMr8QGOqUBis0G4P%2BGY%2BpiD7QM6fh6QTVuy3iDgD2oHeMwoFUEJ9%2B4J2zCqytUdpGPgQ8wZSqpFSXnOSs6Pupzr5z9K5EBdWX6WfMVf%2BRNDd%2FG53SDfZdZzR5whrufuTSMxeKyTVKyqoQ%2FpKrHqvisilUnrJelnAWYBTAdPC0OwUG2sjWUXdgepvRkr1hYVIoFiIFKRFgvUUyNKtcNlDbSDI1AH6mPieRWQQYI&X-Amz-Signature=d17b0451747c26e93e5bbfc977f85295109df957157d7b95999b51d207570f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z55R4QCZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW2WBmoafmqmRRkvAIKdSXWE%2F2XyQx671u%2BSwm9nJT7AiEAzmFh6hcrz3%2FAHOtYXD%2B3LcJ9rBZDz3ob%2FIyu6%2BhXw2UqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeuL1Lfd1dpzgCt%2BCrcA%2Bl0r9MFILetcGdEN0EQSKkcN0OAWw4YWniKC2eZIRb%2BRbxZVsRRWg1LGzHzmkwh6kNkS53mtwVToRcqconNb722Hc5WM2BIGNmM9CmqE%2Bj4u84mPPbq2K%2FRVvJ0%2BZoow6JsLaChOlJRrzX1xea7CquTVXy2DyfJdATCRA5qE%2FHOS9CdlqS6gG8Mh0rQuDsHeTQcrImoEknWY56zi7sagPPfxJ4DZRSlit9sLRQBAgXSv1Jh4o5xwO%2FWup3Huw0WkUjBJAIyfw9ApPtZNJ8MVsWe9mk3EswK%2Febi4E4hCFdGA29NRI7AYh%2BgrL3cJdv2ofOx8HpACOXUwVgyCdOkwnCUcim2ZhDw%2Fb9%2B3tniXKmgb%2FUTNDW%2B6ma7P%2FANK7cygHhQksAia%2BEcQQLwqgQW3QwenuKz5cKLA9x%2Foum3z87xRDozy%2BVNHtLhp59cA7V249J8jZ92OP%2B0K9CDG5tQqx8L4fA4%2BoksZ1nRfBO72vSXB8IAr4KAPNk6u%2B4q795Ke72oXmZHBn%2FHLurTV0WtZap5l9sgQxW7LWkdbajys%2FYskKe7xdU16s9i9D7JfhuBpl52%2B0UDKt7MIVj3JdN3ZLonjEI2G1ucP8JepM1STS33uHdqi%2FxI3uYlaPg1MKPMr8QGOqUBis0G4P%2BGY%2BpiD7QM6fh6QTVuy3iDgD2oHeMwoFUEJ9%2B4J2zCqytUdpGPgQ8wZSqpFSXnOSs6Pupzr5z9K5EBdWX6WfMVf%2BRNDd%2FG53SDfZdZzR5whrufuTSMxeKyTVKyqoQ%2FpKrHqvisilUnrJelnAWYBTAdPC0OwUG2sjWUXdgepvRkr1hYVIoFiIFKRFgvUUyNKtcNlDbSDI1AH6mPieRWQQYI&X-Amz-Signature=e083e99be1f04cd902426cf3e56da04554d061f711b24dfbf5e61f1fbda841a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z55R4QCZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW2WBmoafmqmRRkvAIKdSXWE%2F2XyQx671u%2BSwm9nJT7AiEAzmFh6hcrz3%2FAHOtYXD%2B3LcJ9rBZDz3ob%2FIyu6%2BhXw2UqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeuL1Lfd1dpzgCt%2BCrcA%2Bl0r9MFILetcGdEN0EQSKkcN0OAWw4YWniKC2eZIRb%2BRbxZVsRRWg1LGzHzmkwh6kNkS53mtwVToRcqconNb722Hc5WM2BIGNmM9CmqE%2Bj4u84mPPbq2K%2FRVvJ0%2BZoow6JsLaChOlJRrzX1xea7CquTVXy2DyfJdATCRA5qE%2FHOS9CdlqS6gG8Mh0rQuDsHeTQcrImoEknWY56zi7sagPPfxJ4DZRSlit9sLRQBAgXSv1Jh4o5xwO%2FWup3Huw0WkUjBJAIyfw9ApPtZNJ8MVsWe9mk3EswK%2Febi4E4hCFdGA29NRI7AYh%2BgrL3cJdv2ofOx8HpACOXUwVgyCdOkwnCUcim2ZhDw%2Fb9%2B3tniXKmgb%2FUTNDW%2B6ma7P%2FANK7cygHhQksAia%2BEcQQLwqgQW3QwenuKz5cKLA9x%2Foum3z87xRDozy%2BVNHtLhp59cA7V249J8jZ92OP%2B0K9CDG5tQqx8L4fA4%2BoksZ1nRfBO72vSXB8IAr4KAPNk6u%2B4q795Ke72oXmZHBn%2FHLurTV0WtZap5l9sgQxW7LWkdbajys%2FYskKe7xdU16s9i9D7JfhuBpl52%2B0UDKt7MIVj3JdN3ZLonjEI2G1ucP8JepM1STS33uHdqi%2FxI3uYlaPg1MKPMr8QGOqUBis0G4P%2BGY%2BpiD7QM6fh6QTVuy3iDgD2oHeMwoFUEJ9%2B4J2zCqytUdpGPgQ8wZSqpFSXnOSs6Pupzr5z9K5EBdWX6WfMVf%2BRNDd%2FG53SDfZdZzR5whrufuTSMxeKyTVKyqoQ%2FpKrHqvisilUnrJelnAWYBTAdPC0OwUG2sjWUXdgepvRkr1hYVIoFiIFKRFgvUUyNKtcNlDbSDI1AH6mPieRWQQYI&X-Amz-Signature=c71988a5837c7abb95445595860bb29278949c21a72b912df32efcae70f2fd9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z55R4QCZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW2WBmoafmqmRRkvAIKdSXWE%2F2XyQx671u%2BSwm9nJT7AiEAzmFh6hcrz3%2FAHOtYXD%2B3LcJ9rBZDz3ob%2FIyu6%2BhXw2UqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeuL1Lfd1dpzgCt%2BCrcA%2Bl0r9MFILetcGdEN0EQSKkcN0OAWw4YWniKC2eZIRb%2BRbxZVsRRWg1LGzHzmkwh6kNkS53mtwVToRcqconNb722Hc5WM2BIGNmM9CmqE%2Bj4u84mPPbq2K%2FRVvJ0%2BZoow6JsLaChOlJRrzX1xea7CquTVXy2DyfJdATCRA5qE%2FHOS9CdlqS6gG8Mh0rQuDsHeTQcrImoEknWY56zi7sagPPfxJ4DZRSlit9sLRQBAgXSv1Jh4o5xwO%2FWup3Huw0WkUjBJAIyfw9ApPtZNJ8MVsWe9mk3EswK%2Febi4E4hCFdGA29NRI7AYh%2BgrL3cJdv2ofOx8HpACOXUwVgyCdOkwnCUcim2ZhDw%2Fb9%2B3tniXKmgb%2FUTNDW%2B6ma7P%2FANK7cygHhQksAia%2BEcQQLwqgQW3QwenuKz5cKLA9x%2Foum3z87xRDozy%2BVNHtLhp59cA7V249J8jZ92OP%2B0K9CDG5tQqx8L4fA4%2BoksZ1nRfBO72vSXB8IAr4KAPNk6u%2B4q795Ke72oXmZHBn%2FHLurTV0WtZap5l9sgQxW7LWkdbajys%2FYskKe7xdU16s9i9D7JfhuBpl52%2B0UDKt7MIVj3JdN3ZLonjEI2G1ucP8JepM1STS33uHdqi%2FxI3uYlaPg1MKPMr8QGOqUBis0G4P%2BGY%2BpiD7QM6fh6QTVuy3iDgD2oHeMwoFUEJ9%2B4J2zCqytUdpGPgQ8wZSqpFSXnOSs6Pupzr5z9K5EBdWX6WfMVf%2BRNDd%2FG53SDfZdZzR5whrufuTSMxeKyTVKyqoQ%2FpKrHqvisilUnrJelnAWYBTAdPC0OwUG2sjWUXdgepvRkr1hYVIoFiIFKRFgvUUyNKtcNlDbSDI1AH6mPieRWQQYI&X-Amz-Signature=27f4262c05fbf917310f95c863db59789299b24ec198b65c232fe3f46f38c7fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z55R4QCZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW2WBmoafmqmRRkvAIKdSXWE%2F2XyQx671u%2BSwm9nJT7AiEAzmFh6hcrz3%2FAHOtYXD%2B3LcJ9rBZDz3ob%2FIyu6%2BhXw2UqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDeuL1Lfd1dpzgCt%2BCrcA%2Bl0r9MFILetcGdEN0EQSKkcN0OAWw4YWniKC2eZIRb%2BRbxZVsRRWg1LGzHzmkwh6kNkS53mtwVToRcqconNb722Hc5WM2BIGNmM9CmqE%2Bj4u84mPPbq2K%2FRVvJ0%2BZoow6JsLaChOlJRrzX1xea7CquTVXy2DyfJdATCRA5qE%2FHOS9CdlqS6gG8Mh0rQuDsHeTQcrImoEknWY56zi7sagPPfxJ4DZRSlit9sLRQBAgXSv1Jh4o5xwO%2FWup3Huw0WkUjBJAIyfw9ApPtZNJ8MVsWe9mk3EswK%2Febi4E4hCFdGA29NRI7AYh%2BgrL3cJdv2ofOx8HpACOXUwVgyCdOkwnCUcim2ZhDw%2Fb9%2B3tniXKmgb%2FUTNDW%2B6ma7P%2FANK7cygHhQksAia%2BEcQQLwqgQW3QwenuKz5cKLA9x%2Foum3z87xRDozy%2BVNHtLhp59cA7V249J8jZ92OP%2B0K9CDG5tQqx8L4fA4%2BoksZ1nRfBO72vSXB8IAr4KAPNk6u%2B4q795Ke72oXmZHBn%2FHLurTV0WtZap5l9sgQxW7LWkdbajys%2FYskKe7xdU16s9i9D7JfhuBpl52%2B0UDKt7MIVj3JdN3ZLonjEI2G1ucP8JepM1STS33uHdqi%2FxI3uYlaPg1MKPMr8QGOqUBis0G4P%2BGY%2BpiD7QM6fh6QTVuy3iDgD2oHeMwoFUEJ9%2B4J2zCqytUdpGPgQ8wZSqpFSXnOSs6Pupzr5z9K5EBdWX6WfMVf%2BRNDd%2FG53SDfZdZzR5whrufuTSMxeKyTVKyqoQ%2FpKrHqvisilUnrJelnAWYBTAdPC0OwUG2sjWUXdgepvRkr1hYVIoFiIFKRFgvUUyNKtcNlDbSDI1AH6mPieRWQQYI&X-Amz-Signature=2a278aa347a24e56e291286a90187e8288c2653573c7278b3c9b8ef0848a5daf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
