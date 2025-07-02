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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3MBROU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2hNmITNoocDzpjmBhifFjUpI8HC1wuQoTxgrPZORr6AIgLw81XrOjiqldwDj15s05zDH%2FjvChLWIwOlECow1cT80qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCak%2FWrMlTTAXv7mvircA5TDMAnJDn85TYiPWV2i7jpXEka28hcMaly%2Fy2%2BOAQiW98sEOxVPEdKVuixH7wx06LfFB0L22sktsoJasrpWVYH5XQDB%2BiI3wBROooyKuxYxHt2eZzx%2B40ZO6z6PZJafvFehUyCRDnSMMwA9WxGaKHkhBJ6KQGtoVjBqOoV17oAmMdPL1DylqTyMXZ18KqAQEUiNeW%2FrjKhsZZ5SY%2BkZSEIP3bdgLqz5gCLhtZNWAHy25fx%2FcUrOJz%2FdcAEHdQ7IteRB5LEvEp3LeCNRoRXvD1hK9xHm41Ygod3DA%2B1acdiO1cOZwnzQiu8nLpiCHWRJ2jnQf97HlmZqeGzAtkUDjU5K9tiFqryT7D9cJz7NcXyNPPzAz2aEi3aUVPwGd2mzSa5O1ebcXyU32iRRLrW25gOd5Okbtw4tXJyZaRyl%2Bi5KrH%2FbGgaqMvtZ53GnqZJVa60Z9OYFw2Rao7iZ0EH22eH13UARSPFBhYWJtg2rJ9GPosrJnLm6ok1jPNrdX5fzkl9xfzLknaOUa%2FFaNfYby7CJRAphJpfUp3%2FDaCFL9eoZWTNuMDJO%2B8xxUIM56oYRVRs5eKzyXCg8k3TK8K6g7R5a1Nye%2Bknr41v%2FJvDkgDP0NH7msTVot80q%2F9R%2FMJaTlcMGOqUBGsg%2BLyLE%2FLab6QuluqFSQ4dJu4ee%2B0Ay6iBvFsyCeRQL2laWDRQvQkzWN5XMHkQgmualdZnIYHFfqqc4ggxu8%2FD1fhAWq%2FY5WhNRz3i9Aj4iW2vbPHSs%2FuZBYPy1%2FH6KIsybI%2Bcc4uLAZh2CNuTyhvkZKd4S9lLvnx1nFqQkpTgolptVQV7miCiRExO9BXhUUGt8cyasmMbONNQYQJA8Vkf6new7&X-Amz-Signature=b43d13ec872b0772e97ba9b3c2026d9ba88e8757ac01c72c7fe6f0e965431858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3MBROU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T161041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2hNmITNoocDzpjmBhifFjUpI8HC1wuQoTxgrPZORr6AIgLw81XrOjiqldwDj15s05zDH%2FjvChLWIwOlECow1cT80qiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCak%2FWrMlTTAXv7mvircA5TDMAnJDn85TYiPWV2i7jpXEka28hcMaly%2Fy2%2BOAQiW98sEOxVPEdKVuixH7wx06LfFB0L22sktsoJasrpWVYH5XQDB%2BiI3wBROooyKuxYxHt2eZzx%2B40ZO6z6PZJafvFehUyCRDnSMMwA9WxGaKHkhBJ6KQGtoVjBqOoV17oAmMdPL1DylqTyMXZ18KqAQEUiNeW%2FrjKhsZZ5SY%2BkZSEIP3bdgLqz5gCLhtZNWAHy25fx%2FcUrOJz%2FdcAEHdQ7IteRB5LEvEp3LeCNRoRXvD1hK9xHm41Ygod3DA%2B1acdiO1cOZwnzQiu8nLpiCHWRJ2jnQf97HlmZqeGzAtkUDjU5K9tiFqryT7D9cJz7NcXyNPPzAz2aEi3aUVPwGd2mzSa5O1ebcXyU32iRRLrW25gOd5Okbtw4tXJyZaRyl%2Bi5KrH%2FbGgaqMvtZ53GnqZJVa60Z9OYFw2Rao7iZ0EH22eH13UARSPFBhYWJtg2rJ9GPosrJnLm6ok1jPNrdX5fzkl9xfzLknaOUa%2FFaNfYby7CJRAphJpfUp3%2FDaCFL9eoZWTNuMDJO%2B8xxUIM56oYRVRs5eKzyXCg8k3TK8K6g7R5a1Nye%2Bknr41v%2FJvDkgDP0NH7msTVot80q%2F9R%2FMJaTlcMGOqUBGsg%2BLyLE%2FLab6QuluqFSQ4dJu4ee%2B0Ay6iBvFsyCeRQL2laWDRQvQkzWN5XMHkQgmualdZnIYHFfqqc4ggxu8%2FD1fhAWq%2FY5WhNRz3i9Aj4iW2vbPHSs%2FuZBYPy1%2FH6KIsybI%2Bcc4uLAZh2CNuTyhvkZKd4S9lLvnx1nFqQkpTgolptVQV7miCiRExO9BXhUUGt8cyasmMbONNQYQJA8Vkf6new7&X-Amz-Signature=2fdb16b20aeb6d02ad9666c78bb3331e23f83cf660ab593da2512130aec6f8a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
