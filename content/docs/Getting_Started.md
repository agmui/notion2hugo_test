---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXV2V2E%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDcY%2BvPFRGXg0YwYvhmN6LrTsjWWrfTkshmDD6HKwcCNQIgWAqMR5kmaCOh9vskIg3DDvj0Fp55wHiqrww9lFZ11BAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHohP3kSLkyhZ5nLgircA5Ip6sonMB2ohjMiR8AU12o5Iil%2FB7LSKSGZNB7KX0pUokY4YpGiq2GbZOB2o7KdFOecddukAjKMOgkphpqFW0fBqXsf4oxJ8kIS35muKM8d50k%2F%2BidecmMi3muxnyp5wW9DeFEpJJMVG2ugyb8p7kyzgIcEj7nQrcOxAML13TRUcIXQYwGUafr%2Fws9JMPYOeN9gvNCseocyLCcVYZPXCs9gGs9dWhd%2FieSiCx3jn7FLsvqQ97pdlVQZIuU7aSZrVC%2BI2UjnZVn2ZRNIxwizGmyZ%2BFi%2BFg7FOQHqtU2RWOAMA3rL7BhVEQkekXG6d%2FENnXsoR593Rc7Lb%2FeFI4wlpV00da%2BhGT7L4PDXe%2FzLEZAkeg0M6l8aZrrqoqmx0aDA4N%2F2q1Td9sTj%2FLlejqmRn06IJJ0c6ZWyvDAU3EoLIC1GvWlLYNaTuIYFilomBxclMtFTnoiRvP3Mrj2%2F%2BQEOzKvkruveJrtV9f1BDeD6D5A3QlZgV3wd7js%2FLUm4nv4%2Flpv6VlHNB%2F9RODNdbU%2FJhsWfZZDxugpAa0Fx8ryaWATIaeGMvxSp8%2FYSlz81NtxdTpZ7PyBhfJwxsKxZ%2BSxIoPZwIgUXcVLt9r3x%2BHJRCg79rCA%2FmAZasCaES28EMPito8MGOqUBlfxIu1ZyWJ90ZBRZbUHd%2B1HyxF0TgU3VDdku5KqjXDNT4%2BmKrH%2BO8FX6ZvLOApgzDyDR0oZ0oe4uIYzDX0vzIh7yNTol4oIJfqVKkRvlgnRA5B16ft9rIqY%2Fy15TO9GNstahJ0CszgW4IO%2FQWICAlo87wXi8jyZnv3JatwoeOa0YMHRRtDU0%2BBjIRe0vpAN%2B4QxbgdKG3uKveZitdmaLrvs9Imr%2F&X-Amz-Signature=25a7387e5b8e48be3136ea486fca5ca33e5c7e9fc6501a8d277719a13fb2e28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXV2V2E%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDcY%2BvPFRGXg0YwYvhmN6LrTsjWWrfTkshmDD6HKwcCNQIgWAqMR5kmaCOh9vskIg3DDvj0Fp55wHiqrww9lFZ11BAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHohP3kSLkyhZ5nLgircA5Ip6sonMB2ohjMiR8AU12o5Iil%2FB7LSKSGZNB7KX0pUokY4YpGiq2GbZOB2o7KdFOecddukAjKMOgkphpqFW0fBqXsf4oxJ8kIS35muKM8d50k%2F%2BidecmMi3muxnyp5wW9DeFEpJJMVG2ugyb8p7kyzgIcEj7nQrcOxAML13TRUcIXQYwGUafr%2Fws9JMPYOeN9gvNCseocyLCcVYZPXCs9gGs9dWhd%2FieSiCx3jn7FLsvqQ97pdlVQZIuU7aSZrVC%2BI2UjnZVn2ZRNIxwizGmyZ%2BFi%2BFg7FOQHqtU2RWOAMA3rL7BhVEQkekXG6d%2FENnXsoR593Rc7Lb%2FeFI4wlpV00da%2BhGT7L4PDXe%2FzLEZAkeg0M6l8aZrrqoqmx0aDA4N%2F2q1Td9sTj%2FLlejqmRn06IJJ0c6ZWyvDAU3EoLIC1GvWlLYNaTuIYFilomBxclMtFTnoiRvP3Mrj2%2F%2BQEOzKvkruveJrtV9f1BDeD6D5A3QlZgV3wd7js%2FLUm4nv4%2Flpv6VlHNB%2F9RODNdbU%2FJhsWfZZDxugpAa0Fx8ryaWATIaeGMvxSp8%2FYSlz81NtxdTpZ7PyBhfJwxsKxZ%2BSxIoPZwIgUXcVLt9r3x%2BHJRCg79rCA%2FmAZasCaES28EMPito8MGOqUBlfxIu1ZyWJ90ZBRZbUHd%2B1HyxF0TgU3VDdku5KqjXDNT4%2BmKrH%2BO8FX6ZvLOApgzDyDR0oZ0oe4uIYzDX0vzIh7yNTol4oIJfqVKkRvlgnRA5B16ft9rIqY%2Fy15TO9GNstahJ0CszgW4IO%2FQWICAlo87wXi8jyZnv3JatwoeOa0YMHRRtDU0%2BBjIRe0vpAN%2B4QxbgdKG3uKveZitdmaLrvs9Imr%2F&X-Amz-Signature=4fe68bf9f9f6a80339f9383e9e236490b7c391cd3f62ad407f6d8bf0c11afd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXV2V2E%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDcY%2BvPFRGXg0YwYvhmN6LrTsjWWrfTkshmDD6HKwcCNQIgWAqMR5kmaCOh9vskIg3DDvj0Fp55wHiqrww9lFZ11BAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHohP3kSLkyhZ5nLgircA5Ip6sonMB2ohjMiR8AU12o5Iil%2FB7LSKSGZNB7KX0pUokY4YpGiq2GbZOB2o7KdFOecddukAjKMOgkphpqFW0fBqXsf4oxJ8kIS35muKM8d50k%2F%2BidecmMi3muxnyp5wW9DeFEpJJMVG2ugyb8p7kyzgIcEj7nQrcOxAML13TRUcIXQYwGUafr%2Fws9JMPYOeN9gvNCseocyLCcVYZPXCs9gGs9dWhd%2FieSiCx3jn7FLsvqQ97pdlVQZIuU7aSZrVC%2BI2UjnZVn2ZRNIxwizGmyZ%2BFi%2BFg7FOQHqtU2RWOAMA3rL7BhVEQkekXG6d%2FENnXsoR593Rc7Lb%2FeFI4wlpV00da%2BhGT7L4PDXe%2FzLEZAkeg0M6l8aZrrqoqmx0aDA4N%2F2q1Td9sTj%2FLlejqmRn06IJJ0c6ZWyvDAU3EoLIC1GvWlLYNaTuIYFilomBxclMtFTnoiRvP3Mrj2%2F%2BQEOzKvkruveJrtV9f1BDeD6D5A3QlZgV3wd7js%2FLUm4nv4%2Flpv6VlHNB%2F9RODNdbU%2FJhsWfZZDxugpAa0Fx8ryaWATIaeGMvxSp8%2FYSlz81NtxdTpZ7PyBhfJwxsKxZ%2BSxIoPZwIgUXcVLt9r3x%2BHJRCg79rCA%2FmAZasCaES28EMPito8MGOqUBlfxIu1ZyWJ90ZBRZbUHd%2B1HyxF0TgU3VDdku5KqjXDNT4%2BmKrH%2BO8FX6ZvLOApgzDyDR0oZ0oe4uIYzDX0vzIh7yNTol4oIJfqVKkRvlgnRA5B16ft9rIqY%2Fy15TO9GNstahJ0CszgW4IO%2FQWICAlo87wXi8jyZnv3JatwoeOa0YMHRRtDU0%2BBjIRe0vpAN%2B4QxbgdKG3uKveZitdmaLrvs9Imr%2F&X-Amz-Signature=0b556dc3ea377e9a8dd98d3d7f4779663cb9c61a494b5f85d2b2e463d5e388a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XLDG6NM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCDWtTRqEWVEdWLVoINDgnpk6Y6DSXsa%2F38%2F4tL1SsnHAIhAP4N4tCOhZwQP3SqHcsQ5PBxwIp%2FIOyiTVJgu5E4su7yKv8DCEEQABoMNjM3NDIzMTgzODA1IgyY6JqB3BXCRFhbfUYq3AOLgbXMY4Cw7ISSUUr%2F03slp9CffYHCO9Xfdkt%2F%2FseEloS39o7S1DG%2FBnRmAoBQCY6sCRKlnGiBPwaTUP3UnUP6grPZGISxFj8b5BIIpBUG5FMAdBngmFMXD%2FMgZHGVIbp3wjxH1wG8kJVBNBnG3jJb50bVVZTq7%2F2NNaghK1FSf0RawU%2By05uNB4MSG0p%2F2%2FBEKZDVryju1AqV18%2Fb0o1JY3nZSWuDRKoJwMpifrMy8SdctEK7bxXbEcYFu6yQLtERRf4f5Mp%2BUye8vhjDhqBmWWwo%2FAKmM%2FUcSY17%2BUkagykth0AgLeTVc4kNQq6JXK0qKvoitgTlEQf1rkdOoF43GVa4qP4pTeYsDW9VXuzTUqV6%2BL7CwdlQ4BJc58Z1hdRI%2F%2FM1ExvvN%2BeEKEND%2F6C1RXXpfzHqRKbNZdR73xIaYLgktVllCenv6DCYWjIUnLeGyzPWP8eRAXEGDRrvsn5%2FUveBKHKSr9WEnm4xnTyzDjvjgmGyO1H4M0sfk%2Fa7s%2FPwGc3rQNk7lwFB1CQVpVg3SiYKXmV8r9fACIWDzXryCJ8R3ekf9W0yvK9wMSqESrQC9xDhyYE5mIP5O4w2%2FGqdGl7cUyWDLptDGPpDJj20BEzMb%2FVd0cLX023SkzDJrKPDBjqkAS1cZWAMFC3EvrtJZsTMrEuWodE29oD3MVihdbv9zIgZtV80Lx8oyWq%2BMWHDKFnFOZ9x%2Bk%2F2NFGrgKjcM3I4VTgVaLZ4s9kb0s9ZzADCpYy3JyG5sg6YhwppOLkuGaKDc4uNydXuHlhRej3%2BrudwlnrsCOYam0ovoPb2Hmiaarl2zxIfmRI6RmwNg1ZpOh6Vwa7HR7QNnA2myUbSEFSe41YaU7QL&X-Amz-Signature=e31c114266b4f19dd9c6463ecd9830c91c229807bc2772ba52148746ad21b33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNY35NFS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAxD1Mqzm%2B9aa79ZLHFXfCh2J4y7YsVgGJNxoWwp2sulAiEAoGViG4sKfS57BQsgiWc5eoKDBB4kU7Vnxiuh3TCsq80q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFgjnIEjCyJywC%2BYdSrcAx6x9uKOIjX34V6C%2BZg8nx0P4TUlLJhTtz%2FZ0Z5ZcP7ZysuEm6ASMQW2%2BzQT2kWz4%2BPfQg3hGNJu8uo3eih0RmAsZmLBPzf62ghNbpAwh9q5imoITEulWX%2BvkfNMraiXbkVX7ZUgJZNpGx0JfPR6pYe%2FQ704AfsaQnIQObxe%2BDfGh30KEMXkG8E89xtB01agk0neoOn06%2F3JY056MlqCqurMSj0kUfVfV5cv8ob3KZS%2F1aIHDyqE3BQuJk91r8ss9mV22JVh%2BBtZVVUM%2FxqqpTRIVepeAph99X5aUhp5yDGj4Q3gluRFtModfgtz%2B2ve5Ito6H5yLqmaybTmTmyuhDCoP%2FYwT9208YQ%2FseQLqzde0Tkl%2FQ5rIswBEq7gVsbdyhQjJaW81KcuYANN956zxXXdGHFT%2Fbv5USmCcjtFYJJ%2FA7Ap6TyYbFFWPgYUDXJYmb8aOwNm2QU70FX7%2F437l8r3sucZVWetA0giEsTjNPVZc7rLMR4e%2FOaTfOa9aC%2FBbN0qnlb7LwWvFEyafLi4a0K9fGWUE%2F%2BDI5EDGLfre%2FsjDKoaqIFygh0lUnD7EOuH%2FEZHeLvvLjsUKGY%2F7%2FGWOF%2Bz72VTzqEdbuf9AvmG8wl0ELX6%2BaU30Jzwi6OPML%2Bno8MGOqUBI6rgzLKbZ%2Bhu5Y%2BAde2nxN2o7EEKv6f6vo1w0WaG8QstQYxLXuPLgZsCo%2FseXGFu9Ch%2FG4bIC7k0uDGlVZ%2BOmVpRuBWuQo9K9AFy%2FyIf7dZRwpY7wLsSN1VdQAg%2FYx%2F3Lu9P5dgwctz4zydmiKHK4JrYVKj40zbJDv6rzE96PijbAycOEC4qgJgfyOvJ1NMggmShC1ru94CPSTgzfqkgZyFd%2FD35&X-Amz-Signature=b61d57fe98649a313e6656d677147e1308e077bbaae306c3d788f2cdf8d89580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCXV2V2E%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDcY%2BvPFRGXg0YwYvhmN6LrTsjWWrfTkshmDD6HKwcCNQIgWAqMR5kmaCOh9vskIg3DDvj0Fp55wHiqrww9lFZ11BAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDHohP3kSLkyhZ5nLgircA5Ip6sonMB2ohjMiR8AU12o5Iil%2FB7LSKSGZNB7KX0pUokY4YpGiq2GbZOB2o7KdFOecddukAjKMOgkphpqFW0fBqXsf4oxJ8kIS35muKM8d50k%2F%2BidecmMi3muxnyp5wW9DeFEpJJMVG2ugyb8p7kyzgIcEj7nQrcOxAML13TRUcIXQYwGUafr%2Fws9JMPYOeN9gvNCseocyLCcVYZPXCs9gGs9dWhd%2FieSiCx3jn7FLsvqQ97pdlVQZIuU7aSZrVC%2BI2UjnZVn2ZRNIxwizGmyZ%2BFi%2BFg7FOQHqtU2RWOAMA3rL7BhVEQkekXG6d%2FENnXsoR593Rc7Lb%2FeFI4wlpV00da%2BhGT7L4PDXe%2FzLEZAkeg0M6l8aZrrqoqmx0aDA4N%2F2q1Td9sTj%2FLlejqmRn06IJJ0c6ZWyvDAU3EoLIC1GvWlLYNaTuIYFilomBxclMtFTnoiRvP3Mrj2%2F%2BQEOzKvkruveJrtV9f1BDeD6D5A3QlZgV3wd7js%2FLUm4nv4%2Flpv6VlHNB%2F9RODNdbU%2FJhsWfZZDxugpAa0Fx8ryaWATIaeGMvxSp8%2FYSlz81NtxdTpZ7PyBhfJwxsKxZ%2BSxIoPZwIgUXcVLt9r3x%2BHJRCg79rCA%2FmAZasCaES28EMPito8MGOqUBlfxIu1ZyWJ90ZBRZbUHd%2B1HyxF0TgU3VDdku5KqjXDNT4%2BmKrH%2BO8FX6ZvLOApgzDyDR0oZ0oe4uIYzDX0vzIh7yNTol4oIJfqVKkRvlgnRA5B16ft9rIqY%2Fy15TO9GNstahJ0CszgW4IO%2FQWICAlo87wXi8jyZnv3JatwoeOa0YMHRRtDU0%2BBjIRe0vpAN%2B4QxbgdKG3uKveZitdmaLrvs9Imr%2F&X-Amz-Signature=606f49b27123809da614239596e363097a33f8c9a15b9d3d6c0727543aebfe53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
