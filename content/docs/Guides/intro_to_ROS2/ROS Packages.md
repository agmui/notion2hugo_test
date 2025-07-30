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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCQGAM6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA47vzdnIpSkwCeDYOkR8hoFaRX%2FqsCj%2B4Ra0maYRQwpAiAmzyI0NEXPa4h46X%2BiSKd5QslRIxD4OCwLAT5Y2OrcYiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGV4b5Z6mMKgxnJDxKtwDY71HsDbdnJSoYm6ALo71UIUcciwRDBdSSrKbQT4GAb5Gv0LLztw3tkW0JLBgQvFHJu1UB%2BSDMUhoy6tmEbh%2FAuIyfCmmooH4ItTpgNLHaP5gT62sBruM8k8FbmXdQ1163g%2FPcsd5uPb6xpfx9PYOHl79Wi17Fxlk4h01%2FQk8JiowUicfonaajwa%2FX%2BXWwF8%2FM4e1xkxfzDG%2Fsyflr2e5rqbw9hZrBrdzrIAXPBim7bbG4%2FWeGuyocQXs%2F8lnbyl2IGiQsUnFxYAHnHALZSVE2%2BD%2BrfrBYqU0rUHB1xt9Xe2TzgYqAgDB5oRRWEgu5ankq9LLc9fvcIQknewotKlc3NcbweleV06zTVLX0PiPAGeh2TSbBubirJ3cjOxnZoZvA%2BnV7Y0dujZWMRRiMbDbKYWbYsOBLdbzS1i6KpawZTi4tKXsL754Mlblt4rOhI8hUkHS6lbXIrkhcnfmefRyJPgP76pz9B9PogqwdcAR5gNI9I9H%2BlWEHXuDNAb4bQYTsZhMe5F2CbNQZfHKK7rHjsoUkpizJ3Jc2LAivQDVLtTSE7k%2BgpU6X7p7TXF%2FUooz1ymy%2B2AnbOUXZgbVizzczhBIgW9qmwWslGap%2B1%2B%2Bp%2FhlLEF4frbyB40DzX0wgqOoxAY6pgHsZwhMjK3NQWljwuZQiyvM0s3v51Y4l8fH%2FPMvGo9DXBJCn1BFBimEzQWrBucBl%2FmpnRPTuFIoMd4HDarCdRQQ3E%2BqzTx%2BA1HTVSCUN%2B61MA3pq4Kbk%2BAmofkW0IEr6v1kdCY0%2BYAhi1%2FwlfkqE9CoWtxAS1x5NrtSSAXAYEsMXiVF4Xcd1bxcYcGnfJ5HMc0n8xekSCOVobkrUBZw6JNnTGCjH%2BHJ&X-Amz-Signature=01d78758197db3dc76ed5ffebcd6b3e45d8216e405baad73db03f8fe6578f310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCQGAM6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA47vzdnIpSkwCeDYOkR8hoFaRX%2FqsCj%2B4Ra0maYRQwpAiAmzyI0NEXPa4h46X%2BiSKd5QslRIxD4OCwLAT5Y2OrcYiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGV4b5Z6mMKgxnJDxKtwDY71HsDbdnJSoYm6ALo71UIUcciwRDBdSSrKbQT4GAb5Gv0LLztw3tkW0JLBgQvFHJu1UB%2BSDMUhoy6tmEbh%2FAuIyfCmmooH4ItTpgNLHaP5gT62sBruM8k8FbmXdQ1163g%2FPcsd5uPb6xpfx9PYOHl79Wi17Fxlk4h01%2FQk8JiowUicfonaajwa%2FX%2BXWwF8%2FM4e1xkxfzDG%2Fsyflr2e5rqbw9hZrBrdzrIAXPBim7bbG4%2FWeGuyocQXs%2F8lnbyl2IGiQsUnFxYAHnHALZSVE2%2BD%2BrfrBYqU0rUHB1xt9Xe2TzgYqAgDB5oRRWEgu5ankq9LLc9fvcIQknewotKlc3NcbweleV06zTVLX0PiPAGeh2TSbBubirJ3cjOxnZoZvA%2BnV7Y0dujZWMRRiMbDbKYWbYsOBLdbzS1i6KpawZTi4tKXsL754Mlblt4rOhI8hUkHS6lbXIrkhcnfmefRyJPgP76pz9B9PogqwdcAR5gNI9I9H%2BlWEHXuDNAb4bQYTsZhMe5F2CbNQZfHKK7rHjsoUkpizJ3Jc2LAivQDVLtTSE7k%2BgpU6X7p7TXF%2FUooz1ymy%2B2AnbOUXZgbVizzczhBIgW9qmwWslGap%2B1%2B%2Bp%2FhlLEF4frbyB40DzX0wgqOoxAY6pgHsZwhMjK3NQWljwuZQiyvM0s3v51Y4l8fH%2FPMvGo9DXBJCn1BFBimEzQWrBucBl%2FmpnRPTuFIoMd4HDarCdRQQ3E%2BqzTx%2BA1HTVSCUN%2B61MA3pq4Kbk%2BAmofkW0IEr6v1kdCY0%2BYAhi1%2FwlfkqE9CoWtxAS1x5NrtSSAXAYEsMXiVF4Xcd1bxcYcGnfJ5HMc0n8xekSCOVobkrUBZw6JNnTGCjH%2BHJ&X-Amz-Signature=7fe0b569cab0306fbcb157a863786305799bbdb7ba88ee6bbf5293a82ea2faaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCQGAM6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA47vzdnIpSkwCeDYOkR8hoFaRX%2FqsCj%2B4Ra0maYRQwpAiAmzyI0NEXPa4h46X%2BiSKd5QslRIxD4OCwLAT5Y2OrcYiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGV4b5Z6mMKgxnJDxKtwDY71HsDbdnJSoYm6ALo71UIUcciwRDBdSSrKbQT4GAb5Gv0LLztw3tkW0JLBgQvFHJu1UB%2BSDMUhoy6tmEbh%2FAuIyfCmmooH4ItTpgNLHaP5gT62sBruM8k8FbmXdQ1163g%2FPcsd5uPb6xpfx9PYOHl79Wi17Fxlk4h01%2FQk8JiowUicfonaajwa%2FX%2BXWwF8%2FM4e1xkxfzDG%2Fsyflr2e5rqbw9hZrBrdzrIAXPBim7bbG4%2FWeGuyocQXs%2F8lnbyl2IGiQsUnFxYAHnHALZSVE2%2BD%2BrfrBYqU0rUHB1xt9Xe2TzgYqAgDB5oRRWEgu5ankq9LLc9fvcIQknewotKlc3NcbweleV06zTVLX0PiPAGeh2TSbBubirJ3cjOxnZoZvA%2BnV7Y0dujZWMRRiMbDbKYWbYsOBLdbzS1i6KpawZTi4tKXsL754Mlblt4rOhI8hUkHS6lbXIrkhcnfmefRyJPgP76pz9B9PogqwdcAR5gNI9I9H%2BlWEHXuDNAb4bQYTsZhMe5F2CbNQZfHKK7rHjsoUkpizJ3Jc2LAivQDVLtTSE7k%2BgpU6X7p7TXF%2FUooz1ymy%2B2AnbOUXZgbVizzczhBIgW9qmwWslGap%2B1%2B%2Bp%2FhlLEF4frbyB40DzX0wgqOoxAY6pgHsZwhMjK3NQWljwuZQiyvM0s3v51Y4l8fH%2FPMvGo9DXBJCn1BFBimEzQWrBucBl%2FmpnRPTuFIoMd4HDarCdRQQ3E%2BqzTx%2BA1HTVSCUN%2B61MA3pq4Kbk%2BAmofkW0IEr6v1kdCY0%2BYAhi1%2FwlfkqE9CoWtxAS1x5NrtSSAXAYEsMXiVF4Xcd1bxcYcGnfJ5HMc0n8xekSCOVobkrUBZw6JNnTGCjH%2BHJ&X-Amz-Signature=3bfd856014e3fc9ba61a1b10af111ed750d27edbd3b9b70363d295e6e9768ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCQGAM6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA47vzdnIpSkwCeDYOkR8hoFaRX%2FqsCj%2B4Ra0maYRQwpAiAmzyI0NEXPa4h46X%2BiSKd5QslRIxD4OCwLAT5Y2OrcYiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGV4b5Z6mMKgxnJDxKtwDY71HsDbdnJSoYm6ALo71UIUcciwRDBdSSrKbQT4GAb5Gv0LLztw3tkW0JLBgQvFHJu1UB%2BSDMUhoy6tmEbh%2FAuIyfCmmooH4ItTpgNLHaP5gT62sBruM8k8FbmXdQ1163g%2FPcsd5uPb6xpfx9PYOHl79Wi17Fxlk4h01%2FQk8JiowUicfonaajwa%2FX%2BXWwF8%2FM4e1xkxfzDG%2Fsyflr2e5rqbw9hZrBrdzrIAXPBim7bbG4%2FWeGuyocQXs%2F8lnbyl2IGiQsUnFxYAHnHALZSVE2%2BD%2BrfrBYqU0rUHB1xt9Xe2TzgYqAgDB5oRRWEgu5ankq9LLc9fvcIQknewotKlc3NcbweleV06zTVLX0PiPAGeh2TSbBubirJ3cjOxnZoZvA%2BnV7Y0dujZWMRRiMbDbKYWbYsOBLdbzS1i6KpawZTi4tKXsL754Mlblt4rOhI8hUkHS6lbXIrkhcnfmefRyJPgP76pz9B9PogqwdcAR5gNI9I9H%2BlWEHXuDNAb4bQYTsZhMe5F2CbNQZfHKK7rHjsoUkpizJ3Jc2LAivQDVLtTSE7k%2BgpU6X7p7TXF%2FUooz1ymy%2B2AnbOUXZgbVizzczhBIgW9qmwWslGap%2B1%2B%2Bp%2FhlLEF4frbyB40DzX0wgqOoxAY6pgHsZwhMjK3NQWljwuZQiyvM0s3v51Y4l8fH%2FPMvGo9DXBJCn1BFBimEzQWrBucBl%2FmpnRPTuFIoMd4HDarCdRQQ3E%2BqzTx%2BA1HTVSCUN%2B61MA3pq4Kbk%2BAmofkW0IEr6v1kdCY0%2BYAhi1%2FwlfkqE9CoWtxAS1x5NrtSSAXAYEsMXiVF4Xcd1bxcYcGnfJ5HMc0n8xekSCOVobkrUBZw6JNnTGCjH%2BHJ&X-Amz-Signature=14f5205b7ad37c4f454352fe943ceb5db1d4e8f14135cfbd8dd7a3afc951d40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCQGAM6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA47vzdnIpSkwCeDYOkR8hoFaRX%2FqsCj%2B4Ra0maYRQwpAiAmzyI0NEXPa4h46X%2BiSKd5QslRIxD4OCwLAT5Y2OrcYiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGV4b5Z6mMKgxnJDxKtwDY71HsDbdnJSoYm6ALo71UIUcciwRDBdSSrKbQT4GAb5Gv0LLztw3tkW0JLBgQvFHJu1UB%2BSDMUhoy6tmEbh%2FAuIyfCmmooH4ItTpgNLHaP5gT62sBruM8k8FbmXdQ1163g%2FPcsd5uPb6xpfx9PYOHl79Wi17Fxlk4h01%2FQk8JiowUicfonaajwa%2FX%2BXWwF8%2FM4e1xkxfzDG%2Fsyflr2e5rqbw9hZrBrdzrIAXPBim7bbG4%2FWeGuyocQXs%2F8lnbyl2IGiQsUnFxYAHnHALZSVE2%2BD%2BrfrBYqU0rUHB1xt9Xe2TzgYqAgDB5oRRWEgu5ankq9LLc9fvcIQknewotKlc3NcbweleV06zTVLX0PiPAGeh2TSbBubirJ3cjOxnZoZvA%2BnV7Y0dujZWMRRiMbDbKYWbYsOBLdbzS1i6KpawZTi4tKXsL754Mlblt4rOhI8hUkHS6lbXIrkhcnfmefRyJPgP76pz9B9PogqwdcAR5gNI9I9H%2BlWEHXuDNAb4bQYTsZhMe5F2CbNQZfHKK7rHjsoUkpizJ3Jc2LAivQDVLtTSE7k%2BgpU6X7p7TXF%2FUooz1ymy%2B2AnbOUXZgbVizzczhBIgW9qmwWslGap%2B1%2B%2Bp%2FhlLEF4frbyB40DzX0wgqOoxAY6pgHsZwhMjK3NQWljwuZQiyvM0s3v51Y4l8fH%2FPMvGo9DXBJCn1BFBimEzQWrBucBl%2FmpnRPTuFIoMd4HDarCdRQQ3E%2BqzTx%2BA1HTVSCUN%2B61MA3pq4Kbk%2BAmofkW0IEr6v1kdCY0%2BYAhi1%2FwlfkqE9CoWtxAS1x5NrtSSAXAYEsMXiVF4Xcd1bxcYcGnfJ5HMc0n8xekSCOVobkrUBZw6JNnTGCjH%2BHJ&X-Amz-Signature=15937813b14d2df5b32f17f49d6e021434d02d81a1e093fcf25e7709237f5d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCQGAM6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA47vzdnIpSkwCeDYOkR8hoFaRX%2FqsCj%2B4Ra0maYRQwpAiAmzyI0NEXPa4h46X%2BiSKd5QslRIxD4OCwLAT5Y2OrcYiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGV4b5Z6mMKgxnJDxKtwDY71HsDbdnJSoYm6ALo71UIUcciwRDBdSSrKbQT4GAb5Gv0LLztw3tkW0JLBgQvFHJu1UB%2BSDMUhoy6tmEbh%2FAuIyfCmmooH4ItTpgNLHaP5gT62sBruM8k8FbmXdQ1163g%2FPcsd5uPb6xpfx9PYOHl79Wi17Fxlk4h01%2FQk8JiowUicfonaajwa%2FX%2BXWwF8%2FM4e1xkxfzDG%2Fsyflr2e5rqbw9hZrBrdzrIAXPBim7bbG4%2FWeGuyocQXs%2F8lnbyl2IGiQsUnFxYAHnHALZSVE2%2BD%2BrfrBYqU0rUHB1xt9Xe2TzgYqAgDB5oRRWEgu5ankq9LLc9fvcIQknewotKlc3NcbweleV06zTVLX0PiPAGeh2TSbBubirJ3cjOxnZoZvA%2BnV7Y0dujZWMRRiMbDbKYWbYsOBLdbzS1i6KpawZTi4tKXsL754Mlblt4rOhI8hUkHS6lbXIrkhcnfmefRyJPgP76pz9B9PogqwdcAR5gNI9I9H%2BlWEHXuDNAb4bQYTsZhMe5F2CbNQZfHKK7rHjsoUkpizJ3Jc2LAivQDVLtTSE7k%2BgpU6X7p7TXF%2FUooz1ymy%2B2AnbOUXZgbVizzczhBIgW9qmwWslGap%2B1%2B%2Bp%2FhlLEF4frbyB40DzX0wgqOoxAY6pgHsZwhMjK3NQWljwuZQiyvM0s3v51Y4l8fH%2FPMvGo9DXBJCn1BFBimEzQWrBucBl%2FmpnRPTuFIoMd4HDarCdRQQ3E%2BqzTx%2BA1HTVSCUN%2B61MA3pq4Kbk%2BAmofkW0IEr6v1kdCY0%2BYAhi1%2FwlfkqE9CoWtxAS1x5NrtSSAXAYEsMXiVF4Xcd1bxcYcGnfJ5HMc0n8xekSCOVobkrUBZw6JNnTGCjH%2BHJ&X-Amz-Signature=2ae53db547959f50b9f701b61f40b8bb8b04865276daa64e2fcdfa6d2d1b8ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCQGAM6%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T141158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA47vzdnIpSkwCeDYOkR8hoFaRX%2FqsCj%2B4Ra0maYRQwpAiAmzyI0NEXPa4h46X%2BiSKd5QslRIxD4OCwLAT5Y2OrcYiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGV4b5Z6mMKgxnJDxKtwDY71HsDbdnJSoYm6ALo71UIUcciwRDBdSSrKbQT4GAb5Gv0LLztw3tkW0JLBgQvFHJu1UB%2BSDMUhoy6tmEbh%2FAuIyfCmmooH4ItTpgNLHaP5gT62sBruM8k8FbmXdQ1163g%2FPcsd5uPb6xpfx9PYOHl79Wi17Fxlk4h01%2FQk8JiowUicfonaajwa%2FX%2BXWwF8%2FM4e1xkxfzDG%2Fsyflr2e5rqbw9hZrBrdzrIAXPBim7bbG4%2FWeGuyocQXs%2F8lnbyl2IGiQsUnFxYAHnHALZSVE2%2BD%2BrfrBYqU0rUHB1xt9Xe2TzgYqAgDB5oRRWEgu5ankq9LLc9fvcIQknewotKlc3NcbweleV06zTVLX0PiPAGeh2TSbBubirJ3cjOxnZoZvA%2BnV7Y0dujZWMRRiMbDbKYWbYsOBLdbzS1i6KpawZTi4tKXsL754Mlblt4rOhI8hUkHS6lbXIrkhcnfmefRyJPgP76pz9B9PogqwdcAR5gNI9I9H%2BlWEHXuDNAb4bQYTsZhMe5F2CbNQZfHKK7rHjsoUkpizJ3Jc2LAivQDVLtTSE7k%2BgpU6X7p7TXF%2FUooz1ymy%2B2AnbOUXZgbVizzczhBIgW9qmwWslGap%2B1%2B%2Bp%2FhlLEF4frbyB40DzX0wgqOoxAY6pgHsZwhMjK3NQWljwuZQiyvM0s3v51Y4l8fH%2FPMvGo9DXBJCn1BFBimEzQWrBucBl%2FmpnRPTuFIoMd4HDarCdRQQ3E%2BqzTx%2BA1HTVSCUN%2B61MA3pq4Kbk%2BAmofkW0IEr6v1kdCY0%2BYAhi1%2FwlfkqE9CoWtxAS1x5NrtSSAXAYEsMXiVF4Xcd1bxcYcGnfJ5HMc0n8xekSCOVobkrUBZw6JNnTGCjH%2BHJ&X-Amz-Signature=c81830a62f16eb48004be9e8263eb4475729be4f091f847efc608c0d9be1999d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
