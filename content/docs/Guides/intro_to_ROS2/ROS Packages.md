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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2U5NRDM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8lBWAq0%2F7r90MIIy7%2BmJ%2FZpwRWZhjjRjYQI07RiEmCAiAd3%2BCeNCMi4D%2BUgAFfEpeEBPDsZdT5fRvj%2BWWxNQdgvCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGlDT3glMVFzZxX6hKtwDujJZxlZIzTwBNfMaaL8By5wO23vkGJP2d6IzNk8Bs8z0SbF7Ko9Ekq8CbtIIiN3dkHqzrWXhutBKflyU33d44hG1YFPwy380%2FDpCAWrM2C%2Bz%2B6BWdt4B4ebziYLniT1sJLS7fyc3Fw9Mem8qbfGWBFa4a5TdMTMIccGdSR2Pg%2BjC5NiFDYWsVH7wqYNDdDspXbFwEcFPGI0pyERMr3%2FUI7CEFrAIFnAQOFA4%2BkujQ50a6wmUP8IkJmUMczIUkfQlFq9dBQoHCNIOODaIKONwMJMki%2BMN1K1NwTzNBBYLseUZRvv%2Bupv4CPLfoRTYOSazYgyVpQYnupeUR43KCEHujagSMSIeqMdtnPNaqUJ%2FzBU2%2BvL%2BzBc6r6IgFxYsLO1IZ6uuJBr344EiTLNN3WvK55gRI0lQlK5Mmk2gLfMqbzL7UamsMW9fYDqsWYWoXUPAuutz72lgTNY6JRoDIZVW8Z%2B10asvmWR0PTpRYS33K4HLgkD98YVE9jhQF35GUxaxKq8z%2BHKXcaTTSvyL3AgDxrQ9uiEVCQmoW7kGPG21R4cNqaZlZ7azPtjNXCnDHeibkwcW1u5%2FrwvlER7Fd%2B3bH1yn%2BxBMQhzXwiNOlZ3bS2Du3yErmfWYOtwgLPow2K%2FkwQY6pgEbKby1wcri4%2B2vqQ8BV%2BDFARsqguwU21hxXGBYGf1RsiuJ1u9JHaksq6dP2Soc9vls7j49VXzsiiK7bL%2BZKXjYkM%2Bzk%2F7f1JrUHIakOR2S%2BvxkzxEx%2FtFXWzJ0%2BpVIQsdNjO5UIMzdQZYVqIN1JGPKwbtWbxUVcApvW1q5Lx56YBuLj0nrv91c7jdq4ZguDBNlWMWdqpM%2Bp3dgnPgm33eCtxNXWiRQ&X-Amz-Signature=7e4cfbd444b422bfacf8b4796340ab5952876871d23db79c25e5c26f4fef018c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2U5NRDM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8lBWAq0%2F7r90MIIy7%2BmJ%2FZpwRWZhjjRjYQI07RiEmCAiAd3%2BCeNCMi4D%2BUgAFfEpeEBPDsZdT5fRvj%2BWWxNQdgvCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGlDT3glMVFzZxX6hKtwDujJZxlZIzTwBNfMaaL8By5wO23vkGJP2d6IzNk8Bs8z0SbF7Ko9Ekq8CbtIIiN3dkHqzrWXhutBKflyU33d44hG1YFPwy380%2FDpCAWrM2C%2Bz%2B6BWdt4B4ebziYLniT1sJLS7fyc3Fw9Mem8qbfGWBFa4a5TdMTMIccGdSR2Pg%2BjC5NiFDYWsVH7wqYNDdDspXbFwEcFPGI0pyERMr3%2FUI7CEFrAIFnAQOFA4%2BkujQ50a6wmUP8IkJmUMczIUkfQlFq9dBQoHCNIOODaIKONwMJMki%2BMN1K1NwTzNBBYLseUZRvv%2Bupv4CPLfoRTYOSazYgyVpQYnupeUR43KCEHujagSMSIeqMdtnPNaqUJ%2FzBU2%2BvL%2BzBc6r6IgFxYsLO1IZ6uuJBr344EiTLNN3WvK55gRI0lQlK5Mmk2gLfMqbzL7UamsMW9fYDqsWYWoXUPAuutz72lgTNY6JRoDIZVW8Z%2B10asvmWR0PTpRYS33K4HLgkD98YVE9jhQF35GUxaxKq8z%2BHKXcaTTSvyL3AgDxrQ9uiEVCQmoW7kGPG21R4cNqaZlZ7azPtjNXCnDHeibkwcW1u5%2FrwvlER7Fd%2B3bH1yn%2BxBMQhzXwiNOlZ3bS2Du3yErmfWYOtwgLPow2K%2FkwQY6pgEbKby1wcri4%2B2vqQ8BV%2BDFARsqguwU21hxXGBYGf1RsiuJ1u9JHaksq6dP2Soc9vls7j49VXzsiiK7bL%2BZKXjYkM%2Bzk%2F7f1JrUHIakOR2S%2BvxkzxEx%2FtFXWzJ0%2BpVIQsdNjO5UIMzdQZYVqIN1JGPKwbtWbxUVcApvW1q5Lx56YBuLj0nrv91c7jdq4ZguDBNlWMWdqpM%2Bp3dgnPgm33eCtxNXWiRQ&X-Amz-Signature=91deee75e515de9f3423d61c635423400220e930c728bc2351b863755e20e925&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2U5NRDM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8lBWAq0%2F7r90MIIy7%2BmJ%2FZpwRWZhjjRjYQI07RiEmCAiAd3%2BCeNCMi4D%2BUgAFfEpeEBPDsZdT5fRvj%2BWWxNQdgvCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGlDT3glMVFzZxX6hKtwDujJZxlZIzTwBNfMaaL8By5wO23vkGJP2d6IzNk8Bs8z0SbF7Ko9Ekq8CbtIIiN3dkHqzrWXhutBKflyU33d44hG1YFPwy380%2FDpCAWrM2C%2Bz%2B6BWdt4B4ebziYLniT1sJLS7fyc3Fw9Mem8qbfGWBFa4a5TdMTMIccGdSR2Pg%2BjC5NiFDYWsVH7wqYNDdDspXbFwEcFPGI0pyERMr3%2FUI7CEFrAIFnAQOFA4%2BkujQ50a6wmUP8IkJmUMczIUkfQlFq9dBQoHCNIOODaIKONwMJMki%2BMN1K1NwTzNBBYLseUZRvv%2Bupv4CPLfoRTYOSazYgyVpQYnupeUR43KCEHujagSMSIeqMdtnPNaqUJ%2FzBU2%2BvL%2BzBc6r6IgFxYsLO1IZ6uuJBr344EiTLNN3WvK55gRI0lQlK5Mmk2gLfMqbzL7UamsMW9fYDqsWYWoXUPAuutz72lgTNY6JRoDIZVW8Z%2B10asvmWR0PTpRYS33K4HLgkD98YVE9jhQF35GUxaxKq8z%2BHKXcaTTSvyL3AgDxrQ9uiEVCQmoW7kGPG21R4cNqaZlZ7azPtjNXCnDHeibkwcW1u5%2FrwvlER7Fd%2B3bH1yn%2BxBMQhzXwiNOlZ3bS2Du3yErmfWYOtwgLPow2K%2FkwQY6pgEbKby1wcri4%2B2vqQ8BV%2BDFARsqguwU21hxXGBYGf1RsiuJ1u9JHaksq6dP2Soc9vls7j49VXzsiiK7bL%2BZKXjYkM%2Bzk%2F7f1JrUHIakOR2S%2BvxkzxEx%2FtFXWzJ0%2BpVIQsdNjO5UIMzdQZYVqIN1JGPKwbtWbxUVcApvW1q5Lx56YBuLj0nrv91c7jdq4ZguDBNlWMWdqpM%2Bp3dgnPgm33eCtxNXWiRQ&X-Amz-Signature=e949fc63ce9f2ddc1427c2dcd552dc8a536a5976b7b891b8da9e6648d69cb66c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2U5NRDM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8lBWAq0%2F7r90MIIy7%2BmJ%2FZpwRWZhjjRjYQI07RiEmCAiAd3%2BCeNCMi4D%2BUgAFfEpeEBPDsZdT5fRvj%2BWWxNQdgvCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGlDT3glMVFzZxX6hKtwDujJZxlZIzTwBNfMaaL8By5wO23vkGJP2d6IzNk8Bs8z0SbF7Ko9Ekq8CbtIIiN3dkHqzrWXhutBKflyU33d44hG1YFPwy380%2FDpCAWrM2C%2Bz%2B6BWdt4B4ebziYLniT1sJLS7fyc3Fw9Mem8qbfGWBFa4a5TdMTMIccGdSR2Pg%2BjC5NiFDYWsVH7wqYNDdDspXbFwEcFPGI0pyERMr3%2FUI7CEFrAIFnAQOFA4%2BkujQ50a6wmUP8IkJmUMczIUkfQlFq9dBQoHCNIOODaIKONwMJMki%2BMN1K1NwTzNBBYLseUZRvv%2Bupv4CPLfoRTYOSazYgyVpQYnupeUR43KCEHujagSMSIeqMdtnPNaqUJ%2FzBU2%2BvL%2BzBc6r6IgFxYsLO1IZ6uuJBr344EiTLNN3WvK55gRI0lQlK5Mmk2gLfMqbzL7UamsMW9fYDqsWYWoXUPAuutz72lgTNY6JRoDIZVW8Z%2B10asvmWR0PTpRYS33K4HLgkD98YVE9jhQF35GUxaxKq8z%2BHKXcaTTSvyL3AgDxrQ9uiEVCQmoW7kGPG21R4cNqaZlZ7azPtjNXCnDHeibkwcW1u5%2FrwvlER7Fd%2B3bH1yn%2BxBMQhzXwiNOlZ3bS2Du3yErmfWYOtwgLPow2K%2FkwQY6pgEbKby1wcri4%2B2vqQ8BV%2BDFARsqguwU21hxXGBYGf1RsiuJ1u9JHaksq6dP2Soc9vls7j49VXzsiiK7bL%2BZKXjYkM%2Bzk%2F7f1JrUHIakOR2S%2BvxkzxEx%2FtFXWzJ0%2BpVIQsdNjO5UIMzdQZYVqIN1JGPKwbtWbxUVcApvW1q5Lx56YBuLj0nrv91c7jdq4ZguDBNlWMWdqpM%2Bp3dgnPgm33eCtxNXWiRQ&X-Amz-Signature=909ef136b6740821dbc80ab14446482e3d047d88f1ec37eed324b7199ff35155&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2U5NRDM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8lBWAq0%2F7r90MIIy7%2BmJ%2FZpwRWZhjjRjYQI07RiEmCAiAd3%2BCeNCMi4D%2BUgAFfEpeEBPDsZdT5fRvj%2BWWxNQdgvCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGlDT3glMVFzZxX6hKtwDujJZxlZIzTwBNfMaaL8By5wO23vkGJP2d6IzNk8Bs8z0SbF7Ko9Ekq8CbtIIiN3dkHqzrWXhutBKflyU33d44hG1YFPwy380%2FDpCAWrM2C%2Bz%2B6BWdt4B4ebziYLniT1sJLS7fyc3Fw9Mem8qbfGWBFa4a5TdMTMIccGdSR2Pg%2BjC5NiFDYWsVH7wqYNDdDspXbFwEcFPGI0pyERMr3%2FUI7CEFrAIFnAQOFA4%2BkujQ50a6wmUP8IkJmUMczIUkfQlFq9dBQoHCNIOODaIKONwMJMki%2BMN1K1NwTzNBBYLseUZRvv%2Bupv4CPLfoRTYOSazYgyVpQYnupeUR43KCEHujagSMSIeqMdtnPNaqUJ%2FzBU2%2BvL%2BzBc6r6IgFxYsLO1IZ6uuJBr344EiTLNN3WvK55gRI0lQlK5Mmk2gLfMqbzL7UamsMW9fYDqsWYWoXUPAuutz72lgTNY6JRoDIZVW8Z%2B10asvmWR0PTpRYS33K4HLgkD98YVE9jhQF35GUxaxKq8z%2BHKXcaTTSvyL3AgDxrQ9uiEVCQmoW7kGPG21R4cNqaZlZ7azPtjNXCnDHeibkwcW1u5%2FrwvlER7Fd%2B3bH1yn%2BxBMQhzXwiNOlZ3bS2Du3yErmfWYOtwgLPow2K%2FkwQY6pgEbKby1wcri4%2B2vqQ8BV%2BDFARsqguwU21hxXGBYGf1RsiuJ1u9JHaksq6dP2Soc9vls7j49VXzsiiK7bL%2BZKXjYkM%2Bzk%2F7f1JrUHIakOR2S%2BvxkzxEx%2FtFXWzJ0%2BpVIQsdNjO5UIMzdQZYVqIN1JGPKwbtWbxUVcApvW1q5Lx56YBuLj0nrv91c7jdq4ZguDBNlWMWdqpM%2Bp3dgnPgm33eCtxNXWiRQ&X-Amz-Signature=380952512b4dfb4b4ab7fa253213c2014a1bcf83f47a17ab72f1d3900936fa45&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2U5NRDM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8lBWAq0%2F7r90MIIy7%2BmJ%2FZpwRWZhjjRjYQI07RiEmCAiAd3%2BCeNCMi4D%2BUgAFfEpeEBPDsZdT5fRvj%2BWWxNQdgvCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGlDT3glMVFzZxX6hKtwDujJZxlZIzTwBNfMaaL8By5wO23vkGJP2d6IzNk8Bs8z0SbF7Ko9Ekq8CbtIIiN3dkHqzrWXhutBKflyU33d44hG1YFPwy380%2FDpCAWrM2C%2Bz%2B6BWdt4B4ebziYLniT1sJLS7fyc3Fw9Mem8qbfGWBFa4a5TdMTMIccGdSR2Pg%2BjC5NiFDYWsVH7wqYNDdDspXbFwEcFPGI0pyERMr3%2FUI7CEFrAIFnAQOFA4%2BkujQ50a6wmUP8IkJmUMczIUkfQlFq9dBQoHCNIOODaIKONwMJMki%2BMN1K1NwTzNBBYLseUZRvv%2Bupv4CPLfoRTYOSazYgyVpQYnupeUR43KCEHujagSMSIeqMdtnPNaqUJ%2FzBU2%2BvL%2BzBc6r6IgFxYsLO1IZ6uuJBr344EiTLNN3WvK55gRI0lQlK5Mmk2gLfMqbzL7UamsMW9fYDqsWYWoXUPAuutz72lgTNY6JRoDIZVW8Z%2B10asvmWR0PTpRYS33K4HLgkD98YVE9jhQF35GUxaxKq8z%2BHKXcaTTSvyL3AgDxrQ9uiEVCQmoW7kGPG21R4cNqaZlZ7azPtjNXCnDHeibkwcW1u5%2FrwvlER7Fd%2B3bH1yn%2BxBMQhzXwiNOlZ3bS2Du3yErmfWYOtwgLPow2K%2FkwQY6pgEbKby1wcri4%2B2vqQ8BV%2BDFARsqguwU21hxXGBYGf1RsiuJ1u9JHaksq6dP2Soc9vls7j49VXzsiiK7bL%2BZKXjYkM%2Bzk%2F7f1JrUHIakOR2S%2BvxkzxEx%2FtFXWzJ0%2BpVIQsdNjO5UIMzdQZYVqIN1JGPKwbtWbxUVcApvW1q5Lx56YBuLj0nrv91c7jdq4ZguDBNlWMWdqpM%2Bp3dgnPgm33eCtxNXWiRQ&X-Amz-Signature=5b427b7fb5dc703e85710f9c31cdea336355f92228e10c8e8a724fd5742a93df&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2U5NRDM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8lBWAq0%2F7r90MIIy7%2BmJ%2FZpwRWZhjjRjYQI07RiEmCAiAd3%2BCeNCMi4D%2BUgAFfEpeEBPDsZdT5fRvj%2BWWxNQdgvCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGlDT3glMVFzZxX6hKtwDujJZxlZIzTwBNfMaaL8By5wO23vkGJP2d6IzNk8Bs8z0SbF7Ko9Ekq8CbtIIiN3dkHqzrWXhutBKflyU33d44hG1YFPwy380%2FDpCAWrM2C%2Bz%2B6BWdt4B4ebziYLniT1sJLS7fyc3Fw9Mem8qbfGWBFa4a5TdMTMIccGdSR2Pg%2BjC5NiFDYWsVH7wqYNDdDspXbFwEcFPGI0pyERMr3%2FUI7CEFrAIFnAQOFA4%2BkujQ50a6wmUP8IkJmUMczIUkfQlFq9dBQoHCNIOODaIKONwMJMki%2BMN1K1NwTzNBBYLseUZRvv%2Bupv4CPLfoRTYOSazYgyVpQYnupeUR43KCEHujagSMSIeqMdtnPNaqUJ%2FzBU2%2BvL%2BzBc6r6IgFxYsLO1IZ6uuJBr344EiTLNN3WvK55gRI0lQlK5Mmk2gLfMqbzL7UamsMW9fYDqsWYWoXUPAuutz72lgTNY6JRoDIZVW8Z%2B10asvmWR0PTpRYS33K4HLgkD98YVE9jhQF35GUxaxKq8z%2BHKXcaTTSvyL3AgDxrQ9uiEVCQmoW7kGPG21R4cNqaZlZ7azPtjNXCnDHeibkwcW1u5%2FrwvlER7Fd%2B3bH1yn%2BxBMQhzXwiNOlZ3bS2Du3yErmfWYOtwgLPow2K%2FkwQY6pgEbKby1wcri4%2B2vqQ8BV%2BDFARsqguwU21hxXGBYGf1RsiuJ1u9JHaksq6dP2Soc9vls7j49VXzsiiK7bL%2BZKXjYkM%2Bzk%2F7f1JrUHIakOR2S%2BvxkzxEx%2FtFXWzJ0%2BpVIQsdNjO5UIMzdQZYVqIN1JGPKwbtWbxUVcApvW1q5Lx56YBuLj0nrv91c7jdq4ZguDBNlWMWdqpM%2Bp3dgnPgm33eCtxNXWiRQ&X-Amz-Signature=2ca957a14904b62ba8737457308f98af505ea31fea420a4a86bc2c9b1c868bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
