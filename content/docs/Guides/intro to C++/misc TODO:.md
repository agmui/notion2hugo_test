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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BYSWBS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzhdEMMfw1fNXMnFqVe6yec0dRHpZwBc8s6S26RhfcPAIgMTCzU5zZbtJoMgPKVqIGNmaViwH%2Be2%2FbciTO149cKmoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDExkd47br7peDm8P4SrcA5ZhdEA054KRM5Prj%2FDEnGm7xh5tPZI%2FUc5RXHjLUey83T8r2HCJFJ41QdTE%2FCB17yhxy83YxcRG4yMzhZPYnitIfI9JVnqrKxUp%2FTc4jdugTcbg1rAFa8mCNXmKPZDwwYS8OtLUKVdt8iqOTSqhcHOcy4oCQrfzCTyv%2FdEm43ekX2ODMWWlmmS%2F2FKSQXxr1PM1pdlAIVq0SHtlbLng82sXAN5yPj0LzxCoho7IeriknPjjuoUnp7jbWgI6Oy%2F9FS7EwkowjgUoSrCOBwp6vAMAXjsFXmrV78V3WfsP%2F64OPL6pgNAita3pLC0pmoAM9PbINai%2FsO0VtZ7k2BBJ%2BfQjUpvq2dtg9aj0a5ew990UzuOCgIQZJFWer%2F6IyCGwMYXD0Gsg6%2FBKyGfKiDnzsfY%2FAaAOCSv5jZBWr3uA1y849k62zENF9Y%2BNhp3%2BXtSUzpZJ5MtLPhf98TjvugCHUpe%2FGrj9Tpxs5T9RAYmSRhGbYRUq6j7iv44Jqo%2Fpb83QlwKvOdkapW%2FUL2w1ig%2BQpXVLbYtSSB14nHIUl%2FCxyr3SXpPYIFmE7SPHo9FScmLRWq8No8eCay%2BXJdtTTA28Xv5KNa%2BVpHWbs0greljLIJQSAS%2BQmiwiGeGPw3y%2BMMW5xcIGOqUBY9%2FtGHvaffwlTOy1lBQMjgARDZkNx%2FVJVKWB0QfbMxQdWGZ1ZFD3PZokhhMzNXwraFdJ6eDu0aTeKFFguSBV8hc9L1jRt04IjB%2FMrePlxQDeGwcur2N%2FtsOWpiekuGjTRPgAjDT5ZLy5SY2rBpvNmunmP7ccd8zyWVxVFJeMSLtSY0I73GYkUZP7HncUjjGIIwcxezg1S5P5au%2FwQ6vu%2BXBKfU36&X-Amz-Signature=b03598855246d42e7b1324eefe2f7487f462f6fc887470e2aeb100c44cdcf0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636BYSWBS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzhdEMMfw1fNXMnFqVe6yec0dRHpZwBc8s6S26RhfcPAIgMTCzU5zZbtJoMgPKVqIGNmaViwH%2Be2%2FbciTO149cKmoq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDExkd47br7peDm8P4SrcA5ZhdEA054KRM5Prj%2FDEnGm7xh5tPZI%2FUc5RXHjLUey83T8r2HCJFJ41QdTE%2FCB17yhxy83YxcRG4yMzhZPYnitIfI9JVnqrKxUp%2FTc4jdugTcbg1rAFa8mCNXmKPZDwwYS8OtLUKVdt8iqOTSqhcHOcy4oCQrfzCTyv%2FdEm43ekX2ODMWWlmmS%2F2FKSQXxr1PM1pdlAIVq0SHtlbLng82sXAN5yPj0LzxCoho7IeriknPjjuoUnp7jbWgI6Oy%2F9FS7EwkowjgUoSrCOBwp6vAMAXjsFXmrV78V3WfsP%2F64OPL6pgNAita3pLC0pmoAM9PbINai%2FsO0VtZ7k2BBJ%2BfQjUpvq2dtg9aj0a5ew990UzuOCgIQZJFWer%2F6IyCGwMYXD0Gsg6%2FBKyGfKiDnzsfY%2FAaAOCSv5jZBWr3uA1y849k62zENF9Y%2BNhp3%2BXtSUzpZJ5MtLPhf98TjvugCHUpe%2FGrj9Tpxs5T9RAYmSRhGbYRUq6j7iv44Jqo%2Fpb83QlwKvOdkapW%2FUL2w1ig%2BQpXVLbYtSSB14nHIUl%2FCxyr3SXpPYIFmE7SPHo9FScmLRWq8No8eCay%2BXJdtTTA28Xv5KNa%2BVpHWbs0greljLIJQSAS%2BQmiwiGeGPw3y%2BMMW5xcIGOqUBY9%2FtGHvaffwlTOy1lBQMjgARDZkNx%2FVJVKWB0QfbMxQdWGZ1ZFD3PZokhhMzNXwraFdJ6eDu0aTeKFFguSBV8hc9L1jRt04IjB%2FMrePlxQDeGwcur2N%2FtsOWpiekuGjTRPgAjDT5ZLy5SY2rBpvNmunmP7ccd8zyWVxVFJeMSLtSY0I73GYkUZP7HncUjjGIIwcxezg1S5P5au%2FwQ6vu%2BXBKfU36&X-Amz-Signature=1c1a428eaa5baacb33b34fd846b94a1b2fc619d812591145ad11fd248a205dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
