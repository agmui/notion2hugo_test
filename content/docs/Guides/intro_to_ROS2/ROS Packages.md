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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2PRMNR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIj5JAOm2eYH14BZmLpZ9Fz3wrlHXKSFuBu3a8NS5oZgIgNHj6bYb5pw12IFlpaBP8fDcxk9GSjh4ZA8dXwhpoTRkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm5VLYEx32lH2197ircA2IZwMVqEAurxFwFNyfL4xFy5t4sumcy1sfzf2iT5reClDeniTMsAK69%2BDHXU%2BjAdnWLVoTaiI04F81otFX8jhRq8EW4r%2B1ZgBtfkWROzo5A2r24Q%2B5HLd17SrZtGqo%2F7IGUx61BbvktbfgYrleabOyQv6zQ%2Brr442GeH5uXzDkrhp6UIXhn1tEaxs5xbXFZuvoQ9k%2BIbJdvyjLchQl8QWL0pvCFnoZ0f6JZO95tpiz099EQUDWk7dm7MF1OJpU8fZBY2hgBjcLq6wezRVtcW4vgJz676bF8t9OhkbV6cOL9Pff2oJLwl0x6ePpp6VtTXb1yuONGEwxoUTzvxFQmqgkPvD3ODA59H9fKHriTGieNBCqkXejEPHnSvdV5OgOtewK2mPKXpar4meQjxCYeNXxpISZTm3rWlRvJIVsIxdaYrhZDkkAepbeY8pzrodv4Gpg%2FZGw31jzrVUDBzKprv4hJeNc5gdX2V0eduHI67qg15zT8Rlclj5QwTWH%2Flb%2FRBhj4KfQIRWrWcu2wsWutIcTZMxs93dnrsg7LjsNs27uRlnaaOhrnNBMfzBXvRHwBZlLQyFOudl4DzKIZHRwGkd4liKA3TFmnx1G4P7ymmFUgwx3Zq2LziviglwvSMNTwp8QGOqUBOsJKO6DZhIn64y9Fg9h2AKX%2FC6gud9gfuWkwpkSN7YseVP1%2FAQQLCorCrwPTxPhPkCBUNwXrQW54NgzbOHqayDlxcPFdHBPkEnb2Zg7cDx7i5zOHbskOX%2F3laUUrE7O512Uaa2g%2FnlPYX22ZaO9j4ScH1KFz5VBHJq%2B%2BT%2Bzpz6El4lNGIk2FCWL3l9dL%2BYpjuMmSSdOCf8lleAtz7QkvQQjHPMPs&X-Amz-Signature=87e2d6bd2b9dc84dac96783fd8562c9f815b2ea569cb79bfa13e96d80673d85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2PRMNR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIj5JAOm2eYH14BZmLpZ9Fz3wrlHXKSFuBu3a8NS5oZgIgNHj6bYb5pw12IFlpaBP8fDcxk9GSjh4ZA8dXwhpoTRkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm5VLYEx32lH2197ircA2IZwMVqEAurxFwFNyfL4xFy5t4sumcy1sfzf2iT5reClDeniTMsAK69%2BDHXU%2BjAdnWLVoTaiI04F81otFX8jhRq8EW4r%2B1ZgBtfkWROzo5A2r24Q%2B5HLd17SrZtGqo%2F7IGUx61BbvktbfgYrleabOyQv6zQ%2Brr442GeH5uXzDkrhp6UIXhn1tEaxs5xbXFZuvoQ9k%2BIbJdvyjLchQl8QWL0pvCFnoZ0f6JZO95tpiz099EQUDWk7dm7MF1OJpU8fZBY2hgBjcLq6wezRVtcW4vgJz676bF8t9OhkbV6cOL9Pff2oJLwl0x6ePpp6VtTXb1yuONGEwxoUTzvxFQmqgkPvD3ODA59H9fKHriTGieNBCqkXejEPHnSvdV5OgOtewK2mPKXpar4meQjxCYeNXxpISZTm3rWlRvJIVsIxdaYrhZDkkAepbeY8pzrodv4Gpg%2FZGw31jzrVUDBzKprv4hJeNc5gdX2V0eduHI67qg15zT8Rlclj5QwTWH%2Flb%2FRBhj4KfQIRWrWcu2wsWutIcTZMxs93dnrsg7LjsNs27uRlnaaOhrnNBMfzBXvRHwBZlLQyFOudl4DzKIZHRwGkd4liKA3TFmnx1G4P7ymmFUgwx3Zq2LziviglwvSMNTwp8QGOqUBOsJKO6DZhIn64y9Fg9h2AKX%2FC6gud9gfuWkwpkSN7YseVP1%2FAQQLCorCrwPTxPhPkCBUNwXrQW54NgzbOHqayDlxcPFdHBPkEnb2Zg7cDx7i5zOHbskOX%2F3laUUrE7O512Uaa2g%2FnlPYX22ZaO9j4ScH1KFz5VBHJq%2B%2BT%2Bzpz6El4lNGIk2FCWL3l9dL%2BYpjuMmSSdOCf8lleAtz7QkvQQjHPMPs&X-Amz-Signature=4225831de42c4366154bedd6c0dec612598aa014d58ce4ddb8e209fa266e6dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2PRMNR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIj5JAOm2eYH14BZmLpZ9Fz3wrlHXKSFuBu3a8NS5oZgIgNHj6bYb5pw12IFlpaBP8fDcxk9GSjh4ZA8dXwhpoTRkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm5VLYEx32lH2197ircA2IZwMVqEAurxFwFNyfL4xFy5t4sumcy1sfzf2iT5reClDeniTMsAK69%2BDHXU%2BjAdnWLVoTaiI04F81otFX8jhRq8EW4r%2B1ZgBtfkWROzo5A2r24Q%2B5HLd17SrZtGqo%2F7IGUx61BbvktbfgYrleabOyQv6zQ%2Brr442GeH5uXzDkrhp6UIXhn1tEaxs5xbXFZuvoQ9k%2BIbJdvyjLchQl8QWL0pvCFnoZ0f6JZO95tpiz099EQUDWk7dm7MF1OJpU8fZBY2hgBjcLq6wezRVtcW4vgJz676bF8t9OhkbV6cOL9Pff2oJLwl0x6ePpp6VtTXb1yuONGEwxoUTzvxFQmqgkPvD3ODA59H9fKHriTGieNBCqkXejEPHnSvdV5OgOtewK2mPKXpar4meQjxCYeNXxpISZTm3rWlRvJIVsIxdaYrhZDkkAepbeY8pzrodv4Gpg%2FZGw31jzrVUDBzKprv4hJeNc5gdX2V0eduHI67qg15zT8Rlclj5QwTWH%2Flb%2FRBhj4KfQIRWrWcu2wsWutIcTZMxs93dnrsg7LjsNs27uRlnaaOhrnNBMfzBXvRHwBZlLQyFOudl4DzKIZHRwGkd4liKA3TFmnx1G4P7ymmFUgwx3Zq2LziviglwvSMNTwp8QGOqUBOsJKO6DZhIn64y9Fg9h2AKX%2FC6gud9gfuWkwpkSN7YseVP1%2FAQQLCorCrwPTxPhPkCBUNwXrQW54NgzbOHqayDlxcPFdHBPkEnb2Zg7cDx7i5zOHbskOX%2F3laUUrE7O512Uaa2g%2FnlPYX22ZaO9j4ScH1KFz5VBHJq%2B%2BT%2Bzpz6El4lNGIk2FCWL3l9dL%2BYpjuMmSSdOCf8lleAtz7QkvQQjHPMPs&X-Amz-Signature=a2de395bd08eba876ec749dc22f8641faa7930d964186341495cca2310583232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2PRMNR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIj5JAOm2eYH14BZmLpZ9Fz3wrlHXKSFuBu3a8NS5oZgIgNHj6bYb5pw12IFlpaBP8fDcxk9GSjh4ZA8dXwhpoTRkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm5VLYEx32lH2197ircA2IZwMVqEAurxFwFNyfL4xFy5t4sumcy1sfzf2iT5reClDeniTMsAK69%2BDHXU%2BjAdnWLVoTaiI04F81otFX8jhRq8EW4r%2B1ZgBtfkWROzo5A2r24Q%2B5HLd17SrZtGqo%2F7IGUx61BbvktbfgYrleabOyQv6zQ%2Brr442GeH5uXzDkrhp6UIXhn1tEaxs5xbXFZuvoQ9k%2BIbJdvyjLchQl8QWL0pvCFnoZ0f6JZO95tpiz099EQUDWk7dm7MF1OJpU8fZBY2hgBjcLq6wezRVtcW4vgJz676bF8t9OhkbV6cOL9Pff2oJLwl0x6ePpp6VtTXb1yuONGEwxoUTzvxFQmqgkPvD3ODA59H9fKHriTGieNBCqkXejEPHnSvdV5OgOtewK2mPKXpar4meQjxCYeNXxpISZTm3rWlRvJIVsIxdaYrhZDkkAepbeY8pzrodv4Gpg%2FZGw31jzrVUDBzKprv4hJeNc5gdX2V0eduHI67qg15zT8Rlclj5QwTWH%2Flb%2FRBhj4KfQIRWrWcu2wsWutIcTZMxs93dnrsg7LjsNs27uRlnaaOhrnNBMfzBXvRHwBZlLQyFOudl4DzKIZHRwGkd4liKA3TFmnx1G4P7ymmFUgwx3Zq2LziviglwvSMNTwp8QGOqUBOsJKO6DZhIn64y9Fg9h2AKX%2FC6gud9gfuWkwpkSN7YseVP1%2FAQQLCorCrwPTxPhPkCBUNwXrQW54NgzbOHqayDlxcPFdHBPkEnb2Zg7cDx7i5zOHbskOX%2F3laUUrE7O512Uaa2g%2FnlPYX22ZaO9j4ScH1KFz5VBHJq%2B%2BT%2Bzpz6El4lNGIk2FCWL3l9dL%2BYpjuMmSSdOCf8lleAtz7QkvQQjHPMPs&X-Amz-Signature=85a95f5aa40115edfa0c72d0554d34d16dd06ea3c66c18599c9bab0edd9ddfa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2PRMNR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIj5JAOm2eYH14BZmLpZ9Fz3wrlHXKSFuBu3a8NS5oZgIgNHj6bYb5pw12IFlpaBP8fDcxk9GSjh4ZA8dXwhpoTRkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm5VLYEx32lH2197ircA2IZwMVqEAurxFwFNyfL4xFy5t4sumcy1sfzf2iT5reClDeniTMsAK69%2BDHXU%2BjAdnWLVoTaiI04F81otFX8jhRq8EW4r%2B1ZgBtfkWROzo5A2r24Q%2B5HLd17SrZtGqo%2F7IGUx61BbvktbfgYrleabOyQv6zQ%2Brr442GeH5uXzDkrhp6UIXhn1tEaxs5xbXFZuvoQ9k%2BIbJdvyjLchQl8QWL0pvCFnoZ0f6JZO95tpiz099EQUDWk7dm7MF1OJpU8fZBY2hgBjcLq6wezRVtcW4vgJz676bF8t9OhkbV6cOL9Pff2oJLwl0x6ePpp6VtTXb1yuONGEwxoUTzvxFQmqgkPvD3ODA59H9fKHriTGieNBCqkXejEPHnSvdV5OgOtewK2mPKXpar4meQjxCYeNXxpISZTm3rWlRvJIVsIxdaYrhZDkkAepbeY8pzrodv4Gpg%2FZGw31jzrVUDBzKprv4hJeNc5gdX2V0eduHI67qg15zT8Rlclj5QwTWH%2Flb%2FRBhj4KfQIRWrWcu2wsWutIcTZMxs93dnrsg7LjsNs27uRlnaaOhrnNBMfzBXvRHwBZlLQyFOudl4DzKIZHRwGkd4liKA3TFmnx1G4P7ymmFUgwx3Zq2LziviglwvSMNTwp8QGOqUBOsJKO6DZhIn64y9Fg9h2AKX%2FC6gud9gfuWkwpkSN7YseVP1%2FAQQLCorCrwPTxPhPkCBUNwXrQW54NgzbOHqayDlxcPFdHBPkEnb2Zg7cDx7i5zOHbskOX%2F3laUUrE7O512Uaa2g%2FnlPYX22ZaO9j4ScH1KFz5VBHJq%2B%2BT%2Bzpz6El4lNGIk2FCWL3l9dL%2BYpjuMmSSdOCf8lleAtz7QkvQQjHPMPs&X-Amz-Signature=73c005b5c180e52eea52f980ce3fd08addb7040cc94f27eed9b609f40f7718e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2PRMNR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIj5JAOm2eYH14BZmLpZ9Fz3wrlHXKSFuBu3a8NS5oZgIgNHj6bYb5pw12IFlpaBP8fDcxk9GSjh4ZA8dXwhpoTRkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm5VLYEx32lH2197ircA2IZwMVqEAurxFwFNyfL4xFy5t4sumcy1sfzf2iT5reClDeniTMsAK69%2BDHXU%2BjAdnWLVoTaiI04F81otFX8jhRq8EW4r%2B1ZgBtfkWROzo5A2r24Q%2B5HLd17SrZtGqo%2F7IGUx61BbvktbfgYrleabOyQv6zQ%2Brr442GeH5uXzDkrhp6UIXhn1tEaxs5xbXFZuvoQ9k%2BIbJdvyjLchQl8QWL0pvCFnoZ0f6JZO95tpiz099EQUDWk7dm7MF1OJpU8fZBY2hgBjcLq6wezRVtcW4vgJz676bF8t9OhkbV6cOL9Pff2oJLwl0x6ePpp6VtTXb1yuONGEwxoUTzvxFQmqgkPvD3ODA59H9fKHriTGieNBCqkXejEPHnSvdV5OgOtewK2mPKXpar4meQjxCYeNXxpISZTm3rWlRvJIVsIxdaYrhZDkkAepbeY8pzrodv4Gpg%2FZGw31jzrVUDBzKprv4hJeNc5gdX2V0eduHI67qg15zT8Rlclj5QwTWH%2Flb%2FRBhj4KfQIRWrWcu2wsWutIcTZMxs93dnrsg7LjsNs27uRlnaaOhrnNBMfzBXvRHwBZlLQyFOudl4DzKIZHRwGkd4liKA3TFmnx1G4P7ymmFUgwx3Zq2LziviglwvSMNTwp8QGOqUBOsJKO6DZhIn64y9Fg9h2AKX%2FC6gud9gfuWkwpkSN7YseVP1%2FAQQLCorCrwPTxPhPkCBUNwXrQW54NgzbOHqayDlxcPFdHBPkEnb2Zg7cDx7i5zOHbskOX%2F3laUUrE7O512Uaa2g%2FnlPYX22ZaO9j4ScH1KFz5VBHJq%2B%2BT%2Bzpz6El4lNGIk2FCWL3l9dL%2BYpjuMmSSdOCf8lleAtz7QkvQQjHPMPs&X-Amz-Signature=2ca906c143b9655412a9a683ed25e8b638e2589bbca60407cb5c57ce88e04aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2PRMNR%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIj5JAOm2eYH14BZmLpZ9Fz3wrlHXKSFuBu3a8NS5oZgIgNHj6bYb5pw12IFlpaBP8fDcxk9GSjh4ZA8dXwhpoTRkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm5VLYEx32lH2197ircA2IZwMVqEAurxFwFNyfL4xFy5t4sumcy1sfzf2iT5reClDeniTMsAK69%2BDHXU%2BjAdnWLVoTaiI04F81otFX8jhRq8EW4r%2B1ZgBtfkWROzo5A2r24Q%2B5HLd17SrZtGqo%2F7IGUx61BbvktbfgYrleabOyQv6zQ%2Brr442GeH5uXzDkrhp6UIXhn1tEaxs5xbXFZuvoQ9k%2BIbJdvyjLchQl8QWL0pvCFnoZ0f6JZO95tpiz099EQUDWk7dm7MF1OJpU8fZBY2hgBjcLq6wezRVtcW4vgJz676bF8t9OhkbV6cOL9Pff2oJLwl0x6ePpp6VtTXb1yuONGEwxoUTzvxFQmqgkPvD3ODA59H9fKHriTGieNBCqkXejEPHnSvdV5OgOtewK2mPKXpar4meQjxCYeNXxpISZTm3rWlRvJIVsIxdaYrhZDkkAepbeY8pzrodv4Gpg%2FZGw31jzrVUDBzKprv4hJeNc5gdX2V0eduHI67qg15zT8Rlclj5QwTWH%2Flb%2FRBhj4KfQIRWrWcu2wsWutIcTZMxs93dnrsg7LjsNs27uRlnaaOhrnNBMfzBXvRHwBZlLQyFOudl4DzKIZHRwGkd4liKA3TFmnx1G4P7ymmFUgwx3Zq2LziviglwvSMNTwp8QGOqUBOsJKO6DZhIn64y9Fg9h2AKX%2FC6gud9gfuWkwpkSN7YseVP1%2FAQQLCorCrwPTxPhPkCBUNwXrQW54NgzbOHqayDlxcPFdHBPkEnb2Zg7cDx7i5zOHbskOX%2F3laUUrE7O512Uaa2g%2FnlPYX22ZaO9j4ScH1KFz5VBHJq%2B%2BT%2Bzpz6El4lNGIk2FCWL3l9dL%2BYpjuMmSSdOCf8lleAtz7QkvQQjHPMPs&X-Amz-Signature=2ec1f0ad8236e244f4a03494fb5bad404791ed8a99594f1eccaafb677d7b05a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
