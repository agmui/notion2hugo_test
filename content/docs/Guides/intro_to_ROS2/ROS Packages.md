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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OWZOK2R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiGbvx3dSWsKmbWC6l7KbJGcI%2B5wnkYC%2B92Jy%2B9LyINAiEAiEhratKtc62MSPML7EYBt7IVc15TCXfr%2FghVE7H0%2B64q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNT1kAZX%2FdMGvUxZUCrcAxrjpy%2FyaYttqrLfI3cOK9GB0L%2BsKzxVdaO0%2B61sXaUi5t8HJuhghYdFnjHM2TJXKcrJgwbKOCKtWM2BQW5NsIvXJmmxn8Szt8CzCI2V%2FZ2hjBaJa8qvoYb6qkYcvQwEvW1K7PHCojYshnfawC%2FN%2BE3XYOKMclIwbfRlcti%2FfKXAIqBSbrznRZfn%2FGlzmtLrT94CY6U4hWDknCdnto0WRKOVfzEiIT3F8nEmgKwGmx%2FwFWSgy0gTMhAI31doVg9c933URkMcIwWMuSe%2FgRoLL6%2FikgitAUiIfrMJzyF4XRqJX3YdT3c3BAQhfBYD69k51LAVlnucCQYcDXbiNN23vMDA8SMlFHuenISumPtYQB9KEn3sWJApEq%2F2AEC6QylUEC6M5fTihU%2FzvSdLiFCMw7rxlQGlLbyWs5UF8JsCpnuNXoh1BH4JWT7l%2Blc86wjHuBBf9I%2BRt0YjG%2FQP9%2BCQoYFcXZACeBfIi%2BtfW84CKKewEJzZeym7AxCSBha6iUmDoIRU3DBiBTnm%2Flcgis6hXlebtJTpITLgXnu0Z9UB4Ga1huFjaYTBPVOnqEJjjT%2B%2BbBzvEQ54b%2B9flq%2FNTuXQCjhSqtdEMliV%2B8%2BsFzEMAYt74a8ZyvX8BL7imzdaMOqPpMUGOqUB69e4K%2B5j0VJNFdI4yRyp00ft6F11qH0vzC99QrLfjCGaXTbrMz9puSqi9gs03UWdum7IBVxJGYe4eFfP57hbtroKeogtsu4%2FLlnF2dfTWcCwrMT30XXnR4jIutM0L7JqJpa6yu2ZxkeYidGEO8%2FfrSpQY8GL4XsNE1FAlMca5YCihDQnGaozGe6fR7NW%2BkdVqB1wNID4gkxg8UdYhzasuaEfs34A&X-Amz-Signature=b47d55d8eb990151273821a269662805d83d392b188bbc87729a3e3098eb567d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OWZOK2R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiGbvx3dSWsKmbWC6l7KbJGcI%2B5wnkYC%2B92Jy%2B9LyINAiEAiEhratKtc62MSPML7EYBt7IVc15TCXfr%2FghVE7H0%2B64q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNT1kAZX%2FdMGvUxZUCrcAxrjpy%2FyaYttqrLfI3cOK9GB0L%2BsKzxVdaO0%2B61sXaUi5t8HJuhghYdFnjHM2TJXKcrJgwbKOCKtWM2BQW5NsIvXJmmxn8Szt8CzCI2V%2FZ2hjBaJa8qvoYb6qkYcvQwEvW1K7PHCojYshnfawC%2FN%2BE3XYOKMclIwbfRlcti%2FfKXAIqBSbrznRZfn%2FGlzmtLrT94CY6U4hWDknCdnto0WRKOVfzEiIT3F8nEmgKwGmx%2FwFWSgy0gTMhAI31doVg9c933URkMcIwWMuSe%2FgRoLL6%2FikgitAUiIfrMJzyF4XRqJX3YdT3c3BAQhfBYD69k51LAVlnucCQYcDXbiNN23vMDA8SMlFHuenISumPtYQB9KEn3sWJApEq%2F2AEC6QylUEC6M5fTihU%2FzvSdLiFCMw7rxlQGlLbyWs5UF8JsCpnuNXoh1BH4JWT7l%2Blc86wjHuBBf9I%2BRt0YjG%2FQP9%2BCQoYFcXZACeBfIi%2BtfW84CKKewEJzZeym7AxCSBha6iUmDoIRU3DBiBTnm%2Flcgis6hXlebtJTpITLgXnu0Z9UB4Ga1huFjaYTBPVOnqEJjjT%2B%2BbBzvEQ54b%2B9flq%2FNTuXQCjhSqtdEMliV%2B8%2BsFzEMAYt74a8ZyvX8BL7imzdaMOqPpMUGOqUB69e4K%2B5j0VJNFdI4yRyp00ft6F11qH0vzC99QrLfjCGaXTbrMz9puSqi9gs03UWdum7IBVxJGYe4eFfP57hbtroKeogtsu4%2FLlnF2dfTWcCwrMT30XXnR4jIutM0L7JqJpa6yu2ZxkeYidGEO8%2FfrSpQY8GL4XsNE1FAlMca5YCihDQnGaozGe6fR7NW%2BkdVqB1wNID4gkxg8UdYhzasuaEfs34A&X-Amz-Signature=24a57f8bd39198f614ca0693abec841e51a21917b5fc3f11880b4ea5af754555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OWZOK2R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiGbvx3dSWsKmbWC6l7KbJGcI%2B5wnkYC%2B92Jy%2B9LyINAiEAiEhratKtc62MSPML7EYBt7IVc15TCXfr%2FghVE7H0%2B64q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNT1kAZX%2FdMGvUxZUCrcAxrjpy%2FyaYttqrLfI3cOK9GB0L%2BsKzxVdaO0%2B61sXaUi5t8HJuhghYdFnjHM2TJXKcrJgwbKOCKtWM2BQW5NsIvXJmmxn8Szt8CzCI2V%2FZ2hjBaJa8qvoYb6qkYcvQwEvW1K7PHCojYshnfawC%2FN%2BE3XYOKMclIwbfRlcti%2FfKXAIqBSbrznRZfn%2FGlzmtLrT94CY6U4hWDknCdnto0WRKOVfzEiIT3F8nEmgKwGmx%2FwFWSgy0gTMhAI31doVg9c933URkMcIwWMuSe%2FgRoLL6%2FikgitAUiIfrMJzyF4XRqJX3YdT3c3BAQhfBYD69k51LAVlnucCQYcDXbiNN23vMDA8SMlFHuenISumPtYQB9KEn3sWJApEq%2F2AEC6QylUEC6M5fTihU%2FzvSdLiFCMw7rxlQGlLbyWs5UF8JsCpnuNXoh1BH4JWT7l%2Blc86wjHuBBf9I%2BRt0YjG%2FQP9%2BCQoYFcXZACeBfIi%2BtfW84CKKewEJzZeym7AxCSBha6iUmDoIRU3DBiBTnm%2Flcgis6hXlebtJTpITLgXnu0Z9UB4Ga1huFjaYTBPVOnqEJjjT%2B%2BbBzvEQ54b%2B9flq%2FNTuXQCjhSqtdEMliV%2B8%2BsFzEMAYt74a8ZyvX8BL7imzdaMOqPpMUGOqUB69e4K%2B5j0VJNFdI4yRyp00ft6F11qH0vzC99QrLfjCGaXTbrMz9puSqi9gs03UWdum7IBVxJGYe4eFfP57hbtroKeogtsu4%2FLlnF2dfTWcCwrMT30XXnR4jIutM0L7JqJpa6yu2ZxkeYidGEO8%2FfrSpQY8GL4XsNE1FAlMca5YCihDQnGaozGe6fR7NW%2BkdVqB1wNID4gkxg8UdYhzasuaEfs34A&X-Amz-Signature=287c54f468c018f7ce5753646d8c098cd7d6339cd2b4b1ecfe099e9423a3c59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OWZOK2R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiGbvx3dSWsKmbWC6l7KbJGcI%2B5wnkYC%2B92Jy%2B9LyINAiEAiEhratKtc62MSPML7EYBt7IVc15TCXfr%2FghVE7H0%2B64q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNT1kAZX%2FdMGvUxZUCrcAxrjpy%2FyaYttqrLfI3cOK9GB0L%2BsKzxVdaO0%2B61sXaUi5t8HJuhghYdFnjHM2TJXKcrJgwbKOCKtWM2BQW5NsIvXJmmxn8Szt8CzCI2V%2FZ2hjBaJa8qvoYb6qkYcvQwEvW1K7PHCojYshnfawC%2FN%2BE3XYOKMclIwbfRlcti%2FfKXAIqBSbrznRZfn%2FGlzmtLrT94CY6U4hWDknCdnto0WRKOVfzEiIT3F8nEmgKwGmx%2FwFWSgy0gTMhAI31doVg9c933URkMcIwWMuSe%2FgRoLL6%2FikgitAUiIfrMJzyF4XRqJX3YdT3c3BAQhfBYD69k51LAVlnucCQYcDXbiNN23vMDA8SMlFHuenISumPtYQB9KEn3sWJApEq%2F2AEC6QylUEC6M5fTihU%2FzvSdLiFCMw7rxlQGlLbyWs5UF8JsCpnuNXoh1BH4JWT7l%2Blc86wjHuBBf9I%2BRt0YjG%2FQP9%2BCQoYFcXZACeBfIi%2BtfW84CKKewEJzZeym7AxCSBha6iUmDoIRU3DBiBTnm%2Flcgis6hXlebtJTpITLgXnu0Z9UB4Ga1huFjaYTBPVOnqEJjjT%2B%2BbBzvEQ54b%2B9flq%2FNTuXQCjhSqtdEMliV%2B8%2BsFzEMAYt74a8ZyvX8BL7imzdaMOqPpMUGOqUB69e4K%2B5j0VJNFdI4yRyp00ft6F11qH0vzC99QrLfjCGaXTbrMz9puSqi9gs03UWdum7IBVxJGYe4eFfP57hbtroKeogtsu4%2FLlnF2dfTWcCwrMT30XXnR4jIutM0L7JqJpa6yu2ZxkeYidGEO8%2FfrSpQY8GL4XsNE1FAlMca5YCihDQnGaozGe6fR7NW%2BkdVqB1wNID4gkxg8UdYhzasuaEfs34A&X-Amz-Signature=f94340caf69be285da32f5e830d2419ddab9eb1054a9cc1bdde3d075136f4079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OWZOK2R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiGbvx3dSWsKmbWC6l7KbJGcI%2B5wnkYC%2B92Jy%2B9LyINAiEAiEhratKtc62MSPML7EYBt7IVc15TCXfr%2FghVE7H0%2B64q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNT1kAZX%2FdMGvUxZUCrcAxrjpy%2FyaYttqrLfI3cOK9GB0L%2BsKzxVdaO0%2B61sXaUi5t8HJuhghYdFnjHM2TJXKcrJgwbKOCKtWM2BQW5NsIvXJmmxn8Szt8CzCI2V%2FZ2hjBaJa8qvoYb6qkYcvQwEvW1K7PHCojYshnfawC%2FN%2BE3XYOKMclIwbfRlcti%2FfKXAIqBSbrznRZfn%2FGlzmtLrT94CY6U4hWDknCdnto0WRKOVfzEiIT3F8nEmgKwGmx%2FwFWSgy0gTMhAI31doVg9c933URkMcIwWMuSe%2FgRoLL6%2FikgitAUiIfrMJzyF4XRqJX3YdT3c3BAQhfBYD69k51LAVlnucCQYcDXbiNN23vMDA8SMlFHuenISumPtYQB9KEn3sWJApEq%2F2AEC6QylUEC6M5fTihU%2FzvSdLiFCMw7rxlQGlLbyWs5UF8JsCpnuNXoh1BH4JWT7l%2Blc86wjHuBBf9I%2BRt0YjG%2FQP9%2BCQoYFcXZACeBfIi%2BtfW84CKKewEJzZeym7AxCSBha6iUmDoIRU3DBiBTnm%2Flcgis6hXlebtJTpITLgXnu0Z9UB4Ga1huFjaYTBPVOnqEJjjT%2B%2BbBzvEQ54b%2B9flq%2FNTuXQCjhSqtdEMliV%2B8%2BsFzEMAYt74a8ZyvX8BL7imzdaMOqPpMUGOqUB69e4K%2B5j0VJNFdI4yRyp00ft6F11qH0vzC99QrLfjCGaXTbrMz9puSqi9gs03UWdum7IBVxJGYe4eFfP57hbtroKeogtsu4%2FLlnF2dfTWcCwrMT30XXnR4jIutM0L7JqJpa6yu2ZxkeYidGEO8%2FfrSpQY8GL4XsNE1FAlMca5YCihDQnGaozGe6fR7NW%2BkdVqB1wNID4gkxg8UdYhzasuaEfs34A&X-Amz-Signature=7f13d241c03f368d36546988b4fd9fc027d499cff2f02dfac21bac0e3327cc2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OWZOK2R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiGbvx3dSWsKmbWC6l7KbJGcI%2B5wnkYC%2B92Jy%2B9LyINAiEAiEhratKtc62MSPML7EYBt7IVc15TCXfr%2FghVE7H0%2B64q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNT1kAZX%2FdMGvUxZUCrcAxrjpy%2FyaYttqrLfI3cOK9GB0L%2BsKzxVdaO0%2B61sXaUi5t8HJuhghYdFnjHM2TJXKcrJgwbKOCKtWM2BQW5NsIvXJmmxn8Szt8CzCI2V%2FZ2hjBaJa8qvoYb6qkYcvQwEvW1K7PHCojYshnfawC%2FN%2BE3XYOKMclIwbfRlcti%2FfKXAIqBSbrznRZfn%2FGlzmtLrT94CY6U4hWDknCdnto0WRKOVfzEiIT3F8nEmgKwGmx%2FwFWSgy0gTMhAI31doVg9c933URkMcIwWMuSe%2FgRoLL6%2FikgitAUiIfrMJzyF4XRqJX3YdT3c3BAQhfBYD69k51LAVlnucCQYcDXbiNN23vMDA8SMlFHuenISumPtYQB9KEn3sWJApEq%2F2AEC6QylUEC6M5fTihU%2FzvSdLiFCMw7rxlQGlLbyWs5UF8JsCpnuNXoh1BH4JWT7l%2Blc86wjHuBBf9I%2BRt0YjG%2FQP9%2BCQoYFcXZACeBfIi%2BtfW84CKKewEJzZeym7AxCSBha6iUmDoIRU3DBiBTnm%2Flcgis6hXlebtJTpITLgXnu0Z9UB4Ga1huFjaYTBPVOnqEJjjT%2B%2BbBzvEQ54b%2B9flq%2FNTuXQCjhSqtdEMliV%2B8%2BsFzEMAYt74a8ZyvX8BL7imzdaMOqPpMUGOqUB69e4K%2B5j0VJNFdI4yRyp00ft6F11qH0vzC99QrLfjCGaXTbrMz9puSqi9gs03UWdum7IBVxJGYe4eFfP57hbtroKeogtsu4%2FLlnF2dfTWcCwrMT30XXnR4jIutM0L7JqJpa6yu2ZxkeYidGEO8%2FfrSpQY8GL4XsNE1FAlMca5YCihDQnGaozGe6fR7NW%2BkdVqB1wNID4gkxg8UdYhzasuaEfs34A&X-Amz-Signature=5905c423b23d45eeb9da380a9e118107ade0dbd1cd27610c3c646ffe113ed5a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OWZOK2R%2F20250823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250823T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiGbvx3dSWsKmbWC6l7KbJGcI%2B5wnkYC%2B92Jy%2B9LyINAiEAiEhratKtc62MSPML7EYBt7IVc15TCXfr%2FghVE7H0%2B64q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDNT1kAZX%2FdMGvUxZUCrcAxrjpy%2FyaYttqrLfI3cOK9GB0L%2BsKzxVdaO0%2B61sXaUi5t8HJuhghYdFnjHM2TJXKcrJgwbKOCKtWM2BQW5NsIvXJmmxn8Szt8CzCI2V%2FZ2hjBaJa8qvoYb6qkYcvQwEvW1K7PHCojYshnfawC%2FN%2BE3XYOKMclIwbfRlcti%2FfKXAIqBSbrznRZfn%2FGlzmtLrT94CY6U4hWDknCdnto0WRKOVfzEiIT3F8nEmgKwGmx%2FwFWSgy0gTMhAI31doVg9c933URkMcIwWMuSe%2FgRoLL6%2FikgitAUiIfrMJzyF4XRqJX3YdT3c3BAQhfBYD69k51LAVlnucCQYcDXbiNN23vMDA8SMlFHuenISumPtYQB9KEn3sWJApEq%2F2AEC6QylUEC6M5fTihU%2FzvSdLiFCMw7rxlQGlLbyWs5UF8JsCpnuNXoh1BH4JWT7l%2Blc86wjHuBBf9I%2BRt0YjG%2FQP9%2BCQoYFcXZACeBfIi%2BtfW84CKKewEJzZeym7AxCSBha6iUmDoIRU3DBiBTnm%2Flcgis6hXlebtJTpITLgXnu0Z9UB4Ga1huFjaYTBPVOnqEJjjT%2B%2BbBzvEQ54b%2B9flq%2FNTuXQCjhSqtdEMliV%2B8%2BsFzEMAYt74a8ZyvX8BL7imzdaMOqPpMUGOqUB69e4K%2B5j0VJNFdI4yRyp00ft6F11qH0vzC99QrLfjCGaXTbrMz9puSqi9gs03UWdum7IBVxJGYe4eFfP57hbtroKeogtsu4%2FLlnF2dfTWcCwrMT30XXnR4jIutM0L7JqJpa6yu2ZxkeYidGEO8%2FfrSpQY8GL4XsNE1FAlMca5YCihDQnGaozGe6fR7NW%2BkdVqB1wNID4gkxg8UdYhzasuaEfs34A&X-Amz-Signature=110085dd418561ee5f10b6cf180fb52c9e55197fa7b79b373de2eb54f7a4980c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
