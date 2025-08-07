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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EME6B2E%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDwFvc7f%2F%2BNnmn4kw1AmwO7dz3sv8Ta4GZGnS%2FHgzBDRwIgBc3z1IpSWG9tO5XD2VVN56hSthMTwYNW2rlytyOLk3AqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQYYkb5otBIXxaHxircA2rSvVCKEwWR0YgW48jEB6orS1KOSCcLvTuN1aEMDXOpBwlp2ly67qe3YbZXU3ckwRZCS7Rezqg%2BvDDUo6mqWKJiaKhJM%2BqPlLGgdttdlB98Em839TtOxld7cxDqNplqT7uP%2Fh1Y%2BUbOIhIiEQPvRDSDPlDCbwkWexjPe2%2BoZugUppmq8syV7vktBJdVThT197AUCvuWpKqWH69NJdkK8uBDXmjue19WpHm0%2FfmiLSnr%2BgSiqSOKbNEF1EEnWRXmUdjg%2FCkVyCmS7xxTCjFDfGHZZAOcVxwWIrDk8XG0RpuvqgEFK7kyQsuZjj9rRE%2F4A29JQGgkxK9eClpx8hRQLNb0Wu2IRIMnomRgWnh5hy87lR9sOYsJGgcE1%2BYwuxvprWqnFBAVU1BItCxdBRK%2BhPsJTA1WmhZ0LbQrtTOW8230e%2BSaegmlN6TMKe5IIvOBUp7u7TypJ0hW1s8xtzyTyU2DTbDfxhXmgM5zy%2F9a7q71D0lao8yE%2Bbs%2B8MtpYGJ8YBUWvR6PhmM8kM7slUhZgILm6evSBc78i%2BHpDefOyFj1NESHionTpImQ2L9jQHwf%2Fni5ANQpk0mrJlx8FDxNe3C7sP6rldAIakAlmmYzxG4gbP6d8NrawYIclTWeMOT50sQGOqUBWJRNr%2FxvPpn3YCVqc6uwE23e5Xh8NLIHqgwZTwwhe6OP42X5sJ%2Fh%2BqcorKoXdD%2Fv4cPRUmol%2BBtpuoj78LRAlwwyIBSehnXjPiygN9i0WSRIA%2BHympXUaz4LNdRJtHbQ9sGuyAn%2B3UdXwo%2FWciFkc6nWlVEqaKO6ihF90wYokB4W%2FtEWayHo6S4UTCd4n8Jnwl%2BXOWF%2BiWhcRGLwQ3XiQmLNWsri&X-Amz-Signature=7b8c2ea657a5c4e09e4c4c7c21feb024b3efb56e00107ac69a9ffec242f99ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EME6B2E%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDwFvc7f%2F%2BNnmn4kw1AmwO7dz3sv8Ta4GZGnS%2FHgzBDRwIgBc3z1IpSWG9tO5XD2VVN56hSthMTwYNW2rlytyOLk3AqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQYYkb5otBIXxaHxircA2rSvVCKEwWR0YgW48jEB6orS1KOSCcLvTuN1aEMDXOpBwlp2ly67qe3YbZXU3ckwRZCS7Rezqg%2BvDDUo6mqWKJiaKhJM%2BqPlLGgdttdlB98Em839TtOxld7cxDqNplqT7uP%2Fh1Y%2BUbOIhIiEQPvRDSDPlDCbwkWexjPe2%2BoZugUppmq8syV7vktBJdVThT197AUCvuWpKqWH69NJdkK8uBDXmjue19WpHm0%2FfmiLSnr%2BgSiqSOKbNEF1EEnWRXmUdjg%2FCkVyCmS7xxTCjFDfGHZZAOcVxwWIrDk8XG0RpuvqgEFK7kyQsuZjj9rRE%2F4A29JQGgkxK9eClpx8hRQLNb0Wu2IRIMnomRgWnh5hy87lR9sOYsJGgcE1%2BYwuxvprWqnFBAVU1BItCxdBRK%2BhPsJTA1WmhZ0LbQrtTOW8230e%2BSaegmlN6TMKe5IIvOBUp7u7TypJ0hW1s8xtzyTyU2DTbDfxhXmgM5zy%2F9a7q71D0lao8yE%2Bbs%2B8MtpYGJ8YBUWvR6PhmM8kM7slUhZgILm6evSBc78i%2BHpDefOyFj1NESHionTpImQ2L9jQHwf%2Fni5ANQpk0mrJlx8FDxNe3C7sP6rldAIakAlmmYzxG4gbP6d8NrawYIclTWeMOT50sQGOqUBWJRNr%2FxvPpn3YCVqc6uwE23e5Xh8NLIHqgwZTwwhe6OP42X5sJ%2Fh%2BqcorKoXdD%2Fv4cPRUmol%2BBtpuoj78LRAlwwyIBSehnXjPiygN9i0WSRIA%2BHympXUaz4LNdRJtHbQ9sGuyAn%2B3UdXwo%2FWciFkc6nWlVEqaKO6ihF90wYokB4W%2FtEWayHo6S4UTCd4n8Jnwl%2BXOWF%2BiWhcRGLwQ3XiQmLNWsri&X-Amz-Signature=6b53410fc8997251086790eb721099b2f82db465bbaef68da520a7b48254f043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EME6B2E%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDwFvc7f%2F%2BNnmn4kw1AmwO7dz3sv8Ta4GZGnS%2FHgzBDRwIgBc3z1IpSWG9tO5XD2VVN56hSthMTwYNW2rlytyOLk3AqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQYYkb5otBIXxaHxircA2rSvVCKEwWR0YgW48jEB6orS1KOSCcLvTuN1aEMDXOpBwlp2ly67qe3YbZXU3ckwRZCS7Rezqg%2BvDDUo6mqWKJiaKhJM%2BqPlLGgdttdlB98Em839TtOxld7cxDqNplqT7uP%2Fh1Y%2BUbOIhIiEQPvRDSDPlDCbwkWexjPe2%2BoZugUppmq8syV7vktBJdVThT197AUCvuWpKqWH69NJdkK8uBDXmjue19WpHm0%2FfmiLSnr%2BgSiqSOKbNEF1EEnWRXmUdjg%2FCkVyCmS7xxTCjFDfGHZZAOcVxwWIrDk8XG0RpuvqgEFK7kyQsuZjj9rRE%2F4A29JQGgkxK9eClpx8hRQLNb0Wu2IRIMnomRgWnh5hy87lR9sOYsJGgcE1%2BYwuxvprWqnFBAVU1BItCxdBRK%2BhPsJTA1WmhZ0LbQrtTOW8230e%2BSaegmlN6TMKe5IIvOBUp7u7TypJ0hW1s8xtzyTyU2DTbDfxhXmgM5zy%2F9a7q71D0lao8yE%2Bbs%2B8MtpYGJ8YBUWvR6PhmM8kM7slUhZgILm6evSBc78i%2BHpDefOyFj1NESHionTpImQ2L9jQHwf%2Fni5ANQpk0mrJlx8FDxNe3C7sP6rldAIakAlmmYzxG4gbP6d8NrawYIclTWeMOT50sQGOqUBWJRNr%2FxvPpn3YCVqc6uwE23e5Xh8NLIHqgwZTwwhe6OP42X5sJ%2Fh%2BqcorKoXdD%2Fv4cPRUmol%2BBtpuoj78LRAlwwyIBSehnXjPiygN9i0WSRIA%2BHympXUaz4LNdRJtHbQ9sGuyAn%2B3UdXwo%2FWciFkc6nWlVEqaKO6ihF90wYokB4W%2FtEWayHo6S4UTCd4n8Jnwl%2BXOWF%2BiWhcRGLwQ3XiQmLNWsri&X-Amz-Signature=530465472949126a8ba1ea2d3181a034af82eb6029e169ef777409d8b5c8e0a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EME6B2E%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDwFvc7f%2F%2BNnmn4kw1AmwO7dz3sv8Ta4GZGnS%2FHgzBDRwIgBc3z1IpSWG9tO5XD2VVN56hSthMTwYNW2rlytyOLk3AqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQYYkb5otBIXxaHxircA2rSvVCKEwWR0YgW48jEB6orS1KOSCcLvTuN1aEMDXOpBwlp2ly67qe3YbZXU3ckwRZCS7Rezqg%2BvDDUo6mqWKJiaKhJM%2BqPlLGgdttdlB98Em839TtOxld7cxDqNplqT7uP%2Fh1Y%2BUbOIhIiEQPvRDSDPlDCbwkWexjPe2%2BoZugUppmq8syV7vktBJdVThT197AUCvuWpKqWH69NJdkK8uBDXmjue19WpHm0%2FfmiLSnr%2BgSiqSOKbNEF1EEnWRXmUdjg%2FCkVyCmS7xxTCjFDfGHZZAOcVxwWIrDk8XG0RpuvqgEFK7kyQsuZjj9rRE%2F4A29JQGgkxK9eClpx8hRQLNb0Wu2IRIMnomRgWnh5hy87lR9sOYsJGgcE1%2BYwuxvprWqnFBAVU1BItCxdBRK%2BhPsJTA1WmhZ0LbQrtTOW8230e%2BSaegmlN6TMKe5IIvOBUp7u7TypJ0hW1s8xtzyTyU2DTbDfxhXmgM5zy%2F9a7q71D0lao8yE%2Bbs%2B8MtpYGJ8YBUWvR6PhmM8kM7slUhZgILm6evSBc78i%2BHpDefOyFj1NESHionTpImQ2L9jQHwf%2Fni5ANQpk0mrJlx8FDxNe3C7sP6rldAIakAlmmYzxG4gbP6d8NrawYIclTWeMOT50sQGOqUBWJRNr%2FxvPpn3YCVqc6uwE23e5Xh8NLIHqgwZTwwhe6OP42X5sJ%2Fh%2BqcorKoXdD%2Fv4cPRUmol%2BBtpuoj78LRAlwwyIBSehnXjPiygN9i0WSRIA%2BHympXUaz4LNdRJtHbQ9sGuyAn%2B3UdXwo%2FWciFkc6nWlVEqaKO6ihF90wYokB4W%2FtEWayHo6S4UTCd4n8Jnwl%2BXOWF%2BiWhcRGLwQ3XiQmLNWsri&X-Amz-Signature=9b0bc9b79b2d0e14479612800bb6bb21c0c908f860e6f1e036e407256c5aa34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EME6B2E%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDwFvc7f%2F%2BNnmn4kw1AmwO7dz3sv8Ta4GZGnS%2FHgzBDRwIgBc3z1IpSWG9tO5XD2VVN56hSthMTwYNW2rlytyOLk3AqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQYYkb5otBIXxaHxircA2rSvVCKEwWR0YgW48jEB6orS1KOSCcLvTuN1aEMDXOpBwlp2ly67qe3YbZXU3ckwRZCS7Rezqg%2BvDDUo6mqWKJiaKhJM%2BqPlLGgdttdlB98Em839TtOxld7cxDqNplqT7uP%2Fh1Y%2BUbOIhIiEQPvRDSDPlDCbwkWexjPe2%2BoZugUppmq8syV7vktBJdVThT197AUCvuWpKqWH69NJdkK8uBDXmjue19WpHm0%2FfmiLSnr%2BgSiqSOKbNEF1EEnWRXmUdjg%2FCkVyCmS7xxTCjFDfGHZZAOcVxwWIrDk8XG0RpuvqgEFK7kyQsuZjj9rRE%2F4A29JQGgkxK9eClpx8hRQLNb0Wu2IRIMnomRgWnh5hy87lR9sOYsJGgcE1%2BYwuxvprWqnFBAVU1BItCxdBRK%2BhPsJTA1WmhZ0LbQrtTOW8230e%2BSaegmlN6TMKe5IIvOBUp7u7TypJ0hW1s8xtzyTyU2DTbDfxhXmgM5zy%2F9a7q71D0lao8yE%2Bbs%2B8MtpYGJ8YBUWvR6PhmM8kM7slUhZgILm6evSBc78i%2BHpDefOyFj1NESHionTpImQ2L9jQHwf%2Fni5ANQpk0mrJlx8FDxNe3C7sP6rldAIakAlmmYzxG4gbP6d8NrawYIclTWeMOT50sQGOqUBWJRNr%2FxvPpn3YCVqc6uwE23e5Xh8NLIHqgwZTwwhe6OP42X5sJ%2Fh%2BqcorKoXdD%2Fv4cPRUmol%2BBtpuoj78LRAlwwyIBSehnXjPiygN9i0WSRIA%2BHympXUaz4LNdRJtHbQ9sGuyAn%2B3UdXwo%2FWciFkc6nWlVEqaKO6ihF90wYokB4W%2FtEWayHo6S4UTCd4n8Jnwl%2BXOWF%2BiWhcRGLwQ3XiQmLNWsri&X-Amz-Signature=86ab8db66a2ec988aacbf66626ec4f07a307afef514f02afe19031907e7b5329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EME6B2E%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDwFvc7f%2F%2BNnmn4kw1AmwO7dz3sv8Ta4GZGnS%2FHgzBDRwIgBc3z1IpSWG9tO5XD2VVN56hSthMTwYNW2rlytyOLk3AqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQYYkb5otBIXxaHxircA2rSvVCKEwWR0YgW48jEB6orS1KOSCcLvTuN1aEMDXOpBwlp2ly67qe3YbZXU3ckwRZCS7Rezqg%2BvDDUo6mqWKJiaKhJM%2BqPlLGgdttdlB98Em839TtOxld7cxDqNplqT7uP%2Fh1Y%2BUbOIhIiEQPvRDSDPlDCbwkWexjPe2%2BoZugUppmq8syV7vktBJdVThT197AUCvuWpKqWH69NJdkK8uBDXmjue19WpHm0%2FfmiLSnr%2BgSiqSOKbNEF1EEnWRXmUdjg%2FCkVyCmS7xxTCjFDfGHZZAOcVxwWIrDk8XG0RpuvqgEFK7kyQsuZjj9rRE%2F4A29JQGgkxK9eClpx8hRQLNb0Wu2IRIMnomRgWnh5hy87lR9sOYsJGgcE1%2BYwuxvprWqnFBAVU1BItCxdBRK%2BhPsJTA1WmhZ0LbQrtTOW8230e%2BSaegmlN6TMKe5IIvOBUp7u7TypJ0hW1s8xtzyTyU2DTbDfxhXmgM5zy%2F9a7q71D0lao8yE%2Bbs%2B8MtpYGJ8YBUWvR6PhmM8kM7slUhZgILm6evSBc78i%2BHpDefOyFj1NESHionTpImQ2L9jQHwf%2Fni5ANQpk0mrJlx8FDxNe3C7sP6rldAIakAlmmYzxG4gbP6d8NrawYIclTWeMOT50sQGOqUBWJRNr%2FxvPpn3YCVqc6uwE23e5Xh8NLIHqgwZTwwhe6OP42X5sJ%2Fh%2BqcorKoXdD%2Fv4cPRUmol%2BBtpuoj78LRAlwwyIBSehnXjPiygN9i0WSRIA%2BHympXUaz4LNdRJtHbQ9sGuyAn%2B3UdXwo%2FWciFkc6nWlVEqaKO6ihF90wYokB4W%2FtEWayHo6S4UTCd4n8Jnwl%2BXOWF%2BiWhcRGLwQ3XiQmLNWsri&X-Amz-Signature=ea309da50b11591c8d4bd853d5678e73a507110141ce8f306b319dd3bfd91ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EME6B2E%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T161244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDwFvc7f%2F%2BNnmn4kw1AmwO7dz3sv8Ta4GZGnS%2FHgzBDRwIgBc3z1IpSWG9tO5XD2VVN56hSthMTwYNW2rlytyOLk3AqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQYYkb5otBIXxaHxircA2rSvVCKEwWR0YgW48jEB6orS1KOSCcLvTuN1aEMDXOpBwlp2ly67qe3YbZXU3ckwRZCS7Rezqg%2BvDDUo6mqWKJiaKhJM%2BqPlLGgdttdlB98Em839TtOxld7cxDqNplqT7uP%2Fh1Y%2BUbOIhIiEQPvRDSDPlDCbwkWexjPe2%2BoZugUppmq8syV7vktBJdVThT197AUCvuWpKqWH69NJdkK8uBDXmjue19WpHm0%2FfmiLSnr%2BgSiqSOKbNEF1EEnWRXmUdjg%2FCkVyCmS7xxTCjFDfGHZZAOcVxwWIrDk8XG0RpuvqgEFK7kyQsuZjj9rRE%2F4A29JQGgkxK9eClpx8hRQLNb0Wu2IRIMnomRgWnh5hy87lR9sOYsJGgcE1%2BYwuxvprWqnFBAVU1BItCxdBRK%2BhPsJTA1WmhZ0LbQrtTOW8230e%2BSaegmlN6TMKe5IIvOBUp7u7TypJ0hW1s8xtzyTyU2DTbDfxhXmgM5zy%2F9a7q71D0lao8yE%2Bbs%2B8MtpYGJ8YBUWvR6PhmM8kM7slUhZgILm6evSBc78i%2BHpDefOyFj1NESHionTpImQ2L9jQHwf%2Fni5ANQpk0mrJlx8FDxNe3C7sP6rldAIakAlmmYzxG4gbP6d8NrawYIclTWeMOT50sQGOqUBWJRNr%2FxvPpn3YCVqc6uwE23e5Xh8NLIHqgwZTwwhe6OP42X5sJ%2Fh%2BqcorKoXdD%2Fv4cPRUmol%2BBtpuoj78LRAlwwyIBSehnXjPiygN9i0WSRIA%2BHympXUaz4LNdRJtHbQ9sGuyAn%2B3UdXwo%2FWciFkc6nWlVEqaKO6ihF90wYokB4W%2FtEWayHo6S4UTCd4n8Jnwl%2BXOWF%2BiWhcRGLwQ3XiQmLNWsri&X-Amz-Signature=b0b3d5dd3b227116c2670e6c0a943012b25d2bbacee2b146f9c1dd5fa99f1ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
