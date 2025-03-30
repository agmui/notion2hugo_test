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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ORAZZGT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGg2agdpkovaqiDvDOfFeiTBAVpJqhLwqFfHa2p%2BVhh0AiEAzVyzZVcIjynroCwjZCg3alIh9YvYW2OZdWfkmiUYEzEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4ALtJsw1jaG93s4ircA7%2BfeGGuXHYW6lSeY4BdiBjSxPr7oZ6WvJjtzFOvkyJ2cCXiBkJbj5VeY73TlhY3SJxsN0N0ZxO8IDjX3VZkm5CkU8wSYgrusnUEdeu%2FzmlHwGD2Bro14NDMbPAF9KLFdPDdnKiYAA7Ny8nxVi5malrS0%2Be1SRelNdtlykn5lg3HbyDNtW3GAqv0PYG7nF93u5M6LHgqrhe9RcKelyW4rl6rHk9YGeFlZE7zZlhVVUWIU2bITHJyEZ42HpGZz7niITizUq0XnpoPk79Jj1CDcUhfF5PISZ1ZY%2BpXldCZ7KvTziX%2F%2BePuJiA0iin0XEoyBtwEv5x2YCypvClYWmD0ZLH9KIb7UZos8%2F3b6m8p0wJkMlxFs2qz7P4Fvdnf0QVimhREVS%2F%2B5qkH2F4vGa7atkVPaFEZBvG8HTiu3cdzgrYEnchtEosxaLEuB8A3clq8veXL%2FbUhelNydIZDlHxE72w2EDrg9PfPLsgnQ%2BgPW%2Bn6eWLH9m5WPtsVnV6GBB0pCJHUiui4l6R10S61EElPzFWmjmwKfJX5GuZ9zDJmFqQzWd%2Fy603h60LqYVswyfqyChG2E2v0%2Fq%2FtUW%2BrSirIHfm%2Fe8KRB2r0JwPEgzSPLfAZAuMLxOqkR5pzw1H6MPz9ob8GOqUBIXPYZviPOLa9%2FRPA3trk6Xqb0ffYy4FvO%2B91MxCsygIUlT3fOfgnOjVoM73k7LMlcG7mwYr64rVL2IXlYNz6fsqSgDvMA4aOPSEa%2Fl0dIhriARqmd8tDNe8mlLNiZhIsdHK2bbNd2Yh7YkZEOicoRYwj9yngboC4vpGXbbWKZrgezRUH%2BYBUwI5%2FR%2BVPeow7ym9a8A8QcJqj6a%2B9B6kzH2kKreXB&X-Amz-Signature=69490cc309a4accc5a7f269e88c189444a6759f56104ac42f14b521570471311&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ORAZZGT%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGg2agdpkovaqiDvDOfFeiTBAVpJqhLwqFfHa2p%2BVhh0AiEAzVyzZVcIjynroCwjZCg3alIh9YvYW2OZdWfkmiUYEzEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4ALtJsw1jaG93s4ircA7%2BfeGGuXHYW6lSeY4BdiBjSxPr7oZ6WvJjtzFOvkyJ2cCXiBkJbj5VeY73TlhY3SJxsN0N0ZxO8IDjX3VZkm5CkU8wSYgrusnUEdeu%2FzmlHwGD2Bro14NDMbPAF9KLFdPDdnKiYAA7Ny8nxVi5malrS0%2Be1SRelNdtlykn5lg3HbyDNtW3GAqv0PYG7nF93u5M6LHgqrhe9RcKelyW4rl6rHk9YGeFlZE7zZlhVVUWIU2bITHJyEZ42HpGZz7niITizUq0XnpoPk79Jj1CDcUhfF5PISZ1ZY%2BpXldCZ7KvTziX%2F%2BePuJiA0iin0XEoyBtwEv5x2YCypvClYWmD0ZLH9KIb7UZos8%2F3b6m8p0wJkMlxFs2qz7P4Fvdnf0QVimhREVS%2F%2B5qkH2F4vGa7atkVPaFEZBvG8HTiu3cdzgrYEnchtEosxaLEuB8A3clq8veXL%2FbUhelNydIZDlHxE72w2EDrg9PfPLsgnQ%2BgPW%2Bn6eWLH9m5WPtsVnV6GBB0pCJHUiui4l6R10S61EElPzFWmjmwKfJX5GuZ9zDJmFqQzWd%2Fy603h60LqYVswyfqyChG2E2v0%2Fq%2FtUW%2BrSirIHfm%2Fe8KRB2r0JwPEgzSPLfAZAuMLxOqkR5pzw1H6MPz9ob8GOqUBIXPYZviPOLa9%2FRPA3trk6Xqb0ffYy4FvO%2B91MxCsygIUlT3fOfgnOjVoM73k7LMlcG7mwYr64rVL2IXlYNz6fsqSgDvMA4aOPSEa%2Fl0dIhriARqmd8tDNe8mlLNiZhIsdHK2bbNd2Yh7YkZEOicoRYwj9yngboC4vpGXbbWKZrgezRUH%2BYBUwI5%2FR%2BVPeow7ym9a8A8QcJqj6a%2B9B6kzH2kKreXB&X-Amz-Signature=97b921bb64698ccce4144804e37d7ea3aaa7868d91d3706d91b96d2d65cfdf05&X-Amz-SignedHeaders=host&x-id=GetObject)

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
