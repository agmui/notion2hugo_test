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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIURFXU4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDCj%2BiZlPKVhIEEYpfCoqkxaAzdPmK7yOzkCtFjD1gOGQIgUyf1MDOjXomZlpezbGD%2B%2F57TsyfJ4qrpJ059HPYnDYcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDI%2BC5lKuTVaijOOa%2ByrcAybe%2FiqPsCIdOFfEpT9D3bL9z7rK0ELY7LUUFMTUT%2FgzzWfHDaLp2Qif2OUZugxxhgpiYXfEcRl8%2BfgfsKyyh6H0gaJAtk3fxr7IBOnTdW8pcKtmworEDz22KDMIwTsNg6G%2FT33EoUr5maM7qP1HxzHKAaqeVZ3h8OGJgzxxn4pVFAPYvFBM2Wmwos5UV%2B2ZO1%2F9eDniZ6vD%2BgHeRWOvQzoj%2FSZGFFro7ljjfZYCC0UmuKPlOv77zpa%2BTHs7q2sG%2BrSpVDi09AwmKePl0OGtIe6dgV7h7MiLW%2BP3h%2Bp0co88LQO9e41o4dLNU%2Ff7W0D9YTJSN6ZvmIUKLB9I1dgbRoN6d3dSq0pMUVHJuptLhmGA6%2F58KHUCqqwcgs3XxcwyLP7wEGdRse7r1upLwnAdwWYIMtYalClvZmOrKUcW4bqzlaRO6%2FUIb3k6UvXNdAEu8IphwmD38IXBlr51pODDQ%2Bkon2ojQYRzsHQEWrF41PQnvxw89kF1EHnxZxGAVoFS%2BVAAtzj1nN9mzbXk4wctqq5vjFSFgtGCqcZyBdGsSjSQ8%2FATny5TkhTEbmo73VC18%2BJJ1oVPaAtTb1CKbW1nGz%2BeKHNIzanSlZ0l6kIzWQiHCC4aWhHHglwqDP5HMJXbl8QGOqUBdudilEDgaLxLlyUGF0NZCGMG3dfS17oQTSL2GL9msWrD9cKmJFDLFtTEZDa2yw6qE8PpbDDxIaPQG%2FPDa%2FaPrHWp5AN5k2xFCw7yj487HPFmyv5K%2B%2F1sM2flW27wpkZBU%2F1rphEoorS0M55uHWtK1Kyzexkusyny7d3x2Pae4o71%2FW0XHP4U8KK9ZOL8MafYFCjY4P9x4Dcnjz1tBOJ3q5fImsZd&X-Amz-Signature=97f8efafcf5f24358393a866fb5f44246f56cd9d31b77d110803ee790d3d6ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIURFXU4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDCj%2BiZlPKVhIEEYpfCoqkxaAzdPmK7yOzkCtFjD1gOGQIgUyf1MDOjXomZlpezbGD%2B%2F57TsyfJ4qrpJ059HPYnDYcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDI%2BC5lKuTVaijOOa%2ByrcAybe%2FiqPsCIdOFfEpT9D3bL9z7rK0ELY7LUUFMTUT%2FgzzWfHDaLp2Qif2OUZugxxhgpiYXfEcRl8%2BfgfsKyyh6H0gaJAtk3fxr7IBOnTdW8pcKtmworEDz22KDMIwTsNg6G%2FT33EoUr5maM7qP1HxzHKAaqeVZ3h8OGJgzxxn4pVFAPYvFBM2Wmwos5UV%2B2ZO1%2F9eDniZ6vD%2BgHeRWOvQzoj%2FSZGFFro7ljjfZYCC0UmuKPlOv77zpa%2BTHs7q2sG%2BrSpVDi09AwmKePl0OGtIe6dgV7h7MiLW%2BP3h%2Bp0co88LQO9e41o4dLNU%2Ff7W0D9YTJSN6ZvmIUKLB9I1dgbRoN6d3dSq0pMUVHJuptLhmGA6%2F58KHUCqqwcgs3XxcwyLP7wEGdRse7r1upLwnAdwWYIMtYalClvZmOrKUcW4bqzlaRO6%2FUIb3k6UvXNdAEu8IphwmD38IXBlr51pODDQ%2Bkon2ojQYRzsHQEWrF41PQnvxw89kF1EHnxZxGAVoFS%2BVAAtzj1nN9mzbXk4wctqq5vjFSFgtGCqcZyBdGsSjSQ8%2FATny5TkhTEbmo73VC18%2BJJ1oVPaAtTb1CKbW1nGz%2BeKHNIzanSlZ0l6kIzWQiHCC4aWhHHglwqDP5HMJXbl8QGOqUBdudilEDgaLxLlyUGF0NZCGMG3dfS17oQTSL2GL9msWrD9cKmJFDLFtTEZDa2yw6qE8PpbDDxIaPQG%2FPDa%2FaPrHWp5AN5k2xFCw7yj487HPFmyv5K%2B%2F1sM2flW27wpkZBU%2F1rphEoorS0M55uHWtK1Kyzexkusyny7d3x2Pae4o71%2FW0XHP4U8KK9ZOL8MafYFCjY4P9x4Dcnjz1tBOJ3q5fImsZd&X-Amz-Signature=b8fda85d30a18d9c507b965289876470da291f8aa3291cee1172caea65fc3854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
