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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQWCAUV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICXDY%2BksV8DlZB0xElh3IG86FoOPvWeMSjhdDV1EOtXjAiBMMW7KfEj74KxZUyleVav0C6hVaIqOTEtHJRF3pilXDCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMBlOyYO072MrCoi0XKtwDkxb9AHsvuAjdDbZju9plDPaRg3b0zEFcpes3AltUX%2B9ImRAsHqwG05uzdT4%2B0OTk2lLmcEkVGoMERAZFJqa0ZTh2DMy8q%2FYuGgLjylAs9u63CVHrUunxhFpS93UkgJp7P4WvjtqnYcg7apNqtgA4S3J9yklPQ3zGPz7vVyAilbP8I7nq5h%2FOA%2BWUkCGATamK%2B9aft1TQWV9UcMGXH643AaiYz4rVwtivzDdzhGD%2BuwepJWkjcuuFGTAV82Y0v9lzbIQ6zDRtrxQAQWrIud8KF%2FmmbE%2Fa8EHYBJGd8q4mu2Tax%2FNQMZYoSlK%2FHb%2FWtNvxsMQkJDu4R7Vt0LeQu7ViioLTz6kxMfG2gLoYX2FG%2BWJbluo4s2tATixTI6qZDExtkQcbu4utTjD8m0ScyeNfK5oBFlsz63jZmzNUxJx48%2Bco5%2FXWIqIEgQpCsqYYNl37cEmTVqU19QkFHVJAxHQtAr9Nd3AsahmYChXPWPKUvBs6pt7OnyP8vknBGbAfzRodd9Qrj4PtJ2GwWdsvw2hEMA9m7Ev051fOJSF2E3v%2BMFx13amY%2BDaDl8MR5Akd6Vd5VkRAOMGgG%2BQn6w%2FhT4WUjiwGHS69XHJ0x5GfC8lFtodCGXHdJ6%2BL69albcwwzJ31wgY6pgErEE5A1tQtEKCvybN06EaBY72qbPPDV1ztFITAdWW9aQXmGLSMVs4YjmnDBkhr%2BmSF8n8HVPwgx%2FLMliJ909mNiUhWvibtyHXtUYiNKqcY48SfSBdRFwogjKa%2FHt56Qpv5P8gur8OZTuk%2BLcWb90CcKcpAC9FN7f7kZljDQOzuK%2FCq9s%2BUnmALN8IwSIf8rv%2BURwWNps89egDTdxA2AjsuaTPrcSqh&X-Amz-Signature=2ffca9508557e354584f51e6ba270ffaab7bf86aa9804f2bee7cfaf256b415c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQWCAUV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICXDY%2BksV8DlZB0xElh3IG86FoOPvWeMSjhdDV1EOtXjAiBMMW7KfEj74KxZUyleVav0C6hVaIqOTEtHJRF3pilXDCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMBlOyYO072MrCoi0XKtwDkxb9AHsvuAjdDbZju9plDPaRg3b0zEFcpes3AltUX%2B9ImRAsHqwG05uzdT4%2B0OTk2lLmcEkVGoMERAZFJqa0ZTh2DMy8q%2FYuGgLjylAs9u63CVHrUunxhFpS93UkgJp7P4WvjtqnYcg7apNqtgA4S3J9yklPQ3zGPz7vVyAilbP8I7nq5h%2FOA%2BWUkCGATamK%2B9aft1TQWV9UcMGXH643AaiYz4rVwtivzDdzhGD%2BuwepJWkjcuuFGTAV82Y0v9lzbIQ6zDRtrxQAQWrIud8KF%2FmmbE%2Fa8EHYBJGd8q4mu2Tax%2FNQMZYoSlK%2FHb%2FWtNvxsMQkJDu4R7Vt0LeQu7ViioLTz6kxMfG2gLoYX2FG%2BWJbluo4s2tATixTI6qZDExtkQcbu4utTjD8m0ScyeNfK5oBFlsz63jZmzNUxJx48%2Bco5%2FXWIqIEgQpCsqYYNl37cEmTVqU19QkFHVJAxHQtAr9Nd3AsahmYChXPWPKUvBs6pt7OnyP8vknBGbAfzRodd9Qrj4PtJ2GwWdsvw2hEMA9m7Ev051fOJSF2E3v%2BMFx13amY%2BDaDl8MR5Akd6Vd5VkRAOMGgG%2BQn6w%2FhT4WUjiwGHS69XHJ0x5GfC8lFtodCGXHdJ6%2BL69albcwwzJ31wgY6pgErEE5A1tQtEKCvybN06EaBY72qbPPDV1ztFITAdWW9aQXmGLSMVs4YjmnDBkhr%2BmSF8n8HVPwgx%2FLMliJ909mNiUhWvibtyHXtUYiNKqcY48SfSBdRFwogjKa%2FHt56Qpv5P8gur8OZTuk%2BLcWb90CcKcpAC9FN7f7kZljDQOzuK%2FCq9s%2BUnmALN8IwSIf8rv%2BURwWNps89egDTdxA2AjsuaTPrcSqh&X-Amz-Signature=82d4efe212c6e78767b62e7cd722b0fbd5db732dbd8a41524da9e52a5057ec42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQWCAUV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICXDY%2BksV8DlZB0xElh3IG86FoOPvWeMSjhdDV1EOtXjAiBMMW7KfEj74KxZUyleVav0C6hVaIqOTEtHJRF3pilXDCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMBlOyYO072MrCoi0XKtwDkxb9AHsvuAjdDbZju9plDPaRg3b0zEFcpes3AltUX%2B9ImRAsHqwG05uzdT4%2B0OTk2lLmcEkVGoMERAZFJqa0ZTh2DMy8q%2FYuGgLjylAs9u63CVHrUunxhFpS93UkgJp7P4WvjtqnYcg7apNqtgA4S3J9yklPQ3zGPz7vVyAilbP8I7nq5h%2FOA%2BWUkCGATamK%2B9aft1TQWV9UcMGXH643AaiYz4rVwtivzDdzhGD%2BuwepJWkjcuuFGTAV82Y0v9lzbIQ6zDRtrxQAQWrIud8KF%2FmmbE%2Fa8EHYBJGd8q4mu2Tax%2FNQMZYoSlK%2FHb%2FWtNvxsMQkJDu4R7Vt0LeQu7ViioLTz6kxMfG2gLoYX2FG%2BWJbluo4s2tATixTI6qZDExtkQcbu4utTjD8m0ScyeNfK5oBFlsz63jZmzNUxJx48%2Bco5%2FXWIqIEgQpCsqYYNl37cEmTVqU19QkFHVJAxHQtAr9Nd3AsahmYChXPWPKUvBs6pt7OnyP8vknBGbAfzRodd9Qrj4PtJ2GwWdsvw2hEMA9m7Ev051fOJSF2E3v%2BMFx13amY%2BDaDl8MR5Akd6Vd5VkRAOMGgG%2BQn6w%2FhT4WUjiwGHS69XHJ0x5GfC8lFtodCGXHdJ6%2BL69albcwwzJ31wgY6pgErEE5A1tQtEKCvybN06EaBY72qbPPDV1ztFITAdWW9aQXmGLSMVs4YjmnDBkhr%2BmSF8n8HVPwgx%2FLMliJ909mNiUhWvibtyHXtUYiNKqcY48SfSBdRFwogjKa%2FHt56Qpv5P8gur8OZTuk%2BLcWb90CcKcpAC9FN7f7kZljDQOzuK%2FCq9s%2BUnmALN8IwSIf8rv%2BURwWNps89egDTdxA2AjsuaTPrcSqh&X-Amz-Signature=5406a21d927b6e602cb702aa8f9a1c8fa2995aa94c34e0d93c7278908e6c83b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQWCAUV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICXDY%2BksV8DlZB0xElh3IG86FoOPvWeMSjhdDV1EOtXjAiBMMW7KfEj74KxZUyleVav0C6hVaIqOTEtHJRF3pilXDCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMBlOyYO072MrCoi0XKtwDkxb9AHsvuAjdDbZju9plDPaRg3b0zEFcpes3AltUX%2B9ImRAsHqwG05uzdT4%2B0OTk2lLmcEkVGoMERAZFJqa0ZTh2DMy8q%2FYuGgLjylAs9u63CVHrUunxhFpS93UkgJp7P4WvjtqnYcg7apNqtgA4S3J9yklPQ3zGPz7vVyAilbP8I7nq5h%2FOA%2BWUkCGATamK%2B9aft1TQWV9UcMGXH643AaiYz4rVwtivzDdzhGD%2BuwepJWkjcuuFGTAV82Y0v9lzbIQ6zDRtrxQAQWrIud8KF%2FmmbE%2Fa8EHYBJGd8q4mu2Tax%2FNQMZYoSlK%2FHb%2FWtNvxsMQkJDu4R7Vt0LeQu7ViioLTz6kxMfG2gLoYX2FG%2BWJbluo4s2tATixTI6qZDExtkQcbu4utTjD8m0ScyeNfK5oBFlsz63jZmzNUxJx48%2Bco5%2FXWIqIEgQpCsqYYNl37cEmTVqU19QkFHVJAxHQtAr9Nd3AsahmYChXPWPKUvBs6pt7OnyP8vknBGbAfzRodd9Qrj4PtJ2GwWdsvw2hEMA9m7Ev051fOJSF2E3v%2BMFx13amY%2BDaDl8MR5Akd6Vd5VkRAOMGgG%2BQn6w%2FhT4WUjiwGHS69XHJ0x5GfC8lFtodCGXHdJ6%2BL69albcwwzJ31wgY6pgErEE5A1tQtEKCvybN06EaBY72qbPPDV1ztFITAdWW9aQXmGLSMVs4YjmnDBkhr%2BmSF8n8HVPwgx%2FLMliJ909mNiUhWvibtyHXtUYiNKqcY48SfSBdRFwogjKa%2FHt56Qpv5P8gur8OZTuk%2BLcWb90CcKcpAC9FN7f7kZljDQOzuK%2FCq9s%2BUnmALN8IwSIf8rv%2BURwWNps89egDTdxA2AjsuaTPrcSqh&X-Amz-Signature=a7709227f3bdeb537508b96dc6db5d362856479696ef482db1b052fbde38e4bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQWCAUV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICXDY%2BksV8DlZB0xElh3IG86FoOPvWeMSjhdDV1EOtXjAiBMMW7KfEj74KxZUyleVav0C6hVaIqOTEtHJRF3pilXDCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMBlOyYO072MrCoi0XKtwDkxb9AHsvuAjdDbZju9plDPaRg3b0zEFcpes3AltUX%2B9ImRAsHqwG05uzdT4%2B0OTk2lLmcEkVGoMERAZFJqa0ZTh2DMy8q%2FYuGgLjylAs9u63CVHrUunxhFpS93UkgJp7P4WvjtqnYcg7apNqtgA4S3J9yklPQ3zGPz7vVyAilbP8I7nq5h%2FOA%2BWUkCGATamK%2B9aft1TQWV9UcMGXH643AaiYz4rVwtivzDdzhGD%2BuwepJWkjcuuFGTAV82Y0v9lzbIQ6zDRtrxQAQWrIud8KF%2FmmbE%2Fa8EHYBJGd8q4mu2Tax%2FNQMZYoSlK%2FHb%2FWtNvxsMQkJDu4R7Vt0LeQu7ViioLTz6kxMfG2gLoYX2FG%2BWJbluo4s2tATixTI6qZDExtkQcbu4utTjD8m0ScyeNfK5oBFlsz63jZmzNUxJx48%2Bco5%2FXWIqIEgQpCsqYYNl37cEmTVqU19QkFHVJAxHQtAr9Nd3AsahmYChXPWPKUvBs6pt7OnyP8vknBGbAfzRodd9Qrj4PtJ2GwWdsvw2hEMA9m7Ev051fOJSF2E3v%2BMFx13amY%2BDaDl8MR5Akd6Vd5VkRAOMGgG%2BQn6w%2FhT4WUjiwGHS69XHJ0x5GfC8lFtodCGXHdJ6%2BL69albcwwzJ31wgY6pgErEE5A1tQtEKCvybN06EaBY72qbPPDV1ztFITAdWW9aQXmGLSMVs4YjmnDBkhr%2BmSF8n8HVPwgx%2FLMliJ909mNiUhWvibtyHXtUYiNKqcY48SfSBdRFwogjKa%2FHt56Qpv5P8gur8OZTuk%2BLcWb90CcKcpAC9FN7f7kZljDQOzuK%2FCq9s%2BUnmALN8IwSIf8rv%2BURwWNps89egDTdxA2AjsuaTPrcSqh&X-Amz-Signature=3439d41e1754ee2ff46c853587e41421c9b86d90be34b2ee1dd2b4582954747d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQWCAUV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICXDY%2BksV8DlZB0xElh3IG86FoOPvWeMSjhdDV1EOtXjAiBMMW7KfEj74KxZUyleVav0C6hVaIqOTEtHJRF3pilXDCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMBlOyYO072MrCoi0XKtwDkxb9AHsvuAjdDbZju9plDPaRg3b0zEFcpes3AltUX%2B9ImRAsHqwG05uzdT4%2B0OTk2lLmcEkVGoMERAZFJqa0ZTh2DMy8q%2FYuGgLjylAs9u63CVHrUunxhFpS93UkgJp7P4WvjtqnYcg7apNqtgA4S3J9yklPQ3zGPz7vVyAilbP8I7nq5h%2FOA%2BWUkCGATamK%2B9aft1TQWV9UcMGXH643AaiYz4rVwtivzDdzhGD%2BuwepJWkjcuuFGTAV82Y0v9lzbIQ6zDRtrxQAQWrIud8KF%2FmmbE%2Fa8EHYBJGd8q4mu2Tax%2FNQMZYoSlK%2FHb%2FWtNvxsMQkJDu4R7Vt0LeQu7ViioLTz6kxMfG2gLoYX2FG%2BWJbluo4s2tATixTI6qZDExtkQcbu4utTjD8m0ScyeNfK5oBFlsz63jZmzNUxJx48%2Bco5%2FXWIqIEgQpCsqYYNl37cEmTVqU19QkFHVJAxHQtAr9Nd3AsahmYChXPWPKUvBs6pt7OnyP8vknBGbAfzRodd9Qrj4PtJ2GwWdsvw2hEMA9m7Ev051fOJSF2E3v%2BMFx13amY%2BDaDl8MR5Akd6Vd5VkRAOMGgG%2BQn6w%2FhT4WUjiwGHS69XHJ0x5GfC8lFtodCGXHdJ6%2BL69albcwwzJ31wgY6pgErEE5A1tQtEKCvybN06EaBY72qbPPDV1ztFITAdWW9aQXmGLSMVs4YjmnDBkhr%2BmSF8n8HVPwgx%2FLMliJ909mNiUhWvibtyHXtUYiNKqcY48SfSBdRFwogjKa%2FHt56Qpv5P8gur8OZTuk%2BLcWb90CcKcpAC9FN7f7kZljDQOzuK%2FCq9s%2BUnmALN8IwSIf8rv%2BURwWNps89egDTdxA2AjsuaTPrcSqh&X-Amz-Signature=f8c79208421151ac4edf78c4426c6ab48933cc49883d0900776de68405484ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPQWCAUV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICXDY%2BksV8DlZB0xElh3IG86FoOPvWeMSjhdDV1EOtXjAiBMMW7KfEj74KxZUyleVav0C6hVaIqOTEtHJRF3pilXDCr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMBlOyYO072MrCoi0XKtwDkxb9AHsvuAjdDbZju9plDPaRg3b0zEFcpes3AltUX%2B9ImRAsHqwG05uzdT4%2B0OTk2lLmcEkVGoMERAZFJqa0ZTh2DMy8q%2FYuGgLjylAs9u63CVHrUunxhFpS93UkgJp7P4WvjtqnYcg7apNqtgA4S3J9yklPQ3zGPz7vVyAilbP8I7nq5h%2FOA%2BWUkCGATamK%2B9aft1TQWV9UcMGXH643AaiYz4rVwtivzDdzhGD%2BuwepJWkjcuuFGTAV82Y0v9lzbIQ6zDRtrxQAQWrIud8KF%2FmmbE%2Fa8EHYBJGd8q4mu2Tax%2FNQMZYoSlK%2FHb%2FWtNvxsMQkJDu4R7Vt0LeQu7ViioLTz6kxMfG2gLoYX2FG%2BWJbluo4s2tATixTI6qZDExtkQcbu4utTjD8m0ScyeNfK5oBFlsz63jZmzNUxJx48%2Bco5%2FXWIqIEgQpCsqYYNl37cEmTVqU19QkFHVJAxHQtAr9Nd3AsahmYChXPWPKUvBs6pt7OnyP8vknBGbAfzRodd9Qrj4PtJ2GwWdsvw2hEMA9m7Ev051fOJSF2E3v%2BMFx13amY%2BDaDl8MR5Akd6Vd5VkRAOMGgG%2BQn6w%2FhT4WUjiwGHS69XHJ0x5GfC8lFtodCGXHdJ6%2BL69albcwwzJ31wgY6pgErEE5A1tQtEKCvybN06EaBY72qbPPDV1ztFITAdWW9aQXmGLSMVs4YjmnDBkhr%2BmSF8n8HVPwgx%2FLMliJ909mNiUhWvibtyHXtUYiNKqcY48SfSBdRFwogjKa%2FHt56Qpv5P8gur8OZTuk%2BLcWb90CcKcpAC9FN7f7kZljDQOzuK%2FCq9s%2BUnmALN8IwSIf8rv%2BURwWNps89egDTdxA2AjsuaTPrcSqh&X-Amz-Signature=02d7c32f3c602c5ebf798414ba4432eaebae66e12cdef0e468c4670d64f11b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
