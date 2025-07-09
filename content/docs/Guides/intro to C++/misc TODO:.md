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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AH64EM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQPTIr8O1tnENtSzFfWjC5O7xxvPB4PrSXWOaZF3AF%2BAiEA2v3hz1DeQyThZ4uIVBAXyBbcWUFzHa0KizOFAGYHWSoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCHvLjJhVJdDMd9pSrcA0kvyj9oY0dVKhMGHlkq%2Fbt%2BPFOpjMQ3p5p24Ybq%2BXcB%2FqtWXknusj4c%2FUyr9tdCfjDjuQmsBJ7lbW7GWUnFIz8uGIwI5dwoxWhbX%2BJ%2FuaUrG2L9DjjWdI46Mjqs4jFAXuqtyKBSATyHL3kERRVIlfIMpX4JrlJirot56KU42cYjIUt83uOQiBBTfnkQhGchRRlqIoiaSYQc6MYbMIEcOYpmfszFLDuylw86AfgZ2A9CRgT5HukLBgkNO4rsK05VVYXOEDzi3wESyaxc1JLKDUds2CXqG4jsqQ7zC4tW1OkVwP4SvM3GPE%2BdDJMRhr%2BvIe7cXb61tOZTDbeKFJirTCfBOh4Udi%2Bm4Q5Dd6quQSdxlTBA4rIICFhx5dtsoEs4Rs1jGZc67USOXe6OHAEY8cByLo%2F7u9UoEbB3ERuXxWYri44zq8sFi%2FKEKUxfUfvA2E7G27WVlLoiC2czkFwvs3vnMZbqh5nNRe7qdcfxyMgnM94LSaZK46bYQDnYRMaDdV%2FMZ%2FVLH5zIBVEWM1OWqDYxvmIkXvvvt2QSMmJ%2BKGYvjxdaNnW%2BM4hCjlJrI50rXuXjAbi9cBj%2FhSXSbZTxE6qcGyrRPJ4XUZYLyjnwr0V92OE7%2FutLU2u2kTXxML%2BLucMGOqUBRQqMJvUGS9qX8NL%2FkNL1fyVFcPZaVJuszu0oCxFQpqcwkjZ8QIQaGRuWvmjKUOU6%2F55abuPKK8JgJHoI8neWcpZc0lsgfK1h3vpkbufisRhgAjxTKU3N7o3OT%2FGuGfdt6e7hWzLBlpJo66tThnpSTelyP1AaCeDQVk70u9NmfFsEKYmer35AlZAXsmSRbHo%2B%2FxX%2Bn6hE%2F7DjSziymsAx7zawkN3s&X-Amz-Signature=90aea059885df557ffcd6f231d3ac97af83083b02a0d90bc372e413f273cebef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4AH64EM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQPTIr8O1tnENtSzFfWjC5O7xxvPB4PrSXWOaZF3AF%2BAiEA2v3hz1DeQyThZ4uIVBAXyBbcWUFzHa0KizOFAGYHWSoqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCHvLjJhVJdDMd9pSrcA0kvyj9oY0dVKhMGHlkq%2Fbt%2BPFOpjMQ3p5p24Ybq%2BXcB%2FqtWXknusj4c%2FUyr9tdCfjDjuQmsBJ7lbW7GWUnFIz8uGIwI5dwoxWhbX%2BJ%2FuaUrG2L9DjjWdI46Mjqs4jFAXuqtyKBSATyHL3kERRVIlfIMpX4JrlJirot56KU42cYjIUt83uOQiBBTfnkQhGchRRlqIoiaSYQc6MYbMIEcOYpmfszFLDuylw86AfgZ2A9CRgT5HukLBgkNO4rsK05VVYXOEDzi3wESyaxc1JLKDUds2CXqG4jsqQ7zC4tW1OkVwP4SvM3GPE%2BdDJMRhr%2BvIe7cXb61tOZTDbeKFJirTCfBOh4Udi%2Bm4Q5Dd6quQSdxlTBA4rIICFhx5dtsoEs4Rs1jGZc67USOXe6OHAEY8cByLo%2F7u9UoEbB3ERuXxWYri44zq8sFi%2FKEKUxfUfvA2E7G27WVlLoiC2czkFwvs3vnMZbqh5nNRe7qdcfxyMgnM94LSaZK46bYQDnYRMaDdV%2FMZ%2FVLH5zIBVEWM1OWqDYxvmIkXvvvt2QSMmJ%2BKGYvjxdaNnW%2BM4hCjlJrI50rXuXjAbi9cBj%2FhSXSbZTxE6qcGyrRPJ4XUZYLyjnwr0V92OE7%2FutLU2u2kTXxML%2BLucMGOqUBRQqMJvUGS9qX8NL%2FkNL1fyVFcPZaVJuszu0oCxFQpqcwkjZ8QIQaGRuWvmjKUOU6%2F55abuPKK8JgJHoI8neWcpZc0lsgfK1h3vpkbufisRhgAjxTKU3N7o3OT%2FGuGfdt6e7hWzLBlpJo66tThnpSTelyP1AaCeDQVk70u9NmfFsEKYmer35AlZAXsmSRbHo%2B%2FxX%2Bn6hE%2F7DjSziymsAx7zawkN3s&X-Amz-Signature=fd39ce3d5560b8bca9ac792200127cb749b90864a5830ba11e3068874795c243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
