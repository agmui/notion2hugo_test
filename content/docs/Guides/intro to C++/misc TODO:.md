---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLUVFBIQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCZE2BVG%2BJpCNZyD3UIc9STMEZknSwIbO4B1G7D0cpq6wIhAOoUmxqk7H%2BGgZU5aYzSFj3ovT0sq5I37ATBODHZaGUrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzwMu6fz1o2jT9CRoq3AM7fhg3%2BV33wwaEzx1Ly26bae1VJobdu6wgJq1c7s5xmYyrSS3nA%2BzISRbNQQUtH0EK9uxWs3bl7%2FmJFyPwi8g7SLrnVLr7mOZBf8uyHMhm8zTE08d7C%2BcNAdPwcQtMiRQVc%2Fe3C53iynJQubC5ORiL7Yi0LJSyl9bfrdmsDULN2O1yRwT5Q66C42XeytIo8rKGpsQkkkLpbtpRBCYYBxEKNc10fWreOomouJSRfSdwA%2FDHKZzfU%2FkjqH145i6G%2FbzWGV9Tblx0I8jrNkxT2VSu9m6WfWoZnMBPxsyItks%2BN5nzNRqjIiGM28l7eronU7b9241pMYJx3Yxttpjau8oRWze0DFdAFieUJ7lV96DpgvHNPgc%2Btzb87BRtYAQ2X5WQ9J%2BIUkxWaAmoKSvVgbOBhPZIv48BwF4KJaqzExf%2FelfmcaFAYaAlRBjmdqBa3%2B525riP27GWpAhPtPIBPEjAdHtUoWpIKsCt2MCmGv9MU3eIVkvTSKhNuiqs%2FohaURvbJbT%2Bakb%2B5aDvRLYPCH1EhHJBSGpPhIAu1h9uSS3PuG0QU%2F5ELjkGd26oX6MIOVWv9N0dL8fa8vqUoKjk%2FYEj29N99Hplfj%2F5itr6rupaEcLX%2FtpjSIPESvKoYDD5xNvEBjqkAZWBO%2B6V6B4c5cqUKj5rZDgcXmZfBggkWZoWBXC20mV09qFbOO9hASPBP6rTPzpHy6rSQb3kcJwte0bzCHel7OHL1AQ0aQ3%2FdshVU0BaoosGAf%2B95TI5GvOG%2FqXk5sXipc24id%2BrW58n41dxyZyntxcy1u5pX8pkwREtC8Or0gll4o0zI%2BPx3FTZnCHzJuM%2FIi5h%2BdWta%2F6EY8qL9lSts9a%2FSFdJ&X-Amz-Signature=be92fd09d3101c0c3d08d84555055b2a726d3757ee87c6f70ef1eace677c6f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLUVFBIQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCZE2BVG%2BJpCNZyD3UIc9STMEZknSwIbO4B1G7D0cpq6wIhAOoUmxqk7H%2BGgZU5aYzSFj3ovT0sq5I37ATBODHZaGUrKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzwMu6fz1o2jT9CRoq3AM7fhg3%2BV33wwaEzx1Ly26bae1VJobdu6wgJq1c7s5xmYyrSS3nA%2BzISRbNQQUtH0EK9uxWs3bl7%2FmJFyPwi8g7SLrnVLr7mOZBf8uyHMhm8zTE08d7C%2BcNAdPwcQtMiRQVc%2Fe3C53iynJQubC5ORiL7Yi0LJSyl9bfrdmsDULN2O1yRwT5Q66C42XeytIo8rKGpsQkkkLpbtpRBCYYBxEKNc10fWreOomouJSRfSdwA%2FDHKZzfU%2FkjqH145i6G%2FbzWGV9Tblx0I8jrNkxT2VSu9m6WfWoZnMBPxsyItks%2BN5nzNRqjIiGM28l7eronU7b9241pMYJx3Yxttpjau8oRWze0DFdAFieUJ7lV96DpgvHNPgc%2Btzb87BRtYAQ2X5WQ9J%2BIUkxWaAmoKSvVgbOBhPZIv48BwF4KJaqzExf%2FelfmcaFAYaAlRBjmdqBa3%2B525riP27GWpAhPtPIBPEjAdHtUoWpIKsCt2MCmGv9MU3eIVkvTSKhNuiqs%2FohaURvbJbT%2Bakb%2B5aDvRLYPCH1EhHJBSGpPhIAu1h9uSS3PuG0QU%2F5ELjkGd26oX6MIOVWv9N0dL8fa8vqUoKjk%2FYEj29N99Hplfj%2F5itr6rupaEcLX%2FtpjSIPESvKoYDD5xNvEBjqkAZWBO%2B6V6B4c5cqUKj5rZDgcXmZfBggkWZoWBXC20mV09qFbOO9hASPBP6rTPzpHy6rSQb3kcJwte0bzCHel7OHL1AQ0aQ3%2FdshVU0BaoosGAf%2B95TI5GvOG%2FqXk5sXipc24id%2BrW58n41dxyZyntxcy1u5pX8pkwREtC8Or0gll4o0zI%2BPx3FTZnCHzJuM%2FIi5h%2BdWta%2F6EY8qL9lSts9a%2FSFdJ&X-Amz-Signature=2e59b4196ee13e670e146190a16b8f53dee950a51b630dc8d514b9eef9694acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
