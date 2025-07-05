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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2I57WR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAoPawMtw3AE1BTZ1Nf7P7gUjYWpuRXC%2FXNTLX9PjWygAiEAjUo4ZbQsYsbFRszsZVfj6QkbWOnTH2mlvM7xIKT%2BTKEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGh19%2B072EfhCY3qbCrcA%2BUkVXYNoWccJvVc%2F1OdcjkppxHVlXL9ByArLPoKedFGGn3S1KmJ%2BZilY5ApYU%2FTdDqMGOvZq7X6K3liwSWRW2Gzn2aqDHCicPxGDAInuL7BZo02yLvS7DPO7D5oqtdAAkm%2BYWiVBOIwwYrGvSAJvHjtzHX8eBGG4a2PCZ03ymY1AkDMgmPHu2VhEyhS%2FXvT3mVmyGBbBWv%2BAvuMp7DUCwHM5yQPSON4dLnMwzbxfpXZ%2FL6mudTgxqPHyBnJPRUWePDYiFg%2FtmKoKUwRLAq2wdVDepcsLgQtJI85xCS6qMN2fxy%2FjOOfwQjAwMrNzStfKN7I4wiBw%2BhRlWzSgqQ9o%2BtLBdnYeN5HELAcNiH%2BX5%2Faqb5b3rAjFnfgc4zI2MGaPV3WlEikaluIXMOxyf3qKmCKYLZMqaPr%2B5fyrTHQssxr3Sriq%2BF1nkBLTgmI8sjXd2XJs%2F1hwzqik3xSv9Tkj76Bg3pOO8M9bcyw1nUSL3KXdPNUNiEQtkhTJoGuKhpn5zDE88SQOPggR2kgAoYy44uMyntMuSkAtqK7wmqvWhgL8e%2FsYtB44VMZT9WdJ%2Brv0lB%2FmwvSstOF0NG%2FjfNQrkExOL5LczwXdIw0jFRuNPZHm6hdLBF57hQKFfP1MJjMpMMGOqUBaabcVMkKIKNyQ55JWO30RliyreTx%2FurfDLGI%2FtYcSQbyPMrFcLzpONVGOrJ3%2Bfgw4gbGXpJu4cPhbAzaBIYjVeLiHSK2pSjwcjJf3jfVX2qAbhmewmfRhBh3HFEJVGbB02yRNMHsZmsxOX0OYxG3vuWpms%2FUhGk5NgXACaZdY8cD4LxmBsWnvpAcJ8S3yI%2Fl%2FWqdX3E8zbmYMUNZfAhQYQZJODEp&X-Amz-Signature=628bdfd5e0c06c67c25025996f275ed8a234c370b844fe7d3b0e1ba8c3bfdddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2I57WR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIAoPawMtw3AE1BTZ1Nf7P7gUjYWpuRXC%2FXNTLX9PjWygAiEAjUo4ZbQsYsbFRszsZVfj6QkbWOnTH2mlvM7xIKT%2BTKEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGh19%2B072EfhCY3qbCrcA%2BUkVXYNoWccJvVc%2F1OdcjkppxHVlXL9ByArLPoKedFGGn3S1KmJ%2BZilY5ApYU%2FTdDqMGOvZq7X6K3liwSWRW2Gzn2aqDHCicPxGDAInuL7BZo02yLvS7DPO7D5oqtdAAkm%2BYWiVBOIwwYrGvSAJvHjtzHX8eBGG4a2PCZ03ymY1AkDMgmPHu2VhEyhS%2FXvT3mVmyGBbBWv%2BAvuMp7DUCwHM5yQPSON4dLnMwzbxfpXZ%2FL6mudTgxqPHyBnJPRUWePDYiFg%2FtmKoKUwRLAq2wdVDepcsLgQtJI85xCS6qMN2fxy%2FjOOfwQjAwMrNzStfKN7I4wiBw%2BhRlWzSgqQ9o%2BtLBdnYeN5HELAcNiH%2BX5%2Faqb5b3rAjFnfgc4zI2MGaPV3WlEikaluIXMOxyf3qKmCKYLZMqaPr%2B5fyrTHQssxr3Sriq%2BF1nkBLTgmI8sjXd2XJs%2F1hwzqik3xSv9Tkj76Bg3pOO8M9bcyw1nUSL3KXdPNUNiEQtkhTJoGuKhpn5zDE88SQOPggR2kgAoYy44uMyntMuSkAtqK7wmqvWhgL8e%2FsYtB44VMZT9WdJ%2Brv0lB%2FmwvSstOF0NG%2FjfNQrkExOL5LczwXdIw0jFRuNPZHm6hdLBF57hQKFfP1MJjMpMMGOqUBaabcVMkKIKNyQ55JWO30RliyreTx%2FurfDLGI%2FtYcSQbyPMrFcLzpONVGOrJ3%2Bfgw4gbGXpJu4cPhbAzaBIYjVeLiHSK2pSjwcjJf3jfVX2qAbhmewmfRhBh3HFEJVGbB02yRNMHsZmsxOX0OYxG3vuWpms%2FUhGk5NgXACaZdY8cD4LxmBsWnvpAcJ8S3yI%2Fl%2FWqdX3E8zbmYMUNZfAhQYQZJODEp&X-Amz-Signature=2b8b0474ade60c4cd479aa1d1b9113036eb831a13204bc571a4ebb927a32109a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
